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


(lib.TheDashinBub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape.setTransform(330.2,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_1.setTransform(322,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAKAAAMAFQAPAGAAAHQAAAFgDACQgDADgDAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgJAQAAALQAAAOAJAHQAIAHAMAAQAGAAAHgDIALgHIAEgBQAEAAACADQADADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_2.setTransform(311,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_3.setTransform(300.6,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_4.setTransform(290,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAJAAAMAFQAPAGAAAHQAAAFgCACQgCADgEAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgIAQAAALQAAAOAIAHQAJAHALAAQAGAAAGgDIAMgHIAEgBQAEAAADADQACADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_5.setTransform(279.9,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_6.setTransform(263.4,19.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_7.setTransform(252.1,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBEQgCgCAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDADgDQACgDAEAAIAVABIAAgNIgBgMQAAgEADgCQACgDAFAAQAHAAACAOIAAAIIAAAHIAAAFIANgBQALAAADABQAGABAAAIQAAAEgDADQgCADgFAAIgEgBIgGAAIgMACIACA5IAAAEIAAAFQAAAVgKAAQgDAAgEgDg");
	this.shape_8.setTransform(241.5,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_9.setTransform(225.4,19.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFBEQgDgCAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEADgCQADgDADAAQAJAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgEADgEAAIgEgBIgFAAIgNACIACA5IAAAEIAAAFQAAAVgKAAQgEAAgCgDg");
	this.shape_10.setTransform(215.7,17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghBMQgMgDAAgHQgBgJAJAAIAMABQAIACAKAAQASAAAHgSQAFgMAAgZQgGAKgGAFQgIAFgJAAQgRAAgLgMQgLgMAAgSQAAgbAPgQQAPgRAaAAQAKABAGACQAGACADAFQALAAAAALQAAAIgCALIgDATIgDAfQAAAUgDAMQgFAQgKAHQgLAJgWAAQgMAAgJgBgAgRgwQgJAMAAARQAAAOAFAHQAFAGALABQAJAAAJgLQAJgKABgKIAFghIgIgFIgJgBQgSAAgKANg");
	this.shape_11.setTransform(199.6,21.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgDADgFAAQgIAAgBgJg");
	this.shape_12.setTransform(189.5,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDAEAAQACAAAEADQACADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgCACgEABQgEgBgDgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAFAAAEAEQADAEAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_13.setTransform(181.4,16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_14.setTransform(172.8,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbA2QgPgFAAgKQABgEADgDQACgDAFAAQADAAAEAFQADACAIACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVATgJIATgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgPAGAAAKIAGABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_15.setTransform(161.7,18.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIACgKIgGgDIgFgBQgOAAgKAMg");
	this.shape_16.setTransform(152,19.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_17.setTransform(141,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEADgDQACgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_18.setTransform(124,18.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDADAAQADAAAEADQACADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgCACgEABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgDgDg");
	this.shape_19.setTransform(116.8,16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdBJQgDAFgFAAQgEAAgCgCQgDgDAAgEIABgIIAAgHIgBgfIAAgeIAAgbIAAgcQAAgFACgFQAEgGAFAAQAIAAAAAJIgBADIAAAEIgBAWIAAAZQAJgGAHgCQAIgEAGAAQAVAAANAQQAMAOAAAXQAAAWgOAPQgPAQgUAAQgPAAgMgGgAgPgDIgOAIIAAARIAAAPIAAAQIANAGQAGABAIAAQANABAJgKQAJgLAAgOQAAgPgHgJQgIgKgNAAQgHAAgJAFg");
	this.shape_20.setTransform(102.2,16.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_21.setTransform(90.8,19.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgtBLQgEgEAAgEIAAgdIACgmIACgpIABgbQABgFADgBQANgEARAAQAQAAAQAMQASANAAAUQAAAZgTAOQAOAGAHAHQAIAIAAAJQAAAMgNALQgJAIgKAEQgVAIgiAAQgEAAgEgEgAgdAnIAAAUQAZAAAPgHQAHgDAHgFQAFgFAAgDQAAgEgMgGQgJgEgJgDIgKgBIgDAAIgEAAIgMgBIAAAWgAgZg6IAAASIgCAmIAPABQANgCAKgHQAKgJAAgOQAAgJgLgIQgKgIgKAAIgPAAg");
	this.shape_22.setTransform(79.8,16.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghBMQgMgDAAgHQAAgJAIAAIAMABQAIACAKAAQASAAAHgSQAFgMAAgZQgFAKgIAFQgHAFgJAAQgRAAgLgMQgLgMAAgSQAAgbAPgQQAPgRAaAAQAKABAGACQAGACADAFQAKAAAAALQAAAIgBALIgDATIgDAfQAAAUgDAMQgEAQgLAHQgLAJgVAAQgNAAgJgBgAgRgwQgJAMAAARQAAAOAFAHQAGAGAKABQAJAAAJgLQAJgKABgKIAEghIgIgFIgJgBQgRAAgKANg");
	this.shape_23.setTransform(61.6,21.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_24.setTransform(51.5,19.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDADAAQADAAAEADQACADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgCACgEABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgDgDg");
	this.shape_25.setTransform(43.5,16.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_26.setTransform(34.8,16.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEACgDQADgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEALAHQAPAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_27.setTransform(23.8,18.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_28.setTransform(14.1,19.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_29.setTransform(3,16.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_30.setTransform(-14.1,19.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_31.setTransform(-25.4,16.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgCQgIgDAAgHQAAgEADgEQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgCg");
	this.shape_32.setTransform(-37.2,16.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AghBMQgMgDAAgHQgBgJAJAAIAMABQAIACAKAAQASAAAHgSQAFgMAAgZQgGAKgGAFQgIAFgJAAQgRAAgLgMQgLgMAAgSQAAgbAPgQQAPgRAaAAQAKABAGACQAGACADAFQALAAAAALQAAAIgCALIgDATIgDAfQAAAUgDAMQgFAQgKAHQgLAJgWAAQgMAAgJgBgAgRgwQgJAMAAARQAAAOAFAHQAFAGALABQAJAAAJgLQAJgKABgKIAFghIgIgFIgJgBQgSAAgKANg");
	this.shape_33.setTransform(199.6,21.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgDADgFAAQgIAAgBgJg");
	this.shape_34.setTransform(189.5,19.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDAEAAQACAAAEADQACADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgCACgEABQgEgBgDgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAFAAAEAEQADAEAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_35.setTransform(181.4,16.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_36.setTransform(172.8,16.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgbA2QgPgFAAgKQABgEADgDQACgDAFAAQADAAAEAFQADACAIACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVATgJIATgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgPAGAAAKIAGABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_37.setTransform(161.7,18.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIACgKIgGgDIgFgBQgOAAgKAMg");
	this.shape_38.setTransform(152,19.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_39.setTransform(141,16.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgbA2QgOgFAAgKQAAgEADgDQACgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_40.setTransform(124,18.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDADAAQADAAAEADQACADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgCACgEABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgDgDg");
	this.shape_41.setTransform(116.8,16.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9900FF").s().p("AghBMQgMgDAAgHQAAgJAIAAIAMABQAIACAKAAQASAAAHgSQAFgMAAgZQgFAKgIAFQgHAFgJAAQgRAAgLgMQgLgMAAgSQAAgbAPgQQAPgRAaAAQAKABAGACQAGACADAFQAKAAAAALQAAAIgBALIgDATIgDAfQAAAUgDAMQgEAQgLAHQgLAJgVAAQgNAAgJgBgAgRgwQgJAMAAARQAAAOAFAHQAGAGAKABQAJAAAJgLQAJgKABgKIAEghIgIgFIgJgBQgRAAgKANg");
	this.shape_42.setTransform(61.6,21.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9900FF").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_43.setTransform(51.5,19.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9900FF").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDADAAQADAAAEADQACADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgCACgEABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgDgDg");
	this.shape_44.setTransform(43.5,16.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9900FF").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_45.setTransform(34.8,16.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9900FF").s().p("AgbA2QgOgFAAgKQAAgEACgDQADgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEALAHQAPAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_46.setTransform(23.8,18.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9900FF").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_47.setTransform(14.1,19.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9900FF").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_48.setTransform(3,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:172.8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_32},{t:this.shape_14,p:{x:-25.4}},{t:this.shape_30},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,0,381.7,31.9);


(lib.BubisDashin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(259.2,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_1.setTransform(250.2,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATAAQALAAANAGQAQAGAAAIQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgGgPAAQgKAAgKAUQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgBQAEAAACACQADADAAAFQAAAIgQAHQgPAHgJgBQgVAAgPgNg");
	this.shape_2.setTransform(238.1,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYA0QgNAHgQAAQgPgBgJgGQgKgHgCgNQgEgcgBgWQABgPADgSQACgKAIAAQAFABADADQADADAAAEIgBAQIgCAQIABAeQABANACAIIAIACIAHABQANABAQgFIAAgWIAAgUQgBgXACgRQABgKAKAAQAEAAADADQADADABAFIgDAoIAAAXIABAWIAAAIIAAAHQAAAFgDADQgDACgEAAQgJABgCgKg");
	this.shape_3.setTransform(226.7,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_4.setTransform(215.1,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATAAQALAAANAGQAQAGAAAIQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgGgPAAQgKAAgKAUQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgBQAEAAACACQADADAAAFQAAAIgQAHQgPAHgJgBQgVAAgPgNg");
	this.shape_5.setTransform(203.9,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQADgGAFAAQADAAAEADQADADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_6.setTransform(185.8,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_7.setTransform(173.4,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgEQADgCAEgBQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_8.setTransform(161.7,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgWAMgTQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_9.setTransform(144.1,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIAAgMIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgEQADgCAEgBQAJAAACAQIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_10.setTransform(133.3,19.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkBTQgOgCAAgJQAAgJAJAAIANACQAJABALAAQAUAAAIgUQAFgNAAgbQgGALgIAFQgIAFgJAAQgTAAgNgNQgMgNAAgUQAAgdARgSQARgSAdAAQAKAAAGACQAHADAEAFQALAAAAANQAAAHgCANIgDAUIgCAkQgBAVgEAOQgFARgKAIQgNAKgYAAQgOAAgJgCgAgTg1QgKANAAATQAAAQAGAHQAGAHAMAAQAKAAAKgLQAJgLABgLQADgMACgZIgJgEQgEgCgFAAQgUAAgLAOg");
	this.shape_11.setTransform(115.5,23.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAaA1IgDgYIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABALQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgLIAAgJIABgeIACgeIgBgLIAAgKQAAgFADgDQADgDAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEAKABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDAEQgDACgEABQgKAAgBgKg");
	this.shape_12.setTransform(104.4,20.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJBOQgDgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgEADgDAAQgFAAgCgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_13.setTransform(95.6,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_14.setTransform(86.1,18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgEgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgCAGAAQAEAAADADQADADAAAEIABAKIACAJQAAAEgDAEQgDACgFABQgGAAgCgEQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSABQgPAAgMgGg");
	this.shape_15.setTransform(73.9,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAAEgCACIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNANAAARQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_16.setTransform(63.3,21);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmBJQgPgPAAgYQAAgdAQgPQAPgSAXAAQAMAAAIAEIAKAHQABgtACgQQACgJAIAAQAJAAAAAKQAAAPgDAzIgCAeQAAAkADATIAAACQABAEgDADQgEADgDAAQgHAAgDgKQgIAGgIADQgIADgJAAQgWAAgPgPgAgZABQgIAMgBAVQAAAOALAJQAJAKANAAQAIAAAHgDQAEgBAHgIIADgDIAAgSIAAgNIAAgMQgEgJgGgEQgHgEgKAAQgQAAgKAJg");
	this.shape_17.setTransform(51.1,18);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgEgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgCAGAAQAEAAADADQADADAAAEIABAKIACAJQAAAEgDAEQgDACgFABQgGAAgCgEQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSABQgPAAgMgGg");
	this.shape_18.setTransform(32.5,20.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgEADQgDADgDAAQgEAAgDgDgAgGg6QgEgEABgFQgBgFAEgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_19.setTransform(24.6,18.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AggBQQgDAFgFAAQgEAAgDgCQgDgDAAgFIAAgIIAAgIIAAgiIgBghIAAgeIAAgeQAAgGADgFQAEgHAGAAQAIAAAAAJIgBAFIAAAEIAAAYIgBAbQAKgGAIgDQAJgEAGAAQAXAAAOASQAOAQAAAYQAAAZgQARQgQARgWAAQgRAAgNgHgAgQgEIgQAJIAAATIAAARIAAARIAPAGQAHACAIAAQAOAAAKgLQAKgLAAgQQAAgQgIgLQgIgKgPAAQgIAAgJAFg");
	this.shape_20.setTransform(8.5,18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAYA0QgNAHgQAAQgPgBgJgGQgKgHgCgNQgFgcAAgWQAAgPAEgSQABgKAJAAQAFABADADQADADAAAEIgCAQIgBAQIABAeQABANACAIIAHACIAIABQANABAPgFIAAgWIAAgUQAAgXACgRQACgKAJAAQAEAAADADQAEADAAAFIgCAoIAAAXIAAAWIAAAIIABAHQAAAFgEADQgDACgEAAQgJABgCgKg");
	this.shape_21.setTransform(-3.9,21);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgyBTQgEgFAAgEIAAgfIACgrIADgtQgBgJACgUQAAgFADgCQAPgFASAAQASAAASANQAUAPAAAWQAAAbgWAQQARAGAIAIQAIAJAAAKQAAANgPAMQgJAIgLAFQgXAJgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgDAHgGQAGgGAAgCQAAgFgNgHQgLgEgJgDIgLgCIgEAAIgEAAIgNgBIAAAZgAgcg/IAAASIgCArIAQABQAPgCALgIQALgKAAgPQAAgKgMgJQgLgJgMAAIgQABg");
	this.shape_22.setTransform(-16.1,18.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgkBTQgOgCAAgJQAAgJAJAAIANACQAJABALAAQAUAAAIgUQAFgNAAgbQgGALgIAFQgIAFgJAAQgTAAgNgNQgMgNAAgUQAAgdARgSQARgSAdAAQAKAAAGACQAHADAEAFQALAAAAANQAAAHgCANIgDAUIgCAkQgBAVgEAOQgFARgKAIQgNAKgYAAQgOAAgJgCgAgTg1QgKANAAATQAAAQAGAHQAGAHAMAAQAKAAAKgLQAJgLABgLQADgMACgZIgJgEQgEgCgFAAQgUAAgLAOg");
	this.shape_23.setTransform(115.5,23.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AAaA1IgDgYIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABALQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgLIAAgJIABgeIACgeIgBgLIAAgKQAAgFADgDQADgDAFAAQAJABABAOIABAMQASgYASAAQARAAAHAPQAEAKABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDAEQgDACgEABQgKAAgBgKg");
	this.shape_24.setTransform(104.4,20.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgJBOQgDgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgEADgDAAQgFAAgCgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_25.setTransform(95.6,18.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_26.setTransform(86.1,18);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgEgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgCAGAAQAEAAADADQADADAAAEIABAKIACAJQAAAEgDAEQgDACgFABQgGAAgCgEQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSABQgPAAgMgGg");
	this.shape_27.setTransform(73.9,20.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AAiA3IgHgIIgSAIQgIADgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAAEgCACIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNANAAARQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_28.setTransform(63.3,21);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgmBJQgPgPAAgYQAAgdAQgPQAPgSAXAAQAMAAAIAEIAKAHQABgtACgQQACgJAIAAQAJAAAAAKQAAAPgDAzIgCAeQAAAkADATIAAACQABAEgDADQgEADgDAAQgHAAgDgKQgIAGgIADQgIADgJAAQgWAAgPgPgAgZABQgIAMgBAVQAAAOALAJQAJAKANAAQAIAAAHgDQAEgBAHgIIADgDIAAgSIAAgNIAAgMQgEgJgGgEQgHgEgKAAQgQAAgKAJg");
	this.shape_29.setTransform(51.1,18);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgEgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgCAGAAQAEAAADADQADADAAAEIABAKIACAJQAAAEgDAEQgDACgFABQgGAAgCgEQgCgEgBgJIgZAIQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSABQgPAAgMgGg");
	this.shape_30.setTransform(32.5,20.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgEADQgDADgDAAQgEAAgDgDgAgGg6QgEgEABgFQgBgFAEgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_31.setTransform(24.6,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,0,289.6,34.7);


(lib.ParticipleAuxDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAKQgDgEgBgGQABgFADgFQAFgDAFAAQAGAAAEADQAFAFgBAFQABAGgFAEQgEAEgGABQgFgBgFgEg");
	this.shape.setTransform(195.9,154.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9933FF").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_1.setTransform(185.6,145.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9933FF").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_2.setTransform(170.7,145.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9933FF").s().p("AgzBXQgDgEAAgFQAAgGADgDQADgEAFAAIAagCQABgJAAgMIgBgUIAAgUQAAgaACgoIgOAAIgQABQgFgBgDgDQgDgDAAgFQAAgMALgBIAjgBQAWAAAjAGQAKABAAALQAAAFgDAEQgEACgFAAIgSgBIgTgCQgDAhAAAeIABAVIAAAUIAAAUIAlAAQAEAAAEADQADADAAAFQAAAGgDADQgEAEgEAAIgVAAIgTABIgWACIgYACQgFAAgDgDg");
	this.shape_3.setTransform(155.7,145.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9933FF").s().p("AgHBWQgEgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgDgeIgCgvIgLAAQgaAAgOgDQgKgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgbgBIgbgBIgIAAQAAAQAEAkQACAhAAATIABAMIAAANQABAIgDAFQgDAIgHAAQgDAAgEgDg");
	this.shape_4.setTransform(142,145.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9933FF").s().p("AgwBIQgQgSAAgZQAAgmAhgqQAcgjAbAAIAKABIAIABQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCAEQgEAEgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgUAaQgcAjAAAeQAAAPAKALQAKAMAOAAQALAAAMgHQAHgDAOgKQAHgFADAAQAFAAAEADQADAEAAAFQAAAFgEAEQgfAcgfAAQgYAAgRgTg");
	this.shape_5.setTransform(125.8,145.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9933FF").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_6.setTransform(111.2,145.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9933FF").s().p("AgvBRQgXgQAAgWQABgOAMAAQALAAAAAOQAAAKAOAKQAOAJALAAQAIAAAFg7QABgbAAgqIAAgNIgHAAIgNAAIgOAAQgFAAgEgEQgDgDAAgGQAAgMAQAAIAMABIALAAIAVgBIAXgBQAbAAAAAOQgBAEgDAEQgDAEgFAAIgHgBIgIgBIgOABIABAOQAABWgMAoQgIAagSAAQgVAAgTgPg");
	this.shape_7.setTransform(95.5,146.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9933FF").s().p("AgkBfQgNgEgHgFIgBAAQgFAAgDgEQgEgDAAgFIABglIABglIgBgnIAAgqQAAgEAFgFQAFgGAFAAQADAAAPAIQASAJADAAQAhAMAXAXQAcAcAAAhQAAAUgJASQgKATgQAKQgTANggAAQgJAAgLgCgAgsggIAAAhIgBBAIACABQALAIAQgBQAZABAMgJQAMgHAGgNQAHgOAAgOQAAgggkgXQgLgIgrgTg");
	this.shape_8.setTransform(79.2,145.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9933FF").s().p("AAoA9QgDgLgEgaQgMABgTAFIgeAGQgGAPgPAeQgDAGgHAAQgFAAgDgDQgDgDAAgFQgBgGASglQgCgDAAgEQAAgKAMgCQANgYAVghQAagsAHAAQAJAAADAMIAIAoIASBQIAGATQADAJABADQgBAFgDAEQgEADgEAAQgLAAgJgbgAgPAIIArgIIgKgtg");
	this.shape_9.setTransform(61.2,145.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_10.setTransform(39.4,148.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAlA8QgFgFgCgDIgUAJQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgbATgVQAUgUAaAAQAKAAANAGQAQAGAAAJQAAAEgDACIgBAPIgBAYQAAAPACAIQABAGAGAPIADAGIAAACQAAAFgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAPAAASQAAATAHAKQAGAKAOgBQAKAAAIgEQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_11.setTransform(26.7,148.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAEAIABAOIAAAIQgCAPgKAAQgLAAAAgMIAAgIIAAgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgLAAQgLAAABgMg");
	this.shape_12.setTransform(8,148.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQAAgZAOgUQAQgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_13.setTransform(-4.6,148.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKAKQgDgEAAgGQAAgFADgFQAFgDAFAAQAGAAAEADQAEAFAAAFQAAAGgEAEQgEAEgGABQgFgBgFgEg");
	this.shape_14.setTransform(-20.8,154.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmBaIgEgBQgIAAgCgIQgCgEAAgKQAAgbAPgRQAHgHAegUQAPgLAGgHQAKgLAAgPQAAgIgKgFQgIgGgIAAQgKAAgJAGIgSAOQgEAEgEAAQgMAAABgKQgBgGAFgEQANgMALgGQAOgIAOAAQATAAAPAKQAQAMABASQgBAMgDAKQgDAKgIAIQgIAKgVANQgVAOgHAHQgNANAAATIAYgCIAjgBQAJAAAIADQAKAEAAAHQAAAFgDADQgDAEgFAAIgIgCIgIgCIgSABIgRABIgOABIgNABIgEAAg");
	this.shape_15.setTransform(-31.2,145.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAZQgEgDAAgEQAAgDAIgRIAJgUQACgGAGAAQAEABADADQADADAAAEQAAACgRAlQgCAGgFABQgEgBgDgDg");
	this.shape_16.setTransform(460,84.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgOIABgNIgDhEIgagCQgKAAAAgLQAAgFADgDQADgEAFAAIAZACIgBgQIAAgPQAAgEADgEQADgDAFAAQAKABACAQIAAALIAAAHIAAAHIAQgCQANAAADACQAHABAAAKQAAAEgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_17.setTransform(450.3,75.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_18.setTransform(438.7,77.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnAzQgTgPABgbQAAgdAOgUQAQgXAbAAQATAAAMAHQAPAHAAASQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAEAMABQAJgBAKgCQAOgEAEgGQAFgHAEAAQAEAAADADQADADABAEQAAANgWAKQgRAIgSAAQgZAAgQgNgAgYgeQgJALgEAUIAkgPQATgLAJgHQgKgKgRAAQgOAAgKAMg");
	this.shape_19.setTransform(425.8,77.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgEAEgEQADgEAFABQAEgBAGAGQACADAKACIANABQAJAAAIgCQAKgEABgIQAAgPgXgGIgLgCQgQgEgGgEQgKgGABgNQgBgZAXgKQAIgEAOgEIAWgHQAFgDAFABQAFAAAEADQADADAAAFIACAKIABAKQAAAGgEADQgDADgEABQgHgBgCgEQgDgDgBgJIgbAIQgRAHgBALIAHACQAaAEANAJQAUAMgBAWQAAAUgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_20.setTransform(412.8,77.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoAzQgSgPAAgbQAAgdAPgUQAQgXAbAAQATAAAMAHQAPAHAAASQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAJAEAMABQAJgBAKgCQAOgEAEgGQAEgHAFAAQAEAAADADQADADAAAEQABANgWAKQgSAIgRAAQgZAAgRgNgAgYgeQgJALgEAUIAkgPQATgLAJgHQgKgKgRAAQgOAAgKAMg");
	this.shape_21.setTransform(400.9,77.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQALAAABAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQgBAPgLAAQgKAAAAgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgMAAQgJAAgBgMg");
	this.shape_22.setTransform(388.7,77.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgtBgQgDgEAAgFIABgvIAAguIgDgvIgBgXQAAgIADgHQAEgGAGgBQAFAAADAEQADADAAAFIAAADIgBAIQAKgIAJgDQAJgEAIAAQAYABAMAVQAIARAAAcQAAAYgOAQQgOASgYgBQgLABgOgEIAAA4QAAAFgDAEQgEACgEAAQgGAAgDgCgAgKg9QgHADgJAJQACAbgBAcQAOAFALAAQAPAAAIgLQAGgJAAgOQAAgWgFgLQgFgKgLAAQgKAAgIAFg");
	this.shape_23.setTransform(376.3,80.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgEADgEQAEgEAFABQAEgBAFAGQADADAKACIANABQAJAAAIgCQALgEgBgIQABgPgXgGIgLgCQgPgEgHgEQgJgGAAgNQAAgZAWgKQAIgEAOgEIAWgHQAFgDAGABQAFAAADADQADADAAAFIACAKIABAKQAAAGgDADQgDADgFABQgHgBgCgEQgCgDgBgJIgbAIQgTAHAAALIAHACQAaAEAOAJQASAMABAWQAAAUgRAKQgOAHgUABQgPgBgOgFg");
	this.shape_24.setTransform(356.4,77.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgUIABgcIACgaQAAgGADgDQADgEAFAAQAEAAADAEQAEADAAAGIgCAaIgBAcIABAUIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_25.setTransform(347.7,74.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AAWAsQgHgKgPgSQgYAbgJAAQgEAAgDgDQgDgDAAgFQAAgDADgEIAWgVIgcgJQgHgDAAgGQAAgEADgEQADgDAFAAQACAAAdALIgBgWQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIABAUQAcgFAHAAQAEAAADAEQADADAAAEQAAAIgJACIgdADIAPAQQAKANAAAFQAAAFgDADQgDADgFAAQgEAAgEgEg");
	this.shape_26.setTransform(330.2,69.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_27.setTransform(317.2,74.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_28.setTransform(302.3,75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AAoA9QgDgLgEgaQgMABgTAFIgeAGQgGAPgPAeQgDAGgHAAQgFAAgDgDQgDgDgBgFQAAgGASglQgCgDAAgEQAAgKAMgCQANgYAVghQAagsAHAAQAJAAADAMIAIAoIASBQIAGATQADAJABADQgBAFgDAEQgEADgEAAQgLAAgJgbgAgPAIIAqgIIgJgtg");
	this.shape_29.setTransform(284.8,75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AhJBdQgDgEAAgFIACglIACglIAAgSIgBgUIABgbIACgcQAAgFADgEQADgDAFAAQAFAAADADQADAEAAAFIgBAcIgBAcIAAAcIAygIQAegGAUAAQACgRAAghQAAgJADgJQADgNAHAAQAFAAADADQAEADAAAFIgBAFQgCAFAAAKIAAAKIABAKIgCAjQgDAXAAALIACAbIABAbQAAAFgDADQgDADgFAAQgFAAgDgDQgDgDAAgFIgCgbIgBgbIABgRQgUAAgdAGIgxAJIgCAeIgCAeQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_30.setTransform(267.1,74.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQALAAABAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQgBAPgLAAQgKAAABgMIAAgIIgBgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgMAAQgJAAgBgMg");
	this.shape_31.setTransform(245.2,77.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAJgIQAJgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_32.setTransform(232.6,77.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AAWAsQgHgKgPgSQgYAbgJAAQgEAAgDgDQgDgDAAgFQAAgDADgEIAWgVIgcgJQgHgDAAgGQAAgEADgEQADgDAFAAQACAAAdALIgBgWQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIABAUQAcgFAHAAQAEAAADAEQADADAAAEQAAAIgJACIgdADIAPAQQAKANAAAFQAAAFgDADQgDADgFAAQgEAAgEgEg");
	this.shape_33.setTransform(212.5,69.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_34.setTransform(199.5,74.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("Ag2BaQgFgFABgFIAAgiIACgvQACghAAgPIABggQABgGADgCQAQgFAVAAQATAAATAOQAWAQAAAYQAAAegXARQARAHAJAJQAJAJAAALQAAAOgQAOQgKAJgMAFQgaAKgpAAQgEAAgFgFgAgkAvIAAAYQAfgBATgIQAIgDAHgHQAIgGgBgDQABgFgPgHQgMgFgKgDIgMgCIgFAAIgEAAIgOgBIgBAbgAgehFIAAAUIgDAuIARABQASgBALgKQAMgKAAgRQAAgLgMgJQgNgKgMAAIgSABg");
	this.shape_35.setTransform(184.7,74.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#990000").s().p("Ag2BaQgFgFABgFIAAgiIABgvQADghAAgPIABggQABgGADgCQAQgFAVAAQATAAATAOQAWAQAAAYQAAAegYARQASAHAJAJQAIAJABALQAAAOgQAOQgLAJgLAFQgaAKgpAAQgFAAgEgFgAgkAvIAAAYQAfgBATgIQAIgDAIgHQAGgGAAgDQAAgFgOgHQgMgFgKgDIgMgCIgFAAIgEAAIgOgBIgBAbgAgehFIAAAUIgDAuIASABQAQgBAMgKQAMgKAAgRQAAgLgMgJQgNgKgMAAIgSABg");
	this.shape_36.setTransform(162.4,74.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#990000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_37.setTransform(146.9,74.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_38.setTransform(132,74.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_39.setTransform(117.1,75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#990000").s().p("AgZBaQgDgEAAgEQAAgEALgWIAOgaQgUgbgHgPQgFgNgMgSIgUgfQgCgDAAgDQAAgGAEgCQADgEAFAAQAGAAAEAFIAJAPIARAZQAIAPAFALQAEALALAPIAbhAIANgZQAEgIAHAAQAFAAAEADQADAEAAAFQAAAFgGALIgHAOIgVAyQgLAbgLAUIgOAbIgFAMQgFAHgGAAQgEAAgFgDg");
	this.shape_40.setTransform(93.4,75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_41.setTransform(78.8,74.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990000").s().p("AApA9QgDgLgFgaQgMABgTAFIgfAGQgFAPgPAeQgDAGgGAAQgFAAgEgDQgDgDAAgFQAAgGARglQgCgDAAgEQAAgKAMgCQANgYAUghQAbgsAHAAQAJAAAEAMIAHAoIARBQIAHATQADAJAAADQAAAFgDAEQgEADgFAAQgKAAgIgbgAgOAIIAqgIIgKgtg");
	this.shape_42.setTransform(62.1,75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#990000").s().p("AgzBXQgDgEAAgFQAAgFADgEQAEgDAEAAIAZgDQACgJAAgMIgBgUIgBgUQAAgaADgoIgOAAIgQAAQgFAAgEgDQgCgEAAgEQgBgLALgCIAkgBQAWABAjAFQALABAAALQgBAGgEADQgDADgFAAIgSgCIgTgDQgDAjAAAdIABAVIAAAUIAAAUIAlAAQAEAAAEADQADAEAAAEQAAAGgDADQgEAEgEAAIgUAAIgUABIgWABIgYACQgEAAgEgCg");
	this.shape_43.setTransform(47,75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#990000").s().p("AgyBcQgHgFAAgNIACgnQADg0AAhCQAAgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAABCgDA2IgCARIgBASQAfAAAugPIAEAAQAFAAADAEQADADAAAFQAAAHgIAEQgNAGgcAFQgZAFgRAAQgMAAgFgEg");
	this.shape_44.setTransform(34.1,75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#990000").s().p("AgzBXQgDgEAAgFQAAgFADgEQADgDAFAAIAagDQABgJAAgMIgBgUIAAgUQAAgaACgoIgOAAIgQAAQgFAAgDgDQgDgEAAgEQAAgLALgCIAjgBQAWABAjAFQAKABAAALQAAAGgDADQgEADgFAAIgSgCIgTgDQgDAjAAAdIABAVIAAAUIAAAUIAlAAQAEAAAEADQADAEAAAEQAAAGgDADQgEAEgEAAIgVAAIgTABIgWABIgYACQgFAAgDgCg");
	this.shape_45.setTransform(20.7,75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#990000").s().p("AA4BaQgJgIgJgOIgPgYIgTgaIgoAuIgVAYQgEAEgFAAQgEAAgEgDQgEgEABgFQAAgEACgEIAVgYIAsgxIgbgjIgNgSQgIgMgIgFQgEgEgBgGQAAgFAEgDQADgEAFAAQAKAAAQAVIAOAUIAYAgIAcglQAagkAHAAQAFAAAEAEQADADAAAFQAAAEgDAEIgYAfIgPAWIgPAUIAZAlQAQAWAMAOQADAEAAAFQgBAEgDAEQgDAEgFAAQgFAAgEgEg");
	this.shape_46.setTransform(5.3,75.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#990000").s().p("Ag0BFQgOgQgEghQgCgPAAgsIABgaQABgLABgEQAEgJAHAAQALAAAAAUIAABFQAABGAwAAQAwAAAAh3IAAgLIgBgKQAAgHADgFQADgHAHAAQALAAAAAQIAAAOIAAAPQAACGhGAAQgjAAgTgVg");
	this.shape_47.setTransform(-12,74.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990000").s().p("AApA9QgDgLgFgaQgMABgTAFIgfAGQgFAPgOAeQgEAGgGAAQgGAAgDgDQgEgDAAgFQAAgGASglQgCgDAAgEQAAgKALgCQAOgYAUghQAbgsAHAAQAJAAADAMIAIAoIARBQIAHATQAEAJgBADQABAFgEAEQgEADgEAAQgMAAgHgbgAgOAIIApgIIgJgtg");
	this.shape_48.setTransform(-29.9,75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgnAyQgTgOABgbQAAgdAOgUQARgXAaAAQATAAAMAHQAPAIAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEAMAAQAJAAALgCQANgEAFgGQAEgHAEAAQAEAAADADQAEAEAAADQAAANgWAKQgRAIgSAAQgZAAgQgOgAgYgeQgJALgEAVIAkgQQAUgLAIgHQgKgKgRAAQgOAAgKAMg");
	this.shape_49.setTransform(486.2,42.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgJQAAgWgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAGgHABQgEAAgEgEQgEgDAAgFIABgFIACgRIAAgRIAAhWIABgTIgBgLQgBgGAAgFQAAgGADgCQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAZIAEAYIABADQAAAFgEADQgDAEgFgBQgJABgCgKg");
	this.shape_50.setTransform(472.6,39.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_51.setTransform(459.8,40.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_52.setTransform(440.8,39.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAJAHAJAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_53.setTransform(428.4,42.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgGBFQgDgDAAgGQAAgOgDgbQgDgbAAgOQAAgNgEgHQgHAEgJAJIgOAPIgGAHIgBAUIgCAUIACAKIABAJQAAAFgEADQgDAEgFAAQgNAAAAgeIABgVIACgUIgCgTIgBgTQAAgaAMAAQAFAAAEAEQADAEAAAEIgBAHIAAAHIAAANQAGgNAMgKQAMgKAIAAQATAAAFASQAHgIAJgFQAJgEALAAQAUAAAHAVQACAEADAdIAJBCQAAAFgEADQgEADgFAAQgJAAgCgKIgEgkIgEgjQgBgIgDgIQgEgLgEAAQgFAAgMAIQgLAGgEAFIABAWIAEAeQACASAAAMQAAAGgDADQgEADgEAAQgEAAgEgDg");
	this.shape_54.setTransform(406,42.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQAMAAAAAUQAWgWAaAAQAKAAAFAHQAEAIAAAOIAAAIQAAAPgLAAQgKAAAAgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAAAgMg");
	this.shape_55.setTransform(391.1,42.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_56.setTransform(378.5,42.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_57.setTransform(366.1,39.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_58.setTransform(346.9,42.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_59.setTransform(327.3,39.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgUIABgcIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAcIABAUIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_60.setTransform(318.3,39.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgoAyQgRgOgBgbQABgdAPgUQAQgXAaAAQATAAAMAHQAPAIAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAEAMAAQAHAAALgCQAPgEAEgGQADgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgTAIgQAAQgaAAgRgOgAgXgeQgKALgFAVIAkgQQAVgLAJgHQgLgKgRAAQgOAAgJAMg");
	this.shape_61.setTransform(301.2,42.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AghAzQgQgPAAgZQAAgXAPgZQARgcAWAAQALAAAPAGQASAGAAAKQAAAFgEADQgDADgEABQgDAAgCgCIgGgFQgGgFgQAAQgLAAgMAWQgLATAAANQAAAQALAIQAKAJAOAAQAIAAAIgEIANgHIAFgCQAEAAAEADQADAEAAAEQgBAJgRAIQgQAHgLAAQgXAAgQgPg");
	this.shape_62.setTransform(288.3,42.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_63.setTransform(276,42.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgoAyQgSgOAAgbQAAgdAPgUQAQgXAbAAQATAAAMAHQAPAIAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAEALAAQAJAAAKgCQAOgEAEgGQAEgHAFAAQAEAAADADQADAEAAADQABANgVAKQgSAIgSAAQgZAAgRgOgAgYgeQgJALgEAVIAkgQQATgLAKgHQgLgKgRAAQgOAAgKAMg");
	this.shape_64.setTransform(263.1,42.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_65.setTransform(250.6,40.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_66.setTransform(239,42.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgoAyQgRgOgBgbQABgdAPgUQAQgXAaAAQATAAAMAHQAPAIAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAEALAAQAJAAAKgCQAPgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgSAIgSAAQgZAAgRgOgAgYgeQgJALgFAVIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKAMg");
	this.shape_67.setTransform(226.1,42.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQADgBAHAGQACADAKACIANABQAJAAAHgCQAMgEAAgHQgBgQgWgGIgLgCQgQgEgGgFQgKgFAAgNQAAgZAYgKQAGgEAPgEIAWgHQAFgCAGgBQAEABAEADQADADAAAFIABAKIACALQAAAFgEADQgCADgGABQgGgBgDgEQgCgDAAgKIgbAJQgTAHABALIAGACQAaAEANAJQATALAAAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_68.setTransform(213.2,41.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_69.setTransform(194.3,42.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_70.setTransform(174.7,39.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAJgIQAJgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_71.setTransform(162.4,42.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("Ag2BaQgFgFABgFIAAgiIABgvQADghAAgPIABggQABgGADgCQAQgFAVAAQATAAATAOQAWAQAAAYQAAAegYARQASAHAJAJQAIAJABALQAAAOgQAOQgLAJgLAFQgaAKgpAAQgFAAgEgFgAgkAvIAAAYQAfgBATgIQAIgDAIgHQAGgGAAgDQAAgFgOgHQgMgFgKgDIgMgCIgFAAIgEAAIgOgBIgBAbgAgehFIAAAUIgDAuIASABQAQgBAMgKQAMgKAAgRQAAgLgMgJQgNgKgMAAIgSABg");
	this.shape_72.setTransform(142.1,39.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_73.setTransform(126.7,39.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_74.setTransform(111.7,39.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_75.setTransform(96.8,39.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_76.setTransform(75.1,42.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgUIABgcIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAcIABAUIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_77.setTransform(65.4,39.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_78.setTransform(55.7,42.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGBFQgDgDAAgGQAAgOgDgbQgDgbAAgOQAAgNgDgHQgJAEgIAJIgOAPIgGAHIgBAUIgCAUIACAKIABAJQAAAFgEADQgEAEgEAAQgNAAAAgeIABgVIABgUIgBgTIgBgTQAAgaAMAAQAFAAADAEQAEAEAAAEIgBAHIAAAHIAAANQAGgNAMgKQAMgKAJAAQASAAAFASQAHgIAJgFQAJgEALAAQAUAAAHAVQABAEAEAdIAJBCQgBAFgDADQgDADgFAAQgKAAgCgKIgEgkIgEgjQgBgIgDgIQgEgLgFAAQgEAAgMAIQgLAGgDAFIAAAWIADAeQADASAAAMQAAAGgDADQgEADgFAAQgDAAgEgDg");
	this.shape_79.setTransform(40.4,42.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgnAyQgTgOABgbQgBgdAPgUQARgXAaAAQATAAAMAHQAPAIAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEANAAQAHAAAMgCQANgEAFgGQAEgHAEAAQAEAAADADQAEAEAAADQAAANgWAKQgRAIgRAAQgaAAgQgOgAgXgeQgKALgFAVIAlgQQAUgLAIgHQgJgKgSAAQgOAAgJAMg");
	this.shape_80.setTransform(17.4,42.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgJQAAgWgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAGgHABQgEAAgEgEQgEgDAAgFIABgFIACgRIAAgRIAAhWIABgTIgBgLQgBgGAAgFQAAgGADgCQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAZIAEAYIABADQAAAFgEADQgDAEgFgBQgJABgCgKg");
	this.shape_81.setTransform(3.8,39.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_82.setTransform(-9,40.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgKAKQgEgEAAgGQAAgFAEgFQAFgDAFAAQAGAAAEADQAFAFgBAFQABAGgFAEQgEAEgGAAQgFAAgFgEg");
	this.shape_83.setTransform(-24.6,47.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AADBbIgWAAIgMgBQgGgCAAgHQAAgMATAAIAFABIAFAAIgBgRIgBgQQAAgPADgeQACgdAAgQQgPAMgFAAQgEAAgEgDQgDgEAAgEQAAgGAKgIIASgOQAJgKAJAAQAIAAAAAJIgBAIIAAAIIAAALIABAMQAAANgDAbQgDAZAAAOIABAQIABAQIAMAAQAFAAADADQAEADAAAFQAAAFgEADQgDADgFAAg");
	this.shape_84.setTransform(-33,38.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGA3QgDgDgBgFIAAgHIgBgGQAAgFADgDQAFgEADAAQANAAABAZQgBAFgDADQgDAEgFAAQgFAAgDgEgAgIgdQgDgDgBgFIAAgFIAAgEQAAgFADgDQAEgEAEAAQANAAAAAVQAAAFgEADQgDADgFAAQgFAAgDgDg");
	this.shape_85.setTransform(359.5,-30.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgnAyQgSgOgBgaQABgeAPgVQAPgWAbAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQAOgDAEgGQADgHAFAAQAEAAAEAEQACADABADQgBAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKALgFAWIAkgQQAVgLAJgHQgKgKgSAAQgOAAgJALg");
	this.shape_86.setTransform(349.7,-28.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AghAzQgQgPAAgZQAAgWAPgaQARgcAWAAQALAAAPAGQASAGAAAKQgBAFgDADQgDADgEAAQgDAAgCgBIgGgFQgGgFgQAAQgLAAgMAVQgKAUAAANQAAAPAKAKQAKAIAPAAQAGAAAJgEIANgHIAFgCQAEAAADADQAEAEAAAEQgBAJgRAIQgQAHgKAAQgYAAgQgPg");
	this.shape_87.setTransform(336.8,-28.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_88.setTransform(324.5,-28.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFAMgBQAIAAAKgDQAPgDADgGQAEgHAFAAQAEAAAEAEQACADAAADQAAAOgUAJQgSAIgRAAQgaAAgRgOgAgYgfQgJALgFAWIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_89.setTransform(311.6,-28.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_90.setTransform(299.1,-30.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_91.setTransform(287.5,-28.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFAMgBQAHAAALgDQAPgDADgGQAEgHAFAAQAEAAAEAEQACADAAADQAAAOgUAJQgTAIgQAAQgaAAgRgOgAgXgfQgKALgFAWIAkgQQAVgLAJgHQgLgKgRAAQgOAAgJALg");
	this.shape_92.setTransform(274.6,-28.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFgBQADABAGAFQADACAKACIANACQAJAAAHgDQALgDAAgHQAAgQgWgGIgLgDQgQgDgGgFQgKgFAAgOQAAgYAYgKQAHgEAOgEIAWgHQAFgCAGgBQAEABAEADQADADAAAGIABAKIACAKQAAAEgEAEQgDADgFAAQgGAAgDgEQgBgDgBgKIgbAIQgTAIABALIAGACQAaAFAOAIQASALAAAYQAAATgQAJQgOAJgUAAQgPAAgOgGg");
	this.shape_93.setTransform(261.7,-29.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgnAyQgTgOABgaQAAgeAOgVQAQgWAbAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFAMgBQAJAAAKgDQAOgDAEgGQAFgHAEAAQAEAAADAEQADADABADQAAAOgWAJQgRAIgSAAQgZAAgQgOgAgYgfQgJALgEAWIAkgQQATgLAJgHQgKgKgRAAQgOAAgKALg");
	this.shape_94.setTransform(242.6,-28.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgGQAAgEADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_95.setTransform(229.1,-31.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_96.setTransform(216.3,-30.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_97.setTransform(197.2,-31.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAJgIQAJgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_98.setTransform(184.9,-28.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgDAFgBQADABAHAFQACACAKACIANACQAJAAAHgDQAMgDAAgHQgBgQgWgGIgLgDQgQgDgGgFQgKgFAAgOQAAgYAYgKQAGgEAPgEIAWgHQAFgCAGgBQAEABAEADQADADAAAGIABAKIACAKQAAAEgEAEQgCADgGAAQgGAAgDgEQgCgDAAgKIgbAIQgTAIABALIAGACQAaAFAOAIQASALAAAYQAAATgQAJQgOAJgUAAQgPAAgOgGg");
	this.shape_99.setTransform(165.5,-29.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_100.setTransform(154.2,-30.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAFAIAAAOIAAAIQgBAPgMAAQgJAAgBgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgLAAQgKAAAAgMg");
	this.shape_101.setTransform(143.2,-28.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAFQAQAHAAAKQAAADgDACIgBAOIgBAZQAAAPACAJQABAFAGAQIADAGIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGALAOAAQAKAAAIgFQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_102.setTransform(130.9,-28.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgsBfQgEgDAAgFIAAgvIAAguIgBguIgCgZQAAgHADgGQADgIAHABQAFgBADAEQADADAAAFIgBADIAAAHQAKgGAKgEQAIgEAIABQAYAAALAVQAJARAAAbQAAAZgNARQgPARgYAAQgLAAgNgEIgBA4QAAAFgDADQgDAEgGAAQgEAAgDgEgAgLg9QgFADgKAJQABAbABAcQANAFALAAQAPAAAHgLQAHgIAAgQQAAgVgFgLQgGgKgKAAQgKAAgJAFg");
	this.shape_103.setTransform(118.5,-25.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQALAAABAUQAWgWAaAAQAKAAAFAHQAFAIgBAOIAAAIQgBAPgLAAQgKAAAAgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgMAAQgJAAgBgMg");
	this.shape_104.setTransform(99.4,-28.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAJgIQAJgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_105.setTransform(86.8,-28.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AglBUIgBgGQAAgEADgEQAEgDAFAAQAGAAAIAPIAGAMQAFAFAFAAQAFAAAEgHIAEgMQAAgOgFg4IgDhAQAAgGACgEQAEgFAFAAQAEAAAEADQAEADABADIADBDIADBIQAAAQgKANQgKAPgPAAQgYAAgRgngAAIhiQgFgEAAgGQAAgGAFgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_106.setTransform(74.7,-28.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAFQAQAHAAAKQAAADgDACIgBAOIgBAZQAAAPACAJQABAFAGAQIADAGIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGALAOAAQAKAAAIgFQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_107.setTransform(64.8,-28.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgGBFQgDgDAAgGQAAgOgDgbQgDgbAAgOQAAgNgEgHQgHAEgJAJIgOAPIgGAHIgBAUIgCAUIACAKIABAJQAAAFgDADQgEAEgFAAQgOAAAAgeIACgVIACgUIgCgTIgBgTQAAgaAMAAQAEAAAFAEQADAEAAAEIgBAHIAAAHIAAANQAGgNAMgKQAMgKAIAAQATAAAFASQAHgIAJgFQAJgEALAAQAUAAAHAVQACAEADAdIAJBCQAAAFgEADQgEADgFAAQgJAAgCgKIgEgkIgEgjQgBgIgDgIQgEgLgEAAQgFAAgLAIQgMAGgEAFIABAWIAEAeQACASAAAMQAAAGgDADQgEADgEAAQgFAAgDgDg");
	this.shape_108.setTransform(49.5,-28.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQAAgZAOgUQAQgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_109.setTransform(26.4,-28.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAHAiIgEgbIgDgaIgKAWIgSAwQgBAFgDACQgEAHgHAAQgJAAgJgjQgEgSgEgeIgDgSIgBgRQAAgFADgDQAEgEAEAAQAJAAADAKIACARIACARIAHA0QANgjAOgvQADgNAJAAQAJAAAEAOIAHAqQAFAdAEARIAIggIAPg/QACgHAIAAQAFAAAEADQADADAAAFIgBAFQgJAngPAvQgDAKgHAMQgFAGgHAAQgMAAgIggg");
	this.shape_110.setTransform(12.2,-28.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_111.setTransform(-1.8,-30.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFADgDQAEgDAFgBQAEABAFAFQADACAKACIANACQAJAAAHgDQAMgDgBgHQABgQgXgGIgLgDQgPgDgHgFQgJgFAAgOQAAgYAWgKQAIgEAOgEIAWgHQAFgCAGgBQAFABADADQADADAAAGIABAKIACAKQAAAEgDAEQgDADgFAAQgHAAgCgEQgCgDgBgKIgbAIQgTAIAAALIAHACQAaAFAOAIQASALABAYQAAATgRAJQgOAJgUAAQgPAAgOgGg");
	this.shape_112.setTransform(-20.7,-29.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAFQAQAHAAAKQAAADgDACIgBAOIgBAZQAAAPACAJQABAFAGAQIADAGIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGALAOAAQAKAAAIgFQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_113.setTransform(-32.4,-28.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgpBQQgRgRAAgZQAAggARgSQAQgSAaAAQAOAAAHAEIALAIQACgyACgRQABgKAKAAQALAAgBALQAAARgEA3IgBAiQAAAnADAUIAAACQAAAFgDADQgDADgEAAQgIAAgDgKQgJAGgJADQgJADgJAAQgYAAgQgQgAgbACQgKAMABAXQgBAPALALQALALAOAAQAJAAAHgEIANgJIADgEIAAgUIAAgOIAAgOQgEgJgHgEQgIgFgKAAQgTAAgKALg");
	this.shape_114.setTransform(452,-67.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgnAyQgSgOAAgaQgBgeAQgVQAPgWAbAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQANgDAFgHQAEgGAEAAQAEAAAEAEQADACAAAEQgBAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKALgFAWIAkgRQAVgKAIgIQgJgJgSAAQgOAAgJALg");
	this.shape_115.setTransform(438.7,-64.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgEADgEQAEgDAFgBQAEABAFAFQADACAKACIANACQAJAAAHgDQAMgDgBgHQABgQgXgGIgLgDQgPgDgHgFQgJgFAAgOQAAgYAWgKQAIgDAOgFIAWgHQAFgDAGAAQAFAAADAEQADADAAAGIABAKIACAKQAAAEgDAEQgDAEgFgBQgHABgCgFQgCgDgBgKIgbAIQgTAIAAALIAHACQAaAEAOAJQASALABAYQAAATgRAJQgOAJgUgBQgPABgOgGg");
	this.shape_116.setTransform(425.7,-64.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAaA4QgPAIgSAAQgPAAgKgHQgLgIgCgOQgFgfAAgXQAAgQAEgVQABgKAKAAQAFAAADADQAEADAAAFIgCASIgCASIABAgQACAOACAIIAIAEIAHABQAPAAARgFIAAgYIAAgWQAAgZACgTQACgKAKAAQAFAAADADQAEADgBAFIgCAsIAAAZIAAAZIABAIIAAAIQAAAFgDADQgEADgEAAQgKAAgCgLg");
	this.shape_117.setTransform(414,-64.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgoAyQgRgOAAgaQAAgeAPgVQAPgWAbAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQAOgDAEgHQADgGAFAAQAEAAAEAEQACACAAAEQAAAOgUAJQgTAIgQAAQgaAAgRgOgAgXgfQgKALgFAWIAkgRQAVgKAJgIQgKgJgSAAQgOAAgJALg");
	this.shape_118.setTransform(394.2,-64.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgjBYQgEAFgFAAQgFAAgDgDQgDgDAAgFIABgJIAAgJIgBglIAAgkIAAggIAAghQAAgHADgGQAEgHAGAAQAJAAAAAKIAAAFIgBAFIAAAaIAAAeQAJgHAJgEQAKgDAHAAQAZAAAQATQAOARAAAbQAAAagRATQgRATgZAAQgSAAgOgHgAgRgFIgRALIgBAUIABASIAAAUIAPAGQAIACAIAAQARAAALgMQAKgLABgSQgBgSgIgLQgKgMgQAAQgIAAgKAFg");
	this.shape_119.setTransform(380.6,-67.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAJAHAJAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_120.setTransform(359.6,-64);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgEADgEQAEgDAFgBQAEABAFAFQADACAKACIANACQAJAAAIgDQALgDgBgHQABgQgXgGIgLgDQgPgDgHgFQgJgFAAgOQAAgYAWgKQAIgDAOgFIAWgHQAFgDAFAAQAGAAADAEQADADAAAGIACAKIABAKQAAAEgDAEQgEAEgEgBQgHABgCgFQgCgDgCgKIgbAIQgSAIAAALIAHACQAaAEAOAJQATALAAAYQAAATgRAJQgOAJgUgBQgPABgOgGg");
	this.shape_121.setTransform(347.3,-64.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgMBVIABgrIABgqIABgqIAAgqQAAgMALAAQALAAAAAMIAAAqIgBAqIgBA6IgBAbQgCAMgJAAQgLAAAAgMg");
	this.shape_122.setTransform(338.5,-67.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAlA8QgFgEgCgEIgUAJQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAFQAQAHAAAJQAAADgDADIgBAOIgBAZQAAAPACAJQABAFAGAPIADAHIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAKQAGAJAOABQAKAAAIgFQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_123.setTransform(329.1,-64);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_124.setTransform(309.8,-64.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAlA8QgFgEgCgEIgUAJQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAFQAQAHAAAJQAAADgDADIgBAOIgBAZQAAAPACAJQABAFAGAPIADAHIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAKQAGAJAOABQAKAAAIgFQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_125.setTransform(297.1,-64);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AghAzQgRgPAAgZQAAgWAQgaQASgcAUAAQAMAAAOAFQATAHgBAKQAAAFgCADQgDADgFAAQgEAAgBgBIgGgFQgGgFgRAAQgKAAgMAVQgKAUAAANQAAAQAKAJQAKAIAPAAQAHAAAHgEIAOgHIAFgCQAEAAADAEQADADABAEQAAAJgSAIQgRAHgJAAQgYAAgQgPg");
	this.shape_126.setTransform(284.8,-64.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF00FF").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_127.setTransform(264.3,-67.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF00FF").s().p("AgyBcQgHgFAAgNIACgnQADg0AAhCQAAgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAABCgDA2IgCARIgBASQAfAAAugPIAEAAQAFAAADAEQADADAAAFQAAAHgIAEQgNAGgcAFQgZAFgRAAQgMAAgFgEg");
	this.shape_128.setTransform(250.1,-66.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF00FF").s().p("AgxBaQgDgDAAgFIAAgjQAAgRACgeIADgwIAAgQQAAgMABgGQADgKAJABIAKgBIARAAQAVAAASAOQAVAQAAAXQAAAdgWAQQgUAPgaABIgPgCIgBA+QAAAFgDADQgDAEgEAAQgFAAgDgEgAgThGIgHAAIAAAWIgCAvIANABQASAAAOgKQAPgKAAgTQAAgNgOgKQgNgIgOgBIgKABg");
	this.shape_129.setTransform(237.2,-67.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF00FF").s().p("AgzBWQgDgDAAgFQAAgGADgDQAEgDAEgBIAZgCQACgJAAgNIgBgTIgBgUQAAgaADgpIgOABIgQABQgFAAgEgEQgCgEAAgFQgBgLALAAIAkgBQAWAAAjAEQALACAAALQgBAGgEADQgDACgFAAIgSgBIgTgCQgDAhAAAfIABAUIAAAUIAAAUIAlAAQAEAAAEAEQADACAAAGQAAAFgDAEQgEADgEAAIgUAAIgUAAIgWACIgYADQgEAAgEgEg");
	this.shape_130.setTransform(224.3,-66.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF00FF").s().p("AgwBIQgQgSAAgZQAAgmAhgqQAcgjAbAAIAKABIAIABQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCAEQgEAEgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgUAaQgcAjAAAeQAAAPAKALQAKAMAOAAQALAAAMgHQAHgDAOgKQAHgFADAAQAFAAAEADQADAEAAAFQAAAFgEAEQgfAcgfAAQgYAAgRgTg");
	this.shape_131.setTransform(210.7,-67.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF00FF").s().p("AgzBWQgDgDAAgFQAAgGADgDQAEgDAEgBIAZgCQACgJAAgNIgBgTIgBgUQAAgaADgpIgOABIgQABQgFAAgDgEQgDgEAAgFQAAgLALAAIAjgBQAWAAAjAEQAKACAAALQAAAGgDADQgEACgFAAIgSgBIgTgCQgDAhAAAfIABAUIAAAUIAAAUIAlAAQAEAAAEAEQADACAAAGQAAAFgDAEQgEADgEAAIgUAAIgUAAIgWACIgYADQgEAAgEgEg");
	this.shape_132.setTransform(196.7,-66.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF00FF").s().p("AgHBWQgEgDAAgGIABgFIAAgFIgBgRIgBgSQAAgQgDgeIgCgvIgLAAQgaAAgPgDQgJgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgbgBIgbgBIgIAAQABAQADAkQACAhAAATIABAMIAAANQABAIgDAFQgDAIgHAAQgEAAgDgDg");
	this.shape_133.setTransform(183,-67.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF00FF").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_134.setTransform(166.5,-67.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF00FF").s().p("AAoA9QgDgLgEgaQgMABgTAFIgeAGQgGAPgPAeQgDAGgHAAQgFAAgDgDQgDgDgBgFQAAgGASglQgCgDAAgEQAAgKALgCQAOgYAVghQAagsAHAAQAJAAADAMIAIAoIASBQIAGATQADAJABADQgBAFgDAEQgEADgEAAQgLAAgJgbgAgPAIIArgIIgKgtg");
	this.shape_135.setTransform(149.8,-66.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF00FF").s().p("AgxBaQgDgDAAgFIAAgjQAAgRACgeIADgwIAAgQQAAgMABgGQADgKAJABIAKgBIARAAQAVAAASAOQAVAQAAAXQAAAdgWAQQgUAPgaABIgPgCIgBA+QAAAFgDADQgDAEgEAAQgFAAgDgEgAgThGIgHAAIAAAWIgCAvIANABQASAAAOgKQAPgKAAgTQAAgNgOgKQgNgIgOgBIgKABg");
	this.shape_136.setTransform(135.1,-67.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF00FF").s().p("AgIBWQgDgDAAgGIABgFIAAgFIgBgRIAAgSQAAgQgEgeIgDgvIgKAAQgaAAgPgDQgJgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgagBIgbgBIgIAAQAAAQACAkQADAhAAATIABAMIABANQAAAIgDAFQgDAIgHAAQgDAAgFgDg");
	this.shape_137.setTransform(114.5,-67.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF00FF").s().p("AhOBbQgEgDAAgFIABgPIABgPIABgWIAAgWIAAgWIgBgXIgBgWIgCgWQABgGAEgEQAFgFAGAAQAFAAAKAOQAdAsAXAdQAbAhAhAfIAAgPIAAgOQAAgzgEgeIgDgMQgCgIgBgFQAAgOANAAQAVAAAABNIgBAlIAAAnIgDATQgBAMgLAAQgGAAgJgJQgwgtg9hUIAAAbIgBAaIABAdIAAAdQAAAggMAAQgHAAgDgFg");
	this.shape_138.setTransform(95.9,-66.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF00FF").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_139.setTransform(79,-67.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF00FF").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_140.setTransform(62.9,-66.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF00FF").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_141.setTransform(47.3,-67.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF00FF").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_142.setTransform(32.2,-67.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF00FF").s().p("AgxBaQgDgDAAgFIAAgjQAAgRACgeIADgwIAAgQQAAgMABgGQADgKAJABIAKgBIARAAQAVAAASAOQAVAQAAAXQAAAdgWAQQgUAPgaABIgPgCIgBA+QAAAFgDADQgDAEgEAAQgFAAgDgEgAgThGIgHAAIAAAWIgCAvIANABQASAAAOgKQAPgKAAgTQAAgNgOgKQgNgIgOgBIgKABg");
	this.shape_143.setTransform(18.3,-67.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAAQQAAAMgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFALgBQAJAAAKgDQAPgDADgHQAEgGAFAAQAEAAAEAEQACACAAAEQAAAOgUAJQgSAIgSAAQgZAAgRgOgAgYgfQgJALgFAWIAkgRQAUgKAKgIQgLgJgRAAQgOAAgKALg");
	this.shape_144.setTransform(-1.6,-64.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAgBZQgDgKgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHgBQgEAAgEgCQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgGQAAgFADgDQAEgCAFAAQAJgBACAKQACAMAAAJIgBAaIgBAZIAAAKQAKgMALgHQAKgGAMAAQAUAAAHANQAFAIABAUIABAXIACAYIAEAZIABADQAAAFgEADQgDAEgFAAQgJgBgCgIg");
	this.shape_145.setTransform(-15.1,-67.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgIBWQgDgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgCgeIgEgvIgKAAQgaAAgOgDQgKgDAAgJQAAgFADgEQAEgEAFABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgagBIgbgBIgJAAQAAAQADAkQADAhAAATIABAMIABANQgBAIgCAFQgDAIgHAAQgDAAgFgDg");
	this.shape_146.setTransform(-29.3,-67.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_147.setTransform(185.6,145.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_148.setTransform(170.7,145.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgzBXQgDgEAAgFQAAgGADgDQADgEAFAAIAagCQABgJAAgMIgBgUIAAgUQAAgaACgoIgOAAIgQABQgFgBgDgDQgDgDAAgFQAAgMALgBIAjgBQAWAAAjAGQAKABAAALQAAAFgDAEQgEACgFAAIgSgBIgTgCQgDAhAAAeIABAVIAAAUIAAAUIAlAAQAEAAAEADQADADAAAFQAAAGgDADQgEAEgEAAIgVAAIgTABIgWACIgYACQgFAAgDgDg");
	this.shape_149.setTransform(155.7,145.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgHBWQgEgDAAgGIAAgFIABgFIgBgRIgBgSQAAgQgDgeIgCgvIgLAAQgaAAgOgDQgKgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgbgBIgbgBIgIAAQAAAQAEAkQACAhAAATIABAMIAAANQABAIgDAFQgDAIgHAAQgDAAgEgDg");
	this.shape_150.setTransform(142,145.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgwBIQgQgSAAgZQAAgmAhgqQAcgjAbAAIAKABIAIABQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCAEQgEAEgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgUAaQgcAjAAAeQAAAPAKALQAKAMAOAAQALAAAMgHQAHgDAOgKQAHgFADAAQAFAAAEADQADAEAAAFQAAAFgEAEQgfAcgfAAQgYAAgRgTg");
	this.shape_151.setTransform(125.8,145.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_152.setTransform(111.2,145.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgvBRQgXgQAAgWQABgOAMAAQALAAAAAOQAAAKAOAKQAOAJALAAQAIAAAFg7QABgbAAgqIAAgNIgHAAIgNAAIgOAAQgFAAgEgEQgDgDAAgGQAAgMAQAAIAMABIALAAIAVgBIAXgBQAbAAAAAOQgBAEgDAEQgDAEgFAAIgHgBIgIgBIgOABIABAOQAABWgMAoQgIAagSAAQgVAAgTgPg");
	this.shape_153.setTransform(95.5,146.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgkBfQgNgEgHgFIgBAAQgFAAgDgEQgEgDAAgFIABglIABglIgBgnIAAgqQAAgEAFgFQAFgGAFAAQADAAAPAIQASAJADAAQAhAMAXAXQAcAcAAAhQAAAUgJASQgKATgQAKQgTANggAAQgJAAgLgCgAgsggIAAAhIgBBAIACABQALAIAQgBQAZABAMgJQAMgHAGgNQAHgOAAgOQAAgggkgXQgLgIgrgTg");
	this.shape_154.setTransform(79.2,145.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAoA9QgDgLgEgaQgMABgTAFIgeAGQgGAPgPAeQgDAGgHAAQgFAAgDgDQgDgDAAgFQgBgGASglQgCgDAAgEQAAgKAMgCQANgYAVghQAagsAHAAQAJAAADAMIAIAoIASBQIAGATQADAJABADQgBAFgDAEQgEADgEAAQgLAAgJgbgAgPAIIArgIIgKgtg");
	this.shape_155.setTransform(61.2,145.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF0000").s().p("AgZBaQgDgEAAgEQAAgEALgWIAOgaQgUgbgHgPQgFgNgMgSIgUgfQgCgDAAgDQAAgGAEgCQADgEAFAAQAGAAAEAFIAJAPIARAZQAIAPAFALQAEALALAPIAbhAIANgZQAEgIAHAAQAFAAAEADQADAEAAAFQAAAFgGALIgHAOIgVAyQgLAbgLAUIgOAbIgFAMQgFAHgGAAQgEAAgFgDg");
	this.shape_156.setTransform(93.4,75);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_157.setTransform(78.8,74.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF0000").s().p("AApA9QgDgLgFgaQgMABgTAFIgfAGQgFAPgPAeQgDAGgGAAQgFAAgEgDQgDgDAAgFQAAgGARglQgCgDAAgEQAAgKAMgCQANgYAUghQAbgsAHAAQAJAAAEAMIAHAoIARBQIAHATQADAJAAADQAAAFgDAEQgEADgFAAQgKAAgIgbgAgOAIIAqgIIgKgtg");
	this.shape_158.setTransform(62.1,75);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF0000").s().p("AgzBXQgDgEAAgFQAAgFADgEQAEgDAEAAIAZgDQACgJAAgMIgBgUIgBgUQAAgaADgoIgOAAIgQAAQgFAAgEgDQgCgEAAgEQgBgLALgCIAkgBQAWABAjAFQALABAAALQgBAGgEADQgDADgFAAIgSgCIgTgDQgDAjAAAdIABAVIAAAUIAAAUIAlAAQAEAAAEADQADAEAAAEQAAAGgDADQgEAEgEAAIgUAAIgUABIgWABIgYACQgEAAgEgCg");
	this.shape_159.setTransform(47,75);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF0000").s().p("AgyBcQgHgFAAgNIACgnQADg0AAhCQAAgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAABCgDA2IgCARIgBASQAfAAAugPIAEAAQAFAAADAEQADADAAAFQAAAHgIAEQgNAGgcAFQgZAFgRAAQgMAAgFgEg");
	this.shape_160.setTransform(34.1,75);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF0000").s().p("AgzBXQgDgEAAgFQAAgFADgEQADgDAFAAIAagDQABgJAAgMIgBgUIAAgUQAAgaACgoIgOAAIgQAAQgFAAgDgDQgDgEAAgEQAAgLALgCIAjgBQAWABAjAFQAKABAAALQAAAGgDADQgEADgFAAIgSgCIgTgDQgDAjAAAdIABAVIAAAUIAAAUIAlAAQAEAAAEADQADAEAAAEQAAAGgDADQgEAEgEAAIgVAAIgTABIgWABIgYACQgFAAgDgCg");
	this.shape_161.setTransform(20.7,75);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF0000").s().p("AA4BaQgJgIgJgOIgPgYIgTgaIgoAuIgVAYQgEAEgFAAQgEAAgEgDQgEgEABgFQAAgEACgEIAVgYIAsgxIgbgjIgNgSQgIgMgIgFQgEgEgBgGQAAgFAEgDQADgEAFAAQAKAAAQAVIAOAUIAYAgIAcglQAagkAHAAQAFAAAEAEQADADAAAFQAAAEgDAEIgYAfIgPAWIgPAUIAZAlQAQAWAMAOQADAEAAAFQgBAEgDAEQgDAEgFAAQgFAAgEgEg");
	this.shape_162.setTransform(5.3,75.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF0000").s().p("Ag0BFQgOgQgEghQgCgPAAgsIABgaQABgLABgEQAEgJAHAAQALAAAAAUIAABFQAABGAwAAQAwAAAAh3IAAgLIgBgKQAAgHADgFQADgHAHAAQALAAAAAQIAAAOIAAAPQAACGhGAAQgjAAgTgVg");
	this.shape_163.setTransform(-12,74.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF0000").s().p("AApA9QgDgLgFgaQgMABgTAFIgfAGQgFAPgOAeQgEAGgGAAQgGAAgDgDQgEgDAAgFQAAgGASglQgCgDAAgEQAAgKALgCQAOgYAUghQAbgsAHAAQAJAAADAMIAIAoIARBQIAHATQAEAJgBADQABAFgEAEQgEADgEAAQgMAAgHgbgAgOAIIApgIIgJgtg");
	this.shape_164.setTransform(-29.9,75);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("Ag2BaQgFgFABgFIAAgiIABgvQADghAAgPIABggQABgGADgCQAQgFAVAAQATAAATAOQAWAQAAAYQAAAegYARQASAHAJAJQAIAJABALQAAAOgQAOQgLAJgLAFQgaAKgpAAQgFAAgEgFgAgkAvIAAAYQAfgBATgIQAIgDAIgHQAGgGAAgDQAAgFgOgHQgMgFgKgDIgMgCIgFAAIgEAAIgOgBIgBAbgAgehFIAAAUIgDAuIASABQAQgBAMgKQAMgKAAgRQAAgLgMgJQgNgKgMAAIgSABg");
	this.shape_165.setTransform(142.1,39.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_166.setTransform(126.7,39.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_167.setTransform(111.7,39.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_168.setTransform(96.8,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{x:96.8,y:39.5}},{t:this.shape_74,p:{x:111.7,y:39.2}},{t:this.shape_73,p:{x:126.7,y:39.2}},{t:this.shape_72,p:{x:142.1,y:39.1}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_75,p:{x:117.1,y:75}},{t:this.shape_74,p:{x:132,y:74.7}},{t:this.shape_73,p:{x:146.9,y:74.7}},{t:this.shape_72,p:{x:162.4,y:74.6}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,-86.7,542.4,285.6);


(lib.MainVerbUnderline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAFADABQAEACAEAAIAHgBQAFgCACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAFgCAGIAOgFQAHgEADgDQgDgDgHAAQgFAAgDAEg");
	this.shape.setTransform(56.2,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgLATQgHgGAAgJQAAgIAGgJQAHgLAHAAQAEAAAFACQAHADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgBIgCgCQgCgCgGAAQgEAAgEAIQgEAIAAAEQAAAGAEADQAEADAEAAIAGgBIAFgDIACgBIADACIABADQAAADgHADQgFADgFAAQgHAAgGgGg");
	this.shape_1.setTransform(51.4,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AALAVIgBgJIgBgKIAAgDIAAgEQAAgKgDAAQgFABgEAFQgEAGgCAGIAAAFIgBAEIABAEIAAAEIgBADIgDACIgEgCIgBgDIAAgEIAAgEIAAgMIABgMIAAgEIAAgEIABgEIADAAQAEAAAAAFIABAFQAHgKAHAAQAHAAADAHQABAEABAIIAAAFIAAACIABAKIAAAJIgBAEIgDABQgEAAAAgFg");
	this.shape_2.setTransform(46.8,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAFADABQAEACAEAAIAHgBQAFgCACgCQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAFgCAGIAOgFQAHgEADgDQgDgDgHAAQgFAAgDAEg");
	this.shape_3.setTransform(41.9,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgCAfQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgFIAAgFIgBgZIgJAAQgFgBAAgEIABgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAJABIAAgGIAAgGIABgDQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQADAAABAGIAAAEIAAADIAAADIAFgBIAGAAQADABAAADQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgDABIgCAAIgDAAIgFAAIABAZIAAACIAAACQAAAKgFAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_4.setTransform(37.3,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AALAVIgBgJIgBgKIAAgDIAAgEQAAgKgDAAQgFABgEAFQgEAGgCAGIAAAFIgBAEIABAEIAAAEIgBADIgDACIgEgCIgBgDIAAgEIAAgEIAAgMIABgMIAAgEIAAgEIABgEIADAAQAEAAAAAFIABAFQAHgKAHAAQAHAAADAHQABAEABAIIAAAFIAAACIABAKIAAAJIgBAEIgDABQgEAAAAgFg");
	this.shape_5.setTransform(32.9,15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAFADABQAEACAEAAIAHgBQAFgCACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAFgCAGIAOgFQAHgEADgDQgDgDgHAAQgFAAgDAEg");
	this.shape_6.setTransform(28,15.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgMAYQgGgCAAgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACIAFACIAFABIAFgBQAEgCAAgCQAAgGgIgCIgEgCIgIgCQgDgCAAgFQAAgJAIgEIAIgDIAIgDIADAAIAEABIABADIABAEIAAADIgBAEIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgEIgKADQgGACAAAFIACAAQAKACAFADQAHAEAAAJQAAAHgHADQgEADgHAAQgGAAgGgCg");
	this.shape_7.setTransform(23.2,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAFADABQAEACAEAAIAHgBQAFgCACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAFgCAGIAOgFQAHgEADgDQgDgDgHAAQgFAAgDAEg");
	this.shape_8.setTransform(16,15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAMAiIgCgLIgBgLIABgDIAAgDQAAgIgFABQgFAAgEADIgGAKQAAARgCADQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBgEIABgBIAAgGIAAgHIAAggIABgHIgBgEIAAgEQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQADgBAAAEIABAIIAAAKIAAAJIAAAFQADgFAEgDQAEgDAEABQAIAAACAEQACAEABAHIAAAIIABAJIABAJIABACQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgDABQgDAAgBgCg");
	this.shape_9.setTransform(10.9,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgCAfQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgFIAAgFIgBgZIgJAAQgFgBAAgEIABgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAJABIAAgGIAAgGIABgDQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQADAAABAGIAAAEIAAADIAAADIAFgBIAHAAQACABAAADQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgDABIgCAAIgDAAIgFAAIABAZIAAACIAAACQAAAKgFAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_10.setTransform(6.1,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgHAmIAAgDIAAgBIAAgNIAAgMIAAgLIgHAAQgEAAAAgEQAAgFAIAAIADAAIABgHQABgJAFgFQADgGAJAAQAHAAAAAFQAAAEgGAAQgKAAgCAPIAAACIAKAAQAHAAAAAEQAAAEgEAAIgDAAIgKABIAAAJIAAAIIAAAIIgBANQAAAEgEAAIgDgBg");
	this.shape_11.setTransform(-1,14.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgMASQgGgFgBgLQABgJAEgHQAHgJAKAAQAJAAAEAIQADAGABAJQAAAJgGAIQgFAHgJAAQgHAAgFgGgAgHgIQgDAFAAAFQAAAHAEADQADADADAAQAEAAADgDQAEgEABgGQAAgQgKAAQgFAAgEAGg");
	this.shape_12.setTransform(-5.7,15.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgUAiIgBgEIAAgMIAAgSIABgSIABgMIABgCQAGgCAIAAQAHAAAHAEQAIAHAAAJQAAALgJAGQAHADADADQADADAAAEQAAAFgFAGQgEADgFABQgJAEgPABIgEgCgAgNASIAAAJQAMgBAGgDIAGgDQAAgBABAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgCgGgCIgIgDIgEgBIgCAAIgBAAIgFgBIgBALgAgLgRIgBAQIAHABQAGAAAEgEQAEgEAAgGQAAgEgEgEQgFgEgEABIgHAAg");
	this.shape_13.setTransform(-13.3,14.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgVAiIgBgEIgBgLIAAgKIABgKIABgMIgBgHIAAgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABgBAAAAIALABQAGABAEADQARAIAAAOQAAAHgGAEQgFAEgHACQANAIAHAIIABADQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgDgCQgOgPgRgEIAAAJIAAAIIgBAEIgEAAIgCAAgAgNgTIAAAGIAAAIIgBAIIACAAIABAAQALAAAFgDIAFgCQABgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgGgIgFQgFgFgHgBIgGAAg");
	this.shape_14.setTransform(-19,14.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgSAiQgFgEAAgOIABgHIAAgHIgBgCIABgBIABgTIAAgFIgBgFQAAgFAFAAIADABIAKgCIAIAAQAKAAAHACQAAAAABABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgBgBQgIgCgGAAIgHABIgJACIAAAFIgBARIASgDIALAAIADABIABAEQAAACgEABIgKABIgTACIgBAFIAAAGQAAAKACABQABABAFAAIAIAAIAIAAIADAAIACgBQAFABAAAEQAAAEgEAAQgEABgNAAQgOAAgDgDg");
	this.shape_15.setTransform(-24.6,14.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgHAgQgGgOgGgXIgEgNIgCgLQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQACAAABAEIACAIIAFAOIAIAbIAAAAIALgfIADgLQADgGADgDQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIgBADQgDAEgCAEIgDAKIgLAfIgGALQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgEABgBgEg");
	this.shape_16.setTransform(-30.1,14.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AALAVIgBgJIgBgKIAAgDIAAgEQAAgKgDAAQgFABgEAFQgEAGgCAGIAAAFIgBAEIABAEIAAAEIgBADIgDACIgEgCIgBgDIAAgEIAAgEIAAgMIABgMIAAgEIAAgEIABgEIADAAQAEAAAAAFIABAFQAHgKAHAAQAHAAADAHQABAEABAIIAAAFIAAACIABAKIAAAJIgBAEIgDABQgEAAAAgFg");
	this.shape_17.setTransform(-38.3,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgDAgQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgIIAAgIIABgKIAAgKQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBIACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAKIAAAKIAAAIIAAAIQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCABIgDgBgAgCgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_18.setTransform(-41.9,14.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_19.setTransform(-45.5,15.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AAbAhIgDgHIgBgIQgCgGgEgXIgJAZIgCAJIgDAIQgCADgDAAQgCAAgBgDIgCgFIgCgEIgHggIgCAHIgFAWIgCANQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgBgEQAAgHADgLIAEgQIADgPQACgJACgDQABgDAEAAQACAAABAEQACAEACAMQACAOAFAPQAGgPAFgTIABgGIACgGQACgEADAAQADAAACAIIACAKQADATADAOIADAIIABAHQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_20.setTransform(-51.7,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(2,1,1).p("AguAAIBdAA");
	this.shape_21.setTransform(-54.9,5.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(2,1,1).p("AhGAAICNAA");
	this.shape_22.setTransform(-52.5,5.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(2,1,1).p("AhdAAIC8AA");
	this.shape_23.setTransform(-50.1,5.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(2,1,1).p("Ah1AAIDrAA");
	this.shape_24.setTransform(-47.8,5.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(2,1,1).p("AiNAAIEbAA");
	this.shape_25.setTransform(-45.4,5.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(2,1,1).p("AikAAIFJAA");
	this.shape_26.setTransform(-43.1,5.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(2,1,1).p("Ai8AAIF5AA");
	this.shape_27.setTransform(-40.7,5.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(2,1,1).p("AjTAAIGnAA");
	this.shape_28.setTransform(-38.4,5.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(2,1,1).p("AjrAAIHXAA");
	this.shape_29.setTransform(-36,5.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(2,1,1).p("AkDAAIIHAA");
	this.shape_30.setTransform(-33.6,5.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(2,1,1).p("AkaAAII1AA");
	this.shape_31.setTransform(-31.3,5.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(2,1,1).p("AkyAAIJlAA");
	this.shape_32.setTransform(-28.9,5.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(2,1,1).p("AlJAAIKTAA");
	this.shape_33.setTransform(-26.6,5.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(2,1,1).p("AlhAAILDAA");
	this.shape_34.setTransform(-24.2,5.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(2,1,1).p("Al4AAILxAA");
	this.shape_35.setTransform(-21.9,5.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(2,1,1).p("AmQAAIMhAA");
	this.shape_36.setTransform(-19.5,5.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(2,1,1).p("AmoAAINRAA");
	this.shape_37.setTransform(-17.1,5.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(2,1,1).p("Am/AAIN/AA");
	this.shape_38.setTransform(-14.8,5.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(2,1,1).p("AnXAAIOvAA");
	this.shape_39.setTransform(-12.4,5.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(2,1,1).p("AnuAAIPdAA");
	this.shape_40.setTransform(-10.1,5.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(2,1,1).p("AoGAAIQNAA");
	this.shape_41.setTransform(-7.7,5.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(2,1,1).p("AodAAIQ7AA");
	this.shape_42.setTransform(-5.4,5.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(2,1,1).p("Ao1AAIRrAA");
	this.shape_43.setTransform(-3,5.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0000").ss(2,1,1).p("ApNAAISbAA");
	this.shape_44.setTransform(-0.6,5.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0000").ss(2,1,1).p("ApkAAITJAA");
	this.shape_45.setTransform(1.7,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,4.1,121.3,18.4);


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


(lib.WhiteSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggOAQLMAAAggVMBAaAAAIAAP3IADAAIAADcIgDAAIAANCg");
	this.shape.setTransform(206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteSheet, new cjs.Rectangle(0,0,412.6,207), null);


(lib.anim_bub_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(66.7,70.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhYAbQgCgKABgJQAlgYAJAbQgRAVgPAAQgHAAgGgFgABIgfQAhAIgaAbQgJAJgLABQgIgcAVgRg");
	this.shape_1.setTransform(51.2,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGBSQAcgOAHgcQAJAYgLAZQgHAOgHAAQgJAAgKgVgAhzgXIgBgEQAUAPAZgfQgJgcgkAZQACgOAKgLQARgSAhAFQAhAFgDAXQAAAKgBAKQgOAAgPAHQgUAIADAJIgcABQgOAAgCgMgAAggmIgBgCQALgBAJgJQAagcghgIQAGgIAJgGIALgCIAAAeQAPgOARgFIAMgCIABAAQAHARgOAUQgQAWgeAJIgLABQgOAAgFgOg");
	this.shape_2.setTransform(54,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#986631").s().p("AjGAvQALgLAOgHIgfgWQAdgKAoADQAbAEAAgVQAAgQgIgPQgIgTgEgRQAvAFAqAgQAKAGAHALQAfg1BAgIQAMgCANAAQgeAbgYAhQA/gVBFANQAOACAOAAQgfAPghAOQArgBAlAUIAPAIQgjAFgngCIgDAAIgHAAIAHAAQANACAGAMQABADgBAIIgGACQgJgIgGgBQgUgCgSgEIgCAAQgPgDgMABIgBAAIgNACQgQAFgPAOIAAgeIgLADIgSAFIhEAYQAMgXAMgUIgbAEQgeAGgXATQgZAKgcAQQAHgEABgJIgJANQgcAKgZALIgSAIQAKgXAagYgAB2AgQASAEAUACQAGABAJAIQgUALgPAXQgGAAgHAIQABgdgGgcgAB2AgIAAAAg");
	this.shape_3.setTransform(56.7,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("Ai7DVIgGgCQgUgIgOgUQAQgJAOgOQAUgUASgYQAQgWANgaQAMgaAHgcQACgKABgKIAAgLIAAgJQAAgGgEgDQgBgdgOgWQgHgLgKgIQAYAEAbgDIA5gIQAdgEAagKQAZgJAcgHQAbgHAagMQAbgNAWgPQAWgPAggLQgCARABASIAAAOQgBAVgKASIgGAJIgXAgIgKANIAKgNIAXggIAGgJQAKgSABgVQAAAWgCAWQgDAbgJAbQgJAagKAVIgGASIgDAHIgLAaQgIATgNAQIgLANQgVAUgXATQgWASgbAMIgzAXQgaAMgbAJQgcAJgcAHQgbAGgdACIgFABQgIAAgHgDgADjimIAAAAg");
	this.shape_4.setTransform(86.8,92.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC97").s().p("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");
	this.shape_5.setTransform(66.7,75.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.anim_bub_run, new cjs.Rectangle(-1,-1,135.6,142.8), null);


(lib.ParticipleAuxLessonDiagrams = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.MainVerbUnderline("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153.3,-14.5,0.926,0.926);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(138).to({_off:false},0).to({_off:true},162).wait(4).to({_off:false,scaleX:0.93,scaleY:0.93,x:225.3,y:-18.9},0).wait(113));

	// Layer 2
	this.instance_1 = new lib.ParticipleAuxDef();
	this.instance_1.parent = this;
	this.instance_1.setTransform(204.1,105.6,0.709,0.709,0,0,0,233.8,54.2);

	this.instance_2 = new lib.BubisDashin();
	this.instance_2.parent = this;
	this.instance_2.setTransform(207.4,-24.8,1.105,1.105,0,0,0,119.1,17.3);

	this.instance_3 = new lib.TheDashinBub();
	this.instance_3.parent = this;
	this.instance_3.setTransform(205.9,-26.5,1.111,1.111,0,0,0,143.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},118).to({state:[{t:this.instance_1}]},8).to({state:[]},1).to({state:[{t:this.instance_2}]},11).to({state:[]},162).to({state:[{t:this.instance_3}]},4).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(118).to({alpha:0},8).to({_off:true},1).wait(290));

	// Layer 1
	this.instance_4 = new lib.WhiteSheet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(204.3,103.5,1,1,0,0,0,206.3,103.5);
	this.instance_4.alpha = 0.84;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcBNQgDgIgCgPIgBgYIAAgJIAAgIQAAgSgJAAQgNAAgKAKQgFAHgJARQAAAngDAHQgDAGgGABQgFAAgDgEQgDgDAAgDIABgFIABgPIAAgPIABhLIABgQIgBgLIgBgKQAAgDADgDQADgEAEAAQAIAAACAKIABARIAAAXIgBAWIAAAJQAJgLAJgFQAJgGALAAQARAAAGAMQAEAHABASIABATIACAVIADAWIABACQAAAEgDAEQgDACgFAAQgHABgCgJg");
	this.shape.setTransform(304.6,112.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAtQgOgNAAgWQAAgUANgWQAQgZASAAQAKAAAMAFQAQAGAAAJQAAAEgCADQgDADgEAAQgDAAgCgCIgEgEQgGgEgOAAQgJAAgLASQgJARAAAMQAAANAJAIQAJAHAMAAQAHAAAGgDIAMgGIAFgCQAEAAACADQADADAAAEQAAAIgQAHQgOAGgJAAQgUAAgOgNg");
	this.shape_1.setTransform(293,115.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXAxQgNAHgPAAQgOAAgJgGQgJgHgCgMQgEgbAAgVQAAgOADgSQABgJAJAAQAEAAADADQADADAAAEIgCAQIgBAPIABAdQABAMACAHIAHADIAHABQANAAAOgEIAAgVIAAgTQAAgWACgRQABgJAJAAQAEAAADADQADADAAAEIgCAnIAAAVIAAAWIABAHIAAAHQAAAEgDADQgCADgFAAQgIAAgCgKg");
	this.shape_2.setTransform(282.2,115.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAsQgOgPAAgXQgBgXAMgRQAPgVAYAAQAVAAALATQAIAPAAAVQgBAWgLAQQgNASgVAAQgRAAgNgMgAgRgUQgHAMAAAOQAAAOAIAJQAHAHAJAAQAKAAAHgIQAJgJABgOQABgngXAAQgOAAgIAOg");
	this.shape_3.setTransform(270.9,115.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAtQgOgNAAgWQAAgUANgWQAQgZASAAQAKAAAMAFQAQAGAAAJQAAAEgCADQgDADgEAAQgDAAgCgCIgEgEQgGgEgOAAQgJAAgLASQgJARAAAMQAAANAJAIQAJAHAMAAQAHAAAGgDIAMgGIAFgCQAEAAACADQADADAAAEQAAAIgQAHQgOAGgJAAQgUAAgOgNg");
	this.shape_4.setTransform(260.3,115.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAwQgOgKgIgNQgLgUADgRQADgVAUgLQAXgNAVACQAYACAMAVQAIAOABANQAAAOgNAHQgJAFgMgGQgGgCgPgLIgjgYQgEAKAAAJQABAJAFAKQAEAGAHAGQAJAJAGABQAGAAACADQABAEAAAEQgBADgDACQgDACgEAAQgIAAgKgIgAgSghIAcAUQARAMAKADQADgMgIgNQgGgLgNgCIgIgBQgJAAgOAEg");
	this.shape_5.setTransform(299.7,159.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggBQQgEgCgCgEQgDgGAFgFQAGgHANgJIATgOIAHgEIAHgEQARgJgFgJQgGgKgQgDQgGgBgUAAQghATgJAAQgHABgDgFQgCgEABgEQABgDAEgCIAEgCIAOgGIANgHIBBgmIAOgIIAIgGIAIgFQAEgDAEACQAEABADAEQAEAHgIAGQgHAGgHAEIgUALIgUALIgIAEQAOABAKAGQAJAGAGAJQAIAOgGALQgEAIgQAKIgQAKIgRAMQgKAHgHAHIgCACIgFABIgDAAg");
	this.shape_6.setTransform(294.5,147.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag/AsQgCgEABgEQABgEADgCIAKgFIALgGIAygfIgKgVQgDgIAHgEQAEgCAEAAQAEABACAEIAJATIAMgHIALgHQADgCAEABQAEACACADQAFAIgMAJIgIAFIgFADIgGADIAJALIAGAMQABAHgGADQgEADgEgBQgEgBgCgEIgCgFIgDgEIgIgLIgzAfIgDADIgFACQgLAHgGAAQgFAAgDgEg");
	this.shape_7.setTransform(289.5,137.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAvQgWgCgLgTQgJgPAFgQQAFgTAVgMQAUgMAUABQAZADANAWQAKASgLARQgJAPgTAKQgQAKgPAAIgHgBgAgRgTQgNAIgDALQgDAIAFAIQAFAJALADQAMADALgHQAkgSgMgTQgHgNgRAAQgMAAgNAHg");
	this.shape_8.setTransform(228.1,107.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag/AsQgCgEABgEQABgEADgCIAKgFIALgGIAygfIgKgVQgDgIAHgEQAEgCAEAAQAEABACAEIAJATIAMgHIALgHQADgCAEABQAEACACADQAFAIgMAJIgIAFIgFADIgGADIAJALIAGAMQABAHgGADQgEADgEgBQgEgBgCgEIgCgFIgDgEIgIgLIgzAfIgDADIgFACQgLAHgGAAQgFAAgDgEg");
	this.shape_9.setTransform(224.4,97.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjBQQgNgDAAgIQAAgJAJAAIAMACQAJACAKgBQATAAAIgTQAFgMAAgaQgGAKgHAFQgIAFgJAAQgSAAgMgMQgMgOAAgSQAAgcAQgRQARgSAbAAQAKABAGACQAGADAEAEQALABAAALQAAAIgCAMIgDAUIgCAhQgBAVgEAMQgEARgKAIQgNAJgWAAQgOAAgJgBgAgSgzQgKANAAASQAAAPAGAGQAGAIALAAQAJAAAKgKQAJgLABgLIAFgjQgEgDgFgCQgEgBgFAAQgTAAgKANg");
	this.shape_10.setTransform(273.9,70.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAZAyIgDgXIgBgWIAAgJIABgKQAAgWgJAAQgLAAgKAOQgJAMgFASIgBAKIgBAKIABAKIAAAJQAAAEgCADQgDADgFAAQgEAAgDgDQgDgDAAgEIAAgJIgBgKIACgcIABgdIAAgKIgBgKQAAgEADgDQADgDAEAAQAKAAABAOIAAAMQARgXARAAQARAAAGAOQAFAKAAATIAAAKIAAAIQAAAJACAOQACANAAAIQAAAFgCADQgDADgFAAQgJAAgBgKg");
	this.shape_11.setTransform(263.2,67.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJBKQgDgDAAgEIAAgSIgBgTIABgYIABgXQAAgFADgDQADgDAEAAQAEAAACADQADADAAAFIgBAXIgBAYIABATIAAASQAAAEgDADQgDADgDAAQgFAAgCgDgAgGg4QgEgDAAgFQAAgFAEgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDAEgFgBQgEABgEgEg");
	this.shape_12.setTransform(254.8,65.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAcBOQgDgJgCgQIgBgXIAAgJIAAgIQAAgSgJAAQgNAAgKAKQgFAGgJASQAAAmgDAIQgDAHgGgBQgFAAgDgDQgDgCAAgFIABgEIABgPIAAgPIABhLIABgRIgBgKIgBgKQAAgEADgDQADgCAEAAQAIAAACAJIABASIAAAWIgBAXIAAAJQAJgMAJgFQAJgGALAAQARAAAGAMQAEAHABASIABATIACAVIADAVIABAEQAAADgDAEQgDADgFAAQgHAAgCgIg");
	this.shape_13.setTransform(245.7,65.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcA5QgQgGAAgKQAAgEAEgDQADgDAEAAQADAAAFAFQADACAIACIAMABQAHAAAHgCQAKgDAAgGQAAgOgUgFIgKgDQgNgCgGgEQgIgGAAgLQAAgVAUgKQAGgDANgDQANgEAGgDQAEgBAFAAQAFAAACACQADADAAAFIACAJIABAIQAAAFgDADQgDADgEAAQgGgBgCgDQgCgDgBgJIgYAIQgPAHAAAJIAGACQAWAEAMAHQARAKAAAVQAAAQgPAJQgMAGgRAAQgOABgMgFg");
	this.shape_14.setTransform(234.1,67.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAhA0IgHgHIgSAIQgHACgEABQgYAAgLgOQgKgNAAgaQAAgYARgSQARgRAWAAQAKAAAKAFQAOAGAAAHQABADgCADIgCAMIgBAWQAAAMACAIIAGASIADAGIABACQAAADgEADQgDADgDAAQgCAAgFgFgAgRgZQgLANAAAQQAAARAGAIQAGAJAMAAQAIgBAIgDIAKgIQgEgaAAgOIABgJIACgLIgGgDIgFgBQgPAAgMANg");
	this.shape_15.setTransform(223.9,68.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkBGQgOgOAAgXQAAgcAOgPQAPgQAWAAQAMgBAGAEIAKAIQABgsACgPQACgJAIAAQAJAAAAAKQAAAPgEAwIgBAdQAAAiADASIAAACQAAAEgDADQgDACgDAAQgHAAgDgJQgHAGgIADQgIACgIAAQgVAAgOgOgAgXACQgJAKAAAUQAAAOAJAKQAKAJAMAAQAIAAAGgDQADgCAIgHIADgDIAAgSIAAgMIAAgMQgEgIgGgDQgHgEgJAAQgQAAgIAJg");
	this.shape_16.setTransform(212.3,65.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcA5QgQgGAAgKQAAgEAEgDQADgDAEAAQADAAAFAFQADACAIACIAMABQAHAAAHgCQAKgDAAgGQAAgOgUgFIgKgDQgNgCgGgEQgIgGAAgLQAAgVAUgKQAGgDANgDQANgEAGgDQAEgBAFAAQAFAAACACQADADAAAFIACAJIABAIQAAAFgDADQgDADgEAAQgGgBgCgDQgCgDgBgJIgYAIQgPAHAAAJIAGACQAWAEAMAHQARAKAAAVQAAAQgPAJQgMAGgRAAQgOABgMgFg");
	this.shape_17.setTransform(194.5,67.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJBKQgDgDAAgEIAAgSIgBgTIABgYIABgXQAAgFADgDQADgDAEAAQAEAAACADQADADAAAFIgBAXIgBAYIABATIAAASQAAAEgDADQgDADgDAAQgFAAgCgDgAgGg4QgEgDAAgFQAAgFAEgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDAEgFgBQgEABgEgEg");
	this.shape_18.setTransform(186.9,65.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeBMQgEAGgFgBQgDAAgDgCQgCgDAAgEIAAgIIAAgIIAAggIgBggIAAgcIAAgcQAAgHACgFQAEgGAGAAQAHAAAAAJIAAAEIgBAFIAAAWIAAAaQAJgGAIgDQAIgDAGAAQAWAAAOARQANAPAAAXQgBAXgPAQQgPARgVAAQgQAAgMgHgAgPgEIgPAJIAAASIAAAQIAAAQIAOAHQAGABAIAAQAOAAAKgKQAJgKAAgQQAAgPgIgLQgIgKgOAAQgIAAgIAFg");
	this.shape_19.setTransform(80,65.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAXAxQgNAHgQAAQgNAAgIgGQgLgHgCgMQgDgbAAgVQgBgOAEgSQABgJAIAAQAFAAADADQADADAAAEIgCAQIgBAPIABAdQABAMADAHIAGADIAGABQANAAAPgEIAAgVIAAgTQAAgWACgRQABgJAJAAQAEAAADADQAEADAAAEIgDAnIAAAVIAAAWIABAHIABAHQgBAEgDADQgDADgEAAQgIAAgCgKg");
	this.shape_20.setTransform(68.2,68);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgvBPQgEgFAAgEIAAgeIACgpIACgqIABgcQABgFACgCQAOgEASAAQARAAARAMQATAOAAAVQAAAbgVANQAQAIAIAIQAHAHAAAKQAAAMgNALQgKAJgKAEQgWAJgkAAQgEAAgEgEgAgfAoIAAAWQAbgBAQgGQAHgEAHgFQAGgGAAgCQAAgFgNgGQgKgFgJgCIgKgCIgEABIgEAAIgMgCIgBAXgAgbg8IAAASIgCAnIAQABQAOgBAKgJQALgJAAgOQAAgJgLgJQgLgIgLAAIgQABg");
	this.shape_21.setTransform(56.5,65.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAXAxQgNAHgPAAQgOAAgJgGQgKgHgBgMQgFgbAAgVQAAgOAEgSQABgJAJAAQAEAAADADQADADAAAEIgBAQIgCAPIABAdQABAMACAHIAHADIAHABQANAAAPgEIAAgVIgBgTQAAgWACgRQACgJAIAAQAFAAADADQACADAAAEIgCAnIAAAVIAAAWIABAHIAAAHQAAAEgCADQgDADgFAAQgIAAgCgKg");
	this.shape_22.setTransform(296.8,115.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAhA0IgHgHIgSAIQgHACgEABQgYAAgLgOQgLgNABgaQAAgYARgSQARgRAWAAQAKAAAKAFQAOAGABAHQAAADgCADIgCAMIgBAWQAAAMACAIIAGASIADAGIABACQgBADgDADQgDADgDAAQgCAAgFgFgAgRgZQgLANAAAQQAAARAGAIQAGAJALAAQAKgBAGgDIALgIQgDgagBgOIABgJIACgLIgGgDIgFgBQgPAAgMANg");
	this.shape_23.setTransform(238.6,68.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgfBNQgCAEgGAAQgEABgCgDQgDgDAAgEIAAgIIABgIIgBggIgBggIABgcIAAgcQAAgHADgEQADgHAGAAQAIAAgBAJIAAAEIgBAFIAAAWIAAAaQAJgGAIgDQAIgDAGAAQAWAAAOARQAMAOAAAYQABAXgPAQQgQARgVAAQgPAAgOgGgAgPgEIgPAJIAAASIAAAQIAAAQIAOAHQAGABAIAAQAOAAAJgKQAKgKAAgQQAAgQgIgKQgIgKgOAAQgHAAgJAFg");
	this.shape_24.setTransform(78.5,66.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAXAxQgNAHgQAAQgNAAgIgGQgLgHgBgMQgFgbAAgVQABgOADgSQABgJAJAAQAEAAADADQADADAAAEIgBAQIgCAPIABAdQABAMADAHIAGADIAGABQANAAAQgEIAAgVIgBgTQAAgWACgRQACgJAIAAQAEAAAEADQACADAAAEIgBAnIAAAVIAAAWIAAAHIABAHQAAAEgDADQgDADgFAAQgIAAgCgKg");
	this.shape_25.setTransform(66.7,69);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgvBPQgEgEAAgFIAAgeIACgpIACgqIABgcQABgFACgCQAOgEASAAQARAAARAMQATAPAAAUQAAAagVAOQAQAHAIAJQAHAHAAAKQAAAMgNALQgKAJgKAEQgWAJgkAAQgEAAgEgEgAgfAoIAAAWQAbgBAQgGQAHgEAHgFQAGgGAAgCQAAgFgNgGQgKgFgJgCIgKgCIgEABIgEAAIgMgBIgBAWgAgbg8IAAASIgCAnIAQABQAOgBAKgJQALgIAAgPQAAgKgLgIQgLgIgLAAIgQABg");
	this.shape_26.setTransform(55,66.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},118).to({state:[{t:this.instance_4}]},8).to({state:[]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:186.9}},{t:this.shape_17,p:{x:194.5}},{t:this.shape_16,p:{x:212.3}},{t:this.shape_15},{t:this.shape_14,p:{x:234.1}},{t:this.shape_13,p:{x:245.7}},{t:this.shape_12,p:{x:254.8}},{t:this.shape_11,p:{x:263.2}},{t:this.shape_10,p:{x:273.9}},{t:this.shape_9,p:{x:224.4}},{t:this.shape_8,p:{x:228.1}},{t:this.shape_7,p:{x:289.5}},{t:this.shape_6,p:{x:294.5}},{t:this.shape_5,p:{x:299.7}},{t:this.shape_4,p:{x:260.3}},{t:this.shape_3,p:{x:270.9}},{t:this.shape_2},{t:this.shape_1,p:{x:293}},{t:this.shape,p:{x:304.6}}]},115).to({state:[]},58).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_18,p:{x:201.6}},{t:this.shape_17,p:{x:209.1}},{t:this.shape_16,p:{x:226.9}},{t:this.shape_23},{t:this.shape_14,p:{x:248.7}},{t:this.shape_13,p:{x:260.3}},{t:this.shape_12,p:{x:269.4}},{t:this.shape_11,p:{x:277.9}},{t:this.shape_10,p:{x:288.6}},{t:this.shape_9,p:{x:239}},{t:this.shape_8,p:{x:242.8}},{t:this.shape_7,p:{x:303.4}},{t:this.shape_6,p:{x:308.3}},{t:this.shape_5,p:{x:313.6}},{t:this.shape_4,p:{x:274.9}},{t:this.shape_3,p:{x:285.6}},{t:this.shape_22},{t:this.shape_1,p:{x:307.7}},{t:this.shape,p:{x:319.2}}]},55).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(118).to({alpha:0},8).to({_off:true},1).wait(290));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_179 = new cjs.Graphics().p("AhHAAQAAgYAQgUQAUgbAjAAQBEAAAEBIQAAAXgRAWQgVAagiAAQhFAAgChIg");
	var mask_graphics_180 = new cjs.Graphics().p("AAAAhIgIANQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAPAnIAIgMQAUgbAkAAQBFAAADBIQAAAYgQAVQgVAagjAAQgzAAgOgng");
	var mask_graphics_181 = new cjs.Graphics().p("ABDAlIgCgHQgDAIgGAIQgVAagjAAQgyAAgPgnIgIANQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAjAAQAzAAAOAnIAJgMQAUgbAjAAQBFAAAEBIQAAAYgRAVQgUAagkAAQgrAAgTgjg");
	var mask_graphics_182 = new cjs.Graphics().p("ACDAoIgDgIIgIALQgUAagkAAQgrABgTgkIgCgGQgCAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAANAnIAJgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQBCAAAHBIQAAAXgSAXQgVAagiAAQgtgBgSgig");
	var mask_graphics_183 = new cjs.Graphics().p("AA+AoIgDgIIgIALQgVAagiAAQgsABgSgkIgCgGQgEAIgFAHQgVAagjAAQg0AAgPgmIgIAMQgVAagiAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAPAmIAIgMQAVgaAkgBQAyAAAPAnIAJgMQAUgaAjgBQAzAAAPAqIAGgKQAVgbAkAAQA4AAANAzQADgPALgOQATgaAlgBQBCAAAGBJQAAAXgRAVQgVAagiAAQgtABgRgkIgGgUQgDASgNARQgVAagiAAQgtgBgSgig");
	var mask_graphics_184 = new cjs.Graphics().p("AEPAoQgFgLgDgLQgEANgJAMQgVAagjAAQgsABgRgkIgGgUQgDASgOARQgUAagjAAQgsgBgRgiIgEgIIgHALQgVAagjAAQgsABgSgkIgDgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagiAAQhGAAgChHQgBgZARgUQATgaAlgBQAxABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAkgBQAzAAAPAqIAHgKQAUgbAjAAQA4AAAOAzQADgPAKgOQAUgaAkgBQA7AAALA5QAEgNAKgMQAUgbAkAAQArAAATAjQAJASABATQAAAYgRAWQgUAagjAAQgsgBgTgig");
	var mask_graphics_185 = new cjs.Graphics().p("AFQAoIgDgHQgDAIgGAIQgUAagjAAQgsgBgTgiQgFgLgDgLQgEANgJAMQgVAagjAAQgsABgRgkIgGgUQgDASgOARQgUAagiAAQgsgBgSgiIgEgIIgHALQgVAagjAAQgsABgSgkIgDgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagiAAQhGAAgChHQgBgZARgUQATgaAlgBQAxABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAkgBQAzAAAPAqIAHgKQAVgbAjAAQA3AAAOAzQADgPAKgOQAUgaAkgBQA7AAALA5QAEgNAKgMQAUgbAkAAQArAAATAjIACAGQAEgHAFgHQAVgbAjAAQBEAAAEBIQABAYgSAWQgUAagjAAQgrgBgTgig");
	var mask_graphics_186 = new cjs.Graphics().p("AElAoIgDgHQgDAIgGAIQgUAagjAAQgsgBgTgiQgFgLgDgLQgEANgJAMQgVAagjAAQgsABgRgkIgGgUQgDASgOARQgTAagjAAQgsgBgSgiIgEgIIgHALQgVAagjAAQgsABgSgkIgDgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagiAAQhGAAgChHQgBgZARgUQATgaAlgBQAxABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAkgBQAzAAAPAqIAHgKQAVgbAjAAQA3AAAOAzQADgPAKgOQAUgaAkgBQA7AAALA5QAEgNAKgMQAUgbAkAAQArAAATAjIACAGQAEgHAFgHQAVgbAjAAQAaAAAQAKQASgPAbAAQBEAAAEBJQgBAXgQAVQgTAagkAAQgZABgQgLQgSAQgcAAQgrgBgTgig");
	var mask_graphics_187 = new cjs.Graphics().p("ADJAoIgDgHQgEAIgFAIQgUAagkAAQgrgBgTgiQgFgLgDgLQgEANgKAMQgUAagiAAQgsABgSgkIgFgUQgDASgOARQgVAagiAAQgtgBgSgiIgDgIIgIALQgUAagkAAQgrABgTgkIgCgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAAOAnIAJgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgPAKgOQATgaAlgBQA6AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAZAAARAKQASgPAaAAQBCAAAGBEIAYgBQAAgEADgBQADgPATgOQAdgXAuABIAGAAQA1AAACBCQAAArgjAMQgOAFgvAAQgnAAgOgWQgFgIgDgPIgegBQgEAOgKAMQgUAagkAAQgYABgQgLQgTAQgbAAQgsgBgSgig");
	var mask_graphics_188 = new cjs.Graphics().p("ACHAoIgDgHQgEAIgFAIQgUAagkAAQgsgBgSgiQgFgLgCgLQgEANgKAMQgVAagiAAQgtABgRgkIgGgUQgDASgNARQgVAagiAAQgtgBgSgiIgDgIIgIALQgVAagjAAQgsABgSgkIgCgGQgEAIgFAHQgVAagjAAQg0AAgPgmIgIAMQgVAagiAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAPAmIAIgMQAVgaAkgBQAyAAAPAnIAJgMQAUgaAjgBQA0AAAPAqIAGgKQAVgbAkAAQA4AAANAzQADgPALgOQATgaAlgBQA6AAAMA5QADgNAJgMQAVgbAjAAQArAAATAjIADAGQAEgHAFgHQAUgbAkAAQAZAAAQAKQASgPAbAAQBCAAAGBEIAYgBQAAgEADgBQADgPATgOQAdgXAtABIAHAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQBEAAAEBJQAAAXgQAVQgUAagkAAQgsABgSgkIgCgHQgIAXgXAIQgPAFguAAQgnAAgOgWQgGgIgCgPIgfgBQgEAOgJAMQgUAagkAAQgYABgQgLQgTAQgbAAQgsgBgSgig");
	var mask_graphics_189 = new cjs.Graphics().p("ABGAoIgDgHQgEAIgFAIQgUAagkAAQgrgBgSgiQgGgLgCgLQgEANgKAMQgVAagiAAQgtABgRgkIgGgUQgDASgNARQgVAagiAAQgtgBgSgiIgDgIIgIALQgVAagjAAQgsABgSgkIgCgGQgEAIgFAHQgVAagjAAQg0AAgPgmIgIAMQgVAagiAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAPAmIAIgMQAVgaAkgBQAyAAAPAnIAJgMQAUgaAjgBQA0AAAPAqIAGgKQAVgbAkAAQA4AAANAzQADgPALgOQATgaAlgBQA6AAAMA5QAEgNAJgMQAVgbAiAAQArAAATAjIADAGQAEgHAFgHQAUgbAkAAQAZAAAQAKQASgPAbAAQBCAAAGBEIAYgBQAAgEADgBQADgPATgOQAdgXAtABIAHAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQAyAAAQAoIAIgNQAVgaAjgBQBDAAAFBJQAAAXgRAVQgUAagjAAQgsABgTgkIgBgGQgEAIgGAHQgUAagkAAQgsABgSgkIgCgHQgIAXgXAIQgPAFguAAQgnAAgOgWQgGgIgCgPIgfgBQgEAOgJAMQgUAagkAAQgYABgQgLQgTAQgbAAQgsgBgSgig");
	var mask_graphics_190 = new cjs.Graphics().p("AAIAqIgDgGQgEAIgFAHQgUAagjAAQgsAAgSgjQgGgLgCgKQgEANgKAMQgVAagiAAQgtAAgRgjIgGgVQgDASgNARQgVAagiAAQgtAAgSgjIgDgIIgIAMQgVAagjAAQgsAAgSgjIgCgHQgEAIgGAIQgUAagkAAQgzAAgPgnIgIANQgVAagiAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAPAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAVgbAjAAQA0AAAOAqIAHgLQAVgbAkAAQA3ABAOAzQADgQAKgNQAUgbAlAAQA6AAALA5QAFgNAJgNQAVgbAjAAQArAAASAjIADAHQADgIAGgHQAUgbAkAAQAZAAAQAKQASgOAbAAQBCAAAFBDIAZAAQAAgEACgCQAEgOATgPQAdgXAtACIAGAAQAmAAAMAgQADgIAHgIQAUgbAkAAQAyAAAPAnIAJgMQAUgbAkAAQAsAAASAgIAGgKQAUgbAkAAQAsAAASAjQAKASAAATQAAAYgQAUQgVAbgjAAQgrAAgSghIgIAMQgVAagiAAQgsAAgTgjIgCgHQgDAIgGAIQgVAagjAAQgsAAgSgjIgCgHQgIAWgXAIQgPAGguAAQgnAAgOgWQgGgJgDgOIgegBQgEAOgJAMQgUAagkAAQgYAAgRgLQgSAQgbAAQgsAAgSgjg");
	var mask_graphics_191 = new cjs.Graphics().p("AgxAsIgDgGQgEAIgFAHQgUAagkAAQgsAAgSgjQgGgLgCgKQgEANgKAMQgVAagiAAQgtAAgRgjIgGgUQgDARgNARQgVAagiAAQgtAAgSgjIgDgHIgIALQgVAagjAAQgsAAgSgjIgCgHQgEAJgFAHQgVAagjAAQg0AAgPgmIgIAMQgVAagiAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAPAnIAIgMQAVgbAkAAQAyAAAPAnIAJgMQAUgbAjAAQA0AAAPAqIAGgKQAVgbAkAAQA4AAANAzQADgQALgNQATgbAlAAQA6AAAMA5QAEgNAJgMQAVgbAjAAQArAAATAjIADAGQAEgHAFgHQAUgbAjAAQAZAAAQAKQASgPAbAAQBCAAAGBEIAYgBQAAgEADgBQADgPATgPQAdgWAtABIAHAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAyAAAQAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQATgbAlAAQAlAAASAaIADgEQAVgaAkAAQBEAAAEBIQAAAYgQAVQgVAagjAAQgmAAgTgaIgDAEQgVAagiAAQgsAAgSggIgIALQgUAagjAAQgsAAgTgjIgBgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgIAXgXAIQgPAFguAAQgnAAgOgWQgGgIgCgPIgfgBQgEAOgJAMQgUAagkAAQgYAAgQgLQgTAQgbAAQgrAAgSgjg");
	var mask_graphics_192 = new cjs.Graphics().p("AhtAsIgDgGQgEAIgFAHQgUAagkAAQgsAAgSgjQgGgLgCgKQgEANgKAMQgVAagiAAQgtAAgRgjIgGgUQgDARgNARQgVAagiAAQgtAAgSgjIgDgHIgIALQgVAagjAAQgsAAgSgjIgCgHQgEAJgFAHQgVAagjAAQg0AAgPgmIgIAMQgVAagiAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAPAnIAIgMQAVgbAkAAQAyAAAPAnIAJgMQAUgbAjAAQA0AAAPAqIAGgKQAVgbAkAAQA4AAANAzQADgQALgNQATgbAlAAQA6AAAMA5QAEgNAJgMQAVgbAjAAQArAAATAjIADAGQAEgHAFgHQAUgbAkAAQAZAAAQAKQARgPAbAAQBCAAAGBEIAYgBQAAgEADgBQADgPATgPQAdgWAtABIAHAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAyAAAQAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQATgbAlAAQAlAAASAaIADgEQAVgaAkAAQArAAASAdIADgDQATgaAlAAQBDAAAFBIQAAAYgRAVQgUAagjAAQgqAAgTggIgDAGQgVAagjAAQgmAAgTgaIgDAEQgVAagiAAQgsAAgSggIgIALQgUAagjAAQgsAAgTgjIgBgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgIAXgXAIQgPAFguAAQgnAAgOgWQgGgIgCgPIgfgBQgEAOgJAMQgUAagkAAQgYAAgPgLQgTAQgbAAQgsAAgSgjg");
	var mask_graphics_193 = new cjs.Graphics().p("AjIAsIgDgGQgEAIgFAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAOAnIAJgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAZAAARAKQASgPAaAAQBBAAAGBEIAYgBQAAgEADgBQADgPATgPQAdgWAuABIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAyAAAQAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQBAAAAHBAICOABIACAAIAaABIAFACQACABADAEQADAGAAADQAAADgEAIIgHAFIgEABIisAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgvAAQgnAAgOgWQgFgIgDgPIgegBQgEAOgKAMQgTAagkAAQgYAAgQgLQgTAQgbAAQgsAAgSgjg");
	var mask_graphics_194 = new cjs.Graphics().p("AkCAzIgDgGQgEAIgFAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAOAnIAJgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAZAAARAKQASgPAaAAQBCAAAGBDIAYgBQAAgEADAAQADgPASgPQAdgWAuABIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAyAAAQAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQBAAAAHBAICOABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQBEAAAEBIQAAAXgQAVQgVAagjAAQgpAAgSgdIisAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgvAAQgnAAgNgWQgFgIgDgPIgegBQgEAOgKAMQgUAagkAAQgYAAgQgLQgTAQgbAAQgsAAgSgjg");
	var mask_graphics_195 = new cjs.Graphics().p("Ak+AzIgDgGQgEAIgFAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAOAnIAJgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAZAAARAKQASgPAaAAQBCAAAGBDIAYgBQAAgEADAAQADgPATgPQAdgWAtABIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAyAAAQAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQBAAAAHBAICOABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAvAAARAjIAAAAQAUgaAkAAQBEAAAEBIQAAAZgQAUQgUAagkAAQgsAAgSgjIgBgCIgBABQgVAagjAAQgpAAgSgdIisAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFguAAQgnAAgOgWQgFgIgDgPIgegBQgEAOgKAMQgUAagkAAQgYAAgQgLQgTAQgbAAQgsAAgSgjg");
	var mask_graphics_196 = new cjs.Graphics().p("Al/AzIgDgGQgEAIgFAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAOAnIAJgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAZAAARAKQASgPAaAAQBCAAAGBDIAYgBQAAgEADAAQADgPATgPQAdgWAuABIAGAAQAkAAAMAhQAEgJAGgIQAUgbAkAAQAyAAAQAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQBAAAAHBAICOABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAvAAARAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQBFAAAEBIQAAAXgRAVQgUAagkAAQgrAAgTgiIAAgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgVAagjAAQgpAAgSgdIisAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgXAIQgOAFgvAAQgnAAgOgWQgFgIgDgPIgegBQgEAOgKAMQgUAagkAAQgYAAgQgLQgTAQgbAAQgsAAgSgjg");
	var mask_graphics_197 = new cjs.Graphics().p("Am4AzIgDgGQgEAIgGAHQgUAagjAAQgsAAgSgjQgGgLgCgKQgEANgKAMQgVAagiAAQgtAAgRgjIgGgUQgDARgNARQgVAagiAAQgtAAgSgjIgDgHIgIALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgzAAgPgmIgIAMQgVAagiAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAPAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAVgbAjAAQA0AAAOAqIAHgKQAVgbAkAAQA3AAAOAzQADgQAKgNQAUgbAlAAQA6AAALA5QAFgNAJgMQAVgbAjAAQArAAATAjIADAGQADgHAGgHQAUgbAkAAQAZAAAQAKQASgPAbAAQBCAAAFBDIAZgBQAAgEACAAQAEgPATgPQAdgWAtABIAGAAQAmAAAMAhQADgJAHgIQAUgbAjAAQAyAAAPAoIAJgNQAUgbAkAAQAsAAASAgIAGgKQAUgbAkAAQAlAAATAaIADgEQAUgaAlAAQArAAARAdIADgDQAUgaAlAAQA/AAAIBAICOABIABAAIAMAAIgBgIQAAgZAQgUQAUgaAkAAQAwAAAQAjIAAAAQAUgaAkAAQAvAAAQAiQAFgJAGgIQAVgaAjAAQArAAASAdQAUgYAiAAQBEAAAEBHQAAAYgRAVQgVAagiAAQgpAAgTgeQgUAZgjAAQgsAAgSgiIgBgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgUAagkAAQgoAAgTgdIisAAQgEAJgHAJQgUAagjAAQgqAAgTggIgEAGQgUAagjAAQgnAAgSgaIgDAEQgVAagjAAQgrAAgSggIgIALQgVAagiAAQgsAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgrAAgSgjIgCgHQgIAXgXAIQgPAFguAAQgnAAgOgWQgGgIgDgPIgegBQgEAOgJAMQgUAagkAAQgYAAgRgLQgSAQgbAAQgsAAgSgjg");
	var mask_graphics_198 = new cjs.Graphics().p("An0AzIgDgGQgEAIgGAHQgUAagjAAQgsAAgSgjQgGgLgCgKQgEANgKAMQgVAagiAAQgtAAgRgjIgGgUQgDARgNARQgVAagiAAQgtAAgSgjIgDgHIgIALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgzAAgPgmIgIAMQgVAagiAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAPAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAVgbAjAAQA0AAAOAqIAHgKQAVgbAkAAQA3AAAOAzQADgQAKgNQAUgbAlAAQA6AAALA5QAFgNAJgMQAVgbAjAAQArAAATAjIADAGQADgHAGgHQAUgbAkAAQAZAAAQAKQASgPAbAAQBCAAAFBDIAZgBQAAgEACAAQAEgPATgPQAdgWAtABIAGAAQAmAAAMAhQADgJAHgIQAUgbAkAAQAxAAAPAoIAJgNQAUgbAkAAQAsAAASAgIAGgKQAUgbAkAAQAlAAATAaIADgEQAUgaAlAAQArAAARAdIADgDQAUgaAlAAQA/AAAIBAICOABIABAAIAMAAIgBgIQAAgZAQgUQAUgaAkAAQAwAAAQAjIAAAAQAUgaAkAAQAvAAAQAiQAFgJAGgIQAVgaAjAAQArAAASAdQAUgYAiAAQAsAAARAeIADgEQAUgaAkAAQBEAAAEBHQAAAYgRAVQgVAagiAAQgqAAgTgfIgEAFQgVAagiAAQgpAAgTgeQgUAZgjAAQgsAAgSgiIgBgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgUAagkAAQgoAAgTgdIisAAQgEAJgHAJQgUAagjAAQgqAAgTggIgEAGQgUAagjAAQgnAAgSgaIgDAEQgVAagjAAQgrAAgSggIgIALQgVAagiAAQgsAAgTgjIgCgHQgDAJgGAHQgUAagjAAQgsAAgSgjIgCgHQgIAXgXAIQgPAFguAAQgnAAgOgWQgGgIgDgPIgegBQgEAOgJAMQgUAagkAAQgYAAgRgLQgSAQgbAAQgsAAgSgjg");
	var mask_graphics_199 = new cjs.Graphics().p("Ao1AzIgDgGQgEAIgFAHQgUAagkAAQgsAAgSgjQgGgLgCgKQgEANgKAMQgVAagiAAQgtAAgRgjIgGgUQgDARgNARQgVAagiAAQgtAAgSgjIgDgHIgIALQgVAagjAAQgsAAgSgjIgCgHQgEAJgFAHQgVAagjAAQg0AAgPgmIgIAMQgVAagiAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAPAnIAIgMQAVgbAkAAQAyAAAPAnIAJgMQAUgbAjAAQA0AAAPAqIAGgKQAVgbAkAAQA4AAANAzQADgQALgNQATgbAlAAQA6AAAMA5QAEgNAJgMQAVgbAjAAQArAAATAjIADAGQAEgHAFgHQAUgbAkAAQAZAAAQAKQASgPAbAAQBCAAAGBDIAYgBQAAgEADAAQADgPATgPQAdgWAtABIAHAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAyAAAQAoIAIgNQAVgbAiAAQAtAAARAgIAHgKQATgbAlAAQAlAAASAaIADgEQAVgaAkAAQArAAASAdIADgDQATgaAlAAQBAAAAHBAICOABIACAAIALAAIgBgIQABgZAQgUQATgaAkAAQAwAAAQAjIAAAAQAVgaAjAAQAvAAARAiQAEgJAHgIQAUgaAjAAQArAAASAdQAUgYAjAAQArAAARAeIAEgEQATgaAlAAQAxAAAQAmIAIgMQAUgaAkAAQBGAAACBHQAAAYgQAVQgVAagjAAQgsAAgTgiIgCgGQgEAHgGAHQgUAagiAAQgrAAgTgfIgDAFQgWAaghAAQgqAAgSgeQgVAZgjAAQgrAAgTgiIAAgBQgEAKgHAJQgVAagkAAQgsAAgRgjIgCgCIgBABQgUAagkAAQgoAAgSgdIitAAQgEAJgHAJQgUAagjAAQgqAAgTggIgDAGQgVAagjAAQgmAAgTgaIgDAEQgVAagiAAQgsAAgSggIgIALQgUAagjAAQgrAAgTgjIgBgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgIAXgXAIQgPAFguAAQgnAAgOgWQgGgIgCgPIgfgBQgEAOgJAMQgUAagkAAQgYAAgQgLQgTAQgbAAQgsAAgSgjg");
	var mask_graphics_200 = new cjs.Graphics().p("ApqAzIgDgGQgEAIgFAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAOAnIAJgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAZAAARAKQASgPAaAAQBCAAAGBDIAYgBQAAgEADAAQADgPATgPQAdgWAuABIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAyAAAQAoIAIgNQAVgbAjAAQAsAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQBAAAAHBAICOABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAvAAARAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAxAAAQAmIAIgMQAUgaAkAAQAnAAASAWQATgSAeAAQBEAAAEBIQAAAZgQAUQgUAagkAAQglAAgSgZQgUAUgfAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgiIAAgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgVAagjAAQgpAAgSgdIisAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagiAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgvAAQgnAAgOgWQgFgIgDgPIgegBQgEAOgKAMQgUAagkAAQgYAAgQgLQgTAQgbAAQgsAAgSgjg");
	var mask_graphics_201 = new cjs.Graphics().p("AqrAzIgDgGQgEAIgFAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAOAnIAJgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAZAAARAKQASgPAaAAQBCAAAGBDIAYgBQAAgEADAAQADgPATgPQAdgWAuABIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAyAAAQAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQATgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQBAAAAHBAICOABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAvAAARAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAxAAAQAmIAIgMQAUgaAkAAQAnAAASAWQATgSAeAAQAwAAAQAlQAEgIAFgHQAUgaAlAAQBDAAAFBHQAAAYgRAVQgUAagjAAQgtAAgSgiIgBgDQgEAIgGAIQgUAagkAAQglAAgSgZQgUAUgfAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgiIAAgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgVAagjAAQgpAAgSgdIisAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgqAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgvAAQgnAAgOgWQgFgIgDgPIgegBQgEAOgKAMQgUAagkAAQgYAAgQgLQgTAQgbAAQgsAAgSgjg");
	var mask_graphics_202 = new cjs.Graphics().p("ArkAzIgDgGQgEAIgGAHQgUAagjAAQgsAAgSgjQgGgLgCgKQgEANgKAMQgVAagiAAQgtAAgRgjIgGgUQgDARgNARQgVAagiAAQgtAAgSgjIgDgHIgIALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgzAAgPgmIgIAMQgVAagiAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAPAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAVgbAjAAQA0AAAOAqIAHgKQAVgbAkAAQA3AAAOAzQADgQAKgNQAUgbAlAAQA6AAALA5QAFgNAJgMQAVgbAjAAQArAAATAjIADAGQADgHAGgHQAUgbAkAAQAZAAAQAKQASgPAbAAQBCAAAFBDIAZgBQAAgEACAAQAEgPATgPQAdgWAtABIAGAAQAmAAAMAhQADgJAHgIQAUgbAkAAQAyAAAPAoIAJgNQAUgbAkAAQAsAAASAgIAGgKQAUgbAkAAQAkAAATAaIADgEQAUgaAlAAQArAAARAdIADgDQAUgaAlAAQA/AAAIBAICOABIABAAIAMAAIgBgIQAAgZAQgUQAUgaAkAAQAwAAAQAjIAAAAQAUgaAkAAQAvAAAQAiQAFgJAGgIQAVgaAjAAQArAAASAdQAUgYAiAAQAsAAARAeIADgEQAUgaAkAAQAyAAAQAmIAIgMQAUgaAkAAQAnAAARAWQATgSAeAAQAxAAAQAlQADgIAGgHQAUgaAkAAQApAAASAaIAAAAQAUgaAkAAQBEAAAEBHQAAAYgRAVQgVAagiAAQgnAAgTgbIgBABQgVAagjAAQgsAAgSgiIgCgDQgEAIgGAIQgUAagkAAQgkAAgTgZQgTAUgfAAQgtAAgSgiIgCgGQgEAHgGAHQgVAagiAAQgqAAgTgfIgEAFQgVAagiAAQgpAAgTgeQgUAZgjAAQgsAAgSgiIgBgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgUAagkAAQgoAAgTgdIisAAQgEAJgHAJQgUAagjAAQgqAAgTggIgEAGQgUAagjAAQgnAAgSgaIgDAEQgVAagiAAQgrAAgSggIgIALQgVAagiAAQgsAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgsAAgSgjIgCgHQgIAXgXAIQgPAFguAAQgnAAgOgWQgGgIgDgPIgegBQgEAOgJAMQgUAagkAAQgYAAgRgLQgSAQgbAAQgsAAgSgjg");
	var mask_graphics_203 = new cjs.Graphics().p("As4AzIgDgGQgEAIgGAHQgUAagjAAQgsAAgSgjQgGgLgCgKQgFANgJAMQgVAagiAAQgtAAgRgjIgGgUQgDARgNARQgVAagiAAQgtAAgSgjIgEgHIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgzAAgPgmIgIAMQgVAagiAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAPAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAVgbAjAAQA0AAAOAqIAHgKQAVgbAkAAQA3AAAOAzQADgQAKgNQAUgbAlAAQA6AAALA5QAEgNAKgMQAVgbAjAAQArAAATAjIADAGQADgHAGgHQAUgbAkAAQAZAAAQAKQASgPAbAAQBCAAAFBDIAZgBQAAgEACAAQAEgPATgPQAdgWAtABIAGAAQAmAAAMAhQADgJAHgIQAUgbAkAAQAyAAAPAoIAJgNQAUgbAkAAQAsAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQArAAARAdIADgDQAUgaAlAAQA/AAAIBAICOABIABAAIAMAAIgBgIQAAgZAQgUQAUgaAkAAQAwAAAQAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAVgaAjAAQArAAASAdQATgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAmIAJgMQAUgaAkAAQAmAAASAWQATgSAeAAQAxAAAQAlQADgIAGgHQAUgaAkAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA1AAQBKAAAZAiQANARgCAUQAABHhuAAQg2AAgdgRQgTARgcAAQgoAAgSgbIgBABQgVAagjAAQgsAAgSgiIgCgDQgEAIgGAIQgUAagkAAQgkAAgTgZQgTAUgfAAQgtAAgSgiIgDgGQgDAHgGAHQgVAagiAAQgqAAgTgfIgEAFQgVAagiAAQgqAAgSgeQgUAZgjAAQgsAAgSgiIgBgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgUAagkAAQgoAAgTgdIisAAQgEAJgHAJQgUAagjAAQgrAAgSggIgEAGQgUAagjAAQgmAAgSgaIgDAEQgVAagjAAQgrAAgSggIgIALQgVAagiAAQgsAAgTgjIgCgHQgEAJgFAHQgVAagjAAQgsAAgSgjIgCgHQgIAXgXAIQgPAFguAAQgnAAgOgWQgGgIgDgPIgegBQgEAOgJAMQgUAagkAAQgYAAgRgLQgSAQgbAAQgsAAgSgjg");
	var mask_graphics_204 = new cjs.Graphics().p("AuxAzIgDgGQgEAIgFAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgEARgNARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAPAnIAJgMQAUgbAkAAQAzAAAOAnIAJgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQADgQALgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAZAAARAKQASgPAaAAQBCAAAGBDIAYgBQAAgEADAAQADgPATgPQAdgWAuABIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAyAAAQAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQArAAASAdIADgDQAUgaAjAAQBAAAAHBAICOABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAvAAARAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQArAAASAeIADgEQAUgaAkAAQAxAAAQAmIAIgMQAUgaAkAAQAnAAASAWQATgSAeAAQAwAAAQAlQAEgIAFgHQAUgaAlAAQApAAARAaIABAAQAUgaAkAAQAfAAASAQQAcgQA0AAQA3AAAdATQAjgTBVAAQBpAAAfAiQAQARgFAUQAAAggRANQgfAahjAAQhRAAglgUQgbAUg7AAQg2AAgcgRQgTARgcAAQgoAAgTgbIgBABQgUAagjAAQgtAAgSgiIgBgDQgEAIgGAIQgUAagkAAQglAAgSgZQgUAUgfAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgiIAAgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgCgCIAAABQgVAagjAAQgpAAgSgdIitAAQgEAJgGAJQgVAagjAAQgpAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgsAAgSggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgvAAQgnAAgOgWQgGgIgCgPIgegBQgEAOgKAMQgUAagkAAQgYAAgQgLQgTAQgbAAQgsAAgSgjg");
	var mask_graphics_205 = new cjs.Graphics().p("Aw4AzIgDgGQgDAIgGAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQBDAAAFBDIAYgBQABgEACAAQAEgPASgPQAdgWAuABIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAzAAAPAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQBAAAAIBAICMABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAwAAAQAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAmIAIgMQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAXQAjgXBlAAQBxAAAhAiQARARgGAUQAAAggRANQgiAahqAAQheAAgmgXQghAXheAAQhRAAglgUQgbAUg7AAQg2AAgcgRQgTARgcAAQgoAAgSgbIgCABQgUAagjAAQgtAAgSgiIgBgDQgEAIgGAIQgUAagkAAQgkAAgTgZQgTAUggAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgiIAAgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgVAagjAAQgoAAgTgdIirAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgvAAQgnAAgOgWQgFgIgDgPIgegBQgEAOgKAMQgUAagkAAQgYAAgQgLQgSAQgcAAQgsAAgSgjg");
	var mask_graphics_206 = new cjs.Graphics().p("Aw4AzIgDgGQgDAIgGAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAaAAAQAKQAUgTAeAAQAmAAATAbQAVgIAaABIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAzAAAPAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQBAAAAIBAICMABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAwAAAQAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAmIAIgMQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAXQAjgXBlAAQBxAAAhAiQARARgGAUQAAAggRANQgiAahqAAQheAAgmgXQghAXheAAQhRAAglgUQgbAUg7AAQg2AAgcgRQgTARgcAAQgoAAgSgbIgCABQgUAagjAAQgtAAgSgiIgBgDQgEAIgGAIQgUAagkAAQgkAAgTgZQgTAUggAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgiIAAgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgVAagjAAQgoAAgTgdIirAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgvAAQgYAAgPgJQgNAGgRAAQgYAAgRgLQgTAUggAAQgYAAgQgLQgSAQgcAAQgsAAgSgjg");
	var mask_graphics_207 = new cjs.Graphics().p("AuGBUIgCgFQgMAFgQAAQgYAAgQgLQgSAQgcAAQgsAAgSgjIgDgGQgDAIgGAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgVQgDASgOARQgVAagiAAQgtAAgSgjIgDgIIgIAMQgUAagkAAQgrAAgTgjIgCgHQgDAIgGAIQgVAagjAAQgzAAgPgnIgIANQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAUgbAjAAQA0AAAPAqIAHgLQAUgbAkAAQA4ABANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgNQAUgbAjAAQAsAAASAjIADAHQAEgIAFgHQAUgbAkAAQAaAAAQAKQASgOAaAAQAMAAAJACQADgRAMgQQAVgaAjgBQArABATAiQAJASABASQAPgDARABIAGAAQAlAAAMAgQAEgIAGgIQAUgbAkAAQAzAAAPAnIAIgMQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgFQAUgZAkAAQAsgBARAeIADgEQAUgZAkAAQBAgBAIBBICMABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAwgBAQAkIAAAAQAUgbAkABQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsgBARAeQAUgYAjAAQAsAAARAeIADgFQAUgZAkAAQAyAAAPAmIAIgNQAUgZAkAAQAnAAASAWQATgSAeAAQAxgBAPAlQAEgHAFgIQAUgZAlAAQApAAASAaIAAgBQAUgZAkAAQAgAAASAPQAbgPA0AAQA4AAAcATQAjgTBVAAQBWAAAlAXQAjgXBlAAQBxgBAhAjQARARgGAUQAAAfgRAOQgiAahqAAQheAAgmgXQghAXheAAQhRAAglgUQgbAUg7AAQg2AAgcgSQgTASgcAAQgoAAgSgcIgCACQgUAagjAAQgtAAgSgiIgBgEQgEAJgGAIQgUAagkgBQgkABgTgZQgTAUggAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSggIgEAGQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgjIAAAAQgEAKgHAJQgUAagkgBQgsAAgSgiIgBgCIgBABQgVAagjAAQgoAAgTgdIirAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDADQgUAbgjAAQgrAAgTghIgHAMQgVAagjAAQgsAAgSgjIgCgHQgEAIgGAIQgUAagkAAQgsAAgSgjIgCgHQgHAWgYAIQgOAGgvAAIgEAAQgEAHgGAGQgUAagjAAQgsAAgSghg");
	var mask_graphics_208 = new cjs.Graphics().p("AuGCDQgKgUAAgTIAAgBQgJACgLAAQgYAAgQgLQgSAQgcAAQgsAAgSgjIgDgGQgDAIgGAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgYAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAyQAEgPAKgNQATgbAlAAQA7AAALA4QAEgMAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgYAQgVQAUgbAkAAQBEAAAEBJQAAAIgCAJIACADQAJARABASQAPgCARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAzAAAPAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQBAAAAIA/ICMABIACAAIALAAIAAgHQAAgZAQgUQAUgaAkAAQAwAAAQAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAmIAIgMQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAXQAjgXBlAAQBxAAAhAiQARARgGATQAAAhgRANQgiAahqAAQheAAgmgXQghAXheAAQhRAAglgUQgbAUg7AAQg2AAgcgRQgTARgcAAQgoAAgSgbIgCABQgUAagjAAQgtAAgSgiIgBgDQgEAIgGAIQgUAagkAAQgkAAgTgZQgTAUggAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgiIAAgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgVAagjAAQgoAAgTgdIirAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAAYgRAVQgUAbgjAAQgsAAgSgjg");
	var mask_graphics_209 = new cjs.Graphics().p("AuLCyIgKglQAAgOAGgNIgBgMIAAgBQgJACgLAAQgYAAgQgLQgSAQgcAAQgsAAgSgjIgDgGQgDAIgGAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgVQgDASgOARQgVAagiAAQgtAAgSgjIgDgIIgIAMQgUAagkAAQgrAAgTgjIgCgHQgDAIgGAIQgVAagjAAQgzAAgPgnIgIANQgVAagjAAQhGAAgChIQAAgZAQgTQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAUgbAjAAQA0AAAPApIAHgKQAUgbAkAAQA4ABANAyQAEgPAKgNQATgbAlAAQA7AAALA4QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgOAaAAQAMAAAJACIABgFIgCgDIgKglQAAgVAMgTQgCgJAAgKQAAgYAQgUQAVgbAjAAQBFABADBIQAAAVgMASIACATQAAAIgCAJIACACQAJASABASQAPgDARABIAGAAQAlAAAMAfQAEgHAGgIQAUgbAkAAQAzAAAPAnIAIgMQAVgbAjAAQAtAAARAgIAHgLQAUgaAkAAQAlAAATAaIADgFQAUgZAkAAQAsgBARAeIADgEQAUgZAkAAQBAgBAIBAICMABIACAAIALAAIAAgIQAAgYAQgUQAUgbAkAAQAwAAAQAkIAAAAQAUgbAkABQAvAAAQAiQAEgJAHgIQAUgbAjAAQAsAAARAeQAUgYAjAAQAsAAARAeIADgFQAUgZAkAAQAyAAAPAmIAIgNQAUgZAkAAQAnAAASAWQATgSAeAAQAxgBAPAlQAEgHAFgIQAUgZAlAAQApAAASAaIAAgBQAUgZAkAAQAgAAASAPQAbgPA0AAQA4AAAcATQAjgTBVAAQBWAAAlAXQAjgXBlAAQBxgBAhAjQARARgGATQAAAggRAOQgiAahqAAQheAAgmgXQghAXheAAQhRAAglgUQgbAUg7AAQg2AAgcgSQgTASgcAAQgoAAgSgcIgCACQgUAagjAAQgtAAgSgiIgBgEQgEAJgGAIQgUAagkgBQgkABgTgZQgTAUggAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSggIgEAGQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgjIAAAAQgEAKgHAJQgUAagkgBQgsAAgSgiIgBgCIgBABQgVAagjAAQgoAAgTgdIirAAQgEAJgHAJQgVAagjAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDADQgUAbgjAAQgrAAgTghIgHAMQgVAagjAAQgsAAgSgjIgCgHQgEAIgGAIQgUAagkAAQgsAAgSgjIgCgHQgHAWgYAIQgOAFgtABIABAHQAAAOgGANIABALQAAAYgQAVQgVAbgjAAQgsAAgSgkg");
	var mask_graphics_210 = new cjs.Graphics().p("AuPEMQgEgSABgVIACgVQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgNIgBgLIAAgCQgJADgLgBQgYABgQgLQgSAQgcAAQgsgBgSgiIgDgHQgDAIgGAIQgUAagkAAQgrgBgTgiQgFgLgDgKQgEAMgKAMQgUAagjAAQgsABgSgkIgFgTQgDARgOARQgVAagiAAQgtgBgSgiIgDgIIgIALQgUAagkAAQgrABgTgkIgCgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgPAKgOQATgaAlgBQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgJQAAgSAJgPQgEgMAAgNQAAgXAPgVQAVgbAkAAQBDAAAFBJQAAAQgJAQQADALABAOQAAAVgMASIACATQAAAJgCAIIACADQAJARABATQAPgDARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQAzAAAPAoIAIgNQAVgaAjgBQAtAAARAgIAHgKQAUgaAkAAQAlAAATAZIADgEQAUgaAkAAQAsAAARAeIADgEQAUgaAkAAQBAAAAIBAICMABIACABIALAAIAAgJQAAgZAQgUQAUgaAkAAQAwAAAQAkIAAgBQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAnIAIgNQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAYQAjgYBlAAQBxAAAhAjQARARgGAUQAAAggRAMQgiAahqAAQheABgmgYQghAYhegBQhRAAglgUQgbAUg7AAQg2ABgcgSQgTASgcgBQgoAAgSgbIgCABQgUAagjAAQgtAAgSghIgBgDQgEAIgGAIQgUAZgkAAQgkAAgTgYQgTATggAAQgsAAgSghIgDgGQgEAIgFAFQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqABgSgfQgVAZgjAAQgrABgTgiIAAgBQgEAJgHAKQgUAZgkAAQgsAAgSgiIgBgCIgBABQgVAZgjAAQgoAAgTgcIirAAQgEAIgHAJQgVAagjAAQgqAAgSgfIgEAFQgVAagjAAQgmAAgTgaIgDAEQgUAbgjAAQgrAAgTghIgHALQgVAagjAAQgsABgSgkIgCgGQgEAIgGAHQgUAagkAAQgsABgSgkIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAAOgGANIABALQAAASgIAQQAHALAEAQQAGAdgEAeQAAA0gFAPQgOAwg1AAQg6AAgNg4g");
	var mask_graphics_211 = new cjs.Graphics().p("AuPEMQgEgSABgVIACgVQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgNIgBgLIAAgCQgJADgLgBQgYABgQgLQgSAQgcAAQgsgBgSgiIgDgHQgDAIgGAIQgUAagkAAQgrgBgTgiQgFgLgDgKQgEAMgKAMQgUAagjAAQgsABgSgkIgFgTQgDARgOARQgVAagiAAQgtgBgSgiIgDgIIgIALQgUAagkAAQgrABgTgkIgCgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgPAKgOQATgaAlgBQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgJQAAgSAJgPQgEgMAAgNQAAgXAPgVQAVgbAkAAQBDAAAFBJQAAAQgJAQQADALABAOQAAAVgMASIACATQAAAJgCAIIACADQAJARABATQAPgDARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQAzAAAPAoIAIgNQAVgaAjgBQAtAAARAgIAHgKQAUgaAkAAQAlAAATAZIADgEQAUgaAkAAQAsAAARAeIADgEQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBGIA2AAIACABIALAAIAAgJQAAgZAQgUQAUgaAkAAQAwAAAQAkIAAgBQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAnIAIgNQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAYQAjgYBlAAQBxAAAhAjQARARgGAUQAAAggRAMQgiAahqAAQheABgmgYQghAYhegBQhRAAglgUQgbAUg7AAQg2ABgcgSQgTASgcgBQgoAAgSgbIgCABQgUAagjAAQgtAAgSghIgBgDQgEAIgGAIQgUAZgkAAQgkAAgTgYQgTATggAAQgsAAgSghIgDgGQgEAIgFAFQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqABgSgfQgVAZgjAAQgrABgTgiIAAgBQgEAJgHAKQgUAZgkAAQgsAAgSgiIgBgCIgBABQgVAZgjAAQgoAAgTgcIhYAAIgJANQgUAZgiAAQgZAAgQgLQgTAQgbAAQgqAAgSgfIgEAFQgVAagjAAQgmAAgTgaIgDAEQgUAbgjAAQgrAAgTghIgHALQgVAagjAAQgsABgSgkIgCgGQgEAIgGAHQgUAagkAAQgsABgSgkIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAAOgGANIABALQAAASgIAQQAHALAEAQQAGAdgEAeQAAA0gFAPQgOAwg1AAQg6AAgNg4g");
	var mask_graphics_212 = new cjs.Graphics().p("AuPEMQgEgSABgVIACgVQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgNIgBgLIAAgCQgJADgLgBQgYABgQgLQgSAQgcAAQgsgBgSgiIgDgHQgDAIgGAIQgUAagkAAQgrgBgTgiQgFgLgDgKQgEAMgKAMQgUAagjAAQgsABgSgkIgFgTQgDARgOARQgVAagiAAQgtgBgSgiIgDgIIgIALQgUAagkAAQgrABgTgkIgCgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgPAKgOQATgaAlgBQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgJQAAgSAJgPQgEgMAAgNQAAgXAPgVQAVgbAkAAQBDAAAFBJQAAAQgJAQQADALABAOQAAAVgMASIACATQAAAJgCAIIACADQAJARABATQAPgDARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQAzAAAPAoIAIgNQAVgaAjgBQAtAAARAgIAHgKQAUgaAkAAQAlAAATAZIADgEQAUgaAkAAQAsAAARAeIADgEQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBGIA2AAIACABIALAAIAAgJQAAgZAQgUQAUgaAkAAQAwAAAQAkIAAgBQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAnIAIgNQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAYQAjgYBlAAQBxAAAhAjQARARgGAUQAAAggRAMQgiAahqAAQheABgmgYQghAYhegBQhRAAglgUQgbAUg7AAQg2ABgcgSQgTASgcgBQgoAAgSgbIgCABQgUAagjAAQgtAAgSghIgBgDQgEAIgGAIQgUAZgkAAQgkAAgTgYQgTATggAAQgsAAgSghIgDgGQgEAIgFAFQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqABgSgfQgVAZgjAAQgrABgTgiIAAgBQgEAJgHAKQgUAZgkAAQgsAAgSgiIgBgCIgBABQgVAZgjAAQgoAAgTgcIhPAAQADAKAAAOQAAAYgQAWQgVAaghAAQgsAAgTgjQgFgKgDgLQgJADgMAAQgqAAgSgfIgEAFQgVAagjAAQgmAAgTgaIgDAEQgUAbgjAAQgrAAgTghIgHALQgVAagjAAQgsABgSgkIgCgGQgEAIgGAHQgUAagkAAQgsABgSgkIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAAOgGANIABALQAAASgIAQQAHALAEAQQAGAdgEAeQAAA0gFAPQgOAwg1AAQg6AAgNg4g");
	var mask_graphics_213 = new cjs.Graphics().p("AuPEMQgEgSABgVIACgVQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgNIgBgLIAAgCQgJADgLgBQgYABgQgLQgSAQgcAAQgsgBgSgiIgDgHQgDAIgGAIQgUAagkAAQgrgBgTgiQgFgLgDgKQgEAMgKAMQgUAagjAAQgsABgSgkIgFgTQgDARgOARQgVAagiAAQgtgBgSgiIgDgIIgIALQgUAagkAAQgrABgTgkIgCgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgPAKgOQATgaAlgBQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgJQAAgSAJgPQgEgMAAgNQAAgXAPgVQAVgbAkAAQBDAAAFBJQAAAQgJAQQADALABAOQAAAVgMASIACATQAAAJgCAIIACADQAJARABATQAPgDARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQAzAAAPAoIAIgNQAVgaAjgBQAtAAARAgIAHgKQAUgaAkAAQAlAAATAZIADgEQAUgaAkAAQAsAAARAeIADgEQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBGIA2AAIACABIALAAIAAgJQAAgZAQgUQAUgaAkAAQAwAAAQAkIAAgBQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAnIAIgNQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAYQAjgYBlAAQBxAAAhAjQARARgGAUQAAAggRAMQgiAahqAAQheABgmgYQghAYhegBQhRAAglgUQgbAUg7AAQg2ABgcgSQgTASgcgBQgoAAgSgbIgCABQgUAagjAAQgtAAgSghIgBgDQgEAIgGAIQgUAZgkAAQgkAAgTgYQgTATggAAQgsAAgSghIgDgGQgEAIgFAFQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqABgSgfQgVAZgjAAQgrABgTgiIAAgBQgEAJgHAKQgUAZgkAAQgsAAgSgiIgBgCIgBABQgVAZgjAAQgoAAgTgcIhPAAQACAJABAMQAbARACArQAAAagQAUQgVAagiAAQgsABgSgjQgJgRgBgTQgLgIgIgOQgFgKgDgLQgJADgMAAQgqAAgSgfIgEAFQgVAagjAAQgmAAgTgaIgDAEQgUAbgjAAQgrAAgTghIgHALQgVAagjAAQgsABgSgkIgCgGQgEAIgGAHQgUAagkAAQgsABgSgkIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAAOgGANIABALQAAASgIAQQAHALAEAQQAGAdgEAeQAAA0gFAPQgOAwg1AAQg6AAgNg4g");
	var mask_graphics_214 = new cjs.Graphics().p("AuPEMQgEgSABgVIACgVQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgNIgBgLIAAgCQgJADgLgBQgYABgQgLQgSAQgcAAQgsgBgSgiIgDgHQgDAIgGAIQgUAagkAAQgrgBgTgiQgFgLgDgKQgEAMgKAMQgUAagjAAQgsABgSgkIgFgTQgDARgOARQgVAagiAAQgtgBgSgiIgDgIIgIALQgUAagkAAQgrABgTgkIgCgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgPAKgOQATgaAlgBQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgJQAAgSAJgPQgEgMAAgNQAAgXAPgVQAVgbAkAAQBDAAAFBJQAAAQgJAQQADALABAOQAAAVgMASIACATQAAAJgCAIIACADQAJARABATQAPgDARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQAzAAAPAoIAIgNQAVgaAjgBQAtAAARAgIAHgKQAUgaAkAAQAlAAATAZIADgEQAUgaAkAAQAsAAARAeIADgEQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBGIA2AAIACABIALAAIAAgJQAAgZAQgUQAUgaAkAAQAwAAAQAkIAAgBQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAnIAIgNQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAYQAjgYBlAAQBxAAAhAjQARARgGAUQAAAggRAMQgiAahqAAQheABgmgYQghAYhegBQhRAAglgUQgbAUg7AAQg2ABgcgSQgTASgcgBQgoAAgSgbIgCABQgUAagjAAQgtAAgSghIgBgDQgEAIgGAIQgUAZgkAAQgkAAgTgYQgTATggAAQgsAAgSghIgDgGQgEAIgFAFQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqABgSgfQgVAZgjAAQgrABgTgiIAAgBQgEAJgHAKQgUAZgkAAQgsAAgSgiIgBgCIgBABQgVAZgjAAQgoAAgTgcIhPAAQACAJABAMQAbARACArIAAADQAsAMAEA6QAAAYgQAVQgVAagjAAQgrAAgSgjIgJglIAAgCQgagHgNgZQgJgRgBgTQgLgIgIgOQgFgKgDgLQgJADgMAAQgqAAgSgfIgEAFQgVAagjAAQgmAAgTgaIgDAEQgUAbgjAAQgrAAgTghIgHALQgVAagjAAQgsABgSgkIgCgGQgEAIgGAHQgUAagkAAQgsABgSgkIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAAOgGANIABALQAAASgIAQQAHALAEAQQAGAdgEAeQAAA0gFAPQgOAwg1AAQg6AAgNg4g");
	var mask_graphics_215 = new cjs.Graphics().p("AuPEMQgEgSABgVIACgVQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgNIgBgLIAAgCQgJADgLgBQgYABgQgLQgSAQgcAAQgsgBgSgiIgDgHQgDAIgGAIQgUAagkAAQgrgBgTgiQgFgLgDgKQgEAMgKAMQgUAagjAAQgsABgSgkIgFgTQgDARgOARQgVAagiAAQgtgBgSgiIgDgIIgIALQgUAagkAAQgrABgTgkIgCgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgPAKgOQATgaAlgBQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgJQAAgSAJgPQgEgMAAgNQAAgXAPgVQAVgbAkAAQBDAAAFBJQAAAQgJAQQADALABAOQAAAVgMASIACATQAAAJgCAIIACADQAJARABATQAPgDARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQAzAAAPAoIAIgNQAVgaAjgBQAtAAARAgIAHgKQAUgaAkAAQAlAAATAZIADgEQAUgaAkAAQAsAAARAeIADgEQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBGIA2AAIACABIALAAIAAgJQAAgZAQgUQAUgaAkAAQAwAAAQAkIAAgBQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAnIAIgNQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAYQAjgYBlAAQBxAAAhAjQARARgGAUQAAAggRAMQgiAahqAAQheABgmgYQghAYhegBQhRAAglgUQgbAUg7AAQg2ABgcgSQgTASgcgBQgoAAgSgbIgCABQgUAagjAAQgtAAgSghIgBgDQgEAIgGAIQgUAZgkAAQgkAAgTgYQgTATggAAQgsAAgSghIgDgGQgEAIgFAFQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqABgSgfQgVAZgjAAQgrABgTgiIAAgBQgEAJgHAKQgUAZgkAAQgsAAgSgiIgBgCIgBABQgVAZgjAAQgoAAgTgcIhPAAQACAJABAMQAbARACArIAAADQAsAMAEA6IAAAJQAWASACAoQAAAYgRAWQgVAagiAAQgsAAgSgjQgJgSAAgUIABgKQgJgIgGgMIgJglIAAgCQgagHgNgZQgJgRgBgTQgLgIgIgOQgFgKgDgLQgJADgMAAQgqAAgSgfIgEAFQgVAagjAAQgmAAgTgaIgDAEQgUAbgjAAQgrAAgTghIgHALQgVAagjAAQgsABgSgkIgCgGQgEAIgGAHQgUAagkAAQgsABgSgkIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAAOgGANIABALQAAASgIAQQAHALAEAQQAGAdgEAeQAAA0gFAPQgOAwg1AAQg6AAgNg4g");
	var mask_graphics_216 = new cjs.Graphics().p("AAcEpQgHgOgCgPQgJgHgGgMQgJgSAAgUIABgLQgJgHgGgMIgJglIAAgCQgagIgNgYQgJgSgBgSQgLgIgIgOQgFgLgDgKQgJADgMAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAAOgGANIABALQAAASgIAQQAHALAEAQQAGAcgEAfQAAA0gFAPQgOAwg1AAQg6AAgNg4QgEgSABgWIACgUQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgNIgBgMIAAgBQgJACgLAAQgYAAgQgLQgSAQgcAAQgsAAgSgjIgDgGQgDAIgGAHQgUAagkAAQgrAAgTgjQgFgLgDgJQgEAMgKAMQgUAagjAAQgsAAgSgjIgFgTQgDAQgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChHQAAgZAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgKQAAgRAJgPQgEgMAAgNQAAgYAPgUQAVgbAkAAQBDAAAFBIQAAARgJAQQADALABAOQAAAVgMASIACATQAAAIgCAJIACADQAJARABASQAPgCARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAzAAAPAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBGIA2AAIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAwAAAQAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAmIAIgMQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAXQAjgXBlAAQBxAAAhAiQARARgGAUQAAAhgRANQgiAZhqAAQheAAgmgXQghAXheAAQhRAAglgUQgbAUg7AAQg2AAgcgRQgTARgcAAQgoAAgSgaIgCABQgUAZgjAAQgtAAgSghIgBgDQgEAIgGAHQgUAagkAAQgkAAgTgZQgTAUggAAQgsAAgSghIgDgGQgEAHgFAHQgVAZgiAAQgrAAgSgeIgEAFQgVAZgiAAQgqAAgSgdQgVAYgjAAQgrAAgTghIAAgBQgEAKgHAIQgUAagkAAQgsAAgSgiIgBgCIgBABQgVAZgjAAQgoAAgTgcIhPAAQACAJABALQAbARACAsIAAADQAsAMAEA6IAAAIQATAQAEAgQAWATADAoQAAAXgRAWQgUAagiAAQgsAAgTgig");
	var mask_graphics_217 = new cjs.Graphics().p("AAhFKQgKgTAAgTQAAgPAGgNIgBgBQgHgOgCgPQgJgHgGgMQgJgSAAgUIABgKQgJgIgGgMIgJglIAAgCQgagHgNgZQgJgRgBgTQgLgIgIgOQgFgKgDgKQgJACgMAAQgqAAgSgeIgEAFQgVAZgjAAQgmAAgTgZIgDAEQgUAagjAAQgrAAgTggIgHALQgVAZgjAAQgsABgSgjIgCgGQgEAIgGAHQgUAZgkAAQgsABgSgjIgCgHQgHAXgYAIQgOAEgtAAIABAHQAAAOgGANIABALQAAASgIAQQAHALAEAQQAGAdgEAeQAAA0gFAPQgOAwg1AAQg6AAgNg4QgEgSABgVIACgVQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgNIgBgLIAAgCQgJADgLgBQgYABgQgKQgSAPgcAAQgsgBgSghIgDgHQgDAIgGAIQgUAZgkAAQgrgBgTghQgFgLgDgLQgEANgKAMQgUAZgjAAQgsABgSgjIgFgUQgDASgOARQgVAZgiAAQgtgBgSghIgDgIIgIALQgUAZgkAAQgrABgTgjIgCgGQgDAIgGAHQgVAZgjAAQgzAAgPglIgIAMQgVAZgjAAQhGAAgChHQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgPAKgOQATgaAlgBQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgJQAAgSAJgPQgEgMAAgNQAAgXAPgVQAVgbAkAAQBDAAAFBJQAAAQgJAQQADALABAOQAAAVgMASIACATQAAAJgCAIIACADQAJARABATQAPgDARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQAzAAAPAoIAIgNQAVgaAjgBQAtAAARAgIAHgKQAUgaAkAAQAlAAATAZIADgEQAUgaAkAAQAsAAARAeIADgEQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBGIA2AAIACABIALAAIAAgJQAAgZAQgUQAUgaAkAAQAwAAAQAkIAAgBQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAnIAIgNQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAYQAjgYBlAAQBxAAAhAjQARARgGAUQAAAggRANQgiAahqAAQheABgmgYQghAYhegBQhRAAglgUQgbAUg7AAQg2ABgcgSQgTASgcgBQgoAAgSgbIgCABQgUAagjAAQgtAAgSgiIgBgDQgEAJgGAIQgUAZgkAAQgkAAgTgYQgTATggAAQgsAAgSgiIgDgGQgEAIgFAGQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqABgSgfQgVAZgjAAQgrABgTgjIAAgBQgEAKgHAKQgUAZgkAAQgsAAgSgiIgBgDIgBACQgVAZgjAAQgoAAgTgdIhPAAQACAKABAMQAbARACAqIAAADQAsAMAEA6IAAAJQATAPAEAhQAWASADAoQAAAOgFAMQAJARABAZQAAAXgQAWQgVAagiAAQgsAAgTgjg");
	var mask_graphics_218 = new cjs.Graphics().p("AA9FiQgGgMgCgNQgMgJgIgOQgKgTAAgTQAAgPAGgNIgBgBQgHgOgCgPQgJgHgGgMQgJgSAAgUIABgKQgJgIgGgMIgJglIAAgCQgagHgNgZQgJgRgBgTQgLgIgIgNQgFgKgDgLQgJADgMAAQgqAAgSgfIgEAFQgVAagjAAQgmAAgTgaIgDAEQgUAbgjAAQgrAAgTghIgHALQgVAagjAAQgsABgSgkIgCgGQgEAIgGAHQgUAagkAAQgsABgSgkIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAANgGANIABALQAAASgIAQQAHALAEAQQAGAdgEAeQAAA0gFAPQgOAwg1AAQg6AAgNg4QgEgSABgVIACgVQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgMIgBgLIAAgCQgJADgLgBQgYABgQgLQgSAQgcAAQgsgBgSgiIgDgHQgDAIgGAIQgUAagkAAQgrgBgTgiQgFgLgDgLQgEANgKAMQgUAagjAAQgsABgSgkIgFgUQgDASgOARQgVAagiAAQgtgBgSgiIgDgIIgIALQgUAagkAAQgrABgTgkIgCgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgPAKgOQATgaAlgBQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgJQAAgSAJgPQgEgMAAgNQAAgXAPgVQAVgbAkAAQBDAAAFBJQAAAQgJAQQADALABAOQAAAVgMASIACATQAAAJgCAIIACADQAJARABATQAPgDARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQAzAAAPAoIAIgNQAVgaAjgBQAtAAARAgIAHgKQAUgaAkAAQAlAAATAZIADgEQAUgaAkAAQAsAAARAeIADgEQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBGIA2AAIACABIALAAIAAgJQAAgZAQgUQAUgaAkAAQAwAAAQAkIAAgBQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAnIAIgNQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAYQAjgYBlAAQBxAAAhAjQARARgGAUQAAAggRANQgiAahqAAQheABgmgYQghAYhegBQhRAAglgUQgbAUg7AAQg2ABgcgSQgTASgcgBQgoAAgSgbIgCABQgUAagjAAQgtAAgSgiIgBgDQgEAJgGAIQgUAZgkAAQgkAAgTgYQgTATggAAQgsAAgSgiIgDgGQgEAIgFAGQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqABgSgfQgVAZgjAAQgrABgTgjIAAgBQgEAKgHAKQgUAZgkAAQgsAAgSgiIgBgDIgBACQgVAZgjAAQgoAAgTgdIhPAAQACAKABAMQAbARACAqIAAADQAsAMAEA6IAAAJQATAPAEAhQAWASADAoQAAAOgFAMQAGAMADAPQAcAQACAuQAAAYgRAWQgUAagjAAQgtAAgSgjg");
	var mask_graphics_219 = new cjs.Graphics().p("ACdF+QgPAHgSAAQgtAAgSgjQgGgMgCgNQgMgJgIgOQgKgTAAgTQAAgPAGgNIgBgBQgHgOgCgPQgJgHgGgMQgJgSAAgUIABgKQgJgIgGgMIgJglIAAgCQgagHgNgZQgJgRgBgTQgLgIgIgNQgFgKgDgLQgJADgMAAQgqAAgSgfIgEAFQgVAagjAAQgmAAgTgaIgDAEQgUAbgjAAQgrAAgTghIgHALQgVAagjAAQgsABgSgkIgCgGQgEAIgGAHQgUAagkAAQgsABgSgkIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAANgGANIABALQAAASgIAQQAHALAEAQQAGAdgEAeQAAA0gFAPQgOAwg1AAQg6AAgNg4QgEgSABgVIACgVQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgMIgBgLIAAgCQgJADgLgBQgYABgQgLQgSAQgcAAQgsgBgSgiIgDgHQgDAIgGAIQgUAagkAAQgrgBgTgiQgFgLgDgLQgEANgKAMQgUAagjAAQgsABgSgkIgFgUQgDASgOARQgVAagiAAQgtgBgSgiIgDgIIgIALQgUAagkAAQgrABgTgkIgCgGQgDAIgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgZAQgUQAUgaAkgBQAyABAQAmIAIgMQAUgaAkgBQAzAAAPAnIAIgMQAUgaAjgBQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgPAKgOQATgaAlgBQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgJQAAgSAJgPQgEgMAAgNQAAgXAPgVQAVgbAkAAQBDAAAFBJQAAAQgJAQQADALABAOQAAAVgMASIACATQAAAJgCAIIACADQAJARABATQAPgDARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgaAkgBQAzAAAPAoIAIgNQAVgaAjgBQAtAAARAgIAHgKQAUgaAkAAQAlAAATAZIADgEQAUgaAkAAQAsAAARAeIADgEQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBGIA2AAIACABIALAAIAAgJQAAgZAQgUQAUgaAkAAQAwAAAQAkIAAgBQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAnIAIgNQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAYQAjgYBlAAQBxAAAhAjQARARgGAUQAAAggRANQgiAahqAAQheABgmgYQghAYhegBQhRAAglgUQgbAUg7AAQg2ABgcgSQgTASgcgBQgoAAgSgbIgCABQgUAagjAAQgtAAgSgiIgBgDQgEAJgGAIQgUAZgkAAQgkAAgTgYQgTATggAAQgsAAgSgiIgDgGQgEAIgFAGQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqABgSgfQgVAZgjAAQgrABgTgjIAAgBQgEAKgHAKQgUAZgkAAQgsAAgSgiIgBgDIgBACQgVAZgjAAQgoAAgTgdIhPAAQACAKABAMQAbARACAqIAAADQAsAMAEA6IAAAJQATAPAEAhQAWASADAoQAAAOgFAMQAFAKACAMQANgFAOABQBEAAAEBHQAAAYgRAWQgUAagjAAQgUAAgOgHg");
	var mask_graphics_220 = new cjs.Graphics().p("ADmF1QgQALgXAAQgUAAgOgHQgPAHgSAAQgtAAgSgjQgGgMgCgNQgMgIgIgPQgKgTAAgTQAAgPAGgNIgBgBQgHgOgCgOQgJgIgGgLQgJgTAAgUIABgKQgJgIgGgLIgJgmIAAgCQgagHgNgZQgJgRgBgSQgLgJgIgNQgFgKgDgKQgJACgMAAQgqAAgSgfIgEAFQgVAagjAAQgmAAgTgaIgDAEQgUAbgjAAQgrAAgTghIgHAMQgVAagjAAQgsAAgSgjIgCgHQgEAIgGAIQgUAagkAAQgsAAgSgjIgCgHQgHAWgYAIQgOAFgtAAIABAHQAAAOgGAMIABAMQAAARgIAQQAHALAEAQQAGAdgEAeQAAA0gFAPQgOAwg1AAQg6AAgNg4QgEgRABgWIACgVQAAg0AEgOIAEgLIgDgFIgKglQAAgPAGgMIgBgLIAAgCQgJADgLAAQgYAAgQgLQgSAQgcAAQgsAAgSgjIgDgHQgDAIgGAIQgUAagkAAQgrAAgTgjQgFgLgDgLQgEANgKANQgUAagjAAQgsAAgSgjIgFgVQgDASgOARQgVAagiAAQgtAAgSgjIgDgIIgIAMQgUAagkAAQgrAAgTgjIgCgHQgDAIgGAIQgVAagjAAQgzAAgPgnIgIANQgVAagjAAQhGAAgChJQAAgYAQgVQAUgaAkAAQAyAAAQAnIAIgNQAUgaAkAAQAzAAAPAnIAIgNQAUgaAjAAQA0AAAPAqIAHgLQAUgbAkAAQA4AAANA0QAEgQAKgOQATgaAlAAQA7AAALA5QAEgNAKgNQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgOAaAAQAMAAAJACIABgFIgCgDIgKgmQAAgVAMgSQgCgKAAgJQAAgRAJgQQgEgMAAgNQAAgXAPgVQAVgbAkAAQBDAAAFBJQAAARgJAPQADAMABAOQAAAVgMASIACASQAAAJgCAIIACADQAJARABATQAPgDARABIAGgBQAlAAAMAhQAEgJAGgIQAUgaAkAAQAzAAAPAnIAIgNQAVgaAjAAQAtAAARAgIAHgLQAUgaAkAAQAlAAATAZIADgEQAUgaAkAAQAsAAARAeIADgEQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBGIA2AAIACABIALAAIAAgJQAAgYAQgVQAUgaAkAAQAwAAAQAkIAAAAQAUgbAkAAQAvAAAQAjQAEgJAHgJQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAnIAIgNQAUgaAkAAQAnAAASAXQATgTAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAYQAjgYBlAAQBxAAAhAjQARARgGAUQAAAggRAOQgiAahqAAQheAAgmgYQghAYheAAQhRAAglgVQgbAVg7AAQg2AAgcgSQgTASgcAAQgoAAgSgcIgCACQgUAagjAAQgtAAgSgjIgBgDQgEAJgGAIQgUAZgkAAQgkAAgTgYQgTAUggAAQgsAAgSgjIgDgFQgEAHgFAHQgVAagiAAQgrAAgSggIgEAGQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgjIAAAAQgEAKgHAJQgUAZgkAAQgsAAgSgiIgBgCIgBABQgVAagjAAQgoAAgTgdIhPgBQACAKABAMQAbARACArIAAADQAsALAEA6IAAAJQATAQAEAgQAWASADAoQAAAOgFANQAFAJACAMQANgEAOAAQAjAAASASQAQgJAWAAQBDAAAFBIQAAAYgQAVQgVAbgjAAQghAAgTgVg");
	var mask_graphics_221 = new cjs.Graphics().p("AE8GAQgPAHgTAAQghAAgTgUQgQALgXAAQgUAAgOgHQgPAHgSAAQgtAAgSgjQgGgMgCgOQgMgIgIgOQgKgTAAgTQAAgPAGgNIgBgBQgHgOgCgPQgJgHgGgMQgJgSAAgUIABgLQgJgHgGgMIgJglIAAgCQgagIgNgYQgJgSgBgSQgLgIgIgNQgFgLgDgKQgJADgMAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAAOgGAMIABALQAAASgIAQQAHALAEAQQAGAcgEAfQAAA0gFAPQgOAwg1AAQg6AAgNg4QgEgSABgWIACgUQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgMIgBgMIAAgBQgJACgLAAQgYAAgQgLQgSAQgcAAQgsAAgSgjIgDgGQgDAIgGAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgZAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgKQAAgRAJgPQgEgMAAgNQAAgYAPgUQAVgbAkAAQBDAAAFBIQAAARgJAQQADALABAOQAAAVgMASIACATQAAAIgCAJIACADQAJARABASQAPgCARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAzAAAPAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBFIA2ABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAwAAAQAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAmIAIgMQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAXQAjgXBlAAQBxAAAhAiQARARgGAUQAAAhgRANQgiAahqAAQheAAgmgXQghAXheAAQhRAAglgUQgbAUg7AAQg2AAgcgRQgTARgcAAQgoAAgSgbIgCABQgUAagjAAQgtAAgSgiIgBgDQgEAIgGAIQgUAagkAAQgkAAgTgZQgTAUggAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgiIAAgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgVAagjAAQgoAAgTgdIhPAAQACAKABALQAbARACArIAAADQAsAMAEA6IAAAIQATAQAEAgQAWATADAoQAAANgFANQAFAJACAMQANgEAOAAQAjAAASATQAQgKAWAAQAbAAARAMQAPgHASAAQBEAAAEBIQAAAZgQAVQgVAagjAAQgaAAgRgMg");
	var mask_graphics_222 = new cjs.Graphics().p("AGNGDQgQAJgWAAQgaAAgRgMQgPAHgTAAQghAAgTgUQgQALgXAAQgUAAgOgHQgPAHgSAAQgtAAgSgjQgGgMgCgOQgMgIgIgOQgKgTAAgTQAAgPAGgNIgBgBQgHgOgCgPQgJgHgGgMQgJgSAAgUIABgLQgJgHgGgMIgJglIAAgCQgagIgNgYQgJgSgBgSQgLgIgIgNQgFgLgDgKQgJADgMAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDAEQgUAagjAAQgrAAgTggIgHALQgVAagjAAQgsAAgSgjIgCgHQgEAJgGAHQgUAagkAAQgsAAgSgjIgCgHQgHAXgYAIQgOAFgtAAIABAHQAAAOgGAMIABALQAAASgIAQQAHALAEAQQAGAcgEAfQAAA0gFAPQgOAwg1AAQg6AAgNg4QgEgSABgWIACgUQAAg0AEgOIAEgLIgDgFIgKgmQAAgOAGgMIgBgMIAAgBQgJACgLAAQgYAAgQgLQgSAQgcAAQgsAAgSgjIgDgGQgDAIgGAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgUQgDARgOARQgVAagiAAQgtAAgSgjIgDgHIgIALQgUAagkAAQgrAAgTgjIgCgHQgDAJgGAHQgVAagjAAQgzAAgPgmIgIAMQgVAagjAAQhGAAgChIQAAgZAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAUgbAjAAQA0AAAPAqIAHgKQAUgbAkAAQA4AAANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgMQAUgbAjAAQAsAAASAjIADAGQAEgHAFgHQAUgbAkAAQAaAAAQAKQASgPAaAAQAMAAAJACIABgEIgCgEIgKglQAAgVAMgSQgCgKAAgKQAAgRAJgPQgEgMAAgNQAAgYAPgUQAVgbAkAAQBDAAAFBIQAAARgJAQQADALABAOQAAAVgMASIACATQAAAIgCAJIACADQAJARABASQAPgCARAAIAGAAQAlAAAMAhQAEgJAGgIQAUgbAkAAQAzAAAPAoIAIgNQAVgbAjAAQAtAAARAgIAHgKQAUgbAkAAQAlAAATAaIADgEQAUgaAkAAQAsAAARAdIADgDQAUgaAkAAQAZAAARAKQASgPAbAAQBAAAAHBFIA2ABIACAAIALAAIAAgIQAAgZAQgUQAUgaAkAAQAwAAAQAjIAAAAQAUgaAkAAQAvAAAQAiQAEgJAHgIQAUgaAjAAQAsAAARAdQAUgYAjAAQAsAAARAeIADgEQAUgaAkAAQAyAAAPAmIAIgMQAUgaAkAAQAnAAASAWQATgSAeAAQAxAAAPAlQAEgIAFgHQAUgaAlAAQApAAASAaIAAAAQAUgaAkAAQAgAAASAQQAbgQA0AAQA4AAAcATQAjgTBVAAQBWAAAlAXQAjgXBlAAQBxAAAhAiQARARgGAUQAAAhgRANQgiAahqAAQheAAgmgXQghAXheAAQhRAAglgUQgbAUg7AAQg2AAgcgRQgTARgcAAQgoAAgSgbIgCABQgUAagjAAQgtAAgSgiIgBgDQgEAIgGAIQgUAagkAAQgkAAgTgZQgTAUggAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSgfIgEAFQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgiIAAgBQgEAKgHAJQgUAagkAAQgsAAgSgjIgBgCIgBABQgVAagjAAQgoAAgTgdIhPAAQACAKABALQAbARACArIAAADQAsAMAEA6IAAAIQATAQAEAgQAWATADAoQAAANgFANQAFAJACAMQANgEAOAAQAjAAASATQAQgKAWAAQAbAAARAMQAPgHASAAQAYAAAQAJQAQgJAVAAQBEAAAEBIQAAAZgRAVQgUAagjAAQgXAAgQgJg");
	var mask_graphics_223 = new cjs.Graphics().p("AHpFzQgUAXghAAQgXAAgQgKQgQAKgWAAQgaAAgRgNQgPAIgTAAQghAAgTgVQgQALgXAAQgUAAgOgGQgPAGgSAAQgtAAgSgiQgGgMgCgOQgMgIgIgPQgKgTAAgTQAAgOAGgNIgBgBQgHgOgCgPQgJgIgGgLQgJgSAAgVIABgKQgJgHgGgMIgJglIAAgDQgagHgNgYQgJgSgBgSQgLgIgIgNQgFgLgDgKQgJADgMAAQgqAAgSggIgEAGQgVAagjAAQgmAAgTgaIgDADQgUAbgjAAQgrAAgTghIgHAMQgVAagjAAQgsAAgSgjIgCgHQgEAIgGAIQgUAagkAAQgsAAgSgjIgCgHQgHAWgYAIQgOAFgtABIABAHQAAAOgGAMIABALQAAASgIAQQAHALAEAQQAGAcgEAeQAAA1gFAPQgOAvg1AAQg6AAgNg3QgEgSABgWIACgVQAAg0AEgNIAEgLIgDgGIgKglQAAgOAGgMIgBgMIAAgBQgJACgLAAQgYAAgQgLQgSAQgcAAQgsAAgSgjIgDgGQgDAIgGAHQgUAagkAAQgrAAgTgjQgFgLgDgKQgEANgKAMQgUAagjAAQgsAAgSgjIgFgVQgDASgOARQgVAagiAAQgtAAgSgjIgDgIIgIAMQgUAagkAAQgrAAgTgjIgCgHQgDAIgGAIQgVAagjAAQgzAAgPgnIgIANQgVAagjAAQhGAAgChIQAAgZAQgUQAUgbAkAAQAyAAAQAnIAIgMQAUgbAkAAQAzAAAPAnIAIgMQAUgbAjAAQA0AAAPAqIAHgLQAUgbAkAAQA4ABANAzQAEgQAKgNQATgbAlAAQA7AAALA5QAEgNAKgNQAUgbAjAAQAsAAASAjIADAHQAEgIAFgHQAUgbAkAAQAaAAAQAKQASgOAaAAQAMAAAJACIABgFIgCgDIgKglQAAgVAMgTQgCgJAAgKQAAgRAJgPQgEgMAAgNQAAgYAPgVQAVgaAkgBQBDAAAFBJQAAARgJAQQADALABAOQAAAVgMASIACATQAAAIgCAJIACACQAJASABASQAPgDARABIAGAAQAlAAAMAgQAEgIAGgIQAUgbAkAAQAzAAAPAnIAIgMQAVgbAjAAQAtAAARAgIAHgLQAUgaAkAAQAlAAATAaIADgFQAUgZAkAAQAsgBARAeIADgEQAUgZAkAAQAZAAARAJQASgPAbABQBAgBAHBGIA2ABIACAAIALAAIAAgIQAAgZAQgUQAUgbAkAAQAwAAAQAkIAAAAQAUgbAkABQAvAAAQAiQAEgJAHgIQAUgbAjAAQAsAAARAeQAUgYAjAAQAsAAARAeIADgFQAUgZAkAAQAyAAAPAmIAIgNQAUgZAkAAQAnAAASAWQATgSAeAAQAxgBAPAlQAEgHAFgIQAUgZAlAAQApAAASAaIAAgBQAUgZAkAAQAgAAASAPQAbgPA0AAQA4AAAcATQAjgTBVAAQBWAAAlAXQAjgXBlAAQBxgBAhAjQARARgGAUQAAAggRAOQgiAahqAAQheAAgmgXQghAXheAAQhRAAglgUQgbAUg7AAQg2AAgcgSQgTASgcAAQgoAAgSgcIgCACQgUAagjAAQgtAAgSgiIgBgEQgEAJgGAIQgUAagkgBQgkABgTgZQgTAUggAAQgsAAgSgiIgDgGQgEAHgFAHQgVAagiAAQgrAAgSggIgEAGQgVAagiAAQgqAAgSgeQgVAZgjAAQgrAAgTgjIAAAAQgEAKgHAJQgUAagkgBQgsAAgSgiIgBgCIgBABQgVAagjAAQgoAAgTgdIhPAAQACAJABAMQAbARACArIAAADQAsALAEA7IAAAIQATAQAEAgQAWASADApQAAANgFANQAFAJACAMQANgEAOAAQAjAAASATQAQgKAWAAQAbAAARAMQAPgHASgBQAYAAAQAJQAQgJAVAAQApAAASAbQATgWAgABQAsAAASAiQAKATAAATQAAAYgQAVQgVAbgjAAQgmgBgTgbg");
	var mask_graphics_224 = new cjs.Graphics().p("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");
	var mask_graphics_225 = new cjs.Graphics().p("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");
	var mask_graphics_226 = new cjs.Graphics().p("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");
	var mask_graphics_227 = new cjs.Graphics().p("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");
	var mask_graphics_228 = new cjs.Graphics().p("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");
	var mask_graphics_229 = new cjs.Graphics().p("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");
	var mask_graphics_230 = new cjs.Graphics().p("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");
	var mask_graphics_231 = new cjs.Graphics().p("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");
	var mask_graphics_232 = new cjs.Graphics().p("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");
	var mask_graphics_333 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGQgqgJg6g6IgGgHQBngLhVACIhZAAQgbAxg0AAQglAAgZgUQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQoZiwAeDEImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_334 = new cjs.Graphics().p("AunEBQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbQgnAzhDgBQhTABgjhCQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAYQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQoZiwAeDEImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCg");
	var mask_graphics_335 = new cjs.Graphics().p("A56FBQgLgWgFgaQgDgPAAgJQAAguAdgmIgKgRQgTglAAgkIAAgCQgWgFgQgMQhEAJhrAAQhQAAgfgwQgPgXAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAXQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQoZivAeDDImjgCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGIgJgCQgHAdgVAbIALARQATAiABAlQAAAvgfAoQgnAyhDAAQhTAAgjhDg");
	var mask_graphics_336 = new cjs.Graphics().p("A5oGmQgSgjAAglQAAgvAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgJQAAguAdgmIgKgRQgTglAAgjIAAgCQgWgFgQgMQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABXieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQoZivAeDDImjgCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgwANgXQiQgahrAKQg8AGhNAYQg7ARgcgGIgJgCQgHAdgVAbIALARQATAiABAlQAAAvgfAoIgDAEQATAPANAXQAUAmAAAiQAAAtgfApQgnAyhCAAQhVAAgihCg");
	var mask_graphics_337 = new cjs.Graphics().p("A5EIHQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgjAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgmIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA1oLgBQmqABiHgrQgjgLgXgTQgQgNgRAAQoZixAeDFImjgCIj2ACQAWA5AAA4QAACPh0gBQh0AAgbiCQgKgwAFg0QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAgABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAkQAZAQAQAdQAUAmAAAjQAAArggAqQgpAzhAgBQhVABgihCg");
	var mask_graphics_338 = new cjs.Graphics().p("A26InIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgjAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgsAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQoZixAeDFImjgCIj2ACQAWA5AAA4QAACPh0gBQh0AAgbiCQgKgvAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAkQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAkQAYAQAQAcIAVgBQBQAAAlBCQAVAnAAAhQAAAsghAqQgoAzhBgBQhUABgihCg");
	var mask_graphics_339 = new cjs.Graphics().p("A0MJUQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgjAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgsAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAxIABADQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7gBQBkABAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQoZixAeDFImjgCIj2ACQAWA5AAA4QAACPh0gBQh0AAgbiCQgKgvAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAkQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAkQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBWAAAkBCQASAjACAlQAAAtghApQgoAzhFgBQg7ABgkgeg");
	var mask_graphics_340 = new cjs.Graphics().p("Ax/JYQgVAHgZAAQg7AAgkgeQgZAMgfAAQhUAAgihBIgTABQhVAAgihCQgSgjAAgmQAAgnAWgjQgZgQgPgdQgSgkAAglQAAguAdgnIADgEQgTgPgNgZQgLgWgFgaQgDgOAAgJQAAguAdgmIgKgRQgTgkAAglIAAgCQgWgEgQgNQhEAJhrAAQhQAAgfgvQgPgZAAgcQAAhBA7gZQBIggDFAAQAsAAAbASIAFgGQAdgqAzAAQA7AAAbAxIABACQEVjPCOBPQAtAaAbA0IAQAgQgUhlAAgYQAAgoAWgfQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg5QAZgTgPgbQgUgbAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA5QQwAMD1AeQBpAOASAWQAGAIgBAOIgEAYQAABZieApQjOA1oLAAQmqAAiHgrQgjgLgXgTQgQgOgRAAQoZiwAeDEImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiDQgKguAFg2QAFgwANgYQiQgZhrAJQg8AGhNAYQg7ASgcgGIgJgCQgHAdgVAbIALASQATAhABAlQAAAugfAoIgDAEQATAPANAXQAUAmAAAiQAAAngYAkQAYAQAQAdIAVgCQA2AAAiAfQAbgMAkgBQBFAAAlAsQAVgHAYAAQBQAAAlBDQASAiACAlQAAAugfAoQgoAzhCAAQhGAAgjgsg");
	var mask_graphics_341 = new cjs.Graphics().p("AwfKUQgSgkAAgpQAAgMABgLQgygHgdgjQgVAHgZAAQg7AAgkgeQgZAMgfAAQhUAAgihCIgTACQhVAAgihCQgSgjAAgmQAAgnAWgjQgZgRgPgdQgSgjAAglQAAgvAdgmIADgEQgTgQgNgXQgLgWgFgaQgDgPAAgJQAAguAdgmIgKgRQgTglAAgkIAAgCQgWgFgQgMQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQoZiwAeDEImjgCIj2ACQAWA5AAA5QAACOh0AAQh0AAgbiCQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGIgJgCQgHAdgVAbIALARQATAiABAlQAAAvgfAnIgDAEQATAPANAXQAUAmAAAiQAAAngYAkQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlAsQAVgHAYAAQA4AAAjAhQAlgqA/AAQBRAAAkBCQAVAmAAAiQAAAuggApQgYAdghAMQAGAUAAAUQAAArgYAoQglA7hLAAQhUAAgjhCg");
	var mask_graphics_342 = new cjs.Graphics().p("AvELmQgSgjAAglQAAgQADgPQgzgNgZgwQgSgkAAgpQAAgMABgLQgygHgdgjQgVAHgZAAQg7AAgkgeQgZAMgfAAQhUAAgihCIgTACQhVAAgihCQgSgjAAgmQAAgnAWgjQgZgRgPgdQgSgjAAglQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgJQAAguAdgmIgKgRQgTglAAgkIAAgCQgWgFgQgMQhEAJhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsAAAbARIAFgGQAdgpAzAAQA7AAAbAxIABACQEVjPCOBPQAtAZAbA1IAQAfQgUhkAAgZQAAgoAWgeQAcgmAzAAQCNAAAAE2QERACDJAIQHaAABPg6QAZgSgPgcQgUgaAAgIQAAgiAPgdQAagxA7AAQBkAAAsBfQAbA4AAA4QQwAND1AeQBpAOASAWQAGAIgBAOIgEAYQAABYieApQjOA2oLAAQmqAAiHgrQgjgMgXgSQgQgOgRAAQoZiwAeDEImjgCIj2ACQAWA5AAA5QAACPh0AAQh0AAgbiDQgKgwAFg1QAFgwANgYQiQgahrAKQg8AGhNAYQg7ASgcgGIgJgCQgHAdgVAbIALARQATAiABAlQAAAvgfAoIgDAEQATAPANAXQAUAmAAAhQAAAngYAkQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlAsQAVgHAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQBSAAAkBCQAUAlAAAjQAAAughApQgnAxhCAAQg+AAgjglQgUAUgaAJQAGAUAAAUQAAATgEASQAxANAaAwQAVAmAAAiQAAAtggApQgoAyhBAAQhUAAgjhCg");
	var mask_graphics_343 = new cjs.Graphics().p("At7NDQgSgjAAgnQAAgcALgYQgrgQgXgqQgSgkAAgkQAAgQADgPQgzgNgZgxQgSgjAAgpQAAgMABgLQgygHgdgjQgVAGgZAAQg7ABgkgeQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgiAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAyIABACQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7AAQBkAAAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQoZixAeDFImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAjQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlArQAVgGAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQAqAAAeASQAigbAyAAQBJAAAkA0QAUAQAPAZQASAiADAlQAAAtghAqQgmAwg9ACQgXAJgcAAQg8AAgjgiQgUAHgXgBQg+AAgjgkQgUATgaAJQAGAVAAAUQAAASgEATQAxANAaAwQAVAmAAAiQAAAcgMAaQApAPAXApQAWAnAAAiQAAAughAoQgnAyhCgBQhVABgihBg");
	var mask_graphics_344 = new cjs.Graphics().p("At7NDQgSgjAAgnQAAgcALgYQgrgQgXgqQgSgkAAgkQAAgQADgPQgzgNgZgxQgSgjAAgpQAAgMABgLQgygHgdgjQgVAGgZAAQg7ABgkgeQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgiAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAyIABACQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7AAQBkAAAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQiPgvhngVQAFATAAAQQAAAsggAqQgoAzhBgBQhVABghhCQgIgRgFgQIACAPImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAjQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlArQAVgGAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQAqAAAeASQAigbAyAAQBJAAAkA0QAUAQAPAZQASAiADAlQAAAtghAqQgmAwg9ACQgXAJgcAAQg8AAgjgiQgUAHgXgBQg+AAgjgkQgUATgaAJQAGAVAAAUQAAASgEATQAxANAaAwQAVAmAAAiQAAAcgMAaQApAPAXApQAWAnAAAiQAAAughAoQgnAyhCgBQhVABgihBg");
	var mask_graphics_345 = new cjs.Graphics().p("At7NDQgSgjAAgnQAAgcALgYQgrgQgXgqQgSgkAAgkQAAgQADgPQgzgNgZgxQgSgjAAgpQAAgMABgLQgygHgdgjQgVAGgZAAQg7ABgkgeQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgiAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAyIABACQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7AAQBkAAAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQiPgvhngVQAFATAAAQQAAALgCALQAQAOALAVQASAhACAmQAAAtgfApQgoAyhCAAQhVAAgihBQgSgjAAgmQAAgJABgKQgQgPgLgVQgIgRgFgQIACAPImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAjQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlArQAVgGAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQAqAAAeASQAigbAyAAQBJAAAkA0QAUAQAPAZQASAiADAlQAAAtghAqQgmAwg9ACQgXAJgcAAQg8AAgjgiQgUAHgXgBQg+AAgjgkQgUATgaAJQAGAVAAAUQAAASgEATQAxANAaAwQAVAmAAAiQAAAcgMAaQApAPAXApQAWAnAAAiQAAAughAoQgnAyhCgBQhVABgihBg");
	var mask_graphics_346 = new cjs.Graphics().p("At7NDQgSgjAAgnQAAgcALgYQgrgQgXgqQgSgkAAgkQAAgQADgPQgzgNgZgxQgSgjAAgpQAAgMABgLQgygHgdgjQgVAGgZAAQg7ABgkgeQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgiAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAyIABACQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7AAQBkAAAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQiPgvhngVQAFATAAAQQAAALgCALQAQAOALAVQASAhACAmQAAAXgIAWQAaARARAfQAUAlAAAjQAAAsggAqQgoAyhBAAQhVAAgihCQgSgjAAgmQAAgWAHgVQgcgRgQgfQgSgjAAgmQAAgJABgKQgQgPgLgVQgIgRgFgQIACAPImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAjQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlArQAVgGAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQAqAAAeASQAigbAyAAQBJAAAkA0QAUAQAPAZQASAiADAlQAAAtghAqQgmAwg9ACQgXAJgcAAQg8AAgjgiQgUAHgXgBQg+AAgjgkQgUATgaAJQAGAVAAAUQAAASgEATQAxANAaAwQAVAmAAAiQAAAcgMAaQApAPAXApQAWAnAAAiQAAAughAoQgnAyhCgBQhVABgihBg");
	var mask_graphics_347 = new cjs.Graphics().p("At7NDQgSgjAAgnQAAgcALgYQgrgQgXgqQgSgkAAgkQAAgQADgPQgzgNgZgxQgSgjAAgpQAAgMABgLQgygHgdgjQgVAGgZAAQg7ABgkgeQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgiAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAyIABACQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7AAQBkAAAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQiPgvhngVQAFATAAAQQAAALgCALQAQAOALAVQASAhACAmQAAAXgIAWQAaARARAfIAIARIAMgBQBQAAAkBCQAVAmAAAiQAAAsggAoQgpAzhAAAQhVAAgihCIgIgPIgKAAQhVAAgihCQgSgjAAgmQAAgWAHgVQgcgRgQgfQgSgjAAgmQAAgJABgKQgQgPgLgVQgIgRgFgQIACAPImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAjQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlArQAVgGAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQAqAAAeASQAigbAyAAQBJAAAkA0QAUAQAPAZQASAiADAlQAAAtghAqQgmAwg9ACQgXAJgcAAQg8AAgjgiQgUAHgXgBQg+AAgjgkQgUATgaAJQAGAVAAAUQAAASgEATQAxANAaAwQAVAmAAAiQAAAcgMAaQApAPAXApQAWAnAAAiQAAAughAoQgnAyhCgBQhVABgihBg");
	var mask_graphics_348 = new cjs.Graphics().p("At7NDQgSgjAAgnQAAgcALgYQgrgQgXgqQgSgkAAgkQAAgQADgPQgzgNgZgxQgSgjAAgpQAAgMABgLQgygHgdgjQgVAGgZAAQg7ABgkgeQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgiAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAyIABACQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7AAQBkAAAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQiPgvhngVQAFATAAAQQAAALgCALQAQAOALAVQASAhACAmQAAAXgIAWQAaARARAfIAIARIAMgBQA2ABAiAeIAGgHQAmg0BGAAQBQAAAkBDQAUAmAAAiQAAAsggApQgnAyhBAAQg6AAgigfIgFAHQgpAzhAAAQhVAAgihCIgIgPIgKAAQhVAAgihCQgSgjAAgmQAAgWAHgVQgcgRgQgfQgSgjAAgmQAAgJABgKQgQgPgLgVQgIgRgFgQIACAPImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAjQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlArQAVgGAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQAqAAAeASQAigbAyAAQBJAAAkA0QAUAQAPAZQASAiADAlQAAAtghAqQgmAwg9ACQgXAJgcAAQg8AAgjgiQgUAHgXgBQg+AAgjgkQgUATgaAJQAGAVAAAUQAAASgEATQAxANAaAwQAVAmAAAiQAAAcgMAaQApAPAXApQAWAnAAAiQAAAughAoQgnAyhCgBQhVABgihBg");
	var mask_graphics_349 = new cjs.Graphics().p("At7NDQgSgjAAgnQAAgcALgYQgrgQgXgqQgSgkAAgkQAAgQADgPQgzgNgZgxQgSgjAAgpQAAgMABgLQgygHgdgjQgVAGgZAAQg7ABgkgeQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgiAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAyIABACQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7AAQBkAAAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQiPgvhngVQAFATAAAQQAAALgCALQAQAOALAVQASAhACAmQAAAXgIAWQAaARARAfIAIARIAMgBQA2ABAiAeIAGgHQAmg0BGAAQBFABAkAxQAggWAtAAQBSAAAjBCQAUAkAAAkQAAAtgfAnQgnAzhDAAQhJAAgjgxQggAWgqAAQg6AAgigfIgFAHQgpAzhAAAQhVAAgihCIgIgPIgKAAQhVAAgihCQgSgjAAgmQAAgWAHgVQgcgRgQgfQgSgjAAgmQAAgJABgKQgQgPgLgVQgIgRgFgQIACAPImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAjQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlArQAVgGAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQAqAAAeASQAigbAyAAQBJAAAkA0QAUAQAPAZQASAiADAlQAAAtghAqQgmAwg9ACQgXAJgcAAQg8AAgjgiQgUAHgXgBQg+AAgjgkQgUATgaAJQAGAVAAAUQAAASgEATQAxANAaAwQAVAmAAAiQAAAcgMAaQApAPAXApQAWAnAAAiQAAAughAoQgnAyhCgBQhVABgihBg");
	var mask_graphics_350 = new cjs.Graphics().p("At7NDQgSgjAAgnQAAgcALgYQgrgQgXgqQgSgkAAgkQAAgQADgPQgzgNgZgxQgSgjAAgpQAAgMABgLQgygHgdgjQgVAGgZAAQg7ABgkgeQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgiAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAyIABACQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7AAQBkAAAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQiPgvhngVQAFATAAAQQAAALgCALQAQAOALAVQASAhACAmQAAAXgIAWQAaARARAfIAIARIAMgBQA2ABAiAeIAGgHQAmg0BGAAQBFABAkAxQAggWAtAAQA6AAAiAhIABAAQAng0BFAAQBQAAAkBDQAVAnAAAhQAAAsggAoQgoAzhBAAQgmAAgcgNQAWAQAOAbQAUAlAAAjQAAAsgfApQgoAzhBgBQhVABgihCQgSgkAAglQAAgtAdgoIADgDQgkgMgWgeQggAWgqAAQg6AAgigfIgFAHQgpAzhAAAQhVAAgihCIgIgPIgKAAQhVAAgihCQgSgjAAgmQAAgWAHgVQgcgRgQgfQgSgjAAgmQAAgJABgKQgQgPgLgVQgIgRgFgQIACAPImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAjQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlArQAVgGAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQAqAAAeASQAigbAyAAQBJAAAkA0QAUAQAPAZQASAiADAlQAAAtghAqQgmAwg9ACQgXAJgcAAQg8AAgjgiQgUAHgXgBQg+AAgjgkQgUATgaAJQAGAVAAAUQAAASgEATQAxANAaAwQAVAmAAAiQAAAcgMAaQApAPAXApQAWAnAAAiQAAAughAoQgnAyhCgBQhVABgihBgAM3AaIgCADIAMAFIgKgIg");
	var mask_graphics_351 = new cjs.Graphics().p("At7NDQgSgjAAgnQAAgcALgYQgrgQgXgqQgSgkAAgkQAAgQADgPQgzgNgZgxQgSgjAAgpQAAgMABgLQgygHgdgjQgVAGgZAAQg7ABgkgeQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgiAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAyIABACQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7AAQBkAAAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQiPgvhngVQAFATAAAQQAAALgCALQAQAOALAVQASAhACAmQAAAXgIAWQAaARARAfIAIARIAMgBQA2ABAiAeIAGgHQAmg0BGAAQBFABAkAxQAggWAtAAQA6AAAiAhIABAAQAng0BFAAQA5AAAjAiQAmgqA/gBQBQAAAjBDQAVAmAAAiQAAAsggApQgnAyhBAAQg8AAgjgiQgmArg8AAQgmAAgcgNQAWAQAOAbQAUAlAAAjIgBARQApAPAXAqQAQAdADAbQA1AMAcAzQAUAlAAAjQAAAtgfAoQgnAzhDAAQhUAAgihCQgOgcgDgdQg6gLgag0QgSgjAAglIABgQQgsgPgVgqQgSgkAAglQAAgtAdgoIADgDQgkgMgWgeQggAWgqAAQg6AAgigfIgFAHQgpAzhAAAQhVAAgihCIgIgPIgKAAQhVAAgihCQgSgjAAgmQAAgWAHgVQgcgRgQgfQgSgjAAgmQAAgJABgKQgQgPgLgVQgIgRgFgQIACAPImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAjQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlArQAVgGAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQAqAAAeASQAigbAyAAQBJAAAkA0QAUAQAPAZQASAiADAlQAAAtghAqQgmAwg9ACQgXAJgcAAQg8AAgjgiQgUAHgXgBQg+AAgjgkQgUATgaAJQAGAVAAAUQAAASgEATQAxANAaAwQAVAmAAAiQAAAcgMAaQApAPAXApQAWAnAAAiQAAAughAoQgnAyhCgBQhVABgihBgAM3AaIgCADIAMAFIgKgIg");
	var mask_graphics_352 = new cjs.Graphics().p("At7NDQgSgjAAgnQAAgcALgYQgrgQgXgqQgSgkAAgkQAAgQADgPQgzgNgZgxQgSgjAAgpQAAgMABgLQgygHgdgjQgVAGgZAAQg7ABgkgeQgZALgfAAQhUABgihCIgTABQhVABgihCQgSgkAAglQAAgoAWgjQgZgQgPgdQgSgiAAgmQAAguAdgmIADgEQgTgQgNgYQgLgWgFgaQgDgPAAgKQAAgtAdgnIgKgQQgTglAAgkIAAgCQgWgFgQgNQhEAKhrAAQhQAAgfgwQgPgYAAgdQAAhAA7gaQBIgfDFAAQAsgBAbASIAFgGQAdgpAzAAQA7gBAbAyIABACQEVjPCOBOQAtAaAbA1IAQAfQgUhkAAgZQAAgoAWgfQAcglAzgBQCNABAAE2QERACDJAIQHagBBPg5QAZgSgPgcQgUgaAAgIQAAgiAPgeQAagwA7AAQBkAAAsBfQAbA3AAA5QQwAMD1AfQBpANASAXQAGAHgBAOIgEAZQAABYieApQjOA2oLgBQmqABiHgsQgjgLgXgTQgQgNgRAAQiPgvhngVQAFATAAAQQAAALgCALQAQAOALAVQASAhACAmQAAAXgIAWQAaARARAfIAIARIAMgBQA2ABAiAeIAGgHQAmg0BGAAQBFABAkAxQAggWAtAAQA6AAAiAhIABAAQAng0BFAAQA5AAAjAiQAmgqA/gBQBHAAAkA2QAIgJAKgHQBCgvC2AAQBRAAAkBDQAUAmAAAlQAACNjXAAQiHAAg0g3IgEAFQgnAyhBAAQg8AAgjgiQgmArg8AAQgmAAgcgNQAWAQAOAbQAUAlAAAjIgBARQApAPAXAqQAQAdADAbQA1AMAcAzQAUAlAAAjQAAAtgfAoQgnAzhDAAQhUAAgihCQgOgcgDgdQg6gLgag0QgSgjAAglIABgQQgsgPgVgqQgSgkAAglQAAgtAdgoIADgDQgkgMgWgeQggAWgqAAQg6AAgigfIgFAHQgpAzhAAAQhVAAgihCIgIgPIgKAAQhVAAgihCQgSgjAAgmQAAgWAHgVQgcgRgQgfQgSgjAAgmQAAgJABgKQgQgPgLgVQgIgRgFgQIACAPImjgCIj2ACQAWA5AAA5QAACPh0gBQh0AAgbiCQgKgwAFg1QAFgxANgXQiQgahrAKQg8AGhNAXQg7ATgcgGIgJgCQgHAdgVAbIALARQATAhABAlQAAAwgfAoIgDADQATAPANAYQAUAmAAAiQAAAngYAjQAYAQAQAcIAVgBQA2AAAiAeQAbgMAkAAQBFAAAlArQAVgGAYAAQA4AAAjAhQAlgqA/AAQA9AAAjAlQAlglA7AAQAqAAAeASQAigbAyAAQBJAAAkA0QAUAQAPAZQASAiADAlQAAAtghAqQgmAwg9ACQgXAJgcAAQg8AAgjgiQgUAHgXgBQg+AAgjgkQgUATgaAJQAGAVAAAUQAAASgEATQAxANAaAwQAVAmAAAiQAAAcgMAaQApAPAXApQAWAnAAAiQAAAughAoQgnAyhCgBQhVABgihBgAM3AaIgCADIAMAFIgKgIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_graphics_179,x:26.4,y:81.6}).wait(1).to({graphics:mask_graphics_180,x:32.8,y:81.6}).wait(1).to({graphics:mask_graphics_181,x:39.3,y:81.6}).wait(1).to({graphics:mask_graphics_182,x:45.8,y:81.8}).wait(1).to({graphics:mask_graphics_183,x:52.8,y:81.8}).wait(1).to({graphics:mask_graphics_184,x:59.7,y:81.8}).wait(1).to({graphics:mask_graphics_185,x:66.2,y:81.8}).wait(1).to({graphics:mask_graphics_186,x:70.5,y:81.8}).wait(1).to({graphics:mask_graphics_187,x:79.7,y:81.8}).wait(1).to({graphics:mask_graphics_188,x:86.4,y:81.8}).wait(1).to({graphics:mask_graphics_189,x:92.9,y:81.8}).wait(1).to({graphics:mask_graphics_190,x:99.1,y:81.6}).wait(1).to({graphics:mask_graphics_191,x:104.9,y:81.3}).wait(1).to({graphics:mask_graphics_192,x:110.9,y:81.3}).wait(1).to({graphics:mask_graphics_193,x:119.9,y:81.3}).wait(1).to({graphics:mask_graphics_194,x:125.7,y:80.6}).wait(1).to({graphics:mask_graphics_195,x:131.7,y:80.6}).wait(1).to({graphics:mask_graphics_196,x:138.2,y:80.6}).wait(1).to({graphics:mask_graphics_197,x:144,y:80.6}).wait(1).to({graphics:mask_graphics_198,x:150,y:80.6}).wait(1).to({graphics:mask_graphics_199,x:156.5,y:80.6}).wait(1).to({graphics:mask_graphics_200,x:161.7,y:80.6}).wait(1).to({graphics:mask_graphics_201,x:168.2,y:80.6}).wait(1).to({graphics:mask_graphics_202,x:174,y:80.6}).wait(1).to({graphics:mask_graphics_203,x:182.4,y:80.6}).wait(1).to({graphics:mask_graphics_204,x:194.4,y:80.6}).wait(1).to({graphics:mask_graphics_205,x:207.9,y:80.6}).wait(1).to({graphics:mask_graphics_206,x:207.9,y:80.6}).wait(1).to({graphics:mask_graphics_207,x:207.9,y:80.4}).wait(1).to({graphics:mask_graphics_208,x:207.9,y:79.4}).wait(1).to({graphics:mask_graphics_209,x:207.9,y:78.5}).wait(1).to({graphics:mask_graphics_210,x:207.9,y:83.7}).wait(1).to({graphics:mask_graphics_211,x:207.9,y:83.7}).wait(1).to({graphics:mask_graphics_212,x:207.9,y:83.7}).wait(1).to({graphics:mask_graphics_213,x:207.9,y:83.7}).wait(1).to({graphics:mask_graphics_214,x:207.9,y:83.7}).wait(1).to({graphics:mask_graphics_215,x:207.9,y:83.7}).wait(1).to({graphics:mask_graphics_216,x:207.9,y:84.4}).wait(1).to({graphics:mask_graphics_217,x:207.9,y:87.8}).wait(1).to({graphics:mask_graphics_218,x:207.9,y:90.2}).wait(1).to({graphics:mask_graphics_219,x:207.9,y:90.2}).wait(1).to({graphics:mask_graphics_220,x:207.9,y:90.7}).wait(1).to({graphics:mask_graphics_221,x:207.9,y:90.9}).wait(1).to({graphics:mask_graphics_222,x:207.9,y:90.9}).wait(1).to({graphics:mask_graphics_223,x:207.9,y:91.2}).wait(1).to({graphics:mask_graphics_224,x:207.9,y:91.2}).wait(1).to({graphics:mask_graphics_225,x:207.9,y:95.5}).wait(1).to({graphics:mask_graphics_226,x:207.9,y:95.5}).wait(1).to({graphics:mask_graphics_227,x:207.9,y:97.4}).wait(1).to({graphics:mask_graphics_228,x:207.9,y:102.4}).wait(1).to({graphics:mask_graphics_229,x:207.9,y:106.5}).wait(1).to({graphics:mask_graphics_230,x:207.9,y:109.9}).wait(1).to({graphics:mask_graphics_231,x:207.9,y:113}).wait(1).to({graphics:mask_graphics_232,x:207.9,y:119}).wait(101).to({graphics:mask_graphics_333,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_334,x:210.7,y:79}).wait(1).to({graphics:mask_graphics_335,x:210.7,y:79.1}).wait(1).to({graphics:mask_graphics_336,x:210.7,y:89.1}).wait(1).to({graphics:mask_graphics_337,x:210.7,y:98.7}).wait(1).to({graphics:mask_graphics_338,x:210.7,y:101.9}).wait(1).to({graphics:mask_graphics_339,x:210.7,y:102.8}).wait(1).to({graphics:mask_graphics_340,x:210.7,y:104.7}).wait(1).to({graphics:mask_graphics_341,x:210.7,y:112.9}).wait(1).to({graphics:mask_graphics_342,x:210.7,y:121.1}).wait(1).to({graphics:mask_graphics_343,x:210.7,y:130.2}).wait(1).to({graphics:mask_graphics_344,x:210.7,y:130.2}).wait(1).to({graphics:mask_graphics_345,x:210.7,y:130.2}).wait(1).to({graphics:mask_graphics_346,x:210.7,y:130.2}).wait(1).to({graphics:mask_graphics_347,x:210.7,y:130.2}).wait(1).to({graphics:mask_graphics_348,x:210.7,y:130.2}).wait(1).to({graphics:mask_graphics_349,x:210.7,y:130.2}).wait(1).to({graphics:mask_graphics_350,x:210.7,y:130.2}).wait(1).to({graphics:mask_graphics_351,x:210.7,y:130.2}).wait(1).to({graphics:mask_graphics_352,x:210.7,y:130.2}).wait(65));

	// DiagramMain
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(2.5,1,1).p("AhMgcIEpIEArGnnQBuDhBvDhISwAA");
	this.shape_27.setTransform(274.9,131);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2.5,1,1).p("AXsgPIAAAIIFYAAAtQkfIAAEYIvzAAAtQEgIAAknMAk8AAA");
	this.shape_28.setTransform(207.9,83);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2.5,1,1).p("ALMgvIEpIEABVnyQBtDcBtDdISxAAAsjnyIAAkYA37nlQABAYAAAYQAECFAECRQABADAAADQABAdAAAeQACAyADAyQAGBQArBBQApA8BDAaQBCAaBFgBQBnAABmgBIAQAAQBSgBBRAAQC+gBC9AAAsjnyIAAEoA+7nyISYAAAvqEFIEqIGABVnyIt4AAAe8nyI9nAA");
	this.shape_29.setTransform(209.3,130.3);

	var maskedShapeInstanceList = [this.shape_27,this.shape_28,this.shape_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27}]},179).to({state:[]},121).to({state:[{t:this.shape_29}]},33).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,412.6,208.1);


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


(lib.BubRunning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anim_bub_run();
	this.instance.parent = this;
	this.instance.setTransform(2.2,13.2,0.545,0.545,0,0,0,66.8,70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:5.4,y:7.9},6).to({rotation:0,x:4.2,y:0.4},14).to({regY:70.5,rotation:-15,x:2.2,y:13.2},13).to({regY:70.4,rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-25.2,72.8,76.8);


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
(lib.pre_Scene9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene9:0,scene9_repeat:148});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		//nav buttons --------------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmusic',{loop:-1});
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
		
		 window.open ("pre_Summary.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pre_Scene8.html","_self");
		}
	}
	this.frame_4 = function() {
		playSound("presentparticiplecanbeusedastwomajor");
	}
	this.frame_158 = function() {
		this.gotoAndPlay("scene9_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(154).call(this.frame_158).wait(1));

	// content
	this.instance = new lib.BubRunning("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(443.5,282.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159));

	// Lesson
	this.instance_1 = new lib.ParticipleAuxLessonDiagrams();
	this.instance_1.parent = this;
	this.instance_1.setTransform(276.1,197.2,1.094,1.094,0,0,0,206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159));

	// main
	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(63.3,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_2 = new lib.Copyright("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,393.5);

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

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9933FF").s().p("AgjBAQgJgHABgbIAAgLIABgPIgBgDIABgFIACgjIgBgJIgBgJQAAgKAJAAQADAAADACIATgEIAPAAQAUAAAMAEQAGACAAAGQAAADgDADQgCADgDAAIgDgBQgOgDgNAAIgOABIgRADIAAAJIgBAgIAkgEIATgCQAEABACACQACACABAEQgBAGgHABIgUACIglAEIAAALIgBAKQAAASADADQACADALAAIAOAAIAQgBIAFAAIAFgBQAJAAAAAJQAAAGgIACQgIACgZAAQgZAAgHgHg");
	this.shape_6.setTransform(437.2,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9933FF").s().p("AgOA9QgKgZgMgvIgHgXQgFgRAAgFQAAgEADgCQACgDAEAAQAGAAABAHIAEAPIAIAbQAHAeAIAXIAAgBIAWg8IAHgUQAFgMAFgGQADgEAEAAQADAAACADQADACAAADIgCAGQgFAIgDAIIgGASIgXA8IgJAUQgCAFgEAAQgHAAgCgGg");
	this.shape_7.setTransform(426.7,24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9933FF").s().p("AgkA9QgCgCAAgEQAAgEACgCQADgCAEgBIARgBIABgQIAAgNIgBgPQAAgRACgdIgKAAIgLAAQgEAAgCgCQgDgDAAgDQAAgIAIgBIAZAAQAPAAAaADQAHABAAAIQAAAEgDACQgCACgDAAIgOgBIgNgBIgCAsIAAAPIABAOIgBAPIAagBQADAAADACQACADAAAEQAAADgCACQgDADgDAAIgOABIgOAAIgPABIgQABQgEAAgDgCg");
	this.shape_8.setTransform(416,24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9933FF").s().p("AgFA9QgDgCAAgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgIABQgSAAgKgDQgHgCAAgGQAAgEACgCQADgDADAAIAOABIANABIAQAAIANAAIAUABIATABQADAAACACQADADAAADQAAAEgDADQgCACgDAAIgTgBIgUgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_9.setTransform(406.3,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9933FF").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_10.setTransform(394.8,24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9933FF").s().p("AgkBAQgHgHgBgbIABgLIAAgPIgBgDIACgFIACgjIgBgJIgBgJQAAgKAIAAQAEAAADACIASgEIAQAAQAUAAAMAEQAFACAAAGQAAADgBADQgDADgEAAIgCgBQgOgDgNAAIgOABIgSADIABAJIgBAgIAjgEIAUgCQADABADACQACACAAAEQABAGgIABIgUACIglAEIgBALIAAAKQAAASADADQACADALAAIAPAAIAPgBIAFAAIAEgBQAJAAAAAJQAAAGgGACQgIACgZAAQgaAAgIgHg");
	this.shape_11.setTransform(384.5,24.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9933FF").s().p("AghA5QgQgLAAgPQAAgLAIABQAJgBAAAKQAAAIAKAHQAJAGAIAAQAGAAADgqQABgTAAgeIAAgJIgFAAIgJAAIgKAAQgEAAgCgCQgDgCAAgFQAAgIAMAAIAIAAIAIAAIAPAAIAQgBQATAAAAAKQAAADgCADQgDADgDgBIgFAAIgGgBIgKAAIABAKQAAA9gIAcQgGATgNAAQgOAAgOgLg");
	this.shape_12.setTransform(373.3,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9933FF").s().p("AgZBDQgKgDgEgDIgBAAQgEAAgCgDQgCgCAAgDIAAgaIABgbIAAgbIgBgeQABgDADgEQAEgEADAAQACAAAMAGIAOAHQAXAIAQAQQAUAUgBAXQAAAOgGANQgHANgLAIQgNAJgXAAIgOgCgAgfgWIABAWIgBAuIABABQAIAFALAAQASAAAIgGQAJgGAEgJQAFgJAAgKQAAgWgagRQgHgFgfgOg");
	this.shape_13.setTransform(361.8,24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9933FF").s().p("AAdArIgGgaIgVAEIgWAEIgOAhQgCAEgFAAQgDAAgDgDQgDgCABgEQAAgDAMgbQgBgCgBgDQAAgGAJgCQAJgRAPgXQASggAFABQAGAAADAJIAFAcIAMA4IAGANIABAJQAAADgCADQgDACgDAAQgHAAgGgTgAgKAGIAegGIgHgfg");
	this.shape_14.setTransform(349.1,24.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgGAAQgKAAgHALQgIAKgEAPIgBAIIgBAIIABAHIABAIQgBAEgCACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIABgXIAAgIIgBgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_15.setTransform(333.7,26.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAbArIgGgHIgOAHQgGACgDAAQgUAAgJgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAADgCADQgCACgEAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKABQAHgBAGgDIAIgGQgDgVAAgKIAAgJIACgIIgGgCIgDgBQgMAAgJAKg");
	this.shape_16.setTransform(324.7,26.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgHQAAgJAIAAQAIAAAAAOQAPgPATgBQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_17.setTransform(311.4,26.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSABIgBgBQgLAAgGAMg");
	this.shape_18.setTransform(302.4,26.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_19.setTransform(288.1,24.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_20.setTransform(277.1,24.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgkBAQgHgHgBgbIABgLIAAgPIgBgDIACgFIACgjIgBgJIgBgJQAAgKAIAAQAEAAACACIATgEIAQAAQAUAAAMAEQAFACAAAGQAAADgBADQgDADgEAAIgCgBQgOgDgNAAIgOABIgSADIABAJIgBAgIAjgEIAUgCQADABADACQACACAAAEQABAGgIABIgUACIglAEIgBALIAAAKQAAASADADQACADALAAIAPAAIAPgBIAFAAIAEgBQAJAAAAAJQAAAGgGACQgIACgZAAQgaAAgIgHg");
	this.shape_21.setTransform(266.6,24.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgOA9QgKgZgNgvIgGgXQgFgRAAgFQAAgEACgCQADgDADAAQAHAAACAHIACAPIAIAbQAJAeAHAXIABgBIAVg8IAHgUQAEgMAGgGQADgEAEAAQADAAADADQACACAAADIgBAGQgFAIgEAIIgHASIgVA8IgJAUQgDAFgEAAQgGAAgDgGg");
	this.shape_22.setTransform(256.1,24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgIgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQALAFAAAHIgBAEIgBAKIgBARQAAALACAGIAEAPIADAEIAAABQAAADgCADQgCACgDAAQgCAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKABQAHgBAFgDIAJgGQgDgVAAgKIAAgJIACgIIgFgCIgEgBQgLAAgKAKg");
	this.shape_23.setTransform(240.6,26.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAEgBQAIgDAAgFQAAgMgPgEIgIgBQgLgCgEgEQgIgEAAgJQAAgRARgIIAPgFQALgDAEgCQAEgCAEAAQADAAADADQACACAAAEIABAGIABAHQAAAEgCADQgDACgDAAQgEAAgCgDIgCgJIgUAGQgMAFAAAIIAFABQASAEAJAGQANAIAAAQQAAAOgLAGQgJAGgPAAQgKAAgKgEg");
	this.shape_24.setTransform(226.7,26.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAbArIgGgHIgOAHQgGACgDAAQgUAAgJgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAADgCADQgCACgEAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKABQAHgBAGgDIAIgGQgDgVAAgKIAAgJIACgIIgGgCIgDgBQgMAAgJAKg");
	this.shape_25.setTransform(218.5,26.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF00FF").s().p("AgjBAQgIgHAAgbIAAgLIABgPIgBgDIABgFIACgjIgBgJIgBgJQAAgKAJAAQADAAACACIAUgEIAPAAQAUAAAMAEQAGACAAAGQgBADgCADQgCADgDAAIgDgBQgOgDgNAAIgOABIgRADIABAJIgCAgIAkgEIATgCQAEABACACQACACABAEQgBAGgHABIgTACIgmAEIAAALIgBAKQAAASADADQACADALAAIAPAAIAPgBIAFAAIAFgBQAIAAABAJQAAAGgHACQgJACgZAAQgZAAgHgHg");
	this.shape_26.setTransform(204,24.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF00FF").s().p("AgjBBQgFgDAAgJIABgcQACglAAguQAAgEADgCQADgDADAAQADAAADADQACACAAAEQAAAvgCAlIgBANIAAAMQAVAAAggKIADgBQADAAADADQACADAAADQAAAFgGADQgJAEgUAEQgSADgLAAQgIAAgEgDg");
	this.shape_27.setTransform(194,24.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF00FF").s().p("AgjBAQgCgCAAgEIAAgYIACgiIABgiIAAgLIACgMQACgHAGABIAHgCIANAAQANAAAOAKQAOAMAAAQQAAAUgPAMQgOALgTAAIgKgCIAAAsQAAAEgCACQgDACgDAAQgEAAgCgCgAgSgxIAAAQIgCAhIAJAAQANAAAKgGQAKgIAAgNQAAgKgJgGQgKgGgKAAIgGAAIgFAAg");
	this.shape_28.setTransform(184.8,24.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF00FF").s().p("AgkA9QgCgCAAgEQAAgEACgCQADgCAEgBIARgBIABgQIAAgNIgBgPQAAgRACgdIgKAAIgMAAQgDAAgCgCQgDgDAAgDQAAgIAIgBIAZAAQAQAAAZADQAHABAAAIQAAAEgDACQgCACgDAAIgOgBIgNgBIgCAsIAAAPIABAOIgBAPIAagBQADAAADACQACADAAAEQAAADgCACQgDADgDAAIgOABIgOAAIgPABIgQABQgEAAgDgCg");
	this.shape_29.setTransform(175.6,24.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF00FF").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_30.setTransform(166,24.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF00FF").s().p("AgjA9QgDgCAAgEQAAgEADgCQACgCADgBIASgBIABgQIgBgNIAAgPQAAgRACgdIgLAAIgLAAQgDAAgCgCQgDgDAAgDQAAgIAIgBIAZAAQAQAAAZADQAHABAAAIQAAAEgDACQgDACgDAAIgNgBIgOgBIgBAsIAAAPIAAAOIAAAPIAagBQADAAADACQACADAAAEQAAADgCACQgDADgDAAIgOABIgOAAIgPABIgRABQgDAAgCgCg");
	this.shape_31.setTransform(156,24.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF00FF").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAOAAIAOAAIATABIATABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgTgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_32.setTransform(146.3,24.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF00FF").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_33.setTransform(134.6,24.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AAdArIgFgaIgXAEIgUAEIgPAhQgDAEgEAAQgDAAgDgDQgDgCAAgEQAAgDANgbQgBgCAAgDQAAgGAHgCQAKgRAOgXQATggAFABQAHAAACAJIAFAcIANA4IAEANIADAJQAAADgDADQgCACgDAAQgJAAgFgTgAgKAGIAdgGIgGgfg");
	this.shape_34.setTransform(122.8,24.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF00FF").s().p("AgjBAQgCgCAAgEIAAgYIACgiIACgiIAAgLIABgMQACgHAGABIAHgCIANAAQANAAAOAKQAPAMAAAQQgBAUgPAMQgOALgTAAIgKgCIAAAsQAAAEgCACQgDACgDAAQgDAAgDgCgAgSgxIAAAQIgCAhIAJAAQANAAAKgGQAKgIAAgNQAAgKgJgGQgKgGgJAAIgHAAIgFAAg");
	this.shape_35.setTransform(112.4,24.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3,1,1).p("EgkagN2MAAAAgTIAAFaMAnbAAAIePAAIDLAAIAA7uIAAz/MhI1AAAIAAAAIAAALIAAJt");
	this.shape_36.setTransform(275.1,193.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FAFFFF").s().p("AgRAyIAAAAIAAAAgAASgxIgBAFIgEADg");
	this.shape_37.setTransform(432.6,141.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3A3839").s().p("AolO6QAGgUAAAUQAAAKgCAAQgBAAgDgKgAmeOlIADgIQACgEABAFIAAAHQAAAKgCAAQgBAAgDgKgAIYvDQAMgBACAIIgDABQgJAAgCgIg");
	this.shape_38.setTransform(386.6,221);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#D9AF9A","#993300"],[0,1],-49.7,59.1,30.7,-80.1).s().p("AgFDSQgpg6gIg0IABAAIAKAOIARAfIAAABIABABIACAEIABADQAVAuAHAPQAKAQAdAgQAVAcgMASQgLgdgwhGgAhdCxIAOgwQAGgZgBgLQAMARgKA+QgPBYAAAJQgWgcAQhAgAheBDQgFgTgIgCQALgOAIATQAIAQAAATQgLgBgDgSgAg+AyIACgEQARgoAVgjIAYgpIAUgcIAQgTQBKhbBog4QgCAXgXASQgVARgPgEQgOAdgpAmQgZAXgUANQgQAJgMADIACADIACAFQgDARgLANIgTAdQgRAZgMAXQgMAZgSAVQgHAIgGAGIAMgegAAohzQACAIAMgBQgCgIgJAAIgDABgAiNgSQgVgxAOgPQAHARAKAkQALAfATAYIgDAAQgTAAgSgsgAi9i1IgCgIQgThEgFgvQAEgBABgDIAIACIAFADQgFAQAHAdQAMA0gFAQIAcA8QAQAqgYAGQAAgcgVhHg");
	this.shape_39.setTransform(436.3,136.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("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");
	this.shape_40.setTransform(279.5,129.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],401.9,-250.4,421.4,202.4).s().p("ADUT7IAAgIIeQAAIAAAIgEAhkATzI+QAAMgnaAAAIAAlaMAAAggTIAVgIIBDAAIBAAAQAPAJACAAIgCgBIAXAAQAQAAAAABIAHgCIABAAIAAAAQAOgKAJgEQgHAIAAACQAAACAAABQAAABABAAQAAABAAgBQAAAAABAAIAmABQgEAFADAEQAZgDAqgJIABACQgEADAAABQAAACAAAAQAAABAAABQAAAAABAAQAAAAAAgBIAxABQgFACAAADQAAAEAGABIA1gSIAAABIAAgBQAcgJATgCIAKAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQABAAAAAAQADAAAZgHIABAAQgSAMAAACQAAABAAABQAAABAAABQABAAAAAAQAAAAAAgBIBMgBQgHAIgMAJQAAAEAKABIAogHIAbAAIABAYIAfgOIAWAAQADAXABAEIADgEIABgGQAEAEAGANQAFAKAHACQAEgFABgBQAIAJAGAUQAGARAOALQAEgFABgNQABgNAEgEIASAlQAFgIAAgHIACAAIALAbQAHASAKAHQADgEAAgOIAAAAQAJATAFACIANgSIABABQAHAWAHADQAIgJANgcIAFAUQACANAHAEQAIgNAigdIAAAPQgEAJAEAHQAPgLAFgKIABABIgCATQAAAJACAEIAEAEIAfgrIABABQAAAMAGAWQAJgBALgJQALgLADAAQAAAOACACQAHANAiAAQAIAAADgIQAFgMAGgEQACAKANAJQAMAJAOABIAEAAIABgBQAGgFAVgjIAJATQAMAPAaAAQALAAAFgbIALAMQAJAHARAAQAGAAATgcQAaAXAXgBQANABAAgLIgCgMQAIgCALAJIAJAGIAHACQAIAAAFgNIACgFIANgHQAEAOASAHQACgBAJgRIAPATQAMAQAHAAQAGAAgBgDIAAghQAOAEAGAQQAFgCAAgPIAAgCIAvAnQACgGgBgZQAUAIAtAhQACgCAAgGQgFgVAAgKQATALA6AxQABAAABgBQABAAABAAQAAAAAAgBQAAAAgBgBQgTglAEgQIAnAoQAdAcAOAAQANAAAAgTQALALAMAcQAJgDACgMQADgMAFgCQAGAGgBANQAAAOADADQADgEADgMQADgLAGgFQAHAXAIAAQAHAAgCgCIAbg1QALARAIAmQAWgwAFgEQADADAQAYQALgGAHgcQAGAIACARQACAQAHAIQAIgGANgcIACABIAAAlQAIgFALgTQALgTAHgGQgDARAKAaIATApQAOgGAQgXQAPgYAPgGQAPAgANANQAJgLAIgZQAMASADAAQACAAABAAQABAAABgBQAAAAAAAAQAAAAAAgBIABgjQAHAIAMAUQAKATAIAIQAFgLgBgVQAAgVAEgHIAYAkQAQAaAFABQAGAAgBgCIAAgRQAAgRgghLQB7BNAbAUQAEgBABgBQgIgWAAgJQAAgFACgBIAxAeQAcATAJANQAFgBAAgNQAHACAcARQACAAABAAQABAAABAAQAAgBAAAAQAAAAAAgBQAAgPABgFQALAHAKAWIACgBIABgUQAOAIARAVIABgCQAAgMgJgUIgNgcQAyAlAYAbIAVARIAQANIAMAJIgEAEQAIAHAIALIAgAqQgBgvAhgiQAdggAigCQgGAQgdAnQgWAkAQARQATggAwgSQAvgTApAIQgJAGg0AUQgNAFgKAFQgVALgJAOQAQAAAygIIAOgBIAMABQAVADAIAMQgIAEggABIgMAAQgkAAgGAPQAIAAAUgFQALgDALAAIALABQARAXAUAEQAlAIANAGIABgNQABgGAEgBIACAAQAJAQAlAKQAIgJAEgCQAHgEAIAJQAAgHAGgMQAEgKgDgMQANAMAKgPQALgUANADQAEAOgSANQgPAKAJAKQAGABAZgJQASgHAFAJQABAIgJADQgMADAAAGQATgGAFAQQAHAWACACQALgWANAQQAUAZAEABIAAgRQABgJAFgBQAMAMAPABQAIAAATgEQAkgIASAaQACgFgCgeQgBgWAIgEQAJAHAHASQAIAXADAGQAkggAMATQgcADgGARQAhABApATQgPAFgFAAQgFAAgPgFQAHAMAOAQQAGANgVANQATgDAogNQAfgFAFAjQAXgIAiALQAeAKAbgNIAFATQADAKAGAEIgBg0QgBgfAQgFQAHAJALAjQAMAcARgLQgGgBgEgOQgFgNAJABIAJASQAFAKgCANQAKgDAUgJQARgFAHARQABgCgBgTQgBgOAIABQACAbAkAJQApAKAJAWQAugWAIgGQAVAdAZAHQARAEAcgFQAMgDJNgBIAAbugAJJPOQAGAUAAgUQAAgLgCAAQgBAAgDALgALTOwIgDAJQAGAUAAgUIAAgHIgBgDIgCABgADVr5IgBAAIAAAAIABAAIAAAAgEgkGATzIgnAAIAnlaIAAFagAeFwVQgCgegIgJQgNAygOARQAIgXgTgeQgSgfABgEQgJgBgNAGQgMAFgMgDQgEgPAUABQAWAAACgGQgRgagyAHIhLATQAJg6BqAEQgMgVglgNIg0gNQAggRApAHQApAHAUAXQABgPgLgWQgKgVAAgQQAeAIANAKQASAPAAAcQAWgWAdgJQAigMAeAJIggATQgTALgKAKQA4ASAKAEQAiAQAIAeQgQgEgZgNQgbgNgNgEQARAYAMAjQASAygNAhQgOgKgNgiQgNgigOgKQAGAdgEAfQgGAogXAPQgGgKgEgggAsbv8IACgDIAGADIAGAEIgBAJQgHgJgGgEgAUjxpQAGgdAUAAQgPgLgXAOQgTANgLARQgDgSAagWQAYgTAbgIQABgGgFgNQgFgKADgMQAVARAUgZQAbgfAUgBQAGAFgOAPQgSAUgBAHQAOgRAogDQAmgEAdALQgTAOg9gBQAGAJAgAHQAkAIANAKQgPARg8gRQAJALAXALQAdANAHAFQgMAIgbgLQgigMgPACQADAJAQAGQASAGAEAGQgFAMgMgIQgNgKgDgBIgEAEQgGgDgLAAQgNAAAAAFIABABIgBACIAAAAIgKAGQgIAGgKgBQAKgRAEgKQgfgBgRAYQgKAOgQAfQgNgRAHgcg");
	this.shape_41.setTransform(273.1,219.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],232.7,44.4,232.7,-75.7).s().p("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");
	this.shape_42.setTransform(275.1,104.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.instance_2},{t:this.btn_menu},{t:this.btn_goBack}]}).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,198.2,532.5,404.8);
// library properties:
lib.properties = {
	id: '6D88091E246E1F4EA70B25ED83737285',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/presentparticiplecanbeusedastwomajor.mp3", id:"presentparticiplecanbeusedastwomajor"}
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
an.compositions['6D88091E246E1F4EA70B25ED83737285'] = {
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