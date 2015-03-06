/**
 * @author user
 */



var domain = "http://viz.calcalist.co.il/otr/data/";
var json = {
	"array":
	[
		{"file":"militaryCountRecords.txt"},	
		{"file":"kalkalaCountRecords.txt"},
		{"file":"narcistCountRecords.txt"},
		{"file":"SahbekimCountRecords.txt"},
		{"file":"wordsCountRecords.txt"},
		{"file":"rahlanCountRecords.txt"}
	]
}; 

var poli_json = {
	 "people":
    [
    	{
           	"name": "בנימין נתניהו",
            "id": "Netanyahu",
            "gender":"M"
        },
        {
           	"name": "יצחק(בוזי) הרצוג",
            "id": "IsaacHerzog",
            "gender":"M"
        },
        {
           	"name": "ציפי לבני",
            "id": "tzipilivni",
            "gender":"F"
        },
        {
           	"name": "נפתלי בנט",
            "id": "NaftaliBennett",
            "gender":"M"
        },
        {
           	"name": "יאיר לפיד",
            "id": "YairLapid",
            "gender":"M"
        },
        {
            "name": "משה כחלון",
            "id": "Moshekahalon",
            "gender":"M"
        },
        {
           	"name": "זהבה גלאון",
            "id": "zehavagalon",
            "gender":"F"
        },
        {
           	"name": "אריה דרעי",
            "id": "DeryArye",
            "gender":"M"
        },
        {
           	"name": "אביגדור ליברמן",
            "id": "AvigdorLiberman",
            "gender":"M"
        },
        {
            "name": "אלי ישי",
            "id": "137409609701165",
            "gender":"M"
        },
        {
            "name": "משה(בוגי) יעלון",
            "id": "173196886046831",
            "gender":"M"
        },
        {
            "name": "עיסאוי פריג'",
            "id": "166156570202888",
            "gender":"M"
        },
        {
            "name": "רויטל סויד",
            "id": "212547315512949",
            "gender":"F"
        },
        {
            "name": "חיליק בר",
            "id": "620206311338749",
            "gender":"M"
        },
        {
            "name": "אבשלום אבו-וילן",
            "id": "829660960390410",
            "gender":"M"
        },
        {
            "name": "עמר בר-לב",
            "id": "156632191145120",
            "gender":"M"
        },
        {
            "name": "דני עטר",
            "id": "224562257709477",
            "gender":"M"
        },
        {
            "name": "דוד אמסלם",
            "id": "davidamsalemjerusalem",
            "gender":"M"
        },
        {
            "name": "איתן כבל",
            "id": "174411199282819",
            "gender":"M"
        },
        {
            "name": "אלי בן-דהן",
            "id": "EllibenDahan",
            "gender":"M"
        },
        {
            "name": "אראל מרגלית",
            "id": "erelmargalit",
            "gender":"M"
        },
        {
            "name": "יעל גרמן",
            "id": "GermanYeshAtid",
            "gender":"F"
            
        },
        {
            "name": "גלעד ארדן",
            "id": "207139259326193",
            "gender":"M"
        },
        {
            "name": "איציק שמולי",
            "id": "404314496289809",
            "gender":"M"
        },
        {
            "name": "ג'קי לוי",
            "id": "jakilevi2013",
            "gender":"M"
        },
        {
            "name": "מאיר כהן",
            "id": "meircoh",
            "gender":"M"
        },
        {
            "name": "מרב מיכאלי",
            "id": "MichaeliMerav",
            "gender":"F"
        },
        {
            "name": "מיכל רוזין",
            "id": "617957021581571",
            "gender":"F"
        },
        {
            "name": "מיכל בירן",
            "id": "MichalBiran",
            "gender":"F"
        },
        {
            "name": "מיקי רוזנטל",
            "id": "520086018021432",
            "gender":"M"
        },
        
        {
            "name": "גילה גמליאל",
            "id": "142479632494944",
            "gender":"F"
        },
        {
            "name": "אילן גילאון",
            "id": "MKIlanGilon",
            "gender":"M"
        },
       
        {
            "name": "מוטי יוגב",
            "id": "mottiyogev",
            "gender":"M"
        },
        {
            "name": "נחמן שי",
            "id": "NachmanShai",
            "gender":"M"
        },
        {
            "name": "ניסן סלומינסקי",
            "id": "NissanSlomiansky",
            "gender":"M"
        },
        {
            "name": "אופיר אקוניס",
            "id": "OfirAkunis",
            "gender":"M"
        },
        {
            "name": "אורית סטרוק",
            "id": "oritstrook",
            "gender":"F"
        },
        {
            "name": "אורלי לוי-אבקסיס",
            "id": "612784452070209",
            "gender":"F"
        },
        {
            "name": "עמיר פרץ",
            "id": "154570404606299",
            "gender":"M"
        },
        {
            "name": "אביחי רונצקי",
            "id": "rontzkiavi",
            "gender":"M"
        },
        {
            "name": "שאול מופז",
            "id": "201172239926506",
            "gender":"M"
        },
        {
            "name": "שולי מועלם",
            "id": "438831352866459",
            "gender":"F"
        },
        {
            "name": "סילבן שלום",
            "id": "102997256411052",
            "gender":"M"
        },
        {
            "name": "יובל שטייניץ",
            "id": "steinitzyuval50",
            "gender":"M"
        },
        {
            "name": "תמר זנדברג",
            "id": "tamarzandberg",
            "gender":"F"
        },
        {
            "name": "הנגבי צחי",
            "id": "297207456997968",
            "gender":"M"
        },
        {
            "name": "ציפי חוטובלי",
            "id": "TzipiHotovely",
            "gender":"F"
        },
        {
            "name": "אורי אריאל",
            "id": "394242203948130",
            "gender":"M"
        },
        
        {
            "name": "לוין יריב",
            "id": "341448679281672",
            "gender":"M"
        },
        {
            "name": "יוסי יונה",
            "id": "YossiYonah",
            "gender":"M"
        },
        {
            "name": "אדלשטיין יולי",
            "id": "YuliEdelstein",
            "gender":"M"
        },
        
        {
           	"name": "איילת שקד",
            "id": "237683826350051",
            "gender":"F"
        },
        {
           	"name": "דני דנון",
            "id": "DanonDanny",
            "gender":"M"
        },
        
        
        {
           	"name": "ישראל כץ",
            "id": "katzisraellikud",
            "gender":"M"
        },
        {
           	"name": "משה פייגלין",
            "id": "MFeiglin",
            "gender":"M"
        },
        {
           	"name": "מירי רגב",
            "id": "118410851589072",
            "gender":"F"
        },
        
        {
           	"name": "שלי יחימוביץ",
            "id": "ShellyYachimovich",
            "gender":"F"
        },
        {
        	"name": "שי פירון",
            "id": "281431865311442",
            "gender":"M"
        },
        {
        	"name": "סופה לנדבר",
            "id": "442386732471209",
        },
        {
        	"name": "אילן שוחט",
            "id": "195437940588631",
        },
        {
        	"name": "שרון גל",
            "id": "sharongal100",
        },
        {
        	"name": "חמד עמאר",
            "id": "aamarhamad",
        },
        {
        	"name": "רוברט אילטוב",
            "id": "102155496619137",
        },
        {
        	"name": "עודד פורר",
            "id": "ForerOded",
        },
        {
        	"name": "יוליה מלינובסקי",
            "id": "625040900863570",
        },
        {
        	"name": "יוני שטבון",
            "id": "318718848205174",
        },
        {
        	"name": "מיכאל בן-ארי",
            "id": "MichaelsonSonLion",
        },
        {
        	"name": "ברוך מרזל",
            "id": "Officialbaruchmarzel",
        },
        {
        	"name": "עופר שלח",
            "id": "OferYeshAtid",
        },
        {
        	"name": "חיים ילין",
            "id": "350522538451081",
        },
        {
        	"name": "קארין אלהרר",
            "id": "457794627605948",
        },
        {
        	"name": "יואל רזבוזוב",
            "id": "371426819606751",
        },
         {
        	"name": "עליזה לביא",
            "id": "402936269773132",
        },
         {
        	"name": "מיקי לוי",
            "id": "LevyYeshAtid",
        },
         {
        	"name": "אלעזר שטרן",
            "id": "SternElazar",
        },
         {
        	"name": "פנינה תמנו-שטה",
            "id": "PninaTamano",
        },
         {
        	"name": "רות קלדרון",
            "id": "377452172353770",
        },
         {
        	"name": "בועז טופרובסקי",
            "id": "boaztoporovsky",
        },
        
         {
        	"name": "מנואל טרכטנברג",
            "id": "Trajtenberg",
        },
         {
        	"name": "יואל חסון",
            "id": "MKHasson",
        },
         {
        	"name": "איתן ברושי",
            "id": "389464081230676",
        },
         {
        	"name": "קסניה סבטלובה",
            "id": "SvetlovaKsenia",
        },
         {
        	"name": "זוהיר בהלול",
            "id": "zohirbhlol",
        },
        {
        	"name": "יואב גלנט",
            "id": "YoavGallant",
        },
        {
        	"name": "אלי אלאלוף",
            "id": "EliElalouf",
        },
        {
        	"name": "מייקל אורן",
            "id": "AmbassadorOren",
        },
        {
        	"name": "יפעת שאשא-ביטון",
            "id": "sbyifat",
        },
        {
        	"name": "אלי כהן",
            "id": "450583275090800",
        },
        {
        	"name": "מירב בן-ארי",
            "id": "1000293466651925",
        },
        {
        	"name": "מוסי רז",
            "id": "632771873441351",
        },
        {
        	"name": "אבי דבוש",
            "id": "DabushMeretz",
        },
        {
        	"name": "איימן עודה",
            "id": "AymanOdeh1975",
        },
        {
        	"name": "דב חנין",
            "id": "dovhanin",
        },
        {
        	"name": "דוד ביטן",
            "id": "348254355276420",
        },
        {
        	"name": "יואב קיש",
            "id": "1578176972413229",
        },
        {
        	"name": "איוב קרא",
            "id": "258598010822055",
        }
        
   
        
    ]
};
var searchword;

