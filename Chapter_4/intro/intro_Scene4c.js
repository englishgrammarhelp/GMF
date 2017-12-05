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


(lib.ParticipDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDABQgDgBgCgCg");
	this.shape.setTransform(28.8,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDABQgDgBgCgCg");
	this.shape_1.setTransform(25.3,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDABQgDgBgCgCg");
	this.shape_2.setTransform(21.8,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgCADgBQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAADgCABQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_3.setTransform(16.4,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACADIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_4.setTransform(9.6,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAvQgJgKAAgPQAAgTAJgJQAKgMAPAAQAIAAAEADIAGAFQACgdABgKQAAgGAGAAQAGAAAAAHIgDAqIgBATQAAAWADAMIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgEAAgDgGQgEAEgGABQgFACgFAAQgOAAgKgJgAgPACQgGAGAAAOQAAAIAGAHQAHAGAIAAQAFAAAEgCIAIgGIABgCIAAgLIAAgIIAAgJQgCgFgFgCQgEgDgGABQgLgBgFAHg");
	this.shape_5.setTransform(-2.3,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_6.setTransform(-10,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgCADgBQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAADgCABQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_7.setTransform(-17.6,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAQAhQgJAEgLAAQgIAAgGgEQgHgEgBgJQgCgSAAgNQAAgJACgMQABgGAFAAQADAAACACQACACAAADIgBAKIgBAKIAAATIADANIAFACIADAAQAJAAAKgDIAAgOIAAgMIABgZQABgHAFAAQAEAAACACQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIgBAaIAAAOIAAAOIAAAFIABAFQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgFAAgBgGg");
	this.shape_8.setTransform(-24.4,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgfA0QgDgDAAgCIAAgUIACgbIABgdIABgSQAAgEACAAQAJgEAMAAQALAAALAJQANAJAAAOQAAASgOAJQALAEAFAFQAFAGAAAGQAAAIgJAIQgGAGgHACQgPAGgXABQgDAAgDgEgAgUAbIAAAOQASgBAKgEQAFgCAEgDQAEgEAAgCQAAgDgIgEIgNgFIgGgBIgDABIgDAAIgIgBIAAAPgAgRgoIAAAMIgCAaIALABQAJAAAGgGQAIgGAAgKQAAgHgIgFQgHgFgHAAIgKAAg");
	this.shape_9.setTransform(-36.4,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgiA0QgCgCAAgDIAAgQIgBgRIABgRIABgTIAAgKIgBgLQAAgEACgCQADgEAFAAIARACQAJABAFADQAcAPAAAVQAAAKgJAHQgJAHgKADQAUAMALAMQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAADgCACQgCACgDAAQgCAAgDgCQgWgXgbgHIAAANIAAAOQAAADgBACQgCACgDAAQgDAAgCgCgAgVgeIABAIIgBAOIgCANIADAAIADAAQARAAAIgFIAIgEQADgEAAgDQAAgJgLgJQgJgHgKgBIgKgBg");
	this.shape_10.setTransform(-45.4,11.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_11.setTransform(-54.1,11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgMAyQgIgVgKgmIgFgTQgEgOAAgEQAAgDACgCQACgCADAAQAFAAABAFIADAMIAGAYQAHAYAGASIABgBIARgwIAGgRQAEgKAEgFQACgDADAAQADAAACACQACACAAADIgBAEQgEAGgDAHIgFAPIgSAxIgIARQgBAEgEAAQgFAAgDgFg");
	this.shape_12.setTransform(-62.8,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgaANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_13.setTransform(-75.7,13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_14.setTransform(-83.6,11.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAOACIAAgKIgBgIQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCADAAQAFAAACAKIAAAGIAAAEIAAAFIAJgCIAKABQAEABAAAGQAAADgCABQgCACgDAAIgDAAIgEAAIgJABIABAoIAAACIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_15.setTransform(-91.1,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_16.setTransform(-102.2,11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgOAQABQAOAAAHAMQAGAKgBAOQAAAOgHAMQgJAMgOgBQgLAAgIgIgAgLgNQgFAIAAAIQAAAKAGAGQAEAFAGAAQAGgBAGgFQAFgFABgKQABgagQAAQgJAAgFAKg");
	this.shape_17.setTransform(-109.5,13.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDAoQgCgCAAgDIgCgYIgBgYQAAgHgCgEQgFACgFAFIgIAJIgEAFIAAALIgBAMIABAFIAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgRIAAgNIABgLIgBgLIAAgLQAAgPAHAAQACAAADACQACADAAACIgBAEIAAAEIAAAIQAEgIAHgGQAHgGAEAAQALAAADALQAEgFAFgCQAFgDAHAAQAMAAAEAMIACAUIAFAmQABADgCACQgCABgDAAQgGAAgBgGIgCgVIgDgUQAAgFgCgEQgCgGgDAAQgDAAgHAEQgGAEgCACIAAANIACARIABASQAAADgBACQgCACgDAAQgCAAgCgCg");
	this.shape_18.setTransform(80.6,-8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_19.setTransform(71.9,-8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgOAQAAQAOAAAHANQAGAKgBAOQAAAPgHAKQgJAMgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgagQAAQgJAAgFAKg");
	this.shape_20.setTransform(64.5,-8.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_21.setTransform(57.3,-10);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgtA1QgCgCAAgDIAAgIIABgJIAAgNIAAgNIAAgMIAAgOIgBgNIgBgMQAAgEADgCQADgDADAAQAEAAAFAIQARAaANARQAQATATASIAAgJIAAgIQAAgdgCgSIgCgHIgCgIQAAgIAIAAQAMAAAAAtIgBAVIAAAXIgBALQgBAHgGAAQgEAAgFgFQgcgagjgxIAAAQIgBAOIABARIAAARQAAATgHAAQgEAAgCgDg");
	this.shape_22.setTransform(44.2,-10.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_23.setTransform(31.2,-8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAdQgKgJAAgRQAAgOAIgMQAJgOAQAAQAOAAAHANQAGAKgBAOQAAAPgHAKQgJAMgOABQgLAAgIgJgAgLgNQgFAIAAAIQAAALAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgagQAAQgJAAgFAKg");
	this.shape_24.setTransform(23.8,-8.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHAOQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAEgMIAFgMQABgCADAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAIgJAXQgBADgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_25.setTransform(14.5,-4.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgEAyQgCgCAAgDIAAgDIABgDIgBgKIAAgKIgCgaIgCgcIgGAAQgPAAgIgCQgGgBAAgGQAAgDABgCQADgCADAAIALABIALABIANAAIALAAIAPABIAQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgQAAIgPgBIgFAAIACAfIABAdIABAHIAAAIQABAEgCAEQgCAEgEAAQgCAAgCgCg");
	this.shape_26.setTransform(8,-10.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHAOQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAEgMIAFgMQABgCADAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAIgJAXQgBADgDAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_27.setTransform(-3.1,-4.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgVA3QgHgCgEgDIgBAAQgDAAgCgCQgCgCAAgDIABgVIABgWIgBgXIAAgYQAAgCADgEQADgDADAAIAKAFIANAGQASAGAOAOQAQAQAAATQAAALgGALQgFALgKAGQgKAIgTAAQgFAAgHgCgAgZgSIAAATIgBAlIACABQAGAEAJAAQAOAAAIgFQAGgFAEgHQAEgIAAgIQAAgSgVgOQgGgFgZgLg");
	this.shape_28.setTransform(-10.3,-10.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_29.setTransform(-19.7,-10.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAOQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAEgMIAFgMQABgCADAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAIgJAXQgBADgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_30.setTransform(-30.1,-4.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgiAvQgIgJgBgTQABgSAIgSQAIgSANgMQAJgIAJAAQAGAAAKAEQANAFAAAGQgBADgCACQgCACgCABIgFgCQgKgHgHAAQgFAAgFAGIgIAJQgQAVAAAYQAAAMAEAGQAFAFALAAQALAAAJgIQAKgIAEgPQgUABgMAHIgDAAQgDAAgCgCQgCgCAAgDQAAgEAEgCQANgIAlAAQACAAACACQADABAAADQAAAEgEACQgFAVgNAMQgNANgSAAQgRAAgIgJg");
	this.shape_31.setTransform(-37,-10.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgtA1QgCgCAAgDIAAgIIABgJIAAgNIAAgNIAAgMIAAgOIgBgNIgBgMQAAgEADgCQADgDADAAQAEAAAFAIQARAaANARQAQATATASIAAgJIAAgIQAAgdgCgSIgCgHIgCgIQAAgIAIAAQAMAAAAAtIgBAVIAAAXIgBALQgBAHgGAAQgEAAgFgFQgcgagjgxIAAAQIgBAOIABARIAAARQAAATgHAAQgEAAgCgDg");
	this.shape_32.setTransform(-47.4,-10.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_33.setTransform(-56.9,-10.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_34.setTransform(-68.6,-8.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_35.setTransform(-76.5,-10.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_36.setTransform(-84,-9.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_37.setTransform(-95.1,-8.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_38.setTransform(-102.3,-8.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACADIAAABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_39.setTransform(-109.4,-8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-22.5,207.4,45.1);


(lib.InfinBigDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(130.1,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgpAzQgSgPAAgXQABgbAQgYQATgbAcAAQAcAAANANQANANAAAbQAAAcgPAXQgSAbgcAAQgXgBgQgOgAgdgbQgNASAAAWQAAAQAMAKQAMAJAQAAQAUABANgVQAMgSgBgWQAAgTgJgJQgIgHgUAAQgUAAgOAUg");
	this.shape_1.setTransform(121.3,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgFA9QgCgCAAgEIAAgEIAAgDIAAgNIgBgMIgCggIgCgiIgIABQgSAAgKgDQgHgCAAgGQAAgEADgCQACgDADAAIAOABIANABIAQAAIAOAAIATABIATABQADAAACACQADADAAADQAAAEgDADQgCACgDAAIgTgBIgTgBIgGAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgCAAgDgCg");
	this.shape_2.setTransform(109.4,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdA5QgLgMAAgSQgBgXAMgMQAMgNASAAQAKAAAEADIAIAFQACgjABgMQABgHAHAAQAHAAAAAIQAAAMgDAnIgBAXQAAAcADAOIAAACQAAADgCACQgDADgDAAQgFAAgDgIQgFAFgHACQgGACgHAAQgQAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAJAAQAGAAAGgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape_3.setTransform(92.7,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHAAADAGQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAGQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_4.setTransform(83.9,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAjQgLgMgBgTQAAgRAKgOQALgRAUAAQARgBAIAQQAHAMAAARQgBASgJAMQgLAPgQABQgOAAgKgLgAgOgQQgGAKAAAKQAAANAHAGQAGAFAHAAQAIABAGgHQAHgGAAgNQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_5.setTransform(75,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUAuQgKAAgFgWIgDgTIgCgSIgGAPIgOAiQgBADgCACQgCAFgGAAQgFAAgGgZQgDgNgEgVIgBgMIgBgNQgBgDADgCQACgDAEAAQAGAAACAHIABAMIACANIAEAkQAKgZAKghQACgJAGAAQAHAAACAKIAFAeIAGAfIAGgWIALgsQABgFAGAAQADAAADACQACACAAAEIAAADQgHAcgKAhQgCAHgGAIQgCAFgFAAIAAgBg");
	this.shape_6.setTransform(64.9,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAkQgOgLAAgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgPAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAGgFQgGgHgNAAQgJAAgHAIg");
	this.shape_7.setTransform(49.5,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXA/IgEgTIgBgVIAAgGIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgCQgDgDAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgDQACgCAEAAQAHAAABAHIABAPIgBASIAAASIAAAHQAHgIAIgFQAGgFAJAAQAOABAFAIQAEAHAAAOIABAQIACAQIACASIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_8.setTransform(39.9,13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_9.setTransform(30.8,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVBBQgDgCAAgEQAAgIASgoIgeg4IgDgGQgDgEAAgCQAAgEADgCQADgDADAAQAEAAACADQAOAUAPAkIAMgdIANgZQADgFAEAAQAEAAACACQADADAAADIgBAEIgdA9QgLAXgEAPIgGAQQgCAGgFAAQgEAAgCgCg");
	this.shape_10.setTransform(17.1,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgCAAgDIABgHIAAgHIgBgaIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgDAFABQASAAALANQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAOIAAAOIAAANIALAFQAFABAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_11.setTransform(8,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdA5QgMgMAAgSQABgXAMgMQALgNASAAQAJAAAGADIAHAFQACgjABgMQACgHAGAAQAIAAgBAIQAAAMgDAnIgBAXQAAAcACAOIAAACQAAADgCACQgCADgDAAQgFAAgCgIQgHAFgGACQgHACgFAAQgSAAgLgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAKAAQAGAAAEgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape_12.setTransform(-7.3,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAGgFQgHgHgMAAQgKAAgGAIg");
	this.shape_13.setTransform(-16.8,15.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdA5QgLgMAAgSQgBgXAMgMQAMgNASAAQAKAAAEADIAIAFQACgjABgMQABgHAHAAQAHAAAAAIQAAAMgDAnIgBAXQAAAcADAOIAAACQAAADgCACQgDADgDAAQgFAAgDgIQgFAFgHACQgGACgHAAQgRAAgLgLgAgTABQgHAJAAAQQAAALAIAIQAHAHAKAAQAGAAAGgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgFgCQgFgEgIAAQgNAAgHAHg");
	this.shape_14.setTransform(-26.6,13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAGADAJAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQACACAAADQAAAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgIAIg");
	this.shape_15.setTransform(-36.1,15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAlQgMgLAAgSQAAgQALgSQANgTAOAAQAIgBAKAEQAOAFAAAHQgBADgCADQgCACgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgFgEgMAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAHAGAKAAQAFAAAGgDIAKgFIAEgBQACAAACADQADACAAADQAAAGgNAFQgLAGgIAAQgQAAgLgKg");
	this.shape_16.setTransform(-45.2,15.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAGgFQgHgHgMAAQgKAAgGAIg");
	this.shape_17.setTransform(-54.1,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHAAADAGQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAGQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_18.setTransform(-62.8,15.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfBEQgDgDAAgDIABgiIAAggIgCghIgBgRQAAgGACgEQADgFAFAAQADAAACADQACACAAADIAAADIgBAEQAHgEAHgDQAGgCAGAAQARAAAIAPQAGAMAAATQAAARgKAMQgKANgRAAQgHAAgKgEIAAApQAAADgDADQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAGIABAnQAJADAIABQAKgBAGgHQAFgGAAgLQAAgOgEgIQgEgHgHAAQgHgBgGAEg");
	this.shape_19.setTransform(-71.6,17.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcAkQgMgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_20.setTransform(-85.8,15.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgCAAgDIABgHIAAgHIgBgaIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgDAFABQASAAALANQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAOIAAAOIAAANIALAFQAFABAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_21.setTransform(-95.5,13.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgGAAQgKAAgHALQgIAKgEAPIgBAIIgBAIIABAHIABAIQgBAEgCACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIABgXIAAgIIgBgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_22.setTransform(-110,15.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAbArIgGgGIgOAGQgGACgDAAQgUAAgJgLQgIgLAAgVQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAADgCADQgCACgEAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgGgCIgDgCQgMAAgJALg");
	this.shape_23.setTransform(-119,15.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAlQgMgLAAgSQAAgQALgSQANgTAOAAQAJgBAJAEQANAFABAHQAAADgCADQgDACgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgEgCQgEgEgMAAQgHAAgIAPQgIAOAAAJQAAALAIAGQAGAGALAAQAFAAAFgDIAKgFIADgBQADAAADADQACACAAADQAAAGgNAFQgLAGgHAAQgRAAgLgKg");
	this.shape_24.setTransform(-127.7,15.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_25.setTransform(148.3,-11.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAaAqIgFgGIgOAHQgGACgDAAQgUAAgIgLQgJgLAAgUQAAgUAOgOQAOgOASAAQAHAAAJAEQALAEAAAHIgBAEIgCAKIAAASQAAAKABAGIAGAOIACAFIAAACQAAADgCACQgDACgDAAQgBAAgFgEgAgNgUQgJAKAAANQAAAOAEAGQAFAIAKAAQAHAAAGgEIAIgGQgDgVAAgLIAAgIIACgJIgFgCIgEAAQgLAAgKAKg");
	this.shape_26.setTransform(140,-10);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAXA/IgEgUIgBgTIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAFQgCAGgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgEAJAAQAOgBAFAKQAEAFAAAOIABAQIACASIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_27.setTransform(130.8,-12.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_28.setTransform(121.8,-11.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_29.setTransform(107.8,-12.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_30.setTransform(96.8,-12.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgjBAQgJgHABgbIAAgMIABgOIgBgEIABgEIACgjIgBgJIgBgJQAAgKAIAAQAEAAADADIATgFIAPgBQAUABAMAEQAFADABAFQAAADgCADQgDADgDAAIgDgBQgOgEgNAAIgOABIgSAFIABAIIgBAgIAjgDIAUgDQADAAADADQADACgBAEQAAAGgHABIgUADIglADIAAALIgBAKQAAASADAEQACACALAAIAOAAIAQgBIAFAAIAEgBQAKAAAAAJQAAAHgIABQgHABgaABQgZgBgHgGg");
	this.shape_31.setTransform(86.3,-12.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgOA9QgKgZgNgvIgGgXQgFgRAAgFQAAgEACgDQADgCAEAAQAGAAACAHIADAOIAIAcQAHAfAIAWIABgCIAVg7IAHgUQAFgMAFgHQADgDAEAAQADAAACACQADADAAAEIgCAEQgFAJgDAIIgGASIgXA8IgJAUQgCAFgEAAQgGAAgDgGg");
	this.shape_32.setTransform(75.8,-12);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcAkQgMgLAAgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAIgCQAKgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_33.setTransform(60.1,-10.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAXA/IgEgUIgBgTIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAFQgCAGgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgEAJAAQAOgBAFAKQAEAFAAAOIABAQIACASIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_34.setTransform(50.5,-12.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_35.setTransform(41.5,-11.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgNBGQgCgCAAgDIAAgCQACgKAAgNIAAgXIAAgXIgOABQgIAAAAgIQAAgIAPAAIAHgBIACgNQACgSAHgJQAIgKASAAQAMAAAAAIQAAAIgLAAQgUAAgCAbIAAAGIASgBQANAAAAAIQAAAGgGABIgHABIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgDg");
	this.shape_36.setTransform(27.9,-11.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgRAUAAQARAAAIAPQAHANAAARQgBARgJAOQgLAOgQAAQgOABgKgLgAgOgQQgGAKAAALQAAAMAHAGQAGAGAHAAQAIgBAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_37.setTransform(19.1,-10);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgEAxQgCgDAAgDIgCgeIgCgdQAAgIgDgFQgGACgGAGIgJALIgFAFIgBAOIAAAOIAAAHIABAHQAAADgCADQgDACgDAAQgKAAAAgVIABgPIABgOIgBgNIAAgOQAAgSAIAAQADAAADACQADADAAAEIgBAEIAAAGIAAAIQAEgJAJgHQAIgHAGAAQANAAAEANQAEgGAHgDQAGgDAIAAQAOAAAFAPIAEAXIAGAvQAAADgDACQgCADgEAAQgHAAgBgIIgDgZIgDgZIgCgLQgDgIgEAAQgDAAgIAGQgIAEgCADIAAAQIACAVQACANAAAJQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_38.setTransform(3.2,-10);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfAmIAAg5IAAgIIAAgIQAAgJAIAAQAIAAAAAOQAPgPATAAQAHAAADAEQADAGAAAKIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFAKIAAAtQAAAIgIAAQgHAAAAgIg");
	this.shape_39.setTransform(-7.3,-10);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgRAUAAQARAAAIAPQAHANAAARQgBARgJAOQgLAOgQAAQgOABgKgLgAgOgQQgGAKAAALQAAAMAHAGQAGAGAHAAQAIgBAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_40.setTransform(-16.3,-10);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgNBGQgCgCAAgDIAAgCQACgKAAgNIgBgXIAAgXIgMABQgJAAAAgIQAAgIAPAAIAHgBIACgNQACgSAHgJQAIgKASAAQAMAAAAAIQAAAIgLAAQgUAAgCAbIAAAGIASgBQANAAAAAIQAAAGgGABIgHABIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgDg");
	this.shape_41.setTransform(-25.1,-11.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_42.setTransform(-39.3,-12.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgkA9QgCgDAAgDQAAgDACgDQADgDAEAAIARgCIABgPIAAgNIgBgPQAAgRACgeIgKABIgLAAQgEAAgDgCQgCgDAAgEQAAgHAIgBIAZgBQAPABAZADQAIABAAAIQAAAEgDACQgCACgDAAIgOgBIgNgCIgCAtIAAAPIABAOIgBAOIAaAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAIgOABIgOAAIgPABIgQABQgEABgDgDg");
	this.shape_43.setTransform(-49.2,-12);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AggA6QgQgHAAgNQAAgDACgDQADgCADAAQAEAAADAFQAFAGADACQAHAFANAAQAMAAALgGQAOgHAAgMQAAgLgLgGQgKgFgOgBQgNAAgKgEQgLgHAAgNQAAgOAQgMQAQgMARAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgCIgNgBQgMAAgJAGQgJAGAAAKQAAAGAMADIARACQATACALAKQAJAJAAAOQAAATgSAMQgQAKgUAAQgPAAgMgFg");
	this.shape_44.setTransform(-59.7,-11.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAdArIgGgaIgVAEIgWAFIgOAfQgCAFgFAAQgDAAgDgDQgDgCABgDQAAgFAMgaQgBgCgBgDQAAgGAIgCQAKgRAPgXQASggAFABQAGgBADAKIAFAcIAMA4IAGANIABAJQABADgDADQgDADgDAAQgHgBgGgTgAgKAGIAegGIgHggg");
	this.shape_45.setTransform(-72,-11.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_46.setTransform(-83,-12.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgcAkQgMgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_47.setTransform(-98.4,-10.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAXA/IgEgUIgBgTIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAFQgCAGgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgEAJAAQAOgBAFAKQAEAFAAAOIABAQIACASIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_48.setTransform(-108,-12.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_49.setTransform(-117,-11.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAGADAJAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQACACAAADQAAAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgIAIg");
	this.shape_50.setTransform(-130.6,-10.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgfAmIAAg5IAAgIIAAgIQAAgJAIAAQAIAAAAAOQAPgPATAAQAHAAADAEQADAGAAAKIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFAKIAAAtQAAAIgIAAQgHAAAAgIg");
	this.shape_51.setTransform(-139.2,-10);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAaAqIgFgGIgOAHQgGACgDAAQgUAAgIgLQgJgLAAgUQAAgUAOgOQAOgOASAAQAIAAAIAEQALAEAAAHIgBAEIgBAKIgBASQAAAKACAGIAEAOIADAFIAAACQAAADgCACQgCACgDAAQgCAAgFgEgAgNgUQgKAKABANQAAAOAEAGQAFAIAKAAQAHAAAFgEIAJgGQgDgVAAgLIABgIIABgJIgGgCIgDAAQgLAAgKAKg");
	this.shape_52.setTransform(-147.9,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.9,-26.7,313.8,53.4);


(lib.GerundDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape.setTransform(53.8,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgtA1QgCgCAAgDIAAgIIABgJIAAgNIAAgNIAAgMIAAgOIgBgNIgBgMQAAgEADgCQADgDADAAQAEAAAFAIQARAaANARQAQATATASIAAgJIAAgIQAAgdgCgSIgCgHIgCgIQAAgIAIAAQAMAAAAAtIgBAVIAAAXIgBALQgBAHgGAAQgEAAgFgFQgcgagjgxIAAAQIgBAOIABARIAAARQAAATgHAAQgEAAgCgDg");
	this.shape_1.setTransform(46.5,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgdAoQgJgKgCgTIgBgiIAAgPIABgJQACgEAFAAQAGAAAAALIAAAoQAAApAcgBQAbAAAAhEIAAgGIAAgGQAAgEACgEQACgDADAAQAHgBAAAKIAAAIIAAAJQAABOgpAAQgUAAgKgNg");
	this.shape_2.setTransform(35.8,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgiAqQgOgMAAgTQAAgXAOgTQAQgWAWAAQAWAAALAKQAMALAAAXQAAAWgNATQgPAWgWAAQgTAAgOgMgAgYgWQgKAPAAASQAAANAKAIQAJAIAOAAQAPAAALgRQAKgPAAgRQAAgRgHgGQgIgHgQAAQgQAAgMARg");
	this.shape_3.setTransform(25.1,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgtA1QgCgCAAgDIAAgIIABgJIAAgNIAAgNIAAgMIAAgOIgBgNIgBgMQAAgEADgCQADgDADAAQAEAAAFAIQARAaANARQAQATATASIAAgJIAAgIQAAgdgCgSIgCgHIgCgIQAAgIAIAAQAMAAAAAtIgBAVIAAAXIgBALQgBAHgGAAQgEAAgFgFQgcgagjgxIAAAQIgBAOIABARIAAARQAAATgHAAQgEAAgCgDg");
	this.shape_4.setTransform(13.9,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACADIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_5.setTransform(0.5,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgCADgBQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgHQAAgPANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_6.setTransform(-10.9,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACADIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_7.setTransform(-17.7,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAvQgKgKAAgPQAAgTAKgJQAKgMAOAAQAIAAAEADIAHAFQAAgdACgKQABgGAFAAQAGAAAAAHIgDAqIgBATQABAWACAMIAAACQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgBgGQgFAEgGABQgFACgFAAQgOAAgJgJgAgPACQgGAGAAAOQAAAIAHAHQAFAGAJAAQAFAAAEgCIAHgGIADgCIgBgLIAAgIIABgJQgEgFgDgCQgFgDgGABQgKgBgGAHg");
	this.shape_8.setTransform(-29.6,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_9.setTransform(-37.3,23.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgCACgCQACgCADgBQACAAAEAEQABABAGABIAIABQAEABAFgCQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgHQAAgPANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDAAQgEAAgBgCIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_10.setTransform(-44.9,23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAhQgIAEgLAAQgJAAgFgEQgHgEgBgJQgCgSgBgNQAAgJACgMQACgGAFAAQADAAACACQACACAAADIgBAKIgBAKIABATIACANIAFACIADAAQAJAAAKgDIAAgOIAAgMIABgZQABgHAFAAQADAAADACQAAABAAAAQABABAAAAQAAABAAABQABAAAAABIgBAaIAAAOIAAAOIAAAFIAAAFQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgFAAgCgGg");
	this.shape_11.setTransform(-51.7,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgfA1QgDgDAAgDIAAgUIACgbIABgcIABgTQAAgEACgBQAJgCAMAAQALAAALAIQANAJAAAOQAAARgOAKQALAEAFAGQAFAFAAAGQAAAJgJAHQgGAGgHADQgPAFgXAAQgDAAgDgCgAgUAbIAAAPQASgBAKgFQAFgCAEgEQAEgDAAgCQAAgDgIgEIgNgEIgGgCIgDAAIgDAAIgIgBIAAAQgAgRgoIAAAMIgCAbIALAAQAJgBAGgFQAIgGAAgKQAAgHgIgFQgHgGgHAAIgKABg");
	this.shape_12.setTransform(96.8,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgiA0QgCgCAAgDIgBgQIAAgRIACgRIABgTIgBgKIAAgLQAAgEACgCQACgEAFAAIAQACQAJABAGADQAcAPAAAVQAAAKgKAHQgHAHgMADQAWAMAKAMQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAADgCACQgCACgDAAQgDAAgCgCQgXgXgagHIABANIAAAOQgBADgBACQgCACgDAAQgDAAgCgCgAgVgeIAAAIIgBAOIgBANIADAAIADAAQARAAAJgFIAGgEQAEgEAAgDQAAgJgLgJQgJgHgLgBIgKgBg");
	this.shape_13.setTransform(87.9,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_14.setTransform(79.1,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgMAyQgIgVgKgmIgFgTQgEgOAAgEQAAgDACgCQACgCADAAQAFAAABAFIADAMIAGAYQAHAYAGASIABgBIARgwIAGgRQAEgKAEgFQACgDADAAQADAAACACQACACAAADIgBAEQgEAGgDAHIgFAPIgSAxIgIARQgBAEgEAAQgFAAgDgFg");
	this.shape_15.setTransform(70.4,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgYANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgMAGQgKAEgLAAQgOAAgKgHgAgOgRQgFAGgDAMIAWgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_16.setTransform(57.6,2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_17.setTransform(49.6,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_18.setTransform(42.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_19.setTransform(31,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAdQgKgJAAgQQAAgPAIgLQAJgPAQAAQAOAAAHANQAGAKgBAOQAAAPgHAKQgJAMgOABQgLAAgIgJgAgLgNQgFAIAAAJQAAAKAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgagQABQgJAAgFAJg");
	this.shape_20.setTransform(23.8,2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgDAoQgCgCAAgDIgCgYIgBgYQAAgHgCgEQgFACgFAFIgIAJIgEAFIAAALIgBAMIABAFIAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgRIAAgNIABgLIgBgLIAAgLQAAgPAHAAQACAAADACQACADAAACIgBAEIAAAEIAAAIQAEgIAHgGQAHgGAEAAQALAAADALQAEgFAFgCQAFgDAHAAQAMAAAEAMIACAUIAFAmQABADgCACQgCABgDAAQgGAAgBgGIgCgVIgDgUQAAgFgCgEQgCgGgDAAQgDAAgHAEQgGAEgCACIAAANIACARIABASQAAADgBACQgCACgDAAQgCAAgCgCg");
	this.shape_21.setTransform(10.7,2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_22.setTransform(2,2.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAdQgKgJAAgQQAAgPAIgLQAJgPAQAAQAOAAAHANQAGAKgBAOQAAAPgHAKQgJAMgOABQgLAAgIgJgAgLgNQgFAIAAAJQAAAKAGAFQAEAFAGgBQAGAAAGgEQAFgGABgKQABgagQABQgJAAgFAJg");
	this.shape_23.setTransform(-5.4,2.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_24.setTransform(-12.6,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgiAvQgIgJgBgTQABgSAIgSQAIgSANgMQAJgIAJAAQAGAAAKAEQANAFAAAGQgBADgCACQgCACgCABIgFgCQgKgHgHAAQgFAAgFAGIgIAJQgQAVAAAYQAAAMAEAGQAFAFALAAQALAAAJgIQAKgIAEgPQgUABgMAHIgDAAQgDAAgCgCQgCgCAAgDQAAgEAEgCQANgIAlAAQACAAACACQADABAAADQAAAEgEACQgFAVgNAMQgNANgSAAQgRAAgIgJg");
	this.shape_25.setTransform(-24.9,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AgtA1QgCgCAAgDIAAgIIABgJIAAgNIAAgNIAAgMIAAgOIgBgNIgBgMQAAgEADgCQADgDADAAQAEAAAFAIQARAaANARQAQATATASIAAgJIAAgIQAAgdgCgSIgCgHIgCgIQAAgIAIAAQAMAAAAAtIgBAVIAAAXIgBALQgBAHgGAAQgEAAgFgFQgcgagjgxIAAAQIgBAOIABARIAAARQAAATgHAAQgEAAgCgDg");
	this.shape_26.setTransform(-35.2,0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_27.setTransform(-44.7,0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_28.setTransform(-56.4,2.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_29.setTransform(-64.4,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIABgHIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAOABIAAgJIgBgJQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgDgBIgEAAIgJABIABAnIAAAEIAAADQABAPgIAAQgCAAgCgCg");
	this.shape_30.setTransform(-71.8,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQADAFAGADQAGADAGAAQAFAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_31.setTransform(-83,2.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_32.setTransform(-90.1,2.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWAjIgFgFIgLAGIgIABQgQAAgHgJQgHgIAAgSQAAgQAMgLQALgMAPAAQAGAAAHADQAJAEAAAGIgBACIgBAJIAAAPQgBAIACAFIAEAMIACAEIAAAAQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAJAAAKQAAALAEAGQAEAFAIAAQAFAAAFgCIAHgFQgDgSAAgIIABgHIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_33.setTransform(-97.3,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.1,-11.7,210.2,45.1);


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


(lib.VERBAL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,28.9,0.2,-28.8).s().p("Ai6D/QgOgNAAgUIAAhMIAChNIAAkTQAAgWANgSQASgYAeADIBWAGQAvAGAhARQCSBKAABsQAAAtgeAiQggAig8AXQBaAzAuA1QAMANAAARQAAATgPAOQgOAOgTAAQgTAAgPgPQhohhh7glIADBuQAAAUgNANQgNAOgVAAQgUAAgOgOgAhpAKIAPAAQBTAAAngUQASgJAPgOQAOgPAAgIQAAgmgxgkQgtghgzgFIgngDg");
	this.shape.setTransform(-9.6,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3399","#CC33FF"],[0,1],0,29.5,0,-29.5).s().p("AieEFQgmghAAhvQAAgtAHhbQAGhcABgtQgBgMgDgYQgDgXgBgMQABg0AvAAQAQAAAMAIQAogJAkgFQAjgFAfAAQBWAAA0ATQAfAMAAAgQAAASgMANQgOAQgVAAQgHAAgIgCQg2gPg1AAQgaAAgcAEQgdAEgiAIQAAAugDBZQATgBBygLQBCgHAQAAQAVAAAPANQANANAAAVQAAAogrAFIhRAHQgwAGhiAHQgCAsAAAaQAABDAIAKQADAEAoAAIA/gBIBAgBIAUgCQANgCAGAAQAVAAANALQAQANABAXQgBAmgoAIQghAGhrAAQhwAAghgeg");
	this.shape_1.setTransform(-53.7,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,29,0.2,-29).s().p("AhLDyQgphjgzi7IgchcQgThAAAgZQAAgUAOgOQAPgLATgBQAhAAANAjIAOA6IAgBwQAbBgAZBLQAziBAchNIAdhRQAVgxAXgaQAPgSAVAAQAUAAAPAOQAOANAAAUQAAAOgJANQgSAbgPAlIgZBDIhcDtQgQApgXApQgOAbgbAAQgkAAgPgig");
	this.shape_2.setTransform(-99.8,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,27,0.2,-26.9).s().p("Ai2DOIAHhtQAJiTAAi1QAAgUAOgOQANgOAUAAQAVAAAOAOQAOAOAAAUQAAC1gKCZQgDAbgEA4QBSgBB9gmQAIgDAIAAQAVAAAOAQQAMAOgBASQAAAdgdANQgoAThVANQhMANgyAAQhTAAgBhJg");
	this.shape_3.setTransform(127.6,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF3399","#CC33FF"],[0,1],0,27.7,0,-27.7).s().p("ACuECQgbgCgbg+QgTgogNg1QgZAEg6ADQg1AEgcAFQgQAmgnBMQgPAYgbAAQgSAAgQgNQgOgNAAgTQAAgSAxhlQgEgKABgJQABgRAfgJQAxhTA7haQBViCAUAAQAlAAANAuIAVBtQAWBjAeB9QACAKAPAkQAMAdAAAPQABAUgQANQgOANgSAAIgBAAgAgaAgQAPgEAggCIAwgEIgWhyIhJB8g");
	this.shape_4.setTransform(81.4,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.4,29.9,0.4,-29.9).s().p("AioEEQgQgSAAgTIAAlpIgCgvQgBgaADgSQAEggA3gHQAagIA9AAQA/AAA7AqQBGAxAABIQAAAogPAbQgLAWgcAYQAhAQAaAgQAdAkAAAkQAAAugyAoQghAbgkAOQhPAeh5AAQgVAAgQgRgAhbC3QA6gDBEgUQA8gRAAgTQgBgbgmgUQgdgRgagCQgfAAg9gDgAhbi2IAACQQAfAEAPgCQBogIAAhFQAAgYgfgXQgfgXgjAAQgtAAgIABg");
	this.shape_5.setTransform(35.2,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.VERBAL2, new cjs.Rectangle(-121.4,-27.9,267.3,58.3), null);


(lib.Tparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AgUDQQgKgIABgNIABgNIABgMIgBgqIgCgqQgBgogGhJQgHhPgBgjIgbABQhAAAgkgJQgYgGAAgWQAAgMAIgJQAIgKAPABIAuAFQAdAEASAAIA1gBIA0gBQAXAAAsADQAtAEAWAAQAMAAAJAIQAIAIAAANQAAAMgIAIQgJAJgMAAQgVAAgugEQgsgDgWAAIgVAAQABAnAHBYQAHBRgBAtIADAeIACAfQgBATgGAOQgIATgRAAQgLAAgJgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-21.5,39.3,43.2);


(lib.Sparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ah1DEQg2gYgBgrQAAgMAIgHQAJgIAMAAQAPAAAKAQQAPAWAMAHQAZAQAvAAQAsAAAngTQAygYAAgrQAAgkgqgVQgjgSgzgBQgugBghgSQgpgXAAgqQAAgzA7gpQA4goA7AAQAcAAAkAKQAvAMAAATQAAAZgaAAQgMAAgdgGQgdgGgQAAQgtAAgfAWQghAVAAAgQAAAXArAKQAQADAtAEQBDAEAmAkQAiAgAAAvQAABEhAAoQg4AjhIAAQg2AAgsgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-21.5,34.7,43.2);


(lib.Rparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AiUDWQgJgIAAgNIgChCQgCgtAAgWQAAgaAGgyQAGg0AAgaQAAgOgDgdQgDgcAAgOQABgQAIgNQAMgPATACIBHAFQAoAFAaAOQB2A9AABYQAAArgoAgQggAbgxANQBbAwAtA0QAHAJAAAKQAAAMgIAJQgKAJgMAAQgKAAgKgJQhhhdh1ggIAEBvQAAANgIAIQgJAJgNAAQgMAAgIgJgAhdh/QACAVABAOQgBAWgEAiIgGA3IAOABIAMAAQBKAAAlgTQAQgIAOgOQAQgQAAgLQgBgogtgiQgqgfgugFIgsgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-22.2,32.4,44.5);


(lib.Pparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ah7DaQgIgIAAgLIAAhUQAAgpAGhLQAFhSABgjIAAgnQAAgcAEgNQAGgZAWAEQAKgDARgCQAQgBAaAAQA0AAAvAjQAzAoAAA3QAABGg3AoQgwAmhFAAQgHAAgcgEQgCArgBBrQAAALgHAIQgIAIgLAAQgLAAgIgIgAgwirIgRACIgGClIAfADQAwAAAigXQAlgaAAgtQAAgggjgXQgggVglAAIgXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-22.6,26.4,45.2);


(lib.Lparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ah+DfQgRgMAAggIAGheQAIiBAAieQgBgLAJgJQAIgJANAAQAMAAAIAJQAJAJgBALQABCggJCDIgDArQgDAXABASQBMABBzgkIAKgBQAMAAAJAJQAHAKAAALQAAASgTAIQggAQhHALQhAAMgpAAQgegBgNgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-23.1,28.8,46.3);


(lib.Iparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ah/DQQgJgIAAgMQAAgMAJgJQAHgIAMAAQAUAAArgHQADgWAAgeQAAgTgCgdQgBgbgBgUQAAhBAJhhIhMACQgNAAgIgJQgJgIAAgMQABgbAbgDQAYgCBAAAQA5ABBYAMQAaADgBAbQAAANgJAIQgJAGgLABQgTgBgcgDIgvgGQgHBTAABJIABAyIACAwQAAAbgCAWIBbgBQAMgBAJAJQAIAJAAAMQAAAMgIAIQgJAJgMAAIgxAAIgxABQgSAAgmAGQgnAEgUAAQgMAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-21.6,28.7,43.3);


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


(lib.Gerundsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AgxA8QgLgIAAgMQgBgGAEgDQAEgEAFAAQAJAAAEAIQAFAMATAAQAPAAAPgHQAPgHAAgJQAAgMgKgDQgGgDgUAAQgQgBgNgFQgRgHAAgPQABgSASgPQAUgPAWAAQAJAAANAEQAQAGAAAGQAAAFgCAEQgEAEgGAAIgNgCIgNgCQgMAAgKAGQgLAGAAAHQAAADADACQADADAIABIAWABQAUABANAKQAMALAAATQAAAYgbANQgUAJgaAAQgYAAgNgLg");
	this.shape.setTransform(40.1,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AgdBLQgKgCgHgEQgFAAgEgEQgDgEAAgFIAAgcIABgcIAAgdIgBgfQAAgFAGgGQAFgFAFAAQADAAAMAGIARAIQAbAJATASQAXAWAAAaQAAAQgIAOQgIAPgNAJQgQAKgbAAQgGAAgKgCgAggAvQAEADAFABIAKABQATAAAIgGQAJgFAFgJQAEgJAAgKQABgWgbgRQgIgFgegNg");
	this.shape_1.setTransform(27,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AhBBHQgDgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIAAgOIgBg9IgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgBAPQgCAMgMAAQgHAAgHgHQgkgggsg6IgBAdIABAWIAAAWQAAAcgOAAQgHAAgEgFg");
	this.shape_2.setTransform(12.1,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033FF").s().p("AglBAQgYgTAAguIABgNIAAgOIABgKIAAgLQAAgHACgHQAEgIAGAAQAFAAAEADQAEADABAGIAAAQIAAAPIgBAOIgBANQABANADAMQADAOAIAGQAEADAOAAQAYABAJgrQAEgUAAgoQAAgFADgFQAEgGAIAAQAHAAACAEQADAEAAAEQAAAlgDAUQgFAfgQAVQgGAJgKAGQgMAHgMAAQgXAAgMgIg");
	this.shape_3.setTransform(-2.8,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033FF").s().p("AgyBFQgEgDABgGIAAgUIAAgVIAAhKQAAgGADgFQAFgGAJAAIAXACQANACAIAEQAnAUAAAeQABAMgJAIQgIAJgRAHQAZAOAMAOQAEAEAAAEQAAAFgFAEQgDAEgGAAQgEAAgFgEQgcgaghgLIACAeQAAAGgEADQgEAEgGAAQgFAAgEgEgAgcADIAEAAQAXAAAKgFQAFgCAEgEQADgEAAgCQABgLgNgJQgMgJgOgCIgLgBg");
	this.shape_4.setTransform(-15.5,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033FF").s().p("AgqBHQgLgJAAgeIACgkIACglIgBgKIgBgKQABgOANAAQAEAAADACIAVgDIARgCQAXAAAOAFQAJAEAAAIQAAAFgDAEQgFAEgFAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAjgEIAXgCQAFAAAEAEQAEADAAAGQAAAKgMABIgWACIgnAEIAAATQgBASADACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAFADQADAEAAAGQAAALgKACQgJABgcAAQgfAAgJgIg");
	this.shape_5.setTransform(-27.5,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033FF").s().p("AgyA/QgMgNAAgaQAAgYAMgYQALgZATgPQANgLANAAQAJAAAQAGQASAIAAAJQAAAFgDAEQgEADgGAAQgDAAgJgEQgJgGgJAAQgHAAgOASQgUAaAAAeQgBAQAFAFQAEAGAOgBQANAAAMgHQALgJAGgQQgWABgPAIIgGABQgGAAgDgFQgEgDAAgFQAAgOAggFQAUgDAZAAQAFAAAEADQAEAEAAAEQAAAHgGAEQgGAcgTAQQgUARgZAAQgYAAgNgNg");
	this.shape_6.setTransform(-39.9,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033FF").s().p("AgkA8QgPgIgDgMQgCgGACgDQACgEAGAAQAJAAAGAIQAKAMASAAQAPAAANgHQANgHgDgJQgEgMgLgDQgHgDgUAAQgQgBgPgFQgUgHgEgPQgGgSAOgPQAPgPAWAAQAKAAANAEQASAGACAGQACAFgCAEQgCAEgGAAIgOgCIgNgCQgMAAgIAGQgJAGACAHQABADAEACQAEADAHABIAXABQAVABAQAKQAQALAHATQAHAYgWANQgSAJgbAAQgWAAgRgLg");
	this.shape_7.setTransform(41.1,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033FF").s().p("AACBLQgLgCgHgEQgGAAgFgEQgEgEgCgFIgJgcIgIgcIgKgdIgLgfQgCgFAEgGQADgFAFAAQADAAAPAGIATAIQAdAJAaASQAeAWAJAaQAFAQgDAOQgDAPgLAJQgMAKgcAAQgHAAgJgCgAgKAvQAFADAFABIAKABQAUAAAGgGQAHgFACgJQACgJgEgKQgHgWgggRQgKgFgigNg");
	this.shape_8.setTransform(26.6,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0033FF").s().p("AgoBHQgEgDgCgGIgDgLIgDgLIgFgQIgFgRIgHgRIgFgRIgHgRIgHgQQgBgGADgEQAEgFAGAAQAGAAAMAMQA9A8A2AlIgFgOQgOgtgHgQIgFgKIgDgKQgFgNAOAAQAPAAAPAvIAFAPIASA5IAEAPQABAMgLAAQgHAAgKgHQguggg/g6IAJAdIAHAWIAIAWQAKAcgOAAQgHAAgGgFg");
	this.shape_9.setTransform(12.2,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033FF").s().p("AgGBAQgfgTgPguIgEgNIgEgOIgDgKIgDgLQgDgHABgHQABgIAHAAQAFAAAFADQAFADACAGIAFAQIAFAPIAEAOIADANQAFANAHAMQAJAOAIAGQAFADAPAAQAYABgFgrQgDgUgNgoQgBgFABgFQADgGAHAAQAHAAAEAEQAEAEABAEQAMAlADAUQAGAfgJAVQgEAJgHAGQgKAHgMAAQgYAAgNgIg");
	this.shape_10.setTransform(-3.4,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0033FF").s().p("AgcBFQgFgDgBgGIgHgUIgGgVIgZhKQgCgGACgFQADgGAJAAIAXACQAOACAKAEQAtAUAKAeQAEAMgFAIQgGAJgOAHQAdAOARAOQAEAEACAEQACAFgDAEQgCAEgGAAQgFAAgFgEQglgagkgLIALAeQABAGgCADQgDAEgFAAQgGAAgFgEgAgcADIAEAAQAXAAAIgFQAEgCADgEQADgEgBgCQgEgLgPgJQgPgJgPgCIgLgBg");
	this.shape_11.setTransform(-15.2,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033FF").s().p("AgQBHQgOgJgKgeIgKgkIgKglIgEgKIgEgKQgFgOANAAQAEAAAEACIATgDIASgCQAWAAAQAFQAKAEADAIQABAFgCAEQgCAEgGAAIgEAAQgQgFgNAAIgPABIgQAEIALAlIAjgEIAVgCQAGAAAFAEQAFADACAGQADAKgLABIgWACIglAEIAFATQAGASAEACQABACAJAAIASgBIARAAIAFAAIAFgBQAGAAAFADQAFAEACAGQAEALgKACQgJABgdAAQgeAAgLgIg");
	this.shape_12.setTransform(-27.5,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0033FF").s().p("AgfA/QgRgNgJgaQgIgYAEgYQAEgZANgPQAJgLAPAAQAJAAARAGQAVAIACAJQACAFgDAEQgCADgGAAQgCAAgLgEQgLgGgIAAQgIAAgIASQgMAaAKAeQAFAQAGAFQAHAGANgBQAOAAAIgHQAJgJAAgQQgVABgNAIQgCABgDAAQgGAAgFgFQgFgDgCgFQgEgOAegFQASgDAaAAQAFAAAFADQAFAEACAEQACAHgEAEQACAcgNAQQgOARgaAAQgYAAgQgNg");
	this.shape_13.setTransform(-39.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},3).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-15.2,97.4,30.5);


(lib.Eparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AiADaQgcgZAAhbIABgoIACguQgDgHAAgHQABgJAFgHQAGhSgBgnQABgLgDgUQgDgUAAgLQAAghAdAAQAMAAAJAIQAjgJAggFQAegEAaAAQBHAAArAQQAUAIAAATQAAAMgIAIQgIAKgNAAIgJgBQgygOguAAQgXAAgcAEQgcAFghAIQADATAAALQAAAngFBFIB/gMQA4gGANAAQANAAAIAIQAJAIAAAOQAAAYgbADIjKASIgCAnIgCAhQAAA/AKALQAHAIAnAAIA2gBIA2gBIARgCIARgCQAfAAAAAdQAAAYgZAFQgbAFhaAAQhbAAgagXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-24.1,31.3,48.3);


(lib.Cparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ah5CuQgogsAAg7QAAhfBShlQBFhUBGAAQAOAAALABIAVAEQAKgOAQAAQAUAAAGAaQAEAXAAAhQAAAMgGAIQgIALgPAAQgSAAgKgVQgIgSgHgEQgGgDgYAAQgqAAgzA/QhGBUAABLQAAAkAYAbQAZAbAjAAQAdAAAegPQARgJAjgYQARgMAIAAQANAAAIAJQAJAJAAALQAAANgLAKQhNBChOAAQg9AAgpgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-21.9,32.5,43.8);


(lib.Beach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("EAhZgArIAAgDIAAncIAAgMIAAvgIAAAAIgMAAMhCZAAAIgMAAIAAAAIAAPpIAAFXIAAatMBCxAAAg");
	this.shape.setTransform(-1.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],-167.2,-47.7,-167.2,-196.2).s().p("AgwBhIAAgkIAYAAQAJAAAggZQAhgYAEAAQAuAAArAZQAjAVAAAJQAAAfgbACQiYACgOAHIgNANQgEgDgQgWgAAfBSIgVAEIAAADQABACARAAIA1gEIAogFIAAgDQgCgCgiAAIg2AFgAA4A4QgYANAAADQAAACAAABQAAABABAAQAAAAAAAAQAAAAAAgBIAEABQAGgGAegKQAdgKAEgHQgCgCgIAAQgPAAgZAPgAAXA6QgUAKAAACQAAABAAABQAAABAAABQAAAAABAAQAAAAAAgBIAFAAQBBgmAAgEIgCgEQgWARgbAOgAiqghQgHgHAAgPQAEgTAAgJIAHgBQAGAAAKACIAAACIgFAGQAAACAAABQAAABAAAAQAAABABgBQAAAAAAAAQADADAEAAIAmgbQAsgbAmAAIATAAQgFAJAgATQAlAVAAAYQgJAeg5AAQgnAAgZgJQgagJgFAAQgcAAgJAcQgWgTgGgGgAhEg6QAAACAAABQAAABAAAAQAAAAAAAAQAAAAABgBIA2AAQAMAAABgFQgBgCgKAAQg5AAAAAEgAiBg9QABACAGAAQAVAAAhgNQAlgNALgQQhGAcgnAMg");
	this.shape_1.setTransform(181.2,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],-215.6,72.6,-215.6,-75.9).s().p("AgDHwIAAvfIAHAAIAAPfIgHAAg");
	this.shape_2.setTransform(212.7,-103.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3839").s().p("AUiLDQgGgEgCAAQABgGAGABQAGAAAAAFQgBAEgCAAIgCAAgA9lFhQAGgUAAAUQAAAKgCAAQgBAAgDgKgA7eFMIADgIQACgEABAFIAAAHQAAAKgCAAQgBAAgDgKgAZXpxQgNgHAVAAIAgAAIA3gNQAdgKAEgYQAFABABAGIABANQgOAGgGAOIg2ALQgUAEgUAAIgVgBgAc4qIQAlgRAIgOQAIAUghAOIg4AUQABgHAjgQgAVmqjQA1gSAMgGQgPATgkALIhAARQAHgJArgOgASCqeQAYgOAvgWQgfAdgjAMg");
	this.shape_3.setTransform(11.6,52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAFFFF").s().p("ALVGoQAQgMgOAOIgIAHQgBAAAHgJgABnGhIAAgNIAVAAIAAANgAoLkcQgwAFgogmQgZAPgmgCQgngCgTgSQAzgcA7gKQBIgLAhAdQAIgFAMgQQALgPAKgFQAVAEAhAQQATgqA0AFQAMACAjAHIAQADQgEABABADQgBAFALABQAOAAAFADIAQANIAAANQBFgpAZApQAPgFAWgUQALgJAJgGQALAAAKgDQANAOAXAAQALAAAngHQAfgGAQAFQAWAHAJAeQAQACAfgHIA1gLQBEgMAcAjQARgKAVgEQAbgEAQALQgTAGgRAWQgWAagKAGQgegDg5geQgFAEgFANQgGANgFADQhVAHgrgoQgFAEgFANQgFANgFADQghAHgVgNIghgbIgvAKQgcAHgagEQgFgEgFgNQgGgMgFgEQgGAig1AKQg1ALgWgcQgEAEgLAVQgJARgKAFIgEACQgGgCgLgIIgFgEQgHgPgIAAQgiAbgjAPQgYAKgQAAQghAAgGgngAGemIQAWgeA0gIQAygHAfATQgxAPgSADQgnAIgtAAIgEAAg");
	this.shape_4.setTransform(112.9,-71.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#009900","#14A110","#FFFFCC","#FADB63"],[0.149,0.38,0.565,1],161,-293.5,191.5,77.7).s().p("EghYANXIAA6tQAJAEALADIgGACQgEACgBAJIAAABQAAARBHABQEkAAA4AQQRugZSVAZQgigbCJAKIDDAOQADgBABgDQAwAFBMAHQAbAFDOAVQDoAXBQABIBGgBIABAAIAGACQC0ARCUADICiAJIAAYhgAWkIrQADADACgGQAAgFgGgBQgGAAgBAGIAAAAQADAAAFADgA7jDJQAGAUAAgUQAAgKgCAAQgBAAgDAKgA5ZCsIgDAJQAGAUAAgUIAAgHIgBgDIgCABgAbniyQgCADAAAZIACAcQAHAbAXAAQAKAAACgEIAHgKQAYgXA/AKQBEALAUgNQAVgOADgGIAAgSQAAgSgugaQgugZgeAAQghAAgkAhIgMALQgKALgPgGQgEgCgEAAQgIAAgEAGgAZkkeIAKAeQAPAeAWAAQAGAAAKgOQAJgOALAAQAIAAAVAIQAVAIAtAAQAoAAAXgQQARgMAAgMQAAgggcgRQg2glgCAAQg7AAggAVIgSAPQgIAGgHAAQgWgGgGAAQgWAAAAAqgAtgs/IAQgDQAeACAagIQALgDANABQAOABAOgBIAcAAIBAAAQA1AGA3gCIAMAIg");
	this.shape_5.setTransform(-1.4,67.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#0033FF","#66CCFF","#BCFEFD","#0099FF"],[0.008,0.165,0.235,0.553],3.6,20.7,3.7,-35.1).s().p("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");
	this.shape_6.setTransform(-1,-28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("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");
	this.shape_7.setTransform(0.1,-29.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#66CCFF"],[0,1],-1.6,71.4,-1.6,-77.1).s().p("AITH8QhqgBhqgDQlqgJhCACQghABAIgKIgFAAIgBABIiZgBIgBAAIAAAAQg4AAg5gDIABADQkXANg2gFIgBACIkcgHQlNgHjjgBIghAAIkJgGIj4AEQgFAEAAAIIgBAAIAAvoIAMAAMBCZAAAIAMAAIAAPfQigAAl0AHQjAgFluAOQjbAIjbAAIhOAAgAH/hEQhMAKggAiQAUARAkAHQAMABA3AFQBUAHAWArQAiAHAcgHQAQgEAagOQAWgMAMgBIABAAIAFABQANAKALABIACABIAGAFQALgDAKgRQALgRAIgEQAeANAqgHQAngIARgRQAPAQAqgBQAngCATgNIAaAUQAPAOANAFQAUgBAUgJIAjgQQBsAzAhg5QAOAFAZANQAXAJAagCIAjgjQAUgWAagCQgLgXgfAEQguAHgGgCQgJgCgOgNQgNgLgMgBQgUAAg4APQgxANgegHQgFgegdgEQgdAHgjgCIg3gEIgFAAQAAgGgPAAQgXAAAAAIQAAAEAFAAIg0AhQgLgehGARIgRgKIgBAAQgIgHgLgCIAAAAIgIgDIg7gPQhGgKgWAvQgNgQgbgEQgNACgMANQgQAPgHADQgcgNgqAAQgVAAgXADgAZaiOQggAFgXAPQgYAQgDAVQAyAJAygLQAXgGA0gTIgFgIQgJgOgWgFQgPgFgRAAQgMAAgNACg");
	this.shape_8.setTransform(-1.4,-101.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.5,-154.2,431.6,308.4);


(lib.Aparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("ABmCSQgIgZgLhAQgeAFgwAKIhNAPQgOAlgkBIQgJAPgQAAQgMAAgJgHQgJgJAAgMQAAgOAshZQgFgIAAgJQAAgXAdgHQAhg8AzhOQBEhrARgBQAXAAAIAgIA+EiIARAtQAIAXAAAIQAAAMgJAJQgJAHgMABQgaAAgUhEgAglAUQAjgIBHgMIgYhtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-21.3,35.7,42.7);


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


(lib.ParticiplesTitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// P
	this.instance = new lib.Pparts("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.2,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({startPosition:0},0).to({rotation:30},7).wait(61).to({startPosition:0},0).to({rotation:0},5).wait(13));

	// A
	this.instance_1 = new lib.Aparts("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.8,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({startPosition:0},0).to({scaleX:0.79,rotation:15,x:47.6},7).wait(56).to({startPosition:0},0).to({scaleX:1,rotation:0,x:54.8},5).wait(15));

	// R
	this.instance_2 = new lib.Rparts("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.5,44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({startPosition:0},0).to({scaleX:0.75,rotation:-30,x:80.8,y:43.2},7).wait(51).to({startPosition:0},0).to({scaleX:1,rotation:0,x:96.5,y:44.7},5).wait(17));

	// T
	this.instance_3 = new lib.Tparts("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(137.5,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({startPosition:0},0).to({rotation:-30,x:116.8},7).wait(47).to({startPosition:0},0).to({rotation:0,x:137.5},5).wait(18));

	// I
	this.instance_4 = new lib.Iparts("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(171.6,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({startPosition:0},0).to({rotation:-15,x:143},7).wait(44).to({startPosition:0},0).to({rotation:0,x:171.6},5).wait(19));

	// C
	this.instance_5 = new lib.Cparts("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(206.6,44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({startPosition:0},0).to({scaleX:0.94,rotation:-30,x:174.1,y:44.9},7).wait(40).to({startPosition:0},0).to({scaleX:1,rotation:0,x:206.6,y:44.7},5).wait(21));

	// I
	this.instance_6 = new lib.Iparts("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(240.1,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({startPosition:0},0).to({scaleX:0.89,rotation:15,x:208.7},7).wait(37).to({startPosition:0},0).to({scaleX:1,rotation:0,x:240.1},5).wait(23));

	// P
	this.instance_7 = new lib.Pparts("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(271.6,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({startPosition:0},0).to({rotation:15,x:240.1,y:43.1},7).wait(31).to({startPosition:0},0).to({rotation:0,x:271.6,y:44},5).wait(25));

	// A
	this.instance_8 = new lib.Lparts("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(304.8,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({startPosition:0},0).to({scaleX:0.94,rotation:30,x:270,y:47.5},7).wait(25).to({startPosition:0},0).to({scaleX:1,rotation:0,x:304.8,y:45.4},5).wait(27));

	// L
	this.instance_9 = new lib.Eparts("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(340.1,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(31).to({startPosition:0},0).to({scaleX:0.94,rotation:-30,x:294.7,y:49.3},7).wait(20).to({startPosition:0},0).to({scaleX:1,rotation:0,x:340.1,y:44.6},5).wait(29));

	// S
	this.instance_10 = new lib.Sparts("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(378.9,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(36).to({startPosition:0},0).to({scaleX:0.78,scaleY:1.1,rotation:-15,x:327.2,y:45},7).wait(13).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:0,x:378.9,y:45.9},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,20.5,391.2,48.3);


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


(lib.GERUNDS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Gerundsymbol();
	this.instance.parent = this;
	this.instance.setTransform(-1.9,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GERUNDS, new cjs.Rectangle(-50.6,-14.9,97.4,30.5), null);


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
		var bgm = createjs.Sound.play('bgmIntro',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.5;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
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
				bgm.volume += 0.5;
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
		
		 window.open ("intro_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("intro_Scene4b.html","_self");
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


(lib.PARTICIPLES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ParticiplesTitle();
	this.instance.parent = this;
	this.instance.setTransform(1.9,-3.3,0.356,0.356,0,0,0,200.6,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.8,-11.1,139.4,17.2);


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


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,"press":1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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


(lib.VerbalsAreCompleteLesson = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.INFINITIVES();
	this.instance.parent = this;
	this.instance.setTransform(-9,-21.4,1.319,1.319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({scaleX:1.87,scaleY:1.87,x:-7.4,y:-120.3},22).wait(64).to({scaleX:1,scaleY:1,x:-134.1,y:-123.4},5).wait(301));

	// Layer 24
	this.instance_1 = new lib.InfinBigDef("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-121.3,-98.8,0.531,0.531);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({scaleX:1.29,scaleY:1.29,x:-2.4,y:-72.3,alpha:1},7).wait(57).to({startPosition:0},0).to({scaleX:0.94,scaleY:0.94,x:59.4,y:-79.3},5).to({scaleX:0.86,scaleY:0.86,x:71.7,y:-114.4},6).wait(295));

	// Layer 5
	this.instance_2 = new lib.GERUNDS("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.3,26.5,1.32,1.32);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(103).to({scaleX:1,scaleY:1,x:-4.8,y:35.3},0).to({scaleX:2.14,scaleY:2.14,x:-5.6,y:-55},9).wait(63).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:-153.9,y:-56.7},7).wait(217));

	// Layer 23
	this.instance_3 = new lib.GerundDef("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.6,-54.8,0.595,0.595);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(111).to({_off:false},0).to({scaleX:1.94,scaleY:1.94,x:-3.4,y:-18.4,alpha:1},14).wait(53).to({startPosition:0},0).to({scaleX:1.49,scaleY:1.49,x:35.2},4).to({scaleX:1.09,scaleY:1.09,x:8.6,y:-56.8},7).wait(210));

	// Layer 19
	this.instance_4 = new lib.PARTICIPLES();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-4.7,78.4,1.478,1.478,0,0,0,-1.9,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(191).to({scaleX:1.12,scaleY:1.12,x:-2.1,y:74.6},0).to({scaleX:2.44,scaleY:2.44,y:16.2},9).wait(82).to({scaleX:1.12,scaleY:1.12,x:-130.8},9).wait(108));

	// Layer 22
	this.instance_5 = new lib.ParticipDef("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(8.6,38.5,0.59,0.59);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(199).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:13,y:70.7,alpha:1},18).wait(73).to({startPosition:0},0).to({scaleX:1.24,scaleY:1.24,x:80.6,y:58.3},4).to({scaleX:1.14,scaleY:1.14,x:87.5,y:22.8},7).wait(98));

	// Layer 26
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAPQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAEgLIAFgLQABgEADAAQABAAAAABQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAIgJAXQgBADgDABQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(181.6,73.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgIQAAgBAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_1.setTransform(175.9,68.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_2.setTransform(169.1,69.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAIgMQAKgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgZANQAEAFAFADQAGADAGAAQAFAAAGgCQAJgCACgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAHgMAGQgLAEgKAAQgOAAgKgHgAgOgRQgFAGgCAMIAVgJQALgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_3.setTransform(161.6,69.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_4.setTransform(154.1,69.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgLAEgJAAQgPAAgJgHgAgNgRQgGAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_5.setTransform(147.2,69.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_6.setTransform(140,69.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZA4QgDgCAAgDIAAgcIAAgaIgBgbIgBgOQAAgFACgDQACgEAEAAQABAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAACIgBAEQAGgEAGgCQAEgCAFAAQAOAAAGANQAGAJAAARQAAANgIAKQgJAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAgFgjIgJAHIAAAgQAHACAHAAQAJAAAEgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgGAAgEADg");
	this.shape_7.setTransform(132.8,71);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAmQgLgDAAgIQAAgDACgBQACgCADAAQACAAAEADQABACAGAAIAIABQAEAAAFgBQAGgCAAgFQAAgIgNgEIgGgBQgJgCgEgDQgFgDAAgIQAAgOANgGIAMgFIANgEIAGgBQADAAACACQACACAAADIABAFIABAHQAAACgCACQgCACgDABQgEAAgBgDIgCgIIgQAFQgKAFAAAGIAEABQAPADAHAFQAMAGAAANQAAAMgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_8.setTransform(121.2,69.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAxQgCgBAAgDIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAADgCABQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_9.setTransform(116.1,67.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgOA0QgCgCAAgCQAAgDAHgMIAIgQQgMgQgEgHIgKgTIgMgSIgBgEQAAgCACgCQADgDACAAQAEAAACAEIAFAIIAKAPQAFAIADAHQACAGAHAJIAPglIAIgPQACgFAEAAQADAAACADQACACAAACQAAADgEAHIgEAIIgMAdIgNAbIgIAQIgDAIQgCADgEAAQgDAAgCgCg");
	this.shape_10.setTransform(105.2,67.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgiA0QgCgCAAgDIAAgQIgBgRIACgRIABgTIgBgKIAAgLQAAgEABgCQADgEAFAAIARACQAIABAGADQAcAPAAAVQAAAKgJAHQgJAHgLADQAWAMAKAMQAAABABAAQAAABABAAQAAABAAABQAAAAAAABQAAADgCACQgCACgDAAQgCAAgDgCQgWgXgbgHIAAANIAAAOQAAADgBACQgCACgDAAQgDAAgCgCgAgVgeIABAIIgCAOIgBANIADAAIADAAQARAAAJgFIAHgEQADgEAAgDQAAgJgLgJQgJgHgKgBIgLgBg");
	this.shape_11.setTransform(96.7,67.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAYAjIgFgVIgSADIgRAEIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAHgBQAIgNAMgTQAPgaAEAAQAFgBACAIIAFAXIAKAuIAEAMIACAGQAAAEgCACQgDABgCAAQgHABgEgRgAgIAFIAYgFIgFgag");
	this.shape_12.setTransform(86.9,67.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_13.setTransform(78.1,67.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgdA1QgEgCAAgIIACgWQABgfAAgmQAAgDACgCQACgCADAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQACACAAADQAAAngCAfIgBAKIAAAKQASAAAagJIACAAQADAAACACQACACAAAEQAAADgFADQgHAEgRACQgOADgKAAQgHAAgDgDg");
	this.shape_14.setTransform(70.6,67.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_15.setTransform(62.7,67.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAhA1QgFgFgGgIIgJgOIgKgQIgXAcIgNAOQgCACgDAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgCAAgDQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBIAMgOIAagcIgQgUIgIgLIgJgKQgDgCAAgEQAAgCACgDQACgCADAAQAGAAAJANIAJALIAOATIAPgWQAPgVAFAAQADAAACACQACADAAACIgCAFIgOASIgJANIgJALIAPAWIAQAVQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_16.setTransform(53.7,67.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgdAoQgJgJgCgUIgBgiIAAgOIABgJQACgGAFAAQAGAAAAAMIAAAoQAAAoAcAAQAbAAAAhEIAAgGIAAgGQAAgFACgDQACgDADgBQAHAAAAAKIAAAIIAAAJQAABOgpAAQgUAAgKgNg");
	this.shape_17.setTransform(43.7,67.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAYAjIgFgVIgSADIgRAEIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAHgBQAIgNAMgTQAPgaAEAAQAFgBACAIIAFAXIAKAuIAEAMIACAGQAAAEgCACQgDABgCAAQgHABgEgRgAgIAFIAYgFIgFgag");
	this.shape_18.setTransform(33.3,67.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_19.setTransform(20.4,69.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_20.setTransform(12.4,67.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgIQAAgBAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_21.setTransform(5,68.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgKA6QgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgCQABgIAAgLIAAgTIAAgSIgLAAQgHAAAAgGQAAgHAMAAIAHgBIABgKQACgPAGgHQAGgJAPAAQAKAAAAAHQAAAGgJAAQgRAAgCAXIAAAEIAPAAQALAAAAAGQAAAFgFABIgGABIgQABIAAAOIAAANIAAAMQAAANgBAIQAAAFgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_22.setTransform(-6.2,67.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAxQgCgBAAgDIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAADgCABQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_23.setTransform(-11.4,67.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgfA0QgDgCAAgDIAAgUIACgbIABgdIABgSQAAgDACgBQAJgDAMgBQALAAALAJQANAJAAAOQAAASgOAJQALAEAFAFQAFAGAAAGQAAAJgJAHQgGAFgHADQgPAHgXAAQgDAAgDgEgAgUAbIAAAOQASgBAKgEQAFgCAEgDQAEgEAAgCQAAgDgIgEIgNgFIgGgBIgDAAIgDAAIgIAAIAAAPgAgRgoIAAAMIgCAaIALABQAJAAAGgGQAIgGAAgKQAAgGgIgGQgHgFgHAAIgKAAg");
	this.shape_24.setTransform(-21.8,67.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgiA0QgCgCAAgDIgBgQIAAgRIABgRIABgTIAAgKIgBgLQAAgEACgCQADgEAFAAIAQACQAKABAFADQAcAPAAAVQAAAKgJAHQgJAHgKADQAUAMALAMQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAADgCACQgCACgDAAQgCAAgDgCQgXgXgagHIABANIAAAOQAAADgCACQgCACgDAAQgDAAgCgCgAgVgeIABAIIgBAOIgCANIADAAIADAAQARAAAIgFIAHgEQAEgEAAgDQAAgJgLgJQgIgHgLgBIgKgBg");
	this.shape_25.setTransform(-30.8,67.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_26.setTransform(-39.5,67.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgMAyQgIgVgKgmIgFgTQgEgOAAgEQAAgDACgCQACgCADAAQAFAAABAFIADAMIAGAYQAHAYAGASIABgBIARgwIAGgRQAEgKAEgFQACgDADAAQADAAACACQACACAAADIgBAEQgEAGgDAHIgFAPIgSAxIgIARQgBAEgEAAQgFAAgDgFg");
	this.shape_27.setTransform(-48.2,67.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXAeQgKgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgMAEIgZANQAFAFAFADQAGADAHAAQAEAAAGgCQAIgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgKgHgAgOgRQgFAGgDAMIAVgJQAMgGAFgEQgGgGgKAAQgIAAgGAHg");
	this.shape_28.setTransform(-61.1,69.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgIQAAgBAAgBQABAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_29.setTransform(-68.4,68.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_30.setTransform(-75.2,69.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgSAeQgKgJAAgPQAAgNAJgPQAKgQAMAAQAGAAAJAEQAKADAAAHQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgDQgEgDgJAAQgGAAgHAMQgGAMAAAHQAAAKAGAFQAGAEAIAAQAEAAAEgCIAIgEIAEgBQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAAGgKAEQgJAEgGABQgNAAgJgJg");
	this.shape_31.setTransform(-82.4,69.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAxQgCgBAAgDIAAgNIAAgMIABgQIAAgPQAAgDACgCQACgCADAAQAAAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADIgBAPIgBAQIABAMIAAANQAAADgCABQgCACgCAAQgDAAgCgCgAgDglQgDgCAAgDQAAgEADgCQACgCACgBQAEABACACQACACAAAEQAAADgCACQgCACgEABQgCgBgCgCg");
	this.shape_32.setTransform(-87.8,67.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAvQgKgKAAgPQAAgTAKgJQAKgMAOAAQAIAAAEADIAHAFQAAgdACgKQAAgGAGAAQAGAAAAAGIgDArIAAATQgBAXADALIAAACQAAAAAAABQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgEAAgBgGQgFADgGADQgFABgFAAQgOAAgJgJgAgPACQgGAGAAAOQAAAJAHAGQAFAGAJAAQAFAAAEgCIAHgGIADgCIgBgLIAAgJIABgIQgEgFgDgCQgFgDgGABQgKgBgGAHg");
	this.shape_33.setTransform(-94,67.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgaANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_34.setTransform(-101.8,69.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgaAfIAAgvIAAgGIABgHQAAgHAGAAQAGAAAAALQANgMAPAAQAGAAADAEQADAEAAAIIgBAFQAAAJgGAAQgGAAAAgHIAAgFIgBgGQgKACgGAFQgGAEgEAJIAAAkQAAAHgHAAQgGAAAAgHg");
	this.shape_35.setTransform(-108.9,69.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaA4QgCgCAAgDIAAgcIAAgaIgBgbIgBgOQAAgFACgDQADgEAEAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAACIgBAEQAGgEAGgCQAEgCAFAAQAOAAAGANQAGAJAAARQgBANgHAKQgJAKgOAAQgGAAgIgCIAAAhQAAADgCACQgCABgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAgAgFgjIgJAHIAAAgQAHACAHAAQAJAAAEgGQAEgEAAgJQAAgNgDgGQgDgGgGAAQgFAAgFADg");
	this.shape_36.setTransform(-116.2,71);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAeQgLgJAAgPQAAgRAJgMQAJgNAPAAQALAAAHAEQAJAEAAAKQAAAHgIAGQgDACgLAEIgaANQAEAFAGADQAGADAHAAQAEAAAHgCQAHgCADgEQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAAHgMAGQgKAEgKAAQgPAAgJgHgAgNgRQgGAGgCAMIAUgJQAMgGAFgEQgGgGgKAAQgIAAgFAHg");
	this.shape_37.setTransform(-127.9,69.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATA0IgDgQIgBgQIAAgGIAAgFQAAgMgHAAQgIAAgGAHQgEAEgGALQAAAagCAFQgCAEgEAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgDIABgKIAAgKIAAgyIAAgLIAAgHIgBgGQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAGIABAMIgBAPIAAAPIAAAGQAFgHAHgEQAFgEAHAAQAMAAAEAIQADAFAAALIABANIABAOIADAOIAAACQAAADgCACQgCACgDAAQgFAAgBgFg");
	this.shape_38.setTransform(-135.8,67.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEAwQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgIIAAgIIgCgnIgPgBQgGgBAAgGQAAgDACgCQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAOABIAAgJIgBgIQAAgBAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQAFAAACAKIAAAGIAAAEIAAAEIAJgBIAKABQAEACAAAFQAAACgCACQgCACgDAAIgDAAIgEAAIgJABIABAnIAAADIAAAEQABAPgIAAQgCAAgCgCg");
	this.shape_39.setTransform(-143.3,68.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADgBQADABADACQACACAAADQAAADgCADQgDADgDgBQgDABgCgDg");
	this.shape_40.setTransform(-152.5,72.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AACA1IgNAAIgGAAQgEgCAAgEQAAgGAKAAIAEAAIACAAIAAgKIgBgKIACgZIABgaQgIAHgDAAQgDAAgCgCQgCgCAAgDQAAgDAGgFIAKgIQAFgGAGAAQAEAAABAFIgBAFIAAAEIAAAHIAAAHIgBAXIgCAWIABAKIAAAJIAHAAQADAAACACQAAABABAAQAAABABAAQAAABAAAAQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgCACgDAAg");
	this.shape_41.setTransform(-157.3,67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},298).wait(101));

	// Layer 25
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6600FF").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADgBQADABADACQACACAAADQAAADgCADQgDADgDgBQgDABgCgDg");
	this.shape_42.setTransform(-42,101.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6600FF").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_43.setTransform(-48,96.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6600FF").s().p("AgMAyQgIgVgKgmIgFgTQgEgOAAgEQAAgDACgCQACgCADAAQAFAAABAFIADAMIAGAYQAHAYAGASIABgBIARgwIAGgRQAEgKAEgFQACgDADAAQADAAACACQACACAAADIgBAEQgEAGgDAHIgFAPIgSAxIgIARQgBAEgEAAQgFAAgDgFg");
	this.shape_44.setTransform(-56.7,96.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6600FF").s().p("AgdAyQgCgCAAgDQAAgDACgCQACgCADAAIAOgBIABgNIAAgLIgBgMQAAgPACgXIgJAAIgJAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAVAAQAMAAAVADQAGAAAAAHQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLgBIgLgCIgCAlIAAAMIABAMIgBAMIAWgBQADAAACACQABACAAADQAAADgBACQgCACgDAAIgMABIgLAAIgNABIgNABQgDAAgCgCg");
	this.shape_45.setTransform(-65.5,96.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6600FF").s().p("AgEAyQgCgCAAgDIAAgDIABgDIgBgKIAAgKIgCgaIgCgcIgGAAQgPAAgIgCQgGgBAAgGQAAgDABgCQADgCADAAIALABIALABIANAAIALAAIAPABIAQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIgQAAIgPgBIgFAAIACAfIABAdIABAHIAAAIQABAEgCAEQgCAEgEAAQgCAAgCgCg");
	this.shape_46.setTransform(-73.4,96.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6600FF").s().p("AgcAqQgJgLAAgOQAAgWATgYQARgVAPAAIAHABIAEABQADgEADAAQAFAAABAGIABAOQAAADgCACQgBADgDAAQgFAAgCgGIgDgFQgCgBgGAAQgJAAgMAQQgQAUAAARQAAAJAFAGQAGAHAJAAQAFAAAHgEIANgIQAEgDABAAQAEAAABADQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQABAEgDACQgSAQgRAAQgOAAgLgLg");
	this.shape_47.setTransform(-82.9,96.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6600FF").s().p("AgdA0QgHgGAAgWIABgJIAAgLIgBgEQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABgBIABgdIgBgHIAAgIQAAgIAGAAQADAAACACIAQgDIANgBQAQAAAKADQAFACAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAIgCAAQgMgDgKAAIgMABIgOADIABAHIgCAaIAdgDIARgBQADAAACACQACACAAADQAAAFgHABIgQABIgeADIgBAJIAAAIQAAAPACADQACACAJAAIAMAAIAMAAIAFgBIADAAQAIAAAAAHQAAAGgGABQgHABgUAAQgVAAgGgGg");
	this.shape_48.setTransform(-91.4,96.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6600FF").s().p("AgbAvQgNgJAAgNQAAgIAHAAQAHAAAAAIQgBAGAJAGQAIAFAGAAQAFAAACgjIABgnIAAgIIgEAAIgHAAIgIAAQgEAAgCgCQgCgCAAgDQAAgHAKAAIAHAAIAGAAIAMAAIAOgBQAPAAAAAIQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCACgCAAIgFAAIgEgBIgIAAIAAAJQAAAxgHAYQgEAPgLAAQgMAAgLgJg");
	this.shape_49.setTransform(-100.6,96.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6600FF").s().p("AgVA3QgHgCgEgDIgBAAQgDAAgCgCQgCgCAAgDIABgVIABgWIgBgXIAAgYQAAgCADgEQADgDADAAIAKAFIANAGQASAGAOAOQAQAQAAATQAAALgGALQgFALgKAGQgKAIgTAAQgFAAgHgCgAgZgSIAAATIgBAlIACABQAGAEAJAAQAOAAAIgFQAGgFAEgHQAEgIAAgIQAAgSgVgOQgGgFgZgLg");
	this.shape_50.setTransform(-110.1,96.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6600FF").s().p("AAYAjIgFgVIgSADIgRAEIgMAaQgCAEgEAAQgCAAgDgCQgCgCAAgDQAAgDALgWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAHgBQAIgNAMgTQAPgaAEAAQAFgBACAIIAFAXIAKAuIAEAMIACAGQAAAEgCACQgDABgCAAQgHABgEgRgAgIAFIAYgFIgFgag");
	this.shape_51.setTransform(-120.6,96.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AARAhIgCgPIgBgPIAAgFIAAgHQAAgPgFAAQgIAAgGAKQgGAIgEALIAAAHIgBAHIABAGIAAAGQAAADgCACQgCACgDAAQgDAAgCgCQgBgCAAgDIgBgGIAAgGIABgTIABgTIAAgHIgBgGQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAGAAABAJIAAAIQAMgPALAAQALAAAEAJQADAHAAAMIAAAHIAAAGIACAOIABAPQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_52.setTransform(-133.4,98.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAWAjIgFgFIgLAFIgIACQgQAAgHgJQgHgJAAgRQAAgPAMgMQALgMAPAAQAGAAAHADQAJAEAAAFIgBAEIgBAJIAAANQgBAJACAFIAEAMIACAEIAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgCAAgDgDgAgLgQQgHAIAAALQAAALAEAFQAEAGAIAAQAFAAAFgCIAHgGQgDgRAAgJIABgGIABgHIgEgCIgDgBQgKAAgIAJg");
	this.shape_53.setTransform(-140.8,98.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgDACgCQACgCADgBQADABADACQACACAAADQAAADgCADQgDADgDgBQgDABgCgDg");
	this.shape_54.setTransform(-150.3,101.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAVA0IgFgBIgKAAIgKABIgIAAIgIABIgCAAIgCgBQgFAAgBgFIgBgIQAAgQAJgJQAEgFARgKIAMgLQAGgGAAgJQAAgFgGgEQgFgCgEAAQgGgBgFAEIgKAIIgFACQgHAAAAgFQAAgDADgDQAIgIAGgDQAIgEAIgBQALAAAIAHQAKAHAAAKQAAAHgCAFQgCAHgEAEQgFAGgMAHQgMAJgEADQgIAJAAAKIAOgBIAUgBQAFABAFABQAGACAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAIgFgBg");
	this.shape_55.setTransform(-156.3,96.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},363).wait(36));

	// Layer 28
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.682)").s().p("EgjZAVLMAAAgqVMBGzAAAMAAAAqVg");
	this.shape_56.setTransform(-1.4,-21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(399));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-157.1,453.3,271.1);


// stage content:
(lib.intro_Scene4c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4c:0,scene4c_repeat:393});

	// timeline functions:
	this.frame_19 = function() {
		playSound("infinitives");
	}
	this.frame_34 = function() {
		playSound("infinitivedefinitions");
	}
	this.frame_109 = function() {
		playSound("gerunds");
	}
	this.frame_126 = function() {
		playSound("gerunddefinitions");
	}
	this.frame_205 = function() {
		playSound("participles");
	}
	this.frame_217 = function() {
		playSound("participlesdef1");
	}
	this.frame_305 = function() {
		playSound("participledef2");
	}
	this.frame_392 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_401 = function() {
		this.gotoAndPlay("scene4c_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(15).call(this.frame_34).wait(75).call(this.frame_109).wait(17).call(this.frame_126).wait(79).call(this.frame_205).wait(12).call(this.frame_217).wait(88).call(this.frame_305).wait(87).call(this.frame_392).wait(9).call(this.frame_401).wait(1));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghPAX4MAAAgvvMBCfAAAMAAAAvvg");
	mask.setTransform(274.3,194.3);

	// content
	this.instance = new lib.VerbalsAreCompleteLesson();
	this.instance.parent = this;
	this.instance.setTransform(270.4,211.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(402));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.VERBAL2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(262.2,21,0.526,0.526);

	this.instance_2 = new lib.Beach("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(274.2,194.2,1,1,0,0,0,-0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.UI}]}).wait(402));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: 'E634A7A0D13F99458AE69C81ADDDE26D',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmIntro.mp3", id:"bgmIntro"},
		{src:"sounds/gerunddefinitions.mp3", id:"gerunddefinitions"},
		{src:"sounds/gerunds.mp3", id:"gerunds"},
		{src:"sounds/infinitivedefinitions.mp3", id:"infinitivedefinitions"},
		{src:"sounds/infinitives.mp3", id:"infinitives"},
		{src:"sounds/participledef2.mp3", id:"participledef2"},
		{src:"sounds/participles.mp3", id:"participles"},
		{src:"sounds/participlesdef1.mp3", id:"participlesdef1"}
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
an.compositions['E634A7A0D13F99458AE69C81ADDDE26D'] = {
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