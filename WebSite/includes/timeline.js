
var w = 200;
var h = 470;
var timelinedom = $(' #timeline ').get(0);
var svg = d3.select(timelinedom).append("svg").attr("width", w).attr("height", h);

var recthmid = 50;
var recthlong = 260;
var recthshort = 20;
var start = 40;
var yeararray= [];  /* [0]=rect [1]=is_selected [2]=is_extended [3] class_name*/
var montharray = []; /* [0]=rect [1]=is_selected [2]=class_name  */
var isbigselected = true;
var bigrect = svg.append("rect").attr("x", 32).attr("y", start).attr("width", 10).attr("height", 414).attr("fill", '#fe1e43').attr("class", 'bigrect').on("click",function(d){
	if (isbigselected == false){
		d3.select(this).attr("fill", '#fe1e43');
		isbigselected = true;
		for (i=0; i<yeararray.length; i++){
			//console.log($(yeararray[i][0]).get(0));
			d3.select($(yeararray[i][0]).get(0)).attr("fill", '#fe1e43');
			yeararray[i][1] = 1;
		}
		for (i=0; i<montharray.length; i++){
			//console.log($(yeararray[i][0]).get(0));
			d3.select($(montharray[i][0]).get(0)).attr("fill", '#fe1e43');
			montharray[i][1] = 1;
		}
	}else{
		d3.select(this).attr("fill", 'rgba(256,256,256,0.6)');
		isbigselected = false;
		for (i=0; i<yeararray.length; i++){
			//console.log($(yeararray[i][0]).get(0));
			d3.select($(yeararray[i][0]).get(0)).attr("fill", 'rgba(256,256,256,0.6)');
			yeararray[i][1] = 0;
		}
		for (i=0; i<montharray.length; i++){
			//console.log($(yeararray[i][0]).get(0));
			d3.select($(montharray[i][0]).get(0)).attr("fill", 'rgba(256,256,256,0.6)');
			montharray[i][1] = 0;
		}
		
	}
	showTheWords();
});
for (var i=0 ; i<8 ; i++){
	var pos = start+((recthmid+2) * i);
	var tempclass = 2015-i;
	var color= "#fe1e43";
	var isselected= 1;
	
	
	var temp = svg.append("rect").attr("x", 20).attr("y", pos).attr("width", 10).attr("height", recthmid).attr("fill", color).attr("class", tempclass).attr("style", "cursor: pointer;").on('click', function(d){
		var stam = $(this).attr("class");
		stam = (stam - 2015) * (-1);
		var allselected = true;
		for (i=0; i<yeararray.length; i++){
			if (yeararray[i][1]==0){
				allselected = false;
				break;
			}
		}
		if((allselected == true)&&(isbigselected == true)){
			
			if (yeararray[stam][2] == 1){
				for(var i=0; i<montharray.length ; i++){
					montharray[i][1] = 1;
					var temp = montharray[i][2];
					var temprect = $(' .' + temp ).get(0);
					d3.select(temprect).attr("fill", "#fe1e43");					
				}
			}
			for(i=0; i<yeararray.length; i++) {
					//console.log($(yeararray[i][0]).get(0));
				if( stam != i){
					d3.select($(yeararray[i][0]).get(0)).attr("fill", 'rgba(256,256,256,0.6)');
					yeararray[i][1] = 0;
				}
			}
			var tamp = $(bigrect).get(0);
			console.log($(tamp).get(0));
			d3.select($(tamp).get(0)).attr("fill", 'rgba(256,256,256,0.6)');
			isbigselected = false;
		}else{
		//var stam = $(this).attr("class");
		
		if (yeararray[stam][1] == 0 ){
			d3.select(this).attr("fill", "#fe1e43");
			yeararray[stam][1] = 1;
			if (yeararray[stam][2] == 1){
				for(var i=0; i<montharray.length ; i++){
					montharray[i][1] = 1;
					var temp = montharray[i][2];
					var temprect = $(' .' + temp ).get(0);
					d3.select(temprect).attr("fill", "#fe1e43");					
				}
			} 
		}else{
			d3.select(this).attr("fill", "rgba(256,256,256,0.6)");
			yeararray[stam][1] = 0;
			if (yeararray[stam][2] == 1){
				for(var i=0; i<montharray.length ; i++){
					montharray[i][1] = 0;
					var temp = montharray[i][2];
					var temprect = $(' .' + temp ).get(0);
					d3.select(temprect).attr("fill", "rgba(256,256,256,0.6)");					
				}
			} 
		}
		}
		showTheWords();
	});
	yeararray.push(temp);
	yeararray[i].push(isselected);
	yeararray[i].push(0);
	yeararray[i].push(tempclass);
	var startline = start + ((recthmid+2) * (i+1)) - (recthmid/2);
	temp = svg.append("line").attr("x1", 42).attr("y1", startline).attr("x2", 112).attr("y2", startline).attr("stroke", "#2e2e2f").attr("stroke-width", 1).attr("class", tempclass);
	var starttext = startline +5;
	var temptext=tempclass + " +";
	temp = svg.append("text").attr("x", 67).attr("y", starttext).attr("fill", "rgba(256,256,256,0.6)").text(temptext).attr("font-size", 15).attr("style", "cursor: pointer;").attr("class", tempclass).on('click', function(d){
		var infoarray = $(' .info ').toArray();
		for (i=0; i<infoarray.length; i++){
			var zmani = $(infoarray[i]).get(0);
			d3.select(zmani).remove();
		}
		var stam = $(this).attr("class");
		var index = (stam - 2015) * (-1);
		if (montharray.length>0){
			for (var p= 0; p < montharray.length; p++){
				var temp100 = $(' .' + montharray[p][2]).get(0);
				d3.select(temp100).remove();
			}
			montharray = [];
		}
		
		
		if (yeararray[index][2] == 0){
			//d3.select(this).attr("fill", "rgba(256,256,256,1)");
			switch (stam){
				case "2008":{
					temp = svg.append("text").attr("x", 52).attr("y", 222).attr("fill", "#2490f5").text("מבצע עופרת יצוקה").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 217).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					break;
				}
					
				case "2009":{
					temp = svg.append("text").attr("x", 52).attr("y", 408).attr("fill", "#2490f5").text("בחירות 2009").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 403).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 320).attr("fill", "#2490f5").text("נאום בר-אילן").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 315).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 298).attr("fill", "#2490f5").text("אישור תקציב").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 293).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					break;
				}
					
				case "2010":{
					temp = svg.append("text").attr("x", 52).attr("y", 319).attr("fill", "#2490f5").text("משט המרמרה").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 314).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 200).attr("fill", "#2490f5").text("אסון הכרמל").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 195).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 178).attr("fill", "#2490f5").text("משה קצב מורשע באונס").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 173).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					break;
				}
					
				case "2011":{
					temp = svg.append("text").attr("x", 52).attr("y", 320).attr("fill", "#2490f5").text("מחאת הרופאים").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 315).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 277).attr("fill", "#2490f5").text("'מחאת הקוטג").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 272).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 254).attr("fill", "#2490f5").text("המחאת החברתית").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 249).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 231).attr("fill", "#2490f5").text("ועדת טרכטנברג").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 226).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 208).attr("fill", "#2490f5").text("שיא המחאה").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 203).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					break;
				}
					
				case "2012":{
					temp = svg.append("text").attr("x", 52).attr("y", 342).attr("fill", "#2490f5").text("שביתה כללית במשק").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 337).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 255).attr("fill", "#2490f5").text("העלאת מסים").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 250).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 188).attr("fill", "#2490f5").text('נאום נתניהו באו"ם').attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 183).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 156).attr("fill", "#2490f5").text('בחירות בארה"ב').attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 151).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 134).attr("fill", "#2490f5").text('מבצע עמוד ענן').attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 129).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					break;
				}
					
				case "2013":{
					temp = svg.append("text").attr("x", 52).attr("y", 332).attr("fill", "#2490f5").text("בחירות 2013").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 327).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 255).attr("fill", "#2490f5").text("אושר תקציב המדינה").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 250).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					break;
				}
					
				case "2014":{
					temp = svg.append("text").attr("x", 52).attr("y", 231).attr("fill", "#2490f5").text("בחירות לנשיאות").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 226).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					temp = svg.append("text").attr("x", 52).attr("y", 188).attr("fill", "#2490f5").text("מבצע צוק איתן").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 183).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					break;
				}
				case "2015":{
					temp = svg.append("text").attr("x", 52).attr("y", 253).attr("fill", "#2490f5").text("בחירות 2015").attr("font-size", 15).attr("class", "info");
					temp = svg.append("circle").attr("cx", 42).attr("cy", 248).attr("r",3).attr("fill", "#2490f5").attr("class", "info");
					break;
				}
						
			}
			for (var jndex= 0; jndex < yeararray.length; jndex++){
				var temprect = $(' .' + (2015 - jndex) ).get(0);
				var templine = $(' .' + (2015 - jndex) ).get(1);
				var temptext = $(' .' + (2015 - jndex) ).get(2);
				startline = start + ((recthshort+2) * (jndex+1)) - (recthshort);
				if (jndex == index){
					var pos = start+((recthshort+2) * jndex);
					d3.select(temprect).attr("height", recthlong).attr("y", pos);
					//startline = startline + (recthlong/2);
					d3.select(templine).attr("y1", startline).attr("y2", startline);
					startline = startline +5; 
					d3.select(temptext).attr("y", startline).attr("fill", "rgba(256,256,256,0.6)");
					for (var k=0; k<12; k++){
						var tempstart = pos +  ((recthshort+2) * k);
						tempclass = stam + '_' + (12 - k);
						var temp = svg.append("rect").attr("x", 8).attr("y", tempstart).attr("width", 10).attr("height", recthshort).attr("fill", "#fe1e43").attr("class", tempclass).attr("style", "cursor: pointer;").on('click', function(d)
						{
							stam = $(this).attr("class");
							var year = stam.substring(0,4);
							
							var dad = $(' .' + year ).get(0);
							var is_parent_selected = false;
							for(i=0;i<yeararray.length;i++){
								if (year == yeararray[i][3]){
									if (yeararray[i][1] == 1){
										is_parent_selected = true;
										break;
									}
								}
							}
							if (is_parent_selected == true){
								
								for(i=0;i<montharray.length;i++){
									if(montharray[i][2] != stam){
										var temp = $(' .' + montharray[i][2]).get(0);
										d3.select(temp).attr("fill", "rgba(256,256,256,0.6)");
										montharray[i][1] = 0;
									}
								}
								d3.select(dad).attr("fill", "rgba(256,256,256,0.6)");
								for (n=0 ; n<yeararray.length; n++){
									if (yeararray[n][3] == year){
										yeararray[n][1] = 0;
									}
								}
							}else{
								for (var n=0; n<12; n++){
									if (montharray[n][2] == stam){
										if (montharray[n][1] == 0 ){
											d3.select(this).attr("fill", "#fe1e43");
											montharray[n][1] = 1;
										}else{
											d3.select(this).attr("fill", "rgba(256,256,256,0.6)");
											montharray[n][1] = 0;
										}
									}
								}
								var allselected = true;
								for(var n=0; n<12; n++){
									if(montharray[n][1] == 0){
										allselected = false;
										break;
									}
								}
								
								if (allselected){
									d3.select(dad).attr("fill", "#fe1e43");
									for (n=0 ; n<yeararray.length; n++){
										if (yeararray[n][3] == year){
											yeararray[n][1] = 1;
										}
									}
								}else{
									d3.select(dad).attr("fill", "rgba(256,256,256,0.6)");
									for (n=0 ; n<yeararray.length; n++){
										if (yeararray[n][3] == year){
											yeararray[n][1] = 0;
										}
									}
								}
							}
							
							showTheWords();
						});
						montharray.push(temp);
						montharray[k].push(1);
						montharray[k].push(tempclass);
					}
				}else if(jndex < index){
					pos = start+((recthshort+2) * jndex);
					d3.select(temprect).attr("height", recthshort).attr("y", pos);
					d3.select(templine).attr("y1", startline).attr("y2", startline);
					startline = startline +5; 
					d3.select(temptext).attr("y", startline);
					
				}else{
					pos = start+((recthshort+2) * (jndex -1)) + (recthlong+2);
					d3.select(temprect).attr("height", recthshort).attr("y", pos);
					startline = startline + recthlong - recthshort ;
					d3.select(templine).attr("y1", startline).attr("y2", startline);
					startline = startline +5; 
					d3.select(temptext).attr("y", startline);	
				}
				
				yeararray[jndex][2] = 0;
			}
			
			yeararray[index][2] = 1;
		}else{
			for (var jndex= 0; jndex < yeararray.length; jndex++){
				pos = start+((recthmid+2) * jndex);
				startline = start + ((recthmid+2) * (jndex+1)) - (recthmid/2);
				var temprect = $(' .' + (2015 - jndex) ).get(0);
				var templine = $(' .' + (2015 - jndex) ).get(1);
				var temptext = $(' .' + (2015 - jndex) ).get(2);
				d3.select(temprect).attr("height", recthmid).attr("y", pos);
				d3.select(templine).attr("y1", startline).attr("y2", startline);
				startline = startline +5; 
				d3.select(temptext).attr("y", startline);
			}
			yeararray[index][2] = 0;
			
			
		}
		
		//var temprect = $(' .' + stam ).get(0); 
		for (i=0 ; i<yeararray.length; i++){
			if(yeararray[i][3] == stam){
				if((yeararray[i][2] == 1)&&(yeararray[i][1] == 0)){
					for(var i=0; i<montharray.length ; i++){
						montharray[i][1] = 0;
						var temp = montharray[i][2];
						var temprect = $(' .' + temp ).get(0);
						d3.select(temprect).attr("fill", "rgba(256,256,256,0.6)");					
					}
				}
			}
		}
		showTheWords();
	}).on("mouseover",function(d){
		d3.select(this).attr("fill","#fe1e43");
		// //console.log("hover!");
		// var satoom = $(this).text();
		// for(var i=0; i<yeararray.length; i++){
// 			
			// if ((satoom == yeararray[i][3])&&(yeararray[i][2]==1)){
				// //console.log(satoom + " " + yeararray[i][3]);
				// d3.select(this).text(satoom + " -").attr("fill","#fe1e43");
				// break;
// 				
			// }else{
				// d3.select(this).text(satoom + " +").attr("fill","#fe1e43");
// 				
			// }
		// }
		
	}).on("mouseout",function(d){
		d3.select(this).attr("fill","rgba(256,256,256,0.6)");
		// var satoom = $(this).text();
		// satoom = satoom.substring(0,4);
		// d3.select(this).text(satoom).attr("fill","rgba(256,256,256,0.6)");
	});
	
}