$(document).ready(function(){
	$(' body ').scroll(function(){
        console.log("scrolled!");
    });
	
	
	$('.ani').hover(function(){
	  $(this).animate({'margin-top': '-45px'},'slow');
	  //$(this).css('margin-top', '-45px');
	  $(this).children('p').css('display','block');
	 },function(){
	  $(this).animate({'margin-top': '10px'},'slow');
	  //$(this).css('margin-top', '10px');
	  $(this).children('.results').css('display','none');
	 });
	 $('.ani').click(function(){
		 console.log($(this).css('margin-top'));
		 if ($(this).css('margin-top')=="-45px"){
		 	$(this).animate({'margin-top': '10px'},'slow');
		  	$(this).children('.results').css('display','none');
		 }else {
		 	 $(this).animate({'margin-top': '-45px'},'slow');
		  	$(this).children('p').css('display','block');
		 }
	 });
	 
	 
	 

	var start;
	$.each(json.array, function(i,v){
		var temp = domain + 'WCheckedList/' + v.file;
		$.ajax({
			
			url:temp,
			dataType: 'json',
			type: 'get',
			success: function(data){
				for(index=0; index<data.length; index++){
					if(index==0){
						start = 1+(i*3);
					}
					if (start < 13){
						$('#sec' + (start+index)).css('background-image','url("https://graph.facebook.com/'+ data[index][0] +'/picture?type=large")');
						var res = $('#sec' + (start+index)).siblings('.results');
						//console.log(res);
						
						
						if (i != 2){
							for(var k=0; k<data[index][1].wordsArray.length; k++){
								$(res).append('<div>' + data[index][1].wordsArray[k][0] + '</div>');
							}
							//$(res).append('<div>' + data[index][1].wordsArray[0][0] + '</div><div>' + data[index][1].wordsArray[1][0] + '</div><div>' + data[index][1].wordsArray[2][0] + '</div>');
						}
						$.each(poli_json.people, function(i2,v2){
							if (v2.id==data[index][0]){
								$('#name' + (start+index)).append('&ensp;' + v2.name + '&ensp;');
							}
						});
					}else if(start > 15){
						$('.top' + (start+index)).css('background-image','url("https://graph.facebook.com/'+ data[index][0] +'/picture?type=large")');
						var res = $('.top' + (start+index)).siblings('.results');
						//$(res).append(data[index][1].wordsArray[0] + '<br>' + data[index][1].wordsArray[1] + '<br>' + data[index][1].wordsArray[2]);
						$.each(poli_json.people, function(i2,v2){
							if (v2.id==data[index][0]){
								$('.name' + (start+index)).append('&ensp;' + v2.name + '&ensp;');
							}
						});
						var res = $('#sec' + (start+index)).siblings('.results');
						for(var k=0; k<data[index][1].wordsArray.length; k++){
							$(res).append('<div>' + data[index][1].wordsArray[k][0] + '</div>');
						}
						//$(res).append('<div>' + data[index][1].wordsArray[0][0] + '</div><div>' + data[index][1].wordsArray[1][0] + '</div><div>' + data[index][1].wordsArray[2][0] + '</div>');
					
					
					}else{
						$('.top' + (start+index)).css('background-image','url("https://graph.facebook.com/'+ data[index][0] +'/picture?type=large")');
						var res = $('.top' + (start+index)).siblings('.results');
						//$(res).append(data[index][1].wordsArray[0] + '<br>' + data[index][1].wordsArray[1] + '<br>' + data[index][1].wordsArray[2]);
						$.each(poli_json.people, function(i2,v2){
							if (v2.id==data[index][0]){
								$('.name' + (start+index)).append('&ensp;' + v2.name + '&ensp;');
							}
						});
						
					}
				}
			} ,
			error: function(jqXHR,textStatus,err){
				console.log(textStatus + " " + err);
			} 
			
		});
	});
	
	$('#slider').anyslider({
		nextLabel: "",
		prevLabel: "",
		showControls: true,
		showBullets: true,
		interval: 0
	});
	
	$(' #next ').click(function(){
		$('#slider').next();		
	});
	$(' #prev ').click(function(){
		$('#slider').prev();
	});
	

	
});
// אם משהו רואה את זה אז שידע שפרפור היא הבחורה הכי יפה בעולם ואני הולך להתחתן איתה יום אחד
var ajaxcounter;

