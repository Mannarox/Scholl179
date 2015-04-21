// JavaScript
$(document).ready(function(){
 	start();
});

function start(){
//==== Paralax script START ====
	document.createElement("main");
	document.createElement("SECTION");

	console.log("скрипт запущен!");
	var docWidth = $(window).width();
 	var $matrix = $(".matrix");
 	var speed = 10;
 	console.log(docWidth);
	if(docWidth >= 800){
		$(window).scroll(function() {
	        var yPos = -( $(window).scrollTop() / speed );
	        var coords = '50% '+ yPos + 'px';               
	        $matrix.css({ backgroundPosition: coords });
	        //$matrix[0].style.backgroundPosition = coords;
    	});
	}	
//==== Paralax script END ====

//==== Slider script START ====
	var count = 1;
	var count2 = 2;

	setInterval( function(){
		if (count == 4) {
			$(".sliderImage"+count).css({ left:"-300px" });
			$(".sliderImage"+1).css({ left:"10%" });
			setTimeout(function(){
			$(".sliderImage"+count).css({ display:"none" });
			$(".sliderImage"+count).css({ left:"100%" });
			setTimeout(function(){
				$(".sliderImage"+count).css({ display:"block" });
				count++;
				count2++;
				if (count == 5) {
					count = 1;
					count2 = 2;
				};
			},500);
		}, 500);
		} else{
			//console.log(count + " " + count2);
			$(".sliderImage"+count).css({ left:"-800px" });
			$(".sliderImage"+count2).css({ left:"10%" });
			setTimeout(function(){
				$(".sliderImage"+count).css({ display:"none" });
				$(".sliderImage"+count).css({ left:"100%" });
				setTimeout(function(){
					$(".sliderImage"+count).css({ display:"block" });
					count++;
					count2++;
				},500);
			}, 500);
		};
	}, 4000);
//==== Slider script END ====
};