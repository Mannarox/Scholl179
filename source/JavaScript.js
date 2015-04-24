// JavaScript
$(document).ready(function(){
 	start();
});

function start(){
//==== Paralax script START ====
	document.createElement("main");
	document.createElement("SECTION");

	console.log("скрипт запущен!");
 	var $matrix = $(".matrix");
 	var speed = 10;
 	// console.log($matrix);

 	$(window).scroll(function() {
        var yPos = -( $(window).scrollTop() / speed );
        var coords = '50% '+ yPos + 'px';               
        $matrix.css({ backgroundPosition: coords });
        //$matrix[0].style.backgroundPosition = coords;
    });
//==== Paralax script END ====

//==== Slider script START ====
	var $slide1 = $(".sliderImage1");
	var count = 1;
	var count2 = 2;

	setInterval( function(){
		var $sliderImage = $(".sliderImage"+count);
		var $sliderImage2 = $(".sliderImage"+count2);

		if (count == 4) {
			$sliderImage.css({ left:"-300px" });
			$slide1.css({ left:"50%" });
			setTimeout(function(){
			$sliderImage.css({ display:"none" });
			$sliderImage.css({ left:"150%" });
			setTimeout(function(){
				$sliderImage.css({ display:"block" });
				count++;
				count2++;
				if (count == 5) {
					count = 1;
					count2 = 2;
				};
			},500);
		}, 500);
		} else{
			// console.log(count + " " + count2);
			$sliderImage.css({ left:"-300px" });
			$sliderImage2.css({ left:"50%" });
			setTimeout(function(){
				$sliderImage.css({ display:"none" });
				$sliderImage.css({ left:"150%" });
				setTimeout(function(){
					$sliderImage.css({ display:"block" });
					count++;
					count2++;
				},500);
			}, 500);
		};
	}, 4000);
//==== Slider script END ====
};