var top10 = [];  // [0]=amount [1]=name [2]=id [3]=Array_id [4]=word
$(function(){
	$("input").keyup(function(event) {
		if(event.keyCode == 13){
			//console.log(poli_json.people.length -1);
			ajaxcounter = 0;
			$(' #loading ').css('display','block');
			top10 = [];
			var poli_name;
			var poli_id;
			searchword = $(this).val();
			if (searchword[searchword.length-1] == " "){
				searchword = searchword.substring(0,searchword.length-1);
			}
			var first3;
			if (searchword.length > 2){
				first3 = searchword.substring(0,3);
			}else{
				first3 = "2";
			}
			$.ajax({
				//crossDomain: true,
				url:domain + 'pythonFiles/' + first3 + '.txt',
				//url:domain + 'myphp.php',
				dataType: 'json',
				type: 'get',
				//data:{word:first3},
				success:  function(data){
					//console.log(data);
					for(var i=0; i<data.length; i++){
						for(var j=0; j<poli_json.people.length; j++){
							if(poli_json.people[j].id == data[i].id){
								var name = poli_json.people[j].name;
							}
							
						}
						for(var j=0; j<data[i].resarr.length; j++){
							if (data[i].resarr[j][0].Word == searchword){
								var temp=[data[i].resarr[j][0].Amount, name, data[i].id, data[i].resarr[j][0].Array_id, searchword];
								top10.push(temp);
							}
						}
						
						
						
					}
					if (top10.length > 0){
						$('.oops').css('display','none');
						top10 = top10.sort(function(a,b){
						return (b[0]-a[0]);
						});
						//console.log(top10);
						for (var j=0 ; j<top10.length ; j++){
							$('#ptop' + (j+1)).css('background-image','url("https://graph.facebook.com/'+ top10[j][2] +'/picture?type=large")');
							$('#ptop' + (j+1)).parent().css("display","block");	
							$('#ptop' + (j+1)).siblings(' p ').empty();
							$('#ptop' + (j+1)).siblings(' p ').append('&ensp;' + top10[j][1] + '&ensp;');
							$('#ptop' + (j+1)).siblings(' .circle ').empty();
							$('#ptop' + (j+1)).siblings(' .circle ').append('<b>' + top10[j][0] + '</b>');
							if(j>9){break;}	
							
							
						}
						
					}else{
						var j=0;
						$('.oops').css('display','block');
					}
					while (j<11){
						$('#ptop' + (j+1)).parent().css("display","none");
						j++;
					}
					$(' #loading ').css('display','none');
					
			
				},
				
				 error: function (xhr, ajaxOptions, thrownError) {
			        console.log(xhr.status);
			        console.log(thrownError);
			        for(j=0; j<11; j++){
			        	$('#ptop' + (j+1)).parent().css("display","none");
			        } 
					$(' #loading ').css('display','none');
					$('.oops').css('display','block');
				}
					
				
			});
			
		}
	   
	});
});

