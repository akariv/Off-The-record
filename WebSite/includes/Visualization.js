var domain = "http://viz.calcalist.co.il/otr/data/";

window.addEventListener("resize", resize);
var _mobile = false;
window.mobilecheck = function() {
  var check = false;
  try{
  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
  }
  catch(err){return false;}
}
function resize(){
	if (window.mobilecheck() || window.innerWidth<=800){
		console.log('mobile '+window.innerWidth)
		_mobile = true;
		console.log("mobile")
		$("html").css('overflow-x','hidden !important')
		$("body").css('overflow-x','hidden!important')
		$(".wrapper").css('overflow-x','hidden !important')
		$("img[src='images/ours.png']").css('display','none')
		$("#results section").removeClass('last2')
		$("#d3visualization").css('display','none')	
		$(".wrapper").css('height','2735px')	
		$(".text").css('right','130px')
		
		$(".circle1").css('width','43px');
		$(".circle1").css('height','43px');
		$(".circle1").css('font-size','35px');
		$(".circle1").css('line-height','45px');
		$(".pics .tag").css('font-size','27px')
		
		$("#directions").css('font-size','33px')
		$("#directions").css('line-height','40px')
		$("#directions").css('margin-right','56px')
		
		$(".search").css('width','130px');
		$(".search").css('height','130px');
		
		$("#results .circle").css('width','33px');
		$("#results .circle").css('height','33px');
		$("#results .circle").css('font-size','30px');
		$("#results .circle").css('line-height','33px');
		$("#results .circle").css('margin-top','-149px');
		$("#results .name").css('font-size','23px');
		var img = $("<img>").attr({'width':'120','height':'120','src':'images/search.png','class':'searchB'});
		img.css({'float':'left'})
		if (!$(".searchB").length)
			$("#inpot").append(img);
		$("#inpot input").css('width','85%');
		$("header").css('display','none');
		
		$('footer').css('height','550px')
		$('footer').css('padding-top','30px')
		$('footer p').css('font-size','35px')
		$('footer p').css('line-height','47px')
		$('.mobileremove').remove()
		
		$('.rightdesc').css({'padding':'30px 70px 0 0'})
		$('.leftdesc').css({'padding':'20px 40px 0 0'})
		$('.rightdesc').css({'width':'100%' ,'display':'block' , 'margin':'auto'})
		$('.leftdesc').css({'width':'100%' ,'display':'block' , 'margin':'auto'})
		
		$('.leftdesc a img').css({'margin-right':'18px'})
		$('.mobileshura').css('display','inline-block')
		$('#opening p').css({'width':'88%','margin-left':'53px','font-size':'40px','line-height':'61px'})


	}
}
$(document).on("click", '.searchB', function (obj) {
	ajaxcounter = 0;
	$(' #loading ').css('display','block');
	top10 = [];
	var poli_name;
	var poli_id;
	searchword = $('#inpot input').val();
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
	
		}
			
		
	});
});
 



var arrayofshit;
var top4 = [];
var eachcounter;


function pushToTop4(array){
	var zmani = array;
	zmani = zmani[0];
	//console.log(zmani[0]); 
	var notfound;
	var k;
	for(var l=0; l<zmani.length; l++){
		zmani[l].Amount = Number(zmani[l].Amount);
		notfound = true;
		k=0;
		while (notfound){
			if(top4[eachcounter].length == k){
				top4[eachcounter].push(zmani[l]);
				notfound = false;
				break;
			}else{
				//console.log(zmani[l].Word + " " + top4[k].Word);
				if (zmani[l].Word == top4[eachcounter][k].Word){
					//console.log("found it!");
					top4[eachcounter][k].Amount = top4[eachcounter][k].Amount + zmani[l].Amount;
					//console.log(top4[k].Amount);
					top4[eachcounter][k].array_id = $.merge(top4[eachcounter][k].array_id,zmani[l].array_id);
					notfound = false;
					break;
				}
				k= k+1;
			}
			
		}
	}
	return;
}


