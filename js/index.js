

var ismLogos = [{ key: 'ismLogo', id: "ism-logo", color: 'white' }, { key: 'ismLogoRed1', id: "ism-logo-red1", color: '#FF6961' },  { key: 'ismLogoRed2', id: "ism-logo-red2", color: '#FF5C5C' }, { key: 'ismLogoRed3', id: "ism-logo-red3", color: 'red' }, { key: 'ismLogoBlue1', id: "ism-logo-blue1", color: '#92A1CF	' }, { key: 'ismLogoBlue2', id: "ism-logo-blue2", color: '#8C92AC' }, { key: 'ismLogoBlue3', id: "ism-logo-blue3", color: 'blue' }, { key: 'ismLogoGreen1', id: "ism-logo-green1", color: '#7CFC00' }, { key: 'ismLogoGreen2', id: "ism-logo-green2", color: '#66FF00' }, { key: 'ismLogoGreen3', id: "ism-logo-green3", color: 'green' }];


var container = $('#container');

for( obj of ismLogos ) {

	container.append('<svg id="'+obj.id+'" class="' + 'ism-logo' + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 90" width="100%" height="100%" preserveAspectRatio="none"> <polyline id="ISM-M" vector-effect="non-scaling-stroke" points="377.5 87 377.5 6 683.5 87 994 6 994.5 87" /> <path id="ISM-S" vector-effect="non-scaling-stroke" d="M22.5,6c30.87,54.24,61.74,81,97,81,30,0,47.34-16.88,73-42.5,28.29-28.29,52.81-38.26,75-38.5,33.18-.36,66,27.53,99.5,81"> </path> <polyline id="ISM-I" vector-effect="non-scaling-stroke" points="5.5 87 5.5 45.5 5.5 6" /> </svg> ');

}

function initISMLogo() {


	for( obj of ismLogos ) { 

		window[obj.key] = {}
		window[obj.key].e = document.getElementById(obj.id);
		window[obj.key].s = Snap(window[obj.key].e);

		window[obj.key].I = Snap.select('#ISM-I');
		window[obj.key].I = window[obj.key].I.clone();
		window[obj.key].S = Snap.select('#ISM-S');
		window[obj.key].S2 = window[obj.key].S.clone();
		window[obj.key].S3 = window[obj.key].S.clone();
		window[obj.key].M = Snap.select('#ISM-M');
		window[obj.key].M2 = window[obj.key].M.clone();
		window[obj.key].M3 = window[obj.key].M.clone();

	}


	ismLogo.flatten = function () {

		var supWidth = -3;

		for( obj of ismLogos ) { 
			window[obj.key].I.attr({
				strokeWidth: 5 + supWidth,
				opacity: 0,
				stroke: obj.color,

			});
			window[obj.key].I.transform('t-400,0');

			window[obj.key].S.attr({
				strokeWidth: 3 + supWidth,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].S.transform('s4,1 t100,0');

			window[obj.key].S2.attr({
				strokeWidth: 4 + supWidth,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].S2.transform('s-12,1 t-50,0');

			window[obj.key].S3.attr({
				strokeWidth: 6 + supWidth,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].S3.transform('s4,1 t200,0');

			window[obj.key].M.attr({
				strokeWidth: 4 + supWidth,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].M.transform('s5,0.2 t900,0');

			window[obj.key].M2.attr({
				strokeWidth: 5 + supWidth,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].M2.transform('s-8,1 t300,0');

			window[obj.key].M3.attr({
				strokeWidth: 5 + supWidth,
				opacity: 0,
				stroke: obj.color
			});
			window[obj.key].M3.transform('s14,0.2 t-100,0');
		}

	}

	ismLogo.expand = function (t) {

		var times = new Array( ismLogos.length ).fill(0);

		times[0] = t;

		if (!t) {
			times[0] = 1000;
		}

		for ( index in times ) {

			if(index % 2 === 0)
				times[index] = times[0] + times[index] * 0.2;
			else
				times[index] = times[0] - times[index] * 0.2;


		}

		times[0] *= 0.8;

		var i = 0;

		for( obj of ismLogos ) {
			
			var v = 2;

			window[obj.key].M.animate({
				strokeWidth: 4,
				opacity: 0.2,
				transform: 's1,1 t0,0',
				// 'stroke-dashoffset':v,
				// 'stroke-dasharray':v
			}, times[i] * 1.2, mina.easein);
			window[obj.key].M2.animate({
				strokeWidth: 4,
				opacity: 0.8,
				transform: 's1,1 t0,0',
				// 'stroke-dashoffset':v,
				// 'stroke-dasharray':v
			}, times[i] * 1.3, mina.easein);
			window[obj.key].M3.animate({
				strokeWidth: 4,
				opacity: 0.2,
				transform: 's1,1 t0,0',
				// 'stroke-dashoffset':v,
				// 'stroke-dasharray':v
			}, times[i] * 1.3, mina.easein);
			window[obj.key].S.animate({
				strokeWidth: 4,
				opacity: 0.8,
				transform: 's1,1 t0,0',
				// 'stroke-dashoffset':v,
				// 'stroke-dasharray':v
			}, times[i] * 1.4, mina.easein, function () {});
			window[obj.key].S2.animate({
				strokeWidth: 4,
				opacity: 0.8,
				transform: 's1,1 t0,0',
				// 'stroke-dashoffset':v,
				// 'stroke-dasharray':v
			}, times[i] * 1.2, mina.easein, function () {});
			window[obj.key].S3.animate({
				strokeWidth: 4,
				opacity: 0.8,
				transform: 's1,1 t0,0',
				// 'stroke-dashoffset':v,
				// 'stroke-dasharray':v
			}, times[i] * 1.4, mina.easein, function () {});
			window[obj.key].I.animate({
				strokeWidth: 4,
				opacity: 0.8,
				transform: 's1,1 t0,0',
				// 'stroke-dashoffset':v,
				// 'stroke-dasharray':v
			}, times[i] * 1.2, mina.easein, function () {});

			i++;
		}

		var f = window['ismLogo'].s.filter(Snap.filter.blur(1, 1));

		//var shadow =  window['ismLogo'].s.filter(Snap.filter.shadow(0, 2, 3));
		var filterChild = f.node.firstChild;

		Snap.animate(5000, 0, function (value) {

			var v = {
				'stroke-dashoffset':'10%',
				'stroke-dasharray':20
			}

			if (value === 0 ) {
			
				var v = {
					'stroke-dashoffset':0,
					'stroke-dasharray':0,
					//opacity:1,
					stroke: 'white'
					//filter:f
				}
				Snap.animate( 30, 0, function( v ) { 
					filterChild.attributes[0].value = v + ',' + v;  
					var v2 = {
						filter:f,
						strokeWidth: v  / 2
					}

					window['ismLogo'].I.attr(v2);
					window['ismLogo'].S.attr(v2);
					window['ismLogo'].S2.attr(v2);
					window['ismLogo'].S3.attr(v2);
					window['ismLogo'].M.attr(v2);
					window['ismLogo'].M2.attr(v2);
					window['ismLogo'].M3.attr(v2);

				}, 2500 * 1.5, mina.easeinout );
									
			}

			for( obj of ismLogos ) { 

				window[obj.key].I.attr(v);
				window[obj.key].S.attr(v);
				window[obj.key].S2.attr(v);
				window[obj.key].S3.attr(v);
				window[obj.key].M.attr(v);
				window[obj.key].M2.attr(v);
				window[obj.key].M3.attr(v);

			}	
		
		}, t * 1.2, mina.easein);

		
	}



	ismLogo.init = function () {

		ismLogo.flatten();
		setTimeout(function () {
			ismLogo.expand(2300)
		}, 700);

	}

	ismLogo.init();

};


initISMLogo();