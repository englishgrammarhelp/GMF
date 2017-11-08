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


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC99").ss(0.3,1,1).p("AggBFQAdgsAYg4QAAAAABgBQAAgVALgP");
	this.shape.setTransform(-16.2,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("AidAMQANAAAMgBQARgBANAGQAFABAEACQADABADABQAHACAGACQAFABAFAFQAMgQAGgVQAEgMALgLQANgNAPgKQALgHALgFQAEgCACgCQgJgEgBgRQgCgQADgQQABgDADgCQANgGAOgCQAHgBAHABQAEgQgHgOQgGgNgDgOQgDgKAJgEQANgFARAEQAPAEACAPQADAPgDAPQgBAAAAABQgBAHgEAHQgEAJgEAGABmidQAPgDAPABQAKAAABAMQABADgBADQAOgEAMAIQAEACAAAFQABAJgFAHQAGAHAJAMQAEAFgBAIQgCAMgMAFQgCAAgDABQgPADgPgCQgJgCgHgBAA9iGQAIAAAHACQAJACADADQAFAFgKAGQgFADgHACQgIACgLgBACphyQgDAEgFADQgMAGgPAGQgKAEgFACACIgOQgIAIgPgFACthBQAAADgBAHQgEAMgIALQgJANgPAFQADAOAAAPQAAAQgIALQgIAMgJAMQgHALgJAOQgIANgJANQgJANgMAKQgLAKgLAKQgMAKgOAHQgMAHgOAFQgOAFgPADQgQADgQADQgGAAgGABQgDAAgDABQgFABgGAAQgPADgRgBQgUAAgegOACPiNQgBANgLAIQgMAJgKAI");
	this.shape_1.setTransform(-0.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AiIDQQgUAAgegOQAdgsAZg5QgOgtgXgcIAMgIIAZgBQARgBANAGIAJADIAGACIANAEQAFABAFAFQAMgQAGgVQAEgMALgLQANgNAPgKQALgHALgFIAGgEQgJgEgBgRQgCgQADgQQABgDADgCQANgGAOgCIAOAAQAEgQgHgOQgGgNgDgOQgDgKAJgEQANgFARAEQAPAEACAPQADAPgDAPIgBABQgBAHgEAHIgIAPIAIgPQAEgHABgHIABgBQAPgDAPABQAKAAABAMIAAAGQAOgEAMAIQAEACAAAFQABAJgFAHQgDAEgFADQgMAGgPAGIgPAGIAPgGQAPgGAMgGQAFgDADgEIAPATQAEAFgBAIQgCAMgMAFQAAADgBAHQgEAMgIALQgJANgPAFQADAOAAAPQAAAQgIALIgRAYIgQAZIgRAaQgJANgMAKIgWAUQgMAKgOAHIgaAMQgOAFgPADIggAGIgMABIgGABIgLABQgMACgOAAIgGAAgAiEBdIAAAAIAAAAQAAgVAMgQQgMAQAAAVgAB7gJQAHAAAFgFIAAAAIABAAIgBAAIAAAAQgFAFgHAAIAAAAIAAAAIgDAAIgBAAIgGgCIAGACIABAAIADAAIAAAAIAAAAgACYg+IANgCIADAAIAFgBIgFABIgDAAIgNACIgBAAIAAAAIgMgBIgBAAIgQgDIAQADIABAAIAMABIAAAAIABAAgACDh4IgWARIAWgRQALgIABgNQgBANgLAIgAA4huQAIAAAGgBIABAAIAMgFQAHgEAAgDIgCgEQgDgDgJgCQgHgCgIAAQAIAAAHACQAJACADADIACAEQAAADgHAEIgMAFIgBAAQgGABgIAAIgBAAIAAAAIgBAAIgCAAIACAAIABAAIAAAAIABAAg");
	this.shape_2.setTransform(-0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-21.8,39.4,43.7);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAfDAIABAAQAMgEAKgJQALgKAGgIQAIgLAHgKQAIgLAHgLQAHgKAEgNQAFgNABgOQACgPAEgPQADgPAAgQQAAgQgCgQQgCgPgEgPQgEgPgFgMQgFgNgHgQQgFgNgKgLQgJgMgJgJQgJgJgKgJQgJgIgLgKQgKgJgRACQgPACgJAJQgJAMgKAKQgMALgKALQgKAMgGAOQgGAOgFAQQgBAAAAABQgFANgFANQgEALgEAIQgCAFgDAEQgHANgBAQQgBACAAACQAAACAAADAAUg8QAEAAAFABQAKABADAIQAEAJgFAEQgIAFgJACQABAHAAAIQgJABgKgBQgDAAgDAAQgGAAgGABQgKABgEAJQgDAFAEAHQAEAHALAAQAIAAAHAAQACAAABAAQAJAAAKAAQAAAAABAAQAKAAAHgGQAHgGACgJQACgLgLAAQgFABgFAAQgFAAgFABAgDg8QABgHACgGQAEgIAGgDQABABABABQAFAEABAIQABAFABAFQgGgBgFAAQgGAAgGABgAgBgdQgGAAgGgBQgLAAgCgMQgBgLAKgEQADgBAFAAQACgBACAAQABAAABgBAAYgeQgJABgKAAQgEAAgCAAAAAgPQAAgBAAgCQgBgGAAgFAAKAzQgGABgGgBQgJgBgJgFQgJgFAEgKQABgCACgCQAKgCAJAAQAFABAGAAQgBgFgCgFAAKBZQgKgBgIgEQgFgDADgGQABgEADgEQACgBAAgDQAFgDAIAAQAAAAABAAQAAgDAAgDQAAgBAAgCQADAAAEAAQAIgBAIgCQABAAABAAQAJgCAIgHQADgEgCgBQgIgFgKgBQgDAAgDAAAAiBWQAAAGAAAFQAAALgJADQgGADgEgGQgDgHgBgKQAAgBgBgBQAEAAAEAAQAIAAAHgCQAAAAABgBgAAbAPQAAADABACQABAEAAAEQgGgBgHgBQgEAAgEgBAAhAwQABAFAAAFQAAADAAACQAGACAGABQAIADAGACQgEAFgFAEQgDACgFABQgEACgFABAAKA8QAJAAAJACQADABADAAAh+AAQADABACACQgBACgEAAQAAAKACALQABAOADAQQAAACAAACIAAAAIAAABAh4A8QAAAAAAABQACALAEANQAEAOAIALQAHAJAHAMQABACABABQAGAKAHALQAGAKANAHQAMAHAJAIQAIAJAMACQADABADABQAGABAHgBQAPgCAKgGIAAAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABfQgDgHgBgKIAAgCQgLgBgJgFQgFgCADgHIAEgHQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAGgDAIAAIABAAIAAgGIAAgDIAGAAIAQgDIgQADIgGAAIgNAAQgJgCgJgEQgJgFAEgLQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIATgCIAMABIAHABIAOACIAFAAQAKABAIAFQAAAAABABQAAAAAAABQgBAAAAABQAAABgBAAQgIAIgJABIgCABIABAKIAAAFIAMADIAOAFQgEAEgFAFQgDACgFABIgJADIgBABQgHACgIAAIgGAAIAGAAQAIAAAHgCIABgBIAAALQAAALgJACIgEABQgDAAgCgDgAAMAxIAGABIgGgBIgCgBIgMgCIgBAAIAAAAIgBAAIgBABIABgBIABAAIAAAAIABAAIAMACIACABgAAAANIgHgBIgDgKIADAAIASAAIABAFIACAIIgOgCgAAMACIgBAAIgSAAIgDAAIgQAAQgLgBgEgFQgEgIADgGQAEgIAKgCIAMAAIAAgDIgBgLIgMgBQgLAAgCgMQgBgLAKgEIAIgCIAEgBIACAAIANgBIAKAAIAJABQAKACADAIQAEAIgFAFQgIAFgJABIgBABIgLABIgBAAIAAAAIgFAAIgHAAIAHAAIAFAAIAAAAIABAAIALgBIABgBIABAPIAKAAIAKgBQALAAgCALQgCAJgHAHQgHAFgJAAIgBAAgAgCgcIADAAIAIgBIgIABIgDAAIAAAAIgBAAIgCAAIgEAAIgHAAIAHAAIAEAAIACAAIABAAIAAAAgAgPhWQAEgIAGgEIACACQAEAFABAHIACAKIgKAAIgNABQABgHADgGgAAEhKIAAAAg");
	this.shape_1.setTransform(1.6,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgHDIIgGgCQgMgCgIgJQgJgIgMgHQgNgHgGgKIgNgVIgCgDIgOgVQgIgLgEgOQgEgNgCgLIAAgBIAAAAIAAgEIgEgeQgCgLAAgKQAEAAABgCIgFgDIABgEQABgQAHgNIAFgJIAIgTIAKgaIABgBQAFgQAGgOQAGgOAKgMIAWgWIATgWQAJgJAPgCQARgCAKAJIAUASIATASIASAVQAKALAFANIAMAdQAFAMAEAPQAEAPACAPQACAQAAAQQAAAQgDAPIgGAeQgBAOgFANQgEANgHAKIgPAWIgPAVQgGAIgLAKQgKAJgMAEIgBAAIAAAAQgKAGgPACIgGAAIgHAAgAAJA8QgIAAgFADQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAIgEAIQgDAGAFADQAIAEAKABIABACQABAKADAHQAEAGAGgDQAJgDAAgLIAAgLIAJgDQAFgBADgCQAFgEAEgFIgOgFIgMgDIAAgFIgBgKIACAAQAJgCAIgHQAAgBABgBQAAAAAAgBQABgBgBAAQAAAAAAgBQgIgFgKgBIgGAAIgBgIIgBgFIABAAQAKAAAHgGQAHgGACgJQACgLgLAAIgKABIgKABIgBgPQAJgCAIgFQAFgEgEgJQgDgIgKgBIgJgBIgCgKQgBgIgFgEIgCgCQgGADgEAIQgCAGgBAHIgCABIgEABIgIABQgKAEABALQACAMALAAIAMABIABALIAAADIgMABQgKABgEAJQgDAFAEAHQAEAHALAAIAPAAIADAKIgLgBIgTACQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAABQgEAKAJAFQAJAFAJABIAMAAIAAADIAAAGIgBAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-21,27.4,42.1);


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


(lib.frb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAcIAIgHQAKALASAAQAPAAAMgLQALgMAAgPQAAgQgLgMIAHgIQAOAPAAAVQAAATgOAPQgPAOgTAAQgVAAgPgOg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightOut, new cjs.Rectangle(0,0,8.5,8.5), null);


(lib.frb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAXIAHgIQAIAJANAAQAMAAAIgJQAJgJAAgLQAAgMgJgJIAIgHQALANAAAPQAAAQgLAMQgNALgPAAQgRAAgLgLg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightIn, new cjs.Rectangle(0,0,6.8,6.8), null);


(lib.frb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_22:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAHQAAgTAPgPQAPgPATAAQAVAAAPAPIgHAHQgNgMgQAAQgPAAgMAMQgMAMAAAPQAAASAMALIgHAHQgPgOAAgWg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftOut, new cjs.Rectangle(0,0,8.6,8.6), null);


(lib.frb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_23:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAGQAAgQAMgLQALgMAQAAQAPAAANAMIgHAHQgJgJgMAAQgMAAgIAJQgJAIAAAMQAAAMAJAJIgHAHQgMgLAAgRg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftIn, new cjs.Rectangle(0,0,6.9,6.9), null);


(lib.frb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.frb_dot_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background, new cjs.Rectangle(0,0,6,6), null);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed_1, new cjs.Rectangle(2,2,6,6), null);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled_1, new cjs.Rectangle(2,2,6,6), null);


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
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_1, new cjs.Rectangle(2,2,6,6), null);


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
	this.highlight3D_mc.parent = this;
	this.highlight3D_mc.setTransform(1.5,1.5);

	this.highlight_mc = new lib.frb_rightIn();
	this.highlight_mc.parent = this;
	this.highlight_mc.setTransform(2.2,2.2);

	this.shadow_mc = new lib.frb_leftIn();
	this.shadow_mc.parent = this;
	this.shadow_mc.setTransform(1,1);

	this.darkshadow_mc = new lib.frb_leftOut();
	this.darkshadow_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.darkshadow_mc},{t:this.shadow_mc},{t:this.highlight_mc},{t:this.highlight3D_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_frame, new cjs.Rectangle(0,0,10,10), null);


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
	this.disabled_mc.parent = this;
	this.disabled_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.disabled_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled_1, new cjs.Rectangle(3,3,4,4), null);


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
	this.dot_mc.parent = this;
	this.dot_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.dot_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_1, new cjs.Rectangle(3,3,4,4), null);


