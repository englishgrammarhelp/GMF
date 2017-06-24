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


(lib.btn_pro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBDQgFgEAAgHQAAgNgCgaQgDgYAAgNQAAgIgCgEQgNAHgOATIgCACIAAAjIgBAJIAAAIQAAAHgFADQgFAEgHAAQgJAAgEgJQgCgGAAgMIAAgqIgBgRIAAgRQAAgLADgIQAFgLAIAAQAHAAAFAFQAFAFAAAGIgBALQASgVAQAAQASAAAGAOQAHgHAJgDQAJgDAKAAQAXAAAIAXIAFAgQADARAFAsQABAHgFAEQgFAEgHAAQgOAAgCgNQgCgMgCgWIgEggQgDgVgFAAQgDAAgKAFQgJAFgFAEQAAAOAEAXQADAZAAANQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape.setTransform(212,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA8QgEgEAAgGIAAhLIABgLIAAgLQAAgGADgFQAEgEAIAAQANAAACANQATgPAZAAQAYAAAAAfIAAAIQgBASgQAAQgPAAAAgQIAAgLQgYAEgMAXIAAA5QAAAGgEAFQgFAEgHAAQgHAAgEgFg");
	this.shape_1.setTransform(196.9,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAxQgRgRgBgbQgBgYAPgUQASgYAeAAQAXAAAOATQAMARAAAZQAAAZgOATQgRAWgZAAQgWAAgPgPgAgQgTQgHALAAANQAAAOAIAIQAHAGAIAAQAIAAAIgHQAIgIABgOQABgkgVAAQgMAAgJANg");
	this.shape_2.setTransform(184.5,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BdQgEgEAAgHIAAiEIAAgOIAAgOQABgHAEgEQAFgFAGAAQAFAAAEABIAZgCIASgCQANAAAVAFQAZAHAAAJQAAAIgFAEQgEAFgHAAIgGgBQgQgFgVAAIgPABIgUADIAAAnQARgFAMAAQAUAAAQACQAPACAAAOQABAHgGADQgFAEgGAAIgTgBIgQgBQgJAAgUAGIAABJQAAAHgGAEQgFAFgHAAQgHAAgEgFg");
	this.shape_3.setTransform(171.3,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAyQgUgPAAgbQAAgbAQgUQARgYAcAAQAUABAOAGQARAJABASQAAANgPAKQgGAEgVAIIglARQAGAGAHADQAJADAIAAQAQAAAKgHQAKgFAGAAQAMgBAAAMQAAAOgTAJQgQAGgTAAQgaAAgSgNgAgPgbQgIAHgEAPIAagMQAOgGAJgGQgIgFgMAAQgJAAgIAHg");
	this.shape_4.setTransform(146.5,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQA0IgnhdIgCgGQABgHAFgFQAFgEAGAAQALAAAEAJQAHAOASAzIAQgmIAKgaQAFgJAJAAQAHAAAGAFQAEAEAAAGQABAFgUAqIgYAzQAAAFgFAEQgEAEgFgBQgLABgFgMg");
	this.shape_5.setTransform(134.4,34.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBUQgEgEAAgGIAAgWIgBgWIABgaIABgYQAAgGAFgFQAFgFAHABQAFgBAEAFQAFAFAAAGIgBAYIgCAaIABAWIAAAWQAAAGgEAEQgFAFgFAAQgHAAgFgFgAgKg7QgFgEAAgHQAAgIAFgFQAGgFAFAAQAIAAAFAFQAGAFAAAIQAAAHgGAEQgFAFgIABQgFgBgGgFg");
	this.shape_6.setTransform(125.2,31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggA8QgSgGAAgNQABgMAOAAQAFABAKADQAKADAGABQAWAAAAgKQAAgGgRgIQgWgKgGgDQgRgLAAgRQAAgYAZgHQAPgFAbgBQAMAAAFAEQAIAEAAAKQAAAWgLAAQgMAAgCgKIgKgBQgaAAAAAIQAAAFAPAHQAXALAJAFQARALAAAQQgBAUgSAKQgPAIgVABQgPAAgNgGg");
	this.shape_7.setTransform(115.6,34.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA8QgSgGAAgNQABgMAOAAQAFABAKADQAKADAGABQAWAAAAgKQAAgGgRgIQgWgKgGgDQgRgLAAgRQAAgYAZgHQAPgFAbgBQAMAAAFAEQAIAEAAAKQAAAWgLAAQgMAAgCgKIgKgBQgaAAAAAIQAAAFAPAHQAXALAJAFQARALAAAQQgBAUgSAKQgPAIgVABQgPAAgNgGg");
	this.shape_8.setTransform(103.9,34.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAyQgTgPAAgbQAAgbAPgUQARgYAcAAQAUABANAGQATAJgBASQAAANgOAKQgHAEgTAIIgmARQAGAGAIADQAIADAIAAQAPAAAMgHQAKgFAFAAQAMgBAAAMQABAOgUAJQgRAGgSAAQgaAAgSgNgAgPgbQgHAHgFAPIAagMQAOgGAJgGQgIgFgMAAQgJAAgIAHg");
	this.shape_9.setTransform(91.3,34.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtA8QgEgEAAgGIAAhLIAAgLIAAgLQABgGAEgFQADgEAIAAQANAAADANQASgPAaAAQAXAAAAAfIAAAIQgCASgOAAQgPAAgBgQIAAgLQgYAEgLAXIAAA5QgBAGgEAFQgEAEgIAAQgHAAgEgFg");
	this.shape_10.setTransform(79.2,34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7BLQAAgHAEgEQAFgEAGAAIAPACQAKACAIAAQAPAAAJgLQAHgKACgWQgGAFgIAEQgHADgHAAQgXgBgPgPQgPgPAAgVQABggATgUQAUgVAhABQAKgBAJADQAHADAFAFQAPACAAAQQAAAIgCANQgGAcAAAdQgBAmgMAQQgQAYglAAQgtAAAAgSgAgRg0QgKAMABATQgBAOAGAHQAFAFAKAAQAIAAAKgJQAJgKACgLIAEgjIgIgEQgDgBgEAAQgRAAgMANg");
	this.shape_11.setTransform(66.7,37.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglAxQgRgRgBgbQgBgYAPgUQASgYAeAAQAXAAAOATQAMARAAAZQAAAZgOATQgRAWgZAAQgWAAgPgPgAgQgTQgHALAAANQAAAOAIAIQAHAGAIAAQAIAAAIgHQAIgIABgOQABgkgVAAQgMAAgJANg");
	this.shape_12.setTransform(54.1,34.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtA8QgEgEAAgGIAAhLIAAgLIAAgLQAAgGAEgFQAFgEAHAAQANAAACANQATgPAaAAQAXAAAAAfIgBAIQgBASgPAAQgOAAAAgQIgBgLQgZAEgLAXIAAA5QABAGgFAFQgEAEgIAAQgHAAgEgFg");
	this.shape_13.setTransform(42.4,34.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BZQgEgFAAgHIAAggQAAgSACgiIACg2QABgeARABIALgCIARAAQAVAAAUAPQAWARAAAXQAAAfgYAPQgVAPgbAAIgKAAIAAA1QAAAHgFAFQgEAEgHAAQgGAAgFgEgAgVgtIgCApIAIAAQAQAAANgIQAMgJAAgQQAAgJgMgJQgLgHgMAAIgHABIgEAAIgBAQg");
	this.shape_14.setTransform(30,31.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5.1,1,1).p("Ay5kwMAlzAAAIAAJhMglzAAAg");
	this.shape_15.setTransform(121,30.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099FF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_16.setTransform(121,30.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_17.setTransform(121,30.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CCFF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_18.setTransform(121,30.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_19.setTransform(121,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,247,66);


(lib.btn_per = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBDQgFgEAAgHQAAgNgCgaQgDgYAAgNQAAgIgCgEQgNAHgOATIgCACIAAAjIgBAJIAAAIQAAAHgFADQgFAEgHAAQgJAAgEgJQgCgGAAgMIAAgqIgBgRIAAgRQAAgLADgIQAFgLAIAAQAHAAAFAFQAFAFAAAGIgBALQASgVAQAAQASAAAGAOQAHgHAJgDQAJgDAKAAQAXAAAIAXIAFAgQADARAFAsQABAHgFAEQgFAEgHAAQgOAAgCgNQgCgMgCgWIgEggQgDgVgFAAQgDAAgKAFQgJAFgFAEQAAAOAEAXQADAZAAANQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape.setTransform(189.2,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA8QgEgEAAgGIAAhLIAAgLIAAgLQAAgGAFgFQADgEAIAAQANAAADANQASgPAaAAQAXAAAAAfIgBAIQgBASgOAAQgPAAgBgQIAAgLQgYAEgLAXIAAA5QgBAGgEAFQgFAEgHAAQgHAAgEgFg");
	this.shape_1.setTransform(174.1,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAxQgRgRgBgbQgBgYAPgUQASgYAeAAQAXAAAOATQAMARAAAZQAAAZgOATQgRAWgZAAQgWAAgPgPgAgQgTQgHALAAANQAAAOAIAIQAHAGAIAAQAIAAAIgHQAIgIABgOQABgkgVAAQgMAAgJANg");
	this.shape_2.setTransform(161.7,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BdQgEgEAAgHIAAiEIAAgOIABgOQAAgHAEgEQAEgFAIAAQAEAAAEABIAYgCIATgCQANAAAUAFQAaAHAAAJQAAAIgFAEQgFAFgGAAIgGgBQgPgFgWAAIgOABIgWADIAAAnQATgFALAAQAUAAAQACQAQACAAAOQgBAHgFADQgEAEgHAAIgSgBIgRgBQgIAAgWAGIAABJQAAAHgEAEQgGAFgHAAQgGAAgFgFg");
	this.shape_3.setTransform(148.5,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBRQgEgEAAgHIAAgMIAAgNIgCg6IgWgCQgPgCAAgOQAAgGAFgFQAFgEAGgBIAUACIgBgNIAAgLQAAgHAFgEQAFgEAHAAQAPAAAAAdIAAAJIALgBQAOAAAFACQAJAEAAAKQABAIgFADQgFAFgHAAIgFAAIgHAAIgLABIACA8IAAAFIABAHQAAAbgRAAQgFAAgFgEg");
	this.shape_4.setTransform(125,32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAzQgTgPAAgaQAAgWARgYQATgdAWABQAMAAARAGQAUAIAAALQAAAFgFAFQgDAFgIgBQgFABgGgGQgIgFgOgBQgGABgLARQgLARAAALQAAAMAJAIQAJAGAMAAQAIAAALgGQALgGADAAQAHAAAFAEQAEAFAAAGQAAAJgUAKQgSAHgLABQgYAAgRgPg");
	this.shape_5.setTransform(112.9,34.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAyQgUgPAAgbQAAgbAQgUQASgYAbAAQAUABAOAGQASAJAAASQAAANgPAKQgGAEgVAIIglARQAGAGAHADQAJADAIAAQAPAAALgHQALgFAFAAQAMgBAAAMQAAAOgTAJQgRAGgSAAQgaAAgSgNgAgPgbQgIAHgEAPIAagMQAOgGAJgGQgHgFgNAAQgJAAgIAHg");
	this.shape_6.setTransform(100.1,34.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBiQgFgEAAgGIAAgDQADgRAAgPIAAg4IgHABIgIAAQgGAAgFgEQgFgEAAgHQAAgLAMgEQAEgBAQgBIABgNQAEgaALgNQALgQAcAAQAWAAAAAQQAAAPgUAAQgOAAgHAKQgEAHgCAQIgBADIAXgBQAWAAAAAPQAAAPgXAAIgXABIAAAdIAAAgQABAVgDANQgDANgLAAQgGAAgFgFg");
	this.shape_7.setTransform(87.3,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtA8QgEgEAAgGIAAhLIAAgLIAAgLQAAgGAFgFQAEgEAHAAQANAAADANQASgPAaAAQAXAAAAAfIgBAIQAAASgQAAQgPAAABgQIgBgLQgZAEgKAXIAAA5QAAAGgFAFQgFAEgHAAQgHAAgEgFg");
	this.shape_8.setTransform(75.8,34.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAyQgUgPAAgbQAAgbAQgUQARgYAcAAQAUABAOAGQARAJABASQAAANgPAKQgHAEgUAIIglARQAGAGAHADQAIADAJAAQAQAAAKgHQAKgFAGAAQANgBAAAMQgBAOgTAJQgRAGgSAAQgaAAgSgNgAgPgbQgHAHgFAPIAagMQAOgGAJgGQgHgFgNAAQgJAAgIAHg");
	this.shape_9.setTransform(62.9,34.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0BZQgEgFAAgHIAAggQAAgSACgiIACg2QABgeARABIALgCIARAAQAVAAAUAPQAWARAAAXQAAAfgYAPQgVAPgbAAIgKAAIAAA1QAAAHgFAFQgEAEgHAAQgGAAgFgEgAgVgtIgCApIAIAAQAQAAANgIQAMgJAAgQQAAgJgMgJQgLgHgMAAIgHABIgEAAIgBAQg");
	this.shape_10.setTransform(50,31.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5.1,1,1).p("Ay5kwMAlzAAAIAAJhMglzAAAg");
	this.shape_11.setTransform(121,30.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_12.setTransform(121,30.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_13.setTransform(121,30.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_14.setTransform(121,30.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_15.setTransform(121,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_14},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_15},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,247,66);


(lib.BkScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AeqArQgEAAgDABQgFAAgEABQgPABgPABQgRACgRABQgJAIgSABQgJABgHgNQgVgFgXACQgiAEgLgaQAAAFgJALQgQANgUgBQgngBgVgYQgjACgjAAQgNgBgBgJQAAgBAAgBQgLAIgPACQgMACgNABQgQACgTgNQgEAHgQACQgRABgSACQgaADgUgVQgTgEgUACQgiACgegKQgFgBgQABQghAFgbgGQgYAFgagCQgKgBgJgCQgMgBABgZQADADAMgCQAPgGAPgBQBHgDBFAEQAFAAAMgLQAHgXAaAGQAcAHANAVQAEAFANADQALgNAZgIQAeAOAQAYQADgCAJgKQAdgPAdAXQAFAEAUgBQAIgEAIgCQAMgDAMgBQAtgFApAPQAJAEAIgDQAagKAfAGQAVAEAPAHQAVANAYgOQAVgEAIALQADAFAJAMQADAGAPgBAYZAPQAMgIAHgOQgWAFADARgAPEgcQAVAIAVAQQANgSAVgKQAIgEAIgCQAggHAWATQgJAagUAEQgWAGgcgFQgaAFgegDQgNgBABgXQABgFAAgGgAsIgBQARgLARgMQAOgJAPgGQAPgGAUANQAhAKArgGQANgSAaACQAMABANACQAaADAZAKQALAFALAFQANAHATgDQAdgHAfAAQBIAABWAIQAHAHAKABQAMACAHgIQAZgcAuAbQASAEAIgGQAGgEAIgDQAMgFANgCQAigGAcAKQAIADAGAHQAEAGALAIQAagOAtABQAIACAIAEQAKAEAIAEQAIAGAOgFQAggdArABQAKAAAJAEQAXALAcgDQBCgHBJARQAUgJAVgOQAigVApAIQAKACAHAGQAOAMAPgRQA5gHAwAbQAHAEAHAAQATAAARgMQAOgKAUACQAqAEApAVQAZgVAuABAPDgRQgDARgJAEQgLAGgLACQgaAFgegCQgaAXgwgIQgGgNgIgFQACANgMAFQgZALgmgGQgEgDgSgIQgZgCgngDQgJgEgYACQgBAegbgFQgMgCgNAAQgSAAgKgOQgLgPgHAFQgXARgfACQgYABAEgYQgLAEgKAFQgGAEgGAEQgOALgXgGQgYgGgLATQgFAFgGAJQgRgDgRAAQgDAAgCAAQgEAAgNgCQgCAAgCgBQgJgHgHAGIAAAAIAAAAQgKgTgNABQgRABgSAMQgUgGgBgVQgWgFgWAAQgcAAgbgCQhHgGhbABQgOgGgEAHQgHANgWAEQhIgGhJABQgBAAgBAAQgDAAgDAAQgRgBgPgPQgWgFgWAAQhiAAhmAAQgBgPgWAFQgXAQgigCQgCgHgQABQgLAMgWAOQgWgOgWgCQgDAAgKgLA7sAUQAEgHAPAGQAAAAABAAQAEADAPABQAcADARgHQAygTBDAAQAJgJAOgDQAHgBAIAAQBLAABTAFQAlgZA3ACQAMAAAMADQANACANADQARAFAQAGQAtASAvACQAhACAggIQBKgSBMgTQAMgDALgFQAMgGAOAFQAIADAFAHQAFAIAEAKQAEAIAAAHQAAAEACADQgaABgagCQgYgBgaALQgmACguACQgNAGgNABQgXABgbgCQgegDgeAAQgPAAgPgCQgegDgeACQgjACgfgHQgJgCgEgGQgGgIgPAJQgVAQgjgJQgygJg2ACQgFAAgLALQgCAPgRACQgPACgPACQgKABgKAAQhEAChDAAQgKAAgKACQgaAFgngEQgqADgvgDQgkAKgrAFQAEgagEgCAsVAFQAFgCAEgDQACAAACgBQAAAAAAAAIAAAAIAAAAQgCAIgLgCgAswAGQAOAAANgBIAAAAQgGAFgIADQgKABgDgIg");
	this.shape.setTransform(-48.6,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EgmPgB3IAAERIAAAdIAAAdIAAU7MBMfAAAIAA1JIAAheIAAjfIAA2XMhMfAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.3,1,1).p("AZOobQABAAABAAQAPAAAOAAQAlABAkgBQArAEAtABQAUAAAVAAIAAAAQA/gBA/gBQBCAAA/ADQBAAEBBACQAsACCtgQAZOobIgKAAQgkACgjAFAZOobIg7AAQgKAAgJAAUg61AASgAWgACQgIAAi8gSAbXocQAMABAKABIACAAQAQACAPACQANACALADAa2obQARAAAQgBQALAAALgBIACAAQAlgBAjgCQAbgCAagCAdjmnQAZAFARAPQgHgcgKgFQgQgFgJASgEAjlgD+QABAJgCAFQgDgCgDgCEAjkgDwQgCAFgDACQgyAdgtgeQgFANgNAFQhJAegSg1QgsAggTgpQgDgGgCgHEAmQgE8QiFAGgaAIQgDABgBABQgCAAgBgBQgNgHgWgQQgYAagcgHEAgmgFSIAAgBQABAAAAgBQAGgqAfAvQAIANAAAIQAAAUAZgGQAUgFAMADQADAAADgDQgDAAgCgBQgFgCgEgCEAgmgFSQgBAJAAAMAfLkfQAKgzA1ASQAYAIAEgaEAgvgGWQgVAFgFASQAKgQAQgHgEAgVgF/QAoAGgOgdAWGipQAEACADABQAuAWA/AKQA7ALA/gDQBBgDA9gEQAcgBAcgBQAXAAAXAAQAnAEAnAHQA1AKA4APQA6APAngCQAmgBA+gWQA+gVB6hbQikgMgIgHAcikzQAdgjArAMQAMAEADASQAIApAXgOQAFgCAFgGQABAAABgBQAQgHAXAKQACABACABAc+mMQgcgKgcAHQAPAUAYAIQAHgMAKgNgAdskCQADAMgEAIQgBAAgBAAQgFgBgFgCAdrjuQgBADgCACQgfAngwgiQAAAAgBAAQgLAGgQAKQgtgHAOg3QgGADgGADQg0AagwggQAAAAgBAAQgrAYg2gUQgeASgpAHQAAABAAAAQgEAggxgFQAAABgBABAfJkIQAAgNACgKAeNkIQAFgKAGgHAfOj2QgtAWg2gOAaCmMQBLAKgXgOQgggigUAmgAY4kpQASgqA9AeQABABABAAQABADABACQAEAFAGADQgJADgIAFAbfkfQgCACgDABAaVknQAegLAtARQABAAABABQABgBABgBQAPgMACgZQAaAGATAOQgHAHgFAJAbfkfQAAAIgBAFQADgCADgBAbikgQgBABgCAAAcZjkQAEgCADgBAcgIsQAtgEAhgRAa5JaQA3gIAsgCAXQkeQAAAAABgBQAhgcAzAMQAKADAJADAXFkSQAFgGAGgGAXFj+QAAAFAAAEAWPjaQABABAAAAQADgFgCgGAWfkdQAXgFAaAEAYTkTQgDACgEADQgEgCgFgCAY1kfQABgFACgFQAEACADABAQ+IsQASgBAPAEAN7IiQAFAAAFAAQgFAUACAbIgBAAQgfAEgZAKQgEgCgDgCAO3JEQASgLAXgFIABAAIAAAAQgKARgHATQgEgCgFgCATuJyQANgEAQgDAVOJrQAMgFARgCASEJhQAZAHAPgNAPQJYQgBADgBADAPQJYQARAJAUAIQgbASgigGQgBAAAAAAQgVAhguANAOqJyQAGABAHACAOwJKQAEgDADgDAM8JkQAGgDAHgCQAWAPAgALQgHAUgEAWQgBAAAAABQgBAEgBAFAOFJ8QgDgCgDgBQABgEABgEAsXkSQDgAGD+AUQAcADAdACIABAAQAKABAKABQAKABALABQEQAZEzApQFPiQLKCVAOFIiQAoAAAKAiA4/qnQgCgDgCgCQgBADgBADAsekSQoigNl4BLQoOgCgDAAQgIACgIABQgBAAi1ADEgmPgEJQB2gKBHgDQALAAAJAA");
	this.shape_2.setTransform(0,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AgfAXQgfgMgXgMQAagKAfgFIABAAQgCgbAEgUQAnAAAKAjIgHAFIAHgFQASgLAXgGIAAABQgJARgIATIgIgFIAIAFQARAIAVAGQgbASgjgGIgBAAIgNgDIANADQgVAhgsANQAFgVAGgUgAgfAXIAHACIgHgCIADgIIgDAIIAAAAgAAugDIACgFIgCAFgAAXASIAAAAg");
	this.shape_3.setTransform(92.7,103.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(99.3,98.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FEE1A3","#FFCC33"],[0,1],0,-57.3,0,53).s().p("EgmPAK/IAA05IC2gDIAQgDIIRACQF4hMIiAOIAHAAQDgAFD+AVIA5AFIABAAIgBAAIAAAAIAAAAIABAAIAUACIAVACIgFAAIgQgCIAQACIAFAAQEQAZEzApQFPiQLKCVIAAgBIAHADQAuAWA/AKQA7ALA/gDIB+gHIA4gCIAuAAQAnAEAnAHQA1AKA4APQA6APAngCQAmgBA+gWQA+gVB6hbIAAVGgANzD5IgCAKIACgKIABgBIgBABgANJC1QAWAPAgALQgHAUgEAVQAugNAVghIABABQAiAFAbgSQgUgHgRgJQAHgTAKgRIAAAAIgBAAQgXAFgSALQgKgigogBQgFAUACAbIgBAAQgfAFgZAKgATuDHIAdgGIgdAGgAVODBQAMgFARgCQgRACgMAFgAM8C6IANgFIgNAFgASVC5QANAAAKgIIAAAAIAAAAQgKAIgNAAIAAAAIgBAAQgGAAgHgBIgDgBIADABQAHABAGAAIABAAIAAAAgANJC1IgHgEIAHAEgAa5CwQA3gIAsgCQgsACg3AIgARfCFQgLgDgMgBIgBAAIAAAAIgEABIgCAAIgCAAIgBAAIABAAIACAAIACAAIAEgBIAAAAIABAAQAMABALADIAAAAgAcgCCQAtgEAhgRQghARgtAEgAN7B4IAKgBIgKABg");
	this.shape_5.setTransform(0,84.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("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");
	this.shape_6.setTransform(0,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#013FA3").s().p("AgqgBIAgAAIAVABIABAAIAfADQgrgBgqgDg");
	this.shape_7.setTransform(176.2,-11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#0066FF","#000099"],[0,1],183.3,20.4,183.3,-20.4).s().p("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");
	this.shape_8.setTransform(0,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#DA9836","#784D22"],[0,1],160.7,-0.8,160.7,59.7).s().p("AAAgBIACADIgDAAIABgDg");
	this.shape_9.setTransform(-160.4,-26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#00CCFF","#D5FFFF"],[0,1],0,-65.6,0,67).s().p("EgjLALUIjEgTIAA2UMBMfAAAIAAWVQitAPgsgBQhBgChAgEQg/gEhCABIh+ABIAAAAIgpAAIgfgEIgCAAIgWgCIAWAAIACAAIBIgEIA1gDIg1ADIhIAEIgCAAIgWAAIghABIhJAAIgdABIgCAAIg7AAIgTAAUg2oAAQgENAAAIgWAAgA5FI4IAGgBIgEgFIgCAGgAX/LFIBFgBQgkACgjAEIACgFg");
	this.shape_10.setTransform(0,-82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.3,-156.6,492.7,313.3);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


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
(lib.pp_menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("mo_funky");
		playSound("mo_funky",-1);
		this.btn_per.addEventListener("click", openPP.bind(this));
		this.btn_pro.addEventListener("click", openPro.bind(this));
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openPP(){
		
		 window.open ("../pp/pp_Scene1.html","_self");
		}
		
		function openPro(){
		
		 window.open ("../pro/pro_Scene1.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(198));

	// content
	this.btn_per = new lib.btn_per();
	this.btn_per.setTransform(271,133.5,1,1,0,0,0,121,30.5);
	new cjs.ButtonHelper(this.btn_per, 0, 1, 2, false, new lib.btn_per(), 3);

	this.btn_pro = new lib.btn_pro();
	this.btn_pro.setTransform(271,231.5,1,1,0,0,0,121,30.5);
	new cjs.ButtonHelper(this.btn_pro, 0, 1, 2, false, new lib.btn_pro(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_pro},{t:this.btn_per}]}).wait(198));

	// main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance = new lib.BkScene("synched",0);
	this.instance.setTransform(275.1,193.6,1.041,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_menu}]}).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293.7,201.8,527.6,348.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;