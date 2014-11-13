$(document).ready(function() {
	'use strict';

/* ==== Fix for Internet Explorer 10 in Windows 8 and Windows Phone 8 / Fix for Android 4.1 Default Browser ==== */

	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style")
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
			)
		)
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
	}

	var nua = navigator.userAgent
	var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%')
	}

/* ==== Make intro section height of viewport / Min height is set to 525px in style.css ==== */

	$('.wh').css({'height':($(window).height())/5*4+'px'});
	$(window).resize(function(){
		$('.wh').css({'height':($(window).height())/5*4+'px'});
	});

});

$(window).load(function() {
	'use strict';

/* ==== Collapse menu on click on mobile and tablet devices ==== */

	if ($('.navbar-toggle:visible').length) {
		$('.navbar a').click(function () { $(".navbar-collapse").collapse("hide") });
	}

/* ==== Fullscreen Video Background ==== */

	var BV = new $.BigVideo({useFlashForFirefox:true, container:$('.video-hero')});
	BV.init();
	if (Modernizr.touch) {
		BV.show('img/hero-bg.jpg');
	} else {
		BV.show('img/seur-video.mp4',{altsource:'img/seur-video.ogv',ambient:true});
	}

/* ==== SVG FTW! ==== */

	var url ='img/icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

/* ==== Preloader ==== */

	$('.spinner').fadeOut('slow');
	$('.preloader').delay(350).fadeOut('slow');

});
