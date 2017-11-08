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


(lib.anim_bub_tireFit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arms
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAyg2QABgGAGgDQAGgEAHAAQAHAAABAIQACAHgFAGQgEAEgFACQAFgBAFAAQAIgBADAGQADAGgBAHQgBAFgGABQgDABgDgBQAHACAEAEQAFAFACAGQACAGgEAGQgEAFgIgBQgHgCgFgEQgEgEgHgDQgDgCgEAAQADACACACQAEADAAAIQAAAEgDAEQgBABgBADQAFADADAGQADAFgEAAQgHACgHABQgHAAgFgFQgEgFgBgHQAAgGAAgHQgHACgHgCQgGgBgGgEQgEgDgEgFQgCgCgCgCQgEgGgGgDABMgRQgDAAgDgBQgFgDgGACAhXAjIAAAAQAAgBgBgBQAAgGgBgFQgBgHgBgHQAAgHgBgGQgBgHAAgHQgBgHADgGQADgGAEgFQAFgFAFgEQAFgFAGgEQAFgEAFgCQAHgCAHgBQAEgBAFAAQAGgBAFACQAGACAFADQAIAEAIAGQADADAEABQACABABABQACgIAHgBQACAAABABQgBgIABgGQACgJAFgBQAHgBACAGQABAGABAHQAAAEAAAEIAAAAQABABABAAQACABABACABCgoIAAABQgBAAgBAAQgBAAgBAAQgBgBgBgCABAgnQABAAABgBAA+giQAAgDAAgCAgEACQACADABADQADAFADAHQACAGAAAHQAAAHABAHQABAHgBAHQgBAHgCAHQAAADgCAE");
	this.shape.setTransform(43.8,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhABQQgDgIgFgGQgGgGgJgCIABgCQAEgEAAgHQgBgHgEgGIAAAAIgBgBIgBgMIgCgOIgBgMIgBgOQgBgHADgGIAHgLIAKgKIALgIIAKgHIAOgDIAJgBQAGAAAFACIALAEIAQALIAHAEIADABQACgHAHgCIADABQgBgHABgHQACgIAFgBQAHgCACAHIACANIAAAHIAAABIACABQABgHAGgDQAGgDAHAAQAHgBABAIQACAHgFAGQgEAEgFADIAKgBQAIgBADAGQADAFgBAIQgBAFgGABIgGAAQAHACAEAEQAFAEACAHQACAGgEAFQgEAGgIgCQgHgBgFgEQgEgFgHgDQgDAAgEAAIAFACQAEAEAAAHQAAAFgDADIgCAFQAFADADAFQADAFgEABIgOACQgHABgFgFQgEgFgBgHIAAgNQgHABgHgBQgGgCgGgDQgEgEgEgEIADAFQADAGADAGQACAGAAAHIABAOIAAAPIgDANIgCAIQgMgBgOAAQgSABgRAEIgFABIgBgFgAgIgFIAEAFIgEgFQgEgGgGgCQAGACAEAGgABGgVIAGACIgGgCQgDgBgEAAIAAAAIAAAAIgBAAIgDAAIAAAAIAAAAIADAAIABAAIAAAAIAAAAQAEAAADABIAAAAgAA+gpIAAAEIAAgEIgCgDIACADgABAgqIgCABIACgBIACAAIAAAAIgCAAgAA1g2IgDgCIADACg");
	this.shape_1.setTransform(43.8,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("Ag/AMQABgCABgCQADgEAEgFQAEgGAEgGQAEgGAEgEQAEgFAFgFQAEgFAEgFQAEgGAFgFQAEgFAFgGQADgGAFgEQAEgFAGgDQAGgDAGgDQAGgDAGgCQAHgCAHAAQAGgCAHABQAHAAAGABQAMADALADQADABADABQAFABAFABAAkgGQgEAFgEADQgEADgFAGQgEADgEAFQgEAEgFAFQgEAEgFAEQgFADgGADQgDABgCAAQgBgBgBgBQgEgEgIAAAAkgGQgBgBAAAAQgCgCgBAAABMAIQgEACgFgBQgHgCgFgCQgHgDgGgCQgDgDgDgDAhnA/QgCABgDgBQgGgBgCgGQgDgHAFgFQAEgGAFgEQAFgFAHgBQAHgCADgEQgEgDgHABQgEABgCgCQgGgDAHgGQAFgFAIABQAHAAAFAEQAFAEAGgCQgBACAAADAgXArQACADgBAFQgBADABACQACAIAFAEQAFAEgGAFQgEAEgGAAQgHABgFgEQgFgEgCgGQgCgDgBgEQgBgCgBgDQAAgCgCgBAgwA9QgBAAgBABQgFACgEAFQgEAFAEAFQADAFgBAHQAAAHgIABQgIAAgCgFQgDgDgCgFQgDgEAAgHQAAgHAEgGQADgGAEgEQABgBACgBAhIA0QgDADgDADQgDAFgDAFQgDAGAAAHQgBACgCACQgEAEgFgDQgGgFgBgHQgBgGAEgFQAAAAABAAQACgCABgDQADgGAEgFQADgFAFgC");
	this.shape_2.setTransform(11.8,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AhLBeIgFgIQgDgEAAgHQAAgHAEgGQADgGAEgEIADgCIgDACIgGAGIgGAKQgDAGAAAHQgBAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgEAEgFgDQgGgFgBgHQgBgGAEgFIABAAQACgCABgDQADgGAEgFQADgFAFgCQgFACgDAFQgEAFgDAGQgBADgCACIgBAAIgFAAQgGgBgCgGQgDgHAFgFIAJgKQAFgFAHgBQAHgCADgEQgEgDgHABQgEABgCgCQgGgDAHgGQAFgFAIABQAHAAAFAEQAFAEAGgCIACgEIAHgJIAIgMIAIgKIAJgKIAIgKIAJgLIAJgLQADgGAFgEQAEgFAGgDIAMgGIAMgFIAOgCIANgBIANABIAXAGIAGACIAKACQgMAIgGAKQgHANgHAPQgHAOgDAQQgCAKACAIQgEACgFgBIgMgEQgHgDgGgCIgGgGIgBgBIgDgCIADACIABABIgIAIIgJAJIgIAIIgJAJIgJAIIgLAGIgFABIgCgCIAAAAQgEgEgHAAIgBAAIAAAAIAAAAIABAAQAHAAAEAEIAAAAIACACQACADgBAFIAAAFQACAIAFAEQAFAEgGAFQgEAEgGAAQgHABgFgEQgFgEgCgGIgDgHIgCgFQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIACAFIgCABQgFACgEAFQgEAFAEAFQADAFgBAHQAAAHgIABIAAAAQgIgBgCgEgAhAARIABgFIgBAFgAAkgGIAAAAg");
	this.shape_3.setTransform(11.8,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgYQADABADACQAHAEAnAeQAXATAQALQglAggDATQgQgSgMgIQg8gpgGgHQgHgHgBgDQgGABgHgCQgFgBgEAAQgMAAgHAEQgHAFgJgHQgGgGgCgGQgBgHAHgFQAHgEAJgCQAGgBAGAAQAAgBgBgBQgFgGgHgFQgJgGgJADQgIACgMgDQgMgCgBgJQAAgIAIgCQAGgBAHgCQAHgBAMABQALACAKAFQALAGAGAFQgEgEgGgEQgIgFgJgEQgKgEgLgDQgFgBgCgDQgHgFAFgFQAHgFAMAAQALAAAIAGQAAAAAAABQACADAGACQALAFAJAFQAHAFAGAGAg7hRQgCgCACgDQACgGAKgBQALgBAKAGQAIAGAIAHQAIAGACAIQACAIAJAEQADgDgCgIQgBgEAEgDQAFgFAKAJQAIAHgBAIQgBAIgGAEQgGAEAEAIQgFgCgEgBAgogsQADACACABAg2gVQAEAAAEAAQAEAAACgCAgXAKQACAAACgBQAGgEAAgH");
	this.shape_4.setTransform(12.7,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AApBEQg7gpgHgHQgGgHgCgDIAEgBQAGgEAAgGIAAgBIAAABQAAAGgGAEIgEABQgFABgIgCIgJgBQgMAAgGAEQgHAFgJgHQgHgGgBgGQgBgHAGgFQAIgEAIgCIANgBIgBgCQgFgGgHgFQgJgGgJADQgJACgMgDQgMgCAAgJQAAgIAHgCIANgDQAIgBALABQAMACAKAFQAKAGAHAFIgLgIQgHgFgJgEQgKgEgMgDQgEgBgDgDQgGgFAFgFQAGgFAMAAQALAAAIAGIABABQACADAGACQALAFAIAFQAIAFAFAGQgFgGgIgFQgIgFgLgFQgGgCgCgDIgBgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQADgGAJgBQAMgBAJAGIARANQAIAGACAIQADAIAHAEQADgDgBgIQgBgEADgDQAGgFAKAJQAHAHAAAIQgBAIgGAEQgGAEAEAIIgKgDIAKADIAFADQAIAEAnAeIAnAeQgmAggDATQgQgSgMgIgAg3gVQADAAACgCQgCACgDAAIgIAAIAIAAIAAAAgAgtgpIgEgDIAEADgAB4AzIADADIADACIACACg");
	this.shape_5.setTransform(13.6,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AgBAMQABADAAADQACAHABAHQAAAHgBAGQgCAHAAAHQAAAEAAACQg2gTgqAGQAFgYABgGIAAgBQABgGABgGQABgHABgGQABgGABgHQABgHACgHQABgHAEgFQAFgFAFgEQAGgEAGgCQAGgDAGgDQAGgCAGgBQAHAAAHAAQAFABAEABQAGABAEADQAEADAFAEQAHAHAGAIQADADADACQACACABABQAEgHAHABQACAAABABQAAgHADgHQAEgHAGAAQAGAAABAHQAAAHgCAGQAAAEgBAEIgBAAQABABABABQACgGAHgCQAHgBAHABQAHACgBAIQgBAHgGAEQgFAEgFAAQgBAAgBAAQgBAAgCAAQAAgBAAgCABCgbQABABABACABJgKQAAACAAACABOgKIgBABQAAAAgBgBABOgKQAFABAFABQAHABACAGQABAGgDAGQgCAFgFAAQgEAAgCgCQAFAEAEAFQADAGAAAGQAAAHgFAFQgFAEgHgDQgGgDgEgGQgEgFgFgFQgDgCgDgBQACACABACQADAFgCAHQgBAFgDACQgCABgBADQAEAEABAGQABAGgEgBQgHAAgGgBQgIgBgDgGQgDgGACgHQABgHABgGQgHAAgGgDQgGgDgEgFQgEgFgCgGQgBgDgBgDQgCgGgGgEABSAOQgDgBgCgCQgFgDgGgB");
	this.shape_6.setTransform(49.6,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AAzBEIgNgBQgIgBgDgGQgDgGACgHIACgNQgHAAgGgDQgGgDgEgFQgEgFgCgGIgCgGQgCgGgGgEQAGAEACAGIACAGIABAGQACAHABAHQAAAHgBAGIgCAOIAAAGQg2gTgqAGIAGgeIAAgBIACgMIACgNIACgNIADgOQABgHAEgFIAKgJIAMgGIAMgGIAMgDIAOAAIAJACQAGABAEADIAJAHIANAPIAGAFIADADQAEgHAHABIADABQAAgHADgHQAEgHAGAAQAGAAABAHIgCANIgBAIIgBAAIACACQACgGAHgCQAHgBAHABQAHACgBAIQgBAHgGAEQgFAEgFAAIgCAAIABABIABgBIAKACQAHABACAGQABAGgDAGQgCAFgFAAIgGgCIgFgDQgFgDgGgBQAGABAFADIAFADQAFAEAEAFQADAGAAAGQAAAHgFAFQgFAEgHgDQgGgDgEgGQgEgFgFgFQgDgCgDgBIADAEQADAFgCAHQgBAFgDACIgDAEQAEAEABAGQABAFgEAAIAAAAgABJgGIAAgEIAAgDIAAADIAAAEgABMgKIgDAAIADAAgABEgYIgCgDIACADg");
	this.shape_7.setTransform(49.6,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("Ag8gXQgBADgBADQgBAGAAAZQADAUAGARQAFAPAKANQAKAPALAIQAMAIARAKQAQAKAPAKQAIgOAHgNQAGgMAKgJQAKgKAKgEQgEgPgTgDQgJgBgIgDQgPgGgLgLQgEgEgDgEQgHgLgCgPQgBgGgCgFQgEgJgCgLQgCgIAAgIQADgEADgHQACgEADgEQACgDACgCQAFgEAGgBQAIgCgBgJQAAgHgEgEQgFgFgIACQgIACgHAFQgDADgEAEQgBgBAAgBQgCgFAAgHQABgJAIgEQAGgEAFgJQAGgJgGgEQgGgEgFADQgGADgFAEQgGAEgGAIQgGAIgCAIQgCAKAAAGQgBgEABgGQABgHACgIQADgIAFgJQACgDAAgDQgBgGgGAAQgJACgHAHQgGAHgBAIQgBgCgDAAQgGgCgHAFQgIAHgBAJQAAAIAAAIQAAAJAEAFQABABABABQADAGgCAIQgFAAgEgGQgDgDgFABQgHABABANQAAAKAHAFQAHAEAHgCQAHgCAEAIQABgFACgFAgyhzQAAABABAAQAAADgBAEQgEAJgBAIQgBAHACAHAghhVQAAADAAACAAAgqQgCABgCABQgHADgGgGAgVA+QASAIgIAOQgNABgCgI");
	this.shape_8.setTransform(15.9,15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AALB4IgdgSQgLgIgKgPQgKgNgFgPQgGgRgDgUIABgfIACgGIADgKIgDAKQgEgIgHACQgHACgHgEQgHgFAAgKQgBgNAHgBQAFgBADADQAEAGAFAAQACgIgDgGIgCgCQgEgFAAgJIAAgQQABgJAIgHQAHgFAGACQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABgIAGgHQAHgHAJgCQAGAAABAGQAAADgCADQgFAJgDAIQgCAIgBAHIAAAKQAAgGACgKQACgIAGgIQAGgIAGgEIALgHQAFgDAGAEQAGAEgGAJQgFAJgGAEQgIAEgBAJQAAAHACAFIABACIAHgHQAHgFAIgCQAIgCAFAFQAEAEAAAHQABAJgIACQgGABgFAEIgEAFIgFAIQgDAHgDAEIACAQQACALAEAJIADALQACAPAHALIAHAIQALALAPAGQAIADAJABQATADAEAPQgKAEgKAKQgKAJgGAMIgPAbIgfgUgAgPBUIAEAAQACgEABgEQAAgIgNgGQANAGAAAIQgBAEgCAEIgEAAIAAAAIAAAAQgJAAgCgFIAAgCIAAACQACAFAJAAIAAAAIAAAAgAgIgnIABAAIACAAIAAgBIAAAAIABAAIAEgCIgEACIgBAAIAAAAIAAABIgCAAIgBAAIAAAAIgBAAQgEAAgEgDIAAAAIAAgBIAAABIAAAAQAEADAEAAIABAAIAAAAgAg2hMIgBgJIAAgFQABgIAEgJIABgFIAAgCIgBgBIABABIAAACIgBAFQgEAJgBAIIAAAFIABAJgAghhQIAAgDIAAgCIAAACIAAADg");
	this.shape_9.setTransform(15.9,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("AAegaQAHgEgBgHQAAgBgBgCQAHAAAHgDQAHgDAAgHQAAgGgHAAQgHAAgGABQgEABgEABIAAAAQgBgBgBgBQAGgCACgHQACgHgCgHQgCgGgIAAQgHABgEAGQgEAFAAAGQAAABAAAAQAAABAAACQABAAACAAAAag6QgBgBgCgBAAJhFIgBAAQAAAAABABAgPhKQABADACADQAEAEAAAHAAJhFQgBgFgBgGQgBgHgGgCQgGgBgGADQgFACAAAGQAAADACACQgEgFgFgDQgFgDgHgBQgHAAgFAFQgEAFADAIQADAGAGADQAFAEAFAFQACADABAEQAEAAAEAAQAEgBAEAAAAJhBQgCAAgCABAAEgrQAMABADAHQACAFABAFAAegaQgDgBgDAEQgEAHgHABQgTACgUgLAgbgrQgFAAgDgDQgGgHgIgCQgKgCgGAHQAAAHAAAIQAEAAAFADIAAAAQAJAEAIAJQACgBACAAQAQASATADQAGABgEAQIAAABIAAABQgBADgDALIgMApQAgABAKACQAJACAbAKQACgLgBgFQgBgEABgJQAAgKABgEQAAgDAAgHQAAgGAAgHQgBgEgBgFQgBgGgDgEQgDgFgEgEQgHgHgIgGQgDgDgCgDQgCgBgBgC");
	this.shape_10.setTransform(42.3,8.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("AAcBOQgKgCgggBIAMgpIAEgOIAAgBIAAgBQAEgQgGgBQgTgDgQgSIgEABQgIgJgJgEIAAAAQgFgDgEAAIAAgPQAGgHAKACQAIACAGAHQADADAFAAIAIAAIAIgBIgIABIgIAAQgBgEgCgDQgFgFgFgEQgGgDgDgGQgDgIAEgFQAFgFAHAAQAHABAFADQAFADAEAFIADAGQAEAEAAAHQAAgHgEgEIgDgGIgCgFQAAgGAFgCQAGgDAGABQAGACABAHIACALIgBAAIABABIAAgBQAAgGAEgFQAEgGAHgBQAIAAACAGQACAHgCAHQgCAHgGACIACACIAAAAIAIgCIANgBQAHAAAAAGQAAAHgHADQgHADgHAAIABADQABAHgHAEIAAAAIgBAAIAAAAIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAABIgBABQgEAHgHABIgBABIgEAAIAAAAIgBAAQgPgBgRgIIgBgBIABABQARAIAPABIABAAIAAAAIAEAAIABgBQAHgBAEgHIABgBQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAIABAAIAAAAIABAAIAAAAIADADIAFAGIAPANIAHAJQADAEABAGIACAJIAAANIAAAKIgBAOIAAANQABAFgCALQgbgKgJgCgAATgjIADAKIgDgKQgDgHgMgBQAMABADAHgAAag6IgDgCIADACgAAFhAIAEgBIADAAIgDAAIAAgDIAAADIgEABg");
	this.shape_11.setTransform(42.3,8.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AgBAMQABADAAADQACAHABAHQAAAHgBAGQgCAHAAAHQAAAEAAACQg2gTgqAGQAFgYABgGIAAgBQABgGABgGQABgHABgGQABgGABgHQABgHACgHQABgHAEgFQAFgFAFgEQAGgEAGgCQAGgDAGgDQAGgCAGgBQAHAAAHAAQAFABAEABQAGABAEADQAEADAFAEQAHAHAGAIQADADADACQACACABABQAEgHAHABQACAAABABQAAgHADgHQAEgHAGAAQAGAAABAHQAAAHgCAGQAAAEgBAEIgBAAQABABABABQACgGAHgCQAHgBAHABQAHACgBAIQgBAHgGAEQgFAEgFAAQgBAAgBAAQABABAAAAIABgBQAFABAFABQAHABACAGQABAGgDAGQgCAFgFAAQgEAAgCgCQAFAEAEAFQADAGAAAGQAAAHgFAFQgFAEgHgDQgGgDgEgGQgEgFgFgFQgDgCgDgBQACACABACQADAFgCAHQgBAFgDACQgCABgBADQAEAEABAGQABAGgEgBQgHAAgGgBQgIgBgDgGQgDgGACgHQABgHABgGQgHAAgGgDQgGgDgEgFQgEgFgCgGQgBgDgBgDQgCgGgGgEABCgbQABABABACABMgKQgBAAgCAAQAAgBAAgCABJgGQAAgCAAgCABSAOQgDgBgCgCQgFgDgGgB");
	this.shape_12.setTransform(49.6,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("AAzBEIgNgBQgIgBgDgGQgDgGACgHIACgNQgHAAgGgDQgGgDgEgFQgEgFgCgGIgCgGQgCgGgGgEQAGAEACAGIACAGIABAGQACAHABAHQAAAHgBAGIgCAOIAAAGQg2gTgqAGIAGgeIAAgBIACgMIACgNIACgNIADgOQABgHAEgFIAKgJIAMgGIAMgGIAMgDIAOAAIAJACQAGABAEADIAJAHIANAPIAGAFIADADQAEgHAHABIADABQAAgHADgHQAEgHAGAAQAGAAABAHIgCANIgBAIIgBAAIACACQACgGAHgCQAHgBAHABQAHACgBAIQgBAHgGAEQgFAEgFAAIgCAAIABABIABgBIAKACQAHABACAGQABAGgDAGQgCAFgFAAIgGgCIgFgDQgFgDgGgBQAGABAFADIAFADQAFAEAEAFQADAGAAAGQAAAHgFAFQgFAEgHgDQgGgDgEgGQgEgFgFgFQgDgCgDgBIADAEQADAFgCAHQgBAFgDACIgDAEQAEAEABAGQABAFgEAAIAAAAgABJgGIAAgEIAAAEgABJgKIADAAIgDAAIAAgDIAAADgABEgYIgCgDIACADg");
	this.shape_13.setTransform(49.6,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).wait(3));

	// legs
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.1,1,1).p("Ai2g3QAEgNAIgLQAKgPAMgMQALgMAMgLQAKgKARgGQAQgGARgEQASgDARgCQARgBAQADQAPAEAOAEQAQAFAOAIQANAIAHALQAAABABAAQgBAGAAAEQgCgDgCgEQAAAAgBgBQgLgJgOgCQgSgEgPAFQgQAGgKAMQgLANgEARQgEARAFAQQACAHAEAGQAFAGAIAFQAAABAAAAQACAGACAFQAGAIAHAHQAIAHAIACQADAAADAAQADAAACAAQAPAAAPgBQARgBASABQARAAAPgGQgFATAHAOQAFAKAHAHQABgCACgBABShrQAHALABAMQABAFAAAGQAMgKASAAIAAAAQASAAAOAGQAGAEAEADQAFgRATADQALACACANQADARAAASQgBAHgCAHQgCgBgDgBAi0g2QAPgFARACQAQACAQAGQARAGANAMQANAMAGAOQAAAAAAABIAAAAQAFgBAEgDQAEgDADgDQADgEADgMAhDgEQgDAFgIAEQAFABAFACQARAFAMANQAMANAFAPQAAABABACQAIgLAOAFQAAAAABAAQAKADgCAOQgCAJAIAGQAMAKABAOQAAAFgDAEQgBgBgCAAAhOAFQgBAAAAAAQgMgBgLACAhEBpQgSAAgQgBQgSgBgQgDQgQgEgQgHQgOgHgJgPQgHgNgFgQQgFgRAEgSQAEgPAFgPQAFgMAHgNAhGBmQABACABABAgRCaQgDAHgCAAQgSABAFgOQgQgCgFgPQgEgMgIgOQAAAAAAAAACPg9QAKAFAAAKAC9AjQgIgBAAgIADGARQAMAUgUgCQgBAAAAAAQADASgJAHQgDAAgCgBQAAAAgBgBQgIgEAAgGADJgDQgEgCgEgCADGARQAAABgBAAQgEgDgEgCADJgDQALAPgOAFADIgUQAJAHgDANQgCgBgDgCACyA7QAHASgPAIQgMAGgHgKQgIgNAKgJAgCgUQgHgFgKgEQgMgFgOAEQgDABgDABAgoA7QALAGABALAgTCVQABADABACAAaB0QAKADACAJQADAJgGAEQgVAMABgXQgBAKgEAHQgIAMgCgLQgHARgKgL");
	this.shape_14.setTransform(46.5,57.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AgjCEQgQgCgFgQQgEgMgIgNIAAAAIgCgDIACADQgSAAgQgBQgSgBgQgEQgQgDgQgIQgOgHgJgPQgHgMgFgQQgFgRAEgRQAEgRAFgOQAFgMAHgNIADgDQAPgEARACQAQACAQAFQARAGANAMQANANAGANIAAABQgDAHgIAEIAKACQARAGAMALQAMAOAFAPIABADQAIgLAOAEIABAAQAKADgCAPQgCAJAIAGQAMAKABAOQAAAFgDADIgDAAIADAAQAKAEACAJQADAJgGAEQgVALABgWQgBAKgEAGQgIANgCgLQgHARgKgLIgCgFIACAFQgDAHgCAAIgDAAQgPAAAFgNgAgcA8QgBgLgLgHQALAHABALgAhmgJIADgBIAKgBIABAAIAAAAIAEAAIABABIACAAIACAAIABAAIgBAAIgCAAIgCAAIgBgBIgEAAIAAAAIgBAAIgKABIgDABgAgRCKIAAAAgACXBBQgIgNAKgKIADgCIgDACQgHgGgFgKQgHgOAFgSQgPAGgRgBIgjABIgeAAIgFAAIgGAAQgIgBgIgIQgHgGgGgJIgEgLIAAgBQgIgGgFgGQgEgGgCgGQgFgRAEgQQAEgRALgNQAKgNAQgFQAPgFASADQAOADALAJIABABIAEAHQAHALABAMIABAKQAMgKASAAIAAAAQASAAAOAHQAGADAEAEQAFgRATADQALABACAOQADARAAASQgBAHgCAHIgFgDIAFADQAJAHgDANIgFgDIgIgEIAIAEQALAQgOAEQAMATgUgBIgBAAQgIgBAAgIIAAAAIAAAAQAAAIAIABQADASgJAHIgFgCIgBAAQgIgEAAgHQAAAHAIAEIABAAQAHATgPAHQgEADgEAAQgHAAgEgGgADFABIABAAIgBAAIgIgDIAIADgACZg+QAAgLgKgEQAKAEAAALg");
	this.shape_15.setTransform(46.5,58.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgRBOIAAgBQgGgOgNgMQgMgMgSgGQgPgFgQgCQgSgDgPAFIgCgBQAEgNAIgLQALgOALgMIAXgXQAKgJARgHQAQgGARgDQARgEARgCQARgBARAEQAPADAPAFQAPAFAOAIQANAHAHALIABACIgBAJIgEgHIAAgBQgMgIgOgDQgSgEgPAFQgQAGgLAMQgLANgEAQQgEARAFARQACAGAEAGQAFAGAIAGQgHgFgKgEQgMgFgOADIgFACIAFgCQgDAMgCAEIgGAGQgFADgFABgAAEA0IAAAAg");
	this.shape_16.setTransform(41.5,48.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.1,1,1).p("ACphVQgHgMgKgKQgNgLgOgKQgOgJgNgJQgNgHgSgDQgQgCgRAAQgSAAgQACQgSACgPAHQgPAGgMAIQgPAIgMALQgLAKgEAMQgBABAAABQACAGABADQABgDABgEQABgBAAgBQAJgKANgGQARgHAQABQARACANAKQAMALAIAPQAIAQgCARQgBAHgDAHQgDAHgGAHQgBAAAAAAQAAAHgCAFQgDAKgGAHQgGAJgIAEQgDAAgCABQgDAAgDABQgOADgPACQgRADgRAEQgRAEgPgCQAJARgEAPQgDALgGAIQgBgBgCgBACnhUQgPgCgRAGQgPAFgPAJQgPAJgKAPQgKAOgDAPQAAABAAAAIAAAAQgGAAgEgCQgEgBgEgDQgEgDgFgLQADAAAEAAAhkhRQgEAMABAMQAAAGABAFQgNgIgSAEIAAAAQgSAEgMAKQgGAEgDAFQgIgQgSAGQgKAEAAAOQABARAEAQQACAIAEAGQgIAIAGAMQACgBACgCQAEgDADgDAjFAcQACgCACgCAiWgXQgJAHACAJAifBlQAAAAAAAAQAIgGgBgHAivBQQAIgDgCgHAi7BBQAAAAAAAAQAEgEAEgCAifBlQgCABgCACQgLgGgBgSQAAAAgBAAQgTAGAIgVAiHBgQAMAHgFAOQgFAMgNgEQgQgFADgTAjDAtQgHASAPACABbBfQARgEAQgEQARgFAQgHQAOgGAOgLQANgKAFgQQAEgOACgRQABgRgHgQQgHgQgJgNQgHgKgKgLAABgNQAFgHAJgGQAKgHAPABABQgEQgFACgEACQgQAJgJAOQgJAQgBAPQgBACAAACQgKgJgOAHQAAAAAAAAQgKAGAFANQADAJgGAHQgJAMADAOQABAFACADQgIAFAAAKQgBAJAHACQAVAIgFgWQADAKAGAFQAKAKAAgLQALAPAHgNQAFAGACAAQASgCgIgOQAOgEACgRQACgMAFgPQAAAAAAAAQAAgCABgBABQgEQABAAAAAAQALgEAMAAABDgMQAEAGAJACAA2A3QgJAJAAALAAAB9QABgBACAAAAzCZQABgCABgD");
	this.shape_17.setTransform(41.3,56.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC99").s().p("AAhCAQAAALgKgKQgGgGgDgJQAFAVgVgHQgHgCABgKQAAgJAIgFIADgBIgDABQgCgDgBgFQgDgOAJgMQAGgIgDgIQgFgOAJgFIABAAQAOgHAKAIIABgDQABgQAJgPQAJgOAQgIIAJgFQgJgCgEgGIAAgBQADgPAKgOQAKgPAPgJQAPgJAPgFQARgGAPABIADADQAKAKAHALQAJANAHAQQAHAQgBASQgCAQgEANQgFARgNAKQgOALgOAGQgQAHgRAFQgQAEgRADIABgCIgBACIAAABQgFAOgCANQgCAQgOAFQAIANgSADQgCAAgFgGIACgFIgCAFQgDAGgFAAQgEAAgGgIgAAtA0IAAgBQAAgLAJgIQgJAIAAALIAAABgABRgbIgBAAIABAAQALgEAMAAQgMAAgLAEgAiSBmQgQgFACgTIABAAQAHgGAAgFIAAgCIAAACQAAAFgHAGIgBAAIgDACQgLgFgBgSQAGgCAAgFIAAgDIAAADQAAAFgGACIgBAAQgTAGAIgVIAAAAIAIgHIgIAHIAAAAQgPgCAHgSIgEADQgGgMAIgIQgEgFgCgIQgEgRgBgRQAAgOAKgEQASgHAIARQADgFAGgEQAMgKASgEIAAAAQASgEANAIIgBgLQgBgMAEgMIACgHIABgCQAJgLANgFQARgHAQABQARACANAKQAMAKAIAQQAIAQgCARQgBAHgDAHQgDAGgGAHIgBABIgCAMQgDAKgGAIQgGAIgIAEIgFABIgGABIgdAFIgiAHQgRAEgPgCQAJARgEAPQgDALgGAIIgDgDIADADQAMAHgFAOQgEAJgIAAIgGgBgAjDAWIAHgGIgHAGgAjFAFIAEgEIgEAEgAidgeIgBgDQAAgIAHgFQgHAFAAAIIABADg");
	this.shape_18.setTransform(41.3,58.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AAYBHIgHgEQgEgDgFgLIAGAAIgGAAQgOgBgKAHQgJAGgGAHQAGgIAEgGQADgHABgHQABgRgIgQQgHgOgOgLQgNgKgQgCQgQgBgRAHQgOAGgJAKIAAACIgDAGIgCgIIAAgCQAFgNALgJQAMgLAOgIQANgIAOgGQAQgHARgCQARgCARAAQARAAARACQASADAMAHIAbASQAOAJANAMQALAKAGALIgBABQgQgBgRAFQgPAFgOAJQgQAJgKAPQgJAOgDAPIgBABIAAAAQgFAAgFgCg");
	this.shape_19.setTransform(44.6,48);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.1,1,1).p("ABShrQgCgDgCgEQAAAAgBgBQgLgJgOgCQgSgEgPAFQgQAGgKAMQgLANgEARQgEARAFAQQACAHAEAGQAFAGAIAFQAAABAAAAQACAGACAFQAGAIAHAHQAIAHAIACQADAAADAAQADAAACAAQAPAAAPgBQARgBASABQARAAAPgGQgFATAHAOQAFAKAHAHQABgCACgBAi2g3QAEgNAIgLQAKgPAMgMQALgMAMgLQAKgKARgGQAQgGARgEQASgDARgCQARgBAQADQAPAEAOAEQAQAFAOAIQANAIAHALQAAABABAAQgBAGAAAEQAHALABAMQABAFAAAGQAMgKASAAIAAAAQASAAAOAGQAGAEAEADQAFgRATADQALACACANQADARAAASQgBAHgCAHQgCgBgDgBAi0g2QAPgFARACQAQACAQAGQARAGANAMQANAMAGAOQAAAAAAABIAAAAQAFgBAEgDQAEgDADgDQADgEADgMAhDgEQgDAFgIAEQAFABAFACQARAFAMANQAMANAFAPQAAABABACQAIgLAOAFQAAAAABAAQAKADgCAOQgCAJAIAGQAMAKABAOQAAAFgDAEQgBgBgCAAAhOAFQgBAAAAAAQgMgBgLACAhEBpQgSAAgQgBQgSgBgQgDQgQgEgQgHQgOgHgJgPQgHgNgFgQQgFgRAEgSQAEgPAFgPQAFgMAHgNAgRCaQgDAHgCAAQgSABAFgOQgQgCgFgPQgEgMgIgOQAAAAAAAAQgBgBgBgCACPg9QAKAFAAAKAC9AjQgIgBAAgIADGARQAMAUgUgCQgBAAAAAAQADASgJAHQgDAAgCgBADJgDQALAPgOAFQAAABgBAAQgEgDgEgCADIgUQAJAHgDANQgCgBgDgCQgEgCgEgCACZA7QgKAJAIANQAHAKAMgGQAPgIgHgSQAAAAgBgBQgIgEAAgGAgCgUQgHgFgKgEQgMgFgOAEQgDABgDABAgoA7QALAGABALAgRCaQgBgCgBgDAAaB0QAKADACAJQADAJgGAEQgVAMABgXQgBAKgEAHQgIAMgCgLQgHARgKgL");
	this.shape_20.setTransform(46.5,57.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC99").s().p("AgjCEQgQgCgFgQQgEgMgIgNIAAAAIgCgDIACADQgSAAgQgBQgSgBgQgEQgQgDgQgIQgOgHgJgPQgHgMgFgQQgFgRAEgRQAEgRAFgOQAFgMAHgNIADgDQAPgEARACQAQACAQAFQARAGANAMQANANAGANIAAABQgDAHgIAEIAKACQARAGAMALQAMAOAFAPIABADQAIgLAOAEIABAAQAKADgCAPQgCAJAIAGQAMAKABAOQAAAFgDADQAKAEACAJQADAJgGAEQgVALABgWQgBAKgEAGQgIANgCgLQgHARgKgLIgCgFIACAFQgDAHgCAAIgDAAQgPAAAFgNgAAaBjIgDAAIADAAgAgcA8QgBgLgLgHQALAHABALgAhmgJIADgBIAKgBIABAAIAAAAIAEAAIABABIACAAIACAAIABAAIgBAAIgCAAIgCAAIgBgBIgEAAIAAAAIgBAAIgKABIgDABgAgRCKIAAAAgACXBBQgIgNAKgKIADgCIgDACQgHgGgFgKQgHgOAFgSQgPAGgRgBIgjABIgeAAIgFAAIgGAAQgIgBgIgIQgHgGgGgJIgEgLIAAgBQgIgGgFgGQgEgGgCgGQgFgRAEgQQAEgRALgNQAKgNAQgFQAPgFASADQAOADALAJIABABIAEAHQAHALABAMIABAKQAMgKASAAIAAAAQASAAAOAHQAGADAEAEQAFgRATADQALABACAOQADARAAASQgBAHgCAHQAJAHgDANIgFgDIgIgEIAIAEQALAQgOAEIgBAAIgIgDIAIADIABAAQAMATgUgBIgBAAQgIgBAAgIIAAAAIAAAAQAAAIAIABQADASgJAHIgFgCQAHATgPAHQgEADgEAAQgHAAgEgGgACxAqIABAAIgBAAQgIgEAAgHQAAAHAIAEgADIgkIgFgDIAFADgACZg+QAAgLgKgEQAKAEAAALg");
	this.shape_21.setTransform(46.5,58.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("Ai2g3QAEgNAIgLQAKgPAMgMQALgMAMgLQAKgKARgGQAQgGARgEQASgDARgCQARgBAQADQAPAEAOAEQAQAFAOAIQANAIAHALQAAABABAAQgBAGAAAEQgCgDgCgEQAAAAgBgBQgLgJgOgCQgSgEgPAFQgQAGgKAMQgLANgEARQgEARAFAQQACAHAEAGQAFAGAIAFQAAABAAAAQACAGACAFQAGAIAHAHQAIAHAIACQADAAADAAQADAAACAAQAPAAAPgBQARgBASABQARAAAPgGQgFATAHAOQAFAKAHAHQABgCACgBABShrQAHALABAMQABAFAAAGQAMgKASAAIAAAAQASAAAOAGQAGAEAEADQAFgRATADQALACACANQADARAAASQgBAHgCAHQgCgBgDgBAi0g2QAPgFARACQAQACAQAGQARAGANAMQANAMAGAOQAAAAAAABIAAAAQAFgBAEgDQAEgDADgDQADgEADgMAhDgEQgDAFgIAEQAFABAFACQARAFAMANQAMANAFAPQAAABABACQAIgLAOAFQAAAAABAAQAKADgCAOQgCAJAIAGQAMAKABAOQAAAFgDAEQgBgBgCAAAhOAFQgBAAAAAAQgMgBgLACAhEBpQgSAAgQgBQgSgBgQgDQgQgEgQgHQgOgHgJgPQgHgNgFgQQgFgRAEgSQAEgPAFgPQAFgMAHgNAgRCaQgDAHgCAAQgSABAFgOQgQgCgFgPQgEgMgIgOQAAAAAAAAQgBgBgBgCACPg9QAKAFAAAKAC9AjQgIgBAAgIADGARQAMAUgUgCQgBAAAAAAQADASgJAHQgDAAgCgBQAAAAgBgBQgIgEAAgGADJgDQALAPgOAFQAAABgBAAQgEgDgEgCADJgDQgEgCgEgCADIgUQAJAHgDANQgCgBgDgCACyA7QAHASgPAIQgMAGgHgKQgIgNAKgJAgCgUQgHgFgKgEQgMgFgOAEQgDABgDABAgoA7QALAGABALAgRCaQgBgCgBgDAAaB0QAKADACAJQADAJgGAEQgVAMABgXQgBAKgEAHQgIAMgCgLQgHARgKgL");
	this.shape_22.setTransform(46.5,57.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC99").s().p("AgjCEQgQgCgFgQQgEgMgIgNIAAAAIgCgDIACADQgSAAgQgBQgSgBgQgEQgQgDgQgIQgOgHgJgPQgHgMgFgQQgFgRAEgRQAEgRAFgOQAFgMAHgNIADgDQAPgEARACQAQACAQAFQARAGANAMQANANAGANIAAABQgDAHgIAEIAKACQARAGAMALQAMAOAFAPIABADQAIgLAOAEIABAAQAKADgCAPQgCAJAIAGQAMAKABAOQAAAFgDADQAKAEACAJQADAJgGAEQgVALABgWQgBAKgEAGQgIANgCgLQgHARgKgLIgCgFIACAFQgDAHgCAAIgDAAQgPAAAFgNgAAaBjIgDAAIADAAgAgcA8QgBgLgLgHQALAHABALgAhmgJIADgBIAKgBIABAAIAAAAIAEAAIABABIACAAIACAAIABAAIgBAAIgCAAIgCAAIgBgBIgEAAIAAAAIgBAAIgKABIgDABgAgRCKIAAAAgACXBBQgIgNAKgKIADgCIgDACQgHgGgFgKQgHgOAFgSQgPAGgRgBIgjABIgeAAIgFAAIgGAAQgIgBgIgIQgHgGgGgJIgEgLIAAgBQgIgGgFgGQgEgGgCgGQgFgRAEgQQAEgRALgNQAKgNAQgFQAPgFASADQAOADALAJIABABIAEAHQAHALABAMIABAKQAMgKASAAIAAAAQASAAAOAHQAGADAEAEQAFgRATADQALABACAOQADARAAASQgBAHgCAHQAJAHgDANIgFgDIgIgEIAIAEQALAQgOAEIgBAAIgIgDIAIADIABAAQAMATgUgBIgBAAQgIgBAAgIIAAAAIAAAAQAAAIAIABQADASgJAHIgFgCIgBAAQgIgEAAgHQAAAHAIAEIABAAQAHATgPAHQgEADgEAAQgHAAgEgGgADIgkIgFgDIAFADgACZg+QAAgLgKgEQAKAEAAALg");
	this.shape_23.setTransform(46.5,58.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},3).to({state:[{t:this.shape_16},{t:this.shape_21},{t:this.shape_20}]},3).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},3).to({state:[{t:this.shape_16},{t:this.shape_23},{t:this.shape_22}]},3).wait(3));

	// tire
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.1,1,1).p("Ai0AbQgLgOgJgJQgFgEgBgGQgDgIADgLQACgQAHgOQAHgQAIgMQAGgKALgIQABgBABgBQABAAABgBQALgHAKgJQACgCADgCQALgMAPgHQAKgFAKgFQAFgDAEgCQALgGAPgCQANgCAOgDQADAAACgBQARgDARgBQAOgBANABQADAAADABQANABAMAEQAQAGAPAIQAPAJAKAOQAJANAEAQQADAJgDAFQgMgHgMgEQgQgDgQgEQgQgEgRACQgRABgQAEQgQAEgQACQgRABgQAFQgRAEgQAIQgQAHgOAIQgOAJgKANQgLAOgJAOQgJAOgJANQgFAIgCAIgACLhaQADACADADQANAKAIAOQAGANABASQABAJgCAGQADACADADQAMAKAIAPQAHAPADARQACASgEARQgEAQgHAQQgFALgsgCACsgPQgKgHgMgFQgRgGgRAAQgTAAgRgCQgSgCgRACQgRADgRAEQgQAEgPAHQgQAGgQAFQgSAFgOAKQgOAKgOAKQgPAKgJAOQgKANgIAOQgEAGgDAHQgIgPgHgOQgFgIgBgLQgBgKADgIAh3CxQAAAAgBABIAAgBQgHgCgGgEQgOgJgJgPQgJgQABgSQAAgKADgJQAAgBAAAAAh3CxQAAgBABAAQAAgBABAAAh3CuQAAACAAAB");
	this.shape_24.setTransform(40.2,34.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgBABIABgCIAAACIAAABIAAgBIAAgBIACAAIgCACgAAAABIAAAAgAAAgBIACABIgCAAIAAABIAAgCgAACAAg");
	this.shape_25.setTransform(28.3,51.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AiFCrQgOgIgJgQQgJgPABgTQAAgKADgJIAAgBQADgHAEgGIASgbQAJgOAPgKIAcgUQAOgKASgFQAQgFAQgGQAPgHAQgEQARgEARgDIASgBIABAAIAAAAIAQABIAkACQARAAARAGQAMAFAKAHQgKgHgMgFQgRgGgRAAIgkgCIgQgBIAAAAIgBAAIgSABQgRADgRAEQgQAEgPAHQgQAGgQAFQgSAFgOAKIgcAUQgPAKgJAOIgSAbQgEAGgDAHIgPgdQgFgIgBgLQgBgJADgJQACgIAFgIIASgbQAJgOALgOQAKgNAOgJQAOgIAQgHQAQgHARgFQAQgEARgCQAQgCAQgEQAQgEARgBIACAAIAJgBIAAAAIABAAQAJAAAJACIABAAIAAAAIACABIAgAHQAMAEAMAHQgMgHgMgEIgggHIgCgBIAAAAIgBAAQgJgCgJAAIgBAAIAAAAIgJABIgCAAQgRABgQAEQgQAEgQACQgRACgQAEQgRAFgQAHQgQAHgOAIQgOAJgKANQgLAOgJAOIgSAbQgFAIgCAIQgLgOgJgJQgFgEgBgGQgDgIADgLQACgQAHgOQAHgQAIgMQAGgKALgIIACgCIACgBQALgHAKgJIAFgEQALgMAPgHIAUgKIAJgFQALgGAPgCIAbgFIAFgBQARgDARgBQAOgBANABIAGABQANABAMAEQAQAGAPAIQAPAJAKAOQAJAOAEAPQADAJgDAFIAGAFQANAKAIAOQAGAOABARQABAJgCAGIAGAFQAMAKAIAPQAHAPADARQACASgEARQgEAQgHAQQgFALgsgCQgEgLgPgOQgQgNgPgFQgPgFgPgDQgRgEgRACQgRABgRAEQgRADgPAGQgSAHgKAKIgXAWQgLANgLAOQgIALgEANIgBADQgHgCgGgEg");
	this.shape_26.setTransform(40.2,34.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.1,1,1).p("Ai0AaQgLgOgJgJQgFgEgBgGQgDgIADgLQACgQAHgOQAHgQAIgMQAGgKALgIQABgBABgBQABAAABgBQALgHAKgJQACgCADgCQALgMAPgHQAKgFAKgFQAFgDAEgCQALgGAPgCQANgCAOgDQADAAACgBQARgDARgBQAOgBANABQADAAADABQANABAMAEQAQAGAPAIQAPAJAKAOQAJANAEAQQADAJgDAFQgMgHgMgEQgQgDgQgEQgQgEgRACQgRABgQAEQgQAEgQACQgRABgQAFQgRAEgQAIQgQAHgOAIQgOAJgKANQgLAOgJAOQgJAOgJANQgFAIgCAIgACLhbQADACADADQANAKAIAOQAGAOABARQABAJgCAGQgKgHgMgFQgRgGgRAAQgTAAgRgCQgSgCgRACQgRADgRAEQgQAEgPAHQgQAGgQAFQgSAFgOAKQgOAKgOAKQgPAKgJAOQgKANgIAOQgEAGgDAHQgIgPgHgOQgFgIgBgLQgBgKADgIACsgQQADACADADQAMALAIAOQAHAPADARQACASgEARQgEAPgGAQIAAAAIAAAAQgdA2g1AHQg2AHhZgCQhbgBAAAAAihBcQAAAAAAABQgDAJAAAKQgBASAJAQQAJAPAOAJQAGAEAHACIAAABQABgBAAAA");
	this.shape_27.setTransform(40.2,34.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AieAgIACgDIgBADIAAABgACeggIAAAAIAAABg");
	this.shape_28.setTransform(44,48.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgdCyIhbgBIABgBIAAgDIgBADQgHgCgGgEQgOgJgJgPQgJgQABgSQAAgKADgJIAAgBIgPgdQgFgIgBgLQgBgKADgIQACgIAFgIIASgbQAJgOALgOQAKgNAOgJQAOgIAQgHQAQgIARgEQAQgFARgBQAQgCAQgEQAQgEARgBIACgBIAJAAIAAAAIABAAQAJAAAJACIABAAIAAAAIACABIAgAHQAMAEAMAHQgMgHgMgEIgggHIgCgBIAAAAIgBAAQgJgCgJAAIgBAAIAAAAIgJAAIgCABQgRABgQAEQgQAEgQACQgRABgQAFQgRAEgQAIQgQAHgOAIQgOAJgKANQgLAOgJAOIgSAbQgFAIgCAIQgLgOgJgJQgFgEgBgGQgDgIADgLQACgQAHgOQAHgQAIgMQAGgKALgIIACgCIACgBQALgHAKgJIAFgEQALgMAPgHIAUgKIAJgFQALgGAPgCIAbgFIAFgBQARgDARgBQAOgBANABIAGABQANABAMAEQAQAGAPAIQAPAJAKAOQAJANAEAQQADAJgDAFIAGAFQANAKAIAOQAGAOABARQABAJgCAGQgKgHgMgFQgRgGgRAAIgkgCIgQgBIAAAAIgBAAIgSABQgRADgRAEQgQAEgPAHQgQAGgQAFQgSAFgOAKIgcAUQgPAKgJAOIgSAbQgEAGgDAHQADgHAEgGIASgbQAJgOAPgKIAcgUQAOgKASgFQAQgFAQgGQAPgHAQgEQARgEARgDIASgBIABAAIAAAAIAQABIAkACQARAAARAGQAMAFAKAHIAGAFQAMALAIAOQAHAPADARQACASgEARQgEAPgGAQIAAAAIAAAAQgdA2g1AHQguAGhIAAIgZgBg");
	this.shape_29.setTransform(40.2,34.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.1,1,1).p("Ai0AaQgLgOgJgJQgFgEgBgGQgDgIADgLQACgQAHgOQAHgQAIgMQAGgKALgIQABgBABgBQABAAABgBQALgHAKgJQACgCADgCQALgMAPgHQAKgFAKgFQAFgDAEgCQALgGAPgCQANgCAOgDQADAAACgBQARgDARgBQAOgBANABQADAAADABQANABAMAEQAQAGAPAIQAPAJAKAOQAJANAEAQQADAJgDAFQgMgHgMgEQgQgDgQgEQgQgEgRACQgRABgQAEQgQAEgQACQgRABgQAFQgRAEgQAIQgQAHgOAIQgOAJgKANQgLAOgJAOQgJAOgJANQgFAIgCAIgACLhbQADACADADQANAKAIAOQAGAOABARQABAJgCAGQADACADADQAMALAIAOQAHAPADARQACASgEARQgEAPgGAQIAAAAIAAAAQgdA2g1AHQg2AHhZgCQhbgBAAAAIAAgBQgHgCgGgEQgOgJgJgPQgJgQABgSQAAgKADgJQAAgBAAAAQADgHAEgGQAIgOAKgNQAJgOAPgKQAOgKAOgKQAOgKASgFQAQgFAQgGQAPgHAQgEQARgEARgDQARgCASACQARACATAAQARAAARAGQAMAFAKAHAihBcQgIgPgHgOQgFgIgBgLQgBgKADgIAh3CwQAAAAgBAB");
	this.shape_30.setTransform(40.2,34.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgdCyIhbgBIABgBIAAgDIgBADQgHgCgGgEQgOgJgJgPQgJgQABgSQAAgKADgJIAAgBQADgHAEgGIASgbQAJgOAPgKIAcgUQAOgKASgFQAQgFAQgGQAPgHAQgEQARgEARgDIASgBIABAAIAAAAIAQABIAkACQARAAARAGQAMAFAKAHQgKgHgMgFQgRgGgRAAIgkgCIgQgBIAAAAIgBAAIgSABQgRADgRAEQgQAEgPAHQgQAGgQAFQgSAFgOAKIgcAUQgPAKgJAOIgSAbQgEAGgDAHIgPgdQgFgIgBgLQgBgKADgIQACgIAFgIIASgbQAJgOALgOQAKgNAOgJQAOgIAQgHQAQgIARgEQAQgFARgBQAQgCAQgEQAQgEARgBIACgBIAJAAIAAAAIABAAQAJAAAJACIABAAIAAAAIACABIAgAHQAMAEAMAHQgMgHgMgEIgggHIgCgBIAAAAIgBAAQgJgCgJAAIgBAAIAAAAIgJAAIgCABQgRABgQAEQgQAEgQACQgRABgQAFQgRAEgQAIQgQAHgOAIQgOAJgKANQgLAOgJAOIgSAbQgFAIgCAIQgLgOgJgJQgFgEgBgGQgDgIADgLQACgQAHgOQAHgQAIgMQAGgKALgIIACgCIACgBQALgHAKgJIAFgEQALgMAPgHIAUgKIAJgFQALgGAPgCIAbgFIAFgBQARgDARgBQAOgBANABIAGABQANABAMAEQAQAGAPAIQAPAJAKAOQAJANAEAQQADAJgDAFIAGAFQANAKAIAOQAGAOABARQABAJgCAGIAGAFQAMALAIAOQAHAPADARQACASgEARQgEAPgGAQIAAAAIAAAAQgdA2g1AHQguAGhIAAIgZgBg");
	this.shape_31.setTransform(40.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},3).to({state:[{t:this.shape_31},{t:this.shape_28},{t:this.shape_30}]},3).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},3).to({state:[{t:this.shape_31},{t:this.shape_28},{t:this.shape_30}]},3).wait(3));

	// head
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.1,1,1).p("ABXATQgBgCAAgCQgDgIgGgGQgGgGgJgBQAAgBABgBQAFgEgBgHQgBgHgDgGQgBgBAAgBQgDgEgGgDAgggEQAAgFABgDQABgDABgCQADgFAFgDQAFgEAHgBQABgFgEgBQAGgCAHACQAIADAFAGQAEAFADAFQABgHADgFQADACABADQADgFACgHQAEgIAIABQAEABADABQgDgGgGgEQgFgDgHgCQgGgCgIAAQgBAAgCAAQACgGAEgGQgKAFgKAEQgDACgFADQgEADgFADQgFgKgGgIQgCANgDAMQgBAEgFgCQgCgBgDAAQgLABgMACQgBAAgCAAQAJADAIAHQAEADgGADQgNAEgLAIQgFAEgDAFQAKgEAKgBQADAAADAAQgEAHgEAJQgCAGgBAGQgBAGgBAGQADgCAHgDQACgCADgBQAEgBAEAAQAAgBABgCQAAAAAAAAQABgCACgBQgDgDgBgEQgCgGACgGQACgHAHAAQAFAAAEAEQABAAAAABQABABAAAAQAEAFADAFAgJgDQABAAAAgCQABgHgFgDQgCgBgBAAQgDgBACAHQACAIAFgBgAAAAOQAAAHAEAFQABABACABQAFAEAHABQACAAABgBQAFgBAAgGQAAgFgDgEQgDgFgGgEQgEgDgFABQgBAAgCAAQgDADAAAGgAgyAYQgBABAAACQgBABAAACQABABABAAQAHAFAAgIQAAgEgCgBQgBgCgDAAAguASQABACACABQAAAAABAAQADACAFAAAg0AeQAAAFABAFQAAABABACQABAFADAEQAEAGADADQAGAFAFADQABAAACAC");
	this.shape_32.setTransform(28.7,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AgCABIACgCIADABIgCACQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAgBAAg");
	this.shape_33.setTransform(24,17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AglAYIgCgCIABgDIABgDIABgCIAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQACABAAAEQAAAFgDAAIgEgBgAAgAZQgHgBgFgEIgDgCQgFgFAAgHQAAgGAEgCIADAAQAFAAAEACQAGADADAGQADADAAAFQAAAGgFABIgCABIgBAAgAgDgRQgCgIADABIACABQAFADgBAHQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgBAAQgDAAgCgGg");
	this.shape_34.setTransform(27.4,15.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#996600").s().p("Ag3AoIAEgMIAIgRIgGAAQgLAAgJAEQACgFAGgDQALgHAMgFQAHgCgEgDQgIgHgKgDIAEAAIAXgDIAFAAQAFACABgDIAFgZIAKARIAJgFIAJgFIATgJIgFAMIADgBQAHABAHACQAGABAGAEQAFAEAEAGIgIgCQgIgBgDAIIgFAMQgBgDgDgCQgDAEgCAHQgCgFgEgFQgFgFgJgDQgHgCgGABQADACAAAFQgHABgEADQgFAEgDAEIgCAEIgBAIQgEgDgFgBQgHAAgCAIQgCAGACAHQABAEACADIgCADIAAAAIgCACQgDAAgEACIgGACIgJAGIABgMg");
	this.shape_35.setTransform(27.1,13.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC99").s().p("AgtA3QgFgCgGgFIgHgJIgEgJIgBgDQgBgFAAgFIACABQAIAFgBgJQAAgDgCgCIACgCIgDgCQgDgDgBgDQgCgGACgHQACgIAHAAQAFABAEADIABACIABABIAHALIgHgLIgBgBIgBgCIABgIIACgEQADgFAFgEQAFgDAHgBQABgFgEgCQAGgBAIACQAIADAFAFQAEAFACAGQABgHADgFQADACABADIAFgMQAEgIAIABIAHACQAGADADAEIABACQAEAFAAAIQABAGgFAFIgBABQAJACAGAHQAGAGADAGIABAFIgcAFQgOACgLAGIgJAFIgUAKQgOAHgMAMIgEAEIgDgCgAgKgIIgDABQgEACAAAGQAAAHAFAEIADADQAFAEAGAAIADAAQAFgBAAgGQAAgFgDgEQgDgEgFgEQgEgDgEAAIgBAAgAgzAKIAAAAIgBAAQgEAAgDgCIgBgBIABABQADACAEAAIABAAIAAAAgAghgXQACAIAFgBQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQABgGgFgEIgDgBIAAAAQgDAAACAHg");
	this.shape_36.setTransform(30.4,16.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(0.1,1,1).p("AAygRQACgDAEgBQACgCADgBQAHgCAEAAQgEgEgFgEQgFgDgGgDQgJgDgJgDQACgCADgCQAHgHAJgFQgFgBgGABQgNACgNAGQgGADABgFQABgLAEgJQgBACgCABQgJAHgIAHQgCACgBACQgCAFgDgCQgLgHgLgHQACAKADAKQgFACgFABQgFABgFABQgKAEgKAEQAGACAGACQgBABgBABQgFAGgEAGQgDAGgBAGQgBAGABAHQACgEACgDQAFgGAIADQAHADAFABQgBgCABgDQAFABAGADQgCgEAAgHQgBgHAEgIQAEgHAFgDQgBADAEAEQAFgEAGgCQAGgBAFACQACAAADABQADACADADQAAgFAEgEQAFgFAHAEQAFADAEAGQACAEAAAEQACgBACABQAAAAAAAAQABAAACABQABAAABABQACABABABQAAACAAABQgCAIgGgGQgCgDAAgCQAAgCACgCAgIARQABgFAEgDQABgBABgBQAEgBAEAFQAFAFAAAHQAAABgBACQgBAHgEAFQgBABgCABQgDACgEgEQgDgDgBgFQgBgGABgHgAgyBNQgCgCgBgDQgDgHgBgIQAAgJAFgIQgBAAgBAAQgGAAgEgFQgFgGgBgGQAAgBgBgBQgBgGACgFAArgSQAAACAAACQgBAAAAABQgBAEgDADAA3gOQAEADADAFQAAABABABQACAEACAFQABAHAAAFQAAAHgCAFQgBACAAACAABgHQgBAAgBgBQgFgEABgGQABgCAAgBQACgDADAHQAEAHgEADgAAQgZQAAABAAABQAAABAAABQABAGACAG");
	this.shape_37.setTransform(31.2,15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF00").s().p("AgBACIAAgDIADAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_38.setTransform(35.7,13.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbAdQgDgDgBgFQgBgGACgHQAAgFAEgDIACgBQAFgBAEADQAFAGAAAGIAAAEQgBAHgFAEIgCADIgDABQgDAAgDgDgAAYgSQgCgDAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAAAAIADABIADABIACACIAAADQgBAEgDAAQgBAAgDgCgAgYgRQgEgEABgHIABgCQABgDAEAHQAEAHgEACIgBABIgCgBg");
	this.shape_39.setTransform(33.5,15.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCC99").s().p("AgzA1QgDgHgBgJQAAgJAFgHIgCgBQgGAAgEgFQgFgFgBgHIgBgCQgBgEACgGIAEgHQAFgGAIADIAMAFQgBgDABgEQAFACAGAEQgCgGAAgGQgBgIAEgHQAEgHAFgEQgBAEAEADQAFgEAGgBQAGgBAFABIAFACIAGAFQAAgGAEgDQAFgFAHAEQAGADADAGQACADAAAEIAAAEIACABQAAACACACQAGAHACgJIAAgCQAEADADAEIABADIAEAKIABALQAAAGgCAGIgBADIgHAAQgQABgPAFIgWAHIgJADQgMADgLAJIgXAQIgDgEgAAAgLIgBABQgEAEgBAEQgBAGABAHQABAEADAEQADAEAEgCIADgDQAEgFABgGIABgEQAAgGgFgFQgDgDgEAAIgCAAgAAsggQgBADgDAEQADgEABgDIABgCIgBACgAgCgoIgBACQgBAGAEAEQABABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAEgCgEgHQgDgFAAAAIgCABgAASgqIAAABIADANIgDgNIAAgBIAAgBIAAgBIAAABIAAABg");
	this.shape_40.setTransform(31,16.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#996600").s().p("AhGAdQABgGADgGQAEgGAEgFIADgDIgMgDIAUgHIAKgDIAKgCIgFgVIAWAPQADABACgFIADgEIARgOIADgCQgFAIAAALQgBAFAGgDQAMgFAOgDQAGgBAFACQgJAEgIAHIgEAEIASAHIALAGIAJAGIgLADIgGACQgDABgDADIgCAAIgBgBIgEAAQAAgEgCgDQgDgGgGgCQgHgFgFAGQgDACAAAGIgHgFIgEgCQgFgBgGABQgGABgGAEQgEgDACgDQgFADgEAGQgEAIAAAIQABAGACAGQgGgEgGgCQAAAEABADIgMgFQgIgEgFAHIgEAHQgCgHACgHg");
	this.shape_41.setTransform(31.2,11.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.1,1,1).p("AA1gpQgDgBgEgBQgIgBgEAIQgCAHgDAFQgBgDgDgCQgDAFgBAHQgDgFgEgFQgFgGgIgDQgHgCgGACQAEABgBAFQgHABgFAEQgFADgDAFQgBACgBADQgBADAAAFQABAAAAABQABABAAAAQAEAFADAFAA1gpQAGADADAEQAAABABABQADAGABAHQABAHgFAEQgBABAAABQAJABAGAGQAGAGADAIQAAACABACAgyAYQgEAAgEABQgDABgCACQgHADgDACQABgGABgGQABgGACgGQAEgJAEgHQgDAAgDAAQgKABgKAEQADgFAFgEQALgIANgEQAGgDgEgDQgIgHgJgDQACAAABAAQAMgCALgBQADAAACABQAFACABgEQADgMACgNQAGAIAFAKQAFgDAEgDQAFgDADgCQAKgEAKgFQgEAGgCAGQACAAABAAQAIAAAGACQAHACAFADQAGAEADAGAgPgQQgDgBACAHQACAIAFgBQABAAAAgCQABgHgFgDQgCgBgBAAgAAEAaQABABACABQAFAEAHABQACAAABgBQAFgBAAgGQAAgFgDgEQgDgFgGgEQgEgDgFABQgBAAgCAAQgDADAAAGQAAAHAEAFgAgggEQgEgEgFAAQgHAAgCAHQgCAGACAGQABAEADADQABACACABQAAAAABAAQADACAFAAAg0AeQAAgCABgBQAAgCABgBQAAgBABgCQAAAAAAAAQADAAABACQACABAAAEQAAAIgHgFQgBAAgBgBgAguASQgCABgBACAgZBHQgCgCgBAAQgFgDgGgFQgDgDgEgGQgDgEgBgFQgBgCAAgBQgBgFAAgF");
	this.shape_42.setTransform(28.7,15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.1,1,1).p("AAygRQACgDAEgBQACgCADgBQAHgCAEAAQgEgEgFgEQgFgDgGgDQgJgDgJgDQACgCADgCQAHgHAJgFQgFgBgGABQgNACgNAGQgGADABgFQABgLAEgJQgBACgCABQgJAHgIAHQgCACgBACQgCAFgDgCQgLgHgLgHQACAKADAKQgFACgFABQgFABgFABQgKAEgKAEQAGACAGACQgBABgBABQgFAGgEAGQgDAGgBAGQgBAGABAHQACgEACgDQAFgGAIADQAHADAFABQgBgCABgDQAFABAGADQgCgEAAgHQgBgHAEgIQAEgHAFgDQgBADAEAEQAFgEAGgCQAGgBAFACQACAAADABQADACADADQAAgFAEgEQAFgFAHAEQAFADAEAGQACAEAAAEQACgBACABQAAAAAAAAQABAAACABQABAAABABQACABABABQAAACAAABQgCAIgGgGQgCgDAAgCQAAgCACgCAgIARQABgFAEgDQABgBABgBQAEgBAEAFQAFAFAAAHQAAABgBACQgBAHgEAFQgBABgCABQgDACgEgEQgDgDgBgFQgBgGABgHgAgyBNQgCgCgBgDQgDgHgBgIQAAgJAFgIQgBAAgBAAQgGAAgEgFQgFgGgBgGQAAgBgBgBQgBgGACgFAArgSQAAACAAACQgBAAAAABQgBAEgDADAA3gOQAEADADAFQAAABABABQACAEACAFQABAHAAAFQAAAHgCAFQgBACAAACAAQgZQAAABAAABQAAABAAABQABAGACAGAABgHQgBAAgBgBQgFgEABgGQABgCAAgBQACgDADAHQAEAHgEADg");
	this.shape_43.setTransform(31.2,15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.1,1,1).p("AgyAYQgEAAgEABQgDABgCACQgHADgDACQABgGABgGQABgGACgGQAEgJAEgHQgDAAgDAAQgKABgKAEQADgFAFgEQALgIANgEQAGgDgEgDQgIgHgJgDQACAAABAAQAMgCALgBQADAAACABQAFACABgEQADgMACgNQAGAIAFAKQAFgDAEgDQAFgDADgCQAKgEAKgFQgEAGgCAGQACAAABAAQAIAAAGACQAHACAFADQAGAEADAGQAGADADAEQAAABABABQADAGABAHQABAHgFAEQgBABAAABQAJABAGAGQAGAGADAIQAAACABACAA1gpQgDgBgEgBQgIgBgEAIQgCAHgDAFQgBgDgDgCQgDAFgBAHQgDgFgEgFQgFgGgIgDQgHgCgGACQAEABgBAFQgHABgFAEQgFADgDAFQgBACgBADQgBADAAAFQABAAAAABQABABAAAAQAEAFADAFAgPgQQgDgBACAHQACAIAFgBQABAAAAgCQABgHgFgDQgCgBgBAAgAAEAaQABABACABQAFAEAHABQACAAABgBQAFgBAAgGQAAgFgDgEQgDgFgGgEQgEgDgFABQgBAAgCAAQgDADAAAGQAAAHAEAFgAgggEQgEgEgFAAQgHAAgCAHQgCAGACAGQABAEADADQABACACABQAAAAABAAQADACAFAAAg0AeQAAgCABgBQAAgCABgBQAAgBABgCQAAAAAAAAQADAAABACQACABAAAEQAAAIgHgFQgBAAgBgBgAguASQgCABgBACAgZBHQgCgCgBAAQgFgDgGgFQgDgDgEgGQgDgEgBgFQgBgCAAgBQgBgFAAgF");
	this.shape_44.setTransform(28.7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},3).to({state:[{t:this.shape_35},{t:this.shape_36},{t:this.shape_34},{t:this.shape_33},{t:this.shape_42}]},3).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_43}]},3).to({state:[{t:this.shape_35},{t:this.shape_36},{t:this.shape_34},{t:this.shape_33},{t:this.shape_44}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,69.2,75.3);


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


(lib.definition2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIQgEgEgBgEQABgDAEgEQADgDAFAAQAGAAAEADQADADAAAEQAAAFgEADQgDADgGAAQgFAAgDgDg");
	this.shape.setTransform(378,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsA2QgKgHAAgLQAAgFADgDQADgEAGAAQAHAAAEAHQAEALARAAQANAAAOgGQANgHAAgIQAAgKgIgDQgGgCgSgBQgOgBgMgEQgPgGAAgNQABgRARgNQARgOATABQAIAAAMADQAPAFAAAGQAAAFgDADQgDAEgFAAIgMgCIgMgCQgLABgIAFQgKAFAAAFQAAADADADQADACAGAAIAUACQATABAKAJQAMAJAAARQAAAWgYALQgTAJgXAAQgVAAgMgKg");
	this.shape_1.setTransform(368.4,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA/QgJgHAAgbIACghIABghIgBgJIAAgJQAAgMALAAQAEAAADACIASgDIAQgBQAVgBAMAFQAIADAAAHQAAAFgDADQgEAEgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAgIAggCIAUgCQAFAAADADQAEAEAAAFQAAAJgLAAIgUACIgiAEIgBARQAAAQACACQABABAKAAIAOAAIAQAAIAFgBIAEAAQAFAAAEADQAEADAAAFQAAAJgKACQgIACgagBQgbABgIgIg");
	this.shape_2.setTransform(357.5,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsA2QgKgHAAgLQAAgFADgDQADgEAGAAQAHAAAEAHQAEALARAAQANAAAOgGQANgHAAgIQAAgKgIgDQgGgCgSgBQgOgBgMgEQgPgGAAgNQABgRARgNQARgOATABQAIAAAMADQAPAFAAAGQAAAFgDADQgDAEgFAAIgMgCIgMgCQgLABgIAFQgKAFAAAFQAAADADADQADACAGAAIAUACQATABAKAJQAMAJAAARQAAAWgYALQgTAJgXAAQgVAAgMgKg");
	this.shape_3.setTransform(346,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdAvQgEgKgEgMIgUABQgMABgGABIgOAcQgEAGgGAAQgFAAgEgDQgDgDAAgFQAAgEAMgZIgBgFQABgDAHgDQAMgUAOgVQAUgfAFgBQAJABADAKIAGAbIAMA1IAEAMQADAHAAAEQAAAEgDAEQgEACgEAAQgIAAgGgPgAgGAHIALAAIAMgBIgGgbIgRAcg");
	this.shape_4.setTransform(333.9,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgtA+QgDgDAAgFIABgTIAAgSIAAhCQAAgGADgEQAEgGAIABIAUABQAMACAHAEQAjASAAAaQAAALgHAHQgIAJgOAFQAVANAMAMQADAEAAAEQAAAFgEADQgDADgFAAQgEAAgFgDQgYgYgegJIABAbQAAAFgDADQgEADgEAAQgFAAgEgDgAgZACIAEAAQAUAAAJgEQAEgCADgDQAEgEAAgCQAAgJgMgJQgKgIgMgBIgKgBg");
	this.shape_5.setTransform(322.5,43.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAjA/QgDgDAAgEIgBgSIAAgTIAAgIQgNABgTADIgfAGIgCASIAAARQAAAFgEACQgDADgFAAQgEAAgEgDQgDgDAAgEIACgZIABgYIAAgeIABggQAAgEADgDQADgDAFAAQAFAAADADQAEADAAAFIgBATIAAATIgBAIIAAAIIAfgGQASgDAOgBIABgeQAAgHAEgIQAEgKAGAAQAFAAADADQAEADAAAFIgBACIgBALIgBAHIAAAHIgBAYIgBAWIABASIABASQAAAFgDADQgEADgEAAQgFAAgEgDg");
	this.shape_6.setTransform(310.5,43.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglA/QgDgDAAgEIAAgYIACglIACgmQAAgWAMABIAHgBIANAAQAPAAAOAKQAQAMAAARQAAAVgRAMQgPALgTAAIgHgBIgBAnQAAAEgDADQgDADgFAAQgFAAgDgDgAgOgrIgBALIgBAdIAGABQALAAAJgHQAJgGAAgLQAAgHgIgFQgJgGgIAAIgFAAIgDABg");
	this.shape_7.setTransform(299.3,43.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C0C001").s().p("AgrAyIABgaQADgjAAgsQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAsgCAkIgCAUQAUAAAdgJIAEgBQAFAAAEAEQACADAAAFQAAAHgHADQgKAEgUAEQgSADgMAAQgUAAAAgSg");
	this.shape_8.setTransform(282.9,43.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C0C001").s().p("AAdAvQgEgKgEgMIgUABQgMABgGABIgOAcQgEAGgGAAQgFAAgEgDQgDgDAAgFQAAgEAMgZIgBgFQABgDAHgDQAMgUAOgVQAUgfAFgBQAJABADAKIAGAbIAMA1IAEAMQADAHAAAEQAAAEgDAEQgEACgEAAQgIAAgGgPgAgGAHIALAAIAMgBIgGgbIgRAcg");
	this.shape_9.setTransform(271.8,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C0C001").s().p("Ag6BAQgDgEAAgEIABgLIAAgKIABgOIAAgOIAAgQIAAgPIgBgPIgBgPQAAgFADgEQAFgDAFAAQAHgBAHALQAkA2AmAgIAAgMIgBg2IgBgJIgBgJQAAgLAMAAQANAAAAApIAAANIgBA0IgBAMQgCAMgKgBQgGAAgHgGQgggdgngzIgBAZIABAVIAAATQAAAZgMAAQgGAAgEgEg");
	this.shape_10.setTransform(258.8,43.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C0C001").s().p("AgrAzQgTgOAAgYQAAgcASgXQAUgbAdAAQAdAAAOAOQAPANAAAbQAAAbgRAXQgSAageABQgYgBgRgOgAgagYQgMARAAAUQAAANALAJQAKAIAPAAQASAAAMgSQALgQAAgUQAAgSgIgGQgHgHgTAAQgSAAgNASg");
	this.shape_11.setTransform(245,43.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C0C001").s().p("AgnA8QgDgDAAgFQAAgEAEgDQADgEAGAAIAPgBIAAgmQAAgVACgVIgSAAQgFAAgDgCQgEgEAAgEQAAgFADgEQADgCAFgBIAYAAQAPAAAZADQAKACAAAJQAAAFgEAEQgDACgEAAIgWgCQgBAQAAAYIAAAlIAWAAQAFgBAEAEQADADAAAFQAAAEgEAEQgDADgFAAIgOAAIgOAAIgQACIgRACQgFAAgEgEg");
	this.shape_12.setTransform(233.5,43.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C0C001").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_13.setTransform(223.2,43.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C0C001").s().p("AgnA8QgDgDAAgFQAAgEAEgDQADgEAGAAIAPgBIAAgmQAAgVACgVIgSAAQgFAAgDgCQgEgEAAgEQAAgFADgEQADgCAFgBIAYAAQAPAAAZADQAKACAAAJQAAAFgEAEQgDACgEAAIgWgCQgBAQAAAYIAAAlIAWAAQAFgBAEAEQADADAAAFQAAAEgEAEQgDADgFAAIgOAAIgOAAIgQACIgRACQgFAAgEgEg");
	this.shape_14.setTransform(212.4,43.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C0C001").s().p("AgsA2QgKgHAAgLQAAgFADgDQADgEAGAAQAHAAAEAHQAEALARAAQANAAAOgGQANgHAAgIQAAgKgIgDQgGgCgSgBQgOgBgMgEQgPgGAAgNQABgRARgNQARgOATABQAIAAAMADQAPAFAAAGQAAAFgDADQgDAEgFAAIgMgCIgMgCQgLABgIAFQgKAFAAAFQAAADADADQADACAGAAIAUACQATABAKAJQAMAJAAARQAAAWgYALQgTAJgXAAQgVAAgMgKg");
	this.shape_15.setTransform(202,44);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C0C001").s().p("AgrAzQgTgOAAgYQAAgcASgXQAUgbAdAAQAdAAAOAOQAPANAAAbQAAAbgRAXQgSAageABQgYgBgRgOgAgagYQgMARAAAUQAAANALAJQAKAIAPAAQASAAAMgSQALgQAAgUQAAgSgIgGQgHgHgTAAQgSAAgNASg");
	this.shape_16.setTransform(189.3,43.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C0C001").s().p("AglA/QgDgDAAgEIAAgYIACglIACgmQAAgWAMABIAHgBIANAAQAPAAAOAKQAQAMAAARQAAAVgRAMQgPALgTAAIgHgBIgBAnQAAAEgDADQgDADgFAAQgFAAgDgDgAgOgrIgBALIgBAdIAGABQALAAAJgHQAJgGAAgLQAAgHgIgFQgJgGgIAAIgFAAIgDABg");
	this.shape_17.setTransform(178,43.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C0C001").s().p("AgmA/QgJgHAAgbIACghIABghIgBgJIAAgJQAAgMALAAQAEAAADACIASgDIAQgBQAVgBAMAFQAIADAAAHQAAAFgDADQgEAEgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAgIAggCIAUgCQAFAAADADQAEAEAAAFQAAAJgLAAIgUACIgiAEIgBARQAAAQACACQABABAKAAIAOAAIAQAAIAFgBIAEAAQAFAAAEADQAEADAAAFQAAAJgKACQgIACgagBQgbABgIgIg");
	this.shape_18.setTransform(168.4,43.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C0C001").s().p("AgsA+QgEgDAAgFIAAgTIAAgSIAAhCQABgGADgEQAEgGAIABIAUABQAMACAHAEQAkASgBAaQABALgIAHQgIAJgPAFQAXANALAMQADAEAAAEQAAAFgDADQgEADgFAAQgEAAgEgDQgZgYgdgJIABAbQgBAFgDADQgEADgEAAQgFAAgDgDgAgZACIADAAQAVAAAJgEQAEgCADgDQAEgEAAgCQAAgJgMgJQgKgIgMgBIgKgBg");
	this.shape_19.setTransform(157.6,43.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C0C001").s().p("AglA/QgDgDAAgEIAAgYIACglIACgmQAAgWAMABIAHgBIANAAQAPAAAOAKQAQAMAAARQAAAVgRAMQgPALgTAAIgHgBIgBAnQAAAEgDADQgDADgFAAQgFAAgDgDgAgOgrIgBALIgBAdIAGABQALAAAJgHQAJgGAAgLQAAgHgIgFQgJgGgIAAIgFAAIgDABg");
	this.shape_20.setTransform(147.5,43.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAXA/QgGADgGABIgLABQgTAAgMgMQgNgMAAgTQAAgWANgNQANgNATAAIALABIAIAEIADgnQABgKAKAAQAFAAADADQADADAAAFIgCAkIgCAjQAAAeACAKIAAADQAAAEgDADQgEADgEAAQgGAAgDgFgAgQAEQgGAHAAAOQAAAJAGAGQAHAHAJAAQAFAAADgCIAIgFIADgDIAAgeQgDgFgEgCQgFgCgGAAQgLAAgGAGg");
	this.shape_21.setTransform(130.4,43.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AARAmIgCgRIgBgRIAAgHIAAgHIAAgDIABgEQgBgHgDAAQgHAAgGAJQgGAKgEANIgBAHIgBAIIgBAHIAAAHQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIAAgHIgBgHIACgXIAAgVIAAgIIAAgIQAAgEADgDQAEgDAEAAQAMAAAAANIAAABQANgNAMAAQAPAAAHANQADAJAAASIAAAGIAAAEIACARQACAKAAAGQAAAFgEADQgCADgGAAQgKAAgBgKg");
	this.shape_22.setTransform(121.2,45.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAUAmQgHAEgGABQgGACgDAAQgUAAgKgKQgKgLAAgVQAAgTAPgOQAOgOAUgBQAIAAAKAFQANAFAAAHQAAADgCADIgBAIIgBAMQAAAOACAHIAEAIIADAIQAAAFgDADQgDACgFAAQgDABgJgIgAgLgQQgIAJAAALQAAAKAEAGQAEAGAIAAQAEAAAFgCQAEgCAEgDQgCgTAAgKIAAgGIABgHIgDgCIgCAAQgKAAgJAJg");
	this.shape_23.setTransform(112,45.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6600").s().p("AgsA2QgKgHAAgLQAAgFADgDQADgEAGAAQAHAAAEAHQAEALARAAQANAAAOgGQANgHAAgIQAAgKgIgDQgGgCgSgBQgOgBgMgEQgPgGAAgNQABgRARgNQARgOATABQAIAAAMADQAPAFAAAGQAAAFgDADQgDAEgFAAIgMgCIgMgCQgLABgIAFQgKAFAAAFQAAADADADQADACAGAAIAUACQATABAKAJQAMAJAAARQAAAWgYALQgTAJgXAAQgVAAgMgKg");
	this.shape_24.setTransform(94,44);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6600").s().p("AgoA/QgEgEAAgFIAAhXIgBgLIABgLQABgIANgBQAHgCAOAAQAPAAAOAKQARAMAAARQAAAKgDAHQgDAFgHAFQAIAEAGAIQAIAJAAAIQAAALgNAKQgIAHgIADQgTAHgdAAQgFAAgEgEgAgWAsQAPAAAPgFQAPgEAAgFQAAgGgKgFQgHgEgGgBIgWgBgAgWgrIABARIgBASIAMAAQAYgCAAgRQAAgFgHgGQgHgGgJAAIgNABg");
	this.shape_25.setTransform(83,43.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6600").s().p("AgsA+QgEgDAAgFIAAgTIAAgSIAAhCQABgGADgEQAEgGAIABIAUABQAMACAHAEQAkASgBAaQABALgIAHQgIAJgPAFQAXANALAMQADAEAAAEQAAAFgDADQgEADgFAAQgEAAgEgDQgZgYgdgJIABAbQgBAFgDADQgEADgEAAQgFAAgDgDgAgZACIADAAQAVAAAJgEQAEgCADgDQAEgEAAgCQAAgJgMgJQgKgIgMgBIgKgBg");
	this.shape_26.setTransform(72.1,43.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6600").s().p("AgmA/QgJgHAAgbIACghIABghIgBgJIAAgJQAAgMALAAQAEAAADACIASgDIAQgBQAVgBAMAFQAIADAAAHQAAAFgDADQgEAEgFAAIgDgBQgOgDgMAAIgNABIgPADIgBAgIAggCIAUgCQAFAAADADQAEAEAAAFQAAAJgLAAIgUACIgiAEIgBARQAAAQACACQABABAKAAIAOAAIAQAAIAFgBIAEAAQAFAAAEADQAEADAAAFQAAAJgKACQgIACgagBQgbABgIgIg");
	this.shape_27.setTransform(61.4,43.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("AgRA7QgKgYgNgtIgHgWQgEgQAAgFQAAgGADgDQAEgDAFAAQAHAAAEAIIADAPIAIAbIAMAoIATgwIAHgUQAFgMAGgGQADgFAGAAQAEAAAEAEQADADAAAEQAAAEgCADQgEAGgEAKIgGAQIgWA4IgKAUQgDAHgGAAQgJAAgDgIg");
	this.shape_28.setTransform(50.3,43.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("AgZBDQgKgCgFgEQgFAAgEgDQgDgEAAgEIABgZIABgZIgBgaIAAgcQAAgFAEgEQAFgEAFgBQACAAAMAGIAPAGQAXAIARARQAVATAAAYQAAAOgHANQgHANgNAIQgNAIgYAAIgOgBgAgcAqQADADAEABIAKABQAQAAAIgGQAIgFAEgHQAEgIAAgJQAAgUgYgPQgHgFgagLg");
	this.shape_29.setTransform(38.7,43.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("AAdAvQgEgKgDgMIgUABQgMABgIABIgNAcQgDAGgHAAQgEAAgEgDQgEgDAAgFQAAgEAMgZIgBgFQAAgDAIgDQAMgUAOgVQAUgfAFgBQAJABADAKIAFAbIANA1IAEAMQADAHAAAEQAAAEgEAEQgDACgFAAQgGAAgHgPgAgFAHIAKAAIAMgBIgFgbIgRAcg");
	this.shape_30.setTransform(26,43.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMASQgDgDAAgEQAAgCAFgKIAIgNQACgFAFAAQAFAAADADQADADAAADIgGAMIgGANQgDAFgFAAQgFAAgDgCg");
	this.shape_31.setTransform(380.5,24.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC0066").s().p("AgsA2QgKgHAAgLQAAgFADgEQADgDAGAAQAHAAAEAIQAEAKARAAQANAAAOgHQANgGAAgHQAAgLgIgDQgGgDgSAAQgOAAgMgFQgPgGAAgNQABgRARgMQARgOATgBQAIAAAMAFQAPAEAAAGQAAAFgDADQgDADgFAAIgMgBIgMgCQgLAAgIAFQgKAGAAAGQAAACADADQADACAGAAIAUACQATABAKAJQAMAJAAASQAAAVgYALQgTAJgXgBQgVAAgMgJg");
	this.shape_32.setTransform(371.3,18.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC0066").s().p("AgmBAQgJgJAAgbIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQAAQAVAAAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAFQAAAJgLACIgUACIgiACIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEADQAEAEAAAFQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_33.setTransform(360.3,17.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC0066").s().p("AgRA7QgKgYgNgsIgHgXQgEgQAAgGQAAgEADgEQAEgDAFAAQAHAAAEAJIADAOIAIAaIAMAqIATgyIAHgUQAFgLAGgHQADgEAGAAQAEAAAEADQADAEAAAFQAAADgCADQgEAHgEAIIgGARIgWA5IgKAUQgDAGgGAAQgJAAgDgIg");
	this.shape_34.setTransform(349.2,18.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CC0066").s().p("AgnA9QgDgEAAgEQAAgFAEgDQADgEAGAAIAPgCIAAglQAAgVACgVIgSABQgFgBgDgDQgEgDAAgFQAAgEADgEQADgCAFgBIAYgBQAPABAZADQAKABAAALQAAAFgEADQgDACgEABIgWgDQgBAPAAAYIAAAmIAWgBQAFABAEADQADADAAAFQAAAFgEADQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_35.setTransform(338.6,18.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC0066").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_36.setTransform(328.3,17.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0066").s().p("AgkAzQgNgNAAgSQAAgbAZgdQAVgZAUAAIAHABIAFAAQADgDAGAAQAIAAACAKIABAQQAAAEgCADQgDAFgGAAQgHAAgEgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAIAAQAIAAAIgFIANgIQAGgEAEAAQAFAAADAEQADADABAEQgBAFgEAEQgXATgXAAQgSAAgNgNg");
	this.shape_37.setTransform(317.1,17.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC0066").s().p("AgmBAQgJgJAAgbIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQAAQAVAAAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAFQAAAJgLACIgUACIgiACIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEADQAEAEAAAFQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_38.setTransform(306.7,17.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC0066").s().p("AgjA5QgRgMAAgQQAAgMALAAQAMAAAAAMQAAAFAJAGQAIAFAHABQADgBACgKIABgaIABguIAAgGIgCAAIgJAAIgKAAQgFAAgDgDQgEgEAAgEQAAgMAPAAIAIAAIAIAAIAPAAIAQgBQAWAAAAANQAAAEgDAEQgDADgFAAIgFAAIgFAAIgHAAIAAAGQAAA6gIAbQgGAUgQAAQgPAAgPgLg");
	this.shape_39.setTransform(295.6,18.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0066").s().p("AgZBDQgKgCgFgDQgFgBgEgDQgDgEAAgEIABgZIABgZIgBgaIAAgcQAAgEAEgFQAFgFAFAAQACABAMAEIAPAIQAXAHARARQAVAUAAAWQAAAOgHANQgHAOgNAIQgNAJgYAAIgOgCgAgcAqQADACAEABIAKABQAQAAAIgEQAIgGAEgIQAEgHAAgKQAAgTgYgPQgHgFgagLg");
	this.shape_40.setTransform(284.1,18.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC0066").s().p("AAdAvQgFgJgDgOIgUADQgLAAgIACIgNAbQgEAGgGAAQgEAAgFgDQgDgEAAgEQAAgFAMgYIgBgEQAAgEAIgDQAMgUAOgVQAUggAFABQAJAAADALIAGAaIAMA2IAEAKQADAIAAADQAAAFgDADQgEADgEABQgIgBgGgPgAgGAHIALgBIAMgBIgGgbIgRAdg");
	this.shape_41.setTransform(271.4,18.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHBBQgDgDgBgFIAAhyQABgFADgDQADgCAEAAQAFAAADADQAEACAAAFIAABuQAAAPgMAAQgEAAgDgDg");
	this.shape_42.setTransform(255.5,17.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBBQgEgDAAgFIAAhyQAAgFAEgDQAEgCAEAAQAEAAAEADQADACAAAFIAABuQgBAPgLAAQgEAAgDgDg");
	this.shape_43.setTransform(250.9,17.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAUAmQgHAEgGACQgGACgDAAQgUAAgKgLQgKgLAAgVQAAgTAPgPQAOgNAUAAQAIAAAKADQANAGAAAHQAAADgCACIgBAIIgBAMQAAAPACAHIAEAJIADAIQAAAEgDACQgDAEgFAAQgDAAgJgIgAgLgQQgIAJAAAKQAAAMAEAFQAEAGAIAAQAEAAAFgCQAEgBAEgEQgCgTAAgJIAAgGIABgIIgDgBIgCgBQgKAAgJAJg");
	this.shape_44.setTransform(243.9,20);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAIAeIgQAAIgHAAIgIAAQgEAAgDgDQgEgCAAgEQAAgKALAAIAPAAIAQAAIAQAAQAFAAADADQADACAAAFQAAAEgDACQgDADgFAAIgQAAgAgMgKIgGAAIgFAAQgFABgDgDQgDgDAAgEQAAgKAQAAIADAAIADAAIAkAAQAFAAADADQADACAAAFQAAAEgDADQgDACgFAAg");
	this.shape_45.setTransform(226.5,18.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgsA2QgKgHAAgLQAAgFADgEQADgDAGAAQAHAAAEAIQAEAKARAAQANAAAOgHQANgGAAgHQAAgLgIgDQgGgDgSAAQgOAAgMgFQgPgGAAgNQABgRARgMQARgOATgBQAIAAAMAFQAPAEAAAGQAAAFgDADQgDADgFAAIgMgBIgMgCQgLAAgIAFQgKAGAAAGQAAACADADQADACAGAAIAUACQATABAKAJQAMAJAAASQAAAVgYALQgTAJgXgBQgVAAgMgJg");
	this.shape_46.setTransform(208.2,18.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgtA+QgDgDAAgFIAAgTIAAgSIAAhCQABgGADgEQAEgGAIABIAUABQAMACAHAEQAjASAAAaQAAALgHAHQgIAJgOAFQAVANAMAMQADAEAAAEQAAAFgEADQgDADgFAAQgEAAgEgDQgZgYgegJIACAbQAAAFgEADQgEADgEAAQgFAAgEgDgAgZACIAEAAQAUAAAJgEQAEgCADgDQAEgEAAgCQAAgJgMgJQgKgIgMgBIgKgBg");
	this.shape_47.setTransform(197,17.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgmBAQgJgJAAgbIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQAAQAVAAAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAFQAAAJgLACIgUACIgiACIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEADQAEAEAAAFQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_48.setTransform(186.3,17.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgnA9QgDgEAAgEQAAgFAEgDQADgEAGAAIAPgCIAAglQAAgVACgVIgSABQgFgBgDgDQgEgDAAgFQAAgEADgEQADgCAFgBIAYgBQAPABAZADQAKABAAALQAAAFgEADQgDACgEABIgWgDQgBAPAAAYIAAAmIAWgBQAFABAEADQADADAAAFQAAAFgEADQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_49.setTransform(176,18.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgqBCQgDgDAAgFIAAheIABgKIAAgJQAAgFADgEQADgDAFAAIAGABIARgCIAOgBQAJAAAPAEQASAFAAAGQAAAFgDAEQgEADgFAAIgEgBQgLgDgPAAIgLAAIgOACIAAAcQAMgDAJAAQAOAAAMABQAKABAAAKQAAAFgDACQgEAEgEAAIgNgBIgMgBQgGAAgPAEIAAA0QAAAFgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_50.setTransform(166.5,18);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgnA9QgDgEAAgEQAAgFAEgDQADgEAGAAIAPgCIAAglQAAgVACgVIgSABQgFgBgDgDQgEgDAAgFQAAgEADgEQADgCAFgBIAYgBQAPABAZADQAKABAAALQAAAFgEADQgDACgEABIgWgDQgBAPAAAYIAAAmIAWgBQAFABAEADQADADAAAFQAAAFgEADQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_51.setTransform(156.4,18.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZBDQgKgCgFgDQgFgBgEgDQgDgEAAgEIABgZIABgZIgBgaIAAgcQAAgEAEgFQAFgFAFAAQACABAMAEIAPAIQAXAHARARQAVAUAAAWQAAAOgHANQgHAOgNAIQgNAJgYAAIgOgCgAgcAqQADACAEABIAKABQAQAAAIgEQAIgGAEgIQAEgHAAgKQAAgTgYgPQgHgFgagLg");
	this.shape_52.setTransform(146.1,18.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgrA0QgTgPAAgZQAAgbASgXQAUgbAdABQAdAAAOANQAPANAAAbQAAAbgRAXQgSAageAAQgYAAgRgNgAgagYQgMARAAATQAAAOALAJQAKAIAPAAQASAAAMgSQALgQAAgUQAAgRgIgIQgHgGgTAAQgSAAgNASg");
	this.shape_53.setTransform(132.9,18.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAtA2IgFgUQgDgPgGgbIgMAiIgEAPIgHAPQgEAIgIAAQgHAAgFgJIgEgQQgGgVgGgWIgKAnIgDATQgDAMgKAAQgFAAgEgEQgDgDAAgFQABgOAFgTIAKgfIAEgaQAEgRAEgGQAFgGAGAAQAIAAAEAIQADAHADAWQAFAWAHAYQAIgYAIgdIAFgTQAEgMAKAAQAIAAAFAOQACAFACAPQAFAjAHAZIAIAcQAAAFgFADQgDADgFAAQgIAAgFgNg");
	this.shape_54.setTransform(118.8,18.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgLAWQAAgFAEgDQAEgDAEAAQAMAAAAAUQAAAEgDADQgEAEgFAAQgMAAAAgUgAgIgRQgDgDAAgFIgBgCIAAgDQAAgFAEgDQADgDAFAAQALAAAAAQQAAAFgDADQgEADgEAAQgEAAgEgDg");
	this.shape_55.setTransform(100.2,18.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AARAmIgCgRIgBgRIAAgHIAAgHIAAgDIABgEQgBgHgDAAQgHAAgGAJQgGAKgEANIgBAHIgBAIIAAAHIgBAHQAAAFgDADQgEADgFAAQgEAAgEgDQgDgDAAgFIAAgHIgBgHIABgXIABgVIAAgIIAAgIQAAgEADgDQAEgDAEAAQALAAABANIAAABQANgNAMAAQAPAAAHANQADAJAAASIAAAGIAAAEIACARQACAKAAAGQAAAFgEADQgCADgGAAQgKAAgBgKg");
	this.shape_56.setTransform(92.1,19.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgaAjQgNgLAAgUQgBgRALgPQAMgQAWgBQARABAJANQAJAMAAARQAAASgKAOQgMAPgSAAQgPAAgLgKgAgLgNQgFAHAAAKQAAAKAFAFQAFAFAGAAQAGAAAFgGQAHgFAAgKQABgZgPAAQgJAAgGAJg");
	this.shape_57.setTransform(82.9,20.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgKA8QgDgCAAgGIAAgOIAAgQIABgSIAAgSQAAgFADgDQAEgDAEAAQAEAAAEADQADADAAAFIgBASIgBASIABAQIAAAOQAAAGgDACQgEADgEABQgFgBgDgDgAgHgpQgDgEgBgFQABgFADgEQAEgEAFAAQAEAAAFAEQADAEAAAFQAAAFgDAEQgFADgEAAQgFAAgEgDg");
	this.shape_58.setTransform(76.4,18);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHA6QgDgDAAgFIAAgJIAAgJIgBgqIgQgBQgKgBAAgKQAAgEADgEQADgDAFAAIAOABIAAgJIgBgIQAAgFAEgDQADgDAFAAQALAAAAAVIAAAHIAJgBIANABQAGADAAAHQAAAFgDADQgDADgFAAIgEAAIgEAAIgIABIABArIAAAEIAAAEQAAAUgMAAQgDAAgEgDg");
	this.shape_59.setTransform(69.8,18.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgJA8QgEgCAAgGIAAgOIgBgQIABgSIABgSQAAgFAEgDQACgDAGAAQAEAAADADQADADAAAFIAAASIgBASIAAAQIAAAOQAAAGgDACQgDADgFABQgEgBgDgDgAgHgpQgEgEAAgFQAAgFAEgEQAEgEAFAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_60.setTransform(63.7,18);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AARAmIgDgRIgBgRIABgHIAAgHIAAgDIAAgEQAAgHgDAAQgHAAgGAJQgHAKgEANIAAAHIgBAIIAAAHIgBAHQAAAFgDADQgDADgGAAQgEAAgDgDQgEgDAAgFIgBgHIAAgHIABgXIABgVIAAgIIAAgIQAAgEAEgDQACgDAGAAQAKAAABANIAAABQAMgNANAAQAQAAAFANQAEAJABASIAAAGIAAAEIABARQACAKAAAGQAAAFgDADQgEADgEAAQgLAAgBgKg");
	this.shape_61.setTransform(56.7,19.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgJA8QgEgCAAgGIAAgOIgBgQIACgSIAAgSQAAgFADgDQAEgDAFAAQADAAAEADQADADAAAFIgBASIgBASIABAQIAAAOQAAAGgDACQgEADgDABQgGgBgCgDgAgHgpQgEgEABgFQgBgFAEgEQAEgEAEAAQAGAAADAEQAFAEAAAFQAAAFgFAEQgDADgGAAQgEAAgEgDg");
	this.shape_62.setTransform(50,18);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgPBGQgEgDAAgFIABgCQACgMAAgKIAAgoIgGAAIgFABQgFAAgDgDQgDgEAAgEQAAgIAIgCIAOgCIABgKQADgSAHgJQAJgLAUAAQAPAAAAAKQAAALgOAAQgKABgFAGQgDAGgBALIAAACIAQgBQAPAAAAALQAAALgQAAIgQAAIAAAVIAAAXQAAAPgCAJQgCAJgIAAQgFAAgDgDg");
	this.shape_63.setTransform(43,18.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgcAkQgOgLAAgTQAAgUAMgOQAMgQATAAQAPAAAKAEQAMAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAIgFQAHgEAEAAQAJAAAAAJQgBAJgOAGQgLAFgNAAQgTAAgNgJgAgKgTQgGAFgDAKIASgIQALgFAGgEQgFgDgKAAQgGAAgFAFg");
	this.shape_64.setTransform(33.9,20);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgZBDQgKgCgFgDQgFgBgEgDQgDgEAAgEIABgZIABgZIgBgaIAAgcQAAgEAEgFQAFgFAFAAQACABAMAEIAPAIQAXAHARARQAVAUAAAWQAAAOgHANQgHAOgNAIQgNAJgYAAIgOgCgAgcAqQADACAEABIAKABQAQAAAIgEQAIgGAEgIQAEgHAAgKQAAgTgYgPQgHgFgagLg");
	this.shape_65.setTransform(23.5,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.staticgraybox("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(202.8,0,1.013,0.484,0,0,0,200.2,-0.1);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.definition2, new cjs.Rectangle(0,0,405.2,63.9), null);


(lib.content_scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("definitionmodifiersequal");
	}
	this.frame_87 = function() {
		playSound("bubcleverlyfoundthreelargeintertubesforhisracegear");
	}
	this.frame_93 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_100 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_120 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_131 = function() {
		playSound("rhodes_f9_chord");
	}
	this.frame_150 = function() {
		playSound("synth_brass_4times");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(84).call(this.frame_87).wait(6).call(this.frame_93).wait(7).call(this.frame_100).wait(20).call(this.frame_120).wait(11).call(this.frame_131).wait(19).call(this.frame_150).wait(40));

	// Diagram
	this.instance = new lib.example0("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20.8,119.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).wait(103));

	// sentence examples
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAIQgEgDAAgFQAAgEAEgDQAEgEAFAAQAGAAAEADQAEAEAAAEQAAAFgEADQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(307.2,314.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAuQgDgEABgEIAAg5IAAgIIAAgIQAAgFACgDQADgEAGAAQAJAAACAKQAPgLATAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIgBgJQgTADgJARIAAAsQABAFgEADQgDADgGAAQgFAAgDgDg");
	this.shape_1.setTransform(299.2,310.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVApIgOAGQgGACgDAAQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgQAVAAQAJAAALAGQANAFAAAHQAAADgCADIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAEgEADQgDAEgFAAQgEgBgJgHgAgMgRQgIAKAAALQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgDQgDgVAAgKIABgHIABgHIgDgCIgDgBQgLAAgJAKg");
	this.shape_2.setTransform(289.8,310.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAGgBAOQAAAKgKAHQgFAEgPAFIgdAOQAFAEAGADQAGACAGAAQAMgBAIgEQAHgFAFABQAJgBAAAKQAAAKgOAGQgNAFgOAAQgTAAgOgKgAgLgUQgGAFgEALIAUgJIATgJQgHgDgJAAQgHAAgGAFg");
	this.shape_3.setTransform(279.6,310.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtA4QAAgFAEgDQADgDAEAAIAMACIANABQANAAAFgIQAHgHAAgRQgEAEgGACQgFADgGAAQgRAAgMgMQgKgLAAgRQAAgYAPgOQAOgQAZAAQAJAAAFACQAGACAEAEQALACAAAMIgCAQQgDAVgBAVQgBAdgIANQgMARgcAAQgjAAAAgOgAgNgnQgHAJAAAOQAAALAEAFQAEAEAIAAQAGAAAHgHQAHgIABgIIAEgaIgGgDIgGgBQgNAAgJAKg");
	this.shape_4.setTransform(269.8,313.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQAOAGAAAOQAAAKgLAHQgFAEgPAFIgdAOQAFAEAFADQAHACAHAAQALgBAIgEQAHgFAFABQAJgBAAAKQAAAKgOAGQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIAUgJIARgJQgFgDgKAAQgHAAgGAFg");
	this.shape_5.setTransform(252.2,310.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAmQgOgLABgTQAAgQAMgTQAOgVASgBQAJABAMAFQAPAFAAAIQAAAFgDADQgDAEgFAAQgEAAgFgFQgGgDgKAAQgGAAgIANQgIANAAAIQAAAJAHAFQAHAGAJAAQAGgBAJgEQAIgEACAAQAFAAAEADQACADAAAFQAAAGgPAIQgNAFgIAAQgTAAgNgLg");
	this.shape_6.setTransform(242.5,310.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVApIgOAGQgGACgDAAQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgQAVAAQAJAAALAGQANAFAAAHQAAADgCADIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAEgEADQgDAEgFAAQgEgBgJgHgAgMgRQgIAKAAALQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgDQgDgVAAgKIABgHIABgHIgDgCIgDgBQgLAAgJAKg");
	this.shape_7.setTransform(233.1,310.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAuQgCgEAAgEIAAg5IAAgIIAAgIQAAgFADgDQADgEAFAAQAKAAABAKQAPgLATAAQASAAAAAXIAAAGQgBANgLAAQgMAAAAgLIAAgJQgTADgJARIAAAsQAAAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_8.setTransform(223.9,310.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_9.setTransform(207.1,310.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKBAQgEgEABgFIgBgQIAAgPIABgVIABgSQgBgFAEgEQAEgDAEAAQAFAAADADQADAEAAAFIAAASIgBAVIAAAPIAAAQQABAFgEAEQgEADgEAAQgFAAgDgDgAgIgsQgDgEAAgFQAAgGADgEQAFgDAEAAQAGAAAFADQADAEABAGQgBAFgDAEQgFAEgGAAQgEAAgFgEg");
	this.shape_10.setTransform(200.5,308.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_11.setTransform(192.7,308.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_12.setTransform(175.1,310.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAVApIgOAGQgGACgDAAQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgQAVAAQAJAAALAGQANAFAAAHQAAADgCADIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAEgEADQgDAEgFAAQgEgBgJgHgAgMgRQgIAKAAALQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgDQgDgVAAgKIABgHIABgHIgDgCIgDgBQgLAAgJAKg");
	this.shape_13.setTransform(165.9,310.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_14.setTransform(148.5,310.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQAOAGAAAOQAAAKgLAHQgFAEgPAFIgcAOQAEAEAFADQAGACAIAAQALgBAIgEQAHgFAFABQAJgBAAAKQAAAKgPAGQgMAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIAUgJIARgJQgGgDgJAAQgHAAgGAFg");
	this.shape_15.setTransform(139.1,310.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgGIABgHIAAhiQAAgHADgEQADgHAHAAQAJAAAAAKIAAAEIgBAEIAAAhQAHgDAGgCQAGgCAEAAQAVAAANAPQAMANAAAUQAAAUgOAPQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAmQAMAEAJAAQAKAAAHgHQAIgIAAgLQAAgLgGgIQgHgGgKgBQgDABgGACg");
	this.shape_16.setTransform(128.9,308.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASAsQgMADgLAAQgMAAgJgEQgJgHgCgLQgEgWAAgRQAAgKADgQQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBAMIABAVQAAAKACAFIAEACIAEABQAJAAAMgEIAAgPIgBgOQAAgRACgNQABgLALAAQAFAAAEADQAEADgBAGIgBAeIAAARIAAARIAAAGIAAAFQAAAFgDAEQgEADgFAAQgHAAgDgGg");
	this.shape_17.setTransform(118.8,310.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHA9QgEgDAAgFIAAgJIABgKIgCgsIgQgBQgMgCAAgKQABgFADgDQADgEAFAAIAPABIAAgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACgBAIQAAAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgMAAQgFAAgDgDg");
	this.shape_18.setTransform(109.9,309.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiAuQgCgEAAgEIAAg5IAAgIIAAgIQAAgFADgDQADgEAFAAQAKAAABAKQAPgLATAAQASAAAAAXIAAAGQgBANgLAAQgMAAAAgLIAAgJQgTADgJARIAAAsQAAAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_19.setTransform(363.4,283.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAHAAANQAAAKgLAHQgFAEgPAFIgdAOQAFAEAFACQAGADAHAAQAMAAAIgFQAIgFAEABQAJAAAAAJQAAAJgOAHQgNAFgOAAQgUAAgNgKgAgLgUQgGAFgEALIAUgJIASgJQgFgEgKABQgHgBgGAGg");
	this.shape_20.setTransform(353.7,283.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASAoIgDgSIgBgSIABgHIAAgIIAAgDIAAgDQAAgIgDAAQgIAAgGAKQgHAJgEAPIgBAHIgBAIIAAAHIgBAIQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIgBgHIAAgIIABgXIABgYIAAgIIAAgIQAAgEADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAEQAAAIACAKQACALAAAHQAAAEgDAEQgEADgFAAQgLAAgBgLg");
	this.shape_21.setTransform(344.2,283.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AASAoIgDgSIgBgSIABgHIAAgIIAAgDIAAgDQAAgIgDAAQgIAAgGAKQgHAJgEAPIgBAHIgBAIIAAAHIgBAIQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIgBgHIAAgIIABgXIABgYIAAgIIAAgIQAAgEADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAEQAAAIACAKQACALAAAHQAAAEgDAEQgEADgFAAQgLAAgBgLg");
	this.shape_22.setTransform(334.8,283.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKBAQgDgEAAgFIgBgQIAAgPIABgVIAAgSQABgFADgEQADgCAFAAQAFAAADACQAEAEAAAFIgBASIgBAVIABAPIAAAQQAAAFgEAEQgEADgEAAQgFAAgDgDgAgHgsQgFgDAAgGQAAgGAFgDQAEgEAFAAQAFAAAFAEQADADAAAGQAAAGgDADQgFAEgFAAQgFAAgEgEg");
	this.shape_23.setTransform(327.7,281.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQAOAHAAANQAAAKgLAHQgFAEgPAFIgdAOQAFAEAFACQAHADAHAAQALAAAIgFQAHgFAFABQAJAAAAAJQAAAJgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIAUgJIARgJQgFgEgKABQgHgBgGAGg");
	this.shape_24.setTransform(312,283.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgsA4QAAgFACgDQAEgDAEAAIAMACIANABQAMAAAHgIQAFgHACgRQgFAEgFACQgGADgGAAQgSAAgLgMQgKgLAAgRQAAgYAOgOQAQgQAYAAQAIAAAHACQAGACADAEQAMACAAAMIgCAQQgFAVAAAVQgBAdgJANQgLARgcAAQgiAAAAgOgAgNgnQgHAJAAAOQAAALAEAFQAEAEAHAAQAHAAAHgHQAHgIABgIIAEgaIgGgDIgFgBQgPAAgIAKg");
	this.shape_25.setTransform(302.3,286.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQARAAABAXIAAAGQgBANgMAAQgKAAgBgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_26.setTransform(293.4,283.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAVApIgOAFQgGADgDAAQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAADgCACIgBAJIgBAMQAAAQACAHIAEAJIAEAIQAAAGgEACQgDAEgFAAQgEgBgJgHgAgMgRQgIAJAAAMQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgDQgDgVAAgKIABgHIABgIIgDgBIgDgBQgLAAgJAKg");
	this.shape_27.setTransform(284,283.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIBFQgDgEAAgFIAAh4QAAgFADgDQAEgDAEgBQAGABACADQAEADAAAFIAAB0QAAARgMAAQgFAAgDgEg");
	this.shape_28.setTransform(276.4,281.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAHgBANQAAAKgKAHQgFAEgPAFIgdAOQAFAEAFACQAGADAHAAQAMAAAIgFQAHgFAFABQAJAAAAAJQAAAJgOAHQgNAFgOAAQgUAAgNgKgAgLgUQgGAFgEALIAUgJIASgJQgFgEgKABQgHgBgGAGg");
	this.shape_29.setTransform(261,283.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQAMAHAAANQAAAKgKAHQgFAEgPAFIgcAOQADAEAHACQAGADAGAAQAMAAAIgFQAIgFAEABQAJAAAAAJQAAAJgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAFgEALIAVgJIASgJQgHgEgJABQgIgBgFAGg");
	this.shape_30.setTransform(251,283.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgiAuQgCgEgBgEIAAg5IAAgIIAAgIQAAgFADgDQADgEAGAAQAKAAACAKQAOgLATAAQARAAAAAXIAAAGQAAANgMAAQgLAAABgLIgBgJQgTADgIARIAAAsQAAAFgEADQgDADgGAAQgFAAgDgDg");
	this.shape_31.setTransform(241.9,283.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_32.setTransform(232.4,281.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCgBgKQABgFADgDQADgEAFAAIAPABIAAgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgMAAQgFAAgDgDg");
	this.shape_33.setTransform(222.8,282.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAYBCQgGAEgGABIgMABQgUAAgNgMQgNgNAAgUQAAgYANgNQANgPAVAAQAGAAAGABIAJAFQABgeABgMQACgKAKAAQAFAAADADQADADAAAFIgCAnIgCAlQAAAgACAKIABADQAAAFgEADQgDADgFAAQgHAAgDgGgAgRAEQgHAIAAAOQAAAKAHAHQAHAGAKABQAFAAAEgCIAIgGIADgDIAAgfQgDgGgFgCQgEgCgHAAQgMgBgGAHg");
	this.shape_34.setTransform(205.3,281.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AASAoIgDgSIgBgSIABgHIAAgIIAAgDIAAgDQAAgIgDAAQgIAAgGAKQgHAJgEAPIgBAHIgBAIIAAAHIgBAIQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIgBgHIAAgIIABgXIABgYIAAgIIAAgIQAAgEADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAEQAAAIACAKQACALAAAHQAAAEgDAEQgEADgFAAQgLAAgBgLg");
	this.shape_35.setTransform(195.6,283.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AASAsQgMADgLAAQgMAAgJgEQgJgHgCgLQgEgWAAgRQAAgLADgPQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBAMIABAVQAAAKACAFIAEACIAEABQAJgBAMgDIAAgPIgBgNQAAgSACgOQABgKALAAQAFAAAEADQAEADgBAGIgBAeIAAARIAAASIAAAFIAAAFQAAAFgDAEQgEADgFAAQgHAAgDgGg");
	this.shape_36.setTransform(186,283.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKAMAAAUQAAASgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAJQAAALAGAFQAFAFAGAAQAHAAAFgFQAHgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_37.setTransform(176.6,283.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgPBKQgFgDAAgFIABgCQACgNAAgLIAAgrIgGABIgFABQgGAAgDgEQgEgDABgFQAAgIAIgDIAPgBIACgKQACgUAJgJQAJgMAUAAQAQAAAAALQAAAMgOAAQgLAAgEAHQgFAGgBALIAAADIARgBQARAAAAALQAAAMgSgBIgRABIAAAXIAAAXQAAARgBAJQgCAJgJAAQgFAAgDgDg");
	this.shape_38.setTransform(167.3,281.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZBEQgEgDAAgFQAAgIATgpIgfg3IgEgHQgDgEAAgDQAAgFAEgDQAEgEAFAAQAGAAADAEQAMARAQAhIALgZIANgXQADgGAHAAQAFAAAEADQAEAEAAAEIgCAGIgeA+IgRAmIgFAQQgDAIgIAAQgFAAgEgDg");
	this.shape_39.setTransform(150,286.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgIBFQgDgEAAgFIAAh4QAAgFADgDQAEgDAEgBQAFABADADQAEADAAAFIAAB0QAAARgMAAQgFAAgDgEg");
	this.shape_40.setTransform(142.6,281.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQABgFADgDQADgEAFAAQAKAAACAKQAOgLATAAQASAAAAAXIAAAGQgBANgMAAQgKAAgBgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_41.setTransform(136,283.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQANAHABANQAAAKgLAHQgFAEgPAFIgdAOQAFAEAFACQAGADAIAAQALAAAIgFQAIgFAEABQAJAAAAAJQAAAJgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgEALIAUgJIASgJQgFgEgKABQgIgBgFAGg");
	this.shape_42.setTransform(126.4,283.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgMAnIgdhGIgCgFQABgEAEgEQADgDAFAAQAHAAAEAHIATAxIAMgeIAIgTQADgHAIAAQAEAAAFAEQADADAAAFQAAADgOAgIgTAmQAAAFgDACQgDADgEAAQgJAAgDgJg");
	this.shape_43.setTransform(117.3,283.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAHgBANQABAKgLAHQgFAEgPAFIgdAOQAFAEAFACQAGADAIAAQALAAAIgFQAHgFAFABQAJAAAAAJQAAAJgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgEALIAUgJIASgJQgFgEgKABQgHgBgGAGg");
	this.shape_44.setTransform(107.6,283.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIBFQgDgEAAgFIAAh4QAAgFAEgDQADgDAEgBQAFABAEADQADADAAAFIAAB0QAAARgMAAQgFAAgDgEg");
	this.shape_45.setTransform(100.1,281.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaAmQgOgLgBgTQAAgRANgSQAOgVASgBQAJAAAMAGQAPAGAAAHQAAAFgDADQgDAEgFAAQgEgBgFgEQgGgDgKAAQgGAAgIANQgIAMABAJQgBAJAHAFQAGAGAKAAQAGgBAJgEQAIgFACABQAFgBADAEQADADAAAFQAAAGgOAIQgOAFgIAAQgTABgMgMg");
	this.shape_46.setTransform(92.9,283.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZBDQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIABgGIAAhiQAAgHADgFQADgGAHAAQAJAAAAALIAAADIgBAEIAAAhQAHgEAGgBQAGgCAEAAQAVAAANAPQAMANAAAUQAAAUgOAPQgOAOgUAAQgMAAgLgEgAgJgBIgOAHIAAAlQAMAGAJgBQAKAAAHgHQAIgIAAgLQAAgMgGgHQgHgHgKAAQgDABgGACg");
	this.shape_47.setTransform(75.3,281.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AASAsQgMADgLAAQgMAAgJgEQgJgHgCgLQgEgWAAgRQAAgLADgPQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBAMIABAVQAAAKACAFIAEACIAEABQAJgBAMgDIAAgPIgBgNQAAgSACgOQABgKALAAQAFAAAEADQAEADgBAGIgBAeIAAARIAAASIAAAFIAAAFQAAAFgDAEQgEADgFAAQgHAAgDgGg");
	this.shape_48.setTransform(65.2,283.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgrBDQgEgEAAgFIAAhdIAAgLQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAGgIAFQAJAEAHAJQAHAIAAAKQAAAMgNAKQgIAHgKADQgTAIgfAAQgGAAgEgEgAgXAvQAPgBARgEQAPgFAAgFQAAgHgKgFQgHgEgHgBIgXAAgAgXguIAAASIAAATIAMAAQAagBAAgSQAAgHgIgFQgHgGgJAAIgOAAg");
	this.shape_49.setTransform(55.3,281.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgLAJQgEgEAAgFQAAgEAEgEQAFgEAGAAQAHAAAFAEQAEAEAAAEQAAAFgEAEQgGAEgGAAQgGAAgFgEg");
	this.shape_50.setTransform(352.6,317.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00CC00").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQgBgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgVAEgJATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_51.setTransform(343.7,312.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00CC00").s().p("AAYAtQgJAEgIACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQARgRAXAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_52.setTransform(333.3,312.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00CC00").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_53.setTransform(321.9,312.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00CC00").s().p("AgxA/QAAgGADgDQADgEAGAAIANACQAIACAGAAQAOAAAHgJQAGgIABgTQgFAFgGACQgGACgHABQgTAAgMgNQgMgNAAgSQAAgbAQgRQARgQAbgBQAKAAAGACQAHADAEAEQAMACAAANQAAAHgCAMQgEAWgBAYQgBAggJAOQgNAUgggBQglAAAAgOgAgOgrQgJAJAAAQQAAAMAFAGQAEAEAJAAQAHABAIgJQAIgIABgJIAEgeIgGgCIgHgBQgPAAgJALg");
	this.shape_54.setTransform(311.1,315.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC0066").s().p("AghAqQgQgMAAgXQAAgXANgRQAOgTAYAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgHgEgKAAQgIAAgHAGg");
	this.shape_55.setTransform(291.5,312.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC0066").s().p("AgeArQgPgNAAgVQAAgTAOgUQAPgYAUAAQALAAANAGQAQAGAAAJQABAFgEADQgDAFgGAAQgEgBgGgEQgGgEgMAAQgHgBgIAQQgJAOAAAJQABAKAHAGQAHAGAKAAQAHgBAKgFQAJgEACAAQAFAAAEADQAEAEAAAFQAAAIgQAIQgPAGgKAAQgUAAgPgMg");
	this.shape_56.setTransform(280.7,312.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC0066").s().p("AAXAtQgIAEgHACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQARgRAYAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgKgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAEgCAGgEQgEgWAAgLIABgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_57.setTransform(270.3,312.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CC0066").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQAAgGAEgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgWAEgJATIAAAwQAAAFgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_58.setTransform(260.1,312.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC0066").s().p("AgbAzQgPgFAAgMQAAgJAMAAQAFAAAIADQAJADAEAAQATgBAAgHQAAgGgNgFIgagMQgNgKAAgNQAAgUAVgHQAMgEAYAAQAKAAAEACQAGAEAAAJQAAASgJAAQgKgBgBgHIgIgBQgXAAAAAGQAAAEANAHQATAIAIAFQANAKAAANQAAAQgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_59.setTransform(241.4,312.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC0066").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQADgEAGAAQAGAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQgBAFgDAEQgEAEgFAAQgFAAgFgEgAgIgxQgEgEgBgGQABgGAEgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgGAAQgGAAgEgEg");
	this.shape_60.setTransform(234.1,310.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC0066").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_61.setTransform(225.5,309.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQAAgGADgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgVAEgKATIAAAwQAAAFgDAEQgFAEgFAAQgGAAgEgEg");
	this.shape_62.setTransform(206.3,312.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_63.setTransform(195.9,312.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgSBSQgEgDAAgGIAAgCQADgOAAgMIAAgwIgHABIgGAAQgGAAgDgDQgEgEAAgGQAAgJAJgDIARgBIACgLQACgWAJgLQALgNAXAAQASAAAAANQAAANgRAAQgLAAgGAIQgEAGgBANIAAADIASgBQATAAAAAMQAAANgUAAIgSAAIgBAaIABAaQAAASgDAKQgCALgJAAQgGAAgEgEg");
	this.shape_64.setTransform(185.6,310.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00CC00").s().p("AgbAzQgPgFAAgMQAAgJAMAAQAEAAAJADQAIADAGAAQASgBAAgHQAAgGgOgFIgZgMQgNgKAAgNQAAgUAUgHQANgEAYAAQAJAAAFACQAHAEAAAJQAAASgKAAQgKgBgCgHIgIgBQgWAAAAAGQAAAEANAHQAUAIAGAFQAOAKABANQAAAQgQAJQgNAHgRAAQgNAAgLgEg");
	this.shape_65.setTransform(167,312.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00CC00").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_66.setTransform(156.5,312.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00CC00").s().p("AgcBLQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgHIABgIIAAhtQAAgIADgFQAEgHAHAAQAKAAAAAMIAAADIAAAFIAAAlQAHgEAHgCQAGgCAFAAQAXAAAOARQAOAOAAAWQAAAYgQAPQgPAQgWAAQgOAAgMgEgAgKgBQgHACgIAFIAAAqQANAGAKAAQALAAAIgJQAIgHAAgOQAAgMgHgIQgGgIgMAAQgEAAgGADg");
	this.shape_67.setTransform(145.2,310);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00CC00").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_68.setTransform(134,312.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00CC00").s().p("AgIBEQgEgEgBgFIABgKIAAgLIgBgyIgTgBQgMgCAAgLQAAgFAEgEQADgEAGAAIARABIAAgKIgBgJQAAgGAEgEQAEgDAFAAQAOAAAAAYIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgEgBIgJABIABAzIAAAEIAAAGQABAWgOAAQgFAAgEgDg");
	this.shape_69.setTransform(124.2,311);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00CC00").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQAAgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_70.setTransform(106.2,312.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00CC00").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgXAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_71.setTransform(95.5,312.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00CC00").s().p("AAUAtIgDgUIgBgVIAAgHIAAgJIAAgDIABgFQAAgIgEAAQgIAAgIALQgIAKgEAQIgBAJIgBAJIAAAIIgBAJQAAAFgDAEQgEAEgGAAQgGAAgEgEQgEgEAAgFIgBgJIAAgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQAMAAABAPIAAACQAPgPAPAAQASAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgGAAQgMAAgBgMg");
	this.shape_72.setTransform(85,312.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00CC00").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgHALQgHAKgFAQIgBAJIAAAJIgBAIIAAAJQAAAFgFAEQgEAEgFAAQgGAAgEgEQgEgEABgFIgBgJIgBgIIACgbIABgZIAAgJIgBgJQAAgGAEgDQAEgEAGAAQANAAABAPIAAACQAOgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgMAAgCgMg");
	this.shape_73.setTransform(74.6,312.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00CC00").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQABAFgEAEQgEAEgFAAQgFAAgEgEgAgIgxQgFgEABgGQgBgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_74.setTransform(66.7,310.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CC0066").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_75.setTransform(353.3,282.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CC0066").s().p("AgxA+QAAgFADgDQADgDAGgBIANACQAIACAGAAQAOAAAHgJQAGgJABgTQgFAGgGACQgGADgHAAQgTAAgMgNQgMgNAAgSQAAgbAQgQQARgRAbAAQAKAAAGABQAHADAEAFQAMABAAANQAAAHgCAMQgEAWgBAZQgBAfgJAOQgNATggAAQglABAAgQgAgOgrQgJAJAAAQQAAAMAFAFQAEAGAJgBQAHABAIgIQAIgKABgIIAEgdIgGgEIgHAAQgPAAgJALg");
	this.shape_76.setTransform(342.5,285.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CC0066").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQAAgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_77.setTransform(332.7,282.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC0066").s().p("AAXAtQgJAEgHACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgCAKIAAAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgKgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAGgCAEgEQgDgWAAgLIABgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_78.setTransform(322.2,282.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC0066").s().p("AgJBNQgDgEAAgGIAAiGQAAgGADgDQAFgDAEAAQAGAAAEADQAEADAAAGIAACBQAAASgOAAQgFAAgEgDg");
	this.shape_79.setTransform(313.7,279.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CC0066").s().p("AggAqQgRgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_80.setTransform(296.7,282.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC0066").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgWAAgQgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_81.setTransform(285.5,282.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC0066").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQAAgGADgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_82.setTransform(275.4,282.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC0066").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_83.setTransform(264.8,280);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC0066").s().p("AgIBEQgFgDAAgGIABgKIABgLIgDgxIgSgCQgMgBAAgMQAAgGADgDQAEgEAGAAIARABIgBgKIAAgJQAAgGAEgEQAEgEAGAAQANAAAAAZIAAAIIAJgBQAMAAAEABQAIADAAAJQAAAGgEADQgDAFgHAAIgEAAIgGgBIgJABIACAzIABAEIAAAGQAAAXgOgBQgFABgEgEg");
	this.shape_84.setTransform(254.2,281.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AAbBKQgHAEgHABIgNABQgXAAgOgOQgPgOAAgWQAAgbAPgPQAPgQAXAAQAHAAAGACQAFABAFADQABghACgNQACgLAKAAQAHAAADADQADAEABAFIgCAsQgDAaAAAPQAAAjADAMIAAACQgBAGgEADQgDAEgGAAQgGAAgEgGgAgTAEQgIAJABARQAAAKAHAIQAIAHALAAQAGAAAEgCIAJgGIADgDIAAgkQgDgGgGgCQgEgDgIAAQgNAAgHAHg");
	this.shape_85.setTransform(234.9,280);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AAUAtIgCgUIgCgVIAAgHIABgJIAAgDIAAgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIAAAJIgBAIIAAAJQAAAFgFAEQgEAEgFAAQgGAAgEgEQgDgEAAgFIgBgJIgBgIIACgbIABgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQANAAABAPIAAACQAOgPAOAAQATAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgFAAQgMAAgCgMg");
	this.shape_86.setTransform(224.1,282.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_87.setTransform(213.4,282.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_88.setTransform(203,282.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgSBSQgEgDAAgGIAAgCQADgOAAgMIAAgwIgHABIgGAAQgGAAgDgDQgEgEAAgGQAAgJAJgDIARgBIACgLQACgWAJgLQALgNAXAAQASAAAAANQAAANgRAAQgLAAgGAIQgEAGgBANIAAADIASgBQATAAAAAMQAAANgUAAIgSAAIgBAaIABAaQAAASgDAKQgCALgJAAQgGAAgEgEg");
	this.shape_89.setTransform(192.7,280.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CC0066").s().p("AgcBMQgEgEAAgFQAAgKAUgsQgKgUgXgqIgFgIQgDgEAAgEQAAgFAEgEQAFgEAFAAQAGAAAEAFQAOATARAkIANgcIAOgZQAEgHAHAAQAFAAAFADQAEAEAAAFIgBAHIgiBFQgMAZgHARIgFASQgEAJgJAAQgGAAgEgDg");
	this.shape_90.setTransform(173.5,285.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CC0066").s().p("AgJBNQgEgEABgGIAAiGQgBgGAEgDQAFgDAFAAQAFAAAEADQADADAAAGIAACBQABASgOAAQgFAAgEgDg");
	this.shape_91.setTransform(165.2,279.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC0066").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQAAgGAEgDQADgEAGAAQALAAACALQARgNAUAAQAUAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgWAEgJATIAAAwQAAAFgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_92.setTransform(157.9,282.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CC0066").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgMgXQgHAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgGAGg");
	this.shape_93.setTransform(147.2,282.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CC0066").s().p("AgOArIgghNIgBgGQAAgFAEgEQAEgDAGAAQAIgBAEAIIAVA3IAOghIAIgVQAEgIAIAAQAGAAAEADQAEAEAAAFQAAAEgPAjIgVArQAAAFgEADQgDADgFAAQgJAAgFgKg");
	this.shape_94.setTransform(137,282.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CC0066").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgVAAgQgLgAgNgXQgGAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgHAGg");
	this.shape_95.setTransform(126.2,282.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CC0066").s().p("AgJBNQgEgEAAgGIAAiGQAAgGAEgDQAFgDAFAAQAFAAAEADQADADAAAGIAACBQAAASgNAAQgFAAgEgDg");
	this.shape_96.setTransform(117.9,279.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CC0066").s().p("AgdArQgQgNAAgVQAAgSAOgVQAQgYATAAQALAAANAGQAQAGAAAJQAAAFgDADQgDAFgGAAQgEAAgGgFQgGgFgMABQgGAAgJAOQgIAOAAAKQAAAKAHAGQAHAGALgBQAGAAAKgEQAJgFADgBQAFAAAEAFQADAEAAAEQAAAIgRAHQgOAHgJAAQgVAAgOgMg");
	this.shape_97.setTransform(110,282.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0099FF").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgGIABgHIAAhuQAAgIADgFQAEgHAHAAQAKAAAAAMIAAADIAAAFIAAAlQAHgEAHgCQAGgCAFAAQAXAAAOARQAOAOAAAXQAAAXgQAPQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgJQAIgHAAgNQAAgNgHgIQgGgIgMAAQgEAAgGADg");
	this.shape_98.setTransform(90.5,280.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0099FF").s().p("AAUAwQgNAFgMAAQgOAAgKgGQgKgHgCgNQgEgYAAgSQAAgNADgQQACgLALAAQAGAAAEAEQAEADAAAGIgCANIgBAOIABAXQABAKACAHIAEABIAFABQAKAAANgDIAAgRIgBgQQAAgUACgOQACgMALAAQAGAAAEAEQAEADAAAGIgCAiIAAATIAAAUIABAGIAAAGQAAAFgEAEQgEAEgGAAQgIAAgDgIg");
	this.shape_99.setTransform(79.3,282.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0099FF").s().p("AgvBKQgFgEAAgGIAAhnIgBgNIABgNQABgJAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAFAHAJQAJAKAAALQAAAMgPAMQgJAIgKAEQgWAIgjAAQgGAAgEgFgAgaA1QARgCATgFQARgFAAgFQAAgIgLgGQgJgFgHAAIgagBgAgZgfIgBAVIAOABQAdgDAAgUQAAgGgJgGQgIgIgKABIgQAAg");
	this.shape_100.setTransform(68.2,280.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.761)").s().p("A9sNOIAA6bMA7ZAAAIAAabg");
	this.shape_101.setTransform(203.7,154.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},87).wait(103));

	// character
	this.instance_1 = new lib.anim_bub_tireFit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.2,144.1,1.568,1.568,0,0,0,33.6,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190));

	// definition
	this.instance_2 = new lib.definition2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(205.4,33.2,1,1,0,0,0,202.6,31.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(4,1,1).p("Af4zeMg/vgADMAAAAnDMA/vAAAg");
	this.shape_102.setTransform(205.2,125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFCC").ss(1,1,1).p("ArPhyQC0iADTAJQDDAIClBeQCbBXB+B+QCJCMDIALQAjACAjAA");
	this.shape_103.setTransform(72.1,89);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FEFE36").ss(1,1,1).p("Af4oCQiBAAiJgSQiygXi5g4Qiyg2inhOQithQi+guQi9gtjDgVQi9gUi7AcQitAainAzQi5A5ieBZQB2BQB+BCQCrBaC9AwQDCAxDCg1AAqogQCjhFCwgSQC0gTC0AEQDEAEDCAeQDVAiA+DAQA6CzjMAsQjNAshFBoQCDCpDNgYQCzgVCuArQCvArC+geAiANEQCuhaDEgPQC/gPC8AfQCxAeCtAqQDAAvC8A+QC5A8DDABQAnAAAfgNA/3tqQEzihC4ABQDIAAC3BMQC0BKCeB2QArAgAsAeA9hiGQCehzC8BFQClA8CTBeQCiBmCmBkQCoBlDFAEQAmABAggRAkgFtQiECHjQghQjGgfjBAmQisAiicBQQjsB4EDA5QCpAmCtgbQDagiBRCBQBSCBClAZQAuAHA0gBQAygBAyAF");
	this.shape_104.setTransform(204,150);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFCC").s().p("AmzQGQimgZhSiBQhAhmiVAAIgBAAIAAAAQgnAAguAHIgGABIgEAAIgBABQhDAJhCAAIAAAAIAAAAQhjAAhhgVIgCgBQiIgeAAgvQABgrBwg5QCchQCtgiIABAAIAIgCIABAAQBkgTBmAAIABAAIAAAAQBSAABTAMIAIACIADAAIADABIAAAAQAoAGAlAAIAAAAIAAAAQCYAABphpIACgCIACgCIgCACIgCACQhpBpiYAAIAAAAIAAAAQglAAgogGIAAAAIgDgBIgDAAIgIgCQhTgMhSAAIAAAAIgBAAQhmAAhkATIgBAAIgIACIgBAAQitAiicBQQhwA5gBArQAAAvCIAeIACABQBhAVBjAAIAAAAIAAAAQBCAABDgJIABgBIAEAAIAGgBQAugHAnAAIAAAAIABAAQCVAABABmQBSCBCmAZI5DAAIAA7VIAAiWQEyihC4ABQDIAAC4BMQCzBKCeB2QArAgAtAeQCdhZC5g5QCngzCtgaQC7gcC+AUQDBAVC9AtQC/AuCtBQQCnBOCyA2QC5A4CyAXQCJASCBAAIAAKnIgEABQhMALhIAAIgBAAIAAAAQhoAAhjgXIgDgBIgEgBIgCAAIgEgBIgDgBIgDgBIgEgBIgCAAQhsgZhvAAIgBAAIAAAAQg5AAg5AGIgDABIgDAAQgYADgXAAIAAAAIAAAAQioAAhxiNIgBgCIgEgFQBFhoDMgsQCggjAAh0QAAghgNgnQg+jAjVgiQjCgejDgEIgIAAIg3AAIAAAAIgBAAQiKAAiJANIgFABIgRABQiwASijBFQCjhFCwgSIARgBIAFgBQCJgNCKAAIABAAIAAAAIA3AAIAIAAQDDAEDCAeQDVAiA+DAQANAnAAAhQAAB0igAjQjMAshFBoIAEAFIABACQBxCNCoAAIAAAAIAAAAQAXAAAYgDIADAAIADgBQA5gGA5AAIAAAAIABAAQBvAABsAZIACAAIAEABIADABIADABIAEABIACAAIAEABIADABQBjAXBoAAIAAAAIABAAQBIAABMgLIAEgBIAANcgAJtLwQCwAeCtAqQDBAvC8A+QC5A8DEABQAmAAAfgNQgfANgmAAQjEgBi5g8Qi8g+jBgvQitgqiwgeQh/gViBAAIAAAAIAAAAQg9AAg+AFQjFAPitBaQCthaDFgPQA+gFA9AAIAAAAIAAAAQCBAAB/AVgAoVEeQAgAAAcgNIABgBIACgBIACgBIgCABIgCABIgBABQgcANggAAIgBAAIAAAAIgCAAIAAAAIgCAAQjEgEiphlQimhkiihmQiTheikg8QhHgahBAAIgBAAIAAAAQhqAAhgBDIgGAEIgCABIACgBIAGgEQBghDBqAAIAAAAIABAAQBBAABHAaQCkA8CTBeQCiBmCmBkQCpBlDEAEIACAAIAAAAIACAAIAAAAIABAAgA5wtGQDDAICnBeQCbBXB9B/QCJCMDJALQAjACAjAAQgjAAgjgCQjJgLiJiMQh9h/ibhXQinhejDgIIgDAAIgYgBIAAAAIAAAAQi+AAilByIgDACIAAABIAAAAIgDABIgCACIACgCIADgBIAAAAIAAgBIADgCQClhyC+AAIAAAAIAAAAIAYABIADAAgAAzmHQBfAABfgZIADgBIAHgCIgHACIgDABQhfAZhfAAIAAAAIgBAAQhZAAhagWIgBgBIgGgBQi9gwirhaQh9hCh2hQQB2BQB9BCQCrBaC9AwIAGABIABABQBaAWBZAAIABAAIAAAAg");
	this.shape_105.setTransform(204,149.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#AACBF2").s().p("AbuHaQiygWi5g5Qiyg2inhOQithQi+gtQi9gtjCgVQi+gVi7AcQitAaimAzQi6A6idBYQgtgdgrghQieh1izhLQi4hLjIAAQi4gBkyCgIgBpwMA/vAAEIAAPUQiAABiKgTg");
	this.shape_106.setTransform(204,49.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFCC").s().p("A/3TiMAAAgnDMA/vAADMAAAAnAg");
	this.shape_107.setTransform(205.2,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.instance_2}]}).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-2,412.2,324.5);


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
		
		 window.open ("comP_scene2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("comP_scene0.html","_self");
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


// stage content:
(lib.comP_scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{S1:0,S1repeat:176});

	// timeline functions:
	this.frame_175 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_187 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(175).call(this.frame_175).wait(12).call(this.frame_187).wait(1));

	// content
	this.instance = new lib.content_scene2();
	this.instance.parent = this;
	this.instance.setTransform(269.9,202.8,1.053,1.053,0,0,0,205.2,156.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(188));

	// button
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(188));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '05DE7558D26C8644B142E410CAE9CF72',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmCP.mp3", id:"bgmCP"},
		{src:"sounds/bubcleverlyfoundthreelargeintertubesforhisracegear.mp3", id:"bubcleverlyfoundthreelargeintertubesforhisracegear"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/definitionmodifiersequal.mp3", id:"definitionmodifiersequal"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/rhodes_f9_chord.mp3", id:"rhodes_f9_chord"},
		{src:"sounds/rhodes_f_note.mp3", id:"rhodes_f_note"},
		{src:"sounds/synth_brass_4times.mp3", id:"synth_brass_4times"}
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
an.compositions['05DE7558D26C8644B142E410CAE9CF72'] = {
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