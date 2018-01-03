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


(lib.wordDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgDACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIAAgXIAAgIIAAgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSANAAQAOAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape.setTransform(39.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATAuQgIAAgGgWIgDgTIgCgSIgHAPIgMAiQgBADgCACQgDAFgFAAQgHAAgGgZQgDgNgCgVIgCgMIgCgNQAAgDADgCQACgDADAAQAHAAABAHIACAMIACANIAEAkQAJgZAKghQADgJAGAAQAGAAADAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQADAAADACQADACgBAEIAAADQgHAcgKAhQgDAHgFAIQgCAFgFAAIgBgBg");
	this.shape_1.setTransform(29.1,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_2.setTransform(18.6,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZBDQgJgDgFgDIgBAAQgDAAgDgDQgDgCABgDIAAgaIABgbIAAgbIgBgeQABgDADgEQADgDAEgBQACABAMAFIAOAHQAXAIAQAQQAUAUAAAXQgBAOgGANQgGANgMAIQgNAJgXgBIgOgBgAgegWIAAAXIgBAtIACABQAHAFALAAQARAAAJgGQAJgFAEgKQAFgJAAgKQAAgWgagRQgHgFgegOg");
	this.shape_3.setTransform(8.5,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordDown, new cjs.Rectangle(0,0,45.9,27.7), null);


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
	this.shape_5.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAAABtQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAgAhGBSICXiYQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAhGBSIAAAAgAhLBNIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIiXCYIgFgFgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAgABRhGIAAAAg");
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
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhGBSQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbICXiYIiXCYgAhqABQAAApAaAeIAFAFIAFAFIgFgFIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsIAAAAgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAg");
	this.shape_9.setTransform(15,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,30.1);


(lib.Up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfBEQgDgDAAgEIABghIAAggIgCghIgBgRQAAgGACgEQADgFAFAAQADABACACQACACAAADIAAADIgBAEQAHgFAHgCQAGgCAGAAQARAAAIAPQAGAMAAATQAAASgKALQgKANgRAAQgHAAgKgDIAAAnQAAAEgDADQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAGIABAnQAJADAIABQAKgBAGgHQAFgGAAgLQAAgOgEgIQgEgHgHAAQgHAAgGADg");
	this.shape.setTransform(19.2,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAxQgKgMgDgXIgBgpIAAgTIACgLQACgGAFAAQAIAAAAAOIAAAxQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAALIAAALIAAAKQAABfgyAAQgYAAgNgPg");
	this.shape_1.setTransform(8.4,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.9,27.7);


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


(lib.prepwordswithin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgKAAgHALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgDAAQgEAAgCgCQgCgCAAgEIgBgIIAAgHIABgXIABgXIAAgIIgBgIQAAgEADgCQACgCAEAAQAHAAABAKIAAAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape.setTransform(22.6,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHA8QgDgCAAgEIAAgOIAAgQIAAgTIABgSQAAgFADgCQACgCADAAQADAAACACQADACAAAFIgBASIgBATIAAAQIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDAAgEQAAgEADgCQACgEAEAAQADAAADAEQADACAAAEQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_1.setTransform(15.8,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAFAAAPIABAQIACARIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_2.setTransform(8.4,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_3.setTransform(-0.6,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHA8QgDgCABgEIgBgOIAAgQIABgTIABgSQgBgFADgCQACgCAEAAQACAAACACQADACAAAFIgBASIgBATIABAQIAAAOQgBAEgCACQgCADgCgBQgEABgCgDgAgFgtQgDgDAAgEQAAgEADgCQAEgEACAAQAEAAAEAEQACACAAAEQAAAEgCADQgEADgEAAQgCAAgEgDg");
	this.shape_4.setTransform(-6.8,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATBBQgEgCAAgEIgEgQIgHgkIgFgjQgHAbgJASQgJAWgDANIABAEQAAADgEADQgDACgDAAQgMAAAAgKIgCgLIgJgoQgGgUgNgmIAAgEQAAgHAJAAQAFAAADAFIAGASQAFAPAFAVIAIAkQAJgVAIgdIAJgZQAHgSAGAAQAGAAACAGQADAHADAbIAGAgIAHAgIAchHIAEgQQADgJADgGQADgEAFAAQAIAAAAAIIgCAIIgEAJIgEAPIgZA7IgMAdQgDAFgGAAQgDAAgDgCg");
	this.shape_5.setTransform(-17.8,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-13.8,58.1,27.7);


(lib.prepwordsto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape.setTransform(5.6,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFA9QgDgCAAgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgIABQgSAAgKgDQgHgCAAgGQAAgEACgCQADgDADAAIAOABIANABIAQAAIANAAIATABIAUABQADAAACACQADADAAADQAAAEgDADQgCACgDAAIgUgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgCAAgDgCg");
	this.shape_1.setTransform(-3.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-13.8,24.7,27.7);


(lib.prepwordsinto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape.setTransform(12.9,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_1.setTransform(4.5,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCgBgEIAAgIIgBgHIABgXIACgXIAAgIIgBgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_2.setTransform(-3.7,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkA9QgCgCAAgEQAAgEACgCQADgCAEgBIARgBIABgQIAAgNIgBgPQAAgRACgdIgKAAIgMAAQgDAAgCgCQgDgDAAgDQAAgIAIgBIAZAAQAPAAAaADQAHABAAAIQAAAEgDACQgCACgDAAIgOgBIgNgBIgCAsIAAAPIABAOIgBAPIAagBQADAAADADQACACAAAEQAAADgCACQgDADgDAAIgOABIgOAAIgPABIgQABQgEAAgDgCg");
	this.shape_3.setTransform(-13,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-13.8,39.3,27.7);


(lib.prepwordsat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape.setTransform(6.1,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdArIgGgaIgVAEIgWAEIgOAhQgCAEgFAAQgDAAgDgDQgDgCABgEQAAgDAMgbQgBgCgBgDQAAgGAJgCQAJgRAPgXQASggAFABQAGAAADAJIAFAcIAMA4IAGANIABAJQAAADgCADQgDACgDAAQgHAAgGgTgAgKAGIAegGIgHgfg");
	this.shape_1.setTransform(-4.1,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-13.8,24.6,27.7);


(lib.prepwordtoward = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdA5QgMgMAAgSQAAgXANgMQALgNASAAQAJAAAGADIAIAFQAAgjACgMQACgHAGAAQAIAAAAAIQAAAMgEAnIgBAXQAAAcACAOIAAACQAAADgCACQgCADgDAAQgFAAgCgIQgHAFgGACQgHACgFAAQgRAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAHAHALAAQAFAAAFgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgFgCQgGgEgHAAQgNAAgHAHg");
	this.shape.setTransform(24.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgHQAAgJAIAAQAIAAAAAOQAPgPATgBQAHABADAEQADAFAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_1.setTransform(15.6,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgIgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAIAAAIADQALAFAAAHIgBAEIgBAKIgBARQAAALACAGIAEAPIADAEIAAABQAAADgCADQgCACgDAAQgCAAgFgDgAgNgUQgKALABAMQAAAOAEAHQAFAGAKABQAHgBAFgDIAJgGQgDgVAAgKIABgJIABgJIgGgBIgDgBQgLAAgKAKg");
	this.shape_2.setTransform(6.9,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAuQgJAAgFgWIgDgTIgCgSIgHAPIgMAiQgCADgCACQgCAFgGAAQgFAAgHgZQgCgNgEgVIgCgMIgBgNQABgDACgCQACgDADAAQAHAAACAHIABAMIABANIAGAkIATg6QACgJAGAAQAHAAACAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQAEAAACACQACACABAEIgBADQgGAcgLAhQgCAHgGAIQgCAFgFAAIgBgBg");
	this.shape_3.setTransform(-3.2,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_4.setTransform(-13.7,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA9QgDgCAAgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgIABQgSAAgKgDQgHgCAAgGQAAgEACgCQADgDADAAIAOABIANABIAQAAIANAAIAUABIATABQADAAACACQADADAAADQAAAEgDADQgCACgDAAIgTgBIgUgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_5.setTransform(-23,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-13.8,63.2,27.7);


(lib.prepbubscene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ag3FcIgIgKQAggHAXgPQADgCAFAAQAAgFgCgDQgGgPgLgDQgLgCgPALIgIABQgdAGABgWIAAgCIAAgJQAGgFAJgDQAJgCAMABIAJABQALAMAKACQAPAEAPgUQACgDAAgEIAAgJIAAgRQALgQARgLIAIgEIADgBIAFgBQAJACAEADIABAAQAMAIgVAOIgDACQgCABAAADQgEAAgEACQgFADgEAEQAOAZAXAQQADACAEAAQApASADAAIAGAdIgOADQgFAAgDACQgNAJgYgDIAAAJIgJAAQgYACgLgLQAAgDgDgCQgCgDgEAAQAAgEABgBQAIgEAAgBQANhIgoBKIAAAIQgFAAgCADQgSASghAEIgEAAQAAgEgBgDgAj6EgQAAgFgCgCQgDgBgEAAQAAgFgCgBQgIgFgHgHQgGgHgEgKQASAAARgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBIAAgJIAAgIIAAgJQASgZAbgOQAEgCAEAAQAAAEgBADQgLAYgXAKIAAAJIAAAIIAAAJIAJAAQAlACAZgGIAAAEQAAAFgCACQgNANgegDIgIABIgSAIQAAANAEALQAAABAFAAIABAIQAEAMAAAGQAAAEgDAAQgGAAgXgegAlTExQATgHAKgRQACgBAEAAQAFAAACABQACACAAAFQgEAAgBABQgLAWgcADIAAgJgAEuDtQAAgEgCgCQgCgCgEgBIgJgZIAAgGIgHgLQgQAEgNAFIgBgEQgNgDAFgSQANgNAMgFIADgBQgOgGgFgOQgbAEgkgRQAFAAACgBQACgCAAgFQB1gLg9grQgCgBAAgEQAZgbAeAQQADACAEABIAAAIIgBAIIgBAFQgKAhgSARQALAGAIAIQARACgBgUIAEAAIAAgJIAAghIAJAAQAHAcACAfIAAAJQgEAAgEABQgFADgFAEIgIAAQAFAIADAKIAAgBIAJAAQAIAFACALQACALgCAPIgBAIIABAJQAFAcgPAGIgIABIgIABQgPAAAEgTgAE6DVIAGADIAAgFIAAgCQgCACgEACgAhRB/IAAgJQAlgMgVgbQgCgDgFAAIAAgEQgfgEgfAAIAAgJIAAgZQAEgEAGgCQADgCAFAAQBCAXAShAQABgBAEAAQAsgdAAA2IAAAIQgFAAgBACQgMAYgsAIQBEAtA7hVQACgCAEAAQAYgHACAPIABAJQAAABAAAAQAAABgBABQAAAAAAABQAAAAAAAAQgQAEgKAJIAAAIIgIABIgtAQQAAAJADAGQABACAFAAQAPAPASANIABAAQABACAAADQAAAFgCABIgDACQgtAbgdg0IgJAAQgYgBgMAKIAAAIIAAAJQgEAAgBABQgKAYgIAAQgHAAgGgZgADxhNQghgNgNgkQgEAAgCACIgEAGIgIABIAAAIIABAAIgBABIAAAAQgwA2gpg3QAGgKAIgIQAJgIALgGIAAAAQAZgNAngCIAAgEQAdgCADAcIAEAAQAQAWAKAdIABAIQgFAAgDgCgACxioIgIAAIgbAAIAAgJIAAgIQAdgQAIARQACAGABAKgAA9ioIgaAAIAAgJIAAgqQAEAAACgCQADgCAAgFIAjAAIAJAAQAOAMAOgJQADgCAFgBIAJAAIAJAAQAAAFABADQAGAQgOAMQgKAIgSAGQgPAGgWAEIgJAAgAgHkxQgCgCAAgFIAAgJIAAgiIAJAAIAIAAIAJAAQARANgEAdIgEABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQgMADgMAAQgFAAgCgBg");
	this.shape.setTransform(-1.2,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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");
	this.shape_1.setTransform(-8,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AgQCbIgBAAIgDgJQgDAAgBAEIgBAAQgDg0AUgvQAKgbgEgcIgFgGQgCgFAAgEIAAgDQgKgKgFgLQgFgLAGgLQgogqg0gWQAGgGADgHQACgGAAgEIgBgDIAqAMQADAFAFADQADACACgDIACgCIAEABIACAAIAFACQAEABADACIAAABIABACIABABIAAABIAAABIAAABIACACIADAIIAGAMIABADIABAFQAGAGAIgEQAJgGAIgJQALAEABAXIAAApIgBACIgBADQgBAEABADQAHAFADgGIACABQALgBAHgMQAGgDAEgFIACgCQAJgCAFgGIABgBIAAAAIACAFQAEASgHARIgCACIgBABIAAACIAAABIgCADIgBABIAAACQgFANgJAOQAAADADABIAAAAIAAAAIABAAQATACARAEIABAEQAEAIgCAJIgOAHIgIgDIgEABQgHADABAHIABADIgBABIADABQASARARAPIADAJQADAFgBAHIhDAKQgTADgQAMQgLAIgMAAIgHgBgAh0iWIABgDIAAAAIgBADg");
	this.shape_2.setTransform(166.6,-49.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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gEQACgLAAgMIAAgIIACgEIADgEQAGgagBgcIAAgMIAEgEQAEgaAHgZIABgHQADgJAFgFIACgcIAEgEIABgEIAAgEIAAgEIAEgDIABgEIAAgHIAAgIIAAgIIAEgEIABgEIABgHIAAgIIAAgIIADgEIABgEIABgEIAAgEIAEgDIADgFIADgDIAAgEIAAgEIADgEIACgEIAAgEIAAgEIADgEIAEgHIAIgIIABgEIAAgEIAEgEIAAgBIABgDIAAgEIAAgEIAAgEIADgDIACgEIAAgEIAAgEIADgEIACgEIABgDIADgFIABgEIABgEIAAgDIAEgEIABgEIAAgEIAAgEIAAgEIADgEIADgEIADgEIABgEIAAgBIAAgCIAAgEIAAgEIAAgEIADgEIADgEIAAgEIAAgEIACgEIADgEIAAgDIAAgEQAvg7ArhAQAJgOALgNIAAgHIARgMQALgKALgJIABgEIABgDIAAgEQANgSAQgQQA1g1BLgdQAvgTAxgNIAugLQA1gFAvAWIACACQATACARAJQAZAOAXARIANAGQAwAYAeAuQAUAeAVAcIADAIQAFALADANQAEAMAHALIAAAEIAAADIAFAIIAMAXIAFAIQArAMArg5QAkgwBFgTIAAgIQAmgHAigJIAJgBIAAgJQAEgEAFgCQAEgCAFAAIAAgJIBdg7IBNgxQAEgCAEAAQBZguBrgdIAIgBIAAgIQBYgPBSgSIAJgBIAAgJIA/AAIAJAAIAIAAIAAgIIBIAAIAJAAIA1AAIAJAAIAAgJQAtAAAsAFIABAEIAJAAIAIAAQAkAAAjAEIABAEQA8gCAnASQAEABAEAAQASAAARAEQAAAAAAAAQAAABAAAAQAAABAAABQABABAAABQBYAEA4AkIABABIAHABQAEAAAEACIARAIIABAAIABgCQAjAIAWAdIACACIATAEIAFAHIABAEQAdAGAdgHIACgEIADgDIAMgMQAPgOARgMIBJgVQAPgFAIgGIAZABIAAgCQA9gDAqAQIAFACQADACAFAAQAYAKAGgIQABgCAFAAIAAgIQAhg2BBgVQAEgCAFAAIAAgIQAsAAAtAEIAAAEQAOAJALALQACACAAAEIAAAzIAAAIQAMACAKAGQAOgBALANIADACIACACIABgHIAAgZQAGgCAEAAQAJAAAAAKIADAKIAFANQAGALADAKIA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");
	this.shape_3.setTransform(-16.3,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("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");
	this.shape_4.setTransform(-22,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#272722").s().p("AADAZIgDgDQAEADAFABIABABQgEgBgDgBgAgPgXIAFgDIACAAIgBACIAAATIAAADQgLgEAFgRgAAQgGIAAgEIAAgGIABAMIgBgCgAAMgaIAAAAIABABIgBgBg");
	this.shape_5.setTransform(-103.3,70.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#39342F").s().p("AAYAOQgiAAgTgQIAAgIIAAgDIALAAQAIAYAbgTQADgCAEAAQgFAPALAEIAAAFIgGAAg");
	this.shape_6.setTransform(-107.3,68.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24211C").s().p("AAHAFQgNgDgIgHIAdAAIAAADIAAAIIgIgBg");
	this.shape_7.setTransform(-111.8,68);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ACA8A1").s().p("AgGgBIANAAIgHACIgGABg");
	this.shape_8.setTransform(-86.3,70.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F1B").s().p("AgHgdIAgAAIgCADIgCAEIgMAEIgCABIgDACIgCAEIgCAEIgKAFIgCABIgPAAIAAADIAHgBQgZANgZAPIgKABQAdgeAsgdgAAwgMIAMgEIgNAIIABgEgABCgUIAIgJIAHAAIgQAKIABgBg");
	this.shape_9.setTransform(-84.2,70.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#695E56").s().p("AgIgDQAIADAJABQgFACgEABIAAAAQgEAAgEgHg");
	this.shape_10.setTransform(39.6,68.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbubscene3, new cjs.Rectangle(-213.1,-76.1,393.7,152.7), null);


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
	this.shape_17.graphics.f("#000000").s().p("AgOAfQgHgFAAgJQAAgOAKgEQgIgFAAgJQAAgIAGgFQAGgGAHAAQATAAAAASQAAAGgCADIgHAEQAHADACAEQADAEAAAIQAAAJgGAFQgHAFgJAAQgJAAgFgEgAgJAGQgEAEABAHQAAAFAFADQADACAEAAQAHAAAEgEQACgDAAgGQAAgFgEgEQgDgCgGgCIgJAFgAgIgXQgCADAAAFQAAAHAKACIAHgDQADgCAAgFQAAgGgDgCQgCgCgFAAQgFAAgDADg");
	this.shape_17.setTransform(-36.3,1.6);

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


(lib.antscene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAGgRIAAAAQgDgBgDABQgIgBgGAGQgHAFAAAHQAAAIAHAFQAGAFAIABQAJgBAGgFQAHgFAAgIQAAgGgGgFIAAAAQAAgBgBAAQAAgBAAAAAANgOQgCgBgCgB");
	this.shape.setTransform(5.4,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABBg8QAAAAABAAQAAAAABAAQAAgBAAAAQgBgBgBAAQAAgBAAAAQgBABAAABQAAAAABABgAgyAbQgCgBgCgBQgEgBgCgCQgGgEAAgFQAAgHAMgFQANgEARAAQARAAALAEQANAFAAAHQAAAHgKAEIgHgDIAEAEAAmgqQAAAAAAABAApgVIAAABIABAGIABAEAAAAVIgMgHQAGAHACAIQAEgCAEgCIAMAPIAAAYAAHAYQgBABgCAAAgYAfQgDAAgDgBQgCAAgDAAQgIgBgHgCIgLAMIAAAUAgSAeIAAAh");
	this.shape_1.setTransform(1.7,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmAvIgGAAIgFAAQgIgBgHgDIgEgBIgGgEQgGgDAAgFQAAgIAMgFQANgFARAAQARAAAMAFQAMAFAAAIQAAAGgJAFIgHgEIAEAFIgJADQgCgHgGgIIANAHIgNgHQAGAIACAHIgOACIgFAAIgBAAgAgNAlIAHAEIgDABgAAHAgQgGgFAAgIQAAgHAGgGQAHgFAJAAIAFAAIABAAIgBgBIAAgCIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIgBAAIgBgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAAAIgBgBIAAgBIABgGIABgCIAAgBIgBgBIABgBIAAAAIABgCIAAgBIABgBIAAgCIAAAAIADgCIABgBIAIgGIALgCIABgBIABAAIgBABIAAAAIAAAAIABACIgBgCIAAAAIAAAAIABgBIAAAAIACACIAAABIgBAAIgBAAIgBAAQgHAAgFADIgCABIgDACIgDABIAAABIgCADIAAAAIAAABIgBABIAAAAIgBALQgBAEACAEIABABIAAAAIAAABIAAAAIABABIAAABIAAABIACACIAAACIAAACIABACIADACIAAAAIAAgCIABgBIAAAAIAAgBIAAgBIAAgCIAAgBIABAAIAAgBIAAAAIAAgCIAAAAIABgBIABAAIAAgCIAAgBIABgBIABAAIAAgBIAAgBIAAAAIAAgBIACgBIABgBIAEgEQAGgDAHgCIAAAAIABAAIABgBIAEgBQAGgCAHABIABABIAAAAIAAABIgKABIgIABIAAABIgBAAQgGACgFACIgEADIAAABIgBAAIgCACIAAAAIAAABIAAABIgBAAIgBABIAAABIAAABIgBABIgBACIAAABIAAAAIAAACIAAAAIgBABIAAACIAAAAIAAABIAAABIgBABIAAAAIAAABIAAABIgBABIABAAIABABIAAAAQAFAFAAAHQAAAIgGAFQgGAGgJAAQgJAAgHgGgAAdAFIgBgEg");
	this.shape_2.setTransform(3.1,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.antscene3, new cjs.Rectangle(-6,-9,17.3,14.8), null);


(lib.wordUP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Up("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(12.9,13.9,1,1,0,0,0,12.9,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordUP, new cjs.Rectangle(0,0,25.9,27.7), null);


(lib.grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.treestump();
	this.instance.parent = this;
	this.instance.setTransform(-4.8,-21.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ANPAAI6dAA");
	this.shape.setTransform(-0.2,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("AtMGtQgRhKAOhaQApkRC/h0IgDAKIAAAAQACADgBADIAAABIAGAFQAFABAFgEQALgKAPgFIAAAAQgCAKAAAIIAAABIAIAJIABAAQAFABAFADQAVAAALgLIAAgBQAOAFATABIAAAAQASgLAMgRIABgBQACgCAEAAQAJADADAHIAAABQAOADANgCIAMgDIAOgCQAGgEAEgFIAAgBIggAHQgIABgKgCQgHgCgEgGQAEgBADADIAAABQAJABACgCIABgBQAFAEAJgBIABAAIAYgJIAXgLQAQgIAIgPIABgCIABgBIAAgBIADgLIABgEIAEABIABAAQADgDAAgFIABAAIAJgKQAEgFACgFIACgCQADgBABgDIAAgBQgCgDgBgFQABgJgCgIIAAAAIACgJQABgOgBgLQAAgIAEgDIABgZIAAgBIgBgRIAAAAIgDgDIgBgDQAAgEgDAAIgIgjIgCAAIgBgQIAAgBIADgCIAFgBIAcgGQAWgEAWAAQARgBAQACIgGAGIANABQgBADABAEIAAABQADAGAGABQAeACAegCIACAAIA9gCIAGAAQAJgCAQAAIAOgBIAYAAQAyAAApgEIAAABQABAAAAgBQABAAAAABQABAAAAAAQAAAAAAABIABAAIApgEIABAAIAQgFIAAgBQACgCADgBIAAgBQACgDAEAAIAAgBQABgEACgCIgDgBIAPgDIAhgFIAMgBIABAAIAAABIACADIAGACIAAAHIACACQgDAPAAANIAAAAQgDADABADIACACIAAAMIAAAIIAAADIAAANIAAAIIgBAEIgBAaQgTAIAAAZQABAXAGAVQADAMAFALQAaA8AjA3QADAWANAVQADAEAEADQAtAhA3AMQArAJArAGIgNATQgWAgAVAeQADAEAEACQBDAhBIAZQAaAIAUARQAdAXAggLQAeAsAaAuIATAeQATAdAIAhQADAPAKAGIgFAWgAAbgyQAFAAACgDIgQgBIAJAEgAKtCKQhTgehMgkIABgBIAIgNQAnAXArATQAQAIARgGQASgHgEgRQgCgLgDgEQAGACAEAEQALALAIAPQALAWAJAYIgBACQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgUgJgAFuh+IAGgBQAIACAKABIAdAEIAZADIAFABIgKABQgLACgKAAQgbAAgZgNgAEriqQgHgNgGgOIAOAUIAMAQIABAKIAHAHIgFABIgQgbg");
	this.shape_1.setTransform(-0.4,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYBBIAQABQgCACgFABIgJgEgAoyAbIgBAAIgIgJIAAgBQAAgIACgJIAAgBQgPAFgLAJQgFAEgFgBIgGgEIAAgBQABgDgCgDIAAgBIADgIIANgIIgBAEIAAAAQgDAGgBAGIAAAAQAIAAAHgEIABAAIACgDIAAgBIAWgMIAFgBQADABAAADIAAABQgEAHgBAJIAAABQgDAEABAFIAAABQAEAFAHACIAAAAIAIAAIABAAIATgOIAFgCQADABACADIAAABQAIAEANAAIABAAIAbgYIACgBIADgCQAFAAADgCIAAAAQAGABAIgBIABAAQACADAIgBIAHAAIAZgHIABAAQAEgEAHgBIABAAQARgJAPgKIAAAAIAGgJIAAgBQADgBABgEIAAAAIABgJIACABQAFAAAEgCIgBAEIgDAKIAAABIgBABIgBADQgIAPgQAIIgXALIgYAJIgBAAQgJAAgFgDIgBAAQgCACgJgBIAAAAQgDgDgEAAQAEAGAHACQAKACAIgBIAggGIAAAAQgEAGgGACIgOACIgMADQgNADgOgEIAAgBQgDgGgJgCQgEAAgCACIgBAAQgMAQgSALIAAABQgTgBgOgGIAAABQgLALgVAAQgFgCgFgBgAHCACIgZgDIgdgDQgKgBgIgCIAmgEIAVABQAPAAAKADQAHACAIAAIAbAAIAsgCQgmAKgpgBIgOAAIgFAAgAJbgeIAKgBIgLAEIABgDg");
	this.shape_2.setTransform(-1,-9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6FFFF").s().p("AguAKQgKgDgPAAIgVgBIC5gSIAAADIgOAGQgUAIgVAGIgqABIgcABQgHAAgHgDg");
	this.shape_3.setTransform(49.9,-11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.grass, new cjs.Rectangle(-86.4,-46.2,172.4,93.2), null);


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
		
		 window.open ("prep_Scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("prep_Scene2.html","_self");
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


(lib.scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.pickupbub.start();*/
		/* _root.v7.start();*/
	}
	this.frame_8 = function() {
		/* _root.v1.start();*/
	}
	this.frame_13 = function() {
		/* _root.v8.start();*/
	}
	this.frame_14 = function() {
		/* _root.throwbub.start();*/
	}
	this.frame_18 = function() {
		/* _root.v10.start();*/
	}
	this.frame_19 = function() {
		/* _root.suckbub.start();*/
	}
	this.frame_22 = function() {
		/* _root.v2.start();*/
	}
	this.frame_28 = function() {
		/* _root.v9.start();*/
	}
	this.frame_34 = function() {
		/* _root.v11.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(5).call(this.frame_13).wait(1).call(this.frame_14).wait(4).call(this.frame_18).wait(1).call(this.frame_19).wait(3).call(this.frame_22).wait(6).call(this.frame_28).wait(6).call(this.frame_34).wait(31));

	// Layer 21
	this.instance = new lib.prepwordswithin("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2,100.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({alpha:1},5).wait(38));

	// Layer 20
	this.instance_1 = new lib.prepwordsinto("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57.9,58.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({alpha:1},5).wait(27).to({startPosition:0},0).to({alpha:0},5).wait(11));

	// Layer 19
	this.instance_2 = new lib.prepwordtoward("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-107.1,-64.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({alpha:1},4).wait(6).to({startPosition:0},0).to({alpha:0},4).wait(41));

	// Layer 18
	this.instance_3 = new lib.prepwordsat("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(32.4,104.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({alpha:1},5).wait(4).to({startPosition:0},0).to({alpha:0},5).wait(42));

	// word Down
	this.instance_4 = new lib.wordDown();
	this.instance_4.parent = this;
	this.instance_4.setTransform(74.5,16.3,1,1,0,0,0,22.9,13.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({alpha:1},2).wait(3).to({alpha:0},0).wait(42));

	// word UP
	this.instance_5 = new lib.wordUP();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-99,-109.6,1,1,0,0,0,12.9,13.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({alpha:1},3).wait(8).to({alpha:0},3).to({_off:true},1).wait(44));

	// Layer 17
	this.instance_6 = new lib.prepwordsto("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(153.9,113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({startPosition:0},0).to({alpha:0},5).wait(51));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#660000","#996600","#FFFFFF","#FFCC00","#E2B41A","#FFFFFF","#FFFFFF","#FFD325"],[0.843,0.902,0.914,0.922,0.922,1,1,1],-822.3,-91.9,816.1,-91.9).s().p("AAMCPQgbgFgYgJIgCgBQgJgBgDAFIgBAAIgEACQgMgEgPgBQgHgBgCAEQgGACgMgBQgfgCgaAGQALgLAQgIIAAAAQAJgFABgMIAAgBQgMgCgIAEIAAAAQgVABgWADIgBAAIgGADIgBABIgOAAIgBAAIglANIAAABIgEAAIgBAAQgPAGgRAEIgNADQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAIgQACIAAAAQgPAFgSgBIgHgBIAAAAIAHgEQAhgTAdgWIAAgBIAEgBIAAAAQAGgHAIgEIABAAQAMgIADgSIAAgBQgEgIgDgJIAAgBIAJgLIARgUIAAAAQgFgQACgUIAAAAQADgPgCgQIAAgBQAFgRgCgWIAAgEQgBgSABgRIABAAQARAAAOAFIADAAQASAKAcABQAaABAVAIQAYAEAcACQAdACAbgCIB3gLQAZgCAWgGQAagHAegDQAlgEASgYIADAVIAAADIgCANIgBAFIAAAAQABAJgBAHQACADAAAHIABAIIAAAAQgCACABAFIAAAAQgFAMADAPIAAABIABABQACAGAAAFIABAAQADAEACAJIAAAAQAJALAEANIAAABIAHAEIAAAAIAFAMQAJAJAGALIAPAWIAAAAQABAAAAABQAAAAABABQAAAAABAAQABAAAAAAIAAABIACAEIAAAAIADADIABAAIAOAXIABAAQAIAFgJACIg3gKIgggGQgPgDgMAGIgCABIgCAAIgKgWIgDgHIgBAAIAAgGIAAgBQgFgKgBgPIgCgcQAAgEgCgDIABgLIgEgEIAAAAQAFgCgGgEIgBgBQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQABAAAAAAQAAABABAAQAAABgBABQAAAAgBABQAAABAAAAQAAAAAAAAQAAAAAAAAQABABAAAAIgBABIgBAAIACAZIABAaQAAAPAGAQQAEAJABAKIABAAIAGAIIAAAAIAFARIAAABIASAZIgJAFIgFgBQgOgCgQgBIgRgJQgIgDgMgBIAAAAQgDgEgHABIgBgBIgFgEQgDABgCgCQgNgIgRgBQgFgDgIAAIgGgBIgCAAIACgSQAJgEAFgJIAAAAQgBgEgHACIgGAHIAAABQgIgEgFgGIAAgBQgDgOABgPIgBAAQgEgBgFADIAAABQgCAQABAPIgBAAQgDAFABAEIABAAIgIAEIAAgBIgIgWIAAAAQADgGgDgKIgBgFQgBgHgHAAIgBgBIAAgEQgBgEABgGIAAgBQAFgGgCgGIgBAAQgGgBgDADIAAAAQgFALAAAPIAAABIAAAAQgEASADAWIABAAIAAABIAAAHIACAEIAAAAQgCAKAEAFQgBAHADAHIADANIADACIAIARQAAAIAEAHIABACQAGAFgHACQgVgOgcgFg");
	this.shape.setTransform(-5.9,68.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#660000","#996600","#FFFFFF","#FFCC00","#E2B41A","#FFFFFF","#FFFFFF","#FFD325"],[0,0.902,0.914,0.922,0.922,1,1,1],-823.4,-87.3,815,-87.3).s().p("AAqCYIgHg3QgBgKACgIIABACQACAKABANIAAAAIACAFIAAAAIABAJIAAABQAEAIAIAEIgMAVgAgnhBQgOgCgRgBIgfgCQgPgCgNgEQgTgFgYgBQgYgBgRgJQgIgEgKgBIgVgEIgCgDIgCgDIAAgBIgFgOIAAgBIAPgHQAWgEAWAAIgHACIAAAAIgKAHIAAABIAAAAIAAAGIAAABIABADIAJADIAOACIAAAAIAQAEQATAFAZgBIATgBIAggBIATAAQAbAAAegDQAbgCAigBIA9gBIAPAAQAdAAAXgFQAcgHALgXIgBgBIAAAAIAhgFIAEABQACAFAEADIAAABQgBAGgDADIgBAAQAAAEgBADIAAAAIgMAMQgFAHgIAEQgGAAgEAEIgBAAIgHAAIgBAAQgVAFgXACIgBAAQgYAKggADIgbADQg9AHg6ADIgEAAg");
	this.shape_1.setTransform(-4.7,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC33").s().p("AgCABIgDgEQAFAEAGACIgBABIgHgDg");
	this.shape_2.setTransform(32.2,78.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6FFFF").s().p("AkFApIAAgCQgBgEgDAAIgIgjQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgDgHAEgIIACgBIAFgCQABAPAEALIACAGIABACIAAABIACAdgAEWgoIgBgBIgDgCIAEACIAAADIAAgCg");
	this.shape_3.setTransform(-5.3,53.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABCC7IglgSQgNgGgQgDIghgGIgEAHIAAAAQgIABgDgDIgBgBIgOgBIgBAAQgEgDgEAAIgBAAIgBAAQgIgFgKgCIAAAAQgBAJAIADIAAgBIACABIgCACIgKABIgBAAIgFgDIgBAAQgBgDgCgCIAAAAQgggFgeAKQgMAFgHgHQACgOAMgIIAGgDIARgKIgeACIAAAAQgGADgJAAIgBAAQgKAGgRgCIgBAAQgEAEgHABIAAABQgPACgOAIIAAABQgNAAgJAFIAAAAIgIAAIgBAAQgPAIgQABIgBAAIgdAFQgMABgJgCQgFgBgEgDQgBgDABgCIABAAIAIgDIADgBIAAAAIAQgKIATgMIAMgIIABAAQAKgJAMgHIAAAAIAJgKIAAAAIAKgDIAAAAQABgGAGgEIAFgHIgBgJIAAgBQgGgEAAgJIAAAAQADgEABgEIAAAAIAJgLQAEgEADgFIABgCQADgCACgDIAAAAQgDgDgBgGQABgJgCgGIAAgBQAEgSgBgQQgBgHAEgDIACgaIAAgBIgCgRIAAAAIgCgdIAAAAIAAgBIgBgCIgCgGQgEgNgBgOIAcgGIgPAIIAAABIAFAOIABABIABACIACAEIAVAEQAKABAIAEQARAJAYABQAYABATAFQANAEAPABIAfACQARABAOADIAEAAQA6gEA9gGIAbgDQAggDAYgKIABAAQAXgCAVgFIABAAIAHAAIABgBQAEgDAGAAQAIgEAFgHIAMgMIAAgBQABgCAAgEIABAAQADgDABgHIAAAAQgEgEgCgEIgEgBIAMgCIAAABIABAAIACADIABABIADACIABABIAAACIAAAEIACABQgCAPgBANIAAABQgCACABADIABADIAAALIAAAJIAAAQIAAALIgCAwIABAAQAEALAHAJIAAAAQAFAOAHALIABgLIABACQAAABAAAAQAAAAABABQAAAAABAAQAAABABAAIAAACIAEAGIAAAEQAPAcATAZIALAQQADAEADABIAAAAIADAIQADAHAFAEIADAFIAHACIgEAFIgIAEIgYgCIAAAAQgEgBgCgCIAAAAIgZgDIAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgbgDQgIgBgGgDIgBAAIgPgBIAAABQgEAEgGABIAAABQABAFADADIABAAIAAAFIABAAIAKAKIABAAQABAEgCAFIAAABIgIACIgDgFIgRgYIgBgBIgFgRIABAAIgHgIIAAAAQgCgKgDgJQgGgQgBgPIgBgbIgBgYIAAAAIABgBQAAgBAAAAQAAAAgBAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAgBgBQAAAAgBAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABIABABQAGAEgGACIABAAIAEAEIgCAKQACADABAEIACAdQABAPAFAKIAAABIAAAGIAAAAIAEAHIAKAWIABAAIADgBQALgGAQADIAfAGIA3AKQAKgCgIgFIgBAAIgPgXIAAAAIgDgDIgBAAIgBgEIAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgBAAIgOgWQgHgLgIgJIgFgMIAAAAIgHgFIgBgBQgDgMgJgLIgBAAQgBgJgEgEIAAAAQgBgFgCgGIgBgBIAAgBQgCgPAEgMIAAAAQgBgFADgCIgBAAIAAgIQAAgHgDgDQACgHgCgJIAAAAIACgFIABgNIAAgDIgCgVQgTAYglAEQgdADgbAHQgWAGgZACIh2ALQgbACgegCQgbgCgZgEQgVgIgagBQgcgBgSgKIgCgBQgPgEgRAAIAAAAQgCAQABATIAAAEQACAWgEARIAAABQACAQgDAPIgBAAQgBATAFARIgBAAIgRAUIgIALIAAABQACAJAEAIIAAABQgCASgNAIIAAAAQgJAEgFAHIgBAAIgEABIAAABQgdAWghATIgHAEIAAAAIAHABQASABAPgFIABAAIAQgCQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIANgDQARgEAPgGIAAAAIAEAAIAAgBIAmgNIABAAIAOAAIAAgBIAHgDIAAAAQAWgDAVgBIABAAQAHgEANACIAAABQgCAMgIAFIgBAAQgPAIgMALQAbgGAfACQALABAGgCQACgEAHABQAQABALAEIADACIAAAAQAEABgCgFIAAAAQAEgFAJABIACABQAYAJAbAFQAcAFAVAOQAGgCgGgFIgBgCQgDgHgBgIIgIgRIgCgCIgEgNQgCgHAAgHQgDgFACgKIAAAAIgCgEIAAgHIAAgBIgBAAQgDgWADgSIABAAIAAgBQAAgPAEgMIABAAQADgDAGABIAAAAQACAHgEAGIAAABQgBAGABAEIgBABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIAAABQAIAAAAAHIACAFQADAKgEAGIABAAIAIAWIAAABIAHgEIAAAAQgCgEAEgFIAAAAQAAgPABgQIAAgBQAFgDAFABIAAAAQgBAPADAOIAAABQAGAGAHAEIABgBIAGgHQAGgCABAEIAAAAQgEAJgJAEIgBAAQgGgCgFAAIgBAAIgIgJQgCAJgGAFIAAABQgDAFgEABIgBAAQgIgEgEgJIAAgBIgBgJIAAAAIgCgEIAAAAQgBgNgCgLIgBgBQgCAIABAKIAHA3IABAAIAEAKIAAAAQADAEADAFQAAAGACAFIAEALQAEAMAFAKQADAEgCADIgPgBgADwCYIgBAAIgHgDIAAAAQgLACgIgDQgDgBgCACIgXgMIAAAAQgGABgCgDIAAgBQgHACgEgEIAAgBQgGABgGgFIgBgBIgHgBIgBAAQgEgDgJgDQgLgDgOgCIgMgBQgHgBgDgFQAGgFAKACIACABIAHABQAHAAAGADQARABAMAIQACACAEgBIAFAEIAAABQAHgBADAEIABAAQAMABAIADIARAJQAQABAOACIAFABQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQgBAEgFAAIgBAAgAiniMIgQgDIAAAAIgOgDIgJgDIgBgCIAAgBIAAgGIAAgBIAAAAIAKgHIAAgBIAIgCQAQAAARABIgGAGIANABQgCADABAFIAAAAQADAHAHAAQAdADAegCIADgBIA8gBIAHgBQAJgCAOAAIAOAAIAagBQAxABAqgEIAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIABAAIApgDIAAgBIARgFIAAAAQACgDADAAIAAgBQABgDAEgBIAAgBQABgDADgDIgDgBIAPgDIAAABIABABQgLAXgcAGQgXAFgdABIgPAAIg9ABQgiABgcACQgdACgbABIgTAAIggABIgTABIgEAAQgXAAgRgFg");
	this.shape_4.setTransform(-5.9,67.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(65));

	// Layer 4
	this.instance_7 = new lib.grass();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.6,89.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65));

	// Layer 2
	this.instance_8 = new lib.prepbubscene3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(152,62,0.458,0.458,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:20.1,x:108.9,y:52.3},6).to({rotation:24.8,x:87.4,y:47.5},3).to({scaleX:0.46,scaleY:0.46,rotation:29.8,x:88.2,y:54.1},1).to({scaleX:0.46,scaleY:0.46,rotation:40.2,x:90,y:67.3},2).wait(2).to({rotation:25.2,x:95,y:50.1},0).to({rotation:-72.2,x:4.8,y:-44.3},5).to({scaleY:0.13,rotation:-72.3,y:-14.5},2).to({scaleY:0.2,rotation:-72.2,x:-10.2,y:135.7},3).wait(41));

	// Layer 15
	this.instance_9 = new lib.antscene3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(77.2,91.3,0.94,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({guide:{path:[77.1,91.3,77.1,91.3,77.1,91.3,76.9,91.3,76.7,91.3,71.1,87.6,64.2,87.2,53.7,86.5,43.7,84,33.9,81.6,28.6,72.5,28.9,67.9,28.5,63.5,27.8,54.8,26.8,46.3,25.1,44.7,23,43.8,22.6,43.6,22.1,43.5]}},6).wait(19).to({skewX:-30,skewY:150,x:77.2,y:91.3},0).to({skewX:0,skewY:180,guide:{path:[77.2,91.3,77.2,91.3,77.2,91.3,77,91.2,76.8,91.2,71.1,87.5,64.3,87.1,53.8,86.5,43.8,84,33.8,81.5,28.5,72.5,28.9,67.9,28.5,63.4,27.7,54.8,26.8,46.3,25.2,44.7,23.1,43.7,22.4,43.4,21.6,43.3,21.4,43.1,21.1,42.8,18,39.9,13.1,41.6,-2.1,47.2,-11.4,61,-11.3,64.8,-13.3,68.2,-17.7,75.6,-20.6,83.5,-21.1,83.8,-21.6,84.2,-22,84.6,-22.4,85,-22.2,87.3,-22.7,89.6,-24,95.2,-25.1,100.9]}},4).wait(36));

	// Layer 13
	this.instance_10 = new lib.antscene3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(106.9,96.9,0.94,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({guide:{path:[106.8,96.9,91.9,96.2,77.1,95,74.9,94.8,72.8,94.7,72.1,94.6,71.5,94,64.3,92.6,57,91.5]}},6).wait(18).to({x:57.1,y:91.5},0).to({skewX:45,skewY:225,guide:{path:[57.1,91.5,64.4,92.5,71.6,94,72.2,94.6,72.9,94.6,75.1,94.8,77.2,95,113.3,97.9,150,97.7,166.3,97.7,180.5,91,196.2,91.2,211.9,92.6,224.8,93.8,237,92.2,237.6,91.6,238.1,90.9,238.4,90.6,238.5,90.2,238.2,89.5,230.1,88.5,221.9,87.6,209.6,87.1,197.3,86.6,186.8,87.7,176.3,88.8,149.8,91.5,123.4,94.2,77.2,91.2]}},2).to({guide:{path:[77.1,91.3,77.1,91.3,77.1,91.3,76.9,91.3,76.7,91.3,71.1,87.6,64.2,87.2,53.7,86.5,43.7,84,33.9,81.6,28.6,72.5,28.9,67.9,28.5,63.5,27.8,54.8,26.8,46.3,25.1,44.7,23,43.8,22.3,43.5,21.6,43.4,21.3,43.1,21.1,42.9,20,41.8,18.6,41.4]}},3).wait(1).to({skewX:-15,skewY:165,x:77.2,y:91.3},0).to({guide:{path:[77.2,91.3,77.2,91.3,77.2,91.3,77,91.2,76.8,91.2,71.1,87.5,64.3,87.1,53.8,86.5,43.8,84,33.8,81.5,28.5,72.5,28.9,67.9,28.5,63.4,27.7,54.8,26.8,46.3,25.2,44.7,23.1,43.7,22.4,43.4,21.6,43.3,21.4,43.1,21.1,42.8,18,39.9,13.1,41.6,-2.1,47.2,-11.4,61,-11.3,64.8,-13.3,68.2,-17.7,75.6,-20.6,83.5,-21.1,83.8,-21.6,84.2,-22,84.6,-22.4,85,-22.2,87.3,-22.7,89.6,-24,95.2,-25.1,100.9]}},4).wait(31));

	// Layer 5
	this.instance_11 = new lib.antscene3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(188.4,86.8,0.94,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({guide:{path:[188.4,86.7,187.1,86.8,185.8,87,175.2,88.1,169,88.9,138.8,92.4,108.3,92.3]}},8).wait(16).to({guide:{path:[108.2,92.3,92.5,92.3,76.7,91.3,71.1,87.6,64.2,87.2,53.8,86.5,43.8,84,40.3,83.1,37.3,81.4]}},10).wait(1).to({skewX:60,skewY:240,x:37.3,y:81.5},0).to({guide:{path:[37.3,81.5,32,78.4,28.5,72.5,28.9,67.9,28.5,63.5,27.7,54.8,26.8,46.3,25.1,44.6,23,43.7,22.3,43.4,21.5,43.3]}},5).wait(1).to({skewX:-15,skewY:165},0).to({guide:{path:[21.5,43.3,21.5,43.3,21.5,43.3,21.2,43.1,21,42.8,17.8,39.9,13,41.6,-2.2,47.2,-11.4,61,-11.3,64.8,-13.4,68.2,-17.8,75.6,-20.7,83.5,-21.2,83.8,-21.6,84.2,-22,84.6,-22.4,85,-22.2,87.3,-22.8,89.6,-25.4,101.3,-27,113.3,-25.6,112.1,-23.4,111.4,-22.6,111.2,-21.8,111,-20.3,99.1,-17.4,87.5]}},7).wait(17));

	// Layer 7
	this.instance_12 = new lib.antscene3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(203.8,86.5,0.94,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({guide:{path:[203.8,86.5,194.1,86.1,185.8,87,175.2,88.1,168.9,88.8,149.4,91.1,129.6,91.9]}},8).wait(17).to({x:129.7,y:91.9},0).to({guide:{path:[129.6,91.9,103.3,92.9,76.7,91.3,71.1,87.6,64.3,87.2,53.8,86.5,43.8,84,40.3,83.1,37.3,81.4]}},12).wait(1).to({skewX:60,skewY:240,x:37.3,y:81.5},0).to({guide:{path:[37.3,81.5,32,78.4,28.5,72.5,28.9,67.9,28.5,63.5,27.7,54.8,26.8,46.3,25.1,44.6,23,43.7,22.3,43.4,21.5,43.3]}},5).wait(1).to({skewX:-15,skewY:165},0).to({guide:{path:[21.5,43.3,21.5,43.3,21.5,43.3,21.2,43.1,21,42.8,17.8,39.9,13,41.6,-2.2,47.2,-11.4,61,-11.3,64.8,-13.4,68.2,-17.8,75.6,-20.7,83.5,-21.2,83.8,-21.6,84.2,-22,84.6,-22.4,85,-22.2,87.3,-22.8,89.6,-25.4,101.3,-27,113.3,-25.6,112.1,-23.4,111.4,-22.6,111.2,-21.8,111,-20.3,99.1,-17.4,87.5]}},6).wait(15));

	// Layer 6
	this.instance_13 = new lib.antscene3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(217.2,87.4,0.94,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({guide:{path:[217.1,87.3,213.4,87,209.1,86.7,196.3,85.8,185.7,86.9,175.2,88.1,168.9,88.8,157.7,90.1,146.3,90.9]}},8).wait(17).to({x:146.4,y:91},0).to({guide:{path:[146.4,91,111.8,93.5,76.8,91.3,71.2,87.6,64.4,87.2,53.9,86.5,43.9,84,40.3,83.1,37.4,81.4]}},14).wait(1).to({skewX:60,skewY:240,x:37.3,y:81.5},0).to({guide:{path:[37.3,81.5,32,78.4,28.5,72.5,28.9,67.9,28.5,63.5,27.7,54.8,26.8,46.3,25.1,44.6,23,43.7,22.3,43.4,21.5,43.3]}},6).wait(1).to({skewX:-15,skewY:165},0).to({guide:{path:[21.5,43.3,21.5,43.3,21.5,43.3,21.2,43.1,21,42.8,17.8,39.9,13,41.6,-2.2,47.2,-11.4,61,-11.3,64.8,-13.4,68.2,-17.8,75.6,-20.7,83.5,-21.2,83.8,-21.6,84.2,-22,84.6,-22.4,85,-22.2,87.3,-22.8,89.6,-25.4,101.3,-27,113.3,-25.6,112.1,-23.4,111.4,-22.6,111.2,-21.8,111,-20.3,99.1,-17.4,87.5,-16.8,87.1,-16.2,86.6,-16.2,86.5,-16.1,86.5]}},5).wait(13));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("EAlAAN4IAAgLMAAAgitMhJ/AAAMAAAAjJIAAG4IXpAAANHVBIX5AAIAAm9");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#660000","#996600","#FFFFFF","#FFCC00","#E2B41A","#FFFFFF","#FFFFFF","#FFD325"],[0,0.902,0.914,0.922,0.922,1,1,1],-823.7,-71.8,814.7,-71.8).s().p("AjaAKIAEgBIAbgHQAqgHAvgDIA/gEIA8gFIAxgEIAOgBIADAAQAUgBASABQArABAjAMIAHADIAQAEIATAFIghAFQgCgDgEgCIAAAAIgGABIgBgBQgLgDgIAAQgNgCgNAAQgSAAgMgEIgBAAQgUABgQgDQgHABgJgBQgHAAgGAEIgBAAIgzADIgBAAIgDADQgEgDgHABIgcACIgJAAIgBAAQgBACgDABIgxAFIgtAEQgRACgMgDQgIgCgGACIgUAGQgXABgVAEIAegOg");
	this.shape_6.setTransform(-3.7,48.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6FFFF").s().p("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");
	this.shape_7.setTransform(0,-22);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AiuAUQgHgBgDgGIAAgBQAAgEABgDQACgDAFgBIAMgBIAagBQAXgDAZgCIAsgEIA8gHIAzgDQAMgBAMABQAMABAKgBQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAAQASADARAAQARAAAPAEIADABQgDACgBAEIAAABQgEAAgBADIAAAAQgDABgCACIAAABIgRAFIAAAAIgpAEIgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAgBQgqAEgxAAIgZAAIgOABQgPAAgJACIgHAAIg8ACIgDAAIgaABIghgBg");
	this.shape_8.setTransform(-1.8,50.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC33").s().p("ANHGdIAFgXQgMADgLgFQgpgUAQgpQgMgGgLgMIgCgCQgKgMAFgQQgJAAgIgGQgJgHgJgGQg7ARg2AdQgGAEgIABQgvAHgCgtQAAgaAZgJIAkgMQgFgLABgNQAAgLAHgJQgBgHABgIIADgQIAAgBQggAHgegJQgJgDgFgIQgFgIAAgKQgoABglgRQgFgDgEgGQgVgFgHgUQgDgHABgHQgmgRgngTIhRgoQgKgGgIgKQgWgegEgkQgDgcAbgJIAKgDQARADAPAGIACgEQAHgPAPgDIgCgCIAGABIADAAIAIADIAPAEQATgBASABIAaACIAFABIAgAHIATADIAAAAQALABALAAIAgAAQAWACAWADIAGgCQASgDAIgOQAFgIADgIIADABIATAJIADACIAEAEIAPgOQAIgIAHgJIAAAAIADALIABAAIAEAGIAAAAQAXADALgRIAAAAIAYgTIAKgJIgBAKIAAAFIgBABIgPAaIgBAAQgGAEAAAJIABAAQAEABACgCQAVgRAXgNIAEgCIACgBIABAAIAAACIAAALIABAAIABAEIADAHQAKAMANAHQAGADAFAEQANALANgIQABgHAAgJQABgJADgGIAAABQAEAMAHAJIABAAQACACAFAAIAAAAQADgDAGAAIABAAIABgCIAAgBIABAAQAGgCADgFIABAAQAGgBADgEIgBAFQgFAPAJAKIABAAQAGABAGgCIAAgBIAQgLIABAAIAEAJIAMADQAEACADADIgBABQgQAAgOADIgBAAQgJgCgJAAIABABIAAAAQAFABADADIAAAAIAAABIAAABIABAFIABACQBbAEBiABQAgAAAeAFQA4AJA3ALQAQADAPAHQAPAHAPgFQAegJAfgEQAFgBAEgDQAYgNAbgEQAKgBALgEQAJgEAKgBQAmgEAoACQAkACAjAKIAJABIAlACIAUABIAHgBQAxgDAxgGIAQgBIAIAAIAAABIABACIAIgBIgGgEIAFABQAEgCADAAQAdgDAcgBQATANAWAFIASAEIABACIAEAEIAGAFQCCAeCEAUIAEAEIAFAFIAjABIAGgBIABgEIACgFQAegPAdANIAHAEIALgDIAAG8gEgk/AGdIAAm3IASAAIAYAFIAGAAIADgDIAIgGIBGAAIAAADIADAGIAXAHQAwAMAqgWQAwgaAwgFIAagBIAMAAQAVABAUAFQADgDABgDIAAgFIgBgBQAIgEAAgHIADgEQADgFACgGIASgDQAKgCAIgFQAQgKASAEIAHAHIABABIABACIADAAQANAHAQgBQACgCgBgDIAkABIAFABIAPAEIAMADIAEgBQAMACAIAGIAaAIIAGACQAnABAogDIAPgBQAaAAAYgGQAGgGAJgFQAIgEAIAAQA+gGA7AUIAUAEIAMgEIAHgFIAGgDQAegMAegFQAeAEAeADIAuACIABAAQALAFALACIABAAIAIABQAvAAAugDQA5gDA4gKIABgCIASgBIABAAQAFgEAGABIAAAAQADAGALgBIABgBIANgGIABAAIAMgRIAAgBQAKAGAIAHIABAAIAJAAIAAAAQARgJAFgUIABAAIAFAKIAAABQAEABABACIABABIALABIABAAIAUgLIADgCIAAAAQABgEADgBIACAAQABgEADgCIABAAIAAABIgFAUIAAAAIABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQABABAAgBQABAAAAAAQABAAAAAAIAZgPIAAgBQADgDAEgCIAAAAQAHAVASAKIAAAAIACAAIAJAAIAAAAIAZgfIAAABQAMALAPAIIABAAIAGgFIAAAAQAFgLAJgGIAAABIgBAJQhiA8g6BjQg4BggVCGQgNBaARBKgAlImOQgCgHACgHIABAPIgBgBg");
	this.shape_9.setTransform(0,93.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("EgiwADlIgWgGIgDgGIgBgEIhFAAIgIAGIgEAEIgFAAIgYgGQArgpBJARQBOAkBSgnIAvgYIAJgEQAdgBAaALIAOgCQACgGAEgGIACgDIAAgCIAAgCQATgQAcADQAHgHAJgFIABgBIABAAIADgBIAAAAQAFgBAEADIAAABIAEABIADAAIABACIAAAAIAOAHQArgDApAKIAPAFIAAgBQAJALAUABIAJABQAOAEAOABIAIAAQBFAABAgPIAGgCIAHgCIgBgEIAJgBIACADQASgCASAFIAUAEQAYAFAYACIANABIAAAAIABgHIAJAEIAAAEIAbABIgGAFIgNADIgTgEQg7gTg+AFQgJABgHAEQgJAEgGAGQgYAHgbAAIgOAAQgoADgngBIgHgBIgZgJQgIgFgNgCIgDAAIgMgDIgPgDIgFgBIgkgCQABADgCACQgQABgNgHIgEAAIAAgBIgBgCIgIgGQgSgFgPALQgIAFgKABIgSADQgCAGgDAGIgDADQgBAIgHAEIABAAIAAAFQgBADgDADQgVgEgUgBIgMgBIgaACQgwAFgwAZQgbAOgeAAQgRAAgRgEgEAi8ADfIgGgGIgDgEQiEgUiDgdIgFgGIgEgDIgCgCIgSgEQgVgFgTgNQgdABgcACQgEAAgDACIgFAAIAGAEIgIAAIgBgBIAAgCIgIABIgQABQgxAFgxAEIgHAAIgVAAIgkgCIgKgCQgigJglgCQgngCgmAEQgKABgJAEQgLAEgLABQgaADgYAOQgEACgGABQgfAFgdAJQgQAFgPgIQgOgHgQgDQg4gLg3gJQgegEgggBQhiAAhbgEIgBgCIgBgFIAAgCIAAgBIAAAAQgDgDgFgBIAAAAIgBAAQAJgBAJACIABAAQAOgCAQgBIABAAIAAAAQgDgEgFgBIgLgEIgFgIIAAgBIAAAAIgQAMIAAAAQgGADgHgCIAAAAQgJgJAFgQIABgEQgEADgFABIgBAAQgDAFgGACIgBAAIAAABIgCACIAAABQgGAAgDADIgBAAQgEAAgCgCIgBAAQgHgKgFgLIAAgBQgCAGgBAIQAAAJgBAIQgOAHgMgKQgFgEgGgDQgOgHgJgNIgDgHIgBgEIgBAAIAAgKIgBgDIAAAAIgDABIgDACQgYAOgUARQgCABgFAAIAAgBQgBgIAHgFIABAAIAPgaIABAAIAAgGIABgJIgKAIIgYAUIAAAAQgLAQgXgCIAAgBIgEgGIgBAAIgDgKIAAgBQgHAJgIAIIgPAOIgEgDIgEgCQALgIAKgKQAHgJAGgKIABAAIADgLIACgHIADgKQABgFAGAAQAEgBABADIAAABQAAAKgEAGIAAABIABADQgBAEgCAEIgBAAIABAQIAAABIAGAIIABAAQALgEAKgHQAHgGAGgGIAFgGIAFgFIAKgIQAFgFAIABQAEAHgCANIAAAAIgBABIAAABQgEAGgCAHIgBAGIAKgHIALgGIAHgFIACgBIADgCQAEgCAFAAIABAGQAAAHgBAGIAAABQAMAcAeAJIABAAQgBgUAGgOIABAAQAEgDAIAAIAAAAIAHAGIAAAAQABAIADAFIAAABQAEAEADAFIAAABIABAAQAMgGAKgHIABAAIABgBIAAAAIABgBIAAAAIABgCQAGgEAJgCIAAAAQAEAFgDAJIAAABQAAACgDACIAAAAQgBAJACAHQAHAAAFgGIAAgBQAEAAACgDIAAgBQAHgDAHABIAAAAQAAAGADADIAAABIALAEQACAKALAEQAXAJAZgFIADAAQAnABAoAAQBHAABEASIBEARQALADAKABQANACAMgEQAegKAegGIAJgDQAZgOAdgDQAHAAAGgDQAEgCABgEIABAAIADAAIAAgBQAzABAzAFIAfADIAlAEQANACAOABIAcAAQAxgCAxgGIACgCQAHgGAIgDQAKgEAMAAIAAgBIA+ABQCOBDCfAIQAXABARAOIACABQAbACARgTIAuAAQADADADABQALADAGAIIAFAHQgBADgCABIgCAAIgKADIgHgDQgdgOgeAPIgCAGIgCAEIgFAAIgjAAgAyMCeIgIAAIgBgBQgMgBgLgFIgBAAIgtgDQAUgBASgHQAKgEAGAGIAQADQBCAJBCgKIALgCIABAAIAEgBIAQgCIgBgBIgBAAIALgCQAFgBADgEIALACIAPgCIAKgBIACgBQAQACANgIIAEgCQAIABAFAEIABAAIAFgDIABAAQAGgJAAgPIAAgBQgFgHABgJIAAAAQAEgEAGAAIAAABQAEADACAGIAAAAQAAAKACAHIAAABIAMAMIAAAAIAHADIAAAAQALgGACgPQABgLAFgIIADgEIACgCQAEgBACACIAAAAIADAKIAEAPIADAIQAEAAACACIABAAIAKgEIABAAQABgFAGgBIABAAIACgDQAJgLAKgIIABAAIACgFIAAgBIADgCIABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAAAAQAFgFAHABIABAAIAAADQAAADgCADIAAAAIAAAFIAAABQgIAJgEAOQAFgBACgEIAAAAQAKgEAHgIIAAAAIAHgBIABAAQADAIABAJIAAAAQAGAKAKAHIABAAIAAABQAPgOAHgUIABgCIAJgCIAAABIARASIAAABQAFAAADADIAAAAIAcgjIAAgBQAFgBAFACIABAAQAAAGgCAEIgBAAIAAADQAEACACAIIACAFQACAEAEADIABABIB3gNQAagDASASQAJAEALgCQA+gRA9gXQARgGARAEQA0ANA2AJQA3AJAygSQARgHASgDQArgKAuADIAEAAQBAAPBDgGQAngNAoAFIAEACIADACIALAFIAKACQAHABAHAAIAFAAQAVAFASAOQgTgCgTACIgOgFIgIgDIgDAAIgGgBIgNgCIgKgDQgLgEgMACQgTACgSAFQguAMgxgKQglgHgmgCQgLAAgLABQgwAFguAPIgRAEQgnAJgngHIhggSQgjgHgiAPQggAPgkAIIgXAFQgbAGgWgUQg6gCg4AOQgfAHgPgZIgBgDIgHAEIACgKIAAAAQgJAGgFAKIAAABIgGAEIgBAAQgPgIgMgLIgBAAIgYAeIgBABIgIAAIgCAAIgBAAQgRgLgHgUIgBAAQgEABgCADIAAABIgZAPQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgBAAIgBAAIAGgUIAAgBIgBAAQgEABgBAFIgBAAQgDABgBADIgBABIgDABIgTALIgBAAIgLgBIgBAAQgBgDgEAAIAAgBIgGgLIAAAAQgFAVgRAJIAAAAIgJAAIgBgBQgIgHgKgFIAAABIgNAQIgBAAIgMAHIgBAAQgLACgDgHIgBAAQgFAAgFADIgBAAIgSABIgBACQg4AKg5AEQgoACgnAAIgOAAgAH5BsQgagKgcAJIgBAAIgSgEIgggGQAegBAdgHIAcgDQANABANAFQAQAGARgBQAKgFAKgEIAEgKQACgJABgJIAAgDQACgHAGgBIADgQIACgMIABAAQAFgDAEADIAAAAIAAAOQgBAJgDAKIAAAAIgBAEIAAALIABAJIAAABIgDgCQgDAJgFAHQgIAOgSAEIgHACQgVgEgWgBgAlFiuIAAgBQAAgCgDgCIAAAAIAAgBQAAgEACgBQACgCAEABIABAAQAJgEALAAIAAgBQAGgDAIAAIABgBIAAAAQA4gHA6gLIAAgCIAigCIAvgEIBggIIAagCQAegCAfACIAZADQALABAIADIAIAEIABAAIAFAAQAIABAEAEIABAAIAoALIAAABIAGADIABAAIABACIgMABIgTgFIgRgFIgHgCQgjgMgrgCQgSgBgUABIgCABIgPABIgvAEIg9AEIg/AEQgvADgrAJIgaAGIgEABIgfAOIgcAGIAAgEgAjiitIAHgGQgRgCgRABIAUgGQAHgCAIACQAMACAQgBIAugFIAwgFQADgBACgCIAAAAIAKAAIAcgDQAIgBADAEIAEgEIAAAAIAzgDIABAAQAGgEAHABQAIABAHgBQARADATgCIABAAQANAFARgBQAOAAANAEQAIgBALAEIAAAAIAGAAIABAAQAEABACADIgQADQgOgEgRAAQgRAAgSgDIAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgKABgMgBQgMgBgMABIgyADIg9AHIgsAEQgZABgXAEIgaABIgMACQgGAAgBAEIgOgBgADdi5IAAgEIACAFIAAAAIAAABgADYjCIgDgDIAEADgAkfjGIABAAIAEAAIABAAQALgEAKAAQAFgEALgCQAagGAbAAIAAAAIADgCIAHAAIAFgBIAAADQg6ALg4AGIADgBg");
	this.shape_10.setTransform(1.1,68.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("APyA1IARAAIAAAMQgGgIgLgEgAmLgOIABgBIAAABIgBAAgAmiggIAAAAIAAAAgAnGg3IAAABIgBABIAAAAIgBAAIAAABgAwCg/IAAgBIABAAIAIADIgJgCg");
	this.shape_11.setTransform(134,82.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.2,-136,476.5,272);


// stage content:
(lib.prep_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* music = new Sound();
		music.attachSound("2-a");
		music.start(0,99);
		pickupbub = new Sound();
		pickupbub.attachSound("4-b");
		throwbub = new Sound();
		throwbub.attachSound("4-c");
		suckbub = new Sound();
		suckbub.attachSound("slurp");
		v1 = new Sound();
		v1.attachSound("up");
		v2 = new Sound();
		v2.attachSound("down");
		v3 = new Sound();
		v3.attachSound("outside");
		v4 = new Sound();
		v4.attachSound("inside");
		v5 = new Sound();
		v5.attachSound("above");
		v6 = new Sound();
		v6.attachSound("beneath");
		v7 = new Sound();
		v7.attachSound("to");
		v8 = new Sound();
		v8.attachSound("toward");
		v9 = new Sound();
		v9.attachSound("into");
		v10 = new Sound();
		v10.attachSound("at");
		v11 = new Sound();
		v11.attachSound("within");*/
		playSound("preposition");
	}
	this.frame_39 = function() {
		playSound("up");
	}
	this.frame_49 = function() {
		playSound("down");
	}
	this.frame_63 = function() {
		playSound("outside");
	}
	this.frame_78 = function() {
		playSound("inside");
	}
	this.frame_92 = function() {
		playSound("above");
	}
	this.frame_105 = function() {
		playSound("beneath");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(10).call(this.frame_49).wait(14).call(this.frame_63).wait(15).call(this.frame_78).wait(14).call(this.frame_92).wait(13).call(this.frame_105).wait(22));

	// actions
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(283.2,47.5,1,1,0,0,0,130.3,15.4);

	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.UI},{t:this.instance}]}).wait(127));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgEAAQgEAAgDgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQABgDACgDQADgCADAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAOAAAGAKQAEAGAAAPIABARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape.setTransform(340.7,363.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEADgDQACgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_1.setTransform(331.1,364.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAcAtIgGgHIgPAIIgJABQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCALIAAASQAAALABAGIAGAQIACAEIAAABQAAAEgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKgBQAIAAAGgDIAJgHQgDgWAAgMIAAgHIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_2.setTransform(322.3,365.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_3.setTransform(312.9,365.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGANQAEAIAAAQIAAAIIAAAIIACATQACAMAAAGQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_4.setTransform(303.4,365.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_5.setTransform(293.7,365.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBEQgDgEgBgDIAAgaIACgjIACglQgBgHACgRQAAgEACgBQANgEAPAAQAOAAAPAKQAQAMAAATQAAAWgSAMQAOAGAGAGQAHAIgBAIQAAAKgLAKQgIAHgJADQgTAIgeAAQgEAAgDgDgAgbAjIAAASQAYAAANgHQAGgCAGgEQAGgGgBgBQABgFgMgFQgIgEgIgCIgJgBIgDAAIgDAAIgLgBIgBAUgAgWg0IgBAQIgBAiIANABQAMgBAIgHQAJgJAAgLQAAgJgJgHQgJgHgJAAIgNAAg");
	this.shape_6.setTransform(283.4,363.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_7.setTransform(245.6,365.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJApIgNgkIgQgnIgBgEQAAgEACgDQAEgCADAAQAGAAACAFIAWA9QAFgOAKgaIAIgUQADgGAFAAQADAAADADQADADAAADQAAADgPAjIgSAoQAAAIgHAAQgGAAgDgHg");
	this.shape_8.setTransform(236.3,365.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAlQgMgMgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgLgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_9.setTransform(226.9,365.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaBCQgDAEgEAAQgDAAgDgCQgCgDAAgDIAAgHIAAgGIAAgcIgBgbIAAgZIAAgYQABgGACgEQACgFAGAAQAGAAAAAIIAAADIAAAEIAAATIgBAWQAIgEAGgDQAHgDAGAAQASAAAMAOQAMANAAAUQAAAUgOAOQgNAOgRAAQgOAAgLgFgAgNgDIgNAHIAAAQIAAANIAAAPIAMAFQAFACAIAAQALgBAIgIQAJgJAAgOQgBgNgGgIQgHgJgMAAQgHAAgHAEg");
	this.shape_10.setTransform(217.2,363.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_11.setTransform(205,363.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_12.setTransform(325.8,345.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgXANgNQAMgOATgBQAKAAAGAEIAIAFQABglACgMQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAQIAAACQAAADgCACQgDADgDAAQgFgBgDgHQgGAEgHADQgHACgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAIQAIAJALAAQAGgBAFgCIAKgHIADgDIgBgPIAAgKIABgLQgEgHgFgDQgGgEgIAAQgNAAgIAJg");
	this.shape_13.setTransform(315.4,343.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHBAQgDgDAAgEIgBgQIAAgQIABgUIABgTQAAgEADgDQACgDADABQADgBADADQACADAAAEIgBATIgBAUIABAQIAAAQQAAAEgCADQgCACgEAAQgDAAgCgCgAgFgwQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgEgDg");
	this.shape_14.setTransform(307.8,343.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgCAEAAQADAAAEADQACADAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgFIARgGQADgCAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgBgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAJAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_15.setTransform(300.5,345.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAJIABAIQAAADgDADQgCACgEAAQgEAAgCgCQgDgDAAgDIAAgIIgBgJIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACALAAAHQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_16.setTransform(291.9,345.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_17.setTransform(282.1,343.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_18.setTransform(245.4,345.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgXANgNQAMgOATgBQAKAAAGAEIAIAFQABglACgMQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAQIAAACQAAADgCACQgDADgDAAQgFgBgDgHQgGAEgHADQgHACgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAIQAIAJALAAQAGgBAFgCIAKgHIADgDIgBgPIAAgKIABgLQgEgHgFgDQgGgEgIAAQgNAAgIAJg");
	this.shape_19.setTransform(235,343.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHBAQgDgDAAgEIgBgQIAAgQIABgUIABgTQAAgEADgDQACgDAEABQADgBACADQACADAAAEIgBATIgBAUIABAQIAAAQQAAAEgDADQgBACgEAAQgEAAgBgCgAgFgwQgDgDAAgEQAAgEADgDQAEgDADAAQADAAAEADQADADAAAEQAAAEgDADQgEADgDAAQgDAAgEgDg");
	this.shape_20.setTransform(227.5,343.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgCAEAAQADAAAEADQACADAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgFIARgGQADgCAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgBgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAJAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_21.setTransform(220.1,345.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEADgDQACgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgDAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_22.setTransform(211.7,344.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMACgQQACgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQABAKADAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgCAhIAAASIAAATIABAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_23.setTransform(202.9,345.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgsA2QgSgQAAgZQAAgdASgZQAUgbAeAAQAdAAAOANQAOANAAAdQAAAegRAYQgTAcgcAAQgZAAgSgPgAgegdQgOAUAAAWQAAARANALQAMAKASAAQAUAAAOgVQAMgUAAgXQAAgVgKgIQgIgIgVAAQgVAAgPAVg");
	this.shape_24.setTransform(191.1,343.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAJIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgJIABgYIACgZIgBgIIAAgIQAAgEADgCQACgDAEAAQAIAAABAMIAAAJQAPgTAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape_25.setTransform(317.5,326.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAGAaIgEgVIgCgTIgHAQIgNAkQgBAEgDACQgCAFgHAAQgGAAgGgaQgEgOgDgWIgCgNIgBgOQAAgDADgDQADgCADAAQAHAAACAHIABANIABANIAGAmQAJgaALgjQADgKAGAAQAHAAACALIAGAgIAGAhIAHgYIALgvQACgFAFAAQAEAAADADQADACAAAEIgBAEQgHAcgLAjQgDAIgFAJQgEAEgFAAQgJAAgFgXg");
	this.shape_26.setTransform(306.5,326.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAAOAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_27.setTransform(295.5,326.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaBHQgLgCgFgEIAAAAQgEAAgDgDQgCgCgBgEIABgcIABgcIAAgdIgBgfQABgEADgEQAEgEADAAQACAAANAGIAPAIQAYAIASASQAUAVABAYQgBAPgGANQgIAOgMAJQgNAJgZAAQgHAAgHgCgAghgXIABAYIgBAwIABABQAIAFAMAAQATAAAJgGQAJgGAEgJQAFgKABgLQAAgYgbgRQgJgGgggPg");
	this.shape_28.setTransform(284.7,324.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQAEAAABADQADACAAAEIAAACIgBAFQAIgFAGgCQAHgDAGAAQASAAAJAQQAGANAAAVQAAASgKAMQgLANgSAAQgHAAgLgDIAAAqQgBAEgCACQgCADgEAAQgEAAgCgDgAgIguQgEADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgHADg");
	this.shape_29.setTransform(246.2,328.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_30.setTransform(234.8,324.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(127));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnjAVTMAAAgqlMBPHAAAMAAAAqlg");
	mask.setTransform(277.6,174.7);

	// Layer 1
	this.instance_1 = new lib.scene4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(281.2,175.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'E55F9D01C3FFE34CB3303A0CA423342C',
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
an.compositions['E55F9D01C3FFE34CB3303A0CA423342C'] = {
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