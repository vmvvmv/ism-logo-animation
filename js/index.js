window.log = function () {
	window.log.history = window.log.history || [];
	window.log.history.push(arguments);
	if (this.console) {
		arguments.callee = arguments.callee.caller;
		var a = [].slice.call(arguments);
		(typeof console.log === "object" ? window.log.apply.call(console.log, console, a) : console.log.apply(console, a))
	}
};
(function (b) {
	function c() {}
	for (var d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","), a; a = d.pop();) {
		b[a] = b[a] || c
	}
})((function () {
	try {
		console.log();
		return window.console;
	} catch (err) {
		return window.console = {};
	}
})());



function initISMLogo() {

	window.ismLogo = {}
	ismLogo.e = document.getElementById("ism-logo");
	ismLogo.s = Snap(ismLogo.e);

	ismLogo.I = Snap.select('#ISM-I');
	ismLogo.S = Snap.select('#ISM-S');
	ismLogo.S2 = ismLogo.S.clone();
	ismLogo.S3 = ismLogo.S.clone();
	ismLogo.M = Snap.select('#ISM-M');
	ismLogo.M2 = ismLogo.M.clone();
	ismLogo.M3 = ismLogo.M.clone();
	//------------------------------------------------------------------------
	window.ismLogoRed = {}
	ismLogoRed.e = document.getElementById("ism-logo-red");
	ismLogoRed.s = Snap(ismLogo.e);

	ismLogoRed.I = Snap.select('#ISM-I');
	ismLogoRed.S = Snap.select('#ISM-S');
	ismLogoRed.S2 = ismLogo.S.clone();
	ismLogoRed.S3 = ismLogo.S.clone();
	ismLogoRed.M = Snap.select('#ISM-M');
	ismLogoRed.M2 = ismLogo.M.clone();
	ismLogoRed.M3 = ismLogo.M.clone();
	//----------------------------------------------------------------------
	window.ismLogoBlue = {}
	ismLogoBlue.e = document.getElementById("ism-logo-blue");
	ismLogoBlue.s = Snap(ismLogo.e);

	ismLogoBlue.I = Snap.select('#ISM-I');
	ismLogoBlue.S = Snap.select('#ISM-S');
	ismLogoBlue.S2 = ismLogo.S.clone();
	ismLogoBlue.S3 = ismLogo.S.clone();
	ismLogoBlue.M = Snap.select('#ISM-M');
	ismLogoBlue.M2 = ismLogo.M.clone();
	ismLogoBlue.M3 = ismLogo.M.clone();
	//-----------------------------------------------------------------
	window.ismLogoGreen = {}
	ismLogoGreen.e = document.getElementById("ism-logo-green");
	ismLogoGreen.s = Snap(ismLogo.e);

	ismLogoGreen.I = Snap.select('#ISM-I');
	ismLogoGreen.S = Snap.select('#ISM-S');
	ismLogoGreen.S2 = ismLogo.S.clone();
	ismLogoGreen.S3 = ismLogo.S.clone();
	ismLogoGreen.M = Snap.select('#ISM-M');
	ismLogoGreen.M2 = ismLogo.M.clone();
	ismLogoGreen.M3 = ismLogo.M.clone();


	ismLogo.flatten = function (animate) {

		ismLogo.I.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'white'
		});
		ismLogo.I.transform('t-770,0');

		ismLogo.S.attr({
			strokeWidth: 2,
			opacity: 0,
			stroke: 'white'
		});
		ismLogo.S.transform('s4,1 t100,0');

		ismLogo.S2.attr({
			strokeWidth: 4,
			opacity: 0,
			stroke: 'white'
		});
		ismLogo.S2.transform('s-12,1 t-50,0');

		ismLogo.S3.attr({
			strokeWidth: 6,
			opacity: 0,
			stroke: 'white'
		});
		ismLogo.S3.transform('s4,1 t200,0');



		ismLogo.M.attr({
			strokeWidth: 4,
			opacity: 0,
			stroke: 'white'
		});
		ismLogo.M.transform('s5,0.2 t900,0');

		ismLogo.M2.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'white'
		});
		ismLogo.M2.transform('s-8,1 t300,0');

		ismLogo.M3.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'white'
		});
		ismLogo.M3.transform('s14,0.2 t-100,0');
		//-------------------------------------------------------------------------

		ismLogoRed.I.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'red'
		});
		ismLogoRed.I.transform('t-770,0');

		ismLogoRed.S.attr({
			strokeWidth: 2,
			opacity: 0,
			stroke: 'red'
		});
		ismLogoRed.S.transform('s4,1 t100,0');

		ismLogoRed.S2.attr({
			strokeWidth: 4,
			opacity: 0,
			stroke: 'red'
		});
		ismLogoRed.S2.transform('s-12,1 t-50,0');

		ismLogoRed.S3.attr({
			strokeWidth: 6,
			opacity: 0,
			stroke: 'red'
		});
		ismLogoRed.S3.transform('s4,1 t200,0');



		ismLogoRed.M.attr({
			strokeWidth: 4,
			opacity: 0,
			stroke: 'red'
		});
		ismLogoRed.M.transform('s5,0.2 t900,0');

		ismLogoRed.M2.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'red'
		});
		ismLogoRed.M2.transform('s-8,1 t300,0');

		ismLogoRed.M3.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'red'
		});
		ismLogoRed.M3.transform('s14,0.2 t-100,0');
		//-------------------------------------------------------

		ismLogoBlue.I.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'blue'
		});
		ismLogoBlue.I.transform('t-770,0');

		ismLogoBlue.S.attr({
			strokeWidth: 2,
			opacity: 0,
			stroke: 'blue'
		});
		ismLogoBlue.S.transform('s4,1 t100,0');

		ismLogoBlue.S2.attr({
			strokeWidth: 4,
			opacity: 0,
			stroke: 'blue'
		});
		ismLogoBlue.S2.transform('s-12,1 t-50,0');

		ismLogoBlue.S3.attr({
			strokeWidth: 6,
			opacity: 0,
			stroke: 'blue'
		});
		ismLogoBlue.S3.transform('s4,1 t200,0');



		ismLogoBlue.M.attr({
			strokeWidth: 4,
			opacity: 0,
			stroke: 'blue'
		});
		ismLogoBlue.M.transform('s5,0.2 t900,0');

		ismLogoBlue.M2.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'blue'
		});
		ismLogoBlue.M2.transform('s-8,1 t300,0');

		ismLogoBlue.M3.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'blue'
		});
		ismLogoBlue.M3.transform('s14,0.2 t-100,0');
		//--------------------------------------------------------      
		ismLogoGreen.I.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'white'
		});
		ismLogoGreen.I.transform('t-770,0');

		ismLogoGreen.S.attr({
			strokeWidth: 2,
			opacity: 0,
			stroke: 'green'
		});
		ismLogoGreen.S.transform('s4,1 t100,0');

		ismLogoGreen.S2.attr({
			strokeWidth: 4,
			opacity: 0,
			stroke: 'green'
		});
		ismLogoGreen.S2.transform('s-12,1 t-50,0');

		ismLogoGreen.S3.attr({
			strokeWidth: 6,
			opacity: 0,
			stroke: 'green'
		});
		ismLogoGreen.S3.transform('s4,1 t200,0');



		ismLogoGreen.M.attr({
			strokeWidth: 4,
			opacity: 0,
			stroke: 'green'
		});
		ismLogoGreen.M.transform('s5,0.2 t900,0');

		ismLogoGreen.M2.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'green'
		});
		ismLogoGreen.M2.transform('s-8,1 t300,0');

		ismLogoGreen.M3.attr({
			strokeWidth: 5,
			opacity: 0,
			stroke: 'green'
		});
		ismLogoGreen.M3.transform('s14,0.2 t-100,0');
	}

	ismLogo.expand = function (t) {

		if (!t) {
			var t = 1000;
		}

		var t2 = t * 1.2;
		var t3 = t * 1.4;
		var t4 = t * 1.2;
		//--------------------------------------------------------------
		ismLogo.M.animate({
			strokeWidth: 4,
			opacity: 0.2,
			transform: 's1,1 t0,0'
		}, t * 1.4, mina.easeinout);
		ismLogo.M2.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t * 1.3, mina.easeinout);
		ismLogo.M3.animate({
			strokeWidth: 4,
			opacity: 0.2,
			transform: 's1,1 t0,0'
		}, t * 1.5, mina.easeinout);
		ismLogo.S.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t * 1.7, mina.easeinout, function () {});
		ismLogo.S2.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t * 1.2, mina.easeinout, function () {});
		ismLogo.S3.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t * 1.4, mina.easeinout, function () {});
		ismLogo.I.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t * 1.5, mina.easeinout, function () {});
		//--------------------------------------------------------------  
		ismLogoRed.M.animate({
			strokeWidth: 4,
			opacity: 0.2,
			transform: 's1,1 t0,0'
		}, t2 * 1.4, mina.easeinout);
		ismLogoRed.M2.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t2 * 1.3, mina.easeinout);
		ismLogoRed.M3.animate({
			strokeWidth: 4,
			opacity: 0.2,
			transform: 's1,1 t0,0'
		}, t2 * 1.5, mina.easeinout);
		ismLogoRed.S.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t2 * 1.7, mina.easeinout, function () {});
		ismLogoRed.S2.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t2 * 1.2, mina.easeinout, function () {});
		ismLogoRed.S3.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t2 * 1.4, mina.easeinout, function () {});
		ismLogoRed.I.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t2 * 1.5, mina.easeinout, function () {});
		//--------------------------------------------------------------  
		ismLogoBlue.M.animate({
			strokeWidth: 4,
			opacity: 0.2,
			transform: 's1,1 t0,0'
		}, t3 * 1.4, mina.easeinout);
		ismLogoBlue.M2.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t3 * 1.3, mina.easeinout);
		ismLogoBlue.M3.animate({
			strokeWidth: 4,
			opacity: 0.2,
			transform: 's1,1 t0,0'
		}, t3 * 1.5, mina.easeinout);
		ismLogoBlue.S.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t3 * 1.7, mina.easeinout, function () {});
		ismLogoBlue.S2.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t3 * 1.2, mina.easeinout, function () {});
		ismLogoBlue.S3.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t3 * 1.4, mina.easeinout, function () {});
		ismLogoBlue.I.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t3 * 1.5, mina.easeinout, function () {});
		//--------------------------------------------------------------    
		ismLogoGreen.M.animate({
			strokeWidth: 4,
			opacity: 0.2,
			transform: 's1,1 t0,0'
		}, t4 * 1.4, mina.easeinout);
		ismLogoGreen.M2.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t4 * 1.3, mina.easeinout);
		ismLogoGreen.M3.animate({
			strokeWidth: 4,
			opacity: 0.2,
			transform: 's1,1 t0,0'
		}, t4 * 1.5, mina.easeinout);
		ismLogoGreen.S.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t4 * 1.7, mina.easeinout, function () {});
		ismLogoGreen.S2.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t4 * 1.2, mina.easeinout, function () {});
		ismLogoGreen.S3.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t4 * 1.4, mina.easeinout, function () {});
		ismLogoGreen.I.animate({
			strokeWidth: 4,
			opacity: 0.8,
			transform: 's1,1 t0,0'
		}, t4 * 1.5, mina.easeinout, function () {});


		Snap.animate(5000, 0, function (value) {
			var v = {
				'stroke-dashoffset': value,
				'stroke-dasharray': 3500 - value
			}
			ismLogo.I.attr(v);
			ismLogo.S.attr(v);
			ismLogo.S2.attr(v);
			ismLogo.S3.attr(v);
			ismLogo.M.attr(v);
			ismLogo.M2.attr(v);
			ismLogo.M3.attr(v);

		}, t * 2, mina.easeinout);


	}

	ismLogo.animationDone = function () {
		log('logo done');
	}



	ismLogo.init = function () {
		log('Init');
		ismLogo.flatten();
		// ismLogo.expand();
		setTimeout(function () {
			ismLogo.expand(2300)
		}, 700);
		// ismLogo.animateS_Final();
		//  $(document).on('scroll', (event) => {
		//   scroll = $(window).scrollTop();
		// })
	}

	ismLogo.init();

};


initISMLogo();