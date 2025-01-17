#!/usr/bin/env python
# -*- coding: utf-8 -*-

import urllib, json
import collections
from collections import Counter
import operator
import sys, os
import codecs
__author__ = 'AlexGruber'

perDateCountPath = 'WholeDates'
allWordsPath = 'wordAllCount'
threeLetterWordsPath = '../testFolder'
listOfCheckedWordsPath = "WCheckedList"
rootPath = "out"

politicsFile = '\ThreeLetterWords.txt'

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


avoidWords = [u'אך',u'לי',u'כדי',u'מה',u'ישראל', u'כל', u'את', u'של', u'זה', u'על', u'או', u'גם', u'אז', u'רק', 'and', 'the', 'of', u'עד', u'אשר', u'כי', u'אם', \
'in', 'to', 'a', 'that' ,'is', 'for', 'with', 'are', 'this', 'have', 'The', 'on', u'-', 'it', 'from', 'a' , \
'at', 'as', u'היא', u'אני', u'לא', u'עם', u'הוא', u'•', u'(', u')', u' ', u'', u"" , "", " ", \
u'בכל', u'כל', u'יש', u'לי', u'אך', u'היה', u'לו', u'לה', u'יש', u'שהוא', u"שלי", u'כך', \
u':', u'"', u',' ,u'–', u'?', u'!', u'.', u'**', u'***', u'*', u'יש', u'מי', u'הם', u'כדי', u'מה',
u'לנו', u'אבל', u'מול', u'אלא']

avoidWords2 = [u'-', u'•', u'(', u')', u' ', u'', u"" , "", " ", u':', u'"', u',' ,u'–', u'?', u'!', u'.', u'**', u'***', u'*']

militaryWords = u'צבא' , u'צה״ל', u'רמטכ״ל', u'נשק',u'אירן', u'אטום', u'ביטחון' ,\
 u'עזה' , u'ג׳האד', u'מלחמה', u'מבצע', u'סכסוך', u'איראני', u'הביטחון', u'חיזבאללה', u'דאעש', u'קבינט', \
 u'חמאס' , u'ג׳איסלאמית', u'טיל', u'קסאמים' , u'ג׳קסאם', u'ברזל'

sahbekimWords = u'אנחנו', u'יחד', u'ביחד', u'שלנו', u'כולנו', u'רובנו', u'רוב', u'עם', u'קבוצה', \
u'שיתוף', u'שותף', u'צוות'

narcistWords = u'אני', 'me', 'I'

kalkalaWords = u'כסף', u'כלכלה', u'עושר', u'עוני', u'העוני', u'קו העוני', u'תקציב', u'בורסה', u'מע״מ', u'מד״ד',u'מדד', \
u'העליון', u'העליון', u'מעמד', u'הביניים' ,u'משכורות', u'שכר', u'דירות', u'דיור', \
u'נדל״ן', u'קניה', u'מוצרים', u'מילקי', u'קוטג׳', u'ברלין' , u'תקציבים', u'מסים', u'מיסים', u'הכנסה'\
u'הכנסות', u'חשבת', u'החשבת',u'תוצר', u'יצוא', u'יבוא',u'תוצר', u'ייצוא', u'ייבוא'

avoidWordsRahlan = u'עו"ד', u'אנשים', u'ועשיה', u'איש', u'לבית', u'שאן', u'חזק', u'עיר', \
    u'ראש', u'עיריית', u'ראשון', u'לציון', u'רצון', u'שאן', u'חזק', u'עיר'

def getTargetIds(jsonData, list):
    response = urllib.urlopen(jsonData)
    data = json.loads(response.read())
    #if 'next' not in data["posts"]["paging"]:
    try:
     if 'next' not in data["paging"]:
        raise ValueError("No data for target")
        raise SystemExit(0)
     else:
         # print data["paging"]["next"]
         list.append(data["paging"]["next"])
         getTargetIds(data["paging"]["next"] , list)
    except:
        print "END!!!!"

