$(document).ready(function() {
	var mq = window.matchMedia('(min-width: 768px)');

	$('.mob-btn, .mobile-menu a').on('click', function() {
		$('.mobile-menu').toggleClass('open');
	});

	$('.price-modal').on('click', function() {
		var price = $(this).attr('data-price');
		console.log(price);
		$('#priceModal').find('#priceText').text(price);
	});


	$('.toggle-ttl').on('click', function() {
		if($(this).hasClass('open')) {
			$('.toggle-ttl').removeClass('open');
			$('.toggle-blk-slide').slideUp();
		}else{
			$('.toggle-ttl').removeClass('open');
			$('.toggle-blk-slide').slideUp();
			$(this).toggleClass('open');
			$(this).next('.toggle-blk-slide').slideToggle();
		}
	});

	if($(".fancybox").length > 0) {
		$(".fancybox").fancybox({
			padding: 0,

			openEffect : 'elastic',
			openSpeed  : 150,

			closeEffect : 'elastic',
			closeSpeed  : 150,

			closeClick : true,

			afterLoad: function() {
		        this.title = '<a href="' + this.href + '" target="_blank" class="fancybox-btn"><i class="fa fa-download" aria-hidden="true"></i>Download</a> ' + this.title;
		    },

			helpers : {
				title : {
							type : 'outside'
						},
				overlay : {
							css : {
								'background' : 'rgba(0, 0, 0, 0.65)'
							}
						}
			}
		});
	}


	$('#fullpage').fullpage({
		//Navigation
		menu: '#fullpage-menu',
		lockAnchors: false,
		anchors:['landing', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'about', 'download', 'end'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: false,
		showActiveTooltip: false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		resize : false,
		sectionsColor : ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
		paddingTop: '0',
		paddingBottom: '0',
		fixedElements: '',
		responsiveWidth: 0,
		responsiveHeight: 0,

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		//events
		onLeave: function(index, nextIndex, direction){
			if (index === 2 && direction === 'up') {
				$('.desktop-header').hide();
				$('#fp-nav').hide();
			}

			if (index === 1 && direction === 'down') {
				$('#fp-nav').show();
			}

			if (index === 7 && direction === 'down') {
				$('#fp-nav').hide();
			}

			if (index === 8 && direction === 'up') {
				$('#fp-nav').show();
			}
		},
		afterLoad: function(anchorLink, index){
			if (anchorLink === 'landing' || anchorLink === 'about' || anchorLink === 'download' || anchorLink === 'end') {
				$('#fp-nav').hide();
			} else {
				$('#fp-nav').show();
			}

			if (anchorLink === 'landing' || anchorLink === 'download' || anchorLink === 'end') {
				$('.desktop-header').hide();
			} else if (mq.matches) {
				$('.desktop-header').show();
			}
		},
		afterRender: function(){},
		afterResize: function(){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});