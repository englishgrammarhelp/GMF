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


(lib.staticgraybox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("A/PKUIAA0nMA+fAAAIAAUng");
	this.shape.setTransform(200,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,132);


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


(lib.anim_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("Ag/BpQgPgOAAgsQAAgSADgkQACglAAgSIgBgOIgBgOQAAgVATAAQAGAAAFADQAQgEAOgCQAOgCAMAAQAjAAAUAIQANAGAAAMQAAAHgFAFQgGAHgIAAIgGgBQgWgGgVAAIgVABQgMACgNAEIgBA1IA0gFIAhgCQAIAAAGAFQAGAFAAAIQAAAQgRACIghADIg6AFIgBAcQAAAbAEAEQABACAQAAIAYgBIAaAAIAIgBIAIgBQAIAAAFAEQAHAFAAAKQAAAPgQADQgOACgqABQgsAAgOgMg");
	this.shape.setTransform(313,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010101").s().p("AgNBkQgGgGAAgIIABgGIABgGIgBgTIgBgTQAAgSgDgeIgEgyIgHAAQgfAAgRgEQgPgEgBgOQAAgHAGgGQAFgHAJABIAWACIAWACIAZAAIAYgBIAfACIAfABQAIAAAGAGQAFAFABAIQgBAIgFAFQgGAFgIAAIghgBIgigCIAFA4QACAiABAVIAAAOIABANQAAALgEAIQgGAKgKAAQgGAAgHgEg");
	this.shape_1.setTransform(294.3,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#010101").s().p("ABGBnQgLgBgMgZQgGgQgGgVIghADQgVACgLACQgGAPgQAeQgGAKgLAAQgHAAgGgFQgGgFAAgIQAAgHAUgpQgCgEAAgEQABgGANgEQATggAXglQAigzAIAAQAPAAAFASIAIAsIAVBZIAHASQAFAMAAAGQAAAHgGAGQgGAFgGAAIgBAAgAgKAMIASgCIAUgBIgJgtIgdAwg");
	this.shape_2.setTransform(274,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010101").s().p("Ag9BTQgTgVgBgeQABgtAogvQAhgpAjAAIALABIAJABQAFgGAJAAQAOAAADAQQACAMAAAPQAAAHgDAFQgGAIgKAAQgMAAgGgNQgDgGgCgCQgCgBgJAAQgRAAgWAbQggAlAAAgQAAAPALALQAJAKAOAAQANAAAOgHIAVgNQAKgHAGAAQAIAAAGAGQAFAFAAAIQAAAIgHAGQgmAggmAAQgeAAgWgXg");
	this.shape_3.setTransform(255.4,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#010101").s().p("AhABjQgFgFgBgIQABgHAFgGQAGgFAIAAQAKAAARgCIgBg+QABgkACgiIgeABQgHAAgGgGQgFgFgBgIQAAgIAGgFQAEgFAIAAQAMgCAcAAQAZAAApAGQARADAAAQQAAAJgHAFQgFAEgGAAIgkgEQgCAZgBApIAAA+IAmgBQAHAAAGAGQAGAFAAAIQAAAHgGAGQgFAFgJAAIgXABIgYAAQgIAAgTACQgSADgKAAQgHAAgGgGg");
	this.shape_4.setTransform(238.8,22.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#010101").s().p("AgqBuQgQgEgJgFQgIAAgFgFQgGgGAAgIIABgoIABgqIAAgsIgBguQABgHAGgIQAIgHAIAAQAFAAASAIQAVAKAEACQAnANAdAbQAhAgAAAmQAAAYgMAVQgLAWgUAOQgXAOgoAAQgKAAgNgDgAgvBGQAFADAIABQAGACAJAAQAcABANgJQAMgIAHgNQAIgNgBgPQAAghgngYQgNgJgrgSg");
	this.shape_5.setTransform(221.7,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#010101").s().p("Ag/BpQgPgOAAgsQAAgSADgkQACglAAgSIgBgOIgBgOQAAgVATAAQAGAAAFADQAQgEAOgCQAOgCAMAAQAjAAAUAIQANAGAAAMQAAAHgFAFQgGAHgIAAIgGgBQgWgGgVAAIgVABQgMACgNAEIgBA1IA0gFIAhgCQAIAAAGAFQAGAFAAAIQAAAQgRACIghADIg6AFIgBAcQAAAbAEAEQABACAQAAIAYgBIAaAAIAIgBIAIgBQAIAAAFAEQAHAFAAAKQAAAPgQADQgOACgqABQgsAAgOgMg");
	this.shape_6.setTransform(202.7,22.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#010101").s().p("AhKBmQgGgFABgIIAAgfIAAgeIABhuQAAgJAEgHQAIgJAMABIAiACQATADANAHQA6AdAAArQAAASgMANQgMAOgZAJQAlAUASAVQAEAGAAAHQAAAHgFAGQgGAFgIAAQgIAAgFgFQgqgngwgPIABAsQAAAIgGAFQgFAGgIAAQgJAAgFgGgAgpAEIAFAAQAiAAAPgHQAHgEAGgGQAFgGAAgDQABgPgUgOQgSgOgTgCIgQgBg");
	this.shape_7.setTransform(185,22.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#010101").s().p("Ag9BoQgFgFAAgIIAAgmQAAgVACgpQADgqAAgVQABgjATABIANgBIAUgBQAZAAAYARQAbAUAAAcQAAAjgcATQgZASghAAIgMAAIgBA+QABAIgGAFQgFAFgHAAQgIAAgFgFgAgYhIIAAATIgEAvIAKABQAUAAAOgKQAPgLAAgRQAAgMgOgJQgNgJgPAAIgIAAIgFABg");
	this.shape_8.setTransform(168.3,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#010101").s().p("Ag/BpQgPgOAAgsQAAgSADgkQACglAAgSIgBgOIgBgOQAAgVATAAQAGAAAFADQAQgEAOgCQAOgCAMAAQAjAAAUAIQANAGAAAMQAAAHgFAFQgGAHgIAAIgGgBQgWgGgVAAIgVABQgMACgNAEIgBA1IA0gFIAhgCQAIAAAGAFQAGAFAAAIQAAAQgRACIghADIg6AFIgBAcQAAAbAEAEQABACAQAAIAYgBIAaAAIAIgBIAIgBQAIAAAFAEQAHAFAAAKQAAAPgQADQgOACgqABQgsAAgOgMg");
	this.shape_9.setTransform(140.3,22.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#010101").s().p("AgMBkQgHgGAAgIIABgGIAAgGIgBgTIAAgTQAAgSgDgeIgEgyIgHAAQgeAAgTgEQgOgEAAgOQAAgHAEgGQAGgHAKABIAVACIAWACIAZAAIAYgBIAfACIAfABQAIAAAGAGQAGAFgBAIQABAIgGAFQgGAFgIAAIghgBIghgCIADA4QADAiABAVIABAOIAAANQAAALgEAIQgGAKgKAAQgHAAgFgEg");
	this.shape_10.setTransform(121.5,22.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#010101").s().p("Ag/BpQgPgOAAgsQAAgSADgkQACglAAgSIgBgOIgBgOQAAgVATAAQAGAAAFADQAQgEAOgCQAOgCAMAAQAjAAAUAIQANAGAAAMQAAAHgFAFQgGAHgIAAIgGgBQgWgGgVAAIgVABQgMACgNAEIgBA1IA0gFIAhgCQAIAAAGAFQAGAFAAAIQAAAQgRACIghADIg6AFIgBAcQAAAbAEAEQABACAQAAIAYgBIAaAAIAIgBIAIgBQAIAAAFAEQAHAFAAAKQAAAPgQADQgOACgqABQgsAAgOgMg");
	this.shape_11.setTransform(103.3,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#010101").s().p("AhIBTIADgsQADg6AAhJQAAgIAGgFQAFgGAIAAQAIAAAGAGQAGAFgBAIQAABJgDA8IgDAiQAhgBAxgPIAGgBQAJAAAFAGQAFAGAAAHQAAAMgMAFQgQAHgiAGQgeAFgUAAQghAAAAgdg");
	this.shape_12.setTransform(86.9,22.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#010101").s().p("Ag9BoQgGgFABgIIAAgmQAAgVACgpQADgqAAgVQABgjATABIANgBIAUgBQAaAAAYARQAaAUAAAcQAAAjgcATQgZASghAAIgLAAIgBA+QAAAIgGAFQgEAFgIAAQgIAAgFgFgAgZhIIAAATIgDAvIAKABQAUAAAOgKQAPgLABgRQgBgMgOgJQgNgJgPAAIgIAAIgGABg");
	this.shape_13.setTransform(71.4,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#010101").s().p("ABKBZIgIghQgGgZgIgsIgUA4IgIAZQgGAPgFAKQgHAMgMAAQgNAAgHgPIgIgZQgKgkgJglIgRBCIgFAeQgFAUgQAAQgJAAgFgGQgFgGAAgIQAAgVAJghIAQg0IAIgpQAFgdAIgKQAHgKALAAQANAAAFANQAGAMAGAkQAGAlAMAoQAOgoAOgwIAIggQAHgUAPAAQAPABAIAWQADAJADAZQAIA5AMAqQAMAqAAAEQAAAIgHAFQgFAGgIAAQgPgBgHgVg");
	this.shape_14.setTransform(51.7,23);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#010101").s().p("AhIBUQgegZAAgnQAAguAdgmQAhgrAwAAQAwAAAYAWQAYAWAAAsQAAAtgbAmQggAsgwAAQgoAAgdgYgAgrgoQgVAbABAhQAAAXARAOQARAOAaAAQAdAAAUgeQASgbAAghQABgdgNgLQgMgLggAAQgeAAgVAeg");
	this.shape_15.setTransform(28,22.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#010101").s().p("Ag9BTQgTgVgBgeQABgtAogvQAhgpAjAAIALABIAJABQAFgGAJAAQAOAAADAQQACAMAAAPQAAAHgDAFQgFAIgLAAQgMAAgGgNQgDgGgCgCQgCgBgJAAQgRAAgWAbQggAlAAAgQAAAPALALQAJAKAOAAQANAAAOgHIAVgNQAKgHAGAAQAIAAAGAGQAFAFAAAIQAAAIgHAGQgmAggmAAQgeAAgWgXg");
	this.shape_16.setTransform(8.4,22.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#010101").s().p("Ag/BpQgPgOAAgsQAAgSADgkQACglAAgSIgBgOIgBgOQAAgVATAAQAGAAAFADQAQgEAOgCQAOgCAMAAQAjAAAUAIQANAGAAAMQAAAHgFAFQgGAHgIAAIgGgBQgWgGgVAAIgVABQgMACgNAEIgBA1IA0gFIAhgCQAIAAAGAFQAGAFAAAIQAAAQgRACIghADIg6AFIgBAcQAAAbAEAEQABACAQAAIAYgBIAaAAIAIgBIAIgBQAIAAAFAEQAHAFAAAKQAAAPgQADQgOACgqABQgsAAgOgMg");
	this.shape_17.setTransform(-21,22.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#010101").s().p("AA6BoQgGgFAAgHIgBgeIgBgeIABgOQgWABgeAGIg1AJIgCAdIgBAeQAAAHgGAEQgFAFgIAAQgIAAgFgFQgFgFAAgHQAAgOACgbIACgoIABgyIABg0QAAgHAFgFQAGgFAIAAQAIAAAFAFQAFAFAAAIIgBAfIAAAfIgBANIgBAOIA1gKQAdgFAXgBIABgyQABgKAGgOQAHgRAKAAQAHAAAGAFQAGAFAAAIIgBAEQgCAKAAAHIgBAMIgBAMIgBAnIgCAlIACAeIACAeQAAAIgGAFQgFAFgIAAQgIAAgGgFg");
	this.shape_18.setTransform(-40.6,22.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#010101").s().p("AgNBkQgGgGAAgIIABgGIABgGIgBgTIgBgTQAAgSgDgeIgEgyIgHAAQgfAAgRgEQgPgEgBgOQAAgHAGgGQAFgHAJABIAWACIAWACIAZAAIAYgBIAfACIAfABQAIAAAGAGQAFAFABAIQgBAIgFAFQgGAFgIAAIghgBIgigCIAFA4QACAiAAAVIABAOIABANQAAALgEAIQgGAKgKAAQgGAAgHgEg");
	this.shape_19.setTransform(-61.2,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.2,0,396.7,43);


(lib.example0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// predicate
	this.instance = new lib.text_predicate("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(219.6,-32,1,1,0,0,0,43,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).to({alpha:1},6).wait(10).to({mode:"single"},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(42));

	// subject
	this.instance_1 = new lib.text_subject("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.9,16.4,1,1,0,0,0,35.9,14.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({alpha:1},3).wait(117));

	// bracket
	this.instance_2 = new lib.bracketdisplay("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(222.1,-1.2,1,1,0,0,0,118,11.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).wait(85));

	// complement
	this.instance_3 = new lib.text_complement("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(235.7,5.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({alpha:0.75},5).wait(88));

	// verb
	this.instance_4 = new lib.text_verb("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(122.8,4.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({alpha:1},5).wait(108));

	// v_line2
	this.instance_5 = new lib.line();
	this.instance_5.parent = this;
	this.instance_5.setTransform(207.8,38.2,1,0.064);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).to({scaleY:0.91,y:12.2},5).wait(97));

	// v_line
	this.instance_6 = new lib.line();
	this.instance_6.parent = this;
	this.instance_6.setTransform(87.4,-1.2,1,0.031);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:2.46,y:0.8},5).wait(120));

	// h_line
	this.instance_7 = new lib.line();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,41.4,1,0.022,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:13.68,y:40.4},5).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.2,90.4,42.6);


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
		//this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmCP',{loop:-1});
		
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
		
		 window.open ("comP_Scene1.html","_self");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-283.9,-13,331.7,399), null);


(lib.intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("thecompletepredicate");
	}
	this.frame_27 = function() {
		playSound("thecompletepredicateconsists");
	}
	this.frame_33 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_40 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_60 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_71 = function() {
		playSound("rhodes_f9_chord");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(24).call(this.frame_27).wait(6).call(this.frame_33).wait(7).call(this.frame_40).wait(20).call(this.frame_60).wait(11).call(this.frame_71).wait(84));

	// title
	this.instance = new lib.anim_title();
	this.instance.parent = this;
	this.instance.setTransform(205.4,40.9,1,1,0,0,0,122.1,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

	// definition
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAHQgEgDAAgEQAAgDAEgDQAEgEAEAAQAGAAADAEQAEADAAADQAAAEgEADQgEADgFABQgEgBgEgDg");
	this.shape.setTransform(386.9,287.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgIAKABIAKACQAGACAEAAQAPAAAAgHQAAgDgLgGIgUgJQgKgHgBgMQAAgPARgFQAKgEATAAQAHAAAFACQAEADAAAIQAAANgHAAQgIABgCgHIgFAAQgTAAABAEQgBAEALAEIAUALQAMAIAAAKQAAANgMAIQgLAFgNAAQgLAAgIgDg");
	this.shape_1.setTransform(379.5,284.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeApQgCgDAAgEIAAgyIAAgIIAAgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgKAAAAgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_2.setTransform(372,284.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAiQgOgKAAgSQAAgTAKgNQAMgPATgBQAOAAAIAFQAMAGAAAMQAAAIgJAHIgSAIIgZAMQADAEAGABQAFACAGAAQAKAAAHgEQAHgDAEAAQAIAAAAAHQAAAJgNAGQgLAFgMAAQgSgBgLgIgAgJgSQgGAFgDAJIASgHQAJgFAGgEQgFgCgIgBQgHABgEAEg");
	this.shape_3.setTransform(363.4,284.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIgBgOIAAgOIABgSIABgQQAAgFADgDQADgDAEAAQAFAAACADQAEADAAAFIgBAQIgBASIAAAOIABAOQgBAFgDADQgCADgFAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQADgEAFAAQAEAAAEAEQADADAAAFQAAAFgDADQgEADgEAAQgFAAgDgDg");
	this.shape_4.setTransform(357,282.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgEABQgGAAgDgDQgDgDAAgEQAAgIAIgCIANgBIABgJQADgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgJAAgFAGQgDAFgBALIgBACIAQgBQAOAAAAAKQAAAKgPAAIgQABIAAAUIABAVQAAAOgCAIQgCAJgHAAQgEAAgEgDg");
	this.shape_5.setTransform(350.3,282.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAFAAQAEAAADADQACADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgCADQgEADgDAAQgFAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEADQgEADgFAAQgDAAgFgDg");
	this.shape_6.setTransform(344.3,282.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWA7QgGADgFABIgMABQgRAAgMgLQgLgMAAgRQAAgVALgMQAMgNATAAIAKABQAFABADADQABgbACgKQABgJAIAAQAFAAADADQADADAAAEIgBAjIgCAhQAAAbACAKIAAACQgBAFgCADQgEACgEAAQgFAAgDgFgAgPADQgGAHAAAOQAAAIAGAGQAHAGAHAAQAGAAADgBIAHgGIACgCIAAgcQgCgGgEgBQgEgCgGAAQgLAAgFAFg");
	this.shape_7.setTransform(337.1,282.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_8.setTransform(328.2,284.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgaIgCgZIgBgIQgJAEgJANIgBABIAAAYIgBAGIAAAFQAAAFgDADQgDABgFAAQgHAAgCgFQgCgEAAgJIAAgbIAAgMIAAgMQAAgGACgGQADgHAGAAQAEAAAEADQADADAAAEIgBAHQAMgOALAAQAMAAAEAKQAFgEAGgCQAGgCAHAAQAPAAAFAOIAEAWIAFApQABAEgEADQgDADgFAAQgJAAgBgJIgDgWIgDgWQgCgOgDAAIgIADIgKAHIACAYQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_9.setTransform(318,284.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgIAJABIALACQAGACAEAAQAPAAAAgHQAAgDgLgGIgTgJQgLgHAAgMQAAgPAQgFQAKgEATAAQAIAAADACQAFADABAIQAAANgIAAQgIABgBgHIgHAAQgRAAgBAEQAAAEALAEIAVALQALAIAAAKQAAANgNAIQgJAFgOAAQgLAAgIgDg");
	this.shape_10.setTransform(300.7,284.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA2QgDgDgBgDIAAgJIABgIIgBgoIgPgCQgKAAAAgKQAAgEADgDQADgDAEAAIAOABIAAgIIgBgIQAAgFADgCQADgDAFAAQAKAAAAATIAAAHIAIgBIAMABQAHADAAAGQAAAFgDADQgDADgFAAIgDAAIgFAAIgHAAIABApIAAADIAAAFQABASgMAAQgDAAgDgDg");
	this.shape_11.setTransform(293.1,283);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAFAAQADAAAEADQACADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgCADQgDADgEAAQgFAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAFgEADAAQAGAAADAEQAEADAAAFQAAAFgEADQgDADgGAAQgDAAgFgDg");
	this.shape_12.setTransform(287.3,282.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHA9QgDgCAAgGIAAhrQAAgEAEgCQADgEADAAQAFAAADAEQADACAAAEIAABoQAAAPgLAAQgEgBgDgDg");
	this.shape_13.setTransform(275.6,282.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHA9QgDgCAAgGIAAhrQAAgEAEgCQADgEADAAQAFAAADAEQADACAAAEIAABoQAAAPgLAAQgEgBgDgDg");
	this.shape_14.setTransform(271.2,282.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgKAAgTQAAgTAOgNQAOgNASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAIIAAAKQAAAOACAGIAEAIIADAIQAAAEgEADQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAALAEAFQADAFAIAAQAEAAAEgBQAEgCAEgDQgCgSAAgJIAAgFIABgIIgDgBIgCAAQgJgBgIAJg");
	this.shape_15.setTransform(264.7,284.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWA7QgGADgFABIgMABQgRAAgMgLQgLgMAAgRQAAgVALgMQAMgNATAAIAKABQAFABADADQABgbACgKQABgJAJAAQAEAAADADQADADAAAEIgCAjIgBAhQAAAbABAKIAAACQAAAFgCADQgEACgEAAQgFAAgDgFgAgPADQgGAHAAAOQAAAIAGAGQAHAGAHAAQAGAAADgBIAHgGIACgCIAAgcQgCgGgEgBQgEgCgGAAQgLAAgFAFg");
	this.shape_16.setTransform(248.4,282.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgDQABgHgEAAQgHAAgFAIQgGAJgEANIgBAGIAAAHIgBAHIAAAHQAAAEgDADQgDAEgFAAQgFAAgDgEQgCgDAAgEIgBgGIAAgIIABgUIABgVIAAgHIgBgHQAAgFADgDQADgCAFAAQAKAAABAMIAAABQAMgLALAAQAPgBAFAMQAEAJAAARIAAAFIAAAEIACAQIABAQQAAAEgCACQgEAEgEAAQgKAAgBgKg");
	this.shape_17.setTransform(239.7,284.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgKAAgTQAAgTAOgNQAOgNASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAIIAAAKQAAAOACAGIAEAIIADAIQAAAEgEADQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAALAEAFQADAFAIAAQAEAAAEgBQAEgCAEgDQgCgSAAgJIAAgFIABgIIgDgBIgCAAQgJgBgIAJg");
	this.shape_18.setTransform(231,284.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AgHA5QgEgDAAgFIABgDIAAgEIAAgLIgBgKIgBgbIgDgdIgEAAQgRAAgKgDQgJgBAAgJQAAgEADgDQADgDAFgBIANACIAMABIAPgBIANAAIASABIASABQAEAAADADQAEADAAAFQAAAEgEADQgDAEgEAAIgTgBIgTgBIACAfIABAgIABAHIAAAIQAAAGgCAFQgDAFgGAAQgEABgDgDg");
	this.shape_19.setTransform(214.1,282.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("Ag2A8QgDgDAAgFIAAgJIABgJIAAgOIABgOIgBgOIAAgOIgBgPIgBgNQAAgGAEgDQAEgDAFgBQAGABAHAJQAjAzAiAfIAAgMIAAgzIgBgJIgBgIQAAgLALAAQANAAAAAoIAAAMIgBAxIgBAMQgCAKgJgBQgGABgHgHQgegaglgwIAAAYIAAASIAAATQAAAWgLAAQgGABgDgEg");
	this.shape_20.setTransform(201.9,282.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AgjA8QgJgIAAgZIACgfIABgfIgBgIIAAgIQgBgMALAAQADAAAEACIARgDIAPgCQATABALAEQAIADAAAHQAAAEgDAEQgDADgFAAIgDAAQgNgEgLAAIgNABIgNADIgCAeIAegDIATgBQAFAAADADQAEADgBAFQABAIgLABIgTACIggADIgBAQQAAAPACADQACABAJAAIANAAIAPgBIAEAAIAFgBQAEAAAEADQADADAAAFQAAAJgJACQgIABgYgBQgZAAgHgGg");
	this.shape_21.setTransform(190.7,282.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AAqAzIgEgTQgEgOgEgZIgMAgIgEAOIgHAOQgDAHgHAAQgHAAgEgIIgFgPQgGgUgEgVIgKAlIgEASQgDALgIAAQgGAAgDgEQgCgDAAgEQAAgNAFgSIAIgdIAFgYQAEgRAEgFQAEgGAHAAQAHAAACAHQAEAHAEAVQADAUAGAXQAIgWAJgcIADgSQAFgLAJAAQAIAAAEANIAEATQAEAhAIAXIAHAbQAAAEgFADQgDADgEAAQgJAAgEgMg");
	this.shape_22.setTransform(178.5,282.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AgkA8QgIgIAAgZIACgfIABgfIgBgIIAAgIQAAgMALAAQACAAAEACIARgDIAOgCQAUABAMAEQAHADAAAHQAAAEgDAEQgDADgFAAIgDAAQgNgEgMAAIgLABIgPADIgBAeIAegDIATgBQAEAAAEADQADADABAFQAAAIgKABIgTACIghADIAAAQQAAAPABADQACABAIAAIAOAAIAOgBIAFAAIAEgBQAGAAACADQAEADAAAFQAAAJgJACQgIABgYgBQgZAAgIgGg");
	this.shape_23.setTransform(166.5,282.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009900").s().p("AgpAvIACgZQACggAAgrQAAgEADgDQADgDAEAAQAFAAAEADQACADAAAEQAAArgBAiIgCASQATABAbgKIAEAAQAFAAADADQADAEAAAEQAAAGgHADQgJAEgTAEQgSADgKAAQgUAAAAgRg");
	this.shape_24.setTransform(157.1,282.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AgiA7QgDgDgBgEIAAgWIADgjIABgkQAAgUALABIAIgBIALAAQAOAAANAJQAPAMAAAPQAAAUgPALQgOALgSAAIgHgBIgBAkQAAAEgDADQgDADgEAAQgEAAgDgDgAgOgeIgBAbIAGABQAKAAAJgGQAIgGAAgLQAAgGgIgFQgHgFgJAAIgEAAIgEAAIAAALg");
	this.shape_25.setTransform(148.3,282.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009900").s().p("AAqAzIgEgTQgEgOgEgZIgMAgIgFAOIgFAOQgFAHgGAAQgIAAgEgIIgDgPQgHgUgFgVIgKAlIgCASQgDALgJAAQgFAAgDgEQgEgDAAgEQAAgNAGgSIAJgdIAEgYQAEgRAEgFQAEgGAGAAQAHAAAEAHQADAHADAVQAEAUAGAXQAJgWAHgcIAFgSQAEgLAIAAQAJAAAFANIADATQAFAhAGAXIAHAbQAAAEgDADQgEADgEAAQgIAAgFgMg");
	this.shape_26.setTransform(137,282.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AgpAwQgRgOAAgXQAAgZARgWQASgZAcAAQAbAAANANQAOAMAAAZQAAAagPAWQgSAZgbAAQgXAAgRgOgAgYgXQgMAQAAASQAAANAKAJQAKAHAPAAQAQAAALgRQALgPAAgTQAAgQgHgGQgHgGgSAAQgRAAgMAQg");
	this.shape_27.setTransform(123.4,282.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009900").s().p("AgiAvQgMgMAAgRQAAgZAYgbQATgXATAAIAHAAIAEABQAEgEAEAAQAJABABAIIABAQQAAAEgCADQgDAFgFgBQgIABgCgIQgCgDgCgCIgGAAQgKAAgMAQQgSAUAAASQAAAJAGAGQAFAGAJAAQAHAAAHgEIAMgIQAGgDAEAAQAEgBAEAEQADADAAAEQAAAFgFAEQgVARgVABQgSgBgMgNg");
	this.shape_28.setTransform(112.2,282.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWA7QgGADgFABIgMABQgRAAgMgLQgLgMAAgRQAAgVALgMQAMgNATAAIAKABQAFABADADQABgbACgKQABgJAIAAQAFAAADADQADADAAAEIgCAjIgBAhQAAAbABAKIAAACQAAAFgCADQgEACgEAAQgFAAgDgFgAgPADQgGAHAAAOQAAAIAGAGQAHAGAHAAQAGAAADgBIAHgGIACgCIAAgcQgCgGgEgBQgEgCgGAAQgLAAgFAFg");
	this.shape_29.setTransform(95.4,282.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgDQABgHgEAAQgHAAgFAIQgGAJgEANIgBAGIAAAHIgBAHIAAAHQAAAEgDADQgDAEgFAAQgFAAgDgEQgCgDAAgEIgBgGIAAgIIABgUIABgVIAAgHIgBgHQAAgFADgDQADgCAFAAQAKAAABAMIAAABQAMgLALAAQAPgBAFAMQAEAJAAARIAAAFIAAAEIACAQIABAQQAAAEgCACQgEAEgEAAQgKAAgBgKg");
	this.shape_30.setTransform(86.7,284.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgKAAgTQAAgTAOgNQAOgNASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAIIAAAKQAAAOACAGIAEAIIADAIQAAAEgEADQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAALAEAFQADAFAIAAQAEAAAEgBQAEgCAEgDQgCgSAAgJIAAgFIABgIIgDgBIgCAAQgJgBgIAJg");
	this.shape_31.setTransform(78,284.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgmA7QgEgEAAgEIAAhSIAAgLIAAgKQACgHAMgCQAGgBAOAAQAOAAANAJQAQALAAARQAAAJgDAGQgDAFgGAFQAHADAGAIQAHAIAAAIQAAALgLAJQgIAGgIADQgRAHgcAAQgFAAgEgEgAgUAqQANgBAPgFQAOgDAAgFQgBgGgIgFQgHgDgGgBIgUgBgAgUgZIAAARIALAAQAXgCAAgPQgBgGgGgFQgHgFgIAAIgMAAg");
	this.shape_32.setTransform(61.8,282.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgqA6QgDgDAAgEIABgSIAAgRIAAg+QAAgFACgEQAFgGAGABIAUABQALACAHADQAhARAAAZQAAAKgHAHQgHAIgOAFQAVAMALAMQACADAAAEQAAAEgDAEQgEADgEAAQgEAAgEgEQgXgWgcgIIABAZQAAAEgDADQgDADgFAAQgFAAgDgDgAgXACIADAAQATAAAJgDQAEgCADgEQADgDAAgCQAAgJgLgIQgKgHgLgCIgJAAg");
	this.shape_33.setTransform(51.5,282.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgkA8QgIgIAAgZIABgfIACgfIgBgIIgBgIQABgMAKAAQAEAAACACIASgDIAPgCQATABALAEQAIADAAAHQAAAEgDAEQgDADgFAAIgDAAQgNgEgLAAIgNABIgNADIgBAeIAdgDIATgBQAEAAAEADQADADAAAFQAAAIgKABIgTACIgfADIgCAQQABAPACADQAAABAKAAIANAAIAPgBIAEAAIAEgBQAFAAAEADQADADAAAFQAAAJgJACQgIABgXgBQgaAAgIgGg");
	this.shape_34.setTransform(41.5,282.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgQA3QgKgWgLgqIgHgVQgEgPAAgGQAAgEADgDQAEgDAEAAQAHAAADAIIAEANIAHAZIAMAnIARguIAHgTQAEgLAGgGQADgEAFAAQAFAAADADQADADAAAFQAAADgCADQgEAGgDAIIgGAQIgVA1IgJATQgDAGgGAAQgIAAgDgIg");
	this.shape_35.setTransform(30.9,282.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgZAiQgOgKAAgSQAAgTALgNQALgPASgBQAOAAAKAFQALAGAAAMQAAAIgJAHIgSAIIgaAMQAFADAEACQAGACAGAAQALAAAGgEQAHgDAEAAQAIAAAAAHQAAAJgNAGQgLAFgMAAQgSgBgLgIgAgJgSQgGAFgDAJIASgHQAJgFAHgEQgGgCgJgBQgFABgFAEg");
	this.shape_36.setTransform(375.3,260);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgFIAAgHQgBgEgDAAQgJABgGAGQgEAEgGAMQAAAbgDAHQgDAGgGAAQgFAAgDgDQgEgDAAgFIABgDIABgWIAAgzIABgDIAAgLIgBgIIAAgHQAAgEADgDQADgDAEAAQAIAAADAIQABAFAAAKIAAAQIgBAOQAGgFAHgDQAFgCAIAAQANAAAGAHQAEAGABAKIABAUIACAPIACAPIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_37.setTransform(366.4,257.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGA2QgDgDAAgDIAAgJIAAgIIgBgoIgPgCQgKAAAAgJQAAgFADgDQADgDAEAAIAOABIAAgIIgBgIQAAgFADgCQADgDAFAAQAKAAAAATIAAAHIAIgBIAMABQAHADAAAHQAAAEgDADQgDADgFAAIgDAAIgFAAIgHAAIABApIAAADIAAAFQAAASgLAAQgDAAgDgDg");
	this.shape_38.setTransform(357.9,258.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgFABQgEAAgEgDQgDgDAAgEQAAgIAIgCIANgBIABgJQADgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgJAAgFAGQgDAFgBALIAAACIAOgBQAPAAAAAKQAAAKgQAAIgOABIAAAUIAAAVQAAAOgCAIQgCAJgHAAQgFAAgDgDg");
	this.shape_39.setTransform(343,258.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_40.setTransform(334.7,260);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgIAJABIALACQAHACADAAQAPAAAAgHQAAgDgLgGIgUgJQgLgHABgMQAAgPAQgFQAKgEATAAQAIAAADACQAGADAAAIQAAANgIAAQgIABgBgHIgHAAQgRAAgBAEQAAAEALAFIAVAKQALAIAAAKQAAANgMAIQgLAFgNAAQgKAAgJgDg");
	this.shape_41.setTransform(319.7,259.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGA2QgDgDgBgDIAAgJIABgIIgCgoIgOgCQgKAAAAgJQAAgFADgDQADgDAEAAIAOABIAAgIIgBgIQAAgFADgCQADgDAFAAQAKAAAAATIAAAHIAIgBIANABQAGADAAAHQAAAEgDADQgDADgFAAIgDAAIgFAAIgHAAIACApIAAADIAAAFQAAASgMAAQgDAAgDgDg");
	this.shape_42.setTransform(312.1,258.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgIAKABIAKACQAGACAEAAQAPAAAAgHQAAgDgLgGIgUgJQgKgHgBgMQAAgPARgFQAKgEATAAQAHAAAFACQAEADAAAIQAAANgHAAQgIABgCgHIgFAAQgTAAABAEQgBAEALAFIAUAKQAMAIAAAKQAAANgNAIQgKAFgNAAQgLAAgIgDg");
	this.shape_43.setTransform(304.3,259.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIgBgOIAAgOIABgSIABgQQAAgFADgDQADgDAEAAQAFAAACADQAEADAAAFIgBAQIgBASIAAAOIABAOQgBAFgDADQgCADgFAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQADgEAFAAQAEAAAEAEQADADAAAFQAAAFgDADQgEADgEAAQgFAAgDgDg");
	this.shape_44.setTransform(298.5,258.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgIAJABIALACQAGACAEAAQAPAAAAgHQAAgDgLgGIgTgJQgLgHAAgMQAAgPAQgFQAKgEATAAQAIAAAEACQAEADABAIQAAANgIAAQgIABgBgHIgHAAQgRAAAAAEQAAAEAKAFIAUAKQAMAIAAAKQAAANgNAIQgJAFgOAAQgKAAgJgDg");
	this.shape_45.setTransform(292,259.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAQAkIgCgQIgBgQIAAgGIAAgHIAAgDIABgDQAAgHgEAAQgHAAgFAIQgHAJgDANIAAAGIgBAHIAAAHIgBAHQAAAEgDADQgEAEgEAAQgFAAgDgEQgDgDAAgEIAAgGIAAgIIAAgUIABgVIAAgHIAAgHQAAgFADgCQAEgDAEAAQAKAAABAMIAAABQAMgLALAAQAOgBAHAMQADAJAAAQIAAAGIAAAEIACAQIABAQQAAAEgDACQgDAEgFAAQgJAAgBgKg");
	this.shape_46.setTransform(284.1,259.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_47.setTransform(275.5,260);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYAiQgMgKAAgRQAAgOALgRQANgTAPAAQAIAAALAEQANAGAAAHQAAAEgCADQgDADgFAAQgDAAgFgEQgEgDgKgBQgFABgHALQgHALAAAIQAAAIAGAFQAGAFAIAAQAFgBAIgEIAKgDQAEAAADACQADADAAAFQAAAGgNAFQgMAGgIAAQgQAAgMgKg");
	this.shape_48.setTransform(267.2,260);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgjA8QgJgIAAgZIABgfIACgfIgBgIIgBgIQABgMAKAAQAEAAACACIASgDIAPgCQATABALAEQAIADAAAHQAAAEgDAEQgDADgFAAIgDAAQgNgEgLAAIgNABIgNADIgBAeIAdgDIATgBQAEAAAEADQAEADgBAFQAAAIgKABIgTACIggADIgBAQQAAAPADADQABABAJAAIANAAIAPgBIAEAAIAFgBQAFAAADADQADADAAAFQAAAJgJACQgIAAgXABQgagBgHgGg");
	this.shape_49.setTransform(251.5,258);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHA5QgEgDAAgFIABgDIAAgEIAAgLIgBgKIgBgbIgDgdIgEAAQgRAAgKgDQgJgBAAgJQAAgEADgDQADgDAFAAIANABIAMABIAPgBIANAAIASABIASABQAEAAADADQAEADAAAFQAAAEgEADQgDAEgEAAIgTgBIgTgBIACAfIABAgIABAHIAAAIQAAAGgCAFQgDAFgGAAQgEABgDgDg");
	this.shape_50.setTransform(240.8,258);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAbAsQgEgJgDgMIgTACQgLABgHABIgMAZQgEAHgFAAQgFAAgDgDQgEgDAAgFQAAgEAMgXIgBgFQAAgDAHgCIAZgoQASgdAFAAQAJAAACALIAGAZIALAyIAEALQADAGAAAEQAAAEgEADQgDADgEAAQgHgBgGgOgAgGAHIALgBIALgBIgGgaIgQAcg");
	this.shape_51.setTransform(229.2,258.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgiAvQgLgMAAgRQAAgZAWgbQAUgXATAAIAGAAIAFABQAEgEAFAAQAHABADAIIAAAQQAAAEgBADQgDAFgGgBQgHABgDgIQgCgDgCgCIgGAAQgKAAgMAQQgRAUgBASQABAJAFAGQAGAGAHAAQAHAAAIgEIAMgIQAGgDADAAQAFgBADAEQADADABAEQgBAFgEAEQgVARgWABQgRgBgMgNg");
	this.shape_52.setTransform(218.6,258);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgkA5QgEgEABgEQgBgEAEgDQAEgEAEAAIAQgBIgBgjQAAgUACgUIgRABQgFAAgDgDQgEgDABgFQgBgEAEgDQADgDAEAAIAXgBQANAAAYADQAKACAAAJQgBAFgDADQgDACgEAAIgVgCIgBAlIAAAkIAWgBQAEAAADADQAEAEAAAEQgBAEgDADQgDADgEAAIgOABIgNAAIgPABIgQACQgFAAgDgDg");
	this.shape_53.setTransform(209.1,258.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYA/QgJgCgFgDQgEAAgDgDQgEgDAAgFIABgYIABgWIAAgZIgBgbQAAgEAEgFQAEgDAFAAQADAAAKAEIAPAHQAVAHARAPQATATAAAVQAAAOgHANQgGAMgMAHQgNAJgWAAIgOgCgAgaAoIAHADIAIABQAQAAAIgFQAHgFAEgHQAEgIAAgIQAAgTgXgOQgGgFgZgJg");
	this.shape_54.setTransform(199.3,258.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkA8QgIgIAAgZIACgfIABgfIgBgIIAAgIQAAgMALAAQACAAADACIASgDIAOgCQAUABAMAEQAHADAAAHQAAAEgDAEQgDADgFAAIgDAAQgNgEgMAAIgLABIgPADIAAAeIAdgDIATgBQAFAAADADQADADABAFQgBAIgJABIgTACIggADIgBAQQAAAPACADQAAABAJAAIAOAAIAOgBIAFAAIAEgBQAGAAACADQAEADAAAFQAAAJgJACQgIAAgYABQgZgBgIgGg");
	this.shape_55.setTransform(188.5,258);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgqA6QgDgDAAgEIAAgSIAAgRIAAg+QAAgFADgEQAFgGAHABIATABQALACAHADQAhARAAAZQAAAKgHAHQgHAIgOAFQAVAMALAMQACADAAAEQAAAEgDAEQgDADgFAAQgEAAgEgEQgXgWgcgIIABAZQAAAEgDADQgDADgFAAQgEAAgEgDgAgXACIADAAQAUAAAIgDQADgCAEgEQADgDAAgCQAAgJgLgIQgJgHgMgCIgJAAg");
	this.shape_56.setTransform(178.3,258);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgiA7QgEgDAAgEIAAgWIACgjIACgkQAAgUALABIAIgBIALAAQAPAAAMAJQAPAMABAPQAAAUgQALQgPALgSAAIgGgBIgBAkQAAAEgDADQgDADgEAAQgEAAgDgDgAgNgeIgCAbIAFABQALAAAJgGQAIgGAAgLQAAgGgIgFQgHgFgJAAIgEAAIgDAAIAAALg");
	this.shape_57.setTransform(168.8,257.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgjA8QgJgIAAgZIACgfIABgfIgBgIIAAgIQgBgMALAAQAEAAADACIARgDIAOgCQAUABAMAEQAHADAAAHQAAAEgDAEQgDADgFAAIgDAAQgNgEgMAAIgMABIgOADIgBAeIAegDIATgBQAFAAADADQADADAAAFQABAIgLABIgSACIghADIgBAQQAAAPACADQACABAIAAIAOAAIAPgBIAEAAIAFgBQAEAAAEADQADADAAAFQAAAJgJACQgIAAgYABQgZgBgHgGg");
	this.shape_58.setTransform(152.8,258);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHA5QgEgDAAgFIABgDIAAgEIAAgLIgBgKIgBgbIgDgdIgEAAQgRAAgKgDQgJgBAAgJQAAgEADgDQADgDAFAAIANABIAMABIAPgBIANAAIASABIASABQAEAAADADQAEADAAAFQAAAEgEADQgDAEgEAAIgTgBIgTgBIACAfIABAgIABAHIAAAIQAAAGgCAFQgDAFgGAAQgEABgDgDg");
	this.shape_59.setTransform(142,258);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgjA8QgJgIAAgZIACgfIABgfIgBgIIAAgIQgBgMALAAQAEAAADACIARgDIAOgCQAUABAMAEQAHADAAAHQAAAEgDAEQgDADgFAAIgDAAQgNgEgMAAIgMABIgOADIgBAeIAegDIATgBQAFAAADADQADADAAAFQABAIgKABIgTACIghADIgBAQQAAAPACADQACABAIAAIAOAAIAPgBIAEAAIAFgBQAEAAAEADQADADAAAFQAAAJgJACQgIAAgYABQgZgBgHgGg");
	this.shape_60.setTransform(131.6,258);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgoAvIABgZQACggAAgrQAAgEADgDQADgDAEAAQAGAAACADQADADAAAEQAAArgCAhIgBATQASABAcgKIAEAAQAFAAADADQACAEABAEQgBAGgGADQgKAEgTAEQgQADgLAAQgUAAABgRg");
	this.shape_61.setTransform(122.2,258.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgjA7QgCgDAAgEIAAgWIACgjIABgkQAAgUALABIAHgBIAMAAQAPAAANAJQAPAMgBAPQAAAUgPALQgPALgRAAIgIgBIAAAkQAAAEgCADQgEADgEAAQgFAAgDgDgAgOgeIgBAbIAGABQAKAAAIgGQAJgGAAgLQAAgGgIgFQgIgFgIAAIgEAAIgEAAIAAALg");
	this.shape_62.setTransform(113.4,257.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AArAzIgFgTQgEgOgEgZIgMAgIgFAOIgFAOQgFAHgGAAQgHAAgFgIIgDgPQgHgUgEgVIgLAlIgDASQgCALgJAAQgFAAgDgEQgDgDAAgEQgBgNAGgSIAIgdIAGgYQADgRAEgFQAEgGAHAAQAHAAADAHQADAHAEAVQADAUAHAXQAHgWAJgcIADgSQAFgLAIAAQAJAAAFANIADATQAEAhAIAXIAGAbQAAAEgDADQgDADgFAAQgJAAgDgMg");
	this.shape_63.setTransform(102.1,258.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgpAwQgRgOAAgXQAAgZARgWQASgZAcAAQAbAAANANQAOAMAAAZQAAAagPAWQgSAZgbAAQgXAAgRgOgAgYgXQgMAQAAASQAAANAKAJQAKAHAPAAQAQAAALgRQALgPAAgTQAAgQgHgGQgHgGgSAAQgRAAgMAQg");
	this.shape_64.setTransform(88.5,258.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgiAvQgMgMAAgRQAAgZAYgbQATgXATAAIAHAAIAEABQADgEAFAAQAJABABAIIACAQQgBAEgCADQgDAFgFgBQgIABgDgIQgBgDgCgCIgGAAQgKAAgLAQQgTAUABASQgBAJAGAGQAFAGAJAAQAGAAAJgEIALgIQAHgDADAAQAEgBAEAEQACADAAAEQAAAFgDAEQgWARgVABQgSgBgMgNg");
	this.shape_65.setTransform(77.3,258);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgaAiQgNgKAAgSQAAgTALgNQALgPASgBQAOAAAKAFQALAGAAAMQAAAIgJAHIgSAIIgZAMQAEADAEACQAGACAGAAQALAAAGgEQAHgDAEAAQAIAAAAAHQAAAJgNAGQgLAFgMAAQgSgBgMgIgAgJgSQgGAFgDAJIASgHQAJgFAHgEQgGgCgJgBQgFABgFAEg");
	this.shape_66.setTransform(60.7,260);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgFIAAgHQgBgEgDAAQgJABgGAGQgEAEgGAMQAAAbgDAHQgDAGgGAAQgFAAgDgDQgEgDAAgFIABgDIABgWIAAgzIABgDIAAgLIgBgIIAAgHQAAgEADgDQADgDAEAAQAIAAADAIQABAFAAAKIAAAQIgBAOQAGgFAHgDQAFgCAIAAQANAAAGAHQAEAGABAKIABAUIACAPIACAPIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_67.setTransform(51.9,257.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgHA5QgEgDAAgFIABgDIAAgEIAAgLIgBgKIgBgbIgDgdIgEAAQgRAAgKgDQgJgBAAgJQAAgEADgDQADgDAFAAIANABIAMABIAPgBIANAAIASABIASABQAEAAADADQAEADAAAFQAAAEgEADQgDAEgEAAIgTgBIgTgBIACAfIABAgIABAHIAAAIQAAAGgCAFQgDAFgGAAQgEABgDgDg");
	this.shape_68.setTransform(41.6,258);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(155));

	// Grey
	this.instance_1 = new lib.staticgraybox("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(212.2,305,1.06,0.523,0,0,0,200.9,133.6);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.staticgraybox("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.8,9.9,1.06,0.416,0,0,0,200.9,-0.1);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(155));

	// PredText
	this.instance_3 = new lib.example0("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(26.4,127.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).wait(128));

	// sam
	this.instance_4 = new lib.animsamrolls();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-10.4,90.3,0.52,0.52,0,0,0,20.9,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,guide:{path:[-10.4,90.3,-9.6,90.1,-8.8,89.9,-2.4,88.4,1.2,86.8,2.1,86.4,2.8,85.9,12.7,80.4,15.3,79.1,35.9,69.3,64.4,69.3,78.9,69.3,90.1,73.3,97.9,76.1,106.9,82.1,117.8,89.4,120.9,91,129.1,95,138.4,95,153.5,95,162.3,91.4,167.6,89,177.2,83.1,187.9,77.8,207.3,74.6,226.7,71.4,248.3,74.3,269.8,77.1,279.9,79.1,290,81.1,299.5,85.1,309,89.3,321.1,95,333.1,100.9,355.1,105.6,384.3,112,425.3,112,453,112,459.9,108,462.2,106.5,502.2,102.6,475.6,102.6,495.8,100.4,516,98,487.9,96.6,459.8,95.3,453,93.9,449.5,93.3,442.9,92.5]}},67).wait(1).to({skewY:180,x:437.6,y:215.2},0).to({x:-40.1,y:214.3},31).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,10,445.1,294.2);


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
(lib.comP_scene0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene0:0,scene0_repeat:118});

	// timeline functions:
	this.frame_117 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_129 = function() {
		this.gotoAndPlay("scene0_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(117).call(this.frame_117).wait(12).call(this.frame_129).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAAPQAAgFAAgFQAAgJAAgK");
	this.shape.setTransform(-140,137.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(130));

	// main (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjfAYoMAAAgxPMBG/AAAMAAAAxPg");
	mask.setTransform(272.4,192.1);

	// bgmusic_stop
	this.instance = new lib.intro();
	this.instance.parent = this;
	this.instance.setTransform(274,142.6,1.066,1.066,0,0,0,212,109.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

	// bgmusic_start
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFCC").ss(1,1,1).p("Asjh6QDJiKDrAKQDaAJC5BkQCtBdCMCIQCZCWDgAMQAnACAnAA");
	this.shape_1.setTransform(125.1,131.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FEFE36").ss(1,1,1).p("AAupGQC3hKDEgUQDJgUDKAEQDaAEDZAhQDtAkBGDOQBAC/jkAvQjlAwhNBvQCTC1DlgaQDIgXDCAvQDDAuDUggEAjlgImQiPAAiagUQjHgYjOg9QjHg6i6hTQjBhWjVgwQjTgxjYgWQjUgWjRAeQjBAci6A2QjPA+iwBfAiPN/QDChgDbgQQDVgQDSAhQDFAgDBAtQDXAyDSBDQDPBADaABQArAAAjgOEgjkgOoQFWitDOABQDfABDNBRQDIBPCxB/QAwAiAxAgQCEBWCMBHQDABgDSAzQDYA1DZg5Egg8gCPQCwh7DSBJQC4BACkBlQC0BtC6BrQC8BtDbAEQArABAjgSAlCGHQiTCRjpgkQjcghjXApQjAAkivBVQkHCBEhA+QC8AoDCgdQDzglBbCLQB1CwELgFQA4gBA4AG");
	this.shape_2.setTransform(272.4,196.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("EgjkAUWMAAAgjeIAAihQFWisDOABQDfAADNBSQDIBPCxB+QAwAjAxAgQCwhgDPg9QC6g3DBgcQDRgeDUAWQDYAXDTAwQDVAxDBBVQC6BUDHA6QDOA8DHAZQCaATCPAAIAALYQhXANhUAAIAAAAIgBAAQhzAAhvgZIgBAAIgIgCIgEgBIgBAAQiAgeiDAAIAAAAIAAAAQg7AAg7AGIgDAAIgFABIgEAAQgdADgbAAIAAAAIgBAAQi3AAh+iSIgIgKIgCgCQBNhwDlgwQCyglAAh8QAAgjgOgqQhGjOjtgkQjZghjagDIhDgBIAAAAIgBAAQibAAiaAOIgIABIgSACQjEATi3BKQC3hKDEgTIASgCIAIgBQCagOCbAAIABAAIAAAAIBDABQDaADDZAhQDtAkBGDOQAOAqAAAjQAAB8iyAlQjlAwhNBwIACACIAIAKQB+CSC3AAIABAAIAAAAQAbAAAdgDIAEAAIAFgBIADAAQA7gGA7AAIAAAAIAAAAQCDAACAAeIABAAIAEABIAIACIABAAQBvAZBzAAIABAAIAAAAQBUAABXgNIAAUlgAkKOUQgugFgvAAIgBAAIgBAAIgOAAIgDABIgOAAIAAAAIgBAAQj+AAhyiqIgBgCIgCgCQhIhsilAAIAAAAIAAAAQgsAAgzAIQhRAMhRAAIAAAAIAAAAQhlAAhkgTIgBAAIgDgBIgPgDQiYggABgzQAAguB9g9QCvhVDAglIADgBIAJgBIABAAQBwgVBxAAIAAAAIAAAAQBeAABfAOIAIACQAuAGArABIAAAAIAAAAQCsgBB2hyIABgCIgBACQh2ByisABIAAAAIAAAAQgrgBgugGIgIgCQhfgOheAAIAAAAIAAAAQhxAAhwAVIgBAAIgJABIgDABQjAAlivBVQh9A9AAAuQgBAzCYAgIAPADIADABIABAAQBkATBlAAIAAAAIAAAAQBRAABRgMQAzgIAsAAIAAAAIAAAAQClABBIBrIACACIABACQByCqD+AAIABAAIAAAAIAOAAIADgBIAOAAIABAAIABAAQAvAAAuAFgAK1JgQDFAfDBAtQDXAzDSBCQDPBBDaABQArAAAjgOQgjAOgrAAQjagBjPhBQjShCjXgzQjBgtjFgfIgFgBIgEgBQiJgViLAAIAAAAIgBAAQhEAAhFAFQjbARjCBfQDChfDbgRQBFgFBEAAIABAAIAAAAQCLAACJAVIAEABIAFABgApUBtQAngBAhgQIABAAIgBAAQghAQgnABIAAAAIAAAAIgDAAIgCgBQjbgEi8hrQi6hri0hvQikhki4hBIgDgBIgCgBIAAAAQhMgZhHAAIAAAAIAAAAQh6AAhtBLIgDACIADgCQBthLB6AAIAAAAIAAAAQBHAABMAZIAAAAIACABIADABQC4BBCkBkQC0BvC6BrQC8BrDbAEIACABIADAAIAAAAIAAAAgA8vxIQDZAJC6BlQCtBdCMCIQCZCWDgAMQAnACAnAAQgnAAgngCQjggMiZiWQiMiIithdQi6hljZgJIgHAAIgXgBIAAAAIgBAAQjSABi2B3IgBAAIgJAGIgEADIAEgDIAJgGIABAAQC2h3DSgBIABAAIAAAAIAXABIAHAAgAA5ppQBtAABtgcIACAAIAEgCIgEACIgCAAQhtAchtAAIAAAAIAAAAQhoAAhpgaQjSgzjAhgQiMhHiEhVQCEBVCMBHQDABgDSAzQBpAaBoAAIAAAAIAAAAgEAjlgAPg");
	this.shape_3.setTransform(272.4,215.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AACBF2").s().p("Ae9H8QjIgYjOg9QjHg6i6hTQjBhWjUgwQjUgxjYgXQjUgWjRAeQjAAdi7A2QjOA9iwBgQgygggwgjQixh+jIhPQjNhQjfgBQjNgBlWCrIgBqcMBHJAAEIAAQaQiPAAiZgTg");
	this.shape_4.setTransform(272.4,88.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("Af42jMg/vgAEMAABAtPMA/uAAAg");
	this.shape_5.setTransform(269.9,191.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(130));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(134,201.6,682.5,398.7);
// library properties:
lib.properties = {
	id: '32A3E5D5E8346B41B62A348006CDBB00',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmCP.mp3", id:"bgmCP"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/rhodes_f9_chord.mp3", id:"rhodes_f9_chord"},
		{src:"sounds/rhodes_f_note.mp3", id:"rhodes_f_note"},
		{src:"sounds/thecompletepredicate.mp3", id:"thecompletepredicate"},
		{src:"sounds/thecompletepredicateconsists.mp3", id:"thecompletepredicateconsists"}
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
an.compositions['32A3E5D5E8346B41B62A348006CDBB00'] = {
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