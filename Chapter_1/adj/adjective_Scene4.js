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
		{src:"sounds/SE1stThought.mp3", id:"SE1stThought"},
		{src:"sounds/SE2ndThought.mp3", id:"SE2ndThought"},
		{src:"sounds/SE3rdThought.mp3", id:"SE3rdThought"},
		{src:"sounds/arealways.mp3", id:"arealways"},
		{src:"sounds/arearticles.mp3", id:"arearticles"},
		{src:"sounds/SEAdjetiveAnswers.mp3", id:"SEAdjetiveAnswers"},
		{src:"sounds/modifies.mp3", id:"modifies"},
		{src:"sounds/nounmarkers.mp3", id:"nounmarkers"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/SEBlackHair.mp3", id:"SEBlackHair"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SEBrownHair.mp3", id:"SEBrownHair"},
		{src:"sounds/bushrattle.mp3", id:"bushrattle"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/Ihaveayellowbag.mp3", id:"Ihaveayellowbag"},
		{src:"sounds/Ihavebrownhair.mp3", id:"Ihavebrownhair"},
		{src:"sounds/JingleAdjetives.mp3", id:"JingleAdjetives"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/signalthecomingofanoun.mp3", id:"signalthecomingofanoun"},
		{src:"sounds/eyepopsout.mp3", id:"eyepopsout"},
		{src:"sounds/eagleleaves.mp3", id:"eagleleaves"},
		{src:"sounds/eaglemove.mp3", id:"eaglemove"},
		{src:"sounds/_1b.mp3", id:"_1b"},
		{src:"sounds/parrotleaves.mp3", id:"parrotleaves"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/percussionloop.mp3", id:"percussionloop"},
		{src:"sounds/pianoe.mp3", id:"pianoe"},
		{src:"sounds/pianof.mp3", id:"pianof"},
		{src:"sounds/pianof_1.mp3", id:"pianof_1"},
		{src:"sounds/SERedHair.mp3", id:"SERedHair"},
		{src:"sounds/scaryloop.mp3", id:"scaryloop"},
		{src:"sounds/ack.mp3", id:"ack"},
		{src:"sounds/articlesareadjectivescallednounmarkers.mp3", id:"articlesareadjectivescallednounmarkers"},
		{src:"sounds/SE3questions.mp3", id:"SE3questions"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/SEWaterHits.mp3", id:"SEWaterHits"},
		{src:"sounds/SEWaterSpill.mp3", id:"SEWaterSpill"},
		{src:"sounds/SEWhichOne.mp3", id:"SEWhichOne"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/_1d.mp3", id:"_1d"},
		{src:"sounds/yeah.mp3", id:"yeah"}
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


(lib.yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFAuQgEgNgEgjIgEAGIgWA5QgCAGgFAEQgGAJgMABQgHAAgHgMQgIgNgFgUQgFgSgJg7IgCgVQAAgIAGgFQAGgGAIAAQAQAAAEAQIADAUIACAVIAGAjQALgcAOgsQAGgTAPAAQAQAAAFAVIAIAnIAHAnIAXhXQADgMAPAAQAJAAAGAFQAGAFAAAIIAAAFQgQA5gPAtQgFANgKAOQgHAKgLAAQgTgBgKgjg");
	this.shape.setTransform(78,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvA9QgVgUgBgiQgBgeASgaQAXgeAlAAQAeAAARAYQAPAVAAAfQAAAggSAYQgUAbggAAQgcAAgTgTgAgUgYQgJAOAAARQAAASAKAJQAIAHALAAQAKAAAKgIQAKgKABgSQACgtgbAAIgBAAQgPAAgKAQg");
	this.shape_1.setTransform(59.5,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNByQgGgFAAgJIAAjIQAAgJAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAJIAADAQAAAcgUAAQgHAAgGgGg");
	this.shape_2.setTransform(47.5,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNByQgGgFAAgJIAAjIQAAgJAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAJIAADAQAAAcgUAAQgHAAgGgGg");
	this.shape_3.setTransform(39.3,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_4.setTransform(26.8,27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqBxQgGgGAAgIQAAgOAehDQgQgdgig+IgHgMQgFgGAAgGQABgIAGgGQAGgGAIAAQAKAAAFAHQAVAcAaA4IATgqQAKgWAKgRQAGgKALAAQAJAAAGAFQAHAGgBAIQAAAEgCAFIgzBnQgSAmgJAZIgJAbQgFAOgOAAQgIAAgGgFg");
	this.shape_5.setTransform(10.2,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AAFAuQgEgNgEgjIgEAGIgWA5QgCAGgFAEQgGAJgMABQgHAAgHgMQgIgNgFgUQgFgSgJg7IgCgVQAAgIAGgFQAGgGAIAAQAQAAAEAQIADAUIACAVIAGAjQALgcAOgsQAGgTAPAAQAQAAAFAVIAIAnIAHAnIAXhXQADgMAPAAQAJAAAGAFQAGAFAAAIIAAAFQgQA5gPAtQgFANgKAOQgHAKgLAAQgTgBgKgjg");
	this.shape_6.setTransform(78,28);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AgvA9QgVgUgBgiQgBgeASgaQAXgeAlAAQAeAAARAYQAPAVAAAfQAAAggSAYQgUAbggAAQgcAAgTgTgAgUgYQgJAOAAARQAAASAKAJQAIAHALAAQAKAAAKgIQAKgKABgSQACgtgbAAIgBAAQgPAAgKAQg");
	this.shape_7.setTransform(59.5,27.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("AgNByQgGgFAAgJIAAjIQAAgJAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAJIAADAQAAAcgUAAQgHAAgGgGg");
	this.shape_8.setTransform(47.5,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AgNByQgGgFAAgJIAAjIQAAgJAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAJIAADAQAAAcgUAAQgHAAgGgGg");
	this.shape_9.setTransform(39.3,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990066").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_10.setTransform(26.8,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990066").s().p("AgqBxQgGgGAAgIQAAgOAehDQgQgdgig+IgHgMQgFgGAAgGQABgIAGgGQAGgGAIAAQAKAAAFAHQAVAcAaA4IATgqQAKgWAKgRQAGgKALAAQAJAAAGAFQAHAGgBAIQAAAEgCAFIgzBnQgSAmgJAZIgJAbQgFAOgOAAQgIAAgGgFg");
	this.shape_11.setTransform(10.2,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.3,45.8);


(lib.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag/BrQgFgEAAgGQAAgHAFgEQAEgFAGAAQAJAAAWgDQACgLAAgQIgBgYIgBgZQAAggAEgyIgTAAIgTABQgGAAgFgFQgEgEAAgGQAAgOAOgBQAMgCAgAAQAcAAArAHQAOACAAANQAAAHgFAEQgFAEgGAAQgJAAgOgCIgYgDQgDAqAAAlIAAAaIABAZIgBAZIAugBQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAEgGAAIgYABIgZAAQgIAAgTADQgTADgKAAQgGAAgEgFg");
	this.shape.setTransform(10.3,24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,45.8);


(lib.have = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxA/QgWgSAAghQAAgkASgaQAVgcAgAAQAXAAAPAIQAUAKgBAVQAAAPgQAMQgIAFgXAJIg2AbQAIAMAMAGQAMAGAPAAQAKAAAOgEQARgFAFgHQAEgIAGAAQAGAAADAEQAFADAAAGQAAAQgbAMQgWAJgVAAQggAAgUgQgAgdgmQgMAOgGAaIAtgUQAZgNALgJQgMgMgWAAQgRAAgMAOg");
	this.shape.setTransform(57.9,27.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPBDIgXg7IgahCIgBgGQAAgGAFgFQAEgEAGAAQAJAAAEAJIAlBkQAJgXAQgrIANghQAFgJAIAAQAGAAAEAEQAFAEAAAGQAAAGgYA5IgeBDQgBAOgLAAQgKAAgFgNg");
	this.shape_1.setTransform(42.3,27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAuBKQgGgGgDgEQgOAHgLAEQgLAEgGAAQgiAAgPgTQgPgSAAgmQAAghAZgZQAYgaAgAAQANAAAPAHQAUAIAAAMQAAAEgDADQgCAFAAANIgBAfQAAASACAKIAJAaIAEAIIABACQAAAGgEAEQgFAEgFAAQgCAAgIgHgAgXgjQgRASAAAWQAAAZAJAMQAIAMARAAQAMAAAJgGQAGgCAJgJQgEglAAgTIABgOIACgPIgJgEIgHgCQgUAAgQATg");
	this.shape_2.setTransform(27.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAnBuQgDgMgDgWQgCgVgBgOIABgLIAAgMQABgZgOAAQgSAAgOAOQgHAJgNAYQAAA4gFAKQgEAJgIAAQgHAAgEgEQgFgEAAgGIABgGQABgEABgRIAAgWIABhqIABgYIgBgOIgCgOQAAgGAFgEQAEgEAGAAQAMAAACAMQACAPABALIgBAgIgBAgIAAANQALgQAOgIQAMgIAQAAQAYAAAJAQQAGALABAYIABAcIAEAfQACARACANIABAEQAAAGgEAEQgFAEgGAAQgLAAgDgLg");
	this.shape_3.setTransform(11,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,45.8);


(lib.hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3BDIAAhlIAAgPIAAgOQAAgPANAAQAPAAAAAYQAbgbAhAAQAMAAAGAJQAFAJAAASIAAAKQAAATgOAAQgNAAAAgPIgBgKIAAgMQgXADgMAKQgNAJgIATIAABPQAAAPgPAAQgMAAAAgPg");
	this.shape.setTransform(50.9,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBqQgEgFAAgGIAAgaIgBgaIABgjIACggQAAgHAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAHIgCAgIgBAjIAAAaIABAaQAAAGgEAFQgEAEgFgBQgGABgEgEgAgIhPQgFgGAAgHQAAgHAFgFQAFgEAFAAQAHAAAFAEQAFAFAAAHQAAAHgFAGQgFAEgHAAQgFAAgFgEg");
	this.shape_1.setTransform(39.3,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAuBKQgGgGgDgEQgOAHgLAEQgLAEgGAAQgiAAgPgTQgPgSAAgmQAAghAZgZQAYgaAgAAQANAAAPAHQAUAIAAAMQAAAEgDADQgCAFAAANIgBAfQAAASACAKIAJAaIAEAIIABACQAAAGgEAEQgFAEgFAAQgCAAgIgHgAgXgjQgRASAAAWQAAAZAJAMQAIAMARAAQAMAAAJgGQAGgCAJgJQgEglAAgTIABgOIACgPIgJgEIgHgCQgUAAgQATg");
	this.shape_2.setTransform(27.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAnBuQgDgMgDgWQgCgVgBgOIABgLIAAgMQABgZgOAAQgSAAgOAOQgHAJgNAYQAAA4gFAKQgEAJgIAAQgHAAgEgEQgFgEAAgGIABgGQABgEABgRIAAgWIABhqIABgYIgBgOIgCgOQAAgGAFgEQAEgEAGAAQAMAAACAMQACAPABALIgBAgIgBAgIAAANQALgQAOgIQAMgIAQAAQAYAAAJAQQAGALABAYIABAcIAEAfQACARACANIABAEQAAAGgEAEQgFAEgGAAQgLAAgDgLg");
	this.shape_3.setTransform(11,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.7,45.8);


(lib.brown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeBDIgFgeQgCgRAAgOIABgLIAAgNIABgFIAAgHQAAgMgGAAQgNAAgKAQQgMAQgGAXIgCANIgBAOIAAAMIgBANQAAAIgGAGQgGAGgJAAQgJAAgFgGQgGgFAAgJIgBgNIgBgMIACgoIACgmIAAgNIgBgOQAAgIAGgFQAGgGAJAAQATAAABAXIAAACQAWgWAWAAQAbAAALAYQAHAPAAAfIAAAKIAAAIQAAALADASQADASAAAMQAAAIgGAFQgGAGgIAAQgSAAgCgSg");
	this.shape.setTransform(78.5,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFAuQgEgNgEgjIgEAGIgWA5QgCAGgFAEQgGAJgMABQgHAAgHgMQgIgNgFgUQgFgSgJg7IgCgVQAAgIAGgFQAGgGAIAAQAQAAAEAQIADAUIACAVIAGAjQALgcAOgsQAGgTAPAAQAQAAAFAVIAIAnIAHAnIAXhXQADgMAPAAQAJAAAGAFQAGAFAAAIIAAAFQgQA5gPAtQgFANgKAOQgHAKgLAAQgTgBgKgjg");
	this.shape_1.setTransform(60.4,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvA9QgVgUgBgiQgBgeASgaQAXgeAlAAQAeAAARAYQAPAVAAAfQAAAggSAYQgUAbggAAQgcAAgTgTgAgUgYQgJAOAAARQAAASAKAJQAIAHALAAQAKAAAKgIQAKgKABgSQACgtgbAAIgBAAQgPAAgKAQg");
	this.shape_2.setTransform(41.9,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5BMQgEgGAAgIIAAheIAAgNIAAgOQAAgIAFgFQAFgGAJAAQARAAACARQAZgUAfAAQAdAAABAnIgBAKQgBAXgTAAQgSAAgBgTIgBgPQgeAFgPAdIAABHQAAAJgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_3.setTransform(27.3,27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqBvQgGAFgHAAQgIAAgGgFQgGgFAAgIIABgLIAAgLIAAikQAAgKAFgJQAGgKALAAQAPAAAAARIAAAGIgBAGIAAA4QALgGAKgDQAKgDAHAAQAjAAAVAZQAUAWAAAhQAAAigXAYQgYAYggAAQgVAAgSgHgAgPgCQgKADgNAIIAAA/QAUAIAPAAQAQAAAMgMQAMgNAAgTQAAgTgJgMQgLgLgRAAQgFAAgKAEg");
	this.shape_4.setTransform(10.9,23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("AAeBDIgFgeQgCgRAAgOIABgLIAAgNIABgFIAAgHQAAgMgGAAQgNAAgKAQQgMAQgGAXIgCANIgBAOIAAAMIgBANQAAAIgGAGQgGAGgJAAQgJAAgFgGQgGgFAAgJIgBgNIgBgMIACgoIACgmIAAgNIgBgOQAAgIAGgFQAGgGAJAAQATAAABAXIAAACQAWgWAWAAQAbAAALAYQAHAPAAAfIAAAKIAAAIQAAALADASQADASAAAMQAAAIgGAFQgGAGgIAAQgSAAgCgSg");
	this.shape_5.setTransform(78.5,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AAFAuQgEgNgEgjIgEAGIgWA5QgCAGgFAEQgGAJgMABQgHAAgHgMQgIgNgFgUQgFgSgJg7IgCgVQAAgIAGgFQAGgGAIAAQAQAAAEAQIADAUIACAVIAGAjQALgcAOgsQAGgTAPAAQAQAAAFAVIAIAnIAHAnIAXhXQADgMAPAAQAJAAAGAFQAGAFAAAIIAAAFQgQA5gPAtQgFANgKAOQgHAKgLAAQgTgBgKgjg");
	this.shape_6.setTransform(60.4,28);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AgvA9QgVgUgBgiQgBgeASgaQAXgeAlAAQAeAAARAYQAPAVAAAfQAAAggSAYQgUAbggAAQgcAAgTgTgAgUgYQgJAOAAARQAAASAKAJQAIAHALAAQAKAAAKgIQAKgKABgSQACgtgbAAIgBAAQgPAAgKAQg");
	this.shape_7.setTransform(41.9,27.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("Ag5BMQgEgGAAgIIAAheIAAgNIAAgOQAAgIAFgFQAFgGAJAAQARAAACARQAZgUAfAAQAdAAABAnIgBAKQgBAXgTAAQgSAAgBgTIgBgPQgeAFgPAdIAABHQAAAJgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_8.setTransform(27.3,27.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990066").s().p("AgqBvQgGAFgHAAQgIAAgGgFQgGgFAAgIIABgLIAAgLIAAikQAAgKAFgJQAGgKALAAQAPAAAAARIAAAGIgBAGIAAA4QALgGAKgDQAKgDAHAAQAjAAAVAZQAUAWAAAhQAAAigXAYQgYAYggAAQgVAAgSgHgAgPgCQgKADgNAIIAAA/QAUAIAPAAQAQAAAMgMQAMgNAAgTQAAgTgJgMQgLgLgRAAQgFAAgKAEg");
	this.shape_9.setTransform(10.9,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.4,45.8);


(lib.bag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyBxQgSgDAAgMQAAgNAMAAQAGAAAMADQAMACAPAAQAagBALgaQAHgSABglQgIAOgLAIQgLAHgMAAQgbAAgQgSQgRgSAAgbQAAgoAXgYQAXgZAnAAQANAAAJAEQAKADAFAHQAPABAAARQAAAKgDASIgEAbIgDAvQgBAegFASQgHAYgOALQgSAOgfAAQgUAAgNgDgAgahIQgOARAAAbQAAAVAJAJQAIAKAQAAQAMAAAOgOQANgQACgPQADgQADghQgGgFgGgCQgGgCgHAAQgaAAgPATg");
	this.shape.setTransform(42.9,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAuBKQgHgGgDgEQgOAHgLAEQgKAEgGAAQghAAgQgTQgPgSAAgmQAAghAYgZQAZgaAfAAQANAAAQAHQAUAIAAAMQAAAEgDADQgBAFgBANIgBAfQAAASACAKIAJAaIAEAIIABACQAAAGgEAEQgEAEgGAAQgDAAgHgHgAgYgjQgQASAAAWQAAAZAIAMQAJAMARAAQAMAAAKgGQAFgCAKgJQgFglAAgTIAAgOIADgPIgJgEIgGgCQgVAAgRATg");
	this.shape_1.setTransform(27.6,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBtQgEAHgHAAQgGAAgEgEQgDgEAAgFIAAgMIAAgLIAAguIgBgtIAAgoIAAgpQAAgJAEgHQAEgJAJAAQALAAAAANIgBAGIgBAGIAAAgIAAAlQAMgIAMgFQALgEAJAAQAfAAAUAYQASAVAAAhQAAAhgVAYQgWAXgeAAQgWAAgTgJgAgWgGIgVANIAAAZIAAAXIAAAYIAUAIQAJADALAAQATAAAOgPQAOgPAAgWQAAgWgLgPQgMgNgUAAQgKAAgNAGg");
	this.shape_2.setTransform(11.3,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.2,45.8);


(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAjBDQgNAGgLAEQgKADgFAAQgkAAgRgTQgSgSAAgnQAAggAbgZQAZgaAiAAQAOAAATAIQAWAKAAAMQAAAFgEAEIgBAPIgBAUQAAAaADAMIAHAPIAGAOQAAAIgGAFQgGAFgIAAQgGAAgPgNgAgTgcQgPAQAAASQAAAUAHAKQAHAJAOAAQAHAAAIgCQAIgEAIgFQgFgiAAgRIABgKIACgOIgGgCIgDgBQgTAAgOAQg");
	this.shape.setTransform(10.5,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AAjBDQgNAGgLAEQgKADgFAAQgkAAgRgTQgSgSAAgnQAAggAbgZQAZgaAiAAQAOAAATAIQAWAKAAAMQAAAFgEAEIgBAPIgBAUQAAAaADAMIAHAPIAGAOQAAAIgGAFQgGAFgIAAQgGAAgPgNgAgTgcQgPAQAAASQAAAUAHAKQAHAJAOAAQAHAAAIgCQAIgEAIgFQgFgiAAgRIABgKIACgOIgGgCIgDgBQgTAAgOAQg");
	this.shape_1.setTransform(10.5,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.9,45.8);


(lib.diag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("Ak0k0IJpJp");
	this.shape.setTransform(248.4,51.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AG3hWIF5F4ATthWIs2AAAEMjgIAACKIsrAAIAABwAofkhIAADLAzshWILNAAAEMhWICrAA");
	this.shape_1.setTransform(126.2,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,282.4,85.2);


(lib.diag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AG3jOIJqJpATtjOIs2AAAEMlZIAACLAofmaIAADMIAAByAzsjOILNAAIMrAAICrAA");
	this.shape.setTransform(126.2,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,255.4,85.2);


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
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3iIIAAERIptAAIAAkRg");
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
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEaB8IozAAIAAj3IIzAAg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


(lib.general_buttoncolor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


(lib.frb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgpAbIAHgGQALALARAAQAPAAAMgLQALgMAAgPQAAgPgLgNIAGgHQAPAOAAAVQAAATgPAOQgPAPgSAAQgVAAgOgPg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.5,8.5);


(lib.frb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAWIAIgHQAIAJAMgBQALABAIgJQAJgJAAgLQABgLgJgJIAHgIQAMANAAAPQAAAPgMAMQgMAMgPAAQgRAAgLgMg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.8,6.8);


(lib.frb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_22:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgpAHQAAgTAOgPQAPgOATAAQAUAAAPAPIgHAHQgNgMgPAAQgPAAgLAMQgMALAAAPQAAARAMALIgHAHQgPgOAAgVg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,8.6);


(lib.frb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_23:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAFQAAgOAMgMQAMgMAOAAQAQAAANAMIgHAHQgJgJgNAAQgKAAgJAJQgJAJAAAKQAAANAJAJIgHAHQgMgLAAgSg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,6.9);


(lib.frb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAiAICAAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.frb_dot_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgMAOQgHgGAAgIQAAgGAHgGQAGgHAGAAQAIAAAGAHQAFAGAAAGQAAAIgFAGQgGAFgIAAQgGAAgGgFg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.frb_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAOQgHgGAAgIQAAgGAHgGQAGgHAGAAQAIAAAGAHQAFAGAAAGQAAAIgFAGQgGAFgIAAQgGAAgGgFg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.frb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAKAAAKQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,6);


(lib.frb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAKAAAKQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,6);


(lib.frb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAKAAAKQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,6);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj9CqIAAlSIH7AAIAAFSg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.RitaShin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhUEVQAzgxAUhDIAFgEQAPhJAFg7QAEg4gHhKIgEgIQAAgJgBgOQgCgOACgcQADgcAJgRIgDAAIAAgFIADABIABgMIADhKIABgFQAMgDANgBIgDAPQgKAVgGAXQgNA6gDA7QAAAPABAPIAKBSIAAAJIAAAiQgBAcgFAkIgHAaIgMA3IgWA+IgBACQgSAZgOAdIgCAAIgFABQgSAHgJARIAAACIgPALIAPAAIADgEQALALAMgRIABAJIAfgiIgFAXIgNANIAVgBIATgdIAGABIgOAbIAcgHIAfh0IgBgBIAFgNIACgFIAZhoIgDgHIAHgMIgBgDIACgKQAVhCALhFIAOhTQAEgTABgUQABgaACgYQAEAogBAQQgBARgEAfIgDAeIAAAEIgyDtIgDAEIgCAFIgFARIgBABIAAADIgHAQIgCAGQgCAEgBAGIABAHIgCAXQAAARADAPIAAABIABACQgFAFgBAFQgFARgCARIgXAnIgtAHIhoAHIAvgug");
	this.shape.setTransform(13.3,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#030303").s().p("AgHACQACACAHgCIADgFIAAAAIACABIABADIgNADg");
	this.shape_1.setTransform(24.6,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgxExIAFgYIgfAjIgBgJQgNAQgKgKIgDADIgQAAIAPgKIABgCQAJgRASgHIAFgBIABAAQAPgdASgZIAAgCIAXg+IANg3IAGgaQAFgkAAgcIAAgiIAAgJIgJhSQgCgQABgPQACg6AOg6QAFgXALgWIADgOIARgCIAOAKIASAAIAXALIAAAAIgDAGQgJADgCgCIACACIAPgEIgBgEIADABQAEALACAOQgDAYgBAZQgBAUgDAUIgOBTQgMBFgUBCIgCAKIABADIgIAMIADAHIgYBoIgDAFIgEAMIABACIgeB0IgdAHIANgbIgGgBIgTAcIgUACg");
	this.shape_2.setTransform(14.3,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,64.9);


(lib.RitaPurse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFAFA").s().p("AADgBIADABIAAAAIgLACg");
	this.shape.setTransform(15.6,45.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("AAAABIAAgCIAAACIAAABIAAgBg");
	this.shape_1.setTransform(12.1,44.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AAAAAIABAAIAAABg");
	this.shape_2.setTransform(11.5,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ag6BqIgDAAIgCgCIgDgBQgNgIgGgOIAAABQgeg7ASg1QABgKADgJQADgNAKgHIACgBIACgDIABABIACgCIATABIAAgDIAJAEIAIABQAJACAHAHQAQARACAZQADA2gKA2IgBAEIAAABQgCAFgEADQgLAJgNAAQgIAAgJgEgAAABOQgCgLACgLQADgZgBgbIgCgpIAAgIIgBgJIgJgXIAmgQQAEgEAFgCIALgEQAMgCAKACIAFgGQAIALAGALIAAABIADAFQAPAhgFAjQALA6gyAiIgEACIgBABQgEAGgGAGQgKAFgJAAIgDAAQgGgBgFgDIgJAKIgPAEg");
	this.shape_3.setTransform(13.3,35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+DoQgNgHgJgLQgUgYgJgdQACgDAAgEIgGgaQABgXACgFQADgJAPgbQAKgRAAgSIAAAAIAIgJIAHAAIABgHIARgFIgCgIQAChcAEhdIACgOQACgPALgLQAQgXAjANQAWAIASASQASATAAARQAAAIgDADIgJCHIAFAJIgCAJIAQAFIgBAFIAYAjIADgFQAFAwACAxIABAIIAAAAIACAAIAAAEIgCgBQgBAIgCAIQgDAOgJAKQgnAug7ANQgKADgMAAQgWAAgVgJgAhCDcIACABIACACIAEAAQAXAJASgOQAEgDACgFIABgBIAAgEQAKg2gDg4QgCgZgRgRQgGgHgKgCIgHgBIgJgEIgBADIgSgBIgDACIgBgBIgBADIgCABQgKAHgEANQgCAJgBAKQgSA3AdA7IABgBQAGAOANAIgAAwAMIgMAEQgFACgDAEIgnAQIAKAXIABAJIAAAIIABArQACAbgDAZQgCALACALIgKAfIAQgEIAJgKQAFADAFABIgKAEIAOgDIAAgBQAIAAAKgFQAGgGAEgGIABgBIAFgCQAxgigKg8QAEgjgPghIgCgFIgBgBQgFgLgIgLIgGAGIgKgBIgLABgAghABQABAEAEABIACABIACAEIAAgDIAAgBQAYAFAWgIIADAAIAFgHIAJgNQAHgKAAgMIABgYQADgIADgLQAGgZAAgWQAAgLgDgIIACgEIgFgKQgHgNgTgEQgHgFgMgBQgFgCgDACQgWADAAAaIADALIgCADIgQCTIADgGIABABgAgSi7IACABIAAgCg");
	this.shape_4.setTransform(13.3,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,-0.8,23.8,48.3);


(lib.RitaHair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFD").s().p("AAJANIABAAIAAAAIAAABgAgJAAIANgNIgBAEIgDAFIgBAEIgDACg");
	this.shape.setTransform(31.4,38.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AgBAGIABgGIACgIIAAAAIAAAAIAAABIgCAQIgBgDg");
	this.shape_1.setTransform(10.8,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AhAEqIgXgOQgIgBgJgEQgOgIgPgVQgVgcAAgLQAAgJAEgMQAEgLAAgIQAAgMgOgUQgOgVAAgeQAAgXAOgbIAOgWIgPgrQgQgwAAgcIAEhBQADgtgCgLQgBgLABgTIACgeQAAgKACgEQADgIALgHIACgBIACgCQAIgFAdAHIAEABIAUgFQAZgEAOAEIAAABIACAAQAQAGABATIAGALIAAACIgFAHIAAAAIAAgBIgBAAIAAAAIgCAJIgDAHIACADIgJAYIgRAUQADADABAIIABgCQAFgEAGgEQAcgQAaAKIAIAEIgCAGQAdAEgGAfIgCAJQgGATgSALIABADQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAIgDAHgGQAPgDAQgBQAPAHAKAKQAIAHAFAKQAGAKAFAPIACAFQgGAVgUASQASgMATgFIACABIAPACQAVAGAEAUIAIAaIAEALQAAADgGALIgBACIgBABQgSAdggARIAggJIAMAJQABAHAEAPQAGATAAAKIgBALQgGAegrAHIgMACIgqACQgTACAAAHIAAAEQAEACAFAAQA8AAAggOIgEALIgPAmQgOAjgbASIglABIgGgHIgDgDIgDgBIgDgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgBACQgBAJADAEQADADALACIAXABIACAAQgIAHgOAHQgPAHgPAEIgDABQgQADgQAAQgSAAgkgXgACZCxIAIgEIgFAIIgDgEgABViJIgFgDIAHACIABABIADAFIAAABIgGgGg");
	this.shape_2.setTransform(14.3,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhUE5QgbgPgNgMIABgJQAJAFAIAAIAXAPQAkAXASAAQASAAAOgEIADAAQAPgEAPgHQAOgHAIgHIgCAAIgXgBQgLgCgDgEQgDgDABgJIABgDQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIADAAIADACIADACIAGAHIAlgBQAbgSAOgiIAPgnIAEgLQggAPg8AAQgFAAgEgDIAAgEQAAgHATgBIAqgDIAMgBQArgIAGgeIABgLQAAgJgGgUQgEgOgBgIIgMgIIggAJQAggRASgeIABgBIABgCQAGgKAAgDIgEgKIgIgcQgEgUgVgFIgPgDIgCAAQgTAEgSANQAUgSAGgVIgCgGQgFgPgGgKQgFgJgIgIQgKgKgPgGQgQABgPADQgHAFgGAEQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBIgBgCQAQgMAGgTIACgIQAGgggbgDIABgHIgHgDQgcgLgcARQgGADgFAFIgBABQgBgHgDgEIARgUIAJgXIAEgSIAAgBIAFgGIAAgDIgGgLQgBgSgQgGIgCgBIAAAAQgOgFgZAFIgUAEIgEgBQgdgGgIAFQAHgMAzgCQAigCAOAHQAIgFAJAMQAMAPAAAQIgBAQIgBAAIAAAFIgBAEQgCARgIANIAkACQAEAEAGADIAfAfIABALIADALIAAACIABAGIAAADIABAAIABADQAJADAPAMIAFAEIAGAFQAhAeAAAdIAAAIQAkgGARAfQAMAXAAAcQAAAGgFALIgHAJIgCAHIAAABIgOANIAFAEIADgDQAFAHADAIIADgBIABABIAAAJQAFASAAAXQAAAcgRAPIgIAGIgIAEIADADQACAFABAJQAAATgTAiQgVAjgcAIIAAABQAAAMgpAQQglAPgWAAQgVAAgjgUg");
	this.shape_3.setTransform(16.2,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-0.5,36.8,66.6);


(lib.RitaHair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("AAAAAIABgCIgBAFIAAgDg");
	this.shape.setTransform(6,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFBFB").s().p("AgHAEIAIgGIAIgBIgIADIgHAEg");
	this.shape_1.setTransform(36.6,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AAQFLQgLgFgFgHQgIgFgxgEIgJgHIAEgKIAIgHIAAgDIgCAEIgNADIgEAFIgLgKQgEAAgBACIgBADIABAEIgMgBIgEgRIAXgNIgZAHIgHgLQgdAKgXgJQAEAAABgDIABgEQgZgRgGgJQgIgJAAgRQAAggAbgbIATgVQAEAEAFAAQAEAAACgBIABgBIABgDIAIAEQgLgVgHgXIgCgGQABgaATgeIAUgeIgBgEIBIgeIABABQALgEAKAAQAKAAAFADIAAgEIgbgbQgHgmAdgZQAKgdAhACIANgBIAOgHIAGAJIAHADIgCgLIAHAFIAHgEIgBgBIgFAAQgkgDgFggQgDgGgBgHQgBgLAFgNQARguAyABIACgEQAFgNAQgKQANgGANgBIAJgBIADgEQAVA7AIA8QgNAVgCAVQgNBlAABlIgGAFIgYApQAJBiAPBkIgDgBQgJAAgKAJQgKAMgJAHQghAbhHAAIgFAAg");
	this.shape_2.setTransform(21.3,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWFQIgKgIQgJgCgNAAQgNABgSgHQgMgFgJgJIgCgEIgrgWIgDgCQghgJgfgNIgCgBIgCgKQgFgHgDgIQgFgPAAgQQAAgMACgLIgCgEQAGgUAOgRIAFgGQAJgDAHgKQAGgHADgIIABAAIABgBQgCgMACgMQAAghAGgQIABgDIAAgBIACgIIAGgGQAGgJAKgIIAAgBIADgPIABgFIBWgnIgIgJIALgpIgJARQACgNAIgIQAhgkApgfQgKgRAAgRQAAgOAFgPQAKgXAQgPQASgQAbgIQANgDALgGIAQgHIAJgFIAHgEIAGgCIAEAKIgEAEIgJABQgNABgMAGQgRAKgFANIgCAEQgygBgRAuQgFANABALQABAHAEAGQAFAgAjADIAGAAIAAABIgGAEIgIgFIACALIgHgDIgFgJIgPAHIgNABQghgCgMAdQgbAZAHAmIAbAbIABAEQgIgDgJAAQgJAAgLAEIgBgBIhIAeIABAEIgUAeQgTAegBAaIACAGQAIAXAKAVIgIgEIgBADIgBABQgBABgEAAQgGAAgEgEIgTAVQgbAbAAAgQAAARAIAJQAGAJAaARIgBAEQgCADgEAAQAXAJAegKIAHALIAYgHIgXANIAEARIAMABIgBgEIABgDQABgCAEAAIALAKIAEgFIANgDIACgEIAAADIgHAHIgFAKIAJAHQAvAEAKAFQAGAHAKAFQBLABAigcQAJgHALgMQAJgJAJAAIADABIAAABIgEAMQgPAGgYAYQghAXhAAAQgPAAgJgGgAiyCCIABAAIgEAEIADgEg");
	this.shape_3.setTransform(19.2,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.3,68.6);


(lib.bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],1711,-72.2,1711,36).s().p("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");
	this.shape.setTransform(296.7,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#6A6A6A"],[0,1],205.4,-15.1,205.4,4.4).s().p("AiPBHIAAgBQAZAAA9geIAdgPIAVgNQAQgLAKgIQAVgVA1giQAegTAJgIQAOALgCAkQAAAMgGArIgBAMIgCAKQAAAEgCAFIgBAAIgFABIAAADIACADQgLAMgbALQglAQgTABQh6gBg4gTg");
	this.shape_1.setTransform(233.6,182.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#919191"],[0,1],198.5,-13.5,198.5,6).s().p("AjvBJQgPgKgDgOIgBgIIgBgGIAJgHQAwgdBXgjQBqgrA4AAIACAEIgoAXQgqAagUAaQgLANgXAPIgVANIgTAJQg4AbgiAAQgEgJgEAAQgEAAgBAEIABAHIAAABIgKgHgABVBGIgPgIIAHgVIADgMQAEgYAAgeIAYgTQAbgPAtAAQAdAAAZAhQAUAaAFAdIABAMIAAAEQAAAJgOAKQgUAOgjAAQgTAAhXgIg");
	this.shape_2.setTransform(240.5,180.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FEA245","#6666FF"],[0,1],20.8,-49.2,39.5,20.4).s().p("AKOCZQgpgIgKgHQgKADgSABIgcABQgiAEgCAdQgaACgdgcQgcgagYAGQgGgNgUgcQgSgZgGgSIA1gQQADgFgGgFQgGgEAGgBQAGAAAmAGQAaADAVgCQAMAJATAWIAKABIArABQAOAFANAKIAeAVQAQALAQABQAJAAAfgCQAagCAPAEIAcAYQAQANARAFQgHARgYAGQgIgXgHgHQgRACgCAQQgNgMgKgDQgZALACAcQgLgTgigIgAnrCGQgMgTABgQQgNAAgKAMQgKAOgKABQgIgEgJgTQgIgSgNgBQgMACgOAQQgNAQgLAEQgNgHgJgjQgNAAgKANQgKANgKABQgahFgvAaQghgcgFgGQDWiTDLgzIACAIQgHAGACAKQAUgCAhgQQAggPAWgCQgDARAHAWQAPAAALgMQAOgRAGgCQAKAGAjAeQAbAWAYAHIgBgbQgBgRAKgCQBGAjBBADQABgIgGgOQgIgMAEgEQAKABASAHQAUAHAMABQgCgPAJgFQAIAGAEgBIALgFQAAAHAGAJQAFAIAAAHQAKAFAgAfQARARALAEIAAAAIABACIgKgBQgPAAAAADIACABIgCgBQglgIgMAIQAJANASAPIAhAbQAkAeAAAkQgmgTgYgEQAGAIAGAgIgGABQgEgGgTAAQgUAAgHADQgNgEgMAEQgJADgSANQgXgagkAUQgeAQgQAcIgdgLQgSgGgSABQgLAJgIALQgZgKgrAHQguAIgcgJQALgIArgPQAjgMAOgPQhAgNhdAkQAvg5BUgqQg1gIg/AdQg5AcgiArQgNAWgIAJQgKAMgPAAIgMgBg");
	this.shape_3.setTransform(230.3,57.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C25812","#FF9933"],[0,1],135,32.6,127.3,3.8).s().p("A2SC5QAMgEANgGQALgFALgHIAYgQQAjgcABgQQgBgHgFAAIg9AfQguAOghAIIAAgBQAGgNABgJQACgMgIAAQgpAigXAPQgQALgHAAQgFAAgGgLIAAAAQgGgMgFABQgDgBgJAHQgEADgFACQgHACgKAAIgCgCIgJgEIAmgYQAAgHgKAAQAIgFAAgIQgEgQgOgJIAAgZQAAgagFgLQgKgXgIgcQANAIAHAQQAJATADAEQAJgTAAghQAAgQgIgsQgGgpgEgKIApA4QAiAxAKAaIAEgBQgFgpAgg8IAcgyQAQgdAIgUIABABIAAAdQgEALAAAeIAEA0IAAAbQAAARAEAJIAEgCQAKgfBJgsIB6hJIABABQgTAkg+BvQAAAEAEACQBCgkAzgLQBQgTAcgKIhaA7QhFAtgBAHQAAAEAFABQAPgFBAgJQA3gKAggEIAAABQi8BygBAHIAFAGQAUgKAhgFIBAgIIAAABQghAwgvAaIgJAFQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAEABIAZgKIBEgZIAAAAQgNAEgJALIgKAKIgJAIIgHAEQghAShTAAIgIgEIgGgCQhQAXggAAQgjAAATgZgAUMDAQgHgJgJgIQgHgHgJgGQgfgVgTgTQgQgQgDgYQgCgbgDgNQAIAMAbASQAeATARAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIAAgFQgCgQgOgdQgMgaABgWQAAgSAGgFQAHAJAFAVQAJAcATAAQANAAAGgmQABAIAHALQAJATALAAQATAAAnhnIAAAAIALBMIgBAQIAEABIAggeQAGgJANgXIAAAAIAABJIgHAXIACAEQBGgtAWgrIAAABIgRA1QgKAegMAZQABAEACABQARgMApgYQAbgSAJgMIghA6QgQAagoAlIADAEQAlgTBHgoIAAAAQgTAaglAgQgfAbgTAJQgLAFgIAAIgGgFQgGgDgGAAQgIAAgMADQgMAEgQAHQglAHgSAFIAAgBIATgWQAWgdAAgPIgBgGIgDgBIgUAhIgOASQgQATgJAAQgGgRgIAAQgcAXgEAAQgQAAgFgIg");
	this.shape_4.setTransform(279.8,167.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF9933","#980189"],[0.008,1],88.3,-28.6,88.3,36.8).s().p("AiGEIQgRgGgLgDIgOgCIARgJQAbgNAMgKQA8g7AAgJIAAgDIgJgBQgVAAggANIgfAOIABgBQBeiEAAgXIgBgEIgEgCQgNAAgrAbIg8AoIgBgBQAHgSAOg9QAOg9ABgNQgBgEgEgCQgxA0grAjQgchXgNg1QANARAVAPQAaAUASABQAGgBAAgTQgHg3AAgUQgBgbAJgRQAQgmAGgSQANA/ApA+QBUB7ALAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBIAAgFQgFgUgDgUIAAgqQAAgmAGgYIAFgYQADAYAlBOQAFAOAMAqQAIAgALARQAcggBJhNQgaBMghBNQAAAEAFABQAQgVAuggIBLgvIACADQAAAPggBBIgKAWQgHANgIAGQgxAdAAAKQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAEABQAWAAA1gaQAtgWAVgQIABABQgfAzg7AxIg0AnIAAADQACACAFAAIBFgYIAAABQgEAQgsAVQgoATggAGIgGACIggAKQhBAUgOAAQhUAAgegLg");
	this.shape_5.setTransform(342.3,159.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B16A01").s().p("Ah1DKIgKABIACgFIACgDIADgLIAHgKIB2iPIA7g8QBGhHCHh8QAHAug5A0IgvAoQgaAYgLASQh6BqhlCjQgEgXgZAAgAkNC8QAUgVAHgoQACgKAFhDQABgLAMg/QAIgrgFgXQAYAFgDALIgDASIgDAAQgLAqgGBQQgGBegDAXQgHAIgfABg");
	this.shape_6.setTransform(392.1,57.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FEDD92","#D2A679"],[0,1],1775.2,-184.3,1793.2,-12.4).s().p("A9fAQIAFAAIgFgBIAAgDIAIAEgAhkAGIACAAIAAABIgCgBgACsgNIACACIAAAAgAdfgOIABgBIAAABIgBAAg");
	this.shape_7.setTransform(229.1,188.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AR6D6IAIgDQAEAMABAHgARtD5IADACQAJADgFAEIgHgJgAMxDJIAFAAIgFACIAAgCgAKwC9IgBgBIACgCIADgEIgBADIABAEIgEAAgAK4CoIAAAAIAAABgAoHBPQgBgHgDgDIAGgBIAAACIAFAPgAh/AvIAGgBIABABIADABgAL1g6IACAAIgDAeIABgegAn7hEIAGABQAGAAAGACIgCADQgEgDgMgDgAtViZQgagWgWgGQgIABgLAPQgKANgFgCIAAgfQgXgHgbALQgdAOgNAFQAAgEAIgGQAHgGAAgHQgfAAgvARQgyARgSABQARgGA5gkQAxgeAigFQAMgCAbAGQAZgDA8gbQAtgVBAARQARAmAugEQAdAYBGAlQgEAOAAACIgegMQgTgGgQgCQgBAJAJAOQAHALgDAFQgjABgmgOQgwgTgRgDQgFAEABASQABARgFADQgMgGgggbgAwXiuIAMgDQgBAEgJAHgAKpjuIgBAHQgLgGAMgBg");
	this.shape_8.setTransform(295.8,57.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FEDD92","#3CCC49"],[0,1],1637.8,-531.4,1697.8,-304.6).s().p("EgoDAJ4IAAysIADAAQAJACANAAIAZgEIAaAEQAkAAAtgcIAPAHQAQAGAMABQAZgBAJgOQAGACAHAEQAHADAPAAQAQAAADgFQABgHACgDIAVAKQAOAFAUAAQAMAAAHgEIAOgIQAHAKATAAQANAAAGgFIAIgIIAGAIQAHAEAXAAIARAAIADgEQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABABAMAAQAXAAAKgHIAIgIQACAAAIAFQAHAFAHAAQAHAAAHgFQAHgFADAAQACAAAIAHQAHAGAGABQAIAAAEgGIAHgJQAFAGAOAAQApAAAugcQAGAHAZAMQArAVA2AAQAwAAApgNQANATAigIIA+gRQAdgJABACQAAACAFAEQADACAWAAQBHAAApgbIADAAQABAJAHADQAOAGA0ABQAuAAAOgMQADAQAKAEQARAHBAABQAggBAegIQAtgOAPgDQACAJASAIQAUAJAaAAQAYgBAggRIAUgNIACAAIAFgEIAAAAIABABQACAHgBANQACAMAYAMIAoASQAsAMBXAAQBUAAAdgWQALgJAIgPQAhASBbAAQAlAAAXgQQASgNAAgOQAOAXA7gRQAlAAAPgIQAPANA3AAQATAABagKQADAAAKAGQAKAGALAAQATAAAHgDIADABQAQAAAOgIQAJgFAQgCIAfAAIAMAJQAMAJAgABQAMAAAegNQAkAAABABQAKAIAGABQAKABAHAHQAOAFA7AAQAvAABigdIAnAAQAGAGAPAAQALAAAKgEIADgCIARAAIADAGQALAJAxAAQA2AAAJgHQBUAAApAJQAoAJANAAQAfAAgHgFQAsAAAOAEQAEAAARgMIAPgLIABAAIACgCIAWAAIANAMIAHAKQAJAKASAAQAJAAAXgYQAHAAAFATQAWgMAOgPIACAAQgJAKgPAOIAAAHIAEABIA1gNIA8gQQAIAAAGAJQAIAAAPgIQADAIALAAIATgEQAvAAACAFQAdAAgBgKIADAEIABACQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAIgBAaAAQAwAAAAgJQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIFRAAIAJAIIgBABIACAAIACABIADAAIA5AFIAegBIABgBIAAgEIACABQAUARAZAAQAQAAAAgQIgBgIQAEAFAMAAQAIAAAHgIIAYAAQAFACAIAAIAGgCIALAAIAAAEQADAIAQAAQANAAAYgMIABAAQAAASAOAAQAJAAAmgLQALAAALAFQAWAAANgMIADAAQAAADACACQAFAIAPAAQALAAAQgNIABAAQAKAPAfAAQALAAADgEQAEgEAkAAIAWABIAGACIAYgHQAGAAARAGQAGAAAKgFQAJgGAAgCIAATvgEghtgEsIAMgHIgSAAIAGAHg");
	this.shape_9.setTransform(296.7,247.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF9933","#660033"],[0.008,1],96.4,-27.9,96.4,37.5).s().p("EgiLAEGIgBgDIAMgHIAFADQAMAGAJAAQATAAALgMIADAAQADAIAEAFQAHAHAIAAQAIAAAOgHIATgNQARgNAYgWIACADQgJAOAAAJIAAAGIAFABQBogbAjgYIABAAQgSAYgYARIgfAMIgHAEIgTAJQgOAIAAAFIAAADIADAJIgHACQgkAJhHAAQgQgBhIgjgAZbEMIgKgGQgUgQgLgXQAAABAAABQAAAAgBABQAAAAAAABQgBAAgBAAQAAAIAWAbIAHAIIgzABQgEgDgCAAIgWgBIgEAAIgFgFQgPgQgMgQIAAADQgJgMACAAQgegqgJguQAMATAVATQAZAXAOgBIAEAAIABgHIgWg/QgLghgCggQAOAaAHAJQAZAhALAAIAEgBIAAgTIgCgZIABAAQAhAhAGAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQgCgQABgKQAAgQAIgBIgFAGIADABQADAAADgCIAHAUQACAEAJAIQAKAJAFAAQAOAAAEhAIABAAIAFAPQAFAKANAAQAKAAATgXIAkgtIABAAIAAABIgCAeQAAARANAAQADAAArguQArgrAGgKQgCAVgKAhQgIAcAAAXQAAAMADAEQAKgNA6giIAAAIQgCALgPAnQgJAZAAAUIAAANQADAMAQgBQAPABAbgVQAfgXAQgdIABAAQgQA2AAAIIAAAIQABAIAGAAQAHAAAZgYQAcgYASgFIAAAQQgFAPgFAeQgJAUAAAYQAAAEADABIACgBQACgOAXgLIAbgJQAYgHADABQACAAACAGQACAIAHgBQAHAAATgRIABABIgcAxIADAEIAIgDIAFgCIAJgDIAfgDIAAAXQgRAWgMAAQgPgIgDAAIgZAIIgCgBIgXgBIgCgBIgIAAIgcgCIgBACIgDADQgDAFgWABQgPAAgIgJIAAAAQgFgJgBAAIgNAJQgMAGgKAAQgKAAgBgGIAAgLIgDgBQgIAHgHAFQgJAFgGAAQgXAAgBgCQgBgDgHAAQghALgUAAQgDAAAAgJIAAgCQAAgIgGABIgOAHQgOAFgKAAQgLAAgCgFIAAgEQAAgLgCgCQgHAMgUAAQgNAAgEgYIgDgBQgDAAgIAPQgGALgIAEIgHABIgFgBQgEgDgGgIIgJgMIgEACQgBAEAIARIAGALQgBAJgKAAQgRgBgVgNgAjBEGIgBgCIAIgJQAcgjAAgOQAAgBgEgCQgaARgegBIAAgNQAFgPAAgEQAAgIgHAAQgLABgjARIgqAUIgBgCQAOgdAAgIIAAgCIgFgCQgXAMhbAmQAGgRAAgNQACgRgIABQgfAlgIAIQgWASglALIgIACIgNADIAAgDIAAgDQABgIAEgDQASgVAAgVQABgJgJgDQgigLgJAFIgCACIgEgGQgCgEABgNIgBgHQARgEAMgJQAMgLABgKIABAAIACglQAAgSgVgxIgVgrIAFgCQAnAJAOAYIAJATQAEAMAGAGIAEgBIAAgPQAAhchjh6IABgBQCCBSAhBwIAFgCIAAhRQgFgrgcg/QgjhHgOgjQCiCrAABFIgFARQgFAOABANQgBADAFAFQARgVAAgMQAAgPAUhKIAYhSIAAAAQADAoAXBRQAWBNAAApQAAAJgGAQQgGAQAAAGQAAAFAEACQBFgqBdhaQgIAQgDAaIgHAoQgRA7gXAaQAAAEAFABIA7grQAsgfAlgPQgLAegwBEQgrA/AAADIAAAEIAFABIAjgRQAngSARgDIAAABQgVAggiAbQgOALgfAOIgCABIgRAHQgNABgCACIgBABIAAACQgVAFgQABQgQgBgJgIg");
	this.shape_10.setTransform(334.2,158.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#67E473","#015C13"],[0.008,1],162.8,-28.4,162.8,37).s().p("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");
	this.shape_11.setTransform(267.8,159.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#67E473","#015C13"],[0.008,1],138.8,-83.7,138.8,91.3).s().p("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A+gUQAWANAEAKQANgJAdgKIAAABIADABQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBQAEgCAWAAQAPgBAKANQAJANAIABQADADAEABIgBgFQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAgBIgDAAQgCgLgFgNQgIgWgCgLQALACATAKQASAKANABQgBgogngiIgegZQgQgOgGgNQAXgCAjAFIACgCQAFACAFADIAAABIABAAIABABIANAMIASAQIABABQAMANALAIQABgdgSgaQgWgggDgNQAEgCAHACQADACANABIAEABIAEAEIgFAAQATAEAOAgQAPAgAOAIIATgwQALgcAMgQQADAYgNAdQgNAgAAAHQANgCAcgcQAbgcAYgEQgMASgZAUIgoAfQAKACAqgJQAmgJARAFQgNAKgiAKQgkAJgMAJQAHAHAdgGQAagEAGALQgaAKguAJQAAAKASACQASADgCAMQABAHgHAEQgIAGgBACQAHAGAHAAIAUgBQAHAGAJAZQAIAXALAGQgIgRATgCQATABAKAQQADAFALAdQALgLAQAFIAeAJQgGgaAhgHQASgEArgFQABAFAHAGIgJALQgFAGAGAGQAJgBAOgMQAMgMAPACQAKACAOARQAPATAJAFQgGgPADgPQAEgQAOgBQAMACAPANQAEgTALABIAIAUQAFAMAGAGQAIgbAhACQAZABAaAQIAeggQAIgDAKgBIAOgBIAiAKIAAABQAGAEAGAHQANgiArAJQApAJACAjQADgcAMgKQAEACAFAJQAEAIAHAAIAFgKQACgIAEgBQAJADAFASQAFARAIAEQAEgJAXABQACADAEAOQADAMAGACQAYgUAuABQAUAAAkAFIADAAIgBABIgCADIABACIADABQACgBAEgCQADACATAAQATAAAFgFQACgBABgEIADgBIAAAAIACAAIAFABQADADAEgBIABAAIABAAQACgDADgKIAJgdQAIgbAQgHQACAQgJAQQgJASAAALQAKgDAPgMQAOgNALgCQAIAOgPAYQgPAWALAMQAIgBAHgFQAKgDAIAAQAOAAAGAOIAEALIgTAeQANgKAYgbQAXgUAVAIQAHACAJASQAHAOALAAQgFgDAGgIQAGgJAIABQAQAAAUAPQAUAQAGAAQADgTAaAKQAYAJAIAPQAJgKAXAEIAlAGQgCgPgWgsQgWgpAAgTQARAIAYAUQAZAWAOAIQgBgYAJgWQALgZAEgOQAJAIAJAcQAJAaAMAHQAqgsAigRQgHAQgYAbQgWAcgIARIA1gRQAngMAXAGIgpAXQgYANgMAOQAIADAkAAQAgABANAHQgiALgQABQAKAPAbALQAVALAOACQACADgEAKQgDAFAJABQAIgBAYgKQAYgHARAKQABAMgMAIQgOAJgCAJQAFAAAdgKQAPgEAUAMQABAGAHAEQAKAFABADIAGgtQAFgZANgIQAVAWAJAFQAAgwAQgJQAVgFAGASQAIAbADADQAYgjAagEQACAJgGAJQgFAJABAHQAIABAJgGQAIgIAJACQAIAEAHASQAGARAKADQgBgbAQgTQAJACALAJIANAKIAGACQACgmAsADQAEAEAIAYIACAEIABADIAJgEIAVgNQARgJASgBQAOAIAJAXQAAADgHAMQgEAIAEAHQAIACAIgHQAHgGAHAAIALAOQAGAKAGADQgBgiARgFQAJACAKAMQAKALAJACQgBgXAJgKIACgBQACgDADgBQADAAADAEIABABIAEAEQAFAGAHABQAJgkAWgHQAKAFARAOQAKgNAPgFIAVAeQALgGAKAJIARAQQAFABAJgEQAHgCAGAAIAHAGQAHAEAEAAQADAAADgJQACgKAQAAQAGAAAOAJQAOAIAFAAIASgHQAUgHARAAQATAAAJAIQAJAJAEAAIAQgGQAQgIALABQAOAAAHAJQAGAJABAAIABAAIACAAIABAAIAbgNIAAN2IgBAAQgWAAgIADIgNAEQAhg2AAgQgAVDCuIAIAAIAHgNIgBAAQgJAEgFAJgEgioAAPIABAJIAIgKIgJABgA8wgdQACgGgGgBgA0JiTQgGABAIAGIAAgIIgCABgADCMYIABAAIAAADgA5mMXIABAAIABADgABAMUIABACIgBABgAVdMOIAAgBIABABIgBAAgAgrMCIAAgBIABABgAKhL7IAAAAIAAABgEAnnALyIABAAIAAABgAWyLoIABAAIgBAAgAVHLZIABAAIgBABgAoALNIAGABIgFADgAUPK+IAAgBIABABgAeAKyIADAAIAAACIgDgCgAESKYIAAABIgBAAgEAk5AKYIABgBIAAABgAzPKEIABAAIgBABgALiKDIABAAIAAABgAViJ0IAAAAIAAABgAUKJoIAAAAIABAAgEAhJAJKIAAgBIABABgATKJJIAAgBIAAABgA1DI9IAJAAIgJACgA1vHfIABgBIAAACgA5FHFIAAgBIABABgAjRF7IABAAIgBABIAAgBgAI/otQAtggBDABQgigYhLAMQhVASggAFQAegqA/gcQBBgdA0ALIACgIIAHAAQg0gjABgWQAdgBAZASQAlAbAFACQAYgjBTgXQgEALgRAQQgQAPgFAMIBMgXQA4gMAlAQQgzAMgOAEQgiALgQATQA/gFAyATQAvAUAQAjQhHgfhHAEQAPAQAkAiQAeAeAEAbQhIhahGAWQA/ArAKBHQgdgdgQgNQgdgYgaABQANAOgJACQgQgMgxAAQgKACgWANQgTAMgHAAQAEgMAPgMQAPgOAEgIQgwgDg3AiIgtAdQgaARgVAHQAIg9AxgigAT9p3QgRAEgKAYQgMAcgHAGQgFgSAIgaQAIgagEgOQgHgdgsgMQg3gKgYgHQBDgXAsAPQgMgIgrgWQgkgSgQgRQAugKBQApQgRgZgZg4QAXgEAZATQAFADAgAgIADgcQAEgUAMgGQAAANAEAPQAEAQAAAGQAxgbATgDQgDAMgPAKQgUAMgEAEQBjAEAUAyQgVAFgYgBQgagCgNgKIAmAyQAbAiAAAjQgSAEgVgUQgcgcgGgCQAEAPATA6QAMA1gbAUQgHgLgMgtQgJglgSgLQgJASgPApQgOAigUAOIAMh3g");
	this.shape_12.setTransform(296.7,101.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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");
	this.shape_13.setTransform(296.7,104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.2,0,512.9,311.2);


(lib.Lesson2Rita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		playSound("Ihavebrownhair");
	}
	this.frame_60 = function() {
		playSound("ball_passes");
	}
	this.frame_108 = function() {
		playSound("_1b");
	}
	this.frame_114 = function() {
		playSound("Ihaveayellowbag");
	}
	this.frame_147 = function() {
		playSound("ball_passes");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(39).call(this.frame_60).wait(48).call(this.frame_108).wait(6).call(this.frame_114).wait(33).call(this.frame_147).wait(88));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMANQgFgGAAgHQAAgGAFgFQAGgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAGQgFAEgHAAQgGAAgGgEg");
	this.shape.setTransform(253.9,36.1);

	this.instance = new lib.hair("synched",0);
	this.instance.setTransform(227.2,24.4,1,1,0,0,0,29.9,22.9);

	this.instance_1 = new lib.brown("synched",0);
	this.instance_1.setTransform(144.1,24.4,1,1,0,0,0,38.6,22.9);

	this.instance_2 = new lib.have("synched",0);
	this.instance_2.setTransform(62.1,24.4,1,1,0,0,0,34,22.9);

	this.instance_3 = new lib.I("synched",0);
	this.instance_3.setTransform(7.3,24.4,1,1,0,0,0,10.3,22.9);

	this.instance_4 = new lib.a("synched",0);
	this.instance_4.setTransform(94.4,24.4,1,1,0,0,0,10.4,22.9);

	this.instance_5 = new lib.yellow("synched",0);
	this.instance_5.setTransform(146.1,23.6,1,1,0,0,0,34,22.9);

	this.instance_6 = new lib.bag("synched",0);
	this.instance_6.setTransform(234.6,24.4,1,1,0,0,0,29.9,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{x:7.3}},{t:this.instance_2,p:{x:62.1}},{t:this.instance_1},{t:this.instance},{t:this.shape,p:{x:253.9}}]},21).to({state:[]},87).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_2,p:{x:42.3}},{t:this.instance_3,p:{x:-8.5}},{t:this.shape,p:{x:258.6}}]},6).wait(121));

	// Layer 4
	this.instance_7 = new lib.hair("synched",0);
	this.instance_7.setTransform(227.2,24.4,1,1,0,0,0,29.9,22.9);
	this.instance_7._off = true;

	this.instance_8 = new lib.I("synched",0);
	this.instance_8.setTransform(-8.5,24.4,1,1,0,0,0,10.3,22.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).wait(39).to({startPosition:0},0).to({scaleX:0.85,scaleY:0.85,x:185.1,y:103.6},15).to({_off:true},33).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(114).to({_off:false},0).wait(33).to({startPosition:0},0).to({scaleX:0.86,scaleY:0.86,x:24.6,y:103.2},14).wait(74));

	// Layer 3
	this.instance_9 = new lib.brown("synched",0);
	this.instance_9.setTransform(144.1,24.4,1,1,0,0,0,38.6,22.9);
	this.instance_9._off = true;

	this.instance_10 = new lib.have("synched",0);
	this.instance_10.setTransform(42.3,24.4,1,1,0,0,0,34,22.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({_off:false},0).wait(39).to({startPosition:0},0).to({scaleX:0.85,scaleY:0.85,rotation:45,x:211.3,y:149.8,startPosition:9},15).to({_off:true},33).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114).to({_off:false},0).wait(33).to({startPosition:0},0).to({scaleX:0.86,scaleY:0.86,x:98.6,y:103.2},14).wait(74));

	// Layer 2
	this.instance_11 = new lib.have("synched",0);
	this.instance_11.setTransform(62.1,24.4,1,1,0,0,0,34,22.9);
	this.instance_11._off = true;

	this.instance_12 = new lib.a("synched",0);
	this.instance_12.setTransform(94.4,24.4,1,1,0,0,0,10.4,22.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({_off:false},0).wait(39).to({startPosition:0},0).to({scaleX:0.85,scaleY:0.85,x:94.2,y:104.8},15).to({_off:true},33).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(114).to({_off:false},0).wait(33).to({startPosition:1},0).to({scaleX:0.86,scaleY:0.86,rotation:45,x:195.2,y:136.7,startPosition:4},10).wait(78));

	// Layer 1
	this.instance_13 = new lib.I("synched",0);
	this.instance_13.setTransform(7.3,24.4,1,1,0,0,0,10.3,22.9);
	this.instance_13._off = true;

	this.instance_14 = new lib.yellow("synched",0);
	this.instance_14.setTransform(146.1,23.6,1,1,0,0,0,34,22.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(21).to({_off:false},0).wait(39).to({startPosition:0},0).to({scaleX:0.85,scaleY:0.85,x:22.6,y:102.5},15).to({_off:true},33).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(114).to({_off:false},0).wait(33).to({startPosition:0},0).to({regX:34.1,scaleX:0.86,scaleY:0.86,rotation:45,x:249.7,y:143.1,startPosition:4},10).wait(78));

	// Layer 5
	this.instance_15 = new lib.diag1("synched",0);
	this.instance_15.setTransform(115.4,110.8,0.515,0.515,0,0,0,126.1,41.1);
	this.instance_15._off = true;

	this.instance_16 = new lib.bag("synched",0);
	this.instance_16.setTransform(234.6,24.4,1,1,0,0,0,29.9,22.9);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(54).to({_off:false},0).to({regX:126.2,scaleX:1,scaleY:1,x:112.9,y:142},6).to({_off:true},48).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(114).to({_off:false},0).wait(33).to({startPosition:0},0).to({scaleX:0.86,scaleY:0.86,x:175.2,y:103.2},14).wait(74));

	// Layer 8
	this.instance_17 = new lib.diag2("synched",0);
	this.instance_17.setTransform(112.9,142,0.719,0.719,0,0,0,126.2,41.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(141).to({_off:false},0).to({scaleX:1,scaleY:1},6).wait(88));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AoZAmQACgdABgbQgvgPh4AdIhTATQCKhVBdACQABgiAVghQANgUAQgRQAngoAygcQAcgOAdgLQCag7C0AUQBJAIBNgCQDegEDZAhQAZAEAXAGQCAAmALB+QADAfAHAiQAIAhAEAjAMKAmQAQBGgVBHQggBsjnAOQjeAIjjABQh1ABhxgJQgJgBgIgBQhBgGg/gJQiWgXgvhFQguhDAQhHQACgJABgI");
	this.shape_1.setTransform(-12.6,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AipEuIgRgCQhBgGg/gJQiWgXgvhFQguhDAQhHIADgRIABAAIADg4QgvgPh4AdIhTATQCKhVBdACQABgiAVghQANgUAQgRQAngoAygcQAcgOAdgLQCag7C0AUQBJAIBNgCQDegEDZAhQAZAEAXAGQCAAmALB+QADAfAHAiQAIAhAEAjIACAAQAQBGgVBHQggBsjnAOQjeAIjjABIgXAAQhpAAhmgIg");
	this.shape_2.setTransform(-12.6,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AtAAQQCShbBjACQABgjAWgkQAOgVARgSQAqgqA1gfQAdgOAfgMQCjg/C/AWQBOAIBSgCQDsgEDmAjQAbAEAYAHQCIAoAMCFQADAiAIAjQAIAkAEAlQATBKgWBLQgiBzj1APQjsAJjxABQh8ABh4gKQgKAAgJgBQhEgHhDgKQifgYgyhKQgxhHAQhLQACgJACgJQADgfABgcQgygQh/Afg");
	this.shape_3.setTransform(-7.7,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AizFAIgTgBQhEgHhDgKQifgYgyhKQgxhHAQhLIAEgSQADgfABgcQgygQh/AfIhYAUQCShbBjACQABgjAWgkQAOgVARgSQAqgqA1gfQAdgOAfgMQCjg/C/AWQBOAIBSgCQDsgEDmAjQAbAEAYAHQCIAoAMCFQADAiAIAjQAIAkAEAlQATBKgWBLQgiBzj1APQjsAJjxABIgXABQhwAAhtgKg");
	this.shape_4.setTransform(-7.7,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AtxARQCbhgBpACQABgmAXglQAPgXASgTQAsgsA4ggQAggQAggMQCthDDKAXQBSAJBXgCQD6gFDzAlQAdAFAZAHQCRArAMCNQADAjAIAmQAJAlAFAnQATBPgXBQQgkB5kDAQQj6AJj/ACQiDABh/gLQgLgBgJgBQhJgGhGgLQipgZg1hPQgzhLARhQQACgJABgKQAEggABgeQg1gRiGAgg");
	this.shape_5.setTransform(-2.9,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai9FTIgUgCQhJgGhGgLQipgZg1hPQgzhLARhQIADgTQAEggABgeQg1gRiGAgIheAWQCbhgBpACQABgmAXglQAPgXASgTQAsgsA4ggQAggQAggMQCthDDKAXQBSAJBXgCQD6gFDzAlQAdAFAZAHQCRArAMCNQADAjAIAmQAJAlAFAnQATBPgXBQQgkB5kDAQQj6AJj/ACIgWAAQh4AAh0gKg");
	this.shape_6.setTransform(-2.9,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AuhASQCkhmBuADQAAgoAZgoQAQgXATgVQAvguA7giQAhgRAigNQC2hGDWAYQBXAJBbgBQEIgGEAAoQAfAEAaAIQCZAtANCVQADAlAJAoQAJAnAFAqQAVBTgZBUQgmCAkRARQkIAJkNACQiLABiGgLQgKgBgLgBQhMgHhLgLQiygbg3hSQg3hQAThUQACgKABgKQAEgjABgfQg4gSiOAig");
	this.shape_7.setTransform(2,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjIFmIgVgCQhMgHhLgLQiygbg3hSQg3hQAThUIADgUQAEgjABgfQg4gSiOAiIhiAXQCkhmBuADQAAgoAZgoQAQgXATgVQAvguA7giQAhgRAigNQC2hGDWAYQBXAJBbgBQEIgGEAAoQAfAEAaAIQCZAtANCVQADAlAJAoQAJAnAFAqQAVBTgZBUQgmCAkRARQkIAJkNACIghAAQh5AAh3gKg");
	this.shape_8.setTransform(2,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AvSATQCshrB0ADQABgqAagqQAQgZAVgVQAwgxA/gkQAjgRAjgOQDBhKDgAZQBcAKBggCQEVgFEOApQAgAFAcAIQChAvANCdQAEAnAJAqQAJAqAGArQAWBYgbBYQgoCHkfARQkVAKkcACQiSACiNgMQgLgBgLgBQhQgIhPgMQi7gcg6hWQg6hUAUhZQACgKABgLQAFgkAAghQg6gTiVAkg");
	this.shape_9.setTransform(6.9,12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjTF5IgWgCQhQgIhPgMQi7gcg6hWQg6hUAUhZIADgVQAFgkAAghQg6gTiVAkIhoAYQCshrB0ADQABgqAagqQAQgZAVgVQAwgxA/gkQAjgRAjgOQDBhKDgAZQBcAKBggCQEVgFEOApQAgAFAcAIQChAvANCdQAEAnAJAqQAJAqAGArQAWBYgbBYQgoCHkfARQkVAKkcACIghAAQiAAAh+gKg");
	this.shape_10.setTransform(6.9,12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AwCAUQC0hxB6ADQABgsAbgsQARgaAWgWQAzg0BBglQAlgTAlgOQDKhNDsAaQBgAKBlgCQEjgGEbAsQAiAFAdAJQCpAxAOCkQAEAqAJAsQAKArAGAuQAXBcgcBdQgqCOktASQkjAKkqACQiZACiUgNQgMgBgLgBQhVgIhSgMQjEgeg+hbQg8hXAUheQADgLABgLQAFgmAAgjQg9gUidAmg");
	this.shape_11.setTransform(11.7,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjdGLIgXgCQhVgIhSgMQjEgeg+hbQg8hXAUheIAEgWQAFgmAAgjQg9gUidAmIhsAaQC0hxB6ADQABgsAbgsQARgaAWgWQAzg0BBglQAlgTAlgOQDKhNDsAaQBgAKBlgCQEjgGEbAsQAiAFAdAJQCpAxAOCkQAEAqAJAsQAKArAGAuQAXBcgcBdQgqCOktASQkjAKkqACIghAAQiIAAiEgLg");
	this.shape_12.setTransform(11.7,13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AwzAVQC9h2CAADQABguAdguQARgbAXgYQA1g2BFgnQAmgTAogPQDThRD3AbQBkALBqgCQExgGEpAtQAjAGAfAJQCwA0APCsQAEArAKAuQAKAuAGAwQAYBggdBhQgsCUk8ATQkwALk4ADQigABibgNQgNgBgLgBQhZgIhWgNQjOgfhBhgQg+hbAVhiQACgMACgLQAFgoAAglQhAgVikAog");
	this.shape_13.setTransform(16.6,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjnGeIgYgCQhZgIhWgNQjOgfhBhgQg+hbAVhiIAEgXQAFgoAAglQhAgVikAoIhyAbQC9h2CAADQABguAdguQARgbAXgYQA1g2BFgnQAmgTAogPQDThRD3AbQBkALBqgCQExgGEpAtQAjAGAfAJQCwA0APCsQAEArAKAuQAKAuAGAwQAYBggdBhQgsCUk8ATQkwALk4ADIgYAAQiUAAiPgMg");
	this.shape_14.setTransform(16.6,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("AxkAWQDGh8CFADQABgwAegwQATgcAYgZQA3g5BIgoQAogUApgQQDdhVECAdQBpALBvgCQE+gGE2AvQAlAGAgAJQC5A2APC0QAFAtAKAxQAKAwAHAyQAZBkgeBmQguCblKAUQk+ALlHADQinABiigOQgNgBgMgBQhdgJhagNQjXgghEhkQhBhgAWhmQADgMABgMQAFgqABgnQhEgVirApg");
	this.shape_15.setTransform(21.5,14.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjyGwIgZgCQhdgJhagNQjXgghEhkQhBhgAWhmIAEgYQAFgqABgnQhEgVirApIh3AdQDGh8CFADQABgwAegwQATgcAYgZQA3g5BIgoQAogUApgQQDdhVECAdQBpALBvgCQE+gGE2AvQAlAGAgAJQC5A2APC0QAFAtAKAxQAKAwAHAyQAZBkgeBmQguCblKAUQk+ALlHADIgXAAQibAAiXgNg");
	this.shape_16.setTransform(21.5,14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(2,1,1).p("AyUAXQDOiBCLADQABgyAfgyQAUgeAZgaQA6g7BKgqQAqgVArgQQDmhZENAeQBvAMBzgCQFMgHFEAyQAmAGAhAJQDBA5AQC7QAFAwAKAyQALAyAHA0QAaBpgfBqQgwCilZAVQlLAMlVACQivABipgOQgNgBgNgBQhggJhegOQjhgihGhoQhFhkAYhqQACgNACgNQAFgrABgpQhGgWizArg");
	this.shape_17.setTransform(26.3,15.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Aj9HDIgagCQhggJhegOQjhgihGhoQhFhkAYhqIAEgaQAFgrABgpQhGgWizArIh8AeQDOiBCLADQABgyAfgyQAUgeAZgaQA6g7BKgqQAqgVArgQQDmhZENAeQBvAMBzgCQFMgHFEAyQAmAGAhAJQDBA5AQC7QAFAwAKAyQALAyAHA0QAaBpgfBqQgwCilZAVQlLAMlVACIgiAAQidAAiZgNg");
	this.shape_18.setTransform(26.3,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,1,1).p("AzFAYQDXiGCRADQABg0Ahg0QAUgfAagbQA8g+BOgsQArgWAtgRQDwhcEYAgQBzAMB4gCQFagIFRA0QAoAGAjAKQDIA7ARDEQAFAxALA0QALA0AHA3QAcBtghBuQgyCplnAVQlZANljACQi2ACiwgPQgOgBgNgBQhlgKhigOQjpgkhKhsQhHhoAYhvQADgNACgNQAFgtABgrQhJgXi6Atg");
	this.shape_19.setTransform(31.2,15.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AkHHWIgbgCQhlgKhigOQjpgkhKhsQhHhoAYhvIAFgaQAFgtABgrQhJgXi6AtIiCAfQDXiGCRADQABg0Ahg0QAUgfAagbQA8g+BOgsQArgWAtgRQDwhcEYAgQBzAMB4gCQFagIFRA0QAoAGAjAKQDIA7ARDEQAFAxALA0QALA0AHA3QAcBtghBuQgyCplnAVQlZANljACIghAAQilAAiggNg");
	this.shape_20.setTransform(31.2,15.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,1,1).p("Az1AZQDfiLCXADQABg2Aig3QAVggAbgcQA/hABQguQAugWAugSQD5hgEkAhQB3ANB9gDQFogHFeA2QAqAGAkAKQDQA+ASDLQAFAzALA2QAMA3AIA4QAcBygiBzQg0Cvl1AWQlnANlxADQi9ABi3gPQgPgBgOgCQhogJhmgQQjzgkhMhxQhKhsAZhzQADgOACgOQAFguABgtQhMgYjBAvg");
	this.shape_21.setTransform(36,16.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkRHpIgdgDQhogJhmgQQjzgkhMhxQhKhsAZhzIAFgcQAFguABgtQhMgYjBAvIiHAgQDfiLCXADQABg2Aig3QAVggAbgcQA/hABQguQAugWAugSQD5hgEkAhQB3ANB9gDQFogHFeA2QAqAGAkAKQDQA+ASDLQAFAzALA2QAMA3AIA4QAcBygiBzQg0Cvl1AWQlnANlxADIgiAAQisAAimgOg");
	this.shape_22.setTransform(36,16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("A0mAaQDoiRCcADQABg4Akg4QAVgiAcgdQBBhCBVgwQAugYAxgSQEDhjEuAiQB8ANCCgDQF1gIFsA4QArAHAmALQDYA/ASDTQAFA1AMA5QAMA4AIA7QAeB2gjB3Qg2C2mEAXQl1AOl+ADQjFABi+gQQgPgBgPgBQhsgLhqgPQj8gmhPh1QhNhxAah3QADgOACgPQAFgwACguQhQgZjIAwg");
	this.shape_23.setTransform(40.9,16.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AkcH7IgegCQhsgLhqgPQj8gmhPh1QhNhxAah3IAFgdQAFgwACguQhQgZjIAwIiMAiQDoiRCcADQABg4Akg4QAVgiAcgdQBBhCBVgwQAugYAxgSQEDhjEuAiQB8ANCCgDQF1gIFsA4QArAHAmALQDYA/ASDTQAFA1AMA5QAMA4AIA7QAeB2gjB3Qg2C2mEAXQl1AOl+ADIgiAAQi0AAitgPg");
	this.shape_24.setTransform(40.9,16.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(2,1,1).p("A1WAbQDwiWCiADQABg6Alg7QAWgjAdgeQBEhEBXgyQAxgYAygTQEMhnE6AjQCBAOCGgDQGDgIF5A6QAtAHAnALQDgBCATDaQAFA3ANA7QAMA7AJA9QAeB6gkB8Qg4C8mSAYQmDAOmMADQjNACjFgRQgPgBgPgCQhxgKhtgRQkGgnhSh5QhQh1Abh8QAEgOACgPQAFgyACgwQhTgajPAyg");
	this.shape_25.setTransform(45.8,17.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AknIOIgegDQhxgKhtgRQkGgnhSh5QhQh1Abh8QAEgOACgPQAFgyACgwQhTgajPAyIiRAjQDwiWCiADQABg6Alg7QAWgjAdgeQBEhEBXgyQAxgYAygTQEMhnE6AjQCBAOCGgDQGDgIF5A6QAtAHAnALQDgBCATDaQAFA3ANA7QAMA7AJA9QAeB6gkB8Qg4C8mSAYQmDAOmMADIgjAAQi6AAi1gPg");
	this.shape_26.setTransform(45.8,17.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2,1,1).p("A2HAcQD5icCoADQAAg8Ang8QAWglAfgfQBGhHBagzQAygZA0gUQEWhrFFAlQCFAOCLgDQGRgIGHA8QAuAHApAMQDoBEAUDiQAFA5ANA9QANA9AIA/QAgB+gmCAQg6DEmgAYQmQAPmbADQjTACjMgSQgRgBgPgBQh1gLhxgRQkPgphVh9QhSh5AbiBQAEgPACgPQAGg0ABgyQhVgbjXA0g");
	this.shape_27.setTransform(50.7,18.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AkxIgIgggCQh1gLhxgRQkPgphVh9QhSh5AbiBQAEgPACgPQAGg0ABgyQhVgbjXA0IiWAlQD5icCoADQAAg8Ang8QAWglAfgfQBGhHBagzQAygZA0gUQEWhrFFAlQCFAOCLgDQGRgIGHA8QAuAHApAMQDoBEAUDiQAFA5ANA9QANA9AIA/QAgB+gmCAQg6DEmgAYQmQAPmbADIghAAQjCAAi8gQg");
	this.shape_28.setTransform(50.7,18.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,1,1).p("A24AdQECihCuADQAAg+Aog/QAXglAgggQBIhKBeg1QA0gaA1gUQEghvFQAmQCKAPCPgDQGfgJGUA+QAwAIAqAMQDwBGAVDqQAFA7ANA/QAOA/AJBBQAgCDgnCFQg8DKmuAZQmeAPmpADQjbACjTgSQgQgBgRgCQh4gLh1gRQkYgrhYiBQhWh9AdiFQADgQADgQQAGg1ABg0QhYgcjeA2g");
	this.shape_29.setTransform(55.5,18.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ak8IzIghgDQh4gLh1gRQkYgrhYiBQhWh9AdiFIAGggQAGg1ABg0QhYgcjeA2IicAmQECihCuADQAAg+Aog/QAXglAgggQBIhKBeg1QA0gaA1gUQEghvFQAmQCKAPCPgDQGfgJGUA+QAwAIAqAMQDwBGAVDqQAFA7ANA/QAOA/AJBBQAgCDgnCFQg8DKmuAZQmeAPmpADIgsABQjEAAi+gRg");
	this.shape_30.setTransform(55.5,18.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(2,1,1).p("A3oAeQEKinCzAEQABhAAphBQAYgnAhghQBLhMBgg3QA2gbA3gVQEphyFbAnQCPAPCVgDQGsgJGhBBQAyAHArANQD4BIAVDyQAGA9AOBBQAOBBAJBEQAiCHgpCJQg+DRm8AaQmsAQm3ADQjiACjagTQgRgBgRgCQh9gMh5gSQkhgrhbiGQhYiBAeiKQADgQADgQQAGg4ABg1QhbgdjmA4g");
	this.shape_31.setTransform(60.4,19.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AlGJGIgigDQh9gMh5gSQkhgrhbiGQhYiBAeiKIAGggQAGg4ABg1QhbgdjmA4IigAnQEKinCzAEQABhAAphBQAYgnAhghQBLhMBgg3QA2gbA3gVQEphyFbAnQCPAPCVgDQGsgJGhBBQAyAHArANQD4BIAVDyQAGA9AOBBQAOBBAJBEQAiCHgpCJQg+DRm8AaQmsAQm3ADIgsAAQjMAAjEgRg");
	this.shape_32.setTransform(60.4,19.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2,1,1).p("A4ZAfQETisC5AEQABhDAqhCQAZgoAigjQBNhOBkg5QA3gbA6gWQEyh2FmAoQCTAQCagDQG6gJGvBCQAzAIAsANQEABLAWD6QAGA+AOBDQAPBEAJBFQAjCMgqCNQhADXnLAcQm5AQnFADQjpACjhgTQgSgBgRgCQiBgMh9gTQkrgtheiKQhaiFAeiOQAEgRACgRQAHg5ABg3QhegejtA6g");
	this.shape_33.setTransform(65.2,20);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AlQJZIgjgDQiBgMh9gTQkrgtheiKQhaiFAeiOIAGgiQAHg5ABg3QhegejtA6IimAoQETisC5AEQABhDAqhCQAZgoAigjQBNhOBkg5QA3gbA6gWQEyh2FmAoQCTAQCagDQG6gJGvBCQAzAIAsANQEABLAWD6QAGA+AOBDQAPBEAJBFQAjCMgqCNQhADXnLAcQm5AQnFADIgjAAQjXAAjQgRg");
	this.shape_34.setTransform(65.2,20);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(2,1,1).p("A5JAgQEbiyC/AEQABhEArhFQAagpAjgkQBQhRBmg6QA5gdA8gWQE7h5FyApQCYAQCegDQHIgKG8BFQA0AIAuANQEIBOAXEBQAGBBAPBFQAPBFAJBIQAkCQgrCSQhCDenZAcQnHARnTADQjxACjogUQgSgBgSgCQiEgMiBgTQk0gvhhiOQheiKAgiSQADgRADgSQAHg7ABg5Qhhgej0A7g");
	this.shape_35.setTransform(70.1,20.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlbJrIgkgDQiEgMiBgTQk0gvhhiOQheiKAgiSIAGgjQAHg7ABg5Qhhgej0A7IirAqQEbiyC/AEQABhEArhFQAagpAjgkQBQhRBmg6QA5gdA8gWQE7h5FyApQCYAQCegDQHIgKG8BFQA0AIAuANQEIBOAXEBQAGBBAPBFQAPBFAJBIQAkCQgrCSQhCDenZAcQnHARnTADIgjAAQjfAAjXgSg");
	this.shape_36.setTransform(70.1,20.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("A56AhQEki3DFAEQAAhHAthGQAbgrAkgkQBRhUBqg8QA7gdA9gXQFGh9F8AqQCdARCigDQHWgKHKBGQA2AJAvAOQEQBPAYEJQAGBDAPBHQAPBIAKBKQAlCUgsCWQhEDlnoAdQnUARniAEQj4ABjvgUQgTgBgSgCQiIgNiFgUQk9gvhkiTQhhiOAhiWQAEgSACgSQAHg9ACg7Qhkgfj8A9g");
	this.shape_37.setTransform(75,21.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AlmJ+IglgDQiIgNiFgUQk9gvhkiTQhhiOAhiWIAGgkQAHg9ACg7Qhkgfj8A9IiwArQEki3DFAEQAAhHAthGQAbgrAkgkQBRhUBqg8QA7gdA9gXQFGh9F8AqQCdARCigDQHWgKHKBGQA2AJAvAOQEQBPAYEJQAGBDAPBHQAPBIAKBKQAlCUgsCWQhEDlnoAdQnUARniAEIgjAAQjmAAjegTg");
	this.shape_38.setTransform(75,21.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2,1,1).p("A6rAiQEti8DKAEQAAhJAvhJQAbgrAlgmQBUhWBtg+QA9geA/gYQFPiAGHAsQCiARCngEQHkgKHWBJQA4AIAxAPQEYBRAYERQAGBFAQBJQAPBKALBMQAmCZguCaQhGDsn1AeQnjARnvAEQkAACj2gVQgTgBgTgCQiMgOiJgUQlHgxhmiXQhkiSAiibQAEgSADgTQAHg+ABg9QhmggkEA/g");
	this.shape_39.setTransform(79.9,21.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AlxKRIgmgDQiMgOiJgUQlHgxhmiXQhkiSAiibIAHglQAHg+ABg9QhmggkEA/Ii1AsQEti8DKAEQAAhJAvhJQAbgrAlgmQBUhWBtg+QA9geA/gYQFPiAGHAsQCiARCngEQHkgKHWBJQA4AIAxAPQEYBRAYERQAGBFAQBJQAPBKALBMQAmCZguCaQhGDsn1AeQnjARnvAEIguAAQjnAAjhgTg");
	this.shape_40.setTransform(79.9,21.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2,1,1).p("A7bAjQE1jCDQAEQAAhLAwhKQAcgtAmgnQBXhYBwhAQA+gfBBgYQFYiFGTAtQCmASCsgDQHxgLHlBLQA5AJAyAOQEgBUAZEZQAGBHAQBLQAQBMALBOQAnCdgvCfQhIDyoEAfQnwASn9AEQkHACj9gWQgUgBgTgCQiRgOiMgVQlQgyhqibQhmiWAjigQAEgTACgTQAIhAABg+QhpgikLBBg");
	this.shape_41.setTransform(84.7,22.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Al7KjIgngDQiRgOiMgVQlQgyhqibQhmiWAjigIAGgmQAIhAABg+QhpgikLBBIi6AuQE1jCDQAEQAAhLAwhKQAcgtAmgnQBXhYBwhAQA+gfBBgYQFYiFGTAtQCmASCsgDQHxgLHlBLQA5AJAyAOQEgBUAZEZQAGBHAQBLQAQBMALBOQAnCdgvCfQhIDyoEAfQnwASn9AEIgtAAQjvAAjogUg");
	this.shape_42.setTransform(84.7,22.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(2,1,1).p("AzVBXQAFhCAChAQhtgjkSBDIi/AvQE9jHDWAEQABhNAxhNQAdguAngoQBZhaBzhCQBAggBCgZQFiiIGeAvQCrASCxgEQH/gLHxBNQA7AJA0APQEoBXAZEgQAHBJAQBNQARBOALBRAb+BXQAkChgwCjQhKD5oSAgQn+ASoMAEQkOACkEgWQgUgBgUgCQiVgOiQgWQlZg0htifQhpiaAkikQAEgUADgT");
	this.shape_43.setTransform(89.6,23.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AmGK2IgogDQiVgOiQgWQlZg0htifQhpiaAkikIAHgnIACAAQAFhCAChAQhtgjkSBDIi/AvQE9jHDWAEQABhNAxhNQAdguAngoQBZhaBzhCQBAggBCgZQFiiIGeAvQCrASCxgEQH/gLHxBNQA7AJA0APQEoBXAZEgQAHBJAQBNQARBOALBRIAEAAQAkChgwCjQhKD5oSAgQn+ASoMAEIgtAAQj2AAjvgUg");
	this.shape_44.setTransform(89.6,23.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2,1,1).p("A8Kg/QD9igC6gcQAxgVAygLQAJg6AWgrQANgaATgaQAggtAqgoQAQgPASgOQAtgmAzggQArgcAugXQBEgfBGgXQC7hADKgOQCPgKCWAGQA7ACA6AFQC0APC3AAQC5AAC3ALQAwADAuAFQDlAYC2BHQAzATA1AVQAGACAHADQAyATArAXQA5AdApAiQA5AhAmBJQBGBeAKClQAFBKANBSQAOBQAJBVQABABACAAQACANABAMQAEAcACAcQAKCDgqB8QhIDQlqA3QhbAOhrAHQlNAPlUAHQjAADiugCQgRAAgRgBQhggChagDQiNgEiigZQgegEgegFQgVgEgTgEQiQgdiBg2QgxgSgsgXQgHgDgIgEQjMhdhKiQQhaimAdioQACgOACgPQABgFAAgGQADgIAAgHQACgtADguQABgPABgPQgBgBgBgBQgBAAgBAAQgigVg3gJQhogDiwAqQgTAFgUAGg");
	this.shape_45.setTransform(89.4,33.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ABiMpIgigBIi6gFQiNgEiigZIg8gJIgogIQiQgdiBg2QgxgSgsgXIgPgHQjMhdhKiQQhaimAdioIAEgdIABgLQADgIAAgHQACgtADguIACgeIgCgCIgCAAQgigVg3gJQhogDiwAqIgnALIigAoQD9igC6gcQAxgVAygLQAJg6AWgrQANgaATgaQAggtAqgoIAigdQAtgmAzggQArgcAugXQBEgfBGgXQC7hADKgOQCPgKCWAGQA7ACA6AFQC0APC3AAQC5AAC3ALQAwADAuAFQDlAYC2BHQAzATA1AVIANAFQAyATArAXQA5AdApAiQA5AhAmBJQBGBeAKClQAFBKANBSQAOBQAJBVIADABIADAZQAEAcACAcQAKCDgqB8QhIDQlqA3QhbAOhrAHQlNAPlUAHQh6AChzAAIiBgBg");
	this.shape_46.setTransform(89.4,33.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(2,1,1).p("A8JikQEKioDAgWQAngeAwgWQAPg8AagqQAPgaAUgZQAkgtAtgnQARgPATgOQAxglA2gfQAugaAygXQBGgdBKgWQDDg6DUgFQCVgFCbAEQA7ABA+AFQC8AMC9ADQDAADC9AQQAyAEAwAHQDyAlCXByQAqAdAtAgQAGAFAGAFQArAcAkAhQAyAlAgArQAuAeAeBdQA4BeAHC2QAEBMAKBUQAKBVAHBZQABABACABQABANABAOQADAdACAdQAHCMgwB7QhVDXlyAyQhgAOhsAHQlbAUlhAHQjQAEirgGQgSgBgPgBQhpgGhagDQiGgFi0goQgfgGgdgIQgVgFgUgHQiMgshvhXQgrgbgkghQgGgGgGgFQinh+g/igQhKiyAWirQACgOABgOQABgGABgGQABgJABgJQAAgvAFgwQACgQABgPQgBgBgBgBQAAgBAAAAQgbgegsgUQhngJi7AtQgVAFgVAFIilAqg");
	this.shape_47.setTransform(89.3,43.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAWOIIghgCQhpgGhagDQiGgFi0goQgfgGgdgIIgpgMQiMgshvhXQgrgbgkghIgMgLQinh+g/igQhKiyAWirIADgcIACgMIACgSQAAgvAFgwIADgfIgCgCIAAgBQgbgegsgUQhngJi7AtIgqAKIilAqIgBAAQEKioDAgWQAngeAwgWQAPg8AagqQAPgaAUgZQAkgtAtgnQARgPATgOQAxglA2gfQAugaAygXQBGgdBKgWQDDg6DUgFQCVgFCbAEQA7ABA+AFQC8AMC9ADQDAADC9AQQAyAEAwAHQDyAlCXByIBXA9IAMAKQArAcAkAhQAyAlAgArQAuAeAeBdQA4BeAHC2QAEBMAKBUQAKBVAHBZIADACIACAbQADAdACAdQAHCMgwB7QhVDXlyAyQhgAOhsAHQlbAUlhAHQhTABhNAAQh0AAhngDg");
	this.shape_48.setTransform(89.3,43.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2,1,1).p("A8HkJQEXiwDFgPQAdgoAugiQAVg8AdgqQASgZAVgZQAogtAwgmQATgPATgOQA1gjA5geQAygZA0gWQBKgcBNgUQDLg1DdADQCbABCfACQA/ABBBADQDDAJDEAHQDGAGDEAUQA0AGAxAJQEAAxB3CeQAhAoAmArQAFAHAFAGQAkAnAdApQArAvAYAzQAiAbAXBxQApBeAEDHQADBNAHBaQAHBWAEBeQABABABABQABAPABAQQACAdABAfQAECTg0B6QhjDgl7AsQhkAOhuAIQlnAXlvAIQjfAEimgKQgTgBgSgBQhvgJhbgEQh+gFjHg3QgfgIgegLQgVgHgUgJQiHg7hfh4QgkglgcgsQgFgHgFgHQiCifgyixQg6i9APivQABgPABgOQAAgGABgGQABgKAAgJQAAgxAGgzQACgPACgQQgBgCAAgBQAAAAAAgBQgTgngggfQhmgOjHAuQgWAFgWAFIisAsg");
	this.shape_49.setTransform(89.1,53.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgzPmIglgCQhvgJhbgEQh+gFjHg3QgfgIgegLQgVgHgUgJQiHg7hfh4QgkglgcgsIgKgOQiCifgyixQg6i9APivIACgdIABgMIABgTQAAgxAGgzIAEgfIgBgDIAAgBQgTgngggfQhmgOjHAuIgsAKIisAsIAAAAQEXiwDFgPQAdgoAugiQAVg8AdgqQASgZAVgZQAogtAwgmIAmgdQA1gjA5geQAygZA0gWQBKgcBNgUQDLg1DdADIE6ADQA/ABBBADQDDAJDEAHQDGAGDEAUQA0AGAxAJQEAAxB3CeIBHBTIAKANQAkAnAdApQArAvAYAzQAiAbAXBxQApBeAEDHQADBNAHBaQAHBWAEBeIACACIACAfIADA8QAECTg0B6QhjDgl7AsQhkAOhuAIQlnAXlvAIIiFABQiOAAhygHg");
	this.shape_50.setTransform(89.1,53.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2,1,1).p("A8GlrQEki5DLgJQAUgxArgtQAbg+AggpQAUgZAYgYQArgsAzgmQAUgPAVgOQA4giA8gcQA1gYA3gUQBOgbBQgSQDTgxDnALQCgAHClAAQBBAABDACQDKAHDLAKQDNAKDLAYQA2AHAyALQENA9BYDKQAYAzAfA3QAEAIAEAIQAcAxAXAyQAkA4APA7QAXAYAPCFQAbBeABDWQABBRAEBeQAFBZACBiQAAACABABQAAARABAQQAAAfABAgQABCbg5B5QhxDomCAnQhpANhwAIQl0Acl8AIQjvAFijgOQgTgCgTgBQh2gMhbgFQh3gGjZhGQgggJgegNQgVgKgTgMQiDhJhPiYQgcgvgWg3QgEgIgDgJQhdjBgljBQgrjJAIizQABgPAAgPQABgGAAgGQABgLAAgJQgCgzAIg1QADgQACgQQgBgCAAgCQABAAAAAAQgLgwgVgrQhkgUjUAwQgWAFgXAGIiyAug");
	this.shape_51.setTransform(89,63.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ah/RHIgmgDQh2gMhbgFQh3gGjZhGQgggJgegNQgVgKgTgMQiDhJhPiYQgcgvgWg3IgHgRQhdjBgljBQgrjJAIizIABgeIABgMIABgUQgCgzAIg1IAFggIgBgEIABAAQgLgwgVgrQhkgUjUAwIgtALIiyAuIgBAAQEki5DLgJQAUgxArgtQAbg+AggpQAUgZAYgYQArgsAzgmIApgdQA4giA8gcQA1gYA3gUQBOgbBQgSQDTgxDnALQCgAHClAAQBBAABDACQDKAHDLAKQDNAKDLAYQA2AHAyALQENA9BYDKQAYAzAfA3IAIAQQAcAxAXAyQAkA4APA7QAXAYAPCFQAbBeABDWQABBRAEBeQAFBZACBiIABADIABAhIABA/QABCbg5B5QhxDomCAnQhpANhwAIQl0Acl8AIIh5ACQigAAh5gLg");
	this.shape_52.setTransform(89,63.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(2,1,1).p("A8FnNQEwjBDRgCQAKg7Apg4QAhg/AkgoQAWgZAZgYQAugsA2glQAWgPAWgNQA8ghA/gbQA4gXA6gTQBRgaBUgQQDbgsDwAUQClAMCsgBQBEgBBEABQDSAEDRANQDUANDSAdQA4AIAzANQEaBKA5D1QAQA+AXBCQAEAKADAKQAUA6ARA8QAcBBAHBEQALAUAHCZQANBfgBDnQgBBTACBiQAABbAABmQAAACABADQAAARAAASQgBAgAAAhQgBCjg/B4Qh+DvmKAiQhuANhxAJQmBAgmJAJQj+AFiigSQgUgCgTgCQh9gPhbgFQhwgHjrhVQghgLgdgQQgVgMgUgOQh+hYg/i5QgVg5gOhBQgDgKgCgKQg3jjgZjQQgcjUACi5QAAgPAAgPQAAgGAAgHQAAgMAAgJQgDg1AKg2QADgRACgRQABgCAAgCQABAAABAAQgDg5gKg3QhkgZjfAyQgXAFgYAGIi4Avg");
	this.shape_53.setTransform(88.9,72.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AjLSpIgogEQh9gPhagFQhxgHjrhVQgggLgegQQgVgMgUgOQh+hYg+i5QgWg5gOhBIgFgUQg3jjgZjQQgcjUACi5IAAgeIAAgNIAAgVQgDg1AKg2IAGgiIAAgEIACAAQgDg5gKg3QhjgZjgAyIgvALIi4AvIgBAAQExjBDQgCQAKg7Apg4QAig/AjgoQAWgZAZgYQAugsA3glQAVgPAWgNQA9ghA+gbQA5gXA6gTQBRgaBTgQQDbgsDwAUQClAMCsgBQBEgBBEABQDSAEDRANQDUANDRAdQA5AIAyANQEbBKA5D1QAQA+AXBCIAHAUQAUA6AQA8QAcBBAIBEQALAUAHCZQANBfgCDnQAABTABBiQABBbAABmIABAFIAAAjIAABBQgDCjg+B4Qh9DvmLAiQhuANhxAJQmBAgmJAJIhzABQixAAh7gOg");
	this.shape_54.setTransform(88.9,72.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2,1,1).p("AzVn6QAFhCAChCQhtgjkSBDIi/AxQE9jJDWAEQABhNAxhNQAdguAngoQBZhaBzhCQBAggBCgZQFiiIGeAvQCrASCxgEQH/gLHxBNQA7AJA0APQEoBXAZEgQAHBJAQBNQARBQALBRAb+n6QARBLgCBLQAAASgBCsQgBCigOJjAb+JfQgCAhAAAjQgQILpWArQn+A3oMAMQkOAGiegWQiegWhpgHQhqgHj8hkQj9hjgomqQgBgMgBgMAzmlkQgFg3ANg4QAEgUADgTAy1JfQgmoegKmBQgBgSAAgS");
	this.shape_55.setTransform(89.6,82.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AkgUMQiegWhpgHQhqgHj8hkQj9hjgomqIgCgYIgBAAQgmoegKmBIgBgkIAAAAQgFg3ANg4IAHgnIACAAQAFhCAChCQhtgjkSBDIi/AxQE9jJDWAEQABhNAxhNQAdguAngoQBZhaBzhCQBAggBCgZQFiiIGeAvQCrASCxgEQH/gLHxBNQA7AJA0APQEoBXAZEgQAHBJAQBNQARBQALBRIAEAAQARBLgCBLIgBC+QgBCigOJjIABAAIgCBEQgQILpWArQn+A3oMAMIhvABQjBAAh8gRg");
	this.shape_56.setTransform(89.6,82.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(2,1,1).p("A8NnNQExjBDSgCQAKg6Apg5QAig/AkgpQAVgXAXgWQAugsA2gmQAXgQAZgPQA8ghBAgaQA0gWA2gSQBRgbBVgQQDfgtD1AUQClAMCsgBQBFgBBEABQDTAEDSANQDUANDSAdQA5AIAzANQEbBKA5D1QAQA+AYBCQAFAOAEAPQAUA1APA3QAGAGABAFQAWA8AHA+QALAUAICZQAOBggCDvQAABRABBhQACBZAABkQABAVgBASQAAAgAAAhQgCCfg8B3Qh8D0mSAiQhpANhuAJQmGAgmPAJQj/AFihgSQgUgCgTgCQh9gPhdgFQhxgHjrhVQgigLgfgRQgVgMgUgPQh+hZg/i7QgUg2gOg/QgCgKgCgKQg6jmgajTQgcjOACi2QAAgRAAgQQABgGAAgFQAAgBAAgBQAAgLAAgKQgDg2AKg2QADgOABgOQAAgFABgEQABAAAAAAQgDg5gKg3QhkgZjhAyQgWAFgXAGIi6Avg");
	this.shape_57.setTransform(89.7,72.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AjKSpIgngEQh9gPhdgFQhxgHjrhVQgigLgfgRQgVgMgUgPQh+hZg/i7QgUg2gOg/IgEgUQg6jmgajTQgcjOACi2IAAghIABgLIAAgCIAAgVQgDg2AKg2IAEgcIABgJIABAAQgDg5gKg3QhkgZjhAyIgtALIi6AvIAAAAQExjBDSgCQAKg6Apg5QAig/AkgpQAVgXAXgWQAugsA2gmQAXgQAZgPQA8ghBAgaQA0gWA2gSQBRgbBVgQQDfgtD1AUQClAMCsgBQBFgBBEABQDTAEDSANQDUANDSAdQA5AIAzANQEbBKA5D1QAQA+AYBCIAJAdQAUA1APA3QAGAGABAFQAWA8AHA+QALAUAICZQAOBggCDvIABCyQACBZAABkIAAAnIAABBQgCCfg8B3Qh8D0mSAiQhpANhuAJQmGAgmPAJIhzABQiyAAh7gOg");
	this.shape_58.setTransform(89.7,72.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(2,1,1).p("A8XlrQEmi4DMgJQAVgxArgtQAcg/AggpQATgYAWgWQArgtAzgmQAWgQAYgQQA5giA9gcQAxgWA0gUQBOgbBRgSQDYgyDtAMQChAHClAAQBCAABCACQDNAGDMAKQDOAKDMAZQA3AGAyALQEOA+BaDJQAYAzAgA3QAGALAGAMQAaAtAWAvQAGAEACAFQAdAzAPA2QAXAYAQCEQAeBgACDdQABBQAEBcQAEBYADBgQACATAAARQABAfABAgQAACYg3B4QhwDsmMAmQhlANhsAJQl7AbmCAJQjxAFikgOQgTgCgTgCQh3gLhcgFQh5gGjZhGQgigKgfgOQgVgKgUgMQiDhKhQiaQgbgtgVg0QgEgJgEgIQhhjEgmjCQgsjGAJiwQABgQAAgQQAAgGABgFQAAgBABgBQgBgKABgKQgCg0AIg0QACgOACgOQgBgEgBgDIABAAQgLgwgVgrQhmgUjVAwQgVAFgWAFIi1Aug");
	this.shape_59.setTransform(90.7,63.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Ah+RHIgmgDQh2gLhdgFQh5gGjZhGQgigKgfgOQgVgKgUgMQiDhKhQiaQgbgtgVg0IgIgRQhgjEgnjCQgsjGAJiwIABggIABgLIABgCIAAgUQgCg0AIg0IAEgcIgCgHIABAAQgKgwgWgrQhlgVjWAxIgrAKIi1AuIAAAAQEmi5DMgIQAVgxArgtQAcg/AggpQAUgYAWgWQAqgtAzgmQAWgQAYgQQA5giA9gcQAxgWA1gUQBNgbBRgSQDYgyDtAMQCiAHCkAAQBCAABDACQDMAGDMAKQDOAKDMAZQA3AGAyALQEOA+BaDJQAZAyAfA4IAMAXQAbAtAVAvQAHAEABAFQAdAzAPA2QAXAYAQCEQAfBgABDdQABBQAEBcQAEBYADBgIACAkIACA/QAACYg2B4QhxDsmMAmQhlANhsAIQl7AcmCAIIh6ACQihAAh6gLg");
	this.shape_60.setTransform(90.7,63.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(2,1,1).p("A8hkIQEbixDIgPQAegnAugiQAWg+AdgqQARgYAUgXQAogtAwgmQAVgRAWgQQA2gjA6gdQAvgYAxgUQBLgdBOgUQDRg2DjADQCdABCgACQA/ABBBADQDFAKDHAGQDIAHDFAUQA1AFAxAJQECAxB5CeQAiAoAnArQAIAJAHAKQAiAjAcAnQAHAEACADQAkArAXAuQAjAaAYBwQAuBgAEDOQADBMAHBZQAIBVAFBdQADARAAAPQACAeACAfQADCRgzB5QhjDjmGAsQhhANhrAIQlvAYl2AHQjiAFingKQgTgCgSgBQhwgIhdgEQiAgGjIg3QghgIgfgLQgVgIgUgJQiJg7hhh5QgigkgcgqQgFgHgFgHQiIihg0iyQg8i7AQitQABgPABgQQABgFAAgGQABAAABgBQAAgKAAgJQgBgyAHgzQACgOABgNQgCgDgBgDIAAAAQgTgnghggQhngNjJAtQgVAFgVAFIivAtg");
	this.shape_61.setTransform(91.7,53.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgxPnIglgDQhwgIhdgEQiAgGjIg3QghgIgfgLQgVgIgUgJQiJg7hhh5QgigkgcgqIgKgOQiIihg0iyQg8i7AQitIACgfIABgLIACgBIAAgTQgBgyAHgzIADgbIgDgGIAAAAQgTgnghggQhngNjJAtIgqAKIivAtIgBAAQEbixDIgPQAegnAugiQAWg+AdgqQARgYAUgXQAogtAwgmQAVgRAWgQQA2gjA6gdQAvgYAxgUQBLgdBOgUQDRg2DjADIE9ADQA/ABBBADQDFAKDHAGQDIAHDFAUQA1AFAxAJQECAxB5CeIBJBTIAPATQAiAjAcAnQAHAEACADQAkArAXAuQAjAaAYBwQAuBgAEDOQADBMAHBZQAIBVAFBdQADARAAAPIAEA9QADCRgzB5QhjDjmGAsQhhANhrAIQlvAYl2AHIiHACQiPAAhzgHg");
	this.shape_62.setTransform(91.7,53.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2,1,1).p("A8rikQEPioDDgWQAogeAxgWQAQg9AagrQAPgYASgYQAlgtAtgnQAUgRAVgQQAzgkA3gfQAsgZAvgVQBIgeBKgVQDJg8DbgFQCXgECdAEQA8ABA+AFQC/AMDBADQDBADDAAPQAzAFAwAGQD1AlCZByQAsAeAuAfQAJAHAJAHQAoAaAjAeQAHAEADACQArAiAfAnQAvAdAgBbQA+BhAHC8QAEBMALBTQALBUAHBYQAEAQABANQADAdACAeQAHCKgvB6QhXDbmAAxQhdANhpAHQlkAUlqAHQjSAEitgGQgSgBgPgBQhrgGhcgDQiIgFi3goQgggGgfgIQgVgGgUgHQiOgshyhYQgqgagjggQgGgFgHgFQiuh/hBijQhMivAXipQABgQACgPQABgFAAgFQABgBABAAQAAgKAAgJQABgwAFgxQABgNABgNQgCgDgCgCIgBAAQgcgegsgUQhogIi9AsQgUAEgVAFIioArg");
	this.shape_63.setTransform(92.7,43.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAZOIIghgCQhrgGhcgDQiIgFi3goQgggGgfgIQgVgGgUgHQiOgshyhYQgqgagjggIgNgKQiuh/hBijQhMivAXipIADgfIABgKIACgBIAAgTQABgwAFgxIACgaIgEgFIgBAAQgcgegsgUQhogIi9AsIgpAJIioArIgCAAQEPioDDgWQAogeAxgWQAQg9AagrQAPgYASgYQAlgtAtgnQAUgRAVgQQAzgkA3gfQAsgZAvgVQBIgeBKgVQDJg8DbgFQCXgECdAEQA8ABA+AFQC/AMDBADQDBADDAAPQAzAFAwAGQD1AlCZByIBaA9IASAOQAoAaAjAeIAKAGQArAiAfAnQAvAdAgBbQA+BhAHC8QAEBMALBTQALBUAHBYQAEAQABANQADAdACAeQAHCKgvB6QhXDbmAAxQhdANhpAHQlkAUlqAHQhUABhOAAQh1AAhogDg");
	this.shape_64.setTransform(92.7,43.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(2,1,1).p("A81g/QEDigC/gcQAygVAzgKQAKg9AWgrQANgZASgYQAhguArgnQATgRATgRQAwglA0ggQApgaAtgWQBEgfBIgXQDBhBDTgNQCRgKCYAGQA7ACA7AFQC4APC7AAQC7AAC6ALQAxADAvAFQDpAYC5BHQA0ASA2AUQAKAEALAFQAvARApAWQAIACADACQAyAZAnAfQA7AgApBHQBNBgALCrQAFBLAOBQQANBRAKBUQAFAOACAMQAEAcACAdQAKCCgqB7QhLDTl6A2QhZANhnAHQlYAPleAHQjCADiygCQgRAAgRgBQhigChcgDQiQgEimgZQgfgEgfgGQgVgDgUgFQiUgdiDg2QgwgSgrgVQgHgEgIgDQjWhdhNiSQhcilAdioQADgOACgPQAAgFABgGQABAAABAAQABgJAAgHQACguADgvQABgNABgNQgDgCgEgBQAAAAgBAAQgkgVg4gJQhpgCixApQgTAFgUAFIijApg");
	this.shape_65.setTransform(93.7,33.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("ABlMpIgigBIi+gFQiQgEimgZIg+gKIgpgIQiUgdiDg2QgwgSgrgVIgPgHQjWhdhNiSQhcilAdioIAFgdIABgLIACAAIABgQQACguADgvIACgaIgHgDIgBAAQgkgVg4gJQhpgCixApIgnAKIijApIgCAAQEDigC/gcQAygVAzgKQAKg9AWgrQANgZASgYQAhguArgnIAmgiQAwglA0ggQApgaAtgWQBEgfBIgXQDBhBDTgNQCRgKCYAGQA7ACA7AFQC4APC7AAQC7AAC6ALIBgAIQDpAYC5BHQA0ASA2AUIAVAJQAvARApAWIALAEQAyAZAnAfQA7AgApBHQBNBgALCrQAFBLAOBQQANBRAKBUQAFAOACAMQAEAcACAdQAKCCgqB7QhLDTl6A2QhZANhnAHQlYAPleAHQh8ACh1AAIiDgBg");
	this.shape_66.setTransform(93.7,33.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(2,1,1).p("A8ehEQEFikC+gbQAugUAwgKQAMhDAXgrQAMgWARgXQAhgtAqgoQAUgSAUgRQAvgmA0ghQAogZArgVQBEgfBHgYQDHhEDagMQCTgJCbAIQAtACAsAEQC2APC5AAQDRgBDPANQAxAEAxAFQDpAaC3BLQAmAPAmAQQAMAFALAFQAoAQAiATQACAAABABQAuAZAlAeQACABACABQCmCCAQDvQAFBNANBRQAMBQAIBTQAAACAAABQACABABAAQAaCtg1CkQhQDrmGA4QhJAJhSAFQlxARl4AHQiqAEirgFQg9gCg7gDQgRgBgRgBQiGgJiCgRQhDgIhBgNQgVgDgUgFQiUgfiGgxQhLgag+ghQjBhYhIiOQhaikAgitQABgHABgGQADgPABgOQACAAABAAQACgdABgeQABgBAAgBQACgmABglQgNgIgPgHQgZgLghgHQhrgDi6AsQgSAFgSAEg");
	this.shape_67.setTransform(91.4,34.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ABMMzQg9gCg7gDIgigCQiGgJiCgRQhDgIhBgNIgpgIQiUgfiGgxQhLgag+ghQjBhYhIiOQhaikAgitIACgNIAEgdIADAAIADg7IABgCIADhLQgNgIgPgHQgZgLghgHQhrgDi6AsIgkAJIimAqQEFikC+gbQAugUAwgKQAMhDAXgrQAMgWARgXQAhgtAqgoIAogjQAvgmA0ghQAogZArgVQBEgfBHgYQDHhEDagMQCTgJCbAIIBZAGQC2APC5AAQDRgBDPANQAxAEAxAFQDpAaC3BLIBMAfIAXAKQAoAQAiATIADABQAuAZAlAeIAEACQCmCCAQDvQAFBNANBRQAMBQAIBTIAAADIADABQAaCtg1CkQhQDrmGA4QhJAJhSAFQlxARl4AHIiMACQhkAAhlgDg");
	this.shape_68.setTransform(91.4,34.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(2,1,1).p("A8wivQEVitDGgVQAlgdAtgVQAUhFAbgqQAOgXASgWQAlguAvgoQAUgRAWgRQA0gmA4gfQArgYAugVQBIgeBLgWQDSg/DmgEQCbgDCfAFQAwACAwADQC/ALDBADQDbACDZATQA0AEAyAIQD6AmCYB5QAfAXAiAaQAKAHAKAHQAhAYAeAbQABABACABQAlAiAeAmQACABACAAQCKCfALD2QAEBRAIBSQAJBXAEBXQAAABAAABQABABABABQAPC6g6CkQhgEBmFA6QhNAJhUAGQmCAVmKAIQizAEiygLQg+gDg/gGQgTgCgSgCQiLgPiHgaQhGgNhBgUQgVgGgUgHQiTgvh9hOQhEgmg3gxQimh1g9ihQhMiuAei1QABgIABgHQACgOACgPQABgBAAAAQADggABggQABgBAAgBQACgnABgoQgKgLgMgJQgUgSgZgOQhrgKjJAvQgTAFgTAFg");
	this.shape_69.setTransform(93.2,45.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAMOaQg+gDg/gGIglgEQiLgPiHgaQhGgNhBgUIgpgNQiTgvh9hOQhEgmg3gxQimh1g9ihQhMiuAei1IACgPIAEgdIABgBIAEhAIABgCIADhPQgKgLgMgJQgUgSgZgOQhrgKjJAvIgmAKIiuArQEVitDGgVQAlgdAtgVQAUhFAbgqQAOgXASgWQAlguAvgoIAqgiQA0gmA4gfQArgYAugVQBIgeBLgWQDSg/DmgEQCbgDCfAFIBgAFQC/ALDBADQDbACDZATQA0AEAyAIQD6AmCYB5IBBAxIAUAOQAhAYAeAbIADACQAlAiAeAmIAEABQCKCfALD2QAEBRAIBSQAJBXAEBXIAAACIACACQAPC6g6CkQhgEBmFA6QhNAJhUAGQmCAVmKAIIhZABQiHAAiFgIg");
	this.shape_70.setTransform(93.2,45.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(2,1,1).p("A9DkYQEki2DOgPQAcgnArghQAbhGAegqQARgXAUgWQApguAygnQAWgSAYgQQA4glA8geQAugXAxgUQBMgdBPgVQDdg6DyAEQCiACCnADQAyABAyACQDIAJDKAFQDlAGDiAYQA3AFA0AKQELAzB4ClQAZAhAcAjQAIAJAJAKQAcAgAYAiQACACABABQAdAqAYAvQACAAABABQBtC7AHD9QACBTAFBXQAEBbAABbQAAABAAACQABABABABQAFDGg/ClQhxEYmDA7QhRAJhWAGQmUAbmcAIQi8AEi3gQQhDgGhCgIQgTgDgTgDQiQgViNgjQhIgShCgbQgVgIgUgJQiShBhzhpQg9g0gwhAQiLiRgzi1Qg9i5Aai+QABgIABgIQACgPACgPQABgBAAgBQADgiABghQABgBABAAQACgpABgqQgIgOgJgMQgOgZgTgVQhrgQjXAxQgUAFgUAFg");
	this.shape_71.setTransform(95.2,56.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Ag0QDQhDgGhCgIIgmgGQiQgViNgjQhIgShCgbQgVgIgUgJQiShBhzhpQg9g0gwhAQiLiRgzi1Qg9i5Aai+IACgQIAEgeIABgCIAEhDIACgBIADhTQgIgOgJgMQgOgZgTgVQhrgQjXAxIgoAKIi1AuQEki2DOgPQAcgnArghQAbhGAegqQARgXAUgWQApguAygnQAWgSAYgQQA4glA8geQAugXAxgUQBMgdBPgVQDdg6DyAEIFJAFIBkADQDIAJDKAFQDlAGDiAYQA3AFA0AKQELAzB4ClIA1BEIARATQAcAgAYAiIADADQAdAqAYAvIADABQBtC7AHD9QACBTAFBXQAEBbAABbIAAADIACACQAFDGg/ClQhxEYmDA7QhRAJhWAGQmUAbmcAIIhLABQiWAAiSgNg");
	this.shape_72.setTransform(95.2,56.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(2,1,1).p("A9ZmAQE0i/DWgJQATgwApgtQAhhHAjgqQASgXAWgWQAtgtA2goQAYgRAagRQA8gjA/gdQAygXA0gSQBQgcBTgUQDog2D9ANQCpAICvAAQA0AAA0ACQDTAFDRAIQDvAKDsAcQA6AHA1ALQEcBABZDTQATApAWAsQAHAMAHANQAXAoATAqQABABABACQAVAzARA2QACABACAAQBQDXABEEQABBXABBbQABBfgEBfQAAACAAABQAAACABABQgGDShECmQiBEumBA8QhVAKhZAHQmlAfmuAJQjFAEi+gVQhGgIhFgMQgUgDgUgEQiVgbiRgtQhLgXhDghQgVgKgVgMQiRhShoiEQg3hCgphOQhwivgojJQgujDAXjIQABgIABgIQACgQABgQQAAgBABgBQACgjACgjQABgBABAAQACgrABgrQgFgRgGgQQgIgfgNgdQhrgVjlAzQgVAFgVAFg");
	this.shape_73.setTransform(97.4,67.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ah4RuQhGgIhFgMIgogHQiVgbiRgtQhLgXhDghIgqgWQiRhShoiEQg3hCgphOQhwivgojJQgujDAXjIIACgQIADggIABgCIAEhGIACgBIADhWQgFgRgGgQQgIgfgNgdQhrgVjlAzIgqAKIi9AwQE0i/DWgJQATgwApgtQAhhHAjgqQASgXAWgWQAtgtA2goIAygiQA8gjA/gdQAygXA0gSQBQgcBTgUQDog2D9ANQCpAICvAAQA0AAA0ACQDTAFDRAIQDvAKDsAcQA6AHA1ALQEcBABZDTQATApAWAsIAOAZQAXAoATAqIACADQAVAzARA2IAEABQBQDXABEEIACCyQABBfgEBfIAAADIABADQgGDShECmQiBEumBA8QhVAKhZAHQmlAfmuAJIhEAAQiiAAidgRg");
	this.shape_74.setTransform(97.4,67.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(2,1,1).p("A90nnQFFjJDdgDQAKg5Ang4QAohIAmgqQAVgXAXgWQAyguA5gnQAagRAbgRQBAgiBEgcQA1gVA2gSQBVgbBYgSQDygxEJAVQCwANC3gCQA2gBA2ABQDcACDaALQD5AND1AhQA9AIA2AOQEtBMA7EAQALAyASA1QAFAPAFAPQARAwAPAxQAAADABACQANA7AKA/QACAAACAAQAzDzgDEJQgBBegDBeQgDBjgHBjQAAABAAACQgBACAAACQgQDehJCmQiRFFl/A+QhaAJhbAIQm3Ajm/AKQjOAFjFgbQhJgKhIgPQgVgEgVgEQiagiiWg1QhNgchDgoQgWgNgVgOQiQhjhfigQgwhPgiheQhVjLgdjdQgfjLAUjTQAAgJABgJQACgQABgRQAAgBAAgBQADglACglQABAAACAAQABgtABgtQgCgUgDgTQgDglgFglQhrgbj0A2QgVAFgXAFg");
	this.shape_75.setTransform(100.1,78.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AjBTZQhJgKhIgPIgqgIQiagiiWg1QhNgchDgoQgWgNgVgOQiQhjhfigQgwhPgiheQhVjLgdjdQgfjLAUjTIABgSIADghIAAgCIAFhKIADAAIAChaIgFgnQgDglgFglQhrgbj0A2IgsAKIjFAyQFFjJDdgDQAKg5Ang4QAohIAmgqQAVgXAXgWQAyguA5gnQAagRAbgRQBAgiBEgcQA1gVA2gSQBVgbBYgSQDygxEJAVQCwANC3gCQA2gBA2ABQDcACDaALQD5AND1AhQA9AIA2AOQEtBMA7EAQALAyASA1IAKAeQARAwAPAxIABAFQANA7AKA/IAEAAQAzDzgDEJQgBBegDBeQgDBjgHBjIAAADIgBAEQgQDehJCmQiRFFl/A+QhaAJhbAIQm3Ajm/AKIg7ABQitAAirgXg");
	this.shape_76.setTransform(100.1,78.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(2,1,1).p("A0wnBQAChFAChFQACgsABgsQh0gkknBGIjNAzQFVjSDlAEQABhQA1hQQAfgwAqgqQBfhfB8hEQBEgiBIgaQF8iPG8AwQC3ASC+gEQIlgNIWBPQA/AJA4AQQE9BZAcEtQAHBLARBRQANA7AJA7QAFBEADBGAeBnJQAnHVg0HcQhPLWo5BeQokA3oyANQkiAHkXhAQgWgFgVgFQiggoibg/QlyiXh0nQQhxnBAmndQAEg5ADg5");
	this.shape_77.setTransform(103,89);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AmjUnIgrgKQiggoibg/QlyiXh0nQQhxnBAmndIAHhyIADAAIAEiKQACgsABgsQh0gkknBGIjNAzQFVjSDlAEQABhQA1hQQAfgwAqgqQBfhfB8hEQBEgiBIgaQF8iPG8AwQC3ASC+gEQIlgNIWBPQA/AJA4AQQE9BZAcEtQAHBLARBRQANA7AJA7QAFBEADBGIAEAAQAnHVg0HcQhPLWo5BeQokA3oyANIg2ABQkFAAj+g6g");
	this.shape_78.setTransform(103,89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44,p:{scaleX:1,x:89.6}},{t:this.shape_43,p:{scaleX:1,x:89.6}}]},1).to({state:[{t:this.shape_44,p:{scaleX:1,x:89.6}},{t:this.shape_43,p:{scaleX:1,x:89.6}}]},33).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},48).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_44,p:{scaleX:1.028,x:94.7}},{t:this.shape_43,p:{scaleX:1.028,x:94.7}}]},1).to({state:[{t:this.shape_44,p:{scaleX:1,x:89.6}},{t:this.shape_43,p:{scaleX:1,x:89.6}}]},23).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-21.9,159.1,64.2);


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


(lib.frb_background_pressed_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_pressed();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,6,6);


(lib.frb_background_disabled_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_disabled();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,6,6);


(lib.frb_background_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,6,6);


(lib.frb_frame = function(mode,startPosition,loop) {
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
		//																	  n*/
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
	this.highlight3D_mc = new lib.frb_rightOut();
	this.highlight3D_mc.setTransform(1.5,1.5);

	this.highlight_mc = new lib.frb_rightIn();
	this.highlight_mc.setTransform(2.2,2.2);

	this.shadow_mc = new lib.frb_leftIn();
	this.shadow_mc.setTransform(1,1);

	this.darkshadow_mc = new lib.frb_leftOut();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.darkshadow_mc},{t:this.shadow_mc},{t:this.highlight_mc},{t:this.highlight3D_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.frb_dot_disabled_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(disabled_mc, "foregroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.disabled_mc = new lib.frb_dot_disabled();
	this.disabled_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.disabled_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,4,4);


(lib.frb_dot_1 = function(mode,startPosition,loop) {
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
		//																	  n*/
		//component.registerSkinElement(dot_mc, "radioDot");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.dot_mc = new lib.frb_dot();
	this.dot_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.dot_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,4,4);


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


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


(lib.RitaHair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.RitaHair1("synched",0);
	this.instance.setTransform(39.9,2.8,1,1,0,0,0,39.9,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,rotation:4.3},13).to({regY:1.7,scaleX:1,rotation:1.5},13).to({regY:1.8,scaleX:1.05,rotation:4.3},16).to({scaleX:1,rotation:0},12).wait(1));

	// Layer 1
	this.instance_1 = new lib.RitaHair2("synched",0);
	this.instance_1.setTransform(50.9,2.6,1,1,0,0,0,1.3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1.4,scaleX:0.92,rotation:2.5},11).to({regX:1.3,scaleX:0.97,scaleY:1.02,rotation:2.8},14).to({regX:1.4,scaleX:0.92,scaleY:1,rotation:2.5},15).to({regX:1.3,scaleX:1,rotation:0},14).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414141").s().p("AgDAAIgIgCQALABALADIABAAIgBABIAAAAQgJgDgFAAg");
	this.shape.setTransform(44.5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgJE6IAAgBIgJgFQgGgGgDgCIAAACIgLgJQgUgQgPAAQgEAAgbAJQgaAJgZgBQgYgEgNglQgKgcAAgdQAAgMANgSQAOgTAAgUQAAgSgDgnQgEgmAAgTQAAgWAggvQApg7AOgmQAMghAPgyQAKgcAEgOQABgEAUgOIAMgJIAFgGQAIgEAJgBQAOgBAKADIAHAEQAIABAIADIABAAIAAAAIABgBIAAAAQAJAFAOANIAdArIAGAKQAhA2AAASQAABLAdAsIAUAfQAJARAAAZQAAAMgIAJQgIAIAAAQQAAAMAKAfQAKAfAAAmQAAAngEAMQgPArg5AAIgEAAIgGAAIgEAAIAAABIgCACIgRANQgdAWg4AAQgKAAgIgDg");
	this.shape_1.setTransform(40.7,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTFCIgBgBQgJgBgTgPIgWgQQgKAAgZAIQgZAIgJAAQgvAAgTgzQgJgbAAghQAAgRAOgRQANgRAAgRQAAgRgCgoQgEgpAAgSQAAgZAnhBIAxhQQANgeAKg7QAMgsAtgYIAAgBIADgBIAIgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAmgNAmASIAAAAQAKAEAMALQAaAWAAALIAAAEQAMAPAJARQAcAygKAnQADA9AdAkQAdAkAAAnQAAALgIAOQgIAOAAAGIAKAuQAKAwAAAPQAAAugIASQgSAthAAAIgBADIgBgCQgVAPgOAIQgYANg3AAQgSAAgKgGgAgSEzIAJAFIAAABQAIADAKAAQA4AAAegWIAQgNIADgCIAAgBIADAAIAGAAIAEAAQA5AAAPgrQAFgMAAgnQAAgmgKgfQgLgfAAgMQAAgQAIgIQAIgJAAgMQAAgZgJgRIgUgfQgdgsAAhLQAAgSghg2IgGgKIgdgrQgOgMgJgGIAAAAIgBgBQgNgFgLgBQgKgDgOABQgIABgIAEIgGAGIgMAJQgUAOgBAEQgEAOgJAcQgQAygMAhQgOAmgpA7QgfAvAAAWQAAATADAmQADAnAAASQAAAUgOATQgNASAAAMQAAAdAKAcQANAlAZAEQAZABAagJQAbgJADAAQAQAAATAQIALAJIAAgCQAEACAFAGg");
	this.shape_2.setTransform(40.7,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,82.8,69.5);


(lib.barb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.RitaShin("synched",0);
	this.instance.setTransform(-13,51.7,1,1,0,0,0,22.4,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({startPosition:0},0).to({regX:22.6,scaleX:1,scaleY:1,rotation:10.5,x:-12.9},18).to({regX:22.4,scaleX:1,scaleY:1,rotation:0,x:-13},19).wait(20));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0033").s().p("AgfAMQgIgIgBgIIAAgBIgBgBQgEAAgBgDIAIgDIgBABIAAADIAAABIADADIANAKQAMAMAPAAIAHAAIAFgEIACgBIAKgNIAEgEIACgEQACgEgBgDIgBgFIgEgBIghAFIgCABQgOACgOAAQANgEAOAAIA1gHIgKAVQgHAMgMALIgWAFQgPgDgMgKg");
	this.shape.setTransform(-2.8,-55.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD0A0").s().p("AAcHWIAAgLIgCgaIgCgNQgDgQgHgOIgBgDQABgMAMgBQAOADAFAOIACAHIABABQAGAPgCAPQAAAFABAFQABAJAAAJQAAAIgCAIQgCAJgKAAQgMAAAAgMgAA9HAIgBgEQgCgFABgFIAAgOIAAgGIgBgLIgBgEIAAgBQgDgGABgGQABgGAEgEIAEgCIAEgBQAOACACAPIABAJQACAOgBAOIgBAOQAAAMgMABQgIAAgEgGgAjWG2QgEgCgBgFIgBgBQgDgKgBgKIgCgdIABgHQADgGAJgBQALAAACAKIABAHQAEgYgDgZQgEgdAFgdIACgPIADgTIgBgHQgDgOgBgOQgBgKAEgJIABgDQADgJAKAAQAOADgBAOIgBADQgCAJABAIQAFAFABAJIgBARQABAbgDAcIgCAaQAAAGgCAGQABAagDAaIAAABIAAAAQgCAUgIASQgCAGgGADQgGADgGAAQgGAAgGgDgACZFmQgGgCAAgGQgCgPACgPQADgOgCgPQgDgZgNgXIgGgMQgHgMAAgNIAAAAQAAgEADgDIABgBIAEgCIAEAAQAOACAEAOIADAIQAMAaAIAdQADAHAAAIIAAAFQABARgCARIgBANIgCAIQgDAKgIAAIgHgCgAjpEaQgEgDgBgDIgBgHIgBgLIgEg3QgCgPABgPIAAgCQACgSAIgQQADgIAFgEQAGgGAIgCQARgDACAPQABAGgEAEQgEAFgGgBQgLARgBAUQgBAdAFAdIABAIQACAOAAAPQAAADgCADQgFAFgFAAQgFAAgEgEgAhIEFIgDgKQgBgHgEgFIgHgIQgKgHgGgLQgKgOAPgIIAEgCQAFACAEADQAGAEAEAGIADADQAMAJAHAOIABACQAJARgIARIgDADIgHABQgJAAgCgJgACMgyQgPgCADgOQAAgGAFgEQAGgRARgKQATgLAXgBQALgCALADQAAgIgCgJQgDgNgJgLQgmgCgiAUQgPAJgJgMQgCgDAAgDIAAgCQgFgDgDgGQgKgTADgWQABgFAEgCIAGgBQAHABADAEQAFAFABAIQAAAMAGAMIALgFQAagMAcgBQALgCAJADIADAAIAFACQAIAEAFAIQAJAOADAPQADAOgBAPIAAAEQgBAHgFAEQgGAEgHgCQgDADgFABIgFABQgSAEgSAGIgFADIgTAQIgHAGIgCABIgEABIgBAAgAAZigQgGgDAAgGIABgFQABgIAFgHQAFgFgCgHQgBgGACgEQACgHAJgBIAKAFQAFAEAAAKQAAAJgCAIQgDAKgGAJQgFAHgHAAQgEAAgEgDgAAmjtQgNgEgKgKQgTgUgHgaIAAgBIgCgJIgHgmQgDgQADgQIABgFIAEgIQAEgGAIgEIADgBQAQABgEAQQgCAGgEAFIgBADIgCAKQAGAYAEAZQAEAZATAQQAJAJAMABQAGgEAEABIACAAIABAAQAFABADAHQAEAHgEAHQgFAHgJAAIgEAAQgMAAgKgDgACtlIQgJgGADgLQAEgPgEgOQgGgXAAgZIAAgEIgCgZQgQgEAGgQIACgEIADgDQAEgEAGABQAPACAEAPQAFARAAARQAAAWAEAVIAAACIABAEQADALAAANIgCAPQgBAKgKAFIAAAAIgEABQgDAAgDgCg");
	this.shape_1.setTransform(-12.7,-24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjE3IgHgCIgBAAQgIgEgBgIQgDgaAXgFQAYAFgHAaQgEAPgMAAIgEgBgAg5DnQgCgEAAgFQABgXAYgCQAfAGgEAeQgBAKgJACQgHACgGAAQgRAAgKgQgAhuDYQgNgBgJgIQgFgEgBgGQgBgZAXgDQAkgDgGAiQgEARgQAAIgEgBgAgRCtQgfgIANgbQAHgOAOgBQAZABAAAaQAAAYgSAAIgKgBgAhfCEQgJgJAEgOQAFgPAPgBQAbAAADAYQABAPgNAHQgHADgHAAQgKAAgJgKgAAUBrQgUgGgJgRQgCgEAAgFQABgRAQgBQAcgCAJAXQAEALgFAKQgGAJgJAAIgHgBgAh6BFQgJgGACgLIABgDIACgFQAFgLANgCQAjADgMAeQgEAJgJABIgGABQgKAAgIgGgAARAWQABgTAUAAQAYAFgFAZQgDALgMABIgFABQgWAAACgYgABMAgQgEgGABgIQAAgSARgBQAhABgFAfIAAABQgDAKgIACIgDAAIgFABQgPAAgIgNgAhaAYQgPgJAGgQQAGgPAPgBQAJgCAGAGIABABQAUALgJAWQgEAIgJABIgFABQgMAAgJgHgAghgBQgGgJAEgLQAFgOAOAAQAWgEAGAUQABAGgDAGQgIAIgJAEIgJABQgKAAgHgHgABighQADgQAPgCQAeADgJAdQgDALgMABIgDAAQgZAAAEgagAAWkYIAGAAQAEgBADgCIgFADIgEABIgEgBgAAPkiQgHgCgGgFIgBgBIgBgBIAAgCIgDgCIgCgBIAFgBQAHgCAJAAIABgBIAJgBIAOgCIABAAIADAAIgBACIgBABIgBABIAAABIgBABIAAABIAAABIgDAFQgGAJgJAAIgHgBg");
	this.shape_2.setTransform(-4.7,-25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CCFF").s().p("AgdC7QAQADAFgRQAHgagYgFQgXAFADAaQAAAIAJAEIAAAAIABAGIgIgIQgHgJgJgKQgOgLgMgNQgRgYgXgTIgLgLIgIgKIgKgTIgBgDIgBgDIgBgBIgEgBIgCABIgBAAIgCgCIANgfIgCgEIAAgFQgBgHACgFIAEgFIABgBIABhLIAaALIAAAEQgCALAIAGQALAHAOgCQAJgBADgJQANgegjgDQgOACgFALIgQgKIABgLIgGgIQBAhJBfAHIAJAKIgBgGQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAQAKAPgKAXQgLAagXANIAGAGIArg4IAAgYIAmAXIACgCIABgEIgFgJIAOgKIATgYIAEgBIAIgBIABACIADgCQAIgBAGABQARADAFATQAKAkgbAcQgHAHgHAGIAEABIgJADIgEACQAGgeghgDQgRACgBATQAAAIAEAGQAJAPATgDIACAAQgDAGgCAIIgGAHIgFAFQgRAZgOAbIgHAKIgHALIAAABIgBAAIgCAOIgBAIQgDADAAAFIABAEIgBACIgBACIgCAIQAAACgDACIgDAKIgGAUIACgOIgDAEQgRA4giAxIgCACgAg0BiQgBAFADAEQANAVAagHQAJgCACgKQACgegdgGQgYACgBAXgAhtAtQgYADACAZQAAAGAFAEQAKAIANABQATACAEgSQAGgggeAAIgFABgAgcAOQgNAbAeAIQAdAHAAgeQAAgagZAAQgOAAgHAOgAhdgNQgEANAIAIQAPAQASgJQAOgHgCgNQgCgYgbAAQgQABgEAPgAANhBQgQABgBARQgBAFADAEQAIARAVAGQAOAEAHgMQAGgKgFgLQgIgWgYAAIgEABgAAXhkQgCAaAcgDQAMgBACgLQAFgZgXgFQgUAAgCATgAhHiNQgQABgFAPQgGASAOAJQAMAIAPgCQAJgBADgIQAKgYgVgLIAAgBQgFgFgHAAIgDABgAgJifQgOAAgFAOQgFALAHAJQAJANAQgFQAKgEAHgKQAEgGgCgGQgEgRgQAAIgHABgABpidQgFAbAdgBQAMgBADgLQAIgdgdgDQgQACgCAQg");
	this.shape_3.setTransform(-5.3,-12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AjCOUQgLgEgHgMQgIgOgCgOIgFgLQgEgFgCgHIgBgDIAAAAIgBACIgJgZQgMgjAAgdQAAgEALgWQALgVAAgEIgBgIIAAAAIAKghQALgiABgRQAAgTAEggIAGg1QABgVAIggQAKgiADgSQAHgfAPgpIAMgcIADABIAJhGQgHgYAIgYIABgEIAGgiQABhJgFhIQADAGAIAAQAMgBAAgMIABgMQABgOgCgOIgBgJQgCgPgOgCIgEABIgEACQgDAFgBAFIgGgsIANgSIAdhAIACABIAZg3QAAANAHANIAGALQANAXADAZQACAPgDAPQgCAPACAPQAAAFAGADQAOAFAEgOIACgIIACgNIAAABQANAngMAnQgLAfgDAhQgCATgIATIgFAHIgBANIgDAHIACAFQgJA0gLA2IgCAGIAAAGQgBAPgFAPIgIAcQgJAcgRAZIgGAJIABAAIAEABIADgFIAAAGIACAAIABABQAGAEADAKQADALgDAKIgBACIAAAEQAAAOgHAOIgDAFIgTA4IgHAQIgBACIAAADIgBAEIgCAHIgHAdIgFASQgEAPgCAPQgCAegIAcQgCAIgEAHQgEAHAAAHQgCAWgEAWQgCAIgEAIQAIASgBAVQAAAOADAOIACANIABABIAKAZQATAGAPANQAIAHADAIQAEAKgBAHQgBAEgDAEIgCADQgFgYgVgPIAAABIgCABIgBAAIgBABIgBACIAAABQAAADACACQANAPAIARIABABIgGADIgHACIAAAAIgBgCIgBgCIAAgBIAAgCIgBgBIgKgPIAAgBQgEgIgHgEIgDABIgBAAIgBAEIACAJIABACIAHAJIABADIAAACIADADIAEAHIgOAFIgFABQABgUgLgQIgDgBIgDAAIgBABIgBADQgBAFABAEIABACIADADIABADQACADgBAEIABABIABABIAAAEIAAADIAAABQgGgBgGgCgAinE8IgCgJIAAAIIgXgLIgSAAIgOgKIgRACQADgUgBgUIgTguIAAAEQgJgNgJgSQgXgtgRgxQgNgbgLgcQgZg6AEhDQABgOAGgNIAIgUIgCgEIAGgQQACgUAFgUQAFgTALgJQAIgPALgNIAJgKIALATQgEgDgFgCIgEACQgPAIAKAPQAGAKAKAIIAHAHQAEAFABAHIADAKQAEANAOgFIADgDQAIgQgJgRIgBgDQASARAPASIAYAaQARAYANAcIAGACIAJA1IgCgHQgFgOgOgDQgMABgBAMIABADQAHAPADAPIACANIACAYIAAALQAAAMAMABQAKgBACgIQACgJAAgIIABACIgWEiIAAAAIgEAJgAnAA8IAAgCIAJgFIAWg9IACgBIABACQABAEAEACQAMAEAMgEQAGgDACgFQAIgTACgUQACAegDAbQgDAZgJAXIgTgxIgJAEIAJAjIgBgmIASA5IgHAXgAiGgZIgCgPIABAEIABALgAmLg9QgCgLgLABQgJAAgDAGQgBgagFgaQgFgXgCgXQACADADADQAKAIAJgJQACgDAAgDQAAgOgCgPIgBgIQgFgdABgdQABgUALgQQAGAAAEgFQAEgDgBgHQgCgOgRACQgIACgGAGIAihZIAGgDQAchFAhg8IAOgaIABAAIABgCQAOgRAMgRQADgBACgCIABAAIBegKIAGgFIgBAFQAAAHAGACQANAHAHgLQAGgJADgKQACgIAAgJQABgJgGgFQAhAMAigMIgEAMIABABQgEgEgHgBIgGABQgEACgBAGQgDAVAKATQADAGAGADIgBACQAAADACADQAJAMAPgIQAigVAkADQAJAKADANQACAJAAAIQgKgDgMACQgVABgTALQgRAKgGARQgFAEAAAGQgDAOAPACIAFgBIgFAGIgagJQgIgZgZgHIgBACIANAIIALAVQhAgLg9AeQgoATgUAlIAHgqIgDAHIAAAAIgEAJQgcA+gXA+QgPAngWAmIAAABQABgOgOgCQgKgBgDAJIgBADQgEAKABAJQABAPADANIACAHIgEATIgCAPQgFAdAEAdQADAagEAYIgBgHgAhDj3IACAEIgFACgAA6j4QgmgogKgzIgFghIANALIgPgYIAXgVIAEgKIACgHQACgFAEgCIAGgDIACAAQAbgBAHAbQAHAaANAZIAEAHICSifIABgPIAMgPIAAgFQgFgGACgMIAGgbQACgMAFgLIAFgOQABgDAEgCIACgDIAIABIACABQAHACABAGIgCAKIAAABQgJAagGAcIAGgDIgBAAIAAgBIAAgBIAAAAIAAAAIAAABQALAAAJgFIADgBIAAAAIAAAAIACgBIAEAAIABgBIAAAAIAAAAIAIgBIABAAIAAAAIAAgBQAGAAAFgCIAGgBQAOgBAJgIQALgJAGgOIAHgNIAAgBQAHgKAIgKIABgBIABAAIAAAAQgDAHAAAGIAAABIgBAAIAAACIAAABIgBABIAAAAIAAACIgBACIgBABIAAACIAAAAIgBABIAAABIgDAFIAAAAIAAACIgBABQgBAEgDACIAAABIAAABIAAABIgDAEIAAACIgBAAIAAAAQgDAGgFAEQgGAFgGADIAAAAIABACQAFAAAGgDIAAgBIACAAIAAgBIAAgBQAOgOAGgSIABgBQACgDAAgEIABgBQAEgJAAgJIABgBIABgDIABgBIAAAAIgBgBIAAAAIAJgBIAAABIAAAFIgBABIAAAAIAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIAAABIgBADIAAABIAAACIgBAAIgBABIAAABIAAACIAAABIgBABIAAABIgCACIAAABIAAADIgBAAIAAABIAAABIAAACIgBAAIgBACIAAAAIgBAFQgBADgCAEIgBABIAAAAQgKAQgNAMIgHABIAAABIABACIADAAIADgBQAMgFAGgMIADgEQAIgJADgNIABAAIAGgUIABgBIABgBIAAgBIAAAAIAAgBQAEgHgBgHIACAAQAJABAIAEIAAAAIABABIAAAAIABABIAAABIgDAEIAAABQACADgBAEIAAACIgDAGQAAAFgDADIAAABIgBAAIgBAEIAAABQAAADgCACIgBACIgEAFIAAAAIAAABIgCAFIgBABIgBABIAAABIgBACIgBABIgBADIgBABIgNAPIAAABQgDAEgFADIgGADQgSARgbAKIgDABIgUAJIgPAGIgFADQgWAPgUARIgFAHQgmA1goA0IgGACQgtA6g5AvQgFACgGABIgHAAgAGBoxIAAACIABACQACABADgBQAEgCAFAAIAAAAIAAgBIABgBIAGgGIABAAIADgFIACgEIABgCIADgHIABgDIABgHIAAAAIABgDIACgCIADgIIAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgDIAAAAIABgCIAAgBIABgBIAAgCIACgGIAGgGIABgBIABAAIAAAAIACgDIABgBIgBgBIAAAAIgBgBIgBAAIgLALIAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAABIgBABIAAABIAAADIgBAAIAAAAIgBABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIAAABIAAABIgBAAIgBABIAAABIAAABIAAAAIgBABIAAABIgBADIgBABIAAAAIAAABIgBABIAAAAIgBACIgBABIAAAEIAAAAIgBABIAAABIAAADIgBABIgBACIAAACIgDAJIgBAAIgBABQgDAFgGAFIgBABIAAAAIgIABIAAAAIgBAAIgDABgAGio/IAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAABIAEgEIgCABgAm3kMIgBACIgCAEgAAqoMIgDgBIgCAAIgBgBIgBAAIgNgBIgDgBIAFgBQAFgBADgDQAHADAGgFQAFgEABgHIAAgEQAEAQgBASQAAADACAEIgBAJQgBgPgMgJgAEoo2IACgBIgBABgAGCpmIAAABIAAAAIAAgBgAARpuIABAAIABABIgCgBgAGRp+IABgBIgCADIAAAAIgBABgAiiqUIADgEIAHAEQgJACgCAGgAiaqmQAMAEANAAQAJAAAFgIQAEgHgEgHQgDgHgFgBIgBAAIgCAAQgEAAgGADQgMgBgJgIQgTgQgEgaQgEgYgGgYIACgLIABgDQAEgFACgGQAEgQgRgBIgEABQgIAEgEAGIAbg5QBIACBCgfIADABIgCAEQgGAQAQAEIACAZIAAAFQAAAYAGAXQAEAPgEAOQgDALAJAGQAFADAFgCIABAAIgUAiQgPAcgVAZQgPATgaABIgDABQgaAAgTgSgAhVsCIgjACIgZAKIgEACIAHAKIABABIALAOQAEAFADAFIAAACIADAAQAFACAFABIACABQAOAAAOgCQADABADgDQAKgKAJgKIABgGIACgEIAFgHIAFgGIAAgDIAAgDIgBgCIgBgCIgCgCQgSAEgSgBIgDABgAheseIAAAAQARAAAHgKQAFgGgKgDIgLAJIgSAGIgDAAIAAgBIgBgBIgEgBQgCgBgEgBIAAABIAAAAIgBABIADABIAGADIgBABQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAGABIABAAIAFAAgAiVtLQgEAFAAAFQAAAHAEAEQAFAEAGABQAGgBAEgEQAFgEAAgHQAAgFgFgFQgEgFgGABQgGgBgFAFgAhHtZQgHACgBAJQAAAKAGACQADACADAAQADAAADgBQAEgCACgFQAEgMgJgEQgDgDgEAAIgEACgAiotpIgQAaIAfgZIAcAHIgPgPgAhbtlIAagRIAbAJIgWgSgAgBs6IABABIAAADIgBgEg");
	this.shape_4.setTransform(6.8,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#030303").s().p("AAAADIAAgGIABAHg");
	this.shape_5.setTransform(-10.1,50.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#040404").s().p("AgPAIQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIABAAIALADIgBAAIgGgBgAgDAJQgEgEgGgBIAQgEIALgIQAKADgFAFQgHAJgNAAIgCAAg");
	this.shape_6.setTransform(-2.3,-61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#070707").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgFAFABQAGgBAEAFQAFAFgBAEQABAGgFAEQgEAEgGABQgFgBgEgEg");
	this.shape_7.setTransform(-7.1,-64.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020202").s().p("AgLgIIAZgHIAPAPIgcgHIgdAXg");
	this.shape_8.setTransform(-8.8,-67.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#414141").s().p("AABABIgDgBIACAAIADAAIAAABIgCAAg");
	this.shape_9.setTransform(-3.6,-80.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFCFC").s().p("AgCADQACgDAAgDIADAHg");
	this.shape_10.setTransform(-5,108.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDFDFD").s().p("AAFALIAAgBIADADgAgHAAIAEgHIADgFIAAAEIAFABIAAgBIAAABIgBAGIABAFQgCACACADIAAABIgBAAg");
	this.shape_11.setTransform(31.9,-43);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0B0B0B").s().p("AALASQgFgBgFgCIgBgBIAAgBQgDgGgEgEIgLgMIgCgIQACADADAAIABABIAAABQABALAJAFQAKAKAPADIgHABIgDAAg");
	this.shape_12.setTransform(-5.5,-54.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjFPEIgFgDQgJgHgEgJIgQgFIgIgaIgHALIAEgYQgIgJgJgqIgKg3QAAgKAOgZIAGgKIgBgEQAAgPANgjQANgjAAgVQAEgRACgjQACgkADgQIAXhpQALgtAPghIAEgJIAAAAIAWkjIAAgBQAAgJgCgJQgBgFABgFQACgPgHgNIgBgCIgJg0IgGgCQgNgcgQgYIgYgaQgQgSgSgRQgHgOgMgJIgDgDQgEgHgFgDIgMgTIgJAKQgLANgHAOQgMAKgFASQgFAUgCAVIgGAQIACAEIgHATQgGANgBAOQgFBBAZA9QAMAbANAcQAQAxAYAtQAJARAJANIAAgDIATAuQAAAUgDATIgaAFQABgsgQgmQgohbgXhhIgEATIgHAGIgBALIgCgBIgCgBIgJAHIAAAVQgEAIgGAHQgDgFgFgCIAAAAIg1gOIgCADIgEgEIgBgaIA8AdIAGgWIgSg6IABAnIgJgjIAJgFIAUAyQAJgYACgYQADgdgBgcIAAAAIAAgBQADgagCgaQACgGABgGIABgaQADgcAAgbIAAgRQAAgJgFgFQgBgJACgIIAAgDIABgBQAWgmAPgoQAXg+Abg9IAEgJIAAAAIAEgHIgIAqQAVglAngTQA9geBAALIgKgVIgNgIIABgCQAYAHAJAZIAZAJIAFgGIACgBIAIgGIASgQIAFgDQAQgGASgEIADABIANABIACAAIAAAAIACABIADABQAMAJABAPIACgJQgCgEAAgDQAAgSgDgRQABgOgDgOQgEgPgIgOQgFgIgJgEIgEgCIgBgBIgCAAQgKgCgIACQgcABgbAMIgLAEQgFgLgBgMQAAgIgFgFIAAgBIAEgMQgjAMgggMIgKgFIgIgEIgFgDIADAHIgCAHQgCAFACAGQABAHgEAFQgFAHgCAIIgGAEIheALIAAAAQgDACgDABQgLARgOARIgCABIAAABIgOAaQgiA8gcBFIgFADIgiBYQgGAFgDAIQgHAQgCARIgCAGIACgDQgBAPABAPIAFA3IAAALIABAHQADAWAEAXQAFAaACAbIgBAHIACAbQABAKADAJIgDABIgWBAIgJAFQgBgVgEgVIAGADIAdgjIgZigQgBgUAAgUIAEhOIAAgHIAWg2IgDgCQAGgJADgIIAHgHIAAgDIAYg5IgBAAIgBAAIAAgCIABgCQAbgtAZgtQAMgXARgTIAIgLQAKgNANgJQAGgEAHAAIABAAIABABIAAAAQAZgJAfAFIAfguIgQgUIgCAEIgBABIgBgBIgIgIIACgIIgNgUIACgSIgCgHIABACIABAAQAGAaAVAUQALAKANAEQAUATAdgCQAZgBAQgTQAVgZAPgcIATgiQAJgFAAgKIABgPQABgNgCgLIAAgDIAAgCIgBgBQgDgVgBgWQAAgRgFgRQgEgPgPgCQgFgBgEAEIgDADIgDgCQhCAghJgCIgbA5IgEAIIgBAFQgCAQADAQIAHAmIABAJIgJgKIADgUIgHgIIgFggIAFgNIgWALIAagjIAPgvIgGgKIABgCQAIABAKgEIAHgDIABAJIAMAEIA7gNIAMAAIAHgCQAgACANgUIAPgMQAHAAAFACQAFACADAEQACAEACAFQAFASAAAUIAAAAQAAAOgBAPIALAHIgIgBIABACIAAACIAAADIgDABIAAABQACAGAFAGIABAkIgGAHIAEAQIgGAAIhABtIABAKQgEAHADAJQABAIAEAFIABADIABgBQAJAJATgHIADgEQAPADAPgJQAJAEAKADIABAAQAEAFAGACIADABIAUAlQgEAhAKAhIgBAEQgKATABAYQAAASANAKQAHAQAPADIAKA3IAvgtIgfgFIAhAAIAsg0IgFgDQAjgOATghIABgLIgGAEQgtAhg1gNIAAgBQBFAKAsg3IABgaQAEgRACgRIACABIAAABQADACAGgCQADgFACgFIADgLIABgBIAHgDIABgBQAFgCAEABIAAABIgBABIgIgBIgCACQgEADgBADIgFAOQgEALgCAMIgGAbQgDAMAGAGIgBAFIgLAPIgBAPIiTCeIgEgGQgMgZgIgaQgHgbgbABIABgDIgCADIgGADQgEACgCAEIgCAIIgEAJIgYAVIAQAZIgNgLIAFAhQAKAzAmAoIAHAAQAGgBAEgDQA6guAsg6IAHgDQAngzAmg1IAFgHQAUgSAWgOIAFgEIAPgFIAUgKIAEgBQAagJASgSIAHgCQAEgDADgFIAAgBIAOgPIAAgBIACgCIAAgBIABgCIABgBIABgCIAAAAIADgFIAAgBIAAAAIAEgGIAAgBQACgCAAgDIABgCIABgDIAAAAIAAgBQADgDABgFIADgGIAAgCQAAgEgCgEIABAAIACgEIAAgBIAAgBIgBgBIgBAAIAAAAQgIgEgJgBIgCAAQABAHgDAHIgBAAIAAABIAAABIgBABIAAABIgHAUIAAAAQgDAMgJAKIgDAEQgGAMgLAFIgEABIgDAAIAAgCIAAgBIAGgBQAOgMAKgQIAAgBIAAgBQADgDAAgEIACgEIAAAAIABgCIAAAAIAAgCIAAgBIABgBIAAgBIABgCIAAgBIABgDIAAAAIABgBIABgBIAAgCIAAgBIABgBIAAAAIAAgCIABgBIABgDIAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIABgBIAAAAIABgFIAAgBIgKABIABAAIAAABIAAAAIAAABIgCADIAAAAQgBAKgDAJIgCABQAAAEgCACIgBABQgFATgOAOIgBAAIAAABIgBABIgBAAQgFADgGABIAAgCIgBgBQAHgDAGgEQAFgEACgGIABAAIABgBIAAgBIACgEIABgBIAAgBIAAgBQACgCABgEIABgBIAAgCIAAgBIADgEIABgBIAAgBIABAAIAAgCIAAgCIABgBIAAgCIABAAIAAgBIABgBIAAgCIAAgBIABAAQAAgHACgGIAAgBIgBABIgBABQgIAJgGAKIAAABIgHAOQgGANgLAKQgKAHgNABIgGABQgFADgGAAIAAABIgBAAIgBAAIgHABIAAAAIgBAAIgBABIgEAAIgBAAIAAABIgBAAIgDABQgJAEgKABIAAgBIgBgBIAAABIABABIAAABIAAAAIgFADQAFgcAKgbIgFAuIAAAAIABAAIACgBIAAAAIAAAAIABAAQAJgEAJgBIABgBIAAAAIABAAIAHgBIABAAIAAgBIATgEIAQgEIABgBIAEgDIACgCIABAAIAAgCIAAAAIABgBIAAAAIAOgWIAAAAIAAgBIABgCIAAgBIABgBIAFgIIAEgGIABgBIAAAAIABgBIABAAIABgDIgBABIADgFIAFgBQAHgDAJgBIAAgBQAIABAIACIABAAIAEACIACABIABAAIAAABIABAAIABgBIAAABIABABIABABIAAAAIABABIAAADIgBAEIAAAAIAAABQAAAUgKAUQgcA5g7AUQg0ARgdApIgCABIgaAcQgOAPgMASIgUAdIgEAGIgDAFIgDAEQgWAOgPAWQgkAyg4AZQgIgDgFgIQgMgUgPgSIAAgEIgBgBIgDgDIAAgCIgHgTQgBgMgGgGIAAAAQgBgJgD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IgBABIgDAIIgBACIgBACIgBABIgBAHIAAACIgDAIIgBABIgCAEIgEAFIAAABIgGAGIgBABIgBAAIAAABQgFgBgEACIgCABIgDgBgAGhoZIAAAAIABgBIAAAAIABgBIABgBIgEAEIABgBgAD6o9QgGgEgBgHIAMAKIgEABIgBAAgAEnpTIABgCIAAgBIAFACIACAEIAAAEQgBgFgHgCgAhsqnIgBgBIAJgBIAYgFQAMgLAHgOIAKgVIg3AHQgOABgNADQAOAAAOgCIACgBIAjgEIAEAAIABAFQABAEgCADIgCAEIgEAGIgKANIgCACQgDACgDABIgGAAQgRAAgMgMIgNgMIgDgDIAAgBIAAgCIABgBIgIACIABAIIAAgBIgHgKIADgCIAZgKIAjgCIADgBQASABATgFIACACIABADIAAACIABADIAAADIgFAFIgFAIIgCADIgCAGQgIALgLAKQgCACgDAAQgOACgNAAIgCAAgAhXrNIgJABIgBABQgIAAgIACIgGABIACABIACACIACACIABABIACABQAGAFAGACQAOAFAIgNIADgFIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgCIgDAAIAAAAIgPACgAh6qsIgBgBIACABIABABIgCgBgAhir7IgLgCIgHgDIgCgBIAAgBIABAAIAAgBQADAAADACIAEABIAAABIABAAIACAAQAHABADADIAAABIgEgBgAhIseQgHgDAAgJQABgJAHgDIAFgBQADAAADADQAJAEgEAMQgCAFgEACQgDABgCAAQgEAAgCgCgAkBsnIAAAAIAJgDIALAFgAg7tbIAWASIgbgJIgaARgAAGtUIACgCIAAAAIADAKIgBAAQgEAAAAgIgAhnvDIAGgBIgCADIgEgCg");
	this.shape_13.setTransform(6.8,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#494949").s().p("AgeAMIAHABIADABIgGABIgMAAgAAbgKIAMgEIgQALIAEgHg");
	this.shape_14.setTransform(-0.2,-73.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AgGAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAABgBIAFgBIAFABIgLAEQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_15.setTransform(-4.9,109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(81));

	// Layer 3
	this.instance_1 = new lib.RitaHair("synched",0);
	this.instance_1.setTransform(-7.2,-48,1,1,0,0,0,42.3,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81));

	// Layer 4
	this.instance_2 = new lib.RitaPurse("synched",0);
	this.instance_2.setTransform(-35.2,24.1,1,1,15,0,0,14.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15},40).to({rotation:-7.3,y:24},10).to({rotation:15,y:24.1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-82.7,109,196.3);


(lib.frb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{unselectedEnabled:0,press:1,unselectedDisabled:2,selectedDisabled:3,selectedEnabled:4});

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
		/* stop();
		*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// dot_enabled
	this.instance = new lib.frb_dot_1();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// dot_disabled
	this.instance_1 = new lib.frb_dot_disabled_1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// background pressed/disabled
	this.instance_2 = new lib.frb_background_pressed_1();

	this.instance_3 = new lib.frb_background_disabled_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// background up/static
	this.instance_4 = new lib.frb_background_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// radio button frame
	this.frb_frame_mc = new lib.frb_frame();

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,"press":1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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
(lib.adjective_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:268});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/main_menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("adjective_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adjective_Scene3.html","_self");
		}
		this.play();
	}
	this.frame_2 = function() {
		playSound("SEBrownHair");
	}
	this.frame_279 = function() {
		this.gotoAndPlay("scene4_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(277).call(this.frame_279).wait(1));

	// Main
	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance = new lib.Copyright("synched",0);
	this.instance.setTransform(275,389.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgDgDgBgFQABgEADgDQADgEAEAAQAFAAADAEQADADABAEQgBAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(315.9,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYAvIgDgVIgCgWIABgHIAAgJQAAgVgHAAQgLAAgJANQgIALgFAQIgBAKIgBAJIABAJIAAAJQAAAEgDADQgDADgDAAQgFAAgCgDQgDgDAAgEIgBgJIgBgJIACgaIACgbIgBgKIAAgJQAAgEADgDQACgCAFAAQAIAAACAMIAAAMQAQgWAQAAQAPAAAGAOQAFAJgBASIAAAKIAAAHQABAIACANQACANAAAIQgBAEgCADQgDACgEAAQgIAAgBgJg");
	this.shape_1.setTransform(308.4,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAuQgNAHgOAAQgMgBgJgFQgJgHgCgLQgEgbAAgRQAAgOADgRQACgJAIAAQAEAAADADQACADAAAEIgBAOIgBAQIABAaQABALACAHIAGACIAGABQAMAAAOgDIAAgUIAAgRQAAgWACgPQABgJAIAAQAEAAADADQADACAAAFIgCAlIAAATIAAAUIABAHIAAAHQAAAEgDADQgDADgEAAQgHAAgCgKg");
	this.shape_2.setTransform(297.7,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_3.setTransform(287.1,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAvIgDgVIgCgWIABgHIAAgJQAAgVgIAAQgLAAgIANQgJALgFAQIgBAKIAAAJIAAAJIABAJQAAAEgDADQgCADgFAAQgEAAgCgDQgDgDAAgEIgBgJIgBgJIACgaIABgbIAAgKIAAgJQAAgEADgDQACgCAEAAQAJAAACAMIAAAMQAQgWAPAAQAQAAAGAOQAFAJgBASIAAAKIAAAHQAAAIACANQADANAAAIQAAAEgDADQgDACgEAAQgJAAAAgJg");
	this.shape_4.setTransform(277.1,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAeAxIgGgHIgQAIQgIADgCAAQgXAAgKgNQgLgMABgZQAAgWAQgRQAQgRAVAAQAIAAAKAFQAOAFAAAIQAAADgCACIgCAMIAAAUQAAAMABAHIAHARIACAFIAAACQAAAEgCACQgDADgEAAQgBAAgGgFgAgPgXQgLAMAAAOQgBAQAHAIQAFAIALAAQAIAAAGgDIAKgHQgDgZAAgMIABgJIABgLIgGgDIgEAAQgOAAgKAMg");
	this.shape_5.setTransform(260.6,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaA2QgPgGAAgJQAAgEADgDQADgDAEAAQADAAAFAFQACACAIABIAMABQAFAAAHgCQAJgCAAgHQAAgNgTgFIgIgCQgMgDgGgDQgIgEAAgLQAAgUATgJIARgGQANgEAFgDQAEgBAFAAQAEAAADACQACADAAAFIACAIIABAIQAAAFgDACQgCADgEAAQgGAAgCgEQgBgCgCgIIgWAHQgOAGAAAJIAGACQAUAEALAHQAQAIAAATQAAAQgNAIQgMAHgPAAQgNAAgMgEg");
	this.shape_6.setTransform(244.3,20.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_7.setTransform(234.4,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBHQgDgDAAgFIAAgSIAAgRIABgWIAAgVQABgFACgDQADgDAEABQACgBADADQADADgBAFIAAAVIgBAWIAAARIABASQAAAFgDADQgDACgCAAQgEAAgDgCgAgFg0QgDgEgBgFQABgEADgEQAEgDACAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgCAAgEgDg");
	this.shape_8.setTransform(226.1,18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPBTQgDgDAAgEIABgCQACgMAAgPIgBgbIAAgaIgPABQgKAAAAgKQAAgJARgBIAKAAIABgPQADgWAIgKQAIgMAWAAQAOAAAAAJQAAAJgNAAQgYAAgDAhIAAAGIAWgBQAPAAAAAKQAAAHgHABIgIABIgXABIAAAUIAAATIAAASQAAASgBALQAAAHgIAAQgEAAgDgCg");
	this.shape_9.setTransform(217.9,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIBHQgDgDAAgFIAAgSIAAgRIABgWIAAgVQABgFACgDQADgDAEABQACgBADADQADADgBAFIAAAVIgBAWIAAARIABASQAAAFgDADQgDACgCAAQgEAAgDgCgAgFg0QgDgEgBgFQABgEADgEQAEgDACAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgCAAgEgDg");
	this.shape_10.setTransform(210.4,18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiBCQgNgOAAgVQAAgaAOgOQANgQAVAAQALAAAGAEIAJAGIADg3QACgJAHAAQAJAAAAAKQAAAOgEAuIgBAaQAAAhADARIAAACQAAAEgCADQgDACgEAAQgGAAgDgJQgHAFgHADQgIACgGAAQgUABgOgOgAgWABQgIAJAAAVQAAAMAJAJQAJAJAMAAQAGAAAGgDQADgBAIgHIADgDIgBgRIAAgMIABgLQgEgHgGgCQgGgFgJAAQgOAAgJAIg");
	this.shape_11.setTransform(201.5,18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_12.setTransform(190.3,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEA5QgDgDAAgEIgCgjQgDgVAAgMQAAgKgDgGQgHADgHAHIgLANIgFAGIgBAQIgBAQIABAJIABAHQAAAEgDADQgDADgEAAQgLAAAAgZIABgSIABgPIgBgQIgBgPQAAgXAKAAQAEAAADAEQADADAAAEIgBAGIAAAGIAAAKQAFgLAKgIQAKgIAHAAQAPAAAEAPQAFgHAIgEQAHgDAKAAQAQAAAGARIAEAcIAHA1QAAAEgDADQgCADgFAAQgIAAgBgJIgEgeIgDgcIgDgNQgEgJgDAAQgEAAgKAGQgJAGgDADIAAASIADAZQACAPAAAKQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_13.setTransform(177.6,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE0063").s().p("AgqBLQgJgJAAggIAAgNIABgQIgBgFQAAgBACgDIACgqIgBgKIgBgKQAAgNAKAAQAEABADADIAWgFIARgCQAYABAOAFQAHACAAAIQAAADgCADQgDADgEABIgDgBQgRgFgQAAIgPACIgUAFIABAJIgCAmIApgEIAXgCQAEAAADADQADACAAAFQAAAHgJABIgXACIgrAEIgBANIAAALQAAAWADAEQACACANAAIARAAIASAAIAFgBIAGAAQAKAAAAAKQAAAIgIACQgJACgcAAQgfgBgJgHg");
	this.shape_14.setTransform(157.7,18.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE0063").s().p("AgQBHQgMgegPg2IgHgaQgGgVAAgGQAAgEADgDQADgDAEAAQAHAAACAIIAEARIAJAhQAKAiAJAbIAAgCIAYhEIAJgZQAFgOAHgHQADgFAEAAQAEAAADAEQADADAAAEQAAACgCADQgGAJgEAKIgHAWIgaBFQgFAMgGAMQgBAHgGAAQgHAAgDgIg");
	this.shape_15.setTransform(145.3,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE0063").s().p("AgpBHQgEgCAAgFQAAgEAEgDQACgDAEAAIAVgCIABgSIAAgQIgBgRQAAgUACgiIgMAAIgNABQgEAAgDgDQgCgDgBgEQAAgJAJgBIAegBQARAAAeAEQAJABAAAKQgBAEgDADQgCACgEAAIgQgBIgQgCQgCAcAAAYIAAARIAAARIAAARIAegBQAFAAACADQADADAAAEQAAAEgDADQgCADgFAAIgQAAIgQABIgRACIgUABQgEAAgCgDg");
	this.shape_16.setTransform(132.7,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE0063").s().p("AgGBHQgDgCAAgFIABgEIAAgFIAAgOIgBgPIgCglIgDgnIgJAAQgVAAgNgDQgHgCAAgIQAAgEACgDQADgDAFAAIAPACIAQABIASAAIAQgBIAWABIAWACQAEAAADADQADACAAAFQAAAEgDADQgDACgEABIgWgBIgWgBIgHAAIACArQADAbAAAPIAAAKIABALQAAAHgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_17.setTransform(121.3,18.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE0063").s().p("AgnA8QgOgQAAgUQAAgfAcgjQAXgdAVAAIAJABIAHABQADgFAGAAQAGAAACAIQACAIAAAMQAAAEgCADQgDAEgFAAQgGAAgDgIQgDgFgCgCQgCgBgJAAQgOAAgPAVQgXAeAAAYQAAAMAIAJQAIAKAMAAQAIAAAKgGQAGgDALgIQAGgEADAAQAEAAADADQADAEAAAEQAAADgEAEQgaAXgYAAQgVAAgNgPg");
	this.shape_18.setTransform(107.8,18.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE0063").s().p("AgqBLQgJgJAAggIAAgNIABgQIgBgFQAAgBACgDIACgqIgBgKIgBgKQAAgNAKAAQAEABADADIAWgFIARgCQAYABAOAFQAHACAAAIQAAADgCADQgDADgEABIgDgBQgRgFgQAAIgPACIgUAFIAAAJIgBAmIApgEIAXgCQAEAAADADQADACAAAFQAAAHgJABIgXACIgrAEIgBANIAAALQAAAWADAEQACACANAAIARAAIASAAIAFgBIAGAAQAKAAAAAKQAAAIgIACQgJACgcAAQgfgBgJgHg");
	this.shape_19.setTransform(95.6,18.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE0063").s().p("AgnBDQgSgOAAgRQAAgMAKAAQAKAAAAAMQAAAIALAIQALAHAKAAQAGAAADgxQACgVAAgjIgBgLIgFAAIgKAAIgMAAQgEAAgDgDQgDgDAAgEQAAgKAOAAIAJAAIAJAAIASAAIASgBQAWAAAAALQAAAEgCADQgDADgEAAIgGAAIgHgBIgLAAIAAAMQAABGgJAiQgHAVgOAAQgRAAgRgMg");
	this.shape_20.setTransform(82.5,19.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE0063").s().p("AgdBOQgLgCgGgFIgBAAQgEAAgDgDQgDgDAAgEIABgeIABgfIAAggIgBgiQAAgEAEgFQAEgEAEAAQADAAANAGIARAIQAaAKAUAUQAXAXAAAZQAAARgIAPQgIAQgOAJQgPAKgaAAQgHAAgJgCgAgkgaIABAaIgCA2IACABQAJAGANAAQAUAAAKgHQAKgGAFgLQAGgLAAgMQAAgagegTQgIgHgkgQg");
	this.shape_21.setTransform(68.9,19);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE0063").s().p("AAhAyIgGgfIgaAFIgYAGIgQAlQgEAFgFAAQgEAAgDgCQgDgDAAgEQAAgFAOgfQgBgDAAgDQAAgIAJgCQAMgTAQgbQAVglAHAAQAHAAADALIAGAgIAPBCIAFAQIADAKQAAAFgDACQgDADgEAAQgJAAgHgXgAgLAHIAigHIgJgkg");
	this.shape_22.setTransform(53.9,19);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAXAvIgCgVIgBgWIAAgHIAAgJQAAgVgIAAQgKAAgIANQgJALgGAQIgBAKIAAAJIAAAJIABAJQAAAEgCADQgEADgEAAQgEAAgDgDQgCgDAAgEIgBgJIAAgJIABgaIABgbIAAgKIAAgJQAAgEACgDQAEgCADAAQAKAAAAAMIAAAMQARgWAPAAQAQAAAGAOQAEAJAAASIAAAKIAAAHQAAAIACANQACANAAAIQAAAEgCADQgDACgEAAQgJAAgBgJg");
	this.shape_23.setTransform(35.7,21.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAhAyIgGgfIgaAFIgYAGIgQAlQgEAFgFAAQgEAAgDgCQgDgDAAgEQAAgFAOgfQgBgDAAgDQAAgIAJgCQAMgTAQgbQAVglAHAAQAHAAADALIAGAgIAOBCIAGAQIADAKQAAAFgDACQgDADgEAAQgJAAgHgXgAgLAHIAigHIgJgkg");
	this.shape_24.setTransform(22.8,19);

	this.instance_1 = new lib.barb();
	this.instance_1.setTransform(108.3,192.6,1.078,1.078);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(523.4,14,0.752,0.752);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#9900CC").ss(3,1,1).p("EAojAYSMhRFAAAMAAAgwjMBRFAAAg");
	this.shape_25.setTransform(275,188.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.btn_menu},{t:this.instance_1},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.btn_goNext},{t:this.btn_goBack}]}).wait(280));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoiAb+MAAAg37MBRFAAAMAAAA37g");
	mask.setTransform(275,212.3);

	// content
	this.instance_2 = new lib.Lesson2Rita();
	this.instance_2.setTransform(356.6,138.3,1,1,0,0,0,125.5,23.7);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(280));

	// Anim
	this.instance_3 = new lib.bk("synched",0);
	this.instance_3.setTransform(261.5,211.9,1.007,1,0,0,0,282.3,176.6);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(280));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,200.1,538.7,398.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;