function showTheWords(){
	arrayofshit = $(' #sortable1 li ').toArray();
	//console.log(arrayofshit);
	eachcounter = 0;
	top4 = [];
	
	for(var i=0; i<arrayofshit.length; i++){
		top4[i] = [];
	}
	//console.log(top4);
	$(arrayofshit).each(function(i,v){
		
		$.ajax({
			//crossDomain: true,
			url: domain + 'WholeDates/'+ v.id +'.txt',
			dataType: 'json',
			type: 'get',
			success:  function(data){
				top4[eachcounter].push(v.id);
				//console.log(eachcounter);
				for(i2=0; i2<yeararray.length; i2++){
					if(yeararray[i2][1] == 1){
						for(j=1; j<13; j++){
							if (j<10){
								var tempkey = yeararray[i2][3] + ":0" + j;
							}else{
								var tempkey = yeararray[i2][3] + ":" + j;
							}
							
							//console.log(v.id + " " + tempkey + " " + data.Dates[tempkey]);
							
							if(data.Dates[tempkey] != null){
								//console.log(data.Dates[tempkey] + " " + tempkey);
								pushToTop4(data.Dates[tempkey]);
								
							}
								
							
						}
					}else{
						if(yeararray[i2][2] == 1){
							for(j=0; j<12; j++){
								if (montharray[j][1]==1){
									//console.log(montharray[j][2]);
									if (j>2){
										var tempkey = montharray[j][2].replace("_",":0");
									}else{
										var tempkey = montharray[j][2].replace("_",":");
									}
									
									if (data.Dates[tempkey] != null){
										//console.log(data.Dates[tempkey] + " " + tempkey);
										pushToTop4(data.Dates[tempkey]);
									}
								}
							}
						}
					}	
				}
				
				top4[eachcounter] = top4[eachcounter].sort(function(a,b){
					return (b.Amount - a.Amount);
				});
				
				eachcounter= eachcounter+1;
				if(eachcounter == arrayofshit.length){
					//console.log(top4);
				
					for(var i=0; i<top4.length; i++){
						var tag = $(' #' + top4[i][0]).children(' .boxname ');
						//console.log(top4[i]);
						if (top4[i].length < 2){
							var para = $(' #' + top4[i][0]).children(' p ');
							$(para).empty();
							$(para).append('<span style="color:rgba(144,144,144,0.45)">אין תוצאות בתקופה זו.</span>');
						}else{
							for(j=0; j<5; j++){
								if(j==0){
									var para = $(' #' + top4[i][j]).children(' p ');
									$(para).empty();
									//console.log(top4[i][j]);
								}else{
									
									$(para).append('<a onclick="a_clicked(this)">' + top4[i][j].Word + '.</a> ');
								}
								
							}
						}
					}
				}
			}
			
		});
	});
	//console.log(top4);
	//debugger	
	
}  


$(function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable",
       appendTo: 'body',
   		 tolerance: 'pointer',
         forceHelperSize: true,
	    helper: 'original',
	    scroll: false,
	    placeholder: "placeholder",
        start: function(event, ui) { ui.placeholder.html('&nbsp;'); }
        //containment:'parent',
        
    }).disableSelection();
});

var criticalArea={top:3660,bottom:3693};
var mousePos = { x: -1, y: -1 };
var dragged=false;
$(document).mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  
	if (dragged && mousePos.y<criticalArea.top){
		var sort = $("#sortable1 li");
		if (sort.length>4){
			var temp = sort[$("#sortable1 li").length-1];
			$("#sortable1 li#"+$(temp).attr('id')).remove();
			$("#sortable2").append($(temp));
			
		}
		
	}
	
});
$(document).on("mousedown", '#sortable2 li', function (obj) {
	dragged = true;
	
}), 
$(document).on("mouseup", '#sortable2 li', function (obj) {
	dragged=false;
	//debugger
	var temp = $("#sortable1 li");
	setTimeout(function(){
		showTheWords();
		// if (top4.length > 0){
		// $('#instructions').css('display','none');
		// }else{
			// $('#instructions').css('display','block');
		// }
	},300);
	
	
	
	//showTheWords();
	
});
$('#mySearch').on('input', function(){
	//console.log($(this).val());
	var input = $(this).val();
	var list = $('#sortable2 li');
	$.each(list, function(index,value){
		//debugger
		var temp= $(value).children('.boxname').text();
		//console.log(input.indexOf(temp))
		if (temp.indexOf(input) == -1)
			$(value).css('display','none');
		else 
			$(value).css('display','inline-block');
	});
});

(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    };
})(jQuery);