def createBuffer_Next(url):
    list = ""
    tempDate=""
    response = urllib.urlopen(url)
    data = json.loads(response.read())
    try :
        parent = data["data"]
        for index in range(len(parent)):
            try:
                dateDict[parent[index]["created_time"]] = [parent[index]["message"] , parent[index]["id"]]
                allPostsIDsDict[parent[index]["id"]] = [parent[index]["message"], parent[index]["created_time"]]
                tempdict[parent[index]["created_time"]] = parent[index]["message"]
                list += parent[index]["message"]
            except:
                #print "Unexpected error:" , sys.exc_info()[0]
                errorCount=1
    except:
        print "no parent data"

    dateDict['6-6-6T6-6-6'] = ['end', 'end']
    return list

def createBuffer_Posts(url):
    list = ""
    tempDate=""
    response = urllib.urlopen(url)
    data = json.loads(response.read())
    try :
        parent = data["posts"]["data"]
        for index in range(len(parent)):
            try:
                dateDict[parent[index]["created_time"]] = [parent[index]["message"] , parent[index]["id"]]
                allPostsIDsDict[parent[index]["id"]] = [parent[index]["message"], parent[index]["created_time"]]
                tempdict[parent[index]["created_time"]] = parent[index]["message"]
                list += parent[index]["message"]
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
        #print date
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
                # # word = word.replace(u'"', u"")
                word = word.replace(u':', u"")
                # word = word.replace(u'(', u"")
                # word = word.replace(u')', u"")
                word = word.replace(u'*', u"")

                if not word in avoidWords and not word in politicByWordsGut:
                     # print "accpted ", word
                     try:
                         wordIdDict[word].append(msg[1])
                         tempBuildString.append(word)

                     except:
                         errorCount = 1
                # else:
                #     print "not accpted ", word
        else:
                # print tempDate
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

    # with open(perDateCountPath + '\\' + politicFileName + '.txt', 'w') as outfile:
    with open(os.path.join(rootPath, perDateCountPath, politicFileName + '.txt') , 'w') as outfile:
                        json.dump(tempJson, outfile, indent=4)
    tempJson.clear()
    dateDict.clear()
    del tempBuildString[:]
    del tempIdList[:]
    del tempWordsList[:]
    wordIdDict.clear()
    print "finished counting " + politicFileName

def AllwordCounter(wordsList, politicFileName):

    print "Counting Words"
    print len(allPostsIDsDict)

    for keyDict, valueDict in allPostsIDsDict.iteritems() :
        tempWordsList = valueDict[0].split()
        id = []
        for word in tempWordsList:
            word = word.replace(u'.', u"")
            word = word.replace(u'!', u"")
            word = word.replace(u'?', u"")
            word = word.replace(u'-', u"")
            word = word.replace(u',', u"")
            # word = word.replace(u'"', u"")
            word = word.replace(u':', u"")
            word = word.replace(u'(', u"")
            word = word.replace(u')', u"")
            word = word.replace(u'*', u"")
            # word = word.replace(u'\'', u"")
            if not word in avoidWords2 and not word in politicByWordsGut:
                wordCountPerPolitics[word] += 1
                wordIdPerPolitics[word].append(keyDict)
                dateDictForThreeLetter[word] = valueDict[1]

    politicsDictWords[politicFileName] = wordCountPerPolitics
    politicsDictId[politicFileName] = wordIdPerPolitics

    for politic, dictOfWords in politicsDictWords.iteritems() :
        print politic
        tempJson = {politicFileName:[],}
        for word, count in dictOfWords.iteritems() :
            # print word[1]
            tempJson[politicFileName].append({word : count})
            if wordIdPerPolitics.has_key(word):
                if dateDictForThreeLetter.has_key(word):
                    splitAllWordsByThreeLetters(threeLetterList, word, count, wordIdPerPolitics[word], politic, threeLetterDict, wordIdPerPolitics[word], dateDictForThreeLetter[word])
                    tempJson[politicFileName].append(wordIdPerPolitics[word])
    printToJsonTempDict(threeLetterDict, politicFileName)
    # with open(allWordsPath + '\\' + politicFileName + '.txt', 'w') as outfile:
    with open(os.path.join(rootPath, allWordsPath,  politicFileName + '.txt'), 'w') as outfile:
         json.dump(tempJson, outfile, indent=4)
    print "finished counting " + politicFileName
    wordIdPerPolitics.clear()
    politicsDictWords.clear()
    dictOfWords.clear()
    dateDictForThreeLetter.clear()
    allPostsIDsDict.clear()

