(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"sounds/afterifusehadandnotwouldhave.mp3", id:"afterifusehadandnotwouldhave"},
		{src:"sounds/beforeyoufinishthisprogram.mp3", id:"beforeyoufinishthisprogram"},
		{src:"sounds/boo.mp3", id:"boo"},
		{src:"sounds/futureperfecttense.mp3", id:"futureperfecttense"},
		{src:"sounds/indescribingtwopastactions.mp3", id:"indescribingtwopastactions"},
		{src:"sounds/mo_funky.mp3", id:"mo_funky"},
		{src:"sounds/moog_blip.mp3", id:"moog_blip"},
		{src:"sounds/mostcommonverberrorsoccur.mp3", id:"mostcommonverberrorsoccur"},
		{src:"sounds/ohbaby.mp3", id:"ohbaby"},
		{src:"sounds/pastperfecttense.mp3", id:"pastperfecttense"},
		{src:"sounds/perc_techno.mp3", id:"perc_techno"},
		{src:"sounds/perfectformoftheverb.mp3", id:"perfectformoftheverb"},
		{src:"sounds/presentperfecttense.mp3", id:"presentperfecttense"},
		{src:"sounds/real_disco.mp3", id:"real_disco"},
		{src:"sounds/relax.mp3", id:"relax"},
		{src:"sounds/theformulausetheappropriate.mp3", id:"theformulausetheappropriate"},
		{src:"sounds/thesatrequiresaknowledge.mp3", id:"thesatrequiresaknowledge"},
		{src:"sounds/theverbformindicatingbefore.mp3", id:"theverbformindicatingbefore"},
		{src:"sounds/theverbformindicatingpreceded.mp3", id:"theverbformindicatingpreceded"},
		{src:"sounds/theverbindicatingthatanaction.mp3", id:"theverbindicatingthatanaction"},
		{src:"sounds/thewordperfectmeanscomplete.mp3", id:"thewordperfectmeanscomplete"},
		{src:"sounds/thissoundsmoredifficultthanitis.mp3", id:"thissoundsmoredifficultthanitis"},
		{src:"sounds/UnderstandingthePerfectFormoftheVerb.mp3", id:"UnderstandingthePerfectFormoftheVerb"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/yeah_calm.mp3", id:"yeah_calm"},
		{src:"sounds/youhadlearnedtheperfecttense.mp3", id:"youhadlearnedtheperfecttense"},
		{src:"sounds/youhavelearnedtheperfectform.mp3", id:"youhavelearnedtheperfectform"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAhIgEgUIgRADIgPADIgKAYQgCAEgEAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgEAJgUIgBgDQAAgFAGgCIATgeQANgXADAAQAFgBACAIIAEAVIAKAqIADAKIACAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgGAAgFgOgAgHAEIAVgEIgFgXg");
	this.shape.setTransform(4.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAwQgDgCAAgDIAAgTIACgYIABgaIABgRQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAIgDALAAQAJAAALAIQAMAIAAANQAAARgNAHQAJAEAFAFQAFAFAAAGQAAAHgIAIQgGAFgHACQgMAGgWAAQgDAAgCgDgAgSAZIAAANQARgBAIgEIAJgFQADgEAAgBQAAgDgIgEIgLgEIgFgBIgDAAIgCAAIgIgBIAAAPgAgPglIgBAMIgBAYIAKABQAHgBAHgFQAGgGAAgJQAAgGgHgFQgGgFgGAAIgJAAg");
	this.shape_1.setTransform(4.2,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAmQgJgKAAgMQAAgUASgXQAPgSANAAIAGAAIAEABQADgEAEAAQADAAACAGIABAMQAAAEgBACQgCACgDAAQgFAAgCgFIgDgFIgHAAQgIAAgKAOQgPASAAAQQAAAIAFAFQAGAHAHAAQAEgBAIgDIAKgHQAEgDACAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAADgCADQgRAPgPgBQgNABgJgLg");
	this.shape_2.setTransform(3.9,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAzQgIgCgDgDIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIABgUIABgUIgBgUIAAgXQABgCACgDQACgDADAAQACAAAIAEIALAGQARAGANAMQAOAPAAAQQAAALgEAKQgGAKgJAGQgJAHgRAAIgKgBgAgWgQIAAAQIgCAjIACABQAGADAIAAQANAAAGgEQAGgEAEgHQADgIAAgHQABgQgUgNQgFgEgXgKg");
	this.shape_3.setTransform(4.7,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAwQgHgFAAgVIAAgJIABgKIgBgDIABgCIACgbIgBgHIgBgHQAAgHAHAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAOgDIALgBQAPAAAJAEQAEACABAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBgBQgMgDgJAAIgKABIgNADIABAHIgBAYIAagCIAPgCQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgGAAIgPACIgbACIAAAJIgBAHQAAAOACADQABACAJAAIAKgBIAMAAIADAAIAEgBQAHAAAAAHQAAAFgFABQgHACgRAAQgUAAgFgGg");
	this.shape_4.setTransform(4.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAzQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgmIABgkIAAgIIgBgIQAAgDACgCQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAEABIAOgCIAJgBQAHAAAJACQANADAAAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgCACgDAAIgCgBQgIgDgNAAIgIABIgNACIAAAbQAMgDAGAAIATABQAGABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgKAAIgIAAQgEAAgOADIgBAsQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_5.setTransform(4.1,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfArQgIgJAAgRQAAgRAIgPQAHgSANgKQAIgIAHAAQAGABAJADQALAFAAAFQABADgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgFgCQgKgFgGgBQgEABgEAFIgIAIQgOATAAAWQAAAMADAEQAEAFALAAQAKAAAIgHQAJgIADgNQgSABgKAFIgCABQgEAAgCgCQgBgCAAgDQAAgEADgCQAMgGAiAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAFgDACQgFATgMAMQgMAMgQAAQgQgBgHgIg");
	this.shape_6.setTransform(4.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmAxQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgUIABgUIAAgJIAAgLIAAgPIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBAPIAAAPIAAAOIAagDQAQgDALgBIABgaIABgKQACgHAEAAIAEABQABABAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBAJIAAAFIAAAFIgBATIgBARIAAAPIABAPQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgPIAAgPIAAgJQgLABgPADIgaAEIgBARIgBAQQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_7.setTransform(4.9,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAuQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgDACgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIANgBIABgMIAAgLIgBgKIACgjIgIAAIgJAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCgCAAgDQAAgGAGgBIATAAQALAAATADQAGAAAAAGQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgKgBIgCAhIAAALIABALIgBALIAUgBQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgBACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgLABIgKAAIgLABIgMABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_8.setTransform(3.4,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZArQgMgJAAgLQAAgIAHAAQAGAAAAAIQAAAFAIAFQAHAFAGAAQADAAACggIABgkIAAgGIgDAAIgGgBIgIAAQgDAAgCgBQgBgCAAgDQAAgHAIAAIAHAAIAFABIALgBIAMAAQAPAAAAAHQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCADgDAAIgEgBIgEAAIgHAAIAAAHQAAAugGAVQgEAOgJAAQgLAAgLgIg");
	this.shape_9.setTransform(4.2,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// circle
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAxg9QAUAaAAAjQAAAkgUAaQgVAbgcgBQgcABgUgbQgUgaAAgkQAAgjAUgaQAUgaAcgBQAcABAVAag");
	this.shape_10.setTransform(4,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,15.9,22.5);


(lib.skiptomenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAHAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape.setTransform(16.7,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVAqIgDgTIgBgTIABgGIAAgJQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEAAQgDAAgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCADQgDABgEAAQgHABgBgJg");
	this.shape_1.setTransform(7.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgQATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIADAIAAQAGAAAIgBQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKABgHAIg");
	this.shape_2.setTransform(-2.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_3.setTransform(-14.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AkZh7IIzAAIAAD3IozAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVAuQgMAGgOAAQgMAAgJgGQgJgGgBgMQgEgZAAgSQAAgNADgRQABgJAIAAQAEAAADADQADADAAAEIgCAOIgBAPIABAZQABAMACAHIAGADIAGAAQALAAAPgEIAAgTIAAgRQAAgVABgPQABgJAJAAQAEAAADACQADADgBAEIgBAlIAAATIAAAVIAAAGIAAAHQAAAEgCACQgDADgEAAQgIAAgCgJg");
	this.shape_6.setTransform(18.3,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAvIgDgWIgBgVIAAgHIABgJQAAgVgIAAQgLAAgIANQgJALgFAQIgBAKIAAAJIAAAJIABAJQAAAEgDADQgCACgFAAQgEAAgCgCQgDgDAAgEIgBgJIAAgJIABgaIACgbIgBgJIAAgJQAAgFADgCQACgDAEAAQAJAAABANIAAALQARgWAPAAQAPAAAGAOQAFAJAAASIAAAKIAAAHQAAAIACAMQACANAAAIQAAAEgDADQgDADgEAAQgIAAgBgJg");
	this.shape_7.setTransform(8.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggApQgPgMAAgWQAAgXAMgRQAOgSAVAAQAPAAAKAFQANAHAAAOQAAAJgMAIQgEAEgQAFIgjASQAFAIAJAEQAIAEAJAAQAHAAAIgDQALgDAEgFQADgFAEAAQADAAADACQADADAAADQAAALgRAIQgPAGgOAAQgVAAgNgLgAgTgZQgHAJgEARIAdgMQAQgJAIgGQgJgIgOAAQgLAAgIAJg");
	this.shape_8.setTransform(-2.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA5QgDgDAAgFQAAgLgCgXQgDgVAAgMQAAgKgCgGQgHADgHAHIgMANIgEAGIgCAPIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIACgRIABgPIgBgQIgBgPQAAgWAKAAQADAAAEADQADAEAAADIgBAGIAAAGIAAAKQAFgKAKgJQAJgIAHAAQAPAAAEAPQAGgHAHgDQAHgEAKAAQAQAAAGARIAEAcIAHA1QAAAEgDADQgDACgEAAQgIAAgBgIQgCgLgCgTIgDgcIgDgNQgEgJgEAAQgDAAgKAGQgJAGgDADIAAASIADAYQACAQAAAJQAAAFgCADQgDACgEAAQgCAAgDgCg");
	this.shape_9.setTransform(-15.6,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3CJIptAAIAAkRIJtAAg");
	this.shape_10.setTransform(0,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("Ak2CJIAAkRIJsAAIAAERg");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAHAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape_12.setTransform(16.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIgDgUIgBgTIABgHIAAgHQAAgUgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAARIAAAIIAAAGIACAUQACALAAAHQAAAEgCACQgDACgEABQgHgBgBgHg");
	this.shape_13.setTransform(7.5,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIAEAIAAQAGgBAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_14.setTransform(-2.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_15.setTransform(-14.1,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEah7IAAD3IozAAIAAj3g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


(lib.general_buttoncolor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{resetRed:1});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_8 = function() {
		this.gotoAndPlay("resetRed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#EC0000","#9D0000","#480000"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape_1.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj9CqIAAlSIH7AAIAAFSg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.fcb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAgKIB2AAIAAh2IAKAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("Ag2A2IAAgKIBiAAIAAhiIAKAAIAABsg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,11,11);


(lib.fcb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag7A7IAAh2IB2AAIAAAKIhsAAIAABsg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.fcb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AgxAxIAAhiIBiAAIAAAKIhYAAIAABYg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,10,10);


(lib.fcb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAiAICAAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_check_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgLAiIAAAAIgVgWIgCgDIABgRQgBgGAGAAIAEACIAQAQIAggjIAFgCQAGAAAAAGIAAARIgCAEIgmAmIgEACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,7);


(lib.fcb_check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAiIAAAAIgVgWIgCgDIABgRQgBgGAGAAIAEACIAQAQIAggjIAFgCQAGAAAAAGIAAARIgCAEIgmAmIgEACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,7);


(lib.fcb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.fcb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.fcb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAHIgDgKIgEAKQgEAIgDAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIgCgIIgBgHQgGASgCAAIgDgBIgBgCIABgCQADgFABgFIACgNQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAEAAACAJIADAKIACgGIADgJQADgEACAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAEAKIACAGIACAIIABACIgBACIgCABQgDAAgDgJgAgTANIgBgIIAAgGIgBgHIgFAAIgGAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAFABIAEAAIAPAAIADgBIAEAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAAAAAABQAAAAgBAAIgOAAIAAAIIABAFIABAEIABAEIgCACIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape.setTransform(57.3,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAYQgGgDgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEACIAEABIAFABIAFgBQADgBAAgDQABgGgJgCIgCgBIgIgDQgEAAAAgFQAAgKAIgEIAHgCIAIgDIAEgBIADABIABAEIABADIAAAEIgBADIgCABQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgFIgJADQgFADgBAEIADABQAIACAFACQAHADAAAJQAAAHgGAEQgFADgGAAQgFAAgGgCg");
	this.shape_1.setTransform(51,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLATQgHgGABgKQAAgGAFgKQAHgKAGAAQAEAAAGACQAGACABAEIgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgBgBQgDgCgGAAQgCAAgFAIQgDAHAAADQAAAGADAEQAEADAEAAIAGgCIAEgCIACgBIAEABIABADQgBADgGADQgGADgEAAQgHAAgGgFg");
	this.shape_2.setTransform(46.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAfQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgJIAAgIIAAgKIAAgIQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACgBIACABQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAIIgBAKIAAAIIABAJQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgBABIgDgBgAgBgXQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_3.setTransform(43.1,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKAVIgBgJIgBgKIABgDIAAgDQAAgKgEAAQgFAAgCAFQgEAGgCAGIgBAEIAAAFIAAADIAAAFIgBADIgDABIgDgBIgBgDIAAgFIgBgDIABgMIAAgLIAAgFIAAgEIABgDIAEgBQAEAAAAAFIAAAGQAHgKAGAAQAHAAADAGQACAEAAAJIAAAEIAAACIABAKIABAJIgBADIgDABQgEAAgBgEg");
	this.shape_4.setTransform(39.5,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_5.setTransform(34.8,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAhIgBgLIgBgKIAAgDIAAgEQAAgGgEAAQgFAAgDADIgGAKQAAARgCACQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDIABgBIAAgHIAAgHIAAgeIABgHIgBgFIAAgEQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAEAAAAAEIABAIIAAAKIAAAJIAAAEQADgFAEgCQACgDAFAAQAHAAADAFQABADABAGIABAJIAAAIIACAKIAAABQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgDABQgEAAgBgDg");
	this.shape_6.setTransform(30,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLATQgHgGABgKQAAgGAFgKQAHgKAGAAQAEAAAGACQAGACABAEIgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgBgBQgDgCgGAAQgCAAgFAIQgDAHAAADQAAAGADAEQAEADAEAAIAGgCIAEgCIACgBIAEABIABADQgBADgGADQgGADgEAAQgHAAgGgFg");
	this.shape_7.setTransform(25,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgGgGAAgKQAAgKAFgHQAGgJAJAAQAGABAFACQAGADAAAHQAAAEgFADIgKAEIgOAHQACAEAEABQAEADACAAIAIgBQAFgCABgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIADAAIABADQAAAFgIADQgGADgHABQgIgBgGgEgAgIgKQgDAEgCAGIANgFQAGgDAEgDQgEgDgGgBQgEAAgEAFg");
	this.shape_8.setTransform(20.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAaAgIgCgGIgBgIQgCgHgEgWIgJAYIgDAJIgDAIQgBAEgCAAQgDgBgBgDIgCgEIgBgFIgIgfIgCAHIgFAWIgCAMQgBAEgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgEQAAgHADgLIAFgPIADgOQACgKABgDQACgCADAAQACAAACADQACAEABAMQADAOAFAPQAFgPAEgSIACgGIACgHQABgDADAAQAEAAACAIIACAKQADASADAOIACAHIACAHQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBg");
	this.shape_9.setTransform(13.8,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgdIAAgEIABgFQAAgEADAAQAFAAAAAHQAHgIAKAAQADAAACADQACACAAAGIAAADQgBAFgEAAQgEAAAAgEIAAgDIAAgEQgHABgCADQgEADgDAGIABAWQAAAEgFAAQgEAAAAgEg");
	this.shape_10.setTransform(5.1,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_11.setTransform(0.5,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAZQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgPIgBgOQAAgFgBgCQgDABgDADIgFAGIgDADIAAAGIgBAHIABAEIAAADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgFAAAAgLIAAgIIABgGIgBgHIAAgHQAAgKAFAAIACACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAADIgBACIAAAFQADgFAEgDQAFgEADAAQAGAAACAHQACgEADgBQAEgCAEAAQAHAAADAIIACAMIADAYIgBADIgDABQgEAAgBgEIgBgOIgCgLIgBgGQgCgEgCAAIgFADIgGAEIAAAHIABALIABALIgBADIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_12.setTransform(-5.2,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAZQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgPIgBgOQABgFgCgCQgDABgDADIgFAGIgCADIgBAGIgBAHIABAEIABADQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgFAAAAgLIABgIIAAgGIAAgHIgBgHQAAgKAEAAIADACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAADIgBACIAAAFQADgFAEgDQAFgEADAAQAGAAABAHQADgEADgBQADgCAFAAQAHAAADAIIACAMIADAYIgCADIgCABQgEAAgBgEIgCgOIgBgLIgBgGQgCgEgCAAIgFADIgGAEIAAAHIABALIABALIgBADIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_13.setTransform(-12.2,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_14.setTransform(-18.1,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgdIAAgEIABgFQAAgEADAAQAFAAAAAHQAHgIAKAAQADAAACADQACACAAAGIAAADQgBAFgEAAQgEAAAAgEIAAgDIAAgEQgHABgCADQgEADgDAGIABAWQAAAEgFAAQgEAAAAgEg");
	this.shape_15.setTransform(-22.4,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAeQgFgGgBgMQABgMAFgKQAFgMAIgIQAHgEAEAAQAEAAAGACQAIAEAAADIgBADIgEABIgCgBQgHgDgEAAQgDgBgCAEIgGAGQgKAOAAAOQABAIACADQACAEAIAAQAGgBAGgFQAGgEACgLQgMABgGAEIgDABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAIgEAXAAIADABIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgDANgIAJQgJAHgKABQgKgBgGgFg");
	this.shape_16.setTransform(-27.7,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAhIgBgDIACgJIAKgWQAFgOAHgIIABgBIgVAAIgJgBQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAQAAIAPABIAIAAQAFAAAAACQAAADgDADIgEAFQgGAGgFAKIgHAPIgCAKIgEAKQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgDgBg");
	this.shape_17.setTransform(-36.2,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAiIgHAAIgFgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgEAIAAIACAAIABAAIAAgHIgBgGIABgPIABgRQgFAFgCAAIgDgBIgBgDQAAgDADgCIAHgGQACgEAEAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAADIAAADIAAAEIAAAEIgBAPIgBANIAAAGIABAGIAFAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAADIAAADIgDABg");
	this.shape_18.setTransform(-41,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAXQgFgKAAgNQAAgMAGgKQAHgMAKAAQAMABAGAJQAGAJAAANQAAARgGAKQgGAJgMAAQgMABgGgMgAgLgRQgEAIAAAJQAAAMAEAHQAEAHAHAAQAIABAEgLQADgIAAgJQAAgMgDgGQgEgGgIAAQgGAAgFAIg");
	this.shape_19.setTransform(-45.9,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgHAAIgFABIgFAAIgFAAIgBAAIgCAAQgDAAgBgDIAAgFQAAgKAGgHQACgDALgFIAHgHQADgEAAgGQAAgDgDgCQgDgCgDAAQgDAAgDADIgGAEIgDACQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAFgFAEgCQAFgDAEAAQAHAAAFAEQAGAEAAAHIgBAIIgEAHQgDACgIAFQgGAFgDADQgFAFABAHIAJgBIALAAIAGABQAEABAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABIgDAAg");
	this.shape_20.setTransform(-51.3,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAAQAAgKALgJQALgKALAAQAOAAAHAIQAHAIAAAMQAAAJgJAKQgKALgMAAIAAABQgeAAAAgegAgOgOQgIAGAAAIQAAAMAGAFQAGAEAKAAQAJAAAIgIQAGgIAAgGQAAgJgEgFQgFgGgIAAIgCAAQgKAAgIAHgAgKAJQgGgEAAgFQAAgGAIgFQAGgFAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAIgCgBIgBAAQgDAAgEADQgEACAAADQAAABADACIAFABQABAAAEgCIAEgCIADAAIABADQAAADgEADQgGADgDAAQgFAAgFgDg");
	this.shape_21.setTransform(-57.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-7.1,126.6,16.6);


(lib.contentfutureperfecttense = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.v1a.start();*/
	}
	this.frame_58 = function() {
		playSound("moog_blip");
	}
	this.frame_59 = function() {
		/* _root.v1a.start();*/
	}
	this.frame_119 = function() {
		playSound("moog_blip");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1).call(this.frame_59).wait(60).call(this.frame_119).wait(1));

	// sentences
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAHQgEgDAAgEQAAgDAEgDQADgDAEAAQAFAAAEADQADADAAADQAAAEgDADQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(293.3,233.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVApQgMgFABgJQAAgHAJAAIAKACQAHADADgBQAOAAABgGQAAgEgLgFIgTgJQgLgHAAgLQAAgPAQgGQALgEARAAQAIABAEACQAFADAAAHQAAAOgIAAQgHAAgCgGIgGgBQgRAAAAAFQAAADAKAFIAUAKQALAHAAALQAAANgMAHQgKAGgNgBQgKAAgJgCg");
	this.shape_1.setTransform(285.9,229.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAhQgNgKAAgRQAAgTAKgNQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAGIgSAHIgYAMQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEAEAAQAHAAABAIQgBAJgNAFQgKAFgMAAQgSAAgLgJgAgJgRQgGAEgDAKIASgHQAIgFAHgEQgFgDgJAAQgFAAgFAFg");
	this.shape_2.setTransform(277.5,229.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIgCgbIgCgYIgBgIQgJAFgJANIgCABIAAAXIAAAFIAAAGQAAAEgEADQgDACgEAAQgHAAgCgGQgCgEAAgIIAAgbIAAgLIgBgMQAAgHADgFQADgIAFAAQAFAAADADQAEAEAAAEIgBAHQAMgOAKAAQAMAAAEAKQAFgFAGgCQAFgCAHAAQAPAAAGAPIADAWIAGAnQAAAFgDADQgEACgEAAQgJABgCgJIgDgXIgCgVQgCgOgEABIgIADIgJAGIACAYQACARAAAJQAAAEgDACQgDAEgFAAQgCAAgDgEg");
	this.shape_3.setTransform(267.1,229.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIA4QgDgDgBgEIAAgPIAAgOIAAgRIACgQQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAQIAAARIAAAOIAAAPQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgnQgEgDABgFQgBgFAEgDQAEgDADAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_4.setTransform(258.7,228);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA2QgDgDAAgEIAAgIIABgJIgCgnIgPgBQgKgBAAgJQAAgFADgDQAEgCAEAAIAOAAIgBgIIAAgIQAAgEADgDQADgDAFAAQAJAAAAAUIAAAGIAIAAIAMAAQAGADAAAHQAAAFgCADQgEACgEAAIgEAAIgEAAIgIABIACAoIAAADIAAAFQAAARgLABQgDgBgDgCg");
	this.shape_5.setTransform(252.5,228.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoAtQgCgDAAgDQAAgEAEgDQADgDAEAAQAFAAADAEIAGAGQAFACAIAAQAKAAAIgIQAHgJAAgMQAAgLgDgEQgEgGgIAAQgMAAgIAJIgHAFQgEAEgFAAQgEAAgDgDQgDgDAAgDIABgMIACgfIgBgFIgBgGQAAgDAEgCQADgCAEAAIAFAAIAFABIAjAAIAGgBIAGAAQAEAAADADQADACAAAEQAAAMgYAAIgEAAIgEAAIgWAAIgCAQQALgFAMAAQATAAAKAOQAIAMAAAPQAAAWgNAOQgOAOgUAAQgYAAgMgRg");
	this.shape_6.setTransform(236.9,228);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAkIgCgQIgBgRIABgFIAAgGIAAgEIAAgDQAAgGgDgBQgHAAgFAJQgGAIgEAMIAAAHIAAAHIgBAHIAAAHQAAAEgEADQgDADgEAAQgFAAgDgDQgDgDAAgEIgBgHIAAgHIABgVIABgUIAAgGIgBgHQABgFADgDQADgDAFAAQAJAAACAMIAAABQALgLALAAQAOAAAGAMQAEAIgBARIAAAFIAAADIACARIACAPQAAAFgDACQgDADgFAAQgKAAgBgJg");
	this.shape_7.setTransform(220.9,229.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnAyQAAgFADgCQADgDAEAAIAKACIAMABQAJAAAGgIQAFgGABgPQgEADgFACQgFADgEAAQgPgBgKgJQgKgKAAgOQAAgWANgNQAOgOAVAAQAHAAAFADQAGABADAEQAKABAAAKIgCAPQgDATgBARQgBAagHALQgKAQgYgBQgfABAAgMgAgLgiQgGAIAAANQAAAJADAEQAEADAHAAQAEAAAHgFQAGgIABgGIADgXIgFgDIgFgBQgLAAgIAJg");
	this.shape_8.setTransform(212.3,232);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJA4QgDgDAAgEIAAgPIAAgOIAAgRIABgQQAAgEADgDQADgDAFAAQADAAADADQADADAAAEIgBAQIgBARIAAAOIABAPQAAAEgDADQgDADgDAAQgEAAgEgDgAgGgnQgDgDgBgFQABgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgDAAgEgEg");
	this.shape_9.setTransform(206.1,228);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVApQgMgFAAgJQABgHAJAAIAKACQAHADADgBQAPAAgBgGQABgEgLgFIgTgJQgLgHAAgLQAAgPAQgGQAKgEATAAQAHABAEACQAFADAAAHQAAAOgHAAQgJAAgBgGIgGgBQgRAAAAAFQAAADAKAFIAUAKQAMAHAAALQAAANgNAHQgKAGgNgBQgKAAgJgCg");
	this.shape_10.setTransform(199.6,229.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAhQgOgKAAgRQAAgTALgNQAMgPARAAQAOAAAJAEQAMAGgBAMQABAJgKAGIgSAHIgYAMQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEADAAQAJAAAAAIQgBAJgNAFQgKAFgMAAQgSAAgLgJgAgJgRQgFAEgEAKIASgHQAJgFAGgEQgGgDgIAAQgFAAgFAFg");
	this.shape_11.setTransform(191.2,229.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAVA7QgGADgFABIgKAAQgRABgMgLQgMgMAAgRQAAgWAMgKQAMgOARAAIAKACQAFABAEACQABgaABgKQABgKAJABQAFAAACACQADADAAAFIgBAiIgCAgQAAAcACAKIAAABQAAAFgDADQgEADgEgBQgFAAgDgEgAgPADQgGAGAAAOQABAJAFAFQAHAHAIAAQAEgBAEgBIAGgFIADgCIAAgdQgDgFgEgBQgEgBgFAAQgKgBgGAFg");
	this.shape_12.setTransform(182.1,227.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUApQgNgFAAgJQAAgHAKAAIALACQAGADAEgBQAOAAAAgGQAAgEgMgFIgSgJQgLgHAAgLQAAgPARgGQAJgEASAAQAIABAEACQAFADAAAHQAAAOgIAAQgHAAgCgGIgGgBQgRAAAAAFQAAADAJAFIAVAKQALAHAAALQAAANgMAHQgKAGgMgBQgLAAgIgCg");
	this.shape_13.setTransform(429.1,205.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJA4QgCgDAAgEIgBgPIAAgOIABgRIABgQQAAgEACgDQADgDAFAAQADAAADADQADADAAAEIgBAQIgBARIAAAOIABAPQAAAEgDADQgDADgDAAQgFAAgDgDgAgGgnQgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_14.setTransform(423.2,203.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASA5IgEgSIgBgSIAAgHIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDAEgGALQAAAcgDAGQgDAHgHgBQgEAAgEgDQgDgDAAgEIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgHQAAgEADgDQADgDAFAAQAIABACAHQACAGAAAJIgBAQIAAAPQAGgFAGgEQAFgCAHAAQANAAAGAIQAFAFABAKIAAATIACAPIADAPIAAAEQAAADgDADQgEAEgEAAQgIgBgCgHg");
	this.shape_15.setTransform(416.3,203.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgIIAAgJIgBgnIgOgBQgKgBAAgJQAAgFADgDQADgCAEAAIANAAIAAgIIgBgIQABgEADgDQADgDAEAAQAKAAAAAUIAAAGIAIAAIAMAAQAHADAAAHQgBAFgDADQgCACgGAAIgDAAIgEAAIgHABIABAoIAAADIAAAFQAAARgLABQgDgBgCgCg");
	this.shape_16.setTransform(407.8,204.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAVA7QgGADgFAAIgKABQgRABgMgLQgMgMAAgRQAAgWAMgKQAMgOARAAIAKACQAFABAEACQABgaABgKQABgKAJABQAFAAACACQADADAAAFIgBAiIgCAgQAAAcACAKIAAACQAAAEgDADQgEADgEgBQgFAAgDgEgAgPADQgGAGAAAOQABAJAGAFQAGAHAIAAQAEgBAEgBIAGgFIADgCIAAgdQgDgFgEgBQgEgBgFAAQgKgBgGAFg");
	this.shape_17.setTransform(392.2,203.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgZAhQgOgKAAgRQAAgTALgNQAMgPARAAQAOAAAJAEQAMAGAAAMQAAAJgKAGIgRAHIgZAMQAEAEAFACQAGACAEAAQALAAAHgEQAHgEADAAQAJAAAAAIQAAAJgNAFQgLAFgNAAQgQAAgMgJgAgJgRQgGAEgDAKIASgHQAIgFAHgEQgGgDgIAAQgFAAgFAFg");
	this.shape_18.setTransform(383,205.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgFA2QgEgDAAgEIAAgIIAAgJIgBgnIgOgBQgKgBAAgJQAAgFADgDQADgCAEAAIANAAIAAgIIgBgIQABgEADgDQADgDAEAAQAKAAAAAUIAAAGIAIAAIAMAAQAHADAAAHQgBAFgDADQgCACgGAAIgDAAIgEAAIgHABIABAoIAAADIAAAFQAAARgLABQgDgBgCgCg");
	this.shape_19.setTransform(374.9,204.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgXAiQgMgLAAgQQAAgOALgRQAMgSAPgBQAIABALAEQANAFAAAIQAAADgDADQgDADgEAAQgDAAgFgDQgFgEgJAAQgEAAgHAMQgHALAAAHQAAAHAGAFQAFAFAIAAQAFAAAHgEIAKgEQAEAAADADQADADAAAEQAAAGgNAGQgMAFgHABQgQgBgLgJg");
	this.shape_20.setTransform(366.9,205.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgZAhQgNgKAAgRQAAgTAKgNQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAGIgSAHIgYAMQAEAEAFACQAFACAGAAQAKAAAHgEQAGgEAFAAQAHAAABAIQAAAJgOAFQgLAFgLAAQgSAAgLgJgAgJgRQgGAEgDAKIASgHQAJgFAGgEQgGgDgIAAQgFAAgFAFg");
	this.shape_21.setTransform(358.3,205.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgeAoQgCgCAAgFIAAgxIAAgHIAAgHQABgFACgDQADgDAEAAQAJAAABAJQAMgKASAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgQADgIAPIABAlQAAAFgDADQgDACgFAAQgFAAgDgDg");
	this.shape_22.setTransform(350.3,205.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgdAoQgDgCAAgFIAAgxIAAgHIAAgHQAAgFADgDQACgDAGAAQAIAAACAJQAMgKAQAAQAQAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgQADgHAPIAAAlQAAAFgEADQgDACgEAAQgFAAgCgDg");
	this.shape_23.setTransform(342.6,205.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_24.setTransform(334.3,205.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgXAiQgMgLAAgQQAAgOALgRQAMgSAPgBQAIABALAEQANAFAAAIQAAADgDADQgDADgEAAQgDAAgFgDQgFgEgJAAQgEAAgHAMQgHALAAAHQAAAHAGAFQAFAFAIAAQAFAAAHgEIAKgEQAEAAADADQADADAAAEQAAAGgNAGQgMAFgHABQgQgBgLgJg");
	this.shape_25.setTransform(325.9,205.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgZAhQgOgKAAgRQAAgTALgNQALgPASAAQAOAAAJAEQAMAGAAAMQAAAJgKAGIgRAHIgZAMQAEAEAFACQAGACAEAAQALAAAHgEQAGgEAEAAQAIAAAAAIQAAAJgMAFQgMAFgMAAQgQAAgMgJgAgJgRQgFAEgDAKIARgHQAJgFAGgEQgGgDgIAAQgFAAgFAFg");
	this.shape_26.setTransform(310.4,205.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgKAiIgag9IgBgEQAAgEADgDQAEgDAEAAQAHAAADAGIAQAqIALgZIAGgRQAEgGAGAAQAEAAAEADQADADAAAEQAAADgMAcIgRAhQAAAEgDADQgDACgDAAQgHAAgDgIg");
	this.shape_27.setTransform(302.3,205.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AASAjIgMAFQgGACgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBAIIgBALQAAAMACAHIAEAIIADAIQAAAEgDADQgDACgEAAQgEABgIgIgAgKgOQgIAIAAAJQAAAKAEAGQAEAEAHAAQADABAEgCQAFgBAEgEQgDgRAAgJIABgFIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_28.setTransform(293.9,205.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AASA5IgEgSIgBgSIAAgHIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDAEgGALQAAAcgDAGQgDAHgHgBQgEAAgEgDQgDgDAAgEIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgHQAAgEADgDQADgDAFAAQAIABACAHQACAGAAAJIgBAQIAAAPQAGgFAGgEQAFgCAHAAQANAAAGAIQAFAFABAKIAAATIACAPIADAPIAAAEQAAADgDADQgEAEgEAAQgIgBgCgHg");
	this.shape_29.setTransform(284.9,203.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgGA9QgDgDAAgFIAAhqQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABmQAAAPgKAAQgDAAgDgDg");
	this.shape_30.setTransform(270.9,203.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgGA9QgDgDAAgFIAAhqQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABmQAAAPgKAAQgDAAgDgDg");
	this.shape_31.setTransform(266.5,203.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgJA4QgDgDABgEIgBgPIAAgOIABgRIAAgQQAAgEADgDQADgDAFAAQADAAADADQADADAAAEIgBAQIgBARIAAAOIABAPQAAAEgDADQgDADgDAAQgEAAgEgDgAgGgnQgDgDgBgFQABgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgDAAgEgEg");
	this.shape_32.setTransform(262.3,203.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AACAYQgCgHgBgSIgCADIgMAeIgDAGQgEAEgGABQgEAAgEgGQgEgIgDgKIgHgpIgBgKQAAgFADgDQADgCAFAAQAIgBACAJIACALIABALIADARIANglQADgKAIAAQAIAAADAMIAEAUIAEAUIAMguQACgGAIAAQAEAAAEACQADADAAAFIAAACIgRA2QgCAHgFAIQgEAEgGAAQgKAAgGgTg");
	this.shape_33.setTransform(254.5,205.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgjA4QgEgDAAgEQAAgFAEgDQADgDAFAAIAPgBIgBgkQAAgTACgTIgQAAQgGAAgCgDQgEgDAAgEQAAgFAEgDQACgCAEgBIAXAAQANAAAXADQAKABAAAKQAAAFgEACQgCADgFAAIgUgCIgBAkIAAAjIAVAAQAEAAAEADQADADAAAEQAAAFgEADQgCADgFAAIgNAAIgOAAIgOACIgPABQgGAAgCgDg");
	this.shape_34.setTransform(237.5,203.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKAQQgDgDAAgEQAAgBAFgIIAGgNQACgEAEgBQAFABADACQACACAAAEIgFAKIgGAMQgDAGgDgBQgFABgCgDg");
	this.shape_35.setTransform(222.5,210.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeAoQgCgCAAgFIAAgxIAAgHIABgHQgBgFADgDQADgDAFAAQAIAAABAJQAMgKASAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgPADgJAPIABAlQAAAFgDADQgDACgFAAQgFAAgDgDg");
	this.shape_36.setTransform(215.6,205.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZAhQgNgKAAgRQgBgTALgNQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAGIgSAHIgYAMQAEAEAFACQAGACAEAAQALAAAHgEQAGgEAFAAQAHAAAAAIQAAAJgNAFQgLAFgMAAQgRAAgLgJgAgJgRQgFAEgDAKIARgHQAJgFAGgEQgGgDgIAAQgFAAgFAFg");
	this.shape_37.setTransform(207,205.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKAiIgag9IgBgEQAAgEADgDQAEgDAEAAQAHAAADAGIAQAqIALgZIAGgRQAEgGAGAAQAEAAAEADQADADAAAEQAAADgMAcIgRAhQAAAEgDADQgDACgDAAQgHAAgDgIg");
	this.shape_38.setTransform(198.9,205.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_39.setTransform(190.6,205.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUApQgMgFgBgJQAAgHAKAAIAKACQAHADAEgBQANAAAAgGQAAgEgLgFIgSgJQgLgHAAgLQAAgPAQgGQAKgEATAAQAHABAEACQAFADAAAHQAAAOgHAAQgJAAgBgGIgGgBQgRAAAAAFQAAADAJAFIAVAKQAMAHAAALQAAANgNAHQgKAGgMgBQgLAAgIgCg");
	this.shape_40.setTransform(175.5,205.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIA4QgDgDAAgEIgBgPIAAgOIABgRIABgQQAAgEACgDQADgDAFAAQADAAADADQADADAAAEIgBAQIAAARIAAAOIAAAPQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgnQgEgDABgFQgBgFAEgDQAEgDADAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_41.setTransform(169.7,203.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgWA8QgDgDAAgFQAAgGAQglIgbgvIgEgHQgCgDAAgDQAAgEAEgDQADgEAEAAQAFABADADQALAPANAeIAKgXQAGgMAFgIQAEgFAFgBQAFABADACQAEADAAAEIgCAGIgbA1QgKAUgEAOIgEAOQgDAIgHgBQgEABgEgDg");
	this.shape_42.setTransform(155.8,207.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AASAjIgMAFQgGACgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBAIIgBALQAAAMACAHIAEAIIADAIQAAAEgDADQgDACgEAAQgEABgIgIgAgKgOQgIAIAAAJQAAAKAEAGQAEAEAHAAQADABAEgCQAFgBAEgEQgDgRAAgJIABgFIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_43.setTransform(147,205.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAVA7QgGADgFAAIgKABQgRABgMgLQgMgMAAgRQAAgWAMgKQAMgOARAAIAKACQAGABACACQACgaABgKQABgKAJABQAFAAACACQAEADAAAFIgCAiIgCAgQAAAcACAKIAAACQAAAEgDADQgEADgEgBQgFAAgDgEgAgPADQgGAGABAOQAAAJAFAFQAHAHAIAAQAEgBAEgBIAHgFIACgCIAAgdQgCgFgFgBQgEgBgGAAQgJgBgGAFg");
	this.shape_44.setTransform(137.7,203.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZAhQgOgKAAgRQAAgTALgNQAMgPARAAQAOAAAJAEQAMAGAAAMQAAAJgKAGIgRAHIgZAMQAEAEAFACQAGACAEAAQALAAAHgEQAHgEADAAQAJAAAAAIQAAAJgNAFQgLAFgNAAQgQAAgMgJgAgJgRQgGAEgDAKIASgHQAIgFAHgEQgGgDgIAAQgFAAgFAFg");
	this.shape_45.setTransform(121.6,205.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AASA5IgEgSIgBgSIAAgHIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDAEgGALQAAAcgDAGQgDAHgHgBQgEAAgEgDQgDgDAAgEIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgHQAAgEADgDQADgDAFAAQAIABACAHQACAGAAAJIgBAQIAAAPQAGgFAGgEQAFgCAHAAQANAAAGAIQAFAFABAKIAAATIACAPIADAPIAAAEQAAADgDADQgEAEgEAAQgIgBgCgHg");
	this.shape_46.setTransform(112.7,203.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgIIABgJIgCgnIgOgBQgLgBABgJQAAgFACgDQADgCAFAAIANAAIAAgIIgBgIQAAgEAEgDQADgDAFAAQAJAAAAAUIAAAGIAIAAIAMAAQAGADABAHQAAAFgEADQgDACgEAAIgEAAIgEAAIgHABIABAoIAAADIAAAFQAAARgLABQgDgBgCgCg");
	this.shape_47.setTransform(104.2,204.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0F0F0F").s().p("AgZAhQgNgKAAgRQAAgTAKgNQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAGIgSAHIgYAMQAEAEAFACQAFACAGAAQAKAAAHgEQAGgEAFAAQAHAAABAIQAAAJgOAFQgKAFgMAAQgSAAgLgJgAgJgRQgGAEgDAKIASgHQAIgFAHgEQgFgDgJAAQgFAAgFAFg");
	this.shape_48.setTransform(88.9,205.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0F0F0F").s().p("AgeAoQgCgCAAgFIAAgxIAAgHIAAgHQABgFACgDQADgDAEAAQAJAAABAJQANgKARAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgQADgIAPIABAlQAAAFgEADQgCACgFAAQgFAAgDgDg");
	this.shape_49.setTransform(80.8,205.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0F0F0F").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_50.setTransform(72.5,205.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0F0F0F").s().p("AgNBBQgEgCAAgFIAAgCQACgLABgKIAAglIgGABIgEAAQgFAAgDgCQgDgDgBgFQABgHAHgCIAOgCIABgJQACgRAIgJQAGgKAUAAQANAAAAAKQAAAKgNAAQgJAAgFAHQgDAFgBAKIAAADIAPgBQAOAAAAAKQAAAKgPgBIgPABIAAATIABAVQAAAPgCAIQgCAIgGAAQgFAAgDgDg");
	this.shape_51.setTransform(64.2,203.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0F0F0F").s().p("AgZAhQgNgKAAgRQAAgTAKgNQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAGIgSAHIgYAMQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEAEAAQAHAAABAIQgBAJgNAFQgKAFgMAAQgSAAgLgJgAgJgRQgGAEgDAKIASgHQAIgFAHgEQgFgDgJAAQgFAAgFAFg");
	this.shape_52.setTransform(55.7,205.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0F0F0F").s().p("AglA7QgEgEAAgFIAAhRIgBgKIABgKQABgIAMgBQAGgCAOAAQANAAANAKQARALgBAQQAAAJgDAGQgCAFgHAFQAIADAFAHQAIAJgBAIQAAAKgLAJQgHAHgJADQgQAHgcAAQgFAAgDgEgAgUApQANgBAOgEQAOgEAAgEQAAgHgJgEQgGgEgGgBIgUAAgAgTgYIgBAQIALABQAWgCAAgQQAAgFgHgFQgGgGgIAAIgMAAg");
	this.shape_53.setTransform(46.6,203.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0F0F0F").s().p("AgHAHQgEgDAAgEQAAgCAEgEQADgDAEAAQAFAAAEADQADADAAADQAAAEgDADQgEADgFAAQgEAAgDgDg");
	this.shape_54.setTransform(331.2,231);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0F0F0F").s().p("AgeAoQgCgCAAgFIAAgxIAAgHIABgHQgBgFADgDQADgDAFAAQAIAAABAJQAMgKASAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgPADgJAPIABAlQAAAFgDADQgDACgFAAQgFAAgDgDg");
	this.shape_55.setTransform(324.1,227.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0F0F0F").s().p("AgZAhQgNgJAAgSQgBgTALgNQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAHIgRAHIgZALQAEAEAFACQAGACAEAAQALAAAHgEQAGgEAFAAQAHAAAAAIQAAAJgNAFQgLAFgMAAQgRAAgLgJgAgJgSQgFAFgDAKIARgHQAJgFAGgEQgGgDgIAAQgFAAgFAEg");
	this.shape_56.setTransform(315.5,227.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0F0F0F").s().p("AgKAiIgag9IgBgEQAAgEADgDQAEgDAEAAQAHAAADAGIAQAqIALgZIAGgRQAEgGAGAAQAEAAAEADQADADAAAEQAAADgMAcIgRAhQAAAEgDADQgDACgDAAQgHAAgDgIg");
	this.shape_57.setTransform(307.3,227.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0F0F0F").s().p("AgUAoQgMgEgBgIQAAgIAKAAIAKACQAHACAEAAQANABAAgHQAAgEgLgFIgSgJQgLgHAAgLQAAgPAQgGQAKgEATABQAHAAAEACQAFACAAAIQAAAOgHAAQgJAAgBgGIgGgBQgRAAAAAFQAAADAJAFIAVAKQAMAIAAAKQAAANgNAHQgKAGgMgBQgLAAgIgDg");
	this.shape_58.setTransform(284,227.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0F0F0F").s().p("AgIA4QgDgDAAgEIgBgPIAAgOIABgRIABgQQAAgEACgDQADgDAFAAQADAAADADQADADAAAEIgBAQIAAARIAAAOIAAAPQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgnQgEgDABgFQgBgFAEgDQAEgDADAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_59.setTransform(278.1,225.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0F0F0F").s().p("AASA6QgEgIgIgJIgLgQIgKAHIgBAVQAAAEgDADQgDADgEAAQgLAAAAgNIABgTIAAgSIABgYIAAgaIAAgHIgBgIQAAgFADgDQADgCAFAAQAFAAADACQADADAAAFIAAAIIABAIIgBAWIAAATQALgFATgWQAEgEAEABQAEAAAEACQADAEAAAEQAAAEgDADQgJAIgNALIAQAVQAMAQAAAGQAAADgDADQgEAEgEAAQgGgBgDgFg");
	this.shape_60.setTransform(264.7,225.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0F0F0F").s().p("AgZAhQgNgJAAgSQAAgTAKgNQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAHIgSAHIgYALQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEAEAAQAHAAABAIQgBAJgNAFQgKAFgMAAQgSAAgLgJgAgJgSQgGAFgDAKIASgHQAIgFAHgEQgFgDgJAAQgFAAgFAEg");
	this.shape_61.setTransform(255.5,227.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0F0F0F").s().p("AgZAhQgOgJAAgSQAAgTALgNQALgPASAAQAOAAAJAEQAMAGAAAMQAAAJgKAHIgRAHIgZALQAEAEAFACQAGACAEAAQALAAAHgEQAGgEAEAAQAIAAAAAIQAAAJgMAFQgMAFgMAAQgQAAgMgJgAgJgSQgFAFgDAKIARgHQAJgFAGgEQgGgDgIAAQgFAAgFAEg");
	this.shape_62.setTransform(246.5,227.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0F0F0F").s().p("AACAZQgCgIgBgRIgCACIgMAeIgDAGQgEAEgGABQgEAAgEgGQgEgIgDgKIgHgpIgBgLQAAgEADgDQADgCAFAAQAIAAACAIIACALIABAKIADASIANglQADgKAIAAQAIAAADALIAEAVIAEAUIAMgtQACgHAIAAQAEAAAEACQADADAAAFIAAACIgRA2QgCAHgFAHQgEAFgGABQgKgBgGgSg");
	this.shape_63.setTransform(236.8,227.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0F0F0F").s().p("AgZAhQgOgJAAgSQAAgTALgNQAMgPARAAQAOAAAJAEQAMAGAAAMQAAAJgKAHIgRAHIgZALQAEAEAFACQAGACAFAAQAKAAAHgEQAHgEADAAQAJAAgBAIQABAJgNAFQgLAFgMAAQgRAAgMgJgAgJgSQgGAFgDAKIASgHQAIgFAHgEQgGgDgIAAQgFAAgFAEg");
	this.shape_64.setTransform(219.7,227.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0F0F0F").s().p("AASA4IgEgSIgBgSIAAgGIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDADgGAMQAAAcgDAGQgDAHgHAAQgEAAgEgEQgDgDAAgEIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgGQAAgFADgDQADgCAFAAQAIAAACAHQACAGAAAJIgBAQIAAAPQAGgFAGgDQAFgDAHAAQANAAAGAHQAFAGABAJIAAAUIACAPIADAQIAAADQAAADgDAEQgEADgEAAQgIAAgCgJg");
	this.shape_65.setTransform(210.8,225.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0F0F0F").s().p("AgGA2QgDgDAAgEIAAgJIABgIIgCgmIgOgCQgLgBABgJQAAgFACgDQADgDAFAAIANABIAAgIIgBgIQAAgEAEgCQADgEAFAAQAJABAAATIAAAGIAIgBIAMABQAGADABAHQAAAEgEADQgDADgEAAIgEAAIgEAAIgHABIABAnIAAAEIAAAEQAAASgLAAQgDAAgDgCg");
	this.shape_66.setTransform(202.3,226.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0F0F0F").s().p("AgZAhQgNgJAAgSQAAgTAKgNQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAHIgSAHIgYALQAEAEAFACQAFACAGAAQAKAAAHgEQAGgEAFAAQAHAAABAIQAAAJgOAFQgLAFgLAAQgSAAgLgJgAgJgSQgGAFgDAKIASgHQAIgFAHgEQgFgDgJAAQgFAAgFAEg");
	this.shape_67.setTransform(187,227.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0F0F0F").s().p("AgeAoQgCgCAAgFIAAgxIAAgHIAAgHQABgFACgDQADgDAEAAQAJAAABAJQANgKARAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgQADgIAPIABAlQAAAFgDADQgDACgFAAQgFAAgDgDg");
	this.shape_68.setTransform(178.9,227.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0F0F0F").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_69.setTransform(170.6,227.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0F0F0F").s().p("AgZAhQgNgJAAgSQAAgTAKgNQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAHIgSAHIgYALQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEAEAAQAHAAABAIQgBAJgNAFQgKAFgMAAQgSAAgLgJgAgJgSQgGAFgDAKIASgHQAIgFAHgEQgFgDgJAAQgFAAgFAEg");
	this.shape_70.setTransform(153.8,227.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0F0F0F").s().p("AgWA7QgDADgEAAQgEAAgDgDQgDgDAAgEIAAgGIAAgGIAAhWQAAgGADgEQADgGAGAAQAIAAAAAJIAAAEIgBADIAAAeQAGgEAGgBIAIgCQASAAALAOQALAKAAASQAAASgMANQgNANgQAAQgLAAgKgEgAgIAAQgFAAgHAFIAAAhQALAEAIAAQAIAAAGgGQAHgHAAgKQAAgKgGgHQgFgFgJAAQgCAAgGADg");
	this.shape_71.setTransform(144.7,225.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgUAoQgNgEAAgIQAAgIAKAAIALACQAGACAEAAQAOABAAgHQAAgEgMgFIgSgJQgLgHAAgLQAAgPARgGQAJgEASABQAIAAAEACQAFACAAAIQAAAOgHAAQgIAAgCgGIgGgBQgRAAAAAFQAAADAJAFIAVAKQAMAIgBAKQAAANgMAHQgKAGgMgBQgLAAgIgDg");
	this.shape_72.setTransform(439.9,203);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgNQALgPASAAQAOAAAJAEQAMAGAAAMQAAAJgKAHIgRAHIgZALQAEAEAFACQAGACAEAAQALAAAHgEQAGgEAEAAQAIAAAAAIQAAAJgMAFQgMAFgMAAQgQAAgMgJgAgJgSQgFAFgDAKIARgHQAJgFAGgEQgFgDgJAAQgFAAgFAEg");
	this.shape_73.setTransform(431.5,203.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgFAtQgDgDAAgEIgCgbIgCgYIgBgIQgJAFgJAMIgCACIAAAWIAAAHIAAAFQAAAEgEADQgDACgEAAQgHAAgCgFQgCgFAAgIIAAgbIAAgLIgBgMQAAgHADgGQADgGAFgBQAFAAADAEQAEADAAAEIgBAHQAMgOAKAAQAMAAAEAKQAFgFAGgCQAFgCAHAAQAPAAAGAPIADAWIAGAoQAAAEgDADQgEADgEAAQgJAAgCgJIgDgXIgCgUQgCgOgEgBIgIAEIgJAGIACAYQACARAAAJQAAAEgDADQgDACgFAAQgCAAgDgCg");
	this.shape_74.setTransform(421,203.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgJIAAgIIgBgmIgOgCQgKgBAAgJQAAgFADgDQADgDAEAAIANABIAAgIIgBgIQABgEADgCQADgEAEAAQAKABAAATIAAAGIAIgBIAMABQAHADAAAHQgBAEgDADQgCADgGAAIgDAAIgEAAIgHABIABAnIAAAEIAAAEQAAASgLAAQgDAAgCgCg");
	this.shape_75.setTransform(406.4,201.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AggAvQgJgMAAgUQAAgkAhgcIAIgIQADgFAEAAQAFAAADADQADADAAAEQAAAEgJAIIgLANQgHAGgDAHIAIgDIAFAAQATAAALAKQALAIAAASQAAAUgMAMQgMAMgSAAQgWAAgKgQgAgKAEIgJAFIAAAGQAAAOAFAIQAFAHAJAAQAJAAAGgHQAFgGAAgMQAAgIgFgEQgGgFgJAAQgFAAgFACg");
	this.shape_76.setTransform(390.8,201.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAVA7QgFACgGABIgKABQgSAAgLgLQgMgLABgRQgBgWAMgLQAMgMARAAIAKABQAGABACACQABgaACgLQACgJAIAAQAFAAADADQADADAAAFIgCAiIgCAgQAAAcACAJIAAACQAAAFgDADQgDACgEAAQgGAAgDgEgAgPADQgGAHABANQAAAJAFAFQAHAHAIgBQAEABADgCIAIgFIACgDIAAgcQgDgFgEgBQgEgCgGABQgJAAgGAEg");
	this.shape_77.setTransform(374.2,200.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgdAoQgDgCAAgFIAAgxIAAgHIAAgHQAAgFADgDQACgDAFAAQAJAAACAJQAMgKAQAAQAQAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgPADgIAPIAAAlQAAAFgEADQgDACgEAAQgFAAgCgDg");
	this.shape_78.setTransform(365.9,203.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAkIgMAEQgGACgCAAQgTABgJgLQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDACQgDADgEAAQgEAAgIgGgAgKgOQgIAIAAAIQAAALAEAGQAEAEAHAAQADAAAEgBQAFgBAEgDQgDgSAAgIIABgGIABgIIgDgBIgCAAQgJAAgIAJg");
	this.shape_79.setTransform(357.5,203.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgWA7QgDADgEAAQgEAAgDgDQgDgDAAgEIAAgGIAAgGIAAhWQAAgGADgEQADgGAGAAQAIAAAAAJIAAAEIgBADIAAAeQAGgEAGgBIAIgCQASAAALAOQALAKAAASQAAASgMANQgNANgQAAQgLAAgKgEgAgIAAQgFAAgHAFIAAAhQALAEAIAAQAIAAAGgGQAHgHAAgKQAAgKgGgHQgFgFgJAAQgCAAgGADg");
	this.shape_80.setTransform(339.8,201);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgUAoQgNgEAAgIQAAgIAKAAIALACQAGACAEAAQANABAAgHQAAgEgLgFIgSgJQgLgHAAgLQAAgPARgGQAJgEATABQAHAAAEACQAFACAAAIQAAAOgHAAQgJAAgBgGIgGgBQgRAAAAAFQAAADAJAFIAVAKQAMAIAAAKQAAANgNAHQgKAGgMgBQgLAAgIgDg");
	this.shape_81.setTransform(324.1,203);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AASA4IgEgSIgBgSIAAgGIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDADgGAMQAAAcgDAGQgDAHgHAAQgEAAgEgEQgDgDAAgEIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgGQAAgFADgDQADgCAFAAQAIAAACAHQACAGAAAJIgBAQIAAAPQAGgFAGgDQAFgDAHAAQANAAAGAHQAFAGABAJIAAAUIACAPIADAQIAAADQAAADgDAEQgEACgEAAQgIABgCgJg");
	this.shape_82.setTransform(311.3,201);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgJIAAgIIgBgmIgOgCQgLgBAAgJQABgFADgDQADgDAEAAIANABIAAgIIAAgIQAAgEADgCQADgEAEAAQAKABAAATIAAAGIAIgBIAMABQAHADgBAHQAAAEgDADQgCADgGAAIgDAAIgEAAIgHABIABAnIAAAEIAAAEQAAASgLAAQgDAAgCgCg");
	this.shape_83.setTransform(302.8,201.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAPAkIgCgRIgBgQIABgEIAAgHIAAgDIAAgEQAAgHgDAAQgHAAgFAJQgGAJgEALIAAAHIAAAHIgBAGIAAAIQAAAEgEADQgDADgEAAQgFAAgDgDQgDgDAAgEIgBgHIAAgHIABgVIABgTIAAgHIgBgIQABgEADgDQADgDAFAAQAJAAACAMIAAABQALgLALAAQAOAAAGAMQAEAJgBAQIAAAFIAAADIACAQIACAQQAAAFgDACQgEADgEAAQgKAAgBgJg");
	this.shape_84.setTransform(288,203);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_85.setTransform(279.4,203.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAPAkIgCgRIgBgQIABgEIAAgHIAAgDIAAgEQAAgHgDAAQgHAAgFAJQgGAJgEALIAAAHIgBAHIAAAGIAAAIQAAAEgDADQgEADgEAAQgFAAgDgDQgDgDAAgEIgBgHIAAgHIABgVIABgTIAAgHIAAgIQAAgEADgDQADgDAFAAQAKAAAAAMIAAABQAMgLALAAQAOAAAGAMQAEAJgBAQIAAAFIAAADQAAAGADAKIABAQQAAAFgDACQgEADgEAAQgKAAgBgJg");
	this.shape_86.setTransform(264.2,203);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgnAxQAAgEADgDQADgCAEAAIAKABIAMABQAJABAGgIQAFgGABgPQgEAEgFACQgFACgEAAQgPAAgKgKQgKgLAAgNQAAgWANgNQAOgNAVAAQAHAAAFACQAGABADAEQAKABAAALIgCAOQgDASgBATQgBAZgHAMQgKAOgYAAQgfAAAAgMgAgLgiQgGAIAAANQAAAJADAEQAEADAHAAQAEAAAHgFQAGgIABgGIADgXIgFgDIgFAAQgLgBgIAJg");
	this.shape_87.setTransform(255.6,205.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgJA4QgDgDAAgEIAAgPIAAgOIAAgRIABgQQAAgEAEgDQADgDAEAAQADAAADADQADADAAAEIgBAQIgBARIAAAOIABAPQAAAEgDADQgDADgDAAQgFAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQAEgDADAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgDAAgEgEg");
	this.shape_88.setTransform(249.4,201.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgVAoQgLgEgBgIQAAgIAKAAIAKACQAHACADAAQAPABgBgHQABgEgMgFIgSgJQgLgHAAgLQAAgPAQgGQAKgEATABQAHAAAEACQAFACAAAIQAAAOgHAAQgJAAgBgGIgGgBQgRAAAAAFQAAADAJAFIAVAKQAMAIAAAKQAAANgNAHQgKAGgMgBQgLAAgJgDg");
	this.shape_89.setTransform(242.9,203);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgNQAMgPARAAQAOAAAJAEQAMAGAAAMQAAAJgKAHIgRAHIgZALQAEAEAFACQAGACAEAAQALAAAHgEQAHgEADAAQAJAAAAAIQAAAJgNAFQgLAFgNAAQgQAAgMgJgAgJgSQgGAFgDAKIASgHQAIgFAHgEQgGgDgIAAQgFAAgFAEg");
	this.shape_90.setTransform(234.5,203.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAVA7QgGACgFABIgKABQgRAAgMgLQgMgLAAgRQAAgWAMgLQAMgMARAAIAKABQAFABADACQACgaABgLQABgJAJAAQAFAAACADQADADABAFIgCAiIgCAgQAAAcACAJIAAACQAAAFgDADQgDACgFAAQgFAAgDgEgAgPADQgGAHAAANQABAJAFAFQAHAHAIgBQAEABAEgCIAHgFIACgDIAAgcQgDgFgEgBQgEgCgGABQgJAAgGAEg");
	this.shape_91.setTransform(225.4,200.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgNQAMgPARAAQAOAAAJAEQAMAGgBAMQABAJgKAHIgSAHIgYALQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEADAAQAJAAAAAIQgBAJgNAFQgKAFgMAAQgSAAgLgJgAgJgSQgFAFgEAKIASgHQAJgFAGgEQgGgDgIAAQgFAAgFAEg");
	this.shape_92.setTransform(209.2,203.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AASA4IgEgSIgBgSIAAgGIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDADgGAMQAAAcgDAGQgDAHgHAAQgEAAgEgEQgDgDAAgEIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgGQAAgFADgDQADgCAFAAQAIAAACAHQACAGAAAJIgBAQIAAAPQAGgFAGgDQAFgDAHAAQANAAAGAHQAFAGABAJIAAAUIACAPIADAQIAAADQAAADgDAEQgEACgEAAQgIABgCgJg");
	this.shape_93.setTransform(200.4,201);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgJIABgIIgCgmIgOgCQgKgBAAgJQAAgFADgDQACgDAFAAIANABIAAgIIgBgIQABgEADgCQADgEAEAAQAKABAAATIAAAGIAIgBIAMABQAHADAAAHQAAAEgEADQgCADgGAAIgDAAIgEAAIgHABIABAnIAAAEIAAAEQAAASgLAAQgDAAgCgCg");
	this.shape_94.setTransform(191.9,201.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AAVA7QgGACgFABIgKABQgRAAgMgLQgMgLAAgRQAAgWAMgLQAMgMARAAIAKABQAFABADACQACgaABgLQABgJAJAAQAFAAACADQADADABAFIgCAiIgCAgQAAAcACAJIAAACQAAAFgDADQgDACgFAAQgFAAgDgEgAgPADQgGAHAAANQABAJAFAFQAHAHAIgBQAEABAEgCIAHgFIACgDIAAgcQgDgFgEgBQgEgCgGABQgJAAgGAEg");
	this.shape_95.setTransform(176.3,200.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AgZAhQgOgJAAgSQAAgTALgNQAMgPARAAQAOAAAJAEQAMAGAAAMQAAAJgKAHIgRAHIgZALQAEAEAFACQAGACAEAAQALAAAHgEQAGgEAEAAQAJAAgBAIQABAJgNAFQgLAFgNAAQgQAAgMgJgAgJgSQgFAFgDAKIARgHQAIgFAHgEQgGgDgIAAQgFAAgFAEg");
	this.shape_96.setTransform(167.1,203.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AgnAxQAAgEADgDQADgCAEAAIAKABIAMABQAJABAGgIQAFgGABgPQgEAEgFACQgFACgEAAQgPAAgKgKQgKgLAAgNQAAgWANgNQAOgNAVAAQAHAAAFACQAGABADAEQAKABAAALIgCAOQgDASgBATQgBAZgHAMQgKAOgYAAQgfAAAAgMgAgLgiQgGAIAAANQAAAJADAEQAEADAHAAQAEAAAHgFQAGgIABgGIADgXIgFgDIgFAAQgLgBgIAJg");
	this.shape_97.setTransform(158.4,205.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AAPAkIgCgRIgBgQIABgEIAAgHIAAgDIAAgEQAAgHgEAAQgGAAgFAJQgGAJgDALIgBAHIAAAHIgBAGIAAAIQAAAEgEADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgHIAAgHIABgVIABgTIAAgHIgBgIQAAgEAEgDQADgDAFAAQAJAAACAMIAAABQALgLAKAAQAPAAAGAMQADAJAAAQIAAAFIAAADIACAQIACAQQAAAFgDACQgEADgEAAQgKAAgBgJg");
	this.shape_98.setTransform(150.2,203);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AASAkIgMAEQgGACgCAAQgTABgJgLQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDACQgDADgEAAQgEAAgIgGgAgKgOQgIAIAAAIQAAALAEAGQAEAEAHAAQADAAAEgBQAFgBAEgDQgDgSAAgIIABgGIABgIIgDgBIgCAAQgJAAgIAJg");
	this.shape_99.setTransform(141.5,203.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AASA4IgEgSIgBgSIAAgGIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDADgGAMQAAAcgDAGQgDAHgHAAQgEAAgEgEQgDgDAAgEIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgGQAAgFADgDQADgCAFAAQAIAAACAHQACAGAAAJIgBAQIAAAPQAGgFAGgDQAFgDAHAAQANAAAGAHQAFAGABAJIAAAUIACAPIADAQIAAADQAAADgDAEQgEACgEAAQgIABgCgJg");
	this.shape_100.setTransform(132.5,201);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgXAiQgMgLAAgQQAAgOALgRQAMgSAPgBQAIABALAEQANAFAAAHQAAAEgDADQgDAEgEgBQgDAAgFgDQgFgEgJAAQgEAAgHAMQgHALAAAHQAAAHAGAFQAFAFAIAAQAFAAAHgEIAKgEQAEAAADADQADADAAAEQAAAGgNAGQgMAFgHAAQgQABgLgKg");
	this.shape_101.setTransform(123.5,203.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AgZAhQgNgJgBgSQABgTAKgNQAMgPARAAQAOAAAJAEQAMAGgBAMQABAJgKAHIgSAHIgYALQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEAEAAQAIAAAAAIQgBAJgNAFQgKAFgMAAQgSAAgLgJgAgJgSQgFAFgEAKIASgHQAJgFAGgEQgGgDgIAAQgFAAgFAEg");
	this.shape_102.setTransform(108,203.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AASAkIgMAEQgGACgCAAQgTABgJgLQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDACQgDADgEAAQgEAAgIgGgAgKgOQgIAIAAAIQAAALAEAGQAEAEAHAAQADAAAEgBQAFgBAEgDQgDgSAAgIIABgGIABgIIgDgBIgCAAQgJAAgIAJg");
	this.shape_103.setTransform(91.4,203.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AASA4IgEgSIgBgSIAAgGIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDADgGAMQAAAcgDAGQgDAHgHAAQgEAAgEgEQgDgDAAgEIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgGQAAgFADgDQADgCAFAAQAIAAACAHQACAGAAAJIgBAQIAAAPQAGgFAGgDQAFgDAHAAQANAAAGAHQAFAGABAJIAAAUIACAPIADAQIAAADQAAADgDAEQgEACgEAAQgIABgCgJg");
	this.shape_104.setTransform(82.4,201);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgEIgBgPIAAgOIABgRIABgQQAAgEADgDQACgDAFAAQADAAADADQADADAAAEIgBAQIAAARIAAAOIAAAPQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgnQgEgDABgFQgBgFAEgDQAEgDADAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_105.setTransform(59.9,201.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AACAZQgCgIgBgRIgCACIgMAeIgDAGQgEAEgGABQgEAAgEgGQgEgIgDgKIgHgpIgBgKQAAgFADgDQADgCAFAAQAIAAACAIIACALIABAKIADASIANglQADgKAIAAQAIAAADALIAEAVIAEAUIAMgtQACgHAIAAQAEAAAEACQADADAAAFIAAACIgRA2QgCAHgFAHQgEAFgGABQgKgBgGgSg");
	this.shape_106.setTransform(52,203.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgkA4QgDgDAAgEQAAgFADgDQAEgDAFAAIAPgBIAAgkQgBgTACgTIgRAAQgEAAgEgDQgDgDAAgEQAAgFADgDQADgCAEgBIAYAAQAMAAAYADQAJABAAAKQAAAFgDACQgEADgDAAIgVgCIgBAkIAAAjIAVAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAIgOAAIgNAAIgOACIgQABQgEAAgEgDg");
	this.shape_107.setTransform(35.1,201.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:64.2,y:203.8}},{t:this.shape_50,p:{x:72.5,y:205.6}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:190.6,y:205.6}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:266.5,y:203.4}},{t:this.shape_30,p:{x:270.9,y:203.4}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:302.3,y:205.5}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:423.2,y:203.7}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:206.1,y:228}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_31,p:{x:64,y:200.9}},{t:this.shape_30,p:{x:68.4,y:200.9}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_27,p:{x:99.8,y:203}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_14,p:{x:318.3,y:201.2}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_39,p:{x:348.7,y:203.1}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_9,p:{x:412.6,y:201.2}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_51,p:{x:162.3,y:225.6}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_50,p:{x:299,y:227.4}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},59).wait(61));

	// Layer 4
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(102,204,153,0.6)").s().p("EgifAEXIAAotMBE/AAAIAAItg");
	this.shape_108.setTransform(240.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(120));

	// rule
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000099").s().p("AgFAFQgDgDAAgCQAAgCADgCQADgCACgBQAEABACACQADACAAACQAAADgDACQgCACgEABQgCgBgDgCg");
	this.shape_109.setTransform(342.9,42.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000099").s().p("AALAaIgBgLIgBgNIAAgDIAAgFIAAgCIAAgDQAAgFgCAAQgFAAgDAHQgEAGgDAIIgBAFIAAAGIAAAEIgBAGQAAADgCADQgCACgEAAQgDAAgDgCQgCgDAAgDIAAgFIgBgFIABgQIABgOIAAgFIgBgGQAAgDADgDQACgCAEAAQAHABABAIIAAABQAIgIAIgBQALAAAEAKQADAGAAAMIAAAEIAAACIABANIACALQAAADgDADQgCACgEAAQgHAAgBgIg");
	this.shape_110.setTransform(337.3,39.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000099").s().p("AgSAYQgIgIgBgNQAAgLAHgLQAJgMAOAAQAMAAAHAKQAGAIAAANQAAALgHAKQgIALgNAAQgKAAgIgIgAgHgIQgDAFAAAGQAAAHADADQAEADADAAQAEAAAEgDQAEgEAAgHQABgRgLAAQgFAAgEAHg");
	this.shape_111.setTransform(330.9,39.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000099").s().p("AgGAqQgCgCAAgDIAAgMIgBgKIABgNIABgLQAAgDACgCQACgDADAAQACAAACADQADACAAADIgBALIAAANIAAAKIAAAMQAAADgCACQgDADgBAAQgEAAgCgDgAgEgdQgDgCAAgDQAAgEADgDQADgCACAAQADAAADACQADADAAAEQAAADgDACQgDADgDAAQgCAAgDgDg");
	this.shape_112.setTransform(326.3,38.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000099").s().p("AgEApQgCgDAAgDIAAgHIAAgFIgBgdIgLgBQgHgBAAgHQAAgDABgCQADgDAEAAIAKABIgBgGIAAgGQAAgDACgCQACgCAEgBQAHAAAAAPIAAAFIAFgBQAIAAABABQAGACAAAFQgBAEgCACQgCADgEgBIgCAAIgEAAIgFAAIABAeIAAADIAAADQAAAOgIAAQgBAAgDgCg");
	this.shape_113.setTransform(321.7,38.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000099").s().p("AgRAZQgJgHAAgNQAAgJAIgNQAJgOALAAQAGAAAIADQAKAEAAAFQAAADgCADQgCACgDAAQgDAAgDgDQgEgCgHAAQgDgBgFAJQgFAIAAAFQAAAGAFADQAEAEAFAAQAEAAAFgDIAHgDQAEAAACACQACADAAADQAAAEgKAFQgJADgFAAQgLABgJgIg");
	this.shape_114.setTransform(315.6,39.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000099").s().p("AANAaIgJAFIgFABQgOAAgHgIQgHgHAAgQQAAgMAKgJQALgKAMAAQAGAAAHADQAJADAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgCAGIAAAIQAAAJACAFIADAGIACAGQAAACgCACQgDADgDAAQgCgBgHgFgAgHgKQgGAGAAAGQAAAIADAEQACAEAGAAQACAAADgCQAEgBADgCIgCgTIAAgEIABgGIgCgBIgCAAQgGAAgGAHg");
	this.shape_115.setTransform(309.4,39.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000099").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_116.setTransform(297.4,39.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000099").s().p("AgWAeQgCgCAAgDIAAgkIAAgGIAAgGQAAgDADgCQACgCADAAQAGAAACAGQAIgHANgBQALAAABAQIAAAFQgBAIgIAAQgHAAAAgHIAAgHQgMADgFALIAAAcQAAADgCADQgCACgEAAQgEgBgCgCg");
	this.shape_117.setTransform(291.4,39.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000099").s().p("AALAdQgHACgGAAQgJAAgFgDQgHgEgBgIQgCgOAAgKQAAgIACgJQABgHAHAAQADAAACACQADACAAAEIgBAIIgBAIIABAMIABAKIADABIADABQAEAAAIgCIAAgKIAAgIIABgVQABgHAHAAQADAAADACQACACAAAEIgBAUIAAAKIAAAMIAAAEIABADQAAAEgDACQgCACgEAAQgEAAgDgEg");
	this.shape_118.setTransform(285.2,39.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000099").s().p("AgEApQgCgDgBgDIAAgHIABgFIgBgdIgLgBQgHgBAAgHQAAgDABgCQADgDAEAAIAKABIgBgGIAAgGQAAgDACgCQACgCAEgBQAHAAAAAPIAAAFIAFgBQAIAAABABQAGACAAAFQgBAEgCACQgCADgEgBIgCAAIgEAAIgFAAIABAeIAAADIAAADQAAAOgIAAQgBAAgDgCg");
	this.shape_119.setTransform(279.4,38.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000099").s().p("AALAdQgHACgGAAQgJAAgFgDQgHgEgBgIQgCgOAAgKQAAgIACgJQABgHAHAAQADAAACACQADACAAAEIgBAIIgBAIIABAMIABAKIADABIADABQAEAAAIgCIAAgKIAAgIIABgVQABgHAHAAQADAAADACQACACAAAEIgBAUIAAAKIAAAMIAAAEIABADQAAAEgDACQgCACgEAAQgEAAgDgEg");
	this.shape_120.setTransform(273.4,39.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000099").s().p("AgKAxQgCgDAAgCIAAgCIABgQIAAgbIgEAAIgDAAQgEAAgCgCQgCgCAAgDQAAgGAGgBIAKgBIABgHQABgNAGgGQAEgIAPAAQAKAAAAAIQAAAHgKAAQgHAAgDAFQgCAEgBAHIAAADIALgBQALgBAAAIQAAAIgMgBIgLABIAAAOIAAAQQAAAKgBAHQgCAGgEAAQgDAAgDgCg");
	this.shape_121.setTransform(267.2,38.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000099").s().p("AgWAeQgCgCAAgDIAAgkIAAgGIAAgGQABgDACgCQACgCADAAQAHAAABAGQAIgHANgBQALAAABAQIAAAFQgBAIgIAAQgHAAAAgHIAAgHQgMADgFALIAAAcQAAADgCADQgCACgEAAQgEgBgCgCg");
	this.shape_122.setTransform(256.3,39.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000099").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_123.setTransform(249.8,39.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000099").s().p("AANArIgCgOIgBgNIAAgFIAAgEIAAgFQAAgBgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgHAAgDAEIgHAMQAAAVgCAEQgDAFgFAAQgDAAgDgCQgCgCAAgDIABgEIAAgPIAAgmIAAgCIABgJIgBgFIAAgFQAAgEACgCQADgCADAAQAGAAACAGIABALIgBAMIAAALQAEgEAFgCQADgCAGAAQAKAAAEAFQADAFABAGIABAPIABALIACAMIAAACQAAADgCACQgDACgDAAQgGAAgCgFg");
	this.shape_124.setTransform(243.2,38.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000099").s().p("AgEApQgCgDgBgDIAAgHIABgFIgBgdIgLgBQgHgBgBgHQAAgDACgCQADgDADAAIAKABIAAgGIAAgGQAAgDACgCQACgCAEgBQAHAAAAAPIAAAFIAGgBQAGAAADABQAEACAAAFQABAEgDACQgCADgEgBIgCAAIgDAAIgGAAIABAeIAAADIAAADQAAAOgIAAQgCAAgCgCg");
	this.shape_125.setTransform(236.8,38.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000099").s().p("AgSAYQgIgIgBgNQAAgLAHgLQAJgMAOAAQAMAAAHAKQAGAIAAANQAAALgHAKQgIALgNAAQgKAAgIgIgAgHgIQgDAFAAAGQAAAHADADQAEADADAAQAEAAAEgDQAEgEAAgHQABgRgLAAQgFAAgEAHg");
	this.shape_126.setTransform(230.8,39.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000099").s().p("AALAaIgBgLIgBgNIAAgDIAAgFIAAgCIAAgDQAAgFgCAAQgFAAgDAHQgEAGgDAIIgBAFIAAAGIAAAEIgBAGQAAADgCADQgCACgEAAQgDAAgDgCQgCgDAAgDIAAgFIgBgFIABgQIABgOIAAgFIgBgGQAAgDADgDQACgCAEAAQAHABABAIIAAABQAIgIAIgBQALAAAEAKQADAGAAAMIAAAEIAAACIABANIACALQAAADgDADQgCACgEAAQgHAAgBgIg");
	this.shape_127.setTransform(224.7,39.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000099").s().p("AANAaIgJAFIgFABQgOAAgHgIQgHgHAAgQQAAgMAKgJQAKgKANAAQAFAAAIADQAJADAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAGIAAAIQABAJABAFIADAGIACAGQAAACgCACQgDADgDAAQgDgBgGgFgAgHgKQgGAGAAAGQAAAIADAEQADAEAFAAQACAAADgCQAEgBADgCIgDgTIABgEIAAgGIgCgBIgBAAQgGAAgGAHg");
	this.shape_128.setTransform(218.2,39.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000099").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_129.setTransform(206.2,39.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000099").s().p("AgWAeQgBgCgBgDIAAgkIAAgGIAAgGQAAgDACgCQACgCAEAAQAHAAABAGQAJgHAMgBQAMAAAAAQIAAAFQgBAIgHAAQgIAAAAgHIAAgHQgLADgGALIAAAcQAAADgCADQgDACgDAAQgEgBgCgCg");
	this.shape_130.setTransform(200.2,39.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000099").s().p("AgSAYQgIgIgBgNQAAgLAHgLQAJgMAOAAQAMAAAHAKQAGAIAAANQAAALgHAKQgIALgNAAQgKAAgIgIgAgHgIQgDAFAAAGQAAAHADADQAEADADAAQAEAAAEgDQAEgEAAgHQABgRgLAAQgFAAgEAHg");
	this.shape_131.setTransform(194,39.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000099").s().p("AgKAxQgCgDAAgCIAAgCIABgQIAAgbIgEAAIgDAAQgEAAgCgCQgCgCAAgDQAAgGAGgBIAKgBIABgHQABgNAGgGQAEgIAPAAQAKAAAAAIQAAAHgKAAQgHAAgDAFQgCAEgBAHIAAADIALgBQALgBAAAIQAAAIgMgBIgLABIAAAOIAAAQQAAAKgBAHQgCAGgEAAQgDAAgDgCg");
	this.shape_132.setTransform(187.8,38.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000099").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_133.setTransform(181.4,39.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000099").s().p("AgQAsQgCADgDAAQgDAAgDgDQgCgCAAgDIAAgFIAAgDIAAhBQAAgEACgDQADgFAEAAQAGAAAAAHIAAACIAAADIAAAXIAIgFIAGgBQAOABAIAJQAIAIAAANQAAAOgJAKQgKAJgLAAQgJAAgHgDgAgFAAIgJAEIAAAZQAIADAGAAQAFAAAFgFQAFgFAAgIQAAgIgEgEQgEgEgHAAQgBABgEABg");
	this.shape_134.setTransform(174.6,38.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000099").s().p("AALAaIgBgLIgBgNIAAgDIAAgFIAAgCIAAgDQAAgFgCAAQgFAAgDAHQgEAGgDAIIgBAFIAAAGIAAAEIgBAGQAAADgCADQgCACgEAAQgDAAgDgCQgCgDAAgDIAAgFIgBgFIABgQIABgOIAAgFIgBgGQAAgDADgDQACgCAEAAQAHABABAIIAAABQAIgIAIgBQALAAAEAKQADAGAAAMIAAAEIAAACIABANIACALQAAADgDADQgCACgEAAQgHAAgBgIg");
	this.shape_135.setTransform(162.8,39.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000099").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_136.setTransform(156.1,39.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000099").s().p("AgXAvQgDgDABgDIAAgWIAAgVIgBgWIgBgLQAAgFACgEQADgEAEAAQADAAACADQADACAAADIAAABQADgDAEgBIAGgBQAOAAAHAMQAEAIAAAOQAAALgIAIQgHAJgNAAIgJgBIAAAYQAAADgDADQgBACgEAAQgDAAgDgCgAgCgaIgHAFIAAAWQAGACADAAQAFAAAEgDQADgEgBgGIAAgLQgBgHgHAAQgDAAgCACg");
	this.shape_137.setTransform(149.8,41.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000099").s().p("AgXAvQgDgDABgDIAAgWIAAgVIgBgWIgBgLQAAgFADgEQACgEAEAAQADAAACADQADACAAADIAAABQADgDAEgBIAGgBQAOAAAGAMQAFAIAAAOQAAALgIAIQgHAJgNAAIgJgBIAAAYQAAADgDADQgCACgDAAQgDAAgDgCgAgCgaIgHAFIAAAWQAGACADAAQAFAAAEgDQADgEgBgGIAAgLQgCgHgGAAQgDAAgCACg");
	this.shape_138.setTransform(143.4,41.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000099").s().p("AAOAaIgKAFIgFABQgOAAgHgIQgHgHAAgQQAAgMAKgJQALgKAMAAQAFAAAIADQAJADAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAGIAAAIQAAAJABAFIACAGIADAGQAAACgDACQgCADgDAAQgCgBgGgFgAgHgKQgGAGAAAGQAAAIADAEQACAEAHAAQABAAADgCQADgBADgCIgBgTIAAgEIAAgGIgBgBIgCAAQgGAAgGAHg");
	this.shape_139.setTransform(136.8,39.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000099").s().p("AANArIgCgOIgBgNIAAgFIAAgEIAAgFQAAgBgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgHAAgDAEIgHAMQAAAVgCAEQgDAFgFAAQgDAAgDgCQgCgCAAgDIABgEIAAgPIAAgmIAAgCIABgJIgBgFIAAgFQAAgEACgCQADgCADAAQAGAAACAGIABALIgBAMIAAALQAEgEAFgCQADgCAGAAQAKAAAEAFQADAFABAGIABAPIABALIACAMIAAACQAAADgCACQgDACgDAAQgGAAgCgFg");
	this.shape_140.setTransform(130,38.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000099").s().p("AgEAuQgDgDAAgDIAAhPQAAgEADgCQACgCACAAQADAAADACQABACAAAEIAABMQABALgIAAQgCAAgCgCg");
	this.shape_141.setTransform(447.1,19.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000099").s().p("AgEAuQgCgDAAgDIAAhPQAAgEACgCQACgCACAAQADAAACACQACACAAAEIAABMQAAALgHAAQgCAAgCgCg");
	this.shape_142.setTransform(443.8,19.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000099").s().p("AgGAqQgCgCAAgDIAAgLIgBgLIABgNIABgLQAAgDACgDQACgCADAAQACAAACACQADADAAADIgBALIAAANIAAALIAAALQAAADgCACQgDACgBABQgEgBgCgCgAgEgdQgDgCAAgDQAAgEADgDQADgDACABQADgBADADQADADAAAEQAAADgDACQgDADgDAAQgCAAgDgDg");
	this.shape_143.setTransform(440.6,19.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000099").s().p("AANAgQgHAAgEgOIgCgSIgCACIgJAWIgCAEQgDAEgFAAQgCAAgDgFQgDgFgCgIIgGgdIgBgJQAAgDACgCQADgCADAAQAHAAABAGIABAIIABAIIACANIALgbQACgIAFAAQAGAAACAIIAEAQIACAPIAJgiQABgFAHAAQADAAADACQACACAAADIAAACQgGAWgGASQgCAFgEAGQgDADgEAAIgBAAg");
	this.shape_144.setTransform(434.8,21.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000099").s().p("AALAaIgBgLIgBgMIAAgEIAAgFIAAgCIAAgDQAAgFgCAAQgFAAgDAGQgEAHgDAIIgBAFIAAAGIAAAFIgBAFQAAADgCADQgCACgEgBQgDABgDgCQgCgDAAgDIAAgFIgBgFIABgQIABgOIAAgFIgBgGQAAgDADgCQACgCAEgBQAHABABAIIAAACQAIgJAIAAQALgBAEAKQADAGAAANIAAADIAAADIABAMIACALQAAAEgDACQgCACgEgBQgHABgBgIg");
	this.shape_145.setTransform(422.4,20.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000099").s().p("AgSAYQgIgIgBgNQAAgLAHgLQAJgMAOAAQAMAAAHAKQAGAIAAANQAAALgHAKQgIALgNAAQgKAAgIgIgAgHgIQgDAFAAAGQAAAHADADQAEADADAAQAEAAAEgDQAEgEAAgHQABgRgLAAQgFAAgEAHg");
	this.shape_146.setTransform(416,21);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000099").s().p("AgGAqQgCgCAAgDIAAgLIgBgLIABgNIABgLQAAgDACgDQACgCADAAQACAAACACQADADAAADIgBALIAAANIAAALIAAALQAAADgCACQgDACgBABQgEgBgCgCgAgEgdQgDgCAAgDQAAgEADgDQADgDACABQADgBADADQADADAAAEQAAADgDACQgDADgDAAQgCAAgDgDg");
	this.shape_147.setTransform(411.4,19.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000099").s().p("AgEApQgCgDAAgDIAAgHIAAgFIgBgdIgLgBQgIgBAAgHQABgDACgCQACgCADAAIAKABIAAgHIAAgGQAAgDADgCQACgDADAAQAGAAAAAPIAAAFIAHAAQAGAAADABQAEABAAAFQAAAEgCACQgCACgDAAIgEAAIgCAAIgGAAIABAeIAAACIAAAEQAAAOgIgBQgBABgDgCg");
	this.shape_148.setTransform(406.8,20);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000099").s().p("AgRAaQgJgJAAgMQAAgKAIgMQAJgPALAAQAGABAIADQAKAEAAAGQAAACgCACQgCADgDAAQgDAAgDgDQgEgDgHABQgDAAgFAIQgFAIAAAFQAAAGAFADQAEAEAFAAQAEAAAFgDIAHgDQAEAAACACQACADAAACQAAAFgKAFQgJADgFAAQgLAAgJgGg");
	this.shape_149.setTransform(400.7,21);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000099").s().p("AAOAaIgKAFIgFABQgOgBgHgHQgHgHAAgPQAAgMAKgKQAKgLANABQAGAAAHACQAJAEAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAFIAAAJQABAJABAFIACAGIADAFQAAAEgDACQgCACgDAAQgDAAgFgGgAgHgLQgGAHAAAGQAAAIADAEQADAEAFAAQACAAADgCQADAAADgDIgCgTIABgEIAAgGIgCgBIgBAAQgGABgGAFg");
	this.shape_150.setTransform(394.5,21);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000099").s().p("AgPAeQgJgDAAgHQAAgFAHgBIAIADIAHABQAKAAAAgFQAAgDgHgDIgOgHQgIgFAAgIQAAgMAMgEQAHgCAOgBQAFABADABQAEACAAAFQAAALgGAAQgFAAgBgFIgGAAQgLAAAAADQgBADAHAEQAMAFADACQAJAGAAAHQAAAKgKAGQgHADgJAAQgHAAgHgCg");
	this.shape_151.setTransform(382.9,21);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000099").s().p("AgEApQgDgDABgDIAAgHIAAgFIgBgdIgLgBQgIgBABgHQAAgDACgCQACgCAEAAIAKABIgBgHIAAgGQAAgDADgCQACgDADAAQAHAAgBAPIAAAFIAGAAQAIAAABABQAFABABAFQAAAEgDACQgCACgDAAIgEAAIgDAAIgFAAIABAeIAAACIAAAEQAAAOgIgBQgCABgCgCg");
	this.shape_152.setTransform(377.3,20);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000099").s().p("AgGAqQgCgCAAgDIAAgLIgBgLIABgNIABgLQAAgDACgDQACgCADAAQACAAACACQADADAAADIgBALIAAANIAAALIAAALQAAADgCACQgDACgBABQgEgBgCgCgAgEgdQgDgCAAgDQAAgEADgDQADgDACABQADgBADADQADADAAAEQAAADgDACQgDADgDAAQgCAAgDgDg");
	this.shape_153.setTransform(372.9,19.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000099").s().p("AgEApQgCgDgBgDIAAgHIABgFIgBgdIgLgBQgHgBAAgHQAAgDABgCQADgCAEAAIAKABIgBgHIAAgGQAAgDACgCQACgDAEAAQAHAAAAAPIAAAFIAFAAQAIAAABABQAGABAAAFQgBAEgCACQgCACgEAAIgCAAIgEAAIgFAAIABAeIAAACIAAAEQAAAOgIgBQgBABgDgCg");
	this.shape_154.setTransform(363.1,20);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000099").s().p("AAOAaIgKAFIgFABQgOgBgHgHQgHgHAAgPQAAgMAKgKQAKgLANABQAGAAAHACQAJAEAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAFIAAAJQgBAJACAFIACAGIADAFQAAAEgDACQgCACgDAAQgDAAgFgGgAgHgLQgGAHAAAGQAAAIADAEQADAEAGAAQABAAADgCQADAAADgDIgBgTIAAgEIAAgGIgBgBIgCAAQgGABgGAFg");
	this.shape_155.setTransform(357,21);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000099").s().p("AANArIgCgOIgBgNIAAgFIAAgEIAAgFQAAgBgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgHAAgDAEIgHAMQAAAVgCAEQgDAFgFAAQgDAAgDgCQgCgCAAgDIABgEIAAgPIAAgmIAAgCIABgJIgBgFIAAgFQAAgEACgCQADgCADAAQAGAAACAGIABALIgBAMIAAALQAEgEAFgCQADgCAGAAQAKAAAEAFQADAFABAGIABAPIABALIACAMIAAACQAAADgCACQgDACgDAAQgGAAgCgFg");
	this.shape_156.setTransform(350.2,19.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000099").s().p("AgEApQgCgDgBgDIAAgHIABgFIgBgdIgLgBQgHgBAAgHQgBgDACgCQADgCAEAAIAJABIAAgHIAAgGQAAgDACgCQACgDAEAAQAHAAAAAPIAAAFIAFAAQAIAAABABQAGABgBAFQAAAEgCACQgCACgEAAIgCAAIgEAAIgFAAIABAeIAAACIAAAEQAAAOgIgBQgBABgDgCg");
	this.shape_157.setTransform(343.8,20);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000099").s().p("AgdAlQAAgDACgCQACgCAEAAIAHABIAJABQAHAAAEgFQAEgGABgLQgDADgEABQgEACgCAAQgMAAgHgHQgIgIAAgKQAAgQAKgKQAKgKAPAAQAGAAAEACQAEABACACQAIACAAAHIgBALQgDAOAAANQgBATgGAIQgHAMgSAAQgXAAAAgJgAgIgZQgFAGAAAJQAAAHADADQADACAFAAQADAAAFgEQAEgEABgGIACgSIgDgBIgEAAQgIAAgGAGg");
	this.shape_158.setTransform(332.6,22.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000099").s().p("AALAaIgBgLIgBgMIAAgEIAAgFIAAgCIAAgDQAAgFgCAAQgFAAgDAGQgEAHgDAIIgBAFIAAAGIAAAFIgBAFQAAADgCADQgCACgEgBQgDABgDgCQgCgDAAgDIAAgFIgBgFIABgQIABgOIAAgFIgBgGQAAgDADgCQACgCAEgBQAHABABAIIAAACQAIgJAIAAQALgBAEAKQADAGAAANIAAADIAAADIABAMIACALQAAAEgDACQgCACgEgBQgHABgBgIg");
	this.shape_159.setTransform(326.4,20.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000099").s().p("AgGAqQgCgCAAgDIAAgLIgBgLIABgNIABgLQAAgDACgDQACgCADAAQACAAACACQADADAAADIgBALIAAANIAAALIAAALQAAADgCACQgDACgBABQgEgBgCgCgAgEgdQgDgCAAgDQAAgEADgDQADgDACABQADgBADADQADADAAAEQAAADgDACQgDADgDAAQgCAAgDgDg");
	this.shape_160.setTransform(321.7,19.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000099").s().p("AgEApQgDgDABgDIAAgHIAAgFIgBgdIgLgBQgHgBAAgHQAAgDABgCQADgCAEAAIAKABIgBgHIAAgGQAAgDADgCQABgDAEAAQAHAAAAAPIAAAFIAFAAQAIAAABABQAGABAAAFQgBAEgCACQgCACgDAAIgDAAIgEAAIgFAAIABAeIAAACIAAAEQAAAOgIgBQgBABgDgCg");
	this.shape_161.setTransform(317.1,20);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000099").s().p("AAOAaIgKAFIgFABQgOgBgHgHQgHgHAAgPQAAgMAKgKQALgLAMABQAFAAAIACQAJAEAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAFIAAAJQAAAJABAFIACAGIADAFQAAAEgDACQgCACgDAAQgCAAgGgGgAgHgLQgGAHAAAGQAAAIADAEQACAEAHAAQABAAADgCQADAAADgDIgBgTIAAgEIABgGIgCgBIgCAAQgGABgGAFg");
	this.shape_162.setTransform(311,21);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000099").s().p("AgRAaQgJgJAAgMQAAgKAIgMQAJgPALAAQAGABAIADQAKAEAAAGQAAACgCACQgCADgDAAQgDAAgDgDQgEgDgHABQgDAAgFAIQgFAIAAAFQAAAGAFADQAEAEAFAAQAEAAAFgDIAHgDQAEAAACACQACADAAACQAAAFgKAFQgJADgFAAQgLAAgJgGg");
	this.shape_163.setTransform(304.4,21);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000099").s().p("AgGAqQgCgCAAgDIAAgLIgBgLIABgNIABgLQAAgDACgDQACgCADAAQACAAACACQADADAAADIgBALIAAANIAAALIAAALQAAADgCACQgDACgBABQgEgBgCgCgAgEgdQgDgCAAgDQAAgEADgDQADgDACABQADgBADADQADADAAAEQAAADgDACQgDADgDAAQgCAAgDgDg");
	this.shape_164.setTransform(299.9,19.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000099").s().p("AAPAsIgHADIgIAAQgMAAgKgIQgIgIAAgOQAAgPAJgIQAIgKANAAIAIABQAEABACACIABgcQACgGAGAAQAEAAACACQACACAAAEIgCAZIAAAXIAAAcIABADQAAADgCABQgDACgDAAQgEABgDgEgAgLACQgEAGAAAJQAAAGAEAFQAGAFAFAAIAFgBIAGgEIABgCIAAgVQgBgEgDgBQgEgBgDAAQgHAAgFADg");
	this.shape_165.setTransform(294.5,19.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000099").s().p("AALAaIgBgLIgBgMIAAgEIAAgFIAAgCIAAgDQAAgFgCAAQgFAAgDAGQgEAHgDAIIgBAFIAAAGIAAAFIgBAFQAAADgCADQgCACgEgBQgDABgDgCQgCgDAAgDIAAgFIgBgFIABgQIABgOIAAgFIgBgGQAAgDADgCQACgCAEgBQAHABABAIIAAACQAIgJAIAAQALgBAEAKQADAGAAANIAAADIAAADIABAMIACALQAAAEgDACQgCACgEgBQgHABgBgIg");
	this.shape_166.setTransform(288,20.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000099").s().p("AgGAqQgCgCAAgDIAAgLIgBgLIABgNIABgLQAAgDACgDQACgCADAAQACAAACACQADADAAADIgBALIAAANIAAALIAAALQAAADgCACQgDACgBABQgEgBgCgCgAgEgdQgDgCAAgDQAAgEADgDQADgDACABQADgBADADQADADAAAEQAAADgDACQgDADgDAAQgCAAgDgDg");
	this.shape_167.setTransform(283.2,19.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000099").s().p("AgEAhQgCgCAAgDIgBgUIgCgSIAAgGQgHAEgIAJIAAACIAAAQIAAAFIgBAEQAAADgCACQgDACgDAAQgFAAgCgFIgBgJIAAgUIgBgIIAAgJQAAgFACgFQACgFAEAAQAEAAADADQACACAAADIAAAFQAJgKAIAAQAIAAACAHQAEgDAEgCQAFgBAFAAQAMAAAEALIACAQIAFAeQAAADgDACQgDACgDAAQgHAAgBgGIgCgRIgCgQQgBgKgDAAIgGADIgHAEIACASIABATQAAADgCACQgCADgEAAQgCAAgCgDg");
	this.shape_168.setTransform(271.7,21);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000099").s().p("AgWAeQgBgCgBgEIAAgjIAAgGIAAgFQAAgEACgCQADgCADAAQAGAAACAHQAIgIANAAQAMAAAAAPIAAAFQgBAIgHAAQgIAAAAgIIAAgGQgLADgGALIAAAbQAAAEgCADQgCACgEgBQgEAAgCgCg");
	this.shape_169.setTransform(264.2,21);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000099").s().p("AgSAYQgIgIgBgNQAAgLAHgLQAJgMAOAAQAMAAAHAKQAGAIAAANQAAALgHAKQgIALgNAAQgKAAgIgIgAgHgIQgDAFAAAGQAAAHADADQAEADADAAQAEAAAEgDQAEgEAAgHQABgRgLAAQgFAAgEAHg");
	this.shape_170.setTransform(258,21);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000099").s().p("AgKAxQgCgCAAgDIAAgCIABgQIAAgbIgEABIgDAAQgEAAgCgDQgCgBAAgEQAAgFAGgCQACgBAIAAIABgHQABgNAGgGQAEgIAPAAQAKAAAAAIQAAAHgKAAQgHAAgDAFQgCAEgBAIIAAACIALgBQALAAAAAHQAAAIgMgBIgLABIAAAOIAAAPQAAALgBAHQgCAGgEAAQgDAAgDgCg");
	this.shape_171.setTransform(251.8,19.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF0000").s().p("AgbAsQgDgDAAgEIAAg8IAAgHIAAgIQABgFAJgCIAPgBQAJAAAKAHQAMAJAAAMQAAAHgCAEQgCAEgFADQAGACAEAGQAFAGAAAGQAAAIgJAGQgFAFgGADQgMAFgVAAQgDAAgDgDgAgOAfQAKgBAKgDQAKgDAAgEQAAgEgHgDQgFgEgEAAIgOAAgAgOgSIAAAMIAIABQAQgBAAgMQAAgEgFgEQgFgEgFAAIgJAAg");
	this.shape_172.setTransform(240,19.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("AgfAsQgCgDAAgDIAAgNIAAgNIAAguQAAgEACgDQADgEAGABIAPABQAHABAEADQAZAMAAATQAAAIgFAEQgFAFgKAFQAPAIAHAJQADADAAACQAAAEgDACQgCACgDAAQgEAAgCgCQgSgRgTgGIABATQAAADgDADQgDACgDAAQgDAAgDgCgAgRABIADAAQAOAAAFgBIAGgEIACgEQAAgHgJgGQgFgFgJgBIgHgBg");
	this.shape_173.setTransform(232.4,19.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AgaAsQgGgGAAgSIABgWIABgXIgBgHIAAgGQAAgIAIgBQABAAAAABQABAAABAAQAAAAABAAQAAABABAAIANgDIAJgBQAPABAJADQAFACAAAFQAAAEgCACQgCACgEAAIgCAAQgKgDgJABIgHAAIgLACIAAAYIAVgDIAOgBQADAAADADQACACAAADQAAAFgHABIgOABIgXADIgBAMQAAALACABQAAABAHAAIAJAAIALAAIADgBIAEAAQADAAACACQADACAAAEQAAAHgHABQgFACgRgBQgTABgGgGg");
	this.shape_174.setTransform(224.8,19.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AgLApQgIgRgIgeIgFgQQgEgLAAgEQAAgEAEgCQACgCADAAQAFAAADAGIACAKIAGATIAIAcIANgiIAEgOQAEgIAEgFQADgDADAAQADAAADADQADACAAADQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABIgGALIgEAMIgQAmIgGAOQgDAFgDAAQgGAAgCgGg");
	this.shape_175.setTransform(216.9,19.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000099").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_176.setTransform(204.1,21);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000099").s().p("AANArIgCgOIgBgNIAAgFIAAgEIAAgFQAAgBgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgHAAgDAEIgHAMQAAAVgCAEQgDAFgFAAQgDAAgDgCQgCgCAAgDIABgEIAAgPIAAgmIAAgCIABgJIgBgFIAAgFQAAgEACgCQADgCADAAQAGAAACAGIABALIgBAMIAAALQAEgEAFgCQADgCAGAAQAKAAAEAFQADAFABAGIABAPIABALIACAMIAAACQAAADgCACQgDACgDAAQgGAAgCgFg");
	this.shape_177.setTransform(197.5,19.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000099").s().p("AgEApQgDgDAAgDIAAgHIABgFIgBgdIgLgBQgIgBAAgHQAAgDADgCQACgCADAAIAKABIAAgHIAAgGQAAgDADgCQABgDAEAAQAGAAAAAPIAAAFIAHAAQAGAAADABQAEABAAAFQAAAEgCACQgCACgEAAIgDAAIgCAAIgGAAIABAeIAAACIAAAEQAAAOgIgBQgCABgCgCg");
	this.shape_178.setTransform(191.1,20);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000099").s().p("AgTAFQgDgCAAgDQAAgBADgDQADgCAEAAIAMAAIANAAQAEAAACABQAEACAAADQAAAGgJAAIgaABQgEAAgDgCg");
	this.shape_179.setTransform(184.6,20.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000099").s().p("AgaAsQgGgGAAgSIABgWIABgXIgBgHIAAgGQAAgIAIgBQABAAAAABQABAAABAAQAAAAABAAQAAABABAAIANgDIAJgBQAPABAJADQAFACAAAFQAAAEgCACQgCACgEAAIgCAAQgKgDgJABIgHAAIgLACIAAAYIAVgDIAOgBQADAAADADQACACAAADQAAAFgHABIgOABIgXADIgBAMQAAALACABQAAABAHAAIAJAAIALAAIADgBIAEAAQADAAACACQADACAAAEQAAAHgHABQgFACgRgBQgTABgGgGg");
	this.shape_180.setTransform(172.2,19.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000099").s().p("AgeAmQgHgGAAgHQAAgEACgCQACgDAEAAQAFAAADAGQADAHAMAAQAIAAAJgEQAKgFAAgFQAAgIgGgCQgEgCgLAAQgLAAgIgDQgKgEAAgJQAAgLAMgKQAMgJAMAAQAGAAAJACQAKAEAAAEQAAADgCACQgCADgEAAIgIgBIgJgBQgHAAgFADQgHAEAAAEQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQACABAFABIANABQANABAHAGQAIAFAAAMQAAAQgRAHQgNAGgPAAQgPAAgIgGg");
	this.shape_181.setTransform(164.1,19.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000099").s().p("AgoAtQgCgDAAgDIABgHIAAgHIAAgKIAAgLIAAgJIAAgLIgBgLIgBgKQABgEADgCQACgDAFAAQAEAAAFAHQAZAmAZAWIAAgJIAAglIgBgGIgBgGQAAgIAJAAQAJAAAAAdIAAAJIAAAjIgBAKQgBAHgIAAQgEAAgFgEQgWgVgbgiIAAAQIAAAOIAAAOQABARgJAAQgEAAgDgCg");
	this.shape_182.setTransform(155.1,19.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000099").s().p("AgaAsQgGgGAAgSIABgWIABgXIgBgHIAAgGQAAgIAIgBQABAAAAABQABAAABAAQAAAAABAAQAAABABAAIANgDIAJgBQAPABAJADQAFACAAAFQAAAEgCACQgCACgEAAIgCAAQgKgDgJABIgHAAIgLACIAAAYIAVgDIAOgBQADAAADADQACACAAADQAAAFgHABIgOABIgXADIgBAMQAAALACABQAAABAHAAIAJAAIALAAIADgBIAEAAQADAAACACQADACAAAEQAAAHgHABQgFACgRgBQgTABgGgGg");
	this.shape_183.setTransform(146.6,19.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000099").s().p("AgEAqQgDgCAAgEIAAgCIABgDIgBgIIAAgIIgBgTIgCgVIgDAAQgNAAgIgCQgGgCAAgGQAAgDACgCQACgDAEAAIAKABIAJABIALAAIAIgBIAOABIANABQAEAAACACQACACAAAEQAAADgCACQgCACgEAAIgOAAIgOgBIABAYIACAWIAAAGIAAAGQAAAEgCAEQgCAEgEAAQgCAAgCgCg");
	this.shape_184.setTransform(138.6,19.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000099").s().p("AgEAqQgDgCAAgEIAAgCIABgDIgBgIIAAgIIgBgTIgCgVIgDAAQgNAAgIgCQgGgCAAgGQAAgDACgCQACgDAEAAIAKABIAJABIALAAIAIgBIAOABIANABQAEAAACACQACACAAAEQAAADgCACQgCACgEAAIgOAAIgOgBIABAYIACAWIAAAGIAAAGQAAAEgCAEQgCAEgEAAQgCAAgCgCg");
	this.shape_185.setTransform(125,19.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000099").s().p("AgZAjQgJgJAAgNQAAgRARgVQAPgRAOAAIAEAAIADABQADgDAEAAQAGAAABAHIABALQAAADgBADQgCADgFAAQgFAAgDgGIgCgDIgEAAQgIAAgHALQgOAPAAANQAAAHAEAEQAEAFAHAAQADAAAGgDIAJgGQAEgDADAAQAEAAACADQACACAAADQAAADgDADQgQAOgOAAQgOAAgJgKg");
	this.shape_186.setTransform(117.2,19.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000099").s().p("AgaAsQgGgGAAgSIABgWIABgXIgBgHIAAgGQAAgIAIgBQABAAAAABQABAAABAAQAAAAABAAQAAABABAAIANgDIAJgBQAPABAJADQAFACAAAFQAAAEgCACQgCACgEAAIgCAAQgKgDgJABIgHAAIgLACIAAAYIAVgDIAOgBQADAAADADQACACAAADQAAAFgHABIgOABIgXADIgBAMQAAALACABQAAABAHAAIAJAAIALAAIADgBIAEAAQADAAACACQADACAAAEQAAAHgHABQgFACgRgBQgTABgGgGg");
	this.shape_187.setTransform(109.8,19.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000099").s().p("AgdAuQgCgCAAgEIAAhAIAAgIIAAgGQAAgEADgCQACgDAEAAIADACIANgCIAIgBQAHAAAKADQANADAAAFQAAADgDADQgCACgDAAIgDgBQgIgCgLAAIgGAAIgKACIAAATQAJgCAFAAIARABQAIABAAAHQAAADgCABQgDACgDAAIgJAAIgIgBIgOADIAAAkQAAAEgDACQgDACgDAAQgEAAgCgCg");
	this.shape_188.setTransform(102.4,19.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000099").s().p("AgfAsQgCgDAAgDIAAgNIAAgNIAAguQAAgEADgDQADgEAFABIAOABQAIABAFADQAZAMAAATQgBAIgFAEQgFAFgLAFQAQAIAHAJQADADAAACQAAAEgDACQgCACgEAAQgDAAgCgCQgSgRgUgGIABATQAAADgCADQgDACgDAAQgDAAgDgCgAgRABIADAAQAOAAAFgBIAGgEIACgEQAAgHgIgGQgHgFgIgBIgHgBg");
	this.shape_189.setTransform(94.9,19.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000099").s().p("AgaAsQgGgGAAgSIABgWIABgXIgBgHIAAgGQAAgIAIgBQABAAAAABQABAAABAAQAAAAABAAQAAABABAAIANgDIAJgBQAPABAJADQAFACAAAFQAAAEgCACQgCACgEAAIgCAAQgKgDgJABIgHAAIgLACIAAAYIAVgDIAOgBQADAAADADQACACAAADQAAAFgHABIgOABIgXADIgBAMQAAALACABQAAABAHAAIAJAAIALAAIADgBIAEAAQADAAACACQADACAAAEQAAAHgHABQgFACgRgBQgTABgGgGg");
	this.shape_190.setTransform(87.3,19.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000099").s().p("AgZAsQgCgCAAgDIAAgRIABgZIABgbQAAgPAJABIAFgBIAJAAQAJAAAKAHQALAIAAAMQAAAPgLAHQgLAIgNAAIgEAAIgBAbQAAADgCACQgCACgDAAQgEAAgCgCgAgJgWIgCAVIAEAAQAIAAAGgEQAGgFAAgIQAAgFgGgDQgGgEgFAAIgDAAIgCAAIAAAIg");
	this.shape_191.setTransform(80.2,19.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000099").s().p("AgaAsQgGgGAAgSIABgWIABgXIgBgHIAAgGQAAgIAIgBQABAAAAABQABAAABAAQAAAAABAAQAAABABAAIANgDIAJgBQAPABAJADQAFACAAAFQAAAEgCACQgCACgEAAIgCAAQgKgDgJABIgHAAIgLACIAAAYIAVgDIAOgBQADAAADADQACACAAADQAAAFgHABIgOABIgXADIgBAMQAAALACABQAAABAHAAIAJAAIALAAIADgBIAEAAQADAAACACQADACAAAEQAAAHgHABQgFACgRgBQgTABgGgGg");
	this.shape_192.setTransform(68.2,19.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000099").s().p("AgfAsQgCgDAAgDIAAgNIAAgNIAAguQAAgEADgDQADgEAFABIAOABQAIABAFADQAZAMAAATQAAAIgGAEQgFAFgLAFQAQAIAIAJQACADAAACQAAAEgCACQgDACgEAAQgCAAgDgCQgSgRgUgGIABATQAAADgCADQgDACgDAAQgEAAgCgCgAgRABIADAAQAOAAAFgBIAGgEIACgEQAAgHgIgGQgHgFgIgBIgHgBg");
	this.shape_193.setTransform(60.6,19.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000099").s().p("AgWAoQgPgNAAgbIAAgIIAAgJIABgGIAAgHQAAgFABgEQADgFAEAAQACAAADACQADACAAADIAAAKIgBAKIAAAIIAAAJQAAAHACAHQACAJAFAFQADABAJABQANgBAGgaQADgMAAgZIACgGQADgEAEAAQAEAAACADQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAAYgCAMQgDATgJANQgFAGgGAEQgHAEgGAAQgPAAgHgFg");
	this.shape_194.setTransform(52.1,19.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000099").s().p("AgEAqQgDgCAAgEIAAgCIABgDIgBgIIAAgIIgBgTIgCgVIgDAAQgNAAgIgCQgGgCAAgGQAAgDACgCQACgDAEAAIAKABIAJABIALAAIAIgBIAOABIANABQAEAAACACQACACAAAEQAAADgCACQgCACgEAAIgOAAIgOgBIABAYIACAWIAAAGIAAAGQAAAEgCAEQgCAEgEAAQgCAAgCgCg");
	this.shape_195.setTransform(43.6,19.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000099").s().p("AgWAoQgPgNgBgbIABgIIAAgJIABgGIAAgHQAAgFABgEQACgFAEAAQADAAADACQADACAAADIAAAKIgBAKIAAAIIAAAJQAAAHACAHQACAJAFAFQADABAJABQANgBAGgaQADgMAAgZIABgGQADgEAFAAQAEAAACADQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAAYgBAMQgDATgLANQgDAGgHAEQgHAEgGAAQgPAAgHgFg");
	this.shape_196.setTransform(34.9,19.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000099").s().p("AgdAuQgCgCAAgEIAAhAIAAgIIAAgGQAAgEADgCQACgDAEAAIADACIANgCIAIgBQAHAAAKADQANADAAAFQAAADgDADQgCACgDAAIgDgBQgIgCgLAAIgGAAIgKACIAAATQAJgCAFAAIARABQAIABAAAHQAAADgCABQgDACgDAAIgJAAIgIgBIgOADIAAAkQAAAEgDACQgDACgDAAQgEAAgCgCg");
	this.shape_197.setTransform(27,19.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(255,255,255,0.6)").s().p("EgjfADsIAAnYMBG/AAAIAAHYg");
	this.shape_198.setTransform(238.2,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]}).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,4.5,454.5,238.7);


(lib.anim_surfguy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AEGlSQADAKABAJQAAAKgCAJQgBAKgCAJQgBAJgCAKQgCAJgBAKQgCAJgCAJQgBAEgBADQgCABgDACQABARgQAEgADqiVQgIAEgHAEQgPAKADgBQgXAQgFADQgeAXgiAMQgKAEgJgCQgEgBgEgBQgDAAgDAAQgLACgMgCQgIgBgHgCQgTgGgRgJQgBAAgCgBQgMgIgKgOABQiFQAKAJAHALQAGgVASgKQAQgJATgBQATgCASgIQAGgCABgFQAAgLgDgLQgIgYAbAHQgBAFAOALAD5jaQADgDABgCQAEAHAEAIQAFAMgGALQgFAIgIAAQACACAEABQAFADgHAFQgFAEABAIQgHACgGADIisG7QgIAEgJAFQgIAEgJAEQgCABgCABQgGADgHADQgJAEgHAAQgKAAgIgDQgKgEgGgHQgIgFgEgLABQiFIBQjNQBThSATBSAhNjtQgCABgEgBQAAgBgCgDQAAgDAAgDQAAABgDABQgBABAAADQgEgDgDgEQgCgDgCgEQgBgEAAgEQAAgEAAgEQgDAGgDgEQgBgCAAgDQABgDACgEQACgFgBgCQgCABgBABQgCABgCABQgDgMAKgIQAEgDAEgCQADgCAEgBQAEgBACgCQgDgBgEAAQgGgBgEAEQADgHAGgCQAIgDAHgCQAIgBAHgBQAHAAAGACQgFgEgGgCQgDgBgCAAQgFgBgFAAQADgBAEgBQAEAAAEAAQAJABAIAFQAAgDABgDQABgNALgEQgCAEAAAEQAAACgBABIAAABQAAADABACQAAgDACgDQAPgOATACQACABACAAQgGACgFADQgFADgFAEQAAAAgBABIAAAAIAAAAQgBACgCABQADgBADAAQANAAAMAKQAAACgEgBQgGgCgFABIAAAAQAAAAAAAAQgDAAgEACQAEAAADABQASADAFASQABAEABAFQABACAAABQgCAAgCgDQgIgNgOgDQgBAAgCAAQgCAAgDAAQgDAAgEgCQgFgBgGAAQABACAAACQABACgEABQgGACgDAGQgCAEAEACQAAAEgCADQgEACAAAFQAAACABABQABAEACAAQACABAAACQgBACgDADQgDgJgJgCQgDAAgCACQgHAGABAKQAAADABACQACAHAHADQAIAFAIgGAAAkZQAAgHgCgCQgCgDgFACQgDAAgBADQgDALAHAHQAEAEAEgDIAAAAQABgDAAgEQAAABAAABQAAADgCgBQgKgHAKgEQACABAAABgAgDk4QABABgBAAQABAEABADQABAFABAFQAAAAAAABQAFAHAEAIQAFAJALgCQAIgBgCAHQAAAEgEACQgCABgBABIAAAAQADAJgBAJQgBAJgKAAQgBAAgCgBQgGgBgEgDQgDgDgBgEQAAAFABAEQAAANAMADQABAAAAAAQACAAABgBQgDAJgFAIQgHAJgJgFQgBgBgBAAQAAAAgBAAQgCAKgBAJQAAAFAEABIAAAAQAKgCALAEQATAHALAQQAEAHgDAGQARgMARALQACACACABAAAkUQABgCgBgDAgJkvQgJACgBAJAAQjmQgEAGAAAHAgKjGQgHgDgHgEQgFgDgCgFAgKitQgIACgHAGAg9j9QABAIgIAEQgEACgEACQAAAAgBAAIAAAAAhMjtQAAAAgBAAAjFg0QAMgMAMgQQALgPALgPQAKgPAJgQQAKgRANgNQADgEAEgBQAVgFADgTQADgSgCgTAhZAFQgCgBgCgBQgKgDgMAAQgogDgbgcQgGgHgFgIQgCgDgCgDAi9ByQgGgDgDgGQgPgigJglQgKgmAjgwAhZAFQAKAIAGAZQAKAjASAkQADAHgEAFQgBACgBABQgFAFgIAEQgIADgJACQgVAEgQgEQgJgCgHgFQgBAMAAALQAAATgIAQQgJARgOANQgOANgHASQgHASgHARQgJAVAdgDAiVBuQABglgdgdAAFhhQABAUgTAIQgUAHgGAPQgCAQgPAEQgMADgBAPQgVAIABAGAgwB8QAAAIABAJQACAJACAKQACAIgBAIQABAAgBAAQACADABACAgqCwIAAAAQACADABACIAAABQABABAAABQABACABACQAGAPgFARQgBADgBADQAAAIgBAIQAAABAAABQgBAJgCAJQgCAKgDAJQgCAFgCAEQAAACgBABQAAADgBACQAAAAgBABQAAACAAACQgBADgBAEQgFASABAUQAJADALgCQAGgCAEgDQAKgJAPgDQAEgCAHAAQgCAHAEAGQAFAFgDAFQgLARgTAAQgTAAgTAAQgGAAgFACQgNAHgQABQgRABACgOQADgTAKgQQALgQAFgUQAEgSgDgSQgDgSgGgRQgHgUAPgSQAFgLgRgLQgQgKgEgRADPiEQgjBxgoBnQgoBpgsBgQgQAJgOAGQgZAMgRAAQgJAAgGgDAg0EqQAAACgBADAi0CWQAGgCAHgBAi9ByQAIADAMgCQANgCAHgDQAHAOALAHAi0CWQgBgSgIgSAiMEyQAEgBADgBQAIgBAAAHQAAAJgJADQgRAIgTABQgTABgUADQgSACgTAAQgWABADgVQADgTALgQQALgQAIgRQAHgSAGgSQAHgTAIgRQADgGADgEQAHgMALgFAiMEyQgHACgGAEAirEsQARgHAOANAA7hOIhlD+");
	this.shape.setTransform(26.7,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("AATBeQgJgCgHgFQgKgHgGgNIAAgBQAAglgcgcQAcAcAAAlIAAABQgHADgNACQgNACgIgEQgGgCgCgHQgPghgKgkQgJgnAjgwIADAGQAFAHAHAHQAbAdAmACQAMABAKAEIADADQAKAHAHAZQAJAiASAjQAEAHgFAGIgCACQgFAGgIADQgHAEgKABQgKACgJAAQgJAAgIgCg");
	this.shape_1.setTransform(13.1,42.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAFQgIgFAIgEIACACQACACAAABIgBACQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_2.setTransform(26.3,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBAVQgBgEABgFIAEAHQAEADAFABIADABQgDAGgBAHQgLgDgBgNgAgJgOQgIgHAEgLQAAAAAAgBQABgBAAAAQAAAAABgBQABAAAAAAQAFgCACADQADACAAAHIgDgCQgKAEAKAHIABADIgDABQgCAAgCgCg");
	this.shape_3.setTransform(26.7,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFEF97").s().p("AgnA6IgCgDIAAgGIgEACIgBAEIgGgIIgEgHIgCgHIABgIQgEAGgCgEIgBgFIACgIQACgEgBgCIgDABIgEADQgDgMALgHIAHgFIAHgCQAEgBADgDIgHgBQgGgBgFAEQADgGAHgDIAPgEIAOgCQAHgBAGACQgFgEgGgCIAAgEQAJABAHAFIAAgGQACgMALgEQgCADgBAEIAAADIAAABIAAAGQAAgEADgCQAPgOAVACIADAAIgMAGQgGACgFAEIAAABIAAAAIgBAAIgDAEIAGgBQAPAAAMAKQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBgBQgFgBgGAAIAAAAIgBAAIgIADIAJAAQATADAEASIACAIIACADQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgIgLgPgDIgEgBIgFAAQgDABgFgCQgFgCgFAAIABAEQAAABAAAAQgBABAAAAQAAABgBAAQgBAAgBABQgGACgCAFQgCADAEABQAAAFgDACQgDADAAAEIAAAEQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgDAGQgDgKgIgBQgCgBgDACQgHAHABAKIABAEQACAJgIADIgJAEIAAAAIgDABIgDgBg");
	this.shape_4.setTransform(22.3,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AhuFPQACgTALgQQALgQAEgUQAFgSgDgSQgEgSgGgRQgHgUAPgSQAFgLgRgLQgQgKgDgRQAPAEAVgEQAKgCAHgDQAIgEAFgFQAAAIABAJIAEATQACAJAAAHIgBAAIADAFIAAABIACACIABAEQAHAPgGARIgCAGIgBAQIAAACQAAAJgCAJIgGATIgDAJIgCAAIgBAEIAAAEIAAABIgBADIAAABIAAgBIABgDIAAgBIgBAFIgBAHQgGASACAUQAIADALgCQAGgCAEgDQAKgJAPgDIAMgCQgDAHAFAGQAEAFgDAFQgKARgTAAIgmAAQgGAAgFACQgOAHgPABIgCAAQgPAAACgNgAkHEdQACgTAMgQQALgQAHgRIAOgkQAHgTAIgRIAFgKQAHgMAMgFQAGgCAHgBQgHABgGACQgCgSgIgSQAIADANgCQANgCAHgDQAGAOALAHIAAAXQAAATgJAQQgIARgOANQgOANgHASIgPAjQgIAVAdgDIAHgDQARgHANANQgGADgGADQAGgDAGgDIAIgCQAIgBgBAHQAAAJgIADQgRAIgTABIgnAEQgSACgTAAIgCABQgVAAAEgVgAhbgbQgKgFgMAAQgogDgbgcQgHgHgFgIIgDgGQAMgMALgQIAWgeQALgPAJgQQAJgRANgNQADgEAEgBQAVgFADgTQADgSgBgTIAAAAIAJgEQAIgEgCgIQACAHAIADIABABIAGABIAAAAIAAAAQAEAAAFgDQgFADgEAAIAAAAIAAAAIgGgBIgBgBQgIgDgCgHIgBgFQgBgKAHgGQADgCACAAQAJACAEAJIADgFQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAgBIAAgDQAAgFADgCQADgDAAgEQgEgCACgEQACgGAGgCQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBIgBgEQAFAAAFABQAFACADAAIAFAAIAAABIABAHIACAKIABABIAJAPQAEAJAMgCQAIgBgCAHQgBAEgDACIgEACIAAAAQAEAJgCAJQgBAJgKAAIgDgBQgFgBgEgDIgFgHQAAAFAAAEQACANALADIACAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBQgDAJgGAIQgHAJgIgFIgDgBIgNgHQgGgDgBgFQABAFAGADIANAHIAAAAIgDATQAAAFADABQgHACgHAGQAHgGAHgCIABAAQAIgCANAEQATAHAKAQQAEAHgCAGQARgMAQALIAEADQALAJAHALQAFgVATgKQAQgJASgBQATgCATgIQAGgCAAgFQABgLgEgLQgIgYAbAHQgBAFAOALQARgEgCgRIAFgDIAFgFIAHAPQAGAMgHALQgEAIgIAAIAFADQAFADgGAFQgGAEACAIIgOAFIgOAIQgQAKAEgBIgcATQgfAXgiAMQgKAEgJgCIgIgCIgFAAQgMACgMgCQgHgBgIgCQgSgGgSgJIgDgBQgMgIgJgOQAJAOAMAIQABAUgSAIQgUAHgHAPQgBAQgQAEQgLADgCAPQgVAIABAIIgDgCgAgIlDQAAAAgBAAQAAABgBAAQAAABgBAAQAAABAAAAQgEALAIAHQAEAEADgDIAAAAQACgDgBgEQABgCgCgDQAAgHgBgCQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBgBAAIgDABgAgRlEQABgJAIgCQgIACgBAJgAg8kdIAAAAg");
	this.shape_5.setTransform(26.5,41.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#57B7EA").s().p("AiQFXQgJgFgDgLIABgDIAEgJIAFgTQACgJABgJIAAgCIABgQIACgGQAFgRgGgPIgCgEIgBgCIAAgBIgDgFIBmj+QAMACAMgCIAGAAIAIACQAHACAKgEQAigMAegXIAcgTQgkBvgnBpQgmBpgsBgQgRAJgNAGQgbAMgRAAIgBAAQgIAAgGgDgAgXhjIBOjNQBShSAUBSIghCQQgOgLABgFQgbgHAIAYQADALAAALQgBAFgGACQgSAIgTACQgTABgQAJQgQAKgGAVQgHgLgKgJg");
	this.shape_6.setTransform(37.2,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8B59E8").s().p("AiIFIQgKgEgGgHQAGADAJgBQARAAAbgLQAOgGAQgKQAshfAmhpQAnhnAkhyQgDACAPgLIAPgHIiqG7IgRAJIgRAIIgEABIgNAHQgJAEgJAAQgKAAgIgDgACVlKQADAKABAJIgCATIgDATIgDASIgDATIgEATIgCAGIgFAEQABARgQAEg");
	this.shape_7.setTransform(38,37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,55.3,78.1);


(lib.anim_mick_washer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ag5AlQgDgCgDgDQgHgGgGgIQgGgIgDgJQgEgHgBgKQgBgKABgJQACgKAGgGQAHgHAGgHQAGgHAIgFQAIgFAJgEQAJgDAKgDQAJgEAIACQABgEABgGQAFgIAJgFQAHgEAIgEQAJgDAJgBQAIgBAIAAQABAAABAAQAJABAIADQAFABAEACAAig0QAAgBAAgCQAAgBAAAAQgGAGgGAGQgHAHgHAGQgDADgEABQgBABgCABQgBAAAAAAQgBAAgBABQgKABgJgBQgHAAgHgCQAFAJAHAIQAFAFADAEQABADAAADQADAJACAJQACAJAGAIQAEAGAEAFQACACABABQAIAGAIAKAgDgZQAAAFgCAFQAAABgBACQgBABgBACQgDAGgHADAgJBjQABgDAAgEQABgHAHgCQAPgGATAAQADgBACAAQAHAAAHgBQACAAACAAQAIAGAJACQACABgBADQAAACgBACQADACADACQADABAAACQAEAJgJAHQgHAGgJAEQgJAEgKABQgJABgKAAQgJABgKAAQgHAAgKgBQgJgCgIgFQgKgGACgKQACgJAJgEQgIgEgBgKQgBgKADgIQgBgBgDgCQgKADgJABQgHACgFgCQAAgEABgDQAEgJAGgKQAEAEADAFQAGAHAHAGAgVBfQAAgBAAgBQABgEADgDIABgBQACgCAFgCQAEgCAEgBQAGgCAIgCQAFgCAFgBIAAAAQACgBABAAQAKgDALAAQAGAEAEAEAAQA0QgGAAgGAAAgaBeQABAAAAAAQACABACAAQACgBABAAQABABABAAQgEAFgCACQgEAKAMADQAIACAHAAIAAAAQABAAABAAQAIgCAJAAQABAAACAAQAJgBAJgCQAJgCAJgCQAKgCgDgIQACgDgCgFQAAgBAAAAQAAgBgBgBQgEgIgIgEAAhBsQgCAAgDAAQgBAAgBABQgCACgDABQAAAAgBABQgEAAgDgBQACgEgBgDQAAgBAAAAQgDgJgJgGAAhBsQgBgDAAgGQgBgJgHgGAANBwQgBAAgBgBQgGADgEAAQgDgBgDgEQgFgFABgFQgDgCgEgCAAnBMQAHAKAEAIQACADAAAFABCBZQADAAACABQACABABAAABCBiQgCACgGACQgDAAgDAAQgDgBgDACQgGAEgHAB");
	this.shape.setTransform(16.4,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgjATQgJgCgIgEQgKgGACgJQACgJAJgEIABABIAEAAIADAAIACABIgGAHQgEAHAMAEQAIACAJgBIAAAAIACAAIAQgBIACgBQAJAAAJgCIASgCQAKgDgEgHQADgDgCgFIAAgCIAFACIACABIAHADQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQAEAJgJAEQgHAGgJAEQgJAFgKAAIgTACIgRABIgTgCg");
	this.shape_1.setTransform(18.7,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#964A01").s().p("AgjAXQgNgEAFgJIAFgHIgCgBIgDAAIABgCQABgBADgEIAAAAQADgDAFgCIAHgCIARgFIAIgDIAAAAIACAAQALgEALABIAJAHIgEABIgOABIgEAAQgRAAgSAGQgHACAAAGIgBAGIgIgDIAIADQgBAGAEAFQAEAEAEAAQAFABAFgDIACABQAEABADgBIAAAAIAEgDQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAFAAQAHAAAFgEQADgDADABIAHAAQAFgBACgCQAEAHgKADIgSAEQgJACgKAAIgBAAIgQACIgCAAIgBAAIgCAAQgHAAgHgBgAgeAGIAAAAg");
	this.shape_2.setTransform(18.5,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AABB6QgDAAgDgEQgFgFABgGIABgHQABgHAHgCQAPgGATAAIAFAAIAOgBIAEgBQAIAGAJADQABAAAAAAQAAAAAAABQABAAAAABQAAABgBAAIgBAFIgDgBIgFgCIgBgBQgEgIgIgEQAIAEAEAIIABABIAAACQACAFgCADQgCACgGABIgGAAQAAgEgCgDQgEgIgHgKQAHAKAEAIQACADAAAEQgDgBgDADQgGAEgHAAIgBgIQgBgKgHgGQAHAGABAKIABAIIgFAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABIgFADIgBAAQgEABgDgBIABgGIAAgBIAAgBQgDgKgJgGQAJAGADAKIAAABIAAABIgBAGIgCgBQgFACgEAAIgBAAgAgZBnIgBgBQgIgDgBgLQgBgKADgHIgEgDQgHgGgGgIIgHgIIAHAIQAGAIAHAGIgTAEQgHABgFgCIABgGQAEgJAGgKIgGgFIgNgOQgGgIgDgJQgEgJgBgIQgBgKABgKQACgJAGgHIANgNQAGgHAIgFIARgJIATgHQAJgEAIADIACgLQAFgIAJgFIAPgHQAJgEAJgBIAQAAIACAAIARADIAJAEIAAANIgFAGQgBAHgGAGIgCADQgLAHgOANIgDABIgPAPIAAgDIAAgBIAAgBIgMANIgOAMIgHAFIgDACIADgCIAHgFIAOgMIAMgNIAAABIAAABIAAADIgPANQgFANgNAKIgDACIgFAGQgGAYANARIACAEQAHAEAGAFQACACgBAEIgMAAIADADQAIAGAIAKIgKACIgOAFIgIACQgFACgCADIgBAAQgDAEgBADIAAACIgEAAgAgagBQAFAEADAGIABAFIAFATQACAJAGAIQAEAGAEAFQgEgFgEgGQgGgIgCgJIgFgTIgBgFQAHgFADgFIACgDIABgCQACgFAAgFIABAAIgCgEIABAEIgVABIgOgCQAFAJAHAHg");
	this.shape_3.setTransform(16.4,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAFAvQADgDADgEIABAAQABgCACgCQAOgTADgZQABgFAAgFAgSguQgRAOAEAd");
	this.shape_4.setTransform(18,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AAniEQgFgCgFgBQgIgDgIgBQgBAAgBAAQgIAAgHABQgJABgIADQgIAEgIAEQgIAFgFAIQgEAGgBAEAhEg8QgHAPgEALQAAABAAAAQgIAUAAAGQACAIADAJQAEAJAFAIQAGAIAHAGQADADADACQAEAEAEAFQAFAHAIAGQACACACABQgEAIABAKQACAKAHAEQgIAEgCAJQgCAKAJAGQAIAFAKACQAIABAJAAQAJAAAJgBQAKAAAKgBQAJgBAJgEQAJgEAIgGQAIgHgDgJQgBgCgCgBQgEgCgDgCQgBAAgBgBQgDgBgDAAQAAAAABABQACAFgDADQAEAIgKACQgJACgJACQgJACgKABQgBAAgCAAQgIAAgIACQgBAAgBAAIgBAAQgGAAgIgCQgNgDAFgKQABgCAEgFQgBAAgBgBQgBAAgCABIAAgBQAAAAABgBQABgEADgDIAAgBQACgCAGgCQADgCACgBQAIgCAJgCQAFgCAFgBQgCgCgCgCQgGgHgGgFQgCgBgCgCQgFgFgCgGQgDgEgCgEQgCgEgBgFQgCgJgDgJQgBgDgBgDQgDgGgEgDQgBgCgCgKIAAAAAgSBoQgCAAgBgBQgBAAgBAAAA8BUQgCAAgCAAQgHABgHAAQgCAAgCABQgTAAgSAGQgFACAAAHQAAAEgBADQgBAFAEAFQACAEAEABQAFAAAFgDQABABABAAQACgEAAgDQgBgBAAAAQgDgJgIgGAAbBQIAAAAQABgBABAAQALgDALAAQAGAEADAEQAIAGAKACQABABAAADQgBACgBACAAbBdQAIAGAAAJQABAGABADQgDAAgCAAQgCAAgBABQgCACgCABQgBAAgBABQgDAAgEgBAA4BUQAJAEAEAIQAAABAAABAA3BvQADAAAEAAQAFgCACgCAAqBVQAIAKAEAIQABADAAAFAAlB1QAHgBAFgEQADgCADABAgFBsQgEgCgEgC");
	this.shape_5.setTransform(21.6,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#964A01").s().p("AgjAXQgNgEAFgJIAFgHIgCgBIgDAAIAAAAIABgCQABgBADgEIAAAAQADgDAFgCIAHgCIARgFIAIgDIAAAAIACAAQALgEALABIAJAHIgEABIgOABIgEAAQgRAAgSAGQgHACAAAGIgBAGIgIgDIAIADQgBAGAEAFQAEAEAEAAQAFABAFgDIACABQAEABADgBIAAAAIAEgDQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAFAAQAHAAAFgEQADgDADABIAHAAQAFgBACgCQAEAHgKADIgSAEQgJACgKAAIgBAAIgQACIgCAAIgBAAIgCAAQgHAAgHgBgAgeAGIAAAAg");
	this.shape_6.setTransform(24.1,32.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AAJCDQgFAAgDgEQgDgFABgGIABgHQAAgHAGgCQARgGATAAIAEAAIAPgBIAEgBQAIAGAJADQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAIgCAFIgCgBIgFgCIAAACQACAFgDADQgCACgFABIgGAAQAAgEgCgDQgEgIgIgKQAIAKAEAIQACADAAAEQgDgBgDADQgGAEgHAAIgBgIQgBgKgHgGQAHAGABAKIABAIIgFAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABIgFADIgCAAQgDABgDgBIABgGIAAgBIAAgBQgDgKgJgGQAJAGADAKIAAABIAAABIgBAGIgCgBQgFACgEAAIgBAAgABJBpIABABIgBgBQgEgIgIgEQAIAEAEAIgAgSBvQgIgDgBgLQgBgKADgHIgEgDQgHgGgGgIIgIgIIgFgFIgNgOQgGgIgDgJQgEgJgBgKQgBgEAIgUIAAgBIAMgaQgEgeARgNIAEgLQAFgIAJgFIAPgHQAJgEAIgBIAPAAIACAAIARADIAJAEIAJAEQACAIgBAIQgBAUgTAKIghARIABgLIgBALQgBAbgOATIgDAEIgBAAIgGAGQADABACgEIAAAAQABAIABABQAFAGACAGIACAFIAFATIADAJIADAIQAEAGAGAFIADADIAMALIgGAHIgRAFIgFACQgFACgDADIAAAAQgDAEgBADIAAACgAAAg4IAAAAg");
	this.shape_7.setTransform(21.2,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:18.7,y:32.5}},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_1,p:{x:24.3,y:34.3}},{t:this.shape_5},{t:this.shape_4}]},2).wait(2));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AgGBWQgCAAgDAAQgDABgDAAQgTAFgTgCQgFAAAAgDQgDgMAHgSQAGgRAHgRQAAAAAAgBQAIgRAPgLQAGgFADgIQAFgQAGgSQAHgSARgJQAQgJAWgB");
	this.shape_8.setTransform(19.3,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("AB4lAQAGgDAIgBQAGAAAHABQACABADAAQAKACAGAIQAHAIADAKQACAIAAAIQAAAKgDAKQgBAHgDAHIAAAAQgBACgBABQgFAJgHAGQgBgCAEgHQAEgFAAgGQAAgCAAgCQAAgMgJAFQgEACgCAAQABgCACgDQAEgJgCgJQgCgKgJgGQgEgDgEAAQgEgBgEADQgDgDgFAAQgGAAgGABQgIABgGAGQgDADgDAEQgCADgCAEQgCAEgBAEQAAABAAABQgCAEgBAFQgCAEgBAFQAAADgBACQgBgCgBgCQgCgDgBgEQgCgFgBgGQgCgFABgGQABgCgBgBQgCACgCADQgDACgCAEQgCgFAAgEQgBgEABgGQgCACgCABQgCACgCADQgBgBgBgDQgBgCAAgDQAAgBAAgBQAAgBABgCQABgCgBgBQgCACgFADQgFgFACgIQADgKAGgIQAGgGAHgFQAJgFAJgCQAJgCAIACQAJADAIAFQAGAFAFAGQAAABAAAAgACBk4QAHgHAKADQAFACAEAEACjkmQgEgGgGgDQgDgBgDgBQgEAAgEgBIgBAAQgEgBgEAAACNj0QACgBACgDQAAAAAAAAQABgBABgBQABgDABgDIAAAAQAAgFgDgGQgJADgGAHQgEAGAAAFQAAgEAIAAQAFAAABAFQAAABAAAAQgCABgBABQgDABgDABQgCAAgBAAQgBgBgBgCQAAAAAAgBQAAgBAAgBAB3j7QAEgEACgFQADgGACgFQgHgIgJAFQgKAFgDAJQgEAIAEAEQAAgGADgCQADgCAFACQAEACADADQgDADgEACQgDACgDgBQgDgBgCgCAB2jrQAFAAADABQABAAABABQABACgDAFACmj2QgGACgIAEQgGAEgEAGQgBACgBACQgBADgCACIAAABQAAAAAAABQgDAFgFAEQgGAHgIAFQAAABgBAAQAIAGACAJQABAIgBAIQgBAHgFAHQAAABgBABQAQALABAUQABATgMAPQgFAHgDAIQARgBAQAIQAQAIAQAKQAHAFAHACQAKAEAMABQATACARAJQAGADAEADQALAHAHAJQANAPgcABQgBABgCABQgFAEgHgCQgDgCABgHQACgHgHgEQgJgCgKABQgGABAAAAQAIAKgUACQgSADAGgRQgFgFgIgDQgIgEgKgBQgTgCgSgGQgTgFgRgJQgQgJgHgRQgGgTgEgTQgEgTAFgSQgFADgGADQgIADgIACQgJACgJAAQgCAAgBAAQgIAAgFgCQgHgBgGgDAEJAQQAEgEACgGQgGgIgIgGQgIgGgIgDABDk8QAGgIALgBQAJAAAJABQADABADABQAFABAEADQACgBABgBABrk9QgJgCgIAEQgIAFgFAHQgFAHABADAAekIQgHgFACgLQACgNALACAAekIQABAAAAAAQADADADgBQADAAACgCABAi+QgCAAgBgBQgJgFgGgIQgFgIgBgJQgCgIAAgJABYjnQACAJAIAGQAHAEAIAAQAAAAABgBQgDADgDAEQgLAJgMgGQgHgEAAgIQAAgHAGgEQADgDABgCgAgbj7QAAAAAAAAQAEACAEADQAIAFAIAHQACgEAEgFQAHgHAIgGQAGgEAGgEAhUi0QAAAIAFAFQAFAGAGADQAHAEAHADQAFACACAAAhBh7QgIgCgGAHQgFAFgFAFQgGAHgDAIQgBADABADAAKh9QgEAIgEAIQgCAGgGADQgEACAAACQgBADgBACQgFAEgHACQgJAPgJgDQgJgDgKAAQgJAAgKACQgLADgDgBQgCAAgBgBIAAAAQAAgBgBAAQgCAAgCABAByjFQAAAAgBABQgHAFgIACQgKAEgKgBQgHgBgHgDAAxirQAAgCACgEQAGgIAHgFAA6iKQACgCADgCQAFgEAEgGAB1iWQgFAGgFAEAiSElQgSgCgSgFQgUgGgJgQQgIgQAOgRQAMgOAKgPQAJgRAMgOQAKgLAKgLQAOgPgHgUQgGgRgEgYQgEgZgSADQgSAEgGADQgGAEgEADQgFACgDABQAAABgBAAQACATAIAQQAGAPgQALQgQALgIASQgJARgCATQgDAUgGARQgDAIgHAFQgRAMgCATQgCAWAXAEQASADAQAJQAQAJAPALQATAOAOgMQAEgDgEgEQAHAEAGgDQAFgDgEgDQAEABACgBQAHgEAGgBQAKgDABgKQABgPgOgBQgHAAgGADQgEADgDAEAhaA4QAOAPAGAHQgLAJACARQACAUALASQAHAOAHAOQAJATgCAWQgBAQgFAPQgGARAJANQAGAJAMACQAMACAIAGQAFAFAGgGQAQgNARgKQAEgDAFAAQgMgHgLgHQgMgHgGgMQgGgPABgSQACgagEgZQgCgQgFgOQgEgMgDgMQgCgKAGgGQADgEABgHQAAgHgLgEQgLgDgigBQghgBAKAGgAjABJQAFAJAJAGAgpBjQAHATgFAUAgdDsQgIANAMADAj6D+QgNAPAOAC");
	this.shape_9.setTransform(28.4,34.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAGAFIgBgBIAAgCQAAgDAJABQAFAAAAADIAAABIgDACIgGACIgDAAIgBgDgAgNADQgEgBgBgCQAAgEACgCQADgCAGACIAHAFIgIADIgDABIgCAAg");
	this.shape_10.setTransform(40.6,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9F9F9").s().p("AgbAiQgHgEAAgHQAAgHAGgFQADgCABgDQACAKAIAFQAHAFAHgBIAAAAIgEAGQgGAGgHAAQgFAAgFgDgAAbgFQgBgFgFgBQgIAAAAAFQAAgFAEgGQAGgIAJgDQADAGAAAGIAAAAIgCAFIgCACIAAABIgEAEIAAgBgAgLgVQADgJAIgFQAJgEAHAIIgFALQgCAFgEADIgFgFQgFgCgDACQgDACAAAGQgEgEAEgIg");
	this.shape_11.setTransform(39.8,10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AjFE5QgPgLgQgJQgQgJgSgDQgXgEACgWQACgTARgMQAHgFADgIQAGgRADgUQACgTAJgRQAIgSAQgLQAQgLgGgPQgIgRgCgSIABgBIAIgEIAKgGQAGgEASgDQASgEAEAZQAEAZAGARQAHAUgOAPIgUAWQgMAOgJARQgKAPgMAOQgOARAIAQQAJAQAUAGQASAEASADQgEACgDAFQADgFAEgCQAGgEAHABQAOABgBAPQgBAKgKADQgGABgHAEQgCABgEgBQAEADgFADQgGADgHgEQAEAEgEADQgGAFgIAAQgJAAgKgHgAj5D6QgHgBAAgFQAAgEAGgHQgGAHAAAEQAAAFAHABgAiyBDQgJgGgFgJQAFAJAJAGgAgKEOQgIgGgMgCQgMgCgGgJQgJgNAGgRQAFgPABgQQACgWgJgTIgOgcQgLgSgCgUQgCgRALgJIgUgWIAAAAQgKgGAhABQAiAAALAEQALADAAAIQgBAHgDAEQgGAGACAKQADAMAEAMQAFAOACAQQAEAZgCAaQgBASAGAPQAGAMAMAHIAXAOQgFAAgEADQgRAKgQANQgCADgEAAQgDAAgCgCgAgZDnQgHgCAAgFQAAgEADgFQgDAFAAAEQAAAFAHACgAgnB1QACgIAAgIQAAgMgEgLQAEALAAAMQAAAIgCAIgAD6AAQgDgBABgHQACgHgHgEQgJgEgKABIgGABQAIAMgUACQgSADAGgTQgFgFgIgEQgIgDgKgBQgTgCgSgGQgTgFgRgJQgQgJgHgRQgGgTgEgTQgEgTAFgSIgLAGQgIADgIACQgJACgJAAIgDAAIgNgCIgNgEIANAEIANACIgIAQQgCAGgGADQgEACAAACIgCAFQgFAEgHACQgJAOgJgDQgJgDgKAAQgJABgKACQgLACgDAAIgDgBIAAAAIAAgBIAAAAIgBAAIAAAAIgEABIgGABQgTAFgTgCQgFAAAAgDQgDgMAHgSIANgiIAAgBQAIgRAPgNQAGgFADgIIANgiQAHgSARgJQAQgJAWgBIAAAAIAAAAIAIAFIAQAMIAGgJIAPgNIAMgJIABABIABABIABAAIADABIAAAAIABAAQADAAACgCQgCACgDAAIgBAAIAAAAIgDgBIgBAAIgBgBIgBgBQgHgFACgKQACgNALACIAHgFIAAADIgBADIAAACIABAFIACAEIAEgFIAEgDIAAAKIACAJIAFgGIAEgFIAAADQgBAGACAFIADALIADAHIACAEIABgFIADgJIADgJIAAgCIADgIIAEgHIAGgHQAGgGAIgBIAMgBQAFAAADADQAEgDAEAAQAEABAEADQAJAGACAKQACAJgEAJIgDAFIAGgCQAJgFAAAMIAAAEIgOAGQgGAEgEAFIgCAFIgDAFIAAAAIAAACIgIAJIgOAMIgBABQAIAGACAJQABAIgBAIQgBAHgFAHIgBABQAQAMABAUQABATgMAPQgFAHgDAIQARgBAQAIQAQAIAQAKIAOAHQAKAEAMABQATACARAJIAKAFQALAHAHAKQANARgcABQAEgEACgGQgGgKgIgGQgIgGgIgDQAIADAIAGQAIAGAGAKQgCAGgEAEIgDACQgDABgFAAIgEAAgAhihsIAAgDIAAgDQADgIAGgHIAKgKQAEgFAFgBIABAAIAAAAIAEABIAAAAIAAAAIgEgBIAAAAIgBAAQgFABgEAFIgKAKQgGAHgDAIIAAADIAAADgAA/ijIgFAEIAFgEQAFgEAEgGQgEAGgFAEgABrihQAFgEAFgHQgFAHgFAEgAhPi8QAFAGAGADIAOAHIAHACIgHgCIgOgHQgGgDgFgGQgFgGAAgHQAAAHAFAGgAAojyQABAJAFAIQAGAIAJAFIADABQgHAFgGAIQgCAEAAACQAAgCACgEQAGgIAHgFQAHADAHABIACAAIABAAIACAAIAAAAIABAAQAHAAAGgDIABAAQAIgDAHgEIABgBIgBABQgHAEgIADIgBAAQgGADgHAAIgBAAIAAAAIgCAAIgBAAIgCAAQgHgBgHgDIgDgBQgJgFgGgIQgFgIgBgJQgCgHAAgHIAAgDIAAADQAAAHACAHgABUj3QgGAEAAAHQAAAIAHAEQAMAGALgJIAGgHIgBAAQgIABgHgEQgIgGgCgJQgBACgDADgAB+j3QACgEAAgCIAAgBIgCgBIgCgBIgDAAIAAAAIAAAAIgBAAIgCAAIACAAIABAAIAAAAIAAAAIADAAIACABIACABIAAABQAAACgCAEgACDkWQgEAGAAAFIAAACIAAABIACADIADAAIAGgCIADgCIAEgEIAAAAIACgDIACgFIAAAAQAAgGgDgFQgJADgGAHgAByknQgKAFgDAJQgEAHAEAFQACABADACQADABADgCIAHgFQAEgEACgFIAFgLQgEgFgGAAIgGACgAEJgDIAAAAgAhmheIAEgBIAAAAIABAAIAAAAIAAABIAAAAIgFAAgAhmheIAAAAg");
	this.shape_12.setTransform(28.4,36.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFEF97").s().p("AA2AwQAEgFABgHIAAgDQAAgMgKAFIgFACIACgFQAEgJgCgKQgCgHgIgGQgFgDgEgBIACgJIAIACIAGACQAGADAEAGQgEgGgGgDIgGgCIgIgCIgBAAIgHgBIAHABIgBAJQgEAAgEADQgDgEgFABIgMABQgGABgGAGIgFAFIgEAHIgDAIIgBACIgDAJIgCAJIgBAEIgDgDIgDgHIgDgLQgBgFABgGIAAgDIgFAFIgFAGIgCgJIAAgIIgDACIgFAEIgBgEIgCgDIAAgCIABgDIABgEIgIAGQgEgFACgIQACgKAHgIQAFgGAIgFQAIgFAKgCQAIgCAJACQAJACAFAFQAGAGAFAGIgCACIgJgDIgFgCIgRgBQgLAAgGAJQAGgJALAAIARABIAFACIAJADIADgBQAGgEAHAAIANABIAGABQAJACAHAIQAGAIADAKQADAHgBAHQAAAKgCAKQgCAHgDAGIAAABIgCADQgEAIgIAHQgBgCAEgHgAgggIIgBgCQAAgDAEgFQAGgHAIgFIABgBIAAAAIAAAAIABAAQAEgCAEAAIABAAIAAAAIACAAIABAAIABAAIgBAAIgBAAIgCAAIAAAAIgBAAQgEAAgEACIgBAAIAAAAIAAAAIgBABQgIAFgGAHQgEAFAAADIABACgAAmgfQAFACAFAEQgFgEgFgCIgBAAIgFgBIAAAAIgBAAQgFAAgFAFQAFgFAFAAIABAAIAAAAIAFABIABAAgAAegWIAAAAg");
	this.shape_13.setTransform(39.2,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,58.9,70.4);


(lib.goNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,11.3).s().p("AhLAqQghgSACgYQgCgXAhgRQAggTArAAQAsAAAgATQAfARAAAXQAAAYgfASQggASgsAAQgrAAgggSg");
	this.shape.setTransform(22.8,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AhThcICoBdIioBcg");
	this.shape_1.setTransform(25.1,20.4);

	this.blinker = new lib.general_buttoncolor();
	this.blinker.setTransform(23.4,20.1,1.5,1.5,0,0,0,11.9,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,14.8).s().p("AhiA3QgrgXACggQgCgfArgWQApgYA5AAQA5AAAqAYQAqAWAAAfQAAAggqAXQgqAXg5AAQg5AAgpgXg");
	this.shape_2.setTransform(23.4,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AAACxQhIAAg0g0Qg0g1AAhIQAAhHA0g1QA0g0BIAAQBJAAA0A0QA0A1AABHQAABIg0A1Qg0A0hJAAg");
	this.shape_3.setTransform(23.3,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.8,0,0,-0.8,0,24.9).s().p("AisCkQhFhEAAhgQAAhgBFhDQBEhFBhAAQBfAABBAwQBCAwAVCqQAVCskMAbQhhAAhEhFgAgHCQQBEAAAzgwIABAAIADgEQA0g0AAhHQAAhJg0g0IgFgFIgBgBQgyguhDAAIAAAAIgBAAIAAAAIgBAAQhEAAgyAuIgBABIgCACIgBABIAAAAIgCACQg0A0AABJQAABHA0A0IACACIABABQAzAxBHAAIAAAAIAAAAIAAAAIAAAAQhHAAgzgxIgBgBIgCgCQg0g0AAhHQAAhJA0g0IACgCIAAAAIABgBIACgCIABgBQAyguBEAAIABAAIAAAAIABAAIAAAAQBDAAAyAuIABABIAFAFQA0A0AABJQAABHg0A0IgDAEIgBAAQgzAwhEAAIAAAAIgBAAIABAAIAAAAg");
	this.shape_4.setTransform(24.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AioCqQhGhHAAhjQAAhiBGhGQBGhHBiAAQBjAABGBHQBHBGgBBiQABBjhHBHQhGBGhjAAQhiAAhGhGg");
	this.shape_5.setTransform(24.4,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AioCqQhGhHAAhjQAAhiBGhGQBGhHBiAAQBjAABGBHQBHBGgBBiQABBjhHBHQhGBGhjAAQhiAAhGhGg");
	this.shape_6.setTransform(24.4,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,46.7);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


(lib.contentsurfshopscene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.anim_surfguy();
	this.instance.setTransform(162.7,106.6,1,1,0,0,0,26.7,38.1);

	this.instance_1 = new lib.anim_mick_washer();
	this.instance_1.setTransform(98.2,120.1,1,1,0,0,0,28.4,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AL6oqQACAAADAAQgDgBgCAAIAAAAQgBAAAAAAIAAAAQAAAAAAAAQABABAAAAQACACACADQAFAJAEAKQAEAIAGAGQAEAEADAEQADgBACAAQALAAAKgBQAIgBAIABQAEAAAEAAQADAAACAAQACAAABAAQACABADABQABABACABQADABABACQAEADADACQgCgIgDgHQgDgGgDgGQgCgGgGgEQgJgGgJgEQgEgCgEgBQAHgBAHgBQAJgCAKgBQALgBAGAHQACADADADQADAEAEADQAHAGAFAIQAFAGACAHQABACABACQACAHAAAGQAEgCAGgEQAIgFAHgGQAAAAABAAQAIABAHAEQAEADAEADAKapGIADAAQAIgBAKgBQAIgBAIACQAIACAIADQAJAEAJADQAJADAHAGQAEADAEAEAM4okQgFgCgEgBQgGgCgGgBQgKgCgJABQgJAAgIABAONojQABgKgCgJQgBgHgDgIQACgEgFgGQgEgGgHgGQAFgDAFgCQAJgEAKgCQAJgCAKAAQAJAAAJAEQAGADAEADQABAAAAAAQABABABAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQgLAAgJACAONpPQAIADAEAHQACADACAEAOEojQgFgBACgFQAGADAGADAPIpdQgDAEgDAEQgFAGgBAIQABAKAAAJQAAAFACAGIAAAAQAAAAABAAIAAAAQAGgDAJgDQAJgDAJgEQAIgEAJgFQAIgFAIgFQAIgFAHgHQAHgFABAGQACgBADgBQALgBAGAJQAFAIgBAJQgBAKgJACQgCABgCgBQgJgDgKACQgJACgJAEQgIAEgIAFQgIAEgIAFQAAAAAAAAIAAABQgBAAgBAAQABAAABAAIAAAAQABAAAAAAQAKgBAJABQAJAAAKAAQAJABAJgCQAKgDAHgDQAJgCAGAHQAGAGACAIQADAJgCAKQgCAIgEAIQgFAJgJAEQgLAFgCgNQAAgBgBgBQgBgDgEgCQgIgFgLABQgJAAgJAAQgJABgJAAQgIAAgJABQgHABgGAAAOgpMQABAFACAFAO0pQQgEAFAAAGAO/opIAAAAIABABIAAAAQAFABAAAFQABAGgEAFQAIAAAIAAQAGgBAGgBAO/opQgJgBgGAIQgGAHgGAIQgBABgBABQgDgEgDgDQgIgGgHgFAQapOQgHAIAHAHQAJAJAFgJQAFgIgIgFQgGgDgBAGQgBAEABACAETpfQAHAGAKgBQAHgBAHgBQAJAAAJgBQAIgBAHAAQAJAAAJgCQAJgCAJAAQAKAAAHAGQABABABACQACAHAGAFQABAAACABQABAAABAAQAHABAHAAQAIAAAHgBQAJgBAJgBQAHAAAHAAQAIAAAIgCQAIgCAIgCQAJgCAJgBQAHgBABAJQAAABAAAAQAFgDAIgBQAIgBAHgBQAJAAAIgBQAJAAAIABQAKABAJAFQAAAHAFAGQAEAEADAGQAEAJAAAJQAAAKgDAJQgCAGgCAHQAAABAAAAQADADACADQABADACADQABACABACQABADABAAQACgJAEgIQADgJAIgHQAFgFAJgIQAHgHAGgIQAFgIABgLQgFgDgEgBIgBAAQgBAAgBgBIAAABIAAgBQAAAAAAAAAGHohQgBgBgBAAQgJgCgJgCQgIgCgIgDQgFgBgFgBQgIgBgJABQgHAAgHgBQgCAAgDgBQgTAHgVAHQgBAGgDAGQgDAIgDAIQgBgEgBgDQgTAJgOANQgOAMAAAPQAAADABAEQADAOgUADQgTADgMAOAFQpTQAIAFAJAFQAIAFAKACQAJADAJADQAJADAIAFQAIAFAIAFQAHAFAIAEQAIAFAIAGQAHAHADAJQABAEABADAGSpNQABABACABQAHAFAGAGQAIAGAHAGQAHAHAJADQAIACAIAEQAIAEAFAHQACAEACAEQADgCAGABQAMABALADQALACALACQAGACAFAEQACABACACQABABABABQADADADADQADADADADQABADADACQAAAAABABQAAgBgBgBQgBgCgCgDQgDgFgDgGQgFgIgDgJQgCgFgCgFQgBgDgBgCQgEgHgEgIQgDgIgFgIQgEgHAAgJADSmjQAAgDABgDQACgPAIgIQAIgIAIgGQAPgMAQgLQALgHADgLQACgHAFgEQANgOASgGQASgFASgEQARgDAQABQABAAABAAAHspJQAGAEAEAFQAFAFADAGQAFAHAFAIQADAGAEAFAJfpOQAIAFAIACQAJACAJAAQAKAAAJgBQADAAADAAAMLnsQgEgEgEgBQgJgEgIgEQgLgGACgKQABgGgDgFQgFgJgIgGQgGgGgJgBQgKgCgEgHALJnsQgIABgDgBQgKgBgIgHQgJgJgJgJQgEgFgDgGQgCgFACgJAIImUQALgMAOgJQAQgLAPgLQAPgLARgIQARgIATgCQATgCASgFQAOgEASgFAJooEQgBAAAAgBQgKgGgKgCQgPgDgOgEQgHgCgGgCQgEgBgBgBAJEmDQAIgBAGAAQAJgBAIAAQAKABAKAAQAKAAAJAAQALABAIgEQADgCAAgEQABgLgKgFQgCAAgCAAQgKgBgJAAQgKAAgJAAQgJAAgJAAQgKAAgJAAQgKgBgJABQgJABgJACQgJACgKABQgFABgDADQAAAAgBABQADABACABQAKACAJACQAFACAFAAQACgBACgCQAKgDADAKQABAAACABQADABAEACgAJfllQgBgGAFgGQAFgFAFgEQgDACgCgBQgHACgHgDQgJgEgJgEQgCgBgCAAAIulzQABAAABAAQACAAABABQAJACAJADQAJADAJADQAEABAEABAI6mHQgLgBgCAMQgBADABACQAAABAAABQAAABABABAIhlwQABgBABAAQADgBACgBQADAAADAAAIhlwIAAAAQgFgJAGgJQADgFAEgEAIPl9QAJAIAJAFAIalNQAAASACASQABAQACAQQACARADARQADASAFATQAFATAFATAJLk6QADgEAEgEQAHgGAJgDQAKgEgCgLQgCABgBgBQgDAAgDgFQgBgDgBgDAJ+l8QgBADgCABQgBAAgCAAQgHABgEAHQgDAGgBAHQgBABAAABQgBAEAAADQABABACgBAJLk6QACADABADQAIASAAAUQABASgBARQAAABAAAAQgCAFADADAJplCQgBAHgBAHQgBAKgCAJQgBAGgBAFQgBAKgBAJQgBAKgCAJAIVgTQgCgFgDgIQgGgCAFgPQAOglgQgmQgPgkgMgkQgMgkAMglQAMgmASgjQAKgJAHgRAIolzQgGAYATAKQAOAJAIAOALFl1QACgBACgBQAHgEAIgCQAKgDAFAJIAAAAQAHgCAJAAQAJAAAJAAQAJgBAJABQAJAAAIAAQAFgBAFACIAAgBQABgCACgCQACgFAIgBQAJgBAJACQAHACAHACQgCAEgCADQAGgBAFAAQAIgBAJAAQAHAAAGgBIABAAQgBgBAAgCQgBgGAGgGQACgCADgCQAAgCAAgCQABgJAAgJQAAgJgBgKQAAgIAAgIQAAgKgBgJQAAgJgEgHQgBACAAADQgEgEgDgDQgGgIgJgEQgI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gEAHgDQAJgDAAgHQABALABAKQABAFgBgBQABACABABQABADgCABQAAAAgBABQACAcgBAQQgCASAAATQAAASAAATQAAATAFATQAGASAIARQACADgBAEQgFAAgEAAIgBAAQABAAAAAAQADAGABAEAO1mCQADABgDACAOKlZQAAgCACgCQAAgBABgBQADgEAGgCQAHAFAIACQAKADAIgDANnoZQAHAGAHAHQAFAFAFAGQAEAFABAHAONnqIAAABAMToWQABAIAKABQAJAAAIACQAIACAJABQAFAAAGACAMLnsQgBAAgBAAQgGABgGABQgHABgHABQgHABgHgBQgIAAgIgBQgHgBgBgCAMpnpQgEAAgEgBQgEgCgFAAQgGgBgHABAMYn8QACADACAEQAFAHAIAFQADABACACALll3QgDgBgFADQgDABgBACQgCAEgCAEQgEAHAHACQADAAADABALnl3QAAABAAACQgBgCgBgBQABAAABAAgAL7kuQAKgRAVgHQAOgEAPgDQADAAADAAAOLlzQgCgDAAgEAOMlmQAAgBABAAQACgBACgCQgBgBgBgCQgDgDgBgDQAAAGABAHgANFl2QgCABgCAAQgHACADAKQACAJAFAJQAEAFAIAGQAIAFAIAFQAJAFAFAIQAEAIAJAEQADABgBADQAGARgHATQgEALgCALQgDASAFATQAFASACATQABAUgIASQgHASgGATQgFASgCATQgBAOgCAPQgDATgIAHQAEAAAEABQAIAAAJABQAKABAKAAQAJABAIgFQAAAAABgBQAAgDAFAAQABgBAAgCQACgIABgJQABgJACgKQACgJAAgKQABgJAAgIQgBgKgDgJQgCgJgBgJQgBgKgBgJQgBgHAAgGQANgJALgBQAFAAAGABQABAAACAAQgHgCgHABQgHAAgHABQgEABgEgCQgDgBgCgCQABgTAAgTQABgTgBgSQgCgTgBgTQgBgUgDgTQgDgTgEgSQgFgBAAgDQAAgBABgDQABgDAFgCANFl2QADACADAAQAEgBAFAAANfl3QgBAAgCAAQgEABgEABQgIgCgHABANElXQAHgBAHgBQAJgBAIgBQAJgBAJAAQAIAAAIgBAM2lWQABAGAAADAM5k4QgIANgGAOQgIAQAAASQAAASABATQABATAGASQAFAQAGAQQAIARACATQACATgEATQgEATgGATQgEAMABABAL2inQgEARgIAOQgLARgCATQgDATgBATQgBANgCANQgEASAEARAPKiYQABAJAAAGQgBAIgBAHQgBAKgBAKQAAAJgCAJQgBAIgCAIQgCAJAAAKQgBAIAAAJQgBAJAAAJQAAAKACAHAOpi3QACAJgCAIAOzixQAAAJAEAHAOEojQAGADAGAHQAHAIAGAGAOaiPQAAgDACgHANvodQAMgHAJABAQAAEQAHAGAEAKQAGASgJAQQgGALgKAEQgHgDgJgDQgJgEgNABQAAADgBACQgBACgDACQAAAAAAAAQABAFAAAHQAAAJgBAJQAAAJABAIQACAKACAMQgBABAAABQgBABgBABQgBABgBABQAAAAgBAAQAAADgBACQAAACAAACQABAIAEAGQAEAHABAJQAAAJgFAJQgDAEgBAFQgBACAAACQgBACAAABQgBAFAAAEQAAAJgBAJQAAAJABAKQAAAJABAJQABAJADAJQACAJAEAJQACAGAAACQgCAHADAJQADAJACAJQACAJACAJIAAABQACAJgDAKQgHABgHADQgIAEgJACQgIABgIgDQgJgEgIgFQgCgBAAgBQAAgIACgKQABgJABgKQABgJABgKQAAgJABgKQABgIABgJQAAgKgBgJQgBgKgCgJQgCgKABgJQgBgBAAAAQgEgEAAgGQAAgLADgKQAEgLgGgJQgEgFAAgHQgBgGgBgHQgBgFAAgEIAAgBQgBgCgBgDIAAAAQgBgFABgIQABACADABQABABACABQAIADAIACQAJADAJgCQAJgBAGgGQABgCACAAAPCANQALAAAJgBQAKgCAJgCQAKgCAKgBQADgBAAAAQgIAFgEAIQgEAHgCAHQgDAJACAKQACAMAIgCQACgBACgBQAGgGADgKQACgKgFgIQgHgJgCANQgCAJAAAKAOkAQQADgCACgBQAIgGAJgCQAEgBACgBQAGAAgDAIQAAABgBABAOfATQADgBACgCAOrAfQgGAFgFAHQgGAIABALAOyAZQAAAAAAAAQgDgBABADQgCABgCACQAAABgBAAQAJAEAHAFQAHAGAEAIQADAGADAFQAAACABACAOwAbQABgBABgBAPSA8QABgHgHgHQgMgKgOgLQAEgDAFgDQAFgCACgEAPdAjQAFACAEACAPiARQgDACgEACQAPAFgDAA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BQAAgGABgFQgBAFABAEQADgDADgCAG9AHQAAAEAAAFQABAVABAVQABAbgIALQgBAoAGAoQAFAnAAAnQAAAoAKAlQALAqgzAAQgNAAgBgPQgBgQAFgWQAJglAFgnQAGgmgEgmQgEgmgGgqQgQgMAJgeQAEgQADgPQgDgBgCgGQABgFABgDIi7AOAG9AHQAAAEAAAFQgIgEgHgKQgIAQgGgDAGlgNQgGAGgCAHIAAAAAG4BgQgPgCgJgGALDEuQADgGAEgJQACgFAEgDAiTqsQAHABAHAAQAKgBAJAAQAKAAAJgCQAJgCAGABQAEABAEAEQAGAGAHAFQAHAGAIAFQAHAGAJACQAJADAJACQAFABADADQACADABAGQABAKAAAKQAAADAAACQABAHABAGQADAKADAKQgDgBgEgCQgBgBAAAAAgSpYQgCgCgCgDQgFgHgFgIQgFgIgGgIQgFgIgJgCQgJgCgJABQgJAAgKABQgJAAgIgDQgKgCgJgEQgIgCgIAAAhcqiQAFAIAHAGQAHAFAJADQAJACAKACQAKABAIAFQAIAFACAKQABAEACADAg5pfQgCAAgCAAQgDAAgCAAQADgBACgBQABgUgGgNAiznzQAKgMAPgHQASgIATgFQATgFASgFQASgGARgFQARgFAOgMQAJgHAHgEQgGgDgGgHQgEgFgEgFQgYgGgPgBQgTAHgQAKQgPAKgMAOQgNAOgQAJQgRAJgSAHQgSAHgOALQgQANgFAMQAJABAJAAQAEAAAEAAQALgKAPgFQACgBADAAQASgCARgDQASgEATgDQATgDARgEQATgDARgHQAQgGARgFQARgGAPgNQAGgGAGgFQAEACAEABQAHADAIABQAJACAKABQAEAAAEABQgSAAgRAIQgHADgIABQgTAFgRAJQgPAJgRAJQgRAKgRAIQgRAIgSAJQgSAJgTgFQgLAAgGAMQgGgBgGgDQgIgDgIgEQgHgDgGgDQACAEACAEQADAIAAAKQgBAKgJAEQAGgCAGAAQACgBADAAQAGgBAHgBQACgBABAAQAIgBAJAAQAKgBAJACQAKACAJACQAJACAKACQAJABAJABQAIABAJABQABAAAAAAQAIABAIABQAJACAIABQAFAAAFABQAFAAACABQAJACAIACQAGABAHACQADABADABQAIACAKgBQABAGAGADQAEACADgBIAAAAQAEgCABgFQADgJAAgJQgBgLgGgHQgBgBAAgBQgGgFgGALQgEACAAADQgEABgEAAQgCAAgCAAQgKAAgKgBQgJAAgJgDQgCgBAAAAQAKgWAUgFQARgEARgFQAOgEAOgCQAFgBAFgBQASgCASgCQAUgBARgHQASgHAPgNQAOgNAQgKQAGgEAAgFQgFgHgIgFQgIgFgJgFQgFgDgHgBQgHgCgHgCQgHgCgGgBQgEAAgDgCQgDgCgCgBQgDgCgFABQgBgFgCgEQgCgHgEgFQAHACAIAAQAJAAAIgBQAIgBAJAAQAJABAJgBQAJgBAIgCQAKgCAJAAQAJAAAJACQAGADACAGQAAACABACQAAAIAAAJQgBADAAADQACABABACQAFAIALAFQAEACAFACQADABADAAAACphQACAIAHAGQAGAGAFAFQAGAHAHAEQADACAEACAgCqDQAGAFAJACQAJACAJABQAJAAAJABQAJAAAJAAQAKABAKABQAJABAJABQAKAAAJADQAKADAIAGQACABACACAA2pnQAFAHAJADQAJACAJACQAJABAIAEQAJADAIAGQAJAFAIAGQAFAEACAGABcouQADABAEAAQAJACAKACQACAAACAAQAGACAGABQAIADAIAFQAHAFAGAHQAGAHAEAGQgBgCAEgEQADgEACgFQADgJgIgIQgHgHgEgJQgFgJgCgJQgCgFgBgEAC9paQAIAAAHAAQAJABAJABQAJABAGAGQAHAGAEAIQAFAIABAJQABAGACAAAETpEQAAAFgBAGQgBAJgCAIQgBAEgBADAmFrNQAHgDAJABQAIAAAIAAQAIgBAJgBQAJgBAKAAQAIAAAIADQAKADAIAEQAIAFAHAHQACACABACAmFrNQACADABADQACAFADAFQABAEACAEQAEAIAFAIQAFAHACAIQADAIgFAIQgBABAAAAAl9q9QAKABAIAAQAKABAJAEQAJADAIAFQAHAEAHAFQAIAGAFAIQAFAIAGAHQAHAHAIAGQAHAGAHAGQACACABACAoFruQAGgFAJAEQAJAEAKAAQAJABAJABQAKAAAJAAQAJAAAJACQAKABAJAEQAJAEAGAIQADAEACAFAncrcQAKAAAJABQAJAAAIAAQAKABAIADQAJADAFAJQAEAIACAIQACAIAEAHQAFAJAAAKAnkq/QACACAFACQAIAEAJACQAKACAJAGQABABACACQAFAEACAFQAGAOAGAOQABADADADQgMARgSAJQgRAJgQALQgPAKgQAKQgRAKgUAEQgTAEgHASAnkq/QACgFACgFQgCgGgGgHQgHgHgIgFQgIgGgGgGAoKq/QAEAJAEAJQAEAJADAJQAAADAAABQAFgJAEgHQADgJAGgIQACgDADgEAp8onQAHgJAJgGQAQgJAPgLQAPgLAQgJQAPgJARgFQAVgHADgUQAAgEACgCQALgMAQgIQARgIASgBAlFpnQgPAHgQAFQgRAGgRAHQgSAIgRAHQgSAIgRAIQgRAIgSAHQgSAHgIANQAEAAADAAQAOAAALAEQAGgBAEgIQAIAGAKABQAJABAKACQAJADAKAAQAIgPARgIQAQgIASgGQANgFANgEQASgCAQgIQAJgCAJgDQAHgDAHgEQARgJArgMQgCgBgCgBQgNgGgRgDQAAAAgBgBQgDgFgDgGQgEgJgDgJQgCgJgCgJQgBgKAAgJQAAgIgEgFQATgBATACQATACASAAQAFAAAEAAQAPABAOAEQAGACADACQALAIgIAQQgBABgBACQgHAOgKAMQAPAJAUACQAUACASAIQABABABAAQANAFAJgDAmfp/QACACACABQAEACAEACQAEADAFADQADACACAEQACADABABQAEgHAGgIQAGgGAFgIQgBAEACAEQADAFAEADQAHAEAHADQAHADAHADQACAAACABQAHACAHACQAHACAHAAQAGAAAGAAQAHAAAGABQAGAAAHABQAEAAAFAAQAEABADABQADABAEABQACABABABQgBgBgBgCQgFgDgDgFQgCgCgCgDAlSoyQAFgBAEgCQATgFARgHQADgBAEABAk8ntQARgIARgJQAPgIAQgIQAQgJASgEQARgEAQgIQARgIAQgIQAPgIAPgIQAOgHASgSQAAgBABAAAi5q1QANAQgDASQgCAKgHAHQgPAPALATAjUpdQAQAIAIAQQADAGACABQABgMACgLQADgTAMgNQABgBABgBAiVnPQADAAACAAQAJABAIABQAJAAAKABQAJAAAJACQAJABAKABQAJAAAKACIAAAAQACgGAGgHQANgPARgIQAQgIASgGQATgGATgGQATgHASgHQATgHAIgQAi+ngQgCgEgCgCQgBABgBAAQgCACgCAAQgF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AHQAFAHgCAJQgCAIgHAEQgDACgEAAQgFADgFACQgIACgJAHQgBgCgCgBQgHgGgKABQgKABgJACQgKABgJACQgJABgIACQgJABgHACQgBgCgCgCgAsvsMQgCgCgBgDQgFgHgHgHQgHgHgCgMQAGgHAIgCQAIgEAJgCQAIgDAJABQAKAAAHAHQADACABAEQgDAIgBAKQgCAJgCAJQAAAEgBADQABgDAAgDQABABABAAAq1rUQgDgCgDgBQgJgCgKAAQgJABgJgBQgKgBgKAAQgKgBgIgDQABAYABAQQABARgBASQgCATgBAUQgBATgCAUQAAACgBADQARAFANABQgCgHgBgKQgDgTADgTQAEgUAMgOQAMgPAMgOQAOgQAQAFQABABABABQAHAGAJAEQADACADABQgVAXgTAeQgUAiAEAgQgHgBgGABQgCgFgIAAQgGAAgGAAApXqJQADgFADgHQgEgGgCgHQgEgJgFgIQgFgIgFgJQgEgHgGgHQgHgHgGgIQgGgGgGgGQgHgGgHgFQgIgGgIgGQgIgFgJgEQgLgFgFAIAsGsGQAKgBAJACQAKACAJADQAFACAGADQAIADAJAEQAJAFADAJQACAFAAAGQAAAEABADQABAGABAFQACAIAHAGAsFsMQAAACAAADQgBABAAAAQgBAGgEAEQgBACgCACQgFAEgCADQAAABAAAAQACACACADQADgDACgEQABgCABgBQgBgBAAgBQAAgDAEAAQALgBgHAIQgBABAAABQgHAHgGAIQgFAHgJADQgBAAgBAAQgIADgKADQgIgDALgFQACgBABgBQAAgCAAgCQAAgEAAgDQAAgKgEgKQABABACAAQAHAEAHAGQAAABABABQAFAEAFABQACgBACgBAsar4QAAAAABgBQAEgGAGgGQADgDABgDAsLr3QAAgCAAgDAsDrzQAAAJgBAHQgBADgBACIAAAAAsVrxQgDgDgCgEAswq5QACgBADgCQAIgFAHgGQAIgFAHgHQAEgFADgGAsvsMQADACACABQAAAAABABQAJAFAEAIQABACABABAtAsKQAAACADADQAFAGAHAEAtAsKQgBgFAIgDQAFADAFADAtBrgQAEAAADAAQAFgBAIABAvGqFQAAgGALgBQAJgCAIgFQAIgFAHgFQAIgGAJgFQAHgFAIgFQAIgFAIgGQAIgGAHgFQAHgGAHgGQAFgEADgDQACgDADgCQgKABgJADQgKAEgIgEQADABAEgEQAHgHgBgJQAAgKgEgJQgEgKgKgDQgCABgCABQgCACgBACQABgCACgCQADgFAEgDQAIgGAKAIQAEAEAEACQAFADAJAAAsoreQADgIAFgKAstrcQADgBACgBQAKgEAJgHAtmrcQgEAAgEgFQgGgHAAgKQgBgIABgIQAAgCAAgCQABgBABgCAtTqpQABAAABAAQAIgFAIgEQAHgEAGgDQACABACgBAuEqIQABgBACgBQAHgGAJgFQAHgFAIgFQAIgFAHgFAshrYQgHAGgHAEQgHAFgEAFQgCADABADQADAFAEAAAsuo8QgBgHAAgGQAAgUACgTQABgKgBgKQAAgHgBgGQAAgDAAgDQgDgQABgSAsuqRQgBAHACAGQgiAfgDAkQAHABAHABQALACALABAuOo0QAMAAALADQATAEATADQAFABAEABQgCAJgBANQgBAZgGAWQgBAGgCAHQgLAjgVAiQgLATgEAKQAAgPgHgNQgVgkABgoQACgpAPgvQgHAAgHABQgBAAgBAAQgMABgNABQgRABgRgDAuIpDQAQABAPAAQAMAAALABAsuocQAAgFAAgEQAAgLAAgLQAAgBAAAAAsLpAQgBAPAAAQQAaAFATABQABAAAAAAQACgDACgDQAAgDACgEQACgIgBgFArKo1QAHABAJACQAEABAFACQgDgFABgPQABgSADgSQADgSAMgQQAJgNAPgHApIr6QAJABAIACQAKACAIAFQAIAEAIAGQAGAFAIAEQAKAEACAKQADAJABAKAqMr7QAJAAAKAAQAJABAKgBQAJgBAKgBQAJgCAKgBQAJgBAKAAQAFAAAFABQAHAEAIAEQAIAEAHAGAoKq/QgFgIgFgIQgEgIgIgFQgIgGgKgCQgJgBgJgCQgHgCgIgCQgHgCgHABQgCAAgDAAQADACACABQAHAFAEAGQADAHADAIQABADABAEIAAAAQABAGABAFQACAKAAAJQAAAJAAAIQASgOAPgNQAFgFAHgCApOrIQAHgBAIABQAKAAAJACQAJADAJAAQAJABAHADApmrsQgFgDgGgDQgJgEgJgCQgFgBgEgCAqqsQQAEADADADQAHAGAIAFQADADAFABAqSqsQAFADAFADQAJAEAIAFQAHAFAIAFQAIAFAIAFQABAAAAAAQgLAYgDALQgGASgIASQgHAMgCAPAqxovQAPAEAOAFQALAFALACQABgEABgEApKqZQAAAAAAABQgBAKAAAJQAAAGAAAFQABAEgBADApLp6QAAAAAAgBQgEgIgIgGAwDpaQgDgJAAgLQAAgHgCgFQgDgHAEgFQAFgHAHgDQAJgFAKACQAKACAEAKQgGAHgBAJQgBADAAABQgBABAAABQgIAFgIAGQgIAFgIAHQAEAAAEABQABAAABAAQABAAABAAQADABACABQAAgBgDAAQgBAAgBgBAv7qCQAIgGAJABQAEABAEACAwtpGQgBgGADgGQADgJAJgEQABABABABQADAEACAFQADAJgBAJQgBAIgHADIAAAAQgKADgEgLQgBgEAAgDgAwVo3QgGAEgIAGQgHAFgFAFQgCABgDAAQgKAAgDgLQgDgKAHgGQAGgHAKgCAvnpOQgGAHgIAGQgHAHgIAFQgDgBgDAAAvypXQAGACAEAGQAAABABAAQACADABADQACAFAAAGQAAAGgDAEQACgBABABQAHADACgDQABgCAAgFQgBgIgFgIQABgBADgEQAVABASAFQAKADAJABQACgVAaguAwFjtQABgLACgOQADgSgBgTQgBgTgBgTQgCgSgHgVQACgOAFgRQAFgTAAgTQABgUAAgTQABgTgBgTQgBgSgCgSQAAgBAAAAQgBABgBAAQgKAEADgMQgBAAgBAAQgFgBgEAAQgFAAgEAAAwBovQABgBABAAQAHgGAHgIQAFgGAIgEAvipPQgEgFgFgFQgLgIgFAIAwdpdQAMgBAJADQADAAACABAvGqFQAAACAAABQgBAKAFAJQACAFAFADQADACAEABQAGABAFgDQAFgHAHgGQAHgHAHgFQAFgFAGgEAvNqAQABgBAAgBQACgDAEAAAvipzQABAAABgBQAGgEAHgEQADgCADgCQgDAIACAIQADALAJABQgHAEgIAEQgIAEgGAGIAAABQgBAAgCACAvCpkQABAAABgBQADgBACAAQgCAEgFgCgAvepKQAAAAgBgBQgBgCgCgCAvfpSQAEgCABAFAugpFQAJACAIAAQAEAAADAAQAKgiArhEAvlozQACAQABATQACATgDATQgEATgCATQgBATgBATQAAAUAKAQQAAADAAADQgBADgCACQgDAPgCAOQgBADAAADQgEATgCAUQgCASABATQABAIAAAIQAAABAAACQAAAAAAABQABACAAADQAAAAABAAQAJgBAIAAQAKAAAKACQAIABAJABQAJABAJgBQAKAAAJABQAKABAJAAQACAAACAAAueozQgXAhgCAmQgBAlgEAlQgBAEAAAEQAPAdASAdQAJgHAPgNAv6l6QAMACALADQAAADgBADAvYkoQgEgHgDgIQACAEACAEQAFACgCAFQADAEACAEQALAUAGAEQgEgmADgoQACgiAEgiAvplSQAEAOAGANAt1jIQgBAAgBAAQgKgBgIgBQgKgCgKAAQgIABgIgCQgKgBgJAAQgKABgJACQgJABgKABQABACAAADQAAACgCAAQgCABgDAAQgCgCgDgEQgEgIgCgGQgCACgDACQgGAFgFAIQgCADgCACAwgj0QAEABAEACQAEABACAAQACgCAAgCQAHABAEAGQgBAGAAAFQAFADAFAFQgBABgBABQgFAFgFAEQABgKABgJAwgj0QADADAAAHQABAJgCAKQgCAKgHAGQgBABgBAAQgCABgBgCQgHgIACgKQAAgIABgHQACgJAFgGQABAAACABQADABADABgAwTjHQgBAAgBAAQgJABgJAAQgBAAgBAAAvxjoQAAABAAACQgDADgDADQgHgHgHgHAvxjeQABgCABgDQAAgCAAgCQgBAAAAAAQAAgDAAgCAvwjYQACADACADQAFAEABAFAvwjYQgCgBgBgCQABgBABgCQAAADABADgAwIjPQgDABgCACQgEACgCADAwJBHQABgIABgHQABgNABgLQABgSABgQQAAgUACgTQABgSgDgSQgCgTgHgTQgGgTgDgUQAGgQAEgSQAAgCAAgBQgBAAAAABQgFADgGgCQABgGADgEAvpi1QABAGABAFQABAEABAEQgOgFgSAMAvsjBQABAGACAGQABAGACAFQABADACAEQACAEACAFQADAGABADQgEALAAANQgBAQgBAQQgBARgBARQgBASAAATQAAASAFATQAEASADASQgBACAAABQAGADAGAGQALgMAQAAQAGAAACAFQADAIAHAGICCgJIAAgKQAAgRgBgQQgBgDgBgCQgHgRgKgZQgQgjgRgjQgQgigJglQgFgRgEgRQgEgNgDgNQgDgIgCgHQgMglADgoQACgqApAGQgJAAgFAWQgIAlAGAnQACAPAEAPQADAOADAOQADAJACAJQALAlAQAjQAQAiAQAiQAAAFABAHQAAgGgBgGQgBgIgBgHQgDgTgNgRQAAgHABgGQAEgTAIgSQAIgSABgTQAAgGAAgGQAAgMgBgLQAAgHgBgGQAAgMABgLQACgQgBgQQgBgCAAgBQAAgGgBgFAoJoMQgBAAgBAAQgOAAgPgCQgSgDgRgFQgRgEgTgCQgIgBgHgCAqAoLQABAAAAAAQAJACAJACQAKACAJABQAJABAJABQAEABAEABQAEAHgBAKQgCARgJAPQgKAQgDAUQgBAKgBAKQAAADgBADQAKgOAMgLQACgCACgBQAPgNAJgRQAJgRAUgXQgFARAJASQACAEABAEAqAoLIAAAAQAAAVADAQQgPAfgOAiQgGAQgBATQgBAsgSA0QgFgKgEgJQgQgjgCgmQgCglAAgmQAAgCAAgBQgBgmAJgoQABAAABABQAIACAJACQAEABAEAAQACAMADANQAEARAEASQADANAEAMQADgJACgJQADgPAFgPQAFgPAIgNAp1nNQgFgKgCgKQgBgDAAgCAquoUQAFABAFABQAJACAJABQAJACAJACAp1nNQADAIAFAGQALARAEAUQACAIABAJQACgEABgDQAAgBAAAAApYmQIAAgBIAAAAAq5iiQAAgPgBgOQgBgFAAgEQgCgMgBgOQgBgIAAgIQAFgPADgTQABgIADgGQAEgMAJgJQAFgGAHgCQAFgBAGACQAOADANAGQAEADAEADQALAJAIAOQAJAQAFATQADAJADAKIAsAAQgGgTABgTQAAgUAMgPQAFgGAHgEApCmqQAAAJAAAJQACAfgHAfQgBADAAAEQgHAbgHAQQAAgJgCgJQgIglgPgjQgPgkAJgnAnwk7QACAAABAAQAEAAAEAAAsNnhQAHAGAEAHQAIANAHAEQAAgTAEgTQACgLADgLQAEgPAIgMIAAgBArYoaQgDAAgDgBArJoaQgGgBgFAAQgCAAgCABAsMohQABATgCAUQgBAMABANQAAAFAAAGQgBANACAQQADAPACAQQADAUAJARQADAGACAFQAEAJACAJQgHgEgEABQgKADgLADQgQAFgPgEQAAgGACgIQADgTABgSQACgUgDgTQgCgTgDgPQgLAMgMAEQgGgRgGgSAsxnbQABgSABgSQAAgPABgOAsvnQQgCgDAAgGQAAgBAAgBAsvnQQABgJgDgCAtfliQACAAABABQAFABAGAHQAZAaAXAYIAAAAQgCgKgFgJQgCgDgCgDQAFgBAFgBQANgCANgDQAXgEgFATQAFgQABgQAsslAQgEgGgBgFQAAgFACgEAr4k0IAAAAQABgBAAAAQAAgCABgBQgBACgBACQAQAJAKAQQAKAPADATQACALACAMQABAHAAAHQgBAKABALQAAAJABAJQABATADAUQABAJgCAJQAGgQAEgRQACgIADgFQAFASADATQAEASADATQACAGACACIAuCHIgmADQgHgQgJgUQgQgigSgiQgMgYgGgUQAAgKgBgIQgDAAAAgCQgBgCAAgBQgOgEgOADQgQADgPAGQgHADgEAFQgEAEgEACAr8klQABgHADgHQAAgBAAAAAr2lqQAZgaAMhFAr/jiQAAgFgBgEQgBgRABgRQABgNADgLQADgHABgIAr/jiQACAPADAQQABACAAADIAtgBArNjiIgyAAAr5i+QADAPADAPQADATAGASQABAFACAFArihaQAAAEAAAGQgBATgFAUQgDAQgCARQgCARgCATQgBARgBARQAAABAAACQAAACAAACQAAgCAAgCQgBAPgCAKQAAADAAACQgBACAAADQAAABgBACIAAABQgOAIgIAJQAAAAAAAAQAIAJAKAGIABABIAAgBQAEgLAFgKQACgFADgFQAEABAEABQAFACAEABQAEABAFACQAFACAGABIAGgBIA4gIQgGgQgFgLIAmAAIAIAYIAJAAIBmgIIAggDIABAAIARgBArmhuQABAJADALAo8jAQgDgKgCgKQgCgHgCgHAo3itQAAgBAAAAQgDgJgCgJIAqgBQgCgOgFgTAoSjBIAAABQABAWAEASQAAADABADQACAPAEAQQAEASACASQAAABAAABQAGAkAMAkQAGAVAGAaQACANACANQAAAAAAABQABAEAFAUAqak/QgPAOgDAUQgDATAAATQAAAKAAALQAAAIAAAJQgBAJAAAJQAAAIABAJQACATAEASQAFAQADARQADgTAIgSQAGgOAHANQAMAZAJgYQACgJAGgHQAIgMAHASQAIATAPgPQACgCAAgEQgDgSAQgCAqdhYQAAAAAAAAQgCgGgBgGQgBgCAAgCAqdhYQAPgJAFgMQACgEAEADQATAOAHgdQAMAGAYAAQABgYAXgBAoPAuQgDgKgCgKQgJgkgBgdQACgKgBgQQgBgTgEgRQgEgUgGgTQgBgCAAgCQgFgOgFgPAraohQAAAEACADAtIooQANAEANAIAoGBFQABABABACQAFAKAHAOAoPAuQACAIAHAPIAoAAIAAAAApnBoIgjADIAAAAAqrCBQgCgCgBgBQgBgBgBgBQgHgFgKgCQgEAAgDgBAquB+QACABACACQANALAAARQgBAXgWgEQgOgCgGgMQgBgEgGgBQgLgCgKgEIAAAAIAAAAIAAABIAAAAQAAAFABAFQABAKABAKQAAAIABAIQABAHABAIQAhgIAdAJQAFgCAFgBQABgCABgBQACgCADgCIAAAAQADgEADgBQAEgCAEAAQADAAADACQADACAAAFQAAAAAAABQAAAIgJAKQgBACgCACQgDACgDADQgFAEgGACQgEACgGgBQAIABAFABQAUADAYADQAKABAJAEQADACADABQAAABABAAQABABACABQACABABABQACABACABQACABABABQAFACADAEQgBACgBADQADAGAEAHQAEAIAEAIQAKAQALARQAKAQAJARQAIARAGAFQAQAMALgUQACgEgBgEAq3CCQgLADAAAKQACAFACAFQgCAdAVgRQAFgFgCgHQgCgEgCgEApLDLQASgGARgDIABAAAouDUQADgJAEgIQAAgBAAAAQADgGABgGQACgJAEgIQAEgEAFABQAKACAIAJQADAEABAFQgEAFgFAFQgFAGgGAGQgFAGgFAHQgBABgBABQABAAABgBQAQgCARgEQANgDAOAEAqVBQQgGgPgDgHAp4A3IAJAZArzBBIAAAAAsigcQAAAFAAAFQAAASACAQQAAADABADAsgBWQgBAEAAAEQgCAQgBARQAAAEAAACQABAFACABQABAFACAFQgDAIAAAIQAAAMAJACQACgIADgGQAAABAAACQABAIAAAIQAAAIgBAJQAAADAAADQAAABAAACQAAAAAAABQAAgCAAgCQgBgDAAgDQgCgMgCgKAsgBWQgOgDgSAIQgCAAgBABQgQAHgKAPQgMAPgGATQgGATgDATQgDATAEATQADATAFAUQAAAAAAAAQABASAFATQACALAFAMQAAAAAAAAQADAIAFAIQgBACAAABQgBACAAABQgBACAAACQAAgBAAgBQAAgBABgBQAAgBABgBQgBAFgBAGAsgBWQgPAFgJAMQgMAQgIASQgIASgCATQgDARADASQACARAFARQAFAQADARIAAABQAAASgBASAtDBcQgOgGgTgEQgSgEgPAHQgBABgCABQgGADgFAEQgJAIgHAJQgMAQgFATQgEATABATQAAASAAATQAAASAFARQAFASAHASQAGAPALALQACADADACQABABAAACArzBFQgCASgCAMIAAABQABACAAACIABAAQAEAAAEABIAAAAAsTCBQgDgFgCgFQgIgQAAgRAruCRQAAgGgBgGQgBgJgCgJAsFCRQACACADACQAFAEAFACQAFABAEgBQABAGAAAGQACASAFASQABAFAGAFAruCRQAAgBAAAAQgHgDgGgEAr2CbQAAACAAACQAAAJgBAIQgBALAAAEAsTClQAFgLAJgJQgIgHgGgJAsECeQAAAGAAAFQABAKAAAJQAAAJgBAJQAAAMgCADArkCXIAAAAIAAABArkCYQgGgCgEgFArtCbQAFgBAEgCAseBBQgCAPAAAGQAFAVANAOAseCVQADgKAIgKAq+DjQgIAAgIABQADAQAFAPQAGASAJARQAKAQAJARQAJARAKAQQALASAPgCQAEgHAEgHQAAgBAAAAQAIgRAIgQQAIgRAEgSQAEgRADgSArZDmQgEgFgBgJQAAgCAAgBArVDmQgCAAgCAAQABgBACgBQAAABABABQAEgBADgBAscDqQAMADANABQAEAAAEABQAPAAANgGQADgBADgCAsTDTQgBAEAAAEQAAAKgIAFQADgLAGgMgArcEvQAHgVABgTArcEvQAFALADAMQAFATAFATQAFATADASQAEAWAWgCQAQgCAEgMQgBgDgBgCQgCgDgDgCQgKgLgGgPQgHgSgHgSQgHgSgGgRQgHgTgHgSQAEgSgFgPAsMD+QAAATAGASAr8D9QABAOACANArtD4QgDAQABAHAsWFSQgDgOgBgNQgCgTgDgSQgCgTAFgVAsWFSQgHAGgDAFQgEAJgFAIQgJARgMAQQgKANgLAKQgFAGgHADQABgIADgHQADgLgCgLQgCgNAAgNAtnFQQAAgCABgBQACgFACgFAtaFTIAAAAQgBACAAACAtpFTQABgCAAgBQAAAAABAAQgBABgBACQgDAJgFAIQgFALgFAKQgBAAAAABQgEAHgFAHQABgGAAgFQgBgQgBgOQgCgGgBgFQgBgCgBgCQgCgGgCgEQgEgGgCgBQgCADgBAGQgEAbgOAZQgHANgJANQgGAIgIAGQgDgQgDgSQgBgNgDgLQAAgDgBgCAtdFdQgBADgBACQgEANgEAMQgGASgJARQgEAHAAAGQgBAFABAEQgCAIgHADQgMAFgOAAQgaAAAJgQQABgCACgDQACgLAEgKQAHgSAGgSQAFgRAHgQQABgDAAgCAtdFjQAAAGABAHQgBgEAAgHQAAgBAAgBIAAgBQAAgDAAgCArEIwQgBgHgCgGQgBgEgCgDQgCgFAAgGQgDgTgFgSQgEgSgCgTQgCgTABgUQABgUABgTQAAgTAAgTQgBgTgCgRArEIwQAAAAgBABQgKAHgLAGQgQAKgUAAQgWAAgLgSQADgMAFgRQAGgSADgSQADgTAEgUQADgSgBgUQAAgUgFgSQgEgTgFgSQgCgGgBgFAoaEYQAJgXATgKQAEgCADAAQgPgIgRgKQgFgCgEgCQgGgDgGgCQACgDABgCQgBgBgBAAQgCAAgBAAQgGgBgEACQgFADgEAEQgDADgDADQgHAGgEAJQAAAAAAABQgBABAAABQgDAIAFAAQABAAABgCQABgCABgBQADgGAGgEQABABAAACQADAIAEAHQAAABAAAAQACAEADACQABABABABQAAAAABAAQABABACAAQgBgDgBgCQAHAEAHAFQAGAFAFAGgAosDaQgCAEgFADQgFADgFADQABAEABADQADAJAEAJQAAACABACApCDRQADABAEACQABAAACABApCDRQgCAAgBgBQgDgBgDgBQAAgBAAgCApLDOQABAIACAIQAAACABACApBDcIAAAAQABgFgCgGApND3QAIAFAJAEQAAAAAAAAAoyEiQAGgKAHgLAo1EIIABAAIAAAAAqrI7QAGgLAJgKQADgDACgCQAFgGgCgGQgEgTAJgSQAJgQAGgQQAFgLAIgKQABgCACgCQACgCACgDQAIgKADgMQAGgSAFgTQAGgSAHgSQAFgRAJgRQAEgHAFgIAo5EVQgEAPgGAQQgIARgHARQgHASgGASQgGASgHASQAAAEgCAEQgHAJgFAIQgFAHgEAIQgFAIgEAIQgEAJgDAJQgCAIgDAIAoMEjQAJAQALAPQAKAQALAQQAAACABABIABAAQANAGAIgMQAKgPgDgWQgDgRgFgSQgFgRgGgQQgGgQgCgRQASABAUAAQAFAAAEAAAn3D1QAHgCAHADQATAIgIAWQgHAVgWgBQgJgBgIgEQgIgEgGgHAoeDbQgDADABABApzDNQABABABAAQAGAGAGAFQAGAFAFAGQAEAGAEAHApzDNQAOgCAPAAQAFAAAGAAAqPDMQADgDADgBIAAgBAqdDdQABgBACgCQAAgBABAAQABgCABgBQAAgBABgCAqVDbQgBAEAAAFQgBADACAAQAEABADgDQAEgCACgEQADgEABgFQACgEgGgBQgIABgFAIgAqfDxQgBgBABgHQAAgDAAgCQAAgCABgBQAAgCABgCAq+DjQAHgBAHAAQAJgBAHgCQACgBABgBApvFpQAAAAAAAAQgHABgFgHQgXgbgOglQgMgigSgeAq9INQADgCABgDQALgRAMgQQAAgCACgFQADgJAEgIQADgIAEgIQAFgIACgJQACgKACgLApuGPQgEAEgCAFAp6GTQABgDABgDAp5GsQgDADgCADApuGmQgDgFgGgDQgJgGgHABQABgEAFgKQAFgKAFgJAqBGiQgDAGAAACAn1GTQAEADAFAAQAGABAHgDQAHgEAGgFAn1GTQACgCACgCQgBgDgCgCApLDOQgGgBgFgCAp7DHQAEADAEADAvNBDQgDACgBACQgCACgBABQgCADgBAEQgSgPgNAUQgCAEgDAEQgFAKgFAKQgFAKgFALQgHASgHASQgHARAFATQAEASAIASQADAIADAJQgFARgPAOQAAgDAAgDQAAgUABgTQABgUgIgRQgIgRgFgTQgFgUAJgRQAIgPADgQQAAgCABgCQABgLALgLQAHgHAIgBAv/BIQADgEAEgDQAGgHAJgBQAJgCAHADAv/BIQgFgCgFABAv7BeQgJADgMgCQgFgBgFgBQgIgDgCALQAAACgBACAvjEnQgBgBAAgBQgFgRgDgRQgDgTgHgTQgGgSgEgSQgDgTAGgRQAGgSAJgQQAIgOAOgGQADgCAEAAQASgFATABQAOAAALAFAvXBRQgDAHACAHAvLBzQgFARgEARQgDAPAAAPQgBATABAUQABASAFASQAFATAGATQAFATAAATQAAAMgCAJAuFBVQgRgCgKgJAwQBfQAIgMAJgLAvjEnQACAIACAHQADAJADAKAvzE3QgGAIgGAJQgHAJgLADQACgNAEgMQAEgTgCgSQgCgJgCgJAvYFMQgBgCAAgBQAAABABABQAAAAAAABQABAIACAHQABAFABAFQAAACgBACQAAABAAAAQgBADAAADQgBgSgCgSgAvVFwQgGAhAEAhQACAbAFAKQgdAXgMgXQAAgCABgBQAAgFAAgHQADgtAAgqQAAgHACgzQAIgIAIgIAvALVIgNgJIAAgkID2hcQALgMAIgPQAAAAAAgBQAIgQgBgTQAQAJAQABAvNLZIANgEIB3BUIAAAAIAAgZIAAgCIiEhmAs/NSIiOhWIAAgjICOBdgAg3HDIsQFNIgCgCArXJMIAsgRIDhhXQgEgQgHgPQgEgGgDgGQABgFgEgDQgBAAAAgBQgEgHgGgGQgHgHgEgJAB1C8QAHgCAHADQATAIgIAWQgHAVgWgBQgJgBgIgEQAJAQALAPQAKAQALAQQAJAPALAGQAAARAHAOQAHAOAFAPQAFARAJAOQAIAOAEAIQAKARAIARQAIARAHASQAEAJADADQgJAJgKgBQgJAAgKABQgMABAEgMQgEgNgGgUQgGgRgOgLQABgBABgDQgCgBgBgCQgBgFgBgFQgDgTgJgRQgEgGgDgGQABgFgEgDQgBAAAAgBQgEgHgGgGQgHgHgEgJQAEADAFAAQAGABAHgDQAHgEAGgFAAMAqIAAABIAAAAAgZAuQgBgGAAgGQgCgPACgPAAMArQgPABgWACIlcAnAAMAMQAAABAAABAgnCiQgBAEAAAFQgBADACAAQAEABADgDQAEgCACgEQADgEABgFQACgEgGgBQgIABgFAIgAguCcQADgBABABQACABgFAFQgEAGAAAIQgBAHAEABIAAAAAhzCoQANgDAMgEQATgGAVACQACgBACAAQADgBAFgEQACgCADgCIAAAAQADgEADgBQAEgCAEAAQADAAADACQACACABAEQAAABAAABQAAAKgIAIIAAABQgEADgGAFQgFAEgGACQgEACgDgBAgGCTQABABACABQAEAGAGAFQAGAFAFAGQAEAGAEAHQAAAAAAABQgBABAAABQgDAIAFAAQABAAABgCQABgCABgBQAIAFAJAEQACAEADACQABABABABAAIDAQgBAAgBAAQgGgBgHgBQgQgCgNgCQgFgBgFgBAgNCOQADACAEADQALgDAQACQAUgHARgIQAHgEAIgDQAAAAAAAAAoHDAQAqAEAjgIQAlgJAnACQAmADAogDQAlgDAlgMQAjgLAlAAQAnAAAlgKQAngKAigFQAkgFAkgRABXBoQAAAAABABQAHABAGAFAAqCYQACAGgBAFIAAAAQgDADgDADQgBgCAAgCQgCgIgBgIQgGgCgGgBAA0CcQgCgBgBAAQgEgCgDgBQgEgBgFgCAA+CbQgGgBgEACQgFADgEAEAAaC4QAEgJAHgGAAoC0QABABAAACQADAIAEAHQAAABAAAAAA5DLQgBgCAAgCQgEgJgDgJQgBgDgBgEQAFgDAFgDQAFgDACgEAAoC0QABgBAAAAQADgDADgCAAfC+QADgGAGgEABdCQQgBASAEAOQALAGAKAGQgDAAgEACQgTAKgJAXQAGAHAIAEABMCmQAEACAFACQAFADAGADAAgDJQgBAAAAgBQgDgBgDgCQgIgDgJgCQAAARAAAUQAAATgBATQAAAFAEADQgGANgFANQAAACgBACQgJARgJAQQgFAKgBAEQAHgBAJAGQAGADADAFQgHAJgFAIQgFAHgEAIQgFAIgEAIQgEAJgDAJQgCAIgDAIQgEAPABAQIAEADIACAAIAAAZIsYFYAA4DPQgBAAAAAAIABAAIAAAAQAAADAEABQgBgBAAgCQgBgDgBgCQAPAIAKAMAAgDJQABABACABQACABABABQACABACABQACABABABQAFACADAEQgBACgBADQgEAPgGAQQgIARgHARQgGANgEAOQgCAFgBAEQgGASgHASQAAAEAAAEAAgDJQgDASgEARQgEASgIARQgBACgBACABVEXQgBAGgCAEQgKARgTAFQgTAEgSgDAB4FRQgGgFgIgRQgJgRgKgQQgBgBgBgCQgKgPgJgPQgIgPgHgOAhzCoIAAABQAFASAGAQQABABABABQALAPAJAPQgBATAGASQAAAAAAABQABACABADQAFAPAGAOQABADACAEQAGAOAJAKQAAABABABQAFAEACAGQgEAMgQACQgOABgHgJQgFAAACgFIAAgBQAFgTgGgSQgFgTgMgPIAAgBQgIgQgLgNQgCgSgFgSQgFgSgKgUAAAEtQgKgSAAgUQABgSAAgSQABgRABgUAAAFWQgEAEgCAFAgTFpQgDAGAAACAgLFzQgDADgCADAgZFgQgCALgCAKQgCAJgFAIQgEAIgDAIQgEAIgDAJQgCAFAAACQgGAGgFALIAIACIACABIgCABIAAgCAgMFaQABgDABgDAg+FbQgCAGAEAFAhEFYQAAAFAAAFAB3FaQACgCACgCQgBgDgCgCQAQAMALgUQACgEgBgEABMgCIBCgGAkQA1QgDAAgEAAQgBAAgBAAIhjAIAkQA1IgJAAAj+DGQAKgCAJgBQAIgCAIgBQAGgBAHgBQAEgBAEAAQASgDARgFQAGgCAHgBQAEgCAFgBQACAAACgBQAFgBAFgBQAGgCAGgCAlmDUQAEAAAFgBQAUgEATgBQAUgBATgEQAIgBAJgCIAAAAAlmDUQADASAHASQAOAkgIAnQgCALgEAFQgBACgBABQgHAGgLgCQgSgDgKgSQgJgRgHgRQgIgSgGgTQgHgSAAgWQAHAAAHABQAIABAIABQAUACAQgGIAAgBQAEABAFgBgAleFWQgEADgGgFQgFgFgEgEIAAgBQgUgVgLggQgBgEgBgEAmTEMQAAABABAAQAAAAAAAAQgBgBAAAAQgJgagHgbAniFlQAJANAKAFQAAARAHAOQAHAOAFAPQAFARAJAOQABADACADIDFhNICnA0AjbDAQgIAUgEARQgEASADAUQgNARgHARQgHASgHASQgFAQADATQgBAEABADQgCAIgHADQgMAFgOAAQgXAAAKgNQACACACgDQADgFADgEQAHgMAGgNQAIgSAEgTQADgSABgRQgBgBgBgGQAQgOAFgTQAEgTAAgSAkqGEQgBgHAFgEAhvDhQACAHABAHAh3D5QARgBAJgJAkPEMQAMAEAMgCAkeF0QgEAIAFAHAnKHkIAfgMAg3HDIAAAWIAAAIIsSFIAs/M2IMIlTIAKgFAgpHhIACgBIAAABAg3HZIAKAFACoG9QAMAPAQgQAgaAiIj2ATAmBAiIFngeAniAqIgtAEApeBoIg/jA");
	this.shape.setTransform(130.3,103.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC7102").s().p("AoZE9IAAgjICOBeIAAAbgAmVFPIiEhmID3hbIArgRIDhhYIAdgMIDGhLICmAyIAIACIAAACIsOFNgAkqjoIgCgPIgBgQIgCgUIgBgKIAAAAIAAgBIAVAGQAGABABAEQAGAMAOACQAWAEABgXQAAgRgNgLIgEgDIgCgCQgHgFgKgCIAAgCIA3gIIABAAIAigDIAJAAIBmgIIAhgDIAAAAIARgBIBPgHIFcgnIAngDIAAAAQAdgCATAHIACABQANAFAHAJIAAABQAlAXgfARIgBABQgEgBgEAEQgkARgkAFQgkAFgnAKQglAKgnAAQglAAgjALQglAMglADQgoADgmgDQgngCgjAJQgjAIgqgEIAJgKQgBgFgDgEQgIgJgKgCQgEgBgFAEQgEAIgCAJIgEAMIAAAAQgSADgSAGIgLAAIgdACIgIgGIgGgCQgEAAgEADQgDAAgDAEIAAAAIgFAEIgCADIgKADQgdgJghAIg");
	this.shape_1.setTransform(86.7,148.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("Ag4AeIgBgEQADgTAIgQQAHgOAGANQANAXAIgWQADgJAFgHQAHgMAHASQAHATAPgPQADgCgBgEQgCgSAQgCIAJAdQgXABgBAWQgXAAgKgGQgHAdgUgOQgEgDgCAEQgFAMgOAJIgBAAIgDgMg");
	this.shape_2.setTransform(68.7,90.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#029C01").s().p("ABsFeQgLgRgJgRIgSghQgKgQgGgTQgEgOgDgQIAQgCQARAfANAhQAOAmAWAbQAFAGAHgBIAAABIgHAOIgEABQgNAAgJgQgAg0gjIgghGQgRgigJglIgJgjIgHgZIgEgPQgMgmADgoQACgpApAGQgKAAgEAVQgIAmAGAmIAFAfIAHAcIAFARQALAmAQAjIAfBDIABAMIABAKQAAASACAQIgCABQgGgQgLgZg");
	this.shape_3.setTransform(53.7,104.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("ABjFgQgXgbgOglQgMgigSgeIAOgBQAJgBAHgCIAEgCIgCAEIgBADIAAAFIAAAIIANACIAsAGQAKABAJAEIAGADIABABIgHAjQgEASgIARIgQAhIAAAAIgCAAQgGAAgEgGgAALBuIgJgDIgHgDIgIgCIAAAAIgIgBIAAAAIgCgEIABgFIABgFIACgZIAAAAIAAgDIACgiIAEgkQACgRADgQQAFgUABgTIAAgKQAEAUAMAYQASAiAQAiIAQAkIAJAWIALAbIg3AIIgHABIgLgDgAhDgrIgghEQgQgjgLglIgEgSIgHgcIgGgeQgGgnAIglQAFgWAKAAIACABQAFABAGAHIAwAyIACALIAAADQABAQgCAQIAAAXIAAANIABAXIAAAMQgBATgIASQgIASgEATIgBANQANARADATIACAPg");
	this.shape_4.setTransform(56.7,104.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C08701").s().p("ABOFLQgTgEgKgSQgJgQgHgSIgOgkQgHgTABgVIAOABIAQA1IAAABIADAHQALAhAUAVIAAAAIAJAJQAGAGAEgEQgGAGgHAAIgFgBgAgYBOIgGgZIAAgBIgFgZQgFgagHgVQgLgkgGgkIgBgDQgCgSgEgSIgGgfIgBgGQgDgSgCgWIAAAAQgBgPgGgSQgFgTAAgUQAAgUANgOQAFgGAHgEQAJgGANgBQgRACgKARQgJARAAAUQAAAUAFAOIAHAhIACAJQAFATADATIAFAkQADAUAGARQADAeAMAjQAHAXAHAaIAFAZIAAABIAIAYIgRACg");
	this.shape_5.setTransform(85.6,105.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ABYFSIAAAAIgCgDIgVggIgUggQAIAFAKAAQAWABAHgUQAHgWgSgIQgHgDgHABIghgRIgJgFIADgEIABAAQARgCAQgEQAOgEAOAEQABARAHARQAGAQAEAQQAFASADASQAEAVgLAQQgFAIgIAAQgDAAgFgCgAhhhrQAOgJAFgMQACgFAEADQAUAOAHgcQAMAFAXAAQABgYAVAAIACAEQAGATAEATQADASABASQABAQgBAKQAAAeAJAjIAFAVQACAHAIAPIABAEIAMAXIhkAJgAhtidQgFgSgBgTIgBgRIAAgSIABgRIAAgVQgBgTADgTQAEgUAPgNQAFgBAFABQAOADAOAGIAIAGQALAKAHANQAJARAGASIAGAUIAEAOIAFATIADASIAAABQgOACACASQABAEgDADQgPAPgHgUQgHgRgJALQgFAIgDAIQgIAZgNgZQgGgNgHAOQgIARgDATIgHghg");
	this.shape_6.setTransform(73.2,105.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AD0101").s().p("AAnDUIgIgYIgJgZIgsiJQgCgCgCgHIgHgjIgIglQAAgOgBgOIgBgKIgDgZIgBgRQAFgOADgUIAEgNQAEgMAJgJQAFgGAHgCQgPANgDAUQgDATAAATIAAAWIAAAQIgBATIABAQQACATAEASIAIAfIABAEIADANIAAAAIA9DCg");
	this.shape_7.setTransform(64.7,93);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#712D5F").s().p("AgDEqIABgkIABgkIANABIACAAIABAlIgBAmQAAAGAEADIgNAZQgJgSABgUgAgUBFQgBgPACgOQADgRAGgQQAKgWgFgbQgHglgBgmIAAgtIACgbQAEgmgHgrIAAgBIAFgLIAKgWIAEgKIABAAIAKgVQgCAoACAdIAAAEQAHAugDAkIgBAHQgHAnAEAaIAAABQgCApgDAnQgEAkAMAnIAAABIAAARIAAAMIAAAAIglADIgCgMg");
	this.shape_8.setTransform(129.7,100.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C569AC").s().p("AggFuIAKgbIAPgiQAGgQACgPQAHAOAIAPIATAeQgBAGgCAEQgKARgTAFQgJACgLAAIgPgBgAgpFBIABgmIAAglQAJABAIAEIAGADIABABIgHAjQgEASgIARIgCAEQgEgDAAgFgAAjDgIgJgEIAEgGIAKgNIADgDQgBASAEAOIgLgGgAAADRIgGgDIgJgDIgMgDQAUgHAPgIIAPgHIAAABIgEANIgHARQgGgBgEACIgCgBgAAMBnIgDgBQgQgHgdACIAAgBIAAgLIAAgRIAAgBIAAgBQgLgmADgkQAEgnACgpIAAgBQgEgbAGgnIACgHQACgjgGgvIgBgDQgCgeADgoQAMgZAIgYIAGACQAIACAIgBQABAGAGADQAEACADgBQgCALAEAHQgRAmgDAlQgCAmAFAlIACAOIACAbQABARgBARQgDAlAEAlQADAkAOAvIABADQAGANABAQQACAOgCAPIgVgFg");
	this.shape_9.setTransform(135.3,98.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01029C").s().p("AAGEwQgPgfgFgmQgFgmgLgiQgDgKgBgUIgDhOIgBgfIAAgdIAAgOQAAgmgBgkQgCgnACgnIACgYIACgaIAAAAIAAgEIACgUQADgZgBgZIAAgCIALgaQABAlAFAlQAEAngGAmQgGAmgBAnQgCAmAIAkQAHAigBAoQgCAmADAmQACAnAHAlIAMBIQAHAiAXALQgFACgEAAQgPAAgLgUg");
	this.shape_10.setTransform(148.6,103.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6666FF").s().p("AgKE5IgOhIQgGglgDgnQgCgmABgmQACgogIgkQgHgiABgmQABgnAHgmQAGgmgFgnQgEglgBglQAJgWAHgYIABAAQAPAOgIATQAJANAIAIQgCgFAAgLQAYgKgDgaQAAgLAEgPIAAAAQAQArAEAnQAEAmgLAkIgEAQIgFAZQgEASgCASQgDAmADAnQADAmgCAfIAAABIAAAeIgCA0QgCAnADAlQADAbAMARQgCAmAKAkQALAjgaASIgJAGQgVgLgIgig");
	this.shape_11.setTransform(150.8,99.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC33").s().p("ABLFGIgJgJIAAAAQgUgVgLghIgDgHIAAgBIAAAAIgQg1IAQABQAUACAQgGIAAAAIAIAAQAEASAGARQAOAlgHAmQgCAMgEAFIgCACIgDACQgDAAgEgEgAgZA2IAAgBIgFgZQgGgbgIgWQgMgjgDgeQgGgRgDgUIgFgkQgDgTgFgTIgCgJIgHghQgFgOAAgUQAAgUAJgRQAKgRARgCIADAAIAHABQAPABANAGQALAPAHAUQABAYAHAXIAAAAQAFAOABASIAAAAIAFAgIAEAlQABALAEAFQANApADAfIAIBEIABADIAFAbIADALIAEANIhPAGIgIgYg");
	this.shape_12.setTransform(86.7,105.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006600").s().p("AFxDiIgBgcIAAAAIABgaQABgRACgRQAFggADgiQABgTALgdIAHADQAOAFAKAIQgHgMgFgSQALAEAFAJQACAHADADIACgHIACgJQAEgNAHgHIAJABIARACIANADQgIAYgMAZIgLAVIAAgBIABgLQAAgVgUgXQAUAXAAAVIgBALIAAABIgFAKIgLAWIgFALIgBAAIAAABIgOAhIgSAwIgKAcIAAAAQgJAYgEAaQgHgYgCgagAoLCHIgFgIQACgFgFgCIgEgIQgGgNgEgOIAFgdIADgFIAAgHQgKgQAAgUIACgkIAGgmQADgSgCgUIgDgjQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAHAEACgDQARADARgBIAZgCQgXAhgCAlQgBAlgEAjIgBAJIgGBDQgDAoAEAmQgGgEgLgTgAiQBsQgIglgPgjQgPgjAJglIAIAOQALARAEARIADARIADgHIAAAAQAKgOANgJIgBAPQACAggGAeIgCAHQgHAcgHAPQAAgJgCgJgAkzAyQgJgSgDgUIgFgdQgCgQABgNIAAgLQAHAHAEAGQAIANAHAEQAAgTAEgTIAFgVQAEgPAIgNIABAAIAFAAIAEAAQAGAAAFABQgJAoABAlIAAAEQgMBDgYAaIgGgLgAgqAGQgRgNABgTIAAgFQgBgFgCgEQgJgRAFgSIAIACIATAEQAJACAJAEQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAFgEAGgCQAIgDAJAAIANABIAAABQgQASgCAOIgEATIAAADIgFANQgCgCgIgGQgPAIgFAMIgHgGgAHwgPIgUgBQgJgBgJgDIgDAAQALgWAUgFIAigJIAcgGIgcAYQgPAMgFALIgCAAIgCAAgADsg6IgSgBQAFgNAQgMQAOgMASgGQASgHARgJQAQgJANgPQAMgNAPgKQAQgKATgHQAPABAZAGIAHAKQAGAGAIAEQgJADgJAIQgOAMgRAFIgjAKIglAKQgTAFgSAIQgOAIgLALQALgLAOgIQASgIATgFIAlgKIAjgKQARgFAOgMQAJgIAJgDIABAAIAHAEIgGgUIgCgNQACAIAHAGIALALQAGAGAHAFIAHAEIgMAKQgPAOgTAFIghAMQgRAGgTAEIgkAGIglAHQgRAEgSABIgFACQgPAFgLAKIgIAAgAAMheIgRgEQgKAAgIgHQgEAJgFAAQgMgDgOAAIgGAAQAHgNASgHIAjgPIAhgQIAjgPIAigNQAQgFAPgHIAOAEIAOABIAMAAIANABIANABIAJABIAHABIAHADIADABIgCgCIgIgJIgDgEIAAABQARADANAFIAEACQgrAMgRAKIgOAGQgEgBgDABQgRAHgTAGIgJADIgaAIQgSAGgQAJQgRAIgIAOQgKAAgJgCgAkPiMQgCgFgIAAIgMAAIgDgSQgDgTADgTQAEgTAMgPIAYgcQAOgRAQAGIACABQAHAGAJAFIAGADQgVAWgTAfQgUAiAEAgIgNAAgAnrigQgSgFgVgBQgBgGgEADQAGgGAIgEIAPgIQAFABACgEIAAAAQADACAEAAQAGABAFgDQAFgHAHgGIAOgMIALgIQgaAugCAVIgTgEg");
	this.shape_13.setTransform(84.7,61.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E8E8E").s().p("Ag4ALIgTgBQgIgBgIgDQgKgDAJgDQAJgDAJgBIATgCIATgCIATgCQAKgCAIACQgCACgCAGIgGANIgJAAIgTABIgTgBgAA9AIIgCgJIgCgEQAIgFAIACIATAEQAIADgGADQgHAGgLAAIgLAAIgEAAg");
	this.shape_14.setTransform(202.2,132.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5F5F5").s().p("AggA2QgHgHACgKQACgKgDgJQgDgJgKgCIgEAAQgFAEgGADQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgKgKgCQgJABAAALQAAALgJAEQgEACgBgEQgDgJAAgKIAAgQIgCgGQgDgNgFAMIgBABQAAgLAEgHQAFgIALgBIATgDIATgDIATgCIATgCIATgCIARgCIALgBIgEAMIgQAAQgFgBgCACQgJgBgKABIgTACIgTACIgTACQgJABgJAEQgJAEAKAEQAIADAIAAIATACIATAAIATgBIAJAAIALAAIAPAAIAUgCIATgBIAFAAIAPAAQALAAAHgGQAGgFgIgCIgTgFQgIgBgIAEQgCgDgFgBIAIgMQAHgBAGACIATAFIASAHQAJADABAKQABAHgDADIgGAEQgIAFgKABQgHAAgGAEQgHAFgJABQgJACgJAAQgLgBgFAHQgEAHgGgFQgIgIgIAHQgGAGAAAKIgBAUQAAAKgKADIgFABQgGAAgFgFg");
	this.shape_15.setTransform(202.4,136.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgUA5QgJAAgJgEQgJgFgJgCIgUgEQgJgBgJADQgJADgDAHQgDgGABgHQAAgKgBgKIgFgSQgCgIABgKIACgSIgBgQIAAgBQAFgNAEANIACAGIAAASQAAAKADAJQABAEAEgCQAJgEAAgLQAAgLAJgDQAKAEAAAKQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQAGgDAFgEIAEAAQAKACADAJQADAJgCAIQgCAKAHAHQAHAHAJgDQAKgDAAgKIABgSQAAgKAGgGQAIgHAIAIQAGAFAEgHQAFgHALABQAJAAAJgDQAJgCAHgFQAGgEAHAAQAKgBAIgFIAGgEIAAASQABAIgCAIQgCAKAAAKIgBAQIgDATIgCALQgIAEgJACIgTAEQgJABgIgCIgTgFQgKgCgKgBQgKAAgGAFQgIAFgJAAIgCAAgAAXAPQgBALAJgDQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgIgHgFQgCgCAAgEIgCAOg");
	this.shape_16.setTransform(202.2,139.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009966").s().p("AhjETIgrhCQgPgWAFgUQAKgogXgdIARAEQAHACAGAEIADADQAJAFAJgCIADgBIAAAAIAGABIATACIATAAIAFAAIgCAeIgEBEQgDAKgFAKQgEAKgBAIQgBAegEAeQgCgUgLgRgAhcD0IAAgyQAAglgTgsQATAsAAAlIAAAygAgJEHQgFgMgDgNIgBgLQAIgTAKgOQAIgMAAgPIgBgJQgDgRgEgUQAEAUADARIABAJQAAAPgIAMQgKAOgIATQgCgTAFgTQAGgSgEgTIgHghIAGABIAOABIACAAIATABIARAAIAEAAQAMAWgJATQgFALgJAKQgMANgJAOQgKATgDAXQgCAMABAJIgFgLgAB/DHQgcgfAFgrIADABIAPABIADABIASACIAGAAQADAMgDAIQgIASAEAWQAFAcgQAYQAJgZgQgSgAB/CvQgGgMAAgSIABgSIgBASQAAASAGAMgACXBeIgUgDIgSgBIgKgBQACgMAFgQQAFgSACgTQACgUgLgQQgKgQgNgQQgMgOgIgSIgBgDQgEARgJAOQgKARgDATIgEAkIgDAaQgDASAEARIgFAAQgJgBgIgCIgQgCIgJgBQADgRgKgSQgGgMgDgNQgEgSALgOQgCgTgKgRQgJgRABgSQAAgUgDgSQgDgUgJgSQgEgHABgHQADgSARgMIAIgHQAKgIAKgKQAMgOAKgIQgBgHACgIIABgDIAFgQIADgCIAPgGQALgDAEAJIAAAAIgCAAQgCgBgGADQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABIgFAIQgDAHAHACIAGABQAOAPAIASIAHARQgKARgDAUQgCANAAAOIAAAKIAEAkQACANAEAMQgEgMgCgNIgEgkIAAgKQAAgOACgNQADgUAKgRQAKgRAUgHQAPgEAPgDQAAgDgBgGQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQgDgFAAgGQAAgMAEgKIAAgBIACgEQADgFAHgBQAJgBAJACIAOAEIgDAHIgDAAIgIACQgIgCgHABIgEABQgHACACAKQADAJAEAJQAEAFAIAGIARAKQAIAFAFAIQAFAIAJAEQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAFARgGATQgEALgCALQgEASAGATQAFASABATQACAUgIASQgIASgFARQgFASgCATIgEAdQgCATgIAJIgJAAgAB7BCIAAgBIADgMQAGgTAEgTQACgMAAgKIgBgOQgCgTgHgRIgMggQgGgSAAgTIgBglQAAgSAHgQQAHgOAIgNQgIANgHAOQgHAQAAASIABAlQAAATAGASIAMAgQAHARACATIABAOQAAAKgCAMQgEATgGATIgDAMIAAABgAAEAWIgBAkIABgkIAAgUIAAgRIAAgDQAAgTAHgRQAFgOACgOIAAgHQAAgPgIgNQgKgRAAgRIAAgBQAAgUAGgSQAGgTANgPQgNAPgGATQgGASAAAUIAAABQAAARAKARQAIANAAAPIAAAHQgCAOgFAOQgHARAAATIAAADIAAARIAAAUgACBj1IAGAAIgGAAgAhQBGIgTgDQgIAAgGgDIgaAEIgUgBIgFgNQgHgCAGgPQANglgQgkQgPgkgMgkQgLgkALglQAMgmATgjQAKgJAHgRIACgBIAFgCIgFACIgCABIgBAAQgFgJAGgJIAHgJIAEgDQALgDACAKQgKgBgDAMIAAAFIABACIABACIgGAAQgGAYASAKQAPAJAIAOIADAGQAHASABAUIgBAjIAAABQgCAFAEADQAEAlAJAkQAKAlAEAmQADAfgFAfIgMgCgAiZjRIADAgIAFAiIAJAlIAKAmIgKgmIgJglIgFgiIgDggQgBgSAAgSQAAASABASgAhfiTQgCgLgHgKQAHAKACALgAhTkHIgCgGQgBgGAFgGQAEgFAGgEIAEgCQAFgCAHACQgBADgBABIgDAAQgHABgEAHQgDAGgCAHIAAACIgBAHIAAAAQgEAAgCgFg");
	this.shape_17.setTransform(199.8,95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01891C").s().p("Ag4FIIgJgRIAAgBIAAgGQAAgjgLghQgLgjgHgmQAHAmALAjQALAhAAAjIAAAGIAAAAIgFgJIgjhBQgQghgCgnIAAgBIAdAAIAeAAQAJAQANAQQgFgIgEgYIAbAAQgBAPAAASQgBAhgFAfQgIAoAGAoQADASgHAQQgJgYgKgWgApNDgIgEgnIgBgRIABgWIgCgNIgDgYQgDgTgLgPQgKgPgPgKIABgDQAFgQACgRIgGgPQAZgaALhFQAAAmACAkQACAlARAjIAJASIABABIgEANQgEAUgEAOIABARIACAZIABAKQACAOAAAOQgEAFgCAIQgEARgFAQQACgIgCgKgAggCGQgHgYgJgLIAEgJQAQgkAEgmQADgbgDgfQgDgYgKgTIAQgCQAKAAAKABIARAEIASAEIASACIASACIABAAIAQADIARACIAKABQgHAKgEANIgDAJIgBAHQgDgDgDgHQgEgKgMgDIgEgLIgCgLIACALIAEALQAGASAHAMQgKgIgPgFIgHgDIgdgJIgGgDQgNgGAAgTIAAgBIAAABQAAATANAGQALAmgCAkQgCAlgOAjQgHATgFATgAg3CGQAAgRAHgSQAJALAHAYgAhgCGQgCgXgHgVQAHAVACAXIgbAAQABgVACgVQAEgmAHgnQAGgiAPgqQAMAUgFAXQgGAgAAAkQgBAnAKAsIAAABgAk2B8QgFgSgCgUIAAgSQACgngOghQgFgMgCgLIABgMQAAgJgCgJQABgKADgKIABgDIAEgTQADgOAQgTIAAAAIAAAAIAAAAQgIAQADASQACATAJASQADAGAAAGIAHgWQAGgPANgIQAGAKADANQAIAkgMAiQgNAigJAmQgIAigIAbIgDgIgAkqAdQAJgdAAgmIAAgEIAAAEQAAAmgJAdgAjuBkIgGgnIgFgRQgDgJgBgKIgDgVQgBgOACgRQACgVAMgUIAQgXQgCgJABgIQAEgCAQgNIAOADIATADIATACIAHABQgKAIgLAFIgBABQgPAGgNAJIgEADQgLAJgGAIIgDgIQgDgJgBgJQABAJADAJIADAIQAGgIALgJIAEgDQANgJAPgGQAGAQgBATQAAAUgIASIgQAfQgIARgKAPQgKAPgGARQgHASgEASIgBAOQgDgHgBgLgAjiAzQgCgHAAgHQAAgIACgIQAEgSAJgPQAIgQADgSQACgKAAgLIgBgPIABAPQAAALgCAKQgDASgIAQQgJAPgEASQgCAIAAAIQAAAHACAHgAo5BEIgJgSQgRgjgCglQgCgkAAgmIAAgEQAAglAIgoIACAAIARAEIAIACIAGAYIAHAjQADANAFAMIAEgSQADgPAGgOQAFgPAIgNQgIANgFAPQgGAOgDAPIgEASQgFgMgDgNIgHgjIgGgYIAKACIATADIASAEIAAAAQgBAVADAQQgPAegNAiQgGAQgBATQgCArgRAzgABkA0IAAAAIAAABIAAgBgAmWgSQgLgmAagnIAAAFQgBATAQAPIAIAGQAEgOAQgIQAIAGACADIABAGQACAJAAAJIgBAMQgDASgLAQQgLARgCAUIgHgBIgDAAQgMABgKAGQgBgigKgigAtCgyIAAgIQAEglACglQACglAXghIACAAIAOgBQgQAvgBAoQgCAoAVAkQAIANAAAPIgZATQgRgbgPgegADZgPQgSgDgGgKQgEgIACgKIAAAAQAJgEAKgBQAJgBAIADIAFABQAKACANAAIAAAAQgIATgCAbQgHgMgVgDgAJ1gvQgJgEgJgCQgKgCgJgKQgGABgEAEQAAgKAHgEQAEgDACgEIAJgPIADgDIAJgMQAKgLAMgJQASgQAOgJIAEAEIACABIAGAGIAFAHIAFAEIABABIgBgBIgDgFIgGgLQgGgIgCgJIgEgLIAEACIANAFIAdAHQALACAJAGIACABIAEAGIADAFIACAFQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAQACgJADgJQAEgJAHgHIAOgMQgBAJACAEQACAHAFAFIASARQAHAHAKACIALAAIggAIQgSAFgSACQgTADgRAIQgRAIgQALIgeAVQgPAKgKALIgBACIgNgFgAiNhJQADgTAHgSIAOADQAJACAJADIAGADIgUAMIgOAMQgJAIgGAJIABgPgADlhMIgIgDIgRgFIgOgHQgFgFgHAKQgDADAAACIgJACQAGgLAOgMIAcgYIgbAGIgjAJQgTAFgMAVIgQgEIgTgDIgRgCQACgFAGgIQAMgPASgIQARgHATgGIAmgNIAlgNQATgHAHgQIAMADQAJACAHAFQAIAGAGAHIAKANQgBgCADgFQADgDACgGQAEgJgIgIQgHgHgFgJQgEgIgDgKIgCgJQAEgBADACIAGAEQACACAEAAIANADIAPADQAGACAGADIARAKQAHAFAGAGQAAAGgHAEQgQAKgOANQgOANgSAGQgSAHgTACIgkAEIgLACIALgCIAkgEQATgCASgHQASgGAOgNQAOgNAQgKQAHgEAAgGQAFAHAEAIQgBAKgKAHQgOALgQAIIggASQgQAJgOANQgOANgHARQgNgDgKgBgAqIhsQgEgGgHgHIABgZQABgTAAgUQAaAGATABIABAAQgIANgEAPIgGAVQgDATgBATQgHgEgIgNgApXhgIAAAAgAgmhqIgRgHIgMgGIgFgHIgBACIgEABIgLABQAMgLAPgEIAFgCQASgBARgEIAjgHIAkgGQASgEARgGIAhgMQATgFAQgOIAMgKIAHADQAIACAIABIASADIAIACQgSAAgQAHQgHADgIACQgTAEgSAJIgiATQgQAJgRAIIgjARQgTAJgQgFQgMAAgFAMIgMgDgAiEh8IgTgBIgTgCIgQgDIgIgCIAigRIAggRQAQgJASgDQARgEAQgIIAhgRIAcgPQAOgIASgSIAAgBQAOAFAJgCIAFAAIADAAQgSAHgQAKQgQAKgMANQgKAPgRAJQgRAJgSAHQgRAGgPAMQgPAMgFANIgTgBgAoai9IgcgJQgCgEAAgKIAAgHQABgSADgRQADgTALgPQAKgOAPgHQgPAHgKAOQgLAPgDATQgDARgBASIAAAHQAAAKACAEIgKgDIgPgDQgEghAUghQASgfAWgWIAKAFIAQAKIAQAJIAQAKIABABQgLAYgEAKQgGATgIARQgGANgDAOIgBAJQgMgDgLgEgAoCi/IAAAAgAn5jaQAIgRAGgTQAEgKALgYQAIAFADAIIABACIAAADIAAAEIAAgEIAAgDIAAgLIAAgUIAAgBIAhgaQAGgFAHgDQgHADgGAFIghAaIAAgQIgBgTIgCgLIAPgBQAJABAJACQAJACAJABQAJABAHADIAJARIAGATIABADIAIgQQAEgJAFgHIAFgIIAIAFQAHAEAKABQAKACAIAGIAEADQgSABgRAJQgQAIgMAMIgCAFQgDAUgUAHQgRAGgPAJQgRAJgPALQgOAKgQAKQgJAGgIAIQADgOAGgNgAqQjXIABgGIADgnIACgnQABgRgBgSIgBgnQAIACAKABIATACIATAAQAKgBAJADIAGADIACALQACAIAGAGQgQgGgNARIgYAcQgNAPgDATQgEATADATIADASQgNgCgQgEgAsUjaIgRgCQABgWAbgtIADgDQAHgGAIgFIAQgKIAPgJQgsBEgJAiIgHAAg");
	this.shape_18.setTransform(118.1,67.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#015F3A").s().p("AqUIlQADgLgCgKIgCgbIgBgMIAAgBIACgLIABgEIAAAAIgIgQIAAgBQgFgLgCgLQgFgTgBgSIAAgBIgIgmQgEgTADgUQADgTAGgTQAGgSAMgQQAKgOAQgHIADgCQASgIAOADQgPAFgJANQgMAPgIASQgIASgCATIgBASIABARQACASAFAQQAFARADARIAAAAIgBAkIABgkIAAAAQgDgRgFgRQgFgQgCgSIgBgRIABgSQACgTAIgSQAIgSAMgPQAJgNAPgFIgBAIIgDAhIABAHQAAAFACAAIADALQgCAHgBAIQAAAMAKACIADAWIABAHIAAAEIgJAXQgFAUACAUQADASACASQABAOADANQgHAHgDAFIgJARQgJARgMAQQgKAMgLALQgFAFgHADIAEgPgAsHIHIgEgYIgBgFIgCgJIgDgPIAAgCIgBgCIgFgSIgFgPIgBgCQgFgRgDgSQgDgTgHgSQgGgSgEgTQgDgSAGgSQAGgRAJgRQAIgOAPgGIAGgCQASgEATAAQAOABAMAFQgKAIgHAJQgMAPgFAUQgEASABATIAAAlQAAASAFARQAFATAHARQAGAPALAMIAAAAQgCADgBAGQgEAcgOAYQgHAOgJAMQgGAIgIAGIgGgigAr6HPQAAAMgCAJQACgJAAgMIAAgDQAAgRgFgSIgLglQgFgSgBgTIAAgZIAAgOQAAgPADgPIAJgiIgJAiQgDAPAAAPIAAAOIAAAZQABATAFASIALAlQAFASAAARIAAADgAtaGiIABgnQABgTgIgRQgIgSgFgSQgFgUAJgSQAIgPAEgQIAAgEQACgLAIADIAKADIAKABIAAAAIABAAIAKgCIABAAIgLATIgKAWIgOAjQgHASAFASQAEATAIARIAGASQgFAQgPAOIAAgGgANJEgQgCgcAAgcIAAgTQABgTAJgNQgJANgBATIAAATQAAAcACAcQgHgOgLgPIAFhEIACgdIAMABIARABIANABIAGAgQAEATgFATQgGASACATQgNAdgFAaQgEgTgKgUgAs/DmIgKgBQAIgMAKgLIAGgHQAGgHAJgCQAJgBAHADQAHACAFAGIgEAFIgCADIgEAGQgSgOgNAUIgEAIIgBAAIgKACIgBAAIAAAAgApZDbIAAAAgANiB7IgRgDIgSgCIgIAAQAFgfgDggQgDgngKgkQgKgjgEglIAAgBIgBgIQABgSgBgSQAAgUgIgSIgCgFIAGgJQAHgGAJgDQAKgDgCgLIgDAAIACgIIAFACQgBAKAGAHIAHAHIAOAMQAHAHADAKIgIAGQgRANgCASQgBAHADAHQAJARAEAUQADATgBATQAAATAJAQQAJAQACATQgKAPADATQADANAHAMQAJARgDASIgKgCgAMuivIgDAUIgCALIgCATIgDASIADgSIACgTIACgLIADgUIACgNIgCANgAAKg+QgIgPgDgOIAAgBQgLgsABgnQABgkAGgiQAEgXgLgUQgJgOgQgMIATgMIAMAGQAGAFAEAJIALgDIAFgBQAIAbAAAXQAAAQgEAOQgFAUAAARQAAANADALQgDgLAAgNQAAgRAFgUQAEgOAAgQQAAgXgIgbIANgCIADAAQALATACAYQAEAfgEAdQgDAmgRAkIgDAJQgHASgBARQAAAPAEAOIAAAAQAFAYAEAIQgNgQgJgQgAFdinIgCgYQgDglgNgtIAAAAIAHgBQAOgCANADIgBAJQABAOALALIAAABQgHAYgJAWIgLAZgAGAjOQAIgSgPgOIgBgBQgLgLgBgOIABgJIAKADQAQAGARAAQgHALAAAMQAAAHACAHQgIALgBAFQABgFAIgLQgCgHAAgHQAAgMAHgLIABAAIARACQgFAOABALQADAagaAKQAAAMACAEQgIgHgJgOgAH2jMQADgPgJgJQgOgNAEgQIAlAAIAiACQABAGgKAFQAAATgXAFQgFAHgGACQgKAFABALQgEgDABgGgAKgjdIgEgQQgCgKgGgFIAMAAIATADIAPABIgEAFQgIAKgGALIgKARQgCADgDABQABgKgCgKgArEkLQgVgkABgoQACgoAPgvQAMAAALACIAmAIIAJACQgCAJgBAMQgBAZgGAXIgDAMQgLAkgVAhQgLATgEAKQAAgPgHgNgAmXkVQgEgTgLgRIgIgOQgFgKgCgLIgBgEQgDgQAAgVIABAAIASAEIATACIASADIAIACQADAFAAAIIAAADQgCASgJAOQgKARgDATIgCAUIgBAHIAAAAIAAAAIgDAHIgDgRgAmRkLIABgHIACgUQADgTAKgRQAJgOACgSIAAgDQAAgIgDgFIAJABIATADIARAFIAKADQgUAYgJARQgJARgPANIgDADQgNALgKAOIAAAAgAFtkRIAAAAgAjikgQgJgSgDgTQgCgSAHgPIABgBIAFAAIATABIATAAIASABQAJAAAIADQAKADAKABIAFABQgQAMgFACQgJAEgKACQgOACgOAGIAAABQgOAHgFAPIgIAWQABgGgDgGgAHrkZQAGgXAQgMQAOgMATgEQATgEATgGQASgFARgIQAQgIANgMIACACIAJANIAEAHIADAHIADAGIACAFIAFgPIAFgSQACgJAAgKIgCgJQADgBAGABQAMABALACIAWAFQAGABAFAEQgOAJgRAQQgMAJgKALIgKAMIgCADIghAKIgBgDQgEgFgHABQgKABgJACQgJACgEAGIgBABIAHAJIABACIgeANIgIgDIgFABIgKABQgSAEgUABIgHAAIgWgBgAF0khIglgJIgHgBQAHgRAPgNQAOgNAQgJIAggSQAQgIAOgLQAJgHABgKIAEAKIABAFIABAGIAGgQIAEgLIApgOIAEABIAOAAQAJAAAIABIAKACIAQAEIASAFIAAAAIgDAAIgEAAIAAAAIgBAAQgMAAgNACQgSAEgSAGQgSAGgNANQgFAFgCAHQgDALgLAGQgQALgPAMIgQAOQgIAJgCAOIgBAHIABgHQACgOAIgJIAQgOQAPgMAQgLQALgGADgLQACgHAFgFQANgNASgGQASgGASgEQANgCAMAAIABAAIAAAAIAEAAIADAAIACAAIAPAGQANAFAMAJIACABQgSAIgTAGQgSAEgQALIgfATIghAVQgRALgTAGQgSAGgNAOIgVAAIgEAAQgRAAgQgEgAGJk+QgTADgMAPQAMgPATgDQASgCAAgLIgBgEIgBgHQAAgOAOgNQAOgNAUgIQgUAIgOANQgOANAAAOIABAHIABAEQAAALgSACgAqLldQAGgXABgZQABgMACgJQANAEANAHIgBAdIgCAkIAAACQAAAGACADQgLANgMADIgMgigAqLldIAAAAgAjolnIAAAAIgBABIABgBgAh+lpIgTgEIgRgEIgTgEIgTgEIgSgFIgGgBQAIgOARgIQAQgJASgGIAagIQASgDAQgIIASgFIAOgGQARgKArgMQAOAJAIAPQADAGACABQABgLACgMQADgSAMgNIACgCQAQAJATACQAUACASAIIABABQgSATgOAHIgeAPIghARQgOAIgRAEQgSADgQAJIgfARIgiARIgJgCgAjolngAl5l6IAAAAgAlDmGIgegDQgSgDgRgEQgRgEgTgDIgPgCIACgJQAHgIAJgGQAQgKAPgKQAPgLAQgJQAPgJARgGQAVgHADgUIACgFQALgMAQgIQARgJASgBQAFAEACAGIAMAbQABAEADACQgMASgSAJQgRAIgQALIgfAUQgRALgUADQgTAEgHASQAHgSATgEQAUgDARgLIAfgUQAQgLARgIQASgJAMgSIAEADIAIAFIAJAFQADADACAEIADADQAEgHAGgHIALgOQAAAEABADQADAFAEADIAOAIIAOAFIAEACQgPAHgQAFIgiANIgjAPIgjAQIgjAPQgSAHgHANIgCAAgAp9m5IgOgCQADglAigeIABAAIgBATQgCAUAAATIABAOIgWgDgAqLm7IgXgBIgfgBQAKgiAshEIABgBIAQgJIANgGIAEAAQgBARADARIABAGQgCAGACAHQgiAegDAlIAAAAg");
	this.shape_19.setTransform(110.4,90.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B4301").s().p("AsdMXIMJlUIsJFUIiOhdIANgFIB4BUIAAAAIgBgZIACAAIMQlNIAAAWIAAAJIABABIAKgEIAEACIABABIABAZIsZFYgAsmMJIMRlHgAsmMJIh4hUIgNgJIAAgkICEBnIAAABIABAZgAsnLwgALsEAQADgGADgCQAEgCAEAAIARABIAEgMIABgFIAHgSIAIgSQAEgJAIgGQAJgGAGAIQAGAIgDAJQgDAJgFAJIgIARIgBAEIgIALQAEABADAEIACAEIACALIgFAAIgUABIgTABIgSAAIgLABIAGgPgAoSDoIAAAAIAAAAIgDgCQgCgCgCgDIAAgBQgFgIgCgIIgBgDQgGAFgEAGIgBACQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQgEAAACgHIABgDIABgBQAEgIAGgGIAHgGIAIgIIABAAIAGgBIAAAAIAAAAIACAAIABAAIAEABIABAAIgCAFQgDAFgFADIgKAGIADAHIAGASIACADIACAGIgEgCgAq7C4IAAgDQAggIAeAJIAKgCIgCADIgBACIgCACIgCADIgDABQgIADgIAAIgOABIgQACIgHABIgBgCIgDADQgEgFgBgKgAomC/QgCgIAAgIIAGACIADABIgDgBIgGgCIAAgEQARgGASgCIAAAAIgHARIgBAAIgCAAIAAAAIAAAAIgGABIgBAAIgDgBIgGgCQACAFgBAFIAAABIgHAGIgBgEgAn6C5IALgMIALgMQAqADAjgIQAkgIAoACQAmACAogDQAkgCAmgMQAjgLAlgBQAnAAAlgJQAkgLAkgFQAkgEAkgRQgDAHgCAJIAAAAIgQAGQgRAIgTAHQgQgBgOACIgHgFIgFgBQgEAAgEACQgDABgDADIAAABIgDAEQgFAEgDAAIgEABQgWgBgSAGIgZAHIgNADIgKADIgEABIgJACIgMAEIgjAHIgIABIgOACIgPADIgTAEIAAAAIgRADQgUADgTABQgUABgTAEIgKACIgIAAIAAAAQgQAGgUgCIgQgCIgOAAIgJAAQgUAAgSgCQgOgEgOAEQgQAEgQACgABaCvIAAAAIAAAAIgDgBQgCgDgCgEIAAAAQgFgIgCgIIgBgDQgGAFgEAGIgBACQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgEAAACgHIABgDIABgBQAEgIAGgGIgBgEQgCgIAAgIIAJADQACAFgBAFIAAAAIAIgHQAFgBAFAAIAEABIABAAIgCAFQgDAFgFADIgKAGIgFAEIgBABIABgBIAFgEIADAHIAGASIACAEIACAEIAAAEQgDgCgBgDgABHCKIAHgHIgHAHgAooCvIAAAAgAr+CFQAAgIADgHQADgLAIgKIgGgKQgHgQgBgRQAGAWAMANIABABQAIAIAKAHQgKgHgIgIIgBgBQAJgIAOgIIAAgBIACAAIAAAAIAIACIABAAIgFAJQgGAKgEAMIAAAAIAAAAIAOAIIAAAAQADAGAGABQgEADgEABQgFABgFgCQgFgBgFgEIgEgEQgIgHgGgKQAGAKAIAHQgJAJgFAKQgDAHgCAHQgKgCABgMgAB7BJIgBAAQAfgSgkgXIgBAAQgHgKgMgFIAVAGIAMAEQAWAHgDAWQgCAPgLAJQgGgFgHgCgAPwAlIgCgDIgFgLQgFgIgHgGQgGgGgJgDIABAAIAEgDIACgBIgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABABAAIgEADIgBAAQgGAFgFAGQgGAJAAAKQgIABgEgHIgCgDIAAAAQgCgHADgIQADgHAJgFIAGgEQgCgEgCgBQgDgBgCgDIgCgFIAAgBQABgDAFgBIAAAGQACAGAIAEIgFADIAFgDIAFgEQAIgFAJgDIAGgBQAGAAgDAHIgBACQgDAEgEADIgJAGIAaATQAHAGgBAIIgBAFIgEAEIAAgBgAHQgcQgHARgGgDQgDgCgCgGIACgIIAAAAQACgIAFgGIACgCIgBgKIABgHIAGAMIAAAAQAMgJAEACIAAAAIAAAAIAHABIgHAGQgGAFgDAGIAFAJIABACIAEAGIAAAJQgJgEgHgKgAHJguIAGgFIgGAFgAHcjkQgCgJgDgEIgEAGIgHAJIgJAJQgCgEAAgFQAAgGADgGIAIgKIACgCIgCgCQgEgEAAgEIABAAIAAAAIADgBIAHAGQAGgEAIgDIAAAAIAAAAQAFADgGADIgHALIAGAIIADAGQACAHgGAMQAAgKgCgGgAv0jdQAAgFAEgFIAFgEIAFgEIAKgIIADgDQgFgEgGgEIABgKIAOAOIAHgHIAAgCIABgFIAAABIAAAEIABAAIAAAFIgCAEIgCAEIACADIAFAFQAEAFACAFIAAAEQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgEABQgDgCgCgFIgHgOIgEAEQgGAFgGAJIgDAEIgCACQgCABgDAAIgFgBgAOol8IABgEQABgDAEgDIABAAIAFgDIgDgDIgEgHIgCgGIAAgDQgBgHAGgGIAEgDIgCAPIAAACIABABQAHAHAEABIAMgNQAIgHAFAEQABAAABABQAAAAAAAAQAAABAAAAQgBABgBAAQAAAHgJAEQgGACgGAEIAGADIAEAAQAJABAEAFIACADQABAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgBAAQgIAEgKgDQgIgDgIgEQgFACgDAEIgCABIgCAEQgEAAAAgDgAHYmhIgHgIIgEgDIAAAAIgKgIIgBgDIAAgDQAGABAEAEIAHAHIABABIAFAGIADAEQADAGABAIIgIgMgAHBmiQAEgFAIgFIAAAAIAEADIgLAIIgCABIgHAEIAEgGgAHUmtIgBgBQACgHAFgBIADACQgBAFgEABIgEABIAAAAgAPnoJIgHgHIgHgFQgHgFgIAAIAAgBIAKgLQAMAHAHAOIACAEQABAEgBADIAAADIgCgGgAOtoXIgBgDIAOgKIAGgGIAFgGIACgDIALgPQAHgHAIABIABAAIAAAAIAAAAIABAAQAFABAAAGQAAAGgDAFIgGAFIgIAIIgDADIgKALIgBABIgPALIgLAGQAAgHgCgHgAOzo4QgGgIgHgCQgFgBADgGIALAHIAPALIAHAHIgFAGIgNgOgAvopWIAGACQAJgGAHgGIAOgNIADAGQgIADgGAHIgNANIgCACIgCABIgEABQgGAAACgKgAu/pTQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQACgEAAgGQAAgFgBgFIgDgGIgCgCQgEgFgFgCQAAgBAAAAQgBAAAAAAQAAgBgBAAQgBAAgBAAIgCAAIgCAAIgBgBQAFgHAKAIQAGAEAEAFIADAEIABACIgBgCIgDgEIACgCIABAAQADgDACAGIgEAFQAEAIABAIQABAFgBACQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgGgCgAsRrYQgFAAgCgGQgCgDACgDQAEgFAHgEQAIgFAHgFIgTAGQgIgEAMgEIADgCIAEgDQALgDAJgIQgGAAgEgFIgBgBQgHgGgIgEIgCgCQgIgDgFgHIgCgFQgBgFAHgDIALAHIAFADIABAAQAIAFAFAJIACADIAEAHIgEgHIAAgBIALgMQADgDABgEIABgFIACABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAFIAAABQgBAGgEAEIgEAEIgHAHIABABIAEAEQADgCACgFIABgDIAAgBQAAgBAAgBQABgBAAAAQABAAAAgBQABAAABAAQALgBgHAJQAAAIgCAIIgBAFQgDAGgFAEQgGAHgIAGIgQALIgFACIgDABIAAAAgArisQIgMAOQgGAHgJADIgBABIABgBQAJgDAGgHIAMgOIACgCIgCACgArysJIAEgCIgEACgAr9sPIABABQAEAFAGAAQgJAIgLADIAJgRg");
	this.shape_20.setTransform(126.9,106.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8BF01").s().p("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AQgHAAABgSIAAgBIgEgJIAAgBQAAgKALgCQgLACAAAKIAAABIAEAJIAAABQgBASAHAAIAAAAIACAAgADEKBIgKghQgGgRgOgLIACgEIABABIAAABQAFAFAGAAIAAAAIACAAQAGAAAHgHIAAAAIAAAAIAAAAIABgBIgBABIAAAAIAAAAIAAAAQgHAHgGAAIgCAAIAAAAQgGAAgFgFIAAgBIgBgBIgDgEIgCgKQgDgSgJgRIgHgMQABgFgEgDIgBgBQgEgHgGgGQgHgHgEgJQAEADAFAAIABAAIABAAIAAAAIABAAIADAAIAGgCIABAAQAHgEAGgFQgGAFgHAEIgBAAIgGACIgDAAIgBAAIAAAAIgBAAIgBAAQgFAAgEgDIAEgFIgDgEIABAAIAAAAQAFAEAFAAIAAAAIABAAQAIgBAGgKIAAgBIAAAAIABAAQABgDAAgEIAAgCIAAACQAAAEgBADIgBAAIAAAAIAAABQgGAKgIABIgBAAIAAAAQgFAAgFgEIAAAAIgBAAQgGgGgIgQQgJgRgKgQIgCgDIgTgfQgIgOgHgOIACgGQgDgDgFgCIgDgDIgEgBIgDgCIgDgCIgBgBIgGgDQgIgEgJgBIgCAAIgNgCIgdgEIgKgCIACAAIACAAIAAAAIADgBQAGgDAFgDIAKgJIAAAAQAIgJAAgJIAAgCQgBgEgCgDIAHAGQALgDAQACIAMADQABAIACAIIABAEQgHAGgEAJQgEgIgEgFIgLgMIgKgKIgDgCIADACIAKAKIALAMQAEAFAEAIIAAABIgBACQgDAHAFAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIACgDIARAJQACADADADIACABIABABQAAADAEABIgBgDIgCgFQAPAHAKAMQgKgMgPgHIgBgEIgHgSIgCgHIAKgGQAFgDACgFIAMAGIAJAEIALAGIAVALQAHgBAHADQATAIgIAWQgHAVgWgBQgJgBgIgEQgIgEgGgIQAJgXATgJIAHgDIgHADQgTAJgJAXQAGAIAIAEIAUAfIAVAgQAJAPALAGQAAAQAHAOQAHAPAFAPQAFAQAJAPIAMAVQAKARAIASIAPAjQAEAIADADQgJAKgKgBIgTABIgBAAQgLAAAEgLgAnVJIIgHgMQABgFgEgDIgBgBQgEgHgGgGQgHgHgEgJQAEADAFAAIABAAIABAAIAAAAIABAAIADAAIAGgCIABgBQAHgDAGgGQgGAGgHADIgBABIgGACIgDAAIgBAAIAAAAIgBAAIgBAAQgFAAgEgDIAEgEIgDgGIABABIAAAAQAFAEAEAAIABAAIAAAAQAJAAAHgNQABgCAAgEIAAgCIAAACQAAAEgBACQgHANgJAAIAAAAIgBAAQgEAAgFgEIAAAAIgBgBQgGgFgIgQQgJgRgKgQIgVgiIgIgPIANgWQAGAFAFAGQgFgGgGgFQgHgEgHgEIgBgEIgHgSIgCgHIAKgGQAFgDACgEIAMAEIAJAFIAgASIgHACQgTAKgJAWQAJgWATgKIAHgCQAHgCAHADQATAIgIAWQgHAUgWgBQgJAAgIgEQgIgEgGgIQAGAIAIAEIAUAfIAVAgIABADQAJANAKAFQAAAQAHAOQAHAPAFAPQAFAQAJAPIADAGIgfAMQgEgQgHgPgAv5JaIABgEIAAgLQADguAAgpIACg6IAQgQIAEAPIAGATIABADIADAkQgGAhAEAhQACAbAFAKQgPALgKAAQgKAAgGgLgAg3JcIAAgWIACgBIgCgBIgIgCQAFgLAGgGIACgHIAHgSIAHgPQAFgJACgIIAEgWQABgDAFgKIASgiIABgDIALgaIACgEQAIgRAEgSIAHgjIADACIADACIAEABIADADQAFACADADIgCAGQgEAPgGAPIgPAjIgKAbIgDAJIgNAkQAAAEAAAEQgDgFgGgDIgBgBQgFgDgEgBIgEgBIAAAAIgCAAIACAAIAAAAIAEABQAEABAFADIABABQAGADADAFQgHAIgFAJIgJAPIgJAQQgEAJgDAIIgFARQgEAOABARgAgQH7IAFgFIgFAFgAgWH0IAAgBQAAgCADgFQgDAFAAACIAAABgAgGHhQACgEAEgFQgEAFgCAEgAgMHdIACgHIgCAHgAudJHQgagBAJgPIADgFQACgLAEgKIANgkIAMgiIADAAIADALQABAOABAQQAAAFgBAGIAJgOIABgCIAKgUIAIgSIACgCIABgDIAEgLIAAABIAIAQIgBADIgBADIgBACIAAABIgCAGIgIAYQgGATgJARQgEAHAAAGQgBAFABAEQgCAIgHADQgLAFgNAAIgCAAgAOwIXIgRgIQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIACgRIACgTIACgTIABgTIACgRQAAgKgBgJIgDgTQgCgKABgJIgBgBQgEgEAAgGQAAgLADgKQAEgLgGgJQgEgGAAgGIgCgNIgBgKIAAAAIAAgDIgCgCIAAAAQgBgGABgHIAEADIADABIAQAFIABABIAKABIABABIAAgBIAGAAIAAAAQAJgBAGgGQgGAGgJABIAAAAIgGAAIAAABIgBgBIgKgBIgBgBIgQgFIgDgBIgEgDQgCgEACgFQADgJAAgJIACgSIABgQIABgOIAAgEQgBgKAGgJQAFgGAGgFQAJAEAHAFQAHAGAEAIIAGALIABADIABAMIgBATQAAAJABAIIAEAWIgBACIgCACQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgBAFIgCAEIACAAQABAHAEAHQAEAHABAJQAAAJgFAJIgEAJIgBAEIgBADIgBAJIgBARIABAUIABASQABAJADAJIAGASIACAIQgCAHADAIIAFASIAEATIAAAAIAAABIgBAAIgBAAIAAAAIgBAAIgCgCIgBgCIgKgOIAKAOIABACIACACIABAAIAAAAIABAAIABAAIAAgBIAAAAQACAKgDAJQgHACgHADQgIADgJADIgFAAQgGAAgFgDgAPIHjIACATIACARIgCgRIgCgTIgBgOIABAOgAO8HgIADASQABAKADAJQgDgJgBgKIgDgSIgDgPIADAPgAO0H8IABgBIAAAAQACgKAAgJQAAAJgCAKIAAAAIgBABIgBAGIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABgGgAOrFLIAAgDIAAgHIgBgOIABAOIAAAHIAAADgAOyFHIgBgLIABgIIgBAIIABALgAO/FAIABgMIgBAMgAO5EMIgBgMIAAgFIABgRIgBARIAAAFIABAMgAOoEHIAAgHIgBgLIgCgOIACAOIABALIAAAHgAn1IWIAAAAgAkvINQgXAAAKgMQAAAAABAAQAAABABgBQAAAAABAAQABgBAAAAIAGgJQAHgMAGgNQAIgSAEgTQADgTABgQIgCgIQAQgOAFgSQAEgTAAgSIATgEIAQgCQgIAUgEARQgEASADAUQgNARgHARIgOAkQgFAQADATIAAAHQgCAIgHADQgLAFgNAAIgCgBgAkqIGIAAgCQAAgFAEgEQgEAEAAAFIAAACgAkdIFQgDgDAAgEQAAgEACgDQgCADAAAEQAAAEADADgA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gBAJIgCAHIgEAGIgBAAQgTgBgagFQABATgCAUIAAAZIAAALQgBANACAPIAFAgQADATAJASIAFALIAGASIAAgBIgIgCIgBAAIgBAAIAAAAIgBAAIgVAGIgBAAIgBABQgIACgHAAIgBAAIAAAAgAsMmeIAAgGIABgZIgBAZIAAAGgAM9jmQgDgLAHgBIAEgBQADACADAAIAJgBIAIgCIADgBIALgBIARgBIANAAIABAAIACAHIABANQgFACgBADIgBAEIgQABIgSABIgRACIgOACQgFgJgCgJgAMmjVIgogDQgQgBgQgEIgGgBQgHgDAEgGIAEgJQAAAAABAAQAAgBAAAAQABgBAAAAQABAAABAAQAFgDADABIACADIAAgDQAHgCAJAAIASgBQAJgBAJABIARAAQAFAAAFABQgEALAAAMQAAAGADAFIgPgBgAJ8jXIgOgGIgGgBIABgCQABgHADgGQAEgHAHgBIADAAQACgBABgDIAEABIACAAIABAAIAAAAIAEABQAOABAOAEIAKACIAHABQAIAAAHgDIgFAQIgBADQgIACgJAAIgUABIgRAAQgFAAgDADQAFgGACgIIABgFQAAgGgEgGQAEAGAAAGIgBAFQgCAIgFAGIgCACIgBAAIgCAAgAJXjkIgSgGIgSgGIgDAAIgCAAIgBgCIAAgDIAAgEQACgMALABQgDgKgKADIgEADIgKgCIgTgEIgFgCIABgCQADgCAFgBIATgDIASgDQAJgBAKAAIATABIASAAIATgBIATABIAEABQAKAEgBAMQAAAEgDACQgIADgLAAIgTgBIgUAAQgIgBgJABIgOABIgHgCIgDgBIADABIAHACIAEACIASAIQAHADAHgCQACABADgCQgFAEgFAFQgFAGABAGIgIgCgAO3jjQgFgFgJAAIgEAAIgGgEQAGgDAHgDQAJgEAAgGIACAVIAAAEIAAAAgAOLjwIAEAGIACADIgEADIgBABIgBgNgAIPj6QgYgJgigJQgEgFgGABIgBABQgHgGAGgJIACgDQAEgFAHgBQAJAKAKACQAJACAIAEIANAFIAFACIATAEIAKACIgHAIQgGAKAFAIIAAABQgJgFgJgIgAOQj4IAAgBIgBgCIADgPIAAgEIABgSIgBgTIAAgQIgBgTQAAgJgEgHIAAgBIAKgGIAPgLIABAAQAIABAHAEIAIAFIAAAOIgBAOIgBAOIgCAQIgCARIgCASIgBARQgFgEgIAIIgNAMQgEgBgHgHgAH+j6IgEAAIgOgCIgTgDIgMAAIgEAAQgJAAgHgCIgCgDIgFgGIADgCQAEgBACgFQAHAEAIgBIALADQAiAJAYAJIgRAAgAF2j/IAAAAIAAAAIABAAIAAAAQADAAABgEIAAAAIABgBQACgGAAgFIgBgHQgCgIgFgEQAFAEACAIIABAHQAAAFgCAGIgBABIAAAAQgBAEgDAAIAAAAIgBAAIAAAAIAAAAIgMgCIgEgBIgigBIglgBQgTAAgTgDIgWgCIAAAAIgRgBIgBAAQgRgBgQgGIgKgDQgNgCgOABIgHABQgNAAgKgBIgEgBQgJgEgJABQgKABgJAEQAEgCABgGQADgJAAgJQgBgKgGgIIgBgBIAOAIIAQAEIAJADQAKABAMADIAHABIAlAJQASAFATgBIAVAAIAQABIAkACIAJABQAPABAOAAQAUgBASgEIAKgBIAFgBIAIADIAKADQAJAEAKABIAEAAIAAAAIAAgFQACgJgFgHIAJgDQABADACABQgCgBgBgDIgJADIgBgCIgHgJIABgBQAEgGAJgCQAJgCAKgBQAHgBAEAFIABADIgBACIgHASQgEAKADAKQgFACgDAGIgHgHQgEgDgGgBIAAACIABADIAKAIQgIAFgEAFIgCgBQgKgCgJADQgFACgFAAIgJgBgAGwkuIADgGIgDAGQgFgEAAgFIAAgBIAAABQAAAFAFAEIAAAAgAA9kVQgGgDgBgGQgKABgIgCIgGgCIgNgEIgRgDIgHgBIgKgCIgRgCIgQgCIgBAAIgRgCIgSgDIgTgEIgTgDQgJgCgKAAIgRACIgDABIgNACIgFAAIgMADQgDgJgIgEIgMgHIgGgCQgIgEgKgCIgOgDIgDgBIgNgDIgHgBIgSgCIgTgDIgOgCIgFgBQgKgBgKgDQgIgDgJAAIgSgBIgTAAIgTgBIgFAAIgBAAIAAAAIgNgBQgKAAgJAEQgGACgFADQAEgEAAgJIgBgIQABgEgDgCIACAFIAAABIABAIQAAAJgEAEQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgJgEgJgCIgTgDIgIgCIgKgEIgRgEIgTgEIgJgBIgIgCIgSgCIgTgDIgSgEIgBAAIgSgEIgSgDIgKgCIgIgBIgRgFIgCAAQgGgBgFAAIgEAAQgCgCAAgEIACgHIABgJIAAgEIANAAIAQADIAJADIAdAJQALAFALACIAPACQATADARAEQARAEASAEIAdACIACAAIAHAAQAOAAALADQAGAAAEgJQAFAIAAAJIAAAAIAAABIAAgBQAAgJgFgIQAIAHAKAAIATAEQAJACAKABIAGABIASAEIATAEIATAEIARAEIATAEIAJACIAHACIARADIASACIATABIATABIASABIAIAAIAKgBIAEgBIAGAFIAEAIQADAHAAAIIAAADQgBAJgJAFQAJgFABgJIAAgDQAAgIgDgHIgEgIIANAGIAQAHIAMAEIAFAAIARACIATAAIASACIATACIATADIAAAAIARACIAUACIAPAFIACABQAJADAJAAIAUABIAEAAIAIgCQAAgCAEgCQAGgLAGAFIABABQAGAIABAKQAAAJgDAJQgBAGgEACIAAAAIgCAAIgFgBgAQhliIgBgDQgBgCgEgCQgIgFgLAAIgSABIgSAAIgRACIgNAAIgBgEQgHgOgMgGIADgEIAIgIIAFgFIAQAAIAMgCIgMACIgQAAQAEgFgBgGQAAgFgFgBIAAgBIAPgGIASgHIARgJIAQgKIAPgMQAHgFABAGIAFgCQALgCAGAKQAFAHgBAKQgBAKgJACQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgJgDgKACQgJACgJAEIgQAIIgQAKIAAAAIAAAAIgCABIACAAIAAAAIABAAIATgBIATABQAJAAAJgCQAKgCAHgDQAJgCAGAGQAGAHACAIQADAJgCAKQgCAIgEAIQgFAIgJAEIgGACQgGAAgBgJgAQxl2QADgEAAgFQAAgFgDgFQgEgFgGgFQAGAFAEAFQADAFAAAFQAAAFgDAEgAQRl+IgRACIARgCIABAAIAEAAIAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAAAIAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIAAAAIgEAAIgBAAIAAAAgAQRmEIgDgBIAAAAIgEAAIgPABIAPgBIAEAAIAAAAIADABgAQImMIgSACIASgCIABgBIAGgBIAEAAIAAAAIAFABIgFgBIAAAAIgEAAIgGABIgBABgAQim4QADAAADgEIAAAAIAAgBIACgFQAAgEgFgDIgBAAIgDgBIAAAAIAAAAQgCAAgBAEIAAADIAAADIAAgDIAAgDQABgEACAAIAAAAIAAAAIADABIABAAQAFADAAAEIgCAFIAAABIAAAAQgDAEgDAAIAAAAIgBAAQgDAAgEgEQgEgEAAgDQAAgEAEgEQgEAEAAAEQAAADAEAEQAEAEADAAIABAAIAAAAgAnbliIAAAAgAOCmFQgFgIgHgGIgHgHQAMgHAJABQAGACAGAIIANAOIgGAGIgOAKQgCgHgFgGgAOcmVIgPgLQABgKgCgJIgEgPQACgEgFgHIgLgMIAKgEQAJgEAKgCQAJgCAKAAQAJAAAJADIAKAHIAAAAIABAAIABABIgGAIQgFAGgBAIIABATIACALQgJgBgGAHIgMAPIgCADIgGgHgAOZnCIAEAHIgEgHQgEgIgIgCQAIACAEAIgAOjm/IgDgKIADAKgAOwnCQAAgGAEgGQgEAGAAAGgAOynZQAJgCALAAQgLAAgJACgAxBmrQgDgKAHgFQAGgHAKgDIABAIIAAABIABAAQACAHAGAAIAAAAIABAAIADAAIABgBIAAAAIAAAAIgBABIgDAAIgBAAIAAAAQgGAAgCgHIgBAAIAAgBIgBgIQgBgGADgGQADgJAJgDIACACQAMgBAJACIAFABIAIACIACAAIACAAIAFACQAGACAEAFIABACIgOANQgHAGgIAGIgGgCIgCAAIgJAAIgJgBIAJABIgOAJIgMAKQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgKAAgDgMgAwWm/QgBAIgHACQAHgCABgIIAAgFQAAgGgCgHQgCgFgDgEQADAEACAFQACAHAAAGIAAAFgArXmyIAAAAgAwVm0IAAAAgAvrnWQgLgIgFAIIgIgCIAQgLIAQgLIABgCIACgBIANgIIAGgFQgCAFAAAFIABAHQADALAJABIgPAIQgIAEgGAGIAAAAIgDADQgEgGgFgEgAg5ncIgEAAIAAgDIgFADQgJADgNgFIgCgBQgSgIgUgCQgUgCgPgJQAKgNAHgOQAIABAIACIATAGQAIADAJgBIATgBQAJAAAJACQAJACAFAIIALAPIAKAQIAEAFQgYgGgPgBgAg9nfIAAgDQAAgSgFgLQAFALAAASIAAADgAwGnrQAAgIgCgEQgDgHAEgGQAFgGAHgEQAJgEAKACQAKACAEAJQgGAIgBAJIgBAEIgBACIgQALIgQALQgDgIAAgLgAv7n/QAGgFAHAAIAAAAIAAAAIAEAAIAAAAIAIADIgIgDIAAAAIgEAAIAAAAIAAAAQgHAAgGAFgAvCnhIACgBIAFgBQgBAAAAABQAAAAgBABQAAAAgBAAQgBAAAAAAIgDAAgAvCnhQgJgBgDgLIgBgHQAAgFACgFIABgBQACgDAEAAIAAADIAAAEQAAAHAEAIQACAFAFADQgFgDgCgFQgEgIAAgHIAAgEIAAgDQAAgGALgBQAJgCAIgFIAPgKIARgLIAPgKIAQgLIAPgMIAOgLIAIgHIAFgGIAHABIADAAIAFgBIAAAAIAAAAIACAAIADAAIAAAAIAAAAIgDAAIgCAAIAAAAIAAAAIgFABIgDAAIgHgBQgKABgJAEQgKAEgIgEQADAAAEgDQAGgGAAgJIAAgBQAAgLgEgIQgEgKgKgDIgEACIAAgBQADgEAEgDQAIgGAKAIIAIAFQAFAEAJAAIADAEQAFAHAHAEIADABQAHAEAHAGIgIASIgFACIAAgCIAAgDIAAgBIAAgFQAAgKgEgKQAEAKAAAKIAAAFIAAABIAAADIAAACIgDACQgLAFAIADIASgGQgHAGgHAEQgHAEgEAFQgCAEABACQADAGAEAAIgNAGIgQAJIgCABIgPAKIgPAKQgJAEgHAHIgDACIgLAIIgOAMQgHAGgFAIQgFACgGgBQgEAAgDgCIAAABIgFABIgCABIAAAAgAoapAQgJgBgJgCQgJgCgKgBIgPABIAAAAIgCgIIgGgOQgEgGgHgFIAAgEQAHAAAHABIAPAFIASADQAKACAIAGQAIAFAEAIIAKAQQgHgDgJgBgAq7pUQgJgCgKAAIgSAAIgUgBQgKgBgIgDIAAAAIACgFQABgHAAgJQAHgIgLAAQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAABIAAgFQAEgEABgGQAKgBAJABQAKACAJAEIALAEIARAIQAJAEADAKIACALIABAHIgGgDgAtmpZQgEgBgEgEQgGgIAAgKQgBgHABgIIAAgEIACgDIADgEIAEgCQAKADAEAKQAEAIAAALIAAABQAAAJgGAGQgDADgDAAIgBAAgAtmpZIAAAAgAstpeIAAAAgAsVptIAAgBIAHgHIADgEIAAAFIABABIgCADQgCAFgDACIgEgEgAscp4QgEgJgJgEIgBgBIgFgDIgDgFIgMgPQgHgGgCgNQAGgGAIgDIARgFQAIgDAJAAQAKABAHAGQADADABAEIgEASIgEASIgBAHQgBADgDADIgKAMgAsLp5IAAAAgAsIqNQAKgEAIgGIAPgJIARgKIAOgKIAPgMIAHgEIACgBIAKgHQgEADgBAFIgBALIABAIQABAIAGAHQADAEAGACIAAAAIAGABIACAAIAAAAIACAAIAAAAIACAAIAAAAIAAAAIgCAAIAAAAIgCAAIAAAAIgCAAIgGgBIAAAAQgGgCgDgEQgGgHgBgIIgBgIIABgLQABgFAEgDIADgCIADAAQAJACAHAGIAOANQAFAHgCAJQgCAIgHAEIgHACIgKAEQgIADgJAGIgDgCQgHgHgKABIgTADIgTAEIgRACQgJABgHADQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBgAqVqfQAEAAADgDIACgDQADgDAAgHQAAgIgEgHIgEgFQgEgDgFAAQAFAAAEADIAEAFQAEAHAAAIQAAAHgDADIgCADQgDADgEAAIAAAAIAAAAQgDAAgDgCIgBAAIAAAAQgHgGgBgKIgBgDQAAgIAFgHIAAAAQACgDACAAIABgBIAAAAIABABIgBgBIAAAAIgBABQgCAAgCADIAAAAQgFAHAAAIIABADQABAKAHAGIAAAAIABAAQADACADAAIAAAAIAAAAgAqmrMIAAAAg");
	this.shape_21.setTransform(130.3,90.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CC33").s().p("As6JGQAAgQgCgOIgDgLIgBgEIgEgKIgBgDIgFgFQgLgMgGgOQgHgSgGgSQgFgRABgSIgBglQAAgTAEgTQAEgTAMgQQAIgJAJgIQgLgFgOAAQgTgBgTAFIgGACIgBgHIABgHIgBAHIABAHQgOAFgIAPQgJAQgGASQgGARADATQADASAHASQAGATADATQADARAGARIABACIgQAQIgNARQgHAJgKADQACgNADgMQAFgTgDgSIgEgSIgGgRQgHgSgFgSQgEgTAGgRIAPgkIAKgVIAKgUIAFgIQAMgUASAPIAEgHIACgDIAEgEQALgMARAAQAFAAACAFQAEAIAHAGQAKAJARACIgDACIgLAHIALgHIADgCQAPgHASAEQASAEAPAGQgQAHgLAPQgMAPgGATQgGATgDATQgCATADATIAJAnIAAAAQABASAEATQADALAFAMIgFAKIgBADIAAAAIgBADIgIARIgLAVIAAABIgJAOQABgGgBgFgAuNEoIAAAAgAIgkQIgCgHIgEgHIgEgHIgJgMIgBgDIgJgJIgIgGIgCgCQgLgIgOgGIgPgFIgBgBIgSgEIgRgFIgKgCQgIgBgIABIgOgBIgFgBIgHgBIgIgEQgMgFgFgIIgCgDIAAgGIABgJIgBgIIAAgEQAGAGAKgBIAPgCIARgBIAQgBQAJAAAIgCQAJgCAKAAQAJAAAHAGIACADQADAHAGAFIACACIAOALIAPAMQAHAHAJADQAIACAHAEQAIAEAFAHIAFAIIgFgIQgFgHgIgEQgHgEgIgCQgJgDgHgHIgPgMIgOgLIABgBIACAAIANABIAQgBIARgCIAPAAIAQgCIAQgEIASgDQAHgBAAAJIAAABQABAJAEAHIAIAQIAHAPIADAFIAEAKQACAJAGAIIAGALIgCABIgFgGIgGgGIgCgCIgEgDQgFgEgGgCIgWgEQgMgDgLgBQgGgBgDACIABAJQAAAJgBAJIgFATIgGAOIgCgEgAGrmAQAJAFAJACIASAGQAKADAIAFIAPAKIAPAJQAJAFAHAGQAHAHAEAJIACAHIgCgHQgEgJgHgHQgHgGgJgFIgPgJIgPgKQgIgFgKgDIgSgGQgJgCgJgFIgRgKIARAKgAJBl3IAIALIAKAPIAGALIgGgLIgKgPIgIgLIgKgJIAKAJgAPQkiQgGgIgJgEIgQgIIgHgCIAFAPIgGgFIgEgDIgEgCIgEgCIgDAAIgGAAIgIAAQgIgBgHABIgVABIgFABIAEAHQAEAHAIAFQgEAAgDgBQgFgCgEAAIgNAAIgIgFIgSgIQgIgFAAgIIAAgDIAAgDQAAgFgDgDQgFgJgHgGQgHgGgJgBQgKgCgEgHQAEAHAKACQAJABAHAGQAHAGAFAJQADADAAAFIAAADIAAADQAAAIAIAFIASAIIAIAFIgCAAIgMACIgPACQgHABgHgBIgPgBQgHgBgCgCIgLAAQgKgBgHgHIgSgSQgFgFgCgGQgCgFABgJIgOANQgHAHgEAJQgDAIgCAJQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBIgCgEIgDgGIgEgGIAAgBIgCAAQgJgGgLgCIgdgHIgNgEIgEgCIgDgFIgHgPIgIgQQgEgHgBgJQAFgDAJgBIAPgCIARgBQAIAAAJABQAJABAJAFQAIAFAIACQAJACAKAAIATgBIAFAAIgBABQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAFABAEADQAAALgGAIIgNAPIANgPQAGgIAAgLQgEgDgFgBIAAAAIgCgBIACAAIASgCQAJgBAIACIAPAFIASAHQAJADAIAGIAIAHIAAAAIABABIADAFIAKATQADAIAHAGIAHAIIgHgIQgHgGgDgIIgKgTIgDgFIAEAAIARgBQAKgBAJACIAMADIAKADIAHADQAKAEAJAGQAFAEADAGIAFAMIgFgMQgDgGgFgEQgJgGgKgEIgHgDIANgCQAKgCAKgBQAKgBAHAHIAFAGIAHAHQAHAGAFAIQAEAGADAHIABAEQADAGgBAHIAAABIAAAFIgHgHgAO/lDIAKALQAFAFABAHQgBgHgFgFIgKgLIgNgNIANANgAK3lJIgEANIAEgNQADgJAAgKQgBgJgDgJQgDgGgFgEQgFgGAAgHQAAAHAFAGQAFAEADAGQADAJABAJQAAAKgDAJgANplEQAIAAAIACQAJACAIABIALACIgLgCQgIgBgJgCQgIgCgIAAQgLgBAAgIQAAAIALABgADulJQgGgHgIgFQgHgFgJgDIgMgDIgEAAIgTgEIgHgBIgIgBIgSgDQgIgBgIgDIgHgDIgHgEQgHgEgGgHIgMgLQgGgGgCgIIACANIAFAUIgGgDIgCgBQgIgEgFgGIgIgKIgEgFIgLgPIgKgQQgGgIgJgCQgIgCgIABIgSABQgJAAgJgDIgSgGQgIgCgIAAIACgDQADgHAAgGQAAgHgGgEQAGAEAAAHQAAAGgDAHIgCADQgHAOgLAMIgCACQgLANgDATQgDALAAAMQgCgBgDgGQgJgQgPgIIgEgCQgNgGgRgDIgBgBIgGgLIgHgSIgEgSIgCgTQAAgIgDgFQATgBATACQASACATAAIAJAAQAPABAOAEQAGACADACIAOABQAJgBAKAAQAJAAAJgCQAJgCAGABQAFABABAEIANALIAPALQAIAGAJACIASAFQAFABADADQAIAFAJACIASADIARABIATAAIATACIATACQAJAAAKADQAJADAIAGIAEADQAIACAIAAQAIAAAJgBQAIgBAIAAQAJABAJgBQAJgBAJgCIATgCQAJAAAIACQAHADACAGIAAAEIABAIIgBAJIAAAGIgCALIgDARIgBAHIgEAMIgGAQIgCgHIgBgEIgDgKQgEgIgFgHQgGgHgHgFIgRgKQgGgDgGgBIgPgEIgNgDQgEAAgCgCIgGgDQgCgCgFABIACAJQADAJAEAJQAFAJAHAHQAIAIgEAJQgCAFgDAEQgDAEABACIgKgNgAFLljIAAAAIAAAAQgBgBgBgFIAAAAQgCgJgEgIQgFgIgGgGQgHgGgJgBIgSgCIgOAAIAOAAIASACQAJABAHAGQAGAGAFAIQAEAIACAJIAAAAQABAFABABIAAAAIAAAAgACOmUIATAEQAJABAIAEQAJADAIAGIAQALQAGAEACAGQgCgGgGgEIgQgLQgIgGgJgDQgIgEgJgBIgTgEQgJgDgEgHQAEAHAJADgADjmQIADAJIgDgJQgCgHgFgFQAFAFACAHgAhxmXQgFgIAAgIQAAgKAJgIQAHgHABgKIABgIQAAgOgKgMQAKAMAAAOIgBAIQgBAKgHAHQgJAIAAAKQAAAIAFAIgABLmxIABAUIABAFIgBgFIgBgUQAAgGgEgDQAEADAAAGgAgGnLQAGAFAJADIASAEQAKABAJAFQAIAFACAKIADAHIgDgHQgCgKgIgFQgJgFgKgBIgSgEQgJgDgGgFQgHgGgEgIQAEAIAHAGgAJYmFIAAAAgAiomUIgIgCIgJAAIgMgBIgNgBIgNAAIgOgCIgNgEIgFgBIgOgGIgNgHQgFgDgCgFQgCgEABgEIgMAOQgGAIgDAHIgDgEQgCgEgEgCIgJgGIgHgEIgEgDQgDgDgCgDIgLgcQgDgFgEgEIgEgDQgIgGgKgCQgKgCgHgEIgIgEIAFgKQgDgGgGgHQgGgHgIgFQgIgGgHgGQAHgFAJAEQAJAEAKAAIASACIASAAQAKAAAJACQAKABAIAEQAKAEAFAIIAGAJIADAGIAFAKIADAIIAJAQQAEAHADAIIABAFQAAAGgEAFIAAABIAAgBQAEgFAAgGIgBgFQgDgIgEgHIgJgQIgDgIIARABQAKABAKAEIAQAIIAPAJQAIAGAFAIIALAPIAOANIAOAMIAEAEIgEgEIgOgMIgOgNIgLgPQgFgIgIgGIgPgJIgQgIQgKgEgKgBIgRgBIgFgKIgDgGQAHgDAIABIAQAAIARgCIATgBQAJAAAIADQAJADAIAEQAJAFAGAHIAEAEQADAFAAAIIACATIAEASIAHASIAGALIADAFIAIAIIgBABIgGgCgAl+oSIARAAQAJABAJADQAJADAEAJQAEAIACAIQACAIAEAHQAGAJAAAKQAAgKgGgJQgEgHgCgIQgCgIgEgIQgEgJgJgDQgJgDgJgBIgRAAIgTgBIATABgAFemWIAAAAgAoBmyQgDgIgIgGIAFgMIgGgNQgDgJgFgIIgKgRQgFgHgGgHIgNgPIgMgMIgOgLIgPgMIgRgJIgDgBIgEgBIAAAAIAAAAQgFAAgEAEIAAABIAAgBQAEgEAFAAIAAAAIAAAAIAEABIADABIARAJIAPAMIAOALIAMAMIANAPQAGAHAFAHIAKARQAFAIADAJIAGANIgFAMIgBAAIgQgKIgQgKIgQgJIgKgGIgGgDQgJgEgIgGIgCgCQgGgGgCgIIgCgLIgBgHIgCgLQgDgJgKgFIgRgHIgKgFQgJgDgKgCQgKgCgJABIAAgBIAAgFQAIgCAIgBIARgDIATgDIAUgDQAKgBAHAGIADADIAHAGIAOALIAIAEIAKADQAJACAIAEIAMAGIgMgGQgIgEgJgCIgKgDIATAAQAKABAJgBIATgCIAUgDIASgBIALABIAPAIQAIAEAGAGQAHAGAIAGQAIAFAGAHQAGAHADAGIgFAKIgFAHQgFAIgEAJIgIAQIgBgEIgGgSIgJgSIgJgQQgFgIgHgFQgIgGgKgCIgSgDIgPgEQgHgCgHABIgFAAIAFADQAHAFAEAGIAFAPIADAHIAAAAIACALIABATIAAARIAAABIAAATIAAALIgBgBgAnsouQAJACAJAFIAPAKQAHAFAIAEQAJAEADAKQADAJABAKQgBgKgDgJQgDgKgJgEQgIgEgHgFIgPgKQgJgFgJgCQgJgCgJgBQAJABAJACgAjCnvIAAAAgAkyn0IAAAAg");
	this.shape_22.setTransform(122.9,83.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("AcEC+IAAgmIAAmiIAArNMg4HAAAIAGCIIAALhIAARGMA4BAAAg");
	this.shape_23.setTransform(143.7,99.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.1,1,1).p("AQlCJQAIACAIABQAJABgBAHQAAABgCAAQgIACgJAAQgIAAgJAAQgJgBgIABQgKAAgIAGQgFADAFAFQgKABgJgCQgIgCgJAAQgKAAgJADQgEABgEACQAKACAGAEQgBADgCABQgGABgFAAQgIgCgIACQgKACABAGQAFADADABQgKAGgLABQgGABgGABQgGABgGACQgFABgFABQgMADgNAAQgJAAgHAEAPWF/QgLgCgKgBQgOgEgOgFQgLgDgKABQgbAEgEgNQgFgOgXgBQgTAAgTgFQgPgEgPAAQgSABgGgMQgEgIgKgEQgQgHgQgMQgPgLgVgDQgTgDgUABQgSABgSABQgIAAgHgBQgTgFgRgIQgFgCACgDQAIgOASgEQASgGATgEQASgFASgDQASgCARgFQARgEARgDQASgEAVgEQAKgGAOACQAZADAZgKQAFgEAJABQARAAASgDQADgBgBgCQAAgEADAAQAHgBAIABQAMABAMgGQgBgEAEgDQABAAABgBQADgBADAAQAMgBgGgHQACgGAKgBQAOAAANADQAEABADgDQAEgBAEgBQALgBAKgBQAHgBAHgCQAFgBAGgCQgCgCgBgCQACgBAEgBQgFgGgKgCQgKgBgJACQAFAEADAFQgNAAgPACQgjgHghANQgCABgCABQgCABgBAAAOmDYQAFgCAFgDQAEgCAFgCQAGgDAHgCQAIgDAHgDQAJgDAIgDQAHgDAIgDQAJgEAIgEAQVFxQACgBACgCQAIgEAJgEQAKgDAFgIQACgDAGABQAKABAJAEQAJAFAJADQABAAACABQgBABAEADQAGAGAGAGQADADAAAEQgKAAgKACQgLACABgLQACgLAKgFAN8BDQgMgFgMgGQgKgFgEgPQgKgfggADQgKABgIgHQgUgQggACQgkACgEgdQgEgXgSgLQgQgJgLgOQgJgNgJgOQgPgYgTgUQgUgVgUgOQgJgegXgPQgagQgeAIQgIACgFgEQgIgFgIgJQgMgOgSgMQgYgPgKgYQgNgegdAGQgWAFgMgQQgSgYgUgUQgUgVgWgPQgWgPgcgJQgIgDgHACQgUAHgVgCQgbgEgbgMQgagNgagPQgMgHgOgBQgbgBgZgMQgcgMgbAEQgcAEgZAOQgZAOgXALQgFAAgKgEQgcgMgcAIQgbAIgZANQgeAQgXgYQgJgKgRAHQgHADgLABQgbADgXgPQgUgNgXgIQgcgLgbAKQgbALgdAGQgFgDgGgDQgbgNgdgGQgdgGgZAMQgTgKgWgHQgqgOgbAfQgIgNgUAMQggATgVgVQgWgWgcAVQgXgUgWAMQgogTgjAUQgGAEgGgEQgSgIgTgDQgngFgXAeQglgKjAgFQi/gFiFBBA8AD9QIpgDAcACQBMAGBNgNQBJgMBKgHQBGgGBGgMQBCgMBDAGQBNAGBOgDQBLgDA5AQQAMAAAMgBQAngDAnABQAmABAmABQAjABAjgDQAngEAngEQAhgDAjgEQAmgEAmgEQAigDAigDQAigDAigDQAmgEAmgDQAkgEAkgBQAkAAAkgCQAlgDAlgCQAhgCAhgDQAlgEAjAEQAlADAmgGQAlgGAmgCQAmgDAoAGQABALAHADQgmAKgvAGQguAFgvAGQgfAEggADQgSACgSAGQgRAFgSADQgSADgSAIQgQAGgRAHQgSAHgRAJQgKAFAHAJQAMAPAVABQASABASACQAIABAHABQAMABALAAQAUgBASAFQASAEARAIQAOAHAJALQADAEAFADQAQALAVgBQAHAAAEAEQALANAXADQAJABAJAEQARAHATACQADAAACAAQACABADABQAOAFAQgBQAVgBAAANQAAAEAGAAQASAAASAEQARADASACQAQACgEALQgCAHAGABQASADASACQAQABAPACQASACASADQAQADAQgBQAWgBALAKQgIADgIABQgDABgDAAQADACAEABQAlAMAlAMQANAIATAGQAKADIHA4ANsgaQgCACgBADQgBAFgCAEQAAgDAAgDQAAgLAGgJQgDACgDABQgKAFgHAJQgCAAABgFQAGgPAPgHQgDAAgDAAQgLAAgKgCQADgCAEgCQAQgJARAGQAGACACAEQAFgLAKgCQgCAEgDACQgCACgBADQAWAAAHARQgEgBgDgCQgKgDgJgBQACACADADQAJALgEANQAAgDgCgDQgGgIgHgGQgBgBACAFQACAGACAGQgGgIgHgCQgCABAAAEQgDAHACAIQAAADABADQgCAIABAIQABAKADAJQACAJADAJQADAJAAAKQACABACAAQABgCACgDQACgIAEgIQADgJAFgIQAGgIAHgHQAAgDACgDQgGAEgHADQgHAEgFAGQAAgHAFgGQAGgGAIgDQgFgFgJAAQgHgBgGADQADgEAGAAQACAAACAAQAAAAAAAAQAHgJAJABQAHABABAGQABgDAAgDQADgBACACQADADAAADQAEgFAEgCQABAEAAAEQAUABAEARQgCgEgGgCQgGgCgFgBQAJAGABALQAAADgBADQAAgJgIgGQgFgDgGgDQADAEgBAGQgBAKgHAFQACgJgCgJQgCgFgCgDQgBADgCAEQgDAHAAAKQgBgFgBgFQgBAAAAgBQgBgDABgDAN7gcQgDgCgDAAQAAgCAAgCQgGADgDAFQAEAKgFAIQAFAAADADQACABABACQABAAACAAANzgFQAAABAAABQgBAEAAAFQAAAFAAAFQABAFAAAGQACAIADAIQAEAKAAAKQAAACAAACQAEABAEACAOUAAIAAAAIAAAAAOUAAQAIgBAHABQgGgGgJAGAOnAZQgGAIgFAIQgFAIgFAIQgGAKAAAGQgCgBgCgBAOMBJQAGADAHACQAHACAEAEQgDAHADAGINdAAAPyCAQgJgHgOgEQgSgEgSgFQgPgEgEgHANVFQQAHgEAIACQAIABAHABQAKABAHAFQgBABgCABQABAEAEAAQAfgBAeAFAPMFtQgMAAAAAHQAAACACAAQAKAEAJABQAFABAAAAQgCAAgCAAQgCABgCABQACABACAAQAJADALAAQAEAAADABQADABACAAQgCADgBACQACADACADQgLgBgHgDQgIgDgHgJATUGRQAJACAJABQAPACgHAJQgCADgEAAQgKgBgKACQgFAAgDADQAAABACAAQAEACgCADQgEAEgGgBQgPgBgPgBQgEAAgDACARIGfQAEAAADgBQAKgCAJAAQAJABAKAAQAIAAAIAAQAJAAAJABQAJAAAJAAQAJABAJAAQAJABAGgGQACgBgBgCQgGgHgKgDQgIgBgIgCAcBIFQoEgmgFgCQgSgFgMgLQgCgCgCgCQgHgHgJgDQgGgCgGgCQgJgCgJAAQgIABgIgDQgCgFgEgEQgHgHgKABQgHAAgIABQgDADgDgBQgRgGgTgGQgFABgGAAQgKAAgGgIQgBgBgDAAQgKgBgKACQgKABgIgFQgHABgFgGAR7F+QAIABAKgCQAFgBAFACQACABABACQADAJAFAIQACAEgHAAQgJgBgKgBQgKAAgJAAQgKAAgKAAQgJAAgJgCQgKgBgJgBQgJAAgIABQgCAAgCAAQgIAAgHgCQgJgCgJgEQgJgEgCAEQAFgJAIgGQABgBAAAAQgNgBgKAAQgPABAMgHQgOgCgPgBQAEgEAGgDQAJgDAKgCQALgDAGAIQACACACABQAFAFAKABQgFADgFAFAROF3QgDAAgCACQADAAACgBQAAAAAAgBgARJFqQgBAEgCAEAQzH5QAIgCAJgCQAJgCAIABQAEAMAAAKQACgBABgCQADgHABgIQAOgDAOAAQAEABADAAQgEgDgGgCQgKgCgKgBQABgCAEgCQAGgCAHgDQgEAAgDAAQgJAAgJABQgDABgDABQgEABgEgBQgJgFgKgEQACAEADAEQADADABADIAAAAQgJACgHAHQgBABgCACgARGFlQgFAFgBAG");
	this.shape_24.setTransform(144,63);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D6FF66").s().p("AgFAAQgIAAgJAAIgQAEIADgDQAGgFAKgCIAAAAIgFgGQgDgEgBgEIATAJQADABAFgBIADgCIASgBIAHAAIgNAFQgDACgCACIAUADQAGACAEABIgHgBQgOAAgOADQgBAIgDAHIAAADQgBgKgEgLg");
	this.shape_25.setTransform(255.6,113.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgNADQABgJAKgFQgBABADADIALAKQADADABAEIgSACIgEAAQgIAAACgJg");
	this.shape_26.setTransform(257.3,100.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66FFFF").s().p("AgGAAIAAAAQAHgEAGAGQgHgCgGAAg");
	this.shape_27.setTransform(236.4,62.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B36302").s().p("AgDAmIADgGIAEgPQADgJAFgIQAGgGAHgHIAAAGIABABIgLAOIgKAQQgFAKAAAFIgDgBgAgPAhIAAgEQAAgKgEgJIgFgPIgBgKIAAgKIABgLIAAgDIADAEIADgBQgCAKABAJIAEARIAFASQADAIAAALIgIgEg");
	this.shape_28.setTransform(234.9,66.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009900").s().p("AAgAiQgBgGgDgCIgCAGQgEAIAAAJIgCgKIAAgBIgBgFQAAgEACgDQgGAEgGAEQgHADgEAGQAAgGADgHQAGgGAIgDQgEgFgJAAQgGAAgGADQADgFAGgCIACAAIAAAAQAIgBAIADQgGgIgKAGQAHgJAKABQAGACABAFQABgDAAgDQADgBACADQADACABADQAEgFADgBIACAJQATABAEARQgCgDgGgDIgLgDQAKAHAAAKIgBAGQABgJgJgFIgLgHQADAFgBAGQgBAKgHAEQACgJgCgIgAgrgEQAAgLAGgJIgFADQgKAGgIAIQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgCQAFgPAPgHIgGAAQgKAAgLgBIAIgFQAPgJASAGQAFACACAFQAFgMAKgCQgCAEgCACQgDACgBADQAUAAAHARIgHgCIgRgFIAFAFQAHALgDANQAAgDgBgDQgGgIgHgGQAAAAAAAAQAAAAAAABQAAAAAAABQABABAAABIAEAMQgFgIgIgCIgGgCIAAgDQgGACgDAFIgDAGIgDAGIAAgEg");
	this.shape_29.setTransform(235.5,61.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC66").s().p("A8AJZIAAxFQIpgCAcACQBMAGBNgNQBJgMBKgHQBGgGBGgNQBCgMBDAGQBNAHBOgDQBLgEA5AQIAYgBQAngCAnABIBMACQAjABAjgEIBOgHIBEgIIBMgIIBEgGIBEgFIBMgIQAkgDAkgBQAkgBAkgCIBKgFIBCgFQAlgDAjADQAlAEAmgGQAlgGAmgDQAmgCAoAGQABAKAHAEQgmAJgvAGIhdAMIg/AHQgSACgSAFQgRAFgSADQgSAEgSAHIghANQgSAHgRAKQgKAFAHAJQAMAPAVABIAkADIAPABIAXABQAUAAASAEQASAEARAIQAOAHAJAMQADAEAFADQAQAKAVAAQAHgBAEAFQALAMAXADQAJACAJADQARAIATABIAFABIAFACQAOAFAQgBQAVgBAAAMQAAAEAGAAQASABASADIAjAGQAQACgEAKQgCAHAGABIAkAFIAfAEIAkAFQAQADAQgBQAWgBALAKQgIADgIABIgGAAIAHAEIBKAXQANAJATAFQAKADIHA5IAAMXgARVj0QAEALAAALIADgEQADgHABgIQAOgDAOABIAHABQgEgEgGgBIgUgDQABgDAEgBIANgFIgHgBIgSACIgGABQgEACgEgCIgTgJQACAEADAEIAEAGIAAAAQgJADgHAGIgDADIARgDIALgBIAGAAgAOapXIAAABIgEABIAEgCg");
	this.shape_30.setTransform(144,137.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#78E3FE","#D5FFFF"],[0,1],0,-32.1,0,32.1).s().p("AOnFmQgDgFADgHQgEgFgHgCIgNgFQAAgGAGgJIAKgRIALgQIACAKQAAgJADgIIADgGQACACACAGQACAIgCAJQAHgEABgKQABgGgDgFIALAHQAIAFAAAJIABgGQgBgKgJgHIALADQAGADACADQgEgRgUgBIgBgJQgEABgEAFQAAgDgDgCQgCgDgDABQAAADgBADQgBgFgHgCQgJgBgHAJIAAAAIgEAAQgGACgDAFQAGgDAHAAQAJAAAFAFQgIADgGAGQgFAHAAAGQAFgGAHgDQAHgEAGgEQgCADAAAEQgHAGgGAIQgFAJgDAIIgGAQIgEAFIgDgBQAAgKgDgJIgFgSIgEgTQgBgIACgKIgBgGQgCgIADgHQAAgEACgBQAHACAGAIIgEgMQgBgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAHAGAGAIQACADAAAEQAEgOgJgLIgFgFIATAFIAHACQgHgRgWAAQABgDACgCQADgCACgEQgKACgFAMQgCgFgGgCQgRgGgQAJIgHAFQAKABALAAIAGAAQgPAHgGAPQAAACAAAAQAAABAAABQAAAAAAABQAAAAABAAQAHgIAKgGIAGgDQgGAJAAALIAAAGIADgIIADgGQAEALgFAHQAFAAADADIAAACIgBALIAAAKIABALIAFAQQAEAKAAAKIAAAEIgYgLQgKgFgEgOQgKggggADQgKABgIgGQgUgTggACQgkACgEgcQgEgYgSgLQgQgJgLgOIgSgaQgPgYgTgVQgUgUgUgPQgJgegXgOQgagOgeAFQgIACgFgDQgIgEgIgJQgMgOgSgMQgYgOgKgZQgNgegdAGQgWAGgMgRQgSgYgUgUQgUgVgWgPQgWgPgcgJQgIgDgHACQgUAIgVgDQgbgDgbgNQgagNgagPQgNgHgNgBQgbgBgZgLQgcgNgbAEQgcAEgZAPQgZAOgXALQgFAAgKgFQgcgMgcAJQgbAHgZANQgeAQgXgYQgJgKgRAHQgHADgLABQgbAEgXgQQgUgMgXgJQgcgLgbALQgbAKgdAGIgLgFQgbgOgdgGQgdgGgZAMQgTgKgWgHQgqgNgbAeQgIgNgUAMQggATgVgVQgWgWgcAWQgXgVgWANQgogTgjATQgGAEgGgEQgSgIgTgCQgngGgXAeQglgKi/gFQjAgFiFBCIgGiIMA4HAAAIAALLg");
	this.shape_31.setTransform(143.7,36.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("ACWDcIgTgBIgTgBIgUAAQgJAAgJgBIgTgCIgRAAIgEAAIgPgCQgJgCgJgEQgHgDgCADQAFgIAGgHIABgBIAKgIIAEgCIARgIQAKgEAFgIQACgDAGABQAKACAJAEIASAHIADABQgKAGgCAKQgBAMALgDIAUgCQAIABAKgBQAFgBAFABQAAAAABABQAAAAABABQAAAAAAABQABAAAAABIAIARQACADgFAAIgCAAgABCC/IAFgBIAAAAQgDAAgCABgAA/C4IADgIIgDAIgAA5C3QABgHAFgEQgFAEgBAHgAgRC/QgPAAAMgHIgdgDQAEgEAGgCIATgGQALgCAGAHIADAEQAEAEAKABIgKAIIgVAAgAAOC3IAAAAgAiSi/QgDgCgFAAQAFgIgEgLQADgFAGgCIAAAEIAGABQgCACAAADQgDAIACAIIABAFIgDABIgDgEg");
	this.shape_32.setTransform(247.1,81.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5F3A01").s().p("As4GSQgcgCooADIAArgQCEhBDAAFQC/AFAlAKQAXgeAnAFQAUADARAIQAGAEAHgEQAigUAoATQAWgMAXAUQAcgVAWAWQAVAVAggTQAUgMAIANQAbgfAqAOQAWAHATAKQAagMAcAGQAdAGAcANIAKAGQAdgGAbgLQAbgKAcALQAXAIAUANQAXAPAbgDQALgBAIgDQAQgHAKAKQAUAYAegQQAagNAagIQAcgIAcAMQAKAEAFAAQAXgLAZgOQAZgOAcgEQAbgEAcAMQAZAMAbABQAPABANAHQAaAPAaANQAbAMAbAEQAVACAVgHQAGgCAIADQAdAJAVAPQAWAPAVAVQATAUASAYQAMAQAXgFQAdgGAMAeQAKAYAYAPQASAMAMAOQAJAJAHAFQAGAEAHgCQAegIAaAQQAYAPAIAeQAVAOATAVQAUASAPAYIASAbQAKAOAQAJQASALAEAXQAEAdAkgCQAggCAUASQAIAHAKgBQAggDAKAfQAFAPAKAFIAXALIAIADIAEABIAEACIANAFQAHACAFAEQgEAHAEAGQAEAHAPAEIAjAJQAOAEAJAHQAFAEADAFQgNAAgPACQgjgHghANIgEACIgDABQgogGgmADQgmACglAGQgmAGglgDQgjgEglAEIhCAFIhJAFQgkACgkAAQgkABgkAEIhNAHIhDAGIhFAGIhLAIIhHAHIhOAIQgjADgigBIhNgCQgngBgmADIgYABQg4gQhLADQhOADhNgGQhCgGhDAMQhFAMhGAGQhLAHhJAMQg1AJg0AAQgYAAgYgCg");
	this.shape_33.setTransform(105.3,48);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEA512").s().p("AB0CaQgSgGgNgIIhKgYIgBgEQAIgBAHgDQgKgKgUABQgRABgQgDIgjgFIgfgDIgkgFQgHgBADgHQADgLgQgCIgjgFQgRgEgSAAQgGAAAAgEQgBgNgUABQgQABgPgFIgFgCIgEAAQgTgCgRgHQgJgEgKgBQgWgDgMgNQgEgCgGAAQgVAAgRgKQgEgDgDgEQgJgLgOgHQgRgIgSgEQgTgFgTABIgXgBIgPgCIgkgDQgVgBgMgPQgHgJAJgFQARgJATgHIAhgNQARgIATgDQARgDARgFQASgGATgCIA/gHIBdgLQAugGAngKQgHgDgCgLIADgBIAFAAIgBgCQAigNAjAGQAOgCAOABQgEgFgFgEQAKgCAJABQAKACAFAGIgGACIADAEIgLADIgNADIgVACIgJACQgCADgFgBQgNgDgNAAQgKABgCAGQAFAHgMABIgGABIgCABQgEADABAEQgLAGgMgBQgIgBgIABQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgSADgSAAQgIgBgFAEQgaAKgZgDQgOgCgJAGIgnAIIgiAHQgRAFgSACIgkAIIgmAKQgSAEgHAOQgCADAEACQASAIASAFQAIABAIAAIAkgCQAUgBATADQAUADAQALQAPAMARAHQAJAEAEAIQAHAMASgBQAPAAAOADQATAEAUAAQAWABAFAOQAFANAagEQALgBALADIAbAIIAVAEQAHAJAIADQAIADAKABQAGAGAGgBQAJAFAKgBQAJgCAKABQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAGAIALAAIALgBIAjAMQADABAEgDIAMgBQAKgBAHAHQAEAEACAFQAJADAHgBQAJAAAJACIANAEQAJADAHAHIAEAEQALALATAFQAEABIEAnIAAAlQoHg4gKgDg");
	this.shape_34.setTransform(258.8,97.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0066FF").s().p("ABlCqQgTgGgLgLIgEgDQgHgHgJgDIgNgEQgJgCgJAAQgHABgJgDQgCgFgCgEQgHgHgKAAIgOABQgEAEgDgCIgjgMIAHAAIAIgCIAHAAIAAAAIAAAAIACAAIACAAIASABIAQAAIAQABIASAAIATABIABAAIABAAIAAAAIABAAQAHAAAFgFIAAgCIAAgBQgGgIgKgCIgPgDIAPADQAKACAGAIIAAABIAAACQgFAFgHAAIgBAAIAAAAIgBAAIgBAAIgTgBIgSAAIgQgBIgQAAIgSgBIgCAAIgCAAIAAAAIAAAAIgHAAIgIACIgHAAIgLABQgLAAgGgHQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAgBgBAAQgKAAgJABQgKACgJgFQgGABgGgHIgEgFIAEgGIgFgBIgHAAQgMgBgJgCIgEgBIAEgCIAEAAIgEgCIAAACIgEACIAEABIgVgEIgbgIQgLgEgLACQgaAEgFgNQgFgOgWgBQgUgBgTgEQgOgFgPABQgSABgHgMQgEgIgJgEQgRgGgPgLQgQgMgUgDQgTgCgUABIgkABQgIABgIgBQgSgFgSgIQgEgCACgEQAHgNASgFIAmgJIAkgIQASgDARgEIAigIIAngHQAJgGAOABQAZAEAagKQAFgEAIABQASAAASgDQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQgBAAABgBQAAgBAAAAQAAgBABAAQAAAAABAAQAIgBAIABQAMABALgGQgBgEAEgDIACgBIAGgCQAMAAgFgIQACgGAKAAQANgBANAEQAFABACgDIAJgCIAVgDIANgCIALgDIgDgEIAGgCQgFgHgKgBQgJgBgKACQgJgHgOgEIgjgKQgPgEgEgGINaAAIAAGhQoEgmgEgBgAA1B8QAEAAACgCIAAgBIABAAIABgDQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAEgDAFAAIACgBIALgBIABAAIAAAAIADAAIACAAQAEAAADgDQACgCAAgCQAAgFgKgBIgTgDIATADQAKABAAAFQAAACgCACQgDADgEAAIgCAAIgDAAIAAAAIgBAAIgLABIgCABQgFAAgEADQAAAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAIgBADIgBAAIAAABQgCACgEAAIgBAAIAAAAIgCAAIAAAAIgdgCQgEAAgEACQAEgCAEAAIAdACIAAAAIACAAIAAAAIABAAgAhBBfQAJABAKABIATAAIAUAAIARABQAGABgCgEIgIgRQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgDgBgFABQgJACgIgCQgBgDgDgDIgMgMQgEgDABgBIgDgBIgRgIQgJgEgKgCQgGgBgCAEQgGAHgKAEIgQAIIgEADQgLgCgFgEIgDgEQgHgHgLACIgTAGQgFACgEAFIAcACQgLAIAOgBIAYAAIgCABQgHAHgGAJQADgEAIAEQAJADAJACIAQADIADAAIARgBIATACgAjSBBQAAAAAAABQAAAAABAAQAAAAAAABQABAAABAAQAJADAKABQgKgBgJgDQgBAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQABgIALABQgLgBgBAIIAAAAgAjOAsIgDAAIgDAAIgCgBQgVgCgVAAIAAAAIAAAAIgGAAIAAAAIgFAAIgDgHIgCADQAAAEAFAAIAFAAIAAAAIAGAAIAAAAIAAAAQAVAAAVACIACABIADAAIADAAgAkuAaIAQACQAJACAHAEQgHgEgJgCIgQgCIAAAAIgCAAIgBAAIgBAAIgBAAIAAAAQgFAAgEACIgBAAIABAAQAEgCAFAAIAAAAIABAAIABAAIABAAIACAAIAAAAgAidh5IgPAGIgQAGIgQAFIgNAFIgJAEIgJAGIAJgGIAJgEIANgFIAQgFIAQgGIAPgGIASgIIgSAIgAj+hrIgNACIgLADIgKACQgNADgMAAQgJAAgIAEQAIgEAJAAQAMAAANgDIAKgCIALgDIANgCQALgBAJgGIgIgEIAAgBQAAgGAKgBQAIgCAIACIABAAIACAAIAAAAIABAAIADgBIADAAQADgBABgEQgHgDgJgCQADgDAFgBQAJgCAJAAIACAAIABAAIAAAAIABAAIAFAAIABAAIAFABIADABIADABIAHAAIAAAAIAAAAIAGAAIADgBQgDgCAAgCQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBQAIgFAJAAQAJgBAIABIASAAIAQgCQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIAAAAQAAgGgIgBIgQgDIAQADQAIABAAAGIAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgQACIgSAAQgIgBgJABQgJAAgIAFQgBABgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAACADACIgDABIgGAAIAAAAIAAAAIgHAAIgDgBIgDgBIgFgBIgBAAIgFAAIgBAAIAAAAIgBAAIgCAAQgJAAgJACQgFABgDADQAJACAHADQgBAEgDABIgDAAIgDABIgBAAIAAAAIgCAAIgBAAQgIgCgIACQgKABAAAGIAAABIAIAEQgJAGgLABgAitBYQgIgDgHgJQAJACAMABIAHAAIAFABIgEAGIAEAFQgKAAgIgDgAi8BJg");
	this.shape_35.setTransform(261.2,93.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,0,361.3,198.8);


(lib.fcb_background_pressed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_pressed();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_background_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_disabled();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(shadow_mc, "shadow");
		//component.registerSkinElement(darkshadow_mc, "darkshadow");
		//component.registerSkinElement(highlight_mc, "highlight");
		//component.registerSkinElement(highlight3D_mc, "highlight3D");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.darkshadow_mc = new lib.fcb_leftOut();

	this.shadow_mc = new lib.fcb_leftIn();

	this.highlight_mc = new lib.fcb_rightIn();

	this.highlight3D_mc = new lib.fcb_rightOut();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight3D_mc},{t:this.highlight_mc},{t:this.shadow_mc},{t:this.darkshadow_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_check_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(check_mc, "foregroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check_disabled();
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3.2,7.1,7);


(lib.fcb_check_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//
		//component.registerSkinElement(check_mc, "check");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check();
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3.2,7.1,7);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,press:1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}
	this.frame_5 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// check_enabled
	this.instance = new lib.fcb_check_1();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// check_disabled
	this.instance_1 = new lib.fcb_check_disabled_1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// background pressed/disabled
	this.instance_2 = new lib.fcb_background_pressed_1();

	this.instance_3 = new lib.fcb_background_disabled_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

	// background static
	this.frb_frame_mc = new lib.fcb_background_1();

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(6));

	// check box frame
	this.fcb_frame_mc = new lib.fcb_frame();

	this.timeline.addTween(cjs.Tween.get(this.fcb_frame_mc).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


// stage content:
(lib.pp_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:106});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("pp_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pp_Scene3.html","_self");
		}
	}
	this.frame_1 = function() {
		playSound("futureperfecttense");
	}
	this.frame_25 = function() {
		playSound("theverbformindicatingbefore");
	}
	this.frame_105 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_126 = function() {
		this.gotoAndPlay("scene4_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(80).call(this.frame_105).wait(21).call(this.frame_126).wait(1));

	// Layer 5
	this.instance = new lib.contentfutureperfecttense();
	this.instance.setTransform(276.5,196.3,1,1,0,0,0,238.3,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127));

	// main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_1 = new lib.Copyright("synched",0);
	this.instance_1.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance_2 = new lib.contentsurfshopscene();
	this.instance_2.setTransform(68.7,60.5,1.436,1.436);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape.setTransform(341.8,42.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhEBSQgPgMAAgPQAAgIAFgGQAFgFAIAAQALAAAGAMQAHAPAaAAQAUAAAUgJQAVgKAAgMQAAgQgNgFQgKgDgagBQgVgBgSgGQgXgKAAgTQAAgZAagVQAagUAeAAQAMAAASAFQAXAHAAAKQAAAGgFAFQgFAGgHAAQgHAAgLgDQgMgCgGAAQgRAAgNAIQgOAIAAAJQgBAFAFADQAEADAKABIAeACQAcACARAOQASANAAAbQAAAhgmARQgcAMgiAAQghAAgTgOg");
	this.shape_1.setTransform(324.3,43.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhYBhQgFgFAAgHIABgPIABgQIABgWIAAgXIAAgWIgBgYIgBgXIgCgWQAAgIAGgGQAHgGAJAAQAJAAALARQA4BSA4AxIAAgTIgBhSIgCgOIgBgOQAAgRASAAQAVgBAABAIAAAUIgBBPIgCAUQgCAQgRAAQgIAAgMgKQgxgsg7hOIAAAnIAAAeIABAfQAAAlgTAAQgJAAgGgGg");
	this.shape_2.setTransform(304.7,43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_3.setTransform(286.3,42.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLBcQgGgFAAgIIABgFIABgGIgBgRIgBgSQAAgRgDgbIgEguIgGAAQgcAAgRgEQgOgEAAgNQAAgGAEgFQAGgHAJABIATACIAVABIAXAAIAVAAIAdABIAdACQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAIgfgBIgegCIADA0QADAfAAATIABANIAAAMQAAAKgEAHQgFAKgJAAQgGAAgFgEg");
	this.shape_4.setTransform(268.9,42.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLBcQgGgFAAgIIABgFIABgGIgBgRIgBgSQAAgRgDgbIgDguIgHAAQgcAAgRgEQgOgEAAgNQAAgGAEgFQAFgHAKABIAUACIAUABIAXAAIAVAAIAdABIAdACQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAIgfgBIgegCIADA0QADAfAAATIABANIAAAMQAAAKgEAHQgFAKgJAAQgGAAgFgEg");
	this.shape_5.setTransform(239.6,42.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag4BNQgSgUAAgbQAAgpAlgsQAfgmAfAAIALABIAHABQAGgGAIAAQANAAADAPQACALAAAOQAAAGgEAGQgEAHgKAAQgLAAgFgNQgDgFgDgBQgBgBgJAAQgQAAgTAZQgdAhAAAeQAAAOAJAJQAKAKANAAQAKAAANgGIATgNQAKgGAFAAQAIAAAFAFQAFAGAAAGQAAAIgGAFQgjAegiAAQgdAAgUgVg");
	this.shape_6.setTransform(222.5,42.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_7.setTransform(206.5,42.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhABlQgEgFAAgHIAAiQIAAgPIAAgPQAAgHAFgFQAFgFAIAAQAEAAAEACQAPgDAMgBIAUgBQAPAAAWAGQAbAIAAAJQAAAIgFAFQgFAFgHAAIgHgCQgQgEgYAAIgPABIgXACIAAArQATgFANgBQAWAAARADQARACAAAPQAAAIgGADQgFAEgHAAIgUgBIgSgBQgJABgXAFIAABQQAAAHgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_8.setTransform(190.4,43);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhEBeQgFgFAAgHIAAgdIAAgcIABhlQAAgIAFgHQAGgIAMABIAfACQASACAKAHQA3AbAAAoQAAARgMALQgLAMgXAJQAiATARAUQAEAFAAAGQAAAHgFAFQgFAFgIAAQgHAAgFgFQgngkgsgOIABApQAAAHgFAFQgFAFgHAAQgIAAgFgFgAgmADIAGAAQAfAAANgGQAGgDAGgFQAFgGAAgDQAAgOgSgNQgPgNgTgBIgPgBg");
	this.shape_9.setTransform(174.2,42.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_10.setTransform(157.8,42.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4BgQgFgFAAgHIAAgjQAAgUACgkQADgnAAgUQABghARACIANgCIASgBQAXAAAWAQQAYASAAAaQAAAhgZARQgXARgeAAIgKgBIgBA6QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgXgxIgBAsIAIABQASAAANgJQAOgKAAgRQAAgKgNgJQgNgIgMAAIgIAAIgFAAIgBASg");
	this.shape_11.setTransform(142.5,42.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_12.setTransform(116.5,42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhEBeQgFgFAAgHIAAgdIAAgcIABhlQAAgIAFgHQAGgIAMABIAfACQASACAKAHQA3AbAAAoQAAARgMALQgLAMgXAJQAiATARAUQAEAFAAAGQAAAHgFAFQgFAFgIAAQgHAAgFgFQgngkgsgOIABApQAAAHgFAFQgFAFgHAAQgIAAgFgFgAgmADIAGAAQAfAAANgGQAGgDAGgFQAFgGAAgDQAAgOgSgNQgPgNgTgBIgPgBg");
	this.shape_13.setTransform(99.9,42.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgyBXQghgaAAg+IAAgSIABgSIAAgPIAAgOQAAgKAEgKQAFgLAJgBQAHABAFAEQAGAFAAAHIAAAWIAAAWIgBASIgBASQAAAQAFARQAFAUALAIQAFAEAUAAQAgABALg6QAGgcAAg2QAAgHAFgHQAFgJALAAQAIABAFAGQADAFAAAFQAAAzgFAcQgHApgVAdQgJAMgNAJQgQAKgPgBQggABgQgMg");
	this.shape_14.setTransform(81.6,43.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLBcQgGgFAAgIIABgFIABgGIgBgRIgBgSQAAgRgDgbIgEguIgGAAQgcAAgRgEQgOgEAAgNQAAgGAEgFQAGgHAJABIATACIAVABIAXAAIAVAAIAdABIAdACQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAIgfgBIgfgCIAEA0QADAfAAATIABANIAAAMQAAAKgEAHQgFAKgJAAQgGAAgFgEg");
	this.shape_15.setTransform(63.3,42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgyBXQghgaAAg+IAAgSIABgSIAAgPIAAgOQAAgKAEgKQAFgLAJgBQAHABAFAEQAGAFAAAHIAAAWIAAAWIgBASIgBASQAAAQAFARQAFAUALAIQAFAEAUAAQAgABALg6QAGgcAAg2QAAgHAFgHQAFgJALAAQAIABAFAGQADAFAAAFQAAAzgFAcQgHApgVAdQgJAMgNAJQgQAKgPgBQggABgQgMg");
	this.shape_16.setTransform(44.4,43.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhABlQgEgFAAgHIAAiQIAAgPIAAgPQAAgHAFgFQAFgFAIAAQAEAAAEACQAPgDAMgBIAUgBQAPAAAWAGQAbAIAAAJQAAAIgFAFQgFAFgHAAIgHgCQgQgEgYAAIgPABIgXACIAAArQATgFANgBQAWAAARADQARACAAAPQAAAIgGADQgFAEgHAAIgUgBIgSgBQgJABgXAFIAABQQAAAHgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_17.setTransform(27.3,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;