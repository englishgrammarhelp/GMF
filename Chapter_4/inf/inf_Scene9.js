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


(lib.tumble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(35.3,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBAQgCgDAAgEIAAgQIgBgQIABgUIABgTQAAgFACgCQADgDADABQADgBADADQACACAAAFIAAATIgBAUIAAAQIAAAQQAAAEgCADQgDACgCAAQgEAAgDgCgAgFgwQgDgDAAgEQAAgEADgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(25.8,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAaIgDgVIgCgTIgHAQIgOAkQgBAEgCACQgDAFgFAAQgHAAgGgaQgDgOgDgWIgDgNIgBgOQAAgDADgDQACgCAEAAQAGAAACAHIACANIABANIAFAmQALgaAKgjQADgKAGAAQAHAAACALIAGAgIAHAhIAGgYIALgvQABgFAHAAQAEAAACADQADACAAAEIgBAEQgHAcgLAjQgCAIgGAJQgDAEgFAAQgKAAgGgXg");
	this.shape_2.setTransform(17,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgDAEAAQADABAEAEQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCACQgCADgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_3.setTransform(6.2,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tumble, new cjs.Rectangle(0,0,44.3,29.1), null);


(lib.to = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiAhQgLgLAAgPQAAgQAOgPQAOgOARgEQAWgDAPAPQANANgFARQgEAOgOAMQgOAOgPADIgHAAQgPAAgKgKgAABgXQgKADgJAJQgJAJAAAJQAAAIAFAFQAHAHAJAAQAKAAAIgJQAagWgOgOQgHgGgIAAIgIABg");
	this.shape.setTransform(21.5,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/BBQgCgCAAgEQgBgEADgCIADgDIAEgDIAJgJIAIgJQAJgJAOgSIAXgZIgGgGQgMgOgHgKQgDgGAEgFQADgCAEAAQAEgBADADIAIALIAJALIALALIALALIAPAPIAMAOQADADABADQAAAEgDADQgDADgDgBQgEABgDgDIgOgPIgMgOIgFgEIgaAcQgQAUgKAKIgGAHIgGAHQgFAEgEACIgEAAQgDAAgDgCg");
	this.shape_1.setTransform(17.7,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.to, new cjs.Rectangle(0,0,38.8,38.8), null);


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


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(66,66,66,0.247)").ss(1.5,1,1).p("Ai5ikIFzAAIAAFJIlzAAg");
	this.shape.setTransform(18.6,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("Ai5ClIAAlJIFzAAIAAFJg");
	this.shape_1.setTransform(18.6,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.2,34.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA5QgFgGAFgGIALgQIAMgOIAHgGIAGgGQANgMgFgFQgHgHgOACQgNACgOAIIgHAGIgGAEIgFAGIgGAGQgDADgDAAQgDAAgDgDQgDgCAAgEQAAgDADgDIAFgFIAFgGIATgRIATgRIAFgGIAFgGQADgDADABQAEgBACADQAGAGgHAIIgIAIQAZgEALALQAKAKgFANQgDAHgLAMIgHAHIgFAFIgNAPQgGAJgGAGQgBACgDAAQgEAAgDgCg");
	this.shape.setTransform(16.3,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwAuQgCgDAAgEQAAgDADgDIALgLIAKgLIAQgOIAOgNQADgDADgBQAEABACADQADACAAADQAAAEgDACIgPAOIgOAOIgLALIgLALQgDADgDAAIgBAAQgDAAgDgCgAApgbQgFAAgDgDQgDgDABgEQgBgEADgDQADgEAFABQAEAAADADQADADAAAEQAAAEgDADQgCADgEAAIgBAAg");
	this.shape_1.setTransform(13.1,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,33.7,33.7), null);


(lib.star_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("ADJKMIjFiTQkTDIgIAAIhJAQQiHgVgchkQgLgrAAgaQAPhTBXj/QjViThDg9QgZgVgRhcQAHhAAuhBQApghBbgUQCIADBNAAIBTAAQAIAABIjuQAchrA/gpQAMgMBWgPQBEAAA9A5QAfAQBLEJQAYBKAHABIBWAAQBLAACDgDQBmASAqAvQAkAxAFBEQAABIg5BAQj6CugLAPQBbELAPBOQgHBBgvBBQg+AshFAFQhGgGhPg/gACnHxQCaB1AZAAIAOAAQBFgLAAhAQAAgNhbkUQgehSAAgRQEujSAcgfQAAgHAHgjQgShEgyAAIgPgEQjHAEh0AAIgyAAQgNAAhCjoQg1itgbAAIgmgMQhKASAAA6QgMAchjE5Ig4AAQh1AAjHgEQhJAAgKBQQAAAyB5BHIDYCeIAAAEQhxFVgIAnQAABDBQAIIAEAAQAcAAEEjJQARgJAggZQAcAJCOBtgAFaIXIlWj7IgEAAQlUD7gEAAIAAgEQAAgRCFmFIlej1IAAgIIGxAAIB9mWIADAAQAIAABqFWQATA3AAAJIGwAAIAAAIIlZDxIAAAEQAAAPCFGLg");
	this.shape.setTransform(86.6,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_big, new cjs.Rectangle(0,0,167.3,212.4), null);


(lib.sam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBEQgLgCAAgHQAAgIAHAAIALACQAHABAJAAQARAAAGgQQAEgLAAgWQgEAJgHAEQgHAEgHAAQgQAAgKgKQgJgLgBgRQAAgXAOgPQAOgPAXAAQAIAAAGACQAGACADAFQAJAAAAAKIgCARIgDAQIgBAdQgBARgDAMQgEAOgJAHQgKAIgTAAQgMAAgIgCgAgQgrQgHAKgBAQQABANAEAFQAFAHAJAAQAIAAAJgJQAHgJABgKIAFgdQgEgDgEgBQgEgCgEAAQgPAAgKAMg");
	this.shape.setTransform(86.4,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAJIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgJIABgYIACgZIgBgIIAAgIQAAgEADgCQACgDAEAAQAIAAABAMIAAAJQAPgTAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape_1.setTransform(77.2,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBAQgDgDAAgEIgBgQIAAgQIABgUIABgTQAAgFADgCQACgDAEABQADgBACADQACACAAAFIgBATIgBAUIABAQIAAAQQAAAEgDADQgBACgEAAQgEAAgBgCgAgFgwQgDgDAAgEQAAgEADgDQAEgDADAAQADAAAEADQADADAAAEQAAAEgDADQgEADgDAAQgDAAgEgDg");
	this.shape_2.setTransform(70,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_3.setTransform(62.2,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgDAEAAQADABAEAEQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCACQgCADgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_4.setTransform(52.2,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_5.setTransform(43.4,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_6.setTransform(34.2,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNBLQgDgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAQgBIAIAAIABgNQACgUAIgJQAIgLATAAQANAAAAAIQAAAJgLAAQgWAAgCAdIgBAGIAUgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQAAAHgHAAQgEAAgCgCg");
	this.shape_7.setTransform(24.9,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_8.setTransform(15.8,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_9.setTransform(6.6,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sam, new cjs.Rectangle(0,0,93.4,29.1), null);


(lib.RING = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE737").s().p("AgEUvIgDgMIgKgdIgDgLIgDAAIhYAAQAHgKALgGIAEgBQANgJAMgJIAHgGQAIgHAMgEQgMgngNgjIgBgEQgEgGAEgEIAyAkIAEACQAJAGAIAIIA2gpQAJgHAKgEIABABIAAACQgEAQgFAMIgMAhQgEAKgBAOIACAAIBFAxIAAACIhaABIgNApIgBAEQgFAWgKATQgIgOgEgUgAtsObIgnAUIgCACQgVANgTAFQAEgQAKgQIAHgMIAPgbIADgKIgBgCIg+g+QAMgCAMAEIADAAQAQAFAOABIAJABQALABAMAFQASgkARgiIABgEQABgGAIAAIAJA8IAAAEQADAMABALIBDAJQALACALAEIgBACIgCABIgZAOIghAOQgJAFgLAJIABABIAOBUIAAACIhBhAgANXOqIAOhUIABgBQgLgJgKgFIgfgOQgNgFgNgJIgBgBIgBgCQALgDALgCIBDgKQAAgLADgLIABgFIAJg9QAHABABAGIABAEQARAjATAiQALgEALgBIAKgBQAOAAAPgFIAEgBQAMgFAMADIg/A+IgBACIAEALIAOAbIAIALQAKAQAEARQgTgHgVgMQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgogUIhAA/gAT4A9IgxhEIAAgCQgOABgKAEIghALQgMAFgPAEIgDAAIgCgBQAFgLAHgIIApg2QgIgHgGgLIgCgEIglgxQAFgEAGADIAEACQAjANAnALQAEgLAHgJIAGgHQAJgLAJgOIABgDQAGgLAKgIIAABZIAAACIALAFIAcAJIAOADQATAFAOAHQgTAKgWAFIgEABIgpAOIgBBZgAz4A9IgChZIgpgOIgDgBQgXgFgTgKQAPgHATgFIAMgDIAdgJIALgFIAAgCIAAhZQAKAIAGALIACADQAHAOAKALIAGAHQAIAJADALQAngLAjgNIAEgCQAGgDAFAEQgTAZgSAYIgCAEQgGALgIAHIApA2QAHAIAFALIgCABIgCAAQgPgEgNgFIgggLQgLgEgOgBIAAACIgxBEgANVsCIgKhDQgLgBgMgDIgDgBIg+gJQAAgGAIgCIACgBQAjgQAkgTQgGgLAAgLIgBgJQgCgPgEgPIgBgEQgDgMABgMIA+A+IACACIALgFIAbgOIAMgGQAQgLAQgFQgGAVgNAUIgBADIgUAmIA/BBIgBAAIhUgNIgCgBQgIAKgFAKQgGARgJAPQgFAMgIANIgBACIgDABQgDgLgBgLgAsvscIgCgCQgHgNgGgMIgPggQgEgJgJgLIgBABIhVAOIgBgCIA/hAIgTgmQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgNgVgGgTQAPAEARAKIALAHIAbAPIALAEIACgCIA+g/QACANgDAMIgCADQgEAQgBAPIgBAJQgBALgFALQAjATAjAQIADABQAHACAAAGIg9AJIgDABQgMADgLABIgKBDQgCALgDALIgCgBgAA+x5Ig2gpQgIAIgJAGIgEADQgaARgYATQgEgFAEgGIABgEQANgjAMgnQgMgDgIgIIgHgGQgMgKgNgHIgEgCQgLgGgHgKIBYAAIADAAIADgLIAKgcIADgOQAEgSAIgPQAKATAFAXIABADIANApIBaABIAAACQgjAYgiAZIgCAAQABAOAEALIAMAgQAFANAEAOIAAADQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQgKgFgJgHg");
	this.shape.setTransform(190.9,193.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBB31").s().p("AgEVZIgCgCIgCgHIgHgYIgOgvQgjABgjABQgOABgGgHQgEgEgDgGQAFgMAKgFIADgDQAGgCADgDIAtgiIgIgZIgBgGIgLgiIgDgGQgIgNAMgIQAIgIALAIIAPALIALAJQARAOATAMQAfgVAegYQALgJAKAIQAHABgBAKIgBAFQgDAIgDAJIgBADQgFATgIAUIgBAFIgDAOQARAJAOAMQAPAMAQAKQAKAIgDAMIgCADQgCAEgHAAIhSABIgDAHIgEAKIgFATIgBACIgCAIQgDAIgBAIQgDAVgTAEIgKgHgAg/R5IABAEQANAjAMAnQgMAEgIAHIgHAGQgMAJgNAJIgEABQgLAGgHAKIBYAAIADAAIADALIAKAdIADAMQAEAUAIAOQAKgTAFgWIABgEIANgpIBagBIAAgCIhFgxIgCAAQABgOAEgKIAMghQAFgMAEgQIAAgCIgBgBQgKAEgJAHIg2ApQgIgIgJgGIgEgCIgygkQgEAEAEAGgAs0PmIg7g5IgHACIgKAEIgSAJIgCACIgGAEIgOAIQgRANgRgLIgCgLIAAgEIAEgGIALgWIAXgrIgygwQgLgKAAgIQAAgHADgGQALgEALACIAFAAQAFADAGABIA2AIQAHgLAFgNIAFgGIAQgfIACgGQADgOAPACQALABABAMIAEATIABAOQACAWAGAWQAlAIAlADQAOACACANQADAFgGAGQgCACgDABIgQAIIgCABQgTALgSAJIgFADIgMAHQAGASACATQABATAEASQADANgMAGIgDABIgCAAQgEAAgDgDgAsrPbIAAgCIgOhUIgBgBQALgJAJgFIAhgOIAZgOIACgBIABgCQgLgEgLgCIhDgJQgBgLgDgMIAAgEIgJg8QgIAAgBAGIgBAEQgRAigSAkQgMgFgLgBIgJgBQgOgBgQgFIgDAAQgMgEgMACIA+A+IABACIgDAKIgPAbIgHAMQgKAQgEAQQATgFAVgNIACgCIAngUIBBBAgANXO6IgCgBQgMgGACgMQAEgTACgTQACgTAFgSIgMgHIgFgEQgSgHgSgLIgDgCIgQgIQgCAAgCgCQgHgHADgFQACgNAOgBQAmgFAlgHQAGgWABgWIACgOIADgTQACgMALgBQAOgCAEAOIACAGIAQAfIAEAHIAMAWQAbgFAcgCIALgDIAEgBQALgCALAEQADAHAAAFQAAAJgLALQgZAXgYAYIAWArIAMAWIAEAHIAAACIgCANQgRAKgRgMQgHgGgHgCIgGgFIgEgBIgQgKIgLgEIgGgCIg8A6QgDACgEAAIgCAAgANzL+IgBAFQgDALAAALIhDAKQgLACgLADIABACIABABQAOAJAMAFIAfAOQAKAFALAJIgBABIgOBUIABABIBAg/IAoAUQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAVAMATAHQgEgRgKgQIgIgLIgOgbIgEgLIABgCIA/g+QgMgDgMAFIgEABQgPAFgOAAIgKABQgLABgLAEQgTgigRgjIgBgEQgBgGgHgBIgJA9gATtBCIgWgeQgLgOgKgSIgOAEIgFABQgUAHgTAGIgDAAQgKADgHADIgGABQgJABgBgGQgIgKAJgMQAYgcAVggQgMgTgOgSIgJgLIgLgPQgIgJAIgKQAJgKAMAHIAGACIAiALIAGACQAMAEANADIAigsQADgEADgGIACgDQAFgKAMgEQAGACAEAEQAHAGgBAQQgCAiAAAiIAvAPIAXAHIAIADIACABIAHAKQgEATgVAEIgQADIgHACIgDABIgTAFIgKAEIgHAEIgBBRQAAAGgEADIgDABIgGABQgIAAgGgIgATHgHIAxBEIACAAIABhZIApgOIAEgBQAWgFATgKQgOgHgTgFIgOgDIgcgJIgLgFIAAgCIAAhZQgKAIgGALIgBADQgJAOgJALIgGAHQgHAJgEALQgngLgjgNIgEgCQgGgDgFAEIAlAxIACAEQAGALAIAHIgpA2QgHAIgFALIACABIADAAQAPgEAMgFIAhgLQAKgEAOgBIAAACgA0ABJIgDgBQgEgDAAgGIgBhRIgHgEIgKgEIgTgFIgCgBIgIgCIgQgDQgVgEgEgTIAHgKIACgBIAHgDIAYgHIAvgPQgBgigBgiQgBgQAHgGQAEgEAGgCQALAEAHAKIACADQACAGADAEQASAWAQAWIAZgHIAGgCIAigLIAGgCQANgHAIAKQAIAKgIAJIgLAPIgJALQgOASgMATQAWAgAWAcQAKAMgIAKQgCAGgIgBIgGgBQgIgDgJgDIgDAAQgUgGgSgHIgGgBIgOgEQgJASgMAOIgWAeQgGAIgIAAIgGgBgAz6hZIAAACIgLAFIgdAJIgMADQgTAFgPAHQATAKAXAFIADABIApAOIACBZIABAAIAxhEIAAgCQAOABALAEIAgALQANAFAPAEIACAAIACgBQgFgLgHgIIgpg2QAIgHAGgLIACgEQASgYATgZQgFgEgGADIgEACQgjANgnALQgDgLgIgJIgGgHQgKgLgHgOIgCgDQgGgLgKgIIAABZgANYrfQgMgBgBgPQgFglgIglQgVgGgXgCIgNgCIgTgCQgMgDgCgLQgBgNAOgFIAGgCIAggQIAFgDQANgGAKgGIgIg4QAAgFgCgGIgBgDQgDgLAFgMQAGgCAGAAQAJAAAKAKIAwAyIArgXIAVgLIAIgEIACAAIAMADQALAQgNARIgIAOIgEAHIgCACIgJARIgFAKIgBAHIA5A7QAEAEgBAFIgBAEQgGALgNgCQgSgEgTgCQgTgCgTgGIgHANIgDAEQgIATgKARIgBAEQgGAIgCAHIgEAFQgEAEgEAAIgEgBgAM2vAIABAEQAEAPACAPIABAJQABALAFALQgkATgjAQIgCABQgIACAAAGIA+AJIADABQAMADALABIAKBDQABALADALIADgBIABgCQAIgNAFgMQAJgPAGgRQAFgKAIgKIACABIBUANIABAAIg/hBIAUgmIABgDQANgUAGgVQgQAFgQALIgMAGIgbAOIgLAFIgCgCIg+g+QgBAMADAMgAs4sQQgCgCgBgEIgIgQIgBgCQgKgSgJgTIgCgEIgIgNQgSAGgTACQgTACgSAEQgNACgHgLIgBgDQAAgFAEgFQAcgeAdgcIgCgIIgFgKIgJgRIgBgCIgEgHIgIgOQgNgRALgQIAMgDIACAAIAHAFQAKADAMAIIArAXQAYgZAXgaQALgLAJABIAMACQAEAMgCALIgBAEIgDAKQgDAcgFAbQALAHAMAGIAGADIAgARIAGACQAOADgBAOQgCAMgNACIgSADIgOABQgWADgWAFQgHAlgFAlQgBAOgNADIgEABQgEAAgEgEgAtNtXIAPAgQAGAMAHANIACACIACABQADgLACgLIAKhDQALgBAMgDIADgBIA9gJQAAgGgHgCIgDgBQgjgQgjgTQAFgLABgLIABgJQABgPAEgQIACgDQADgMgCgNIg+A/IgCACIgLgEIgbgPIgLgHQgRgKgPgEQAGATANAVQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABIATAmIg/BAIABACIBVgOIABgBQAJALAEAJgAhJxjQgMgIAIgNIADgGIALgiIABgGIAIgZIgtgiQgDgDgGgDIgDgBQgKgHgFgLQADgFAEgFQAGgHAOABQAjACAjAAIAOgvIAHgXIACgIIACgCIAKgHQATAEADAWQABAHADAIIACAHIABADIAFATIAEAKIADAHIBSABQAHAAACAEIACADQADANgKAHQgQALgPALQgOAMgRAJIADAOIABAGQAIATAFATIABADQADAKADAHIABAGQABAJgHABQgKAIgLgJQgegXgfgWQgTAMgRAPIgLAIIgPALQgGAEgEAAQgFAAgEgEgAA+x5QAJAHAKAFQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgDQgEgOgFgNIgMggQgEgLgBgOIACAAQAigZAjgYIAAgCIhagBIgNgpIgBgDQgFgXgKgTQgIAPgEASIgDAOIgKAcIgDALIgDAAIhYAAQAHAKALAGIAEACQANAHAMAKIAHAGQAIAIAMADQgMAngNAjIgBAEQgEAGAEAFQAYgTAagRIAEgDQAJgGAIgIIA2Apg");
	this.shape_1.setTransform(190.9,193.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC8F15").s().p("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ARATIASATQAKgDALgGIAGgDQAOgJANgHQANgFAMgBQAKACAKAHIACACQAGAFADAHQAKAWgPAWIgBACQgFAMgHAMQgGAJgEALQAAAGAGAFIAcAYQANAKAEALQAFALABAKQgDAHgEAHIABABIgOAOIgBABIgMAEQgKADgKgCIg2gLQgJALgEAMQgKAWgRAXQgCACgFADQgJAEgKADIgQgGgAM2vlQgGAAgGACQgFAMACALIABADQADAGAAAFIAIA3QgLAHgMAGIgGADIgfAQIgGACQgPAEACAOQABALAMADIAUACIANACQAWACAWAGQAIAlAEAlQACAOAMACQAGADAGgGIADgFQADgHAFgJIABgDQALgSAIgSIADgEIAHgNQATAGATACQASABATAFQAMACAHgMIAAgDQACgFgEgEIg5g7IABgHIAFgKIAJgRIABgDIAFgGIAIgOQANgRgLgRIgMgCIgDAAIgHAEIgWALIgqAXIgwgyQgKgKgIAAIgBAAgAtAr6QgEgBgCgDQgSgXgKgXQgEgKgIgMIg3ALQgKACgKgDIgLgEIgCgBIgNgOIAAgBIgHgOQABgKAFgLQAEgLANgKQANgKAOgNQAHgHAAgFQgEgKgGgKIgMgXIgBgCQgPgXAKgWQAEgHAFgFIACgBQAKgIAKgCQAMABAOAGQAMAGAOAJIAHADQAKAHAJACIAUgTIARgTQAGgIAGgDQANgGALgDIACACIASAGIABABQAJAJAGAJQADAQgDAPIgBAEIgCAHQgBAUgGAUIAaANIALAFQASAHATATIgBABQAHAMAAALIgCACIgEANIgCACIgNANQgTAFgUAEIglAEIgBACQgCAlgKAlIgCACIgOAOIgBAAIgRAHQgKgEgJgFgAtatRIADAEQAIATALASIABACIAIAQQABADACACQAGAHAGgEQAMgCACgOQAEglAIgmQAWgFAWgCIAOgCIASgCQANgCABgMQABgOgNgDIgGgDIgggQIgGgEQgMgFgLgHQAFgbADgcIADgKIABgEQACgLgFgMIgMgDQgIAAgLALQgXAagYAYIgrgXQgMgHgKgEIgHgEIgDAAIgMACQgKARAMARIAIAOIAFAGIABADIAJARIAFAKIACAHQgdAdgdAeQgDAEAAAGIABACQAGAMANgDQATgDATgCQASgCATgGIAHANgABJxIIgDAAQghgSgcgZIgCgBIgcAXQgQAMgSAJIgSAAIgDAAIgMgFIgCgBQgJgHgDgOIgBAAQgBgbAIgRIAFgMIAJgcQgTgJgOgOIgGgDIgEgCQgNgJgJgNQgCgLAAgMIAAgCIAIgRIAAgCQALgHAMgEQAHgDAKABQAMACANAAIAcAAQAEgJADgMIACgHQAEgQAFgNQAFgNAIgKQAIgFAMgCIADAAQAHgBAHADQAXAIAFAbIABACQAFAMADANQACALAFAKQAEAEAJgBQAUAAAPgCQARgCALAFQALAEAIAHIAFAOIABAAIAAATIAAADIgFALQgFAJgJAFIguAfQACAOAEALQAJAXAEAcQABAEgCAEQgDAKgFAJQgHAEgJADIgBABIgUAAgAh30EQgEAEgDAGQAFALAJAHIAEABQAFADAEADIAsAiIgHAZIgCAGIgKAiIgDAGQgIANAMAIQAIAHAKgHIAQgLIALgJQARgOASgMQAgAVAdAXQAMAKAJgIQAHgCAAgIIgBgGQgEgIgCgJIgBgDQgGgUgHgTIgBgFIgEgOQASgJAOgMQAPgMAQgKQAKgIgDgMIgCgDQgDgEgGgBIhSgBIgDgGIgEgKIgGgTIgBgDIgBgHQgDgIgBgIQgDgVgUgEIgJAHIgCACIgCAHIgHAYIgOAuQgjAAgjgBIgCAAQgMAAgGAGg");
	this.shape_2.setTransform(190.9,193.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9933").ss(37.3,1,1).p("ATPAAQAAH+lpFoQloFpn+AAQn9AAlolpQlploAAn+QAAn9FploQD6j6FChNQA5gNA8gJQBYgLBcAAQBcAABWALQBEAJBAAQQE7BPD1D1QFpFoAAH9g");
	this.shape_3.setTransform(190.7,193.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0033FF").ss(49.4,1,1).p("ATPAAQAAH+lpFoQloFpn+AAQn9AAlolpQlploAAn+QAAn9FploQD6j6FChNQA5gNA8gJQBYgLBcAAQBcAABWALQBEAJBAAQQE7BPD1D1QFpFoAAH9g");
	this.shape_4.setTransform(190.7,193.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.RING, new cjs.Rectangle(43,45.5,295.6,295.5), null);


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


(lib.likes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAJIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgJIABgYIACgZIgBgIIAAgIQAAgEADgCQACgDAEAAQAIAAABAMIAAAJQAPgTAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape.setTransform(44.6,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAtIgGgGIgPAHIgJACQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAMIAAASQAAALABAGIAGAPIACAFIAAACQAAADgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKAAQAIAAAGgCIAJgIQgDgWAAgMIAAgIIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_1.setTransform(35.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_2.setTransform(25.8,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAnQgNgMAAgTQAAgQAMgUQANgUAQAAQAJAAAKADQANAGAAAIQAAADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgDgEQgFgEgMAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAIAGAKAAQAFAAAGgDIAKgFIAEgCQADABADACQACACAAAEQAAAHgOAFQgLAGgIAAQgRgBgMgKg");
	this.shape_3.setTransform(16.1,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAAOAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_4.setTransform(6.6,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.likes, new cjs.Rectangle(0,0,51.3,29.1), null);


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


(lib.GREAT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggDTQgOgVAAgcQAAgwAfgTQgEgEgXhGQgYhFAAg+QAAg0AUghQAUgjAcAAQAbAAATAjQATAhAAAzQAAA7gVBAQgUBAgLATQAPAJAJARQAIASAAAXQAAAcgNAVQgPATgTAAQgSAAgOgTg");
	this.shape.setTransform(290.5,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AidDfIAAm+IChAAQA5ABAbAJQAaALASAeQASAeAAArQAAAkgKAVQgJAUgVAVQAZAUAMAWQALAXAAAlQAAA4gcAhQgcAigvgBgAgXB9IAEAAQAXAAAJgKQAKgKAAgZQAAgdgKgLQgJgLgZAAIgCAAgAgXguIAEAAQAUABAKgKQAJgKAAgXQAAgZgJgKQgJgJgVgBIgEAAg");
	this.shape_1.setTransform(265.4,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsCoQgvg/AAhxQAAg3AUgzQAUgzAkggQAjghAxAAQA8AAAuBDQAtBEAABcQAABogtBBQgsBAhFAAQg8AAgug+gAgVgsQgJANAAAUQAAATAJAOQAJANAMAAQANAAAJgNQAJgNAAgUQAAgUgJgNQgJgOgNAAQgMAAgJAOg");
	this.shape_2.setTransform(229.1,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6DGQgggegLgzQAKADAQAAQAWAAAIgEQAJgFACgOQADgPAAglIAAkPICFAAIAAEHQAABWgFAdQgFAdgWAXQgWAXghAAQgpAAgggdg");
	this.shape_3.setTransform(199.1,39.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCDfIAAkJIhEAAIAAi1IENAAIAAC1IhEAAIAAEJg");
	this.shape_4.setTransform(154.4,39.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDDfIgRhLIhhAAIgSBLIiIAAIBtm+IC/AAIBnG+gAgXArIAwAAIgYhtg");
	this.shape_5.setTransform(123.1,39.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah9DfIAAm+ID7AAIAABxIh1AAIAAA3IBRAAIAABvIhRAAIAAA4IB1AAIAABvg");
	this.shape_6.setTransform(89.1,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbDfIAAgDQAAhQgPgpQgOgpgcAAIgBAAIAAClIiHAAIAAm+ICHAAQBFAAAYAFQAXAFASAQQASARAKAcQALAdAAAgQAABEgiAgQAxBSAJCEgAgfgtIAEAAQATAAAIgKQAJgKAAgYQAAgpgmAAIgCAAg");
	this.shape_7.setTransform(56.6,39.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5DWQgggQgXgkQgYgjgKgqQgLgrAAgrQAAhnAwg/QAug+BMAAQAjAAAnAQQAnAQAgAcIhBCGQgngcgiAAQgWAAgOARQgOARAAAbQAAA4ArAAIADAAIAAhFICHAAIAADwIgCAAIhvAFQhAAAgfgQg");
	this.shape_8.setTransform(20,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.9,78.7);


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


(lib.beach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgDAEAAQADABAEAEQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCACQgCADgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape.setTransform(11.2,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBAQgCgDAAgEIgBgQIAAgQIABgUIABgTQAAgFACgCQADgDADABQADgBADADQACACAAAFIAAATIgBAUIAAAQIAAAQQAAAEgCADQgCACgEAAQgEAAgCgCgAgFgwQgDgDAAgEQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgDAAgDgDg");
	this.shape_1.setTransform(4.8,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beach, new cjs.Rectangle(0,0,18,29.1), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBXQgOgDgBgJQABgKAJAAIAOACQAJACALAAQAVAAAIgVQAGgNAAgdQgGALgIAGQgJAGgKAAQgUAAgMgOQgNgOgBgVQAAgfASgSQASgTAeAAQAKAAAIACQAGADAFAGQAMAAgBANQABAIgDANIgDAVIgDAlQAAAXgEAOQgFASgLAJQgOAKgYAAQgPAAgKgCgAgUg4QgKAOAAAUQAAAQAFAIQAHAIAMAAQALAAAKgMQAKgMABgLIAGgmQgFgEgFgCIgKgBQgVAAgLAOg");
	this.shape.setTransform(110,24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcA3IgEgZIgCgZIABgJIAAgLQAAgYgJAAQgMAAgKAPQgLANgGAUIgBALIAAALIAAAKIABAKQAAAFgDADQgEAEgEAAQgFAAgDgEQgDgDAAgFIgBgKIgBgKIACgfIACggIAAgLIgBgKQAAgFADgDQAEgDAEAAQALAAAAAOIAAANQATgZATAAQATAAAGAQQAFALABAUIAAAMIAAAJQAAAJACAPQADAPgBAJQAAAFgCADQgEADgFAAQgJAAgBgKg");
	this.shape_1.setTransform(98.3,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIAAgUIgBgUIABgbIABgZQAAgFADgDQAEgDAEAAQAEAAADADQADADAAAFIgBAZIgBAbIAAAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgGg9QgEgEAAgFQAAgGAEgEQAEgDAEAAQAGAAAEADQADAEAAAGQAAAFgDAEQgEAEgGAAQgEAAgEgEg");
	this.shape_2.setTransform(89,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeBVQgCgJgCgRQgCgRAAgKIAAgJIAAgIQAAgVgKAAQgOAAgLAMQgGAGgKAUQAAAqgDAIQgDAHgHAAQgFAAgDgDQgDgDAAgFIABgFIABgQIAAgRIAAhRIABgTIgBgLIgBgLQAAgEADgEQAEgCAEAAQAKgBABAKIACAUIgBAZQgBAMABANIAAAJQAJgMAKgGQAKgGAMAAQASgBAHAMQAFAJABAUIABAVIACAYIAEAWIAAADQAAAGgDACQgDAEgFAAQgIAAgDgJg");
	this.shape_3.setTransform(79.1,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfA/QgRgHAAgKQAAgFAEgDQADgEAFAAQADAAAGAFQADADAJABIAMACQAJAAAHgCQAKgDAAgIQAAgPgVgFIgKgDQgPgDgHgEQgJgGAAgMQAAgYAXgKQAGgDAOgEIAVgHQAEgCAGgBQAFABADADQADADAAAFIABAJIACAKQAAAFgDADQgDAEgFAAQgGAAgDgFQgBgDgBgJIgaAIQgSAIAAAKIAHABQAYAFANAIQATALAAAWQgBATgQAJQgMAHgUAAQgOAAgOgEg");
	this.shape_4.setTransform(66.4,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_5.setTransform(55,21.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgrAzIAAhNIABgMIAAgLQAAgLAKAAQALAAAAATQAVgVAaAAQAJAAAEAHQAFAHAAAOIAAAIQgBAOgKgBQgKABAAgLIAAgJIgBgJQgSACgJAIQgKAHgHAPIAAA8QAAAMgLAAQgKAAAAgMg");
	this.shape_6.setTransform(43.3,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRBgQgDgDgBgFIAAgCQADgPAAgRIAAgeIAAggIgSABQgMAAAAgLQABgLATAAIALgBIABgRQADgZAKgMQALgOAYAAQARAAgBALQAAALgOAAQgbAAgEAmIAAAHIAZgCQASAAAAALQAAAJgJABIgJABIgaABIgBAZIABAVIAAAUQABAWgDAMQgBAJgIAAQgFAAgDgDg");
	this.shape_7.setTransform(31.4,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_8.setTransform(19.6,21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrAzIAAhNIABgMIAAgLQAAgLAKAAQALAAAAATQAVgVAaAAQAJAAAEAHQAFAHAAAOIAAAIQgBAOgKgBQgKABAAgLIAAgJIgBgJQgSACgJAIQgKAHgHAPIAAA8QAAAMgLAAQgKAAAAgMg");
	this.shape_9.setTransform(7.9,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(61.6,20.6,3.284,1,0,0,0,18.9,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-2.9,0,126.9,38.9), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfA/QgRgHAAgKQAAgFAEgDQADgEAFAAQADAAAGAFQACADAKABIAMACQAJAAAHgCQALgDgBgIQAAgPgVgFIgKgDQgPgDgHgEQgJgGAAgMQAAgYAXgKQAGgDAOgEIAVgHQAEgCAGgBQAFABADADQADADAAAFIABAJIACAKQAAAFgDADQgEAEgEAAQgHAAgCgFQgBgDgBgJIgaAIQgRAIgBAKIAHABQAYAFANAIQATALAAAWQgBATgQAJQgMAHgUAAQgOAAgOgEg");
	this.shape.setTransform(13.8,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIgBgUIAAgUIABgbIABgZQAAgFAEgDQADgDAEAAQAEAAADADQAEADAAAFIgCAZIgBAbIAAAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgGg9QgEgEAAgFQAAgGAEgEQAEgDAEAAQAGAAAEADQADAEAAAGQAAAFgDAEQgEAEgGAAQgEAAgEgEg");
	this.shape_1.setTransform(5.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(12.2,20.6,0.646,1,0,0,0,18.8,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1,0,26,38.1), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbA3IgDgZIgBgZIAAgJIABgLQAAgYgKAAQgMAAgLAPQgKANgGAUIgBALIgBALIABAKIABAKQAAAFgDADQgEAEgEAAQgFAAgDgEQgDgDAAgFIgBgKIAAgKIABgfIABggIAAgLIAAgKQAAgFADgDQAEgDAEAAQALAAABAOIAAANQATgZASAAQASAAAIAQQAEALABAUIAAAMIgBAJQAAAJADAPQACAPABAJQAAAFgDADQgEADgFAAQgJAAgCgKg");
	this.shape.setTransform(56.6,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkA5IgIgIIgTAJQgIADgEAAQgbAAgMgPQgLgOAAgdQAAgaATgTQASgTAZAAQAKAAAMAFQAPAGAAAJQAAADgCACIgBAOIgBAYQAAAOACAIQABAFAGAPIACAGIABACQAAAEgDADQgDADgEAAQgDAAgFgFgAgSgbQgNAOAAARQAAATAHAJQAGAJANAAQAKAAAHgEQAFgCAHgGQgEgdAAgPIABgKIACgMIgHgEIgFgBQgRAAgMAPg");
	this.shape_1.setTransform(44.5,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_2.setTransform(32.5,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAxQgQgOAAgYQAAgWAPgYQAQgbAVAAQALAAANAFQARAHAAAJQAAAEgDAEQgCADgFAAQgDAAgCgCIgFgEQgHgFgOAAQgLAAgMAUQgJATgBANQABAPAJAIQAKAIAOAAQAHAAAHgDIANgHIAFgCQAEAAADADQAEADAAAFQAAAIgSAIQgPAGgKAAQgWAAgPgOg");
	this.shape_3.setTransform(20.2,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghAwQgPgQgBgaQgBgYAOgUQAQgXAbAAQAWABAMAUQAJAQAAAYQgBAYgMASQgPATgXAAQgSABgOgOgAgUgWQgHANAAAPQAAARAJAJQAHAHAKAAQALAAAJgIQAJgKABgQQABgrgZAAIgBAAQgOAAgKAQg");
	this.shape_4.setTransform(7.9,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(33.5,20.6,1.803,1,0,0,0,18.9,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1.9,0,69.7,38.2), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(20.6,20.6,1.104,1,0,0,0,18.6,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,0,43,38.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbA3IgDgZIgCgZIABgJIABgLQgBgYgIAAQgNAAgKAPQgLANgGAUIgBALIAAALIAAAKIABAKQAAAFgDADQgDAEgFAAQgFAAgDgEQgDgDAAgFIgBgKIgBgKIACgfIACggIAAgLIgBgKQAAgFADgDQAEgDAEAAQAKAAABAOIAAANQAUgZATAAQASAAAGAQQAGALAAAUIAAAMIAAAJQgBAJADAPQACAPAAAJQAAAFgDADQgDADgFAAQgKAAgBgKg");
	this.shape.setTransform(14.8,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIgBgUIAAgUIABgbIABgZQAAgFAEgDQADgDAEAAQAEAAADADQAEADAAAFIgCAZIgBAbIAAAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgGg9QgEgEAAgFQAAgGAEgEQAEgDAEAAQAGAAAEADQADAEAAAGQAAAFgDAEQgEAEgGAAQgEAAgEgEg");
	this.shape_1.setTransform(5.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(12.1,20.6,0.646,1,0,0,0,18.7,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,0,26,38.1), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBCQgDgDAAgFQAAgOgDgaQgCgaAAgNQAAgMgEgHQgIAEgIAIIgNAPIgGAHIgBASIgBAUIABAJIABAJQAAAFgDADQgEADgEAAQgNAAAAgdIABgUIABgTIgBgSIgBgSQAAgZAMAAQAEAAAEADQADAEAAAFIAAAGIgBAHIAAAMQAGgMAMgKQALgJAIAAQASAAAFARQAGgIAJgEQAIgEALAAQATAAAHAUIAFAfIAIBAQAAAEgDADQgEAEgFAAQgJAAgBgKIgEgjIgEgiQgBgIgDgHQgEgKgEAAQgEAAgMAHQgLAGgDAEIABAWIADAdQACARAAAMQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(44.6,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIgBgUIAAgUIABgbIACgZQAAgFACgDQAEgDAFAAQADAAAEADQACADAAAFIgBAZIgBAbIABAUIAAAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgHg9QgDgEAAgFQAAgGADgEQAFgDAEAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgEAEgFAAQgEAAgFgEg");
	this.shape_1.setTransform(32.5,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAHAgQgCgJgCgRIgDgYIgJAVIgRAuQgCAEgDADQgDAGgHAAQgJABgIgiQgEgRgEgdIgDgRIgBgRQAAgFADgDQADgDAFAAQAJAAACAJIACARIACAQIAGAyQANgiANgtQAEgNAIAAQAJAAADAPIAHAoIAIArIAJgeIAOg9QACgGAIgBQAEABAEADQADADAAAFIgBAEQgIAlgPAtQgDAKgHAMQgEAFgHAAQgMAAgHgfg");
	this.shape_2.setTransform(21.2,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeA/QgSgHAAgKQAAgFADgDQAEgEAEAAQAEAAAGAFQACADAKABIANACQAIAAAHgCQALgDAAgIQgBgPgVgFIgLgDQgPgDgFgEQgKgGAAgMQAAgYAWgKQAHgDAOgEIAVgHQAFgCAFgBQAFABADADQADADAAAFIABAJIACAKQAAAFgDADQgDAEgFAAQgGAAgDgFQgCgDgBgJIgaAIQgQAIgBAKIAHABQAYAFANAIQASALAAAWQABATgRAJQgNAHgSAAQgPAAgNgEg");
	this.shape_3.setTransform(7.4,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(28,20.6,1.454,1,0,0,0,18.8,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-0.5,0,56.2,38.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAwQgPgQgBgaQgBgYAOgUQAQgXAbAAQAWABAMAUQAJAQAAAYQgBAYgMASQgPATgXAAQgSABgOgOgAgUgWQgHANAAAPQAAARAJAJQAHAHAKAAQALAAAJgIQAJgKABgQQABgrgZAAIgBAAQgOAAgKAQg");
	this.shape.setTransform(23.6,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBTQgEgEAAgFIABgFIAAgFIAAgQIgBgRQAAgQgDgcIgDgtIgKAAQgZAAgOgEQgJgCAAgJQAAgEADgEQAEgEAFABIASACIASABIAUAAIAUgBIAaACIAZABQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAIgZgBIgagCIgIAAQAAAQADAjQADAfAAASIAAAMIABAMQAAAIgCAFQgEAIgGAAQgEAAgDgDg");
	this.shape_1.setTransform(10.9,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(16.7,20.6,0.888,1,0,0,0,18.8,16.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,0,35,38.1), null);


(lib.STAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TEXT
	this.instance = new lib.GREAT();
	this.instance.parent = this;
	this.instance.setTransform(163.9,172.7,1,1,0,0,0,150.5,39.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78));

	// Layer 5
	this.ring = new lib.RING();
	this.ring.parent = this;
	this.ring.setTransform(168.2,169,1,1,0,0,0,191.1,191.1);

	this.timeline.addTween(cjs.Tween.get(this.ring).wait(1).to({regX:190.7,regY:193.2,rotation:9.3,x:167.4,y:171},0).wait(1).to({rotation:18.7,x:167.1,y:170.9},0).wait(1).to({rotation:28,x:166.8,y:170.7},0).wait(1).to({rotation:37.4,x:166.6,y:170.4},0).wait(1).to({rotation:46.7,x:166.3,y:170.1},0).wait(1).to({rotation:56.1,x:166.2,y:169.9},0).wait(1).to({rotation:65.4,x:166.1,y:169.5},0).wait(1).to({rotation:74.7,x:166,y:169.1},0).wait(1).to({rotation:84.1,y:168.9},0).wait(1).to({rotation:93.4,x:166.1,y:168.4},0).wait(1).to({rotation:102.8,x:166.2,y:168.1},0).wait(1).to({rotation:112.1,x:166.4,y:167.8},0).wait(1).to({rotation:121.4,x:166.6,y:167.5},0).wait(1).to({rotation:130.8,x:166.8,y:167.3},0).wait(1).to({rotation:140.1,x:167.1,y:167.1},0).wait(1).to({rotation:149.5,x:167.4,y:166.9},0).wait(1).to({rotation:158.8,x:167.8,y:166.8},0).wait(1).to({rotation:168.2,x:168.1},0).wait(1).to({rotation:177.5,x:168.5},0).wait(1).to({rotation:186.8,x:168.8,y:167},0).wait(1).to({rotation:196.2,x:169.1},0).wait(1).to({rotation:205.5,x:169.4,y:167.2},0).wait(1).to({rotation:214.9,x:169.7,y:167.5},0).wait(1).to({rotation:224.2,x:169.9,y:167.7},0).wait(1).to({rotation:233.6,x:170.1,y:168.1},0).wait(1).to({rotation:242.9,x:170.2,y:168.4},0).wait(1).to({rotation:252.2,x:170.3,y:168.7},0).wait(1).to({rotation:261.6,x:170.2,y:169},0).wait(1).to({rotation:270.9,x:170.3,y:169.4},0).wait(1).to({rotation:280.3,x:170.2,y:169.7},0).wait(1).to({rotation:289.6,x:170.1,y:170},0).wait(1).to({rotation:298.9,x:169.8,y:170.3},0).wait(1).to({rotation:308.3,x:169.6,y:170.5},0).wait(1).to({rotation:317.6,x:169.3,y:170.8},0).wait(1).to({rotation:327,x:169,y:170.9},0).wait(1).to({rotation:336.3,x:168.7,y:171.1},0).wait(1).to({rotation:345.7,x:168.3},0).wait(1).to({rotation:355,x:168},0).wait(1).to({regX:191.1,regY:191.1,rotation:360,x:168.2,y:169},0).wait(1).to({regX:190.7,regY:193.2,rotation:369.3,x:167.4,y:171},0).wait(1).to({rotation:378.7,x:167.1,y:170.9},0).wait(1).to({rotation:388,x:166.8,y:170.7},0).wait(1).to({rotation:397.4,x:166.6,y:170.4},0).wait(1).to({rotation:406.7,x:166.3,y:170.1},0).wait(1).to({rotation:416.1,x:166.2,y:169.9},0).wait(1).to({rotation:425.4,x:166.1,y:169.5},0).wait(1).to({rotation:434.7,x:166,y:169.1},0).wait(1).to({rotation:444.1,y:168.9},0).wait(1).to({rotation:453.4,x:166.1,y:168.4},0).wait(1).to({rotation:462.8,x:166.2,y:168.1},0).wait(1).to({rotation:472.1,x:166.4,y:167.8},0).wait(1).to({rotation:481.4,x:166.6,y:167.5},0).wait(1).to({rotation:490.8,x:166.8,y:167.3},0).wait(1).to({rotation:500.1,x:167.1,y:167.1},0).wait(1).to({rotation:509.5,x:167.4,y:166.9},0).wait(1).to({rotation:518.8,x:167.8,y:166.8},0).wait(1).to({rotation:528.2,x:168.1},0).wait(1).to({rotation:537.5,x:168.5},0).wait(1).to({rotation:546.8,x:168.8,y:167},0).wait(1).to({rotation:556.2,x:169.1},0).wait(1).to({rotation:565.5,x:169.4,y:167.2},0).wait(1).to({rotation:574.9,x:169.7,y:167.5},0).wait(1).to({rotation:584.2,x:169.9,y:167.7},0).wait(1).to({rotation:593.6,x:170.1,y:168.1},0).wait(1).to({rotation:602.9,x:170.2,y:168.4},0).wait(1).to({rotation:612.2,x:170.3,y:168.7},0).wait(1).to({rotation:621.6,x:170.2,y:169},0).wait(1).to({rotation:630.9,x:170.3,y:169.4},0).wait(1).to({rotation:640.3,x:170.2,y:169.7},0).wait(1).to({rotation:649.6,x:170.1,y:170},0).wait(1).to({rotation:658.9,x:169.8,y:170.3},0).wait(1).to({rotation:668.3,x:169.6,y:170.5},0).wait(1).to({rotation:677.6,x:169.3,y:170.8},0).wait(1).to({rotation:687,x:169,y:170.9},0).wait(1).to({rotation:696.3,x:168.7,y:171.1},0).wait(1).to({rotation:705.7,x:168.3},0).wait(1).to({rotation:715,x:168},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.star_big();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.2,172.6,1,1,0,0,0,83.7,106.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,51,255,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:88,regY:98.9,rotation:-9.3,x:167.3,y:164.7},0).wait(1).to({rotation:-18.7,x:165.9,y:164.3},0).wait(1).to({rotation:-28,x:164.6,y:164.1},0).wait(1).to({rotation:-37.4,x:163.2,y:164.2},0).wait(1).to({rotation:-46.7,x:161.8,y:164.4},0).wait(1).to({rotation:-56.1,x:160.5,y:164.9},0).wait(1).to({rotation:-65.4,x:159.3,y:165.6},0).wait(1).to({rotation:-74.7,x:158.2,y:166.5},0).wait(1).to({rotation:-84.1,x:157.3,y:167.5},0).wait(1).to({rotation:-93.4,x:156.6,y:168.7},0).wait(1).to({rotation:-102.8,x:156.1,y:170},0).wait(1).to({rotation:-112.1,x:155.8,y:171.3},0).wait(1).to({rotation:-121.4,x:155.6,y:172.7},0).wait(1).to({rotation:-130.8,x:155.8,y:174.1},0).wait(1).to({rotation:-140.1,x:156.1,y:175.4},0).wait(1).to({rotation:-149.5,x:156.7,y:176.7},0).wait(1).to({rotation:-158.8,x:157.5,y:177.9},0).wait(1).to({rotation:-168.2,x:158.4,y:178.9},0).wait(1).to({rotation:-177.5,x:159.5,y:179.7},0).wait(1).to({rotation:-186.8,x:160.7,y:180.4},0).wait(1).to({rotation:-196.2,x:162,y:180.8},0).wait(1).to({rotation:-205.5,x:163.4,y:181},0).wait(1).to({rotation:-214.9,x:164.7,y:181.1},0).wait(1).to({rotation:-224.2,x:166.1,y:180.8},0).wait(1).to({rotation:-233.6,x:167.4,y:180.5},0).wait(1).to({rotation:-242.9,x:168.6,y:179.8},0).wait(1).to({rotation:-252.2,x:169.8,y:179},0).wait(1).to({rotation:-261.6,x:170.7,y:178},0).wait(1).to({rotation:-270.9,x:171.5,y:176.9},0).wait(1).to({rotation:-280.3,x:172.1,y:175.6},0).wait(1).to({rotation:-289.6,x:172.5,y:174.3},0).wait(1).to({rotation:-298.9,x:172.6,y:172.8},0).wait(1).to({rotation:-308.3,y:171.5},0).wait(1).to({rotation:-317.6,x:172.3,y:170.1},0).wait(1).to({rotation:-327,x:171.8,y:168.8},0).wait(1).to({rotation:-336.3,x:171.1,y:167.6},0).wait(1).to({rotation:-345.7,x:170.2,y:166.6},0).wait(1).to({rotation:-355,x:169.1,y:165.7},0).wait(1).to({regX:83.7,regY:106.2,rotation:-360,x:164.2,y:172.6},0).wait(1).to({regX:88,regY:98.9,rotation:-369.3,x:167.3,y:164.7},0).wait(1).to({rotation:-378.7,x:165.9,y:164.3},0).wait(1).to({rotation:-388,x:164.6,y:164.1},0).wait(1).to({rotation:-397.4,x:163.2,y:164.2},0).wait(1).to({rotation:-406.7,x:161.8,y:164.4},0).wait(1).to({rotation:-416.1,x:160.5,y:164.9},0).wait(1).to({rotation:-425.4,x:159.3,y:165.6},0).wait(1).to({rotation:-434.7,x:158.2,y:166.5},0).wait(1).to({rotation:-444.1,x:157.3,y:167.5},0).wait(1).to({rotation:-453.4,x:156.6,y:168.7},0).wait(1).to({rotation:-462.8,x:156.1,y:170},0).wait(1).to({rotation:-472.1,x:155.8,y:171.3},0).wait(1).to({rotation:-481.4,x:155.6,y:172.7},0).wait(1).to({rotation:-490.8,x:155.8,y:174.1},0).wait(1).to({rotation:-500.1,x:156.1,y:175.4},0).wait(1).to({rotation:-509.5,x:156.7,y:176.7},0).wait(1).to({rotation:-518.8,x:157.5,y:177.9},0).wait(1).to({rotation:-528.2,x:158.4,y:178.9},0).wait(1).to({rotation:-537.5,x:159.5,y:179.7},0).wait(1).to({rotation:-546.8,x:160.7,y:180.4},0).wait(1).to({rotation:-556.2,x:162,y:180.8},0).wait(1).to({rotation:-565.5,x:163.4,y:181},0).wait(1).to({rotation:-574.9,x:164.7,y:181.1},0).wait(1).to({rotation:-584.2,x:166.1,y:180.8},0).wait(1).to({rotation:-593.6,x:167.4,y:180.5},0).wait(1).to({rotation:-602.9,x:168.6,y:179.8},0).wait(1).to({rotation:-612.2,x:169.8,y:179},0).wait(1).to({rotation:-621.6,x:170.7,y:178},0).wait(1).to({rotation:-630.9,x:171.5,y:176.9},0).wait(1).to({rotation:-640.3,x:172.1,y:175.6},0).wait(1).to({rotation:-649.6,x:172.5,y:174.3},0).wait(1).to({rotation:-658.9,x:172.6,y:172.8},0).wait(1).to({rotation:-668.3,y:171.5},0).wait(1).to({rotation:-677.6,x:172.3,y:170.1},0).wait(1).to({rotation:-687,x:171.8,y:168.8},0).wait(1).to({rotation:-696.3,x:171.1,y:167.6},0).wait(1).to({rotation:-705.7,x:170.2,y:166.6},0).wait(1).to({rotation:-715,x:169.1,y:165.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.4,23.3,319,295.5);


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
(lib.inf_Scene9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		this.vol_mute.addEventListener("click", volMute.bind(this));
		
		//Nav buttons -----------------------------------------
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		this.btn_goNext.mouseEnabled = false;
		
		
		//volume vars -----------------------------------------
		var prev_vol = 1;
		var mute= false;
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmTest',{loop:-1});
		bgm.volume = 1;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		//volume functions -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume *0.5;
			if(!mute){
				bgm.volume = createjs.Sound.volume *0.5;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.5;
			if(!mute){
				bgm.volume = createjs.Sound.volume +0.5;
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
		
		 window.open ("inf_Scene10.html","_self");
		}
		
		
		function openPrev(){
		
		 window.open ("inf_Scene8.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.congrats = new lib.STAR();
	this.congrats.parent = this;
	this.congrats.setTransform(277.9,197.6,0.492,0.492,0,0,0,168.7,167.8);
	this.congrats.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.congrats).wait(1));

	// items
	this.vol_mute = new lib.vol_mute();
	this.vol_mute.parent = this;
	this.vol_mute.setTransform(525.7,17.4,1,1,0,0,0,15,14.1);
	new cjs.ButtonHelper(this.vol_mute, 0, 1, 2, false, new lib.vol_mute(), 3);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(55.9,350.7,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(492.3,350.7);
	this.btn_goNext.visible = false;
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.vol_up = new lib.vol_pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(487.2,17.9,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.vol_pos(), 3);

	this.vol_dwn = new lib.vol_neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(465.3,17.9,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.vol_neg(), 3);

	this.btn_menu = new lib.menu_main();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(404.4,17.9,1,1.143,0,0,0,23.4,10.5);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.menu_main(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAYBrQgBgLgUgUQgQgRgKAAIAAh1QAKAAASgTQATgTAAgKg");
	this.shape.setTransform(446.2,17.6,0.687,0.681);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADBMQgQgRgKAAIAAh1QAKgBASgSQATgTAAgJIAADTQgBgKgUgUg");
	this.shape_1.setTransform(446.2,17.6,0.687,0.681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AgEghIAJAAQADAAAAACIAAA/QAAACgDAAIgJAAQgDAAAAgCIAAg/QAAgCADAAg");
	this.shape_2.setTransform(441.7,17.7,1,1.003);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAiQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAg/QAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAJAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAA/QAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_3.setTransform(441.7,17.7,1,1.003);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("AkZh3IIzAAQAwAAAAAwIAACPQAAAwgwAAIozAAQgwAAAAgwIAAiPQAAgwAwAAg");
	this.shape_4.setTransform(469.2,17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkYB4QgxAAAAgwIAAiPQAAgwAxAAIIxAAQAxAAAAAwIAACPQAAAwgxAAg");
	this.shape_5.setTransform(469.2,17.9);

	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,393.5);

	this.item7 = new lib.Symbol8();
	this.item7.parent = this;
	this.item7.setTransform(400.1,298.5,1,1,0,0,0,59.1,18);

	this.item6 = new lib.Symbol7();
	this.item6.parent = this;
	this.item6.setTransform(322.1,298.5,1,1,0,0,0,10.9,18);

	this.item5 = new lib.Symbol6();
	this.item5.parent = this;
	this.item5.setTransform(271.7,298.5,1,1,0,0,0,32.2,18);

	this.item4 = new lib.Symbol5();
	this.item4.parent = this;
	this.item4.setTransform(213,298.5,1,1,0,0,0,20.4,18);

	this.item3 = new lib.Symbol4();
	this.item3.parent = this;
	this.item3.setTransform(174.6,298.5,1,1,0,0,0,11.3,18);

	this.item2 = new lib.Symbol3();
	this.item2.parent = this;
	this.item2.setTransform(130.3,298.5,1,1,0,0,0,27.7,18);

	this.item1 = new lib.Symbol2();
	this.item1.parent = this;
	this.item1.setTransform(80.3,298.5,1,1,0,0,0,16,18);

	this.correct3 = new lib.Symbol1();
	this.correct3.parent = this;
	this.correct3.setTransform(102.2,136.9,1,1,0,0,0,18.4,18.4);
	this.correct3.visible = false;

	this.correct6 = new lib.beach();
	this.correct6.parent = this;
	this.correct6.setTransform(349.4,198.7,1,1,0,0,0,26.8,14.6);
	this.correct6.visible = false;

	this.correct4 = new lib.the();
	this.correct4.parent = this;
	this.correct4.setTransform(156.7,183.7,1,1,0,0,0,21.9,21.9);
	this.correct4.visible = false;

	this.correct2 = new lib.tumble();
	this.correct2.parent = this;
	this.correct2.setTransform(133.9,104,1,1,0,0,0,30.8,14.6);
	this.correct2.visible = false;

	this.correct1 = new lib.to();
	this.correct1.parent = this;
	this.correct1.setTransform(48.9,97.8,1,1,0,0,0,18.1,18.1);
	this.correct1.visible = false;

	this.correct5 = new lib.likes();
	this.correct5.parent = this;
	this.correct5.setTransform(145.6,144.7,1,1,0,0,0,21.2,14.6);
	this.correct5.visible = false;

	this.correct7 = new lib.sam();
	this.correct7.parent = this;
	this.correct7.setTransform(435.1,198.4,1,1,0,0,0,19.9,14.6);
	this.correct7.visible = false;

	this.instance_1 = new lib.Directions2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(387.9,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("AAHAAQAAAKgHAGQgCAEgEACIAAgqQAEABACAEQACACACADQADAFAAAFg");
	this.shape_6.setTransform(450.7,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGgVQAEACACAEIABABIADADQADAGAAAFQAAAJgGAGIgBABQgCAEgEABg");
	this.shape_7.setTransform(447.5,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.instance_1},{t:this.correct7},{t:this.correct5},{t:this.correct1},{t:this.correct2},{t:this.correct4},{t:this.correct6},{t:this.correct3},{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.vol_mute}]}).wait(1));

	// Directions
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_8.setTransform(454.8,76.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmBXQgOgDgBgJQAAgKAKAAIAOACQAJACAMAAQAUAAAIgVQAGgNAAgdQgGALgIAGQgJAGgKAAQgUAAgMgOQgNgOgBgVQAAgfASgSQASgTAeAAQALAAAGACQAHADAFAGQAMAAgBANQAAAIgCANIgDAVIgDAlQAAAXgEAOQgFASgLAJQgOAKgZAAQgOAAgKgCgAgUg4QgLAOABAUQAAAQAFAIQAHAIAMAAQAKAAALgMQAKgMABgLIAGgmQgFgEgFgCIgKgBQgVAAgLAOg");
	this.shape_9.setTransform(445.6,74.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAcA3IgEgZIgCgZIABgJIAAgLQABgYgKAAQgMAAgKAPQgLANgGAUIgBALIAAALIAAAKIABAKQAAAFgDADQgDAEgFAAQgFAAgDgEQgDgDAAgFIgBgKIgBgKIACgfIABggIAAgLIAAgKQAAgFADgDQADgDAFAAQALAAABAOIAAANQATgZASAAQATAAAHAQQAEALABAUIAAAMIAAAJQAAAJACAPQADAPgBAJQAAAFgCADQgEADgFAAQgJAAgBgKg");
	this.shape_10.setTransform(433.9,71.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIAAgUIgBgUIABgbIACgZQAAgFACgDQADgDAFAAQAEAAADADQADADAAAFIgBAZIgBAbIAAAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgHg9QgDgEAAgFQAAgGADgEQAFgDAEAAQAFAAAFADQADAEAAAGQAAAFgDAEQgFAEgFAAQgEAAgFgEg");
	this.shape_11.setTransform(424.6,68.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAeBVQgCgKgCgQQgCgQAAgLIAAgJIAAgJQAAgUgKAAQgOAAgLAMQgGAGgKATQAAArgDAIQgDAHgHAAQgFAAgDgDQgDgDAAgFIABgFIABgQIAAgRIAAhSIABgSIgBgLIgBgKQAAgFADgDQAEgEAEAAQAKABABAJIACAUIgBAYQgBANABAMIAAAKQAJgMAKgGQAKgHAMAAQASAAAHANQAFAIABAUIABAVIACAYIAEAXIAAADQAAAFgDADQgDACgFAAQgIAAgDgIg");
	this.shape_12.setTransform(414.7,68.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfA/QgRgHAAgLQAAgEAEgEQADgDAEAAQAEAAAFAFQAEADAJACIAMABQAJAAAHgCQAKgEAAgGQABgQgWgFIgKgDQgQgDgGgFQgJgEAAgOQAAgXAXgKQAGgDAOgEIAVgHQAFgCAFAAQAFAAADADQADADAAAFIACAKIABAJQAAAFgDAEQgDACgFAAQgGAAgCgDQgCgDgBgKIgaAIQgSAHAAALIAHABQAZAFAMAJQASAKABAXQAAASgQAJQgNAIgUAAQgOAAgOgFg");
	this.shape_13.setTransform(402,71.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_14.setTransform(390.6,71.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrA0IAAhOIABgLIAAgLQAAgMAKAAQALABAAASQAVgVAaAAQAJAAAEAHQAFAHAAANIAAAIQgBAPgKAAQgKAAAAgMIAAgHIgBgKQgSADgJAHQgKAHgHAPIAAA9QAAALgLAAQgKAAAAgLg");
	this.shape_15.setTransform(378.9,71.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRBgQgEgDAAgFIAAgCQADgPAAgRIAAgeIAAggIgSABQgMAAAAgLQABgLATAAIALgBIACgRQACgZAKgMQALgOAYAAQARAAgBALQAAALgOAAQgbAAgEAmIAAAHIAZgCQASAAAAALQAAAJgJABIgJABIgaABIAAAZIAAAVIAAAUQAAAWgCAMQgBAJgIAAQgFAAgDgDg");
	this.shape_16.setTransform(367,69.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_17.setTransform(355.2,71.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgrA0IAAhOIABgLIAAgLQAAgMAKAAQALABAAASQAVgVAaAAQAJAAAEAHQAFAHAAANIAAAIQgBAPgKAAQgKAAAAgMIAAgHIgBgKQgSADgJAHQgKAHgHAPIAAA9QAAALgLAAQgKAAAAgLg");
	this.shape_18.setTransform(343.5,71.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeA/QgSgHAAgLQAAgEADgEQAEgDAEAAQAEAAAFAFQAEADAJACIAMABQAJAAAHgCQAKgEAAgGQABgQgWgFIgLgDQgOgDgHgFQgJgEAAgOQAAgXAXgKQAGgDAOgEIAVgHQAEgCAGAAQAFAAADADQADADAAAFIACAKIABAJQAAAFgDAEQgDACgFAAQgGAAgCgDQgCgDgCgKIgZAIQgSAHAAALIAHABQAZAFAMAJQASAKABAXQAAASgQAJQgNAIgUAAQgOAAgNgFg");
	this.shape_19.setTransform(324.9,71.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIAAgUIgBgUIABgbIACgZQAAgFACgDQADgDAFAAQAEAAADADQADADAAAFIgBAZIgBAbIAAAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgHg9QgDgEAAgFQAAgGADgEQAFgDAEAAQAFAAAFADQADAEAAAGQAAAFgDAEQgFAEgFAAQgEAAgFgEg");
	this.shape_20.setTransform(316.6,68.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAcA3IgEgZIgBgZIAAgJIAAgLQABgYgKAAQgMAAgLAPQgKANgGAUIgBALIgBALIABAKIABAKQAAAFgDADQgDAEgFAAQgFAAgDgEQgDgDAAgFIgBgKIgBgKIACgfIABggIAAgLIAAgKQAAgFADgDQADgDAFAAQALAAABAOIAAANQATgZASAAQASAAAIAQQAEALABAUIAAAMIgBAJQAAAJADAPQACAPAAAJQAAAFgCADQgEADgFAAQgJAAgBgKg");
	this.shape_21.setTransform(300.6,71.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAkA5IgIgIIgTAJQgIADgEAAQgbAAgMgPQgLgOAAgdQAAgaATgTQASgTAZAAQAKAAAMAFQAPAGAAAJQAAADgCACIgBAOIgBAYQAAAOACAIQABAFAGAPIACAGIABACQAAAEgDADQgDADgEAAQgDAAgFgFgAgSgbQgNAOAAARQAAATAHAJQAGAJANAAQAKAAAHgEQAFgCAHgGQgEgdAAgPIABgKIACgMIgHgEIgFgBQgRAAgMAPg");
	this.shape_22.setTransform(288.5,71.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_23.setTransform(276.5,71.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgfAxQgQgOgBgYQABgWAPgYQAQgbAVAAQALAAANAFQARAHAAAJQAAAEgDAEQgCADgEAAQgEAAgCgCIgFgEQgHgFgOAAQgLAAgMAUQgJATgBANQABAPAJAIQAKAIAOAAQAHAAAHgDIANgHIAFgCQAFAAADADQADADAAAFQAAAIgSAIQgPAGgKAAQgWAAgPgOg");
	this.shape_24.setTransform(264.2,71.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghAwQgPgQgBgaQgBgYAOgUQAQgWAbAAQAWgBAMAVQAJAQAAAYQgBAYgMARQgPAVgXAAQgSAAgOgOgAgUgWQgHANAAAPQAAARAJAIQAHAIAKAAQALAAAJgJQAJgJABgQQABgqgZgBIgBAAQgPAAgJAQg");
	this.shape_25.setTransform(251.9,71.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_26.setTransform(233.1,71.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAeBVQgCgKgCgQQgCgQAAgLIAAgJIAAgJQAAgUgKAAQgOAAgLAMQgGAGgKATQAAArgDAIQgDAHgHAAQgFAAgDgDQgDgDAAgFIABgFIABgQIAAgRIAAhSIABgSIgBgLIgBgKQAAgFADgDQAEgEAEAAQAKABABAJIACAUIgBAYQgBANABAMIAAAKQAJgMAKgGQAKgHAMAAQASAAAHANQAFAIABAUIABAVIACAYIAEAXIAAADQAAAFgDADQgDACgFAAQgIAAgDgIg");
	this.shape_27.setTransform(220.1,68.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHBPQgCgDAAgEIAAgNIAAgMIgChBIgZgCQgKgBAAgKQAAgFADgEQADgCAFAAIAXABIgBgPIAAgOQAAgEAEgDQACgEAGAAQAIAAACAQIABAKIAAAHIgBAHIAQgBQAMAAADABQAHACAAAIQAAAFgDADQgDAEgFgBIgGAAIgFAAIgPABIACBCIAAAFIAAAGQABAYgNAAQgDAAgEgDg");
	this.shape_28.setTransform(207.9,69.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAcA3IgEgZIgCgZIABgJIAAgLQABgYgKAAQgMAAgLAPQgKANgGAUIgBALIgBALIABAKIABAKQAAAFgDADQgDAEgFAAQgFAAgDgEQgDgDAAgFIgBgKIgBgKIACgfIABggIAAgLIAAgKQAAgFADgDQADgDAFAAQALAAABAOIAAANQATgZASAAQASAAAIAQQAEALABAUIAAAMIgBAJQAAAJADAPQACAPAAAJQAAAFgCADQgEADgFAAQgJAAgBgKg");
	this.shape_29.setTransform(189.9,71.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIAAgUIgBgUIABgbIACgZQAAgFACgDQAEgDAEAAQAEAAAEADQACADAAAFIgBAZIgBAbIAAAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgHg9QgDgEAAgFQAAgGADgEQAEgDAFAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_30.setTransform(180.6,68.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGBCQgDgDAAgFQAAgOgDgaQgCgaAAgNQAAgMgEgHQgIAEgIAIIgNAPIgGAHIgBASIgBAUIABAJIABAJQAAAFgDADQgEADgEAAQgNAAAAgdIABgUIABgTIgBgSIgBgSQAAgZAMAAQAEAAAEADQADAEAAAFIAAAGIgBAHIAAAMQAGgMAMgKQALgJAIAAQASAAAFARQAGgIAJgEQAIgEALAAQATAAAHAUIAFAfIAIBAQAAAEgDADQgEAEgFAAQgJAAgBgKIgEgjIgEgiQgBgIgDgHQgEgKgEAAQgEAAgMAHQgLAGgDAEIABAWIADAdQACARAAAMQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_31.setTransform(161.6,71.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIgBgUIAAgUIABgbIACgZQAAgFADgDQADgDAFAAQADAAAEADQACADAAAFIgBAZIgBAbIABAUIAAAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgHg9QgDgEAAgFQAAgGADgEQAFgDAEAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgEAEgFAAQgEAAgFgEg");
	this.shape_32.setTransform(149.5,68.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAHAgQgCgJgCgQIgDgYIgJAUIgRAuQgCAEgDADQgDAGgHABQgJAAgIgiQgEgRgEgdIgDgRIgBgRQAAgFADgDQADgDAFAAQAJAAACAKIACAQIACARIAGAwQANghANgtQAEgMAIAAQAJgBADAOIAHApIAIArIAJgfIAOg7QACgIAIABQAEAAAEACQADAEAAAEIgBAGQgIAkgPAuQgDAJgHALQgEAGgHAAQgMAAgHgfg");
	this.shape_33.setTransform(138.2,71.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeA/QgSgHAAgLQAAgEADgEQAEgDAEAAQAEAAAGAFQACADAKACIANABQAIAAAHgCQALgEAAgGQgBgQgVgFIgLgDQgPgDgFgFQgKgEAAgOQAAgXAWgKQAHgDAOgEIAVgHQAFgCAFAAQAFAAADADQADADAAAFIABAKIACAJQAAAFgDAEQgDACgFAAQgGAAgDgDQgCgDgBgKIgaAIQgQAHgBALIAHABQAYAFANAJQASAKAAAXQABASgRAJQgNAIgSAAQgPAAgNgFg");
	this.shape_34.setTransform(124.4,71.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AghAwQgPgQgBgaQgBgYAOgUQAQgWAbAAQAWgBAMAVQAJAQAAAYQgBAYgMARQgPAVgXAAQgSAAgOgOgAgUgWQgHANAAAPQAAARAJAIQAHAIAKAAQALAAAJgJQAJgJABgQQABgqgZgBIgBAAQgPAAgJAQg");
	this.shape_35.setTransform(106,71.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHBTQgEgEAAgFIABgFIAAgFIAAgQIgBgRQAAgQgDgcIgDgtIgKAAQgZAAgOgEQgJgCAAgJQAAgEADgEQAEgEAFABIASACIASABIAUAAIAUgBIAaACIAZABQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAIgZgBIgagCIgIAAQAAAQADAjQADAfAAASIAAAMIABAMQAAAIgCAFQgEAIgGAAQgEAAgDgDg");
	this.shape_36.setTransform(93.3,68.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3,1,1).p("AQbCyICoEpIS6AAABUm9IqNAAI19gBIjbAAIjrj5A28g3IjuAAIkMmHAAjK4IAAjdIAAkzAo5FjIh4B4IDwAAIHkAAISgAAAo5FjIB4B4AyFF9Ik3m0Ao5m9IAAMgEgjrAHbIY6AAAr8g3IrAAA");
	this.shape_37.setTransform(273.6,165.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Highlight
	this.target6 = new lib.Target();
	this.target6.parent = this;
	this.target6.setTransform(309.1,188.3,0.439,0.46,0,-0.5,0,-49.3,-24.2);
	this.target6.alpha = 0;

	this.target4 = new lib.Target();
	this.target4.parent = this;
	this.target4.setTransform(150.7,178.5,0.235,0.382,0,0,0,0.5,0.4);
	this.target4.alpha = 0;

	this.target3 = new lib.Target();
	this.target3.parent = this;
	this.target3.setTransform(99.9,140.3,0.235,0.382,0,0,0,0.5,0.4);
	this.target3.alpha = 0;

	this.target5 = new lib.Target();
	this.target5.parent = this;
	this.target5.setTransform(116.8,131.1,0.616,0.613,0,-0.3,0,-51,-25.1);
	this.target5.alpha = 0;

	this.target1 = new lib.Target();
	this.target1.parent = this;
	this.target1.setTransform(45.1,91.1,0.304,0.403,0,0,0,-50,-25.6);
	this.target1.alpha = 0;

	this.target2 = new lib.Target();
	this.target2.parent = this;
	this.target2.setTransform(112.5,93.6,0.439,0.46,0,-0.5,0,-49.3,-24.2);
	this.target2.alpha = 0;

	this.target7 = new lib.Target();
	this.target7.parent = this;
	this.target7.setTransform(431.1,183.4,0.608,0.595,0,0,0,-50.6,-25.1);
	this.target7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.target7},{t:this.target2},{t:this.target1},{t:this.target5},{t:this.target3},{t:this.target4},{t:this.target6}]}).wait(1));

	// background
	this.instance_2 = new lib.QuizB("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(273.2,192.1);

	this.text = new cjs.Text("", "18px 'ComicSansMS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 325;
	this.text.parent = this;
	this.text.setTransform(275.5,352.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,202.3,534.3,400.6);
// library properties:
lib.properties = {
	id: 'CB6C7C9DB3E12C44A381FEBD1C5F7F0D',
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
an.compositions['CB6C7C9DB3E12C44A381FEBD1C5F7F0D'] = {
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