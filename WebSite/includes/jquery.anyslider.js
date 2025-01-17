/*! jQuery AnySlider 2.0.2 | Copyright 2014 Jonathan Wilsson and contributors */
var myArr = [
	{military1:"<b>הדברנים</b>",
	military2:"הפוליטיקאים שמדברים",
	military3:"הכי הרבה"},
	
	{military1:"<b>המיליטנטים</b>",
	military2:"הפוליטיקאים שמדברים",
	military3:"הכי הרבה על ביטחון"},
	
	{military1:"<b>הכלכלנים</b>",
	military2:"הפוליטיקאים שמדברים",
	military3:"הכי הרבה על כלכלה"},
	
	{military1:"<b>הנרקסיסטים</b>",
	military2:"הפוליטיקאים שאומרים",
	military3:'הכי הרבה "אני"'},
	
	{military1:"<b>הסחבקים</b>",
	military2:"הפוליטיקאים  שאומרים",
	military3:"הכי הרבה מילים של יחד"},
	
	{military1:"<b>הרכלנים</b>",
	military2:"הפוליטיקאים שמדברים",
	military3:"הכי הרבה על פוליטיקאים אחרים"},
	
	{military1:"<b>הדברנים</b>",
	military2:"הפוליטיקאים שמדברים",
	military3:"הכי הרבה"},
	
	{military1:"<b>המיליטנטים</b>",
	military2:"הפוליטיקאים שמדברים",
	military3:"הכי הרבה על ביטחון"},
	];