$('.message').perfectScrollbar();
//$('.featherlight-content').perfectScrollbar();



var outputarray = [];




var FBapicounter;

var accesstoken = "1719315164960950|nKFpk2SebwixsCQS3y7zQDPA1Ow";
$(document).ready(function(){
	$(' .search ').click(function(){
		for(t=0; t<outputarray.length; t++){
			outputarray[t] = [];
		}
		outputarray = [];
		FBapicounter = 0;
		var parentobject = $(this).parent(); 
		parentobject = $(parentobject).get(0);
		//console.log(object);
		var finaloutput = '<div class="lightpic" dir="rtl">';
		finaloutput = finaloutput + parentobject.innerHTML;
		finaloutput = finaloutput + '</div>';
		//console.log(finaloutput);
		var temp = $(this).attr('id');
		var index = temp.substring(4,temp.length);
		var single = [];
		$.each(top10[index-1][3], function(i, el){
		    if($.inArray(el, single) === -1) single.push(el);
		});
		//console.log(single);
		finaloutput = finaloutput + '<p class="lightdate2" dir="rtl" style="width:100%;margin-bottom:16px;margin-right:26px;"><b class="textblue">נמצאו '+ top10[index-1][0] +' תוצאות:</b></p>';
	
		for (var k=0; k<single.length; k++){
			$.ajax({
					crossDomain: true,
					url:'http://kikar.hasadna.org.il/api/v1/facebook_status/?status_id=' + single[k],
					dataType: 'jsonp',
					type: 'GET',
					success:  function(data){
						//console.log(data.objects[0]);
						if(FBapicounter == 0){
							$(' #loading ').css('display','block');
						}
						FBapicounter++;
						if (data.objects[0] != null){
							var isfirst = true;
							var tempword =top10[index-1][4] + ' ';
							for (var i=0; i<tempword.length; i++){
								if(data.objects[0].content[i] != tempword[i]){
									isfirst = false;
									break;
								}
							}
							if (isfirst == true){
								console.log("first!");
								var n = 0;
							}
							else{
								console.log("not first");
								var searchstart = tempword.length+1;
								console.log(searchstart);
								tempword =' ' + top10[index-1][4] + ' ';
								var n = data.objects[0].content.indexOf(tempword,searchstart);
								//console.log(n);
								if( n == -1){
									n = data.objects[0].content.indexOf(top10[index-1][4],searchstart);
								}
								else{
									n = n+1;
								}
								
								
							}
							//console.log(tempword);
							
							var dat = false;
							for (var l=n; l>0; l--){
								if (data.objects[0].content[l] == "."){
									dat = true;
									break;
								}
							}
							for (var p=n; p<data.objects[0].content.length; p++){
								if (data.objects[0].content[p] == "."){
									break;
								}
							}
							if (dat == true){
								var tempstr1 = data.objects[0].content.substring(l+1,n);
							}else{
								var tempstr1 = data.objects[0].content.substring(l,n);
							}
							var tempstr2 = data.objects[0].content.substring(n+top10[index-1][4].length,p+1);
							var date = data.objects[0].published.substring(0,10);
							var datepretty = date.substring(8,10) + "." + date.substring(5,7) + "." + date.substring(0,4);
							var st1='';
							var st2='';
							if (_mobile){
								st1= 'style=" font-size: 30px !important; "';
								st2= 'style=" font-size: 26px !important; margin-right: 25px !important; line-height: 40px !important; "';
							}
							var temporary = [date.substring(0,4),date.substring(5,7),date.substring(8,10),'<p class="textlightbox" dir="rtl"><p class="lightdate1" '+st1+'><b class="textblue">' + datepretty + '</b></p><p class="lightdate2" '+st2+' dir="rtl">' +  tempstr1 + '<b class="textblue">' + top10[index-1][4] + '</b>' + tempstr2 +' <a target="_blank" href="'+ data.objects[0].facebook_link +'" style="text-decoration:none; color:#2490f5;"> >></a><br><br></p>'];
							outputarray.push(temporary);
						}
						if (FBapicounter == single.length){
							outputarray = outputarray.sort(function(a,b){
								if ((Number(b[0])-Number(a[0])) == 0){
									if((Number(b[1])-Number(a[1])) == 0){
										return (Number(b[2]) - Number(a[2]));							
									}else{
										return (Number(b[1]) - Number(a[1]));
									}
								}else{
									return (Number(b[0]) - Number(a[0]));
								}
								
							});
							
							for (i=0; i<outputarray.length; i++){finaloutput = finaloutput + outputarray[i][3];} 
							finaloutput = finaloutput + '<p class="lightdate2" dir="rtl" style="width:100%;margin-bottom:16px;margin-right:26px;"><span style="color:#2490F5;">כרגע המערכת סופרת מלים משנת 2009 אבל בשל מגבלות טכניות מציגה רק את 500 הסטטוסטים העדכניים לכל ח״כ. אנחנו עובדים על הרחבה של התצוגה גם לסטטוסים מוקדמים יותר.</span></p>';
							$(' #loading ').css('display','none');
							$.featherlight(finaloutput);
							
						}
					}
			});
			
		}
		
	});
});