def CheckWordsAgainstThelist(wordsList, politicFileName):

    countMilitaryWords = 0
    listWordsMilitaryWords = []
    countSahbekimWords = 0
    listWordsSahbekimWords = []
    countNacistWords = 0
    listWordsNacistWords = []
    countKalkalaWords = 0
    listWordsKalkalaWords = []
    countRahlanWords = 0
    listWordsRahlanWords = []

    print  "keys number in the tempDict in CheckWordsAgainstTheList :  " , len(tempdict.keys())

    for keyDict, valueDict in tempdict.iteritems() :
        tempWordsList = valueDict.split()

        for checkWord in tempWordsList:
                checkWord = checkWord.replace(u'.', u"")
                checkWord = checkWord.replace(u'!', u"")
                checkWord = checkWord.replace(u'?', u"")
                checkWord = checkWord.replace(u'-', u"")
                checkWord = checkWord.replace(u',', u"")
                checkWord = checkWord.replace(u'"', u"")
                checkWord = checkWord.replace(u':', u"")
                checkWord = checkWord.replace(u'(', u"")
                checkWord = checkWord.replace(u')', u"")
                checkWord = checkWord.replace(u'*', u"")
                if checkWord in militaryWords:
                        countMilitaryWords+=1
                        listWordsMilitaryWords.append(checkWord)
                if checkWord in sahbekimWords:
                        countSahbekimWords+=1
                        listWordsSahbekimWords.append(checkWord)
                if checkWord in narcistWords:
                        countNacistWords+=1
                        listWordsNacistWords.append(checkWord)
                if checkWord in kalkalaWords:
                        countKalkalaWords+=1
                        listWordsKalkalaWords.append(checkWord)
                if checkWord in politicByWordsGut:
                        if not checkWord in politicByWords:
                            countRahlanWords+=1
                            listWordsRahlanWords.append(checkWord)
                            # print checkWord, len(politicByWords)

    if politicDictWordsCount[politicFileName] > 35000 :
        politicDictMilitaryCount[politicFileName] = {"amount" : countMilitaryWords/float(politicDictWordsCount[politicFileName]), "wordsArray" : Counter(listWordsMilitaryWords).most_common(3)}
        politicDictSahbekimCount[politicFileName] = {"amount" : countSahbekimWords/float(politicDictWordsCount[politicFileName]), "wordsArray" : Counter(listWordsSahbekimWords).most_common(3)}
        politicDictNarcistCount[politicFileName] = {"amount" : countNacistWords/float(politicDictWordsCount[politicFileName]), "wordsArray" : Counter(listWordsNacistWords).most_common(3)}
        politicDictKalkalaCount[politicFileName] = {"amount" : countKalkalaWords/float(politicDictWordsCount[politicFileName]), "wordsArray" : Counter(listWordsKalkalaWords).most_common(3)}
        politicDictRahlanCount[politicFileName] =  {"amount" : countRahlanWords, "wordsArray" : Counter(listWordsRahlanWords).most_common(3)}
        # print politicFileName, countMilitaryWords, countMilitaryWords/float(politicDictWordsCount[politicFileName])

    del tempWordsList[:]
    tempdict.clear()

    del listWordsMilitaryWords[:]
    del listWordsSahbekimWords[:]
    del listWordsNacistWords[:]
    del listWordsKalkalaWords[:]
    del listWordsRahlanWords[:]

