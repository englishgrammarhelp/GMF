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


(lib.textcleverly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEA5QgEgDAAgFQgBgFAEgEQAGgGAqgPIARg8IACgIQABgEACgDQADgDAFAAQAFAAAEADQAEAFgBAFQgDAVgMAiIAagJQAOgFALgCQAHgCAFAEQADAEABAEQAAAFgDADIgFADIhBAXQgYAIgPAHIgPAHIgHABQgEAAgDgDg");
	this.shape.setTransform(52.2,57);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyAzQgEgEAAgEQAAgFAEgEIBUhUQAEgEAFAAQAEABAEADQAEAEAAAEQAAAFgEAEIhRBRQgHAHgFAAQgEAAgEgEg");
	this.shape_1.setTransform(49.7,50.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgzAiQgEgEAAgFQAAgEAEgDIAogoIAHgFIAEgGQAEgDAEgBQAFAAAEAEQAHAHgGAIQATADANANQANAMgRAQIgEAEQgKAJgIgIQgIgIAIgIIAGgGQgQgLgRAFIggAfQgDAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(43.1,45.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAvQgNgEgKgKQgOgPgDgQQgCgSAOgOQAQgQATgDQAUgCAQAPQALALADALQAFAOgKAJQgGAGgOgCQgGgBgPgGIgdgKQAAAEADAGQACAGAFAGQAJAIAIADQAIACADADQAHAGgGAGQgEAEgGAAQgEAAgHgDgAgMgWIATAIIAUAHQgCgHgGgHQgGgGgIAAQgHAAgKAFg");
	this.shape_3.setTransform(36.6,41);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglAwQgEAAgDgDQgGgGADgKIAehFIADgEQADgEAFAAQAFABADAEQAFAFgDAHQgEALgQAlIAegMIASgIQAHgCAGAFQADADABAFQAAAFgDAEQgCACghAMIgoAPQgDADgDAAIgCgBg");
	this.shape_4.setTransform(31.1,32.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAvQgNgEgKgKQgOgPgDgQQgCgSAOgOQAQgQATgDQAUgCAQAPQALALADALQAFAOgKAJQgGAGgOgCQgGgBgPgGIgdgKQAAAEADAGQACAGAFAGQAJAIAIADQAIACADADQAHAGgGAGQgEAEgGAAQgEAAgHgDgAgMgWIATAIIAUAHQgCgHgGgHQgGgGgIAAQgHAAgKAFg");
	this.shape_5.setTransform(23.3,27.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyAzQgEgEAAgEQAAgFAEgEIBUhUQAEgEAFAAQAEABAEADQAEAEAAAEQAAAFgEAEIhRBRQgHAHgFAAQgEAAgEgEg");
	this.shape_6.setTransform(19.7,20.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAsQgOgFgGgGQgOgNgBgSQgCgRANgNQANgNAWgEQAYgFANANQAGAHAFAMQAHAOgGAFQgDADgEAAQgFABgEgDQgDgCAAgHQgBgHgIgHQgEgFgPAEQgOAEgGAGQgHAHABAHQABAIAHAIQAEAEAKACQAIADACACQADADAAAFQAAAFgDADQgDACgDAAQgFAAgIgDg");
	this.shape_7.setTransform(13.1,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.6,70.6);


(lib.text_verb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhjQAAgGADgFQADgGAHAAQAJAAAAALIAAADIgBADIAAAiQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAVgOAOQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAFAJABQAKAAAHgIQAIgHAAgMQAAgMgGgGQgHgIgKABQgDgBgGADg");
	this.shape.setTransform(36,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgiAuQgCgEgBgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQARAAABAXIAAAGQgBANgMAAQgLAAAAgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_1.setTransform(26.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAHAAAOQAAAJgLAIQgFADgPAGIgdAMQAFAFAFACQAHACAHAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgEgKAAQgHAAgGAGg");
	this.shape_2.setTransform(16.8,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgvIgHgYQgFgQAAgHQAAgFADgDQAEgEAFAAQAIAAAEAJIADAPIAJAcIANAsIAUg0IAHgVQAFgMAGgHQAEgFAGAAQAFAAAEAEQADADAAAFQAAAEgCADQgFAHgEAJIgGASIgYA8QgEAKgGALQgDAHgHAAQgJAAgDgJg");
	this.shape_3.setTransform(5.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,0,45.7,29.1);


(lib.text_three = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAvQgNgEgKgKQgOgPgDgQQgCgSAOgOQAQgQATgDQAUgCAQAPQALALADALQAFAOgKAJQgGAGgOgCQgGgBgPgGIgdgKQAAAEADAGQACAGAFAGQAJAIAIADQAIACADADQAHAGgGAGQgEAEgGAAQgEAAgHgDgAgMgWIATAIIAUAHQgCgHgGgHQgGgGgIAAQgHAAgKAFg");
	this.shape.setTransform(39.9,44.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAvQgNgEgKgKQgOgPgDgQQgCgSAOgOQAQgQATgDQAUgCAQAPQALALADALQAFAOgKAJQgGAGgOgCQgGgBgPgGIgdgKQAAAEADAGQACAGAFAGQAJAIAIADQAIACADADQAHAGgGAGQgEAEgGAAQgEAAgHgDgAgMgWIATAIIAUAHQgCgHgGgHQgGgGgIAAQgHAAgKAFg");
	this.shape_1.setTransform(32.8,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgzAiQgEgEAAgFQAAgEAEgDIAogoIAHgFIAEgGQAEgDAEgBQAFAAAEAEQAHAHgGAIQATADANANQANAMgRAQIgEAEQgKAJgIgIQgIgIAIgIIAGgGQgQgLgRAFIggAfQgDAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(26,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAABOQgFgBgDgDQgGgGAEgJQAEgGAHgKQAHgLAGgFIAFgEIAFgFIAFgFQADgEgDgDQgHgGgMAAIgTAEQgWAXgHACQgIACgFgFQgDgDAAgFQgBgFADgEIAEgDIASgOIAogqIADgCIAKgJIAFgHIAFgGQAEgDAFAAQAEAAAEAEQAGAGgEAJQgDAFgIAHIgNAMIgMAMQAJAAAHADQAHADAGAGQALAKgBAKQgBAIgJAKIgOARIgLANIgKAOIgCADQgDADgEAAIgBAAg");
	this.shape_3.setTransform(19.1,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsAvQgEgEAAgEQgBgGADgDIAIgGIAGgHIAgggIgLgNQgHgIAHgIQAEgDAFAAQADAAAEAEIAKALIAGgHIAGgGQADgEAFAAQAFAAAEAEQAJAJgPAQIgGAFIAHAFQAHAHACADQADAHgFAGQgEAEgFgBQgFAAgEgEIgDgDIgDgDIgGgFIgeAiIgDADIgEADQgJAJgHAAQgEAAgDgDg");
	this.shape_4.setTransform(13.7,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,57.2);


(lib.text_subject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACABAIQAAAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape.setTransform(65.4,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgaAnQgOgMAAgTQgBgRANgSQAOgWASABQAJAAAMAEQAPAGAAAIQAAAFgDADQgDAEgFgBQgEAAgFgDQgGgFgKAAQgGAAgIAOQgIAMABAJQgBAJAHAGQAGAEAKAAQAGABAJgFQAIgFACAAQAFAAAEAEQACAEAAAEQABAHgPAGQgOAHgIAAQgTgBgMgKg");
	this.shape_1.setTransform(56.4,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQAMAHAAAOQABAJgLAIQgFADgPAGIgcAMQADAFAHACQAFACAHAAQAMABAIgFQAIgFAEAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgDAKIAUgIIASgKQgHgEgJAAQgHAAgGAGg");
	this.shape_2.setTransform(46.8,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgfA+IgBgFQAAgGAEgDQAEgDAFAAQAFAAAFAGIAGALQADAHADAAQAEAAACgNIgDgxIgDguQAAgFADgEQADgFAGAAQAFAAAEADQAEADAAADIADAxIACA0QAAAMgIALQgIAMgOAAQgUAAgOgegAADhEQgDgEAAgGQAAgFADgEQAFgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFADgFAAQgFAAgFgDg");
	this.shape_3.setTransform(37.4,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhjQAAgGADgFQADgGAHAAQAJAAAAALIAAADIgBADIAAAiQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAVgOAOQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAFAJABQAKAAAHgIQAIgHAAgMQAAgMgGgGQgHgIgKABQgDgBgGADg");
	this.shape_4.setTransform(29.3,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AASArQgMAFgLAAQgMAAgJgGQgJgFgCgNQgEgVAAgQQAAgMADgPQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBANIABAUQAAAJACAGIAEACIAEAAQAJAAAMgCIAAgQIgBgNQAAgTACgNQABgKALAAQAFAAAEADQAEAEgBAEIgBAfIAAARIAAASIAAAFIAAAGQAAAEgDAEQgEADgFAAQgHAAgDgHg");
	this.shape_5.setTransform(19.2,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgvA5QgLgIABgLQgBgFAEgEQAEgEAFAAQAIAAAEAIQAFALARAAQAPAAAOgGQAPgHAAgIQAAgLgJgEQgHgCgTgBQgPAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAJAAAMAEQAQAFAAAGQAAAFgDADQgDAEgGAAIgMgCIgNgBQgMAAgJAFQgKAGAAAGQAAADADACQAEADAGAAIAVACQAUABALAKQANAJAAATQAAAXgaALQgUAJgYAAQgXAAgNgKg");
	this.shape_6.setTransform(8.4,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,71.7,29.1);


(lib.text_predicate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQANAHAAAOQgBAJgKAIQgFADgPAGIgdAMQAFAFAFACQAGACAHAAQAMABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgOAAQgUAAgNgKgAgLgUQgGAGgEAKIAUgIIASgKQgFgEgKAAQgHAAgGAGg");
	this.shape.setTransform(141.8,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgMgCAAgKQAAgFAEgDQADgEAGAAIAOABIAAgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACAAAIQABAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgMAAQgEAAgEgDg");
	this.shape_1.setTransform(132.6,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993300").s().p("AAVAoIgOAGQgGACgDAAQgWAAgKgLQgLgMAAgWQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAACgCADIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgMgRQgIAJAAAMQAAAMAEAFQAEAHAIAAQAFgBAFgBQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDAAQgLAAgJAJg");
	this.shape_2.setTransform(123.4,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993300").s().p("AgbAnQgNgMAAgTQAAgRAMgSQAOgWASABQAJAAAMAEQAPAGAAAIQAAAFgDADQgDAEgFgBQgEAAgGgDQgEgFgLAAQgGAAgIAOQgHAMgBAJQABAJAGAGQAGAEAKAAQAGABAIgFQAJgFACAAQAFAAADAEQAEAEAAAEQgBAHgPAGQgMAHgJAAQgSgBgOgKg");
	this.shape_3.setTransform(113.6,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("AgKBAQgDgEAAgEIgBgQIgBgRIACgUIABgSQgBgFAEgDQAEgDAFAAQAEAAADADQADADAAAFIAAASIgBAUIAAARIAAAQQABAEgEAEQgEADgDAAQgGAAgDgDgAgIgsQgDgDAAgGQAAgFADgEQAFgEAEAAQAGAAAEAEQAFAEAAAFQAAAGgFADQgEAEgGAAQgEAAgFgEg");
	this.shape_4.setTransform(106.8,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993300").s().p("AAYBCQgGAEgGABIgMABQgUAAgNgNQgNgMAAgUQAAgYANgOQANgOAVAAQAGAAAGABIAJAEQABgdABgLQACgLAKAAQAFAAADADQADAEAAAEIgCAnIgCAlQAAAfACALIABADQAAAEgEAEQgDADgFAAQgHAAgDgGgAgRAEQgHAHAAAQQAAAJAHAGQAHAIAKgBQAFABAEgCIAIgGIADgDIAAgfQgDgGgFgCQgEgDgHAAQgMAAgGAHg");
	this.shape_5.setTransform(98.7,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#993300").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAHAAAOQAAAJgLAIQgFADgPAGIgcAMQAEAFAFACQAHACAHAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgEgKAAQgHAAgGAGg");
	this.shape_6.setTransform(88.4,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#993300").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQABgFADgDQADgEAFAAQAKAAABAKQAPgLATAAQASAAAAAXIAAAGQgBANgMAAQgKAAgBgLIAAgJQgTADgJARIAAAsQAAAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_7.setTransform(79.3,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#993300").s().p("AgnBDQgDgEAAgEIAAgYIABgoIACgoQAAgYANABIAIgBIANAAQAQAAAPALQARAMAAATQAAAWgSANQgQALgUAAIgIAAIAAAoQAAAEgEAEQgDADgFAAQgFAAgDgDgAgQguIAAANIgBAdIAGABQAMABAJgHQAKgHAAgLQAAgIgJgGQgJgGgJAAIgFAAIgEABg");
	this.shape_8.setTransform(70.1,15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#993300").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAHAAAOQAAAJgLAIQgFADgPAGIgcAMQAEAFAFACQAGACAIAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIAUgIIASgKQgHgEgJAAQgHAAgGAGg");
	this.shape_9.setTransform(52.3,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#993300").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQAAgFADgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_10.setTransform(43.1,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#993300").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQAMAHAAAOQABAJgLAIQgFADgPAGIgcAMQADAFAHACQAFACAHAAQAMABAIgFQAIgFAEAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgDAKIAUgIIASgKQgHgEgJAAQgHAAgGAGg");
	this.shape_11.setTransform(33.7,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#993300").s().p("AgIBFQgDgEAAgEIAAh5QAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGIAABzQAAASgMgBQgFABgDgEg");
	this.shape_12.setTransform(26.3,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#993300").s().p("AgkBGQgDgDAAgFIAAghIAAghIgBghIgCgRQAAgIADgFQAFgGAGAAQAFAAADADQADAEABAEIAAABIALgFQAFgBAGAAQAVAAAJARQAGANABAUQAAATgMAMQgLAOgUAAIgPgCIAAAkQAAAFgDADQgEAEgFAAQgGAAgDgEgAgEgpQgGACgGAGIABAjQAIACAHAAQAJAAAFgFQAEgGABgKIgBgQQgDgLgJAAQgFAAgFADg");
	this.shape_13.setTransform(19.2,19.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#993300").s().p("AgHAzQgDgEAAgFIgCgdIgCgdIgBgIQgLAFgKAOIgBACIgBAbIAAAHIAAAGQAAAEgEADQgEADgFAAQgHAAgDgHQgCgEAAgKIAAgfIAAgNIAAgNQAAgIACgGQAEgIAGAAQAFAAAEAEQAEADAAAFIgBAHQANgPAMAAQAOAAAFAKQAFgEAHgDQAGgCAIAAQARAAAGARQACAEACAUIAGAuQABAFgEAEQgEADgFAAQgKAAgCgKIgDgaIgDgYQgCgQgEAAQgCAAgHAEIgLAHQAAAKADASQACATAAAJQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_14.setTransform(7.4,17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#993300").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_15.setTransform(-4.5,17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#993300").s().p("AgmA2QgNgOAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_16.setTransform(-14.6,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#993300").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAHAAAOQAAAJgLAIQgFADgPAGIgcAMQAEAFAFACQAGACAIAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIAUgIIARgKQgGgEgJAAQgHAAgGAGg");
	this.shape_17.setTransform(-33.2,17.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#993300").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_18.setTransform(-43.2,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#993300").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_19.setTransform(-54.6,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.1,0,212.1,29.1);


(lib.text_large = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAvQgNgEgKgKQgOgPgDgQQgCgSAOgOQAQgQATgDQAUgCAQAPQALALADALQAFAOgKAJQgGAGgOgCQgGgBgPgGIgdgKQAAAEADAGQACAGAFAGQAJAIAIADQAIACADADQAHAGgGAGQgEAEgGAAQgEAAgHgDgAgMgWIATAIIAUAHQgCgHgGgHQgGgGgIAAQgHAAgKAFg");
	this.shape.setTransform(36.8,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2AqQgZgYAKgKQADgDAFAAQAEAAADAEIAHAJIAJAKQAJAJAKgBQAJgBANgMQgGABgFgDQgGgCgFgFQgMgNAAgOQAAgQANgNQARgRAUAAQAVAAASATQAGAGADAFQADAFAAAGQAGAJgIAIIgNAKQgRAMgRAQQgVATgOADIgGABQgRAAgRgSgAAUgkQgLABgJAKQgHAHgCAHQAAAGAFAFQAEAFALgBQALgBAGgEIAVgPIgCgGIgDgFQgKgJgLAAIgDAAg");
	this.shape_1.setTransform(27.9,35.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgzAiQgEgEAAgFQAAgEAEgDIAogoIAHgFIAEgGQAEgDAEgBQAFAAAEAEQAHAHgGAIQATADANANQANAMgRAQIgEAEQgKAJgIgIQgIgIAIgIIAGgGQgQgLgRAFIggAfQgDAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(23.3,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA1QgFAAgEgDQgDgDAAgMIgOgGQgGgDgDgDQgPgPAAgOQABgQAQgQQAPgPAUABQAWAAAQAPQAGAGAEALQAFAOgFAFQgCABgDAAIgIAGIgIAIQgMAMgEAHIgDAJIgEAJQgCACgDAAIgBAAgAgSgUQgIAIgBAHQgBAGAGAGQAEAEAEADQAFACAGAAQALgQAIgHIAFgEIAGgFIgBgDIgBgCQgJgIgNAAQgMAAgJAJg");
	this.shape_3.setTransform(16.8,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyAzQgEgEAAgEQAAgFAEgEIBUhUQAEgEAFAAQAEABAEADQAEAEAAAEQAAAFgEAEIhRBRQgHAHgFAAQgEAAgEgEg");
	this.shape_4.setTransform(13.2,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.1,54.1);


(lib.text_innertubes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape.setTransform(87.5,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQANAHABAOQAAAJgLAIQgFADgPAGIgdAMQAEAFAGACQAHACAHAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgEgKAAQgIAAgFAGg");
	this.shape_1.setTransform(78.1,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhjQAAgGADgFQADgGAHAAQAJAAAAALIAAADIgBADIAAAiQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAVgOAOQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAFAJABQAKAAAHgIQAIgHAAgMQAAgMgGgGQgHgIgKABQgDgBgGADg");
	this.shape_2.setTransform(67.9,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AASArQgMAFgLAAQgMAAgJgGQgJgFgCgNQgEgVAAgQQAAgMADgPQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBANIABAUQAAAJACAGIAEACIAEAAQAJAAAMgCIAAgQIgBgNQAAgTACgNQABgKALAAQAFAAAEADQAEAEgBAEIgBAfIAAARIAAASIAAAFIAAAGQAAAEgDAEQgEADgFAAQgHAAgDgHg");
	this.shape_3.setTransform(57.8,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgMgCAAgKQAAgFAEgDQADgEAGAAIAOABIAAgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACAAAIQABAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgMAAQgEAAgEgDg");
	this.shape_4.setTransform(48.9,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQASAAAAAXIAAAGQgBANgMAAQgKAAgBgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_5.setTransform(40.5,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQANAHABAOQAAAJgLAIQgFADgPAGIgdAMQAEAFAGACQAHACAHAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgEgKAAQgIAAgFAGg");
	this.shape_6.setTransform(30.9,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AASApIgDgSIgBgTIABgGIAAgJIAAgCIAAgFQAAgHgDAAQgIAAgGAJQgHAKgEAOIgBAIIgBAIIAAAIIgBAIQAAAFgDADQgEADgFAAQgFAAgEgDQgDgDAAgFIgBgIIAAgIIABgYIABgWIAAgIIAAgIQAAgFADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAASIAAAHIAAAFQAAAGACALQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape_7.setTransform(21.4,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AASApIgDgSIgBgTIABgGIAAgJIAAgCIAAgFQAAgHgDAAQgIAAgGAJQgHAKgEAOIgBAIIgBAIIAAAIIgBAIQAAAFgDADQgEADgFAAQgFAAgEgDQgDgDAAgFIgBgIIAAgIIABgYIABgWIAAgIIAAgIQAAgFADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAASIAAAHIAAAFQAAAGACALQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape_8.setTransform(12,17.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgKBAQgEgEABgEIgBgQIAAgRIABgUIABgSQAAgFADgDQAEgDAEAAQAFAAADADQADADABAFIgBASIgBAUIAAARIAAAQQAAAEgDAEQgEADgEAAQgFAAgDgDgAgIgsQgDgDgBgGQABgFADgEQAFgEAFAAQAFAAAFAEQADAEAAAFQAAAGgDADQgFAEgFAAQgFAAgFgEg");
	this.shape_9.setTransform(4.9,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.1,29.1);


(lib.text_found = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAYBCQgGAEgGABIgMABQgUAAgNgNQgNgMAAgUQAAgYANgOQANgOAVAAQAGAAAGABIAJAEQABgdABgLQACgLAKAAQAFAAADADQADAEAAAEIgCAnIgCAlQAAAfACALIABADQAAAEgEAEQgDADgFAAQgHAAgDgGgAgRAEQgHAHAAAQQAAAJAHAGQAHAIAKgBQAFABAEgCIAIgGIADgDIAAgfQgDgGgFgCQgEgDgHAAQgMAAgGAHg");
	this.shape.setTransform(44.6,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AASApIgDgSIgBgTIABgGIAAgJIAAgCIAAgFQAAgHgDAAQgIAAgGAJQgHAKgEAOIgBAIIgBAIIAAAIIgBAIQAAAFgDADQgEADgFAAQgFAAgEgDQgDgDAAgFIgBgIIAAgIIABgYIABgWIAAgIIAAgIQAAgFADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAASIAAAHIAAAFQAAAGACALQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape_1.setTransform(34.8,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AASArQgMAFgLAAQgMAAgJgGQgJgFgCgNQgEgVAAgQQAAgMADgPQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBANIABAUQAAAJACAGIAEACIAEAAQAJAAAMgCIAAgQIgBgNQAAgTACgNQABgKALAAQAFAAAEADQAEAEgBAEIgBAfIAAARIAAASIAAAFIAAAGQAAAEgDAEQgEADgFAAQgHAAgDgHg");
	this.shape_2.setTransform(25.3,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_3.setTransform(15.9,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgQBKQgEgDAAgFIABgCQACgNAAgLIAAgrIgGABIgFABQgGAAgDgEQgEgDABgFQgBgIAJgDIAPgBIABgKQADgUAJgJQAIgMAVAAQAQAAABALQAAAMgPAAQgLAAgEAHQgFAGgBALIAAADIARgBQARAAAAALQAAAMgSgBIgRABIAAAXIABAXQAAARgCAJQgCAJgJAAQgFAAgEgDg");
	this.shape_4.setTransform(6.6,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,52,29.1);


(lib.text_complement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgGAAIgEAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape.setTransform(93.4,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AASApIgDgSIgBgTIABgGIAAgJIAAgCIAAgFQAAgHgDAAQgIAAgGAJQgHAKgEAOIgBAIIgBAIIAAAIIgBAIQAAAFgDADQgEADgFAAQgFAAgEgDQgDgDAAgFIgBgIIAAgIIABgYIABgWIAAgIIAAgIQAAgFADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAASIAAAHIAAAFQAAAGACALQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape_1.setTransform(84.6,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQANAHABAOQAAAJgLAIQgFADgPAGIgdAMQAFAFAFACQAHACAHAAQALABAIgFQAIgFAEAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgEAKIAUgIIASgKQgFgEgKAAQgIAAgFAGg");
	this.shape_2.setTransform(74.6,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgHAzQgDgEAAgFIgCgdIgCgdIgBgIQgLAFgKAOIgBACIgBAbIAAAHIAAAGQAAAEgEADQgEADgFAAQgHAAgDgHQgCgEAAgKIAAgfIAAgNIAAgNQAAgIACgGQAEgIAGAAQAFAAAEAEQAEADAAAFIgBAHQANgPAMAAQAOAAAFAKQAFgEAHgDQAGgCAIAAQARAAAGARQACAEACAUIAGAuQABAFgEAEQgEADgFAAQgKAAgCgKIgDgaIgDgYQgCgQgEAAQgCAAgHAEIgLAHQAAAKADASQACATAAAJQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_3.setTransform(62.9,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAHAAAOQAAAJgLAIQgFADgPAGIgdAMQAFAFAFACQAHACAHAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgEgKAAQgHAAgGAGg");
	this.shape_4.setTransform(50.6,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgIBFQgDgEAAgEIAAh5QAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGIAABzQAAASgMgBQgFABgDgEg");
	this.shape_5.setTransform(43.1,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgkBGQgDgDAAgFIAAghIAAghIgBghIgCgRQAAgIAEgFQAEgGAGAAQAFAAADADQADAEAAAEIAAABIAMgFQAFgBAGAAQAUAAAJARQAIANAAAUQgBATgKAMQgMAOgUAAIgPgCIAAAkQAAAFgDADQgEAEgFAAQgFAAgEgEgAgEgpQgGACgGAGIABAjQAIACAHAAQAJAAAFgFQAEgGAAgKIgBgQQgCgLgJAAQgGAAgEADg");
	this.shape_6.setTransform(36.1,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgHAzQgDgEAAgFIgCgdIgCgdIgBgIQgLAFgKAOIgBACIgBAbIAAAHIAAAGQAAAEgEADQgEADgFAAQgHAAgDgHQgCgEAAgKIAAgfIAAgNIAAgNQAAgIACgGQAEgIAGAAQAFAAAEAEQAEADAAAFIgBAHQANgPAMAAQAOAAAFAKQAFgEAHgDQAGgCAIAAQARAAAGARQACAEACAUIAGAuQABAFgEAEQgEADgFAAQgKAAgCgKIgDgaIgDgYQgCgQgEAAQgCAAgHAEIgLAHQAAAKADASQACATAAAJQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_7.setTransform(24.3,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_8.setTransform(12.3,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgmA2QgNgOAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_9.setTransform(2.2,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,0,105.3,29.1);


(lib.text_bub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhjQAAgGADgFQADgGAHAAQAJAAAAALIAAADIgBADIAAAiQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAVgOAOQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAFAJABQAKAAAHgIQAIgHAAgMQAAgMgGgGQgHgIgKABQgDgBgGADg");
	this.shape.setTransform(28.2,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AASArQgMAFgLAAQgMAAgJgGQgJgFgCgNQgEgVAAgQQAAgMADgPQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBANIABAUQAAAJACAGIAEACIAEAAQAJAAAMgCIAAgQIgBgNQAAgTACgNQABgKALAAQAFAAAEADQAEAEgBAEIgBAfIAAARIAAASIAAAFIAAAGQAAAEgDAEQgEADgFAAQgHAAgDgHg");
	this.shape_1.setTransform(18.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgrBDQgEgFAAgFIAAhbIAAgMQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAFgIAGQAJAEAHAIQAHAKAAAJQAAALgNALQgIAHgKAEQgTAHgfAAQgGAAgEgEgAgXAvQAPAAARgGQAPgEAAgFQAAgHgKgFQgHgFgHAAIgXgBgAgXguIAAATIAAASIAMABQAagDAAgRQAAgGgIgGQgHgHgJABIgOAAg");
	this.shape_2.setTransform(8.1,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.6,29.1);


(lib.staticgraybox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("A/PKUIAA0nMA+fAAAIAAUng");
	this.shape.setTransform(200,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,132);


(lib.static_mick_arm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AACAlQgCgCgDgCQgHgdAOgiQAAgDACgD");
	this.shape.setTransform(8.5,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AEHhKQg7gMgegfQgPgPgRgKQghgTghgRQgLgGgNgCQgWgFgYAEQglAHgfAZQgfAYgQAiQgEAIgEAIQgDAGgEAHQgJARgLAPQgUAdgHAgQgCAHgCAGQAAAAAAAAQgJAXgSAGQgLAEgMABQgqABAGAkQALALAFABQAHgNAZAAQAFAAAEABAiqBnQgLgCgOANQAAAAAAAAQgEgDgFgCQgLgQAKgNAiqBoQAAAAAAgBAitBuQgDAOAfAHQANADALACQABAAABAAQARADANgBQAMgvgXgRQgDgCgDgCQAAAAgBAAQAAgBAAAAQgDgCgEgBQgBgBgCgBQAEgDAEgFQAlgqAagKQAZgKASgeQAOgZAPgUQACgEADgDQACgDABgCAh7BgQgLAAgRgKQgOAKgFAHAh1BAQgPgJADgRAAfhYQACAEgBADQgGAaAIAUQAEAJAGAIQAEAFAEADQAVAQAgABQAEABAgAiAjeCrQABACABABQARAdAdgYQgBAAAAgBAj1B5QgGALAGASQAFAPANgDQADAFACAEAiuCzQAfAWATghQALgRgGgPAjDByQgXAVgEAk");
	this.shape_1.setTransform(26.3,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AhTAvQAgAjBAgRQBCgQAFgtQAEgtgygc");
	this.shape_2.setTransform(48.7,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AjzCuIgCgDQAEgkAXgVQgEgDgFgCQgFgIAAgIQAAgHAFgGQgFAGAAAHQAAAIAFAIIgIgBQgaAAgHANQgFgBgLgLQgGgkArgBQALgBALgEQASgGAJgXIAAAAIAEgNQAIggAUgdQAKgPAKgRIAHgNIAIgQQAQgiAfgYQAfgZAlgHQAXgEAXAFQAMACAMAGQAhARAgATQARAKAPAPQAeAfA7AMQAyAcgFAuQgEAshCAQQhCARgfgjQgggigDgBQghgBgUgQIgIgIQgHgIgEgJQgIgUAGgaQABgDgCgEIAEgFIgEAFIgFAHQgOAUgPAZQgSAegZAKQgaAKglAqIgIAIIAEACIAGADIABABIAAAAIAHAEQAWARgMAvQgNABgRgDQAGAPgKARQgUAhgfgWIgBgBIgFgEQgDgKAAgJQAAgWAKgXIADgGIAAAAIAAgBQAFgHAOgKIAEACQAKAGAIABIAGABIAAAAIAAAAIABAAIgBAAIAAAAIAAAAIgGgBQgIgBgKgGIgEgCQgOAKgFAHIgEAAIAAAAIAAAAQgJAAgLALIgBAAIABAAQALgLAJAAIAAAAIAAAAIAEAAIAAABIAAAAIgDAGQgKAXAAAWQAAAJADAKIAFAEIABABQgNALgLAAQgNAAgJgQgAioCDIAYAFIACAAIgCAAIgYgFQgcgHAAgMIAAgCIAAACQAAAMAcAHgAiMBAQgMgIAAgNIAAgFIAAAFQAAANAMAIgAj1CrIgEgJQgNADgFgPQgGgSAFgLQAHgNAaAAIAIABQAFACAEADQgXAVgEAkIAAAAgAjjBtIAAAAgAjBBoIAAAAgAjBBnIAAAAg");
	this.shape_3.setTransform(28.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,59.2,40);


(lib.static_mick_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgcAVQATgfAlgK");
	this.shape.setTransform(4.7,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AhYANQAEgCAEgCQACgBABgBQADgBADgBQANgFAPAAQAngEAmAEQALACAKAAQAZABARgDQAQgwAcgRQAFgEAIgBQAmgFAjANQAjAMgNAYQgEAJAFAJQAKAOgPAGQgXAIABAYQAAApgnACQgZABgWgNQgfgTgkAVQgIAEgHAFQgWAOgVASQgbAWgjAIQgHABgGABQgfAGggAJQgeACgfgkQgMgPgHgJQgCgCgBgBQgIgLgBAAQgSgegJgjQgKgjADgoQACgnAPghAiyihQBDgNACAqQABAqgCAFQAOBDAIAfQgLAHgKAK");
	this.shape_1.setTransform(25.4,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("Ai7CDIgTgYIgDgDIADADIgEgCIgCgDIADACIgJgLQgSgegJgjQgKgjADgoQACgnAPghQATggAmgKQBDgNACAqQABAqgCAFQAOBDAIAfIAIgEIADgCIAGgCQAOgFAOAAQAngEAmAEIAVACQAZABARgDQAQgwAcgRQAFgEAIgBQAmgFAjANQAjAMgNAYQgEAJAFAJQAKAOgPAGQgXAIABAYQAAApgnACQgZABgWgNQgfgTgkAVIgPAJQgWAOgVASQgbAWgjAIIgNACQgfAGggAJIgCAAQgdAAgegigAhtAeQAKgKALgHQgLAHgKAKg");
	this.shape_2.setTransform(25.4,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,52.8,35.1);


(lib.sam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AGdjkQgKgQgMgPQgLgOgKgOQgKgNgMgLQgPgMgMgNQgOgOgKgPQgIgLgLgKQgQgJgTgFQgRgFgSgGQgRgGgRgEQgRgFgTAAQgTAAgTgBQgSgBgTAAQgTgBgTgBQgTAAgQACQgSADgQADQgTAEgSAFQgTAGgTAFQgSAEgRAIQgSAIgPAIQgRAJgOAJQgPAKgOAKQgQAKgQALQgQALgNANQgNANgMAPQgMAPgLAQQgKAOgKAPQgLAPgKAQQgLAPgFARQgEAQgEAPQAAABAAACQgFARgEASQgEATgGASQgGASgCATQgCASgBASQgBAUACATQADATAGARQAFATAGASQAFASAHARQAHARAJAOQAHAPANAMQAMALANANQANAOAOAOQAOAOAOAMQANANAOANQANAMAPAKQAPAJAQAGQARAGARAFQASAGARAGQASAHAQAEQARAFASACQAUACATABQATACATAAQASAAATgCQASgCARgCQATgDASgCQAJgBAJgCQASgFATgFQASgFARgHQAQgHARgKQAQgLAPgMQAPgMAOgMQAPgOALgLQAGgHAFgHQABgCACgBQAJgOAKgNQALgPAIgOQAKgPALgRQAKgPAJgRQAJgQAIgSQAHgRAGgQQAGgSAEgTQADgQAAgRQAAgUgDgSQgCgTgCgTQgCgSAAgTQABgUgCgTQgCgSgDgTQgBgUgGgSQgGgSgLgPgADNCWQABgEACgDQAEgIADgIQACgEACgFQADgJACgJQACgKACgIQACgJACgJQABgIADgKQADgJAAgJQABgKACgKQADgIABgJQABgJABgJIAAgBQAAgCAAgBQAAgIgCgHQgDgJgDgJQgEgJgEgIQgEgJgDgJQgEgJgFgIQgFgJgEgIQgFgHgDgIQgEgIgFgIQgFgHgHgHQgDgDgDgDQgGgHgGgHQgFgGgFgGQgCgBgBgBQgEgFgEgGQgFgIgHgFQgIgFgIgEQgIgEgJgDQgIgDgJgDQgIgDgJgCQgJgBgJgBQgKgBgJgDQgJgDgJgCQgCAAgCAAQAEADAFABQADABAEABQACABADABQACACADABQAIAFAGAGQAIAGAIAGQAMAKAFAIQgDgBgEgCQgIgDgIgEQgTgIgSABQADADADADQAJAJAFAEQgHgGgHgDQgHgEgHgDQgBAKgBAKQgBAJgCAJQAAACAAABQgBAIgDAHQgBAEgCADQgEgEgGgFQgGgHgIgEAiIjJQAAAAABgBQAFgIAFgHQAFgIAGgHIAAAAQAGgFAHgDQAIgFAKACQAJACAJACQAJABAJACQAHABAFACQgDgJgIgFQAMgCANAEQAHACAIADQAGACAEACQABAAABAAAABkSQgHgBgHAAQgJAAgJACQgKACgJADQgJADgJACQgJACgJACQgJACgJAEQgIADgIAFQgIAFgGAFQgGAGgHAGQgCABgBABQgGAEgFAEQgBAAAAAAQgCABgBABQgCABgBABQgDABgEABQgFACgEADQgGAFgFAGIgBABQgCACgDACQgBABAAAAQADAJAAALQAAAIgCAJQgKAogWAZQAAAAAAABQAAACAAACQAEgBAEgBAgYjHQAIgFAIAGQADACAGABAgFgkQAEgIACgGQADgHAFgHQAFgHAIgHQAHgGAKgDQAIgDAJABQAJAAAIAFQAGAEAHAHQAHAHAEAGQACABABACQAFgIAGgHQAGgGAIgGQAHgHAIgCQAJgCAKAAQAJABAGAHQACACADACQAGAHADAIQAEAIADAJQACAJABAJQACAJAAAKQABAKgBAJQgCAJgBAKQgBAHAAAIQgCAHAAAJQABAJAAAKQAAAJAAAKQAAAKAAAKQgBAKABAJQAAAFACAEQAEADAEAGAgGitQABAAAAABQABAAAAABQACADACABQgCAGgEAEQgGAGgIACQgBAAAAABQgLADgLgBQgEAAgCgCAgUiVQgBADABACQAAAKgEAHQgDAIgFAHQgBACgCABIAAABQAAAAgBABQgEAFgFADQgHAFgJADQgIADgIACQgJADgKABQgKAAgJABQgCAAgDABQAEAHAGAHQAGAHAHAFQAGAGAIAFQAIAFAHAFQACABABABQACAAACAAQACAAADAAQAJgBAJgCQAJgDAJgCQAGgBAHADQABAAABABQABAAAAABQACABACACQAAAAgBABQgGAFgIADQgHADgJAEQgIAEgJACQgKADgIADQgJAEgGAFQAJABAKgBQAJgBAJgDQAJgBAJgDQAHgDAGgDQABgBABAAQAKgGAFAGQADACgDAEQgEAGgIAEQgBAAgBABQgHACgIACQgHACgIACQgCAAgBABQgIABgIADQgBAAgBABQgMAFAMABQABAAACAAQACAAACAAQAKgBAKgBQAJAAAHgDQAFgCAFAAQABAAABAAQAEAAgBAFQAAADgBADQgDAFgGACQgJAEgJACQgJACgJgBQgCAAgBAAQgCAAgBABQgGABgCAEQgBACAAADQABAGgBAEQgBACgBACQgGAEgGADQgJADgHAGQgIAEgGAHQgFAEgEADAAYB+QgCgHgBgGQgCgJgBgKQgCgJgBgKQgBgJAAgJQgBgKAAgJABuA4QABgGABgFQAAgBAAgBQACgJABgJQACgKAAgJQAAgIgCgJQgBgJgDgJQgCgJgDgHQgDgGgDgGACYCiQgEgGgFgGQgEgHgFgJQgFgIgEgJQgEgJgDgJQgDgIgBgJQgCgJgBgKQgBgDAAgEQAAACgBACQgCAKAAAJQgBAFgBAFQAAABAAAAQAAAJABAJQABAHABAIQACAJAAAKQAAAKgCAKQgBAJgBAKQgCAKABAJQABAEABAEQAJAHAIgGQAIgFAGgHQAFgHAEgJQAEgJABgJQAAAAAAgBgAi5ipQgDgIADgHQAEgIAHgHQAEgEAEgBQAEgBAFACQACABABABQABABAAABQADAEgCAHAiljTQgCABgBAAQgDABgEACAiMjIIAEgBQgBADgCACQgBgCAAgCgAiWjdQADAEACAFQADAFACAHAhZjBQAGgIAKgBQAKgBAJACQADAAAEABAiZjHIANgBAkagbQAAgBABgCQACgFACgGQAEgHADgHQADgJADgJQADgIADgIQADgJAEgIQADgJAEgJQADgIAEgJQAFgJAFgHQAFgHAGgGQABgBAAAAQABgBABgBQAFgGAGgGAjphOIgBAAQgIADgGAGQgGAGgHAHQgGAHgGAIQgFAGgEAIQAAAAAAABQgBAAAAABQABgBAAgBAkbgZQAAABgBABQgDAEgDAFQgEAIgGAHQgGAIgFAIQgEAIgEAIQgBACAAABQgFAIgDAKQgCAJgCAJQgDAJgBAJQgBAHAAAHQAAABABACQABAHACAHQABADACACQAHANAHANQAFAHAFAHQAFAHAHAFQAHAFALACQAIABAIAAQAJAAAKABQAJAAAJgDQAFgDAFgCQADgCADgCQAHgFAIgEQAIgFAGgGQAHgHAGgGQAHgHAIgFQAHgGAHgGQAGgGAIgEQACgCACgBQAAAAABgBQAQAgABAIQABAJAFAHQAFAJAGAFQAHAHAJAEQAJAEAKACQAJACAKAAQAJABAJgBQAIAAAFgDQAAAAABgBQAAABAAABQgDAIgGAGQgHAGgFAIQgFAIgGAIQgFAHgFAHQgFAJgHAFQgDADgEgBQgBAAgBAAQgHgBgIgCQgIgDgJgCQgJgCgJgDQgJgCgJgEQgJgEgIgFQgIgFgIgGQgIgFgHgFQgIgFgGgGQgIgGgGgHQgFgGgEgHAhgh2QAJAAAJACQAJABAKABQAIAAAFgDAh4hQQgGADgDAHQgEAIgBAKAi5ipQAAABABACQAEAIAHAFQAIAEAKgBQAFgBAEgEAjHilQAIgCAGgCAhBgfQgBgBgCAAQgEAAgEAAQgJgCgGAEQgJAFgCAJQgDAIgCAIQgCAJgCAJQgCAJgBAKQgBAIgBAJQAAABAAABQgBAAgCABQgJABgKABQgJACgIACQgJADgJADQgJACgIADQgJADgGAEQgHAFgIAFQgJAFgIAEQgIAEgJACQgJACgKgCQACgFAEgEQAFgIAFgHQAFgIADgIQAEgHADgIQADgIAAgJQABgIgBgJQgBgIABgJAg6EJQAAAAABABQAIABAIAAQAIAAAJAAQAKAAAJAAQAIAAAJgBQAKAAAJAAQAKABAJgBQAFAAAFgBQAEgBAFgBQAJgDAJgCQAHgCAGgCQAGgFAJgDQAIgEAHgGQAHgGAGgFQAGgHAGgGQAHgGAGgHQAGgHAEgGQAFgHAHgGQAFgGAFgJQACgEADgEADFCNQgDgCgCgBQgJgFgJADQgKADgFAHQgFAHgCAJAACC+QAEgJADgHQAEgIADgIQAEgJADgKQABgGAAgHAA8EJQgHgDgEgIQgEgIgCgJQgBgJAAgJIAAAAQAAgGAAgGQAAgKAAgJQAAgDAAgDQgBgKgDgJQgDgJgDgIQgDgIgDgIQgBgCgBgC");
	this.shape.setTransform(45.2,43.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AAuBQIgBAAIgPgDIgRgFIgSgFQgJgCgIgEQgJgEgIgFIgRgLIgPgKIgOgLQgHgGgHgHQgFgGgEgGIAGgEIAPgJQAIgFAHgGIANgNIAOgMIAOgMQAHgGAHgEIAEgDIABgBQAPAhABAHQACAJAEAHQAFAJAHAFQAHAHAJADQAIAEAKACQAJACAKAAIATAAQAHAAAGgDIACgBIgBACQgDAIgGAGQgIAGgFAIIgKAQIgKAOQgGAJgGAFQgDADgDAAIgCgBg");
	this.shape_1.setTransform(34.7,61.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3D28D").s().p("AB0D2QgFgIgBgJIgBgSIAAAAIAAgMIAAgTIAAgGQgBgKgEgJIgFgRIgGgQIgCgEIgDgNIgEgTIgCgTIgBgSIgBgTIABATIABASIACATIAEATIADANQAAAHgBAGQgDAKgEAJIgIAQIgHAQQgFADgIAAIgSAAQgLAAgIgCQgKgCgIgEQgJgEgHgHQgGgFgFgJQgFgHgBgJQgCgHgQggIAAAAIgEADQgIAEgGAGIgPAMIgOAMIgNANQgHAGgHAFIgPAJIgGAEIgKAFQgJADgKAAIgTgBIgQgBQgKgCgIgFQgGgFgFgHIgKgOIgPgaIgCgFIgDgOIgBgDQgBgHACgHIADgSIAFgSQACgKAGgIIABgDIAIgQIALgPIAKgQIAGgJIABgCIABgBIAAgBIAJgOIAMgPIANgNQAGgGAIgDIAAAAIAAgEIAAgBQAXgZAKgoQACgJAAgIIAOgDQgDgIADgIQAEgIAHgHQAEgEAEgBQAEgBAFACIADADIABABIANgBIABAEIADgEIABgCIAJgPQAFgIAGgGIAAgBIAOgIQAIgFAKACIARAEIASADIAMADQgDgJgIgFQALgCAOAEIAOAFIAMAEIABAAIgBAUIgDASIgBADIgKgDIAAgBQgEgCgDAAIgBAAIAAAAQgEAAgDABIAAABIgBAAIABAAIAAgBQADgBAEAAIAAAAIABAAQADAAAEACIAAABIAKADQgBAIgDAHIgDAHIgKgJQgGgHgIgEQAIAEAGAHIAKAJIABABIABABIAEAEQgCAGgFAEQgGAHgIACIAAAAQgIACgJAAIgGAAQgDAAgCgCQACACADAAIAGAAQAJAAAIgCIAAAAIABAEQgBAKgDAHQgDAIgFAHIgDAEIAAAAIgBABIgJAIQgHAFgJADIgPAFQgJADgKABIgTABIgFABQAEAIAGAGQAGAHAGAFIAPALIAPAKIAAACIgIgBIAAAAIgDAAIgBgBIgBAAIAAAAIgBAAQgFABgEABIAAABQgKAFgBAJIgFARIgEARIgEATIgBARIgBACIgCABIgTACIgRAEIgSAGIgRAFQgJADgGAEIgPAKIgRAJQgIAEgJACIgEAAIgGABIgBAAIAAAAIgIgBIAFgJIALgPQAFgIADgIIAGgPQAEgIAAgJIAAgGIAAgLIgBgIIABgIIgBAIIABAIIAAALIAAAGQAAAJgEAIIgGAPQgDAIgFAIIgLAPIgFAJIAIABIAAAAIABAAIAGgBIAEAAQAJgCAIgEIARgJIAPgKQAGgEAJgDIARgFIASgGIARgEIATgCIACgBIABgCIABgRIAEgTIAEgRIAFgRQABgJAKgFIAAgBQAEgBAFgBIABAAIAAAAIABAAIABABIADAAIAAAAIAIABIACAAIADAAIAGAAQAJgBAJgCQAJgDAJgCQAGgBAGADIADABIABABIAEAEIgBAAQgGAFgJADIgPAHQgIAEgJACIgSAGQgIAEgGAGQAJABAJgBIARgEIASgFIAOgGIACgBIABgBQAEgCADAAIAAAAIABAAQADAAAEADQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBADQgFAHgIAEIgCABIgQADIgPAEIgDABIgQAEIgBABQgFADAAABQAAACAFAAIACAAIAFAAIATgCQAKAAAHgDIAKgCIACAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABIAAABIgCAGQgCAFgGACIgSAGIgBAAIgNABIgBAAIAAAAIgDAAIAAAAIgEAAIgDABQgFABgCAEIgBADIAAACIAAAFIAAAFIgCAEQgFAEgHADQgIADgHAGQgIAEgGAHIgKAIIAKgIQAGgHAIgEQAHgGAIgDQAHgDAFgEIACgEIAAgFIAAgFIAAgCIABgDQACgEAFgBIADgBIAEAAIAAAAIADAAIAAAAIABAAIANgBIABAAIASgGQAGgCACgFIACgGIAAgBQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgCAAIgKACQgHADgKAAIgTACIgFAAIgCAAQgFAAAAgCQAAgBAFgDIABgBIAQgEIADgBIAPgEIAQgDIACgBQAIgEAFgHIABgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQgEgDgDAAIgBAAIAAAAQgDAAgEACIgBABIgCABIgOAGIgSAFIgRAEQgJABgJgBQAGgGAIgEIASgGQAJgCAIgEIAPgHQAJgDAGgFIABAAIgEgEIgBgBIAHgOIAHgOQAGgHAIgHQAHgGAKgDQAHgDAKABQAJAAAIAFQAGAEAHAHIALANIACAEQAGgJAGgHIAOgMQAHgHAIgCQAIgCALAAQAJABAGAHIAFAEQAGAHADAIQAEAIADAJIADASIACATQABAKgCAKIgCASIgBAPQgCAHAAAJIABATIAAATIAAAUQgBAKABAJIABAJQAFAEADAFIgEAIQgFAJgGAGQgGAGgFAHIgKANIgNANIgMANIgNALQgHAGgIAEQgKADgFAFIgNAEIgSAFIgJACQgIgDgDgIgACwA0IgCATIgCAKIAAABQAAAJABAJIACAPQACAJgBAKQABAKgCAKIgCATQgCAKABAJIACAIQAIAHAJgGQAIgFAGgHQAFgHAEgJQAEgJABgJIAAAAQACgJAFgIQAFgHAKgDIAAAAIAAAAIAHgBIAAAAIAAAAQAFAAAFADIABAAIAEADIgEgDIgBAAQgFgDgFAAIAAAAIAAAAIgHABIAAAAIAAAAQgKADgFAHQgFAIgCAJIgJgNIgJgQIgJgRIgIgSIgDgRIgDgTIgBgHIgBAEgAC2ARIgDASIAAACIgCALIACgLIAAgCIADgSIABgSIgBgSQgBgJgDgJIgFgQIgHgLIAHALIAFAQQADAJABAJIABASIgBASgAg+hOQgFAIgBAKQABgKAFgIQACgHAHgDQgHADgCAHgAinhWIAJgCIgJACgAAJh6QAFAAAFgCIABgBIgBABQgFACgFAAIgBAAIAAAAIAAAAIgBAAIgTgCQgIgCgKAAQAKAAAIACIATACIABAAIAAAAIAAAAIABAAgAhdieIAFAAQAFgBAEgEQgEAEgFABIgFAAIAAAAIgBAAQgGAAgFgCIgBgBQgHgFgEgIIgBgCIABACQAEAIAHAFIABABQAFACAGAAIABAAIAAAAgAhWjEIACgFQAAgEgCgCQACACAAAEIgCAFgAgGjSQgLABgFAIQAFgIALgBIAAAAIAGAAIAAAAIAAAAIAKAAIABABIABAAIAHABIgHgBIgBAAIgBgBIgKAAIAAAAIAAAAIgGAAIAAAAg");
	this.shape_2.setTransform(38.5,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiKAjIABgBIAGgEIABgBIAKgLIAKgFIAGgCIADgBIADgCIABgBIALgHIAGAIIAEAMIgEgMIgGgIIADgCIAOgLIAOgLIAQgIIASgGIARgEIASgFIASgFIASgCIAPABIAKAFIAGABIAFACIAFAEQAIAEAHAGIAPAMQANAKAFAIIgHgCIgQgIQgTgIgSABIAFAGIAOAMQgHgFgGgDIgPgGIgBgBIgMgEIgPgFQgNgEgLACQAIAFADAJIgMgDIgRgDIgTgDQgKgDgHAFIgOAIIAAABQgGAGgFAHIgKAPIAAACIgFAAIAFAAIgEAEIgBgEIgMABIgBgBIgEgDQgEgCgEABQgEABgEAEQgHAHgEAIQgDAIACAIIgNADQAAgKgEgKg");
	this.shape_3.setTransform(38.8,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgnGtIgngDQgSgCgRgFQgQgEgSgHIgjgMIgigLQgQgGgPgJQgPgKgNgMIgbgaIgcgaIgbgcIgZgYQgNgMgHgPQgJgOgHgRQgHgRgFgSIgLglQgGgRgDgTQgCgTABgUIADgkQACgTAGgSIAKglIAJgjIAAgDIAIgfQAFgRALgPIAVgfIAUgdQALgQAMgPQAMgPANgNQANgNAQgLIAggVIAdgUQAOgJARgJIAhgQQARgIASgEIAmgLIAlgJIAigGQAQgCATAAIAmACIAlABIAmABQATAAARAFIAiAKIAjALQATAFAQAJQALAKAIALQAKAPAOAOQAMANAPAMQAMALAKANIAVAcIAWAfQALAPAGASQAGASABAUIAFAlQACATgBAUQAAATACASIAEAmQADASAAAUQAAARgDAQQgEATgGASIgNAhQgIASgJAQQgJARgKAPIgVAgQgIAOgLAPIgTAbIgDADQgFAHgGAHIgaAZIgdAYQgPAMgQALQgRAKgQAHQgRAHgSAFIglAKIgSADIglAFIgjAEQgTACgSAAIgmgCgAjMDAQAGAHAIAGIAOALIAPAKIAQALQAIAFAJAEQAJAEAJACIASAFIARAFIAPADIACAAIABABIAQABIARAAIATAAIARgBIATAAIATAAIAKgBIAJgCIASgFIANgEQAGgFAJgDQAIgEAHgGIANgLIAMgNIANgNIAKgNQAFgHAHgGQAFgGAFgJIAFgIIADgHIAHgQIAEgJIAFgSIAEgSIAEgSIAEgSQADgJAAgJQABgKACgKIAEgRIACgSIAAgBIAAgDQAAgIgCgHIgGgSIgIgRIgHgSIgJgRIgJgRIgIgPIgJgQQgFgHgHgHIgGgGIgMgOIgKgMIgDgCIgIgLQgFgIgHgFIgQgJIgRgHIgRgGQgIgDgJgCIgSgCQgKgBgJgDQgJgDgJgCIgEAAIgOgBIgSACIgTAFIgSAFIgSAEIgSAGIgQAIIgOAKIgNAMIgDACIgLAIIgBAAIgDACIgDABIgHADIgJAFIgLALIgBABIgFAEIgBABIgLAMIgCACIgBABIgLANIgKAQIgHARIgHASIgHARIgGAQIgGASIgHAOIgEALIgBADIgBACIgBACIgGAJIgKAPIgLAQIgIAQIgBADQgFAIgDAKIgEASIgEASQgBAHAAAHIABADIADAOIADAFIAOAaIAKAOQAFAHAHAFQAHAFALACIAQABIATABQAJAAAJgDIAKgFQAEAHAFAGg");
	this.shape_4.setTransform(45.2,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,92.5,88.2);


(lib.micksleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("AB7kBQAAAAgBABQgRAOgWASQgpAggUAtQgBACAAABQANAEANAEQABABABAAQARAHAQAJQAYAOAcALQAcAMAbALQAGADAGACAEhgBQADgGADgHQAOgkAQgeQATgkghgcQgagWghgSQghgTgggVQgegTgigOQAOgLALgKQgWgNgXgLQgIgDgIgEQghgPgagVQgdgYgagaAkmnhQgWAdgIAgQgKAkAEAnQADAkAXAaQANAPAPAKQAPAMAQAHQAiAPAkAPQAlAOAiANQAjAOAbAXQAAABAAAAQAHAGAFAGQAQATAIAZQAJAcAPgCQACAAACgBQABgBABgBQAPgYAEghQACgIACgGAEYAKQABgBAAgBQACgHAGgCAEYAKQAGgFADgFQAAAAAAgBAAViQQgEgBgEgBAANhIQAAgIgBgIQgCgeALgaAC9hHQggAZgSAdQgTAcgGAmQgGAmACAoQACAogMAkQgLAigSAiQgSAigVAcQgVAfgIAgQgGAbASALQAgAUAmgGQAngGAlAOQAiANAiAJQAjAKAhgPQAkgPgNghQgDgIADgIQAHgYgTgSQACg6gpAWQgGAEAAAKQgEAmgugBQgugBgGgnQgFgmAPgjQAOghAJgkQAJglAOgiQAOgjASgbQAUgdALgcABVFZQgYAPALAa");
	this.shape.setTransform(33.2,48.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AA+FuQgigJghgNQgkgOgoAGQgmAGgfgUQgUgLAHgbQAIggAWgfQAUgcATgiQASgiALgiQALgkgBgoQgCgnAGgmQAGgmASgdQATgdAfgZIALAFIgLgFIg3gXQgbgLgYgOQgRgJgRgHIgCgBIgagIIABgDQAVgtAoggIAoggIABgBQAhAOAdATQAhAVAgATQAhASAaAWQAiAcgUAkQgQAegOAkIgFANQgGADgDAHIAAACQgLAcgUAdQgTAbgOAiQgNAigKAlQgJAkgOAhQgOAjAGAmQAEAnAuABQAvABADgmQABgKAGgEQAogWgBA6QASASgHAYQgCAIADAIQANAhgkAPQgUAJgVAAQgOAAgOgEgAheESQgDgIAAgHQAAgQAQgKQgQAKAAAQQAAAHADAIg");
	this.shape_1.setTransform(49.9,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABVC4QgIgZgQgTIgMgMIAAgBQgbgXgigOIhHgbQgkgPgigPQgQgIgPgLQgPgLgNgNQgXgagDgkQgEgnAKgkQAIggAWgeIgBAIIAAACQAbAcAiATQAgATAkAPQAiAPAkgDQAlgEAegNIABABQAaAaAeAYQAaAVAhAPIAQAHQAXALAWANIgZAUIgBAAIgnAhQgpAggUAtIgBADIgIgCIAIACIAZAIIgDAOQgFAggPAZIgBACIgEAAIgCABQgOAAgJgagABoC4IABAQIgBgQIAAgLQAAgYAJgVQgJAVAAAYIAAALg");
	this.shape_2.setTransform(24,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,68.4,98.5);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOCIIAAkPIAdAAIAAEPg");
	this.shape.setTransform(1.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,27.2);


(lib.bracketdisplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_graphics_1 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_graphics_2 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_graphics_3 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_graphics_4 = new cjs.Graphics().p("AguEYIAAovIThAAIAAIvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:52.1,y:6.2}).wait(1).to({graphics:mask_graphics_1,x:83.6,y:6.2}).wait(1).to({graphics:mask_graphics_2,x:115.1,y:6.2}).wait(1).to({graphics:mask_graphics_3,x:146.6,y:6.2}).wait(1).to({graphics:mask_graphics_4,x:120.3,y:6.2}).wait(1));

	// right
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AJOByQg+i6lFA5QlFA5i+giQi/gihWhX");
	this.shape.setTransform(177,11.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AguEYIAAovIThAAIAAIvg");
	var mask_1_graphics_1 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_1_graphics_3 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:120.3,y:6.2}).wait(1).to({graphics:mask_1_graphics_1,x:147.6,y:6.2}).wait(1).to({graphics:mask_1_graphics_2,x:117.1,y:6.2}).wait(1).to({graphics:mask_1_graphics_3,x:86.6,y:6.2}).wait(1).to({graphics:mask_1_graphics_4,x:56.1,y:6.2}).wait(1));

	// left
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AJOhxQhgBKi2AvQi1AwlJg/QlJhBg+C6");
	this.shape_1.setTransform(59,11.4);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.6,-1.5,4,25.8);


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


(lib.Copyrightcopy = function(mode,startPosition,loop) {
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


(lib.anim_budroll2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// limbs
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AnImyQgNAWgkACQgNAAgDgKQgJgfAZgbQgKAGgPACQgpADAYgfQAVgbAhgIQgOgEgLgEQgLgEgDgIQgTgwBAAPQAtAKAVAkQAhgYAggZQAggXA2AAQAtAAAtAGQAxAGAoAPQApAPAmAZQAjAYASAqQARAoANAqQAIAXAIAZAnImyQAEgHACgKAlCmEQAMASgcAWQgQAMgTgHQgkgOALgnQgJAbgaAHQghAJACglQABgXAHgVArjkjQAagZApgOQAmgMAcAXQAgAZAmgKQATgFATAHQAoAPgQA8QgEAPgCAPQgDAAgCABArjkjQgDADgDADArYkbQgGgFgFgDAr/j6QgGgFgGADQAEADAIgBQAGAEAGAKAsLj8QgGgEACgIQALgvAhAUAqhiVQAIABAIABQAaADALgQQAcgpA1AQQAYAHAKgSAsai1QgFgEgHgIQABgpANAEQAKADAOAVAr/i6QgPAAgKAEQgBAAgBABArRiPQgBACgBACQgLAPgUADQgmAHgLgaQgNgfAWgKAqjhgQgEACgDACQAEgcAFgdQgcgCgUAIQAGgJACgOAnGgVQAvAIAmAcQAbAUAaAOQAPAIANALQgEADgEADQghAbgoARQgqASgvADQgnADglgEQgLgBgKgBQgygIgfgbQgegbgNgmQgOgnAGg1QACgSADgSAngjFQgEAfACAhQACAcAOAbQAQAdgEAcQgCAPgHAOAsYjmQAGgSAHgEAjBlyQAFgyggABQgPAAgMAFQgoANgjANQgFgGgLgHAiHE3QAaAOAQgFQABAAAAgBQAGA3gOAuQgGATgIAQQgBACAAABQgSARgWAIQgYAHgYAFQgTAFgTACQgwAHgrgGQgxgHgUgeQgDgEgCgEQgJgQgEgUQgJgrAGgxQAFguAmgdQAhgaApgbQAkgYAigVQAAACAAACQACgDAAgCQgBgFgBgFQABgpADglQADgqgbghQArgmAWArQAHALABANQgDAIgCAKQgBAEAAAEAhQBvQgCACgDAAAiKAvQAcgqAIAxQACAQgIALQAygtgOBCQgBAFgDACQgCACgCAAQAEABACgCQAbgpAGA0QABAJgJAGQgCABgBABQgHAFgGADAhsBRQgBABgBABQgCADgDACAiKAvQgBAFgBAEQgBAFgCAFAi2AWQAKgXAcADQALACgBATQgBANgDALAg0CKQAIAPABANQACAVgVASQgFAVADAWQADAVgIAZAHTBDQAegQAsAKQAPADAPAGQAcAKAbARQAlAYAoAYQAhAUAhAkQAdAhAJAvQAJA0ggAkQghAkgbAkQgYAegIAlQABAAABAAQAfAAALAUQAFAJgFAHQgTAagagOQAIAHAFAKQAGAMgOACQgoADgUgiQAEAMAKALQANANgKAKQgXAVgTgUQgVgXgTgSQgIgHgHgHQANATgEAjQg3ALgCgyQgCg8g3AGQgaADgLgNQgignBHACQAZABAJgLQATgVAHglQAJgsAOgnQAJgZgPgPQgbgbggALAK0H8IgBAAQgHAAgIAAAKzIsQgHgGgIgE");
	this.shape.setTransform(0.7,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AJjJbQgVgXgTgSIgPgOQANATgEAjQg3ALgCgyQgCg8g3AGQgaADgLgNQgignBHACQAZABAJgLQATgVAHglQAJgsAOgnQAJgZgPgPQgbgbggALIALgeIACgEQAEgYgCgaQgDgtgLgvIgDgMQAegQAsAKQAPADAPAGQAcAKAbARIBNAwQAhAUAhAkQAdAhAJAvQAJA0ggAkQghAkgbAkQgYAegIAlIgBAAIgPAAIAPAAIABAAIACAAQAfAAALAUQAFAJgFAHQgTAagagOQgHgGgIgEQAIAEAHAGQAIAHAFAKQAGAMgOACQgoADgUgiQAEAMAKALQANANgKAKQgMALgLAAQgKAAgJgKgAlMH3QgxgHgUgeIgFgIQgJgQgEgUQgJgrAGgxQAFguAmgdQAhgaApgbIBGgtIAAAEQACgDAAgCIgCgKQABgpADglQADgqgbghQArgmAWArQAHALABANQAKgXAcADQALACgBATQgBANgDALQAcgqAIAxQACAQgIALQAygtgOBCQgBAFgDACIgEACQAEABACgCQAbgpAGA0QABAJgJAGIgDACIgNAIIANgIQAIAPABANQACAVgVASQgFAVADAWQADAVgIAZIgXAZQAGA3gOAuQgGATgIAQIgBADQgSARgWAIQgYAHgYAFIgmAHQgZAEgXAAQgWAAgVgDgAhmFBIAHgBIACAAIAAAAIABgBIgBABIAAAAIgCAAIgHABIAAAAIgBAAQgNAAgRgJIAAAAIgBgBIgBAAIABAAIABABIAAAAQARAJANAAIABAAIAAAAgAhVBxIAFgCIgFACgAhuBTIgFAFIAFgFIACgCIgCACgAiMA4IgDAKIADgKIACgJIgCAJgAi7AoIgBAIIABgIQACgKADgIQgDAIgCAKgAoWCKIgVgCQgygIgfgbQgegbgNgmQgOgnAGg1IAFgkIAHgEIgHAEIAJg5QgcgCgUAIQAGgJACgOQgCAOgGAJIgCAEQgLAPgUADQgmAHgLgaQgNgfAWgKIgMgMQABgpANAEQAKADAOAVQgOgVgKgDQAGgSAHgEQgGgEACgIQALgvAhAUIgGAGIAGgGQAagZApgOQAmgMAcAXQAgAZAmgKQATgFATAHQAoAPgQA8QgEAPgCAPIgFABIAFgBQgEAfACAhQACAcAOAbQAQAdgEAcQAvAIAmAcQAbAUAaAOQAPAIANALIgIAGQghAbgoARQgqASgvADIghABQgWAAgVgCgAnPAIQAHgOACgPQgCAPgHAOgAqIiTQATAAAJgNQAUgeAhAAIABAAIAAAAQANAAAOAFIABAAQAGACAFAAIABAAIAAAAQAOAAAHgNQgHANgOAAIAAAAIgBAAQgFAAgGgCIgBAAQgOgFgNAAIAAAAIgBAAQghAAgUAeQgJANgTAAIAAAAIAAAAIgHAAIgCAAIgQgCIAQACIACAAIAHAAIAAAAIAAAAgAsYi2IgCABIACgBQAKgEAPAAQgPAAgKAEgAr/j6QAGAEAGAKQgGgKgGgEQgGgFgGADQAEADAIgBIAAAAgArYkbIgLgIIALAIgArRiPIAAAAgAl1lXQgkgOALgnQgJAbgaAHQghAJACglQABgXAHgVQAEgHACgKQgCAKgEAHQgNAWgkACQgNAAgDgKQgJgfAZgbQgKAGgPACQgpADAYgfQAVgbAhgIIgZgIQgLgEgDgIQgTgwBAAPQAtAKAVAkIBBgxQAggXA2AAQAtAAAtAGQAxAGAoAPQApAPAmAZQAjAYASAqQARAoANAqIAQAwIgagTQgggagxAAQgygBgwAIQgmAGglALQAFgyggABQgPAAgMAFQgoANgjANQAMASgcAWQgKAHgLAAQgHAAgHgCgAlCmEQgFgGgLgHQALAHAFAGg");
	this.shape_1.setTransform(0.7,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("Ai0p1QgVAOghgOQgMgFACgLQAGggAhgNQgLABgOgFQgngPAkgRQAegPAiAHQgLgKgJgIQgIgIABgJQADg0A0AqQAkAcADAqQAogIAogIQAlgHAxAYQApAUAmAYQApAbAdAfQAfAgAXAmQAWAlgCAuQgCAsgHArQgDAYgEAaAAcnJQAagrgdgNQgNgGgMgBQgqgGglgDQADAVgjAHQgTAFgPgPQgagdAbgdQgUAUgbgFQghgHASggQALgUAPgQQAHgFAGgIAoCphQAigLArAFQAmAGAQAgQASAlAnAHQATAEAOAPQAdAfgoAvQgKALgIANQgDgBgDAAAo3pPQgEgHAFgGQAegmAWAhQgFABgDABApMpBQAMgOAJAAQACAEAIADQgEgIgGABAopo3QgBgLgDgGAoCphQADAFADAHAoFnFQAHAEAHAFQAVAOARgJQAsgaAoAmQASARARgMApKoPQgNgGgKgBQgCgBgBAAAoznUQgCABgBABQgRAJgTgGQglgKABgcQACgiAYAAQgDgFgCgKQASglALAKQAHAGADAaAommWQAEAAAEAAAommWQAQgXARgYQgZgOgVgBQAJgGAIgLAl4jyQAmAbAWArQAPAdASAZQAKANAHAQQgFAAgFACQgqAJgqgCQgugCgsgRQgkgPgggTQgJgGgJgGQgpgcgQgmQgQgmAGgnQAFgrAcgsQAJgQALgPAhPoRQgCgIgHgLAlCmcQgSAagMAfQgLAaABAeQABAhgPAYQgIANgNAKAing/QACgEACgDQAGgJAGgGQAUgRAXAQQAJAGgJARQgHALgHAKQgDADgDAEQgDADgDAEAjqDCQARAYARADQABAAAAAAQgTA0ggAjQgOAOgOAMQgBABgCABQgXAHgXgDQgZgDgXgGQgTgFgTgFQgugPgkgZQgpgbgFgjQAAgFgBgFQgBgTAFgTQALgrAagpQAZgnAvgKQApgJAxgGQAqgGAogEQgBABgBACQADgBABgCQABgFABgFQATgkATggQAVgkgJgqQA3gQABAwQABAOgFAMAhtAAQgCAAgCABQgDABgEABAhhAoQgDgBgDAAAhtAAQA/gSgpA1QgCADgEABQgCABgCAAQACACADgCQAqgYgRAxQgDAIgLACQgCAAgBABQgJABgHAAAh6gqQAsgagPAvQgFAPgLAGAhUBMQAAARgEALQgIAUgaAHQgOAQgHAWQgHAUgSATAGkDnQAigBAjAcQAMAJAMAMQAUAVARAbQAXAlAZAoQAVAgAOAuQAMArgNAuQgOAzgtASQgtASgoAVQgjARgXAdIgBAAQgHgDgGgDAGYMAQAEAKAAALQAAANgNgEQglgPgDgnQgCANAFAOQAFARgNAEQgeAKgIgaQgJgegJgZQgEgKgDgJQADAWgTAfQg2gOAUgvQAZg3g1gSQgZgJgEgQQgNgyA/AhQAVAMANgGQAbgLAWgeQAbgkAegdQATgSgHgUQgNgkghgEAGYMAQgDgIgFgIAGuLVQABABABAAQAcANABAYQABAKgIAEQgdAPgRgY");
	this.shape_2.setTransform(4.7,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AGPMeQglgPgDgnQgCANAFAOQAFARgNAEQgeAKgIgaQgJgegJgZIgHgTQADAWgTAfQg2gOAUgvQAZg3g1gSQgZgJgEgQQgNgyA/AhQAVAMANgGQAbgLAWgeQAbgkAegdQATgSgHgUQgNgkghgEIAXgWIADgDQAPgUAJgYQARgqAKgvIADgMQAigBAjAcQAMAJAMAMQAUAVARAbIAwBNQAVAgAOAuQAMArgNAuQgOAzgtASQgtASgoAVQgjARgXAdIgBAAIgNgGIANAGIABAAIACABQAcANABAYQABAKgIAEQgdAPgRgYQgDgIgFgIQAFAIADAIQAEAKAAALQAAAKgHAAIgGgBgAlHFUQgZgDgXgGIgmgKQgugPgkgZQgpgbgFgjIgBgKQgBgTAFgTQALgrAagpQAZgnAvgKQApgJAxgGIBSgKIgCADQADgBABgCIACgKQATgkATggQAVgkgJgqQA3gQABAwQABAOgFAMQAUgRAXAQQAJAGgJARQgHALgHAKIgGAHIgGAHIAGgHIAGgHQAsgagPAvQgFAPgLAGIgEABIgHACIAHgCIAEgBQA/gSgpA1QgCADgEABIgEABQACACADgCQAqgYgRAxQgDAIgLACIgDABIgJAAIgGABIAAAAIgBAAIABAAIAAAAIAGgBIAJAAQAAARgEALQgIAUgaAHQgOAQgHAWQgHAUgSATIgfANIgBAAQgRgDgRgYQARAYARADIABAAQgTA0ggAjQgOAOgOAMIgDACQgQAFgRAAIgNgBgAhhAoIgGgBIAGABgAijhGIgEAHIAEgHQAGgJAGgGQgGAGgGAJgAlohQQgugCgsgRQgkgPgggTIgSgMQgpgcgQgmQgQgmAGgnQAFgrAcgsIAUgfIAIAAIgIAAIAhgvQgZgOgVgBQAJgGAIgLQgIALgJAGIgDACQgRAJgTgGQglgKABgcQACgiAYAAIgFgPQASglALAKQAHAGADAaQgDgagHgGQAMgOAJAAQACAEAIADQgEgIgGABQgEgHAFgGQAegmAWAhIgIACIAIgCIAGAMIgGgMQAigLArAFQAmAGAQAgQASAlAnAHQATAEAOAPQAdAfgoAvQgKALgIANIgGgBIAGABQgSAagMAfQgLAaABAeQABAhgPAYQAmAbAWArQAPAdASAZQAKANAHAQIgKACQgiAHgiAAIgQAAgAmNjbQANgKAIgNQgIANgNAKgAlomhQAGAAAGgEIABAAIAAAAIABgBIgBABIAAAAIgBAAQgGAEgGAAIAAAAIAAAAQgKAAgLgKIAAgBIgCgBIgBgBQgWgTgYgBIAAAAIAAAAQgRAAgSALIgBAAIAAAAQgGADgHAAIAAAAIAAAAQgMAAgMgIIgOgJIAOAJQAMAIAMAAIAAAAIAAAAQAHAAAGgDIAAAAIABAAQASgLARAAIAAAAIAAAAQAYABAWATIABABIACABIAAABQALAKAKAAIAAAAIAAAAgAphoWQAJAAAOAHQgOgHgJAAIgDgBIADABgAopo3QgBgLgDgGQADAGABALgAEBlYQgSglgtgXQgtgWgugOQglgLgmgGQAagrgdgNQgNgGgMgBQgqgGglgDQgCgIgHgLQAHALACAIQADAVgjAHQgTAFgPgPQgagdAbgdQgUAUgbgFQghgHASggQALgUAPgQQAHgFAGgIQgGAIgHAFQgVAOghgOQgMgFACgLQAGggAhgNQgLABgOgFQgngPAkgRQAegPAiAHIgUgSQgIgIABgJQADg0A0AqQAkAcADAqIBQgQQAlgHAxAYQApAUAmAYQApAbAdAfQAfAgAXAmQAWAlgCAuQgCAsgHArIgHAyIgOgcg");
	this.shape_3.setTransform(4.7,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("ACMjnQgCgJACgEQAEgGAIABQAwAIgRAiQgEgDgDgDACMj0QAEAGgEAHAB2j/QgCAJgVAQAB+jbQAJgHAFgFACvjDQAFgHADgFQAaAYARAoQAOAkgUAfQgXAhANAlQAGASgGATQgMApg8gLQgPgDgPgBQgBgDgBgDAB2j/QASAEAEAHAAuiDQAAAIgBAIQgCAaARAKQArAZgLA2QgGAXASAJAAkiyQAKAEANACAAkiyQgCgBgCgBQgPgKgFgUQgKglAZgNQAegPAMAVQADgFAIgHQAogDgCAOABLjkQgBgPgEgJQgBgBAAgBAhBBgQgFAugaApQgSAcgMAbQgHAPgKAPQgDgFgDgEQgegfgTgmQgVgogHgvQgGgnACglQAAgLABgKQADgxAaghQAYggAlgPQAngRA1ACQASAAASACQACADACAEABsA5QgggCggAFQgdADgYAQQgcASgcgBQgQgBgPgGAgLiIQAcACAdADQgBgdgJgS");
	this.shape_4.setTransform(-8.7,-10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AiVEDQgegfgTgmQgVgogHgvQgGgnACglIABgVQADgxAaghQAYggAlgPQAngRA1ACIAkACIA5AFQgBgdgJgSQAKAEANACQgNgCgKgEIgEgCQgPgKgFgUQgKglAZgNQAegPAMAVQADgFAIgHQAogDgCAOQASAEAEAHQgCAEACAJQgFAFgJAHQAJgHAFgFQAEgHgEgGQAEgGAIABQAwAIgRAiIgHgGIAHAGIgIAMIAIgMQAaAYARAoQAOAkgUAfQgXAhANAlQAGASgGATQgMApg8gLQgPgDgPgBIgCgGIACAGQgggCggAFQgdADgYAQQgcASgcgBQgQgBgPgGQAPAGAQABQgFAugaApQgSAcgMAbQgHAPgKAPIgGgJgABoAgQgOgHAAgPIACgKQACgLAAgKQAAgmgigUQgQgJAAgXIABgEIABgQIgBAQIgBAEQAAAXAQAJQAiAUAAAmQAAAKgCALIgCAKQAAAPAOAHgAgHiBIgEgHIAEAHgABGj8QAEAJABAPQgBgPgEgJIgBgCIABACgABfjmQAVgQACgJQgCAJgVAQgAAkiyIAAAAgACMj0IAAAAg");
	this.shape_5.setTransform(-8.7,-10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("ABbj1QAYAXAaAXQAcAZAZAqQAXAmAAAvQgBA0gmAdQgnAegiAeQgdAZgPAjQABAAABAAQAfAGAHAWQADAKgGAGQgYAVgXgSQAHAIADALQADANgOgBQgngEgMgmQABANAHANQAKAPgMAHQgZARgPgXQgQgagPgWQgGgIgGgIQAJAUgKAjQg4AAAHgyQAJg7g3gFQgagCgJgOQgZgtBFAQQAYAFALgJQAWgRAPgjQAFgMAFgMQABAAAAAAAA9CaIAAAAQgIgBgHgCAAzDJQgFgHgHgG");
	this.shape_6.setTransform(29.9,62.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AgjDoQgQgagPgWIgMgQQAJAUgKAjQg4AAAHgyQAJg7g3gFQgagCgJgOQgZgtBFAQQAYAFALgJQAWgRAPgjIAKgYIABAAQCChwArh1IAyAuQAcAZAZAqQAXAmAAAvQgBA0gmAdQgnAegiAeQgdAZgPAjIACAAQAfAGAHAWQADAKgGAGQgYAVgXgSQAHAIADALQADANgOgBQgngEgMgmQABANAHANQAKAPgMAHQgKAIgJAAQgMAAgJgOgAAzDJQgFgHgHgGQAHAGAFAHgAA9CaIAAAAIAAAAIgPgDIAPADg");
	this.shape_7.setTransform(29.9,62.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AivmnQgRATgkgFQgMgCgBgKQgDghAdgVQgKAEgQgBQgpgFAegaQAZgWAjgCQgNgHgKgFQgKgGgCgJQgKgyA9AaQAqATANAnQAlgSAlgSQAjgRA0ALQAsAIAsAOQAuAPAkAXQAmAWAgAfQAgAfAJAsQAJArAGArQADAYADAbABGk3QAOgwgfgEQgPgDgNACQgoAFglAHQgDgIgKgIAg0lgQAIAUgfAPQgSAKgSgLQgggVASgjQgOAYgbADQgiACAJgkQAGgXAKgTQAFgGAEgJACkF8QAMgFAJgKQAhgkgxgbQgYAkgoALQglAJgnANQgEADgEACQgDABgCgBQABgBACAAQgegZgigbQgngdgjgXQgpgagtAKQgvAKgmAXQgSAKgMAOQgDAEgDAEQgVAcAJAwQAIArAXArQAIASAKAQQANAVAPAUQAOASAWALQACABACAAQASABAUAAQAvgCAygXQAAAAgBgBQgKgOAFgdAg2JAQAZgBATgJQATgLAWgBQAYANATgIQALgFAMgNQABABACABQAJAHAIgEQAugXgugMQgEgBAAgDQgCgDgBgCACbGvQgFAAgFABQgFAAgEAAACJGAQAEgCAEAAQALgCAIAAACFHWQgCgBgBAAQgEgCgDgCACbGvQALgCAMgDQATgGgCgKQgFgcgagCACFHWQAMAEAPgHQArgYgwgMABxH7QABABACABQAEACAEAAQBDgJg6ggABhIdQgHgFgFgF");
	this.shape_8.setTransform(-5.4,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AjdJLIgEgBQgWgLgOgSQgPgUgNgVQgKgQgIgSQgXgrgIgrQgJgwAVgcIAGgIQAMgOASgKQAmgXAvgKQAtgKApAaQAjAXAnAdIBAA0IgDABQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAIAIgFQAngNAlgJQAogLAYgkQAxAbghAkQgJAKgMAFQAaACAFAcQACAKgTAGQgMADgLACIgKABIgFAAIgCAAIgBAAIgBAAIABAAIABAAIACAAIAFAAIAKgBQAwAMgrAYQgPAHgMgEQA6AghDAJQgEAAgEgCIgDgCIgDgFIADAFQAAADAEABQAuAMguAXQgIAEgJgHIgDgCIgMgKIAMAKQgMANgLAFQgTAIgYgNQgWABgTALQgTAJgZABIgggNIgBgBQgHgJAAgRIACgRIgCARQAAARAHAJIABABQgyAXgvACIgMAAIgagBgACCHVIADABIgDgBIgHgEIAHAEgACRF+IgIACIAIgCIAFgBIADAAIADgBIADAAIABAAIAAAAIACAAIACAAIgCAAIgCAAIAAAAIgBAAIgDAAIgDABIgDAAIgFABgAFAkFQgbgfgxgKQgxgKgwgBQgngBgmADQAOgwgfgEQgPgDgNACQgoAFglAHQgDgIgKgIQAKAIADAIQAIAUgfAPQgSAKgSgLQgggVASgjQgOAYgbADQgiACAJgkQAGgXAKgTQgRATgkgFQgMgCgBgKQgDghAdgVQgKAEgQgBQgpgFAegaQAZgWAjgCIgXgMQgKgGgCgJQgKgyA9AaQAqATANAnIBKgkQAjgRA0ALQAsAIAsAOQAuAPAkAXQAmAWAgAfQAgAfAJAsQAJArAGArIAGAzIgWgYgAivmnQAFgGAEgJQgEAJgFAGg");
	this.shape_9.setTransform(-5.4,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("AhfhcQAGAGAJADAhfhcQgJgHgGgJQgGgLANgDQAogGAWAhQgFgNgLgKQgNgLAJgLQAWgXATASQAWAWAUAQQAIAHAIAGQgOgRABgkQA2gPAGAyQAGA8A3gKQAagFAMAMQAkAlhHACQgZABgIAMQgRAVgFAlQgCAOgCAOIAAAAQgaADgIAQQgSgCgeACQgdABgUABQgVAAgFABQhoAgAAAQQgPgBgJACQACgdASgYQAegnAZgmQAVgfAGglIABAAQAHgBAIAAAhdgsQgBAAgBAAQgfADgNgUQgFgIAEgIQASgbAbAM");
	this.shape_10.setTransform(-19,-41.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("AivBlQAegnAZgmQAVgfAGglIABAAIAPgBIgPABIgBAAIgCAAQgfADgNgUQgFgIAEgIQASgbAbAMQAGAGAJADQgJgDgGgGQgJgHgGgJQgGgLANgDQAogGAWAhQgFgNgLgKQgNgLAJgLQAWgXATASQAWAWAUAQIAQANQgOgRABgkQA2gPAGAyQAGA8A3gKQAagFAMAMQAkAlhHACQgZABgIAMQgRAVgFAlIgEAcIAAAAQgaADgIAQQgSgCgeACIgxACIgaABQhoAgAAAQQgPgBgJACQACgdASgYg");
	this.shape_11.setTransform(-19,-41.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AggjcQAHAEAJACAggjcQgWgOAAgjQgBgNALgCQAggJAZAaQgHgKgBgPQgBgpAeAZQAZAVAIAiQAEgOAEgKQAEgLAJgDQAwgSgRBAQgMAtgkASQAXAiAYAiQAWAfgDA3QgBAsgHAtQgIAwgRAnQgQAogaAlQgZAkgpAQQgqAQgpAMQgYAGgZAHAhUhYQgRAMgUgdQgNgQAIgUQAQgjAlANQgagLgGgaQgIghAlAEQAXACAVAHAhUhYQAHgEAHgLAhpAnQAxAGAAgfQAAgOgDgMQgNgpgMgj");
	this.shape_12.setTransform(57.4,5.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("Ah0ElQAbgeABgzQADgygGgvQgFgngJglQAxAGAAgfQAAgOgDgMIgZhMQAHgEAHgLQgHALgHAEQgRAMgUgdQgNgQAIgUQAQgjAlANQgagLgGgaQgIghAlAEQAXACAVAHQAHAEAJACQgJgCgHgEQgWgOAAgjQgBgNALgCQAggJAZAaQgHgKgBgPQgBgpAeAZQAZAVAIAiIAIgYQAEgLAJgDQAwgSgRBAQgMAtgkASIAvBEQAWAfgDA3QgBAsgHAtQgIAwgRAnQgQAogaAlQgZAkgpAQQgqAQgpAMIgxANIAUgZg");
	this.shape_13.setTransform(57.4,5.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.1,1,1).p("AiqCtQgLAGgOABQgwADAKg4QArAFAhgZQAegWAjgXQAFgBAEgCQACgBABgDQgBABgCABQAAgoABgqQABgxAFgpQAEgwAkgdQAmgeApgQQATgHASgBQAFAAAFAAQAjACAgAlQAcAhAUAtQAIARAGASQAIAXAGAYQAGAXgFAYQgBAAgBACQgKAPgNAPQgfAkgxAYQAAAAAAgBQgFgQgagPAiqCtQAFgHAJgHQADgCADgDAh8DFQADgDADgDQAEgEACgEAh8DFQgJAIgKAIQgQALgHgIQgSgVAOgWAB3B9QgQATgUAJQgUAJgPAQQgEAbgTAKQgLAGgQABQAAABgBACQAAALgIAEQgvAWAUgsQABgDgCgCQgBgDgBgDAgnDVQAAACAAACQgBAEgDADQgxAuAMhBQgFAMgPAHQgtATAVguAhQDNQAAgCABgBQABgEAAgDAgCDeQAAgJgBgH");
	this.shape_14.setTransform(-49.7,18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AgmDaQABgDgCgCIgCgGIACAGIAAAEQgBAEgDADQgxAuAMhBIABgDIABgHIgBAHIgBADQgFAMgPAHQgtATAVguQgJAIgKAIQgQALgHgIQgSgVAOgWQAFgHAJgHIAGgFIgGAFQgJAHgFAHQgLAGgOABQgwADAKg4QArAFAhgZQAegWAjgXIAJgDQAAgBABAAQAAAAABgBQAAAAAAgBQAAgBABAAIgDACIABhSQABgxAFgpQAEgwAkgdQAmgeApgQQATgHASgBIAKAAQAjACAgAlQAcAhAUAtQAIARAGASQAIAXAGAYQAGAXgFAYIgCACQgKAPgNAPQgfAkgxAYIAAgBQgFgQgagPQAaAPAFAQIAAABIgKAhQgQATgUAJQgUAJgPAQQgEAbgTAKQgLAGgQABIAAgGIgBgKIABAKIAAAGIgBADQAAALgIAEQgQAHgIAAQgRAAAOgdgAh2C/IgGAGIAGgGIAGgIIgGAIg");
	this.shape_15.setTransform(-49.7,18.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AhzARQgnAagwAFQghAEgdAHQgQAEgSACQACgGABgFQAGgqARgmQASgqAggiQAbgdAegWQAIgHAJgGQApgdApAAQApgBAhATQAmAUAgAqQALAOAKAQQgBADgCAEADxhhQAGAAALACQAbAdgNAHQAIARgCAHQgCAHgIABQAFgHAFgBQAHgBAEAIQAYApglAIQgCAjgVAmQgTAigkAEQgpADgVAhQgKAQgTAIQgnAQgdg2QgHgOgJgMQgSgagXgWQgVgUgdgKQgfgKgQgXQgJgMgFgPACihLQgBgCAAgCQgCgSAMgQQAWgfAaAMQAfANgJAWADghLQAMgKAEgJQABgCAAgBACDglQgGAEgHAFQgWAPAEATQAHAxgxAZQgWAKAEAUAEGAWQAIAAAGgBQAAgFAAgEAEQg7QgIAEgZgGAD6geQAKADAIAAACDglQAWgSAJgUQACALAHAMABjhVQAQAXAQAZAAXCAQABgCACgD");
	this.shape_16.setTransform(11.1,44.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("AAnCaQgHgOgJgMIADgFIgDAFQgSgagXgWQgVgUgdgKQgfgKgQgXQgJgMgFgPQAFAPAJAMQgnAagwAFQghAEgdAHQgQAEgSACIADgLQAGgqARgmQASgqAggiQAbgdAegWQAIgHAJgGQApgdApAAQApgBAhATQAmAUAgAqQALAOAKAQQgBADgCAEQACgEABgDIAgAwIgNAJQgTANAAAPIABAGIABANQAAAngrAWQgSAIAAAPIAAAHIAAgHQAAgPASgIQArgWAAgnIgBgNIgBgGQAAgPATgNIANgJQAWgSAJgUIgBgEQgCgSAMgQQAWgfAaAMQAfANgJAWIARACQAbAdgNAHIgBABIgIABIAAAAIgEAAIgQgCIAAgBIgBAAIAAAAIgDgBIADABIAAAAIABAAIAAABIAQACIAEAAIAAAAIAIgBIABgBQAIARgCAHQAHgBAEAIQAYApglAIIAAgJIAAAJIgOABIAOgBQgCAjgVAmQgTAigkAEQgpADgVAhQgKAQgTAIQgJAEgIAAQgdAAgWgqgAEMgbQgIAAgKgDQAKADAIAAgAEMgbQAIgBACgHQgFABgFAHgACrg0QgHgMgCgLQACALAHAMgADwheQgEAJgMAKQAMgKAEgJIABgDIgBADgAEUAVIAAAAgAhzARIAAAAg");
	this.shape_17.setTransform(11.1,44.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.1,1,1).p("AjViNQANAHAJADAjViNQgGgCgHgEQAWgbAdAIQAJgQAPgOQAkgeAngVQAggSAVAUQAkAhgbAnQAOACAQAHQAlASAeAlQAAAAABABQAcAkgCAnQANgHAMgHQAbgQAggFQAKgCALgCQACAAACAAQAjAJAdAYQAlAgAPAmQAPAqgIAqQgIArgdAkQgaAlgrAQQgQAHgUgBQgUABgYgGQgBABgBAAQgQAEgPACQgdAEgYgEQgcgEgRgOQgEgFgFgGQgFgGgFgGQgXgfgXgfQgagkgdgjQgegjgMgnQgBgDAAgCAAAh2QgZgNgVARAivimQAGACAGADAj7hlQABACAAABQANAFALAFAkPg1QgBAAgBgCQgkgmA6gIQgMgkAygEAkPg1QAPAPAPgOAkuAIQgFgDgGgEQAAgeAqgYAkuAIQABAAABAAQAXALANgLAkFA7QgDAjgoAFQgfADgHgkQgIgqAwgQAiJAHQgfApgpAIQgcAGgYgDQABgFAAgG");
	this.shape_18.setTransform(-62.8,10.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("ABGD/QgcgEgRgOIgJgLIgKgMIgug+QgagkgdgjQgegjgMgnIgBgFIABAFQgfApgpAIQgcAGgYgDIABgLIgBALQgDAjgoAFQgfADgHgkQgIgqAwgQIACAAQAXALANgLQgNALgXgLIgCAAIgLgHQAAgeAqgYIABABIABAAIAAABQAHAFAGAAIAAAAIAAAAQAHAAAGgFIAAAAIABgBIABAAIgBAAIgBABIAAAAQgGAFgHAAIAAAAIAAAAQgGAAgHgFIAAgBIgBAAIgBgBIgCgCQgkgmA6gIQgMgkAygEQANAHAJADQgJgDgNgHIgNgGQAWgbAdAIQAJgQAPgOQAkgeAngVQAggSAVAUQAkAhgbAnQAOACAQAHQAlASAeAlIABABQAcAkgCAnIAZgOQAbgQAggFIAVgEIAEAAQAjAJAdAYQAlAgAPAmQAPAqgIAqQgIArgdAkQgaAlgrAQQgQAHgUgBQgUABgYgGQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgQAEgPACQgPACgOAAQgNAAgLgCgAj6hiIAYAKIgYgKIgBgDIABADgAguhyIABgBIABAAIAAAAIAAgBQALgHAMgBIAAAAIABAAQAJABAKAEIABABIgBgBQgKgEgJgBIgBAAIAAAAQgMABgLAHIAAABIAAAAIgBAAIgBABgAijihIgMgFIAMAFg");
	this.shape_19.setTransform(-62.8,10.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.1,1,1).p("AEij7QglgQgvABQgqABgrAJQguAKgkAcQglAcgTAiQAAACgBABQAGASAUANQgMAAgOADQguAJgiAdQgjAfgSAmQgBAEgDAEQgSgegoAHQgBAAgBAAQgbAFABAkQABAZgWANQghAWgGAkQgCANAFALQAEgBAEAAAkqCGQgaAGgJAXQgJAXAPALQAyAkAEg6QAAAaAJASQASAjAIgcQARAuAagbQAHAUAGABQAvAJgJgoQAoAAASgmQAPgeAXghQABAAAAgBQACgDADgEAjtDcQAAADgBADAjDD1QAFgEAEgGAhpAEQgeAPgIAbAgvCFQAuAHArABQAuACArgEQAqgEAsgQQAogOAaglQAXgfARgnQATgqgGgwQgFgsgLgnQgIghgQgkAAIh6QABAAABAAQAegBAeAJ");
	this.shape_20.setTransform(-39.4,73.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC99").s().p("Ai2EKQgGgBgHgUIAJgKIgJAKQgaAbgRguIABgGIgBAGQgIAcgSgjQgJgSAAgaQgEA6gygkQgPgLAJgXQAJgXAagGIAIgBIgIABQgFgLACgNQAGgkAhgWQAWgNgBgZQgBgkAbgFIACAAQAogHASAeIAEgIQASgmAjgfQAigdAugJQAOgDAMAAQgUgNgGgSIABgDQATgiAlgcQAkgcAugKQArgJAqgBQAvgBAlAQIAGAHQAQAkAIAhQALAnAFAsQAGAwgTAqQgRAngXAfQgaAlgoAOQgsAQgqAEQgrAEgugCQgrgBgugHIAFgHIgFAHIgBABQgXAhgPAeQgSAmgoAAQAIAhgfAAIgPgCgAiPAuQAIgbAegPQgeAPgIAbgABGhyIgCgBIAAAAIgEgBIAAAAIgBAAQgXgGgXgBIgBAAIAAAAIgGABIgCAAIACAAIAGgBIAAAAIABAAQAXABAXAGIABAAIAAAAIAEABIAAAAIACABIAAAAg");
	this.shape_21.setTransform(-39.4,73.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("AmBpRQAEACAFACQANAGAQAJQAPAJARAIQARAIANAJQAOALAOAKQAPAKAPAJQAOAKAOAJQAQALAQAJQAQAJAOAMQANAKAJAOQAKAOAKAPQAJAPAHARQAHAQAEASQAFARABASQABARgCARQgDAfgFAdQgBAJgBAJQgDANAAANAERBxIAAAAQACgCACgBQAOgEAPgEQARgEATgDQASgEARgEQASgFATgDQARgCAQAFQARAHAOAJQAPAKANALQAMANANAOQALALAKAOQAFARAGASQADAMACALQADAPgEAPQgDAPgGAPQgJAXgNAXQgFAKgDAJQgCAFgBAGQATACAHASQAAAEgBAEQARgGASABQAWACAGAPQAFAPgQAHQgQAHgSADQgJACgKABQgBAAgBAAQgBADgBACQgCAFgEAEAmhqEQgBACgCADAmhqEQAEgLgEgQQgCgKAEgIQAHgPARAPQAMAMABAVQABATgIAOQgIAOAIAQQgHgCgIgBAoTqsQgDgFACgIQACgQAOgHQARgIAPAKQAPAKAOALQANAMAGARQAFATAOAFAntpeQgIgHgKgGQgNgIgPgFQgPgFgSAAQgIgBgEgEQgLgLAHgNQAJgRASgFQAQgEAOAIQAAACABABQAEAGAJACQASAFAOAIQAMAHAJANAn+oeQgBgBAAgCQgJgMgNgKQgOgJgNALQgNAKgSAAQgTABgCgVQgDgTALgIQAJgHAKgIQALgIASgCQASgCARAHQARAHALAJQADAEADADAn+oeQAGgCAGgCQAFgCADgFAnJngQgHAEgMAAQgIgBgGACQgSAHgJAPQgKAPgPgOQgLgJgDgRQgEgRAJgOQAKgPANgIQAIgGAKgEAk1lTQgOgJgKgJQgLgJgPgMQgKgIgNgKQgOgKgNgLQgNgLgLgOQgJgMgJgPQgDgGgDgFQAEgDACgDQAJgNgCgUAk1lTQACgCACgCQADgDACgEAlQjmQgHgLACgOQADgQAEgQQAEgSAIgQQAGgKAHgIAokLTQgQAAgJABAF/E9QAGgFAGgEQAOgMAFgTAF/E9QgHAGgHAGQgPALgQAIQgQAIgRADQgSADgSAEQgTAEgSAAQgTgBgRgDQgJgBgMgDAHIIMQgDARgJANQgLANgPAHQgSAIgQgJQgQgIACgWQACgRAKgOQAKgOAGgRQADgJgCgKQgDAHgEAGQgIAMgTACQgNABgJgHQgFgDgIAAQgHAOgMAIQgNAJgDgKQgFgRgEgSQgEgSAMgOQALgNATgDQARgDARgDQgGgRABgSQACgRAIgPQAIgPAMgNAH9HgQAEgCAEgDAIhG9QARABAKAPQALAPADASQACASgUAFQgTAGgQgLQgMgIgIgNQAEANADANQAEATgPAKQgOAKgTgBQgNAAgFgPQgCgIAAgIQAAgIADgHQAFgPgGgPAIBHrIAAgBQgBgBAAgDQAAADABACgAIAHmQgBgCgCgEAHyHiQAGAAAFgC");
	this.shape_22.setTransform(23.6,-11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC99").s().p("AGAKHQgQgJACgVQACgSAKgOQAKgOAGgRQADgJgCgKQgDAHgEAHQgIAMgTABQgNABgJgGQgFgDgIgBQgHAOgMAJQgNAIgDgKQgFgRgEgRQgEgTAMgOQALgNATgCIAigHQgGgRABgRQACgRAIgQQAIgOAMgNIAMgKQAOgMAFgSQgFASgOAMIgMAKIgOALQgPAMgQAIQgQAHgRADIgkAHQgTAEgSAAQgTAAgRgDIgVgEQgBgjgGgkQgHgugOgrIgEgMIAMgFQATgKAPgPQAPgSABgYQADAAADACQAMAKARgDQATgEAOgLIAAAAIAEgDIAdgHQARgFATgDIAjgIQASgFATgCQARgDAQAGQARAGAOAKQAPAJANAMIAZAaQALAMAKAOIALAiIAFAYQADAPgEAOQgDAPgGAPQgJAXgNAXQgFAKgDAKIgDAKQATADAHASQAAADgBAEQARgGASABQAWACAGAPQAFAQgQAHQgQAGgSAEIgTACIgCABIgCAFIgGAIIAGgIQARABAKAPQALAPADASQACARgUAGQgTAFgQgKQgMgIgIgOIAHAbQAEATgPAJQgOAKgTgBQgNAAgFgOQgCgIAAgIQAAgIADgIQACgHAAgHQAAgIgDgIQADAIAAAIQAAAHgCAHQgDAIAAAIQgDARgJAMQgLANgPAIQgJADgIAAQgIAAgJgEgAIBI0IAAAAIgBgEIABAEgAH9IpIADAHIgDgHIAIgEIgIAEIAAAAgAHyIsIALgDIgLADgAiAh0QgkgQgqgOQglgNgrgDQgegCgUAIQgHgMACgNQADgRAEgPQAEgTAIgPQAGgLAHgIIAEgEIAFgHIgFAHIgEAEQgOgIgKgJIgagVIgXgSIgbgWQgNgLgLgOQgJgLgJgPIgGgMIAGgFQAHgLAAgOIAAgIIAAAIQAAAOgHALIgGAFQgHAFgMgBQgIgBgGADQgSAHgJAOQgKAPgPgNQgLgKgDgQQgEgSAJgNQAKgQANgIQAIgFAKgEIgBgDQgJgNgNgJQgOgKgNALQgNAKgSABQgTAAgCgUQgDgUALgIIATgOQALgJASgCQASgCARAIQARAHALAJIAGAHIgGgHQgIgHgKgGQgNgJgPgFQgPgFgSAAQgIAAgEgFQgLgKAHgNQAJgRASgGQAQgEAOAIIABADQAEAGAJACQASAFAOAIQAMAIAJANQgJgNgMgIQgOgIgSgFQgJgCgEgGIgBgDQgDgFACgHQACgRAOgGQARgJAPAKQAPAKAOAMQANAMAGARQAFASAOAFIgDAFIADgFQAEgKgEgRQgCgKAEgIQAHgPARAQQAMALABAVQABATgIAPQgIANAIAQQgHgCgIAAQAIAAAHACIAJAEIAdAQIAgARQARAHANAKIAcAUIAeAUIAcATIAgATQAQAJAOAMQANALAJANIAUAeQAJAPAHAQQAHARAEARQAFARABASQABARgCASIgIA8IgCARQgDANAAANQgZgcgbgNgAnynZIgMAFIAMgFQAFgCADgFQgDAFgFACg");
	this.shape_23.setTransform(23.6,-18.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.1,1,1).p("ADXh4QACABABADQAEAOAEAOQAEASADATQAEARAEARQAFARADATQACASgGAQQgGAQgJAPQgKAOgLANQgNANgNANQgMALgOAJQgRAGgSAFQgLAEgMACQgPACgPgDQgPgDgPgGQgXgKgWgMQgKgGgKgCQgEgCgGgBQgDATgRAHQgEAAgEgBQAGARgBASQgCAWgPAFQgPAFgHgQQgHgQgDgSQgCgJgBgKQAAAAAAgBQgCgBgDgCQgFgCgEgDAALgKQgGgIgFgHQgLgOgIgQQgIgQgDgRQgDgTgDgRQgEgUgBgRQABgTADgRQABgJADgMAjDA+QgRgDgNgKQgNgLgHgPQgIgSAIgOQAJgQAWACQARACAOAKQAOAJARAFQAJADAKgBQgHgDgGgEQgMgHgCgTQgBgNAHgJQACgGABgHQgOgHgJgNQgIgMALgDQAQgGASgEQASgDAOALQANAMADASQADARADASQARgHARACQARABAQAJQAPAHAMANQAEAFAFAFQAMAOATAGAiiB3QADgBACgBQACAAAEgCQACAEADADAidB1QgDAAgBABIgBABAiZBoQAAAGACAFAh0CWQgBARgPALQgQALgRACQgSACgFgTQgGgTAKgQQAJgNANgHQgNAEgOACQgTAEgJgOQgKgOABgTQABgOAOgEQAIgDAIABQAIAAAHACQAPAFAQgF");
	this.shape_24.setTransform(16.3,69.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC99").s().p("AhiDfQgHgQgDgSQgCgJgBgKIAAgBIgFgDIgJgFIAJAFQgBARgPALQgQALgRACQgSACgFgTQgGgTAKgQQAJgNANgHQgNAEgOACQgTAEgJgOQgKgOABgTQABgOAOgEQAIgDAIABQAIAAAHACQAPAFAQgFQgQAFgPgFQgHgCgIAAQgRgDgNgKQgNgLgHgPQgIgSAIgPQAJgPAWACQARACAOAJQAOAJARAGQAJADAKgBQgHgDgGgFQgMgHgCgSQgBgNAHgJQACgGABgHQgOgHgJgNQgIgMALgDQAQgGASgEQASgDAOALQANAMADASIAGAjQARgHARACQARABAQAJQAPAHAMAMIAJALQAMAOATAGQgTgGgMgOIgJgLIgLgOQgLgOgIgQQgIgQgDgRIgGgkQgEgUgBgRQABgTADgRIAEgVQAigCAjgFQAugIArgNIANgEIAFAMQAJATAQAOQASAPAYACIgDAFQgJANACARQAEASALAPIADAEIAIAcQAEASADATIAIAiQAFARADATQACASgGAQQgGAQgJAPQgKAOgLANIgaAaQgMALgOAJIgjALQgLAEgMACQgPACgPgDQgPgDgPgGQgXgKgWgMQgKgGgKgCIgKgDQgDATgRAHQgEAAgEgBQAGARgBASQgCAWgPAFIgGABQgKAAgGgMgAiXCDIAFAHIgFgHQgCgFAAgGQAAAGACAFIgGACIgEABIgBABIAFgCIAGgCIAAAAgAiXCDIAAAAg");
	this.shape_25.setTransform(16.3,68.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.1,1,1).p("AAmlOQgBABAAACQgBAHAEAHQAKARAEAPQADAOgCAQAAmlOQACgGAGgEQAOgKAOAGQASAGAEASQAEARABASQABASgIAQQgKAQAHANQgDACgCAAABbjiQAKgEAJgOQAGgJAIgCQAPgGABAWQABASgOAPQgNAOgQAEQgPAEgGARQACAFACAEQAEAPAFARQAFARAGASQAGARADAQQACASAEARQADARAEAQQADARAEARQADASAFASQAGASABASQABARgDAQQgDARgEARQgEARgHARQgHARgJAPQgJAPgMAOQgLANgNALQgYASgYATQgIAFgHAFQgJAHgKAJABNinQgEgGgFgGAAKj8QgBgKgDgMQgDgPgGgNQgHgPgNgNQgFgFAAgHQAAgPAOgFQARgGAQAKQAQAJADAPAgvjbQABgBAAgCQADgOgCgQQgDgRgSgBQgQgDgNgMQgNgNAMgQQANgPANABQALABANACQAOACAOAMQAOALAFARQAHARACAOQAAAFgBAEAg0iJQgJgCgIgKQgEgFgHgDQgSgIgQAEQgRAEgCgUQgBgPAJgOQAKgPAQgDQASgFAPAEQAKADAJADQAGACAHAEQAEACAGgCAg0iJQAEAAAEAAQAQgDALgQAgvBCQgEgQgBgNQgCgPgCgTQgCgMgBgQQgDgRgBgRQgCgRADgSQACgOADgRQACgGADgGAiQB8QADgNALgHQANgLAPgIQAQgKARgFQALgEALAAQACAAADAAQAEgBAEgB");
	this.shape_26.setTransform(37.7,-43.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC99").s().p("AgaEsQgOglgUgoQgRgjgcggQgUgXgTgJQADgNALgHQANgLAPgIQAQgKARgFQALgEALAAQgEgQgBgNIgEgiIgDgcQgDgRgBgRQgCgRADgSIAFgfIAFgMQgJgCgIgKQgEgFgHgDQgSgIgQAEQgRAEgCgUQgBgPAJgOQAKgPAQgDQASgFAPAEIATAGIANAGIABAAIAEABIAAAAIAAAAIADAAIACgBIgCABIgDAAIAAAAIAAAAIgEgBIgBAAIgNgGIABgDQADgOgCgQQgDgRgSgBQgQgDgNgMQgNgNAMgQQANgPANABIAYADQAOACAOAMQAOALAFARQAHARACAOIgEgWQgDgPgGgNQgHgPgNgNQgFgFAAgHQAAgPAOgFQARgGAQAKQAQAJADAPIgBADIAAADQAAAFADAGQAKARAEAPQABAIAAAJIAAANIAAgNQAAgJgBgIQgEgPgKgRQgDgGAAgFIAAgDIABgDQACgGAGgEQAOgKAOAGQASAGAEASQAEARABASQABASgIAQQgKAQAHANIgFACIAFgCQAKgEAJgOQAGgJAIgCQAPgGABAWQABASgOAPQgNAOgQAEQgPAEgGARIAEAJIAJAgIALAjQAGARADAQQACASAEARIAHAhIAHAiQADASAFASQAGASABASQABARgDAQIgHAiQgEARgHARQgHARgJAPQgJAPgMAOQgLANgNALIgwAlIgPAKQgJAHgKAJQADglgLgcgAgqBCIgFAAIAFAAIAIgCIgIACgAgsiJQAQgDALgQQgLAQgQADIgEAAIgEAAIAEAAIAEAAgABNinQgEgGgFgGQAFAGAEAGgAAJjzIABgJIgBAJg");
	this.shape_27.setTransform(37.7,-43.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.1,1,1).p("AB1gfQAkgeAvgKQAhgGAcgLQAQgGARgDQgBAFgBAFQgBArgNApQgOAqgcAmQgXAggcAYQgIAIgHAHQgmAhgpAFQgpAFgkgPQgmgPgkgnQgNgNgMgOQABgEABgEAkQAHQgCgjAQgnQAQgkAjgIQAogIARgjQAJgRASgKQAlgUAjAzQAJANAKALQgCACgBADAh6AyQAGgFAGgGQAUgRgFgTQgOgvAvgeQAVgNgHgTAiUBbQABACAAACQAEASgLARQgTAhgbgJQgggKAGgXAh6AyQgUAVgGAUQgEgKgIgLAhVBfQgTgWgSgXAB1gfQAKAMAHAPAggh+QAVAYAZATQAXASAdAGQAgAIATAUAkDAEQgIABgFACQAAAFAAAEAkNA/QgHACgFgHQgcgnAlgMAkNA/QABgHAJgBQgFAHgFABgAkEBXQgLgQACgIAkEBXQAHgFAaADAjxA4QgLgCgHABAjTBiQgKALgEAJQAAACgBABQgGABgKAAQgegbAMgI");
	this.shape_28.setTransform(-61.1,38.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC99").s().p("AAOCwQgmgPgkgnIgZgbIACgIIgCAIIglgtIAMgLQAQgOAAgPIgBgHQgDgKAAgKQAAghAkgYQAQgJAAgOQAAgEgCgFQACAFAAAEQAAAOgQAJQgkAYAAAhQAAAKADAKIABAHQAAAPgQAOIgMALQgUAVgGAUQgEgKgIgLQAIALAEAKIABAEQAEASgLARQgTAhgbgJQgggKAGgXQgGABgKAAQgegbAMgIIAAAAQAFgDAKAAIABAAIAAAAIAEAAIAEAAIAEABIABAAIABAAIAAAAIADAAIgDAAIAAAAIgBAAIgBAAIgEgBIgEAAIgEAAIAAAAIgBAAQgKAAgFADIAAAAQgLgQACgIQAFgBAFgHQgJABgBAHQgHACgFgHQgcgnAlgMQgCgjAQgnQAQgkAjgIQAogIARgjQAJgRASgKQAlgUAjAzQAJANAKALIgDAFIADgFQAVAYAZATQAXASAdAGQAgAIATAUQAKAMAHAPQgHgPgKgMQAkgeAvgKQAhgGAcgLQAQgGARgDIgCAKQgBArgNApQgOAqgcAmQgXAggcAYIgPAPQgmAhgpAFIgVABQgdAAgbgLgAjhB2IgBADIABgDQAEgJAKgLQgKALgEAJgAjxA4IgCgBIgGAAIgCAAIgCAAIgBgBIAAAAIgEABIgBAAIABAAIAEgBIAAAAIABABIACAAIACAAIAGAAIACABIAAAAgAkQAHIAAAJIAAgJIANgDIgNADg");
	this.shape_29.setTransform(-61.1,38.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.1,1,1).p("Ajjh3QgUAdglgQQgdgNAMgjQAOgoAyAJQgDgEgDgGQAPgbAxAAQAFAUAVgEAjti5QABABABABQAOAVARgDAjjh3QADgEADgGABXiOQgPgYgbAEAgokQQARgJAUgEQAsgJAtABQAkABAJAcQAPAwgrASQALAKAKAOQAYAhAHAwQAAAAABABQAHAugWAhQAOAAAPgBQAfAAAeAMQAKADAKADQACABACABQAZAZAOAkQAQAugHApQgIAsgcAgQgcAhgrASQgqASgtgHQgRgDgRgKQgSgJgSgRQgBAAgBgBQgQgEgOgGQgZgKgTgQQgWgRgIgWQgCgGgBgIQgBgHgBgHQgGgngEgnQgEgsgJgtQgIgsAKgoQAAgDABgCAhVkNQAIAMAGAHAgokQQAFAFAEAGAhVkNQgEgGgEgHQAggMAVAWAizjeQgBgBAAgBQgMgzA2AWQAAACAAABQAIAKAHAKAhdhmQgwAUgngNQgbgJgUgPAiKj9QAIgmAtAW");
	this.shape_30.setTransform(-59.9,-17.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC99").s().p("ABtEkQgRgDgRgKQgSgJgSgRIgCgBQgQgEgOgGQgZgKgTgQQgWgRgIgWIgDgOIgCgOQgGgngEgnQgEgsgJgtQgIgsAKgoIABgFIgBAFQgwAUgngNQgbgJgUgPIAGgKIgGAKQgUAdglgQQgdgNAMgjQAOgoAyAJIgGgKQAPgbAxAAIAAABIABABQAEAOAOAAIABAAIAAAAIAGAAIgGAAIAAAAIgBAAQgOAAgEgOIgBgBIAAgBIgBgCQgMgzA2AWIAAADIAPAUIgPgUIAAgDQAIgmAtAWQAIAMAGAHQgGgHgIgMIgIgNQAggMAVAWQARgJAUgEQAsgJAtABQAkABAJAcQAPAwgrASQALAKAKAOQAYAhAHAwIABABQAHAugWAhQAOAAAPgBQAfAAAeAMIAUAGIAEACQAZAZAOAkQAQAugHApQgIAsgcAgQgcAhgrASQgfANggAAQgMAAgMgCgABXiOIgBgBIAAAAQgMgTgVAAIAAAAIAAAAIgIAAIAIAAIAAAAIAAAAQAVAAAMATIAAAAIABABgAjQikIAEgBIgEABIAAAAIAAAAQgNgBgLgNIgBgBIAAgBIgBgBIgBgCIgCgCIACACIABACIABABIAAABIABABQALANANABIAAAAIAAAAgAgfkFIgJgLIAJALg");
	this.shape_31.setTransform(-59.9,-17.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.1,1,1).p("ABbkPQAhAHAbAkQAJANAIAOQAPAaAIAdQAOArAOAtQALAjACAwQAAAtgYAoQgbAugvAGQgxAGgsAJQgmAIgdAXIgBgBQgFgFgGgEAg7DzQACALgDAKQgDANgLgIQghgXAIgmQgGALABAPQACASgOABQggABgBgbQgBgggCgZQgCgLgBgKQgCAWgaAZQgxgcAggnQAlgvguggQgVgOgBgRQABgzA0AwQASAQAOgCQAcgEAegXQAjgaAkgVQAXgNgCgUQgDgngegMAgaDQQABAAAAABQAYAUgFAXQgCAKgJACQgfAHgLgcQAAgIgDgJ");
	this.shape_32.setTransform(36.9,39.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC99").s().p("AhKENQghgXAIgmQgGALABAPQACASgOABQggABgBgbIgDg5IgDgVQgCAWgaAZQgxgcAggnQAlgvguggQgVgOgBgRQABgzA0AwQASAQAOgCQAcgEAegXQAjgaAkgVQAXgNgCgUQgDgngegMIAcgPIADgDQATgPAPgVQAbgkAXgrIAFgKQAhAHAbAkQAJANAIAOQAPAaAIAdIAcBYQALAjACAwQAAAtgYAoQgbAugvAGQgxAGgsAJQgmAIgdAXIgBgBIgLgJIALAJIABABIABABQAYAUgFAXQgCAKgJACQgfAHgLgcQACALgDAKQgCAIgFAAQgDAAgEgDgAg7DzQAAgIgDgJQADAJAAAIg");
	this.shape_33.setTransform(36.9,39.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.1,1,1).p("AjRBiQgFAYghAOQgMAEgGgIQgTgbAOghQgHAJgNAGQgmARANgmQAKggAdgSQgPAAgLABQgMgBgFgGQgigmBBgHQAvgFAeAbQAYgiAWgiQAWggA0gRQAqgPAsgKQAwgKAqABQAsABArALQArAKAeAiQAeAhAaAiQAOAUARAVAhDBiQARAMgTAdQgLASgVgBQgngCgBgnQgBAcgVAPQgdATgJgkQgIgWAAgVQACgJgCgJAA7BIQgMgxgdAMQgOAEgJAIQgiAagcAZQgHgGgMgC");
	this.shape_34.setTransform(-46.6,-42.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC99").s().p("AjJCNQgIgWAAgVIABgJIgBgJIABAJIgBAJQgFAYghAOQgMAEgGgIQgTgbAOghQgHAJgNAGQgmARANgmQAKggAdgSIgaABQgMgBgFgGQgigmBBgHQAvgFAeAbIAuhEQAWggA0gRQAqgPAsgKQAwgKAqABQAsABArALQArAKAeAiQAeAhAaAiIAfApIgfgJQgngOgwAQQgvAPgqAXQgiASggAXQgMgxgdAMQgOAEgJAIQgiAagcAZQgHgGgMgCQAMACAHAGQARAMgTAdQgLASgVgBQgngCgBgnQgBAcgVAPQgKAHgIAAQgOAAgGgYg");
	this.shape_35.setTransform(-46.6,-42.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.1,1,1).p("AgnjrQACgaAcgFQAJgCAGATQADAMACAMQAMgxAYArQAHAPgEAMQAgg6AJBDQAAAFgCADQgBACgBABQADAAABgDQAMgvAXAvQAEAHgHAJQgBACgBABQgFAHgFAFABjAVQAdAFAOgKQABAAAAgBQAXAyACAwQAAAUgBASQgBABAAACQgLAWgSAOQgUAPgVANQgRAKgRAJQgrAWgqAIQgwAKgcgWQgEgDgEgDQgOgMgKgRQgXgmgKgwQgKgtAagpQAXgiAdgnQAbgiAZgfQAAACABACQABgDgBgCQgCgFgDgEQgNgngJgkQgLgpgkgXQAbgyAkAhQAKAKAFALQAAAJACAKQAAAEACAEAAyjMQgBACAAACQgCADgCADAALjhQAAAEABAFQAAAFAAAFAB5ioQANAMAFALQAIAUgNAXQABAWALAUQAJATABAaABXi4QgDACgCAC");
	this.shape_36.setTransform(-30.2,19.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC99").s().p("AhjD/IgIgGQgOgMgKgRQgXgmgKgwQgKgtAagpQAXgiAdgnIA0hBIABAEQABgDgBgCIgFgJQgNgngJgkQgLgpgkgXQAbgyAkAhQAKAKAFALQACgaAcgFQAJgCAGATQADAMACAMQAMgxAYArQAHAPgEAMQAgg6AJBDQAAAFgCADIgCADIgFAEIAFgEQADAAABgDQAMgvAXAvQAEAHgHAJIgCADQgFAHgFAFQAFgFAFgHQANAMAFALQAIAUgNAXQABAWALAUQAJATABAaIgNAeIgBABIgBAAQgJAHgQAAIAAAAIAAAAIgPgBIgCgBIACABIAPABIAAAAIAAAAQAQAAAJgHIABAAIABgBQAXAyACAwQAAAUgBASIgBADQgLAWgSAOQgUAPgVANQgRAKgRAJQgrAWgqAIQgOADgNAAQgdAAgUgPgAAxjIIgEAGIAEgGIABgEIgBAEgAAMjOIAAgKIgBgJIABAJIAAAKgAgljYIACAIIgCgIQgCgIAAgHIAAgEIAAAEQAAAHACAIg");
	this.shape_37.setTransform(-30.2,19.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.1,1,1).p("AiLjhQAdgTArgGQAngFAYAcQAaAeAngDQATAAASAKQAkAWgbA4QgHAOgEAOQgDAAgDAAAi8h/QgPgCgJABQgCABgBAAQgEgFgFgKQAIgnANAGQAIAFAKAXAi6jBQgGgFAEgJQAUgsAdAaAi6jBQAGgDAFAHQgIgCgDgCgAjLivQAJgQAIgCAimitQgEgLgFgFABYBdQAsAQAgAkQAXAZAXASQANALALANQgFADgFACQglAUgqAIQgtALgugGQgogEgigLQgKgDgKgEQgvgQgZghQgagggFgoQgGgpAQgzQAFgQAGgSQAKgbALgbQgdgHgUAEQAHgIAFgNAiWhMQgCACgBABQgNANgVAAQgmgBgGgbQgHghAXgGAhlhJQAHACAIADQAYAIAOgOQAjgjAxAZQAVANAOgQAh6gTQAEgBAEgBABghUQgLAegDAhQgEAbAJAdQAJAfgIAbQgFAPgJANAiCjXQgGgGgDgEQgEADgEAC");
	this.shape_38.setTransform(-59.2,-2.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC99").s().p("AA2D6QgogEgigLIgUgHQgvgQgZghQgagggFgoQgGgpAQgzIALgiIAVg2QgdgHgUAEQAHgIAFgNQgFANgHAIIgDADQgNANgVAAQgmgBgGgbQgHghAXgGIADgBQAJgBAPACQgPgCgJABIgDABQgEgFgFgKQAIgnANAGQAIAFAKAXQgKgXgIgFQAJgQAIgCQADACAIACQgFgHgGADQgGgFAEgJQAUgsAdAaQAdgTArgGQAngFAYAcQAaAeAngDQATAAASAKQAkAWgbA4QgHAOgEAOIgGAAIAGAAQgLAegDAhQgEAbAJAdQAJAfgIAbQAsAQAgAkQAXAZAXASQANALALANIgKAFQglAUgqAIQgdAHgeAAQgQAAgQgCgABKB5QAJgNAFgPQgFAPgJANgAh6gTIAIgCIgIACgAhGhBQAMAAAIgHIABgBIABgBIAAAAIABgBIAAAAQAUgTAYAAIABAAIAAAAQARAAAVAKIAAAAIABABIABAAIAAABQAIAEAGAAIABAAIAAAAQAJgBAHgHIABAAIAAgBIABAAIgBAAIAAABIgBAAQgHAHgJABIAAAAIgBAAQgGAAgIgEIAAgBIgBAAIgBgBIAAAAQgVgKgRAAIAAAAIgBAAQgYAAgUATIAAAAIgBABIAAAAIgBABIgBABQgIAHgMAAIAAAAIAAAAQgHAAgHgCIAAAAIgBAAIgBgBIAAAAQgIgDgHgCQAHACAIADIAAAAIABABIABAAIAAAAQAHACAHAAIAAAAIAAAAgAimitQgEgLgFgFQAFAFAEALgAiCjXIgJgKIgIAFIAIgFIAJAKgABghUIAAAAg");
	this.shape_39.setTransform(-59.2,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},2).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

	// tires
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.1,1,1).p("AirmpQAQgdAVgWQAdggAqgMQAHgDAIgBQAlgLAlgGQAwgIAyABQAyAAAgAaQANAKANAJQASANARAMQAIAGAHAFQAdAUAbASQAnAbAmAbQAkAbAaAjQAdAoAfAiQAgAjASAsQALAbAIAbQADAKADAKQABAGACAGQALAvADAsQACAZgEAZQgBACgBACQgFAQgGAOQgLAZgMAWQgYAogqAUQgWAKgaAEQAGgogCgoQgDgxgOgsQgPgtgagjQgbgngXgmQgZgqgjgiQghgigjgkQgfggglgdQgfgYgtgQQgngOgsgMQgtgNgugPQgsgPgwgBQgDgBgDABgAFFGYQgIATgIATQgBACgBACQgGALgKAIQgUAWgaALQgZAKgaAGQjiA5hwgtQhwgsgsgRQgjgNhQhZQgiggghgiQgggggigiQgggggTgoQgVgqgCgvQgCgxgEgvQgDgsAMgtQAMgtA5hOQA4hOCfgnQAKgDAJAAQABgBABAAQAYgkAlgRQAjgSAvABAk6ljQAfgCAgALQArANAtAOQArAMArAUQAqATAjAdQAhAcAqAZQAmAXAgAgQAkAiAaAhQAbAlAZAjQAbAnAYAqQAXApAJAtQAIAvAEAtQAEAzgQAsQgJAYgIAWAhDAAQAmA7AtAqQAxAtAhAuQAkAxgJBHQgJBAhEAMQhBAMhBgNQhDgNgugaQg0gqgbgoQgmgmgsgoQgngjgggpQgdgkgfguQgJgNACgRQAHhFAjgvQAkgwBQgJQBRgJBwBhQAsAlAgAwgAHdDeQAAACAAACQgEASgJARQgVAngcAmQgcAmgjATQgOAHgNAG");
	this.shape_40.setTransform(-13.8,14.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("ABmEWQhDgOgugaQgzgqgcgnQglgmgsgoQgngkgggoQgdgkgggtQgJgNACgSQAHhFAjgvQAkgwBRgJQBRgKBvBiQAsAlAfAwQAnA7AtAqQAxAsAiAuQAkAxgKBHQgJBBhEAMQgfAFggAAQgiAAghgGg");
	this.shape_41.setTransform(-32.2,25.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AiQISQhwgsgsgRQgjgNhQhZIhDhCIhChCQgggggTgoQgVgqgCgvIgGhgQgDgsAMgtQAMgtA5hOQA4hOCfgnIATgDIACgBIAMAAIAAAAIABAAQAYAAAaAJIBYAbQArAMArAUQAqATAjAdQAhAcAqAZQAmAXAgAgQAkAiAaAhIA0BIQAbAnAYAqQAXApAJAtQAIAvAEAtIABAUQAAAogNAjIgRAuIgQAmIgCAEQgGALgKAIQgUAWgaALQgZAKgaAGQiAAghaAAQhHAAgxgUgAlQitQhQAJgkAwQgjAvgHBFQgCARAJANQAfAuAdAkQAgApAnAjQAsAoAmAmQAbAoA0AqQAuAaBDANQBBANBBgMQBEgMAJhAQAJhHgkgxQghgugxgtQgtgqgmg7QgggwgsglQhmhZhMAAIgPABgAFFGYIARguQANgjAAgoIgBgUQgEgtgIgvQgJgtgXgpQgYgqgbgnIg0hIQgaghgkgiQgggggmgXQgqgZghgcQgjgdgqgTQgrgUgrgMIhYgbQgagJgYAAIgBAAIAAAAIgMAAQAYgkAlgRQAjgSAvABIAGAAQAwABAsAPQAuAPAtANQAsAMAnAOQAtAQAfAYQAlAdAfAgIBEBGQAjAiAZAqQAXAmAbAnQAaAjAPAtQAOAsADAxIABAZQAAAbgFAcQAFgcAAgbIgBgZQgDgxgOgsQgPgtgagjQgbgngXgmQgZgqgjgiIhEhGQgfggglgdQgfgYgtgQQgngOgsgMQgtgNgugPQgsgPgwgBIgGAAQAQgdAVgWQAdggAqgMIAPgEQAlgLAlgGQAwgIAyABQAyAAAgAaIAaATIAjAZIAPALIA4AmIBNA2QAkAbAaAjQAdAoAfAiQAgAjASAsQALAbAIAbIAGAUIADAMQALAvADAsQACAZgEAZIgCAEIgLAeQgLAZgMAWQgYAogqAUQgWAKgaAEIAAAEQgEASgJARQgVAngcAmQgcAmgjATQgOAHgNAGIAAAAg");
	this.shape_42.setTransform(-13.8,14.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.1,1,1).p("ABPn6QAdgRAegLQApgOArAKQAIACAHACQAmAJAkANQAuARAqAaQAsAZAOAnQAGAQAGAPQAJAVAIATQAEAJAEAJQAPAgAOAeQATArATAsQARArAEAtQAFAyAJAuQAJAvgHAxQgFAegHAcQgDALgDALQgBAGgCAFQgQAxgUAqQgMAYgQAUQgCACgCACQgNALgNAKQgWASgWAMQgqAZgugDQgYgCgZgJQAbghASgmQAXguALguQALgwgEguQgDgxAAguQAAgygMgwQgLgvgLgyQgKgsgRguQgPglgegkQgbgggggiQghgjgfgkQgfgjgpgaQgCgBgDgCgAhRoBQAcANAXAaQAdAhAgAjQAeAhAbAnQAbAnAQAsQAOAqAXArQAUAoAMAtQANAxAFAqQAEAvADAtQADAxgBAyQgCAwgPAtQgSAvgUArQgXAxglAgQgUARgTAPQgRAOgQANQgCABgCABQgLAIgNACQgcAKgcgEQgbgDgagIQjig+hKhgQhJhggeglQgYgegWh4QgMgugMguQgKgtgMgxQgLgsAEguQAEgxAXgrQAXgtAXguQAUgqAhgiQAigiBagrQBagqCeArQAKADAJAEQABABAAAAQAogUApABQAnACAoAYAlFluQA4gaBLAgQBKAgAuCRQATA3ACA8QADBIARA8QATBCAFA6QAFA/gtA7QgpA2hCgXQg/gXgxgrQgzgugbgvQgWhAgEgxQgMg1gRg6QgQgzgGg1QgGgvgEg5QgBgRALgPQArg7A3gZgAEuGVQgBACgBABQgNAPgQALQgoAZgrAUQgsAVgpgBQgPAAgPgC");
	this.shape_43.setTransform(-13,16.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("ABBFkQg/gWgxgsQgzgugagvQgXg/gDgyQgNg1gRg5QgPg0gHg1QgGgvgDg5QgBgQALgPQAqg8A3gZQA4gZBKAgQBLAgAuCQQATA3ACA8QACBIASA9QATBBAEA6QAGA/gtA7QgdAmgpAAQgRAAgUgHg");
	this.shape_44.setTransform(-35.1,14.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgsIeQgbgDgagIQjig+hKhgQhJhggeglQgYgegWh4IgYhcIgWheQgLgsAEguQAEgxAXgrIAuhbQAUgqAhgiQAigiBagrQBagqCeArQAKADAJAEIABABQAogUApABQAnACAoAYQAdgRAegLQApgOArAKIAPAEQAmAJAkANQAuARAqAaQAsAZAOAnIAMAfIARAoIAIASIAdA+IAmBXQARArAEAtQAFAyAJAuQAJAvgHAxQgFAegHAcIgGAWIgDALQgQAxgUAqQgMAYgQAUIgEAEIgaAVQgWASgWAMQgqAZgugDQgYgCgZgJQAbghASgmQAXguALguQAIglAAgkIgBgVQgDguAAgsIAAgFIAAgFQAAgvgMguIgWhhQgKgsgRguQgPglgegkQgbgggggiQghgjgfgkQgfgjgpgaIgFgDIAFADQApAaAfAjQAfAkAhAjQAgAiAbAgQAeAkAPAlQARAuAKAsIAWBhQAMAuAAAvIAAAFIAAAFQAAAsADAuIABAVQAAAkgIAlQgLAugXAuQgSAmgbAhIgCADQgNAPgQALQgoAZgrAUQgsAVgpgBQgPAAgPgCIAnggQAlggAXgxQAUgrASgvQAPgtACgwIAAgfQAAgigCgiIgHhcQgFgqgNgxQgMgtgUgoQgXgrgOgqQgQgsgbgnQgbgngeghIg9hEQgXgagcgNQAcANAXAaIA9BEQAeAhAbAnQAbAnAQAsQAOAqAXArQAUAoAMAtQANAxAFAqIAHBcQACAiAAAiIAAAfQgCAwgPAtQgSAvgUArQgXAxglAgIgnAgIghAbIgEACQgLAIgNACQgUAHgVAAIgPgBgAlFluQg3AZgrA7QgLAPABARQAEA5AGAvQAGA1AQAzQARA6AMA1QAEAxAWBAQAbAvAzAuQAxArA/AXQBCAXApg2QAtg7gFg/QgFg6gThCQgRg8gDhIQgCg8gTg3QguiRhKggQgqgRgkAAQgcAAgZALg");
	this.shape_45.setTransform(-13,16.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.1,1,1).p("ADCGUQAVAKAVADQApAEAqgVQAWgMAWgPQANgJAOgKQACgCACgCQASgSAOgWQAagoAVgtQADgGADgFQAEgKAEgKQAMgbAIgcQAPgugBguQAAgtAFgvQAEgrgKgpQgJgrgKgqQgHgdgIgfQgCgJgCgIQgFgTgEgUQgDgOgDgPQgGgmgjgbQgigagmgSQgegOghgKQgGgCgGgCQglgMgoAMQgcAJgdAPQACACACABQAgAaAWAjQAWAkAYAiQAXAiATAfQAVAkAHAkQAIAsABArQACAwACAtQADAugJAvQgHAsgFAvQgFAsgSAtQgRAsgcAqQgXAkgdAegAACnlQAWANAQAaQAVAhAYAjQAVAgASAnQASAlAHArQAGAoANAqQAMAnADAsQADAvgCAoQgEAtgFArQgFAvgKAvQgJAugWAqQgXAsgZAoQgdAtgnAdQgTAPgUAOQANACANABQAkACArgRQArgSAngWQAQgJAOgOQACgCABgBAACnlQgBgBgBAAQgGgEgIgDQiGgwhYAkQhYAkgkAgQgkAfgZAnQgcAqgcArQgbAogMAuQgLArABArQADAvACArQADAsADAtQAABzARAdQAUAlAyBeQAyBfDBBEQAWAJAYAEQAYAFAcgJQAMgBALgHQACgBACgBQAQgMASgMAlWkXQAwg3A1gWQA3gWA9AiQA+AhARCMQAIA1gIA5QgKBEAGA7QAGA/gFA4QgGA7gyA3QguAyg3gZQg1gZglgrQgmgugRgtQgJg+AFgvQgCgzgGg3QgFgyADgyQACguAGg2QACgQANgNgACRnYQgggYgkgEQgkgDgnAS");
	this.shape_46.setTransform(-10.2,20);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgBFUQg1gYglgsQgmgtgQguQgKg9AFgwQgCgzgGg3QgFgxADgzQACgtAHg3QABgPANgOQAwg3A1gVQA2gWA9AhQA+AiASCLQAHA2gIA5QgKBEAGA6QAGBAgFA3QgGA8gyA3QgfAhgiAAQgSAAgRgJg");
	this.shape_47.setTransform(-30.7,18.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AiLIIQgYgEgWgJQjBhEgyhfIhGiDQgRgdAAhzIgGhZIgFhaQgBgrALgrQAMguAbgoIA4hVQAZgnAkgfQAkggBYgkQBYgkCGAwQAIADAGAEIACABQAWANAQAaIAtBEQAVAgASAnQASAlAHArQAGAoANAqQAMAnADAsQACAaAAAZIgBAkIgJBYQgFAvgKAvQgJAugWAqQgXAsgZAoQgdAtgnAdIgnAdIgiAYIgEACQgLAHgMABQgSAGgRAAQgIAAgJgCgAjxlkQg1AWgwA3QgNANgCAQQgGA2gCAuQgDAyAFAyQAGA3ACAzQgFAvAJA+QARAtAmAuQAlArA1AZQA3AZAugyQAyg3AGg7QAFg4gGg/QgGg7AKhEQAIg5gIg1QgRiMg+ghQglgUgjAAQgWAAgWAIgAAAHlQgNgBgNgCIAngdQAngdAdgtQAZgoAXgsQAWgqAJguQAKgvAFgvIAJhYIABgkQAAgZgCgaQgDgsgMgnQgNgqgGgoQgHgrgSglQgSgngVggIgthEQgQgagWgNQAngSAkADQAkAEAgAYIAEADQAgAaAWAjQAWAkAYAiQAXAiATAfQAVAkAHAkQAIAsABArIAEBdIABAWQAAAkgHAjQgHAsgFAvQgFAsgSAtQgRAsgcAqQgXAkgdAeQAdgeAXgkQAcgqARgsQASgtAFgsQAFgvAHgsQAHgjAAgkIgBgWIgEhdQgBgrgIgsQgHgkgVgkQgTgfgXgiQgYgigWgkQgWgjgggaIgEgDQAdgPAcgJQAogMAlAMIAMAEQAhAKAeAOQAmASAiAaQAjAbAGAmIAGAdIAJAnIAEARIAPA8IATBVQAKApgEArQgFAvAAAtQABAugPAuQgIAcgMAbIgIAUIgGALQgVAtgaAoQgOAWgSASIgEAEIgbATQgWAPgWAMQgqAVgpgEQgVgDgVgKIgDADQgOAOgQAJQgnAWgrASQgmAPghAAIgIAAgAgaHiIAAAAg");
	this.shape_48.setTransform(-10.2,20);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(0.1,1,1).p("AFSE0QAhgBAdgHQAogJAagdQAFgFAEgFQAXgZAUgbQAYgiAQgoQARgpgNgkQgGgOgEgOQgHgUgFgRQgDgIgCgJQgJgfgIgdQgNgpgNgqQgMgogZgjQgcgngWgnQgXgogjghQgWgUgXgRQgJgHgJgGQgFgEgFgDQgqgdgpgVQgYgNgYgGQgDgBgDAAQgQgCgQgBQgcgDgYACQgvACggAYQgRANgOATQApAMAlATQAtAXAlAdQAmAeAaAkQAbAmAdAiQAfAlAVAqQAVAoAWArQAUAlAQAqQAMAigBAqQAAAkgDApQgEAqgBAqQgCApgPAnQgBACgBACgADdGHQANgXABgeQACgnADgqQACgngEgqQgDgpgQgpQgPgmgJgrQgKgngSgnQgVgqgXgiQgagmgZgjQgdglgfgkQgegjgogaQgqgagqgXQgwgYgvgGQgagDgYgCQgVgCgUgCQgDAAgCABQgNgBgLAFQgcAGgTARQgSAPgPATQiFCbAEBrQAEBrABApQAAAhA5BlQAUAoAUAoQAUAmAVAqQAUAmAfAgQAhAiAsAVQAuAXAtAXQApAVAvAJQAvAJBdgMQBegNBdhsQAFgHAEgHQABgBAAgBQArgEAdgVQAdgVAQglAg5nbQgCAAgBgBQgTgFgTAAQgtABguAGQguAGgfAUQgLAIgKAIAlsjNQghAwgLA4QgKA6AJAvQAWA6AcAnQAYAtAXA0QAUAtAcAqQAZAnAhAsQAJAMARAFQBFAYA5gIQA5gIAlg8QAlg8g3iBQgUgzgigtQgrg2gZg1Qgag6ggguQgjgxhHgWQhBgUgjAxg");
	this.shape_49.setTransform(-7.8,17.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AAAEwQgRgFgKgNQghgsgZgmQgbgqgVguQgXgzgXguQgcglgXg6QgIgwAKg6QAKg5AigvQAjgxBAAUQBIAWAhAxQAhAuAaA5QAYA2ArA3QAkAsAUAyQA3CCglA8QglA7g6AJQgPACgPAAQgtAAgygSg");
	this.shape_50.setTransform(-25.8,25.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("Ah0ITQgvgJgpgVIhbguQgsgVghgiQgfgggUgmIgphQIgohQQg5hlAAghIgFiUQgEhrCFibQAPgTASgPQATgRAcgGQALgFANABIAFgBIApAEIAyAFQAvAGAwAYQAqAXAqAaQAoAaAeAjQAfAkAdAlIAzBJQAXAiAVAqQASAnAKAnQAJArAPAmQAQApADApQADAZAAAYIgBAgIgFBRQgBAegNAXIgBACQgEAHgFAHQhdBsheANQg2AHgnAAQgbAAgUgEgAlsjNQghAwgLA4QgKA6AJAvQAWA6AcAnQAYAtAXA0QAUAtAcAqQAZAnAhAsQAJAMARAFQBFAYA5gIQA5gIAlg8QAlg8g3iBQgUgzgigtQgrg2gZg1Qgag6ggguQgjgxhHgWQgTgGgQAAQgoAAgZAjgADrFSIAFhRIABggQAAgYgDgZQgDgpgQgpQgPgmgJgrQgKgngSgnQgVgqgXgiIgzhJQgdglgfgkQgegjgogaQgqgagqgXQgwgYgvgGIgygFQAKgIALgIQAfgUAugGQAugGAtgBQATAAATAFIADABQApAMAlATQAtAXAlAdQAmAeAaAkQAbAmAdAiQAfAlAVAqIArBTQAUAlAQAqQALAgAAAoIAAAEQAAAkgDApQgEAqgBAqQgCApgPAnIgCAEQgQAlgdAVQgdAVgrAEQANgXABgegAFSE0IAAAAgAFUEwQAPgnACgpQABgqAEgqQADgpAAgkIAAgEQAAgogLggQgQgqgUglIgrhTQgVgqgfglQgdgigbgmQgagkgmgeQglgdgtgXQglgTgpgMQAOgTARgNQAggYAvgCQAYgCAcADIAgADIAGABQAYAGAYANQApAVAqAdIAKAHIASANQAXARAWAUQAjAhAXAoQAWAnAcAnQAZAjAMAoIAaBTIARA8IAFARIAMAlIAKAcQANAkgRApQgQAogYAiQgUAbgXAZIgJAKQgaAdgoAJQgdAHghABIACgEgAkfmwIAAAAg");
	this.shape_51.setTransform(-7.8,17.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.1,1,1).p("ADonIQAAAEAAAEAhtnMQAhgfAWgbQAKgNARgGQAUgIAdADQAqADAmAMQAqAOAjARQAcANAZAbQAEAFAEAFQAWAcAZAWQAGAGAHAFQAhAbAXAjQAQAbAQAYQAIALAHALQATAbAJAkQAKAjALAkQACAGACAGQAOArAHAuQAGAjABAjQAAAIAAAJQABAggIAgQgKAtgSAqQgSApgiAeQggAcgoAPQgXAIgNgGQAQggAFgiQAFgpAGgqQAGgrgKgsQgKgrgOgqQgOgogKgqQgKgtgQgqQgQgpgXgoQgXgmgbgiQgbgkglgXQgmgYgogTQgmgSgogWQgVgLgWgDgABnG/QAQgcAIghQAMgsgFgvQgEgvgBguQgBgugKgsQgLgtgQgrQgPgqgWgmQgWglgSgrQgQgrgfgiQgggigegiQgfgjgngVQglgVgmgTQgRgIgSgEQAmgaAhgXQAVgPAcgFQAYgFAWADABnG/QgFAIgHAJQgZAkglAYQgSALgTAJAEhFTQgFAJgGAJQgWAlgkAXQggAVgtAHQgXAEgRgCAnhkBQgBgBgBAAQAAAAAAAAQAAgBAAAAQAEgTAJgSQASgnAngbQAlgaAvgFQAagDAZAGQACAAABABAnhkBQADAAADABAnhkBQACAAABABQABACABAC");
	this.shape_52.setTransform(-7.3,19.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(0.1,1,1).p("AD3GHQgqALgtAKQiEgNhjhJQgKgOgJgOQg3hWgthsQgzh4gEiBQgEiOAWh8");
	this.shape_53.setTransform(-32.9,35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("AgDgCIAAAAIAAgBIAHADIgFgBIgCgBIACABIACABIACAEIgCgEIgCgBIAFABIgBAEg");
	this.shape_54.setTransform(-55.3,-5.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("Ak+HUIgTgcQg2hVguhtQgzh4gEiBQgEiOAWh7IAHAGIABgFIgIgCQAEgTAIgSQATgnAngcQAlgaAvgEQAagDAZAGIADAAIBGgxQAVgOAdgFQAYgFAWADQAhgfAWgbQAKgNARgGQATgIAeACQAqADAmANQAqAOAjAQQAcANAYAcIAAAEIAAAEIAAgEIAAgEIAJAKQAVAbAaAXIANALQAgAaAXAkIAhAyIAPAWQATAcAJAkQAJAjAMAkIAEAMQANArAIAuQAFAjACAjIAAARQAAAggHAgQgKAtgSAqQgSApgjAeQggAcgnAOQgXAJgNgGQAQggAEgiIAMhUQACgPAAgQQAAgbgHgcQgJgrgPgqQgOgogJgrQgKgtgQgpQgQgqgYgnQgXgngagiQgbgjglgXQgngYgngTQgmgTgogVQgVgLgWgDQAWADAVALQAoAVAmATQAnATAnAYQAlAXAbAjQAaAiAXAnQAYAnAQAqQAQApAKAtQAJArAOAoQAPAqAJArQAHAcAAAbQAAAQgCAPIgMBUQgEAigQAgIgLASQgWAkgkAYQghAVgsAHQgXAEgRgDQAQgcAIggQAIgfAAghIgBgbQgEgvgCguQAAgvgKgrQgLgtgQgrQgPgqgWgmQgWgmgSgqQgSgrgegiIg9hEQgfgjgngWQglgUgmgTQgRgIgSgFQASAFARAIQAmATAlAUQAnAWAfAjIA9BEQAeAiASArQASAqAWAmQAWAmAPAqQAQArALAtQAKArAAAvQACAuAEAvIABAbQAAAhgIAfQgIAggQAcIgMASQgZAkglAXQgSAMgUAJIhWAUQiEgNhkhJgADwnSIAAAAg");
	this.shape_55.setTransform(-8.2,20.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(0.1,1,1).p("ABPn6QAdgRAegLQApgOArAKQAIACAHACQAmAJAkANQAuARAqAaQAsAZAOAoQAGAPAGAPQAJAVAIATQAEAJAEAJQAPAgAOAeQATArASAsQASArAEAtQAFAyAJAuQAJAvgHAxQgFAegHAdQgCAKgEALQgBAGgCAFQgQAxgUAqQgMAYgQAUQgCACgCACQgNALgNAKQgWASgWAMQgqAZgugDQgYgCgZgJQgBACgBABQgNAPgRALQgnAZgrAUQgsAVgpgBQgPAAgPgCQgRAOgQANQgCABgCABQgLAIgNACQgcAKgcgEQgbgDgagIQjig+hKhgQhJhggeglQgYgdgXh5QgMgugLguQgLgtgLgwQgLgtAEguQAEgxAXgrQAXgtAWguQAUgqAigiQAigiBagrQBagqCeArQAKADAJAEQABABAAAAQAogUApABQAnACAoAYQADACACABQApAaAfAjQAfAkAhAjQAgAiAbAgQAeAkAPAlQARAuAKAsQALAyALAvQAMAwAAAyQAAAuADAxQAEAugLAwQgLAugXAuQgSAmgbAhAlFluQA4gZBKAfQBLAgAuCRQATA3ACA8QADBIARA8QATBCAFA6QAGA/guA7QgpA2hCgXQg/gXgxgrQgzgugbgvQgWhAgEgxQgMg1gSg6QgPgzgGg1QgGgvgEg5QgBgRALgOQArg8A3gZgABJHxQATgPAUgRQAlggAXgxQAUgrARgvQAQgtACgwQABgxgDgxQgDgtgEgwQgFgpgNgyQgMgsgVgpQgWgrgPgqQgPgsgbgnQgbgngfghQgfgigegiQgWgagcgN");
	this.shape_56.setTransform(-14.7,16.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("ABBFkQg/gXgxgrQgzgugagvQgXhAgDgxQgNg1gRg6QgPgzgHg1QgGgvgDg5QgBgQALgPQAqg8A3gZQA4gZBKAfQBLAgAuCRQATA3ACA8QACBIASA8QATBCAFA6QAFA/gtA7QgdAmgpAAQgRAAgUgHg");
	this.shape_57.setTransform(-36.9,14.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgsIeQgbgDgagIQjig+hKhgQhJhggeglQgYgdgXh5IgXhcIgWhdQgLgtAEguQAEgxAXgrIAthbQAUgqAigiQAigiBagrQBagqCeArQAKADAJAEIABABQAcANAWAaIA9BEQAfAhAbAnQAbAnAPAsQAPAqAWArQAVApAMAsQANAyAFApIAHBdQACAhAAAiIAAAfQgCAwgQAtQgRAvgUArQgXAxglAgIgnAgIghAbIgEACQgLAIgNACQgUAHgVAAIgPgBgAlFluQg3AZgrA8QgLAOABARQAEA5AGAvQAGA1APAzQASA6AMA1QAEAxAWBAQAbAvAzAuQAxArA/AXQBCAXApg2QAug7gGg/QgFg6gThCQgRg8gDhIQgCg8gTg3QguiRhLggQgpgRgkAAQgcAAgZALgABnHzQgPAAgPgCIAnggQAlggAXgxQAUgrARgvQAQgtACgwIAAgfQAAgigCghIgHhdQgFgpgNgyQgMgsgVgpQgWgrgPgqQgPgsgbgnQgbgngfghIg9hEQgWgagcgNQAogUApABQAnACAoAYIAFADQApAaAfAjQAfAkAhAjQAgAiAbAgQAeAkAPAlQARAuAKAsIAWBhQAMAuAAAvIAAAFIAAAFQAAAsADAuIABAVQAAAkgIAlQgLAugXAuQgSAmgbAhIgCADQgNAPgRALQgnAZgrAUQgrAUgoAAIgCAAgAFfGgQgYgCgZgJQAbghASgmQAXguALguQAIglAAgkIgBgVQgDguAAgsIAAgFIAAgFQAAgvgMguIgWhhQgKgsgRguQgPglgegkQgbgggggiQghgjgfgkQgfgjgpgaIgFgDQAdgRAegLQApgOArAKIAPAEQAmAJAkANQAuARAqAaQAsAZAOAoIAMAeIARAoIAIASIAdA+IAlBXQASArAEAtQAFAyAJAuQAJAvgHAxQgFAegHAdIgGAVIgDALQgQAxgUAqQgMAYgQAUIgEAEIgaAVQgWASgWAMQglAXgpAAIgKgBgAhRoBIAAAAg");
	this.shape_58.setTransform(-14.7,16.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.1,1,1).p("AkVl5QACAAADgBQAvgLAvADQAwADAwACQAuABApAEQAvAEAkAQQAsAUAnAZQArAbApAZQArAaAjAkQAhAgAlAgQAjAfAaApQAZApARAvQANAoAFAqQAAACAAACQACAUgEATQgKAtgQAuQgRAtgeAdQgKAKgMAJQACgYACgaQAEgxgSgzQgQgsgVgtQgVgrghgkQgigjgkggQgigeglgeQghgbgsgaQgpgXgrgOQgugOgngUQgrgUgugIQgvgJgsgCQgwgBgsgDQgjgCgdAKQAOgrAegbQAegbAugMQAIghANgcQATgnAmgXQAHgEAGgEQAhgUAjgRQAsgVAxgMQAwgMAmARQAPAHAOAGQAVAJAUAIQAJADAJADQAhANAfAMQAsARAtASQAqARAjAdQAmAgAoAbQAoAbAdAoQASAYAQAZQAFAKAFAJQADAGADAFQAYAtAPAtQAJAZADAaQAAACAAADQgCARgCAQQgDAcgHAYQgMAvgjAeQgSAQgYALAGrFQQgCAWgDAVQAAACgBACQgCANgIALQgNAcgWARQgWAQgYANQjMB1h4gQQh3gQgvgGQglgEhmhFQgpgYgpgZQgngYgrgaQgngYgegkQgfglgPguQgQgxgQgwQgPgsgBgwQAAgwAihdQAihdCOhRQAJgFAJgDQABgBAAAAAg+AaQA1AxA2AfQA8AhAtAmQAwAoAKBKQAJBEg/AdQg8AdhCAEQhEAEg0gOQg9gdglghQgvgdg1gdQgvgagqggQgmgegrglQgMgLgCgTQgMhIAVg4QAVg5BLgeQBMgeCHBFQA0AaAsAog");
	this.shape_59.setTransform(-17.1,12.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AArD0Qg8gdglghQgvgcg2gdQgvgagqghQgmgdgqglQgMgLgDgSQgMhIAVg4QAWg6BLgeQBLgfCHBGQA0AaArApQA1AxA4AfQA7AhAtAlQAwAoAKBKQAJBDg+AeQg9AdhCAEIgcABQgzAAgpgMg");
	this.shape_60.setTransform(-30.7,29.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AAGJGQh3gQgvgGQglgEhmhFIhSgxIhSgyQgngYgegkQgfglgPguIgghhQgPgsgBgwQAAgwAihdQAihdCOhRQAJgFAJgDIABgBQAOgrAegbQAegbAugMIAFgBQAkgJAkAAIAAAAIAAAAIATABIADAAQAwADAwACQAuABApAEQAvAEAkAQQAsAUAnAZIBUA0QArAaAjAkQAhAgAlAgQAjAfAaApQAZApARAvQANAoAFAqQgFgqgNgoQgRgvgZgpQgagpgjgfQglggghggQgjgkgrgaIhUg0QgngZgsgUQgkgQgvgEQgpgEgugBQgwgCgwgDIgDAAIgTgBIAAAAIAAAAQgkAAgkAJIgFABQAIghANgcQATgnAmgXIANgIQAhgUAjgRQAsgVAxgMQAwgMAmARIAdANIApARIASAGIBAAZIBZAjQAqARAjAdQAmAgAoAbQAoAbAdAoQASAYAQAZIAKATIAGALQAYAtAPAtQAJAZADAaIAAAFIgEAhQgDAcgHAYQgMAvgjAeQgSAQgYALIAAAEQACAUgEATQgKAtgQAuQgRAtgeAdQgKAKgMAJIAEgyIABgRQAAgogPgrQgQgsgVgtQgVgrghgkQgigjgkggIhHg8QghgbgsgaQgpgXgrgOQgugOgngUQgrgUgugIQgvgJgsgCIhcgEIgCAAIgFAAIgHAAIAAAAIAAAAQgbAAgXAIQAXgIAbAAIAAAAIAAAAIAHAAIAFAAIACAAIBcAEQAsACAvAJQAuAIArAUQAnAUAuAOQArAOApAXQAsAaAhAbIBHA8QAkAgAiAjQAhAkAVArQAVAtAQAsQAPArAAAoIgBARIgEAyIgFArIgBAEQgCANgIALQgNAcgWARQgWAQgYANQizBnhzAAQgQAAgOgCgAlxhPQhLAegVA5QgVA4AMBIQACATAMALQArAlAmAeQAqAgAvAaQA1AdAvAdQAlAhA9AdQA0AOBEgEQBCgEA8gdQA/gdgJhEQgKhKgwgoQgtgmg8ghQg2gfg1gxQgsgog0gaQhegwhBAAQgdAAgXAJg");
	this.shape_61.setTransform(-17.1,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},2).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).wait(1));

	// head
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.1,1,1).p("AiBiMQAFAEAEAFAB1DeQAJgDAJgIQAUgTAagLQAmgRgogSQAKgEAGgJQANgWgEgZQgBAAgOgDQABgbgDgPQAHAAANAKQgBgMgFgJQgVgvgXgkQALACALADQAMADAIAJQgJgkgjggQg2gzg4gSQAXgKATgLQhLgUhLAVQgbAIgFgVQgCAMgJAAQgHgQgMgLQAHAngLAqQgdgWgoAUQgEACgEAC");
	this.shape_62.setTransform(35.2,-18.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#996600").s().p("ABiCoQgSgsgggjQgfgigcgoQgagiglgbIhMg2Ig4gmIAIgEQAogUAdAWIAJAJIgJgJQALgqgHgnQAMALAHAQQAJAAACgMQAFAVAbgIQBLgVBLAUQgTALgXAKQA4ASA2AzQAjAgAJAkQgIgJgMgDIgWgFQAXAkAVAvQAFAJABAMQgNgKgHAAQADAPgBAbIAPADQAEAZgNAWQgGAJgKAEQAoASgmARQgaALgUATQgJAIgJADQgIgbgLgbgAiBiMIAAAAg");
	this.shape_63.setTransform(35.2,-18.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.1,1,1).p("Ag2jGQAAAGAAAHAg2jGQgFgjgqgPQgFgBgEgCAiIDoQAJAFALAAQAcABAaAKQAnAQgPgpQAKAEAKgDQAYgGAPgUQgBgBgIgLQAUgTAIgNQAFAFADAQQAHgJAEgKQASgxAJgqQAHAKAFAKQAHALgBAMQATghgCgvQgChJgag0QAWAJAWAFQgnhDhFgnQgZgNAMgSQgKAHgGgGQAGgRgBgQQgWAgglAW");
	this.shape_64.setTransform(42.5,11.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#996600").s().p("Ag+D4QgagKgcgBQgLAAgJgFQANgYAMgbQASgsACgvQACgvAIgvQAHgrgHgtIgQhcIgNhDIAJADQAqAPAFAjIAAAIIAAAFIAAgFIAAgIQAlgWAWggQABAQgGARQAGAGAKgHQgMASAZANQBFAnAnBDQgWgFgWgJQAaA0ACBJQACAvgTAhQABgMgHgLIgMgUQgJAqgTAxQgDAKgHAJQgDgQgFgFQgIANgUATIAJAMQgPAUgYAGQgKADgKgEQALAegRAAQgHAAgLgFg");
	this.shape_65.setTransform(42.5,11.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(0.1,1,1).p("AB1DeQAJgDAJgIQAUgTAagLQAmgRgogSQAKgEAGgJQANgWgEgZQgBAAgOgDQABgbgDgPQAHAAANAKQgBgMgFgJQgVgvgXgkQALACALADQAMADAIAJQgJgkgjggQg2gzg4gSQAXgKATgLQhLgUhLAVQgbAIgFgVQgCAMgJAAQgHgQgMgLQAHAngLAqQgdgWgoAUQgEACgEACAiBiMQAFAEAEAF");
	this.shape_66.setTransform(31.3,0.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#996600").s().p("ABiCoQgSgsgggjQgfgigcgoQgagiglgbIhMg2Ig4gmIAIgEQAogUAdAWQALgqgHgnQAMALAHAQQAJAAACgMQAFAVAbgIQBLgVBLAUQgTALgXAKQA4ASA2AzQAjAgAJAkQgIgJgMgDIgWgFQAXAkAVAvQAFAJABAMQgNgKgHAAQADAPgBAbIAPADQAEAZgNAWQgGAJgKAEQAoASgmARQgaALgUATQgJAIgJADQgIgbgLgbgAh4iDIgJgJIAJAJg");
	this.shape_67.setTransform(31.3,0.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(0.1,1,1).p("Ai9gyQADgEABgEQAEgOALgPQAHgJAKgIQADgCADgCQAOgMAPgGQANgEANAAQAFAAAEAAQAEABAEABAhciCQgBADgCADQgKATAXgDQAIgBAEgEQAEgFgBgHQAEACAEADQgDAEgDAFQgBACAAABQgEAKABAMAhDh9QgBgBgBAAQgDgBgDgBQAAgKgFgIQgEgIgFgHQgKgPgHgIQAPAAAQAAQARACAPAEQAZAHAWAJQgBgIgCgIQgDgbgMgYQANAFALANQAXAbAQAfQAHAQAIgLQAPgXAGgZQgBAFACAFQAIAdAGAdQABAHgBAHQgEANAJABQADAAACABQAfACAgADQgUASgYARQAIALAKALQAIAKAHAKQAPAYANAYQgPgHgRgFQACAFAAAFQABASgDASQgDARgHAQQgIAPgQAMQgFAOgKAKQgDAAgBADQgOALgTAEQgRADgNgKQgCgCgDgBQgCAYgPASQgOAQgSAKQgGACgGADAg7h4QAHgHAKgEQAQgHARADQAUADACASQABAOgJALQgDADgCADQgJAIgIAHQgFADgFAEAhFAXQgJAQAAARQABAFABAEQAFALAPgBQANgCAJgHQAMgMAJgQQAGgMgCgMQgBgDgBgEQgIgIgQABQgTACgKAOQgDADgCAEgAAFhZQASgCAPAHQAMAGAKAKQABABACACQAKAMAFARQANAAADgKQAGAQgEAUQgFAVgNAPQgLANgNAHQATACANAGQgFAIgHAFQAOAEASAFQAWAHAAAVQgBALgDAKAAXgwQgUAIAGAMQABADAFgBQAQAAAIgOQACgEAAgDQABgJgTAIg");
	this.shape_68.setTransform(40.4,-14.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF00").s().p("AgFAFQAEgFgBgGIAHAFIgFAIg");
	this.shape_69.setTransform(33.9,-26.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#996600").s().p("ABWCdQABgWgWgGIghgKQAHgEAFgJQgNgFgTgCQAOgIALgNQANgPAEgWQAEgUgGgQQgCAKgOAAQgFgQgKgMIgCgDQgKgKgLgFQgPgHgTACQAJgMgBgNQgCgTgVgDQgRgDgQAHQgKAEgHAIIgIgGIgBgBIgGgCQgBgKgFgIIgIgPIgRgWIAfAAQAQABAPAEQAZAHAXAKIgCgRQgEgagNgYQAOAFALANQAXAaAPAgQAHAPAIgKQAQgXAFgZQgBAFACAEQAIAdAGAeQACAHgCAGQgDAOAIAAIAFABIA/AGQgUASgXAQQAIALAJAKQAJAKAGAKIAcAyQgOgHgRgFIABAJQABATgCARQgDASgIAPQgIAPgQAMQADgJABgLg");
	this.shape_70.setTransform(44.6,-20.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgvBdQgCgDAAgGQAAgRAJgPIAEgIQAKgOATgCQAQgCAHAKIACAGQADANgGALQgJAQgMAMQgJAIgMABIgEAAQgMAAgEgKgAAlAAQgFgMAUgIQATgHgBAIIgCAHQgIANgRABIgBAAQgEAAgBgCgAhChgIADgGIAIAAIAJACIAGACIACABQAAAHgDAFQgEAEgJABIgGABQgPAAAJgRg");
	this.shape_71.setTransform(37.5,-17.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFCC99").s().p("AgOBwQgJgkgTgbIgPgWIgggxQgXgkghgbIgNgLQADgFABgDQAEgOALgPQAHgJAKgIIAGgFQAOgLAPgGQANgFAOAAIgEAHQgKATAXgDQAIgBAEgFIAFADIAGgJQAHgIAKgEQAPgGARADQAVADACASQABAOgJALIgGAGIgRAPIgKAHIAKgHIARgPIAGgGQATgCAOAHQANAFAJALIADACQAKANAFARQAOAAACgKQAGAPgEAVQgEAWgOAPQgKANgOAGQATACANAGQgFAIgHAEIAgAKQAXAGgBAWQgBALgDAJQgFAOgKALQgBAAAAAAQgBAAgBABQAAAAAAAAQgBABAAABQgOALgTAEQgRACgNgJQgCgCgDgBQgBAYgQASQgOAQgTAJIgMAFQgKgkgKgjgAgEguQgTACgKAOIgFAIQgJAPABARQAAAFABAEQAFALAPgCQANgBAJgIQAMgLAIgPQAGgMgCgMIgCgHQgHgIgMAAIgEAAgAA2heQgTAHAFAMQABAEAFgBQAQAAAIgOIADgHQAAgFgFAAQgFAAgJAEgAgmiFIAAgFQAAgJADgHIABgDIgBADQgDAHAAAJIAAAFg");
	this.shape_72.setTransform(37.3,-10.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.1,1,1).p("AgdCJQAFAJAAAKQAAAIAAAIQgCATgCAKQAOgIANgIQANgJALgMQASgSAOgUQAEAIADAIQAKAZABAaQAJgKADgRQAHgjgCgjQgBgRAMAFQAZAMARATQgDgEgBgFQgHgdgKgcQgCgHgEgFQgKgKAHgFQACgBACgCQAagSAZgRQgagGgcgCQABgOACgOQADgNAAgMQABgegBgbQgJAOgMAMQgBgEgDgFQgIgQgLgOQgLgOgPgJQgOgJgUgCAikjGQAGgBAHgBQAVgBAUAHQAWAIAOAUQACgCABgDQAGgPAQgGQASgGASACQACACADgBQANAEALAKQAIAGAFAJQAMATgQAQQgNAOgKALQAIAAAJAFQgJALgOALQAOAAAQAGQATAGAPARQANAQADAQQgHgHgMAGQAEASgCAOQgBACAAACQgDAOgIALQgKANgRAIQgEgCgEgBQgLgCgKgCQgGAAgGgBAgsgTQABAEABADQgCAMgPAGQgRAIgQgIQgEgCgEgCQgPgIgJgPQgCgFgBgEQgCgMAPgGQALgFAMACQARAEAPAJQALAIAEALgAgGAIQAAgDAEgCQAOgHAOAHQAEADABACQAFAHgUADQgUADgCgNgAAUA/QAOAFAFAMQAIARgQANQgOALgRACQgKACgJgDQgFgCgFgDQgBgBgCgBQgIgGgFgLAgqCTQgDgBgDgCQgTgNAWgIQAIgDAFACQAFACADAHQAAAAgBABQgCADgCACQgDADgDADQgEACgDACQgMAHgNACQgQADgTgDQgDAAgEgBQgMgCgLgEQgRgIgKgJQgDgDgFgDAgTB6QgCAFgDAE");
	this.shape_73.setTransform(52.9,21.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFF00").s().p("AgFgBIADgFIAIAFIgEAIQgCgHgFgBg");
	this.shape_74.setTransform(50.2,34);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#996600").s().p("AhdCjIAAgRQgBgJgEgJIAEgFIABgCIAFgIQAJADALgCQARgCAOgLQAQgNgIgRQgFgMgOgGQARgHAKgOQAHgKAEgOIABgEQACgPgEgRQALgHAHAIQgDgRgMgPQgPgRgTgGQgQgGgPAAQAPgLAJgLQgJgGgIAAIAXgYQAQgRgMgSQgGgJgHgHQAUADAOAJQAOAJALAOQALANAIARIAEAJQAMgNAJgNIAAA5QAAAMgDANQgDAOgBAOQAdACAaAGIgzAjIgEADQgHAFAJAKQAFAFACAHQAJAcAIAdQABAFADAEQgRgTgZgMQgMgGABASQACAjgHAjQgDAQgJALQgBgagJgaIgHgPQgOATgSATQgLALgOAKIgbAQIAEgdg");
	this.shape_75.setTransform(59.8,22.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAABgQgTgMAVgIQAHgDAGABQAFACADAHIgBACIgEAFIgGAFIgHAFIgFgEgAApgmQAAgDAEgCQAPgIAOAIIAFAFQAFAHgUADIgHAAQgPAAgBgKgAgsgoIgIgEQgPgJgJgPQgCgFgBgEQgCgMAPgGQALgFAMACQARADAPAKQALAHADAMIACAHQgCAMgOAGQgJAEgJAAQgIAAgHgDg");
	this.shape_76.setTransform(48.1,26.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC99").s().p("Ag4CyIgGgBQgNgDgLgEQgRgHgKgKQgDgDgFgCIAGgQQAPgoACgqIADg7IACgbQADghgLgjQgJgjgIglIANgCQAVgCAUAHQAWAIAOAUQACgCABgDQAGgPAQgGQARgGASADQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAQAOADALAKQAIAGAFAKQAMASgQARIgXAYQAIAAAJAFQgJAMgPALQAPgBAQAGQATAHAPARQANAPADAQQgHgHgMAGQAEARgCAQIgBAEQgDANgIALQgKAOgRAHIgIgCIgWgEIgMgCIAMACIAWAEIAIACQAOAGAFAMQAIARgQANQgOALgRACQgLACgJgEIgKgEIgDgCQgIgHgEgLQAEALAIAHIADACIgDAEQgFgBgIADQgVAIATAMIAFAEQgLAGgNADIgRABIgSgBgAArAZQgEACAAADQACANAVgDQAUgDgFgHIgFgFQgHgEgHAAQgHAAgIAEgAhEgaQgPAGACAMQABAEADAEQAIAPAPAJIAIAEQAQAHARgIQAOgGACgMIgCgHQgDgLgLgHQgPgKgRgDIgHgBQgIAAgIAEg");
	this.shape_77.setTransform(48.3,19.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(0.1,1,1).p("AiBiMQgdgWgoAUQgEACgEACAiBiMQAFAEAEAFAB1DeQAJgDAJgIQAUgTAagLQAmgRgogSQAKgEAGgJQANgWgEgZQgBAAgOgDQABgbgDgPQAHAAANAKQgBgMgFgJQgVgvgXgkQALACALADQAMADAIAJQgJgkgjggQg2gzg4gSQAXgKATgLQhLgUhLAVQgbAIgFgVQgCAMgJAAQgHgQgMgLQAHAngLAq");
	this.shape_78.setTransform(17.3,-27.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#996600").s().p("ABiCoQgSgsgggjQgfgigcgoQgagiglgbIhMg2Ig4gmIAIgEQAogUAdAWIAJAJIgJgJQALgqgHgnQAMALAHAQQAJAAACgMQAFAVAbgIQBLgVBLAUQgTALgXAKQA4ASA2AzQAjAgAJAkQgIgJgMgDIgWgFQAXAkAVAvQAFAJABAMQgNgKgHAAQADAPgBAbIAPADQAEAZgNAWQgGAJgKAEQAoASgmARQgaALgUATQgJAIgJADQgIgbgLgbg");
	this.shape_79.setTransform(17.3,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63,p:{y:-18.1}},{t:this.shape_62,p:{y:-18.1}}]}).to({state:[{t:this.shape_63,p:{y:-4}},{t:this.shape_62,p:{y:-4}}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},2).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.1,-62.8,163.8,133.7);


(lib.example1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// predicate
	this.instance = new lib.text_predicate("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(219.6,-31.4,1,1,0,0,0,43,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).to({alpha:1},6).wait(23).to({mode:"single"},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(37));

	// bracket
	this.instance_1 = new lib.bracketdisplay("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.1,-6.5,1,1,0,0,0,118,11.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).wait(90));

	// Layer 18
	this.instance_2 = new lib.text_complement("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(287.5,16.4,1,1,0,0,0,47.1,14.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:false},0).to({alpha:1},9).wait(125));

	// Layer 17
	this.instance_3 = new lib.text_verb("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(146.8,16.4,1,1,0,0,0,20.6,14.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({alpha:1},6).wait(165));

	// subject
	this.instance_4 = new lib.text_subject("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(35.9,16.4,1,1,0,0,0,35.9,14.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.text_bub("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(37,74.9,1,1,0,0,0,17.8,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_4},{t:this.instance_5}]},106).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({alpha:1},4).wait(106).to({startPosition:0},0).wait(80));

	// s_word
	this.instance_6 = new lib.text_bub("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(37,74.9,1,1,0,0,0,17.8,14.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.text_found("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(147.9,75.7,1,1,0,0,0,26.1,14.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({alpha:1},5).to({_off:true},101).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(112).to({_off:false},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(68));

	// p_word1
	this.instance_8 = new lib.text_found("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(147.9,75.7,1,1,0,0,0,26.1,14.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.textcleverly("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(154.4,121.1,1,1,0,0,0,35.3,35.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({alpha:1},6).to({_off:true},80).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(112).to({_off:false},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(68));

	// p_word2
	this.instance_10 = new lib.textcleverly("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(154.4,121.1,1,1,0,0,0,35.3,35.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.text_innertubes("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(285.2,74.9,1,1,0,0,0,47.1,14.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(42).to({_off:false},0).to({alpha:1},6).to({_off:true},64).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(112).to({_off:false},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(68));

	// p_word3
	this.instance_12 = new lib.text_innertubes("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(285.2,74.9,1,1,0,0,0,47.1,14.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.text_three("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(265.4,118.7,1,1,0,0,0,28.6,28.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(66).to({_off:false},0).to({alpha:1},6).to({_off:true},40).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(112).to({_off:false},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(68));

	// p_word4
	this.instance_14 = new lib.text_three("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(265.4,118.7,1,1,0,0,0,28.6,28.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.text_large("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(331,119.2,1,1,0,0,0,27,27);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(85).to({_off:false},0).to({alpha:1},6).to({_off:true},21).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(112).to({_off:false},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(68));

	// p_word5
	this.instance_16 = new lib.text_large("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(331,119.2,1,1,0,0,0,27,27);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(85).to({_off:false},0).to({alpha:1},6).wait(101));

	// d_line3
	this.instance_17 = new lib.line();
	this.instance_17.parent = this;
	this.instance_17.setTransform(283.3,93.9,1,0.185,-45);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(76).to({_off:false},0).to({scaleY:3.14},5).wait(111));

	// d_line2
	this.instance_18 = new lib.line();
	this.instance_18.parent = this;
	this.instance_18.setTransform(220.9,93.9,1,0.185,-45);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(76).to({_off:false},0).to({scaleY:3.14},5).wait(111));

	// v_line2
	this.instance_19 = new lib.line();
	this.instance_19.parent = this;
	this.instance_19.setTransform(207.8,68.2,1,0.064);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(44).to({_off:false},0).to({scaleY:0.91},5).wait(143));

	// d_line
	this.instance_20 = new lib.line();
	this.instance_20.parent = this;
	this.instance_20.setTransform(101.4,95.1,1,0.185,-45);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(33).to({_off:false},0).to({scaleY:3.14},3).wait(156));

	// v_line
	this.instance_21 = new lib.line();
	this.instance_21.parent = this;
	this.instance_21.setTransform(87.4,54.8,1,0.031);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleY:2.46},5).wait(187));

	// h_line
	this.instance_22 = new lib.line();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0,94.4,1,0.022,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleY:13.68},5).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,54.5,374.4,98.4);


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


(lib.animsamrolls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sam("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20.8,19.9,0.462,0.462,0,0,0,45.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43.8,41.8);


(lib.anim_mick_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// front arm
	this.instance = new lib.static_mick_arm("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.3,46.4,1,1,-15,0,0,7.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:8.6,regY:3.7,rotation:135,x:87.3,y:49.3},4).to({regX:7.8,regY:6.1,rotation:0,x:86.2,y:46.4},5).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("AGKksQAJgugRgjQALArggAMQAJgtgqggQANAggOAkQgEALgGAHQgRAWgegLQAEAGACAFAGoj8QADgHACgHQAIgagEgbQgLAUgbAEIgBAAQgDAAgDAAAESkyQAAgBgBgBQgNgVgRgVQgHgIgHgGQgBgBgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBgBgBQgTgNgYgGQgpgLgfAWQgdAUgdALQgTAHgRgHQgZgMgKgWQAJAVANAVQAFAHAFAGQAGAIgBAGQgCAFgJAFQgbANghgGQgGgCgGgBQAZAQAWARQAFAEACADQAIALgKAMQgPASgZgEQAIAFAJAGQATAOAVAIQAGACAFACQACAAABABQAOAEAPACQANACAOAAQAbABASgUQAWgYAKgjQALglAlgHQANgCALAAQAUACAKAMQABABABABQABABAAAAQAAABABAAQAAABABABQAAABAAAAIABAAQADAGABAHAEckNQAGACAGAAQAEAAAEAAQAcgCAMgdAEqjNQgHgEgHgFQgIgGgGgJQgBgBAAgBQgBgBgBgBQgBgCgBgCQgGgLgDgPQgCgGACgIAE2jnQACACACACQAbAWAkgIAEmj5QAHAEAHACQABABABAAQABAAAAAAQABABAAAAQAcAIAbgIQAIgCAFgFQAEgEACgHAEYieQACgDADgEQALgQACgYQAWANAeAAQASAAAOgGQAAAAAAAAIAAAAQABAAAAAAQABgBABAAQAQgIAKgPQAHgKAEgLQAAgCABgCQAAgCABgDQgBACgBADQgBABgBACQgFAKgJAHAEViqQgCAFgDAAQgHgPACgFQACgGALAGQgBAKgCAFgAEKifQADAAADAAQAEAAAEABAEXhpQADAAAEAAQATAAADgWQADgbgfgEADek9QgEgOgNgJQgMgJgWgDQgfgEgVAQQgBABgCACQgBAAgBABQAAABAAAAQgBAAAAABQgDADgDAEQgUAagYgBQgIAAgJgEACEk9QgZAbgQAgQAAAAAAABQgSAkggAGQgIACgJgCADejBQgWgJAFAgQANgLAEgMgADujTQgVgpgRAfAg3jcQgFgBgGgBQgNgEgIgFQARADAPAIgABEkPQgZAjgkgZQgFgDgDgEAAtiwQgYAagjAOQgiAOgkADQghADgdAUQggAWgbAYQgHAFgGAGQgUASgVAUQgXAWgZAfQgWAcgWAfQgXAfgQAhQgQAkgOAiQgLAZgCAcQAAABAAACQgBADAAAEQAAABAAABQABAEAAAEAimGCQAHgTALgTQAOgbAWgSQCeioAOgbQADgHACgIQABgCAAgCQARgbgPgkQgOgiAXglQAcAFAXAWQAaAYAogNQAcgKATgWQgcgDgTgTQgZgbgRgjADxgnQADgDADgDQAVgcALggQgSAAgFgGAmyE2QAbAcAiAUQAgATAkAPQAiAPAkgEQAmgEAegMQABAAAAAAQAAAAAAgBAinGDQABAAAAgB");
	this.shape.setTransform(95,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZgEQACgGALAGQgBAJgCAFQgCAFgDAAQgHgPACgEgAgTgMQgEAMgNAKQgFgfAWAJg");
	this.shape_1.setTransform(119.2,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AjyFTQgkgPgggTQgigTgbgcIAAgCIABgIIAAgDQACgbALgaIAehFQAQgiAXgfIAsg6QAZgfAXgWIApgnIANgLQAbgXAggWQAdgUAhgDQAjgEAigNQAkgOAYgbQANACAOABQAbAAASgUQAWgYAKgiQALglAlgHQAOgDAKABQAUABAKAMIACADIABAAIABACIABABIAAACQgBAIABAGQADAOAGAMIACADIACADIABABQAGAJAIAHIAOAJQgCAXgLARIgFAGIgIAAIgGAAIAGAAIAIAAQAgAEgEAbQgDAWgTABIgHAAQgSgBgFgFQAFAFASABQgLAggVAbIgGAHQgcgEgTgTQgZgagRgjQARAjAZAaQATATAcAEQgTAVgcAKQgoAOgagYQgXgXgcgFQgXAmAOAiQAPAjgRAcIgBADIgFAQQgOAbieCnQgWATgOAaQgLATgHAUIgBAAQgeANgmAEIgOAAQgcAAgcgMgAFKjuQgCAFAHAQQADgBACgFQACgFABgKQgFgCgEAAQgDAAgBACgAEMjeQANgMAEgLQgFgDgEAAQgMAAAEAagAEtkHIgBgBIAAAAIAAgBIgCgDIAAAAQgKgTgKAAIAAAAIAAAAQgHABgHALIgBACIABgCQAHgLAHgBIAAAAIAAAAQAKAAAKATIAAAAIACADIAAABIAAAAIABABIAAAAg");
	this.shape_2.setTransform(88.7,45.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AhuByQgOAAgNgCQgPgCgOgEIgDgBIgLgEQgWgIgTgOQgJgGgIgFQAZAEAPgSQAKgLgIgLQgCgEgFgEQgWgRgZgPIAMADQAhAFAcgMQAJgEACgGQABgGgGgIIgKgNQgOgVgJgVQAJAWAbAMQARAHATgHQAdgLAdgUQAfgWApALQAXAGATANIACACIAAAAIABABIABABIACABQAHAGAHAIQARAVANAVIABACIAGALIgGgLQAeALARgWQAGgHAEgLQAOgkgNggQAqAggJAtQAggMgLgrQARAjgJAuIAAAFIgGAAIAGAAIABAAQAbgDALgVQAEAbgIAZIgFAOIgCAFIgCADQgFAKgJAHQAJgHAFgKIACgDIACgFIgBAFIgBAEQgEALgHAKQgKAPgQAIIgCABIgBAAIAAAAIAAAAQgOAGgSAAQgeAAgWgNIgOgJQgIgGgGgJIgBgBIgCgDIgCgEQgGgLgDgPQgCgFACgJIAAgBIgBgCIgBgBIgBAAIgCgDQgKgLgUgBQgLgBgNACQgkAHgLAkQgKAjgWAYQgSAUgaAAIgBgBgACwBNQAIAAAJgBIAAAAIABgBIgBABIAAAAQgJABgIAAIAAAAIAAAAQgYAAgTgOIgCgCIgEgEIAEAEIACACQATAOAYAAIAAAAIAAAAgAiWBKIAJgBQAggGASgkIAAgBQAQgfAZgbQgZAbgQAfIAAABQgSAkggAGIgJABIgIgBIAIABgACeAzQANAAANgEQAIgCAFgEQAEgFACgHQgCAHgEAFQgFAEgIACQgNAEgNAAIgBAAIAAAAQgNAAgOgEIgBAAIgBAAIgBgBIgCgBIgOgGIAOAGIACABIABABIABAAIABAAQAOAEANAAIAAAAIABAAgAiTAmQASAAAPgVQgPAVgSAAIAAAAIgBAAQgNAAgOgLIgJgHIAJAHQAOALANAAIABAAIAAAAgABKAMQACAFACAHQgCgHgCgFIgBgBgAB5AVQAcgBAMgdQgMAdgcABIgEABIgEgBIgMgCIAMACIAEABIAEgBgAh3gNQAYABAUgaIAGgHIABgBIAAgBIACgBIADgDIACgBQAQgLAVAAIABAAIAAAAIAJAAIABAAIACAAQAVAEAMAIQANAJAEAOQgEgOgNgJQgMgIgVgEIgCAAIgBAAIgJAAIAAAAIgBAAQgVAAgQALIgCABIgDADIgCABIAAABIgBABIgGAHQgVAagXgBQgIAAgJgEQAJAEAIAAg");
	this.shape_3.setTransform(113.3,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(0.1,1,1).p("AGoj8QADgHACgHQAIgagEgbQgLAUgbAEIgBAAQgDAAgDAAAGKksQAJgugRgjQALArggAMQAJgtgqggQANAggOAkQgEALgGAHQgRAWgegLQAEAGACAFAESkyQAAgBgBgBQgNgVgRgVQgHgIgHgGQgBgBgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBgBgBQgTgNgYgGQgpgLgfAWQgdAUgdALQgTAHgRgHQgZgMgKgWQAJAVANAVQAFAHAFAGQAGAIgBAGQgCAFgJAFQgbANghgGQgGgCgGgBQAZAQAWARQAFAEACADQAIALgKAMQgPASgZgEQAIAFAJAGQATAOAVAIQAGACAFACQACAAABABQAOAEAPACQANACAOAAQAbABASgUQAWgYAKgjQALglAlgHQANgCALAAQAUACAKAMQABABABABQABABAAAAQAAABABAAQAAABABABQAAABAAAAIABAAQADAGABAHAEckNQAGACAGAAQAEAAAEAAQAcgCAMgdAEqjNQgHgEgHgFQgIgGgGgJQgBgBAAgBQgBgBgBgBQgBgCgBgCQgGgLgDgPQgCgGACgIAEmj5QAHAEAHACQABABABAAQABAAAAAAQABABAAAAQAcAIAbgIQAIgCAFgFQAEgEACgHAE2jnQACACACACQAbAWAkgIAEYieQACgDADgEQALgQACgYQAWANAeAAQASAAAOgGQAAAAAAAAIAAAAQABAAAAAAQABgBABAAQAQgIAKgPQAHgKAEgLQAAgCABgCQAAgCABgDQgBACgBADQgBABgBACQgFAKgJAHAELi5QACgGALAGQgBAKgCAFQgCAFgDAAQgHgPACgFgAEKifQADAAADAAQAEAAAEABAEXhpQADAAAEAAQATAAADgWQADgbgfgEADek9QgEgOgNgJQgMgJgWgDQgfgEgVAQQgBABgCACQgBAAgBABQAAABAAAAQgBAAAAABQgDADgDAEQgUAagYgBQgIAAgJgEACEk9QgZAbgQAgQAAAAAAABQgSAkggAGQgIACgJgCADujTQgVgpgRAfADNiqQANgLAEgMQgWgJAFAggAg3jcQgFgBgGgBQgNgEgIgFQARADAPAIgABEkPQgZAjgkgZQgFgDgDgEAAtiwQgYAagjAOQgiAOgkADQghADgdAUQggAWgbAYQgHAFgGAGQgUASgVAUQgXAWgZAfQgWAcgWAfQgXAfgQAhQgQAkgOAiQgLAZgCAcQAAABAAACQgBADAAAEQAAABABABQAkAiAYAOQAgATAkAPQAiAPAkgEQAmgEAegMQABAAAAgBQAHgTALgTQAOgbAWgSQCeioAOgbQADgHACgIQABgCAAgCQARgbgPgkQgOgiAXglQAcAFAXAWQAaAYAogNQAcgKATgWQgcgDgTgTQgZgbgRgjADxgnQADgDADgDQAVgcALggQgSAAgFgGAinGDQABAAAAAAQAAAAAAAAQAAAAAAgB");
	this.shape_4.setTransform(95,40.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgHBlQglgWgvgiQgugigMgrQgNgrAlgnQAkAiAYAOQAgATAjAPQAiAPAkgEQAmgEAegMIABABIAAgBQAZArgYAnQgYAmgnAVQgUALgUAAQgXAAgXgOg");
	this.shape_5.setTransform(64.2,82.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AjyFTQgkgPgggTQgYgNgkgiIgBgCIABgIIAAgDQACgbALgaIAehFQAQgiAXgfIAsg6QAZgfAXgWIApgnIANgLQAbgXAggWQAdgUAhgDQAjgEAigNQAkgOAYgbQANACAOABQAbAAASgUQAWgYAKgiQALglAlgHQAOgDAKABQAUABAKAMIACADIABAAIABACIABABIAAACQgBAIABAGQADAOAGAMIACADIACADIABABQAGAJAIAHIAOAJQgCAXgLARIgFAGIgIAAIgGAAIAGAAIAIAAQAgAEgEAbQgDAWgTABIgHAAQgSgBgFgFQAFAFASABQgLAggVAbIgGAHQgcgEgTgTQgZgagRgjQARAjAZAaQATATAcAEQgTAVgcAKQgoAOgagYQgXgXgcgFQgXAmAOAiQAPAjgRAcIgBADIgFAQQgOAbieCnQgWATgOAaQgLATgHAUIgBAAQgeANgmAEIgOAAQgcAAgcgMgAFKjuQgCAFAHAQQADgBACgFQACgFABgKQgFgCgEAAQgDAAgBACgAEMjeQANgMAEgLQgFgDgEAAQgMAAAEAagAEtkHIgBgBIAAAAIAAgBIgCgDIAAAAQgKgTgKAAIAAAAIAAAAQgHABgHALIgBACIABgCQAHgLAHgBIAAAAIAAAAQAKAAAKATIAAAAIACADIAAABIAAAAIABABIAAAAgAFWidIAAAAg");
	this.shape_6.setTransform(88.7,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("AhuByQgOAAgNgCQgPgCgOgEIgDgBIgLgEQgWgIgTgOQgJgGgIgFQAZAEAPgSQAKgLgIgLQgCgEgFgEQgWgRgZgPIAMADQAhAFAcgMQAJgEACgGQABgGgGgIIgKgNQgOgVgJgVQAJAWAbAMQARAHATgHQAdgLAdgUQAfgWApALQAXAGATANIACACIAAAAIABABIABABIACABQAHAGAHAIQARAVANAVIABACIAGALIgGgLQAeALARgWQAGgHAEgLQAOgkgNggQAqAggJAtQAggMgLgrQARAjgJAuIAAAFIgGAAIAGAAIABAAQAbgDALgVQAEAbgIAZIgFAOIgCAFIgCADQgFAKgJAHQAJgHAFgKIACgDIACgFIgBAFIgBAEQgEALgHAKQgKAPgQAIIgCABIgBAAIAAAAIAAAAQgOAGgSAAQgeAAgWgNIgOgJQgIgGgGgJIgBgBIgCgDIgCgEQgGgLgDgPQgCgFACgJIAAgBIgBgCIgBgBIgBAAIgCgDQgKgLgUgBQgLgBgNACQgkAHgLAkQgKAjgWAYQgSAUgaAAIgBgBgACwBNQAIAAAJgBIAAAAIABgBIgBABIAAAAQgJABgIAAIAAAAIAAAAQgYAAgTgOIgCgCIgEgEIAEAEIACACQATAOAYAAIAAAAIAAAAgAiWBKIAJgBQAggGASgkIAAgBQAQgfAZgbQgZAbgQAfIAAABQgSAkggAGIgJABIgIgBIAIABgACeAzQANAAANgEQAIgCAFgEQAEgFACgHQgCAHgEAFQgFAEgIACQgNAEgNAAIgBAAIAAAAQgNAAgOgEIgBAAIgBAAIgBgBIgCgBIgOgGIAOAGIACABIABABIABAAIABAAQAOAEANAAIAAAAIABAAgAiTAmQASAAAPgVQgPAVgSAAIAAAAIgBAAQgNAAgOgLIgJgHIAJAHQAOALANAAIABAAIAAAAgABKAMQACAFACAHQgCgHgCgFIgBgBgAB5AVQAcgBAMgdQgMAdgcABIgEABIgEgBIgMgCIAMACIAEABIAEgBgAh3gNQAYABAUgaIAGgHIABgBIAAgBIACgBIADgDIACgBQAQgLAVAAIABAAIAAAAIAJAAIABAAIACAAQAVAEAMAIQANAJAEAOQgEgOgNgJQgMgIgVgEIgCAAIgBAAIgJAAIAAAAIgBAAQgVAAgQALIgCABIgDADIgCABIAAABIgBABIgGAHQgVAagXgBQgIAAgJgEQAJAEAIAAgADxAkIAAAAg");
	this.shape_7.setTransform(113.3,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_1},{t:this.shape_5},{t:this.shape_4}]},1).wait(9));

	// frontleg
	this.instance_1 = new lib.micksleg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.1,118.7,1,1,0,0,0,33.2,48.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:33.3,regY:48.1,scaleX:0.88,scaleY:0.88,rotation:75,x:38.1,y:104.4},4).to({regX:33.1,regY:48.2,scaleX:1,scaleY:1,rotation:8.3,x:73.5,y:119.2},5).wait(1));

	// backleg
	this.instance_2 = new lib.micksleg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(46,104.6,0.715,0.772,67.3,0,0,33.1,48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:33.2,regY:48.1,scaleX:0.87,scaleY:0.94,rotation:-7.7,x:86.2,y:118.3},4).to({regX:33.3,regY:48.3,scaleX:0.72,scaleY:0.77,rotation:52.3,x:50.9,y:112.2},5).wait(1));

	// backarm
	this.instance_3 = new lib.static_mick_arm2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(85.9,35.6,1,1,0,0,0,49.6,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-166.7,y:35.7},4).to({scaleX:1,scaleY:1,rotation:-15,y:35.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,-1,125.2,169);


(lib.anim_mick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.anim_mick_run();
	this.instance.parent = this;
	this.instance.setTransform(100,83.5,1,1,0,0,0,69.3,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AABgnQgPgIgHgOQAVAHABAPgAgQghQgQAEAKANQAKAMAIgPQAGgMgBgIAhcAxQAEAHASgKQgMAAgKgDQgBAAgBgBQAAAFACACgABdAiQgdgUAOAwQAMAAAFAA");
	this.shape.setTransform(31.7,148.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AGhjdQAFgEAGgFQALgNAHgRQANghgNgdQgCgEgCgFQgVgjgmgLALzjAQAHg0AkAsQAGAIgBAOAKbjUQAHAMACANQABAEAAAFAHTjFQgHAMADAHQADAHAMADAGDiUQALgaAKAAQAGAAAHANQACAFACAHQgQAVAFgEQABgBAFgEQAGgHgBgFAIThiQANAHAMgSAIPikQgBAeAbACARpjkQgjgfgMAbQAOAOAPgGAOVjMQgsACAfATQAIAFAIgHQAcgYgRgSAShjZQAIgOAQgBAyRhOQgfgTgIAZAwziaQghgJAIATQATgBAGgJgAyPgEQgMACAHAKAxJC/QAxALgeAYQgIgIgBgDAyLBlQgbAEgFAcQAOAHAFgKArnjdQAeAEAeADQAkAFAlACQAoADAZAfQAJALAHALQALASAHATQAQAmgPAmQgFAPgMAMQgIAJgDAAArLCoQgsgWAHAwQABAHALgDQAKgCAMgFAqeCHQgagDAJAXQACAFADAHAnvCAQgrgZgNAhQATAHAMgKAixArQgTAHgCAJQgCAIAQAKQARgOgKgUgAkLArQgeAHAXAUAmEggQAWgSAQgqQANgjgOgkQgEgMgHgKQgNgXgWgSQgbgXgcgTAjykQQAaAVALAhAjWDDQgwAIAWAnQAVAAAFgJAkxDtQgfgZgaAkQAhANAVgKAtLFcQgjATAcALQAMgNgMgEAwTE5QgmgSgaAcQAWAJAWABAunFHQgyAWAzAHQAYAEgFgTAqjDWQAOANgOAF");
	this.shape_1.setTransform(122.4,175.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("ASAj7QgjgfgMAbQAPAOAOgGAOsjjQgsACAfATQAIAFAJgHQAbgYgRgRAMhl3QAGAKADAKQACgCADgEAMVleQAKAGALgLAMRmgQAAAeAaACANXgvQAHg0AkAsQAHAJgCANAL/hDQAIAMABANQABAEAAAFAI8B9QAHABAHAAQASgBARgHQAggOALgeQACgEABgFQAHgcgIgaAQ5hcQAIgOAQgCAnpjGQAAAEACADQAFAGARgKQgMABgKgEQgBAAgBAAgAmbkTQgQAEAKANQAKANAIgQQAHgLgBgJQgQgHgHgPQAWAIABAOApNAUQgsgWAHAvQABAHAKgDQALgCALgFAktjPQgdgTAOAwQAMAAAFgBAk5hOQAUAIAPATQAJALAHALQALASAHASQAPAmgOAlQgGAPgLANQgIAJgEgBAohgNQgZgDAJAXQACAFADAGAolBCQAOANgOAEAkWDGQgrgagOAiQAUAHALgLAHrknQgGAMADAHQADAHAMACAGbj3QALgaAKAAQAHAAAGANQACAFACAHQACAFgHAHQgEAEgCABQgFAEAQgVAgyBwQgeAIAWAUACSCDQgFAigXAaAAfCSQASgNgKgVQgUAIgBAJQgDAIAQAJgAh/CgQAXgRAQgrQAOgjgPgjQgDgHgDgHAm+GOQgfgYgaAkQAhANAUgLAlkFkQgvAJAWAnQAUgBAFgJAsfGEQgjASAbALQANgNgNgEAt7FuQgzAWAzAHQAYAEgFgTAwdDmQAxALgfAYQgHgIgBgDAxfCMQgbAEgFAcQAOAHAEgKAvnFgQgmgSgaAcQAWAJAWAB");
	this.shape_2.setTransform(100.7,168.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AQ1lBQAHgzAkAsQAGAIgBANAOxjuQAHAMACANQABAEAAAFAM8kkQACgHABgHQACgRgFgSQgIgigcgQQgEgCgEgCQgbgMgbADAK4hSQgsACAfATQAIAFAIgHQAcgYgRgRAHrihQALgZAKAAQAHgBAGAOQACAFACAGQgQAWAFgEQACgBAEgFQAGgGgBgGAI7jRQgGAMADAHQADAHAMACAOnA8QAKAGAKgLQgDgKgFgKAO7A3QADgCACgEAOjgFQgBAdAbACAw6BrQAxALgeAYQgIgIgBgDAxEhTQgbAFgFAbQAOAHAEgKArvAIQgtgVAHAvQABAGALgCQALgDALgFAowjRQgyAXAzAHQAYADgFgSAmwhCQgeAHAXAUArDgZQgagCAJAXQACAEAEAHArDDWQAAAFABACQAFAHASgKQgMAAgLgDQAAAAgBgBgArHA2QANANgNAFAm5C7QgrgagNAhQATAHALgKAlyB/QAIAUgDAYQgBANgEAOQgEAUgIASQgRAmgkARQgPAGgRACQgLAAgDgDAsahbQAfgNAiAHAiOkkQgBgPgWgHQAHAOAQAIgAigkeQgQAEAKANQAKAMAIgPQAHgLgBgJAgWANQgdgSAOAvQAMAAAFgBAj8hpQgEgcgcgjQgYgegmgFQgIgBgHAAAlWhCQgTAIgCAIQgCAJAQAJQARgNgKgVgAGbgjQgigegNAbQAPANAOgGAFUB8QAIgOAQgCAjVEpQgvAJAWAnQAUgBAFgJArOF4QgjASAbALQANgMgNgFAvMEuQgmgRgaAbQAWAJAWABAkvFTQgfgYgaAkQAhANAUgL");
	this.shape_3.setTransform(117,169.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AgQghQgQAEAKANQAKAMAIgPQAGgMgBgIQgPgIgHgOQAVAHABAPAhcAxQAEAHASgKQgMAAgKgDQgBAAgBgBQAAAFACACgABdAiQgdgUAOAwQAMAAAFAA");
	this.shape_4.setTransform(31.7,148.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AGhjdQAFgEAGgFQALgNAHgRQANghgNgdQgCgEgCgFQgVgjgmgLALzjAQAHg0AkAsQAGAIgBAOAKbjUQAHAMACANQABAEAAAFAHTjFQgHAMADAHQADAHAMADAGDiUQALgaAKAAQAGAAAHANQACAFACAHQABAFgGAHQgFAEgBABQgFAEAQgVAIThiQANAHAMgSAIPikQgBAeAbACAOVjMQgsACAfATQAIAFAIgHQAcgYgRgSARpjkQgjgfgMAbQAOAOAPgGAShjZQAIgOAQgBAyLBlQgbAEgFAcQAOAHAFgKAxJC/QAxALgeAYQgIgIgBgDAyPgEQgMACAHAKAwziaQghgJAIATQATgBAGgJgAyRhOQgfgTgIAZArnjdQAeAEAeADQAkAFAlACQAoADAZAfQAJALAHALQALASAHATQAQAmgPAmQgFAPgMAMQgIAJgDAAAqeCHQgagDAJAXQACAFADAHArLCoQgsgWAHAwQABAHALgDQAKgCAMgFAnvCAQgrgZgNAhQATAHAMgKAmEggQAWgSAQgqQANgjgOgkQgEgMgHgKQgNgXgWgSQgbgXgcgTAkLArQgeAHAXAUAixArQgTAHgCAJQgCAIAQAKQARgOgKgUgAjykQQAaAVALAhAkxDtQgfgZgaAkQAhANAVgKAjWDDQgwAIAWAnQAVAAAFgJAunFHQgyAWAzAHQAYAEgFgTAwTE5QgmgSgaAcQAWAJAWABAtLFcQgjATAcALQAMgNgMgEAqjDWQAOANgOAF");
	this.shape_5.setTransform(122.4,175.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("ASGmPQgjgegMAbQAOANAPgGANTmKQgsACAfAUQAIAFAIgHQAcgZgRgRAI+isQACgHACgHQAEgQgDgTQgFgjgagSQgEgDgEgCQgZgPgbABAIcgvQAHg0AkAsQAHAJgCANAMJiHQAAAeAaACAMNhFQALAGAKgLQgDgKgGgKAMihKQACgCADgEAQQi2QAIgOAQgCAPHjaQgmgSgaAcQAWAJAWABAsMgNQAxALgfAXQgHgIgBgDAtOhnQgbAEgFAcQAOAHAEgKAmGjPQgdgTAOAwQAMAAAFgBAoqgMQgsgXAHAvQABAHAKgDQALgCALgFAoSCqQAIAUgDAYQgBAOgEANQgEAUgIATQgRAmgkAQQgPAGgRACQgLAAgDgDAlvDGQgrgagOAiQAUAHALgLAl3B6QANANgNAFAlzAqQgagCAJAXQACAFAEAHAgmhoQgEgdgdgjQgXgdgmgFQgIgBgIgBAiLhNQgwAJAWAnQAVgBAFgJAhwDwQAAAEABADQAFAGASgKQgMABgLgEQAAAAgBAAgAiLBwQgeAIAWAUAg5CSQASgNgKgVQgUAIgCAIQgCAJAQAJgABiA6QgRAEAKANQAKAMAJgPQAGgMAAgJQgRgHgHgOQAWAHACAOAHEhDQAIAMACANQAAAEAAAFAGOBGQgGALADAHQADAHAMADAE+B2QALgaAKAAQAHAAAGANQACAFACAHQABAFgGAHQgEAEgCABQgFAEAQgVAkzAAQAUAbACAiAoXGOQgfgYgaAkQAhANAUgLAxsCYQgyAWAzAHQAYAEgFgTAxsgLQgjARAbALQANgMgNgF");
	this.shape_6.setTransform(109.6,168.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_6}]},2).wait(2));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AwCASQAcgTAfgIQAhgIAjgKQADAAADgBQAfAGAfgUQAagRAdAKQAcAJARgTQADgEAEgDQAWgUAkAEQAWADAWgCQAmgEAkgLQAKgCAJgEQAbgIAZgJQAkgMAjgBQAXAAAWgEQAPgDAOgFQAkgLAnAGQAlAGAlgMQAhgMAjgMQAhgMAnAFQAgAEAgAAQAnAAAngEQAQgCANgLQAegZAlgIQAVgEARANQABAAABABQAmANAfgQQAagOAYgLQAhgOAkgGQAMgCAMgBQAcgCAZAFQAoAJAegYQAAAAABgBQAegXAoAHQAlAGAngCQAcgCAZgRQAfgWAlgMQAogMAlALQAgAKASAcQAUAgAoAJQAoAJgUAqQgJAUAKAOQAWAegeAWQAAACAAABQgCANAAAIQgYAVgaAaQgTATgtgFQgpgEglAKQgkAJglAKQgmAKgZAUQgcAYglAFQgbAEgcgGQgJgCgIAAQgeABgRAcQgWAkgggVQgIgFgGABQgBABgCAAQgPABgSgEQgtgLgUAaQgdAlglgVQghgTggAbQgcAXggAQQgHAEgHgBQghgHgjACQgDgDgEgLQgRAJgSAMQggAVglgEQglgDgogBQggAAgcAKQAAAAgBAAQgGACgGACQghAOgoAWQgQgIgbAFQglAGgfAeQgigPglAPQgiANglAKQgZAGgcgBQgxgBgOAdQgHAOgXgCQgLgBgMAAQgOABgPACQgLACgKACQgaAFgWAIQgdAKgiAHAQOiIQABgEAAgGAwCASQAMgDAEgDQAZgSAPAaQAJAQASAEQAlAIAcAVQAWAQgLAkQgEANACALQACAHAEAGQABACACADQABAAABABQAWAXAVAfQAKAOABAOQACAUgPASQgOARACAUQACATgIAKQgDADgEACQgMAGgWgGQgbgGgSgQQgVgTglgQQgsgSARgmQAJgUADgWQADgPgBgQQAAgDAAgEQgEgfgVgWQgBgCgCgCQgVgWgNglQANgQAPgMgAveBVQAAgzArAfQAaATAQAZQABABABACQABACACACQAIAPAFAQQABABAAABQADALABALQABACAAACQABAFAAAFQAAACAAACQABAngVAcQgFAHgFAEAugCpQAAgKgCgIQgCgKgGgHQgJgLgUADQgDAVADAMQAAAAABABQADAMAKADQAMgogTAUAvIDLQAQAuAggkQAMgMAAgM");
	this.shape_7.setTransform(120.8,167.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996600").s().p("AtsFjQgbgGgSgQQgVgTglgQQgsgSARgmQAJgUADgWQADgPgBgQIAAgHQgEgfgVgWIgDgEQgVgWgNglQANgQAPgMQAcgTAfgIIBEgSIAGgBQAfAGAfgUQAagRAdAKQAcAJARgTIAHgHQAWgUAkAEQAWADAWgCQAmgEAkgLIATgGIA0gRQAkgMAjgBQAXAAAWgEQAPgDAOgFQAkgLAnAGQAlAGAlgMIBEgYQAhgMAnAFQAgAEAgAAQAnAAAngEQAQgCANgLQAegZAlgIQAVgEARANIACABQAmANAfgQQAagOAYgLQAhgOAkgGIAYgDQAcgCAZAFQAoAJAegYIABgBQAegXAoAHQAlAGAngCQAcgCAZgRQAfgWAlgMQAogMAlALQAgAKASAcQAUAgAoAJQAoAJgUAqQgJAUAKAOQAWAegeAWIABgKIgBAKIAAADIgCAVQgYAVgaAaQgTATgtgFQgpgEglAKIhJATQgmAKgZAUQgcAYglAFQgbAEgcgGQgJgCgIAAQgeABgRAcQgWAkgggVQgIgFgGABIgDABQgPABgSgEQgtgLgUAaQgdAlglgVQghgTggAbQgcAXggAQQgHAEgHgBQghgHgjACQgDgDgEgLQgRAJgSAMQggAVglgEQglgDgogBQggAAgcAKIgBAAIgMAEQghAOgoAWQgQgIgbAFQglAGgfAeQgigPglAPQgiANglAKQgZAGgcgBQgxgBgOAdQgHAOgXgCIgXgBQgOABgPACIgVAEQgaAFgWAIQgdAKgiAHQAGgHAAgNIAAgJIgBgFQAAgRANgPQAOgQgBgSIAAgEQgBgOgKgOQgVgfgWgXIgCgBIgDgFQgEgGgCgHIgBgIQAAgIADgIQAEgMAAgJQAAgUgPgLQgcgVglgIQgSgEgJgQIgBgBQgIgPgMAAIAAAAIAAAAQgJAAgKAIIAAAAQgEADgMADQAMgDAEgDIAAAAQAKgIAJAAIAAAAIAAAAQAMAAAIAPIABABQAJAQASAEQAlAIAcAVQAPALAAAUQAAAJgEAMQgDAIAAAIIABAIQACAHAEAGIADAFIACABQAWAXAVAfQAKAOABAOIAAAEQABASgOAQQgNAPAAARIABAFIAAAJQAAANgGAHQgDADgEACQgGADgJAAQgIAAgLgDgAuEEAQgFAHgFAEQAFgEAFgHQAUgbAAglIAAgDIAAgEIgBgKIAAAOIABAAIAAADQAAAlgUAbgAuwDlQAJAAAMgMIADgEQAMgMAAgMQAAAMgMAMIgDAEQgMAMgJAAIgBAAIAAAAQgNAAgJgWIAAgCIgBgBIAAgBIAAABIABABIAAACQAJAWANAAIAAAAIABAAgAvHCfIABABQADAMAKADIAAgBQAIgZgGAAIAAAAIAAAAQgDAAgFAGIgBAAIABAAQAFgGADAAIAAAAIAAAAQAGAAgIAZIAAABQgKgDgDgMIgBgBQgBgHAAgJIABgRIABAAIACAAIABAAIADgBIAAAAIAAAAQAOABAIAIIAAAAQAGAHACAKQACAIAAAKQAAgKgCgIQgCgKgGgHIAAAAQgIgIgOgBIAAAAIAAAAIgDABIgBAAIgCAAIgBAAIgBARQAAAJABAHgAuzBBQAaATAQAZIACADIADAEQAIAPAFAQIABACQADALABALIABAEIgBgEQgBgLgDgLIgBgCQgFgQgIgPIgDgEIgCgDQgQgZgagTIgEgDQgNgIgJAAIAAAAIAAAAQgRAAAAAfQAAgfARAAIAAAAIAAAAQAJAAANAIIAEADgAQOiIIAAAAg");
	this.shape_8.setTransform(120.8,167.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0,243.7,213.9);


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
		var bgm = createjs.Sound.play('bgmCP',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
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
		
		 window.open ("comP_scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("comP_scene1.html","_self");
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
	this.instance = new lib.Copyrightcopy("synched",0);
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


(lib.anim_scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bubmove:0,mickmove:75,sammove:221,sammove2:291});

	// timeline functions:
	this.frame_74 = function() {
		this.gotoAndPlay("bubmove");
	}
	this.frame_220 = function() {
		this.gotoAndPlay("mickmove");
	}
	this.frame_290 = function() {
		this.gotoAndPlay("sammove");
	}
	this.frame_364 = function() {
		this.gotoAndPlay("sammove2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(146).call(this.frame_220).wait(70).call(this.frame_290).wait(74).call(this.frame_364).wait(1));

	// Layer 1
	this.instance = new lib.anim_budroll2();
	this.instance.parent = this;
	this.instance.setTransform(-29,36.4,0.468,0.468);

	this.instance_1 = new lib.anim_mick();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.4,19.5,0.468,0.468,0,0,0,122.3,106.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.animsamrolls();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21,14.1,1,1,0,0,0,20.9,19.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-13.1,y:129.4},74).to({_off:true},1).wait(290));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({_off:false},0).to({x:278.6,y:138},145).to({_off:true},1).wait(144));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(221).to({_off:false},0).to({x:251.4,y:115.5},69).wait(1).to({x:274.7,y:107.3},0).to({guide:{path:[274.6,107.2,273.3,104.7,272.1,102,267.6,91.7,260.7,82.8,252.6,72.4,240,70.6,226.6,68.7,221.7,81.4,218.3,90.1,219.1,100,213.2,95.6,207,93.4,204,92.4,200.7,91.7,194,90.5,189.4,94.7,181.4,102,175.9,110.2,172.8,114.8,173.3,123.7,173.5,126.8,171.8,128.3,166.5,118.7,159.8,108.6,157.1,104.5,152.8,102,147.9,99.2,140.4,101.7,130.2,105,123.8,113.9,115.5,125.4,102.6,126.7,91.8,127.8,81.7,126.1,72.8,124.5,64.7,121.3,45.9,113.8,25.1,114.3,18.8,114.5,13.3,113.8,2.5,112.5,-6.2,107.9,-13.6,104,-20.1,99.7,-28.2,94.2,-29.9,84,-32.4,68.3,-14.3,72.1,-15.9,63.8,-15.7,53.4,-15.7,50.4,-15.1,47.5,-13.7,40.7,-8.8,37.3,-0.2,31.1,4,43.7,9.7,60.7,8,78.9,9.3,74.6,13.5,66.5,20.3,53.8,32.8,46.2,45.5,38.5,57.4,34,62.9,31.9,65.1,38.9,71,57.1,70.5,76.9,70.4,80.3,76.5,79.7,93.7,78,111.3,77.8,124.9,77.6,138.2,78.2,151.2,78.6,156.5,71.3,157.6,69.7,157.5,67.1,157.1,58.2,157.1,49.4,157,40.5,167.7,42.9,175.6,44.6,178,54.8,179,58.9,179,63.2,181.3,56.5,185.9,45.1,187.3,41.5,189.1,38,192.4,31.5,199.1,28.5,205.3,25.6,209.8,23.5,217.6,19.8,220.2,29.7,223.3,41.3,228.3,47.8,247.8,49,264.6,48.2,280.7,47.4,296.8,47.4,305,47.4,313.2,47.4,313.7,47.4,314.1,47.4]}},73).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,7.4,75.8,61.7);


(lib.content_scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("bubcleverlyfoundthreelargeintertubes");
	}
	this.frame_42 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_48 = function() {
		playSound("rhodes_low_f_note");
	}
	this.frame_60 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_66 = function() {
		playSound("rhodes_low_f_note");
	}
	this.frame_78 = function() {
		playSound("diagnal_line");
	}
	this.frame_83 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_100 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_107 = function() {
		playSound("rhodes_low_f_note");
	}
	this.frame_115 = function() {
		playSound("diagnal_line");
	}
	this.frame_126 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_145 = function() {
		playSound("rhodes_f9_chord");
	}
	this.frame_159 = function() {
		playSound("synth_brass_2times");
	}
	this.frame_172 = function() {
		playSound("synth_brass_2times");
	}
	this.frame_179 = function() {
		playSound("synth_brass_2times");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(40).call(this.frame_42).wait(6).call(this.frame_48).wait(12).call(this.frame_60).wait(6).call(this.frame_66).wait(12).call(this.frame_78).wait(5).call(this.frame_83).wait(17).call(this.frame_100).wait(7).call(this.frame_107).wait(8).call(this.frame_115).wait(11).call(this.frame_126).wait(19).call(this.frame_145).wait(14).call(this.frame_159).wait(13).call(this.frame_172).wait(7).call(this.frame_179).wait(46));

	// diagram
	this.instance = new lib.example1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(209.1,165.5,1,1,0,0,0,185.7,78.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(185));

	// box
	this.instance_1 = new lib.staticgraybox("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(206.7,88.1,1.011,1.179,0,0,0,199.9,-0.1);
	this.instance_1.alpha = 0.699;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(185));

	// sentence
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAHQgEgDAAgEQAAgDAEgDQAEgDAEgBQAGABADADQAEADAAADQAAAEgEADQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(375.5,314.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVApQgMgFAAgIQAAgHAJAAIALACQAGACAEAAQAPAAAAgGQAAgFgLgEIgTgKQgLgHAAgMQAAgPAQgGQAKgDATAAQAIAAADACQAFADABAIQAAAOgIAAQgIAAgBgHIgGAAQgSAAAAAEQAAAEAKAEIAUALQAMAIAAALQAAAMgNAIQgJAFgOAAQgKAAgJgDg");
	this.shape_1.setTransform(368.1,310.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAiQgOgKAAgSQAAgTAKgOQAMgPATAAQAOAAAIAFQAMAFAAANQAAAIgJAHIgSAIIgZAMQADADAGACQAFADAGAAQAKAAAHgFQAHgDAEAAQAIgBAAAJQAAAIgNAGQgLAEgMABQgSgBgLgIgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgDgIAAQgGAAgGAFg");
	this.shape_2.setTransform(359.7,310.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWA7QgDADgEAAQgFAAgDgDQgDgDAAgEIABgFIAAgGIAAhYQAAgFACgFQADgFAGAAQAJAAAAAJIgBADIAAADIAAAeQAGgDAFgCIAJgBQATAAALANQALAMAAARQAAATgNAMQgMANgSAAQgLAAgJgEgAgIgBQgFABgHAFIAAAhQALAFAHAAQAJAAAHgHQAGgGAAgLQAAgKgFgGQgGgGgJAAQgDAAgFACg");
	this.shape_3.setTransform(350.6,308.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAQAnQgKADgKAAQgLAAgIgEQgIgGgCgKQgDgTAAgPQAAgKACgNQACgJAJAAQAFAAADADQADADAAAEIgBALIgCALIABASQABAJACAFIADABIAEABQAIAAAKgDIAAgNIAAgNQAAgQACgLQABgKAJAAQAFAAADADQADADAAAFIgCAbIAAAPIAAAQIABAFIAAAEQAAAFgDADQgDADgFAAQgGAAgDgGg");
	this.shape_4.setTransform(341.6,310.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA3QgEgEABgDIAAgJIAAgJIgBgnIgPgCQgKAAAAgKQAAgEADgDQADgDAEAAIAOABIgBgIIAAgIQAAgEAEgDQADgDAEAAQALAAAAATIAAAGIAIAAIALABQAHADAAAGQAAAFgDADQgDADgFAAIgEAAIgDAAIgIAAIABApIAAADIAAAFQAAASgLAAQgDAAgDgCg");
	this.shape_5.setTransform(333.8,309.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeApQgDgDABgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgLAAABgKIAAgIQgRADgIAPIAAAnQAAAEgDADQgDADgEAAQgGAAgCgDg");
	this.shape_6.setTransform(326.3,310.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAiQgOgKAAgSQAAgTALgOQALgPASAAQAOAAAKAFQALAFAAANQAAAIgJAHIgSAIIgaAMQAFADAEACQAGADAGAAQALAAAGgFQAHgDAEAAQAIgBAAAJQAAAIgNAGQgLAEgMABQgSgBgLgIgAgJgSQgGAFgDAKIASgIQAJgEAHgFQgGgDgJAAQgFAAgFAFg");
	this.shape_7.setTransform(317.7,310.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAQAkIgCgQIgCgQIABgGIAAgHIAAgDIABgEQAAgGgEAAQgGAAgGAIQgHAJgDANIAAAHIgBAGIgBAHIAAAHQAAAEgDAEQgEACgEABQgEgBgEgCQgDgEAAgEIAAgHIAAgHIAAgUIABgVIAAgHIAAgHQAAgFADgDQADgCAFAAQAKAAABAMIAAABQAMgMALAAQAPABAFALQAEAJAAAQIAAAGIAAAEQAAAGACAKIABAQQAAAEgCADQgEACgEABQgKAAgBgKg");
	this.shape_8.setTransform(309.2,310.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgEQABgGgEAAQgHAAgFAIQgHAJgDANIgBAHIAAAGIgBAHIAAAHQAAAEgDAEQgDACgFABQgFgBgDgCQgCgEAAgEIgBgHIAAgHIABgUIABgVIAAgHIgBgHQAAgFADgDQAEgCAEAAQAKAAABAMIAAABQALgMAMAAQAPABAFALQAEAJAAAQIAAAGIAAAEIACAQIACAQQAAAEgDADQgEACgEABQgKAAgBgKg");
	this.shape_9.setTransform(300.8,310.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAEAAQAEAAAEADQACADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgCADQgDADgEAAQgFAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAFgEADAAQAGAAADAEQAEADAAAFQAAAFgEADQgDADgGAAQgDAAgFgDg");
	this.shape_10.setTransform(294.5,308.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAiQgOgKAAgSQAAgTAKgOQAMgPATAAQAOAAAIAFQAMAFAAANQAAAIgJAHIgSAIIgZAMQADADAGACQAFADAGAAQAKAAAIgFQAGgDAEAAQAIgBAAAJQAAAIgNAGQgLAEgMABQgSgBgLgIgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgDgIAAQgHAAgFAFg");
	this.shape_11.setTransform(280.5,310.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnAyQAAgEACgDQADgDAFABIAKABIALABQALAAAFgHQAGgHABgPQgEAEgFACQgFACgFAAQgQAAgJgKQgKgKAAgPQAAgVANgOQANgNAWAAQAHAAAGACQAFABADAEQAKABAAALIgBAOQgEATAAATQgBAZgIAMQgKAPgZAAQgeAAAAgMgAgLgjQgHAIAAANQAAAJAEAFQADADAHABQAGAAAGgHQAGgHABgHIAEgXIgGgCIgFgBQgMAAgHAIg");
	this.shape_12.setTransform(271.8,312.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeApQgCgDgBgEIAAgyIAAgIIABgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgQADgIAPIAAAnQABAEgEADQgDADgFAAQgEAAgDgDg");
	this.shape_13.setTransform(263.9,310.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgKAAgTQAAgTAOgNQAOgNASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAALQAAAOACAHIAEAHIADAIQAAAEgEADQgDADgEAAQgDAAgIgHgAgKgPQgIAJAAAJQAAALAEAFQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgFIABgIIgDgBIgCAAQgJAAgIAIg");
	this.shape_14.setTransform(255.5,310.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHA9QgDgDAAgEIAAhrQAAgFAEgCQADgDADgBQAFABADADQADACAAAFIAABmQAAAPgLABQgEAAgDgEg");
	this.shape_15.setTransform(248.7,308.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaAiQgNgKAAgSQAAgTALgOQALgPASAAQAOAAAKAFQALAFAAANQAAAIgKAHIgRAIIgaAMQAFADAEACQAGADAGAAQAKAAAIgFQAGgDAEAAQAIgBAAAJQAAAIgNAGQgLAEgMABQgSgBgMgIgAgKgSQgFAFgDAKIARgIQAKgEAHgFQgGgDgJAAQgGAAgFAFg");
	this.shape_16.setTransform(235.1,310.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAiQgOgKAAgSQAAgTAKgOQAMgPATAAQAOAAAIAFQAMAFAAANQAAAIgJAHIgSAIIgZAMQADADAGACQAFADAGAAQAKAAAHgFQAHgDAEAAQAIgBAAAJQAAAIgNAGQgLAEgMABQgSgBgLgIgAgJgSQgGAFgDAKIASgIQAJgEAGgFQgFgDgIAAQgHAAgEAFg");
	this.shape_17.setTransform(226.1,310.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeApQgCgDAAgEIAAgyIAAgIIAAgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgKAAAAgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_18.setTransform(218.1,310.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgFIAAgIQgBgCgDAAQgJAAgGAGQgEAEgGALQAAAcgDAHQgDAGgGAAQgFAAgDgDQgEgDAAgFIABgEIABgUIAAg0IABgCIAAgNIgBgHIAAgHQAAgEADgDQADgDAEAAQAIAAADAIQABAFAAAJIAAARIgBAOQAGgFAHgDQAFgCAIgBQANAAAGAIQAEAGABAKIABATIACAQIACAPIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_19.setTransform(209.6,308.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGA3QgDgEgBgDIAAgJIABgJIgCgnIgOgCQgKAAAAgKQAAgEADgDQADgDAFAAIANABIAAgIIgBgIQAAgEADgDQAEgDAEAAQALAAgBATIAAAGIAIAAIANABQAGADAAAGQAAAFgDADQgDADgFAAIgDAAIgFAAIgHAAIACApIAAADIAAAFQAAASgMAAQgDAAgDgCg");
	this.shape_20.setTransform(201.1,309.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAVA7QgFADgFABIgMABQgRAAgMgLQgLgLAAgSQAAgVALgMQAMgNATAAIAKABQAFABADADQABgbABgKQACgJAIAAQAFAAADADQADADAAAEIgCAiIgBAiQAAAcABAJIAAACQAAAFgCACQgEADgEAAQgGAAgDgFgAgPAEQgGAGAAAOQAAAIAGAGQAHAGAHAAQAGAAADgBIAHgGIADgCIAAgcQgDgFgEgCQgEgCgGAAQgLAAgFAGg");
	this.shape_21.setTransform(185.5,308.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgEQAAgGgDAAQgGAAgGAIQgGAJgEANIgBAHIAAAGIgBAHIAAAHQAAAEgDAEQgEACgEABQgFgBgDgCQgCgEAAgEIgBgHIAAgHIABgUIAAgVIAAgHIAAgHQAAgFADgDQADgCAFAAQAKAAABAMIAAABQAMgMALAAQAPABAFALQAEAJAAAQIAAAGIAAAEIACAQIABAQQAAAEgCADQgEACgEABQgKAAgBgKg");
	this.shape_22.setTransform(176.8,310.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPAnQgKADgJAAQgLAAgHgEQgJgGgCgKQgDgTAAgPQAAgKADgNQABgJAJAAQAFAAADADQADADAAAEIgBALIgBALIABASQAAAJABAFIAFABIADABQAIAAAKgDIAAgNIAAgNQAAgQABgLQABgKAKAAQAFAAADADQADADAAAFIgCAbIAAAPIAAAQIABAFIAAAEQAAAFgDADQgDADgFAAQgHAAgDgGg");
	this.shape_23.setTransform(168.3,310.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_24.setTransform(159.9,310.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgFABQgFAAgDgDQgDgDAAgEQAAgIAIgCIANgBIABgJQADgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgKAAgEAGQgDAFgBALIAAACIAOgBQAPAAAAAKQAAAKgQAAIgPABIAAAUIABAVQAAAOgCAIQgCAJgHAAQgFAAgDgDg");
	this.shape_25.setTransform(151.6,308.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgWA8QgEgDAAgEQAAgHARgkIgbgxIgEgGQgCgEAAgCQAAgFADgDQADgDAFAAQAFAAADAEQALAPAOAdIAKgWQAFgMAGgJQADgFAGAAQAEAAAEADQADADAAAEIgBAFIgbA2QgKAVgFANIgEAPQgDAHgHAAQgFAAgDgDg");
	this.shape_26.setTransform(136.2,312.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHA9QgDgDAAgEIAAhrQAAgFAEgCQADgDADgBQAFABADADQADACAAAFIAABmQAAAPgLABQgEAAgDgEg");
	this.shape_27.setTransform(129.6,308.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeApQgDgDABgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgLAAABgKIAAgIQgRADgIAPIAAAnQAAAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_28.setTransform(123.8,310.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAiQgNgKAAgSQAAgTALgOQALgPASAAQAOAAAKAFQALAFAAANQAAAIgJAHIgSAIIgZAMQAEADAEACQAGADAGAAQALAAAGgFQAHgDAEAAQAIgBAAAJQAAAIgNAGQgLAEgMABQgSgBgMgIgAgJgSQgGAFgDAKIASgIQAJgEAHgFQgGgDgJAAQgFAAgFAFg");
	this.shape_29.setTransform(115.2,310.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgLAjIgag+IgBgFQAAgEAEgDQADgDAFAAQAGAAADAGIARAsIALgaIAHgRQADgGAGAAQAFAAADADQAEADAAAEQAAADgNAcIgQAiQgBAEgDACQgCADgEAAQgHAAgEgIg");
	this.shape_30.setTransform(107,310.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZAiQgOgKAAgSQAAgTALgOQALgPASAAQAOAAAKAFQALAFAAANQAAAIgJAHIgSAIIgZAMQAEADAFACQAFADAGAAQALAAAGgFQAHgDAEAAQAIgBAAAJQAAAIgNAGQgLAEgMABQgSgBgLgIgAgJgSQgGAFgDAKIASgIQAJgEAHgFQgGgDgJAAQgGAAgEAFg");
	this.shape_31.setTransform(98.4,310.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHA9QgDgDAAgEIAAhrQAAgFAEgCQADgDADgBQAFABADADQADACAAAFIAABmQAAAPgLABQgEAAgDgEg");
	this.shape_32.setTransform(91.8,308.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAiQgMgKAAgRQAAgPALgQQANgTAPAAQAIAAALAFQANAEAAAIQAAAEgCADQgDADgFAAQgDAAgFgEQgEgEgKAAQgFAAgHANQgHAKAAAIQAAAIAGAFQAGAEAIABQAFAAAIgFIAKgDQAEAAADACQADADAAAEQAAAGgNAGQgMAGgIAAQgQAAgMgKg");
	this.shape_33.setTransform(85.4,310.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWA7QgDADgEAAQgFAAgDgDQgDgDAAgEIABgFIAAgGIAAhYQAAgFACgFQADgFAGAAQAJAAAAAJIgBADIAAADIAAAeQAGgDAFgCIAJgBQATAAALANQALAMAAARQAAATgNAMQgMANgSAAQgLAAgJgEgAgIgBQgFABgHAFIAAAhQALAFAHAAQAJAAAHgHQAGgGAAgLQAAgKgFgGQgGgGgJAAQgDAAgFACg");
	this.shape_34.setTransform(69.8,308.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAQAnQgKADgKAAQgLAAgIgEQgIgGgCgKQgDgTAAgPQAAgKACgNQACgJAJAAQAFAAADADQADADAAAEIgBALIgCALIABASQABAJACAFIADABIAEABQAIAAAKgDIAAgNIAAgNQAAgQACgLQABgKAJAAQAFAAADADQADADAAAFIgCAbIAAAPIAAAQIABAFIAAAEQAAAFgDADQgDADgFAAQgGAAgDgGg");
	this.shape_35.setTransform(60.8,310.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgmA7QgDgEAAgEIAAhSIgBgLIABgKQAAgHANgCQAGgBAOAAQANAAAOAJQAQALAAARQAAAJgEAGQgCAFgHAFQAJADAFAIQAHAIAAAIQAAALgMAJQgHAGgJADQgRAHgcAAQgEAAgEgEgAgVAqQAOgBAPgFQANgDAAgFQAAgGgJgFQgGgDgGgBIgVgBgAgUgZIgBARIAMAAQAWgCAAgPQABgGgIgFQgGgFgIAAIgNAAg");
	this.shape_36.setTransform(52,308.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(225));

	// animation
	this.instance_2 = new lib.anim_scene3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(195.2,145.8,1,1,0,0,0,128.7,49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(225));

	// background
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(4,1,1).p("Af42qMg/vgADMAAAAtbMA/vAAAg");
	this.shape_37.setTransform(206.9,145.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFCC").ss(1,1,1).p("ArPhyQC0iADTAJQDDAIClBeQCbBXB+B+QCJCMDIALQAjACAjAA");
	this.shape_38.setTransform(76.4,91);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FEFE36").ss(1,1,1).p("Af4oCQiAAAiKgSQizgXi5g4Qixg2inhOQithQi+guQi9gtjCgVQi+gUi7AcQitAainAzQi5A5idBZQB1BQB+BCQCsBaC8AwQDCAxDCg1AAqogQCjhFCwgSQC0gTC1AEQDDAEDCAeQDVAiA+DAQA6CzjMAsQjNAshGBoQCECpDNgYQC0gVCtArQCvArC+geAiANEQCuhaDEgPQC/gPC8AfQCxAeCsAqQDBAvC8A+QC5A8DEABQAmAAAggNArjrAQgtgegrggQieh2i0hKQi3hMjIAAQi4gBkzChA9hiGQCfhzC7BFQClA8CTBeQCiBmCmBkQCpBlDEAEQAmABAggRAkgFtQiDCHjRghQjGgfjAAmQitAiicBQQjsB4EDA5QCpAmCtgbQDagiBRCBQBpClDwgFQAygBAyAF");
	this.shape_39.setTransform(208.4,152);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AACBF2").s().p("AbuHbQiygXi5g5Qiyg2inhOQithQi+guQi9gtjCgUQi+gVi7AcQitAaimAzQi6A5idBaQgtgfgrgfQieh2izhLQi4hKjIgBQi4gBkyCgIgBpwMA/vAAEIAAPVQiAAAiKgSg");
	this.shape_40.setTransform(208.3,51.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFCC").s().p("A/2S/MAAAghHIAAiWQEyihC4ABQDIAAC3BMQC0BKCeB2QArAgAsAeQCehZC5g5QCngzCtgaQC7gcC+AUQDBAVC+AtQC+AuCtBQQCnBOCxA2QC6A4CyAXQCKASB/AAIAAKoIgDABQhMALhIAAIgBAAIAAAAQhoAAhjgXIgDgBIgEgBIgCAAIgEgBIgDgBIgDgBIgEgBIgCAAQhsgZhvAAIgBAAIAAAAQg5AAg5AGIgDABIgCAAQgYADgYAAIAAAAIAAAAQipAAhyiRIgEgEQBFhoDNgsQCggjAAh0QAAghgNgnQg+jAjVgiQjCgejDgEIg/AAIAAAAIgBAAQiKAAiKANIgQACIgFAAQiwASikBFQCkhFCwgSIAFAAIAQgCQCKgNCKAAIABAAIAAAAIA/AAQDDAEDCAeQDVAiA+DAQANAnAAAhQAAB0igAjQjNAshFBoIAEAEQByCRCpAAIAAAAIAAAAQAYAAAYgDIACAAIADgBQA5gGA5AAIAAAAIABAAQBvAABsAZIACAAIAEABIADABIADABIAEABIACAAIAEABIADABQBjAXBoAAIAAAAIABAAQBIAABMgLIADgBIAATNgAjuNXIgHAAIgEgBQgkgDgkAAIAAAAIgBAAIgLAAIgFAAIgDAAIgKAAIAAAAIAAAAQjiAAhmibIgBgBIgCgEIgBgCIgBAAIAAgBIgBgBIgBgBIAAAAQhAhhiSAAIgBAAIAAAAQgnAAguAHIgFABIgCAAIgEAAQhDAKhCAAIAAAAIAAAAQhfAAhdgUIgKgCQiIgeAAgvQABgrBwg5QCchQCsgiIANgCIADgBIACAAQBhgSBiAAIABAAIAAAAQBYAABZAOIACABIAAAAQAoAGAlAAIAAAAIAAAAQCYAABphpIACgCIACgCIgCACIgCACQhpBpiYAAIAAAAIAAAAQglAAgogGIAAAAIgCgBQhZgOhYAAIAAAAIgBAAQhiAAhhASIgCAAIgDABIgNACQisAiicBQQhwA5gBArQAAAvCIAeIAKACQBdAUBfAAIAAAAIAAAAQBCAABDgKIAEAAIACAAIAFgBQAugHAnAAIAAAAIABAAQCSAABABhIAAAAIABABIABABIAAABIABAAIABACIACAEIABABQBmCbDiAAIAAAAIAAAAIAKAAIADAAIAFAAIALAAIABAAIAAAAQAkAAAkADIAEABIAHAAgAJtI3QCxAeCsAqQDBAvC8A+QC5A8DEABQAmAAAggNQggANgmAAQjEgBi5g8Qi8g+jBgvQisgqixgeQh/gViBAAIAAAAIAAAAQg9AAg+AFQjFAPitBaQCthaDFgPQA+gFA9AAIAAAAIAAAAQCBAAB/AVgAoVBlQAgAAAbgNIABAAIAEgCIABgBIgBABIgEACIgBAAQgbANggAAIgBAAIAAAAIgCAAIgCAAQjEgEiphkQimhkihhnQiUheilg8QhGgahBAAIgBAAIAAAAQhqAAhgBDIgGAEIgBABIABgBIAGgEQBghDBqAAIAAAAIABAAQBBAABGAaQClA8CUBeQChBnCmBkQCpBkDEAEIACAAIACAAIAAAAIABAAgA5wv/QDEAICmBeQCbBXB+B/QCJCMDIALQAjACAjAAQgjAAgjgCQjIgLiJiMQh+h/ibhXQimhejEgIIgCAAIgCAAIgXgBIAAAAIAAAAQjBAAimB1IgBABIgDACIADgCIABgBQCmh1DBAAIAAAAIAAAAIAXABIACAAIACAAIAAAAgAAzpAQBkAABkgcQhkAchkAAIAAAAIAAAAQhdAAhegYQi9gwirhaQh+hCh2hQQB2BQB+BCQCrBaC9AwQBeAYBdAAIAAAAIAAAAg");
	this.shape_41.setTransform(208.4,170);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFCC").s().p("A/3WuMAAAgtbMA/vAAEMAAAAtXg");
	this.shape_42.setTransform(206.9,145.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,413.4,323.1);


// stage content:
(lib.comP_scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{S2:0,scene3:189,S2repeat:190});

	// timeline functions:
	this.frame_190 = function() {
		/* _root.gonow=true;*/
	}
	this.frame_201 = function() {
		this.gotoAndPlay("S2repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(190).call(this.frame_190).wait(11).call(this.frame_201).wait(1));

	// content
	this.instance = new lib.content_scene3();
	this.instance.parent = this;
	this.instance.setTransform(269.4,192,1.057,1.057,0,0,0,206.4,145.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(202));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(202));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '52835F75977ACA418E31A630DA452CD7',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmCP.mp3", id:"bgmCP"},
		{src:"sounds/bubcleverlyfoundthreelargeintertubes.mp3", id:"bubcleverlyfoundthreelargeintertubes"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/diagnal_line.mp3", id:"diagnal_line"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/inserted_word_appears.mp3", id:"inserted_word_appears"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/rhodes_f9_chord.mp3", id:"rhodes_f9_chord"},
		{src:"sounds/rhodes_f_note.mp3", id:"rhodes_f_note"},
		{src:"sounds/rhodes_low_f_note.mp3", id:"rhodes_low_f_note"},
		{src:"sounds/synth_brass_2times.mp3", id:"synth_brass_2times"}
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
an.compositions['52835F75977ACA418E31A630DA452CD7'] = {
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