(lib.bub_captain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAoDAIABAAQAMgEAKgJQALgKAGgIQAIgLAHgKQAHgLAIgLQAHgKAEgNQAFgNABgOQACgPAEgPQADgPAAgQQAAgQgCgQQgCgPgEgPQgEgPgFgMQgGgNgGgQQgFgNgKgLQgJgMgJgJQgJgJgKgJQgJgIgLgKQgKgJgSACQgOACgJAJQgKAMgJAKQgMALgKALQgKAMgGAOQgGAOgFAQQgBAAAAABAg8gOQAOgGAMgIQAEgDADgCAg3gtQAMgIAMgHAgtBEQgGAEgFADAgwAbQgBgFABgEQAAgEAAgEAhBAjQAJgEAIgEAgZAKQgGAEgIAHQgFADgEADQgBALABAMQABAJACAJQAFgFAHgEQAJgGAJgGAgJClQgKgMgEgOQgEgQgGgNQgGgNgEgQQgBgGgBgHAhngqQgIgKgIgJQgJgJAHgIQAKgLASACQAGABACgBQgFANgFANQgEALgEAIgAh1AAQgBgBgBgBQgEgEgDgFQgBgBgBgCQgEgJAFgIQAIgKAQgBQgDAFgCAEQgFAKgCAMQgBADAAAEQgBACAAACQACABACABQAAAAABABQgBABAAAAQgCABgCAAQAAgDAAgCgAhvA8QgBgCgBgBQgMgKgHgIQgFgFAEgJQAFgOALgGIAAAAQAAAKACALQAAAIACAIQAAAHACAHQAAACAAACIAAAAIAAABQAAgBAAAAgAhPCDQgNgCgNgJQgEgDgEgDQgIgGgGgHQgLgMANgMQAHgHAFgGQABgCABgBQACALAEANQAEAOAIALQAHAJAHAMQABACABABQAGAKAHALQAGAKANAHQAMAHAJAIQADAEAEACQAGAEAHABQADABACABQAGABAIgBQAOgCAKgFQABAAAAgBIAAAA");
	this.shape.setTransform(-12.6,109.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACBjIgIgHIgNgMQgLgMANgNIALgNIADgDQACAMADAMQAEAPAIALIAOAVQgNgCgNgJgAgGAkIgSgTQgFgFADgIQAGgNALgGIAAAAQAAAJABAKIACARIACAOIABADIgDgCgAgTghIgBgCQgFgKAGgHQAIgLAOAAIgDAJQgFAKgDALIgBAHIgDADIgHgKgAgLhSQgKgKAHgIQALgLARADQAFAAADgBIgKAaIgJAUIgOgTg");
	this.shape_1.setTransform(-23.3,111.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgHDIIgGgCQgHgBgGgEIgHgGQgJgIgMgHQgNgHgGgKIgNgVIgCgDIgOgVQgIgLgEgOQgEgNgCgLIAAgBIAAAAIAAgEIgCgOIgCgQQgCgLAAgKIAEgBIABgBIgBgBIgEgCIABgEIABgHQACgMAFgKIAFgJIAIgTIAKgaIABgBQAFgQAGgOQAGgOAKgMIAWgWIATgWQAJgJAPgCQARgCAKAJIAUASIATASIASAVQAKALAFANIAMAdQAFAMAEAPQAEAPACAPQACAQAAAQQAAAQgDAPIgGAeQgBAOgFANQgEANgHAKIgPAWIgPAVQgGAIgLAKQgKAJgMAEIgBAAIAAAAIgBABQgKAFgOACIgGAAIgHAAgAg0BRQAEAQAGANQAGANAEAQQAEAOAKAMQgKgMgEgOQgEgQgGgNQgGgNgEgQIgCgNIACANgAhBBLIALgHIAMgJIASgMIgSAMIgMAJIgDgSIAAgUIAAgDIAJgGIAOgLIgOALIgJAGIAAADIAAAUIADASIgLAHgAhKAjIARgIIAAgFIAAgEIAAgIIAAAIIAAAEIAAAFIgRAIgAgrgcQgMAIgOAGQAOgGAMgIIAHgFIgHAFgAhAgtQAMgIAMgHQgMAHgMAIgAg2BEIAAAAg");
	this.shape_2.setTransform(-11.7,109.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.3,1,1).p("AAEhKQAEABAFABQAKABADAIQAEAJgFAEQgIAFgJABQABAIAAAHQgJACgJgBQgDAAgEAAQgGAAgGABQgKABgEAJQgDAFAEAIQAEAGALAAQAIAAAIAAQACAAABAAQAJAAAJAAQABAAAAAAQAKAAAHgFQAHgGACgKQACgLgLAAQgFAAgFABQgFAAgFAAAgThJQABgHADgHQAEgHAGgDQABAAABABQAEAFABAHQABAFABAFQgEAAgGAAQgGAAgHABgAgRgqQgGgBgGAAQgLgBgCgLQgBgLAKgEQADgBAFgBQACAAACAAQABgBABAAAAIgsQgIACgKAAQgEAAgDAAAgQgcQAAgCAAgCQgBgFAAgFAgFAmQgGAAgHAAQgJgBgJgFQgJgFAEgKQABgCACgCQAKgCAJAAQAGAAAGABQgBgFgCgFAgFAvQAAgEAAgDQAAgBAAgBQAEAAACAAQAIgBAIgCQABAAABAAQAJgCAIgIQADgDgCgBQgIgFgKgBQgDAAgCAAAgEBMQgLgBgJgFQgFgCADgGQABgEADgEQACgBAAgDQAGgDAIAAQAAgBABABQAIgBAJADQADAAADABAASBJQAAAGAAAFQAAALgJADQgGACgDgFQgDgHgBgKQAAgBAAgBQADAAADAAQAIAAAHgCQAAgBABAAgAALACQABACAAADQABAEABAEQgHgBgHgBQgDgBgEAAAARAjQABAFAAAFQAAADAAACQAGABAGACQAIACAGADQgEAFgFAEQgDACgFABQgEABgFAC");
	this.shape_3.setTransform(-10.1,111.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3,1,1).p("AAfDAIABAAQAMgEAKgJQALgKAGgIQAIgLAHgKQAIgLAHgLQAHgKAEgNQAFgNABgOQACgPAEgPQADgPAAgQQAAgQgCgQQgCgPgEgPQgEgPgFgMQgFgNgHgQQgFgNgKgLQgJgMgJgJQgJgJgKgJQgJgIgLgKQgKgJgRACQgPACgJAJQgJAMgKAKQgMALgKALQgKAMgGAOQgGAOgFAQQgBAAAAABQgFANgFANQgEALgEAIQgCAFgDAEQgHANgBAQQgBACAAACQADABACACQgBACgEAAAh+AAQAAACAAADQAAAKACALQABAOADAQQAAACAAACIAAAAIAAABAh4A8QAAAAAAABQACALAEANQAEAOAIALQAHAJAHAMQABACABABQAGAKAHALQAGAKANAHQAMAHAJAIQAIAJAMACQADABADABQAGABAHgBQAPgCAKgGIAAAA");
	this.shape_4.setTransform(-11.7,109.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABfQgDgHgBgKIAAgCQgLgBgJgFQgFgCADgHIAEgHQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAGgDAIAAIABAAIAAgGIAAgDIAGAAIAQgDIgQADIgGAAIgNAAQgJgCgJgEQgJgFAEgLQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIATgCIAMABIAHABIAOACIAFAAQAKABAIAFQAAAAABABQAAAAAAABQgBAAAAABQAAABgBAAQgIAIgJABIgCABIABAKIAAAFIAMADIAOAFQgEAEgFAFQgDACgFABIgJADIgBABQgHACgIAAIgGAAIAGAAQAIAAAHgCIABgBIAAALQAAALgJACIgEABQgDAAgCgDgAAMAxIAGABIgGgBIgCgBIgMgCIgBAAIAAAAIgBAAIgBABIABgBIABAAIAAAAIABAAIAMACIACABgAAAANIgHgBIgDgKIADAAIASAAIABAFIACAIIgOgCgAAMACIgBAAIgSAAIgDAAIgQAAQgLgBgEgFQgEgIADgGQAEgIAKgCIAMAAIAAgDIgBgLIgMgBQgLAAgCgMQgBgLAKgEIAIgCIAEgBIACAAIANgBIAKAAIAJABQAKACADAIQAEAIgFAFQgIAFgJABIgBABIgLABIgBAAIAAAAIgFAAIgHAAIAHAAIAFAAIAAAAIABAAIALgBIABgBIABAPIAKAAIAKgBQALAAgCALQgCAJgHAHQgHAFgJAAIgBAAgAgCgcIADAAIAIgBIgIABIgDAAIAAAAIgBAAIgCAAIgEAAIgHAAIAHAAIAEAAIACAAIABAAIAAAAgAgPhWQAEgIAGgEIACACQAEAFABAHIACAKIgKAAIgNABQABgHADgGgAAEhKIAAAAg");
	this.shape_5.setTransform(-10.1,111.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgHDIIgGgCQgMgCgIgJQgJgIgMgHQgNgHgGgKIgNgVIgCgDIgOgVQgIgLgEgOQgEgNgCgLIAAgBIAAAAIAAgEIgEgeQgCgLAAgKQAEAAABgCIgFgDIABgEQABgQAHgNIAFgJIAIgTIAKgaIABgBQAFgQAGgOQAGgOAKgMIAWgWIATgWQAJgJAPgCQARgCAKAJIAUASIATASIASAVQAKALAFANIAMAdQAFAMAEAPQAEAPACAPQACAQAAAQQAAAQgDAPIgGAeQgBAOgFANQgEANgHAKIgPAWIgPAVQgGAIgLAKQgKAJgMAEIgBAAIAAAAQgKAGgPACIgGAAIgHAAgAAJA8QgIAAgFADQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAIgEAIQgDAGAFADQAIAEAKABIABACQABAKADAHQAEAGAGgDQAJgDAAgLIAAgLIAJgDQAFgBADgCQAFgEAEgFIgOgFIgMgDIAAgFIgBgKIACAAQAJgCAIgHQAAgBABgBQAAAAAAgBQABgBgBAAQAAAAAAgBQgIgFgKgBIgGAAIgBgIIgBgFIABAAQAKAAAHgGQAHgGACgJQACgLgLAAIgKABIgKABIgBgPQAJgCAIgFQAFgEgEgJQgDgIgKgBIgJgBIgCgKQgBgIgFgEIgCgCQgGADgEAIQgCAGgBAHIgCABIgEABIgIABQgKAEABALQACAMALAAIAMABIABALIAAADIgMABQgKABgEAJQgDAFAEAHQAEAHALAAIAPAAIADAKIgLgBIgTACQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAABQgEAKAJAFQAJAFAJABIAMAAIAAADIAAAGIgBAAIAAAAg");
	this.shape_6.setTransform(-11.7,109.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.3,1,1).p("AAoDAIABAAQAMgEAKgJQALgKAGgIQAIgLAHgKQAHgLAIgLQAHgKAEgNQAFgNABgOQACgPAEgPQADgPAAgQQAAgQgCgQQgCgPgEgPQgEgPgFgMQgGgNgGgQQgFgNgKgLQgJgMgJgJQgJgJgKgJQgJgIgLgKQgKgJgSACQgOACgJAJQgKAMgJAKQgMALgKALQgKAMgGAOQgGAOgFAQQgBAAAAABQgCABgGgBQgSgCgKALQgHAIAJAJQAIAJAIAKAg8gOQAOgGAMgIQAEgDADgCAg3gtQAMgIAMgHAgtBEQgGAEgFADAgwAbQgBgFABgEQAAgEAAgEAhBAjQAJgEAIgEAgZAKQgGAEgIAHQgFADgEADQgBALABAMQABAJACAJQAFgFAHgEQAJgGAJgGAgJClQgKgMgEgOQgEgQgGgNQgGgNgEgQQgBgGgBgHAhVhXQgFANgFANQgEALgEAIQgQABgIAKQgFAIAEAJQAEAHAFAFQABABABABQAAgCABgCQABgQAHgNQACgEADgFAh1AAQAAACAAADIAAAAQgLAGgFAOQgEAJAFAFQAIAJANAMQAAgCAAgCQgDgQgBgOQgCgLAAgKAh1AAQACABADACQgBACgEAAAhvA9QAAgBAAAAIAAAAIAAABQACALAEANQAEAOAIALQAHAJAHAMQgNgCgNgJQgMgIgKgLQgLgMANgMQAJgKAFgGgAhPCDQABACABABQAGAKAHALQAGAKANAHQAMAHAJAIQAIAJAMACQADABACABQAGABAIgBQAPgCAKgGIAAAA");
	this.shape_7.setTransform(-12.5,109.7,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AACBjQgLgJgKgKQgLgMANgNIAOgQQACAMADAMQAEAPAIALIAOAVQgNgCgNgJgAgYARQgFgFADgIQAGgNALgGIAAAAQAAAJABAKIAEAfIABADIgVgVgAgUgjQgFgKAGgHQAIgLAOAAIgDAJQgHAMgCAQIgDADQgFgFgDgHgAgLhSQgKgKAHgIQALgLARADQAFAAADgBIgKAaIgJAUIgOgTg");
	this.shape_8.setTransform(-1.8,111.9,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgHDIIgGgCQgMgCgIgJQgJgIgMgHQgNgHgGgKIgNgVIgCgDIgOgVQgIgLgEgOQgEgNgCgLIAAgBIAAAAIAAgEIgEgeQgCgLAAgKQAEAAABgCIgFgDIABgEQABgQAHgNIAFgJIAIgTIAKgaIABgBQAFgQAGgOQAGgOAKgMIAWgWIATgWQAJgJAPgCQARgCAKAJIAUASIATASIASAVQAKALAFANIAMAdQAFAMAEAPQAEAPACAPQACAQAAAQQAAAQgDAPIgGAeQgBAOgFANQgEANgHAKIgPAWIgPAVQgGAIgLAKQgKAJgMAEIgBAAIAAAAQgKAGgPACIgGAAIgHAAgAg0BRQAEAQAGANQAGANAEAQQAEAOAKAMQgKgMgEgOQgEgQgGgNQgGgNgEgQIgCgNIACANgAhBBLIALgHIAMgJIASgMIgSAMIgMAJIgDgSIAAgUIAAgDIAJgGIAOgLIgOALIgJAGIAAADIAAAUIADASIgLAHgAhKAjIARgIIAAgFIAAgEIAAgIIAAAIIAAAEIAAAFIgRAIgAgrgcQgMAIgOAGQAOgGAMgIIAHgFIgHAFgAhAgtQAMgIAMgHQgMAHgMAIgAg2BEIAAAAg");
	this.shape_9.setTransform(-13.4,109.7,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AgHDIIgGgCQgMgCgIgJQgJgIgMgHQgNgHgGgKIgNgVIgCgDIgOgVQgIgLgEgOQgEgNgCgLIAAgBIAAAAIAAgEIgEgeQgCgLAAgKQAEAAABgCIgFgDIABgEQABgQAHgNIAFgJIAIgTIAKgaIABgBQAFgQAGgOQAGgOAKgMIAWgWIATgWQAJgJAPgCQARgCAKAJIAUASIATASIASAVQAKALAFANIAMAdQAFAMAEAPQAEAPACAPQACAQAAAQQAAAQgDAPIgGAeQgBAOgFANQgEANgHAKIgPAWIgPAVQgGAIgLAKQgKAJgMAEIgBAAIAAAAQgKAGgPACIgGAAIgHAAg");
	this.shape_10.setTransform(-11.7,109.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.3,1,1).p("AAoDAIABAAQAMgEAKgJQALgKAGgIQAIgLAHgKQAHgLAIgLQAHgKAEgNQAFgNABgOQACgPAEgPQADgPAAgQQAAgQgCgQQgCgPgEgPQgEgPgFgMQgGgNgGgQQgFgNgKgLQgJgMgJgJQgJgJgKgJQgJgIgLgKQgKgJgSACQgOACgJAJQgKAMgJAKQgMALgKALQgKAMgGAOQgGAOgFAQQgBAAAAABQgCABgGgBQgSgCgKALQgHAIAJAJQAIAJAIAKAg8gOQAOgGAMgIQAEgDADgCAg3gtQAMgIAMgHAgtBEQgGAEgFADAgwAbQgBALABAMQABAJACAJQAFgFAHgEQAJgGAJgGAgZAKQgGAEgIAHQgFADgEADAhBAjQAJgEAIgEQgBgFABgEQAAgEAAgEAgJClQgKgMgEgOQgEgQgGgNQgGgNgEgQQgBgGgBgHAhVhXQgFANgFANQgEALgEAIQgQABgIAKQgFAIAEAJQAEAHAFAFQABABABABQAAgCABgCQABgQAHgNQACgEADgFAh1AAQAAACAAADIAAAAQgLAGgFAOQgEAJAFAFQAIAJANAMQAAgCAAgCQgDgQgBgOQgCgLAAgKAh1AAQACABADACQgBACgEAAAhvA9QAAgBAAAAIAAAAIAAABQACALAEANQAEAOAIALQAHAJAHAMQgNgCgNgJQgMgIgKgLQgLgMANgMQAJgKAFgGgAhPCDQABACABABQAGAKAHALQAGAKANAHQAMAHAJAIQAIAJAMACQADABACABQAGABAIgBQAPgCAKgGIAAAA");
	this.shape_11.setTransform(-12.6,109.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AgHDIIgGgCQgMgCgIgJQgJgIgMgHQgNgHgGgKIgNgVIgCgDIgOgVQgIgLgEgOQgEgNgCgLIAAgBIAAAAIAAgEIgEgeQgCgLAAgKQAEAAABgCIgFgDIABgEQABgQAHgNIAFgJIAIgTIAKgaIABgBQAFgQAGgOQAGgOAKgMIAWgWIATgWQAJgJAPgCQARgCAKAJIAUASIATASIASAVQAKALAFANIAMAdQAFAMAEAPQAEAPACAPQACAQAAAQQAAAQgDAPIgGAeQgBAOgFANQgEANgHAKIgPAWIgPAVQgGAIgLAKQgKAJgMAEIgBAAIAAAAQgKAGgPACIgGAAIgHAAgAg0BRQAEAQAGANQAGANAEAQQAEAOAKAMQgKgMgEgOQgEgQgGgNQgGgNgEgQIgCgNIACANgAhBBLIALgHIAMgJIASgMIgSAMIgMAJIgDgSIAAgUIAAgDIAAgFIAAgEIAAgIIAAAIIAAAEIAAAFIgRAIIARgIIAAADIAAAUIADASIgLAHgAgwAVIgJAGIAJgGIAOgLIgOALgAgrgcQgMAIgOAGQAOgGAMgIIAHgFIgHAFgAhAgtQAMgIAMgHQgMAHgMAIg");
	this.shape_12.setTransform(-11.7,109.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.3,1,1).p("AAoDAIABAAQAMgEAKgJQALgKAGgIQAIgLAHgKQAHgLAIgLQAHgKAEgNQAFgNABgOQACgPAEgPQADgPAAgQQAAgQgCgQQgCgPgEgPQgEgPgFgMQgGgNgGgQQgFgNgKgLQgJgMgJgJQgJgJgKgJQgJgIgLgKQgKgJgSACQgOACgJAJQgKAMgJAKQgMALgKALQgKAMgGAOQgGAOgFAQQgBAAAAABQgCABgGgBQgSgCgKALQgHAIAJAJQAIAJAIAKAg8gOQAOgGAMgIQAEgDADgCAg3gtQAMgIAMgHAgtBEQgGAEgFADAgwAbQgBALABAMQABAJACAJQAFgFAHgEQAJgGAJgGAgZAKQgGAEgIAHQgFADgEADAhBAjQAJgEAIgEQgBgFABgEQAAgEAAgEAgJClQgKgMgEgOQgEgQgGgNQgGgNgEgQQgBgGgBgHAhVhXQgFANgFANQgEALgEAIQgQABgIAKQgFAIAEAJQAEAHAFAFQABABABABQAAgCABgCQABgQAHgNQACgEADgFAh1AAQAAACAAADIAAAAQgLAGgFAOQgEAJAFAFQAIAJANAMIAAAAIAAABAh1AAQACABADACQgBACgEAAQAAAKACALQABAOADAQQAAACAAACQAAAAAAABQgFAGgJAKQgNAMALAMQAKALAMAIQANAJANACQABACABABQAGAKAHALQAGAKANAHQAMAHAJAIQAIAJAMACQADABACABQAGABAIgBQAPgCAKgGIAAAAAhPCDQgHgMgHgJQgIgLgEgOQgEgNgCgL");
	this.shape_13.setTransform(-12.5,109.7,1,1,0,0,180);

	this.instance = new lib.Tween19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-11.6,109.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{skewY:180,x:-1.8}},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_4}]},1).to({state:[{t:this.shape_12,p:{skewY:0,x:-11.7}},{t:this.shape_8,p:{skewY:0,x:-23.3}},{t:this.shape_11}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_12,p:{skewY:180,x:-13.4}},{t:this.shape_8,p:{skewY:180,x:-1.8}},{t:this.shape_13}]},1).to({state:[{t:this.shape_10},{t:this.shape_4}]},1).to({state:[{t:this.shape_12,p:{skewY:0,x:-11.7}},{t:this.shape_8,p:{skewY:0,x:-23.3}},{t:this.shape_11}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_12,p:{skewY:180,x:-13.4}},{t:this.shape_8,p:{skewY:180,x:-1.8}},{t:this.shape_13}]},1).to({state:[{t:this.shape_10},{t:this.shape_4}]},1).to({state:[{t:this.shape_12,p:{skewY:0,x:-11.7}},{t:this.shape_8,p:{skewY:0,x:-23.3}},{t:this.shape_11}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({rotation:360,x:-13.4,y:30.5},5).to({rotation:-360,x:-11.6,y:109.7},5).wait(1));

	// Layer 5
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.3,1,1).p("AirAMQAMAAAMgBQARgBANAGQAFABAFACQADABADABQAGACAHACQAEABAFAFQAMgQAHgVQADgMAMgLQAMgNAPgKQAMgHALgFQADgCADgCQgJgEgCgRQAAgQACgQQAAgDADgCQANgGAOgCQAIgBAGABQAFgQgHgOQgHgNgDgOQgCgKAIgEQAOgFAQAEQAPAEADAPQACAPgDAPQAAAAAAABQgCAHgEAHQgEAJgEAGQgDgDgIgCQgHgCgJAAABXidQAPgDAQABQAKAAABAMQAAADAAADQANgEAMAIQAEACABAFQABAJgFAHQAGAHAJAMQADAFgBAIQgCAMgMAFQgCAAgDABQgPADgPgCQgJgCgHgBABJh/QAFAFgKAGQgFADgHACQgHACgMgBACbhyQgEAEgFADQgMAGgPAGQgKAEgEACACBiNQgBANgMAIQgMAJgJAIACehBQABADgCAHQgEAMgHALQgJANgQAFQgHAIgPgFAB5gOQADAOAAAPQABAQgIALQgJAMgIAMQgIALgJAOQgIANgJANQgIANgMAKQgMAKgLAKQgMAKgMAHQgNAHgOAFQgPAFgPADQgQADgQADQgFAAgGABQgDAAgDABQgGABgGAAQgOADgRgB");
	this.shape_14.setTransform(-19.2,150.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AiQDQIAEgKQAFgPADgOQADgQgBgPIgCgQQgQhCgegkIANgIIAYgBQARgBAOAGIAJADIAGACIANAEQAFABAFAFQAMgQAGgVQAEgMALgLQAMgNAPgKQAMgHALgFIAGgEQgJgEgCgRQgBgQADgQQAAgDAEgCQANgGANgCIAOAAQAFgQgHgOQgHgNgDgOQgCgKAJgEQANgFAQAEQAQAEACAPQACAPgDAPIAAABQgBAHgEAHIgIAPQgDgDgJgCQgHgCgJAAQAJAAAHACQAJACADADIAIgPQAEgHABgHIAAgBQAPgDAQABQAKAAABAMIAAAGQgBANgMAIIgVARIAVgRQAMgIABgNQAOgEAMAIQAEACAAAFQABAJgFAHIAPATQAEAFgCAIQgBAMgNAFQABADgCAHQgEAMgHALQgJANgQAFQADAOABAPQAAAQgIALIgRAYIgQAZIgRAaQgJANgMAKIgWAUQgMAKgOAHIgaAMQgOAFgQADIgfAGIgMABIgGABIgLABQgNACgOAAIgFAAgABzgJQAHAAAFgFIAAAAIAAAAQgFAFgHAAIAAAAIgBAAIgIgBIgBgBIABABIAIABIABAAIAAAAgACPg+QAIAAAJgCIAEgBIgEABQgJACgIAAIAAAAIgBAAIgNgBIgQgDIAQADIANABIABAAIAAAAgACZhrQgMAGgPAGIgPAGIAPgGQAPgGAMgGQAFgDADgEQgDAEgFADgAAwhuIANgBIACAAIAMgFQAGgEAAgDIgBgEIABAEQAAADgGAEIgMAFIgCAAIgNABIgBAAIAAAAIgCAAIAAAAIgBAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIACAAIAAAAIABAAg");
	this.shape_15.setTransform(-19.9,150.7);

	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33.3,162,1,1,0,0,0,-13.5,11.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:-13.8,regY:10.4,scaleX:1,scaleY:1,rotation:-23.3,x:-33.4,y:161},3).to({regX:-13.5,regY:11.3,scaleX:1,scaleY:1,rotation:0,x:-33.3,y:162},3).wait(5));

	// Layer 6
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.3,1,1).p("AhahBQgGgIgGgNQgHgNgCgQQgCgQABgQQABgQAHgOQACgKAOgJQALgKANgIQAMgJAQgEQANgDARgCQAOgCARACQAQABAPADQAOADAOAGQAOAGANAJQANAJAKAJQAKAJAHAMQAEAFABAIQACAQgFAOQgBACAAACQgEALgCAOQgDAOgGAOQgGAOgGAOQgFANgIAMQgFAHgEAGQgDAGgCAFQgBABAAACQAFAAAGAEQAGADAFAEQADADACAFQAAACAAAEQAAABAAABQgCAJgEAHQgEAHgEAGQAHADAFAFQAHAKgBATQgCAVgKAPQgJAMgLAGQgHADgIADQgMAFgQABQgJABgIgDQgEAJgFAIQgHALgLAMQgKAMgPAEQgOAFgQABQgRABgQgCQgPgBgMgGQgOgGgHgKQgJgKgHgLQgHgKgEgRQgDgNAEgRQADgQAGgPQAHgPAIgKQAKgNAMgHQgDgGgBgIQgBgEAAgEQAAgEAAgDQAAgMABgMQAAgDAAgDQAAgGABgGQAAgKACgIQAEgRAJgJQACgDADgDgAg1hgQgLAGgLAKQgHAHgIAIABhAPQgCgBgBAAQgGAAgHADQgFADgDAGQgCAEgBAEQgCADgBAFQgCADgBAFQgDgFgEgDQgIgHgMABQgGABgDAFQgCAEABAIQgCgIgIgEQgBgCgCAAQgEgCgEgBQgOgDgHAIQgEAEgBAIQgBAHgDAFQgBgIgJgDQgRgHgOAJQgNAHgCAOQgBADACACAgsBhQAJgKAOgFQAOgHAPAAQARgBAPAEQAQADAMAIQADABABAD");
	this.shape_16.setTransform(-77.2,202.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("AhPDpQgPgBgMgGQgOgGgHgKQgJgKgHgLQgHgKgEgRQgDgNAEgRQADgQAGgPQAHgPAIgKQAKgNAMgHQgDgGgBgIIgBgIIAAgHIABgYIAAgGIABgMIACgSQAEgRAJgJIAFgGIAPgPQALgKALgGQgLAGgLAKIgPAPQgGgIgGgNQgHgNgCgQQgCgQABgQQABgQAHgOQACgKAOgJIAYgSQAMgJAQgEQANgDARgCQAOgCARACQAQABAPADQAOADAOAGQAOAGANAJQANAJAKAJQAKAJAHAMQAEAFABAIQACAQgFAOIgBAEQgEALgCAOQgDAOgGAOIgMAcQgFANgIAMIgJANIgFALIgBADQAFAAAGAEIALAHQADADACAFIAAAGIAAACQgCAJgEAHIgIANQAHADAFAFQAHAKgBATQgCAVgKAPQgJAMgLAGIgPAGQgMAFgQABQgJABgIgDQgEAJgFAIQgHALgLAMQgKAMgPAEQgOAFgQABIgMAAIgVgBgAAIBLQgPAAgOAHQgOAFgJAKQAJgKAOgFQAOgHAPAAIACAAIADAAIABAAIAAAAQALAAALACIAEABQAQADAMAIQADABABADQgBgDgDgBQgMgIgQgDIgEgBQgLgCgLAAIAAAAIgBAAIgDAAIgCAAgAhPBTIgBgDIAAgCQACgOANgHIACgCQAHgDAHAAIAAAAIABAAQAGAAAGACIACABQAJADABAIQADgFABgHQABgIAEgEQAFgGAJAAIAAAAIABAAIAEABIAAAAIACAAIAIADIADACQAIAEACAIIgBgEQAAgFACgDQADgFAGgBIACAAIABAAIAAAAIABAAQAKAAAGAGQAEADADAFIADgIIADgIIADgIQADgGAFgDQAFgDAGAAIAAAAIAAAAIABAAIABAAIADABIgDgBIgBAAIgBAAIAAAAIAAAAQgGAAgFADQgFADgDAGIgDAIIgDAIIgDAIQgDgFgEgDQgGgGgKAAIgBAAIAAAAIgBAAIgCAAQgGABgDAFQgCADAAAFIABAEQgCgIgIgEIgDgCIgIgDIgCAAIAAAAIgEgBIgBAAIAAAAQgJAAgFAGQgEAEgBAIQgBAHgDAFQgBgIgJgDIgCgBQgGgCgGAAIgBAAIAAAAQgHAAgHADIgCACQgNAHgCAOIAAACIABADg");
	this.shape_17.setTransform(-77.2,202.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(25));

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.3,1,1).p("AjNgJQgLAGgKAGQgNAJgMAGQgNAHgMAAQAJAIAEAMQAFASgPADQgQAEgIgJQgLgLgHgRQgEAMgLAOQgJAOgSgGQgKgEABgMQACgNAIgLQgFACgIACQgZAGgSgKQgPgIAKgLQAPgPASgBQgQgFgVgJQgJgDAJgGQALgHAOgDQgIgHgFgLQgDgIAHAAQAOADAMAHQANAHAFANQABgQAFgNQAFgNAGgOQAGgNAIgNQAIgOALgKQAMgLAMgKQANgKANgGQAOgGAOgFQANgFAPgCQAQgCAQAAQADAAADAAQADgLALgMQAIgIANgFQANgFARgBQAPgCAQgBQAQAAAQAAQAQAAAPAEQANAEAOAEQAPAEANAIQANAHAMAIQANAJAMAGQAJAGALABQgKgDgCgMQgCgOgHgLQgCgEgBgFIAAAAQAAgDAAgEQgBgMACgLQADgNAIgLQAMgQALgWQAIAGAEAMQAFgJAKgJQARgOASgIQAYgLASgNQAFAPgHAKQACgBADgCQAPgGANgFQAcgKAcALQgNAIgJAEQASgFAVACQAXADAXAJQAQAHAKANQAGAJgJgCQgfgGgdgGQAFAFADAHQAGAIALAGQAMAHAHAMQACADgBAEQgDAUANAGQAKAEAFAKQAGANAAARQAAARgHANQgGAMgJAMQgDAFgFAEQgFAEgHAEQgNAIgPAEQgPAEgPAEAh4hMQgGAJgHAIQgDADgCADQgJAKgKAIQgMAKgRAHQgKAEgJAFAjjCFQAAgBgBgBQgGgLAAgRQABgRADgPQAEgOADgOQAFgOAEgNQAEgMAFgNAiKg1QAHAMAPACQAPADAQAAQAQgBAPACQAOACARgDAjjCFQAHALAKAIQAJAIARAEQAOADAMAHQAKAFAJAFQAHAEAHAAQAMADARAFQARAFARAFQASAFARAEQASAEARAFQASAFARADQATAEAUACQASADATADQAHABAFAAAjjCFQgKAHAAARQAAARgBAOQgBARgCAQQgBAIABAHQAAAIACAHQAEAOAHAPQAGAOAHAJQAJAMAJAIQANAJAMAFQAPAFAOAFQAGACAGABIgBATAj5DtQAEAAAEgBABdjwQABgDACgEQAHgMASAAQARgBAHAMQAEAHAEADQACgOAAgRQAAgDAAgCQAOAJAKALQAJALAFgSQAEgQgHgMQgBgCgBgCQAVABAXADQgGgQgQgHQAYADAYACQAWADgFgSQgBgEgDgCQASAFAVAFQALADAMACQAKABAKABAB1i4QAFACAFAAQASAAAKgIAEnkcQAIgLAOgGQAJgEAGABQAGACADAGQAEAGgCAJQgEALgJAGAEHkeQgHgDgEgCQgKAMANAGQAKAGABgMQAAgCgBAAQAAgEgCgBgAD3jJQAJANANAEQAPAFAQACQASADANgGQAPgIAEgKACQD1QgGAAgHACQAAgBAAgBQAHAAAGAAQAKgBAKABQAPADAQABQAQACAQABQAFAAADAAQgFAFgFAFQgJALgNAIQgOAJgLAKQgLAMgLAKQgKAKgMAKQgMAJgPAFQgDABgEABQgCABgCABQAAAAAAABQgDABgDABQgCABgCABQgCABgCABQAAAAAAAAQAAAAAAAAQACgBACgBAF7iCQAdAkAQBCQABAHABAJQACAOgEAQQgDAOgFAPQgCAFgCAFQgCAJgDAIQgDAPgIAMQgIAMgIAKQgKAMgLAMQgKALgOAIQgNAIgMAIQgNAIgLAKQgKALgMALQgKALgKAKQgEADgDADQgBACgBABAGAiKQADAAAEAAABSFvQgLAGgQgBQgTgCgTgCQgTgCgUgDQgSgCgTgDQgRgDgTgCQgTgDgRAAABgFoQgDABgDAC");
	this.shape_18.setTransform(-75.3,165.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAIQgMgGAJgLIAKAFQACABAAADIABACQAAAIgFAAIgFgCg");
	this.shape_19.setTransform(-49.6,137.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#996633").s().p("AhoA4QgHgLgRAAQgTAAgGAMIgDAIQgBgNACgKQADgOAHgKQAMgRAMgUQAIAFAEAMQAEgIALgJQARgPASgIQAYgLASgNQAFAPgHALIAFgDIAbgMQAbgKAdAMIgWAMQASgGAVADQAXACAWAJQAQAHAKANIgCAHIg8gLQAEAEAEAHIgVgCIgWgEIgngLIADAHQAGAQgWgBIgvgGQAQAHAGAQQgXgEgWgBIADAFQAHAMgEAQQgFARgJgLQgKgLgOgJIAAAFQAAARgCAPQgEgEgEgHg");
	this.shape_20.setTransform(-50.3,135);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AA7B3IgmgEIgngEIglgGIgkgFQgTgDgSABIgLgDIgdgLQgNgEgMgKQgKgHgIgMQgIgKgGgOQgGgOgEgOIgCgOIAAgQIADggIABggQgBgRALgHQAHALAKAIQAJAIARAEQAOAEAMAGIATAKQAHAEAHABIAdAIIAiAJIAjAJIAjAJIAjAJIAnAGIAlAFIAMABIAAACIANgCQAKAAAJABIAgAEIAgACIAIAAIgKAKQgJALgNAHQgOAJgLALIgWAVIgXAUQgMAKgOAEIgHADIgEABIgGADIgEACIgEACIAAABQgJAFgMAAIgGgBg");
	this.shape_21.setTransform(-75.7,190.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("ADjEjIgggDIgfgEQgKgBgKABIgNAAIANAAIgNABIAAgBIgMgCIglgFIgngGIgjgJIgjgJIgjgJIgigJIgdgIQgHgBgHgDIgTgLQgMgGgOgEQgRgEgJgIQgKgHgHgLIgBgCQgGgMAAgRQABgQADgQIAHgbIAJgcIAJgZQgLAFgKAIIgZAPQgNAHgMgBQAJAIAEANQAFASgPADQgQAEgIgJQgLgLgHgRQgFAMgKANQgJAOgSgFQgKgEABgMQACgNAIgLIgNAEQgZAGgSgKQgPgIAKgLQAPgRASAAIglgOQgJgDAJgHQALgGAOgCQgIgHgFgMQgDgIAHABQAOACAMAIQANAHAFALQABgOAFgNIALgbQAGgNAIgOQAIgNALgLQAMgLAMgJQANgKANgGIAcgLQANgFAPgCQAQgCAQAAIAGAAQADgLALgMQAIgJANgFQANgEARgCQAPgCAQAAIAgAAQAQgBAPAFIAbAIQAPAEANAHQANAHAMAJIAZAPQAJAFALACQgKgDgCgMQgCgPgHgLQgCgEgBgEIAAAAIAAgHIADgIQAHgLASgBQARAAAHAMQAEAHAEADQACgOAAgRIAAgFQAOAIAKAMQAJAKAFgRQAEgQgHgMIgCgEQAVABAXADQgGgQgQgHIAwAFQAWACgFgRIgEgHIAnALIAXAFIAUABQAGAJALAGQAMAGAHANQACADgBAEQgDAUANAFQAKAEAFALQAGANAAARQAAAQgHAOQgGAMgJAMQgDAEgFAFIgHAAIgFAIQAdAkAQBBIACAQQACAPgEAPQgDAPgFAOIgEALIgFARQgDAPgIAMIgQAWIgVAXQgKAMgOAIIgZAQQgNAIgLAKIgWAWIgUAVIgHAGIgCACIgFABIgDAAgAidADQgMAKgRAHIgTAJIATgJQARgHAMgKQAKgIAJgKQAHANAPACIABAAQAMABANAAIABAAIAAAAIACAAIACAAIADAAIADAAIAAAAIAAAAIAZACIANAAIAAAAIABAAIAHAAIABAAIAJgBIgJABIgBAAIgHAAIgBAAIAAAAIgNAAIgZgCIAAAAIAAAAIgDAAIgDAAIgCAAIgCAAIAAAAIgBAAQgNAAgMgBIgBAAQgPgCgHgNQgJAKgKAIgAiFgUIgFAFIAFgFQAHgIAGgKQgGAKgHAIgAFfhPIgeAHIAegHQAPgFANgHQgNAHgPAFgAE2iJQALAAAIgEIACgBQAPgHAEgKQgEAKgPAHIgCABQgIAEgLAAIAAAAIAAAAIgKgBQgQgCgPgFQgNgFgJgMQAJAMANAFQAPAFAQACIAKABIAAAAIAAAAgAB/iQQASAAAKgHQgKAHgSAAIgBAAIgBAAIgGAAIgCgBIACABIAGAAIABAAIABAAgAFXjzQgEAMgJAGQAJgGAEgMIABgGQAAgEgDgEQgDgHgGgBIgBAAIgDAAIAAAAIgBAAIgCAAIAAAAIgIACQgOAHgIALQAIgLAOgHIAIgCIAAAAIACAAIABAAIAAAAIADAAIABAAQAGABADAHQADAEAAAEIgBAGgAD/jqQAKAFABgLIgBgDQAAgEgCAAIgLgFQgKALANAHg");
	this.shape_22.setTransform(-75.3,161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(25));

	// Layer 7
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.3,1,1).p("AhFBlQgCAFgBAEQgHANgUgGQgTgFADgSQABgMAAgQQAAgFgCgFQgGgQgGgMQgHgOAAgSQgBgNAAgNQAAgNACgLQADgOADgQQADgOAPgFQAOgEAQACQAJABAFAEQAKAJAEAHQAHgLAPgHQAOgHAPgEQAKgDAMgCAhJhDQgHAMAGAQACJAOQgIAFgHADQgNAFgOAFQgIACgIACQgHACgHAAQgPACgQAAQAFAHADAJQAGAQgJANQgFAHgIAFQgDACgCABQgEABgDAAQgIAAgGgJQAEgGAAgKQAAgEgDAAAAiAoQgDgFgEgEQgDgDgDgDAgaBbQAAgBAAgCQABgJgGgHAhNBDQAIAHABAIQABALgCAIAgaBbQgDAOgOABQgRACgJgHAAABcQgCAGgFADQgOAHgFgR");
	this.shape_23.setTransform(-102.4,201.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("AhkB1QgTgFADgSQACgMAAgPQgBgGgBgFQgGgQgGgMQgIgNAAgTIAAgaQgBgMACgLIAHgfQADgOAPgEQAOgEAQACQAIABAGAEQAKAIAEAHQAHgKAPgIQAOgGAOgFIAWgEIAIgBIACAOQAEAPAHAOQAFAPAIAJQAIAMAKAIQAMAJANAFIAdAKIAMADIgBASIgQAIIgaAKIgRAFIgNACQgQACgQgBQAFAIAEAIQAFAQgJAOQgEAGgIAGIgGACIgHACQgHgBgGgIQADgGAAgKIAAAAQAAgEgDgBQADABAAAEIAAAAQAAAKgDAGQgCAFgGADQgOAIgEgRIAAgDIAAgDQAAgIgFgGQAFAGAAAIIAAADIAAADQgDANgPABQgRACgJgGQACgGAAgHIgBgGQgBgIgHgHQAHAHABAIIABAGQAAAHgCAGIgDAIQgEAJgLAAQgFAAgHgCgAAaAfIAHAJIgHgJIgGgFIAGAFgAhLgnQgDgHAAgGQAAgIAEgHQgEAHAAAIQAAAGADAHg");
	this.shape_24.setTransform(-102.3,201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,88.7,121,137.9);


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
		var bgm = createjs.Sound.play('bgmCom',{loop:-1});
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
		
		 window.open ("com_scene2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("com_scene01.html","_self");
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


(lib.scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("objectivecomplementsarefound");
	}
	this.frame_198 = function() {
		playSound("theyelectedbubthecaptain");
		playSound("Cowbell");
	}
	this.frame_235 = function() {
		playSound("theobjectivecomplementisthecaptain");
		playSound("woo");
	}
	this.frame_245 = function() {
		playSound("woo");
	}
	this.frame_254 = function() {
		playSound("woo");
	}
	this.frame_262 = function() {
		playSound("woo");
	}
	this.frame_287 = function() {
		playSound("theyselectedthecolorred");
		playSound("Cowbell");
	}
	this.frame_317 = function() {
		playSound("theobjectivecomplementisred");
		playSound("woo");
	}
	this.frame_327 = function() {
		playSound("woo");
	}
	this.frame_336 = function() {
		playSound("woo");
	}
	this.frame_344 = function() {
		playSound("woo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(196).call(this.frame_198).wait(37).call(this.frame_235).wait(10).call(this.frame_245).wait(9).call(this.frame_254).wait(8).call(this.frame_262).wait(25).call(this.frame_287).wait(30).call(this.frame_317).wait(10).call(this.frame_327).wait(9).call(this.frame_336).wait(8).call(this.frame_344).wait(37));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape.setTransform(28.9,89.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgkAzQgNgNAAgSQABgbAYgdQAVgZAUAAIAHABIAFAAQAEgDAFAAQAJAAABAKIABAQQAAAEgBADQgEAFgGAAQgIAAgDgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAIAAQAIAAAIgFIANgIQAGgEADAAQAGAAADAEQADADABAEQgBAFgEAEQgXATgXAAQgSAAgNgNg");
	this.shape_1.setTransform(17.8,89.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgmA/QgJgHAAgcIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAGQAAAIgLACIgUABIgiADIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEAEQAEADAAAFQAAAKgKABQgIABgaABQgbAAgIgIg");
	this.shape_2.setTransform(7.4,89.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgjA5QgRgLAAgRQAAgNALABQAMgBAAANQAAAFAJAGQAIAFAHAAQADABACgLIABgbIABgtIAAgGIgCAAIgJAAIgKgBQgFAAgDgCQgEgDAAgFQAAgMAPAAIAIAAIAIABIAPgBIAQgBQAWAAAAANQAAAEgDAEQgDADgFAAIgFAAIgFgBIgHAAIAAAHQAAA6gIAbQgGAUgQAAQgPAAgPgLg");
	this.shape_3.setTransform(-3.7,89.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgoA/QgEgEAAgFIAAhXIgBgLIABgLQABgIANgBQAHgCAOAAQAPAAAOAKQARAMAAARQAAAKgDAHQgDAFgHAFQAIAEAGAIQAIAJAAAIQAAALgNAKQgIAHgIADQgTAHgdAAQgFAAgEgEgAgWAsQAPAAAPgFQAPgEAAgFQAAgGgKgFQgHgEgGgBIgWgBgAgWgrIABARIgBASIAMAAQAYgCAAgRQAAgFgHgGQgHgGgJAAIgNABg");
	this.shape_4.setTransform(-14.5,89.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AghA5QgVgRAAgpIAAgMIABgMIAAgJIAAgKQAAgGACgGQAEgIAFAAQAFAAADADQAEADAAAFIAAAOIAAAOIAAAMIgBAMQAAALADALQAEANAGAFQAEADANAAQAVAAAHglQAEgTAAgjQAAgFADgEQAEgGAHAAQAFAAADAEQACAEAAADQAAAhgDASQgEAcgOASQgGAJgJAFQgKAHgKAAQgVAAgLgIg");
	this.shape_5.setTransform(-26.6,89.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgsA2QgKgIAAgKQAAgFADgDQADgEAGAAQAHAAAEAHQAEALARAAQANAAAOgHQANgGAAgHQAAgLgIgDQgGgCgSgBQgOAAgMgFQgPgGAAgNQABgQARgOQARgOATAAQAIABAMAEQAPAEAAAGQAAAEgDAEQgDAEgFgBIgMgBIgMgCQgLAAgIAGQgKAEAAAHQAAADADACQADACAGABIAUABQATABAKAJQAMAJAAARQAAAWgYALQgTAJgXAAQgVAAgMgKg");
	this.shape_6.setTransform(-38.6,89.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgoA/QgEgEAAgFIAAhXIgBgLIABgLQABgIANgBQAHgCAOAAQAPAAAOAKQARAMAAARQAAAKgDAHQgDAFgHAFQAIAEAGAIQAIAJAAAIQAAALgNAKQgIAHgIADQgTAHgdAAQgFAAgEgEgAgWAsQAPAAAPgFQAPgEAAgFQAAgGgKgFQgHgEgGgBIgWgBgAgWgrIABARIgBASIAMAAQAYgCAAgRQAAgFgHgGQgHgGgJAAIgNABg");
	this.shape_7.setTransform(74.9,89.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgtA+QgDgDAAgFIABgTIAAgSIAAhCQgBgGAEgEQAEgGAHABIAVABQAMACAHAEQAkASAAAaQAAALgIAHQgHAJgQAFQAXANALAMQADAEAAAEQAAAFgEADQgDADgFAAQgEAAgFgDQgZgYgdgJIABAbQABAFgEADQgDADgFAAQgFAAgEgDgAgZACIAEAAQAUAAAJgEQAEgCAEgDQADgEAAgCQAAgJgLgJQgLgIgMgBIgKgBg");
	this.shape_8.setTransform(64,89.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgmA/QgJgHAAgcIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAGQAAAIgLACIgUABIgiADIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEAEQAEADAAAFQAAAKgKABQgIABgaABQgbAAgIgIg");
	this.shape_9.setTransform(53.3,89.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgRA7QgKgYgNgtIgHgWQgEgPAAgHQAAgEADgEQAEgDAFAAQAHAAAEAJIADAOIAIAaIAMApIATgwIAHgVQAFgLAGgHQADgEAGAAQAEAAAEADQADADAAAFQAAAEgCADQgEAHgEAJIgGAQIgWA5IgKAUQgDAGgGAAQgJAAgDgIg");
	this.shape_10.setTransform(42.1,89.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_11.setTransform(185.9,89.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AgkAzQgNgNAAgSQABgbAYgdQAUgZAVAAIAHABIAFAAQAEgDAFAAQAJAAACAKIAAAQQAAAEgBADQgEAFgGAAQgIAAgDgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAIAAQAIAAAIgFIANgIQAGgEADAAQAGAAADAEQAEADAAAEQAAAFgFAEQgXATgXAAQgSAAgNgNg");
	this.shape_12.setTransform(174.7,89.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AgmA/QgJgHAAgcIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAGQAAAIgLACIgUABIgiADIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEAEQAEADAAAFQAAAKgKABQgIABgaABQgbAAgIgIg");
	this.shape_13.setTransform(164.3,89.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AgjA5QgRgLAAgRQAAgNALABQAMgBAAANQAAAFAJAGQAIAFAHAAQADABACgLIABgbIABgtIAAgGIgCAAIgJAAIgKgBQgFAAgDgCQgEgDAAgFQAAgMAPAAIAIAAIAIABIAPgBIAQgBQAWAAAAANQAAAEgDAEQgDADgFAAIgFAAIgFgBIgHAAIAAAHQAAA6gIAbQgGAUgQAAQgPAAgPgLg");
	this.shape_14.setTransform(153.2,89.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AgoA/QgEgEAAgFIAAhXIgBgLIABgLQABgIANgBQAHgCAOAAQAPAAAOAKQARAMAAARQAAAKgDAHQgDAFgHAFQAIAEAGAIQAIAJAAAIQAAALgNAKQgIAHgIADQgTAHgdAAQgFAAgEgEgAgWAsQAPAAAPgFQAPgEAAgFQAAgGgKgFQgHgEgGgBIgWgBgAgWgrIABARIgBASIAMAAQAYgCAAgRQAAgFgHgGQgHgGgJAAIgNABg");
	this.shape_15.setTransform(142.4,89.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AgrA0QgTgQAAgXQAAgcASgXQAUgbAdAAQAdAAAOAOQAPANAAAbQAAAbgRAXQgSAbgeAAQgYAAgRgOgAgagYQgMARAAAUQAAANALAJQAKAIAPAAQASAAAMgSQALgQAAgUQAAgRgIgIQgHgGgTAAQgSAAgNASg");
	this.shape_16.setTransform(130,89.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_17.setTransform(110.1,89.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AgkAzQgMgNAAgSQgBgbAZgdQAVgZAUAAIAHABIAFAAQADgDAGAAQAJAAACAKIABAQQAAAEgCADQgEAFgGAAQgHAAgEgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAJAAQAGAAAJgFIANgIQAGgEADAAQAFAAAEAEQADADAAAEQABAFgFAEQgXATgWAAQgTAAgNgNg");
	this.shape_18.setTransform(98.9,89.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AgmA/QgJgHAAgcIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAGQAAAIgLACIgUABIgiADIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEAEQAEADAAAFQAAAKgKABQgIABgaABQgbAAgIgIg");
	this.shape_19.setTransform(88.5,89.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("AgsA+QgEgDAAgFIAAgTIAAgSIAAhCQAAgGAEgEQAEgGAHABIAVABQAMACAHAEQAkASAAAaQAAALgIAHQgHAJgQAFQAXANALAMQADAEAAAEQAAAFgDADQgEADgFAAQgFAAgEgDQgZgYgcgJIABAbQgBAFgDADQgDADgFAAQgFAAgDgDgAgZACIADAAQAVAAAJgEQAEgCAEgDQADgEAAgCQAAgJgLgJQgLgIgMgBIgKgBg");
	this.shape_20.setTransform(77.7,89.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AgnA9QgDgEAAgFQAAgFAEgDQADgDAGAAIAPgBIAAgmQAAgWACgUIgSABQgFAAgDgEQgEgDAAgEQAAgGADgCQADgEAFAAIAYgBQAPABAZADQAKABAAALQAAAEgEAEQgDADgEgBIgWgCQgBAPAAAYIAAAmIAWgBQAFAAAEAEQADAEAAAEQAAAFgEADQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_21.setTransform(67.3,89.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AgZBDQgKgCgFgEQgFAAgEgDQgDgDAAgFIABgZIABgZIgBgbIAAgbQAAgFAEgEQAFgFAFABQACAAAMAEIAPAHQAXAJARAQQAVAUAAAXQAAAOgHANQgHANgNAIQgNAJgYAAIgOgCgAgcAqQADADAEAAIAKABQAQAAAIgEQAIgFAEgJQAEgIAAgIQAAgUgYgPQgHgFgagLg");
	this.shape_22.setTransform(57,89.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00E600").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_23.setTransform(275.5,89.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00E600").s().p("Ag5BAQgEgDAAgFIAAgKIABgKIABgPIAAgPIAAgOIAAgQIgCgPIgBgPQAAgFAFgEQAEgDAGgBQAFAAAIALQAlA2AlAgIAAgMIgBg2IgCgJIAAgJQAAgMAMAAQANAAAAAqIAAANIgBAzIgBAOQgBAKgLABQgGgBgHgGQgggdgngzIgBAZIABAUIAAAUQAAAZgMgBQgGABgDgEg");
	this.shape_24.setTransform(262.6,89.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00E600").s().p("AgmA/QgJgHAAgcIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAGQAAAIgLACIgUABIgiADIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEAEQAEADAAAFQAAAKgKABQgIABgaABQgbAAgIgIg");
	this.shape_25.setTransform(250.6,89.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00E600").s().p("AAtA2IgFgUQgEgPgFgbIgLAiIgGAPIgGAPQgEAIgIAAQgHAAgEgJIgFgQQgHgVgFgWIgKAnIgDATQgDAMgKAAQgFAAgEgEQgCgDAAgFQgBgOAGgTIAJgfIAFgaQAEgRAFgGQAEgGAGAAQAIAAADAIQAEAHADAWQAEAWAHAYQAJgYAIgdIAFgTQAFgMAIAAQAKAAAEAOQACAFACAPQAFAjAHAZIAHAcQAAAFgEADQgDADgFAAQgJAAgEgNg");
	this.shape_26.setTransform(237.7,89.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00E600").s().p("AgmA/QgJgHAAgcIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAGQAAAIgLACIgUABIgiADIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEAEQAEADAAAFQAAAKgKABQgIABgaABQgbAAgIgIg");
	this.shape_27.setTransform(225,89.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00E600").s().p("AgrAyIABgaQADgjAAgsQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAsgCAkIgCAUQAUAAAdgJIAEgBQAFAAAEAEQACADAAAFQAAAHgHADQgKAEgUAEQgSADgMAAQgUAAAAgSg");
	this.shape_28.setTransform(215,89.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00E600").s().p("AglA/QgDgDAAgEIAAgYIACglIACgmQAAgWAMABIAHgBIANAAQAPAAAOAKQAQAMAAARQAAAVgRAMQgPALgTAAIgHgBIgBAnQAAAEgDADQgDADgFAAQgFAAgDgDgAgOgrIgBALIgBAdIAGABQALAAAJgHQAJgGAAgLQAAgHgIgFQgJgGgIAAIgFAAIgDABg");
	this.shape_29.setTransform(205.6,89);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00E600").s().p("AAtA2IgFgUQgDgPgGgbIgLAiIgGAPIgGAPQgEAIgIAAQgHAAgEgJIgFgQQgHgVgFgWIgKAnIgDATQgDAMgKAAQgGAAgDgEQgCgDAAgFQAAgOAFgTIAKgfIAEgaQAEgRAEgGQAFgGAGAAQAIAAADAIQAEAHADAWQAFAWAGAYQAJgYAIgdIAFgTQAFgMAIAAQAKAAAEAOQACAFACAPQAFAjAHAZIAIAcQgBAFgEADQgDADgFAAQgIAAgFgNg");
	this.shape_30.setTransform(193.7,89.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00E600").s().p("AgrA0QgTgQAAgXQAAgcASgXQAUgbAdAAQAdAAAOAOQAPANAAAbQAAAbgRAXQgSAbgeAAQgYAAgRgOgAgagYQgMARAAAUQAAANALAJQAKAIAPAAQASAAAMgSQALgQAAgUQAAgRgIgIQgHgGgTAAQgSAAgNASg");
	this.shape_31.setTransform(179.3,89.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00E600").s().p("AgkAzQgNgNAAgSQAAgbAZgdQAVgZAUAAIAHABIAFAAQADgDAGAAQAIAAACAKIABAQQAAAEgCADQgDAFgGAAQgHAAgEgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAIAAQAIAAAIgFIANgIQAGgEAEAAQAFAAADAEQADADAAAEQAAAFgEAEQgXATgXAAQgSAAgNgNg");
	this.shape_32.setTransform(167.4,89.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00E600").s().p("AgmA/QgJgHAAgcIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAGQAAAIgLACIgUABIgiADIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEAEQAEADAAAFQAAAKgKABQgIABgaABQgbAAgIgIg");
	this.shape_33.setTransform(149.6,89.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00E600").s().p("AgRA7QgKgYgNgtIgHgWQgEgPAAgHQAAgEADgEQAEgDAFAAQAHAAAEAJIADAOIAIAaIAMApIATgwIAHgVQAFgLAGgHQADgEAGAAQAEAAAEADQADADAAAFQAAAEgCADQgEAHgEAJIgGAQIgWA5IgKAUQgDAGgGAAQgJAAgDgIg");
	this.shape_34.setTransform(138.5,89.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00E600").s().p("AgnA9QgDgEAAgFQAAgFAEgDQADgDAGAAIAPgBIAAgmQAAgWACgUIgSABQgFAAgDgEQgEgDAAgEQAAgGADgCQADgEAFAAIAYgBQAPABAZADQAKABAAALQAAAEgEAEQgDADgEgBIgWgCQgBAPAAAYIAAAmIAWgBQAFAAAEAEQADAEAAAEQAAAFgEADQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_35.setTransform(127.9,89.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00E600").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_36.setTransform(117.6,89.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00E600").s().p("AgkAzQgNgNAAgSQABgbAYgdQAVgZAUAAIAHABIAFAAQAEgDAFAAQAJAAABAKIABAQQAAAEgBADQgEAFgGAAQgIAAgDgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAIAAQAIAAAIgFIANgIQAGgEADAAQAGAAADAEQADADABAEQgBAFgEAEQgXATgXAAQgSAAgNgNg");
	this.shape_37.setTransform(106.4,89.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00E600").s().p("AgmA/QgJgHAAgcIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAGQAAAIgLACIgUABIgiADIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEAEQAEADAAAFQAAAKgKABQgIABgaABQgbAAgIgIg");
	this.shape_38.setTransform(96,89.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00E600").s().p("AgjA5QgRgLAAgRQAAgNALABQAMgBAAANQAAAFAJAGQAIAFAHAAQADABACgLIABgbIABgtIAAgGIgCAAIgJAAIgKgBQgFAAgDgCQgEgDAAgFQAAgMAPAAIAIAAIAIABIAPgBIAQgBQAWAAAAANQAAAEgDAEQgDADgFAAIgFAAIgFgBIgHAAIAAAHQAAA6gIAbQgGAUgQAAQgPAAgPgLg");
	this.shape_39.setTransform(84.9,89.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00E600").s().p("AgoA/QgEgEAAgFIAAhXIgBgLIABgLQABgIANgBQAHgCAOAAQAPAAAOAKQARAMAAARQAAAKgDAHQgDAFgHAFQAIAEAGAIQAIAJAAAIQAAALgNAKQgIAHgIADQgTAHgdAAQgFAAgEgEgAgWAsQAPAAAPgFQAPgEAAgFQAAgGgKgFQgHgEgGgBIgWgBgAgWgrIABARIgBASIAMAAQAYgCAAgRQAAgFgHgGQgHgGgJAAIgNABg");
	this.shape_40.setTransform(74.1,89.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00E600").s().p("AgrA0QgTgQAAgXQAAgcASgXQAUgbAdAAQAdAAAOAOQAPANAAAbQAAAbgRAXQgSAbgeAAQgYAAgRgOgAgagYQgMARAAAUQAAANALAJQAKAIAPAAQASAAAMgSQALgQAAgUQAAgRgIgIQgHgGgTAAQgSAAgNASg");
	this.shape_41.setTransform(61.7,89.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000FF").s().p("AgkAzQgMgNAAgSQAAgbAYgdQAUgZAVAAIAHABIAFAAQADgDAGAAQAIAAADAKIABAQQAAAEgDADQgDAFgGAAQgIAAgDgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAJAAQAGAAAJgFIANgIQAHgEADAAQAEAAAEAEQAEADgBAEQABAFgFAEQgXATgWAAQgTAAgNgNg");
	this.shape_42.setTransform(21.8,89.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgtA+QgDgDAAgFIABgTIAAgSIAAhCQgBgGAEgEQAEgGAHABIAVABQAMACAHAEQAkASAAAaQgBALgHAHQgHAJgPAFQAVANAMAMQADAEAAAEQAAAFgEADQgDADgFAAQgFAAgEgDQgZgYgdgJIABAbQABAFgEADQgEADgEAAQgFAAgEgDgAgZACIAEAAQAUAAAJgEQAEgCAEgDQADgEAAgCQAAgJgMgJQgKgIgMgBIgKgBg");
	this.shape_43.setTransform(74,89.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009900").s().p("AgkAzQgMgNAAgSQgBgbAZgdQAVgZAUAAIAHABIAFAAQAEgDAFAAQAJAAACAKIABAQQAAAEgCADQgEAFgGAAQgIAAgDgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAJAAQAGAAAJgFIANgIQAHgEADAAQAEAAAEAEQAEADgBAEQABAFgFAEQgXATgWAAQgTAAgNgNg");
	this.shape_44.setTransform(207.7,89.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("AgkAzQgMgNAAgSQAAgbAYgdQAUgZAVAAIAHABIAFAAQADgDAGAAQAIAAACAKIACAQQgBAEgCADQgDAFgGAAQgIAAgDgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAIAAQAHAAAJgFIANgIQAHgEADAAQAEAAAEAEQADADAAAEQAAAFgEAEQgXATgXAAQgSAAgNgNg");
	this.shape_45.setTransform(131.9,89.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009900").s().p("AgtA+QgDgDAAgFIAAgTIAAgSIAAhCQABgGADgEQAEgGAIABIAUABQAMACAHAEQAjASAAAaQAAALgHAHQgIAJgOAFQAWANALAMQADAEAAAEQAAAFgDADQgEADgFAAQgEAAgEgDQgZgYgdgJIABAbQAAAFgEADQgDADgFAAQgFAAgEgDgAgZACIADAAQAVAAAJgEQAEgCADgDQAEgEAAgCQAAgJgMgJQgKgIgMgBIgKgBg");
	this.shape_46.setTransform(110.7,89.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6,p:{x:-38.6}},{t:this.shape_5,p:{x:-26.6}},{t:this.shape_4,p:{x:-14.5}},{t:this.shape_3,p:{x:-3.7}},{t:this.shape_2,p:{x:7.4}},{t:this.shape_1},{t:this.shape,p:{x:28.9}}]},235).to({state:[{t:this.shape_10,p:{x:42.1}},{t:this.shape_9,p:{x:53.3}},{t:this.shape_8},{t:this.shape_7,p:{x:74.9}}]},10).to({state:[{t:this.shape_22,p:{x:57}},{t:this.shape_21,p:{x:67.3}},{t:this.shape_20},{t:this.shape_19,p:{x:88.5}},{t:this.shape_18},{t:this.shape_17,p:{x:110.1}},{t:this.shape_16,p:{x:130}},{t:this.shape_15,p:{x:142.4}},{t:this.shape_14,p:{x:153.2}},{t:this.shape_13,p:{x:164.3}},{t:this.shape_12},{t:this.shape_11,p:{x:185.9}}]},9).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},8).to({state:[]},25).to({state:[{t:this.shape_6,p:{x:-34.6}},{t:this.shape_5,p:{x:-22.6}},{t:this.shape_4,p:{x:-10.5}},{t:this.shape_3,p:{x:0.3}},{t:this.shape_2,p:{x:11.4}},{t:this.shape_42},{t:this.shape,p:{x:32.9}}]},30).to({state:[{t:this.shape_10,p:{x:52.1}},{t:this.shape_9,p:{x:63.3}},{t:this.shape_43},{t:this.shape_7,p:{x:84.9}}]},10).to({state:[{t:this.shape_22,p:{x:90}},{t:this.shape_21,p:{x:100.3}},{t:this.shape_46},{t:this.shape_19,p:{x:121.5}},{t:this.shape_45},{t:this.shape_17,p:{x:143.1}},{t:this.shape_16,p:{x:163}},{t:this.shape_15,p:{x:175.4}},{t:this.shape_14,p:{x:186.2}},{t:this.shape_13,p:{x:197.3}},{t:this.shape_44},{t:this.shape_11,p:{x:218.9}}]},9).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},8).wait(37));

	// Diagrams
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgIAsQgMgEgJgKQgOgOgDgPQgCgQAOgOQAOgOASgDQAUgDAOAPQAKAKAEAKQAEAOgJAIQgGAGgNgCIgTgHIgcgKQAAAFACAGQADAFAFAFQAIAIAIACQAHADADACQAGAHgGAGQgDADgGAAQgEAAgGgDgAgLgVIASAHIATAHQgCgGgGgHQgGgFgHgBQgGAAgKAFg");
	this.shape_47.setTransform(220.1,172.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAABJQgEAAgDgDQgGgGAEgIQADgGAHgKIAMgOIAFgFIAFgEIAEgFQADgEgCgDQgHgFgLAAQgGAAgMAEQgVAVgGACQgIADgFgFQgDgDAAgGQgBgEADgDIAFgDIAQgOIAmgnIACgCIAKgJIAFgGIAFgGQADgDAFAAQAEABADADQAGAGgEAIQgCAEgIAIIgMAMIgMALQAJgBAHADQAHADAFAGQAKAJgBAKQgBAIgIAJIgOAPIgKANQgGAHgDAGIgCACQgDAEgEAAIgBgBg");
	this.shape_48.setTransform(213,163.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgqAsQgDgDgBgFQAAgFADgDIAHgGIAGgGIAegeIgKgMQgHgJAHgGQADgEAEAAQAEAAAEAEIAJAKIAGgGIAGgGQADgDAFAAQAEAAADADQAJAJgOAPIgGAEIAHAGQAHAHABACQADAGgFAGQgEADgEAAQgFAAgDgDIgDgEIgDgDIgGgFIgdAgIgDADIgDAEQgIAIgHAAQgEAAgDgDg");
	this.shape_49.setTransform(207.9,157.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AARAmIgDgRIAAgRIAAgHIAAgHIAAgDIAAgEQAAgHgDAAQgHAAgGAJQgHAKgEANIAAAHIgBAIIAAAHIgBAHQAAAFgDADQgDADgGAAQgEAAgDgDQgEgDAAgFIgBgHIAAgHIABgXIABgVIAAgIIAAgIQAAgEAEgDQACgDAGAAQAKAAABANIAAABQAMgNANAAQAQAAAFANQAEAJABASIAAAGIAAAEIABARQACAKAAAGQAAAFgDADQgEADgEAAQgLAAgBgKg");
	this.shape_50.setTransform(252,124);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgJA9QgEgEAAgFIAAgPIgBgPIACgSIAAgSQAAgFADgDQAEgDAFAAQADAAAEADQADADAAAFIgBASIgBASIABAPIAAAPQAAAFgDAEQgEACgDAAQgGAAgCgCgAgHgqQgEgDABgFQgBgFAEgEQAEgDAEgBQAGABADADQAFAEAAAFQAAAFgFADQgDAEgGAAQgEAAgEgEg");
	this.shape_51.setTransform(245.3,122.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAUAmQgHAEgGABQgGACgDAAQgUABgKgLQgKgLAAgVQAAgTAPgOQAOgPAUAAQAIAAAKAFQANAFAAAHQAAADgCADIgBAIIgBAMQAAAOACAHIAEAIIADAIQAAAFgDACQgDADgFAAQgDABgJgIgAgLgQQgIAJAAALQAAALAEAFQAEAGAIAAQAEAAAFgCQAEgCAEgDQgCgTAAgKIAAgFIABgIIgDgBIgCgBQgKAAgJAJg");
	this.shape_52.setTransform(238,124.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHA6QgDgDAAgFIAAgJIAAgJIgBgqIgQgBQgKgBAAgKQAAgEADgEQADgDAFAAIAOABIAAgJIgBgIQAAgFAEgDQADgDAFAAQALAAAAAVIAAAHIAJgBIANABQAGADAAAHQAAAFgDADQgDADgFAAIgEAAIgEAAIgIABIABArIAAAEIAAAEQAAAUgMAAQgDAAgEgDg");
	this.shape_53.setTransform(229.3,122.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgiBCQgDgDAAgEIAAggIAAgfIgBgfIgBgRQAAgGADgFQADgGAHAAQAEAAADAEQADADAAAEIAAABQAGgDAGgCQAEgCAGABQATAAAJAQQAGAMAAATQAAASgKAMQgLANgTgBQgGAAgIgBIAAAiQAAAEgDADQgEAEgEAAQgFAAgEgEgAgEgnQgFACgGAFIABAiQAIACAGAAQAJAAAEgFQAEgFAAgKIgBgPQgCgKgIAAQgFAAgFACg");
	this.shape_54.setTransform(220.8,126.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAUAmQgHAEgGABQgGACgDAAQgUABgKgLQgKgLAAgVQAAgTAPgOQAOgPAUAAQAIAAAKAFQANAFAAAHQAAADgCADIgBAIIgBAMQAAAOACAHIAEAIIADAIQAAAFgDACQgDADgFAAQgDABgJgIgAgLgQQgIAJAAALQAAALAEAFQAEAGAIAAQAEAAAFgCQAEgCAEgDQgCgTAAgKIAAgFIABgIIgDgBIgCgBQgKAAgJAJg");
	this.shape_55.setTransform(211.5,124.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgZAlQgNgMAAgRQAAgQALgRQAOgVAQABQAJgBALAFQAPAGAAAHQAAAEgDADQgDAEgFAAQgEgBgFgDQgFgEgKAAQgFAAgIAMQgHAMAAAJQAAAIAHAFQAGAFAIAAQAGAAAIgFIAKgDQAFAAADACQADAEAAAEQAAAGgOAHQgNAFgIAAQgRABgMgKg");
	this.shape_56.setTransform(202.2,124.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgYA/QgDADgEAAQgFAAgDgDQgDgDAAgEIAAgGIAAgHIAAhcQAAgHADgEQADgGAGAAQAJAAAAAJIAAAEIAAAEIAAAfQAGgDAFgCIAKgBQAUAAAMANQALAMAAAUQAAATgNANQgNAOgTAAQgLAAgLgEgAgJgBIgMAHIAAAjQALAFAIgBQAKAAAGgGQAHgIAAgKQAAgLgFgHQgGgGgKAAQgDgBgGADg");
	this.shape_57.setTransform(126.8,121.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AARApQgLAEgKAAQgMAAgIgFQgJgGgCgLQgDgUAAgPQAAgLACgOQACgJAJAAQAFAAAEADQADADAAAEIgBAMIgBAMIAAATIADAOIAEACIAEAAQAIAAALgDIAAgOIAAgNQAAgRABgMQABgKAKAAQAFAAAEADQADADAAAFIgCAdIABAQIAAAQIAAAGIAAAFQAAAEgDADQgEADgEAAQgHAAgDgGg");
	this.shape_58.setTransform(117.2,124.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgoA/QgEgEAAgFIAAhXIgBgLIABgLQABgIANgBQAHgCAOAAQAPAAAOAKQARAMAAARQAAAKgDAHQgDAFgHAFQAIAEAGAIQAIAJAAAIQAAALgNAKQgIAHgIADQgTAHgdAAQgFAAgEgEgAgWAsQAPAAAPgFQAPgEAAgFQAAgGgKgFQgHgEgGgBIgWgBgAgWgrIABARIgBASIAMAAQAYgCAAgRQAAgFgHgGQgHgGgJAAIgNABg");
	this.shape_59.setTransform(107.8,121.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAXA/QgGADgGABIgLABQgTAAgMgMQgNgMAAgTQAAgWANgNQANgNATAAIALABIAIAEIADgnQABgKAKAAQAFAAADADQADADAAAFIgCAkIgCAjQAAAeACAKIAAADQAAAEgDADQgEADgEAAQgGAAgDgFgAgQAEQgGAHAAAOQAAAJAGAGQAHAHAJAAQAFAAADgCIAIgFIADgDIAAgeQgDgFgEgCQgFgCgGAAQgLAAgGAGg");
	this.shape_60.setTransform(82.3,121.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgbAkQgPgLAAgTQAAgUAMgOQAMgQATAAQAPAAAKAEQAMAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAIgFQAHgEAEAAQAJAAAAAJQgBAJgOAGQgLAFgNAAQgTAAgMgJgAgKgTQgGAFgDAKIASgIQALgFAGgEQgFgDgKAAQgGAAgFAFg");
	this.shape_61.setTransform(72.6,124.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgHA6QgDgDAAgFIAAgJIAAgJIgBgqIgQgBQgKgBAAgKQAAgEADgEQADgDAFAAIAOABIAAgJIgBgIQAAgFAEgDQADgDAFAAQALAAAAAVIAAAHIAJgBIANABQAGADAAAHQAAAFgDADQgDADgFAAIgEAAIgEAAIgIABIABArIAAAEIAAAEQAAAUgMAAQgDAAgEgDg");
	this.shape_62.setTransform(64,122.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZAlQgNgMAAgRQAAgQALgRQAOgVAQABQAJgBALAFQAPAGAAAHQAAAEgDADQgDAEgFAAQgEgBgFgDQgFgEgKAAQgFAAgIAMQgHAMAAAJQAAAIAHAFQAGAFAIAAQAGAAAIgFIAKgDQAFAAADACQADAEAAAEQAAAGgOAHQgNAFgIAAQgRABgMgKg");
	this.shape_63.setTransform(55.4,124.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgcAkQgOgLABgTQgBgUAMgOQALgQAVAAQAOAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAHgFQAIgEADAAQAKAAgBAJQABAJgOAGQgMAFgNAAQgTAAgNgJgAgLgTQgFAFgEAKIATgIQAKgFAHgEQgGgDgIAAQgHAAgGAFg");
	this.shape_64.setTransform(46.4,124.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgHBBQgDgDAAgFIAAhyQAAgFADgDQAEgCADAAQAFAAADADQADACAAAFIAABuQABAPgMAAQgEAAgDgDg");
	this.shape_65.setTransform(39.3,121.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgcAkQgNgLAAgTQAAgUALgOQAMgQATAAQAPAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAIgFQAGgEAEAAQAKAAAAAJQgBAJgOAGQgLAFgNAAQgTAAgNgJgAgLgTQgFAFgEAKIATgIQAKgFAHgEQgGgDgJAAQgGAAgGAFg");
	this.shape_66.setTransform(32.2,124.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgYBAQgEgDAAgEQAAgIASgmIgdg0IgEgHQgCgDAAgEQAAgEAEgEQADgDAFAAQAFAAAEAEQALAQAPAfIALgXIALgWQADgGAHAAQAEAAAEADQAEADAAAFIgCAFIgcA6QgLAWgFAOIgFAQQgDAHgHAAQgFAAgEgDg");
	this.shape_67.setTransform(8.1,126.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgbAkQgOgLgBgTQABgUAKgOQANgQATAAQAPAAAKAEQAMAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAHgFQAHgEAFAAQAIAAABAJQAAAJgPAGQgLAFgNAAQgTAAgMgJgAgKgTQgGAFgDAKIASgIQALgFAGgEQgFgDgKAAQgGAAgFAFg");
	this.shape_68.setTransform(-1.4,124.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AATA9IgDgTIgCgUIAAgFIABgHIgBgHQAAgEgEABQgJgBgHAIQgDAEgHAMQAAAegDAGQgDAHgHAAQgFAAgDgDQgEgDAAgFIABgEIABgWIAAg3IAAgDIABgNIgBgIIgBgHQAAgFAEgDQADgDAFAAQAIAAADAJQABAFAAAKIAAARIgBAQQAGgGAHgDQAGgDAIAAQAOAAAHAIQAEAGABALIABAVIACAQIADAQIAAADQAAAFgDADQgEADgFAAQgIAAgDgIg");
	this.shape_69.setTransform(-10.8,121.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_70.setTransform(-21.6,121.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0000FF").s().p("AgYBAQgEgDAAgEQAAgIASgmIgdg0IgEgHQgCgDAAgEQAAgEAEgEQADgDAFAAQAFAAAEAEQALAQAPAfIALgXIALgWQADgGAHAAQAEAAAEADQAEADAAAFIgCAFIgcA6QgLAWgFAOIgFAQQgDAHgHAAQgFAAgEgDg");
	this.shape_71.setTransform(8.1,126.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0000FF").s().p("AgbAkQgOgLgBgTQABgUAKgOQANgQATAAQAPAAAKAEQAMAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAHgFQAHgEAFAAQAIAAABAJQAAAJgPAGQgLAFgNAAQgTAAgMgJgAgKgTQgGAFgDAKIASgIQALgFAGgEQgFgDgKAAQgGAAgFAFg");
	this.shape_72.setTransform(-1.4,124.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0000FF").s().p("AATA9IgDgTIgCgUIAAgFIABgHIgBgHQAAgEgEABQgJgBgHAIQgDAEgHAMQAAAegDAGQgDAHgHAAQgFAAgDgDQgEgDAAgFIABgEIABgWIAAg3IAAgDIABgNIgBgIIgBgHQAAgFAEgDQADgDAFAAQAIAAADAJQABAFAAAKIAAARIgBAQQAGgGAHgDQAGgDAIAAQAOAAAHAIQAEAGABALIABAVIACAQIADAQIAAADQAAAFgDADQgEADgFAAQgIAAgDgIg");
	this.shape_73.setTransform(-10.8,121.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0000FF").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_74.setTransform(-21.6,121.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AAXA/QgGADgGABIgLABQgTAAgMgMQgNgMAAgTQAAgWANgNQANgNATAAIALABIAIAEIADgnQABgKAKAAQAFAAADADQADADAAAFIgCAkIgCAjQAAAeACAKIAAADQAAAEgDADQgEADgEAAQgGAAgDgFgAgQAEQgGAHAAAOQAAAJAGAGQAHAHAJAAQAFAAADgCIAIgFIADgDIAAgeQgDgFgEgCQgFgCgGAAQgLAAgGAGg");
	this.shape_75.setTransform(82.3,121.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgbAkQgPgLAAgTQAAgUAMgOQAMgQATAAQAPAAAKAEQAMAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAIgFQAHgEAEAAQAJAAAAAJQgBAJgOAGQgLAFgNAAQgTAAgMgJgAgKgTQgGAFgDAKIASgIQALgFAGgEQgFgDgKAAQgGAAgFAFg");
	this.shape_76.setTransform(72.6,124.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgHA6QgDgDAAgFIAAgJIAAgJIgBgqIgQgBQgKgBAAgKQAAgEADgEQADgDAFAAIAOABIAAgJIgBgIQAAgFAEgDQADgDAFAAQALAAAAAVIAAAHIAJgBIANABQAGADAAAHQAAAFgDADQgDADgFAAIgEAAIgEAAIgIABIABArIAAAEIAAAEQAAAUgMAAQgDAAgEgDg");
	this.shape_77.setTransform(64,122.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgZAlQgNgMAAgRQAAgQALgRQAOgVAQABQAJgBALAFQAPAGAAAHQAAAEgDADQgDAEgFAAQgEgBgFgDQgFgEgKAAQgFAAgIAMQgHAMAAAJQAAAIAHAFQAGAFAIAAQAGAAAIgFIAKgDQAFAAADACQADAEAAAEQAAAGgOAHQgNAFgIAAQgRABgMgKg");
	this.shape_78.setTransform(55.4,124.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgcAkQgOgLABgTQgBgUAMgOQALgQAVAAQAOAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAHgFQAIgEADAAQAKAAgBAJQABAJgOAGQgMAFgNAAQgTAAgNgJgAgLgTQgFAFgEAKIATgIQAKgFAHgEQgGgDgIAAQgHAAgGAFg");
	this.shape_79.setTransform(46.4,124.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AgHBBQgDgDAAgFIAAhyQAAgFADgDQAEgCADAAQAFAAADADQADACAAAFIAABuQABAPgMAAQgEAAgDgDg");
	this.shape_80.setTransform(39.3,121.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AgcAkQgNgLAAgTQAAgUALgOQAMgQATAAQAPAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAIgFQAGgEAEAAQAKAAAAAJQgBAJgOAGQgLAFgNAAQgTAAgNgJgAgLgTQgFAFgEAKIATgIQAKgFAHgEQgGgDgJAAQgGAAgGAFg");
	this.shape_81.setTransform(32.2,124.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#009900").s().p("AgYA/QgDADgEAAQgFAAgDgDQgDgDAAgEIAAgGIAAgHIAAhcQAAgHADgEQADgGAGAAQAJAAAAAJIAAAEIAAAEIAAAfQAGgDAFgCIAKgBQAUAAAMANQALAMAAAUQAAATgNANQgNAOgTAAQgLAAgLgEgAgJgBIgMAHIAAAjQALAFAIgBQAKAAAGgGQAHgIAAgKQAAgLgFgHQgGgGgKAAQgDgBgGADg");
	this.shape_82.setTransform(126.8,121.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#009900").s().p("AARApQgLAEgKAAQgMAAgIgFQgJgGgCgLQgDgUAAgPQAAgLACgOQACgJAJAAQAFAAAEADQADADAAAEIgBAMIgBAMIAAATIADAOIAEACIAEAAQAIAAALgDIAAgOIAAgNQAAgRABgMQABgKAKAAQAFAAAEADQADADAAAFIgCAdIABAQIAAAQIAAAGIAAAFQAAAEgDADQgEADgEAAQgHAAgDgGg");
	this.shape_83.setTransform(117.2,124.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#009900").s().p("AgoA/QgEgEAAgFIAAhXIgBgLIABgLQABgIANgBQAHgCAOAAQAPAAAOAKQARAMAAARQAAAKgDAHQgDAFgHAFQAIAEAGAIQAIAJAAAIQAAALgNAKQgIAHgIADQgTAHgdAAQgFAAgEgEgAgWAsQAPAAAPgFQAPgEAAgFQAAgGgKgFQgHgEgGgBIgWgBgAgWgrIABARIgBASIAMAAQAYgCAAgRQAAgFgHgGQgHgGgJAAIgNABg");
	this.shape_84.setTransform(107.8,121.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00E600").s().p("AARAmIgDgRIAAgRIAAgHIAAgHIAAgDIAAgEQAAgHgDAAQgHAAgGAJQgHAKgEANIAAAHIgBAIIAAAHIgBAHQAAAFgDADQgDADgGAAQgEAAgDgDQgEgDAAgFIgBgHIAAgHIABgXIABgVIAAgIIAAgIQAAgEAEgDQACgDAGAAQAKAAABANIAAABQAMgNANAAQAQAAAFANQAEAJABASIAAAGIAAAEIABARQACAKAAAGQAAAFgDADQgEADgEAAQgLAAgBgKg");
	this.shape_85.setTransform(252,124);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00E600").s().p("AgJA9QgEgEAAgFIAAgPIgBgPIACgSIAAgSQAAgFADgDQAEgDAFAAQADAAAEADQADADAAAFIgBASIgBASIABAPIAAAPQAAAFgDAEQgEACgDAAQgGAAgCgCgAgHgqQgEgDABgFQgBgFAEgEQAEgDAEgBQAGABADADQAFAEAAAFQAAAFgFADQgDAEgGAAQgEAAgEgEg");
	this.shape_86.setTransform(245.3,122.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00E600").s().p("AAUAmQgHAEgGABQgGACgDAAQgUABgKgLQgKgLAAgVQAAgTAPgOQAOgPAUAAQAIAAAKAFQANAFAAAHQAAADgCADIgBAIIgBAMQAAAOACAHIAEAIIADAIQAAAFgDACQgDADgFAAQgDABgJgIgAgLgQQgIAJAAALQAAALAEAFQAEAGAIAAQAEAAAFgCQAEgCAEgDQgCgTAAgKIAAgFIABgIIgDgBIgCgBQgKAAgJAJg");
	this.shape_87.setTransform(238,124.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00E600").s().p("AgHA6QgDgDAAgFIAAgJIAAgJIgBgqIgQgBQgKgBAAgKQAAgEADgEQADgDAFAAIAOABIAAgJIgBgIQAAgFAEgDQADgDAFAAQALAAAAAVIAAAHIAJgBIANABQAGADAAAHQAAAFgDADQgDADgFAAIgEAAIgEAAIgIABIABArIAAAEIAAAEQAAAUgMAAQgDAAgEgDg");
	this.shape_88.setTransform(229.3,122.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00E600").s().p("AgiBCQgDgDAAgEIAAggIAAgfIgBgfIgBgRQAAgGADgFQADgGAHAAQAEAAADAEQADADAAAEIAAABQAGgDAGgCQAEgCAGABQATAAAJAQQAGAMAAATQAAASgKAMQgLANgTgBQgGAAgIgBIAAAiQAAAEgDADQgEAEgEAAQgFAAgEgEgAgEgnQgFACgGAFIABAiQAIACAGAAQAJAAAEgFQAEgFAAgKIgBgPQgCgKgIAAQgFAAgFACg");
	this.shape_89.setTransform(220.8,126.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00E600").s().p("AAUAmQgHAEgGABQgGACgDAAQgUABgKgLQgKgLAAgVQAAgTAPgOQAOgPAUAAQAIAAAKAFQANAFAAAHQAAADgCADIgBAIIgBAMQAAAOACAHIAEAIIADAIQAAAFgDACQgDADgFAAQgDABgJgIgAgLgQQgIAJAAALQAAALAEAFQAEAGAIAAQAEAAAFgCQAEgCAEgDQgCgTAAgKIAAgFIABgIIgDgBIgCgBQgKAAgJAJg");
	this.shape_90.setTransform(211.5,124.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00E600").s().p("AgZAlQgNgMAAgRQAAgQALgRQAOgVAQABQAJgBALAFQAPAGAAAHQAAAEgDADQgDAEgFAAQgEgBgFgDQgFgEgKAAQgFAAgIAMQgHAMAAAJQAAAIAHAFQAGAFAIAAQAGAAAIgFIAKgDQAFAAADACQADAEAAAEQAAAGgOAHQgNAFgIAAQgRABgMgKg");
	this.shape_91.setTransform(202.2,124.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgcAkQgNgLAAgTQAAgUALgOQAMgQATAAQAPAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAIgFQAGgEAEAAQAKAAgBAJQAAAJgOAGQgLAFgNAAQgTAAgNgJgAgLgTQgFAFgDAKIASgIQAKgFAHgEQgGgDgJAAQgGAAgGAFg");
	this.shape_92.setTransform(213.1,124.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AggArQgDgDAAgFIAAg1IAAgIIAAgHQAAgFAEgDQACgDAGAAQAIAAADAJQANgKASgBQAQAAAAAXIAAAFQAAANgLAAQgKAAAAgLIgBgIQgSADgHAQIAAAoQgBAGgDACQgDADgFABQgFAAgDgEg");
	this.shape_93.setTransform(204.6,124.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AggArQgCgDgBgFIAAg1IAAgIIAAgHQAAgFADgDQAEgDAEAAQAJAAADAJQANgKASgBQAQAAABAXIAAAFQgBANgLAAQgLAAABgLIgBgIQgRADgIAQIAAAoQAAAGgEACQgDADgFABQgFAAgDgEg");
	this.shape_94.setTransform(167,124.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgaAjQgNgMAAgTQgBgRALgOQAMgRAWAAQARgBAJANQAJAMAAATQAAARgKAOQgMAPgSAAQgPAAgLgKgAgLgOQgFAJAAAJQAAAKAFAFQAFAEAGABQAGgBAFgEQAHgGAAgKQABgagPAAQgJABgGAIg");
	this.shape_95.setTransform(158.2,124.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgHBBQgEgDAAgFIAAhyQAAgFAEgDQAEgCAEAAQAEAAAEADQACACABAFIAABuQgBAPgLAAQgEAAgDgDg");
	this.shape_96.setTransform(151.4,121.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgaAjQgNgMAAgTQgBgRALgOQAMgRAWAAQARgBAJANQAJAMAAATQAAARgKAOQgMAPgSAAQgPAAgLgKgAgLgOQgFAJAAAJQAAAKAFAFQAFAEAGABQAGgBAFgEQAHgGAAgKQABgagPAAQgJABgGAIg");
	this.shape_97.setTransform(144.6,124.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAXA/QgGADgGABIgLABQgTAAgMgMQgNgMAAgTQAAgWANgNQANgNATAAIALABIAIAEIADgnQABgKAKAAQAFAAADADQADADAAAFIgCAkIgCAjQAAAeACAKIAAADQAAAEgDADQgEADgEAAQgGAAgDgFgAgQAEQgGAHAAAOQAAAJAGAGQAHAHAJAAQAFAAADgCIAIgFIADgDIAAgeQgDgFgEgCQgFgCgGAAQgLAAgGAGg");
	this.shape_98.setTransform(96.9,121.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgcAkQgNgLAAgTQAAgUALgOQAMgQAUAAQAOAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAIgFQAGgEAEAAQAKAAgBAJQABAJgOAGQgMAFgNAAQgTAAgNgJgAgLgTQgFAFgEAKIATgIQALgFAGgEQgGgDgIAAQgHAAgGAFg");
	this.shape_99.setTransform(87.2,124.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgbAkQgOgLAAgTQgBgUALgOQAMgQAVAAQAOAAAKAEQAMAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAHgFQAIgEADAAQAJAAAAAJQAAAJgNAGQgMAFgNAAQgTAAgMgJgAgLgTQgFAFgEAKIATgIQALgFAGgEQgFgDgJAAQgHAAgGAFg");
	this.shape_100.setTransform(61,124.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgHBBQgDgDgBgFIAAhyQABgFADgDQADgCAEAAQAFAAADADQAEACAAAFIAABuQAAAPgMAAQgEAAgDgDg");
	this.shape_101.setTransform(53.9,121.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgcAkQgOgLABgTQgBgUALgOQAMgQAVAAQAOAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAHgFQAIgEADAAQAKAAgBAJQABAJgOAGQgMAFgNAAQgTAAgNgJgAgLgTQgFAFgEAKIATgIQAKgFAHgEQgGgDgIAAQgHAAgGAFg");
	this.shape_102.setTransform(46.8,124.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgXArQgMgEAAgJQAAgJAKAAQADAAAIADQAHACAEAAQAQAAAAgHQAAgEgMgFIgVgKQgMgIAAgMQAAgRASgFQALgEATAAQAJAAAEACQAGADgBAIQAAAPgHAAQgJAAgCgHIgGAAQgUAAAAAFQAAADAMAGQAQAHAGAEQAMAIAAALQAAAOgNAIQgLAGgPAAQgLAAgJgEg");
	this.shape_103.setTransform(37.9,124);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgcAkQgNgLAAgTQAAgUALgOQAMgQAUAAQAOAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAIgFQAGgEAEAAQAKAAgBAJQABAJgOAGQgMAFgNAAQgTAAgNgJgAgLgTQgFAFgEAKIATgIQALgFAGgEQgGgDgIAAQgHAAgGAFg");
	this.shape_104.setTransform(87.2,124.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgbAkQgOgLAAgTQgBgUALgOQAMgQAVAAQAOAAAKAEQAMAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAHgFQAIgEADAAQAJAAAAAJQAAAJgNAGQgMAFgNAAQgTAAgMgJgAgLgTQgFAFgEAKIATgIQALgFAGgEQgFgDgJAAQgHAAgGAFg");
	this.shape_105.setTransform(61,124.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AgHBBQgDgDgBgFIAAhyQABgFADgDQADgCAEAAQAFAAADADQAEACAAAFIAABuQAAAPgMAAQgEAAgDgDg");
	this.shape_106.setTransform(53.9,121.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgcAkQgOgLABgTQgBgUALgOQAMgQAVAAQAOAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAHgFQAIgEADAAQAKAAgBAJQABAJgOAGQgMAFgNAAQgTAAgNgJgAgLgTQgFAFgEAKIATgIQAKgFAHgEQgGgDgIAAQgHAAgGAFg");
	this.shape_107.setTransform(46.8,124.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AgXArQgMgEAAgJQAAgJAKAAQADAAAIADQAHACAEAAQAQAAAAgHQAAgEgMgFIgVgKQgMgIAAgMQAAgRASgFQALgEATAAQAJAAAEACQAGADgBAIQAAAPgHAAQgJAAgCgHIgGAAQgUAAAAAFQAAADAMAGQAQAHAGAEQAMAIAAALQAAAOgNAIQgLAGgPAAQgLAAgJgEg");
	this.shape_108.setTransform(37.9,124);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#099D0F").s().p("AggArQgCgDgBgFIAAg1IAAgIIAAgHQAAgFADgDQAEgDAEAAQAJAAADAJQANgKASgBQAQAAABAXIAAAFQgBANgLAAQgLAAABgLIgBgIQgRADgIAQIAAAoQAAAGgEACQgDADgFABQgFAAgDgEg");
	this.shape_109.setTransform(167,124.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#099D0F").s().p("AgaAjQgNgMAAgTQgBgRALgOQAMgRAWAAQARgBAJANQAJAMAAATQAAARgKAOQgMAPgSAAQgPAAgLgKgAgLgOQgFAJAAAJQAAAKAFAFQAFAEAGABQAGgBAFgEQAHgGAAgKQABgagPAAQgJABgGAIg");
	this.shape_110.setTransform(158.2,124.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#099D0F").s().p("AgHBBQgEgDAAgFIAAhyQAAgFAEgDQAEgCAEAAQAEAAAEADQACACABAFIAABuQgBAPgLAAQgEAAgDgDg");
	this.shape_111.setTransform(151.4,121.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#099D0F").s().p("AgaAjQgNgMAAgTQgBgRALgOQAMgRAWAAQARgBAJANQAJAMAAATQAAARgKAOQgMAPgSAAQgPAAgLgKgAgLgOQgFAJAAAJQAAAKAFAFQAFAEAGABQAGgBAFgEQAHgGAAgKQABgagPAAQgJABgGAIg");
	this.shape_112.setTransform(144.6,124.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#099D0F").s().p("AgZAlQgNgMAAgRQAAgQALgRQAOgVAQABQAJgBALAFQAPAGAAAHQAAAEgDADQgDAEgFAAQgEgBgFgDQgFgEgKAAQgFAAgIAMQgHAMAAAJQAAAIAHAFQAGAFAIAAQAGAAAIgFIAKgDQAFAAADACQADAEAAAEQAAAGgOAHQgNAFgIAAQgRABgMgKg");
	this.shape_113.setTransform(135.7,124.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00E600").s().p("AAXA/QgGADgGABIgLABQgTAAgMgMQgNgMAAgTQAAgWANgNQANgNATAAIALABIAIAEIADgnQABgKAKAAQAFAAADADQADADAAAFIgCAkIgCAjQAAAeACAKIAAADQAAAEgDADQgEADgEAAQgGAAgDgFgAgQAEQgGAHAAAOQAAAJAGAGQAHAHAJAAQAFAAADgCIAIgFIADgDIAAgeQgDgFgEgCQgFgCgGAAQgLAAgGAGg");
	this.shape_114.setTransform(222.8,121.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00E600").s().p("AgcAkQgNgLAAgTQAAgUALgOQAMgQATAAQAPAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAIgFQAGgEAEAAQAKAAgBAJQAAAJgOAGQgLAFgNAAQgTAAgNgJgAgLgTQgFAFgDAKIASgIQAKgFAHgEQgGgDgJAAQgGAAgGAFg");
	this.shape_115.setTransform(213.1,124.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00E600").s().p("AggArQgDgDAAgFIAAg1IAAgIIAAgHQAAgFAEgDQACgDAGAAQAIAAADAJQANgKASgBQAQAAAAAXIAAAFQAAANgLAAQgKAAAAgLIgBgIQgSADgHAQIAAAoQgBAGgDACQgDADgFABQgFAAgDgEg");
	this.shape_116.setTransform(204.6,124.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_70,p:{x:-21.6}},{t:this.shape_69,p:{x:-10.8}},{t:this.shape_68,p:{x:-1.4}},{t:this.shape_67,p:{x:8.1}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63,p:{x:55.4}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:82.3}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:202.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:229.3}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},198).to({state:[{t:this.shape_74,p:{x:-21.6}},{t:this.shape_73,p:{x:-10.8}},{t:this.shape_72,p:{x:-1.4}},{t:this.shape_71,p:{x:8.1}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63,p:{x:55.4}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:82.3}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:202.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:229.3}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},37).to({state:[{t:this.shape_74,p:{x:-21.6}},{t:this.shape_73,p:{x:-10.8}},{t:this.shape_72,p:{x:-1.4}},{t:this.shape_71,p:{x:8.1}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:55.4}},{t:this.shape_77,p:{x:64}},{t:this.shape_76},{t:this.shape_75,p:{x:82.3}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:202.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:229.3}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},10).to({state:[{t:this.shape_74,p:{x:-21.6}},{t:this.shape_73,p:{x:-10.8}},{t:this.shape_72,p:{x:-1.4}},{t:this.shape_71,p:{x:8.1}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:55.4}},{t:this.shape_77,p:{x:64}},{t:this.shape_76},{t:this.shape_75,p:{x:82.3}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_56,p:{x:202.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:229.3}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},9).to({state:[{t:this.shape_74,p:{x:-21.6}},{t:this.shape_73,p:{x:-10.8}},{t:this.shape_72,p:{x:-1.4}},{t:this.shape_71,p:{x:8.1}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:55.4}},{t:this.shape_77,p:{x:64}},{t:this.shape_76},{t:this.shape_75,p:{x:82.3}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},8).to({state:[{t:this.shape_70,p:{x:-15.3}},{t:this.shape_69,p:{x:-4.5}},{t:this.shape_68,p:{x:4.9}},{t:this.shape_67,p:{x:14.4}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_63,p:{x:70}},{t:this.shape_53,p:{x:78.6}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_56,p:{x:135.7}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_60,p:{x:222.8}}]},25).to({state:[{t:this.shape_74,p:{x:-15.3}},{t:this.shape_73,p:{x:-4.5}},{t:this.shape_72,p:{x:4.9}},{t:this.shape_71,p:{x:14.4}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_63,p:{x:70}},{t:this.shape_53,p:{x:78.6}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_56,p:{x:135.7}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_60,p:{x:222.8}}]},30).to({state:[{t:this.shape_74,p:{x:-15.3}},{t:this.shape_73,p:{x:-4.5}},{t:this.shape_72,p:{x:4.9}},{t:this.shape_71,p:{x:14.4}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_78,p:{x:70}},{t:this.shape_77,p:{x:78.6}},{t:this.shape_104},{t:this.shape_75,p:{x:96.9}},{t:this.shape_56,p:{x:135.7}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_60,p:{x:222.8}}]},10).to({state:[{t:this.shape_74,p:{x:-15.3}},{t:this.shape_73,p:{x:-4.5}},{t:this.shape_72,p:{x:4.9}},{t:this.shape_71,p:{x:14.4}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_78,p:{x:70}},{t:this.shape_77,p:{x:78.6}},{t:this.shape_104},{t:this.shape_75,p:{x:96.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_93},{t:this.shape_92},{t:this.shape_60,p:{x:222.8}}]},9).to({state:[{t:this.shape_74,p:{x:-15.3}},{t:this.shape_73,p:{x:-4.5}},{t:this.shape_72,p:{x:4.9}},{t:this.shape_71,p:{x:14.4}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_78,p:{x:70}},{t:this.shape_77,p:{x:78.6}},{t:this.shape_104},{t:this.shape_75,p:{x:96.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},8).wait(37));

	// BacgroundkDiagrams
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(3,1,1).p("AjNjMIGaGa");
	this.shape_117.setTransform(191.9,160.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1,1,1).p("AACACIgDgD");
	this.shape_118.setTransform(171.1,140.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(0.3,1,1).p("AgBgBIADAD");
	this.shape_119.setTransform(169.3,140.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(3,1,1).p("AwNALIXBAAIASAAIQMAAAwNALIAAl7AwNFxIAAlmAkhAIIAAlnACZgBIFBlBA3RALIHEAA");
	this.shape_120.setTransform(125.9,139.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgIAsQgMgEgJgKQgOgOgDgPQgCgQAOgOQAOgOASgDQAUgDAOAPQAKAKAEAKQAEAOgJAIQgGAGgNgCIgTgHIgcgKQAAAFACAGQADAFAFAFQAIAIAIACQAHADADACQAGAHgGAGQgDADgGAAQgEAAgGgDgAgLgVIASAHIATAHQgCgGgGgHQgGgFgHgBQgGAAgKAFg");
	this.shape_121.setTransform(247.1,172.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAABJQgEAAgDgDQgGgGAEgIQADgGAHgKIAMgOIAFgFIAFgEIAEgFQADgEgCgDQgHgFgLAAQgGAAgMAEQgVAVgGACQgIADgFgFQgDgDAAgGQgBgEADgDIAFgDIAQgOIAmgnIACgCIAKgJIAFgGIAFgGQADgDAFAAQAEABADADQAGAGgEAIQgCAEgIAIIgMAMIgMALQAJgBAHADQAHADAFAGQAKAJgBAKQgBAIgIAJIgOAPIgKANQgGAHgDAGIgCACQgDAEgEAAIgBgBg");
	this.shape_122.setTransform(240,163.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgqAsQgDgDgBgFQAAgFADgDIAHgGIAGgGIAegeIgKgMQgHgJAHgGQADgEAEAAQAEAAAEAEIAJAKIAGgGIAGgGQADgDAFAAQAEAAADADQAJAJgOAPIgGAEIAHAGQAHAHABACQADAGgFAGQgEADgEAAQgFAAgDgDIgDgEIgDgDIgGgFIgdAgIgDADIgDAEQgIAIgHAAQgEAAgDgDg");
	this.shape_123.setTransform(234.9,157.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(3,1,1).p("AKNgOIGbGaAF/gOIFBlCAwngOIAAl8AipgOQAAi0AAi0");
	this.shape_124.setTransform(133,141.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(3,1,1).p("AHGAAID8AAIASAAIL+AAA3RAAIHxAAIN+AAIIWAA");
	this.shape_125.setTransform(125.9,140.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_120},{t:this.shape_119,p:{x:169.3}},{t:this.shape_118,p:{x:171.1}},{t:this.shape_117}]},198).to({state:[{t:this.shape_118,p:{x:198.1}},{t:this.shape_125},{t:this.shape_119,p:{x:196.3}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},89).wait(94));

	// Layer 2
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgHAHQgEgDAAgEQAAgCAEgDQAEgEAEAAQAEAAAEADQADADAAADQAAAEgDADQgEADgEAAQgEAAgEgDg");
	this.shape_126.setTransform(282.6,45.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_127.setTransform(275.4,44.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgDQAAgGgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGALQADAIAAAQIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDACgEAAQgJABgBgJg");
	this.shape_128.setTransform(267.6,42.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_129.setTransform(261.7,40.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_130.setTransform(255.4,44.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgDQAAgGgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGALQADAIAAAQIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDACgEAAQgJABgBgJg");
	this.shape_131.setTransform(247.7,42.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0000").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_132.setTransform(239.5,42.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AARA2QgCgGgBgLIgBgRIAAgGIAAgFIAAgGQgBgDgDgBQgIAAgGAHQgDAEgGALQAAAagDAFQgCAHgHgBQgEAAgDgCQgDgDAAgEIABgEIABgUIAAgwIAAgCIAAgMIAAgGIgBgHQAAgEADgDQADgDAEAAQAHAAADAIQABAFAAAIIAAAQIgBANQAGgFAGgCQAFgDAHAAQANAAAFAHQAEAGABAJIABATIABANIADAPIAAACQAAAFgDACQgDADgEAAQgIAAgCgHg");
	this.shape_133.setTransform(231.1,40.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AgWAgQgMgJAAgQQAAgOALgPQALgSAPAAQAIAAAKAEQAMAFAAAHQAAADgCADQgDADgEAAQgDAAgFgDQgEgEgJAAQgFAAgGALQgHALAAAHQAAAHAGAFQAFAEAIAAQAFAAAHgEIAJgDQAEAAADACQADADAAAEQAAAGgNAFQgLAFgHAAQgPAAgLgJg");
	this.shape_134.setTransform(222.7,42.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgcAmQgCgCgBgFIAAguIAAgHIABgIQAAgDADgDQACgDAEAAQAJAAABAJQAMgKAQAAQAOAAAAATIAAAFQgBAMgJAAQgJAAAAgKIgBgHQgPACgHAPIAAAjQAAAFgDACQgDADgEAAQgFAAgCgDg");
	this.shape_135.setTransform(209,42.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_136.setTransform(201.2,42.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgKAQQgDgDAAgDIAFgLIAGgLQACgFAFAAQAEAAACADQADACAAAEIgFAKIgGALQgCAFgFAAQgEAAgCgCg");
	this.shape_137.setTransform(187.3,46.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_138.setTransform(180.4,44.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgDQAAgGgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGALQADAIAAAQIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDACgEAAQgJABgBgJg");
	this.shape_139.setTransform(172.6,42.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_140.setTransform(166.7,40.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF0000").s().p("AgGAzQgDgDAAgDIAAgJIAAgHIgBglIgOgBQgJgBAAgJQAAgEADgDQADgCAEAAIAMAAIAAgHIAAgIQAAgEADgDQADgDAEAAQAKAAAAATIAAAGIAHAAIAMABQAGABAAAIQAAADgDAEQgDACgFAAIgDAAIgEAAIgHABIACAlIAAAEIAAAEQAAARgLAAQgDgBgDgCg");
	this.shape_141.setTransform(160.9,40.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AgWAgQgMgJAAgQQAAgOALgPQALgSAPAAQAIAAAKAEQAMAFAAAHQAAADgCADQgDADgEAAQgDAAgFgDQgEgEgJAAQgFAAgGALQgHALAAAHQAAAHAGAFQAFAEAIAAQAFAAAHgEIAJgDQAEAAADACQADADAAAEQAAAGgNAFQgLAFgHAAQgPAAgLgJg");
	this.shape_142.setTransform(153.4,42.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AAOAkQgJAEgIAAQgLAAgHgFQgIgFgCgJQgCgTAAgNQAAgJACgNQABgIAJAAQADAAAEADQACACAAAEIAAALIgBAKIABARIABANIAEABIAEAAQAGAAAKgCIAAgNIAAgLQAAgPABgLQABgJAJAAQAEAAAEADQACADAAAEIgBAZIAAAOIAAAPIAAAFIABAEQAAAEgDADQgDADgEAAQgGAAgEgGg");
	this.shape_143.setTransform(145.7,42.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AgcAmQgDgCABgFIAAguIAAgHIAAgIQAAgDACgDQADgDAFAAQAHAAACAJQAMgKAQAAQAPAAAAATIAAAFQgBAMgKAAQgJAAAAgKIAAgHQgQACgHAPIAAAjQAAAFgDACQgCADgFAAQgEAAgDgDg");
	this.shape_144.setTransform(138.4,42.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AgGAzQgDgDAAgDIAAgJIAAgHIgBglIgOgBQgJgBAAgJQAAgEADgDQADgCAEAAIAMAAIAAgHIAAgIQAAgEADgDQADgDAEAAQAKAAAAATIAAAGIAHAAIAMABQAGABAAAIQAAADgDAEQgDACgFAAIgDAAIgEAAIgHABIACAlIAAAEIAAAEQAAARgLAAQgDgBgDgCg");
	this.shape_145.setTransform(131.2,40.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_146.setTransform(123.9,42.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgDQAAgGgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGALQADAIAAAQIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDACgEAAQgJABgBgJg");
	this.shape_147.setTransform(116.5,42.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_148.setTransform(108.4,42.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("AgWAgQgMgJAAgQQAAgOALgPQALgSAPAAQAIAAAKAEQAMAFAAAHQAAADgCADQgDADgEAAQgDAAgFgDQgEgEgJAAQgFAAgGALQgHALAAAHQAAAHAGAFQAFAEAIAAQAFAAAHgEIAJgDQAEAAADACQADADAAAEQAAAGgNAFQgLAFgHAAQgPAAgLgJg");
	this.shape_149.setTransform(100.6,42.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgKAQQgDgDAAgDIAFgLIAGgLQACgFAFAAQAEAAACADQADACAAAEIgFAKIgGALQgCAFgFAAQgEAAgCgCg");
	this.shape_150.setTransform(86.8,46.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_151.setTransform(79.9,44.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF0000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgDQAAgGgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGALQADAIAAAQIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDACgEAAQgJABgBgJg");
	this.shape_152.setTransform(72.1,42.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_153.setTransform(66.2,40.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF0000").s().p("AAVA3QgFADgGABIgKABQgQAAgMgLQgKgLgBgQQABgUAKgKQAMgNARAAQAGAAAEABQAEABADADQABgZACgJQABgJAIAAQAEAAADACQACADABAEIgCAhIgCAeQAAAaACAKIAAABQAAAFgDACQgDADgDAAQgGAAgCgFgAgOADQgFAHgBAMQAAAIAHAGQAFAFAIAAQAEAAADgCIAHgEIACgCIAAgbQgCgFgDgBQgEgCgGAAQgJAAgGAFg");
	this.shape_154.setTransform(59.4,40.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF0000").s().p("AgGA6QgDgDAAgFIAAhkQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAABgQAAAOgKAAQgDAAgDgCg");
	this.shape_155.setTransform(53,40.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_156.setTransform(49.1,40.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF0000").s().p("AAOAkQgIAEgKAAQgKAAgHgFQgIgFgCgJQgDgTABgNQAAgJABgNQACgIAIAAQAEAAAEADQACACAAAEIgBALIgBAKIABARIACANIAEABIADAAQAIAAAJgCIAAgNIAAgLQAAgPABgLQACgJAIAAQAFAAACADQADADAAAEIgBAZIAAAOIAAAPIAAAFIABAEQAAAEgDADQgDADgFAAQgGAAgDgGg");
	this.shape_157.setTransform(42.9,42.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF0000").s().p("AgVA4QgDACgEAAQgEAAgCgCQgDgDAAgEIAAgFIAAgGIAAhSQAAgFADgEQADgFAFAAQAIAAAAAIIAAADIgBADIAAAdIALgFIAIgBQASAAAKAMQAKALAAAQQAAARgLAMQgMAMgQAAQgLAAgJgDgAgHgBIgMAGIAAAfQAKAFAIAAQAIAAAGgHQAGgGAAgKQAAgJgFgGQgFgGgJAAQgDAAgEACg");
	this.shape_158.setTransform(34.6,40.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgNA+QgDgDAAgEIAAgCQACgKAAgJIAAgkIgFABIgEAAQgFAAgDgDQgDgCAAgFQAAgGAHgDIANgBIABgIQACgQAHgIQAIgKARAAQAOAAAAAJQAAAKgNAAQgJAAgEAGQgDAFgBAJIAAADIAOgBQAOAAAAAJQAAAKgPgBIgOABIAAATIAAATQAAAOgBAIQgCAHgHAAQgEAAgDgCg");
	this.shape_159.setTransform(19.8,40.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_160.setTransform(12,42.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgZAfQgMgIABgSQAAgRAJgNQALgOARAAQANAAAJAEQAKAGABALQgBAIgIAGQgFADgMAEIgYALQAEAEAFACQAFACAFAAQAKAAAHgEQAGgEAEAAQAHAAAAAIQAAAIgMAGQgKAEgMAAQgQAAgMgJgAgJgRQgFAFgDAJIARgHQAJgFAFgDQgEgEgJAAQgFAAgFAFg");
	this.shape_161.setTransform(-2.6,42.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_162.setTransform(-10.5,42.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgDQAAgGgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGALQADAIAAAQIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDACgEAAQgJABgBgJg");
	this.shape_163.setTransform(-17.9,42.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgYAfQgMgIgBgSQAAgRAKgNQALgOASAAQAMAAAJAEQALAGgBALQABAIgKAGQgDADgNAEIgXALQADAEAFACQAFACAGAAQAJAAAHgEQAGgEAEAAQAIAAAAAIQAAAIgNAGQgKAEgLAAQgRAAgLgJgAgJgRQgFAFgDAJIAQgHQAKgFAFgDQgFgEgHAAQgHAAgEAFg");
	this.shape_164.setTransform(-26.2,42.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_165.setTransform(-34,42.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgYAfQgMgIAAgSQgBgRAKgNQALgOASAAQAMAAAIAEQALAGAAALQAAAIgJAGQgEADgMAEIgXALQADAEAFACQAFACAFAAQAKAAAHgEQAGgEAEAAQAHAAABAIQAAAIgNAGQgKAEgMAAQgQAAgLgJgAgJgRQgFAFgDAJIARgHQAIgFAGgDQgFgEgHAAQgHAAgEAFg");
	this.shape_166.setTransform(-48.4,42.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AARA2QgCgGgBgLIgBgRIAAgGIAAgFIAAgGQgBgDgDgBQgIAAgGAHQgDAEgGALQAAAagDAFQgCAHgHgBQgEAAgDgCQgDgDAAgEIABgEIABgUIAAgwIAAgCIAAgMIAAgGIgBgHQAAgEADgDQADgDAEAAQAHAAADAIQABAFAAAIIAAAQIgBANQAGgFAGgCQAFgDAHAAQANAAAFAHQAEAGABAJIABATIABANIADAPIAAACQAAAFgDACQgDADgEAAQgIAAgCgHg");
	this.shape_167.setTransform(-56.7,40.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgGAzQgDgDAAgDIAAgJIAAgHIgBglIgOgBQgJgBAAgJQAAgEADgDQADgCAEAAIAMAAIAAgHIAAgIQAAgEADgDQADgDAEAAQAKAAAAATIAAAGIAHAAIAMABQAGABAAAIQAAADgDAEQgDACgFAAIgDAAIgEAAIgHABIACAlIAAAEIAAAEQAAARgLAAQgDgBgDgCg");
	this.shape_168.setTransform(-64.6,40.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgDQAAgGgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGALQADAIAAAQIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDACgEAAQgJABgBgJg");
	this.shape_169.setTransform(-78.5,42.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_170.setTransform(-84.5,40.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_171.setTransform(-97.2,44.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF0000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgDQAAgGgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGALQADAIAAAQIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDACgEAAQgJABgBgJg");
	this.shape_172.setTransform(-105,42.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_173.setTransform(-110.9,40.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AARA3IgLgQIgLgPIgJAHIgBATQAAAEgDADQgDADgEAAQgKAAAAgMIABgSIAAgRIABgXIAAgZIAAgHIgBgHQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFIAAAHIAAAIIAAAUIgBAUQAKgHAUgUQADgDAEAAQAEAAADADQAEADAAAEQAAADgDADQgJAJgMAKIAPAUQALAPAAAFQAAAEgDACQgDADgEAAQgGAAgDgFg");
	this.shape_174.setTransform(-117,40.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_175.setTransform(-125.4,42.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF0000").s().p("AgFArQgDgDAAgEIgCgZIgCgYIgBgHQgIAFgJALIgBACIAAAWIAAAGIgBAFQAAAEgDACQgDACgEAAQgGAAgCgFQgCgEAAgIIAAgaIAAgLIgBgLQAAgGADgFQADgHAFAAQAEAAADADQADADAAAEIAAAGQALgMAKAAQALAAAEAIQAFgEAFgCQAFgCAHAAQAOAAAFAPIADATIAGAnQAAAEgDADQgDADgFAAQgIAAgBgJIgDgVIgDgVQgCgNgDAAIgHAEIgJAGIACAXIACAYQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_176.setTransform(-135.3,42.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgcAmQgDgCAAgFIAAguIAAgHIABgIQAAgDADgDQACgDAFAAQAHAAACAJQAMgKAQAAQAOAAAAATIAAAFQgBAMgJAAQgJAAAAgKIgBgHQgPACgHAPIAAAjQAAAFgDACQgDADgEAAQgFAAgCgDg");
	this.shape_177.setTransform(-151.2,42.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_178.setTransform(-159.1,42.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgKAQQgDgDAAgDIAFgLIAGgLQACgFAFAAQAEAAACADQADACAAAEIgFAKIgGALQgCAFgFAAQgEAAgCgCg");
	this.shape_179.setTransform(228.9,23.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_180.setTransform(221.9,21.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF0000").s().p("AAPAiIgCgQIgBgOIAAgGIAAgHIAAgCIABgDQAAgHgDABQgHgBgFAJQgGAHgDAMIgBAHIAAAGIgBAGIAAAHQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgHIAAgGIABgUIABgTIAAgGIgBgHQAAgEADgDQADgCAFAAQAJgBABAMIAAABQALgLAKAAQAOAAAGALQADAJAAAPIAAAFIAAAEQAAAGACAIIABAPQAAAFgDACQgDACgEAAQgJAAgBgIg");
	this.shape_181.setTransform(214.2,19.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_182.setTransform(208.2,17.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF0000").s().p("AgKAhIgYg6IgBgFQAAgEADgCQADgDAEAAQAHAAACAGQAFAJALAfIAKgYIAHgQQADgGAGAAQAEAAADADQADADAAAEQAAACgMAbIgPAgQAAADgDADQgDACgDAAQgHAAgDgHg");
	this.shape_183.setTransform(202.4,19.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FF0000").s().p("AgZAgQgMgKABgRQAAgRAJgNQALgOARAAQANAAAIAEQAMAFAAAMQgBAIgIAGQgFADgMAFIgYAKQAEAEAFACQAFACAFAAQAKAAAHgEQAGgDAEgBQAHABAAAHQAAAIgMAFQgKAFgMAAQgQAAgMgIgAgJgRQgFAFgDAJIARgIQAJgDAFgFQgEgCgJAAQgFAAgFAEg");
	this.shape_184.setTransform(194.4,19.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_185.setTransform(188.3,17.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF0000").s().p("AgGA6QgDgDAAgFIAAhkQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAABgQAAAOgKAAQgDAAgDgCg");
	this.shape_186.setTransform(184,17.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF0000").s().p("AgYAgQgMgKgBgRQAAgRAKgNQALgOASAAQAMAAAJAEQALAFgBAMQABAIgKAGQgDADgNAFIgXAKQADAEAFACQAFACAGAAQAJAAAHgEQAGgDAEgBQAIABAAAHQAAAIgNAFQgKAFgLAAQgRAAgLgIgAgJgRQgFAFgDAJIAQgIQAKgDAFgFQgFgCgHAAQgHAAgEAEg");
	this.shape_187.setTransform(177.7,19.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FF0000").s().p("AgVA4QgDACgEAAQgEAAgCgCQgDgDAAgEIAAgFIAAgGIAAhSQAAgFADgEQADgFAFAAQAIAAAAAIIAAADIgBADIAAAdIALgFIAIgBQASAAAKAMQAKALAAAQQAAARgLAMQgMAMgQAAQgLAAgJgDgAgHgBIgMAGIAAAfQAKAFAIAAQAIAAAGgHQAGgGAAgKQAAgJgFgGQgFgGgJAAQgDAAgEACg");
	this.shape_188.setTransform(169.2,17.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgKAQQgDgDAAgDIAFgLIAGgLQACgFAFAAQAEAAACADQADACAAAEIgFAKIgGALQgCAFgFAAQgEAAgCgCg");
	this.shape_189.setTransform(154.7,23.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_190.setTransform(147.7,21.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FF0000").s().p("AAPAiIgCgQIgBgOIAAgGIAAgHIAAgCIABgDQAAgHgDABQgHgBgFAJQgGAHgDAMIgBAHIAAAGIgBAGIAAAHQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgHIAAgGIABgUIABgTIAAgGIgBgHQAAgEADgDQADgCAFAAQAJgBABAMIAAABQALgLAKAAQAOAAAGALQADAJAAAPIAAAFIAAAEQAAAGACAIIABAPQAAAFgDACQgDACgEAAQgJAAgBgIg");
	this.shape_191.setTransform(140,19.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_192.setTransform(134,17.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FF0000").s().p("AgGAzQgDgDAAgEIAAgHIAAgIIgBglIgOgCQgJgBAAgIQAAgEADgDQADgCAEgBIAMABIAAgIIAAgHQAAgEADgCQADgDAEAAQAKAAAAASIAAAGIAHgBIAMABQAGACAAAHQAAAFgDACQgDADgFAAIgDAAIgEAAIgHAAIACAmIAAADIAAAFQAAAQgLAAQgDAAgDgCg");
	this.shape_193.setTransform(128.3,18);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FF0000").s().p("AgWAgQgMgJAAgQQAAgOALgPQALgSAPAAQAIAAAKAEQAMAFAAAHQAAADgCADQgDADgEAAQgDAAgFgDQgEgEgJAAQgFAAgGALQgHALAAAHQAAAHAGAFQAFAEAIAAQAFAAAHgEIAJgDQAEAAADACQADADAAAEQAAAGgNAFQgLAFgHAAQgPAAgLgJg");
	this.shape_194.setTransform(120.7,19.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF0000").s().p("AgYAgQgMgKAAgRQgBgRAKgNQALgOASAAQAMAAAIAEQALAFAAAMQAAAIgJAGQgEADgMAFIgXAKQADAEAFACQAFACAFAAQAKAAAHgEQAGgDAEgBQAHABABAHQAAAIgNAFQgKAFgMAAQgQAAgLgIgAgJgRQgFAFgDAJIARgIQAIgDAGgFQgFgCgHAAQgHAAgEAEg");
	this.shape_195.setTransform(112.7,19.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF0000").s().p("AgHA6QgCgDAAgFIAAhkQAAgEADgDQADgCADAAQAFAAACACQADADAAAEIAABgQAAAOgKAAQgEAAgDgCg");
	this.shape_196.setTransform(106.5,17.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF0000").s().p("AgYAgQgMgKAAgRQAAgRAJgNQALgOARAAQANAAAIAEQAMAFAAAMQgBAIgIAGQgFADgMAFIgYAKQAEAEAFACQAFACAFAAQAKAAAHgEQAGgDAEgBQAHABAAAHQABAIgNAFQgKAFgMAAQgQAAgLgIgAgJgRQgFAFgDAJIARgIQAIgDAGgFQgEgCgJAAQgFAAgFAEg");
	this.shape_197.setTransform(100.2,19.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FF0000").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_198.setTransform(92.4,19.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgKAQQgDgDAAgDIAFgLIAGgLQACgFAFAAQAEAAACADQADACAAAEIgFAKIgGALQgCAFgFAAQgEAAgCgCg");
	this.shape_199.setTransform(78.8,23.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_200.setTransform(71.8,21.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FF0000").s().p("AAPAiIgCgQIgBgOIAAgGIAAgHIAAgCIABgDQAAgHgDABQgHgBgFAJQgGAHgDAMIgBAHIAAAGIgBAGIAAAHQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgHIAAgGIABgUIABgTIAAgGIgBgHQAAgEADgDQADgCAFAAQAJgBABAMIAAABQALgLAKAAQAOAAAGALQADAJAAAPIAAAFIAAAEQAAAGACAIIABAPQAAAFgDACQgDACgEAAQgJAAgBgIg");
	this.shape_201.setTransform(64.1,19.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_202.setTransform(58.1,17.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF0000").s().p("AgGAzQgDgDAAgEIAAgHIAAgIIgBglIgOgCQgJgBAAgIQAAgEADgDQADgCAEgBIAMABIAAgIIAAgHQAAgEADgCQADgDAEAAQAKAAAAASIAAAGIAHgBIAMABQAGACAAAHQAAAFgDACQgDADgFAAIgDAAIgEAAIgHAAIACAmIAAADIAAAFQAAAQgLAAQgDAAgDgCg");
	this.shape_203.setTransform(52.4,18);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FF0000").s().p("AgWAgQgMgJAAgQQAAgOALgPQALgSAPAAQAIAAAKAEQAMAFAAAHQAAADgCADQgDADgEAAQgDAAgFgDQgEgEgJAAQgFAAgGALQgHALAAAHQAAAHAGAFQAFAEAIAAQAFAAAHgEIAJgDQAEAAADACQADADAAAEQAAAGgNAFQgLAFgHAAQgPAAgLgJg");
	this.shape_204.setTransform(44.8,19.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FF0000").s().p("AgYAgQgMgKgBgRQAAgRAKgNQALgOASAAQAMAAAJAEQALAFgBAMQABAIgKAGQgDADgNAFIgXAKQADAEAFACQAFACAGAAQAJAAAHgEQAGgDAEgBQAIABAAAHQAAAIgNAFQgKAFgLAAQgRAAgLgIgAgJgRQgFAFgDAJIAQgIQAKgDAFgFQgFgCgHAAQgHAAgEAEg");
	this.shape_205.setTransform(36.8,19.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FF0000").s().p("AgGA6QgDgDAAgFIAAhkQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAABgQAAAOgKAAQgDAAgDgCg");
	this.shape_206.setTransform(30.6,17.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FF0000").s().p("AgYAgQgNgKAAgRQAAgRAKgNQALgOASAAQAMAAAIAEQAMAFgBAMQABAIgKAGQgDADgNAFIgXAKQADAEAFACQAFACAGAAQAJAAAHgEQAGgDAEgBQAIABAAAHQAAAIgNAFQgKAFgLAAQgRAAgLgIgAgJgRQgFAFgDAJIAQgIQAJgDAGgFQgFgCgHAAQgHAAgEAEg");
	this.shape_207.setTransform(24.3,19.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgKAQQgDgDAAgDIAFgLIAGgLQACgFAFAAQAEAAACADQADACAAAEIgFAKIgGALQgCAFgFAAQgEAAgCgCg");
	this.shape_208.setTransform(10.2,23.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_209.setTransform(3.2,21.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FF0000").s().p("AAPAiIgCgQIgBgOIAAgGIAAgHIAAgCIABgDQAAgHgDABQgHgBgFAJQgGAHgDAMIgBAHIAAAGIgBAGIAAAHQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgHIAAgGIABgUIABgTIAAgGIgBgHQAAgEADgDQADgCAFAAQAJgBABAMIAAABQALgLAKAAQAOAAAGALQADAJAAAPIAAAFIAAAEQAAAGACAIIABAPQAAAFgDACQgDACgEAAQgJAAgBgIg");
	this.shape_210.setTransform(-4.5,19.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_211.setTransform(-10.5,17.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FF0000").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_212.setTransform(-16.5,19.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF0000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_213.setTransform(-24.1,19.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FF0000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_214.setTransform(-32,19.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FF0000").s().p("AARA1QgCgFgBgLIgBgRIAAgFIAAgGIAAgHQgBgCgDAAQgIAAgGAGQgDAEgGAKQAAAbgDAGQgCAFgHABQgEAAgDgEQgDgCAAgEIABgEIABgUIAAgwIAAgDIAAgLIAAgHIgBgHQAAgEADgCQADgDAEAAQAHAAADAIQABAEAAAKIAAAOIgBAOQAGgFAGgDQAFgCAHAAQANAAAFAHQAEAGABAJIABASIABAOIADAPIAAADQAAADgDAEQgDACgEAAQgIAAgCgIg");
	this.shape_215.setTransform(-40,17.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FF0000").s().p("AgWAgQgMgJAAgQQAAgOALgPQALgSAPAAQAIAAAKAEQAMAFAAAHQAAADgCADQgDADgEAAQgDAAgFgDQgEgEgJAAQgFAAgGALQgHALAAAHQAAAHAGAFQAFAEAIAAQAFAAAHgEIAJgDQAEAAADACQADADAAAEQAAAGgNAFQgLAFgHAAQgPAAgLgJg");
	this.shape_216.setTransform(-48.5,19.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgKAQQgDgDAAgDIAFgLIAGgLQACgFAFAAQAEAAACADQADACAAAEIgFAKIgGALQgCAFgFAAQgEAAgCgCg");
	this.shape_217.setTransform(-62.2,23.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_218.setTransform(-69.2,21.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FF0000").s().p("AAPAiIgCgQIgBgOIAAgGIAAgHIAAgCIABgDQAAgHgDABQgHgBgFAJQgGAHgDAMIgBAHIAAAGIgBAGIAAAHQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgHIAAgGIABgUIABgTIAAgGIgBgHQAAgEADgDQADgCAFAAQAJgBABAMIAAABQALgLAKAAQAOAAAGALQADAJAAAPIAAAFIAAAEQAAAGACAIIABAPQAAAFgDACQgDACgEAAQgJAAgBgIg");
	this.shape_219.setTransform(-76.9,19.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_220.setTransform(-82.9,17.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF0000").s().p("AgHA6QgCgDAAgFIAAhkQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAABgQAAAOgKAAQgEAAgDgCg");
	this.shape_221.setTransform(-87.2,17.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FF0000").s().p("AgGA6QgDgDAAgFIAAhkQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAABgQAAAOgKAAQgDAAgDgCg");
	this.shape_222.setTransform(-91.3,17.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FF0000").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_223.setTransform(-97.5,19.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FF0000").s().p("AgWAgQgMgJAAgQQAAgOALgPQALgSAPAAQAIAAAKAEQAMAFAAAHQAAADgCADQgDADgEAAQgDAAgFgDQgEgEgJAAQgFAAgGALQgHALAAAHQAAAHAGAFQAFAEAIAAQAFAAAHgEIAJgDQAEAAADACQADADAAAEQAAAGgNAFQgLAFgHAAQgPAAgLgJg");
	this.shape_224.setTransform(-105.7,19.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgKAQQgDgDAAgDIAFgLIAGgLQACgFAFAAQAEAAACADQADACAAAEIgFAKIgGALQgCAFgFAAQgEAAgCgCg");
	this.shape_225.setTransform(288.4,0.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FF0000").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_226.setTransform(281.4,-1.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FF0000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgEQAAgFgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDADgEAAQgFAAgDgDQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGAMQADAIAAAPIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDADgEAAQgJAAgBgJg");
	this.shape_227.setTransform(273.7,-3.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_228.setTransform(267.7,-5.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF0000").s().p("AgFArQgDgDAAgEIgCgZIgCgYIgBgHQgIAFgJALIgBACIAAAWIAAAGIgBAFQAAAEgDACQgDACgEAAQgGAAgCgFQgCgEAAgIIAAgaIAAgLIgBgLQAAgGADgFQADgHAFAAQAEAAADADQADADAAAEIAAAGQALgMAKAAQALAAAEAIQAFgEAFgCQAFgCAHAAQAOAAAFAPIADATIAGAnQAAAEgDADQgDADgFAAQgIAAgBgJIgDgVIgDgVQgCgNgDAAIgHAEIgJAGIACAXIACAYQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_229.setTransform(259.8,-3.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF0000").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_230.setTransform(249.7,-3.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF0000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgEQAAgFgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDADgEAAQgFAAgDgDQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGAMQADAIAAAPIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDADgEAAQgJAAgBgJg");
	this.shape_231.setTransform(241.6,-3.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgNA+QgDgDAAgEIAAgCQACgKAAgJIAAgkIgFABIgEAAQgFAAgDgDQgDgCAAgFQAAgGAHgDIANgBIABgIQACgQAHgIQAIgKARAAQAOAAAAAJQAAAKgNAAQgJAAgEAGQgDAFgBAJIAAADIAOgBQAOAAAAAJQAAAKgPgBIgOABIAAATIAAATQAAAOgBAIQgCAHgHAAQgEAAgDgCg");
	this.shape_232.setTransform(227.2,-5.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_233.setTransform(219.4,-3.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_234.setTransform(205.4,-3.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgVA4QgDACgEAAQgEAAgCgCQgDgDAAgEIAAgFIAAgGIAAhSQAAgFADgEQADgFAFAAQAIAAAAAIIAAADIgBADIAAAdIALgFIAIgBQASAAAKAMQAKALAAAQQAAARgLAMQgMAMgQAAQgLAAgJgDgAgHgBIgMAGIAAAfQAKAFAIAAQAIAAAGgHQAGgGAAgKQAAgJgFgGQgFgGgJAAQgDAAgEACg");
	this.shape_235.setTransform(197.4,-5.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgcAmQgCgCAAgFIAAguIAAgHIAAgIQAAgDADgDQACgDAFAAQAHAAACAIQAMgJAQAAQAPAAAAATIAAAFQgCAMgJAAQgJAAAAgKIgBgIQgPADgHAPIAAAjQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_236.setTransform(189.5,-3.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgYAfQgNgIAAgRQAAgSAKgNQALgOASAAQAMAAAIAEQALAFAAAMQAAAIgJAGQgDADgNAEIgXAMQADAEAFABQAFACAGAAQAJAAAHgEQAGgDAEAAQAIgBAAAIQAAAIgNAGQgKAEgLAAQgRAAgLgJgAgJgRQgFAFgDAJIAQgHQAJgFAGgDQgFgDgHgBQgHAAgEAFg");
	this.shape_237.setTransform(181.5,-3.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgKAhIgYg6IgBgFQAAgEADgCQADgDAEAAQAHAAACAGQAFAJALAfIAKgYIAHgQQADgGAGAAQAEAAADADQADADAAAEQAAACgMAbIgPAgQAAADgDADQgDACgDAAQgHAAgDgHg");
	this.shape_238.setTransform(173.8,-3.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgcAmQgDgCABgFIAAguIAAgHIAAgIQAAgDACgDQADgDAEAAQAIAAACAIQAMgJAQAAQAPAAAAATIAAAFQgBAMgKAAQgJAAAAgKIAAgIQgQADgHAPIAAAjQAAAFgDACQgCADgFAAQgEAAgDgDg");
	this.shape_239.setTransform(160.1,-3.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgZAfQgMgIABgRQAAgSAJgNQALgOARAAQANAAAIAEQAMAFAAAMQgBAIgIAGQgFADgMAEIgYAMQAEAEAFABQAFACAFAAQAKAAAHgEQAGgDAEAAQAHgBAAAIQAAAIgMAGQgKAEgMAAQgQAAgMgJgAgJgRQgFAFgDAJIARgHQAJgFAFgDQgEgDgJgBQgFAAgFAFg");
	this.shape_240.setTransform(152.1,-3.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgGAzQgDgDAAgEIAAgIIAAgHIgBglIgOgBQgJgBAAgJQAAgEADgDQADgDAEABIAMAAIAAgIIAAgHQAAgEADgDQADgDAEAAQAKAAAAATIAAAGIAHAAIAMABQAGABAAAIQAAADgDAEQgDACgFAAIgDAAIgEAAIgHAAIACAmIAAAEIAAAEQAAARgLgBQgDAAgDgCg");
	this.shape_241.setTransform(144.5,-4.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgNA+QgDgDAAgEIAAgCQACgKAAgJIAAgkIgFABIgEAAQgFAAgDgDQgDgCAAgFQAAgGAHgDIANgBIABgIQACgQAHgIQAIgKARAAQAOAAAAAJQAAAKgNAAQgJAAgEAGQgDAFgBAJIAAADIAOgBQAOAAAAAJQAAAKgPgBIgOABIAAATIAAATQAAAOgBAIQgCAHgHAAQgEAAgDgCg");
	this.shape_242.setTransform(137,-5.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_243.setTransform(129.2,-3.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FF0000").s().p("AAVA3QgFADgGABIgKABQgQAAgMgLQgKgLgBgQQABgUAKgKQAMgNARAAQAFAAAFABQAEACADACQABgZACgKQABgIAIAAQAEAAADACQACAEABADIgCAhIgCAeQAAAaACAJIAAACQAAAEgDADQgDADgDAAQgGAAgCgFgAgOADQgGAGAAANQABAIAFAGQAGAFAIAAQAEAAADgCIAHgEIACgCIAAgbQgCgEgDgCQgFgCgFAAQgKAAgFAFg");
	this.shape_244.setTransform(114,-5.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FF0000").s().p("AAPAiIgCgPIgBgQIAAgFIAAgGIAAgDIABgEQAAgFgDgBQgHABgFAHQgGAJgDALIgBAGIAAAHIgBAHIAAAGQAAAEgDADQgDADgEAAQgFAAgDgDQgCgDAAgEIgBgGIAAgHIABgTIABgTIAAgHIgBgHQAAgEADgDQADgCAFgBQAJAAABAMIAAABQALgLAKAAQAOAAAGAMQADAIAAAPIAAAFIAAAEQAAAFACAKIABAOQAAAEgDADQgDADgEAAQgJAAgBgJg");
	this.shape_245.setTransform(105.8,-3.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FF0000").s().p("AAOAkQgIAEgKAAQgKAAgHgFQgIgFgCgJQgDgTABgNQAAgJABgNQACgIAIAAQAFAAACADQADACAAAEIgBALIgBAKIABARIACANIAEABIADAAQAIAAAJgCIAAgNIAAgLQAAgPABgLQACgJAIAAQAFAAACADQADADABAEIgCAZIAAAOIAAAPIAAAFIABAEQAAAEgDADQgDADgFAAQgFAAgEgGg");
	this.shape_246.setTransform(97.9,-3.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FF0000").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_247.setTransform(89.9,-3.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FF0000").s().p("AgNA+QgDgDAAgEIAAgCQACgKAAgJIAAgkIgFABIgEAAQgFAAgDgDQgDgCAAgFQAAgGAHgDIANgBIABgIQACgQAHgIQAIgKARAAQAOAAAAAJQAAAKgNAAQgJAAgEAGQgDAFgBAJIAAADIAOgBQAOAAAAAJQAAAKgPgBIgOABIAAATIAAATQAAAOgBAIQgCAHgHAAQgEAAgDgCg");
	this.shape_248.setTransform(82.2,-5.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FF0000").s().p("AgYAfQgMgIAAgRQgBgSAKgNQALgOASAAQAMAAAIAEQALAFAAAMQAAAIgJAGQgEADgMAEIgXAMQADAEAFABQAFACAFAAQAKAAAHgEQAGgDAEAAQAHgBABAIQAAAIgNAGQgKAEgMAAQgQAAgLgJgAgJgRQgFAFgDAJIARgHQAIgFAGgDQgFgDgHgBQgHAAgEAFg");
	this.shape_249.setTransform(67.7,-3.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FF0000").s().p("AgcAmQgDgCAAgFIAAguIAAgHIABgIQAAgDADgDQACgDAEAAQAJAAABAIQAMgJAQAAQAOAAAAATIAAAFQgBAMgJAAQgJAAAAgKIgBgIQgPADgHAPIAAAjQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_250.setTransform(60.2,-3.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FF0000").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_251.setTransform(52.3,-3.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00E600").s().p("AgnAwQgJgHAAgJQAAgFADgDQADgDAFAAQAGAAADAHQAFAJAOAAQAMAAAMgFQAMgHAAgGQAAgJgIgDQgFgDgPABQgNgBgKgEQgOgFABgMQAAgOAPgMQAPgMARAAQAHAAALADQANAFAAAFQAAADgDADQgDAEgEAAIgLgCIgKgBQgKAAgHAFQgJAEAAAGQAAACADACIAIADIARABQARAAAJAJQALAHAAAQQAAATgWAKQgQAHgUAAQgTAAgLgIg");
	this.shape_252.setTransform(36.4,-5.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00E600").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_253.setTransform(26,-5.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00E600").s().p("AgzA4QgDgDAAgEIABgJIAAgJIABgNIAAgNIAAgMIAAgOIgBgNIgBgOQAAgEAEgDQADgEAFAAQAGAAAGAKQAgAvAhAdIAAgLIgBgwIgBgIIAAgIQAAgKAKAAQAMAAAAAlIAAALIAAAuIgCALQgBAKgJAAQgGAAgGgGQgcgZgjgtIAAAWIAAARIAAASQAAAWgKAAQgFAAgEgEg");
	this.shape_254.setTransform(14.6,-5.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00E600").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgDIAOgCQASABALAEQAHADAAAGQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAIgJAAIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_255.setTransform(4.1,-5.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00E600").s().p("AAnAwIgDgSQgEgNgEgYIgLAeIgFAOQgCAIgDAFQgEAHgGAAQgGAAgFgJIgDgNIgLgnIgJAjIgDARQgDAKgIAAQgFAAgDgDQgCgDAAgEQAAgMAFgRIAIgcIAFgWQACgQAFgFQAEgFAFAAQAHAAADAHQADAGADAUQAEATAGAVQAHgVAHgaIAFgRQAEgKAHAAQAJAAADAMIAEASQAEAfAGAWIAHAYQAAAFgDADQgDACgEAAQgIAAgFgLg");
	this.shape_256.setTransform(-7.3,-5.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00E600").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgDIAOgCQASABALAEQAHADAAAGQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAIgJAAIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_257.setTransform(-18.5,-5.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00E600").s().p("AgmAsIABgXQADgfAAgnQAAgEACgDQADgDAFAAQAEAAADADQADADAAAEQAAAngCAgIgBASQARAAAagJIADAAQAFAAADADQACADAAAEQAAAGgGADQgJAEgSADQgPADgLAAQgSAAAAgQg");
	this.shape_258.setTransform(-27.3,-5.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00E600").s().p("AggA4QgDgDAAgEIAAgUIACghIABgiQAAgTALABIAHgBIAKgBQANABANAIQAOALAAAPQAAATgPAKQgNAKgSgBIgFAAIgBAiQAAAEgDADQgCACgFAAQgEAAgCgCgAgNgcIgBAZIAEABQALAAAHgFQAJgHAAgJQAAgGgIgFQgHgFgHAAIgFAAIgDAAIAAALg");
	this.shape_259.setTransform(-35.6,-5.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00E600").s().p("AAoAwIgFgSQgDgNgEgYIgLAeIgEAOQgDAIgDAFQgEAHgGAAQgGAAgEgJIgFgNIgKgnIgJAjIgCARQgEAKgIAAQgFAAgCgDQgDgDAAgEQAAgMAFgRIAIgcIAEgWQADgQAEgFQAEgFAGAAQAHAAADAHQADAGADAUQAEATAGAVQAHgVAIgaIADgRQAEgKAIAAQAIAAAFAMIADASQAEAfAGAWIAHAYQAAAFgDADQgEACgDAAQgJAAgDgLg");
	this.shape_260.setTransform(-46.2,-5.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00E600").s().p("AgmAtQgQgNAAgVQAAgYAPgVQASgXAZAAQAaAAANAMQAMAMAAAXQAAAYgOAUQgRAYgZAAQgWAAgPgNgAgXgVQgLAPAAARQAAAMAKAIQAJAHAOAAQAPAAALgQQAKgOAAgSQAAgPgHgGQgHgGgRAAQgPAAgMAQg");
	this.shape_261.setTransform(-59,-5.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00E600").s().p("AggAsQgLgLAAgQQAAgXAWgaQASgWASAAIAGABIAFAAQADgDAEAAQAIAAACAJIABAOQAAAEgCADQgDAEgFAAQgHAAgDgHQgCgEgBAAIgGgBQgJAAgLAPQgRATAAARQAAAIAFAGQAGAGAHAAQAGAAAIgEIALgHQAGgEADAAQAEAAADADQADADAAAEQAAAEgEAEQgUARgUAAQgQAAgMgNg");
	this.shape_262.setTransform(-69.5,-5.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#00E600").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgDIAOgCQASABALAEQAHADAAAGQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAIgJAAIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_263.setTransform(-85.2,-5.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#00E600").s().p("AgPA0QgJgVgLgoIgGgTQgEgOAAgFQAAgFADgDQADgCAEAAQAHAAADAHIADANIAHAYIALAjIAQgrIAGgRQAFgLAEgFQAEgEAEAAQAFAAADADQADADAAAEQAAADgCADQgEAFgDAIIgFAPIgUAyQgEAJgEAIQgDAGgFAAQgIAAgDgHg");
	this.shape_264.setTransform(-95,-5.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#00E600").s().p("AgiA2QgDgDAAgFQAAgEADgDQADgCAFgBIAOgBIAAghQAAgTACgSIgQAAQgFAAgDgCQgDgDAAgFQAAgEADgDQADgCAEAAIAVgBQANAAAWADQAJACAAAIQAAAFgDACQgDADgEAAIgTgCIgBAiIAAAiIAUAAQAEAAADACQADADAAAFQAAADgDAEQgDACgFAAIgMABIgNAAIgNABIgPABQgFAAgDgCg");
	this.shape_265.setTransform(-104.4,-5.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#00E600").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_266.setTransform(-113.6,-5.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#00E600").s().p("AggAsQgLgLAAgQQAAgXAWgaQASgWASAAIAGABIAFAAQADgDAEAAQAIAAACAJIABAOQAAAEgCADQgDAEgFAAQgHAAgDgHQgCgEgBAAIgGgBQgJAAgLAPQgRATAAARQAAAIAFAGQAGAGAHAAQAGAAAIgEIALgHQAGgEADAAQAEAAADADQADADAAAEQAAAEgEAEQgUARgUAAQgQAAgMgNg");
	this.shape_267.setTransform(-123.4,-5.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#00E600").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgDIAOgCQASABALAEQAHADAAAGQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAIgJAAIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_268.setTransform(-132.6,-5.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#00E600").s().p("AgfAyQgPgKAAgOQAAgMAKAAQAKAAAAAMQAAAEAIAFQAHAFAHAAQACAAACgKIAAgWIABgqIAAgEIgBAAIgIAAIgJgBQgEAAgDgCQgDgDAAgFQAAgJANgBIAHABIAHAAIAOgBIANAAQAUAAAAALQAAAEgDADQgDADgFAAIgDAAIgFgBIgGAAIAAAFQAAA0gHAYQgFASgOAAQgOAAgNgKg");
	this.shape_269.setTransform(-142.4,-5.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#00E600").s().p("AgjA4QgDgEAAgEIAAhNIgBgKQAAgFABgEQABgHALgCQAGgBANAAQANAAAMAJQAPAKAAAQQAAAIgDAGQgCAFgGAEQAHADAFAHQAGAIAAAIQAAAJgKAJQgHAGgIADQgQAGgaAAQgFAAgDgDgAgTAnQANAAAOgFQANgDgBgFQAAgFgIgFQgGgDgGgBIgTAAgAgTgXIAAAQIAKAAQAWgCAAgOQAAgGgHgEQgGgFgHAAIgMAAg");
	this.shape_270.setTransform(-152,-5.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#00E600").s().p("AgmAtQgQgNAAgVQAAgYAPgVQASgXAZAAQAaAAANAMQAMAMAAAXQAAAYgOAUQgRAYgZAAQgWAAgPgNgAgXgVQgLAPAAARQAAAMAKAIQAJAHAOAAQAPAAALgQQAKgOAAgSQAAgPgHgGQgHgGgRAAQgPAAgMAQg");
	this.shape_271.setTransform(-163,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126}]}).wait(381));

	// Layer 1
	this.instance = new lib.bub_captain();
	this.instance.parent = this;
	this.instance.setTransform(43.5,83.8,1,1,0,0,0,77.5,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(381));

	// Layer 8
	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(243,243,243,0.8)").s().p("EgjMAIkIAAxIMBGZAAAIAARIg");
	this.shape_272.setTransform(62.2,129.1);
	this.shape_272._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_272).wait(198).to({_off:false},0).wait(183));

	// Layer 7
	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(4,1,1).p("EAkaAF0IAA7SMhIzAAAIAAa5IAACfIAANlMBIzAAAIAAslg");
	this.shape_273.setTransform(60.4,114.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(0.3,1,1).p("AWvhxQAEAIAEAPARtj6QgIAIgPgEARQkeQAOgSAOAHAWAhyQgMALgBAJQgBAIAIAHAWKB2QgKgIAKgLAXBBiQgHAPgBALAcJBqQAchaAXBLQA4guAGA5QAUgWASgmQAFAUANALQAqhdAJBqQAmgYADA5QAwg2AMAwQAtg1hZAEQAigkAggIQAGAkAFAjQAYgsBYAZQAWAGgIAeQAZgRAYAFAcBEfQAwgSB0AGQBpAGBjANQBUAMBVgMALfisQACAHABAJAKciVQgKgIgGgSALYBwQgBgIAFgIAKVBSQANARAEAGEgkZABGQAEAAAEABQBBACAigVQAfALAHANQAhBCAig7QAThuAtBoQAaAQAnADQAiAaAjgfQgUgFgJgfQAzg9AxBFQBHgXgUBBQBDgeABAtQAogVAcgYQg4gnBnASQAxALAcAvQANgjAvANA0bDaIgBAAQhZgThogNQhpgNhjAmQhhAmhkgRQhpgThtgEQhygFhbAaQgEABgEAB");
	this.shape_274.setTransform(59.6,141.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(0.3,1,1).p("ATNkZQAFAKAJADQANAGAMgFQANgEALgIQAFgDADgFQAFgGABgIQADgLgNgDQgDAAgDAAQgLAAgKADQgMADgNAGQgLAEgHAIQABAGACAEgATbg3QgBgEgBgGQAAgOACgNQACgOADgNQADgNgBgPQgBgNgBgNQgBgPgBgNQgBgOgDgNQgDgOgEgNQgDgOgDgMAUUkfQgBAOgBANQgBANgBANQgBAOgBANQgCANgCAMQgBAOAAAOQAAAOABANQABANAAAOQAAAOAAAOQAAAFAAAFQAAABAAAAQAAACABABQACAAACAAQAIAQgPAKQgBAAgBABQANgCAOABQANACANACQAOABAOAAQADAAADABQACAAABAAQgLAHgHAMQgHALAIAMQAEAIAFADQgGgBgHgCQgNgDgNgCQgNgCgMACATwgnQAIgHAKgIQAFgDAFgBAUHgfQgFADgEABQADAEAEAEQAKAKAJAJQAFAHgCAGQgBAEgBACQACAIACAJQAEANACANQACANAAAPQAAANgCANQgBAEgCADQgDAFgJAAQgBAAAAAAQgOgBgNAAQgKAAgJAAQgDAAgDAAQgMgBACgIQADgNABgOQAAgNAAgNQAAgOAAgOQgBgPABgNIAAAAQACgCACgDQAIgKAIgKQADABABgDQgCgCgCgCQgFgEgFgEQgHALgLAIQgJAIgEAHQgBAAgBAAQgPAAgNgCQgOgBgOgBQgNAAgOgBQgNgBgOAAQgOABgOAAQgMAAgNAAQgNgBgNAAQgNAAgMAAQgMAAgKAAQgBAAgCgFQAAgBgBgBQgFgLgEgMQgFgPANgJIAAAAQALACANADQANADAOABQAOABANAAQAOABANAAQAOAAAOAAQAOAAAOACQANABANACQAOACAOACQANACAOAAQAIAAAGAAQACAAACgBQADAAAEAAQgCgCgCgBQgPgKASgHQABAAADACQAIAGAJAIAUQALQABACABABQAEAHADgCATxgSQAIAHAIAGQAJAHAGAJAVegaQADgNAOAOQAKAKABAOQABAOgJAKQgFAGgJABQgGAAgFgDATWD8QAAgDgBgEQAAgNAAgOQAAgNAAgOQgBgNABgPQAAgLgCgFQACAAADAAQAKABAKgBQAOAAANAAQANAAAIAEQABARACANQACAOACANQABAOACANQACALADAJQASgcATAfQALATgGAUQASgLAEAUQABAFAAAFQAGgcAZALQAFACADAIQADAFABAFQAVggAEAtQAAAIAAAIQAXgeAuACQAIAAABALQABAJAAAKQASgmASAeQAWgdAiARQANAHAGALAT/C4QABANAEAMQABAGABAFAUrD/QABADABACQAEAMgCAPQgBAOgBANQgCAOgFAMQgQAFgOgCQgMgCgNAAQgBAAgBAAQgPgBgFgOQgEgNABgOQACgNgBgOQgBgKAAgKAQsgaQAMAAANACQAIABAHABAT+gbQgGgFgFgFQgCgBgBgBATcgjQAEACADADATEAEIAAABQgBACgBADQgBAFAGAAQAKACAIgIAT5AgQgBANAAANQAAAJAAAJATZAJQANAAANACQAOACAPgCAI1hTQAOAEAOACQAMADANADQANACAOABQANABANACQAMABANAAQAOAAAOAAQAOAAAOAAQAOAAAOAAQANAAAPABQANABANACQAOACAOAAQANAAANAAQAOgBANgBQAOgBAMAAQAKABAHADQgGAGgDAGQgBABAAAAQgDAFAAAHQAAAJADAIQACAFAEADQABABAAACQABAEgBAEQgBACgDABQgFABgIgDQgLgDgLAAQgNAAgOABQgMAAgNABQgNAAgNgBQgNgBgNgCQgOgBgMgCQgNgCgNgCQgNgBgNgCQgNgCgOgBQgNgCgNgCQgNgCgNAAQgPAAgOABQgNACgOABQgOABgMACQABAHABAFQADATAHATQAEAKABAKQABAMgCgCQgFABgEAAQgGAAgGgCQgUgGgUACQgPACgQABQgFAAgEABQAKgNAFgSQAFgSADgUQABgJAAgKQgDAAgEAAQgOgBgNACQgOACgOgCQgDADgEACQgHADgBgFQgEgNgBgNQgBgOAEgNQAFgMAAgPQAAgCgBgCQACABABACQAFAFADAHQAHAMACANQABANgDAOQgBAJgEAFAPdggQANAEAOABQANACANgBQADAAAEAAAPzgUQANABANAAQAEAAAFAAANEEXQAEgNAOgDQASAUAMAQQACggATgIQAHgEAJACQAHACAGABQAEghARgWQAdAIAJAXQAogRATghQAXAjgJAhQAOgYAXAKQAFACACAHQAFAPgBAPQAEgTAQAEQALACAAAKQAEguAlASQAOAHASgFQANACAHAAARaEXQgBADAAAEATuCsQAAAOAEANQAEAMgBANQAAAKACAAATiICQABgEABgDQABgKABgKQACgOABgNQABgOAEgNQAFgNgDgNQgCgNgEgNQgFgMgEgLQAHABAHAAQAGABAGABQAOADANABQAEABAEgBQADAAAEAAQgBANgDAMQgFATABATQAAAUAAAUQAAAGAAAGQAAAMABALQAAAHADAFQABABABAAQAVAEAZAAQAVAAATgFQASgEASgBQAdgCAaAKQAYAJAbABQAaABAZAAQAWAAAWAAATiICQgBAAAAgBQgOgBgNABQgbABgcAAQgcAAgcgCQgagCgbgCQgZgBgaAAQgbAAgagDQgYgDgZgFQgagGgdABQgcABgbAGQgbAFgZAAQgdABgYgHQgagHgbAAQgcAAgbACQAFAPgFAPQgGAAgJgHQgEACgFAAQgIAAgEAEQgMAOgPAEQADgPAFgPQACgHABgJQgCAAgCgBQgIADgLABQggAFgjgCQgigBgjgCQgigCghABQgiACgjAAQghAAgfgDQghgDgiAAQghAAgiAAQgkAAgiAAQgjAAgkgBQgjAAgjgBQgiAAgiABQgVAAgUgBQgMAAgMgBQgngCgiAHQhKAPhJgHQhPgIhLgKQhMgJhIgFQhCgDgpgPQgHgCgGgDIgBAAQAAAAAAAAQgEAAgDAAQgGABgGAAQgLABgMgBQgigDghAEQgiAEgjgDQghgEgiAGQgiAGgjAEQggAEgggFQghgGgiABQgiABghADATiICQgBACgBADQgDAIAAAGQAAACACABQAPAIAFgQQABgDACgDQAFAHAEACQAGACAFgCQAFgBADgDQgBAFAAABQAKACAFgEQAFgFgDgHQgBgCAAgCAKVImQAWgEAagCQAdgBAXANQAXANAbgCQAbgCAagCQAbgCAcACQAZACAZgCQAbgCAcgDQAbgCAcgBQAZAAAUAIAIrJPQAbgEAcgCQAZgCAbABQAbAAAYAHQAZAHAbACQAaAEAbgEQAbgDAcgCQAbgCAaAEQAcAEAcAAQAcgBAbAEQAbACAcgBQAXgBAIAEAS4J5QAWgIAXgFQAbgHAZAFQAIACAJgBAS0JDQAZgBAYgEQAagEAagEQAggGATAVARCKOQAcAAAcAAQAbAAAbgBAUBGFQAAAOABANAUIGSQABAEABAFAVxJbQARAFAUABAVcIsQAXgEAWALAHmkUQgJgEAAgHQAAgCABgCQAAgCACgCQAEABAEgDQAJgHALgDQANgDANgEQAOgEAMACQAFABgCAFAHmkUQAFAGAJgCQAMgEAMgGQALgGANgHQALgGAEgJQgBANgBANQgBANAAANQABAOgEANQgDAOACANQABAKgBAKQgBANAEAMQAFANgDAOQgEAOAHANQAHgFAGgEQADACAAAGQABARgMAEQgCABgCABAIDhiQAAgIAAgOQgBgPgCgNQgBgNgCgOQgBgNABgNQACgOgDgNQgDgOgHgLQgHgLgFgMAmeDuQALgOAXADQAiAFgIAZQAOglAxAIQAKAdgJAQQAYglAlAYQAJAFgEAPQgJAhgTAZQAXgXAaAHQAGACABAHQACAKgBAJQgBALgGAJAtECaQAHAQAJAKQAcAhApgiQAVAAAAAUQA2hFArBIQALASAgAFQA8AJATgUQAAgCABgBQAXgRAbAIQAHACgBAJQgBALgCAIQADgJAEgFQAMgQAYARQABAKgBAJQgBAPgIAKQACgQAHgJAjDFeQALgPAYAFQAGACADAGQAKAVAFAUQgFgiAVgMQAHgEAJADQAiANAEAjQANgsAjAFQAKABAGAIQADAGABAJQAahFBCAlQAaAPAFAnQAGgnAhAAQAMAAAHAFQAZAQAHgiQADgTAMgPQAGAIAGAGQAMgjAcAIQAMAEAJAJQAfgjAggIQAGAQgBALQAYgtA0ARQAKADABAKQABAJgEAFQAjgEASgXQAEgFAHgBQAAgdgFgVQgFgXgDgbQgDgTADgZQACgUgHgFQAFAAAHAAQAIgBALgCQAYgFAbABQADAAADAAQAJAVgGAXQgIAZACAcQABAcAEAYQAEAVgDAYQAAAEgBAFQgCALACAPQADAWgRACQgIABgNgEQgagIgYgDQgFgIALgRQAJgPgCgXAj8FSQgFAHgFAGAkbHpQgPgBgOgCQAAAAgBAAQABAAAAAAAIViWQACANACAOQAAAIACAHAH6hXQgEgOANADAG1hlQgCgDgDgCQAPAFAMAFQALAEAMAEQANAEALgDIAAAAAH/hRQgEgCgBgDQAAAAAAgBAH/hRQABAHABADQgEADgDACQgKAGABAAQAAASAOgJQAGgHAHgGQAFgFAHgEQAEgCAGgCQAFgBAGgCQAEgCAEgBAH/hRQACAAADABQAGABADABQAFgEAFgDQADgCAEgDQgMgDgLgEQgCgBgCAAAI2hLQgBgCAAgCQAAgCAAgCAIehaQALgHALgIAIBhHQAGgDAGgEAIAgVQAAgKAAgLQAAgFgBgEAIlADQADANADAMAIQgYQAEAUgBATQgBAPgEAGAJJg4QALAAALACQANADAOABQAGABADABAJLgmQAMABAMACQANACALABAI4g2QAAAHABAHQACAPACANAIYhJQAKAHAMAHQAGADAEACQgBgLgBgKQgFgDgEgCAIRCEQABAZAEAWAIrB/QACAZAAAaAIUEJQABAUAIARAIxEcQACAEACAFAIkEWQABAMAFABAJQEXQAVgWATAUQAGAGAAAKQAAgHACgEQAHgOAVAEQAYAEAUAKQADACADABQgBANgFAHQAAgMAAgLQAAgYADgWQAYgHACARQAHgRANgSQAtgHADAqQASghAIArQACAJgBAKQAAAGgBAHAISHtIAAAAQADgRgCgTQgCgcgDgZQgEgbgJgYQgEgDANgDQAAAAABAAQAagGAUAKQACABACACQAEADAAAFQADAegEAbQgDAZAMANQAGAHgCAGQgDAHgEAPAIZF5QAAALAEAJAIhGFQACADAEABAJaILQAdgGAPANA1wjxQgYgBgkgBQgjAAggAOQgUAJgKALQAKgjAcgUQAVgQAYgJQAWgJAWAGQgBgRgRgIQgVgKgVgIQgkgMgdALQAVgmAyAEQAcACAYAPQAUANAeAIQgPgjgagbQgNgNgPgFQgLgEgIgFQAKABAKABQAnAFAjAPQAQAGAIAMQAEAHgCAKQACgHACgIQAFgQAIgPQAMgUARgQQAFgEAGgDQgBAFgBAFQgFARgEAPQgGAUgJASQgGAKAKALQAKgNAXgFQBRgSAyA+Qg5gNg5AGQAiADAOAiQAGAOAHARQAMAagOgMQgqgngyAfQAOAIAKARQAXAlgTAhQgZgqgpgPQANARANAQQAUAZgHAiQgCAKgJgBQgZgCgLgVQgOgdgMgWQgDgFgDgFQgBADgCACQAAABAAAAQgKATgFAgQgEAWgCAZQgCAiAFAiQABAMABAMQAAALACAKQADASAIALA1wDGQgBgCgBgDQgHgfgEgjQgEgbgEgYQgGgegCggQgCgiAAgjQgBgkACggQACgjAIgeQAIgcAMgZQAMAQAMAVAv1nJQAHADAGADQAUAJAUAMQAaAPAWAPQgFgWgLgYQgLgXgOgPQAoANAfAbQAFAEADAEQABgEAAgEQAFgogaggQgUgLgMgDQA1gGAxAPQgGgngwgNQgOgEgNgHQA7gMA8ALQgZgtg8AFQgyAFgkAjQgFAEgFABQAAgCAAgCIAAgBQgBgegBglQAAAAAAgBQgBABgBAAQgnAUAAArQAAAGAAAGQgCgFgDgFQgMgZgagMQgIgDgLgDQAJAiATAhQAFAKADAMQgcglhDAFQguADgaAbQA7AGA1AkQglAJggAdQgYAVgNAdQgCAFgCAFQAFgEAHgCQAHgCAKAAA0blgQgEAGgBAGAylmZQAagLAYgRQAZgTAfgIQAUgFATADQAFAAAFABQABgLAAgJQAAgHABgFAwKnRQAIACAHAEQADABADABQABAQgDARQgEAfgDAfQgFAigEAhQgFAjgOAbQgNAcgKAdQgLAhgTAUQgUAUgMAcQgMAbgSAdQgPAYgTAYQgWAagYAYQgUAUgRAXQgSAagQAXQgSAagMAVQAIATAGASQAGARAJANQAZAGAMAQQgBgZAPAAQATAAAHANQAJgbARgVQAVgbAYAcQACglANgdQAWAOAJAPQAHgyAqAWQAOATAEAOQAPgiAcAgQAPg7AyAeQAGgNALgeQATAMAGARQAcgcAqAJA1UClQATgSAQgaQASgbAMgYQAPgbASgSQAUgTAPgZQANgXATgWQAUgXARgUQANgRAVgfQATgeAKggQAIgcALgcQALgeAEgjQABgMAEgOQAKggAEghQADgSgBgTA5fFwQgbgWAagOQAGgDAKgDQAZgIAIAaQAHgaAgADQALACAHAJQAEAEACAFQgDgTAOgLQAFgEAEgCQAAgFACgEQABgCABgBQAYgQAXgSQAagTARgaQAHgMAHgEA1pANQACAjAFAdQAEAgAFAeQACAOADAMQAEATAHAPQAEAKADAJA17EcQgGAHgDAKQgBgJgDgJQgKgagTAQQgaAYgJAeQgCgegSAIA17EcQAFgGAHgDQAAgBAAAAQAJgLAGgKQAAgCgBgBQgJgZgGgbA1WEJQgFgDgFgJA1WEJQgKAAgPAJQgEAGgIAEA0lEdQgPgJgOAIQgGgNgIgEQgDgBgDgBA3wFVQAAADABADAu2G8QgDABgEAB");
	this.shape_275.setTransform(75.1,117.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#D2F4FF").s().p("ADxNRQhDglgZBFQgBgJgEgGQgGgIgLgBQgigFgNAsQgEgkgigMQgJgEgHAFQgVAMAFAiQgFgUgJgVQgDgGgGgCQgYgFgLAPQABgJgCgKQgCgIgFgBQgagHgXAXQATgaAJggQAEgPgJgFQglgYgYAlQAJgQgKgdQgxgIgOAlQAIgagigEQgXgDgLANQABgIgCgKQgXgRgMAPQgEAGgEAJIAEgTQAAgJgGgCQgbgIgYARIAAADQgTAUg8gJQgggFgLgSQgrhIg2BFQAAgUgVAAQgpAigcghQgJgKgIgQIABgCQgqgJgcAcQgGgRgTgMQgLAegGAMQgygdgPA7QgcgggPAiQgEgPgOgSQgqgWgHAyQgJgPgWgOQgNAcgDAlQgXgcgVAcQgRAVgJAbQgHgNgTAAQgPAAABAZQgMgQgZgGQgJgNgGgRIgOglQAMgVASgaIAigxQARgYAUgTQAYgYAWgaQATgYAPgZQASgdAMgcQAMgbAUgVQATgTALghQAKgdANgcQAOgbAEgjIAJhDIAIg+QACgRAAgQIANAGQAUAJATAMQAbAPAWAOQgFgWgLgYQgLgXgOgOQAoAMAeAbQAGAFADAEIABgIQAFgogagfQgUgLgMgDQA1gHAxAQQgGgngwgNQgOgEgNgHQA7gMA8ALQgZgtg8AFQgyAEgkAkQgFAEgFAAIAAgDIAAgBIgChDIAAgBIgCABQgnAUAAArIAAAMIgFgKQgMgZgagMIgTgGQAJAiATAhQAFAKADAMQgcglhDAFQguADgaAbQA7AGA1AjQglAJghAcQgXAVgNAeIgEAKQAFgEAHgCIAAAAQAHgCAHAAIAAAAIAAAAIADAAIgDAAIAAAAIAAAAQgHAAgHACIAAAAQAagLAYgRQAZgTAfgIQAUgFATADQABATgDASQgEAhgKAgQgEANgBANQgEAjgLAdQgLAdgIAcQgKAggTAeQgVAfgNARIglArQgTAWgNAXQgPAagUATQgTASgOAbQgNAYgRAbQgQAZgTATIgFgaIgJg+QgFgdgCgjQADASAHALQgHgLgDgSQgCgKAAgMIgCgYQgFgiACgiQACgZADgXQAGgfAKgTIAAgBIADgFIAGAKIAaAzQALAVAZACQAJABACgKQAHgigUgZIgaghQApAPAZAqQATghgXglQgKgRgOgIQAygfAqAnQAOAMgMgbIgNgeQgOgigjgDQA6gHA4AOQgxg/hSATQgWAFgKANQgKgLAFgKQAKgSAGgUIAIghIADgKIgLAIQgRAQgMATQgIAQgFAQIgEAPQACgKgEgHQgIgMgQgHQgjgPgngEIgUgCIATAJQAPAFANANQAaAbAOAjQgdgIgUgNQgYgPgcgCQgzgEgUAmQAdgLAjAMQAWAIAVAKQAQAIABAQQgWgFgVAJQgYAJgVAPQgcAVgKAjQAKgLAUgJQAggOAjAAIA8ACQgMAZgJAcQgHAegDAjQgBAgABAkIACBGQACAgAGAeQAEAYAEAbQAEAjAHAfIABAFQgGAEgHAMQgRAZgaAUQgXASgYAQIgCADIgCAJIgKAGQgNALACATQgBgFgEgEQgHgJgLgCQgggDgHAaQgIgagaAHQgJAEgGADQgvgNgNAjQgcgvgxgMQhngSA4AnQgcAYgoAVQgBgshDAdQAUhBhHAXQgxhFgzA9QAJAgAUAFQgjAfgigaQgngDgagQQgthpgTBvQgiA7ghhCQgHgOgfgKQgiAVhBgDIAA64MBIzAAAIAAbRIgIAAQgYgEgZAQQAIgegWgGQhYgYgYAsIgLhIQggAJgiAjQBZgDgtA1QgMgxgwA2QgDg4gmAXQgJhrgqBfQgNgLgFgVQgSAngUAWQgGg6g4AvQgXhMgcBbQgGgLgNgHQgigRgWAdQgSgfgSAnIgBgTQgBgLgIAAQgugCgXAeIAAgQQgEgugVAgIgEgKQgEgHgEgCQgZgLgGAcIgCgKQgDgUgSALQAGgUgMgTQgSgfgSAcIgFgUIgEgbIgDgbQgCgOgBgQQgEgPgEgJQAJABADgFIADgHQACgNgBgNQABgPgDgNQgBgNgEgNIgEgRQAMgCANACQANACANADIANADQAFADAGgBQAJAAAFgGQAJgKgBgPQgBgOgKgKQgOgOgDANIgGgBQgOAAgOgBIgagEQgOgBgNACIACgCQAPgJgIgQIgEAAIgBgDIAAgBIAAgKIAAgcIgBgbIgBgbQgBgOACgOIAEgZIACgbIACgaIACgbQAFgGABgIQADgMgNgCIgGAAQgLAAgLADQgLADgNAFQgLAFgHAHIADALIAGAaIAHAaQADAOABANIACAcIACAbQABAPgDANQgEANgBANQgCAOAAAOQABAGABAEQgTAHAQAJIAEAEIgHAAIgEABIgOAAQgOAAgNgCIgcgEIgagDQgOgDgOABIgcAAIgbgBIgcgBQgNgBgNgDIgYgFQgOgGgOARQADgGAGgGQgHgDgKgBQgMgBgOACIgbACIgaAAQgOAAgOgCIgagDIgcgBIgcAAIgcAAIgcAAQgNAAgMgCIgagCQgOgBgNgCIgagGIgbgHIAEgBQAMgEgBgRQgBgGgCgDIgNAKQgHgNADgOQAEgOgFgNQgEgMABgNQABgLgBgJQgCgOADgNQAEgNgBgOIABgbIACgZQACgFgFgBQgNgCgNAEIgaAHQgLADgJAHQgFADgEgBIgBAEIgBAEQAAAHAJAEQAFALAHAMQAHALADANQADAOgCAOQgBANABANIADAbQACANABAPIAAAWQgNgEAEAPIgBAAQgKADgNgEIgYgIIgagKIAFAFIABAEQAAAOgFANQgEANABAOQABANAEANQABAEAGgCQAFgCADgDQAOABANgBQAOgCAOAAIAHABIgBATQgDAVgFASQgFASgKANIAJgBQAGASAJAIIgLAAQAHAFgCAUQgDAYADAUQADAbAFAWQAFAWAAAdQgHABgEAFQgTAXgiAEQAEgFgCgJQgBgKgJgDQg0gRgYAtQAAgLgFgQQggAIgfAjQgJgJgMgEQgcgIgMAjIgMgOQgMAPgDASQgHAjgZgQQgHgFgMAAQghAAgGAnQgFgngagPgAPpMBQgOACgEAOQAAgKgBgJQgIgsgSAiQgDgqgtAHQgNASgIARQgBgRgYAHQgDAWAAAYQgUgKgYgEQgWgEgGAOQgCAEAAAHQAAgKgGgGQgTgUgVAWQADgYgEgVQgEgYgBgcQgCgcAIgZQAGgXgJgVIgGAAIgDgQIAJgBQACACgBgMQgBgKgEgKQgHgTgDgTIgCgNIAagDIAbgDQAOgCAPABIAaACIAaADIAbAEIAaADIAaAEIAZAEIAbADQANABANgBIAZgBIAbAAQALAAALADQAIADAFgBQADgBABgDQABgEgBgEQAPADAIgIIABACIADAFIAWAAIAZAAIAaABIAZAAIAcgBQAOAAANABIAbACIAcACIAbACIADAAIAAAAIgCAGQgBAFAGAAQAKACAIgIIAAAAQgBANABAPIAAAcIAAAaQgBAOgDANQgCAIAMABIAGAAQgMALgBAJIgGAAQADAFAAALIAAAcIAAAbIAAAbIABAHIgUgCQgSAFgOgHQglgSgEAuQAAgKgLgCQgQgEgEATQABgPgFgQQgCgGgFgDQgXgJgOAYQAJghgXgjQgTAhgoARQgKgXgcgIQgRAVgEAiIgNgDQgJgCgHAEQgTAIgCAgQgMgQgSgUg");
	this.shape_276.setTransform(60.4,66.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#336600").s().p("AiEELQgZgDgKgVIgbgzIgGgKQgMgUgMgRIg8gBQgjgBgfAOQgVAJgJAMQAKgkAbgUQAVgPAYgKQAWgJAWAGQgBgQgRgJQgVgKgVgIQgkgMgdALQAVgmAyAEQAdACAXAPQAUANAeAIQgPgjgagaQgNgNgPgFIABgHQAnAFAjAPQAQAHAIALQAEAGgBAKIADgPQAFgPAJgPQALgUARgPIAJACIgJAgQgGAVgJAQQgFAKAJALQAKgNAXgFQBSgRAwA9Qg4gNg5AHQAiACAOAiIANAfQAMAagNgMQgrgngyAgQAOAHAKARQAXAmgTAgQgYgqgqgOIAaAhQAUAYgHAiQgCAKgIAAIgBAAgAiQAvQACgHADgGQgDAGgCAHgADPgrQgUgLgUgKIgMgGIgGgCIgPgFIAAgUIABgNIgBANIAAAUIgKgCQgUgDgUAGQgfAHgZATQgXARgaALIgIgEQANgdAXgVQAggcAlgKQg0gkg7gFQAagbAugEQBCgFAcAlQgCgMgGgKQgSghgKgiIATAHQAaALANAZIAEAKIAAgMQAAgqAngUIADgCIAAACIABBCIAAABIAAAEQAFAAAFgFQAkgjAygEQA8gFAZAtQg8gLg7ALQAOAIANADQAwAOAGAmQgxgPg0AGQAMAEATAKQAbAggFApIgKgBQgegbgpgNQAPAPAKAXQALAYAFAWQgVgPgbgPg");
	this.shape_277.setTransform(-41.8,78.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FF0000").s().p("AABgCIgBACIAAADQAAgDABgCg");
	this.shape_278.setTransform(26.9,179.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#CC9900").s().p("EgkZAHKIAAtkQBbgaByAFQBtAFBpASQBkARBhglQBjgmBpAMQBoANBaATIAAAAQAhgDAhgBQAjgCAhAGQAgAGAggEQAjgEAigGQAhgGAiADQAjAEAigEQAhgFAiAEQAMABALgBIAMgBIAHgCIAAABIgBABIgGAAIAGAAIABAAIABAAIAMAFQAqAOBCAEQBIAFBMAJQBLAKBPAIQBJAHBKgPQAigHAnACIgFgCIAAAAIAdACIgBAAIgBAAIgJAAIgNAAIANAAIAJAAIABAAIABAAQAUACAVgBIBEAAIBFABIBHAAIBHAAIBDAAQAiAAAhAEQAfADAhAAIBFgCQAhgBAiACIBFADQAjABAggEIATgEIAEABIgDAQIgIAdQAPgDAMgOQAEgFAIABQAFAAADgCQAKAGAGABQAFgPgFgPQAbgCAcAAQAbAAAaAHQAYAGAdAAQAZAAAbgGQAbgFAcgBQAdgBAaAFQAZAGAYADQAaADAbgBQAaAAAZACIA1AEQAcABAcAAIA3gBQANAAAOABIgBAGQgDAIAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAOAIAGgQIADgGQAFAGAEADQAGACAFgCQAFgBADgDIgBAGQAKACAFgEQAFgFgDgHIAAgDQAWAEAZAAQAVgBATgEQASgEASgBQAdgCAaAJQAYAKAbABIAzABIArAAQAxgSB0AGQBpAFBjAOQBUAMBVgMIAIAAIAAMjgAUNjjIA2gBIg2ABIg4AAIA4AAIAAAAgAV4kGQgXAGgWAIQAWgIAXgGIACAAIAAAAIABgBQAOgCAMgBIABAAIAAAAQALABALACIAKABIAAAAIABAAIAFAAIgFAAIgBAAIAAAAIgKgBQgLgCgLgBIAAAAIgBAAQgMABgOACIgBABIAAAAIgCAAgAlOkFIABgDIAAgDQgBADAAADgAYokQQgTgBgRgFQARAFATABgAT2kSIgBAAIAAAAQgGgCgOAAIAAAAIgBAAIgDAAIgDAAIgDAAIgBAAIgBAAIgCAAIgEAAIgIAAIAAAAIAAAAIgTAAIgCAAIgRgCIgCAAIgHAAQgUgCgUAAIgBAAIAAAAIgDAAIgDAAIgCAAIgCAAIAAAAIAAAAQgaAAgagEIgKgCIgZgBIgBAAIAAAAIgIAAIgEAAIgFABIg3AFQgbADgbgDQgagDgZgGQgZgHgagBIgFAAIgIAAIAAAAIAAAAQgTAAgSACIgCAAIg3AGIA3gGIACAAQASgCATAAIAAAAIAAAAIAIAAIAFAAQAaABAZAHQAZAGAaADQAbADAbgDIA3gFIAFgBIAEAAIAIAAIAAAAIABAAIAZABIAKACQAaAEAaAAIAAAAIAAAAIACAAIACAAIADAAIADAAIAAAAIABAAQAUAAAUACIAHAAIACAAIARACIACAAIATAAIAAAAIAAAAIAIAAIAEAAIACAAIABAAIABAAIADAAIADAAIADAAIABAAIAAAAQAOAAAGACIAAAAIABAAgAXfktIgCgBIAAAAQgOgPgWAAIAAAAIAAAAIgOACIgzAIQgZADgYACQAYgCAZgDIAzgIIAOgCIAAAAIAAAAQAWAAAOAPIAAAAIACABgAO1k6IAIgBIABAAIA1gDIAEgBIAVAAIAAAAIABAAIAYABIAFAAIAMAAIALAAIAAAAIAAAAIAOAAIADAAIAKAAIA3gFQAbgDAcAAQAZAAAUAIQgUgIgZAAQgcAAgbADIg3AFIgKAAIgDAAIgOAAIAAAAIAAAAIgLAAIgMAAIgFAAIgYgBIgBAAIAAAAIgVAAIgEABIg1ADIgBAAIgIABIAAAAIgBAAQgVgBgTgKQgVgMgYAAIgBAAIAAAAIgGAAQgaABgWAFQAWgFAagBIAGAAIAAAAIABAAQAYAAAVAMQATAKAVABIABAAIAAAAgAYck+IgBgBIAAAAIgCgBQgPgGgPgBIgBAAIAAAAIgJABIgCAAIACAAIAJgBIAAAAIABAAQAPABAPAGIACABIAAAAIABABgAMZlfQgKgJgQAAIgBAAIAAAAQgIAAgJACIgBAAIABAAQAJgCAIAAIAAAAIABAAQAQAAAKAJIAAAAg");
	this.shape_279.setTransform(60.4,205.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#339900").s().p("EAhpADCQhjgOhpgFQh0gGgxASIgrAAIgzgBQgbgBgYgKQgagJgdACQgSABgSAEQgTAEgVABQgZAAgWgEIgCgBQgCgGAAgGIgBgXIAAgMIAAgoQgCgTAGgTQADgMABgNIgHAAQABgLAHgNQAFgMABgOIADgbQACgPgFgMIgBgFQASgcASAfQAMATgGAUQASgLADAUIACAKQAGgcAZALQAEACAEAHIAEAKQAVggAEAuIAAAPQAXgdAuACQAIAAABALIABASQASgmASAeQAWgcAiARQANAHAGAKQAchaAXBMQA4gvAGA5QAUgVASgnQAFAVANALQAqhfAJBrQAmgXADA3QAwg1AMAwQAtg0hZADQAigjAggJIALBIQAYgsBYAYQAWAGgIAdQAZgPAYAEIAIAAIAADGIgIAAQgrAGgqAAQgqAAgqgGgAUiCsQgcAAgcgCIg1gEQgZgCgaAAQgbABgagDQgYgDgZgFQgagGgdABQgcABgbAFQgbAGgZAAQgdABgYgHQgagHgbAAQgcAAgbACQAEgPADgHQACgGgGgHQgMgNADgZQAEgbgDgeQAAgFgEgEQgBgHAFgHQARgCgDgWQgCgPACgLIABgJQAVgWATAUQAGAGAAAKQAAgHACgEQAGgOAWAEQAYAEAUAKQAAgYADgWQAYgHABARQAIgRANgSQAtgHADAqQASgiAIAsQABAJAAAKQAEgOAOgCQASAUAMAQQACggATgIQAHgEAJACIANADQAEgiARgVQAcAIAKAXQAogRATghQAXAjgJAhQAOgYAXAJQAFADACAGQAFAQgBAPQAEgTAQAEQALACAAAKQAEguAlASQAOAHASgFIAUACIABAUQABAOgCANQgBAOAEANQAFAOAOABIACAAQgJAJAJAIIgNgBIAJAXQAEANACANQACANgEANQgEANgBAOIgDAbIgCATIgCAIIgBgBQgOgBgNABIg1ABIgCAAgANbghQAFgGABgNIgGgDIAAAWgAPWgxIABgNIgBANgATsg3IABgHIgBAHgAl8CfQhPgIhLgKQhMgJhIgFQhCgEgqgOIgMgFIgBgBIAAgBIgHACIgMABQgLABgMgBQgigDghAEQgiAEgjgDQgigEghAGQgiAGgjAEQggAEgggFQghgGgjABQghABghADIAAAAQhagThogNQhpgMhjAmQhhAlhkgRQhpgShtgFQhygFhbAaIAAieQBBADAigVQAfAKAHAOQAhBBAig6QAThvAtBpQAaAQAnADQAiAZAjgeQgUgFgJggQAzg9AxBFQBHgXgUBAQBDgcABArQAogUAcgYQg4gnBnASQAxAMAcAuQANgiAvANQgNAHAAAIQAAAJAOALQgOgLAAgJQAAgIANgHQAGgDAJgEQAagHAIAZQAHgZAgADQALACAHAJQAEAEABAFIABAFIgBgFQgCgTANgLIAKgGQASgJACAfQAIgeAbgYQATgQAKAZQADAJAAAKQAEgKAGgHQAIgEAEgGQAPgKAKABIAGACQAIADAFAOQAPgJAPAKQAZAGAMAQQgBgZAPAAQATAAAHANQAJgbARgVQAVgcAXAcQADglANgcQAWAOAJAPQAHgyAqAWQAOASAEAPQAPgiAcAgQAPg7AyAdQAGgMALgeQATAMAGARQAcgcAqAJIgBACQAIAQAJAKQAcAhApgiQAVAAAAAUQA2hFArBIQALASAgAFQA8AJATgUIAAgDQAYgRAbAIQAGACAAAJIgEATQAEgJAEgGQAMgPAXARQACAKgBAIQgHAJgCARQAIgKABgQQALgNAXADQAiAEgIAaQAOglAxAIQAKAdgJAQQAYglAlAYQAJAFgEAPQgJAggTAaIgKAMIAKgMQAXgXAaAHQAFABACAIQACAKgBAIQgBALgGAJQAGgJABgLQALgOAYAFQAGABADAGQAJAVAFAUQgFgiAVgMQAHgEAJADQAiAMAEAkQANgsAiAFQALABAGAIQAEAGABAJQAZhEBDAkQAaAPAFAnQAGgnAhAAQAMAAAHAFQAZAQAHgjQADgRAMgPIAMAOQAMgjAcAIQAMAEAJAJQAfgjAggIQAFAQAAALQAYgtA0ARQAJADABAKQACAJgEAFQAigEATgXQAEgFAHgBQACAXgKAPQgKARAFAIIAQAWIgBAAQgMADAEADQAJAYAEAbQADAZACAcQACATgDARIAAAAIgEgBIgTAEQggAEgjgBIhFgDQgigCghABIhFACQghAAgfgDQghgDgigBIhDAAIhHAAIhHAAIhFgBIhEAAQgVABgUgCIgdgCIgBAAIABAAIAFACQgngCgiAHQgyAKgxAAQgYAAgYgCg");
	this.shape_280.setTransform(60.4,151.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AGMA+IgDgDQgGgJgJgIIgPgNIgFgEIgJgIIAJAIIAFAEQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAgBIgQAVIgEAFQgIAIgLgCQgFAAABgFIACgFIAAgBQAEgIAJgIQAKgIAIgLIgIgFIgEgDQgPgJATgHQAAAAABAAQAAAAAAABQABAAABAAQAAAAABABIARANIACACIALAKIgLgKIgCgCIASgOQAFgDAEgBIAFAAQAIAPgPAKIgCABQgGADgEABIAIAIIASAUQAFAHgBAGQgBAEgCACIgBAAQgCAAgDgFgAFrAdIAAAAgAmUgMQgBAAAJgGIAIgFIAMgHIAJgHIAIgFIAWgPIANgJQACACAAAGQACARgMAEIgEACIgJADIgLADIgKAEQgGAEgGAFIgMANQgFADgDAAQgGAAAAgMgAlYgLIgWgOIAKgEIALgDIAJAFIACAVIgKgFgAmCggIgEgBQgFgCgBgDIAAgBQgDgOAMADIAEABIAYAHIgIAFIgJAHIgKgCg");
	this.shape_281.setTransform(165.3,112.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#996633").s().p("AFWGmQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgGAEgIIACgFIACgHIACgUIACgbQABgOAFgNQAEgNgCgNQgCgNgFgNIgJgXIAOABIAMACQAOADAOABIAHAAIAHAAQgBANgDAMQgFATABATIAAAoIAAAMIABAXQABAHACAFIACAEQADAHgGAFQgFAEgJgCIAAgGQgDADgEABQgGACgFgCQgFgCgFgHIgDAGQgDALgIAAQgEAAgFgDgAF5EuIgBgbIABAbgAGBEpIgCgJIACAJgAl5GLIAEgQIAAAAQACgRgBgTQgDgcgDgZQgEgbgIgYQgEgDAMgDIABAAQAbgGAUAKIADADQAEADABAFQACAegDAbQgDAZALANQAHAHgDAGQgDAHgEAPQAFAPgFAPQgFAAgKgHQgEACgEAAQgJAAgDAEQgNAOgPAEIAIgegAlqEbQgFgIAAgKIAAgCIAAACQAAAKAFAIgAlgEXQgFgBgBgDQABADAFABgAGADlQgNgCgNAAIgCAAQgPgBgEgOQgEgNABgOQABgNgBgOIgBgUIAAgHIgBgbIAAgbIAAgcQAAgLgCgFIAGAAIAUAAIAbAAQAMAAAIAEQABARACANIAEAbIAEAbIAFAUIABAFQAEAMgBAPIgDAbQgCAOgFAMQgLAEgKAAIgIgBgAFuB4IAAAAIAAAAQgBgBAAgEIAAgEIAAgBIAAgEQAAgLgEgKQgEgNAAgOIAAAAIAAAAQAAAOAEANQAEAKAAALIAAAEIAAABIAAAEQAAAEABABIAAAAIAAAAgAF7BfIADALIgDgLIgFgZIAFAZgAFWAvQgGgFAAgHIAAgCIAAACQAAAHAGAFgAlbDdQgagIgYgDQgGgIALgRQAKgPgCgXQAAgdgFgVQgGgXgDgbQgCgTADgZQACgTgIgFIAMAAIATgDQAYgFAcABIAGAAQAIAVgGAWQgHAZABAcQACAcAEAYQADAVgDAYIgBAJQgCAMACAOQADAWgRACIgDAAQgHAAgKgDgAlqC8QgJgQgBgVQABAVAJAQgAlTCzIgDgJIADAJgAleCxQgEAAgBgNQABANAEAAgAlxBBQgFgWgBgZQABAZAFAWgAlbBAIAAgIQAAgWgBgVQABAVAAAWIAAAIgAGLAOIgBAAIgbgBIgSAAIgHAAQgMgBACgIQAEgMAAgOIAAgaIAAgcQgBgPACgNIABAAIAEAAIABAAIAAAAIARACIADAAQANACAPgCIADADQAEAHACgCIAEARQAEANACANQACAOAAAOQAAANgCAMIgCAHQgDAFgHAAIgDAAgAFvg3IAAASIAAgSIABgaIgBAagAlEgsQgGAAgFgCQgUgGgUACIggADIgJABQALgMAFgTQAEgSADgVIABgTIABgRIAAgEIgBgJIAMgNQAFgFAHgEIAWAOIAKAFIgCgVIAAgEIAAgEIAAAEIAAAEIgJgFIAJgDIAbAGIAZAGQANACAOABIAaADQANABANAAIAbAAIAcAAIAcAAIAcABIAbADQANACAOAAIAbAAIAZgCQAPgBAMAAQAJABAIADQgGAGgEAGIgBABQgCAFAAAHQAAAJADAIQACAFADADIACADQABAEgBAFQgCACgDABQgEABgIgDQgLgDgMAAIgZABIgZABQgOAAgMgBIgbgDIgZgEIgbgEIgagDIgbgDIgagEIgagCQgPAAgOABIgaADIgbADIACANQADATAIATQADAKABAKQABAMgCgCIgIABIgBAAgAl1hiQAAAPgFAGQAFgGAAgPIAAgHQAAgRgCgQQACAQAAARIAAAHgAlchVIgHgZIAHAZgAlOiaIADAcIgDgcIgCgOIACAOgAkliVIAYADIgYgDIgYgDIAYADgAkpioIAbAEIAJACIgJgCIgbgEIgBAAIgJgBIgBAAIgHgBIgBAAIAAAAIgBAAIgCAAIACAAIABAAIAAAAIABAAIAHABIABAAIAJABIABAAgAHEhZQgOgDgNgCQgNgCgMACQACgCABgEQABgGgFgHIgSgUIgIgIQAEgBAGgDQANgCANABIAbAEQANABAPAAIAFABIAEAAQgMAHgHAMQgHAMAIAMQAEAIAGADIgNgDgAFrhmIgDAAIgRgCIAAAAIgBAAIgEAAIgBAAIAAAAIADgFIARgVQAAABABAAQAAgBABAAQAAAAABgBQAAAAAAgBIAQANQAJAIAGAJIgOABIgOgBgAGHhmIAAAAgAE5htIgcgCIgbgCIgbgCQgOgBgNAAIgcABIgZAAIgbgBIgZAAIgWAAIgDgFIAAgCIgJgXQgFgPAMgJIAAAAIAZAFQANADANABIAcABIAbABIAbAAQAPAAAOACIAZADIAcAEQAOACANAAIAOAAIAFgBIAGAAIAIAFQgIALgKAIQgJAIgEAIIgDAAgAB+iFIADAAIADAAIAJAAIgJAAIgDAAIgDAAIAAAAIgBAAIgRgBIgBAAIABAAIARABIABAAIAAAAgAC8iKIAQACIgQgCIgCgBIgLgBIgBAAIgKAAIgBAAIAAAAIAAAAIABAAIAKAAIABAAIALABIACABgACBiMIAIAAIAHAAIgHAAIgIAAIgBAAIAAAAIgMAAIgEgBQgOgBgOgEQAOAEAOABIAEABIAMAAIAAAAIABAAgAnGiGQAFgFABgJQACgNgBgOQgBgNgHgMIgIgMIgDgDIgFgFIAaAKIAYAIQAMAEALgDIAAABQABADAFACIACAKIgCgKIAEABIAJACIgLAHIgIAFQgJAGABAAQAAASAOgJIABAJIAAAEIgBARIgGAAQgPgBgNACIgPABIgNgBgAFXinQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgCgEAAgGQgBgNACgOQACgOADgNQAEgNgBgPIgDgaIgBgcQgBgOgDgNIgHgbIgGgaQAEAKAJADQANAGANgFQANgEAKgIQAFgDADgFIgBAbIgCAaIgDAbIgDAZQgCAOAAAOIABAbIABAbIAAAcIABAKIAAABIAAADQgEABgGADIgRAPIgRgOgAmBjTIgEgBIAAgWQAAgPgCgNIgEgbQgBgNABgNQACgOgDgNQgCgOgIgLQgHgLgEgMQAEAGAJgCQANgEAMgGIAXgNQALgGAEgJIgBAaIgBAaQAAAOgDANQgDAOACANQABAKgBAKQgCANAFAMQAFANgEAOQgEAPAHAMIgVAPIgYgHgAlvjtIACAPIgCgPIgEgbIAEAbg");
	this.shape_282.setTransform(165.5,128.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#993333").s().p("AVIGgQgOgBgOgDIgMgCQgJgHAJgLQANAAANACQANACAQgFQgHAOgBALIgCAAIgFAAgAJqGSQgTgKgbAGIgQgXQAXADAbAIQAMAEAIgBQgEAIAAAIIgEgDgA2rFkIACgJIACgDQAZgQAXgSQAZgTARgaQAHgMAHgEIgBgFQgIgfgEgjQgDgbgFgYQgFgegCggIgDhFQgBgkACggQACgjAIgeQAIgcAMgZQAMAQAMAVIgDAFIAAABQgKATgFAgQgEAWgCAZQgBAiAEAhIACAYQAAAMACAKQADAjAEAdIAJA+IAFAaQAFATAGAPIAIATIgIgTQgGgPgFgTQATgSAQgaQASgbANgYQAOgbASgSQAVgTAOgaQANgXATgVIAlgrQAOgRAUgfQATgeAKggQAIgcALgcQAMgeADgjQABgMAEgOQAKggAFghQACgSAAgTIAKABIAPAGIAGACQAAAQgCARIgIA+IgJBDQgFAjgOAbQgNAcgKAdQgLAhgTAUQgUAUgMAcQgMAagRAdQgQAZgTAYQgVAagZAYQgUAUgQAXIgjAxQgSAagLAVIANAlQAGARAJANQgOgKgPAJQgFgOgJgDIgGgCQgFgDgEgJIgCgDQgJgZgGgbQAGAbAJAZIACADQgGAKgJALIgBABQgHADgFAGQgGAHgDAKQgBgJgDgJQgKgagTAQQgaAYgIAeQgDgegSAIgA0uEwIAAAAgAU4DGIgbAAIgTAAQABgJAMgLIASAAIAbABIABAAQAEAIAEAPQgIgEgNAAgAIiB1IAggDQATgCAUAGQAGACAGAAIAEAQQgcgBgYAFIgTADQgKgIgGgSgAWKBOQgFgDgEgIQgIgMAHgMQAHgMALgHIgDAAQADgNAPAOQAKAKABAOQAAAPgJAKQgFAGgIABIgCAAQgFAAgFgDgAPsAuIgBgDQgEgDgBgFQgEgIABgJQAAgHACgFIABgBQAOgQAOAGIAAAAQgMAIAFAPIAJAXQgGAGgJAAIgJgBgAHkAhQgEgNgBgNQgBgNAFgNQAFgMgBgPIACgBIAJAMQAGAMACANQABAMgCAOQgCAJgEAFQgDADgEACIgEABQgBAAAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBgAUMjZQgJgDgEgKIgEgKQAHgIALgEQANgGAMgDQALgDALAAIAGAAQAMADgCALQgCAIgFAGQgDAFgFADQgLAIgMAEQgGACgGAAQgHAAgHgDgAIXjhQgJgEAAgHIABgEIACgEQAEABAEgDQAJgHALgDIAagHQAOgEANACQAEABgCAFQgEAJgLAGIgYANQgLAGgNAEIgFABQgFAAgEgFg");
	this.shape_283.setTransform(70.1,112.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273}]}).wait(381));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.6,-25.4,471.9,279);


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
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// dot_disabled
	this.instance_1 = new lib.frb_dot_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// background pressed/disabled
	this.instance_2 = new lib.frb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// background up/static
	this.instance_4 = new lib.frb_background_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// radio button frame
	this.frb_frame_mc = new lib.frb_frame();
	this.frb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


// stage content:
(lib.com_scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1repeat:356});

	// timeline functions:
	this.frame_368 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(368).call(this.frame_368).wait(1));

	// Layer 2
	this.instance = new lib.scene1();
	this.instance.parent = this;
	this.instance.setTransform(294.4,135.5,1,1,0,0,0,77.5,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(369));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("EAkaAVfMhIzAAAMAAAgq9MBIzAAAg");
	this.shape.setTransform(277,181.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("EgkZAVfMAAAgq9MBIzAAAMAAAAq9g");
	this.shape_1.setTransform(277,181.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(369));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '48D4845340BCA44189CA4A35E5EEFD6F',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/Cowbell.mp3", id:"Cowbell"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/objectivecomplementsarefound.mp3", id:"objectivecomplementsarefound"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/bgmCom.mp3", id:"bgmCom"},
		{src:"sounds/theobjectivecomplementisred.mp3", id:"theobjectivecomplementisred"},
		{src:"sounds/theobjectivecomplementisthecaptain.mp3", id:"theobjectivecomplementisthecaptain"},
		{src:"sounds/theyelectedbubthecaptain.mp3", id:"theyelectedbubthecaptain"},
		{src:"sounds/theyselectedthecolorred.mp3", id:"theyselectedthecolorred"},
		{src:"sounds/woo.mp3", id:"woo"}
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
an.compositions['48D4845340BCA44189CA4A35E5EEFD6F'] = {
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