def splitAllWordsByThreeLetters(listOfThreeLetters, word, count, wordIds, folderName, tempDictJson, ids, date):
    if len(word) > 2 :
        try:
            if word[:3] in listOfThreeLetters:
               tempDictJson[word[:3]].append([{"Word" : word ,"Amount" : str(count),"date" : date.split('+')[0], "Array_id" : ids}])
        except:
            print "Unexpected error:" , sys.exc_info()[0]
            raise
    else:
        tempDictJson["2"].append([{"Word" : word ,"Amount" : str(count),"date" : date.split('+')[0], "Array_id" : ids}])

def printToJsonTempDict(tempDictJson, folderName):
    for keyDict, valueDict in tempDictJson.iteritems() :
        # print keyDict , valueDict
        newpath = os.path.join(rootPath,threeLetterWordsPath,folderName)
        if not os.path.exists(newpath): os.makedirs(newpath)
        with open(os.path.join(rootPath, threeLetterWordsPath, folderName, keyDict + '.txt'), 'w') as outfile:
             json.dump(tempDictJson[keyDict], outfile, indent=4)
    tempDictJson.clear()

def sortAndPrintMilitaryCount():

    sorted_politicDictMilitaryCount = sorted(politicDictMilitaryCount.items(), key=operator.itemgetter(1), reverse=True)

    with open(os.path.join(rootPath,listOfCheckedWordsPath, "militaryCountRecords_1.txt"), 'w') as outfile:
         json.dump(sorted_politicDictMilitaryCount, outfile,indent=4)

    tempPrintJson ={}

    for index in range(3):
        tempPrintJson[sorted_politicDictMilitaryCount[index][0]] = sorted_politicDictMilitaryCount[index][1]

    with open(os.path.join(rootPath,listOfCheckedWordsPath, "militaryCountRecords.txt"), 'w') as outfile:
         json.dump(sorted(tempPrintJson.items(), key=operator.itemgetter(1), reverse=True), outfile,indent=4)

def sortAndPrintSahbekimCount():
    sorted_politicDictSahbekimCount = sorted(politicDictSahbekimCount.items(), key=operator.itemgetter(1), reverse=True)

    with open(os.path.join(rootPath,listOfCheckedWordsPath,"SahbekimCountRecords_1.txt"), 'w') as outfile:
        json.dump(sorted_politicDictSahbekimCount, outfile,indent=4)

    tempPrintJson ={}

    for index in range(3):
        tempPrintJson[sorted_politicDictSahbekimCount[index][0]] = sorted_politicDictSahbekimCount[index][1]

    with open(os.path.join(rootPath,listOfCheckedWordsPath,"SahbekimCountRecords.txt"), 'w') as outfile:
        json.dump(sorted(tempPrintJson.items(), key=operator.itemgetter(1), reverse=True), outfile,indent=4)

def sortAndPrintNarcistCount():
    sorted_politicDictNarcistCount = sorted(politicDictNarcistCount.items(), key=operator.itemgetter(1), reverse=True)

    tempPrintJson ={}

    for index in range(3):
        tempPrintJson[sorted_politicDictNarcistCount[index][0]] = sorted_politicDictNarcistCount[index][1]

    with open(os.path.join(rootPath,listOfCheckedWordsPath, "narcistCountRecords.txt"), 'w') as outfile:
         json.dump(sorted(tempPrintJson.items(), key=operator.itemgetter(1), reverse=True), outfile,indent=4)

def sortAndPrintKalkalaCount():
    sorted_politicDictKalkalaCount = sorted(politicDictKalkalaCount.items(), key=operator.itemgetter(1), reverse=True)

    with open(os.path.join(rootPath,listOfCheckedWordsPath,"kalkalaCountRecords_1.txt"), 'w') as outfile:
         json.dump(sorted_politicDictKalkalaCount, outfile,indent=4)

    tempPrintJson ={}

    for index in range(3):
        tempPrintJson[sorted_politicDictKalkalaCount[index][0]] = sorted_politicDictKalkalaCount[index][1]

    with open(os.path.join(rootPath,listOfCheckedWordsPath, "kalkalaCountRecords.txt"), 'w') as outfile:
         json.dump(sorted(tempPrintJson.items(), key=operator.itemgetter(1), reverse=True), outfile,indent=4)

