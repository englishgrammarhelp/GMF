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


(lib.vol_pos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("ABagwIAABgQAAAWgZAAIiBAAQgZAAAAgWIAAhgQAAgVAZAAICBAAQAZAAAAAVg");
	this.shape.setTransform(9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKA0QgDgDAAgGIAAgfIgFABIgTAAQgVAAAAgNQAAgHAHgDQADAAALAAIAYgBIAAgQIABgRQABgFADgDQADgCAEAAQAFAAADADQAEAEgBAFIAAAHIgBAIIABAPIAAAAIAKABIAIAAIAHgBIABAAIAJABQAKABADAGIABAEIgBAFIgDADIgDADIgFABIgEgBIgCAAIgEAAIgNAAIgOAAIAAAgQAAAMgLAAQgGAAgDgDg");
	this.shape_1.setTransform(9.6,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICBAAQAYAAABAWIAABfQgBAWgYAAgAgHAqQAAAGADADQAEADAEAAQAMAAABgMIAAggIANAAIAOAAIADAAIACAAIAFABIAFgBIADgDIACgDIABgFIgBgEQgCgGgKgBIgJgBIgBAAIgHABIgIAAIgKgBIAAAAIgBgPIABgIIAAgHQAAgFgEgEQgDgDgGAAQgEAAgBACQgEADgBAFIgBARIAAAQIgYABQgKAAgDAAQgHADgBAIQABAMAUAAIATAAIAFgBg");
	this.shape_2.setTransform(9,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICBAAQAYAAABAWIAABfQgBAWgYAAgAgHAqQAAAGADADQAEADAEAAQAMAAABgMIAAggIANAAIAOAAIADAAIACAAIAFABIAFgBIADgDIACgDIABgFIgBgEQgCgGgKgBIgJgBIgBAAIgHABIgIAAIgKgBIAAAAIgBgPIABgIIAAgHQAAgFgEgEQgDgDgGAAQgEAAgBACQgEADgBAFIgBARIAAAQIgYABQgKAAgDAAQgHADgBAIQABAMAUAAIATAAIAFgBg");
	this.shape_3.setTransform(9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.9,16);


(lib.vol_neg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AhAhFICBAAQAZAAAAAVIAABgQAAAWgZAAIiBAAQgZAAAAgWIAAhgQAAgVAZAAg");
	this.shape.setTransform(9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMALIgCAAIgPAAQgLAAAAgKQAAgJALAAIAdgBIAdgBIAEABQAIAAAAAJQAAAIgKABIgVABIgJABIgNAAg");
	this.shape_1.setTransform(9.1,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_2.setTransform(9,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_3.setTransform(9,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_4.setTransform(9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.9,16);


(lib.vol_mute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AASBRQAAgIgQgQQgMgNgHAAIAAhZQAHAAANgOQAPgOAAgHg");
	this.shape.setTransform(15.6,13.9,1.2,1.201);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgGglIANAAQABAAAAABIAABJQAAABgBAAIgNAAQgBAAAAgBIAAhJQAAgBABAAg");
	this.shape_1.setTransform(10.5,13.8,1.2,1.201);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#990000").ss(1,1,1).p("AhHBRQgCgDgDgCQgDgDgBgCQgbgeAAgpQAAgsAfgfQAgggAsAAQAjAAAcAUQAGAEAHAIQACACADACQAbAeAAApQAAAtggAfQgfAggtAAQgpAAgegbICYiY");
	this.shape_2.setTransform(15.1,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAJAAQAAANgJAJQgCAFgGACIAAg5QAGADACAFQAJAIAAAMg");
	this.shape_3.setTransform(20.6,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("ACWAAQAAA7gsAoQgtAqg9AAQg+AAgsgqQgrgoAAg7QAAg6ArgqQAKgIAKgHQAFgDAGgDQAJgFAKgEQAEgBAFgCQAWgHAZAAQAaAAAXAHQAEACAEABQAKAEAJAFQAFADAFADQAKAHAKAIQAsAqAAA6g");
	this.shape_4.setTransform(15,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhGBSQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbICXiYIiXCYgAhqABQAAApAaAeIAFAFIAFAFIgFgFIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsIAAAAgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAg");
	this.shape_5.setTransform(15,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhLhLQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfg");
	this.shape_6.setTransform(15,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBRICYiYQAbAeAAApQAAAtggAfQgfAggtAAQgpAAgegbgAAuAZQAGgCADgGQAJgIAAgMQAAgNgJgJQgDgFgGgDIAAA6IAAAAgAhMBMIgEgFQgbgeAAgpQAAgsAfgfQAgggAsAAQAjAAAcAUQAGAEAHAIIAFAEIiYCYIgFgFgAAuAZgAAughQAGADADAFQAJAJAAANQAAAMgJAIQgDAGgGACgABAgDIAAAAg");
	this.shape_7.setTransform(15.1,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhLhLQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfg");
	this.shape_8.setTransform(15,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAAABtQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAgAhGBSICXiYQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAhGBSIAAAAgAhLBNIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIiXCYIgFgFgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAgABRhGIAAAAg");
	this.shape_9.setTransform(15,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,30.1);


(lib.StruggleMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A0701").s().p("AAFAuQgGgDgEgHIgCgBQgOgigDgtIAAgDQAQgGgCAwIAAADQAKAgAZATIgCAAIgDAAQgIAAgHgDg");
	this.shape.setTransform(-172.7,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFBFA").s().p("AAAgBIACABIgDACIABgDg");
	this.shape_1.setTransform(-83,63.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262220").s().p("AggAGIgCgBIAAgCQgIABABgFQAPgVAagKIADAAQAMANAJAAQANgCAFAGQAFAHgcAIQgHABgFAIQgBAQAIAGIgEACQgZgJgRgSg");
	this.shape_2.setTransform(-144.5,93.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B1007").s().p("AgXgNIgFgIIACAAIAVAHQAPASASAQIABACQgjgIgRgbg");
	this.shape_3.setTransform(-150.6,74.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D6158").s().p("AAeAWQgNgEgVgNIgEAAQgMgFgJgIIACAAQABgHgGgDQADAAADgCIABgCQASgBAZAUIABACQgCAKgIgHQAKALAOAKIgDgBg");
	this.shape_4.setTransform(-104.2,20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D0806").s().p("AHoFhQAAgCACgKQAEgLAGgIQAHgJAKgFQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQABALgFAMQgFANgOAQQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAQgCAAgCgHgAnckWIgDgBQgagggMgtIgBgDQAUAVALAfIABADQAPAUAaAKIABACIgJABQgLAAgMgHg");
	this.shape_5.setTransform(-130.4,44.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#050403").s().p("AACA4QgVgUgCgnIAAgDQAMgfAcgQIABgCQAIAHgTANIgDABIgIAYIgCAAQgBAoAJAag");
	this.shape_6.setTransform(-15.3,32.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#141006").s().p("AAVAbIgEAAQg2gQgjgkIAAgDQBCAvBMAEIADAAQgNAGgSAAIgVgCg");
	this.shape_7.setTransform(-49.9,-7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333027").s().p("AgXgDIAAgDQAXgJAXAUIABACQgJACgIAAQgVAAgJgMg");
	this.shape_8.setTransform(-104.7,-13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DFDFDE").s().p("AgJASIABgDQAKgPgOgQIACgBIABgDQAIAAAJALIABgBQAEgCgCgIIACAAQABATgGAMIAAADIgCABQgEAGgDAAQgEAAgEgDg");
	this.shape_9.setTransform(-146.4,-76.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0DCD8").s().p("AgRAjQAJgNAHgOIABgEQAAgdAKgLIADAAQAFARAAATIgBAAQgLAbgXAKg");
	this.shape_10.setTransform(-157,-82.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E4E1DD").s().p("AgTAEIAAgDQAJgYAPgDIADAAQAKAMACATIgCAAQgLAWgJAAQgJAAgIgXg");
	this.shape_11.setTransform(-158.2,-89.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0D9D5").s().p("AgJgPIAAgEQAagTgKArQgDAOgGAHQgGgSgBgXg");
	this.shape_12.setTransform(-142.9,-90.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BDB7B3").s().p("AgGAvIAAgKQAEgZgLgUQARgQgNgUIgBgCIAAgDIgDgHIAKAAIADAAQAHAwAFA3IACAAQACAHgEACIgCACQgJgLgHAAg");
	this.shape_13.setTransform(-146.6,-83.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D6D2CE").s().p("AgVBCQAWgmgOggQgCgEAIgCQAHgcgDgfIgBgEQAGAAAEADIADABQAAATAMAGIABABQgNAcALAVQABAKgEAFQgKANgDAPQgEAZgJAAQgFAAgHgIg");
	this.shape_14.setTransform(-151.8,-81.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D1CDCB").s().p("AgGAmQgEgCgHAAIAAgEIgEgVQASgJAJggQAGgRAFARQAPAPgaAWIgDABQgFgIgBAkIAAADIgDgBg");
	this.shape_15.setTransform(-150.4,-92.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DBD6D4").s().p("AAAAlIAAgEQABg1gOA1IAAAEQgNgCAOgZQAQgdgYgbQAgAHAFAjIAAADQgRAdARACIABgBQAFgCgCAKQgHAKgFAAQgFAAgEgKg");
	this.shape_16.setTransform(-142.1,-79.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AgpGOQhKgThKgWIgBgCQhOgygyhNIAggmIACAAQBUAbB0AIQBcAIBfgdQAngVAqgRIADgBQA8A/BIA1IAAADIAAADIgDAAQgkAAg+AEIAAACQhuAlhZA7IgDgBQgLgCgNADQACADADACIACACQgIAEgMAAQgJAAgLgCgAjjj9IgBgDQBZgKBKgWIgCAAQgJgFAagIQA2gQAvgZQAvgZAoggQABAdAQARIAAACQAIgHgHgZQgDgIAGgFQAWAHgBAfIAAAEQgxAjgfAeIADgCQgFATgcAJIACgEQAXgMgNgCIgDAAQgUAPgPARIACgCIABgCQAHAIgSAQQhVBLhmA6QguhGgehXgAC3izQAWgVAPgcIACAAQgFAxgiABg");
	this.shape_17.setTransform(-105.6,-30.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FBFAF9").s().p("AgDAQIgBgBIgBAAQgKgFgMgBIgBAAQgGgFgEgEIgCgDQAtAFAkgRIgBADIgCABQgJAXgdAEIgDAAg");
	this.shape_18.setTransform(-119.7,-83.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9F9F8").s().p("AgVAfQgHgDgJgBIgBACQgKgEgIgFIgBgCQAeACATgIIAEgBQAcgSAcgWQAGgFgBAPQgCAegWAPIglAFIgRAAg");
	this.shape_19.setTransform(-120.3,-88.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0A0604").s().p("AALBFIgggKIgEgDIgOgMIgDgBIAAgBQgIAAgBgGIAAgCQgLgFgKgGIgDgBQgFgYgPgOIgBgDQATgNAWAQQAFADAHACIABgBQAIADAIgCQAMgDAMgEIACgBIAcgLQANgFANgGQAIgEAFgHIAHgFIAFgDIADgFQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAIAAAAAJQAAAMACALIACALQABAPgCANIgCAEQgEAKgFAKIgBACIAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIAAAAQgGALgJAIIgIAGIgLAGIgDADIgCAAIgFAAIgDABIgLABIgNAAgAgIAoQADAFAFAFIACAAQAMABAKAFIAAAAIABABIAEAAQAdgEAJgYIACgBIACgDQglASgtgGIADADgAACAZIARAAIAlgGQAWgOADgfQABgOgGAFQgcAVgeATIgDAAQgTAIgdgBIABACQAIAFAJAEIACgCQAIAAAHAEg");
	this.shape_20.setTransform(-122.6,-88);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C6BEB9").s().p("AgPgNIAdANQAGADgMAHQgHAEgEAAQgNAAABgbg");
	this.shape_21.setTransform(-107,-96.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CDBFBD").s().p("AgWgRIAAgEQAZgJARAiQAIAPgNAFQgYgGgNgjg");
	this.shape_22.setTransform(-107.3,-100.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D1D0C8").s().p("AAGgCQgJgEgIgBQgkgDgJgaQAKAMADgNIABgDQAJACABgGIABADQAIAUATAFQAbgBAMAXQACAEADABQAeATgWANIAAACQgigKgIglg");
	this.shape_23.setTransform(-106.4,-103);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CDC5C2").s().p("AADANQgUgGgOgOQAbgKAgAIQAGABgDALIgCAAQgFAJgRgCIAAADIgEAAg");
	this.shape_24.setTransform(-110.3,-109.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DBD9D3").s().p("AAqAqIgCAAQgYgZgSgaQgGAAgEABQgOADAAgEQACgagiACIAAgEQARACAFgIIACgBQAAAHAFABQASAGALALIACAAQARAiApAKIAAADQgBARgJAAQgDAAgFgDg");
	this.shape_25.setTransform(-103.7,-105.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#090604").s().p("AAhgRIgCAAQgWgIghAPQgNAGgEgNIAAgBIABAAQAogPAmAAIAAABQAPApgkAYIgDABQAAgbATgYg");
	this.shape_26.setTransform(-120.8,-96.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C4BEB9").s().p("AgOATQghgBgCgdQAegBAcgGIADAAQAPANAVAGIACABIAAADQgDANgLgMIgCgBQgPgMgeAJQgDAJAFADIABACIgBACIgCABIgDAAg");
	this.shape_27.setTransform(-115.7,-107.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DDDAD6").s().p("AAkAZQgRgIgSAIIgCgBQgQgMgJgBIgBgDQgFgLgPgUQAdgGARAUQACAEAHgCQAZgEANAWIgCAAQALAKgQAEIgDAAg");
	this.shape_28.setTransform(-105.2,-113.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C4BBB3").s().p("AAHAFIgDgBQgSAEghgGIAAgBQAegBAQgLIACgBQAgABAPAPIgCAAQgKAJgKAAQgKAAgJgIg");
	this.shape_29.setTransform(-115.6,-113.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D4D2CD").s().p("AAEAKIACAAQAZADAJgLIABgCQgZgOgbAQIgDABQgTAAgNgFIgDgBIgBgCIgJgIQAHACAAgFIAAgEQAQADAPAAQApgCAaAIQAFACAEAGIADADQAHAIgSAMIgDABIgogLg");
	this.shape_30.setTransform(-116.2,-117.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9FAF9").s().p("AgQgFIgBgDQAcgcAFAdQADAIgEAGQgCAFAEADQgJAIgHAAQgNAAgEgcg");
	this.shape_31.setTransform(-123.6,-104.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BAB8B0").s().p("AghgBIgBgBQAngGAdAHIABABQgIAGgPAAQgRAAgcgHg");
	this.shape_32.setTransform(-118.3,-111);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FBFBFA").s().p("AgegNIAAgEQAbgUAcAEIAGAGQgIAPgFATIgBADQgPANgQALIgCABQgQgQACggg");
	this.shape_33.setTransform(-134.8,-98);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B8AEAB").s().p("AgbAHQAVgRAbgDIADAAIAAAEQABAGgIgDIAKAHIABADIAAACIgDAAQgMAIgNAAQgNAAgOgHg");
	this.shape_34.setTransform(-123.9,-118.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C1BAB5").s().p("AgfAFIAAgCIAVgJIADgBQAVAFASAFIgBAAQgQAFgRAAQgOAAgPgDg");
	this.shape_35.setTransform(-120.7,-115.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCC4BE").s().p("AgcAAQAagRAWAHIAEABQAOAHgfAMQgHADgHAAQgNAAgIgNg");
	this.shape_36.setTransform(-127.7,-114.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DCD1D0").s().p("AgbAHIgEAAIAAgDQAWgPAlAFIADAAQgWAPgVAAQgIAAgHgCg");
	this.shape_37.setTransform(-130.9,-111);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BFB9AF").s().p("AgwAXIgBgDQATAKAAgRQAAgHAKgEIACgGQAkgKAdgRIAEgBQgeAjgnALIAAACQgHARgJAAQgGAAgIgKg");
	this.shape_38.setTransform(-135.3,-116.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DAD3D1").s().p("AglANQAYgZAwgCIADAAQgmAYglAFg");
	this.shape_39.setTransform(-132.3,-120.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D7D4CA").s().p("AgYAJIAAgEQAXgWASAFIADABQARALgiAHIAAACQgMAFgHAAQgHAAgBgFg");
	this.shape_40.setTransform(-130.5,-116.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DDD7D4").s().p("AgMAEIgBgCQgYADgKgNIgBgDQAjAEAYgEIADAAIAiAOIABACQgRAAgSAHIgDAAIgXgIg");
	this.shape_41.setTransform(-118,-121.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D7D4CC").s().p("AgaAIIgBgDQAZgKAagJIAEgBQgJAfgVAAQgKAAgOgIg");
	this.shape_42.setTransform(-127.1,-120.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D0CFCD").s().p("AgGA3IgMgNQAagaABggIAAgEQgcgMAWgWIADgBQAZA5gYAoIgBAEIgEAAIgJAAIADAHIAAADIgCgBg");
	this.shape_43.setTransform(-147.2,-93.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AFA8A5").s().p("AgCAMQgIgDgCAFQgJAPgFgTIAugkIACgBQAOAIgbASIgBABQAVgMgDAKIAAACQgUAUgKAGIgIACQAOgOgEgCg");
	this.shape_44.setTransform(-148.9,-101.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C7C2BE").s().p("AgcAiIgBgCQAlgXgOgrIACAAQAHgQAHAhIACAHQgGgWAFgTIABgEQAHAVAKASIAAADQgVAkgMAdIAAAEIgYgWg");
	this.shape_45.setTransform(-154.1,-95.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C7C0BD").s().p("AgaAHIgBgDQAegVAYAKIABACQgSAQgRAAQgKAAgJgEg");
	this.shape_46.setTransform(-159.2,-104.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CCC7C7").s().p("AgmAYQAlgQALgWIABgDQgXgFAkgCQAIAAAHADQgXAJAFAJIAAADQgdAWgeADg");
	this.shape_47.setTransform(-144.5,-109.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CDC9C2").s().p("AgUASIgBgCQAegaghAIIAAgCQAYgYANARIgDABQgNAFAGALQAQgHAGAHIgBAAQgPANgSAAIgLgBg");
	this.shape_48.setTransform(-145.9,-113.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DFDAD5").s().p("AgpAXIgBgCQAPgRAQACIABABQAWgQAagNIADgBQAJAIgZAJQgPAGgHAOQgRAKgRAAIgKgBg");
	this.shape_49.setTransform(-137.8,-120.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC9966").s().p("Al6R1QASgLAPgNIACgBIAAgDQBPhEBIhKIADgBQAQAPANATIACABQgFATgHASQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgOAMgUAHIgBACQhVAJgmA5IgCAAIgBADQgSALgNAAQgIAAgGgDgAFtR3IAAgCQgcgKgPgYIgCgBIgTgFIgBAAQhKgUhOgaQgUgGgYAJQgpAQgegUQgJgFAeABQAVABAOgEQgzgCgZgbIgBgDQAFgjAagPQAbgRAXgWQA2g2AYhWIACgIIAfiWQAJgrAagbQAZgIAQgRIABgDQgJgFgPAEIgEABQgngigwgZIgEAAQgUgdgVgIIAAgCIgngYIgDAAQgLgMgNgKIgBgDQgHAFgIgHIgCgBQhGg1hJgzIgDgBQAegxBAgPIAAgCQgDgKAagOQAygZBHADIgFAEQgfABAOALIAAgCIBAgYIgCgEIAAgDIACAAIABABQAcATAPAgIADABQCQB1BTDEQgMAVgOAmQhRDoieCcIgBADIgEAEQgDAFASgBQAFgMAKAGQAXANATAQQAhAcAnANQAmANArgCIAQgBIAagEIAAABQAYgBAHAOIABADIACAHQAFAEABAGIgBAFIgDAFIgCAAIgGAAIAAAAQgFgEAAgHIAAgFQgLgTglAFQAAAIAEADQADADAGgCQAOgFACAOQABAHACAFIADADIAFABIADADQAFAHgIAHIgEADIgHAAIgCgCIgCgCIAAgBIAAgBIgCgCIAAgCIAAgEIACgCIABgBIgCgDIgBgCQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQgFgNgOgEQgJgCgKAAIAAACQgHALgFABQgIACgTACQgTABAJAOQA1gEgJAnIgCAAQgHAHgMAAIgJgBgAB4ObQgKAFgHAIQgHAIgDAMQgDAJABACQACALAFgGQANgPAGgOQAFgMgBgKQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAgAGhRyIAAAAIgCgBIgCgDIAAgCIABgFIAEgEQgBgJgCgHQgEgLgKgFIgBgDQAYgGAHAQQACAFAAAIIACAAIABACQAHALgMALIgFADIgJAAgAoMRpQgIgGABgRQAFgHAHgCQAcgJgFgHQgFgFgNABQgJAAgMgNIgDABQgbAJgPAVIgDAAQgQgIABgJIABgCQAogRgigFIgCAAQgTAYgfgEQACgRANgEQAUgGADgEIAAgCQgngLgQAfIgEgBQgXgNAUgSQAMgEAJAAIAqABQAiABAfgBQBLgDA3gWIgBADQgnAyglA0IgCABIgdAdgAlsOjQAJgYgTgDIgEgBQg7g8hGgyIgDgBQgEgRgLgKIgDgBQgEANgWgTQh0hih6hbQgTgOAAggQAthbA8hIIAAAGIALgDIADgBQAPANANgCIAEAAQAYAWAgAPIADABQApArAtAmIABADQgcAVgZANIgDABQgGASAMAOIABADQAKAIAKAHIABACQBeAgA0BJQAoA5AmA7QAMASAQAQQggA2gqAqgAkmBEQglAAgegHIgUgGQgbgIgLgYIgBgDQAZgYgKgfIgBgDQADgRAjgFQCPgVCFgbQAIAEAZgGQAsgMAtgHQAFAmgRAjIgCAAQAGAvgaAJIgEAAIAEAfIAAADQg0AOg5AIQhRAMhbAAIgJAAgAilAbIABADQAMASAkgHIgBgCQgQgOgRAAQgHAAgIACgAlzimQhfhBhkg7QgNgngJgpQgJguAKAWIACgBQAEgIgNgaQAOgXARgUIABgBIAEgFIAAgBQAYgdAegXIABgDQAigWAgAGIAAgBQAMgIAEgMQABgCgBgKQAAgKAMADQgKgKgUgFQgHgCgFgHQAEgNAXAQQAEAEAHACQANAFAMAHQA8AKBBgaQATgIAQgLQASAEAUgbQAFgIAKAKQAJgHgSgLIACAAQARgngCg6QAAgGAGgBQATgRAUAPQACABABgKQgKgbAeAQQALAGAHgFQgigHAagQQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQATADAGgGQAMgEgFgHQA+gwBegSIADAAQBNhDBcg0IADgCIAAAAIABgBQBrg8B/gqQAfgKAsgDIAAAAIACAAIAMgBQBGgDA1gFQAhgCAVAPQAVAQAPAWQgwALg1AGIgEAAQgMgVgagHIgEAAQAMAVAPAjIABADQgPAageACIgEAAQgMgHgIgLIgBgDQAEgfgWgRIgDAAQgKgGgCACIAAAAQgBACAIALIACABIABAUIgMABQiZAZiBBCQguAXgDAyQAGAEgDAJQgFANgSAVQghAog5AMQg8AOghAlQAGABADAIQABADgGAFQhGA6hBA9IgDgBQgPgTgfgEIgCAAQA5AoA1AvIgDABIgSAUIgWAFQgkAJAXAEIgBACQgiAVgqAPIgBgDQgMgMgLgNIgDABQgNAEAXATQAFALgPAFQhOAdhaAVQgYAGgLgQQgFgIAAAPQAAAKgBgCQgNgWgJAHQArBoA7BXIADABQAUgGAZgQIAAABQBkhPBrhJIADgBQgFgSAagVQAhgcAngYQgBgxgaguIgBgDQAGgfALgZIAAgDQAWgSAYAAIADAAIAGAJQgSAIgMALIADAAQA3gPBDgUIADABQAOALAIAQIgBADQgQAVgSASIADABQAWAMANAWIgCABQgZAVAGAUIADABQAbAVghAQIACAAQAAApgvAMIgEAAQgSgCgKAFIgCABQhCBahVBGIAAADQgHASgYARIgDABQhwAUhrAYIhLASIAAgCgAgujtQAhgmArgJIAAABQAEASgKASIgBADIhFAJgAl6pYIAAgCQgxgXgtgKQADAHAEAFQgEgCgHAAIgEADIABgBQAKgagNgEIAAACQgTgHgQgeIAAgDQANgbAEgkIgBgDQgNgUgDgdQAJgOAMgKIADgBQAMAnAYAeIADABQAEABADgFQAEgEAEgJIACAAQAugGAIgdIACAAQgCgGgEgHQgGgIgIgIQgQgPALgXQgNAAgNASQgEAGgBgGIAAgHQgLgggDAnIgBACQgHAJgJgIQgMALgPAGQgDABgEgDQgHgDgBgIQAKgbAVgBIAEAAQgWgZAggFIAAgBQgKgOgaALQgFABAGgGQACgCgCgIQAJgXAUAaIADABQASgDANgHIADgBIAAAEIAAABQgGACgEAEIAjANIADABQAkgWA9ANQABAAAAAFQgOABgZAMIgDABQgTAgAMAfQAEAKAIAKIACABQAUgKAfgKQAfgLgBgZIAAgLIACAAIABgDQAMgGgCAMQgGAYAiAFIABADQATATgCAbIADADQAaAcgJA1QgOBNg+AcIgDACQglAQg1AAIgagBgAmgrdIABADQAPAOAFAZIADABQAKAGAMAFIgBACQABAGAIAAIAAABIADABIAOAMIAEADIAhAKIANAAIALgBIADAAIAFgBIACAAIAEgDIAKgGIAIgGQAJgIAGgLIAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgBIABgCQAFgKAEgKIACgEQACgOgBgPIgCgLQgCgLAAgMQAAgJgIAAQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgDAFIgFADIgHAFQgFAHgIAEQgNAGgNAFIgcALIgDABQgMAEgMADQgIACgIgDIgBABQgHgCgFgDQgMgJgLAAQgJAAgJAGgAkNsxIABAAQgSAZgBAcIADgBQAkgYgOgqIAAgBQgnAAgpAPIAAAAIgBAAQAFAOANgGQAWgKASAAQAIAAAIACg");
	this.shape_50.setTransform(-90.6,-16.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#110903").s().p("AhVAbQBHgrBjgLIAAACQhTAdhXAYg");
	this.shape_51.setTransform(-63,-128.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0C0803").s().p("AhhAeQAjgTAlgOIAAAAQA6gXBBgMIAAACQgGAIgaAHQguANgpAQQgiANggARIgEABQgFAAgBgJg");
	this.shape_52.setTransform(-51,-128.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E3DFDC").s().p("AAAAAIAAAAIAAABg");
	this.shape_53.setTransform(-196.5,-15.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E6E1E0").s().p("AgBgEIADAAIAAAGIAAADIgDgJg");
	this.shape_54.setTransform(-204.8,-66.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FAFAFA").s().p("AANBRIABAAIAAADIgBgDgAgNhPIAAgEQALAGAGALIgOACIgDgPg");
	this.shape_55.setTransform(-199.7,-56.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0F0A06").s().p("Ag+AYQAJgMANgJQAYgRAjgHIAbgDIAGAAIAHAAIAEAAIgMADIgBAAIgFABIgFABIgDABIAAAAIgBAAQg9ARglAag");
	this.shape_56.setTransform(-203.5,-91.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEFEFE").s().p("AKWBoIACgBIAAABIgCAAgAppgEIgEgBQgfgfgKg1IgBgDQAKgSAMALQAMALATAHQgDASACAKIABADQAVAQgHATIAAADQgHAJgIAAIgGgBg");
	this.shape_57.setTransform(-123.6,-77.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EBE8E7").s().p("AgFArQgdgJASgXIgCgBQgFgCAAgHQAQgTAJgZIACAAQAEAhAOAHQADABgDADQgTAKgCAcQAAAFgCAAIgEgBg");
	this.shape_58.setTransform(-163.8,-84.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E4E1D9").s().p("AgJATIgGgLQAPgYAQgFIAAACQACAcgaANg");
	this.shape_59.setTransform(-162.2,-92.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E2DFDB").s().p("AgNAOQgEgFgFgDQASggAcAPIgCAAIgWAXIgCABIgDAAIgHADIgBgCg");
	this.shape_60.setTransform(-164.9,-95.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#120C05").s().p("AglAuIAAgCIABgBIABAAIAKgEQAWgKALgNQASgSAAgaIgCAAQAHgTAHADIAAACQABAegOAZIgBADQgQAVgVAGQgKADgKAAIgCAAIgCAAg");
	this.shape_61.setTransform(-191.7,-103.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF99").s().p("AiPHeIgDAAQATgRAYgRQA3grAIhXQADgdgDghQgKiOgvhuQgLgZgFgbQgFgagCgaIgBgIIAAgCIgBgHQgCgkAEglQAMiGBYg+IABgBIAGgEQAYgRAfgEQAVgEgLgMQACgJAMgBIAMgBIANgBIAFgBIADAAIAAAAIAFgBIgDAAIgBgBIAAAAIgBgBIgBAAIgGgEIgKgDQgKgDgGACIABgDQAHgKADgKIAGACQAAAIACADQADADAFgBIAKgEIABAAIADAHIgBABIgCAAIAAACIAFAAQAKAAAJgDIALArIgIADQgJAEAUALQACgBABAAQACgBAAAAQABAAAAABQAAAAgBABQgIAGgYgDIgBgDQgBAAAAgBQgBAAAAAAQgBAAAAABQgBAAAAABIgCACIAAAAIAAACIgBADIgCAAIgDABIgEAFIgCADQgGACgEAFIgDgBIgBgBIAAgBIgBgBIgCABIgEABIgBgCIAAgDIgBAAIgDAAIgBABQgwAMApgXIACgCIAAAAIAAAAQhOAbgrBEQgxBNAJBXIgCABQABAPgGAGIABAEQAPA0AZAsQAoBIAMBkQAKBRgHBNIAAACIgEAfIgBAIQgLA9gmAlQgaAZgiAAQgKAAgLgCgABMmeIgHAAIgaADQgkAHgXASQgNAJgJAMIAAABQAlgcA8gQIABAAIABAAIADgBIAEgBIAGgCIABAAIAMgCIgEAAIgHAAgAgpG9QAagkAIgxIABgBIABgIIACgaIAKi5IABgaQADg1gBgyQAAgegCgcQgEgygIgtIgBgDQgEgWgGgVQgGgWACgWQABgOAFgNQALgfACgbIACAAQAZgjAsgQIABgBIAFALQgZASgVAUIgBADQgZAmgMAyQAAAUADAUIAAAAQACAWAFAUIABADIAHAWIACABQADgOAEAfQADAXALASQAEAHAGAHIABABIAHgBQAMBEAIBIIABADQgNAPASAlQAOAcgFAcQAAAAAAAAQgBAAAAAAQAAAAgBAAQgBABgBAAQgCABADAGQACAFAIAIIAKALQAFAegDAaIACAAQgTBphCApIgBgBQAqg8AIhjQADgjgEgeQgIg7gkglIABADQAUAgALAqQAIBRgVBXIgDAJIgDAKQgZBLhDARQgEgFAPgVgABeFvQAVgxABhGIACAAQAOBOglApgAgsAEQggg6gSg5QANALgJgqIAAgDIANgdIABgDIgCABQgMAbgEgOQAMh1BDgqIAFgJQgHAPgOAqQgLAjgOAiQAIAKgBAgQAABLAYA1QAiBOgJBaQgOhKgeg3gABMAqQgLhJgNhHIAPgCIACAAQAVBHgOBLgAgLgSQgTg5gLhDIgEgcQAGg5AOgwQgLBNAYBHQARAyACA5QABAXgCAZQgGgQgLgegAAWiUIAAgCQgBggAEgiIAGABQAIAVgFALQgCAGgIACIAAACIAGAXQAMAxAJAzIgHABQgTgugDg1gAiSjbIAAgDQASgrgDA5QgCAhgGAoQgKgkADgwgAAAjiIAAgDQAIggAPgYQgNA3ADBUIgDABQgLgiABgvg");
	this.shape_62.setTransform(-205.9,-52.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0C0805").s().p("AhMIBQgygRgogaIAAgCIAhAOIABABQAUAEATgDIADgBQAwgXAegqIACgBQAzilg/idQgihSgShcIgEgXIgBgHQgGgigEgkQgDgdAKgVQAuhwBkg2QAmgUAXgTQgTgIAWgbQAIgKgEgRQgCgIgGgIIABgCQAKgCAHAQIABADQADAUgFARQgEALgHAJIgBADQAHgCAJADIAKAEIAGADIABAAIABABIAAAAIABABIAEAAIgGABIAAAAIgDABIgFAAIgNABIgMABQgLABgDAJQALAMgVAEQgfAEgYARIgHAFIgBAAQhXA+gMCGQgDAlACAlIAAAGIAAACIABAIQACAaAGAaQAFAbAKAZQAuBuALCOQACAigDAdQgIBXg2AqQgYARgTARIADAAQAvALAhgiQAmgkALg9IACgJIADgfIAAgCQAHhMgKhSQgMhkgnhJQgZgrgPg0IgBgEQAGgGgBgPIACAAIAAAAQgIhYAvhNQArhDBPgcIAAAAIAAAAIgCACQgpAXAxgMIAAAAIADgBIgCACQgGAHAIABIAAAAIAKgBIAAACIgJADIgCAAIgBABQgrAQgaAjIgDAAQgCAbgKAfQgFAOgCAOQgCAVAGAWQAGAVAFAWIAAAEQAJAtAEAxQACAcAAAeQABAzgDA0IgBAaIgKC5IgDAbIgBAHIgBABQgIAygZAjQgQAVAEAFQBFgQAZhMIACgKIADgJQAVhXgIhRQgLgqgUggIgBgDQAkAlAIA8QAEAdgDAjQgHBkgrA7IgCACIAAADIgCABQgVAZgdAQIgEAAQgUAAgNgHQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQggANglAGIAAgCgAASAXQAeA3AOBKQAKhagjhOQgXg1AAhLQAAgggHgKQANgiAMgjQANgqAHgPIgFAJQhBAqgMB1QADAOAMgbIACgBIgBADIgNAdIAAADQAJAqgMgLQASA5AeA6gAARiXIAEAcQALBDAUA4QAKAfAIAQQABgZgBgXQgCg4gRgzQgYhHAKhNQgOAwgGA5gAhTjLIAAADQgDAwAKAkQAHgoABghQACghgFAAQgEAAgIATg");
	this.shape_63.setTransform(-212.2,-54.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0B0705").s().p("AggApQgDgDABgIQAogYgYglIgCgBQAQgQAHAnIAAgCQgIgjALAFQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQACARgDAPQgEAMgIAMIAAACQAOgFAGgNQAHgNgDgXIACgHQASgCgDATIgBAEQgFARgIAMQgLARgPAKIgJAEIAAAAIgKAEIgEAAQgDAAgBgCg");
	this.shape_64.setTransform(-194.1,-103.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#060400").s().p("AgEAZQgNgCgHgIQgDgFgBgFIgBgEQAPgbAoAAIAEAAQgMANgdALIgEAAQAOALABAIIAAACQAAAFgEADg");
	this.shape_65.setTransform(83.9,123.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#070301").s().p("AgEgSQAAgCgGgEQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAQgEAGAKQAEAKgHAVQgEALgFAKIgDgwg");
	this.shape_66.setTransform(120.6,109.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0C0804").s().p("AgyAWQAygVAmgfIANgDIgBAEQgGASgSAGIAAAEIgDABQgOAJgKANQgHAAgFADQgNAJgJAAQgKAAgFgMg");
	this.shape_67.setTransform(48.7,63.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0E0B09").s().p("AgbBwIAAAAQhkgHhOgJIAAAAIAAgEIgZh9IAnACIAzABQBGgCBKgLIADgBQBagNBBgdQAKgFARAAQASAAACgPQAEgNADARIABADQgBA1ADApIABAEQAKAJAAAVIAAAEQgRgGgWAXQgTATgfALQg8AVhRAFQgJABgHAFIgLAAgAjOAhIABAGIAMAjIACABIAiAHIAPAHIADABIAOAFQAYAHAYgDIALgCIAcgFIAJgCQAYACAWgFQAFABAJgCQAKgCAGgJIAEgBIgCAEQAMAJAagKQARgGANgKIABgBIABAAIADgBQADANAggOIAEgBQAYgTAYgUIAAgDQgDgugCg2IgCAAQgdAQgjAKIgiAIIgRAAIgGABIgiAIIgLACQgIACgHAEQglAHgnADIgeACQgfACgfAAIgmAAIgigCQAFAcAIAbg");
	this.shape_68.setTransform(16.4,57.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#070503").s().p("Ag7AkQBKgXApg5QADgFAAAFIAAAEQACARgCAHIgDABQgJAMgNAHIgCABQgfAbguALIAAADIgDABIgEAAQgJAAACgLg");
	this.shape_69.setTransform(21.3,37);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#201E17").s().p("AgGAJQgTgSgNgZIgBgDQAlAmApAjIABACQgbgLgTgSg");
	this.shape_70.setTransform(144,71.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#100905").s().p("Ag6goIgBgDQAaAQAgAZQAVARAbALQAMAEAAAOQhGgWgvg+g");
	this.shape_71.setTransform(87.6,77);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#669900").s().p("A6BAmQAXgEAYgBQgXADgYAEIAAgCgAiGACIgBAAQAZACANAPQgUgGgRgLgAZbgTIALgDQAMgFAKgHIAGgFIgcAeIgLgKgAUPgQIAAAAQABgGAAgFQAAgEgCgCIABgBIAKAIIgOAQIAEgGg");
	this.shape_72.setTransform(-13.1,63.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#080402").s().p("AgrA4QAug2Ang+QAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIgBABQgWA8gjAvQgLAPgJAAQgFAAgEgGg");
	this.shape_73.setTransform(106.6,7.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0B0A07").s().p("AABARQgIgLgCgQQAKgOAFAGQAFAGgBAZQgBAIgDAAQgCAAgDgEg");
	this.shape_74.setTransform(173.4,99.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0B0604").s().p("A01BYQgjgRgWggIAAgCQA1A0BWATIABACQgxgEgigSgAUiAeQAzg3AYhUIACAAQgNBhhAArg");
	this.shape_75.setTransform(78.7,-24.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#060502").s().p("Ag+BqQBghIAbiMIACAAQgPCThuBDg");
	this.shape_76.setTransform(202.5,-30.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EBE9E7").s().p("AhAgDIAAgBQBNgBA0AIIAAACQg7gBhGgHg");
	this.shape_77.setTransform(195.7,-68.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#060401").s().p("AAIAOIgBgDQgMgJgDAJIgBAAQgSgNgKgVIAAAAIAAgDQAOACALAEIAGACQAeAMAOAcIAAADQgFACgFAAQgMAAgIgNg");
	this.shape_78.setTransform(196.5,-85.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#040302").s().p("AhBAUIgDABQgRgKgVgGIgBgCQALgVAcABQAkACAeAFQBCAKAigYQAHgHACABQACACgDAIIgBADIAAAAQgNAdgcARIgBACQhEgNg8ACgAg2AAIAAABQBFAIA7ABIAAgCQgxgIhHAAIgIAAg");
	this.shape_79.setTransform(194.7,-68.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#080504").s().p("AgZgCIAAgCIAKgDIAAAAQAXgEASAOIAAACQgMAEgKAAQgRAAgMgLg");
	this.shape_80.setTransform(217.7,-67.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#040300").s().p("AAAAKIgDgMIAAgEIgIgIQgGgHgDgKIgBgDQAIABAGAEQANAIAJAUIAEAKIABAEIABACIAAAJIgBALQgQgHgEgSg");
	this.shape_81.setTransform(207.8,-71.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#050302").s().p("AARATIgDgBIgdgNIgBAAIgfgPIgBgCQA/gWAfApIADABQgBAEgDADIgBABQgFAEgJAAIgNgBg");
	this.shape_82.setTransform(210.9,-79.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0A0706").s().p("AheDHQgBAAgBgFQgDgJgKAFQgPgIAOgKIABgDQASgIALgPIACgBQAgAJAfgYQAZgTAKgTIABgEQACgDAAgDQAegJAjgJQAXgFAHgPQADgIAAgJIgBgEQgXgVglATQgNAHgDgMQAKgWggASQgLAGgGgGIADgEQAJgPAXgRQANgJAMgLIADgDIADgDIACgCIACgCQAPgQANgSQgIgggagPIgBgCQguAHgPgOIACAAQAFgHgCgDIAAgBQgDgFgUACQgjAEgSgHQAPgRAbgEIAEAAQg0gIgsALIgNACQgFACgDgDQgCgCAAgGQAXgJAZgEQAkgGAqAFQASADAMASQgRAEABADIACAAIAMACIAAAAQASAEAKAOIACABQAkABAUARQAHAFAFAIIACAAQAHAUgHAQIAAADQgVAagYAYIAAABIgMALIAAAAIAPgFQAWgHAXgHIAAACQgFAiAUAUIADABIAAABQAAASgEANIgCAGIgBAAIgFACQgJAFgFAJQgWAMgaAHIgDAAIgMAMIgWACIAAABIgJACIgEABIgCABIgDAGQgBAFABAEIABAFIgDACQgvAbgqAhIABAEQAKAGgFAAQgEAAgOgEg");
	this.shape_83.setTransform(210,-71);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B3ACA6").s().p("AgZgLIADAAQAVAEAQAHIABACQAFADAEAFIABACIgEAAQgaAAgVgXg");
	this.shape_84.setTransform(206.1,-97.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AweM8IgDgCQgDgGAAgGQgDAAgCgDIAAgJIgcABIgCAGIgCAEIgEAGQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgDgBIgDgBIgCgBIAAgBQgBgFAAgFIgCgCIAAgCIgCAAQgQAAgHgLQgDgFAGgDQAGgDAIACIAIACIABgLQgUgDgTgIIgCgFIAAgBIACgEQAOgFARAHIAHABIABAAQgBgOgHgMQgCgDACgCQADgDAEAAQAQADACARIABAQQASABARgDIACgfQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIABAAIADgBQAMAIgDARIgBAIIASgFIAEgCIADgBQAPAHgNAKQgDACgEABIgVAGIgBANIAEAAIAbgBIABAAIABAAIABgBQADgCADAAQAHADABAEIgBADQAAADgEAEIgEADIgDABIgEABIgZAAIgEAAQADAFAAAHIgBAIIAAABQgBAFgDABIgCABIgGgCgAxLMRIAjgBIABgKQgSADgRgBIgBAJgAvBMnQgLgBAEgKQACgEAFgBQAUgBASgDIAAgCIABgiQgFgJAAgMQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgKAOgPAKIgFAAQgPgEALgJQALgKAIgNQAJgKAJgHIAEgCQAMAGgBAQQgBALACALQAEAVgCAWQAXgGAVgKIAFAAIAHADQAGAFgLAJQgGAEgIADQgWAIgXAEIgCABQgVADgVAAIgDAAgARWnyIgLACIACgHQAEgNAAgSIAAAAIgDgBQgUgVAFgiIAAgCQgXAGgXAHIgOAFIAAAAIAMgLIAAgBQAYgYAVgaIAAgDQAHgQgHgTIgCgBQgFgHgHgGQgUgRgkAAIgCgBQgKgOgSgFIAAAAIgMgBIgCgBQgBgCARgEQgMgTgTgCQgqgGgkAGQgZAEgXAKQAAAFACADIgFAOIgGgDQgMgEgOgBIgCgBIABgCIAAAAIAAgBIABgDIACAAQgFgRgHgIIgBAAIgCABIgGgMIABAAIAAAAIACgBIABAAQAcgNAngDQAMAAANgDQgYgdgqgJIgEgBQAdgCAwAGIADAAQAmAeAqAGIAEAAIAAgFQADgkAEAWIgDACIAAACIAPAJIAhATIASAJIAEABQAEgHAFAAQAEAAAGAEQAEAEAFAHQAJAMACAQQACAMAGAGQAFAGAIACIACABQALgFAFAPIAAAAQADAIABAOQABANAHAHQgJAWACAUIAAAEQAMgNANgUIAAABQgHAkgGAHIgBADQgFAYgOAcIAFAAQARgdARADIABACIADAAIgGAHQgYAdgKAfIgHgDg");
	this.shape_85.setTransform(113.3,-15.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#090703").s().p("AgIANQgDgDgCgFIAAgDQAHgWAJACQADABADADIgEAGQgFAIAIAGQAGAFAAADQAAADgHACQgJgBgGgFg");
	this.shape_86.setTransform(133.4,-9.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#080502").s().p("AhfA+IgFgGIgBgDQASgQgDgSIAAACIgbAFQgoAHgmgDQgRgBgSgDIAAgBQAnAAAXgQIABgCQA/ALBFgTQA5gRAkgoQA9ACAsgLIAAACQAqgRAPgKIADgBQgLAgg0AFQgqAEgxALQgPAOgTALQgsAZhAAIIgEABQgEAYgHASIABAAIAsAgIABACQgigCgXgeg");
	this.shape_87.setTransform(152.9,-16.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0A0703").s().p("AhhA9QBlg5BbhDIADgBQgPAPgQAPQhJBBhbAig");
	this.shape_88.setTransform(101.9,2.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00CC00").s().p("ABNElQAJgBAEgGIABgDQgFAAgFABQgKAFgKgCQhwgThKg+IgDgBQgRgFgLgMIgCAAQAFgWgRAMIgEgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIBWiEIABgDIAOgVIADAAQAWABgIgPIAAACIgDACQAPgjACgiIAAgCQgRAZgLAhIgCABIgMAJQglAfgnAdQguAigxAfIgBADQgIAJgJAEIgCABQgKAFgMgBQAGgKAIgIIAAgDIAAgDIAAgEQASgeAKgkIAAgEQAqg8AahQQALgmAOgoQAOgpACgJIgCgBQgCgCAAgEIgCAAQgCgGgDgEQAPgbASgZIACAAIAAgEIAAgDQAagMAWAQIABADQgCANgVgOQgEgDACAHQCGCgEEAlIAAACQgCAyghAhQgSAUgKAdQALgQAUgVIAAACQgNBEgvBCIgMAQQgkAxgrArIgFAFIADgCIAFgBQgCAbgKAJQgFAEgGAAQgIAAgJgFg");
	this.shape_89.setTransform(132.3,15.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F3D28D").s().p("AiLQIIgDgBQAFgUAPgLIAMgHIADAAQAaABALgGIABgCQgKgSgcAKIgEABQgKAGgHAIQgeAggFgnQAVgNAfABIAAABQAPgJgSACQgiADgagKQgCgJAKABQAhACgJgLIgDgFIAbgBIBLgGIAFAAQBCgHAmglIAAgDIAAgCQACgaAJgEIACAAQgFgPgLgPQgHgLgLgLQgUgHgQgKQgQgLgNgOQgUgUgVgTQg6gzg8gxQhohXhuhQIgQgNQgQgLgKgQQgNgVgFgcIAmigIABgEIACADQANALAQAHIAEAAQBLA7BqAeIAAABIAAABQghAUgZAXIgBACQABALAKAKQAFAEAHAFIABACQAwAQApAYIAAAAIAGAGIAOALQAMAKAKALIAHAIQAJALAMACQADgBABgCIAFAFQALALALANIAQASQA3BFAqBTIACAEQAkBKBHAmIAIAEQALAFgJAGQAxAUAxATQAoAPAUAgQAEAHAAAHQABAGgDAGQgnAeg0AAQgRAAgTgEQgMgCgKACQgIABgHAEQgzAfg0AcQgNAHgOAEQgpALgugQQgDgBgGAAIgDACIgHAGIgMAJQgLAGgMADIgEABQgdgEgUgNgACaNEQACARAJAKQAIAJAAgMQACgagFgGQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgEAAgIAKgAipINQAMAZAUATQAUASAbALIgBgCQgqgjglgnIABADgAARhnQgyACgngdIAAABQg3gPghgWIAAAAIgBgBIgBAAQgKgIgIgIIgCAAQASAgAnAOIgDgBQhCgVgqgtIgBgDIgDgLIgCAAQgDgLgFgDQgGgDgIAEQAEAXgagSQgcgTASAAQgHgJACgGQALgigNAfQABAGgDgFQgPgcAqADQg8gNhJgIQhSgJhHgSQgzgNghgQIADgBQANgFAWACIABgCQAzgQAngbIADAAQCaAOCTgZIAwguQAZgXAngIQBEgOBUgKQAJgPAVgGQAYgHgJgKQgTAAgVAOQgUANgYACQgtADglAIQhbASgtAvIAAgEQAUglASgoQApgtAxgjIBehCIAAgCQhLAYgyAzIgDAAQgoALgvADIAAgDIAwh+IAAgCIBYAJIAAgCQARgHAOgJIAEAAQASAAATgHIAKACIAOAAIBYAAQBAABAzAEIACAAIAIgmIAAgDQgJgQgMgNIAAgDIgCgTIAAgBIAAgBIAAgDQgIh2BwgaIACABQAHAgATAUIABgBQAGgUgOgOIgCAAQAZgLAdAHIADABQATARACgLIAAgCQglgTgygHIABgDIASguIACABIAAACIABABQAKAVARAOIACAAQACgJAOAJIAAADQALASAUgHIgBgDQgOgdgegMIAFgOQADACAFgBIANgDQAsgKA0AHIgEAAQgbAEgPARQASAIAjgEQAUgDAEAGIgDAKIgCAAQAPAOAugHIABADQAaAPAIAfQgNATgPAQIgCACIgCACIgEADIgCACQgMALgNAKQgXAQgJAQIgDAFQAGAGALgHQAggTgKAXQADAMANgGQAlgTAXAUIAAAEQABAKgDAHQgHAPgXAGQgjAIgeAJQAAAEgCADIgCADQgKATgZAUQgfAXgggJIgCABQgLAQgSAIIgBACQgOALAPAIQAKgGADAJQABAFABABIgIAMIgCAAQgFAfARAcQADAZgFARQgjB7hUBJQghAcglAaQguAegrAlQgZAVACgOQgDgIgMAbQgYA4gjAsIAAACQgRABgVAIQANgIgRAAgAgkjJIgEAHQgRAigMATIAAAFQASgRARgXQAagQAPgrQATgwgTgkQgKgBABAXQADA0gRAkQgSAlAEgcQAAgFgCAAQgBAAgDAEgAixjaIAAAEQAFAZATALQAGAEAIACIAHAAIgcgcIgBAAQAMgZAAgUIAAgCQgRALgLASgAhPjhIgBgCIgtggIgBAAQAIgSAEgYIADgBQBAgIAtgaQASgLAPgOQAxgLAqgEQA1gFAKggIgDABQgPAKgpARIAAgCQgtALg8gCQgkAog6ARQhEAUhAgLIgBACQgXAQgnAAIABABQARADASABQAlADAogHIAbgFIAAgCQAEASgSAQIABADIAEAGQAXAeAjACIAAAAgAj6j5IAAADQACAFADAEQAFAFALABQAGgCABgDQAAgEgGgEQgJgIAGgIIAEgFQgDgEgDAAIgCAAQgJAAgGAUgAG4soIABgCQAcgQANgeIAAgBIAAgDQADgIgCgBQgCgBgGAHQgjAYhDgLQgegEgjgCQgdgCgKAXIAAABQAWAGAQAKIAEAAIATgBQA0AAA6ALgAJEtDIAAACQATATAhgLIgBgCQgRgPgYAEIAAAAIgKADgAHmt/QADAKAFAHIAJAIIAAADIACAOQAGARAQAIIABgLIgBgJIAAgCIgBgEIgEgLQgJgUgPgIQgGgEgHgBIABADgAHpvBIABACIAfAQIAAAAIAfANIADABQASAEAIgHIACgBQACgDACgEIgDgBQgVgcgjAAQgSAAgVAIg");
	this.shape_90.setTransform(157.1,15.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("ADRE+IgBgEQgHgRgbgOIgDgBIgHgDQgWgLgVgNIgfgVQgNgDgLgFQgggQgjgJIgggIIAAAAQgmgIghgEIgHAEQgMAFgQAAQgfAAAKgFQgHgHAEgLIAAgBIANgjQAhhZAohRQATgngBgrIgCgCQgQAfgOAkIhJC1IgKAZIgBgDQgKgOgJgPQgIgPgHgQQgEAAgBgBQgUgYgbgQQhVgyhhglQCoiSC+h8QANgIAGACQADAGgHAMIgGAKQgfAsADBOQAHhMAdg4IACAAQABAqAPAaQgMgrAUghIAAgDQAVAIAVAYQAhAkA3ASQBLAYBfAFQBgAEBOgOIgBADIgCAEQALgHAEADIgBAAQgKARgHARIgLAaIAAADQALgSANgPIAAACQgPAaABAaIAAAEQgPAegLAkIgCAAQgKA6ghBAIgtBcIgQAhQgNAIgKAJIACAAQgLAngaApIgCABIAAADQgBAKgGAEQgFAEgJAAIgDAAgAGSh4QgnA/guA2QAKAOATgXQAjgvAXg9IAAgBQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAGYitQhaBEhmA5IAAAFQBagiBKhCQAQgPAPgQIgDABg");
	this.shape_91.setTransform(70.6,13.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#080603").s().p("AgYA/QALgbAAgXIAAgDIgBgKIAAgCQAbgQgfgPIgDAAQAKggAfgKIAEAAQAIANgbANQgQAIALAIQAdANgaATIAAABQgDAVgBAdQgBAagIAAQgGAAgIgNg");
	this.shape_92.setTransform(37.8,-66);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#080503").s().p("ALRGiQAMgTARgiIAEgHQAGgJAAAKQgEAcASglQASgkgEg0QgBgXALABQATAkgTAwQgQArgaAQQgRAXgSARgAscgRIgBgCQgHgFgDgHQAqAVAuAQIADAAQgZgbgPgmIACAAQAoAWAyANIAEAAQghgegpgWIgDAAIgWAMIgLAFQgEACgBgFQAGgWAWgEQAmgIgOgIQgYgIAUgIIAAgCQAogNgBgkIAAgDQgegEAMgOIAAgDQAkgOgEgjIAAgEQgaAIgMgMIgBgDQA+gSgHhFIgCAAQgRgLgUgGIACAAQAhgVgPgjIgBgEIADAAIABgDIACAAQAOApgNAWIADABQAdASgHAlIgBADQgOAYgRAVIAEABQARAFgDAaIgDAEQgBAFgCABQgeAWAWAUIAAAEQADAfgcASIgBAAQgBARgMAOIgBAAQAWAVAVAYIAEAAQAjgEgHAZQgEAFgHABIgDAAQgqAAgggNIABADQAYAYAKASIAAACQg8gCgsgig");
	this.shape_93.setTransform(78,-40.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#070504").s().p("AgTDAIgagMIgDAAQgOgagggJIgDAAQgHgXgIgSIgCgBQgUgDgKgOIgBgBIgBgDQgFgSAIgLIABgCQgUgLgEgaIAAgBIgBgOIAAgDIADgDQAUgWgZgcIgBgDIALgTQAKgOALgHQAAAAAAgBQAAAAAAgBQAAAAgBgBQgBAAgBgBQgFgCAAgHQAEgLAGgKQATgiAlgQIAEgBIAEgBQARAEAGgCIABgCQAagVAgAFIAAACQANAWATgBIADAAQAWAPAXAOIABADQAagCAHAQIgCAAQgVAGATAXQACAEAAAFQAWAIAGAXIAAAEQgMAeAVAnIgCAAQgQAhAdAlIABADQACARgIAIIgBADQgUASgLAbIAAAEQgTAQgUAOIgDABQgGgUgeAGQgeAGgLAWQgRgFgQgHgAgtCqIAAADQAfAEASALIAGgBQgFgOgbgKQgWgIgOgRIgBgDQgRgNAEgQIAAgBQAmAGAcAUIADgBQANgGAVAKQgBgqgXgmIgDgBQgRgJgVgHIgDAAIgxAYIgDABQgMAHgGgLIAAgEQANgiAggPIAEAAQAuACAWAaIgahFQgOgjgigNQgigNgbgTIAEgBQAcgJAtAGIABACQApAOANAoQAGgfgJggQgKgiAGgSQAOAOADAZIASCEIAAgDQACgYABgZIACgBQAIgYAEgcIACAAIAXgmIgEAAQgngMgZgbIgCgDIgEAAIgDABIgCAAQgTACgNAIIgBADQgHAPgNgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgggPgQAmQAbAKgTAFQgPADgHgLIgCAAQgMAMgBAMQAAAHAFAHIAHADQAGABgCABQgaANgRAUQADAiAZAMIgGACQgIADgHAFQgNAnAfAMIADABQADAEAAAJQgBAIgEAOQgBAGADAEQAtgBgGAnIAAAEQAFAOAXgDIADgBIARAdgAg2B7QAWAkA1ADIACAAQAAgbgCARIgCAAIgCADQgfgUgpgPIABADgACFAbQgfAKgWAVIAAADQgFAMgJAJIAAADQgBAfAPAWIABgDQAOgTARgRIADABQAaADAMgVIAAgDIgRg1IgDABgAg3AQQgRAKgOAOIAAACQAUgGASgKIADAAQAXAAAMALIACAAQgMgUgfgBIgEAAgABGAoQARgDAXgQQAWgQgNgDIAAgCQgiAKgPAegAA7hDIAAADQgDAcgHAZIAAADQgBASAEAbIACgBQAPgiAggNIAEAAIAjADIAAACQAGgTgUgLIgBgDQgBgPAJgUIgBgCQgegRADgUIAAgBQgZAMgVAjgAhThrQATACANAGIAAADQAhAeASAbIAAgEQgMgugngUIgEAAIgcAAg");
	this.shape_94.setTransform(-12.2,-72.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#070502").s().p("A3NQ8QgIgCACgNQAGgSAMgLIAKgIIADgBIgDAJIgSAtgAmHNFIgDgDIgFAAIgDgEQgCgFgBgGQgCgOgOAEQgGACgDgDQgEgDAAgIQAlgFALATIAAAGQAAAGAFAEIAAAEIAAAEQgFACgFAAIAAAAgAXNhuQgHgCgHgEQgTgLgFgZIAAgDQALgTARgLIAAACQAAAVgMAYIABAAIAcAcgAAYmNQgYgygSg2IgaAeQgZAdgagHIgCAAQANgXANgrIgCABQgeAZglAQIgEAAQgYgCgSAGIAAgCQgOgEgHgJIAAgBQAfAFAggVIABgDQAcgsAegaIAAgCQgVgDgbgGIgBgDQgHgagpAPIgEgBQgNgFgEgPIAAgKIAAgHQgaAOgXgRIgCgBQgHgeAQgZIAAgCQgUALgWgGIgCAAQgEgUAJgZQgRABgRgJIgCAAQACgjAYgRIgDABQgnALgRgZQAggaAlgVIAAgDQgegUgOgkIgBgDQAegHAeAKIADAAQgQgXgPgZIgBgEQAagHAbAHIADAAQgJgYgDgcIACAAQARAHAgAKIADAAQgEgqAWgPIAAABIAcAUIADACQAVglAggIIADgBQAFASAMAIIAAgCQAhgYAlANIAEABQAGAbAigRQASgIAKAJIAEAGQgFAhAfAIQAIACABANQAOAOAUAKQAGACACAJQgGAfATAJIABACIgBADIgDAAQgGgJgKAIQggAZAGgfIADAAQAggWgVgdIgDAAQgzAHATgnQgDgEgEAAQgqgDAPgcQgBgGgBABQgagIgcANIgBgCQgOgHgFgQIAAgBQgeACgeAVIAAABQgWABABgYIgCAAIgBgDQgcAXgcAaIgCgBQgLgdgPAJIAAAEQACA5gvgXIgEgCQgHAYASAUIAEABIgEAAQgegFgeAIIADABQAOAbAWAVIAAABIhJgJIAAADQAaAnAhAgIgEAAQgpAAgcAgQAfAAAgAKIADAAQghAVgEAfIACAAQAVgMANANIABACIgOArIAAADQAcgLAVgCIADgBQgJAhgEAlIgBAEQAggMAYgBIAAACQgLAfATAKIADABIA0gQIAAAFQgHAsAigYIABgCQAXAWAVAYIABACQgRgBgSAAIAAABQgWATgMAcIAAADQAkggA2gMIAAABQACAGgEAEQgEAEgLACIAAACQgKAXgHAaIgBADIAygvIADgBQAOAjAMAmIABADQAAgfAIghQAAgCAGAAIAHAAQgHAMADATQAIAwgPAoQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_95.setTransform(-5.4,9.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#050200").s().p("AgFAPQAXgMgJgDQgJgDgJADQgQAFgBgKIAJgEQAWgJARAIIAEABQADAOgFADQgPAHgJAAIgFAAg");
	this.shape_96.setTransform(77,-71.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00CC33").s().p("A1uN7QgKgFgCgOQARgMAPgPIADgBQAFArgYAHgAlnkTQgMgmgPgkIgDABIgyAwIABgDQAHgaAKgXIAAgCQALgDAEgEQAEgDgCgGIAAgBQg2AMgkAfIAAgDQAMgbAWgTIAAgBQASAAARABIgBgCQgVgYgXgWIgBACQgiAYAHgsIAAgFIg0AQIgDgBQgTgKALgfIAAgCQgYABggALIABgDQAEgmAJggIgDAAQgVACgcAMIAAgDIAOgrIgBgCQgNgNgVAMIgCAAQAEggAhgUIgDgBQgggJgfgBQAcgfApAAIAEAAQghgggagnIAAgDIBJAJIAAgCQgWgUgOgcIgDAAQAegIAeAFIAEAAIgEgBQgSgUAHgYIAEACQAvAWgCg5IAAgDQAPgJALAdIACABQAcgaAcgXIABADIACAAQgBAYAWgBIAAgCQAegUAegCIAAABQAFAQAPAHIABACQAcgOAaAIQABAAABAGQgPAbAqAEQAEAAADAEQgTAnAzgIIADAAQAVAeggAWIgDAAQgGAeAggYQAKgIAGAJIABAEQAPAjghAVIgCAAQAUAGARALIACAAQAHBFg+ASIABADQAMAMAagIIAAAEQAEAjgkAOIAAADQgMAOAeAEIAAADQABAkgoANIAAACQgUAIAYAIQAOAIgmAIQgWAEgGAWQABAFAEgCIALgFIAWgMIADAAQApAWAhAeIgEAAQgygNgogWIgCAAQAPAmAZAcIgDAAQgugRgqgVQADAHAHAFIABACIgHAAQgGAAAAABQgJAiABAfIgBgDgAoHs6IgEABQglAQgTAiQgGAKgEALQAAAHAFACQABABABAAQABABAAABQAAAAAAAAQAAABAAAAQgLAHgKAOIgLATIABADQAZAcgUAWIgDADIAAADIABAPIAAABQAEAbAUAKIgBACQgIALAFASIABADIABACQAKANAUADIACABQAIASAHAXIADAAQAgAJAOAaIADAAIAaAMQAQAHASAFQALgWAegGQAegGAGAUIADgBQAUgOATgQIAAgEQALgbAUgSIABgDQAIgIgCgRIgBgDQgdglAQghIACAAQgVgoAMgeIAAgEQgGgXgWgIQAAgFgCgEQgTgXAVgGIACAAQgHgQgaACIgBgDQgXgOgWgPIgDAAQgTABgNgWIAAgCQghgFgaAVIgBACQgGACgRgEIgEABgAmlneQg2gDgWgkIgBgDQApAPAgAUIACgDIACAAQACgRAAAbgAoRpYQAOgOARgKIAEAAQAfABAMAUIgCAAQgMgLgXAAIgDAAQgSAKgUAGgAlDqAIAAACQANADgWAQQgXAQgRADQAPgeAigKgAnurhIAAgDQgNgGgTgCIAAgCIAcAAIAEAAQAnAUAMAuIABAEQgTgbghgegAV6q6IAAAAIABAAIgBAAgAFCtAQAegGAcABIgVAIQgPAGgPAAIgmABQAQgEAPgGg");
	this.shape_97.setTransform(32.1,-8.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#060301").s().p("AgKBXQABgGgDgOQARhHgFhSIABAAQATAugMA+QgGAmgLAbIgBAAg");
	this.shape_98.setTransform(60.6,-99.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#040201").s().p("AALBqQgHhQgKhOQgBgJAAgQQgLgIgDgRIAAgDQAxA1gHByQgBAXgDAVIgGAAg");
	this.shape_99.setTransform(53.5,-101.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3E2917").s().p("AAGAsIgBgDQgTgjAAgqQAEAAACgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIADgBIABgDQAGAsAMAkIgCAAIgCAAQABAHgFAAIgBAAg");
	this.shape_100.setTransform(19.6,-95.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0A0603").s().p("AgiAaIgBgBIADACIgBAAIAAABIgBgCgAAfgaIABAAIADgBIABABIgFAAg");
	this.shape_101.setTransform(6.6,-101.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#FFFF00","#FFCF42","#FFFFFF"],[0,0.702,1],-826.2,-0.5,812.2,-0.5).s().p("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AAgCQgLgTgXgXIgBgDQAfAMAqAAIAEAAQAGgBAEgEQAIgagkAFIgDAAQgVgZgXgUIACAAQAMgOAAgSIACAAQAcgSgEgfIAAgDQgWgVAegVQADgCABgFIACgEQADgZgRgFIgDgBQARgVANgZIABgDQAHglgcgSIgDgBQANgWgPgoIgCgBIAAgCQgTgJAFgeQgBgJgHgDQgUgJgOgOQAAgOgIgCQgggIAGggIgFgGQgKgKgRAIQgjARgHgbIgDAAQglgNghAYIAAACQgLgJgGgSIgDABQgfAJgVAkIgDgBIgdgUIAAgCQgWAPAFArIgEgBQgfgKgSgHIgBAAQADAcAJAZIgEgBQgbgHgZAIIABADQAOAZAQAYIgDgBQgegKgdAHIAAAEQAPAjAeAVIgBACQgkAWghAZQARAZAngLIADAAQgXAQgDAkIACAAQASAJARgCQgKAZAFAUIABAAQAWAGAUgLIAAACQgPAZAHAeIABABQAYARAZgOIAAAHIAAALQAFAOANAGIADABQApgPAIAZIAAAEQAcAGAVACIAAACQgeAagdAsIAAADQghAWgegGIAAACQAHAJANADIABACQARgGAZACIADAAQAmgQAcgZIADgBQgNArgMAYIABAAQAZAGAZgdIAageQAUA2AYAygACpsWQAAABAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAAgBIgCgCIAAABgADstLIgBAAIAFABIAAgBIgEAAgApNlBIgBgCIgYhCIgBgEQAXgJATgNIAAgCQAWAyAJAsQABAGgHgCQgKAGgKAAQgLAAgKgIg");
	this.shape_102.setTransform(-13.9,-19.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF9900").s().p("AByOvIgOgEIACAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIADgGIACgEIACgGIAdAAIgBAIQACADADABQABAGACAFIADACQAGADADgCQADgBAAgEIABgCIAAgIQAAgHgDgFIAFAAIAYAAIAFgBIADgBIADgDQAEgDABgEIAAgCQgBgFgHgDQgCAAgDACIgCABIgBAAIgBAAIgbABIgEAAIABgNIAVgGQAEgBADgCQANgKgPgHIgDABIgDACIgSAFIABgIQACgRgMgIIgDABIgBAAQAAABgBAAQAAAAgBABQAAAAAAABQAAAAAAABIgDAgQgRACgSgBIgBgQQgCgRgQgDQgDAAgDADQgDACACADQAHAMABAPIgBgBIgGgBQgRgHgPAFIgBAFIAAAAIABAFQATAJAUADIAAAKIgJgCQgHgCgHADQgFADADAFQAHALAQAAIABAAIAAACIACACQAAAFABAGIAAAAIADABIgPgGIgigIIgCAAIgMgjIgCgHQgHgbgFgdIAiACIAlABQAgAAAegCIAegCQAngEAngHQAGgDAJgCIAKgCIAigIIAHgCIARABIAigIQAjgKAdgQIACAAQABA1AEAwIgBACQgXAVgZATIgDAAQghAPgCgOIgDABIgBABIgBABQgNAKgRAGQgbAKgLgJIACgEIgEAAQgGAKgKACQgJACgFgBQgXAEgYgBIgJABIgcAGIgLACIgOAAQgRAAgRgFgAEZNQQgBAMAGAJIgBAiIAAACQgTAEgTAAQgGABgCAEQgDAKALABQAWAAAWgDIACgBQAXgEAXgIQAIgDAGgEQALgJgHgFIgHgDIgEAAQgWALgWAFQACgWgFgVQgCgLABgLQABgQgLgGIgEACQgKAHgIAKQgIANgLAKQgLAJAOAEIAFAAQAPgKAKgOQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAgABuN+QARABARgCIAAAJIgjABIABgJgAm7ssIgEgCQgGgtAfAeIADABQgEgbAOAAIAAACQAVAwgIgzIABAAQAQgVAKANIACABQAGgOATgKQAcgOAHAYIANgSIABgDQAggFAXgOIAAgCIANgDIADANIACAAQAXAYAhgDIADAAQAVgMARgRIABgCQB2glCSALIAAABQjaBfkYAkQgcAEgXAAQgUAAgQgDg");
	this.shape_103.setTransform(-7.6,-27.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FDFDFD").s().p("AAMgJIAJAUIgBABgAgUgKIAFgBIgEAEg");
	this.shape_104.setTransform(-0.8,-114);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC00").s().p("AlqBvQgGgFABgNIABgFQgWANABgcQATgbAbgSIADgBIAAgDQA0gYA4gUIAEgBIAAgDQAtgPAugNIADAAIADgBQAigJAdgPIAMgBIAEAbIgMACQgTgEglALIgDAAIgBACQg6AIgrAWIgDAAQgeAKghAGIgBACIglAXIgDAAIgPAKQAOAxA7gHIABAAQBPgKBbgPQCvgdCVgjIAAADQgbAFARAEIADAAQAVgFATgGQA4gVArgiIABgDQgagjgsAAIgEAAQguACgsAGQgsAFgoAIQgnAIgNgPQBCgJBFgIIAAAAIBHgHIADAAIAEAAIAOgBQBEgEAkAdQACAUgIAPIgEAGQgLAPgWALQgnARgpAPIgIgUIAHAVQi4BFjhASQhBAFg7ACIAAAAIgBAAIgBAAIhGABIgUAAg");
	this.shape_105.setTransform(-25.1,-114.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FCFAFA").s().p("AAUAeIhng6QALgbAnARQAcAMAkABQAlAeAPAkIABADIgOACQgXAAgbgQg");
	this.shape_106.setTransform(128.5,-101.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#040101").s().p("AAyAeIgBgCQgxgfg2gKQgFgBAAgFIAAgBIABgDIAAgBQALgPAOAKIAEAEQAJAJAMACIAGACQApAKAVAaQAAAKgEAAQgCAAgEgEg");
	this.shape_107.setTransform(143.8,-113.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFF00").s().p("A2qL+QgGgPgcgGIgEAAQgbgbgegZIgCgBQgNgpgFgxIAAgEQAnAUgHgeIAAgEQByggBQhDIABgCQA2A6AyA+IAZAeQgWAPgvAGQh/APgrBjgA7OEkIAAAAQgkALgnAEQgGABAAgKQBng6BOhSIAAgDQAoASAwAaIADABQhuBOiRAsIgDAAQAjgNAggRgAhYAFIgBgDIgQgcIgEABQgXADgFgOIAAgEQAHgngtABQgEgEACgGQAEgNAAgJQAAgJgCgEIgEgBQgegMANgoQAHgFAIgDIAGgCQgZgMgDgiQAQgUAbgNQABgBgGgBIgHgDQgFgHABgHQAAgLAMgNIADAAQAGALAQgDQATgFgbgKQAQgmAgAPQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAMAEAIgPIAAgDQAOgIATgCIABAAIAFgBIADAAIADADQAYAbAnAMIADAAIgWAmIgCAAQgEAcgHAYIgCABQgBAZgDAYIAAADIgSiEQgDgZgOgOQgHASALAiQAKAggHAfQgOgogpgOIAAgCQgugGgcAJIgDABQAaATAjANQAhANAPAjIAbBGQgXgagvgCIgDAAQghAPgMAiIgBAEQAHALALgHIADgBIAxgYIADAAQAVAHASAJIADABQAYAmABAqQgWgKgNAGIgEABQgbgUgngGIAAABQgDAQAQANIABADQAPARAVAIQAcAJAGAOIgGABQgTgLgfgEgAAXhSIAAgDQAIgJAFgMIABgDQAVgVAfgKIAEgBIAQA1IABADQgNAVgZgDIgEgBQgQARgOATIgBADQgQgWACgfgAAFiwIAAgDQAHgZAEgcIAAgDQAUgjAZgMIAAABQgDAUAeARIABACQgIAUABAPIAAADQAVALgHATIAAgCIgjgDIgDAAQghAOgOAiIgCABQgEgbAAgTgAatmMIgDABQgEAFgCAEIgagLQAHgPADgTIgCAAQgIgVgYgDIgCAAQAugZAZgwIgDAAQgZAQgbgCIADgBQAfgJAAgnIAAgEQgIgZgeALIAAACQgPgFATgVIAAgEQABgagMgMIgDgBQgfgMggANIgEAAQgMABAXgMQgDgVgZgBIgugBQgpgBAGgKQACgEACgCQADgCAEAAIAEAAQAeABALgHIAAAAIgBgBQgbgNgggIIgggHQgZgEgagBQglgCgMgGIABgCQAygIAyAAIAhABIAAAAIAbACIADAAQAKAHADAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAIgGgCQA3gOA4APIAAADQAYAUgHgTIgCgEQBGAWAhA+IAEAAQAMAEAJAKIABAAQADgZAbgNQgBANgUALIABADQANASAcADIAAACQgsgEACAXIADABQAUANgJAgIACAAQAMAcgEAaQgBAMgFALIgHgBQghBAglA7IgBADQgDAEgCAAQgGAAgCgSg");
	this.shape_108.setTransform(-7.9,-55.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0A0704").s().p("AH8DAQAOgcAFgYIABgDQAHgHAGgkIAAgBQgMAUgMANIAAgEQgDgUAKgWQgHgHgBgNQgCgOgCgIIAAAAQgGgPgKAFIgDgBQgIgCgFgGQgGgGgBgMQgDgPgJgMQgFgHgEgEQgFgEgFAAQgFAAgEAHIgDgBIgTgJIghgTIgPgJIABgCIADgCQgFgWgCAkIAAAFIgEAAQgrgGglgeIgEAAQgwgGgcACIADABQArAJAXAdQgMADgMAAQgoADgcANIAAAAIgCABIgBAAIAAAAIgHAEQggASgQgOQAzgcBLgFIAAgCQgjgWgtgPIAAgCQAlgLAnAHQAQACAFgFIAqAMIAAACIgDAAQAWAbAegCIgBgCQgEgFgFgEQAOABgEgGQgEgIADABQAkAGAWAZIAKANIAAABQAEgDAGgMQADgCADABQAIAEAIAHQAHAOAOALIABACIABABIADABQAJAFAKAEIAYAWIAHAZIADAJIABAEIACAHIAAABQAHAcABgSQAFAKAGAJQAGAegOAeIABADQADAUAGgQIAAAHIAAAOIAAAAIgDAAIAAgCQgSgDgRAdgAoiieQgDgCgBgDQABgVAMgFQAMgGAWAKQAjAPAvAAQAaAkAfANQAEACACgGQAOAEgEAcIAAADQgKANgHAQIAAADQhdgvhYg1gAoZigIBoA7QAjAVAdgGIgBgDQgOgkglgfQglgCgcgMQgQgGgKAAQgSAAgHAQg");
	this.shape_109.setTransform(173.8,-88.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFCC99").s().p("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");
	this.shape_110.setTransform(-20.1,4.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0A0805").s().p("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KgJABgbIgEABIgEACIAGgGQArgqAkgxIALgQQAwhDANhEIAAgBQgUAUgLAQQAKgdASgTQAhgjABgxIAAgCQkDgliHifQgCgIAEADQAVAPABgOIAAgCQgXgQgZALIAAAEIAAADIgCABQgTAYgOAbQADAEACAHIACAAQAAADABACIACACQgBAIgOAqQgOAmgLAmQgaBQgqA+IgBADQgKAlgRAeIAAADIAAAEIgBACQgHAJgGAKQALABALgFIABgBQAKgEAIgKIABgCQAxgfAtgiQAogdAlggIALgKIADgBQALghARgYIAAACQgDAigOAjIACgBIABgCQAIAOgWAAIgEAAIgNAVIgBADIhXCEQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIAEABQARgLgFAWIACAAQAKAMASAFIADAAQBKA+BwAUQALABAKgEQAEgCAGAAIgBADgAK3FKIAAAAIAgAHQAjAJAhARQALAFANACIAfAVQAUANAXAMIAHADIACAAQAbAPAIARIAAADQAMABAGgEQAGgFABgJIAAgEIACgBQAagoAKgnIgBAAQAJgJANgJIAQghIAuhbQAghBALg6IACgBQALgjAPgfIAAgDQgBgaAPgaIAAgBQgNAOgMATIABgDIAKgaQAIgSAJgQIACAAQgEgDgLAGIACgDIABgEQhOAOhggEQhfgEhLgZQg4gSgggkQgXgYgUgHIgBADQgTAgALAsQgPgbgBgqIgCABQgcA3gIBNQgChOAfgtIAGgKQAGgMgDgFQgGgDgNAJQi+B7inCSQBhAlBVAzQAbAPATAYQACACAEAAQAGAQAIAOQAJAQAKAOIABADIALgZIBJi3QAOgjAQgfIABABQACArgUAnQgnBSgiBaIgMAiIAAABQgEAMAHAGQgKAFAeAAQARAAAMgFIAGgDQAiADAmAJgAg4FIIgBAEIgOAcQgBAuAsAGIADAAQAIASAaAHIAUAEQBCAJBLgNQBAgPAygdIABgCIAQgVIABgDIgCgqIgCAAIAAgDQgPgbgbgPIgDgBQgTgGgXgEQgUAgglAPQgmARgzgEQgvgFAFAZQgBAMgBgIQgCgZgXgDQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgUAoABg6IAAgCQgOADgRATgAGqFtIAGACIACgBIAHgFQAogdAfgmIACAAQAE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gBgEQAXAAgLgdQgCgJAGgFQASgOABgaIADgBIAWgYIACAAQgdgPgSAhQAFADAEAFIABACIgBADQgUAQAAgoQARgcALgjIAAgDQAVgPAbgZQAFgFAGAHQAegOgMgWIAAgDQAsgPAkgWIADgBQAIgkAmALIAEAAQAMgpArgJIAAABIAhgbIACgBQAgADAXgOIABgCIAtAQIAEABQAOgRAYASIABACQAVABAOgHIADgBQAnALAUAWIAAACQAUAIAWABIAAACQAFAZAegJIAAABQAPAEAJALIAAADQAdgBAIAVIACABQApABAOAbIAAABIAAACQgDAGgDADQgKAGgJgXIgDgJQgXAEANAQQAHAJgKgBQgUgSgXgGIgCgBQgOgXgZAEQgHACgDgEQgRgUgdAGQAPAUAGAMIAAADQAKABAPAMIADABQATgIAQAIIADAAIABADQANARASAMIADgBQAQgOAMAPIABADQAPAugegjIAAgEIgJgDQgigRgpgLQAcAKAHAgIAAADQAjAHATAYIACAAQAagNAbgLIAJgDQAlgOApgLIADAAQB+huCmhHQAqgRAsgQIAdgKQAYgHAegCQBpgJBJgDQAWgBARAHIAOAFQAYAUATAZIACABQBhgJBeAPIAEABQATAKAKAUIACABQAEAggOAOIgBADQAGAgAMAbIAAAEQBKACBJgPQBVgRA5AQQA3BcgIB/IgBAAIgDAMIAAAFIABAGIABABQgGAwgSAaQAWAIAiAIIABACQAKASgEAiIAAAEQBjgZBrAGQATAAAOgGQAmgSAogNQBZgcBjgBQAgAGAggDIAkAFQAcgkAfghIADgBQguglgdg5IgCAAIAAgMQAHACAGgEQABAGACAFIACAKIAAADQAzBLBSAsIgEgBQgbgKgWgRIgCABQgHAJgPAEIgBADQgZApghATQgngQg/ACQiwAGhuBDQhggNhWAQQgnAIAIAHIAFAAQAEAxgCA0IABADQAWAhAdAbIAEAAQBygEBVgcIACAAQASglAcgZQAMgKANgIQABABAAAAQAAAAAAABQABAAAAAAQAAABgBAAQgFARgUAWQg6A9gTBSIABACICOA5IAAgDQAUiNB7glIACgBQASgpAdgOIABAAQgRAjgWAfIgEABQheAXggBYIACAAQgHAXgBAdQgBAAAAAAQgBAAAAABQAAAAAAA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ABIgvAlQAFATAJgQQABgCAEAAIAFABgAv4wkQATAbAYAZIACAAQARAIABgWIAAgDQgpgKgRgjIgCAAQgMgLgSgGQgFgBAAgHQACgLgGgCQgggHgbAKQANAOAWAGIAEABQAigCgCAaQAAAEAOgDIAHgBIADAAgAzOwaIABAEQAGAsAcgXQgEgEACgEQAEgHgDgJQgDgOgIAAQgJAAgOANgA48wPIABACQAcANAbgaIgBgCQgHgDgIAAQgTAAgVAQgA11xiQglACAXAEIgBADQgLAXglAQIAAACQAegEAdgWIAAgEQgEgIAWgJQgGgDgGAAIgCAAgAyrxYIABABQA0AOASgMIgBgCQgQgEgUAAQgQAAgSADgA2xxfIABABQAZAGAUgSIABAAQgGgHgQAHQgGgLAOgFIADgBQgPgRgYAYIAAABIAMgBQAPAAgYAVgAxlxpQATAQATgRIACAAQgPgQgggBIgCABQgQAMgeABIAAABQAgAGAUgEIADABgA0Cx0QALAUAZgLQAfgMgPgIIgDAAQgHgCgHAAQgRAAgSANgA1ix1QASAWAMgcIAAgCQAogLAegkIgEABQgdARglAKIgCAHQgKADAAAHQAAARgTgKIABADgAyqyMIgVAKIAAACQAiAHAdgJIABAAQgSgGgWgFIgDABgA0ayGIAAAEQACAJAagJIAAgCQAhgIgQgLIgDgBIgIgBQgQAAgSATgAxGyCIAEgBQARgNgGgHIgDgEQgFgHgEgBQgagIgrABQgPABgQgDIgEAAQgcACgUATQAeANAXgPIADAAIAAgCIACABQANAGAUAAIACgBQAcgSAZAQIAAACQgKAKgZgCIgBAAIAnALgA11yiIABACQAVAEAYgNQAGgPAPgGQAagJgJgIIgDABQgaANgYARIAAgBIgDAAQgPAAgNAPgAzHzEQgbAJgZALIABADQAqAXANgvIgEABgA06ypIAAACQAngFAmgZIgEAAQgwACgZAagAyRy4IAYAIIADAAQASgHARAAIgBgCIgigPIgDAAQgZAEgjgEIABADQAKAOAYgDIABACg");
	this.shape_111.setTransform(-2.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.StruggleMain, new cjs.Rectangle(-229,-133.6,458,267.3), null);


(lib.trophywhystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACqAXQipARiqhB");
	this.shape.setTransform(82.6,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhOg2QBFBKBYAj");
	this.shape_1.setTransform(91.7,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AipAFQBcgRBZgsQBFBKBZAkQgjADgiAAQiGAAiIg0g");
	this.shape_2.setTransform(82.6,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.trophywhystill, new cjs.Rectangle(64.7,8,35.9,13.4), null);


(lib.trophywherestll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhABNQBThAAuhZ");
	this.shape.setTransform(-27.9,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ag5htQBjBqARBx");
	this.shape_1.setTransform(-40.2,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah6htID1BCQgtBZhTBAQgRhxhkhqg");
	this.shape_2.setTransform(-33.7,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.trophywherestll, new cjs.Rectangle(-47,16.3,26.6,24), null);


(lib.trophywhenstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTBPQgGgBAAgIQAAgtAegiIAYgaIAIgNIAHgMIADgEIACgBIAFgEQAFgGAGABIAFACIAAAAQABgFAEgCIAHgBIAAAAQASAJgCASIAGgGIACgBIAFAAIAAgBQAPAEABAHIAJgIQAEgDAGACQALAFgDAMIgGAQQgJAVgQAQQgjAwg7ASQgNAEgOAAQgKAAgLgCg");
	this.shape.setTransform(-62.5,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpBJQgHgIAEgNQALgbAPgYQAQgvAlgkIAEgCQAPAFACAKIgIANIgYAaQgeAiAAAtQAAAIAGABQAZAGAXgIQA7gSAjgvQAQgRAJgVQAPAOgPAVQg0BMhbAQQgaAEgZABIgBAAQgOAAABgMg");
	this.shape_1.setTransform(-64.4,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.trophywhenstill, new cjs.Rectangle(-75.4,14.4,22.1,18.7), null);


(lib.trophytostill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhEA2QAvhLBagg");
	this.shape.setTransform(-29.8,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhLhhQBqBhAtBi");
	this.shape_1.setTransform(-44.3,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiQhhQCaBBCHAXQhbAfgwBMQgrhihrhhg");
	this.shape_2.setTransform(-37.3,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.trophytostill, new cjs.Rectangle(-52.8,17.5,31,21.7), null);


(lib.trophybottomstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAzQgDgCAAgDQAAgEADgDQACgFAEAAQAHABgBAHQAAAFgBADQgDADgDAAQgDAAgCgCgAgNAZQgCgDAAgCQAAgFAIgHIAQgLQAJgIAAgGQAAgIgIgGQgHgHgHAAQgEAAgHAFIgIAEQgDAAgCgCQgCgCAAgEQAAgFALgFQAJgFAGAAQANAAALALQALALAAANQAAAKgGAHQgEAEgLAIQgKAHgDAFQgCADgDAAQgDAAgCgCg");
	this.shape.setTransform(40.9,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_1.setTransform(34.2,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_2.setTransform(27.4,9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgKgHgAgOgRQgFAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_3.setTransform(19.9,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_4.setTransform(12.6,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWAlIgWgcIgNANIgMAMQgCACgCAAQgDAAgCgCQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAIAGgGIAGgGIAOgOIgJgNQgFgIgEgDQgDgDAAgCQAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAEAAAIAKIALARIANgNQAJgIACgEQADgDADAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAEgGAHIgKAJIgMAMIAWAcIACAEQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_5.setTransform(5.1,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_6.setTransform(-3.1,7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_7.setTransform(-15.2,8.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_8.setTransform(-22.1,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_9.setTransform(-29.6,7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAPA2QgCgCAAgDIgFgOIgFgdIgEgcQgFAWgHAOQgJASgCALIABADQAAADgDACQgCACgDAAQgKAAAAgJIgCgIIgHghIgPgwIgBgDQAAgGAHgBQAEAAADAGIAFANIAIAfIAHAcQAHgQAHgYIAHgUQAGgPAFgBQAFABACAEQACAGADAWQABAMADAOIAHAbIAWg6IAEgNQACgIACgEQADgEAEAAQAHAAAAAGIgDAIIgCAHIgEAMIgUAwIgKAYQgDAFgEAAQgDAAgDgCg");
	this.shape_10.setTransform(-40.7,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgOAQAAQAOAAAHANQAGAKgBAOQAAAPgHAKQgJAMgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgagQAAQgJAAgFAKg");
	this.shape_11.setTransform(-56.3,9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIABgDIgBgKIAAgKIgCgaIgCgcIgGAAQgPAAgIgCQgGgBAAgGQAAgDABgCQADgCADAAIALABIALABIANAAIALAAIAPABIAQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgQAAIgPgBIgFAAIACAfIABAdIABAHIAAAIQABAEgCAEQgCAEgEAAQgCAAgCgCg");
	this.shape_12.setTransform(-64,7.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAzQgCgCAAgDQAAgEACgDQADgFAEAAQAGABABAHQgBAFgBADQgCADgEAAQgDAAgDgCgAgNAZQgCgDAAgCQAAgFAJgHIAPgLQAJgIgBgGQAAgIgGgGQgIgHgHAAQgEAAgHAFIgIAEQgDAAgCgCQgCgCAAgEQAAgFAKgFQAKgFAGAAQANAAALALQALALAAANQAAAKgGAHQgEAEgKAIQgLAHgDAFQgDADgCAAQgDAAgCgCg");
	this.shape_13.setTransform(-77.5,8.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAFAUIgEgQIgBgOIgFAMIgLAcIgCAEQgDAEgEAAQgFAAgFgUIgFgcIgBgKIgCgLQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCACAAQAGAAABAFIABAKIABAKIAFAeIAPgwQACgHAFAAQAFAAACAIIAFAZIAEAaIAGgTIAJgkQABgEAEAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAEIgOAxQgCAGgEAHQgDADgEAAQgIAAgDgSg");
	this.shape_14.setTransform(-85.7,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgOAQAAQAOAAAHANQAGAKgBAOQAAAPgHAKQgJAMgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgagQAAQgJAAgFAKg");
	this.shape_15.setTransform(-94.3,9.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgqA2QgCgCAAgDIABgVIACgWIgBgKIAAgMIABgQIAAgQQAAgDACgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAACACQABACAAADIAAAQIgBAQIAAARIAdgFQARgDAMAAIABgeIACgKQACgIAEAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQACACAAADIgBADIgBAIIAAAGIABAHIgCAUIgBATIABAQIABAPQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDAAgCgCQgBgCAAgDIgBgPIgBgQIAAgKQgLAAgRAEIgcAFIgCASIgBARQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_16.setTransform(-103.1,7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAzQgCgCAAgDQAAgEACgEQADgDAEAAQAGgBABAJQgBADgBAEQgCADgEAAQgDAAgDgCgAgNAZQgCgDAAgCQAAgFAJgHIAPgLQAJgHgBgHQAAgIgGgHQgIgGgHAAQgEAAgHAEIgIAFQgDAAgCgDQgCgCAAgCQAAgGAKgFQAKgFAGAAQANAAALAKQALAMAAANQAAAKgGAHQgEAEgKAIQgLAHgDAFQgDADgCAAQgDAAgCgCg");
	this.shape_17.setTransform(35.6,-13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAIgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgJgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_18.setTransform(28.5,-12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_19.setTransform(21.3,-12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_20.setTransform(14.1,-12.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_21.setTransform(6.1,-13.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAPA2QgDgCABgEIgFgMIgFgeIgEgdQgGAXgGAPQgJARgCALIABADQAAADgDACQgCACgDAAQgKAAAAgIIgCgJIgHgiIgQgvIAAgDQAAgGAHAAQAFAAACAEIAFAPIAIAdIAHAeQAHgRAHgYIAHgUQAGgQAFAAQAFAAACAGQACAFADAXQABALADAPIAGAbIAXg7IAEgNQABgIADgFQADgDAEAAQAHAAAAAHIgCAGIgDAIIgEAMIgUAwIgKAYQgCAEgFAAQgDABgDgCg");
	this.shape_22.setTransform(-4.9,-13.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSAzQgCgCAAgDQAAgEACgEQADgDAEAAQAGgBABAJQgBADgBAEQgCADgEAAQgDAAgDgCgAgNAZQgCgDAAgCQAAgFAJgHIAPgLQAJgHgBgHQAAgIgGgHQgIgGgHAAQgEAAgHAEIgIAFQgDAAgCgDQgCgCAAgCQAAgGAKgFQAKgFAGAAQANAAALAKQALAMAAANQAAAKgGAHQgEAEgKAIQgLAHgDAFQgDADgCAAQgDAAgCgCg");
	this.shape_23.setTransform(-20.7,-13.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_24.setTransform(-27.6,-12.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgYANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_25.setTransform(-35.1,-12.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_26.setTransform(-43.1,-13.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPA2QgCgCgBgEIgDgMIgGgeIgDgdQgHAXgHAPQgHARgDALIABADQAAADgDACQgDACgDAAQgJAAAAgIIgCgJIgIgiIgPgvIAAgDQAAgGAHAAQAEAAADAEIAFAPIAIAdIAGAeQAIgRAIgYIAGgUQAGgQAFAAQAFAAACAGQACAFADAXQABALAEAPIAFAbIAXg7IADgNQADgIADgFQACgDAEAAQAHAAAAAHIgDAGIgCAIIgEAMIgUAwIgKAYQgDAEgEAAQgEABgCgCg");
	this.shape_27.setTransform(-54.1,-13.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRAzQgDgCAAgDQAAgEADgEQACgDAEAAQAGgBAAAJQABADgCAEQgDADgDAAQgDAAgCgCgAgNAZQgCgDAAgCQAAgFAIgHIAQgLQAJgHAAgHQAAgIgIgHQgHgGgHAAQgFAAgGAEIgIAFQgDAAgCgDQgCgCAAgCQAAgGALgFQAJgFAGAAQANAAALAKQALAMAAANQAAAKgGAHQgEAEgLAIQgKAHgDAFQgCADgDAAQgDAAgCgCg");
	this.shape_28.setTransform(-69.9,-13.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_29.setTransform(-77.2,-10.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_30.setTransform(-84.6,-13.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAPA2QgCgCgBgEIgDgMIgGgeIgDgdQgGAXgIAPQgHARgDALIABADQAAADgDACQgDACgDAAQgJAAAAgIIgCgJIgIgiIgPgvIAAgDQAAgGAHAAQAEAAADAEIAFAPIAIAdIAGAeQAIgRAIgYIAGgUQAGgQAFAAQAFAAACAGQACAFADAXQABALAEAPIAFAbIAXg7IADgNQACgIAEgFQACgDAEAAQAHAAAAAHIgCAGIgDAIIgEAMIgUAwIgKAYQgDAEgEAAQgEABgCgCg");
	this.shape_31.setTransform(-95.6,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.trophybottomstill, new cjs.Rectangle(-110.7,-26.1,157.6,45.1), null);


(lib.Symbol214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAzQgCgCAAgDQAAgEACgDQADgFAEAAQAGABAAAHQAAAFgCACQgCAEgDAAQgDAAgDgCgAgNAZQgCgDAAgCQAAgFAIgHIAQgLQAIgIAAgGQAAgIgHgGQgHgHgHAAQgEAAgHAFIgIAEQgDAAgCgCQgCgCAAgEQAAgFAKgGQAKgEAGAAQANAAALALQALALAAANQAAAKgGAHQgEAFgLAHQgKAHgDAFQgDADgCAAQgDAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-5.3,6.3,10.6);


(lib.Symbol213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQAhIgBgOIgBgPIAAgGIAAgHQAAgPgFABQgIAAgGAJQgGAIgEALIAAAIIgBAGIABAGIAAAGQAAADgCADQgCACgDAAQgDAAgCgCQgBgDAAgDIgBgGIAAgGIABgTIABgTIgBgGIAAgHQAAgDACgCQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAANIACAPIABAOQAAADgCACQgCACgDAAQgGAAgBgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-4,6.1,8);


(lib.Symbol212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAlIgWgdIgNAOIgMAMQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAQgDgCAAgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBABAAIAFgGIAHgGIAOgOIgJgNQgFgIgFgDQgCgDAAgCQAAgDACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAEAAAHAKIAMAQIANgMQAJgIACgEQADgDADAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQADACAAACQAAAEgHAGIgWAWIAWAcIABAEQAAADgBACQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.9,7.5,7.9);


(lib.Symbol211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGIgPAGIgZAMQAEAGAGADQAGADAHAAIALgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgSQgGAHgDAMIAVgJIARgKQgGgGgKAAQgIAAgFAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-3.7,6.8,7.5);


(lib.Symbol210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAJIAJgCIAKABQAEABAAAFQAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgDAAIgEAAIgJABIABAuQABAPgIAAQgBAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-5,5.8,10);


(lib.Symbol209 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAjIgFgFIgMAFIgHACQgQAAgHgJQgHgIAAgSQAAgPALgMQAMgMAOAAQAHAAAHADQAJAEAAAGIgBACIgCAJIAAAPIABANIAFAMIABAEIABAAQAAABAAABQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgBAAgDgDgAgLgQQgIAJAAAKQAAALAFAGQAEAFAHAAQAGAAAEgCIAHgGQgCgRAAgJIABgGIABgHIgEgCIgEAAQgJgBgIAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3.8,6.6,7.6);


(lib.Symbol208 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIAAgKIABg8IAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAFAAABAGIACAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIACAbIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-5.7,6.4,11.4);


(lib.Symbol207 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAEAUIgCgQIgCgPIgPApIgDAEQgDAEgEAAQgFAAgFgUIgFgcIgBgLIgBgKQAAgDACgCIAEgBQAGAAABAFIABAKIAGAoIAQgwQACgHAEAAQAFAAACAIIAFAZIAFAaIAOg3QAAgEAGAAQADAAABACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAADIgOAyQgCAGgEAHQgDADgEAAQgIAAgEgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-3.8,8.7,7.7);


(lib.Symbol206 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAdQgIgJgCgQQAAgPAIgLQAKgPAQAAQAOAAAHANQAFAKABAOQgBAPgHAKQgKANgNAAQgLAAgJgJgAgMgNQgDAIAAAJQAAAKAEAFQAFAFAGAAQAGAAAGgFQAFgGAAgKQACgagPABQgJAAgHAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.7,6.1,7.5);


(lib.Symbol205 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAyQgCgCAAgDIAAgDIABgDIgBgKIAAgKIgCgaIgCgcIgGAAQgPAAgJgCQgFgBAAgGQAAgDACgCQACgCADAAIALABIALABIAMAAIAMAAIAPABIAQAAQADAAACACQACACAAAEQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgCACgDAAIgQAAIgPgBIgFAAIACAfIABAdIABAHIAAAIQAAAFgBADQgCAEgEAAQgCAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-5.2,9.2,10.4);


(lib.Symbol204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,1.7,1.7);


(lib.Symbol203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAoIgBgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgCADAAQADAAACADIAGAGQAEACAIAAQAKABAIgKQAIgIAAgMQAAgKgEgFQgEgIgJAAQgGAAgFACQgDACgEADIgHAIQgDACgEAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgMIACgcIgBgFIgBgEQAAgFAHAAIAEABIAEAAIAMAAIALgBIAGABIAFAAIAEgBIAEAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAAIgQAAIgFAAIgEAAIgWAAIgDAXQAKgHAOAAQAPAAAIALQAHALAAAOQAAATgLALQgLANgRAAQgUAAgJgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-5.5,7.1,11);


(lib.Symbol202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFAaIgDgVIgCgTIgVA1QgBADgCACQgDAFgFAAQgHAAgGgaQgDgOgDgWIgDgOIgBgNQAAgDADgDQADgCADAAQAHAAABAHIACANIAHAzQAJgaALgjQADgKAGAAQAHAAADALIAFAgIAHAhIARhHQABgFAHAAQAEAAACACQADADAAADIgBAEQgHAdgLAjQgCAIgGAJQgEAEgEAAQgKAAgGgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-4.9,11.2,9.9);


(lib.Symbol201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAlQgMgMgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgLAQgSAAQgPAAgKgLgAgPgRQgFAKAAALQAAANAGAHQAGAGAIAAQAIAAAHgGQAHgIABgMQABgigUAAQgMAAgHANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-4.8,7.8,9.6);


(lib.Symbol200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2BFQgDgCAAgDIACgdIABgcIAAgNIAAgPIAAgUIABgWQAAgDADgCQACgDAEAAQADAAADADQACACAAADIgBAWIgBAUIABAWIAlgGQAWgFAQAAIABgmQAAgGACgHQADgKAFABQADAAADACQADADAAADIgBAEQgCAEAAAGIABAIIAAAIIgCAbIgBAZIABAUIABATQAAAEgDADQgCACgEAAQgDAAgDgCQgCgDAAgEIgBgTIgBgUIAAgOQgPABgVAEIglAHIgBAWIgCAYQAAADgCACQgDADgDAAQgEAAgCgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-7.2,11.6,14.4);


(lib.Symbol199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANA5IAAgFIABgEIgBgUIglgBIgRgBQgIgBAAgFQAAgEAFgGIAHgJIArg+QAFgIAKAAQAJAAAAAJIAABIIAEAAQAQAAAAAIQAAAHgGABQgDABgLAAIAAAgQAAAJgHAAQgKAAAAgNgAgWAKIAjABIAAg4QgWAmgNARg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6.9,10.1,14);


(lib.Symbol198 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgIAIgBQAJAAAAAPQAQgRAUAAQAHABAEAFQADAGAAAKIAAAGQgBALgIAAQgHAAAAgJIgBgFIAAgIQgOACgHAGQgIAGgFAMIAAAuQAAAKgJgBQgHABAAgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-4.9,6.9,9.9);


(lib.Symbol197 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYBAQgMgHgEgLIAAgEQAAgDACgCQADgDAEAAQADAAADAEIAEAFQADAFAFACQAFACAIAAQAJAAAHgGQAHgGAAgJQAAgOgJgHQgJgIgNgBQgKgBAAgFQAAgGAIgCIAUgGQAGgCADgDQADgEAAgGQAAgHgGgGQgGgEgLAAQgGAAgFACIgKAHIgFACQgEAAgCgDQgDgCAAgEQAAgHAOgHQALgFAIAAQASAAALAIQAMAJAAARQAAAVgRAGIgDABQALAFAGAHQAGAIAAAOQAAARgMAMQgMAMgRAAQgNAAgLgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-6.9,8.3,13.8);


(lib.Symbol196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgJQAAgTgHAAQgKAAgIAMQgIALgEAPIgBAJIAAAIIAAAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgZIgBgIIAAgJQAAgDADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAQQAAAHACALIACATQAAAEgDADQgCACgEAAQgIAAgBgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-5.1,7.8,10.3);


(lib.Symbol195 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAmQgNgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQALAGAAANQAAAIgKAIQgEADgOAGIghAPQAFAHAIAFQAHADAJAAQAGAAAIgCQALgDADgFQADgFADAAQADABACACQADACAAADQAAAKgQAHQgOAGgMAAQgTAAgNgKgAgSgXQgGAJgEAPIAbgMQAOgHAIgGQgIgHgNAAQgKAAgIAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-4.8,8.8,9.6);


(lib.Symbol194 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdBDIgCAAQgGAAgCgGIgBgLQAAgUALgMQAFgGAWgPQAMgIAEgFQAIgJAAgLQAAgFgIgFQgGgEgGAAQgHAAgIAFIgMAKQgEADgCAAQgJAAAAgIQAAgEADgDQAKgJAIgFQALgGAKAAQAOAAALAIQANAJAAANQAAAJgDAIQgCAHgFAHQgHAGgQAKQgPALgGAFQgJAKAAAPIASgCIAagBQAGAAAGACQAIADAAAGQAAADgCADQgDACgDAAIgGgBIgGgBIgOAAIgMABIgLABIgKABIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-6.7,8.3,13.6);


(lib.Symbol193 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXBBQgDgCAAgEQAAgFADgFQADgFAGAAQAIAAAAALQAAAFgDAEQgDAEgDAAQgEAAgEgDgAgSAgQgCgDAAgDQAAgGALgJIAUgPQAMgKAAgIQAAgKgKgJQgJgIgJAAQgGAAgJAGQgIAFgCAAQgDAAgEgDQgCgDAAgDQAAgHAOgHQALgGAJAAQAQAAAOAOQAPANAAASQAAANgIAJQgFAGgNAJQgOAKgEAGQgDAEgEAAQgEAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-6.8,8,13.7);


(lib.Symbol192 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXBFQgCgDAAgDQAAgJATgqIggg8IgEgGQgCgEAAgDQAAgEADgCQADgDADAAQAEAAACADQAPAVAQAmIANgeIAOgbQADgFAEAAQAEAAACACQADADAAADIgBAFIgeBBQgMAYgFAQIgFARQgDAGgFAAQgEAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-7.1,9.1,14.3);


(lib.Symbol191 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgDAAgDgDQgDgCAAgEIABgEIABgMIAAhNIABgPIgBgIIgBgJQABgDACgDQACgCAEAAQAHAAABAIIACAPIgBATIAAATIAAAIQAHgJAJgFQAHgFAJAAQAOAAAGAKQAEAGAAAPIADAjIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-7.3,8.2,14.7);


(lib.Symbol190 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUBFQgEgDAAgEQgEgKgBgHIgHgmIgFglQgIAdgJATQgKAYgDANIABAEQAAAEgDACQgEADgEAAQgMAAAAgLIgMg2IgUg+IAAgDQAAgIAJAAQAGAAADAGQACADAEAPQAGAQAFAWIAIAmQAKgWAJgeIAJgaQAHgUAHAAQAGAAACAGQAEAIADAcIAGAiIAIAjIAdhMIAEgQQADgLAEgFQADgFAFAAQAJAAAAAIIgDAJIgIAZIgaA/IgMAeQgEAGgGAAQgEAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-7.1,17.2,14.3);


(lib.Symbol189 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgEgDAAgEQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEAEgEAAQgDAAgDgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,2.2,2.2);


(lib.Symbol188 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBEIgJAAQgEgCAAgFQAAgJAOAAIAEAAIADAAIAAgMIgBgMIACghIACgjQgMAKgDgBQgEAAgCgCQgDgCAAgEQAAgEAIgGIANgLQAHgHAHAAQAGAAAAAGIgBAGIAAAGIAAAJIAAAJIgCAeIgCAdIABAMIABAMIAJAAQAEAAACADQACABAAAEQAAAEgCACQgDADgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-6.8,5.7,13.7);


(lib.ScoreboardBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgNAbQgHgDAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgBIAEACIAFACIAFABIAHgCQAEgBAAgDQAAgGgJgDIgEgBQgHgBgCgDQgEgBAAgFQAAgLAJgEIAJgDIAJgEIAEgBQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABAEIAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgCgFIgLADQgHADAAAFIADABQAKACAGADQAIAFAAAJQAAAIgHAEQgGAEgIAAQgGAAgGgDg");
	this.shape.setTransform(22.2,-9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgMAmQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgFAKgXIgSghIgCgEIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAIAMAIAVIAIgRIAHgPQAAAAABgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBADIgRAjIgIAXIgEAJQAAAEgDAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_1.setTransform(17.2,-8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgOAVQgGgHgBgMQAAgKAGgIQAHgKALAAQAKAAAFAJQAEAHAAAKQgBAKgFAIQgGAJgKAAQgIAAgGgGgAgIgJQgDAFAAAGQAAAIAEADQADAEAEAAQAEAAAEgEQAEgEAAgHQABgSgLAAIgBAAQgFAAgEAHg");
	this.shape_2.setTransform(12.1,-9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgWAmIgCgFIAAgOIABgTIABgUIABgNQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAHgDAIAAQAIAAAIAGQAJAHAAAKQAAAMgKAGQAHADAEAFQAEAEAAAEQAAAGgHAFQgEAEgFACQgKAEgRAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgOATIAAAKQANAAAHgDQADgCADgDIADgDQAAgDgGgDIgJgCIgEgBIgCAAIgCAAIgGgBIAAALgAgMgUIgBATIAHABQAHgBAEgEQAFgFAAgGQAAgFgFgEQgFgEgFAAIgHAAg");
	this.shape_3.setTransform(6.6,-10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgNAbQgHgCAAgGQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgBIAEACIAFACIAFAAIAHgBQAEgBAAgDQAAgHgJgCIgEgBQgHgCgCgCQgEgBAAgGQAAgKAJgEIAJgEIAJgDIAEAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIABAFIAAAEQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgCgFIgLADQgHAEAAAEIADAAQAKADAGADQAIAFAAAJQAAAIgHAEQgGADgIAAQgGAAgGgCg");
	this.shape_4.setTransform(-5.6,-8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgEAjIAAgRIABgSIAAgRIAAgRQAAgFAEAAQAEAAABAFIAAARIgBARIAAAYIgBALQgBAFgDAAQgEAAAAgFg");
	this.shape_5.setTransform(-9.3,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgSAWIAAghIAAgFIAAgEQAAgGAFAAQAEAAAAAJQAJgKALABQAEAAACACQACADAAAGIAAAEQAAAGgFAAQgEAAgBgFIAAgDIAAgEQgHABgEADQgEADgDAGIAAAaQAAAGgFgBQgEABAAgGg");
	this.shape_6.setTransform(-12.9,-8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgEAjQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgJIgBgIIABgMIAAgLQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAALIgBAMIAAAIIAAAJIgBADIgCABIgEgBgAgCgaQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIADgCQAAABABAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgDgBg");
	this.shape_7.setTransform(-16.8,-9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgYAhQgGgGAAgOQAAgNAGgMQAGgNAJgJQAGgFAHAAQAEAAAHADQAJADAAAFQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDgBQgIgEgEAAQgEAAgDADIgGAIQgMAPAAAQQAAAJADAEQAEAEAIAAQAHAAAHgFQAHgHACgKQgNABgIAEIgDABQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAKgFAZAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAAEgCABQgEAPgJAJQgKAJgMAAQgMAAgGgHg");
	this.shape_8.setTransform(-21.6,-9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AAAhGIAACN");
	this.shape_9.setTransform(0.6,-9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1.8,1,1).p("AEOgwIAAiOIkNAAIkOAAIAACOIAADvIENAAIEOAAgAAAgwIABAAIENAAAAAC/IAAjvAkNgwIENAA");
	this.shape_10.setTransform(0.5,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAC/IAAjvIkNAAIENAAIAADvIkNAAIAAjvIAAiOIEOAAIAACOIAAiOIENAAIAACOIkNAAIgBAAIABAAIENAAIAADvgAAAgwgAABi+g");
	this.shape_11.setTransform(0.5,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScoreboardBackground, new cjs.Rectangle(-27.5,-19.9,56,42.3), null);


(lib.menu_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAoQgQgMAAgdIAAgIIAAgIIABgHIAAgGQAAgFABgEQADgFAEgBQADAAADACQADADgBADIAAAKIAAAKIAAAIIAAAIQAAAJABAHQADAJAFAEQADABAIABQAPAAAGgaQADgNAAgaIABgFQADgFAFAAQADAAADAEQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDATgKAOQgEAFgGAEQgHAFgIgBQgPABgGgGg");
	this.shape.setTransform(37.7,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoAtQgDgCAAgDIABgIIAAgHIAAgKIAAgKIAAgKIAAgMIgBgKIAAgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIgBgmIgBgGIAAgHQAAgIAJAAQAJAAAAAeIAAAJIgBAkIAAAJQgBAIgIAAQgEAAgFgFQgWgUgcgkIgBASIABAOIAAAOQAAARgJAAQgDAAgDgDg");
	this.shape_1.setTransform(28.5,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_2.setTransform(20,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAfAmIgCgOQgDgKgEgTIgJAXIgDALIgFALQgDAFgEAAQgFAAgEgHIgDgLIgIgeIgIAcIgBANQgDAJgHgBQgDAAgDgCQgCgDAAgDQAAgKAFgNIAGgWIADgSQADgMADgFQADgEAEAAQAGABACAFQADAFADAQQACAPAFARQAGgRAGgVIADgNQADgIAHAAQAGgBADAKIADAPQADAYAGASIAFAUQAAADgDACQgDACgDAAQgGABgEgKg");
	this.shape_3.setTransform(10.9,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("Ai4hoIFxAAQAxAAAAAwIAABxQAAAwgxAAIlxAAQgxAAAAgwIAAhxQAAgwAxAAg");
	this.shape_4.setTransform(23.4,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai4BpQgxAAAAgwIAAhxQAAgwAxAAIFxAAQAxAAAAAwIAABxQAAAwgxAAg");
	this.shape_5.setTransform(23.4,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("Ai4hoIFxAAQAxAAAAAwIAABwQAAAxgxAAIlxAAQgxAAAAgxIAAhwQAAgwAxAAg");
	this.shape_6.setTransform(23.4,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CCFF").s().p("Ai4BpQgxAAAAgxIAAhvQAAgxAxAAIFxAAQAxAAAAAxIAABvQAAAxgxAAg");
	this.shape_7.setTransform(23.4,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("Ai4BpQgxAAAAgxIAAhvQAAgxAxAAIFxAAQAxAAAAAxIAABvQAAAxgxAAg");
	this.shape_8.setTransform(23.4,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.8,23);


(lib.howbubbletailstilll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAIBkQgbhQAVh3");
	this.shape.setTransform(9.5,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ah9hFQBzBWCIA1");
	this.shape_1.setTransform(-2.3,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah9gnID1g8QgVB3AbBQQiIg1hzhWg");
	this.shape_2.setTransform(-2.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.howbubbletailstilll, new cjs.Rectangle(-15.9,-10.6,27.2,22), null);


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


(lib.fpb_rightOutFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_up, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_up, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_rightOutFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmjD6IAAnzINHAAIAAHzg");
	this.shape.setTransform(25,25,0.595,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_press, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_press, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_rightOutFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmjD6IAAnzINHAAIAAHzg");
	this.shape.setTransform(25,25,0.595,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_over, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_over, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_rightOutFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightOutFrame_disabled, new cjs.Rectangle(0,0,50,50), null);


(lib.fpb_rightInFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_rightInFrame_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftOutFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftOutFrame_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_leftInFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_leftInFrame_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.fpb_face_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjFDGIAAmLIGLAAIAAGLg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_face_disabled, new cjs.Rectangle(0,0,39.5,39.5), null);


(lib.boundingBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.boundingBox, new cjs.Rectangle(-50,-50,100,100), null);


(lib.Definition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgDADABQADgBADADQACADAAACQAAADgCADQgDADgDAAQgDAAgCgDg");
	this.shape.setTransform(247.2,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgTA0QgDACgEAAQgDAAgDgCQgDgDAAgDIABgFIAAgFIAAhNQAAgFACgEQADgEAFAAQAHAAAAAIIAAACIAAADIAAAaIAJgEIAIgBQAQAAAKALQAKAKAAAQQAAAQgLALQgLALgPAAQgJAAgJgDgAgHgBIgKAFIAAAeQAJAEAHAAQAHAAAGgGQAGgGAAgJQAAgJgEgGQgGgFgIAAQgCAAgFACg");
	this.shape_1.setTransform(241.3,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_2.setTransform(233.9,37.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgHAGIgQAGIgWALQADADAFACQAFACAEAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_3.setTransform(226.3,37.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgJAeIgXg2IgBgEQAAgDADgDQADgCAEAAQAGAAACAFIAPAmIAKgXIAGgPQACgFAGAAQAEAAADADQADACAAAEQAAACgLAZIgPAeQAAADgCACQgDACgDAAQgGAAgDgHg");
	this.shape_4.setTransform(219.2,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AATA0QgFACgFABIgJABQgPAAgLgKQgKgKAAgPQAAgSAKgLQALgLAQAAIAJABQAEABADACIACggQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAcQAAAZABAIIAAACQAAAEgCADQgDACgEAAQgFAAgCgEgAgNADQgFAGAAALQAAAIAFAGQAGAEAHAAIAHgBIAGgEIACgCIAAgZQgCgEgDgCQgEgBgFAAQgJgBgFAFg");
	this.shape_5.setTransform(211.5,35.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AAQAfIgKAFIgIACQgQAAgJgJQgHgJgBgSQAAgPANgMQAMgMAQAAQAGAAAJAEQAKAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgCAHIAAAKQAAAMACAFIADAIIACAGQABAEgDACQgDADgEAAQgCAAgIgHgAgJgNQgHAHAAAJQABAJADAFQADAEAHAAIAHgBIAHgEIgDgYIABgFIAAgGIgCgBIgBAAQgJAAgHAHg");
	this.shape_6.setTransform(203.7,37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_7.setTransform(192.4,37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_8.setTransform(185.1,37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_9.setTransform(177.2,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEACAAAEQAAADgCADQgCABgDAAIgDAAIgEAAIgJABIABAoIAAADIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_10.setTransform(169.7,36.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgNAQAAQAOAAAHAMQAGAKgBAOQAAAPgHALQgJALgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgZgQgBQgJAAgFAKg");
	this.shape_11.setTransform(162.6,37.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_12.setTransform(155.6,37.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_13.setTransform(148.2,37.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_14.setTransform(137.2,37.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgNAQAAQAOAAAHAMQAGAKgBAOQAAAPgHALQgJALgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgZgQgBQgJAAgFAKg");
	this.shape_15.setTransform(129.8,37.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAOQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAEgLIAFgNQABgCADAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgJAWQgBAEgDAAQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_16.setTransform(120.5,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_17.setTransform(114.5,37.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHAgIgKgcIgMgfIgBgDQAAgCACgCQACgCADAAQAEAAACAEIARAvIAMgfIAGgQQACgEAEAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAACgLAbIgOAfQAAAGgGAAQgEAAgDgFg");
	this.shape_18.setTransform(107.2,37.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAyQgCgDAAgDIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAADgCADQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgCACAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_19.setTransform(101.9,35.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEACAAAEQAAADgCADQgCABgDAAIgDAAIgEAAIgJABIABAoIAAADIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_20.setTransform(96.5,36.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTAeQgJgJgBgOQAAgNAKgPQAKgRAMABQAGAAAJACQALAFAAAFQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgBIgDgCQgEgEgJAAQgGAAgHANQgGALAAAIQAAAJAGAEQAGAGAIgBQAEAAAFgBIAIgFIACgBQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABQAAAEgLAFQgJAFgGgBQgNABgKgJg");
	this.shape_21.setTransform(89.7,37.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_22.setTransform(82.4,37.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWAxIAAgDQAAgDACgCQACgCADAAQAEAAAEAJIAEAHQACADADAAQADAAADgFIACgGIgDgpIgDglQAAgDACgDQADgDACAAIAGACIACADIACAnIACAqQAAAJgGAIQgGAJgJAAQgOAAgKgXgAAEg5QgCgCAAgEQAAgDACgCQACgDAEAAQADAAACADQADACAAADQAAAEgDACQgCACgDAAQgEAAgCgCg");
	this.shape_23.setTransform(74.9,37.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAuQgKgJAAgPQAAgSAKgLQAKgLAOAAQAIABAEACIAHAFQABgdABgKQABgGAFAAQAGAAAAAHIgDApIgBATQABAXACAMIAAABQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGQgFADgGACQgFACgFAAQgOAAgJgKgAgPABQgGAHAAANQAAAJAGAHQAGAGAJAAQAFAAAEgCIAIgGIACgBIgBgNIAAgHIABgIQgDgGgEgCQgFgDgGAAQgLABgFAFg");
	this.shape_24.setTransform(68.6,35.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_25.setTransform(61,37.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHAOQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAEgLIAFgNQABgCADAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgJAWQgBAEgDAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_26.setTransform(51.6,41.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAzQgCADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCgBgDIAAgFIAAgGIAAgVIAAgVIAAgTIAAgTQAAgEACgDQACgEAEAAQAFAAAAAGIAAACIAAADIAAAPIgBASQAGgEAGgCQAFgDAEAAQAOAAAKAMQAIAJAAAQQAAAPgKALQgKALgOAAQgKAAgJgEgAgKgCIgKAFIAAAMIAAALIAAALIAKAEQAEABAFAAQAJAAAGgHQAGgHAAgKQAAgKgEgHQgGgHgJAAQgFAAgGAEg");
	this.shape_27.setTransform(45.3,35.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_28.setTransform(37.8,37.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgYANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_29.setTransform(30.6,37.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAgIgKgcIgMgfIgBgDQAAgCACgCQACgCADAAQAEAAACAEIARAvIAMgfIAGgQQACgEAEAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAACgLAbIgOAfQAAAGgGAAQgEAAgDgFg");
	this.shape_30.setTransform(23.3,37.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_31.setTransform(12,37.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAmQgLgEAAgGQAAgEACgCQACgCADAAQACABAEADQABACAGABIAIABQAEgBAFgBQAGgCAAgFQAAgJgNgDIgGgCQgJgBgEgDQgFgDAAgHQAAgPANgGIAMgEIANgFIAGgBQADAAACACQACACAAADIABAGIABAFQAAAEgCACQgCABgDAAQgEABgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAGQgIAEgLAAQgJAAgIgDg");
	this.shape_32.setTransform(0.7,37.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgKgHgAgOgRQgFAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_33.setTransform(-6.2,37.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGAyQgCgDAAgDIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAADgCADQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgCACAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_34.setTransform(-12,35.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_35.setTransform(-17.8,36);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAyQgCgDAAgDIAAgLIAAgNIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABABQAAAAABAAQAAABABAAQACACAAADIgBAPIgBAQIABANIAAALQAAADgCADQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgEQAAgDADgCQACgCACAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_36.setTransform(-23,35.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAuQgKgJAAgPQAAgSAKgLQAKgLAOAAQAIABAEACIAHAFQAAgdACgKQAAgGAGAAQAGAAAAAHIgDApIAAATQgBAXADAMIAAABQAAABAAABQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQgEAAgBgGQgFADgGACQgFACgFAAQgOAAgJgKgAgPABQgGAHAAANQAAAJAHAHQAFAGAJAAQAFAAAEgCIAHgGIADgBIgBgNIAAgHIABgIQgEgGgDgCQgFgDgGAAQgKABgGAFg");
	this.shape_37.setTransform(-29.2,35.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgNAQAAQAOAAAHAMQAGAKgBAOQAAAPgHALQgJALgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgZgQgBQgJAAgFAKg");
	this.shape_38.setTransform(-37.1,37.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgDAoQgCgCAAgDIgCgYIgBgYQAAgHgCgEQgFACgFAFIgIAJIgEAFIAAALIgBAMIABAFIAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgRIAAgNIABgLIgBgLIAAgLQAAgPAHAAQACAAADACQACADAAACIgBAEIAAAEIAAAIQAEgIAHgGQAHgGAEAAQALAAADALQAEgFAFgCQAFgDAHAAQAMAAAEAMIACAUIAFAmQABADgCACQgCABgDAAQgGAAgBgGIgCgVIgDgUQAAgFgCgEQgCgGgDAAQgDAAgHAEQgGAEgCACIAAANIACARIABASQAAADgBACQgCACgDAAQgCAAgCgCg");
	this.shape_39.setTransform(-46,37.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AgTA0QgDACgEAAQgDAAgCgCQgDgDgBgDIABgFIAAgFIAAhNQAAgFADgEQACgEAFAAQAIAAgBAIIAAACIAAADIAAAaIAJgEIAIgBQARAAAJALQAJAKAAAQQAAAQgKALQgLALgPAAQgKAAgIgDgAgGgBIgLAFIAAAeQAJAEAHAAQAHAAAGgGQAGgGAAgJQAAgJgEgGQgFgFgJAAQgCAAgEACg");
	this.shape_40.setTransform(-59.9,35.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("AgaAkQgDgDABgEIAAgrIAAgHIAAgGQAAgEACgCQACgDAFAAQAHAAACAIQALgJAPAAQANAAAAASIAAAEQAAALgJAAQgJAAAAgJIAAgHQgOADgHANIAAAhQAAAEgDADQgDACgDAAQgFAAgCgCg");
	this.shape_41.setTransform(-67.3,37.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AgWAeQgMgJAAgQQAAgQAJgMQAKgNAQAAQAMAAAJAEQAJAFABAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgKAAQgQAAgKgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_42.setTransform(-74.9,37.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AgJAeIgXg2IgBgEQAAgDADgDQADgCAEAAQAGAAACAFIAPAmIAKgXIAGgPQACgFAGAAQAEAAADADQADACAAAEQAAACgLAZIgPAeQAAADgCACQgDACgDAAQgGAAgDgHg");
	this.shape_43.setTransform(-82,37.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("AATA0QgFACgFABIgJABQgPAAgLgKQgKgKAAgPQAAgSAKgLQALgLAQAAIAJABQAEABADACIACggQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAcQAAAZABAIIAAACQAAAEgCADQgDACgEAAQgFAAgCgEgAgNADQgFAGAAALQAAAIAFAGQAGAEAHAAIAHgBIAGgEIACgCIAAgZQgCgEgDgCQgEgBgFAAQgJgBgFAFg");
	this.shape_44.setTransform(-89.7,35.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6600").s().p("AAQAfIgLAFIgHACQgQAAgIgJQgIgJAAgSQAAgPALgMQANgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIADAGQAAAEgDACQgDADgDAAQgEAAgHgHgAgJgNQgGAHAAAJQAAAJACAFQAEAEAGAAIAHgBIAIgEIgCgYIAAgFIABgGIgCgBIgDAAQgIAAgHAHg");
	this.shape_45.setTransform(-97.5,37.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_46.setTransform(-109.2,37.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAYAkIgFgWIgSAEIgRADIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAHgBQAIgNAMgUQAPgaAEAAQAFAAACAIIAFAXIAKAvIAEAKIACAIQAAACgCACQgDADgCAAQgHAAgEgQgAgIAFIAYgFIgFgag");
	this.shape_47.setTransform(-118.2,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2,1,1).p("A9PheMA6fAAAIAAC9Mg6fAAAg");
	this.shape_48.setTransform(62.8,36.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("A9PBfIAAi9MA6fAAAIAAC9g");
	this.shape_49.setTransform(62.8,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,23.5,376.5,23.6);


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


(lib.LGlobalClass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_36:0});

	// timeline functions:
	this.frame_0 = function() {
		///*--------------VERSION CONTROL INFORMATION----------------------
		//
		//	Learning Interaction Global Toolbox Class
		//	Developed by Dan Carr
		//	Quality Assurance by Andrew Chemey
		//	Last Modified for Flash MX: November 25, 2001
		//	Copyright 2002 Macromedia Inc. All rights reserved.
		//	
		//	
		//  ------------------END VERSION CONTROL--------------------------
		//  
		//  Section 1: Start Contruction of the Global Class
		//  
		//  1-1: _global.LToolBox		// Initializes the Global Class
		//  
		//  Section 2: Graphic Initialization Handling
		//  
		//  2-1: setTextField			// Sets a text field on the stage
		//  2-2: setCompLabel			// Sets the label of a component on the stage
		//  2-3: setCompCallBack		// Sets the callBack of a component on the stage
		//  2-4: setCompState			// Sets the active state of a component on the stage
		//  2-5: getCompLabel			// Returns the label of a component on the stage
		//  2-6: initControlButton	// Initializes the control button component
		//  
		//  Section 3: Feedback Event Handling
		//  
		//  3-1: setFeedback			// Initializes feedback responses
		//   
		//  Section 4: Navigation Event Handling
		//  
		//  4-1: setNavigation		// Handles navigation events at the end of a session
		//  
		//  Section 5: Tracking Toolbox
		//  
		//  5-1: sessionStart			// DateStamp, timeStamp, and start sessionTimer
		//  5-2: sessionStop			// Stop sessionTimer and return Latency
		//  5-3: submitScore			// Format score and submit to the publish template
		//  
		//  Section 6: Common Toolbox
		//  
		//  6-1: getDateStamp			// Format current date
		//  6-2: getTimeStamp			// Format current time
		//  6-3: sessionTimer			// "Start" and "Stop" the sessionTimer for Latency
		//  6-4: getLatency			// Format seconds to hours for Latency
		//  6-5: formatNum			// Format single digit number to a double digit number
		//  6-6: getObjProp			// Returns a report from an Object
		//  6-7: reportToOutput		// Trace this session's instance Properties to Output
		//  
		//*/
		//
		//#initclip 0
		//
		//// SECTION 1: START GLOBAL FUNCTIONS
		//
		//// 1-1: Constructor function for the global class
		//
		//_global.LToolBox = function()
		//{
		//	this.interaction_id = undefined;
		//	this.interaction_type = undefined;
		//	
		//	this.correct_response = undefined;
		//	this.student_response = undefined;
		//	this.result = undefined;
		//		
		//	this.feedback = undefined;
		//	this.numOfTries = 1;
		//	this.feedback_list = undefined;
		//	
		//	this.tracking = undefined;
		//	this.weighting = undefined;
		//	this.objective_id = undefined;
		//	this.latency = undefined;
		//	
		//	this.navigation = undefined;
		//}
		//
		//// Inherit Object properties
		//_global.LToolBox.prototype = new Object();
		//
		//
		//// SECTION 2: GRAPHIC INITIALIZATION HANDLING
		//
		//
		//// 2-1: Locate a named text field and set its value
		//
		//LToolBox.prototype.setTextField = function (fieldName, val) {
		//	
		//	eval(fieldName).text = val;
		//}
		//
		//
		//// 2-2: Locate a named component and set its label
		//
		//LToolBox.prototype.setCompLabel = function (UIComponent, val) {
		//	
		//	eval(UIComponent).setLabel(val);
		//}
		//
		//
		//// 2-2: Locate a named component and set its changeHandler
		//
		//LToolBox.prototype.setCompCallBack = function (UIComponent, val) {
		//	
		//	if(eval(UIComponent).setClickHandler){
		//		eval(UIComponent).setClickHandler(val);
		//		
		//	} else if (eval(UIComponent).setChangeHandler){
		//		eval(UIComponent).setChangeHandler(val);
		//	}
		//}
		//
		//
		//// 2-3: Locate a named component and set its enabled state
		//
		//LToolBox.prototype.setCompState = function (UIComponent, val) {
		//	
		//	eval(UIComponent).setEnabled(val);
		//}
		//
		//
		//// 2-4: Locate a named component and return its label
		//
		//LToolBox.prototype.getCompLabel = function (UIComponent) {
		//
		//	return eval(UIComponent).getLabel();
		//}
		//
		//
		//// 2-5: Locate a named control button component and set its initial state
		//
		//LToolBox.prototype.initControlButton = function (callBack) {
		//
		//	var initial_state;
		//	
		//	if (this.feedback == true){
		//		initial_state = "Check Answer";
		//		if (this.navigation == "Auto GoTo Next Frame"){
		//			trace("WARNING: Feedback must be false and Tracking turned true \rto use Auto GoTo Next Frame. Navigation reset to Next Button.");
		//			this.navigation = "Next Button";
		//		}
		//	} else if (this.tracking == true){
		//		initial_state = "Submit";
		//	} else if (this.navigation != "Off"){
		//		initial_state = "Next Question";
		//		if (this.navigation == "Auto GoTo Next Frame"){
		//			trace("WARNING: Feedback must be false and Tracking turned true \rto use Auto GoTo Next Frame. Navigation reset to Next Button.");
		//			this.navigation = "Next Button";
		//		}
		//	} else {
		//		initial_state = "";
		//	}
		//	
		//	this.label_state = initial_state;
		//	this.setCompLabel(this.Assets.ControlButton, initial_state);
		//	this.setCompState(this.Assets.ControlButton, false);
		//	this.setCompCallBack(this.Assets.ControlButton, callBack);
		//}
		//
		//
		//// SECTION 3: FEEDBACK EVENT HANDLING
		//
		//// 3-1: Set event handler to populate the feedback field
		//
		//LToolBox.prototype.setFeedback = function (val)
		//{ 
		//	if (this.feedback == true){
		//		
		//		if (val.toLowerCase() == "init"){ // Use "init" for initial feedback.
		//			this.setTextField(this.Assets.FeedbackField, this.feedback_list[0]);
		//			
		//		} else if (val.toLowerCase() == "button"){ // Use "button" for transition feedback
		//			var buttonState = this.getCompLabel(this.Assets.ControlButton);
		//			this.setTextField(this.Assets.FeedbackField, "Click the "+buttonState+" button.");
		//			
		//		} else if (val.toLowerCase() == "c"){ // "c" for correct evaluation result
		//			this.setTextField(this.Assets.FeedbackField, this.feedback_list[1]);
		//			
		//		} else if (val.toLowerCase() == "w"){ // "w" for incorrect evaluation result
		//			if(this.numOfTries > 1){
		//				this.setTextField(this.Assets.FeedbackField, this.feedback_list[3]);
		//			} else {
		//				this.setTextField(this.Assets.FeedbackField, this.feedback_list[2]);
		//			}
		//		}
		//	} else {
		//		this.setTextField(this.Assets.FeedbackField, "");
		//	}
		//}
		//
		//
		//
		//// SECTION 4: FEEDBACK EVENT HANDLING
		//
		//
		//// 4-1: Build Event Handler for navigation calls
		//
		//LToolBox.prototype.setNavigation = function ()
		//{ 
		//	if (this.navigation == "Off"){
		//		
		//		this.setCompState(this.Assets.ControlButton,false);
		//		
		//	} else if (this.navigation == "Next Button") {
		//		
		//		if (!this.buttonFlag || this.buttonFlag == false){
		//			this.setCompLabel(this.Assets.ControlButton,"Next Question");
		//			this.buttonFlag = true;
		//			
		//		} else {  
		//			
		//			if(this.navAction == "Stop"){
		//				if(this.navLabel == ""){
		//					eval(this.assets_path.nextFrame());
		//				} else {
		//					eval(this.assets_path.gotoAndStop(this.navLabel));
		//				}
		//				
		//			} else if(this.navAction == "Play"){
		//				if(this.navLabel == ""){
		//					eval(this.assets_path.gotoAndPlay(this._currentframe+1));
		//				} else {
		//					eval(this.assets_path.gotoAndPlay(this.navLabel));
		//				}
		//			}
		//		}
		//		
		//	} else if (this.navigation == "Auto GoTo Next Frame") {
		//		eval(this.assets_path.nextFrame());
		//	}
		//}
		//
		//
		//
		//// SECTION 5: TRACKING TOOLBOX
		//
		//
		//// 5-1: Get date and time stamp and start session timer
		//
		//LToolBox.prototype.sessionStart = function () {
		//	
		//	this.dateStamp = this.getDateStamp();
		//	this.timeStamp = this.getTimeStamp();
		//	this.sessionTimer("start");
		//}
		//
		//
		//// 5-2: Stop session timer and return latency
		//
		//LToolBox.prototype.sessionStop = function () {
		//	
		//	this.latency = this.getLatency(this.sessionTimer("stop"));
		//}
		//
		//
		//// 5-3: Format data and submit tracking
		//
		//LToolBox.prototype.submitScore = function () {
		//	
		//	if (this.weighting <= 0 || this.weighting == undefined) {
		//		this.weighting = 1;
		//	}
		//	
		//	var weight;
		//	
		//	if (this.result == "C") {
		//		weight = this.weighting;
		//	} else if (this.result == "W") {
		//		weight = -1 * this.weighting;
		//	}
		//	
		//	if (this.tracking == true){
		//	
		//		var intData = this.dateStamp+";"+this.timeStamp+";"+this.interaction_ID+";"+
		//		this.objective_ID+";"+this.interaction_type+";"+this.correct_response+";"+
		//		this.student_response+";"+this.result+";"+this.weighting+";"+this.latency;
		//		
		//		//trace("intData: "+intData);
		//		
		//		fscommand ("MM_cmiSendInteractionInfo", intData);
		//	}
		//	_root.QuizTrack.countScore (weight);
		//}
		//
		//
		//// SECTION 6: COMMON TOOLBOX
		//
		//
		//// 6-1: Return formatted date properties
		//
		//LToolBox.prototype.getDateStamp = function () 
		//{
		//	var dateObj = new Date();
		//
		//	var year = dateObj.getFullYear();
		//	var month = this.formatNum(dateObj.getMonth()+1);
		//	var day = this.formatNum(dateObj.getDate());
		//	
		//	var dateString = year+"/"+month+"/"+day;
		//	return dateString;
		//}
		//
		//
		//// 6-2: Return formatted time properties
		//
		//LToolBox.prototype.getTimeStamp = function () 
		//{
		//	var timeObj = new Date();
		//
		//	var hours = this.formatNum(timeObj.getHours());
		//	var minutes = this.formatNum(timeObj.getMinutes());
		//	var seconds = this.formatNum(timeObj.getSeconds());
		//
		//	var timeString = hours+":"+minutes+":"+seconds;
		//	return timeString;
		//}
		//
		//// 6-3: Start or stop the session timer to calculate latency
		//
		//LToolBox.prototype.sessionTimer = function (action) 
		//{
		//	if (action.toLowerCase() == "start"){
		//		this.startTime = int(getTimer()/1000);
		//		
		//	} else if (action.toLowerCase() == "stop"){
		//		this.stopTime = int(getTimer()/1000);
		//		var elapsedSec = this.stopTime - this.startTime;
		//		return elapsedSec; 
		//	}
		//}
		//
		//
		//// 6-4: Return formatted date properties
		//
		//LToolBox.prototype.getLatency = function (timeInSec) 
		//{
		//	var l_seconds, l_minutes, l_hours, timeInHours;
		//	
		//	if (timeInSec <= 9) {
		//		l_seconds = "0"+timeInSec;
		//		l_minutes = "00";
		//		l_hours = "00";
		//	} else {
		//		l_seconds = timeInSec;
		//		l_minutes = "00";
		//		l_hours = "00";
		//	}
		//	if (l_seconds > 59) {
		//		l_minutes = int(l_seconds / 60);
		//		l_minutes = this.formatNum(l_minutes);
		//		l_seconds = l_seconds - (l_minutes * 60);
		//		l_seconds = this.formatNum(l_seconds);
		//		l_hours = "00";
		//	}
		//	if (l_minutes > 59) {
		//		l_hours = int(l_minutes/ 60);
		//		l_hours = this.formatNum(l_hours);
		//		l_minutes = l_minutes - (l_hours * 60);
		//		l_minutes = this.formatNum(l_minutes);
		//	}
		//	timeInHours = l_hours+":"+l_minutes+":"+l_seconds;
		//	return timeInHours;
		//}
		//
		//
		//// 6-5: Return formatted number - convert from single digit to double digit
		//
		//LToolBox.prototype.formatNum = function (num) {
		//	
		//	if (num <= 9) {
		//		num = "0"+num;
		//	}
		//	return num;
		//}
		//
		//
		//// 6-6: Trace the properties of an object and return its values in an Array
		//
		//LToolBox.prototype.getObjProp = function (objName, Trace) {
		//	
		//	var objNameArray = new Array();
		//	var i=0;
		//	
		//	for (x in objName){
		//		objNameArray[i] = objName[x];
		//		if(arguments[1] == true){
		//			trace(x+" : "+objName[x]);
		//		}
		//		i++;
		//	}
		//	return objNameArray.reverse();
		//}
		//
		//
		//// 6-7: Trace Session Object properties to confirm tracking
		//
		//LToolBox.prototype.reportToOutput = function (defined) {
		//	
		//	var x,y;
		//	
		//	for(prop in this){
		//		
		//		x = this[prop];
		//		y = typeof(this[prop]);
		//		
		//		if(defined == true){
		//			if(x != undefined && y != "function" && y != "object" ){
		//				trace("this."+prop+" : "+this[prop]);
		//			}
		//			
		//		} else if (defined == false || eval(defined) == undefined){
		//			trace("this."+prop+" : "+this[prop]);
		//			
		//		} else if (defined.toLowerCase() == "object") {
		//			if(y == "object" ){
		//				trace("this."+prop);
		//			}
		//			
		//		} else if (defined.toLowerCase() == "function") {
		//			if(y == "function" ){
		//				trace("this."+prop);
		//			}
		//		}
		//	}
		//	trace("-------------------");
		//	trace("");
		//}
		//
		//#endinitclip
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.LGlobalClass, null, null);


(lib.Struggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Stuggle
	this.instance = new lib.StruggleMain();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:12.4},0).wait(2).to({x:4.1},0).wait(2).to({x:-5.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229,-133.6,458,267.3);


(lib.Scoreboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgkBYQgRgJgHgRIgBgFQAAgHAFgFQAFgEAHAAQAIAAAFAGIAJALQAHAHAPAAQAKAAAJgIQAJgHAAgJQAAgegogFQgSgBAAgMQAAgLAOgFIAZgGQAIgCAFgEQAEgEAAgGQAAgSgcAAQgJAAgLAHQgMAHgEAAQgHAAgEgEQgGgGAAgGQAAgKAVgLQASgJAMAAQAbAAARAMQARANABAZQAAANgGAJQgEAKgLAGQAZAMAAAgQAAAZgTARQgSARgZAAQgUAAgQgIg");
	this.shape.setTransform(20.6,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgkBYQgSgJgGgRIgBgFQAAgIAGgEQAEgEAHAAQAIAAAFAGIAJALQAHAHAPAAQAKAAAJgHQAJgIAAgJQAAgfgogEQgSgBAAgMQAAgLAOgEIAZgHQAIgCAFgEQAEgEAAgGQABgSgcAAQgKAAgLAHQgLAHgFAAQgHAAgEgEQgGgGAAgGQAAgKAVgKQASgKAMAAQAaAAASAMQASANAAAZQgBANgFAKQgEAJgLAGQAZAMAAAgQAAAZgTARQgSARgZAAQgUAAgQgIg");
	this.shape_1.setTransform(-20.1,11.4);

	this.instance = new lib.ScoreboardBackground();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.9,1.463,1.463);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scoreboard, new cjs.Rectangle(-40.2,-30.1,81.5,61.6), null);


(lib.trophywhy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trophywhystill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.2,8.5,34.9,12.4);


(lib.trophywhere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trophywherestll();
	this.instance.parent = this;
	this.instance.setTransform(-368.6,-90.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415.1,-74.1,25.6,23);


(lib.trophywhen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trophywhenstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({alpha:0},0).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,14.4,22.1,18.7);


(lib.trophyto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trophytostill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,18,30,20.7);


(lib.Trophybottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.gotoAndPlay(60);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer 1
	this.instance = new lib.trophybottomstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},59).wait(10).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,-26.1,157.6,45.1);


(lib.howbubbletail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.howbubbletailstilll();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-10.1,26.2,21);


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


(lib.FBoundingBoxSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{enabled:0,disabled:1});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent;
		
		component.registerSkinElement(boundingBox, "background");
		
		stop();*/
	}
	this.frame_1 = function() {
		/* 
		
		component.registerSkinElement(boundingBox2,"backgroundDisabled");
		
		stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Skin Elements
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AH0H0IvnAAIAAvnIPnAAg");
	this.shape.setTransform(50,50);

	this.boundingBox = new lib.boundingBox();
	this.boundingBox.parent = this;
	this.boundingBox.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.boundingBox},{t:this.shape}]}).to({state:[{t:this.boundingBox},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,102);


(lib.fpb_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_up();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_up();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_up();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_up();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_up();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_up, new cjs.Rectangle(0,0,100.1,100), null);


(lib.fpb_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_over();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_over();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_over();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_over();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_over();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_over, new cjs.Rectangle(0,0,100.1,100), null);


(lib.fpb_down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame4, "shadow");
		component.registerSkinElement(frame2, "darkshadow");
		component.registerSkinElement(frame3, "highlight");
		component.registerSkinElement(frame1, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_press();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_press();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_press();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_press();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_press();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_down, new cjs.Rectangle(0,0,100.1,100), null);


(lib.fpb_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_disabled();
	this.frame5.parent = this;
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_disabled();
	this.frame4.parent = this;
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_disabled();
	this.frame3.parent = this;
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_disabled();
	this.frame2.parent = this;
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_disabled();
	this.frame1.parent = this;
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fpb_disabled, new cjs.Rectangle(0,0,100.1,100), null);


(lib.UI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Menu button -----------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		this.vol_mute.addEventListener("click", volMute.bind(this));
		
		//Nav buttons -----------------------------------------
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmAdv',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.2;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		//volume functions -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume -0.1;
			if(!mute){
				bgm.volume -= 0.1;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.1;
			if(!mute){
				bgm.volume += 0.1;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		
		function volMute()
		{
			if(!mute){
				mute = true
				bgm.volume = 0;
			}
			else{
				mute = false;
				bgm.volume = prev_vol;
			}
			console.log(mute);
		}
		
		
		//Nav functions -----------------------------------------
		
		
		function openNext(){
		
		 window.open ("adverb_test1.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adverb_Scene9.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mute
	this.vol_mute = new lib.vol_mute();
	this.vol_mute.parent = this;
	this.vol_mute.setTransform(31.8,2.1,1,1,0,0,0,15,14.1);
	new cjs.ButtonHelper(this.vol_mute, 0, 1, 2, false, new lib.vol_mute(), 3);

	this.timeline.addTween(cjs.Tween.get(this.vol_mute).wait(1));

	// main
	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-220.6,376.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(-438,335.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(-1.7,335.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.vol_up = new lib.vol_pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(-6.7,2.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.vol_pos(), 3);

	this.vol_dwn = new lib.vol_neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(-28.7,2.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.vol_neg(), 3);

	this.btn_menu = new lib.menu_main();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(-89.6,2.6,1,1.143,0,0,0,23.4,10.5);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.menu_main(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAYBrQgBgLgUgUQgQgRgKAAIAAh1QAKAAASgTQATgTAAgKg");
	this.shape.setTransform(-47.7,2.3,0.687,0.681);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADBMQgQgRgKAAIAAh1QAKgBASgSQATgTAAgJIAADTQgBgKgUgUg");
	this.shape_1.setTransform(-47.7,2.3,0.687,0.681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s("#000000").ss(1.5,1,1).rr(-0.75,-3.45,1.5,6.9,0.2);
	this.shape_2.setTransform(-52.2,2.3,1,1.003);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AAHAAQAAAJgHAHQgCAEgEACIAAgrQAEACACAEQACACACACQADAFAAAGg");
	this.shape_3.setTransform(-43.2,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGgUQAEABACAEIABAAIADAFQADAEAAAGQAAAJgGAHIgBAAQgCAEgEABg");
	this.shape_4.setTransform(-46.5,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-486.5,-13,534.3,399), null);


(lib.trophyhowstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.howbubbletail();
	this.instance.parent = this;
	this.instance.setTransform(54.7,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trophyhowstill, new cjs.Rectangle(39.3,16.1,26.2,21), null);


(lib.trophyhow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trophyhowstill();
	this.instance.parent = this;
	this.instance.setTransform(-387.6,-112.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348.3,-96.1,26.2,21.1);


(lib.fpb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,over:1,down:2,"disabled":3});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 6
	this.over_mc = new lib.fpb_over();
	this.over_mc.parent = this;

	this.disabled_mc = new lib.fpb_disabled();
	this.disabled_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.over_mc}]},1).to({state:[]},1).to({state:[{t:this.disabled_mc}]},1).wait(1));

	// states
	this.up_mc = new lib.fpb_up();
	this.up_mc.parent = this;

	this.down_mc = new lib.fpb_down();
	this.down_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.up_mc}]}).to({state:[]},1).to({state:[{t:this.down_mc}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


(lib.adverbtrophywords = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol193("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(379.8,274.1);

	this.instance_1 = new lib.Symbol192("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(370.5,278.3);

	this.instance_2 = new lib.Symbol191("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(360.9,273.6);

	this.instance_3 = new lib.Symbol190("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(346.7,274);

	this.instance_4 = new lib.Symbol189("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(329.3,280.1);

	this.instance_5 = new lib.Symbol188("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(323.1,273.5);

	this.instance_6 = new lib.Symbol196("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(377.2,275.8);

	this.instance_7 = new lib.Symbol195("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(367.6,275.9);

	this.instance_8 = new lib.Symbol194("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(318,273.6);

	this.instance_9 = new lib.Symbol193("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(379.9,256.5,1,1,-7.7);
	this.instance_9.alpha = 0;

	this.instance_10 = new lib.Symbol191("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(361,258.9,1,1,-10.5);
	this.instance_10.alpha = 0;

	this.instance_11 = new lib.Symbol190("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(346.9,262.2,1,1,-11.6);
	this.instance_11.alpha = 0;

	this.instance_12 = new lib.Symbol189("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(330.7,271.7,1,1,-11.6);
	this.instance_12.alpha = 0;

	this.instance_13 = new lib.Symbol198("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(372.5,276);

	this.instance_14 = new lib.Symbol195("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(363.1,275.9);

	this.instance_15 = new lib.Symbol197("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(313.4,273.8);

	this.instance_16 = new lib.Symbol195("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(368,259.3,1,1,-8.9);
	this.instance_16.alpha = 0;

	this.instance_17 = new lib.Symbol193("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(379.9,256.5,1,1,-7.7);
	this.instance_17.alpha = 0;

	this.instance_18 = new lib.Symbol191("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(361,258.9,1,1,-10.5);
	this.instance_18.alpha = 0;

	this.instance_19 = new lib.Symbol190("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(346.9,262.2,1,1,-11.6);
	this.instance_19.alpha = 0;

	this.instance_20 = new lib.Symbol189("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(330.7,271.7,1,1,-11.6);
	this.instance_20.alpha = 0;

	this.instance_21 = new lib.Symbol202("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(369.8,276.1);

	this.instance_22 = new lib.Symbol201("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(358.7,276);

	this.instance_23 = new lib.Symbol200("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(347.3,273.9);

	this.instance_24 = new lib.Symbol199("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(324.8,273.6);

	this.instance_25 = new lib.Symbol193("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(379.9,256.5,1,1,-7.7);
	this.instance_25.alpha = 0;

	this.instance_26 = new lib.Symbol189("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(330.7,271.7,1,1,-11.6);
	this.instance_26.alpha = 0;

	this.instance_27 = new lib.Symbol214("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(410.3,273.9);

	this.instance_28 = new lib.Symbol210("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(403.5,274.1);

	this.instance_29 = new lib.Symbol213("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(396.8,275.2);

	this.instance_30 = new lib.Symbol211("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(389.2,275.3);

	this.instance_31 = new lib.Symbol210("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(381.9,274.1);

	this.instance_32 = new lib.Symbol212("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(374.5,275);

	this.instance_33 = new lib.Symbol211("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(366.7,275.3);

	this.instance_34 = new lib.Symbol210("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(355.2,274.1);

	this.instance_35 = new lib.Symbol209("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(348.4,275.3);

	this.instance_36 = new lib.Symbol208("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(340.8,273.4);

	this.instance_37 = new lib.Symbol207("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(331.9,275.4);

	this.instance_38 = new lib.Symbol206("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(319.1,275.3);

	this.instance_39 = new lib.Symbol205("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(311.4,273.5);

	this.instance_40 = new lib.Symbol204("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(300.2,278.5);

	this.instance_41 = new lib.Symbol203("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(294.1,273.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5,p:{rotation:0,x:323.1,y:273.5,alpha:1}},{t:this.instance_4,p:{rotation:0,x:329.3,y:280.1,alpha:1}},{t:this.instance_3,p:{rotation:0,x:346.7,y:274,alpha:1}},{t:this.instance_2,p:{rotation:0,y:273.6,x:360.9,alpha:1}},{t:this.instance_1,p:{rotation:0,x:370.5,y:278.3,alpha:1}},{t:this.instance,p:{rotation:0,x:379.8,y:274.1,alpha:1}}]},24).to({state:[{t:this.instance_5,p:{rotation:7,x:323,y:271.6,alpha:1}},{t:this.instance_4,p:{rotation:5.7,x:328.6,y:278.8,alpha:1}},{t:this.instance_3,p:{rotation:1.6,x:346.6,y:274,alpha:1}},{t:this.instance_2,p:{rotation:0,y:273.6,x:360.9,alpha:1}},{t:this.instance_1,p:{rotation:0,x:370.5,y:278.3,alpha:1}},{t:this.instance,p:{rotation:0,x:379.8,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:11.3,x:323,y:266.6,alpha:1}},{t:this.instance_4,p:{rotation:10.7,x:328,y:274.2,alpha:1}},{t:this.instance_3,p:{rotation:8.2,x:346.5,y:271.3,alpha:1}},{t:this.instance_2,p:{rotation:5.4,y:272.5,x:360.9,alpha:1}},{t:this.instance_1,p:{rotation:3.1,x:370.2,y:277.9,alpha:1}},{t:this.instance,p:{rotation:0.8,x:379.8,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:11.3,x:323,y:260.4,alpha:1}},{t:this.instance_4,p:{rotation:11.6,x:327.9,y:268.1,alpha:1}},{t:this.instance_3,p:{rotation:11.6,x:346.5,y:265.8,alpha:1}},{t:this.instance_2,p:{rotation:10.5,y:268.2,x:360.8,alpha:1}},{t:this.instance_1,p:{rotation:9.3,x:369.6,y:274.5,alpha:1}},{t:this.instance,p:{rotation:7.7,x:379.6,y:271.8,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:7,x:323,y:255.4,alpha:1}},{t:this.instance_4,p:{rotation:8.2,x:328.3,y:262.7,alpha:1}},{t:this.instance_3,p:{rotation:10.7,x:346.5,y:259.7,alpha:1}},{t:this.instance_2,p:{rotation:11.7,y:262.1,x:360.8,alpha:1}},{t:this.instance_1,p:{rotation:11.8,x:369.4,y:268.7,alpha:1}},{t:this.instance,p:{rotation:11.5,x:379.6,y:266.5,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:0,x:323.1,y:253.5,alpha:1}},{t:this.instance_4,p:{rotation:1.6,x:329.1,y:260.1,alpha:1}},{t:this.instance_3,p:{rotation:5.7,x:346.6,y:255.2,alpha:1}},{t:this.instance_2,p:{rotation:8.5,y:256.5,x:360.9,alpha:1}},{t:this.instance_1,p:{rotation:9.9,x:369.5,y:262.8,alpha:1}},{t:this.instance,p:{rotation:11,x:379.6,y:260.4,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-7,x:323.2,y:255.4,alpha:1}},{t:this.instance_4,p:{rotation:-5.7,x:330,y:261.2,alpha:1}},{t:this.instance_3,p:{rotation:-1.6,x:346.7,y:254.1,alpha:1}},{t:this.instance_2,p:{rotation:2,y:253.7,x:360.9,alpha:1}},{t:this.instance_1,p:{rotation:4.3,x:370.1,y:258.9,alpha:1}},{t:this.instance,p:{rotation:6.3,x:379.7,y:255.7,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:260.4,alpha:1}},{t:this.instance_4,p:{rotation:-10.7,x:330.6,y:265.6,alpha:1}},{t:this.instance_3,p:{rotation:-8.2,x:346.8,y:256.8,alpha:1}},{t:this.instance_2,p:{rotation:-5.4,y:254.6,x:361,alpha:1}},{t:this.instance_1,p:{rotation:-3.1,x:370.7,y:258.6,alpha:1}},{t:this.instance,p:{rotation:-0.8,x:379.8,y:254.2,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:1}},{t:this.instance_4,p:{rotation:-11.6,x:330.7,y:271.7,alpha:1}},{t:this.instance_3,p:{rotation:-11.6,x:346.9,y:262.2,alpha:1}},{t:this.instance_2,p:{rotation:-10.5,y:258.9,x:361,alpha:1}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:1}},{t:this.instance,p:{rotation:-7.7,x:379.9,y:256.5,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_4,p:{rotation:-11.6,x:330.7,y:271.7,alpha:0}},{t:this.instance_3,p:{rotation:-11.6,x:346.9,y:262.2,alpha:0}},{t:this.instance_2,p:{rotation:-10.5,y:258.9,x:361,alpha:0}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance,p:{rotation:-7.7,x:379.9,y:256.5,alpha:0}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_12,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_11,p:{x:346.9,y:262.2}},{t:this.instance_10,p:{rotation:-10.5,x:361,y:258.9}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_9,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:0,x:318,y:273.6,alpha:1}},{t:this.instance_4,p:{rotation:0,x:325.8,y:280.1,alpha:1}},{t:this.instance_3,p:{rotation:0,x:343.1,y:274,alpha:1}},{t:this.instance_2,p:{rotation:0,y:273.6,x:357.4,alpha:1}},{t:this.instance_7,p:{rotation:0,x:367.6,y:275.9,alpha:1}},{t:this.instance_6,p:{rotation:0,x:377.2,y:275.8,alpha:1}},{t:this.instance,p:{rotation:0,x:386.2,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_12,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_11,p:{x:346.9,y:262.2}},{t:this.instance_10,p:{rotation:-10.5,x:361,y:258.9}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_9,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:7,x:317.9,y:271.7,alpha:1}},{t:this.instance_4,p:{rotation:5.4,x:325.1,y:279,alpha:1}},{t:this.instance_3,p:{rotation:1.2,x:343.1,y:274,alpha:1}},{t:this.instance_2,p:{rotation:0,y:273.6,x:357.4,alpha:1}},{t:this.instance_7,p:{rotation:0,x:367.6,y:275.9,alpha:1}},{t:this.instance_6,p:{rotation:0,x:377.2,y:275.8,alpha:1}},{t:this.instance,p:{rotation:0,x:386.2,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_12,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_11,p:{x:346.9,y:262.2}},{t:this.instance_10,p:{rotation:-10.5,x:361,y:258.9}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_9,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:11.3,x:317.9,y:266.7,alpha:1}},{t:this.instance_4,p:{rotation:10.5,x:324.5,y:274.5,alpha:1}},{t:this.instance_3,p:{rotation:8,x:343,y:271.5,alpha:1}},{t:this.instance_2,p:{rotation:5,y:272.6,x:357.3,alpha:1}},{t:this.instance_7,p:{rotation:2.6,x:367.4,y:275.7,alpha:1}},{t:this.instance_6,p:{rotation:0.2,x:377.2,y:275.8,alpha:1}},{t:this.instance,p:{rotation:0,x:386.2,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_12,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_11,p:{x:346.9,y:262.2}},{t:this.instance_10,p:{rotation:-10.5,x:361,y:258.9}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_9,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:11.3,x:317.9,y:260.5,alpha:1}},{t:this.instance_4,p:{rotation:11.7,x:324.4,y:268.4,alpha:1}},{t:this.instance_3,p:{rotation:11.6,x:342.9,y:266.1,alpha:1}},{t:this.instance_2,p:{rotation:10.4,y:268.4,x:357.3,alpha:1}},{t:this.instance_7,p:{rotation:8.9,x:367.1,y:272.5,alpha:1}},{t:this.instance_6,p:{rotation:7.2,x:376.9,y:273.8,alpha:1}},{t:this.instance,p:{rotation:5.3,x:386.1,y:273.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_12,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_11,p:{x:346.9,y:262.2}},{t:this.instance_10,p:{rotation:-10.5,x:361,y:258.9}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_9,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:7,x:317.9,y:255.5,alpha:1}},{t:this.instance_4,p:{rotation:8.5,x:324.7,y:263,alpha:1}},{t:this.instance_3,p:{rotation:10.8,x:342.9,y:260,alpha:1}},{t:this.instance_2,p:{rotation:11.8,y:262.4,x:357.3,alpha:1}},{t:this.instance_7,p:{rotation:11.8,x:367,y:266.8,alpha:1}},{t:this.instance_6,p:{rotation:11.3,x:376.7,y:268.7,alpha:1}},{t:this.instance,p:{rotation:10.5,x:386,y:268.8,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_12,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_11,p:{x:346.9,y:262.2}},{t:this.instance_10,p:{rotation:-10.5,x:361,y:258.9}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_9,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:0,x:318,y:253.6,alpha:1}},{t:this.instance_4,p:{rotation:1.9,x:325.5,y:260.2,alpha:1}},{t:this.instance_3,p:{rotation:6,x:343,y:255.4,alpha:1}},{t:this.instance_2,p:{rotation:8.7,y:256.8,x:357.3,alpha:1}},{t:this.instance_7,p:{rotation:10.2,x:367.1,y:260.8,alpha:1}},{t:this.instance_6,p:{rotation:11.2,x:376.7,y:262.5,alpha:1}},{t:this.instance,p:{rotation:11.7,x:386,y:262.7,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_12,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_11,p:{x:346.9,y:262.2}},{t:this.instance_10,p:{rotation:-10.5,x:361,y:258.9}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_9,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-7,x:318.1,y:255.5,alpha:1}},{t:this.instance_4,p:{rotation:-5.4,x:326.4,y:261.1,alpha:1}},{t:this.instance_3,p:{rotation:-1.2,x:343.1,y:254.1,alpha:1}},{t:this.instance_2,p:{rotation:2.3,y:253.8,x:357.4,alpha:1}},{t:this.instance_7,p:{rotation:4.8,x:367.3,y:256.7,alpha:1}},{t:this.instance_6,p:{rotation:6.9,x:376.9,y:257.6,alpha:1}},{t:this.instance,p:{rotation:8.5,x:386,y:257.2,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_12,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_11,p:{x:346.9,y:262.2}},{t:this.instance_10,p:{rotation:-10.5,x:361,y:258.9}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_9,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:260.5,alpha:1}},{t:this.instance_4,p:{rotation:-10.5,x:327.1,y:265.3,alpha:1}},{t:this.instance_3,p:{rotation:-8,x:343.3,y:256.6,alpha:1}},{t:this.instance_2,p:{rotation:-5,y:254.5,x:357.4,alpha:1}},{t:this.instance_7,p:{rotation:-2.6,x:367.7,y:256.2,alpha:1}},{t:this.instance_6,p:{rotation:-0.2,x:377.3,y:255.8,alpha:1}},{t:this.instance,p:{rotation:2,x:386.1,y:254.3,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_12,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_11,p:{x:346.9,y:262.2}},{t:this.instance_10,p:{rotation:-10.5,x:361,y:258.9}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_9,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:1}},{t:this.instance_4,p:{rotation:-11.7,x:327.2,y:271.4,alpha:1}},{t:this.instance_3,p:{rotation:-11.6,x:343.3,y:261.9,alpha:1}},{t:this.instance_2,p:{rotation:-10.4,y:258.7,x:357.5,alpha:1}},{t:this.instance_7,p:{rotation:-8.9,x:368,y:259.3,alpha:1}},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:1}},{t:this.instance,p:{rotation:-5.3,x:386.3,y:255.2,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_12,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_11,p:{x:346.9,y:262.2}},{t:this.instance_10,p:{rotation:-10.5,x:361,y:258.9}},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_9,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:327.2,y:271.4,alpha:0}},{t:this.instance_3,p:{rotation:-11.6,x:343.3,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.4,y:258.7,x:357.5,alpha:0}},{t:this.instance_7,p:{rotation:-8.9,x:368,y:259.3,alpha:0}},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance,p:{rotation:-5.3,x:386.3,y:255.2,alpha:0}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_20,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_17,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_9,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:0,x:313.4,y:273.8,alpha:1}},{t:this.instance_4,p:{rotation:0,x:321.3,y:280.1,alpha:1}},{t:this.instance_3,p:{rotation:0,x:338.7,y:274,alpha:1}},{t:this.instance_2,p:{rotation:0,y:273.6,x:352.9,alpha:1}},{t:this.instance_14,p:{rotation:0,x:363.1,y:275.9,alpha:1}},{t:this.instance_13,p:{rotation:0,x:372.5,y:276,alpha:1}},{t:this.instance_7,p:{rotation:0,x:381.6,y:275.9,alpha:1}},{t:this.instance,p:{rotation:0,x:390.8,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_20,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_17,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_9,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:7,x:313.3,y:271.9,alpha:1}},{t:this.instance_4,p:{rotation:5.3,x:320.7,y:279,alpha:1}},{t:this.instance_3,p:{rotation:1.2,x:338.6,y:274,alpha:1}},{t:this.instance_2,p:{rotation:0,y:273.6,x:352.9,alpha:1}},{t:this.instance_14,p:{rotation:0,x:363.1,y:275.9,alpha:1}},{t:this.instance_13,p:{rotation:0,x:372.5,y:276,alpha:1}},{t:this.instance_7,p:{rotation:0,x:381.6,y:275.9,alpha:1}},{t:this.instance,p:{rotation:0,x:390.8,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_20,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_17,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_9,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:11.3,x:313.2,y:266.9,alpha:1}},{t:this.instance_4,p:{rotation:10.5,x:320,y:274.6,alpha:1}},{t:this.instance_3,p:{rotation:7.9,x:338.5,y:271.5,alpha:1}},{t:this.instance_2,p:{rotation:5,y:272.7,x:352.9,alpha:1}},{t:this.instance_14,p:{rotation:2.6,x:363,y:275.7,alpha:1}},{t:this.instance_13,p:{rotation:0.2,x:372.5,y:276,alpha:1}},{t:this.instance_7,p:{rotation:0,x:381.6,y:275.9,alpha:1}},{t:this.instance,p:{rotation:0,x:390.8,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_20,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_17,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_9,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:11.3,x:313.2,y:260.7,alpha:1}},{t:this.instance_4,p:{rotation:11.7,x:319.9,y:268.4,alpha:1}},{t:this.instance_3,p:{rotation:11.6,x:338.5,y:266.2,alpha:1}},{t:this.instance_2,p:{rotation:10.3,y:268.5,x:352.9,alpha:1}},{t:this.instance_14,p:{rotation:8.9,x:362.7,y:272.5,alpha:1}},{t:this.instance_13,p:{rotation:7.2,x:372.1,y:273.9,alpha:1}},{t:this.instance_7,p:{rotation:5.3,x:381.4,y:274.9,alpha:1}},{t:this.instance,p:{rotation:3.1,x:390.7,y:273.8,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_20,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_17,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_9,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:7,x:313.3,y:255.7,alpha:1}},{t:this.instance_4,p:{rotation:8.5,x:320.3,y:263,alpha:1}},{t:this.instance_3,p:{rotation:10.9,x:338.5,y:260,alpha:1}},{t:this.instance_2,p:{rotation:11.8,y:262.4,x:352.8,alpha:1}},{t:this.instance_14,p:{rotation:11.8,x:362.5,y:266.9,alpha:1}},{t:this.instance_13,p:{rotation:11.3,x:371.9,y:268.8,alpha:1}},{t:this.instance_7,p:{rotation:10.5,x:381.1,y:270.6,alpha:1}},{t:this.instance,p:{rotation:9.3,x:390.6,y:270.4,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_20,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_17,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_9,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:0,x:313.4,y:253.8,alpha:1}},{t:this.instance_4,p:{rotation:2,x:321.1,y:260.2,alpha:1}},{t:this.instance_3,p:{rotation:6,x:338.6,y:255.4,alpha:1}},{t:this.instance_2,p:{rotation:8.8,y:256.8,x:352.9,alpha:1}},{t:this.instance_14,p:{rotation:10.2,x:362.6,y:260.8,alpha:1}},{t:this.instance_13,p:{rotation:11.2,x:371.9,y:262.7,alpha:1}},{t:this.instance_7,p:{rotation:11.7,x:381,y:264.5,alpha:1}},{t:this.instance,p:{rotation:11.8,x:390.6,y:264.6,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_20,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_17,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_9,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-7,x:313.5,y:255.7,alpha:1}},{t:this.instance_4,p:{rotation:-5.3,x:322,y:261.1,alpha:1}},{t:this.instance_3,p:{rotation:-1.2,x:338.7,y:254.1,alpha:1}},{t:this.instance_2,p:{rotation:2.4,y:253.8,x:352.9,alpha:1}},{t:this.instance_14,p:{rotation:4.8,x:362.9,y:256.8,alpha:1}},{t:this.instance_13,p:{rotation:6.8,x:372.1,y:257.8,alpha:1}},{t:this.instance_7,p:{rotation:8.6,x:381.2,y:258.9,alpha:1}},{t:this.instance,p:{rotation:9.9,x:390.6,y:258.7,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_20,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_17,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_9,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:260.7,alpha:1}},{t:this.instance_4,p:{rotation:-10.5,x:322.6,y:265.3,alpha:1}},{t:this.instance_3,p:{rotation:-7.9,x:338.8,y:256.6,alpha:1}},{t:this.instance_2,p:{rotation:-5,y:254.5,x:353,alpha:1}},{t:this.instance_14,p:{rotation:-2.6,x:363.2,y:256.2,alpha:1}},{t:this.instance_13,p:{rotation:-0.2,x:372.5,y:256,alpha:1}},{t:this.instance_7,p:{rotation:2.1,x:381.5,y:256.1,alpha:1}},{t:this.instance,p:{rotation:4.3,x:390.7,y:254.8,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_20,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_17,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_9,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:1}},{t:this.instance_4,p:{rotation:-11.7,x:322.8,y:271.4,alpha:1}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:1}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:1}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:1}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:1}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:1}},{t:this.instance,p:{rotation:-3.1,x:390.8,y:254.5,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_20,p:{rotation:-11.6,x:330.7,y:271.7}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_17,p:{rotation:-7.7,x:379.9,y:256.5}},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_9,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:322.8,y:271.4,alpha:0}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance,p:{rotation:-3.1,x:390.8,y:254.5,alpha:0}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:0,x:324.8,y:273.6,alpha:1}},{t:this.instance_4,p:{rotation:0,x:332.7,y:280.1,alpha:1}},{t:this.instance_23,p:{rotation:0,y:273.9,x:347.3,alpha:1}},{t:this.instance_22,p:{rotation:0,x:358.7,y:276,alpha:1}},{t:this.instance_21,p:{rotation:0,x:369.8,y:276.1,alpha:1}},{t:this.instance,p:{rotation:0,x:380.3,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:7,x:324.7,y:271.7,alpha:1}},{t:this.instance_4,p:{rotation:5.3,x:332,y:279,alpha:1}},{t:this.instance_23,p:{rotation:1.9,y:273.7,x:347.3,alpha:1}},{t:this.instance_22,p:{rotation:0,x:358.7,y:276,alpha:1}},{t:this.instance_21,p:{rotation:0,x:369.8,y:276.1,alpha:1}},{t:this.instance,p:{rotation:0,x:380.3,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:11.3,x:324.7,y:266.7,alpha:1}},{t:this.instance_4,p:{rotation:10.5,x:331.4,y:274.6,alpha:1}},{t:this.instance_23,p:{rotation:8.4,y:270.9,x:347.2,alpha:1}},{t:this.instance_22,p:{rotation:6.2,x:358.3,y:274.6,alpha:1}},{t:this.instance_21,p:{rotation:3.7,x:369.6,y:275.6,alpha:1}},{t:this.instance,p:{rotation:1.1,x:380.3,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:11.3,x:324.7,y:260.5,alpha:1}},{t:this.instance_4,p:{rotation:11.7,x:331.3,y:268.4,alpha:1}},{t:this.instance_23,p:{rotation:11.7,y:265.4,x:347.1,alpha:1}},{t:this.instance_22,p:{rotation:10.9,x:358.1,y:269.8,alpha:1}},{t:this.instance_21,p:{rotation:9.6,x:369.3,y:271.9,alpha:1}},{t:this.instance,p:{rotation:7.9,x:380.1,y:271.6,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:7,x:324.7,y:255.5,alpha:1}},{t:this.instance_4,p:{rotation:8.5,x:331.6,y:263,alpha:1}},{t:this.instance_23,p:{rotation:10.6,y:259.3,x:347.1,alpha:1}},{t:this.instance_22,p:{rotation:11.5,x:358.1,y:263.7,alpha:1}},{t:this.instance_21,p:{rotation:11.8,x:369.1,y:266,alpha:1}},{t:this.instance,p:{rotation:11.6,x:380.1,y:266.3,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:0,x:324.8,y:253.6,alpha:1}},{t:this.instance_4,p:{rotation:2,x:332.4,y:260.2,alpha:1}},{t:this.instance_23,p:{rotation:5.4,y:255,x:347.2,alpha:1}},{t:this.instance_22,p:{rotation:7.8,x:358.3,y:258.4,alpha:1}},{t:this.instance_21,p:{rotation:9.6,x:369.3,y:260.2,alpha:1}},{t:this.instance,p:{rotation:10.9,x:380.1,y:260.2,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-7,x:324.8,y:255.5,alpha:1}},{t:this.instance_4,p:{rotation:-5.3,x:333.3,y:261.1,alpha:1}},{t:this.instance_23,p:{rotation:-1.9,y:254,x:347.3,alpha:1}},{t:this.instance_22,p:{rotation:1,x:358.6,y:256.1,alpha:1}},{t:this.instance_21,p:{rotation:3.7,x:369.6,y:256.6,alpha:1}},{t:this.instance,p:{rotation:6.1,x:380.2,y:255.5,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:260.5,alpha:1}},{t:this.instance_4,p:{rotation:-10.5,x:334,y:265.3,alpha:1}},{t:this.instance_23,p:{rotation:-8.4,y:256.8,x:347.4,alpha:1}},{t:this.instance_22,p:{rotation:-6.2,x:359,y:257.5,alpha:1}},{t:this.instance_21,p:{rotation:-3.7,x:370,y:256.6,alpha:1}},{t:this.instance,p:{rotation:-1.1,x:380.3,y:254.2,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:1}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:1}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:1}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:1}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:1}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:0,x:300.2,y:278.5}},{t:this.instance_39,p:{rotation:0,x:311.4,y:273.5}},{t:this.instance_38,p:{rotation:0,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:0,x:331.9,y:275.4}},{t:this.instance_36,p:{rotation:0,y:273.4,x:340.8}},{t:this.instance_35,p:{rotation:0,x:348.4,y:275.3}},{t:this.instance_34,p:{rotation:0,x:355.2,y:274.1}},{t:this.instance_33,p:{rotation:0,x:366.7,y:275.3}},{t:this.instance_32,p:{rotation:0,x:374.5,y:275}},{t:this.instance_31,p:{rotation:0,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:0,x:389.2,y:275.3}},{t:this.instance_29,p:{rotation:0,x:396.8,y:275.2}},{t:this.instance_28,p:{rotation:0,y:274.1,x:403.5}},{t:this.instance_27,p:{rotation:0,y:273.9,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:7,y:271.7,x:294.1}},{t:this.instance_40,p:{rotation:5.8,x:299.6,y:277.2}},{t:this.instance_39,p:{rotation:3.2,x:311.3,y:273.2}},{t:this.instance_38,p:{rotation:1.3,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:0,x:331.9,y:275.4}},{t:this.instance_36,p:{rotation:0,y:273.4,x:340.8}},{t:this.instance_35,p:{rotation:0,x:348.4,y:275.3}},{t:this.instance_34,p:{rotation:0,x:355.2,y:274.1}},{t:this.instance_33,p:{rotation:0,x:366.7,y:275.3}},{t:this.instance_32,p:{rotation:0,x:374.5,y:275}},{t:this.instance_31,p:{rotation:0,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:0,x:389.2,y:275.3}},{t:this.instance_29,p:{rotation:0,x:396.8,y:275.2}},{t:this.instance_28,p:{rotation:0,y:274.1,x:403.5}},{t:this.instance_27,p:{rotation:0,y:273.9,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:11.3,y:266.7,x:294}},{t:this.instance_40,p:{rotation:10.7,x:299.1,y:272.6}},{t:this.instance_39,p:{rotation:9.3,x:311.3,y:269.8}},{t:this.instance_38,p:{rotation:8,x:318.8,y:272.7}},{t:this.instance_37,p:{rotation:5.4,x:331.7,y:274.3}},{t:this.instance_36,p:{rotation:3.3,y:273,x:340.8}},{t:this.instance_35,p:{rotation:1.4,x:348.3,y:275.3}},{t:this.instance_34,p:{rotation:0,x:355.2,y:274.1}},{t:this.instance_33,p:{rotation:0,x:366.7,y:275.3}},{t:this.instance_32,p:{rotation:0,x:374.5,y:275}},{t:this.instance_31,p:{rotation:0,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:0,x:389.2,y:275.3}},{t:this.instance_29,p:{rotation:0,x:396.8,y:275.2}},{t:this.instance_28,p:{rotation:0,y:274.1,x:403.5}},{t:this.instance_27,p:{rotation:0,y:273.9,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:11.3,y:260.5,x:294}},{t:this.instance_40,p:{rotation:11.6,x:299.1,y:266.5}},{t:this.instance_39,p:{rotation:11.8,x:311.3,y:264}},{t:this.instance_38,p:{rotation:11.6,x:318.7,y:267.4}},{t:this.instance_37,p:{rotation:10.5,x:331.5,y:269.9}},{t:this.instance_36,p:{rotation:9.4,y:269.6,x:340.7}},{t:this.instance_35,p:{rotation:8.1,x:348,y:272.6}},{t:this.instance_34,p:{rotation:6.8,x:355.1,y:272.3}},{t:this.instance_33,p:{rotation:4.3,x:366.5,y:274.6}},{t:this.instance_32,p:{rotation:2.4,x:374.4,y:274.8}},{t:this.instance_31,p:{rotation:0.6,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:0,x:389.2,y:275.3}},{t:this.instance_29,p:{rotation:0,x:396.8,y:275.2}},{t:this.instance_28,p:{rotation:0,y:274.1,x:403.5}},{t:this.instance_27,p:{rotation:0,y:273.9,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:7,y:255.5,x:294.1}},{t:this.instance_40,p:{rotation:8.2,x:299.4,y:261.1}},{t:this.instance_39,p:{rotation:9.9,x:311.3,y:258}},{t:this.instance_38,p:{rotation:10.8,x:318.7,y:261.2}},{t:this.instance_37,p:{rotation:11.7,x:331.5,y:263.8}},{t:this.instance_36,p:{rotation:11.8,y:263.7,x:340.7}},{t:this.instance_35,p:{rotation:11.6,x:347.9,y:267.2}},{t:this.instance_34,p:{rotation:11.2,x:355,y:267.4}},{t:this.instance_33,p:{rotation:10,x:366.3,y:270.7}},{t:this.instance_32,p:{rotation:8.8,x:374.2,y:271.8}},{t:this.instance_31,p:{rotation:7.4,x:381.8,y:271.9}},{t:this.instance_30,p:{rotation:6,x:389,y:273.9}},{t:this.instance_29,p:{rotation:4.3,x:396.6,y:274.5}},{t:this.instance_28,p:{rotation:2.6,y:273.9,x:403.5}},{t:this.instance_27,p:{rotation:1,y:273.8,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:253.6,x:294.1}},{t:this.instance_40,p:{rotation:1.5,x:300,y:258.5}},{t:this.instance_39,p:{rotation:4.2,x:311.3,y:254.2}},{t:this.instance_38,p:{rotation:6,x:318.9,y:256.7}},{t:this.instance_37,p:{rotation:8.5,x:331.6,y:258.3}},{t:this.instance_36,p:{rotation:9.8,y:257.8,x:340.7}},{t:this.instance_35,p:{rotation:10.8,x:347.9,y:261.1}},{t:this.instance_34,p:{rotation:11.3,x:355,y:261.2}},{t:this.instance_33,p:{rotation:11.8,x:366.2,y:264.7}},{t:this.instance_32,p:{rotation:11.8,x:374.1,y:266.1}},{t:this.instance_31,p:{rotation:11.4,x:381.7,y:266.7}},{t:this.instance_30,p:{rotation:10.8,x:388.8,y:269.3}},{t:this.instance_29,p:{rotation:9.9,x:396.4,y:270.6}},{t:this.instance_28,p:{rotation:8.9,y:270.7,x:403.4}},{t:this.instance_27,p:{rotation:7.8,y:271.5,x:410.2}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:-7,y:255.5,x:294.2}},{t:this.instance_40,p:{rotation:-5.8,x:300.7,y:259.7}},{t:this.instance_39,p:{rotation:-3.2,x:311.4,y:253.9}},{t:this.instance_38,p:{rotation:-1.3,x:319.2,y:255.4}},{t:this.instance_37,p:{rotation:1.9,x:331.9,y:255.5}},{t:this.instance_36,p:{rotation:4.1,y:254,x:340.8}},{t:this.instance_35,p:{rotation:5.8,x:348.1,y:256.6}},{t:this.instance_34,p:{rotation:7.2,x:355.1,y:256.2}},{t:this.instance_33,p:{rotation:9.2,x:366.3,y:258.9}},{t:this.instance_32,p:{rotation:10.3,x:374.2,y:260.1}},{t:this.instance_31,p:{rotation:11.1,x:381.7,y:260.6}},{t:this.instance_30,p:{rotation:11.6,x:388.8,y:263.1}},{t:this.instance_29,p:{rotation:11.8,x:396.3,y:264.6}},{t:this.instance_28,p:{rotation:11.8,y:265,x:403.3}},{t:this.instance_27,p:{rotation:11.5,y:266.2,x:410.1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:-11.3,y:260.5,x:294.3}},{t:this.instance_40,p:{rotation:-10.7,x:301.2,y:264.1}},{t:this.instance_39,p:{rotation:-9.3,x:311.5,y:257.3}},{t:this.instance_38,p:{rotation:-8,x:319.5,y:257.9}},{t:this.instance_37,p:{rotation:-5.4,x:332.2,y:256.4}},{t:this.instance_36,p:{rotation:-3.3,y:253.8,x:340.8}},{t:this.instance_35,p:{rotation:-1.4,x:348.4,y:255.4}},{t:this.instance_34,p:{rotation:0.3,x:355.2,y:254.1}},{t:this.instance_33,p:{rotation:3.1,x:366.6,y:255.6}},{t:this.instance_32,p:{rotation:5,x:374.3,y:255.9}},{t:this.instance_31,p:{rotation:6.6,x:381.8,y:255.8}},{t:this.instance_30,p:{rotation:8,x:388.9,y:257.8}},{t:this.instance_29,p:{rotation:9.3,x:396.4,y:258.9}},{t:this.instance_28,p:{rotation:10.2,y:259,x:403.3}},{t:this.instance_27,p:{rotation:10.9,y:260,x:410.1}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:-11.3,y:266.7,x:294.3}},{t:this.instance_40,p:{rotation:-11.6,x:301.3,y:270.2}},{t:this.instance_39,p:{rotation:-11.8,x:311.5,y:263}},{t:this.instance_38,p:{rotation:-11.6,x:319.6,y:263.2}},{t:this.instance_37,p:{rotation:-10.5,x:332.4,y:260.8}},{t:this.instance_36,p:{rotation:-9.4,y:257.3,x:340.9}},{t:this.instance_35,p:{rotation:-8.1,x:348.7,y:258}},{t:this.instance_34,p:{rotation:-6.8,x:355.4,y:255.9}},{t:this.instance_33,p:{rotation:-4.3,x:366.8,y:255.9}},{t:this.instance_32,p:{rotation:-2.4,x:374.6,y:255.2}},{t:this.instance_31,p:{rotation:-0.6,x:382,y:254.1}},{t:this.instance_30,p:{rotation:1.3,x:389.2,y:255.3}},{t:this.instance_29,p:{rotation:3.1,x:396.7,y:255.5}},{t:this.instance_28,p:{rotation:4.7,y:254.9,x:403.5}},{t:this.instance_27,p:{rotation:6.2,y:255.3,x:410.2}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:-7,y:271.7,x:294.2}},{t:this.instance_40,p:{rotation:-8.2,x:300.9,y:275.7}},{t:this.instance_39,p:{rotation:-9.9,x:311.5,y:269}},{t:this.instance_38,p:{rotation:-10.8,x:319.6,y:269.4}},{t:this.instance_37,p:{rotation:-11.7,x:332.4,y:266.8}},{t:this.instance_36,p:{rotation:-11.8,y:263.1,x:340.9}},{t:this.instance_35,p:{rotation:-11.6,x:348.8,y:263.4}},{t:this.instance_34,p:{rotation:-11.2,x:355.5,y:260.8}},{t:this.instance_33,p:{rotation:-10,x:367.1,y:259.8}},{t:this.instance_32,p:{rotation:-8.8,x:374.8,y:258.3}},{t:this.instance_31,p:{rotation:-7.4,x:382.1,y:256.3}},{t:this.instance_30,p:{rotation:-6,x:389.5,y:256.6}},{t:this.instance_29,p:{rotation:-4.3,x:396.9,y:255.8}},{t:this.instance_28,p:{rotation:-2.6,y:254.4,x:403.6}},{t:this.instance_27,p:{rotation:-1,y:253.9,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:-1.5,x:300.3,y:278.4}},{t:this.instance_39,p:{rotation:-4.2,x:311.4,y:272.9}},{t:this.instance_38,p:{rotation:-6,x:319.4,y:274}},{t:this.instance_37,p:{rotation:-8.5,x:332.3,y:272.4}},{t:this.instance_36,p:{rotation:-9.8,y:269,x:340.9}},{t:this.instance_35,p:{rotation:-10.8,x:348.8,y:269.5}},{t:this.instance_34,p:{rotation:-11.3,x:355.5,y:267}},{t:this.instance_33,p:{rotation:-11.8,x:367.1,y:265.7}},{t:this.instance_32,p:{rotation:-11.8,x:374.9,y:263.9}},{t:this.instance_31,p:{rotation:-11.4,x:382.2,y:261.4}},{t:this.instance_30,p:{rotation:-10.8,x:389.6,y:261.1}},{t:this.instance_29,p:{rotation:-9.9,x:397.2,y:259.7}},{t:this.instance_28,p:{rotation:-8.9,y:257.5,x:403.7}},{t:this.instance_27,p:{rotation:-7.8,y:256.3,x:410.4}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:0,x:300.2,y:278.5}},{t:this.instance_39,p:{rotation:0,x:311.4,y:273.5}},{t:this.instance_38,p:{rotation:0,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:-1.9,x:332,y:275.3}},{t:this.instance_36,p:{rotation:-4.1,y:272.8,x:340.8}},{t:this.instance_35,p:{rotation:-5.8,x:348.6,y:274.1}},{t:this.instance_34,p:{rotation:-7.2,x:355.4,y:272.1}},{t:this.instance_33,p:{rotation:-9.2,x:367,y:271.5}},{t:this.instance_32,p:{rotation:-10.3,x:374.9,y:269.9}},{t:this.instance_31,p:{rotation:-11.1,x:382.2,y:267.6}},{t:this.instance_30,p:{rotation:-11.6,x:389.7,y:267.3}},{t:this.instance_29,p:{rotation:-11.8,x:397.2,y:265.6}},{t:this.instance_28,p:{rotation:-11.8,y:263.2,x:403.8}},{t:this.instance_27,p:{rotation:-11.5,y:261.5,x:410.5}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:0,x:300.2,y:278.5}},{t:this.instance_39,p:{rotation:0,x:311.4,y:273.5}},{t:this.instance_38,p:{rotation:0,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:0,x:331.9,y:275.4}},{t:this.instance_36,p:{rotation:0,y:273.4,x:340.8}},{t:this.instance_35,p:{rotation:0,x:348.4,y:275.3}},{t:this.instance_34,p:{rotation:-0.3,x:355.3,y:274.1}},{t:this.instance_33,p:{rotation:-3.1,x:366.8,y:274.9}},{t:this.instance_32,p:{rotation:-5,x:374.7,y:274.1}},{t:this.instance_31,p:{rotation:-6.6,x:382.1,y:272.5}},{t:this.instance_30,p:{rotation:-8,x:389.5,y:272.7}},{t:this.instance_29,p:{rotation:-9.3,x:397.1,y:271.4}},{t:this.instance_28,p:{rotation:-10.2,y:269.2,x:403.7}},{t:this.instance_27,p:{rotation:-10.9,y:267.7,x:410.5}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:0,x:300.2,y:278.5}},{t:this.instance_39,p:{rotation:0,x:311.4,y:273.5}},{t:this.instance_38,p:{rotation:0,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:0,x:331.9,y:275.4}},{t:this.instance_36,p:{rotation:0,y:273.4,x:340.8}},{t:this.instance_35,p:{rotation:0,x:348.4,y:275.3}},{t:this.instance_34,p:{rotation:0,x:355.2,y:274.1}},{t:this.instance_33,p:{rotation:0,x:366.7,y:275.3}},{t:this.instance_32,p:{rotation:0,x:374.5,y:275}},{t:this.instance_31,p:{rotation:0,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:-1.3,x:389.3,y:275.2}},{t:this.instance_29,p:{rotation:-3.1,x:396.9,y:274.8}},{t:this.instance_28,p:{rotation:-4.7,y:273.3,x:403.6}},{t:this.instance_27,p:{rotation:-6.2,y:272.4,x:410.4}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:0,x:300.2,y:278.5}},{t:this.instance_39,p:{rotation:0,x:311.4,y:273.5}},{t:this.instance_38,p:{rotation:0,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:0,x:331.9,y:275.4}},{t:this.instance_36,p:{rotation:0,y:273.4,x:340.8}},{t:this.instance_35,p:{rotation:0,x:348.4,y:275.3}},{t:this.instance_34,p:{rotation:0,x:355.2,y:274.1}},{t:this.instance_33,p:{rotation:0,x:366.7,y:275.3}},{t:this.instance_32,p:{rotation:0,x:374.5,y:275}},{t:this.instance_31,p:{rotation:0,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:0,x:389.2,y:275.3}},{t:this.instance_29,p:{rotation:0,x:396.8,y:275.2}},{t:this.instance_28,p:{rotation:0,y:274.1,x:403.5}},{t:this.instance_27,p:{rotation:0,y:273.9,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:0,x:300.2,y:278.5}},{t:this.instance_39,p:{rotation:0,x:311.4,y:273.5}},{t:this.instance_38,p:{rotation:0,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:0,x:331.9,y:275.4}},{t:this.instance_36,p:{rotation:0,y:273.4,x:340.8}},{t:this.instance_35,p:{rotation:0,x:348.4,y:275.3}},{t:this.instance_34,p:{rotation:0,x:355.2,y:274.1}},{t:this.instance_33,p:{rotation:0,x:366.7,y:275.3}},{t:this.instance_32,p:{rotation:0,x:374.5,y:275}},{t:this.instance_31,p:{rotation:0,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:0,x:389.2,y:275.3}},{t:this.instance_29,p:{rotation:0,x:396.8,y:275.2}},{t:this.instance_28,p:{rotation:0,y:274.1,x:403.5}},{t:this.instance_27,p:{rotation:0,y:273.9,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:0,x:300.2,y:278.5}},{t:this.instance_39,p:{rotation:0,x:311.4,y:273.5}},{t:this.instance_38,p:{rotation:0,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:0,x:331.9,y:275.4}},{t:this.instance_36,p:{rotation:0,y:273.4,x:340.8}},{t:this.instance_35,p:{rotation:0,x:348.4,y:275.3}},{t:this.instance_34,p:{rotation:0,x:355.2,y:274.1}},{t:this.instance_33,p:{rotation:0,x:366.7,y:275.3}},{t:this.instance_32,p:{rotation:0,x:374.5,y:275}},{t:this.instance_31,p:{rotation:0,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:0,x:389.2,y:275.3}},{t:this.instance_29,p:{rotation:0,x:396.8,y:275.2}},{t:this.instance_28,p:{rotation:0,y:274.1,x:403.5}},{t:this.instance_27,p:{rotation:0,y:273.9,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:0,x:300.2,y:278.5}},{t:this.instance_39,p:{rotation:0,x:311.4,y:273.5}},{t:this.instance_38,p:{rotation:0,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:0,x:331.9,y:275.4}},{t:this.instance_36,p:{rotation:0,y:273.4,x:340.8}},{t:this.instance_35,p:{rotation:0,x:348.4,y:275.3}},{t:this.instance_34,p:{rotation:0,x:355.2,y:274.1}},{t:this.instance_33,p:{rotation:0,x:366.7,y:275.3}},{t:this.instance_32,p:{rotation:0,x:374.5,y:275}},{t:this.instance_31,p:{rotation:0,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:0,x:389.2,y:275.3}},{t:this.instance_29,p:{rotation:0,x:396.8,y:275.2}},{t:this.instance_28,p:{rotation:0,y:274.1,x:403.5}},{t:this.instance_27,p:{rotation:0,y:273.9,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:0,x:300.2,y:278.5}},{t:this.instance_39,p:{rotation:0,x:311.4,y:273.5}},{t:this.instance_38,p:{rotation:0,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:0,x:331.9,y:275.4}},{t:this.instance_36,p:{rotation:0,y:273.4,x:340.8}},{t:this.instance_35,p:{rotation:0,x:348.4,y:275.3}},{t:this.instance_34,p:{rotation:0,x:355.2,y:274.1}},{t:this.instance_33,p:{rotation:0,x:366.7,y:275.3}},{t:this.instance_32,p:{rotation:0,x:374.5,y:275}},{t:this.instance_31,p:{rotation:0,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:0,x:389.2,y:275.3}},{t:this.instance_29,p:{rotation:0,x:396.8,y:275.2}},{t:this.instance_28,p:{rotation:0,y:274.1,x:403.5}},{t:this.instance_27,p:{rotation:0,y:273.9,x:410.3}}]},1).to({state:[{t:this.instance_5,p:{rotation:-11.3,x:323.2,y:266.6,alpha:0}},{t:this.instance_26},{t:this.instance_19},{t:this.instance_18},{t:this.instance_1,p:{rotation:-9.3,x:371.3,y:262,alpha:0}},{t:this.instance_25},{t:this.instance_8,p:{rotation:-11.3,x:318.1,y:266.7,alpha:0}},{t:this.instance_20,p:{rotation:-11.7,x:327.2,y:271.4}},{t:this.instance_11,p:{x:343.3,y:261.9}},{t:this.instance_10,p:{rotation:-10.4,x:357.5,y:258.7}},{t:this.instance_16},{t:this.instance_6,p:{rotation:-7.2,x:377.6,y:257.8,alpha:0}},{t:this.instance_17,p:{rotation:-5.3,x:386.3,y:255.2}},{t:this.instance_15,p:{rotation:-11.3,x:313.5,y:266.9,alpha:0}},{t:this.instance_12,p:{rotation:-11.7,x:322.8,y:271.4}},{t:this.instance_3,p:{rotation:-11.6,x:338.9,y:261.9,alpha:0}},{t:this.instance_2,p:{rotation:-10.3,y:258.6,x:353,alpha:0}},{t:this.instance_14,p:{rotation:-8.9,x:363.6,y:259.2,alpha:0}},{t:this.instance_13,p:{rotation:-7.2,x:372.9,y:258,alpha:0}},{t:this.instance_7,p:{rotation:-5.3,x:381.9,y:256.9,alpha:0}},{t:this.instance_9,p:{rotation:-3.1,x:390.8,y:254.5}},{t:this.instance_24,p:{rotation:-11.3,x:324.9,y:266.7,alpha:0}},{t:this.instance_4,p:{rotation:-11.7,x:334.1,y:271.4,alpha:0}},{t:this.instance_23,p:{rotation:-11.7,y:262.3,x:347.5,alpha:0}},{t:this.instance_22,p:{rotation:-10.9,x:359.2,y:262.1,alpha:0}},{t:this.instance_21,p:{rotation:-9.6,x:370.3,y:260.2,alpha:0}},{t:this.instance,p:{rotation:-7.9,x:380.4,y:256.6,alpha:0}},{t:this.instance_41,p:{rotation:0,y:273.6,x:294.1}},{t:this.instance_40,p:{rotation:0,x:300.2,y:278.5}},{t:this.instance_39,p:{rotation:0,x:311.4,y:273.5}},{t:this.instance_38,p:{rotation:0,x:319.1,y:275.3}},{t:this.instance_37,p:{rotation:0,x:331.9,y:275.4}},{t:this.instance_36,p:{rotation:0,y:273.4,x:340.8}},{t:this.instance_35,p:{rotation:0,x:348.4,y:275.3}},{t:this.instance_34,p:{rotation:0,x:355.2,y:274.1}},{t:this.instance_33,p:{rotation:0,x:366.7,y:275.3}},{t:this.instance_32,p:{rotation:0,x:374.5,y:275}},{t:this.instance_31,p:{rotation:0,x:381.9,y:274.1}},{t:this.instance_30,p:{rotation:0,x:389.2,y:275.3}},{t:this.instance_29,p:{rotation:0,x:396.8,y:275.2}},{t:this.instance_28,p:{rotation:0,y:274.1,x:403.5}},{t:this.instance_27,p:{rotation:0,y:273.9,x:410.3}}]},1).wait(2));

	// carrot
	this.instance_42 = new lib.trophywhy();
	this.instance_42.parent = this;
	this.instance_42.setTransform(334.4,273.1);

	this.instance_43 = new lib.trophywhere();
	this.instance_43.parent = this;
	this.instance_43.setTransform(696.6,355);

	this.instance_44 = new lib.trophyhow();
	this.instance_44.parent = this;
	this.instance_44.setTransform(732.8,379.3);

	this.instance_45 = new lib.trophyto();
	this.instance_45.parent = this;
	this.instance_45.setTransform(330.3,261);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42}]},24).to({state:[]},10).to({state:[{t:this.instance_43}]},10).to({state:[{t:this.instance_44}]},10).to({state:[{t:this.instance_45}]},10).wait(21));

	// bubble
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AJSC+Qj2BPlcAAQlbAAj2hPQj2hPAAhvQAAhuD2hPQBRgaBbgSQC8gjDpAAQDqAAC8AjQBbASBRAaQAxAPAoARQCPA/ANBPQABAIAAAHQAABvj2BPg");
	this.shape.setTransform(349.9,266.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApRC+Qj2hPAAhvQAAhuD2hQQBRgZBbgSQC8gjDpAAQDqAAC8AjQBbASBRAZQAxAQAoARQCPA/ANBPIABAPQAABvj2BPQj2BPlcAAQlbAAj2hPg");
	this.shape_1.setTransform(349.9,266.9);

	this.instance_46 = new lib.trophywhen();
	this.instance_46.parent = this;
	this.instance_46.setTransform(347.7,266.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AKridQCPA/ANBPQABAIAAAHQAABvj2BPQj2BPlcAAQlbAAj2hPQj2hPAAhvQAAhuD2hPQBRgaBbgSQC8gjDpAAQDqAAC8AjQBbASBRAaQAxAPAoARg");
	this.shape_2.setTransform(349.9,266.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("ANHgPQABAIAAAHQAABvj2BPQj2BPlcAAQlbAAj2hPQj2hPAAhvQAAhuD2hPQBRgaBbgSQC8gjDpAAQDqAAC8AjQBbASBRAaQAxAPAoARQCPA/ANBPg");
	this.shape_3.setTransform(349.9,266.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("ANIAAQAABvj2BPQj2BPlcAAQlbAAj2hPQj2hPAAhvQAAhuD2hPQBRgaBbgSQC8gjDpAAQDqAAC8AjQBbASBRAaQAxAPAoARQCPA/ANBPQABAIAAAHg");
	this.shape_4.setTransform(349.9,266.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},24).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.instance_46}]},10).to({state:[{t:this.shape_1},{t:this.shape_3}]},10).to({state:[{t:this.shape_1},{t:this.shape_4}]},10).to({state:[{t:this.shape_1},{t:this.shape}]},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.adverbtrophywords();
	this.instance.parent = this;
	this.instance.setTransform(1.5,-124.8,1,1,0,0,0,352,285.4);

	this.instance_1 = new lib.Struggle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.9,20.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5,1,1).p("EAmkgEcIAA1EIAAg3IgWAAI+UAAIgNAAIg9AAMgtTAAAIAAUgIAAAYIAAW+IAAI5MBNHAAAIAAstEAmkgDaIAAQRIAAAG");
	this.shape.setTransform(7.2,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("EgmiAN0IAA2/QAagCAagPIAYgOIABgBIABABIAGAGQArABAsgJQAngJApAAQDcAADcgCQC7gCC7AIQAbABAdADQBqAtBvgkQA0gRAxgHIACACIADADIAHAFIA1ACQARgIANgMIAFgFIAFgEIAGgEIAHgBIAHADIAHAEIAGAFIApABIADgBQANgKAPgIIAUgLIARgKIAugcQABgBAAAAQAAAAABAAQAAAAABABQAAAAABABQAMAOAPAJIgDAFIAJgBIAEADIAEAEIAHAGQAlADAjAHQBTAQBVgNQBGgLA5glQAggNAiAAQATgBAQgJIAGgEQAWgHAXgCQBVgHBVgCIAFgEIAFgFQA8gGA4gVQAPgGAOgCQA/gIA/gKQAngHAggXQAegEAegBIADgDQAZACASgPIADgCQAPAAAQADIArAGIBSAKIAQACIAIgIIACgFIACgCIAHACIAIABIANgEIBiACIAOgFQBNgdBOATIAHAEQAVALAWAIQA/AEA3ARQAgAJAiAHIADAEIAGAFQBFADA/ATQAyAOA0AGQCjASCaATQAFgFADgGIAEgHIBdAHIAwgCIAIAAIAEAAQAjANAgATQAgASAeAXQA0ApA6AeQA7AsBLgGIAEACIAfADQAGAGAGAEIAhAUIABAEIAEAGIABAAIAMAEIACABQAIAOARgBIA/ApIAAQSQgTgCgRgKIgBASIhbACIg9gJQgqgHgrgCIgMgLQgLgMgPgBIicgGQghgOgtAKIgTACIhagCIgfAIQgbAFgbAEIgJAHQgNAIgNAGIgQAGQhgAHhgAAIgLgKIgGgFIhoAAIgRAGQgiALgjADIgTABIgBgBIghgCIgKAAQgdgEgegKIgIgEQiXAKiVgKQhTgGhGApQhHAChGAPIgDABIgEAEIgFAEIhoAFQgxAog2gdIgHgEQhCgEg/AUIgBgBIgEgDIgGgFIhagFIgKgKIgGgFQhLAIhKANIgDgBIgJgLQgKgLgPgCIgCgBIgFgIQgGgJgHgGIgHgGQiRADiQAJIABgCQgzABgyAEQgWABgVAEIgCgBIgGgFQhdgThTAkIgHAEQhUAGhTAIIgDgCIgBgFQgBgIgEgHIgJgOIgFgGQg6gGg4APQg4APgnAuIgGAFQhBALhDADQgFAAgGAFIgCACIhNgDQgIgBgIgKQgLgPgEgOQgkgDgmAJQgbAGggAAQghAAggADQgYABgYAEIgBAAQguAAgnAXQgZAFgaACIjbALQjPAMjHA5IgIADIgCAGQgCAIADAIIADAGIAGAAIAAABQgDAfgTAZgAKJFeIABAAIgBgBIAAABgAtfClIACAAIgDgDIABADgEAivgGTIAAADIABABIABgEIgCAAgAnQnqIAAAAIgCAAgAF1rHIAAgBIAAAAgAAbK9IAUgIIAFgCIAMAKIAHAFIBeAFIACAAIAAAAIgYABQg7AAg5gLgAvPKZIAAAAIAAABg");
	this.shape_1.setTransform(7.2,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(8.5,-35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#669900").s().p("A76A+IABgBIAAADQghAGghAJIgUAFQAmgWAvAAgAbvhOIAUgBQAtgKAgANIhhgCg");
	this.shape_3.setTransform(19.8,81.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC33").s().p("EgmiARcIAAo5IAXAAQATgYADgfIAAgBQATABARgEQBEgPBFgJQB2gQB3gLQAfgDAdACQB2AIBugeQApgLApgIQBMgNBOgCQAZAAAXAEQAWADAVAHIACABIAUAHQBPAYBZgSIAYgBIAIAAQArgEAggcQAHgIAHgIIAKgLQAxgPAzgFIAAACIABAEQADAIABAIIADAHQACAEADAEIAHAFIBxACQAEgDAEAAQAvgHAqgMQATgGAUgDIABAGQADAKANAEQALAEAMgCQAIgBAIgGIAEgEIAHgCQAHgEADgLIAdgCQAEADAEAAQBFABBFgBIAEAAIABADIAAACIADAGIAOADQAmAHAZgXQBKgCBKgFQA1AkA8AAIAMAJIAHAFIAHAAQA5AGA0gSQBFANBHgDIAEADIAGAFIA8ABIAEgBIAEgDIAGgFQAIgDAKgCQATgCATAAIAKAKIAHAFQA5AOA0gWQAPgHAOgCQAxgHAxgCIAFgEIAFgFQBogHBgglQAKgEAKAAQBEADBFAAQA+gBA+gCIBTABIADACIAoAHQBRAPBMgVIAPgFQA9gUA2AfQA/ABA/gBQAegBAegCQA/gEA9gMQCZgeCkAVQALABAKAEQBoAuBzgQQBEgKBEgEIAAMtgA08G3IABAAIgBgCgEAl/ADvQARALATABIAAAGIglAAIABgSgAcmxZIAIgBIAAgBQAMACAKADIAAAAIgegDg");
	this.shape_4.setTransform(7.2,52.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6FFFF").s().p("APSK8QhSgegvhEIgJgNQgggOgSAVQgGAHgEAHQhjgMhKhFQhJhDhagWQgSgEgTgCIgBABIgGACIgFAFIgDAFIgBACIgQgCIgBAAQgKgDgNgBIAAAAIgHABIg5gGIhagIIgYgDIglgEIiNgKQgagCgYgGQgUgggpgGQgEgHgCgIQgghhhIhJIAAAAIgDgGQgTgkgUgiQgYgngaglIAAgGIAAgGQgNgVgIgXQgYhEgvg2Qgwg3gvg5QgOgSgRgPIlQkkIgDgEIg3g1IgagZIAAgFQgNgNgLgPIeTAAQARAXAFAgIAAVCIgDgBgAImDyIAAACIAAgCIAAAAIAAAAgAFuDbIABgBIgCgBgAGaAgIACAAIAAAAgAGLg3IABABIAAgCIgBABg");
	this.shape_5.setTransform(155.8,-103.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9966").s().p("A9eqPMAtSAAAQA/BFBMA0IAeAgQCPA/ANBPIAYAWIAYAWQAUAFAKASQAXAOASAUQBbBkBcBgIAUAuQAYA5AeA3QAbAxAeAtIAMASQADANAGALIAbAxIAEAGIACABQASAcAUAcQAHApASAeIhxgBIgBABIgFABQhigYhlgUIAAgBQgvgjhAAIQgTAFgVAGIgRAAIgFAIIgJAMQhCAOg9gSIgxABIgBAAIgBABQghgIgjgFQgCgCgCgBIgIgCIgRgEIgBABIgJACIgDABIgqgDIgNgBIAAABQgtgBgtADIgaANIgQAJQgXANgYAIQhHAYhNgGIgFAEIgFAFQibA0ilgBQgQAAgQAHQgRAIgRAAQg/AAgsAoQgaACgZAHQh1Agh5gcQgagMgTgVIgDgFIgDgEIgGgGQgUgBgNAJQgwAeg0AYIgSAIIgHgCIgKgFIgFgEIgHgGQgmgKgaAcIgRATIgFAFIgJACIgBgCIgbgMIgBgBIgDgDIgGgGIgoAAIgDAAQg9AqhMAGQg3AEg1gPQgagSgigBIg/gBIhEAAIgbgGIAAAAIgngJIAAABIgJACIgGACIgCAJIgMAAIjAABQgUAAgUgBQh4gHh3ACQhmADhmAJQgngBgoACIAAABIgNADIgZAEIgEABQgKATgSAPQgWARgVAFgAuaJFIACgDIgCgBIAAAEgAtaInIACgBIgFgBgAOfFpIACAAIAAgBgAk+BjIAAgCIgBAAg");
	this.shape_6.setTransform(-50.9,-107.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Main, new cjs.Rectangle(-241.3,-175,497.9,341.1), null);


// stage content:
(lib.adverb_Scene10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Trophybottom();
	this.instance.parent = this;
	this.instance.setTransform(316.2,362.5,1.222,1.222);

	this.instance_1 = new lib.Scoreboard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(432.3,300.4);

	this.instance_2 = new lib.Main();
	this.instance_2.parent = this;
	this.instance_2.setTransform(268,200.2,0.83,0.83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// btn
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_3 = new lib.Definition("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(212,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.UI}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(251.9,59.6,564.6,540.7);
// library properties:
lib.properties = {
	id: '552C45E89834024CAEDE4589D0939CDB',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_10a.mp3", id:"_10a"},
		{src:"sounds/_10b.mp3", id:"_10b"},
		{src:"sounds/_10c.mp3", id:"_10c"},
		{src:"sounds/_11a.mp3", id:"_11a"},
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_13a.mp3", id:"_13a"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_5a.mp3", id:"_5a"},
		{src:"sounds/_5c.mp3", id:"_5c"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/anadverbanswers.mp3", id:"anadverbanswers"},
		{src:"sounds/anadverbmodifies.mp3", id:"anadverbmodifies"},
		{src:"sounds/carefully.mp3", id:"carefully"},
		{src:"sounds/easily.mp3", id:"easily"},
		{src:"sounds/happily.mp3", id:"happily"},
		{src:"sounds/how.mp3", id:"how"},
		{src:"sounds/bgmAdv.mp3", id:"bgmAdv"},
		{src:"sounds/endinly.mp3", id:"endinly"},
		{src:"sounds/quickly.mp3", id:"quickly"},
		{src:"sounds/rapidly.mp3", id:"rapidly"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/towhatextent.mp3", id:"towhatextent"},
		{src:"sounds/when.mp3", id:"when"},
		{src:"sounds/where.mp3", id:"where"},
		{src:"sounds/why.mp3", id:"why"}
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
an.compositions['552C45E89834024CAEDE4589D0939CDB'] = {
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