$("#sright , #sleft").click(function(e){
	e.preventDefault();
    //console.log($('#sortable2').hasScrollBar());
	if ($('#sortable2').hasScrollBar()){
		var leftPos = $('#sortable2').scrollLeft();
		
		if ($(this).attr('id') == "sleft")
			$('#sortable2').animate({scrollLeft: leftPos + 200}, 800);
		else if ($(this).attr('id') == "sright")
			$('#sortable2').animate({scrollLeft: leftPos - 200}, 800);
	}
});

function buildGraph(){
	var con = $(' #sortable2 ');
	//console.log(con);
	$(poli_json.people).each(function(i,v){
		var tempname = v.name.replace(/ /g, "<br>");
		$(con).append('<li id="' + v.id + '" dir="rtl"><div class="borderbrown"><img src="https://graph.facebook.com/' + v.id + '/picture?type=large"></div><div class="bluetriangle"></div><div class="boxname">&ensp;' + v.name + '&ensp;</div><p></p><div class="boxname2">' + tempname + '</div></li >');
	});
	
}
/*
function a_clicked(obj){
	$(' #sortable1 ').css('display','none');
	$(' #replace ').css('display','block');
}
function b_clicked(obj){
	$(' #sortable1 ').css('display','block');
	$(' #replace ').css('display','none');
}*/

var dots = [];
var array_id_length;
var FBapicounter;
var outputarray =[];
function b_clicked(obj){
	$('#sortable1').css('display','block');
	$('#replace').css('display','none');
}

function a_clicked(obj){
	$('#sortable1').css('display','none');
	$('#replace').css('display','block');
	
	for(t=0; t<outputarray.length; t++){
		outputarray[t] = [];
	}
	outputarray = [];
	
	FBapicounter = 0;
	array_id_length = 0;
	var word = $(obj).text();
	word = word.substring(0,(word.length-1));
	
	var id = $(obj).parent();
	id = $(id).parent();
	id = $(id).attr("id");
	var parent = $(obj).parent();
	$('#replace img').attr('src','https://graph.facebook.com/' + id + '/picture?type=large');
	
	$('.message').empty();
	$('.repname').empty();
	$('.words').empty();
	
	//var siblings = $(obj).siblings();
	//console.log(obj.innerHTML);
	$('.words').append(obj.innerHTML + '<br>');
	
	//console.log($(parent));
	//$('.words').append($(parent));
	// console.log(top4);
	// console.log(id);
	var finaloutput = "<br>";
	$(poli_json.people).each(function(i,v){
		if(id == v.id){
			$('.repname').append('&ensp;' + v.name + '&ensp;');
			//finaloutput = '<section class="borderarange2" dir="rtl"><section class="search" style="background-image:url(https://graph.facebook.com/' + id + '/picture?type=large);"></section><div class="triangle"></div><p class="name">&ensp;' + v.name + '&ensp;</p></section>';
		}
	});
	//console.log($(' #'+ id).get(0));
	console.log(top4);
	
	for(i=0; i<top4.length; i++){
		if (top4[i][0] == id){
			for(j=1; j<top4[i].length; j++){
				if(top4[i][j].Word == word){
					array_id_length = top4[i][j].array_id.length;
					var single = [];
					$.each(top4[i][j].array_id, function(i, el){
					    if($.inArray(el, single) === -1) single.push(el);
					});
					//console.log(single);
					$('.words').append('<span style="color:whilte !important;font-size:14 !important;">נמצאו ' + single.length + ' תוצאות.</span>');
					if (single.length > 50){
						var times = 50;
					}else {
						var times = single.length;
					}
					for(k = 0; k<times; k++){
						$.ajax({
								crossDomain: true,
								url:'http://kikar.hasadna.org.il/api/v1/facebook_status/?status_id=' + single[k],
								dataType: 'jsonp',
								type: 'GET',
								success:  function(data){
									//console.log(data.objects[0]);
									// if(FBapicounter == 0){
										// $(' #loading ').css('display','block');
									// }
									FBapicounter++;
									if (data.objects[0] != null){
										var n = data.objects[0].content.search(word);
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
										var tempstr2 = data.objects[0].content.substring(n+word.length,p+1);
										var date = data.objects[0].published.substring(0,10);
										var datepretty = date.substring(8,10) + "." + date.substring(5,7) + "." + date.substring(0,4);
										var temporary = [date.substring(0,4),date.substring(5,7),date.substring(8,10),'<p class="textlightbox2" dir="rtl"><p class="lightdate3"><b class="textblue">' + datepretty + '</b></p><p class="lightdate4" dir="rtl">' +  tempstr1 + '<b class="textblue">' + word + '</b>' + tempstr2 +' <br><br></p>'];
										outputarray.push(temporary);
									}
									//console.log(FBapicounter + " " + times);
									if (FBapicounter == times){
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
										for (i=1; i<outputarray.length; i++){ finaloutput = finaloutput + outputarray[i][3];} 
										//$(' #loading ').css('display','none');
										//console.log(finaloutput);
										$('.message').append(finaloutput);
										
									}
								}
						});
					}
				}		
			}
		}
	}	
}


