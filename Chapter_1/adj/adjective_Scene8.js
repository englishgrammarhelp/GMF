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
		{src:"sounds/A.mp3", id:"A"},
		{src:"sounds/SEAdjetiveAnswers.mp3", id:"SEAdjetiveAnswers"},
		{src:"sounds/AnAdjanswersWHATKIND.mp3", id:"AnAdjanswersWHATKIND"},
		{src:"sounds/modifies.mp3", id:"modifies"},
		{src:"sounds/nounmarkers.mp3", id:"nounmarkers"},
		{src:"sounds/Beatlebugcar.mp3", id:"Beatlebugcar"},
		{src:"sounds/bell_chord_1.mp3", id:"bell_chord_1"},
		{src:"sounds/bell_chord_2.mp3", id:"bell_chord_2"},
		{src:"sounds/bell_chord_3.mp3", id:"bell_chord_3"},
		{src:"sounds/SEBlackHair.mp3", id:"SEBlackHair"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SEBrownHair.mp3", id:"SEBrownHair"},
		{src:"sounds/bushrattle.mp3", id:"bushrattle"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/convertiblecar.mp3", id:"convertiblecar"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/Evanwhatkind1.mp3", id:"Evanwhatkind1"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/HMMM.mp3", id:"HMMM"},
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
		{src:"sounds/sprtsutiljeep.mp3", id:"sprtsutiljeep"},
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


(lib.sportsutilitycar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIByQgGgHAAgGQAAgFAEgEQAEgEAGAAQADAAAGAIQAGAHAAAGQAAAFgEAEQgEAEgFAAQgFAAgFgIgAgJA1IgBgSIAAgSIAAg9IABhAQAAgNALAAQANAAAAANIAAChQAAANgNAAQgLAAAAgNg");
	this.shape.setTransform(297.8,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3B2QgFgEAAgGIABg6IAAg5QAAgggCgaIgCgfQgBgJAEgIQAEgJAJABQAFAAAFAEQADAEAAAFIAAAGIgBAIQAMgJANgFQAKgDAJAAQAfAAANAaQAMAVgBAjQABAegSAUQgSAWgdgBQgNAAgSgEIAABGQAAAGgEAEQgEAFgGAAQgHAAgDgFgAgNhMQgHAEgMALQABAhAAAjQARAGAOAAQASAAAJgNQAJgKAAgTQAAgbgHgNQgGgNgOAAQgLgBgLAHg");
	this.shape_1.setTransform(286.7,31.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxA/QgWgSgBghQABgkASgaQAUgcAhAAQAXAAAQAIQASAKAAAVQAAAPgQAMQgIAFgXAJIg2AbQAIAMANAGQAMAGAOAAQAKAAAOgEQARgFAFgHQAFgIAFAAQAGAAADAEQAEADABAGQAAAQgaAMQgXAJgVAAQgfAAgVgQgAgdgmQgMAOgGAaIAtgUQAZgNALgJQgMgMgWAAQgRAAgMAOg");
	this.shape_2.setTransform(270.5,27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxA/QgWgSAAghQAAgkASgaQAVgcAgAAQAXAAAPAIQAUAKgBAVQAAAPgQAMQgIAFgXAJIg2AbQAIAMANAGQALAGAPAAQAKAAAOgEQARgFAFgHQAEgIAGAAQAGAAADAEQAFADAAAGQAAAQgbAMQgWAJgVAAQggAAgUgQgAgdgmQgMAOgGAaIAtgUQAZgNALgJQgMgMgWAAQgRAAgMAOg");
	this.shape_3.setTransform(254.1,27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AguBoIgCgHQAAgGAFgEQAEgEAGAAQAJAAAJATIAIAOQAGAIAGAAQAGAAAFgKQADgHABgIQAAgRgFhHIgFhOQAAgIAEgFQAEgGAHAAQAFAAAFAEQAFADAAAEIAFBTIAEBaQAAAUgMARQgNASgTAAQgeAAgVgxgAAJh7QgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_4.setTransform(238.1,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgqBxQgGgGAAgIQgBgOAfhDQgQgdgig+IgIgMQgDgGAAgGQAAgIAFgGQAHgGAIAAQAKAAAGAHQAUAcAaA4IATgqQAKgWAKgRQAGgKALAAQAJAAAGAFQAHAGAAAIQAAAEgDAFIgyBnQgTAmgJAZIgJAbQgFAOgOAAQgIAAgGgFg");
	this.shape_5.setTransform(216.1,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMBlQgGgFAAgIIAAgQIAAgQIgChKIgbgBQgTgCAAgRQAAgJAFgGQAHgFAIgBIAZADIAAgQIgCgPQABgIAFgFQAHgFAIgBQAUAAAAAlIgBAMIAQgCQAQABAGACQAMAEAAAOQAAAIgGAFQgFAGgJAAIgHAAIgHAAIgPABIADBLIAAAHIABAIQgBAjgVAAQgGAAgGgGg");
	this.shape_6.setTransform(200.8,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRBqQgGgGAAgIIgBgbIAAgbIABggIACgfQAAgJAFgFQAGgFAJAAQAHAAAFAFQAGAFAAAJIgBAfIgBAgIAAAbIABAbQAAAIgHAGQgFAGgHgBQgJABgFgGgAgNhJQgGgHAAgJQAAgJAGgGQAIgHAHABQAJgBAHAHQAHAGAAAJQAAAJgHAHQgHAGgJAAQgHAAgIgGg");
	this.shape_7.setTransform(189.9,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNByQgGgFAAgJIAAjIQAAgJAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAJIAADAQAAAcgUAAQgHAAgGgGg");
	this.shape_8.setTransform(181.1,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSBqQgFgGAAgIIAAgbIgBgbIACggIABgfQAAgJAGgFQAFgFAJAAQAHAAAGAFQAFAFAAAJIgBAfIgCAgIABAbIAAAbQAAAIgFAGQgGAGgHgBQgIABgHgGgAgNhJQgHgHAAgJQAAgJAHgGQAIgHAHABQAJgBAHAHQAHAGAAAJQAAAJgHAHQgHAGgJAAQgHAAgIgGg");
	this.shape_9.setTransform(173.3,24.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBlQgGgFAAgIIAAgQIAAgQIgChKIgbgBQgTgCAAgRQAAgJAFgGQAHgFAIgBIAZADIAAgQIgCgPQABgIAFgFQAHgFAIgBQAUAAAAAlIgBAMIAQgCQAQABAGACQAMAEAAAOQAAAIgGAFQgFAGgJAAIgHAAIgHAAIgPABIADBLIAAAHIABAIQgBAjgVAAQgGAAgGgGg");
	this.shape_10.setTransform(161.7,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAdBIQgTAHgSAAQgVAAgOgJQgQgJgDgUQgGglAAgaQAAgTAEgZQADgQARAAQAJAAAGAGQAGAFAAAIIgCAUQgDAOAAAHQAAAVACANQABAPADAKIAHADIAHABQAOgBAUgEIgBgaIAAgWQAAgeADgXQACgRASAAQAIAAAHAGQAGAFgBAIIgCA0IAAAbIAAAeIAAAJIABAKQAAAHgGAGQgGAFgJAAQgMAAgFgLg");
	this.shape_11.setTransform(146.7,27.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoBMQgWgIAAgQQAAgPARAAQAHAAANAEQANAFAGAAQAcAAAAgMQAAgIgUgJQgdgNgIgEQgVgPAAgUQAAgeAggKQASgGAjAAQAPAAAHAEQAKAFAAAOQAAAagPAAQgOAAgDgMIgMgBQghAAAAAKQAAAFATAKQAdANAKAHQAVAOAAATQAAAagXANQgTAKgaAAQgTAAgQgGg");
	this.shape_12.setTransform(118.5,27.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMBlQgGgFAAgIIAAgQIABgQIgDhKIgcgBQgSgCAAgRQAAgJAFgGQAGgFAJgBIAZADIgBgQIgBgPQAAgIAHgFQAFgFAJgBQAUAAAAAlIAAAMIAPgCQAQABAGACQAMAEAAAOQAAAIgFAFQgHAGgIAAIgIAAIgGAAIgPABIADBLIAAAHIAAAIQAAAjgVAAQgGAAgGgGg");
	this.shape_13.setTransform(104.3,25.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag4BMQgFgGgBgIIAAheIABgNIAAgOQAAgIAFgFQAFgGAJAAQAQAAAEARQAXgUAgAAQAdAAAAAnIAAAKQgBAXgTAAQgTAAAAgTIAAgPQggAFgNAdIAABHQAAAJgGAFQgGAGgJAAQgIAAgFgGg");
	this.shape_14.setTransform(90.3,27.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvA9QgVgUgBgiQgBgeASgaQAXgeAlAAQAeAAARAYQAPAVAAAfQAAAggSAYQgUAbggAAQgcAAgTgTgAgUgYQgJAOAAARQAAASAKAJQAIAHALAAQAKAAAKgIQAKgKABgSQACgtgbAAIgBAAQgPAAgKAQg");
	this.shape_15.setTransform(74.7,27.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag8B1QgGgGAAgIIABg2IAAg5IgCg2IgCgdQAAgMAFgIQAGgKALAAQAIgBAGAGQAGAFAAAJIgBABQAKgFAKgDQAIgDAKAAQAhAAAQAdQAMAVAAAjQgBAdgSAWQgTAWghAAQgLAAgOgDIAAA8QAAAIgGAGQgGAFgIABQgJgBgGgFgAgHhFQgJAFgKAJQABAeABAcQANAEALAAQAOAAAJgIQAHgLAAgPQAAgUgCgIQgEgSgOAAQgKAAgHAEg");
	this.shape_16.setTransform(59.2,31.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoBMQgWgIAAgQQAAgPARAAQAHAAANAEQANAFAGAAQAcAAAAgMQAAgIgUgJQgdgNgIgEQgVgPAAgUQAAgeAggKQASgGAjAAQAPAAAHAEQAKAFAAAOQAAAagPAAQgOAAgDgMIgMgBQghAAAAAKQAAAFATAKQAdANAKAHQAVAOAAATQAAAagXANQgTAKgaAAQgTAAgQgGg");
	this.shape_17.setTransform(43.5,27.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAzBLIgKguQgPACgYAGIglAIQgIATgRAlQgFAIgHAAQgGAAgFgFQgFgEAAgGQAAgHAXgvQgDgDAAgFQAAgMAOgDQARgeAagoQAgg4AIAAQAMAAAEAQIAJAyIAXBjIAIAYQAEALAAAEQAAAGgEAEQgFAFgGAAQgNAAgKgjgAgSAKQASgEAigGIgLg4g");
	this.shape_18.setTransform(16.3,24.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990066").s().p("AgqBxQgGgGAAgIQgBgOAfhDQgQgdgig+IgIgMQgDgGAAgGQAAgIAFgGQAHgGAIAAQAKAAAGAHQAUAcAaA4IATgqQAKgWAKgRQAGgKALAAQAJAAAGAFQAHAGAAAIQAAAEgDAFIgyBnQgTAmgJAZIgJAbQgFAOgOAAQgIAAgGgFg");
	this.shape_19.setTransform(216.1,31.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990066").s().p("AgMBlQgGgFAAgIIAAgQIAAgQIgChKIgbgBQgTgCAAgRQAAgJAFgGQAHgFAIgBIAZADIAAgQIgCgPQABgIAFgFQAHgFAIgBQAUAAAAAlIgBAMIAQgCQAQABAGACQAMAEAAAOQAAAIgGAFQgFAGgJAAIgHAAIgHAAIgPABIADBLIAAAHIABAIQgBAjgVAAQgGAAgGgGg");
	this.shape_20.setTransform(200.8,25.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990066").s().p("AgRBqQgGgGAAgIIgBgbIAAgbIABggIACgfQAAgJAFgFQAGgFAJAAQAHAAAFAFQAGAFAAAJIgBAfIgBAgIAAAbIABAbQAAAIgHAGQgFAGgHgBQgJABgFgGgAgNhJQgGgHAAgJQAAgJAGgGQAIgHAHABQAJgBAHAHQAHAGAAAJQAAAJgHAHQgHAGgJAAQgHAAgIgGg");
	this.shape_21.setTransform(189.9,24.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990066").s().p("AgNByQgGgFAAgJIAAjIQAAgJAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAJIAADAQAAAcgUAAQgHAAgGgGg");
	this.shape_22.setTransform(181.1,23.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990066").s().p("AgSBqQgFgGAAgIIAAgbIgBgbIACggIABgfQAAgJAGgFQAFgFAJAAQAHAAAGAFQAFAFAAAJIgBAfIgCAgIABAbIAAAbQAAAIgFAGQgGAGgHgBQgIABgHgGgAgNhJQgHgHAAgJQAAgJAHgGQAIgHAHABQAJgBAHAHQAHAGAAAJQAAAJgHAHQgHAGgJAAQgHAAgIgGg");
	this.shape_23.setTransform(173.3,24.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990066").s().p("AgMBlQgGgFAAgIIAAgQIAAgQIgChKIgbgBQgTgCAAgRQAAgJAFgGQAHgFAIgBIAZADIAAgQIgCgPQABgIAFgFQAHgFAIgBQAUAAAAAlIgBAMIAQgCQAQABAGACQAMAEAAAOQAAAIgGAFQgFAGgJAAIgHAAIgHAAIgPABIADBLIAAAHIABAIQgBAjgVAAQgGAAgGgGg");
	this.shape_24.setTransform(161.7,25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990066").s().p("AAdBIQgTAHgSAAQgVAAgOgJQgQgJgDgUQgGglAAgaQAAgTAEgZQADgQARAAQAJAAAGAGQAGAFAAAIIgCAUQgDAOAAAHQAAAVACANQABAPADAKIAHADIAHABQAOgBAUgEIgBgaIAAgWQAAgeADgXQACgRASAAQAIAAAHAGQAGAFgBAIIgCA0IAAAbIAAAeIAAAJIABAKQAAAHgGAGQgGAFgJAAQgMAAgFgLg");
	this.shape_25.setTransform(146.7,27.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990066").s().p("AgoBMQgWgIAAgQQAAgPARAAQAHAAANAEQANAFAGAAQAcAAAAgMQAAgIgUgJQgdgNgIgEQgVgPAAgUQAAgeAggKQASgGAjAAQAPAAAHAEQAKAFAAAOQAAAagPAAQgOAAgDgMIgMgBQghAAAAAKQAAAFATAKQAdANAKAHQAVAOAAATQAAAagXANQgTAKgaAAQgTAAgQgGg");
	this.shape_26.setTransform(118.5,27.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990066").s().p("AgMBlQgGgFAAgIIAAgQIABgQIgDhKIgcgBQgSgCAAgRQAAgJAFgGQAGgFAJgBIAZADIgBgQIgBgPQAAgIAHgFQAFgFAJgBQAUAAAAAlIAAAMIAPgCQAQABAGACQAMAEAAAOQAAAIgFAFQgHAGgIAAIgIAAIgGAAIgPABIADBLIAAAHIAAAIQAAAjgVAAQgGAAgGgGg");
	this.shape_27.setTransform(104.3,25.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990066").s().p("Ag4BMQgFgGgBgIIAAheIABgNIAAgOQAAgIAFgFQAFgGAJAAQAQAAAEARQAXgUAgAAQAdAAAAAnIAAAKQgBAXgTAAQgTAAAAgTIAAgPQggAFgNAdIAABHQAAAJgGAFQgGAGgJAAQgIAAgFgGg");
	this.shape_28.setTransform(90.3,27.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#990066").s().p("AgvA9QgVgUgBgiQgBgeASgaQAXgeAlAAQAeAAARAYQAPAVAAAfQAAAggSAYQgUAbggAAQgcAAgTgTgAgUgYQgJAOAAARQAAASAKAJQAIAHALAAQAKAAAKgIQAKgKABgSQACgtgbAAIgBAAQgPAAgKAQg");
	this.shape_29.setTransform(74.7,27.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#990066").s().p("Ag8B1QgGgGAAgIIABg2IAAg5IgCg2IgCgdQAAgMAFgIQAGgKALAAQAIgBAGAGQAGAFAAAJIgBABQAKgFAKgDQAIgDAKAAQAhAAAQAdQAMAVAAAjQgBAdgSAWQgTAWghAAQgLAAgOgDIAAA8QAAAIgGAGQgGAFgIABQgJgBgGgFgAgHhFQgJAFgKAJQABAeABAcQANAEALAAQAOAAAJgIQAHgLAAgPQAAgUgCgIQgEgSgOAAQgKAAgHAEg");
	this.shape_30.setTransform(59.2,31.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#990066").s().p("AgoBMQgWgIAAgQQAAgPARAAQAHAAANAEQANAFAGAAQAcAAAAgMQAAgIgUgJQgdgNgIgEQgVgPAAgUQAAgeAggKQASgGAjAAQAPAAAHAEQAKAFAAAOQAAAagPAAQgOAAgDgMIgMgBQghAAAAAKQAAAFATAKQAdANAKAHQAVAOAAATQAAAagXANQgTAKgaAAQgTAAgQgGg");
	this.shape_31.setTransform(43.5,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,0,300.4,45.8);


(lib.beetlebug = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIByQgGgHAAgGQAAgFAEgEQAEgEAGAAQADAAAGAIQAGAHAAAGQAAAFgEAEQgEAEgFAAQgFAAgFgIgAgJA1IgBgSIAAgSIAAg9IABhAQAAgNALAAQANAAAAANIAAChQAAANgNAAQgLAAAAgNg");
	this.shape.setTransform(242.9,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4BDIAAhlIABgPIAAgOQAAgPANAAQAPAAAAAYQAbgbAhAAQAMAAAFAJQAHAJgBASIAAAKQgBATgOAAQgMAAAAgPIAAgKIgBgMQgXADgMAKQgNAJgJATIABBPQAAAPgOAAQgOAAAAgPg");
	this.shape_1.setTransform(232.9,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAuBKQgGgGgDgEQgOAHgMAEQgKAEgGAAQghAAgQgTQgPgSAAgmQAAghAZgZQAYgaAfAAQAOAAAPAHQAUAIAAAMQAAAEgDADQgCAFAAANIgBAfQAAASACAKIAJAaIAEAIIABACQAAAGgEAEQgFAEgFAAQgCAAgIgHgAgYgjQgQASAAAWQAAAZAIAMQAJAMARAAQAMAAAKgGQAFgCAJgJQgEglAAgTIABgOIACgPIgJgEIgHgCQgUAAgRATg");
	this.shape_2.setTransform(217.6,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBAQgVgTAAgfQAAgcAUggQAWgjAZAAQAPAAARAHQAXAIAAANQAAAFgEAFQgDAEgGAAQgEAAgDgCIgGgGQgJgGgUAAQgNAAgOAaQgOAZAAAQQAAATAOALQAMAKARAAQAJAAAKgEIARgJQAEgDACAAQAGAAAEAFQAEAEAAAGQAAAKgXAKQgUAJgNAAQgcAAgUgSg");
	this.shape_3.setTransform(202.3,27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhKBdQAAgIAFgFQAFgFAIAAQAHAAAMADQANACAJAAQAUAAAKgNQAKgNACgdQgHAIgKAEQgJAEgJAAQgdAAgTgTQgSgTAAgcQAAgoAYgYQAagaApAAQANAAAKAEQAKADAGAHQATACAAAUQAAAKgDARQgGAigBAlQgCAvgOAVQgTAdgvAAQg5AAAAgXgAgVhBQgNAPAAAXQAAASAHAJQAHAGANAAQAKAAAMgMQALgNACgNQADgOADgdIgJgFIgKgBQgXAAgNAQg");
	this.shape_4.setTransform(177.4,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAdBIQgTAHgSAAQgVAAgOgJQgQgJgDgUQgGglAAgaQAAgTAEgZQADgQARAAQAJAAAGAGQAGAFAAAIIgCAUQgDAOAAAHQAAAVACANQABAPADAKIAHADIAHABQAOgBAUgEIgBgaIAAgWQAAgeADgXQACgRASAAQAIAAAHAGQAGAFgBAIIgCA0IAAAbIAAAeIAAAJIABAKQAAAHgGAGQgGAFgJAAQgMAAgFgLg");
	this.shape_5.setTransform(161.7,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqBvQgGAFgHAAQgIAAgGgFQgGgFAAgIIABgLIAAgLIAAikQAAgKAFgJQAGgKALAAQAPAAAAARIAAAGIgBAGIAAA4QALgGAKgDQAKgDAHAAQAjAAAVAZQAUAWAAAhQAAAigXAYQgYAYggAAQgVAAgSgHgAgPgCQgKADgNAIIAAA/QAUAIAPAAQAQAAAMgMQAMgNAAgTQAAgTgJgMQgLgLgRAAQgFAAgKAEg");
	this.shape_6.setTransform(145.2,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_7.setTransform(114.7,27.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNByQgGgFAAgJIAAjIQAAgJAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAJIAADAQAAAcgUAAQgHAAgGgGg");
	this.shape_8.setTransform(102.3,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMBlQgGgFAAgIIAAgQIABgQIgDhKIgcgBQgSgCAAgRQAAgJAFgGQAGgFAJgBIAZADIgBgQIgBgPQAAgIAHgFQAFgFAJgBQAUAAAAAlIAAAMIAPgCQAQABAGACQAMAEAAAOQAAAIgFAFQgHAGgIAAIgIAAIgGAAIgOABIACBLIAAAHIAAAIQAAAjgVAAQgGAAgGgGg");
	this.shape_9.setTransform(91.3,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_10.setTransform(75.6,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_11.setTransform(58.8,27.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgqBvQgGAFgHAAQgIAAgGgFQgGgFAAgIIABgLIAAgLIAAikQAAgKAFgJQAGgKALAAQAPAAAAARIAAAGIgBAGIAAA4QALgGAKgDQAKgDAHAAQAjAAAVAZQAUAWAAAhQAAAigXAYQgYAYggAAQgVAAgSgHgAgPgCQgKADgNAIIAAA/QAUAIAPAAQAQAAAMgMQAMgNAAgTQAAgTgJgMQgLgLgRAAQgFAAgKAEg");
	this.shape_12.setTransform(41.8,23.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAyBLIgJguQgPACgYAGIglAIQgHATgSAlQgFAIgHAAQgHAAgEgFQgFgEAAgGQAAgHAWgvQgCgDAAgFQAAgMAOgDQARgeAZgoQAhg4AIAAQAMAAAFAQIAJAyIAVBjIAJAYQAEALAAAEQAAAGgFAEQgEAFgGAAQgNAAgLgjgAgRAKQARgEAjgGIgNg4g");
	this.shape_13.setTransform(12.9,24.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990066").s().p("AhKBdQAAgIAFgFQAFgFAIAAQAHAAAMADQANACAJAAQAUAAAKgNQAKgNACgdQgHAIgKAEQgJAEgJAAQgdAAgTgTQgSgTAAgcQAAgoAYgYQAagaApAAQANAAAKAEQAKADAGAHQATACAAAUQAAAKgDARQgGAigBAlQgCAvgOAVQgTAdgvAAQg5AAAAgXgAgVhBQgNAPAAAXQAAASAHAJQAHAGANAAQAKAAAMgMQALgNACgNQADgOADgdIgJgFIgKgBQgXAAgNAQg");
	this.shape_14.setTransform(177.4,31.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990066").s().p("AAdBIQgTAHgSAAQgVAAgOgJQgQgJgDgUQgGglAAgaQAAgTAEgZQADgQARAAQAJAAAGAGQAGAFAAAIIgCAUQgDAOAAAHQAAAVACANQABAPADAKIAHADIAHABQAOgBAUgEIgBgaIAAgWQAAgeADgXQACgRASAAQAIAAAHAGQAGAFgBAIIgCA0IAAAbIAAAeIAAAJIABAKQAAAHgGAGQgGAFgJAAQgMAAgFgLg");
	this.shape_15.setTransform(161.7,27.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990066").s().p("AgqBvQgGAFgHAAQgIAAgGgFQgGgFAAgIIABgLIAAgLIAAikQAAgKAFgJQAGgKALAAQAPAAAAARIAAAGIgBAGIAAA4QALgGAKgDQAKgDAHAAQAjAAAVAZQAUAWAAAhQAAAigXAYQgYAYggAAQgVAAgSgHgAgPgCQgKADgNAIIAAA/QAUAIAPAAQAQAAAMgMQAMgNAAgTQAAgTgJgMQgLgLgRAAQgFAAgKAEg");
	this.shape_16.setTransform(145.2,23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990066").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_17.setTransform(114.7,27.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990066").s().p("AgNByQgGgFAAgJIAAjIQAAgJAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAJIAADAQAAAcgUAAQgHAAgGgGg");
	this.shape_18.setTransform(102.3,23.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990066").s().p("AgMBlQgGgFAAgIIAAgQIABgQIgDhKIgcgBQgSgCAAgRQAAgJAFgGQAGgFAJgBIAZADIgBgQIgBgPQAAgIAHgFQAFgFAJgBQAUAAAAAlIAAAMIAPgCQAQABAGACQAMAEAAAOQAAAIgFAFQgHAGgIAAIgIAAIgGAAIgOABIACBLIAAAHIAAAIQAAAjgVAAQgGAAgGgGg");
	this.shape_19.setTransform(91.3,25.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990066").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_20.setTransform(75.6,27.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990066").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_21.setTransform(58.8,27.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990066").s().p("AgqBvQgGAFgHAAQgIAAgGgFQgGgFAAgIIABgLIAAgLIAAikQAAgKAFgJQAGgKALAAQAPAAAAARIAAAGIgBAGIAAA4QALgGAKgDQAKgDAHAAQAjAAAVAZQAUAWAAAhQAAAigXAYQgYAYggAAQgVAAgSgHgAgPgCQgKADgNAIIAAA/QAUAIAPAAQAQAAAMgMQAMgNAAgTQAAgTgJgMQgLgLgRAAQgFAAgKAEg");
	this.shape_22.setTransform(41.8,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.9,45.8);


(lib.convertiblecar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIByQgGgHAAgGQAAgFAFgEQADgEAGAAQAEAAAFAIQAGAHAAAGQAAAFgEAEQgEAEgGAAQgDAAgGgIgAgJA1IAAgSIgBgSIABg9IAAhAQAAgNALAAQANAAAAANIAAChQAAANgNAAQgLAAAAgNg");
	this.shape.setTransform(276.9,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4BDIAAhlIABgPIAAgOQAAgPANAAQAOAAAAAYQAcgbAhAAQAMAAAFAJQAHAJAAASIAAAKQgCATgOAAQgMAAAAgPIAAgKIgBgMQgXADgMAKQgNAJgJATIABBPQAAAPgOAAQgNAAgBgPg");
	this.shape_1.setTransform(266.9,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAuBKQgGgGgDgEQgOAHgLAEQgLAEgFAAQgjAAgPgTQgPgSAAgmQAAghAYgZQAZgaAgAAQAMAAAQAHQAUAIAAAMQAAAEgDADQgCAFAAANIgBAfQAAASADAKIAJAaIADAIIABACQAAAGgEAEQgFAEgEAAQgDAAgIgHgAgXgjQgRASAAAWQAAAZAJAMQAIAMARAAQAMAAAJgGQAGgCAJgJQgEglAAgTIABgOIACgPIgJgEIgHgCQgUAAgQATg");
	this.shape_2.setTransform(251.6,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBAQgVgTAAgfQAAgcAUggQAWgjAZAAQAPAAARAHQAXAIAAANQAAAFgEAFQgDAEgGAAQgEAAgDgCIgGgGQgJgGgUAAQgNAAgOAaQgOAZAAAQQAAATAOALQAMAKARAAQAJAAAKgEIARgJQAEgDACAAQAGAAAEAFQAEAEAAAGQAAAKgXAKQgUAJgNAAQgcAAgUgSg");
	this.shape_3.setTransform(236.3,27.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_4.setTransform(210.9,27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNByQgGgFAAgJIAAjIQAAgJAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAJIAADAQAAAcgUAAQgHAAgGgGg");
	this.shape_5.setTransform(198.5,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqBvQgGAFgHAAQgIAAgGgFQgGgFAAgIIABgLIAAgLIAAikQAAgKAFgJQAGgKALAAQAPAAAAARIAAAGIgBAGIAAA4QALgGAKgDQAKgDAHAAQAjAAAVAZQAUAWAAAhQAAAigXAYQgYAYggAAQgVAAgSgHgAgPgCQgKADgNAIIAAA/QAUAIAPAAQAQAAAMgMQAMgNAAgTQAAgTgJgMQgLgLgRAAQgFAAgKAEg");
	this.shape_6.setTransform(185.7,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRBqQgGgGAAgIIAAgbIgBgbIACggIABgfQAAgJAGgFQAFgFAJAAQAHAAAFAFQAGAFAAAJIgBAfIgCAgIABAbIAAAbQAAAIgFAGQgGAGgHgBQgJABgFgGgAgNhJQgGgHgBgJQABgJAGgGQAIgHAHABQAJgBAHAHQAHAGAAAJQAAAJgHAHQgHAGgJAAQgHAAgIgGg");
	this.shape_7.setTransform(173,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMBlQgGgFAAgIIAAgQIAAgQIgChKIgbgBQgTgCAAgRQAAgJAFgGQAHgFAIgBIAZADIAAgQIgBgPQAAgIAFgFQAHgFAIgBQAUAAAAAlIgBAMIAQgCQAQABAGACQAMAEAAAOQAAAIgGAFQgFAGgJAAIgHAAIgHAAIgPABIADBLIAAAHIABAIQgBAjgVAAQgGAAgGgGg");
	this.shape_8.setTransform(161.3,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag5BMQgEgGAAgIIAAheIAAgNIAAgOQAAgIAFgFQAFgGAJAAQARAAACARQAZgUAfAAQAeAAAAAnIgBAKQgBAXgTAAQgSAAgBgTIgBgPQgeAFgPAdIAABHQAAAJgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_9.setTransform(147.3,27.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_10.setTransform(131.2,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVBAIgwh0QgCgEAAgEQAAgIAHgFQAGgGAIAAQANAAAFAMQAIARAYBAIAUgxIANgfQAGgMAMAAQAIAAAGAFQAHAGAAAIQAAAFgYA1QgTApgLAXQgBAHgGAFQgFAFgGAAQgOAAgHgQg");
	this.shape_11.setTransform(116,27.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAeBDIgFgeQgCgRAAgOIABgLIAAgNIABgFIAAgHQAAgMgGAAQgNAAgKAQQgMAQgGAXIgCANIgBAOIAAAMIgBANQAAAIgGAGQgGAGgJAAQgJAAgFgGQgGgFAAgJIgBgNIgBgMIACgoIACgmIAAgNIgBgOQAAgIAGgFQAGgGAJAAQATAAABAXIAAACQAWgWAWAAQAbAAALAYQAHAPAAAfIAAAKIAAAIQAAALADASQADASAAAMQAAAIgGAFQgGAGgIAAQgSAAgCgSg");
	this.shape_12.setTransform(100.8,27.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgvA9QgVgUgBgiQgBgeASgaQAXgeAlAAQAeAAARAYQAPAVAAAfQAAAggSAYQgUAbggAAQgcAAgTgTgAgUgYQgJAOAAARQAAASAKAJQAIAHALAAQAKAAAKgIQAKgKABgSQACgtgbAAIgBAAQgPAAgKAQg");
	this.shape_13.setTransform(84.7,27.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsBAQgYgUAAgfQAAgbAVggQAYgjAcAAQAPAAAVAIQAZAKAAAOQAAAHgFAFQgFAGgJAAQgGAAgJgGQgJgHgSAAQgJAAgNAWQgNAVAAAOQABAPAKAJQALAIAQAAQAJAAAOgHQAOgIAEAAQAJAAAFAGQAGAGgBAHQAAALgYAMQgWAKgOAAQgfAAgVgSg");
	this.shape_14.setTransform(69,27.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAzBLIgKguQgPACgYAGIglAIQgIATgRAlQgFAIgHAAQgGAAgFgFQgFgEAAgGQAAgHAXgvQgDgDAAgFQAAgMAOgDQARgeAagoQAgg4AIAAQAMAAAEAQIAJAyIAXBjIAIAYQAEALAAAEQAAAGgEAEQgFAFgGAAQgNAAgKgjgAgSAKQASgEAjgGIgMg4g");
	this.shape_15.setTransform(41.5,24.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990066").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_16.setTransform(210.9,27.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990066").s().p("AgNByQgGgFAAgJIAAjIQAAgJAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAJIAADAQAAAcgUAAQgHAAgGgGg");
	this.shape_17.setTransform(198.5,23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990066").s().p("AgqBvQgGAFgHAAQgIAAgGgFQgGgFAAgIIABgLIAAgLIAAikQAAgKAFgJQAGgKALAAQAPAAAAARIAAAGIgBAGIAAA4QALgGAKgDQAKgDAHAAQAjAAAVAZQAUAWAAAhQAAAigXAYQgYAYggAAQgVAAgSgHgAgPgCQgKADgNAIIAAA/QAUAIAPAAQAQAAAMgMQAMgNAAgTQAAgTgJgMQgLgLgRAAQgFAAgKAEg");
	this.shape_18.setTransform(185.7,23.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990066").s().p("AgRBqQgGgGAAgIIAAgbIgBgbIACggIABgfQAAgJAGgFQAFgFAJAAQAHAAAFAFQAGAFAAAJIgBAfIgCAgIABAbIAAAbQAAAIgFAGQgGAGgHgBQgJABgFgGgAgNhJQgGgHgBgJQABgJAGgGQAIgHAHABQAJgBAHAHQAHAGAAAJQAAAJgHAHQgHAGgJAAQgHAAgIgGg");
	this.shape_19.setTransform(173,24.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990066").s().p("AgMBlQgGgFAAgIIAAgQIAAgQIgChKIgbgBQgTgCAAgRQAAgJAFgGQAHgFAIgBIAZADIAAgQIgBgPQAAgIAFgFQAHgFAIgBQAUAAAAAlIgBAMIAQgCQAQABAGACQAMAEAAAOQAAAIgGAFQgFAGgJAAIgHAAIgHAAIgPABIADBLIAAAHIABAIQgBAjgVAAQgGAAgGgGg");
	this.shape_20.setTransform(161.3,25.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990066").s().p("Ag5BMQgEgGAAgIIAAheIAAgNIAAgOQAAgIAFgFQAFgGAJAAQARAAACARQAZgUAfAAQAeAAAAAnIgBAKQgBAXgTAAQgSAAgBgTIgBgPQgeAFgPAdIAABHQAAAJgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_21.setTransform(147.3,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990066").s().p("AgxA/QgYgTAAghQAAgjATgaQAWgcAjAAQAZAAARAIQAWALAAAXQAAAQgSAMQgIAGgZAJIgvAWQAHAHAKAEQAKAEALAAQATAAAOgIQAMgHAHAAQAPAAAAAOQAAARgYALQgUAIgXAAQghAAgXgQgAgTgiQgJAJgGASIAhgOQARgJAMgHQgKgGgPAAQgMAAgKAJg");
	this.shape_22.setTransform(131.2,27.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990066").s().p("AgVBAIgwh0QgCgEAAgEQAAgIAHgFQAGgGAIAAQANAAAFAMQAIARAYBAIAUgxIANgfQAGgMAMAAQAIAAAGAFQAHAGAAAIQAAAFgYA1QgTApgLAXQgBAHgGAFQgFAFgGAAQgOAAgHgQg");
	this.shape_23.setTransform(116,27.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990066").s().p("AAeBDIgFgeQgCgRAAgOIABgLIAAgNIABgFIAAgHQAAgMgGAAQgNAAgKAQQgMAQgGAXIgCANIgBAOIAAAMIgBANQAAAIgGAGQgGAGgJAAQgJAAgFgGQgGgFAAgJIgBgNIgBgMIACgoIACgmIAAgNIgBgOQAAgIAGgFQAGgGAJAAQATAAABAXIAAACQAWgWAWAAQAbAAALAYQAHAPAAAfIAAAKIAAAIQAAALADASQADASAAAMQAAAIgGAFQgGAGgIAAQgSAAgCgSg");
	this.shape_24.setTransform(100.8,27.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990066").s().p("AgvA9QgVgUgBgiQgBgeASgaQAXgeAlAAQAeAAARAYQAPAVAAAfQAAAggSAYQgUAbggAAQgcAAgTgTgAgUgYQgJAOAAARQAAASAKAJQAIAHALAAQAKAAAKgIQAKgKABgSQACgtgbAAIgBAAQgPAAgKAQg");
	this.shape_25.setTransform(84.7,27.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990066").s().p("AgsBAQgYgUAAgfQAAgbAVggQAYgjAcAAQAPAAAVAIQAZAKAAAOQAAAHgFAFQgFAGgJAAQgGAAgJgGQgJgHgSAAQgJAAgNAWQgNAVAAAOQABAPAKAJQALAIAQAAQAJAAAOgHQAOgIAEAAQAJAAAFAGQAGAGgBAHQAAALgYAMQgWAKgOAAQgfAAgVgSg");
	this.shape_26.setTransform(69,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.7,0,254.2,45.8);


(lib.AnAdjAnswersWHATKIND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsB/QgHgFABgIQAAgKAFgJQAGgJAKAAQAQAAAAAUQAAAJgEAIQgGAJgIAAQgIAAgFgFgAgiA9QgFgFAAgGQAAgMAWgSIAmgdQAXgSAAgQQgBgUgSgRQgSgQgSAAQgLAAgRALQgQALgEAAQgHAAgFgGQgFgFAAgIQAAgNAagNQAYgMAPAAQAgAAAcAbQAcAaAAAjQAAAYgQATQgKALgZASQgaATgJAMQgGAHgHAAQgGAAgGgGg");
	this.shape.setTransform(227.4,58.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0CJQgUgFgKgHIgBAAQgIAAgFgFQgEgFAAgIIABg1IACg2IgBg5IgBg9QAAgGAHgIQAIgIAHAAQAEAAAXALQAaANAFACQAuARAiAhQAoApAAAuQAAAegNAaQgOAbgYARQgaASgwAAQgMAAgQgEgAg/guIAAAvIgDBeIAEABQAPAKAXAAQAlAAASgLQAQgMAKgSQAKgUAAgVQAAgtg1gjQgPgLg/gcg");
	this.shape_1.setTransform(206.8,58);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhyCFQgFgGAAgHIACgWIABgVIAAggIABggIgBggIAAgiIgCggIgCggQAAgIAHgGQAGgHAJAAQAJAAANAUQArBAAhAqQAnAwAxAuIAAgWIgBgWQAAhJgGgsIgEgSQgEgMAAgGQAAgUASAAQAeAAAABvIAAA3IgBA4QAAAJgDATQgCARgQAAQgJAAgNgMQhGhChYh6IgBAnIAAAlIAAAqIABArQAAAugSAAQgJAAgGgGg");
	this.shape_2.setTransform(179.9,57.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhKB9QgFgFAAgHQAAgHAFgGQAFgFAHAAQALAAAZgDQACgOAAgSIgBgdIgBgcQAAgmAFg7IgWABIgWAAQgIAAgFgFQgEgFAAgHQgBgQARgCQANgBAmAAQAgAAA0AHQAOACAAARQABAIgGAEQgGAEgGAAQgLAAgRgCIgbgDQgEAxAAAsIABAdIAAAeIAAAdIA1gBQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAIgcABIgdAAQgJAAgXADQgXADgLAAQgHAAgFgFg");
	this.shape_3.setTransform(156.3,58);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhRCDQgGgHAAgIQABgoAChOQADhPAAgoQAAgIAEgFQAFgFAIAAQAHAAAFAFQAEAFAAAIIgCAzIgBA0QAXgWAcggIAvg5QAGgHAIAAQAGAAAFAFQAFAFABAIQAAALgsAxQgfAhgeAeQAUAWAqAoIASAPQAKAHALAEQAOAFAAAMQAAAGgEAFQgFAHgHAAQgaAAguguIgzgzIAAACIAABaQAAARgPAAQgKAAgFgJg");
	this.shape_4.setTransform(137.6,58.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLB9QgFgFgBgHIABgIIABgIIgBgZIgBgZQAAgZgEgqQgEgwgBgVIgPABQglAAgWgGQgOgEAAgNQABgHAEgFQAFgGAIAAIAbADQARACALAAIAfAAIAdAAIAoABIAnACQAGAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgGAAIgngCQgagCgOABIgMAAQABAXAEA1QADAwABAbIABASIABASQAAAMgEAIQgEAMgKAAQgFAAgGgFg");
	this.shape_5.setTransform(104.4,57.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA7BYQgEgPgHgnQgSADgcAGIgrAJQgJAXgUArQgGAJgJAAQgHAAgFgFQgGgFAAgHQAAgIAag2QgDgFAAgGQAAgOARgDQATgjAegwQAnhAAJAAQAOAAAFASIALA6IAZB1IAKAbQAFAOAAAEQAAAHgFAFQgGAFgHAAQgPAAgMgogAgVAMQAVgFAogHIgOhBg");
	this.shape_6.setTransform(78,58.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIAAgbIgBgcIACgpIABgpQAAgHAFgFQAFgEAHAAQAHAAAEAEQAFAFAAAHIgCApIgCApIACAqIBIgMQArgJAeAAQACgYAAgyQAAgNAEgNQAGgSAKAAQAGAAAFAFQAGAEAAAHIgCAHQgCAIAAANIAAAQIAAAPQAAARgDAiQgDAgAAARIACAnIACAnQAAAHgFAFQgEAEgHAAQgHAAgFgEQgFgFAAgHIgCgnIgCgnIABgaQgdABgpAIIhIAOQAAAQgDAcQgDAcAAAQQAAAHgFAFQgEAEgHAAQgHAAgFgEg");
	this.shape_7.setTransform(52.2,57.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAmCGQgHgFAAgIQgIgVgCgNIgOhJQgHgsgCgcQgPA4gSAlQgUAugGAZQACAEAAAEQAAAIgHAFQgGAEgIAAQgWAAAAgUIgGgWIgThUQgLgogahPIgBgHQAAgQARAAQALAAAHAMQACAGAKAdQAKAfAKAsIAQBKQATgrASg7QALglAGgOQAPgmANAAQALAAAFAMQAHAPAGA3QADAcAJAmIAPBDQAWg3AihcIAJggQAFgUAHgLQAGgKAKAAQARAAAAARQAAADgFAOIgGATIgKAeIgzB6QgHAUgRAnQgGALgNAAQgHAAgGgEg");
	this.shape_8.setTransform(21.1,58.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaA2QgPgGAAgJQAAgEADgDQADgDAEAAQADAAAFAFQACACAIABIAMABQAFAAAHgCQAJgCAAgHQAAgNgTgFIgHgCQgNgDgGgDQgIgEAAgLQAAgUATgJIARgGQANgEAFgDQAEgBAFAAQAEAAADACQACADAAAFIACAIIABAIQAAAFgDACQgDADgDAAQgGAAgCgEQgBgCgCgIIgWAHQgOAGAAAJIAGACQAUAEALAHQAQAIAAATQAAAQgNAIQgMAHgPAAQgNAAgMgEg");
	this.shape_9.setTransform(225.4,18.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkAsIAAhCIAAgKIAAgJQAAgKAJAAQAJAAABAQQARgSAWAAQAIAAAEAGQADAGABAMIAAAHQgBAMgJAAQgIAAAAgKIgBgHIAAgIQgQACgHAHQgJAGgFANIAAAzQAAAKgKAAQgJAAABgKg");
	this.shape_10.setTransform(216.3,19.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_11.setTransform(205.9,19.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAGAcIgFgXIgBgUIgHARIgQAoIgDAGQgDAFgGABQgIAAgHgeQgEgPgDgYIgDgOIgBgPQAAgEADgDQADgCAEAAQAIAAABAIIACAOIACAOIAFAqQALgcAMgnQADgLAHAAQAHAAADAMIAGAjIAHAlIAHgbIANgzQABgGAIAAQADAAADADQAEACAAAEIgBAFQgIAggNAmQgCAJgHAJQgDAFgGAAQgLAAgFgag");
	this.shape_12.setTransform(193.4,19.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaA2QgPgGAAgJQAAgEADgDQADgDAEAAQADAAAFAFQACACAIABIAMABQAFAAAHgCQAJgCAAgHQAAgNgTgFIgIgCQgNgDgFgDQgIgEAAgLQAAgUATgJIARgGQANgEAFgDQAFgBAEAAQAEAAADACQACADAAAFIACAIIABAIQAAAFgDACQgDADgDAAQgGAAgCgEQgBgCgBgIIgXAHQgOAGAAAJIAGACQAUAEALAHQAQAIAAATQAAAQgNAIQgMAHgPAAQgNAAgMgEg");
	this.shape_13.setTransform(181.4,18.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAYAvIgDgVIgCgWIABgHIAAgJQAAgVgIAAQgKAAgJANQgIALgGAQIgBAKIAAAJIAAAJIABAJQAAAEgDADQgCADgFAAQgEAAgCgDQgDgDAAgEIgBgJIgBgJIACgaIABgbIAAgKIAAgJQAAgEADgDQADgCADAAQAJAAACAMIAAAMQAQgWAPAAQAQAAAGAOQAFAJgBASIAAAKIAAAHQAAAIACANQADANAAAIQAAAEgDADQgDACgEAAQgJAAAAgJg");
	this.shape_14.setTransform(171.8,19.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAeAxIgGgHIgQAIQgHADgEAAQgWAAgKgNQgLgMAAgZQABgWAQgRQAQgRAVAAQAIAAALAFQANAFAAAIQAAADgCACIgBAMIgBAUQAAAMACAHIAGARIACAFIABACQAAAEgDACQgDADgDAAQgDAAgFgFgAgPgXQgMAMABAOQAAAQAFAIQAGAIALAAQAIAAAHgDIAJgHQgDgZAAgMIABgJIABgLIgGgDIgEAAQgOAAgKAMg");
	this.shape_15.setTransform(161.3,19.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990066").s().p("AgpBLQgKgJAAggIABgNIAAgQIgBgFQAAgBACgDIACgqIgBgKIgBgLQAAgLAKAAQAEAAADACIAWgEIASgCQAXAAAPAGQAGADAAAGQAAAEgDADQgCADgFAAIgDAAQgQgFgPABIgQABIgVAEIABAKIgBAmIAogEIAYgCQAEAAADACQADADAAAFQAAAGgJACIgYACIgrAEIAAANIgBALQABAWADAEQACADANAAIAQAAIASgBIAHgBIAFAAQALAAAAAKQAAAIgJACQgJABgdABQgegBgIgHg");
	this.shape_16.setTransform(144.2,16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990066").s().p("AgQBGQgMgdgPg2IgHgaQgGgVAAgGQAAgFADgDQADgCAEAAQAHAAACAIIAEARIAJAhQAKAiAJAbIAAgCIAYhFIAJgYQAFgOAHgIQADgDAEAAQAEAAADADQADADAAAEQAAACgCADQgGAKgEAJIgHAWIgaBFQgFANgGALQgBAHgGgBQgHABgDgJg");
	this.shape_17.setTransform(131.7,17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990066").s().p("AgqBHQgCgCAAgFQAAgEACgDQADgDAEAAIAVgCIABgSIgBgQIAAgRQAAgUACgiIgMAAIgNABQgEAAgDgDQgCgDAAgEQAAgJAJgBIAdgBQASAAAdAEQAIABAAAKQABAEgEADQgDACgEAAIgQgBIgPgCQgCAcAAAYIAAARIAAARIAAARIAfgBQADAAAEADQADADAAAEQAAAEgDADQgEADgDAAIgRAAIgQABIgSACIgTABQgEAAgDgDg");
	this.shape_18.setTransform(119.2,16.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990066").s().p("AgGBHQgDgCAAgFIABgFIAAgEIAAgOIgBgOIgCgmIgDgnIgJAAQgVAAgNgDQgHgCAAgIQAAgEACgDQADgDAFAAIAPACIAQABIASAAIAQAAIAWABIAWABQAEAAADACQADAEAAAEQAAAEgDADQgDACgEAAIgWAAIgWgBIgHAAIACAsQADAaAAAPIAAALIABAKQAAAHgCAEQgDAHgFAAQgDAAgDgDg");
	this.shape_19.setTransform(107.7,16.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990066").s().p("AgnA8QgOgPAAgVQAAggAcgiQAXgdAVAAIAJAAIAHACQADgFAGAAQAGAAACAJQACAHAAAMQAAAEgCADQgDAEgFAAQgGAAgDgIQgDgFgCgCQgCgBgJAAQgOAAgPAWQgXAcAAAZQAAANAIAIQAIAKAMAAQAIAAAKgFQAGgEALgIQAGgEADAAQAEAAADADQADAEAAADQAAAEgEAEQgaAXgYAAQgVAAgNgPg");
	this.shape_20.setTransform(94.3,16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990066").s().p("AgpBLQgKgJAAggIABgNIAAgQIgBgFQAAgBACgDIACgqIgBgKIgBgLQAAgLAKAAQAEAAADACIAWgEIASgCQAXAAAPAGQAGADAAAGQAAAEgDADQgCADgFAAIgDAAQgQgFgPABIgQABIgVAEIABAKIgBAmIApgEIAXgCQAEAAADACQADADAAAFQAAAGgJACIgYACIgrAEIAAANIAAALQAAAWADAEQACADANAAIAQAAIASgBIAHgBIAFAAQALAAAAAKQAAAIgJACQgJABgdABQgegBgIgHg");
	this.shape_21.setTransform(82.1,16.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990066").s().p("AgnBDQgSgOAAgRQAAgMAKAAQAKAAAAAMQAAAIALAIQALAHAKAAQAGAAADgxQACgVAAgjIgBgLIgFAAIgKAAIgMAAQgEAAgDgDQgDgDAAgEQAAgKAOAAIAJAAIAJAAIASAAIASgBQAWAAAAALQAAAEgCADQgDADgEAAIgGAAIgHgBIgLAAIAAAMQAABGgJAiQgHAVgOAAQgRAAgRgMg");
	this.shape_22.setTransform(68.9,17.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990066").s().p("AgdBOQgLgCgGgFIgBAAQgEAAgDgDQgDgDAAgEIABgeIABgfIAAggIgBgiQAAgEAEgFQAEgEAEAAQADAAANAGIARAIQAaAKAUAUQAXAXAAAZQAAARgIAPQgIAQgOAJQgPAKgaAAQgHAAgJgCgAgkgaIABAaIgCA2IACABQAJAGANAAQAUAAAKgHQAKgGAFgLQAGgLAAgMQAAgagegTQgIgHgkgQg");
	this.shape_23.setTransform(55.3,16.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990066").s().p("AAiAyIgHgfIgaAFIgYAGIgRAlQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgFAPgfQgCgDAAgDQAAgIAKgCQAKgTASgbQAUglAGAAQAIAAADALIAGAgIAOBCIAGAQIADAKQAAAFgDACQgDADgEAAQgJAAgGgXgAgMAHIAigHIgIgkg");
	this.shape_24.setTransform(40.3,17);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAYAvIgDgVIgCgWIABgHIAAgJQAAgVgHAAQgLAAgJANQgIALgFAQIgBAKIgBAJIABAJIAAAJQAAAEgDADQgDADgDAAQgFAAgCgDQgDgDAAgEIgBgJIgBgJIACgaIACgbIgBgKIAAgJQAAgEADgDQACgCAFAAQAIAAACAMIAAAMQAQgWAQAAQAPAAAGAOQAFAJgBASIAAAKIAAAHQABAIACANQACANAAAIQgBAEgCADQgDACgEAAQgIAAgBgJg");
	this.shape_25.setTransform(22.2,19.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAiAyIgHgfIgaAFIgYAGIgRAlQgDAFgFAAQgEAAgDgCQgDgDAAgEQAAgFAPgfQgCgDAAgDQAAgIAKgCQAKgTASgbQAUglAHAAQAHAAADALIAGAgIAOBCIAGAQIADAKQAAAFgDACQgDADgEAAQgJAAgGgXgAgMAHIAigHIgIgkg");
	this.shape_26.setTransform(9.3,17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.298)").s().p("AgsB/QgHgFABgIQAAgKAFgJQAGgJAKAAQAQAAAAAUQAAAJgEAIQgGAJgIAAQgIAAgFgFgAgiA9QgFgFAAgGQAAgMAWgSIAmgdQAXgSAAgQQgBgUgSgRQgSgQgSAAQgLAAgRALQgQALgEAAQgHAAgFgGQgFgFAAgIQAAgNAagNQAYgMAPAAQAgAAAcAbQAcAaAAAjQAAAYgQATQgKALgZASQgaATgJAMQgGAHgHAAQgGAAgGgGg");
	this.shape_27.setTransform(227.4,58.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.298)").s().p("Ag0CJQgUgFgKgHIgBAAQgIAAgFgFQgEgFAAgIIABg1IACg2IgBg5IgBg9QAAgGAHgIQAIgIAHAAQAEAAAXALQAaANAFACQAuARAiAhQAoApAAAuQAAAegNAaQgOAbgYARQgaASgwAAQgMAAgQgEgAg/guIAAAvIgDBeIAEABQAPAKAXAAQAlAAASgLQAQgMAKgSQAKgUAAgVQAAgtg1gjQgPgLg/gcg");
	this.shape_28.setTransform(206.8,58);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.298)").s().p("AhyCFQgFgGAAgHIACgWIABgVIAAggIABggIgBggIAAgiIgCggIgCggQAAgIAHgGQAGgHAJAAQAJAAANAUQArBAAhAqQAnAwAxAuIAAgWIgBgWQAAhJgGgsIgEgSQgEgMAAgGQAAgUASAAQAeAAAABvIAAA3IgBA4QAAAJgDATQgCARgQAAQgJAAgNgMQhGhChYh6IgBAnIAAAlIAAAqIABArQAAAugSAAQgJAAgGgGg");
	this.shape_29.setTransform(179.9,57.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.298)").s().p("AhKB9QgFgFAAgHQAAgHAFgGQAFgFAHAAQALAAAZgDQACgOAAgSIgBgdIgBgcQAAgmAFg7IgWABIgWAAQgIAAgFgFQgEgFAAgHQgBgQARgCQANgBAmAAQAgAAA0AHQAOACAAARQABAIgGAEQgGAEgGAAQgLAAgRgCIgbgDQgEAxAAAsIABAdIAAAeIAAAdIA1gBQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAIgcABIgdAAQgJAAgXADQgXADgLAAQgHAAgFgFg");
	this.shape_30.setTransform(156.3,58);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.298)").s().p("AhRCDQgGgHAAgIQABgoAChOQADhPAAgoQAAgIAEgFQAFgFAIAAQAHAAAFAFQAEAFAAAIIgCAzIgBA0QAXgWAcggIAvg5QAGgHAIAAQAGAAAFAFQAFAFABAIQAAALgsAxQgfAhgeAeQAUAWAqAoIASAPQAKAHALAEQAOAFAAAMQAAAGgEAFQgFAHgHAAQgaAAguguIgzgzIAAACIAABaQAAARgPAAQgKAAgFgJg");
	this.shape_31.setTransform(137.6,58.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.298)").s().p("AgLB9QgFgFgBgHIABgIIABgIIgBgZIgBgZQAAgZgEgqQgEgwgBgVIgPABQglAAgWgGQgOgEAAgNQABgHAEgFQAFgGAIAAIAbADQARACALAAIAfAAIAdAAIAoABIAnACQAGAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgGAAIgngCQgagCgOABIgMAAQABAXAEA1QADAwABAbIABASIABASQAAAMgEAIQgEAMgKAAQgFAAgGgFg");
	this.shape_32.setTransform(104.4,57.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.298)").s().p("AA7BYQgEgPgHgnQgSADgcAGIgrAJQgJAXgUArQgGAJgJAAQgHAAgFgFQgGgFAAgHQAAgIAag2QgDgFAAgGQAAgOARgDQATgjAegwQAnhAAJAAQAOAAAFASIALA6IAZB1IAKAbQAFAOAAAEQAAAHgFAFQgGAFgHAAQgPAAgMgogAgVAMQAVgFAogHIgOhBg");
	this.shape_33.setTransform(78,58.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.298)").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIAAgbIgBgcIACgpIABgpQAAgHAFgFQAFgEAHAAQAHAAAEAEQAFAFAAAHIgCApIgCApIACAqIBIgMQArgJAeAAQACgYAAgyQAAgNAEgNQAGgSAKAAQAGAAAFAFQAGAEAAAHIgCAHQgCAIAAANIAAAQIAAAPQAAARgDAiQgDAgAAARIACAnIACAnQAAAHgFAFQgEAEgHAAQgHAAgFgEQgFgFAAgHIgCgnIgCgnIABgaQgdABgpAIIhIAOQAAAQgDAcQgDAcAAAQQAAAHgFAFQgEAEgHAAQgHAAgFgEg");
	this.shape_34.setTransform(52.2,57.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.298)").s().p("AAmCGQgHgFAAgIQgIgVgCgNIgOhJQgHgsgCgcQgPA4gSAlQgUAugGAZQACAEAAAEQAAAIgHAFQgGAEgIAAQgWAAAAgUIgGgWIgThUQgLgogahPIgBgHQAAgQARAAQALAAAHAMQACAGAKAdQAKAfAKAsIAQBKQATgrASg7QALglAGgOQAPgmANAAQALAAAFAMQAHAPAGA3QADAcAJAmIAPBDQAWg3AihcIAJggQAFgUAHgLQAGgKAKAAQARAAAAARQAAADgFAOIgGATIgKAeIgzB6QgHAUgRAnQgGALgNAAQgHAAgGgEg");
	this.shape_35.setTransform(21.1,58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},8).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.3,82.7);


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


(lib.WhatKindBubble3still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AOhBGQgGAEgGACQgIAEgJAAQgIAAgHgDQgEgBgDgCQgMgGgKgOQgDgCgEgJQAAAAgBAAIAAgBQgCgFgEgHQgKgTgFgzQgBgEAAgEQgGg8AJggQACgFACgFQAEgNAGgMQABAAAAgBQARghAYgIQAAAAABAAQAHgDAHAAQACAAACABQANABAMAIAODhzQAJgTAMAAQANAAAJATQAJATAAAbQAAAbgJATQgJATgNAAQgMAAgJgTQgJgTAAgbQAAgbAJgTgAoWjTQArAAAeAfQAfAeAAArQAAArgfAfQgeAegrAAQgrAAgfgeQgegfAAgrQAAgrAegeQAfgfArAAgAHAB7QABgEABgDQAJgSALAAQAMAAAIASQADAHACAJQADAMAAAQQAAANgCALQgCAKgEAIQgIATgMAAQgLAAgJgTQgIgRAAgZQAAgEABgEQABgPAEgOgACFCgIAEiGAA6gEIAABqABhAFIAABwAqlhiQAAAZgSARQgRARgYAAQgZAAgRgRQgRgRAAgZQAAgYARgSQARgRAZAAQAYAAARARQASASAAAYgAtngwQgOAOgTAAQgTAAgNgOQgOgNAAgTQAAgTAOgOQANgNATAAQATAAAOANQANAOAAATQAAATgNANg");
	this.shape.setTransform(-57.5,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AC0BIIAAgBIgCgsIAAgBQADgHACgKIAAgBQAHgEABgEIAAAAQgHgIAJgJIAAAAQANgBACALIABgBQACgEAFADQADADABAFIABAAQACAIgBAMIgBAAIAAABQgBAPgEANIAAADIAAACIAAABIAAABQgDAKgGAIIAAABIgBABQgHADgFAAQgIAAgGgGgAi7AQQgWgQgHgjQAFAHAHgFQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBIAKgDIAAgBQgFAAgEACIgEABQgJAAgCAHIAAABIAAABIAAAAIAAgMQAEACADgCIABgBQgIgBgCgKIABAAQADALAHgHIAAABQACAGAEgGQgGACACgDIAAgBQgIAAAAgIQACgIAEgIIABAAQAIABADAGIABAAQAJgBAGAJIABAAIAAABQAFAIgHAEQAQAFgGAZQgDAKgBAKIAAAAQgBAKgHADIAAABIAAACg");
	this.shape_1.setTransform(-55.6,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9900").s().p("AAABFQAIABAFgFIAAgBQAAgDgFgEIgBgBQADgSAAgTIAAgBQAIgEAHACIACAAQAFgEAJgBIABgBIAHgIIAAAAQADgHgBgDIAAAAQgJgPgPgIIAAgBQgEgDACgEIAAgBIAPgWIABAAQAWADAZAHIAAABQgBAGgFAIIAAABQgGATgCATQgBAJgEgBQABAGAAAJIABAAQAFANAAgPQAAgDADgBQAAgJADgFIABgBIAAgGIAAgBQAGgJABgOIAAgBQAJgLAHgMIABAAQAbgCAiAGIABAAIgQAjQgJAQACARIABgBQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAQABgDgBgDIAAAAQAPgXAMgcIAAgBQAKgEAJABIABAAQAHAFAJACIAAABQgBAJgHAIIgBABIAAABQgDADgCAEIgDAIIAAAAIgLgBIAAAAQAAARgLAGIAAACIAAABIgBAAIgIAGIgBAAQgDgCgCAAQgBAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAIgBABIgBAEQgPASgbAHQgdAIgeACQgTgBgRABIgCAAQgIAAgHgDgADFgKIAAAAIABAAQADgNgGgFIgBgBQgEgHgGACIAAABQAGAEgBAIQAAAGgKgDQADALAPgDgAgoBCIgBAAQgKgEgKgKIAAgBIgBgMIABAAIgDgMIAAgBIA3gIIACAAIADAAQADABABADQAAAGgCAFIgBABQADANgBATIAAABIAAABIgMABQgOAAgNgDgAh/AoQgSgCgSABIgBAAIgFgDIgCAAQgRgBgUgEIAAgBQgEgKgBgMQACgHAEgCIAAgBQANABAPADIABAAQAKAFALACIABAAQAPAGASAFIADAAIAAABQACAMgIAHIgBAAgAgRAGIAAAAQgCgGgLABQgKACgFgDIgBAAIgCABIgHgCIAAgBIArgHQAHgCACgHQAAAHADAEIAAAAQACgMADgIIAAABQAGAIAGgEIAAAAQAFADAGABIABAAIAJAKIABABQgVANggAAIgDAAgAgqgyQgLgBgEgGIgBgDQAEAAABgHQAAAAAAgBQABgBAAAAQABAAAAgBQABAAABAAQAPgCAWACQATABAQAHIgJAWIgBABQgagHgdgEg");
	this.shape_2.setTransform(-7.6,-2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgyEkIhWgNIAAgBIgGAAIghgFIAAgBQgGgBgIAAIAAgBQgNgEgPgDIAAAAQgrgJgngLIgCAAQgjgMgmgJIgBgBIgBAAIgCAAIgEgBIgBAAQgIgFgKgDIgBgBQgPgBgIgIIgCAAQgMAAgPgFIgBAAIgCAAQgGgDgKABIgBAAQgDgFgIABIgBgBQgCgDgDAAIgCgBQgDgBgFACQgFgEgLgCQgbgEgWgMQgCgBABgFIAAgCQgHgBgEgHIgDgEQgDgDgCAAQgJAAgBgGIAAgBQAGgEABgDIABAAIAIADQAHAEALABIABAAIANAFIABAAQAMABAHAGIABAAQAJAAAIACIAIADIABAAIA3AOIABAAQACADADACIAAAAQALABAKADIAEACIAAAAQANgCAKAEIABABQATAGAUAEIABAAIAAACIAlAIIABAAIAtAMIABAAIAFABIABAAQAXAGAZAEIABAAIA/ANIABAAQAAASAHALIABAAQAHgHgBgPIAAgBQAVgBAcAHIACAAIAkAIIABAAIAAACQABATgEAOIgBAAgAC1DpIgCgBQgOgIACgRQACgZgEgYQgMgTgEgVQgCgLABgMQgBABAAgBQgBAAAAAAQAAAAAAAAQgBAAAAgBIAAgBQgIgGgHgJQgDgFgHgCQgFgCgGgBIhPgCIgaAXQABAwgTAqQgIARgQAJQgcAPgfgPQgKgFgDgLQgJgiAZgQQABgIAEgHQAOgXARgUQAggiAigaIAFgEQAJgIAKgEQAsACAsAFQANABADAMIAAACQAgAGARAdQAHAKgCANQgBAFgDAFQADAIABAKIAAAFIAAADIACADQARAcgCAkQAAAVgJASQgEAIgHAAQgDAAgDgCgAiYDbQgSgBgPgGIgFgBQgegGgkgFIADiFIgDCFIgNgBIgBgBQgLgDgJgFIgBAAQgJABgEgEQgPgBgQgHQgNgFgRgCIgBAAIgIgFIgBAAQgLAAgJgCIgBAAIgBgBQAJgIAJgBIAEADQAEAGAFgGIABAAQACgOAAgRIAAgCIgGgNIAAgBIgCgyQAAgOgFgJIAAgBQgCgFABgGIgBgBQgDgGgDAAQgDABgCAHQACAKgCAJIAAAAQADAHABAJIAAABIAFAqIAAAAIAAABIABAbIAAAAIAAAAIgBAAQgKACgHAGIgBAAIgBABQgDAAgCgDIAAgMIgCgWQgBgTgFgSQgFgRALgFIAAAAQACgEgIgFIgCgYQAAgGgEgCQgDgCgHACIAAAFIAAABIAAACQABALgEABIAFAKIABAAIAEAsIAAABIAAABQAAAhADAdIAAABQACAHAHgEIABAAQAEAGgMAEIgBAAQgWgDgTgIQgJACgIgEIgCgBIAAAAQgSgIgXgEIAAgBIABgCQgCgFAAgIQAHgIAAgNIAAgBQAHgKADgNQADgKAIgDQABAAAAAAQABAAAAAAQAAAAABABQAAABAAAAQAAAYADAWIABAAIAAABIABAQIAAABQACAIAGADIACAAQAGgIgEgOIgEgOIAAgBQABgGgCgDIAAgBQAEgNgFgNIAAgBQABgFgCgIIAAgBQgCgEABgIIgBgBQgEgagDgWIAAgCIAAgCQAYACAXgBIABAAIAYADIAAAAIAQACIABAAIAUADQATAEARAFQANACANACIAeAFQAGAEAJADIACAAQARAEAIANIABAAQAFgCAGADIABAAQACAOAOgBIAAAAQABALgDALIAAABIAAAAQAAAJgCAFQABAcADAcIABAAIAAgCIAAgKQAAARAPAFIAAAAIAIAQIABABQAEALALADIACABQANgDAHAFQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAEIACATIABABIgBAAQgBgKgDgGIAAABIADAZIgBAAgAkkCdIAAhwgAlMCOIAAhrgADVB/IAAAAIgHgbIAAgBQAAgMgIgEIAAgBIAAgBIAAgBQgIgYgOgSIAAgBQgFgJgJgFIAAgBQgBgIgGgDIgBAAQgHgIgEgIIgCAAQgHgDgIgBIgBgBQgLgHgQgDIAAgBQgbgFgRABIgBAAQgNADABgPIAAgFIABgCIgBgBQgBgCABgGQAIgHAOAHIARAGIAWAEQA4AIA2gPIAngNIABAAQASgLASgNQARgMAOgQQAEgLAAgRIgBgBQAEgIAFgGIAAgBIAIgOIAAgBQARABAHgKIAAgCQAKgLAUAAIABgBQAegKAggHIACAAIAWgGQAPgFAMgGIAHgEIACgBIABAAIAHAAIABAAQAFgDAGgCIAAgBQANgDACgOIABAAQAMgHAOgFIABAAQASAMALASIAAABQAIAEAFAGIAAABQADAOgBALIgBAAQABgJgHgBQgMgDgJABIgDgBQgdgKgcAMQgKAEgLgBIgOAJIgQAKIgXgEQgCADgFABIgCABQgDAKgJAFQgHADgDAHIgFACIgCACIgBAFIgGANQgCAEAAAFQgJAHgEALQgCAIgGAGIAAAIIAAADIgDACIAAADIAAAIIAAAAIgGAOQgCABgCADIgBADIACAAIgDAJIAAABIAAABIgCAAIAAABIAAACIAAAAQgFAXgJARIAAAEIAAABIAAAAIgHAVIAAAIIAAACIgBAAQAAAMgDAMIgBAAQgFAEgHADIAAABIglARQgRAKgVAFIgBABQgGAHgJADIAAABIAAACIgBAAQgRAJgQAKgAo3B1IgBAAIgKAAIAAgBIgdgLIAAgBIgBgRIgBAAQgCgFgFgCQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAgBAAIgEgEIAWgaIAAABQANAhAWAVIABAAIALABIABAAQAHgHADgLIAAgBIABgBIAAgBIABAAQACgFADgCIAAgCIAEg2IABAAQAOgGAJAEIAAAAQAAALAFAGIgBABQgCAPgDAOIgBABQgEAGAAAFQgJAIgBAQQgBAPgIAIIAAAAQgRgCgRgIgAh0BaQgIgGgBgUIgBAAQgIgHgFgLIAGgEIAAgBQAYgFAaAFQAEAAADADQgDAFgFAEIgBAAIgBABQgKAMgLAHIgBAAQgBAMgHAGIAAgBgAGwBQQgCAEgFAAIgCAAIgJgRQgKgUgGg6QgDgdABgWIABgCIACgDIAAgCIAAgLIAAgDIACgCIABgDIAAgLIAAgDQAHgEABgGIACgDIAOgeQAGgNAKgLIAIgCIACgBQABgGAEgCIAAAAIAAABQAHgDAIAAQAMAAAKAFIgBAAQgXAJgSAhIAAAAQgGAMgFANIgDALQgJAgAGA7IAAAIQAGAzAJATIAHANIAAAAIgFACIgUgFgAgvAXIgPgBQgFgFgIgBQgQgBgEgHQAagIAXgNQAIgEAMgBQARgLAQgIQAEgCgBAHIgBADIAAAAIgCASIgBABQgEADgFAAIAAABQgXANgUAQIgBAAgAjZAWQAKgDAHgHIAAgBQAHAAAHgGIABgBQAagHAZgMIAAAAQAtgRAsgVIAAgBQATgIAYgIIAAgBQAOAAgBAQIAAABIgCABQgWALgVAPIgBAAQgLAEgMADIAAABQgfAMghAJIgBAAQgFABgGgBIAAABIg6ASIgCABIgBAAIgNABIgJgBgAjnAPQgRgCgNgFIgBAAQgIgEgKgCQgQgCgJgJQAAgPgBgLIgBgIQABgUgFgLIAAgBIAAgeQAQgFARACIAAAAQAMgEAJAGIABABQABAFgDAEIACAAIACgBQAGgHgEgKIABAAIAuADQAbACAOAIQAJgCAIAFIAAABQAFABAFgBIABAAQADADAFABIAAABIAiAFIABAAQAEADAFABIABAAQAaACAQAHIABABQAGgGAJADIACABQgFAFgMACIgBAAQgJAHgIAAIgBAAQgEAHgIAAIgCAAIgDAFIAAABQgaAHgXALQgIADgKABQgMAHgNAHIgIAEIAAAAIgBAAQgZAFgSAJQgGAEgFAFIAAAAgAlRgMQgNgEgJgFIgQAAIgBAAQgVgJgeAAIgBAAIgBAAQgMACgLgEIAAgBQgCgCAAgEQAXgLAegGIABAAQATgPAdgFIABgBQAFgLgGgEIAAgBIALgJIABgBQAKACAJgDIAAAAIAAABQAFAuAAAuIAAAAIgIABQgGAAgHgCgAoagcQgEAAgCgDQgDgFgEgDIgBgBQgFgJgIgGQAKgHAMgDIAAABIABABQAAAAABABQAAAAAAABQABAAAAAAQABAAABAAIABAAIAQgBIABAAQAJgHAPADIABAAQAJgGAMgDIABAAIAugKIAAgBQACgCADABQAMAAgJAEIgPAFIAAABIgBABQgSAHgSADIAAABIAAACIgBAAQgGgBgHACIgBAAIgDADIgGAEIAAABIgBAAQgEAAgCABIAAACQgCAEgFACQgOAEgGAOIgJgBgAFkjUIgBAAQABgRgIgHIgNgFQgJgEAEgBQABgDgHAAQgXACgDgTQAOgGASACQAEAAgBgFQgFgEgMAAIAAABIgCAFQgFADABgHIAAAAIAFgLIAAAAIBOACIAAgBQAgAEAhACQANAAAHAFIARgCIAAABQASAIAPgGIAAADIgBAAQgaAIgbAEIgBABQgEAHAFAHIgBABQgHAKgOADIgBgBQgRgHgNAOIAAABIgHACQgKACgLAAQgSgBgGALIgBABQgDACgCAAQgEAAgDgFgAEEkCQgJgBgJgEIgBABQgHACgLgBIAAgBQgHgEgHABIAAgBQgMACAAgHQAKAAAFgGIAAgBIAAgBIAlgDIACAAQANgGASgDIABAAQAEAIgEALIAAABIAAAHIAAABIgBADQgHACgHAAIgIAAgAD+kOIAAABIAGAIIADgDIABgBQACgHgEAAQgDAAgFACg");
	this.shape_3.setTransform(-18.3,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADxJrQgFgBgFgCQgQgHgOgJIgCgDQgQgOgLgRIgCAAIgCgLQgCgGgDgFIAAAAIgEAEIgDABIAAABIAAAAIgFAFQgfAYgsAJIAAABQgMADgLABQgmABgZgNQABgDADgBIACgBQAEgDgEgDQgIgEgDALIAAABIgBAAQgRgHgHgQIgBgCIAAgBQAAgRgIgIIgBAAQgHAEgDAHIgBAAIgPAGIAAABIgBAAQgJACgFAFIgCAAIgJADQgPADgQACIAAAAIgdAAQgRgBgPgEQgQgFgMgJQAFgSgKgPIgJAAIgBgKIAAAAQgEgEgEgCIAAAEIgBAGIgBAFIgBAFIgBAFIAAADIgDAKIgCACIgWAAQgJgFgKAAQgIAAgDgHQgJgYgMgVIgOAAIgEAFIgCACIABAOQACASgMANIhdgBQgCgEgEgDIgCgCIgBg9QAAgUgIgSIgJgBIgFAEIgHAGIgUADIgCACIgCACIgsAAIgCgBQgIgFgEgFIAAgbQAAgmAHglQAVgHAHgTQACgFgEgBQgkgNgngJIgFgFIgEgFIgegEIAAgJQABgIACgHQAEgCACgDIAHgQQADgCAAgGQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgBIgCgBQgJgVgWgHQgGgIgJgDIABgSQAEgfARgZIAAAAQAMgGAQgDIAFAAIAAgBIAOgBIAAgCIAAgEIAAgFIAAgCIAAgBIgFgCIgEgBIgDgEQgMgGgNgEQgCgFAAgEIABgLIACgFQAHgcAcgPQASgCAQgFIADgHIABgDIAAAAIAHgEIAEgCIADgBIABgDIAAgBIgGgEIgBgBIgKABQgEgHgJgCIgGgIIgCgCQgTgmgDgrQAAgHACgGQAHgUAPgQIAHgGQATgLgDgOQANgIAPgGIABABIAAABQASgRAjACIABAAQAGAMAIALIABAAIAAACQALARAZgFIAAgBQAIgFABgMIAAgBQgFgHgDgHIgRgJIgGgCIgBAAIgEgCIgBAAIgEAAQgHgEgBgLIAEgKIABgBQgDgdASgQIAAgBQAIgHAKgDIAAgBQAZAAATAGIABAAQAHAGAJADIABABIAYAMIADABIAGADQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQADgEgCgEIgBgBQgIgNgGgPIAAgBQABgMgCgLIAAgBIAAgBIACgNQAEgZAOgQIAAAAQAdgiA1gBQAOAAAMACQAdAKAQAXIABABQAIAKAGgNIAAAAQgDgaAFgXIAAgBQAFgMADgPIAAgBQADgBABgDIABAAIABgIIAAgCQAOgeAegQIAAgBQAmgNAqAJIABABQAkAJAVAbIABABQADAMAIAHIABAAQAFgCADgHIAAgBQgCgbANgRIAAgBIAMgLQARABAGgQIABAAIABgBQADgBABgDIgDAAIgBAAIAAgBIB5AAIADACIgBAAIACABIAPATIACACIAJABQAIAJAHAJIADAFIgFAGQgCADABAEIAAADIADADIADADIAOAAQAFgDAEgEQAJgLAKgHQAJgHAKgGIACACIAJAAIACAAIADgEIADgGQAfgGAeAAIACgCQAIADAGAFQAJAHAGAKIABA2IAAAgIgKAkQgFAOAPgDIALgKIAEAAIACgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIABgBQARgOAVgLIAAgBQAfgSAqgCQAKAAANAFQAGAIAIAGIABAAQAPAWAFAfIABAAIAAABIgDAMIAAADIAAABIAAAAQgCAIgEAGIABACQAEAPAKgNIAAgBIABgBIAcgbIABgBIAQgJIABgBQAYgOAagLIAAgBQAcgNAmAIQAKABAJAHQAIAIAJAGIABABIABAHIAAABQAMARgEAVIgFANIgEAHIgDAHIgBABQgCADgCABQACATANgOQASgTAagLIADgDQAMgDAPgBIAHgBIAAgBIAUAAIABAAIAEACQAgAIAZAPIABAAIAFAFQAQAPAPARQASATABAlIAAABQgDAJgHAEIgBAAQgZAEgOAQIgBAAIAAACIgBAAQAAAFACADQADAHANgGIAkgTQAagBAbAFIABAAQALAIAMACIABAAQADAEAGACIABAAIAAAAIABAAIASAYIABAAQAMAkgSAbIAAABIgBAAIgBACIAAABIgBAAQgTAVgZAPIAAABIAAABIAAAAIgEAGQADAKAMACQAHABAGADQARAKAJATIAOAZQAHAOADARQACAMgFAJQgMAUgUANIgBAAQgfAQgWAYQgBAGADACIABAAQAWAKAfABQAOAAAMAEQALAFAJAGIAKAPIABAAIABAJIABAAIAAAAQADALACANIAAABQgFAIgHAGIAAABIgBAAQgcASgiALIAAACIgBAAIgOAEIAAA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gTAFIAAABIgBAAQgLAGgOAEIAAAAQgEADgCAFIgBAAIgJAEIAAABIgKALIAAABIgCAAIAAABIgBAAQgGAEgEAGIAAAHIAAADIABAKIAAAJIAAAHIAAACIAAALQAFgOAFgKIAAgBQAJABADgIIAAABQAEAHgHACIAAAAQAGADgFAJQgEAHAFAFIgBABQADAGgIAAIAAABQgIgCgGAEIAAAAIAAABIAAAGIAAAFQAJgHALAHIABAAQAEAEgBAKIgWAZIgBAIQgBAJgCAIIAEAJIAAAAQgBAMAFAFIABAAQADALAGAHIABAAIAAABIAAAWIgBAAQgDAHgEAFIAAABIADAAIAKACIAcAFIAHABQgNAwApAcIABAFIAAAEQAIAKAMAEQA9AUBBgIQALgLAQgIIADgEQAJgGAFgJQACgDgBgCQAGgLAOAGIAKACQAbALAbADIABAAIAlALIAAAAIABAAIAzASIAAAAIAUABIACAAQAEAFAGgBIACgBQALADAHAIIABAAIAKgCIABAAIAGADIAAAAQAEgBADABIABAAQAXAGAQAMIACADQABAEADACIAAABIABAAQAIAKAHgMQABgDAAgGIAJgHIABAAIARAhIABACIgBABQgcAJgdAEQACAHAMgEIAIgBQAOgCANgGQALAAAIgEIAAgBIAEAAIAEAAgAgKG9IAAAGQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAQADgBACgKIAAgBQgCgFgCABIAAAAQgCABgBAHgAC5D4IgCADIgGAXQgEAPgCAOQgDAfADAgIAAAGQANAUAQAQIAJAAQAUghAAgpIgBgSQgBAEABAGIAAABIgDAIQACgLAAgNQAAgPgDgNIABAAIACAEIAAglIgTgNQgJgCgFAAIgJANgAJHDzIAAABQAKAIAQACIABAAQAMgCANgGIAAgBIASACIABAAQASgMAOgQIABAAQAEgDACgIIAAgBQAEAAABgEIABAAIAJgVIgBACQgYAsghAAIgEAAQgGgBgFgCQgHgCgHgEQgGAEgHADQgIACgHAAQgIAAgIgDIAGASgAKGDkQAGgCAGgFQgGAFgGACgAJ0AjQgJATAAAbQAAAbAJATQAJATAMAAQANAAAJgTQAJgTAAgbQAAgbgJgTQgJgTgNAAQgMAAgJATgAplATIAAABIACAHIABgJIgDABgAKSg7QgMgIgNgBQANABAMAIgAlyF7QgHgBgEgFIgNgTIAPgKIBAAPQAPAEALALIgJAHQgkAAgkgCgAtvB1QgegfAAgrQAAgrAegdQAfgeArAAQArAAAeAeQAfAdAAArQAAArgfAfQgeAegrAAQgrAAgfgegAy3BmQgOgNAAgUQAAgTAOgNQANgOATAAQATAAAOAOQANANAAATQAAAUgNANQgOAOgTAAQgTAAgNgOgAwZBdQgRgQAAgZQAAgYARgSQARgPAZAAQAYAAARAPQASASAAAYQAAAZgSAQQgRASgYAAQgZAAgRgSgAgBAAQgSgBgUgBIgBAAQgJgFgOAAIAAgBIgfgEIAAgBIgtgMIgBAAQgCgJgGgEIAAAAQgNABgHAFIgBAAQgNAAgPgDQgJgzAAg6QgBgJgCgIQgDgNAKABIACAAIgIgyIgBAAIgEgFIAAgCIgBgHQAQADgGgIIgBgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAFgEAHAEIAAAAIAbADQAmAFAoAHIACAAQAzAIArAEQARADAQADQgaAjgUAnIAAABQgUAPgOAVIgfAqQgFALADAJIAAABQAFACAIgIIABgDQADgWAOgOQAOgPAJgSQAKgHAHgIIAAAAQAOgYAQgYIAAgBQAOgMAJgRIAAgBIAcgBIATABIAaACQANABAJACQgEAIAAAMIAAABIAAAAQgDAQgEAPIAAAEIAAABIgIAEQgOAHgHgIIAAgBQgKgHgFAPIAAABIAAAAIgBABQgGAHgHAEIAAACIgCAOIgBAAQgMALgKAOIgBAAIgsAIIAAABIgCAAQgEAAAAgEQAFgBgBgJIAAgBQANgMAKgOIAVgdIAAAAQANgQAJgTIACAAQAIgDgCgIIgBgBQgOAIgKAOIgUAdIAAABIAAACIgBAAQgUAYgPAcIAAACQABAJgGAGQgBAKADAGIAAAAQADALAJAGIABAAIAAABIgFAPIAAACIAAABIgBABQgCAMgCAIIgBgBgAidhBIABAAQAAALAIgEIABAAIABAAQABgXgEgYIAAgCIgBgDIAAgEQgEg0gIgxIAAgJQAAgPgEACIgDADIAAAWIABAAQACAkAGAjQACAOACAUQABANAAAPQgBAGgFgEQgBAHAFAFg");
	this.shape_4.setTransform(-30.4,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeKBQgUgBgNgOQgXgMgOgVQgBgFgCgEIgBgEQgGgCgIAFIAAABQgJAHgMADIAAABQgVAIgXAHIgBAAQgkADgogEIgBgBQgPgIgUgFIgBAAQgKgNgIgPIgBgBQAAgGgHABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgLACgRAFIgBABQgZAGgZAEIgBAAQgTgDgZgCIgBAAQgZgHgSgNIgBAAIgBABIgyAAQgagEgTgSIgDAAIgCADQAAAEgCADQgCAEgFACQg5ABg5gCQgGAAgEgFQgVgYAGgjQADgPgFgOIgPgCIgCACIgCABQgeAAgdgCIgJgBQgOgCgIgLQgDg5AHg4QACgJADgIQACgEAEgEQgFgEgIgCIgKgBIAAAAQgpAEgSgVIgFgBQgOgSAEgbQABgIAGgHQgKAAgFgJIgBgCQgdgVAHgnIAEgZQABgHAAgJQAJgMAEgPIADgJQADgGAGgDIAFgDQgDgTgBgUQAAgJAGgHIACgFIADgJQARgiAlgJQgHgFgFgJIgCgEQgZg1AKg8QACgJAFgJQAFgKAKgGQAEgNANgIIAEgCIABgCIAEgGIACgBIABAAIAAgBIAHABQANgJAPgIIAAgBQAVgGAUgIQAGgCAIAEQAJgCgFgGIAAgBQAGgLAAgRIABAAIAAgBIAAgEIAKgXIABgBQAHgDAEgHIABAAIAAgCQAHgIAMgEIAAgBQAfgBAaAJIABABIAPAHIABgpIAAAAIAAgBIAAgGIAAgDQADgGABgIIABAAIAAgBIAAgEQAMgXATgQIABAAIAAgCQAUgRAdgJQAPgFARADQARADAOAFIAjASIABAAIAAgBIAAgEQAKg7AcgqIAAgBQAHgFAFgGIAAgBQAQgFANgIIAAgBQAqgHAoAEIABAAQAgAOAZAVQACADADgDIABgBQALgRAFgRIgBAAIgBAAIACgCIgBgBIAAgCIABgCIAAgFIACgCQAGgHAKACIABgDIABgJQACgEADgDIADgBIAAAAQBJABBKAEQAEAAAFAEIAHAFIABACIAJAOIACAFQAHAJAIAJIAEAEIADgDQAXgUAdgIIAEgEIAdgCIACgDIADgCIABgCIACAAIABgBIAAAAQAqgDAVAUIADAAQAJAJAFAPIAAABIABAAQABAGAEADIAAASIgBADIABAPQAAAdgBAcQAZgPAcgNIABAAIAAgBIATgIIAAAAQAVgDAQAAIAAAAQAeAEANAUIAAABQAYAVACAqQAAAIAGgBIAAgBQAQgKAPgMIABAAIAAgBIABAAIAAgBQAhgUAngNQAYgHAaAHQARAFALAMQAIACADAGIABABQARAWABAnIAAACIAAABIAIgDIAQgHIAAAAQAEgCACABIABABQAhgQAlAJQASAFAOAJIATAKIAKAEQAVAVAQAaQARAcgDAmQAXACAaABIAAgBQAEAEAGACIABAAQAbAJAQAUIABAAQAOAYgCAkIAAABIgNAdIAAABQgJAKgLAIIgBAAIAAABQgFAMgLAFQABALALACIABABQAcAUAMAkIABABQACACACADIAAAAQACADAAAEIAAABQADABABAEIAAAAQAHAhgPAYIAAABQgEABgCAEIgBAAIgBABQgQAQgWALIAAAAQgPAJgMALQAIAHAQAAQArABAXAWIABAAQALAMAJANIAAAAQACARgDAWIgBAAQgFAHgDAJIgBABQgVAQgeAJIAAAAIgsASIgBAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgBAAAAAAQAPANAJASIAAABQAJAagHAYIgBABIAAABIAAABIAAABQgIAbgXANIAAAAQgFADgCAEIgBAAQgRAJgQAKIAAABQgHAxglATIAAAAIgUAGQggAFgjgFIAAgBQgFgGgHgDIgBAAQgLgEgGgIIgBAAQgHgDgFgEIgBgBQgFgEgHgBIAAABQgCAPgGAKIAAABQAAAGgCAEIAAAAIgKAQIgBABQgMASgVAIIAAABIgGAFIgBAAQgPACgMAFIgBAAQg2gBgegaIgBAAQgCAGgFAFIAAABQgKAOgMALIAAABQgMAJgNAIQgZAPgcAKIgWABIhCADIgMABIgQgFIgFgCIAAgBQgDgCgBgDIgBAAIgIgEIAAgBQgEgFgFgDIAAAAIgUAVIAAABIgJAIIgCAAQgNAQgUAMQgcAQggAEQggAEggAAQgUAAgXgCgAhhIiQADAFACAGIACALIACAAQALASAQAOIACACQAOAJAQAIQAFACAFAAQAtACAvAAIAHgEIAJgCQAMgMAQgEQANgNAQgHQAFgKAJgFIAEgDIACgBIABAAIAAgBIAJABIAEgFIALgOIABAAIAAgCIAAgBIgBgPQABgQAMAFIABAAQADAHgBAMIAAABIAAAAIAAABQAFAOALAHIAAABIAAAAQApAbA7gQQAJgCANgCIAAgBIAPgGIAHgDIAAgBQAOgCAJgHIABAAIAAgBQARgMAOgPIABAAIAAgBIAAgBQARgOACgdQAAgDADgCQAGgCAAAEQAFAGACAJIAAABQAOAPAXAFIACAAQADAGAKgBQAJgBAIADQANgBAOgDIABAAIAAgCQAbgIAPgXQANgUABgfIABgKQACgGAFgFIABAAIAHAHIAGAGQAPAOARAMIABABIAOACIABAAQAQAOAcgDIABAAIAGgDIAAgBQAGABAFgBIABAAIAEgBQAUgFANgNIABAAIAAgBQAJgJABgNIAAAAIgCABQgQAHgMgKIgBAAIAAgNIABAAIAAgBIAAgEQADgOALgGIABAAIADADIAAgIIAAgJIABgDIADgDIACgBIABgBIAAAAIAJABIACAEIACgCIABgBQALAHACAPIABABQAegKAWgaIAAAAQABgGAEgDIABAAIADgMIAAgCIAAgBQAAgigSgQIgBAAIgIgBIAAgBQgEgBAAgDQgNgCgOAAQgOgBgBgMIACgDIABAAIAAgBQAWgFAZgDIABAAQAFgEAKAAIABAAIAAgCIAOgEIABAAIAAgCQAigLAcgRIABAAIAAgCQAHgGAFgIIAAgBQgCgNgDgKIAAgBIgBAAIgBgJIgBAAIgKgOQgJgHgLgFQgMgEgOAAQgfgBgWgJIgBgBQgDgCABgGQAWgYAfgPIABAAQAUgNAMgVQAFgJgCgMQgDgQgHgOIgOgaQgJgTgRgKQgGgDgHgBQgMgCgDgKIAEgFIAAgBIAAgBIAAgBQAZgPATgVIABAAIAAgBIABgBIABAAIAAgBQASgcgMgjIgBAAIgTgYIAAgBIgBAAIAAAAQgGgCgDgEIgBAAQgMgCgLgIIgBAAQgbgEgaABIgkASQgNAGgDgHQgCgDAAgFIABAAIAAgBIABgBQAOgPAZgEIABAAQAHgFADgJIAAgBQgBgkgSgUQgPgRgQgPIgFgEIgBAAQgZgQgggIIgEgBIgBAAIgUAAIAAAAIgHABQgPABgMAEIgDACQgaALgSATQgNAPgCgUQACgBACgDIABgBIADgHIAEgHIAFgNQAEgUgMgRIAAgCIgBgHIgBAAQgJgHgIgIQgJgGgKgCQgmgHgcAMIAAABQgaAMgYAOIgBAA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AEgNACgPIAAgCQgFgFABgLIgBAAQgJgEgOAGIgBAAIgDA2IAAABQgDADgDAEIAAAAIgBABIgBACIAAABQgDALgGAHIgBAAIgLgBIgBgBQgXgVgMggIAAgBQABgJgEgFIgBAAQgLgHgJAHIAAgEIAAgGIAAgCIAAAAQAGgEAIACIAAgBQAIAAgDgGIABgBQgFgFAEgHQAFgIgGgDIAAgBQAHgBgEgIIAAAAQgDAHgJgBIAAABQgFAKgFAOIAAgKIAAgDIAAgHIgBgIIAAgKIAAgEIAAgHQAEgGAGgDIABAAIAAgCIACAAIAAgBIAKgLIAAgBIAJgDIABAAQACgFAEgDIAAgBQAOgEALgFIABAAIAAgCQATgFAQgIIABAAIAAgBQANgCALgFIAAAAQAMACAKgEIABgBQAOAFAMgEIABgBQAGADAKgCIAAABQADAGANgEIAJgCIALgCIAAgBQAXgDASgGIAAgBQgBgJALAIQADADAFgBQAFgBACgFIAAgBIgEgOIAAAAQgKADgKgCQgEgBgCABQgJAEgEgLIAAAAIgBgEQAXACATgBIAAgBIgBAAQgGgJABgSIgBAAQgKhVgShEIAAgBIgCgLIgBAAQgDgOgFgJIAAAAIgBgBIAAAAQgDgIgEgFQAGgEgCgJIABAAIAAgBIAAgCQAHgFAMABQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAAAAIgBgBIABAAIAEABIABAAQACAGAHAAQAVACAYgBQAiALApABIAQABIAMABQALAFAQABIAAABIAdgBIABAAQAEADAGACIABABIBCAHQAcADAYAAIA1ACIABgCIADAAIAAAAQAGADAHAAIABAAIAEAAQAEAAABADQAEAPgOAAIAAAAIgBAAIgMgBIAGALIAAABIAAAAQABAGAEADQgEAEAAAIQABATgFAMQAEAJADgQQAEgUABgNQABgHAEADIAAABIgBAuIABAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAVgCAWgBIAYABQAKAAAJgDQAGgKAKgCIABAAIABgQIAAgCIAMgGIAAgBIAqgFIAAgBQAXAEAQgIIABgBQANABAOgEIABgBIABAAQAAgHAHgCIABAAQAtAAAmAGQAmAGAqAJQACACAEABIAAAAQARgCAMAJIABAAQASgBAQAEIABAAIAJAVIABAAQASgFARgGIABgBQAQAKANANQACAEABgJIABgEIAAgCIAAgBQAOABADARIAAABQAJAFgCAQIAAABQAKAKAHAMIAAABIgHASIgBAAQABAWAIAQIAAAAIAEAdIAAABIAAABIABABQAEALgBAPIgBABQgCAEgFACQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgFgQgHgMIgBAAIgMgIIgCAAQgNgGgPADIADAMIAAACQAJAKAFAPIABABQAGAVgCAdIgBAAIAAABQACAOgHALIABABQADAPgIAIIAAABQgBALgEAGQAGgaAAgfQAAg/gXgqQgYgsghAAQgIAAgIADIgBABIgEgBQgHAAgHADQgLgGgLAAQgIAAgIADIAAAAIAAgBQgEADgBAFIgCABIgIADQgJALgGAMIgOAfIgCABQgCAGgGAEIAAADIAAAKIgCADIgCADIAAADIAAAKIAAADIgCADIgBABQAAAXACAdQAGA7AKAVIAJARIACAAQAGgBABgDIAVAFIgBABQgNADgOAGIgHADQgRAMgRANIAAAAIgfAWIAAABQgfARgZAXIgCAAIgTAHIAAABQgTAMgWAJIAAABIgPALIAAABQABAJgCAHIgBABQgJAJgFgNQAEgBABgDIABAAQAAgHgGADQgJAGgLAFIAAABIgRANIACgVIAAgKQAEAJAIgEQALAGAGgMQAJgRABgVQABgkgRgcIgCgMQgBgKgDgIQADgEABgGQACgMgGgLQgSgcgdgHIgBgCQgDgLgMgCQgsgFgsgBQgLADgJAIIgEAEQglAagfAjQgSATgNAXQgEAHgCAJQgZAPAKAiQADAMAKAFQAeAPAcgQQAQgJAJgQQAUgqAAgwIAZgYIBQADQAFAAAFACQAHADAEAFQAGAJAGAFIABACQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQAAALABALQgggyhBAJQgUAQgKAbQgEAKgCAKQgKAxAAA0QAAA5AsAlQADADAEABQAaAEAbABQAIgEAIgGQAJgHACgLIACgGQAJABAGgFQgCAIgEAFIAAABQgGAVgNANIAAABQgGAFgEAGIgCAAQgJAEgGAGIgBAAIgJABIAAAAQgJADgGAFIgCAAIgEAAQgLAAgLgCgApWE3IABAAIABAAQAPAEANABIABAAQAJAHAPACIAAAAQAKADAJAFIAAABIAEABIACAAIABAAIABABQAmAJAkALIABABQAoALArAIIAAABQAOACANAFIAAAAQAIAAAHACIAAABIAgAEIAGABIAAABIBXANIABAAQAEgOgCgUIAAgBIgBAAIgkgIIgBgBQgdgGgUABIAAABQAAAOgGAHIgBAAQgHgLgBgRIgBgBIg+gNIgCAAQgZgDgXgGIgBAAIgFgBIgBgBIgsgLIgBgBIgmgIIAAgBIgBAAQgUgEgSgHIgBAAQgLgEgMACIAAgBIgFgBQgJgDgLgBIgBgBQgDgBgBgDIgBAAIg4gOIgBgBIgIgCQgIgCgJAAIgBgBQgHgFgLgBIgBgBIgOgEIgBAAQgKgBgIgEIgHgDIgCAAQgBADgFAEIAAABQABAFAIABQADAAACACIAEAFQADAGAHACIAAACQAAAEACACQAVALAcAFQALACAEADQAGgCADACIABAAQAEABACADIAAABQAIgBADAEIABABIAFAAQAHAAAFACgAqsE2IACAIIAaAnIANASQAEAFAHABQAkACAkABIAJgIQgLgLgPgEIhAgPIgPgDIgJgDIgBgBQACgBABgFIAAgCIgBAAQgCgLABgJIgCAAIgTgEIACADgAkkFNIgEgaIAAgBQAEAHAAAKIABAAIAAgBIgCgTIgBgEQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgIgEgNACIgBAAQgLgEgFgKIAAgBIgIgQIAAgBQgPgEgBgSIAAALIAAABIAAAAQgDgbgCgcQADgGgBgIIABAAIAAgCQADgLgCgKIAAgBQgNACgDgOIgBgBQgGgCgFABIAAAAQgJgNgRgDIgBgBQgJgCgHgFIgegFQgNgCgMgEQgSgFgTgDIgTgDIgCgBIgQgCIAAAAIgXgCIgBAAQgXABgYgCIAAACIAAABQACAYAFAbIAAABQgBAHACAFIAAABQADAHgBAFIgBABQAGANgEAOIAAABQACACgBAGIAAABIAEAPQAEAOgHAHIgBAAQgHgDgCgHIAAgCIgBgPIAAgBIAAgBQgDgVAAgYQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAAAAAQgJADgCALQgDANgHAKIAAABQgBANgHAHQABAJABAFIgBACIABABQAWAEASAIIAAAAIADABQAIADAJgCQATAJAVACIACAAQALgDgDgGIgBAAQgHADgCgHIgBAAQgDgeABggIAAgCIAAgBIgFgrIgBAAIgFgLQAFgBgBgLIAAgBIAAgBIAAgFQAGgCAEACQADACABAFIABAYQAJAGgCAEIgBAAQgKAFAEARQAFASACASIABAWIABAMQACAEACgBIACAAIABAAQAHgGAKgDIAAAAIABAAIAAAAIgBgaIAAgBIgBAAIgEgqIAAgCQgCgIgDgHIABAAQACgJgDgKQACgHADgBQADAAAEAFIAAABQAAAHABAEIAAABQAFAJABAOIABAzIABABIAFANIAAABQAAARgCAOIgBABQgFAGgEgHIgBgCIgDAAQgJAAgIAIIAAABIABABQAJACALAAIACAAIAIAEIAAABQARACAOAFQAPAGAPABQAEAEAJAAIACAAQAIAFAMADIAAAAIANACQAkAFAeAGIAFAAQAPAGATACIABAAIAAAAgAlBC6IAAABQgBAFgHAEIAAABQgCAKgDAHIAAABIACArIAAABQALAMAPgJIABAAIAAgBQAGgIADgKIAAgCIAAgBIAAgBIAAgEQAEgMABgPIAAgBIABAAQABgMgCgKIgBAAQgBgFgDgDQgFgDgCAEIgBABQgCgLgNAAIAAAAQgJAKAHAIgAgqBbIABAAQAPAEAMAGIAAABQAJACAFADIABAAQAFAJAHAIIAAABQAGADABAIIAAABQAJAEAFAJIABABQAOASAHAYIAAACIAAABIAAABQAJADAAANIAAABIAHAaIAAABIAAAAQAPgKARgJIABAAIAAgBIAAgBQAKgDAGgHIAAgBQAVgGASgJIAlgRIAAgCQAHgCAFgFIABAAQACgMABgMIAAAAIAAgBIAAgIIAHgWIABgBIAAgBIAAgEQAJgSAEgXIABAAIAAgBIAAgBIABAAIAAgBIAAgCIAEgIIgCgBIAAgCQACgDADgBIAGgOIAAgBIgBgIIAAgCIADgDIABgDIAAgIQAFgGADgFQAEgLAJgIQAAgEACgEIAFgOIACgFIABgBIAGgCQADgIAHgDQAJgEACgLIACgBQAFgBACgDIAXAFIARgLIAOgJQAKACAKgEQAdgNAdAKIACACQAJgCANADQAGACAAAJIABAAQABgMgDgNIgBgBQgFgGgHgEIgBgBQgKgTgSgLIgBAAQgPAEgMAIIAAAAQgDAOgMACIgBABQgGACg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");
	this.shape_5.setTransform(-4.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.6,-64.9,246.5,128.8);


(lib.WhatKindBubble2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAVmyQgCgIAAgLQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAPgGAMQALgEANAAQAeAAAVAVQAGAGAEAHQABgeAVgVQAWgWAfAAQAfAAAVAWQAWAWAAAfQAAAIgBAHQgNADgKAIAGtl0QAEgGAGgGQAXgXAhAAQAgAAAXAXQAXAXAAAhQAAAKgCAJQgGgDgGgBAF3l7QAJgDAKAAQATAAAQAKQgCADgBACAI7k1QAIAEAHAGQAQAQAAAXIAAAAAjgnLQABgXARgRQATgTAbAAQAaAAATATQATASAAAbQAAAEgBAEAJmj7QANAGALAKQAUAUAAAdQAAAMgEAKALqg9QAGgBAGAAQAeAAAVAVQAVAVAAAcQAAAXgNATAKSihQAFgBAHAAQAeAAAVAVQAVAVAAAeQAAAIgCAHAmlmKQgDgLAAgMQAAgeAUgVQAVgUAdAAQAeAAAVAUQAPAQAEAUQADgEAEgEQAUgTAcAAQACAAADAAQAAACAAADQAAAGABAFAo8lLQACgDADgDQAPgPAWAAQAVAAAPAPQADADACACAnglOQAAgCAAgBQAAgYAQgRQARgQAXAAQACAAABAAQABAEACAEAkcmwQgCADgCADAsCiFQgKgOAAgSQAAgXAQgQQAQgQAXAAQAEAAAEAAAsFhCQgHgNAAgRQAAgVAKgQQADgEACgEQAGgGAHgEArvBDIAAAAQgGABgGAAQgbAAgUgUQgTgSAAgcQAAgaATgTQAOgNASgEAq2DcQgegBgVgWQgXgWAAgfQAAgeAUgWApwFAQgcgDgVgUQgYgYAAghQAAgLADgJQABgEABgEAk+IHQgVgYgBggQgEAAgFAAQgmAAgbgbQgcgcAAgmQAAgIABgIQgfAOgrAAQgiAAgbgJApwFAQgBgCAAgCQAAgFACgFApUFfQgagNgCgS");
	this.shape.setTransform(21.8,-31.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.8,1,1).p("Ag0qYQACgEAEgEQASgRAYAAQAYAAARARQAHAHAEAJADGkmIAAAAQABgFAAgFQAAgEAAgEQgBgDgBgCQgCgDgCAAQgFgCgFAGQgDADgBAEQgBACgBACQgBADgBACQgCAKABAHQABAJAFABQAEABAFgGACYA4QgEAEgFAAQgMAAgJgUQgJgUAAgaQAAgdAJgUQAJgUAMAAQAMAAAIAUQAJAUAAAdQAAARgEAQQgCAHgDAGQgFALgGAFgAI7iXQABgFAEgDQAGgHAJAAQAIAAAGAHQAGAFAAAJQAAAJgGAFQgGAHgIAAQgJAAgGgHQgBAAgBgCQgEgFAAgHQAAgDABgDgAFUhrQAJAAAHAGQAGAHAAAKQAAAKgGAHQgHAHgJAAQgKAAgGgHQgHgHAAgKQAAgKAHgHQAGgGAKAAgANLiVQABAIAAAJQAAAIgBAHAhKEEQgOAEgOAAQgDAAgDAAAhHEkQgDgNAAgOQAAgDAAgCQAAgGABgGAokoNQAAgJADgHAp1nhQADgDACgDQACgBABgBAnVjuQAGgHAHgCIAAAAQACgBACAAQAGAAAFADQAGAEAEAKQADADABAEQAAABAAAAQABACABACQABAFABAGQABABAAACQgCABACACQAAAEAAAFQAAAKgBAIQAAADgBADQAAAAAAABQgDAIgEAGQgDAHgEADQgFAFgGABQgBAAgCAAQgJAAgIgKQgCgCgCgEQgDgFgCgFQgEgNAAgQIAAAAQABgNACgKQACgIAEgHQACgEACgDgAkXEtQARAQAUAHAohDDQAKADAKAGQAJAFAJAIQAZAaAAAjQAAAkgZAZQgZAZgkAAQgjAAgagZQgZgZAAgkQAAgjAZgaQAagZAjAAQAMAAALADgAqYGWQgZAAgTASQgRATAAAZQAAARAIAOQADAHAGAGQATASAZAAQAaAAASgSQAGgGAEgHQAIgOAAgRQAAgZgSgTQgSgSgaAAgAsRKyQgYAAgRgRQgRgQAAgYQAAgXARgRQARgRAYAAQAXAAARARQAQARAAAXQAAAYgQAQQgRARgXAAg");
	this.shape_1.setTransform(18.4,-8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("ABjCGQgJgUAAgcQAAgdAJgUQAJgUAMAAQAMAAAIAUQAJAUAAAdQAAATgEAQIgFANQgFALgGAFQgEAEgFAAQgMAAgJgUgAGUAuIgGgBIgBgBQgDgFAGgDIADgBIACAAIAWgDIACAAIAAAAIAFAAIAFAAIAUgBIADAAQALgBAMgCIAKgCIAEgBQAIAAgCAHQAAADgEABQgOADgPABIgKABQgJACgKAAIgCAAIgHAAQgJACgJAAIgFABIgFAAIgCAAgAGVAcQgFAAgFgCIgBAAIgBgBQgCgFAFgCIAHgBIAFgBIAJgCIAGgCQADAAADABIASgCIANgBIAcgDIAIgBQAIgBgBAIQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAIgRADIgdACIgFABIgOAAQgCADgFAAIgEAAIgKACIgIABIgBAAgAF9AEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgDgDAFgCIAGgBIARgDIAVABIAKgCIAcgCIAOgCIAGABIACABQADAGgGACIgEABQgOABgPAAIgKABIgBAAIgSAAIgPABIgPACIgFAAIgEAAgAF2gNIgBgBQgEgGAHgDIACAAQALgBALgCIAGACIACABIAIgBIAIgBIAGgCIARgDIALgCQAJgBAIgDQADgBADADQAEAEgEAEIgFACIgQADQgGAAgEACQgEACgFgBQgHADgIABIgCAAQgMACgLgCIgBAAIgUABIgGAAgAnsg1IgEgGIgEgLQgEgMAAgQIAAgBQAAgMACgLQACgIAEgHIAEgGQAGgIAHgCIAAAAIAFAAQAFAAAFADQAGAEAFAJIADAHIABACIABAEIACAKIABADQgBAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIABAKQAAAJgCAIIgBAGIAAABQgDAIgDAHQgEAGgDAEQgGAFgGAAIgCABQgKAAgIgKg");
	this.shape_2.setTransform(20.7,-18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AiLAtQgGgHgBgJQABgKAGgHQAHgHAJAAQAKAAAGAHQAGAHAAAKQAAAJgGAHQgGAHgKAAQgJAAgHgHgABvgQIgBgCQgFgFAAgHIABgHQACgEADgEQAGgGAJAAQAJAAAFAGQAHAGAAAJQAAAIgHAGQgFAGgJAAQgJAAgGgGg");
	this.shape_3.setTransform(64.9,-20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC6633").s().p("AgcA6QgPgBgIgIIABgEIAAgBQACgZgKgQQAAgOgHgIQgGgJgBgOQASgFAVAFQADAAACAEIACABQALAYANATIAAABQACASAOADIACAAQABgLgFgIIAAgBIAAgBIgBgPQADgGgBgGIAAgBQAGgKADgNIACgBIABgDQACgCADgBIAAAAQALAIACASQABAIADAHQgGAKgKAFIAAABIABAHIAAAAQgCAFgFACQABAJACACQADACAEgFQAGgGAFgJQAHAAAJgCIAAgBQADgDgDgIIgBAAIAAgBIAAgLQAMgQAOgPIABAAQAEgDAEAEIAAABIAAABIgBABIgTAhIAAABIAAACIAAABQAAAFgFACIgBABIgEAFQACARAMgGIACgCIABAAIAAgBQAEgIgCgKIAAAAIAEgEIABAAQABgPAKgHIABAAQAAgEACgCIAAgBIACgBQAGgFAHgEIABAAQgBAHgFAGIgCACQgGAGgEAJIgBAAIgEAHQgBAIACAHIABACQACAIAHADIABAAIABgBQACACADAAIABABIAFABQAGABAGgBIAAAAIAAgBQAPABAOgDIAFAAIg4AHIgBAAIgZADIAAABQgFABgCADIAAgBQgYAAgXAGIgUAHIgBAAQgUADgSAGgAhvAiIgBAAIgagJIgBgBQgCgKgJgCIgBgCQgIgNgLgMIAAgBIgDgIQAIgFANgCIACAAQAHAWAIASQAEAIALABQAGgFgIgEIgBAAQgBgGgEgDIgBAAQgBgDAAgFIAAgBQgDgDgCgEIgBAAQgEgJAHgHQACgDAGAAIABgBQAIABAFAFIABAAQADAHAEAFIABAAQgBAGADADQACADABADIAIAaQACAJgFAGIAAABIgTgFgAC6ASIAFgDIAHgIIAAgBIAAgBIABgBIABgBIABABQgCAFAAAHIgBABIgPADIADgCgACdATIABgBIgBgBIAAAAIgIAAIgBAAIgEAAIgJABQgCgCgEAAIgBAAIAAgBIgIAAIgCgBIgBgBIgCgBIgCgCIgDgCIAAAAIgBgBIAAgBIAAgCQAKgTAPgPIAAgBIALgDIABAAIAAAAQAEACAFABQAHABAFADIACAAIABAAIAAgBIAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgVgGQACgEADgDIACgBIABAAIADgDIAHgDQACAEAEgDIAAAAIAOgEIAEgCIAEgBQAIAAAEAFIgBABIAAAAIgBACIAAABIgBAAIgBACIgFAFIgBABIABABIAAABIACAAIAEgFIACgBIADgCIAAACIAAABIAAAXIABAAIAAABIgBACIgBABIAAAAIAAABIgCADIgDgBIgDgBIgBAAIAAgBIAAAAIgCAAIAAAAIgBABIgBAAIAAAAIACgKIgBgIIgBgGQgCgCgCgBQgFgBgGAGIgEAGIgBAFIgCAFQgDAJACAIQABAGAFABQAEACAFgGIADAAIAAABIAAAAIAAABIABAAIADAAIADABQgDAFgEAEIgFADIgDABIgCABIgMABIAFgFIACgBIABgBIACgCIABgBIgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIAAABIgCABQgDACgBADIgCACIgCADIgBAAIAAABIgCABIgCAAgAikAQQgLAAgNgEIAAgBQgEgKgIgDQAAgBAAAAQgBgBAAAAQgBAAAAABQgBAAAAABQgGAFgBgNQAGgBADgEIABAAQAMgDAFAEIABAAIAHAIIABAAIAAABQAKAJACAMIgCAAgABuAOIAAgBIABABIgBAAgADSgKIgCgBIAAgBIABgBIABgBIAAgBIABAFIAAAAIgBAAgAgIgcIAAgCQgHgEAAgLIAAgBQAMgCAOgBIABAAQgEALgBAMIAAAAIgHAOIAAACQgFgHgDgLgAA2gfIgFgTQARgDADAHIABABIgBAAQgDAJgGAGIgEACQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBg");
	this.shape_4.setTransform(18.8,-36.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AE4DcIgEgHIAAgBIAAgIIAAgFQAGgEAHgCIABAAIArgNIAbgIIAAAAIA4gQIAGgCIAAAAIAFgCIAAgBIAAgBIAdgHIABAAQAJgLATAAIABAAIAAABIADgBQABgBAAAAQABAAAAABQABAAAAAAQAAAAABAAQAEAFgMAEQAXgFAXgNIABAAQAGgFAHAAIABAAQAHgFAJgEIACgBIABAAIAAABQADAEgEACQAFAFAHgJQAGgJALADIAAAAQAEAGACAIQgSAKgTAIIgSAHQgKAEgLACQgSADgQAEQgbAHgWANQgMAAgLAFIgBAAIAAABQgiAPgkANIAAABIgCAAQgIAAgGADIgBAAIAAAAIgPAFIgHABIgBAAIgDgBQgDgBgEABIgHACQAAAFAGgBIABAAIAAABIAAABQgLgCgFgGgAE2DMQABATATgHQADgBABgHIgBAAQgIAJgJgEIgBAAQgEgEACgIIgBAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBAAgAF1DLIAAABIAAABQgIACgFAEIABAAQAFABAJgDIAOgFIgCgDIgBAAIgDgBQgGAAgEADgAEhDVIgcgCIAAgBQgJgCgFgEIgBAAQgHAAgFgBIgBgBQgEgEgHgCIgBgBQgKgNAAgWIgBgBIgEgJIAAgBIAAgKIAAgCIgBgLIgBAAQgDgHgFgEIgDgCIAAAAQgOgJgFgPIgBAAQgHgHgKgDIgBAAQgJgEgNABIAAgBIgMgFIgBAAQgOAFgPADIAAABIgBAAIgIAEIAAACIAAAAQgFAKgIAJIAAABQAAAGgBAEIgBABIAAADIAAACIgBAAIAAABIAAABIgCAAQgHgDgCgFIgBgCIgCAAQgDAAgEACIgFAEIgBAAQgGgCgHABIAAgBIgFgCIgBgBIgBAAIgdgCIgBgBQgcgIgZgCIgBgBQgdgGgbgJIgBgBQgZgCgZgHIgBgBQgigNgpgHIAAgBIgOgHIgCAAQgDABgFgBIgBgBQgFgFgIADIgDgBQgbgKgdgEIAAgBQgQgJgSgDIAAgBIgBgBQgEgNgHgNIAAgCQgCgJgDgJQgEgMgIgJQgMgPgUgIQgXgGgZgEIgBAAQgkgEgYAOIAAACIAAABIgBAAQgEAGgCAJQACAWAFAUIAAAEIgFABIAAgBQgFgKgMACIgBgBQgDgEgHAAIAAAAIgJgCIAAAAQgNgKgPgIIAAgBQgBgEgFgBIgBAAIAAgBQgFgBABgJQAEgHABgLIAAgBIAOgSQAHgJAJgIQAXgNAeACQAKABALACIACABIAfAGIADAAIABAAIABAAQAnAFAkAIIAMADIAaAGQANAEAHgDQALgEAAAGQACACAFgDIABgBIALADIABAAQAFAMAGAKIABAAQAHgIgFgIIgBgDQABgFAJAFIAFAFQACACAEAAIAAABQgBAFgFACQAFADAHAAQAFAAgHgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAMADAJADIAAABQgKAFgDgGIAAAAQgBAPALgHIACAAIAAAAQAGABAEAEIAAAAQAIAHAHgFIACAAIABgCQACgBADABIABAAQAFAFADABIABAAQAOANASgEIAAgBQADgBAFgBIACAAQABAAABgBQAAAAAAAAQAAgBAAgBQAAAAgBgCIAAgBQAFgDALADIABAAQALADAFAMIABAAQACgCgCgGIABAAIADACQACAGADADIABAAQAHAEAFAFIAAAAQANAAAKAHIAAABIAEARIABAAQAKACAKADIACAAQABAGgBAGIAAABQACAJAHAEIABABQAHgLABgMIAAgBQAoADAiAIIACAAQACACADABIABABQA0AIA2ALIACAAQANAHAOADQARAFATgBIABAAQgCgIgDgHIgBgBQgOgFgRgCIgBAAQgGgJgQADIAAAAQgGgIgRgEIgLgCQgKgDgGgDQgKgGgGADQgMgGgOABIgBAAIgzgWIgBAAQADgEAFgDIABAAQAwgJAzgNIAAAAQAygDAogFQAygFAkgGQANgBAQABQANACAOgBQAEAFAJgBIABAAQAGAJAHAIIAAABQAHADAKAAIAAgBQgBgHgOgCQgEgBAAgGQAEgGAIAIQABABAAAAQABABAAAAQAAAAAAAAQAAAAAAgBQADgHAJAHIAAABQAQABASgBIABAAQAGADAHABIAMACIAEAAIABAAQACgDAEAAIAAAAIA8AOIAeAIIAGABQANACACAIQgKADACAJIAAABIguAFIgCAAQgCgDgGgBIAAgBQgfABgbAFIgMACIgNACQgmAKgjAMIgBAAQgJADgMAAIAAABQgJAFgMACIAAABIgBAAQgIAFgJgCIAAABQgeAKgXAOIAAACIgBAAIgBABIAAACIgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAIAMAPgMQAEgEAFACQABgEAEgBIAAgBIApgMIABAAIAPgFIADgBQAagIAcgGIAGgCQATgHAUgDIABAAIAJgFIAMgEIAIgBIBHgHIAJAAQAJAAgBAEIgBAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAFgFABIgBAQQABAFACAEIABABIABAAQAFADAAAGQAAADAEACIANABIACABQAEACAFAAIAOAAIAGAAQAEgEADACIAHgDIABAAQADALAAAMIABAAQAJABgBAGIgBABQgHAFgLABIAAAAIgBAAIgHAEIgCAAIgJAAIAAABIgxAQIAAABIgCAAQgLAEgFgIIAAgBQgBgSgEgRIgCgKQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgDIgGgQQgBgEgCgCQgCgCgDAAQgWABgXAEIgMACIgWADIAAABIgCAAQgHAAgDAFIgCAAQgFAAgDgCIAAABIgHADIAAABIAAABIgBAAIgPASIAAAAQgGADgHgJIAAgBIgIgHIgCAAIgGABIgDAAIAAABQgNACgLAEQgLAEgKAGIAAABQgCAEgEACIAAABIgHAOQgBAMAEAGIABACIABABQAKARAUAHIAAABQAIgCALAAIAAABIABgBIAAAAQAIgCAFgFIgBAAQgGgFAJgFIABgCIAAgEIADgDQANgOAKgUIADgGQAEADABALIABAAIAAABQAAAJACAIIgBAAIgHAIIgLAMIAAACIgBAAIgKAPQgBAHADACQACABAGgEQAEgDgBgIQAFgKAHgFIAAABQAGABADAKIABACIACACQAIABADgGIAAgBQACgHgBgKIgBgBIAAAAIABAAQAFACAFAAIgCAGIAAABIgDABQgGACADAGIABABIAGABIAAAAIgBAAQgMADgDAMIAAABIgBABQgOADgLAGQgLAFgIAGIgCABQgRAFgVACIAAgBQgIgEgIAEIAAABIgBAAIgBAAIAAACIAAABIgBAAQgEANgBAQIgBAAgAIFBHIACgBIgCgBIAAACgAk3h0QgDgDgGAAIgBAAQgJgBgHgEIgBAAQgfgDgbgGIgMgDIgGgCIgBAAIgLAAIAAgBQgNgGgNADIAAgBQgRgHgTgEQgPgDgQAAIAAgBQgKgEgMgCIAAgBQgFgCgBgFQAbgOAggFIAAAAIABAAQAXgIAYgFIAggIIAMgDIAEgBQAWgDAXgGIAKgBQARAAASAIQAGABAEgCIABAAQAFAEAIACIABAAQARgCARAGQAGACADgEIALAHIAAABQAHgBAEABIABAAQAHAFAGABIACAAQAEAFAKAAIAAAAQAVACAQAHIADABQAGABACAEQABADgBAEQAMAKgRABIAAAAIgBAAIgQACIAAAAQgGgPgGALIAAAGIAAABIgBAAQgMgCgNAGIAAAAQgDgEgFACIgBAAQgLgFgKADQAAABAAAAQAAABAAAAQAAAAAAAAQABABAAAAQAFAEgGAFIgBAAQgMACABAJIAAABQgMAEAIgKIgBAAQgFAAgBgCQgEgLgJgFIAAgBQADgIAKAAIAAgCQgNAAgKAGQACAMAIAEIAAABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABIAAAAIAAABQgGAGgIADQgKgBgHAEQgKAFgLAEIgBAAgAigitIAGAHQAEAFAJgGIAAADQADgEgBgBQgBgBgFACQAAgGgDACIgBAAQgCgEgLgBQAAABAAABQABAAAAABQAAAAAAAAQAAABABAAgApwh3QAOgaAbgLIABAAQAIAFAGAGIABAAQgHADgLgBIgBAAIgmAag");
	this.shape_5.setTransform(19.6,-27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AB4EMIgFgGQgUgGgOgTIgBgCIAAgDIgDgDIgBgEIgOgRIgBgBIAAgCIgBgEQgFgIABgKIgEgCIAAgBIgDgIIAAgBIAAgOIgBAAQgCgKgDgIIgBgBQgEgEgGgCIgBgBQgcgIghgGIAAgBIgHgFQgMABgLgEQgRgHgRgFQgPgEgPgCIgBgBQglgRgtgEIAAgBIgfgKIgBAAIgJgFIgBAAQgKgBgIABIgBAAQgDAAgCgGIgDABQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBgBQgSgEgSgHIgBAAIgJAAIAAgBIgEgEIgCAAIgPgBIAAgBQgSgEgPgGIgBAAIgNgCIgBAAQAAARgDAOIAAgBIgMARIgKALIgCABQgLADgIgFIgBAAIgKAAIAAgBQgNgFgJgIIgPgDQgNgRgZgJQgMgRgFgXIgBgEQgFgJgBgLIAAgDQgFgUgCgXQACgIAEgHIABAAIAAgBIAAgCQAYgOAkAFIABAAQAZADAXAGQAUAIAMAPQAIAKAEAMQADAIACAKIAAABQAHANAEAPIABABIAAABQASACAQAIIAAABQAdAEAbALIADABQAIgEAFAGIABAAQAFABADgBIACAAIAOAIIAAABQApAGAiANIABABQAZAIAZABIABABQAbAJAdAHIABAAQAZACAcAIIABABIAdACIABABIABAAIAFACIAAABQAHgBAGACIABAAIAFgEQAEgCADAAIACAAIABACQACAFAHADIACAAIAAgBIAAgBIABAAIAAgCIAAgCIABgCQABgEAAgGIAAgBQAIgIAFgLIAAAAIAAgCIAIgDIABAAIAAgBQAPgEAOgFIABAAIAMAFIAAABQANgBAJAEIABABQAKADAHAGIABAAQAFAPAOAJIAAAAIADACQAFAFADAGIABABIABAKIAAACIAAAKIAAACIAEAJIABAAQAAAWAKANIABABQAHACAEAEIABABQAFACAHAAIABAAQAFAEAJABIAAABIAcACIABAAQABgQAEgNIABAAIAAgBIAAgBIABAAIABAAIAAgBQAIgFAIAFIAAABQAVgDARgFIACgBQAIgGALgFQALgFAOgEIABAAIAAgBQADgNAMgDIABAAIAAAAIAHAAIAFgBQAJAAAKgCIAGAAIACAAQAKAAAJgCIAKgBQAPgBAOgDQAEgBAAgDQACgHgIAAIgEABIgKACQgMACgLABIgDAAIgUABIgFAAIgFAAIAAAAIgCABIgWACIgCAAIAAgBIACgGIAJgBIAKgCIAEAAQAGAAABgDIAOAAIAFgBIAdgCIARgDQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQABgIgIABIgIABIgcADIgNABIgRACQgEgBgDAAIgGACIgJACIgFABIgHABQgFACACAFIABABIAAABIABAAQABAKgCAIIAAABQgDAFgIgBIgCgCIgBgBQgDgLgGgBIAAAAQgHAFgFAJQABAIgEAEQgGAEgCgCQgDgBABgHIAKgQIABAAIAAgBIALgNIAHgHIABgBQgCgIAAgIIAAgCIgBAAQgBgKgEgEIgDAHQgKATgNAOIgDADIAAAEIgBADQgJAFAGAFIABAAQgFAEgIADIAAAAIgBAAIAAAAQgLgBgIACIAAAAQgUgIgKgRIgBAAIgBgDQgEgGABgLIAHgPIAAgBQAEgCACgEIAAgBQAKgGALgEQALgEANgCIAAgBIADAAIAGgBIACAAIAIAHIAAABQAHAJAGgCIAAgBIAPgRIABgBIAAgBIAAgBIAHgDIAAgBQADACAFAAIACAAQADgEAHAAIACAAIAAgBIAWgEIAMgCQAXgDAWgCQADAAACADQACACABADIAGAQIAAADQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIACAKQAEAQABATIAAABQAFAHALgEIACAAIAAgBIAxgQIAAgBIAJAAIACAAIAHgDIABAAIAAgBQALgBAHgFIABgBQABgGgJgBIgBAAQAAgLgDgLIgBAAIgHACQgDgBgEADIgGAAIgOAAQgFAAgEgCIgCgBIgNAAQgEgCAAgEQAAgGgFgDIgBAAIgBgBQgCgEgBgFIABgOQAFgBABgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBQABgGgJABIgJAAIhHAIIgIACIgMADIgJAFIgBAAQgUABgTAHIgGACQgcAGgaAIIgDABIgPAFIgBAAIgpANIAAAAQgEABgBAEQgFgCgEAEQgPAMgIgMQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABAAIAAgCIABgBIABAAIAAgBQAXgPAegKIAAAAQAJABAIgFIABAAIAAgBQAMgCAJgFIAAAAQAMAAAJgEIABAAQAjgKAmgKIANgDIAMgDQAbgEAfgBIAAAAQAGABACADIACAAIAugEIAAgCQgCgJAKgDQgCgIgNgBIgGgCIgegIIg8gOIAAAAQgEABgCACIgBAAIgEAAIgMgBQgHgCgGgDIgBAAQgSABgQgBIAAAAQgJgIgDAHQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQgIgJgEAHQAAAFAEABQAOACABAHIAAABQgKABgHgEIAAgBQgHgIgGgJIgBAAQgJABgEgFQgOACgNgCQgQgCgNACQgkAFgyAGQgoAEgyADIAAABQgzANgwAIIgBAAQgFADgDAEIABAAIAzAWIABAAQAOAAAMAHQAGgCAKAFQAGADAKADIALACQARADAGAIIAAgBQAQgCAGAIIABAAQARACAOAFIABABQADAHACAJIgBAAQgTAAgRgEQgOgEgNgHIgCAAQg2gLg0gIIgBgBQgDAAgCgCIgCAAQgigGgogDIAAABQgBAKgHAKIgBgBQgHgDgCgIIAAgBQABgGgBgGIgCAAQgKgDgKgEIgBAAIgEgRIAAgBQgKgHgNABIAAAAQgFgGgHgEIgBAAQgDgDgCgFIgDgCIgBAAQACAGgCABIgBAAQgFgLgLgEIgBAAQgLgCgFACIAAACQABABAAABQAAABAAAAQAAABAAAAQgBAAgBAAIgCAAQgFABgDACIAAAAQgSAEgOgNIgBAAQgDgBgFgFIgBAAQgDgBgCABIgBACIgCAAQgHAFgIgHIAAAAQgEgEgGAAIAAAAIgCgBQgLAHABgPIAAAAQADAHAKgGIAAAAQgJgEgMgDQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAHAEgFAAQgHgBgFgDQAFgBABgFIAAgBQgEgBgCgCIgFgEQgJgFgBAEIABADQAFAIgHAJIgBgBQgGgKgFgMIgBAAIgLgDIgBABQgFAEgCgDQAAgGgLAEQgHADgNgDIgagHIgMgDQgkgIgngFIgBAAIgBAAIgDAAIgfgGIgCAAQgLgDgKAAQgegDgXAOQgJAHgHAJIgOATIAAABQgBAKgEAIQgBAIAFACIAAABIABAAQAFAAABAEIAAACQAPAHANAKIAAABIAJABIAAABQAHgBADAEIABABQAMgBAFAJIAAABQAAANgOgHIgDAAIgOgIIAAAAIgBAAQghgMgVgWIgBAAQgBgEgEACIAAAJIAAAAIAAABQgNgJADgYIAFgOIABAAIAAgCIAAgCQAJgJACgNQAPgNACgVQAKgOAQgHIABAAIAAgBIAPgEIAAgBQAEgLANgDIABAAQAJgEAFgGIAIgBIACAAIAxgQIABAAIABgCQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBIAAgBIAAgBIACgCIAFgCIABAAIAAgBQANgDAMgGIAAAAIArgEIAMgCIAEAAIABAAIAAgCIASgBIABAAIAAgBQAkgFAhAEIAAABQAFAKAJgCQAMgBAFAJQAJABACgGIABAAQAjACAnAKQAmAJAgAOIAdAGIAAABIBzgQIACAAQATgGAagBQAZgBASgKQADAHANgCIAPgDIANgDIAAgBQA1gBA3gIIABAAQAIAFAFAIIAAABQAIABAFAFIAAABQgEAOAMAJIABABIAVAhIAAACQAHANADASIAAABQADABABAEIABAAQgBAEACADIAAABIAOASIAAABQAqAAAlAOIAHACIABABIAEABQAYAGAVAHIAyAQQAPAFATADIAAABQAJAHAIAIQANAOAIATIAAABQADAPALAIIABABQAFAGgJADIAAABIADANIABABQARgHAEAQIAAABIABAAQAAAJAEAEIAAABQgBADACAGIAAABQgCATgKAMIAAABIgBAAIAAABQgTAMgYAIIAAAAIgHAEQgPAHgRAFIAAABQgEAEgFABIgBABQgEACgIAAIgCAAIgGADIgLACIgHABIgSACQgLACgHAHIgBACIgEAEIgQAEIAAABIgJACQgeAJgcALIgIADIgBAAQgdAEgZAKIAAABQgJAEgKgDIgBAAQgDgGgGgEIgBgBQgRgCgQgDIgCgBQgWgCgQAAIgEAJQgEALgFgCQgDABgBAKQgCAJgGAEIgBABIgQAPIgBAAIgMAFQgQAGgRAAIgQgCgACTD6IABABIAHgBQAFgBACgFIgBAAQgEgCgEgBIgBAAQgQACgHgMIgBAAIgLgCIAAgBQgBgFgFAAIAAgBQgBgGgEgDIgBAAQgFgEgFgIIgCgDIAAgCQAAgIgGgCIAAgCQAAgLgLgBIAAABQgDAHADAIIABAAIAHAKIAAAAIAAADIgBAEIAIAQQAGANAKAHQgEgEgDgGIAPAEIAMAFIAAABIgBAAIgQgDIABACIAAAAIAGAAIAIAIIACABQAHABAHAAIAGAAgACTDhIABAAIAUAAIAAgBQAJgHAFgKIAAgBIACgFIAEgJIgBgBQgDgEgGgDIgEgKQgEgHgBADIAAABQgDAJgHAKIgBABIgCABQAEgPAAgUQAAgdgJgUQgIgUgMAAQgMAAgJAUQgJAUAAAdQAAAcAJAUQAJAUAMAAQAFAAAFgDQADAAADADgAE0C1IAAAFIAAAHIAAABIAEAHQAFAHALABIAAgBIAAgBIgBAAQgGABAAgEIAHgDQAEgBADABIADABIABAAIAHgBIAPgEIAAgBIABAAQAGgCAIgBIACAAIAAgBQAkgNAigPIAAAAIABAAQALgGAMAAQAWgMAbgIQAQgEASgDQALgCAKgDIASgHQATgJASgKQgCgIgEgFIAAgBQgLgCgGAIQgHAKgFgFQAEgDgDgDIAAgBIgBAAIgCABQgJADgHAFIgBAAQgHAAgGAFIgBABQgXAMgXAFQAMgEgEgEQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDACIAAgBIgBAAQgTAAgJAKIgBAAIgdAIIAAABIAAAAIgFACIAAABIgGABIg4AQIAAABIgbAHIgrANIgBAAQgHACgGAFgAE4A/QgHAHAAAJQAAAKAHAHQAGAHAKAAQAJAAAHgHQAGgHAAgKQAAgJgGgHQgHgHgJAAQgKAAgGAHgAGOBBIgGABQgFACADAFQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAJAAIAPgCIAPgBIASAAIABAAIAKgBQAPgBAOgCIAEgBQAGgCgDgGIgCgBIgGgBIgOACIgcACIgKACIgVgBIgRADgAGFAuIgCAAQgHADAEAGIABABQANAAANgBIABAAQALACAMgCIACAAQAIgBAHgDQAFABAEgCQAEgCAGAAIAQgDIAFgCQAEgEgEgEQgDgDgDABQgIADgJABIgLACIgRADIgGACIgIABIgIABIgCgBIgGgCQgLACgLABgAmtAqIAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIANgDIAAgBIAFgPIABABIAAAAIAAgBIAAgFIgBAAIgDgCQAIgLADgNQADgPgJgFIgBgBIgFgRIgBgBIAAgBIgCgFIgDAAIgQgRIgBAAQgIgBgDgEIgBAAIgFAAQgFgDgFAAIgEAAIgCAAIABAAQgHACgGAIQgHgKgKAAIgBgDIgBAAQgTAAgJAKQAAAMADAMQgDALAAAMIgFADIAAABIAHAHQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAEAEADAFQAAAAAAABQABAAAAABQAAABAAAAQAAAAAAAAQAEABACAEQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAGAJAHAHIAAAAIACAAIAEAFQAMAIAPACQABgKgCgBIgDgBQgFgFgKgEIADgEQAIAKAKAAIACAAQAHgBAFgFQAEgEADgGQAEgHACgGIAAgBIABgGQACgIAAgJIgBgKIABABQAGAEgDAHQAAAEACABIACACQgEAKgFAIQgCACgBADQgDAHABAEQgFAEgBAIIAAABQgJgJgHAMQAEAGAFADIAIgBIACACIAAAAQADgEAEAAQADAAAEAEgAI0AEQgDADgCAFIgGAGIAAABQACAIAIAEIABACQAGAGAJAAQAIAAAGgGQAGgGAAgJQAAgIgGgGQgGgEgIAAQgJAAgGAEgAhQicQABAOAHAJQAHAIgBAQQALAQgDAZIAAABIAAAEQAHAIAPABIAAAAQASgGAUgDIABAAIAUgHQAXgGAYAAIAAABQADgDAEgBIABgBIAZgDIAAAAIA4gHIgFAAQgOADgOgBIAAABIgBAAQgFABgGgBIgFgBIgCgBQgDAAgCgCIAAABIgBAAQgHgDgDgIIAAgCQgCgHABgKIAEgHIAAAAQAEgJAGgGIACgCQAGgGAAgHIgBAAQgHAEgGAFIgBABIAAABQgCACgBAEIgBAAQgJAHgCAPIAAAAIgEAEIAAACQACAKgFAIIAAABIgBAAIgCACQgLAGgDgRIAEgFIABgBQAFgCAAgHIAAgBIAAgCIAAgBIAUghIAAgBIAAgBIAAgBQgDgEgFADIgBAAQgNAPgMAQIAAALIAAABIAAAAQAEAKgDADIAAABQgKACgHAAQgEAJgHAGQgEAFgCgCQgDgCAAgJQAEgCACgFIABAAIgBgHIAAgBQAKgGAFgLQgDgHAAgIQgDgSgLgIIAAAAQgDABgBACIgCADIgBABQgEANgFAKIAAABQAAAGgDAGIABARIAAABIABABQAFAIgCALIgBAAQgMgDgEgSIgBgBQgMgVgLgYIgCgBQgCgEgEAAQgJgCgKAAQgKAAgKACgAi1iKIAEAIIAAABQALAMAIAPIAAACQAJACADAKIAAABIAaAJIACAAIATAFIAAgBQAFgGgDgJIgHgcQgBgDgDgDQgCgDAAgGIgBAAQgEgFgCgHIgBAAQgFgFgJgBIgBABQgFAAgDADQgGAHADAJIABAAQACAEADADIAAABQAAAFACADIAAABQAEAEACAGIABAAQAIAEgHAFQgLgBgDgIQgJgUgHgWIgBAAQgNACgJAFgAC/hsIAAABIAAABIgBABIgGAIIgGADIgDACIAPgDIACgBQAAgHACgFIgCgBIgBABgACYhdIACgBIAAgBIAAAAIADgDIABgCQACgDADgCIABgBIABgBQAAAAABABQABAAAAAAQABAAAAABQAAAAABAAIAAABIgBABIgCACIAAABIgCABIgGAFIAMgBIADgBIADgBIAFgDQAEgEADgFIgDgBIgEAAIAAAAIAAgBIgBAAIAAgBIgDAAQgEAGgFgCQgFgBgBgIQgBgIADgJIABgFIACgFIAEgGQAFgGAFABQADABABACIACAGIAAAIIgBAKIAAAAIABAAIAAgBIABAAIABAAIABAAIAAABIAAAAIAEABIADABIABgDIABgBIAAAAIAAgBIABgCIABgBIgBAAIAAgXIAAgBIgBgCIgDACIgBABIgEAFIgCAAIgBgBIAAgBIAAgBIAFgFIACgCIABAAIAAgBIAAgCIABAAIAAgBQgDgFgJAAIgDABIgFACIgNAEIgBAAQgDADgCgEIgIADIgDADIgBAAIgBABQgDADgCAEIAUAGQABABAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAAAIgBABIAAAAIgDAAQgFgDgHgBQgFgBgDgCIAAAAIgBAAIgLADIgBABQgPAPgJAVIAAACIAAABIAAABIABAAIACACIACACIACABIABABIACABIAIAAIABABIABAAQADAAADACIAJgBIAEAAIAAAAIAIAAIABAAIAAABIAAABIABAAIABAAgAjPh0QAIAFADAKIABABQAMAEAMAAIABAAQgCgMgKgLIAAgBIgBAAIgGgIIgBAAQgGgEgLADIgBAAQgDAEgHABQABAPAGgHIACgCIACACgABohiIgBgBIAAABIABAAIAAAAgAEyhzQAJADALgDIABAAQABgOgHgMIgBAAIAAgBIgFgOIAAgBIgPgjIgBgBQgDgCgCADQgNARgOAPQgIAJgBgJQAMgMAIgQIAAgBQAHgDADgHIABAAIAAgBIAAgBIACgGIAAgBIAAgBQgEgIgFAEQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAIgDACQgPAOgLARIgFAIQgMARgNAOIAAACIAAABQAGAIAKACIAFABIACACQACAEAFABIAEAAIAEAAIASgBQAQAAAOADgADKiAIgBABIAAABIgBABIACABIACAAIAAAAIgBgFIgBABgAgWigIAAABQAAALAHAEIAAACQACALAHAHIABgCIAFgOIAAAAQABgMADgLIgBAAQgOABgLACgAmqieIAAABIALAAIABAAIAGACIAMADQAbAHAfACIABABQAHADAJABIABAAQAGAAADADIABABQALgEAKgGQAHgDAKAAQAIgDAGgGIAAgBIAAAAQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAIAAgBQgIgFgCgLQAKgHANAAIAAACQgKAAgDAIIAAACQAJAFAEAKQABACAFAAIABABQgIAJAMgEIAAgBQgBgIAMgCIABAAQAGgFgFgFQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAKgEALAGIABAAQAFgDADAFIAAgBQANgFAMABIABABIAAgCIAAgGQAGgLAGAPIAAAAIAQgBIABAAIAAgBQARgBgMgJQABgFgBgDQgCgEgGgBIgDgBQgQgHgVgCIAAAAQgKAAgEgFIgCAAQgGgBgHgFIgBAAQgEgBgHABIAAAAIgLgIQgDAEgGgCQgRgGgRADIgBAAQgIgDgFgEIgBAAQgEACgGgBQgSgHgRgBIgKABQgXAGgWADIgEABIgMAEIggAHQgYAGgXAHIgBAAIAAAAQggAFgbAPQABAFAFABIAAABQAMACAKAEIAAABQAQABAPADQATADARAIIAAABQAFgCAFAAQAIAAAIAEgApwiKIAAACIAmgaIABAAQALABAHgDIgBAAQgGgGgIgFIgBAAQgbAMgOAZgAAqikIAFATQABAGAEgFQAGgGADgJIABAAIAAgBQgDgFgIAAIgJABgAC7i6QAHAAAHADIAAABQAFAGAGAEIAAABQAEAJACALIABAAQAaglAZgmIgBgBIgRgKIgCAAQgsAHgxAEIAAAAQgUAYgTAZIAAABIAAABQgBAGgFADQAIAHAIgJQABgCAEAAQALgLATgDIABAAIABgBIACAAQADgDADAAIAEgBIABAAIACAAQAEAAADADgABzjaIgBAAQgEAKgGAHIAAACIAAABIAAABIgQAaQAHAIAGgKQAEgHAGgEIAAgBIAIgJQALgOAJgOIAAAAIgFAAQgMAAgHAEgAAJjVQgYACgYAEQgbAEgWAKIAAADIAAABIABAAIABABQAGAGAKgDIANgDIADAAQADgIAIADIADABQAYABAcgBIADAAQAVgCAcABQAKAAAGAEQABAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIAAgBQgWgFgbACIgYACIgWgBIgdgBIgBAAQgFABgDgFIAIAAQAGAAABgBIAAgBIAHgEIABAAIAQgCIAAAAIAAgBIATgDIBAgIQAPgCAKAFIAAADIACgBIABAAIABgCQACgEgDgCQgNgGgOAFIAAABIgJgGQgCAEgEACIgJACIgTABIgCAAQgOAAgHAGgAgLjIQAAAAAAABQAAAAAAABQABAAAAAAQAAAAABAAIAAABQAPAFAPgHIABAAQAcABAgADIABgBQAEgHAGgFIAAgCQAAgFgHABIgBAAQgNABgMgBIghADQgSABgMAIIgBgBQgKgBgLACIAAAAQAFACAHAAgAE2C6QABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBIABAAQgCAJAEADIABAAQAJAEAIgJIABAAQgBAIgDABIgIACQgLAAgBgOgAFpDAIgBAAQAFgEAIgCIAAAAIAAgCQAEgDAJABIABAAIACADIgOAFQgHADgEAAIgDgBgAIFAyIACABIgCABIAAgCgAmygrQAAABAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAAIAAgDgAiai5IgGgHQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQALAAACAFIABgBQADgCAAAGQAFgCABABQABABgDAEIAAgDQgFAEgDAAQgDAAgCgDgAg9i8IgZgBIAAAAQAPgJAPAEIABAAQACAEgHACIgBAAgABvjHIAAgBQAEgBADgGQACgFADgBIABgBIAAgCQAHgDgDAGIAAABIgMARIgCACIgBABQgCAAAAgHg");
	this.shape_6.setTransform(19.6,-25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AtEK8QgQgRAAgXQAAgYAQgRQARgRAXAAQAYAAAQARQASARgBAYQABAXgSARQgQAQgYABQgXgBgRgQgArNIaQgHgGgDgGQgJgPABgRQgBgZATgTQASgSAaAAQAZAAASASQASATAAAZQAAARgHAPIgLAMQgSASgZAAQgaAAgSgSgAp/FtQgYgZAAgkQAAgjAYgaQAagZAjABQAMAAALADQAKACAKAGQAKAFAIAIQAZAaABAjQgBAkgZAZQgZAagkAAQgjAAgagagAEuGDIgOgRIgEgBQAAgKgCgKIgDgCIgGgCIAAAAIgJAEIAAAHQAAAMgBALQgaAIgbgDQgMgMgOACIgKgNQgJgLgGgQQgHgDgHADQgGADgDAFIAAAEIAAACIgHAJQgFAIgKAFIgqAAIgGgEQgPgJgMgQQABgHgEgFIgMgPIgBgFIgBgEIgCgCIgHgCQgGgBgFABIgDACIgEAPIgCANIgGAGIgHAFQgVAAgXgDQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQgHgLgIgIQgEgNABgOIAAgGQgOAFgOAAIgGgBIgLgEIgDgBIAAAAIgGABIgCABIgJAJIgBABQgEAEgFACQgMAagWAIIgSACIgHABIgQgBIgGgFQgSgKgQgNIgBgHIgBgCIgDgEIgFgBQgJgCgIAFQgCADABAGIACAFIAGAEIAAADIAAAAQgVgYgCggIgIABQgmgBgcgbQgbgbAAgnIABgPQgfAOgqgBQgjAAgbgIQgJgGgLgDQgagNgCgSIAAgEQgBgFACgEQgCAEABAFIAAAEQgcgCgVgVQgXgYAAghQAAgKACgKIACgIIgCAIQgegBgWgVQgVgUAAggQgBgeAUgVIgDgZIAAAAIgMABQgbAAgUgUQgSgTgBgbQABgcASgUQAOgNASgEIAFgFQgHgOAAgRQAAgUAKgQQgKgOAAgSQAAgXAQgRQAQgPAXAAIAIAAIgBAEQgBAGAEADQANAGAMAAQAOAAALgIIABgHIABgcIAAgKIAAgDIAFgGIADgDQAeACAdgBIAXgDIADgDQAFgKADgKQAFgSgDgSIgDgDIgFgDIgEABIAFgFQAPgPAWgBQAVABAPAPIAFAFIAJgDIAAgCQAAgYAQgRQARgRAXAAIADAAQgDgKAAgMQgBgeAVgVQAVgVAeABQAdgBAUAVQAQAQAEAUIAHgJQAUgTAcAAIAFAAQABgXARgRQATgSAaAAQAbAAASASQAUATgBAbIAAAIIAKAFIAHgHQARgRAagBQAXABARARQAHAHAEAIIAHgBQgDgJAAgKQAAgbATgSQAUgUAaABQAagBAUAUQATASAAAbQAAAOgGAMQALgEANAAQAeAAAUAWQAHAGAEAGQABgdAVgWQAVgVAgAAQAfAAAVAVQAWAXAAAeIgBAPQgNADgKAJQAKgJANgDQAJgCAKAAQATAAAQAKIAKgMQAXgXAgAAQAhAAAXAXQAXAXAAAhQAAAJgCAKQgGgDgGgCQAGACAGADQAIADAGAHQARAQgBAWIAAABIANAJQANAFALALQAUAUAAAcQAAAMgEALIAEACIAMgBQAeABAUAUQAWAWAAAdIgCAPIAGAOIALgBQAfAAAUAWQAWAUgBAeQAAAYgMASQgEgEgGgCIgGgCIAAABIgEABIgCAAIgCACIgCAEIAAAFQAAAGAEADIAGAEIAIAGIAHAIIAAAPQADAcgJAaIgCADQgNARgPAOIAAAFIACAGIAJAFIABAJQAEAagVATIAAACIgCAHQgcAKgeAAIgBACIgCAEIgBADIAFALQAQAhgOAiIgEADQgNAPgTAMIhFACIgHACIgCAGQgBAFAEAEIAJAFIAAADIAAACIAAAEIgHAGIgHAIQgMAAgLAFIgCACIgEAGIgjgCQgNgKgNAKQgBAHACAFQAFALgEANQgRAVgXAMQgkgCgiAAIgBgBIgGgDIAAABIgGAEIgNAAIAKAFIAAALQADAWgKASQgDAGgFABQgrAFgrAAIgJgCgAhUEeIABgLIgBALgAgcgUIAAABQAgAFAcAIIACABQAFACAEADIACAAQADAIACAKIAAAAIAAAPIAAAAIAEAIIAAABIAEACQgBAKAEAIIACAFIAAABIABABIANARIACAEIADAEIAAACIABACQAOATATAGIAGAHQAaAEAXgJIAMgFIAAAAIARgPIABAAQAGgEACgKQABgKACgBQAGACAEgLIAEgJQAQAAAWACIABABQAQADASACIABABQAGAEADAGIAAAAQAKADAJgEIABgBQAYgKAegEIABAAIAHgDQAcgLAfgJIAJgCIAAAAIAQgFIAEgEIABgBQAHgIALgBIASgDIAHgBIAKgCIAHgDIACAAQAHAAAEgCIABgBQAGgBAEgDIAAgBQARgEAPgHIAHgDIAAgBQAXgHATgNIAAAAIABgBIABgBQAKgLACgUIAAgBQgCgGABgCIAAgCQgFgEAAgJIAAAAIAAgBQgFgQgQAHIgBgBIgEgNIABAAQAJgEgFgFIgBgCQgLgIgDgRIgBgBQgIgTgMgOQgIgIgJgHIAAgBQgTgDgPgFIgygQQgVgHgYgGIgFAAIAAgBIgHgDQglgNgqgBIgBAAIgNgSIAAgBQgCgDABgFIgBAAQgCgEgDgBIAAgBQgCgSgHgNIgBgBIgUgiIgBgBQgNgIAFgPIAAgBQgFgFgJgBIAAgBQgFgIgHgFIgBAAQg3AIg1ABIAAABIgOADIgOADQgNACgDgHQgTAKgYABQgaACgUAFIgBAAIhzAQIAAAAIgdgHQgggOgmgJQgngKgjgCIgBAAQgCAGgJgBQgGgJgLABQgKACgEgKIAAgBQgigEgjAFIAAABIgBAAIgSABIAAACIgBAAIgEABIgMABIgrAEIgBAAQgLAGgNADIAAABIgBAAIgGADIgBACIAAABIAAAAQgBABAAAAQgBAAAAABQgBAAAAABQAAAAgBABIgBACIAAAAIgxAQIgCAAIgIACQgGAGgIADIgBAAQgNADgFALIAAABIgOAEIAAACIgBAAQgRAGgJAOQgCAVgPANQgCANgJAJIAAADIAAABIgBAAIgFAOQgDAZANAIIAAgBIAAAAIAAgJQADgCABAEIABAAQAWAXAgALIACAAIAAAAIAOAJIADAAQAOAGAAgNIAFgBQABALAFAJIABAEQAFAZAMARQAYAJANARIAPADQAKAJANAEIAAABIAKAAIABAAQAIAGALgEIABgBIALgLIAMgRIAAABQADgOAAgRIABAAIANACIABAAQAPAGARAEIAAABIAQABIABAAIAFAEIAAABIAJAAIABAAQASAHASAEQAAABAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIACgBQADAGADABIABAAQAHgCALACIABAAIAIAEIABAAIAgAKIAAABQAtAEAlARIABABQAPACAPAFQARAEARAHQALAFAMgCIAHAGgANBhbIAAgPIAAgQIAAAQIAAAPgArllSIgFAIIAFgIQAGgHAHgEQgHAEgGAHgAHCo0IADgFIgDAFgAmKpIIgDgIIADAIgAkIpvIAEgGIgEAGgAjJqLIABALIgBgLIABgGIgBAGIAAAAgAkhFIQAPAFANAKIAJAHQgUgHgRgPgACVBwIgGgBQgIABgGgBIgCgCIgIgHIgGgBIAAAAIgBgCIAQADIABAAIAAAAIgMgGIgPgDQACAFAFAEQgKgHgGgNIgJgQIABgEIABgDIgBAAIgGgJIgBgBQgDgIACgHIABgBQALACAAAKIAAACQAFACABAJIAAABIACADQAEAIAGAEIABABQAEADABAFIAAABQAEAAACAFIAAABIALACIABABQAHALAQgCIABAAQAEABAEACIABAAQgCAFgFACIgHAAIgBAAgACWBXIgBAAQgDgEgEAAQAGgFAFgLIAFgOIACgBIABgBQAHgKADgIIAAgCQABgCAEAGIAEAKQAGADADAEIABABIgFAJIgBAFIgBACQgEAJgKAIIAAABIgKAAIgJAAgAm5heIgBgBIgBgCIgIABQgFgDgEgGQAGgMAKAJIAAgBQAAgIAGgEQgBgEADgHQABgDACgCQAFgKADgKIgCgCIAVgMQAJAFgDAPQgCAPgIALIADACIABAAIAAAFIAAABIgBAAIAAgBIgFAQIAAAAIgNADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAABQgIgIgGAIgAnqhqIgEgFIgDAAIAAAAQgHgHgFgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQgCgEgEgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgFgEgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgHgIIAAgBIAFgCQAAgNACgLQgCgMAAgMQAJgKATAAIABAAIAAADQAKAAAIAKIgEAGQgEAHgCAIQgCALAAANIAAAAQAAAQADAMIAFALIAEAGIgDAEQAKAEAFAFIADABQABABgBAKQgPgCgLgIgAE0j9QgVgFgbACIgEABIgFgBQgEgBgCgEIgCgBIgFgBQgLgCgFgJIAAgBIAAgCQANgOALgRIAGgIQAKgRAPgNIAEgDQABAAAAAAQABAAAAgBQAAAAABgBQAAAAgBgBQAFgEAEAIIABABIAAABIgCAGIAAABIAAACIgBAAQgEAGgGADIAAABQgIAQgNAMQACAKAHgJQAOgPANgSQADgDADACIAAABIAQAjIAAABIAEAOIAAABIABAAQAIAMgBAPIgBAAIgLABIgJgBgADWk2IgBgBQgFgEgFgGIAAgBQgHgDgIAAQgCgEgGABIgBABIgEABQgEgBgCADIgCAAIgBABIgBAAQgUADgKALQgEAAgCACQgIAJgHgHQAFgDABgGIAAgBIAAgBQATgZATgXIAAgBQAygEAsgHIACAAIARAKIABABQgZAngbAkIgBABQgBgMgEgJgABak2IAPgZIAAgBIAAgBIAAgDQAHgHAEgKIABAAQAIgFAPABIAAAAQgIAOgLAOIgIAJIAAABQgGAEgEAHQgDAGgEAAQgDAAgDgEgAB+liIAAABIgCABQgCABgCAFQgDAGgEABIAAACQAAAGACgBIADgCIALgRIABgBQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgEACgAhVlIIgBAAIAAgBIAAgDQAVgKAbgEIAAAJIgIAAIgHAEIgBAAQgPgEgPAJIAAABIAAAAIgBgBgAgHlQIAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgCAAQgHAAgFgCIAAAAQALgCAJABIABABQANgIASgBIAggDQANABAMgBIABAAQAIgBAAAFIAAACQgGAFgFAHIAAABQgggDgcAAIgBAAQgJADgJAAQgFAAgHgCg");
	this.shape_7.setTransform(19.4,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AB1HIIgSgHQgUgKgMgUQgMAEgSAPQgCACgEAAIg5gBQgXgUgRgaIgHgKQgIARgTAFQgYAHgagDQgOgCgJgLQgTgWgVgVQgYAfgiARQglAQgegTIgJgGQgNgLgPgFIgDgBIgCgEIAAgCIgBAAIAAgDIgFgEIgCgFQgCgGADgDQAHgFAJACIAGACIACADIACACIABAHQAQANASAKIAGAEIAQACQAOABALgEQAWgIALgbQAGgBAEgEIAAgBIAJgJIADgBIAFgBIAAAAIAEABIALAFQAVAJAQATQAIAIAHALQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAsADIAGgFIAGgHIACgMIAFgPIAFgBQAFgCAGABIAGABIACADIACAEIABAFIALAPQAFAFgBAHQALAQAQAJIAFAFIApAAQAJgGAGgJIAGgIIAAgCIAAgEQAEgGAGgCQAHgDAHAEQAGAPAJAMIAKAMQAOgCALALQAbAEAagHQACgMAAgMIAAgHIAJgEIAAAAIAGACIACACQACAKABAKIADACIAPAQIAJACQArAAArgGQAFAAADgGQAKgSgDgWIAAgLIgKgFIAMAAIAHgEIAAAAIAGACIABACQAigBAjACQAYgNARgTQAEgNgFgMQgCgFABgGQANgLANALIAjABIAEgHIABgBQAMgFAMAAIAHgIIAGgGIAAgEIAAgDIAAgCIgJgFQgDgDABgGIABgFIAIgDIBFgCQATgMAMgQIAFgCQAOgigQghIgFgMIABgCIABgEIABgCQAfAAAcgKIACgHIAAgCQAUgSgDgbIgBgJIgJgHIgCgFIgBgGQAQgOANgQIACgEQAIgYgCgcIgBgOIgGgJIgIgGIgHgDQgDgFAAgEIAAgGIACgDIABgDIACAAIAFgBIAAgBIAGACQAGACAEAEIAFAIIACACIAHAFIACADQAKAzgUAsQgFAMgJAKQALAwgaAoIgGAJIgvAQQAQA4gpAlQgNAKgOAFQgaAHgcACIAAAJIAAAJIgGAIIgFADIgCAHIgCADQgnAWgugEQgCAtguASIgJACIhEAFIgBgCQABAggUAaIgCADQgIAFgLABQgtAAgtgEQgHgBgGgFQgGgEgGgCQgDAGgBAGIgCADQgPACgQgCQgGACgHAAQgLAAgOgEgAsClNQgEgEABgFIABgFIABgBQAPgIATADIAAgcIAAgXIABgGQAygFAvgBIACgMQAAgIADgIIAAgCIABgGIACgDIABgCIACgBIACAAIADgBIAFACIADADQADATgEARQgDALgGAKIgCADIgYACQgdACgdgCIgIgBIAAAJIAAADIAAALIgBAcIgBAGQgMAJgOgBQgMABgNgGg");
	this.shape_8.setTransform(27.8,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-84.2,172.8,145.4);


(lib.WhatKindBubble1still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AmElrQAAAJgFAIQAAABgBABQAAAAgBAAQgGAJgJAAQgKAAgGgJQgHgJAAgNQAAgNAHgKQAGgJAKAAQAAAAAAAAQAKABAGAIQAGAKAAANQAAABAAACgAiolDQAIAAAFAIQAGAJAAANQAAAMgGAJQgFAJgIAAQgHAAgGgJQgFgJAAgMQAAgNAFgJQAGgIAHAAgAAgjqQgCAAgDgBQgIgCgIgJQAAAAAAgBQgIgKgBgNQgBgDAAgFQAAgSAKgNQAKgMANAAQACAAACAAQABAAAAAAQALADAHAJQAKANAAASQAAAKgCAHQgDAIgFAGQgJANgOAAQgBAAgBAAgAF+m1IAAgBQAJgMAMAAQABAAAAAAQAJAAAHAHQACACADADQAJANAAARQAAASgJAMQgJANgNAAQgKAAgIgJQgCgCgBgBIAAgBQAAAAgBAAQgDgEgBgFQgBgBAAgBQgDgJAAgKQAAgJADgJQAAgBABgBQABgDACgDQAAgBACgCgAClBBQAAApgdAeQgeAegpAAQgqAAgbgeQgegeAAgpQAAgqAegbQAHgJAKgGQALgHAMgEQAHgCAIgBQAHgBAHAAQAAAAAAAAQAPABANADQAOAEAMAIQAJAGAIAIQAdAbAAAqgADUChQAeAAAVAVQAVAWAAAeQAAAegVAVQgVAVgeAAQgeAAgWgVQgVgVAAgeQAAgeAVgWQAWgVAeAAgAFeG6QgIAJgNAAQgMAAgJgJQgJgIAAgNQAAgMAJgKQAJgIAMAAQANAAAIAIQAJAKAAAMQAAANgJAIg");
	this.shape.setTransform(-9,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhTB0IgBgBQgFgNgLgIIgIABIgFgBIgHgEQgIgGgLgFQgLgFgMgDIgFgCIgBAAIgOgEQgRgDgEgQQAEgSAGgIIABAAQgBgGADgGIAAgCQAFgDADgDIAAAAQAIgJAJgHIAAgBIAMgJIABgBIADgCQAfgaAbgcIABgBQAHgDADgIIAAgBIALgIIACgBIABgBQAHAAAFACQADACACADIABABQAKABAHAEIABABQAMAJANAIIABABIAAABQAAAMgLAGIAAABQgDANgKAGIAAABIgFAIIgMAVIAAABIAAAKIAAABQgFAMgIAJIgBAAQgNgDgOgBIgFAAIgBAAIgJAAIgNAAIAAAKIAAABQAGAKAFANIABAAQAAAFACAEIAAABQADAJAIgEQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIALADIAAABQAHAQgIARIAAADIAAABIgBAAQgBABAAABQAAABAAAAQgBABAAAAQAAAAgBAAIgBAAgAAeBXIgBAAQgQgTgRgQIAAgBQgDgBABgEQAHgTAGgWIAAgBQAggrAmglQALgKAPABIAEABQATAlADAxIAEAbIAAAEIAAABIgCANIgBABQgMAIgOAHIAAABIgBAAQgGACgDAFIgCAAIgsANIgBABQgGACgGAAIgFAAgAjXAxQgRgHgOgJIgBgBQgDgMgLgFIgBAAQgEgHACgKIADgOIAAgBQAJgJADgPIAAAAQgBgCABgEIAAgBQAJgQAKgNIAAgBQAFAAADgCIABAAIADgDIAAgBIADgDQAKgKAMgHQAJgFALgEIAAgBQAlgEAnAIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgEACIgBABIgDACIgUASIAAABIAAABIgBAAQgNANgOALIAAABIAAABIgBABIgGAEIAAABIAAACIgBAAIgGAFIgDACIgBABIgjAdIAAABIAAAAIgTASQABAPAIgKIAFADQgFAFACAHIABAAIACABQADAJgGAOIgBgBgACSAUQABgagHggIAAgBQgGgLgCgPIgBAAQgBgEgDgBIAAgBQgBgKgGgLQAYgIAdgBIABAAQAEABACADIABAAQAFgDAIAAIACAAQANAIAOAHIABAAIASAVIAAAAQAKAQAIARIAAABIABABQAEALABANQgWAMgbAIQgcAIgWANIAAAAQgJABgHADQgFgHAAgNg");
	this.shape_1.setTransform(-10.7,-25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ai4BrIgFAAQgIgDgIgIIAAgBQgIgKgBgNIgBgIQAAgSAKgNQAKgNANAAIAEABIABAAQALACAHAKQAKANAAASQAAAJgCAIQgDAHgFAHQgJANgOgBIgCAAgACngfIgDgDIAAAAIgBgBIgEgIIgBgDQgDgIAAgKQAAgKADgIIABgDIACgFIACgEIABAAQAJgNAMAAIABAAQAJABAHAHIAFAFQAJANAAARQAAASgJAMQgJAMgNAAQgKAAgIgJg");
	this.shape_2.setTransform(12.8,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("ABuA6QgGgJAAgMQAAgNAGgJQAFgIAIAAQAHAAAGAIQAFAJAAANQAAAMgFAJQgGAJgHAAQgIAAgFgJgAiGgMQgGgJAAgNQAAgNAGgKQAHgJAJAAIABAAQAJABAGAIQAHAKAAANIAAADQgBAJgEAIIgCACIAAAAQgGAJgKAAQgJAAgHgJg");
	this.shape_3.setTransform(-38.2,-3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("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");
	this.shape_4.setTransform(-4.1,-19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABcGZQgMgJgOgEIgBgCIgDgBIgCgEIAAgDIAAgDIAAgEIgBgBIgCgCIgCgBIgQASIgBAAIgOAAIABAAIADgEIACgFQACgEADgEQAOgRASADIACAFQAAADACACIAAAFIAAAHIADADQADACAAADQAEADAGABQAtAJAsgMQAYgGAEgaIAFguIABgCIAAgBIAFAAIAEACIADANIACAKIAFACIADAFIABAIQAfARAcgUQAEgegBgfQgBgHACgGQANgDAAAOQAAAEADACQAAAIAGAFIAJAHQAlABARggIABgOQAAgGACgGIAEgBIAFACIACAPQABAHAEAFIA3AAQAJABAFgJQADgMgBgOIAAgNQgHgIgJgGIgCgDIAAgBIACgCIAAgBIABAAIAAgCIABgCIABgBQArABAtgEIACgCQALgLAPgDIAAgCQAGgSgEgSIAAgCIgBgCQgBgGABgHIACAAQATABATgEQAHgIABgLQADgTAAgTQgCgegIgcQAAgCgDgCIgBgBIgBgCIAAgBIgEgCIgBgCIgBgIQAAgDABgCIAYgFQAQgGABgUIABgkIAAgSIgBgCQgJgLgQAAIgygCIgBgCQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAIACgCIAKgFQARgKgDgXQgBgQgEgRIgGgXIgBgBIgEgDIgLgBQgcgBgbADIgBgCIAAgDIAAgCIABgBQAFgGAFgEIABgCQAIgSAAgUIAAgBQABgPgEgOQgLgIgQABIhpAAIgDACQgLAFgKAIIAAACIAAAGIgBAEIgBABQgEADgGgDIAAgBQACgRgDgSIgBgDIgCgCIgGgHIAAAAQgYgEgXAHIgCABQgFAJgKgEIgBgCQgCgPACgQIgBgHIAAgCIgBgGIAAgBQghgCgfAEIgCACQgCAFgEACIAAABIgCAJIgCAEIgBAAIgGAAIgBgCIgBgcIAAgIIgCgCIgCgDIAAgBQgjAAgkADIgHABIgIAEIgBABQgGAIgJgEIgBgCQgBgLgGgJIgDgDIhjAAQgVAAgRAKIgBACQgEAGABAHQABADgCACIgBABIgDABIgEgBIgBgBIgCgEIgBgBIAAAAQgJgBgFgGIhDAAIgBABQgbAJABAaIgBACIgBABIgEACIgDgCIgDgDIgBgBIAAgBIgBgBQgJgBgEgHIgBgBQgpgCgnANIAAABQgEAFgFAEIAAABQgBAFgCAFIgDAEIAAABIAAAWIgCAFIgBAAQgFADgDgEIgBgBQgpgLgeAYQgEADABAFIgBACIgBABIAAACIAAAPIgBADIABACIgBABIgCAEIgCAAIgHAAIgBgCIgBgDIgCgCIgEgDIgBgCIgCgCIgLAAQgagCgaABIgBABIgRARIgCADIAAAKQAAAgAeALQADACACADIAAACIgBADIgBABIgDABIhLABQgPAQgKAUQgDAIAAALIADAnIABACQAHAIABAKQAAAFADAEIAEABIABACIABACIgBADIgBABIgBABIgsACIgDACIgGAIIgEAFIgDABQgFADgDAGIgCADQgHARABATQADAUAIARQAEAIAJAAQAHAAAEAFIABACIAAADIAAACQgCACgCAAQgZAJgaAFQABAbgCAaQgCAjAOAfQACADAEAAIBOABIAAAAIAAgCIAAgDIABgCIAAgDIACgBQADAAADABIABABIABACQABARgCAQIgBAOQAkASAngOIAAAAQgIgFgGgLIABgBIABgCIAAgBQAJgCAGAIIAFAFQAEABAFgDIACgCQALgFAIAGQACADAAAEIgBAKQAJAgASAcIAEAEQAhAHAXgVQAHgGAKgBIACABIACABIAGAZQACAFAAAGIAAABIAEABQADALAHAJIAEAJQAkAKAcgUIACgFIACgHQABgDADgCIACgDQADgDAEACIAFACIACAIQAAAFADADIAAAJIACAJQAIAHAMAAQAmABAngCQAWgCAHgVQACgFADgFQAEgDAFACIAFACQACAEAAAEQgBAFADAFIAFAEQAEADACADQAaAFAYgBQgKAEgLAHQgSgCgSgGIgFgDQgDgCgFgBIgBgFIgDgIQgHASgSAHQgIADgHAAQgnABgmgCQgNgBgNgDIgDgFQgBgCAAgDIgBgCIgBgCIAAgGQABgGgEgEQgJAUgYAFQgeAGgXgPIgEgEQgGgIgDgJIAAgBIgEgCQgEgMgCgMIgDgLQgDAJgLACIgFACQgfAPgfgRQgFgCgBgFQgNgbgKgeIAAgFIAAgGIgJADIAAABQgZAYgmgIQgNgCgNgFQgWgIAFgbIADgHIgCAAQgqADgrgJQgFgBgDgFQgMgbABgdQABgkgDgjIACgCQATgKAWgDIgCgCIgCgBIgEgCIgBgBIgBgEQgJgRgDgUQgDgUAGgRQAEgOAJgMIABgBQAEAAADgDIACgFIABgCIACgCIABgBIABgEIACAAQASgFATABIAAgCQgBgHgDgFIgFgJIgBgIQgCgZAAgZQABgIACgHQANgSAPgQIADgCQAcgCAbgBIgBgCIgCgDIgDgCIgBgBIgDgFIgDgFIgBgCQgDgLABgMIAAgNIABgCQAJgOAMgKIAEgDIABgBIADAAQAigDAiAFIAEAAIABACIADAEIAAgHIAAgFIABgCIABgCIABgBQACgKAJgIIABgBIABgBQAigMAmACIAAgCQgBgOAGgMIACgFIABgBQAIgEACgIIAFgCQAtgOAuAIQAAAAABAAQAAAAABABQAAAAABAAQAAABAAABIACABIAEAAIAAgBIACgHIAAgDIABgCIABgBIAXgNQADgCADAAQAlgDAlAAQAGAAADAFIAFABIAAgBIABgCIABgCIAAgBIAAgCIAAgCIACgBIAAgCIACAAQAYgMAaAAQAyABAzACQADABACACQAHAHABAIIAYgDQAkgGAmABQAGAAADAGQAFAIgCAKQAlgMAoAJQAJACAAAJQABAPgBAPIABAAQAcgKAdAIQAHACAGAGQAGAHAAAKIAAAEQAMgGAOgBQAvgEAwgBQAZAAATAPQACACABAFQAIAigNAgIgBAFIgBAAQAdgCAcAIIADAFQAFARADASQADAOAAAPQACASgHAQQAbgBAXAPQAJAGAAAKQAAAfgEAeIgBAGQgJAWgbABIABACQACADAEABQAHAOAAAPIAFAvQACAigTAaIgBABIghAEQACAOgBAOQAAAZgYAHIgMAGQgCACgDABQglADgkAAIADADIAFAHQAEAegMAYQgFAJgKABQgeADgggEIgEgCIgBgBIgCgBIgBAAIgEAJIgFAIQgYAPgbABQgGAAgGgDQgGgEgFgGQADAagMAWQgBADgFACQgkAWghgbIAAgDIgBgEIAAgBIgCgCIgDgDQABAggWAUQgLAKgPACQgTACgTAAQgTAAgUgCgAAWFEQgLAAgIgCIgBAAIgBAAQgGgHgPABIAAgBQgLgDgHgHIgCAAQgPgHgJgNIgBgBQgJgIADAMIAAABQgLADADgOIgBAAQgJABgHAFIgBAAIAAAAQgPAKgPADIgBAAQgDADgFACIgBgBQg0gKgvgQIgBAAQgHAFgMABIAAABQgaAFgagBIAAgBQgZgHgQgQIgBAAQgHgGgFgIIgBgBIgOgJIAAgBIgBgNIAAgBQgHgIgHgGIgCAAQgbgCgZgKIAAAAIgBAAQgFgHgIgCIgLgCIgBgDIAAgBIgKgJIgBAAIgBgBIgBAAIgBAAIAAgBIAAgBQgJgKAKgEIAAgBQgBgSgKgJIgBgBQgIgEgBgJQAIgEgBgIIAAgBIAAgBIgBAAQgEgGAAgLQADgDACgFIACgBIABAAIADgMIgDAAIAAgCIgBgHIAHgBIAAAAIAQgKIAAgBIAbgJQAigMAagTIABgBIAAAAQAggYAMguIAAAAIAAgBIAAgCIABAAIAAgBIAAgEQAJgOAEgRIAAgBQAKgIAFgLIABgBIAAgBIAAgCIANgTIABAAIACgIIACgHIABgBIADgEIAEgFIAAgBIAAgBQAWghAjgSQAUgKAVgJQAPgGAQgFIAMgEIAAgBQAXgKAbgFIABAAIAAgBQAZgHAcgCIABAAIACAAIAAgCQAogBAoAFQAMACAJAFQA2ACAhAXIAJAGIAAAAQAaAPATAUQAFAGADgFQAFgHAGAEIAAABQABAGgBAKIAAABQADAEABAFIAAACIANASIABABIABAIIAAABIAAAAIARAWIAAABIAWgBQAKAJAMAEIAEADIgIACIAAgBQgGgCgFABQAHAEAIACIAAABQAbAKAbgEIABAAIgDgEIADAAQAWAOAggLIAoAEQAQAdAiAUQACAPAJAMQAVAbAAAfIgCAEIgBAAQAEAMgFAKQgDAEgFAAQgbAEgYAJQgBAQARgJQAVgLAZgCIADAMQgBADgEAAIAAABQgVAFgRAIIgBAAIgBABIgDABIgOABIgIACQgBAbgPAYIgCACIgDAFIgCACQgKACgFAHQglALgigKIgMgDIgEgFIgBgBQgQABgIgKQgDgDgFAAIgCAAQgJADgBAJIgEgQQgIABgIAGQgJAGgGgBIgBABIgSAKIAAABQgCADAIgBIAAgBQALgHANgCQgDACgCAEQgCAGAAAHIAAACIglANIAAAAIgfAOIAAABQgPAFgNACIAAABIgMAEIgCABIAAAAIgzAVIAAABIgKAIIAAABQgFAMgBAPIgBAAQgDADgCAFIgBABQgTALgUAJIgBABQgKAGgHAIIgCAAgAgBB9IAAABIgRAQQgPAQgLAUIAAABIgGAQIgKAXIAAABIAAABIABAAQgBAPgDAOQADALABAOIAAABQANAXAdADIAEgBQADgJAJAIIAAABIAIAAIAEgBIAJAAIABAAQAbgNAOgZIABAAIAAgBQAFgIgFgNIABgBIABAAIAAgBIAHgRIAAgBQAAgkgIgbIgBAAQgKgQgOgKIgBAAIgQgHIgBAAQgNAAgJACgAiYEfIABAAQAKgDANAAIAAgBQAIgIAGgIIgBAAIgVADIgBAAQgLgCgGgFIgCAAIgXgCIgCgBQgZgJgcgGIAAgBIgKgGQgMAAgJgFQgLgGgMgEIgIgDIgPgEIgBAAQgFgDgFACIAXAOIABABIAIABIAAABQAAADADABIACAAIAGACIABAAIACACQAQAFATAFIABAAIABACQAVAWAmABIABABIAMAIIABgBIACAAQAIAAAEAEgAkjD+QAFAFAIADIAEAAQAJgBgFgDIgpgUIgFgCIgBgBQgEAAgBgDIgBAAQgUgHgSgDQAAAIADAFIAAABQADADACAFIABABQAFADAFAFIAAABQAKAHAAgRQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIACAAQAXAAAOAOgAhyD7IATAGIABAAQAKgBACgHIABAAIAAgBIAAgCIAAgEQAEgXAGgWIAAAAIAAgBIASgoIAAgBIAHgDIABAAQABgIAGgCIABAAQAJgSANgOIABAAQARgCAPAAIACAAQAEADAFACIABAAIAFABIABAAIACAAQAHAKAIAAIABAAQAGACADAFIAAABQASAEgIALIgBACIgBAAIAAABIABACIAAABQAKALABATIAAABQAIANAAATQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAQAFgJgNIAAgBIgBAAQgCgLgEgJIAAgBIgDgPIAAAAIgEgNIgBgBIgDgEIgDgHQAJAGAFAKIABACIAAABIAAABQAIAcAQATIABAAQAHABAGgCIABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBIABAAIAAgBIAFgDIAAAAIACgBIAjgVIABAAIAAgCIAZgKIABAAIAAgCIAAgBQAmgUApgRIABAAIAFgFIABAAIABgBQADgQgEgZIAHglIAAgBIAGgGIAAgBIAAgCQANgRAPgPIABAAIAAgBQAjgWA1AEIABABQAUAIAOAOIAAABIAAABQAHARAFAVIABAAQAYAAAUgKIAAAAQABgPgEgJQgMgXgJgcIgBgBIgGgLIgBgBQgHgIgKgHIgBAAQgHgHgPgBIAAABIgIAFIgBAAQgHACAFgIIAAgBQgDgFgLgEIgBAAQgOgCgSACIgBABQgiAOgnAJQgGADgJgBIgGgBIgNAAQgQAAgMAEIAAABIgHADIgBACQgBARABAOIgBABQgGADgJABIgBAAQgiAHgjAIIAAAAQgcAFgWAKIgCAAIgJAAIAAABQgxAPgsASIAAABQgFACgHAEIgGABIgDAAIgBAAQgRACgOAHIgGADQgOAIgJgJIgBAAQgIgGAGgHQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQgKgDgGgGQgCAFAAAIQACALgGAIIgBAAQgRgGgQgMIgBAAQgPgBgLgFIgBAAIgYgGIAAAAIgvgNIgCAAIAAgBQgFgBgCgEIgBAAQgMgCgJgGIgCgBIgUgEIAAgBIgHgFIgBgBQgHgFgKgBIgBgBQgKgBgHgEIAAAAQgGgBgFACIAAABQgNAOgRAKIgBAAQgJgBAAAGIAAgBQgNAAgLAJIAAABIAAAAIA7gGIAOgCQAdAJAbALIACABIABACIAAACIAAABIgBACQgagDgbgKQgMgFgNACIhCAIQgMAMgKANIgFAIIAFADIALAJIgBAAQgKAAgGAJQgGAJAAANQAAANAGAJQAGAKAKAAQAJAAAHgJIAAAAIABAAIAAgBIAAgCQAFgHABgKQAHALADAQIAAABIACACQAGAFAJACIAAABQAFgFgGgJIAAgBIgBAAIAAgCQgFgTAAgYQADgDAAgGIAAgBIAAgBIAAgFQACgQAMgGIAAgBIAAgBQAtABAhANIALAGIAAABQAMAOAHATIAAAAQALABAEAHIABABQAAANgHAGIAAABQAGAQAAATIAAAgQAEADAIABQAHACAHgBIAAgBQgFgLgBgRQAEgIgCgMIAAgBQAEgIAFgFIABgBQAHgCAHADIAAABIABAAQAFgGAHAEIABAAQARAQAGAcIAAABQAGARgCAWIAAACIAOAEIAAAAQAUABASgCIABAAgAjPC2QgGAJAAAMQAAANAGAIQAFAJAHAAQAIAAAGgJQAFgIAAgNQAAgMgFgJQgGgJgIAAQgHAAgFAJgAk6DEQAMAIAPAEQAIACAHgBQAHAAABgHIAAgBIAAgFIgBAAIAAgEIAAAAQABgZgHgTIgBAAQgKgCgFgGIgBgBQgHgBgFgDIAAgBQgOgCgLgFIgDgBIgBAAIgPgGIgDgBQgNgIgJgKIgBAAQAAgGgEgCIAAABIgBABQgEAIgEAJIAAAiIAAABIABABQAIAMAQADIACABQABACAEACIAAAAQAiAEAdAHQAMADACAKQgFAHgBgJIAAAAQgNAHgVgCgAmXC9IAWACIABAAIAJAFQAQAIARAEIABgCIgHgEQgNgHgNgBIgBgBQgRgMgWgHIgBAAIgBAAQgIAAgGAIIABACQACAFAFAAIAEAAIABAAIAFgBIAFABgAFECNIACAFIAPAEQALADALAGQAQAEAQgCQAVgBAUgLIACgDIABgEIACgBIACgBQADgFABgGIAAgCIADgDIACgCIADgZIABgDQAHgagXgEQgFgCgHAAQgDABgCADQgCgEgDgCIgGgBIgHgEQADgFgIACIAAABIgBABIgGgBQgHgHgIAAIAAAAQAMgSAeAEIAAAAQgFgGgCgIIAAgBIgHgGIAAgBQgEAAgDgCIAAAAIgBAAQgKgBgIACIgBAAQgUAHgRALIAAABQgNAPgJAUIAAABIgHATIgDAHIACAMIAAACQAFAKAJAFIAGACIAAAAIABAAQAFAEADAHIAAABQAAADACACIABABIAGAFQAIAEAJABQAWACAUgHIAEgBIAAgBQAEADAJAAIAFgFQgDAFgFADQgMAGgMAAQgBADgDAAQgXADgWgJIgIgFIgHgEIgCgEIAAgBQgEADgFABgAnmBSIAAABIgEALQACASAJAJIABABQACgQAEgRIAAgBIABgBIAFgRIgUAMgAlaBlIAQAIQAQAGASACIAGACQAGgBgBgEIgBgBIAAgBIgEgIIgCgBIgWgHIgPgEIgBgBIgfgBQAHAGAIAFgAh/A7IAAAAQADACABgFIABAAIAAgCIAAgCQAIgSgHgQIAAgBIABAAIAAgBQAAgGgCgFQAFgBAAADIABABIAAgCIAAgGQAGACADgIIAAgBIAAgCIAAgBIgJgIIgBAAIgBAAIgCAAIgBAAQgNABgIAEQACAHACAFIAAABQAFAFABAKQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQgHAEgEgKIAAgBQgCgDAAgFIgBgBQgFgKgGgKIAAgBIAAgKIAO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AAABAAAAQAAAAAAABIAAABIACAIIAAABQAEAIAHAFIABAAIABABQAFAGANABIACAAQAEgBAEgDIAAgBQAagDATgLIABAAQgjgCgagKIgBAAIgBAAQgHAAgIgCQAAAAgBABQAAAAgBAAQAAAAAAAAQAAgBAAAAQADgDgFAAIgHABgAAAEHIgOgGIgBgBQgDgEgFgDIAAgBIgDgKIgBAAIgEgNQADgJAAgMIAAgBIAMgbIAAAAQABgFAFgBIACAAQADgGgBgKIABAAQANAFAJALIAAABIAEAFIgFgBIgFAAIgDAAQgMAAgKANQgKANAAASIABAIQACAMAHAKIABABQAHAJAGACIAGABIgGABIAAAAgAklCkIgBAAQgLAAgLgGQgPgIgRgFQgLgDgGgGIgFgGQgCgDAAgEIACAAIAAAAIABAAIARADIADAAIASAGIAEACIAXAKIASAIQAHAFAAAKIAAAAIgFABQgEAAgFgEgAFoCCQgFgCgFgDIAAgBQgGgGgEgKIAAAAQgEgHgBgJQAHgUANgNIgCADIgDAGIgBACQgDAJAAAKQAAAKADAIIABACIACAHIAAABIADACIADADIAEAJIgCAAIAAgBgAg4hBIgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIAAgDQAGgKAIgGIAAAAQAEgGgBAHIAAABQgBAGgDADQgDAEgEABIgBAAQACAFgDAAIgBAAg");
	this.shape_5.setTransform(-6.3,-20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AEZKZQgIgIAAgNQAAgMAIgJQAJgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgJgJgACGH8QgVgVAAgeQAAgeAVgWQAVgVAeAAQAeAAAVAVQAWAWAAAeQAAAegWAVQgVAVgeAAQgeAAgVgVgAgfFnQgdgdAAgqQAAgpAdgeQAJgJAKgGQALgHALgEIAOgDIAOAAIABAAQAOAAANADQAOAFANAIQAIAFAIAIQAeAeAAApQAAAqgeAdQgdAegqAAQgnAAgegegABXB5QgFgBgFgDQAAgDgCgCIgEgDIAAgHIAAgFQgCgCAAgDIgCgFQgSgDgOARQgDAEgBAEIgCAFIgEAEIgBAAIgOAEQgZAAgZgFQgDgDgEgDIgFgEQgCgFAAgFQAAgEgCgEIgFgCQgFgCgDADQgEAFgCAFQgHAVgVACQgnACgngBQgMAAgIgHIgBgJIgBgJQgDgDAAgFIgCgIIgFgCQgDgCgDADIgDADQgDACgBADIgCAHIgBAFQgdAUgkgKIgEgJQgGgJgEgLIgDgBIAAgBQgBgGgCgFIgGgZIgBgBIgDgBQgKABgGAGQgYAVghgHIgEgEQgSgcgIgeIAAgKQAAgEgBgDQgJgGgLAFIgCACQgEADgFgBIgFgFQgGgIgJACIAAABIgBACIAAABQAFALAIAFIAAAAQgnAMgkgQIABgOQADgQgCgRIgBgCIgBgBQgDgBgDAAIgCABIAAADIgBACIAAAFIhOgBQgEAAgBgDQgPgfACgjQACgagBgbQAagFAZgJQACAAACgCIABgCIgBgDIAAgCQgFgFgHAAQgJAAgDgIQgJgRgCgUQgCgTAHgTIACgDQADgGAGgDIADgBIADgFIAHgIIACgCIAsgCIABgBIABgBIABgDIgBgCIgBgCIgEgBQgCgEgBgFQgBgKgHgIIgBgCIgDgnQAAgLAEgIQAJgUAPgQIBLgBIAEgBIAAgBIABgDIAAgCQgBgDgDgCQgfgLAAggIAAgKIADgDIAQgRIABgBQAagBAaACIAMAAIABACIACACIADADIACACIACADIABACIAGAAIADAAIACgEIAAgBIgBgCIABgDIAAgPIAAgCIABgBIABgCQAAgFADgDQAegYAqALIABABQACAEAFgDIACAAIABgFIAAgWIAAgBIADgEQACgFABgFIAAgBQAFgEAEgFIABgBQAmgNApACIACABQADAHAJABIABABIAAABIABABIADADIAEACIADgCIABgBIABgCQgBgaAbgJIABgBIBEAAQAFAGAIABIAAAAIABABIACAEIABABIAEABIADgBIACgBQABgCAAgDQgBgHADgGIABgCQARgKAVAAIBjAAIADADQAGAJACALIAAACQAJAEAGgIIABgBIAIgEIAIgBQAjgDAjAAIAAABIADADIABACIAAAIIABAcIABACIAHAAIABAAIABgEIACgJIAAgBQAEgCADgFIABgCQAggEAgACIAAABIABAGIAAACIABAHQgBAQABAPIABACQALAEAEgJIACgBQAXgHAYAEIABAAIAFAHIACACIABADQADASgCARIABABQAFADAEgDIABgBIABgEIAAgGIAAgCQAKgIALgFIADgCIBpAAQAQgBALAIQAEAOgBAPIAAABQAAAUgIASIAAACQgGAEgFAGIgBABIAAACIABADIABACQAagDAcABIALABIAEADIABABIAGAXQAEARACAQQACAXgRAKIgKAFIgBACQgBAAAAABQAAABAAAAQABABAAAAQAAABAAAAIABACIAyACQAQAAAJALIABACIAAASIgBAkQAAAUgRAGIgXAFQgCACAAADIACAKIAAACIAEACIABABIAAACIABABQADACAAACQAIAcACAeQAAATgCATQgCALgHAIQgTAEgSgBIgCAAQgCAHACAGIAAACIAAACQAEASgGASIAAACQgPADgLALIgCACQgsAEgrgBIgCABIgBACIAAACIgBAAIAAABIgBACIAAABIABADQAJAGAHAIIABANQAAAOgDAKQgFAJgJgBIg3AAQgEgFgBgFIgCgPIgEgCIgFABQgCAGAAAGIAAAMQgSAggkgBIgJgHQgHgFAAgIQgDgCAAgEQAAgMgNABQgCAGABAHQACAfgFAeQgcAUgfgRIgBgIIgDgFIgEgCIgDgKIgDgNIgEgCIgEAAIgBABIgBACIgFAuQgEAagYAGQgZAHgaAAQgTAAgTgEgAABAvIABAAIABAAQAIACALAAIACAAQAIgIAJgGIABgBQAVgJASgLIABgBQACgFADgDIABAAQACgNAEgMIAAgBIAKgIIAAgBIAzgVIABAAIABgBIAMgEIAAgBQANgCAPgFIABgBIAfgOIAAAAIAkgNIAAgCQAAgHACgGQACgEADgCQgMACgMAHIAAABQgIABACgDIAAgBIASgKIABgBQAGABAJgGQAIgGAIgBIAEAQQABgJAKgDIABAAQAFAAADADQAJAKAPgBIABABIAEAFIAMADQAjAKAkgLQAFgHAKgCIACgCIADgFIACgCQAPgYABgbIAIgCIAOgBIADgBIABgBIABAAQASgIAUgFIAAgBQAEAAABgDIgDgLQgBgJACgKIABgSQgBgigVgbQgJgMgCgPQghgUgRgdIgogEQgfALgXgOIgDABQgbAHgVgQIgEgEQgLgEgKgJIgXABIAAgBIgRgWIAAAAIAAgBIgBgIIgBgBIgMgSIAAgCQgCgFgDgEIAAgBQABgKgBgGIAAgBQgGgEgFAHQgDAFgFgGQgTgUgagPIAAAAIgJgGQghgXg2gCQgJgFgMgCQgogFgoABIAAACIgBAAIgBAAQgdACgYAHIAAABIgBAAQgcAFgXAKIAAABIgLAEQgRAFgOAGQgWAJgTAKQgkASgVAhIAAABIgBABIgEAFIgDAEIAAABIgDAHIgCAIIgBAAIgNATIAAACIAAABIAAABQgGALgJAIIAAABQgFARgIAOIAAAEIAAABIgCAAIAAACIAAABIAAAAQgMAuggAZIAAABIgBABQgaATghAMIgcAJIAAABIgPAKIAAAAIgIABIABAHIAAACIAEAAIgEAMIgBAAIgCABQgBAFgEAEQAAAKAEAGIABAAIAAABIAAABQABAIgIAEQACAJAHAEIABABQAKAJACASIAAABQgLAEAJAKIAAABIAAABIACAAIABAAIAAABIABAAIALAJIAAABIAAADIALACQAIACAGAHIAAAAIAAAAQAZAKAcACIABAAQAIAGAGAIIAAABIACANIAAABIANAJIABABQAFAIAHAGIABAAQAQAOAZAHIAAABQAaABAbgFIAAgBQALgBAHgFIABAAQAvAQA0AKIABABQAFgCADgDIABAAQAQgDAOgKIAAAAIABAAQAHgFAJgBIABAAQgCAOALgDIAAgBQgEgMAJAIIABABQAKANAPAHIABAAQAHAHALADIAAABIAEAAQAMAAAFAGgAg6AAIAAAAQgBgNgEgLQADgOABgPIgBAAIAAgBIAAgBIAKgXIAGgQIAAgBQALgUAPgQIARgQIAAgBQAJgCANAAIABAAIAQAHIABAAQAPAKAKAQIAAAAQAJAbAAAkIAAABIgHARIAAABIgBAAIgCABQAGANgFAIIgBABIAAAAQgPAXgbANIgBAAIgIABIgFAAIgIAAIAAgBQgJgIgDAJIgDABQgegDgMgXgAgchGIAAABQAAAMgDAJIAEANIABAAIADAKIABABQAEADAEAEIAAABIAOAGIABAAIAFgBIACAAQANAAAKgNQAFgGACgHQADgIAAgJQAAgSgKgNQgIgKgKgCIgBgBIAEAAIAFABIgDgFIAAgBQgKgLgMgFIgCAAQABAKgDAGIgCAAQgFABAAAFIgBAAIgMAbgAGLh0QADAAABgDQANAAALgGQAFgDADgFIgFAFQgJAAgEgDIAAABIgEABQgUAHgWgCQgJgBgHgEIgGgFIAEgNIABgBQAFADAGACIAAABIACAAIgFgJQAIAJALAAQAMAAAJgMQAJgNAAgRQAAgSgJgMIgFgGIAGABIABgBIAAgBQAIgCgDAFIAHAEIAGABQAEACACAEQABgDADgBQAHAAAFACQAXAEgHAaIgBADIgDAZIgCACIgDADIAAACQgBAGgDAFIgCABIgCABIgBAEIgCADQgUALgVACgAE5i+IAHgTIAAgBQAJgUAOgPIAAgBQAQgLAVgHIAAAAQAIgCAKABIABAAIABAAQACACAEAAIABABIAHAGIAAABQACAIAEAGIAAAAQgegEgLASIgBAAIgBAAQgNAAgJANIAAAAQgNANgGAUg");
	this.shape_6.setTransform(-6.3,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-61.1,132.1,137.1);


(lib.twiggshand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgoBEQgLgIgNgFIgBgCIABAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAMgngLgoIgBgFIAvgSIABAAIAngSIAAAAIAHgDIAFgBQAKADAIAFQAMAIAAADIgCABQgVAGgPAJIAAAAIgIAFIgHAAQATAOAOAZIgFgBQgtgQAtAgIAAACQg0gPAlAcIACAAQAGAvgdggQgFAHgMAGIAAAAIgBAAIgOAJIAAAAIgBAAIgEADIgIgHg");
	this.shape.setTransform(-10.6,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBPIAFgCIgBABIgDACIgBgBgAAABPIgBgBIgDAAQgFgBgCgCIAAACIAAAAIgSAAIgBAAIgBAAIAAAAIAAgBIAPgIIAAAAIAAAAQAMgHAGgHQAcAhgFgvIgDAAQgkgcAzAPIAAgDQgsgfAsAPIAFABQgNgZgUgNIAIAAIAHgFIAAAAQAQgJAVgGIABgBQAAgDgMgIQgIgGgKgCIgFABIgGADIAAAAIgoASIgBAAIguASIAAAFQALAogLAmQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAABIgBAAQgCgEgEgDIgCgBIgFAAQAFgpACgiIAAgFIADgEIABgGIAPgHQAHABADgFIAJgDIAEgBQATAAANgKIAAgBIABAAIAMgEIADgCIABAAIAPgHIAFAAQAnAHAGAnIgLALIgsgHIABADQASAHASAGIgEAHIgBABIAAAFIgCAAIAAAFQgEAZgGAYIgNARQgHAJgFgBIgIABIgOgBg");
	this.shape_1.setTransform(-10.3,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-1.4,16.5,16.1);


(lib.TwigArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AknAtQgKgmgGgLIADABQAMgMAZgTIANgKIAGAUQAGAUAAAHQAAAnAYAVIARAAQBEgXBjgcQASgFBkgTQAtgKAXgIQAagJAAgHIAAgBQAIgGAIgJIAJgLIgCgDIACgCQABgHAFgLQAHgOAIAAIADABQAAAGACAFQAFALAOAAIAFAAQgDADAAAFIABAEIgFgDQgLgFgFAAIgBAEQADAGAJAGQAJAGAEAAIAGgBIABAAIAAACIADAJQAFAIAJAAIAMgEQAJgEABgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgDgBQgMAEgHAAIgDgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIACgCIAEgBQAEgCABgCQALgCAVgBQADAIAAAFQAAANgOAOQgXAXgtgLIgDAAIAAABQgKABgHABQgEgHg6ATIgQADQhgAjgkALQhCAVgpAUIghANIgcALQgJAFgeAEQgeAFgEADIgWAAQgRgSgPhBgAEHhMQgGgBgCgCQAIgEABgDQAFgDAagDIAMAMQgbAAAAABIgMAEIgFgBgAEBhlIAAgMIATgBQALAAAGAMIABABQgVAAgLAFIgFgFgADrhkQgDgBAAgIIACgDIgBgCQAAgFACgCQAIgHAZABIADADQgPgBgFAGQgDACAAALIAAAGg");
	this.shape.setTransform(32.7,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkpBOQgNgjgJgrIgCABQgBAAAAAAQgBAAAAAAQABAAABgBQAAAAACgBIgCgHIABgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQACAAACACIAOgMQAfgaAKgFIAAgEQAAgEAEgCIAEAGIABADQAHASAHAqQAHAvAMAAIARgGQASgFAIgEQALgFAWgDQAXgCADgBQAUgJAVgHIAkgLQAtgNCOgjIAPgEIAMgMQAJgKAGgJIAAgCQAAgOAOgOQAKgKAJACIAAgCQABgGAIgEQANgHAPAAQANAAAFAHQACADAAAFIAAACIAHABQAIACAFAJIAJAPIAAABIAEACQAGAHABADIAAAJQABAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIABADIAAAMQAAANgHAOQgNAWgZABIgrgCIAAABIgSABIgGACIgEABIgEAAIAAAAQgPAEglALIgBAAQhfAYg9AZQhKAfgfALQhjAkgqAAQgXgBgWg8gAklAuQAPBAASATIAVAAQAEgDAegFQAegEAJgFIAdgLIAggNQApgVBAgUQAmgLBggjIARgEQA5gSAFAHQAGgCAKAAIABgBIADgBQAsAMAXgXQAOgOAAgOQAAgEgCgIQgWABgLACQgBACgEABIgEACIgBACQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAEABQAGAAAMgDIADAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAADgKADIgLAFQgKgBgFgHIgCgJIAAgCIgBAAIgHABQgEAAgIgGQgKgGgDgGIABgEQAFAAALAFIAFADIgBgEQAAgFADgDIgEAAQgPAAgFgMQgCgFAAgFIgCgCQgJAAgHAPQgFALAAAHIgDACIACADIgJALQgIAJgIAFIAAABQAAAHgZAKQgYAIgtAJQhkAUgRAFQhkAchEAXIgQAAQgZgVAAgnQAAgHgGgUIgGgUIgNAKQgZATgLALIgEAAQAHALAJAmgAELhVQgCADgHAEQABACAGABIAFAAIAMgDQAAgBAbAAIgMgNQgaAEgEADgAEEhwIAAALIAEAGQALgFAVgBIAAgBQgHgLgLAAgAD7hjIAAgGQAAgLACgDQAFgFAPABIgDgDQgZgBgIAHQgCABAAAGIABACIgCACQAAAJADABIAOAAIAAAAg");
	this.shape_1.setTransform(32.4,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.8,27.8);


(lib.daydreamingguystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("ACHCiIgJgGIAEgGIAAAAIAGgKIAEgHQALgVAGgXIAHACIgBAIIAIgpIABAAIAFABIACAQIgTBNIgBADIgiAkIgCABIABgBIABAAIAHgDIgRAXIALgGQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgEAEIgZAHgACYCVIgBAJIACgKgACYCJIgBACIABgBIAAgBgACnBcIADgHIgCAAgACoCnIALgRIAjhQIAEgMIAAAAIAAgBIABgFIABAAIAAgBQACgMgCABQgDABgHANIgHAYIAAABIgJAZIgShwIgNgUIACgCIAAgBIAAgBIAAAAIgBAAIgHgmIAEgBIAHAGIAAAAIAAAAIgIgXIgBgDIABAAIANAFIAAAAIAAABIABAAIAGACIABAAIABAKIgBACIgBADIAAABQgBAAAAAAQAAABABAAQAAAAAAAAQABAAAAABIAAAAQAEAAAJgFQABAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAIANAXIAFAHIAAABIgMgIIAdBJIgJg1QAIAPAFAOQADAMACAMIAAAUIAAAMQgCAUgIAWIgBADIgVAbIgCgCIgFAIIABABIgjAsgADDBNIABgHIAAgEIgDAAIACALgADgA7QADgDAEgCIAAgKgACzgdIgBAAIAAgFQgCgHABgEIABgCQABgDADABIADABIAIAFIgHgGIgDgCIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgCADQAAAEABAIIAAAAIAAABIABAFIABAAIAAAAgADEgtIABAAIAAAAIABAAIgCgDIgDgCIADAFgACxg8IAFAEIAAAAIABABIgBgCIAAAAIgFgFIgBgBIAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIAGAFgACshQIAAACIABABIACADIgBgGIgBgDIAAgBIgBAAIAAAEgADgCkIAEgMIAGgNIAfgoIAFgCIABgCQAHgOAFgDQAFgCABAIIAAAGIgGAJIgUAYIgBgBIgCgBIgeAugABcBZIAEgFQASgdgPALIAEgPIAAAAIABgBIgBgBIAJg2IAFABQAJATgHAQIgDAEIAAAMIAFAAIABgCIAFAFQgOAagPATgAECAyIABAAIgFgvIgCgKIgbhDQAJgIAGAHQAGAFACAJIAKAiIAAABIAAAAIAAgBIgHggIAAAAIgDgIIgDgHIAVAAIAAABIABAAIAAgGIgCgNQAEABADACQANALAHAOIgCABQACADAAAEIgRgPIAAgBIgBAAIABABIAVA8IABAGIgGAmIADACIgNAHIgUAcgAETAsIADgGQABgCgBgEQgGAQADgEgAEFglIANAKIAMA3IgNhDgAENhAIAAABIABgBIgCgEgACWAlIAAgmIAQALIAAACIAAABIgJAbgAjsAaQgDgCgBgGIgBgDIACgDIAAgBIABgCIAAAAIAGgLIgJgSIAAAAIAAgBQAJgbAMAUIAAACIgDAHIADAbIAAADQABAFgCAGIgDAEIgEADIgCAAQgDAAgDgDgAk/gKIAFgTQADgLADgDIACgCIACAAIAAgCIgBAAIAAAAIANgVIAagVIgNAkIgCAGQgKAHgIgDIAEAGIADAHIACAHIAAAAIgDABIgUAOgAE4gNIgEgVQgFgbAIgCIAIAgIABANQABAHgDAAQgDAAgDgCgACMgwIgBgBIgBgBIgDAAIACABIgGgBIgOgOIgtgTIBNAIIABAAIAAABIALAfgAgDgtIAAgHQgEgIgOANIABgZIACgSIAAAAIgBAAQAAgEgGAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIgHgGIgDgHIAgAMIgfgWIgRgUIAVACIgCgCIgBAAIgSgGQgIgJAMACIABAAIAAgBQgNgEADAJIgFgFQgEgHAMACQAKADAIgDQATAFANALIgBABIADAAQAFAAADAFQAEAFABAHIAAABIAAgBIAFAJIAFAOIABAEIAIgMIgSgiIABgBIAOAKIAAgFIAGALIAEAGIAEgMIgFgLIgqgiIglgOIgRgEIAxADIAXALIABABIAdAlIANANIAIAEIABABIACABIAcAQIAHgLIAfgIIABAAIgBgBQAJgDgCgHIgBAAIAWgKIBLARIAAABIAYAOIAWAOIgBAAIgbgBIgSgOIgGgDIgxgHIgBAAIgNAIIgHACIAAAAIgeAFQgEADgBACQgBADADACQADACADgEIAAgBIADADIgBAAIADACIASAUIgCAEQgcgMgcAAIgDAAIgSACIgBAAIgBAAQgMACgMAEIgBgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQgKgJgDgBQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAIABAHIABAAIAOAGIABAAIAAAAIAuAIIAAACIgZAAIgvgMIgDAFQgCAFABAEIAAACQACAFAGAEIAWgIIAbAFIAGAFIgDADIgKgFIhDAKgAAIhPIgIACIAAABQgDAEgEABIANABIADgCIADgEQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgDgBIgBAAgAgKhlIAQAMIgEgTQgEAFgHABIgDgBgAAchpIAAAAIAAAEIAAACIACABQAEABALgGIACgDIgIgBIgDABIAAgBIgHgBIgBADgAC+iCIABABIAJAAIgcgJgAjfg7IASgMIgHASQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgFABQgHAAAEgJgAjGg5QADgIAQgSIAEgDIAegMIADAEIgwApgAjzhNIAAgCIAAgBIALgLIABAAIgFAMQgFAGgBAAQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBgADbhSIgYgTQgEgDgCAEQgFAIgFgCIgBgBIgDgEIASgHIgBAAIAEgBIAKgCIABAAIAAAAIAAgBIAAgBIAAAAIACAAIAAAAIACABIAEACQATAJgKAOIgDADIAAAAIgCAAgAjlhWIgDAAIABgFIAAgBIACgFIACgBIABAAIANgIIAAgCIABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAACgDAFIgRAPgAkDh1IAAgBIAbgNIACAEIgdASIgBAAQgFAAAGgIgAiZiIIACAAIAAgBIAGgCQAQgGgHAJQgEABgCACIgBACIgXANgABAiGIAAgBIgDgJIgwgmIgBgBIgPgQIABgBIgDgBIgCgBIgDgCIgBAAIAAACIgEgBIg8gMIAegCIAAgBIAEAAIACAAIAdAAIAhAEIAGAAIABgBQAYAIALAVIAQAfIABACIgDABIACAQIABAIIgDgDIgDAJgAjIipIgBgBIAAgBQgFgEAAgEIAHgIIADAAIAUgHIAagKIAAAAIABgBQAGAAgDAHIAVABIgdALIAAgBIAAACIAAAAQgVAIAMAFIABABIAEgBIAWgHIBRABIAFACQAKAEAHAHIgWgEIhOADIgEgFIAAgBIgBAAIABABIABAFIgZAEIgFABg");
	this.shape.setTransform(16.8,-49.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B1D16").s().p("AAAABQgCgKADANIgBgDg");
	this.shape_1.setTransform(140.6,61.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E9092").s().p("AgHgPIAAgDIAQAfIAAAGg");
	this.shape_2.setTransform(140.7,66.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B4A99E").s().p("AAagDIAJAAIhFAIg");
	this.shape_3.setTransform(128.2,62.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#898882").s().p("AAMgOIguAIIgJAAIAAgBIA5gKIAfAfIAAADg");
	this.shape_4.setTransform(135.3,62.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#70655A").s().p("AAsgFIAAABIg8AIIgBAAIgaACg");
	this.shape_5.setTransform(126.3,62.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#757069").s().p("AgqAFIAAgBIBVgKIgBACIhBALg");
	this.shape_6.setTransform(125.9,61.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#564B41").s().p("AgFAAIAAgBQAMgKgCANIAAABQgCADgDAAQgFgBAAgFg");
	this.shape_7.setTransform(129.4,57.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2A69E").s().p("AAAAIQgLAAABgKIAAgBQAHgHALADIABAAQACADAAAEIgBAAQgFAEgFAFgAgIgCIAAABQgBAGAHABQACgBACgCIAAgBQABgHgDAAQgDAAgFADg");
	this.shape_8.setTransform(129.8,57.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D6C5E").s().p("AANgIIgFAFIgBABQAAACgEADIgCACQgEAEgJAAg");
	this.shape_9.setTransform(121.6,58.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#90837A").s().p("AAAAFQgEgCAAgFIAAgBQALgGgCALQgBABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgCgBg");
	this.shape_10.setTransform(125.5,58.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7C898B").s().p("AAKA2IAWgRIhEhcIBJBdIgcASg");
	this.shape_11.setTransform(122.8,49.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A89082").s().p("AgWAKIArgWIAHgCIg3Adg");
	this.shape_12.setTransform(125.3,56.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#81726A").s().p("AgHgEIAAgBIAAgBIAAAAQAPgEABAPIAAABIAAABIgBAAIgFABQgIAAgCgMgAAAAAIABADIgCgGIABADg");
	this.shape_13.setTransform(140.7,61.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#946F5E").s().p("AgHgJIAAgBIAPAVg");
	this.shape_14.setTransform(138.9,61.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#746B62").s().p("AglABIALgBIgMADgAAlgCIACAAIAAABg");
	this.shape_15.setTransform(134.1,60.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706356").s().p("AAAAAQACAAACAAQACAAAAAAQABAAgBAAQgBAAgDAAIgCAAgAgFAAIAAAAIADAAIgDAAg");
	this.shape_16.setTransform(135.4,57.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#382B1F").s().p("AAAABIgDgBIgBAAIAAAAIAGAAIADABIgFAAg");
	this.shape_17.setTransform(135.1,57.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B6ACA3").s().p("AgMgFIgBgBQAMgHAKAKQADADABAEQgCADgEACIgBABQgOgCgEgNgAAAAAQADAAABAAQABAAgBAAQAAAAgCAAQgCAAgBAAIgHgCIAAACIABAAIAAAAIADAAIAEAAIAAAAg");
	this.shape_18.setTransform(135.6,57.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E786A").s().p("AgDAEQAOgPgMAPg");
	this.shape_19.setTransform(137.8,54);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#241810").s().p("AgKABIAAgBQAogNgfARIgBAAIgEABQgDAAgBgEg");
	this.shape_20.setTransform(140.1,50.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#746C62").s().p("AgCgDIABABIABAAQAAAEAHgCIABAAIAGAAIgbAEg");
	this.shape_21.setTransform(139,51);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B19181").s().p("AgCAIIABgDIAEgMIgBAPg");
	this.shape_22.setTransform(150.2,67.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#27190E").s().p("AAAABIABgBIgBABg");
	this.shape_23.setTransform(149.8,68.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#768888").s().p("AAAAEIAAgDIAAgEIABAHg");
	this.shape_24.setTransform(141.7,68);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#493930").s().p("AgCADIAAAAIgCgGIACgBIAHAEIgCADIAAAAIgBABIgCABIgCgCg");
	this.shape_25.setTransform(143,64.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#99857C").s().p("AACAEIACgEQAFADgFABIgDAAgAgGgDIACABIgCAAIAAgBg");
	this.shape_26.setTransform(143.1,64.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1F1509").s().p("AgBgBIABgCIABAAQABAIgBAAQgBAAgBgGg");
	this.shape_27.setTransform(149.9,66.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1F150F").s().p("AAAAEIAAgNIAAgBIAAABQACAUgBAAIgBgHg");
	this.shape_28.setTransform(151.8,59.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E120B").s().p("AgCgBIABAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIACACIgFgDg");
	this.shape_29.setTransform(157.5,57.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#24170D").s().p("AgMAAIAFAAIAUABg");
	this.shape_30.setTransform(160.6,57);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B9ADA5").s().p("AgCAEQAOgFgVgGIgCgEIAXAAIgMAXg");
	this.shape_31.setTransform(157.3,54.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#816E63").s().p("AAAAFQADgDgEgEIgDgCIgBAAIAAgCIAAAAQAVAGgQAGIgBABIABgCg");
	this.shape_32.setTransform(156.9,54.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3A2E2B").s().p("AgDgFIACABIABACQAGADgEAEIgCABg");
	this.shape_33.setTransform(156.6,54.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AA9C93").s().p("AgGADQgCgEgBgJQAJgGAGAHIAAABQAIALgIALIgBAAQgHgBgEgKg");
	this.shape_34.setTransform(152.6,54.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6C6358").s().p("AgcAAIAgAAIAZAAg");
	this.shape_35.setTransform(114.1,63.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AEA79D").s().p("AAJABIgWgBIAbAAIgFABg");
	this.shape_36.setTransform(116.1,63.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9A8D85").s().p("AgkAEIAFgCIApgDIAbgCIhHAHIgCAAg");
	this.shape_37.setTransform(120.8,63.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#846C60").s().p("AAUgKIghATIgGACg");
	this.shape_38.setTransform(116.5,60.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C7367").s().p("AgbgEIAGgBQgEAGAGADIgWACgAAqAAIAAAAIgNAAIANAAg");
	this.shape_39.setTransform(117.3,62.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#919390").s().p("AAYgLIgBADQAAAFgHADQgHACgJAAIgXAJg");
	this.shape_40.setTransform(121.5,56.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7B807E").s().p("Ag0AgIBQg5IAZgJIhkBGg");
	this.shape_41.setTransform(116.1,60.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#615248").s().p("AACgEIgCADIAAAAIAAABQAAAAACADIACACQgOgIAMgBg");
	this.shape_42.setTransform(117.8,40.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A79184").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_43.setTransform(117.4,37.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#41372E").s().p("AgPgDIASABQgKAAAWAFIABABg");
	this.shape_44.setTransform(157.6,47.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3E2F25").s().p("AgNAAIAAAAQgYgGALAAIALABIAuAMg");
	this.shape_45.setTransform(160.6,48.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#463A32").s().p("AALAAIgEACQgmgGAqAEg");
	this.shape_46.setTransform(153,46.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B49F92").s().p("AgRALIAlgcIADAAIguAig");
	this.shape_47.setTransform(154.5,43.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6B5648").s().p("AgVAQIArgfIgEADIglAcIgCAAg");
	this.shape_48.setTransform(154.7,42.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDFCFA").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(152.5,42.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6B6C64").s().p("AgUAOIAAgBIABAAIgBgLQAIAEgBgGIAAgCIABAAIAigOIgrAhg");
	this.shape_50.setTransform(154.6,41.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#806D60").s().p("AAEAHIADgEIgBADIgBABIgBAAgAgBgDIgFAAQALgHACAJQgCgCgGAAg");
	this.shape_51.setTransform(152.7,40.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#32281F").s().p("AgCAIIgEgQIAEAAQAGAAACACQACACgCAEIgCACIAAABQAAAGgEAAIgCgBg");
	this.shape_52.setTransform(152.8,40.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BEBAB4").s().p("AgTAVIgLggIAMgEIAQAMIAfgRIACAAIAAACIgJAKIgiAMIABAAIABgEQACgBgCgDQgCgJgNAHIAFAQIABALg");
	this.shape_53.setTransform(154.6,40.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6E615A").s().p("AACAGIgCgDIAAgDIgDAAIgBgHQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAFALQAAABABABQAAABAAAAQAAABAAAAQAAAAAAAAIgDgCg");
	this.shape_54.setTransform(145,45.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#604E41").s().p("AgQAGIAigLIgfALg");
	this.shape_55.setTransform(147.2,40.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6D6055").s().p("AAVgCIgXAAIAzgTQgOAHgCAKIAAABIhRAZgAAqgIIADAAIAAABIgIADIAFgEg");
	this.shape_56.setTransform(141.2,42);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C5B8B2").s().p("AgCACIACgCIgMgLIAQAIIgEADQgIAOAVgOIgBABIgMAKIgCABQgDAAADgKg");
	this.shape_57.setTransform(151.1,42.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8B8985").s().p("AgFAAIAAACQAOAAgKgMQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAgEIAKAMIgCADQgDALAHgEIgHAGIgGADg");
	this.shape_58.setTransform(150.4,43.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3C2F2B").s().p("AgCAHIAAgDIgCgKIACAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAMALgNAAIgBAAg");
	this.shape_59.setTransform(150.1,42.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#332A20").s().p("AglATIAAgBQACgKANgHIATgBIAIgIIATgCIAMgJIADALIgiAKIgiAMIgEAEIgBABIgDABg");
	this.shape_60.setTransform(148.4,39.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#767472").s().p("AgGABIAMgDIAIgCIgKAIIgRABg");
	this.shape_61.setTransform(147.6,39.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E5DAD2").s().p("AgeAGIAbgJIgHADIgGADQgRgCATARgAARAAQAGgKgHgBIAPgFIgMAQIgCAAg");
	this.shape_62.setTransform(155.8,38.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9C8E84").s().p("AhBAZIAAgCIAggMIAhgLIBCgYIAAAAQAAASgNAGIAAgCIAMgTIgPAFIgVAJIgbAIIgKAEIg4AUIgBAAg");
	this.shape_63.setTransform(152.4,38.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#463930").s().p("AgjAGIAugTIAOgDIALADQgJgBAEAGIACACIhBAXg");
	this.shape_64.setTransform(155.7,36.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#917A6B").s().p("AgRAgIADgEQAggagJgdIAAAAIgJgDIAAgBIAAAAIAJABQAGACADAEIAAABIgGAYIgBABIAAAAIgFAIIgUAWg");
	this.shape_65.setTransform(158.4,38.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2C221A").s().p("AguAzQgFgKALgGIAHgFIAMgKIAsghIAIgKQAOgGAAgSIgBAAIgCgBQgEgGAJAAIAAAAQAJAgghAYIgrAhIgXAUIgDgEg");
	this.shape_66.setTransform(154.6,40.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A9A29F").s().p("AAJgBIAAABIgLABIgGABg");
	this.shape_67.setTransform(157.3,35.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8B8983").s().p("AAegMIAHgCIAGgBIguATIgMAJIgTACIgIABg");
	this.shape_68.setTransform(152.6,37.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#62564B").s().p("AgiAJQAggQgqAMIAAABIgBAAIgBAAIAJgGIARgFQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIAAgBIAlADIAXAFIAEAAIgDAAIhIAJg");
	this.shape_69.setTransform(143.4,49.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7F756D").s().p("AgCAEIAAgBQAMgNgKALIAAABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_70.setTransform(141.6,48.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#AA9E95").s().p("AgwAZIgHgMQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAgBQACgDAEgDIBFguIADACIAAADIADAEIgRAUIAhACIAKAOIgWgFIgmgCQAJgOgMAPIABABIgSAEIgJAIIgKAIIAcgFIBIgJIAFAIIhIACIgiAiQAOgQgQAQIACAAIgHAHgAgxAvgAAVgxQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBAAgBAAIAGgDIAIADIADAEIAAABIgGAIIgHgMg");
	this.shape_71.setTransform(142.6,49.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#85776E").s().p("ABgAMIi/gTIgBgCIAFgCICFALIA3ALIAAABIgBAAg");
	this.shape_72.setTransform(124.8,39.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6A594D").s().p("AgCAAIACAAIADAAg");
	this.shape_73.setTransform(134.8,41.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9D978F").s().p("AgZANIBVgbIgHAEIg1ARIgRAIgAg2AEIgFgCIAAgBQASACANAIIABABIgbgIg");
	this.shape_74.setTransform(140.7,40.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#30251C").s().p("AgdAOQgGgBgCgIIAbgFIAwgOIgDAKIgYAGIgCAAIgfALIgFACIgCgBg");
	this.shape_75.setTransform(129.1,45.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A79187").s().p("AgNgXIACgGIAAABIAUAWIAFAiIgHACg");
	this.shape_76.setTransform(126.7,51.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58493D").s().p("AgEgBIAEgDQAKADgKAFg");
	this.shape_77.setTransform(124.7,48.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1A120E").s().p("ACRCSIgCgIIgSgiIgfghIg7AKIhXANIgsAFIgdABIgiACIBmhIQAKAAAHgEQAHgEAAgFIAbgRIhKheIgogzIDAAUIAHACIAbAIIACABIAIACIATgIIAZAAIhGAbIgFABIggAGIADgKIAmgLIgGgBIABAAIgGgBIgDgBIg0gLIgqgJIgtgGIgLAAQgNgBgHAAQgOACAQAJIAPASIArA1IAFAHIAGAFIAUA1IgrAYIgaATIgFACIgBgBIgBABIgLADIgpAWIgOAMIAWgCQAJAFAigIIAHgBIANgBIAUACIBAgNIANgCIA4gKIAJAGIACABIAQAXIAGAHIAIAMIAOATIAFAQg");
	this.shape_78.setTransform(127.3,53.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BDADA2").s().p("AhiAeIAAgCQADAAAFgBIAggMIADAAIA3gNIADgBIBTgZIAAAAIiiA0IgTACgABagaIAIgDIABAAIgKAEIABgBg");
	this.shape_79.setTransform(135.9,44.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8D7567").s().p("AAQAbQALgIgLgCIgFADIgpgzIACAAIAUAXIADAFQAGALAGACIAFAGQAKgGAIAKQADAEgCABIgBABIgCAAIgFAAIgBAGg");
	this.shape_80.setTransform(123,46.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#78716A").s().p("AgMADIACgBIAXgFIAAACIgZAFg");
	this.shape_81.setTransform(126.5,45.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#75695F").s().p("Ag1AEIACgCIABAAQACAJAGABIAAABgAAWgGIAggGIg2AMg");
	this.shape_82.setTransform(130.3,45.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D8CFC8").s().p("AgPApIAFAAIgFABIAAgBgAgIAjQgIgKgKAHIgFgHQAEABADgEIAEgGIALAKIAEAAQAFALgHAEQACgCgDgEgAgRAPIABgBIAAABIgBAAgABSgQIikgXIAXAcIAFgKIAEANIABAAQAFAFADgHIAAAAQgBgQgJAAIADgEIAFAGQACABABADQABAGAAAFQgBAHgGgBQgMgHAKAPIgUgUIgVgZIgBgBIABAAIBOAEIAqAJIA0ALIADAAIAFACIAAAAIhTAVIgWAHg");
	this.shape_83.setTransform(127,44.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#78756F").s().p("AggAWIBQgWIAHAAIgnAKIgwAOIAAgCgAg2gVIAAgBIAsAJg");
	this.shape_84.setTransform(131.2,43);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8D7D71").s().p("AgSAOIgQgQIgCgCQgCgDABgCIAVAXgAglgKIACgDQAGAAAOABIALAAIArAFIAAABg");
	this.shape_85.setTransform(121.8,41.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8E7E76").s().p("AAAAHIgBAAIgEgKIAAgDIAAgCIADAAQAHAAABAOIAAAAQgCADgCAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBgAgEgFQAKAWgHgUQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAgBAAIAAAAIAAAAg");
	this.shape_86.setTransform(122.1,42.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2D221D").s().p("AgCgEIAAgBIABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABIADAIIgFgKg");
	this.shape_87.setTransform(121.9,42.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#AB978A").s().p("AhggfICXgPIACAAIA+gEQg8AVhsgBQgYAAgWACIgXBPg");
	this.shape_88.setTransform(162.5,61.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#211A0C").s().p("AgIgCIAAAAIABAAIAHAAQASACgSADIgCAAQgGAAAAgFg");
	this.shape_89.setTransform(168.4,56.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4D4139").s().p("AASALQgDgGgKAAIgXgQIAlALIAAAMIgBgBg");
	this.shape_90.setTransform(162.1,53.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#857C74").s().p("AgFgDIAAgBQAHAAAEAEIAAABQgGAEgBAAQgGAAACgIg");
	this.shape_91.setTransform(163.3,54.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B7B3AD").s().p("AgIgCIABAAIAQAFg");
	this.shape_92.setTransform(167.4,50.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#18100B").s().p("AAAAGIAAgBQAAgWABAXg");
	this.shape_93.setTransform(178.2,55.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#291D13").s().p("AgEAAIATAAIgdABg");
	this.shape_94.setTransform(174.8,55.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#473B31").s().p("AAAAJQgDgBgBgEIAAAAIgBgDIAAgBQgCgIAGAAIADABQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAIABABQABADgGAIIgBACIAAAAg");
	this.shape_95.setTransform(171.9,52.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#483A2E").s().p("AiVBIIACgEIAEgSQAGARgDgTIgCAAIAKguIAIgQQAHARgGghIA3gKQALALgHgKQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIAAgBIABgBIASACIAbAAIgWgCIAxgBIAbgGQAAAHAFAAIiXAPIgVBTIgGANIgDADgAArgwIAJAAIAOgGIAYADIAfgDIgVgBIAUgIIAFgBIgCgBIAFgBIgBgEQACgCAOAFIABABQANAMgPAFQgCgZgCAYIAAABIgjADIg/AEQAUgDgRgDg");
	this.shape_96.setTransform(164.1,61.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#797068").s().p("AiWB3IAAgBIAghtIAAgBIAMgBIAugDIAAABIgBAAIg2AKIgBAAIAAAAIAAAQIgIASIgKAuIgBACIgEASIgCAEgAg6AEIC6gUIgUAIIgKAEIgYgDIgOAGIgJAAIgKAAIAAAAIAAAAIgbAEIgxABIgFABgABigcIgMgDIABgCQAGgLgCgCIAAgBIAbALIABAAQAQAHAQAKQgPgFgCABIABAEIgEACgABPglIAAgDIABADIgBAAgAA3gyIgFgDIgSgIIgNgDIgEgBIgPgFIgBAAIiBgbIgEgBQgNgHAMgKIAHgDQgLAGAFAKIADADIAYgTIABAAIgFAGQBdAWBlAoQgHAAADAKIgYgKgAgohSIArAHIgugOIgKgBIgTgBgAhfheIAFgDIgXgCQgFAAAXAFg");
	this.shape_97.setTransform(163.4,56.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B0B2AE").s().p("AABAFIANgQQAAAKgJAGQgGAHgMAAg");
	this.shape_98.setTransform(-92.4,31);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#928981").s().p("AAHACIACgDIAEgBIgDAFIgDgBgAgMABQAJgFADAGIgMgBg");
	this.shape_99.setTransform(-94.2,36.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#50483B").s().p("AABADIgIgDIAOgDQADAHgHAAIgCgBg");
	this.shape_100.setTransform(-89.6,36.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#848178").s().p("AAAAFIgXgGIANABIAKACQAHACgEgIIAVAEIgTABIgFAEg");
	this.shape_101.setTransform(-89.2,36.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#DCD9CC").s().p("AgCgBIACgDQAIgJgHARIgBABQAAABAAAAQAAABAAABQAAAAAAAAQAAAAgBAAQgBAAAAgJg");
	this.shape_102.setTransform(-86.9,28.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B0A295").s().p("AgFgGIADgGIAAAFQAAAPACgIIABAAIAFgGIgHASIgBABg");
	this.shape_103.setTransform(-86.9,28.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#828A8A").s().p("AALgOIAFAAIgWAWIgJAHg");
	this.shape_104.setTransform(-88.9,26.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#5C5851").s().p("AgHASIAHgTIADgFQgDAJAAANIAAABIgHADgAAIgTIgDAHIgBgBQgEgBgGADg");
	this.shape_105.setTransform(-86.4,28.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B8B5AF").s().p("AgDAAIgDACIAAgDIAAgEIACgBQAEgDAGABIABACIgCAGIgDADIgDAGQAFgSgHAJg");
	this.shape_106.setTransform(-86.6,27.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A7A099").s().p("AAAAEIAAgHIABABIgBACIAAABIAAADg");
	this.shape_107.setTransform(-108.2,39);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#56554F").s().p("AAAACIAAgBIAAgGIAAAFIABADIgBACIAAgDg");
	this.shape_108.setTransform(-108.1,38.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B2B2AB").s().p("AgGgFQAJgKAPAAIgiAYIgBAHQAAgOALgHg");
	this.shape_109.setTransform(-106.5,36.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C2B8AE").s().p("AgcAKIABgDIAagDIgMAFIgQACIABgBgAgDAAIAhgKIgaAKIgHAAg");
	this.shape_110.setTransform(-99.1,35.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#675C50").s().p("AgHANIAKgGIAGAAIABgBIAAgCIAbgKIgkAJIgQgDQANgGAOgFIALgDIAIgBIAAABIAAAAIAAAAQAZANhDARgAggAKIgCADIgDABIAFgEg");
	this.shape_111.setTransform(-99.8,34.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7A7972").s().p("Ag4AZIAPgGIAtgMQgOAFgOAHIgIgBIAAABQgGADgCAGIgzAWgAAygDQAMAAAIgHQAJgIAAgKIAFgOIAIgHQAAAWgUAQQgUAOgdAAIgBAAIgHABg");
	this.shape_112.setTransform(-98.9,32.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#8E867E").s().p("AgPAAIgCAAQgEAEgEADQgEgDAOgEgAALgEIAQgCIgEADIgRADIAFgEg");
	this.shape_113.setTransform(-103.4,36.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#979894").s().p("AgRALIAjgVIgHAKIgXALg");
	this.shape_114.setTransform(-85.9,24.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#757A74").s().p("AgKAIIANgQIAQgJIgDAFIgiAeg");
	this.shape_115.setTransform(-82.9,22.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#A0948C").s().p("AgEAAIAJAAIgDABg");
	this.shape_116.setTransform(-28.4,65.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#787B77").s().p("AgGAEIAOgLIACAAIgNANIgGABg");
	this.shape_117.setTransform(-23.3,62.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A89D93").s().p("AgBgBIABAAQAFACgEABIgCgDg");
	this.shape_118.setTransform(-36.9,65.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B6ABA2").s().p("Ag9AKQAFgBgHgEIAFAAIAGAFIgIABIgBgBgAABAKIAEAAIAAAAgABAgKIgDAEIgCABg");
	this.shape_119.setTransform(-30.5,64.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7D807D").s().p("AgeASIApgdIAUgGIgUAIIgHAJIgHAGIgYAMg");
	this.shape_120.setTransform(-19.4,60.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#838785").s().p("AATgQIASgFIg1AlIgUAGg");
	this.shape_121.setTransform(-14.5,56.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#878984").s().p("AAjgSIAFAAIg9AgIgSAFg");
	this.shape_122.setTransform(-8.5,52.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C2BEB7").s().p("AgCgBIgBgCIAHAGIgCABIgEgFg");
	this.shape_123.setTransform(-51.9,55.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#A5A49E").s().p("AASALIg1gjIgBgCIAMAGIA8AsIABABIAAACQgJgJgKgHg");
	this.shape_124.setTransform(-56.5,52.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#56564D").s().p("AgfgVIAhAUQATAPgPgOIgBAAIAbAPIgDABQgEACAFAEg");
	this.shape_125.setTransform(-55.9,52.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2F271B").s().p("AgEgDIAAgBIAEACIAAABIAFAGIgJgIg");
	this.shape_126.setTransform(-55.1,52.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9C938B").s().p("AgIAIIgKgIIgDgBIAAgCIAOALIgBAAgAAMgGIAAgBIAKAIg");
	this.shape_127.setTransform(-50.5,55.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#AC9688").s().p("AAVAVIgngfIAAAAQgGgCAAgHIABgBIABAAIAMABIAjAnIAAABg");
	this.shape_128.setTransform(-51.8,52.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6A5A50").s().p("AAFALIAKAAIAAAAIAWASQgQgKgQgIgAgIgEIgcgYIAEAAIAKAJIATAPIgFAAg");
	this.shape_129.setTransform(-45.9,57.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#878986").s().p("AAIAGIgDgBIgYgQIAGACIAhAVg");
	this.shape_130.setTransform(-61.1,49);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#868783").s().p("AAAABIgFgDQAHABAEADIAAABg");
	this.shape_131.setTransform(-63.2,47.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4D4840").s().p("AAEACIgUgMIAbALIAGAKIgNgJg");
	this.shape_132.setTransform(-65.7,46.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#AEA297").s().p("ABJAuIiUhaIAAgCICUBbIABgCIACADIgCABg");
	this.shape_133.setTransform(-63.2,45);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#868881").s().p("AgFgCIAKADIABACIgLgFg");
	this.shape_134.setTransform(-76.4,40.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#68665F").s().p("AgZgMIgBgCIA1AdIg0gbg");
	this.shape_135.setTransform(-73.1,42);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#65584E").s().p("ABQAuIAAAAIgBABIABgBgAg0gYIgbgUIAAgCIAJACICTBag");
	this.shape_136.setTransform(-63.6,45);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#9D8F86").s().p("ABRAiIgjgOIgKgEIgBAAIg+gYIADgDIBxAtIAAACgAhYgjIAAAAIAAAAIAAAAg");
	this.shape_137.setTransform(-79.8,36.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#615141").s().p("AAVAHIAjAOIAAABgAgTAAIgkgTIADgDIA9AYg");
	this.shape_138.setTransform(-77.3,38.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C0AFAB").s().p("AAAgDIAAAFIAAACg");
	this.shape_139.setTransform(-67.9,24.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#565651").s().p("AgMABIAbgGIgdALg");
	this.shape_140.setTransform(-79.6,20.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A9A8A3").s().p("AgEgBIAagJIAAAFIAAABIgbAGIgQAJg");
	this.shape_141.setTransform(-80.3,20.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#585855").s().p("AgEAGIAJgPIgBAJIgBACIAAAAIgDAIQAAAFgBAAQgCAAgBgJgAAAgKQABgFADACQAAAAAAAAQAAAAAAAAQABABAAAAQAAABAAABQAAgBgBAAQAAgBgBAAQAAAAgBABQgBAAgBABg");
	this.shape_142.setTransform(-76.6,19.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#95897C").s().p("AAAgHQABAAABgBQABAAAAAAQABAAAAAAQABABAAAAIAAACIgJAOg");
	this.shape_143.setTransform(-76.6,19.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#A7B5B6").s().p("AACAjIAJhQIgGBPIgPAMg");
	this.shape_144.setTransform(-71.4,9.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7B8584").s().p("AgiAdIADgDIgDAIgAATgVIARgMIgYASg");
	this.shape_145.setTransform(-74.4,16);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#9CAEB2").s().p("AAEgcIgDAcIgBAYIAAABIgDAFg");
	this.shape_146.setTransform(-69.8,1.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#566D71").s().p("AABgkIADgFIgHBTg");
	this.shape_147.setTransform(-70.4,8.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#B2A69F").s().p("AACAIQgDgGgDgEQgBgLAGAFQABAJADAJIAAABIgDgDg");
	this.shape_148.setTransform(-55.5,0.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B6AAA1").s().p("AALAPIAAgBIABABgAgKgNIgBgBIABABIAAAAg");
	this.shape_149.setTransform(-49.8,7.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#88786C").s().p("AALAEIgbgIIAhAIg");
	this.shape_150.setTransform(-1.7,-12.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#9F9F9C").s().p("AAVAHIgpgNIgBAAIACAAIAHABIAiAMIgBAAg");
	this.shape_151.setTransform(-9.1,-11.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A29994").s().p("AAAAAIgBAAIADAAg");
	this.shape_152.setTransform(-11.4,-12.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#747877").s().p("AgVgJIgGgFIA3Adg");
	this.shape_153.setTransform(-10.9,-14.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C9B6A8").s().p("AABABIgBgBIgMgGIAZANg");
	this.shape_154.setTransform(-7.7,-14.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#766355").s().p("AgSgJIAEAAIACACIAOAHIAFACIAMAIg");
	this.shape_155.setTransform(-9.8,-15.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#5E584E").s().p("AgHAAIAPAAIAAAAIgOAAIgBAAg");
	this.shape_156.setTransform(-29.7,-21.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C7C1BC").s().p("AgBAAIACAAIABAAIgDAAg");
	this.shape_157.setTransform(-22.1,-23.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6F6D6B").s().p("AAEAHIgBAAIgCgCIgCABIgDAAIAEgBIADgJIgPADIACgFIAGgBIALgDIAGAVQgEgDgFgBg");
	this.shape_158.setTransform(-22.2,-23.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#6A7A7F").s().p("AAAADIgBgEIABgDIACAJg");
	this.shape_159.setTransform(-21.6,-27.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#779298").s().p("AAEgLIACADIAAARIgLADg");
	this.shape_160.setTransform(-22.1,-25.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E4D9D5").s().p("AgFAkQABgEgDgBIgEgDIABAAQANgHAFgOIACAGIgKAYIgFABIAAgCgAAGgWIAGgPIgFAPg");
	this.shape_161.setTransform(-22.7,-28.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#61787F").s().p("AgHARIAGgPIAGgTIADgCIgNAnIgCgDg");
	this.shape_162.setTransform(-21.1,-32.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4D5C63").s().p("AgBAKIgFgBIAAgBIADgTIAKAXg");
	this.shape_163.setTransform(-38.2,-27.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#8E908C").s().p("AAUAGQgKgGgLAAQAMgKAKAHIgBADIABAHgAgUgCIAAgBIAEABIgEAAg");
	this.shape_164.setTransform(-36.8,-26);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#B9B6B4").s().p("AABAUIAAAAIAAABIAAABgAAAgUIABATIgBABg");
	this.shape_165.setTransform(-39.1,-28.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#7D8A8D").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_166.setTransform(-39.1,-32.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#8E9798").s().p("AABAbIgBgBQgIgIAIgLIABgCIgCgSIABgNIAAAAIAAAOQAGAGgCALIAAABIgDAVg");
	this.shape_167.setTransform(-39.1,-29.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#757472").s().p("AAdAJIg/gRIADAAIACAAIBAARg");
	this.shape_168.setTransform(-3.8,-27.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#B0968B").s().p("AAlA5IgeghIAiAhgAgog4IACgBIAAAKg");
	this.shape_169.setTransform(-15.5,-22.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#9E7869").s().p("AgGAOIABgEQgDAOAAAPIgCABgAAIgmIADgBIgEAPIgBACIgFAFg");
	this.shape_170.setTransform(-18.5,-32);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#747C7C").s().p("AAgAUQgPAAgNgFQgLgFgLgKIgEgBQgHgHgFgIIABgDQAFAJAHAHIADADQAVATAgABg");
	this.shape_171.setTransform(-10.7,-30.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E0CDC6").s().p("AAIAdIgLgQIgMgOIAKgKIgDALIAZAlgAgPgkIAAAEIgBAAg");
	this.shape_172.setTransform(-11.9,-36.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BEA8A1").s().p("AAAgFIACAAIgCAGIAAAEIgBABg");
	this.shape_173.setTransform(-13.5,-40.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#7D6C63").s().p("AAKAUIADgEIANAQQgJgKgHgCgAATgfIgEAIIgDAMIgHAFQgPAJgIARIgEABIgDAAg");
	this.shape_174.setTransform(-15,-38.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A3ABAC").s().p("AgCgGIANgKIAAADIgBACQgBAFgDACQgEADgEAAIgIASg");
	this.shape_175.setTransform(-18.6,-37.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#615956").s().p("AgFAGIgDgWIAJAWIgEAKIAAABgAAJgMIAAAEIgCADg");
	this.shape_176.setTransform(-16.6,-47.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#798589").s().p("AgbAcIApguIANgMIg2A9g");
	this.shape_177.setTransform(-14.6,-42.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BCB0AB").s().p("AgGAEIAFgJIABAFIAEgSIACgDIAKgHIAAABIgQAnIAAAUgAgOgdIgBAAIAAgCIACAAIABAAIAAACIAEAYg");
	this.shape_178.setTransform(-16.3,-46);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#6D6D6B").s().p("AAGgDIABAGIgBACIgMAMgAAFgPIABgBIAAAHIgBgGg");
	this.shape_179.setTransform(-12.5,-46);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#ABBABB").s().p("AABAHIABgBIgBAJIAAgIgAgBgNIAAgBIABAIg");
	this.shape_180.setTransform(-12,-47.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#8F8C88").s().p("AgHAIIAAgRQAAAIACAEQACAHACAAQABAAADgPIAFgDIgGAIQgBAJgBABIgCAAQgDAAgCgCg");
	this.shape_181.setTransform(-2.6,-36.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#312922").s().p("AgEAJQgBgFAAgGIAAgJIALgEIgCAPQgDAQgBAAQgCAAgCgHg");
	this.shape_182.setTransform(-2.7,-37.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#625A54").s().p("AAAAGIgHgNIAMAMIADAAIgIAEg");
	this.shape_183.setTransform(-7.1,-45.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A08A81").s().p("AgdAcIADgIIAHgHIgJAPIgBAAgAAYgPQgFgEgGABIAKgIIAHAPIgGgEg");
	this.shape_184.setTransform(-10.3,-43.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B5A6A0").s().p("AgaAEIAAgBIAUgHIAgACIg0AGIAAAAg");
	this.shape_185.setTransform(-0.9,-46.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#B4A29B").s().p("AgHADIAYgIIAAABIAAAAIgEACIgSAFIgMADg");
	this.shape_186.setTransform(-5.4,-45.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#695E57").s().p("AgEgOIAEACIAAABIAAAFIACAGIADADIAAAEIAAAHIgBABg");
	this.shape_187.setTransform(-56.8,-8.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#BDB4AD").s().p("AAAADQgDgEgDgIIAGAAIAGAFIAAAGIAAAIIgGgHg");
	this.shape_188.setTransform(-56.9,-12.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#6E665F").s().p("AgCAEIgEgKIABAAQADAGADAHgAAAgGIAGAAIABABIAAAEg");
	this.shape_189.setTransform(-57,-13.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#70625A").s().p("Ag7BpIAKhUQgDAegBAeIgBAYgAAzgMQgDgHgEgGQAIACAIAAIAAAJQgIgFABAKIgCgDgAAjg3QAFgKACANIgHgDgAAhg4IAAgBIABABgAgNhAIABgDIgBADIAAAAgAAyhVIABgBIAAAEgAAPhoIAGAQIgDgBIgCgLIgRARQAGgLAKgKg");
	this.shape_190.setTransform(-61.4,1.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#4C656B").s().p("AABgMIAAgDIABAAIgDAfg");
	this.shape_191.setTransform(-69.5,0);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#70898E").s().p("AgHAQIAMgeIADgBIgOAfIgBAAg");
	this.shape_192.setTransform(-68.6,-3.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#BBA9A1").s().p("AgOAPIADgJIAIgGIARgRIACAMIgEgBQgDACAAAEIgCAPQgDgDgDgLIAAgBIgBABIgGAQIgJABg");
	this.shape_193.setTransform(-61.2,-6.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#DCD6D6").s().p("AAAAIQgHgfAKAdIAAABIgDABg");
	this.shape_194.setTransform(-62.5,-15.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#B7B1AF").s().p("AABAKQgRgQAQgEQACAEAFADIABAEIAAADIgCAEIAAAAQgKgdAHAfIAAABIgCgBg");
	this.shape_195.setTransform(-62.8,-15.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#998C85").s().p("AgFAHQgEgFgCgFQgCgGAAgIIASAMIABABQgOAEASAQIABABIADgCIAAADQgMAAgHgLg");
	this.shape_196.setTransform(-63.6,-16.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#7B8C90").s().p("AATAAIgTgtIAAgDIAYAvIgsBLIgDACgAgMhFIgDgFIAAgBIADABIAEAJIgEgEg");
	this.shape_197.setTransform(-65.6,-12.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B3AFAE").s().p("AAFAJQgHgGgDACIAAgNIAJAPIABABIAAABg");
	this.shape_198.setTransform(-69,-24.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#9E9D9B").s().p("AgKgMIgBgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQACgCAIAFIAAABIAAgBIACAFIAKAbIAAABg");
	this.shape_199.setTransform(-68.5,-22);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#585653").s().p("AANAXIAAgBIABAAIACgFIAAADIAAAAIgDAFgAgOgJIgBgQIABACIABACIAEADIABAAIAFADIACAFQABAHAEADg");
	this.shape_200.setTransform(-63.6,-17);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#9EABB0").s().p("AgCgFIAAgBIAFANg");
	this.shape_201.setTransform(-70,-26);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#48463F").s().p("AAAAJIAAgDIAAgGIAAgCIgBgJIADAXg");
	this.shape_202.setTransform(-70.3,-28.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#C3B5AE").s().p("AgHAAIAAAAQAFgDAFADIAFAAIgKACg");
	this.shape_203.setTransform(-80.1,-33.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#595E5F").s().p("AAYA3IgKgcIANAdgAAAAEIgEgNIAAgFIAAAAIADADIAMAfgAgag2IAAAAIABgBIABACIgCgBg");
	this.shape_204.setTransform(-69.7,-25.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#4E4F4D").s().p("AgCAFIACgJIADAJQgDgBgCABg");
	this.shape_205.setTransform(-73.5,-43.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#63615A").s().p("AgDgFIAGASIgHgcQgBgHADgGQAAgBAAAAQAAAAABABQAAAAABABQAAAAAAABIAGAsIgFAMg");
	this.shape_206.setTransform(-74,-46.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#ADA69F").s().p("AgCgEIgBgKIAHAdg");
	this.shape_207.setTransform(-74.1,-46.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#808686").s().p("AgGAHIANgSQAAAQgHAGIAAABg");
	this.shape_208.setTransform(-40.6,-37.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#AC978B").s().p("AACAFQgCgBAAgEIgCgEIAFAEIAAAEIAAABIgBAAg");
	this.shape_209.setTransform(-51.3,-26.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#B39F92").s().p("AAAALQAFgBgCgIQgBgEgEgBIgDgGIAAgBQAEADABAFQAKANgHAAIgDAAg");
	this.shape_210.setTransform(-50.3,-24.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#6B6E6B").s().p("AAJAPIgagfIAAgBIABAAIAEAFQAbAlgEgXQAGACABAFQABAJgEAAIgGgDg");
	this.shape_211.setTransform(-51.7,-25.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#BAB4AD").s().p("AAAAAIAAAAIAAAAIAAAAIABAAg");
	this.shape_212.setTransform(-55.4,-29.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#704536").s().p("AAAgWIAAgBIAAgBIAAAAIABAyg");
	this.shape_213.setTransform(-54.5,-34.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#583F32").s().p("AACgIIgBAGIgBAIIAAABIAAABIgBABg");
	this.shape_214.setTransform(-54.4,-38);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#C39D88").s().p("AAAAYIgBgyIAAgBIABgBIAAAAIABAWIAAAGQgBAPACAOg");
	this.shape_215.setTransform(-54.3,-34.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#77695D").s().p("AAAAAIAAgDIAAAHIAAAAg");
	this.shape_216.setTransform(-54.1,-38.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0B0505").s().p("AABBFIgCgFIAAgCQgSgagFgdIAAgCIgBg2IADgNIAAgBIACgHQAPgnAFAdIAAAFIgCADIgBACIAAABQgDAGAAAIIAAACIgCADIgEATIgBABIAAABIAEAvIACAFQAFAbAQASIAEAGQgBAFAEAAIABAAIAEAGQABAIgDAAQgFAAgSgYg");
	this.shape_217.setTransform(-53.2,-33.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#B29A8D").s().p("AgDATIACgKIABgBIAAAIIgCADIgBAAgAADgQIABgCIAAAAIAAABIgBACIAAgBg");
	this.shape_218.setTransform(-53.9,-39.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#2A2D2D").s().p("AASA/IgEgHIgNgPIAAABIgBgBIAAgDQgFgIgHgHIgFgOIgCgJQABgBAGAJQACADAFABIACgDIABgDQAEAdARAbIABABIgCAAgAgCg3IACgHIgCAMg");
	this.shape_219.setTransform(-55.5,-33.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#8D827C").s().p("AAJA6IgFgMIgCgCIABAAIANAOgAABAqIgBgBIACACgAgMAYIgDgNIAFAPIgCgCgAAAg0IAAgFIAAAFg");
	this.shape_220.setTransform(-55.7,-34);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#BFA595").s().p("AAAAOIAAgDIABgFQAIgLgJgGIgFgBIAAgBQAFABACADQAJAHgJANIgCADg");
	this.shape_221.setTransform(-53.4,-42.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#66625D").s().p("AgNARIAHgUIAJgSIAFAAQALAHgIAMQgGgcgNAlIgDAHIAAABIgCAHgAAIAEIABgCIAAACg");
	this.shape_222.setTransform(-54.4,-41.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#7F888A").s().p("AgPgJIgFgEIApAbg");
	this.shape_223.setTransform(-46.2,-45.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#96928F").s().p("AASAdIgBgCIACADIgBgBgAgEAQIAAgfIgSgOIAVAKIACAmIAAgCQAAgbARAQIAFAEIgFgDQgMgGgCAKIAIAKIgFAAIgBAAIgBAAIgBABIgCACg");
	this.shape_224.setTransform(-50.2,-47.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#6D6862").s().p("AACADQgRgOAVAPIgEgBg");
	this.shape_225.setTransform(-49.5,-53.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C1B3B0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_226.setTransform(-48.6,-57.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#9B9191").s().p("AAAAAIAAAAIAAAAIABAAIgBAAg");
	this.shape_227.setTransform(-48.4,-57.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7B6F6B").s().p("AgRgCIAdAAIAGAFIgjgFg");
	this.shape_228.setTransform(-44.5,-56.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#BCAFAA").s().p("AABADIgEgGIAAAAIAHAHIgDgBg");
	this.shape_229.setTransform(-42.8,-56.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#7E7871").s().p("AgKgDIAPADIAGACIgVACg");
	this.shape_230.setTransform(-54.1,-52.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#B2B6B1").s().p("AgGAHIgGgDIAOADIAGABIgHABQgCAAgFgCgAAJAGIgDgOIAHAOIgBABIgDABg");
	this.shape_231.setTransform(-52.3,-52.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#788080").s().p("AAPAKQgNgHgJgHQgZgWATABIAEAFIgEgBQgLALAoAQIAGAUg");
	this.shape_232.setTransform(-53.2,-55);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#9D9B95").s().p("AgDACQgEgFAMADIgHACg");
	this.shape_233.setTransform(-59,-72.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#5C564D").s().p("AggAAQAWAAASgEIAqAEIgzABQgMgBgNABIgBAAQgNgCAEAFIABAAIgBABQgcgCAggDg");
	this.shape_234.setTransform(-55.7,-72.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#574C3F").s().p("AAjABIAdAEIADADgAhCgHIADAAIAlACg");
	this.shape_235.setTransform(-47.2,-73.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#778E96").s().p("AAEAdIgJg9IAAgCIALBFIgCgGg");
	this.shape_236.setTransform(-76.2,-52.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#7E675A").s().p("AAAgFIAAADIABADIgCAFg");
	this.shape_237.setTransform(-73.6,-67.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#C0A99F").s().p("AAAgBIAAAAIABACIgBABg");
	this.shape_238.setTransform(-73.5,-67.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#8A9EA2").s().p("AAAgpIACAOIAAABIABA7QgDAAAAADIgCAGg");
	this.shape_239.setTransform(-76.5,-60.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B0ADA7").s().p("AAAgBIACABIgDACIABgDg");
	this.shape_240.setTransform(-76.1,-68.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#C1BDB7").s().p("AAAgBQAUABgbADIAHgEg");
	this.shape_241.setTransform(-70.9,-71.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B3A79D").s().p("AgMAKIAAgEIACgDIAEgEQAHgOAMALQgJAEgGAHIgJADIgBAAg");
	this.shape_242.setTransform(-72.3,-68.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#84837F").s().p("AAAAOIgBgWIgDABQACgHACgFIAFgEIgFAygAACgYIACgCIABADg");
	this.shape_243.setTransform(-76.3,-66.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#5E4D43").s().p("AgDABIAGgDIABAAIgHAFg");
	this.shape_244.setTransform(-72.4,-71);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#6B6055").s().p("AgMAGQgHgRAgAHIABADIgCABQgLgLgIAMIgEAGIgBgBg");
	this.shape_245.setTransform(-72.2,-69.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#504338").s().p("AgDAAIAHgBIgGADg");
	this.shape_246.setTransform(-70.4,-69.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#4E4A47").s().p("AgGgEIANgRIgIAVIgDAWg");
	this.shape_247.setTransform(-10.3,-50.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#BDB1A7").s().p("AgFAAIACgGIADgBQgJANAPgDIABAAIgHAEIgEABQgEAAADgIg");
	this.shape_248.setTransform(-3.1,-49);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#695E56").s().p("AAAAOQAAgGAAgFIAAgDIASgRIgBAGIgDAGQgDAKAIgEIADAAIgBABQgPAPgKABIAEgEgAgVAHIABAAIABADIgCgDg");
	this.shape_249.setTransform(-5.3,-48.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#85665C").s().p("AgCAYIADgSIgFgKIACgSIABgBIgBAMIAAAAIAHAQIgFANIAAACIAAABIgBADIgBAAg");
	this.shape_250.setTransform(-7.1,-50.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#BFB9B6").s().p("AABAOIAAABIgBABgAAAgPIAAAAIAAABg");
	this.shape_251.setTransform(-7.3,-49.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#657073").s().p("AAAARIAAAAIAAADgAAAgTIAAAAIAAACIAAgCg");
	this.shape_252.setTransform(-5.3,-50.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#61605E").s().p("AAHgEIgQAJIgCAAIAXgQIgMAXg");
	this.shape_253.setTransform(-4.6,-55.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#97918D").s().p("AgDADQgCgDAAgDIgBgDIABgBIADAAQgGAKALgDQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIgDAHIgBABQgDAAgDgFg");
	this.shape_254.setTransform(-5.2,-54.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#634F4A").s().p("AADgJIAAAAIADANIgMAGg");
	this.shape_255.setTransform(-6.5,-53.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#B2A49F").s().p("AgKAKIABgKIABgDIAMgGQAKADgEAIIgBAAQgJgSgJAYIAAACIgBAAg");
	this.shape_256.setTransform(-6.3,-52.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#837671").s().p("AAAAAIAAAAIAAAAg");
	this.shape_257.setTransform(-6.4,-58.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#5C5D5C").s().p("AgOADIAAACQgBAJAJgLIAGgEIARgOIgOAPIgJALIgEADIgEACQgEAAAEgNg");
	this.shape_258.setTransform(-6.1,-57.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#C9C4C1").s().p("AAOgHIgDACIgLALIgGABIgHACg");
	this.shape_259.setTransform(-7.7,-61.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#DBD4D1").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_260.setTransform(-6.1,-59.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#B7B3B3").s().p("AgFACIgBAEIADAAIABABIgIAHgAgBgFIAJgHIADgBIAAACIgMAHIAAABIAAgCg");
	this.shape_261.setTransform(-5.8,-58.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#C6BCB7").s().p("AAAgEIgKAQIAAgBIAAgLIARgNIAEAZIAAACg");
	this.shape_262.setTransform(-13.4,-50.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#746A62").s().p("AgCgCQADgFAGAAIgNAPQAAgHAEgDg");
	this.shape_263.setTransform(-10.3,-51.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#7D7771").s().p("AAAAEIAAgBIAAgDIAAgEIAAAHIABAAIAAACIgBgBg");
	this.shape_264.setTransform(-13.9,-54.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#4F433A").s().p("AgDABQAGACAKgFIgDACQgGAFgEACIgDgGgAgMgGIACAFIABABIABAAIgCAAIgCABIAAgHg");
	this.shape_265.setTransform(-12.8,-53.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#6B605A").s().p("AAAAAIAAAAIABABIgBAAIAAAAIAAgBg");
	this.shape_266.setTransform(-17.7,-49.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#ADABA1").s().p("AABAAIgJAAIAEgBQAVABgNACQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_267.setTransform(-19,-51.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#AFB1B3").s().p("AgDAIQgNgNAYgFQgTAJALAGIABAAIgDAGIgBgDg");
	this.shape_268.setTransform(-15.5,-56.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#6F6E6A").s().p("AAMgOIgZATIgCAAIAfgYIgQAng");
	this.shape_269.setTransform(-11.1,-56.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#AF9B93").s().p("AgFABIAJgKIACAAIgLATIAAAAg");
	this.shape_270.setTransform(-13.2,-55.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#686E6E").s().p("AgNAfQgNgIAUgIIATgbQAAgIgJgGQgEgDgGgCIARACIAJAKIghAzIAAgBg");
	this.shape_271.setTransform(-14,-59);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#544842").s().p("AgGACQgCgCgBgEIATABIgBAAIgCACQgHAGgCAAQgDAAgBgDgAABAAIADAAIgFgDQAAAAACADg");
	this.shape_272.setTransform(-11.4,-62.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#8E817D").s().p("AADABIgDABQgHgIAKAHg");
	this.shape_273.setTransform(-11.3,-62.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#837E7B").s().p("AgEAHQgDgCgCgFQgBgCAAgEIABAAQABAMAGgGQAEgIAJADIgJACQgBAGgBACQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_274.setTransform(-16.7,-61.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#A0A09D").s().p("AgRgGIAIgCIAJAAQAEACAGAEQAIADAAAIg");
	this.shape_275.setTransform(-14.5,-61.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A6A19D").s().p("AgGADIANgFQAAABgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgKADg");
	this.shape_276.setTransform(-2.2,-62.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#62534B").s().p("AgDAAIADgDQAAADAEADIAAABIgHgEg");
	this.shape_277.setTransform(-3.9,-66.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#6E696A").s().p("AgGgFIAAABQgIAGAIgBIAGgBIgVAQgAAVgPIABAAIgEADg");
	this.shape_278.setTransform(-8.4,-60.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#565953").s().p("AgGAEIANgGIgEACIgJAEg");
	this.shape_279.setTransform(-8.4,-65.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#868B8A").s().p("Ag5AUIABgFQAzgjA/ABIgGAAQg7AGgyAhg");
	this.shape_280.setTransform(-3.8,-70.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#8D7E77").s().p("AgOAFIAdgJIgIAEIgSAFg");
	this.shape_281.setTransform(-1.7,-68.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#91877D").s().p("AgdACIAUgCIgKACgAASAAIAEAAIAIgBIgFABIgHAAg");
	this.shape_282.setTransform(-22.5,-51.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#92857D").s().p("AABAAQgTgBAZABIgEABIgCgBg");
	this.shape_283.setTransform(-28.4,-51.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#ACA29B").s().p("AhVAQIAVABQBzATB1giIAEADQAQAGADgNIAFgFIgIAOIgbAGIgPgCIgHAGIgrAFIgNABQgcADgcAAQg3AAg5gKgAi+gTIgBgBIgEgFQAPAJAJADIACADg");
	this.shape_284.setTransform(-35,-55);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#2B2517").s().p("AgCADIgDAAQgEABACgFIABgBIAMgBIACACIAAAAQgEAFgEAAIgCgBg");
	this.shape_285.setTransform(-26,-52.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#5E544B").s().p("AAVAcQg/gGhBABIgPgFIBkAEIAAAAIAAgBIAAAAQhBgCg5gXIAHACQAaAGAbACQBUAOBUgHIgBABQgCAHAEgBIADAAQAHACAFgIIAAAAIgCgCIAqgFIgMAIIAUAGIgEAAIgSgBIgLADIgUABIAKABIgLABIgCAAIgPAAIgPAEIgpgCgABEAYQADABAEgCIgOgBQgFAAAMACgACnAbIAAgBIgBgBIAHACgAC4AKQgBgHgIABIgNgBIAcgEIgDAGIgCAFIAAAAIgBAAgAi9gdIAVAJIADADQAHAGAIAEQgUgJgTgNg");
	this.shape_286.setTransform(-35.2,-54);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#ADA29A").s().p("AAEABIgHgBIAHAAIAAABg");
	this.shape_287.setTransform(-37.8,-69.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#584B3F").s().p("AgSgDIAQACIAVAFg");
	this.shape_288.setTransform(-38.5,-71.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#534338").s().p("AgVgGIArALIgPACg");
	this.shape_289.setTransform(-33.5,-70.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#92887F").s().p("ADEASIgtgNIgIgCIgXgGIgQgCIgDgDIAaADQALACAKADIANACIgFAAIAdAKIAjAMgAjRADIACgBQAvgOAxgGIhOAXIgeAFIAKgHgAjQAGQAegCgVgEIgJAGgAgagXIgDABIhJACQAmgEAmABg");
	this.shape_290.setTransform(-50.9,-71.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#C6BCB4").s().p("AgNgEIAFABIALADIABAAIAKAFg");
	this.shape_291.setTransform(-33.8,-71);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#86867F").s().p("AgTgBIAAgCIAnAGIAAACg");
	this.shape_292.setTransform(-35.4,-69);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#878883").s().p("AgigIIAAgCIBGAVg");
	this.shape_293.setTransform(-29.8,-67.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#7D6D62").s().p("AAMAJIgKgJIApAOIABADQACADAEABIAMAAIALAEIAJgEIADAAIgOAHgAgngHIgtgUIAYAGIA6AVg");
	this.shape_294.setTransform(-22.7,-67);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#EDE4DF").s().p("ABLAdIATAAIgJADgAAPAHIgCgBIgEgBIg4gTIgjgMIgKgEIgBgBQAvAOAvAMIAGADQAUARAaACIACAFg");
	this.shape_295.setTransform(-24,-67.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#959A96").s().p("AAoATIgKgNIhHgYIArAOQAJAAAHACQAHACAGABQALAGAAAKIAAAAIgBACIgBAAg");
	this.shape_296.setTransform(-21.9,-64.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#382D21").s().p("AAAAAIABAAIgBAAg");
	this.shape_297.setTransform(-99.7,-9.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#7B7267").s().p("AgJAHQACgFAHgDIAAgBIADgBIgBAAIACgBIACgBIAAAAIACgBIACAAIgPANIgBAAg");
	this.shape_298.setTransform(-100.4,-9.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#ADA39A").s().p("AhGAiIAAABQgIAFgCAFIADAAIgoAPQAXgPAYgLgAg7AeIAYgJIAAAAIgIAMIgIADIgZAJgAB2g7IgFADIg1AbQAcgRAegNg");
	this.shape_299.setTransform(-93.3,-12.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#1C150E").s().p("AgFACIACgCIAGgBIAEgBIgNAFg");
	this.shape_300.setTransform(-84.2,-21.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#60574D").s().p("AhfBAIABAAIgCABgAA0gxIAEgCQAVgIAUgFIgRAIIgPAFIgHADIgDACIgBABIgFACg");
	this.shape_301.setTransform(-90.4,-16.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#72645C").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_302.setTransform(-85.6,-33.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#9B918A").s().p("AgaACIAGgDIACgBIARACIgIADIgRgBgAAZABIABgBIAAABg");
	this.shape_303.setTransform(-83.6,-33.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#A5978E").s().p("AgGAHIADgGIAJgHIABAAIgMANg");
	this.shape_304.setTransform(48,65.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#6A6157").s().p("AAAABIABgBIgBAAIAAABIAAAAg");
	this.shape_305.setTransform(48.8,64.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#B3A99F").s().p("AAHgFIABAAIACAAIAAABIgCACIgRAIg");
	this.shape_306.setTransform(-0.2,51.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#DED4CC").s().p("AAAAAIAKgCIgCACIgGABIgCACIgEAAQgLAAAPgDg");
	this.shape_307.setTransform(21,32.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#C6BDB4").s().p("AgCAAIgBAAIAHAAIgBAAIgBABg");
	this.shape_308.setTransform(24.4,31.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#9E958D").s().p("AAGACIgGgCIASACIgKABIgCgBgAgQgBIAGABIAAAAIgHAAgAgIAAIgJgCIAOACIgFAAg");
	this.shape_309.setTransform(25.8,31.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#6B625A").s().p("AAAgDIgMAGQgCgNgKAGIgBAAIAAgBIAAgEIAYAAIAJAHIADACIAAAAIAFABIAEgBIAGAEIAAAAIgGADIgDADIgCAAQgLAAgEgNg");
	this.shape_310.setTransform(22.9,28.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#6D5D55").s().p("AgCAAIAEAAIABAAIAAAAg");
	this.shape_311.setTransform(38.1,30.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#ACABAA").s().p("AARgRIAAADIghAfg");
	this.shape_312.setTransform(9.5,42.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#D2C9C0").s().p("AIfBuIgFgQIgPgTIgIgLIgFgIIgRgYIgBAAIgJgGIg4AKIgMABIhXALIgOACIgGACQgiAIgJgGQgGgDAEgIIAjgVIALgDIguAhIDlgbIAPAQIACgDIABgBIAAABQADASAOgEIgFALQAGAPAKgQQAIABADAFIAEAHQACAIgLgDQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgMADANAJIAHARgAIZBDIACAIIAAAAQAFADABgCIABgBIACAAQAFgBgFgDIgJgEIgCgBIAAABgAJwABIACAAIgfBtgAH/AlQALgKAJARIgDAFQgBgQgQAEgAE2ATIAGgBQAIAAAGgEIADgCIAAAFQACAJgGAAQgGAAgNgHgAL3gTIgZgHIgWgZQgGgEABgCIgFgFQAygEAOAqIBogBIgZgLIAhAKIACABIgGAAIi8AWIgBAAIgvADgALjgiIAAABQgDAOARgIIAAgPIgngKgAM6gtIABAAIAAAAgAttg9IABgBIBGgsIAGgDIgCACIgzAiIgaAPIACgDg");
	this.shape_313.setTransform(88.7,57.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#836F61").s().p("AgjAWIBHgrIAAABIhFAqg");
	this.shape_314.setTransform(4.3,48.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#766B60").s().p("AgCABIAFgCIgBABIgEACIAAgBg");
	this.shape_315.setTransform(8.3,46.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#120D09").s().p("AiICDQAOgRASgMIAFgCIADgCIAFgDQALgFALgEIAGgCIACgBIAGgCIAPgOIAYgMIgaAUIgSAOIAAABIgGAEQgLAJgIAKIgDACIgKAEQgJAEgHAIgAieCDIgCgGIgCgKQgHgHgHgHIgGgFIgFAAIgCAAQgHgJgJgIIgCgCIACAAIgBgBQgGgFgDgGIgQgKIgdgVIgBAAIgKgBIgSAAIgDgCIgCgDIAAgCIAAgDIAAAAIABgCIABgBIAEgDIAAAAIACAAIAFAAIAdABQAMALAQAJQAPAIALANQAUANAPARIAFAGIAEAGIAJANQAEAIACAJgAAAAmIASgIIA3gmIA+ghIA1gTIAUgPIAngXQADAAACgCIAAgBIAegSIANgLQgMARgMAQIgEAGIgHAEIhJAuIgBAAIgSANQgkASgnAKQg3ASgtAfg");
	this.shape_316.setTransform(-18.1,55.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#656860").s().p("AgSAKIAlgUIglAVIAAgBg");
	this.shape_317.setTransform(4.7,46.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#A8A8A1").s().p("AgXAOIAvgbIgDAEIAAABQgBACgDAAIglAUg");
	this.shape_318.setTransform(5,46.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#8A8C87").s().p("AgmARIBKghIACAAIAAABIgUAPIgzARg");
	this.shape_319.setTransform(-1.1,49.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#AFA49D").s().p("AgKAFIAAgDIADgCIABAAQAQgNABANIgDAAIABAAIgKABQgRAFASgBIgEADIgGgDg");
	this.shape_320.setTransform(21.1,32.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#665E53").s().p("AgEADIABgFIADgBIAFAHg");
	this.shape_321.setTransform(12.6,33.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#615950").s().p("AAAAGIgFgFIACAAIACgBQgDgFgKABIgBgBQADgBADABQAtAIgiAEIgCgBg");
	this.shape_322.setTransform(32,20.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#54483B").s().p("AACgBIACACIgFABQgFAAAIgDg");
	this.shape_323.setTransform(33.7,18.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#A39C96").s().p("AADgBIAGgFIAFABIAAABIgBAEIgLABIgPAGIAQgIg");
	this.shape_324.setTransform(32.5,17.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#5D5752").s().p("AgEABIAPgEIgVAHIAGgDg");
	this.shape_325.setTransform(31.6,17.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#9F8F83").s().p("AgFABIALgCQgEADgCAAIgFgBg");
	this.shape_326.setTransform(28.7,19);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#A59B98").s().p("AgGgBIgBgBIAEAAQAIgBADAEIgCABIgCABIgEAAQgEAAgCgEg");
	this.shape_327.setTransform(31,20.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#605247").s().p("AgSAAIAlgDIgSAHg");
	this.shape_328.setTransform(29,5.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#A09E9A").s().p("AAMALIgYgUIAAgCIAZAWIgBAAg");
	this.shape_329.setTransform(22.8,2.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#58554D").s().p("AAhAmQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgCgCAAgDIgDgJIAKAPIgBAAgAARALIAEAGQgEgEgGgCIgZgWIgdgaIBYA4g");
	this.shape_330.setTransform(23,2.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#BBB1AD").s().p("AgHAAIAPAAIAAABIgPgBg");
	this.shape_331.setTransform(36.5,8.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#DAD1C8").s().p("AgIAAQAAAAAKAAIAHAAIgBAAIgPAAIAAAAIgBAAg");
	this.shape_332.setTransform(65.8,33.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#B9AEA5").s().p("AgOAAIANAAIAQAAQgMAAAAABIgRgBg");
	this.shape_333.setTransform(64.5,33.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#988C84").s().p("AgfAAQAUgBArABIAAAAIgNABQgYgBgaAAg");
	this.shape_334.setTransform(61,33.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#A49990").s().p("AAEAAIgCAAIgFABg");
	this.shape_335.setTransform(74.6,32.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#84776F").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_336.setTransform(75,32.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#211A14").s().p("AkVAbQgBgEgFAFIAAAAQgIgBgCgHIgHgJIAbgIQAOgDAJgJIAAgBIAFgCQAHgDAEgEQALgJABgNIABAAQAKgGACAPIANgIQAFAQANgBIADgDIAGgDIAGADIACAAIAJAIQACABADAAIBkAEIAHABIAuACIAlACQAdACAdAAIAFAAIAVgBIACAAIAOAGIAUgHIAOAKIBSAAIAigFIAIAIIhAgCIibAKIgOgCQhSgLhUABIgHgEIgPACIgPgFIg0gDIgDAJIgBABIgFABIAAgJIgdAGIgFAKQgIgBgJACIgCACIgBAAIgBABQgOAMgJASIgCADQABgJgCgIg");
	this.shape_337.setTransform(42.6,32.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#53463D").s().p("AgmAGQAQAFgDgLIADgBQAXAHACgTIAGABIAOACIAIgCIAIgBIguAYIgBAAIABAAIAAAAIgEACIgHABg");
	this.shape_338.setTransform(48.9,22.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#989590").s().p("AAKgBIgFACIgOABg");
	this.shape_339.setTransform(43.3,23.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#A79991").s().p("AgWAAIAGgDIABAAIAEACIASAFIgFAAgAATABIADACIgIAAg");
	this.shape_340.setTransform(46.2,23.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#110C09").s().p("AAlAhQgIgKgSgDIgOgDQgZgIgbgFQAigEgvgIQgDgBgDABIACACIgEAAIAAABQADAGAKgBIAFAEQgZgEgZAAIgEgKIAKgBIAFgBQAHAEAGgIIAHgCIAEgCIAXgJIALgDIABAIQgOAIAPgEIAFAHQADAGAJAFIABAAIAAAAQACACADAAIAHABQAIACAMAAIBIADIAcACQgDAUgZgJIgCACQACANgPgFIgFgCIgBAAIgWAFIgFABg");
	this.shape_341.setTransform(37.9,20.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#8B827A").s().p("ABBAKIAWAAIgIACgAgmAFQgMAAgKgDQAVABAUgDIAAAAIAOACQARADATACgAhJgBQgJgEgEgGIACACQAFAFAGADIAAABg");
	this.shape_342.setTransform(43.3,20.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#B9A8A0").s().p("AAAAAIADAAIgFAAIACAAg");
	this.shape_343.setTransform(44.9,10.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#60574C").s().p("AgDgHQABABAAAAQABAAAAABQABAAAAABQAAAAAAAAIAEAMIgHgPg");
	this.shape_344.setTransform(60.1,11.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#7C6F65").s().p("ABqAPQAEgBAFgEIAAAAIAAAAIAAAKIgJgFgAhxgTIACAAIACAAIgFABIABgBg");
	this.shape_345.setTransform(43.3,5.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#9B948E").s().p("ACrAuIgLgHIALADIACACIADAEIgFgCgABfALQgagMgbgGIgFAAIgDgBQgRgDgRABIgFgEIA/AGQAUAGAPAFIATAJQgIgCgJABgAiYgUIABAAIAGABIAWADIASgJIAVADIgRgBIgXAMgAifgXIgFgPIgLgJIABAAQAGACAEAEIAEAGIACAJQAAADACABg");
	this.shape_346.setTransform(41.7,8.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#998D84").s().p("AAAgCIAAACIAAADg");
	this.shape_347.setTransform(57.3,5.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#2F2217").s().p("AAAAAIAAAAIAAAAg");
	this.shape_348.setTransform(63.7,12.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#BFA495").s().p("AAAAAIAAAAIAAABg");
	this.shape_349.setTransform(63.7,12.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#64574D").s().p("AALALQAIAFAJAEIACACQgFAHgHAEgAgRAUIgLgCIgBgBIAMABIACAEgAgcggIABACIAAAFg");
	this.shape_350.setTransform(60.7,10.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#B6A498").s().p("AAAgBIAFABIAAAAIgJACIAEgDg");
	this.shape_351.setTransform(83.4,43.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#777469").s().p("AgCAAIADAAIACAAIAAAAIgCAAg");
	this.shape_352.setTransform(83.8,43.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#72665C").s().p("AAAAAIACAAIgDAAIABAAg");
	this.shape_353.setTransform(83.7,43.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#19110D").s().p("AgCAEIgDgBIABAAIAJgGIgFAHg");
	this.shape_354.setTransform(84.3,42.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#4E4137").s().p("AgEgEIAJADIgCABIgHAEg");
	this.shape_355.setTransform(84.5,29.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#2E281F").s().p("AgFABIAFgDIACgCQgBAFAIACIgBABIgQABg");
	this.shape_356.setTransform(81.9,30.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#1E140E").s().p("AgSAJQAKgLAGgOQAHgEAJAIQAHABgDAEIAAABIgSAIIAAAKIgLAGQgIgCABgHg");
	this.shape_357.setTransform(84.1,28.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#100A08").s().p("AAAAIQgCgBgCgEIABgKQAHAHABAEIAAACQAAABAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgBAAg");
	this.shape_358.setTransform(85.9,21.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#372C21").s().p("AAAAnQACgEgFgBIgCgiIAAgNIgBgHQADAEADABQAEABAAgDIADAYIAAAEQAAANgEALIgDAFIAAgBgAgEggIAEgHIACACIACATQgBgFgHgJg");
	this.shape_359.setTransform(86.1,23.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#675D54").s().p("AmFB6IAEgCIAjgiQAIABAHgKIgNAUIgNALIgeASgAlKBFQAJgRAAgZIAAgBQAFgEABADQACAJAAAIIgDAHIgHAIIgHANIAAgBgAAtAKICagKIBAACIgIgIIgiAGIhRgCIgPgJIAxgBIAKACQAGADAHAAIAMAAQAbACAmgEQATAHAUgHIAbgGQAEgBAEgCIgDAEIASgBIgHADIhFAQIgBgBIgIADIgWAGIgBAAIgRAAIgDABIggAAIAAAAIgGAAIgTgCIAAgBQgtgBgUADIgqABIAAABIgagEgAkgAIIABABIgCABgAkMAFIAFgJIAdgGIABAJIgHABQgBgMgSAMIgBABIgDADIgBACIgEgBgAjNgDIgFgBIgNgCIABABIgBACIgFAAIADgJIA0ACIAPAGIAPgCIAHAEIgyABgABbgKIAEAAIAPgBIAPAAIgUAHgAhOgPIAAgBIAwADgAF2g0IABgEIAAAAIAAAAQAFgNACgOIADABIABgMIAEAJIACAlQgJgJgJAFgAGDhqIABgTIABAUIAAAHg");
	this.shape_360.setTransform(46.4,32.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#F8EEEE").s().p("AAAACIAAgFIABABIAAAGIgBgCg");
	this.shape_361.setTransform(84.8,20.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#F6F0E9").s().p("AAAAAIAAAAIABgBQAAABAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIAAAAIAAABIAAgCg");
	this.shape_362.setTransform(84.8,17.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#DED5CF").s().p("AAAAcIgCgGIAAgOIACADIAAAFIADAIIABANgAgCABIAAgEIAAgSIABgBIABAZIgCgCgAgDggIACgEIAAALIgBACIgBgJg");
	this.shape_363.setTransform(85,19.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#493529").s().p("AAAgIIAAAAIAAABIABAHIgBAIg");
	this.shape_364.setTransform(86.1,13.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#EAE1DB").s().p("AnoDsIAbAAIABACIgcgCgAC9gBIAIgBIgEACgAHkihIAFgBIgGAHIABgGgAFojnIgPgGIAAAAIAAAAIAiAIIgTgCg");
	this.shape_365.setTransform(56.4,41);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#A69E98").s().p("AAMAEIgggGIAAgCIAhAGIAIADIgJgBg");
	this.shape_366.setTransform(93.1,17.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#76685D").s().p("AABAdIAAgBIgBgTIABgQIABABIACA9gAAAgeIgDgOIADgKIAAADIAAADIAAABIABARIgBgBIAAABg");
	this.shape_367.setTransform(86.4,19.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#271B15").s().p("AADAoIgDgVIAGAFIAAAAIgBATgAgFglIABgDQAFgGgBARIABASIAEAMIgDACIgCACIAAACg");
	this.shape_368.setTransform(85.8,15.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#5C534D").s().p("AAEA3IgCg7IgGgKIgBgFIAAglIACADIACAKIABADIABABIABAAIABACIAAgCIADAAIAFAPIAAAFIAAABIAAAEIgBAAQABgRgHAHIgBACIAGAsIgBAAIAAADIAAAEIAAACIACAEIADAUIgGAIIgCALgAgLhFIgBgFIACAFIAEAHIgBACg");
	this.shape_369.setTransform(84.8,14.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#372D26").s().p("AAEAKIABAAIAAACgAgCgFIgCgEIAAgCIADAJg");
	this.shape_370.setTransform(84.5,9.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#ABA29C").s().p("AlxCiIAbg0IAAgBIAAAAIgEgBIgQAAIACgMIALABQACAHAHABQAAAZgIARIgBABIgEAHQgHAKgJgBgAC+BFQAdABAdgGIACABIAGACQgZADgVAAIgUgBgACbBAIgwABIgPAAQAggBAhgEIAFAEIAEACIgLgCgAgwA/IgwgDIgCAAIALAAIALABIAZAAIAoADgAjwAmIAAgHQADAFAFAEIgDAAgAj/AdIgXAAIAAgDIAFgDIAUAEIAKAJgAFkAUIABAAIAAAAgAFsgFIAAgJIABgIIACAGIgBAMIgCgBgAFughIAAgIIgBgbIABgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIgBABIAAgMIgBAFQgCgUgDgTIAIAKIADA8IgCATgAFliGIgBgMIABgOIAAgEIACAFIgBAkQgBgFAAgGg");
	this.shape_371.setTransform(48.2,24.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#F9F1EB").s().p("AAAgHIABACIgBANIAAgPg");
	this.shape_372.setTransform(83.8,9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#D7D2CC").s().p("AAAADIgBgIIADAHIAAADIgCgCg");
	this.shape_373.setTransform(83.7,7.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#F4F1EB").s().p("AhBBeIgBACIgCABIADgDgAARhgQAaAGAaAIIAAABIg0gPg");
	this.shape_374.setTransform(106.6,22.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#241912").s().p("AgEAGIgBAAQADgDAAgDIAAgBIgCgEIAKACIgJAJIAAAAIgBAAg");
	this.shape_375.setTransform(111.8,24.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFF00").s().p("ATGG/IgGgRQgNgKALgDQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAMACgDgHIgDgHQgEgFgIgBQgJAQgHgPIAGgMIABAAIAAgBIAAgBIACgGQgIgRgMAKIAAAAIAAABIgBABIgDADIgOgRIjlAbIAuggIAAgBIABABQAbAPgEgSIgBgFQAEgDAAgEIABgBIA4gfIgEgkIgXgWIAFgBIACAAIAAgBQAKgEgIgKIATgCICkg2IADgBIAKgEIA4gTIALAiIgBAAIAAABQgXAPAKgOIAEgEIgSgJIAAAEIgCgBIACANIgBARQgMAKANAHIAEABICCAbIAAAAIARAFIAEABIAMADIATAIIAGADIAXAKIAAAAIAAADIABABQABAEAEABIABAAIAMADIAaAMIhpABQgNgqgyADIAEAGQgBACAHAEIAWAZIAYAHIh4ATIgMABIAAABIgDABIgdBsIAAABgAQMFVIAAACQAAAGAGACQAEADABgGQABgJgFAAIgHACgAQwFRIAAACQAAALALABIAAABQAGgFAGgGIAAAAQABgEgCgDIgCAAIgIgBQgHAAgFAEgARoFLIABABQADAOARADIABgBQAEgCACgDQgBgGgEgDQgHgGgHAAQgEAAgFADgAVPFDIANgZIgZAAIACAEIgBgBIAAACIAFANIACgBgAUWEoQABAIACAGQAEALAJABIABAAQAIgMgIgMIAAgBQgFgEgEAAQgEAAgEADgATODQIACAHIhHAwQgEADgCADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAHALIgIAeIAGgHIAigjIBLgBIgFgIIADAAIgEgBIgKgRIghgBIARgUQAGAEgEgHIAHgJIAAgBIgEgDIgHgDIgGADgAn8G/QAHgIAIgEIALgEIAQgFIAEgJQAEgGAFgEIgBgBIAAAAIASgPIAagUIAJgFQAvggA3gSQAngMAkgRIATgKIAagPIAzgiIABgDIABgCIAEgFQANgRAMgRIANgUIAEgHIAIgNIAGgIIADgHIABgCQAKgTAOgLIABgBIADgCQAJgCAHAAIAFABIAGADIAFgDIACgBIAFgDIAEgCIAGgDIAFgBIABgBIAEAAIAHgBIABAAIAAAAIABAAIAFAAIAEABIAHACIADABIAJgBIAygBQBVgBBTANIAPACIAaAEIABgBIApgBQAbgBAaACIATABIABAAIARgBIAhAAIADgBIAQAAIABAAIAWgGIAHgCIACAAIBGgSIAGgDIACgCIALgGIAIgGIACgBIgKgDIAUgJIAFgGQADgLAAgNIAAgEIgBg9QApAWAzgCQAFAFAHACQAWAFAUAJIAMAFIABAAIAFgBQAOAEADAHIAHAEIgBACIgFABIgBAGIgEAKQgJAUgWAHQgOAEgKAKQgJAJgLAEQgXAJgVANIgYARIgSAQQgWAVgaATIgsAgQghAZgcAdQgXAYgfANIgLAEQgWAIgWAKQhFAjg+AxIgBABIgCACIgLAIIgDAGIAAABQgHAMgIAMgAhuGcIgBgCIgbAAIAcACgAIbCrIAFACIAEgDgA4HiBIAbgMQAXgJAWgLQA+gjA0guIBag8IAEgCIAngPIABAAIAZgJIAIgDQAlgOAhgUIAmgYIAzghIAEgDQASgIATgGQALAHAMAHQAHADAHACQAaAIAZALQAPAGANgHIAEgEIAWAsIgsBOIgOAgIAAADIgIA8IgKBRIgNALIgGAFIgpAgIgFALIgDAEIgcAJIgRANIgPASIgmAVIgbAfIgFAOIgNASIgQAHIgjAJIgLADIgvAMIgPAGQgOAAgLAJQgLAKAAANIAAAJIgGADIgJAJIgDACIgIAFIgBAAIgCACQgLAHgKAIIgSAQIgGABIgDADIgYAUQgKAJgOACQgDAFgCAFIAAADIgFADIgFAEIgGAHIgBACIgBABQgbAQgWAaQgFAEgCAGIgCAAIgCACIgEAGIgBADQgTALgQAOgA29AOIACAAIgBgOIgBAOgAwtkZIAAACIABgCIgBAAgAP/DqQgGgCgHgNIgEgFQgJgRAMAGQAGABAAgGQABgFgCgGQAAgDgCgCIgGgFIgCAEIgEAAIAAACIABADIgGAKIgWgcICmAWIhjAgIgCABIgBABIgCABIgFAGQgCADgDAAIgCAAgAUvCUIAGgDIAHgFIAVgIQAHABgGAMIghASQgTgRARACgAKKheIACAAIgCABIAAgBgA00ksIAGgDIgGAEgAwsm9IAFgBIgDAGIgHACg");
	this.shape_376.setTransform(21.3,23.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#9B897D").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_377.setTransform(138.7,18);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#DED6CF").s().p("AAAAFQgDgDgCgCIgGgOQALANAKAKIAAACIAAABIACADQgGgGgGgEg");
	this.shape_378.setTransform(75.8,-11.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#6B5242").s().p("AAAAAIAAAAIAAAAg");
	this.shape_379.setTransform(67.6,-23.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#7D6355").s().p("AAFAMIgSgiIAAAAQAOAWANAXIgJgLg");
	this.shape_380.setTransform(69,-21.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#5D5D5C").s().p("AAFALIAGACIADAEIAKASQgLgLgIgNgAgXgjIAFAHIAAADIgFgKg");
	this.shape_381.setTransform(73.6,-17.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#9EA1A1").s().p("AAAAMIACAAIAAAFIgCgFgAAAgMIgCgBIAAgDIAFACIAAACg");
	this.shape_382.setTransform(54.8,1.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#685E58").s().p("AgCAHIAAgCIAFAEgAACgGIABgCIABAAIAAACIgBAAIgBAAg");
	this.shape_383.setTransform(54.9,-1.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#819294").s().p("AAHAfIAAgBIAAABIAAAAgAgGgeIABAAIAAADg");
	this.shape_384.setTransform(54.5,-5.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#676061").s().p("AAAAAIAAAAIgFgFIAHAEQAGACACAHQgFgGgFgCgAgHgFIgCgCIAEABIAAADIgCgCg");
	this.shape_385.setTransform(48.9,-20.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#B5A19A").s().p("AAHAKIgOgLQAAgEAAgEIABABIACAAQgDAHAPALIgBAAg");
	this.shape_386.setTransform(49.4,-22.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#B6B2AD").s().p("AAbA+IgUgzIgEgOIAZBBIgBAAgAgag5IAAgDIgBAAIABABIAEAFIgEgDg");
	this.shape_387.setTransform(51,-14.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#B6A89F").s().p("AABAFQgBgBgDgDIgCgDIgBgEIAIAEIABAAIAEAIIgBABIgFgCg");
	this.shape_388.setTransform(53.1,-16.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#75645A").s().p("AALAaIgIgNQADADADABQADACADgBIAGANgAgUgeIABAAIATAiIABAEg");
	this.shape_389.setTransform(52.3,-18.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#ACB7B5").s().p("AAAAGIAAgCIABgKIAAAJIAAAEIgBgBg");
	this.shape_390.setTransform(53.6,-37.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#C0A69B").s().p("AAHAGIgRgNIgCAAIgBgBIAAgDIAbAXg");
	this.shape_391.setTransform(59.5,-34.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#BBA096").s().p("AACAOIgFgHIAFgUIACAYIAAADg");
	this.shape_392.setTransform(57.5,-37.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#B39C92").s().p("AgCgCIAFADIgDACQAAAAgCgFg");
	this.shape_393.setTransform(42.2,-34.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#64524C").s().p("AADACIABgBIAAACgAgDgCIABAAIAAABg");
	this.shape_394.setTransform(42.2,-34.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#231E1A").s().p("AgDAAIAAAAIADgBQACgEACACIgBAIg");
	this.shape_395.setTransform(42.3,-34.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#AC9F9A").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_396.setTransform(43.1,-36.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#7C7A7A").s().p("AgHAKIALgTIABAAIADAAQgDAFgDAEIgBAGQgBgCgDADIgDADIgBAAg");
	this.shape_397.setTransform(42.6,-35.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#4C4748").s().p("AgJAMIATgWIAAAJIgEABQgGAEgGAIg");
	this.shape_398.setTransform(44.2,-38);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#645B54").s().p("AgIAJQAKgQAHgCQgFADgGAMIgBACIgFACIAAgBg");
	this.shape_399.setTransform(44.3,-40.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#8C8C87").s().p("AABgFQABAEgBABIgBAFIgBABIACgLg");
	this.shape_400.setTransform(44.5,-45.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#7B675D").s().p("AAAADIgBgFIABACIACAAIgCAEIAAgBg");
	this.shape_401.setTransform(48.6,-45);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#888179").s().p("AgCgEQADgLABAOIACAAIgFALg");
	this.shape_402.setTransform(48.4,-47.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#BBA8A2").s().p("AAAAKIgBgDQgDgDAAgDIAFgLIAEgBIgCAIQgHAIAGAFIAAACIgCgCg");
	this.shape_403.setTransform(48.6,-46.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#5A544F").s().p("AAAAEQAAgMgFAJIgBAAQAEgJAJAIIgCACIgBACIgDAAg");
	this.shape_404.setTransform(48.7,-47.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#7A5A4F").s().p("AAIgfIABAHIAAABIgJAhIgHAWg");
	this.shape_405.setTransform(58,-39.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#AF8D7F").s().p("AAAAEIABgOIAAAJIgBAMg");
	this.shape_406.setTransform(58.9,-43.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#70888B").s().p("AgKAbIAKggIAAgDIAEgGIgOA0gAAJggIAAgEIACgBIgCAJIAAgEg");
	this.shape_407.setTransform(54.9,-40.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#666159").s().p("AABAFQgBgHgFgIIAAAAIALAVIgFgGg");
	this.shape_408.setTransform(64,-27.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#75574B").s().p("AAIAEIAHAGIAAABIgHgHgAgNgJIgBgBIACAAIABABIgCAAg");
	this.shape_409.setTransform(59.4,-34.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#9A867B").s().p("AB8DmIAAgEIABAFgABdBfIAQAvIAAACIAAAAIgBABIgPgygAAyAAIAAgBIAEAGIgEgFgAAegaIgFgFIgJgSIgDgEIAHADIAWAjIgMgLgAgVhnIgWgkIAAgBIAbAjIAAAJgAh8jlIAAgBIADADIgDgCg");
	this.shape_410.setTransform(73.5,-10.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#858581").s().p("AgegHIAGAAIArAKIAMAGg");
	this.shape_411.setTransform(2.2,-25.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FEFDFC").s().p("ACtBJIACgCIABAAIgDAHIgDABQgMgCAPgEgAiuhHIAAgFIABgCIALAXQgIgHgEgJg");
	this.shape_412.setTransform(3.5,-25.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#798585").s().p("AALgKIgDAGQgEAHgEAEQgEAEgGAAg");
	this.shape_413.setTransform(23.3,-19.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FBF7F4").s().p("AgDACIAAgCQADgFAEgCQgDAFgBAFIAAABIgDADIAAgFg");
	this.shape_414.setTransform(27.3,-20.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#786055").s().p("AgEABIAJgKIAAABIgHAMIgCAGg");
	this.shape_415.setTransform(26.9,-21.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#776965").s().p("AgMACIAAAAIAAgCIAAAAIADgCQAJgHAHANIAGABg");
	this.shape_416.setTransform(26.4,-24.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#72625B").s().p("AgOABIALgBIgCABIgJABIAAgBgAAKAAIAFgBIAAABIgFAAg");
	this.shape_417.setTransform(29,-22.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#A3A7A6").s().p("AgXgQIAPAFIAFACIAbAZIAAABg");
	this.shape_418.setTransform(19,-0.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#816B61").s().p("AACADIgEgDIgCgCIAGACIADADg");
	this.shape_419.setTransform(17.3,-5.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FCFAF9").s().p("AA8ArIABAAIAAAAgAA2AmIABAAIAAAAgAASAVIgFgCIAAgBIAJACIgBABQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAABgAg8gqIACAAIgCABg");
	this.shape_420.setTransform(24.8,-1.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#DDD1C9").s().p("AC5A4IAAgBIACgCIABAEIgDgBgAgwAaIABgDIAGABIgCAAIgCABIgBACgAhrgBIAHABIAAAAIgCABgAi7g4IADAAIgBABg");
	this.shape_421.setTransform(36.4,0.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#AFA59B").s().p("AgBADIgCgCIABgEIACgBQADgBAAAFIAAACIgBACIgBABIgCgCg");
	this.shape_422.setTransform(15.1,-5.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#59564E").s().p("AAAAFIABgCIAAgDQAHAGgEAAIgEgBgAgEgFIACACIgCABIAAgDg");
	this.shape_423.setTransform(15.4,-5.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#5F5953").s().p("AAEgFIgJACIAGgFIADgBIACATg");
	this.shape_424.setTransform(12.8,-7.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FF0000").s().p("AHkH+IABgBIAKgHIAJgFIAIgIQAWgVAYgRIANgIIAFgDIABgDIAGgBIAJgIQAJgIAKgGQAYgGATgNIAJgDIAGgDIAHgCQAPgGANgKIADgDQAOgMASgHIACgCIAkgjIASgRIANgKIAHgJIAAAAQAGgIAKgEIAEgCIALgDIAAgBIABgBIABAAIAHgJIAGgGQAkgvA3gXQAagKAYgNIADgCIABgBIAFgDIAJgIQAegcAlgSQANgNARAAIACAAIABAAIALgLIgMgDIgCgCIgCgCQgRgBgQgFIgFgBIgDgBQgVgPgXgJIgzgUIgUAAIgIgDIgjgGIAAACIAAAAIAAAAIAPAEIgQgDIAAAAQgRgEgQgJIgLgBIAAgQIABgBIgCgEIgBgCIgCgHIgBgGIAAgBIAAgFIgFgOIgDgHQgFgIAAgIIgBgLIAFACIAZAIIBWAcQAQAFAQACQAtAFAsAKIA1AOIAAAAIAVAHQAoAdA0ABQAiAAAhAJIABAAIAAAAIAAABQgoASgkAZQg7AmgzAvQg1AxgwA0QghAmgsAcQgnAYgfAiQgHAHgJAGQgcASgaAVQgrAjglAqIgCABIAAABIgIAJgA0rH+IAAhFIAngiIAHgGIAIgCQAFgEADgEQAFgIAJgHQAEgDACgFQAPgJALgQQADgFAFgBQALgFABgLIACgCIAMgDQAGgFAEgHIAAgDIAHgCQAIgEAHgHIAEgEIAOgCIACgCIAGgGIASgOQAFgDABgGIAJgCQADgDABgDQAFgJAKgFQAHgEADgHIAJgDIAKgGQAWgJAWgGQAagDAZACIAMAAIAJABIAEAAIADgGIAKAEIAYAIIAAABIABgBIAFgEIAUgCQAogBAiATIAWANIAOAIIA2AcIATAKIAKAFIAWAOIANAJIAIAEIAaASIACACIACABIA3AlQAKAHAJAJIADADIACACIAGAGIACAAIABAAQATgCAMANIACACIAEABIAAADIAAACIACADIADACIASAAQAQAJAQAKIgVgSIAdAVIAQAKQADAGAGAFIgBABIACACQAJAHAHAKIAEAFIAAAAIAJAAQAHAHAHAHIACAKIACAGgAz4F6QAXgZAagQIABgBIgFAGQgGAKgKAFQgIAEgEAJIgJACIgCACQgBAGgDAEIgBACIgIADQADgGAEgFgAxlEAQAKgIALgHQgFADgBAGIgCADIgGADIgMALIgDADIgKACIASgQgAxFDqIADgCIgBACIgBADIgJACIAIgFgA0rjYIA3gmIAOgKIAcgTIAIgEQAkgWAmgSIAcgPIAJgFIATgKIgBgCQASgMARgNIAcgQQAjgUAhgYIALgHQAngVAngWQAIgEAGgFIAAgBIARABIAIgDQAOACAOgCIABABIAFACIAMgDIgFgCIACAAQADgBADABIASAEIADACIAPAKIAEADQAPALAKgIIAAABIACAAQAOAIAEATIABABIABAIIAAADIgBAGIAAABIAHAOIAAAOQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABADIAYAgIADAFQgKgHgPgCQgTgCgPgJIgJgGIABgCIADgJQACgRgbADIAAAAIgFABIgCAAIgNAGIgHgBIAAAAIgHABIgFAFIgCADIAAAAIAAACIgIADQgTAFgVAIIgEADIgFABIgFAHIgHADQgLAEgJAIQgJAJgLAHQgUAOgXAIIgBgBIgGAEQgqAPgnAVQgmAVglAWIgGADIAAABQgdASgYAXQg+A0hHAgQgMAFgNADgAIHhvIAAgBIgGACQgQAEgQgDQgjgFgigIQghgIghgLIgLgDIAAADIgFgBIgCAAIgHgBIAAADIgNAEIgpgdIAAAAIABgCIAFACQABgBAAAAQABAAAAAAQABABAAAAQAAAAABAAIAAgBIgJgCIgHgBIgagCQgCAAgCgDQgPgOgDgPIgdgUIABgBIgDgCIgIgFQgIgEgBgFQgCgFADgEQgGgKAGgQIAEgIIAAACQABAFAEACQAeALAgAKIAGACQAJACAIAAQA2gDAxAVIAEADQAoARAqAPQAoAOApgBIATgBIACAGIAAABIAAADIAEABIADAAIgBAaIgCAAIACAFQADAKAAALQAAAEgCAEIgDACIAAABQgFADgEABIgIACQgKAAgJgHgAE8iOIAAgBIAAAAgAE2iUIAAAAIAAAAgAErieIABgCIgCgBIABADgADBjlIACgBIgCAAg");
	this.shape_425.setTransform(-0.7,17.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#716D66").s().p("AAWAEIAlgJIAOACIgBACQgZAFgZACgAhIAAIAGAAIAAABIgGgBg");
	this.shape_426.setTransform(6.8,-11.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#A7A09B").s().p("AAfAZIgJgFIgBgFIAZAPgAAAgNIgIgCIACgLIgjAFIgEgDIAUgBQAIAAAGgCIALgCIAAARIAAgBg");
	this.shape_427.setTransform(13.4,-5.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#717B7C").s().p("AgTAPIABgBIAmgdIgnAfIAAgBg");
	this.shape_428.setTransform(20.1,-16.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("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");
	this.shape_429.setTransform(2.9,15.2);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#7D8282").s().p("AgZAKQAWgDAPgIIgXAOgAAagMIAAACIgLAHIALgJg");
	this.shape_430.setTransform(15.4,-13.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#917F77").s().p("AAJgEIAFAAIgBABIgaAHg");
	this.shape_431.setTransform(16.4,-26.4);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#726052").s().p("AgBARIABgDIACAAIAAABQgCADgDAAIACgBgAAEgFIgIgLIAAgBQAEABAAACQAEAEABAFQABAFgBAFIgBAFg");
	this.shape_432.setTransform(19.1,-28.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#888A87").s().p("AAAAAIAAAAIAAAAg");
	this.shape_433.setTransform(18.3,-29.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#736861").s().p("Ag1AAIAXAFIgEAAIgHABgAA1gFIgVAGIgLABg");
	this.shape_434.setTransform(9.6,-25.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#7D746B").s().p("AgrAAIgOgGIABAAIA0AKIAogHIAWgDQgcANgdAAQgVAAgXgHg");
	this.shape_435.setTransform(7.7,-26.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#130D0B").s().p("AApA3IgDgBIgWgEIgqgNIhDgUIgCAAQgggBgXgTIgDgDIgLgXIAAACQAAgLgFgFQACgDAAgFIAAgCIAEgFQAHACAJALIANAQIAIAJIAAAAIAGAFQAzAiBAANIANAFQA0AUAygZQAggEAPgWIAAgBIADgDIALALIgBARIgBADIgEAAIgMAAIAAAAIgFAAIgYAKIggAIIgeAIg");
	this.shape_436.setTransform(2.5,-30.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#B9ABA1").s().p("AgYgDIAAgBIAAAAIgBgCIAzANg");
	this.shape_437.setTransform(4.5,-26.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#97837A").s().p("ABAAfIABgBIAAABIgBAAgAhAgeIAKAIIgBABIgJgJg");
	this.shape_438.setTransform(-4.6,-30.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#0B0806").s().p("AggADIgOAEIAAgFIAEgDQAOgMAPgDQAKgDAJABQAKACALAFIAGADIANANQABAGgEAAIgRgIIgBgBIgOgEIgoATIgFACg");
	this.shape_439.setTransform(1.3,-39.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#7B7570").s().p("AAhgBIgGgDIAIABIAHADIAEALgAgtAHIAXgRIAJABQgPADgOAKIgDAFg");
	this.shape_440.setTransform(1.3,-39.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#A0928C").s().p("AABANIAAABIAAABIAAgCgAAJgDIgFgLQAEAFACADIABADgAgLgFIACABIAAABg");
	this.shape_441.setTransform(5,-38.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#B7A399").s().p("AAAACIAAgDIAAADIAAAAg");
	this.shape_442.setTransform(3.2,-44.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#AAA7A3").s().p("AAAAAIAAAAIAAAAg");
	this.shape_443.setTransform(3.2,-44.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#5D5B55").s().p("AgBgBIACAAIAAgBIABAAIgBACIgBADg");
	this.shape_444.setTransform(3.1,-44.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#67615E").s().p("AARAEIgDgEIghAAIAfgDIAIAHg");
	this.shape_445.setTransform(0.3,-46.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#6A5850").s().p("AgXAAIgDAAIAKgEIAHgCQASAAAPAKIADADg");
	this.shape_446.setTransform(-0.6,-48.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#0B0909").s().p("AAZgGIgsABIgGAEIgCABIAAAAQgKAFgFgGIgCgEIgBgEIBXgFIAEAdg");
	this.shape_447.setTransform(15.8,-43);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#99918A").s().p("AgOAAIACACIgBAAgAAJgBIAGAAIgLACIAFgCg");
	this.shape_448.setTransform(12.8,-43.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#C0BBB8").s().p("AAIAGIgBgBIgOgKIAGADIAJAIg");
	this.shape_449.setTransform(39.4,-26.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#A6A19E").s().p("AAdANIg8gYIAAgCIANAEIACAAIAAABIAwAWIgDgBg");
	this.shape_450.setTransform(41.1,-24);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#D3C5BF").s().p("Ag4AfIACgGIAIgOIAJgBIgFAGQgGACgDAHIAAABIAAAGIgFAEgAgMAHIApgcIAKgMIACgCIAAgBIABABIAPAPIAAACIgRgGIgzAfIgBAAg");
	this.shape_451.setTransform(32.1,-23.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#78726D").s().p("AgDgBIAGABIABADg");
	this.shape_452.setTransform(39.7,-29);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#5F544F").s().p("AgBgIIAVALIgXgFIgQAKg");
	this.shape_453.setTransform(32.8,-28.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#6E6761").s().p("AAJAGIgOgNIACgCIAYATgAgHgEIgKAJIgEABg");
	this.shape_454.setTransform(37,-26.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#7F665B").s().p("AgVAOIAAgBIAogaIADgBIgpAcIgCAAg");
	this.shape_455.setTransform(32.8,-24);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#6C5E57").s().p("AAGgKIAAALIAAACIgCADIgGAFIgCAAQgFAAAPgVg");
	this.shape_456.setTransform(33,-31.3);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#F4E9E8").s().p("AAAgCIABgCIgBAJIAAgHg");
	this.shape_457.setTransform(32.1,-33.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#A7948E").s().p("AAAAAIAAAAIAAAAg");
	this.shape_458.setTransform(32,-35.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#84817E").s().p("AgXAJQAKgBAGgGQADgCABgCIAbgEIgpAQgAgCgJIABABIgBABIAAgCg");
	this.shape_459.setTransform(29.6,-24.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#E5DCD9").s().p("AhsBTIgTgGIBdAPIgnABgAACBaIAAACIgFAAgACfgFIAAgBIAAACgACvgbIAAAAIAAAAgAgNgjIADAAIADABIgGgBgABmg4IABgBIAAABgADJg7IAAAAIgBABgAjEhUIgEgIQALAKANAFIAAACIgUgJg");
	this.shape_460.setTransform(7.5,-21.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#626A6D").s().p("AARgQIAAACIgaAdIgHADg");
	this.shape_461.setTransform(31.1,-31.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#D0C8C5").s().p("AgMAaIAAAAIgBABgAANgZIABgBIgBABg");
	this.shape_462.setTransform(30.7,-32.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#606261").s().p("AAAACIAAAAIAMgaIAAABIAAACIgMAYIAAAAIgLAWg");
	this.shape_463.setTransform(28.2,-35.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#5E493D").s().p("AABgMIAAATIgBAGg");
	this.shape_464.setTransform(26.3,-41.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#938A83").s().p("AALgNIglAAIgGAAIAsgBIAVAVIAAAAIgBAIg");
	this.shape_465.setTransform(17.1,-42.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#DDD4CF").s().p("AAAAAIAAAAIAAABg");
	this.shape_466.setTransform(27.2,-44.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#6F8186").s().p("AgmA4QAIAAAGgCIgBABIgMAHgAAmg9IABAAIgCAJIABgJg");
	this.shape_467.setTransform(22.6,-40.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#D3CDC5").s().p("AAAgEIABAAIAAAEIgBAFIAAgJg");
	this.shape_468.setTransform(36.3,-42);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#DACFCE").s().p("AAAAAIAAAAIAAABg");
	this.shape_469.setTransform(33.5,-48);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#4B4340").s().p("AAAgKIAAADQAAAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQACgCACgEIABAAIgCAFIAAABIAAAAIgEAKIgJAIg");
	this.shape_470.setTransform(38,-42.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#3A302B").s().p("AgDAHIgBgCQAFgMADgBQACAAgCAKIAAABIgBAAIAAAAQgDAEAAABIgBABIgCgCg");
	this.shape_471.setTransform(38.4,-44.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#D6CFCC").s().p("AgNAsIAFgIIACABIgGAIgAAOgsIAAAKQgEACgCADg");
	this.shape_472.setTransform(38.5,-40.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#5D534E").s().p("AgiADQAigIAlADIhJAGIACgBg");
	this.shape_473.setTransform(30.5,-64.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#3F3832").s().p("AABACIgBAAIgBgDIABABIACACIgBAAg");
	this.shape_474.setTransform(36.4,-54.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#BAA9A5").s().p("AgFALIgBgFIAAgBIAAAAQgBgGAAgFIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIABABIABACIAHAFIgIgFIgBgBQgDgBgBADIgBACQgBAEACAGIAAAEIABABg");
	this.shape_475.setTransform(35.3,-53.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#58524F").s().p("AAEBTIABgDIgBAFgAAHAAIAAAAIAAAAgAALg8IAAAAIAAACIAAgCgAgKhTIAAAAIAAAAIAAAAg");
	this.shape_476.setTransform(32.3,-42);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#735147").s().p("AgMBOIABgDIgBAEIAAgBgAAGhNIAAgBIABAAIACAKQADAUABAVIAAAWIgCAFIAAAAIAAABQAEglgJgpg");
	this.shape_477.setTransform(30.5,-42.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#64554E").s().p("AAAAAIAAAAIABAAIAAAAg");
	this.shape_478.setTransform(30.5,-54.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#BDB2AE").s().p("AAEAEIAAAAIgEgEIgEgEQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIAAABIAAABIAEADIAAAAIABACg");
	this.shape_479.setTransform(34.6,-55.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#B6B0AA").s().p("AKVIbIgMgDIANADIgBAAgAqUoUIgBgBIAAgBIAAgEIABAAIABAEIABAFIgCgDg");
	this.shape_480.setTransform(100.3,-3.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#1F1410").s().p("AAAAAIAAAAIAAAAg");
	this.shape_481.setTransform(31.1,-58.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#575048").s().p("AgFgCIAAgPQAAAAAAABQAAAAABAAQAAABABAAQABAAABABIAAAAIAHAgg");
	this.shape_482.setTransform(37.2,-56.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#4D4440").s().p("AgFAEIgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIABgBIACgCQAEAEAAgCQADgFAFAFQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgIAEgDAAIAAAAg");
	this.shape_483.setTransform(35.7,-56.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#9E968F").s().p("AAEgBIABABIAAAAIgBAAIAAAAIgIACg");
	this.shape_484.setTransform(37,-60.2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#615C59").s().p("AAOBBIABAAIgBADgAgOASIANhUIABABIAGAKIgBAAIgBADIgDgDIgBAFIgHA2IAAACIgDAPQAMgLgQAdg");
	this.shape_485.setTransform(28,-44.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#A79E9A").s().p("Ag1B3IgIgEIAMAAIgCAEIgCAAgAgGB0IAcgEQgJAFgKAAQgDAAgGgBgAg2BSIAAABIgDAEIAAAAIgCABgAAxgKQAKgbgBgaIACgBQAEANgDANQgCAOgJAPgAAeg3IAAgCIAAACgAArhzIABgDIAAAEIgBgBg");
	this.shape_486.setTransform(24.1,-38.4);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#9DB3B7").s().p("AAAAbIAAg1IAAAGIAAAAIAAAuIAAABIAAAAg");
	this.shape_487.setTransform(26.4,-49.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#C9BEB9").s().p("AAnAOIABAAIAAABgAA0gKIAAAAIAAAAIAAAAIAAAAgAgzgMIAAAAIAAAAIABgBIAAgBIAAAAIAAACg");
	this.shape_488.setTransform(26.6,-55.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#D2C6C2").s().p("AgGgBIALABQAAAAABAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAAABIAAAAIgBABIAAAAg");
	this.shape_489.setTransform(20.6,-57.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FAF4EE").s().p("AAAAAIAAAAIAAAAg");
	this.shape_490.setTransform(20.4,-60);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#514944").s().p("AgGAeIgHgGIgKgIIgSgTIAJAFIAAAAIARAMIABgHIAIAXIAAAAgAAwAKQAKgMgTgJIgEgDQAIADAEADQANAIgPANIADgDgAAEAMIgEgDIgBAAIAAAAIAAAAIgNgGIAAgBQgBgLgPgEIgKgCIgMAFIAGAEQgDAEgDgCQgDgDABgCQABgDAEgCIAegFIAAAAIAHgCIAMgIIAAAAIAxAGIAGAEIAAABIg6gCQgCABAFAFIAAAAIACADIADACIABAAIAUgHIAFAAIAAABIACAAIgCABIAAAAIgLAEIgEABIABAAIgRAHIACACIABABQAFACAFgGQACgEAEADIgOAQg");
	this.shape_491.setTransform(34.4,-58.9);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#C4BBB5").s().p("AgDgBIgCgBQAFgBAFAEIAAACIgBABg");
	this.shape_492.setTransform(30.6,-59.1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#978A85").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_493.setTransform(29.7,-62);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#6B797C").s().p("AAIAMIgcgjIApAvg");
	this.shape_494.setTransform(19.9,-64.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#EEE4DE").s().p("AAEAEIgBgBIgQgGIAbAHg");
	this.shape_495.setTransform(35.5,-62.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#B2AFAA").s().p("AAAAAIAAAAIAAAAg");
	this.shape_496.setTransform(14.8,-58.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#969B98").s().p("AAMALQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAHAAgBAEgAgTgKIgEgDIAZANIADAFQgJgHgPgIg");
	this.shape_497.setTransform(12.4,-59.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#B2A7A1").s().p("AAAAAIgFAAIABAAIAGgCIAEABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgDADQAFgFgIACg");
	this.shape_498.setTransform(17.4,-56.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#E7DDDA").s().p("AAAAAIABAAIgBAAg");
	this.shape_499.setTransform(15.6,-59.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#CBBFBA").s().p("AAEgEIABAAIgCAHIgFACQgFAAALgJg");
	this.shape_500.setTransform(4,-58);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#B5A39D").s().p("AgzAfIAAgBQgBgEADgBQAfgxA0AFQg7ABgZA2IgCABgAAvgGIgKgNIAEABIABAAQAIAIAAgCIAEAEQgCAEgCAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBgAAbgjIAAgBIADADg");
	this.shape_501.setTransform(1.9,-53.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#6D625B").s().p("AgTAEIAIgJIAQAFIADAAIAMAGg");
	this.shape_502.setTransform(4,-56.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#6C6B69").s().p("AAIgCIgFACIgBAAIgJADg");
	this.shape_503.setTransform(3,-59.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#685550").s().p("AgqAGQADgFAGgCIALgIQAYgPAkgBIADAAIABAAQAIAMAAABQAAADgIgIIgBgBIgEAAIAAgBIgDAAQg0gFgfAyQAAgLAHgJg");
	this.shape_504.setTransform(1.9,-53.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#B2A19A").s().p("AgPAHIAYgQIAHgCIAAABIgQAKIAAAAQgSAOASgHIABAEIAAABg");
	this.shape_505.setTransform(4.4,-58.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#B1A7A0").s().p("AAAAAIgUAAIAAgCIAVACIADACQAUAagVgiIgBgBIgBgFIAQgGIAEADQgVACAPAbQABACgBADg");
	this.shape_506.setTransform(8.2,-59.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#756766").s().p("AgCAAIgDgCIACgHQAKATgCAAQgBAAgGgKg");
	this.shape_507.setTransform(9,-59);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#635951").s().p("AgIADIgHADIAdgLIABAFIABAAIgCAGg");
	this.shape_508.setTransform(7,-60);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#675B53").s().p("AgCgDIAGADIABAAQgFAEgCAAQgDAAADgHg");
	this.shape_509.setTransform(8.9,-63.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#666560").s().p("AgDAAIgGADIAAgBQAOgFAEAAQADABgIAGQAHgHgOADg");
	this.shape_510.setTransform(2.6,-63.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#615B53").s().p("AgBAAQABAAADgBIgFADIABgCg");
	this.shape_511.setTransform(2.7,-62.7);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#625D59").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_512.setTransform(1.3,-68);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#F4E8E4").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_513.setTransform(2.9,-66.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#736A66").s().p("AgMACIAWgEIADAAIgUAEIgFABg");
	this.shape_514.setTransform(1.7,-66.8);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#4E4742").s().p("AACAAIgFABIAAAAIgLABIAWgEIAHAFg");
	this.shape_515.setTransform(2.2,-70.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#B5ACA9").s().p("AgEABIAEgBIAMgEIgXAJg");
	this.shape_516.setTransform(0.4,-69.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#F6EEE9").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_517.setTransform(1.7,-69.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#73746E").s().p("AgJgCIAHAAQAaAEgaABg");
	this.shape_518.setTransform(4,-70.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#7A716D").s().p("ABBCgIAjgtIAFgHIgoA2gAgGgzIAAAAIAAAGgAA9g0IABAAIAAABgABvg9IABgBIABACgAgLhXIABgCIAKACIgDACIgBAAIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAg4hjIAAgBIAAABgAA3hwIACABIgBAAgAAbh5IAAAAIABAAIABACgAhfiNIABAAIgBABIAAgBgAhwieIABgBIABABIgCAAgAhdihIABAAIgBABIAAgBg");
	this.shape_519.setTransform(27.2,-47.2);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#BFB6AE").s().p("AgEgBIgBgBIgCgDIAPALg");
	this.shape_520.setTransform(18.4,-63.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#6B5E57").s().p("AgGgGIALAHIABABIABADIAAACg");
	this.shape_521.setTransform(16.9,-64.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#7B7D79").s().p("AgGgFIgBgBIAPAJIAAAEg");
	this.shape_522.setTransform(18.3,-63.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#CEC5C0").s().p("AgIgBIAOABIABAAIABACg");
	this.shape_523.setTransform(12.3,-63);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#F7F0EA").s().p("AgFAAIgCAAIgBgCIAQAEg");
	this.shape_524.setTransform(12,-63.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#B59F94").s().p("AgGAHIgFgIQgDgJANAEIAAABIgBAAQgMgCAIAIIABACIACABIAQAEg");
	this.shape_525.setTransform(11.8,-63.6);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#BDB4AF").s().p("AgLgDIgEgCIAJAAIAWAKIgMABQgFgGgKgDg");
	this.shape_526.setTransform(12.9,-66.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#ACA7A0").s().p("AgLAAIgRgBIgHgBIAuABIAOAAIAGABIAEADg");
	this.shape_527.setTransform(11.6,-68.7);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#747A76").s().p("AgJgCIgFgEIAdANg");
	this.shape_528.setTransform(16.2,-68);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#686058").s().p("AgXgCIAQAAIAOACIARADg");
	this.shape_529.setTransform(9.5,-68.6);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#695F56").s().p("AghgCIAlgDIABAAIgdADIA6AJgAAJgFIAHgBIgGABg");
	this.shape_530.setTransform(11.7,-70.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#8D8985").s().p("AhFABIgFAAICNgBIAIAAIh4ABIgYAAg");
	this.shape_531.setTransform(10.7,-72.4);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#EDE6E0").s().p("AA8AYIADgBIADAHIgEAKgAgYgXIADACIAAAAgAhAgnIgBAAIACAAIAAAAg");
	this.shape_532.setTransform(18.7,-67);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#BCB2AA").s().p("AgEAJIgBAAIAAgCIABAAIADACgAAdgBIghgEIgeAAIAGAAIAcgCIAjAGg");
	this.shape_533.setTransform(16.2,-70.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#7B736C").s().p("AAiAvQAAAAABAAQAAABAAAAQABAAAAAAQAAgBAAAAIAAABgAAlAlIABAAIgBABIAAgBgAglgdIAEAAIABABIADACIAQAQgAgfgvIAEAAQASAAAMAFIgBACg");
	this.shape_534.setTransform(19.5,-66.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#9B7D71").s().p("AgDAAIAHAAIgBABg");
	this.shape_535.setTransform(17.9,-72.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#9F948B").s().p("AgBgFIACAHIABAEg");
	this.shape_536.setTransform(57.8,-50.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#4E686C").s().p("AAAAXIACgDIgBALgAgDgbIAAgDIAHAMIAAADQgDgIgEgEg");
	this.shape_537.setTransform(56,-47.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#909FA1").s().p("AAIAgIAAgBIABgDIABAJIgCABIAAgGgAgDgaIgBgDIgFgIIANAMIAAAEQgEgDgDgCg");
	this.shape_538.setTransform(55.1,-48.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#A08B82").s().p("AgigTIgVgYIBtBTIACADIgBABg");
	this.shape_539.setTransform(50.8,-56.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFCC99").s().p("AkhK/QgDgJgEgIIgIgNIgEgFIALAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAIgPgFQgPgRgVgMQgKgOgPgIQgQgJgMgLIgdAAIgTgQIgKgKIglgpIgMAAIgBAAIAAAAQgJgCgFgFIAAAAIgBgCIgBABIiWhdIh0gvIgCADIgDACIgIABQggABghgDQgFgBgBgGQgDgUAXgBIABAAIAAAAQgEgOALgJIAIgGIAJgEIAAgBQAAgNADgKIACgGIADgIQAIgQAQgKQAGgEAHgCIAQgFIABgBIAaACIACAAIAJABQgEgJADgLIACgHIAAgBQAFgLAJgIIAAgBQAEgSAPgNQAHgGAHgDQAPABAOADIAIgDIAGgCIACgBIACgQIABgYQABgeADgeIABgNQACgUAFgTQAFgUARgLIAEgCIABAAIABAAIAJAAIAIgRIAAAAIAAAAQADAMADACIACgPQABgFACgDIAEABIAEABIABAAIAFAKIAEAGIACALIAAAEIAAABIAAABIACAAIAHAEIAJAFQgCgJAAgKIABgHIAAAAIABgKIAAgEIAAgGIAAgFIgEgFIgEgFIAAgGIAAAAQgBgGAFgEIACgCIACAAIAAgFIAAgIIAAgIIAAgFIgBAAIgGAAIgHAAIgBAAIgggBIgFgFIgFgFIAAAAIAAgDIgBgDIgBgFQgFgDgEgEIgBgCQgEgFgDgHIgCgFIgFgDQgHgHgGgJIgHgLQgLgVgIgXQgUg6gRg8QgEgPgCgPIgQiCIgCgfIgFg0QgCgaAOgUIAEgFIABAAIgCgFIAJgDQAIgHAJgFIACgCIAIgFIANgGQANgFALgCQAYgFAZAAQAKAAAIgCIABAAIAJgDIABAAQANgDALADIALAEIAEADQAUAAATABQAXACAWAGIArABQAJABAIACQAIACAIADIACABIAJAEIAAAAIAoAHIBIAWIBKAaIAKANQAAAEABAFQACAFADABQACACADgDQACgDABgHIAmARIgVAcQgZAFANAPIAAACQgDAPgPgGIgEgDQh2Aih0gTIgWgBQgbgCgagIIgHgCIgGgDQgIgEgHgGIgDgDIgCgDQgIgDgPgJQgTgBAZAWQALAJANAHIADARIAAACIgBAAIgGgCIgQgCIgQgEIAAAJIAbAOIASAOIAAAhIAIAIIACgDIABAAIABgBIABAAIAFABIgIgKQACgLAMAGIAFAEIAmAZIAMAIQAAAFAEABIABAAIAYAoIgOAUIAGAEQAWALgFAdIgCABIAAAAIgBANIACAWQgJALAIAIIADABIAAACIAEAAIAKADIADAAIACgBQANACAKAGIABABQAAADADACIBAACIAGAFIADAEIACABIAJACIgBgIIABgGQAGAEAEAFQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgEAEIAEABIAHgDIAPACIADABIAGABIABAAQAFABAEACQAJAGACAMQAEAXATAMIABABIADADIACAAIADADIAPAPIAEAFIAHAFIABACQAKAKAMAHIADABIABABIArAPIABAAIAHABIACABQAVAKAXAEIAbAFQAkAIAmAAIAEADIAjgFIgCALIAIACIACABQAHADAGAHIABADIACADQADAHACAGIABAFIAJAFIAwAhIAbAXIAKAJIAFAPIAEABQAAAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAbAJIAXgLIASABIBIACIAHAGIAFAEQATgBARADIADABIAEAAQAcAGAaAOQAJgBAIACQASADAPAMIAOALIABABIALAHIAFACIAaAJIAAAAIAGgDQAHgEAFgHIABAAIgCgBIgBgBQgJgDgJgGIgGgEIgLgIQgOgNgIgSIgBgBIgEgKIgBgEQgDgNgBgQIAAgFQgCgJAAgLQABgVAEgTIABgFQgEgSAAgUQgFgJgDgLIgKgeIgHgRIgFgMIgFgKIgBAAIgKgEIgVgkQgRgNAEgGIgCgBIgBgBQgOgFgMgHIgBAAIgFgEQgQAAgKgGQgHgEgDgHIgDgGIgCgBQgJgGgDgIIgBgCQgDgJADgLIABgBIgIgFIAGgJIAeguIACABIgBABIgNAVIACABQACAKAFgFIAAABIAAgCIABgJIACgGQACgGAEgFQAFgIAIgEIAEgCIAEgDIAHgBIADgNQAGgZAOgWIADgEIAAgBQgIgFAJgKIACgIIAAgCIACgEIAGgKIAGgIIAAgBIABgBIABgBIgDguQABADAEABIABAAIAGABIAXATIAFAIIABADQAGACAEADQAGAEADAIQADAJgCAOQgBAHgDAGIgBADIgCADIAAABIAAAGIAAAFIAAADIgFAPIgEAGIgBADIgMAiIgCAMIAAACIACABQAMAHAJANQAPADAMAKQALAGAKAHQAKAIAJAKIAIALIABAAQAFAJADAIIAFAHQAZAdAUAgIAEAGIAJALIADAFIAMAQIAAACIACABQANASALAUIAGAOQACAEAEADQAHAFAGAFQARAQAIAZIACACIADADQALAmANAoQAGASAEASIABAFIABAKIACARIABALQAAAGABAGIABAFQADATACAUIAAAJIAAACIAAASIAAAHIAAAHIABANIgBAIIAAAKQgCAOgFANIAAAAIgCADQgGAOgKANIgDACIgGAFQgEADgFAAIgbAHQgUAGgSgGIgGgCIgCgBQgdAFgdAAIgMgBQgHAAgFgDIgEgBIgFgFQghAEggACIgQAAIgDAAIgCAAIgVABIgFAAQgdAAgdgCIgogEIgZAAIgLgBIgLAAIgFAAIhkgEQgDAAgCgBIgJgIIgCAAIgGgDIgBAAIgFgEQgGgEgDgEIAAAGIAAABIgDgDIgKgJIgUgEIgFADIAAADIAAAEIAAABQgBANgLAJQgFAEgGADIgFADIAAAAQgJAJgPAFIgaAIIgCABIgCAIIgCALIAQAAIAEABIAAAAIAAABIgbA0IgiAkIgEADIgwAcIhKAjIhLAnIg5AoIgrAgIgPAMIgFAEIgGACQgMAEgKAFIgFADIgMABIAJABIgFADQgSALgOARgAkPKiIADAAIAAgBIgDABgAqHEPIABgCIgBgHgAHvEGIAFgBIAHAAIAIgBIgEgBIgBAAIAAgBIABAAIAvgZIgIAAIgVAAIgGAAIgcgCQgUgCgTgEIgNgCIgBAAQgUAEgVgBIgHgBQgDAAgCgEIAAAAIgBgBQgFgDgFgFIgCgCIgFgHIgBgEIAAgIIAAgEIABgBIgGAAIgGAEIgSAKIgGADIgEACIgHACIgNAEIgFABIgKABIAEAKQAZABAZAFIADAAQAbAFAZAIIAQADQASADAIAKIAAAAIAFgBIARgBgAHcB9IAHAAIgDgCIgEACgAGUBqIAAgDIgRAAIARADgAnGBpIABABIgBgBIAAAAgAndBMIAAAAIgBgBgAoSAUIABADQAEAHAFAFIADADIAAAAQgEgJAAgLIAAgJQgIABgJgDQAEAGAEAHgAo7iTIAAABIAEAFIADAEIAMACIgKgEIgCgEQgCgDgDAAIgCgBIAAAAgAkRi+IABAAIAQgBIAAAAIgRABgAofk8IACAJIACANIADACQAGAHAGAIIABABIABACIABACIAGAMIAHAAIAEAIIAAABIAcAhIAHADQALADgMgSQgDgFgEgDIgBgDIgHgHQgSgSgFgbQgCgNABgQIAAgIIgCgWIADgDIAAgHIAAgJIAAgCQAAgIAEgGIACgDIADgDQAJgPgJgHQgDgDgGgBIAAABIgLASIgHAXIgBAFIABAAIAAAFIABA4IgBACIgBACIgCADQgFAAgCgEQgFgJgBAAIgBABgAnDmoIACABIgDgDIABACgAmLofIAEABIgJgIIgBAAIgfAAIAlAHgAnForIgBAAIAAAAIABAAIACABIABAAIgDgBgAllKJIAAAAIACABgAAfhfIAAgBIAmgBIhagPIgKgCIgbgQIgEgCIgRgKIgCgBIghghIgUgUQgagPgCgeIAAgFIAAgEIAAgJQAAgPADgOIAEgSQABgGAEgFIAEgGIABgBIAEgQIAEAAQAIgRARgMIAHgEIABgBIAAAAIABgEIADgIIAJgOIAighQAGgBAFAEIAGAEIAAACIALgDIAHgBIANgGIAFgCIA0gIIADADIADAAIAAABIAFAKIADAFIABABIAAgBIAAgFIAAgBIAAgBIABgCIAAgIIgCgIIgKgCIgDgDQgPgMgUAAIgHACIgBAAQgQADAJgPQAXg3A9gCIADAAIAAAAIAKANQAEAFADgHIgEgEQAAgCgHgLIgBgCIgMgGIgDgDIgCgEIABgJIAQgKIAUADIARATQABgEgBgCQgRgcAXgCQAOAIAMAJIAHAGIALADIgPAjQAFATAGgJIACgDIAKgBIADAFIAFgBIABABIBFgKIAKAFIAUASIAAA3IAAAJQgBARgDAOQgGAZgNATIgFAHQgQAVgTAFQgHACgHAAIABAGIAOgBQAWgDAQgNIAHgGQAIgJAEgKIAIgKQAPgTAOgaIAEgHQABAagKAbIgEAJIAAABQgGAOgIAOQgRAcgcAcIAigJIgiAfIgkgSQgCgCgEgCIgFAGIACgBIAAABQgPAVggAEIgWADIgqAJIg1gOIABACIAAAAIgBAAQg+gNgzgkIgGgFIAAAAIABgBIgcglIAEgNIgLAKIgDAEIgEAFIAAABQAAAFgDAEQAGAFAAAKIgBAFIgBAEQAFAIAIAHIADADIADAIIAUAJIABgCQANAFAPAAIA/ATIA/ASIAHAAIAGABIAUAEIAfgIIAKgBIAWgIIAcgJIABAAIAIAEIAAAAQAFAAACgDIAAgBIACgEIABgEQALgMARASIAGACIADABQAQAEAOgIIADgBIAJABIAAABIAAgBIAIADQAIAEABAHIAAACIgEAGIADgBQgBADgDADQgGAGgKABQgJgPgKAHIgDADIAAABIABACIgBAAIABAAIADASIgGAOIgDADIgXAXIgoAfIgBABIgLAJIgDACQgSAKgVADIglAMIAAACQgPABgPAAQgeAAgegGgABkhhIAHgBIAAgBgADuifQgPAEAMACIAEAAIACgHIgBAAIgCABgAEIjEIABAAIAAgBIgBABgAgClzIAAACIAAAFIAAAJIAAATQACACACgBQADAAACgLIAGgIIAqgVIANAHIABACIABgBIAQAHQAEAAAAgGIACAAIgBgDQgCgEgEgEIgHgGIgHgBQgLgFgLgBQgKgCgKADIgJgBgABRlbIABgBIgBAAIAAABgADVmgIAVAeIABgIIAAAAIgEgeIhZAFIABAEIAAAEIACAAQAFAIALgHIgBgBIADAAIALgFg");
	this.shape_540.setTransform(-3.1,-2);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#BFAEA7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_541.setTransform(50.6,-49.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#6F5F57").s().p("AgBADIAAgBQgGgVALAUIAAAAIgEAIIgBgGg");
	this.shape_542.setTransform(50.1,-50);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#503C35").s().p("AgEAAIgBgEIAAgBQABgFAIAFIAAAAIACAJIAAABIgBACIgBAAQgLgUAGAVIAAABIgDgJg");
	this.shape_543.setTransform(50.1,-50.6);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#596B72").s().p("AgCAVIAEgmIABgFIgCArIgBABIAAAAIAAABIgCgCg");
	this.shape_544.setTransform(46.4,-48);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#849299").s().p("AAAANIAAgeIABAbIgBADIAAAFg");
	this.shape_545.setTransform(46.7,-51.8);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#C6A699").s().p("AADAWIgCgLIAAAAIgCgZIgBgBQgCgJAEACIAAABIAEArIgBABg");
	this.shape_546.setTransform(50.4,-52.4);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#8C8783").s().p("AgEAFQgKgNANAEIALAHIgGgBIgBAAQgDgBAAgBIgBAAQgGgCADAGIAAABIAAAAg");
	this.shape_547.setTransform(50.6,-54.6);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#917063").s().p("AAHAaIgTg2IABgEIAYBBg");
	this.shape_548.setTransform(40.7,-53.4);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#89959A").s().p("AgDgQIACACIAFAfIgHghg");
	this.shape_549.setTransform(42.2,-53.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#9E9E9B").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_550.setTransform(44.3,-56.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#5C504A").s().p("AgYgFIAGAFIADAMIAEAvIgBAAgAAYAqIABAAIgBABgAgMgRIAAgBIABABgAgTgzIgDgHIAEAHgAgBg3IABAAIgBABg");
	this.shape_551.setTransform(44,-50.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#C7B7B0").s().p("AAAADIAAgBIAAgEIAAAFIAAAAg");
	this.shape_552.setTransform(43.5,-57);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#67615D").s().p("AAMAAIAAgBIgEgLIgBgCQAAgDgCgDIACgBQAFAJACAKIACAJQAAAJgBAKgAgOgVIgBgFIACAFIgBAAg");
	this.shape_553.setTransform(45.3,-53.4);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#716867").s().p("AAKAJQgCgIgGgEQgEgHgJAIIgBADQABgDACgDQACgHAHADIAFAEIACADIADAGIADAHg");
	this.shape_554.setTransform(40.6,-56.4);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#755B4F").s().p("AgPgMIAGAAIAFADIAUAWg");
	this.shape_555.setTransform(45.6,-60.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#68625F").s().p("AgIAOIgQgOIAAgBIASAMIAZACIAGADgAgYgOIAAgBIAYAPg");
	this.shape_556.setTransform(42.5,-60.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#0D0908").s().p("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DAMIAPAzIgCADQgJAQAOAGIABALQAAAJAEAHIAEAHIgEAAgAnhhLIgDgEIgEgFIAAgBIACABQADAAACADIACAEIAKAEIgMgCgAh/iWQAEgCADgFIARgDIgFALIgEABIgPgCgAkEixIgLgaIAAgBQACgNgGgGIAAgOIAAgBQAFgdgWgLIAAgBQAIgFAAgSIgYgoIgBAAQgEgBAAgFIgMgIIgrgeQgRgSAAAdIAAACIgEgnIgVgKIgbgOIAWgCQAHADAJgCIABAAIADgBIABgCIgGgUQgqgSALgLIADABIABABQATANAUAJIAGADQA5AZBBACIAAAAIAAABIAAAAIhkgEIAPAFIgDAAQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAABQgFADgBAFQgHAeAeAOQALAEAJAIQARAPAPARIALAQQALARAFAUIAIAlQACAHAAAHQgBAfATAOIgDAFQgKgHgOAKIgCABIgBABIgCgBgAl5m9IADAAIgMgIIAJAIgApMi+IAAgDIABAEgAHClEIACABIgDAHgABIl0IgNAGIgHABgAIsm1IgNgKIAMgCIANBFgAItnhIARAOIABADIADAKIAAABIAAAggAiumqIAPgEIAPAAQgLABgKADIAAAAIgJAAgAD2nRIAPgjIABAAIgCASIgBAYIgCADQAAABgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQgEAAgEgNgAENnLIgKABQAOgMAEAIIAAAHIgFABIgDgFgAEDnKIAAAAgAERnhQAEgCAEgDIAGgBQAJgCgFAHIgDACgAGon3IABgBIAAgCQgGgGgGABIAAAAIgDgDIAAABIgGgEIAMgFIAKACQAPAEABANIAAACIgCgBIABABIABADIgBAHgAE4ntIgBAAIgBgHQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQADABAKAJgAEOn/IABgCQAHAAAGgFIAEATgAE4n8IgCgBIAAgCIAAgEIAAAAIABgDIAHABIgBABIABAAIADgBIAIABIgCACQgKAGgEAAIgBAAg");
	this.shape_557.setTransform(-11.4,-8.2);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#C8BFBA").s().p("AAAAAIAAAAIAAAAg");
	this.shape_558.setTransform(44.6,-59.4);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFF99").s().p("ADiC9IgEADIgaAJgABtDCIgGgCIAXgMIAVgVIABAAIAPgSIAKgOIAJAGIgkA5IgEACIgeADIgDgBgAEQCHIAFADIgFAJgACMA8IAGAGIgJAKQACgHABgJgADMA8IAFgSIAAAAIACALIAAABIAAAIgADFAIIAHADIgHAUgADaAdIADgRIgCARgACpAQQAGgEgDgIIADgCQADAFACAGIgCABIgDAHgAjwgOIAAgBIgDgJIgDgbIADgBQAEAOABATIAAAGIgCAAIAAgBgAkUgWIAEgRIAHACIAAAMIgLAHgACfgiIABgFIADADIABACIABABgACOg8IgUgSIADgDIARAPIAAAGgAiXhVIAAgBIAIAEIgBAAIgGACQgDAAACgFgADFhoIAAAAIgBAAIACgEIAKAIIgEABQgDgDgEgCgAhih/IAMgEIAAABIgIAHgAi3icIgCgEIASgJIgPANIgBAAgAhajIIAFAFIgEAAg");
	this.shape_559.setTransform(12.1,-46.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#AB9E96").s().p("AAVAIIgqgNIAAgCQAVAGAWAJIAAAAIgBAAg");
	this.shape_560.setTransform(40.5,-63.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#635248").s().p("AgVgHIAqANIABADg");
	this.shape_561.setTransform(40.5,-63.3);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#9B8276").s().p("AADAFIgKgGIgBgDIABAAIAQAJg");
	this.shape_562.setTransform(43.6,-62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.1,-74.1,312.3,142.6);


(lib.bk3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9933","#980189"],[0.008,1],53.8,-17.5,53.8,22.4).s().p("AhRChQgKgEgIgCIgIgBIALgFQAQgIAIgHQAkgjAAgGIAAgCIgGAAQgMAAgUAIIgTAIIAAAAQA6hRAAgOIAAgCIgDgBQgIAAgaAQIglAYIAAAAQAEgLAIgmQAJgkAAgIQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQgeAggaAVQgOgogHgdIgEgQQAGAIAJAIIAFAEQAQAMALAAQAEAAAAgLIgBgFQgDgeAAgLQgBgRAFgKQAKgXAEgLQAHAmAaAmIASAaQAiAxAFAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAIABgDQgEgNgBgMIAAgUIAAgFQgBgYAEgOIADgPQACAOATAsIACAFIALAiQAFATAHAJQARgSAsgvQgQAugUAuQAAABAAABQABAAAAABQAAAAABAAQABABAAAAQAKgNAcgUIAugcIABACQAAAJgTAnIgHANQgEAIgEAEQgfASAAAGIABACIADABQANAAAggQQAbgNAOgKIAAAAQgTAfgkAfIgfAXIAAACQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIAqgPIAAABQgCAKgbANQgZALgUAEIgDABIgTAGQgnAMgIAAQg0AAgSgGg");
	this.shape.setTransform(116.2,175.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#6A6A6A"],[0,1],125.1,-9.1,125.1,2.7).s().p("AhKAvIgNgEIAAgBIANgBQAPgFAZgMIASgJIAMgHQAKgHAGgFQAMgNAhgUQASgMAFgFQAJAHgBAWQAAAIgEAZIgBAHIgBAGIgBAGIgBAAIgDAAIAAACIABACQgGAHgRAIQgWAJgMAAQg9AAgigIg");
	this.shape_1.setTransform(50,189.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9933","#660033"],[0.008,1],76.2,-16.3,76.2,23.6).s().p("AA4CnIgBAAIAGgGQAQgVAAgJIgCgCQgQAKgSAAIAAgIIADgMQAAgEgEAAQgHAAgVALIgYAMIAAgCQAIgRAAgFIAAgCIgDAAIhGAeQAEgKAAgIQABgKgEAAIgYAbQgNAMgXAGIgFABIgIACIAAgCIAAgBQABgFACgCQALgNAAgNQABgFgGgCQgVgHgFADIgBABIgDgEQgBgCABgIIgBgEQAKgCAIgGQAHgGABgGIAAgBIACgWQAAgLgNgeIgNgaIADgBQAYAGAIANIAGAMQACAIAEADIACAAIAAgKQAAgfgUgoQgPgcgZgeIAAgBQArAbAaAgQAWAcAJAeIADgCIAAgvIgBgJQgFgXgOghQgWgrgIgVQBJBNATArQAGAPAAALIgCAKQgDAJAAAHQAAABADADQAKgLAAgIQAAgHAIgeIAEgQIANgyQABAWANAsIACAHQANAtAAAaQAAAGgEAJQgDAKAAAEQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQAqgaA5g2QgFAKgCAOIgEAaQgKAkgOAPQAAABAAAAQAAABAAAAQAAABABAAQABAAAAAAIAlgaQAagTAYgJQgIASgdAqQgaAmAAACIAAADIADAAIAVgKQAYgLAMgCIAAABQgOATgVAQQgJAHgTAJIgBAAIgLAFIgJABIAAABIAAABQgNAEgJAAQgLAAgFgGg");
	this.shape_2.setTransform(93.7,174.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#919191"],[0,1],120.9,-8.1,120.9,3.7).s().p("AiRAtQgKgHgBgIIAAgFIgBgEIAFgEQAPgKAVgIQAUgKAagKQBBgaAhAAIACACIgZAOQgZAQgMAPQgGAIgPAJIgMAIIgMAFQgXALgQAEQgJACgHAAQgCgGgCAAQgBAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIAAAEIgGgDgAAzAqIgJgEIAFgNIACgHQABgPABgRIAPgMQAQgJAbAAQASAAAPAUQAMAPAEASIAAAHIAAACQAAAGgIAGQgNAIgVAAQgLAAg2gFg");
	this.shape_3.setTransform(54.2,188.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],997.2,-60.1,997.2,5.8).s().p("AgBAIIAAgPIADAGIAAABIgCAHIAAAAIAAABg");
	this.shape_4.setTransform(67.6,138.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#67E473","#015C13"],[0.008,1],328.6,-53.2,328.6,53.4).s().p("AgVgPIAAgKIAMAAQAGgDAMgMQAIAAAFAKIAABFIgrACg");
	this.shape_5.setTransform(40.2,150.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#67E473","#015C13"],[0.008,1],26.3,-24.1,26.3,82.5).s().p("AjnA4QAbgTApAAQgVgOgtAHQg0ALgUADQATgaAmgRQAogPAgAGIABgEIAEgBQgggVABgNQASgBAPALIAZASQAOgWA0gOQgDAHgLAKQgJAJgDAHIAugNQAjgIATAKIglAJQgVAHgJAMQAmgDAdAKQAcALAKAWQgpgTgrACQAJAKAVAUQARATACAQQgqg2grANQAnAaAGArIgbgZQgSgPgQABQAIAJgGAAQgJgGgegBQgGACgNAIQgMAHgEAAQACgHAJgIQAKgIACgFQgdgCgiAVIgbASQgQAKgNAEQAFglAegVgADDALQgLACgGAPQgHARgFAEQgCgLAFgQQAEgQgCgHQgFgRgagHQgigHgPgEQApgNAbAJQgHgGgbgNQgVgLgKgKQAcgGAxAZQgLgQgPgiQAOgCAQALIAVAWIADgSQACgLAHgEQABAHACAKIACANQAfgQALgCQgCAHgKAGQgMAHgBADQA7ADANAeQgNADgPgBQgPgBgJgGIAYAfQAQATAAAVQgLACgMgMQgSgPgDgBIANAqQAIAhgRALQgDgGgIgcQgGgWgLgHIgOAkQgJAVgMAIIAIhIg");
	this.shape_6.setTransform(80.8,115.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF9933","#660033"],[0.008,1],197.4,-32.1,197.4,7.8).s().p("AhlAJIAAgCIAIgFIADACQAIAEAFAAQANAAAHgHIACAAIAFAIQAEAEAFAAQAGAAAJgEIAMgIIAagTIABABQgGAJAAAFIAAADIADAAQBFgPAYgPQgMAPgQAKIgUAGIgFACIgNAGQgJAFAAADIAAABIACAGIgEABQgYAGgtgBQgKAAgwgVg");
	this.shape_7.setTransform(305.7,190.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#67E473","#015C13"],[0.008,1],96.6,-70.2,96.6,36.4).s().p("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");
	this.shape_8.setTransform(409.7,167.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#67E473","#015C13"],[0.008,1],353.6,-31.2,353.6,8.7).s().p("AghA1IgHgFIgDgEIgDgCIgBAAIgCABQgBABAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgFAAQgBgBAAgIIAAgJQABgHAGgBIgEgDIgDgCQgDgCAAgFQAAgJAJgCIAGgCQAFgBAAgDQgBgFACgDQACgDAGgDIAIgFIAHgHIAIgHIAHAAIABAAIAAABIABAAIABAAIACgBQACgCAFAAIAAgBIABAAIACABQAWgIASAAIAABZIABAAQAJAAAAADQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgFAAIgGAAIgJAAIABACIgVAAQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAIgBABIAAACIgDAAIgGgBIgCAAIAAABIgCAAIgDgDIgGAAIgHADQgGABgLAAIgCAAg");
	this.shape_9.setTransform(244.2,189.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#ADFC36","#BB9500"],[0.008,1],-50.1,-6.8,-50.1,8.4).s().p("AhhBaIgFgDQgNgKgGgOQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAFANAQIAEAEIgeABIgEgCIgNAAIgDAAIgDgDIgMgPIAAgBQgHgKgDgBQgRgZgGgbQAIAMANAMQAPANAIAAIADgBIABgDIgOgnQgHgSgBgUQAJAQAEAFQAPATAHAAIACAAIAAgLIgBgOIAAAAQAVAUAEAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIgBgQQAAgKAGAAIgEADIACABIAEgBIAEAMQABADAGAEQAGAGADAAQAIAAADgnIAAAAIAEAJQADAGAIAAQAGAAAMgOIAVgbIAAAAIgBASQABALAHAAQACAAAZgcQAZgbAFgHQgCANgFAVQgGASAAANQABAIABADQAGgIAjgWIAAAGIgJAeQgGAPAAAKIAAAIQACAHAKAAQAIAAARgMQASgMALgSIAAAAQgKAfAAAFIAAAFQABAEADAAQAFAAAPgNQARgOALgCIAAAHQgDAJgDASQgFANgBAPQAAAAABAAQAAABAAAAQAAABAAAAQABAAAAAAIABgBQACgIAOgHIARgFIAQgEIACACQgPAIABANQgOABgDAHQgBABAAAJIAAAGIACADIgNgBIgBABIgBACQgCADgOAAQgJAAgEgFQgEgGgBAAQgDAEgEACQgIADgGAAQgFAAgCgDIAAgHIgBgBIgJAIQgGADgDAAQgPAAgBgCQAAAAAAgBQAAAAgBAAQAAAAgBAAQgBAAgBAAQgUAGgMABQgDAAABgGIAAgBQgBgFgDAAIgIAFQgIADgFAAQgGAAgCgDIAAgCQAAgHgBgCQgEAIgNAAQgHAAgDgPIgCAAQgCAAgEAJQgEAHgFACIgEABIgDgBQgDgCgDgFIgGgHIgCABQgBACAFALIAEAHQgBAEgGAAQgKABgOgJg");
	this.shape_10.setTransform(220.2,182.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FEDD92","#D2A679"],[0,1],1026.9,-112,1037.9,-7.2).s().p("ApdAGIACAAIAAABIgCgBgAm1gFIABABIAAABgAJdgFIABgBIAAABg");
	this.shape_11.setTransform(101.6,193.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#C25812","#FF9933"],[0,1],-3.5,16.1,-8.2,-1.5).s().p("AhFBQIgJgLIgKgIQgTgNgMgLQgJgKgCgPIgDgWQAEAHARAJQASAMALAAIACgBIAAgDQgCgJgIgQQgHgQAAgPQAAgLAEgDQAEAGADANQAGASALAAQAIAAAEgZQABAGADAHQAGAMAHAAQAMAAAXhAIAGAuIAAALIABABIATgUIALgTIABAAIAAAtIgFAPIACACQArgbANgcIAAABIgLAhQgFATgIANQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAKgHAZgNQARgLAFgHIgUAhQgJAQgZAWIACADQAXgMArgYQgMAPgXAUQgSAQgMAGQgHADgFAAIgDgDQgEgCgEAAQgEAAgHACIgSAHIgfAHIAAAAIALgOQAMgSAAgJIgBgEIgCAAIgKAUIgJALQgJALgGAAQgDgKgGAAQgQAOgCAAQgLAAgDgEg");
	this.shape_12.setTransform(163.8,184.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#67E473","#015C13"],[0.008,1],28,-88.1,28,18.5).s().p("ANtCMIAAgBIABABgANNCMIACgCIAAACgAMFCMIABgBIAAABgALcCMIAGgDIABABIAAACgALCCMQADgEADgIIACAHQADADAEACgAF9CMQAFgEAUgBQAkgBAAgNIgBgFIAIAAIAAACIABAFQAAABAAABQAAAAAAABQAAAAABAAQAAAAAAgBIAEAEQAGAEAKAAIAEgBIAdAAIABABIAnAAIAGAAQAUgBAHgDIAGAHIAEAEgAC0CMQAFgGADgGIAAAAIAAAAQgBAEgGAIgABZCMIAGgHIAHAHgAizCMIAHgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABgAjmCMIAKgDIAJgEIAEgBIgBABIAAABIACAFIAAABgAnkCMIARgBIACABgAqOCKIABAAIABABIgCgBgAm9BwIAAgBIAAACgAEPBpIAAgBIAAABgApPBhIAAAAIABABgAiaBeIABAAIAAABgAECBIIAAABIgBABgAttBCIAEAAIgDACgAJcAxIACAAIAAABIgCgBgAmNAhIAAAAIAAAAgANpAhIAAgBIAAABgAESAMIAAgBIAAABgADcAEIAAAAIABAAgAq0iKIAAAAIAAAAIAAAAg");
	this.shape_13.setTransform(144.9,177.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#67E473","#015C13"],[0.008,1],46.4,-16.2,46.4,23.7).s().p("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gEgagQAAQgLAAgHAHIgEgGQgEgEgKAAQgJAAgGAEIgHAFIgJgGQgDgCgHAAQgTAAAAAZIgIAAQgBgIgSgLQAGgJAAgLQAAgJgCgCQgFgIgSgCQAGgIAAgFQgBgLgGgDIAAgNIADgJQAFgOAPABQAIAAAEAGQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgXIgBgJQAAgIAMAAQAMgCAAgGQgEgPAAgGIABgFQADgFAOABQAVAAAIALQACAEADAIIABgBQABgBABgKQAEgLARAAQALAAADAIQAEAGADAAIAUgKQAFAAAJATQAIASADAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAMAKAAAFIgBAGQAAADAXADQAXAEAAAQIgBAJQgDANgJARQAgAPAAAHQAAABgHAGQgGAFAAAEQAAAEAOAFQAOAHAAAJQAAADgDAEQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgHAAgBAKIAAAQQgYgTgDgJQgLgbgCAAIgCAAIAAAFIAKAbQAFAFABAIIABANIAAACIgCAAQgNgLgMgUQgKgRgBAAIgCABIAAADQADAZAVA/QgTgJgQgTIgMgSIgCABIAAAFQAFAZALAVQACAFAHAJQAAADACADIAFAFIgBABIgLACIgLADgAi3A9IAAAAIABAAgAnTgMQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIABABIgDABgABIgPIABAAIABACIAAABg");
	this.shape_14.setTransform(123.5,174.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#ADFC36","#BB9500"],[0.008,1],177.5,19.9,172.4,2.3).s().p("Ag0BwIAQgFIAPgIIAPgJQAVgRABgLQAAgBAAAAQgBgBAAgBQgBAAAAAAQgBAAgBAAIgmASIg0AOIAAgBQAEgIABgGQABgHgFAAQgcAVgOAJQgLAHgFAAQgDAAgEgHQgEgHgDAAQgCAAgGAEQgCACgEABIgLABIgCgBIgGgCIAagPQAAgEgHAAQAFgDAAgFQgCgKgKgFIABgQQgBgPgCgHQgIgOgEgQQAIAFAFAIQAFAMACACQAGgLAAgUQAAgJgFgbIgGgfIAaAiQAXAeAGAQIADgBQgDgZAVgkIASgfIAJgPIAHgOIABAAIAAARQgDAHAAATIADAfIAAARQAAAKADAGIACgBQAGgTAvgbIBQgtIABABIg2BZQAAABAAAAQABABAAAAQAAABABAAQABAAAAABQAsgWAhgHQA1gLATgGIg8AkQguAbAAADQAAABAAAAQAAABABAAQAAABAAAAQABAAABABQAKgEAqgEIA5gJIAAABQh8BEAAAFIADADQANgGAWgDIAqgFIAAABQgVAeggAPIgGADIACADIACAAIAQgGIAtgPIAAAAQgIADgGAGIgGAGIgHAFIgEADQgWALg3AAIgFgDIgEgBQgzANgVAAQgXAAANgPg");
	this.shape_15.setTransform(315.1,180.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#67E473","#015C13"],[0.008,1],217.5,-90.3,217.5,16.3).s().p("AGCB1IABgBIABABgABtBuIACgCIAAACgAC2BlIABAAIAAAAIgBAAgAGZBeIABAAIgBABgAC0BZIABgBIAAACgAnAA5IAAgBIAAABgAHBAAIABAAIgCAAgAF0gqIAGAAIgGABgAFXhkIAAAAIAAAAgADKh0IAAAAIAAAAg");
	this.shape_16.setTransform(288.8,179.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#67E473","#015C13"],[0.008,1],-71.5,-68.8,-71.5,37.8).s().p("AAAAFIAAgLIAAAAIAAAMIAAABg");
	this.shape_17.setTransform(351.6,157.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#67E473","#015C13"],[0.008,1],175.2,-18.3,175.2,21.6).s().p("AsLC0IAAgBIAFAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQAAgDgJAAIgBAAIAAhcIADAAQALAAAAADQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAgBAAIAEgJQAGgHALAAIAIADQAFADAEAAIAEgCQALgHAEAIIADACQABAAAFgGIABgIQgEgLAAgFIABgGIAUAAIAHAEQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgFQgEgIADgHQAFgNAdAAIAFADQAEAAAFgIQAGgJAHAAQAEAAAHAJQAHAHAEAAQABAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAQgCgIABgGQACgKARABQADgBALAJQAKAJADAAQACAAABgEIADgHQAFgMAVAAQAHAAAPAXIgBAGQAegHAHASQgBAEgEAMIAAAEIAGAAIAQgDQgDAFgEAGQgEAEAAAFQAAADADACQAGAIAFAAQACgBAEgEQAIgIAMAJQACADACAEQABADADABQAbgFANAGQAHAFAAAFQAAADgGAHQAAAAAAABQABAAAAABQAAAAABABQABAAAAAAQAFgDATAAQARAAALAFQAIAFAAAFQAAAHggAVIgCACIgNAHQgaAOgSAAQgNAAAAgDQgBgEgDAAQgBAAgEAHQgFAFgEABQgOgJgEAAQgCAAgCADQgDAEgIgBQgDABgFgFQgFgFgCAAIgDAAQAFANgfAAIgEgHQgBABgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAACQgBACgUAAQgGAAgFgGIgGgGIgDAAIABAIQgCAFgRAAQgFAAgCgFQgCgDgCAAIgFAEQgGAFgUAAQgJAAgLgIIgJgIIgEABQAAADAEAGQgBAGgUAAQgDAAgFgEIgHgEQgCABgCAFQgFAFgTAAIgYgKQgaAPgQADgAEXCmIgggFQgFgIgEgDIgCgBIgDgCIAAAAIgEgDIgDADQgIADgXAFQgfAHgQAAQgrAAgKgIQgBgFgDgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAIgHACIgGACQgKADgSAAQgYABgMgEIgDgCIgHgDIAAABIABgBIAGgEIAhgYIgBgCIgDgBQgmAPgKAAIAUgTQARgRAAgDIAAgBIgDgBIhAAJIB4hKIgDgCQhgANgNADQBpg5AAgLIAAgBIgDgBIhOAVIgGAAIAAgDQgCgEAAgGIABgIQAEgJARAAQARAAAJAFIAIADQAAAAABgBQABAAAAAAQAAAAABAAQAAgBAAAAQgBgVASgOIAIgGIANABQAKACACgKIABgLQAAgUARAAIALABQADgYANgMQAPgOAbAAQASAAANAIIANAJQABAAAFgHIAHgMIABABIAAAAIACgBIAHgFQAEgEAPgDIAeAAQASADAKAOQAJANAFgBIAYgHQAcgIASABIAMAAIALAQQAGAKAHAEIBWABIA+AHQAKABAFAHIAFALQAHATANAYQAbAAASAGQARAHADAJQAGAXAAAJQAAALAKAGIAXAKQAFAFAGALQAGALAAAGIAAAYQAEALAYgEIADAFIABAGQAAAXgjAKQgIAFgLAFQgWAJgpAAQgCAAgEgCQgDgDgDgBIgcAIQgbAJgMACIgJgIQgFgDgHAAIgJACQgJACgCACQgKABgMAEQgLADgRACIg1AHIgfAAIgKABQgJgBgJgFIgKgFIgZAGQgWAGgNAAQgGAAgdgFgAlECSIABgBIABACIgCgBgAA6AcIABAAIgBABg");
	this.shape_18.setTransform(327.8,176.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#67E473","#015C13"],[0.008,1],85.4,-60.1,85.4,46.5).s().p("AGcEqQAKgjAAgQIAAgIIgDAAQgJAAgSAOIgVARIgBAAIAAgHQAMggAAgSQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgeA8ggAAQgEAAAAgKQAAgKAIgXQAIgYAAgFIgBgGIgDAAQgLAAgdAZIAAgIQACgMAGgWQAFgQAAgPQAAgEgCgCIgbAiQgWAXgLAMQgEgGAAgMQABgMgCgFQggAvgKAAQgHAAgDgJQgDgKgBAAQgDAAgDARQgEAVgDAFQgJgHgDgIIgEgJIACgCQACgEAAgDQAAgNgOgGQgOgFAAgBQAAgBAHgHQAGgGAAgEQAAgKgfgOIAAAAQAJgPADgNIAAgJQAAgagtAAIABgHQgIgUgKAAQgEAAgHgQQgIgRgHAAQgGAAgFAEIgJAFIgFgIQgEgFgKAAQgVgBgEAOQgKgOgXAAQgVAAAAANQAAAJAEANIgNADQgMADAAAJIACAMIAAAOQgFgDgFAAQgYAAgCAbIAAAEIAAAGIgFAAIgFAAIgEgKQgNgbgcABQgVAAgUAVIgBAAQgIgggjAAQgVAAACAMIgGgDQgFgDgMAAQgLAAgEADQgHAEgBASQgEgIgHAAQgGAAgHAMIgBACIgHAMQgCgEgDgDQgEgEgIgBIgGAAIgJAAIgBAAIABABIgBAAQgIAIgBAAQgMgHgLAAQgKAAgIAHQgGAEgCAFIAAAJQgRABgKADQgsAPAAAVQAAAIACAGIAEAOQgXAHgJALIgKASIgEgDQgCgBgPAAQgQgBgGACQAbgeABgKIgCgCIgCgBQg7AmgbAIIAAAAIAAgBQATgIAIgOIALgYQAQgXAAgYQAAgGgDgDIhLA0IAAgBIAPgrIALgkIABgIQABgIgEgBIgCACIgJAPQgPAYglAiIgTg6QgVg/gHABQAAgBAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAIAAgBIABgIQAAgOgDAAIgDACIgGA7IgBAYQgBAUACAOIgBAAQgUgVgJgNIgCgEQgOgagIgMQgJgMgKghIgJgcQgFAAgLAjQgJAiAAAEIADAqIABADIgBAHIgRgKQgMgHgEgEIgPgYIgDABIAAARIAEARIAKAnQAJAfAFADQgVASgTALIAAgBQAFgMABgKQgBgNgQhCIgBgFQgIg7gGgZQgIARgJAlQgFAUgFAPIgHASIgHgSIgIgUQgKgXgMgOQgRgVgYgZIgUgTQgIgIgCAAIgDAAIADAIIAeBDQAOAfAEAYQACAKAAAKIAAAJIgVgdQgJgNgJgHQg3gzgLAAIgDABQADAFAkA+IACADQAVAkACAZQgEgJgGgGQgNgMgTAAIgFAAIgBAEIANAeQANAeAAALIABAQQgEgFgJgEQgQgKgCgLQgFgigaAAIgNABQAAgFgFgIQgFgIgFAAQgEAAgQAMIgTANIAAgBQAFgGAAgGQAAgJgDgHQgHgQgSgBQgJAAgEACQgFACgKABQgCgBABgFIAAgKQgBgGgHgDQgLgEgYADQAFgIgOgKQgQgMgXgBQABgPgCgKQgEgTgQAAIgVAGQAGgNAAgGQAAgGgFgFQgEgHgGgCQgHgEgKAAIgXAGIgDAAQgGgGgLgEIgHgFIgSgGIgEgBIAAhEIAEAAIAAA6IAtgCIAAhHIABAFIAEALQABADACAAIAEgDIAUgTQAIAAALAUIAGAKQACABAJgLIAHgKIAOAKIARANIAFgLIABgCQAEgJACAAQAIAAALAKIAGAGIAFAGIgBgFIAAgBIgBgCIgBgEIgFgKQgIgQACgNQAEgFAMADIAJABIAAAAQAEAAAEADIAAAAIACABIADgBIADABQAFACADgBIgGgMQgFgHACgJIAFgCQADgCAEAAQAGgCAFAFQAFAFAFABQAAgIACgHIADgHIAFgFQADgFAEgBIALgDIADABIAFACIADAAIAAAAQAGgDALgLQAJgJAJgDQALAIgHARIgGAMQgDAJABABQAHgBAKgIIADgCIADgCIAGAAIACACIAFAEIAFAEIAAAEQAAANAFACIAGgLQADgJADgDIAAAAQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIACAAIAGADIAKAGQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIABgBIAEACQgFgMAAgIQABgGACgFQANgFAOAFIAPAIIAHAEIACgFQAHgVAYgOIADAQQACALAGABQAGABALgLQAMgMAJgBQAEAEgEAGQgDAHADACQAEgBAJgHQAHgGAKACQAEABACAIIAAABQACAFADABIADAAQgDgIADgJQAEgJAHgCQAGACAJAFQAJAHAHABQgDgIABgIQABgHAIgBIAMANQAHAIAHADQAEgNAMgEQAMAFAQAVQAFgJAOAAQAIACAGALIABAEIAIAPQAHABAGgIQAGgHAHAAQADAOASAKQAPgSAJgGIAEgCIACACIAHANQAGAJAIACQAFgBAFgFQAEgHAFAAQAAAKAJAHQALACAKgDIAOgJIAIgOQANgTAUgOQAbgUAhgDQgbARgMAKQgRAOgHASIgDAHIASgGIAZgKQAagKAWAFQgFADgfALIgHADQgSAHgHAJIAjAAQAZAAALAEQAEgJARABQANAAAKAGQABgHAFgEQAGgDAJABQAIABAIADIAMAHIACgGQALgVAigKQANAIADAFQAIgFARgGIABABIABAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQADgBANAAQAJgBAGAIQAGAIAFAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIgBgDIABgCIgBAAIgFgPIgGgUQAHACAMAFQALAHAHABQAAgZgYgVIgSgQQgKgIgEgIQAOgBAVAEIACgCIAGAEIAAAAIABABIAIAHIALAKIABAAQAHAIAGAEQABgQgLgQQgNgVgCgIQADgBAEABQABACAJABIACABIACABIgDAAQAMADAJATQAJAUAIAFIAMgdQAGgRAIgKQABAPgHASQgIASAAAFQAHgCASgRQAQgQAPgDQgIALgPAMIgYAUQAGAAAZgFQAXgGALAEQgIAGgVAGQgVAGgIAFQAFAEARgDQAQgEAEAHQgQAHgcAFQAAAGALABQAKACgBAHQABAFgEADQgFADgBABQAEAEAFAAIAMgBQAEAEAGAQIAEAIQADAHAEACQgDgHAFgCQABgCAEAAIAHABQAHACAEAHIAIAUQAHgGAJADIATAFQgEgPAUgFQALgCAbgEQAAAEAEADIgFAHQgDAEAEAEQAFgBAIgIQAIgGAHAAQAHABAJALQAJAMAFACQgDgIACgKQACgKAIAAQAIABAJAJQADgNAGABIACAGIABAAIACAGQADAIAEADQAFgRAUACQAPABAQAKIASgUQAFgCAGgBIAFAAIADAAIAVAGIAAABQAEACADAEQADgGAEgDQAJgKATAEQANADAHAHQAFAHABAKQABgJACgGQADgFADgEQADACACAFIADADQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIABAAIACgGQACgFACgBQAFACAEALQADALAEACQADgGAOACQABABACAJQACAGAEACQAOgMAcAAQANABAWADIACAAIgBAAIAAABIgBABIAAABIACAAIAEgBQABABAJAAIADAAQAMAAADgCIACgDIABgCIABAAIAAAAIAEACQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIABAAIAAAAIADgIIAGgSQAEgRAKgEQABAKgFAKQgFAKAAAIQAGgCAJgIQAIgHAHgCQAFAJgJAOQgKAOAHAHQAFgBAEgDQAGgBAFAAQAJAAADAIIADAHIgCACIgJAQIAPgPIAHgIQAOgMANAFQAEABAFALQAFAJAGAAQgDgBAEgGQAEgFAFAAQAJAAAMAJQANAKADAAQACgLAQAGQANAEAFAIIABACIADgCQAGgEALACIAMACIALACIgBgCQgCgKgMgYQgNgYAAgMQAKAEAOANQAQANAIAFQAAgOAFgOQAHgPADgIQAFAEAFARQAGAQAHAEQAagbAVgKQgFAKgOARQgOAQgFALIAggKQAYgIAOAEIgZAOQgOAIgHAIQAEACAWAAQAUABAHAEIgRAFIgNACQAEAFAIAGIALAFQANAHAIAAQABADgCAGQgCAEAGgBIATgGQAPgFAKAHQABAHgIAFQgIAFgBAGIAUgGQAJgDANAIIAAACQh+AHhwAkQBvACBvgQIA5gIIgBgDQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQB+gQCEACQCPACCIgFIkegFQAAgSAJgDQAGABAGAHQAGAHAFACQAAgPAGgGIABgBIADgCIAEACIAAABIACADQADADAFAAQAFgVAOgFQAGAEAKAJQAGgJAJgCIANASQAHgFAGAGIAKAKIAJgBIAIgCIAEADQAEADADAAQABAAACgFQACgHAJABQAEAAAJAFQAIAFADAAIALgEQAMgFALAAQALAAAFAGQAGAEACAAIAKgDQAKgFAHAAQAIAAAEAGIAFAGIAAAAIABgBIABABIAPgHIACgBIAAARIgCAAIAAAKQgJAKgHAOQgGgGgGgDQgKgGgMAAQghAAgUARIgDACQgLAKgDAMIgTAPQgRAOAFAOQgZAFgLAJIgGAGQgFAQgEAGIgHgCQgHgCgQAAQgXAAgFAKQgCADAAAJIAAAJQAAAFACACIgSAEQgUAEgaANIgBAAIABgBQAmg+ALgUIAEgJQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBgBAAIgTAMIg4AgQg1AdgQAPIgCgvIACgrQAAgQgDgGQgGAJgJAVIgDAGQgIATgFAHQgbAqgCASQg1hHgGAAIgDABIAAAFQAOA2AAAUIAAAQQgjgpgCAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAABQAGARAQAhQADAJACARQAAALACAIQgKgEgPAAIgRABQAEgNgQgGQgEgCgNACQgLABgMgJQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgDIgmgBQAAgFAGgHQAGgJAAgCIgBgEIgEgBQgIAAgCACQgCACgHABIABgCIAEgNQAAgSglgBQgDgdgeAAQgQAAgHALQgEAEgBAHQgQgRgKAAQgQABgEAKQgDAGAAAHIgFgIQgFgHgHAAQgIAAgIAJIgIAJQgeAAgJAHQgGAEAAAJIABAKQgWgEgGAGQgDADABAEQAAAJADAFIAAABIgCAAQgFgBgLAGIgGAEQgOgFgEAAQgIAAgHAFQgFADgCAEIgPAAQgaABgRAFIgEADIgBAAIgDABIgDABIgCAAIABgDIgCgEIgEAHIgJAAIgFAHQgFAGgFADQgCgFgCAAQgHAAgTAIQgRAHgEAEgAQVgJQgrAAgrADIADgSQADgOAIgGQAMANAGAEQAAgdAJgGIABAAQAGgBAEABQAEADACAEQAFARACABQAOgUAQgDQABAGgDAFQgDAGAAAFQAFAAAGgFQAFgDAFABQAFACAEAKQAEALAGACQAAgRAJgLQAGAAAHAGIAHAGIAEACQABgYAbADQACACAFAPIABABIABADIAFgDIANgHQALgHALAAQAIAGAGAOQAAABgEAIQgDAFACAEQAFABAFgEQAFgFAEABIAGAJIAFAFIjBgDgAUog0IgDgCIADABIAEAFIgEgEg");
	this.shape_19.setTransform(194.6,157.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FEDD92","#3CCC49"],[0,1],1638.8,-460.5,1698.8,-233.7).s().p("EgoOAK0IAAlEIgFAAIAAtmIABgBIAAAAIADgDIABAAQACAFgCAIQACAIAPAGIAYAMIACAAQAbAHAzAAQAzAAARgOQAHgFAFgJQAVALA3AAQAWAAAOgKQAMgIgBgIQAIANAlgKQAWAAAJgFQAKAIAhAAIBDgFQADgBAFAEQAGAEAHAAQAMgBAEgCIACABQAKAAAIgFQAFgDAKgBIATAAIAHAFQAIAGATABQAIgBASgHIAWABQAHAEADABQAGABAFADQAIAEAlAAQAcAAA7gSIAYAAQAEAEAJAAQAHAAAGgDIACgBIAKAAIACAEQAHAFAdAAQAiAAAFgEQAzAAAZAGQAYAEAJAAQASABgFgDQAcAAAIACQACAAALgHIAKgHIABgBIANAAIAIAHIAFAHQAFAFALABQAGAAAOgPQAEAAADALQANgGAJgKIABAAIgPAPIAAAEIADABIAggIIAlgKQAEgBAEAGQAFAAAJgEQACAEAHAAIALgCQAdAAABADQARAAAAgGIACADIABAAIAAADQAFgBAQAAQAdAAAAgFIABgCIDOAAIAFAFIAAAAIABAAIABABIABAAIAjADIASgBIABAAIAAgDIACABQAMALAPgBQAKAAgBgJIAAgFQADADAHAAQAEAAAFgFIAPAAIAIABIADgBIAHAAIAAADQACAEAJAAQAIAAAPgHIABAAQAAALAIAAQAGAAAWgGQAIgBAHADQANAAAIgHIABAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQADAEAJAAQAHAAAKgIIAAAAQAGAKATgBQAGAAACgCQACgDARAAIgCAHIgBAJIAAABIAAABIABAEQABAFADACIAGAAIADgBIADgCIAEAFQAIAFAJAAQAGAAAIgCIAKgDIACACQACACAEAAIACAAIAVABIAWgCIADAAIAPACQAYgBAegQIAKAEQAKADAIABQARgBAFgIIAIADQAGACAJAAQALAAACgDQABgDABgDIANAGQAKADANAAQAIAAAEgCIAKgEQAEAFANAAQAJAAADgCIAGgGIADAFQAFADAQgBIALAAIABgBQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAJAAQAPABAGgFIAFgFIAHAEQAFACAFABQAEgBAFgCIAGgEIAHAEQAEAEAEAAQAGABACgEIAFgGQADAEAJAAQAbAAAegRQAFAEAOAHQAcANAlAAQAfAAAagHQAKALAWgFIAogLQAUgEAAABIAEADQABABAPAAQAvAAAbgQIACAAQABAFAEACQAJAEAiABQAfAAAJgIQACAKAHACQALAFAqAAQAVAAATgGQAegIAKgCQABAFAHAEIAAgCIACACIAIAHIARACIAyAIQAOAAAVgHIAYgGQACAAAKAGQAJAFAIAAIAKgBIAeAAIA5gGQAngEAZgNIAHAAIAGAHQAHAFANgBQAIAAAzgSQAAAAAAAAQABAAAAABQABAAAAABQABAAAAABQACADAFAAQAoAAAagKQANgFAKgHQAkgIAAgeIAAgHQgDgFgGgFIgVAAQgDgBAAgKIAAgMIAHAAQAFgGAGABQAIACAEgBIA7AAQAEAEAAAEQAEADAegBIADAHQADAFAKAAQAFAAACgDQAcgFAJgPQAFgHAEgMIgCANIgDATIAEABQAOgFAQgOQAVgVAGgDIABAIIgDARIABADIAHABQAOAAANgDIAggHIgCAMIAAAHIAFABIAJgDIAQAAQADADAFAAQAFAAAEgEICuAAIAMgCIAuAAQAUAMAHAAQAEABACgKIABgNIAGAIQAEAHACgBIAEgBQACgDACAAIAEAGQADAFAFAAQAFAAAJgOQAKgOgCgIIAAg/IAMAdQAHAWAAALIgBAIIADAAQAJAAAFgXIAJAYQAFAPAFAAQACAAAGgLQAFgLAAgDQACACACAOQACANAIAAIAJgCIAUgEQACAKAKAAQADAAAKgIIACAEIABABIAAABIAEACIANAAQAUgCALgDQAIgCAKgGIABABQAAAEgCADQgBAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIAAAFQABADAFAAIARgGIAcgHIAcgIIAOgGQAMgGAJgCQAUgEATgBQgCACgEALIgEAJQABAHAFAAIARgGIAdgKIASgGQALgDAOgCIgHATQgEAJgBAJIABADIAEABIAMgEQANgFADgDIAJgBIAFgDIAFAAIgBAKQAAAIAJAAIBDgIIAEAEQAEAEAGAAQAEgBANgFIAOgGQADgCACgHIAEgIQABAKAEANQAGAQAEAAQAHgBAFgHIAFgKIADAIQADAHAEAAQAEAAAGgJIAKgMIAFAGIAJAAIADgDICHgBIgGUJg");
	this.shape_20.setTransform(295.7,241.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],1712.1,-8.2,1712.1,100).s().p("AfPM8QgEgPgEgIIg6AAIgEgTQgCgJgEgGIgVgCIgdAFQAFgRgCgKQgDgUgjAAQgDAAgIAFQgIAEgKABQgDgKgFgGQgKgMgeANQgPAGgHAQQgGAMACAKIgIgEQgDgDgPAAQgGABgIAGQgIAIgEAAIgTAAQgMAFABALIAAAOQgRAAgNAEQgHABgDACIAAgRIgBgBIAAAAIgPgOQgJgGgOgCQgGgEgDgEQgDgDgBgOQgBgNgGgFIg9gCIgEgOQgDgJgMgFIgkgEIgrABIgGAGQgEAEgFAAIgHgLQgFgIgHgDQgIgDgOALQgPAJgDABIgEgBIAAgBIgBgEIgigBQgSAAAAAYIAAADIgBAAIhfABQgKACgSAHIgQAHQgGAAgMgRQgJgMgfASQgaANgDAFQgEADAAALIADAOIACAMIAAAEIgCABQABgHgBAAIglABIgHAFIgEADIgHgDQgGgFgfAAQgJAAgGAIQgFAFAAAGIAAABIgBAAQgVgNg3AAIg2AAIAAgcQgDgJgIgIIgRgPIgnAAIgCABQADgGgBgEQgCgGgVAAIgZACQgDgDgBgIQgBgIgEgCQgYABgBgDQgCgFgBAAQgDgCgEAEQgEAFgDgBIgEgFIgRAAIgZACQgHABgFAFIgEAFIgCAFIgDAEIgCABIgEAFIAAABIgHABIgFAEQgEgKgOAAQgGAAgKAEIgKADQgIgKgRAAQgMAAgKAGQgKADgEAAQgNgKgIAAQgKAAgEAFQgCAFgCAAIgIgGIgBAAIgFgBQgJADgEAAIgjgbIgCgCQgFABgEAEIgIAFIgBgBIgBgBIgBgBIgEgEIgDgBIAAAAIgBgCIgEAAIgEAAQgFAEgFAIIgIAMQgCgFgKgFQgDAEgEAGIgHALIgFgFIgHgGQgDgDgEABQgEABgDAGIgFAHIgCACQAAgEgFgCIgJgDQgBgXgUgCQgPgDgWALQgCgSgUACQgSADgGANIgJgGQgFgEgHABIgDAGIgEAIIgDAFIgCgEIgFgIIgEgGIgBgBQgCgBgDADQgDABgDgBQADgDgCgEIgCgEIgBgDQgHgBgGAEIgGADQgKAHgHABQAAgHgFgEIgFgEQgIgDgKAEIgBADQgDAIgDARQgDgCgFgFQgFgHgGAAQgEAIgEAOIgFAXIgCAAIgDgDIAAABQgQgNgFAAQADgEgBgFQgIgHgPAAQgNAAgNAFQAAgEgCgDQgDgEAAgDQgNAAgLgEIgIgGQACgBAQgDIAIgCQAFgDABgEQgIgEgRgCIgagEQADgDAVgLQAQgJAEgKQgLgCgVAEQgZAFgIAAQAEgHANgQQALgOgCgMQgPADgQAOQgSARgKAEIgIgZQgGgNgJgEIgJAaQgFAQgFAJQgZgWgWgLQACAQANAZQAHAOADAJIgEABQgFgFgGgBIAAACIgHgJQgIgLgLACIAOANQAJAJADAHQgKACgVgKQgSgJgOAIQgJgJgMgEQgPgFgJAJQgBgHgIgEIgEgCIgEgCIgMgDIgDACQgEABgBgDIgBgBIAAgBIgKAPQgCgOgPAAIgHAAIABgCIgGAAIgCADIgDgBIABgCIAEgKIABgDQAIgNgGgJQgIgDgHAHQgHAFgEgCIAEgNIABgIIAAgDIAAgEIAAAAQgOABgGAPIgGARIgBAEIAAABIgCACIAAAAIgBABIAAABIAAgBQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIgCABIgBACIgDAAIAAABQgEAEgTAAIAAgCIACgCIgFgBIAAgCIgEAFQgNgIgYAAQgLABgJABQgQACgLAGQgCgGgGgHIgCgDIgKAAQgFABgBACIgBgEQgLgTgHgDQgBAJgGACQgEgIgKgBQgBAJgGAFQgHgRgWAAQgSAAgOALIgCABIgBgBQgOgMgVAFIgHADQgPAFgHAMIgYgLIgDAEQgDAEgKAAIgGAAIgIADIgBgEIgDgBIgBAAIgCgHIAAgDIgCgEQgKACgCAKQgIgIgGgBQgPAGABARQgHgMgUgEQgZgFgGgFQgGACgLABIgSABQgUACgBASQgQABgSgRQgGgGgFgDQgLgGgKADQgDgIgNgSQgLgOgDgMIAhgJQABgEgEgCQgBgBAAAAQgBgBAAAAQAAgBABAAQAAAAABgBIAYAEIgEgEQgagCgHgCIATgIQANgFADgJQgJgEgPADQgSAEgKgDQADgGAQgMQAOgLAAgIQgQgCgPAMQgRAOgDAAQAEgTABgIQABgPgJgHQgFAHgIAXQgIATgHAJIgNgYQgGgKgHgCIAAgDQgDgGgLABIgDAAIgPgDQACAJAMAQQAKAOABAOIgNgLQgDgEgEgEIgHgFQgEgFgBAAIgIgHIgCABIgCACQAGAEAEACIAAABIgGgBQgJAAAAADIgLgCIgIACIgCgDQgGAAgDADQAFAHAMAJIAUARQAWAUgBAVQgWgMgPgCQADAGAEATIgDAAQgDgDgMAAQgLAAgFACQgHgDgIADQgGABgKAIQgPgPgWAMQgTAJgKARIgSgGQgLgEgKABQgFADgDAEIgEAFQgPgGgaAEQgcAEgSgFQAFgDAOgFIAPgGQAVgHAIgJQgngIg4AWQAdgjAygZQgggGgmASQgjASgVAZIgDAHIgJAMQgJALgOgEQgHgLAAgKQgHAAgGAIQgHAHgFABQgGgCgFgMIgCgDQgFgIgGAAQgFABgGAFIgEAFQgJAKgGACQgGgDgFgPIgDgIQgHAAgGAIQgHAIgGAAIgEgIQgPgfgZAOIgYgVIACgBIgBgBQgQALgNAFQgMgZgSAGQgEACACAJQACAHgCABIgNgHQgHgGgJABQgEABgDAHQgDAHgDABQgEgFgIACIgOADIgGgHQgDgEgFAAQgIAAgLALQgKALgGgBQABgVgPgFQgMAHgXAeQgHgGgLgDQgLgCgJACQgPAEABAMIACAIIgIgGIgCgBIgBAAIgBgBIgBAAIgBgCQBOhwB7hpQABAHgEALQgHANgBAGQAOgCAJgQQAMgXAFgEQAAANgEAWQgDASACAPQAQgGAKgYIASgmQAFAZAEALQAHASAMAHQAPgIgCgbIgGgoQAUAMANAAQAEgTgNgSQgQgUgFgLIAXABQALAAAKgDQgOgegxgKQAOgIACgIQgIgHgNAGIgXAIQgDgXgGgHQgIACgEAJIgFATIgXgQQgQgJgMACQABAJAHAMQAHAPABAGQgXgIgOgDQgYgFgOAGQAPAJAlAaQgwAHgLAFQAOAEAeAGQAaAGAMAKQhYBUgrAsQhFBFgpA/IgFAAIADgGIgBAAIgEACQACgHgBgIIgMgKQgJACgJAIIgOAMIgBgEIABAAIAAAAIAAgBIABAAIAAgBIACgCIAAgBIABgEIAAgCIgHgKIACgJIABgCIADgoIADgvIAHghQABgFACgBQAGAAAJADQAJAEAGgBQABgBgDgEQAAgBAAAAQgBgBABAAQAAgBABAAQAAAAABgBQAEAEAKAEQAKAFAEADIANASQAHAKAGgEQAAgUgNgWQgQgUgEgIQATgFASAMQAIAFAPAVQALAPAJgCQgGgSgPgTQgSgVgIgMQAVAAAcAJQAfAMAIABQgrg2g7gFQAjgPAjgBQgMgOgkAAQgggBgXAIQACgEAJgIQAHgGABgHQg6AFgaAfQgJgMgTgIQgTgIgQABQAKAQANATIgoAHQgYAEgNAHQgRAJgMANQgOAPgBAPQAHgBArgLQAfgHAVAEQghAJgSAVQgWAZAKAgQAPgGAigXQAdgTAXgFIgLAQQgGALAHAIQAGgDALgIQAJgIAJgBIgKBTQgFAogHAbIgBAAIgFAFIAAACIADAAIgCAEQgMAIAAAHQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIgBACIgDAHQgFgGgNACQgLABgEAGQgBADAGAMQACAGgDACQgGgEgEAAIgCAAIAAABIgPgBQgMgCgFAGQACATAIAPQgLgJgIABQgHAAgEANIgDAIIgHgIQgPgPgIAAIgLAOIgGAGIgDgGQgNgYgJABQgHgBgSAWQgCgQgFgHQgGgFgIAAQgOAKgRAGIAAnRIACAAIAAv+MBQcAAAIABYHIgFAAIAAACIgCgBQgEABgVAJIgVAKQgHAAgFgDQgFgEgDAAQgVAAgNAVQgKAQAAAMIgMgKQgKgHgJAAQgfApgRASIgIgQQgEgKgNgEIgaAAIgJAIQgIAGgHAAQACgRgVgMQgUgLgVAFIgOAMIgIgIIgKgIIgvgBQgVAAgJAKQgHAIADAHIgFgIQgCgEgRAAQgKgBgIAJIgJAJQgDABgSAEQgPADgFAEQgJAHgLANQgMAOAAAGIABAEIAAADQgIgFgCgIgAooJQIgCAJIADAEIAAgPIgBACgAw8IiIAGABIgCgBIAAgBIgEABgA5sGaIABAFQAFgFABgCIgHACg");
	this.shape_21.setTransform(295.6,83.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B16A01").s().p("Ag4CBQgFgEgNgCIACgHIAEgGIBHhWIAkglQAqgqBThNQAEAdgjAfIgcAZQgQAOgHALQhEA6g4BaIgFABIgEACIgEAEIgBgEgAiTB1IADABIgLADQAEgDAEgBgAijB2IACgBIAGgJQAFgLADgPIAFgvIAIgsQAEgbgDgOQAPADgCAHIgCALIgBAAQgHAZgEAxIgEA5IgBAFIAAACQgGgBgLAGIgHAFg");
	this.shape_22.setTransform(80.5,128.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("APsCvIAFgCIADALgAPkCuIACABQAFACgDADIgEgGgAMkCRIADAAIgDABIAAgBgALVCKIAAgBIABgBIACgCIgBABIABADIgDAAgAgJBHIgDgGIAEgBIAAABIADAJgADkAzIADgBIABABIABABgAgCgSIACAAIAHACIgBABIgIgDgAvBhKIACAAIgCATIAAgTgAlLhTIAHgCQAAADgGAEgAvvi3IgBAEQgGgDAHgBg");
	this.shape_23.setTransform(164.3,132.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("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KADAAASIgDAAIgEgFIgHgJQgEAAgEAEQgFAEgFgBQgDgEADgFQAEgHAAgCQgFgOgJgFQgLAAgKAGIgNAHIgGADIAAgCIgBgCQgFgPgDgCQgagCgCAXIgDgBIgIgGQgHgGgFgBQgKAMABAQQgHgBgDgLQgFgLgEgCQgGgBgFAEQgFAEgFAAQgBgFAEgGQADgFgBgFQgQACgPAVQgCgCgEgQQgCgFgCgDQgFgBgGABIAAAAQgKAGABAdQgGgEgNgMQgIAFgDAPIgCARIgHAAIAFgWQADgPAFgHQAFAAAFAGQAFAGAEACQACgRAEgJIABgCQAKgFAKAEIADADQAEAEABAIQAHgBAKgHIAFgEQAGgDAHABIABACIADAFQABAEgDADQAEABACgCQADgCADABIABABIAEAGIAFAIIACADIACgEIAEgIIADgGQAHgCAFAEIAJAHQAGgNATgDQATgDACATQAWgLAQACQATACACAXIAIAEQAGABAAAFIABgCIAFgHQAEgGAEgCQADAAAEADIAHAFIAFAGIAHgLQADgHAEgDQAKAFABAFIAJgNQAFgIAFgDIADAAIAFAAIABABIAAAAIACACIAEAEIABABIABABIACABIAHgGQAEgDAFgBIACACIAjAaQAFABAJgDIAFABIAAAAIAJAGQABAAACgFQAEgFAKAAQAIAAAOAKQAEAAAJgEQAKgFAMAAQARAAAIAKIALgDQAJgEAGAAQAOAAAEAKIAFgEIAIgBIAAgCIADgEIACgBIAEgFIABgEIAEgGQAFgEAHgBIAagCIARAAIADAFQADAAAFgEQAEgEACABQACABABAFQABACAZAAQADACABAIQACAIADACIAYgBQAVAAADAGQABAEgDAGIACgBIAmAAIARAPQAIAIADAIIAAAdIA2AAQA3AAAWANIAAAAIAAgBQAAgGAFgGQAHgHAJAAQAeAAAGAEIAIAEIADgDIAHgFIAmgCQABABgBAGIACAAIAAgEIgDgNIgCgNQAAgLADgEQAEgEAZgOQAggRAJAMQAMARAGAAIAQgHQARgHALgCIBfgCIAAABIAAgDQAAgYASAAIAiABIACAEIgBABIAEAAQADAAAPgKQAOgKAIADQAIACAEAJIAHALQAGgBADgDIAGgGIAsgBIAkAEQAMAFADAJIAEANIA8ADQAHAFABAMQABAPACADQADADAGAEQAPADAIAGIAQAOIAAAAIABABIAAARQADgCAHgCQANgDARAAIgBgPQAAgKALgFIAUAAQAEAAAIgIQAHgHAGAAQAQAAADADIAHAEQgCgKAHgNQAHgPAOgGQAegNAKAMQAFAGAEAJQAJAAAIgEQAIgFAEAAQAiAAAEAUQACAKgFARIAdgFIAVABQADAHADAJIAEATIA5AAQAFAHAEAPQACAJAIAFIgBgDIAAgFQAAgFALgOQALgNAJgHQAFgEAPgDQASgEADgBIAKgKQAIgIAKAAQAQAAADAFIAEAIQgDgHAIgIQAJgKAUAAIAwABIAKAIIAHAIIAOgMQAVgFAVALQAUALgCARQAIABAHgGIAJgIIAaAAQAOAEAEAKIAHAQQARgTAggoQAJAAAKAHIAMAJQAAgMAKgPQANgVAVAAQADAAAFADQAFAEAHAAIAUgKQAVgKAEAAIADABIAAgCIAFAAIAMABIAAADQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAIgHgBIgBABIgCAAIAAABIgQAGQgUAIgJAKIgXgJQgRAAgOAPQgKANAAAHQAAAEACAEIADAGQADACgHAAQgGAAgMgJIgOgKQgDAAgVAaQgXAagEAMQgKgFgEgOQgEgMgLgFIgYAAIgFAIQgHAGgMAAQgHAAgGgRQgFgRgQAAIgcAAIgOAOQgDgCgHgIIgJgJIgzAAQgYABABANQABAPgFACQgNgTgBAAQgLAAgQAJQgRAJgFAAQgVAAgSASQgQAQgBAOIgDAHIgBAEQgRgDgCgKIgEgYIg5ACQgEgIgEgKQgFgMABgGQgYAAgRADQgMgFABgQQABgSgMgHIgUAAIgZALQgIAAgGgNQgFgNgHAAQgVAAgLAZQgJASAAASQAAACgFABQgDgGgMgLIgRABQgJAMgFABQgCABgMAAQgVAAgBAOQAAAIADAMIgBADQgFgCgIgHQgQABgHADIgIAFIgBABIAAAAIgCABIgGAAQgBgCABgFIABgKIgCgIQgFgFgEgDQgKgHgZgFQAAABAAAAQgBAAAAAAQAAgBAAgBQAAgBAAgBIAAgDIgBgBQgFgcgDgGIg+gBQABgNgEgHQgHgMgiAAIgwABIgNALQgKAAgFgMQgGgMgDAAQgEAAgRAJIgRAKQgHAAgDgDIAAgDIggAAQgKAGAAAIQABALgCADIgBAAIABAFQAAABAAABQAAAAgBABQAAAAAAAAQAAAAAAAAIgDAAIgFgEQgBgCAAgDIhdAAIgqAVIgXgYQgaAAgTAMQgQAKAAAKIACAOIADANQAAAGgDAHQABACgHAAQgEAAgCgEIgBgFIgeABIgHALQgFgCgEgDQgFgFgDgBIgeAAQgEACgGAHIgHAGQAKAIAFARIAFAQQAEAKALACQA1AHAFAOQAHASABAMIgBANQADAGARAJQAXALAGARIABAKQAMAAAUgEIA6AAQAEABADADIAFAGIAcAAQAEADAAAFQAAADAJAAQAZAAANgQQAGgIACgJIAGgSIAAgKQABgGAKABIAAAJQAAAKgCANIgEAWIAAABQANgDAIgJIANgOIAOgNQAJgJgEgGIADgBIADABIABAVQAAAOgCAHIAAABQAMAAAQgFQARgFARAAIAFABIAAACIgCAGQgCAFABAEIAAABIAQgDIASABIABgBIC1AAIAMgCIArAAQAGABAGAEQAHAEAHACQADgWAFAAQAFAAAEAGIAEAHQAEAAAFgDQAEAAADAEIADAHQALgEADgLQABgLACgFIAAhGQgCgDAAgEQAAgGADgBQALAOAHAZIAMAoIAHgcIADgBQADAAAFATQAHAXAEAGQADgCAEgNQADgLAEAAQAEAAAEARQADARADAAIAKgCQAKgDAIAAQAFAAACAFQACAFADAAQALAAAEgMIAGgRQAEABAAAGIgCAWQAdgBAEgCIAKgDIASgJQAFAAAAAJQAAAGgEADIAAADQAYgJA4gRQBLgWAAAKQAAAEgJATIgBABIAtgOIAwgMIADADIgGASIgGAUQAIABAdgOIAJAAQADABAAAGIAAAJIACABQAIAAA/gHQAFAAAAACQAAAEABABQAegIADgHIADgKQACgJAEAAQADAAAGARIAJAaIAGgLQAGgKADAAQAFAAAGARQACgBAGgKQAEgIAIAAIADACQADADAAACQAHgBAEgCICAgCIAAAEIABADIAEgBIAAgGIAEAAIABADIgDAEIiHACIgEACIgJAAIgFgFIgJALQgHAJgDAAQgFAAgDgHIgDgIIgFAKQgFAIgGAAQgFAAgFgPQgFgOgBgJIgDAHQgDAHgDACIgOAHQgNAFgEAAQgGAAgEgEIgEgEIhCAIQgJAAgBgIIACgKIgGAAIgFADIgJABQgDADgMAFIgNAEIgEgBIAAgDQAAgJAEgIIAHgUQgOACgLADIgSAGIgdAKIgRAGQgFAAAAgGIADgKQAEgKADgDQgTABgVAFQgIABgNAGIgOAGIgcAIIgcAIIgRAGQgFAAAAgEIAAgFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQACgDAAgEIgBgBQgJAGgJACQgKADgVACIgNAAIgDgBIAAgCIgBgBIgCgDQgKAHgEAAQgJAAgDgJIgUADIgJACQgHAAgDgMQgCgOgCgDQAAAEgFALQgGALgCAAQgEAAgGgQIgIgXQgGAWgIAAIgDAAIABgIQAAgLgIgVIgMgeIAAA/QACAJgJAOQgKANgFAAQgFAAgDgFIgDgGQgDAAgCADIgEACQgCAAgEgGIgFgJIgCANQgBAKgFAAQgHAAgTgNIguAAIgNACIitAAQgFAEgFAAQgFAAgDgDIgQAAIgJADIgEAAIgBgHIACgMIggAGQgNADgOAAIgHAAIAAgEIACgRIAAgIQgGAEgWAUQgQAOgOAFIgEgBIADgTIACgMQgEALgEAHQgKAPgcAGQgCACgFAAQgKAAgDgEIgDgHQgeAAgEgCQAAgFgDgDIg8AAQgDABgJgCQgFgCgGAGIgHAAIAAANQAAAJADACIAWAAQAGAEACAFIAAAIQAAAdgjAJQgLAGgNAFQgZAKgoAAQgFAAgCgDQgBAAAAgBQgBgBgBAAQAAAAAAgBQgBAAAAAAQgzATgIAAQgNAAgGgFIgHgGIgHAAQgZAMgnAEIg4AGIgfAAIgKABQgHAAgKgFQgKgGgCAAIgXAHQgWAGgOAAIgygIIgRgCIgIgHIgCgCIAAACQgHgEgBgEQgJABgeAJQgUAFgVAAQgqAAgLgEQgHgDgCgKQgJAIgfAAQgigBgJgDQgEgCgBgGIgBgBIgBABQgbARgvAAQgOAAgCgBIgEgEQAAgBgTAFIgpAKQgWAFgJgLQgbAIgfAAQgkAAgdgNQgOgIgEgEQgeARgbAAQgJAAgEgDIgEAFQgDAEgFAAQgEgBgFgEIgHgEIgGAEQgFACgEABQgFgBgFgCIgGgEIgFAFQgHAFgPAAQgIAAgBgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBACIgLAAQgPAAgFgDIgEgEIgFAFQgEADgJAAQgNAAgEgGIgKAEQgEADgIAAQgNAAgJgDIgOgGQgBACgBAEQgCADgKAAQgKAAgFgCIgIgEQgGAJgRAAQgIAAgKgEIgKgEQgeARgYAAIgPgCIgDAAIgWACIgUgBIgDAAQgEAAgCgCIgCgCIgKADQgIACgFAAQgKAAgHgFIgFgFIgDACIgCABIgHAAQgDgBgBgFIAAgFIAAgBIAAgBIAAgJIACgHQgQABgCACQgCADgHAAQgTAAgGgKIAAAAIAAAAQgKAIgHAAQgJAAgDgEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgCIgBACQgIAHgNAAQgHgCgHAAQgXAGgGAAQgIAAAAgLIAAAAIgBAAQgOAHgIAAQgKAAgCgEIAAgDIAAgCIAAgBIgGADIgEABIgIgBQgEgBgCgDIgDgHQgCAHgEAEQgEAFgFAAQgHAAgDgDIABAFQAAAKgKAAQgPAAgMgKIgBgBIAAACIgBABIgSABIgjgEIgCABIgBgBIgBAAIAAgBIgFgFIgDgDIgHgIQgGAEgUABIgHAAIgmAAIgCgBIgdAAIgDABQgKAAgHgFIgEgDQAAAAAAAAQAAABAAgBQAAAAAAAAQgBgBAAgBIgBgFIAAgCIgIAAIABAFQAAANgjABQgVABgEADIgCACQAAAFgdAAQgQAAgFABIAAgCIgBgBIgCgDQABAGgSAAQgBgDgdAAIgLACQgHAAgCgEQgJAEgEAAQgEgFgFAAIglAKIggAIIgDgBIAAgEIAPgPQAGgHACgEIAAgBIgBABQgDAGgFAFQgJAKgNAHQgDgMgEAAQgOAPgGAAQgLAAgFgGIgEgHIgJgHIgHgGIgGAGIgBABIgKAHQgKAHgCAAQgJgCgbAAQAEADgSAAQgIAAgZgFQgZgGgzAAQgFAEghABQgegBgHgFIgCgEQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgGACIgCABQgGADgGAAQgKAAgDgEIgBAAIgBgFIAAgBIAAgBIgEABIgJADIgJADQg8ASgcAAQgkAAgJgDQgEgEgGgBQgEAAgGgFIgXgBQgSAIgHAAQgUgBgHgFIgHgGIgCgBIgRABQgKABgFADQgJAFgKABIgCgBQgEACgLAAQgHAAgGgEQgGgDgCAAIhEAGQghgBgKgIQgJAFgWAAQgkALgIgOQAAAIgMAIQgOAKgWAAQg3AA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NQAJAVAVArQAPAhAEAXIABAJIAAAxIgCACQgKgggWgcQgagggqgbIgBAAIABABQAZAeAOAcQAVAoAAAhIAAAKIgDAAQgDgDgDgIIgFgMQgJgPgYgGIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIAAAAIANAcQANAeAAALIgBAWIgBABQgBAGgHAGQgHAGgKACIAAAEQAAAIABACIACAEIACgBQAFgDAVAHQAFACAAAFQAAANgLANQgDACAAAFIAAABIgBACIAIgCIAFgBQAXgGANgMIAYgbQAFAAgBAKQAAAIgEAKIBFgeIADAAIABACQAAAFgJARIAAACIAagMQAWgLAGAAQAEAAAAAEIgDAMIAAAIQATAAAPgKIADACgEggLAGgIABABQAEADATAAIAGABIAPgFIADgBQARgEALgBIAHgBIACABIAFADIADgDQAFgHAFgOIAAgBIgBAAIgHAEQgDACgJAAQgIAAgCgFIAAgFQAAgGADgIQglAXgQAAQgEAAgBgDIAAgDIAEgOIAAgBQgyARgQAKQgDgCAAgDQAFgNgBgGIAAgBIgBAAQgHAKgTANQgKAIgKAEIgPAGIgCAAIADABIACAAQAOAEANAAIAogDIAJgBIATgCIABAAQACAAAEACgAwfGHIgCAEQAAAFAEACIATADIAdAAIABABIAnAAIAFAAIAMgCIAKgCIACgBIgGgGQgBgCAAgDQgIgKgCgEQgLgVgEgZIAAgGIACAAIAMARQAQAUASAJQgUg/gDgZIAAgEIACAAQABAAAKARQALAUAOALIACABIAAgBIAAgCIgCgNQgBgIgEgGIgKgbIAAgEIABAAQACAAALAbQADAJAZATIAAgQQAAgKAHAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQACgDAAgDQAAgKgOgGQgOgGAAgDQAAgEAHgGQAGgFAAgDQAAgHgggPQAKgRADgNIAAgJQAAgRgXgDQgXgEAAgCIACgGQAAgFgMgKQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgIgSQgIgTgGAAIgUAKQgDAAgDgHQgDgHgLAAQgRAAgFAKQgBALgBABIgBABQgCgJgDgDQgIgMgVAAQgNAAgEAFIAAAEQAAAHAEAPQAAAGgMABQgNABAAAHIACAKIAAAXQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgEgHgHAAQgPAAgGAOIgCAJIAAAMQAFAEABALQAAAFgFAIQARABAFAJQACAEAAAJQAAALgGAJQASALABAHIAJAAQAAgYASAAQAHAAAEACIAJAGIAGgFQAGgEAJAAQAKAAAEAEIAEAGQAHgHAMAAQAPAAAEAZQAAACgDACQgEADAAACIAFAGIAAAHQAAAXgqAGIgCABQAIAIAAAHQAAAIgHAIQgFAGgHADIgCAAIgDAAgAhCBJQgMgIgJADIgVAGQABgFAJgGQAHgEAAgIQgLgGgPAEIgTAHQgGAAACgEQADgGgBgCQgJgBgNgGIgLgGQgIgFgEgFIANgDIASgFQgIgEgTAAQgWgBgFgCQAHgGAPgIIAZgOQgOgEgYAIIggAKQAEgLAOgQQAOgRAFgKQgVALgaAbQgHgFgFgQQgGgRgFgEQgCAIgHAPQgGAOABAOQgJgFgPgNQgPgMgKgFQAAAMANAZQANAWACAJIAAADIgLgDIgLgBQgMgCgFADIgDADIgBgDQgFgHgNgFQgQgGgCALQgEAAgMgJQgMgIgKAAQgFAAgDAFQgEAEADABQgHAAgEgHQgGgKgEgCQgNgFgOANIgGAHIgQANIAKgOIABgCIgCgHQgDgIgJAAQgFAAgGACQgEADgFAAQgHgHAJgOQAKgOgFgJQgHACgJAHQgJAIgGACQAAgHAGgLQAFgKgBgKQgKAEgFARIgFASIgEAIIAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAIgDgBIgBAAIAAAAIgCABIgCADQgDACgMAAIgCAAQgJAAgCgBIgDACIgCAAIgBgCIACgBIAAgBIAAAAIgCAAQgWgDgMAAQgcgBgOAMQgEgBgCgHQgCgJgCgBQgOgBgCAFQgFgCgDgLQgDgLgFgBQgDABgBAEIgDAGIAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAIgCgDQgDgGgCgBQgEADgCAFQgDAGAAAJQgBgKgGgGQgGgIgOgDQgTgEgJAKQgEADgCAGQgDgEgEgCIAAgBIgVgGIgEAAIgEABQgGAAgFACIgTAUQgQgKgPgBQgUgBgFAQQgEgDgDgHIgCgGIADABIABAEIAIgDIAHAAQAJAAAEgEIADgEIAXALQAIgMAOgFIAIgDQAUgFAOALIACACIACgCQANgKATAAQAWAAAHARQAFgFACgJQAKABAEAIQAFgCACgKQAHAEAKATIACADQABgBAFgBIAKAAIACACQAGAIABAGQAMgGAQgCQAJgCAKAAQAYAAANAIIAEgFIABACIAEABIgCACIABgCIgCACIgBACIAAAAIADAAQATAAAEgFIAAAAIACAAIACgCIABgBQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIAAABIABgBIAAgBIABgBIABgCIAAgBIABgDIAGgRQAGgQAOAAIABADIAAAEIgCAIIgDANQADACAHgFQAIgHAHADQAGAJgIANIgBADIAAAAIgFADQgEADAAADIAFAAIAAADIAAACIADgBIACgEIAGABIgBACIAGAAQAPAAACAOIAKgPIAAABIABABQACADADgBIADgCIANADIAEABIAEACQAHAFACAHQAIgKAPAGQANAEAIAHQAPgGASAHQAVAKAJgCQgDgHgIgHIgOgOQAKgBAJALIAGAGIAAgBQAGAAAFAGIAIAKIgDgLQgDgIgIgOQgMgYgCgQQAWAKAZAXQAEgJAGgQIAIgbQAKAFAGAMIAIAZQAJgDASgRQAQgOAPgDQACAMgKAOQgOAPgEAIQAIAAAagFQAUgFAMADQgFAKgPAJQgVAKgEACIAbAEQAQACAJADQgBAFgGACIgHADQgQACgDACIAJAFQAKAFAOAAQgBADADAEQADADAAAEQAMgFANAAQAQAAAIAHQAAAFgDAEQAFAAAQANIAAgBIAEADIgEAAIAAgCgAk8ALQADgCgFgCIgCgBIAEAFgEgmOAAAIgOgKIgHAKQgIAJgDAAIgGgJQgLgUgHAAIgUATIgFACQgBAAgCgCIgDgLIgCgFQgFgKgIAAQgOAMgGADIgMAAIAAgDQARgFAPgLQAIAAAFAGQAFAHADAQQARgWAIAAQAIAAANAYIAEAEIAFgEIAMgOQAHAAAPAOIAIAHIACgHQAFgNAGAAQAIAAAMAJQgIgPgCgTQAEgGANABIAPACIAAgCIACAAQAEAAAFAFQADgDgCgFQgFgMAAgEQAEgFAMgCQAMgBAFAGIAEgHIAAgCQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgGAMgIIADgEIgDgBIgBgBIAGgGIAAAAQAIgaAFgoIAKhTQgKABgJAIQgLAIgFACQgIgHAHgLIAKgRQgXAFgdAUQghAXgPAGQgKghAWgYQASgVAhgJQgWgEgfAHQgqALgIAAQABgOAPgPQALgNASgJQANgHAXgEIApgHQgOgTgKgRQARgBASAJQATAIAJAMQAaggA6gFQAAAIgIAGQgJAIgBAEQAXgJAfABQAkABAMAOQgiABgkAPQA8AFArA2QgIgBgggMQgbgKgWABQAIAMATAVQAPATAFASQgIACgMgQQgPgUgHgFQgSgMgTAFQAEAIAPAUQAOAVgBAVQgGADgHgJIgMgSQgFgDgKgFQgKgEgDgEQgBAAgBABQAAAAgBAAQAAABAAAAQAAABABABQADADgBACQgHABgJgEQgJgEgGAAQgCACgBAFIgGAhIgEAvIgCAnIgCACIgBAJIACAFIAAARIgBAAIABADIAPgLQAJgIAJgCIALAKQABAHgBAIIAEgDIAAAAIgDAHIAGAAQAog/BGhGQArgrBYhUQgNgKgZgHQgegFgOgEQALgGAvgGQgkgagPgJQANgGAZAFQANADAYAIQgCgHgHgOQgGgMgCgKQANgCAPAJIAYARIAFgTQADgJAIgCQAGAHADAXIAXgJQANgFAJAHQgDAIgOAIQAxAKAPAeQgLACgKABIgYgBQAFALAQAUQANASgDATQgOAAgTgMIAFAnQACAbgOAJQgNgHgGgSQgFgLgEgZIgSAmQgKAYgRAGQgCgPAEgTQAEgVgBgNQgEAEgMAWQgJARgPACQABgGAHgOQAFgKgBgIQh7BqhOBwIABACIAAAAIACABIAAAAIACABIAIAFIgBgHQgBgMAPgEQAJgCALACQALADAGAGQAYgeAMgHQAOAFgBAVQAGAAAKgKQALgLAIAAQAFAAAEAEIAFAHIAOgEQAJgBADAFQADgBADgHQADgHAFgBQAJgBAHAFIAMAIQACgBgBgIQgDgIAEgCQASgGANAZQAMgGAQgKIABABIgBABIAXAVQAagOAPAfIAEAIQAGAAAGgIQAGgIAHAAIADAIQAFAOAGAEQAHgDAIgJIAEgFQAGgFAGgCQAGABAEAHIACAEQAGAMAFACQAGgBAGgIQAGgHAIAAQgBAJAIAMQAOAEAIgLIAJgNIAEgGQAVgaAigRQAngTAgAGQgzAagdAjQA5gWAnAIQgJAJgVAHIgPAGQgNAFgFADQASAFAbgEQAagEAPAFIAFgEQADgEAEgDQALgBALAEIASAGQAJgRATgKQAXgMAOAQQALgIAFgCQAIgCAHACQAFgBAMAAQAMAAACADIADAGIAEAEIgDgJIAAgCQgEgTgEgFQAPACAXAMQABgWgXgTIgUgRQgLgJgGgIQAEgCAFAAIACACIAJgBIALABQAAgCAJAAIAGABIgBgBQgEgCgFgEIACgCIABgBIAIAHQACAAAEAFIAHAFQAEADACAFIAOALQgBgOgKgOQgNgRgCgIIAQACIADAAQAKAAADAGIAAADQAHACAGAJIAOAZQAGgJAIgTQAJgXAFgHQAIAHgBAPQAAAIgFATQADgBARgNQAPgMAQACQAAAIgOALQgPAMgDAGQAJACATgDQAOgDAJAEQgDAJgMAFIgUAIQAIACAaABIADAFIgXgEQgBAAgBABQAAAAAAABQAAAAAAABQABAAABABQAEACgCAEIggAJQADAMALAOQAMASAEAHQAJgCALAGQAGADAFAGQASARAQgCQACgRAUgCIARgBQALgBAGgCQAHAFAYAFQAVAEAHAMQgCgRAQgHQAGACAIAIQABgKAKgCIADADIAAAEQgHAAgDAMQgIgJgIgBQgJABgCAKQgCAJAEAIQgGgCgJgMQgIgLgIAAQgJgBgHAGQgJAIgFABQgEgEAEgEIAFgGQgFgEAAgDQgaADgLACQgUAFADAPIgSgFQgKgDgGAGIgJgUQgEgHgGgCIgHgBQgEAAgCACQgEACADAHQgFgCgDgHIgEgIQgFgQgEgEIgNABQgEAAgEgDQAAgCAFgDQAEgCAAgFQABgIgLgBQgLgCAAgFQAcgGAQgGQgEgHgQADQgRADgFgEQAIgFAWgGQAVgGAIgGQgLgDgXAFQgZAGgHgBIAZgUQAPgMAHgKQgOACgRARQgRARgIABQAAgEAIgTQAIgSgCgPQgHAKgHARIgMAdQgIgEgJgUQgIgTgMgDIADAAIgDgCIgCgBQgIgBgCgBQgEgBgDABQACAIAOAUQALAQgBARQgHgFgHgIIAAAAIgMgKIgIgHIAAgBIgBAAIgGgEIgHgBIgEAAIAKADQgVgEgOACQADAHAKAJIATAPQAXAVABAZQgIgBgLgGQgMgGgHgBIAHATIAEAPIACABIgCABIABADQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAgBgBQgFAAgGgIQgGgHgJAAQgNAAgCABQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAIAAgBQgSAGgIAGQgCgGgOgIQghALgLAVIgDAFIgLgGQgIgEgIgBQgKgBgFADQgFAEgCAHQgJgFgNgBQgRgBgFAKQgKgFgZAAIgjAAQAHgJASgHIAGgDQAfgLAGgDQgWgEgbAJIgYAKIgSAGIACgHQAIgRAQgOQAMgKAbgRQggACgcAUQgTAOgNAUIgIAOIgPAIQgJADgLgCQgKgHAAgJQgFAAgEAGQgFAGgEAAQgJgCgFgJIgIgMIgCgDIgEADQgJAGgPARQgSgKgDgOQgHAAgGAHQgFAIgHgBIgIgPIgCgDQgFgMgJgCQgNAAgFAJQgQgUgNgGQgLAFgFAMQgHgDgHgIIgMgNQgHABgBAIQgCAHADAIQgGgBgJgGQgJgGgGgBQgIABgDAJQgEAJADAJIgDAAQgDgCgCgGQgCgIgEgBQgJgBgHAFQgKAHgEABQgCgCADgHQADgGgEgEQgJABgLAMQgLALgGAAQgHgCgBgKIgEgQQgXANgIAWIgBAEIgIgEIgOgHQgPgGgNAGQgCAEAAAGQAAAJAFALIgFgCIAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgLgGIgFgDIgCAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIgBAAQgDADgDAJIgFAMQgFgDAAgNIAAgEIgGgEIgFgEIgBgCIgGAAIgDACIgDACQgLAJgHAAQAAgBADgIIAFgNQAHgRgKgHQgJACgKAKQgLAKgFADIgBAAIgCAAIgGgCIgCgBIgDgBQgEAAgFAEQgDACgEAEIgEAFIgDAHQgDAHAAAIQgEAAgGgFQgFgFgGABQgDAAgDACIgGACQgBAJAEAHIAHAMQgEABgEgCIgEgBIgDABIgBgBIgBAAQgDgCgEgBIAAAAIgKgBQgLgCgEAEQgCANAIAQIAFAJIABADIABACIAAABIABAFIgFgGIgGgFQgLgJgJAAQgCAAgEAJIgBABIgFALIgRgMgEghCgDiIglAmIhIBXIgFAGIgCAGQAOACAEAFIACADIAEgDIADgCIAFgCQA7hZBEg8QAGgLAQgOIAdgZQAigfgEgdQhSBMgqArgEgjygDfIgIAuIgEAwQgDAPgGAKIgGAJIgCACIAAABIAHgFQALgHAHABIAAgCIAAgEIAFg6QADgyAHgZIAAASIACgSIABgLQACgHgOgDQADAOgFAagEgkMgEtQgpAAgbAUQgeAUgFAlQAMgEARgKIAbgSQAhgVAeACQgDAFgJAJQgJAHgCAHQAEAAALgHQAOgIAGgBQAdAAAKAHQAGgBgIgIQAQgBASAOIAbAaQgGgrgngbQArgNAsA3QgCgRgTgSQgWgUgJgKQArgDAsATQgKgVgdgMQgegMgnADQAKgLAVgHIAngKQgWgKgiAIIguAOQACgIAKgJQAKgJADgHQgzAOgOAVIgagRQgPgLgRAAQgBAOAgAVIgFAAQgHABAGAEQgggHgnASQgnAQgSAbQAUgDA0gMQAPgCAMAAQAZAAAOAJgA+sj+QAMgJAJgVIAOgjQALAGAGAXQAHAbAEAHQARgMgIggIgOgtQAEACARAQQANAMALgCQAAgVgRgVIgXgeQAIAFAQACQAPABANgDQgNgfg8gCQACgDAMgHQAJgGADgHQgMACgeAQIgDgNQgCgKAAgHQgHADgCAMIgDARIgWgVQgPgMgOADQAPAiALAPQgxgZgcAGQAJAKAWALQAaAOAIAFQgbgJgpAOQAPAEAhAGQAbAIAFARQACAJgFAQQgFAQADAKQAFgDAHgRQAGgPAKgCIgHBIgAoug8IABgJIACgCIgBAPgEgjqgBtIgBAEIAAAAIgBADIgBABIADgIg");
	this.shape_24.setTransform(296.1,149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.6,-1,516.9,312.2);


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


(lib.twiggshand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggshand();
	this.instance.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-0.3,16.5,16.1);


(lib.twiggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggshand2();
	this.instance.setTransform(40.8,20,0.998,0.998,55.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAbQAFgLANgKQAPgKAOgJIAbgMIANgDQgGARgJALQgJAMgOAIQAAgDgCgDIgCgCQgHgCgKABQgLAEgBAMIAAACIgQgCg");
	this.shape.setTransform(23,-44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#996600"],[0,0.667],-604.2,-133.6,1034.2,-133.6).s().p("AAFDeQgFgJgIgIIgIgFIgIAAIgJABIgIAFIgLAFIgDACIgDgIQgBgDgDgCIgGgFIgDACIgEAFQgIAJgCAJIgBgKQAAgMgJgGIgGAAQgNACgMAIIgCAFIAAgIIgBgKIgEgDIgDABIgFAAIgDACIgJADIgDABQgOglACgmIABgQIACghIABghIgBggIgBgkIgEhAIgFgqIgCgUIgDgVIgCgOIgEgOQgCgGACgEIAEADIAdAGIAJACIAVAGIAeAGIAgAGIAgAEIAgADIAkADIAnAAIAUAAIAVAAIAVgBIAWgBIAVgBIAFgBIAAACIgIBDQgGArgCArIAAABIAAAcIAAAoIACAmIADAlQABAOAAAQIgBARIAAAIIgBAHIgDAMIgDAFIgFAGIgHAAIgDAHIgEAFIgEAEQgDACgDAAIgFADQgMABgLgGIAAAKIgJgEQgGgBgFgEIgbgOIgDABIgFAHIgLgKIgJgGQgQAPgJAVIgIgLgAiehgQACAcgEAUQgDATAAASQgCAnAMAgIAHARIAAAFQgHA3ARAeIADAAQABghgEgbQgEgcgLgWQALhBgBg6QAAgbgDgXQgDgZgGgWIgIgYQABAvACAsgAhkh0QANB0gTBSIACAUIABAHQAJAhAFADQAGADADgaIgJgXIgBgGQAThkgehyIABAFgAAUi/IgeAAIghgCIgfgEIgfgFIgmgIIgKgDIgMgDQgGAAgGgDIgDgGIgBgHIAcAFIATADIAaAFIAcAHIAXAAQAYgBAXAFIAQADIAOACIAggBIAagCIAYgBQAjgBAkAGQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgTAFgUADIgmADIgmAAIgTABIgSgBg");
	this.shape_1.setTransform(-33.5,51.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(31,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgaENIgXgBIgWgBIgcgDQgTgCgSgEIglgJQgOgCgPgHIgUgMIgVgLIgEgcIgBgbQAOgQAJgVIAHgTIAkgfIAOgMIAAgCIAZgMQAFAAADADQAKAGAIAJIAJAMIAJAMQAKAMARADIAeAHIAYAIQgLAQgNAOQgNAPgQAOIgQANQAEAAAEgCQAJgBAHgEQAJgDALAAIAKgBIgFAFIAFAIIAFgDQAFgGADgGIAKgXIDFgPIAEACQAFARgCASQgCANgFANQgEAMgHALQgJAPgQAEIglAJQgTAEgUACIgbAEIgjACIgQABIgXAAgAgMCNIAJgKIAFgDIAJgCQATgCATgDIAkgGQAPgDARADQAPABAOAKIgSAGIglAGIg5AFQgZADgVAAgADNiCQgRgLgBgVIAAgOQABgRALgMQAQgSATAKQASAJgDAVQAAASgIARQgIASgSAEQgGgBgEgDgAAAjkIgMgFIAMgKQASgNAWgHIAQgFIgCAFIgEAHQgHAOgPAIQgMAGgOAAIgCAAg");
	this.shape_3.setTransform(-22.8,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("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");
	this.shape_4.setTransform(-4.5,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("Ah3BtQACgTAEgRQAEgNAGgNQACAKAAAKQAAAQgCAOQgBANAHAJQAGAIAEAKIAAABIglAJIAFgmgADyCMQAFgPADgQIACgTQAAgMgBgLQgBgLgCgKQgDgLgEgKIgJgUQgJgMgLgMIADgCIAPARIAIAGQAHAIAFAKQAIAPAFARQAFAQgBAQQAAARgFAQQgDAMgGANgACdCEIgCgKIAKgXQAEgLADgLQAEgMACgNQABgMAAgMIAAgcIABgBQgIgLgKgEIgcAAIgEgEQgHgGgIgDQgDgBgCABQgUgCgPAKIAFAEQAEADACAFQAHANgDAPIAAABIAFgNQAFgJAIgIQACgDAEgBIALAGIAFAOQAOAwgWAwIgCAAIgQgKQgbgRgZgSQgEgfARgWIgHAHQgHAHgHgDQgEgPAFgQIgPgBQgDAFgCAFQgGAVABAXQgZAHgcADIAAAMIACACIABAEIgDAEIAAAGIgEgCIgEADQgGAIgGAEQgTAOgNASIgCgJIgEgTIgEgZQgBgMAGgLIAXgqIAEgDQgJARAJAVIAbAJIADgTIgOAAQgKgLgBgOIAEgIQAOgcAagNQAKgEAHgCQAZgEAZAAIADAEIAGAAIAGAFQgKANgNAEIARgBIgHALIATgEIAFgCQAHgEACgHQAKAAAKgEQAEgCACADIAAgBIACgDQACgEAAgFQgCgIAFgJIgGgHQAAgZAPgTIANgJQAMgJAQgFQARgFAKAOIgIAFQgSAFgPALQgaARgJAfQgDAIABAHIAGAFQAhgaAngLQAFgCAGABQgnAUgeAdQACAFAGADIADACIAGAAQAJgCAGgHIAIgCIAAAGIAAACIgDACIgHADQAHAIAMAJQAMAIAJATQAJAUgBAWQAAALgDAJIgMApIgPAJIgCgEIAJgYQADgLACgMQACgPgBgOQgBgOgFgNQgFgPgKgLIAIAbIACAOQADAUgCAUQgDAYgKAVQgCAEgBAFIgBAAIgGADQgHgBgEgEgAhKBoIABgBIAAgBIAAgFIAAgeIgIAAQgEARALAUgAikB6IAGgWQAFgRAJgPIAUgfIABAAQABAIgBAIQgCAMgEANQgIAVAFAZgAi2B7QACgUAGgSQAFgPAKgNQALgQAOgKIAFgDIABgBIAAAEQgJAFgGALIgOAaQgIASgHAVIgCALgADjByQgDgHgBgJQgDgUADgQQAEgXgHgWQAKAKAHAOQAIATAAAUQAAAWgIATIgCABQgFgDgDgFgACKB3QgEgGgBgGQAAgIACgIQAFgMADgNQAHgkgHgkIABABIAPAQQAFAPADARQACAKgCALQgDAOgFAOIgIAUIgBADIgHAEgAjGBQIAJgSIALgRQAMgPARgLIAUgMIAMAJIgBACIgDABIgGABQgLACgLAAIgJAKIAAABQgNASgLAUIgCABIAAAIgAjZAyQAGgSAQgMQALgKANgHQAIgDAMAAIAAABIgDACQgMAJgIAIIgPASIgLASgAjfgIQAPgKAPgGQASgHATgFIABADIg7AgIgBACgAkKgKQAIgOAMgLQAOgNASAAIAigDIAVAAIAAACIgKADIAAAFQgWAEgTAJQgPAHgOALIgPALgAhaAAIgFgFIgBgCQgLgPgKgJIgTgTQgHgHgIAAIgLgBQgsgGgrAIIALgHQATgKAUgDIAdACQALACALgDQASgGgEAKIABAAQARANAMAUQAIAPAGAPQAEAIgDAAIgBAAgABagzIgBgDIAKAAIAHAFIgQABIAAgDgAj0hWQAggeAoARQARAHAJAMIgNgGIgFAAQgoABgkAJg");
	this.shape_5.setTransform(4.9,-61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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CIAEAEIABACIACAAIAOgCIAMgDIAKgEQAKgGAIgGQAHgHAHgJIAFgJIgDABIgHgCIgGgCIgFgDIgHgFQgCgEgCgEQgBgHAEgIIAHgIQAKgIAGgPIADgJIABgCIgCgBIgCgBIgEABIgFACIgIADIAAgHQgEgJgFgIIgIgKIgJgKQgLgIgLgGQgSgIgTgFQgLgDgKgCIgdgCIAKgIIAEgDIADgEIAEgGIABgEIgWAAIgKAIIgGAGIgDAGIgCAFQgBAGADAFQADAHAHAFQAGAEAIADIADAHIgCABIgDABIgEABIgHgCIgSgHQgDgBgCgDQgDgGgBgHIgGAHIgDAHIgBABIAAgFIgBABIgLAJIgLAKIgJALIgDAEIAAAAIACAFIABABIACAAIABAFIAFAMIAGAJQAEAFAFADIAJAGIAAAFIgCAJIgCAIIgFAMQgGAKgGAJQgFAFgFADQgGAEgIADQgQAGgSAMIgBAEIgGAMIgFAMIgFAMQgFARgDARQgDAWgBAXIAAACIAAgCIAHgUIAIgWIALgUIAMgUIABgBIgBADIgGAWIgFAVIgKAlIgCAHIgHAiIgQBRIgHAqIgGA0QgBAJAAAKIABACQgDAHAAAHIACAOIABAIIAAAXIAAADQABAHADAHIgDAAIgFgBIAIAGIAFADIAOAIIARAIIASAFIAjALIAKACIAJAAIADAAIARAFIABAAIARADIASAEIAEABIAdAEIAAABIATAEIAQADQAYAEAXAFIACAAIAjAHIAJACIAAAFIgLgBQgfgEgdgGIgIgCIgIABIgFABIADAEIgKgBIgDgCQgWADgWAEIgTAFIgTACIgRAAIgNgFIgGgCQAagBAdgFIAVgFIAUgHIgSgFIgFgEIgHgCQgMADgLgFIgBAAIgEACIgDgBIgPABIgfADIgcAEIgOACIAOANIAPAMIjFAQIgKAWQgDAHgFAFIgFADIgFgIIAFgFIgLABQgKAAgJAEQgIAEgIABQgEACgEAAIAQgNQAQgOANgQQANgOALgPIgZgIIgdgHQgRgDgKgMIgKgMIgJgMQgIgJgJgHQgEgCgEgBIgZANIgBACIgNAMIgkAfIgIATQgJAVgOAPIACAcIADAbIAWAMIAUALQAPAHAOADIAlAIQASAEATACIAcADIAWACIAXAAIAXAAIASAAIAjgDIAbgDQAUgCATgFI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");
	this.shape_6.setTransform(-4.6,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAIQALgOAKgNIAQgOQgDAHAAAGIABAGQABAFAFAAQAEAAADgBQgEAKgQAWIABgDIgEADQgIAHgNACIABABIgRACQACgMAKgOg");
	this.shape_7.setTransform(17.7,-49);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("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");
	this.shape_8.setTransform(-4.5,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AhcCWQgEgTgBgRQgBgOACgOQAFAJADAJQAFAPADAPQACAMAKAHQAIAGAHAIIABABIghAUIgHgmgAiXCQQgBgQAFgPQAHgTAKgNQABgDACgBIABgCIABADQgGAIgDANIgFAcQgDAUABAWQAAAGABAFIgIADQgEgUABgTgAiECaQAAgTAEgQIAJgkIABAAIAFAPQACAMgBAOQAAAWAMAXIgeAHIgCgWgAg9CNQgGgIgEgIIgLgXQgFgKACgMIAJgwIACgGQgCAVAPARIAcAAIgDgTIgNAFQgNgHgGgOIACgKQAEgdAVgVQAIgHAIgEQAWgMAWgHIAEACIAGgBIAHADQgFAOgLAJIAQgHIgEANIASgJIADgEQAGgGgBgHQAJgDAJgHQADgDADACIAAgBIAAgEQABgFgBgDQgFgIADgKIgIgFQgIgXAIgXQAEgHAGgGQAIgLAOgKQAPgLANAKIgFAIQgQAKgLAPQgTAYAAAgQAAAJAEAGIAHADQAXgjAhgWQAFgDAFgBQgeAfgUAkQAEAFAGABIAEAAIAFgBQAIgFAEgJIAHgEIACAGIAAABIgCADIgFAFQAIAGAPAFQAPAGANAPQAPAQAHATQACALABAKIABAqIgLANIgEgDIABgaIgCgXQgCgPgGgLQgGgNgIgLQgJgNgOgJIAQAZIAHANQAJAQAEAUQAFAXgEAYQAAAEABAFIgBAAIgFAFQgHACgFgDIgEgJIABgZQABgLAAgMIgDgZQgCgKgEgMIgJgcIAAgCQgKgHgLgCIgbAJIgFgCQgJgEgIgBQgEABgBABQgUAFgKAOIAFACQAFACADAEQAMAMABAOIABAAQgBgFACgHQABgMAEgKQACgEAEgCIAMADIAJANQAdAogGA0IgCABIgSgFQgfgHgegKQgOgcAKgYIgEAGQgFAKgHgCQgKgMAAgRIgOAEQgCAFAAAFQACAXAHAVQgVAPgaALIAEALQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIADADIgCAFIACAGIgFAAIgDAEQgDAJgEAGQgOATgGAUIgFgIgAhGBiQACASARAPIABgBIgBgBIgBgEIgKgdgAitB/IAFgTQAHgSAMgRIAQgRIAOAFIgBACIgCACIgFADQgKAFgKADIgGANIAAABQgGAVgFAXIgBAAIACAIIgOAEIAEgTgAjMB8QABgTALgQQAIgNAKgLQAGgHALgEIABADIgCADQgJAMgFAKQgFALgDAMIgFATgAkOBRQAEgQAIgOQAJgRASgGIAegNIAUgHIACACIgJAGIABAFQgTALgQAOQgMALgKAPIgJARgACTBGQgDgIAAgJQAAgNgBgNQgEgigTgiIACAAQAKAGAKAHQAJANAIAPQAFAHABALQACAOgBAPIgBAWIAAADIgFAGIgFABQgGgEgCgFgAjjBFQALgOAMgKIAfgYIACADIguAxIAAAEgAECAjQgBgKgDgJQgDgLgFgIQgEgKgGgJQgFgKgHgIIgPgQQgMgLgPgIIACgDIATAMIAKAFQAKAGAHAHQANAMAKAPQAJAOAFANQAFAQABARQAAAMgBAPIgLABQgBgPgCgRgADuAvQgFgFgEgJQgJgSgCgPQgDgXgOgSQANAGALAMQANAPAGARQAHAVgBAVIgCABQgFgBgFgEgAhjAlIgGgFIgCgBQgPgLgMgFIgYgMQgJgEgIABIgKADQgsAIgmAUIAIgJQAPgQASgHIAcgHQALgCAKgGQAPgLAAALIAAAAQAUAHASANQAMALAKANQAIAJgEAAIgBAAgAkQABQAVgkArAEQATACAMAIIgOgCIgFABQglAOggARgAA4hDIgBgDIAJgDIAHACIgOAGIgBgCg");
	this.shape_9.setTransform(-3,-60.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah6MmIgEgBIgFgEIgFgEIgGgGQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHAIIAAgBIgDgIIgDgGIgDgGIgEgDIgCgDIgEgBIgKAFIgHAJIgFAFIgFAEIgGADIgGADIgHABIgHAAIgHAAQgMgIgKgKIgFgEIgFgDIgGgCIgGAAIgHABIgHADIgHADIgEAFIgDADIgIAFIgIADIgJgBIgDgBIgEgKIgDgIQgEgLgMgBIgFACQgMAGgOgCIgJgCIgDgBIgMgEIgMgGIgMgIIgMgMIgLgMIgLgQIAGAHIAFAGIAFAFIAEADIAEACIAEACIADAAIAIgFIADgJQACgHAAgHIACgRIAAgxIABgzIgBgRQgBgeABggIgBgUQgBgpgCgoIgCgVIgCgUQgBgKgDgJIAAgBIgBgBIgEgJIgEgKIA3gqIAAgCIgCgHQgBgMAAgMQAAgIACgIIAAgBIAGgOIAFgPIAHgMIAHgNIABgEIALgJIAKgJIAJgJIAJgKIABgBIABgCIAVgJIAUgKIADgBIABAAIAAgiIAaABIAUgMIATgLIARgNIARgNIAQgOIAPgPIAPgNIAOgSIASgZQAJgPAJgRQAPgSAJgVIANgkIgWgPIgDACQgQARgWAIQgTAGgVgHQgQgFgNgLQAegKAagQQANgHAMgKQAIgGACgHIgDgIQgDgGABgIIACgQQACgLAJACIAFADQAGAGADAIQAEAIAIADIAAAJIACAOIABADIAHAEIAPgFIAfhfIACgBIAHgEIARgMIAQgMIADgCIABgDQADgJgHgJQgHgJgMABIgSgeIgBgBQgHgIgGgGQgKgHgCgMQgDgOgFgPQgDgKgFgIQgCANABAPQABARAEATIAHAlIgBAAQgKgJgEgKQgMgXAAgWQABgOgCgMIgFgOIgBgBIgJAkQgEARAAASIACAXQACAOAGALQAEAIAGAIIgDAAIgHgGQgMgOgGgSQgBgFAAgFQgBgXADgTIAFgdQADgMAGgIIgBgDIgBABQgCACgBACQgKAOgHASQgFAPABAQQgBATAEAUIAFATIgUg8IgCgHIABgBQAFgXAGgUIAAgCIAGgMQAKgDAKgFIAFgEIACgBIABgDIgOgFIgQASQgMAQgHASIgFAUIgEATIAAAJQAAAVADAVIADATIAAAFQgHgTgEgTQgDgPgBgQIABgcIAFgUQADgMAFgLQAFgKAJgLIACgDIAGgGIgHADQgLAEgGAGQgKALgIANQgLAQgBATIAAARIAAAeQAAAUgCAQQgIgPgFgPQgFgQgCgQQgCgOACgQQADgTAGgTIAAgEIAugwIABgBIgDgCIgfAXQgMAKgLAOIgbAlIABAFQADASgGAQIgBABIgJgPIANgqIAJgQQAKgPAMgMQAQgOATgLIgBgFIAJgFIgCgCIgUAGIgeAOQgSAFgJARQgIAOgEAQIgCAEIgEAEIgFgEQgGgHgEgHQAMgYAIgbIgKgfQAPgQAVgKQANgEANgBQAYgEAZAEIABgBQADAFAFABIgCADQAWAQAYANIAQAIIACAAIAAAAQAEAAAEgBIAAABIACAIIACgCQAHgFAFgFQALgMgCgQIAegZIACgBQAVgGAWgIIATgHIAAAAQAGgBAFgEIAGgGIACAEQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAGAAAGgCIAEgCIABABQABgFgBgDQgOglARgjQAFgFADgIQAIgEADgGIABgBIAMAAIgBgFIATgJIAMAKQAGAGAEAHQAEAGAGADIACAGQACAFAFAEQAMAGAOABIAKAAQgbAKgRAUQgIAIgGAJIgGAIIBcgbIgSALIgcANQgJADgIAFIgEABIgLAFIgHAEQgEAIgIAGIgFABIgEgBQgGAAgEgFQAUglAegfQgFABgFAEQghAWgXAjIgHgDQgEgGAAgJQAAggATgYQALgPAQgKQADgBABgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQgNgKgPAKQgOAKgIAMQgGAGgEAHQgIAWAIAYIAIAEQgDALAFAHQABAEgBAFIAAAEIAAAAQgDgCgDADQgJAHgJADQABAIgGAGIgDADIgSAKIAEgNIgQAGQALgIAFgPIgHgDIgGACIgEgDQgYAHgWANQgIAEgIAGQgUAWgDAeIgCALQAFANAMAIIANgFIADATIgcAAQgNgSACgUIgCAFIgJAwQgCAMAFALIALAWQAEAJAEAIIAFAIQAGgVAOgSQAEgHADgJIADgEIAFABIgCgHIACgEIgDgEQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgEgLQAagLAXgQQgHgVgCgYQAAgFACgGIAOgEQAAASAKAOQAHABAFgJIAEgJQgKAbAOAbQAeAKAfAHIASAFIACAAQAGg0gdgqIgJgOIgMgCQgEACgCAEQgEAKgBAMQgCAHABAHIgBgBQgBgQgMgMQgDgEgFgCIgFgCQAKgNAUgFQABgCAEAAQAIABAJAEIAFABIAbgIQALABAKAIIAAACIAJAcQAEALACAMIADAZQAAAMgBALIgBAZIAEAJQAFADAHgBIAFgFIABAAQgBgGAAgEQAEgXgFgYQgEgUgJgSIgHgMIgQgZQAOAJAJANQAIALAGANQAGANACAOIACAYIgBAZQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABIACgBIALgMIgBgrQgBgKgCgKQgHgWgPgQQgNgPgPgGQgPgFgIgFIAFgFIACgDIAAgCIBMgUIgMAGIgKAQQARAGARANQAJAGAHAIQAJAJAHALQASAbgCAhQgBAPgHANIgEABQABgPAAgLQgBgSgFgPQgFgQgJgOQgKgOgNgMQgHgIgKgGIgKgFIgTgLIgDACIABABQAPAIAMALIAPAQQAHAIAFAJQAGAJAEAKQAFALADALQADAJABAJQACARABAPIABAKIgeA3IAIAHIAAABQATAHALAQIgDAFQgJALgKAJIAAABIgCgBIgNgBIgEgCQgSAZgYARQgTAMgWAIQgkANgkADIgUABIAIAZIABAAIAAADIAAADIgBgBIgIDRQgUATgSAOQgSAOgTANIAAAyIAAAAQgBAGADAGIAFANQAGAOAJAMQAEAFAGADIAAgBIAnAMIADgEIAQAGQAIAJAMgDIAAABIAOAEIAEABIAEACQAHACAGABIANAEIASAEIAWAGIAVAFIATAEIAaAGIAAAJIgWgFIgFgBIgSgFIgXgFIgWgHIgigJIgBAAIgJgCIgUgFIgFgBIgEgBIgdgKQgLgDgJgBIgKAAIgGgDIgFgBIgJgEQgFgEgEgFQgIgMgGgOQgFgLgCgLIgBAAIAAgBIAAgDIgBgEIgBgMIAAgVIACgiIADgbQAEgbAFgYIAHgcIAJgcIAJgbIADgHIACgGIAGgNIAGgNIgBADIgFALIgEAKIgCAIIAAABQAAAJACAIQABAIAEAHIAGAHIAEABIAHgEQADgBADgCQACgCABgDQADgHAAgHIgCgPIgBgEIgEgTQgCgLABgKQAAgVADgVIAAAAIgBgOIgBgUIAUgGIATgEIAVgCIAVABIAFAAIgIgPIgHgQQgCgIgBgIIgBgUIABgFIABABIACABIAAABIADAIIAAAHQABADACACIABABIADAHQADAHAEAFIACADIACADIACADIABABIACADIACADIABABIAGADIACABIACAAIAMgGIALgHIAIgIQAIgHAFgJIAIgTIADgKIgCABIgIAAIgHAAQgDABgCgBIgIgEQgEgCgCgEQgEgFACgKIAEgKQAHgLAAgPIABgJIAAgDIgCAAIgCAAIgEABIgEAEIgGAFIgDgHIgOgMQgEgFgGgDQgFgEgHgCQgMgFgOgCQgTgCgTABQgLAAgLACIgcAHIAHgLIADgEIACgEIACgHIAAgEIgWAGIgHALIgDAHIgCAHIAAAGQABAGAEAEQAGAFAIACIAPADIAFAGIgCABIgCACIgEACIgHABQgJAAgJgCQgFAAgCgCQgFgFgDgFIgDAHIgBAIIAAABIgCgEIgBABIgIAMIgHANIgFANIgBAEIAAABIADAEIACABIABgBIADAEQADAGAFAEIAIAHQAFADAGABIALAEIABAFIABAJIABAHIAAABIgBAMIgCAJIgDAJIgFgFIgCABQgSAGgSAMIgBAEIgGAMIgFAMIgEAMQgEARgDARQgEAXgBAWIAAACIABgCIAHgUIAGgWIAKgUIANgUIABgBIgBADIgGAWIgGAVIgJAlIgCAHIgGAiIgPBRIgHAqIgGAyQgBALAAAKIABACQgDAHAAAHIACAOIABAJIAAAWIAAADQABAHACAHIgCAAIgGgBIAJAHIAFACIAOAIIAOAIIASAFIAmALIAKACIAJAAIADABIARAEIABAAIARADIASAEIAEABIAcAFIABAAIATAEIAQAEQAYADAXAFIACAAIAjAHIAJACIAAAFIgLgBQgfgEgdgGIgIgBIgIAAIgFABIADAEIgKgBIgDgCQgWADgXAEIgSAFIgUACIgQAAIgNgFIgGgCQAagBAdgFIAVgFIAUgHIgSgFIgFgEIgHgBQgMACgLgFIgBAAIgEACIgDgBIgQABIgeADIgeAEIgPACIAPANIARAMIjGAQIgJAWQgDAHgFAFIgFADIgFgIIAFgFIgLABQgKAAgJAEQgIAEgIABQgEACgEAAIAQgNQAPgOAOgQQAMgOAMgPIgZgIIgdgHQgRgDgKgMIgKgMIgJgMQgIgJgJgHQgEgCgEgBIg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");
	this.shape_10.setTransform(-9.3,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]},26).wait(28));

	// Layer 2
	this.instance_1 = new lib.TwigArm("synched",0);
	this.instance_1.setTransform(-4.1,-16.4,0.865,0.865,49.4,0,0,0.7,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-40.6,x:-19.9,y:5.8},11).wait(10).to({startPosition:0},0).to({regX:0.6,rotation:-55.6,x:-13.6,y:9.6},5).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-77.4,103.2,153.9);


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


(lib.WHATKIND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggs();
	this.instance.setTransform(69.1,102.1,0.689,0.689);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990066").s().p("AgcBKQgEgDAAgGQAAgHADgFQAGgIAIABQAGAAAEAEQACAFAAAGQAAAFgCAGQgFAGgHAAQgFAAgGgEgAgWAhQgDgEAAgGQAAgHAMgKIAVgOQANgKAAgHQAAgKgJgHQgJgJgIAAQgGAAgJAHQgKAFgDAAQgGABgEgFQgEgEAAgFQAAgKARgIQAOgHALAAQASAAARAQQASAPAAAVQAAATgUAOIgQALIgOAMQgEAGgGAAQgFAAgFgEg");
	this.shape.setTransform(137.3,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AgeBOQgLgCgGgEQgGAAgEgEQgEgEAAgGIABgdIABgdIAAgfIgBggQAAgGAFgFQAGgFAFAAQAEAAANAGQAPAHADABQAaAJAUAUQAZAXAAAaQAAARgJAPQgIAPgPAKQgQAKgbAAQgHAAgKgCgAghAxQAEADAFABQAFABAGAAQATAAAJgGQAJgFAFgKQAFgJAAgLQAAgWgcgSQgIgGgfgMg");
	this.shape_1.setTransform(124.8,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990066").s().p("AhDBLQgEgEAAgFIAAgNIABgLIAAgRIABgSIgBgRIAAgSIgBgSIgBgRQAAgGAFgEQAFgFAHAAQAHAAAJANQAqA/ArAmIAAgPIgBg/IgBgLIgBgLQAAgNAPAAQAPAAAAAxIAAAQIgBA8IgCAPQgBANgMAAQgIAAgIgIQglgigug7IgBAdIABAXIAAAYQAAAcgOAAQgHAAgEgEg");
	this.shape_2.setTransform(109.1,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990066").s().p("AgtBGQgEgDAAgGQAAgFAEgEQAEgEAHAAIASgCIAAgsQAAgYACgYIgVAAQgGAAgEgEQgEgEAAgFQAAgGAEgEQADgDAGAAIAcgBQARAAAdAEQAMACAAALQAAAHgFADQgDADgFAAIgagCIgBAtIAAAsIAaAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEADgGAAIgRABIgQAAIgSACIgUABQgGAAgEgEg");
	this.shape_3.setTransform(95.4,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990066").s().p("AgxBJQgEgEAAgGIACg/IABhBQAAgFAEgEQAEgFAGAAQAGAAADAFQAEAEAAAFIgBAXIgBAYIAxg2QAEgFAGAAQAGAAAEAEQAEAEAAAGQAAAFgXAaQgRASgRAQIATAVIAWATQAFADAGACQALAEAAAJQAAAEgDAEQgEAGgGgBQgOAAgWgSIgegdIAAApQAAAEgCAEQgEAEgGABQgIAAgEgHg");
	this.shape_4.setTransform(84.3,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990066").s().p("AgIBHQgFgEAAgGIABgEIAAgEIAAgOIgBgOQAAgNgCgUIgDgjIgFAAQgWAAgMgEQgLgCAAgKQAAgFADgEQAEgFAHAAIAQACIAPABIASAAIAQAAIAWABIAWABQAGAAAEAEQAEADAAAGQAAAFgEAEQgEAEgGAAIgXgBIgYgBIACAoQADAXAAAPIAAAJIABAKQAAAIgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_5.setTransform(62.3,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990066").s().p("AAhA3QgEgMgFgPQgGACgRABIgWACIgPAgQgEAHgIAAQgGAAgEgDQgEgEAAgFQAAgFAOgdIgBgGQAAgFAJgCQAOgWASgaQAVglAHAAQAKAAADANIAHAfIAPA/IAEAMQAEAJAAAEQAAAGgFAEQgEADgFAAQgIAAgIgSgAgGAJIALgCIAOgBIgHgfIgSAig");
	this.shape_6.setTransform(47.9,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990066").s().p("AApBKQgEgEAAgFIgBgVIgBgWIAAgKQgPABgUAEIgmAHIgBAVIgBAVQAAAFgEADQgDAEgHAAQgFAAgEgEQgEgEABgFIABgdIACgcIAAgjIABglQAAgFAEgEQADgEAHAAQAFAAAEAEQAEAEgBAFIAAAXIgBAWIAAAJIgBAKIAmgHQAUgEAPAAIACgkQAAgIAEgJQAGgNAHAAQAFAAAEAEQAEAEABAFIgBADQgCAHAAAGIAAAIIgBAJIgBAbIgBAaIABAVIACAWQgBAFgEAEQgDAEgGAAQgGAAgEgEg");
	this.shape_7.setTransform(33.2,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990066").s().p("AATBMQgFgEgBgGQgEgLgBgHIgKg9QgGASgIAPQgLAYgDANIAAAFQAAAGgEAEQgGADgFAAQgHAAgFgEQgFgEAAgHIgDgLIgLguQgGgVgPgqIgBgFQAAgGAFgEQADgDAGAAQAIAAAEAGQADAEACAJQAKAbAMAzQAIgTAIgYQAGgVAEgJQALgVAIAAQAJAAAEAKQACAFADANIACAUQACARAKAqQALgYARgsIAGgSQACgKAFgHQAEgHAIAAQAGAAAEAEQAEAEAAAFIgEALIgDAKIgGARIgSAnIgSAqIgHARQgEAIgKAAQgFAAgFgDg");
	this.shape_8.setTransform(14.9,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#990066").ss(1,1,1).p("AgIgDIAFAGIAMgG");
	this.shape_9.setTransform(97.9,91.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF3300").ss(2,1,1).p("ALpCfI3RAAIAAk9IXRAAg");
	this.shape_10.setTransform(74.5,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990066").s().p("AgIgCIARAAIgMAGg");
	this.shape_11.setTransform(97.9,91.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFD81").s().p("AroCfIAAk9IXRAAIAAE9g");
	this.shape_12.setTransform(74.5,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,151.1,155.8);


(lib.Lesson6WhatKind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		playSound("SE3questions");
	}
	this.frame_12 = function() {
		playSound("AnAdjanswersWHATKIND");
	}
	this.frame_67 = function() {
		playSound("SEWhichOne");
	}
	this.frame_71 = function() {
		playSound("HMMM");
	}
	this.frame_83 = function() {
		playSound("Evanwhatkind1");
	}
	this.frame_107 = function() {
		playSound("bell_chord_1");
	}
	this.frame_115 = function() {
		playSound("A");
	}
	this.frame_118 = function() {
		playSound("Beatlebugcar");
	}
	this.frame_159 = function() {
		playSound("bell_chord_2");
	}
	this.frame_170 = function() {
		playSound("A");
	}
	this.frame_173 = function() {
		playSound("convertiblecar");
	}
	this.frame_212 = function() {
		playSound("bell_chord_3");
	}
	this.frame_223 = function() {
		playSound("sprtsutiljeep");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(6).call(this.frame_12).wait(55).call(this.frame_67).wait(4).call(this.frame_71).wait(12).call(this.frame_83).wait(24).call(this.frame_107).wait(8).call(this.frame_115).wait(3).call(this.frame_118).wait(41).call(this.frame_159).wait(11).call(this.frame_170).wait(3).call(this.frame_173).wait(39).call(this.frame_212).wait(11).call(this.frame_223).wait(32));

	// Layer 1
	this.instance = new lib.AnAdjAnswersWHATKIND("synched",0);
	this.instance.setTransform(176.4,25.4,1,1,0,0,0,155.1,30.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsB/QgHgFABgIQAAgKAFgJQAGgJAKAAQAQAAAAAUQAAAKgEAHQgGAJgIAAQgIAAgFgFgAgiA9QgFgFAAgHQAAgLAWgSIAmgdQAXgTAAgPQgBgUgSgRQgSgQgSAAQgLAAgRALQgQALgEAAQgHAAgFgFQgFgGAAgIQAAgNAagNQAYgMAPAAQAgAAAcAbQAcAbAAAiQAAAZgQASQgKALgZASQgaATgJAMQgGAHgHAAQgGAAgGgGg");
	this.shape.setTransform(280.1,139.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0CJQgUgEgKgIIgBAAQgIAAgFgFQgEgFAAgHIABg2IACg2IgBg6IgBg8QAAgGAHgIQAIgIAHAAQAEAAAXALQAaAOAFABQAuARAiAhQAoApAAAuQAAAegNAaQgOAcgYAQQgaASgwAAQgMAAgQgEgAg/guIAAAvIgDBdIAEACQAPAKAXAAQAlAAASgMQAQgLAKgSQAKgUAAgVQAAgug1giQgPgLg/gcg");
	this.shape_1.setTransform(259.5,139.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhyCFQgFgGAAgHIACgWIABgVIAAggIABggIgBggIAAgiIgCggIgCggQAAgIAHgGQAGgHAJAAQAJAAANAUQArBAAhAqQAnAwAxAuIAAgWIgBgWQAAhJgGgsIgEgSQgEgMAAgGQAAgUASAAQAeAAAABvIAAA3IgBA4QAAAJgDATQgCARgQAAQgJAAgNgMQhGhChYh6IgBAnIAAAlIAAAqIABArQAAAugSAAQgJAAgGgGg");
	this.shape_2.setTransform(232.5,139);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhKB9QgFgFAAgHQAAgHAFgGQAFgFAHAAQALAAAZgDQACgOAAgSIgBgdIgBgcQAAgmAFg7IgWABIgWAAQgIAAgFgFQgEgFAAgHQgBgQARgCQANgBAmAAQAgAAA0AHQAOACAAARQABAIgGAEQgGAEgGAAQgLAAgRgCIgbgDQgEAxAAAsIABAdIAAAeIgBAdIA2gBQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAIgcABIgdAAQgJAAgXADQgXADgLAAQgHAAgFgFg");
	this.shape_3.setTransform(208.9,139.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhRCDQgGgHAAgIQABgoAChOQADhPAAgoQAAgIAEgFQAFgFAIAAQAHAAAFAFQAEAFAAAIIgCAzIgCA0QAYgWAcggIAvg5QAGgHAIAAQAGAAAGAFQAEAFABAIQAAALgsAxQgfAhgeAeQAUAWAqAoIASAPQAKAHALAEQAOAFAAAMQAAAGgEAFQgFAHgHAAQgaAAguguIgzgzIAAACIAABaQAAARgPAAQgKAAgFgJg");
	this.shape_4.setTransform(190.3,139.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLB9QgFgFgBgHIABgIIABgIIgBgZIgBgZQAAgZgEgqQgEgwgBgVIgPABQglAAgWgGQgOgEAAgNQABgHAEgFQAFgGAIAAIAbADQARACALAAIAfAAIAdAAIAoABIAnACQAGAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgGAAIgngCQgagCgOABIgMAAQABAXAEA1QADAwABAbIABASIABASQAAAMgEAIQgEAMgKAAQgFAAgGgFg");
	this.shape_5.setTransform(157.1,138.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA7BYQgEgPgHgnQgSADgcAGIgrAJQgJAXgUArQgGAJgJAAQgHAAgFgFQgGgFAAgHQAAgIAag2QgDgFAAgGQAAgOARgDQATgjAegwQAnhAAJAAQAOAAAFASIALA6IAZB1IAKAbQAFAOAAAEQAAAHgFAFQgGAFgHAAQgPAAgMgogAgVAMQAVgFAogHIgOhBg");
	this.shape_6.setTransform(130.6,139.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIAAgbIgBgcIACgpIABgpQAAgHAFgFQAFgEAHAAQAHAAAEAEQAFAFAAAHIgCApIgCApIACAqIBIgMQArgJAeAAQACgYAAgyQAAgNAEgNQAGgSAKAAQAGAAAFAFQAGAEAAAHIgCAHQgCAIAAANIAAAQIAAAPQAAARgDAiQgDAgAAARIACAnIACAnQAAAHgFAFQgEAEgHAAQgHAAgFgEQgFgFAAgHIgCgnIgCgnIABgaQgdABgpAIIhIAOQAAAQgDAcQgDAcAAAQQAAAHgFAFQgEAEgHAAQgHAAgFgEg");
	this.shape_7.setTransform(104.9,139);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAmCGQgHgFAAgIQgIgVgCgNIgOhJQgHgsgCgcQgPA4gSAlQgUAugGAZQACAEAAAEQAAAIgHAFQgGAEgIAAQgWAAAAgUIgGgWIgThUQgLgogbhPIAAgHQAAgQARAAQALAAAHAMQACAGAKAdQAKAfAKAsIAQBKQATgrASg7QALglAGgOQAPgmANAAQALAAAFAMQAHAPAGA3QADAcAJAmIAPBDQAWg3AihcIAJggQAFgUAHgLQAHgKAJAAQARAAAAARQAAADgFAOIgGATIgKAeIgzB6QgHAUgRAnQgGALgNAAQgHAAgGgEg");
	this.shape_8.setTransform(73.8,139.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAOQgGgGAAgIQAAgHAGgGQAGgHAIAAQAIAAAGAHQAHAGAAAHQAAAIgHAGQgGAHgIAAQgIAAgGgHg");
	this.shape_9.setTransform(235.4,100.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAOQgGgGAAgIQAAgHAGgGQAGgHAIAAQAIAAAGAHQAHAGAAAHQAAAIgHAGQgGAHgIAAQgIAAgGgHg");
	this.shape_10.setTransform(226.7,100.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAOQgGgGAAgIQAAgHAGgGQAGgHAIAAQAIAAAGAHQAHAGAAAHQAAAIgHAGQgGAHgIAAQgIAAgGgHg");
	this.shape_11.setTransform(218,100.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIBkQgFgFAAgHQAAgVgEgoQgFgnAAgVQAAgSgFgKQgMAGgMAMIgUAXIgJAKIgCAdIgCAdIACAPIACANQAAAHgFAFQgGAEgHAAQgTAAAAgrIACgfIACgdIgCgbIgCgbQAAgnASAAQAHAAAFAGQAGAGAAAHIgBAKIgBAKIAAASQAJgSARgPQASgPAMAAQAbAAAIAbQAJgNANgGQANgGARAAQAcAAALAfQACAGAFAqQAFAbAHBFQABAGgFAFQgGAFgHAAQgOAAgCgPIgHg1IgFgzQgCgMgEgLQgGgPgHAAQgGAAgRAKQgRAKgFAGQAAAQABAQIAFAsQADAbAAASQAAAHgEAFQgFAFgHAAQgGAAgEgFg");
	this.shape_12.setTransform(200.1,92.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIBkQgFgFAAgHQAAgVgEgoQgFgnAAgVQAAgSgFgKQgMAGgMAMIgUAXIgJAKIgCAdIgCAdIACAPIACANQAAAHgFAFQgGAEgHAAQgTAAAAgrIACgfIACgdIgCgbIgCgbQAAgnASAAQAHAAAFAGQAGAGAAAHIgBAKIgBAKIAAASQAJgSARgPQASgPAMAAQAbAAAIAbQAJgNANgGQANgGARAAQAcAAALAfQACAGAFAqQAFAbAHBFQABAGgFAFQgGAFgHAAQgOAAgCgPIgHg1IgFgzQgCgMgEgLQgGgPgHAAQgGAAgRAKQgRAKgFAGQAAAQABAQIAFAsQADAbAAASQAAAHgEAFQgFAFgHAAQgGAAgEgFg");
	this.shape_13.setTransform(172.9,92.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIBkQgFgFAAgHQAAgVgEgoQgFgnAAgVQAAgSgFgKQgMAGgMAMIgUAXIgJAKIgCAdIgCAdIACAPIACANQAAAHgFAFQgGAEgHAAQgTAAAAgrIACgfIACgdIgCgbIgCgbQAAgnASAAQAHAAAFAGQAGAGAAAHIgBAKIgBAKIAAASQAJgSARgPQASgPAMAAQAbAAAIAbQAJgNANgGQANgGARAAQAcAAALAfQACAGAFAqQAFAbAHBFQABAGgFAFQgGAFgHAAQgOAAgCgPIgHg1IgFgzQgCgMgEgLQgGgPgHAAQgGAAgRAKQgRAKgFAGQAAAQABAQIAFAsQADAbAAASQAAAHgEAFQgFAFgHAAQgGAAgEgFg");
	this.shape_14.setTransform(145.7,92.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIAAgbIgBgcIACgpIABgpQAAgHAFgFQAFgEAHAAQAHAAAEAEQAFAFAAAHIgCApIgCApIACAqIBIgMQArgJAeAAQACgYAAgyQAAgNAEgNQAGgSAKAAQAGAAAFAFQAGAEAAAHIgCAHQgCAIAAANIAAAQIAAAPQAAARgDAiQgDAgAAARIACAnIACAnQAAAHgFAFQgEAEgHAAQgHAAgFgEQgFgFAAgHIgCgnIgCgnIABgaQgdABgpAIIhIAOQAAAQgDAcQgDAcAAAQQAAAHgFAFQgEAEgHAAQgHAAgFgEg");
	this.shape_15.setTransform(118.7,88.2);

	this.instance_1 = new lib.beetlebug("synched",0);
	this.instance_1.setTransform(148,328.4,1,1,0,0,0,139.1,22.9);

	this.instance_2 = new lib.convertiblecar_1("synched",3);
	this.instance_2.setTransform(148,328.4,1,1,0,0,0,139.1,22.9);

	this.instance_3 = new lib.sportsutilitycar("synched",4);
	this.instance_3.setTransform(148,328.4,1,1,0,0,0,139.1,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},6).to({state:[]},56).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},36).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},55).to({state:[{t:this.instance_3}]},51).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.26,scaleY:1.26,x:196.8,y:32.8},6).to({_off:true},56).wait(193));

	// Layer 5
	this.instance_4 = new lib.WHATKIND("synched",0);
	this.instance_4.setTransform(134,216.2,0.652,0.652,0,0,0,71.8,99.2);
	this.instance_4._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ao6FiQgEgEAAgCQAAgGgDgFQgDgGAAgGQAAgFACgDIABgEQATgDAIAJQAHAFgBAKQAAAFgEAIQgGAMgKAAQgCAAgEgFgAoFEWQAAgJgDgRIgDgVQAAgWAKgGQAJgEANAIQANAIAJAQQALARAAAPQAAAHgCAAIgBABQgWACgPAEIgQADgAgtDfQgQgYgPAAQgQAAgDAHIgDANQgHAThRABQgXAAgMgXQgKgYgFgFQgIgBgDAHQgFAGgNAAIhZADQgBgRgIgQQgKgWgMABIgJAKQgJAKgHgBIgdAAQgDgEgIgTIg0gZQgXgKgKgIQgNgJgFgMQgEgMAAgTQAAgEADgFQAEgJADgIIAUgDQAHgKAAgLIgIgeQgIgdAAgOQAAgTABgDQADgHASgUIAVgBQAEABAGACQAFACACAAIgCgjQAAgbAFgRQAQg3BJAAQAKAAAJALQAIALAEAAQAFAAABgBIAAgCIADgbQAEgXAGgPQAVgzA4AAIANARQAOAQAFAAIAtgTQAxgUAZgCIBQAAIALAaQAIASAHAFIAQgHIAMgFID1AAQAKAKgBAXQAAAXAEAFIADgCIABgDIDKAAQAFASAHAHQAFAFAAAIQAAAJgGANQgHANABADIAAAIIABABQAfgEAdApQAJAPAIARQAGAOAAAFQAAASgUAZIgUAWIAAAHIABgBQAbgCAHARQAEAHgCAIQAAAfgUAgQgbAugxgBQgLAAgTgNIgSgPIgDAFIgBACIABASQAAAPgFAMQgRAjhHAAQgMAAgGgIQgEgIgFAAIgnAlQgpAkgMAAQgHAAg4gbIg3gcQgUAQgXASQgtAjgYAAQgRAAgRgYg");
	this.shape_16.setTransform(61.4,172.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ApJFgIgDgNIAAgHQAAgMADgJQAFgNAIAAQAVAAAJANQAGAKAAAMQAAAJgHAOQgIAPgIAAQgTAAgHgTgApBE4IgBAEQgCADAAAGQAAAFADAGQADAGAAAFQAAACAEAEQAEAFACAAQAJAAAHgMQAEgIAAgFQAAgJgGgGQgGgHgMAAIgJABgAoNEDIgGgeQAAgbAMgLQAMgKAQAHQAQAHAMASQAMAVAAAaQAAAOgHAJQgWABgLAEIgLAEQgNAAgKghgAoBDKQgKAGAAAWIADAVQADARAAAJIADADIAQgEQAPgEAWgCIABgBQABAAAAgGQAAgQgKgRQgJgPgNgJQgJgFgHAAQgDAAgDABgAgyDqIgMgRQgHgHgIAAQgGAAgFAGIgJAOQgNAUgSAAQhbAAgPgRQgFgFABgLQABgNgCgFIgIACIgWALIhbgBIgJgZQgHgRgJgKIgJAKQgKAKgHAAIgfgCIgHgLIgGgLQg/gVgbgeQgVgYAAgfQAAgQABgDQACgFALgPIAWgEIABgCIABgFIgIgdQgIgcAAgSQAAgVACgEIAbgjIAOABQAOAAACABIACgkQACgZAHgSQAUg1A+AAIAVABQABAFAFAFQAFAFAEABIAHgYQAGgYAHgOQAXgzAsAAQAUAAAFAPIAEAKQAEAFAJAAQAEAAAigRQAsgRAxgEIAJAAIA9AAQASAaAHAWQAEgEAcgHID0ABQALAIADARIABAcIDKABIAXAcQABACAAASIAAATQgCAKgGAIQAcAEAcAnQAZAjAAAVQAAAQgFALQgGAOgTAWIAWAbQAEAFAAAHQAAAggTAkQgcA0gzAAQgMAAgRgIQgMgGgHgGQgFAXgLATQgWAlgmAAQgWAAgIgGQgIgGgPAAQgGAAghAeQgfAbgLANQgbgEgvgbIgrgaQgHAAgPALIgfAYQgtAjgcAAQgSAAgSgYgAgtDeQARAYARAAQAXAAAugjQAXgRATgRIA4AcQA4AcAHAAQAMAAApglIAnglQAEAAAFAIQAFAIANAAQBHAAARgjQAFgLAAgQIgBgSIAAgCIADgFIATAPQASAOAMAAQAxAAAbgtQAUghAAgeQABgJgDgHQgIgRgbACIAAABIgBgHIAVgWQAUgZAAgSQAAgFgGgOQgIgRgKgOQgcgpggADIgBgBIAAgHQAAgEAGgNQAHgNAAgJQAAgHgFgGQgHgGgFgTIjKAAIgBADIgDADQgEgGAAgXQABgWgLgKIj1AAIgLAEIgQAHQgHgFgIgSIgMgZIhPgBQgZACgxAUIgtATQgGAAgNgQIgNgRQg4AAgVAzQgHAQgDAXIgDAaIAAACQgBACgFAAQgEAAgJgLQgJgMgKAAQhIAAgQA3QgFASAAAaIABAjQgBABgFgDQgGgCgEAAIgVABQgSATgDAHQgBAEAAASQAAAOAIAdIAIAeQAAAMgHAJIgVADQgCAJgFAIQgDAFAAAEQAAAUAFAMQAFALAMAJQALAIAXALIA0AZQAIASADAEIAcAAQAIABAIgKIAJgKQANAAAKAWQAHAQACAQIBZgCQANAAAEgHQAEgHAIABQAFAFAJAZQAMAWAXAAQBRAAAIgUIADgNQADgHAQAAQAOAAARAYg");
	this.shape_17.setTransform(61.4,173);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Aq6GKQAAgGgDgGQgFgHAAgGQABgHACgDQAZgIAJAKQAIAHAAALQAAAFgFAJQgIAOgMAAQgMgLAAgCgAp5EeIgDgZQAAgZAMgGQALgFAQAKQAPAJALASQAOATAAASIgEAIQgaADgTAEIgTAEIgIgggAg3D9QgUgbgRAAQgUAAgEAHIgEAPQgIAWhjAAQgcAAgOgZQgMgbgGgHQgJAAgFAHQgGAIgPAAIhsACQgCgSgJgSQgMgZgQAAIgLAMQgJALgLgBIgiAAQgDgFgKgUIg/gdQgcgMgNgJQgPgKgGgNQgGgNAAgXQAAgEAEgGQAFgJADgLIAZgCQAJgLgBgOIgJgiQgKggAAgRQAAgUACgEQAEgJAVgVIAZgCQASAGACgBIgCgoQAAgdAIgVQATg9BXAAQAMAAALANQALAMAFAAQAFAAACgCIAAgCQABgRADgNQAEgaAHgSQAag5BEAAQABAAAPASQAQATAHAAIA3gWQA8gWAegCIBhAAIAOAdQAJAUAJAGIATgIIAPgFIEqAAQAMALgBAZQAAAbAFAGIAEgDIAAgDID2AAQAGAVAJAHQAFAHABAIQAAAKgIAPQgHAPAAAEIAAAIIABABQAmgDAiAuQANAQAJATQAIARgBAFQAAAVgYAcIgZAYIABAJIAAgBQAhgCAJATQAEAHgBALQAAAigZAlQggAzg8AAQgOAAgWgPIgXgRIgEAFIAAACIABAVQAAASgGAMQgVAphWAAQgPAAgHgKQgFgJgFAAIgwAqQgyAqgPAAQgIAAhEggIhEggQgXAUgcATQg4AogcAAQgVAAgVgbg");
	this.shape_18.setTransform(74.1,167.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ArHGPQgDgHgBgIIAAgIQAAgOAEgKQAFgPALAAQAZAAALAQQAHAKAAAOQAAAKgJAQQgJASgJAAQgYAAgIgWgAq/FmQgDADAAAHQAAAGAEAHQAEAGAAAGQAAACAMALQALAAAIgOQAGgJAAgFQAAgLgIgHQgFgFgKAAQgIAAgLADgAp+EmIgIgiQAAgfAPgMQAOgMAUAIQAUAIAOAVQAPAXAAAeQAAAQgJAJQgbACgNAEIgOAFQgQAAgLglgApwDlQgMAGAAAZIADAZIAIAgIATgEQASgEAbgDIADgIQAAgSgNgTQgLgSgPgJQgLgHgIAAQgEAAgEACgAg9EJIgPgTQgJgIgJAAQgHAAgHAHIgLAPQgPAXgWAAQhuAAgSgTQgGgGAAgMQABgPgCgGIgKACIgbANIhugBIgLgdQgJgTgKgLIgLALQgMALgJAAIglgBIgJgNIgHgMQhNgYghgjQgZgaAAgjQAAgTABgDQACgGAOgRIAagEQADgJgKggQgJghAAgUQAAgYACgEIAhgnIARAAQARABACABIACgpQADgdAJgUQAYg8BLAAIAZABQACAFAGAGQAGAGAFABQACgDAHgYQAHgbAJgRQAbg5A1AAQAZAAAGARQADAJACADQAFAFAKAAQAGAAApgTQA1gUA8gEIALAAIBKAAQAWAeAJAYQAFgEAhgIIEpABQAOAJADATIABAgID2ABIAcAgQACACAAAUIgBAWQgCALgIAKQAjAEAhAtQAfAnAAAYQAAASgGANQgIAPgWAZIAbAfQAFAGAAAIQAAAkgYApQgiA7g+AAQgPAAgUgJQgPgHgIgHQgHAbgNAVQgaAqgvAAQgbAAgJgHQgKgGgSAAQgIAAgoAhQglAfgNAPQghgFg6gfIg0gdQgJAAgSAMIglAbQg3ApgjAAQgWAAgVgcgAg3D8QAUAbAWAAQAcAAA4goQAcgTAXgUIBDAgQBFAgAIAAQAPAAAxgqIAwgqQAFAAAGAJQAHAKAPAAQBWAAAVgpQAGgMAAgSIgBgVIAAgCIAEgFIAWARQAXAPAOAAQA7AAAhgzQAYglAAgiQACgKgEgIQgJgTghACIgBABIAAgJIAZgYQAYgcAAgVQAAgFgHgRQgJgTgNgQQgigugmADIgCgBIAAgIQAAgEAIgPQAHgPAAgKQAAgIgGgHQgIgHgGgVIj2AAIgBADIgDADQgFgGAAgbQABgZgNgLIkqAAIgOAFIgTAIQgJgGgKgUIgOgdIhgAAQgeACg8AWIg3AWQgHAAgQgTQgPgSgBAAQhEAAgaA5QgHASgEAaQgDANgBARIAAACQgCACgGAAQgFAAgKgMQgLgNgMAAQhXAAgUA9QgHAVAAAdIACAoQgCABgSgGIgZACQgWAVgDAJQgCAEAAAUQAAARAKAgIAJAiQAAAOgIALIgZACQgDALgGAJQgDAGAAAEQAAAXAGANQAGANAPAKQAMAJAcAMIA/AdQAKAUAEAFIAiAAQAKABAKgLIALgMQAQAAAMAZQAIASADASIBsgCQAPAAAGgIQAEgHAKAAQAGAHALAbQAPAZAcAAQBiAAAJgWIAEgPQAEgHAUAAQARAAAUAbg");
	this.shape_19.setTransform(74.1,168);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("As2G5QAAgGgEgIQgEgHgBgHQAAgIADgDQAcgIANAKQAIAIAAAMQAAAFgGALQgKAQgNAAQgOgMAAgDgArpFAQgEgVAAgGQAAgdAOgGQANgGATALQASALANATQAPAWAAATIgEAKQgfADgWAEIgVAFQgFgOgFgWgAhBEbQgYgegUAAQgXAAgEAIQgDAFgCAMQgKAZh1AAQggAAgSgcQgNgfgIgIQgKAAgGAIQgHAKgRgBIiAACQgCgUgLgUQgOgbgTAAIgMAMQgLANgMgBIgpAAQgEgGgMgXIhKgfQghgOgPgKQgSgLgGgPQgIgPAAgZQAAgFAEgGQAHgLAEgMIAdgCQAKgNAAgOIgLgnQgMgkAAgTQABgXACgEQADgKAbgXIAdgCQAVAHADgCIgCgsQgBgiAIgWQAXhFBnAAQAOAAANAPQANANAFAAQAIAAABgCIAAgCIAEgiQAFgdAKgUQAehABQAAIASAVQATAUAJAAIBAgYQBGgZAkgDIBxABIARAgQAMAYAKAFIAXgJIAQgFIFfAAQAPANAAAcQgBAdAFAHIAFgCIABgFIEiAAQAGAYAKAJQAHAGABAJQAAAMgJARQgKAQABAEIAAAKIABABQAtgEApA0QAOATALAUQAJASgBAHQAAAXgcAgIgdAbQAAAJABAAIAAgBQAmgCAMAVQAFAJgDALQAAAngcApQgnA6hGAAQgRAAgagSIgagTQgDADgCADIgBADIACAWQAAAVgHAOQgYAshmABQgSAAgHgKQgIgLgFAAQgbAYgeAXQg6AvgRgBQgKAAhQgjIhQgkQgbAWghAWQhCAtgiAAQgZgBgYgeg");
	this.shape_20.setTransform(86.8,162.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AtFG/QgDgIgCgJIAAgJQAAgPAFgMQAGgQAMAAQAeAAAMARQAJAMAAAPQAAALgKASQgLAUgLAAQgbAAgKgYgAs8GRQgDADAAAIQAAAHAEAHQAFAHAAAHQAAACAOAMQANAAAKgPQAGgLAAgFQAAgMgIgIQgHgGgMAAQgKAAgMAEgArwFJIgJgmQAAgjASgOQAQgMAYAJQAXAIAQAXQASAbAAAhQAAASgKALQggABgQAFIgPAFQgTAAgOgpgArfEBQgOAGAAAcQAAAGAEAWQAEAVAFAPIAWgFQAWgFAfgCIAEgKQAAgUgPgVQgNgUgSgKQgNgHgJAAQgGAAgEACgAhIEpQgOgSgEgDQgKgKgKAAQgJAAgIAIIgNARQgSAagZAAQiDAAgVgVQgHgHABgOQABgRgDgGIgLADIggAOIiBgCIgNgfQgLgWgMgNIgNANQgOANgKAAIgtgCIgKgOIgIgOQhbgbgngnQgdgdAAgoQAAgUABgEQACgHARgTIAfgEQADgLgLgjQgMgkAAgXQAAgbADgEIAngtIAUABIAXACIACguQADggAKgXQAdhDBZAAIAdACQACAFAHAHQAHAGAGABQACgDAIgbQAJgeAKgSQAghBA/AAQAdAAAHAUIAGAMQAFAHANAAQAHAAAwgWQA+gWBHgFIANAAIBYAAQAZAhAKAcQAHgFAngJIFdACQAQAKAEAVQABADABAgIEiACIAgAjQACADAAAWQAAAVgBADQgCANgJALQApAFAnAxQAkAsAAAbQAAAVgHAOQgJARgaAcIAfAjQAGAGAAAJQAAAogcAuQgoBDhJAAQgRAAgYgLQgSgIgJgHQgIAdgQAYQgeAvg4AAQgfAAgMgHQgLgIgVAAQgJAAgvAmQgsAigQARQgmgGhEgiIg+ghQgKAAgVAOIgsAfQhAAtgqAAQgaAAgZgfgAhBEaQAYAeAZAAQAiAABCgsQAhgWAbgWIBPAkQBQAjAKAAQASAAA6guQAegYAbgXQAFAAAIAKQAHAKASAAQBlAAAYgtQAIgOAAgUIgCgXIABgCQABgEADgCIAbATQAaARARAAQBGAAAng5QAcgpAAgnQACgLgFgJQgLgWgmADIgBABQgBgBAAgIIAegcQAcgfAAgXQAAgHgIgSQgLgVgOgSQgpg0gtAEIgCgBIAAgKQAAgEAJgRQAJgQAAgMQAAgJgHgHQgKgIgGgYIkiAAIgBAEIgFADQgGgHABgdQABgcgPgNIlfAAIgQAFIgXAJQgLgGgLgXIgRggIhygBQgjADhGAZIhBAYQgIAAgTgVIgTgUQhQAAgeA/QgJAVgFAdIgEAiIAAACQgCACgHAAQgGAAgMgOQgNgOgOAAQhnAAgXBFQgIAWAAAiIACAsQgCABgVgGIgeABQgaAYgEAKQgCAEAAAXQAAASAMAlIALAmQAAAPgKAMIgdADQgEAMgHAKQgEAHAAAFQAAAZAHAPQAHAPASALQAPAKAhAOIBKAfQAMAXAEAFIApAAQALACAMgNIAMgNQATAAAOAcQAKAUADAUICAgCQARAAAHgJQAGgIAKAAQAHAHAOAgQARAbAhAAQB0AAALgYQACgNACgEQAFgIAXAAQAUAAAYAeg");
	this.shape_21.setTransform(86.8,163);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AuyHoQAAgIgFgIQgFgIAAgHQAAgJADgDQAhgKAOAMQAKAIAAAOQAAAGgIAMQgKARgQAAQgQgOAAgCgAtZFiQgFgYAAgHQAAgeARgIQAOgHAWANQAVALAPAWQARAXAAAXIgEAKQgkADgZAGIgZAFQgGgRgFgXgAhLE5QgbgigXAAQgbAAgGAJQgCAFgCAOQgNAciFAAQgmAAgUgfQgPgjgIgHQgNgBgHAJQgHAKgVAAIiSADQgDgXgMgWQgRgfgVAAIgOAPQgOAOgNgCIgvAAQgFgGgNgZIhVgjQgngQgQgKQgVgNgIgQQgIgRAAgcQAAgFAFgHQAHgMAFgMIAhgEQAMgNAAgRIgOgqQgMgpAAgUQAAgZACgFQAFgLAegbIAhgBQAZAHADgBIgDgxQAAglAJgZQAbhMB1AAQASAAAOAPQAOAQAHAAQAIAAACgCIAAgDQACgVADgQQAGggAKgXQAjhHBcAAIAVAXQAXAXAJAAIBKgbQBRgbAogDICEABIATAkQAMAZANAHIAbgLIASgFIGUAAQARAOAAAfQgBAgAGAIIAFgDIABgEIFOAAQAHAZAMAKQAIAHAAAKQAAAOgKASQgLASABAFIAAAKIABACQA0gFAvA6QARAUAMAXQAKAUAAAHQAAAaghAiIgiAfQAAAJABABIABgBQAsgDAMAYQAHAKgDAMQAAArghAuQgtA/hQAAQgTAAgegTIgfgVQgEADgBADIAAADIABAZQAAAXgJAPQgbAyh1AAQgVAAgIgLQgIgLgHAAIhBAzQhDA0gVAAQgLAAhcgoIhcgnQgeAYgmAZQhMAxgnAAQgeAAgbgig");
	this.shape_22.setTransform(99.5,157.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AvEHuQgDgIgBgLIgBgJQAAgRAFgNQAIgSAOAAQAhAAAPATQAKANAAARQAAANgLATQgNAWgNAAQgfAAgMgbgAu5G8QgDADAAAJQAAAHAFAIQAEAIAAAIQAAACARAOQAQAAAKgRQAIgMAAgGQAAgOgKgIQgIgHgNAAQgLAAgPAFgAthFsIgLgqQAAgnAVgPQATgNAbAJQAaAJATAaQAVAeAAAkQAAAUgMAMQglACgSAFIgSAFQgVAAgQgtgAtOEcQgQAIAAAeQAAAHAFAYQAFAXAFARIAagFQAZgGAkgDIAEgKQAAgXgRgXQgPgWgWgLQgOgJgLAAQgGAAgFADgAhTFJIgUgYQgMgLgMAAQgKAAgJAJIgPATQgVAcgdAAQiWAAgZgXQgIgHABgPQABgTgDgHQgJABgEACIgkAPIiVgBIgPgjQgMgYgPgOIgOAOQgQAOgMAAIgzgCIgMgQIgKgPQhogegtgqQgighAAgsQAAgWACgFQADgHATgVIAjgFQAEgMgNgnQgNgoAAgaQAAgdADgFIAtgxIAWABQAYAAADACIADgzQAEgjALgaQAhhJBmAAIAiABQACAGAIAHQAIAHAHACQADgEAJgeQAKghALgUQAlhIBJAAQAiAAAIAWQAEALACADQAGAHAPAAQAIAAA3gYQBIgYBRgFIAOAAIBmAAQAcAkANAeQAIgEAtgLIGSACQASALAFAXIABAoIFOACIAlAmQACAEAAAYIAAAbQgDAOgLAMQAvAGAuA2QApAxAAAdQAAAXgJAQQgJATgfAeIAkAnQAHAHAAALQAAAsggAzQgtBJhUAAQgVAAgbgMQgVgIgKgIQgJAggTAbQgjAzg/AAQgkAAgOgIQgNgIgYAAQgLAAg2ApQgyAmgSATQgtgGhOgmIhGglQgMAAgZAQIgyAiQhKAxgwAAQgeAAgdghgAhLE4QAbAiAeAAQAnAABLgxQAmgZAfgYIBcAnQBcAoALAAQAUAABEg0IBBgzQAGAAAJALQAIALAUAAQB1AAAcgyQAJgPAAgXIgCgZIABgDQABgDAEgDIAeAVQAfATATAAQBQAAAtg/QAhguAAgrQACgMgGgKQgMgYgsADIgBABQgBgBAAgJIAhgfQAigiAAgaQAAgHgKgUQgMgXgRgUQgvg6g0AFIgCgCIAAgKQAAgFAKgSQALgSAAgOQAAgKgIgHQgMgKgHgZIlOAAIgBAEIgFADQgHgIABggQABgfgRgOImUAAIgTAFIgaALQgNgHgNgZIgTgkIiDgBQgoADhRAbIhLAbQgJAAgWgXIgWgXQhcAAgiBHQgLAXgFAgQgDAQgCAVIAAADQgCACgIAAQgHAAgOgQQgPgPgRAAQh2AAgaBMQgJAZAAAlIACAxQgCABgZgHIgiABQgdAbgFALQgDAFAAAZQAAAUANApIANAqQAAARgLANIgiAEQgEAMgHAMQgFAHAAAFQAAAcAIARQAIAQAUANQARAKAmAQIBWAjQANAZAFAGIAvAAQANACANgOIAPgPQAVAAARAfQAMAWADAXICSgDQAVAAAHgKQAHgJAMABQAIAHAQAjQAUAfAmAAQCFAAANgcQACgOACgFQAFgJAbAAQAXAAAcAig");
	this.shape_23.setTransform(99.5,158);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AwvIWQAAgHgFgJQgFgJAAgIQAAgKADgEQAlgKAQANQALAJAAAPQAAAGgIAOQgMASgSAAQgTgOAAgEgAvKGEQgFgaAAgIQAAghASgIQARgIAYAOQAYANARAXQATAaAAAYIgEAMQgpADgcAGIgdAGQgGgSgGgagAhVFXQgfglgaAAQgfAAgFAKQgEAGgCAPQgOAeiXAAQgrAAgWgiQgSglgJgJQgOgBgIALQgIAKgXAAIimADQgDgZgOgYQgSghgZgBIgQARQgPAPgPgDIg1AAQgGgGgOgbIhhgnQgrgQgTgMQgXgOgKgSQgJgSAAgfQAAgFAGgIQAIgNAFgOIAmgEQANgOAAgTIgPgvQgPgsAAgWQAAgcADgFQAGgMAhgdIAmgBQAcAHADgBIgCg2QgBgoAKgcQAehTCGAAQATAAARARQAQARAHAAQAKAAACgDIAAgCIAFgpQAGgjANgZQAmhOBpABIAYAZQAZAZALgBIBUgdQBbgeAugDICUABIAWAnQAOAcAPAIIAegMIAVgGIHJAAQATAQgBAhQgBAkAIAIIAFgDIACgFIF5AAQAIAcANALQAKAIAAALQAAAOgMAVQgMATAAAGIAAALIADACQA6gFA1A+QATAWAOAaQALAWAAAIQAAAcgmAmQgmAgAAABQAAALABAAIABgBQAygDAOAaQAHALgDAOQAAAvglAyQgyBFhbAAQgWAAgigUIgjgYQgEADgBAEIgBADIACAcQAAAZgKAQQggA3iEAAQgXAAgJgMQgKgNgHAAIhJA5QhNA4gWABQgNgBhogrIhogrQgjAbgrAaQhWA2gsAAQghAAgfglg");
	this.shape_24.setTransform(112.2,152.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AxCIeQgEgKgBgLIgBgLQAAgSAGgOQAIgUAQAAQAmAAARAVQALAOAAATQAAAOgNAVQgOAYgPAAQgjAAgNgdgAw2HmQgDAEAAAKQAAAIAFAJQAFAIAAAIQAAADATAPQASAAAMgSQAIgOAAgGQAAgPgLgJQgJgIgPAAQgMAAgRAFgAvSGPQgMgxAAADQAAgqAXgRQAVgPAfALQAeAKAVAcQAXAgAAAoQAAAWgNANQgqACgUAGIgUAGQgZAAgRgygAu9E3QgSAJAAAhQAAAHAFAbQAGAaAGARIAdgFQAcgGApgDIAEgMQAAgYgTgaQgRgYgYgMQgQgJgNAAQgGAAgGACgAheFoIgXgaQgNgLgOAAQgLAAgKAKIgRAUQgYAfghAAQiqAAgbgZQgKgIABgRQACgVgEgHQgKABgEACIgpARIipgCIgRgmQgOgagQgQIgQAQQgTAPgNAAIg6gCIgNgRIgLgRQh2gggygvQgngkAAgwQAAgZACgEQADgJAVgXIAogFQAFgNgPgrQgPgsAAgcQAAggAEgGIAyg1IAaABQAaAAAEACIADg3QAFgoANgbQAlhRBzAAQAPAAAXACQADAGAJAIQAJAIAIABQADgEAKghQAMgkAMgWQAqhOBTAAQAmAAAJAXQAEANADADQAHAHAQAAQAJAAA/gaQBRgbBcgFIAQAAIBzAAQAgAoAOAhQAJgFA0gMIHGACQAVANAFAZQABAEABAnIF5ADIAqAqQADADAAAbIgBAeQgDAPgMANQA1AGAzA8QAvA1AAAgQAAAagKARQgLAUgiAiIApArQAHAHAAAMQAAAwgkA4QgzBQhfAAQgXAAgfgNQgYgJgMgIQgKAjgUAdQgoA4hIAAQgpAAgPgIQgPgJgbAAQgMAAg9AtQg5AqgVAUQgygHhYgpIhQgoQgNAAgcARQgkAYgVANQhUA2g3AAQghAAghglgAhVFWQAfAlAhAAQAsAABWg2QArgbAjgaIBoArQBoArANAAQAWAABNg4IBJg5QAHAAAKANQAJAMAXAAQCEAAAgg3QAKgRAAgYIgCgcIABgDQABgEAEgDIAjAXQAiAVAWAAQBbAAAyhFQAlgyAAgvQADgOgHgLQgOgagyADIgBABQgBgBAAgKQAAgBAmggQAmgmAAgcQAAgIgLgWQgOgagTgWQg1g/g6AFIgDgBIAAgLQAAgGAMgUQAMgUAAgOQAAgLgKgJQgNgKgIgcIl5AAIgCAFIgFADQgIgJABgjQABgigTgPInJAAIgVAGIgeALQgPgHgOgcIgWgnIiUgBQguADhbAeIhUAdQgLAAgZgZIgYgZQhpAAgmBOQgNAZgGAjIgFApIAAACQgCADgKAAQgHAAgQgRQgRgRgTAAQiGAAgeBTQgKAcABAoIACA2QgDABgcgIIgmACQghAdgGAMQgDAFAAAcQAAAWAPAsIAPAvQAAASgNAPIgmAEQgFAOgIAMQgGAJAAAFQAAAfAJASQAKASAXAOQATALArARIBhAmQAOAcAGAGIA1AAQAPACAPgPIAQgQQAZAAASAiQAOAYADAZICmgDQAXAAAIgLQAIgKAOABQAJAIASAmQAWAiArAAQCXAAAOgeQACgQAEgFQAFgKAfAAQAaAAAfAlg");
	this.shape_25.setTransform(112.2,153);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AyrJFQAAgIgFgKQgHgJAAgKQAAgKAEgEQAqgMARAPQANAKAAAQQAAAHgKAOQgNAUgTAAQgWgQAAgDgAw6GlQgGgcgBgHQABglAUgJQATgIAcAOQAaAPAUAZQAUAcAAAaIgFAOQgtADgfAGIghAGQgHgTgGgdgAhgF1QgigogdAAQgiAAgGALQgEAGgCAQQgQAhioAAQgvAAgaglQgUgpgKgJQgPgBgJALQgJAMgaAAIi5ADQgEgagPgbQgVglgaAAQgCAAgRARQgRARgRgDIg6AAQgHgGgRgeIhsgqQgwgSgVgNQgZgPgLgTQgKgUgBghQABgGAGgKQAKgNAFgPIAqgEQAPgQAAgVIgRgyQgQgwAAgZQAAgeADgGQAGgMAlggIArgCQAgAJADgCIgDg6QgBgsAMgeQAhhbCVAAQAVAAASATQATATAIAAQALAAACgDIAAgDQACgZAFgUQAGgmAOgbQArhUB0AAQACAAAaAcQAcAbALAAIBdggQBnghAzgDIClAAIAYArQARAeAQAIQANgFAUgHIAYgHIH9AAQAXARgCAlQgBAnAJAJIAGgEIACgFIGkAAQAKAfAOALQALAJAAAMQgBAQgNAVQgNAWABAGIAAAMIACACQBCgFA7BEQAVAYAOAcQANAYAAAJQAAAdgpAqQgrAjAAABQAAAMABABIABgCQA4gDAQAcQAHAMgDAPQAAAzgpA2Qg5BMhlAAQgYAAgmgXIgngZQgEADgCAFIgBADQgBAFADAZQAAAagLATQgjA8iUAAQgZAAgLgOQgKgNgJAAQgnAfgrAfQhUA9gaAAQgOAAh1gvIhzgvQgnAdgwAdQhgA6gyAAQgkAAgkgog");
	this.shape_26.setTransform(124.9,147.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AzAJMQgEgJgCgNIgBgLQABgUAGgQQAJgVASAAQArAAASAXQANAPAAAUQAAAPgOAXQgRAagQAAQgnAAgPgggAyzIQQgEAFAAAKQAAAJAHAJQAFAKAAAJQAAADAWAQQATAAANgUQAKgOAAgIQAAgQgNgKQgKgIgRAAQgNAAgTAFgAxDGxIgOgyQAAguAagSQAXgQAjALQAiALAXAfQAaAjABAsQAAAXgQAPQguACgXAGIgXAGQgbAAgTg2gAwsFSQgUAJgBAlQABAIAGAcQAGAcAHAUIAhgGQAfgHAtgDIAFgNQAAgagUgcQgUgagagOQgSgJgOAAQgIAAgHACgAhpGHIgZgcQgQgMgPAAQgNAAgKAKIgUAXQgbAhgkAAQi8AAgggbQgKgJABgSQACgWgEgJQgMACgEACIguASIi8gBIgTgqQgQgdgSgRIgSARQgVARgPAAIhAgCIgPgTQgKgPgCgDQiEgkg4gzQgrgnAAg0QAAgaACgGQADgIAZgaIAsgFQAEgPgQgvQgQgvAAgfQAAgjAEgGQAWgVAiglIAdABQAeABAEABIADg8QAFgqAPgfQAqhXB/AAIArABQADAIALAIQAJAIAKACQADgEALgkQANgnAOgYQAvhVBcAAQAqAAAKAZQAGAOADADQAHAIASAAQALAABGgcQBagdBmgGIATAAICAAAQAkArAPAkQAKgFA5gNIH8ACQAXANAFAcQACAEABArIGlADIAuAtQADAFABAdQAAAbgCAFQgDARgNAOQA7AHA6BAQAyA6AAAjQABAcgLATQgMAWgmAkIAtAvQAJAIAAANQAAA1goA8Qg6BXhqAAQgZAAgkgOQgZgKgNgJQgMAmgXAgQgsA9hRAAQgtAAgRgJQgRgKgeAAQgNAAhEAxQhAAugXAWQg4gIhjgtIhZgrQgPAAgfASIg/ApQheA7g8AAQgmAAglgpgAhgF0QAkAoAkAAQAyAABgg7QAwgdAngdIBzAvQB1AvAOAAQAaAABUg9QArgfAngfQAJAAAKAOQALANAZAAQCUAAAjg7QALgTAAgaQgDgZABgGIABgDQACgEAEgDIAnAZQAmAWAYAAQBlAAA5hLQApg2AAgzQADgPgHgMQgQgdg4AEIgBABQgBgBAAgLQAAgBArgkQApgpAAgeQAAgJgNgYQgOgbgVgYQg7hFhCAGIgCgCIAAgMQgBgGANgWQANgWABgQQAAgMgLgIQgOgMgJgeImlAAIgCAFIgGAEQgJgKABgmQACglgXgRIn9AAIgXAHQgVAGgNAGQgQgIgRgeIgYgrIilgBQgzAEhnAgIhdAgQgLAAgcgbQgagbgCAAQh0AAgrBUQgOAbgGAmQgFATgCAaIAAADQgCACgLAAQgIAAgTgSQgSgTgVAAQiVAAghBbQgMAeABAsIADA6QgDABgggIIgrACQglAfgGANQgDAGAAAeQAAAYAQAxIARAyQAAAVgPAPIgqAEQgFAPgKAOQgGAJgBAGQABAhAKAUQALATAZAQQAVAMAwATIBsApQARAeAHAHIA6AAQARADARgRQARgSACAAQAaAAAVAlQAPAbAEAaIC5gDQAaAAAJgLQAJgLAPAAQAKAJAUAqQAaAkAvAAQCoAAAQggQACgRAEgGQAGgKAiAAQAdAAAiAog");
	this.shape_27.setTransform(124.9,148.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("A0nJ0QAAgJgGgLQgHgJAAgLQAAgLAEgFQAugLATAPQAOAKAAASQAAAIgKAQQgPAUgWABQgXgSAAgDgAyrHHQgHgeAAgIQAAgoAXgJQAVgJAeAPQAdAQAWAbQAXAfAAAcIgGAOQgyAEgiAGIgkAHQgIgUgHgggAhqGUQgmgsggABQglgBgHALQgEAHgDASQgRAji6AAQg0AAgcgoQgWgsgMgKQgQAAgKAMQgKAMgdAAIjLADQgFgcgRgdQgXgogdAAQgCAAgTATQgSASgTgDIhBAAQgHgHgSggIh4gtQg1gUgXgOQgcgRgLgUQgMgWAAgjQAAgHAHgKQAKgPAGgQIAvgEQAQgRAAgXQAAgCgSg0QgSg1AAgZQAAghADgHQAHgNApgiIAvgCQAjAJADgBIgDg/QgBgwANggQAlhjClABQAXgBAUAVQAUAUAJAAQAMAAACgDIAAgDIAIgxQAHgpAPgdQAwhbCAAAQACAAAcAeQAgAdAMAAIBngiQBxgkA4gDIC3ABIAbAuQASAgASAJQAOgGAXgHIAagIIIyAAQAYATgBAoQgCApAKAKIAHgDIACgHIHQAAQALAiAPAMQAMAKAAANQAAAQgOAYQgPAYAAAGIABANIACACQBIgGBCBKQAXAaAQAeQAPAZAAAKQAAAggvAuQgvAlAAACQAAAMACABIABgCQA+gDARAeQAIAOgEAQQAAA3gtA6Qg+BShwAAQgbAAgqgYIgqgbQgFADgCAFIgCADIADAhQAAAcgMAUQgnBBijgBQgcABgMgOQgLgPgKgBQgrAigvAhQheBCgcABQgPgBiBgyIh/gzQgrAfg1AfQhqA/g3AAQgpAAgngqg");
	this.shape_28.setTransform(137.6,142.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("A0+J8QgFgLgCgNIgBgNQAAgVAIgRQAKgXATAAQAwAAAUAZQAOAQAAAWQAAAQgQAZQgSAcgSAAQgrAAgQgigA0vI7QgFAFAAALQABAKAGAKQAHAKAAAJQAAAEAWARQAWAAAPgVQALgQgBgIQAAgRgNgLQgLgIgUAAQgPAAgTAFgAy1HUQgOg5AAADQAAgxAcgUQAagRAmAMQAlAMAaAhQAdAmAAAvQAAAZgRAQQgzACgZAHIgZAHQgfAAgVg7gAybFuQgWAJAAAoQAAAIAGAfQAIAfAHAUIAkgGQAjgHAxgDIAGgPQAAgcgXgeQgWgcgcgPQgUgKgQAAQgIAAgIADgAh0GnQgWgZgHgFQgPgOgSAAQgOAAgLAMQgEACgSAWQgdAkgoAAQjRAAgjgdQgLgKABgUQACgYgEgJQgNACgFACIgzAUIjPgCIgWgtQgQgfgUgSIgUASQgXASgRAAIhGgCQgFgFgLgQIgPgTQiRgmg+g4QgvgqAAg4QAAgdACgFQAEgKAagbIAygGQAEgQgRgzQgSgzgBghQAAgmAFgGIA+g/IAgABIAlACIAEhAQAFgvAQggQAuhfCOAAQATAAAcACQADAIALAJQAMAJAJACQAEgFANgnQAOgqAPgaQA0hcBlAAQAvAAALAcQAGAOAEAEQAHAJAVAAQALAABOgfQBjggBxgGIAVAAICNAAQAoAvARAnQALgGA/gOIIwADQAaAOAFAeQACAEABAuIHRAEIA0AxQADAEAAAgQAAAdgBAFQgEATgOAPQBBAHA/BGQA4A+AAAmQAAAegLAVQgNAXgqAoIAyAyQAJAJAAAOQAAA5gsBBQhABfh1AAQgcAAgngQQgcgLgPgJQgMApgaAiQgwBChZAAQgyAAgTgKQgTgKggAAQgQAAhLA1QhGAxgZAYQg/gIhsgxQhggvgDAAQgQAAgiAUIhGAsQhoBAhDAAQgqAAgogsgAhqGSQAnArApAAQA3AABqg/QA1ggArgfIB/AzQCBAzAPAAQAcAABfhCQAugiAsghQAJAAALAPQAMAOAdAAQCiAAAnhAQAMgVAAgcIgCghIABgDQACgFAFgDIArAbQAqAYAaAAQBwAAA/hRQAtg7AAg3QADgQgIgNQgRgfg+AEIgBABQgBgBgBgMQABgBAugmQAvgtAAggQAAgKgOgaQgRgegXgaQhBhKhJAGIgCgCIAAgNQAAgGAOgYQAOgXAAgRQABgNgMgKQgQgMgKghInRAAIgCAGIgHAEQgJgLABgpQACgogYgSIozAAIgaAHQgXAHgOAGQgSgIgSghIgbguIi2gBQg5AEhxAjIhmAiQgNAAgfgdQgdgdgCAAQiAAAgvBaQgQAegHApIgHAwIAAADQgDADgLAAQgKAAgTgUQgVgUgXAAQilAAglBiQgNAgABAwIAEA/QgEABgjgJIgvACQgpAigGAOQgEAGAAAhQAAAaASA0QATA0gBADQAAAWgPARIgwAEQgFARgLAOQgHALAAAGQAAAkAMAVQALAVAdARQAWANA1AUIB4AtQATAgAGAHIBBAAQATADASgSQAUgTABAAQAdAAAYAoQAQAdAFAcIDMgDQAcAAAKgMQAKgMARAAQALAKAWAtQAcAnA0AAQC6AAASgjQACgSAFgGQAGgLAmAAQAgAAAlArg");
	this.shape_29.setTransform(137.6,143.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("A2jKjQAAgKgHgLQgHgLAAgLQAAgMAEgFQAygNAVAQQAQAMAAATQAAAIgMARQgQAXgYAAQgZgTAAgDgA0bHpQgIghAAgIQAAgrAagLQAWgJAhARQAgARAXAeQAaAgAAAeIgGAQQg3ADgmAIIgnAHQgIgXgIghgAh0GyQgpgvgjAAQgpAAgIAMQgEAHgDATQgTAmjLAAQg6AAgfgrQgXgvgNgLQgSAAgLAMQgLANgfABIjfADQgFgegSggQgZgqghAAQgBAAgVAUQgVATgUgDIhHAAQgIgIgTgiIiDgwQg6gWgZgOQgfgSgNgXQgNgWAAgnQAAgHAIgLQALgPAHgSIA0gEQARgTAAgYQAAgDgUg4QgUg4AAgcQAAgjAEgHQAHgOAtglIAzgCQAmAKAEgCIgDhEQgBgyAOgkQAohpC0AAQAaAAAWAWQAWAVAKAAQANAAACgDIAAgDQAEgdAEgXQAIgsARgfQA0hiCMAAQACAAAgAgQAiAfANAAIBxglQB8gmA9gEIDIABIAdAyQAUAjAUAJQAQgGAYgIIAdgIIJnAAQAaAUgBAqQgCAtALALIAHgEIADgGIH7AAQAMAjARANQANALAAAOQAAASgQAZQgQAZAAAIIABANIADACQBOgGBIBQQAZAbASAgQAQAcAAALQAAAigzAwQgzApAAACQAAANABABIACgCQBDgEATAhQAJAPgEARQAAA7gyA/QhEBXh6AAQgdAAgugZIgvgeQgFAEgDAFIgBAEQAAAGADAdQAAAegNAWQgrBFiyAAQgfAAgNgPQgMgQgLAAQgvAkgzAkQhnBHgfAAQgQAAiNg3IiMg3QgvAig6AiQhzBEg9AAQgsAAgrgug");
	this.shape_30.setTransform(150.3,137.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("A29KrQgFgLgCgPIgBgNQABgXAHgSQAMgZAVAAQAzAAAXAbQAPARAAAYQAAASgRAaQgUAegUAAQgvAAgSglgA2sJmQgFAFAAAMQAAAKAHALQAHALAAAKQAAAEAaASQAYAAAPgXQAMgQAAgJQAAgTgPgLQgMgJgUAAQgRAAgWAGgA0mH3QgRg9AAADQABg1AfgVQAcgSApAMQApANAdAkQAgApgBAyQAAAbgSARQg4ADgbAHIgcAHQggAAgYg/gA0JGJQgZALgBAqQABAJAHAhQAIAhAIAWIAngHQAngHA2gEIAGgPQAAgfgaggQgWgeghgQQgWgMgQAAQgJAAgIAEgAh/HHIgfghQgSgPgSAAQgPAAgOANIgXAaQghAngrAAQjlAAglggQgMgKABgVQABgagEgKQgOACgGACIg3AVIjjgBIgYgxQgSghgVgUIgXAUQgYATgSAAIhOgCIgSgWIgPgVQifgphEg7Qg0guAAg8QAAgfADgGQAEgKAdgeIA1gGQAHgRgUg3QgUg3AAgkQAAgoAFgHIBEhDIAiABQAkAAAFACIAEhFQAGgyASgjQAyhmCbAAQAUAAAgACQADAJAMAJQAMAKAMACQADgFAPgpQAOguARgcQA5hjBvAAQAzAAAMAeQAHAQADAEQAKAJAWAAQAMAABVghQBtgiB7gGIAWgBICbABQArAyATApQANgGBFgOIJkACQAcAPAHAgIADA3IH8ADIA5A1QADAFAAAiIgBAlQgEAUgQAQQBIAIBFBLQA9BDABApQAAAggNAWQgOAZguArQAcAeAaAYQALAKAAAOQgBA+gwBGQhFBliBAAQgfAAgqgQQgfgMgQgLQgNAtgdAlQg1BHhgAAQg4AAgUgLQgVgLgkAAQgQAAhTA4QhNA1gbAaQhEgJh3g0IhrgzQgSAAglAWIhOAvQhwBEhLAAQgtAAgsgugAh0GwQArAuAsAAQA9AAB0hDQA5giAwgiICLA3QCNA2ARAAQAeAABnhHQA0gkAugjQALAAANAPQANAQAeAAQCyAAArhFQANgWAAgfQgDgdAAgGIACgEQACgEAFgEIAvAdQAuAaAdAAQB7AABDhXQAzg/AAg8QADgRgJgOQgTghhDAEIgCABQgBgBAAgNQAAgBAzgpQA0gwAAgjQAAgKgQgcQgTgggZgcQhHhPhPAGIgDgCIAAgOQAAgHAPgZQAQgZAAgTQAAgOgMgKQgSgNgLgkIn8AAIgDAGIgHAFQgKgLABgtQABgrgZgTIpoAAIgdAHQgYAIgPAHQgVgKgTgjIgegxIjIgBQg9AEh7AlIhyAmQgNAAgiggQgggggCAAQiMAAg0BiQgQAggJAsQgEAWgEAeIAAADQgCADgMAAQgLAAgWgWQgWgVgZAAQi1AAgoBpQgOAjABAzIADBEQgEABglgKIg0ACQgtAlgHAPQgEAHAAAjQAAAcAUA4QAUA4AAACQAAAZgRASIg0AFQgHARgLAQQgHALAAAGQAAAnAMAXQANAWAfASQAZAPA6AVICDAwQAUAjAIAIIBHAAQATADAVgTQAVgVACAAQAgAAAZArQASAfAGAfIDegEQAfAAALgNQALgNASABQANAKAXAwQAgArA5AAQDLAAAUgmQACgUAFgHQAHgMApAAQAjAAApAvg");
	this.shape_31.setTransform(150.3,138.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("A4fLSQAAgLgIgMQgHgMAAgLQAAgMAEgGQA2gOAYARQAQANAAAUQAAAJgMASQgSAYgaAAQgbgTAAgEgA2LIMQgJgkAAgJQAAgtAcgMQAYgKAkATQAjARAZAgQAbAjAAAgIgGAQQg7AEgqAIIgqAHQgJgXgIgjgAh+HQQgtgygmAAQgsAAgIANQgGAHgCAVQgVApjdAAQg+AAgiguQgag0gNgKQgUgBgMANQgMAOghABIjyADQgGgggUghQgbgugjAAQgCAAgWAVQgXAWgVgEIhOAAQgIgIgVgmIiPgzQg/gWgbgQQgigUgNgYQgOgYAAgpQAAgHAIgMQAMgRAIgTIA4gFQASgTAAgaQAAgDgVg8QgWg8AAgeQAAglAEgIQAIgPAxgoIA4gBQApAKAEgCQgDgrAAgdQgBg3AOglQAshwDEgBQAcAAAYAYQAYAWALAAQAOAAACgCIAAgEQAEgfAFgZQAIgvATgiQA4hoCZAAQABAAAjAiQAlAhAPAAIB6gnQCGgoBDgFIDZABQADAEAdAxQAVAmAWAJIAsgPIAfgIIKcAAQAcAWgBAtQgCAwAMAMIAIgFIACgHIIoAAQAMAnATANQAOALAAAPQAAAUgSAaQgRAbAAAIIABAPIADADQBVgIBOBWQAcAdATAjQARAdAAALQAAAmg3AzQg4AsAAABQAAAOACACIABgCQBKgFAUAjQAKAQgEASQAABAg2BDQhKBeiFAAQgggBgygbIgyggQgGAEgDAGIgBAEIADAlQAAAhgPAXQguBKjBAAQgiAAgNgQQgOgRgLAAQgzAmg4AmQhwBNghAAQgTAAiYg7IiYg6QgzAkg/AkQh+BIhBAAQgxAAgugxg");
	this.shape_32.setTransform(163,132.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("A47LbQgGgMgCgQIgBgOQABgZAIgTQAMgaAXAAQA4AAAYAcQARATABAZQgBATgSAcQgVAggXAAQgzAAgTgngA4qKQQgEAGAAAMQAAAMAHALQAIAMAAALQAAAEAbATQAaAAASgYQANgSAAgJQgBgUgQgMQgNgKgXAAQgSAAgYAGgA2YIaQgRhCAAAEQAAg5AigWQAegUAuAOQAsANAfAnQAiArAAA3QAAAcgUATQg8ACgfAIIgdAHQgkAAgahDgA14GkQgcAMABAtQAAAKAIAjQAIAjAJAYIAqgIQAqgIA7gDIAGgRQAAgggbgjQgZgggjgRQgYgMgSAAQgKAAgIADgAiKHmQgbgcgHgHQgTgPgUAAQgRAAgOANQgEADgVAZQgjAqgvAAQj5AAgpgiQgOgMACgWQACgcgEgKQgRACgFACIg8AXIj3gCIgZg0QgUgkgXgUIgZAVQgaAUgUAAIhUgCIgUgYQgOgSgCgEQitgshJg/Qg5gxABhBQgBggADgHQAFgLAegfIA7gHQAHgTgWg6QgWg7ABgmQgBgrAGgIQAdgaAsguIAnABQAlABAGACIAFhKQAGg1AUgmQA2htCpAAQAVAAAjADQAEAJANAKQANAKALADQAFgGAPgsQAQgwASgfQA+hpB5AAQA3AAANAfQAHARAFAEQAJAKAYAAQANAABdgiQB1glCHgHIAYgBICoABQAvA2AVAsQANgHBMgPIKZACQAeARAHAiQACAFABA1IIoAEIA+A4QADAGABAkQAAAhgBAHQgEAVgTARQBPAJBKBQQBDBHABAsQAAAigOAYQgPAbgzAuIA7A5QAMALAAAPQgBBCg0BLQhLBsiMAAQghAAgugRQgigNgRgLQgPAwgeAnQg6BMhpAAQg8AAgXgMQgVgMgnAAQgTAAhZA9QhUA5geAcQhJgKiBg4Qhzg2gCAAQgTAAgpAXIhTAyQh7BJhQAAQgyAAgwgygAh+HOQAvAxAwAAQBBAAB+hIQA/gkAzgkICYA7QCZA6ASAAQAhAABwhMQA4gnAzgmQALAAAOARQAOAQAhAAQDCAAAuhJQAPgYgBggIgDgmIACgEQACgFAGgEIAzAfQAxAcAgAAQCFAABKheQA2hDAAg/QAEgSgKgQQgUgkhJAFIgCACQgCgCAAgNQABgCA3gsQA4gzAAglQAAgMgRgdQgUgigcgeQhNhVhWAHIgDgDIAAgOQAAgIARgbQARgbAAgUQAAgPgOgKQgTgOgMgnIooAAIgCAHIgIAFQgMgMACgwQACgtgdgWIqcAAIgfAJIgrAPQgWgKgWgmQgdgxgDgEIjZgBQhCAFiGAoIh7AoQgPAAglgiQgjgigBAAQiZAAg4BpQgTAhgIAvQgFAZgEAfIAAAEQgCADgOAAQgLAAgYgXQgYgXgbAAQjFAAgsBwQgOAmABA2QABAdADArQgEACgqgKIg4ACQgwAngJAQQgDAHAAAlQgBAeAWA9QAVA7ABADQgBAagSAUIg4AFQgIASgMARQgIAMAAAHQAAApAOAZQANAYAiATQAbAQA/AXICPAzQAVAlAIAIIBOAAQAWAEAWgVQAXgWABAAQAjAAAbAuQAUAhAGAhIDygEQAhAAAMgOQANgOATABQANALAbAzQAhAuA/AAQDcAAAVgpQACgUAGgIQAIgNAsAAQAmAAAtAyg");
	this.shape_33.setTransform(163,133.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("A6PMPQgMgLAAgEQAAgLgIgNQgJgMAAgMQAAgOAFgGQAFgGAAgCQA2gHAZATQASANAAAWQAAAJgOATQgTAagcAAQgFAAgMgKgA3zJmQAAgTgJgmQgJglAAgKQAAgxAegMQAagKAnATQAlATAcAiQAdAlAAAiQAAAOgCABIgFADQhAAEgsAIIguAIgAiIHuQgxg1gpAAQgvAAgJANQgGAIgDAWQgWArjuAAQhEAAgkgwQgcg3gOgMQgWAAgMAOQgNAPglABIkFADQgGgigVgkQgegwgmAAQgBAAgZAXQgYAWgXgEIhUAAQgJgJgXgnIiZg3QhEgYgegRQgkgUgPgaQgPgaAAgsQAAgHAJgNQANgSAIgUIA9gFQAUgVAAgcQAAgDgXg/QgYhAAAggQAAgoAFgIQAIgQA1gqIA8gDQANAAARAHQAPAFAEgCIgEhNQgBg6AQgoQAwh4DTAAQAeAAAaAZQAZAYAMAAQAPAAADgDIAAgEQAEghAFgaQAKgyATgkQA9hvClAAQACAAAlAkQAoAkAQAAICEgrQCRgrBIgEIDqABIAiA4QAXAoAYALIAvgQIAigJILRAAQAeAWgBAxQgCAzANAMIAIgFIADgHIJTAAQANApAUAPQAPALAAAQQAAAVgSAdQgTAcAAAJIABAPIADADQBcgHBUBaQAeAgAVAkQATAgAAAMQAAAng8A3Qg8AuAAACQAAAPACABIABgCQBPgEAWAlQALARgFAUQAABDg6BIQhQBjiPAAQgiAAg2gdIg3giQgGAFgDAFIgBAFQgBAHAEAhQAAAigQAZQgyBPjQAAQgkAAgPgSQgPgSgMAAQg3Apg9ApQh4BRgkAAQgUAAilg+Iijg/Qg3AnhEAmQiIBNhHAAQg0AAgyg0g");
	this.shape_34.setTransform(175.7,127.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("A65MKQgHgNgCgRIgBgPQAAgaAKgVQANgcAZAAQA8AAAaAeQASAUAAAcQABATgVAfQgWAigYAAQg4AAgUgqgA6iKyQAAACgFAGQgEAGAAAOQAAAMAIAMQAIANAAALQAAAEAMALQANAKAFAAQAcAAASgaQAOgTAAgJQAAgWgSgNQgSgOgiAAQgMAAgPACgA4JI9QgThGAAADQAAg8AlgYQAhgVAxAPQAvAOAiApQAlAugBA6QABAfgWATQhCADgfAIIghAIQgnAAgbhHgA3nG/QgeAMAAAxQABAKAIAlQAJAmAAATIAKAGIAugIQAsgIBBgEIAEgDQACgBAAgOQAAgigdglQgbgigmgTQgZgMgUAAQgLAAgJADgAiVIFIgkglQgWgQgVAAQgSAAgQAOIgbAeQglAsgzAAQkNAAgrgkQgPgMABgYQADgegGgKQgQABgGADIhCAYIkJgCIgcg3QgVgmgagWIgZAWQgdAWgWAAIhagDIgVgZQgQgTgCgEQi7gvhPhEQg9g0AAhEQAAgjADgHQAFgMAighIA/gHIAFgFQACgCAAgNIgYg/QgXg+AAgpQAAguAGgIIBPhMIApABQApABAHABIAEhOQAHg5AVgoQA7h0C1AAQAZAAAkADQAFAKANAKQAOALAOADQAEgGAQgvQATg0ATggQBDhwCBAAQA9AAAOAhQAHASAFAFQAKAKAaAAQAPAABjglQB/gnCRgHIAagBIC2ABQAyA5AWAvQAQgHBRgQILNACQAhASAHAkQACAGACA4IJTAEIBDA8QAEAGAAAnQAAAjgBAHQgEAWgUATQBUAJBRBVQBIBMAAAvQAAAkgOAZQgRAdg2AxQAiAiAeAbQAMAMAAAQQAABGg5BQQhSBziWAAQgkAAgxgSQgkgOgUgMQgPAzghAqQg+BRhyAAQhBAAgXgNQgZgMgqAAQgTAAhhBAQhZA9ghAdQhQgKiLg8Qh7g5gDAAQgVAAgsAYIhaA2QiEBOhXAAQg1AAg0g2gAiIHsQAyA0A1AAQBGAACIhNQBEgmA3gnICkA/QCkA+AUAAQAkAAB5hRQA8gpA3gpQAMAAAPASQAPASAkAAQDQAAAzhPQAPgZAAgiQgDghAAgHIABgFQADgFAGgFIA3AiQA2AdAiAAQCPAABQhjQA6hIABhDQAFgUgLgRQgWglhPAEIgCACQgCgBAAgPQAAgCA8guQA8g3AAgnQAAgMgSggQgWgkgdggQhUhahdAHIgDgDIAAgPQAAgJASgcQATgdAAgVQgBgQgPgLQgTgPgOgpIpTAAIgDAHIgIAFQgNgMACgzQACgxgfgWIrRAAIgiAJIguAQQgYgLgYgoIgig4IjqgBQhIAEiRArIiEArQgQAAgogkQglgkgCAAQilAAg9BvQgTAkgJAyQgFAagEAhIAAAEQgDADgPAAQgNAAgZgYQgagZgeAAQjTAAgvB4QgQAoAAA6IAFBNQgFACgPgFQgRgHgNAAIg8ADQg0AqgJAQQgEAIgBAoQAAAgAYBAQAXA/AAADQAAAcgUAVIg9AFQgHAUgOASQgJANAAAHQABAsAPAaQAOAaAkAUQAeARBEAYICZA3QAXAnAKAJIBTAAQAYAEAXgWQAZgXABAAQAnAAAdAwQAVAkAHAiIEFgDQAkgBANgPQANgOAVAAQAPAMAcA3QAjAwBEAAQDuAAAWgrQADgWAGgIQAJgNAvAAQApAAAxA1g");
	this.shape_35.setTransform(175.7,128.1);

	this.instance_5 = new lib.WhatKindBubble1still();
	this.instance_5.setTransform(-27.7,128.5,0.963,0.963,4.6,0,0,-3,-0.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},11).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_4}]},27).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.shape_17},{t:this.shape_16}]},7).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.instance_5}]},36).to({state:[{t:this.instance_5}]},8).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({scaleX:1.21,scaleY:1.21,x:144.3,y:222.9,mode:"independent"},9).wait(27).to({alpha:0},8).to({_off:true},7).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).to({scaleX:1.35,scaleY:1.35,x:-10.5,y:100},8).wait(140));

	// Layer 4
	this.instance_6 = new lib.WhatKindBubble2still();
	this.instance_6.setTransform(99.3,183.2,0.83,0.83,0,0,0,-0.4,-5.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({_off:false},0).to({scaleX:1.36,scaleY:1.36,x:163.1,y:116.6},11).wait(85));

	// Layer 3
	this.instance_7 = new lib.WhatKindBubble3still();
	this.instance_7.setTransform(236.8,232.5,0.908,0.718,0,0,0,-8.2,-5.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(212).to({_off:false},0).to({regY:-5.4,scaleX:1.34,scaleY:1.06,x:272.9,y:219.6},9).wait(34));

	// Layer 10
	this.instance_8 = new lib.daydreamingguystill();
	this.instance_8.setTransform(-21.3,258,0.663,0.663);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).to({alpha:1},9).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.3,-5.5,239.3,82.6);


// stage content:



(lib.adjective_Scene8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene9:0,scene9_repeat:517});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/main_menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("adjective_Scene9.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adjective_Scene7.html","_self");
		}
		/* play();*/
	}
	this.frame_516 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_528 = function() {
		/* gotoAndPlay("scene9_repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(516).call(this.frame_516).wait(12).call(this.frame_528).wait(1));

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
	this.shape.graphics.f("#000000").s().p("AggBWQgNgDgGgFIgBAAQgEAAgDgDQgEgDAAgFIABghIABgiIAAgkIgBglQAAgFAFgFQAFgEAEAAQADAAAOAHIATAJQAdAKAVAWQAaAZAAAdQAAASgJARQgJARgPAKQgQALgdAAQgIAAgKgCgAgngcIAAAcIgCA7IADABQAJAHAOAAQAXAAALgIQALgHAGgMQAGgMAAgNQAAgcghgWQgJgHgogRg");
	this.shape.setTransform(401.8,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhHBTQgDgDAAgFIABgNIABgOIAAgUIAAgUIAAgTIAAgVIgBgVIgCgUQAAgFAEgEQAEgEAGAAQAGAAAIAMQAbAoAUAbQAZAeAeAcIAAgNIAAgOQAAgtgEgcIgCgLQgDgIAAgEQAAgNAMAAQASABAABGIAAAhIAAAkIgCARQgCALgKAAQgFgBgIgHQgtgqg2hLIgBAYIAAAWIAAAbIABAbQAAAdgMAAQgFAAgEgEg");
	this.shape_1.setTransform(384.9,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguBPQgDgEAAgEQAAgFADgDQADgDAFAAQAGAAAQgDIABgUIAAgSIgBgSQAAgWAEgmIgPABIgOAAQgEAAgDgDQgEgDAAgFQABgKAJgBIAhgBQAUAAAgAFQAJABAAAKQABAFgEADQgEADgDAAIgSgBIgRgDQgDAgAAAaIABATIAAASIAAATIAhgBQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAIgSAAIgSABIgTACIgVACQgFAAgDgDg");
	this.shape_2.setTransform(370,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgzBSQgDgEAAgFIAChKIABhLQAAgEADgDQADgEAFAAQAFAAADAEQADADAAAEIgCAhIgBAgQAPgNARgVIAegkQADgEAFAAQAEAAADADQAEAEAAAEQAAAHgcAfIgmAnQANAOAaAZIALAJQAGAFAHACQAJADAAAIQAAAEgCADQgDAEgFAAQgQAAgdgdIggggIAAACIAAA4QAAALgJAAQgGAAgEgGg");
	this.shape_3.setTransform(358.3,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBOQgEgDAAgFIABgEIAAgFIAAgQIgBgQQAAgPgCgaQgDgeAAgNIgKAAQgYAAgNgEQgJgCAAgIQAAgFADgDQADgEAFABIARABIASACIATAAIASgBIAZABIAYACQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgYgCIgZgBIgIAAIADAwQADAdAAASIAAALIABALQAAAIgCAFQgDAHgGAAQgDAAgDgDg");
	this.shape_4.setTransform(337.4,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAlA4IgHgjIgcAGIgbAGQgFAOgOAbQgDAGgGAAQgEAAgDgDQgEgDAAgFQAAgFAQgiQgBgDAAgEQAAgIAKgDQAMgUATgfQAXgpAHABQAIgBADAMIAHAkIAQBJIAGARQADAJAAADQAAAEgDADQgDAEgEAAQgKAAgIgZgAgMAIQAMgEAZgEIgJgog");
	this.shape_5.setTransform(320.8,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhCBUQgDgDAAgEIACgiIACgiIgBgQIgBgSIACgZIABgaQAAgFADgDQADgCAEAAQAEAAAEACQACADAAAFIAAAaIgCAaIABAZIAtgHQAagFATgBIABguQAAgIAEgIQADgMAHAAQADABADACQAEADAAAEIgBAFQgBAEAAAJIAAAKIAAAJIgCAhIgCAdIABAZIABAZQAAAEgDADQgDADgEAAQgFAAgDgDQgDgDAAgEIgBgZIAAgZIAAgPQgSAAgaAFIgsAJIgCAbIgDAcQAAAEgDADQgDADgEAAQgFAAgCgDg");
	this.shape_6.setTransform(304.7,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXBUQgDgDAAgFQgGgNgBgIIgIgvQgFgbgBgRQgJAjgLAXQgNAcgDARIAAAEQAAAFgDADQgFADgEAAQgPAAAAgNIgDgNIgMg1QgHgZgRgxIAAgFQAAgKALAAQAGAAAEAIIAIAWQAGAUAHAbIALAuQALgbALgkIALghQAJgXAIAAQAHAAAEAHQADAJAEAjIAHApIAJAqQAPgjAVg5IAGgUQADgNAFgHQAEgGAGAAQAKAAAAALIgDALIgEAMIgGATIggBLIgPAlQgEAIgIAAQgEAAgFgDg");
	this.shape_7.setTransform(285.2,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgDAFAAQADgBAFAGQADADAJABIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAFIABAJIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAHgBAKIAHACQAWAFAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_8.setTransform(261,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKAAAAASQAUgUAYABQAJAAAEAGQAEAHAAANIAAAHQAAANgKAAQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAAKgLAAQgJAAAAgKg");
	this.shape_9.setTransform(251,23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkAuQgQgNAAgZQAAgZAOgTQAOgVAYAAQAQAAAMAGQAOAHAAAQQgBALgLAIQgGAEgRAGIgoAUQAHAJAJAEQAJAFAJAAQAIAAAKgDQANgEADgFQAEgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgVAAgQgMgAgVgbQgJAKgEASIAhgOQARgJAIgHQgJgJgPAAQgMAAgJALg");
	this.shape_10.setTransform(239.6,22.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAZA8QgMAAgHgdIgEgZIgCgWIgIASIgRAtQgBAEgDACQgDAGgHAAQgIABgIghQgEgQgEgbIgCgQIgCgQQAAgFAEgDQADgDAEAAQAIAAACAJIADAQIABAQIAHAuIAYhKQAEgMAHAAQAIAAADANIAHAnQAEAZAEAPIAIgdIANg5QACgGAIAAQAEAAAEADQADADAAAEIgBAFQgJAjgNAqQgDAKgHAKQgDAGgGAAIgBAAg");
	this.shape_11.setTransform(225.9,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgDAFAAQADgBAFAGQADADAJABIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAFIABAJIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAHgBAKIAHACQAWAFAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_12.setTransform(212.7,22.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAaA0IgDgXIgCgYIABgIIAAgKQAAgYgJAAQgMABgJAOQgKANgFARIgBALIgBALIABAJIABAKQAAAEgDAEQgDACgFAAQgFAAgDgCQgDgEAAgEIAAgKIgBgJIACgeIABgeIAAgKIgBgKQAAgFAEgDQADgDAEAAQAKAAABAOIAAAMQASgXARAAQARAAAHAPQAFAKAAAUIAAALIAAAHQAAAKADAOQACANAAAJQAAAFgDADQgDADgFAAQgJAAgBgKg");
	this.shape_13.setTransform(202.2,22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAGAAAJQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAFIABACQAAAEgDADQgDADgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAARAGAJQAGAJANAAQAIAAAHgEIALgIQgDgbAAgOIAAgKIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_14.setTransform(190.6,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE0063").s().p("AguBTQgKgKAAgiIAAgQIABgSIgBgEQAAgCACgDIACguIgBgMIgBgMQAAgMALAAQAEAAADADQANgEAMgBQALgCAIAAQAaAAAQAGQAHADAAAHQAAAFgDADQgDAEgEAAIgEgBQgSgFgRAAQgIAAgJACIgXAFIABALIgBApIAtgEIAZgCQAFAAADADQADACAAAGQAAAHgKABIgZACIgwAFIAAAOIgBAOQAAAXAEAEQACADAPAAIASAAIAUgBIAGAAIAGgBQAMAAAAALQAAAJgJACQgLACgfAAQghAAgKgIg");
	this.shape_15.setTransform(171.8,20.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE0063").s().p("AgSBOQgNghgQg7IgIgeQgHgWAAgHQAAgFAEgDQADgDAEAAQAIAAADAJIADATIALAkQAKAmAKAdIAAgBIAchMIAJgbQAGgQAGgIQAEgEAFAAQAEAAAEADQADADAAAFQAAADgCADQgHAKgEALIgIAYIgdBMQgFAOgHANQgBAGgHAAQgIAAgDgIg");
	this.shape_16.setTransform(158.2,20.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE0063").s().p("AguBPQgDgEAAgEQAAgFADgDQADgDAEAAQAIAAAPgDIABgUIAAgSIgBgSQAAgWADgmIgNABIgPAAQgEAAgEgDQgCgDAAgFQgBgKAKgBIAhgBQAUAAAgAFQAKABAAAKQAAAFgFADQgCADgEAAIgSgBIgRgDQgDAgAAAaIAAATIABASIgBATIAigBQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAIgSAAIgSABIgTACIgWACQgEAAgDgDg");
	this.shape_17.setTransform(144.4,20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE0063").s().p("AgGBOQgEgDAAgFIABgEIAAgFIAAgQIgBgQQAAgPgCgaQgDgeAAgNIgKAAQgYAAgNgEQgJgCAAgIQAAgFADgDQADgEAFABIARABIASACIATAAIASgBIAZABIAYACQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgYgCIgZgBIgIAAIADAwQADAdAAASIAAALIABALQAAAIgCAFQgDAHgGAAQgDAAgDgDg");
	this.shape_18.setTransform(131.8,20.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE0063").s().p("AgrBBQgPgQAAgXQAAgiAegmQAaggAYAAIAJAAIAIACQADgGAGABQAIAAACAJQABAJAAAMQAAAFgCADQgDAEgFABQgHgBgDgHQgDgIgDgBQgCgBgJAAQgQAAgRAXQgaAhAAAaQAAAOAJAKQAJALANAAQAJgBAMgFIATgNQAGgEADgBQAFABADADQADADAAAFQAAAFgEADQgdAZgbAAQgWABgPgSg");
	this.shape_19.setTransform(117,20.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE0063").s().p("AguBTQgKgKAAgiIAAgQIABgSIgBgEQAAgCACgDIACguIgBgMIgBgMQAAgMALAAQAEAAADADQANgEAMgBQALgCAIAAQAaAAAQAGQAHADAAAHQAAAFgDADQgDAEgEAAIgEgBQgSgFgRAAQgIAAgJACIgXAFIABALIgBApIAtgEIAZgCQAFAAADADQADACAAAGQAAAHgKABIgZACIgwAFIAAAOIgBAOQAAAXAEAEQACADAPAAIASAAIAUgBIAGAAIAGgBQAMAAAAALQAAAJgJACQgLACgfAAQghAAgKgIg");
	this.shape_20.setTransform(103.6,20.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE0063").s().p("AgrBKQgUgPAAgUQAAgNALAAQALAAAAANQAAAJANAJQALAIALAAQAHAAAEg2QACgYAAgmIgBgMIgGAAIgLAAIgNAAQgFAAgDgDQgDgDAAgFQgBgMAQAAIALABIAJAAIATgBIAUAAQAZAAAAAMQAAAEgCAEQgEADgEAAIgHgBIgIAAIgMAAIABANQAABOgKAkQgIAYgQAAQgSAAgTgNg");
	this.shape_21.setTransform(89.1,20.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE0063").s().p("AggBWQgNgDgGgFIgBAAQgEAAgDgDQgEgDAAgFIABghIABgiIAAgkIgBglQAAgFAFgFQAFgEAEAAQADAAAOAHIATAJQAdAKAVAWQAaAZAAAdQAAASgJARQgJARgPAKQgQALgdAAQgIAAgKgCgAgngcIAAAcIgCA7IADABQAJAHAOAAQAXAAALgIQALgHAGgMQAGgMAAgNQAAgcghgWQgJgHgogRg");
	this.shape_22.setTransform(74.1,20.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CE0063").s().p("AAlA4IgHgjIgdAGIgaAGIgTApQgDAGgGAAQgEAAgEgDQgDgDAAgFQAAgFARgiQgDgDAAgEQAAgIALgDQAMgUATgfQAXgpAGABQAJgBADAMIAHAkIAQBJIAGARQADAJAAADQAAAEgDADQgEAEgEAAQgKAAgHgZgAgNAIQANgEAZgEIgIgog");
	this.shape_23.setTransform(57.6,20.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAaA0IgDgXIgCgYIABgIIAAgKQAAgYgJAAQgMABgJAOQgKANgFARIgBALIgBALIABAJIABAKQAAAEgDAEQgDACgFAAQgFAAgDgCQgDgEAAgEIAAgKIgBgJIACgeIABgeIAAgKIgBgKQAAgFAEgDQADgDAEAAQAKAAABAOIAAAMQASgXARAAQARAAAHAPQAFAKAAAUIAAALIAAAHQAAAKADAOQACANAAAJQAAAFgDADQgDADgFAAQgJAAgBgKg");
	this.shape_24.setTransform(37.7,22.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAlA4IgHgjIgdAGIgaAGIgTApQgDAGgGAAQgEAAgEgDQgDgDAAgFQAAgFARgiQgCgDgBgEQAAgIALgDQAMgUATgfQAXgpAHABQAIgBADAMIAHAkIAQBJIAGARQADAJAAADQAAAEgDADQgDAEgFAAQgKAAgHgZgAgMAIQAMgEAZgEIgJgog");
	this.shape_25.setTransform(23.5,20.5);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(523.4,14,0.752,0.752);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#9900CC").ss(3,1,1).p("EAojAYSMhRFAAAMAAAgwjMBRFAAAg");
	this.shape_26.setTransform(275,188.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.btn_menu},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.btn_goNext},{t:this.btn_goBack}]}).wait(529));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoiAb+MAAAg37MBRFAAAMAAAA37g");
	mask.setTransform(275,212.3);

	// Anim
	this.instance_1 = new lib.Lesson6WhatKind();
	this.instance_1.setTransform(282.1,71.9,1,1,0,0,0,155.1,30.9);

	this.instance_2 = new lib.bk3("synched",0);
	this.instance_2.setTransform(261.5,211.9,1.007,1,0,0,0,282.3,176.6);

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(529));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,200.1,538.7,398.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;