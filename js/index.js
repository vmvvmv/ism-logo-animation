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

var ismLogos = [{key:'ismLogo', id: "ism-logo", color:'white'},{key:'ismLogoRed', id: "ism-logo-red", color:'red'},{key:'ismLogoBlue', id: "ism-logo-blue", color:'blue'},{key:'ismLogoGreen', id: "ism-logo-green", color:'green'}];


function initISMLogo() {


	for( obj of ismLogos ) { 

		window[obj.key] = {}
		window[obj.key].e = document.getElementById(obj.id);
		window[obj.key].s = Snap(window[obj.key].e);

		window[obj.key].I = Snap.select('#ISM-I');
		window[obj.key].S = Snap.select('#ISM-S');
		window[obj.key].S2 = window[obj.key].S.clone();
		window[obj.key].S3 = window[obj.key].S.clone();
		window[obj.key].M = Snap.select('#ISM-M');
		window[obj.key].M2 = window[obj.key].M.clone();
		window[obj.key].M3 = window[obj.key].M.clone();

	}


	ismLogo.flatten = function (animate) {

		for( obj of ismLogos ) { 
			window[obj.key].I.attr({
				strokeWidth: 5,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].I.transform('t-770,0');

			window[obj.key].S.attr({
				strokeWidth: 2,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].S.transform('s4,1 t100,0');

			window[obj.key].S2.attr({
				strokeWidth: 4,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].S2.transform('s-12,1 t-50,0');

			window[obj.key].S3.attr({
				strokeWidth: 6,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].S3.transform('s4,1 t200,0');

			window[obj.key].M.attr({
				strokeWidth: 4,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].M.transform('s5,0.2 t900,0');

			window[obj.key].M2.attr({
				strokeWidth: 5,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].M2.transform('s-8,1 t300,0');

			window[obj.key].M3.attr({
				strokeWidth: 5,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].M3.transform('s14,0.2 t-100,0');
		}

	}

	ismLogo.expand = function (t) {

		var times = [];

		times[0] = t;

		if (!t) {
			times[0] = 1000;
		}

		times[1] = times[0] * 1.2;
		times[2] = times[0] * 1.4;
		times[3] = times[0] * 1.2;

		var i = 0;
		
		for( obj of ismLogos ) { 

			window[obj.key].M.animate({
				strokeWidth: 4,
				opacity: 0.2,
				transform: 's1,1 t0,0'
			}, times[i] * 1.4, mina.easeinout);
			window[obj.key].M2.animate({
				strokeWidth: 4,
				opacity: 0.8,
				transform: 's1,1 t0,0'
			}, times[i] * 1.3, mina.easeinout);
			window[obj.key].M3.animate({
				strokeWidth: 4,
				opacity: 0.2,
				transform: 's1,1 t0,0'
			}, times[i] * 1.5, mina.easeinout);
			window[obj.key].S.animate({
				strokeWidth: 4,
				opacity: 0.8,
				transform: 's1,1 t0,0'
			}, times[i] * 1.7, mina.easeinout, function () {});
			window[obj.key].S2.animate({
				strokeWidth: 4,
				opacity: 0.8,
				transform: 's1,1 t0,0'
			}, times[i] * 1.2, mina.easeinout, function () {});
			window[obj.key].S3.animate({
				strokeWidth: 4,
				opacity: 0.8,
				transform: 's1,1 t0,0'
			}, times[i] * 1.4, mina.easeinout, function () {});
			window[obj.key].I.animate({
				strokeWidth: 4,
				opacity: 0.8,
				transform: 's1,1 t0,0'
			}, times[i] * 1.5, mina.easeinout, function () {});

			i++;
		}

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