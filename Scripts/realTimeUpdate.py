#!/usr/bin/env python
# -*- coding: utf-8 -*-

import urllib, json
import collections
from collections import Counter
import operator
import sys, os
import codecs
__author__ = 'AlexGruber'

threeLetterWordsPath = 'testFolder'
perDateCountPath = 'WholeDates'
allWordsPath = 'wordAllCount'
rootPath = "c:/"

wordCountPerPolitics = collections.defaultdict(int)
wordIdPerPolitics = collections.defaultdict(list)
politicsDictWords = collections.defaultdict(dict)
politicsDictId = collections.defaultdict(dict)
dateDict = collections.OrderedDict()
dateMutliArray = []

list_NextUrls = list()
buffer_list = list()
buffer_string = ""
allPostsIDsDict ={}
wordIdDict = collections.defaultdict(list)
politicDictWordsCount={}
politicDictMilitaryCount = {}
politicDictSahbekimCount = {}
politicDictNarcistCount = {}
politicDictKalkalaCount = {}
politicDictRahlanCount = {}
tempdict={}
errorCount = 0

testlist = list()
threeLetterList = list()

stuctList = list()

threeLetterDict = collections.defaultdict(list)

dateDictForThreeLetter = {}


avoidWords = [u'ישראל', u'כל', u'את', u'של', u'זה', u'על', u'או', u'גם', u'אז', u'רק', 'and', 'the', 'of', u'עד', u'אשר', u'כי', u'אם', \
'in', 'to', 'a', 'that' ,'is', 'for', 'with', 'are', 'this', 'have', 'The', 'on', u'-', 'it', 'from', 'a' , \
'at', 'as', u'היא', u'אני', u'לא', u'עם', u'הוא', u'•', u'(', u')', u' ', u'', u"" , "", " " \
u':', u'"', u',' ,u'–', u'?', u'!', u'.', u'**', u'***', u'*']


dateDict = collections.OrderedDict()
allPostsIDsDict ={}
wordIdDict = collections.defaultdict(list)
tempdict={}
errorCount = 0


def createBuffer_Posts(url):
    list = ""
    response = urllib.urlopen(url)
    data = json.loads(response.read())
    try :
        parent = data["posts"]["data"]
        for index in range(len(parent)):
            try:
                allPostsIDsDict[parent[index]["id"]] = [parent[index]["message"] , parent[index]["created_time"]]
            except:
                errorCount=1
    except:
         print "no parent data"

    return list

def perDateCount(politicFileName):

    tempDate = ""
    tempBuildString=list()
    tempIdList = list()
    runOnce = True
    obj = []
    print "Counting Words"
    print len(allPostsIDsDict)

    tempJson = {"Dates" :{}}
    for date, msg in dateDict.iteritems() :
        print date
        Constdate = date.split("T")[0].split('-')[0] + ":" + date.split("T")[0].split('-')[1]
        if runOnce == True:
            tempDate = Constdate
            runOnce = False
        if tempDate == Constdate:
            try:
                tempWordsList = msg[0].split()
            except:
                errorCount = 1

            for word in tempWordsList:
                # if not word in avoidWords:
                word = word.replace(u'.', u"")
                word = word.replace(u'!', u"")
                word = word.replace(u'?', u"")
                word = word.replace(u'-', u"")
                word = word.replace(u',', u"")
                word = word.replace(u'"', u"")
                word = word.replace(u':', u"")
                word = word.replace(u'(', u"")
                word = word.replace(u')', u"")
                word = word.replace(u'*', u"")

                if not word in avoidWords:
                     try:
                         wordIdDict[word].append(msg[1])
                         tempBuildString.append(word)

                     except:
                         errorCount = 1
        else:
                JsonTempDate = tempDate
                tempDate = Constdate
                mostCommon = Counter(tempBuildString).most_common(10)
                printHeb = dict(mostCommon)
                sorted_x = sorted(printHeb.items(), key = operator.itemgetter(1), reverse=True)
                for key, value in sorted_x:
                      if wordIdDict.has_key(key):
                         obj.append({"Word" : key ,"Amount" : str(value), "array_id" : list(set(wordIdDict[key]))})
                tempJson["Dates"][JsonTempDate]=[obj]
                obj=[]
                del tempBuildString[:]
                del tempIdList[:]
                del tempWordsList[:]
                wordIdDict.clear()

    # with open('c:\\WholeDates\\' + politicFileName + '.txt', 'w') as outfile:
    #                     json.dump(tempJson, outfile, indent=4)
    tempJson.clear()
    dateDict.clear()
    del tempBuildString[:]
    del tempIdList[:]
    del tempWordsList[:]
    wordIdDict.clear()
    print "finished counting " + politicFileName

