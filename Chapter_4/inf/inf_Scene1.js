(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhFhFICLAAIAACLIiLAAg");
	this.shape.setTransform(7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAoQgEgDAAgGIAAgSIgOAAQgHAAgGgDQgIgDAAgHQAAgHAHgDQAEgBAKAAIAOgBIAAgEIAAgFQAAgWAOAAQAFAAAEAEQAFADAAAGIgBAFIAAAFIAAAIIAEAAIAGAAIAHAAQAWAAAAAMQAAAFgEAEQgEAEgGAAIgEAAIgEgBIgIAAIgJABIAAAJIAAAJQAAAGgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_1.setTransform(7.2,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLgAgNAgQAAAGAEADQAEAEAFgBQAFABAEgEQAFgDAAgGIAAgJIAAgJIAJgBIAIAAIAEABIAEAAQAGAAAEgEQADgEAAgFQAAgMgVAAIgHAAIgHAAIgDAAIAAgIIAAgFIABgFQgBgGgEgDQgEgEgGAAQgNAAAAAWIAAAFIAAAEIgOAAQgLABgDABQgHACAAAIQAAAGAIAEQAFADAIAAIAOAAg");
	this.shape_2.setTransform(7,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhFBGIAAiLICLAAIAACLgAgNAgQAAAGAEADQAEAEAFgBQAFABAEgEQAFgDAAgGIAAgJIAAgJIAJgBIAIAAIAEABIAEAAQAGAAAEgEQADgEAAgFQAAgMgVAAIgHAAIgHAAIgDAAIAAgIIAAgFIABgFQgBgGgEgDQgEgEgGAAQgNAAAAAWIAAAFIAAAEIgOAAQgLABgDABQgHACAAAIQAAAGAIAEQAFADAIAAIAOAAg");
	this.shape_3.setTransform(7,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AhFBGIAAiLICLAAIAACLgAgNAgQAAAGAEADQAEAEAFgBQAFABAEgEQAFgDAAgGIAAgJIAAgJIAJgBIAIAAIAEABIAEAAQAGAAAEgEQADgEAAgFQAAgMgVAAIgHAAIgHAAIgDAAIAAgIIAAgFIABgFQgBgGgEgDQgEgEgGAAQgNAAAAAWIAAAFIAAAEIgOAAQgLABgDABQgHACAAAIQAAAGAIAEQAFADAIAAIAOAAg");
	this.shape_4.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16,16);


(lib.neg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhFhFICLAAIAACLIiLAAg");
	this.shape.setTransform(7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAKQgGgEAAgFQAAgGAGgDQAFgDAGAAIAZgBIAZgBQAHAAAFADQAGADAAAHQAAALgQABQgPABglAAQgGAAgFgDg");
	this.shape_1.setTransform(7,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLgAAAgGIgZABQgHAAgFADQgFACgBAHQABAFAFAEQAFADAHAAQAlAAAPgBQAQgBAAgLQAAgHgGgDQgGgDgGAAIgZABg");
	this.shape_2.setTransform(7,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhFBGIAAiLICLAAIAACLgAAAgGIgZABQgHAAgFADQgFACgBAHQABAFAFAEQAFADAHAAQAlAAAPgBQAQgBAAgLQAAgHgGgDQgGgDgGAAIgZABg");
	this.shape_3.setTransform(7,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AhFBGIAAiLICLAAIAACLgAAAgGIgZABQgHAAgFADQgFACgBAHQABAFAFAEQAFADAHAAQAlAAAPgBQAQgBAAgLQAAgHgGgDQgGgDgGAAIgZABg");
	this.shape_4.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16,16);


(lib.InfinitiveNounadverbAdjective = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape.setTransform(192.8,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1BeQgLgLgBgnIABgRIABgUIgCgGQABgDACgDQADgkAAgRIgCgNIgBgNQAAgPAMAAQAFAAAEAEQAOgEAOgCQANgCAKAAQAdAAATAHQAHADABAJQAAAFgEADQgDAEgGAAIgDAAQgVgGgTAAQgKAAgLACIgaAGIACAMQAAARgDAeIA1gFIAdgDQAGAAADAEQAEADAAAGQAAAKgMABIgdADIg3AFIAAARIgBAOQAAAbAEAFQADADAQAAIAWAAIAWgBIAIgBIAHgBQANAAAAANQAAAKgLADQgLACglAAQgmAAgLgKg");
	this.shape_1.setTransform(182.2,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVBZQgPglgShFIgKghQgHgaAAgIQAAgFAEgEQADgDAFAAQAKAAACAKIAFAVIAMAqQALAsALAhIABgCIAghXIAKgeQAHgSAIgKQAEgFAGAAQAEAAAEAEQAEAEAAAFQAAAEgCADQgIAMgFAMIgJAbIghBYQgGAPgHAPQgDAIgHAAQgKAAgDgKg");
	this.shape_2.setTransform(166.6,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgEAFAAQAIAAASgCQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFABgEgEQgDgDAAgGQAAgLALgBIAlgCQAYAAAkAGQALACAAALQAAAFgEAEQgEADgEAAIgUgBIgUgDQgDAkAAAfIABAUIAAAWIAAAVIAmgBQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQADgIgBQgFABgEgEg");
	this.shape_3.setTransform(150.9,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_4.setTransform(136.6,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyBLQgRgTAAgaQAAgoAigsQAegkAcAAIAKABIAJACQAFgHAGABQAJAAACALQACAKAAAOQAAAFgDAEQgDAEgGAAQgIABgEgKQgDgHgEgCQgCgCgKABQgSAAgUAbQgeAkAAAfQABARAJAKQALAMAOABQAMgBANgGQAHgEAOgLQAIgEADAAQAGAAADADQADAEABAFQAAAGgGAEQgfAdghAAQgZgBgRgTg");
	this.shape_5.setTransform(119.9,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag0BeQgNgLAAgnIABgRIABgUIgCgGQAAgDADgDQACgkAAgRIgBgNIgBgNQAAgPAMAAQAFAAAEAEQAPgEAMgCQANgCALAAQAeAAARAHQAJADAAAJQAAAFgDADQgEAEgFAAIgEAAQgVgGgTAAQgKAAgLACIgZAGIABAMQAAARgDAeIA1gFIAdgDQAGAAADAEQAEADAAAGQAAAKgLABIgdADIg4AFIgBARIAAAOQAAAbAEAFQADADAQAAIAWAAIAXgBIAHgBIAHgBQANAAAAANQAAAKgKADQgMACglAAQgmAAgKgKg");
	this.shape_6.setTransform(104.6,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgxBVQgXgSAAgWQAAgPAMAAQAMAAAAAPQAAAKAPAKQAOAKAMAAQAJAAAEg+QACgcAAgsIgBgNIgHAAIgOAAIgOAAQgGAAgDgEQgEgDAAgGQAAgNARAAIAMABIAMAAIAXgBIAXgBQAbAAAAAOQAAAFgDAEQgDAEgGAAIgHgBIgIgBIgOABIAAAOQAABagMAqQgIAbgTAAQgVAAgVgPg");
	this.shape_7.setTransform(88.2,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmBjQgNgEgHgFIgCAAQgFgBgDgDQgEgDAAgGIABgmIABgmIAAgqIgBgrQAAgFAFgGQAGgFAFAAQADAAAQAIIAWALQAiALAYAZQAdAcAAAjQAAAUgKATQgKAUgRALQgTANgiAAQgJAAgMgCgAgtghIAAAiIgCBDIADACQAKAGARAAQAaABANgJQAMgIAHgOQAHgOAAgOQAAghgmgZQgLgIgtgUg");
	this.shape_8.setTransform(71.2,19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAqA/IgHgmQgNACgUAEIggAHQgFAPgQAgQgDAGgHABQgFAAgDgEQgEgEgBgFQABgGASgnQgCgDAAgEQAAgKAMgDQANgYAWgjQAcguAHAAQAKAAADAOIAIAoIASBVIAHATQADAKAAADQAAAFgDADQgEAEgFAAQgLAAgJgdgAgPAJQAPgEAdgFIgKgvg");
	this.shape_9.setTransform(52.4,19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHgBAPIAAAJQAAAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIAABCQAAAMgMAAQgLAAAAgMg");
	this.shape_10.setTransform(30.4,22.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_11.setTransform(17.2,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOAaQgEgDABgEQgBgEAIgQIAKgWQADgGAFAAQAEAAADAEQAEADAAAEQAAADgSAmQgCAHgFAAQgFAAgDgEg");
	this.shape_12.setTransform(0.7,29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag5BeQgEgFAAgFIAAgkIACgxQADgigBgQIACghQABgHADgCQAQgFAWAAQAVAAATAPQAXARAAAZQAAAfgZARQATAIAJAJQAJAKAAALQAAAPgQAOQgLAJgNAFQgaALgrAAQgFAAgFgFgAglAxIAAAZQAggBATgIQAIgDAJgIQAHgGAAgDQAAgGgQgHQgMgFgKgDIgNgCIgEAAIgFAAIgPgBIAAAcgAgghIIAAAWIgCAvIASABQASgCALgJQAMgMAAgQQAAgMgMgKQgNgKgNAAIgTABg");
	this.shape_13.setTransform(-10.8,19.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_14.setTransform(-26.8,19.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag1BeQgLgLgBgnIABgRIABgUIgCgGQABgDACgDQADgkAAgRIgCgNIgBgNQAAgPAMAAQAFAAAEAEQAOgEAOgCQANgCAKAAQAdAAATAHQAHADABAJQAAAFgEADQgDAEgGAAIgDAAQgVgGgTAAQgKAAgLACIgaAGIACAMQAAARgDAeIA1gFIAdgDQAGAAADAEQAEADAAAGQAAAKgMABIgdADIg3AFIAAARIgBAOQAAAbAEAFQADADAQAAIAWAAIAWgBIAIgBIAHgBQANAAAAANQAAAKgLADQgLACglAAQgmAAgLgKg");
	this.shape_15.setTransform(-42.4,19.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVBZQgPglgShFIgKghQgHgaAAgIQAAgFAEgEQADgDAFAAQAKAAACAKIAFAVIAMAqQALAsALAhIABgCIAghXIAKgeQAHgSAIgKQAEgFAGAAQAEAAAEAEQAEAEAAAFQAAAEgCADQgIAMgFAMIgJAbIghBYQgGAPgHAPQgDAIgHAAQgKAAgDgKg");
	this.shape_16.setTransform(-57.9,19.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmBjQgNgEgHgFIgCAAQgFgBgDgDQgEgDAAgGIABgmIABgmIAAgqIgBgrQAAgFAFgGQAGgFAFAAQADAAAQAIIAWALQAiALAYAZQAdAcAAAjQAAAUgKATQgKAUgRALQgTANgiAAQgJAAgMgCgAgtghIAAAiIgCBDIADACQAKAGARAAQAaABANgJQAMgIAHgOQAHgOAAgOQAAghgmgZQgLgIgtgUg");
	this.shape_17.setTransform(-75.4,19.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AArA/IgIgmQgNACgUAEIggAHQgGAPgPAgQgDAGgHABQgFAAgEgEQgDgEAAgFQAAgGASgnQgCgDAAgEQAAgKAMgDQAOgYAVgjQAcguAHAAQAJAAAEAOIAIAoIASBVIAHATQADAKAAADQAAAFgDADQgEAEgFAAQgLAAgIgdgAgPAJQAPgEAdgFIgKgvg");
	this.shape_18.setTransform(-94.2,19.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOAaQgDgDgBgEQABgEAHgQIAKgWQACgGAGAAQAEAAAEAEQACADAAAEQAAADgRAmQgCAHgGAAQgEAAgDgEg");
	this.shape_19.setTransform(-113.3,29.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhRBfQgEgDAAgGIABgPIABgPIAAgYIABgWIAAgXIgBgZIgBgWIgCgYQAAgFAFgFQAFgEAGAAQAGAAAKAOQAeAtAYAfQAcAiAjAhIAAgPIgBgQQAAg0gDghIgEgMQgDgJABgEQgBgOANAAQAWgBAABQIAAAnIgBApIgCAUQgCAMgLAAQgHAAgJgJQgxgvhAhYIgBAcIAAAbIAAAfIABAeQAAAggNABQgGAAgEgFg");
	this.shape_20.setTransform(-127.3,19.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag1BIQgQgRgDgjQgCgPAAguIAAgbQABgLACgFQADgJAIAAQALAAAAAVIAABIQAABJAzAAQAwAAAAh8IAAgMIAAgKQAAgHADgGQADgHAHAAQAMAAAAARIAAAPIAAAPQAACMhJAAQglAAgSgWg");
	this.shape_21.setTransform(-146.5,19.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag9BMQgZgWAAgjQAAgpAYgjQAdgmAoAAQApAAATASQAVATgBAoQAAApgWAiQgbAngpAAQgiAAgYgUgAgqgoQgUAbAAAgQABAXARAPQAQAOAZAAQAdAAATgeQASgagBghQAAgdgMgMQgNgLgeAAQgdAAgUAeg");
	this.shape_22.setTransform(-165.7,19.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhRBfQgEgDAAgGIABgPIAAgPIABgYIABgWIAAgXIgBgZIgCgWIgBgYQAAgFAFgFQAFgEAGAAQAGAAAKAOQAeAtAYAfQAdAiAiAhIAAgPIAAgQQAAg0gFghIgDgMQgCgJAAgEQAAgOAMAAQAWgBAABQIgBAnIAAApIgCAUQgCAMgLAAQgGAAgKgJQgxgvhAhYIgBAcIAAAbIAAAfIABAeQAAAggMABQgIAAgDgFg");
	this.shape_23.setTransform(-185.5,19.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_24.setTransform(190.2,-14.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_25.setTransform(170,-14.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_26.setTransform(157.8,-14.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgrBUQgRgSAAgbQAAggASgTQAQgUAbAAQAOAAAIAEIAMAJQABg0ACgRQACgLAJAAQAMAAAAAMQAAAQgFA7QgCAQABATQgBApAEAUIAAADQABAFgEADQgDADgFAAQgIAAgDgLQgJAGgJAEQgJADgKAAQgZAAgRgQgAgcACQgLAMAAAZQAAAQAMALQALALAPAAQAKAAAGgEIAOgKIADgDIAAgWIAAgOIAAgPQgEgJgIgEQgHgFgLAAQgUAAgKALg");
	this.shape_27.setTransform(136.6,-17.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_28.setTransform(122.6,-14.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_29.setTransform(109.2,-14.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDADQgEAEgFAAQgJAAgDgMg");
	this.shape_30.setTransform(97,-14.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_31.setTransform(76.3,-14.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AglBcQgEAFgFAAQgFAAgDgDQgDgDAAgFIAAgJIAAgKIAAgmIgBgmIAAgiIAAgiQAAgHADgGQAFgIAHAAQAIAAABALIgBAFIgBAFIAAAbIAAAfQAKgHAKgEQAJgDAIAAQAaAAAQAUQAQASAAAbQAAAcgSATQgSAUgaAAQgSAAgQgHgAgTgFIgRALIAAAVIAAAUIAAAUIAQAGQAIADAJAAQARAAALgNQAMgMAAgTQAAgSgJgMQgKgMgRAAQgJAAgLAFg");
	this.shape_32.setTransform(62.1,-17.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAeA7IgDgaQgCgOgBgNIABgLIABgLQAAgbgLAAQgNAAgLARQgLAOgHAWIgBAMIgBAMIABALIABALQgBAFgDAEQgDADgGAAQgEAAgEgDQgDgEAAgFIgBgLIgBgLIACgiIABgiIAAgMIAAgMQAAgFADgEQAEgDAFAAQALAAABAQIABAOQAUgbAUAAQAUAAAIARQAFAMAAAWIAAAMIAAALQABAKACAQQADAQAAAKQAAAFgEAEQgDADgGAAQgKAAgBgMg");
	this.shape_33.setTransform(40.7,-14.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_34.setTransform(27.5,-14.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_35.setTransform(14.7,-14.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0066").s().p("Ag0BeQgNgLAAgnIABgRIABgUIgCgGQAAgDADgEQACgjABgQIgCgOIgBgNQAAgPAMAAQAFABAEADQAPgEAMgCQANgCALAAQAdAAASAHQAJADAAAJQAAAFgDAEQgEADgFAAIgEAAQgVgGgTAAQgKAAgLACIgaAFIACAOQAAARgDAdIA1gFIAdgCQAFAAAEADQAEADAAAGQAAAKgLACIgeACIg3AFIgBAQIAAAPQAAAbAEAFQADADAQAAIAWAAIAXAAIAHgBIAHgBQANAAAAAMQAAALgKACQgMACglAAQgmAAgKgKg");
	this.shape_36.setTransform(-6.6,-17.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0066").s().p("AgVBZQgPglgShFIgKghQgHgaAAgIQAAgFAEgEQADgDAFAAQAKAAACAKIAFAVIAMAqQALAsALAhIABgCIAghXIAKgeQAHgSAIgKQAEgFAGAAQAEAAAEAEQAEAEAAAFQAAAEgCADQgIAMgFAMIgJAbIghBYQgGAPgHAPQgDAIgHAAQgKAAgDgKg");
	this.shape_37.setTransform(-22.2,-17.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0066").s().p("Ag1BaQgDgEAAgFQAAgGADgDQAEgDAFgBQAIAAASgCQABgKAAgNIgBgUIAAgVQAAgbADgqIgQABIgQAAQgFgBgEgDQgDgEAAgFQAAgMALgBIAlgBQAYABAkAFQALABAAAMQAAAFgEAEQgEADgEAAIgUgCIgUgCQgDAkAAAeIABAWIAAAVIAAAUIAmAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAIgUAAIgVABIgXACQgQACgIABQgFgBgEgDg");
	this.shape_38.setTransform(-37.9,-17.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0066").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_39.setTransform(-52.2,-17.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0066").s().p("Ag1BaQgDgEAAgFQAAgGADgDQAEgDAFgBQAIAAASgCQABgKAAgNIgBgUIAAgVQAAgbADgqIgQABIgQAAQgFgBgEgDQgDgEAAgFQAAgMALgBIAlgBQAYABAkAFQALABAAAMQAAAFgEAEQgEADgEAAIgUgCIgUgCQgDAkAAAeIABAWIAAAVIAAAUIAmAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAIgUAAIgVABIgXACQgQACgIABQgFgBgEgDg");
	this.shape_40.setTransform(-68.5,-17.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0066").s().p("AhSBgQgDgEAAgFIABgQIAAgQIABgWIAAgXIAAgXIAAgZIgBgXIgCgWQAAgGAFgEQAFgGAGAAQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgCgJgBgEQABgPANAAQAVAAAABQIgBAoIAAAoIgCATQgCANgLAAQgHAAgJgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgNgBQgGAAgFgDg");
	this.shape_41.setTransform(-85.1,-17.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0066").s().p("Ag1BaQgDgEAAgFQAAgGADgDQAEgDAFgBQAIAAASgCQABgKAAgNIgBgUIAAgVQAAgbADgqIgQABIgQAAQgFgBgEgDQgDgEAAgFQAAgMALgBIAlgBQAYABAkAFQALABAAAMQAAAFgEAEQgEADgEAAIgUgCIgUgCQgDAkAAAeIABAWIAAAVIAAAUIAmAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAIgUAAIgVABIgXACQgQACgIABQgFgBgEgDg");
	this.shape_42.setTransform(-102.1,-17.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0066").s().p("Ag6BjQgEgEAAgFIABhIIABhHIAAgRIAAgQQAAgFADgEQAEgEAFABQADAAAEABIAbgDIAUgCQAOABATAEQAYAFAAAJQAAAFgDAEQgEAEgFAAIgEgBQgQgFgZgBIgSABIgYAFIAAA0QAYgGALAAQASAAAVACQALABAAAMQAAAFgEAEQgDACgGAAIgTgBIgSAAQgIAAgcAGIgBBUQAAAFgDAEQgEAEgEgBQgGABgDgEg");
	this.shape_43.setTransform(-115.7,-17.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0066").s().p("AhSBgQgDgEAAgFIABgQIABgQIAAgWIAAgXIAAgXIAAgZIgBgXIgCgWQAAgGAFgEQAEgGAHAAQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgCgJgBgEQABgPANAAQAVAAAABQIAAAoIgBAoIgCATQgCANgLAAQgGAAgKgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgNgBQgHAAgEgDg");
	this.shape_44.setTransform(-133.8,-17.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0066").s().p("Ag1BaQgDgEAAgFQAAgGADgDQAEgDAFgBQAIAAASgCQABgKAAgNIgBgUIAAgVQAAgbADgqIgQABIgQAAQgFgBgEgDQgDgEAAgFQAAgMALgBIAlgBQAYABAkAFQALABAAAMQAAAFgEAEQgEADgEAAIgUgCIgUgCQgDAkAAAeIABAWIAAAVIAAAUIAmAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAIgUAAIgVABIgXACQgQACgIABQgFgBgEgDg");
	this.shape_45.setTransform(-150.8,-17.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAeA7IgDgaQgDgOAAgNIABgLIAAgLQAAgbgKAAQgNAAgMARQgKAOgHAWIgBAMIgBAMIABALIAAALQAAAFgDAEQgDADgGAAQgEAAgEgDQgEgEABgFIgBgLIgBgLIACgiIABgiIAAgMIAAgMQAAgFADgEQAEgDAFAAQALAAABAQIABAOQAUgbAUAAQAUAAAIARQAFAMAAAWIAAAMIAAALQABAKACAQQADAQAAAKQAAAFgEAEQgDADgGAAQgKAAgBgMg");
	this.shape_46.setTransform(-171.3,-14.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AArA/IgJgmQgMACgUAEIgfAGQgGAQgQAfQgDAIgHgBQgFAAgEgDQgDgEAAgFQAAgGASgmQgCgEAAgEQAAgKAMgCQAOgaAVghQAcgvAHAAQAKAAADANIAIAqIASBTIAHATQADALAAADQAAAFgDAEQgEADgFAAQgLAAgIgdgAgPAJQAPgEAdgFIgKgug");
	this.shape_47.setTransform(-187.5,-17.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9900FF").s().p("Ag1BeQgLgLgBgnIABgRIABgUIgCgGQABgDACgDQADgkAAgRIgCgNIgBgNQAAgPAMAAQAFAAAEAEQAOgEAOgCQANgCAKAAQAdAAATAHQAHADABAJQAAAFgEADQgDAEgGAAIgDAAQgVgGgTAAQgKAAgLACIgaAGIACAMQAAARgDAeIA1gFIAdgDQAGAAADAEQAEADAAAGQAAAKgMABIgdADIg3AFIAAARIgBAOQAAAbAEAFQADADAQAAIAWAAIAWgBIAIgBIAHgBQANAAAAANQAAAKgLADQgLACglAAQgmAAgLgKg");
	this.shape_48.setTransform(182.2,19.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9900FF").s().p("AgVBZQgPglgShFIgKghQgHgaAAgIQAAgFAEgEQADgDAFAAQAKAAACAKIAFAVIAMAqQALAsALAhIABgCIAghXIAKgeQAHgSAIgKQAEgFAGAAQAEAAAEAEQAEAEAAAFQAAAEgCADQgIAMgFAMIgJAbIghBYQgGAPgHAPQgDAIgHAAQgKAAgDgKg");
	this.shape_49.setTransform(166.6,19.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9900FF").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgEAFAAQAIAAASgCQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFABgEgEQgDgDAAgGQAAgLALgBIAlgCQAYAAAkAGQALACAAALQAAAFgEAEQgEADgEAAIgUgBIgUgDQgDAkAAAfIABAUIAAAWIAAAVIAmgBQAFAAAEAEQADAEAAAEQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQADgIgBQgFABgEgEg");
	this.shape_50.setTransform(150.9,19.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9900FF").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_51.setTransform(136.6,19.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9900FF").s().p("AgyBLQgRgTAAgaQAAgoAigsQAegkAcAAIAKABIAJACQAFgHAGABQAJAAACALQACAKAAAOQAAAFgDAEQgDAEgGAAQgIABgEgKQgDgHgEgCQgCgCgKABQgSAAgUAbQgeAkAAAfQABARAJAKQALAMAOABQAMgBANgGQAHgEAOgLQAIgEADAAQAGAAADADQADAEABAFQAAAGgGAEQgfAdghAAQgZgBgRgTg");
	this.shape_52.setTransform(119.9,19.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9900FF").s().p("Ag0BeQgNgLAAgnIABgRIABgUIgCgGQAAgDADgDQACgkAAgRIgBgNIgBgNQAAgPAMAAQAFAAAEAEQAPgEAMgCQANgCALAAQAeAAARAHQAJADAAAJQAAAFgDADQgEAEgFAAIgEAAQgVgGgTAAQgKAAgLACIgZAGIABAMQAAARgDAeIA1gFIAdgDQAGAAADAEQAEADAAAGQAAAKgLABIgdADIg4AFIgBARIAAAOQAAAbAEAFQADADAQAAIAWAAIAXgBIAHgBIAHgBQANAAAAANQAAAKgKADQgMACglAAQgmAAgKgKg");
	this.shape_53.setTransform(104.6,19.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9900FF").s().p("AgxBVQgXgSAAgWQAAgPAMAAQAMAAAAAPQAAAKAPAKQAOAKAMAAQAJAAAEg+QACgcAAgsIgBgNIgHAAIgOAAIgOAAQgGAAgDgEQgEgDAAgGQAAgNARAAIAMABIAMAAIAXgBIAXgBQAbAAAAAOQAAAFgDAEQgDAEgGAAIgHgBIgIgBIgOABIAAAOQAABagMAqQgIAbgTAAQgVAAgVgPg");
	this.shape_54.setTransform(88.2,20);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#9900FF").s().p("AgmBjQgNgEgHgFIgCAAQgFgBgDgDQgEgDAAgGIABgmIABgmIAAgqIgBgrQAAgFAFgGQAGgFAFAAQADAAAQAIIAWALQAiALAYAZQAdAcAAAjQAAAUgKATQgKAUgRALQgTANgiAAQgJAAgMgCgAgtghIAAAiIgCBDIADACQAKAGARAAQAaABANgJQAMgIAHgOQAHgOAAgOQAAghgmgZQgLgIgtgUg");
	this.shape_55.setTransform(71.2,19.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9900FF").s().p("AAqA/IgHgmQgNACgUAEIggAHQgFAPgQAgQgDAGgHABQgFAAgDgEQgEgEgBgFQABgGASgnQgCgDAAgEQAAgKAMgDQANgYAWgjQAcguAHAAQAKAAADAOIAIAoIASBVIAHATQADAKAAADQAAAFgDADQgEAEgFAAQgLAAgJgdgAgPAJQAPgEAdgFIgKgvg");
	this.shape_56.setTransform(52.4,19.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF6600").s().p("Ag5BeQgEgFAAgFIAAgkIACgxQADgigBgQIACghQABgHADgCQAQgFAWAAQAVAAATAPQAXARAAAZQAAAfgZARQATAIAJAJQAJAKAAALQAAAPgQAOQgLAJgNAFQgaALgrAAQgFAAgFgFgAglAxIAAAZQAggBATgIQAIgDAJgIQAHgGAAgDQAAgGgQgHQgMgFgKgDIgNgCIgEAAIgFAAIgPgBIAAAcgAgghIIAAAWIgCAvIASABQASgCALgJQAMgMAAgQQAAgMgMgKQgNgKgNAAIgTABg");
	this.shape_57.setTransform(-10.8,19.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF6600").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_58.setTransform(-26.8,19.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF6600").s().p("Ag1BeQgLgLgBgnIABgRIABgUIgCgGQABgDACgDQADgkAAgRIgCgNIgBgNQAAgPAMAAQAFAAAEAEQAOgEAOgCQANgCAKAAQAdAAATAHQAHADABAJQAAAFgEADQgDAEgGAAIgDAAQgVgGgTAAQgKAAgLACIgaAGIACAMQAAARgDAeIA1gFIAdgDQAGAAADAEQAEADAAAGQAAAKgMABIgdADIg3AFIAAARIgBAOQAAAbAEAFQADADAQAAIAWAAIAWgBIAIgBIAHgBQANAAAAANQAAAKgLADQgLACglAAQgmAAgLgKg");
	this.shape_59.setTransform(-42.4,19.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF6600").s().p("AgVBZQgPglgShFIgKghQgHgaAAgIQAAgFAEgEQADgDAFAAQAKAAACAKIAFAVIAMAqQALAsALAhIABgCIAghXIAKgeQAHgSAIgKQAEgFAGAAQAEAAAEAEQAEAEAAAFQAAAEgCADQgIAMgFAMIgJAbIghBYQgGAPgHAPQgDAIgHAAQgKAAgDgKg");
	this.shape_60.setTransform(-57.9,19.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF6600").s().p("AgmBjQgNgEgHgFIgCAAQgFgBgDgDQgEgDAAgGIABgmIABgmIAAgqIgBgrQAAgFAFgGQAGgFAFAAQADAAAQAIIAWALQAiALAYAZQAdAcAAAjQAAAUgKATQgKAUgRALQgTANgiAAQgJAAgMgCgAgtghIAAAiIgCBDIADACQAKAGARAAQAaABANgJQAMgIAHgOQAHgOAAgOQAAghgmgZQgLgIgtgUg");
	this.shape_61.setTransform(-75.4,19.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF6600").s().p("AArA/IgIgmQgNACgUAEIggAHQgGAPgPAgQgDAGgHABQgFAAgEgEQgDgEAAgFQAAgGASgnQgCgDAAgEQAAgKAMgDQAOgYAVgjQAcguAHAAQAJAAAEAOIAIAoIASBVIAHATQADAKAAADQAAAFgDADQgEAEgFAAQgLAAgIgdgAgPAJQAPgEAdgFIgKgvg");
	this.shape_62.setTransform(-94.2,19.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0000FF").s().p("AhRBfQgEgDAAgGIABgPIABgPIAAgYIABgWIAAgXIgBgZIgBgWIgCgYQAAgFAFgFQAFgEAGAAQAGAAAKAOQAeAtAYAfQAcAiAjAhIAAgPIgBgQQAAg0gDghIgEgMQgDgJABgEQgBgOANAAQAWgBAABQIAAAnIgBApIgCAUQgCAMgLAAQgHAAgJgJQgxgvhAhYIgBAcIAAAbIAAAfIABAeQAAAggNABQgGAAgEgFg");
	this.shape_63.setTransform(-127.3,19.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0000FF").s().p("Ag1BIQgQgRgDgjQgCgPAAguIAAgbQABgLACgFQADgJAIAAQALAAAAAVIAABIQAABJAzAAQAwAAAAh8IAAgMIAAgKQAAgHADgGQADgHAHAAQAMAAAAARIAAAPIAAAPQAACMhJAAQglAAgSgWg");
	this.shape_64.setTransform(-146.5,19.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0000FF").s().p("Ag9BMQgZgWAAgjQAAgpAYgjQAdgmAoAAQApAAATASQAVATgBAoQAAApgWAiQgbAngpAAQgiAAgYgUgAgqgoQgUAbAAAgQABAXARAPQAQAOAZAAQAdAAATgeQASgagBghQAAgdgMgMQgNgLgeAAQgdAAgUAeg");
	this.shape_65.setTransform(-165.7,19.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0000FF").s().p("AhRBfQgEgDAAgGIABgPIAAgPIABgYIABgWIAAgXIgBgZIgCgWIgBgYQAAgFAFgFQAFgEAGAAQAGAAAKAOQAeAtAYAfQAdAiAiAhIAAgPIAAgQQAAg0gFghIgDgMQgCgJAAgEQAAgOAMAAQAWgBAABQIgBAnIAAApIgCAUQgCAMgLAAQgGAAgKgJQgxgvhAhYIgBAcIAAAbIAAAfIABAeQAAAggMABQgIAAgDgFg");
	this.shape_66.setTransform(-185.5,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_19},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.3,-37.8,404.7,75.7);


(lib.skiptomenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape.setTransform(16.7,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_1.setTransform(7.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_2.setTransform(-2.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(-14.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("Akah8II1AAIAAD5Io1AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkaB9IAAj5II1AAIAAD5g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgJgGgCgMQgEgaAAgTQAAgNADgRQACgIAHAAQAFAAACACQADADAAAEIgBAOIgCAPIABAbQABALADAHIAGADIAGABQAMAAAOgEIAAgUIAAgSQAAgUACgQQABgJAIAAQAEAAADADQADADAAAEIgCAkIAAAUIAAAVIABAHIAAAGQAAAEgDADQgDACgEAAQgHAAgCgJg");
	this.shape_6.setTransform(18.3,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAvIgCgVIgCgVIABgIIAAgKQAAgVgIAAQgKAAgJANQgJAMgFARIgBAJIgBAKIABAIIAAAJQAAAEgCADQgDADgEAAQgEAAgDgDQgDgDAAgEIAAgJIgBgIIACgbIABgbIAAgKIgBgJQAAgEADgDQADgCAEAAQAJAAABAMIAAAMQAQgWAQAAQAQAAAGAOQAEAJAAARIAAAKIAAAIQAAAIACANQADANAAAIQAAAEgDADQgDACgEAAQgIAAgCgJg");
	this.shape_7.setTransform(8.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAqQgOgMAAgWQAAgYAMgRQANgTAWAAQAPAAALAGQAMAGAAAOQAAAKgLAIQgEADgQAHIgkARQAFAIAIAEQAJAEAJAAQAHAAAJgCQALgEADgFQAEgFADAAQAEAAADADQACACAAAEQAAAKgRAIQgPAHgOAAQgVAAgOgLgAgTgZQgIAJgEARIAegNQAQgIAIgHQgJgHgOAAQgLAAgIAJg");
	this.shape_8.setTransform(-2.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA5QgCgDAAgEQAAgMgDgXQgCgVAAgMQAAgKgDgGQgHADgHAHIgLANIgFAGIgBAQIgBARIABAIIABAHQAAAEgDADQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADAEQADADAAAEIAAAGIgBAFIAAALQAFgLAKgIQAKgIAHAAQAPAAAFAPQAFgHAHgEQAIgDAJAAQAQAAAGARIAEAbIAHA2QAAAEgCADQgDADgFAAQgHAAgCgJQgCgKgBgUIgEgdIgDgNQgDgIgEAAQgEAAgJAGQgKAFgDAEIABASIADAZQACAPAAAKQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(-15.6,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3CJIptAAIAAkRIJtAAg");
	this.shape_10.setTransform(0,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("Ak2CJIAAkRIJtAAIAAERg");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_12.setTransform(16.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIgCgUIgBgSIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAJQAAADgDADQgCACgEAAQgEAAgCgCQgDgDAAgDIAAgJIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACALAAAHQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_13.setTransform(7.5,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_14.setTransform(-2.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_15.setTransform(-14.1,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEbh8IAAD5Io1AAIAAj5g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkaB9IAAj5II1AAIAAD5g");

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
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#EC0000","#9D0000","#480000"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape_1.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


(lib.fcb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAgKIB3AAIAAh3IAKAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_rightOut, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("Ag2A3IAAgKIBjAAIAAhjIAKAAIAABtg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_rightIn, new cjs.Rectangle(1,1,11,11), null);


(lib.fcb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag7A8IAAh3IB3AAIAAAKIhtAAIAABtg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_leftOut, new cjs.Rectangle(0,0,12,12), null);


(lib.fcb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AgxAyIAAhjIBjAAIAAAKIhZAAIAABZg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_leftIn, new cjs.Rectangle(1,1,10,10), null);


(lib.fcb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_check_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgLAiIgBAAIgVgVIgCgEIABgSQAAgFAGAAIADACIARARIAhgkIAEgDQAHAAAAAGIAAASIgCAEIgoAnIgDACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_disabled, new cjs.Rectangle(0,0,7.1,7), null);


(lib.fcb_check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAiIgBAAIgVgVIgCgEIABgSQAAgFAGAAIADACIARARIAhgkIAEgDQAHAAAAAGIAAASIgCAEIgoAnIgDACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check, new cjs.Rectangle(0,0,7.1,7), null);


(lib.fcb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_pressed, new cjs.Rectangle(0,0,9,9), null);


(lib.fcb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_disabled, new cjs.Rectangle(0,0,9,9), null);


(lib.fcb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background, new cjs.Rectangle(0,0,9,9), null);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcAIIgEgLIgDAKQgEAJgEAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgCgJIgCgHQgGATgDAAIgCgBIgBgDIABgCQACgEACgHIADgMQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAFAAACAIIACALIADgGIADgJQACgFACAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIADAKIACAHIADAIIABABIgBADIgDABQgDAAgCgJgAgUANIgBgIIAAgGIgBgHIgFAAIgFgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIAEAAIAFAAIAPAAIADAAIADAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIgNABIAAAHIABAHIAAAEIABADIgBADIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape.setTransform(57.3,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgCAAgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACIAFACIAEABIAGgBQAEgCAAgCQAAgGgIgCIgEgCIgIgCQgDgCAAgFQAAgJAIgEIAIgDIAIgDIADAAIAEABIABADIABAEIAAADIgBAEIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIgCgEIgKADQgGACAAAFIACAAQAJACAGADQAHAEAAAJQAAAHgGADQgFADgIAAQgFAAgGgCg");
	this.shape_1.setTransform(51,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLATQgHgGAAgJQAAgIAGgJQAGgLAIAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgBIgCgCQgCgCgGAAQgEAAgEAIQgEAIAAAEQAAAGAEADQADADAGAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgHADgDAAQgJAAgFgGg");
	this.shape_2.setTransform(46.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAgQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgIIAAgIIABgKIAAgKQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBIACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAKIAAAKIAAAIIAAAIQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCABIgDgBgAgCgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(43.1,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALAVIgBgJIgBgKIAAgDIAAgEQAAgKgDAAQgFABgEAFQgEAGgCAGIAAAFIgBAEIABAEIAAAEIgBADIgDACIgEgCIgBgDIAAgEIAAgEIAAgMIABgMIAAgEIAAgEIABgEIADgBQAEABAAAFIABAFQAHgKAHAAQAHAAADAHQABAEABAIIAAAFIAAACIABAKIAAAJIgBAEIgDABQgEAAAAgFg");
	this.shape_4.setTransform(39.5,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_5.setTransform(34.8,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAiIgCgLIgBgLIAAgDIAAgDQAAgIgDABQgGAAgDADIgHAKQAAARgBADQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBgEIABgBIAAgGIAAgHIAAggIABgHIgBgEIAAgEQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABgBQADAAAAAEIABAIIAAAKIAAAJIAAAFQAEgFAEgDQADgDAFABQAGAAAEAEQABAEAAAHIABAIIAAAJIACAJIABACQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgDABQgDAAgBgCg");
	this.shape_6.setTransform(30,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLATQgHgGAAgJQAAgIAGgJQAGgLAIAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgBIgCgCQgCgCgGAAQgEAAgEAIQgEAIAAAEQAAAGAEADQADADAGAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgHADgDAAQgJAAgFgGg");
	this.shape_7.setTransform(25,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAFADABQAEACAEAAIAHgBQAFgCACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAFgCAGIAOgFQAHgEADgCQgDgEgHAAQgFAAgDAEg");
	this.shape_8.setTransform(20.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAhIgCgHIgCgIQgCgGgDgXIgJAZIgDAJIgEAIQgBADgCAAQgDAAgCgDIgBgFIgBgEIgIghIgCAIIgGAWIgBANQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIAAgDQAAgHACgLIAGgQIACgPQACgJACgDQACgDACAAQADAAABAEQADAEABAMQADAOAFAPQAFgPAFgTIABgGIACgGQACgEADAAQAEAAABAIIADAKQACATADAOIADAIIACAHQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(13.8,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_10.setTransform(5.1,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_11.setTransform(0.5,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAaQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgCgDQgDABgCAEIgGAFIgCADIAAAHIgBAIIABADIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIgEABQgEAAAAgLIAAgIIABgHIgBgHIAAgHQgBgKAFAAIADABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIAAACIgBADIAAAFQACgFAFgEQAEgEADAAQAHAAACAHQADgDACgCQAEgBAFAAQAGAAADAIIACAMIAEAYIgCADIgDABQgEAAAAgDIgCgOIgCgNIgBgGQgCgEgBAAIgGADIgGAEIAAAIIACALIABAMIgBADIgEABQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_12.setTransform(-5.2,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAaQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgCAEIgGAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIgDABQgGAAAAgLIABgIIAAgHIAAgHIgBgHQABgKAEAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQADgFAEgEQAFgEADAAQAGAAACAHQACgDADgCQAEgBAEAAQAIAAACAIIACAMIAEAYIgCADIgDABQgDAAgBgDIgCgOIgCgNIgBgGQgBgEgCAAIgGADIgFAEIAAAIIABALIABAMIgBADIgEABQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_13.setTransform(-12.2,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_14.setTransform(-18.1,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_15.setTransform(-22.4,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAeQgFgGAAgMQAAgLAFgLQAGgMAIgIQAGgFAFAAQAEAAAGACQAJAEgBADIgBAEIgDABIgDgBQgGgEgFAAQgDAAgDAEIgFAFQgKAOAAAPQAAAIADAEQACADAHAAQAIAAAGgFQAGgFACgKQgNAAgHAEIgCABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgCgCQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAJgFAWAAIAEABIABACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDANgJAIQgJAIgLAAQgKAAgGgGg");
	this.shape_16.setTransform(-27.7,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAhIgBgDIADgIIAKgXQAFgPAHgHIABgBIgVgBIgKAAQgEAAAAgEQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIARABIAPAAIAIAAQAFAAAAADQAAACgDADIgEAFQgFAHgFAJIgIARIgDAKIgEAKQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgDgCg");
	this.shape_17.setTransform(-36.2,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAiIgIAAIgEAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgFAHAAIACAAIACAAIAAgGIgBgGIABgQIABgRQgGAEgBAAIgDgBIgCgDQAAgCAEgDIAHgFQADgEADAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAADIAAADIAAAFIAAAEIgBAPIgCAOIABAGIABAGIAEAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIABADIgBADIgDABg");
	this.shape_18.setTransform(-41,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAXQgFgJAAgPQAAgMAGgKQAIgLALAAQAMAAAGAKQAGAJAAAMQAAATgHAJQgGAKgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAANAEAIQAEAHAHAAQAJAAAEgLQADgHAAgLQAAgLgEgHQgEgFgHAAQgHgBgFAJg");
	this.shape_19.setTransform(-45.9,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgGABIgGAAIgFAAIgFABIgCAAIgBAAQgDAAgBgDIgBgGQAAgKAGgGQADgDALgHIAHgGQAEgFAAgFQAAgDgEgCQgDgCgDAAQgDAAgEACIgGAFIgDABQgEAAAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAFgFAEgCQAFgDAFAAQAHAAAGAEQAGAEAAAHIgBAJIgEAGQgDADgIAFQgIAFgCADQgFAFAAAHIAJAAIAMgBIAHABQAEACAAACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgCABIgEgBg");
	this.shape_20.setTransform(-51.3,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeABQgBgLALgKQALgJANAAQANAAAHAIQAIAIAAAMQAAAKgJAKQgKALgNAAIAAAAQgfAAABgdgAgOgPQgJAHABAJQAAALAFAFQAHAFAKAAQAKAAAHgJQAGgIAAgHQAAgJgDgFQgFgFgJAAIgCAAQgLAAgHAGgAgLAJQgFgEAAgFQAAgHAHgFQAGgEAHAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAIgBAAIgBAAQgEAAgEACQgFADAAADQAAACAEABIAEACQADAAADgDIAEgCIAEABIABADQgBADgEADQgGADgEAAQgFAAgFgEg");
	this.shape_21.setTransform(-57.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-7.1,126.6,16.6);


(lib.ButtonBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1,1,1).p("AEtC6IpZAAIAAlzIJZAAg");
	this.shape.setTransform(31.2,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AksC6IAAlzIJZAAIAAFzg");
	this.shape_1.setTransform(31.2,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.6,62.2,39.2);


(lib.WhiteSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.753)").s().p("EggOAQLMAAAggVMBAaAAAIAAP3IADAAIAADcIgDAAIAANCg");
	this.shape.setTransform(206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteSheet, new cjs.Rectangle(0,0,412.6,207), null);


(lib.INFINITIVES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB4CYIAAkvIG/AAIAAEvg");
	mask.setTransform(56.7,-1.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AgxA8QgLgIAAgMQAAgGADgDQAEgEAFAAQAJAAAEAIQAGAMASAAQAPAAAPgHQAPgHABgJQAAgMgLgDQgGgDgUAAQgQgBgNgFQgRgHAAgPQAAgSATgPQAUgPAVAAQAKAAANAEQAQAGAAAGQAAAFgDAEQgDAEgGAAIgNgCIgOgCQgMAAgJAGQgLAGAAAHQAAADADACQADADAIABIAWABQAVABALAKQAOALAAATQAAAYgbANQgVAJgaAAQgXAAgOgLg");
	this.shape.setTransform(60.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AgqBHQgKgJAAgeIACgkIABglIAAgKIgBgJQgBgPANAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAJADAAAKQgBAEgDAEQgEAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAkgDIAVgCQAGAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEAEQAFADAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_1.setTransform(47.8,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6699").s().p("AgUBCQgKgbgOgyIgIgZQgFgSgBgHQABgEAEgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAUg3IAIgWQAGgNAHgHQADgFAHAAQAEAAAFAEQADADAAAGQABADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgJAAgFgJg");
	this.shape_2.setTransform(35.3,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_3.setTransform(23.5,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6699").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_4.setTransform(11.9,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_5.setTransform(-0.1,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6699").s().p("AhABHQgEgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIAAgOIgBg9IgBgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgBAPQgCAMgMAAQgHAAgHgHQglgggrg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgEgFg");
	this.shape_6.setTransform(-12.9,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYADgXIgVABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgYgDQgBARAAAbIAAArIAZgBQAGAAADADQAEAFAAAEQAAAGgEADQgDAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_7.setTransform(-25.9,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6699").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_8.setTransform(-36.6,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6699").s().p("AhBBHQgDgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIABgOQAAgtgCgQIgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgGAAgJgHQgkgggrg6IgBAdIAAAWIABAWQAAAcgNAAQgHAAgFgFg");
	this.shape_9.setTransform(-50.3,-0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_10.setTransform(-63.3,-0.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0066").s().p("AgxA8QgLgIAAgMQAAgGADgDQAEgEAFAAQAJAAAEAIQAGAMASAAQAPAAAPgHQAPgHABgJQAAgMgLgDQgGgDgUAAQgQgBgNgFQgRgHAAgPQAAgSATgPQAUgPAVAAQAKAAANAEQAQAGAAAGQAAAFgDAEQgDAEgGAAIgNgCIgOgCQgMAAgJAGQgLAGAAAHQAAADADACQADADAIABIAWABQAVABALAKQAOALAAATQAAAYgbANQgVAJgaAAQgXAAgOgLg");
	this.shape_11.setTransform(60.1,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0066").s().p("AgqBHQgKgJAAgeIACgkIABglIAAgKIgBgJQgBgPANAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAJADAAAKQgBAEgDAEQgEAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAkgDIAVgCQAGAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEAEQAFADAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_12.setTransform(47.8,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0066").s().p("AgUBCQgKgbgOgyIgIgZQgFgSgBgHQABgEAEgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAUg3IAIgWQAGgNAHgHQADgFAHAAQAEAAAFAEQADADAAAGQABADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgJAAgFgJg");
	this.shape_13.setTransform(35.3,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_14.setTransform(23.5,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0066").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_15.setTransform(11.9,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_16.setTransform(-0.1,-0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0066").s().p("AhABHQgEgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIAAgOIgBg9IgBgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgBAPQgCAMgMAAQgHAAgHgHQglgggrg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgEgFg");
	this.shape_17.setTransform(-12.9,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYADgXIgVABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgYgDQgBARAAAbIAAArIAZgBQAGAAADADQAEAFAAAEQAAAGgEADQgDAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_18.setTransform(-25.9,-0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0066").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_19.setTransform(-36.6,-0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0066").s().p("AhBBHQgDgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIABgOQAAgtgCgQIgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgGAAgJgHQgkgggrg6IgBAdIAAAWIABAWQAAAcgNAAQgHAAgFgFg");
	this.shape_20.setTransform(-50.3,-0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_21.setTransform(-63.3,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-16.9,139.2,30.5);


(lib.InfinitiveLines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0066").ss(10,1,1).p("ACUhDICHCHAJDhDICHCHAFshDICHCHAPyhDICHCHATKhDICHCHAWhhDICHCHAMbhDICHCHAZ5hDICHCHAdQhDICHCHA7/hDICHCHA/WhDICHCHA4nhDICHCHA1QhDICHCHAx4hDICHCHArJhDICHCHAkahDICHCHAnyhDICHCHAuhhDICHCHAhDhDICHCH");
	this.shape.setTransform(200.7,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0066").ss(10,1,1).p("ACUhDICHCHAJDhDICHCHAFshDICHCHAPyhDICHCHAWhhDICHCHATKhDICHCHAMbhDICHCHAdQhDICHCHAZ5hDICHCHA/WhDICHCHA7/hDICHCHA1QhDICHCHA4nhDICHCHAx4hDICHCHArJhDICHCHAkahDICHCHAnyhDICHCHAuhhDICHCHAhDhDICHCH");
	this.shape_1.setTransform(200.7,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0A6B").ss(10,1,1).p("AZ5g1ICHBrAdQg1ICHBrAWhg1ICHBrAPyg1ICHBrAJDg1ICHBrAMbg1ICHBrACUg1ICHBrAkag1ICHBrAhDg1ICHBrAFrg1ICHBrArJg1ICHBrAx4g1ICHBrAugg1ICHBrA4ng1ICHBrA1Qg1ICHBrA/Wg1ICHBrA7/g1ICIBrAnxg1ICHBrATJg1ICHBr");
	this.shape_2.setTransform(201.1,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF1470").ss(10,1,1).p("AZ5goICHBRAdQgoICHBRATKgoICHBRAWhgoICHBRAPygoICHBRAJDgoICHBRAMagoICHBRACUgoICHBRAkagoICHBRAhDgoICHBRAFsgoICHBRArJgoICHBRAx4goICHBRAuggoICHBRA4ngoICHBRA1PgoICHBRA/WgoICHBRA7+goICHBRAnxgoICHBR");
	this.shape_3.setTransform(201.5,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF1F75").ss(10,1,1).p("AZ5gaICHA1AdQgaICHA1ATJgaICHA1AWhgaICHA1APygaICHA1AJDgaICHA1AMbgaICHA1ACUgaICHA1AkagaICHA1AhDgaICHA1AFrgaICHA1ArJgaICHA1Ax4gaICHA1AuggaICHA1A4ngaICHA1A1QgaICHA1A/WgaICHA1A7/gaICIA1AnxgaICHA1");
	this.shape_4.setTransform(201.9,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF297A").ss(10,1,1).p("AZ5gMICHAZAdQgMICHAZATKgMICHAZAWhgMICHAZAPygMICHAZAJDgMICHAZAMagMICHAZACUgMICHAZAkagMICHAZAhDgMICHAZAFsgMICHAZArJgMICHAZAx4gMICHAZAuggMICHAZA4ngMICHAZA1PgMICHAZA/WgMICHAZA7+gMICHAZAnxgMICHAZ");
	this.shape_5.setTransform(202.2,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF3380").ss(10,1,1).p("AZ5AAICHAAAdQAAICHAAATJAAICHAAAWhAAICHAAAPyAAICHAAAJDAAICHAAAMbAAICHAAACUAAICHAAAkaAAICHAAAhDAAICHAAAFrAAICHAAArJAAICHAAAx4AAICHAAAugAAICHAAA4nAAICHAAA1QAAICHAAA/WAAICHAAA7/AAICIAAAnxAAICHAA");
	this.shape_6.setTransform(202.6,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF3D85").ss(10,1,1).p("AZ5ANICHgZAdQANICHgZATKANICHgZAWhANICHgZAPyANICHgZAJDANICHgZAMaANICHgZACUANICHgZAkaANICHgZAhDANICHgZAFsANICHgZArJANICHgZAx4ANICHgZAugANICHgZA4nANICHgZA1PANICHgZA/WANICHgZA7+ANICHgZAnxANICHgZ");
	this.shape_7.setTransform(203,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF478A").ss(10,1,1).p("AZ4AbICHg1AdQAbICHg1ATKAbICHg1AWhAbICHg1APyAbICHg1AJDAbICHg1AMaAbICHg1ACUAbICHg1AkaAbICHg1AhDAbICHg1AFrAbICHg1ArJAbICHg1Ax4AbICHg1AuhAbICHg1A4nAbICHg1A1QAbICHg1A/WAbICHg1A7/AbICHg1AnyAbICHg1");
	this.shape_8.setTransform(203.3,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF528F").ss(10,1,1).p("AZ5ApICHhRAdQApICHhRATKApICHhRAWhApICHhRAPyApICHhRAJDApICHhRAMaApICHhRACUApICHhRAkaApICHhRAhDApICHhRAFsApICHhRArJApICHhRAx4ApICHhRAugApICHhRA4nApICHhRA/WApICHhRA7+ApICHhRA1PApICHhRAnxApICHhR");
	this.shape_9.setTransform(203.7,6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF5C94").ss(10,1,1).p("AZ4A2ICHhrAdQA2ICHhrATKA2ICHhrAWhA2ICHhrAMaA2ICHhrAPyA2ICHhrAJDA2ICHhrACUA2ICHhrAkaA2ICHhrAhDA2ICHhrAFrA2ICHhrArJA2ICHhrAx4A2ICHhrAuhA2ICHhrA4nA2ICHhrA/WA2ICHhrA7/A2ICHhrA1QA2ICHhrAnyA2ICHhr");
	this.shape_10.setTransform(204.1,6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF6699").ss(10,1,1).p("AcAhDIiHCHAYohDIiHCHAVRhDIiHCHAfXhDIiHCHAR5hDIiHCHAOhhDIiHCHALKhDIiHCHAEbhDIiHCHAiThDIiHCHABEhDIiHCHAHzhDIiHCHApChDIiHCHAvxhDIiHCHAsZhDIiHCHA2ghDIiHCHA53hDIiHCHA9PhDIiHCHAzIhDIiHCHAlqhDIiHCH");
	this.shape_11.setTransform(204.5,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF6699").ss(10,1,1).p("AZ5BEICHiHATKBEICHiHAWhBEICHiHAdQBEICHiHAMaBEICHiHAPyBEICHiHAJDBEICHiHACUBEICHiHAkaBEICHiHAhDBEICHiHAFsBEICHiHArJBEICHiHAx4BEICHiHAugBEICHiHA4nBEICHiHA/WBEICHiHA7+BEICHiHA1PBEICHiHAnxBEICHiH");
	this.shape_12.setTransform(204.5,6.8);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF6699").ss(10,1,1).p("AcAhDIiHCHAVRhDIiHCHAYohDIiHCHAfXhDIiHCHAOhhDIiHCHAHzhDIiHCHALKhDIiHCHABEhDIiHCHAEbhDIiHCHAlqhDIiHCHAiThDIiHCHApChDIiHCHAvxhDIiHCHAsZhDIiHCHA2ghDIiHCHA9PhDIiHCHA53hDIiHCHAzIhDIiHCHAR5hDIiHCH");
	this.shape_13.setTransform(204.5,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(17).to({_off:false},0).wait(4).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,411.4,23.5);


(lib.INFINITIVE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB4CYIAAkvIG/AAIAAEvg");
	mask.setTransform(56.7,-1.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AgqBHQgKgJgBgeIACgkIACglIgBgKIgBgJQABgPANAAQAEAAADACIAVgDIARgCQAXAAAOAFQAJADAAAKQAAAEgDAEQgFAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAjgDIAXgCQAFAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQgBASADACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAFAEQADADABAGQgBALgKACQgJABgcAAQgfAAgJgIg");
	this.shape.setTransform(54.4,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AgTBCQgMgbgOgyIgHgZQgGgSABgHQgBgEAFgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAVg3IAIgWQAFgNAHgHQAEgFAFAAQAFAAAEAEQAEADABAGQAAADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgKAAgDgJg");
	this.shape_1.setTransform(41.9,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_2.setTransform(30.1,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6699").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_3.setTransform(18.5,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgYgDQgCARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_4.setTransform(6.5,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6699").s().p("AhBBHQgDgDAAgGIABgLIAAgLIAAgQIABgRIgBgRIAAgRIAAgRIgCgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIAAgOIgBg9IgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgHAAgHgHQgkgggsg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgFgFg");
	this.shape_5.setTransform(-6.3,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_6.setTransform(-19.3,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6699").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_7.setTransform(-30,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6699").s().p("AhABHQgEgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIABgOIgBg9IgCgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgCAPQgCAMgLAAQgGAAgJgHQgjgggsg6IgBAdIAAAWIABAWQAAAcgNAAQgIAAgDgFg");
	this.shape_8.setTransform(-43.7,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_9.setTransform(-56.7,-0.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(9));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0066").s().p("AgqBHQgKgJgBgeIACgkIACglIgBgKIgBgJQABgPANAAQAEAAADACIAVgDIARgCQAXAAAOAFQAJADAAAKQAAAEgDAEQgFAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAjgDIAXgCQAFAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQgBASADACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAFAEQADADABAGQgBALgKACQgJABgcAAQgfAAgJgIg");
	this.shape_10.setTransform(54.4,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0066").s().p("AgTBCQgMgbgOgyIgHgZQgGgSABgHQgBgEAFgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAVg3IAIgWQAFgNAHgHQAEgFAFAAQAFAAAEAEQAEADABAGQAAADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgKAAgDgJg");
	this.shape_11.setTransform(41.9,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_12.setTransform(30.1,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0066").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_13.setTransform(18.5,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgYgDQgCARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_14.setTransform(6.5,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0066").s().p("AhBBHQgDgDAAgGIABgLIAAgLIAAgQIABgRIgBgRIAAgRIAAgRIgCgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIAAgOIgBg9IgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgHAAgHgHQgkgggsg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgFgFg");
	this.shape_15.setTransform(-6.3,-0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_16.setTransform(-19.3,-0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0066").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_17.setTransform(-30,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0066").s().p("AhABHQgEgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIABgOIgBg9IgCgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgCAPQgCAMgLAAQgGAAgJgHQgjgggsg6IgBAdIAAAWIABAWQAAAcgNAAQgIAAgDgFg");
	this.shape_18.setTransform(-43.7,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_19.setTransform(-56.7,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-16.9,126.1,30.5);


(lib.BeachScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("EAi9AX3MhF5AAAMAAAglhIAAqMIAAAAMBF5AAAIAAAAIAAADIAAPbIAAACIAAAMIAAHeIAAACIAAAMIAAYRgEAi9AX3IAAAA");
	this.shape.setTransform(213.7,152.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D9AF9A","#993300"],[0,1],31.5,78.6,-49.3,-60.6).s().p("AgWBuQgPgLAOgiIAbg8IgBgFQgDgSALgtQAEgRAAgNQAAgIgCgGIAFgDIAJgCQAAADAEAAIgCAQQgGAogOA1IgCAGIgCAIQgRA/gDAdIAAAHQgEgBgDgCg");
	this.shape_1.setTransform(59.4,59.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-263.2,-132.4,-282.9,320.4).s().p("AA+A8IgHgKQgSgYgeABQADAKAKARQgKABgIgGIgJgGIAAAAIAAgCIABgBQgBgFgMAAQgMAAgGADIgDgEQgDABgKAHIgEADQgMAIgFgMQAEgGARgGIABgBQAQgFADgJQgIgBgMADQgMACgRAHQgcAKgLgIQAHgFAdgNQAXgKAJgMQg8ARgPgQQANgKAkgIQARgDAJgFQAKgEADgEIgNAAQgzAAgRgOQAdgKAmADIABAAQAnAEAOARQgBgHgRgTQgOgRAGgFQATABAaAgQASAVASgJIAGgEQADAMgFAKIgEAOIgBAFIABAAQAbAIAYASQAbAWgEASQgLgRgTgNQgXgOgPAKQATABAHAdIACAKQADAVgLAOQgLgWgIgNg");
	this.shape_2.setTransform(64,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D9AF9A","#993300"],[0,1],-55.3,29.9,25.1,-109.4).s().p("AgBgBIABAAIACADIgDgDg");
	this.shape_3.setTransform(147.5,89.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#009900","#14A110","#FFFFCC","#FCE794"],[0.149,0.38,0.565,1],251.7,-159.1,282.1,212.1).s().p("AgCgBQgDgHABgDIADALQABAHAFAFQgFgCgCgLg");
	this.shape_4.setTransform(123,85.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D9AF9A","#993300"],[0,1],37.3,76.9,-4.7,-78.5).s().p("ABADyIADgKQANgsALgKQgEALAAAaQAAAFgMAMIgBABIAAgBQADgEgEgBIgBAAIgCAFIgGAKIAAAAIAAAAgABAC4IAFgEIAAAAIgFAMgABjCtIABgCIAAACIgBABIAAgBgABVCVIgFgNQgIgTgEgUQgFgagKgdIgNghQgHgPACgQIADgFIADgCQgLgHgNgMQgQgSgSgdQgNgUgIgSQgLgXgEgRQgQgBgQgWQgRgXAEgXQA1AyAnA7QAXAmATApIAKAWIANAgIANAuQALAoAHArIAAAFIABACIADAeQgEgHgFgKgAASgxQALAEAEgIIgHgBQgFAAgDAFg");
	this.shape_5.setTransform(104,62.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-172.1,-186.3,-308.3,246).s().p("AhiBDQAEgeANgbQgQAGgVAdQgWAegPAGQgFgjAfgsQAUgdAYgTQgPAAgdAGQgbAFgRAAQAPgaAlgHQALgCA7gCQgHgNgQgPIgagbQAgAAAeAUQAZAQAPAbQAHgbAWgKQAPgGAfAAQgEAQgPASQgQARgEAQQAagSApAEQAYACATAJQALAFAJAIIAGAFIgOAAIgbgBIgNAAQgnADgRARQAfAGAVAKIAEACQAuAXgFAoIhEglQgugVgXAVQAAAHAVAFQAUAFgHANQgNAAgLgJQgKgJgKgBQAAAFgYAYQgbAZACAYQgJgUABg0QgKAHgLAdQgLAdgJAIQgTgUAFgpg");
	this.shape_6.setTransform(91.8,31.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D9AF9A","#993300"],[0,1],36.1,69.8,-44.8,-69.4).s().p("AhLC9IARgdIgFALIAFATQAAgIACgJIAEgKIACgEQAIgTALANQgFACgEAIIgEAMIAAACQgEAPgJABIgEAJQgHgEgHgJgAggC1IABAAIgBACIAAgCgAglCFIAAAAQATgXALggIALgmIAFgPQAJAJgFAYIgCAIIgCAEIAAACIgGAQQgSAtgTAAIgDAAgAARgKIAEgNIAcg7IgBgGQgCgTAKgsIACgHQAFgXgEgPIAFgCIAIgCQABACADABIgFAoQgGAfgKAmIgCAGIgDAJIgJAiQgLArAAAVQgVgGAIgdg");
	this.shape_7.setTransform(131.8,65.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-263.2,-132.4,-282.9,320.4).s().p("ABMBUQgMgUgHgLIgCgDQgSgYgeABQADAKAKARQgKABgIgGIgJgGIAAAAIAAgCIABgBQgBgFgMAAQgMAAgGADIgDgEQgDABgKAHIgEADQgMAIgFgMQAEgGARgGIABgBQAQgFADgJQgIgBgMADQgMACgRAHQgcAKgLgIQAHgFAdgOIARgIQAKgGAFgGQgQAEgNACQgjAGgLgMQAFgEAKgEQANgFAVgFQARgDAJgFQAKgEADgEIgNAAQgzAAgRgOQAdgKAmAEIABAAQAnADAOARQgBgHgRgUQgOgPAGgGQATABAaAgQASAVASgJIAGgEQADAMgFAKIgEAOIgBAFIABAAQAXAHAUANIAIAGQAOALAFALQAGAJgCAJQgEgHgGgGQgIgJgMgIIgLgGQgQgGgLAIQAKAAAHAIQAGAIADAOQADAKAAAJQgBAPgIALIgFgLg");
	this.shape_8.setTransform(140.9,40.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#D9AF9A","#993300"],[0,1],-52,20.8,55.9,-16.7).s().p("AhFBtIAIgFIAEgGIgFANIgHgCgAhIBlIABgBQAIgKgCgEQAMgDgHAMIgFAIIgGAGIgCAAIgDAAQAAgDAEgFgAhQBjIAAAAIAAABIAAgBgAg3BGQAAgHAGgLIAEgHQARgdAOgDIgVAeQgMATgFAQQgEgBABgHgAgXAHQAPgMAcgnIADgFQAcglAXgYQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBIADAEIAAADQgLAGgMAPQgWAcgLAGIgUAkQgMAUgLAAIgFgBg");
	this.shape_9.setTransform(185.6,88);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D9AF9A","#993300"],[0,1],9.6,61.4,9.3,-38.6).s().p("AAQBEIgBgDIgFgIIgBgEIgHgQIgBgFQgKggACgUQgJgDgGgPIgDgLQgCgKAEgJIAMAVQAOAcAKAdIAFAQIADALIADANIADAPIAAAAIAAACIgDAAIgBAAIACgBQgEgDgDABIgDABIACABQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAIgEACIgBgBg");
	this.shape_10.setTransform(163.3,86.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-73.4,-138.3,-224.6,99.1).s().p("ABTBRIgLgKIgBgBIgEgEIgSgSQgZgTgRAJQgBADAMAHQALAGgGAHQgIgCgFgHQgFgHgFgCQAAACgTALQgHAEgFAEQgJAIgCAJQgBgHACgOIAGgXQgHACgLAPIgBABQgLAQgGADQgHgNAGgTIACgHQAHgRANgOQgLABgSAOIgMAJQgJAGgHAAQACgNAKgNQAGgIAKgIQASgPARgHQgJgCgTgCIgRgBIgKgDQAGgFAHgDQAKgEAOABQAHAAAjAJQgCgJgHgMIgLgUQATAFAPARQAMAOAFASQAIgPAPgCQAKgCATAFQgFAKgMAIQgNAIgFAIQATgGAYAJIAPAGIAHAFIAEADIABACIAHAHIADAEIgDgBIgHgCIgCAAIgDgBIgLgDIgHgCQgYgFgMAIQAXANAMANIAFAFQAFAHACAIIAAADQABAIgDAIIgBgBg");
	this.shape_11.setTransform(160.7,74.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#D9AF9A","#993300"],[0,1],25.9,50.3,-32.1,-49.5).s().p("Ag1CMIgBAAIANgWIgEAIIAEAOIAAgFIACgHIAEgLQADgIAEAAIACAHQgDAEgCAIIAAACIgBADQgCAHgFABQgGgBgIAAgAgMBNIAIgSQAGgaAFgMQAKAKgPAjQgFAPgGAIIgDgMgAAVgXIAJgTIAEACIgHAbIgGgKgAAjhAQgBgOAHgbQAFgUgEgMIAEgCIAGgBQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQgDAggMAuIgFgEg");
	this.shape_12.setTransform(166.8,80.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-188.7,-94.9,-202.8,229.7).s().p("AAnAkQgMgRgWAAQACAIAHAMQgGAAgHgEIgGgEIAAAAIAAgCIABAAQAAgEgKAAQgIAAgEACIgDgDQgCABgKAIQgIAFgEgJQADgEANgEQAMgEABgHQgKgBgYAJIgIACQgOAEgHgFIARgJIAJgEQARgGAGgJQgXAHgOAAQgMgBgFgGQAFgDAHgCQAJgEAPgDQAXgFAEgHQgsABgOgKQAVgIAbADQAdACAKAMQAAgFgNgOQgKgLAEgEQAOABATAXQAOARAQgMQACAJgEAHQgDAJAAAEQAUAGARANQATAQgDANQgHgNgOgJQgQgKgLAIQAOAAAEAVQAFAUgJAMQgLgWgIgKg");
	this.shape_13.setTransform(173.3,63.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],181.5,24.6,-49.9,238.6).s().p("AAWAiQgHgQgIgEQgEAFAEAIQAFAIgCAEQgIAEgBgHQAAgJgBgCIgDABQgBgEgFgDQgFgEgDACIAAABIgBAAIAAABIgIgBQgGAAgEgEIAUgIQgMgJgUAEQgMADgXAJQADgMASgJQASgLAIAGQAAgKgSgBQgOgBgOAFQAIgKAXgBQAUgBAQAFQADgCAFgIQAEgGAGgEQAAAOAWgEQAcgGAJAGQAAAEgOADQgSADgFADQAQgEASAMQASALAHANQgQABgZgUQgDAGAKANQAMAPAAAJQgPADgRgbQgCAIAEAMQAFAQABAEQgJAAgHgOg");
	this.shape_14.setTransform(194.9,74.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],-167.2,-47.7,-167.2,-196.2).s().p("AgwBhIAAgkIAYAAQAJAAAggZQAhgYAEAAQAuAAArAZQAjAVAAAJQAAAfgbACQiYACgOAHIgNANQgEgDgQgWgAAfBSIgVAEIAAADQABACARAAIA1gEIAogFIAAgDQgCgCgiAAIg2AFgAA4A4QgYANAAADQAAACAAABQAAABAAAAQABAAAAAAQAAAAAAgBIAEABQAGgGAegKQAdgKAEgHQgCgCgIAAQgPAAgZAPgAAXA6QgUAKAAACQAAABAAABQAAABAAABQAAAAABAAQAAAAAAgBIAFAAQBBgmAAgEIgCgEQgWARgbAOgAiqghQgHgHAAgPQAEgTAAgJIAHgBQAGAAAKACIAAACIgFAGQAAACAAABQAAABAAAAQAAABABgBQAAAAAAAAQADADAEAAIAmgbQAsgbAmAAIATAAQgFAJAgATQAlAVAAAYQgJAeg5AAQgnAAgZgJQgagJgFAAQgcAAgJAcQgWgTgGgGgAhEg6QAAACAAABQAAABAAAAQAAAAAAAAQABAAAAgBIA2AAQAMAAABgFQgBgCgKAAQg5AAAAAEgAiBg9QABACAGAAQAVAAAhgNQAlgNALgQQhGAcgnAMg");
	this.shape_15.setTransform(396.2,196.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A3839").s().p("AYBRYQgFgEgDAAQABgGAGABQAGAAAAAFQgBAEgCAAIgCAAgA6GL2QAGgUAAAUQAAAKgBAAQgCAAgDgKgA3/LhIAEgIQACgEAAAFIABAHQAAAKgCAAQgCAAgDgKgAc2jcQgNgHAWAAIAgAAIA2gNQAdgKAEgYQAFABACAGIAAANQgOAGgGAOIg1ALQgVAEgTAAIgWgBgEAgXgDzQAmgRAHgOQAIAUghAOIg4AUQABgHAjgQgAZGkOQA0gSANgGQgQATgjALIhAARQAGgJAsgOgAVhkJQAYgOAvgWQgfAdgjAMgAmIrGIgCAAIADgCQADgBAEADIgCACIgCAAIAAAAIgEgCgA4kuoQgUgEgRgXQgPgCgRAEQgVAFgIAAQAHgPAkAAQAqAAAKgFQgMgTgsAEQgxAIgRAAQAOgUAogPQAzgUAKgGQgqgHgvASQgwASgSAgQgRgQAWglQAdgnAGgQQghACgdAgQghAiABAvIgggqQgUgagWgGQgBAUANAWQAHALjEAGIg4ABIgRAAQDzgmgGgdQA0AFAWAxQAegvASgTQAfghAqgJQgDAZgRAaIgbArQASgBA6gbQA6gWAqARQgTAOggANIg6AUQAKAHArAAQAoAAAJANQADAOgQAAQgTABgCAFQATAWApgCQALAAAIABQgDACgBAFIgBANQgOgGglgIgEghDgPeIAJAAIgLABIACgBgAvYwtQAFgIALAFQgDAEgFAAIgIgBg");
	this.shape_16.setTransform(204.3,164.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#009900","#14A110","#FFFFCC","#FADB63"],[0.149,0.38,0.565,1],161,-253.8,191.5,117.4).s().p("EAi9ATkIAAgEIAAAEgEgi8ATkMAAAglhIAZAAIAAAAIBLgBIABAAIgBAAIhAAAIgJAAIARAAIA4gBQDEgGgHgLQgNgWABgUQAWAGAUAaIAgAqQgBgvAhgiQAdggAigCQgHAQgdAnQgWAlARAQQASggAwgSQAwgSApAHQgKAGgzAUQgoAPgNAUQAQAAAxgIQAsgEAMATQgJAFgrAAQgkAAgGAPQAIAAAUgFQARgEAQACQARAXATAEQAmAIANAGIABgNQABgFADgCIACAAIAFAGIgMAOIAXgGQAMAHATAFIAAAAIAAABIABgBQAHgJAEgCQAGgEAJAJQAAgHAFgMQAFgKgDgMQANAMAKgPQALgTANACQADAOgSANQgPAKAKAKQAGABAZgJQASgHAFAJQABAIgKADQgLADAAAGQATgGAFAQQAHAWACACQALgWAMARQAUAYAFABIAAgRQABgJAFgBQAMAMAPABQAIAAATgEQAjgIATAaQABgFgBgeQgCgWAJgEQAJAHAGASQAJAXADAGQAjggANATQgdAEgFAQQAhABApATQgPAFgFAAQgGAAgOgFQAHAMAOAQQAGANgVANQATgDAngNQAggFAFAjQAXgIAhALIAAABIABgBQAeAKAbgNIAFATQADALAGADIgBg0QgBgfAQgFQAHAJALAjQAMAcAQgKQADADAFACIgBAIQAKgDAUgJQARgFAHARQABgCgBgTQgBgOAIABQACAbAkAJQApAKAJAWQAtgWAJgGQAHAKAIAIQAJAIAJAFQAGADAGACQASAFAcgGIApgHIgGALQgGAPAAAJIAAAJIABAAQAEAHAVAAQAdAAAOgGQARgHATgCQgIAJAAAFIAAAGQACAFAKAAQANAAA0gQQgLAKAAAPQAAAVAMAAQAmABAbACIgCAEIACAAQAJgEAHgGIANAAIAFgFIACgBIAAgBIAAgBQAngaASgOQACAFgDAPQgBALAOADIAFAAIADAAIgBgBQAGgDAPgJIABADQABAIgJAFIgBACIABABIBAgBIAAADIAAAmIAVABQAAAYACAKIAVABQAIAAArgXIABADQgIAvAAARIAKABQADgBAogkQABAbACAOIAZABQAMAAACgJIALAJIAHAEIAVAAIALgJIACACIgFATIgCgBIgBgBIAAAHIACABQgBAOACAMIAFAAQAIgGAEgNIACABIACgEIABAAIgDgBQAKgLAggEIgBAUIADABIABAZQAGAGAKAFQANgBANgRIAEAAIgDAZQABAUAaAAQAHAAAKgMIAOgUQAFADAHAXQAFAPAbgBQgEAHAAAIIACACIAEALIAHAEIAOAAIAJADIAPADIAIgHIgBgBQALgGAPgOQAVgUArAIIAAACIgRAQQgKAJAAAHIAAABIACACIAAACQABAGADADQAIgCAIgDIAEAAIAxgOIAHACIAAACIgJARQAAALACgEIAxABQAKAAAigIIgCADQgLAQgFADQgBAIADAEIAjABQAKAAATgGIABACQgIAHgWAMQgLAGABAGIAAAFIgPACIAIAKIBlAAIgfAHQgFAJgMAEIgGADIgDACIAIAAQgSAPAAAOQAAAIAFACQASAGBIAAQAAAMACADIBJAEQgkAIgJAHQgIAEABAMQAAAFACABIArAPQgHAKAEAHIA5ACIAAAHIAkABIAFAAQABABAAgHQAAgIgIgFQgFgDgHgCIgTgDIhcgRIAAgBQAigKAKgHQALgHgBgOQAAgFgDgEIhFgCIAXgCIAAgKQgEgEh2gDQAGgRANgMIAeAAIAZAAIAAABIAggBQAkgCAUAAQAWAAAEADQASAKC8AQQAbAFDOAWQDoAXBPAAIBHgBIAAAAIAGADQC0AQCVAEQBUAEBkADQAHABgCAAIBJAAIAAAMIAAYSIAAAEgAWjO4QAEACACgGQAAgFgHAAQgGgBgBAGIABAAQACAAAFAEgA7jJWQAGAUAAgUQAAgKgCAAQgBAAgDAKgA5ZI5IgDAIQAGAUAAgUIAAgHIgCgDIgBACgAbmDaQgCADAAAYIACAcQAIAbAXAAQAKAAACgEIAHgKQAXgWBAAKQBEAKAUgNQAVgOADgGIAAgRQAAgTgugZQgugZgeAAQghAAgkAhIgNALQgKAKgOgGQgFgCgEAAQgHAAgFAHgAZkBtIAKAfQAPAdAWAAQAGAAAKgOQAJgOALAAQAIAAAUAJQAWAIAtAAQAoAAAWgQQASgMgBgMQAAghgbgQQg2glgDAAQg6AAggAVIgSAOQgJAHgGAAQgWgGgHAAQgVAAAAApgABXpqIABABIABgCIgCAAgAwUtvIABgBIgBgCIAAADg");
	this.shape_17.setTransform(213.7,180.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#0033FF","#66CCFF","#BCFEFD","#0099FF"],[0.008,0.165,0.235,0.553],-101,20.9,-100.9,-34.8).s().p("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");
	this.shape_18.setTransform(318.7,123.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FAFFFF").s().p("AWnGoQARgMgOAOIgIAHQgBAAAGgJgAM6GhIAAgNIAVAAIAAANgA2ngFIABAAIAAAAgA2vhqIAAgEIACAIgADGkcQgvAFgogmQgZAPgngCQgmgCgTgSQAzgcA7gKQBIgLAhAdQAIgFAMgQQALgPAKgFQAVAEAhAQQATgqAzAFQANACAjAHIAPADQgDABAAADQAAAFALABQAOAAAFADIAQANIgBANQBGgpAZApQAOgFAXgUQAKgJAKgGQALAAAKgDQANAOAXAAQALAAAngHQAggGAPAFQAXAHAIAeQARACAfgHIA1gLQBEgMAcAjQAQgKAWgEQAbgEAPALQgSAGgSAWQgVAagKAGQgegDg6geQgFAEgFANQgFANgFADQhWAHgqgoQgFAEgFANQgFANgFADQghAHgWgNIghgbIgvAKQgcAHgbgEQgFgEgFgNQgFgMgFgEQgGAig1AKQg1ALgXgcQgEAEgKAVQgJARgLAFIgDACQgGgCgLgIIgFgEQgHgPgIAAQgiAbgjAPQgYAKgRAAQggAAgHgngARxmIQAWgeA0gIQAygHAfATQgyAPgRADQgnAIgtAAIgEAAg");
	this.shape_19.setTransform(255.7,80.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("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");
	this.shape_20.setTransform(243.2,114);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],84.3,36.7,84.3,-111.8).s().p("ALPCLIhAABIgBgBIABgCIARABIAxgCIgBADIgBADgAIzCOIACgCIAAABIAAABIgCAAgAH0CGIABAAIAEAAIACAAIABAAIAHABIACABIgRgCgAJ/CGIACAAIABAAIgDAAgAHWCDQABgJAegPIAIgEIgLAUIAAAAIAAABIAAAAIgBABIgEAJIgXgDgAF0BQIAFgCIABAAIACAAIgMAFIAEgDgADfBCIABAAIgBABIAAgBgAFfgkIgDgHQAMgHAAgFQAAgFgFgNQAYASAKAJIAFAFIAAABIgWA2QgJgbgMgXgAimAAIACgEIABAAQAEABgDADIgEAAgAF9hcQAKgGATAHIgEAQQgKgKgPgHgArQiNIAIAAIgDAGIgFgGg");
	this.shape_21.setTransform(127.7,85.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#66CCFF"],[0,1],-1.6,71.6,-1.6,-76.9).s().p("AKHH0Ig4gDQjGgMhmAMImlAAQAEgQAAgGIg7gDQAAgNgDgCQgJgBgLAGQgOAIgDABIAAgDQgBgdgDgPQgXAKgeAVQgZASgNAPIgUgCIABgJIABgFIAAAAIABgCIAGgKIA1hWQAkg3AtgsIADgBIACAKQACAGAIAEQAGgCADgHQABgGAEADIAFALQADAGAGAEQAJgFgBgNQgCgMAHAAQADACACAGQACAFAHADQAIgIgCgLQgDgOABgEQAFgCAIAGQAHAGAFgDQADgLgMgMQgFgGgVgPQAFgEAIABQAJAAAEgBQgZgVgsAKQADgFgDgGIgDgKQgIAFgEAHQgEAIgHAEIgYgSQgOgIgMAEQABACAPAKQALAIgCAGQgqgBgbASQAGABAZgEQAVgDACAGQgaAIgUAbQAJABAfgJQAagIAFAGQgLACgXATQAEADARgHQAPgGgBAIQhBBFg0BXQgDgCgGAAQgVAAglALIgtAOQAGgEAAgRQAEgTgNAAQgLAJgNAIIgEgUQAQglANgkQAOgNgEgRIAAAAIAKghIAAgDIAOAFQABgLgKgLQAJglAFgkQAGgHAHAOQAJARAHAAQgCgfgHgIQALgCAPAXQASAbAJAFQAKgjgPgXQAJgEAPAQQASAUAHACQgFgggngaQAEgHARACQAYABAEgBQgHgLgVgCIgpgBQAAgHAEgKQAEgIgDgJIgNAGQgIADgDAFQgdgkgsACQACAEAJAFQAIAFAAAGQgjgBgKABQgNACgIAEQgIADgDAFQABAFAKABIADAAQANgBACAFQgCADgJAGIgJAFQgOAHAAANQAIACAIgDQAJgEAEAAQAFAEgMAJQgPAKACALQAKAAAJgDIAOgGIACgBQAGABgEAFIgBACQgEAHADAFIAFAAQAIAAAGgCIANgHIABACQgCAegHAfIgBAFQgTgLgTgCQADgFAJgHQAIgGAEgHQgQgLgQACIgbAJQgJgVgVgPQgZgSgSAMQAUAJALAXQgigFgLABIgLACQgQAEgLANIAVAFIASADIgYAdIAAAAQgUAYAFAQQAJABAJgGIAGgFIALgIIgCAPIgCASQAAATALAKIARgdQAEAIACAOIADAWQAHgBAGgTQACgIADgFQAFgHAGgBIAGANQAXAtAOAtIgDAIIgFANIgBACIgBgBIgEAFIgQAQIgUAAQAAgOAKgKIAKgJQAAgDgBgCIAAgBIgBAAQgDgEgGAAIgCAAQgKgEgIgGQgKAHgbAHQgYAGgLAGIAAgBIgBgCIgCgCIAAgBIgBAAIgUgVIgEgEIgBAAQgPgOgGgEIgCABIAAgDQgHgBgDgFIgCgDIgEgCIAMAQQgxAYgtgYIAAgCIgBAAIAAgBQgmgugCAAQgJAAgLAQQgGAKgKAEIAKgTIABgBIgBAAIAAgBIABAAIAIgRIAXg0QAohgAYhcIADgNQAIgiAGghIAEgbQAIgKAKAUQAHANAHAGIAAABQAFAEAEAAIgBgEIgBgJQgDgggJgJQANgDARAWIAEAHIADADIANAUIADAEQANAQAJAEIAEgSQADgTgDgRQgEgOgHgMQAKgFARAQIAFAFQAaAcAKADQgDgOgHgNQgGgMgKgLQgMgNgRgNIgHgFQAFgHAPAAIAKAAQAhABAFgBQgIgNgVgEIgJgBQgIgBgxgBQgBgKAGgNQAFgMgDgMQgDACgPAHIgCAAQgKAFgEAGQgmgvg4AAIgIAAQACADAGAEIAIAFQAKAGABAJIgTAAQgigBgLACQggADgMAQQABAIATAAQATgBACAHQgEAFgRAKIgHAEQgTALgBARQAMACAKgEQANgFAGAAQAHAGgSANQgUAOAEAOQANABANgFIAVgJQAJABgFAIQgIAKAEAIQAPADANgGIAHgEIAKgGQAAABAAAAQABABAAABQAAAAAAAAQABABAAAAIgEAiQgDAWgFAZQgJAsgQAvIgEAOIgMAeIgvB0IgHARIgBADIgBgBIgFAIIgRAQQgJgLgEAAIgBABIgDgCQgdgUgOgLQgGAGgBARIAAAfQgOAFgPACIgBgfIABgBIAAgbIAAgCIAAglIAEgKQgniag/hnQgfg1gngoQARgQgDgJQgCgGgMgTQArASAUAKQAiAQAMAVQAXghgbghQgNgPgSgKIgJgEQgPgHgTgDQANgOAfACIAFABIARACIAAAAIABAAIAXACIASABQgDgKgHgIIgBgCQgJgKgRgHIgQgFQgngLgkAEQADgJALgNQALgNACgNQgdgLgYAKIgmAZQgXgbgmgPQgvgSgXAZQAjAGAZAgQg1AGgRAGQglAMgOAiQAeABAigFQAAACgZA1QgWAtAOAYQAOgCANgOIAUgbIAIA1QAHAdAXAMIAOg0QAKAKAIAVQAKAaAEAHQALgFABggQABggAOgIQAsAvAjAwQAWAeATAgIAYAtIAEAcQAUAWAJAgIAMAxQAEAQAAAPQAAALgCAMIgDAGIAAATIAAAIIAAAnQgTgCgWgHQhBgcgZgKQAGgDAQgCQAOgCgCgNQgwgGgMgOQAAgJATgCQAQgDgCgNQgRgFgWAEIgqAIQgCgWgSgRQgTgSgPAJQAJAHAEATQAFAVgLAHQgQgNgkAGQgiAFgPgSQgGAOgIAGIgegdQgNgRADgVQgKgDgKAGQgKAGgLgDQAAgGAFgMQAFgKgDgMQgRgEgJAIQgGAFgJALQgDgCgDgQQgBgNgNAEQACANgGARQgGAQADAPIgLgHQATg8AMgxQALgvAHguIAAgBQAGgHAGAIIAGAJQANAXAJAAQgBgVgDgMQgEgOgFgGQANgDARAXIAFAGIACADQAYAlANAHQAKgfgGgYQgDgOgIgLQAMgGAVAWIAIAJQAUASAIADQgCgLgGgLQgOgfgogbQAGgJAYACQAhABAFgBQgJgPgdgDQgIgBgxgBQgBgKAGgNQAFgMgDgMQgDACgPAHIgBAAQgLAFgEAGQgmgvg4AAIgHAAQABADAGAEIAHAFQALAGACAJIgUAAQgigBgKACQghADgMAQQABAIATAAQATgBACAHQgEAGgYANQgTALgBARQAMACAKgEQANgFAGAAQAHAGgSANQgUAOAEAOQANABANgFIAWgJQAIABgGAIQgHAKAEAIQAPADANgGIAHgEIAKgGQAAABAAAAQABABAAABQAAAAAAAAQABABAAAAIgBAMQgEAhgHAkQgLAzgSA2IgWAdIgHgCIgCAAQgIgCgKABQgqACgTgWQACgFATgBQAQgBgDgNQgJgOgnABQgrAAgKgHIA5gUQAhgNASgPQgqgQg6AWQg6AagSACIAbgrQARgaADgaQgpAKggAgQgSATgeAwQgVgyg1gEQAHAdj0AmIgCAAIAAAAIgZqLMBF5AAAIAAADIAAgDIAAAAIAAADIAAPaIAAACIhMAAIgQAAQlbACqPANQgKgBgRAAIgiABQiDgBhRAFIg1ABQhBAAhpgGgANZEvIABgCIgFAAIAEACgANVEoIAFAAIAAgBIgFABgAH+hCQhLAKggAiQAUARAkAGQAMACA2AFQBVAHAWArQAhAHAcgHQAQgEAagOQAXgMALAAIACAAIAFAAQANAKALABIACABIAFAFQALgDALgQQALgSAIgEQAeANApgHQAogHARgSQAPAQAqgBQAmgCAUgNIAZAVQAQANANAFQAUgBAUgIIAigRQBsAzAig5QANAGAZAMQAYAJAagBIAigkQAVgWAagCQgLgXgfAFQguAGgHgCQgIgCgOgMQgNgMgMAAQgUgBg4APQgxANgfgHQgEgegdgEQgdAHgjgCIg3gEIgFAAQAAgGgPAAQgXAAAAAIQAAAEAEAAIgzAhQgLgehHARIgQgJIgBgBQgJgHgKgCIgBAAIgHgDIg7gPQhGgKgWAvQgOgQgbgEQgMADgNAMQgPAPgHADQgcgNgqAAQgVAAgYADgAZaiLQggAFgXAOQgZAQgDAWQAyAIAzgLQAXgGA0gSIgFgJQgKgNgVgGQgPgEgSAAQgLAAgNACgEghYACSIABAAIgBAAgEAi9gH5g");
	this.shape_22.setTransform(213.7,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BeachScene, new cjs.Rectangle(-11.5,-1.5,450.4,308.4), null);


(lib.INFINITIVEdefinition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.INFINITIVE();
	this.instance.parent = this;
	this.instance.setTransform(-11.1,-32.7,1.703,1.703);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgFAHAAQAHAAAGAFQAFAGAAAGQAAAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape.setTransform(116.7,108.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhKBbQgegbAAgqQAAgxAegqQAhgtAyAAQAwAAAYAVQAYAXAAAwQAAAygcApQggAugxABQgpAAgdgZgAgzgxQgXAhAAAmQAAAdAVARQAUASAdgBQAjABAXglQAVgfAAgoQAAgigQgPQgPgOgjAAQgjABgZAjg");
	this.shape_1.setTransform(101,98.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKBsQgEgEAAgHIAAgGIABgHIgBgVIgBgWQAAgVgDglIgEg7IgOAAQggAAgSgEQgMgEAAgLQAAgGAEgEQAEgGAHABIAYACQAOACAJAAIAbAAIAagBIAhACIAiACQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGAAIgigCQgWgCgLABIgKAAIAEBBQADApAAAYIABAPIABAQQAAAKgDAHQgFAKgIAAQgFAAgFgEg");
	this.shape_2.setTransform(80,97.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0BkQgUgVAAggQAAgnAVgXQAVgYAfABQASgBAJAGIAOAKQABg+ADgVQADgNALAAQANAAAAAOQAAAVgFBFQgCAUAAAWQgBAxAFAZIAAAEQAAAFgEAEQgEADgFAAQgKABgEgNQgKAIgLAEQgMADgLAAQgfAAgUgUgAgiACQgMAPAAAdQAAAUAOANQANANASAAQALABAIgFQAGgCALgKIAEgEIAAgaIAAgRIAAgSQgFgLgKgFQgJgGgNAAQgYAAgMANg");
	this.shape_3.setTransform(50.7,97.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag4BDIAAhmIAAgOIAAgPQAAgOAOAAQAOAAAAAYQAcgbAhAAQAMAAAGAJQAGAJAAASIAAAKQgBASgOAAQgMAAAAgOIgBgKIAAgNQgXADgNAKQgOAKgIATIAABPQAAAPgOAAQgNAAAAgPg");
	this.shape_4.setTransform(35.2,101.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrA+QgUgUgBgiQgBggASgZQAUgeAkAAQAdAAAPAbQAMAVAAAfQgBAfgQAXQgTAageAAQgZAAgRgSgAgZgdQgKARAAAUQAAAVALAMQAKAKANAAQAOAAALgLQANgNAAgVQACg3ggAAIgBAAQgUAAgLAUg");
	this.shape_5.setTransform(19.4,101.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAKAqQgDgMgEgWIgDggIgNAbIgVA9QgDAGgEACQgEAJgJAAQgMABgKgsQgFgXgGgmIgDgWQgCgNAAgJQAAgGAFgEQAEgEAGAAQALAAADAMIADAVIACAWIAIBBQARgtASg6QAEgRALAAQAMAAAEATIAKA0QAFAkAFAVIALgoIAShPQACgJALAAQAGAAAFAEQAEAFAAAFIgBAHQgMAwgSA7QgFANgJAOQgFAIgIAAQgRAAgIgog");
	this.shape_6.setTransform(1.6,101.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgyA/QgWgSAAghQAAglATgaQAUgcAhAAQAYAAAPAIQATAKAAAVQAAAPgQAMQgIAFgYAKIg2AbQAHAMANAGQAMAGAPAAQAKAAAOgDQASgFAEgIQAFgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgWAKgWAAQggAAgVgRgAgdgnQgMAOgGAbIAtgUQAZgNAMgKQgNgLgWAAQgSAAgLANg");
	this.shape_7.setTransform(-25.7,101.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAoBvQgDgMgEgWQgCgWAAgNIAAgMIABgLQAAgbgOAAQgSAAgOAQQgHAJgNAYQgBA4gFAKQgDAJgJAAQgGAAgEgEQgGgEAAgGIACgHIABgVIABgWIAAhqIACgZIgCgOIgBgOQAAgGAEgEQAFgEAGAAQAMAAABANQADAOAAAMIgBAgIgBAgIAAANQAMgQAOgIQANgIAPAAQAZAAAIAPQAHAMAAAZIACAcIADAeQACARADAOIAAAEQABAGgFAEQgEAEgGAAQgLAAgDgLg");
	this.shape_8.setTransform(-42.6,97.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBnQgFgEAAgGIAAgQIABgRIgDhUIghgDQgNgBAAgOQAAgGAEgEQAFgFAGAAIAeADIAAgUIgBgSQAAgGAEgEQAFgEAFAAQANAAACAVIAAAOIAAAIIAAAJIAVgDQAPAAAFACQAJADAAALQAAAGgEAEQgFAFgGAAIgHAAIgHgBIgUADIADBVIAAAGIAAAIQAAAggPAAQgFAAgEgEg");
	this.shape_9.setTransform(-58.6,99.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmBzQgFgEAAgGQAAgPAghGIg1hkIgGgLQgEgHAAgEQAAgGAEgFQAFgEAGAAQAGAAAEAFQAZAiAbBAIAWgyQAMgaALgTQAEgJAIAAQAGAAAFAFQAEAEAAAGQAAADgCAEIgyBtQgTAogJAbIgKAcQgEALgJAAQgGAAgEgEg");
	this.shape_10.setTransform(-82.8,105.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgsBuQgFAHgHAAQgFAAgEgEQgEgEAAgGIAAgLIABgMIgBguIgBguIAAgoIAAgpQAAgIAEgIQAFgIAIAAQALAAAAAMIAAAGIgBAGIAAAgIgBAmQANgJAMgEQALgFAJAAQAgAAATAZQATAVAAAhQAAAigWAXQgVAXgfAAQgXAAgSgIgAgXgGIgVANIAAAaIAAAXIAAAYIAUAIQAJADAMAAQAUAAANgPQAOgPAAgXQAAgVgLgPQgMgPgUAAQgLAAgNAHg");
	this.shape_11.setTransform(-98.7,97.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgzBkQgVgVAAggQAAgnAVgWQAVgYAgAAQAQAAAKAFIAOAKQABg+AEgVQACgNALAAQANAAAAAOQAAAVgFBFQgCAVAAAVQgBAxAFAZIAAAEQABAFgFAEQgEAEgFgBQgJAAgFgMQgKAHgLAEQgMAEgLAAQgfAAgTgUgAghADQgNAOAAAdQAAAUAOANQANAOASAAQALAAAIgFQAGgDALgJIAEgFIAAgZIAAgRIAAgRQgFgMgKgFQgJgGgNAAQgYAAgLAOg");
	this.shape_12.setTransform(159.7,53.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgyA/QgWgSAAghQAAglATgaQAUgcAhAAQAYAAAPAIQATAKAAAVQAAAPgRAMQgHAFgXAKIg3AbQAHAMANAGQAMAGAPAAQAKAAAOgDQASgFAEgIQAFgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgWAKgWAAQggAAgVgRgAgegnQgLAOgGAbIAtgUQAagNALgKQgNgLgWAAQgSAAgMANg");
	this.shape_13.setTransform(143,57.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag0BkQgUgVAAggQAAgnAVgWQAUgYAgAAQARAAAKAFIAOAKQACg+ACgVQACgNAMAAQANAAAAAOQAAAVgFBFQgDAVAAAVQAAAxAFAZIABAEQgBAFgEAEQgEAEgGgBQgIAAgEgMQgLAHgMAEQgLAEgLAAQgeAAgVgUgAgiADQgMAOAAAdQAAAUANANQAOAOASAAQALAAAIgFQAGgDALgJIAEgFIgBgZIABgRIAAgRQgGgMgIgFQgKgGgNAAQgYAAgMAOg");
	this.shape_14.setTransform(125.6,53.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgxA/QgXgSAAghQAAglASgaQAVgcAhAAQAXAAAQAIQATAKAAAVQAAAPgRAMQgHAFgXAKIg4AbQAIAMANAGQAMAGAQAAQAKAAANgDQASgFAEgIQAFgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgWAKgVAAQghAAgUgRgAgegnQgMAOgFAbIAtgUQAagNAKgKQgMgLgWAAQgRAAgNANg");
	this.shape_15.setTransform(108.9,57.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgpBAQgVgTAAgfQAAgdATgfQAWgjAbAAQAOAAASAGQAWAJAAAMQAAAGgDAEQgEAFgFAAQgFAAgDgDIgGgFQgIgHgUAAQgOAAgPAbQgNAYAAARQAAATANAMQAMAKATAAQAJAAAKgFIARgJQAEgCACAAQAFAAAEAEQAEAEAAAGQAAALgWAKQgUAIgNAAQgdAAgUgSg");
	this.shape_16.setTransform(92.8,57.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgxA/QgXgSAAghQAAglATgaQAUgcAhAAQAXAAAQAIQATAKAAAVQAAAPgRAMQgHAFgXAKIg3AbQAHAMANAGQAMAGAQAAQAKAAANgDQARgFAFgIQAFgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgWAKgVAAQghAAgUgRgAgegnQgMAOgFAbIAtgUQAagNAKgKQgMgLgWAAQgSAAgMANg");
	this.shape_17.setTransform(77.1,57.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag4BDIAAhmIAAgOIAAgPQAAgOAOAAQAOAAAAAYQAcgbAhAAQAMAAAGAJQAGAJAAASIAAAKQgBASgOAAQgNAAAAgOIAAgKIAAgNQgYADgMAKQgNAKgJATIAABPQAAAPgOAAQgNAAAAgPg");
	this.shape_18.setTransform(61.9,57.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag4B3QgEgEAAgHIAAg6IAAg6QAAgfgCgbIgCgeQAAgKADgIQAFgIAJAAQAFAAAEAEQAEAEAAAGIAAAFIgBAIQAMgJAMgEQALgEAKAAQAeAAAOAbQALAUAAAkQAAAegRAVQgSAVgeAAQgOAAgRgFIgBBGQAAAHgDAEQgEAEgHAAQgGAAgEgEgAgNhNQgIAEgMALQACAiAAAjQAQAGAPABQATAAAJgOQAIgLABgSQgBgcgGgNQgHgNgNAAQgMAAgLAGg");
	this.shape_19.setTransform(46.3,61.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgyA/QgWgSAAghQAAglATgaQAUgcAhAAQAYAAAPAIQATAKAAAVQAAAPgQAMQgIAFgYAKIg3AbQAJAMAMAGQAMAGAPAAQALAAANgDQARgFAGgIQAEgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgXAKgVAAQggAAgVgRgAgdgnQgMAOgGAbIAtgUQAZgNAMgKQgNgLgWAAQgRAAgMANg");
	this.shape_20.setTransform(21.2,57.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgsBuQgFAHgHAAQgFAAgEgEQgEgEAAgGIAAgLIABgMIgBguIgBguIAAgoIAAgpQAAgIAEgIQAFgIAIAAQALAAAAAMIAAAGIgBAGIAAAgIgBAmQANgJAMgEQALgFAJAAQAgAAATAZQATAVAAAhQAAAigWAXQgVAXgfAAQgXAAgSgIgAgXgGIgVANIAAAaIAAAXIAAAYIAUAIQAJADAMAAQAUAAANgPQAOgPAAgXQAAgVgLgPQgMgPgUAAQgLAAgNAHg");
	this.shape_21.setTransform(4.2,53.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmBzQgFgEAAgGQAAgPAghGIg1hkIgGgLQgEgHAAgEQAAgGAEgFQAFgEAGAAQAGAAAEAFQAZAiAbBAIAWgyQAMgaALgTQAEgJAIAAQAGAAAFAFQAEAEAAAGQAAADgCAEIgyBtQgTAogJAbIgKAcQgEALgJAAQgGAAgEgEg");
	this.shape_22.setTransform(-22.2,61.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgKAEgHAAQgiAAgQgUQgPgSAAglQAAgjAZgZQAYgZAhAAQANAAAQAGQATAJABALQAAAEgDADQgCAGgBANIgBAfQABASACALIAJAaIAEAHIAAADQAAAGgDAEQgFADgFAAQgDAAgIgGgAgYgkQgQATAAAXQgBAYAJAMQAJAMAQAAQAOAAAJgFQAFgDAKgIQgEgmgBgTIABgOIACgQIgJgEIgGgBQgVAAgRASg");
	this.shape_23.setTransform(-37.2,58);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHBWQgEgEAAgGQAAgSgEgjQgEghAAgSQAAgQgEgIQgKAEgLALIgRATIgIAKIgBAYIgCAaIACAMIABAMQAAAGgEAEQgFAEgGAAQgRAAAAgmIACgaIACgZIgCgYIgBgXQAAghAPAAQAGAAAEAFQAFAFAAAFIgBAJIAAAJIAAAPQAIgPAOgNQAPgNALAAQAXAAAHAXQAIgKALgGQALgFAPAAQAYAAAJAaQACAGAEAjQAEAZAHA6QAAAGgEAEQgFAEgGAAQgMAAgCgMQgDgQgCgeIgFgsQgCgKgDgKQgFgNgGAAQgFAAgPAJQgOAJgFAFIABAbIAEAmQADAYAAAPQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_24.setTransform(-56.4,57.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAoBvQgDgMgDgWQgDgWAAgNIAAgMIABgLQAAgbgOAAQgSAAgOAQQgIAJgMAYQAAA4gGAKQgDAJgJAAQgGAAgEgEQgGgEAAgGIACgHQABgDABgSIAAgWIABhqIABgZIgBgOIgCgOQAAgGAEgEQAFgEAFAAQANAAACANQACAOAAAMIgBAgIgBAgIAAANQAMgQAOgIQAMgIAQAAQAYAAAKAPQAGAMAAAZIACAcIADAeQACARADAOIAAAEQABAGgFAEQgFAEgFAAQgLAAgDgLg");
	this.shape_25.setTransform(-85.6,53.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgpBAQgVgTAAgfQAAgdATgfQAWgjAbAAQAOAAASAGQAWAJAAAMQAAAGgDAEQgEAFgFAAQgFAAgDgDIgGgFQgIgHgUAAQgOAAgPAbQgNAYAAARQAAATANAMQAMAKATAAQAJAAAKgFIARgJQAEgCACAAQAFAAAEAEQAEAEAAAGQAAALgWAKQgUAIgNAAQgdAAgUgSg");
	this.shape_26.setTransform(-102.1,57.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgNBqQgFgEAAgHIAAgaIgBgaIACgiIABghQAAgIAFgDQADgFAHAAQAFAAAEAFQAEADAAAIIgBAhIgCAiIABAaIAAAaQAAAHgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_27.setTransform(-113.8,54.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAoBvQgDgMgEgWQgCgWAAgNIAAgMIABgLQAAgbgOAAQgSAAgOAQQgHAJgNAYQgBA4gFAKQgDAJgJAAQgGAAgEgEQgGgEAAgGIACgHIABgVIABgWIAAhqIACgZIgCgOIgBgOQAAgGAEgEQAFgEAGAAQAMAAABANQADAOAAAMIgBAgIgBAgIAAANQAMgQAOgIQANgIAPAAQAZAAAIAPQAHAMAAAZIACAcIADAeQACARADAOIAAAEQABAGgFAEQgEAEgGAAQgLAAgDgLg");
	this.shape_28.setTransform(-126.8,53.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAJAqQgCgMgEgWIgDggIgNAbIgWA9QgBAGgFACQgDAJgKAAQgLABgLgsQgFgXgGgmIgDgWQgCgNAAgJQAAgGAEgEQAFgEAGAAQALAAADAMIADAVIACAWIAIBBQARgtARg6QAFgRALAAQAMAAAEATIAKA0QAFAkAFAVIAKgoIAThPQACgJALAAQAGAAAFAEQAEAFAAAFIgCAHQgKAwgTA7QgFANgJAOQgFAIgIAAQgQAAgKgog");
	this.shape_29.setTransform(-145.8,58.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgsBuQgFAHgHAAQgFAAgEgEQgEgEAAgGIAAgLIABgMIgBguIgBguIAAgoIAAgpQAAgIAEgIQAFgIAIAAQALAAAAAMIAAAGIgBAGIAAAgIgBAmQANgJAMgEQALgFAJAAQAgAAATAZQATAVAAAhQAAAigWAXQgVAXgfAAQgXAAgSgIgAgXgGIgVANIAAAaIAAAXIAAAYIAUAIQAJADAMAAQAUAAANgPQAOgPAAgXQAAgVgLgPQgMgPgUAAQgLAAgNAHg");
	this.shape_30.setTransform(156.8,10.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("Ag4BDIAAhmIABgOIAAgPQAAgOAMAAQAPAAAAAYQAcgbAiAAQAMAAAFAJQAGAJAAASIAAAKQgBASgOAAQgNAAAAgOIAAgKIgBgNQgXADgNAKQgMAKgJATIABBPQAAAPgPAAQgNAAAAgPg");
	this.shape_31.setTransform(140.8,14.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgyA/QgWgSAAghQAAglASgaQAVgcAhAAQAYAAAPAIQATAKAAAVQAAAPgQAMQgIAFgYAKIg3AbQAJAMAMAGQAMAGAPAAQALAAANgDQARgFAGgIQAEgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgXAKgVAAQggAAgVgRgAgdgnQgMAOgGAbIAtgUQAZgNAMgKQgNgLgWAAQgRAAgMANg");
	this.shape_32.setTransform(125.2,14);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgPBEIgXg8IgahCIgCgHQAAgGAFgEQAFgEAGAAQAJAAADAIIAmBmQAJgYARgrIANghQAEgKAIAAQAHAAAEAFQAEAEAAAGQAAAFgYA5IgeBFQAAANgMAAQgLAAgEgMg");
	this.shape_33.setTransform(109.6,13.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgyA/QgWgSAAghQAAglATgaQAUgcAhAAQAXAAAQAIQATAKAAAVQAAAPgRAMQgHAFgXAKIg3AbQAHAMANAGQAMAGAPAAQALAAANgDQARgFAFgIQAFgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgWAKgWAAQggAAgVgRgAgegnQgMAOgFAbIAtgUQAagNAKgKQgMgLgWAAQgSAAgMANg");
	this.shape_34.setTransform(85.2,14);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAoBvQgEgMgDgWQgCgWAAgNIABgMIAAgLQAAgbgOAAQgSAAgOAQQgHAJgOAYQAAA4gEAKQgFAJgIAAQgGAAgFgEQgEgEAAgGIABgHQABgDAAgSIABgWIAAhqIABgZIgBgOIgBgOQAAgGAEgEQAEgEAHAAQALAAACANQADAOAAAMIgBAgIgBAgIAAANQAMgQAOgIQANgIAPAAQAYAAAJAPQAHAMABAZIABAcIADAeQACARADAOIABAEQgBAGgEAEQgEAEgHAAQgKAAgDgLg");
	this.shape_35.setTransform(68.2,10.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgJBnQgEgEAAgFIAAgRIABgRIgDhUIghgDQgMgBAAgNQAAgHADgEQAEgEAGgBIAgADIgBgUIgBgSQAAgGAEgEQAFgEAFAAQANAAACAWIABAMIgBAJIAAAJIAVgDQAPABAFABQAJADgBALQABAHgEAEQgFADgFAAIgIAAIgHAAIgUADIACBVIABAHIAAAHQABAggQAAQgFAAgFgEg");
	this.shape_36.setTransform(52.2,11.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXB9QgFgEAAgGIABgDQADgTAAgWIAAgoIAAgqIgYACQgPAAAAgPQAAgOAagBIAOAAIACgWQAEghANgPQAOgTAgAAQAWAAAAAOQAAAOgUAAQgjAAgFAyIAAAJIAhgCQAWAAAAAOQABALgLACQgFABgHAAIgiACIgBAgIABAcIAAAbQAAAbgDAQQgCAMgLAAQgGAAgEgEg");
	this.shape_37.setTransform(28.4,10.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgrA+QgUgUgBgiQgBggASgZQAUgeAkAAQAdAAAPAbQAMAVAAAfQgBAfgQAXQgTAagdAAQgZAAgSgSgAgagdQgJARAAAUQAAAVALAMQALAKANAAQAOAAAKgLQANgNAAgVQACg3ggAAIgBAAQgUAAgMAUg");
	this.shape_38.setTransform(12.8,14.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHBWQgEgEAAgGQAAgSgEgjQgEghAAgSQAAgQgEgIQgKAEgLALIgRATIgIAKIgBAYIgCAaIACAMIABAMQAAAGgEAEQgFAEgGAAQgRAAAAgmIACgaIACgZIgCgYIgBgXQAAghAPAAQAGAAAEAFQAFAFAAAFIgBAJIAAAJIAAAPQAIgPAOgNQAPgNALAAQAXAAAHAXQAIgKALgGQALgFAPAAQAYAAAJAaQACAGAEAjQAEAZAHA6QAAAGgEAEQgFAEgGAAQgMAAgCgMQgDgQgCgeIgFgsQgCgKgDgKQgFgNgGAAQgFAAgPAJQgOAJgFAFIABAbIAEAmQADAYAAAPQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_39.setTransform(-15.2,14.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag4BDIAAhmIABgOIAAgPQAAgOAMAAQAPAAAAAYQAcgbAiAAQAMAAAFAJQAGAJAAASIAAAKQgBASgOAAQgNAAAAgOIAAgKIgBgNQgXADgNAKQgMAKgJATIABBPQAAAPgPAAQgNAAAAgPg");
	this.shape_40.setTransform(-33.8,14.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgrA+QgUgUgBgiQgBggASgZQAVgeAjAAQAeAAAOAbQANAVgBAfQgBAfgQAXQgTAageAAQgYAAgSgSgAgagdQgJARAAAUQAAAVALAMQAKAKANAAQAOAAAMgLQAMgNAAgVQACg3ggAAIgBAAQgUAAgMAUg");
	this.shape_41.setTransform(-49.6,14.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXB9QgEgEgBgGIABgDQADgTAAgWIAAgoIAAgqIgYACQgOAAAAgPQAAgOAZgBIAOAAIACgWQAEghANgPQAOgTAgAAQAWAAAAAOQAAAOgTAAQgkAAgFAyIAAAJIAhgCQAWAAAAAOQABALgMACQgEABgHAAIgiACIgBAgIABAcIAAAbQAAAbgDAQQgCAMgLAAQgGAAgEgEg");
	this.shape_42.setTransform(-65.1,10.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgpBAQgVgTAAgfQAAgdATgfQAWgjAbAAQAOAAASAGQAWAJAAAMQAAAGgDAEQgEAFgFAAQgFAAgDgDIgGgFQgIgHgUAAQgOAAgPAbQgNAYAAARQAAATANAMQAMAKATAAQAJAAAKgFIARgJQAEgCACAAQAFAAAEAEQAEAEAAAGQAAALgWAKQgUAIgNAAQgdAAgUgSg");
	this.shape_43.setTransform(-89.1,14);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgNBqQgFgEAAgGIAAgaIgBgbIACgiIABgiQAAgGAFgEQADgEAHAAQAFAAAEAEQAEAEAAAGIgBAiIgCAiIABAbIAAAaQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_44.setTransform(-100.8,10.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgoBSQgXgJAAgOQAAgGAFgFQAEgEAGAAQAFAAAHAHQAEADAMADIAQABQAMAAAJgCQAOgFAAgJQAAgUgcgHIgOgDQgUgFgIgFQgMgHAAgRQAAgfAdgNQAJgEASgFIAcgJQAGgDAHAAQAGAAAEAEQAEAEAAAHIACAMIACANQAAAGgEAEQgEAEgHAAQgIAAgDgFQgCgEgCgMIghAKQgXAKAAAOIAIACQAhAGARALQAXAOAAAdQAAAYgUAMQgRAKgaAAQgTAAgRgGg");
	this.shape_45.setTransform(-113,13.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgLAEgGAAQgiAAgPgUQgPgSgBglQAAgjAZgZQAYgZAhAAQANAAAPAGQAVAJAAALQgBAEgDADQgBAGgBANIAAAfQgBASADALIAJAaIAEAHIABADQAAAGgFAEQgEADgFAAQgDAAgIgGgAgYgkQgRATAAAXQAAAYAJAMQAIAMARAAQANAAAKgFQAGgDAJgIQgFgmABgTIAAgOIACgQIgJgEIgGgBQgWAAgQASg");
	this.shape_46.setTransform(-127.5,14.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgsBuQgFAHgHAAQgFAAgEgEQgEgEAAgGIAAgLIABgMIgBguIgBguIAAgoIAAgpQAAgIAEgIQAFgIAIAAQALAAAAAMIAAAGIgBAGIAAAgIgBAmQANgJAMgEQALgFAJAAQAgAAATAZQATAVAAAhQAAAigWAXQgVAXgfAAQgXAAgSgIgAgXgGIgVANIAAAaIAAAXIAAAYIAUAIQAJADAMAAQAUAAANgPQAOgPAAgXQAAgVgLgPQgMgPgUAAQgLAAgNAHg");
	this.shape_47.setTransform(-143.7,10.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgxA/QgXgSAAghQAAglATgaQAUgcAhAAQAXAAAQAIQATAKAAAVQAAAPgRAMQgHAFgXAKIg3AbQAHAMANAGQAMAGAPAAQALAAANgDQARgFAFgIQAFgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgWAKgWAAQggAAgUgRgAgegnQgMAOgFAbIAtgUQAagNAKgKQgMgLgWAAQgSAAgMANg");
	this.shape_48.setTransform(168.9,-29.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAoBvQgEgMgDgWQgCgWAAgNIABgMIAAgLQAAgbgOAAQgSAAgOAQQgHAJgOAYQAAA4gEAKQgFAJgIAAQgGAAgFgEQgEgEAAgGIABgHQABgDAAgSIABgWIAAhqIABgZIgBgOIgBgOQAAgGAEgEQAEgEAHAAQALAAACANQADAOAAAMIgBAgIgBAgIAAANQAMgQAOgIQANgIAPAAQAYAAAKAPQAGAMABAZIABAcIADAeQACARADAOIABAEQgBAGgEAEQgEAEgHAAQgKAAgDgLg");
	this.shape_49.setTransform(151.9,-33.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgJBnQgEgEAAgGIABgQIAAgRIgDhUIghgDQgMgBAAgOQAAgGADgEQAEgFAGAAIAgADIgBgUIgBgSQAAgGAFgEQAEgEAFAAQANAAACAVIABAOIgBAIIAAAJIAVgDQAPAAAFACQAJADgBALQABAGgEAEQgFAFgFAAIgIAAIgHgBIgUADIACBVIABAGIAAAIQABAggQAAQgFAAgFgEg");
	this.shape_50.setTransform(135.9,-32.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgoBSQgXgJAAgOQAAgGAFgFQAEgEAGAAQAFAAAHAHQAEADAMADIAQABQAMAAAJgCQAOgFAAgJQAAgUgcgHIgOgDQgUgFgIgFQgMgHAAgRQAAgfAdgNQAJgEASgFIAcgJQAGgDAHAAQAGAAAEAEQAEAEAAAHIACAMIACANQAAAGgEAEQgEAEgHAAQgIAAgDgFQgCgEgCgMIghAKQgXAKAAAOIAIACQAhAGARALQAXAOAAAdQAAAYgUAMQgRAKgaAAQgTAAgRgGg");
	this.shape_51.setTransform(112.2,-30.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgNBqQgFgEAAgHIAAgaIgBgaIACgjIABggQAAgHAFgFQADgDAHAAQAFAAAEADQAEAFAAAHIgBAgIgCAjIABAaIAAAaQAAAHgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_52.setTransform(101.4,-33.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAkBHIgEggQgCgRAAgPIAAgNIABgOQAAgfgMAAQgQAAgOATQgOASgIAaIgBAOIgBAPIABANIABANQAAAHgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgHIgBgNIgBgNQAAgPADgaIACgqIgBgOIAAgOQAAgGAEgEQAEgEAGAAQAOAAABATIAAARQAZghAZAAQAXAAAKAVQAGAOAAAbIAAAOIAAANQAAAMAEATQADAUAAAMQAAAGgEAEQgFAEgGAAQgNAAgBgOg");
	this.shape_53.setTransform(-134.3,-29.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAzBMIgKguQgOABgZAGIglAIQgIATgRAlQgFAJgIgBQgGABgFgFQgEgEAAgGQgBgIAXguQgCgEgBgEQABgNAOgDQARgfAZgoQAhg3AJgBQALABAFAQIAJAxIAWBlIAIAXQAFAMAAAEQAAAGgFAEQgFAFgGAAQgNAAgKgjgAgSAKQARgEAkgGIgMg4g");
	this.shape_54.setTransform(-153.7,-33);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0066").s().p("AhKBbQgegbAAgqQAAgxAegqQAhgtAyAAQAwAAAYAVQAYAXAAAwQAAAygcApQggAugxABQgpAAgdgZgAgzgxQgXAhAAAmQAAAdAVARQAUASAdgBQAjABAXglQAVgfAAgoQAAgigQgPQgPgOgjAAQgjABgZAjg");
	this.shape_55.setTransform(101,98.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0066").s().p("AgKBsQgEgEAAgHIAAgGIABgHIgBgVIgBgWQAAgVgDglIgEg7IgOAAQggAAgSgEQgMgEAAgLQAAgGAEgEQAEgGAHABIAYACQAOACAJAAIAbAAIAagBIAhACIAiACQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGAAIgigCQgWgCgLABIgKAAIAEBBQADApAAAYIABAPIABAQQAAAKgDAHQgFAKgIAAQgFAAgFgEg");
	this.shape_56.setTransform(80,97.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgyA/QgWgSAAghQAAglATgaQAUgcAhAAQAXAAAQAIQATAKAAAVQAAAPgRAMQgHAFgXAKIg3AbQAHAMANAGQAMAGAPAAQALAAANgDQARgFAFgIQAFgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgWAKgWAAQggAAgVgRgAgegnQgMAOgFAbIAtgUQAagNAKgKQgMgLgWAAQgSAAgMANg");
	this.shape_57.setTransform(85.2,14);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AAoBvQgEgMgDgWQgCgWAAgNIABgMIAAgLQAAgbgOAAQgSAAgOAQQgHAJgOAYQAAA4gEAKQgFAJgIAAQgGAAgFgEQgEgEAAgGIABgHQABgDAAgSIABgWIAAhqIABgZIgBgOIgBgOQAAgGAEgEQAEgEAHAAQALAAACANQADAOAAAMIgBAgIgBAgIAAANQAMgQAOgIQANgIAPAAQAYAAAJAPQAHAMABAZIABAcIADAeQACARADAOIABAEQgBAGgEAEQgEAEgHAAQgKAAgDgLg");
	this.shape_58.setTransform(68.2,10.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgJBnQgEgEAAgFIAAgRIABgRIgDhUIghgDQgMgBAAgNQAAgHADgEQAEgEAGgBIAgADIgBgUIgBgSQAAgGAEgEQAFgEAFAAQANAAACAWIABAMIgBAJIAAAJIAVgDQAPABAFABQAJADgBALQABAHgEAEQgFADgFAAIgIAAIgHAAIgUADIACBVIABAHIAAAHQABAggQAAQgFAAgFgEg");
	this.shape_59.setTransform(52.2,11.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgXB9QgFgEAAgGIABgDQADgTAAgWIAAgoIAAgqIgYACQgPAAAAgPQAAgOAagBIAOAAIACgWQAEghANgPQAOgTAgAAQAWAAAAAOQAAAOgUAAQgjAAgFAyIAAAJIAhgCQAWAAAAAOQABALgLACQgFABgHAAIgiACIgBAgIABAcIAAAbQAAAbgDAQQgCAMgLAAQgGAAgEgEg");
	this.shape_60.setTransform(28.4,10.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AgrA+QgUgUgBgiQgBggASgZQAUgeAkAAQAdAAAPAbQAMAVAAAfQgBAfgQAXQgTAagdAAQgZAAgSgSgAgagdQgJARAAAUQAAAVALAMQALAKANAAQAOAAAKgLQANgNAAgVQACg3ggAAIgBAAQgUAAgMAUg");
	this.shape_61.setTransform(12.8,14.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AgHBWQgEgEAAgGQAAgSgEgjQgEghAAgSQAAgQgEgIQgKAEgLALIgRATIgIAKIgBAYIgCAaIACAMIABAMQAAAGgEAEQgFAEgGAAQgRAAAAgmIACgaIACgZIgCgYIgBgXQAAghAPAAQAGAAAEAFQAFAFAAAFIgBAJIAAAJIAAAPQAIgPAOgNQAPgNALAAQAXAAAHAXQAIgKALgGQALgFAPAAQAYAAAJAaQACAGAEAjQAEAZAHA6QAAAGgEAEQgFAEgGAAQgMAAgCgMQgDgQgCgeIgFgsQgCgKgDgKQgFgNgGAAQgFAAgPAJQgOAJgFAFIABAbIAEAmQADAYAAAPQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_62.setTransform(-15.2,14.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("Ag4BDIAAhmIABgOIAAgPQAAgOAMAAQAPAAAAAYQAcgbAiAAQAMAAAFAJQAGAJAAASIAAAKQgBASgOAAQgNAAAAgOIAAgKIgBgNQgXADgNAKQgMAKgJATIABBPQAAAPgPAAQgNAAAAgPg");
	this.shape_63.setTransform(-33.8,14.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgrA+QgUgUgBgiQgBggASgZQAVgeAjAAQAeAAAOAbQANAVgBAfQgBAfgQAXQgTAageAAQgYAAgSgSgAgagdQgJARAAAUQAAAVALAMQAKAKANAAQAOAAAMgLQAMgNAAgVQACg3ggAAIgBAAQgUAAgMAUg");
	this.shape_64.setTransform(-49.6,14.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgXB9QgEgEgBgGIABgDQADgTAAgWIAAgoIAAgqIgYACQgOAAAAgPQAAgOAZgBIAOAAIACgWQAEghANgPQAOgTAgAAQAWAAAAAOQAAAOgTAAQgkAAgFAyIAAAJIAhgCQAWAAAAAOQABALgMACQgEABgHAAIgiACIgBAgIABAcIAAAbQAAAbgDAQQgCAMgLAAQgGAAgEgEg");
	this.shape_65.setTransform(-65.1,10.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgpBAQgVgTAAgfQAAgdATgfQAWgjAbAAQAOAAASAGQAWAJAAAMQAAAGgDAEQgEAFgFAAQgFAAgDgDIgGgFQgIgHgUAAQgOAAgPAbQgNAYAAARQAAATANAMQAMAKATAAQAJAAAKgFIARgJQAEgCACAAQAFAAAEAEQAEAEAAAGQAAALgWAKQgUAIgNAAQgdAAgUgSg");
	this.shape_66.setTransform(-89.1,14);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgNBqQgFgEAAgGIAAgaIgBgbIACgiIABgiQAAgGAFgEQADgEAHAAQAFAAAEAEQAEAEAAAGIgBAiIgCAiIABAbIAAAaQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_67.setTransform(-100.8,10.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgoBSQgXgJAAgOQAAgGAFgFQAEgEAGAAQAFAAAHAHQAEADAMADIAQABQAMAAAJgCQAOgFAAgJQAAgUgcgHIgOgDQgUgFgIgFQgMgHAAgRQAAgfAdgNQAJgEASgFIAcgJQAGgDAHAAQAGAAAEAEQAEAEAAAHIACAMIACANQAAAGgEAEQgEAEgHAAQgIAAgDgFQgCgEgCgMIghAKQgXAKAAAOIAIACQAhAGARALQAXAOAAAdQAAAYgUAMQgRAKgaAAQgTAAgRgGg");
	this.shape_68.setTransform(-113,13.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgLAEgGAAQgiAAgPgUQgPgSgBglQAAgjAZgZQAYgZAhAAQANAAAPAGQAVAJAAALQgBAEgDADQgBAGgBANIAAAfQgBASADALIAJAaIAEAHIABADQAAAGgFAEQgEADgFAAQgDAAgIgGgAgYgkQgRATAAAXQAAAYAJAMQAIAMARAAQANAAAKgFQAGgDAJgIQgFgmABgTIAAgOIACgQIgJgEIgGgBQgWAAgQASg");
	this.shape_69.setTransform(-127.5,14.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgsBuQgFAHgHAAQgFAAgEgEQgEgEAAgGIAAgLIABgMIgBguIgBguIAAgoIAAgpQAAgIAEgIQAFgIAIAAQALAAAAAMIAAAGIgBAGIAAAgIgBAmQANgJAMgEQALgFAJAAQAgAAATAZQATAVAAAhQAAAigWAXQgVAXgfAAQgXAAgSgIgAgXgGIgVANIAAAaIAAAXIAAAYIAUAIQAJADAMAAQAUAAANgPQAOgPAAgXQAAgVgLgPQgMgPgUAAQgLAAgNAHg");
	this.shape_70.setTransform(-143.7,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:-113,y:13.4}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_45,p:{x:112.2,y:-30.4}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_56},{t:this.shape_55},{t:this.shape},{t:this.instance}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.1,-61.6,354.4,181.3);


(lib.goNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,11.3).s().p("AhLAqQghgRABgYQgBgZAhgRQAfgSAsAAQAsAAAgASQAgARAAAZQAAAYggARQggASgsAAQgsAAgfgSg");
	this.shape.setTransform(22.8,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AhUhcICpBdIipBcg");
	this.shape_1.setTransform(25.1,20.4);

	this.blinker = new lib.general_buttoncolor();
	this.blinker.parent = this;
	this.blinker.setTransform(23.4,20.1,1.5,1.5,0,0,0,11.9,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,14.8).s().p("AhjA3QgqgXABgfQgBggAqgXQAqgYA5AAQA6AAAqAYQApAXAAAgQAAAfgpAXQgqAYg6AAQg5AAgqgYg");
	this.shape_2.setTransform(23.4,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AAACxQhIAAg0g0Qg1g0AAhJQAAhIA1g0QA0g0BIAAQBKAAA0A0QA0A0AABIQAABJg0A0Qg0A0hKAAg");
	this.shape_3.setTransform(23.3,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.8,0,0,-0.8,0,24.9).s().p("AitClQhEhFAAhgQAAhgBEhEQBEhEBiAAQBfAABCAwQBBAvAWCrQAVCskNAbQhiAAhEhEgAgICRQBGAAAygwIABgBIAEgDQA0g0AAhIQAAhJg0g0IgGgGIAAAAQgyguhEAAIgBgBIAAAAIgBAAIAAABQhEAAgyAuIgBABIgCACIgCABIAAAAIgBACQg1A0AABJQAABIA1A0IABABIACACQAzAxBGAAIAAAAIABAAIgBAAIAAAAQhGAAgzgxIgCgCIgBgBQg1g0AAhIQAAhJA1g0IABgCIAAAAIACgBIACgCIABgBQAyguBEAAIAAgBIABAAIAAAAIABABQBEAAAyAuIAAAAIAGAGQA0A0AABJQAABIg0A0IgEADIgBABQgyAwhGAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(24.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AipCqQhGhHAAhjQAAhiBGhGQBGhHBjAAQBjAABHBHQBGBGAABiQAABjhGBHQhHBGhjAAQhjAAhGhGg");
	this.shape_5.setTransform(24.4,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AipCqQhGhHAAhjQAAhiBGhGQBGhHBjAAQBjAABHBHQBGBGAABiQAABjhGBHQhHBGhjAAQhjAAhGhGg");
	this.shape_6.setTransform(24.4,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,46.7);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_pressed_1, new cjs.Rectangle(2,2,9,9), null);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_disabled_1, new cjs.Rectangle(2,2,9,9), null);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_1, new cjs.Rectangle(2,2,9,9), null);


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
	this.darkshadow_mc.parent = this;

	this.shadow_mc = new lib.fcb_leftIn();
	this.shadow_mc.parent = this;

	this.highlight_mc = new lib.fcb_rightIn();
	this.highlight_mc.parent = this;

	this.highlight3D_mc = new lib.fcb_rightOut();
	this.highlight3D_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight3D_mc},{t:this.highlight_mc},{t:this.shadow_mc},{t:this.darkshadow_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_frame, new cjs.Rectangle(0,0,13,13), null);


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
	this.check_mc.parent = this;
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_disabled_1, new cjs.Rectangle(2.9,3.2,7.1,7), null);


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
	this.check_mc.parent = this;
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_1, new cjs.Rectangle(2.9,3.2,7.1,7), null);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


(lib.blank_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank_1, new cjs.Rectangle(0.1,0,65,34), null);


(lib.InfinitivesDefLesson = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 16
	this.instance = new lib.InfinitiveNounadverbAdjective();
	this.instance.parent = this;
	this.instance.setTransform(0.1,84.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).wait(75));

	// Layer 18
	this.instance_1 = new lib.InfinitiveLines();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.7,-29.6,1,1,0,0,0,200.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({regY:6.7,scaleX:0.36,scaleY:0.36,x:1.5,y:-173.7},14).wait(143));

	// Layer 17
	this.instance_2 = new lib.INFINITIVES();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.3,10.7,3.096,3.096);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({scaleX:1.2,scaleY:1.2,y:-158.8},14).wait(143));

	// Layer 3
	this.instance_3 = new lib.INFINITIVEdefinition();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-7.3,-17.1,0.667,0.667);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},7).wait(59).to({scaleX:1,scaleY:1,x:2.7,y:2.9},0).to({scaleX:0.84,scaleY:0.84,y:-90.8},9).wait(75));

	// white
	this.instance_4 = new lib.WhiteSheet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.9,-3,1.022,0.652,0,0,0,206.3,103.5);
	this.instance_4.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({scaleY:0.93,x:2.4,y:17.9},14).wait(59).to({scaleY:0.3,y:4.9},0).to({regY:103.7,scaleY:0.49,y:83.5},9).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214,-70.5,569.2,135);


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
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// check_disabled
	this.instance_1 = new lib.fcb_check_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// background pressed/disabled
	this.instance_2 = new lib.fcb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fcb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

	// background static
	this.frb_frame_mc = new lib.fcb_background_1();
	this.frb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(6));

	// check box frame
	this.fcb_frame_mc = new lib.fcb_frame();
	this.fcb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.fcb_frame_mc).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


// stage content:
(lib.inf_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1_repeat:177});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		//nav buttons --------------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		//this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmusic2',{loop:-1});
		bgm.volume = 1;
		
		
		//volume setting -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume *0.5;
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.5;
		}
		
		//page navigation ----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("inf_Scene2.html","_self");
		}
		
		/*
		function openPrev(){
		
		 window.open ("intro_Scene1.html","_self");
		}
		*/
	}
	this.frame_4 = function() {
		playSound("infinitives");
	}
	this.frame_34 = function() {
		playSound("InfinitiveGreg");
	}
	this.frame_116 = function() {
		playSound("infinitivecanbeusedas");
	}
	this.frame_189 = function() {
		this.gotoAndPlay("scene1_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(30).call(this.frame_34).wait(82).call(this.frame_116).wait(73).call(this.frame_189).wait(1));

	// content
	this.instance = new lib.InfinitivesDefLesson();
	this.instance.parent = this;
	this.instance.setTransform(281.7,185.2,1,1,0,0,0,8.9,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190));

	// main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_1 = new lib.Copyright("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,393.5);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape.setTransform(53.3,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAiQgCgCAAgEIgBgTIgBgTIgBgGQgHAEgHAJIgBABIAAASIAAAEIgBAEQABAEgDABQgCACgEAAQgEAAgDgEIgBgKIAAgUIAAgJIAAgJQAAgFACgEQACgFAEAAQADAAADACQADADgBADIAAAFQAJgKAIAAQAJAAADAGQADgDAFgBQAEgCAFAAQAMAAAEAMIACAPIAFAfQAAADgCADQgDACgDAAQgHAAgCgHIgBgRIgCgQQgCgLgDAAIgGADIgGAFIABASIABATQAAAEgBACQgDACgEAAQgCAAgDgCg");
	this.shape_1.setTransform(45.5,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMAdQgIADgHAAQgIAAgGgEQgGgEgBgHQgDgPAAgKQAAgIACgKQABgGAHAAQADAAADACQACACAAADIgBAIIAAAIIAAAOIACAKIADABIACAAQAGAAAIgCIAAgKIgBgJIABgUQABgHAHAAQAEAAACACQADACAAADIgBAVIAAALIAAAMIAAADIAAAEQAAADgCACQgDACgDAAQgFAAgCgEg");
	this.shape_2.setTransform(37.6,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAuQgCgCAAgEIAAhQQAAgDACgCQACgCADAAQAEAAACACQACACAAADIAABNQAAALgIAAQgDAAgCgCg");
	this.shape_3.setTransform(32.8,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_4.setTransform(28,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAqQgHgRgJgfIgEgQQgEgLAAgFQAAgDADgCQACgCADAAQAGAAACAFIACALIAHATIAIAcIANgiIAFgOQADgJAFgEQACgDADAAQAEAAACACQADACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgFALIgFAMIgQAoIgGAOQgDAEgDAAQgGAAgDgFg");
	this.shape_5.setTransform(21,9.1);

	this.vol_up = new lib.pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(51.8,25.9,1,1,0,0,0,7,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.pos(), 3);

	this.vol_dwn = new lib.neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(21.8,25.9,1,1,0,0,0,7,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.neg(), 3);

	this.instance_2 = new lib.BeachScene();
	this.instance_2.parent = this;
	this.instance_2.setTransform(274.7,196,1,1,0,0,0,214.3,152.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.instance_1},{t:this.btn_menu}]}).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,198.2,614.2,404.8);
// library properties:
lib.properties = {
	id: 'D340785458FA47429D92268A2DC4FAAF',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmusic2.mp3", id:"bgmusic2"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/InfinitiveGreg.mp3", id:"InfinitiveGreg"},
		{src:"sounds/infinitivecanbeusedas.mp3", id:"infinitivecanbeusedas"},
		{src:"sounds/infinitives.mp3", id:"infinitives"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_2a.mp3", id:"_2a"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D340785458FA47429D92268A2DC4FAAF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;