;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(root.jQuery || root.Zepto);
    }
}(this, function($) {
    'use strict';

    var AnySlider = (function (slider, options) {
        var slides = slider.children(),
            orgNumSlides = slides.length,
            numSlides = orgNumSlides,
            width = slider.width(),
            nextSlide = 0,
            current = 0,
            inner,
            timer,
            running = false,
            defaults = {
                afterChange: function () {},
                afterSetup: function () {},
                animation: 'slide',
                beforeChange: function () {},
                easing: 'swing',
                interval: 5000,
                keyboard: true,
                nextLabel: 'Next slide',
                pauseOnHover: true,
                prevLabel: 'Previous slide',
                reverse: false,
                showBullets: true,
                showControls: true,
                speed: 800,
                startSlide: 1,
                touch: true
            };

        options = $.extend(defaults, options);

        // Setup the slides
        if (orgNumSlides > 1) {
            slides.eq(0).clone().addClass('clone').appendTo(slider);
            slides.eq(numSlides - 1).clone().addClass('clone').prependTo(slider);

            if (options.startSlide < orgNumSlides) {
                current = options.startSlide;
            }
        }

        slides = slider.children();
        numSlides = slides.length;

        // CSS setup
        slides.wrapAll('<div class="as-slide-inner"></div>').css('width', width);
        inner = slider.css('overflow', 'hidden').find('.as-slide-inner');

        if (options.animation === 'fade') {
            // Properties are quoted for consistency since "float" will trigger an error when the script is minified (if unquoted)
            slides.css({
                'display': 'none',
                'left': 0,
                'position': 'absolute',
                'top': 0
            }).eq(current).show();

            inner.css('width', width);
        } else {
            slides.css({
                'float': 'left',
                'position': 'relative'
            });

            inner.css({
                'left': -current * width,
                'width': numSlides * width
            });
        }

        inner.css({
            'float': 'left',
            'position': 'relative'
        });

        // Add the arrows
        if (options.showControls && orgNumSlides > 1) {
            slider.prepend('<a href="#" class="as-prev-arrow" title="LABEL">LABEL</a>'.replace(/LABEL/g, options.prevLabel));
            slider.append('<a href="#" class="as-next-arrow" title="LABEL">LABEL</a>'.replace(/LABEL/g, options.nextLabel));

            slider.on('click.as', '.as-prev-arrow, .as-next-arrow', function (e) {
                e.preventDefault();

                if (running) {
                    return;
                }

                if ($(this).hasClass('as-prev-arrow')) {
                    prev();
                } else {
                    next();
                }
            });
        }

        // Add navigation bullets
        if (options.showBullets && orgNumSlides > 1) {
            var i,
                active,
                out = '<div class="as-nav"></div>',
                nav = $(out);

            for (i = 1; i <= orgNumSlides; i++) {
                active = '';
                if (i === current) {
                    active = ' class="as-active"';
                }

                nav.append('<a href="#"' + active + '>' + i + '</a>');
            }

            nav.on('click.as', 'a', function (e) {
                var index = $(this).index();

                e.preventDefault();

                if ($(this).hasClass('as-active') || running) {
                    return;
                }

                nav.find('a').removeClass('as-active').eq(index).addClass('as-active');

                goTo(index + 1);
            });

            slider.after(nav);
        }

        // Enable keyboard navigation
        if (options.keyboard) {
            $(document).on('keydown.as', function (e) {
                var key = e.keyCode;

                // See if the left or right arrow is pressed
                if (key !== 37 && key !== 39 || orgNumSlides <= 1) {
                    return;
                }

                if (key === 37) {
                    prev();
                } else {
                    next();
                }
            });
        }

        if (options.pauseOnHover) {
            slider.on('mouseenter', function () {
                pause();
            }).on('mouseleave', function () {
                play();
            });
        }

        // Enable responsive support
        $(window).resize(function () {
            if (!running) {
                width = slider.width();

                inner.css('width', width);
                slides.css('width', width);

                if (options.animation !== 'fade') {
                    inner.css({
                        'left': -current * width,
                        'width': numSlides * width
                    });
                }
            }
        });

        /**
         * Enable swipe support. (Don't bother if not wanted or supported)
         *
         * Resources:
         * http://wowmotty.blogspot.com/2011/10/adding-swipe-support.html
         * http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx#step4
         * https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/
         */
        if (options.touch && ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints > 0)) {
            var startTime,
                startX;

            slider.on('touchstart.as pointerdown.as MSPointerDown.as', function (e) {
                startTime = e.timeStamp;

                if (e.originalEvent) {
                    startX = e.originalEvent.pageX || e.originalEvent.touches[0].pageX;
                } else {
                    startX = e.pageX || e.touches[0].pageX;
                }
            }).on('touchmove.as pointermove.as MSPointerMove.as', function (e) {
                var currentDistance = 0,
                    currentTime = e.timeStamp,
                    currentX;

                if (e.originalEvent) {
                    currentX = e.originalEvent.pageX || e.originalEvent.touches[0].pageX;
                } else {
                    currentX = e.pageX || e.touches[0].pageX;
                }

                if (startX !== 0) {
                    currentDistance = Math.abs(currentX - startX);
                }

                // Only allow if movement < 1 sec and distance is long enough
                if (startTime !== 0 && currentTime - startTime < 1000 && currentDistance > 10) {
                    e.preventDefault();

                    if (currentX < startX) { // Swiping to the left, i.e. next slide
                        next();
                    } else if (currentX > startX) { // Swiping to the right, i.e. previous slide
                        prev();
                    }

                    startTime = 0;
                    startX = 0;

                    // Android doesn't always fire touchend
                    slider.trigger('touchend.as');
                }
            }).on('touchend.as pointerup.as MSPointerUp.as', function () {
                startTime = 0;
                startX = 0;
            });
        }

        // Enable autoplay
        tick();

        options.afterSetup.call(slider[0]);

        // Private methods
        // Animation complete callback
        function animationCallback() {
            current = nextSlide;

            if (nextSlide === 0) {
                current = orgNumSlides;

                if (options.animation !== 'fade') {
                    inner.css('left', -current * width);
                }
            } else if (nextSlide === numSlides - 1) {
                current = 1;

                if (options.animation !== 'fade') {
                    inner.css('left', -width);
                }
            }

            // Fix for Zepto hiding the slide
            if (options.animation === 'fade') {
                slides.eq(current).show();
            }

            if (options.showBullets) {
                slider.next('.as-nav').find('a').removeClass('as-active').eq(current - 1).addClass('as-active');
            }

            running = false;

            options.afterChange.call(slider[0]);
        }

        // The main animation function
        function run() {
            if (running || orgNumSlides <= 1) {
                return;
            }

            running = true;

            options.beforeChange.call(slider[0]);

            if (options.animation === 'fade') {
                slides.css('z-index', 1).fadeOut(options.speed).eq(nextSlide).css('z-index', 2).fadeIn(options.speed, animationCallback);
            } else {
                inner.animate({'left': -nextSlide * width}, options.speed, options.easing, animationCallback);
            }

            tick();
        }

        // Set the autoplay timer
        function tick() {
            clearTimeout(timer);

            // Check if autoplay is enabled
            if (options.interval && orgNumSlides > 1) {
                timer = setTimeout(function () {
                    if (options.reverse) {
                        prev();
                    } else {
                        next();
                    }
                }, options.interval);
            }
        }

        // Public methods
        function currentSlide() {
            return current;
        }

        function goTo(slide) {
            nextSlide = slide;
            console.log(slide);
			$('#slidertitle').fadeOut( "slow",function(){
            	$('#slidertitle').html(myArr[nextSlide].military1)
            });
            $('#slidertext').fadeOut( "slow",function(){
            	$('#slidertext').html(myArr[nextSlide].military2+"<br>"+myArr[nextSlide].military3)
            });
            $( "#slidertext" ).fadeIn( "slow" );
			$( "#slidertitle" ).fadeIn( "slow" );
            run();
        }

        function next() {
        	//console.log('prev',current)
            nextSlide = current + 1;
			$('#slidertitle').fadeOut( "slow",function(){
            	$('#slidertitle').html(myArr[nextSlide].military1)
            });
            $('#slidertext').fadeOut( "slow",function(){
            	$('#slidertext').html(myArr[nextSlide].military2+"<br>"+myArr[nextSlide].military3)
            });
			/*$( ".box" ).fadeOut( "slow",function(){
				$('#slidertitle').html(myArr[nextSlide].military1)
				$('#slidertext').html(myArr[nextSlide].military2+"<br>"+myArr[nextSlide].military3)
			});*/
			
			$( "#slidertext" ).fadeIn( "slow" );
			$( "#slidertitle" ).fadeIn( "slow" );
            run();
        }

        function pause() {
            clearTimeout(timer);
        }

        function play() {
            tick();
        }

        function prev() {
        	//console.log('next',current)
            nextSlide = current - 1;
            $('#slidertitle').fadeOut( "slow",function(){
            	$('#slidertitle').html(myArr[nextSlide].military1)
            });
            $('#slidertext').fadeOut( "slow",function(){
            	$('#slidertext').html(myArr[nextSlide].military2+"<br>"+myArr[nextSlide].military3)
            });
			/*$( ".box" ).fadeOut( "slow",function(){
				$('#slidertitle').html(myArr[nextSlide].military1)
				$('#slidertext').html(myArr[nextSlide].military2+"<br>"+myArr[nextSlide].military3)
			});*/
			
			$( "#slidertext" ).fadeIn( "slow" );
			$( "#slidertitle" ).fadeIn( "slow" );
            run();
        }

        return {
            currentSlide: currentSlide,
            goTo: goTo,
            next: next,
            pause: pause,
            play: play,
            prev: prev
        };
    });

    $.fn.anyslider = function (options) {
        return this.each(function () {
            var slider = $(this),
                anyslider;

            // Bail if we already have a plugin instance for this element
            if (slider.data('anyslider')) {
                return slider.data('anyslider');
            }

            anyslider = new AnySlider(slider, options);

            slider.data('anyslider', anyslider);
        });
    };
}));
