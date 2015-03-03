#!/usr/bin/env python
# -*- coding: utf-8 -*-

import urllib, json
import collections
from collections import Counter
import operator
import sys, os
import codecs
__author__ = 'AlexGruber'

word = "סתם";
alpha = u"א", u"ב", u"ג", u"ד", u"ה", u"ו", u"ז", u"ח", u"ט", u"י", u"כ", u"ל", u"מ", u"נ", u"ס", u"ע", u"פ", u"צ", u"ק", u"ר", u"ש", u"ת", u"ץ", u"ך", u"ם", u"ן"
path = "c:\\testFolder\\"
poli = [line.strip() for line in open(os.path.dirname(os.path.abspath(__file__)) + '\potilics.txt')]

for num in range(0,22):
    for num2 in range(0,22):
        for num3 in range(0, 23):
            word=""
            word = alpha[num] + alpha[num2] + alpha[num3]
            # print word
            newpath = "c:\\pythonfiles\\" + word + ".txt"
            fileOpenWrite = open(newpath,'a')
            count = 0
            fileOpenWrite.write("[")
            for i in range(0, len(poli)):
                temppath = path + poli[i] + "\\" + word + ".txt"
                if os.path.exists(temppath):
                    if count == 0 :
                        fileOpenWrite.write("{\"id\":\"" + poli[i] + "\",\"resarr\":")
                    else:
                        fileOpenWrite.write(",{\"id\":\"" + poli[i] + "\",\"resarr\":")

                    count += 1
                    fileREAD = codecs.open(temppath, "r", "utf-8")
                    foundbug = False
                    for line in fileREAD.readlines():
                        for j in range(0, len(line)):
                            if j < len(line) - 1:
                                if line[j] == ']' and line[j+1] == '[':
                                    foundbug = True
                                    break
                        if(foundbug):
                           fileOpenWrite.write("]")
                           break

                        fileOpenWrite.write(line)
                    fileOpenWrite.write('}')
            fileOpenWrite.write(']')
print "DONE"