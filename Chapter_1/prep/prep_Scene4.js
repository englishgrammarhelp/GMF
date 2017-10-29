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


(lib.treestump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6FFFF").s().p("AhTCCIABgBIAAABgAh0BVIAAAAIAAAEQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAABgBgABzANIAAgCIAAACgAB0giIABgHQAAATgCATIABgfgAB1hSIgCgCQgBgDADgDIAAAAIABgPIAAAPIgBAUIAAgMgAB1h9IAAgBIgEgDIAFACIAAADIgBgBg");
	this.shape.setTransform(15.6,-7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#660000","#996600","#FFFFFF","#FFCC00","#E2B41A","#FFFFFF","#FFFFFF","#FFD325"],[0.843,0.902,0.914,0.922,0.922,1,1,1],-822.3,-91.9,816.1,-91.9).s().p("AAMCPQgbgFgYgJIgCgBQgJgBgDAFIgBAAIgEADQgMgFgPgBQgGgBgCADIgBABQgGACgMgBQgPgBgPABQgOABgNADQALgLAQgIIAAAAQAJgFABgMIAAgBQgMgCgIAEIAAAAQgVABgWADIgBAAIgGADIgBABIgOAAIgBAAIglANIAAABIgEAAIgBAAQgPAGgRAFIgNACQAAAAgBABQgBAAAAABQAAAAAAAAQgBABAAAAIgQACIAAAAQgPAFgSgBIgHgBIAAAAIAHgEQATgLATgMIAYgSIAAgBIAEgBIAAAAQAGgHAIgEIABAAIADgDQAKgIACgPIAAgBQgEgIgDgJIAAgBIAJgLIARgUIAAAAQgFgQACgUIAAAAQADgPgCgQIAAgBQAFgRgCgWIAAgEQgBgSABgRIABAAQARAAAOAEIADABQASAKAcABQAaABAVAIQAYAEAcACIAZABIAfgBIAxgEIBGgHQAZgCAWgGQAagHAegDQAlgEASgYIADAVIAAAEIgCAMIgBAFIAAAAQABAJgBAHQACADAAAHIABAIIAAAAQgCACABAFIAAAAQgFAMADAPIAAABIABABQACAGAAAFIABAAQADAEACAJIAAAAQAHAIAEAKIACAGIAAABIAHAEIAAAAIAFAMQAJAJAGALIAPAWIAAAAQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAIAAABIACAEIAAAAIADADIABAAIAOAXIABAAQAEACAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgEABIg0gJIgDgBIgPgDIgRgDQgPgDgMAGIgCABIgCAAIgFgMIgFgKIgDgHIgBAAIAAgGIAAgBQgFgKgBgPIgCgcQAAgEgCgDIABgLIgEgEIAAAAQAFgCgGgEIgBgBQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQABAAAAAAQAAABAAAAQABABgBABQAAAAgBABQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABABAAIgBABIgBAAIACAZIABAaQAAAPAGAQQAEAIABAJIAAACIABAAIAGAIIAAAAIACAJIADAIIAAABIASAZIgJAGIgFgCQgOgCgQgBIgRgJQgIgDgMgBIAAAAQgDgEgHABIgBgBIgFgEQgDABgCgCQgNgIgRgBQgFgDgIAAIgGgBIgCgBIACgNIAAgEQAJgEAFgJIAAAAQgBgEgHACIgCADIgEAEIAAABIgHgFIgGgFIAAgBQgDgOABgPIgBAAQgEgBgFADIAAABQgCAQABAPIgBAAIgBADQgCAEABACIABAAIgIAEIAAgBIgDgHIgFgPIAAAAQADgGgDgKIgBgFQgBgHgHAAIgBgBIAAgEQgBgEABgGIAAgBQAFgGgCgGIgBAAQgGgBgDADIAAAAQgFALAAAPIAAABIAAAAQgEASADAWIABAAIAAABIAAAGIAAABIACAEIAAAAQgBAIABAEIACADQgBAHADAHIADANIADACIAIARQAAAIAEAHIABACQAGAFgHACQgVgOgcgFg");
	this.shape_1.setTransform(-1,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#660000","#996600","#FFFFFF","#FFCC00","#E2B41A","#FFFFFF","#FFFFFF","#FFD325"],[0,0.902,0.914,0.922,0.922,1,1,1],-823.4,-87.3,815,-87.3).s().p("AAqCYIgDgTIgCgRIgCgTQgBgKACgIIABACQACAKABANIAAABIACADIAAAAIABAHIAAACIAAABQADAIAIAEIABABIgMAVgAgnhBIgCAAQgNgDgQgBIgfgCQgPgBgNgEQgTgFgYgBQgYgBgRgIQgIgFgKgBIgVgEIgCgEIgCgCIAAgBIgFgOIAAgBIAEgCIALgFIAQgDIAcgBIgHABIAAABIgKAHIAAAAIAAABIAAAGIAAABIABACIAJAEIAOADIAAAAIAQACQATAGAZAAIATgBIAggCIATAAQAbAAAegDIADAAQAagCAgAAIAagBIAjAAIAPgBQAdgBAXgFQAcgFAKgWIABgBIgBgBIAAgBIAFgBIAJgCIAFAAIABAAIANgCIAEABIAAABIAGAHIAAAAQgBAHgDADIgBAAQAAAEgBADIAAAAIgMAMQgFAHgIAEQgGAAgEAEIgBAAIgHAAIgBAAQgVAFgXADIgBAAQgYAJggADIgbADIgsAEIhLAGIgEAAg");
	this.shape_2.setTransform(0.2,-5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AilASIgDAAQgGgBgDgGIAAgBQgBgEABgCIAIAAQABgDAGgBIAMgBIAagBQAXgDAZgCIAsgEIA4gGIgEADIACAAIACAAIAIgDIBeABIAFgCQARACAQABQANAAALACIADABQgCACgBAEIAAABQgEAAgCADIAAABQgDABgCABIAAABIgQAFIgBAAIgpAEIgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBABIAAgBIghADIgDAAQgXADgXgDQgOgBgNAAIgMgBIgCABIgCACIgBABIgDAAIgCAAIgFAAQgLAAgHACIgGAAIg9ACIgCAAIgbABIgegBgAi+ACIAFgEIAJAAIgGAEIgIAAg");
	this.shape_3.setTransform(1.7,-18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#660000","#996600","#FFFFFF","#FFCC00","#E2B41A","#FFFFFF","#FFFFFF","#FFD325"],[0,0.902,0.914,0.922,0.922,1,1,1],-823.8,-71.4,814.6,-71.4).s().p("AjpAUQAXgFAWgIIABAAQAqgIAugDIA/gEIA8gEIAMgBIAAgBIAAgDIAAgBIABgBIABgCIABgBIABAAIACAAIAAgBQA0gBAzADQAIAAAHADQAgAEAeAHQAJADABAHIAAAAIAKADIgBAAIgNABIgBABIgFAAIgJACIgEgCIAAAAIgGAAIgBAAQgLgEgIABQgNgEgNAAIgBAAIAJgCIgBAAQgfACgfgFIgEAAIgigBIgCABQgIADgGgDIgHAEIggACIgBAAIgDAEQgEgEgHABIgcADIgJAAIgBAAQgBACgDABIgxAFIgtAFQgRABgMgCQgIgCgGACIgPAEIgMAAIgdACIAIgEg");
	this.shape_4.setTransform(1.3,-21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABKDMIglgSQgNgGgQgDIgggGIgEAHIgBAAQgHABgEgDIAAgBIgOgBIgBAAQgFgDgEAAIgBAAIgBAAQgHgFgLgCIAAAAQgBAJAIADIAAgBIACABIgCACIgKABIAAAAIgBAAIgBALQgPgKgVgHQgIABgHAFIABgBIACgEIABgEQgLACgLAEQgMAFgIgHQACgOANgIIAGgDIARgKIgeACIgBAAQgFADgJAAIgBAAQgKAGgSgCIgBAAQgEAEgGABIAAABQgQACgNAIIAAABQgNAAgKAFIAAAAIgIAAIAAAAQgPAIgRABIgBAAIgcAFQgMABgJgCQgGgBgEgDQAAgDABgCIABAAIAIgDIACgBIABAAIAPgKIAMgIIgEABQgPADgNgEQAFgHADgIQAIADAJgCIAxgOIABgBIAJgJIAAAAIAJgDIABAAQABgGAGgEIAFgHIgCgJIAAgBQgGgEAAgJIABAAQADgEAAgEIABAAIAJgLQAEgEACgFIACgCQADgCABgDIAAAAQgCgDgBgGQABgJgCgHIAAgBQAEgRgCgQQAAgHAEgDIABgaIAAgBIgBgRIAAAAIgCgdIAAAAIgBgBIgBgCIgCgGQgEgNgBgOIAIgBIAAgBIANgDIAWgEIAJgDIgIAEIgPACIgLAFIgFADIAAABIAFAOIABABIABACIACAEIAVAEQAKABAJAEQAQAJAZABQAXABATAFQANAEAQABIAeACQAQABAOACIACABIADAAIBLgGIAsgEIAbgDQAggDAYgKIABAAQAYgCAVgFIAAAAIAIAAIAAgBQAFgDAFAAQAIgEAGgHIALgMIAAgBQACgCAAgEIAAAAQADgDACgHIAAAAIgGgHIgBgBIgEgBIABgBIgKgCIAAAAQgBgIgIgDQgfgHgfgEQgIgDgIAAQgzgDgzABIAAABIgCAAIgBAAIgCABIgBACIgBABIAAABIAAADIAAABIgLABIg8AEIg/AEQgvADgqAIIATgHIAugIIAAgBIABAAIAIgCIAZgBIAvgEIBggIIAagCIABAAIAFgDIBOAFIA6AFQAcAEALAbQABADADADIAAABIgEAdIAAgPIgBAPIAAABQgDACABADIACADIAAALIAAAcIAAABIAAABIgBAGIgBAfIAAACQgCAHACAHIAAABIAAAAQABAHAEAHIAOAVQAaAtAgApIAEAGIAHALIgEAIQgBgBgDgCIgBAAIgOgXIgBAAIgDgDIAAAAIgCgEIAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIAAAAIgPgWQgGgLgJgJIgFgMIAAAAIgHgFIAAgBIgCgGQgEgKgHgIIAAAAQgCgIgDgEIgBAAQAAgFgDgGIAAgBIAAgBQgDgPAFgMIAAAAQgBgFACgCIAAAAIgBgIQAAgHgCgDQABgHgBgJIAAAAIABgFIACgNIAAgDIgDgVQgSAYglAEQgeADgaAHQgWAGgZACIhGAGIgyAFIgeABIgZgBQgcgCgYgEQgVgIgagBQgcgBgSgKIgDgBQgOgEgRAAIgBAAQgCAQABATIABAEQACAWgFARIAAABQACAQgDAOIAAAAQgCAUAFARIAAAAIgSAUIgIALIAAABQADAJAEAIIAAABQgDAPgJAIIgDADIgBAAQgIAEgGAHIAAAAIgEABIAAABIgZARQgSANgUALIgGAEIAAAAIAGABQASABAQgFIAAAAIAQgCQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIANgDQARgEAPgGIABAAIAEAAIAAgBIAlgNIABAAIAOAAIABgBIAGgDIABAAQAWgDAVgBIAAAAQAIgEAMACIAAABQgBAMgJAFIAAAAQgQAIgLALQANgDAOgBQAPgBAPABQAMABAGgCIABgBQACgDAGABQAPABAMAEIACACIABAAQAEABgDgFIABAAQADgFAJABIACABQAYAJAbAFQAcAFAVAOQAHgCgGgFIgBgCQgEgHAAgIIgIgRIgDgCIgDgNQgDgHABgHIgCgDQgBgFABgHIAAAAIgCgEIAAgBIAAgGIAAgBIgBAAQgDgWAEgSIAAAAIAAgBQAAgPAFgMIAAAAQADgDAGABIABAAQACAHgFAGIAAABQgBAGABAEIAAABQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIABABQAHAAABAHIABAFQADAKgDAGIAAAAIAFAPIADAHIAAABIAIgEIgBAAQgBgDABgDIACgDIABAAQgBgPACgQIAAgBQAFgDAEABIABAAQgBAPADAOIAAABIAFAFIAIAFIAAgBIAEgFIACgCQAHgCABAEIAAAAQgFAJgJAEIgBAEIgHABIgYADIgEACIAAAAIgCgBQgHgEgEgIIAAgBIAAgCIAAgHIgBAAIgCgEIAAAAQAAgNgDgLIAAgBQgCAIABAKIACATIACARIADATIAAAAIAEAKIAAAAQAEAEACAFQABAGACAFIAEALQADAMAGAKQADAEgDADIgPgBgABbBdIABAAIAAAAgAEkijIAAABIABACIAAgDIgFgCIAEACgAD4CpIAAAAIgIgDIAAAAQgKACgIgDQgEgBgCACIgWgMIgBAAQgFABgCgDIgBgBQgGACgEgEIAAgBQgGABgHgFIAAgBIgIgBIAAAAQgFgDgJgDQgLgDgNgCIgMgBQgIgBgDgFQAGgFAKACIADABIAGABQAIAAAFADQARABANAIQACACADgBIAFAEIABABQAHgBADAEIAAAAQAMABAIADIARAJQAQABAOACIAFABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBAEgFAAIgBAAgAEHCbIgSgYIAAgBIgDgIIgCgJIAAAAIgGgIIgBAAIAAgCQgCgJgDgIQgGgQAAgPIgBgbIgCgZIABAAIABgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABIABABQAGADgFACIAAAAIAEAEIgBALQACADAAAEIACAdQABAPAFAKIAAABIAAAGIABAAIADAHIAFAKIAFAMIABAAIADgBQAMgGAPADIARADIAPADIADABIA0AJIAEgBIgFAKIgEgCQgMgEgMADIgCgDIgLgBIAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgbgDQgIgBgFgDIgBAAIgEAAIgOACQgDACgFABIAAABQABAFAEADIAAAAIABAFIAAAAIALAKIAAAAQABAEgBAFIAAABIgIACIgDgFgAifh7IgPgDIgBAAIgOgDIgJgDIAAgCIgBgBIAAgGIABgBIAAAAIAKgHIAAgBIAHgCIANAAIAOgEQAHgCAIACQAMACAQgBIAugFIAwgFQADgBACgCIAAAAIAKAAIAbgDQAIgBADAEIAEgEIAAAAIAggCIAHgFQAGADAIgDIACgBIAiABIAEAAQAfAGAggDIAAAAIgJADIABAAQAOAAANAEQAIgBALAEIAAAAIAGAAIABAAIADACIgFAAIABABIAAABIAAABQgLAWgbAGQgXAFgdABIgQAAIgjABIgaAAQgfABgbABIgDABQgdACgcABIgSAAIghABIgTABIgEAAQgXAAgRgFgAiNiIIAAAAQADAHAGAAIADAAQAcADAdgCIACgBIA9gBIAGgBQAGgBALgBIAFAAIACAAIADAAIABgBIACgCIACAAIANAAQANAAAOACQAXADAXgDIADgBIAhgCIAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABAAIApgDIABgBIAQgFIAAAAQACgDADAAIAAgBQACgDAEgBIAAgBQABgDACgDIgDgBQgLgCgNAAQgQAAgRgDIgFACIheAAIgIACIgCABIgCAAIAEgEIg5AHIgrAEQgZABgXAEIgaABIgMACQgGAAgBAEIgIgBQgBADABAEgAiaiRIAIABIAGgFIgJgBg");
	this.shape_5.setTransform(-1.9,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.treestump, new cjs.Rectangle(-39.6,-24.6,75.6,41), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfBEQgDgDAAgEIABghIAAggIgCghIgBgRQAAgGACgEQADgFAFAAQADABACACQACACAAADIAAADIgBAEQAHgFAHgCQAGgCAGAAQARAAAIAPQAGAMAAATQAAASgKALQgKANgRAAQgHAAgKgDIAAAnQAAAEgDADQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAGIABAnQAJADAIABQAKgBAGgHQAFgGAAgLQAAgOgEgIQgEgHgHAAQgHAAgGADg");
	this.shape.setTransform(254.1,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHA8QgCgCAAgEIgBgOIAAgPIABgUIABgSQAAgFACgBQACgDAEAAQACAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgCACQgCADgDgBQgDABgCgDgAgFgtQgCgDAAgEQAAgDACgDQAEgEADAAQADAAAEAEQACADAAADQAAAEgCADQgEADgDAAQgDAAgEgDg");
	this.shape_1.setTransform(247.3,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_2.setTransform(239.9,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEADgDQACgCAEAAQACAAAEAEQACACAHABIAJABQAGAAAGgBQAHgDABgFQAAgMgQgDIgIgCQgLgCgFgEQgGgEgBgJQAAgSARgGIAPgGQALgDAFgCQADgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgDgDIgBgJIgTAGQgNAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgKAGgOAAQgKAAgLgEg");
	this.shape_3.setTransform(230.5,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAABAKIAAAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_4.setTransform(222.4,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_5.setTransform(213.1,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHA8QgDgCAAgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDAAgEQAAgDADgDQACgEAEAAQADAAADAEQADADAAADQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_6.setTransform(206.6,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_7.setTransform(200,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAbArIgGgHIgOAHQgGACgDAAQgTAAgKgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQAMAFAAAHIgCAEIgCAKIAAARQAAALACAGIAEAPIACAEIABABQAAAEgCACQgDACgCAAQgCAAgEgDgAgNgUQgKALAAAMQABAOAFAHQAEAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIABgIIABgJIgGgCIgDgBQgLgBgKALg");
	this.shape_8.setTransform(191.7,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIA8IAAgeIABgeIAAgdIABgfQAAgHAHgBQAIABAAAHIAAAfIgBAdIAAApIgBAUQgBAHgGAAQgJABABgJg");
	this.shape_9.setTransform(185,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbAkQgOgLAAgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgPAGQgNAGgMAAQgSAAgLgJgAgRgWQgGAIgDAPIAZgLQAOgIAGgFQgGgHgNAAQgJAAgIAIg");
	this.shape_10.setTransform(178.2,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_11.setTransform(169.5,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAFgBQAHgDAAgFQAAgMgPgDIgIgCQgLgCgFgEQgHgEAAgJQAAgSARgGIAPgGQALgDAFgCQADgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgCACgEAAQgEAAgCgDIgCgJIgTAGQgNAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgJAGgPAAQgLAAgJgEg");
	this.shape_12.setTransform(155.7,16.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATAuQgIAAgGgWIgDgTIgCgSIgHAPIgNAiQAAADgCACQgDAFgFAAQgHAAgGgZQgDgNgCgVIgCgMIgCgNQAAgDADgCQACgDADAAQAHAAABAHIACAMIACANIAEAkQAJgZAKghQADgJAGAAQAGAAADAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQADAAADACQADACgBAEIAAADQgHAcgKAhQgDAHgFAIQgCAFgFAAIgBgBg");
	this.shape_13.setTransform(146.1,16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_14.setTransform(135.6,16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_15.setTransform(126.5,14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEACgDQADgCADAAQADAAAEAEQACACAHABIAKABQAFAAAFgBQAJgDgBgFQAAgMgQgDIgHgCQgLgCgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgCQAEgCAEAAQAEAAACADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgDgDIgCgJIgTAGQgMAFAAAIIAFACQASACAJAHQAOAIAAAQQAAANgMAHQgKAGgNAAQgMAAgKgEg");
	this.shape_16.setTransform(117.1,16.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663366").s().p("AARAmIgCgRIgBgRIAAgHIAAgHIAAgDIABgEQgBgHgDAAQgHAAgGAJQgGAKgEANIgBAHIgBAIIgBAHIAAAHQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIAAgHIgBgHIACgXIABgVIgBgIIAAgIQAAgEADgDQAEgDAEAAQAMAAAAANIAAABQANgNAMAAQAPAAAHANQADAJAAASIAAAGIAAAEIACARQACAKAAAGQAAAFgEADQgCADgGAAQgKAAgBgKg");
	this.shape_17.setTransform(103.7,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663366").s().p("AgaAjQgNgLAAgUQgBgRALgOQAMgRAWgBQARAAAJANQAJAMAAATQAAARgKAOQgMAPgSAAQgPAAgLgKgAgLgOQgFAIAAAKQAAAKAFAFQAFAFAGAAQAGgBAFgFQAHgFAAgKQABgagPAAQgJABgGAIg");
	this.shape_18.setTransform(94.5,16.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663366").s().p("AgKA8QgDgDAAgFIAAgPIAAgPIABgSIAAgSQAAgFADgDQADgDAFAAQAEAAAEADQADADAAAFIgBASIgBASIABAPIAAAPQAAAFgDADQgEADgEAAQgEAAgEgDgAgHgpQgDgEgBgFQABgFADgEQAEgDAEgBQAGABADADQAFAEAAAFQAAAFgFAEQgDADgGAAQgEAAgEgDg");
	this.shape_19.setTransform(88,14.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663366").s().p("AgHA6QgDgDAAgFIAAgJIAAgJIgBgqIgQgBQgKgBAAgKQAAgEADgEQADgDAFAAIAOABIAAgJIgBgIQAAgFAEgDQADgDAFAAQALAAAAAVIAAAHIAJgBIANABQAGADAAAHQAAAFgDADQgDADgFAAIgEAAIgEAAIgIABIABArIAAAEIAAAEQAAAUgMAAQgDAAgEgDg");
	this.shape_20.setTransform(81.4,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663366").s().p("AgKA8QgDgDAAgFIAAgPIgBgPIABgSIABgSQAAgFAEgDQADgDAEAAQAFAAADADQADADAAAFIAAASIgBASIAAAPIAAAPQAAAFgDADQgDADgFAAQgEAAgEgDgAgHgpQgEgEAAgFQAAgFAEgEQAEgDAFgBQAEABAFADQADAEAAAFQAAAFgDAEQgFADgEAAQgFAAgEgDg");
	this.shape_21.setTransform(75.3,14.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663366").s().p("AgWArQgNgEAAgJQAAgJAKAAQADAAAIADQAHACAEAAQAPAAABgHQAAgEgMgFIgVgKQgLgIAAgMQAAgRARgFQALgEATAAQAJAAAEACQAGADgBAIQAAAPgIAAQgIAAgCgHIgGAAQgUAAAAAFQAAADAMAGQAQAHAGAEQAMAIAAALQAAAOgNAIQgLAGgPAAQgKAAgJgEg");
	this.shape_22.setTransform(68.4,16.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663366").s().p("AgaAjQgNgLAAgUQgBgRALgOQAMgRAWgBQARAAAJANQAJAMAAATQAAARgKAOQgMAPgSAAQgPAAgLgKgAgLgOQgFAIAAAKQAAAKAFAFQAFAFAGAAQAGgBAFgFQAHgFAAgKQABgagPAAQgJABgGAIg");
	this.shape_23.setTransform(59.8,16.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663366").s().p("AgiBDQgDgEAAgEIAAggIAAgfIgBgfIgBgRQAAgGADgFQADgGAHAAQAEABADADQADADAAAEIAAABQAGgDAGgCIAKgCQATAAAJARQAGAMAAATQAAASgKAMQgLANgTgBQgGAAgIgBIAAAiQAAAEgDAEQgEADgEAAQgFAAgEgDgAgEgnQgFACgGAGIABAhQAIACAGAAQAJAAAEgFQAEgFAAgKQAAgLgBgEQgCgKgIAAQgFAAgFACg");
	this.shape_24.setTransform(51,18.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#663366").s().p("AgbAkQgPgLAAgTQAAgUAMgOQALgQAUAAQAPAAAKAEQAMAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAIgFQAGgEAFAAQAIAAABAJQgBAJgOAGQgLAFgNAAQgTAAgMgJgAgKgTQgGAFgDAKIASgIQALgFAGgEQgFgDgKAAQgGAAgFAFg");
	this.shape_25.setTransform(41.5,16.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663366").s().p("AggArQgCgCgBgGIAAg1IAAgHIAAgIQAAgFADgDQAEgDAEAAQAJAAADAKQANgMASAAQARAAAAAXIAAAFQgBANgLAAQgLAAABgLIgBgIQgRADgIAQIAAAoQAAAGgEACQgDAEgFAAQgFAAgDgEg");
	this.shape_26.setTransform(32.9,16.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663366").s().p("AgiBDQgDgEAAgEIAAggIAAgfIgBgfIgBgRQAAgGADgFQADgGAHAAQAEABADADQADADAAAEIAAABQAGgDAGgCIAKgCQATAAAJARQAGAMAAATQAAASgKAMQgLANgTgBQgGAAgIgBIAAAiQAAAEgDAEQgEADgEAAQgFAAgEgDgAgEgnQgFACgGAGIABAhQAIACAGAAQAJAAAEgFQAEgFAAgKIgBgPQgCgKgIAAQgFAAgFACg");
	this.shape_27.setTransform(24.2,18.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAdArIgGgaIgVAEIgWAEIgOAhQgCAEgFAAQgEAAgCgDQgCgCgBgEQAAgEANgaQgBgCgBgDQABgGAHgDIAZgnQASggAFAAQAGABADAIIAFAdIAMA4IAGANIABAJQABADgDADQgCACgEAAQgHAAgGgTgAgKAGIAegGIgHgfg");
	this.shape_28.setTransform(8.2,14.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,1,1).p("A0WiKMAotAAAIAAEVMgotAAAg");
	this.shape_29.setTransform(130.3,15.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("A0WCKIAAkUMAotAAAIAAEUg");
	this.shape_30.setTransform(130.3,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,262.6,30.7);


(lib.prepwordtos5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape.setTransform(5.6,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFA9QgDgCAAgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgIABQgSAAgKgDQgHgCAAgGQAAgEACgCQADgDADAAIAOABIANABIAQAAIANAAIATABIAUABQADAAACACQADADAAADQAAAEgDADQgCACgDAAIgUgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgCAAgDgCg");
	this.shape_1.setTransform(-3.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordtos5, new cjs.Rectangle(-12.3,-13.8,24.7,27.7), null);


(lib.prepwordoutofs5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBHQgCgCAAgEIAAgCQACgLAAgMIgBgXIAAgXIgMABQgJAAAAgIQAAgJAPABIAHgBIACgNQACgSAIgJQAHgKASAAQAMAAAAAIQAAAIgKAAQgVAAgCAcIgBAFIATgBQANAAAAAIQAAAGgGABIgHABIgTABIgBASIAAAPIABAQQAAAPgCAJQAAAHgHAAQgDAAgDgCg");
	this.shape.setTransform(22,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_1.setTransform(13.2,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_2.setTransform(-0.2,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAoQgKAFgNAAQgKAAgIgFQgHgFgCgKQgDgWAAgQQAAgMACgPQACgGAGgBQAEAAADADQACACAAADIgBANIgBANIABAXQAAAJACAGIAGADIAEABQALAAAMgFIAAgQIAAgPQAAgSABgOQABgHAHAAQAEAAADADQACACAAADIgBAgIAAARIAAASIAAAFIAAAGQAAADgCADQgDACgDAAQgHgBgCgHg");
	this.shape_3.setTransform(-8.6,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpA0QgRgPgBgYQAAgbARgYQAUgaAbAAQAbAAANAMQAPANAAAcQAAAbgQAXQgSAbgbgBQgYABgQgOgAgcgbQgOATAAAVQAAAQANAKQALAJARAAQASAAAOgUQAMgSAAgVQgBgVgIgIQgJgHgUAAQgTAAgOAUg");
	this.shape_4.setTransform(-19.7,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordoutofs5, new cjs.Rectangle(-28.6,-13.8,57.3,27.7), null);


(lib.prepwordfroms5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape.setTransform(13.8,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_1.setTransform(2.4,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgHQAAgJAIAAQAIAAAAAOQAPgPATgBQAHABADAEQADAFAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_2.setTransform(-5.7,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBDQgDgCAAgEIABgxIAAgwIAAgLIAAgLQAAgEACgCQADgDADAAQADAAACACIATgDIANgBQAKAAAMADQARAEAAAGQAAADgCADQgDADgDAAIgEgBQgKgEgRAAIgMABIgQACIAAAkQAQgEAIAAIAZACQAIAAAAAIQAAAEgCACQgDACgDAAIgNgBIgMAAQgGAAgTAEIAAA5QAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_3.setTransform(-14.7,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordfroms5, new cjs.Rectangle(-22.4,-13.8,44.8,27.7), null);


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


(lib.bubseyesstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABXgEQADgQAPgEQAbgJALAaQAJAVgUAOQgIAFgIAAQgigFAFgggAiQgKQACgQAQgFQAbgIALAZQAJAWgUANQgIAGgJAAQgigFAGggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubseyesstill, new cjs.Rectangle(-14.6,-3.3,29.3,6.7), null);


(lib.ant1still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAtiFQAAAXgRARQgQAQgWAAQgXAAgRgQQgQgRAAgXQAAgXAQgQQARgRAXAAQAWAAAQARQARAQAAAXgABshTQAAABAAAAQAAAFADADQABABACABQACABAEAAQAFAAACgDQAEgDAAgFQAAgFgEgEQgCgDgFAAQgFAAgEADQgDAEAAAEgACQgeQABgBACAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAQgEAAgDgEQgCgBAAgBQgBgCAAgDQAAgFADgDQABgCADAAgAArAKQAAAegMAVQgLAVgRAAQgPAAgMgVQgMgVAAgeQAAgcAMgVQAMgVAPAAQARAAALAVQAMAVAAAcgAB4BsQgBACAAABQAAADAFADQACABAEABQALACAPAAQAQAAALgCQALgDAAgFQAAgDgLgDQgLgDgQAAQgPAAgLADQgHABgDACgAiYg1QgEAEgFAAQgFAAgEgEQgDgEAAgFQAAgFADgEQAEgDAFAAQAFAAAEADQAEAEAAAFQAAAFgEAEgAiDAQQAAgCgCgBQgCgDgEgBQgBAAgCAAQgFAAgDAEQgEADAAAFQAAAFAEAEQADADAFAAQAFAAAEgDQADgEAAgFQAAgDgBgCgAi1C5QgMgEAAgGQAAgGAMgEQANgEARAAQASAAAMAEQAMAEAAAGQAAAGgMAEQgMAFgSAAQgRAAgNgFg");
	this.shape.setTransform(-2,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai7D7QgMgEAAgGQAAgGAMgFQAMgDASAAQARAAANADQAMAFAAAGQAAAGgMAEQgNAEgRAAQgSAAgMgEgAh3DeQAAgCgBgDIgBgCIgBgCIgBgCIAAgRIAAgJQgDgJgBgKIABgDIABgIQACgHgDgEIABgGQAYgJAZgFQAHgBAHgDIAAgBIABgCIADAAIAAgBIACABIAEgBIAFACIABABIAAACIgBADIgBABIgDABIgJAHQgbAIgaAMIAAAAQgCACgBADIgBAFIAAABIABAMQAEAPgCARIABACIABABQACAHADAGIACADIAAAEIgBACIgBAAQgJAAgDgLgABuC6IgEgEQAAgHgEgIQgBgDgDgDQABgFgCgFIgEgGIgBgCIgFgIIgFgOIgCgIIgoAJIgBgBIAAgCIAAgCQAQgLAUgCQAOAAAEAOIAKAbQgCAFAFAFIACACIAEAJIAAABIAAACIABABIABACIAAACIAAAAQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAADAFADIAAAAIAAACIgBABIgDACIgDgCgAB7C4IgGgBQgFgDAAgDQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQADgCAGgBQALgEAQAAQAPAAALAEQALACAAAEQAAAFgLACQgLADgPABQgQgBgLgDgAByCuIAAAAgACiCkQgVgCgUgFIAEgBIAEgDQAggBAeAMIAJADIAAADIgmgGgAgfB/QgLgVAAgeQAAgdALgVQAMgVARAAQAPAAAMAVQAMAVAAAdQAAAegMAVQgMAVgPAAQgRAAgMgVgAidBfQgDgDAAgFQAAgFADgEQAEgDAFAAIADAAQADABACACIADAEIgDgEQgCgCgDgBIABgBIABgBIAEgDIACgBIABgBIACAAIAAAAQAnAGAoAEIABABIABACIAAABIgBABIAAABQgmACgkgIIgEAAIgCACIgDACIABAFQAAAFgEADQgDAEgFAAQgFAAgEgEgAAtBMQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgDQAigDAjgKQADgCADgDQAGgHAAgIIACgGIABgCIABAAIADgBIACABIABACQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIgEACQgDAEAAAEIABAFQgNAYgigBIgCABIAAABQgLACgLAAIgPgBgACFA1IgCgDIgBgFQAAgEADgEIAEgCIAEgBQAEAAADADQAEAEAAAEQAAAFgEADQgDADgEAAQgFAAgDgDgAhnApIgEgCQgfgGgVgVQAFgEAAgFIABABIACABIABABIABADQAaAUAgAHIAKADQALAFAMACIAEABIAAADIAAADIgHAAQgWAAgUgMgACDAyIAAAAgAAoAaIABgDQAggJAVgWIAGgGIABgDIAAABQAAAFAEADIACACQgIALgMAGIgBACIgBAAQgUAPgXACQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAgAiwAMQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQAFAEAAAEQAAAFgFAEQgDAEgFAAQgFAAgEgEgAiaADIAAAAgABrgGIgCgCQgEgDAAgFIAAgBQABgEADgDQADgDAFAAQAFAAADADQADADABAFQgBAFgDADQgDADgFAAQgDABgDgCgABrgGIAAAAgAg4gbQgQgQAAgYQAAgWAQgRQAQgRAXAAQAXAAAQARQAQARAAAWQAAAYgQAQQgQAQgXAAQgXAAgQgQgAg6hyQgDgFgEgEIgQgcQgCgHACgHQgGgFgBgIQgDgcAcgDQAdAEgHAdQgGAXgYgHQgCAOAOANIADADIAGAKIAAAEIgBACIgDABIgEgBgAAKh5QgCgNADgNIABgJIgBgBIgBgCQABgZgQgSIgDgDIgCACQgIAEgIgFIgBAAIgCgCQgMgEgCgOQgDgbAcgEQAdAFgIAdQgBAGgCAEQAOAOAEAWQADANAAAOQAAAOgFAMQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_1.setTransform(-1.4,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ant1still, new cjs.Rectangle(-22.9,-27.1,41.7,52.6), null);


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


(lib.bubseyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubseyesstill();
	this.instance.parent = this;
	this.instance.setTransform(-3.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1,y:3},6).to({x:2.6,y:0},8).to({x:-0.8,y:3.5},8).to({x:-3.8,y:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-3.3,29.3,6.7);


(lib.ant1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ant1still();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.999,0.999,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:20.8},4).to({rotation:-9.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-29.9,50,58.9);


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
		var bgm = createjs.Sound.play('bgmPrep',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.1;
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
		
		 window.open ("prep_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("prep_Scene3.html","_self");
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


(lib.prepbubheadscene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubseyes();
	this.instance.parent = this;
	this.instance.setTransform(-1.6,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6FFFF").s().p("AAAAFIgHgFIAAgCIAAgDIgBgBIAAgBIALADIAGAKIgEABIgBAAIAAABIgEgDg");
	this.shape.setTransform(20.3,-34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiOA6IgCgDQgPgNAAgbQgEgFACgIQAFgcAPgaQACgEAFgEQAHgFAKgCQARgBALALIAEAFQAEAGABAIQAEANgCAOIAAABIAAABIAAARIAAADIgBAGIAAAAIAAADIgBAPIgCABIgCACIAAACIAAABIgBgBIgBADQgDAIgGAGQgEAFgGACQgHADgIABQgNAAgJgKgABRAzIgFgGIAAAAIgBgBIgCgEIAAgBIgBgCIgBgCIAAgFQAAgLABgKIABgCIAAgFIABgHIACgCIAAgDIAAgFIABgCIABgBIAAgEQgBgIAFgGIAAgCIAAgCIADgDIAEgIIADgBQAFgDADgEIAAgDIADgBIAAgBQAWAAAQAHIABAAIAFAGIABAAQACAFADADIABAAQAOAggIAiIAAAAIgMARIgBACQgDAJgHAIIgCABQgIADgIABQgVAAgRgNgAhDglIgBgCIgBgBIgBgCIgBgEQAEAFABAFIgBADIAAgEg");
	this.shape_1.setTransform(-1.7,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AABDFIgDgDIgEgEIgDgHIgCgDIgKgKQgKgPgUgEQgegFgeAIQgUAFgSAHIgKACIgCgIIAAgEQAFgRgEgRIgCgDQgLgKgGALIAAAAIgLAGQgFADgGAAIgCgFIgDgMIAAgBIgBgFQgBgEAAgEIAAgBIgFgFIgDAAQgPAGgNAMIgBABIgNADIgBAAIgFgIQgFgOgDgPIAAgBIgBgKQgBgUgFgSQAAgDgCgCQgCgLgIgHIgVgTIgJgLIAAgIIABACIABAAQACgdAAgdIgCgBIgBgCQABgJgCgJIgJgwIADAAIACAAIABgBIAAgDQABgOAHgJIAHgGQAFgDAGgCIABAAIABAAQAUgCAKAMIAEAIQAFAKABALQABAMAGAMIAEALQAGAUAJAUQAMAOAHARIAFAHQASAQAOAUQAEAHAFAEQAZAMAZAKQAHADAJABIARAEQAXAGAYACIAwAEIATABQAUABAUgEIAhgFIAQgDQAXgFAVgMIASgLIASgKIADgCQAXgSAOgaIAVgoIAIgMQAGgJAFgJIAEgJIADgGQACgLAFgMIADgGQAHgPAQAIIADACQACADAAAFQABALgEAKIADAhIAAAJIgBABQgCAEABAFIABAIIADAXIACACIABACIAAAEQgDAIgBAIQgBALADALQAEASgEAUIgEgCIgMgDIgVgEQgTgDgNAJQgKAGgGAOQgFAKgCAKIgBABIAAAAIABAAIgDATQgCAVAJATIgagFQgUgFgUABQgHABgBAHIgDAEIgDAIIAAABQgMAXgLAYIgGALIgJgIIgXgLQgagMgVgSIgCgBIgCACIgHAGIAAAAQgFABgCAEIgDAGIgCADIgDACIAEgCQgHAMgKAKIgGADIgDADIgBACIgDABIAAgBgACBB6IAAAAQgPACgPAMIAAABQAZgGAZgIIgBAAQgHgCgGAAIgEgBIgCACgAjZANIACABIAAgBIAAAAIgCAAgAgmCtIgIgCIAAgEIAAAAIAEABIACACIAEACIADAEIgFgDg");
	this.shape_2.setTransform(0.3,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKFlIgBgCIgHgLQgCgFgFgFIgEgDIgEgEIgEgCIgCgCIgEgBQgugJgsATQgOAFgOAEQgMACABgMIAFgqIgCgCIgXAJQgDACgDABQgMACgBgMQgCgPgEgMQgSATgYgBQgDgBgCgCQgLgOgDgTIgJg6IgBgCIgDgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgBIgBgBIgBgBQgBgEgDgCIgBgBIgCgBQgKgHgHgIQgPgMACgTIACgUQAAgIADgGQgBgqgKgoQgCgGAAgHIADgDIADgBIADABIACABIADgHIADgGQACgEAAgDQgRAJgQgLQgNgIgJgPIAAAAIAAgKIABgBQALgMAJgPIAAAAIAFgCIAAAAIABgGIABAAIAIgLIACgEIAAAAQABgHAEAAQAAgMAGgJIAAgBQACgNgBgPIAAAAQgEgFAEgEIAAAAQgFgHgCgKIgBgBQgDgQABgSIAAAAQALgHAPAAQAJAAAKADIAAgBQABgLAEgKIAAgBQACgSAJgQIgUALQA6goBOgaIgNAHIgkAQQgNAHgMABIgBAAIABACIgCABIgBAAQgKADgGAGIAAAAIgLAEIAAABIgBAIIgBAAQgPAZgCAmIAAAAIAMAUIAAABQgKABgEgHIAAABQgDACgEABIgBAAIAAgCQgDgFACgHIAAgBIgKgDQgLgDgLAFIgBAAIACAbQAIAQgBAYQgBAWgHARIgBAAIgCADIAAAAQgGAVgOALQgCAIgHAFQgGAFgDAIIAAABQAJASAYAFIABgBQAOgHANgKQAHgOALgKQAFgEAFACIAAAAQAAAIgGACIAAAAIgFAHIAAABQAAAKgFAFIgBAAQgDgDAGgDIgCABIgEADIgBABIgBABQgHAHgFALIgBAEQgIAJgBAOIAAACIAAACIgCAAIgEAAIAKAvQACAIgBAKIABACIABABQABAdgCAcIgBAAIgCgBIAAAIIAKAKIAUAVQAIAHACALQACACABACQAFATAAAUIABAKIABABQADAPAFAOIAEAIIABAAIANgEIACgBQANgLAOgHIAEABIAFAFIAAABQgBAEACAEIAAAEIABACIADAMIABAFQAGgBAGgDIAKgFIAAgBQAHgKAKAKIACADQAFARgFARIgBAEIADAIIgDAAIAAgBIAAgFIgCAJIAOgFQASgHAUgFQAegIAeAFQAUAEALAPIAJAKIACADIAEAHIADAEIADADIABAAIACAAIABgCIAEgEIAFgCQAKgKAHgMIgEACIADgCIADgDIADgGQACgEAEgCIABABIAGgGIADgDIACACQAVASAaAMIAWALIAKAIIAGgMQAKgXAMgYIAAgBIAEgIIADgDQAAgIAIAAQAUgBATAEIAaAGQgIgTABgWIADgSIAAgBQADgKAEgKQAGgOAKgGQANgJAUADIAUAEIAMADIAFABQADgTgEgTQgCgLABgLQAAgIAEgIIgBgFIgBgBIgBgCIgDgXIgCgJQgBgEADgFIABAAIgBgJIgDghQAFgKgBgLQAAgEgDgDIAFAAIAAAAIAEAGIABAAQACAHAFADIAAAAIADACQAEACAGABIAAAAIgDgXIAAAAQgJgcgGgcIAAgBQAEgFAAgJQABgIADgLIABgGQADgDAAgHIABgFQACgOAAgOIAAgJQgHgRgRgEIgBAAQgIAJgHAMIAAAAIAAAGIAAABQgCAFgGACIgBAAQgCgCgBgDIAAgCQACgGgBgJIAAgBQADgCgBgIQgBgGACgFQgBgcgHgdQgDgNgFgMQgMgXgSgPQgTgPgXgLIgEgCIgBAAQgEgCgEABIAAgEIgGgBQgFgCgDgFIAAgCIAAgBIgDgGIgBgCIAAgBIAHACIAAAAIABABIABAEIAAABIAHAGIAEADIABAAIAAAAIAFgBIADAGIASAAQATAJAOAOIAAABIAHAFQAPANAKASIAAAAQAGAPAHAMIAAABQAEAjABAlQADgDABgEIAAgBQADgEAGAAIAAgBQAKADAIAEIAAAAIALAMIABABQACAIAAAGIAAAAQADAAABAEIAAAAQgCAagEAUQgBAHABAHIgCABQgCAHADAGIAAABQgDAHAEAIIAAAAQACAXAJATIAEAKQAFASgLAMQgBAEACACIAAABQgDAHABAGIABABQgCAEgDAEIgBAAQgFgBgGgEIgCgCIgIgMIgDgEIAAAAQgDAJABAKIAAACQADAHgCALIAAAAIAFAdIABAGIABABIADACIgCAJIAAALIAAADIgBAAIAAANIABAUQACAVgFAUQgNAIgPgKQgIgGgLACIgRACQgNABgHAMIAAABIgBAGIgCACQgEANgBANQgEAWANAPIAFAJIAEAFIAAABIABAIIAAAEIgBABQgKAEgIgKQgTgGgTgEQgPgDgPAAIgBABIgDAGIgCACIAAACIgBABIAAACIgBABIgJASIgBAFIgBACIgLAVIgCAGQgFAKgKAEQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQgHgGgIgFIgKgGQgcgMgYgSIgOASQgJATgTAKIgGAEQgKgBgHgJgABnEjQAOgMAPgCIAAAAIADgCIADABQAHAAAGACIACAAQgZAHgZAGgAjWCoIACgBIABAAIAAACIgDgBgAieBuIgBAAQgLgJgKgKIAAAAIgGgQIAAgBIAAgTQgDgFADgGIABgEIACgFIAAgDQgBgDADgDIAHgbQADgLAGgJQANgLAQgFIACgCQAIgCAHABIAHABIABAAQAEACABADQAGADAFAGIAAACIAAACIACACIACAEIADAFIABADIAAADIABACIABACIABABIABAEIABAUIAAADIgBAAQABAagHAYQgDAJgGAIIgGACIgMAEQgIADgEAGIgFACIgHAAQgKAAgIgCgAiGgcQgKABgHAFQgFAEgCAEQgPAagFAcQgCAIAEAFQAAAcAQANIABADQAJAJANABQAIgCAHgDQAGgCAEgFQAGgGADgHIABgBIABgBIAAgCIAAgCIACgCIACgBIACgPIgBgDIAAAAIABgGIAAgDIAAgRIAAgBIAAgCQACgOgEgMQgBgHgEgHIgEgEQgJgLgPAAIgEABgABNBuIgBAAIgHgEIAAAAIgCgEIAAgBQgGgCgFgEIgBAAQgFgBgDgFIgBgBIgBgIIgBgBIgEAEIAEgHQgDgcAGgbIABgFIABgCIABgBIAAgIIgBgHIAGgFIABgCIABgEQAGgIAIgGIAGgFIACABIABgBIAAgBQAOgHASAFQAMADAIAFQAFACABAHIAFADIAAABIACAJIAAAAQAIAIAAAOIAAAAIABACQgBACAEAFIAAAAQABAYgJATIAAABQgOAagYAPIAAABIgigCgABWgZIAAAAIgDABIAAADQgDAEgFADIgDABIgEAIIgDAEIAAABIAAABQgFAHABAIIAAADIgBABIgBACIAAAFIAAADIgCACIgBAIIAAAGIgBABQgBALAAAKIAAAGIABABIABACIAAACIACADIABABIABABIAEAFQARANAVAAQAIgBAIgCIACgCQAHgHADgKIABgCIAMgQIAAgBQAIgjgOgfIgBAAQgDgCgCgGIgBAAIgFgFIgBAAQgPgIgUAAIgDABgAgTAAQgUgBgSgIQgMgHgJgJIgBgBQgCgEgBgEIgCgHIgBgCQgDgEgCgEQgBgDABgEIABgBIAEgDIADABIABABIAAgBIADgBIAFADIAAABIAGAMIAAACIAAABIADADIABACQAEAIAGAGIABABIAEABIABABQAEABACADIAbAGQATgBATgMIAAgBQALgHAGgMIAAgCIABgEIgBgDIABgBQAFgHAHAGQABAHgCAGIgBADIgEAHIAAABIAAACIgJAKQgEAGgGAEIgHAGIAAAAIgCgBIgBAAIAAAAIAAACIgCACIgEAAIgOABQgJAAgJgBgAklgxIAAgBQACADgBAFIgBAAIgBABQgCgFADgDgAi5g0QgDgEgEgDIAAAAQgKgQgDgVIgCgTQAAgHAEgBQAEgCADADIAAAAQACAKgBAJIAAABIAFAIIAAAAIALgJIAAAAQgBgDAFgFIARgOQADgCAEgCQAFgFAGgEIABAAIAEgBIABAAQABgDAFgBIABAAQAMgNAVgDIAAAAQAQgIASgCIAAAAQAXgIAZgDIAsgFIABAAIAIgBQAAABAAAAQABABAAAAQAAAAABAAQABAAAAAAIAVgBIAAABQAIAEALABQAMAAAHAHQAKABAIADIABAAQAOAIALAJQAMAJAIAMIABABQADgDgBgIIAAgBIACgDIAAAAQABgGgBgEIAAAAQABgGADgCIACgBIACgCIAFAEIAAABIgFAnIAAABQgFAMgEAOQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgFAAgCgFIAAAAQABgGAAgIIAAgCIgLgSIAAgBQghgig6gJQgPgCgPAAQg+ADgyARQgSAGgPAIQgaAMgTAUIgGACIgBAAIgUAXIgBAAQAAAQAFAMQABABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgCABIgBgBg");
	this.shape_3.setTransform(0,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AAoEiIgTgBIgvgEQgZgDgWgFIgSgEQgIgBgIgDQgZgKgZgMQgFgGgEgGQgOgUgRgRIgGgGQgHgRgMgPQgJgTgGgVIgEgKQgGgMgBgNQgBgLgEgJIgFgIQgKgNgUACQACgGgCgCIAAABQgDADABAFQgGACgFADIgGAGIABgEQAFgLAHgIIAAAAIACgBIAEgDIACgBQgHADAEADIABAAQAFgFAAgKIAAgBIAFgHIAAAAQAGgCAAgIIAAAAQgFgDgFAFQgLAKgHAOQgNAKgPAHIAAABQgYgFgJgTIAAAAQADgIAGgFQAHgFACgIQAOgLAGgUIAAAAIACgDIAAAAQAIgRAAgWQABgZgHgPIgCgbIAAAAQALgFAMADIAKADIAAABQgDAHADAFIABABIAAAAQAFAAADgCIAAgBQAEAGAKgBIAAAAIgMgUIgBAAQADgmAPgZIAAgBIACgIIAAgBIAKgDIABAAQAGgGAKgDIABAAIACgBIgBgCQANgBANgHIAkgQIAMgHQAWgHAXgGQCbgXCSAYIAAABIABACIAEAGIAAABIAAACQADAFAEACIAGABIABADQAEAAADABIABABIAFACQAXALASAPQATAPAMAXQAFALADANQAHAdABAdQgCAEAAAHQABAHgCADIAAABQABAIgDAHIAAABQACAEACACIABAAQAFgCACgFIAAgBIAAgGIABAAQAHgMAIgJIABAAQARAEAHAQIAAAJQAAAPgCAOIgBAFQAAAHgEADIgBAGQgCAKgBAIQAAAJgFAFIAAABQAHAcAJAbIAAABIADAXIgBAAQgFAAgEgCIgDgCIAAAAQgFgEgCgHIgBAAIgEgGIgBAAIgEAAIgDgCQgPgJgIAPIgCAHQgFALgDAMIgDAGIgEAJQgFAJgGAIIgIANIgVAoQgOAagWASIgEACIgSALIgSALQgUALgYAFIgQADIggAGQgSADgSAAIgFAAgAiBAxIgDABQgPAGgNALQgHAJgDAKIgHAcQgCAEABADIgBACIgBAGIgBAEQgDAGADAFIAAATIAAABIAFAQIABAAQAKAKALAJIABAAQAKADAPgBIAFgCQADgGAJgDIAMgEIAFgCQAHgIACgJQAHgYgBgaIABgBIABgCIgCgUIABgEQgBgFgEgEIAAgEIgDgEIgDgEIgBgCIAAgCIAAgCQgFgGgGgDQgBgDgEgCIgBAAIgIgBIgFAAQgEAAgFABgABIC+IAAABIABAEIABAAIAHAEIABAAIAiACIAAgBQAYgPAOgaIAAgBQAIgTAAgZIAAAAQgEgEABgCIgBgCIgBgBQABgOgIgIIAAAAIgDgJIAAgBIgEgEQgBgGgFgCQgIgFgMgDQgTgFgOAHIAAABIAAABIgCgBIgHAFQgHAGgGAIIgBADIgBADIgGAFIABAIIgBAIIAAABIgBACIgBAFQgHAbAEAcIgEAHIAEgEIAAAAIACAIIABACQADAEAFACIABAAQAFAEAGACgAhUAdIgCABQAAAEABADQACAEADAEIABACIABAHQABAEADADIABACQAJAJALAGQASAJAUABQAQADARgCIAEgCIACgBIAAgCIAAAAIABAAIACABIAAAAIAHgGQAFgEAFgGIAJgKIAAgCIAAgBIADgHIABgDQADgGgCgHQgHgGgFAGIAAACIABADIgBAEIgBABQgFANgLAHIgBABQgSAMgTABIgbgGQgDgDgEgBIgBgBIgDgBIgBgBQgGgGgFgIIgBgCIgCgDIAAgCIAAgBIgGgMIgBgBIgEgDIgDABIgBABIAAgBIgDgBIgEADgAjGgiQgEABAAAGIACAUQADAUAJAQIABAAQAEADADAEQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQgFgNAAgPIABAAIAUgXIAAAAIAHgCQATgTAagMQAPgIARgGQAzgRA+gDQAOgBAPADQA7AJAhAiIAAABIALASIAAABQAAAJgCAGIABAAQACAEAEABQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAQADgPAFgLIAAgBIAGgoIgBgBIgFgDIgCACIgBAAQgDADgBAFIAAABQABAEgBAGIAAAAIgCADIAAABQAAAHgDAEIgBgBQgIgMgLgJQgMgJgOgIIAAAAQgIgDgKgCQgHgGgMgBQgLgBgIgDIAAgBIgVABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgIABIAAAAIgsAEQgZADgXAJIAAgBQgSADgQAIIAAAAQgWADgMAMIgBAAQgEABgCAEIAAAAIgEABIgBAAQgHAEgEAFQgEABgDADIgRAOQgFAEABAEIgBAAIgKAJIgBAAIgEgIIAAgBQAAgKgBgJIAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgDABg");
	this.shape_4.setTransform(-0.5,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbubheadscene5, new cjs.Rectangle(-37.7,-36.2,75.4,74.6), null);


(lib.scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.ant.start();
		*/
	}
	this.frame_14 = function() {
		/* _root.ant.start();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// from
	this.instance = new lib.prepwordfroms5();
	this.instance.parent = this;
	this.instance.setTransform(71.6,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// out of
	this.instance_1 = new lib.prepwordoutofs5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.4,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// to
	this.instance_2 = new lib.prepwordtos5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-55.4,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// Layer 4
	this.instance_3 = new lib.ant1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8.3,-50.9,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:21.3,y:-53},14).to({x:-8.3,y:-50.9},15).wait(1));

	// bub head
	this.instance_4 = new lib.prepbubheadscene5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.8,-12.6,0.907,0.907,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// tree stump
	this.instance_5 = new lib.treestump();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.2,36.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AUtwWMgpiAAAMAAAAgtAU2wLIAAYTIAAANIAAH0MgprAAA");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AE8AZIABgBIAAABIgBAAgAElAHIAAAAIAAAAgAEAgPIAAABIAAABIAAAAIgBAAIgBABgAk8gXIACgBIABAAQAJADAHAEIgTgGg");
	this.shape_1.setTransform(73.4,47.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AiuAUQgHgBgDgGIAAgBQAAgEABgDQACgDAFgBIAMgBIAagBQAXgDAZgCIAsgEIA8gHIAzgDQAMgBAMABQAMABAKgBQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAAQASADARAAQARAAAPAEIADABQgDACgBAEIAAABQgEAAgBADIAAAAQgDABgCACIAAABIgRAFIAAAAIgpAEIgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAgBQgqAEgxAAIgZAAIgOABQgPAAgJACIgHAAIg8ACIgDAAIgaABIghgBg");
	this.shape_2.setTransform(8.2,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC33").s().p("A01GtIAAn1QAWAEAVAHIATAEIANgEIAGgFIAHgDQAegMAegFIATADIApAEIAtACIABAAQALAFAMACIABAAIAIABQAvAAAugDQA5gDA4gKIABgCIASgBIABAAQAFgEAFABIABAAQADAGALgBIABgBIAMgGIABAAQAHgIAGgJIAAgBQAKAGAIAHIABAAIAJAAIAAAAQARgJAFgUIAAAAIAGAKIAAABQAEABABACIABABIALABIABAAIAWgNIABAAQABgEADgBIABAAQABgEAEgCIABAAIAAABIgGAUIABAAIABAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAABAAQAAAAABgBQAAAAABAAIAZgPIAAgBQACgDAEgCIABAAQAHAVARAKIABAAIAKAAIABAAIAYgfIABABQAKAJALAHIAGADIABAAIAGgFIAAAAQAFgLAJgGIAAABQgBAKgDAJIAAAAQACADgCADIAAABIAGAFQAGABAEgEQALgKAPgFIAAAAQgCAKAAAIIAAABIAIAJIABAAQAGABAFADQAVAAAKgLIAAgBQAPAFASABIAAAAQASgLANgRIABgBQACgCAEAAQAIADAEAHIAAABQANADANgCIANgDIAOgCQAFgEAEgFIAAgBIggAHQgIABgJgCQgIgCgEgGQAEgBAEADIAAABQAJABACgCIAAgBQAGAEAJgBIAAAAIAZgJIAXgLQAPgIAIgPIABgCIABgBIABgBIADgLIAAgEIAFABIAAAAQADgDABgFIAAAAIAJgKQAEgFADgFIABgCQADgBACgDIAAgBQgDgDgBgFIAAgGQCZAHCXAJQAsADAsAMQAlAKAmABICAAEIAKANIALARQADADACACIAAAAIgBABIAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQANAGAPABIgBAEIANACIABAAIAFAFIAAAAQALAGARABIAcAEIAaADQAVACAYgBIAWAAQANAAAJgBQAHgDAJABIAAACIAAACIgBAGQAAAAAAAAQAAABgBAAQAAAAAAABQABAAAAABIAAAAQAFADAHgCIAAAAIAngZIABgBQABgEAEgDIAAABIAJAKIAAAAIAGABIABAAIAPgGIAAAAQATgPAOgSIAAAAIADALIABAAIAEAGIAAAAQAXADALgRIAAAAIAYgTIAKgJIgBAKIAAAFIgBABIgPAaIgBAAQgHAEABAJIAAAAQAFABACgCQAUgRAYgNIADgCIADgBIAAAAIAAACIABALIABAAIAEALQAJAMAOAHQAGADAFAEQAMALAOgIQABgHAAgJQABgJACgGIAAABQAFAMAHAJIABAAQACACAEAAIABAAQADgDAGAAIAAAAIACgCIAAgBIABAAQAGgCADgFIABAAQAFgBAEgEIgBAFQgFAPAJAKIAAAAQAHABAGgCIAAgBIAQgLIAAAAIAFAJIALADQAFACADADIgBABQgQAAgOADIgBAAQgJgCgJAAIABABIAAAAQAFABADADIAAAAIAAABIAAABIABAFIABACQBbAEBiABQAgAAAeAFIBHAMIAAHygAB6gyQAFAAACgDIgPgBIAIAEgAGuh8IgIADIAFABIABAAIADABIABABQAMABAIgEIABAAQgBgGgLgBIgHgCgAEGlVQgwgFgtgOQgigLgjgBQifgGiggBIAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgDgHAEgIIACgCIAFgBIAcgGQAWgEAWAAQARgBARACIgHAGIAOABQgCADABAEIAAABQADAGAHABQAdACAegCIADAAIA7gCIAHAAQAJgCAPAAIAOgBIAaAAQAxAAAqgEIAAABQAAAAABgBQAAAAABABQAAAAAAAAQABAAAAABIABAAIApgEIAAAAIARgFIAAgBQACgCADgBIAAgBQABgDAEAAIAAgBQABgEADgCIgDgBIAPgDIAhgFIAMgBIAAAAIAAABIADADIABAAIAEACIAAADIAAAEIACACQgCAPgBANIAAAAQgDADACADIABACIAAAMIAAAIIAAAQIAAAFIhFgFg");
	this.shape_3.setTransform(0,60.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#660000","#996600","#FFFFFF","#FFCC00","#E2B41A","#FFFFFF","#FFFFFF","#FFD325"],[0,0.902,0.914,0.922,0.922,1,1,1],-823.7,-71.8,814.7,-71.8).s().p("AjaAKIAEgBIAbgHQAqgHAvgDIA/gEIA8gFIAxgEIAOgBIADAAQAUgBASABQArABAjAMIAHADIAQAEIATAFIghAFQgCgDgEgCIAAAAIgGABIgBgBQgLgDgIAAQgNgCgNAAQgSAAgMgEIgBAAQgUABgQgDQgHABgJgBQgHAAgGAEIgBAAIgzADIgBAAIgDADQgEgDgHABIgcACIgJAAIgBAAQgBACgDABIgxAFIgtAEQgRACgMgDQgIgCgGACIgUAGQgXABgVAEIAegOg");
	this.shape_4.setTransform(6.3,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AByDKIAPABQgCADgFAAIgIgEgA0KDDQgVgHgWgEIAAAAIAeADIAOACIAAAAIABgHIAJADIAAAEIAbABIgGAFIgNAEIgTgEgATvCvQgegFggAAQhigBhbgEIgBgCIgBgFIAAgBIAAgBIAAAAQgDgDgFgBIAAAAIgBgBQAJAAAJACIABAAQAOgDAQAAIABAAIAAgBQgDgDgFgCIgLgDIgFgJIAAAAIAAAAIgQALIAAABQgGACgHgBIAAAAQgJgKAFgPIABgFQgEAEgFABIgBAAQgDAFgGACIgBAAIAAABIgCACIAAAAQgGAAgDADIgBAAQgEAAgCgCIgBAAQgHgJgFgMIAAgBQgCAGgBAJQAAAJgBAHQgOAIgMgLQgFgEgGgDQgOgHgJgMIgEgLIgBAAIgBgLIAAgCIAAAAIgDABIgDACQgYANgUARQgCACgFgBIAAAAQgBgJAHgEIABAAIAPgaIABgBIAAgFIABgKIgKAJIgYATIAAAAQgLARgXgDIAAAAIgEgGIgBAAIgDgLIAAAAQgOASgTAPIAAAAIgPAGIgBAAIgGgBIAAAAIgJgKIAAgBQgEADgBAEIgBABIgnAZIAAAAQgHACgFgDIAAAAQAAgBgBAAQAAgBAAAAQABgBAAAAQAAAAAAAAIAEABIABAAQAXgMARgRIAAgBQAHgcAFgcIAAgBIAMAAIAAACQgBAJgDAKIAAAAQgBALABANIAAABIACAHIAAABIAJAFIAAABQAagQAPgaIABAAIADgLIACgHIACgFIANgBQgBAHgDAEIAAAAIABADQgBAEgCAFIgBAAIABAQIAAAAIAGAIIABABQALgFAKgHQAHgFAGgHIAFgFIAFgFIAKgJQAFgFAIACQAEAGgCANIAAABIAAAAIgBABQgEAGgCAIIgBAFIAKgGIAKgGIAIgGIACgBQAFgEAHABIABAGQAAAGgBAHIAAAAQAMAcAeAKIABAAQgBgUAGgOIABgBQAEgDAIAAIAAAAIAHAGIAAAAQABAIADAGIAAABQAEADADAGIAAAAQANgFAKgIIABAAIABAAIAAAAIAAgCIAAAAIACgCQAGgEAJgBIAAAAQAEAFgDAIIAAABQAAADgDABIAAABQgBAIACAHQAHAAAFgGIAAAAQAEgBACgCIAAgBQAHgEAHABIAAABQAAAGADADIAAAAIALAEQACAKALAEQAXAJAZgEIADgBQAnACAoAAQBGAABFARIAAANIhHgMgAwXC7IgIgBIgBAAQgMgCgLgFIgBAAIgtgCQAUgCASgGQAKgEAGAGIAQACQBCAKBCgLIALgCIABAAIAEAAIAQgDIgBAAIgBAAIALgCQAFgCADgDIALACIAPgDIAKgBIACgBQAQACANgHIAEgCQAIABAFADIABAAIAFgCIABgBQAGgIAAgQIAAAAQgFgIABgIIAAgBQAEgDAGAAIAAAAQAEADACAHIAAAAQAAAJACAHIAAABIAMAMIAAABIAHADIAAAAQALgGACgPQABgMAFgIIADgEIACgCQAEAAACABIAAABIADAKIAEAOIADAJQAEgBACACIABAAIAKgDIABAAQABgFAGgBIABAAQAJgNAMgJIABAAIACgGIAAAAIADgCIABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAAgBQAFgFAHABIABAAIAAADQAAAEgCACIAAAAIAAAGIAAAAQgIAKgEAOQAFgCACgDIAAgBQAKgEAHgHIAAgBIAHAAIABAAQADAHABAJIAAABQAGAKALAHIAAAAQAPgNAHgUIABgCIAJgCIAAAAIARATIAAAAIADABIAFADIAAAAIAcgkIAAAAQAFgCAFACIABABQAAAGgCADIgBAAIgDAWIAAABQgEAFgBAIIABAAQAIgBAHgEIABgBIACgDIAAAAIAWgMIAEgBQADAAAAAEIAAAAQgEAHAAALIAAAAQgDAFAAAEIAAABQAEAFAIACIAAABIAIAAIABAAIATgOIAEgCQAEAAABAEIAAAAQAJAFAMAAIABAAIAcgZIABgBIADgDQAGABACgDIABAAQAGABAIAAIABAAQACACAIgBIAGAAIAagGIABAAQAEgFAHgBIABAAQAQgIAPgKIABAAIAFgKIAAAAQADgCABgDIABgBIAAgIIACAAQAGABADgDIAAAEIgDAKIgBACIgBABIgBACQgIAPgPAIIgXALIgZAJIAAAAQgJABgGgEIAAABQgCACgJgBIAAgBQgEgDgEABQAEAGAIACQAJACAIgBIAggHIAAABQgEAFgFAEIgOACIgNADQgNACgNgDIAAgBQgEgHgIgDQgEAAgCACIgBABQgNARgSALIAAAAQgSgBgPgFIAAABQgKALgVAAQgFgDgGgBIgBAAIgIgJIAAgBQAAgIACgKIAAAAQgPAFgLAKQgEAEgGgBIgGgFIAAgBQACgDgCgDIAAAAQADgJABgKIAAgBQgJAGgFALIAAAAIgGAFIgBAAIgGgDQgLgHgKgJIgBgBIgYAfIgBAAIgKAAIgBAAQgRgKgHgVIgBAAQgEACgCADIAAABIgZAPQgBAAAAAAQgBABAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgBAAIgBAAIAGgUIAAgBIgBAAQgEACgBAEIgBAAQgDABgBAEIgBAAIgWANIgBAAIgLgBIgBgBQgBgCgEgBIAAgBIgGgKIAAAAQgFAUgRAJIAAAAIgJAAIgBAAQgIgHgKgGIAAABQgGAJgHAIIgBAAIgMAGIgBABQgLABgDgGIgBAAQgFgBgFAEIgBAAIgSABIgBACQg4AKg5ADQgoADgoAAIgNAAgAKFCLIAAgCQgJgBgHADQgJABgNAAIgWAAQgYABgVgCIgagDIgcgEQgRgBgLgGIAAAAIgFgFIgBAAIgNgCIABgEQgPgBgNgGQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIABgBIAAAAIABAAIABgBIADABIAUAGIAEABIATAEQAHAFAIACIAVAFIAfACQAOAAAKADQAHADAIAAIAcgBIAvgCIADAAQALgCAGAFIAAAAQgCADgGgBIgBABQgBACgEAAIgBABIgBADIAAgCgAGwCKIgBgBIgDgBIgBAAIgFgBIAIgDIAEgGIAHACQALABABAGIgBAAQgGADgJAAIgFAAgAjWiTIAAgBQAAgCgDgCIAAAAIAAgBQAAgEACgBQACgCAEABIABAAQAJgEALAAIAAgBQAGgDAIAAIABgBIADgBIABAAIAEAAIABgBQALgEAKABQAFgEALgDQAagGAbABIAAgBIADgBIAHgBIAngCIAugEIB7gKQAegCAfACIAZADQAQACALAGIABAAIAFAAQAIABAEAEIABAAIAoALIAAABIAGADIABAAIABACIgMABIgTgFIgRgFIgHgCQgjgMgrgCQgSgBgUABIgCABIgPABIgwAEIg9AEIg+AEQgvADgrAJIgaAGIgEABIgfAOIgcAGIAAgEgAhziSIAHgGQgRgCgRABIAUgGQAHgCAIACQAMACAQgBIAugFIAvgFQADgBACgCIAAAAIAKAAIAcgDQAIgBADAEIAEgEIAAAAIA0gDIABAAQAGgEAHABQAIABAHgBQARADATgCIABAAQANAFARgBQAOAAANAEQAIgBALAEIAAAAIAGAAIABAAQAEABACADIgPADQgPgEgRAAQgRAAgSgDIAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgKABgMgBQgMgBgMABIgzADIg9AHIgrAEQgZABgXAEIgaABIgMACQgGABgBADIgOgBgAFMieIAAgEIACAFIAAAAIAAABgAFHinIgDgDIAEADg");
	this.shape_5.setTransform(0,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6FFFF").s().p("Az/MRIAAgEIgJgDIgBAGIAAAAIgOgBIgegDIAA4dMAprAAAIAAYTQhFgShGABQgoAAgngCIgDAAQgZAFgXgJQgLgEgCgKIgLgEIAAAAQgDgEAAgFIAAgBQgHgBgHADIAAABQgCADgEABIAAAAQgFAGgHAAQgCgHABgIIAAgBQADgBAAgDIAAgBQADgIgEgGIAAAAQgJACgGAEIgCACIgCACQgKAIgNAFIAAAAQgDgGgEgDIAAgBQgDgGgBgIIAAAAIgHgGIAAAAQgIAAgEADIgBAAQgGAOABAVIgBAAQgegKgMgcIAAAAQABgHAAgGIgBgHQgHAAgFAEIgCABIgIAGIgKAGIgKAGIABgGQACgHAEgGIABgBIAAAAIAAgBQACgNgEgHQgIgBgFAFIgKAJIgFAFIgFAFQgGAHgHAFQgKAHgLAFIgBgBIgGgIIAAAAIgBgQIABAAQACgFABgEIgBgDIAAgBQADgEABgGIgNABIgCAFIgCAHIgDALIgBAAQgPAagaAQIAAgBIgJgFIAAgBIgCgHIAAgBQgBgNABgLIAAAAQADgKABgJIAAgCIgMAAIAAABQgFAcgHAcIAAAAQgRASgXAMIgBAAIgEgBIABgGIABgEIABAAQAEgBABgCIABAAQAGABACgDIAAAAQgGgGgLADIgDAAIgvACIgcABQgIgBgHgCQgKgDgOAAIgfgCIgVgFQgIgCgHgFIgTgEIgEgCQgIgDgJgDIgBAAIgCABIgDgBIgBAAIgBAAQgCgBgDgDIgLgRIgKgNIiAgEQgmgCglgJQgsgNgsgDQiXgJiZgHIAAAGQABAGADADIAAAAQgCADgDACIgBACQgDAFgEAFIgJAKIAAAAQgBAFgDADIAAAAIgFgBQgDADgGgBIgCAAIAAAIIgBABQgBADgDABIAAABIgFAKIgBAAQgPAJgQAJIgBAAQgHABgEAEIgBAAIgaAHIgGAAQgIABgCgCIgBAAQgIAAgGgBIgBAAQgCACgGAAIgDACIgBABIgcAZIgBAAQgMAAgJgEIAAAAQgBgEgEgBIgEACIgTAPIgBAAIgIAAIAAgBQgIgCgEgFIAAgBQAAgEADgFIAAAAQAAgLAEgHIAAAAQAAgEgDgBIgEACIgWAMIAAAAIgCADIgBAAQgHAFgIABIgBAAQABgIAEgGIAAAAIADgWIABAAQACgEAAgFIgBgBQgFgCgFACIAAAAIgcAkIAAAAIgFgDIgDgBIAAgBIgRgSIAAgBIgJACIgBADQgHATgPAOIAAgBQgLgGgGgLIAAAAQgBgJgDgHIgBAAIgHAAIAAABQgHAHgKAEIAAAAQgCAEgFACQAEgOAIgKIAAAAIAAgGIAAAAQACgCAAgEIAAgDIgBAAQgHgBgFAFIAAABQAAAAgBAAQAAABAAAAQAAAAAAABQAAABAAAAIgBAAIgDACIAAABIgCAFIgBAAQgMAKgJANIgBAAQgGABgBAEIgBAAIgKAEIgBAAQgCgCgEAAIgDgIIgEgOIgDgKIAAgBQgCgCgEABIgCACIgDAEQgFAIgBALQgCAQgLAGIAAAAIgHgEIAAAAIgMgMIAAgBQgCgHAAgKIAAAAQgCgGgEgDIAAgBQgGABgEADIAAAAQgBAJAFAHIAAABQAAAQgGAIIgBAAIgFADIgBAAQgFgDgIgBIgEABQgNAIgQgCIgMACIgPACIgLgBQgDADgFABIgLADIABAAIABAAIgQACIgEABIgBAAIgLACQhCALhCgKIgQgDQgGgFgKAEQgSAGgUACIgpgFIgTgCQgeAFgeAMIgHADIAAAAIgbgBgAjXG1QgCABAAAEIAAAAIAAABQADACAAACIAAABIAAAEIgFABIgCABQgEAJADAGQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAIAAAAQCgABCfAGQAjACAiALQAtAOAwAFIBFAFIAAgFIAAgQIAAgIIAAgMIgBgDQgCgCADgDIAAAAQABgOACgOIAAgBIAAAAIgCgFIAAgDIgEgCIgEgDIAAgBIAAgBIgBgBIgBAAIgGgEIAAAAIgogMIgBAAQgEgDgIgBIgFAAIgBAAQgLgHgQgBIgZgDQgfgCgeABIh7AKIguAFIgnACIgHAAIgDACIAAAAQgbAAgaAGQgLACgFAFQgKgBgLAEIgBAAIgEAAIgBAAIgDACIgBAAQgIAAgGAEIAAABQgLAAgJADIgBABIgCAAIgEABg");
	this.shape_6.setTransform(0,-24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("A0zwWIgEAAAU4wLIAAYTIAAANIAAH0MgprAAAA0zQXMAAAggtAUvwWMgpiAAA");
	this.shape_7.setTransform(-0.2,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF99").s().p("AFcBHIAAgBIABABIgBAAgAFFA1IAAAAIAAAAgAEgAeIAAAAIAAACIgBAAIAAAAIgBAAgAkdAWIADgBIABAAQAJADAHAEIgUgGgAlchDIAAgDIABADg");
	this.shape_8.setTransform(70.3,42.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC33").s().p("A01GtIAAn1QAWAEAVAHIATAEIANgEIAGgFIAHgDQAegMAegFIATADIApAEIAtACIABAAQALAFAMACIABAAIAIABQAvAAAugDQA5gDA4gKIABgCIASgBIABAAQAFgEAFABIABAAQADAGALgBIABgBIAMgGIABAAQAHgIAGgJIAAgBQAKAGAIAHIABAAIAJAAIAAAAQARgJAFgUIAAAAIAGAKIAAABQAEABABACIABABIALABIABAAIAWgNIABAAQABgEADgBIABAAQABgEAEgCIABAAIAAABIgGAUIABAAIABAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAABAAQAAAAABgBQAAAAABAAIAZgPIAAgBQACgDAEgCIABAAQAHAVARAKIABAAIAKAAIABAAIAYgfIABABQAKAJALAHIAGADIABAAIAGgFIAAAAQAFgLAJgGIAAABQgBAKgDAJIAAAAQACADgCADIAAABIAGAFQAGABAEgEQALgKAPgFIAAAAQgCAKAAAIIAAABIAIAJIABAAQAGABAFADQAVAAAKgLIAAgBQAPAFASABIAAAAQASgLANgRIABgBQACgCAEAAQAIADAEAHIAAABQANADANgCIANgDIAOgCQAFgEAEgFIAAgBIggAHQgIABgJgCQgIgCgEgGQAEgBAEADIAAABQAJABACgCIAAgBQAGAEAJgBIAAAAIAZgJIAXgLQAPgIAIgPIABgCIABgBIABgBIADgLIAAgEIAFABIAAAAQADgDABgFIAAAAIAJgKQAEgFADgFIABgCQADgBACgDIAAgBQgDgDgBgFQABgJgCgIIAAAAQAEgTgBgPQgBgIAEgDIACgZIAAgBIgCgRIAAAAIgDgDIAAgDQgBgEgDAAIgIgjQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgDgHAEgIIACgCIAFgBIAcgGQAWgEAWAAQARgBARACIgHAGIAOABQgCADABAEIAAABQADAGAHABQAdACAegCIADAAIA7gCIAHAAQAJgCAPAAIAOgBIAaAAQAxAAAqgEIAAABQAAAAABgBQAAAAABABQAAAAAAAAQABAAAAABIABAAIApgEIAAAAIARgFIAAgBQACgCADgBIAAgBQABgDAEAAIAAgBQABgEADgCIgDgBIAPgDIAhgFIAMgBIAAAAIAAABIADADIABAAIAEACIAAADIAAAEIACACQgCAPgBANIAAAAQgDADACADIABACIAAAMIAAAIIAAAQIAAAMIgCAwIABAAQAEALAHAIIAAABQAFAOAHAMIABgKIABAAIACACIAFALIAAADQAPAcATAYIALARQADADACACIAAAAIgBABIAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQANAGAPABIgBAEIANACIABAAIAFAFIAAAAQALAGARABIAcAEIAaADQAVACAYgBIAWAAQANAAAJgBQAHgDAJABIAAACIAAACIgBAGQAAAAAAAAQAAABgBAAQAAAAAAABQABAAAAABIAAAAQAFADAHgCIAAAAIAngZIABgBQABgEAEgDIAAABIAJAKIAAAAIAGABIABAAIAPgGIAAAAQATgPAOgSIAAAAIADALIABAAIAEAGIAAAAQAXADALgRIAAAAIAYgTIAKgJIgBAKIAAAFIgBABIgPAaIgBAAQgHAEABAJIAAAAQAFABACgCQAUgRAYgNIADgCIADgBIAAAAIAAACIABALIABAAIAEALQAJAMAOAHQAGADAFAEQAMALAOgIQABgHAAgJQABgJACgGIAAABQAFAMAHAJIABAAQACACAEAAIABAAQADgDAGAAIAAAAIACgCIAAgBIABAAQAGgCADgFIABAAQAFgBAEgEIgBAFQgFAPAJAKIAAAAQAHABAGgCIAAgBIAQgLIAAAAIAFAJIALADQAFACADADIgBABQgQAAgOADIgBAAQgJgCgJAAIABABIAAAAQAFABADADIAAAAIAAABIAAABIABAFIABACQBbAEBiABQAgAAAeAFIBHAMIAAHygAB6gyQAFAAACgDIgPgBIAIAEgAGuh8IgIADIAFABIABAAIADABIABABQAMABAIgEIABAAQgBgGgLgBIgHgCg");
	this.shape_9.setTransform(0,60.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AByDKIAPABQgCADgFAAIgIgEgA0KDDQgVgHgWgEIAAAAIAeADIAOACIAAAAIABgHIAJADIAAAEIAbABIgGAFIgNAEIgTgEgATvCvQgegFggAAQhigBhbgEIgBgCIgBgFIAAgBIAAgBIAAAAQgDgDgFgBIAAAAIgBgBQAJAAAJACIABAAQAOgDAQAAIABAAIAAgBQgDgDgFgCIgLgDIgFgJIAAAAIAAAAIgQALIAAABQgGACgHgBIAAAAQgJgKAFgPIABgFQgEAEgFABIgBAAQgDAFgGACIgBAAIAAABIgCACIAAAAQgGAAgDADIgBAAQgEAAgCgCIgBAAQgHgJgFgMIAAgBQgCAGgBAJQAAAJgBAHQgOAIgMgLQgFgEgGgDQgOgHgJgMIgEgLIgBAAIgBgLIAAgCIAAAAIgDABIgDACQgYANgUARQgCACgFgBIAAAAQgBgJAHgEIABAAIAPgaIABgBIAAgFIABgKIgKAJIgYATIAAAAQgLARgXgDIAAAAIgEgGIgBAAIgDgLIAAAAQgOASgTAPIAAAAIgPAGIgBAAIgGgBIAAAAIgJgKIAAgBQgEADgBAEIgBABIgnAZIAAAAQgHACgFgDIAAAAQAAgBgBAAQAAgBAAAAQABgBAAAAQAAAAAAAAIAEABIABAAQAXgMARgRIAAgBQAHgcAFgcIACgNIABAAQAFgDAEADIAAABIAAANQgBAJgDAKIAAAAQgBALABANIAAABIACAHIAAABIAJAFIAAABQAagQAPgaIABAAIADgLIACgHIADgKQABgEAGgBQAEAAABACIAAABQAAALgEAGIAAAAIABADQgBAEgCAFIgBAAIABAQIAAAAIAGAIIABABQALgFAKgHQAHgFAGgHIAFgFIAFgFIAKgJQAFgFAIACQAEAGgCANIAAABIAAAAIgBABQgEAGgCAIIgBAFIAKgGIAKgGIAIgGIACgBQAFgEAHABIABAGQAAAGgBAHIAAAAQAMAcAeAKIABAAQgBgUAGgOIABgBQAEgDAIAAIAAAAIAHAGIAAAAQABAIADAGIAAABQAEADADAGIAAAAQANgFAKgIIABAAIABAAIAAAAIAAgCIAAAAIACgCQAGgEAJgBIAAAAQAEAFgDAIIAAABQAAADgDABIAAABQgBAIACAHQAHAAAFgGIAAAAQAEgBACgCIAAgBQAHgEAHABIAAABQAAAGADADIAAAAIALAEQACAKALAEQAXAJAZgEIADgBQAnACAoAAQBGAABFARIAAANIhHgMgAwXC7IgIgBIgBAAQgMgCgLgFIgBAAIgtgCQAUgCASgGQAKgEAGAGIAQACQBCAKBCgLIALgCIABAAIAEAAIAQgDIgBAAIgBAAIALgCQAFgCADgDIALACIAPgDIAKgBIACgBQAQACANgHIAEgCQAIABAFADIABAAIAFgCIABgBQAGgIAAgQIAAAAQgFgIABgIIAAgBQAEgDAGAAIAAAAQAEADACAHIAAAAQAAAJACAHIAAABIAMAMIAAABIAHADIAAAAQALgGACgPQABgMAFgIIADgEIACgCQAEAAACABIAAABIADAKIAEAOIADAJQAEgBACACIABAAIAKgDIABAAQABgFAGgBIABAAQAJgNAMgJIABAAIACgGIAAAAIADgCIABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAAgBQAFgFAHABIABAAIAAADQAAAEgCACIAAAAIAAAGIAAAAQgIAKgEAOQAFgCACgDIAAgBQAKgEAHgHIAAgBIAHAAIABAAQADAHABAJIAAABQAGAKALAHIAAAAQAPgNAHgUIABgCIAJgCIAAAAIARATIAAAAIADABIAFADIAAAAIAcgkIAAAAQAFgCAFACIABABQAAAGgCADIgBAAIgDAWIAAABQgEAFgBAIIABAAQAIgBAHgEIABgBIACgDIAAAAIAWgMIAEgBQADAAAAAEIAAAAQgEAHAAALIAAAAQgDAFAAAEIAAABQAEAFAIACIAAABIAIAAIABAAIATgOIAEgCQAEAAABAEIAAAAQAJAFAMAAIABAAIAcgZIABgBIADgDQAGABACgDIABAAQAGABAIAAIABAAQACACAIgBIAGAAIAagGIABAAQAEgFAHgBIABAAQAQgIAPgKIABAAIAFgKIAAAAQADgCABgDIABgBIAAgIIACAAQAGABADgDIAAAEIgDAKIgBACIgBABIgBACQgIAPgPAIIgXALIgZAJIAAAAQgJABgGgEIAAABQgCACgJgBIAAgBQgEgDgEABQAEAGAIACQAJACAIgBIAggHIAAABQgEAFgFAEIgOACIgNADQgNACgNgDIAAgBQgEgHgIgDQgEAAgCACIgBABQgNARgSALIAAAAQgSgBgPgFIAAABQgKALgVAAQgFgDgGgBIgBAAIgIgJIAAgBQAAgIACgKIAAAAQgPAFgLAKQgEAEgGgBIgGgFIAAgBQACgDgCgDIAAAAQADgJABgKIAAgBQgJAGgFALIAAAAIgGAFIgBAAIgGgDQgLgHgKgJIgBgBIgYAfIgBAAIgKAAIgBAAQgRgKgHgVIgBAAQgEACgCADIAAABIgZAPQgBAAAAAAQgBABAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgBAAIgBAAIAGgUIAAgBIgBAAQgEACgBAEIgBAAQgDABgBAEIgBAAIgWANIgBAAIgLgBIgBgBQgBgCgEgBIAAgBIgGgKIAAAAQgFAUgRAJIAAAAIgJAAIgBAAQgIgHgKgGIAAABQgGAJgHAIIgBAAIgMAGIgBABQgLABgDgGIgBAAQgFgBgFAEIgBAAIgSABIgBACQg4AKg5ADQgoADgoAAIgNAAgAKFCLIAAgCQgJgBgHADQgJABgNAAIgWAAQgYABgVgCIgagDIgcgEQgRgBgLgGIAAAAIgFgFIgBAAIgNgCIABgEQgPgBgNgGQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIABgBIAAAAIABAAIABgBIADABIAUAGIAEABIATAEQAHAFAIACIAVAFIAfACQAOAAAKADQAHADAIAAIAcgBIAvgCIADAAQALgCAGAFIAAAAQgCADgGgBIgBABQgBACgEAAIgBABIgBADIAAgCgAGwCKIgBgBIgDgBIgBAAIgFgBIAIgDIAEgGIAHACQALABABAGIgBAAQgGADgJAAIgFAAgAFjALIgBgDIAAgCIADAHIgCgCgAjWiTIAAgBQAAgCgDgCIAAAAIAAgBQAAgEACgBQACgCAEABIABAAQAJgEALAAIAAgBQAGgDAIAAIABgBIADgBIABAAIAEAAIABgBQALgEAKABQAFgEALgDQAagGAbABIAAgBIADgBIAHgBIAngCIAugEIB7gKQAegCAfACIAZADQAQACALAGIABAAIAFAAQAIABAEAEIABAAIAoALIAAABIAGADIABAAIABACIgMABIgTgFIgRgFIgHgCQgjgMgrgCQgSgBgUABIgCABIgPABIgwAEIg9AEIg+AEQgvADgrAJIgaAGIgEABIgfAOIgcAGIAAgEgAhziSIAHgGQgRgCgRABIAUgGQAHgCAIACQAMACAQgBIAugFIAvgFQADgBACgCIAAAAIAKAAIAcgDQAIgBADAEIAEgEIAAAAIA0gDIABAAQAGgEAHABQAIABAHgBQARADATgCIABAAQANAFARgBQAOAAANAEQAIgBALAEIAAAAIAGAAIABAAQAEABACADIgPADQgPgEgRAAQgRAAgSgDIAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgKABgMgBQgMgBgMABIgzADIg9AHIgrAEQgZABgXAEIgaABIgMACQgGABgBADIgOgBgAFMieIAAgEIACAFIAAAAIAAABgAFHinIgDgDIAEADg");
	this.shape_10.setTransform(0,34.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C6FFFF").s().p("Az/MRIAAgEIgJgDIgBAGIAAAAIgOgBIgegDIAA4dMAprAAAIAAYTQhFgShGABQgoAAgngCIgDAAQgZAFgXgJQgLgEgCgKIgLgEIAAAAQgDgEAAgFIAAgBQgHgBgHADIAAABQgCADgEABIAAAAQgFAGgHAAQgCgHABgIIAAgBQADgBAAgDIAAgBQADgIgEgGIAAAAQgJACgGAEIgCACIgCACQgKAIgNAFIAAAAQgDgGgEgDIAAgBQgDgGgBgIIAAAAIgHgGIAAAAQgIAAgEADIgBAAQgGAOABAVIgBAAQgegKgMgcIAAAAQABgHAAgGIgBgHQgHAAgFAEIgCABIgIAGIgKAGIgKAGIABgGQACgHAEgGIABgBIAAAAIAAgBQACgNgEgHQgIgBgFAFIgKAJIgFAFIgFAFQgGAHgHAFQgKAHgLAFIgBgBIgGgIIAAAAIgBgQIABAAQACgFABgEIgBgDIAAgBQAEgFAAgLIAAgBQgBgCgEAAQgGABgBAEIgDAKIgCAHIgDALIgBAAQgPAagaAQIAAgBIgJgFIAAgBIgCgHIAAgBQgBgNABgLIAAAAQADgKABgJIAAgNIAAgBQgEgDgFADIgBAAIgCANQgFAcgHAcIAAAAQgRASgXAMIgBAAIgEgBIABgGIABgEIABAAQAEgBABgCIABAAQAGABACgDIAAAAQgGgGgLADIgDAAIgvACIgcABQgIgBgHgCQgKgDgOAAIgfgCIgVgFQgIgCgHgFIgTgEIgEgCQgIgDgJgDIgBAAIgCABIgDgBIgBAAIgBAAQgCgBgDgDIgLgRQgTgYgPgdIAAgCIgFgLIgDgHIAAACIAAACIgBAKQgHgLgFgOIAAgBQgHgJgEgLIgBAAIACgwIAAgLIAAgQIAAgIIAAgMIgBgDQgCgCADgDIAAAAQABgOACgOIAAgBIAAAAIgCgFIAAgDIgEgCIgEgDIAAgBIAAgBIgBgBIgBAAIgGgEIAAAAIgogMIgBAAQgEgDgIgBIgFAAIgBAAQgLgHgQgBIgZgDQgfgCgeABIh7AKIguAFIgnACIgHAAIgDACIAAAAQgbAAgaAGQgLACgFAFQgKgBgLAEIgBAAIgEAAIgBAAIgDACIgBAAQgIAAgGAEIAAABQgLAAgJADIgBABQgEgBgCACQgCABAAAEIAAAAIAAABQADACAAACIAAABIAAAEIgFABIgCABQgEAJADAGQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAIAIAjQADAAABAEIAAACIADADIAAABIACAQIAAABIgCAaQgEADABAHQABAQgEASIAAABQACAHgBAJQABAGADADIAAAAQgCADgDACIgBACQgDAFgEAFIgJAKIAAAAQgBAFgDADIAAAAIgFgBQgDADgGgBIgCAAIAAAIIgBABQgBADgDABIAAABIgFAKIgBAAQgPAJgQAJIgBAAQgHABgEAEIgBAAIgaAHIgGAAQgIABgCgCIgBAAQgIAAgGgBIgBAAQgCACgGAAIgDACIgBABIgcAZIgBAAQgMAAgJgEIAAAAQgBgEgEgBIgEACIgTAPIgBAAIgIAAIAAgBQgIgCgEgFIAAgBQAAgEADgFIAAAAQAAgLAEgHIAAAAQAAgEgDgBIgEACIgWAMIAAAAIgCADIgBAAQgHAFgIABIgBAAQABgIAEgGIAAAAIADgWIABAAQACgEAAgFIgBgBQgFgCgFACIAAAAIgcAkIAAAAIgFgDIgDgBIAAgBIgRgSIAAgBIgJACIgBADQgHATgPAOIAAgBQgLgGgGgLIAAAAQgBgJgDgHIgBAAIgHAAIAAABQgHAHgKAEIAAAAQgCAEgFACQAEgOAIgKIAAAAIAAgGIAAAAQACgCAAgEIAAgDIgBAAQgHgBgFAFIAAABQAAAAgBAAQAAABAAAAQAAAAAAABQAAABAAAAIgBAAIgDACIAAABIgCAFIgBAAQgMAKgJANIgBAAQgGABgBAEIgBAAIgKAEIgBAAQgCgCgEAAIgDgIIgEgOIgDgKIAAgBQgCgCgEABIgCACIgDAEQgFAIgBALQgCAQgLAGIAAAAIgHgEIAAAAIgMgMIAAgBQgCgHAAgKIAAAAQgCgGgEgDIAAgBQgGABgEADIAAAAQgBAJAFAHIAAABQAAAQgGAIIgBAAIgFADIgBAAQgFgDgIgBIgEABQgNAIgQgCIgMACIgPACIgLgBQgDADgFABIgLADIABAAIABAAIgQACIgEABIgBAAIgLACQhCALhCgKIgQgDQgGgFgKAEQgSAGgUACIgpgFIgTgCQgeAFgeAMIgHADIAAAAIgbgBg");
	this.shape_11.setTransform(0,-24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_4},{t:this.shape_9},{t:this.shape_2},{t:this.shape_8},{t:this.shape_7}]},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.9,-106,269.8,212.3);


// stage content:
(lib.prep_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* music = new Sound();
		music.attachSound("2-a");
		music.start(0,99);
		ant = new Sound();
		ant.attachSound("5-b");
		v1 = new Sound();
		v1.attachSound("to");
		v2 = new Sound();
		v2.attachSound("from");
		v3 = new Sound();
		v3.attachSound("into");
		v4 = new Sound();
		v4.attachSound("out of");
		v5 = new Sound();
		v5.attachSound("above");
		v6 = new Sound();
		v6.attachSound("below");
		v7 = new Sound();
		v7.attachSound("up");
		v8 = new Sound();
		v8.attachSound("down");
		v9 = new Sound();
		v9.attachSound("around");
		v10 = new Sound();
		v10.attachSound("across");
		v11 = new Sound();
		v11.attachSound("over");
		v12 = new Sound();
		v12.attachSound("under");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(283.2,47.5,1,1,0,0,0,130.3,15.4);

	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.UI},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape.setTransform(335.2,372.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_1.setTransform(325.9,372.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgXANgNQAMgOATgBQAKAAAGAEIAIAFQABglACgMQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAQIAAACQAAADgCACQgDADgDAAQgFgBgDgHQgGAEgHADQgHACgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAIQAIAJALAAQAGgBAFgCIAKgHIADgDIgBgPIAAgKIABgLQgEgHgFgDQgGgEgIAAQgNAAgIAJg");
	this.shape_2.setTransform(315.5,370.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAJIABAIQAAADgDADQgCACgEAAQgEAAgCgCQgDgDAAgDIAAgIIgBgJIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACALAAAHQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_3.setTransform(305.8,372.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_4.setTransform(294.3,370.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_5.setTransform(256.5,372.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_6.setTransform(247.2,372.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJApIgOgkIgPgnIgBgEQAAgEADgDQADgCADAAQAFAAACAFIAXA9QAGgOAKgaIAHgUQADgGAEAAQAFAAACADQADADAAADQAAADgOAjIgTAoQAAAIgHAAQgGAAgDgHg");
	this.shape_7.setTransform(237.9,372.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsA2QgSgQAAgZQAAgdASgZQAUgbAeAAQAcAAAOANQAPANAAAdQAAAegRAYQgSAcgdAAQgaAAgRgPgAgegdQgOAUAAAWQAAARAMALQAMAKATAAQAUAAAOgVQAMgUAAgXQAAgVgJgIQgJgIgVAAQgVAAgPAVg");
	this.shape_8.setTransform(226.3,370.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgCAEAAQADAAAEADQACACAHACIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgGQADgCAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFABQAUAEAJAHQAPAHAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_9.setTransform(343.1,355.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgCAEAAQADAAAEADQACACAHACIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgGQADgCAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFABQAUAEAJAHQAPAHAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_10.setTransform(334.4,355.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAAOAHAGQAGAHAIgBQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_11.setTransform(325.4,355.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_12.setTransform(316.8,355.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAnQgNgMAAgSQAAgSAMgTQAOgUAPgBQAJAAAKAFQANAFAAAIQAAACgCADQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgDgEQgFgEgMAAQgIAAgJAQQgIAPAAAKQAAALAIAHQAHAGALAAQAFAAAGgDIAKgFIAEgCQADABADACQACACAAAEQAAAGgOAHQgLAEgIAAQgRABgMgLg");
	this.shape_13.setTransform(307.6,355.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_14.setTransform(296.3,353.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeA8QgNgNAAgTQAAgXANgNQAMgPATAAQAKAAAGAEIAIAFQABgkACgNQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAQIAAACQAAADgCADQgDACgDAAQgFgBgDgHQgGAFgHACQgHACgGAAQgSAAgMgMgAgUABQgHAJAAARQAAAMAIAIQAIAJALgBQAGAAAFgCIAKgHIADgDIgBgQIAAgJIABgLQgEgHgFgCQgGgFgIAAQgNAAgIAIg");
	this.shape_15.setTransform(257.5,353.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACALAAAHQAAAFgDACQgCACgEAAQgIAAgBgIg");
	this.shape_16.setTransform(247.8,355.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAUAqQgLAGgNAAQgMAAgIgFQgIgGgCgLQgDgXAAgRQAAgMACgQQACgHAHAAQAEAAADACQACACAAAEIgBANIgBAOIABAYQAAAKACAHIAGACIAGABQAKAAANgEIAAgSIAAgQQAAgTACgOQABgIAHAAQAEAAACADQADACAAAEIgCAhIAAASIAAATIABAGIAAAGQAAADgDADQgCACgEAAQgGAAgCgIg");
	this.shape_17.setTransform(238.2,355.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAAOAHAGQAGAHAIgBQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_18.setTransform(228.7,355.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_19.setTransform(220,355.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_20.setTransform(208.8,353.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGANQAEAIAAAQIAAAIIAAAIIACATQACAMAAAGQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_21.setTransform(329.6,338.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAFAaIgDgVIgCgTIgHAQIgOAkQgBAEgCACQgDAFgFAAQgHAAgGgaQgDgOgDgWIgDgNIgBgOQAAgDADgDQACgCAEAAQAGAAACAHIACANIACANIAEAmQALgaAKgjQADgKAGAAQAHAAADALIAFAgIAHAhIAGgYIALgvQABgFAHAAQAEAAACADQADACAAAEIgBAEQgHAcgLAjQgCAIgGAJQgEAEgEAAQgKAAgGgXg");
	this.shape_22.setTransform(318.6,338.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZAlQgMgMgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgLgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_23.setTransform(307.6,338.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbBHQgKgCgEgEIgCAAQgEAAgCgDQgDgCAAgEIACgcIABgcIgBgdIAAgfQAAgEADgEQAEgEAEAAQABAAAMAGIAQAIQAYAIASASQAVAVgBAYQABAPgIANQgGAOgNAJQgNAJgZAAQgGAAgJgCgAgggXIAAAYIgCAwIADABQAHAFAMAAQATAAAJgGQAIgGAGgJQAEgKAAgLQAAgYgbgRQgIgGgggPg");
	this.shape_24.setTransform(296.8,336.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghBHQgDgCAAgEIAAgjIAAgiIgBgjIgBgSQAAgGACgFQADgFAFAAQAEAAACADQACACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgLgDIAAAqQAAAEgCACQgDADgDAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_25.setTransform(258.3,340.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_26.setTransform(246.9,336.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAGAaIgEgVIgCgTIgHAQIgNAkQgBAEgDACQgCAFgHAAQgGAAgGgaQgDgOgEgWIgCgNIgBgOQAAgDADgDQACgCAEAAQAHAAACAHIABANIABANIAGAmQAKgaAKgjQADgKAGAAQAHAAACALIAGAgIAHAhIAGgYIALgvQACgFAFAAQAEAAADADQADACAAAEIgBAEQgHAcgLAjQgDAIgFAJQgDAEgGAAQgJAAgFgXg");
	this.shape_27.setTransform(332.3,321.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAlQgMgMgBgVQAAgSAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAATgKAOQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIABAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_28.setTransform(321.2,321.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgJBAIABggIABggIAAgfIABggQAAgJAHAAQAJAAAAAJIAAAgIgBAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_29.setTransform(314.2,319.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgFQADgEADAAQADgBADADQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_30.setTransform(307,321.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgoBEQgDgEAAgDIAAgbIABgiIACglQAAgHABgRQABgEABgBQAMgEAQAAQAPAAAOALQAQALAAATQAAAWgRAMQANAGAGAGQAHAIAAAIQAAAKgMAKQgIAHgJADQgSAIgfAAQgEAAgDgDgAgaAjIAAASQAWAAAOgHQAHgCAFgEQAGgGAAgBQAAgEgMgGQgJgEgHgCIgIgBIgEAAIgDAAIgLgBIAAAUgAgXg0IAAAQIgBAiIANABQAMgBAJgIQAIgHABgMQgBgJgIgHQgKgHgJAAIgOAAg");
	this.shape_31.setTransform(296.7,319.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgFQADgEADAAQADgBADADQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_32.setTransform(258.8,321.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJApIgOgkIgPgnIgBgEQAAgEADgDQADgCADAAQAFAAACAFIAXA9QAGgOAJgaIAIgUQADgGAEAAQAEAAADADQADADAAADQAAADgOAjIgTAoQAAAIgHAAQgGAAgDgHg");
	this.shape_33.setTransform(249.5,321.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZAlQgMgMgBgVQAAgSAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAATgKAOQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIABAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_34.setTransform(240.2,321.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgaBCQgDAEgEAAQgDAAgCgCQgDgDAAgDIAAgHIAAgHIAAgcIgBgaIAAgZIAAgYQAAgFADgFQADgFAFAAQAGAAAAAIIAAADIgBAEIAAATIAAAWQAHgEAIgDQAHgDAEAAQAUAAAMAPQAKAMABAUQgBAUgNAOQgNAOgRAAQgOAAgLgFgAgNgDIgNAHIAAAQIAAANIAAAPIAMAFQAFABAIABQALgBAIgIQAIgKAAgNQAAgNgGgIQgIgJgMAAQgFAAgIAEg");
	this.shape_35.setTransform(230.5,319.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_36.setTransform(218.2,319.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOBLQgCgCAAgEIABgCQABgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAPgBIAJAAIABgNQACgUAIgJQAIgLATAAQANAAAAAIQAAAJgLAAQgVAAgDAdIAAAGIATgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIABAQIAAAQQAAARgCAJQAAAHgHAAQgEAAgDgCg");
	this.shape_37.setTransform(343.9,301.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgrA2QgTgQAAgZQAAgdASgZQAVgbAcAAQAeAAANANQAPANAAAdQAAAegRAYQgSAcgdAAQgaAAgQgPgAgegdQgOAUAAAWQAAARAMALQAMAKATAAQAUAAANgVQANgUAAgXQAAgVgJgIQgJgIgWAAQgUAAgPAVg");
	this.shape_38.setTransform(332.4,301.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIABgKIgDgyIgTgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgLQAAgDADgDQADgCADAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgCADgEAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgCgCg");
	this.shape_39.setTransform(315.5,302.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAUAqQgLAGgNAAQgMAAgIgFQgIgGgCgLQgDgXAAgRQAAgMACgQQACgHAHAAQAEAAADACQACACAAAEIgCANIAAAOIAAAYQABAKACAHIAGACIAGABQAKAAANgEIAAgSIAAgQQAAgTACgOQABgIAHAAQAEAAACADQADACAAAEIgCAhIAAASIAAATIABAGIAAAGQAAADgDADQgCACgEAAQgGAAgCgIg");
	this.shape_40.setTransform(306.6,303.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgsA2QgSgQAAgZQAAgdASgZQAUgbAeAAQAcAAAOANQAPANAAAdQAAAegRAYQgSAcgdAAQgaAAgRgPgAgegdQgOAUAAAWQAAARAMALQAMAKATAAQAUAAAOgVQAMgUAAgXQAAgVgJgIQgJgIgVAAQgVAAgPAVg");
	this.shape_41.setTransform(294.8,301.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAlQgMgMgBgVQAAgSAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAATgKAOQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIABAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_42.setTransform(255.7,303.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_43.setTransform(246.9,302.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgCAAgFIAAgIIgBgIIABgYIACgYIgBgJIAAgJQAAgDADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGANQAEAHAAARIAAAIIAAAIIACATQACAMAAAGQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_44.setTransform(238.2,303.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_45.setTransform(228.4,301.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_46.setTransform(324,288.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_47.setTransform(312,288.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_48.setTransform(303.4,288.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgqBHQgDgDABgDIAAg0IABgzIAAgLIAAgNQAAgEACgCQADgDADAAQAEAAACACIATgDIAPgBQAJAAANADQASAEAAAHQABADgDADQgDADgEAAIgCAAQgMgFgRAAIgNABIgSADIAAAmQARgFAJAAQAMAAAPACQAIABAAAHQAAAFgCACQgDACgEAAIgOgBIgMAAQgGAAgUAFIgBA8QAAADgCADQgCADgEAAQgFAAgCgDg");
	this.shape_49.setTransform(293.9,286.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_50.setTransform(256.1,288.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgFBAQgDgCAAgEIAAgEIABgEIgBgNIAAgNIgCgiIgDgjIgIAAQgTAAgLgDQgHgCAAgHQAAgDACgDQADgDAEAAIAOACIAOABIAQAAIAPgBIAUABIAUABQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAIgUgBIgUgBIgGAAQAAAMADAcIABAmIABAJIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgDg");
	this.shape_51.setTransform(246.1,286.4);

	this.instance_1 = new lib.scene5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,156.7,1.141,1.141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'E12E97436671284A89E5E775AF1B4F01',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3b.mp3", id:"_3b"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_4c.mp3", id:"_4c"},
		{src:"sounds/_5b.mp3", id:"_5b"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/bgmPrep.mp3", id:"bgmPrep"},
		{src:"sounds/MenuPreposition.mp3", id:"MenuPreposition"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/above.mp3", id:"above"},
		{src:"sounds/across.mp3", id:"across"},
		{src:"sounds/alongside.mp3", id:"alongside"},
		{src:"sounds/around.mp3", id:"around"},
		{src:"sounds/behind.mp3", id:"behind"},
		{src:"sounds/below.mp3", id:"below"},
		{src:"sounds/beneath.mp3", id:"beneath"},
		{src:"sounds/between.mp3", id:"between"},
		{src:"sounds/down.mp3", id:"down"},
		{src:"sounds/from.mp3", id:"from"},
		{src:"sounds/_in.mp3", id:"_in"},
		{src:"sounds/infront.mp3", id:"infront"},
		{src:"sounds/inside.mp3", id:"inside"},
		{src:"sounds/into.mp3", id:"into"},
		{src:"sounds/near.mp3", id:"near"},
		{src:"sounds/off.mp3", id:"off"},
		{src:"sounds/on.mp3", id:"on"},
		{src:"sounds/out.mp3", id:"out"},
		{src:"sounds/outof.mp3", id:"outof"},
		{src:"sounds/outside.mp3", id:"outside"},
		{src:"sounds/over.mp3", id:"over"},
		{src:"sounds/preposition.mp3", id:"preposition"},
		{src:"sounds/slurp.mp3", id:"slurp"},
		{src:"sounds/to.mp3", id:"to"},
		{src:"sounds/toward.mp3", id:"toward"},
		{src:"sounds/under.mp3", id:"under"},
		{src:"sounds/up.mp3", id:"up"},
		{src:"sounds/upon.mp3", id:"upon"},
		{src:"sounds/within.mp3", id:"within"}
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
an.compositions['E12E97436671284A89E5E775AF1B4F01'] = {
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