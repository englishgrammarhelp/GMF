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


(lib.s2_s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAlQgCgCAAgEIAAgEIgBgEQAAgEACgCQADgCACAAQAJAAAAAQQAAAEgDACQgCACgDAAQgCAAgDgCgAgFgTQgCgCAAgEIgBgDIAAgDQAAgDACgCQADgCADAAQAIAAgBANQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape.setTransform(-133.5,-36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_1.setTransform(-140.1,-35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_2.setTransform(-148.7,-35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQAAgRgGAAQgJABgHAJQgGAKgFANIgBAIIAAAIIAAAHIABAHQAAADgCACQgCADgEAAQgDAAgCgDQgDgCAAgDIAAgHIgBgHIACgWIABgWIAAgHIAAgIQAAgDACgCQACgDADAAQAHAAABALIAAAJQANgRANAAQANAAAEALQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQAAADgBACQgDACgDAAQgHABgBgIg");
	this.shape_3.setTransform(-156.4,-35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_4.setTransform(-165,-35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEA3QgCgCAAgDIAAgJIAAgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQADgCADAAIAQABIgBgLIAAgJQAAgEADgCQACgCADAAQAGAAABALIAAAIIAAAEIAAAFIALgBIALAAQAFACAAAGQAAADgCACQgCACgEAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_5.setTransform(-173.3,-36.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_6.setTransform(-186.1,-35.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_7.setTransform(-194.3,-35.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAlQgKAGgMAAQgKgBgHgEQgHgFgCgJQgDgWAAgOQAAgMADgNQABgHAGAAQADAAADACQACACAAAEIgBALIgBANIABAUQAAAKACAGIAFACIAFAAQAKAAALgDIAAgPIAAgPQAAgRABgMQABgHAHgBQADABADACQACACAAADIgCAeIAAAQIABAQIAAAGIAAAFQAAAEgCACQgCACgEAAQgGAAgBgIg");
	this.shape_8.setTransform(-202.5,-35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQACgCADAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIAKgBIALAAQAFACAAAGQAAADgCACQgDACgDAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_9.setTransform(-210.4,-36.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASAlQgKAGgMAAQgKgBgHgEQgHgFgCgJQgDgWAAgOQAAgMADgNQABgHAGAAQADAAADACQACACAAAEIgBALIgBANIABAUQAAAKACAGIAFACIAFAAQAKAAALgDIAAgPIAAgPQAAgRABgMQABgHAHgBQADABADACQACACAAADIgCAeIAAAQIABAQIAAAGIAAAFQAAAEgCACQgCACgEAAQgGAAgBgIg");
	this.shape_10.setTransform(-218.3,-35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglA/QgCgCAAgDIAAgvIABgtIAAgKIAAgLQAAgDACgCQACgDADAAQADAAACACIARgDIANgBQAJAAAMADQAPAEAAAFQAAADgCADQgCADgDAAIgDgBQgKgEgQAAIgLABIgQACIAAAiQAPgEAIAAQALAAANACQAHAAAAAIQAAADgCACQgCACgEAAIgMgBIgLAAQgFAAgSAEIgBA2QAAADgCACQgCADgDAAQgEAAgCgDg");
	this.shape_11.setTransform(-226.9,-36.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_12.setTransform(-234.2,-31.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVA4QgLgFgDgLIgBgCQAAgDADgCQACgDADAAQAEAAACADIADAGQADAEAFABQAFACAGAAQAIAAAGgFQAHgGAAgIQAAgMgIgHQgJgGgLgBQgJgBABgFQgBgFAHgCIASgFQAFgCADgDQADgDAAgFQAAgHgGgEQgFgEgKAAQgFAAgFACIgJAGIgEABQgDAAgCgCQgDgCABgEQgBgGAMgFQALgFAGAAQAQAAAKAHQALAIAAAPQAAASgPAGIgDABQALAEAEAGQAFAIABALQAAAQgLALQgLAKgPAAQgLAAgKgFg");
	this.shape_13.setTransform(-241.2,-37);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAuQgCgDAAgCIgCgdIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBAMIgBAPIABAGIABAGQAAADgDADQgCACgDAAQgJgBAAgTIABgPIAAgNIAAgMIgBgMQAAgSAIAAQADAAADACQACADAAADIAAAFIgBAFIAAAIQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgFAGgDQAGgEAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAVQAAACgDADQgCACgDAAQgCAAgDgCg");
	this.shape_14.setTransform(112.4,-10.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgSAAgIgKQgIgKAAgUQAAgRAMgOQANgNASAAQAGAAAJADQALAFgBAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIABABQgBADgBACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_15.setTransform(102,-10.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_16.setTransform(93.5,-8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_17.setTransform(80.1,-12.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEA3QgCgCAAgDIAAgJIAAgJIgBgsIgSgCQgHgBAAgGQAAgEACgCQACgCAEAAIAQABIgBgLIAAgJQABgEACgCQACgCADAAQAGAAABALIAAAIIAAAEIAAAFIALgBIALAAQAFACAAAGQAAADgCACQgCACgEAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_18.setTransform(71.6,-12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_19.setTransform(63.5,-10.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_20.setTransform(54.8,-12.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQABgRgHAAQgJABgGAJQgIAKgDANIgBAIIgBAIIABAHIAAAHQAAADgCACQgCADgDAAQgEAAgCgDQgDgCABgDIgBgHIAAgHIABgWIABgWIgBgHIAAgIQABgDABgCQADgDADAAQAIAAAAALIABAJQANgRAMAAQAMAAAGALQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCACQgCACgDAAQgHABgBgIg");
	this.shape_21.setTransform(41.1,-10.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_22.setTransform(32.4,-10.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgFAAQgFABgGgYQgDgMgDgTIgCgNIAAgLQgBgEADgBQACgDAEAAQAFAAACAGIACAMIABAMIAEAhQAJgWAJggQACgJAGAAQAGAAACAKIAGAdIAFAdIAFgVIALgqQABgFAFAAQAEAAACADQACACABADIgBAEQgGAZgKAfQgCAIgGAHQgCAEgFAAQgIgBgFgUg");
	this.shape_23.setTransform(22.9,-10.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIAkIgMggIgOgiIAAgEQAAgDACgCQACgDADAAQAFAAACAFIAUA2QAFgNAJgXIAHgRQACgFAEAAQADAAADACQACACAAADQAAADgMAfIgRAkQAAAHgGAAQgGAAgCgHg");
	this.shape_24.setTransform(0,-10.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQAAADgDACQgCACgCAAQgCAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAFgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgLAAgJAJg");
	this.shape_25.setTransform(-8.1,-10.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_26.setTransform(-16.7,-12.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgHAHAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_27.setTransform(-28.4,-13);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgHAIAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_28.setTransform(-32.8,-13);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQACADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_29.setTransform(-37.1,-12.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgFAAQgFABgGgYQgDgMgDgTIgCgNIgBgLQABgEACgBQACgDAEAAQAFAAACAGIACAMIAAAMIAFAhQAJgWAJggQADgJAFAAQAGAAACAKIAFAdIAGAdIAFgVIALgqQABgFAFAAQAEAAACADQACACAAADIAAAEQgGAZgKAfQgCAIgGAHQgCAEgEAAQgKgBgEgUg");
	this.shape_30.setTransform(-45,-10.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEAuQgCgDAAgCIgCgdIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBAMIgBAPIABAGIABAGQAAADgDADQgCACgDAAQgJgBAAgTIABgPIAAgNIAAgMIgBgMQAAgSAIAAQADAAADACQACADAAADIAAAFIgBAFIAAAIQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgFAGgDQAGgEAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAVQAAACgDADQgCACgDAAQgCAAgDgCg");
	this.shape_31.setTransform(-61.4,-10.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKAAgUQAAgRANgOQAOgNARAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgBACgDAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_32.setTransform(-71.8,-10.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_33.setTransform(-101.3,-10.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_34.setTransform(-110.3,-12.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgFA6QgCgCAAgEIAAgDIABgEIgBgMIAAgLIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASAAIASABQADAAACACQADADAAADQAAADgDADQgCACgDABIgSgBIgSgBIgGAAIADAjIABAhIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_35.setTransform(-119.8,-12.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_36.setTransform(108.6,-31.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQAAgRgGAAQgJABgGAJQgHAKgFANIgBAIIAAAIIAAAHIABAHQAAADgCACQgDADgCAAQgEAAgCgDQgCgCAAgDIgBgHIAAgHIABgWIABgWIAAgHIAAgIQAAgDABgCQADgDADAAQAIAAAAALIABAJQANgRAMAAQANAAAEALQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQAAADgBACQgDACgDAAQgHABgBgIg");
	this.shape_37.setTransform(102.5,-35.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_38.setTransform(93.9,-35.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAVA8IgMgTIgNgTIgOALIgBAXQAAAEgCACQgCACgEAAQgIAAAAgLIABgTIABgTIABgbIAAgbIAAgIIgBgIQAAgEACgCQADgCADAAQADAAACACQADACAAAEIAAAIIAAAJIAAAZIAAAaQAKgIAJgJIARgRQADgDADAAQADAAACACQADADAAADQAAADgCACIgYAXIARAYQAMAQAAAFQAAADgDACQgCACgDAAQgFAAgCgEg");
	this.shape_39.setTransform(85.5,-37.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_40.setTransform(76.4,-35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_41.setTransform(60.1,-37.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_42.setTransform(46.1,-35.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_43.setTransform(37,-37.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgHAHAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_44.setTransform(25.1,-37.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgHAIAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_45.setTransform(20.7,-37.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQACADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_46.setTransform(16.4,-37);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgFAAQgFABgGgYQgDgMgDgTIgCgNIgBgLQABgEACgBQACgDAEAAQAFAAACAGIACAMIABAMIAEAhQAJgWAJggQADgJAFAAQAGAAACAKIAFAdIAGAdIAFgVIALgqQABgFAFAAQAEAAACADQACACAAADIAAAEQgGAZgKAfQgCAIgGAHQgCAEgEAAQgKgBgEgUg");
	this.shape_47.setTransform(8.6,-34.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgBgsIgSgCQgHgBAAgGQAAgEACgCQADgCACAAIARABIAAgLIAAgJQAAgEABgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIALgBIAKAAQAFACAAAGQAAADgDACQgCACgDAAIgEAAIgDAAIgLACIACAtIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_48.setTransform(-5.5,-36.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJABAGIAGAOIABAEIABABQAAADgCACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAHgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgKAAgKAJg");
	this.shape_49.setTransform(-13.4,-35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_50.setTransform(-22.1,-37.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIAAgdQAAgHAIAAQAHAAAAAHIAAAdIgBAbIgBAmIgBASQAAAJgGgBQgIABAAgJg");
	this.shape_51.setTransform(-34,-37.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIAAgdQAAgHAHAAQAIAAAAAHIAAAdIgBAbIgBAmIAAASQgCAJgFgBQgIABAAgJg");
	this.shape_52.setTransform(-38.4,-37.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgSAAgIgKQgIgKAAgUQAAgRAMgOQANgNASAAQAGAAAJADQALAFgBAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_53.setTransform(-44.7,-35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_54.setTransform(-53.4,-37.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_55.setTransform(-62.5,-35.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_56.setTransform(-71.2,-35.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgIgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_57.setTransform(-78.9,-35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_58.setTransform(-87.6,-37.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_59.setTransform(-101.6,-35.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_60.setTransform(-110.6,-37.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgFA6QgCgCAAgEIAAgDIABgEIgBgMIAAgLIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASAAIASABQADAAACACQADADAAADQAAADgDADQgCACgDABIgSgBIgSgBIgGAAIADAjIABAhIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_61.setTransform(-120.1,-37.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_62.setTransform(-140.1,-35.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_63.setTransform(-148.7,-35.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_64.setTransform(-165,-35.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_65.setTransform(-186.1,-35.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_66.setTransform(-194.3,-35.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQACgCADAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIAKgBIALAAQAFACAAAGQAAADgCACQgDACgDAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_67.setTransform(-210.4,-36.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_68.setTransform(-234.2,-31.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQABgRgHAAQgJABgGAJQgIAKgDANIgBAIIgBAIIABAHIAAAHQAAADgCACQgCADgDAAQgEAAgCgDQgDgCABgDIgBgHIAAgHIABgWIABgWIgBgHIAAgIQABgDABgCQADgDADAAQAIAAAAALIABAJQANgRAMAAQAMAAAGALQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCACQgCACgDAAQgHABgBgIg");
	this.shape_69.setTransform(41.1,-10.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_70.setTransform(32.4,-10.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgFAAQgFABgGgYQgDgMgDgTIgCgNIAAgLQgBgEADgBQACgDAEAAQAFAAACAGIACAMIABAMIAEAhQAJgWAJggQACgJAGAAQAGAAACAKIAGAdIAFAdIAFgVIALgqQABgFAFAAQAEAAACADQACACABADIgBAEQgGAZgKAfQgCAIgGAHQgCAEgFAAQgIgBgFgUg");
	this.shape_71.setTransform(22.9,-10.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_72.setTransform(8.3,-10.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgIAkIgMggIgOgiIAAgEQAAgDACgCQACgDADAAQAFAAACAFIAUA2QAFgNAJgXIAHgRQACgFAEAAQADAAADACQACACAAADQAAADgMAfIgRAkQAAAHgGAAQgGAAgCgHg");
	this.shape_73.setTransform(0,-10.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQAAADgDACQgCACgCAAQgCAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAFgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgLAAgJAJg");
	this.shape_74.setTransform(-8.1,-10.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_75.setTransform(-16.7,-12.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgHAHAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_76.setTransform(-28.4,-13);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgHAIAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_77.setTransform(-32.8,-13);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQACADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_78.setTransform(-37.1,-12.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgFAAQgFABgGgYQgDgMgDgTIgCgNIgBgLQABgEACgBQACgDAEAAQAFAAACAGIACAMIAAAMIAFAhQAJgWAJggQADgJAFAAQAGAAACAKIAFAdIAGAdIAFgVIALgqQABgFAFAAQAEAAACADQACACAAADIAAAEQgGAZgKAfQgCAIgGAHQgCAEgEAAQgKgBgEgUg");
	this.shape_79.setTransform(-45,-10.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQAAgRgGAAQgJABgGAJQgHAKgFANIgBAIIAAAIIAAAHIABAHQAAADgCACQgDADgCAAQgEAAgCgDQgCgCAAgDIgBgHIAAgHIABgWIABgWIAAgHIAAgIQAAgDABgCQADgDADAAQAIAAAAALIABAJQANgRAMAAQANAAAEALQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQAAADgBACQgDACgDAAQgHABgBgIg");
	this.shape_80.setTransform(102.5,-35.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_81.setTransform(93.9,-35.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AAVA8IgMgTIgNgTIgOALIgBAXQAAAEgCACQgCACgEAAQgIAAAAgLIABgTIABgTIABgbIAAgbIAAgIIgBgIQAAgEACgCQADgCADAAQADAAACACQADACAAAEIAAAIIAAAJIAAAZIAAAaQAKgIAJgJIARgRQADgDADAAQADAAACACQADADAAADQAAADgCACIgYAXIARAYQAMAQAAAFQAAADgDACQgCACgDAAQgFAAgCgEg");
	this.shape_82.setTransform(85.5,-37.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_83.setTransform(76.4,-35);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_84.setTransform(68.7,-35.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_85.setTransform(60.1,-37.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_86.setTransform(46.1,-35.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_87.setTransform(37,-37.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgHAHAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_88.setTransform(25.1,-37.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgHAIAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_89.setTransform(20.7,-37.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQACADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_90.setTransform(16.4,-37);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgFAAQgFABgGgYQgDgMgDgTIgCgNIgBgLQABgEACgBQACgDAEAAQAFAAACAGIACAMIABAMIAEAhQAJgWAJggQADgJAFAAQAGAAACAKIAFAdIAGAdIAFgVIALgqQABgFAFAAQAEAAACADQACACAAADIAAAEQgGAZgKAfQgCAIgGAHQgCAEgEAAQgKgBgEgUg");
	this.shape_91.setTransform(8.6,-34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12,p:{x:-234.2,y:-31.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-210.4,y:-36.4}},{t:this.shape_8},{t:this.shape_7,p:{x:-194.3}},{t:this.shape_6,p:{x:-186.1,y:-35.1}},{t:this.shape_5},{t:this.shape_4,p:{x:-165,y:-35.1}},{t:this.shape_3},{t:this.shape_2,p:{x:-148.7,y:-35.4}},{t:this.shape_1,p:{x:-140.1,y:-35.1}},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_68},{t:this.shape_11},{t:this.shape_10},{t:this.shape_67},{t:this.shape_8},{t:this.shape_66},{t:this.shape_65},{t:this.shape_5},{t:this.shape_64},{t:this.shape_3},{t:this.shape_63},{t:this.shape_62},{t:this.shape},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:-101.6}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-62.5}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:-22.1}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:37}},{t:this.shape_42,p:{x:46.1}},{t:this.shape_41,p:{x:60.1}},{t:this.shape_7,p:{x:68.7}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:93.9}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-110.3,y:-12.9}},{t:this.shape_33,p:{x:-101.3,y:-10.8}},{t:this.shape_9,p:{x:-88.5,y:-12.1}},{t:this.shape_6,p:{x:-80.2,y:-10.8}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-16.7}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_4,p:{x:8.3,y:-10.8}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_1,p:{x:123.1,y:-10.8}},{t:this.shape_2,p:{x:131,y:-11.1}},{t:this.shape_12,p:{x:137.1,y:-7.1}}]},8).to({state:[{t:this.shape_13},{t:this.shape_68},{t:this.shape_11},{t:this.shape_10},{t:this.shape_67},{t:this.shape_8},{t:this.shape_7,p:{x:-194.3}},{t:this.shape_59,p:{x:-186.1}},{t:this.shape_5},{t:this.shape_55,p:{x:-165}},{t:this.shape_3},{t:this.shape_63},{t:this.shape_42,p:{x:-140.1}},{t:this.shape},{t:this.shape_61},{t:this.shape_34,p:{x:-110.6,y:-37.2}},{t:this.shape_38,p:{x:-101.6}},{t:this.shape_50,p:{x:-87.6}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_33,p:{x:-62.5,y:-35.1}},{t:this.shape_43,p:{x:-53.4}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_41,p:{x:-22.1}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_36},{t:this.shape_35},{t:this.shape_26,p:{x:-110.3}},{t:this.shape_6,p:{x:-101.3,y:-10.8}},{t:this.shape_9,p:{x:-88.5,y:-12.1}},{t:this.shape_4,p:{x:-80.2,y:-10.8}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_1,p:{x:123.1,y:-10.8}},{t:this.shape_2,p:{x:131,y:-11.1}},{t:this.shape_12,p:{x:137.1,y:-7.1}}]},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-50.8,123.9,26.3);


(lib.s2_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAlQgCgCAAgEIAAgEIgBgEQAAgEADgCQACgCACAAQAJAAAAAQQAAAEgDACQgCACgDAAQgCAAgDgCgAgFgTQgCgCAAgEIgBgDIAAgDQAAgDACgCQACgCAEAAQAIAAgBANQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape.setTransform(-147.1,-36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_1.setTransform(-153.7,-35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_2.setTransform(-162.3,-35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIABgHQgBgRgGAAQgIABgIAJQgHAKgEANIgBAIIAAAIIAAAHIABAHQAAADgCACQgDADgDAAQgDAAgCgDQgDgCAAgDIAAgHIgBgHIACgWIABgWIgBgHIAAgIQABgDACgCQACgDADAAQAHAAABALIAAAJQAOgRAMAAQANAAAEALQAEAHABAOIAAAIIgBAHQAAAGACAKIACARQAAADgCACQgDACgDAAQgHABgBgIg");
	this.shape_3.setTransform(-170,-35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_4.setTransform(-178.6,-35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQADgCACAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAABALIAAAIIAAAEIAAAFIALgBIALAAQAFACAAAGQAAADgCACQgCACgEAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_5.setTransform(-186.9,-36.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQACgCADAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIAKgBIALAAQAFACAAAGQAAADgDACQgBACgEAAIgEAAIgEAAIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_6.setTransform(-199.3,-36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_7.setTransform(-207.2,-35.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKAAgUQAAgRANgOQAOgNARAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgBACgDAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_8.setTransform(-214.9,-35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_9.setTransform(-223.1,-37.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(-234.2,-31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAYA7IgGgBIgLAAIgLABIgJABIgJAAIgDAAIgDAAQgFAAgCgGIgBgJQAAgSAKgLQAFgFAUgNQAKgIAEgEQAGgIAAgJQABgGgHgDQgGgEgGAAQgFAAgHAEIgLAJQgDACgDABQgIgBAAgGQAAgEADgCQAJgJAHgEQAKgFAIAAQANAAALAHQALAIgBALQABAJgDAGQgCAHgFAFQgGAHgNAIQgOAJgFAGQgIAIAAANIAQgCIAWAAQAHgBAEADQAIADgBAEQAAADgCADQgBACgEAAIgFgBg");
	this.shape_11.setTransform(-241,-37.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUA9QgCgCAAgEQAAgHARgmIgcg1IgEgFQgCgEAAgCQAAgDACgDQADgCADAAQAEAAABACQAOATAOAiIAMgbQAGgOAGgKQACgEAEAAQADAAADACQACACAAAEIgBADIgbA6QgKAVgEAPIgFAOQgCAGgFAAQgEAAgCgCg");
	this.shape_12.setTransform(76.9,-8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQAAADgDACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAFAGQAEAHAJAAQAGAAAFgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_13.setTransform(68.9,-10.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgHAIAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_14.setTransform(62.6,-13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_15.setTransform(56.2,-8.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_16.setTransform(42.7,-10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQACgCADAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIAKgBIALAAQAFACAAAGQAAADgCACQgDACgDAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_17.setTransform(34.8,-12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUA9QgCgCAAgEQAAgHARgmIgcg1IgEgFQgCgEAAgCQAAgDACgDQADgCADAAQAEAAABACQAOATAOAiIAMgbQAGgOAGgKQACgEAEAAQADAAADACQACACAAAEIgBADIgbA6QgKAVgEAPIgFAOQgCAGgFAAQgEAAgCgCg");
	this.shape_18.setTransform(21.8,-8.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbA2QgLgMAAgRQAAgVALgLQALgNARAAQAJAAAFADIAHAFQABghABgLQABgHAHAAQAHAAAAAHIgDAxIgBAVQAAAaADAOIAAACQAAACgCACQgDADgDAAQgEAAgDgHQgGAEgFACQgHACgFAAQgQAAgLgKgAgRACQgHAHAAAPQAAALAHAHQAHAHAKAAQAFABAFgDIAJgHIACgCIAAgOIAAgJIAAgJQgDgGgFgCQgFgDgHAAQgMgBgGAIg");
	this.shape_19.setTransform(13.2,-12.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQgBADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgKAAgJAJg");
	this.shape_20.setTransform(4.4,-10.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_21.setTransform(-12.1,-10.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_22.setTransform(-33.3,-10.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_23.setTransform(-41.6,-10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgEAAQgGABgGgYQgDgMgDgTIgBgNIgBgLQAAgEACgBQACgDAEAAQAFAAABAGIADAMIABAMIAEAhQAJgWAJggQACgJAGAAQAGAAACAKIAGAdIAFAdIAGgVIAKgqQABgFAGAAQADAAACADQADACAAADIgBAEQgGAZgKAfQgCAIgGAHQgCAEgFAAQgIgBgFgUg");
	this.shape_24.setTransform(-51.6,-10.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEAuQgCgDAAgCIgCgdIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBAMIgBAPIABAGIABAGQAAADgDADQgCACgDAAQgJgBAAgTIABgPIAAgNIAAgMIgBgMQAAgSAIAAQADAAADACQACADAAADIAAAFIgBAFIAAAIQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgFAGgDQAGgEAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAVQAAACgDADQgCACgDAAQgCAAgDgCg");
	this.shape_25.setTransform(-75.8,-10.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_26.setTransform(-94.6,-10.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQACgCADAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIAKgBIALAAQAFACAAAGQAAADgCACQgDACgDAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_27.setTransform(-102.9,-12.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_28.setTransform(-115.7,-10.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_29.setTransform(-124.7,-12.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFA6QgCgCAAgEIAAgDIABgEIgBgMIAAgLIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASAAIASABQADAAACACQADADAAADQAAADgDADQgCACgDABIgSgBIgSgBIgGAAIADAjIABAhIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_30.setTransform(-134.2,-12.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_31.setTransform(137.2,-31.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_32.setTransform(130.9,-35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_33.setTransform(122.4,-33);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQABgRANgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQgBADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgKAAgJAJg");
	this.shape_34.setTransform(114.2,-35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_35.setTransform(101.7,-35.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AASAlQgKAGgMAAQgKgBgHgEQgHgFgCgJQgDgWAAgOQAAgMADgNQABgHAGAAQADAAADACQACACAAAEIgBALIgBANIABAUQAAAKACAGIAFACIAFAAQAKAAALgDIAAgPIAAgPQAAgRABgMQABgHAHgBQADABADACQACACAAADIgCAeIAAAQIABAQIAAAGIAAAFQAAAEgCACQgCACgEAAQgGAAgBgIg");
	this.shape_36.setTransform(93.5,-35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_37.setTransform(85,-35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_38.setTransform(76.4,-37.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQAAgRgGAAQgJABgGAJQgHAKgFANIgBAIIAAAIIAAAHIABAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCAAgDIgBgHIgBgHIACgWIABgWIAAgHIAAgIQAAgDACgCQACgDADAAQAIAAAAALIAAAJQANgRANAAQANAAAEALQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQAAADgBACQgDACgDAAQgHABgBgIg");
	this.shape_39.setTransform(62.8,-35.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQABgRANgOQANgNAQAAQAIAAAIADQALAFgBAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQgBADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgKAAgJAJg");
	this.shape_40.setTransform(54.4,-35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQABgRgHAAQgJABgGAJQgIAKgDANIgCAIIAAAIIAAAHIABAHQAAADgCACQgCADgDAAQgEAAgCgDQgDgCABgDIgBgHIAAgHIABgWIABgWIAAgHIAAgIQAAgDABgCQADgDADAAQAIAAAAALIABAJQANgRAMAAQAMAAAGALQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCACQgCACgDAAQgHABgBgIg");
	this.shape_41.setTransform(41.4,-35.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJABAGIAGAOIABAEIABABQAAADgCACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAHgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgKAAgKAJg");
	this.shape_42.setTransform(33,-35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_43.setTransform(24.5,-33);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_44.setTransform(16.1,-35.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_45.setTransform(7,-37.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_46.setTransform(-6.9,-35.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgEAuQgCgDAAgCIgCgdIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBAMIgBAPIABAGIABAGQAAADgDADQgCACgDAAQgJgBAAgTIABgPIAAgNIAAgMIgBgMQAAgSAIAAQADAAADACQACADAAADIAAAFIgBAFIAAAIQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgFAGgDQAGgEAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAVQAAACgDADQgCACgDAAQgCAAgDgCg");
	this.shape_47.setTransform(-17.6,-35);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQABgRANgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQgBADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgKAAgJAJg");
	this.shape_48.setTransform(-28,-35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_49.setTransform(-36.5,-33);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgHAIAAQAHAAAAAHIAAAdIgBAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_50.setTransform(-47.6,-37.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIAAgdQAAgHAIAAQAHAAAAAHIAAAdIgBAbIgBAmIgBASQAAAJgGgBQgIABAAgJg");
	this.shape_51.setTransform(-52,-37.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgHgKAAgUQAAgRAMgOQAOgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIABABQAAADgCACQgCACgEAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_52.setTransform(-58.3,-35);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_53.setTransform(-67,-37.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_54.setTransform(-76.1,-35.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKAAgUQAAgRANgOQAOgNARAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgBACgDAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_55.setTransform(-92.5,-35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_56.setTransform(-101.2,-37.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_57.setTransform(-115.2,-35.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_58.setTransform(-124.2,-37.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFA6QgCgCAAgEIAAgDIABgEIgBgMIAAgLIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASAAIASABQADAAACACQADADAAADQAAADgDADQgCACgDABIgSgBIgSgBIgGAAIADAjIABAhIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_59.setTransform(-133.7,-37.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_60.setTransform(-153.7,-35.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_61.setTransform(-162.3,-35.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_62.setTransform(-178.6,-35.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_63.setTransform(-207.2,-35.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKAAgUQAAgRANgOQAOgNARAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgBACgDAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_64.setTransform(-214.9,-35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_65.setTransform(-234.2,-31.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_66.setTransform(-25.2,-10.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_67.setTransform(-33.3,-10.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_68.setTransform(-41.6,-10.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgEAAQgGABgGgYQgDgMgDgTIgBgNIgBgLQAAgEACgBQACgDAEAAQAFAAABAGIADAMIABAMIAEAhQAJgWAJggQACgJAGAAQAGAAACAKIAGAdIAFAdIAGgVIAKgqQABgFAGAAQADAAACADQADACAAADIgBAEQgGAZgKAfQgCAIgGAHQgCAEgFAAQgIgBgFgUg");
	this.shape_69.setTransform(-51.6,-10.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQABgRgHAAQgJABgGAJQgIAKgDANIgCAIIAAAIIAAAHIABAHQAAADgCACQgCADgDAAQgEAAgCgDQgDgCABgDIgBgHIAAgHIABgWIABgWIAAgHIAAgIQAAgDABgCQADgDADAAQAIAAAAALIABAJQANgRAMAAQAMAAAGALQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCACQgCACgDAAQgHABgBgIg");
	this.shape_70.setTransform(41.4,-35.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJABAGIAGAOIABAEIABABQAAADgCACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAHgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgKAAgKAJg");
	this.shape_71.setTransform(33,-35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_72.setTransform(24.5,-33);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_73.setTransform(16.1,-35.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_74.setTransform(7,-37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10,p:{x:-234.2,y:-31.4}},{t:this.shape_9},{t:this.shape_8,p:{x:-214.9,y:-35}},{t:this.shape_7,p:{x:-207.2}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-178.6,y:-35.1}},{t:this.shape_3},{t:this.shape_2,p:{x:-162.3,y:-35.4}},{t:this.shape_1,p:{x:-153.7,y:-35.1}},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_65},{t:this.shape_9},{t:this.shape_64},{t:this.shape_63},{t:this.shape_6},{t:this.shape_5},{t:this.shape_62},{t:this.shape_3},{t:this.shape_61},{t:this.shape_60},{t:this.shape},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_7,p:{x:-84.8}},{t:this.shape_54,p:{x:-76.1}},{t:this.shape_53,p:{x:-67}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:-6.9}},{t:this.shape_45,p:{x:7}},{t:this.shape_44,p:{x:16.1}},{t:this.shape_43,p:{x:24.5}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-115.7,y:-10.8}},{t:this.shape_27},{t:this.shape_26,p:{x:-94.6,y:-10.8}},{t:this.shape_8,p:{x:-86.2,y:-10.7}},{t:this.shape_25},{t:this.shape_2,p:{x:-66,y:-11.1}},{t:this.shape_24},{t:this.shape_23,p:{x:-41.6}},{t:this.shape_22,p:{x:-33.3,y:-10.8}},{t:this.shape_4,p:{x:-25.2,y:-10.8}},{t:this.shape_21},{t:this.shape_1,p:{x:-3.9,y:-10.8}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_10,p:{x:83.3,y:-7.1}}]},8).to({state:[{t:this.shape_11},{t:this.shape_65},{t:this.shape_9},{t:this.shape_64},{t:this.shape_63},{t:this.shape_6},{t:this.shape_5},{t:this.shape_54,p:{x:-178.6}},{t:this.shape_3},{t:this.shape_61},{t:this.shape_46,p:{x:-153.7}},{t:this.shape},{t:this.shape_59},{t:this.shape_58},{t:this.shape_44,p:{x:-115.2}},{t:this.shape_53,p:{x:-101.2}},{t:this.shape_55},{t:this.shape_7,p:{x:-84.8}},{t:this.shape_28,p:{x:-76.1,y:-35.1}},{t:this.shape_45,p:{x:-67}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_43,p:{x:-36.5}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_26,p:{x:-6.9,y:-35.1}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_22,p:{x:101.7,y:-35.1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_23,p:{x:-115.7}},{t:this.shape_27},{t:this.shape_4,p:{x:-94.6,y:-10.8}},{t:this.shape_8,p:{x:-86.2,y:-10.7}},{t:this.shape_25},{t:this.shape_2,p:{x:-66,y:-11.1}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_21},{t:this.shape_1,p:{x:-3.9,y:-10.8}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_10,p:{x:83.3,y:-7.1}}]},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-50.8,110.3,26.3);


(lib.s2_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAlQgCgCAAgEIAAgEIgBgEQAAgEADgCQACgCACAAQAJAAAAAQQAAAEgDACQgCACgDAAQgCAAgDgCgAgFgTQgDgCAAgEIAAgDIAAgDQAAgDACgCQADgCADAAQAHAAAAANQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape.setTransform(-124.3,-36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_1.setTransform(-130.8,-35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_2.setTransform(-139.5,-35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIABgHQgBgRgGAAQgIABgIAJQgGAKgFANIAAAIIgBAIIABAHIAAAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCgBgDIAAgHIgBgHIACgWIABgWIgBgHIAAgIQAAgDADgCQACgDADAAQAHAAABALIAAAJQAOgRAMAAQAMAAAFALQAEAHAAAOIAAAIIAAAHQAAAGACAKIACARQAAADgCACQgDACgDAAQgHABgBgIg");
	this.shape_3.setTransform(-147.2,-35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_4.setTransform(-155.8,-35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQACgCADAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIAKgBIALAAQAFACAAAGQAAADgCACQgDACgDAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_5.setTransform(-164.1,-36.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQACgCADAAIARABIAAgLIAAgJQAAgEABgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIALgBIAKAAQAFACAAAGQAAADgDACQgCACgDAAIgEAAIgDAAIgLACIACAtIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_6.setTransform(-176.4,-36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQAAgRgGAAQgJABgGAJQgHAKgFANIgBAIIAAAIIAAAHIABAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCAAgDIgBgHIgBgHIACgWIABgWIAAgHIAAgIQAAgDACgCQACgDADAAQAIAAAAALIAAAJQANgRANAAQANAAAEALQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQAAADgBACQgDACgDAAQgHABgBgIg");
	this.shape_7.setTransform(-184.2,-35.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_8.setTransform(-192.8,-35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_9.setTransform(-201.5,-35.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_10.setTransform(-209.4,-35.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_11.setTransform(-217.5,-35.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggA8QgCgCAAgDIAAgXIABggIACggIAAgLIABgLQABgHAGABIAHgBIAMAAQANAAANAJQANALAAAPQAAAUgOAKQgOAKgRAAIgKgBIAAAqQAAADgCACQgCACgDAAQgDAAgCgCgAgRggIgCAfIAJABQAMAAAJgGQAKgHAAgNQAAgJgJgGQgJgGgJAAIgGABIgFAAg");
	this.shape_12.setTransform(-225.7,-37.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(-236.7,-31.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACA9IgPAAIgHAAQgEgCAAgFQAAgHAMgBIAEAAIADAAIgBgLIgBgKIACgeQACgUAAgKQgKAIgDAAQgEAAgCgCQgCgDAAgDQAAgDAHgGIAMgJQAGgHAGAAQAFAAAAAGIgBAGIAAAFIAAAHIAAAJIgBAaIgCAaIABAKIABALIAIAAQADAAACACQACADAAACQAAAEgCACQgCACgDAAg");
	this.shape_14.setTransform(-242.2,-37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUA9QgCgCAAgEQAAgHARgmIgcg1IgEgFQgCgEAAgCQAAgDACgDQADgCADAAQAEAAABACQAOATAOAiIAMgbQAGgOAGgKQACgEAEAAQADAAADACQACACAAAEIgBADIgbA6QgKAVgEAPIgFAOQgCAGgFAAQgEAAgCgCg");
	this.shape_15.setTransform(34.3,-8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbA2QgLgMAAgRQAAgVALgLQALgNARAAQAJAAAFADIAHAFQABghABgLQABgHAHAAQAHAAAAAHIgDAxIgBAVQAAAaADAOIAAACQAAACgDACQgCADgDAAQgEAAgDgHQgGAEgFACQgHACgFAAQgQAAgLgKgAgSACQgGAHAAAPQAAALAHAHQAHAHAKAAQAFABAFgDIAJgHIACgCIAAgOIAAgJIAAgJQgDgGgFgCQgFgDgHAAQgMgBgHAIg");
	this.shape_16.setTransform(25.7,-12.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgIgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_17.setTransform(16.9,-10.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_18.setTransform(-20.8,-10.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgIgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_19.setTransform(-29,-10.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEAuQgCgDAAgCIgCgdIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBAMIgBAPIABAGIABAGQAAADgDADQgCACgDAAQgJgBAAgTIABgPIAAgNIAAgMIgBgMQAAgSAIAAQADAAADACQACADAAADIAAAFIgBAFIAAAIQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgFAGgDQAGgEAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAVQAAACgDADQgCACgDAAQgCAAgDgCg");
	this.shape_20.setTransform(-51.8,-10.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgSAAgIgKQgIgKAAgUQAAgRAMgOQANgNASAAQAGAAAJADQALAFgBAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_21.setTransform(-62.2,-10.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgBgsIgSgCQgHgBAAgGQAAgEACgCQADgCACAAIARABIAAgLIAAgJQAAgEABgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIALgBIAKAAQAFACAAAGQAAADgDACQgCACgDAAIgEAAIgDAAIgLACIACAtIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_22.setTransform(-78.9,-12.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_23.setTransform(-100.7,-12.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFA6QgCgCAAgEIAAgDIABgEIgBgMIAAgLIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASAAIASABQADAAACACQADADAAADQAAADgDADQgCACgDABIgSgBIgSgBIgGAAIADAjIABAhIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_24.setTransform(-110.2,-12.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_25.setTransform(188.4,-31.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCABQgDAFgFAAQgFABgGgYQgDgMgDgTIgCgNIgBgLQABgEACgBQACgDAEAAQAFAAACAGIACAMIABAMIAEAhQAJgWAJggQADgJAFAAQAGAAACAKIAGAdIAFAdIAFgVIALgqQABgFAFAAQAEAAACADQACACAAADIAAAEQgGAZgKAfQgCAIgGAHQgCAEgEAAQgKgBgEgUg");
	this.shape_26.setTransform(180.9,-34.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_27.setTransform(171.1,-35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIABgHQgBgRgGAAQgIABgIAJQgHAKgEANIgBAIIAAAIIAAAHIABAHQAAADgCACQgDADgDAAQgDAAgCgDQgDgCAAgDIAAgHIgBgHIACgWIABgWIgBgHIAAgIQABgDACgCQACgDADAAQAHAAABALIAAAJQAOgRAMAAQANAAAEALQAEAHABAOIAAAIIgBAHQAAAGACAKIACARQAAADgCACQgDACgDAAQgHABgBgIg");
	this.shape_28.setTransform(163,-35.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_29.setTransform(141.7,-37.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_30.setTransform(132.6,-33);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQADADAAADIgBASIgBASIAAAOIABAOQAAADgDACQgCADgCAAQgEAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDACAAQAEAAADADQADADgBADQABAEgDADQgDACgEAAQgCAAgDgCg");
	this.shape_31.setTransform(126.4,-37);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_32.setTransform(120.4,-35.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_33.setTransform(107.1,-33);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIABgHQgBgRgGAAQgIABgIAJQgGAKgFANIAAAIIgBAIIABAHIAAAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCgBgDIAAgHIgBgHIACgWIABgWIgBgHIAAgIQAAgDADgCQACgDADAAQAIAAAAALIAAAJQAOgRAMAAQAMAAAFALQAEAHAAAOIAAAIIAAAHQAAAGACAKIACARQAAADgCACQgDACgDAAQgHABgBgIg");
	this.shape_34.setTransform(99,-35.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADABADIgBASIgBASIAAAOIABAOQgBADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_35.setTransform(92.5,-37);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQABgRgHAAQgJABgGAJQgIAKgDANIgBAIIgBAIIABAHIAAAHQAAADgCACQgCADgDAAQgEAAgCgDQgDgCABgDIgBgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgDADAAQAIAAAAALIABAJQANgRAMAAQAMAAAGALQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCACQgCACgDAAQgHABgBgIg");
	this.shape_36.setTransform(86.1,-35.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIACgSIAAgSQAAgDACgDQADgCACAAQADAAACACQACADAAADIgBASIAAASIAAAOIAAAOQABADgDACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQACgDAEAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgEAAgCgCg");
	this.shape_37.setTransform(71.2,-37);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_38.setTransform(64.4,-33);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_39.setTransform(56.1,-35.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_40.setTransform(47,-37.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQADADAAADQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_41.setTransform(27.4,-37);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_42.setTransform(15.9,-35.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgEAuQgCgDAAgCIgCgdIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBAMIgBAPIABAGIABAGQAAADgDADQgCACgDAAQgJgBAAgTIABgPIAAgNIAAgMIgBgMQAAgSAIAAQADAAADACQACADAAADIAAAFIgBAFIAAAIQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgFAGgDQAGgEAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAVQAAACgDADQgCACgDAAQgCAAgDgCg");
	this.shape_43.setTransform(5.3,-35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgIgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_44.setTransform(-5.1,-35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_45.setTransform(-13.6,-33);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgHAIAAQAHAAAAAHIgBAdIAAAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_46.setTransform(-24.7,-37.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgHAIAAQAHAAAAAHIAAAdIgBAbIgBAmIgBASQgBAJgFgBQgIABAAgJg");
	this.shape_47.setTransform(-29.1,-37.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJABAGIAGAOIABAEIABABQAAADgCACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAHgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgKAAgKAJg");
	this.shape_48.setTransform(-35.4,-35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_49.setTransform(-44.1,-37.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_50.setTransform(-53.3,-35.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_51.setTransform(-61.9,-35.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKABgUQgBgRANgOQANgNASAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJABAGIAFAOIACAEIAAABQAAADgCACQgBACgEAAQgBAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAJgGQgDgUAAgKIABgHIABgJIgFgCIgDAAQgMAAgIAJg");
	this.shape_52.setTransform(-69.7,-35);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_53.setTransform(-78.4,-37.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_54.setTransform(-92.3,-35.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHAOQAAAegDAFQgCAEgEAAQgEAAgCgBQgCgCAAgEIAAgDIABgLIAAgMIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAIQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAADQAAADgCABQgCADgDAAQgGAAgCgGg");
	this.shape_55.setTransform(-101.4,-37.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgFA6QgCgCAAgEIAAgDIABgEIgBgMIAAgLIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASAAIASABQADAAACACQADADAAADQAAADgDADQgCACgDABIgSgBIgSgBIgGAAIADAjIABAhIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_56.setTransform(-110.9,-37.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_57.setTransform(-130.8,-35.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_58.setTransform(-139.5,-35.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_59.setTransform(-155.8,-35.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgCQACgCADAAIARABIgBgLIAAgJQAAgEACgCQADgCADAAQAGAAACALIAAAIIAAAEIAAAFIAKgBIALAAQAFACAAAGQAAADgCACQgDACgDAAIgDAAIgFAAIgKACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_60.setTransform(-164.1,-36.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQAAgRgGAAQgJABgGAJQgHAKgFANIgBAIIAAAIIAAAHIABAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCAAgDIgBgHIgBgHIACgWIABgWIAAgHIAAgIQAAgDACgCQACgDADAAQAIAAAAALIAAAJQANgRANAAQANAAAEALQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQAAADgBACQgDACgDAAQgHABgBgIg");
	this.shape_61.setTransform(-184.2,-35.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_62.setTransform(-192.8,-35.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_63.setTransform(-201.5,-35.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_64.setTransform(-209.4,-35.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_65.setTransform(-217.5,-35.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_66.setTransform(-236.7,-31.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_67.setTransform(-12.7,-10.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_68.setTransform(-20.8,-10.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgIgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_69.setTransform(-29,-10.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_70.setTransform(107.1,-33);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AATAmIgCgRIgBgRIAAgHIABgHQgBgRgGAAQgIABgIAJQgGAKgFANIAAAIIgBAIIABAHIAAAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCgBgDIAAgHIgBgHIACgWIABgWIgBgHIAAgIQAAgDADgCQACgDADAAQAIAAAAALIAAAJQAOgRAMAAQAMAAAFALQAEAHAAAOIAAAIIAAAHQAAAGACAKIACARQAAADgCACQgDACgDAAQgHABgBgIg");
	this.shape_71.setTransform(99,-35.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADABADIgBASIgBASIAAAOIABAOQgBADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_72.setTransform(92.5,-37);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQABgRgHAAQgJABgGAJQgIAKgDANIgBAIIgBAIIABAHIAAAHQAAADgCACQgCADgDAAQgEAAgCgDQgDgCABgDIgBgHIAAgHIABgWIABgWIgBgHIAAgIQAAgDACgCQADgDADAAQAIAAAAALIABAJQANgRAMAAQAMAAAGALQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCACQgCACgDAAQgHABgBgIg");
	this.shape_73.setTransform(86.1,-35.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQAAgRgGAAQgJABgGAJQgHAKgFANIgBAIIAAAIIAAAHIABAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCAAgDIgBgHIgBgHIACgWIABgWIAAgHIAAgIQAAgDACgCQACgDADAAQAIAAAAALIAAAJQANgRANAAQANAAAEALQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQAAADgBACQgDACgDAAQgHABgBgIg");
	this.shape_74.setTransform(77.7,-35.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIACgSIAAgSQAAgDACgDQADgCACAAQADAAACACQACADAAADIgBASIAAASIAAAOIAAAOQABADgDACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQACgDAEAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgEAAgCgCg");
	this.shape_75.setTransform(71.2,-37);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgaA9QgKgDAAgFQAAgIAHABIAJABQAHACAHgBQAOAAAGgOQAEgKAAgUQgEAIgGAEQgGAEgGAAQgOAAgJgKQgJgKAAgOQAAgVAMgNQANgNAUAAQAHAAAFACQAFACADAEQAIAAAAAJIgBAOIgDAPIgBAZQgBAQgDAKQgDANgIAGQgJAHgRAAQgKAAgHgBgAgOgnQgHAKAAAOQAAALAEAFQAFAGAIAAQAHAAAIgIQAGgIABgIIAEgaIgHgFIgHgBQgOABgIAJg");
	this.shape_76.setTransform(64.4,-33);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgPARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFAAAHgDQAJgCADgEQADgFADAAQADAAACACQACADAAACQAAAJgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_77.setTransform(56.1,-35.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_78.setTransform(47,-37.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_79.setTransform(33.1,-35.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQADADAAADQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_80.setTransform(27.4,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13,p:{x:-236.7,y:-31.4}},{t:this.shape_12},{t:this.shape_11,p:{x:-217.5,y:-35.1}},{t:this.shape_10,p:{x:-209.4,y:-35.1}},{t:this.shape_9,p:{x:-201.5}},{t:this.shape_8,p:{x:-192.8,y:-35.1}},{t:this.shape_7,p:{x:-184.2}},{t:this.shape_6},{t:this.shape_5,p:{x:-164.1}},{t:this.shape_4,p:{x:-155.8,y:-35.1}},{t:this.shape_3},{t:this.shape_2,p:{x:-139.5,y:-35.4}},{t:this.shape_1,p:{x:-130.8,y:-35.1}},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_66},{t:this.shape_12},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_6},{t:this.shape_60},{t:this.shape_59,p:{x:-155.8}},{t:this.shape_3},{t:this.shape_58,p:{x:-139.5}},{t:this.shape_57,p:{x:-130.8}},{t:this.shape},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:-92.3}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:-61.9}},{t:this.shape_50,p:{x:-53.3}},{t:this.shape_49,p:{x:-44.1}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:15.9}},{t:this.shape_41},{t:this.shape_9,p:{x:33.1}},{t:this.shape_40,p:{x:47}},{t:this.shape_39,p:{x:56.1}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_7,p:{x:77.7}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:107.1}},{t:this.shape_32,p:{x:120.4}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_5,p:{x:150}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_10,p:{x:-91.7,y:-10.8}},{t:this.shape_22},{t:this.shape_8,p:{x:-70.6,y:-10.8}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_2,p:{x:-42,y:-11.1}},{t:this.shape_19,p:{x:-29,y:-10.7}},{t:this.shape_18,p:{x:-20.8,y:-10.8}},{t:this.shape_4,p:{x:-12.7,y:-10.8}},{t:this.shape_11,p:{x:0.4,y:-10.8}},{t:this.shape_1,p:{x:8.6,y:-10.8}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_13,p:{x:40.8,y:-7.1}}]},8).to({state:[{t:this.shape_14},{t:this.shape_66},{t:this.shape_12},{t:this.shape_32,p:{x:-217.5}},{t:this.shape_59,p:{x:-209.4}},{t:this.shape_58,p:{x:-201.5}},{t:this.shape_57,p:{x:-192.8}},{t:this.shape_7,p:{x:-184.2}},{t:this.shape_6},{t:this.shape_60},{t:this.shape_54,p:{x:-155.8}},{t:this.shape_3},{t:this.shape_51,p:{x:-139.5}},{t:this.shape_50,p:{x:-130.8}},{t:this.shape},{t:this.shape_56},{t:this.shape_55},{t:this.shape_42,p:{x:-92.3}},{t:this.shape_49,p:{x:-78.4}},{t:this.shape_52},{t:this.shape_9,p:{x:-61.9}},{t:this.shape_39,p:{x:-53.3}},{t:this.shape_40,p:{x:-44.1}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_33,p:{x:-13.6}},{t:this.shape_19,p:{x:-5.1,y:-35}},{t:this.shape_43},{t:this.shape_10,p:{x:15.9,y:-35.1}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_18,p:{x:120.4,y:-35.1}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_5,p:{x:150}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_8,p:{x:-91.7,y:-10.8}},{t:this.shape_22},{t:this.shape_4,p:{x:-70.6,y:-10.8}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_2,p:{x:-42,y:-11.1}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_11,p:{x:0.4,y:-10.8}},{t:this.shape_1,p:{x:8.6,y:-10.8}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_13,p:{x:40.8,y:-7.1}}]},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-50.8,133.2,26.3);


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


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3366").ss(3,1,1).p("EAlbAVBMhK1AAAMAAAgqBMBK1AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DDF5FF","#3399FF"],[0,1],0,-134.5,0.1,134.6).s().p("EglaAVBMAAAgqBMBK1AAAMAAAAqBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-240.9,-135.9,481.9,272), null);


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


(lib.contentScene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCACgDIABglIgBgKIAAgJQgBgLAKAAQADAAADADQAKgDAKgBIAQgCQAWAAAMAFQAGADAAAGQAAADgCADQgDADgEAAIgCAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIAAAMIAAALQgBATADAEQACACAMAAIAPAAIARgBIAFAAIAFgBQAKAAgBAJQABAIgIABQgJACgaAAQgbAAgIgHg");
	this.shape.setTransform(94.6,-95.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgiA9QgRgIAAgNQAAgEADgCQACgCAEAAQAEAAADAFQAFAHADACQAIAEAOAAQANABALgGQAPgIAAgNQAAgLgMgHQgLgFgOAAQgOgBgKgFQgNgHAAgNQAAgQASgMQARgNARAAQAJAAALADQAOADAAAHQAAAHgIAAIgMgCIgOgCQgNABgJAHQgKAGAAAKQAAAHANADQAFABANABQAUACALALQAKAJAAAPQAAAUgTANQgRALgVAAQgQAAgNgGg");
	this.shape_1.setTransform(82.5,-94.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag7BFQgCgDAAgEIAAgLIABgLIAAgQIABgRIgBgQIAAgSIgBgQIAAgRQAAgEADgDQAEgEADAAQAFAAAHALQAWAgARAWQAVAZAYAXIAAgLIAAgLQAAglgDgXIgDgKIgBgJQAAgKAJAAQAQAAAAA5IgBAcIAAAdIgBAOQgCAJgIAAQgEAAgIgGQgjgigug/IAAAUIAAATIAAAWIAAAWQABAYgKAAQgFAAgDgDg");
	this.shape_2.setTransform(69.2,-95.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQABgLAIAAQAEAAADADQAKgDAJgBIARgCQAVAAANAFQAGADAAAGQAAADgCADQgCADgEAAIgDAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIgBAMIAAALQABATACAEQACACAMAAIAQAAIAQgBIAFAAIAFgBQAKAAAAAJQAAAIgIABQgIACgbAAQgbAAgIgHg");
	this.shape_3.setTransform(56.5,-95.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgFBAQgDgCAAgEIAAgEIABgEIgBgNIAAgNIgCgiIgDgjIgIAAQgTAAgLgDQgHgCAAgHQAAgDACgDQADgDAEAAIAOACIAOABIAQAAIAPgBIAUABIAUABQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAIgUgBIgUgBIgGAAQAAAMADAcIABAmIABAJIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgDg");
	this.shape_4.setTransform(45.2,-95.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgoBEQgEgEAAgDIAAgaIACgjIACgkQgBgJACgQQAAgEACgBQANgEAPAAQAOAAAOAKQARAMAAATQAAAWgSAMQAOAGAGAGQAGAIAAAIQAAAKgLAKQgIAHgJADQgSAIgfAAQgEAAgDgDgAgbAjIAAASQAYAAANgHQAGgBAGgGQAGgEgBgCQAAgEgLgGQgIgEgIgCIgJgBIgDAAIgEAAIgKgBIgBAUgAgWg0IgBAQIgCAiIAOABQAMgBAIgHQAJgJAAgLQAAgJgJgHQgJgHgJAAIgNAAg");
	this.shape_5.setTransform(27.7,-95.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_6.setTransform(16.2,-95.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQAAgLAKAAQADAAADADQAKgDAKgBIAQgCQAWAAAMAFQAGADAAAGQAAADgCADQgDADgEAAIgCAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIAAAMIAAALQgBATADAEQACACAMAAIAPAAIARgBIAFAAIAFgBQAKAAgBAJQABAIgIABQgJACgaAAQgbAAgIgHg");
	this.shape_7.setTransform(5,-95.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgPBAQgKgagNgyIgIgYQgFgSAAgGQAAgEADgCQACgCAEAAQAHAAACAGIADAQIAJAdQAIAgAIAYIABgBIAWg/IAHgWQAFgNAGgGQADgEAEAAQADAAAEADQACADAAADQAAADgBACQgGAIgDAJIgIAUIgXA/IgKAWQgBAFgGAAQgGAAgDgHg");
	this.shape_8.setTransform(-6.1,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},405).to({state:[]},6).wait(219));

	// Layer 12
	this.instance = new lib.s2_s1();
	this.instance.parent = this;
	this.instance.setTransform(65.5,17.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).to({_off:true},329).wait(225));

	// Layer 5
	this.instance_1 = new lib.s2_s3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.4,143.1);

	this.instance_2 = new lib.s2_s2("single",12);
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.2,81.1);

	this.instance_3 = new lib.s2_s1("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(65.5,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},289).to({state:[]},116).wait(225));

	// Layer 3
	this.instance_4 = new lib.s2_s2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(65.2,81.1);

	this.instance_5 = new lib.s2_s1("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(65.5,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},168).to({state:[]},237).to({state:[]},104).wait(121));

	// Layer 4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgEQAEgDADAAQAFAAADADQADAEAAADQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_9.setTransform(271.8,-58.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEABQADAAAEADQACACAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgHQADgBAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAHAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_10.setTransform(264.8,-63.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_11.setTransform(256.6,-62.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMACgQQACgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQABAKADAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgCAhIAAASIAAATIABAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_12.setTransform(247.4,-62.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAmQgNgLAAgSQAAgSAMgSQAOgWAPAAQAJAAAKAFQANAFAAAHQAAADgBADQgDADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgEgEQgGgEgLAAQgIAAgJAQQgIAPAAAKQAAALAIAHQAIAGAKAAQAFAAAGgDIAKgFIAEgCQADAAADADQACADAAADQAAAGgNAHQgMAEgIAAQgRABgMgMg");
	this.shape_13.setTransform(238.1,-62.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAmQgNgLAAgSQAAgSAMgSQAOgWAPAAQAJAAAKAFQANAFAAAHQAAADgCADQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgEgEQgFgEgMAAQgIAAgJAQQgIAPAAAKQAAALAIAHQAHAGALAAQAFAAAGgDIAKgFIAEgCQADAAADADQACADAAADQAAAGgNAHQgMAEgIAAQgRABgMgMg");
	this.shape_14.setTransform(228.9,-62.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAlQgMgMgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgLgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_15.setTransform(219.4,-62.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGANQAEAIAAAQIAAAIIAAAIIACATQACAMAAAGQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_16.setTransform(204.9,-62.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAlQgMgMgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgLgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_17.setTransform(195.2,-62.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIBAQgCgDAAgEIAAgQIgBgPIABgVIABgUQAAgDACgDQADgCADgBQADABADACQACADAAADIAAAUIgBAVIAAAPIAAAQQAAAEgCADQgDACgCAAQgEAAgDgCgAgFgwQgDgDAAgEQAAgEADgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_18.setTransform(188.3,-64.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIABgKIgDgyIgTgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgCADgEAAIgFAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_19.setTransform(181.3,-64.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAmQgNgLAAgSQAAgSAMgSQANgWAQAAQAIAAALAFQAOAFAAAHQAAADgDADQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgDgEQgGgEgLAAQgIAAgJAQQgIAPAAAKQAAALAIAHQAHAGALAAQAFAAAGgDIALgFIADgCQAEAAACADQACADAAADQAAAGgOAHQgLAEgIAAQgRABgMgMg");
	this.shape_20.setTransform(172.5,-62.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAcAtIgGgHIgPAIIgJABQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCALIAAASQAAALABAGIAGAQIACAEIAAABQAAAEgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKgBQAIAAAGgDIAJgHQgDgWAAgMIAAgHIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_21.setTransform(163.2,-62.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGANQAEAIAAAQIAAAIIAAAIIACATQACAMAAAGQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_22.setTransform(148.7,-62.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAcAtIgGgHIgPAIIgJABQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCALIAAASQAAALABAGIAGAQIACAEIAAABQAAAEgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKgBQAIAAAGgDIAJgHQgDgWAAgMIAAgHIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_23.setTransform(139.2,-62.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGANQAEAIAAAQIAAAIIAAAIIACATQACAMAAAGQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_24.setTransform(124.7,-62.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_25.setTransform(115.1,-62.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_26.setTransform(104.9,-65.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAFAaIgDgVIgCgTIgHAQIgOAkQgBAEgCACQgDAFgFAAQgHAAgGgaQgDgOgDgWIgDgNIgBgOQAAgDADgDQACgCAEAAQAGAAACAHIACANIABANIAFAmQALgaAKgjQADgKAGAAQAHAAACALIAGAgIAHAhIAGgYIALgvQABgFAHAAQAEAAACADQADACAAAEIgBAEQgHAcgLAjQgCAIgGAJQgDAEgFAAQgKAAgGgXg");
	this.shape_27.setTransform(93.5,-62.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_28.setTransform(77.2,-62.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_29.setTransform(65.2,-62.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgIBAQgCgDAAgEIAAgQIgBgPIABgVIABgUQAAgDACgDQADgCAEgBQADABACACQACADAAADIAAAUIgBAVIAAAPIAAAQQAAAEgDADQgCACgCAAQgFAAgCgCgAgFgwQgDgDAAgEQAAgEADgDQAEgDACAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgCAAgEgDg");
	this.shape_30.setTransform(55.8,-64.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIAAgLQAAgDACgDQACgCAEAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_31.setTransform(48.8,-64.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAIQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_32.setTransform(34.4,-62.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgEAFgIAPQAAAhgDAGQgCAGgGAAQgEAAgCgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAABAIIACAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAOAAAGAKQAEAGABAPIAAARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_33.setTransform(24.3,-65.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_34.setTransform(14.7,-64.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEABQADAAAEADQACACAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgHQADgBAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAHAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_35.setTransform(0.4,-63.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAFAaIgDgVIgCgTIgHAQIgOAkQAAAEgDACQgDAFgFAAQgHAAgGgaQgDgOgDgWIgCgNIgCgOQAAgDADgDQACgCAEAAQAGAAACAHIACANIACANIAEAmQAKgaALgjQADgKAGAAQAHAAADALIAFAgIAGAhIAHgYIALgvQACgFAGAAQAEAAACADQADACAAAEIgBAEQgHAcgLAjQgCAIgGAJQgEAEgEAAQgKAAgGgXg");
	this.shape_36.setTransform(-9.8,-62.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZAlQgMgMgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgLgAgPgRQgGAKAAALQAAANAHAIQAGAFAIAAQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_37.setTransform(-20.8,-62.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgDAAgDgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQABgDACgDQACgCAEAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAOAAAGAKQAEAGABAPIAAARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape_38.setTransform(-30.5,-65.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEABQADAAAEADQACACAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgHQADgBAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAHAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_39.setTransform(-40.4,-63.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQAAgLAJAAQAEAAADADQAKgDAKgBIAQgCQAWAAAMAFQAGADAAAGQAAADgCADQgDADgEAAIgCAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIAAAMIAAALQgBATADAEQACACAMAAIAPAAIARgBIAFAAIAFgBQAKAAgBAJQABAIgIABQgJACgaAAQgbAAgIgHg");
	this.shape_40.setTransform(-55.3,-65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgiA9QgRgIAAgNQAAgEADgCQACgCAEAAQAEAAADAFQAFAGADADQAIAEAOAAQANABALgGQAPgIAAgNQAAgLgMgHQgLgFgOAAQgOgBgKgFQgNgHAAgNQAAgQASgMQARgNARAAQAJAAALADQAOADAAAHQAAAHgIABIgMgDIgOgCQgNABgJAHQgKAGAAAKQAAAHANADQAFABANABQAUACALALQAKAJAAAPQAAAVgTAMQgRALgVAAQgQAAgNgGg");
	this.shape_41.setTransform(-67.3,-64.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("Ag7BFQgCgDAAgEIAAgLIABgLIAAgQIABgRIgBgQIAAgSIgBgQIAAgRQAAgEADgDQAEgEADAAQAFAAAHALQAWAgARAWQAVAZAYAXIAAgLIAAgLQAAglgDgXIgDgKIgBgJQAAgKAJAAQAQAAAAA5IgBAcIAAAdIgBAOQgCAJgIAAQgEAAgIgGQgjgigug/IAAAUIAAATIAAAWIAAAWQABAYgKAAQgFAAgDgDg");
	this.shape_42.setTransform(-80.7,-64.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQABgLAIAAQAEAAADADQAKgDAJgBIARgCQAVAAANAFQAGADAAAGQAAADgCADQgCADgEAAIgDAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIgBAMIAAALQABATACAEQACACAMAAIAQAAIAQgBIAFAAIAFgBQAKAAAAAJQAAAIgIABQgIACgbAAQgbAAgIgHg");
	this.shape_43.setTransform(-93.3,-65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgFBAQgDgCAAgEIAAgEIABgEIgBgNIAAgNIgCgiIgDgjIgIAAQgTAAgLgDQgHgCAAgHQAAgDACgDQADgDAEAAIAOACIAOABIAQAAIAPgBIAUABIAUABQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAIgUgBIgUgBIgGAAQAAAMADAcIABAmIABAJIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgDg");
	this.shape_44.setTransform(-104.6,-65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgoBEQgEgEAAgDIAAgbIACgiIACglQgBgHACgRQAAgEACgBQANgEAPAAQAOAAAOAKQARAMAAATQAAAWgSAMQAOAGAGAGQAGAIAAAIQAAAKgLAKQgIAHgJADQgSAIgfAAQgEAAgDgDgAgbAjIAAASQAYAAANgHQAGgCAGgEQAGgGgBgBQAAgFgLgFQgIgEgIgCIgJgBIgDAAIgEAAIgKgBIgBAUgAgWg0IgBAQIgCAiIAOABQAMgBAIgIQAJgIAAgLQAAgJgJgHQgJgHgJAAIgNAAg");
	this.shape_45.setTransform(-122.1,-65.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_46.setTransform(-133.6,-65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQAAgLAJAAQAEAAADADQAKgDAKgBIAQgCQAWAAAMAFQAGADAAAGQAAADgCADQgDADgEAAIgCAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIAAAMIAAALQgBATADAEQACACAMAAIAPAAIARgBIAFAAIAFgBQAKAAgBAJQABAIgIABQgJACgaAAQgbAAgIgHg");
	this.shape_47.setTransform(-144.8,-65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgPBAQgKgagNgyIgIgYQgFgSAAgGQAAgEADgDQACgBAEAAQAHgBACAIIADAPIAJAeQAIAgAIAXIABgBIAWg/IAHgWQAFgMAGgIQADgDAEAAQADAAAEADQACADAAADQAAADgBACQgGAIgDAJIgIAUIgXA/IgKAWQgBAFgGAAQgGAAgDgHg");
	this.shape_48.setTransform(-156,-64.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_49.setTransform(-174.5,-64.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[]},405).to({state:[]},6).wait(219));

	// Layer 11
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.502)").s().p("EglVAC+IAAl7MBKrAAAIAAF7g");
	this.shape_50.setTransform(45.3,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).to({_off:true},405).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.7,-110.5,478,65);


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
		var bgm = createjs.Sound.play('bgmVT',{loop:-1});
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
		
		 window.open ("intro_Summary.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("intro_Scene2.html","_self");
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
(lib.intro__Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3_repeat:390});

	// timeline functions:
	this.frame_0 = function() {
		playSound("verbTensewav");
	}
	this.frame_75 = function() {
		playSound("intro_3wav");
	}
	this.frame_404 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(75).call(this.frame_75).wait(329).call(this.frame_404).wait(1));

	// content
	this.instance = new lib.contentScene2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(228.3,160.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(405));

	// main
	this.instance_1 = new lib.Background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,188.5,1.038,1.067);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(405));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(405));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '001A88D595957C4F9C75C7731F351885',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmVT.mp3", id:"bgmVT"},
		{src:"sounds/intro_3wav.mp3", id:"intro_3wav"},
		{src:"sounds/space_blip.mp3", id:"space_blip"},
		{src:"sounds/verbTensewav.mp3", id:"verbTensewav"}
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
an.compositions['001A88D595957C4F9C75C7731F351885'] = {
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