MainScript.py : 
	In the same folder with the script should be -
		*ThreeLetterWords.txt
		*politicsName.txt
		*potilics.txt

	mainly all what is required to integrate, is to choose where to output jsons

	AllwordCounter(..) -> outputs stuff to c:\\wordAllCount\\' + politicFileName + '.txt'

	printToJsonTempDict(tempDictJson, folderName) -> outputs stuff to c:\\testFolder\\' + folderName + '\\' + 			Threeletters + '.txt' ---> realTimeUpdate.py and ThreeLetterGather.py later work with this dir 	

	CheckWordsAgainstThelist(buildString, politic) -> does not output nothing, creates dicts to be outputted by
		*sortAndPrintMilitaryCount()
		*sortAndPrintSahbekimCount()
		*sortAndPrintNarcistCount()
		*sortAndPrintKalkalaCount()
		*sortAndPrintWordCount()
		*sortAndPrintRahlanCount()

	perDateCount(politic) -> outputs to 'c:\\WholeDates\\' + politicFileName + '.txt'


ThreeLetterGather.py:
	In the same folder with the script should be -
		*politicsName.txt	
	in the script -> var "path" is pointing to folder where resides all the splited to 3 letters json for each 			politician and var "newpath" is the location to output the merged JSONs

 
realTimeUpdate.py:
	In the same folder with the script should be 
		*potilics.txt	
	The location which scripts work with is path, which is set in the script to path = "C:\\testFolder\\" + politic + 	"\\" + ... the location should the one which is set for printToJsonTempDict(..) in the MainScript.py