def AllwordCounter(politicFileName):

    # print "Counting Words"
    # print len(allPostsIDsDict)

    for keyDict, valueDict in allPostsIDsDict.iteritems() :
        tempWordsList = valueDict[0].split()
        id = []
        for word in tempWordsList:
            if not word in avoidWords:
                word = word.replace(u'.', u"")
                word = word.replace(u'!', u"")
                word = word.replace(u'?', u"")
                word = word.replace(u'-', u"")
                word = word.replace(u',', u"")
                word = word.replace(u'"', u"")
                word = word.replace(u':', u"")
                word = word.replace(u'(', u"")
                word = word.replace(u')', u"")
                word = word.replace(u'*', u"")
                word = word.replace(u'\'', u"")
                wordCountPerPolitics[word] += 1
                wordIdPerPolitics[word].append(keyDict)
                dateDictForThreeLetter[word] = valueDict[1]

    politicsDictWords[politicFileName] = wordCountPerPolitics
    politicsDictId[politicFileName] = wordIdPerPolitics

    for politic, dictOfWords in politicsDictWords.iteritems() :
        # print politic
        tempJson = {politicFileName:[],}
        for word, count in dictOfWords.iteritems() :
            # print word[1]
            tempJson[politicFileName].append({word : count})
            if wordIdPerPolitics.has_key(word):
                if dateDictForThreeLetter.has_key(word):
                    splitAllWordsByThreeLetters(threeLetterList, word, count, wordIdPerPolitics[word], politic, threeLetterDict, wordIdPerPolitics[word], dateDictForThreeLetter[word])
                    tempJson[politicFileName].append(wordIdPerPolitics[word])
    # printToJsonTempDict(threeLetterDict, politicFileName)
    with open(os.path.join(rootPath,allWordsPath, politicFileName + '.txt'), 'w') as outfile:
         json.dump(tempJson, outfile, indent=4)
    print "finished counting " + politicFileName
    wordIdPerPolitics.clear()
    politicsDictWords.clear()
    dictOfWords.clear()
    dateDictForThreeLetter.clear()
    allPostsIDsDict.clear()

def splitAllWordsByThreeLetters(listOfThreeLetters, word, count, wordIds, folderName, tempDictJson, ids, date):
        try:
               tempDictJson[word].append([{"Word" : word ,"Amount" : str(count),"date" : date.split('+')[0], "Array_id" : ids}])
        except:
            print "Unexpected error:" , sys.exc_info()[0]

def printToJsonTempDict(tempDictJson, folderName):
    for keyDict, valueDict in tempDictJson.iteritems() :
        # print keyDict , valueDict
        newpath = os.path.join(rootPath,threeLetterWordsPath, folderName)
        if not os.path.exists(newpath): os.makedirs(newpath)
        with open(os.path.join(rootPath,threeLetterWordsPath,folderName, keyDict + '.txt'), 'a') as outfile:
             json.dump(tempDictJson[keyDict], outfile, indent=4)
    tempDictJson.clear()


tempNewWordsDict = {}

politicsArr = [line.strip() for line in open(os.path.dirname(os.path.abspath(__file__)) + '\potilics.txt')]

for politic in politicsArr:
    url = "https://graph.facebook.com/" + politic + "?fields=posts.limit(200)%7Bmessage%7D&access_token=1719315164960950%7CnKFpk2SebwixsCQS3y7zQDPA1Ow"
    createBuffer_Posts(url)
    AllwordCounter(politic)

    for key , word in threeLetterDict.iteritems() :
        # print word[0][0]['date']
        # print word[0][0]['Word'][:3]
        # print word[0][0]['Array_id']

        path = os.path.join(rootPath,threeLetterWordsPath, politic, word[0][0]['Word'][:3] + ".txt")
        if os.path.exists(path):
            with open(path, "r") as jsonFile:
                jsonToUpdate = json.load(jsonFile)
            found = False
            try :
                for index in range(0, len(jsonToUpdate)):
                    # print word[0][0]['Word']
                    if word[0][0]['Word'] == jsonToUpdate[index][0]["Word"]:
                        found = True
                        if word[0][0]['date'] > jsonToUpdate[index][0]["date"]:
                           jsonToUpdate[index][0]["date"] = word[0][0]['date']
                           jsonToUpdate[index][0]["Amount"] = int(jsonToUpdate[index][0]["Amount"]) + int(word[0][0]['Amount'])
                           jsonToUpdate[index][0]["Array_id"] = jsonToUpdate[index][0]["Array_id"] + word[0][0]["Array_id"]
                           with open(path, 'w') as UpdateJson:
                                UpdateJson.write(json.dumps(jsonToUpdate))


                if found == False:
                    # print word[0][0]['Word'], word[0][0]["date"], index ,politic , int(word[0][0]['Amount'])
                    tempNewWordsDict[word[0][0]['Word']] = word[0][0]["date"] ,int(word[0][0]['Amount']), path , word[0][0]['Array_id']
            except:
                 print "no parent data" , politic

    for key , word in tempNewWordsDict.iteritems():
        # print key
        # print word[1]
        # print word[2]
        with open(word[2], 'r') as jsonToUpdate:
            json_data = json.load(jsonToUpdate)
            # json_data[0].append([{"Word" : key ,"Amount" : str(word[1]),"date" : word[0].split('+')[0]}])
            json_data.append([{"Word" : key ,"Amount" : str(word[1]),"date" : word[0].split('+')[0] , "Array_id": word[3]}])

        with open(word[2], 'w') as f:
             f.write(json.dumps(json_data))

    allPostsIDsDict.clear()
    threeLetterDict.clear()
    tempNewWordsDict.clear()
print "DONE"