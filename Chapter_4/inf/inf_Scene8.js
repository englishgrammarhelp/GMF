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


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBoQgFgHAAgFQAAgGADgCQAEgEAFAAQAEAAAGAGQAFAHAAAFQAAAFgEAEQgDADgGAAQgEAAgFgGgAgJAxIAAgRIgBgQIABg4IAAg6QAAgLALAAQAMAAAAALIAACTQAAALgMAAQgLAAAAgLg");
	this.shape.setTransform(77.1,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BlQgFgFAAgGIAAgmQAAgTACgiIADg3IACgkQABgGADgCQASgGAXAAQAWAAAVAQQAZASAAAbQAAAigaASQATAJAKAKQAKAKAAAMQAAAQgRAPQgMALgNAFQgdAMguAAQgGAAgFgGgAgoA0IAAAcQAjgCAUgIQAKgEAIgHQAIgHAAgEQAAgGgRgIQgMgFgMgDIgNgDIgGABIgFAAIgPgBIgBAdgAgihOIgBAXIgCAzIAUABQATgBAMgLQAOgMAAgSQAAgNgOgKQgOgLgOAAIgUABg");
	this.shape_1.setTransform(66.3,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBSQgbgYAAgmQAAgsAbgmQAegpAsAAQArAAAVAUQAWAUAAAsQAAAsgYAlQgdAqgsAAQglAAgagWgAgugsQgVAeAAAiQAAAaATAQQASAPAbAAQAfAAAVghQASgcAAgjQAAgggOgNQgNgMggAAQgfAAgXAgg");
	this.shape_2.setTransform(46.5,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BbQgZgSAAgYQAAgRANAAQANAAAAAQQAAALAQALQAPAKANAAQAKAAAEhCQACgeAAgwIgBgOIgHAAIgPAAIgQgBQgGAAgEgDQgDgEAAgGQAAgOASAAIANABIANAAIAYgBIAZgBQAeAAAAAPQAAAGgDAEQgEAEgGAAIgIgBIgJgBIgPABIABAPQAABhgOAtQgIAegVAAQgXAAgWgRg");
	this.shape_3.setTransform(26.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBhQgEgEAAgGIABgGIAAgGIAAgTIgBgUQAAgSgDgiQgEglAAgQIgMABQgdAAgQgFQgLgCAAgLQAAgFADgEQAEgFAHABIAVACIAVABIAYAAIAXAAIAeABIAeACQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAIgegCIgegBIgJAAIADA7QADAlAAAVIABAOIABAOQAAAJgDAHQgDAIgIAAQgFAAgEgDg");
	this.shape_4.setTransform(1.6,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBFIgJgqQgNABgWAGIgiAHQgGARgQAhQgFAHgHABQgFgBgEgDQgEgEAAgGQAAgGATgqQgCgEAAgEQAAgLANgCQAPgcAXgkQAegzAIAAQAKAAAEAPIAJAtIATBaIAIAVQADAKAAAEQAAAGgEAEQgEADgFAAQgMAAgJgegAgQAJIAvgJIgKgyg");
	this.shape_5.setTransform(-18.8,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BlQgNgLAAgrIABgSIABgWQgCgDAAgDQAAgEADgDQACgmAAgSIgBgPIgBgOQAAgQANAAQAFAAAEAEQAQgEAOgCQAOgCAMAAQAgAAATAHQAJAEAAAJQAAAFgEAEQgEAFgFAAIgEgBQgXgGgUAAQgLAAgMACQgNACgOAEIABAOQAAASgDAgIA5gGIAfgCQAGAAAEADQAEAEAAAGQAAALgMACIgfADIg8AFIgBASIAAAPQAAAeAEAFQADADARAAIAYAAIAZgBIAIAAIAHgBQAOAAAAANQAAAMgLACQgMACgpAAQgpAAgLgLg");
	this.shape_6.setTransform(-36.5,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDBkQgDgEAAgGIgBgfIgBgfQAAgMACgXQADgYAAgMIgBgUIgCgUQAAgHAFgGQAFgHAJABIAfACQASACAMAHQA1AcAAApQAAAUgSAPQgPAMgWAHQApAWAVAYQADAEAAAFQAAAGgEAEQgEAEgFAAQgFAAgFgFQgrgrg1gPIABAaIABAaQAAAGgEAEQgDAEgGAAQgGAAgEgEgAgpg6IAAAQIgBAaIgDAZIAGAAIAGAAQAhAAAQgIQAHgEAHgGQAHgIAAgFQAAgSgVgQQgSgOgVgDIgUgBg");
	this.shape_7.setTransform(-53.5,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhDBaQgQgSAAglQAAghAQgkQAQgkAagWQAQgPATAAQALAAAUAIQAYAJAAAMQAAAFgEAEQgEAFgFAAQgEAAgEgDQgVgNgNAAQgKAAgKAKQgGAGgKANQgfApAAAtQAAAZAIAKQAJALAWAAQAWAAASgPQASgQAHgdQgkACgaAMIgFABQgGABgEgFQgDgEgBgFQAAgIAIgEQAbgQBGgBQAFABAFAEQADACAAAGQAAAJgHADQgJAogZAZQgaAYgjAAQggAAgRgSg");
	this.shape_8.setTransform(-71.2,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-20.8,165.4,41.6);


(lib.tumble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape.setTransform(54.6,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJBAIABggIABggIAAgfIAAggQABgJAHAAQAJAAAAAJIAAAgIgBAfIgBArIgBAVQgBAJgGAAQgJAAAAgJg");
	this.shape_1.setTransform(47.1,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaBCQgDAEgEAAQgDAAgDgCQgCgDAAgDIAAgHIAAgGIAAgcIgBgcIAAgXIAAgZQABgGACgDQACgGAGAAQAGAAAAAHIAAAFIAAADIAAATIgBAXQAIgFAGgDQAHgDAGAAQASAAAMAOQAMAOAAATQAAAUgOAOQgNAOgRAAQgOAAgLgFgAgNgDIgNAIIAAAPIAAANIAAAPIAMAFQAFABAIAAQALAAAIgJQAJgIAAgOQgBgNgGgJQgHgIgMAAQgHAAgHAEg");
	this.shape_2.setTransform(39.5,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(27,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAqQgLAGgOAAQgLAAgIgFQgIgGgCgLQgDgXAAgRQAAgMACgQQACgHAHAAQAEAAADACQACACAAAEIgBANIgBAOIABAYQABAKABAHIAGACIAFABQALAAANgEIAAgSIAAgQQAAgTACgOQABgIAHAAQAEAAADADQACACAAAEIgCAhIAAASIAAATIABAGIAAAGQAAADgCADQgDACgEAAQgGAAgCgIg");
	this.shape_4.setTransform(15.3,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBQAJAAADABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_5.setTransform(6.3,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tumble, new cjs.Rectangle(0,0,61.5,29.1), null);


(lib.to = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiAhQgLgLAAgPQAAgQAOgPQAOgOARgEQAWgDAPAPQANANgFARQgEAOgOAMQgOAOgPADIgHAAQgPAAgKgKgAABgXQgKADgJAJQgJAJAAAJQAAAIAFAFQAHAHAJAAQAKAAAIgJQAagWgOgOQgHgGgIAAIgIABg");
	this.shape.setTransform(18.9,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsAuQgCgCgBgEQAAgEACgCIAIgHIAHgHIAigkIgMgPQgEgGAFgGQADgCADgBQADABACACIAMAOIAJgIIAHgJQADgCADAAQAEAAACACQAGAGgJAKIgFAGIgDAEIgFADIAKAIIAIAJQADAEgFAFQgCADgEAAQgDAAgDgDIgDgDIgDgDIgJgHIgjAlIgCADIgEADQgJAKgGAAQgCAAgDgDg");
	this.shape_1.setTransform(13.6,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.to, new cjs.Rectangle(0,0,36.2,36.2), null);


(lib.the = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAuQgOgFgJgJQgOgOgBgQQgCgQAOgOQAQgQATgEQATgDAPAOQAKALADAKQAEAMgJAIQgGAGgMgCQgGgBgPgFIghgMQgCAJACAHQADAIAHAGQAEAFAHAEQAJAFAFgBQAGgBACACQACADAAADQABADgDADQgDADgGAAQgEAAgJgDgAAEggQgKABgOAJIAbAKQAQAGAKAAQgBgKgJgKQgHgGgJAAIgDAAg");
	this.shape.setTransform(26.6,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBBNQgDAAgDgDQgFgEAEgGQAEgHAHgKQAIgLAFgFIAGgFIAFgFQALgLgGgGQgIgHgNABQgGAAgPAEQgYAYgGACQgGACgEgDQgCgDAAgEQgBgDADgDIADgCIAKgIIAJgIIAtguIALgKIAFgGIAGgHQACgCAEgBQADABADACQAFAFgFAHIgKAMIgOANIgNANIgGAGQAMgCAJADQAJACAHAGQAKAKgCAKQgDAIgKALIgMANIgMAOIgKAOIgCADQgCACgCAAIgBAAg");
	this.shape_1.setTransform(19,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsAuQgCgCgBgEQAAgEACgCIAIgHIAHgHIAigkIgMgPQgEgGAFgGQADgCADgBQADABACACIAMAOIAJgIIAHgJQADgCADAAQAEAAACACQAGAGgJAKIgFAGIgDAEIgFADIAKAIIAIAJQADAEgFAFQgCADgEAAQgDAAgDgDIgDgDIgDgDIgJgHIgjAlIgCADIgEADQgJAKgGAAQgCAAgDgDg");
	this.shape_2.setTransform(13.6,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.the, new cjs.Rectangle(0,0,43.8,43.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA5QgFgGAFgGIALgQIAMgOIAHgGIAGgGQANgMgFgFQgHgHgOACQgNACgOAIIgHAGIgGAEIgFAGIgGAGQgDADgDAAQgDAAgDgDQgDgCAAgEQAAgDADgDIAFgFIAFgGIATgRIATgRIAFgGIAFgGQADgDADABQAEgBACADQAGAGgHAIIgIAIQAZgEALALQAKAKgFANQgDAHgLAMIgHAHIgFAFIgNAPQgGAJgGAGQgBACgDAAQgEAAgDgCg");
	this.shape.setTransform(19.4,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAhQgLgLAAgPQAAgQAOgPQAOgOARgEQAWgDAPAPQANANgFARQgEAOgOAMQgOAOgPADIgHAAQgPAAgKgKgAABgXQgKADgJAJQgJAJAAAJQAAAIAFAFQAHAHAJAAQAKAAAIgJQAagWgOgOQgHgGgIAAIgIABg");
	this.shape_1.setTransform(12.9,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,36.8,36.8), null);


(lib.sam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(30.8,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAtIgGgGIgPAHIgJACQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAMIAAASQAAALABAGIAGAPIACAFIAAACQAAADgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKAAQAIAAAGgCIAJgIQgDgWAAgMIAAgIIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_1.setTransform(19.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiA9QgRgIAAgNQAAgDADgDQACgCAEAAQAEAAADAEQAFAIADABQAIAGAOgBQANAAALgFQAPgIAAgNQAAgLgMgHQgLgFgOgBQgOAAgKgFQgNgHAAgNQAAgQASgNQARgMARAAQAJAAALADQAOAEAAAFQAAAJgIgBIgMgBIgOgCQgNAAgJAHQgKAGAAAKQAAAHANADQAFACANABQAUABALALQAKAJAAAPQAAAVgTAMQgRALgVAAQgQAAgNgGg");
	this.shape_2.setTransform(8.4,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sam, new cjs.Rectangle(0,0,39.9,29.1), null);


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


(lib.likes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgDAEAAQADABAEAEQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCACQgCADgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape.setTransform(35.7,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_1.setTransform(26.8,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXBDQgEgJgKgMIgOgVIgPALIgBAbQgBAEgCACQgDADgDAAQgJAAAAgMIABgWIABgWIAAgdIAAgfIAAgJIAAgJQAAgEACgDQADgCADAAQAEAAADACQACADAAAEIAAAJIABAKIgBAcIAAAeIAWgTIAUgUQACgDADAAQAEAAADACQACADAAAEQAAADgCADQgLAMgQAOIATAaQAOASAAAGQAAADgCADQgDACgEAAQgFAAgDgFg");
	this.shape_2.setTransform(17.5,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIBAQgCgDAAgEIAAgQIgBgQIABgUIABgTQAAgFACgCQADgDADABQADgBADADQACACAAAFIgBATIAAAUIAAAQIAAAQQAAAEgCADQgCACgEAAQgEAAgCgCgAgFgwQgDgDAAgEQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgDAAgDgDg");
	this.shape_3.setTransform(9.7,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJBAIABggIAAggIABgfIAAggQAAgJAIAAQAJAAAAAJIgBAgIAAAfIgBArIgBAVQgBAJgGAAQgJAAAAgJg");
	this.shape_4.setTransform(4.6,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.likes, new cjs.Rectangle(0,0,42.5,29.1), null);


(lib.Target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AH+D6Iv7AAIAAnzIP7AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("An9D6IAAnzIP7AAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Target, new cjs.Rectangle(-52,-26,104,52), null);


(lib.QuizB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.733)","rgba(255,255,255,0.271)"],[0,1],-256,0,256,0).s().p("Egn/AC5IAAlxMBP/AAAIAAFxg");
	this.shape.setTransform(0.1,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EAoTgYDIAAfuMhQgAAAIAA/ugEAoTAYEMhQlAAAIAAvHMBQlAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F4FF91","#FFFFFF"],[0,1],0,-62.4,0,62.4).s().p("EgoSAHkIAAvHMBQlAAAIAAPHg");
	this.shape_2.setTransform(0,105.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FDABFE","#FEE4AB"],[0,1],0,-100.2,0.1,100.2).s().p("EgoQAP4IAA/vMBQhAAAIAAfvg");
	this.shape_3.setTransform(0.3,-52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.3,-155.5,518.8,311.1);


(lib.Directions2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6600CC").s().p("AgGBQQgEgFAAgEQAAgEADgCQADgDAEAAQADAAAEAFQAEAFAAAEQAAAEgDADQgDADgEAAQgDAAgEgGgAgHAlIAAgMIAAgNIAAgrIAAgtQAAgJAJAAQAJAAAAAJIAABxQAAAKgJAAQgJAAAAgKg");
	this.shape.setTransform(-17.6,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6600CC").s().p("AgjBPQgNgCAAgIQAAgKAJAAIAMACQAJACAKAAQATAAAIgTQAFgMAAgbQgGALgHAFQgIAFgJAAQgSAAgMgMQgMgNAAgUQAAgbAQgRQARgSAbAAQAKAAAGADQAGACAEAFQALAAAAANQAAAHgCAMIgDATIgCAiQgBAVgEANQgEAQgKAIQgNAKgWgBQgOAAgJgCgAgSgyQgKALAAATQAAAPAGAHQAGAHALAAQAJAAAKgLQAJgLABgKIAFgjQgEgDgFgCQgEgBgFAAQgTAAgKAOg");
	this.shape_1.setTransform(-25.6,6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6600CC").s().p("AAZAyIgDgXIgBgWIAAgJIABgKQAAgWgJAAQgLAAgKAOQgJAMgFASIgBAKIgBAKIABAKIAAAJQAAAEgCADQgDADgFAAQgEAAgDgDQgDgDAAgEIAAgJIgBgKIACgcIABgdIAAgKIgBgKQAAgEADgDQADgDAEAAQAKAAABAOIAAAMQARgXARAAQARAAAGAOQAFAKAAATIAAAKIAAAIQAAAJACAOQACANAAAIQAAAFgCADQgDADgFAAQgJAAgBgKg");
	this.shape_2.setTransform(-36.3,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6600CC").s().p("AgJBKQgDgCAAgFIAAgSIgBgTIABgYIABgXQAAgFADgCQADgEAEAAQAEAAACAEQADACAAAFIgBAXIgBAYIABATIAAASQAAAFgDACQgDADgDAAQgFAAgCgDgAgGg4QgEgEAAgEQAAgFAEgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDAEgFAAQgEAAgEgEg");
	this.shape_3.setTransform(-44.7,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6600CC").s().p("AgFA9QgDgDAAgFQAAgMgCgYQgDgYAAgMQAAgLgDgGQgHADgIAIIgMANIgFAHIgBARIgBARIABAJIABAIQAAAEgDADQgEADgEAAQgLAAAAgaIABgTIABgRIgBgQIgBgRQAAgXAKAAQAEAAAEADQADAEAAAEIAAAGIgBAGIAAALQAGgLAKgJQAKgJAIAAQAQAAAFAQQAFgHAIgEQAIgEAKAAQARAAAGATQACAEADAZIAHA5QAAAFgDACQgDADgEAAQgJAAgBgJIgEgfIgDgfIgEgOQgDgJgEAAQgEAAgLAGQgJAGgDAEQgBAJABAKIADAaQACARAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_4.setTransform(-55.9,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6600CC").s().p("AgFA9QgDgDAAgFQAAgMgCgYQgDgYAAgMQAAgLgDgGQgHADgIAIIgMANIgFAHIgBARIgBARIABAJIABAIQAAAEgDADQgEADgEAAQgLAAAAgaIABgTIABgRIgBgQIgBgRQAAgXAKAAQAEAAAEADQADAEAAAEIAAAGIgBAGIAAALQAGgLAKgJQAKgJAIAAQAQAAAFAQQAFgHAIgEQAIgEAKAAQARAAAGATQACAEADAZIAHA5QAAAFgDACQgDADgEAAQgJAAgBgJIgEgfIgDgfIgEgOQgDgJgEAAQgEAAgLAGQgJAGgDAEQgBAJABAKIADAaQACARAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_5.setTransform(-72.2,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6600CC").s().p("AAhA1IgHgIIgRAIQgIADgEgBQgYAAgLgNQgLgMAAgbQAAgYASgRQARgSAXAAQAIAAAMAEQANAHAAAIQAAACgCACIgBANIgBAWQAAAMACAIIAHASIACAFIAAACQAAAFgCACQgDADgEAAQgCAAgFgEgAgQgZQgMANAAAQQAAARAGAIQAGAIALAAQAJAAAIgDIAKgIQgEgaABgOIAAgJIACgLIgHgDIgEgBQgPAAgLANg");
	this.shape_6.setTransform(-85.8,3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6600CC").s().p("AgnAvIAAhHIAAgKIABgLQAAgJAJgBQAKABAAAQQATgSAXgBQAJAAAEAHQAEAGAAANIAAAHQgBANgJgBQgJABAAgKIgBgIIAAgJQgQADgJAGQgJAIgGANIAAA3QAAALgKAAQgJAAAAgLg");
	this.shape_7.setTransform(-96,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6600CC").s().p("AgjBPQgNgCAAgIQAAgKAJAAIAMACQAJACAKAAQATAAAIgTQAFgMAAgbQgGALgHAFQgIAFgJAAQgSAAgMgMQgMgNAAgUQAAgbAQgRQARgSAbAAQAKAAAGADQAGACAEAFQALAAAAANQAAAHgCAMIgDATIgCAiQgBAVgEANQgEAQgKAIQgNAKgWgBQgOAAgJgCgAgSgyQgKALAAATQAAAPAGAHQAGAHALAAQAJAAAKgLQAJgLABgKIAFgjQgEgDgFgCQgEgBgFAAQgTAAgKAOg");
	this.shape_8.setTransform(-107.1,6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6600CC").s().p("AAhA1IgHgIIgSAIQgHADgEgBQgYAAgLgNQgLgMABgbQAAgYARgRQARgSAWAAQAJAAALAEQAOAHABAIQAAACgCACIgCANIgBAWQAAAMACAIIAGASIADAFIABACQgBAFgDACQgDADgDAAQgCAAgFgEgAgRgZQgLANAAAQQAAARAGAIQAGAIALAAQAKAAAGgDIALgIQgDgagBgOIABgJIACgLIgGgDIgFgBQgPAAgMANg");
	this.shape_9.setTransform(-117.8,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6600CC").s().p("AgJBKQgDgCAAgFIAAgSIgBgTIABgYIABgXQAAgFADgCQADgEAEAAQAEAAACAEQADACAAAFIgBAXIgBAYIABATIAAASQAAAFgDACQgDADgDAAQgFAAgCgDgAgGg4QgEgEAAgEQAAgFAEgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDAEgFAAQgEAAgEgEg");
	this.shape_10.setTransform(-126,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6600CC").s().p("AgfBTQgMgDgGgFIgBAAQgFAAgDgDQgCgDAAgEIABggIABghIAAgiIgBgkQAAgFAEgEQAEgFAEAAQADAAAOAHIASAJQAdAKAUAUQAYAYAAAdQAAARgIAQQgJAQgNAKQgQALgdAAQgIAAgJgCgAgmgcIAAAdIgCA4IADABQAJAGAOAAQAWAAALgHQAJgHAGgLQAHgMgBgMQAAgcgfgUQgKgHgmgRg");
	this.shape_11.setTransform(-136.3,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6600CC").s().p("AgiAsQgQgMAAgYQAAgZANgSQAOgUAXAAQARAAAKAGQANAHAAAPQAAAKgLAIIgWALIgmASQAFAJAJAEQAJAEAKAAQAHAAAKgCQAMgEADgFQAEgGAEAAQAEAAADADQACADAAADQAAAMgTAIQgPAHgPAAQgWAAgOgMgAgVgbQgIAKgEASIAfgOQASgJAIgGQgIgIgQAAQgMAAgJAJg");
	this.shape_12.setTransform(-156.1,3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6600CC").s().p("AgdAtQgOgNAAgWQAAgUANgWQAQgZASAAQAKAAAMAFQAQAGAAAJQAAAEgCADQgDADgEAAQgDAAgCgCIgEgEQgGgEgOAAQgJAAgLASQgJARAAAMQAAANAJAIQAJAHAMAAQAHAAAGgDIAMgGIAFgCQAEAAACADQADADAAAEQAAAIgQAHQgOAGgJAAQgUAAgOgNg");
	this.shape_13.setTransform(-167.4,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6600CC").s().p("AgJBKQgDgCAAgFIAAgSIgBgTIABgYIABgXQAAgFADgCQADgEAEAAQAEAAACAEQADACAAAFIgBAXIgBAYIABATIAAASQAAAFgDACQgDADgDAAQgFAAgCgDgAgGg4QgEgEAAgEQAAgFAEgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDAEgFAAQgEAAgEgEg");
	this.shape_14.setTransform(-175.6,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6600CC").s().p("AgGBIQgDgDAAgEIABgLIAAgMIgCg7IgXgCQgJgBAAgJQAAgEADgDQACgDAFAAIAVACIAAgOIgBgNQAAgEADgDQADgDAFAAQAIAAABAPIABAJIgBAGIAAAHIAPgCQALAAADABQAGACAAAIQAAAEgDADQgCADgFAAIgFAAIgFgBIgOACIACA8IAAAEIAAAFQABAXgMAAQgDAAgDgDg");
	this.shape_15.setTransform(-183.8,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6600CC").s().p("AgdAtQgOgNAAgWQAAgUANgWQAQgZASAAQAKAAAMAFQAQAGAAAJQAAAEgCADQgDADgEAAQgDAAgCgCIgEgEQgGgEgOAAQgJAAgLASQgJARAAAMQAAANAJAIQAJAHAMAAQAHAAAGgDIAMgGIAFgCQAEAAACADQADADAAAEQAAAIgQAHQgOAGgJAAQgUAAgOgNg");
	this.shape_16.setTransform(-194,3.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6600CC").s().p("AAhA1IgHgIIgSAIQgHADgEgBQgYAAgLgNQgKgMAAgbQAAgYARgRQARgSAWAAQAKAAALAEQAOAHgBAIQAAACgBACIgCANIgBAWQAAAMACAIIAHASIACAFIABACQAAAFgDACQgDADgEAAQgCAAgFgEgAgRgZQgLANAAAQQAAARAGAIQAGAIAMAAQAJAAAHgDIAKgIQgEgaAAgOIABgJIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_17.setTransform(-204.8,3.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6600CC").s().p("AgnAvIAAhHIAAgKIABgLQAAgJAJgBQAKABAAAQQATgSAXgBQAJAAAEAHQAEAGAAANIAAAHQgBANgJgBQgJABAAgKIgBgIIAAgJQgQADgJAGQgJAIgGANIAAA3QAAALgKAAQgJAAAAgLg");
	this.shape_18.setTransform(-215,3.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6600CC").s().p("AgrBPQgCgDAAgEIAAgeIABgqIADgqIAAgOIABgPQACgJAIABIAJgBIAPgBQASAAAQANQASAOAAAUQAAAZgTAPQgRANgXAAIgNgBIgBA2QAAAEgCADQgDADgEAAQgEAAgDgDgAgWg9IgBATIgCApIAMABQAQAAAMgIQANgKAAgQQAAgLgNgJQgLgHgMAAIgIAAIgGAAg");
	this.shape_19.setTransform(-225.7,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.3,-16.6,220.9,33.3);


(lib.item7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape.setTransform(32.7,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeBVQgCgJgCgRQgCgRAAgKIAAgJIAAgIQAAgVgKAAQgOAAgLAMQgGAGgKAUQAAAqgDAIQgDAHgHAAQgFAAgDgDQgDgDAAgFIABgFIABgQIAAgRIAAhRIABgTIgBgLIgBgLQAAgEADgEQAEgCAEAAQAKgBABAKIACAUIgBAZQgBAMABANIAAAJQAJgMAKgGQAKgGAMAAQASgBAHAMQAFAJABAUIABAVIACAYIAEAWIAAADQAAAGgDACQgDAEgFAAQgIAAgDgJg");
	this.shape_1.setTransform(19.7,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBQQgDgDAAgFIAAgNIABgNIgChAIgZgCQgKgCAAgKQAAgEADgDQADgEAEAAIAYACIAAgPIgBgOQAAgEADgEQAEgDAEAAQAKAAABARIAAAKIAAAGIAAAHIAQgCQAMAAAEABQAGACAAAJQAAAFgDADQgDADgFABIgFgBIgGAAIgPACIACBBIAAAFIAAAFQAAAZgMAAQgDAAgEgCg");
	this.shape_2.setTransform(7.5,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.item7, new cjs.Rectangle(0,0,41,36.1), null);


(lib.item6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeBVQgCgJgCgRQgCgRAAgKIAAgJIAAgIQAAgVgKAAQgOAAgLAMQgGAGgKAUQAAAqgDAIQgDAHgHAAQgFAAgDgDQgDgDAAgFIABgFIABgQIAAgRIAAhRIABgTIgBgLIgBgLQAAgEADgEQAEgCAEAAQAKgBABAKIACAUIgBAZQgBAMABANIAAAJQAJgMAKgGQAKgGAMAAQASgBAHAMQAFAJABAUIABAVIACAYIAEAWIAAADQAAAGgDACQgDAEgFAAQgIAAgDgJg");
	this.shape.setTransform(58.7,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAxQgRgOABgYQgBgWAPgYQASgbAUAAQAKAAAOAFQARAHAAAJQAAAEgDAEQgCADgFAAQgDAAgCgCIgFgEQgHgFgOAAQgLAAgMAUQgKATABANQgBAPAKAIQAKAIAOAAQAGAAAIgDIAOgHIAEgCQAEAAADADQADADABAFQgBAIgRAIQgPAGgKAAQgWAAgPgOg");
	this.shape_1.setTransform(46.1,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAkA5IgIgIIgTAJQgIADgEAAQgbAAgMgPQgLgOAAgdQAAgaATgTQASgTAZAAQAKAAAMAFQAPAGAAAJQAAADgCACIgBAOIgBAYQAAAOACAIQABAFAGAPIACAGIABACQAAAEgDADQgDADgEAAQgDAAgFgFgAgSgbQgNAOAAARQAAATAHAJQAGAJANAAQAKAAAHgEQAFgCAHgGQgEgdAAgPIABgKIACgMIgHgEIgFgBQgRAAgMAPg");
	this.shape_2.setTransform(34.2,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_3.setTransform(22.2,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghBUQgEAGgFAAQgEAAgDgDQgDgDAAgFIAAgIIAAgJIAAgkIgBgiIAAgfIAAggQAAgGADgGQAEgHAGAAQAJAAAAAKIgBAFIgBAEIAAAZIAAAdQAKgHAJgDQAIgEAHAAQAYAAAPATQAOAQAAAaQAAAZgQASQgRASgXAAQgRAAgOgHgAgRgEQgFACgLAIIAAATIAAASIAAASIAPAGQAHADAJAAQAPAAALgMQAKgLAAgRQAAgRgIgLQgKgLgPAAQgIAAgKAFg");
	this.shape_4.setTransform(9.1,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.item6, new cjs.Rectangle(0,0,67.3,36.1), null);


(lib.item5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcA3IgEgZIgCgZIABgJIAAgLQAAgYgJAAQgMAAgKAPQgLANgGAUIgBALIAAALIAAAKIABAKQAAAFgDADQgEAEgEAAQgFAAgDgEQgDgDAAgFIgBgKIgBgKIACgfIACggIAAgLIgBgKQAAgFADgDQAEgDAEAAQALAAABAOIAAANQASgZATAAQATAAAGAQQAFALABAUIAAAMIAAAJQAAAJACAPQADAPgBAJQAAAFgCADQgEADgFAAQgJAAgBgKg");
	this.shape.setTransform(20.5,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghAwQgPgQgBgaQgBgYAOgUQAQgXAbAAQAWABAMAUQAJAQAAAYQgBAYgMASQgPATgXAAQgSABgOgOgAgUgWQgHANAAAPQAAARAJAJQAHAHAKAAQALAAAJgIQAJgKABgQQABgrgZAAIgBAAQgOAAgKAQg");
	this.shape_1.setTransform(7.9,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.item5, new cjs.Rectangle(0,0,28.3,36.1), null);


(lib.item4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape.setTransform(69.2,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMBRIACgpIABgoIAAgoIAAgpQABgLAJAAQAMAAAAALIgBApIgBAoIgBA3IgBAaQgBAMgJAAQgLAAAAgMg");
	this.shape_1.setTransform(59.6,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghBUQgEAGgFAAQgEAAgDgDQgDgDAAgFIAAgIIAAgJIAAgkIgBgiIAAgfIAAggQAAgGADgGQAEgHAGAAQAJAAAAAKIgBAFIgBAEIAAAZIAAAdQAKgHAJgDQAIgEAHAAQAYAAAPATQAOAQAAAaQAAAZgQASQgRASgXAAQgRAAgOgHgAgRgEQgFACgLAIIAAATIAAASIAAASIAPAGQAHADAJAAQAPAAALgMQAKgLAAgRQAAgRgIgLQgKgLgPAAQgIAAgKAFg");
	this.shape_2.setTransform(49.8,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBCQgDgDAAgFQAAgOgDgaQgCgaAAgNQAAgMgEgHQgIAEgIAIIgNAPIgGAHIgBASIgBAUIABAJIABAJQAAAFgDADQgEADgEAAQgNAAAAgdIABgUIABgTIgBgSIgBgSQAAgZAMAAQAEAAAEADQADAEAAAFIAAAGIgBAHIAAAMQAGgMAMgKQALgJAIAAQASAAAFARQAGgIAJgEQAIgEALAAQATAAAHAUIAFAfIAIBAQAAAEgDADQgEAEgFAAQgJAAgBgKIgEgjIgEgiQgBgIgDgHQgEgKgEAAQgEAAgMAHQgLAGgDAEIABAWIADAdQACARAAAMQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_3.setTransform(34,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZA2QgOAHgRAAQgPAAgJgHQgLgHgCgOQgFgdAAgXQAAgPAEgUQABgJAKAAQAEAAAEADQADADAAAFIgCAQIgBARIABAfQABAOADAIIAHADIAHABQAOAAARgFIAAgXIgBgUQAAgZADgRQABgLAJAAQAFAAADADQAEADAAAFIgCArIAAAXIAAAYIAAAIIABAHQAAAFgEADQgDADgFAAQgIAAgDgKg");
	this.shape_4.setTransform(18.9,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBQQgDgDAAgFIAAgNIABgNIgChAIgZgCQgKgCAAgKQAAgEADgDQADgEAEAAIAYACIAAgPIgBgOQAAgEADgEQAEgDAEAAQAKAAABARIAAAKIAAAGIAAAHIAQgCQAMAAAEABQAGACAAAJQAAAFgDADQgDADgFABIgFgBIgGAAIgPACIACBBIAAAFIAAAFQAAAZgMAAQgDAAgEgCg");
	this.shape_5.setTransform(7.5,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.item4, new cjs.Rectangle(0,0,77.4,36.1), null);


(lib.item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAwQgPgQgBgaQgBgYAOgUQAQgXAbAAQAWABAMAUQAJAQAAAYQgBAYgMASQgPATgXAAQgSABgOgOgAgUgWQgHANAAAPQAAARAJAJQAHAHAKAAQALAAAJgIQAJgKABgQQABgrgZAAIgBAAQgPAAgJAQg");
	this.shape.setTransform(18.8,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBQQgDgDAAgFIAAgNIABgNIgChAIgZgCQgKgCAAgKQAAgEADgDQADgEAEAAIAYACIAAgPIgBgOQAAgEADgEQAEgDAEAAQAKAAABARIAAAKIAAAGIAAAHIAQgCQAMAAAEABQAGACAAAJQAAAFgDADQgDADgFABIgFgBIgGAAIgPACIACBBIAAAFIAAAFQAAAZgMAAQgDAAgEgCg");
	this.shape_1.setTransform(7.5,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.item3, new cjs.Rectangle(0,0,27.2,36.1), null);


(lib.item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfA/QgRgHAAgKQAAgFAEgDQADgEAEAAQAEAAAFAFQAEADAJABIAMACQAJAAAHgCQAKgDAAgIQABgPgWgFIgKgDQgQgDgGgEQgJgGAAgMQAAgYAXgKQAGgDAOgEIAVgHQAFgCAFgBQAFABADADQADADAAAFIACAJIABAKQAAAFgDADQgDAEgFAAQgGAAgCgFQgCgDgBgJIgaAIQgSAIAAAKIAHABQAZAFAMAIQASALABAWQAAATgQAJQgNAHgUAAQgOAAgOgEg");
	this.shape.setTransform(45.1,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_1.setTransform(33.7,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeBWQgGgMgMgPIgTgbIgUAOIgBAiQAAAFgDAEQgDADgFAAQgLAAAAgQIABgbIABgcIABgmIAAgnIAAgMIgBgMQAAgFADgDQADgDAFAAQAFAAADADQADADAAAFIABAMIAAAMIgBAkIAAAnQAPgMAOgNIAYgaQAEgDAEAAQAFAAADADQAEAEAAAEQAAAEgEAEQgNAQgVARIAZAiQARAXAAAHQAAAFgDADQgEADgFAAQgGAAgDgGg");
	this.shape_2.setTransform(21.7,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIgBgUIAAgUIABgbIABgZQAAgFAEgDQADgDAEAAQAEAAADADQAEADAAAFIgCAZIgBAbIAAAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgGg9QgEgEAAgFQAAgGAEgEQAEgDAEAAQAGAAAEADQADAEAAAGQAAAFgDAEQgEAEgGAAQgEAAgEgEg");
	this.shape_3.setTransform(11.8,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBRIACgpIABgoIAAgoIABgpQgBgLALAAQALAAAAALIgBApIgBAoIgBA3IgBAaQgBAMgJAAQgLAAAAgMg");
	this.shape_4.setTransform(5.3,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.item2, new cjs.Rectangle(0,0,53.2,36.1), null);


(lib.item1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBCQgDgDAAgFQAAgOgDgaQgCgaAAgNQAAgMgEgHQgIAEgIAIIgNAPIgGAHIgBASIgBAUIABAJIABAJQAAAFgDADQgEADgEAAQgNAAAAgdIABgUIABgTIgBgSIgBgSQAAgZAMAAQAEAAAEADQADAEAAAFIAAAGIgBAHIAAAMQAGgMAMgKQALgJAIAAQASAAAFARQAGgIAJgEQAIgEALAAQATAAAHAUIAFAfIAIBAQAAAEgDADQgEAEgFAAQgJAAgBgKIgEgjIgEgiQgBgIgDgHQgEgKgEAAQgEAAgMAHQgLAGgDAEIABAWIADAdQACARAAAMQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(38.9,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkA5IgIgIIgTAJQgIADgEAAQgbAAgMgPQgLgOAAgdQAAgaATgTQASgTAZAAQAKAAAMAFQAPAGAAAJQAAADgCACIgBAOIgBAYQAAAOACAIIAHAUIACAGIABACQAAAEgDADQgDADgEAAQgDAAgFgFgAgSgbQgNAOAAARQAAATAHAJQAGAJANAAQAKAAAHgEQAFgCAHgGQgEgdAAgPIABgKIACgMIgHgEIgFgBQgRAAgMAPg");
	this.shape_1.setTransform(23.9,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBOQgVgKgBgRQAAgEAEgDQADgDAFAAQAFAAAEAGQAGAIAFADQAJAHASAAQARAAAPgIQATgJAAgSQAAgOgQgIQgOgHgTgBQgSAAgMgGQgQgJAAgRQAAgUAXgRQAVgQAWAAQALAAAOAEQASAFAAAIQAAAJgKAAIgQgCQgLgCgGAAQgRAAgMAIQgMAJAAAMQAAAKAQAEIAXACQAaACAOAOQAOAMAAATQAAAbgZAQQgWAOgbAAQgUAAgRgIg");
	this.shape_2.setTransform(10.2,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.item1, new cjs.Rectangle(0,0,49.8,36.1), null);


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


(lib.beach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgEAFgIAPQAAAhgDAGQgCAGgGAAQgEAAgCgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAABAIIACAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAOAAAGAKQAEAGABAPIAAARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape.setTransform(46.3,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAnQgNgMAAgTQAAgQAMgUQAOgUAPAAQAJAAAKADQANAGAAAIQAAADgBACQgDADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgEgEQgGgEgLAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAHAGALAAQAFAAAGgDIALgFIADgCQADABADACQACACAAAEQAAAHgNAFQgMAGgIAAQgRgBgMgKg");
	this.shape_1.setTransform(36.4,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAcAtIgGgGIgPAHIgJACQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAMIAAASQAAALABAGIAGAPIACAFIAAACQAAADgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKAAQAIAAAGgCIAJgIQgDgWAAgMIAAgIIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_2.setTransform(27.2,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_3.setTransform(17.8,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBCQgDAEgEAAQgEAAgBgCQgDgDAAgDIAAgHIAAgGIAAgcIgBgcIAAgXIAAgZQABgGACgDQACgGAGAAQAGAAAAAHIAAAFIgBADIAAATIAAAXQAHgFAIgDQAHgDAFAAQATAAALAOQAMAOAAATQAAAUgOAOQgNAOgRAAQgOAAgLgFgAgNgDIgNAIIAAAPIAAANIAAAPIAMAFQAFABAIAAQALAAAIgJQAJgIAAgOQgBgNgGgJQgIgIgLAAQgHAAgHAEg");
	this.shape_4.setTransform(7.6,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beach, new cjs.Rectangle(0,0,53.6,29.1), null);


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


(lib.congrats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0});

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Tween25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(82.7,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-0.6,scaleX:1.21,scaleY:1.21,x:82.3,y:20.1},9).to({regY:-0.5,scaleX:1,scaleY:1,y:20.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.4,41.6);


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
(lib.inf_Scene8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.item1.addEventListener("pressmove", click1.bind(this));
		this.item2.addEventListener("pressmove", click2.bind(this));
		this.item3.addEventListener("pressmove", click3.bind(this));
		this.item4.addEventListener("pressmove", click4.bind(this));
		this.item5.addEventListener("pressmove", click5.bind(this));
		this.item6.addEventListener("pressmove", click6.bind(this));
		this.item7.addEventListener("pressmove", click7.bind(this));
		
		//nav buttons --------------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		this.btn_goNext.mouseEnabled = false;
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmusic',{loop:-1});
		bgm.volume = 1;
		
		var _1stHit = false;
		var _2ndHit = false;
		var _3rdHit = false;
		var _4thHit = false;
		var _5thHit = false;
		var _6thHit = false;
		var _7thHit = false;
		
		//Drag n Drop
		var hit = false;
		function checkCollision(obj_1,obj_2) {
		
		    obj1x = obj_1.x;
		    obj1y = obj_1.y;
		    obj1w = obj_1.nominalBounds.width;
		    obj1h = obj_1.nominalBounds.height;
		
		    obj2x = obj_2.x;
		    obj2y = obj_2.y;
		    obj2w = obj_2.nominalBounds.width;
		    obj2h = obj_2.nominalBounds.height;
		
		    if (    obj1x >= obj2x + obj2w
		        ||  obj1x + obj1w <= obj2x
		        ||  obj1y >= obj2y + obj2h
		        ||  obj1y + obj1h <= obj2y) {
				console.log(hit);
				hit = false;
					
		    } 
			else {
				
				hit = true;
				obj_1.x = obj_2.x;
				obj_1.y = obj_2.y;
				console.log(hit);
				
		    }
		}
		
		function click1(evt)
		{
			checkCollision(evt.currentTarget,this.target1);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_1stHit = true;
				console.log("1st hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct1.visible = true;
			}
			
			if (_1stHit & _2ndHit & _3rdHit & _4thHit & _5thHit & _6thHit & _7thHit)
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
		}
		
		function click2(evt)
		{
			checkCollision(evt.currentTarget,this.target2);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_2ndHit = true;
				console.log("2nd hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct2.visible = true;
			}
		
				if (_1stHit & _2ndHit & _3rdHit & _4thHit & _5thHit & _6thHit & _7thHit)
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
			
		}
		
		function click3(evt)
		{
			checkCollision(evt.currentTarget,this.target3);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_3rdHit = true;
				console.log("3rd hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct3.visible = true;
			}
			
				if (_1stHit & _2ndHit & _3rdHit & _4thHit & _5thHit & _6thHit & _7thHit)
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
			
		}
		
		function click4(evt)
		{
			checkCollision(evt.currentTarget,this.target4);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_4thHit = true;
				console.log("4th hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct4.visible = true;
			}
			
				if (_1stHit & _2ndHit & _3rdHit & _4thHit & _5thHit & _6thHit & _7thHit)
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
			
		}
		
		function click5(evt)
		{
			checkCollision(evt.currentTarget,this.target5);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_5thHit = true;
				console.log("5th hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct5.visible = true;
			}
			
				if (_1stHit & _2ndHit & _3rdHit & _4thHit & _5thHit & _6thHit & _7thHit)
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
			
		}
		
		function click6(evt)
		{
			checkCollision(evt.currentTarget,this.target6);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_6thHit = true;
				console.log("6th hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct6.visible = true;
			}
			
				if (_1stHit & _2ndHit & _3rdHit & _4thHit & _5thHit & _6thHit & _7thHit)
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
			
		}
		
		function click7(evt)
		{
			checkCollision(evt.currentTarget,this.target7);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_7thHit = true;
				console.log("7th hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct7.visible = true;
			}
			
				if (_1stHit & _2ndHit & _3rdHit & _4thHit & _5thHit & _6thHit & _7thHit)
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
				this.congrats.visible = true;
			}
		
			
		}
		
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
		
		 window.open ("inf_Scene9.html","_self");
		}
		
		
		function openPrev(){
		
		 window.open ("inf_Scene7.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// items
	this.item6 = new lib.item6();
	this.item6.parent = this;
	this.item6.setTransform(417.9,292.8,1,1,0,0,0,33.6,18);

	this.item7 = new lib.item7();
	this.item7.parent = this;
	this.item7.setTransform(361.1,292.8,1,1,0,0,0,20.4,18);

	this.item5 = new lib.item5();
	this.item5.parent = this;
	this.item5.setTransform(324,292.8,1,1,0,0,0,14.2,18);

	this.item4 = new lib.item4();
	this.item4.parent = this;
	this.item4.setTransform(268.4,292.8,1,1,0,0,0,38.7,18);

	this.item3 = new lib.item3();
	this.item3.parent = this;
	this.item3.setTransform(213.5,292.8,1,1,0,0,0,13.6,18);

	this.item2 = new lib.item2();
	this.item2.parent = this;
	this.item2.setTransform(170.7,292.8,1,1,0,0,0,26.6,18);

	this.item1 = new lib.item1();
	this.item1.parent = this;
	this.item1.setTransform(116.6,292.8,1,1,0,0,0,24.9,18);

	this.target6 = new lib.Target();
	this.target6.parent = this;
	this.target6.setTransform(458.1,145.9,0.439,0.46,0,-0.5,0,-49.3,-24.2);
	this.target6.alpha = 0;

	this.target7 = new lib.Target();
	this.target7.parent = this;
	this.target7.setTransform(496.7,197.5,0.235,0.382,0,0,0,0.5,0.4);
	this.target7.alpha = 0;

	this.target5 = new lib.Target();
	this.target5.parent = this;
	this.target5.setTransform(428.1,153.5,0.235,0.382,0,0,0,0.5,0.4);
	this.target5.alpha = 0;

	this.target2 = new lib.Target();
	this.target2.parent = this;
	this.target2.setTransform(191,154.4,0.616,0.613,0,-0.3,0,-51,-25.1);
	this.target2.alpha = 0;

	this.target3 = new lib.Target();
	this.target3.parent = this;
	this.target3.setTransform(303.6,107.4,0.304,0.403,0,0,0,-50,-25.6);
	this.target3.alpha = 0;

	this.target4 = new lib.Target();
	this.target4.parent = this;
	this.target4.setTransform(353.5,111.8,0.439,0.46,0,-0.5,0,-49.3,-24.2);
	this.target4.alpha = 0;

	this.target1 = new lib.Target();
	this.target1.parent = this;
	this.target1.setTransform(59.5,154.6,0.608,0.595,0,0,0,-50.6,-25.1);
	this.target1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.target1},{t:this.target4},{t:this.target3},{t:this.target2},{t:this.target5},{t:this.target7},{t:this.target6},{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item7},{t:this.item6}]}).wait(1));

	// Directions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape.setTransform(452.4,76.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeBVQgCgJgCgRQgCgRAAgKIAAgJIAAgJQAAgUgKAAQgOAAgLAMQgGAHgKASQAAArgDAIQgDAHgHAAQgFAAgDgDQgDgEAAgEIABgFIABgQIAAgRIAAhRIABgTIgBgLIgBgLQAAgEADgEQAEgDAEAAQAKAAABAKIACAUIgBAYQgBANABANIAAAJQAJgMAKgGQAKgGAMgBQASABAHAMQAFAIABAUIABAVIACAYIAEAWIAAAEQAAAEgDAEQgDADgFAAQgIAAgDgJg");
	this.shape_1.setTransform(443,68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAxQgRgOABgYQgBgWAPgYQASgbAUAAQAKAAAOAFQARAHAAAJQAAAEgDAEQgCADgFAAQgDAAgCgCIgFgEQgHgFgOAAQgLAAgMAUQgKATAAANQAAAPAKAIQAKAIAOAAQAGAAAIgDIAOgHIAEgCQAEAAADADQADADABAFQgBAIgRAIQgPAGgKAAQgWAAgPgOg");
	this.shape_2.setTransform(430.4,71);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAkA5IgIgIIgTAJQgIADgEAAQgbAAgMgPQgLgOAAgdQAAgaATgTQASgTAZAAQAKAAAMAFQAPAGAAAJQAAADgCACIgBAOIgBAYQAAAOACAIQABAFAGAPIACAGIABACQAAAEgDADQgDADgEAAQgDAAgFgFgAgSgbQgNAOAAARQAAATAHAJQAGAJANAAQAKAAAHgEQAFgCAHgGQgEgdAAgPIABgKIACgMIgHgEIgFgBQgRAAgMAPg");
	this.shape_3.setTransform(418.5,71.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_4.setTransform(406.5,71);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBUQgEAGgFAAQgEAAgDgDQgDgDAAgFIAAgIIAAgJIAAgkIgBgiIAAgfIAAggQAAgGADgGQAEgHAGAAQAJAAAAAKIgBAFIgBAEIAAAZIAAAdQAKgHAJgDQAIgEAHAAQAYAAAPATQAOAQAAAaQAAAZgQASQgRASgXAAQgRAAgOgHgAgRgEQgFACgLAIIAAATIAAASIAAASIAPAGQAHADAJAAQAPAAALgMQAKgLAAgRQAAgRgIgLQgKgLgPAAQgIAAgKAFg");
	this.shape_5.setTransform(393.4,68);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_6.setTransform(373.4,71);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAeBVQgCgJgCgRQgCgRAAgKIAAgJIAAgJQAAgUgKAAQgOAAgLAMQgGAHgKASQAAArgDAIQgDAHgHAAQgFAAgDgDQgDgEAAgEIABgFIABgQIAAgRIAAhRIABgTIgBgLIgBgLQAAgEADgEQAEgDAEAAQAKAAABAKIACAUIgBAYQgBANABANIAAAJQAJgMAKgGQAKgGAMgBQASABAHAMQAFAIABAUIABAVIACAYIAEAWIAAAEQAAAEgDAEQgDADgFAAQgIAAgDgJg");
	this.shape_7.setTransform(360.4,68);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBPQgCgDAAgEIAAgNIAAgNIgDhAIgYgCQgKgCAAgJQAAgFADgDQADgDAFgBIAXACIgBgPIAAgOQAAgEAEgDQACgEAGAAQAIAAACAQIABAKIAAAHIgBAHIAQgCQAMAAADACQAHACAAAIQAAAFgDADQgDADgFAAIgGAAIgFAAIgPABIACBCIAAAFIAAAGQABAYgMAAQgEAAgEgDg");
	this.shape_8.setTransform(348.2,69.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbA3IgDgZIgBgZIAAgJIAAgLQABgYgKAAQgMAAgLAPQgKANgGAUIgBALIgBALIABAKIABAKQAAAFgDADQgEAEgEAAQgFAAgDgEQgDgDAAgFIgBgKIAAgKIABgfIABggIAAgLIAAgKQAAgFADgDQAEgDAEAAQALAAABAOIAAANQATgZASAAQASAAAIAQQAEALABAUIAAAMIgBAJQAAAJADAPQACAPABAJQAAAFgDADQgEADgFAAQgJAAgCgKg");
	this.shape_9.setTransform(330.2,70.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghAwQgPgQgBgaQgBgYAOgUQAQgWAbAAQAWAAAMAUQAJARAAAXQgBAYgMARQgPAVgXgBQgSAAgOgNgAgUgWQgHANAAAPQAAAQAJAKQAHAHAKAAQALAAAJgIQAJgKABgQQABgrgZAAIgBAAQgPAAgJAQg");
	this.shape_10.setTransform(317.7,71.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_11.setTransform(298.9,71);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMBRIABgpIABgoIABgoIAAgpQAAgLALAAQALAAAAALIgBApIAAAoIgCA3IgBAaQgBAMgJAAQgLAAAAgMg");
	this.shape_12.setTransform(289.3,67.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghBUQgEAGgFAAQgEAAgDgDQgDgDAAgFIAAgIIAAgJIAAgkIgBgiIAAgfIAAggQAAgGADgGQAEgHAGAAQAJAAAAAKIgBAFIgBAEIAAAZIAAAdQAKgHAJgDQAIgEAHAAQAYAAAPATQAOAQAAAaQAAAZgQASQgRASgXAAQgRAAgOgHgAgRgEQgFACgLAIIAAATIAAASIAAASIAPAGQAHADAJAAQAPAAALgMQAKgLAAgRQAAgRgIgLQgKgLgPAAQgIAAgKAFg");
	this.shape_13.setTransform(279.5,68);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBCQgDgDAAgFQAAgOgDgaQgCgaAAgNQAAgMgEgHQgIAEgIAIIgNAPIgGAHIgBASIgBAUIABAJIABAJQAAAFgDADQgEADgEAAQgNAAAAgdIABgUIABgTIgBgSIgBgSQAAgZAMAAQAEAAAEADQADAEAAAFIAAAGIgBAHIAAAMQAGgMAMgKQALgJAIAAQASAAAFARQAGgIAJgEQAIgEALAAQATAAAHAUIAFAfIAIBAQAAAEgDADQgEAEgFAAQgJAAgBgKIgEgjIgEgiQgBgIgDgHQgEgKgEAAQgEAAgMAHQgLAGgDAEIABAWIADAdQACARAAAMQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_14.setTransform(263.7,71.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAZA2QgOAHgRAAQgPAAgJgHQgLgHgCgOQgFgdAAgXQAAgPAEgUQABgJAKAAQAEAAAEADQADADAAAFIgCAQIgBARIABAfQABAOADAIIAHADIAHABQAOAAARgFIAAgXIgBgUQAAgZADgRQABgLAJAAQAFAAADADQAEADAAAFIgCArIAAAXIAAAYIAAAIIABAHQAAAFgEADQgDADgFAAQgIAAgDgKg");
	this.shape_15.setTransform(248.6,71.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGBPQgEgDAAgEIAAgNIABgNIgDhAIgYgCQgKgCAAgJQAAgFADgDQADgDAEgBIAYACIAAgPIgBgOQAAgEADgDQAEgEAEAAQAKAAABAQIABAKIAAAHIgBAHIAQgCQAMAAADACQAHACAAAIQAAAFgDADQgDADgFAAIgFAAIgGAAIgPABIACBCIAAAFIAAAGQAAAYgLAAQgEAAgDgDg");
	this.shape_16.setTransform(237.2,69.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghAwQgPgQgBgaQgBgYAOgUQAQgWAbAAQAWAAAMAUQAJARAAAXQgBAYgMARQgPAVgXgBQgSAAgOgNgAgUgWQgHANAAAPQAAAQAJAKQAHAHAKAAQALAAAJgIQAJgKABgQQABgrgZAAIgBAAQgPAAgJAQg");
	this.shape_17.setTransform(218.7,71.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBPQgEgDAAgEIAAgNIABgNIgDhAIgYgCQgKgCAAgJQAAgFADgDQADgDAEgBIAYACIAAgPIgBgOQAAgEADgDQADgEAFAAQAKAAABAQIAAAKIAAAHIAAAHIAQgCQAMAAAEACQAGACAAAIQAAAFgDADQgDADgFAAIgFAAIgGAAIgPABIACBCIAAAFIAAAGQAAAYgMAAQgDAAgDgDg");
	this.shape_18.setTransform(207.4,69.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfA/QgRgGAAgLQAAgFAEgDQADgEAFAAQADAAAGAFQADADAJACIAMABQAJAAAHgCQAKgDAAgIQAAgPgVgFIgKgDQgPgDgHgEQgJgFAAgNQAAgYAXgKQAGgDAOgEIAVgHQAFgDAFAAQAFAAADAEQADADAAAFIABAKIACAJQAAAFgDAEQgDACgFAAQgGAAgDgDQgBgEgBgJIgaAIQgSAHAAALIAHABQAYAFANAJQATAKAAAWQgBATgQAJQgMAIgUgBQgOABgOgFg");
	this.shape_19.setTransform(189.2,70.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_20.setTransform(177.8,71);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAeBWQgGgMgMgPIgTgbIgUAOIgBAiQAAAFgDAEQgDADgFAAQgLAAAAgQIABgbIABgcIABgmIAAgnIAAgMIgBgMQAAgFADgDQADgDAFAAQAFAAADADQADADAAAFIABAMIAAAMIgBAkIAAAnQAPgMAOgNIAYgaQAEgDAEAAQAFAAADADQAEAEAAAEQAAAEgEAEQgNAQgVARIAZAiQARAXAAAHQAAAFgDADQgEADgFAAQgGAAgDgGg");
	this.shape_21.setTransform(165.8,67.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIgBgUIAAgUIABgbIABgZQAAgFAEgDQACgDAGAAQADAAADADQAEADAAAFIgCAZIgBAbIABAUIAAAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgGg9QgEgEAAgFQAAgGAEgEQADgDAFAAQAGAAAEADQADAEAAAGQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_22.setTransform(155.9,68.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMBRIACgpIABgoIAAgoIABgpQgBgLAKAAQAMAAAAALIgBApIgBAoIgBA3IgBAaQgBAMgJAAQgLAAAAgMg");
	this.shape_23.setTransform(149.4,67.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGBCQgDgDAAgFQAAgOgDgaQgCgaAAgNQAAgMgEgHQgIAEgIAIIgNAPIgGAHIgBASIgBAUIABAJIABAJQAAAFgDADQgEADgEAAQgNAAAAgdIABgUIABgTIgBgSIgBgSQAAgZAMAAQAEAAAEADQADAEAAAFIAAAGIgBAHIAAAMQAGgMAMgKQALgJAIAAQASAAAFARQAGgIAJgEQAIgEALAAQATAAAHAUIAFAfIAIBAQAAAEgDADQgEAEgFAAQgJAAgBgKIgEgjIgEgiQgBgIgDgHQgEgKgEAAQgEAAgMAHQgLAGgDAEIABAWIADAdQACARAAAMQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_24.setTransform(130.6,71.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAkA5IgIgIIgTAJQgIADgEAAQgbAAgMgPQgLgOAAgdQAAgaATgTQASgTAZAAQAKAAAMAFQAPAGAAAJQAAADgCACIgBAOIgBAYQAAAOACAIQABAFAGAPIACAGIABACQAAAEgDADQgDADgEAAQgDAAgFgFgAgSgbQgNAOAAARQAAATAHAJQAGAJANAAQAKAAAHgEQAFgCAHgGQgEgdAAgPIABgKIACgMIgHgEIgFgBQgRAAgMAPg");
	this.shape_25.setTransform(115.6,71.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgsBOQgVgKgBgRQAAgEAEgDQADgDAFAAQAFAAAEAGQAGAIAFADQAJAHASAAQARAAAPgIQATgJAAgSQAAgOgQgIQgOgHgTgBQgSAAgMgGQgQgJAAgRQAAgUAXgRQAVgQAWAAQALAAAOAEQASAFAAAIQAAAJgKAAIgQgCQgLgCgGAAQgRAAgMAIQgMAJAAAMQAAAKAQAEIAXACQAaACAOAOQAOAMAAATQAAAbgZAQQgWAOgbAAQgUAAgRgIg");
	this.shape_26.setTransform(101.9,68.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3,1,1).p("AULlTIkTAAInmAAIkUkkAP4gHICMCMIkZAAgAP4lTIAAFMAdWAOIkWAAIk1lhAYelTIkTAAASECFIHWAAEAmiAAOIpMAAEAksAJ4InWpqAB9jmIAAFrI0aAAIAAlnEgmhACFIUEAAIAAEDAB9CFILuAA");
	this.shape_27.setTransform(275.1,170.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Highlight
	this.congrats = new lib.congrats();
	this.congrats.parent = this;
	this.congrats.setTransform(275,293.5,1,1,0,0,0,82.7,20.8);
	this.congrats.shadow = new cjs.Shadow("rgba(0,0,255,1)",0,0,8);
	this.congrats.visible = false;

	this.correct5 = new lib.Symbol1();
	this.correct5.parent = this;
	this.correct5.setTransform(433.2,150.1,1,1,0,0,0,18.4,18.4);
	this.correct5.visible = false;

	this.correct6 = new lib.beach();
	this.correct6.parent = this;
	this.correct6.setTransform(481.8,158.4,1,1,0,0,0,26.8,14.6);
	this.correct6.visible = false;

	this.correct7 = new lib.the();
	this.correct7.parent = this;
	this.correct7.setTransform(502.7,202.7,1,1,0,0,0,21.9,21.9);
	this.correct7.visible = false;

	this.correct4 = new lib.tumble();
	this.correct4.parent = this;
	this.correct4.setTransform(374.8,122.2,1,1,0,0,0,30.8,14.6);
	this.correct4.visible = false;

	this.correct3 = new lib.to();
	this.correct3.parent = this;
	this.correct3.setTransform(323.1,113.7,1,1,0,0,0,18.1,18.1);
	this.correct3.visible = false;

	this.correct2 = new lib.likes();
	this.correct2.parent = this;
	this.correct2.setTransform(223.7,169.6,1,1,0,0,0,21.2,14.6);
	this.correct2.visible = false;

	this.correct1 = new lib.sam();
	this.correct1.parent = this;
	this.correct1.setTransform(93.5,169.6,1,1,0,0,0,19.9,14.6);
	this.correct1.visible = false;

	this.instance = new lib.Directions2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(397.9,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.correct1},{t:this.correct2},{t:this.correct3},{t:this.correct4},{t:this.correct7},{t:this.correct6},{t:this.correct5},{t:this.congrats}]}).wait(1));

	// background
	this.instance_1 = new lib.QuizB("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(273.2,192.1);

	this.text = new cjs.Text("", "18px 'ComicSansMS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 325;
	this.text.parent = this;
	this.text.setTransform(275.5,352.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_1}]}).wait(1));

	// main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_28.setTransform(53.3,10.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFAiQgCgCAAgEIgBgTIgBgTIgBgGQgHAEgHAJIgBABIAAASIAAAEIgBAEQABAEgDABQgCACgEAAQgEAAgDgEIgBgKIAAgUIAAgJIAAgJQAAgFACgEQACgFAEAAQADAAADACQADADgBADIAAAFQAJgKAIAAQAJAAADAGQADgDAFgBQAEgCAFAAQAMAAAEAMIACAPIAFAfQAAADgCADQgDACgDAAQgHAAgCgHIgBgRIgCgQQgCgLgDAAIgGADIgGAFIABASIABATQAAAEgBACQgDACgEAAQgCAAgDgCg");
	this.shape_29.setTransform(45.5,10.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAMAdQgIADgHAAQgIAAgGgEQgGgEgBgHQgDgPAAgKQAAgIACgKQABgGAHAAQADAAADACQACACAAADIgBAIIAAAIIAAAOIACAKIADABIACAAQAGAAAIgCIAAgKIgBgJIABgUQABgHAHAAQAEAAACACQADACAAADIgBAVIAAALIAAAMIAAADIAAAEQAAADgCACQgDACgDAAQgFAAgCgEg");
	this.shape_30.setTransform(37.6,10.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFAuQgCgCAAgEIAAhQQAAgDACgCQACgCADAAQAEAAACACQACACAAADIAABNQAAALgIAAQgDAAgCgCg");
	this.shape_31.setTransform(32.8,8.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_32.setTransform(28,10.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgMAqQgHgRgJgfIgEgQQgEgLAAgFQAAgDADgCQACgCADAAQAGAAACAFIACALIAHATIAIAcIANgiIAFgOQADgJAFgEQACgDADAAQAEAAACACQADACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgFALIgFAMIgQAoIgGAOQgDAEgDAAQgGAAgDgFg");
	this.shape_33.setTransform(21,9.1);

	this.vol_up = new lib.pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(51.8,25.9,1,1,0,0,0,7,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.pos(), 3);

	this.vol_dwn = new lib.neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(21.8,25.9,1,1,0,0,0,7,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.neg(), 3);

	this.instance_2 = new lib.Copyright("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(494,352.3);
	this.btn_goNext.visible = false;
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_2},{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.btn_menu}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,198.2,537.1,404.8);
// library properties:
lib.properties = {
	id: '04F0B448B89DF540AB129BD47C9A4C85',
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
an.compositions['04F0B448B89DF540AB129BD47C9A4C85'] = {
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