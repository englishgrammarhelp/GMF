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


(lib.rap3cstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape.setTransform(85.8,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1.setTransform(78.1,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_2.setTransform(70.4,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_3.setTransform(64.5,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgiA0QgCgCAAgDIAAgQIgBgRIACgRIABgTIgBgKIAAgLQAAgEACgCQACgEAFAAIARACQAIABAGADQAcAPAAAVQAAAKgKAHQgHAHgMADQAWAMAKAMQAAABABAAQAAABABAAQAAABAAABQAAAAAAABQAAADgCACQgCACgDAAQgDAAgCgCQgWgXgbgHIAAANIAAAOQABADgCACQgCACgDAAQgDAAgCgCgAgVgeIAAAIIgBAOIgBANIADAAIADAAQARAAAJgFIAHgEQADgEAAgDQAAgJgLgJQgIgHgMgBIgKgBg");
	this.shape_4.setTransform(55.7,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_5.setTransform(46.9,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAPA2QgCgDgBgDIgDgMIgGgeIgDgdQgGAXgIAOQgHATgDAKIABADQAAADgDACQgDACgDAAQgJAAAAgIIgCgJIgIgiIgPgvIAAgDQAAgHAHABQAEAAADAEIAFAPIAIAdIAGAdQAIgQAIgXIAGgVQAGgPAFAAQAFAAACAEQACAHADAWQABALAEAPIAFAbIAXg7IADgNQADgIADgFQACgDAEAAQAHAAAAAGIgDAHIgCAIIgEAMIgUAxIgKAXQgDAEgEAAQgEAAgCgBg");
	this.shape_6.setTransform(35.4,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAIgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_7.setTransform(19.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAFAUIgDgQIgCgOIgFAMIgKAcIgDAEQgCAEgFAAQgFAAgFgUIgFgcIgBgKIgBgLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCACAAQAGAAABAFIABAKIABAKIAFAeIAPgwQACgHAFAAQAFAAACAIIAFAZIAEAaIAGgTIAJgkQABgEAEAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAEIgOAxQgCAGgEAHQgDADgEAAQgIAAgDgSg");
	this.shape_8.setTransform(11.2,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAPQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAEgKIAFgMQABgEADAAQABAAAAABQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgJAWQgBADgDABQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_9.setTransform(0.6,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_10.setTransform(-5.9,-0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgiA0QgCgCAAgDIgBgQIAAgRIACgRIABgTIgBgKIAAgLQAAgEACgCQACgEAFAAIAQACQAJABAGADQAcAPAAAVQAAAKgKAHQgHAHgMADQAWAMAKAMQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAADgCACQgCACgDAAQgDAAgCgCQgXgXgagHIAAANIAAAOQAAADgBACQgCACgDAAQgDAAgCgCgAgVgeIAAAIIgBAOIgBANIADAAIADAAQARAAAJgFIAGgEQAEgEAAgDQAAgJgLgJQgJgHgLgBIgKgBg");
	this.shape_11.setTransform(-14.7,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_12.setTransform(-23.5,-0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAPA2QgCgDgBgDIgDgMIgGgeIgEgdQgFAXgIAOQgHATgDAKIABADQAAADgDACQgDACgDAAQgJAAAAgIIgCgJIgHgiIgQgvIAAgDQAAgHAHABQAFAAACAEIAFAPIAIAdIAHAdQAHgQAIgXIAGgVQAGgPAFAAQAFAAACAEQACAHADAWQABALADAPIAGAbIAXg7IADgNQACgIAEgFQACgDAEAAQAHAAAAAGIgCAHIgDAIIgEAMIgUAxIgKAXQgCAEgFAAQgEAAgCgBg");
	this.shape_13.setTransform(-35,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHAPQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAEgKIAFgMQABgEADAAQABAAAAABQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgJAWQgBADgDABQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_14.setTransform(-48.4,5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgOAQABQAOAAAHAMQAGAKgBAOQAAAOgHAMQgJAMgOgBQgLAAgIgIgAgLgNQgFAIAAAIQAAAKAGAGQAEAFAGAAQAGgBAGgFQAFgFABgKQABgagQAAQgJAAgFAKg");
	this.shape_15.setTransform(-54.5,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOA0QgCgBAAgDQAAgDAHgMIAIgQQgMgPgEgJIgKgSIgMgSIgBgEQAAgCACgDQADgCACAAQAEAAACAEIAFAIIAKAPQAFAIADAIQACAFAHAJIAPglIAIgPQACgEAEgBQADAAACACQACADAAACQAAADgEAHIgEAIIgMAdIgNAbIgIAQIgDAIQgCADgEAAQgDAAgCgCg");
	this.shape_16.setTransform(-62.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rap3cstill, new cjs.Rectangle(-69,-13.1,158.7,23.6), null);


(lib.rap3bstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABIgBgBg");
	this.shape.setTransform(-165.5,-29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABIgBgBg");
	this.shape_1.setTransform(-168.2,-29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgBACIgBgCIABgBIABgBIACABIABABIgBACIgCABIgBgBg");
	this.shape_2.setTransform(-170.9,-29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgBASIgBgCIAAgBIAAgBIAAgEIAAgDIAAgJIgBgKIgCAAIgIAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIABgBIACgBIADAAIAEAAIAEAAIAEAAIAFABIAGAAIABABIABABIgBACIgBABIgGAAIgFgBIgCAAIABALIABAKIAAACIAAADIgBADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_3.setTransform(-173,-30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgBAFIAAgCIAAgCIAAgBIAAgDQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIABAAIABACIAAABIAAACIAAABIAAACQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape_4.setTransform(-175.9,-32.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgPATIgBgCIAAgDIAAgDIAAgFIAAgEIAAgEIAAgFIAAgEIAAgFIABgCIACgBQAAAAAAAAQABABAAAAQABAAAAABQAAABABAAIAKAPIAMANIAAgDIAAgDIgBgQIAAgDIgBgCQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAEAAAAAPIAAAHIAAAIIgBAEQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgDgCQgKgJgMgRIAAAGIAAAEIAAAGIAAAGQAAAHgCAAIgCgBg");
	this.shape_5.setTransform(-178.7,-30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgJARQgEgCAAgEIABgBIABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIACACQADACADAAIAHgCQADgCAAgDQABgEgEgCQgDgBgDAAQgEAAgDAAQgDgCAAgEQAAgFAFgDQAEgEAFABIAEABQACAAAAAAQABAAABABQAAAAAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgDgBIgEAAIgFACQgDACAAACQAAABAAAAQAAABABAAQAAABABAAQABAAAAAAIAFABQAGABADACQADACAAAFQgBAFgFAEQgFADgFAAQgEAAgEgCg");
	this.shape_6.setTransform(-182.4,-30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAJANIgCgIIgGABIgGABIgEAJQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCgBIgBgCIAEgIIAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAHgLQAFgJABAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAABIABAHIAEAQIABAEIABADIgBABIgCABQgCAAgBgFgAgCACIAIgCIgCgJg");
	this.shape_7.setTransform(-186,-30.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAFATIgBgCIgBgFIgCgKIgBgJIgEAMIgEAKIABABIgBACIgDABQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgDIgDgMIgGgQIAAgBQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAIABAFIADALIACAJIAGgNIABgHQADgGABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIABAKIABAIIADAKIAIgUIABgFIACgEIACgBQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBACIAAADIgBAEIgIARIgDAIQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBg");
	this.shape_8.setTransform(-190.2,-30.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKARIAAgBIAAgCIACAAIAFgBIAAgFIAAgDIAAgFIABgMIgDAAIgEAAIgBgBIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBIAIAAIALABQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAABIgBACIgCABIgEgBIgDAAIgBAMIAAAEIAAAEIAAAFIAIAAIABAAIABACIgBABIgBABIgEAAIgEAAIgEABIgFAAIgCgBg");
	this.shape_9.setTransform(-195.7,-30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFATIgBgCQAAgCAFgMIgJgQIgBgBIAAgCIAAgCIACgBIACACQAEAFAEAKIADgIIAEgHIACgCIACABIAAACIAAABIgIARIgEALIgCAFQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgBgBg");
	this.shape_10.setTransform(-199.9,-29.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAIAMIgCgBIgEABIgCABQgGAAgCgDQgDgDAAgGQAAgFAFgEQADgEAFAAIAFABQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABIAAABIgBADIAAAEIAAAFIACAEIABACIAAAAIgBACIgCAAIgBgBgAgDgFQgDADAAADQAAAEACACQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIADgBIACgCIgBgIIABgDIAAgCIgCgBIgBAAQgCAAgDADg");
	this.shape_11.setTransform(-202.4,-30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAOQgEgCABgDIABgBIABgBIACABIACABIADAAIADAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgEgEAAIgCgBIgFgCQAAAAAAAAQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgFAEgCIAEgBIAEgCIADAAIABAAIABACIAAACIAAACIAAACIgCABIgBgBIgCgDIgFABQgDACAAADIACAAIAHACQADACABAFQAAAEgDACQgDABgEABIgGgBg");
	this.shape_12.setTransform(-204.9,-30.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKARIAAgBIAAgCIACAAIAFgBIAAgFIAAgDIAAgFIABgMIgDAAIgEAAIgBgBIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBIAIAAIALABQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAABIgBACIgCABIgEgBIgDAAIgBAMIAAAEIAAAEIAAAFIAIAAIABAAIABACIgBABIgBABIgEAAIgEAAIgEABIgFAAIgCgBg");
	this.shape_13.setTransform(-208.9,-30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rap3bstill, new cjs.Rectangle(-210.9,-35.2,46.8,8.3), null);


(lib.rap3astill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape.setTransform(80.8,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1.setTransform(73.1,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_2.setTransform(65.4,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgbAvQgMgGgBgKQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQACgCADAAQAEAAACAEIAGAHQAGADALAAQAKAAAJgEQAMgGAAgKQAAgJgKgFQgIgEgMgBQgKAAgIgDQgKgGAAgKQAAgMAOgLQANgJANAAQAHAAAIACQALADAAAFQAAAGgGAAIgJgCIgLgBQgKAAgHAFQgIAFAAAIQAAAGAKACIAOACQAQABAIAIQAJAHAAAMQAAAQgPAKQgOAIgQAAQgMAAgLgFg");
	this.shape_3.setTransform(58.9,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAYAjIgFgVIgSADIgRAEIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAHgCQAIgNAMgUQAPgZAEAAQAFgBACAIIAFAXIAKAuIAEALIACAHQAAADgCADQgDABgCABQgHgBgEgQgAgIAFIAYgFIgFgag");
	this.shape_4.setTransform(48.7,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAPA2QgCgDgBgDIgDgMIgGgeIgDgdQgHAXgHAOQgHATgDAKIABADQAAADgDACQgDACgDAAQgJAAAAgIIgCgJIgIgiIgPgvIAAgDQAAgHAHABQAEAAADAEIAFAPIAIAdIAGAdQAIgQAIgXIAGgVQAGgPAFAAQAFAAACAEQACAHADAWQABALAEAPIAFAbIAXg7IADgNQADgIADgFQACgDAEAAQAHAAAAAGIgCAHIgDAIIgEAMIgUAxIgKAXQgDAEgEAAQgEAAgCgBg");
	this.shape_5.setTransform(36.8,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_6.setTransform(21.1,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRA1QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgHAOghIgYguIgDgFIgCgFQAAgDACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQALAQANAeIAKgXIAKgWQADgDADAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAEIgXAyQgJATgEAMIgEANQgCAFgEAAQgDAAgCgCg");
	this.shape_7.setTransform(9.2,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACADIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgFQgDgSAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_8.setTransform(2.2,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgCADgBQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_9.setTransform(-4.9,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_10.setTransform(-16.2,-0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgHAPQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAEgKIAFgMQABgEADAAQABAAAAABQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgJAWQgBADgDABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_11.setTransform(-25.8,5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgbAvQgMgGgBgKQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQACgCADAAQAEAAACAEIAGAHQAGADALAAQAKAAAJgEQAMgGAAgKQAAgJgKgFQgIgEgMgBQgKAAgIgDQgKgGAAgKQAAgMAOgLQANgJANAAQAHAAAIACQALADAAAFQAAAGgGAAIgJgCIgLgBQgKAAgHAFQgIAFAAAIQAAAGAKACIAOACQAQABAIAIQAJAHAAAMQAAAQgPAKQgOAIgQAAQgMAAgLgFg");
	this.shape_12.setTransform(-32.9,-0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAYAjIgFgVIgSADIgRAEIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAHgCQAIgNAMgUQAPgZAEAAQAFgBACAIIAFAXIAKAuIAEALIACAHQAAADgCADQgDABgCABQgHgBgEgQgAgIAFIAYgFIgFgag");
	this.shape_13.setTransform(-43,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAPA2QgDgDABgDIgFgMIgFgeIgEgdQgGAXgGAOQgJATgCAKIABADQAAADgDACQgCACgDAAQgKAAAAgIIgCgJIgHgiIgQgvIAAgDQAAgHAHABQAFAAACAEIAFAPIAIAdIAHAdQAHgQAHgXIAHgVQAGgPAFAAQAFAAACAEQACAHADAWQABALADAPIAHAbIAWg7IAEgNQABgIADgFQADgDAEAAQAHAAAAAGIgCAHIgDAIIgEAMIgUAxIgKAXQgCAEgFAAQgDAAgDgBg");
	this.shape_14.setTransform(-55,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rap3astill, new cjs.Rectangle(-64.6,-13.1,149.4,23.6), null);


(lib.BEscene3still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag3BiQgMgLAAgpIAAgSIABgVIgBgGQAAgDACgEQACgkAAgSIgBgOIgBgNQAAgQANAAQAFAAAEAEQAPgEAOgCQANgCALAAQAfAAASAHQAJAEAAAJQAAAFgDAEQgEAEgFAAIgFgBQgVgGgUAAQgKAAgMACQgMACgOAEIABANIgCAxIA2gGIAfgCQAFAAAEADQAEAEAAAGQAAAKgMACIgeACIg5AGIgBARIgBAPQAAAcAEAFQAEADAQAAIAXAAIAYAAIAHgBIAHgBQAOAAAAANQAAALgLACQgMACgmAAQgoAAgLgKg");
	this.shape.setTransform(69.8,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhABgQgEgEABgFIgBgeIgCgeQAAgMADgWQACgXAAgMIAAgTIgCgTQAAgHAEgGQAFgGAJAAIAeADQARACALAGQA0AbAAAoQAAATgSAOQgOAMgVAGQAoAVATAYQADAEAAAEQAAAGgDAEQgFAEgEAAQgGAAgDgEQgqgqgzgOIABAZIAAAZQAAAFgDAEQgEAEgFAAQgGAAgDgEgAgog4IABAPIgBAZIgEAZIAGAAIAGAAQAgAAAPgJQAIgDAFgGQAHgHAAgFQAAgSgUgPQgRgOgUgCIgTgCg");
	this.shape_1.setTransform(53.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag3BiQgMgLAAgpIAAgSIABgVIgBgGQAAgDACgEQADgkgBgSIgBgOIgBgNQAAgQANAAQAFAAAEAEQAPgEAOgCQANgCALAAQAfAAATAHQAIAEAAAJQAAAFgEAEQgDAEgGAAIgEgBQgVgGgUAAQgKAAgLACQgNACgOAEIABANIgCAxIA3gGIAdgCQAGAAAEADQAEAEAAAGQAAAKgMACIgeACIg5AGIgBARIgBAPQAAAcAEAFQADADARAAIAXAAIAXAAIAIgBIAHgBQAOAAAAANQAAALgLACQgMACgmAAQgoAAgLgKg");
	this.shape_2.setTransform(37.2,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAdBkQgFgEAAgGQgGgPgCgKIgKg2QgGgigBgUQgMAqgNAcQgPAhgEATIABAGQAAAGgFADQgEAEgGAAQgRAAAAgQIgEgQIgOg+QgIgegUg7IgBgFQAAgMANAAQAIAAAFAJQACAFAHAVQAIAXAHAhIAMA3QAOggAOgsQAIgbAEgLQAMgcAJAAQAJAAAEAJQAEALAFApQADAVAGAcIALAyQARgpAZhFIAHgYQADgPAGgIQAEgHAIAAQAMAAAAANIgEANIgFANIgHAXIglBbIgSArQgFAJgJAAQgGAAgEgDg");
	this.shape_3.setTransform(15.7,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgPAbQgDgDAAgEQAAgEAIgRIAKgXQADgGAFAAQAFAAADAEQADADAAAFQAAADgSAnQgCAHgGAAQgFAAgDgEg");
	this.shape_4.setTransform(-9,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgyBYQgYgLAAgTQAAgFADgDQAEgEAGAAQAGAAAFAHQAGAJAFAEQALAHAUAAQATAAARgJQAWgKAAgUQAAgQgTgJQgPgIgWgBQgUAAgOgIQgSgJAAgUQAAgXAagSQAYgRAaAAQAMAAAPADQAVAGAAAJQAAAKgLABQgGgBgMgCQgNgDgHAAQgTAAgOAKQgOAKAAAOQAAAKATAFQAHACATABQAdACAQAQQAPAOAAAVQAAAegbASQgZAPgfABQgXgBgTgIg");
	this.shape_5.setTransform(-22.3,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAtBCQgEgMgFgcQgNABgVAFIghAHQgGARgPAgQgFAHgGAAQgGAAgDgEQgFgEAAgFQAAgGAUgoQgCgEgBgEQAAgKANgDQAOgaAXgkQAdgwAHAAQAKAAAEAOIAIArIASBXIAIAUQADAKAAAEQAAAFgEAEQgDAEgGAAQgLAAgIgegAgQAJIAugJIgKgxg");
	this.shape_6.setTransform(-41.1,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAdBkQgFgEAAgGQgGgPgCgKIgKg2QgGgigBgUQgMAqgNAcQgPAhgEATIABAGQAAAGgFADQgEAEgGAAQgRAAAAgQIgEgQIgOg+QgIgegUg7IgBgFQAAgMANAAQAIAAAFAJQACAFAHAVQAIAXAHAhIAMA3QAOggAOgsQAIgbAEgLQAMgcAJAAQAJAAAEAJQAEALAFApQADAVAGAcIALAyQARgpAZhFIAHgYQADgPAGgIQAEgHAIAAQAMAAAAANIgEANIgFANIgHAXIglBbIgSArQgFAJgJAAQgGAAgEgDg");
	this.shape_7.setTransform(-63.4,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BEscene3still, new cjs.Rectangle(-79.5,-20.1,159.1,40.3), null);


(lib.BEscene2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag3BiQgMgLAAgpIAAgSIABgVIgBgGQAAgDACgEQADgkgBgSIgBgOIgBgNQAAgQANAAQAFAAAEAEQAPgEAOgCQANgCALAAQAfAAATAHQAIAEAAAJQAAAFgEAEQgDAEgGAAIgEgBQgVgGgUAAQgKAAgLACQgNACgOAEIABANIgCAxIA3gGIAdgCQAGAAAEADQAEAEAAAGQAAAKgMACIgeACIg5AGIgBARIgBAPQAAAcAEAFQADADARAAIAXAAIAXAAIAIgBIAHgBQAOAAAAANQAAALgLACQgMACgmAAQgoAAgLgKg");
	this.shape.setTransform(41.7,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhABgQgEgEAAgFIgBgeIgBgeQABgMACgWQACgXABgMIgBgTIgCgTQAAgHAEgGQAFgGAIAAIAfADQASACAKAGQA0AbAAAoQAAATgSAOQgOAMgVAGQAoAVATAYQADAEABAEQAAAGgFAEQgDAEgGAAQgEAAgFgEQgqgqgygOIABAZIAAAZQABAFgEAEQgDAEgGAAQgFAAgEgEgAgog4IABAPIgCAZIgDAZIAGAAIAGAAQAgAAAQgJQAGgDAGgGQAHgHAAgFQAAgSgUgPQgRgOgVgCIgSgCg");
	this.shape_1.setTransform(25.3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAsBCQgDgMgFgcQgNABgVAFIggAHQgHARgPAgQgEAHgIAAQgEAAgFgEQgDgEAAgFQAAgGATgoQgCgEAAgEQAAgKAMgDQAOgaAWgkQAdgwAIAAQAKAAAEAOIAIArIATBXIAHAUQADAKAAAEQAAAFgDAEQgEAEgFAAQgMAAgJgegAgPAJIAtgJIgKgxg");
	this.shape_2.setTransform(7.1,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgPAbQgDgDAAgEQAAgEAIgRIAKgXQADgGAFAAQAFAAADAEQADADAAAFQAAADgSAnQgCAHgGAAQgFAAgDgEg");
	this.shape_3.setTransform(-12.8,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgyBYQgYgLAAgTQAAgFADgDQAEgEAGAAQAGAAAFAHQAGAJAFAEQALAHAUAAQATAAARgJQAWgKAAgUQAAgQgTgJQgPgIgWgBQgUAAgOgIQgSgJAAgUQAAgXAagSQAYgRAaAAQAMAAAPADQAVAGAAAJQAAAKgLABQgGgBgMgCQgNgDgHAAQgTAAgOAKQgOAKAAAOQAAAKATAFQAHACATABQAdACAQAQQAPAOAAAVQAAAegbASQgZAPgfABQgXgBgTgIg");
	this.shape_4.setTransform(-26.1,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag3BdQgDgEAAgFQAAgGADgDQADgEAGAAIAbgCQABgLAAgNIgBgVIAAgWQAAgcAEgsIgRAAIgRABQgFAAgEgEQgDgDAAgGQAAgMAMgBIAmgBQAYAAAmAGQALABAAAMQAAAGgEADQgEAEgFAAQgIAAgMgDIgVgCQgDAlAAAhIABAVIAAAXIAAAVIAogBQAFAAAEAFQADADAAAGQAAAFgDAEQgEADgFAAIgWABIgVAAQgHABgRACIgZACQgGAAgDgEg");
	this.shape_5.setTransform(-42.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BEscene2still, new cjs.Rectangle(-51.5,-20.1,103,40.3), null);


(lib.BEscene1still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABOBfQgEgFgDgPIgEgWQgGgUgLhFIgZBMIgIAZQgFAOgEAJQgFAJgJAAQgHAAgFgIQgCgFgCgIIgEgPQgNgsgKgyIgFAWIgQBDQgBALgFAYQgEAJgJABQgGAAgEgFQgDgEAAgGQAAgVAJgfIAOgyIAHgoQAGgcAGgJQAFgHAIAAQAIAAAEAJQAFAMAFAiQAIArAOAvQARgwAOg1IAEgTQACgKAEgIQAFgJAJAAQALABAFAUQACAIADAXQAIA4AKApIAHAVQAFARAAAEQAAAGgFAEQgEADgFABQgGAAgFgIg");
	this.shape.setTransform(33.5,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAsBCQgDgMgFgcQgNABgVAFIggAHQgHARgPAgQgEAHgIAAQgEAAgFgEQgDgEAAgFQgBgGAUgoQgDgEABgEQAAgKAMgDQAPgaAVgkQAdgwAIAAQAKAAAEAOIAIArIATBXIAHAUQADAKAAAEQAAAFgDAEQgEAEgFAAQgMAAgJgegAgPAJIAtgJIgKgxg");
	this.shape_1.setTransform(12.2,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgPAbQgDgDAAgEQAAgEAIgRIAKgXQADgGAFAAQAFAAADAEQADADAAAFQAAADgSAnQgCAHgGAAQgFAAgDgEg");
	this.shape_2.setTransform(-7.8,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag3BiQgMgLAAgpIAAgSIABgVIgBgGQAAgDACgEQACgkABgSIgBgOIgCgNQAAgQANAAQAFAAAEAEQAQgEANgCQAOgCAKAAQAfAAATAHQAIAEAAAJQAAAFgEAEQgDAEgGAAIgDgBQgWgGgUAAQgKAAgLACQgNACgOAEIABANIgCAxIA3gGIAdgCQAGAAAEADQAEAEAAAGQAAAKgMACIgeACIg6AGIgBARIAAAPQAAAcAEAFQADADARAAIAXAAIAXAAIAIgBIAIgBQANAAAAANQAAALgLACQgMACgnAAQgnAAgLgKg");
	this.shape_3.setTransform(-19.8,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag7BiQgFgFAAgGIAAglQAAgSADghIADg0QgBgMACgXQABgGADgCQARgGAWAAQAWAAAUAQQAYARAAAaQAAAggZASQATAIAJAKQAKAKAAAMQAAAPgRAPQgMAKgMAFQgcALgsAAQgGAAgFgFgAgmAzIAAAaQAhgBAUgJQAJgDAIgHQAIgHAAgDQAAgGgRgIQgMgFgLgDIgNgCIgFAAIgFAAIgPgBIAAAdgAghhLIAAAWIgDAxIATACQATgCAMgKQANgLAAgSQAAgMgNgLQgOgKgOAAIgTABg");
	this.shape_4.setTransform(-36,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BEscene1still, new cjs.Rectangle(-46.8,-20.1,93.8,40.3), null);


(lib.berap3guystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgBgOQAJABAGAGQAGAGgCAKQAAACAAABQgHgBgHAAQgJAAgIAEQAAgJAAgIQgBgIgEgEQAJgBAIABg");
	this.shape.setTransform(-19.5,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNgCQgBgIgEgEIARAAQAJABAGAGQAGAGgCAKIAAADIgOgBQgJAAgIAEIAAgRg");
	this.shape_1.setTransform(-19.5,-7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AgFAAQAFABAGAA");
	this.shape_2.setTransform(-19.2,-6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AAGAJQgCgjgJAh");
	this.shape_3.setTransform(-19.2,-7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAHQAJghACAjQgGAAgFgCg");
	this.shape_4.setTransform(-19.2,-7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AAAAJQACgIAEgIQABgDACgBQADAAACgCQAGgCgCAHQgEAIABAHIAAABQAAABAAACAgIgHQAEgBAEgCIAAAAQAEAAAFgBAAAAJQAAgBAAgCQgDgHgFgGAgBAOQABgCAAgDAgRgBQAEgDAFgD");
	this.shape_5.setTransform(-19.1,-7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AARADQgBAAAAABQAAABAAACQgHgCgHAAQgBAAgBAAQgIABgHAEQAAgJAAgIQAAgBAAgB");
	this.shape_6.setTransform(-19.3,-6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAHQgCgHgFgFIAHgEIABAAIAJgBIgDAEIgGAQIgBgDg");
	this.shape_7.setTransform(-19.1,-7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRgBIAAgCIAJgGQAFAGADAHIAAADIAGgQIADgEIAFgCQAGgCgCAHQgEAJABAGIAAAAIAAABIAAADIgBABIAAADIgOgBIgBAAIABgFIgBAFQgJAAgHAEIAAgRg");
	this.shape_8.setTransform(-19.1,-7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("AAGgJQgIABgCAKQgCAKAJgD");
	this.shape_9.setTransform(-18,-7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("AgBAMQgJAAgHAEQAAgJAAgIQAAgBAAgBQAEgDAFgDQAEgCAEgBIAAAAQAEAAAFgBQADgBACgBQAGgCgCAHQgBABAAABQgDAIABAFIAAABQAAABAAACQgBAAAAABIAAAAQAAACAAABQgHgBgHAAQAAAAgBAAQABgDAAgCQAAgCAAgBQgDgHgFgG");
	this.shape_10.setTransform(-19.1,-7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgEACQACgKAIgBQgDAIAAAGIAAAAIAAADIAAABIgDABQgGAAACgIg");
	this.shape_11.setTransform(-18,-7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEANIgCAAIABgEIAAgEQgDgGgFgGIAIgDIAAgBIAJAAIAFgCQAGgCgCAGIgBACQgJABgCAKQgBAKAJgDIAAABIAAACIgNgBg");
	this.shape_12.setTransform(-18.6,-7.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIgEIAAgCIAJgGQAFAGACAGIABAEIgCAEQgHABgIAEIAAgRg");
	this.shape_13.setTransform(-20.1,-7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.1,1,1).p("AAOgHQAGAGgCAKQAAACAAABQgHgBgHAAQgJAAgIAEQAAgJAAgIQgBgIgEgEQAJgBAIABQAJABAGAGg");
	this.shape_14.setTransform(-19.5,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_1},{t:this.shape_14}]},6).wait(15));

	// Layer 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("AggAaQgDAEgDADQgBABgBABQgDACgEABQgKACgJgDQgBAAgBgCQgEgIABgMQAJgBAIgEQAHgFAHgFQAEgBADgEAgfgGQACgCADgDQAFgGAGgGQAGgGAHgGQACgCACgBQAFgBAHADQAHADAJAEQAHAEAJAEQAIADAGAGQAEAEACACQAEAEACAD");
	this.shape_15.setTransform(-30,-3.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AiPjOQAIgDAIgDQAJgDAJgEQAIgCAIgEQAJgDAIgEQAIgDAJgEQAIgDAJgDQAJgCAJgCQAIgDALABQAEAAACAAQAGAAAFAAQAKAAAJAAQAKAAAJAAQAKAAAKAAQAJAAAJADQAIACAIAEQAIADAIAFQAHAGAGAFQAGAGAGAGQAGAHAGAIQAFAHADAJQACAJAFAIQAEAHAAALQAAAAAAABQABADAAAEQABAAAAAAQAIAEAFAHQAGAHAGAHQAFAHADAJQADAJAAAKQAAAKgDAKQgCAIgDAIQgDAGgDAGQgBABAAABQAAABAAAAQACAIAEAGQADAGAEAGQABABAAACQACADABACQABADACACQACADACADQAEAGAEACAgSjfQAHgEAKgBQAIgBAKAAQAJAAAJAAQAJAAAKAAQAKAAAIADQAKACAIAFQAJAEAIAEQAJADAGAGQAIAGAIAFACxiJQAAAAAAABQgBAEgEAEQgHAGgHAGQgHAGgHAFQgIAGgIAFQgIAFgJAEQgIADgJADQgJADgKABQgIAAgJAAQgBgCgBACQAAAAgBAAQgFAGgLAAQgHABgIgBQgBAAgBAAQgBABgCACQgGAGgHAFQgGAEgJADQgJACgJgEQAEgEAEgEQAHgIAEgHQAEgJACgKQAAgEAAgFAAvh7QADAHgCAKQgBAJgHAFABIh1QgGgHgLABQgEAAgEAAQgGAAgFAAQgKAAgHAEQgJAEgGAFAA5hLQgEAFgHAFQgHAFgFAHQgEAFgFAHQgFAHgEAIQgEAGgEABIAAAAQAJAAAJAEQAHAEAIACQAJAEAIAFQAIAEAHAEQAJAEAIAEQAJAEAIAFQAHAEAIADQAGADAFABQADABADABQAGACAGAAQAEgHAEgHQAFgHAGgGQAFgEAEgGQAFgGAFgIQAEgHAFgHQAAgBAAAAQABgBAAAAAA6hLQAAAAgBAAQAAAAgBAAAg2DsQgBgBgBgCQgDgJAFgIQAGgIAGgBQAFgCADACQAFAGAEAIQAFAJAHADQAHAEAKgBQAJgBAKgBQAJAAAJgBQAKgBAGgGQAGgGAAgJQAAgKgJgEQgIgEgHgFQgGgEgJgEQgIgEgIgEQgIgEgHgFQgIgEgIgFQgIgFgHgFQgHgFgIgHQgFgEgHgCQgCgBgCAAQgCgCgCgEQgFgHgBgKQgCgJACgJQADgJAEgHQAFgIAGgGQAGgHAGgHQAFgHAGgHQAFgHAGgHQAFgIAHgFQAFgFAFgEQAGgFAHgEAFEiMQAEAAAEAAQACAAADAAQAAgDABgCQADgGAJADQgCADACAFQABAAAAAAQAKAAAFgGQACgDADgCAFEiMQABgBAAgBAE6iMQAFAAAFAAADYAIQAAgHgBgFQgCgJABgJQABgKAEgIQAEgIAFgIQAFgIADgJQACgIAFgIQADgGADgFQAAgBgBgBQgCgIgEgHQgCgDgCgDQgEgHAAgKQAAgKAHgEQAJgDAJAEQAIADAJACQAKACAJADQAJACAJABQABAAAAAAQADgDAIABQADgFAKACAFeiUQACgCACgBQAIgDAJADQADgDAFgDQAKgFAFAJQADAHgBAKQgBAKgKACQgDABgDgBQgCgCgCgBQgBgBgBAAQAAgBgBAAQgFAEgGADQgBABgBABQgGADgHACQgJACgJADQgHACgKADQgIAEgCAKQgBAHgBAJQgBAJgBAJQgBAJgDAJQgDAJgBAIQgCAFgCAIQgDANgFAWQgIAigBAFQAAAGgLAQQgKARgTAFQgTAFgHgCQgHgBgbgPQgagOgOgMQgBgBgBgBQgNgLgHgHQgCABgCABQgFACgFADQgGAEgHACQgJADgJADQgHADgJADQgIADgIADQgHADgHACQAAAAABAAQAIAFAJADQAHACAHAFQAHAGAFAGQAFAGAHAHQABABAAAAQABACABABQAEAGAEAHQAFAJAFAIQAEAIAFAHQAGAIAGAHQAGAHAFAGQADAEAAAGQABACACABQAGAEAGAGQADADABAFQAEAKgDAJQgDAIgIADQgIAEgJAAQgKAAgKAAQgJAAgJgDQgIgCgIgDQgJgEgJAEQgIADgHAGQgGAFgKAAQgKAAgGgCQAAAFgGABQgIACgCgHQAAAAgBAAQgJAEgEgIQAAAAgBgBQgBABgCAAQgMAAAAgLQABgLAKgBAFRiMQAGAAAHAAAABj7QgFgIgHgEQgJgFgIgEQgIgEgKgBQgLgCgHAEQgJADgHAFQgHAGgIAEQgHAEgHAGQgHAHgHAHQgHAFgGAIQgFAIgCAGAmDh2QgFgBgDgHQgCgHADgHQAGgQAPgDQgHgBgDgIQgFgMAHgJQAJgNALABQgDgBABgDQAHgOANgHQANgHAKAJQAAgFADgEQAHgIALgBQARAAAHAIQADgEAJAAQAKABADAFQAHgHALACQALABADAGQAHgGAJAIQAGAEACAHQABAAABAAQANAAABAPQAAACABABQAHAEgBAHQAEgEAIgFQAHgFAIgDQAAAAABgBAjNiJQgBgDgCgCQgGgHgKAFQgJAEACAKQABABAAAAQgKADgKgBQgCgDgDgBQABANgMAAQgDAAgCAAQAEAJgKAHQgGADgHgBQABAJgJADQgCABgDAAQAEAFgFAHAmBh2QAGABABAAAmDh2QABAAAAAAQABAAAAAAQgBgBgBABgAlRgsQgBABgBABIgBAAQgFgBgFAAQgFgBAAgHQgFABgBgDQgCgGADgFQgJgBgHgFQgEgEAAgGQABgHAFgEQgEACgGgDQgKgEABgKQAAgIAGgEAk7gSQAAABgBABQgDAHgIACQgJADgJABAkBhaQABABABABQAHAGAAAKQABAKgHgEQgGgDgEgEQAJgDgCgOIAAAAQgDAAgCAAQgIAAAAAIQgBADADADQACACACABAj4gCQAAAAgBABQgEAFgHABQAAABAAABQgDAJgLgDQgJgCgDgIQgBAAgBAAQgKAAABgKQgEABgEgCQgHgDgDgHQADgGAEgGAj4gCQABgCABgBQADgEAAgEAjvgrQAJAAAIADQACAAABABQACgFABgJQACgJAEgCQADgDAFABQAGACANABQAAAJAKgFQAFgDACgGQACgIAGgGQAFgFALABQACAAABAAQgBgEABgEQABgKADgIQADgIAHgEQAFgDAEgDAjmiBQABAEAEAAAhEiLQALgBAGAHQAFAHAFAHQAGAIgCAKQgCAJgDAJQgCADgDABAjCjZQgEABgEADAiri8QAAAEgDAFQACACgBAGQgBAEgDABQgFACAAAFQgBAMgMABQgBAKgJgBQADAEgBAHAiLhWQABAFAEAEQgFAEgEAFQgHAIgGAHQgFAIgEAIQgCAGABAEQABAAABAAQAHACAEAFQAFAHADAIAimgbQgBAAAAAAQgJgCgJgBQgKgCgJgDQgHgCgIgCAgbgyQgCACgBABQgEAFgFAEQgBABgBABQAAACAAABQAAAKgDAJQgDAIgEAIQgEAJgFAHQgGAHgGAHQgFAGgIAGQgFAFgIAEQgIADgFAEQgJAFgJAAQgJAAgKAAQgKAAgJAAQgKAAgIgFQgGgDgIgGQgHgFgGgHQgHgHgGgHQgFgIgHgGQgHgHgEgGAguECQgFgBgEgFQgGgIAGgIQABAAAAAAQAFgHAKABAg2DsQACADAFgCAgQERQAAAAAAAAQAFgCABgDAgHEEQgMAAACALQABABAAABAguECQADAAAEgBAgfEMQAAgBgBgCQgCgIAJAAACXAoQAIgJAIgMQASgIAOgIQAFgDAIAAABqAyQAGgDAFgCQAJgFAHgEAB+BEQAKgNAPgPAAPBWQgHgEgIABQgKABgJgBAAWByQAIAFAHAHQAHAGAGAIQABACADADABzDiQAHAJgKAEQgEABgFAB");
	this.shape_16.setTransform(0.7,0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACALIgJgGQAIgEgBgMIABABQAHAGAAAJQABAHgEAAIgDgBg");
	this.shape_17.setTransform(-25,-7.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC9966").s().p("AgWAGIABgCQACgEALABIgCAFIgFAAIgHAAgAgIABQACgFAJADQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAABIABAEIgMAAIACgFgAAEAGIgCAAIgBgEQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAEgDQAHgDAJADIgFAEQgEAGgJAAIgBAAgAgIABIAAAAg");
	this.shape_18.setTransform(35.5,-14.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0C0C0C").s().p("ADGCJIALgFIAQgIIAFACIABAAIADAAIAGABIABAAIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIgBAAIgGgBIgDAAIgBAAIgFgCIgMgEIgPgHIgQgJIgRgJIgQgJQgIgFgJgDIgPgGQgJgEgIAAIgBAAQAFgCADgGQAEgIAFgGIAKgNQAFgGAHgFQAGgGAFgFIAAAAIASAAQAJAAAJgDIARgHQAJgCAIgFIARgLIAOgLIANgNQAEgDACgFIAAAAQAJADAFAHIALAOQAFAIADAJQADAIAAAKQAAAKgCAJIgGAQIgGANIgBACIAAAAIABABQABAHAEAHIAHAMQgHAAgGADQgOAJgRAHIgRAVIAJgNQAEgIAGgGQAFgEAEgFIAKgPIAJgPIABgBIgBABIgJAPIgKAPQgEAFgFAEQgGAGgEAIIgJANQgOAPgLAOIgTgTgAj4AtIgKgCQgFgBAAgGQgFABgBgDQgDgHADgFQgJgBgGgFQgEgDAAgHQAAgGAFgDQgEABgGgCQgJgEAAgKQAAgJAHgEIABABIABAAIAGAAIgGAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgGgBgCgGQgDgHADgHQAGgQAPgEQgHgBgCgHQgFgNAHgJQAJgMAKAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBABgBQAHgOAMgGQAOgHAJAIQAAgFADgEQAHgIAMAAQARgBAGAJQAEgFAJABQAKAAACAGQAIgHAKABQALABAEAHQAGgGAKAHQAGAEACAHIABAAQANAAABAQQAAAAAAAAQABABAAAAQAAAAAAAAQAAABABAAQAGAFAAAHQgBAEgDAFQACACgBAGQAAAEgDABQgGACAAAEQAAANgNABQAAAJgJgBIgEgFQgGgGgKAEQgJAFADAKIAAABQgJADgKgCQgCgDgEAAQABAMgMAAIgFAAQAFAJgLAHQgFAEgIgBQACAIgJADIgGABQAFAFgGAGIgFADIgMAMIgMANIgEAEIgCACgAhvh9QAEgEAFgBQgFABgEAEgAixAKQgCgDAAgCQABgHAIgBIAEABIAAAAQADAMgKAEIgEgEg");
	this.shape_19.setTransform(-8.4,-8.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BE9670").s().p("AgZERIAAAAQAFgCABgDQgBADgFACIgBgCIAAgDQAAgIAKAAQgKAAAAAIIAAADIAAACQgJAEgEgIIAAgBIgBgDIgBAAQgCgIAIAAIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAQgIAAACAIIABAAIABADIgEABQgMAAAAgLIABAAIAAAAIABAAIAAAAIADAAIACgBIgCABIgDAAIAAAAIgBAAIAAAAIgBAAQABgLAKgBQgKABgBALQgFgBgEgFQgGgIAGgIIABAAIgCgDQgDgJAFgIQAGgIAHgBQAFgCACACQAFAGAEAIQAFAJAHADQAHAEALgBIASgCIATgBQAJgBAGgGQAHgGgBgJQAAgKgJgEIgOgJQgHgEgJgEIgPgIIgQgJIgQgJIgPgKIgPgMQgFgEgHgCIgEgBIgEgGQgFgHgBgKQgCgJACgJQADgJAEgHQAFgIAGgGIAMgOIALgOIALgOQAFgIAIgFIAKgJIANgJQAIAAAJAEIAPAGQAJAEAIAFIAPAIIARAIIARAJIAPAHIALAEIgQAJIgLAFIgEACIgKAFQgGAEgHACIgSAGIgQAGIgQAGIgOAFIABAAQAIAFAJADQAHACAHAFIAMAMIAMANIABABIACADIAIANIAKARIAKAPIAMAPIAKANQADAEAAAGIAEADQAFAEAGAGQADADACAFQAEAKgDAJQgEAIgIADQgIAEgJAAIgUAAQgJAAgJgDIgQgFQgJgEgJAEQgIADgGAGQgHAFgKAAQgJAAgHgCQAAAFgFABIgEABQgFAAgCgGgABoDvIgKACIAKgCQAFgCAAgEQAAgDgDgEQADAEAAADQAAAEgFACgAg4DtIgDABIAAAAIgEgCIAAAAIAAAAIAAgBIABAAIAAAAIAAAAQAEgFAHAAIABAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIgBAAIAAAAIgBAAQgHAAgEAFIAAAAIAAAAIgBAAIAAABIAAAAIAAAAIAEACIAAAAIADgBgAAcB+QAIAGAFAIIAEAFIgEgFQgFgIgIgGQgHgHgIgFQAIAFAHAHgAAGBWQgFgDgGAAIAAAAIAAAAIgCAAIgCAAIgDAAIgDAAIAAAAIAAAAIgGAAIgHAAIAHAAIAGAAIAAAAIAAAAIADAAIADAAIACAAIACAAIAAAAIAAAAQAGAAAFADgAgaEPIAAAAgADBBwQgHgBgbgPQgagOgOgMIgCgCQAKgNAPgPIARgVQARgIAOgIQAGgDAHAAIABADIADAFIADAFIAEAGQAFAGAEACQgEgCgFgGIgEgGIgDgFIgBgMQgBgJAAgJQABgKAFgIIAIgQQAFgIADgJQACgIAFgIIAGgLIAAgCQgDgIgEgHIgDgGQgFgHAAgKQAAgKAHgEQAJgDAJAEQAIADAKACIASAFQAJACAJABIABAAIAKAAIAIAAIAFAAIANAAIABAAQALAAAEgGIAFgFIAIgGQAKgFAFAJQADAHgBAKQAAAKgLACQgDABgDgBIgEgDIgCgBIAAgBIgMAHIgCACQgFADgIACIgSAFIgQAFQgJAEgBAKIgDAQIgCASQgBAJgDAJIgEARIgDANIgJAjIgJAnQAAAGgKAQQgLARgTAFQgPAEgHAAIgEgBgAiwBBQgKAAgHgFIgPgJIgNgMIgNgOIgLgOQgIgHgEgGIADgDQACgEAAgEQAAAEgCAEIgDADIAAABQgFAFgHABIAAACQgCAJgMgDQgJgCgDgIIgCAAQgKAAABgKQgEABgEgCQgHgDgDgHIAHgMIgHAMIgBACQgCAHgJACQgIADgJABIAFgHIgFAHIgDACIgGACQgLACgIgDIgDgBQgDgIAAgMQAJgBAIgEIAPgKIAHgGIACgCIAEgEIALgMIANgMIAFgDQAFgHgEgFIAFgBQAKgDgCgJQAHABAGgDQALgHgFgJIAFAAQAMAAgBgNQAEABABADQAKABAKgDIAAgBQgDgKAJgEQAKgFAGAHIADAFQAKABAAgKQAMgBABgMQAAgFAGgCQACgBABgEQABgGgCgCQADgFAAgEQAFgEAHgFIAPgIIABgBIAQgGIASgHIAQgGIARgHIARgHIASgGIARgEIACgBQAGgBAHAAIABAAIAAAAIABAAIACAAIAHAAIALAAIATAAIATAAIATAAQAJAAAJADIARAGQAHADAIAFIANALIAMAMIAMAPQAFAHADAJQACAJAFAIQAFAHAAALIAAABIAAAHIAAABQgBAEgEAEIgNAMIgPALIgQALQgIAFgJAEIgRAGQgJADgJABIgSAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABIgBAAQgFAGgKAAIgQAAIgCAAIgDADQgFAGgHAFQgGAEgKADQgJACgJgEIAIgIQAHgIAEgHQAEgJACgKIAAgJIAAAJQgCAKgEAJQgEAHgHAIIgIAIIgDADIgJAJIgCACIAAADQAAAKgDAJQgDAIgEAIQgEAJgFAHIgMAOQgFAGgHAGQgGAFgIAEIgNAHQgIAFgKAAIgSAAIgUAAgAivgbIACAAQAHACAEAFQAFAHADAIQgDgIgFgHQgEgFgHgCIgCAAQgBgEADgGIAJgQIAMgPIAJgJQgEgEgBgFIAAgEIAAgEQABgKADgIQAEgIAGgEIAJgGIgJAGQgGAEgEAIQgDAIgBAKIAAAEIAAAEIgDAAQgKgBgGAFQgGAGgCAIQgBAGgGADQgKAFAAgJQgNgBgFgCQgGgBgDADQgEACgCAJIgCAOIAOAEQAJADAKACIASADIABAAIAAAAgAkthJIAQAHIAQAIQAIADAHAGIAGAGIAFAIIgFgIIgGgGQgHgGgIgDIgQgIIgQgHIgDgCIgEgBIgBAAIgBAAIgDABIAAAAIAAAAIADgBIABAAIABAAIAEABIADACgAjmgoIADABIgDgBQgJgDgJAAQAJAAAJADgAkPhaQgIAAAAAIQAAADACADIAEADIAKAHQAHAEAAgKQgBgKgGgGIgDgCIAAAAIgEAAIgBAAgAguhlQgCAJgDAJQgCADgDABQADgBACgDQADgJACgJIABgFQAAgHgEgGIgLgOIAAAAQgGgGgIAAIAAAAIAAAAIgCAAIACAAIAAAAIAAAAQAIAAAGAGIAAAAIALAOQAEAGAAAHIgBAFgAAohqQgCAJgHAFQAHgFACgJIAAgHQAAgFgCgFIAIAAIACAAIAAAAIAAAAQAJAAAGAGQgGgGgJAAIAAAAIAAAAIgCAAIgIAAIgLAAIgBAAIgBAAIAAAAIAAAAQgHAAgFACIgDACQgJAEgEAFQAEgFAJgEIADgCQAFgCAHAAIAAAAIAAAAIABAAIABAAIALAAQACAFAAAFIAAAHgAjqh9QgEAAgBgEQABAEAEAAgAjUh+IAAgDQAAgFgCgDQACADAAAFIAAADgAAajlIATAAQAKAAAIADQAKACAIAFIARAIQAJADAHAGIAPALIgPgLQgHgGgJgDIgRgIQgIgFgKgCQgIgDgKAAIgTAAIgSAAIgSABQgJABgIAEQAIgEAJgBIASgBIASAAgAAmh7IAAAAgAiRjcQAHgIAHgFIANgOQAHgGAIgEQAHgEAHgGQAHgFAJgDQAHgEALACQAKABAIAEIARAJQAHAEAGAIIgHAAIgCAAIgBAAIAAAAIgBAAQgHAAgGABIgCABIgRAEIgSAGIgRAHIgRAHIgQAGIgSAHIgQAGQACgGAFgIgAgHj7IAAAAg");
	this.shape_20.setTransform(1.6,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-28.5,81.3,57.8);


(lib.rapbubble3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACQB0QABAAAwgKQAxgJAVhXQAVhVhkgvQhlgvhpAOQhrANhEArQhFArAAA/QAAA/BFAsQBEAtBiAAQAtAAAogK");
	this.shape.setTransform(3.2,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAGAlQgEgCgCgEIgCgCQgMgCgIgKIgCgCIgDgBIgEgBQgIgIgGgKIAAgBIAAgBIAAgBIAEgDIAHAFIACABIAEAGIADACIADABIAAAAIAEABQAEAGAGAEIAIADIAAAAIADABIACACIABADIAGABIASAFIABAAIAAgBQgFgHgCgHQgCgGABgGQAAgMAIgOIABgBIADgRIABgDIADAAIABABIAAAAQACAEACABIAAALQgGAUgDAUIgBAEIAEAFIAGAHIAAAEIAAAAIACABQgCAJgOACQgMgGgMgCg");
	this.shape_1.setTransform(13.2,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACCCsIgSgFIgGgCIgBgCIgCgCIgDgBIgJgDQgGgEgEgGIgEgBIAAAAIgDgBIgDgDIgEgGIgCgCIgHgEIgEADIAAABIAAABIAAABQgoALgtAAQhiAAhEgtQhFgtAAg+QAAg/BFgrQBEgrBrgOQBpgNBlAuQBkAvgVBXQgVBVgxAKIgxAJQgCgBgCgFIAAABIgBgBIgDAAIgCABQgEAIACAKIAAAAIgBACQgIAOAAANIgCACIgCADQAAABAFAFQACAIAFAHIAAABg");
	this.shape_2.setTransform(3.2,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rapbubble3, new cjs.Rectangle(-24.5,-22.9,55.4,36.9), null);


(lib.rap3dstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgCACgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape.setTransform(12.6,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgFAGQgDgCABgEQgBgDADgCQADgCACgBQAEABACACQACACABADQgBAEgCACQgCACgEAAQgCAAgDgCg");
	this.shape_1.setTransform(4.8,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgFAGQgCgCgBgEQABgDACgCQACgCADgBQADABADACQADACgBADQABAEgDACQgDACgDAAQgDAAgCgCg");
	this.shape_2.setTransform(-3,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgdA1QgHgGAAgWIAAgKIABgLIgBgDQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIACgdIgBgIIgBgIQAAgHAHgBQADAAACACIAQgDIANgBQARAAAKAEQAEACAAAEQAAAEgCACQgCACgDAAIgCAAQgLgEgLAAIgMABIgOAEIAAAHIgBAaIAegDIAQgCQADAAACACQACADAAADQAAAFgGABIgRABIgfADIAAAJIAAAJQAAAPACADQACABAJAAIAMAAIANAAIAEAAIAEgBQAHABAAAGQAAAHgGABQgGABgVAAQgVAAgGgGg");
	this.shape_3.setTransform(-9,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgjA0QgBgCAAgCIgBgRIAAgRIABgSIABgSIgBgKIAAgLQAAgEACgDQADgEAEAAIARACQAKABAFADQAcAPABAWQgBAKgJAHQgIAHgLADQAVAMAKANQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgCABQgBADgDAAQgDAAgDgDQgXgWgbgIIABANIAAAPQAAACgCACQgCACgCABQgEgBgCgCgAgVgeIABAIIgBAOIgCAMIADABIADAAQARAAAIgFQAFgBADgDQADgEAAgDQABgKgMgIQgJgIgKgBIgLgBg");
	this.shape_4.setTransform(-17.9,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgdA1QgHgGAAgWIAAgKIABgLIgBgDQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIACgdIgBgIIgBgIQAAgHAHgBQADAAACACIAQgDIANgBQARAAAKAEQAEACAAAEQAAAEgCACQgCACgDAAIgCAAQgLgEgLAAIgMABIgOAEIAAAHIgBAaIAegDIAQgCQADAAACACQACADAAADQAAAFgGABIgRABIgfADIAAAJIAAAJQAAAPACADQACABAJAAIAMAAIANAAIAEAAIAEgBQAHABAAAGQAAAHgGABQgGABgVAAQgVAAgGgGg");
	this.shape_5.setTransform(-26.8,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAQA2QgDgCAAgDIgEgOIgGgdIgDgdQgGAXgIAPQgIASgCAKIABADQAAAEgDABQgDACgDAAQgJAAAAgIIgCgJIgIghQgEgRgLggIgBgCQAAgHAIAAQAEAAADAFIAFAOIAIAfIAHAdQAHgRAHgYIAHgVQAGgPAFAAQAFAAACAFQADAGACAWIAFAaIAGAbQAJgWAOglIADgMQACgJADgFQADgDAEAAQAHAAAAAHIgCAHIgDAHIgEANIgUAwIgKAYQgDAFgFAAQgDAAgCgCg");
	this.shape_6.setTransform(-38.5,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgHAPQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAEgKIAFgMQABgEADAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIgKAWQgBAEgEAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_7.setTransform(-52,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgbAwQgNgGAAgKQAAgDACgCQACgCADAAQADAAADAEQAEAFACACQAGAEALAAQAKAAAJgFQAMgGAAgKQAAgJgKgFQgIgFgMAAQgKAAgIgEQgKgFAAgLQAAgMAOgKQANgKAOAAQAGAAAJACQALADAAAFQAAAGgGAAIgKgBIgLgCQgJAAgIAGQgIAFAAAIQAAAFALADIANABQAQABAJAJQAIAHAAAMQAAAQgPAKQgNAJgRAAQgMAAgLgFg");
	this.shape_8.setTransform(-59.2,17.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAYAkIgEgWIgTAEIgRADIgMAbQgCAEgEAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAQgCgCAAgDQAAgDAKgWIgBgFQAAgFAHgCIAUghQAPgaAEAAQAGAAACAIIAEAXIAKAvIAEALIACAHQAAADgCACQgCACgDAAQgGAAgFgQgAgIAFIAYgFIgFgag");
	this.shape_9.setTransform(-69.5,17.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAQA2QgDgCAAgDIgEgOIgGgdIgDgdQgGAXgIAPQgIASgCAKIABADQAAAEgDABQgDACgDAAQgJAAAAgIIgCgJIgIghQgEgRgLggIgBgCQAAgHAIAAQAEAAADAFIAFAOIAIAfIAHAdQAHgRAHgYIAHgVQAGgPAFAAQAFAAACAFQADAGACAWIAFAaIAGAbQAJgWAOglIADgMQACgJADgFQADgDAEAAQAHAAAAAHIgCAHIgDAHIgEANIgUAwIgKAYQgDAFgFAAQgDAAgCgCg");
	this.shape_10.setTransform(-81.7,17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgHAPQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAEgKIAFgMQABgEADAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIgKAWQgBAEgEAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_11.setTransform(-95.2,23);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgdA1QgHgGAAgWIAAgKIABgLIgBgDQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIACgdIgBgIIgBgIQAAgHAHgBQADAAACACIAQgDIANgBQARAAAKAEQAEACAAAEQAAAEgCACQgCACgDAAIgCAAQgLgEgLAAIgMABIgOAEIAAAHIgBAaIAegDIAQgCQADAAACACQACADAAADQAAAFgGABIgRABIgfADIAAAJIAAAJQAAAPACADQACABAJAAIAMAAIANAAIAEAAIAEgBQAHABAAAGQAAAHgGABQgGABgVAAQgVAAgGgGg");
	this.shape_12.setTransform(-101.8,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgiA0QgDgCAAgCIAAgRIgBgRIACgSIACgSIgCgKIAAgLQAAgEADgDQACgEAEAAIARACQAJABAGADQAdAPgBAWQABAKgLAHQgHAHgMADQAWAMALANQAAABAAAAQABABAAAAQAAABAAAAQABABAAABQAAADgCABQgDADgDAAQgCAAgDgDQgWgWgbgIIAAANIABAPQAAACgCACQgCACgEABQgCgBgCgCgAgVgeIAAAIIgBAOIgBAMIADABIADAAQARAAAIgFQAFgBACgDQAFgEAAgDQAAgKgMgIQgIgIgMgBIgKgBg");
	this.shape_13.setTransform(-110.7,17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAYAkIgEgWIgTAEIgRADIgMAbQgCAEgEAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAQgCgCAAgDQAAgDAKgWIgBgFQAAgFAHgCIAUghQAPgaAEAAQAGAAACAIIAEAXIAKAvIAEALIACAHQAAADgCACQgCACgDAAQgGAAgFgQgAgIAFIAYgFIgFgag");
	this.shape_14.setTransform(-120.6,17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgIAPQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIAFgMIAFgMQACgDADAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAIgKAXQAAAEgDAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_15.setTransform(-5.6,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgbAwQgNgGAAgKQAAgDACgCQACgCADAAQADAAADAEQAEAFACACQAGAEALAAQAKAAAJgFQAMgGAAgKQAAgJgKgFQgIgFgMAAQgKAAgIgEQgKgFAAgLQAAgMAOgKQANgKAOAAQAGAAAJACQALADAAAFQAAAGgGAAIgKgBIgLgCQgJAAgIAGQgIAFAAAIQAAAFALADIANABQAQABAJAJQAIAHAAAMQAAAQgPAKQgNAJgRAAQgMAAgLgFg");
	this.shape_16.setTransform(-12.8,-4.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgeAzQgCgCAAgDQAAgDACgCQACgCADAAIAPgBIABgOIgBgLIAAgLIACgoIgJAAIgJABQgDAAgCgCQgCgCAAgDQAAgHAGAAIAVgBQANAAAVADQAGABAAAGQAAADgCADQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgLAAIgLgCIgCAmIAAALIABAMIgBAMIAWAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgMAAIgLAAIgNABIgOACQgDAAgCgCg");
	this.shape_17.setTransform(-21.7,-4.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgHAPQgBAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIAFgMIAFgMQABgDADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAABAAAAQAAABAAAAQABABAAAAIgKAXQgBAEgEAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_18.setTransform(-31.4,1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAqA0IgDgLIgDgMIgJgwIgOApIgEANIgFANQgDAFgEAAQgEAAgDgEIgCgIIgCgHQgHgZgFgbIgDANIgJAjIgDATQgCAGgFAAQgEAAgBgDQgCgCAAgDQAAgLAFgRIAHgbIAEgWQADgPAEgFQACgEAFAAQAEAAACAFQADAGADATQAEAXAHAaQAJgaAIgdIACgKIAEgKQACgFAFAAQAGAAADAMIACAQQAEAeAHAWIADAMIADAMQAAADgCACQgDACgDAAQgDAAgDgEg");
	this.shape_19.setTransform(-39.9,-4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AAYAkIgEgWIgTAEIgRADIgMAbQgCAEgEAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQgCgCAAgDQAAgDAKgWIgBgFQAAgFAHgCIAUghQAPgaAEAAQAGAAACAIIAEAXIAKAvIAEALIACAHQAAADgCACQgCACgDAAQgGAAgFgQgAgIAFIAYgFIgFgag");
	this.shape_20.setTransform(-51.6,-4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgIAPQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIAEgMIAFgMQABgDAEAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAIgKAXQAAAEgDAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_21.setTransform(-62.5,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgdA1QgHgGAAgWIAAgKIABgMIgBgDQAAAAAAAAQAAAAAAgBQAAAAABgBQAAgBAAAAIACgeIgBgHIgBgHQAAgJAHABQADAAACABIAQgDIANgBQARAAAKAEQAEACAAAFQAAACgCACQgCADgDAAIgCgBQgLgDgLAAIgMABIgOAEIAAAGIgBAbIAegDIAQgBQADAAACABQACADAAADQAAAFgGABIgRACIgfADIAAAJIAAAIQAAAPACADQACABAJABIAMAAIANgBIAEAAIAEAAQAHgBAAAIQAAAFgGABQgGACgVAAQgVAAgGgGg");
	this.shape_22.setTransform(-69.1,-4.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgfA1QgDgDAAgDIAAgUIABgbIACgdIABgTQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQAJgDAMAAQALAAAMAIQANAKAAAOQAAASgOAJQAKAEAFAGQAFAFAAAHQAAAIgJAIQgGAFgHADQgOAGgZAAQgDAAgCgDgAgUAcIAAAOQASgBAKgEQAFgCAFgEQAEgEAAgBQAAgEgJgEIgNgEIgGgCIgDABIgDAAIgIgBIAAAQgAgRgoIgBAMIgBAaIALABQAJgBAHgFQAHgGAAgKQAAgHgHgFQgIgGgHAAIgKABg");
	this.shape_23.setTransform(-77.9,-4.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHAPQgBAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIAFgMIAFgMQABgDADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAABAAAAQAAABAAAAQABABAAAAIgKAXQgBAEgEAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_24.setTransform(-88.5,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAdQgJgJgBgQQAAgPAIgMQAKgOAQAAQAOAAAHANQAGAKAAAOQAAAPgIALQgJAMgOAAQgLAAgJgJgAgLgNQgFAIAAAJQAAAKAGAFQAEAFAGAAQAHAAAFgFQAGgGAAgKQABgagQAAIgBAAQgIAAgFAKg");
	this.shape_25.setTransform(-94.8,-2.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgOA1QgCgCAAgDQgBgCAHgNIAIgPQgLgQgFgIQgDgIgHgLIgMgSIAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQADgCADAAQADAAACADIAGAJIAJAPIAJAPQACAGAGAJIARgmIAHgOQABgFAFAAQADAAACACQADACgBADQAAADgDAHIgFAIIgLAdIgOAcIgIAQIgDAHQgDAEgDAAQgDAAgCgCg");
	this.shape_26.setTransform(-103,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rap3dstill, new cjs.Rectangle(-127.6,-16.6,143.8,44.9), null);


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


(lib.GrassScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIMl1IAAgWIAAgIIwXAAIAAMnIBKAAICeAAIAAAAIBSAAIBRAAIAHAAIARAAIB1AAIAWAAIAsAAQAPAAAOAAIAqAAQALAAAIAAIAJAAIA/AAIDmAAIA1AAIAAgGIAAgIIAAlsIAAmLg");
	this.shape.setTransform(-0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("ADpCSIgRgCIgQgBIgMAAIgLgBIA+AAIg+AAIgKAAQgIgCgKACIAAAAIgqAAQAGgDgYgCIgGADIgFACIgsAAIgGgCQgEgCgMADIgBABIAAAAIABAAIh1AAIgNgBIhcABIhSAAQANgDgUgGQgCgDAAgDIgSAAIAAAAIAAgCIAAgCIABgCIACgDIAAgCIgCgCIgBgKIgBgCIgLgUIAAgBIAAgBIAAgBIgBgBIAAgDIgBgTQgGgGgDgIIgNgDIAAgCIAAgCIADgCIABgCIAAgEIAAgTIgKgJIgSgCIAAgDQABgHgBgGIgCgCIAAAAIACgBIAAgBIgRgFQgGgBgEgEIAAgCIgCgEIgPAAIgHAGIAAADIAAAIIgHAAQgCgFAAgFIAAAAIAAgCQAAgEgBgEIgLABIgKABIgBAAIAAAAIgCAAIgBgBQgLgCgGgNIgDAAIgXgCIAAgBIgCgCIgCgBIgCABIAAACIgHAAIAAg4IAAgDIABgTIAFAAIACACIARACIABAAQAHAAAHgBIAGAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIABgBIAhAAIACAAIAKgCIACgBIAEAAQAEAAAEgDIAAAAIABAAIAVAAIAEABIALABIAKABQAFACAEAAIALABIAOACQANACAPABIAnAEIAHABQAKACAIAAQADACAFAAIAEAAQAEAEAHAAIAUABIAPABIAYACIAbACIAAAAIAGAAIAAAAIAHAAIABAAIABABIAPACIAAAAIADAAIABAAIABAAIAeAEIAEAAIALABIAAAAIABAAIAKAAIACAAIAHAAIABAAIBQgCIABAAIAAABIAJgBIAIgBIABAAIAegFIAVgCIABABIAEAAIAAAAIABgCIAAAAQAhgDAiAEQAJAJANgDQAJAPAHAPQAOADANAGIAMAHQAhAVAnAAQAyABAnAZQAaAEAZgBIAAABQALACALgEIADAAIAAgBIAGgCIAAgBIABAAQgBANABANIABAAIAAAaIAAADIAAACIgBAAIAABBIABAAIADgKQACAFACAcIAAAIQgCAFgJgDIAAgBQgUAEgWABIjnAAIADABIACABQAHACgHAAIgLAAgAgHCGIAAAAIgBAAgAIDBtIAAgBIAAgBIAAACgAjuBeIAAgBIgBAAIABABgAh0gyIAAACIAAgCgAiBCOIAHAAIgSACIgWACIAhgEgAAiCOIAsAAQgJAEgNAAQgMAAgKgEgAh6COgAiBCOIAJgBIgCABgAmriPIAAAAIAAAAIgFABIgHABIgHAAIATgCgAmliQIAGgBIAAAAIgDAAIgDABg");
	this.shape_1.setTransform(-0.1,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("Am+C1ICeAAQgMACgnAAQgoAAhDgCgAkgC1IieAAIhJAAIACgQIAAi5IAHAAQgCAEADAEIAdAEIABAAIAAACIACACIAJAIIAXAAIADAAQAAAFABADIAAADQABAEACAEIATgBIAAgEIAAgCIAAgIIACgCQAJgEgBAIQACADAFADQAJAEAKgCQACAMAAAMIAWADIADACIABACIABAEIAAAOIgCACIgBACIAAAFIAAAGIACACIACACIALAEIABACIAFAGIAAAEIABAPIgBABQAAABAAAAQAAABAAABQAAAAAAAAQABABAAAAIAAABIABABIABACQACACADABIACAEIAFAIIABACIACAEIAAAKQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABABIAAABIAAACIgBABIgBAAIAAACIABABIAAAAIADAAIABgBIAAAAIAVAFQAUAGgNADgAn4CmIAAAAIALgBIgHAAIgEABgAkgC1gAk7ClIAAAAIAAAAgAG/glIAAgEQgGgFgEgHIgXgBQgGgEgEgGQgJgEgJADQgFADgBAFIgGACIgBgCIgEgEQgSgHgMANIgSAAIAAgDQABgJgCgIIgDgCIgMgBIgBgBIgBgBQgTADgNgIIAAgCQABgJgCgJIgEgEIAAgCIAAgCIAAgIIAIAIIACABQgGgHgEgHIAAgOIgCgCIgBgCIAAgEIgCgDIgBgBIAAgBIABAAQAOgBAHAHIABABQAPAQgGgaQgBgEACgDQADgBADgDIABgBIAEABIABAAQAIACACAJIACAAQAEACAFgJIABgCQAHgHAIgGIABgCQALgFAFAIIABACQgEAPALgCIAAgBIAAgCQAHgGgBgCIALABIABATIABAAIAAARIAAACIAAACQACAHgEABQgCAKAEADIADABIAAgCIANACIABACQAMASgIgUIgCAAIAAgCIAAgDIAAgCIAAgRIACAAQADgOgFgIIgCAAIAAgCIAAgKIATAAQAEAOAFgQIABgCQAFgBABgHIABAAQAMAAgBAMIABAAQAHARAIgOIACAAQAHgJAPgBIACAAIACAAIABACIAMAKIANAAIAAADIAAACIAAAkIAAACIAAAwIgFgFIgOABIgRAQIgBACQAAAJgDAIQgHAAAAAGIAAABIgaABIAAgEg");
	this.shape_2.setTransform(-0.5,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336600").s().p("ACbCAIg0gFQgEgGgHgDQgngOgqgEQgMgBgMgEQgqgOgogTIgBgEIAAgCIgCgCIgMgPIACAAIACgEQADgHgBgHIAAgBIACgCQARgDALAJQANARAagEIABABIABABIANACIAAADQgBAKACAJIAZAAQADgEAFgCIASACIABACIACACIAJABIAGgEQACgFAEgDIAEgBIAQAMIAVACQAEADADAFIABACQgBAFACAFIAjgBIACgCQALgMACgRIANgMIAJAAIAAABIAEAFIAAACQgBADACADIACAAIAAAZIAAACIAAAHIAAADIgCAAQAAAPABAQIABAAIAAAFIAAACIgCAAIAAACIAAAAIgHgEQgKABgKADgAiHAXQgZgCgYACQAEgEACgEIAAgCIAAgEIABgCIACgCIAAgCIAAgCIABgBIADgFQAGADAHACIgEABQAGACAGgDQAIABAIgBIAAgCIAAgFIABAAIADAAQABAGALgBIACgBQAIgDAAgKIAKAAIAAgCIACgEIAAgCIAAgNIAOgBIAEAJQADAMABAMQgFAFABAJQgLgEgPACIgCABIAAABQgDACgCAEIAAACQABAGgCAEIgCACIgFAAQgJAAgHgGgAiAgKIAAgCIAFgDIAMgBQgDAFgEAEIAAACIgDAAIgBAAQgFAAgBgFgAg1gsQgHgHgOAAQALgEANAAIABgCIADgEIAAgCIAAgKIACgCIAAgCIABgCIAAgEIAdgDQABgEgBgEQgBgIAEgHQAIgDAHgCIABgCIAAgEIAAAAIADACIACAAQAIgBAGgEIABgCIACAAQANgFAFAIIAGgBIAAABIAAACIAAAVIAAADIAAAaIAAADIAAABIAAABIgCAAIgLAAQgBgCgIAEIABgCQABgGgEgBIgBgCQgHgIgLAFIAAACIgCABQgJAEgHAHIAAADIgDAAIgCACIAAADIgCgBIgCgCQgEgFgHgCIgCAAQgHABgFAEIAAACIgBABQgDAEgDACIAAAFIAAADIgCgBgACrg3IgMgMIgCAAQgOgGgNAKIAAADIgBAAQgIAKgDgPIAAgCQgDgJgLgBIAAACIgCABIgIAEIAAADIgBAAQgCAEgEADIgTAAIAAgJIAAgPQAEAAgCgFIAAgCIAAgDIAAgGIAAgIQADgDAAgEIAAAAIAHAAQAAAFADAAQADAAAFgEIABgBQADgDAGAAIADAAQALgDACAIIABAAQAJAhAegZIACgBQAFAAACADIAAACQAIAJABgBIAKAAIAAAGIAAADIAAAdIAAAAg");
	this.shape_3.setTransform(33,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996633").s().p("AgQCdQAEgNgCgTIAAgCIAAgCIAAgHIAAgTIAAgDIAAgFIAAgCIAAgKIAAgcIAAgDIAAgDIAAgBIAAgPIAAgCIAAgDQAFgCgCgHIAAgDQADgDAAgFIAAAAIAAgCIAAgKIAAgMIAAAAIAAgBQAAgMgCgKIgEgJIAAACIAAADIgCAAIgBAAQgIgHgKgCIAAgBIAAgBIACgBIgDgFQgIgJgMgFIgBgCQgKgHgGgLIgBgBIgIgKIABgBQAPAHAMAOIAVAVIAAAAIACACIALAIIADAHIADgBIABgBIAAAAIAAgBIAGACIADADQgCACgBADIABABIACAAIACgBIACgCIACgFIADgCQACgBABgDIABgCIAIgKIAFgFIAAgDIAAgBIABgBQAMgGALgMIACgBIAHgEIARgOIACAAIABgCIACgEIAAgBIACgDIAAgCIACAAIAAAFIAAACIABAEIgEABIgGAGIgFACIgDAEIgDABIgEAFQgIAMgLALIAAABIgBADIgKABIAAABIgBADIgEADIgOANIAAABIgGAGQgCAFABAEQgBAHABAGIgCABIAAAAIABATIAAAAIAAAQIAAACIAAAEIAAADIgBAAIAAARIAAACIAAABIAAAHIAAACIAAAOIAAABIAAACIgDAAIAAAJIAAACIAAAMIAAADIgCAAIAAATIAAADQAAAJABAJIABABQgBAPADALgAAEgRIgCAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABAAIABAAIgBgBIAAgCIAAgBIABABIACAAIAAAAIABgBIAAABIACABIACAAIABABIAAgBIABgBIACAAIAEgBIAAAAIABAAIAIgDIABgCIAVgGIABgBQAGABAEgDIACAAQAHgCAJABIAEAAIAAADIgCgCIgWAGIgKAFIgbAHIgBABIgGABIgBAAIgBABIAAAAIgDAAIgEgBIAAABIgBABIgBAAgAgRhCQgIgNgBgQIABgEIAAgDIAAgDIAAgOIAAgBIAAgCIADACIADAAIABAAIAAgBIgFgHIAFgPIAAgCIAHgNIAJAEQgEALgFALIAAACIAAACIAAACQACAGgFAAIAAACIgCAAIAAAQIAAADIgCAAIAAAHIAAACIAEAXIAAAAIAAADIgDgCg");
	this.shape_4.setTransform(40,-4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF00").s().p("AAvB0IgDgCIgBgCQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgCgBIgGgBIgDgEIgBgBIAAgBIgBgIIATgDQAIgEALgBQAIgHALgBIABAAIALgFIAAgBIAAgDQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgIgHgXAFIAAACIgBABQgCADgEgBIgCAAQgIADgJACIAAACIgDAAIgPAHIgCAAIAAAAIgBAAIgCAAIAAgEIAAgKIABgBIABgCIAAgBIAAgBIACgBIABgBIAAgBIABgCIAAgCQAJgJAKgHIAAgBIABgBQAGgBAFgDQAAgDADgCQAHgIAGgJIAEgCIAAgBIACgEQAKgIALgGQAEADAIgEIADAAIABgBQALgHAAgBQgBgCgOAGIAAACIgDAAIgFABIAAgCIgBgBIgDgBIAAABIAAgEIACgCIABgBIABgBQAEgPgNALIgCAAIgKAFIAAAAIgCAAQgJAAABgKIADgBIAAgBIAAgDQAGgHAIgGIAAgBIAAgDQgCgIgFAIIAAADIgBAAQgDAHgGAEIgCABIAAACIAAADQgDAPANgBIACAAIABAAIAAAAIADAAIABACIAAAAIgCABQgMAKgPAIIAAACIgBABIgSAOIAAAAIAAgBIgFAAIAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABIABACIgBABIgBACIgFAEIAAAAIABAAIABABIgLAQIgCABIgDACIAAABIAAACIgBABIgCABIgDgDQABgEgEgCIgDgCIAAgDQABACgBgNIAAgCIAAgCIAAgPIAAgCIAAgDQAEAAgCgHIAAgBIAAgDIAAgCQAEAAgBgFIAAgCIAAgBQAHgTAEgUIABgDIACgMIgCAAIgDAPIgDAJIgJgFIABgDQAAgFgCgFQgCgFgFAUIAAADIAAACIgBACIgGATQgEgCgCgDQgGgBgCgGIgCgBIAAAAIgBgBIgFgKIgCgBIgBABQAAAFACAEQACAEAFADQAHAIAIAFIAAADIAAACIAAADIgCAAQgCARAEADIAAASIABABIAAABIgCACIgMgMQgSgTgUgMIgBgBQgEgCgCgDIgDgBIAAACQACAFAGAEIgBABIgKgJIgBgCQgEgHgKgBIAHAPIAAACQAKAhAiALIACABIABABIABABQAGAEAGADIADAAIAOAMIADAAQAKAKgDAaIgBADIAAAJIgDgBIAAAAIgCgCIgFgBIAAAAIgCgCIgBAAIgBABIAAABIgBADIAAABQgDAFgGABIgDAAIgIgDIgBgBIgBgBIAAgBQANgPgQAJIAAAAIgCABIgCABIAAABIgBABIAAACIgCABIgCACIgIAAIgBgBIAAgDQAAgGgFgDIAAgBIgBgDIgBgPIAAgCIgCABIgBABIAAACQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgCABIgNABIgIgGIAAgBIAAgGQAEgKgCgMIAAgCIgPgBIAAgGIAAgSIAAgCIACgEQABgEAAgFIAAgCIgCgBIgBgBQgLAAgKgDIAAAAIAAgDIABgLIABgBIAEgBIABgBIAAgKIAAgZIAAgHIABgBIAIAAQAHAFAIgBIACAMIgDABIgCAAIAAABIAGgCIAEgDIgHgJIAAAAQABgDAAgEQgBgLADgKIAAgCIAHgGIABgBQAJABAJADIABAAIABgEIgBgGIAAgBIACgBIAAgCIAAgCIADgEIABgBIAFAAIACABIABABIAHAAIABAAIAAgDIABgGIAAgBIAeAAIAHAFIAAAAIgBADIgBABIAEABIAAAFIAAAEIADAAIAAgBQABgHAAgHIAAgBIABgBIAOAAIAAABIADAJIAAABIACABIABABIAFAAIADgCIACgBIABgBIAAgBQAFgEAGAAIABAAIACABIABABIACAEIABABIABAKIAAACIABABIABABIAGAAIABAAIAFgEIABgBQAGgDAIABIAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAACIABABIABABIAAAFIABABIAgABIAAABIAAARIAAALQACADADABIAAARQAAAHADAGIAAABIAEAEIgBACIgBACQgIACgDAGIgBABQAAAIAGAHIABABIABABIAAABIABABIABABIAAABIAAAJIAAABQgEAQACASQACAMgMACIAAAQQABADgBADQgOADgNgBIAAACIAAACIgCABIgBABIgHAAIgDgCIgCgCIgKABIAAABIAAABIAAABIgBABIgBACIAAABIAAABIgCABIgBABIgIAAgAgfgOIADABIgJgIIgIgJIgGgHQACATASAEgAAegrIACABQALACAGgEIACAAQAGgBADgDQADgDABgFIABgGQgEAGgMAHIAAACIgCAAIgDAAIgCAAQgNAEABgLIABgBQANgSgQAOIAAADIAAACIgDAAQAAAIAFADgAhZgsIAPgDIgHAAIgIADg");
	this.shape_5.setTransform(38.7,-15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AlGGMIgBAAIgBgBIABgBIAAgBIABgBIABgCIgBgBIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgKIgBgEIgBgCIgFgIIgCgEQgDAAgCgDIgBgCIAAgBIgBAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAIABgCIgBgOIAAgFIgFgGIgBgCIgLgEIgCgCIgCgCIAAgGIAAgFIABgCIABgBIAAgPIAAgEIgCgCIgCgCIgWgDQAAgMgCgLQgKACgKgFQgEgDgDgDQACgIgJAEIgCACIAAAIIAAACIgBAFIgSAAQgCgEgBgEIAAgCQgCgEABgEIgDgBIgXAAIgJgIIgCgCIAAgDIgCAAIgdgEQgCgDABgFIABgCIABgBIADABIACACIAAABIAXACIADAAQAGAMALADIABAAIACAAIAAAAIABAAIAKAAIAKgBQACADAAAFIAAACIAAAAQAAAFACAEIAHAAIAAgIIAAgCIAGgGIAQgBIABAFIAAACQAFADAGACIAQAFIAAABIgBABIAAAAIABACQABAGAAAHIAAACIASADIAJAKIAAATIAAADIgBACIgCADIAAACIAAACIANACQADAJAGAGIABATIgBADIABAAIABACIAAABIAAABIALAUIABACIABAJIABADIAAACIgBADIgBABIAAADIAAACIAAAAIgBABIAAAAIgBABIgDAAgAIAF2IABABIAAABIgBgCgAIBFzIgBhAIACAAIAAgCIAAgDIAAgaIgBAAQgBgOAAgNIAAgCIACAAIAAgDIAAgEIgBAAQgBgQAAgQIACAAIAAgCIAAgHIAAgCIAAgZIgCgBQgCgCABgEIAAgCIgEgEIAAgBIgJAAIgNAMQgCARgLAMIgCACIgjAAQgCgEABgGIgBgCQgDgEgEgDIgVgDIgQgLIgEABQgEADgCAFIgGADIgJgBIgCgBIgBgCIgSgDQgFADgDADIgaAAQgCgIABgKIAAgDIgNgDIgBgBIgBgBQgaAFgNgRQgLgJgRADIgCACIAAAAQABAIgDAHIgCADIgCABIAMAPIACACIAAACIABAEQAoATAqAOQAMAEANABQAqAEAnAOQAHADAEAFIA0AGIABAAQAKgDAKgBIAHAEIgBABIgFACIAAAAIgDABQgMADgKgBIAAgBQgZABgagEQgngZgygBQgnAAghgVIgMgHQgNgGgOgDQgIgQgJgOQgMADgJgJQgigEghADIAAAAIgBABIgBAAIgDAAIgBgBIgWADIgdAEIgBABIgIAAIgJABIAAAAIgBAAIhQACIgBAAIgHAAIgCAAIgKAAIgBAAIAAgBIgLAAIgEAAIgegEIgBAAIgBAAIgEgBIgOgCIgBAAIgCgBIgGAAIgGAAIgbgBIgYgCIgPgBIgUgBQgHAAgEgEIgEAAQgFAAgDgCQgJAAgJgCIgHgCIgngDQgPgBgOgCIgNgCIgLgBQgFAAgEgCIgKgCIgMAAIgDgBIgVAAIgBAAIgBAAQgDADgEgBIgFABIgBAAIgKACIgCAAIghABIgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgFAAQgHABgIAAIAAgBIgRgBIgCgCIATAAIACgBQAJAAAJgCIADAAIAMgBIAIAAIAHAAIAHAAIAGgBIAGgBIAAAAIAGgBIADgBIACgBIAAAAIAAAAIABgBIADgBIAGAAIABAAIAOABIACAAIADAAIAXAEQAEACAEAAQANgBANADIAXAEIAxAEIAFAAQAHACAIAAIABAAQAEADAGAAQADACAEABIAYABIAHAAIAHABIAXABIAJAAIAOABIAFABIAOABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIANACIAFAAIABABQAQAAAPADIACAAIAJABIANAAIAHAAIBSgCIABAAIAAgBIBAgDIAFgCIAAgFIAAgCQAKgEALgCIABgBIABgCIABgFIAAgCIACgCIABgEIAAgCIAGgIIABgCQALACAMADIAAAAIgCgBQgDgDAAgGIAIgFIACAAIAGADIAAgBIABgCIATAAIADgFIACAAIAAgCQALgTgGAVIAAADIgDAAIAAACIgBAAIAGAAIABAAIADAAQAEgGgBgJIgBgFIAUgFIAAgKIABgBIAOgCQADADACgEIAAAAIAKgCQgBgJACgHQACgHAEgFIAagCQgDgRANgHIAJgDIAAgBIACgCIAAgBIADABIACADIAAAEIgBACQgIACgIADQgEAGABAJQABADgBAFIgdACIAAAFIgBACIAAABIgCACIAAALIAAACIgDAEIgBABQgNABgLAEQAOAAAHAHIACABIAAgDIAAgFQADgCADgFIABAAIAAgCQAFgEAHgBIACAAQAHACAEAFIACACIACAAIAAgCIACgCIADAAIAAgDQAHgHAKgFIACAAIAAgCQALgFAHAHIABACQAEABgBAHIgBACQAIgEABACQAAABgGAGIAAACIAAABQgLACAEgOIgBgCQgFgJgLAFIgBACQgJAGgHAHIAAACQgFAJgFgCIgBAAQgCgJgIgCIgBAAIgEAAIgCAAQgCADgEABQgCADABAEQAHAbgPgRIgCAAQgGgIgOABIgBAAIAAABIABACIABACIABAEIAAACIACACIABAOQAEAIAGAGIgCgBIgIgIIAAAIIAAACIAAACIAEAEQACAJgBAKIAAABQANAIATgDIABABIABABIAMABIACACQADAIgBAJIAAADIASAAQALgMATAGIADAEIABACIAHgCQABgFAFgDQAJgDAJAEQAEAHAGADIAXABQADAHAGAGIABADIAAAEIAagBIAAgBQAAgGAGAAQAEgIAAgIIABgCIARgRIANgBIAGAGIAAgxIAAgCIAAgkIAAgCIAAgCIAAgBIAAgdIAAgCIAAgGIAAgwIADAAIAAgDIAAgeIAAgDIAAgdIAAgCIAAgUIAAgCIAAgHIAAgsQgDAGgGACIgBAAIAAABIAAAAIgCADIABACQADAIAGAGIAAABIAAAPIAAABIgBABIgCABIABAVQABAJgDALIgBABQgEACgEABQABADAAADQABAJgCAIQgMAHgPgFIAAABIgDAFIAAAAIgNABIgBgBIgDgDIgFAAIAAACIAAABIgDAEIgBACIgEACIAAAAIgMAAIgBgCIgGgFIAAAAIgGgBIgBgBQgCgEgEgBQgBgCAAgEIAAgEQgGACgBgFIABgCIABAAIABgBIAEAAIAAAAIADAAIABAAIABgBIABAAIAFgBIABgBIAcgHIAJgFIAWgGIADACIAAABIgMAFIgBAAQgLABgIAHQgKABgJAEIgSADIAAAIIAAABIABABIADAEIAGABIACABQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAIABABIADACIAIAAIABgBIACAAIAAgCIAAgBIABgCIABgBIAAgBIAAgBIABgBIAJAAIACABIADACIAHAAIABgBIACgBIAAgBIAAgDQAOABANgDQABgDAAgDIgBgQQANgCgCgMQgDgSAFgPIAAgBIAAgJIgBgCIgBgBIAAgBIAAgBIgCgBIgBgBQgGgHABgIIABgCQADgGAHgCIAAAAIABgBIABgDIgDgEIAAgBQgEgFAAgHIABgSQgEgBgBgDIAAgLIAAgRIAAgBIghgBIgBgBIAAgFIgBgBIgBgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBAAQgHgBgHADIgBABIgFAEIgBAAIgFAAIgBgBIgCgBIAAgBIgBgKIgBgBIgCgFIgBgBIgCgBIgBAAQgGAAgEAEIgBACIgBABIgCABIgCABIgGAAIgBAAIgCgCIAAgBIgDgJIAAAAIgOgBIgCABIAAACQABAGgBAHIgBABIgCAAIgBgEIAAgFIgEgBIABgBIABgCIAAgBIgHgFIgeAAIAAABIgBAGIAAADIgBAAIgHAAIgBgBIgBgBIgGAAIgBABIgCAEIAAACIgBACIgBABIAAABIAAAGIgBAEIAAAAQgJgDgKgBIgBABIgGAHIgBABQgCAKAAALQABAEgCADIAAAAQgIABgGgEIgJAAIgBABIAAAGIAAAZIAAAKIgBABIgEACIAAABIgBALIAAADIAAABQAKACAKAAIABABIACABIAAACQABAFgCAEIgCAFIAAABIAAASIAAAHIAPABIABABQACAMgEAKIgBAGIABABIAHAGIAOAAIABgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIABgBIACAAIABABIABAPIAAADIABABQAEAEAAAFIAAADIABABIAJABIACgDIABgBIAAgCIACgBIAAgBIABgBIACAAIABAAQAPgKgNAPIABABIAAABIABABIAIAEIADAAQAGgCADgFIAAgBIABgCIAAgCIABAAIACAAIABABIABABIAEABIACABIABAAIADABIAAgJIAAgCQAEgagLgKIgCgBIgPgLIgCgBQgHgCgGgFIgBAAIgBgCIgCgBQghgKgLgjIAAgCIgHgOQAKAAAEAHIABACIAKAKIAIAKIABABQAHALAJAHIABACQANAFAHAJIAEAFIgCABIgBABIAAABQALACAHAHIABAAIADAAIAAgDIAAgCIADAJQADAKAAAMIAAABIAAAAIgBAMIAAAKIAAACIAAABQAAAFgDADIAAADQACAHgEACIAAADIAAACIAAAPIAAABIAAACIAAADIAAAcIAAAKIAAACIAAAFIAAADIAAASIAAAIIAAACIAAACQACATgEANIgBACIgCgBQgEgDACgKQAEgBgCgGIAAgDIAAgCIAAgRIgBAAIgBgTIACAAIAAgBIAAgBIAAgDIAAgaIAAgDIAAgVIAAgBIAAgBIAAgJIACgDIAAgCIAAAAIAAgCIAAgUIgCAAIgBgBIgBgCIgFAAIgBACQgKALgPgHIgBgBIgBgBIgBgBIgCACIgBABIgBAAIgFAAIgDACQAGAHABAMIAAADQADACAHAAIACAAIAFAAIACAAIADgBIABAAQAIgCACAEIACAHQgFgIgNAFIgCAAIgBACQgGADgIABIgCgBIgDgBIAAgCIAAgFIgCAAIgTAAIgDAAIgMAAIAAABQgQAGAAgLQAGABACgEIABAAIAAgCIADAAIAAgCQgJACABgIIAFAAIADAAQAHgEAMAAIACAAIAAgCQAHAAADgDIACAAIAAgCIgCAAIgBgBIgCgDIAAgBIgBgEIAAgCIgBgBIgCgCIgBgBIgBgGIAAgEIgBAAQgQAEgLgMIAAgBIACgVIABgGIgOgBQgDgDAAgFIACgXIACgIIAAgCIgBgCIgBgBIAAAAQgMACgJgHIAAgBQgBgIACgHIAAgEIABgBIACgCIACgBIAAgDIAAgbIAAgIIAAgBIADgDIABgBIALAAIABABIABACIADAAIAFAAIAAgBQgBgJACgKIABgGIABgBQAKgPAQAJIABgBIAAgEIAAgDIABgBIAAgBQABgEACgEIABgCIABAAIALAAIABABIABABIACAAIAAgBIAAgEIAAgDIABgBIADgBIAAgBIAgABIACABIAEABIABABIABABIAAAAIABgBIAAgBIAFgBIARAAIABABQABAGADAGIAAAAIACABIABgBQAEgCACgEIADgBQAGgDAFAAIABACIAAABIADABIACADQADAHAAAJQAGAAACgGQAKgFALAFIABABIAAABQACAFAAAFIAfABIABACIABABQABAFAAAGIAAAQIAAABIAAAAQADABABACQABAIgBAJQgBAKAHAFIAAglIACAAIAAgCIAAhjIAAgDIAAgkIAAgCIAAgOIABAAQAGgBgCAFIAAADIAAArIAAACIAAADQACA5gEAzIAABNIAAACIAAAuIAAACIAABDIAAADIAAACQABASgDAPIAAmLIAAGLIgBAEIAABLIAAADIAABKIAAACIAAAWIAAACIAAACQACASgEALIAAAbIAAACIAAAdIAAADIAAAeIAAADIAAADQABALgBAKIgDAJgADBCQQAJAIAMgCIACgCQACgEgBgGIAAgCQACgEADgDIAAAAIACgCQAPgBALAEQgBgJAFgGQgBgMgDgMIgDgKIgPACIAAANIAAACIgCADIAAADIgKAAQAAAKgIADIgCAAQgLACgBgGIgDAAIgBAAIAAAFIAAACQgIACgIgBQgGACgGgBIAEgCQgHgCgGgDIgDAEIgBADIAAACIAAABIgCACIgBACIAAAFIAAACQgCAEgEADIAWAAIAbABgAEBCFIAAACIABgBIAAgDIAAgCIgBAAIAAAEgADNBpIgFACIAAADQABAFAGAAIADAAIAAgCQAEgEADgFIgMABgAFAgaIAAABQgMAHgMAEIAAADIAAACIACAAQAFgDAKABIACAAIAPAAIACAAIACAAIABgDQACgOgKAAIgCAAIgFACgAoMCVIAAhZIAAgDIAAgWQAEAJgBANIAAADIAAACQABAjgCAgIgBATIgBADIAAgCgAGNB3IgBgCQgDgLABgPIgBgBQgBgJAAgKIAAgCIAAgTIACAAIAAgDIAAgMIAAgCIAAgJIADAAIAAgCIAAgBIAAgOIAAgCIAAgGIAAgBIAAgCIAAgRIACAAIAAgDIAAgEIAAgCIAAgRIgBAAIgBgTIAAAAIADgBQgBgGABgHQAAgEACgFIAFgGIABgBIANgNIAEgDIABgDIABgBIAJgBIABgDIABgBQAKgLAJgMIADgFIADgBIADgEIAFgCIAGgGIAEgBIAAgEIAAgCIAAgFIgDAAIAAACIgBADIgBABIgBAEIgBACIgCAAIgSAOIgHAEIgCABQgLAMgLAGIgBABIAAABIgBADIgFAFIgIAKIgBACQgBADgCABIgCACIgEAFIgCACIgCABIgCAAIgBgBQABgDADgCIABgBIABgBIAAgCIAAAAIADgCIACgCIALgPIABgCIgCAAIgBABIABgBIAFgEIAAgCIABAAIgBgDQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBIAAAAIAEAAIAAABIAAABIASgPIABgBIAAgCQAPgJAMgKIACgBIAAAAIAAgBIgBgBIgCAAIgBAAIgBAAIgCAAQgNABADgPIAAgDIAAgCIACgBQAGgEADgGIABgBIAAgDQAGgIABAIIABADIgBACQgIAFgGAHIAAADIAAACIgCAAQgCAKAJAAIACAAIAAAAIAKgFIACAAQAOgKgFAPIgBAAIgBABIgCABIAAABIAAAFIABgBIACABIABABIAAABIAGAAIACAAIAAgDQAOgFABABQABABgLAHIgCABIgDAAQgIAEgDgDQgMAGgKAJIgCAEIAAACIgEABQgFAJgIAIQgCACgBADQgEADgHABIAAABIgBACQgKAGgIAKIgBABIAAACIgBABIgBABIgCABIAAACIAAABIgBABIAAABIAAAKIAAAFIgCgBIAAABIABACIgBAAIAAABQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAIAAACIAAAFIAAACQAEAJgCAPIAAACIAAADQACAMgEAFIAAACIAAAGIAAABIAAAAQAAAEgDACIAAAJIAAAGIAAACIAAACQACAGgEgBIAAAQIAAAJIAAAJIAAACIACAAQAEAJgDANIgBAAIAAARIAAADIAAACIAAACIACAAQAEALgBAAQgCAAgFgJgAG9A8IgBAAQAAgNgLAAIgBAAQgBAHgFABIgBACQgGAQgDgNQAEgDACgEIABAAIAAgDIAIgFIACAAIAAgCQALAAADAKIAAACQADAPAIgKIABAAIAAgDQANgKAOAGIgDAAQgOABgHAIIgCAAQgEAHgDAAQgEAAgEgJgAHpA2IgBgBIANAMIAAAAIgMgLgAHvATIAAgCQgCgDgFAAIgCABQgeAZgJghIgBAAQgCgHgLACIgDAAQgGgBgDAEIgBABQgFAEgDAAQgDAAAAgFIAJgDIADAAIAAgCQAIAAAGgBIADgBQAJgBACAFIABADQAHAZAdgSIACgBIAAgCQAHAAACADIABACIABABQAGALgBABIAAAAQgCAAgHgIgAEEAOQgEgOACgSIAAgDQAIgRAKAKIgEABQgFABgCAFQgEAQAAATgAGahBIAAAAIABAAIABAAIgDgBIAOgHIADgBIAAgCQAJgCAIgDIACAAQAFACABgEIABAAIAAgDQAXgFAIAIQABAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgFAAQgJgBgHACIgCAAQgEADgGgBIgBABIgVAGIAAACIgJADIAAAAIAAAAIgFABIgCAAIAAABIgBABIgBgBgAF6hoIgLgIIgBgCIgBAAIgVgVQgMgOgPgHQgFgFgDgFIAAgCIAEABQACADADACIABABQAVANARAUIANALIACACIgBgBIAAgBIAAgBIAAgBIgBgBIAAgSQgEgEACgSIACAAIAAAAIAAgCIAAgDIAAgDQgIgFgHgHQgFgEgCgEQgCgEABgFIAAgBIACABIAFAKIABABIAAAAIADABQACAGAGABQABAEAEACIAGgTIABgDIAAgCIAAgCQAGgVACAFQACAGAAAEIgBAEIgHANIAAACIgFAPIAFAHIAAABIgBAAIgCAAIgEgCIAAACIAAABIAAAOIAAADIAAADIAAAEQAAAQAIANIAEACIADACQAEADgBADIgGgCIAAABIAAAAIAAABIgDABIgEgHgAGBhtIAAAAIgFgXIAAgCIAAgHIACAAIAAgDIAAgQIADAAIAAgCQAEAAgCgGIAAgCIAAgCIAAgCQAGgLAEgLIACgJIAEgPIABAAIgCAMIAAADQgFAVgGATIgBAAIAAADQABAEgEAAIAAADIAAACIAAACQACAHgEAAIAAADIAAADIAAAOIAAACIAAADIAAALIAAgBgAFiilQgRgFgDgTIAGAIIAIAIIAJAIgAEfi/IABAAIAEgBIAAAAIgGABIABAAgAGijCIgCgBQgFgDAAgIIADAAIAAgCIAAgCQAQgOgMARIgCABQgBALANgDIACAAIADAAIACAAIAAgDQAMgHAEgGIgBAGQgBAFgDADQgDADgFABIgCAAQgEADgGAAIgIgBgAEwjHIAIABIgQACIAIgDgAhxmAIAKAAIACAAQAMgBgYADgAk9mKIAAgCIAfAAIACAAQgHADgIAAIgEAAIgOgBg");
	this.shape_6.setTransform(0.1,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6FFFF").s().p("AHUGUQAXgCATgDIAAABQAJACACgEIAAAGgACTGUQALgCAIACIgTAAgACTGUIAAAAgABMGUIAGgDIAFgCQAYABgGAEIgdAAgAAKGUIgBgBIABAAIABAAQALgEAFACIAFADgAh8GUIADgBIgKABIhRgBIBdgBIANACgAoNmTIQWAAIAAAJIAAAVIAAgVIAFABIgFAUIgBAEIAAAOIAAACIAAAkIAAADIAABjIAAACIgDAAIAAAlQgHgFACgKQABgJgBgIQgBgCgDgBIgBAAIAAgBIAAgQQABgGgBgFIgBgBIgBgCIgfgBQAAgFgCgFIAAgBIgCgBQgLgFgJAFQgDAGgFAAQAAgJgEgHIgCgDIgCgBIAAgBIgBgCQgGAAgFADIgDABQgDAEgDACIgBABIgDgBIAAAAQgDgGgBgGIAAgBIgRAAIgFABIgBABIAAABIAAAAIgBgBIgBgBIgEgBIgCgBIghgBIAAABIgCABIgBABIAAADIAAAEIAAABIgDAAIgBgBIgBgBIgKAAIgBAAIgBACQgDAEAAAEIAAABIgCABIAAADIAAAEIAAABQgQgJgKAPIgCABIAAAGQgCAKAAAJIAAABIgEAAIgDAAIgBgCIgBgBIgLAAIgCABIgCADIgBABIAAAIIAAAbIAAADIgBABIgCACIgCABIAAAEQgCAHABAIIAAABQAJAHAMgCIABAAIABABIAAACIAAACIgBAIIgCAXQgBAFADADIAOABIAAAGIgCAVIAAABQAKAMARgEIAAAAIAAAEIACAGIAAABIACACIABABIABACIAAAEIABABIACADIABABIACAAIAAACIgCAAQgEADgGAAIAAACIgDAAQgMAAgHAEIgCAAIgFAAQgBAIAIgCIAAACIgCAAIAAACIgCAAQgCAEgGgBQABALAQgGIAAgBIAMAAIACAAIAUAAIACAAIAAAFIAAACIgBAAIgBgDIgDgBIgBABIgBACIgBABIgIAEQgOAGADARIgaACQgEAFgBAHQgCAHAAAJIgJACIAAAAQgCAEgDgDIgOACIgBABIgBAKIgTAFIAAAFQABAJgDAGIgDAAIgBAAIgGAAIAAAAIABgCIACAAIABgDQAFgVgKATIAAACIgCAAIgDAFIgUAAIAAACIAAABIgHgDIgCAAIgHAFQgBAGAEADIACABIAAAAQgMgDgMgCIgBACIgGAIIAAACIAAAEIgCACIAAACIgBAFIgCACIAAABQgLACgKAEIgBACIAAAFIgFACIg/ADQgzACg0ABIgKgBIgCAAQgPgDgPAAIgBgBIgGAAIgMgCQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAIgNgBIgGgBIgNgBIgKAAIgWgBIgIgBIgGAAIgYgBQgEgBgDgCQgGAAgFgDIAAAAQgIAAgIgCIgEAAIgxgEIgXgEQgNgDgNABQgFAAgDgCIgYgEIgDAAIgCAAIgNgBIgBAAIgHAAIgCABIgBABIAAAAIgFABIAAABIgGABIAAgBIgTADIgIAAIgHAAIgNABIgCAAQgJACgKAAIgCABIgTAAIgEAAQABgggBgjIAAgCIAAgDQACgNgEgJIAAAWIAAADIAABZIAAACIAAA4IAAC6IgCAQgADXAvIAAAAIAAgBIAAABgAECgaIAAADQgCATAFANIABAAQAAgTADgQQACgFAGgBIADgBQgDgEgEAAQgGAAgFALgAoJiJQgBAKABAIQABAIACAGIAAgCQABgTgEgNIAAACgAC4iNQABAGADABIACgBQgCgCgBgEIgDAAgABNjFIABABIAEABQgEgDgBgDIgBAAIABAEgAAOkUIAXAAIAUABIgbgCIgQABgAhxmFIAAACQAYgDgMABIgBAAIgLAAgAk9mPQAKACAJgBQAIAAAHgDIgDAAIgfAAgAgKGMIABAAIAAAAgAlBGGIAAgBIAAAAIASAAQAAADACADIgUgFgAIFFlQACgKgCgLIAAgDIAAgDIAAgeIAAgDIAAgdIAAgCIAAgbQAEgLgBgSIAAgCIAAgCIAAgWIAAgCIAAhKIAAgDIAAhLIABgEIAAFsQgCgcgCgFgAn+GFIAEgBIAIABIgMABgAiDCVIAAgBIAFAAIAAABgAH5AWQABgBgGgLIgCgBIAAgCQgDgDgGAAIAAACIgDABQgdASgHgZIAAgCQgCgGgKABIgCABQgGABgJAAIAAADIgCAAIgKACIgGAAIAAAAIgBgHIAAgCQAEgFgBgMIAAgDIAAgCQABgPgEgJIAAgCIAAgFIAAgCIACAAIgBACQAAAFAGgCIAAAEQAAAEACACQADABACAEIABABIAGABIABAAIAFAFIABACIAMAAIABAAIADgCIACgCIACgEIABgBIAAgCIAEAAIAEADIABABIAMgBIABAAIACgFIABgBQAPAFALgHQACgIAAgJQAAgDgCgDQAFgBADgCIACgBQADgLgBgJIgCgVIACgBIABgBIAAgBIACAAIAAAHIAAACIAAAUIAAACIAAAdIAAADIAAAeIAAADIgCAAIAAAwgAF0gNQgBgEgJACIAAAAIgDABIgCAAIgFAAIgDAAQgGAAgDgCIAAgDQgBgMgGgHIADgCIAFAAIAAAAIABgBIADgCIAAABIABABIABABQAPAHALgLIABgCIAEAAIACACIABABIACAAIAAAUIAAACIAAAAIgBACIgBADIgBAJIgFABgAEpgOIAAgCIAAgDQAMgEALgHIABgBIAEgCIADAAQAKAAgDAOIAAADIgCAAIgDAAIgOAAIgDAAQgJgBgFADIgCAAgAFyh6IACgBIAAABIAAABIAAABIgCgCgAFxilIACAAIAAAAIgCAAgAEkjFIgDgNIAIAJIgEAEg");
	this.shape_7.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-41.6,106.7,82.8);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.rap3d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rap3dstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({alpha:1},0).wait(29).to({alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.6,-16.6,143.8,44.9);


(lib.rap3c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rap3cstill();
	this.instance.parent = this;
	this.instance.setTransform(-84.3,1.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({x:-79.3,alpha:1},0).wait(19).to({alpha:0},5).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.3,-11.9,158.7,23.5);


(lib.rap3b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rap3bstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({alpha:1},0).wait(10).to({alpha:0},4).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-35.2,46.8,8.3);


(lib.rap3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rap3astill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({alpha:0},8).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-13.1,149.4,23.6);


(lib.BEscene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_83 = function() {
		playSound("fading_pad");
	}
	this.frame_92 = function() {
		playSound("fading_pad");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(83).call(this.frame_83).wait(9).call(this.frame_92).wait(13));

	// Layer 1
	this.instance = new lib.BEscene2still();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BEscene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_140 = function() {
		playSound("fading_pad");
	}
	this.frame_149 = function() {
		playSound("fading_pad");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(140).call(this.frame_140).wait(9).call(this.frame_149).wait(13));

	// Layer 1
	this.instance = new lib.BEscene3still();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(142).to({_off:false},0).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BEscene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		playSound("fading_pad");
	}
	this.frame_69 = function() {
		playSound("fading_pad");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(10).call(this.frame_69).wait(12));

	// Layer 1
	this.instance = new lib.BEscene1still();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.berap3guy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.berap3guystill();
	this.instance.parent = this;
	this.instance.setTransform(0.2,1.4,0.999,0.999,-19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:40.7,x:0,y:0},16).to({rotation:-19.3,y:1.9},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-38,93.3,78.9);


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


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


(lib.Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.berap3guy();
	this.instance.parent = this;
	this.instance.setTransform(13.3,10.4,0.719,0.719,60);

	this.instance_1 = new lib.rap3d();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.7,-29,0.355,0.355);

	this.instance_2 = new lib.rap3c();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.7,-24.7,0.301,0.301);

	this.instance_3 = new lib.rap3b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(163.9,5.7);

	this.instance_4 = new lib.rap3a();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-26.8,-24.8,0.329,0.329);

	this.instance_5 = new lib.rapbubble3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-27.9,-18.9,1.176,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-41.3,103.6,86.7);


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
		var bgm = createjs.Sound.play('bgmPN',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../miniMenu/miniMenu.html","_self");
		}
		
		//volume functions -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume -0.05;
			if(!mute){
				bgm.volume -= 0.05;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.05;
			if(!mute){
				bgm.volume += 0.05;
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
		
		 window.open ("predNoun_scene6.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("predNoun_scene4.html","_self");
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


// stage content:
(lib.predNoun_scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5:0});

	// timeline functions:
	this.frame_1 = function() {
		playSound("wasisayiwas");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(104));

	// Layer 2
	this.instance = new lib.BEscene3();
	this.instance.parent = this;
	this.instance.setTransform(378.5,367.5);

	this.instance_1 = new lib.BEscene2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(246,366.9);

	this.instance_2 = new lib.BEscene1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(140.9,366.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(105));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(554.3,55.9,1,1,0,0,0,54,40.5);

	this.instance_3 = new lib.Scene3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(282,194.1,3.6,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.UI}]}).wait(105));

	// Layer 5
	this.instance_4 = new lib.GrassScene("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(273.8,189.1,3.769,3.769,0,0,0,-0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,202.6,534,398.7);
// library properties:
lib.properties = {
	id: 'FE487F14938C074BB0751A53FD0EA65C',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/fading_pad.mp3", id:"fading_pad"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/bgmPN.mp3", id:"bgmPN"},
		{src:"sounds/wasisayiwas.mp3", id:"wasisayiwas"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"}
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
an.compositions['FE487F14938C074BB0751A53FD0EA65C'] = {
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