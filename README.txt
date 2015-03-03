MainScript.py : 
	In the same folder with the script should be -
		*ThreeLetterWords.txt
		*politicsName.txt
		*potilics.txt

	mainly all what is required to integrate, is to choose where to output jsons

	AllwordCounter(..) -> outputs stuff to c:\\wordAllCount\\' + politicFileName + '.txt'

	printToJsonTempDict(tempDictJson, folderName) -> outputs stuff to c:\\testFolder\\' + folderName + '\\' + 			
	Threeletters + '.txt' ---> realTimeUpdate.py and ThreeLetterGather.py later work with this dir 	

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
	in the script -> var "path" is pointing to folder where resides all the splited to 3 letters json for each politician and var "newpath" is the location to 	output the merged JSONs

 
realTimeUpdate.py:
	In the same folder with the script should be 
		*potilics.txt	
	The location which scripts work with is path, which is set in the script to path = "C:\\testFolder\\" + politic + 	"\\" + ... the location should the one 	which is set for printToJsonTempDict(..) in the MainScript.py


Step by step - tutorial:


	step one : Copy scripts to some folder you choose, I would create a new folder and call it "pythonScripts"

	step two : Then copy ThreeLetterWords.txt, politicsName.txt, potilics.txt to the same folder ~"pythonScripts"

	step three : Create folder for all jsons outputted by python scripts, I would call it "pythonScriptsOutput"

	step four : in the pythonScriptOutput create folders to store all the jsons of politicians which split to three letters and change the default path in
		     -> printToJsonTempDict(tempDictJson, folderName), folder where you will store the jsons by date change the default path in -> perDateCount(politic)
		     folder where you will store jsons with predefined data change default paths in 
			*sortAndPrintMilitaryCount()
			*sortAndPrintSahbekimCount()
			*sortAndPrintNarcistCount()
			*sortAndPrintKalkalaCount()
			*sortAndPrintWordCount()
			*sortAndPrintRahlanCount()
	     

	step five : In ThreeletterGather.py change var path to where devided jsons of politican's resides (this is the folder that you set for ), 
	           change default path to where you want to output the merged jsons, the folder of outputted jsons should be the one that Nir uses for his feed.

	step six : run MainScript.py to create starting database of jsons.

	step seven : After step six is compliete run ThreeletterGather.py to create jsons that Nir uses for the website 
	
	step eight : In realTimeUpdate.py set default path to the one you set for printToJsonTempDict(tempDictJson, folderName) and then run on daily/hourly/5-minly 	             basis 
	
	step nine : After step eight is complete go to step seven.