function repeatthis(){
	var uniq = $('#sortable1 li').toArray();
	//console.log(uniq.length);
	if (uniq.length < 1){
		$('#instructions').css('display','block');
	}else{
		$('#instructions').css('display','none');
	}
	setTimeout( repeatthis, 1000 );
}



var selectedfilters = [0,0,1];
$(document).ready(function(){
	repeatthis();
	arrayofshit = $(' #sortable1 li ').toArray();
	//console.log(arrayofshit);
	buildGraph();
	showTheWords();
	$('#filter3').css('background-image','url("../images/sort_03.png")');
	resize();
	
});


$( window ).scroll(function() {
	var temp = $('.magnetic').toArray();
	for (var i =0; i<temp.length; i++){
		if ($(temp[i]).visible(true)==true){
			break;
		}
	}
	var j;
	if ( $(temp[3]).visible(true)==true){
		j = 11;
	}else if ( $(temp[2]).visible(true)==true){
		j = 10;
 	}else{
 		j=12;
 	}
 	//console.log(j);
	avishay(i,j);
	
	/*
 	$($('.magnetic:onScreen')).each(function(i,v){
 		var id = $(v).attr('id');
 		avishay(id);
 	});*/
});


;(function($) {
  $.expr[":"].onScreen = function(elem) {
    var $window = $(window)
    var viewport_top = $window.scrollTop()
    var viewport_height = $window.height()
    var viewport_bottom = viewport_top + viewport_height
    var $elem = $(elem)
    var top = $elem.offset().top
    var height = $elem.height()
    var bottom = top + height

    return (top >= viewport_top && top < viewport_bottom) ||
           (bottom > viewport_top && bottom <= viewport_bottom) ||
           (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
  }
})(jQuery);

function avishay(id,id2){
	//var id = $(obj).attr('id');
	//console.log(id)
	//if (id === undefined) return
	switch  (id){
		case 0: {
				$('.logo').css('display','none');
			break;
		}
		case 1: {
			$('.logo').css('display','inline');
			$(".logo .text").html("תופסים אותם במילה | חיפשנו וניתחנו בשבילכם מה הפוליטיקאים אומרים וכותבים בעמודי פייסבוק שלהם");
			break;
		}
		case 2: {
			$('.logo').css('display','inline');
			$(".logo .text").html("המילה שלכם | עכשיו חפשו אתם איזו מילה שתרצו וגלו מי הפוליטיקאים שאומרים אותה הכי הרבה");
			break;
		}
		case 3:{
			$('.logo').css('display','inline');
			$(".logo .text").html("המילה שלהם | גלו מה הן המילים שבהן משתמשים הפוליטיקאים הכי הרבה");
			break;
		}
		case undefined:{
			$('.logo').css('display','none');
			break;
		}
		default:{
			$('.logo').css('display','none');
			break;
		}
	}
	
	switch  (id2){
		case 10:{
			var temparray = $('.page1arrow').toArray();
			//console.log(temparray);
			$(temparray[0]).css('display','none');
			$(temparray[1]).css('display','block');
			break;
		}
		case 11:{
		
			var temparray = $('.page1arrow').toArray();
			//console.log(temparray);
			$(temparray[0]).css('display','none');
			$(temparray[1]).css('display','none');
			break;
		}case 12:{
			var temparray = $('.page1arrow').toArray();
			//console.log(temparray);
			$(temparray[0]).css('display','block');
			$(temparray[1]).css('display','block');
		}
		
	}
	
	
}