def sortAndPrintWordCount():
    sorted_politicDictWordsCount = sorted(politicDictWordsCount.items(), key=operator.itemgetter(1), reverse=True)

    with open(os.path.join(rootPath,listOfCheckedWordsPath,"wordsCountRecords_1.txt"), 'a') as outfile:
         json.dump(sorted_politicDictWordsCount, outfile,indent=4)

    tempPrintJson ={}

    for index in range(3):
        tempPrintJson[sorted_politicDictWordsCount[index][0]] = sorted_politicDictWordsCount[index][1]
    with open(os.path.join(rootPath,listOfCheckedWordsPath, "wordsCountRecords.txt"), 'w') as outfile:
          json.dump(sorted(tempPrintJson.items(), key=operator.itemgetter(1), reverse=True), outfile,indent=4)

def sortAndPrintRahlanCount():
    sorted_politicDictRahlanCount = sorted(politicDictRahlanCount.items(), key=operator.itemgetter(1), reverse=True)

    tempPrintJson ={}

    for index in range(3):
        tempPrintJson[sorted_politicDictRahlanCount[index][0]] = sorted_politicDictRahlanCount[index][1]
    with open(os.path.join(rootPath,listOfCheckedWordsPath, "rahlanCountRecords.txt"), 'w') as outfile:
          json.dump(sorted(tempPrintJson.items(), key=operator.itemgetter(1), reverse=True), outfile,indent=4)


print os.path.dirname(os.path.abspath(__file__)) + '/potilics.txt'
politicByWords=[]
politicCheckListArray = []
gutlist = []
politicByWordsGut = []

politicsArr = [line.strip() for line in open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'potilics.txt'))]
threeLetterWords = [line.strip() for line in open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ThreeLetterWords.txt'))]

f = codecs.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ThreeLetterWords.txt'), "r", "utf-8")
p = codecs.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'politicsName.txt'), "r", "utf-8")

for words in f.readlines():
    testlist.append(words.split())

for word in testlist:
    for cut in word:
        threeLetterList.append(cut)

for words in p.readlines():
    gutlist.append(words.split())

for word in gutlist:
    for cut in word:
        # print cut
        politicByWordsGut.append(cut)


for politic in politicsArr:
    url = "https://graph.facebook.com/" + politic + "?fields=posts.limit(200)%7Bmessage%7D&access_token=1719315164960950%7CnKFpk2SebwixsCQS3y7zQDPA1Ow"
    response = urllib.urlopen(url)
    data = json.loads(response.read())

    url2 = "https://graph.facebook.com/" + politic + "?fields=name"
    response2 = urllib.urlopen(url2)
    data2 = json.loads(response2.read())

    try :
        try:
            politicCheckListArray.append(data2["name"].split())
            for words in politicCheckListArray:
                for word in words:
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
                    politicByWords.append(word)
                    # print word, len(politicByWords)
        except:
            # errorCount=
            print "Unexpected error:" , sys.exc_info()[0]
            continue

        print "next:",data["posts"]["paging"]["next"]
        allPostsIDsDict ={}
        buildString = createBuffer_Posts(url)

        getTargetIds(data["posts"]["paging"]["next"], list_NextUrls)

        for url in list_NextUrls:
           buildString += createBuffer_Next(url)

        print "ALL ID's in the allPostIDsDict :  " , len(allPostsIDsDict.keys())

        politicDictWordsCount[politic] = len(buildString)
        AllwordCounter(buildString, politic)
        perDateCount(politic)
        CheckWordsAgainstThelist(buildString, politic)

        politicCheckListArray=[]
        politicByWords=[]
        list_NextUrls = []
        buildString = []
    except:
        print politic
        print "Unexpected error:" , sys.exc_info()[0]


sortAndPrintMilitaryCount()
sortAndPrintSahbekimCount()
sortAndPrintNarcistCount()
sortAndPrintKalkalaCount()
sortAndPrintWordCount()
sortAndPrintRahlanCount()



print 'done'
