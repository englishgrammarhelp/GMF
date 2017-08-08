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


(lib.WatchingtheGirls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(385.2,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcBAQgLgCABgHQAAgGAGgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgFAJgFAEQgHAEgHAAQgOAAgKgKQgKgLABgPQAAgWANgOQAMgOAXAAQAIAAAEACQAGACACAEQAJAAAAAKIgCAPIgBAQIgCAbQgBAQgDALQgEANgIAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQAAAMAFAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgHgBQgPAAgJALg");
	this.shape_1.setTransform(378.4,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgDACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIAAgXIAAgIIAAgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSANAAQAOAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_2.setTransform(369.8,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHA8QgCgCAAgEIgBgOIAAgPIABgUIABgSQAAgFACgBQACgDAEAAQACAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgCACQgCADgDgBQgDABgCgDgAgFgtQgCgDAAgEQAAgDACgDQAEgEADAAQADAAAEAEQACADAAADQAAAEgCADQgEADgDAAQgDAAgEgDg");
	this.shape_3.setTransform(362.9,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAaAsIgagiIgQARIgOAOQgDADgDAAQgDAAgDgCQgCgDAAgEQAAgCACgCIAHgIIAIgHIARgRIgLgRIgLgNQgDgDAAgDQAAgEACgCQADgCADgBQAFABAJAMIAOAUIAQgPQAKgJAEgGQACgDAEAAQADAAADABQACADAAADQAAAFgHAIIgNALIgOAPIAbAiQACADAAADQAAACgDADQgCACgDAAQgDAAgDgDg");
	this.shape_4.setTransform(355.3,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgTAAgJgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQALAFAAAHIgBAEIgBAKIgBARQAAALABAGIAGAPIACAEIAAABQAAAEgCACQgDACgDAAQgBAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIAAgIIACgJIgFgCIgEgBQgLgBgKALg");
	this.shape_5.setTransform(346,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJA8IACgeIABgeIAAgdIAAgfQAAgHAHgBQAJABAAAHIgBAfIgBAdIgBApIgBAUQAAAHgHAAQgHABgBgJg");
	this.shape_6.setTransform(339.3,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAGADAJAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgIAIg");
	this.shape_7.setTransform(332.5,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_8.setTransform(323.8,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_9.setTransform(309.9,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_10.setTransform(301.3,16.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbAkQgOgLAAgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgPAGQgNAGgMAAQgSAAgLgJgAgRgWQgGAIgDAPIAZgLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_11.setTransform(292.5,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAUAuQgKAAgFgWIgDgTIgCgSIgGAPIgOAiQgBADgCACQgCAFgGAAQgGAAgFgZQgEgNgDgVIgBgMIgBgNQgBgDADgCQACgDAEAAQAGAAACAHIABAMIABANIAGAkIATg6QACgJAGAAQAHAAACAKIAFAeIAGAfIAGgWIALgsQABgFAGAAQAEAAACACQADACAAAEIgBADQgHAcgKAhQgCAHgGAIQgCAFgFAAIAAgBg");
	this.shape_12.setTransform(281.9,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWAuQgNgFAAgHQAAgEACgDQADgCADAAQADAAAEAEQACACAHABIAKABQAFAAAFgBQAJgDgBgFQABgMgRgDIgHgCQgLgCgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgCQAEgCAEAAQAEAAACADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgFAAgBgDIgDgJIgTAGQgMAFAAAIIAFACQASACAJAHQAOAIAAAQQAAANgMAHQgKAGgNAAQgMAAgJgEg");
	this.shape_13.setTransform(266.6,16.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVBBQgDgCAAgEQAAgIASgoIgeg4IgDgGQgDgEAAgCQAAgEADgCQADgDADAAQAEAAACADQAOAUAPAkIAMgdIANgZQADgFAEAAQAEAAACACQADADAAADIgBAEIgdA9QgLAXgEAPIgGAQQgCAGgFAAQgEAAgCgCg");
	this.shape_14.setTransform(258,18.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_15.setTransform(249.2,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgDAAgCIABgHIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgDAFABQASAAALANQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAFQAFABAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_16.setTransform(240,14.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbAkQgNgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgLgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_17.setTransform(225.2,16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_18.setTransform(215.6,14.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_19.setTransform(206.5,15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJASQgCgCgBgDIAFgNIAHgPQACgEADAAQADAAACACQACADAAACQABACgMAaQgBAEgFAAQgCAAgCgCg");
	this.shape_20.setTransform(195.6,21.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9900FF").s().p("AAWA/QgEgIgJgLIgOgVIgPALIgBAZQAAAEgBACQgDADgEAAQgIAAAAgMIABgUIABgVIABgcIAAgcIAAgJIgBgJQAAgEADgCQACgCADAAQADAAADACQACACAAAEIAAAJIABAJIgBAbIAAAcIAVgSIASgTQADgDADAAQADAAADADQACACAAAEQAAACgCADQgKAMgPANIASAYQANASAAAFQAAADgDADQgCACgEAAQgEAAgDgFg");
	this.shape_21.setTransform(188.7,14.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9900FF").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_22.setTransform(179.7,16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9900FF").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_23.setTransform(170.8,16.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9900FF").s().p("AATAuQgIAAgGgWIgDgTIgCgSIgHAPIgMAiQgBADgDACQgCAFgFAAQgGAAgHgZQgCgNgDgVIgDgMIgBgNQABgDACgCQACgDADAAQAHAAACAHIABAMIABANIAGAkQAJgZAKghQACgJAGAAQAGAAADAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQAEAAACACQACACABAEIgBADQgGAcgLAhQgDAHgFAIQgCAFgFAAIgBgBg");
	this.shape_24.setTransform(160.7,16.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9900FF").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAGAAAGgBQAHgDAAgFQAAgMgPgDIgIgCQgLgCgFgEQgHgEAAgJQAAgSARgGIAPgGQALgDAFgCQADgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgCgDIgCgJIgTAGQgNAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgJAGgPAAQgKAAgKgEg");
	this.shape_25.setTransform(145.4,16.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9900FF").s().p("AgIA8IABgeIABgeIAAgdIAAgfQAAgHAHgBQAJABAAAHIgBAfIAAAdIgCApIgBAUQAAAHgHAAQgHABAAgJg");
	this.shape_26.setTransform(139.2,14.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9900FF").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_27.setTransform(133,16.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9900FF").s().p("AgHA8QgDgCAAgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDAAgEQAAgDADgDQACgEAEAAQADAAADAEQADADAAADQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_28.setTransform(126.5,14.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9900FF").s().p("AgcBAQgKgCAAgHQAAgGAGgBIALACIAPABQAPAAAGgPQAEgLAAgVQgFAJgFAEQgGAEgIAAQgPAAgJgKQgJgLAAgPQAAgWAMgOQANgOAWAAQAIAAAGACQAEACADAEQAJAAAAAKIgCAPIgCAQIgBAbQgBAQgDALQgEANgIAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQAAAMAFAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgHgBQgPAAgJALg");
	this.shape_29.setTransform(119.3,18.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9900FF").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_30.setTransform(105.3,16.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9900FF").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_31.setTransform(95.7,14.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9900FF").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_32.setTransform(86.7,15.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9900FF").s().p("AgcBAQgLgCAAgHQAAgGAHgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgEAJgGAEQgGAEgIAAQgPAAgJgKQgKgLAAgPQABgWANgOQANgOAWAAQAHAAAFACQAFACADAEQAKAAgBAKIgBAPIgCAQIgDAbQAAAQgDALQgDANgJAHQgKAIgSAAQgLAAgHgCgAgOgpQgJAKABAPQAAAMAEAFQAEAGAKAAQAHAAAIgIQAIgJABgIIADgcIgHgFIgHgBQgPAAgIALg");
	this.shape_33.setTransform(73,18.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9900FF").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCAAgEIgBgIIgBgHIACgXIABgXIAAgIIgBgIQAAgEADgCQACgCAEAAQAHAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_34.setTransform(64.4,16.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9900FF").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDgBgEQABgDADgDQACgEAEAAQADAAADAEQADADAAADQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_35.setTransform(57.5,14.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9900FF").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_36.setTransform(50.2,14.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9900FF").s().p("AgXAkQgMgKAAgSQAAgQALgSQANgTAOAAQAIgBAKAEQAOAFAAAHQAAADgDACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgFgEgMAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAGAAAFgDIAKgEIADgCQADAAADADQACACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_37.setTransform(40.8,16.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9900FF").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_38.setTransform(32.4,15.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9900FF").s().p("AAbArIgGgHIgOAHQgGACgDAAQgUAAgJgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAAEgCACQgCACgEAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgGgCIgDgBQgMgBgJALg");
	this.shape_39.setTransform(24.1,16.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9900FF").s().p("AATBBQgEgCAAgEIgEgQIgHgkIgFgjQgHAbgJASQgJAWgDANIABAEQAAADgEADQgDACgDAAQgMAAAAgKIgCgLIgJgoQgGgUgNgmIAAgEQAAgHAJAAQAFAAADAFIAGASQAFAPAFAVIAIAkQAJgVAIgdIAJgZQAHgSAGAAQAGAAACAGQADAHADAbIAGAgIAHAgIAchHIAEgQQADgJADgGQADgEAFAAQAIAAAAAIIgCAIIgEAJIgEAPIgZA7IgMAdQgDAFgGAAQgDAAgDgCg");
	this.shape_40.setTransform(11.3,14.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AAWA/QgEgIgJgLIgOgVIgPALIgBAZQAAAEgBACQgDADgEAAQgIAAAAgMIABgUIABgVIABgcIAAgcIAAgJIgBgJQAAgEADgCQACgCADAAQADAAADACQACACAAAEIAAAJIABAJIgBAbIAAAcIAVgSIASgTQADgDADAAQADAAADADQACACAAAEQAAACgCADQgKAMgPANIASAYQANASAAAFQAAADgDADQgCACgEAAQgEAAgDgFg");
	this.shape_41.setTransform(188.7,14.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_42.setTransform(179.7,16.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_43.setTransform(170.8,16.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AATAuQgIAAgGgWIgDgTIgCgSIgHAPIgMAiQgBADgDACQgCAFgFAAQgGAAgHgZQgCgNgDgVIgDgMIgBgNQABgDACgCQACgDADAAQAHAAACAHIABAMIABANIAGAkQAJgZAKghQACgJAGAAQAGAAADAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQAEAAACACQACACABAEIgBADQgGAcgLAhQgDAHgFAIQgCAFgFAAIgBgBg");
	this.shape_44.setTransform(160.7,16.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAGAAAGgBQAHgDAAgFQAAgMgPgDIgIgCQgLgCgFgEQgHgEAAgJQAAgSARgGIAPgGQALgDAFgCQADgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgCgDIgCgJIgTAGQgNAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgJAGgPAAQgKAAgKgEg");
	this.shape_45.setTransform(145.4,16.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgIA8IABgeIABgeIAAgdIAAgfQAAgHAHgBQAJABAAAHIgBAfIAAAdIgCApIgBAUQAAAHgHAAQgHABAAgJg");
	this.shape_46.setTransform(139.2,14.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_47.setTransform(133,16.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgHA8QgDgCAAgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDAAgEQAAgDADgDQACgEAEAAQADAAADAEQADADAAADQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_48.setTransform(126.5,14.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgcBAQgKgCAAgHQAAgGAGgBIALACIAPABQAPAAAGgPQAEgLAAgVQgFAJgFAEQgGAEgIAAQgPAAgJgKQgJgLAAgPQAAgWAMgOQANgOAWAAQAIAAAGACQAEACADAEQAJAAAAAKIgCAPIgCAQIgBAbQgBAQgDALQgEANgIAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQAAAMAFAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgHgBQgPAAgJALg");
	this.shape_49.setTransform(119.3,18.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_50.setTransform(105.3,16.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_51.setTransform(95.7,14.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_52.setTransform(86.7,15.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgcBAQgLgCAAgHQAAgGAHgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgEAJgGAEQgGAEgIAAQgPAAgJgKQgKgLAAgPQABgWANgOQANgOAWAAQAHAAAFACQAFACADAEQAKAAgBAKIgBAPIgCAQIgDAbQAAAQgDALQgDANgJAHQgKAIgSAAQgLAAgHgCgAgOgpQgJAKABAPQAAAMAEAFQAEAGAKAAQAHAAAIgIQAIgJABgIIADgcIgHgFIgHgBQgPAAgIALg");
	this.shape_53.setTransform(73,18.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCAAgEIgBgIIgBgHIACgXIABgXIAAgIIgBgIQAAgEADgCQACgCAEAAQAHAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_54.setTransform(64.4,16.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDgBgEQABgDADgDQACgEAEAAQADAAADAEQADADAAADQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_55.setTransform(57.5,14.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_56.setTransform(50.2,14.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgXAkQgMgKAAgSQAAgQALgSQANgTAOAAQAIgBAKAEQAOAFAAAHQAAADgDACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgFgEgMAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAGAAAFgDIAKgEIADgCQADAAADADQACACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_57.setTransform(40.8,16.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_58.setTransform(32.4,15.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AAbArIgGgHIgOAHQgGACgDAAQgUAAgJgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAAEgCACQgCACgEAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgGgCIgDgBQgMgBgJALg");
	this.shape_59.setTransform(24.1,16.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AATBBQgEgCAAgEIgEgQIgHgkIgFgjQgHAbgJASQgJAWgDANIABAEQAAADgEADQgDACgDAAQgMAAAAgKIgCgLIgJgoQgGgUgNgmIAAgEQAAgHAJAAQAFAAADAFIAGASQAFAPAFAVIAIAkQAJgVAIgdIAJgZQAHgSAGAAQAGAAACAGQADAHADAbIAGAgIAHAgIAchHIAEgQQADgJADgGQADgEAFAAQAIAAAAAIIgCAIIgEAJIgEAPIgZA7IgMAdQgDAFgGAAQgDAAgDgCg");
	this.shape_60.setTransform(11.3,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,389.4,27.7);


(lib.MickHanding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(407.9,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWA/QgEgIgJgLIgNgVIgPALIgBAZQAAAEgCACQgDADgEAAQgIAAAAgMIABgUIABgVIAAgcIAAgcIAAgJIAAgJQAAgEADgCQABgCAEAAQADAAADACQACACAAAEIAAAJIABAJIgBAbIAAAcIAVgSIASgTQADgDADAAQADAAADADQADACgBAEQABACgDADQgKAMgPANIASAYQANASAAAFQAAADgDADQgDACgDAAQgEAAgDgFg");
	this.shape_1.setTransform(401.7,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_2.setTransform(392.7,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_3.setTransform(383.8,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAuQgKAAgFgWIgDgTIgCgSIgGAPIgOAiQgBADgCACQgCAFgGAAQgGAAgFgZQgEgNgDgVIgCgMIAAgNQgBgDADgCQACgDAEAAQAGAAACAHIABAMIACANIAFAkIATg6QACgJAGAAQAHAAACAKIAFAeIAGAfIAGgWIALgsQABgFAGAAQAEAAACACQADACAAAEIgBADQgGAcgLAhQgCAHgGAIQgCAFgFAAIAAgBg");
	this.shape_4.setTransform(373.7,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_5.setTransform(358.9,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAGADAJAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQACACAAADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_6.setTransform(350.1,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_7.setTransform(340.5,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcBAQgLgCAAgHQAAgGAIgBIAJACIAQABQAPAAAGgPQAEgLAAgVQgEAJgHAEQgGAEgGAAQgQAAgJgKQgKgLAAgPQABgWANgOQANgOAWAAQAIAAAEACQAFACAEAEQAJAAAAAKIgCAPIgDAQIgCAbQAAAQgDALQgDANgJAHQgKAIgSAAQgLAAgHgCgAgOgpQgJAKABAPQAAAMAEAFQAFAGAJAAQAHAAAIgIQAIgJABgIIADgcIgHgFIgIgBQgOAAgIALg");
	this.shape_8.setTransform(325.8,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgBACQgDACgEAAQgDAAgCgCQgDgCAAgEIAAgIIgBgHIABgXIACgXIAAgIIgBgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_9.setTransform(317.2,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQABgFACgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgCACQgDADgDgBQgDABgCgDgAgEgtQgEgDAAgEQAAgDAEgDQADgEACAAQAFAAACAEQADADAAADQAAAEgDADQgCADgFAAQgCAAgDgDg");
	this.shape_10.setTransform(310.3,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEACgDQADgCAEAAQACAAAEAEQACACAHABIAKABQAFAAAFgBQAJgDAAgFQgBgMgQgDIgHgCQgLgCgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgCQAEgCAEAAQAEAAACADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgDgDIgCgJIgTAGQgMAFAAAIIAFACQASACAJAHQAOAIAAAQQAAANgMAHQgKAGgNAAQgMAAgKgEg");
	this.shape_11.setTransform(303.4,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQABgFACgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgCACQgDADgDgBQgDABgCgDgAgEgtQgEgDAAgEQAAgDAEgDQACgEADAAQAFAAACAEQADADAAADQAAAEgDADQgCADgFAAQgDAAgCgDg");
	this.shape_12.setTransform(297.3,14.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAmIgNghIgPglIgBgFQAAgDADgCQADgDADAAQAFABACAFIAVA4IAPglIAHgTQACgFAFAAQAEAAACACQADADAAADQAAADgOAgIgRAnQAAAHgHAAQgGABgCgIg");
	this.shape_13.setTransform(290.7,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_14.setTransform(282.6,16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_15.setTransform(273.8,16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfBEQgDgDAAgEIABghIAAggIgCghIgBgRQAAgGACgEQADgFAFAAQADABACACQACACAAADIAAADIgBAEQAHgFAHgCQAGgCAGAAQARAAAIAPQAGAMAAATQAAASgKALQgKANgRAAQgHAAgKgDIAAAnQAAAEgDADQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAGIABAnQAJADAIABQAKgBAGgHQAFgGAAgLQAAgOgEgIQgEgHgHAAQgHAAgGADg");
	this.shape_16.setTransform(264.5,18.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASAoQgKAFgMAAQgLAAgHgFQgIgFgBgKQgEgWAAgQQAAgMADgPQAAgHAIAAQADABACACQADACAAADIgCANIgBANIABAXQABAJACAGIAFADIAGABQAKAAAMgFIAAgQIAAgPQAAgSACgOQABgHAGAAQAEAAACADQADABAAAEIgCAgIAAARIAAASIABAFIAAAGQAAADgCADQgDACgEAAQgFAAgDgIg");
	this.shape_17.setTransform(255.5,16.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEACgDQADgCADAAQADAAAEAEQACACAHABIAKABQAFAAAFgBQAJgDgBgFQAAgMgQgDIgHgCQgLgCgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgCQAEgCAEAAQAEAAACADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgDgDIgCgJIgTAGQgMAFAAAIIAFACQASACAJAHQAOAIAAAQQAAANgMAHQgKAGgNAAQgMAAgKgEg");
	this.shape_18.setTransform(246.7,16.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgWAuQgNgFAAgHQAAgEACgDQADgCADAAQADAAAEAEQACACAHABIAKABQAFAAAFgBQAJgDgBgFQABgMgRgDIgHgCQgLgCgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgCQAEgCAEAAQAEAAACADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgFAAgBgDIgDgJIgTAGQgMAFAAAIIAFACQASACAJAHQAOAIAAAQQAAANgMAHQgKAGgNAAQgMAAgJgEg");
	this.shape_19.setTransform(233.3,16.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDgBgEQABgDADgDQACgEAEAAQAEAAACAEQADADAAADQAAAEgDADQgCADgEAAQgEAAgCgDg");
	this.shape_20.setTransform(227.2,14.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJASQgCgCgBgDIAFgNIAHgPQACgEADAAQADAAACACQACADAAACQABACgMAaQgBAEgFAAQgCAAgCgCg");
	this.shape_21.setTransform(217.7,21.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9900FF").s().p("AgIA8IABgeIABgeIAAgdIAAgfQAAgHAHgBQAJABAAAHIgBAfIAAAdIgCApIgBAUQAAAHgHAAQgHABAAgJg");
	this.shape_22.setTransform(212.5,14.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9900FF").s().p("AgHA8QgDgCABgEIgBgOIAAgPIABgUIABgSQAAgFACgBQACgDAEAAQACAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgDACQgCADgCgBQgEABgCgDgAgFgtQgDgDAAgEQAAgDADgDQAEgEACAAQAFAAADAEQACADAAADQAAAEgCADQgDADgFAAQgCAAgEgDg");
	this.shape_23.setTransform(208,14.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9900FF").s().p("AAaArIgFgHIgOAHQgGACgDAAQgTAAgJgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQALAFAAAHIgBAEIgBAKIgBARQAAALACAGIAFAPIACAEIAAABQAAAEgCACQgDACgCAAQgCAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIAAgIIACgJIgFgCIgEgBQgLgBgKALg");
	this.shape_24.setTransform(201.1,16.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9900FF").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgGAAQgKAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgDACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIABgXIAAgIIgBgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_25.setTransform(192.5,16.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9900FF").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgIgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQALAFABAHIgCAEIgBAKIgBARQAAALACAGIAEAPIADAEIAAABQAAAEgCACQgCACgDAAQgCAAgFgDgAgNgUQgKALABAMQAAAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIABgIIABgJIgGgCIgDgBQgLgBgKALg");
	this.shape_26.setTransform(178.4,16.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9900FF").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAEgBQAJgDgBgFQABgMgRgDIgHgCQgLgCgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgCQAEgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgCgDIgDgJIgTAGQgMAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgJAGgPAAQgLAAgJgEg");
	this.shape_27.setTransform(164.5,16.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9900FF").s().p("AgcBAQgLgCAAgHQABgGAGgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgFAJgFAEQgHAEgHAAQgOAAgKgKQgKgLAAgPQAAgWAOgOQAMgOAXAAQAHAAAFACQAGACACAEQAKAAgBAKIgBAPIgCAQIgCAbQgBAQgDALQgEANgIAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQABAMAEAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgHgBQgPAAgJALg");
	this.shape_28.setTransform(156,18.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9900FF").s().p("AgcBAQgLgCAAgHQABgGAGgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgFAJgFAEQgHAEgHAAQgOAAgKgKQgKgLAAgPQAAgWAOgOQAMgOAXAAQAHAAAFACQAGACACAEQAKAAgBAKIgBAPIgCAQIgCAbQgBAQgDALQgEANgIAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQABAMAEAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgHgBQgPAAgJALg");
	this.shape_29.setTransform(147,18.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9900FF").s().p("AgHA8QgDgCAAgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDAAgEQAAgDADgDQACgEAEAAQADAAADAEQADADAAADQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_30.setTransform(140.4,14.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9900FF").s().p("AATAuQgIAAgGgWIgDgTIgCgSIgHAPIgMAiQgBADgCACQgDAFgFAAQgHAAgGgZQgDgNgCgVIgCgMIgCgNQAAgDADgCQACgDADAAQAHAAABAHIACAMIACANIAEAkQAJgZAKghQADgJAGAAQAGAAADAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQADAAADACQADACgBAEIAAADQgHAcgKAhQgDAHgFAIQgCAFgFAAIgBgBg");
	this.shape_31.setTransform(132.1,16.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9900FF").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAPAAIANAAIATABIATABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgTgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_32.setTransform(121.2,14.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9900FF").s().p("AgcBAQgKgCAAgHQgBgGAIgBIAKACIAPABQAPAAAGgPQAEgLAAgVQgFAJgGAEQgFAEgHAAQgQAAgJgKQgJgLAAgPQgBgWANgOQAOgOAVAAQAIAAAGACQAEACAEAEQAIAAABAKIgDAPIgCAQIgBAbQgBAQgDALQgEANgIAHQgKAIgSAAQgLAAgHgCgAgPgpQgHAKAAAPQgBAMAFAFQAEAGAKAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgIgBQgOAAgJALg");
	this.shape_33.setTransform(105,18.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9900FF").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAABAKIAAAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_34.setTransform(96.4,16.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9900FF").s().p("AgHA8QgDgCABgEIgBgOIAAgPIABgUIABgSQgBgFADgBQACgDAEAAQACAAACADQADABAAAFIgBASIgBAUIABAPIAAAOQgBAEgCACQgCADgCgBQgEABgCgDgAgFgtQgCgDAAgEQAAgDACgDQAEgEACAAQAEAAAEAEQACADAAADQAAAEgCADQgEADgEAAQgCAAgEgDg");
	this.shape_35.setTransform(89.5,14.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9900FF").s().p("AgdA5QgLgMAAgSQgBgXAMgMQAMgNASAAQAKAAAEADIAIAFQACgjABgMQABgHAHAAQAHAAAAAIQAAAMgDAnIgBAXQAAAcADAOIAAACQAAADgCACQgDADgDAAQgFAAgDgIQgFAFgHACQgGACgHAAQgQAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAJAAQAGAAAGgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape_36.setTransform(81.9,14.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9900FF").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIAAAIQAAAEgBACQgDACgEAAQgDAAgCgCQgDgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_37.setTransform(72.7,16.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9900FF").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgIgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQALAFAAAHIgBAEIgBAKIgBARQAAALACAGIAEAPIADAEIAAABQAAAEgCACQgCACgDAAQgCAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIAAgIIACgJIgFgCIgEgBQgLgBgKALg");
	this.shape_38.setTransform(63.7,16.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9900FF").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_39.setTransform(54.6,14.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgJASQgCgCgBgDIAFgNIAHgPQACgEADAAQADAAACACQACADAAACQABACgMAaQgBAEgFAAQgCAAgCgCg");
	this.shape_40.setTransform(42.6,21.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWA/QgEgIgJgLIgOgVIgPALIgBAZQAAAEgCACQgCADgEAAQgIAAAAgMIABgUIABgVIABgcIAAgcIAAgJIgBgJQAAgEADgCQACgCADAAQADAAADACQACACAAAEIAAAJIABAJIgBAbIAAAcIAVgSIASgTQADgDADAAQADAAADADQACACAAAEQAAACgCADQgKAMgPANIASAYQANASAAAFQAAADgDADQgCACgEAAQgEAAgDgFg");
	this.shape_41.setTransform(35.7,14.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAkQgMgKAAgSQAAgQAMgSQAMgTAOAAQAJgBAKAEQAMAFAAAHQAAADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgGgEgLAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAFAAAGgDIAKgEIAEgCQACAAACADQADACAAADQAAAGgNAGQgLAEgIAAQgPABgMgLg");
	this.shape_42.setTransform(26.2,16.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQABgFACgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgCACQgDADgCgBQgEABgCgDgAgEgtQgEgDAAgEQAAgDAEgDQACgEADAAQAFAAACAEQADADAAADQAAAEgDADQgCADgFAAQgDAAgCgDg");
	this.shape_43.setTransform(19.6,14.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAzA+QgCgDgCgKIgDgOQgEgNgIgtIgQAxIgFAQQgDAKgDAGQgDAGgGAAQgEAAgDgFIgEgJIgCgKQgIgdgHggIgCAPIgLAqQgBAIgEAPQgCAHgGAAQgEAAgCgDQgCgDAAgDQAAgOAGgUIAJghIAEgaQAEgSAEgGQAEgFAEAAQAGAAACAGQAEAIAEAWQAEAcAJAfQALgfAKgjIACgMQACgHACgFQADgGAFAAQAIAAAEAOIADATQAEAlAIAaIAEAPIADAOQAAADgCADQgDACgEAAQgEAAgDgFg");
	this.shape_44.setTransform(9.7,14.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgIA8IABgeIABgeIAAgdIAAgfQAAgHAHgBQAJABAAAHIgBAfIAAAdIgCApIgBAUQAAAHgHAAQgHABAAgJg");
	this.shape_45.setTransform(212.5,14.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgHA8QgDgCABgEIgBgOIAAgPIABgUIABgSQAAgFACgBQACgDAEAAQACAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgDACQgCADgCgBQgEABgCgDgAgFgtQgDgDAAgEQAAgDADgDQAEgEACAAQAFAAADAEQACADAAADQAAAEgCADQgDADgFAAQgCAAgEgDg");
	this.shape_46.setTransform(208,14.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgTAAgJgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQALAFAAAHIgBAEIgBAKIgBARQAAALACAGIAFAPIACAEIAAABQAAAEgCACQgDACgCAAQgCAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIAAgIIACgJIgFgCIgEgBQgLgBgKALg");
	this.shape_47.setTransform(201.1,16.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgGAAQgKAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgDACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIABgXIAAgIIgBgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_48.setTransform(192.5,16.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgIgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQALAFABAHIgCAEIgBAKIgBARQAAALACAGIAEAPIADAEIAAABQAAAEgCACQgCACgDAAQgCAAgFgDgAgNgUQgKALABAMQAAAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIABgIIABgJIgGgCIgDgBQgLgBgKALg");
	this.shape_49.setTransform(178.4,16.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAEgBQAJgDgBgFQABgMgRgDIgHgCQgLgCgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgCQAEgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgCgDIgDgJIgTAGQgMAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgJAGgPAAQgLAAgJgEg");
	this.shape_50.setTransform(164.5,16.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgcBAQgLgCAAgHQABgGAGgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgFAJgFAEQgHAEgHAAQgOAAgKgKQgKgLAAgPQAAgWAOgOQAMgOAXAAQAHAAAFACQAGACACAEQAKAAgBAKIgBAPIgCAQIgCAbQgBAQgDALQgEANgIAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQABAMAEAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgHgBQgPAAgJALg");
	this.shape_51.setTransform(156,18.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgcBAQgLgCAAgHQABgGAGgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgFAJgFAEQgHAEgHAAQgOAAgKgKQgKgLAAgPQAAgWAOgOQAMgOAXAAQAHAAAFACQAGACACAEQAKAAgBAKIgBAPIgCAQIgCAbQgBAQgDALQgEANgIAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQABAMAEAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgHgBQgPAAgJALg");
	this.shape_52.setTransform(147,18.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgHA8QgDgCAAgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDAAgEQAAgDADgDQACgEAEAAQADAAADAEQADADAAADQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_53.setTransform(140.4,14.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AATAuQgIAAgGgWIgDgTIgCgSIgHAPIgMAiQgBADgCACQgDAFgFAAQgHAAgGgZQgDgNgCgVIgCgMIgCgNQAAgDADgCQACgDADAAQAHAAABAHIACAMIACANIAEAkQAJgZAKghQADgJAGAAQAGAAADAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQADAAADACQADACgBAEIAAADQgHAcgKAhQgDAHgFAIQgCAFgFAAIgBgBg");
	this.shape_54.setTransform(132.1,16.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAPAAIANAAIATABIATABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgTgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_55.setTransform(121.2,14.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgcBAQgKgCAAgHQgBgGAIgBIAKACIAPABQAPAAAGgPQAEgLAAgVQgFAJgGAEQgFAEgHAAQgQAAgJgKQgJgLAAgPQgBgWANgOQAOgOAVAAQAIAAAGACQAEACAEAEQAIAAABAKIgDAPIgCAQIgBAbQgBAQgDALQgEANgIAHQgKAIgSAAQgLAAgHgCgAgPgpQgHAKAAAPQgBAMAFAFQAEAGAKAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgIgBQgOAAgJALg");
	this.shape_56.setTransform(105,18.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAABAKIAAAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_57.setTransform(96.4,16.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AgHA8QgDgCABgEIgBgOIAAgPIABgUIABgSQgBgFADgBQACgDAEAAQACAAACADQADABAAAFIgBASIgBAUIABAPIAAAOQgBAEgCACQgCADgCgBQgEABgCgDgAgFgtQgCgDAAgEQAAgDACgDQAEgEACAAQAEAAAEAEQACADAAADQAAAEgCADQgEADgEAAQgCAAgEgDg");
	this.shape_58.setTransform(89.5,14.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgdA5QgLgMAAgSQgBgXAMgMQAMgNASAAQAKAAAEADIAIAFQACgjABgMQABgHAHAAQAHAAAAAIQAAAMgDAnIgBAXQAAAcADAOIAAACQAAADgCACQgDADgDAAQgFAAgDgIQgFAFgHACQgGACgHAAQgQAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAJAAQAGAAAGgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape_59.setTransform(81.9,14.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIAAAIQAAAEgBACQgDACgEAAQgDAAgCgCQgDgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_60.setTransform(72.7,16.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgIgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQALAFAAAHIgBAEIgBAKIgBARQAAALACAGIAEAPIADAEIAAABQAAAEgCACQgCACgDAAQgCAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIAAgIIACgJIgFgCIgEgBQgLgBgKALg");
	this.shape_61.setTransform(63.7,16.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_62.setTransform(54.6,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,412.2,27.7);


(lib.HammeringTwiggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(316.6,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgDAAgCIABgHIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgDAFABQASAAALANQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAFQAFABAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_1.setTransform(309.5,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_2.setTransform(297.8,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAoQgKAFgNAAQgKAAgIgFQgHgFgCgKQgDgWAAgQQAAgMACgPQACgHAGAAQAEABADACQACACAAADIgBANIgBANIABAXQAAAJACAGIAGADIAEABQALAAAMgFIAAgQIAAgPQAAgSABgOQACgHAGAAQAEAAADADQACABAAAEIgBAgIAAARIAAASIAAAFIAAAGQAAADgCADQgDACgDAAQgGAAgDgIg");
	this.shape_3.setTransform(286.7,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_4.setTransform(277.5,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_5.setTransform(268.4,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_6.setTransform(255.5,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAHAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgPAGQgNAGgMAAQgSAAgMgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgHgHgNAAQgKAAgGAIg");
	this.shape_7.setTransform(246.7,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_8.setTransform(237.1,14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdA5QgMgMABgSQgBgXAMgMQAMgNASAAQAKAAAEADIAIAFQABgjACgMQABgHAHAAQAHAAAAAIQABAMgEAnIgBAXQAAAcACAOIAAACQABADgCACQgDADgDAAQgFAAgDgIQgFAFgHACQgGACgHAAQgQAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAJAAQAGAAAGgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape_9.setTransform(222,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAkQgNgLAAgSQAAgVALgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAHAEQAHADAIAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQADACgBADQABAJgPAGQgNAGgMAAQgSAAgMgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_10.setTransform(212.5,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_11.setTransform(202.9,14.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAFgBQAHgDAAgFQAAgMgPgDIgIgCQgLgCgFgEQgHgEAAgJQAAgSARgGIAPgGQALgDAFgCQADgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgCACgEAAQgEAAgCgDIgCgJIgTAGQgNAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgJAGgPAAQgLAAgJgEg");
	this.shape_12.setTransform(193.5,16.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAbArIgGgHIgOAHQgGACgDAAQgTAAgKgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAAEgCACQgDACgDAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIABgIIABgJIgGgCIgDgBQgMgBgJALg");
	this.shape_13.setTransform(185.3,16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_14.setTransform(174.4,16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEACgDQADgCAEAAQACAAAEAEQACACAHABIAKABQAGAAAEgBQAJgDAAgFQgBgMgQgDIgHgCQgLgCgFgEQgGgEAAgJQAAgSAQgGIAPgGQALgDAEgCQAEgCAEAAQAEAAACADQACACAAADIABAHIABAHQAAAEgCADQgCACgEAAQgFAAgCgDIgCgJIgTAGQgMAFAAAIIAFACQASACAJAHQAOAIAAAQQAAANgMAHQgKAGgNAAQgLAAgLgEg");
	this.shape_15.setTransform(163.3,16.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEACgDQADgCADAAQADAAAEAEQACACAHABIAKABQAFAAAFgBQAJgDgBgFQAAgMgQgDIgHgCQgLgCgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgCQAEgCAEAAQAEAAACADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgDgDIgCgJIgTAGQgMAFAAAIIAFACQASACAJAHQAOAIAAAQQAAANgMAHQgKAGgNAAQgMAAgKgEg");
	this.shape_16.setTransform(149.9,16.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcBAQgLgCAAgHQAAgGAHgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgEAJgGAEQgGAEgIAAQgPAAgJgKQgKgLAAgPQABgWANgOQANgOAWAAQAHAAAFACQAFACADAEQAKAAgBAKIgBAPIgCAQIgDAbQAAAQgDALQgDANgJAHQgKAIgSAAQgLAAgHgCgAgOgpQgJAKABAPQAAAMAEAFQAEAGAKAAQAHAAAIgIQAIgJABgIIADgcIgHgFIgHgBQgPAAgIALg");
	this.shape_17.setTransform(141.4,18.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcBAQgLgCAAgHQAAgGAHgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgEAJgGAEQgGAEgIAAQgPAAgJgKQgKgLAAgPQABgWANgOQANgOAWAAQAHAAAFACQAFACADAEQAKAAgBAKIgBAPIgCAQIgDAbQAAAQgDALQgDANgJAHQgKAIgSAAQgLAAgHgCgAgOgpQgJAKABAPQAAAMAEAFQAEAGAKAAQAHAAAIgIQAIgJABgIIADgcIgHgFIgHgBQgPAAgIALg");
	this.shape_18.setTransform(132.4,18.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQABgFACgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgCACQgDADgCgBQgEABgCgDgAgEgtQgEgDAAgEQAAgDAEgDQACgEADAAQAFAAACAEQADADAAADQAAAEgDADQgCADgFAAQgDAAgCgDg");
	this.shape_19.setTransform(125.8,14.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATAuQgIAAgGgWIgDgTIgCgSIgHAPIgMAiQgBADgDACQgCAFgFAAQgGAAgHgZQgCgNgDgVIgDgMIgBgNQABgDACgCQACgDADAAQAHAAABAHIACAMIABANIAGAkQAJgZAJghQADgJAGAAQAGAAADAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQAEAAACACQACACABAEIgBADQgGAcgLAhQgDAHgFAIQgCAFgFAAIgBgBg");
	this.shape_20.setTransform(117.5,16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFA9QgCgCAAgEIAAgEIAAgDIAAgNIgBgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEADgCQACgDAEAAIANABIAOABIAOAAIAOAAIATABIATABQAEAAADACQACADAAADQAAAEgCADQgDACgEAAIgTgBIgTgBIgFAAIACAlIACAlIABAIIAAAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_21.setTransform(106.6,14.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgKASQgCgCAAgDIAGgNIAGgPQACgEADAAQADAAADACQACADAAACQgBACgLAaQgCAEgDAAQgDAAgDgCg");
	this.shape_22.setTransform(93.2,21.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9900FF").s().p("AgcBAQgLgCAAgHQABgGAGgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgFAJgFAEQgHAEgHAAQgOAAgKgKQgKgLAAgPQAAgWAOgOQANgOAWAAQAHAAAFACQAGACACAEQAKAAgBAKIgBAPIgCAQIgDAbQAAAQgDALQgEANgIAHQgKAIgRAAQgMAAgHgCgAgOgpQgJAKAAAPQABAMAEAFQAEAGAKAAQAHAAAIgIQAIgJABgIIADgcIgHgFIgHgBQgPAAgIALg");
	this.shape_23.setTransform(85.7,18.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9900FF").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgKAAgHALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgDAAQgEAAgCgCQgCgCAAgEIgBgIIAAgHIABgXIABgXIAAgIIgBgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_24.setTransform(77.1,16.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9900FF").s().p("AgHA8QgDgCAAgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDAAgEQAAgDADgDQACgEAEAAQADAAADAEQADADAAADQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_25.setTransform(70.2,14.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9900FF").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_26.setTransform(63.8,16.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9900FF").s().p("AgcAkQgNgLAAgSQAAgVALgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgPAGQgNAGgMAAQgSAAgMgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgHgHgNAAQgKAAgGAIg");
	this.shape_27.setTransform(55,16.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9900FF").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_28.setTransform(43.7,16.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9900FF").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_29.setTransform(30.5,16.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9900FF").s().p("AAbArIgGgHIgOAHQgGACgDAAQgUAAgJgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQAMAFgBAHIgBAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAAEgCACQgDACgDAAQgBAAgEgDgAgNgUQgKALABAMQgBAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgFgCIgEgBQgMgBgJALg");
	this.shape_30.setTransform(19.5,16.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9900FF").s().p("AgzBCQgCgDgBgDIACgaIABgbIAAgMIAAgPIAAgTIACgUQAAgDACgDQACgCADAAQAEAAACACQACADAAADIgBAUIgBAUIABAUIAjgGQAVgEAPAAIAAgkQABgGACgGQACgKAFABQAEgBACADQADACgBAEIAAADQgBAEgBAGIABAIIAAAHIgBAZIgCAXIABATIABAUQAAADgCACQgCACgEAAQgDAAgDgCQgCgCAAgDIgBgUIgBgTIAAgMQgNAAgVAEIgjAHIgBAWIgBAVQAAADgCADQgDACgEAAQgDAAgCgCg");
	this.shape_31.setTransform(8.7,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320.8,27.7);


(lib.Bringinganotherskateboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(421.5,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_1.setTransform(415.3,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_2.setTransform(407.5,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgIgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQALAFAAAHIgBAEIgBAKIgBARQAAALACAGIAEAPIADAEIAAABQAAAEgCACQgCACgDAAQgCAAgFgDgAgNgUQgKALABAMQAAAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIABgIIABgJIgGgCIgDgBQgLgBgKALg");
	this.shape_3.setTransform(398.9,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfBEQgDgDAAgEIABghIAAggIgCghIgBgRQAAgGACgEQADgFAFAAQADABACACQACACAAADIAAADIgBAEQAHgFAHgCQAGgCAGAAQARAAAIAPQAGAMAAATQAAASgKALQgKANgRAAQgHAAgKgDIAAAnQAAAEgDADQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAGIABAnQAJADAIABQAKgBAGgHQAFgGAAgLQAAgOgEgIQgEgHgHAAQgHAAgGADg");
	this.shape_4.setTransform(390,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_5.setTransform(376.5,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_6.setTransform(367.7,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_7.setTransform(358.1,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcBAQgLgCAAgHQAAgGAIgBIAKACIAPABQAPAAAGgPQAEgLAAgVQgEAJgHAEQgGAEgGAAQgQAAgJgKQgKgLAAgPQABgWANgOQANgOAWAAQAIAAAFACQAEACAEAEQAJAAAAAKIgCAPIgDAQIgCAbQAAAQgDALQgDANgJAHQgKAIgSAAQgLAAgHgCgAgOgpQgJAKABAPQAAAMAEAFQAFAGAJAAQAHAAAIgIQAIgJABgIIADgcIgHgFIgIgBQgOAAgIALg");
	this.shape_8.setTransform(343.4,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCgBgEIAAgIIgBgHIABgXIACgXIAAgIIgBgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_9.setTransform(334.7,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHA8QgCgCgBgEIAAgOIAAgPIAAgUIABgSQABgFACgBQACgDADAAQADAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgCACQgDADgCgBQgEABgCgDgAgEgtQgEgDAAgEQAAgDAEgDQACgEADAAQAFAAACAEQADADAAADQAAAEgDADQgCADgFAAQgDAAgCgDg");
	this.shape_10.setTransform(327.9,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_11.setTransform(320.7,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdA5QgLgMAAgSQgBgXAMgMQAMgNASAAQAKAAAEADIAIAFQACgjABgMQABgHAHAAQAHAAAAAIQAAAMgDAnIgBAXQAAAcADAOIAAACQAAADgCACQgDADgDAAQgFAAgDgIQgFAFgHACQgGACgHAAQgRAAgLgLgAgTABQgHAJAAAQQAAALAIAIQAHAHAKAAQAGAAAGgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgFgCQgGgEgHAAQgNAAgHAHg");
	this.shape_12.setTransform(311.3,14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEACgDQADgCAEAAQACAAAEAEQACACAHABIAKABQAGAAAFgBQAHgDABgFQgBgMgQgDIgHgCQgLgCgFgEQgGgEAAgJQAAgSAQgGIAPgGQALgDAFgCQADgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgCACgEAAQgFAAgCgDIgCgJIgSAGQgNAFAAAIIAFACQASACAJAHQAOAIAAAQQAAANgMAHQgJAGgOAAQgLAAgLgEg");
	this.shape_13.setTransform(296.9,16.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHA8QgDgCABgEIgBgOIAAgPIABgUIAAgSQABgFACgBQACgDAEAAQACAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgDACQgCADgCgBQgEABgCgDgAgFgtQgDgDAAgEQAAgDADgDQAEgEACAAQAEAAAEAEQACADAAADQAAAEgCADQgEADgEAAQgCAAgEgDg");
	this.shape_14.setTransform(290.8,14.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVBBQgDgCAAgEQAAgIASgoIgeg4IgDgGQgDgEAAgCQAAgEADgCQADgDADAAQAEAAACADQAOAUAPAkIAMgdIANgZQADgFAEAAQAEAAACACQADADAAADIgBAEIgdA9QgLAXgEAPIgGAQQgCAGgFAAQgEAAgCgCg");
	this.shape_15.setTransform(278.4,18.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNBHQgCgCAAgEIAAgCQACgLAAgMIgBgXIAAgXIgMABQgJAAAAgIQAAgJAPAAIAHAAIACgNQACgSAHgIQAIgLASAAQAMAAAAAIQAAAIgKAAQgVAAgCAcIAAAFIASgBQANAAAAAIQAAAGgGACIgHAAIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgCg");
	this.shape_16.setTransform(269.8,14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNBHQgCgCAAgEIAAgCQACgLAAgMIgBgXIAAgXIgMABQgJAAAAgIQAAgJAPAAIAHAAIACgNQACgSAHgIQAIgLASAAQAMAAAAAIQAAAIgLAAQgUAAgCAcIAAAFIASgBQANAAAAAIQAAAGgGACIgHAAIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgCg");
	this.shape_17.setTransform(261.1,14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AATAoQgLAFgMAAQgLAAgIgFQgHgFgBgKQgEgWAAgQQAAgMADgPQAAgHAIAAQADABACACQADACAAADIgBANIgCANIACAXQAAAJACAGIAFADIAGABQAKAAAMgFIAAgQIAAgPQAAgSACgOQAAgHAIAAQADAAACADQADABAAAEIgCAgIAAARIAAASIABAFIAAAGQAAADgDADQgCACgDAAQgHAAgBgIg");
	this.shape_18.setTransform(252.6,16.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_19.setTransform(243.2,14.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJASQgCgCAAgDIAEgNIAHgPQACgEADAAQADAAACACQACADAAACQAAACgMAaQAAAEgFAAQgCAAgCgCg");
	this.shape_20.setTransform(230.5,21.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9900FF").s().p("AgdA5QgLgMAAgSQAAgXALgMQAMgNASAAQAKAAAEADIAJAFQABgjABgMQABgHAHAAQAHAAABAIQgBAMgDAnIgBAXQAAAcADAOIAAACQAAADgDACQgCADgDAAQgFAAgDgIQgFAFgHACQgGACgHAAQgQAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAHAHAKAAQAHAAAEgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgFgCQgGgEgHAAQgNAAgHAHg");
	this.shape_21.setTransform(222.6,14.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9900FF").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_22.setTransform(213.8,16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9900FF").s().p("AAaArIgFgHIgOAHQgGACgDAAQgTAAgJgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQALAFAAAHIgBAEIgBAKIgBARQAAALABAGIAGAPIACAEIAAABQAAAEgCACQgDACgDAAQgBAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIAAgIIACgJIgFgCIgEgBQgLgBgKALg");
	this.shape_23.setTransform(205.1,16.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9900FF").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_24.setTransform(196.1,16.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9900FF").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgDAAgCIABgHIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgDAFABQASAAALANQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAFQAFABAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_25.setTransform(186.9,14.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9900FF").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQACACAAADQAAAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgIAIg");
	this.shape_26.setTransform(177.2,16.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9900FF").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_27.setTransform(168.4,15.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9900FF").s().p("AAbArIgGgHIgOAHQgGACgDAAQgTAAgKgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAAEgCACQgDACgDAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIABgIIABgJIgGgCIgDgBQgMgBgJALg");
	this.shape_28.setTransform(160.1,16.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9900FF").s().p("AAWA/QgEgIgJgLIgOgVIgOALIgBAZQgBAEgCACQgCADgDAAQgJAAAAgMIABgUIABgVIABgcIAAgcIAAgJIgBgJQAAgEACgCQACgCAEAAQAEAAACACQACACAAAEIABAJIAAAJIAAAbIgBAcIAVgSIASgTQADgDADAAQAEAAACADQACACABAEQgBACgCADQgKAMgPANIASAYQANASAAAFQAAADgDADQgDACgDAAQgFAAgCgFg");
	this.shape_29.setTransform(151.6,14.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9900FF").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAEgBQAIgDAAgFQAAgMgPgDIgIgCQgLgCgEgEQgIgEAAgJQAAgSARgGIAPgGQALgDAEgCQAEgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgCgDIgCgJIgUAGQgMAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgJAGgPAAQgKAAgKgEg");
	this.shape_30.setTransform(142.1,16.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9900FF").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_31.setTransform(129.3,16.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9900FF").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_32.setTransform(120.5,16.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9900FF").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_33.setTransform(110.9,14.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9900FF").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_34.setTransform(101.8,15.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9900FF").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_35.setTransform(93.2,16.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9900FF").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgDAAQgEAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_36.setTransform(84.7,16.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9900FF").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgIgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQAMAFAAAHIgCAEIgBAKIgBARQAAALACAGIAEAPIACAEIABABQAAAEgCACQgCACgDAAQgCAAgFgDgAgNgUQgKALAAAMQABAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIABgIIABgJIgGgCIgDgBQgLgBgKALg");
	this.shape_37.setTransform(75.7,16.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9900FF").s().p("AgcBAQgLgCABgHQAAgGAGgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgFAJgFAEQgHAEgHAAQgOAAgKgKQgKgLABgPQAAgWANgOQAMgOAWAAQAJAAAEACQAGACACAEQAJAAAAAKIgCAPIgBAQIgCAbQgBAQgDALQgDANgJAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQAAAMAFAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgHgBQgPAAgJALg");
	this.shape_38.setTransform(61.6,18.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9900FF").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgDACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIAAgXIAAgIIAAgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSANAAQAOAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_39.setTransform(53,16.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9900FF").s().p("AgHA8QgCgCAAgEIgBgOIAAgPIABgUIABgSQAAgFACgBQACgDAEAAQACAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgCACQgCADgDgBQgDABgCgDgAgFgtQgCgDAAgEQAAgDACgDQAEgEADAAQADAAAEAEQACADAAADQAAAEgCADQgEADgDAAQgDAAgEgDg");
	this.shape_40.setTransform(46.1,14.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9900FF").s().p("AgcBAQgKgCAAgHQgBgGAIgBIAKACIAPABQAPAAAGgPQAEgLAAgVQgEAJgHAEQgGAEgGAAQgPAAgKgKQgJgLAAgPQgBgWANgOQAOgOAVAAQAIAAAGACQAEACAEAEQAIAAABAKIgDAPIgCAQIgCAbQAAAQgDALQgEANgIAHQgKAIgSAAQgLAAgHgCgAgOgpQgIAKAAAPQgBAMAFAFQAFAGAJAAQAHAAAIgIQAIgJAAgIIAEgcIgHgFIgIgBQgOAAgIALg");
	this.shape_41.setTransform(39,18.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9900FF").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQgBAEgBACQgDACgEAAQgDAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_42.setTransform(30.3,16.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9900FF").s().p("AgHA8QgDgCABgEIgBgOIAAgPIABgUIAAgSQABgFACgBQACgDAEAAQACAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgDACQgCADgCgBQgEABgCgDgAgFgtQgDgDAAgEQAAgDADgDQAEgEACAAQAFAAACAEQADADAAADQAAAEgDADQgCADgFAAQgCAAgEgDg");
	this.shape_43.setTransform(23.5,14.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9900FF").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_44.setTransform(17.1,16.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9900FF").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_45.setTransform(7.8,14.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgdA5QgLgMAAgSQAAgXALgMQAMgNASAAQAKAAAEADIAJAFQABgjABgMQABgHAHAAQAHAAABAIQgBAMgDAnIgBAXQAAAcADAOIAAACQAAADgDACQgCADgDAAQgFAAgDgIQgFAFgHACQgGACgHAAQgQAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAHAHAKAAQAHAAAEgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgFgCQgGgEgHAAQgNAAgHAHg");
	this.shape_46.setTransform(222.6,14.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_47.setTransform(213.8,16.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgTAAgJgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQALAFAAAHIgBAEIgBAKIgBARQAAALABAGIAGAPIACAEIAAABQAAAEgCACQgDACgDAAQgBAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIAAgIIACgJIgFgCIgEgBQgLgBgKALg");
	this.shape_48.setTransform(205.1,16.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_49.setTransform(196.1,16.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgDAAgCIABgHIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgDAFABQASAAALANQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAFQAFABAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_50.setTransform(186.9,14.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQACACAAADQAAAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgIAIg");
	this.shape_51.setTransform(177.2,16.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_52.setTransform(168.4,15.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AAbArIgGgHIgOAHQgGACgDAAQgTAAgKgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAAEgCACQgDACgDAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIABgIIABgJIgGgCIgDgBQgMgBgJALg");
	this.shape_53.setTransform(160.1,16.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AAWA/QgEgIgJgLIgOgVIgOALIgBAZQgBAEgCACQgCADgDAAQgJAAAAgMIABgUIABgVIABgcIAAgcIAAgJIgBgJQAAgEACgCQACgCAEAAQAEAAACACQACACAAAEIABAJIAAAJIAAAbIgBAcIAVgSIASgTQADgDADAAQAEAAACADQACACABAEQgBACgCADQgKAMgPANIASAYQANASAAAFQAAADgDADQgDACgDAAQgFAAgCgFg");
	this.shape_54.setTransform(151.6,14.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAEgBQAIgDAAgFQAAgMgPgDIgIgCQgLgCgEgEQgIgEAAgJQAAgSARgGIAPgGQALgDAEgCQAEgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgCgDIgCgJIgUAGQgMAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgJAGgPAAQgKAAgKgEg");
	this.shape_55.setTransform(142.1,16.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_56.setTransform(129.3,16.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_57.setTransform(120.5,16.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_58.setTransform(110.9,14.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_59.setTransform(101.8,15.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_60.setTransform(93.2,16.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgDAAQgEAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_61.setTransform(84.7,16.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgIgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQAMAFAAAHIgCAEIgBAKIgBARQAAALACAGIAEAPIACAEIABABQAAAEgCACQgCACgDAAQgCAAgFgDgAgNgUQgKALAAAMQABAOAEAHQAFAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIABgIIABgJIgGgCIgDgBQgLgBgKALg");
	this.shape_62.setTransform(75.7,16.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AgcBAQgLgCABgHQAAgGAGgBIAKACIAQABQAPAAAGgPQAEgLAAgVQgFAJgFAEQgHAEgHAAQgOAAgKgKQgKgLABgPQAAgWANgOQAMgOAWAAQAJAAAEACQAGACACAEQAJAAAAAKIgCAPIgBAQIgCAbQgBAQgDALQgDANgJAHQgKAIgRAAQgMAAgHgCgAgPgpQgHAKgBAPQAAAMAFAFQAFAGAJAAQAHAAAIgIQAHgJABgIIAEgcIgHgFIgHgBQgPAAgJALg");
	this.shape_63.setTransform(61.6,18.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgDACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIAAgXIAAgIIAAgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSANAAQAOAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_64.setTransform(53,16.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgHA8QgCgCAAgEIgBgOIAAgPIABgUIABgSQAAgFACgBQACgDAEAAQACAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgCACQgCADgDgBQgDABgCgDgAgFgtQgCgDAAgEQAAgDACgDQAEgEADAAQADAAAEAEQACADAAADQAAAEgCADQgEADgDAAQgDAAgEgDg");
	this.shape_65.setTransform(46.1,14.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgcBAQgKgCAAgHQgBgGAIgBIAKACIAPABQAPAAAGgPQAEgLAAgVQgEAJgHAEQgGAEgGAAQgPAAgKgKQgJgLAAgPQgBgWANgOQAOgOAVAAQAIAAAGACQAEACAEAEQAIAAABAKIgDAPIgCAQIgCAbQAAAQgDALQgEANgIAHQgKAIgSAAQgLAAgHgCgAgOgpQgIAKAAAPQgBAMAFAFQAFAGAJAAQAHAAAIgIQAIgJAAgIIAEgcIgHgFIgIgBQgOAAgIALg");
	this.shape_66.setTransform(39,18.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQgBAEgBACQgDACgEAAQgDAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_67.setTransform(30.3,16.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgHA8QgDgCABgEIgBgOIAAgPIABgUIAAgSQABgFACgBQACgDAEAAQACAAADADQACABAAAFIgBASIgBAUIABAPIAAAOQAAAEgDACQgCADgCgBQgEABgCgDgAgFgtQgDgDAAgEQAAgDADgDQAEgEACAAQAFAAACAEQADADAAADQAAAEgDADQgCADgFAAQgCAAgEgDg");
	this.shape_68.setTransform(23.5,14.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_69.setTransform(17.1,16.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_70.setTransform(7.8,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,425.8,27.7);


(lib.PresentPartDef2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEgBAFQABAGgFAEQgEAFgGgBQgFABgEgFg");
	this.shape.setTransform(520,28.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_1.setTransform(509.7,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_2.setTransform(494.8,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9900FF").s().p("AgzBWQgDgDAAgFQAAgGADgDQAEgDAEAAIAZgDQACgKAAgMIgBgTIgBgUQABgaACgpIgOABIgQAAQgFAAgEgDQgCgEAAgFQAAgLALAAIAjgBQAWAAAjAEQAKACAAALQAAAGgDADQgEACgFABIgSgCIgTgDQgDAiAAAfIABAUIAAAUIAAAUIAlAAQAEAAAEAEQADACAAAGQAAAFgDAEQgEADgEAAIgUAAIgUAAIgWACIgYADQgEgBgEgDg");
	this.shape_3.setTransform(479.8,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9900FF").s().p("AgHBWQgEgDAAgGIABgFIAAgFIgBgRIgBgSQAAgQgDgeIgCgvIgLAAQgaAAgPgDQgJgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgbgBIgbgBIgIAAQABAQADAkQACAhAAATIABAMIAAANQABAIgDAFQgDAIgHAAQgEAAgDgDg");
	this.shape_4.setTransform(466.1,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9900FF").s().p("AgwBIQgQgSAAgZQAAgmAhgqQAcgjAbAAIAKABIAIABQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCAEQgEAEgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgUAaQgcAjAAAeQAAAPAKALQAKAMAOAAQALAAAMgHQAHgDAOgKQAHgFADAAQAFAAAEADQADAEAAAFQAAAFgEAEQgfAcgfAAQgYAAgRgTg");
	this.shape_5.setTransform(449.9,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9900FF").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_6.setTransform(435.3,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9900FF").s().p("AgvBRQgXgQAAgWQAAgOANAAQALAAAAAOQAAAKAOAKQANAJAMAAQAIAAAFg7QABgbAAgqIAAgNIgHAAIgNAAIgOAAQgGAAgDgEQgEgDABgGQAAgMAQAAIAMABIALAAIAWgBIAVgBQAbAAABAOQgBAEgDAEQgDAEgFAAIgHgBIgJgBIgNABIABAOQAABWgMAoQgIAagSAAQgVAAgTgPg");
	this.shape_7.setTransform(419.6,20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9900FF").s().p("AgkBeQgNgDgHgFIgBAAQgFAAgDgDQgEgEAAgFIABgkIABglIgBgpIAAgoQAAgFAFgGQAFgFAFAAQADAAAPAIQASAJADABQAhALAXAYQAcAcAAAfQAAAVgJASQgKATgQALQgSAMgiAAQgIAAgLgDgAgsggIAAAhIgBBAIACABQALAIAPAAQAagBAMgHQAMgJAGgMQAHgNAAgOQAAghgkgYQgLgHgrgUg");
	this.shape_8.setTransform(403.3,19.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9900FF").s().p("AApA9QgDgLgFgaQgMABgTAFIgeAGQgGAPgOAeQgEAGgHAAQgFAAgDgDQgDgDgBgFQAAgGASglQgCgDAAgEQAAgKALgCQAOgYAVghQAagsAHAAQAJAAADAMIAIAoIASBQIAGATQADAJAAADQAAAFgDAEQgEADgEAAQgMAAgHgbgAgPAIIAqgIIgJgtg");
	this.shape_9.setTransform(385.3,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_10.setTransform(363.5,22.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAFQAQAHAAAKQAAADgDACIgBAOIgBAZQAAAPACAJQABAFAGAQIADAGIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGALAOAAQAKAAAIgFQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_11.setTransform(350.8,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnAyQgSgOAAgaQgBgeAQgVQAPgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQANgDAFgGQAEgHAEAAQAEAAAEAEQADADAAADQgBAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKALgFAWIAkgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_12.setTransform(331.1,22.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgjBYQgEAFgFAAQgEAAgDgDQgEgDAAgFIABgJIAAgJIgBglIgBgkIAAggIAAghQABgHADgGQADgHAHAAQAJAAAAAKIAAAFIgBAFIAAAaIAAAeQAJgHAKgEQAJgDAHAAQAZAAAQATQAPARAAAbQgBAagRATQgRATgZAAQgSAAgOgHgAgRgFIgRALIgBAUIABASIAAAUIAPAGQAIACAIAAQARAAAKgMQAMgLAAgSQgBgSgIgLQgKgMgQAAQgJAAgJAFg");
	this.shape_13.setTransform(317.5,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_14.setTransform(296.9,22.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgQQgMgOAAgeQAAgcATgTQAUgVAaAAQAKAAANAFQAQAHAAAKQAAADgDACIgBAOIgBAZQAAAPACAJQABAFAGAQIADAGIAAACQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGALAOAAQAKAAAIgFQAEgCAIgHQgEgeAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_15.setTransform(284.2,22.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghAzQgQgPAAgZQAAgWAPgaQARgcAWAAQALAAAPAGQASAGAAAKQgBAFgDADQgDADgEABQgDgBgCgBIgGgFQgGgFgQAAQgLAAgMAVQgKAUAAANQAAAPAKAKQAKAIAPAAQAGAAAJgEIANgHIAFgCQAEAAADADQAEAEAAAEQgBAJgRAIQgQAHgKAAQgYAAgQgPg");
	this.shape_16.setTransform(272,22.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ag2BaQgFgFAAgFIAAgiIADgvQACghAAgPIABggQABgGADgCQAQgFAVAAQATAAATAOQAWAQAAAYQAAAegXARQARAHAJAJQAJAJAAALQAAAOgQAOQgKAJgMAFQgaAKgpAAQgEAAgFgFgAgjAvIAAAYQAegBATgIQAIgDAHgHQAIgGgBgDQABgFgQgHQgLgFgKgDIgMgCIgFAAIgEAAIgOgBIAAAbgAgehFIAAAUIgDAuIARABQASgBAKgKQANgKAAgRQAAgLgNgJQgMgKgMAAIgSABg");
	this.shape_17.setTransform(244.4,19.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_18.setTransform(229,19.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_19.setTransform(214,19.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_20.setTransform(199.1,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoAyQgRgOgBgaQABgeAPgVQAQgWAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAFAMgBQAIAAAKgDQAPgDADgGQAEgHAFAAQAEAAAEAEQACADAAADQAAAOgUAJQgSAIgRAAQgaAAgRgOgAgYgfQgJALgFAWIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKALg");
	this.shape_21.setTransform(177.1,22.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_22.setTransform(163.5,19.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBSQgDgDAAgEIAAgNIABgOIgDhDIgagDQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgOQAAgGADgCQADgDAFgBQAKAAACARIAAALIAAAGIAAAIIAQgCQANAAADABQAHADAAAIQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQADIADBDIAAAGIAAAGQAAAZgMAAQgEAAgEgDg");
	this.shape_23.setTransform(150.7,20.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_24.setTransform(131.7,20);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_25.setTransform(119.3,22.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGBFQgDgDAAgGQAAgOgDgbQgDgbAAgOQAAgNgEgHQgIAEgIAJIgOAPIgGAHIgBAUIgBAUIABAKIABAJQAAAFgDADQgFAEgEAAQgOAAAAgeIACgVIABgUIgBgTIgBgTQAAgaAMAAQAEAAAEAEQAEAEAAAEIAAAHIgBAHIAAANQAHgNALgKQAMgKAIAAQASAAAHASQAGgIAJgFQAJgEAMAAQATAAAHAVQACAEADAdIAIBCQABAFgEADQgEADgEAAQgKAAgBgKIgFgkIgEgjQgBgIgDgIQgEgLgFAAQgEAAgLAIQgMAGgDAFIAAAWIADAeQADASAAAMQAAAGgEADQgCADgGAAQgEAAgDgDg");
	this.shape_26.setTransform(96.9,22.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAFAIAAAOIAAAIQgBAPgMAAQgJAAgBgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgLAAQgKAAAAgMg");
	this.shape_27.setTransform(82,22.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_28.setTransform(69.4,22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_29.setTransform(57,20);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("Ag8BQQgOgQAAghQAAgeAOgfQAPggAWgUQAPgNAQAAQALAAARAHQAVAIAAAKQAAAFgDAEQgEAEgFAAQgCAAgFgDQgSgLgMAAQgIAAgJAJIgOARQgbAkAAAoQAAAWAGAKQAIAJAUAAQAUAAAPgNQAQgOAHgaQghABgWALIgFABQgFAAgEgDQgDgEAAgFQAAgHAGgDQAZgOA+gBQAFAAADAEQAEACAAAFQAAAIgHADQgHAkgXAVQgYAWgeAAQgdAAgPgQg");
	this.shape_30.setTransform(36,19.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AhOBbQgDgDgBgFIABgPIABgPIAAgWIABgWIgBgWIAAgXIgBgWIgCgWQABgGAEgEQAEgFAHAAQAFAAAKAOQAdAsAXAdQAbAhAhAfIAAgPIAAgOQAAgzgEgeIgDgMQgDgIABgFQAAgOAMAAQAUAAABBNIgBAlIgBAnIgCATQgBAMgLAAQgHAAgIgJQgwgtg9hUIAAAbIAAAaIAAAdIAAAdQAAAggMAAQgGAAgEgFg");
	this.shape_31.setTransform(18.3,19.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgzBWQgDgDAAgFQAAgGADgDQAEgDAFAAIAZgDQABgKAAgMIgBgTIAAgUQAAgaACgpIgPABIgPAAQgFAAgDgDQgEgEAAgFQAAgLAMAAIAjgBQAWAAAkAEQAKACgBALQAAAGgDADQgEACgEABIgTgCIgTgDQgDAiAAAfIAAAUIABAUIgBAUIAlAAQAFAAADAEQAEACAAAGQAAAFgEAEQgDADgFAAIgUAAIgTAAIgWACIgXADQgFgBgEgDg");
	this.shape_32.setTransform(2,19.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgnAyQgSgOAAgaQgBgeAQgVQAPgWAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAFANgBQAHAAAMgDQANgDAFgGQAEgHAEAAQAEAAAEAEQADADAAADQgBAOgUAJQgTAIgQAAQgaAAgQgOgAgXgfQgKALgFAWIAkgQQAVgLAIgHQgJgKgSAAQgOAAgJALg");
	this.shape_33.setTransform(-18.1,22.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgUgLAAQgOAAgLAMQgGAHgLATQAAAtgDAIQgEAIgHAAQgEAAgEgDQgEgEAAgEIABgGIACgRIAAgSIAAhUIABgUIgBgLQgBgGAAgFQAAgFADgEQAEgCAFAAQAJgBACALQACALAAAJIgBAaIgBAaIAAAJQAKgMALgGQAKgHAMAAQAUAAAHANQAFAIABAVIABAWIACAYIAEAZIABADQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_34.setTransform(-31.6,19.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBWQgDgDAAgGIABgFIAAgFIgBgRIAAgSQAAgQgEgeIgDgvIgKAAQgaAAgPgDQgJgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgagBIgbgBIgIAAQAAAQACAkQADAhAAATIABAMIAAANQAAAIgCAFQgDAIgHAAQgEAAgEgDg");
	this.shape_35.setTransform(-45.8,19.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("Ag8BQQgOgQAAghQAAgeAOgfQAPggAWgUQAPgNAQAAQALAAARAHQAVAIAAAKQAAAFgDAEQgEAEgFAAQgCAAgFgDQgSgLgMAAQgIAAgJAJIgOARQgbAkAAAoQAAAWAGAKQAIAJAUAAQAUAAAPgNQAQgOAHgaQghABgWALIgFABQgFAAgEgDQgDgEAAgFQAAgHAGgDQAZgOA+gBQAFAAADAEQAEACAAAFQAAAIgHADQgHAkgXAVQgYAWgeAAQgdAAgPgQg");
	this.shape_36.setTransform(36,19.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("AhOBbQgDgDgBgFIABgPIABgPIAAgWIABgWIgBgWIAAgXIgBgWIgCgWQABgGAEgEQAEgFAHAAQAFAAAKAOQAdAsAXAdQAbAhAhAfIAAgPIAAgOQAAgzgEgeIgDgMQgDgIABgFQAAgOAMAAQAUAAABBNIgBAlIgBAnIgCATQgBAMgLAAQgHAAgIgJQgwgtg9hUIAAAbIAAAaIAAAdIAAAdQAAAggMAAQgGAAgEgFg");
	this.shape_37.setTransform(18.3,19.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0000FF").s().p("AgzBWQgDgDAAgFQAAgGADgDQAEgDAFAAIAZgDQABgKAAgMIgBgTIAAgUQAAgaACgpIgPABIgPAAQgFAAgDgDQgEgEAAgFQAAgLAMAAIAjgBQAWAAAkAEQAKACgBALQAAAGgDADQgEACgEABIgTgCIgTgDQgDAiAAAfIAAAUIABAUIgBAUIAlAAQAFAAADAEQAEACAAAGQAAAFgEAEQgDADgFAAIgUAAIgTAAIgWACIgXADQgFgBgEgDg");
	this.shape_38.setTransform(2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,0,582.1,37.5);


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


(lib.CouchKidsNailing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AgbAtIABgDIAAAEIgBgBgAgLAMIAEAAIgRAaIANgagAAIgQIACAAIgCAEIAAgEgAAbgtIABABIgCADIABgEg");
	this.shape.setTransform(333.1,-20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE0CC").s().p("AiKDlQgEhSA3hgQAeg1BDhkQACgIgDgIQgEgJAAgDQAQgIAfgYQAdgSAZAGQgCgDgQgHQgMgGABgNQAbgZAjAxIAAABQgFAAAAAKIAAADIgGAHIAFgFQgBAHgFADIgHACIABgBIgBABQgPALgYAHIgJADQhABfgdAxQg1BYgVBPQAbANArgLQAZgGAsgPQAJABAJAIIAUAVQg+AVgiAKQgrAMgjAAQgZAAgVgGgAgIiMQgLgKAGgTQACADAOAJQALAHABAKQgHAFgGAAQgFAAgFgFgAgCisQgOgXAQgRQAXAEAQA1IgMACQgUAAgJgTgAAji1QgOgRADgdQAZgEANAXQAJAPABATQgJAFgHAAQgMAAgJgMgAA/jjQAGgJANACQANADACAOQgSgBgHALQgIgFgBgPg");
	this.shape_1.setTransform(334.3,-23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996633").s().p("AhYAyQAegRA1gmQAxghAtgMQgLASgcAPQghAQgOAIIgsAdQgWAPgSAAIgHgBg");
	this.shape_2.setTransform(354.3,-49.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAFFFF").s().p("AAIAGQAJgMAAAPQAAAFgCAAIgBAAQgCAAgEgIgAgQgKIAGgDQABAFgGAAg");
	this.shape_3.setTransform(362.8,-65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3839").s().p("ACOB7IAKgNQAIAEgIAIIgIAJIgEACQgDgDAFgHgACEBdQAPgNAFgJQADAKgOAPQgNAOgPAFQAFgJAOgNgAgvhmQAPgSAVgEIgaAaQgPAQgHAPQgGgRASgSgAhch1QAQgUAMAIQgdAWgEAaQgLgPAQgVgAiXhsQAHgJAIACQgBAFgGAFQgHAEAAAFQgJgDAIgJg");
	this.shape_4.setTransform(358.6,-55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgIATIAAglQAOAFACAPQADARgSAAIgBAAg");
	this.shape_5.setTransform(365.9,-51.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AAhAZQgUgfgjgQQAIgXAPgHQAPgGARAJQAmAUgDAxQAGADAAgNQAAgGgBgCQAUAFgMAnQgMAkgUAUQAHgqgXgjgAgYg+QASgNADgKQADABABAHQABAHAEAAQgLAPgHAHQgMALgRAAQACgOAPgLgAgShlIABACQABAFADgFQACASgXARQgXAQgcACQAPgcA0gbg");
	this.shape_6.setTransform(363.1,-55.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AkNG/QAAgNAMgJQAMgMARgBIADAAIAFABIAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQg/ASAaAAQAagBANgCQAOgCgDABIg4ANIgBAFQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCgEIgBAEIgBABIgBgEgAkqGKIAIh5IAEgBQAEAAAAA9QAAAVADAmIgBAEIgDADQgDgIgMADgAlnExIgGABIgGgEQAAgBA8gUQAFAAAAAEQAAADgVAKQgWALgGAAIgEgEgAhcDmQgggDgVgGQgOgPAAgkIADgTIAAgDIACAAQAOgjAcg1QAjg/AKgVIgJAAIAEgEIAFgBQAQgOATghQAWglAKgMQgBgKgLgJQgOgLgDgEQgCgOAIgSQAIgSgEgRQAHgEARgCQAPgEgBgOQAPALAbgJQAYgIAPAQICfhlQABgHgFgGIgGgLQgzAFgQgZQATglAkgSQArgXAgAeQgBAPgJAFQAdAKATAaQASAZADAfQADAfgOAZQgPAbghAMQAAgKAFgOQAFgOAAgKQgMABgJARQgJAQgOAAIAOgkQAHgWgGgPQgdAMgzAgQg5AlgbAQQAAAHAFAHQAGAIgBAGIgBABIAAAJQAAASgcANIgYAIIgRAOQgrAlgMAoIACACIgGAIIgBAAIgBADIgPAaIgCAAIAAAEIgQAYIgEgBIgMAbIgCADIAAABIgCADIACAAIAAAsIAXAKIgFAIIgBAAIgCATQgBgGgEgEQgBgGAAgHIAAgBIAAgCIABgEIgOAAQgCAJABAIIgBAAQgFgQAGgPQgBgTgCgHIgOAZQgWAqgEAlQBPAAAugfQAMAJAKALIABABQgKgIgJgBQgsAPgYAGQgsAMgbgOQAVhPA1hXQAegxBAhgIAIgCQAYgIAPgKIABgBIgBABIAIgDQAEgDABgGIgFAFIAGgIIAAgDQAAgKAFAAIABAAIAAgBQgkgwgaAZQgCANAMAFQAQAHACADQgYgGgeATQgfAXgPAIQAAAEADAJQADAHgCAJQhCBjgfA2Qg2BgADBRQAzAPBJgVQAjgKA9gUIAHAGIgKAEIgHgBQgOAAgXAPIgcAHIhSAWIgLgCgAgOiZQALAJAMgKQgBgKgKgHQgPgJgCgDQgFAUAKAKgAgIi5QANAXAcgGQgPg2gWgEQgSARAOAYgAATjwQgDAcANASQAPATAXgNQgCgTgIgPQgMgTgTAAIgHABgAA5jwQABAPAJAEQAGgLASABQgBgOgOgCIgFgBQgJAAgFAIgAC8kfQg1AngeARQAUAEAbgSIAtgdQAPgJAggQQAcgPALgSQgsAMgzAhgAEcmLQgQAHgJAXQAkAQAVAfQAWAkgHAqQAUgUAMglQANgmgVgGQACADAAAGQAAANgHgDQADgzgmgUQgJgFgJAAQgHAAgGADgAEukXQAUAAgDgRQgCgQgPgFgAECmWQgQAMgCAOQARAAAMgLQAIgHALgPQgEAAgBgIQgBgHgEAAQgDAJgRANgAEHm8Qg0AagOAcQAbgBAXgRQAXgQgBgSQgEAFgBgFQAGgBgBgEIgGADgAEgmsQAEAJADgBQACAAAAgFQAAgIgCAAQgDAAgEAFgAgJBvIAFACIAAALQgEgFgBgIg");
	this.shape_7.setTransform(334.8,-21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgFgJQAMgLAKARIggASQgDgPANgJg");
	this.shape_8.setTransform(314.4,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAFFFF").s().p("AgEARQADgDADAFIgBABIgFgDgAAAgSQAEgCACACQABACgFAHQgOgCAMgHg");
	this.shape_9.setTransform(303.7,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#996633").s().p("AAmAaIgDgCIgkgQIgagNIgOgJIgJgGIgKgHQgPgLgMgNQATABAXANIABAAIAFADIAbATIALAGIAGAEIAvAXQAeAPAGATQgTgLgfgPg");
	this.shape_10.setTransform(321.3,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC6600").s().p("AgyAOIADgBIgDADIAAgCgAgSAGIAFgCIgDADgAAOgCIAegJIgbALIgDgCgAAzgPIAAACIgDABg");
	this.shape_11.setTransform(354.9,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE0CC").s().p("AiwCBQgIgWAngoQAUAVgOAYQgKASgRAAIgKgBgAiBBjQAAgNAJgFQAPAGgDAOQgEAOgTAFQABgDABgSgAjLBJQAIgPAQgKQAWAOgJAWQgIAUgaAMQgQgUANgXgAieA7QgfgQgHgZQgCAEACARQACAOgMAFQgjgLAYg2IABAAQADAFAIgFIADgCIAKACIgHgDQAGgCAFADIAGAFIgCAAIACAAQAQAGATASIAFAFIgSgBIAMAQIAPgEQBigYAygOQBggcBEgrIgBgCIADgEIADgEQAJgQADgYIAGgBIABAAQAHAAAEgEIADgBIACAAIADAAIAGADQADAFAHABQgDAagFAWIgEAMQgFAPgGANQgGAMgHAJIgLgEIgCAAIAAAAQgYAIggAIQhRAWgPAFIgRAGIheAYIgMADQgEADgDAEIgFgCIAFAEIgFAFQgGAHgDACQgPgKgkgPgAjrBFQgFgNAMgIQAIAQAMAAQABAKgMAIQgMAAgEgNgAAZBIICJgDQgeAEgjABIgKAAIg+gCg");
	this.shape_12.setTransform(353.7,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A3839").s().p("AjpC+QgLgCgDgIQAEgCAIADQAHAEAFgCQABAHgHAAIgEAAgAkPCPIgIgCIgCAAIAAgBIgFgBQgKgFAAgJQAQAGAOACQAPACAMgFIACAAQgHANgSAAIgJAAgAkZBhQgWgFgPgQIAkAKQAVAFARgCIgFAEIgFADQgGADgHAAQgGAAgIgCgAE2g1IgJgHIgGAHQgEgOAPADQAPACgCALIgDABQgDAAgDgDgAjJidQgSgGgKAAQAGgHAUAEQATAFAMAKQgKAAgTgGgAi0i0IgQgCQAAgKAKAEIANACIADADQgBADgGAAIgDAAg");
	this.shape_13.setTransform(336,8.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgzBOIgEgCIgMgHIgDgCIACgCQABAAAAgBQAAgBAAAAQAAAAAAgBQAAAAgBAAIgDgBQAKgGAOACIADABIAFACIAJADIABAAIAIAEIAKAHQAMAJAJAOIgDAAQgXAAgjgTgAgdA2IgEgCIgGgCQgQgGgIACQgCgDAGgFQAGgEgCgEQARACAJADIACAAIAAAAQAQAFAIAPQgFACgGAAQgHAAgIgDgAglAZQgNgKgBgSQgCgrAtgXQAAgGgLAGQgGADgBADQgFgVAmgIQAmgIAbAHQgoAPgUAlQgOAfACAkIAAACIAAADIgLABQgQAAgKgHg");
	this.shape_14.setTransform(310.8,5.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC9A67").s().p("AADAUIAFAIIgCABgAANAcIgSgcIgFgJIgGgOIgCgFIAlA4IgEABIgCgBg");
	this.shape_15.setTransform(298.8,5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CCFF").s().p("AglASIAAABIAAABIgCAAIACgCgAAlgGIgHgJQADgDAFgBQACAHAAAHg");
	this.shape_16.setTransform(311.6,20.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgJgJQABgCADgCIAMATIADAIQgKgJgJgOg");
	this.shape_17.setTransform(301.7,10.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("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");
	this.shape_18.setTransform(337.3,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF33CC").s().p("AhAAMQgEgMgOADQgVAFgEgBQAJgPAngNQAAgLgKgDIAQgHIAMAKQAjAVAogCQAGgMgDgOQAPAGAcgFQAkgIALABQgQAKgcALIgvASIAGAGQAEACAAAFQgHAHgLgDIgNgHIAFgEQgRACgUgEIgkgKQAPAPAWAFQAQADAKgEQABACAFACQAOAGgEAJQgDABgCAOIgWACQgOgBgQgHQAAAKAKAEQgHAEgCAHQgFgDgBgMQgBgPgDgEQhBAfgVAbQACgVA8gzgAAchAQAMgJAGgKQAGAGgHAOQgIAOgBAHQgCgKgGgMg");
	this.shape_19.setTransform(309.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},7).wait(13));

	// Layer 6
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3A3839").s().p("AADgHQAKgDgNANIgGAGQgBAAAKgQg");
	this.shape_20.setTransform(295.5,-44.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC9A67").s().p("AhuBJIABgCQAFgFADgIQAEgSgIgLQAhgVAPguQAwgSAhgUQgOgCAAgDQAEAAAEgGQAEgFAHACQADABABAJQABAJAFAAQAIgFAQABIAdAEIADABQAFAQAGAAIABgBQAFADgCAHQgEAMAEAEIAAAGIABALIgBAGQgIAGgDAFQgIgDgOAAQgVAAAHANQgBABAOgFQAQgHAEALQgCATgMAEQgFABgOgJQgLgIgEAHQAHAGAWANIgMARQgHAJgKADIADgHQAAgDgIAAQgdANgbgWQgWgRgHgWQgBAGgEgBQgFABgFAJQAQAJAcAWQAZARAfAAQgJAGgVAEQg9gGg+gNgAAXgPQgJAKABAPQALgCAHgIIAKgSQgEgEgFAAQgGAAgFAHgAA/gEQAIAHAJgGQAJgHgCgNQgKAAgOATgAASgmQgNAGgFAJQAGgFASgCQAOgBABgHQgEgEgFAAQgFAAgHAEgAgNgvQgTAaAOgPQAMgMgFAAIgCABgABUgiQAGAEABgIQgSgJgBAJIADAAQADAAAGAEg");
	this.shape_21.setTransform(297.3,-40.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AhvB3IAAAAQAGgKgEgGQgBgLgHgEQAKgLARgZQAWghAXgCQgHAPgWAJQgBAKAGAKQgWAJgHAPQAJAHgGAOIgFAPIgDABIgIgDgABcBxQASgWAMgeIgBgBIAGgIQACAHAEAJQAIAQgJAKQgDgBgBgKQgBgIgFAAQgIAQAIAXQgIgJgGgBIgHALQgDgCgGAAgAiBBYQAAgGgDgCIgDgHQgEgFACgHQANgHAwgtQAKgJAKgGQgcABgVAbQgZAhgQAGQAJAJgKAMIgBABQgEgCgMgBIAAgCIAvg7QAggiAegKIAAASQAZgQAXADQhSAjghBIIgCAAIgEABIgBAAgAitA2IABgDQAIgJANgRQAVgaAWAEQgPAIgDADQgIAHACAPQgHAAgHAFQgIAGgHgBQAKALgPAJIgBABIgGgNgACZAvQAAgMgCgDQgLgCgIADIgBgLQAOgBANALQALALALgLQABACgGALIgBADIgGgBIgFABIAAAAIgDgCQgCAEAGAIQAEAGgIABQgGgHgBgLgAizAdQAAgDACgCIAAgCQAOgKAagUQAdgVATgBIhVA+IgFgDgACdAZQgIgIACgJQAFAAAEAHQAFAGAFABQgDAGgEAAQgDAAgDgDgAgMgKQgEAKgUADQAAgNAYAAgACJgGQADgFAUgCIAIgCIABAIQgHAAgKADIgJABQgFAAgBgDgAB4gRIAEAAQAEAAAEgDIAAAAQAQgCAKgJIAAADQABAEAFADIgUAEQgNADgIAEIgDgHgAiRgTIAAgBIASgPQARgKARAGIg0AcIgCABQACgEAAgFgAB2gVIgDgGQAFgJAOgGIAAAAQgBAEAAADIACAGQgKAGgHACIAAAAgAgCgZQABgLAWABQgGAKgPAAIgCAAgAgCgnQgEAJgKAAQADgKALABgAhUgnQgDgDAMgBQAPgBAFgFQAIAJgIAKQgIgBgVgIgAgtgjQAHgIAWgBQgBAIgJABIgTAAgAiNgjIAAgIIAKgGQAMgJAHAJIgdAOgABWg8QANgJgKgJQAEgLATgDQgBAHAGACQgJAEgLATQgKATgNACQgDgKAPgLgAAygsQgCgQAQACQgBAOgJAAIgEAAgABsgxQgCgHAFgEQAGgEAAgEQAIABgFAKQgEAJgFAAIgDgBgAgMg4QgFgFgJADQADgJAMAEQAMAEgDAKQgDgBgHgGgAhsg2QAMgNAbgEIAwgHQgZAZgtAAIgRgBgAAjg5QgGgHgDAAQAMgEgJgQQgJgRgSAEQABgIgFgCQAFgDAqAWQABAFgGAKQgFAJAFAGQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBgAgCg+QgRgIARgIQgsgHgrAMQgPAEgMAFQgBgBgMAAQAAgFgEgCIBGgSQA7gKAZAgQgEAIgJAAQgEAAgGgCgABKhAQAFgHAAgHQANADgIALgAAyhTIAOAAQACAKgGAJQgMgBACgSgAh5hYQAGgIAHAEQgCAGgHAIQgJgBAFgJgAgChmQgOAFgbABIg3AEQASggBOAWgAgUhyQgEgDgCABQABgFAEABQAFAAAAAEQgBAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_22.setTransform(295.6,-45.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAcCNQAVgEAJgGQgfAAgbgRQgbgVgPgKQAEgJAFgBQAFABAAgGQAHAWAVASQAcAVAegMQAHAAAAACIgCAHQAJgDAHgJIAMgRQgWgNgGgGQAEgGAKAHQAOAJAFgBQAMgDADgUQgFgLgQAHQgOAFABgBQgGgMAUgBQAOAAAJAEQACgHAIgGIABgGIgBgLIABgFQgEgFADgMQACgGgEgCIgCAAQgGAAgFgQIgCgBIgdgDQgRgCgIAFQgFAAgBgJQgBgJgDgBQgHgCgEAFQgEAGgEAAQAAADAPACQgjAUguASQgQAuggAVQAHALgEASQgDAJgEAEIgBACIgJgCIACgBIAGgPQAFgOgJgHQAHgPAWgJQgGgKABgKQAWgJAHgPQgWACgXAhQgQAZgKAMQAGADABALQAEAHgFAJIgBABIgDgBIgGgCQAGgIACgFQgDgHgHgCIgFAEIACgFIgDAAQgHAAgCgHIgGADQgFACgCAEIgDAAQgBgDADgFIgBgBQgFgDgHAEQgEADgBgHIgBABQgIgIAIgHQgDgIgEgGQgFAEgDABIAIgLIAAgBQAAgEgCgGIgDgEQgCgDAAgDIABgDIgCABQAKgSAWgOIgCgDQAAgDADgHQgDgHAJgHIAAgCIAAgGIgFABQAKgLAPgIIgHgCQgBAAAAgGIgHgBIgBAAIgBAAIgBgBIgCAAIACgCIACgCQAWgXAPgJIAGgEIAAAAQgFgCgCgCIgGABQApgvBmA4QgCgNgPgFIgBAAIABgDIgBgFIAHAFQAUALAFAPQAHgIgLgNQgOgQgBgGQASALAGAIQAGAKAEAYQASgFABgKQgEgIgPgBQAFgLgDgFIgHgNQALADAEALQADAMAGADQANADABgSQAEADgBALQgBALAIAEQAFAAABgJQABgJADgBQAGAFANAAQgDAJgKAAQAKABABAJQABAGgEASQAGgBAHgNQAFgLALABQgKAcgYAKQAHAKALgHQAOgJAHACQgEAEgNAHIAAABQAAAEgEAEIAAACIAGAAQAHgEAFAAIAAgBIADABIAFABIgEAEIAAABQAAAHAJAAQAGAAgBADIAEgBQgBAGgHADIgBAJIAEABQAAAIAIAIQAHAIAAAJIgMgRQgHgJgKgCQABAJAKAKQAKAMADAHQAAAEgDAFQgDAFABAFIgEgCIgFAAIgCAAIADAHIACAEIgHAHQgDAAgDADIAAAFQgGAMgDAQIgBABQAGgTgEgQQgDgLgNgWIAKAtQAJAmgTAEQAHgKgHgJQAAAJgRAFQgPAFADAOQgQgEAHgSQgDgCgFAAIgDACIgBgBQgPAPgSALIgYgCgAB4A6IAAABQgLAegTAWQAGAAAEACIAGgLQAGACAIAIQgIgXAIgQQAFABABAIQABAJADACQAJgKgIgRQgEgJgBgHgAhOAHQgwAugMAGQgDAHAEAGIADAGQADACAAAGQACABADgCIACAAQAhhHBTgkQgYgCgZAQIAAgTQgeAKggAjIgvA6IAAACQAMABAEADIABgBQAKgMgJgKQARgGAYggQAVgcAcgBQgKAHgKAIgAiZAXQgNARgIAJIgBADIAGANIABgBQAPgJgJgKQAGAAAIgGQAHgFAIABQgDgPAIgIQADgDAPgIIgGgBQgTAAgSAXgACVAeQACADABANQAAALAHAHQAHgCgDgGQgHgIADgDIACABIAAAAIAFAAIAHABIABgDQAFgLgBgDQgLALgLgLQgNgLgNABIABALQAFgCAHAAIAGABgAiLgKQgZAUgPAKIAAACQgCADAAACIAFADIBWg+QgTABgeAVgACbAXQAIAIAFgLQgEgBgFgGQgFgGgFgBQgCAJAIAIgAglABQAUgBAEgMQgZAAABANgACfgPQgVACgDAFQACAGANgEQAKgDAHAAIAAgHIgIABgAB6gMQAHgEANgDIAUgEQgFgDgBgEIAAgCQgKAIgQACIAAAAIAAAAQgEADgEAAIgEAAIAEAHgAiAglIgTAPIAAABQAAAGgCADIACgBIA0gcQgGgCgGAAQgLAAgKAGgACEgsQgOAHgFAJIADAFIABAAQAGgCAKgGIgCgGQAAgDACgEIAAgBIgBABgAgEgbQARABAGgLIgFAAQgRAAgBAKgAgSggQALAAADgJIgBAAQgKAAgDAJgAhNgsQgMAAAEADQAVAIAHABQAIgJgIgKQgFAGgPABgAgvglIATAAQAJgBABgIQgWABgHAIgAiFgzIgKAHIAAAHIAAAAIABAAIAcgOQgEgEgEAAQgFAAgGAEgABXhPQAKAJgNAJQgPAKADAKQAOgCAKgSQAKgUAKgEQgGgBABgIQgUADgEAMgAAwguQANADACgRIgDAAQgNAAABAOgABug+QgGAEACAHQAIADAEgLQAFgKgHgBQAAAEgGAEgAgNg6QAHAHACAAQAEgKgMgEQgNgEgDAJIAGgBQAFAAAEADgAhGhJQgcAEgMANQA6AGAdgdIgvAGgAAhg7QAEAGACgHQgFgGAEgJQAGgKgBgEQgpgXgGADQAFACgBAIQASgEAJARQAJARgMAEIABAAQADAAAFAGgAgEhPQgRAIASAHQAQAHAGgNQgZgfg7AJIhGATQAEABAAAFQAMAAABACQAMgGAPgEQAbgHAaAAQARAAARADgABIhBIAKAAQAIgLgNgDQAAAGgFAIgAA6hBQAHgKgCgKIgPAAQgCASAMACgAh6hZQgGAIAJACQAIgJABgGIgEgBQgFAAgDAGgAhkheIA3gDQAbgCAOgFQgggJgWAAQgfAAgLATgAhXh6IgLAFIABACIgBAAIADACIAAABQAUgIAXACQAIgBgHgGQgGgGgEgCQgKABgQAKgAgWh0QABAAAAABQABAAAAgBQABAAAAAAQABgBAAgBQAAgEgEAAQgFAAgBAEIABAAIAFACgAAlAhQAJgMAMAJIgKASQgIAKgLABQgBgQAJgKgABNAtQAOgTAKgBQACANgJAIQgEADgEAAQgFAAgEgEgAAgAKQAOgHAHAIQgBAGgOACQgRABgHAFQAGgJAMgGgABjAOQgIgGgEADQAAgKATAKQgBAFgDAAIgDgCg");
	this.shape_23.setTransform(295.8,-45.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3A3839").s().p("AACgIQAIgEgKAPIgEAHQgCAAAIgSg");
	this.shape_24.setTransform(293.2,-43.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC9A67").s().p("AhjBdIABgCQADgFABgJQACgSgKgKQAcgaAHgwQAsgbAdgZQgNAAgBgCQAEgBADgHQACgGAHABQAEABACAIQACAIAFAAQAHgGARgCIAdgCIADABQAHAPAGgBIACgBQAEACAAAHQgCAMAFAEIABAGIACAKIABAHQgHAGgBAHQgJgCgOADQgUAEAIAKQAAACAMgHQAPgJAGAJQABATgLAGQgFABgPgGQgLgGgDAIQAHAEAYAJIgJATQgFAKgJAFIABgIQAAgCgHABQgbASgfgQQgYgOgLgUQAAAGgEAAQgFACgDAJQARAHAgAQQAcAMAegFQgIAHgUAIQgsADgtAAIgjAAgAAPgRQgGALADAPQALgEAGgJIAGgUQgEgCgEAAQgHAAgFAJgAA5gNQAJAGAIgIQAHgJgEgMQgKACgKAVgAAHgnQgLAIgDAKQAFgGAQgFQANgDAAgHQgDgDgEAAQgGAAgHAGgAgagqQgNAdALgRQAIgNgDAAIgDABgABJguQAGACAAgHQgUgGABAJIAEgBQADAAAGADg");
	this.shape_25.setTransform(296.1,-40.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AhdB+IAAAAQAEgLgFgFQgEgLgGgCQAHgOAMgaQARgmAVgFQgEAQgUANQABAJAHAJQgUANgEAQQAKAFgDAPIgDAQIgCABIgIgBgAh1BiQgBgFgDgBIgEgHQgFgFABgHQAMgIAmg1QAJgMAIgHQgbAGgQAfQgSAkgQAJQALAIgIANIAAABQgEgBgNABIAAgCIAkhCQAZgnAcgQIADASQAWgUAXgCQhLAygTBMIgCABIgEABIgBAAgAimBJIAAgDQAHgLAJgSQAQgfAXABQgOAKgCAEQgHAJAGAOQgIABgGAHQgGAHgHAAQALAJgNALIgBABIgIgLgABpBTQAOgZAGgfIAAgBIAEgIQADAGAGAIQAKAPgHALQgDgBgDgJQgCgIgFABQgFARAMAVQgKgHgGAAIgEALQgEgBgGABgAiwAxQgBgCACgDIgBgCIAiglQAZgZATgEIhJBMIgFgDgACaAIQgDgLgCgDQgMABgGAEIgDgLQANgEAPAJQAMAIAJgMQABACgDALIAAADIgHAAIgFACIABAAIgDgBQgCAEAIAHQAEAEgHAEQgIgGgCgLgAiXgDIgBgCIAQgRQAOgOASADIguAkIgCABQABgDAAgEgAgTgTQgCAMgTAGQgDgNAYgFgACZgOQgJgGAAgJQAFgBAGAGQAGAFAFAAQgCAHgFAAQgDAAgDgCgAiXgUIgBgHIAJgJQAJgLAJAIIgZATgAhfgjQgEgCAMgCQAOgEAFgGQAJAHgGAMIgBAAQgIAAgVgFgAAJgxQgFAMgQACQgCgLAXgDgAgegzQABAIgJADIgSADQAFgJAVgFgAgPgxQgCAKgKACQACgLAKgBgACAgpQACgGAUgGIAHgDIACAIQgHABgJAFQgGADgEAAQgEAAgBgCgABugxIADgBQAEgBAEgDIAAgBQAPgFAIgJIABACQABAEAGACIgTAIQgMAFgHAFIgEgGgAhWhEIAtgQQgXAig5AFQAJgOAagJgAiVg5IBBgfQA4gUAfAaQgDAOgSgEQgTgEAPgLQgsAAgoAUQgOAHgLAHQgCgBgLACQgBgFgEAAgABqg1IgDgFQADgKAMgIIABAAQgBADABAEIADAFQgJAIgGADIgBAAgAgbhAQgGgEgIAEQABgJANACQANABgCALQgDAAgIgFgABEhVQALgLgLgHQABgMATgHQABAIAGABQgJAFgHAVQgGAUgNAEQgFgJANgNgAAkhAQgFgPAQgBQACAQgMAAIgBAAgAiMhLQAEgKAIACQgBAHgGAKIAAAAQgJAAAEgJgAAShJQgHgHgDACQALgGgLgPQgLgPgRAHQAAgIgHAAQAGgFAsAPQACAEgEALQgDAJAGAFQAAAFgCAAIgEgCgABbhOQgDgHAFgFQAFgFAAgEQAHgBgDAMQgCAKgHAAIgCAAgAAdhlIAOgDQAEAJgFALIgBAAQgLAAgBgRgAgahvQgNAHgaAHIg2ANQANgjBQAIgAA6hmQAOABgHANIgJABQADgIgBgHgAguh4QgEgBgCAAQAAgEAFgBQAEAAABAEQgBAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCgBg");
	this.shape_26.setTransform(293.7,-43.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhWCPIACgBIADgQQADgOgKgGQAEgQAUgNQgHgIgBgKQAUgNAEgPQgWAFgQAlQgMAbgHANQAGADAEAKQAFAGgEAKIAAABIgEAAIgGgBQAFgJAAgGQgEgGgHgBIgEAFIABgFIgCABQgIABgDgGIgFADQgFAEgBAEIgDAAQgBgDACgFIgCgBQgFgCgGAGQgDADgDgHIgBABQgJgGAGgJQgEgHgFgFQgEAFgCABIAFgMIAAgBQgBgEgDgFIgEgEQgCgCAAgEIgBgCIgBABQAGgUATgTIgBgCQgBgDABgHQgEgHAIgHIgBgCIAAgGIgFABQAIgMANgKIgHgBQgBAAgBgGIgIAAIAAABIgBgBIgCgBIgCABIACgCIABgCQASgbANgMIAGgEIgBAAQgFgBgCgBIgGABQAgg2BuAlQgEgMgPgDIAAAAIAAgDIgCgDIAIACQAUAIAIAOQAGgJgOgLQgQgNgBgGQASAIAHAHQAIAIAIAXQARgIgBgKQgFgIgPACQADgLgEgEIgJgNQAMACAFAKQAGALAGABQANABgCgRQAEACABALQABAKAJADQAEgBAAgIQgBgJADgCQAHAEANgDQgCAKgJACQAKgCADAKQABAFAAATQAFgDAEgOQAEgMALAAQgFAdgWAOQAJAIAJgJQAMgLAHABQgCAFgMAJIAAACQABADgDAFIAAACIAGgBQAGgFAFgCIAAgBIADAAIAFABIgCAFIAAABQABAHAIgCQAGgBgBAEIAFgDQAAAHgHAEIABAJIAFAAQABAIAJAHQAJAHAAAJIgOgPQgJgJgKABQADAJAMAIQAMAJAEAGQABAEgCAGQgCAGABAEIgEgBIgEABIgDAAIAFAGIACAEIgGAIQgDABgCAEIABAEQgEAMAAASIgBAAQADgUgHgPQgFgKgRgSIASApQAPAkgSAHQAGgKgJgJQACAJgQAJQgOAHAGAOQgRgBAEgUQgEgBgFABIgBACIgCgBQgMASgQAOIgYADQAUgIAIgIQgfAFgdgLQgfgQgQgHQACgJAGgCQAEAAgBgGQALAUAYAOQAfAQAbgSQAIgBAAACIgCAIQAJgFAGgKIAJgTQgZgJgHgFQADgHALAFQAQAHAFgBQALgGgCgUQgGgKgPAKQgMAIABgCQgJgLAUgEQAOgDAJACQACgHAGgHIAAgHIgDgKIgBgFQgEgEABgMQABgGgFgCIgBAAQgGABgIgOIgDgBIgdACQgQACgIAGQgEAAgDgIQgCgJgDAAQgIgBgDAFQgDAIgEAAQABADAPgBQgeAagrAaQgHAxgcAaQAJAKgBARQgBAKgEAFIAAABIgKAAgAhQAcQgnA1gLAIQgBAIAFAFIAEAGQADABABAGQACAAADgCIACAAQAThNBLgxQgXACgWATIgDgSQgcAPgaAoIgjBDIAAACQANgCAEACIAAgBQAIgOgLgIQAQgIASglQAQgfAbgHQgJAJgIALgAiXA5QgJATgHAKIAAADIAIAMIABgBQANgMgLgJQAGAAAHgHQAGgHAHAAQgFgPAHgJQACgDAOgLIgBAAQgWAAgQAegABxBkIAFgMQAGABAJAGQgLgVAFgRQAFAAACAIQADAJADABQAHgMgKgPQgGgIgDgGIgFAJIABAAQgGAggOAZIAFgBIAEABgAiPAVIgiAmIABABQgCADABADIAFACIBJhMQgTAEgZAZgACZAZQACAKAIAGQAHgDgEgFQgIgHABgEIAEACIgBgBIAFgBIAHAAIAAgDQADgMgBgDQgJANgMgIQgPgJgNADIADAMQAGgFAMgBQACADADANgAiKgGIgPAQIAAACQABAFgBAEIACgCIAugkIgGAAQgOAAgNALgAgpAPQATgHACgLQgYAEADAOgACPgNQAAAJAJAFQAKAHADgKQgFAAgGgGQgGgFgEAAIgBAAgAiQgUIgJAJIABAHIAAABIABgBIAZgTQgEgDgDAAQgGAAgFAGgAhYgXQgMADAEABQAWAFAIAAQAGgLgJgIQgFAGgOAEgAgNgTQAQgCAFgLQgXACACALgAg5gUIASgEQAJgDgBgIQgVAFgFAKgAgcgVQAKgCACgKQgKACgCAKgACUgkQgTAGgCAFQADAFAMgGQAJgFAHgBIgCgHIgIADgAB4gmIgBAAIABAAQgEAEgEABIgDABIAEAFQAHgFALgFIAUgIQgGgBgBgFIgBgCQgIAKgPAFgAhXg0QgaAJgJAPQA5gFAXgiIgtAPgAhVhIIhBAfQAEABABAEQALgCACACQALgIAOgHQAogTAsgBQgPALASAEQATAEADgNQgRgPgaAAQgUAAgYAIgABqglQAGgDAJgHIgDgGQgBgDABgEIAAgBIgBABQgMAJgDAKIADAEIAAAAIABAAgAgcgvQAIAFACAAQADgLgOgCQgMgCgBAKQAEgCADAAQAEAAADACgABDhXQALAHgLALQgNANAFAJQANgEAGgUQAHgVAJgFQgGgBgBgIQgTAHgBAMgAAjgvQANABgCgSQgQABAFAQgAiNg7QgEAJAJAAQAGgKABgGIgDgBQgGAAgDAIgAARg5QAFAFABgHQgGgFADgKQADgLgBgEQgsgPgGAFQAGABABAHQARgHALAPQALAPgLAGIACAAQADAAAFAFgABghTQABAEgFAFQgFAFADAHQAIABADgLQADgLgHAAIgBAAgAAchVQABASALgBQAGgKgEgKgAh4hEIA2gNQAagGANgHIgbgCQg3AAgLAcgAA3hGIAJgCQAHgMgOgBQABAGgDAJgAhwhiIgKAHIABACIAAAAIADACIAAABQASgMAXgCQAHgCgHgFQgHgFgFgBQgKADgNAMgAgvhnQABAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBQgBgEgFABQgEAAAAAFIABAAIAFABgAAmAgQAHgNANAHIgHAUQgFAKgMADQgDgPAHgMgABPAlQALgVAKgCQAEAMgIAJQgEAEgFAAQgEAAgEgCgAAdALQAMgKAIAGQABAHgNAEQgSAFgFAGQAEgKALgIgABfADQgJgDgDABQgBgIAUAGQgBAFgDAAIgDgBg");
	this.shape_27.setTransform(293.9,-45.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},3).wait(17));

	// Layer 8
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE0CC").s().p("AABAaIAAgCIAAACgAgBgZQADAGAAAQIgBAaIgCgwg");
	this.shape_28.setTransform(399.6,62.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A3839").s().p("AgFgGQAQAGgGAFIgDACQgEAAgDgNg");
	this.shape_29.setTransform(417.6,68.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC97").s().p("AhWDVQgqgnAEhtQAMh6gDgvQgFgGgQgFQgRgEgFgEQARgUAhADQAfADAUATQgCgPgUgHQgcgJgDgDIAVgRQAMgLAKgFQAYAdAkgUQASgMAkgaQASAQgDAWQgLANgaAXQgYAXgKANQgIAmAHA9QAJBEgEAiQAAACgHAIQgEAFALAAQAKgeAogMQAmgMApALQA8hBAtASQgSAHgQAKQgfATgcAXIgKAIIgYASQgYASgQABQAIABABAEIgDADIgNAfQgQAWgbANQgeAQglAAQgPAAgQgDgAATCDQAHACAMAIQACgIgKgFIgGgCQgFAAAAAFgAA2CFQAGgGgSgGQAFASAHgGgADsATIAAABIAAAAIAAgBgAjZiNQgSgMAAgcIAOgOQARADAKASIAQAgQgKAHgKAAQgKAAgJgGgAiyidIgOgbQgIgQANgKQAaAQAMAgQgKAGgKAAIgJgBgAijjSQAJgGAPACQAAAFAKATQAFALgKAIQgYgFgFgigAiCjSQAOgBAHAIQAHAJgIAJQgOgCgGgXg");
	this.shape_30.setTransform(412.8,55.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgUASQAvgcAQgPQgZAohjAyQASgVArgagAArgtQgGgLALgIQAMABAJAKQAEAFAJANQABAHgNgCQgNgCABAHIgPgUg");
	this.shape_31.setTransform(401.2,37.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhJDtQgOgGgLgYQgHgPgHgJIgEgUIgBgHIgDgeIgBgOIAAAAIAAgCIAAgBIABgbQABgPgFgGIAAgJIADACQgCgbAHgsQAHgsgCgcQgkgOggAOQghAUgTAJIgNgQQAXgKATgbQgDgEgRgNQgMgKgCgMQABgKAIgTQArgTBNgJQALAVAJACQAHADAEgGQAEgGAEAAQADgDgIgMQgIgOAIgKQAXgJAVAKQAXALgEAbQgFAGgRADQgRAEgFAGQAZAZAggUQASgLAegbQAaAWgBAUQgCAPgUAWQgfAjgFAHQgSAbAAAeQgBASAJAkQAJAhgEAlQAPgFAkgPQAhgKAbAKQAPgSAxgSQAdgKARgLIALASIgBAAIgGADQgtgTg8BBQgqgLgmAMQgnAMgLAeQgLAAAFgEQAGgJAAgBQADgigHhGQgIg8AJglQAJgOAZgWQAagYAKgMQADgWgRgRQgkAbgUALQgjAUgXgdQgKAFgNALIgVASQAEACAcAKQAUAGABAPQgTgSgfgDQghgDgSATQAFAEASAFQAQAEAEAHQADAvgMB6QgDBsApAnQA3AKArgWQAcgOAQgVIgPAkIgFACQgLACgkALQgZAIgWAAQgMAAgLgCgAh/iSQgsAagRAVQBjgxAagqQgQAPgwAdgAjjimQAAAbATAMQATAMAUgNIgQggQgLgRgQgEgAi3iqIAOAcQAPADAOgIQgMghgbgPQgMAKAIAPgAiajDQAEAhAYAFQALgIgGgLQgJgTAAgFIgHAAQgKAAgHAFgAh5jDQAGAWANACQAIgIgHgJQgGgHgKAAIgEAAgAgxi+QgBgHANACQANACgBgHQgIgNgFgFQgIgKgMgBQgLAIAFAMIAPATIAAAAgAAbCRQABgIALAFQAKAFgDAIQgMgHgHgDgABGCNQAQgCAYgSIAZgSIg3ArQgCgFgIAAg");
	this.shape_32.setTransform(411.9,54.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFE0CC").s().p("AAAAYIAAABIAAABIAAgCgAAAgZQACAGgBAQIgBAaIAAgwg");
	this.shape_33.setTransform(398.3,52.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3A3839").s().p("AgCgHQALAMgIACIgBABQgFAAADgPg");
	this.shape_34.setTransform(416,62.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC97").s().p("AgUDFQgpAAgmgWIgCADIgEgGQgGgKgEgMQgPgpAEhEQAPh6gBgvQgFgGgPgFQgSgFgFgEQASgTAhADQAfAEATAUQgBgQgUgHQgcgKgDgDIAVgRQANgKAKgFQAXAeAkgTQATgLAlgaQARARgEAWQgLAMgaAXQgZAWgKANQgKAlAGA+QAGA/gDAiIABAAQAYASgHAEIgDAEQgBACgJAEQgGACAKAFQAXgWAoAGQAoAGAgAdQA9gYAhAOQgDAFAAAIIgOABQgkADgdATQgcATglAhQgFAEgMAdQg6grgdAAgAAtCbQAIgCgMgNQgEASAIgDgAAPCKQAFAFAIAMQAGgGgHgJQgEgFgEAAQgCAAgCADgAhzClIgDgKIAGAMIgDgCgAjUioQgTgMABgcIAPgOQAQAEAKASIAQAgQgLAGgKAAQgJAAgJgGgAiti2IgNgcQgIgQANgJQAZAQAMAhQgKAFgJAAIgKgBgAidjqQAJgHAPACQAAAFAJAUQAFALgKAIQgYgGgEghgAh8jqQANgBAHAJQAHAJgIAIQgNgCgGgXg");
	this.shape_35.setTransform(411.6,48.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AgUASQAwgbAQgPQgaAohkAvQASgVAsgYgAAsgrQgFgLALgIQAMABAIAKIANATQABAGgNgCQgNgCAAAGIgOgTg");
	this.shape_36.setTransform(400.5,27.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAGDkQgJgDgngGQgngGgagUQgHgHgCgQIAEgBIgFgIIgDgUIgBgGIgCgfIgBgOIAAAAIAAgBIAAgCIACgaQABgQgEgGIAAgJIADADQgBgbAIgsQAIgsgCgcQgjgOggAMQgiAUgTAIIgMgQQAWgKAUgbQgDgDgQgOQgMgKgCgMQACgKAIgSQAsgTBNgHQAKAWAJACQAHADAEgFQAEgHAEAAQADgCgIgNQgHgOAIgJQAYgJAUALQAXALgFAbQgFAGgRADQgSADgEAGQAYAaAggUQASgLAfgaQAaAXgCAVQgCAPgVAVQggAigFAHQgTAagBAdQgBATAKAxQAKAxgCARIgCAJQAoAMAhACQAiAGATAUQAWgJA0AFIAbACIgDAFQghgNg9AXQgggcgogGQgogGgXAWQgKgFAFgCQAKgFABgBIADgFQAHgEgZgSIAJADIAAAAQgEgKgGAHQADgigFg/QgFg9AIglQALgOAZgVQAagXALgMQAEgWgRgRQglAagUAKQgjAUgXgeQgKAFgNAKIgVARQADADAcAKQAUAHABAPQgTgTgfgEQgggEgTATQAFAFASAFQAPAEAFAHQACAvgQB5QgEBFAPApQAEAMAGAJIAEAGIACgCQAmAWApAAQAdAAA6ArgAhrC3IADABIgGgMIADALgAh8inQgrAYgSAVQBlgvAagpQgRAPgxAcgAjei+QgBAbATANQASAMAVgMIgQggQgKgSgQgEgAiyjAIANAbQAPAFAOgJQgLghgagQQgNAKAIAQgAiVjZQAEAiAYAFQAKgHgFgMQgJgTAAgFIgHgBQgKAAgHAFgAh0jYQAGAXANACQAIgIgHgKQgGgHgKAAIgEAAgAgsjRQgBgHAOACQAMADgBgHIgMgTQgIgJgMgCQgLAIAFALIAOAUIAAAAgAAXCcQAFgHAHAJQAHAJgGAGQgIgMgFgFg");
	this.shape_37.setTransform(410.8,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},14).wait(6));

	// Layer 9
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC9A67").s().p("AgIgjIAQgXIABACQgSAOAGAjQAJAxgCALIgEAGIgIheg");
	this.shape_38.setTransform(149.7,-18.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC97").s().p("AhICvQgGgHgBgEIgThzQgBgDABgUIAAgHIABgBIAAgNQgGgEgBgIIgDgOIgBABQgIgzAGghQAHgwAngdQAdgGAbAJQAdAJgTARQgDgBgBgTQgJgCgRADQgNADgEgEQACAHAKAKQAGAFADAGIgGAHQgEgIgGAAIgBAAIgCgBQgMgIgFAGQAUAJAIAIIAAABIAAAAIABAFIgJAEIgBAAIAAABIAAAAQgDgHgJgHQgLgHgFAIQAWAGACANIgCACIgBABQgPAFgDACQgQgBgCABQATAOABAKQgKAoANAyQAIAdARA1QAWgPAVgjIAlg9QAVggAWgRIAAAAIAaBFIAAABIgBgCQg7B6hnA8IgEgBIgJADQgFgIgEgBg");
	this.shape_39.setTransform(161.5,-11.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3A3839").s().p("AgNgGQAFgHALAIIACACIgCABQAHAGADAFIABABQgIgIgTgIg");
	this.shape_40.setTransform(156.8,-25.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhGC7IgCgFIgCAAQgHgWgGgnIgLhAIAAgtIgCgKIgCgJIgCgGIAAAAIgIAIIgBgNIAFgGQACgLgJgzQgHgiATgOIgBgDIANgSQAMgMAPgZIA6AEQAaAGABAhQgOAEgGgIQgEgLgEgEQgKAAgCAFQADAFADALQAAAOgJACIABAFQAAAGgDAEIgKAAQgBAEgFAEIgHAFQgRAfAHAyIAaBnQAZgVAbguQAkg4AMgQIgCgLIAZAAQgWARgVAgIglA9QgVAigWAPQgRg0gIgdQgNgyAKgpQgBgKgTgOQACgBAQACQADgCAPgFIABgBIACgCQgCgOgWgFQAFgIALAHQAJAGADAIIAAgBIAAAAIABAAIAJgEIgBgFIAAAAIAAgBIgBgBQgDgFgHgHIACgBIABAAQAGAAAEAHIAGgHQgDgFgGgGQgKgJgCgHQAEAEANgDQARgDAIACQABATAEAAQATgRgdgJQgbgIgdAFQgnAdgHAxQgGAgAIA0IABgBIADAOQABAIAGAEIAAANIgBAAIAAAIQgBATABADIATB0QABAEAGAHQAEABAFAIIAJgDIAEABQBng9A7h4IABABQgGASgFATIhFBWQgoAsgrAVQgDAEgJAAQgJAAgEgGgAgphxIADgDIgBAAIAAAAIgCADgAhpBNQADAGgBAHIgBACIgBgPg");
	this.shape_41.setTransform(161,-11);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("AgSAeQgJgDgDgHIAAgOQAAgbANgIQAEgDAGAAIACAAIABAAIABAAIADAAQAbAAAAAJQAAAFgRAAIgHAAIACAFQAAAYgTALIAiAAIgFgKIAFgDQALAAAAAMQAAAIgBAAQgEAEgYAAQgMAAgIgDg");
	this.shape_42.setTransform(174.2,-6.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC9A67").s().p("AgIgiIAQgYIABACQgSAOAGAjQAJAxgCALIgEAGIgIhdg");
	this.shape_43.setTransform(154.3,-16.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC97").s().p("AgVC1QgIACgLgEIgQgDQgGgHgBgEIgTh0QgBgCACgUIAAgHIAAgBIAAgNQgGgEgBgHIAAgBIgCgOIgBABQgIg0AFggQAEgfASgWQAJgMAMgKIADgCQAUgEAUADQAIACAHACQAeAKgTAQQgEAAgBgTQgIgCgNACIgEABQgNACgEgDQACAHAKAJQAFAGAEAEIAAABIAAABIgGAGQgEgIgGAAIgBAAIgCgBQgMgIgFAGQAUAKAIAIIAAAAIAAAAIABADIABADIgKAEIAAgBIAAABIgBAAQgCgEgDgDIgHgGQgLgIgFAIQAIACAGAEQAJAFABAIIgBADIgCABQgPAEgDADIgRgCIAAABIAAAAQASAOABAKQgKAoANAyQAHAZAOAqIADAKIABACIABgFQAOgUAKghIAUhFQALgkARgVIABAAIArA9IAAAAIgBgBIgFAYQgZACgGAQQgCAGAAAUQgBAHABAIQACAKAGADQgeBEgyA0IgEgBIgDACIAAgCgABZgFIAAABQgGABgEACQAEgDAGgBg");
	this.shape_44.setTransform(164.5,-9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgvDBQgNAAgEgHIgBgEIgDAAQgGgWgHgnIgKhAIAAgtIgCgLIgBgBIgCgHIgCgGIAAAAIgHAIIgBgOIAFgFQACgMgKgyQgGgjATgOIgBgCIANgSIAHgIQAJgLAKgSIAFAAIAoADIANABQAbAHABAhQgOADgGgHQgFgMgDgEQgLAAgBAFQADAFACALQAAAMgGAEIgCAAIAAACIABADQAAAHgDAEIgKgBQgBAEgGAEIgHAFQgQAfAHAyIAYBeQAPgaANgtQAUg/AIgSIgFgLIAYgGQgSAWgLAkIgUBEQgJAigPATIgBAGIgBgDIgDgJQgOgqgGgZQgNgyAJgpQAAgJgTgOIAAgBIABAAIAQABQAEgCAOgFIACgBIABgCQgBgIgJgGQgFgDgJgDQAFgHALAHIAHAGQAEAEABAEIABAAIAAgBIAAAAIAKgEIgBgDIAAgCIgBAAIAAAAIgBgCQgDgFgHgHIACgBIABAAQAHAAAEAIIAFgHIAAAAIAAgBQgDgFgGgFQgJgKgDgHQAEAEANgDIAEAAQANgCAIACQACASADABQATgRgdgJQgIgDgIgBQgTgDgVADIgCACQgNAKgJAMQgRAXgFAfQgFAgAIAzIABAAIACANIAAABQACAIAFAEIAAAMIAAABIAAAIQgCATABADIATB0QABAEAGAHIAQADIgBAEIAUAAIAAAAIADgCIAEAAQAzgzAdhFQgGgDgCgKQgBgHABgIQAAgUACgFQAHgRAYgBIAFgZIABACIgBAXQAUAAAAAFIgUgBIAAACIgDAAIgBAAIgBAAIgCAAIABgBQgGABgFADQgNAHAAAcIAAANQADAHAJAEIAAACQAAADgFAAIgCgBIgUArQgbA1gkAfQgBAEgHACIAAgCQgKACgLAAIgBAAgAgjhxIADgDIAAAAIAAAAIgDADgAhjBMQADAHAAAHIgBABIgCgPg");
	this.shape_45.setTransform(165,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40,p:{x:156.8,y:-25.3}},{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_45},{t:this.shape_40,p:{x:161.4,y:-23.1}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},9).wait(11));

	// Layer 10
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FAFFFF").s().p("AiCE3QAMgJgLALIgFAFIAEgHgACBiMQAMgJgLALIgFAFIAEgHgAB6k7QAHgGAEASQgRgGAGgGg");
	this.shape_46.setTransform(109.4,1.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3A3839").s().p("AkSChQAHgJAJACQgBAFgHAFQgHAEAAAFQgJgDAIgJgAEUhiIgGgMIACADQAGAHABALIgDgJgAggiiQAAgDAFgCQAEgBAAgEQAKADgHAIQgEADgDAAQgDAAgCgEg");
	this.shape_47.setTransform(116.9,8.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000FF").s().p("Ah0CtIAAAAQgDgYgQgbIgog3QgVgggCgWQgDgbAcgbQgDAOANAKQANALAFgGIgMgHQgHgFAAgIQAOALAHAHQAIAIAAADQARAKBDAFQBKAFAYAIQgFAnAQAkIAbA8IgNAAIgDgBIgSgDQgVgGgMAAQgMgmgFgMQgLgcgOgDQAFAIAgBJQghAAggAQQgYAOgRAIIgCgBIgBACIgKAFIABAAIgBAAIgBAAIAAAAIgGACQACgRgFgGgACsibQAKgPAOgGQAIASgJAPQgJAOgTABQgFgLAKgQgACPiXQANgKAFgGQAJgKgDgSQAWABgQAcQgLATgKAAQgFAAgEgEgAihikQADgHAIAAQAAASgSACIAHgNg");
	this.shape_48.setTransform(114.2,-8.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF00").s().p("AAzCLQgJgIgGgCQgCgRAHgMQACgFAMgOQAegDACAcQADAagUALIgFAAQgIAAgGgEgABcBqQgBgHgGgOIANACQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAEAFQAJAKAIAAQACAmgpAFQAMgRgEgUgACOBEIAEgGQgJABgEgDIgBgBIAAAAQgGgDABgJQAFgJAMgEQABAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQACgCAEAAIAAAAQAEABAFACIAPAEQAFATgEAOIgQAGQgEABgCADgAC+A0IgCgEIAAgHQgCgFgEgDIAAgBIAJABIAHABIAEAFIAAACQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIAAAAQAEAigcAFQAMgOgCgPgAjJgnQACgUgFgCIAAgGQAJgFANgCIADAAIAFABIAMADIAMANQAKAZgvAMQgEgHgKgMgAiXgiQAPgJgLgQIAAgBQgJgSgQgDIABgBIAKgJIAGAAQAFAAAFACIgBACQAQAHgBAbQgLAWgFAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBgBgBgAhdhqQgHgJAHgLQAFgJAMgFQAMgFAJAFQAKAFAAAPQgKAgghABQAEgcgJAJg");
	this.shape_49.setTransform(109.9,-32.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#33CC66").s().p("AC5DQQgJgIgDgBQgFgGAKAFQAPAGAEAAQgDAGgEAAQgCAAgDgCgACaCxIgsgjQAKgDATgWQgHgXAHgOIALgNIACABQAKAKAGACIAAAEQAaAAAYAZIAZAaIAEAJIADAOIgFAbQgUAMgOACQgegEgbgSgAB5CoQgSgQgHgBQAIgGAPANQASAQAHABQgDACgDAAQgHAAgKgJgAAIBaQgRgOgPgHQAKgKAXATQAVAQAIATIgegXgAAPBOIgYgSQAPgQADgNIgDgEIAAgIQABgMgGgEIADgBIgEAAIgFgBQgJgCgLgJIgHgGIABgBQgJgGgJAAQgOAAAAAEIAAACIgIAGQgLALgEACQgIgCgNgMQgMgLgKgDQAQghAIgdQAIgCAdACQATABAQgLQADAIAVALQACAGgFADQgHACAAAEQAiAEAtAmQA7AyAPAIIADAVQABAHgNABQAAADAOABQgFANgMgHIgOgFQgJgFgIAAIAAAAIAAAAQgugCgCAfQgMgFgQgLgAh9gBQgTgRgFgDQAOgHARAOQAOALAIAPQgPgBgOgMgAjRhTIgLgHIAAgBIAAgCIgFgBIgJgJIAAAAIgBAFQgJgGgDgMQgCgHAAgYQAAgWAHgJIAUgbQAEgDAVgBIABAAIABAAIABAAQALABAMAFIAIAFQAMAGAMALQASAQAOAGQAFAKAPACIgEABQgDATADAUQgMALgRADQgMgKgLAAIgFAAIgRAJIgKAFQgQAJgLABIgHgEgAjmhzIACAEQAIAQALADQAHADAKgEQgKgBgHgEQgMgHgHgRIgCAHg");
	this.shape_50.setTransform(108.8,-32);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC9A67").s().p("Ag9HVQgJgPAAgJQALgVAAgGQAAgDgCgDIABgHQAAgbgHgdIgSg8IgGgbIAAgBIgBgCIAAgCQgCgNgBgMIAAgKQABgYAIgVIAGgNQgCgGgMgJQgKgJgBgKQA/glA9AXQgEAFgEAOQgFATAAAGIAAAEIgBAAIgEgTQgBgMgEAHQADAJgCAcIgEAfQgCAWAAAQIgBAVIAAAOIgDgCIAEAQIABADIAEAXQAGAZANgEQACgCgIgNQgDgFACgDIAMAAIAGAAQACANALAAIgEgNIAAgCIABgCIAQgHIAAABQgDACgBACQAFAXAEgLQAEgLgCgIQACgCAHAAIAFAEQADABABADIAAADQACAHADAAQgBgDACgEIABgCQADgDAFgFIAFgFQAHAEAHAAIABADQAGAZgWAAQAHAbgCALQgQASgdASIghATIgsAYIgoAWIAAgCgAATGEQgPAGAGAFQADgDAQgEQAOgDABgJIgZAIgAggGGQAMgCAJgTQAIgPgBgHQgLAMgRAfgAgwFwQgFAHAGAAQAAgBAIgJQAGgGgJgDQABACgHAKgAlGEXQAHgMAMgHQA5AHArgoQAWgVAMgKIAAAAQAFAAABgEQASgOAUgFIgJABQAEgCACgFIADgDIgBgBIABgLIAAgIQAGgHAJADQASALALASIgFAIIgFANQgHAXABAaIACASQgJABgYAJIgHACQgBAAgBABQgBAAgBAAQAAAAAAAAQgBABAAAAIgLAFIgBAAQgPABgLAHQg0ACgFAbQgCAMALAKQAKAKAAALQgMAEgXgJQgQgIgHANQARAAAEABQAKACgCALQgEALgLAEQgogjgWhHgAkcEVQgHAIAIAEQABgFAHgFQAGgFABgEIgDgBQgHAAgGAIgAjvFpIAOAAQABAGgFACQgFADgBADQgCAAgCgOgAjJFhIAFgCQAEACABAIIgIABIgCgJgAD1A+IgEgHIAAgCIgBgBIgIgTQgIgTgHgJQgOgCgaAMQgVAKgQgKQAKgKAUgJIAjgQQAogVABgoQgKgXAFgeQAEgbAPgUQhJgLgcg5IgdgFQgEgMgWAAIgYABIgtgMQhNgXgKgoQAFAIAQgBQALgBgIANQAHAAAGgHQAFgHAGAAQADAKgEAHIgIAMQAMgMAPgdIAbgwQAkg3AsAOQgCgRgQAFQgSAGgDgEQABgMARgEQANgDAFgFIAAAAIAMAAIAAAAQAsAFAJADQAXAIgEAXQgDgFgRgGQgQgHAHAIQAWAKACAJIgHAKIgRAdQALA4hDAKIgNABQgUABgWgFQgbgFgQgKQATAXAlAFQARADA0gCQAsgBAVAHQAfAKAKAgQA8AJAQAlIAAAAQAQAIAAANQADAbgMAeIAAACQgFAMgHANIgEANQgbAggQAeQALABAPAPQAPAPAHAQQgWAEgNgQIgRgUQAKANAEAgIABAEIgBAAIgKADIAAgIQAAgIgEgLQgDgGgNgNIgCAAIAAACQAAAFAIAIIAGANIADAJIAAALIgEACIgEgLQgHgUgKAAIgDABIAHALIAMAcQAAADgHAJIgBACIgEAAIgDAAgABklZIAEADQAMAGAJgJQgMACgJgIIgCgCIgPgQQgBAOAOAKgACVl6QAAAHADACIACAAQALgGgKgKIgDgDQgHgFgFAKIAFgCQAEAAAAAHgACYmTQgDAGAAAEIAUAAIAAgTIgPAAQABAEgDAFgABcmhQAIACgBAJQgBAIAGAEIACABQADgIAJgGQAMgGAFgEIgegCIgBAAIgGgBQgIAAACADgAjShoQBJgbAchLQA8AuBYA4QgHALgTASQgPASgCAUIgYAAQiQAAgmhDgAglgzQgEACgBACQAEAJAIgIQAHgHgJgDQAAADgFACgAlNh4QgNgWAHggQAHgdAUgXQAWgZAagDQgBgNAHgMQAJgPAAgIQAMAEAPANQAQAOAKADIgLASQgFAKALAGQgRAghFAjQAmgGBIghQAAgLgKgKQgMgNgCgEQAGgRAVgRQARgNAIgIQAHACANAAIABAAQgBAJgQAMQgYASgDAJQAKgBAWgYQARgTASAKQgHAHgYAOQgUANADAKQAPgUAkgRQAJADAAAHIAAAFQgKgBgOAIQgTAMgMARIAagTQAPgLAPgDIACACQgCAXggAIQgBAGAEAGQAEAFgCAHQgrBdh5ASQgkgEgOgag");
	this.shape_51.setTransform(117.9,-3.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("ACjBsQAEgPAAAPQAAAHgBAAQgBAAgCgHgACQBsQAJgOgCAMQgBAHgCAAQgCAAgCgFgACJA2QADAHAAASQAAARgDAIgAg1BPQANgJgLAKIgFAFQgBAAAEgGgAguAQIAKgMIgCgGQAEgOAAAOIAAAEIAmgvQgVAwgMAUQgYAngcAWQAJggAagkgACYBMQgJgUAFgQQAFABABAKQACAJAHgBQgCAYgEAAQgCAAgDgHgACtBPIgBgWQABgMAEgFQAHADAAATQAAARgIAAIgDAAgAAThUIgIAMQgEAHACAKQghALgcAzQgdA2gYAIQA/huA9grgAibA6QgLgKgHgDQADgKAbgTQAVgQgIgRQAhgHADABQAFACgaAOQAFAHAAAHQgJgBgHAGIgNAJQADAJgBAFQgCAKAAAFQAMgJACgDQAGgGgGgLQAPgGAGgEQAMgHgEgQQAFAAAPgHQANgGABAEQgbAxgkARQAEAIAKgHQALgIAEAHQgBAKgPAEQgSAGgEAEQgKgCgLgJgAgnA0QAKgFABgHQAFACgJALQgIAKgIABQAAgIAJgEgACJAfQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABIgBADgAitAaIAAgKIAKAAIAAAKgACtAQQAEgOgBAOQAAAHAAAAQgBAAgCgHgACeAHQAEgOAAAOQAAAHgBAAQgBAAgCgHgAitALQACgHgHgEQgGgEACgIQAJABAUAJQgJANgKAAIgBAAgAiVACIAAgJQAEABABgGIAKAAIAAAOgAAHgKQAHgJAAgCQAJADgFAHIgJAJQgGgBAEgHgACjgMQAGgKgBgJQAHgBgCANQAAAJgFAAIgFgCgAiIgiQAMgJgBgCQAJAEgIAHQgKAKAAADQgKgGAIgHgAhugfQADgKALABQgDAJgLAAIAAAAgAhNgwQAGgHAJAAQgOATgKAAQAFgJAEgDgAg4gmQgIgHAkgKQgQATgIAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAATgoQAGgFAOgEQAKgEADgHQAJgIgPgJQgPgKAHgGQAFAHAMAEIAVAIQgQAAACAJQADAJAJgCQAKgCACAFQACALgHgEQgEgCgBAEIgLgBIgCABQgKgCgOAHQgHAEgFAAQgFAAgDgDgAB8gtQABgDAEgCQAFgBAAgEQAKADgIAIQgEADgCAAQgDAAgDgEgACZgtIAAgKQAEABABgGQANAEgIALgAhOhMQAagMATAAQgQAEgVAQQgYASgLAFQgFgQAggPgAAOhFQAGgGANABQgJAGgCAFIgDANQgEgBgBgSgACQg8QAEgOAAAOQAAAHgBAAQgBAAgCgHgAArhBQAMgJgLALIgFAFQgBAAAFgHgAB0g+QgTgIgGABQAAgEAHgBQAHgBAAgEQAJADAIAHQAFAFAMgBQgFAGgHAAQgFAAgGgDgACBhKQgBgHANABQANACgGAJQgKgGgJABgAgFhnQABANgYACQAIgRAPACgAArhiQgDgLALABIAUAAQgFAKgTAAIgEAAgABWhnQABgFgGAAQgBgIALADQAKABgFAJg");
	this.shape_52.setTransform(123.2,-46.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("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");
	this.shape_53.setTransform(118,-7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FAFFFF").s().p("AhqFDQAMgKgKALIgFAGIADgHgABoiZQALgKgJALIgFAGIADgHgABPlHQAGgGAGARQgRgEAFgHg");
	this.shape_54.setTransform(111.2,2.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3A3839").s().p("AkECtQAHgJAIAAQAAAFgGAGQgGAFAAAFQgJgCAGgKgAEEiOIgIgMIADADQAHAGACAMIgEgJgAg1iuQAAgCAEgCQAFgDgBgDQAKACgGAIQgEAEgDAAQgDAAgCgEg");
	this.shape_55.setTransform(118.9,10.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0000FF").s().p("AhZC7IAAAAQgFgXgTgZIgtgzQgZgdgFgWQgGgcAZgdQgBAOAOAIQAOAJAFgGIgNgFQgIgDAAgIQAPAJAIAFQAJAHAAAEQARAIBEgCQBKgCAYAFQAAAnAUAiIAhA5IgOABIgCAAIgTgCQgVgDgMABQgQglgGgLQgPgagOgCQAGAHAoBGQgiADgdAUQgXAQgQAKIgBgBIgCACIgJAGIABAAIgBAAIAAAAIgBABIgGACQAAgRgFgGgAiqiPQADgHAIgBQACASgSADIAFgNgACjipQAIgQANgHQAKAQgHAQQgIAPgSAEQgGgLAIgRgACGijQAMgLAFgGQAIgLgFgSQAWgBgNAeQgKAUgKAAQgFAAgEgDg");
	this.shape_56.setTransform(113.2,-7.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF00").s().p("ABCCFQgJgHgGgCQgEgQAFgNQACgFALgPQAdgGAFAbQAFAZgTAOIgHABQgHAAgFgDgABoBgQgDgHgHgOIAOACQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAgBIAFAEQAKAKAIgBQAFAlgnAKQAJgSgFgUgACWA1IADgHQgJACgFgCIgBgBIAAAAQgGgDAAgJQAEgJAMgGQABABAAAAQABAAAAAAQABAAAAgBQABAAAAAAQACgDAEAAIABAAQADAAAGACIAOACQAIASgCAPIgPAHQgFACgCADgADDAgIgDgEIAAgGQgCgGgFgCIABgBIAJAAIAHAAIAEAEIAAACQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAABQAIAhgbAIQAKgQgEgOgAjLgRQAAgVgFgBIgBgGQAJgGAMgDIADgBIAFABIANACIANALQANAYguARQgFgHgLgKgAiYgRQANgMgNgOIAAgBQgLgRgQgBIABgCIAKgJIAFgBQAFgBAFACIAAACQARAGABAaQgJAYgFAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAgAhmhfQgIgJAFgLQAEgKALgGQAMgGAKADQAKAEACAQQgHAgghAFQABgcgHAKg");
	this.shape_57.setTransform(107.2,-31.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#33CC66").s().p("ADOC7QgLgHgCAAQgGgGALAEQAPAFAEgBQgCAGgEAAIgFgBgACrCfIgvgeQAKgEAQgXQgJgXAGgOIAJgPIACABQAKAJAHABIABAFQAZgDAbAWIAcAXIAEAJIAFAOIgCAbQgTAOgNAEQgfgBgdgQgACKCaQgUgOgHAAQAIgHAQALQATAOAHABQgDACgEAAQgGAAgKgHgAARBYQgTgLgOgGQAJgKAYAPQAWAOALASIghgUgAAXBMIgagQQANgRACgNIgEgEIAAgIQAAgMgHgDIADgCIgEABIgFgBQgJgBgMgHIgIgFIABgCQgKgFgJABQgOACABAEIAAACIgHAHQgKALgEADQgIgCgOgKQgNgKgLgBQANgjAFgeQAIgCAdgBQATgBAPgNQADAIAXAJQACAFgFADQgGAEAAADQAiAAAxAhQBAAsAQAGIAFAVQACAHgNACQAAADAOAAQgDANgNgFIgOgEQgKgEgIABIAAAAIAAgBQguAEABAeQgMgDgRgJgAh9ALQgUgOgFgCQANgIASALQAPAJAKAPIgBAAQgPAAgPgLgAjZg8IgLgGIAAgBIgBgCIgEgBIgKgHIgBgBIgBAFQgJgFgEgLQgDgHgDgYQgCgVAHgLIAQgdQAEgDAVgDIABAAIABAAIABAAQAZgBAhAXQATAOAOAEQAGAJAQABIgEABQgCAUAGATQgLANgQAEQgNgJgMACIgFABIgPAKIgKAGQgPALgKACIgIgDgAjxhaIACAEQAJAPAMACQAIABAJgEQgKAAgIgEQgNgFgIgQIgBAHg");
	this.shape_58.setTransform(106.2,-30.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC9A67").s().p("AAGHcQgKgOgBgIQAIgXgBgGQAAgDgCgCIAAgHQgCgbgKgcIgYg7IgKgaIABgBIgBgBIgBgCQgDgNgCgMIgBgKQgCgYAGgVIAEgOQgCgGgNgIQgLgHgCgKQA6gsBAARQgDAFgDAOQgDAUAAAGIABADIgBABIgGgSQgEgNgCAIQADAJABAcIAAAfQgBAXADAQIABAUIACAOIgEgBIAGAOIABADIAHAXQAJAYAMgFQACgCgJgMQgDgFABgEIANAAIAFgBQADANALgBIgFgNIgBgCIACgCIAPgJIAAABQgDADgBABQAIAXADgMQADgLgEgIQACgBAIgBIAFADQACAAACAEIABACQABAHAEAAQgBgDABgEIABgCQACgEAFgFIAFgFQAGACAIAAIABADQAIAYgVADQAJAZAAAMQgPATgaAVIgeAWIgrAdIglAaIAAgCgABOGEQgPAHAGAEQADgDAQgGQANgEAAgJIgXALgAAaGKQALgDAIgTQAGgRgBgGQgKANgOAggAAHF2QgEAIAHAAQgBgCAHgKQAFgGgIgCQAAACgGAKgAkVE8QAFgOAMgHQA5AAAmgrQAUgYALgLIABAAQAEgBABgEQAQgQAUgHIgJACQADgCACgFIADgEIgCgBIAAgLIgBgHQAGgIAJABQATAKANAQIgEAJIgDANQgGAYAEAaIAEARQgIADgXALIgHADQgCAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAIgLAGIgBAAQgOADgKAIQg0AHgCAcQgBAMAMAJQALAJABALQgLAFgYgHQgRgGgFAOQARgCAEAAQAKACgBALQgDALgKAFQgsgfgdhDgAjrE1QgHAJAJADQAAgFAGgGQAGgFABgFIgCAAQgIAAgFAJgAi2GEIAOgCQACAGgFADQgFADAAAEQgDgBgDgNgAiRF3IAFgCQAEACACAHIgIACIgDgJgAEMAnIgFgHIAAgCIgBAAIgLgSQgKgSgHgHQgOgBgZAOQgUAMgRgJQAJgKAUgLIAggUQAlgZgDgoQgMgVACgfQABgbANgWQhKgEgig0IgdgDQgFgLgWACIgYADIgtgHQhQgPgOgmQAGAIAQgDQAKgCgGANQAHAAAFgIQAEgIAHAAQADAKgDAHIgHAMQALgNANgeIAVgzQAdg6AtAJQgDgRgPAHQgSAIgDgEQgBgLARgHQAMgEAFgFIABAAIALgBIAAAAQAsAAAKACQAXAGgBAWQgEgEgRgFQgRgEAIAHQAWAIAEAIIgGALIgOAeQARA3hCARIgMACQgUADgWgCQgcgCgQgJQAUAVAlACQASAAA0gGQArgHAWAFQAfAGAOAfQA8ADAUAjIABAAQAQAHABANQAGAagIAgIgBABQgDANgGAOIgCANQgYAigMAfQALAAAQAOQARANAJAQQgXAGgOgOIgTgTQALAMAIAfIABAEIAAABIgKADIgBgIQgBgHgFgKQgEgFgOgOIgCABIAAACQAAAFAJAJIAIALIAEAIIABALIgEADIgFgLQgJgTgKABIgCACIAIAKIAOAaQABACgGAKIgBACIgEABIgDAAIAAAAgABRleIAEACQAMAFAJgJQgNACgJgGIgDgCIgQgPQABAPAPAIgAB+mEQABAHADABIACAAQAKgHgLgJIgDgCQgIgEgEAJIAFgBQAEAAABAGgABNmoQgPAAADADQAIABAAAJQAAAJAGADIACABQACgJAJgHQALgHAFgEIgeABIgBgBIAAABgAB/mmQABAEgCAFQgCAGABAEIATgCIgCgTgAjLhOQBGgiAUhNQBBAnBdAtQgGAMgRAVQgNATAAAUQgpAGgiAAQhkAAglgzgAgYgrQgFACAAADQAFAIAHgJQAGgIgKgCQABAEgEACgAlGhQQgQgVAEggQAEgfASgYQATgbAagGQgDgNAGgNQAHgPgBgIQAMACARALQARAMAKADIgJASQgDALALAFQgOAihBAqQAmgKBEgoQgCgMgKgIQgOgMgCgEQAEgSATgSQAPgPAIgJQAHABANgBIABAAQgBAJgOANQgVAVgCAKQAKgDASgaQAPgVAUAIQgHAIgWARQgSAOADAKQANgVAigVQAJACABAHIABAFQgKAAgOAKQgRANgKASIAYgVQAOgMAOgFIACACQAAAWgeAMQgBAGAFAFQAFAFgCAIQghBgh2AfQglgBgQgXg");
	this.shape_59.setTransform(116.5,-3.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("ACXBpQAIgPAAANQgBAHgCAAQgCAAgDgFgACrBnQACgPACAPQAAAHgBAAQgBAAgCgHgAguAiIAIgNIgDgHQACgOACAOIAAAFIAjgzQgSAygJAVQgUAqgaAYQAGghAXgmgAgvBhQALgKgJAMIgFAFIADgHgACLA0QAEAHACASQACARgDAIgAiWBXQgNgJgGgCQABgKAYgWQAUgRgJgSQAfgKAEABQAEABgYARQAGAHAAAHQgIAAgHAHIgMAKQAEAIAAAFQgBAKAAAGQAMgKACgDQAEgIgGgKQANgHAGgFQALgIgFgQQAEgBAPgIQAMgHABAEQgVA0giAUQAEAHAKgIQAKgIAFAGQgBAKgOAGQgSAHgDAFQgKgBgLgIgAAHhIIgHAMQgCAIADAKQggAOgWA2QgYA4gXALQAzh0A4gxgAgkBFQAKgGgBgHQAFACgGALQgIALgHACQgCgIAJgFgACcBJQgKgUADgQQAFABACAKQACAJAIgCQAAAYgEAAQgCAAgEgGgACxBJIgDgVQgBgNAFgFQAGACACAUQACARgJAAIgCAAgAitAwIAKgBIABAJIgKABgAizAgQgHgEABgIQAJAAAVAHQgIAPgKABQABgIgHgDgACIAeQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABIgBAEgAiXAVQAEABAAgGIAKgBIABAOIgOACgACrALQACgNABANQABAHgBAAQgBAAgCgHgACbADQADgOABAOQABAHgBAAQgBAAgDgHgAAEACQAFgJAAgCQAJACgEAHIgIAJIAAAAQgGAAAEgHgAiNgGQAKgLAAgCQAJAEgHAIQgKAJABADQgLgFAIgGgAhmgRQgDAKgLABQADgKALgBgAhUgaQAFgHAJgCQgMAUgKACQAEgKAEgDgACegQQAEgLgBgIQAGgCABANQAAAJgGAAIgEgBgAg/gSQgIgHAigNQgOAVgIAAIgEgBgAhZg2QAZgPATgCQgPAGgUASQgVAUgLAGQgHgPAegSgAAMgdQAGgGAMgFQAKgEADgIQAHgJgPgIQgQgHAGgIQAFAHANADIAWAFQgQADADAIQAEAJAJgDQAJgDADAFQADAKgHgDQgFgCAAAEIgLABIgCABQgKgBgNAJQgIAFgFAAQgEAAgDgDgAAEg5QAFgGANgBQgIAHgCAFIgBAOQgEgBgDgSgAB0gtQAAgDAFgCQAEgCAAgDQAKACgHAIQgEAEgDAAQgDAAgCgEgACQg6QAEABAAgGQAOACgIAMIgJABgAAhg4QALgKgJAMIgGAFIAEgHgACGg9QACgPACAOQAAAIgBAAQgBAAgCgHgABqg9QgUgGgGACQAAgEAHgCQAHgCgBgDQAJABAJAHQAGAEALgCQgFAHgIAAQgEAAgFgCgAB2hKQgCgHANAAQANAAgFAKQgKgFgJACgAgShZQACANgYAEQAGgRAQAAgAAlhkIAUgBQgFALgXABQgEgKAMgBgABDhmQgDgIALABQALAAgFAKIgJABQAAgFgFABg");
	this.shape_60.setTransform(119.3,-47.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("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");
	this.shape_61.setTransform(115.1,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},6).wait(14));

	// Layer 2
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9999FF").s().p("AhigdIAAAAQAPgDAIgDQAJgEABgDQAgACAwgOQBBgRAcgBQACgGAbgFQAPgEgBgCIATgFQABAPAEAoQAEAzgNAVQggAKhdATQhPARgpAQQgMgkgHhYgAg9ASQAAAYALAFQACgHgGgRQgEgOAIgFQAIADAHARQAIAQALACQgHgKACgZQABgXgLgIQAAADABATQABANgGACQgSgXgLgKQABAFACAhgAgGACQAAATgGAHQAKABABgRQABgQAMAEQAIAAAEANQAFANAHACQgKgughgLIABAfgAApgdQABALgBAVQAAAQAJgBQgBgDACgaQABgSgLAAIAAAAgACSgYQgBAOgQAJQgSAKgDAJQApgQAHgfQgGgFgSAAQgUABgJgBQAAgJAMgDQAOgEADgDQgngCAFAaQAEABAXgBIAFgBQANAAADAGgABDgOQAEAMgHAGQAQgBAXgNQgHgBgHAEQgHAEgIgCIAAgWQgBgLgJgBQgCAJAFAQgAhvA6QgNgHgIAKIgRgVQgLgMgPAAIAAh3QA4AuAQALQgBBOALAbQgKgJgIgEgAACgKQAFgMACANQABAGgBAAQgCAAgFgHg");
	this.shape_62.setTransform(267.7,130.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CCCCCC").s().p("AhTA/QAAgGALABQAQABACgBQAAgGgKABIgOAAQgEgQAOgCQAIgCAUABQgCAKgHAGQgEADgBAFIAAAFQgGgBgLAEIgEABQgEAAgEgEgAAmAqIgFgWIAEABIAFgBQAAAFgBAEQAJgBANAHQAOAJgHAJQgDAAgGgNQgFgLgFAKQAQASgMABQgMgCgFgOgAiXAnQAWgbAagCQgQAdgcAAIgEAAgABQAMQAJgRATAGQgBALgMAJQgNALgDAHQgGgKAHgRgAgYAiQgHgJABgKQAIAEACAFQAAABAAAAQABAAAAAAQABAAAAgBQAAAAABAAIABAAQgBAIAGACQgDAFgDAAQgDAAgEgFgAhJAdQAHgIAVgBQgDgIgKADIgPAFQgCgKAGgIIAKgKQgBgEgHgBIgLAAQgGABADAFQADAFgFADIgWAAQgMgBgFgDQACgGAMAAQASACACgBQABgGgKABQgNABgCgBQANgKAtAAQAAAOAIANQAJASACAHQgHgGgKADQgLAEgHAAIgDgBgAhnAXQAJgGgDgHQAJADgGAIIgJAIQgGgCAGgEgABGgXQAHAHgDAQQgEAPAFAFQgIgBgCAFQgHgEAMgrgAgQALIAAgCIATAAQARACABAJIgIABQgNAAgQgKgAAbgMIgBgBQgCgCAAgDIABgBQgZAMgLgUQABgDAPgIIAFgDIgBgDIgBgCQACgDAMAAIADAAQAWAAABAMIAAABQAAAJgRANIgCADIgCgBgACCgWQgHgLgFgEQAEgFAKAFIAEACQANAIADAJIgIABQgJAAgFgFgAgygqQABALgLACQgEABgTABQAEgLAdgEgAhPgxQAagIADgEQAIAKgWAGQgaAGgDAHQgHgKAVgHgABJgyQgZgGgHAAQAGgLAUABQALABAVAEQgDALgPAAIgIAAg");
	this.shape_63.setTransform(264.3,115.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFF33").s().p("ABDBSQgDgIgRgGQgUgIgIgHIAKgJQAGgFAIgBIgHgNQgCgFAJgGQgegMgqgbIAAgBQgHgUgdAAQgKAAgKAEIgHAEQgPgDgHgLQADgBAYACQARABAEgHIgOgHQgJgFAIgCQAKABAMAGQAOAGAHABQABgDgFgKQgDgJAHgCIA0AmQAeAQAegHIgFAGIgGAJIgFAFIAGABIAFAIIgGABIAJAEIAFAHQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgCIAOAFQASAJACAQQgLADgJgGQgMgGgGAAQADAPALAXQgCACgHALQgFAHgIAAIgCAAg");
	this.shape_64.setTransform(459.3,38);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("Ak/HBQAIAOgKAWQgGANgeAmQAQg+AWgZgAk0HoQARgSABgVIAMABQAHgBAAgEQAIAZgRAYQgRAXgbAFQAAgRAQgRgAmNHyIgcgYQADgEARgIQANgGABgLQAGALgFAVQgDAKAfABQgBAFgDAKQgDAJACAKQgMgIgSgQgAkGHsQAIgMAMgCIgIAJQgFAFgBAFQAJgBAbgHQAQgEAKADIAAABQguATgjAEQACgCALgSgAjCHoQADgKACAAQAEgJgJAAQgKAAABgFQApgFAVgMIAfANIADACIAFABIAEACIg4AKIAEgGIgSAIIgEACIAAAAIgVAKgAivGyIAbALQgYAKgRAEQAGgOAIgLgABnjpQACgEgGAAQgCgIALACQAKACgFAIgAB5j6QgCgHgGABQAEgJAIAFIAMAIQgBADgEACQgFABAAAEIAAAAQgEAAgCgIgABjkPQAFgLATACQAUACAEAMIgPAAQgVAAgMgFgAF+mWQACgFAIgHQAIgGABgGQALAHgIAMQgFAHgIAAQgEAAgFgCgAD4mkQAJgOgCANQgBAGgCAAQgCAAgCgFgADumuQAMgJgKALIgGAFIAEgHgADDnoQAJAFAKAQQALAUAIAIIgFABQgSAAgPgygAF1nLQAGgUAUAEQASAEAJARQgDAIgKAAQgOAAgagNgAChnjQAGgEATgHQARgGAGgHQgTAZgUAAIgJgBgACXn7QAHgBAQgEQAOgEAQAAQgFANgWAIQgHACgFAAQgMAAgCgOgACZoQQAjgHAGAAIAPAEQABALgbABQgCgFgUAFIgIACQgIAAAIgLg");
	this.shape_65.setTransform(293.7,73.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AhrKgQgagYhNgoQBKgUBBgvQgPgFAVgRQAVgSgMgJQggAvgoAaIgDgDQgJgYgVgXIgCACIgMgTQgagpgJgbQBdg2AWiGQAbANAhAtQAhAuAaAMQAEANgJATQgHARAHAIQAFgGAEgVQAFgTAGgGQAGACAFAPQAEAOAJACQACgQgKgMQgMgMgEgIQCQgpBlDqQgiARgPAMQABAigUAvQABAHAKAEQAMADACAFQgwAOhmAvQhcArgzAMQgFhFgygtgAg2k6QgvgEg4APIA0gqIA9gyIAIgFQA+gxBBgYQgbA8ghBhIgXAbQgRgUgtgFgAjYlUIgGgDIgOgFQgEAAgCADIgFAAQgggCgEgBIBRg7QAxgkAdgaQAHABAKAFIASAIQhBBCgyAuIgEAEIgIgBgAkbo5QAeAAAfgQIACAAQADAAALgJIADgCIAQgMIAAABIACgDQAKAJAWANIgFAIQgTAZgpANQgOAEgMAAQgeAAgJgfgAhxqeQASgYAGgZQABAdgGARIgLAbQgTgIALgQgAhiruIAAgBQgQgWAKgMIATAJQAOAHgDASQAAAJgCAJIgEABQgOAAgEgSgAg8rmQAEgCABgJQAAgKAcgMIgOAYIgBABQgNAOgBADQgIgHAEgCg");
	this.shape_66.setTransform(395.4,52.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CC6600").s().p("AidBKIAAgJIADgEQAOgWAWgKQAAAFgIAKIgPAUIgGAKgAh7AsIABACQgKAOgGAIQAGgQAJgIgAicAyQAAgNgGgCIAAgEIACgEIARgaQAOAAARgJIAKgHIAAADIABAMQgFAKgLAKIgcAWIgLALIAAgDgAhKANQgGAFgGgIIgHgKIABgMIAAgKIAQgLQA0gmAtAFQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQALgGAUAKIAfAQQgBAHgEAHQgCABgRAQQgQARgNgDQgMgDgNAGQgfAQggADQgJgJgHAGgAAyAFQAOgHANgRQAHgKAOgWIAFgEQAGAEAJABQAIABAKgBQAEABAJAJIAEAEQAGAHAEAKQgLACgPAHIgvAUQgKADgIAAQgOAAgIgIgABcgJQgGADACAHQAIACAFgJQAEgLgHgBQAAAEgGAFgAiBgSIABgFIADgEIAWAAQgCAEgLADQgLABgBAGQgEgBADgEgAhjgtQgJgCgBgFIACgEIASAKQABADgDAAIgIgCg");
	this.shape_67.setTransform(346.7,-19.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF99").s().p("AgTAMQAng4gHhEQgCgFgHgHQgFgKgGgFIgBgBQgFgFgEAAIgBAAQAQgGATgCQBAgJAYAtQAGAtgjBsQAFAPAUAPQAVAQAGALQgGgDgRAAIAAgBQgKgEgRACQgPABgLgJQARASACA7QhjgiAJhugAh+BiIACgDQARgXABgIQACgKgEgMIgCgGIADgWIAFAKIABACQAEAOAOAMIAZARIAAAiIgEgBQgXgDgRAIQgJAFgQANg");
	this.shape_68.setTransform(181,-30.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF00").s().p("AIUElQARgXAfgHQASAfgUAcQgTAbglABQgKggAUgZgAIhExQgFAEACAHQAJADAFgKQAEgKgJgDQAAAEgGAFgAHVFBQADgmAcgTQAbgSAnAHQgCAEgiAfQgWAUAAAbQgUgQgTACgAEKEiQgMgNABgTQACgUAPgLQARgNAaAFQgOAPgDAXQgFAZANATIgJABQgTAAgMgMgAEtECQAPgtA1ALQAEAygrAWQgbgGgCgggAFED8QgGAIAHAIQAMABAGgOQAFgOgNgCIgLANgAMaAPIgVgMIAcgoQAUgUAhADQgWAUgMAbQgOAaAHAWQgIgTgLgHgAM1AgQgFghATgXQASgVAZAGQALAegUAYQgPATgTAAQgHAAgHgCgANIgGQAHAEAGgJQAFgHgJgCQgBAHgIAHgAKCgGQADgyAzgCQAKAWgTAWQgMAOgOAAQgJAAgKgGgAKigoQgIAFABAKQAHAAAHAFQgBgHALgKQAHgIgMgEQgBADgLAGgAJSgKQAFgiAXgRQAZgUAiANIgiAbQgRATAIAVIgBAAQgQAAgbgJgAsuh0QATgEAKgGIABAAQAEAAAGgIQAFgHAAgDQAAgIgHgBQgCgRADgNICHgLIAAAGQAAAEABADQgXANgjAYQgrAdgJAIQgMAAgZAEIgIAAQgQAAgEgNgAtxkYIAAgDQAIgtAQgJIAegFQA5gIBLACIACABQARAIAIAAIABABQgEAYACAPQhbAegOADQgXAEgUAAQgnAAgZgSg");
	this.shape_69.setTransform(259.9,24.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#33CC66").s().p("Ak8D2QA9AkBTgnQAdgNAmgaIA6gnQgmA3hLAjQgrAUgkAAQgrAAgigdgAlGC8QAIgZAVgqQA3AKAjgbQAlgdgVgpQAcgbA/gwQA/gxAcgcQAJgBAFAIQAGAKADACQAYgKAFgFQAAgKgTgOQAKgSAWgKIApgNQAZgIALgLQAQgQAAgdQAdgdBFgCIABAAQA9AAAOAhQADAFABAHQgKgIgLgEQgLgEgLAAQgPAAgOAHQghAPgPAlQACAQAuAgQAAAEAMgFIARgIQgdAzhVBLQhiBXgdAkQAHgZAmgkIBCg2QAPgWAjgkQAkglAPgUQiKCPhOA/QgmgfgwAUQgwASgFAuQABALAPAEQATAFADAEQgQAXglAaQgoAdgoANQgeAKgWAAQg9AAgShEgAiGA/QAKAPABADQABAGgHAPQAZgFAQgdQAPgiALgOQgegFgMgBQgVgCgJASIAYAdIgGgBQgKAAgIAFgACHiTQAgAegSAbQAYABAQgUIAbgiQgJgbgegDIgGAAQgbAAgJAag");
	this.shape_70.setTransform(316,43.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("ACaD/IgBgEQgDACgJACQgXADhAgEIAAAAIgCAAIgTAAQhmgDhRgGQABgVgDgdQgDgiAAgMQBGAgA3ABQAbABA6gKIARAAQANAAAJAEIgEgKIANgEIAHgDIAIgEIABAAQATAAAJgHIAAAEIABAHQgGAQANBPIABAEgAA8DFIAEADQAIAFAVAEIAGACIADABQAFACADACIAHgSIAAgBIgBgDIAAgBIACADIAIgaIgaAoIgegQIgBAAQgGAAgDADgAg+kCIAIACIgDABQgDAEgDAAIgEAAIAFgHg");
	this.shape_71.setTransform(290.8,-7.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#8B5E30").s().p("AheBHIgCgFIAAgFQAAgGgFgFIgBABQAAgDgFgDQgIARgBgUIAAgjQgJgBgIAEIgMAHIADgIQACgFgFgCQgDAFgNABQgOABgEADQAXgbBJgeQgFgBgEgIQAOAEAjgNQApgPAUgBQAbAKA6AQIAWAIIANAEIAPAGQAWAOAFAAQgLACgLgDQgPgEgFAAQgZApg0gRQgEAFAGAIQAEAFgGABQgpgJggAOQgfANgPAeQgJgIgGgCQgEACAAALQAAALgGAAIgCABQgHAAgCgJg");
	this.shape_72.setTransform(239.3,-12.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CC9A67").s().p("AgkDVQhSgHgbgtQAKgGgJgTQgMgZABgMQB4AGBDgjQAtAZBQASQgLgCAFARQADAJAIATQgBAKgHAHQgFAEgKADQgPAFAAAHIAAABIgCABIgMAFIgOgBIABACQg5ANgxAAIgbAAgABGCMIABAAIABADIAAAAIgBgGIgBADgAB1BfQgsgGgbgYQAMgGAegWQAZgTAUgGQAgAMAVgRIg1gIQghAjhDAcQhFAdhAACQhKACgmgkQgrgqAOhVQgMgYACgPQAohLB1gUIAcgBIADAEIACgEQAVgDAGgGQA8ANA+AGIgEABQgdAEgJAEQAMAFARgDIAdgHQALAOAbAPIAvAaQA2AhgTAvQAdAkgBAwQgBA3gpAOQhGgBgXgDgAiMACQgGAIABAMQAVgGAbgMIAugUQA3gXA5AEQARgJApgKIAOAeQAIAUALgHQgLgGgHgTQgGgXgFgJQgeAOhsAXQheASgaAZQAFgOAPgNIAcgUQgUgCgVAMQgWAOgOAAQAHgLAYgLQAYgMAHgJQgQgBgZATQgWAQgNgFQAFgOAXgKQAbgMAHgHQgMgBgeASQgYAOgLgMQAXgnA5ANQAvALAWAYQgFgHgagTQgVgPgGgQQgGAEgxANQgiAJgHAWQAOAaAKARQAXABAVgGQgDAGgHAHgAgDizQgHABAAAEQAKAGANgCIAAgJQgGgEgEgBQAAAEgGABg");
	this.shape_73.setTransform(289.7,-11.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0000FF").s().p("AgQDMQgHgEgJACQgMADgKgBQgMhSgIguQgOhTgTgrQAFAeARBMQAPBJABAzQgtADgygMIhJgUQADhSgWhwQgbh9gMg8QCAA5CBAbQCnAkCKgYQAAAUgPAOQgIAHgVAMQAUAXAdgOQADAEADABQADADAHgEQAJgFgBAGQAAArgPBeQgIA1gCAmQgBAIAAAPIAAAdQggAGgdADQgtAFgmAAQhXAAg3gZgAh1AtQgDgMgQgWQAHAcAMAGg");
	this.shape_74.setTransform(207.1,70.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFE0CC").s().p("ACoHNQgMgBgDAKQgKgNgHgeQAGABALAAQAKAAADgCQAgAJAigFIAEAAIADAAQAMgBALgLQAMgLAAgGQgEgOgFgJIABgBIgDgCQgIgRgLAAIgBABIgsgmQg2gvgogUQgJhXgxhFQABgPAEgKIALgNQAIgIAAgCIAAgBIBIhdIA3AEQAdADAIARQgKgIgKAIQgPAUguAzQgnArgUAeIBWB6QApA0AmAbIgBADQAAADAKAKIASAPQAaAYAAAdQABAgglAJIgeAIIgCgDQgNAEgPAHQgVAIgJAAIgBAAQgNAAgFgNgAhWAoIAcgWQgKgDgZAPQgaAPgVgDQAngcAigGQgMgLgbAOQgkAUgHABQgIgUAjgHQApgIAEgMQgNgVgcAQQgQAJgGACQgMADgHgJQAUgWAwADQAqADAeAQQAZgSAjgfIACgDIAMgKIAsgtQAkglAbgbIACgBQAggeATgOQhEhAhVg3QgBgHgFAAIgCACIgCgBIAAADIgXATIgHAGIgPAHQgeANgPAAIgUgVQgLgMACgKQgVADgaAOIgrAYIgDABQgUAKgUAEQgeAFgcgKIgHgDIgTAGIgUgVIAEACQALALAKACQADgFgQgJQgTgMgCgIQAMgJAUAIQANAFAKACQAHAAAGgBQAOgJAAgJIAAgBQgBgDgIAEIgGAFQgHAEgFgBQgEgBgDgIQAKgGAXgBQAhgCAHgBQAvgJgJg6QAUgJAsgeQAngSARAqQgFAigrAKQAEAJAQgFQATgGAJAGQAwg7CBACQABAPgJANQgLAMgFAIQgKACgHgHQgIgJgEgBQAYAkBEAyQBXBBASARQAEA8gqgCQAAADAPACQgSASgxAlIhAAtIgMAJQhMA2gfAwQgWAKgMAEQgVAIgRgIQgHADgSANQgOALgOACQAHgNASgNgAjSlNQghAMACASQALgPAbgIIAugKIADgBIgDgBQgJgDgJAAQgQAAgTAIgAhDmxQgFgGACgLQADgJgFgDIgPAMQgJAKAJAHQACgGAIgEQABAFAJAFgAgjgeQgIgGgKACQADgIAMgKQAMgKACgKQAQgBAMABQAEAFAJAAQABADAGABIgrAnIgBAAQgHAAgIgGgACgjCQgOgKgHgCQgOgDgGgDQAGgggYgMQgggKgMgIQAOgdAUgCQAQgCAUAMQAMAIAaAXQAYAVAMAHIgpAqgAEgkEQgKgUgfgVIg5giQgfgVgLgUQAPgkAFgoQBKARAsA9QAlAyAWBYQgHAegzAEQAPghgOgZgAkSmlQgGgJgJACQAVgLAxgOIADgBQgkAUgIAUIgCAAQgHAAgFgHgAlYmwIADgIIACgDQAFAHARAAQAAAHgIADQgLACAAAFQgGgFgCgIg");
	this.shape_75.setTransform(371,26.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFCC97").s().p("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");
	this.shape_76.setTransform(320.8,56.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00CCFF").s().p("AKoH3QhCgNglAAQgNgDgBgHQgjgggGhDQgHhFAhgmQATgRAhgPIA7gaQAOAEAtACQAoABAQAHQBPAoADCZQgOA1g6AhIgZABQglAAgqgHgAKVFrQgNADgEAOQgBAIAGALQAdAAAFgFIAAgYQgIgHgJAAIgFAAgANiGiQAFhog4g3Qg0g0heAAQAUgIAZgWQAdgaAMgHQAcgtAUh/QBHgwCMhvQCIhsBNgzQBxBaAQE5QgZgegYgMQghgPgvAFQgNAIgVAGQgrAygYAWQgIAdgeA/QgeA/gKAlIgGAeQgyAdgNASQgMAGg0AgQglAXgRAOQAEgKABgHgAKOFyIAYAAQACAHgEAGQgEAFABAGQgXgBAEgXgAD9FIQihgQhOgiQgPgpAehFQgBgEAGgBQB4AKGsA5QgJAQgjAjQgfAlADAqQgygKjPgWgAhKEeQgsgIgegEQABgGAKgCQAMgCABgFIgBABIABgBQgDgHABgWQAAgNgCgIIAJhBQBIgBA0APQgNAcADApQABAMAJAxQgQACgQAAQgYAAgXgEgAzdEbQhkgZgKhkQAKgTABgHQAHgJAJgQIAHgQIAJgKQATgZAPgIQAlgWAtgBQArgCAmAQQBWAngEBaQgTBAhDAlQgTABgrAHQgkAGgYAAIgEAAgAzICIQgMAOAQANQAIACAHgDQAJgEAEAAIAAgYQgJgFgHAAQgJAAgHAHgAwTDOQAOgbAKADQgQgaAFgnQADgfAPgYQAQAFAvgCIABAAQAtAHAvAGQARAGAFAAQACAAACgDQBXAJBaABQABAJgCA3QgCAoANAMQgoAIhCgFIh1gMIghgCIABgDQAAgEgEgBQhQAHAAAEIAAABQgxAKgaAeQACgNAMgVgAJNDiQgFgKgHAAQh/gKjigeQjwghhigJQgCgSAGgwQAGg1AAgYQAmgEASgMQAWgQADggIABAAQAVgOAIgJQClgpBThZQAFiIhSh2QCKgBFpALIAAAAQAHgCANABQAdABAFgBQgEAIgJANQgHAMABAPQAHASAWgDQgOAUgUAOQgYgJgKgUIAGglQABgIgFgJIgagHIgkAPQgMAOATgEQAUgFADAEIgqAKQAAAOAKAJQAFAFASAIQAlAPACAcQh+BphCAyQhkgPgPA6QgCANAHAMQAJAPAAAIQgNARgVAyQAEBiBrgDQA1gLAzgiIBThAQARAAAWgPQAug5B6hyQBxhqAzhFQAEAFAMAAIAWAAQAAAEgEAJQgDAHACAJQAXABABgKQgBANABAdQAJAHAjgQQAMABgKAJQgPALADAIQASAEAfgRQAigSAXACQgBANgRAKQgWAJgIAGQgXARg1AuQgzArgbATQiLBshJAzQgHAfgNA/QgOA2gTAdQhhBIgvATIgBAAQgHAAgEgJgAzECZQgEgJAGgDQAHgFAAgCQAMABgCASgAzEATQBBgcBAg+QBdjFBLhWQB1iICngTQgQAPgiAcQgdAagMAbQABAQAIASIAPAcIABgBIAHANQgTA9ACBIQAnChASCDQg7AAhegLIgVgCIgBgBQgEgFgMgDQglgLh3AAQgIAAgBAFQgFACgGAOQgIASAAASQg/hlh8AKg");
	this.shape_77.setTransform(247.7,65.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("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");
	this.shape_78.setTransform(293,54.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3A3839").s().p("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");
	this.shape_79.setTransform(297.5,56.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FAFFFF").s().p("AiaM6QgBgJABgJQAHgTgCAmQgCAFgBAAQgBAAgBgGgAhJMoQAHgLAIgDQAIgHgbAkQgFgDAJgMgAgUMaQANgEALgBQgEAFgLADQgOADgEADQgGgDAPgGgAgDL9QAEgIAHADQgBAHgHAHQgJgBAGgIgAiyL9QAEgOAAAOQAAAHgBAAQgBAAgCgHgAhsLzIACgEQAFAAgFAEgAixLsQAGgIgCgEQAJABgJASQgIgCAEgFgAPvLeIACACIAAAAIgCgCgAM1inQABAIgGADIgOADQgCgRAVADgAN5i2QAAAMgNACIgaABQAGgQAhABgALyjEQAEgOAAAOQAAAHgBAAQgBAAgCgHgArqlnIAFgCIAAAAIgIAEIADgCgAFLmhIAAAAIAAAAIAAACIAAgCgAJ6oaQgDgXANgMQAMgLASABQARABANALQANAOgCATQgKAWgfACIgEAAQgdAAgHgYgAKboQIAAAEQACAEAHAAQAKAAAAgHQAAgIgLAAQgIAAAAAHgALjoVQgYgcAYgbQAXgbAjAUIAEAIQACAGAEAAQAEAggXANQgMAIgOAAQgLAAgMgFgALyogIABABIAAABQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIAAABQABADAFAAQAIAAAAgIQAAgJgHAAIAAAAIgCAAQgIAAAAAIgAlRp2IAIAAIgDABIgFgBgAlBqpIAHAAIgCAAIgFAAgAvqsbQAKgJAPACQgEgGgKgDQAIgMAEgDQAIgHAOACQgQAxggAEQgHgIAKgJg");
	this.shape_80.setTransform(273.3,42.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]}).wait(20));

	// Layer 1
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(3,1,1).p("EgkZAX3MBIzAAAIAA4SIAAgCIAAgJIAAnZIAAgLIAAgMIAAvfIAAgBIAAAAMhI0AAAMAAAAvtg");
	this.shape_81.setTransform(284.6,30.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#0000CC","#0099FF"],[0,1],-13.3,21.2,-13.3,-21.9).s().p("AAfBYIAAgBIAAABgAgeg0QgBgKAGgJQAIgLABgEQAGgFgEAXQgDAQgJAAIgEAAg");
	this.shape_82.setTransform(299.8,-0.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#0033FF","#66CCFF","#BCFEFD","#0099FF"],[0.008,0.165,0.235,0.553],-101.9,19.7,-101.8,-36.1).s().p("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");
	this.shape_83.setTransform(388.7,3.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#006633","#00FF33"],[0,1],-26.7,-100.3,-7,-105.6).s().p("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");
	this.shape_84.setTransform(286.7,-16.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#D9AF9A","#993300"],[0,1],-104.7,30.5,-24.3,-108.7).s().p("AB5JCIACgXIgCgsIAAgGQABgFAGAAQAbAAAAALIAAADQgEAEgBAHQgDAGAAAJIADAYIAAAAIAAADQADAOADAHQgDAHgSAAIAAAAQgOAAAAgRgAFiINIAAgeQgJgaAAgEQAJgFAAgCQAAgDgEgCIAAgUIAOgCQAMAAAHAFIgDAEQAAAIAEASIABAIQgDAIgKAKQAMAlAGAOIAAAHIgPAAIgDAAQgSAAAAgZgAkPIOIAAhOQAagBACgBQAQABAAAEIgFBMQAAAFADAIQgqgDAAgLgAKcIIIAAgJQAEgOABgYQADgCAAgGQAAgBgDgDIAAgBIAAgGIABAAQAAgFACgCIABAAQgEgRgJgWQACgJASACQAZABADgBIgDANQgGADAAASIAAADQABANAEAXQgBAIAFAHIAHAhIgSABIghgDgAB7HSQgBgOAAgOIADgTQAFgBAAgEIgJgdQADgCAAgEIAAgBIgDABIACgEIABABIgBgCIgBAAIgBgHIAFgKQAEgGAJADQAFgDAAgDQAIACADAQQAEACACAEQgCgDgDAAIgFACIAAAFIAGAPIgGAOIAAAHQACAGAEAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIgBABQgDADgDABIACALQABAEgCAPQAAAJAFADgAkZGsQAKgrAAgSQAAgGgKgrIACgMIABAAIAhgBQgLAMASASQABANABAHQgIADAAAFIAAADIAAACQAGAGALABIACACIADAUIABAZQgfACgWAEgAFnGaQgSAAgCgNIABgSQABgTgDgJIgBgEQgHgaADgOQAEgBAZACQARABACgJQAFAEAAAKQgFACgBASIgBAFIABARIAHAtQAEAJgfAAIgBAAgAKtGLQgSgBgDAAQAAgIAOABQASABADgBQAAAIgLAAIgDAAgAKYF9QgIgTAHgcQAFgYgRgRQACgOAVAAIAmABQgHAKgBAlQgBAfACAJQgHAOgZAAIgJAAgABBF2IgxgGIgigCIgIgEIAAgBQgEgOABgHQABgEAFgEIAUABIBKABIANADIARAEQADAFAHAAQAFAAABgCIADAAIABABIACAAIgGAHQgEAGgCAEQgEACAAAMIABADIgrgFgAjcFSQgCgPgCgIIgBgQQAMACAOAJQAQAGAXgFQAJgBAHAAIgEAIQgDAJAAAHIADAXQgygGgWgNgABtFFIAAgOQAEgMgCgNIgDgVQAFgGAAgDIAtgBIAAABQgKAAAFAJQgRAAAAANQAAAGANAEQgFADAAASIAAALQAAAGACACQgKACgPAAQgCgCgKgDgALwFHIAAgbIAOAAIAAAbgALIFAQAHgIgBgTIAbAAQAAAcgYAAIgJgBgAJgE8QgagFgTACQgDgZAegCQARgBAmABQgDALAEAHQAGAJgBAHIgIABQgPAAgUgFgAHlE0IgsgHQgagDgNACQAJgNgDgVQAVAIAxADQA0AEAUAFQgJAXgmAAIgSgBgAkQEhIgJAAIAAgRQAGAAAAgWQADgJAAgFIgEgLIARADQANAAAMgCIABAAIABACQAAAMgGATQABAYgBABQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgJACIgIAAIgNAAgAFrEcQgYgFgMABQAIgnADgSQADgfgIgbQAPACAaALQABAYALAfQANAkADARIgOABQgMAAgNgDgAKpEIQgZgHgLACQACgsgJgsQAMgCAPAGQAOAGANgDQgFAYAKAVQAOAdABAHQgHAHgLAAQgGAAgHgCgAB5DLQAAgcgFgHIACgBQABACAEAAQAGABAGgKIADAAQACACAAADIgCAlQADAMAOAZIgYABQgLAAABglgAkDDbQgPgFgGgJQgBgBAKgBQAKgBAJABQASACADAJIgBAAIgDABIAAAEIABAGIgZgGgAkKDAQgJgNAYAPQAMAHgDAAQgDAAgVgJgAkRCyQgTgVATg1QAIgXgBgHQgCgMgSACQgGgNAVAKQAYALABgIQgBAMAGAsQAHApgFARgAJVCXQARgRA8ABQArABAqAJQgGAcguAAQgnAAhHgWgAH6CjIg1gHQgggDgTAFIAAgNQATgRBAABQAsABAwAIQgIAbgpAAIgWgCgAEACbQgjgCgcgFQgBgDgGAAIgGAAIgGgCIgBABQgQgEgNgEIADADIAAAEIAAADIgWACIgBAAQADgEAAgGQAAgJgJgHQADgCABgCIAMAKQAXgVA1AEQA3AEAWAXQAGgWAtAAQAsgBgBAeQggALg2AAIgngBgABoCUIgEAAIgIgIIgEgMQAAgCAFgGIADgFIAJAFQAQALAAAGQACALgTAAIAAAAgAl5CQQgOgDADgRQAOgDANAKQAAANgMAAIgEAAgAAdCFIgCgBIAAAAQhKgNgTAAIgBAAIABgFQAAgHgBgEIgCgEQACgHADgBIAPgBIAGgDQBkAPAGAAIAMAAQACADADACIAAAKQgCAGAAAFIACALIAAACIAAABIgzgJgAJcB8QAVgngOgcIAvAAIAAAAQgDARAGAVQAFAVgCAPIgOABQgYAAgWgIgAlpB8QACgGgIAAQAngmAVgQQALAHAKgBQgFAHgdATQgXAQgEATQgHgHgHAAgAFrBwQgQgFAAgQQAOgMAQALQAPALACARQgWgDgJgDgAjoBhIAAghQAagBAuAMQAsALAhgCQABAHgGAJQgGAHADALQhggMgtgJgAkRAyQAegcBPggQhEA8gnAAIgCAAgAJzAmQgWgBgIgHIgBgMQAAgLADgMIAFggIApAAQgEAUAGARIALAeQgIAIgWAAIgBAAgAorhLQgpg6gIg0IABAAIAKAOIARAgIAAAAIABABIACAEIABADQAVAuAJAPQAJAQAdAgQAVAcgMARQgLgcgxhGgAiagXQgHgJgKACQANgFANgLIAWgUQAcgYAnAGQgJAWgaASQggASgPAKIgEAAQgHAAgFgHgAqChsIANgvQAGgZgBgMQAMARgKA+QgPBYAAAJQgWgcARhAgAgUg5IgQgiQgcADgsgGQgsgFgaACIAAgpIBlALQA2AEAngIIgBAEQgFABAAACQAAAAABABQAAAAAAAAQAAABABAAQAAAAABAAQgFAGgJADQgUAFgJAEQANAIAHAVIANAtQgNgIgKgTgAKigrQgWAAgHgHQgDggAXABIAZAEQARACALgCQAEAKgFAIQgGAIABAIIghAAIgFAAgAIrg0Qg1gFAAgbQAEABBCgCQArgDADAYQgJAOggAAIgWgCgAFBhUQABgHgGgJIgDgGIALABIADAAIAAABQACAAATgBQAOgBgBAJQgOgEgIAJQgIAIgIAAIgCAAgAJ+hbQAZghAIgVQASAJgBAOIgKAfgAJIh1QgQgUACgIQANgJAVACQAEAIAKA1QgQgFgSgVgAB8hxIADgCIAIgGIADADQABgFAIgDIAKgEQgIAHAAALQAAAKgLAFQgFgJgJgHgAjNh2QgGgBgBAIQgJgBAJgPQAIgOAMADQAHAHABAOQgBANgHAHQgNgFAAgQgAK3iKQgFgGgFgBQADgOALAEQAGACANAIQAAAEgHADQgGACAAAFQgEgBgGgGgAgkiKQAUgaAHgFQAPgKAfAHQgMAVgTALQgLAHgMAAQgKAAgJgFgAhKinQgQgMgHgGQAJgIAPAGQANAEALAMQAKAMgCAJQgDALgUABQACgSgMgLgAAUixQgSgCAHgNQAJAIATgBQACAJgOAAIgFgBgAqEjaQgFgTgIgCQALgNAIASQAIARAAASQgLgBgDgSgApkjrIACgEQARgoAVgkIAZgpIAVgcIAPgTQBKhaBog5QgCAXgXASQgVARgPgDQgOAcgpAmQgZAYgVAMQgPAJgMADIACADIACAGQgDAQgLANIgUAdQgRAZgMAYQgMAZgSAVQgHAIgGAGIAMgegAn9mRQACAIAMgBQgCgHgJAAIgDAAgAq0kwQgUgwAOgQQAHASAKAjQALAgATAYIgDAAQgTAAgTgtgArjnTIgCgIQgThDgFgwQAEgBABgDIAIACIAFADQgFARAHAcQAMA0gFAQIAcA8QAQAqgYAGQAAgbgVhIg");
	this.shape_85.setTransform(266,-33.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],165.1,-268.1,184.6,184.7).s().p("EgkZAWrMAAAglUQF2gOgLgSQgNgWABgUQAWAHAUAZIAgAqQgBgvAhgiQAdgfAigCQgGAPgdAoQgXAkARAQQASgfAwgTQAwgSApAHQgKAHgzATQgoAPgNAUQAQAAAxgIQAsgDAMASQgJAFgrABQgkAAgGAOQAIAAAUgFQARgEAQADQARAXATAEQAmAHANAGIABgMQABgGADgBIADAAQAJAQAlAKQAIgJAEgDQAHgDAIAIQAAgGAFgMQAFgLgDgLQANAMAKgQQALgTANACQAEAPgTAMQgPAKAKALQAGAAAZgJQASgGAFAIQABAIgKADQgLADAAAGQATgGAFAQQAHAWACACQALgVANAQQATAYAFABIAAgRQABgIAFgCQAMAMAPABQAIABATgFQAkgIASAaQABgFgBgdQgBgWAIgFQAJAHAHATQAIAXADAFQAjggANATQgdAEgFAQQAhABApATQgPAFgFAAQgGAAgOgFQAHANAOAPQAGANgVANQATgCAngNQAggFAFAiQAXgIAiAMQAeAKAbgOIAFATQADALAGADIgBgzQgBggAQgEQAHAJALAjQAMAcAQgLQgFgCgEgNQgFgOAIACIAKARQAFALgCAMQAKgDAUgJQARgEAHAQQABgCgBgTQgBgNAIAAQACAcAkAIQApALAJAVQAtgVAJgGQAVAcAZAHQARAFAcgGQAngHAKgBQAegBAaAPQgLAzhGAYQALAUAEAFQAKANAQACQARgDAUgeQASgbAZgBQgGBFAGA1IgWACIARADIAHABIADAJQAAAOgGAiQAAANAIAAQgMABgDADIAAAGIAAAGQABAFAEAAIABAAQAAAQALAiQAAAEgGARQgHAWAAAVQAAAFAKAAIAKgBIAAAAIAIgCQA1AAAAgGIgDgCQACgCAAgGQAAghgIgbIgBgEIABgDQAbAPAuAEIAIAqIAEAvQABAdAIAAQAKAAAngcQAogbAAgGIgEgGQAAgEAIgGQAIgGAAgJIgEgUQAGAHAOANQAbAZAQAAQAFAAAAgGIgLgfIAjABQACABAsABIADAMIAEANIgFAcQAAAKADARQgRABAAAFQAAAFAjAAIAfAAQAKgDAAgZQABglgFgSIAAgSIABACIgBAEQAAAFAKAKQAeAbANgKQASgNAfAKIAaAQQATANAQAAIAGgBIABAHQAAAHgFANQAAAPALAXIgCAeQADAbAiAAQAPAAADgOIAAgSIgFg1IAAgFIgBgHIAEgQQAIAFASAGQAaAJAFgBIA3ABIgZgKIB8AEQAEAAAKAFQAGAEAXAAIAAABIAKADIgDArIAAAIQAIAIAkAAIATgBQACAFABAAQAFAAACgIQAEgBACgCQABgBAAgKQAAgIgHgGIAAgBQgCgKgFgEQgEgCgCgGIgBgEQAGAEAMACQBPAQBagFQBKgEAIAFQASAKC8ARQAbAFDOAVQDoAXBQAAIBGAAIABgBIAFADQC1AQCUAEIDbAMIB2AHIAJABIAJABIATABIAAACIAAYSgAWRR/QADACACgFQAAgGgGAAQgHAAgBAGIABAAQADAAAFADgA72MdQAGAUAAgUQAAgKgCAAQgBAAgDAKgA5sMAIgDAIQAGAVAAgVIAAgGIgCgDIgBABgAhMjaIACA7IgEAbQACAUAcAAQAXAAAFgNIACgEIgBgCIAAgCIgCgFQgDgJgBgFIAAgBQADgSAAgJIABgNQAFgFAAgDQADgFgHgBQAAgUgeAAIAAAAQgVAAgFAJgAnJkaQgJADgEAKQgEALABAPIAEAiQAAAEgEALQAAAEADACIAAAOQAIAIAzAAQAFAAAAgIIgDgRQAGg8AAgQQgCgOgQAAIgLAAQgJgDgHAAIgJACgAidmKQAAgIgXgLQgcgOgnAAQgyAAgLAEIgEAIIAAAAQgWgQgLAFQgKALgHABQgQABgOgIQgNgHgMgCIABgIIAFgxIABgGQAAgEgCgCQABhAgIgrQAYAEA2AGIAzAGIAPATIAPAQQAEAHADAOQADAKANAAIgBAiQAHAfAmAAIAagDQgCAIANAUQAPAVAQAAQAGAAACgCIABABQADARAEAEQABACAKAAQAIgBABADIgCADQghgFghgDgAkcorIADgCIgDgCIAAAEgAm6zFQgDgegHgKQgNAygOARQAIgWgTgfQgSgeABgEQgKgCgMAGQgMAFgMgCQgEgPAUAAQAWABACgHQgRgagyAIIhLASQAJg5BqADQgMgVglgMIg0gOQAggQApAHQApAGAUAYQABgQgLgVQgKgVAAgRQAeAIANAKQASAQAAAbQAWgVAdgKQAhgLAfAIIggATQgTALgKALQA4ARAKAFQAiAQAIAdQgRgEgYgMQgbgOgNgEQARAZAMAiQASAzgNAgQgOgKgNgiQgNgigOgKQAGAegEAeQgGApgXAOQgHgKgDgfgAwc0aQAGgdAUAAQgQgLgWAPQgTAMgLASQgDgTAagWQAYgTAbgIQABgGgGgMQgEgLADgMQAVARAUgYQAbggAUgBQAGAFgOAQQgSATgBAHQAOgRAogDQAmgDAdAKQgTAPg+gCQAHAKAgAGQAjAIAOAKQgPARg8gRQAJAMAXAKQAdAOAHAEQgMAIgbgKQgigNgPACQADAKAQAFQASAGAEAGQgFANgMgIQgNgLgEgBIgDAEQgGgDgMAAQgMAAAAAGIABAAIgBACIAAAAIgKAHQgIAGgKgBQAKgRAEgLQgfAAgRAYQgKANgQAfQgNgQAHgdg");
	this.shape_86.setTransform(284.6,38.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],-3.5,71.5,-3.5,-77).s().p("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");
	this.shape_87.setTransform(284.7,-71.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("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OAKQAgAWAFAkQgdgGgggOIALA8QAJAxgUATQgNgGgIgRIgNgfIgUAyQgPAZgZAGIAAg2QgMAHgOASQgQAXgGAGQgJgHAIggQAHgggMgKQhYA3hDBCIgjAlIgLAaQgaAQgQAdIgZAsQgNAZgCAaIAFAfIA0BVQAgAmAMATQAWAjAFAiQAJgGAcgHQAagHAKgHQAQANAbACIA7AFQAEgDAAgGQAAgGAJgFQAuAMAmgrIAfgiQATgRAWgFQgNgKgkABQgjAAgSgSQgDgWARggQAgAXBtgDQgHgdgugZQAJgVAzABQAAAhAcAOQAXgWARgGIAGgBQAVgEAbANQgNAQgRAeIgHALQALgBAXgBIABAAIADAAIADABQASgHAWAJIAOAHIASgMIACABIACgBIABAAQAEgDAIgDIAjgNQAFAHAJAGQAPAJAaAEIBKAIIgBADIABAAIAJgBIASABIAUgOIAEgCQAYgNAgAFQANAnAzAEQAKABAoAAQAhAAAVAEQABgPgYgSQgTgPAIgNQAHgHAUgBIAiABQgCAPAEARQAFAVAAAIQARgKAPgXIAWgpQADACAYAIQARAFADALQgCALgPAMQgPAMgBANQgBAIANgBQATgBACABQAEAugSANIgbgFQgUgDgNAIQANAlAIA8QADAbADAfQAegCA5ACIA3ADQBQAGA4gHIAAAEIgBAAIACAAIAAAAQArgID6AAIAhgCQASAAAKACQLsgPD1AAIDVAMIjVAAIhyAFQivATk0gDImAgDIgDACQgCABg5AAIhDABQiHAAhpgEIAAABIi1AAQACAjgXAHQgLADgrgFQgBAVAOAfQAMAdgFAcQALABAYgCQATABABANQALAhgbADQgLABgCABQgDACALAHQgKADgKgGQgKgGgLACQAFAvBMgMIABAAIAAABIgDAGIgBADQgEgEgGAAQgEAFgLAVQgGANgIAGIgFAAQABgKAKgLQALgMgCgMQgDABgYgCQgSgBgCAJQAGAEgEAXIgCASIgEABIgBADQAFABABALIgBAFIADgBQANAAAOALQAlAQApgGQA3gHAbADQCaAQgJgCQAoAFB2AKIA3AFQAmAEAMAEQAGABDZASQAUACAogBQAVgBAjAMQAWAHAqgLIAUgGQAtgOAXAfIACAEIEsAYIEKAWIhAgBIAyADIjbgMgAiuHvIgNABIA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");
	this.shape_88.setTransform(319.8,-39.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FAFFFF").s().p("AlnHRIAJAAIAAAAIgJABgAmHHLIADgDQABADAEACIgBABIgHgDgAUjGIQARgNgOAPIgIAHQgBAAAGgJgAK2GBIAAgOIAVAAIAAAOgApwF3IACgCIABAAIAAACIgDAAgAu3EDIAAgBIABABIgBAAgAo8C8IAFACIgFABIAAgDgADsCuIABgEIAAAEIgBAAIAAAAgAq4A1IABABIgBABIAAgCgAohgyQgGgDgCAAQABgGAGAAQAGABAAAFQAAABgBABQAAABgBAAQAAABAAAAQgBAAAAAAIgCgBgAmHg9IACAAIgCABgAmWhGIABgDIAAADIgBAAgA0riMIAAgBIAAABgA0HjwIgBAEIgEADgABCk8QgvAEgngmQgZAPgngCQgmgCgUgSQA0gcA7gJQBHgMAhAdQAHgFANgQQALgPAKgEQAVADAhARQATgqAzAFQANABAjAIIAPACQAAABgBAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAFALABQAOABAFADIAQAMIgBANQBFgoAaAoQAOgFAXgTQAKgKAKgFQALgBAKgDQANAOAXABQALAAAngHQAggGAPAEQAXAHAIAeQARACAfgGIA1gMQBDgMAdAjQAQgKAWgEQAbgEAPALQgSAGgSAWQgVAbgKAGQgegDg6gfQgFAEgFANQgFANgFAEQhWAHgqgpQgFAEgFANQgFANgFAEQghAGgWgMIghgcIgvALQgcAGgbgDQgFgEgFgNQgFgNgFgEQgGAig1ALQg1AKgXgcQgEAEgKAWQgJARgLAEIgDADQgGgCgLgJIgFgEQgHgOgIgBQgiAbgjAPQgYAKgRAAQghAAgGgmgAPtmoQAWgfA0gIQAygHAfATQgyAPgRAEQgnAIgtAAIgEAAg");
	this.shape_89.setTransform(337.9,-37.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3A3839").s().p("AYzRwQgFgEgDAAQABgGAGABQAGAAAAAFQgBAEgCAAIgCAAgA5UMNQAGgUAAAUQAAAKgBAAQgCAAgDgKgA3NL5IAEgJQACgDAAAFIABAHQAAAKgCAAQgCAAgDgKgAdojFQgNgGAWgBIAgABIA2gNQAdgKAEgYQAFAAACAHIAAANQgOAFgGAPIg1ALQgVADgTAAIgWgBgEAhJgDbQAmgRAHgOQAIATghAPIg4ATQABgHAjgPgAZ4j2QA0gSANgHQgQATgjALIhAASQAGgJAsgOgAWTjxQAYgOAvgXQgfAegjAMgAIxkkIgCgCIAEgFQARgRAAgJQAJAIgMAPIgIAKIgIAAgAJElgQALAJgOANIgYATIgCABQgDAAAggqgAIGlDQAWgQANgNQgCAQgYATIgJgGgAfHl0QgCgiAqAHQAEATgNAGQgGADgNAAIgMgBgAfbmBQgMAQAOgOQAIgIgBAAIgJAGgAV4l9QgJAAgFgIQgHgJAEgOIAiAAQAEAOgGAJQgFAIgKAAIAAAAgAVumIIAUAAIAAgOIgUAAgAb8mWQAGgUAAAUQAAAKgBAAQgCAAgDgKgEAgzgGjQAJgKAOAGQAOAGgEASIgHAAQgdAAADgUgAXwmRQgEgEACgOQALABABAGQACAFgEAFQgDACgCAAIgDgBgAeKmWQgBgEAFgJQACgGgGgBQABgGAJAAIARgBQAEAcgYAAIgHgBgAdbmjQAGgUAAAUQAAAKgCAAQgBAAgDgKgAUkm4IAUAAQACANgGALIgDAEQgQgDADgZgAWJm4QAMgCABAQQgGgBAAAIQgFgBgCgUgAfSmpQgagEAIgRQAIgJAOADQAOACAEAKQADAQgRAAIgIgBgAMDnNQgEgLAJgIQAQACgDAZIgFAAQgLAAgCgIgANFnTIAEAAIgFALIABgLgAG2rBQgBgMABgNQAFgOACAQQABAOgBALQgDAHgBAAQgCAAgBgJgABrsJQgEgNAUAUQAJAIgBAAQgDAAgVgPgA3yuQQgUgEgRgXQgPgCgRAEQgVAFgIAAQAHgPAkAAQAqAAAKgGQgMgSgsAEQgxAHgRABQAOgUAogPQAzgUAKgGQgqgIgvATQgwASgSAgQgRgRAWgkQAdgoAGgPQghACgdAfQghAjABAuIgggpQgUgagWgHQgBAVANAVQAKASl2AOQFbgrgIglQA0AFAWAxQAegwASgTQAfggAqgKQgDAagRAaIgbArQASgCA6gaQA6gWAqAQQgTAPggANIg6AUQAKAHArAAQAoAAAJANQADANgQABQgTABgCAFQATAWApgCQAKAAAJABQgDABgBAGIgBANQgOgGglgIgAoVxvQAMgBACAIIgDAAQgJAAgCgHg");
	this.shape_90.setTransform(268.4,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.1,-123.4,469.7,308.4);


(lib.PresentParticipleLesson2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.PresentPartDef2();
	this.instance.parent = this;
	this.instance.setTransform(205.2,121.8,0.691,0.691,0,0,0,233.9,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({regX:233.8,regY:54.3,scaleX:0.54,scaleY:0.54,x:205.1,y:0.8},9).wait(253));

	// Layer 1
	this.instance_1 = new lib.WhiteSheet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(206.3,99.8,1,0.217,0,0,0,206.3,103.5);
	this.instance_1.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({scaleY:0.1,y:-18.3,alpha:0.871},9).wait(253));

	// Layer 6
	this.instance_2 = new lib.HammeringTwiggs();
	this.instance_2.parent = this;
	this.instance_2.setTransform(200.3,225.9,1,1,0,0,0,160.4,13.9);

	this.instance_3 = new lib.WatchingtheGirls();
	this.instance_3.parent = this;
	this.instance_3.setTransform(204,226,0.963,0.963,0,0,0,194.8,13.9);

	this.instance_4 = new lib.MickHanding();
	this.instance_4.parent = this;
	this.instance_4.setTransform(200.6,229.1,0.922,0.922,0,0,0,206.1,13.9);

	this.instance_5 = new lib.Bringinganotherskateboard();
	this.instance_5.parent = this;
	this.instance_5.setTransform(202.1,227.5,0.916,0.916,0,0,0,212.8,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},57).to({state:[]},55).to({state:[{t:this.instance_3}]},5).to({state:[]},45).to({state:[{t:this.instance_4}]},5).to({state:[]},54).to({state:[{t:this.instance_5}]},5).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,77.3,412.6,45);


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
(lib.pre_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:276});

	// timeline functions:
	this.frame_0 = function() {
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
		
		 window.open ("pre_Scene6a.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pre_Scene3A.html","_self");
		}
	}
	this.frame_4 = function() {
		playSound("theingforoftheverbanbeanadjective");
	}
	this.frame_69 = function() {
		playSound("hammeringtwiggs");
	}
	this.frame_119 = function() {
		playSound("watchingthegirlswork");
	}
	this.frame_169 = function() {
		playSound("mickhandingtwiggs");
	}
	this.frame_230 = function() {
		playSound("bringinganotherskate");
	}
	this.frame_284 = function() {
		this.gotoAndPlay("scene4_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(50).call(this.frame_119).wait(50).call(this.frame_169).wait(61).call(this.frame_230).wait(54).call(this.frame_284).wait(1));

	// content
	this.instance = new lib.PresentParticipleLesson2();
	this.instance.parent = this;
	this.instance.setTransform(276.3,190.4,1.122,1.122,0,0,0,206.3,103.5);

	this.instance_1 = new lib.CouchKidsNailing();
	this.instance_1.parent = this;
	this.instance_1.setTransform(296.3,373.3,1,1,0,0,0,303.8,210.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(285));

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
	this.shape_6.graphics.f("#9900FF").s().p("AgkBAQgHgIgBgaIABgMIABgNIgCgFIACgDIACgkIgBgJIgBgJQAAgKAJAAQADAAACACIATgDIAQgBQAUgBAMAFQAGADgBAFQAAAEgCACQgCADgEAAIgCAAQgOgEgNgBIgOACIgRADIABAJIgCAgIAkgEIATgBQADgBADADQADADAAADQAAAHgIABIgTABIgmAEIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAFAAQAIAAABAJQgBAGgGACQgJACgZgBQgZAAgIgGg");
	this.shape_6.setTransform(436.4,28.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9900FF").s().p("AgOA8QgKgZgMguIgHgXQgFgRAAgGQAAgDADgCQACgDADAAQAHAAABAHIADAPIAIAcQAJAeAHAWIAAgBIAWg7IAHgVQAFgNAFgFQADgEADAAQAEAAADACQACADAAADIgCAGQgEAHgEAJIgHASIgVA7IgJAVQgCAFgFAAQgHAAgCgHg");
	this.shape_7.setTransform(425.9,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9900FF").s().p("AgjA9QgDgDAAgDQAAgDADgDQACgDADABIASgCIABgPIgBgPIAAgNQAAgSACgeIgLABIgLAAQgDAAgCgCQgDgCAAgEQAAgIAIgBIAZAAQAQAAAZADQAHABAAAIQAAAEgDACQgDACgDAAIgNgBIgOgBIgBAtIAAAOIAAAOIAAAOIAaAAQADAAADADQACACAAADQAAAEgCADQgDACgDAAIgOAAIgOAAIgPACIgRACQgDAAgCgDg");
	this.shape_8.setTransform(415.2,28.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9900FF").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAOAAIAOAAIATABIATABQAEAAADACQACADAAADQAAAEgCADQgDACgEAAIgTgBIgTgBIgFAAIACAlIACAlIABAIIAAAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_9.setTransform(405.5,28.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9900FF").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_10.setTransform(394.1,28.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9900FF").s().p("AgjBAQgJgIABgaIAAgMIABgNIgBgFIABgDIACgkIgBgJIgBgJQAAgKAJAAQADAAADACIATgDIAPgBQAUgBAMAFQAFADABAFQAAAEgCACQgDADgDAAIgDAAQgOgEgNgBIgOACIgSADIABAJIgBAgIAkgEIATgBQADgBADADQADADgBADQAAAHgHABIgUABIglAEIAAALIgBAKQAAASADADQACADALAAIAOgBIAQAAIAFgBIAEAAQAKAAgBAJQABAGgIACQgHACgagBQgZAAgHgGg");
	this.shape_11.setTransform(383.7,28.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9900FF").s().p("AghA6QgQgMAAgPQAAgKAIAAQAJAAAAAKQAAAGAKAHQAJAHAIAAQAGAAADgqQABgTAAgdIAAgJIgFAAIgJAAIgKgBQgEAAgCgCQgDgDAAgDQAAgJAMAAIAIAAIAIAAIAPAAIAQgBQATAAAAAKQAAADgCADQgDACgDABIgFgBIgGAAIgKAAIABAKQAAA8gIAdQgGASgNAAQgOAAgOgKg");
	this.shape_12.setTransform(372.6,28.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9900FF").s().p("AgZBDQgJgDgFgDIgBAAQgDAAgDgDQgCgCAAgEIABgZIABgbIgBgcIAAgdQgBgDAEgEQADgDAEAAQACAAALAFIAPAHQAWAIARAQQATAUABAXQAAAOgHANQgGANgMAIQgNAIgXAAIgOgBgAgegWIAAAXIgBAtIACABQAGAFAMAAQASAAAJgGQAHgFAFgKQAFgJAAgKQAAgWgagRQgHgFgegOg");
	this.shape_13.setTransform(361.1,28.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9900FF").s().p("AAdArIgFgaIgXAEIgUAEIgPAhQgDAEgEAAQgEAAgCgCQgDgDAAgEQAAgDANgbQgBgCAAgDQAAgHAIgCQAJgQAOgXQATgfAFgBQAHABACAIIAFAcIANA5IAEANIADAJQAAADgDADQgCADgDgBQgJABgFgUgAgKAGIAdgGIgGgfg");
	this.shape_14.setTransform(348.4,28.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgBACQgDACgEAAQgDAAgCgCQgDgCAAgEIAAgIIgBgHIABgXIACgXIAAgIIgBgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_15.setTransform(332.9,30.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAaArIgFgGIgOAGQgGACgDAAQgTAAgJgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQALAFAAAHIgBAEIgBAKIgBASQAAAKABAGIAGAOIACAFIAAABQAAADgCADQgDACgDAAQgBAAgFgDgAgNgUQgJALAAAMQAAAOAEAGQAFAIAKgBQAHAAAFgCIAJgHQgDgVAAgKIAAgIIACgJIgFgDIgEgBQgLAAgKALg");
	this.shape_16.setTransform(323.9,30.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWAuQgNgEAAgIQAAgEADgCQACgDADAAQADAAAEAEQACACAHABIAJABQAHAAAFgCQAHgCAAgFQAAgMgPgDIgIgCQgLgDgFgDQgHgDAAgKQAAgRARgHQAFgDAKgDQALgDAFgDQADgBAEAAQADAAADADQACACAAADIABAHIABAIQAAAEgCACQgDACgDAAQgEAAgCgDIgCgJIgTAGQgNAFAAAIIAFACQASACAJAHQANAHAAARQAAANgLAIQgJAFgPAAQgLAAgJgEg");
	this.shape_17.setTransform(310.1,30);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAbArIgGgGIgOAGQgGACgDAAQgTAAgKgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAASQAAAKABAGIAFAOIACAFIABABQAAADgCADQgDACgDAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAGQAEAIAKgBQAHAAAGgCIAIgHQgDgVAAgKIABgIIABgJIgGgDIgDgBQgMAAgJALg");
	this.shape_18.setTransform(301.8,30.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF00FF").s().p("AgjBAQgJgIABgaIAAgMIABgNIgBgFIABgDIACgkIgBgJIgBgJQAAgKAJAAQADAAADACIATgDIAPgBQAUgBAMAFQAGADAAAFQAAAEgDACQgCADgDAAIgDAAQgOgEgNgBIgOACIgRADIABAJIgCAgIAkgEIATgBQAEgBACADQACADAAADQAAAHgHABIgUABIglAEIAAALIgBAKQAAASADADQACADALAAIAOgBIAQAAIAFgBIAFAAQAJAAAAAJQAAAGgIACQgHACgagBQgZAAgHgGg");
	this.shape_19.setTransform(287.3,28.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF00FF").s().p("AgjBBQgFgDAAgJIABgcQACglAAguQAAgEADgCQACgDAEAAQADAAADADQACACAAAEQAAAvgCAlIgBANIAAAMQAVAAAggKIADgBQADAAADADQACADAAADQAAAFgFADQgKAEgUAEQgSADgLAAQgJAAgDgDg");
	this.shape_20.setTransform(277.3,28.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF00FF").s().p("AgjBAQgCgCAAgEIAAgYIACgiIACgiIAAgLIABgMQACgHAGABIAHgCIANAAQANAAAOAKQAPAMAAAQQgBAUgPAMQgOALgTAAIgKgCIAAAsQAAAEgCACQgDACgDAAQgDAAgDgCgAgSgxIAAAQIgCAhIAJAAQANAAAKgGQAKgIAAgNQAAgKgJgGQgKgGgJAAIgHAAIgFAAg");
	this.shape_21.setTransform(268.1,28.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF00FF").s().p("AgkA9QgCgDAAgDQAAgDACgDQADgDAEABIARgCIABgPIAAgPIgBgNQAAgSACgeIgKABIgLAAQgEAAgCgCQgDgCAAgEQAAgIAIgBIAZAAQAPAAAaADQAHABAAAIQAAAEgDACQgCACgDAAIgOgBIgNgBIgCAtIAAAOIABAOIgBAOIAaAAQADAAADADQACACAAADQAAAEgCADQgDACgDAAIgOAAIgOAAIgPACIgQACQgEAAgDgDg");
	this.shape_22.setTransform(258.9,28.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF00FF").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_23.setTransform(249.3,28.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF00FF").s().p("AgjA9QgDgDAAgDQAAgDADgDQACgDAEABIARgCIABgPIAAgPIgBgNQAAgSACgeIgKABIgMAAQgDAAgCgCQgDgCAAgEQAAgIAIgBIAZAAQAQAAAZADQAHABAAAIQAAAEgDACQgDACgCAAIgOgBIgNgBIgCAtIAAAOIAAAOIAAAOIAaAAQADAAADADQACACAAADQAAAEgCADQgDACgDAAIgOAAIgOAAIgPACIgQACQgEAAgCgDg");
	this.shape_24.setTransform(239.4,28.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF00FF").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAPAAIANAAIATABIATABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgTgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_25.setTransform(229.7,28.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF00FF").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_26.setTransform(218,28.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF00FF").s().p("AAdArIgFgaIgXAEIgUAEIgPAhQgDAEgEAAQgEAAgCgCQgDgDAAgEQAAgDANgbQgBgCAAgDQAAgHAIgCQAJgQAOgXQATgfAFgBQAHABACAIIAFAcIANA5IAEANIADAJQAAADgDADQgCADgDgBQgJABgFgUgAgKAGIAdgGIgGgfg");
	this.shape_27.setTransform(206.2,28.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF00FF").s().p("AgiBAQgDgCAAgEIAAgYIACgiIACgiIAAgLIABgMQACgHAGABIAIgCIAMAAQAOAAANAKQAPAMAAAQQAAAUgQAMQgOALgTAAIgKgCIgBAsQAAAEgBACQgDACgDAAQgEAAgBgCgAgSgxIAAAQIgCAhIAJAAQANAAAKgGQAKgIAAgNQAAgKgJgGQgKgGgJAAIgHAAIgFAAg");
	this.shape_28.setTransform(195.8,28.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF00FF").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAPAAIANAAIATABIATABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgTgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_29.setTransform(181.1,28.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF00FF").s().p("Ag3BAQgCgCAAgDIAAgLIABgLIAAgPIAAgPIAAgQIAAgRIgBgPIgBgPQAAgFADgCQAEgDAEAAQAEgBAHAKQAUAfAQAUQATAXAYAXIAAgLIAAgKQAAgjgDgWIgCgJIgCgIQAAgKAJAAQAOAAAAA2IAAAaIAAAcIgCANQgBAIgIAAQgEAAgGgFQgighgrg7IAAATIgBASIABAVIAAAUQAAAWgJABQgEgBgDgDg");
	this.shape_30.setTransform(167.9,28.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF00FF").s().p("AgkBAQgHgIgBgaIABgMIAAgNIgBgFIACgDIACgkIgBgJIgBgJQAAgKAIAAQAEAAACACIATgDIAQgBQAUgBAMAFQAGADgBAFQAAAEgCACQgCADgEAAIgCAAQgOgEgNgBIgOACIgSADIACAJIgCAgIAjgEIAUgBQADgBADADQADADAAADQAAAHgIABIgTABIgmAEIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAEAAQAJAAAAAJQAAAGgGACQgJACgYgBQgaAAgIgGg");
	this.shape_31.setTransform(156,28.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF00FF").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_32.setTransform(144.6,28.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF00FF").s().p("AgkBAQgHgIgBgaIABgMIABgNIgCgFIACgDIACgkIgBgJIgBgJQAAgKAJAAQADAAACACIATgDIAQgBQAUgBAMAFQAGADgBAFQAAAEgCACQgCADgEAAIgCAAQgOgEgNgBIgOACIgRADIABAJIgCAgIAkgEIATgBQADgBADADQADADAAADQAAAHgIABIgTABIgmAEIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAFAAQAIAAABAJQgBAGgGACQgJACgZgBQgZAAgIgGg");
	this.shape_33.setTransform(133.6,28.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_34.setTransform(122.8,28.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF00FF").s().p("AgjBAQgBgCAAgEIAAgYIABgiIABgiIAAgLIABgMQACgHAHABIAHgCIAMAAQAPAAANAKQAOAMAAAQQAAAUgPAMQgOALgSAAIgLgCIAAAsQgBAEgCACQgCACgDAAQgEAAgCgCgAgSgxIAAAQIgCAhIAKAAQAMAAAKgGQAKgIAAgNQAAgKgKgGQgJgGgKAAIgGAAIgFAAg");
	this.shape_35.setTransform(113,28.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9900FF").s().p("AgkBAQgHgIgBgaIABgMIABgNIgCgFIACgDIACgkIgBgJIgBgJQAAgKAJAAQADAAACACIATgDIAQgBQAUgBAMAFQAGADgBAFQAAAEgCACQgCADgEAAIgCAAQgOgEgNgBIgOACIgRADIABAJIgCAgIAkgEIATgBQADgBADADQADADAAADQAAAHgIABIgTABIgmAEIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAFAAQAIAAABAJQgBAGgGACQgJACgZgBQgZAAgIgGg");
	this.shape_36.setTransform(436.4,28.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9900FF").s().p("AgOA8QgKgZgMguIgHgXQgFgRAAgGQAAgDADgCQACgDADAAQAHAAABAHIADAPIAIAcQAJAeAHAWIAAgBIAWg7IAHgVQAFgNAFgFQADgEADAAQAEAAADACQACADAAADIgCAGQgEAHgEAJIgHASIgVA7IgJAVQgCAFgFAAQgHAAgCgHg");
	this.shape_37.setTransform(425.9,28.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9900FF").s().p("AgjA9QgDgDAAgDQAAgDADgDQACgDADABIASgCIABgPIgBgPIAAgNQAAgSACgeIgLABIgLAAQgDAAgCgCQgDgCAAgEQAAgIAIgBIAZAAQAQAAAZADQAHABAAAIQAAAEgDACQgDACgDAAIgNgBIgOgBIgBAtIAAAOIAAAOIAAAOIAaAAQADAAADADQACACAAADQAAAEgCADQgDACgDAAIgOAAIgOAAIgPACIgRACQgDAAgCgDg");
	this.shape_38.setTransform(415.2,28.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9900FF").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAOAAIAOAAIATABIATABQAEAAADACQACADAAADQAAAEgCADQgDACgEAAIgTgBIgTgBIgFAAIACAlIACAlIABAIIAAAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_39.setTransform(405.5,28.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9900FF").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_40.setTransform(394.1,28.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9900FF").s().p("AgjBAQgJgIABgaIAAgMIABgNIgBgFIABgDIACgkIgBgJIgBgJQAAgKAJAAQADAAADACIATgDIAPgBQAUgBAMAFQAFADABAFQAAAEgCACQgDADgDAAIgDAAQgOgEgNgBIgOACIgSADIABAJIgBAgIAkgEIATgBQADgBADADQADADgBADQAAAHgHABIgUABIglAEIAAALIgBAKQAAASADADQACADALAAIAOgBIAQAAIAFgBIAEAAQAKAAgBAJQABAGgIACQgHACgagBQgZAAgHgGg");
	this.shape_41.setTransform(383.7,28.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9900FF").s().p("AghA6QgQgMAAgPQAAgKAIAAQAJAAAAAKQAAAGAKAHQAJAHAIAAQAGAAADgqQABgTAAgdIAAgJIgFAAIgJAAIgKgBQgEAAgCgCQgDgDAAgDQAAgJAMAAIAIAAIAIAAIAPAAIAQgBQATAAAAAKQAAADgCADQgDACgDABIgFgBIgGAAIgKAAIABAKQAAA8gIAdQgGASgNAAQgOAAgOgKg");
	this.shape_42.setTransform(372.6,28.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9900FF").s().p("AgZBDQgJgDgFgDIgBAAQgDAAgDgDQgCgCAAgEIABgZIABgbIgBgcIAAgdQgBgDAEgEQADgDAEAAQACAAALAFIAPAHQAWAIARAQQATAUABAXQAAAOgHANQgGANgMAIQgNAIgXAAIgOgBgAgegWIAAAXIgBAtIACABQAGAFAMAAQASAAAJgGQAHgFAFgKQAFgJAAgKQAAgWgagRQgHgFgegOg");
	this.shape_43.setTransform(361.1,28.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9900FF").s().p("AAdArIgFgaIgXAEIgUAEIgPAhQgDAEgEAAQgEAAgCgCQgDgDAAgEQAAgDANgbQgBgCAAgDQAAgHAIgCQAJgQAOgXQATgfAFgBQAHABACAIIAFAcIANA5IAEANIADAJQAAADgDADQgCADgDgBQgJABgFgUgAgKAGIAdgGIgGgfg");
	this.shape_44.setTransform(348.4,28.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgBACQgDACgEAAQgDAAgCgCQgDgCAAgEIAAgIIgBgHIABgXIACgXIAAgIIgBgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_45.setTransform(332.9,30.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAaArIgFgGIgOAGQgGACgDAAQgTAAgJgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQALAFAAAHIgBAEIgBAKIgBASQAAAKABAGIAGAOIACAFIAAABQAAADgCADQgDACgDAAQgBAAgFgDgAgNgUQgJALAAAMQAAAOAEAGQAFAIAKgBQAHAAAFgCIAJgHQgDgVAAgKIAAgIIACgJIgFgDIgEgBQgLAAgKALg");
	this.shape_46.setTransform(323.9,30.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgWAuQgNgEAAgIQAAgEADgCQACgDADAAQADAAAEAEQACACAHABIAJABQAHAAAFgCQAHgCAAgFQAAgMgPgDIgIgCQgLgDgFgDQgHgDAAgKQAAgRARgHQAFgDAKgDQALgDAFgDQADgBAEAAQADAAADADQACACAAADIABAHIABAIQAAAEgCACQgDACgDAAQgEAAgCgDIgCgJIgTAGQgNAFAAAIIAFACQASACAJAHQANAHAAARQAAANgLAIQgJAFgPAAQgLAAgJgEg");
	this.shape_47.setTransform(310.1,30);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAbArIgGgGIgOAGQgGACgDAAQgTAAgKgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAASQAAAKABAGIAFAOIACAFIABABQAAADgCADQgDACgDAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAGQAEAIAKgBQAHAAAGgCIAIgHQgDgVAAgKIABgIIABgJIgGgDIgDgBQgMAAgJALg");
	this.shape_48.setTransform(301.8,30.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF00FF").s().p("AgjBAQgJgIABgaIAAgMIABgNIgBgFIABgDIACgkIgBgJIgBgJQAAgKAJAAQADAAADACIATgDIAPgBQAUgBAMAFQAGADAAAFQAAAEgDACQgCADgDAAIgDAAQgOgEgNgBIgOACIgRADIABAJIgCAgIAkgEIATgBQAEgBACADQACADAAADQAAAHgHABIgUABIglAEIAAALIgBAKQAAASADADQACADALAAIAOgBIAQAAIAFgBIAFAAQAJAAAAAJQAAAGgIACQgHACgagBQgZAAgHgGg");
	this.shape_49.setTransform(287.3,28.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF00FF").s().p("AgjBBQgFgDAAgJIABgcQACglAAguQAAgEADgCQACgDAEAAQADAAADADQACACAAAEQAAAvgCAlIgBANIAAAMQAVAAAggKIADgBQADAAADADQACADAAADQAAAFgFADQgKAEgUAEQgSADgLAAQgJAAgDgDg");
	this.shape_50.setTransform(277.3,28.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF00FF").s().p("AgjBAQgCgCAAgEIAAgYIACgiIACgiIAAgLIABgMQACgHAGABIAHgCIANAAQANAAAOAKQAPAMAAAQQgBAUgPAMQgOALgTAAIgKgCIAAAsQAAAEgCACQgDACgDAAQgDAAgDgCgAgSgxIAAAQIgCAhIAJAAQANAAAKgGQAKgIAAgNQAAgKgJgGQgKgGgJAAIgHAAIgFAAg");
	this.shape_51.setTransform(268.1,28.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF00FF").s().p("AgkA9QgCgDAAgDQAAgDACgDQADgDAEABIARgCIABgPIAAgPIgBgNQAAgSACgeIgKABIgLAAQgEAAgCgCQgDgCAAgEQAAgIAIgBIAZAAQAPAAAaADQAHABAAAIQAAAEgDACQgCACgDAAIgOgBIgNgBIgCAtIAAAOIABAOIgBAOIAaAAQADAAADADQACACAAADQAAAEgCADQgDACgDAAIgOAAIgOAAIgPACIgQACQgEAAgDgDg");
	this.shape_52.setTransform(258.9,28.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF00FF").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_53.setTransform(249.3,28.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF00FF").s().p("AgjA9QgDgDAAgDQAAgDADgDQACgDAEABIARgCIABgPIAAgPIgBgNQAAgSACgeIgKABIgMAAQgDAAgCgCQgDgCAAgEQAAgIAIgBIAZAAQAQAAAZADQAHABAAAIQAAAEgDACQgDACgCAAIgOgBIgNgBIgCAtIAAAOIAAAOIAAAOIAaAAQADAAADADQACACAAADQAAAEgCADQgDACgDAAIgOAAIgOAAIgPACIgQACQgEAAgCgDg");
	this.shape_54.setTransform(239.4,28.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF00FF").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAPAAIANAAIATABIATABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgTgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_55.setTransform(229.7,28.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF00FF").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_56.setTransform(218,28.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF00FF").s().p("AAdArIgFgaIgXAEIgUAEIgPAhQgDAEgEAAQgEAAgCgCQgDgDAAgEQAAgDANgbQgBgCAAgDQAAgHAIgCQAJgQAOgXQATgfAFgBQAHABACAIIAFAcIANA5IAEANIADAJQAAADgDADQgCADgDgBQgJABgFgUgAgKAGIAdgGIgGgfg");
	this.shape_57.setTransform(206.2,28.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF00FF").s().p("AgiBAQgDgCAAgEIAAgYIACgiIACgiIAAgLIABgMQACgHAGABIAIgCIAMAAQAOAAANAKQAPAMAAAQQAAAUgQAMQgOALgTAAIgKgCIgBAsQAAAEgBACQgDACgDAAQgEAAgBgCgAgSgxIAAAQIgCAhIAJAAQANAAAKgGQAKgIAAgNQAAgKgJgGQgKgGgJAAIgHAAIgFAAg");
	this.shape_58.setTransform(195.8,28.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF00FF").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAPAAIANAAIATABIATABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgTgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_59.setTransform(181.1,28.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF00FF").s().p("Ag3BAQgCgCAAgDIAAgLIABgLIAAgPIAAgPIAAgQIAAgRIgBgPIgBgPQAAgFADgCQAEgDAEAAQAEgBAHAKQAUAfAQAUQATAXAYAXIAAgLIAAgKQAAgjgDgWIgCgJIgCgIQAAgKAJAAQAOAAAAA2IAAAaIAAAcIgCANQgBAIgIAAQgEAAgGgFQgighgrg7IAAATIgBASIABAVIAAAUQAAAWgJABQgEgBgDgDg");
	this.shape_60.setTransform(167.9,28.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF00FF").s().p("AgkBAQgHgIgBgaIABgMIAAgNIgBgFIACgDIACgkIgBgJIgBgJQAAgKAIAAQAEAAACACIATgDIAQgBQAUgBAMAFQAGADgBAFQAAAEgCACQgCADgEAAIgCAAQgOgEgNgBIgOACIgSADIACAJIgCAgIAjgEIAUgBQADgBADADQADADAAADQAAAHgIABIgTABIgmAEIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAEAAQAJAAAAAJQAAAGgGACQgJACgYgBQgaAAgIgGg");
	this.shape_61.setTransform(156,28.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF00FF").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_62.setTransform(144.6,28.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF00FF").s().p("AgkBAQgHgIgBgaIABgMIABgNIgCgFIACgDIACgkIgBgJIgBgJQAAgKAJAAQADAAACACIATgDIAQgBQAUgBAMAFQAGADgBAFQAAAEgCACQgCADgEAAIgCAAQgOgEgNgBIgOACIgRADIABAJIgCAgIAkgEIATgBQADgBADADQADADAAADQAAAHgIABIgTABIgmAEIgBALIAAAKQAAASADADQACADALAAIAPgBIAPAAIAFgBIAFAAQAIAAABAJQgBAGgGACQgJACgZgBQgZAAgIgGg");
	this.shape_63.setTransform(133.6,28.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF00FF").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_64.setTransform(122.8,28.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF00FF").s().p("AgjBAQgBgCAAgEIAAgYIABgiIABgiIAAgLIABgMQACgHAHABIAHgCIAMAAQAPAAANAKQAOAMAAAQQAAAUgPAMQgOALgSAAIgLgCIAAAsQgBAEgCACQgCACgDAAQgEAAgCgCgAgSgxIAAAQIgCAhIAKAAQAMAAAKgGQAKgIAAgNQAAgKgKgGQgJgGgKAAIgGAAIgFAAg");
	this.shape_65.setTransform(113,28.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(3,1,1).p("EAhZgX2MhCxAAAMAAAAvtMBCxAAAg");
	this.shape_66.setTransform(275,193.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#00CC99","#DDFFF8"],[0,1],0.1,153.5,0.1,-153.4).s().p("EghYAX3MAAAgvtMBCxAAAMAAAAvtgAGGjAIAEACIgDgDg");
	this.shape_67.setTransform(275,193.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.instance_2},{t:this.btn_menu},{t:this.btn_goBack}]}).wait(285));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,198.2,532.5,404.8);
// library properties:
lib.properties = {
	id: '16FAB72240770048AA3537508D7770F8',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bringinganotherskate.mp3", id:"bringinganotherskate"},
		{src:"sounds/hammeringtwiggs.mp3", id:"hammeringtwiggs"},
		{src:"sounds/mickhandingtwiggs.mp3", id:"mickhandingtwiggs"},
		{src:"sounds/theingforoftheverbanbeanadjective.mp3", id:"theingforoftheverbanbeanadjective"},
		{src:"sounds/watchingthegirlswork.mp3", id:"watchingthegirlswork"}
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
an.compositions['16FAB72240770048AA3537508D7770F8'] = {
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