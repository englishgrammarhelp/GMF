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


(lib.letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCADgDABQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgCIASgeQAOgYAEAAQAFAAACAHIAEAVIAJArIAEAKIACAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgXg");
	this.shape.setTransform(4.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAxQgCgDAAgDIAAgSIABgZIABgaIABgSQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAJgCALAAQAKAAAKAHQAMAJAAANQAAAQgNAIQAKAFAFAFQAEAEAAAGQAAAIgIAHQgGAFgGADQgNAFgXAAQgCAAgDgCgAgTAZIAAANQARAAAKgEIAIgGQAEgDAAgCQAAgDgIgDIgMgFIgGgBIgCAAIgDAAIgHAAIgBAOgAgQglIAAALIgBAZIAJAAQAJAAAGgGQAHgFAAgJQAAgGgHgFQgHgGgGAAIgKABg");
	this.shape_1.setTransform(4.2,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAnQgIgKgBgNQAAgUASgYQAQgSAOAAIAFAAIAFABQADgDADAAQAEAAABAFIABANQABADgCACQgCADgDAAQgEgBgCgFIgEgEIgGgBQgJAAgLAOQgPATABAQQAAAIAEAGQAGAGAIAAQAFAAAHgDIALgIQADgDACABQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgRAPgQAAQgNAAgKgKg");
	this.shape_2.setTransform(3.9,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAzQgHgCgEgCIgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgUIABgUIgBgVIAAgWQAAgDADgDQACgDACAAQADAAAIAFIALAFQARAGANANQAPAPAAARQAAALgFAKQgGAKgIAGQgKAHgRAAIgLgCgAgXgRIAAASIgBAiIABABQAGAEAJAAQANAAAGgFQAGgEAEgHQAEgHAAgIQAAgRgUgMQgFgFgYgKg");
	this.shape_3.setTransform(4.7,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIAAgGIgBgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAFgHABIgPABIgcADIAAAIIgBAIQAAAOACACQACACAIAAIAMAAIALAAIAEgBIAEAAQAGAAABAGQAAAGgGABQgGABgTAAQgUAAgFgFg");
	this.shape_4.setTransform(4.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA0QAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIABgmIAAgkIAAgIIAAgJQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEACIAOgCIAKgBQAIAAAJACQANADAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAIgCAAQgIgDgNAAIgJABIgMABIAAAcQAMgDAGAAIATABQAGAAAAAGQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgKgBIgJAAQgEAAgPADIAAAsQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_5.setTransform(4.1,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfArQgJgJABgRQgBgRAJgQQAHgRANgLQAHgHAJAAQAFAAAJAEQAMAEAAAFQAAADgBADQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgEgCQgKgGgGAAQgFAAgEAFIgIAJQgPATAAAWQABAMADAEQAEAGAKAAQALAAAIgHQAKgIADgOQgSABgMAFIgCABQgDAAgCgCQgCgBAAgEQAAgDAEgCQAMgHAiAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQgBAEgDACQgEATgMANQgNALgRAAQgPAAgHgJg");
	this.shape_6.setTransform(4.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAyQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIACgUIABgUIgBgJIAAgLIABgPIAAgPQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBAPIgBAQIABAOIAagDQAQgDALgBIABgbIACgKQACgHAEABIAEABQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAIgBADIgBAIIAAAFIAAAGIgBATIgBASIABAPIABAOQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgOIgBgPIAAgJQgKAAgQADIgaAFIgBARIgBAPQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_7.setTransform(4.9,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAvQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAOgCIAAgMIAAgKIAAgLIABgkIgIABIgIAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQgBgCAAgDQAAgGAFAAIAUgBQALAAATADQAGABAAAGQAAADgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgKgBIgKgBIgBAiIAAALIAAALIAAALIAUAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLAAIgLAAIgLABIgNACQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_8.setTransform(3.4,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAsQgMgJAAgMQAAgHAGAAQAHAAAAAHQAAAGAHAFQAHAFAHAAQAEAAACggIABglIgBgHIgDAAIgHAAIgHAAQgDAAgCgCQgCgCAAgDQAAgGAJAAIAGAAIAGAAIAMAAIAMgBQAOAAAAAHQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgCACgCAAIgEAAIgEgBIgIAAIABAIQAAAugHAWQgEAOgJAAQgLAAgLgIg");
	this.shape_9.setTransform(4.2,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// circle
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAxg+QAVAaAAAkQAAAlgVAaQgUAagdAAQgcAAgUgaQgVgaABglQgBgkAVgaQAUgaAcAAQAdAAAUAag");
	this.shape_10.setTransform(4,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,15.9,22.5);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


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


(lib.BkScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AerArQgEABgEAAQgEABgFAAQgPACgPABQgQABgRABQgKAJgRABQgKAAgGgMQgWgFgWACQgiADgLgZQAAAFgKALQgQAMgTgBQgngBgVgXQgjACgjgBQgNAAgCgJQAAgBAAgBQgLAIgPACQgMACgMABQgRACgSgNQgFAHgPABQgSACgRACQgaADgUgVQgTgEgUABQgiADgfgLQgFgBgPACQgiAEgagHQgYAHgagDQgKAAgKgCQgMgCACgZQACACANgCQAPgFAPgBQBGgEBGAEQAFABAMgLQAHgYAZAHQAcAHAOAUQAEAGAMACQAMgMAZgIQAdANARAZQACgDAJgJQAegPAcAWQAGAFATgCQAIgDAIgCQAMgDANgCQAsgEApAPQAKADAIgDQAZgJAgAGQAVAEAOAIQAWAMAXgOQAWgFAIANQACAFAJALQADAHAQgCAYZAQQAMgJAHgPQgWAGADASgAPFgdQAVAJAUAPQANgRAVgKQAIgEAIgCQAggHAXATQgJAagVAFQgVAGgdgFQgZAFgegDQgOgBACgZQAAgFABgGgAsIgBQARgLARgMQANgKAQgGQAOgFAVANQAhAJArgGQAMgSAaACQANABAMACQAaAEAZAKQAMAEALAGQANAHATgDQAdgHAeAAQBJAABVAHQAIAHAJACQAMACAIgJQAYgbAvAbQARAEAJgGQAGgFAHgDQANgEANgDQAhgGAeALQAIADAFAGQAFAGAKAJQAbgPAtABQAIADAIADQAKAEAHAFQAIAGAPgEQAfgeAsABQAKAAAIAEQAYAKAcgDQBCgGBIARQAUgKAVgNQAigWAqAIQAKACAHAGQAOANAOgRQA5gIAwAbQAHAEAIAAQASABARgMQAPgKAUACQAqAEApAUQAZgUAuAAAPEgSQgDASgJAEQgLAGgLACQgbAGgegDQgZAYgwgIQgGgNgIgFQACANgNAFQgYAKgngGQgEgCgRgIQgZgCgngDQgJgEgZACQAAAegbgFQgNgDgMAAQgSAAgKgOQgLgOgHAEQgYARgeACQgYACAEgYQgMADgJAFQgHAEgGAFQgNALgYgHQgYgGgKAUQgFAFgHAIQgQgDgSAAQgCAAgDAAQgEAAgMgCQgDAAgCAAQgIgIgHAHIgBAAIAAAAQgJgTgNABQgSABgRAMQgVgHAAgUQgWgFgXAAQgbAAgcgCQhHgGhcAAQgOgGgEAIQgGAMgWAEQhIgFhJAAQgBABgCAAQgDAAgDgBQgRgBgPgOQgVgFgXAAQhhAAhnAAQAAgQgXAEQgWASgjgCQgCgJgPACQgMANgVAOQgWgOgXgCQgCgBgKgLA7tAUQAEgHAQAHQAAAAAAAAQAEADAPABQAdACARgHQAygTBCAAQAJgJAOgDQAIgCAHAAQBMAABTAFQAlgYA2ABQANABAMACQANADANADQARAEAPAHQAtASAvADQAiACAfgJQBLgTBLgTQANgDALgFQALgFAPAFQAIADAEAHQAGAIAEAJQADAIAAAIQABAEABAEQgaAAgagBQgYgBgaAKQglADgvACQgMAGgOAAQgWACgcgDQgegCgeAAQgPAAgPgCQgdgEgfACQgjADgegHQgKgCgDgGQgGgKgQALQgUAPgjgIQgygKg3ADQgFAAgKAKQgCAQgSACQgPACgPABQgKABgKABQhDAChEAAQgKAAgJACQgaAFgogEQgqACgvgCQgjAJgsAGQAFgagFgDAsVAGQAFgDAEgDQACAAACgBQAAAAAAgBIAAABIAAAAQgDAJgKgCgAsxAHQAOAAAOgBIAAAAQgHAEgHAEQgKAAgEgHg");
	this.shape.setTransform(-48.6,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EgmPgB4IAAETIAAAcIAAAdIAAU8MBMfAAAIAA1JIAAheIAAjhIAA2XMhMfAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.3,1,1).p("AZOobQABAAACAAQAOgBAPAAQAkABAlgBQArAFAtAAQAUABAUgBIABAAQA+gBA/AAQBCgBA/AEQBBAEBAACQAsABCtgPAZOobIgKAAQgkACgjAEAZOobIg6AAQgKAAgKAAUg62AARgAVgABQgIgBi8gSAbYodQALABALABIABAAQARACAPACQAMADAMADAa3ocQAQAAARgBQALAAALAAIABAAQAlgCAjgCQAbgBAagCAdjmnQAaAFAQAOQgHgcgJgFQgRgEgJASgEAjlgD/QABAJgBAGQgDgCgDgDEAjlgDwQgCAFgEACQgyAcgtgeQgFAOgMAFQhJAegTg1QgsAggTgqQgCgFgCgHEAmQgE8QiEAFgbAJQgCABgCABQgBgBgBgBQgNgGgWgRQgZAbgbgHEAgngFTIAAAAQAAgBAAgBQAGgqAgAvQAIANAAAJQAAATAYgGQAVgEALACQADABAEgDQgDgBgDgBQgEgBgFgDEAgngFTQgBAJAAAMAfLkfQAKg0A2ATQAXAIAFgbEAgwgGXQgWAGgFARQALgPAQgIgEAgVgGAQAoAGgNgdAWHipQADABADACQAvAVA+ALQA8ALA+gDQBCgDA8gEQAcgCAcAAQAYgBAXABQAmAEAoAHQA1AJA3APQA7AQAmgCQAmgCA/gVQA+gWB5hbQijgMgIgGAcikzQAegjAqAMQAMADAEASQAIApAXgNQAEgDAGgFQABgBABAAQAQgHAWAKQACABADABAc+mNQgbgKgdAIQAPAUAZAIQAGgNAKgNgAdskCQAEALgFAJQAAAAgBgBQgFgBgGgBAdrjuQgBACgCACQgfAngvgiQgBABgBAAQgLAFgQALQgsgHAOg4QgGAEgHADQgzAZgwgfQgBAAAAgBQgsAYg2gUQgdASgpAIQAAAAAAABQgEAfgxgFQgBACgBABAfJkJQAAgMACgKAeNkJQAFgKAHgGAfPj3QguAWg2gNAaCmNQBMAKgXgNQgggjgVAmgAY5kqQARgqA9AfQABABABAAQABACACACQADAFAGADQgJADgHAFAbgkfQgDABgCACAaVkoQAfgKAtAQQABABABAAQAAAAABgBQAQgMABgZQAbAGASAOQgGAHgGAJAbgkfQAAAIgBAEQADgBADgCAbjkhQgCABgBABAcajlQADgBADgCAcgItQAugFAhgRAa6JbQA2gIAtgCAXQkeQABAAAAgBQAigcAyALQALADAJADAXFkTQAFgGAGgFAXFj/QABAFAAAFAWQjaQAAAAABAAQADgEgCgHAWgkeQAWgFAaAFAYUkUQgEADgEACQgEgCgEgCAY1kgQACgFACgFQADACADACAQ/ItQARgCAQAEAN8IjQAFgBAEAAQgFAUACAbIAAAAQgfAFgaAKQgDgDgDgCAO4JFQARgLAYgGIAAAAIAAABQgKARgHATQgEgDgEgCATuJyQANgDARgEAVOJrQAMgFASgBASEJhQAaAIAPgOAPQJZQgBACgBADAPQJZQARAIAVAIQgbASgjgGQAAAAgBAAQgVAhguANAOqJyQAHACAGABAOxJKQADgDAEgCAM9JlQAGgDAGgCQAWAOAgAMQgGAUgFAVQAAABAAAAQgBAFgBAFAOGJ8QgEgBgDgBQABgEACgEAsYkTQDhAGD9AVQAdACAdACIAAAAQAKABAKABQALABALABQERAZEyAqQFPiQLLCUAOFIiQApAAAKAjA5AqoQgCgCgCgDQgBADAAADAsekTQoigNl4BMQoPgDgDABQgHABgIABQgBAAi1ADEgmPgEKQB1gKBIgCQAKAAAJgB");
	this.shape_2.setTransform(0,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AgfAXQgggLgWgOQAagKAegFIABAAQgCgaAFgVQAnABAKAiIgHAGIAHgGQASgLAYgFIAAAAQgKARgHATIgJgEIAJAEQARAJAUAGQgaATgjgGIgBgBIgNgDIANADQgVAigtANQAEgWAHgUgAgfAXIAHACIgHgCIACgIIgCAIIAAAAgAAvgDIACgGIgCAGgAAYASIAAAAg");
	this.shape_3.setTransform(92.7,103.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(99.3,98.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FEE1A3","#FFCC33"],[0,1],0,-57.3,0,53).s().p("EgmPALAIAA07IC2gDIAPgCIISACQF4hMIiANIAGAAQDhAGD9AVIA6AEIAAAAIAAABIAAgBIAAABIAAgBIAUACIAWACIgFAAIgRgCIARACIAFAAQERAZEyAqQFPiRLLCVIAAAAIAGADQAvAVA+ALQA8AKA+gCIB+gHIA4gCIAvAAQAmADAoAIQA1AJA3APQA7AQAmgCQAmgCA/gVQA+gWB5hbIAAVIgAN0D6IgCAJIACgJIAAgBIAAABgANJC1QAWAPAgAMQgGATgFAWQAugNAVghIABAAQAjAGAbgSQgVgIgRgJQAHgSAKgSIAAAAIAAAAQgYAFgRAMQgKgjgpAAQgFAUACAbIAAAAQgfAEgaAKgATuDIIAegHIgeAHgAVODBQAMgFASgCQgSACgMAFgAM9C6IAMgFIgMAFgASWC6QANAAAJgIIABgBIgBABQgJAIgNAAIgBAAIAAAAQgGAAgHgCIgEgBIAEABQAHACAGAAIAAAAIABAAgANJC1IgGgEIAGAEgAa6CwQA2gHAtgCQgtACg2AHgARgCFQgMgDgMAAIAAAAIgBAAIgEAAIgCAAIgBAAIgBAAIABAAIABAAIACAAIAEAAIABAAIAAAAQAMAAAMADIAAAAgAcgCCQAugEAhgRQghARguAEgAN8B4IAJAAIgJAAg");
	this.shape_5.setTransform(0,84.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EAgTAAsQgsAggTgqIgEgMIAEAMIgFACQguAWg2gNQADgFAAgGIgCgJIACAJQAAAGgDAFIgBgBIgLgCIALACIABABIgDAEQgfAngvgiIAGgDIgGADIgCABQgLAFgQALQgsgHAOg4IgNAHQgzAZgwgfIgBgBQgsAYg2gUIAIgFIgIAFIgIgEIAIAEQgdASgpAIIAAgDIgBgHIABAHIAAADIAAABQgEAfgxgFQACgDAAgDIgBgFIABAFQAAADgCADIgBAAIABAAIgCADIABgDIACgLIAFgVIgiACQgJAJgSABQgJAAgHgMQgVgFgXACQgiADgLgZQAAAFgJALQgQAMgUgBQgngBgVgXQgjACgjgBQgNAAgBgJIAAgCQAMgIAHgQQgWAFADATQgLAHgPADIgZADQgQACgTgNQgEAHgQABIgjAEQgaADgUgUQgTgEgUABQgiADgegLQgFgBgQACQghAEgbgIQgYAIgagDQgKAAgJgCQgMgDABgZQADACAMgCQAPgFAPgBQBHgEBFAEQAFABAMgLQAHgYAaAHQAcAHANAUQAEAGANACQALgMAZgIQAeANAQAZIAMgMQAdgPAdAWQAFAFAUgCIAQgFQAMgDAMgCQAtgEApAPQAJADAIgDQAagJAfAGQAVAEAPAJQAVAMAYgPQAVgFAIAOQADAFAJAKQADAHAPgCIAFgQQAWgFAaAFIABgBQAigcAyALIAUAGQARgqA9AfIACABIADAEQADAFAGADQgJADgHAFQAHgFAJgDQAfgKAtAQIgBADIgFADIAFgDIAAABIgBAKIAGgDIgGADIABgKIAAgBIADgCIABgBQAQgMABgZQAbAFASAPQAegjAqAMQAMADAEASQAIAoAXgNQgHAGgFAKQAFgKAHgGIAKgHIACgBQAQgHAWAKQgCAJAAAMQAAgMACgJIAFACIgFgCQAKg0A2ATQAXAIAFgbIgBAVIABgVIAAgCQAGgqAgAvQAIANAAAJQAAATAYgGQAVgEALACIABAAIAAAAIACAAIAEgCQAbAHAZgbQAWAQANAHIACACIAEgCQAbgJCEgFIAABdQijgMgIgGIABgIIgBgHIABAHIgBAIIgGgFIAGAFQgCAFgEACQgyAcgtgeQgFAOgMAFQgaALgUAAQgiAAgMgigAW+AdIgJABIgeADIAegDIAJgBIAHgBIgHABgAXFAIIALgKIgLAKgAY1gEIAEgKIAGAEIgGgEIgEAKgAcWgHQAGgJAGgHQgGAHgGAJgAWRBBIAAAAgAjWArIgWgCIgEAAQgIgIgIAGIAAAAQgKgSgNABQgRABgSAMQgUgHgBgUQgWgFgWAAQgcAAgbgCQhJgFhbAAQgOgGgEAIQgHALgWAEQhIgFhJAAIgCAAIgGAAQgRgBgPgNQgWgFgWAAIjIAAQgBgRgWAEQgXATgigCQgCgKgQADQgLANgWANQgWgNgWgCQgDgBgJgNIAhgWQAOgKAPgGQAPgFAUANQAhAJArgGQANgSAaACIAZADQAaAEAZAKIAWAKQANAHATgDQAdgHAfAAQBIAABWAHQAHAHAKACQAMACAHgJQAZgbAuAbQASAEAIgGQAGgFAIgDQAMgEANgDQAigGAeALQAIADAGAGQAEAGALAJQAagPAtABIAQAGQAKAEAIAGQAIAGAOgEQAggfArABQAKAAAJAEQAXAKAcgDQBCgGBJARQAUgKAUgNQAigWApAIQAKACAHAGQAOANAPgRQA5gIAwAbQAHAEAHAAQATABARgMQAOgKAUACQAqAEApAUQAZgUAuAAIgBALIABgLQAVAJAVAPQANgRAVgKQAIgEAIgCQAggHAWATQgJAagUAGQgWAGgcgFQgaAFgegDQgNgCABgZQgDASgJAFQgLAGgLACQgaAFgegDQgaAYgwgIQgGgNgIgEQACAMgMAFQgZAKgmgGIgWgKIhAgFQgJgEgYACQgBAegbgFQgMgDgNAAQgSAAgKgOQgLgNgHADQgWARgfACQgYACAEgXQgLACgKAFIgMAJQgOALgXgHQgYgGgLAUIgLANQgQgDgSAAgEgmPAARQB1gKBIgCIATgBIABABQAEADAPABQAcACARgHQAygTBDABQAJgKAOgDIAPgCQBLAABTAFQAlgYA3ABQAMABAMACIAaAGQARAEAQAHQAtATAvADQAhACAggJICWgnQAMgDALgFQAMgFAOAFQAIADAFAHQAFAIAEAJQAEAIAAAIQAAAFACAEQgaAAgagBQgYgBgaAJIhUAFQgNAGgNAAQgXACgbgDQgegCgeAAQgPAAgPgCQgegEgeACQgjADgfgHQgJgBgEgGQgGgLgPAMQgVAOgjgIQgygJg2ADQgFAAgLAJQgCAQgRACIgeADIgUACQhEAChDAAQgKAAgKACQgaAFgngEQgqACgvgCQgkAJgrAGQAEgagEgDgAdrAtIAAAAgAdrAtIAAAAgEAjlAArIAAAAgEAjlAArIAAAAgAYMAMIAAAAgAYMAMIAAAAgAQ0ABIAAAAgAfLgDIAAAAgEAiOgATIgBAAIABgEIAGACIgEACIgCAAIAAAAg");
	this.shape_6.setTransform(0,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#013FA3").s().p("AgrgBIAhgBIAVACIABAAIAgADQgsgBgrgDg");
	this.shape_7.setTransform(176.2,-11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#0066FF","#000099"],[0,1],183.3,20.4,183.3,-20.4).s().p("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");
	this.shape_8.setTransform(0,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#DA9836","#784D22"],[0,1],160.7,-0.8,160.7,59.7).s().p("AAAgCIADAEIgFABIACgFg");
	this.shape_9.setTransform(-160.4,-26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#00CCFF","#D5FFFF"],[0,1],0,-65.6,0,67).s().p("EgjLALUIjEgSIAA2WMBMfAAAIAAWWQitAQgsgCQhAgChBgEQg/gDhCAAIh9ACIgBAAIgoAAIgggEIgBAAIgWgCIAWgBIABAAIBIgDIA1gEIg1AEIhIADIgBAAIgWABIghABIhJAAIgdAAIgDAAIg6AAIgUAAUg2oAARgENAAAIgWgBgA5FI5IAFgBIgEgFIgBAGgAYALGIBEgCQgkACgjAFIADgFg");
	this.shape_10.setTransform(0,-82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.3,-156.6,492.7,313.3);


(lib.anim_pro_pointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mainbody
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(323.2,118);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBmQgcgGgOgUQAhgJAggQQAhgQgLglQALAQAOAIQgIAMgEAPQgJAfgXASQgIAFgJAAIgJgBgAhRgaIgEgCQACgEAAgFQAFgegTgFIAAAAQAHgKAPADQAfAIgCAnIgBACQgIAGgLAAQgHAAgIgCgAAdg8QAAghgbgCQADgEAFgCQAJgDAQAEQALgCAJANQASAcgdAIQgJADgIAAQACgEAAgGg");
	this.shape_1.setTransform(302.7,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AC2L6IgsgIIgBgBIgcgGQgggJgJglIgShGIgEgMQgJgcgNgZQgTgkgdgTQAdATATAkQANAZAJAcQgtAog2AnQgrAegwATQgBgNgEgKQgFgNgMgKQgagXgggTQgXgPgaACQAUgfAUgiQATghAWghQgWAhgTAhQgUAigUAfQgKABgKADQgjALgngFIgJgCQgagIAZgoIAjg7QASggAXghIAog9QASgdAjgPQARgHgCgOIgDgYQgBgIAGgGQATgTAcgKIAMgEIACAGQAfACAdAKQATAGATAEQAkAGAlACQAoABAkgHQAkgIAhgWQAigVAZgOQARgKARgHIAEAMQAJAcgCAgQAAAGAKAGQATALAHAXIABAGQAHAkAJAmIATBIIASBHIAIAeIAGAZIACADIAAABQARAjglASQgRAIgRALIgZARQgdAUgiAOQgWAIgYAAQgNAAgNgCgAC7IBQANAlAQAlIAHAUIgHgUQgQglgNglQgMgjgGglQAGAlAMAjgAjGjuQgJAEgQgCQgPgDgGgXQgMADgOgCQgmgGAUgjQgJANgTgKQgVgLACgQIADgGIgBgBIADgFQADgCABgEQgBAEgDACQgEACgGgDQgMgFgGgJQgFgHgDgHQAAgIABgJIADgFQAFgHALgGQgQAGgQgMQgdgVAXgUIABAAQAHgGAKgFQgMAEgKgGQgNgJABgNQABggAdgIQgKACgFgHQgOgQACgMQACgMAVgHQgSgIAFgRIAEgJQATghAcAIQgDgOACgNQACgIAEgIIAHgJQAXgdAdAcQABAFAFADQgFgDgBgFQgEgIAJgMQAVgcAVATQgEgLASgPQANgMAKgCQALgCAHAKQADAFACAHIADAPQABgJAEgHQAFgLAJgIQAJgIALADIALAEQAXALAAAZIgBAMIABgMQAFgUASgLIABgBQAJgGAKACQAeADgFAaIgBAFIACgEQAIgNASAHQAJAEAGAEQAMAJgEAOQgEABAAAIQAAgIAEgBQADgBAEADQAfAUgPAoQAGgLASADQAYAEgTAfQAFgFAJgCQAVgDgFAQQgJAdAMAKIAJAIQAZAfgfAiQAHAAAFADQAiAVgjAWQALAZgPAPQANAegVAPQAKAdgkAHQgKAUgQABQgJgDgHgFQgCgPAFgRQAHgdgIgZQgCgZgNgUQAIgBAFgJQAFgKgBgLQgBgHgEgHQgUgkgMAaIAAgGIgMgBQgxgJAYggQgHADgJABQg3ALgqgfQgdAZgogPQgQAdgigOIAAAAIAAAAIACgLIgCALIAAAAIAAAAQgHASgTAFQAUAQgZAaQAiAGgRAuQAXAPgBAnQgBAhAWAYQAWAYAgAFIAKACIggAvgAjYrCQgHgFgCgGQACAGAHAFgAgYrOIACgGIgCAGgAjanIQgXgLAPgbIACgEIABAAQATAFgFAeQAAAFgCAEIgHgCgAhznhQgFgEgCgHQgHgUAGgJQAbACAAAhQAAAGgCAEIAAAAQgLAAgGgFg");
	this.shape_2.setTransform(315.3,77.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC9A67").s().p("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");
	this.shape_3.setTransform(323.7,127.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// fist
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AgvkXQgEgMgLgJQgPgMgRAEQgNADgJAMQgCACgBACQgLARAFARQAGAQALAPQAEAFAFADQAJAHAMABQAIABAHgFQAPgLAHgSQAAAAAAgBIAAAAQgFgFgDgHQgDgHACgKQAAAAAAAAQABgFACgDgAh0klQgJgJgOADQgQACgKATQgIAOACAOQAAACABABQAAADABADQAGAPANAOQAMAOAOgDQACAAACgBQANgDAIgLAirj6QgJgGgKAIQgQANAEARQADAQALAPQAFAGAFAEQgCAOAGANQAHAPAJAPQAJAOAIAOQADAGgCAHQgBACAAACQgGAQgJAOQgKARgKARQgKAQgJAQQgKARgIAQQgJARgDASQgEATgCATQgBASgCASQgBASADATQAEARAEAQQAGASACARQACARAQALQARANAPgCQASgCAPABQARACASAAQASACAQAAQASAAASgBQAQgBAPgFQASgEAPgEQAOgEAOgJQACAABdgeAiyixQAJAHALAEQARAGAKgSQAHgMAAgLAAOjxQgBgNACgOQADgTgQgKQgPgLgRAJQgMAHgFANAgpjyIABAAQAGAHALAEQAEABAEABQgDABgEABQgKAEgIAFQgSAKALAQQAFAGAIAEQASAHAPgFQAIgCAGgHAAFjqQABAAAAAAQAFgDADgEAAOjpQgEgBgEAAQAAAAgBAAAAOjpQAAgEAAgEAAOjpQAHAAAFADQASAHAIAPQAJAPgGAUQgEAPgKAGQgRAKgEAPQgFASgPAMQgOAMgNAOQgDATgCATQgCASgCAQQgCATgGASQgFASgEARQgFATgFASQgGASgLAOQgBABAAABQABgBAAAAQAHgEAGgFQABgBABgCQAFgFAFgGQAMgOASgIQARgHAQgFQARgFAUgBQASgBARgDQgEAHgBAHAgPjlQADgBADgBQAIgCAGgBADrAAQgCAAgCAAQhAAJgGACQgGACgKAFQgKAGgOAKQgOAKgOAOQgIAJgFAJAhRCQQgDADgCAEABQCqQgPALgSAHQgQAGgNAC");
	this.shape_4.setTransform(270.5,56.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9A67").s().p("Ag+E2IgigCIgjgCQgPgBgSACQgPACgRgNQgQgLgCgRQgCgRgGgSIgIghQgDgTABgSIADgkQACgTAEgTQADgSAJgRIASghIATggIAUgiQAJgOAGgQIABgEQACgHgDgGIgRgcIgQgeQgGgNACgOQgFgEgFgGQgLgPgDgQQgEgRAQgNQAKgIAJAGIABADIABAGQAGAPANAOIACACQAJAJAKABIABAAIAAAAIAEgBIAAAAIAEgBQANgDAIgLQgFgDgEgFQgLgPgGgQQgBgFAAgGQAAgLAHgMIADgEQAJgMANgDQARgEAPAMQALAJAEAMQAFgNAMgHQARgJAPALQAQAKgDATQgCAOABANIAAAIQAHAAAFADQASAHAIAPQAJAPgGAUQgEAPgKAGQgRAKgEAPQgFASgQAMQgNAMgNAOIgFAmIgEAiQgCATgGASIgJAjIgKAlQgGASgLAOIgBACIABgBIANgJIACgDIAKgLQAMgOASgIQARgHAQgFQARgFAUgBIAjgEQgEAHgBAHQABgHAEgHQAFgJAIgJQAOgOAOgKQAOgKAKgGQAKgFAGgCQAGgCBAgJIhID8IhfAeQgOAJgOAEIghAIQgPAFgQABIggABIgEAAgAAxC8QgQAGgNACQANgCAQgGQASgHAPgLQgPALgSAHgAhUCXIAFgHIgFAHgAiTilQAKAAAIgNQAHgMAAgLQAAALgHAMQgIANgKAAIgBAAIAAAAIgIgBQgLgEgJgHQAJAHALAEIAIABIAAAAIABAAgAgLiyQAGAAAFgCQAJgCAGgHQgGAHgJACQgFACgGAAIAAAAIgBAAQgKAAgKgEQgIgEgFgGQgEgGAAgGQAAgIALgGQAIgFAKgEIAHgCIgIgCQgLgEgGgHIgBAAQgFgFgDgHQgCgFAAgFIABgHIAAAAIADgIIgDAIIAAAAIgBAHQAAAFACAFQADAHAFAFIAAAAIAAABQgHASgPALIgBAAIgBABQgFADgGAAIAAAAIAAAAIgBAAIgBAAQgMgBgJgHQAJAHAMABIABAAIABAAIAAAAIAAAAQAGAAAFgDIABgBIABAAQAPgLAHgSIAAgBIAAAAIABAAQAGAHALAEIAIACIgHACQgKAEgIAFQgLAGAAAIQAAAGAEAGQAFAGAIAEQAKAEAKAAIABAAIAAAAgAgHjnIgGACIAGgCQAHgCAHgBQgHABgHACgAAQjpIAAAAIgEgBIgCAAIAAAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAAAAIACAAIAEABIAAAAgAAIjqIAAAAQAFgDADgEQgDAEgFADIgBAAIABAAIAAAAgAh/jIQgKgBgJgJIgCgCQgNgOgGgPIgBgGIgBgDQgCgOAIgOQAKgTAQgCQAOgDAJAJIgDAEQgHAMAAALQAAAGABAFQAGAQALAPQAEAFAFADQgIALgNADIgEABIAAAAIgEABIAAAAIgBAAgAhhjYIAAAAgAgnjyIAAAAg");
	this.shape_5.setTransform(270.3,56.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AmLj3QgQgDgQgBQgggCgggaQgXgTAfgDQAggEApAHQAjAIAkAJQAkAKAgAXQAgAVAWAeQAWAcAhAUQAhAUAfAYQAfAXAeAXQAfAXAXAdQAXAbAWAdQAaAiAvgLQAwgKAbAEQAcAFAfABQAeABAggDQACAAABAAQAkADAcgBQAbgCAkAMQAVAIAUAHADmDFQAkAGAdgSAFgEpQggAGgdABQgkAAgjgKQgkgKgigUQghgUgjgGQgjgGgigWQgfgUgggWQgegVgSgfQgTgfgSgjQgTgigTgbQgUgfgegUQgfgVgjgNIAAAAAmLj3QAJABAJACQANADAOAGQgFAGgFAKQgKAWAGATQAEANALAKQACADACACQAQANAJgIQAHgHAEgVQABgMAEgKAmOiHQAEACAGABQANADALgHQAKgGAJgIAlAiRQAQANgKATQgDAFgFAGQgMAKgOADQgBAAgCAAQgJABgKgCQgrgHAPgmQglgNAcgZQgIgDgHgFQgIgGAAgJQACgiAhgRAlsiyQgTANgXgIQAAAAgBAAAkLhzQgKALgMAIIAAAAQgdATgegMAlejrQAUgYAdAPQAlAUAPAd");
	this.shape_6.setTransform(252.8,48.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC9A67").s().p("ADcEmQgkgKgigUQghgUgjgGQgjgGgigWQgfgUgggWQgegVgSgfIglhCQgTgigTgbQgUgfgegUQgfgVgjgNIAAAAQAMgIAKgLQgKALgMAIIAAAAQgdATgegMQAOgDAMgKIAIgLQAEgIAAgGQAAgKgKgIQAHgHAEgVQABgMAEgKQgEAKgBAMQgEAVgHAHQAKAIAAAKQAAAGgEAIIgIALQgMAKgOADIgDAAQgJABgKgCQgrgHAPgmQglgNAcgZIABAAIACABQAIACAHAAIAAAAIAAAAQANAAAMgHIAAAAIAAgBQAEANALAKIAEAFIABAAIABABIAAAAQAIAHAHAAIAAAAIAAAAQAFAAADgDQgDADgFAAIAAAAIAAAAQgHAAgIgHIAAAAIgBgBIgBAAIgEgFQgLgKgEgNQgCgHAAgHQAAgNAGgOQAFgKAFgGQgOgGgNgDIgSgDQgQgDgQgBQgggCgggaQgXgTAfgDQAggEApAHQAjAIAkAJQAkAKAgAXQAgAVAWAeQAWAcAhAUQAhAUAfAYIA9AuQAfAXAXAdQAXAbAWAdQAaAiAvgLQAwgKAbAEQAcAFAfABQAeABAggDIADAAQAkADAcgBQAbgCAkAMIApAPQhjAngpCCIgKAfQggAGgdABIgDAAQgiAAgigKgAD4DHQAZgBAUgNIACAAIgCAAQgUANgZABIAAAAIAAAAIgQgCIgCAAIACAAIAQACIAAAAIAAAAgAl7iDQAIAAAHgFQAKgGAJgIQgJAIgKAGQgHAFgIAAIgBAAIAAAAIgGgBIgBAAIAAAAIgBAAIgKgDIAKADIABAAIAAAAIABAAIAGABIAAAAIABAAgAktj0QAlAUAPAdQgPgdglgUIgBAAIgCgBIAAAAQgKgEgIAAIgBAAIAAAAQgPAAgMAOQAMgOAPAAIAAAAIABAAQAIAAAKAEIAAAAIACABIABAAgAmFiqQgHAAgIgCIgCgBIgBAAQgIgDgHgFQgIgGAAgJQACgiAhgRIASADQANADAOAGQgFAGgFAKQgGAOAAANQAAAHACAHIAAABIAAAAQgMAHgNAAIAAAAIAAAAgAlsiyIAAAAg");
	this.shape_7.setTransform(252.8,48.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(246,0.4,134.1,235.2);


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


(lib.contentperfectform = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFAUQgCgCAAgDQAAgIAHgXQACgFAFAAQADAAACACQACACAAADIgFAQIgCAOQgBAGgGAAQgDAAgCgCgAgVAUQgCgCAAgDQAAgIAIgXQABgFAFAAQADAAACACQADACAAADIgFAQIgDAOQAAAGgHAAQgDAAgCgCg");
	this.shape.setTransform(120.3,-24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAHQgCgDgBgEQABgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDADgEgBQgDABgDgDg");
	this.shape_1.setTransform(115.3,-15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgbA0QgKgLAAgQQAAgVAKgLQALgNARAAQAIAAAGADIAHAFIADgrQAAgHAGAAQAHAAAAAIIgDAvIgBAVQAAAaACANIAAABQAAADgCACQgBACgEAAQgEAAgCgGQgGAEgGACQgGACgFAAQgQAAgLgLgAgRABQgHAIAAAPQABAKAGAHQAIAHAJAAQAFAAAEgCQADgBAGgFIACgDIAAgNIAAgJIAAgJQgDgGgEgCQgFgDgHAAQgMAAgGAGg");
	this.shape_2.setTransform(108.6,-20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgZAhQgMgJAAgSQAAgTAKgNQAKgPARAAQAMAAAIAFQAKAFAAALQAAAHgIAHIgRAHIgcAOQAEAGAHAEQAGADAIAAQAFAAAHgCQAJgDADgEQACgEADAAQADAAACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAIgOAHQgLAFgLAAQgRAAgKgJgAgPgUQgGAIgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_3.setTransform(99.9,-18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgEA2QgCgCAAgDIAAgJIAAgIIgBgsIgRgBQgHgCAAgGQAAgEACgCQACgCADAAIAQABIAAgKIgBgJQAAgDADgDQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIALgBIAKABQAFACAAAFQAAADgCACQgCADgDAAIgEAAIgEAAIgKABIABAsIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_4.setTransform(91.8,-20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgZAhQgMgJAAgSQAAgTAKgNQAKgPARAAQAMAAAIAFQAKAFAAALQAAAHgIAHIgRAHIgcAOQAEAGAHAEQAGADAIAAQAFAAAHgCQAJgDADgEQACgEADAAQADAAACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAIgOAHQgLAFgLAAQgRAAgKgJgAgPgUQgGAIgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_5.setTransform(84,-18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgIA3IABgcIABgbIAAgbIABgcQAAgHAGAAQAIAAAAAHIgBAcIAAAbIgBAmIgBARQgBAIgFAAQgIAAAAgIg");
	this.shape_6.setTransform(77.4,-21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgdA+QgCgCAAgDIAAgfIAAgeIAAgeIgCgQQAAgFACgEQADgEAEAAQACAAADACQACACAAADIgBACIAAAFQAGgFAHgCQAFgCAFAAQAQAAAIAOQAFALAAASQAAAPgJALQgJALgQAAQgHAAgIgCIgBAlQAAADgCACQgCACgDAAQgDAAgDgCgAgGgoQgFACgFAGIABAkQAIADAHAAQAJAAAGgHQAEgFAAgKQAAgOgDgHQgDgHgIAAQgFAAgGADg");
	this.shape_7.setTransform(71.1,-17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgDAtQgCgCgBgDIgCgcIgCgaQAAgIgCgFQgFADgFAFIgJAKIgFAFIgBANIAAANIAAAGIABAGQAAADgCADQgDACgDAAQgIAAAAgUIAAgOIABgMIAAgNIgBgMQAAgRAIAAQADAAADACQACADAAADIgBAFIAAAEIAAAIQAEgIAIgGQAHgHAGAAQAMAAAEAMQAEgGAGgDQAFgCAIAAQANAAAEANIADAWIAGArQAAADgCACQgDACgDAAQgGAAgBgHIgDgXIgCgXIgDgKQgCgHgDAAQgDAAgIAFIgKAHIABAOIACAUIABAUQABADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_8.setTransform(60.9,-18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgWAhQgKgLgBgSQAAgQAJgOQALgPASAAQAPAAAIAOQAGALAAAQQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgPQgFAJAAAKQAAALAGAHQAFAEAHAAQAHABAGgHQAGgGABgKQABgdgRgBQgLABgGAKg");
	this.shape_9.setTransform(50.5,-18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgVAiQgLgKAAgRQAAgOALgRQALgSANAAQAIAAAJADQAMAFAAAGQgBADgBADQgCACgDAAIgEgBIgDgDQgFgEgKAAQgGAAgIAOQgHANAAAIQAAAKAHAGQAGAGAJAAQAFAAAFgDIAJgFIADgBQADAAACADQACACAAADQAAAFgLAFQgLAFgHAAQgPAAgKgJg");
	this.shape_10.setTransform(42.6,-18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAJAPIgIgcQAAgDACgBQACgCADAAQAGAAABAFIAEAOIAEANQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgCACgDAAQgFAAgCgFgAgOAQIgFgOIgDgMQAAgDACgCQADgCADAAQAEAAACAFIAEANIADAMQAAADgCACQgCACgDAAQgEAAgCgEg");
	this.shape_11.setTransform(35.2,-25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAqQgMgEAAgHQAAgEACgBQADgDACAAQADAAADAEQACABAHABIAIABQAGABAFgCQAHgCAAgFQAAgLgPgDIgGgCQgKgCgFgDQgGgDAAgJQAAgQAPgGQAFgDAJgDIAOgEQADgCAEAAQADAAADACQACADAAADIABAGIABAHQgBADgCADQgCACgDAAQgFAAgBgEIgCgHIgSAFQgLAEAAAIIAEABQARADAIAGQANAHAAAPQAAAMgLAHQgJAFgNAAQgJAAgJgEg");
	this.shape_12.setTransform(23.7,-19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATAlIgCgQIgCgRIABgHIAAgHQAAgQgGgBQgJAAgHALQgHAJgEANIAAAHIgBAIIABAHIAAAHQAAADgCACQgCACgDAAQgEAAgCgCQgCgCAAgDIAAgHIgBgHIABgVIABgWIAAgHIAAgHQAAgDACgCQACgCADAAQAIAAAAAKIAAAJQANgSANAAQAMAAAFALQADAHABAOIAAAIIgBAGQAAAHACAKIACAQQAAADgCACQgDACgDAAQgGABgBgIg");
	this.shape_13.setTransform(16.1,-18.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAYAnIgFgFIgNAGQgFACgDAAQgSgBgIgJQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAFAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAJIgBAQQAAAKACAFIAFAOIABAEIABABQAAAEgCACQgDACgCAAQgCgBgEgDgAgMgSQgJAJAAAMQAAANAFAGQAEAGAJAAQAGAAAFgDIAIgGQgCgTAAgKIAAgHIABgIIgEgCIgEgBQgLAAgIAKg");
	this.shape_14.setTransform(7.9,-18.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAKgNQAKgPARAAQAMAAAIAFQAKAFAAALQAAAHgIAHIgRAHIgcAOQAEAGAHAEQAGADAIAAQAFAAAHgCQAJgDADgEQACgEADAAQADAAACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAIgOAHQgLAFgLAAQgRAAgKgJgAgPgUQgGAIgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_15.setTransform(-0.3,-18.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDAtQgCgCgBgDIgCgcIgCgaQAAgIgCgFQgFADgFAFIgJAKIgFAFIgBANIAAANIAAAGIABAGQAAADgCADQgDACgDAAQgIAAAAgUIAAgOIABgMIAAgNIgBgMQAAgRAIAAQADAAADACQACADAAADIgBAFIAAAEIAAAIQAEgIAIgGQAHgHAGAAQAMAAAEAMQAEgGAGgDQAFgCAIAAQANAAAEANIADAWIAGArQAAADgCACQgDACgDAAQgGAAgBgHIgDgXIgCgXIgDgKQgCgHgDAAQgDAAgIAFIgKAHIABAOIACAUIABAUQABADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_16.setTransform(-10.6,-18.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEA2QgCgCAAgDIAAgJIAAgIIgBgsIgRgBQgHgCAAgGQAAgEACgCQACgCADAAIAQABIAAgKIgBgJQAAgDADgDQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIALgBIAKABQAFACAAAFQAAADgCACQgCADgDAAIgEAAIgEAAIgKABIABAsIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_17.setTransform(-25.3,-20.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGA3QgDgCAAgEIAAgNIAAgOIABgSIAAgRQAAgDADgCQACgCADgBQACABACACQACACAAADIAAARIgBASIAAAOIAAANQAAAEgCACQgCACgCABQgDgBgCgCgAgEgpQgDgDAAgEQAAgEADgCQADgCADgBQADABADACQACACAAAEQAAAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_18.setTransform(-31,-20.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAqQgMgEAAgHQAAgEACgBQADgDACAAQADAAADAEQACABAHABIAIABQAGABAFgCQAHgCAAgFQAAgLgPgDIgGgCQgKgCgFgDQgGgDAAgJQAAgQAPgGQAFgDAJgDIAOgEQADgCAEAAQADAAADACQACADAAADIABAGIAAAHQAAADgCADQgCACgDAAQgFAAgBgEIgCgHIgSAFQgLAEAAAIIAEABQARADAIAGQANAHAAAPQAAAMgLAHQgJAFgNAAQgJAAgJgEg");
	this.shape_19.setTransform(-42,-19.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWA5QgDAEgEAAQgCAAgDgCQgCgCAAgDIABgGIAAgGIgBgYIAAgXIAAgWIAAgVQAAgEACgEQADgFAEAAQAGAAAAAHIAAADIgBADIAAARIAAATQAHgEAFgCQAGgDAFAAQAQAAAKANQAKALAAARQAAASgLAMQgLAMgQAAQgMAAgJgFgAgLgDIgLAHIAAANIAAAMIAAANIAKAEQAFABAGAAQAKAAAHgHQAHgIAAgMQAAgLgGgIQgFgHgLAAQgGAAgGADg");
	this.shape_20.setTransform(-50.1,-20.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAjIAAg1IABgHIAAgIQgBgHAIAAQAHAAAAAMQAOgOARAAQAGAAADAFQAEAEAAAKIgBAFQAAAKgHAAQgGAAAAgIIgBgFIAAgHQgMACgGAFQgHAFgFAKIAAApQABAIgIAAQgHAAAAgIg");
	this.shape_21.setTransform(-58.4,-18.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAKgNQAKgPARAAQAMAAAIAFQAKAFAAALQAAAHgIAHIgRAHIgcAOQAEAGAHAEQAGADAIAAQAFAAAHgCQAJgDADgEQACgEADAAQADAAACACQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAIgOAHQgLAFgLAAQgRAAgKgJgAgPgUQgGAIgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_22.setTransform(-66.6,-18.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAjIgMgfIgOgiIgBgDQAAgEADgCQACgCADAAQAFAAACAFIATA0QAFgMAJgWIAGgSQADgEAEAAQADgBADADQACACAAADQAAADgNAeIgPAjQgBAHgGAAQgFAAgCgHg");
	this.shape_23.setTransform(-74.8,-18.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAVA6IgDgSIgCgSIAAgGIABgGQAAgNgIAAQgJAAgHAHQgEAFgHANQAAAdgCAFQgCAEgFAAQgDAAgCgBQgDgDAAgDIABgDIABgLIAAgMIAAg3IABgMIgBgIIgBgHQAAgDADgDQACgCADAAQAGABABAGIACANIgBARIAAARIAAAHQAGgJAHgEQAGgEAIAAQANAAAFAIQADAGABANIAAAPIACAQIACAPIABADQAAADgDABQgCACgDAAQgFABgCgGg");
	this.shape_24.setTransform(-87.8,-20.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEA2QgCgCAAgDIAAgJIAAgIIgBgsIgRgBQgHgCAAgGQAAgEACgCQACgCADAAIAQABIAAgKIgBgJQAAgDADgDQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIALgBIAKABQAFACAAAFQAAADgCACQgCADgDAAIgEAAIgEAAIgKABIABAsIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_25.setTransform(-96.1,-20.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGA3QgDgCAAgEIAAgNIAAgOIABgSIAAgRQAAgDADgCQACgCADgBQACABACACQACACAAADIAAARIgBASIAAAOIAAANQAAAEgCACQgCACgCABQgDgBgCgCgAgEgpQgDgDAAgEQAAgEADgCQADgCADgBQADABADACQACACAAAEQAAAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_26.setTransform(-101.9,-20.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASArQgIAAgGgVIgDgSIgBgQIgGAOIgMAfIgDAFQgCAEgFAAQgGABgGgXIgFgfIgBgMIgCgLQABgEACgCQACgCADAAQAGAAABAGIACAMIABALIAFAhQAIgWAJgfQADgJAFAAQAGAAACAKIAFAbIAGAeIAFgVIAKgpQABgFAFAAQAEAAACADQADACgBADIgBADQgFAZgKAfQgCAHgFAHQgCAEgFAAIAAAAg");
	this.shape_27.setTransform(-109.5,-18.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaA0QgLgLAAgQQAAgVALgLQAKgNARAAQAIAAAGADIAGAFIAEgrQAAgHAGAAQAHAAAAAIIgDAvIgBAVQAAAaACANIAAABQAAADgBACQgDACgDAAQgEAAgDgGQgFAEgGACQgGACgFAAQgQAAgKgLgAgRABQgGAIgBAPQAAAKAHAHQAIAHAJAAQAGAAADgCQADgBAGgFIACgDIAAgNIAAgJIAAgJQgCgGgGgCQgEgDgHAAQgLAAgHAGg");
	this.shape_28.setTransform(-124.2,-20.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AATAlIgCgQIgCgRIABgHIAAgHQAAgQgGgBQgJAAgHALQgHAJgEANIAAAHIgBAIIABAHIAAAHQAAADgCACQgCACgDAAQgEAAgCgCQgCgCAAgDIAAgHIgBgHIABgVIABgWIAAgHIAAgHQAAgDACgCQACgCADAAQAIAAAAAKIAAAJQANgSANAAQAMAAAFALQADAHABAOIAAAIIgBAGQAAAHACAKIACAQQAAADgCACQgDACgDAAQgGABgBgIg");
	this.shape_29.setTransform(-132.7,-18.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAYAnIgFgFIgNAGQgFACgDAAQgSgBgIgJQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAFAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAJIgBAQQAAAKACAFIAFAOIABAEIABABQAAAEgCACQgDACgCAAQgCgBgEgDgAgMgSQgJAJAAAMQAAANAFAGQAEAGAJAAQAGAAAFgDIAIgGQgCgTAAgKIAAgHIABgIIgEgCIgEgBQgLAAgIAKg");
	this.shape_30.setTransform(-141,-18.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAFAUQgCgCAAgDQAAgIAHgXQACgFAFAAQADAAACACQACACAAADIgFAQIgCAOQgBAGgGAAQgDAAgCgCgAgVAUQgCgCAAgDQAAgIAIgXQABgFAFAAQADAAACACQADACAAADIgFAQIgDAOQAAAGgHAAQgDAAgCgCg");
	this.shape_31.setTransform(122,-49.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgZAhQgMgJAAgSQAAgTAKgNQAKgPARAAQAMAAAIAFQAKAFAAALQAAAHgIAHIgRAHIgcAOQAEAGAHAEQAGADAIAAQAFAAAHgCQAJgDADgEQACgEADAAQADAAACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAIgOAHQgLAFgLAAQgRAAgKgJgAgPgUQgGAIgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_32.setTransform(114.7,-43.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgEA2QgCgCAAgDIAAgJIAAgIIgBgsIgRgCQgHAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIgBgJQAAgEADgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAGIALgCIAKABQAFABAAAGQAAADgCACQgCADgDAAIgEgBIgEAAIgKACIABAsIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_33.setTransform(106.6,-44.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgZAhQgMgJAAgSQAAgTAKgNQAKgPARAAQAMAAAIAFQAKAFAAALQAAAHgIAHIgRAHIgcAOQAEAGAHAEQAGADAIAAQAFAAAHgCQAJgDADgEQACgEADAAQADAAACACQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAIgOAHQgLAFgLAAQgRAAgKgJgAgPgUQgGAIgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_34.setTransform(98.8,-43.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgIA3IABgcIABgbIAAgbIABgcQAAgHAGAAQAIAAAAAHIgBAcIAAAbIgBAmIgBARQgBAIgFAAQgIAAAAgIg");
	this.shape_35.setTransform(92.2,-45.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgdA+QgCgCAAgDIAAgfIAAgeIAAgeIgCgQQAAgFACgEQADgEAEAAQACAAADACQACACAAADIgBACIAAAFQAGgFAHgCQAFgCAFAAQAQAAAIAOQAFALAAASQAAAPgJALQgJALgQAAQgHAAgIgCIgBAlQAAADgCACQgCACgDAAQgDAAgDgCgAgGgoQgFACgFAGIABAkQAIADAHAAQAJAAAGgHQAEgFAAgKQAAgOgDgHQgDgHgIAAQgFAAgGADg");
	this.shape_36.setTransform(86,-41.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgDAtQgCgCgBgDIgCgcIgCgaQAAgIgCgFQgFADgFAFIgJAKIgFAFIgBANIAAANIAAAGIABAGQAAADgCADQgDACgDAAQgIAAAAgUIAAgOIABgMIAAgNIgBgMQAAgRAIAAQADAAADACQACADAAADIgBAFIAAAEIAAAIQAEgIAIgGQAHgHAGAAQAMAAAEAMQAEgGAGgDQAFgCAIAAQANAAAEANIADAWIAGArQAAADgCACQgDACgDAAQgGAAgBgHIgDgXIgCgXIgDgKQgCgHgDAAQgDAAgIAFIgKAHIABAOIACAUIABAUQABADgDACQgCACgDAAQgCAAgCgCg");
	this.shape_37.setTransform(75.8,-43.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgWAhQgKgLgBgSQAAgQAJgOQALgPASAAQAPAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgPQgFAJAAAKQAAALAGAGQAFAGAHgBQAHABAGgHQAGgFABgMQABgcgRgBQgLABgGAKg");
	this.shape_38.setTransform(65.4,-43.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgVAiQgLgKAAgRQAAgOALgRQALgSANAAQAIAAAJADQAMAFAAAGQgBADgBADQgCACgDAAIgEgBIgDgDQgFgEgKAAQgGAAgIAOQgHANAAAIQAAAKAHAGQAGAGAJAAQAFAAAFgDIAJgFIADgBQADAAACADQACACAAADQAAAFgLAFQgLAFgHAAQgPAAgKgJg");
	this.shape_39.setTransform(57.4,-43.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAJAPIgIgcQAAgDACgBQACgCADAAQAGAAABAFIAEAOIAEANQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCACgDAAQgFAAgCgFgAgOAPIgFgNIgDgMQAAgDACgCQADgCADAAQAEAAACAFIAEANIADAMQAAADgCACQgCACgDAAQgEAAgCgFg");
	this.shape_40.setTransform(50,-49.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVAqQgMgEAAgHQABgDACgDQADgCADAAQACAAAEAEQACABAGACIAIAAQAGAAAFgBQAHgCAAgFQAAgLgOgDIgIgCQgKgCgEgDQgGgEAAgIQAAgQAPgGQAEgDAKgDIAOgEQADgCAEAAQADAAACACQACACAAAEIABAGIABAHQAAAEgCABQgCADgDAAQgEAAgCgEIgCgIIgSAGQgLAEAAAIIAFABQAQAEAJAFQAMAHAAAPQAAAMgLAHQgJAFgNAAQgJAAgKgEg");
	this.shape_41.setTransform(38.5,-43.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AATAlIgCgQIgCgRIABgHIAAgHQAAgRgGAAQgJAAgHALQgHAJgEANIAAAIIgBAHIABAHIAAAHQAAAEgCACQgCABgDAAQgEAAgCgBQgCgCAAgEIAAgHIgBgHIABgVIABgVIAAgIIAAgHQAAgDACgCQACgCADgBQAIAAAAALIAAAJQANgSANAAQAMAAAFALQADAHABAOIAAAIIgBAGQAAAHACAKIACAQQAAADgCACQgDACgDAAQgGABgBgIg");
	this.shape_42.setTransform(31,-43.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAYAnIgFgFIgNAFQgFADgDAAQgSgBgIgJQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAFAAAGQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAJIgBAQQAAAKACAGQAAADAFAKIABAEIABABQAAADgCADQgDACgCAAQgCgBgEgDgAgMgSQgJAJAAAMQAAANAFAGQAEAGAJAAQAGAAAFgCIAIgHQgCgTAAgJIAAgIIABgIIgEgCIgEgBQgLAAgIAKg");
	this.shape_43.setTransform(22.7,-43.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAKgNQAKgPARAAQAMAAAIAFQAKAFAAALQAAAHgIAHIgRAHIgcAOQAEAGAHAEQAGADAIAAQAFAAAHgCQAJgDADgEQACgEADAAQADAAACACQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAIgOAHQgLAFgLAAQgRAAgKgJgAgPgUQgGAIgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_44.setTransform(14.5,-43.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEAtQgBgCAAgDIgCgcIgDgaQAAgIgCgFQgFADgGAFIgJAKIgDAFIgCANIAAANIAAAGIABAGQAAADgCADQgCACgDAAQgJAAAAgUIABgOIABgMIgBgNIgBgMQAAgRAIAAQADAAACACQADADAAADIgBAFIAAAEIAAAIQAEgIAIgGQAHgHAGAAQAMAAAEAMQAEgGAFgDQAHgCAHAAQAMAAAGANIADAWIAFArQAAADgCACQgCACgDAAQgHAAgBgHIgDgXIgDgXIgCgKQgCgHgEAAQgDAAgHAFIgKAHIAAAOIADAUIACAUQAAADgDACQgCACgDAAQgDAAgCgCg");
	this.shape_45.setTransform(4.2,-43.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAJAXQgCgCAAgDIABgdIABgIQABgFAFAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAdQAAAHgHAAQgDAAgCgCgAgVAMIAAgOIABgPQAAgDABgCQACgCADAAQADAAACACQACACAAADIAAAOIAAAOIAAAEIABADQAAADgDACQgCACgDAAQgHAAAAgNg");
	this.shape_46.setTransform(-10.4,-49);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgEA2QgCgCAAgDIAAgJIAAgIIgBgsIgRgCQgHAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIgBgJQAAgEADgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAGIALgCIAKABQAFABAAAGQAAADgCACQgCADgDAAIgEgBIgEAAIgKACIABAsIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_47.setTransform(-17.1,-44.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgVAiQgLgKAAgRQAAgOAKgRQAMgSANAAQAIAAAJADQALAFAAAGQAAADgBADQgCACgDAAIgEgBIgDgDQgEgEgLAAQgHAAgHAOQgHANAAAIQAAAKAGAGQAHAGAJAAQAFAAAFgDIAJgFIADgBQADAAACADQACACAAADQAAAFgLAFQgLAFgHAAQgPAAgKgJg");
	this.shape_48.setTransform(-24.7,-43.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgZAhQgMgJAAgSQAAgTAKgNQAKgPARAAQAMAAAIAFQAKAFAAALQAAAHgIAHIgRAHIgcAOQAEAGAHAEQAGADAIAAQAFAAAHgCQAJgDADgEQACgEADAAQADAAACACQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAIgOAHQgLAFgLAAQgRAAgKgJgAgPgUQgGAIgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_49.setTransform(-32.9,-43.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgMBCQgCgDAAgDIAAgBQACgKAAgMIAAgVIAAgVIgMABQgIAAAAgIQAAgHANgBIAIAAIABgLQACgRAGgIQAHgKARAAQALAAAAAHQAAAIgKAAQgSAAgCAZIgBAFIARgBQAMAAAAAIQAAAFgGACIgGAAIgRABIgBAQIAAAPIABAOQAAAOgCAIQAAAGgGAAQgDAAgDgBg");
	this.shape_50.setTransform(-41.5,-44.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgdAjIAAg1IAAgHIAAgIQABgHAGAAQAIAAAAAMQAOgOASAAQAFAAAEAFQADAEAAAKIgBAFQAAAKgHAAQgHAAAAgIIAAgFIAAgHQgMACgHAFQgGAFgFAKIAAApQAAAIgHAAQgHAAAAgIg");
	this.shape_51.setTransform(-48.8,-43.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgZAhQgMgJAAgSQAAgTAKgNQAKgPARAAQAMAAAIAFQAKAFAAALQAAAHgIAHIgRAHIgcAOQAEAGAHAEQAGADAIAAQAFAAAHgCQAJgDADgEQACgEADAAQADAAACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAIgOAHQgLAFgLAAQgRAAgKgJgAgPgUQgGAIgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_52.setTransform(-57,-43.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgdA+QgCgCAAgDIAAgfIAAgeIgBgeIgBgQQAAgFACgEQADgEAEAAQADAAACACQACACAAADIAAACIgBAFQAHgFAFgCQAGgCAFAAQAQAAAIAOQAFALAAASQAAAPgIALQgKALgQAAQgGAAgJgCIgBAlQAAADgCACQgCACgEAAQgCAAgDgCgAgGgoQgEACgGAGIABAkQAIADAHAAQAJAAAGgHQAEgFAAgKQAAgOgDgHQgDgHgIAAQgGAAgFADg");
	this.shape_53.setTransform(-65.5,-41.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAJAXQgCgCAAgDIABgdIABgIQABgFAFAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIAAADIgBADIAAAdQAAAHgHAAQgDAAgCgCgAgVAMIAAgOIABgPQAAgDABgCQACgCADAAQADAAACACQACACAAADIAAAOIAAAOIAAAEIABADQAAADgDACQgCACgDAAQgHAAAAgNg");
	this.shape_54.setTransform(-73.4,-49);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgbA0QgKgLAAgQQAAgVAKgLQALgNARAAQAIAAAGADIAHAFIADgrQAAgHAGAAQAHAAAAAIIgDAvIgBAVQAAAaACANIAAABQAAADgCACQgBACgEAAQgEAAgCgGQgGAEgGACQgGACgFAAQgQAAgLgLgAgRABQgHAIAAAPQABAKAGAHQAIAHAJAAQAFAAAEgCQADgBAGgFIACgDIAAgNIAAgJIAAgJQgDgGgEgCQgFgDgHAAQgMAAgGAGg");
	this.shape_55.setTransform(-85.8,-45.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgdAjIAAg1IAAgHIAAgIQABgHAGAAQAIAAAAAMQAOgOASAAQAFAAAEAFQADAEAAAKIgBAFQAAAKgHAAQgHAAAAgIIAAgFIAAgHQgMACgHAFQgGAFgFAKIAAApQAAAIgHAAQgHAAAAgIg");
	this.shape_56.setTransform(-93.8,-43.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgWAhQgKgLgBgSQAAgQAJgOQALgPASAAQAPAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgPQgFAJAAAKQAAALAGAGQAFAGAHgBQAHABAGgHQAGgFABgMQABgcgRgBQgLABgGAKg");
	this.shape_57.setTransform(-102,-43.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AASArQgIAAgGgVIgDgSIgBgQIgGAOIgMAfIgDAFQgCAEgFAAQgGABgGgXIgFgfIgBgMIgCgLQABgEACgCQACgCADAAQAGAAABAGIACAMIABALIAFAhQAIgWAJgfQADgJAFAAQAGAAACAKIAFAbIAGAeIAFgVIAKgpQABgFAFAAQAEAAACADQADACgBADIgBADQgFAZgKAfQgCAHgFAHQgCAEgFAAIAAAAg");
	this.shape_58.setTransform(-111.3,-43.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAKgNQAKgPARAAQAMAAAIAFQAKAFAAALQAAAHgIAHIgRAHIgcAOQAEAGAHAEQAGADAIAAQAFAAAHgCQAJgDADgEQACgEADAAQADAAACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAIgOAHQgLAFgLAAQgRAAgKgJgAgPgUQgGAIgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_59.setTransform(-125.6,-43.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAVA6IgDgSIgCgSIAAgGIABgGQAAgNgIAAQgJgBgHAIQgEAEgHAOQAAAcgCAGQgCAEgFABQgDAAgCgCQgDgCAAgEIABgDIABgLIAAgMIAAg3IABgMIgBgIIgBgHQAAgEADgCQACgCADAAQAGABABAGIACANIgBARIAAARIAAAHQAGgIAHgFQAGgEAIAAQANAAAFAJQADAFABANIAAAPIACAPIACAQIABACQAAAEgDABQgCACgDAAQgFABgCgGg");
	this.shape_60.setTransform(-134.4,-45.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgFA4QgCgCAAgDIAAgEIAAgDIAAgLIAAgMIgCgeIgCgeIgHAAQgRAAgJgDQgHgBAAgGQAAgDACgDQACgCAEAAIAMABIANABIAOAAIANAAIASABIARAAQADAAACADQADACAAADQAAAEgDACQgCACgDAAIgRgBIgSgBIgGAAIACAjIACAhIABAIIAAAIQAAAGgBADQgDAFgEAAQgCAAgDgCg");
	this.shape_61.setTransform(-143.7,-45.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.3,1,1).p("AXcE2Mgu3AAAIAAprMAu3AAAg");
	this.shape_62.setTransform(-13,-33);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("A3bE2IAAprMAu3AAAIAAJrg");
	this.shape_63.setTransform(-13,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},110).wait(80));

	// Layer 4
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAJAXQgCgCAAgDIABgdIABgIQABgFAEAAQAEAAABACQACACAAADIAAADIAAAEIgBAcQAAAHgHAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAgVALIAAgNIAAgPQAAgBABgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCACAAQADAAADACQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAAOIAAANIAAAFIABADQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAAAQgDADgDAAQgGAAgBgOg");
	this.shape_64.setTransform(96.2,-5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgjA6QgCgDAAgDIAAgWIABgeIABgfIABgVQABgEACgBQAKgDANAAQAMAAANAJQAOAKAAAQQAAATgPAKQALAFAGAGQAGAGgBAHQABAJgLAJQgGAGgIADQgQAGgaAAQgEAAgDgDgAgXAeIAAAQQAUgBAMgFQAFgCAFgEQAFgEAAgCQAAgEgKgEIgOgFIgHgBIgDAAIgEAAIgIgBIgBARgAgTgsIAAANIgCAdIAMABQAKgBAHgGQAIgHAAgKQAAgHgIgHQgIgGgIAAIgLABg");
	this.shape_65.setTransform(88.6,-1.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgmA5QgCgCAAgDIgBgSIAAgSIABgUIACgUIgBgMIgBgLQAAgFADgDQACgEAGABIASABQAKABAHAEQAeAQAAAYQAAALgKAIQgJAHgMAEQAYANALAOQACACAAADQAAADgDACQgCADgDAAQgCAAgDgDQgZgZgegIIAAAPIABAPQAAADgCACQgCACgEAAQgDAAgCgCgAgYghIABAJIgBAPIgCAOIAEAAIADAAQATAAAJgFQAFgBADgEQAEgEAAgDQAAgLgMgJQgKgIgMgBIgLgBg");
	this.shape_66.setTransform(78.7,-1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AggA7QgIgIAAgYIABgLIAAgLIgBgFQAAAAAAAAQAAAAABgBQAAAAAAgBQAAgBABAAIABghIAAgIIgBgIQAAgJAHAAQAEAAACADIARgEIAOgCQASABALAEQAGACAAAFQAAAEgCACQgDACgDAAIgCAAQgNgEgMAAIgMACIgQADIAAAHIgBAdIAggDIASgBQAEAAACACQACACAAAEQAAAFgHACIgSABIgiADIAAAKIgBAJQAAARADADQACACAKAAIANAAIAOAAIAFgBIAEgBQAIABAAAHQAAAHgHABQgHABgWAAQgYAAgGgFg");
	this.shape_67.setTransform(69,-1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgNA3QgJgXgLgqIgGgVQgFgQAAgEQAAgEADgCQACgCADAAQAGAAABAGIADAOIAHAZQAIAbAHAUIAAAAIATg2IAHgTQAEgMAFgFQACgDAEAAQADAAACACQADADAAADIgCAEQgFAIgDAHIgFAQIgVA3QgDAJgFAKQgBAEgFAAQgGAAgCgGg");
	this.shape_68.setTransform(59.4,-1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgZAhQgMgKAAgRQAAgSAKgOQAKgOARAAQAMAAAIAEQAKAFAAALQAAAIgJAGIgQAHIgcAOQAFAGAGADQAGAEAIAAQAFAAAHgCQAJgDACgEQADgEADAAQADAAACACQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAIgOAGQgLAFgLAAQgRAAgKgIgAgPgTQgGAHgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_69.setTransform(45.1,0.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAVA5IgEgRIgBgSIAAgGIAAgGQAAgOgHAAQgJAAgHAIQgEAFgGAMQAAAdgDAFQgCAFgEAAQgEAAgCgCQgCgCAAgDIAAgEQABgCAAgJIAAgLIABg3IAAgMIAAgHIgBgIQAAgDACgCQACgCADAAQAHAAABAHIABANIgBARIAAAQIAAAHQAGgJAHgEQAGgEAIAAQANAAAFAIQADAGAAANIABAOIABAQIADAPIAAADQAAADgCACQgCACgDAAQgGAAgBgGg");
	this.shape_70.setTransform(36.4,-1.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEA1QgCgCAAgDIAAgIIAAgJIgBgrIgRgCQgHAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAFIAAAFIALgCQAIAAACABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEgBIgKACIABArIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_71.setTransform(28.1,-0.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgLBAQgCgBAAgDIAAgCQABgKAAgLIAAgVIAAgVIgMABQgIAAAAgHQAAgIAOAAIAHAAIABgMQACgRAHgIQAGgKARABQALgBAAAIQAAAHgKAAQgSAAgCAZIgBAFIARgBQAMAAAAAIQAAAFgGABIgGABIgRABIgBAQIAAAOIABAOQAAAOgCAJQAAAFgGAAQgDAAgCgCg");
	this.shape_72.setTransform(15.8,-0.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgWAgQgKgKAAgSQgBgQAJgNQALgPASAAQAPgBAIAOQAGALAAAQQgBAQgIAMQgKANgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAFAHAAQAHAAAGgFQAGgHAAgKQACgdgRAAQgKAAgHALg");
	this.shape_73.setTransform(7.8,0.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAtQgDgDAAgDIgBgbIgCgaQAAgIgDgFQgFADgFAFIgJAKIgEAFIgBAMIgBAOIABAGIABAGQAAADgDACQgCACgDAAQgJAAAAgTIABgOIABgMIgBgMIAAgNQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAFIABAHQAEgIAHgGQAIgHAFAAQAMAAAEAMQAEgFAFgDQAGgDAIAAQAMAAAFAOIADAVQACAMADAeQABADgDACQgCADgDAAQgGAAgBgHIgDgYIgDgWQAAgFgCgFQgDgHgDAAQgDAAgHAFQgIAEgCADIABAOIACATIABAUQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_74.setTransform(-6.7,0.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgdAjIAAg0IAAgIIABgHQAAgIAHAAQAHAAAAANQAOgOARAAQAHAAACAEQADAFABAJIAAAFQgBAKgHAAQgGAAgBgIIAAgFIAAgGQgMABgGAFQgHAFgEAKIAAApQAAAHgIAAQgGAAgBgHg");
	this.shape_75.setTransform(-16.4,0.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgWAgQgKgKAAgSQgBgQAJgNQALgPASAAQAPgBAIAOQAGALAAAQQgBAQgIAMQgKANgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAFAHAAQAHAAAGgFQAGgHAAgKQACgdgRAAQgKAAgHALg");
	this.shape_76.setTransform(-24.5,0.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgLBAQgCgBAAgDIAAgCQABgKAAgLIAAgVIAAgVIgMABQgIAAAAgHQAAgIAOAAIAHAAIABgMQACgRAHgIQAGgKARABQALgBAAAIQAAAHgKAAQgSAAgCAZIgBAFIARgBQAMAAAAAIQAAAFgGABIgGABIgRABIgBAQIAAAOIABAOQAAAOgCAJQAAAFgGAAQgDAAgCgCg");
	this.shape_77.setTransform(-32.5,-0.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgFA4QgCgCAAgEIAAgDIABgEIgBgLIAAgLIgCgdIgCgfIgHAAQgQAAgKgCQgGgCAAgFQAAgEACgCQACgDAEABIAMABIAMABIAOAAIANAAIARAAIARABQAEAAACACQACADAAADQAAADgCADQgCACgEAAIgRgBIgRgBIgGAAIACAiIACAhIABAIIAAAIQAAAFgBAEQgDAFgEAAQgCAAgDgCg");
	this.shape_78.setTransform(-45.6,-1.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgfAvQgKgNAAgPQAAgZAVgbQASgWARgBIAHABIAFABQADgDAEgBQAFABACAGIABAPQAAADgBACQgDADgEABQgFAAgCgGIgDgGIgJgBQgLAAgMARQgSAWAAAUQAAAJAGAIQAHAHAJAAQAGAAAIgEIAOgJQAEgEADABQADAAACACQACADAAADQAAADgDACQgUATgTgBQgQABgLgMg");
	this.shape_79.setTransform(-56,-1.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AggA7QgIgIAAgYIABgLIAAgLIgBgFQAAAAAAAAQAAAAABgBQAAAAAAgBQAAgBABAAIABghIAAgIIgBgIQAAgJAHAAQAEAAACADIARgEIAOgCQASABALAEQAGACAAAFQAAAEgCACQgDACgDAAIgCAAQgNgEgMAAIgMACIgQADIAAAHIgBAdIAggDIASgBQAEAAACACQACACAAAEQAAAFgHACIgSABIgiADIAAAKIgBAJQAAARADADQACACAKAAIANAAIAOAAIAFgBIAEgBQAIABAAAHQAAAHgHABQgHABgWAAQgYAAgGgFg");
	this.shape_80.setTransform(-65.4,-1.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AgjA+QgDgDAAgDIABgtIAAgsIAAgKIAAgJQAAgEACgDQACgCAEAAQAAABABAAQAAAAABAAQAAAAABAAQABABAAAAIARgCIAMgBQAJgBALADQAPADAAAGQAAADgCADQgCACgEAAIgCAAQgKgEgPAAIgLABIgPACIAAAgQAPgDAHAAIAXABQAIABgBAHQAAAEgCACQgCABgEAAIgLgBIgLAAQgFAAgRAEIgBA0QAAADgCADQgCACgEAAQgDAAgBgCg");
	this.shape_81.setTransform(-74.7,-1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AgmA5QgCgCAAgDIAAgSIgBgSIABgUIACgUIgBgMIgBgLQABgFACgDQACgEAGABIASABQAKABAGAEQAfAQAAAYQAAALgLAIQgIAHgMAEQAYANALAOQACACAAADQAAADgCACQgCADgEAAQgDAAgCgDQgZgZgegIIABAPIAAAPQAAADgCACQgCACgDAAQgDAAgDgCgAgXghIAAAJIgBAPIgBAOIADAAIADAAQATAAAJgFQAEgBAEgEQAEgEAAgDQAAgLgMgJQgKgIgMgBIgLgBg");
	this.shape_82.setTransform(-84.6,-1.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AggA7QgIgIAAgYIABgLIAAgLIgBgFQAAAAAAAAQAAAAABgBQAAAAAAgBQAAgBABAAIABghIAAgIIgBgIQAAgJAHAAQAEAAACADIARgEIAOgCQASABALAEQAGACAAAFQAAAEgCACQgDACgDAAIgCAAQgNgEgMAAIgMACIgQADIAAAHIgBAdIAggDIASgBQAEAAACACQACACAAAEQAAAFgHACIgSABIgiADIAAAKIgBAJQAAARADADQACACAKAAIANAAIAOAAIAFgBIAEgBQAIABAAAHQAAAHgHABQgHABgWAAQgYAAgGgFg");
	this.shape_83.setTransform(-94.3,-1.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgfA7QgCgDAAgDIAAgWIABgfIACgfIAAgKIABgLQABgGAGAAIAHgBIALAAQANAAAMAJQANAKAAAPQAAATgOAKQgNAKgRAAIgJgBIAAAoQAAADgCADQgCABgDAAQgDAAgCgBgAgQgtIAAAOIgCAeIAIABQAMAAAJgGQAJgHAAgMQAAgIgJgHQgIgFgJAAIgGAAIgEAAg");
	this.shape_84.setTransform(-103.3,-1.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgZAhQgMgKAAgRQAAgSAKgOQAKgOARAAQAMAAAIAEQAKAFAAALQAAAIgJAGIgQAHIgcAOQAFAGAGADQAGAEAIAAQAFAAAHgCQAJgDACgEQADgEADAAQADAAACACQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAIgOAGQgLAFgLAAQgRAAgKgIgAgPgTQgGAHgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_85.setTransform(-116.2,0.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAVA5IgEgRIgBgSIAAgGIAAgGQAAgOgHAAQgJAAgHAIQgEAFgGAMQAAAdgDAFQgCAFgEAAQgEAAgCgCQgCgCAAgDIAAgEQABgCAAgJIAAgLIABg3IAAgMIAAgHIgBgIQAAgDACgCQACgCADAAQAHAAABAHIABANIgBARIAAAQIAAAHQAGgJAHgEQAGgEAIAAQANAAAFAIQADAGAAANIABAOIABAQIADAPIAAADQAAADgCACQgCACgDAAQgGAAgBgGg");
	this.shape_86.setTransform(-124.9,-1.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgFA4QgCgCAAgEIAAgDIABgEIgBgLIAAgLIgCgdIgCgfIgHAAQgQAAgKgCQgGgCAAgFQAAgEACgCQACgDAEABIAMABIAMABIAOAAIANAAIARAAIARABQAEAAACACQACADAAADQAAADgCADQgCACgEAAIgRgBIgRgBIgGAAIACAiIACAhIABAIIAAAIQAAAFgBAEQgDAFgEAAQgCAAgDgCg");
	this.shape_87.setTransform(-134.1,-1.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAJAXQgCgCAAgDIABgdIABgIQABgFAFAAQADAAABACQACACAAADIAAADIAAAEIgBAcQAAAHgHAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAgUALIAAgNIAAgPQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABgCADAAQAEAAACACQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAAOIgBANIABAFIAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgCADgEAAQgGAAAAgOg");
	this.shape_88.setTransform(-143.6,-5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAJAXQgCgCAAgDIABgdIABgJQABgEAEAAQAEAAABACQACACAAADIAAAEIAAACIgBAdQAAAHgHAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAgVAMIAAgPIAAgOQAAgBABgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCACAAQADAAADACQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAAOIAAAOIAAADIAAAEQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgDACgDAAQgGAAgBgMg");
	this.shape_89.setTransform(-57.3,21.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgEA7QgDgDAAgDQAAgDACgCQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQACAAADAEQADADAAAEQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgCAAgDgEgAgFAcIAAgJIAAgKIAAggIAAggQAAgHAHAAQAGAAAAAHIAABTQAAAGgGAAQgHAAAAgGg");
	this.shape_90.setTransform(-62.3,25.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAUA6QgEgIgIgKIgMgSIgOAJIgBAXQAAAEgBACQgDACgDAAQgIAAAAgKIABgTIABgTIABgZIAAgaIAAgIIgBgIQAAgEACgCQACgCADAAQADAAADACQACACAAAEIAAAIIAAAIIAAAYIAAAaIASgRIARgRQADgCADAAQADAAACACQACACABADQAAADgCADIgYAWIARAWQALAQAAAFQABADgDACQgDACgDAAQgEAAgCgEg");
	this.shape_91.setTransform(-67.7,25.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AASAlIgCgRIgBgQIABgHIAAgHQAAgQgGAAQgJAAgGAKQgHAJgEANIgBAIIAAAHIAAAGIAAAHQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgHIAAgGIABgVIABgVIAAgIIgBgHQAAgDACgCQADgCADAAQAHAAAAAKIABAJQAMgSANABQAMAAAFALQADAGAAAOIAAAIIAAAGIACARIABAPQAAADgCADQgCACgDAAQgHAAgBgHg");
	this.shape_92.setTransform(-76.3,27.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgHA3QgCgCAAgDIAAgOIAAgOIABgRIAAgRQAAgDACgDQACgCAEAAQACAAACACQACADAAADIgBARIAAARIAAAOIAAAOQAAADgCACQgCACgCAAQgEAAgCgCgAgEgpQgDgCAAgEQAAgEADgCQADgDACAAQAEAAACADQADACAAAEQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_93.setTransform(-82.5,25.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgEA1QgCgCAAgDIAAgIIAAgJIgBgrIgRgCQgHAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAFIAAAFIALgCQAIAAACABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEgBIgKACIABArIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_94.setTransform(-109.4,26.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgaA7QgJgCAAgGQAAgHAGAAIAJACQAHABAIAAQANgBAGgOQADgIAAgUQgEAIgFADQgGAFgGAAQgOAAgJgKQgIgJAAgOQAAgVAMgMQAMgNATAAQAIAAAFACQAFACACAEQAIgBAAAKIgCANIgBAPIgCAZQgBAOgDAKQgDANgIAFQgJAHgQAAIgRgBgAgNglQgIAJABANQAAAMAEAEQAEAGAJAAQAGAAAHgIQAGgIABgHIAEgaQgDgCgDgBQgDgCgEAAQgOAAgHAKg");
	this.shape_95.setTransform(-126.2,29.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgHA3QgCgCAAgDIAAgOIAAgOIABgRIAAgRQAAgDACgDQACgCAEAAQACAAACACQACADAAADIgBARIAAARIAAAOIAAAOQAAADgCACQgCACgCAAQgEAAgCgCgAgEgpQgDgCAAgEQAAgEADgCQADgDACAAQAEAAACADQADACAAAEQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_96.setTransform(-132.2,25.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AARAkQgJAFgMAAQgKAAgGgEQgHgFgCgKQgDgUAAgOQAAgLADgNQABgGAGAAQADAAACACQADACAAADIgBALIgCAMIABAUIADAPIAFACIAEABQAKAAALgEIAAgPIAAgOQAAgQABgMQABgHAGAAQAEAAACACQACACAAADIgCAdIABAPIAAARIAAAFIAAAFQAAADgCACQgCACgDAAQgGAAgCgHg");
	this.shape_97.setTransform(69.9,3.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgWAgQgKgLAAgRQgBgQAJgNQALgPASgBQAPAAAIAOQAGAMAAAPQgBAQgIAMQgKAOgPAAQgNAAgJgKgAgNgPQgFAJAAAKQAAALAGAGQAFAFAHAAQAHAAAGgGQAGgGAAgLQACgcgRAAQgKAAgHAKg");
	this.shape_98.setTransform(61.6,3.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgTA7QgDgCAAgDQAAgIAQgkIgbgzIgDgGIgCgFQAAgEADgCQACgCADAAQADAAACACQANASAOAhIALgaIAMgXQACgEAEAAQADAAADACQACACAAADIgBAEIgaA3QgKAVgEAOIgFAPQgCAFgFAAQgDAAgCgCg");
	this.shape_99.setTransform(53.4,5.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AASAlIgCgRIgBgQIABgHIAAgHQAAgQgGAAQgJAAgGAKQgHAJgEANIgBAIIAAAHIAAAGIAAAHQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgHIAAgGIABgVIABgVIAAgIIgBgHQAAgDACgCQADgCADAAQAHAAAAAKIABAJQAMgSANABQAMAAAFALQADAGAAAOIAAAIIAAAGIACARIABAPQAAADgCADQgCACgDAAQgHAAgBgHg");
	this.shape_100.setTransform(41.1,3.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAYAmIgFgFIgNAGQgFACgDAAQgSAAgIgKQgHgJAAgUQAAgRAMgNQANgNAQAAQAHAAAIAEQAKADAAAHIgBADIgBAJIgBAQIABAQIAFAMIACAFIAAABQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgIAJAAAMQAAANAEAFQAEAHAJAAQAGAAAFgDQADgBAFgFQgCgTAAgJIAAgIIABgIIgEgCIgEAAQgKAAgJAJg");
	this.shape_101.setTransform(32.9,3.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAVA5IgEgRIgBgSIAAgGIAAgGQAAgOgHAAQgJAAgHAIQgEAFgGAMQAAAdgDAFQgCAFgEAAQgEAAgCgCQgCgCAAgDIAAgEQABgCAAgJIAAgLIABg3IAAgMIAAgHIgBgIQAAgDACgCQACgCADAAQAHAAABAHIABANIgBARIAAAQIAAAHQAGgJAHgEQAGgEAIAAQANAAAFAIQADAGAAANIABAOIABAQIADAPIAAADQAAADgCACQgCACgDAAQgGAAgBgGg");
	this.shape_102.setTransform(24.5,1.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgEA1QgCgCAAgDIAAgIIAAgJIgBgrIgRgCQgHAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAFIAAAFIALgCQAIAAACABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEgBIgKACIABArIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_103.setTransform(16.3,2.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgdAjIAAg0IAAgIIABgHQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAACAEQAEAFAAAJIAAAFQgBAKgHAAQgGAAgBgIIAAgFIAAgGQgMABgHAFQgGAFgEAKIAAApQAAAHgIAAQgGAAgBgHg");
	this.shape_104.setTransform(4.5,3.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgHA3QgCgCAAgDIAAgOIAAgOIABgRIAAgRQAAgDACgDQACgCAEAAQACAAACACQACADAAADIgBARIAAARIAAAOIAAAOQAAADgCACQgCACgCAAQgEAAgCgCgAgEgpQgDgCAAgEQAAgEADgCQADgDACAAQAEAAACADQADACAAAEQAAAEgDACQgCACgEAAQgCAAgDgCg");
	this.shape_105.setTransform(-9.9,1.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgUAqQgMgEAAgIQAAgCACgDQADgCADAAQACAAAEAEIAIADIAIAAQAGAAAFgBQAHgCAAgFQAAgLgOgDIgHgCQgKgCgFgDQgGgEAAgIQAAgQAPgGIAOgFIAOgFQADgBADAAQAEAAACACQACACAAADIABAGIABAHQAAAEgCABQgCADgEAAQgEAAgBgDQgCgCAAgGIgRAFQgMAFAAAHIAFABQAQAEAJAFQALAGABAQQAAAMgLAGQgJAFgNABQgJAAgJgEg");
	this.shape_106.setTransform(-16.2,3.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAYAmIgFgFIgNAGQgFACgDAAQgSAAgIgKQgHgJAAgUQAAgRAMgNQANgNAQAAQAHAAAIAEQAKADAAAHIgBADIgBAJIgBAQIABAQIAFAMIACAFIAAABQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgIAJAAAMQAAANAEAFQAEAHAJAAQAGAAAFgDQADgBAFgFQgCgTAAgJIAAgIIABgIIgEgCIgEAAQgKAAgJAJg");
	this.shape_107.setTransform(-23.7,3.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgZAhQgMgKAAgRQAAgSAKgOQAKgOARAAQAMAAAIAEQAKAFAAALQAAAIgJAGIgQAHIgcAOQAFAGAGADQAGAEAIAAQAFAAAHgCQAJgDACgEQADgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAIgOAGQgLAFgLAAQgRAAgKgIgAgPgTQgGAHgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_108.setTransform(-31.8,3.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgUAqQgMgEAAgIQAAgCACgDQADgCADAAQACAAAEAEIAIADIAIAAQAGAAAFgBQAHgCAAgFQAAgLgOgDIgIgCQgJgCgFgDQgGgEAAgIQAAgQAPgGIANgFIAPgFQADgBADAAQAEAAACACQACACAAADIABAGIABAHQAAAEgCABQgCADgDAAQgEAAgCgDQgCgCAAgGIgRAFQgMAFAAAHIAFABQAQAEAJAFQAMAGgBAQQAAAMgKAGQgJAFgNABQgJAAgJgEg");
	this.shape_109.setTransform(-44.8,3.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgHA3QgCgCAAgDIAAgOIAAgOIABgRIAAgRQAAgDACgDQACgCAEAAQACAAACACQACADAAADIgBARIAAARIAAAOIAAAOQAAADgCACQgCACgCAAQgEAAgCgCgAgEgpQgDgCAAgEQAAgEADgCQADgDACAAQAEAAACADQADACAAAEQAAAEgDACQgCACgEAAQgCAAgDgCg");
	this.shape_110.setTransform(-50.3,1.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AgjA6QgDgDAAgDIAAgWIACgeIABgfIABgVQABgEACgBQAKgDANAAQAMAAAMAJQAPAKAAAQQAAATgPAKQALAFAGAGQAGAGAAAHQAAAJgLAJQgGAGgIADQgQAGgbAAQgCAAgEgDgAgWAeIAAAQQATgBALgFQAGgCAFgEQAEgEABgCQAAgEgKgEIgOgFIgIgBIgDAAIgCAAIgJgBIAAARgAgUgsIAAANIgBAdIALABQALgBAHgGQAIgHAAgKQAAgHgIgHQgIgGgIAAIgMABg");
	this.shape_111.setTransform(-61.8,1.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AgmA5QgCgCAAgDIAAgSIgBgSIACgUIABgUIgBgMIAAgLQgBgFADgDQADgEAFABIASABQAKABAHAEQAeAQAAAYQAAALgLAIQgHAHgNAEQAXANAMAOQACACAAADQAAADgCACQgCADgEAAQgDAAgCgDQgZgZgegIIAAAPIABAPQAAADgCACQgCACgDAAQgDAAgDgCgAgXghIAAAJIgBAPIgCAOIAEAAIADAAQATAAAJgFQAEgBAEgEQAEgEAAgDQAAgLgMgJQgKgIgMgBIgLgBg");
	this.shape_112.setTransform(-71.7,1.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AggA6QgIgGAAgYIABgLIAAgNIgBgDQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABggIAAgIIgBgJQAAgJAHAAQAEAAACACIARgDIAOgBQASgBALAFQAGACAAAFQAAADgCADQgDACgDAAIgCAAQgNgEgMAAIgMACIgQADIAAAIIgBAcIAggCIASgCQAEAAACACQACACAAADQAAAHgHAAIgSACIgiADIAAALIgBAJQAAAQADADQACACAKAAIANAAIAOgBIAFAAIAEgBQAIAAAAAIQAAAHgHABQgHABgWAAQgYABgGgHg");
	this.shape_113.setTransform(-81.4,1.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AgNA3QgJgXgLgqIgGgVQgFgPAAgGQAAgDADgCQACgCADAAQAGAAABAGIADAOIAHAZQAIAbAHAVIAAgBIATg2IAHgTQAEgLAFgGQACgDAEAAQADAAACACQADACAAAEIgCAFQgFAGgDAIIgFAQIgVA2QgDALgFAIQgBAFgFAAQgGAAgCgGg");
	this.shape_114.setTransform(-91.1,1.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgZAhQgMgKAAgRQAAgSAKgOQAKgOARAAQAMAAAIAEQAKAFAAALQAAAIgJAGIgQAHIgcAOQAFAGAGADQAGAEAIAAQAFAAAHgCQAJgDACgEQADgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAIgOAGQgLAFgLAAQgRAAgKgIgAgPgTQgGAHgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_115.setTransform(-105.3,3.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAVA5IgEgRIgBgSIAAgGIAAgGQAAgOgHAAQgJAAgHAIQgEAFgGAMQAAAdgDAFQgCAFgEAAQgEAAgCgCQgCgCAAgDIAAgEQABgCAAgJIAAgLIABg3IAAgMIAAgHIgBgIQAAgDACgCQACgCADAAQAHAAABAHIABANIgBARIAAAQIAAAHQAGgJAHgEQAGgEAIAAQANAAAFAIQADAGAAANIABAOIABAQIADAPIAAADQAAADgCACQgCACgDAAQgGAAgBgGg");
	this.shape_116.setTransform(-114.1,1.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgEA1QgCgCAAgDIAAgIIAAgJIgBgrIgRgCQgHAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAFIAAAFIALgCQAIAAACABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEgBIgKACIABArIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_117.setTransform(-122.3,2.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgLBBQgCgDAAgDIAAgBQABgKAAgLIAAgVIAAgVIgMABQgIAAAAgIQAAgHAOgBIAHAAIABgLQACgRAHgIQAGgKARAAQALAAAAAIQAAAHgKAAQgSAAgCAaIgBAEIARgBQAMABAAAHQAAAGgGABIgGAAIgRABIgBAQIAAAOIABAOQAAAPgCAHQAAAHgGAAQgDgBgCgBg");
	this.shape_118.setTransform(-134.7,1.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgWAgQgKgLAAgRQgBgQAJgNQALgPASgBQAPAAAIAOQAGAMAAAPQgBAQgIAMQgKAOgPAAQgNAAgJgKgAgNgPQgFAJAAAKQAAALAGAGQAFAFAHAAQAHAAAGgGQAGgGAAgLQACgcgRAAQgKAAgHAKg");
	this.shape_119.setTransform(-142.7,3.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgDAtQgDgDAAgDIgBgbIgCgaQAAgIgDgFQgFADgFAFIgJAKIgEAFIgBAMIgBAOIABAGIABAGQAAADgDACQgCACgDAAQgJAAAAgTIABgOIABgMIgBgMIAAgNQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAFIABAHQAEgIAHgGQAIgHAFAAQAMAAAEAMQAEgFAFgDQAGgDAIAAQAMAAAFAOIADAVQACAMADAeQABADgDACQgCADgDAAQgGAAgBgHIgDgYIgDgWQAAgFgCgFQgDgHgDAAQgDAAgHAFQgIAEgCADIABAOIACATIABAUQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_120.setTransform(99.8,-20.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgdAjIAAg0IAAgIIABgHQAAgIAGAAQAIAAAAANQAOgOASAAQAFAAAEAEQADAFAAAJIAAAFQgBAKgHAAQgHAAAAgIIAAgFIAAgGQgMABgHAFQgGAFgEAKIAAApQgBAHgHAAQgHAAAAgHg");
	this.shape_121.setTransform(90.2,-20.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgWAgQgKgLAAgRQgBgQAJgNQALgQASAAQAPABAIAOQAGAKAAAQQgBAQgIAMQgKANgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAFAHAAQAHAAAGgFQAGgHAAgLQACgcgRAAQgKAAgHALg");
	this.shape_122.setTransform(82,-20.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgLBAQgCgCAAgCIAAgCQABgKAAgMIAAgUIAAgVIgMABQgIAAAAgHQAAgIAOAAIAHAAIABgMQACgRAHgIQAGgJARAAQALAAAAAHQAAAHgKAAQgSAAgCAZIgBAFIARAAQAMgBAAAIQAAAFgGABIgGABIgRABIgBAQIAAAOIABAOQAAAOgCAJQAAAFgGABQgDgBgCgCg");
	this.shape_123.setTransform(74,-21.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0000").s().p("AgfAuQgKgMAAgPQAAgZAVgbQASgWARAAIAHAAIAGABQACgEAEAAQAFAAACAHIABAPQAAAEgCABQgCAEgDAAQgGgBgBgFIgFgGIgIgBQgKAAgNARQgSAWAAAUQAAAJAGAIQAGAHAJAAQAHAAAJgEIANgJQAEgDACAAQADgBADADQACADAAADQAAADgDACQgUATgUgBQgPAAgLgMg");
	this.shape_124.setTransform(50.6,-22.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0000").s().p("AggA7QgIgIAAgYIABgLIAAgLIgBgFQAAAAAAAAQAAAAABgBQAAAAAAgBQAAgBABAAIABghIAAgIIgBgIQAAgJAHAAQAEAAACADIARgEIAOgCQASABALAEQAGACAAAFQAAADgCACQgDADgDAAIgCAAQgNgEgMAAIgMABIgQAEIAAAHIgBAeIAggEIASgBQAEAAACACQACACAAAEQAAAFgHACIgSABIgiADIAAAKIgBAJQAAARADADQACACAKAAIANAAIAOAAIAFgBIAEAAQAIAAAAAIQAAAGgHABQgHACgWAAQgYgBgGgFg");
	this.shape_125.setTransform(41.1,-22.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0000").s().p("AgjA+QgDgDAAgDIABgtIAAgsIAAgKIAAgKQAAgDACgDQACgCADAAQABAAABABQAAAAABAAQAAAAABAAQAAABABAAIARgDIAMgBQAIABAMACQAPADAAAGQAAADgCADQgCACgEAAIgCgBQgKgDgPAAIgLABIgPACIAAAhQAPgEAHAAIAXABQAHABAAAHQABAEgDACQgCAAgEAAIgLAAIgLAAQgFAAgRAEIgBA0QAAADgCADQgCABgEAAQgDAAgBgBg");
	this.shape_126.setTransform(31.8,-22);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("AgmA5QgCgCAAgDIAAgSIgBgSIACgUIABgUIgBgMIAAgLQgBgFADgDQACgEAGABIASABQAKABAHAEQAeAQAAAYQAAALgLAIQgHAHgNAEQAXANAMAOQACACAAADQAAADgCACQgCADgEAAQgDAAgCgDQgZgZgegIIAAAPIABAPQAAADgCACQgCACgDAAQgEAAgCgCgAgXghIAAAJIgBAPIgCAOIAEAAIADAAQATAAAJgFQAFgBADgEQAEgEAAgDQAAgLgMgJQgKgIgMgBIgLgBg");
	this.shape_127.setTransform(22,-22.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("AggA7QgIgIAAgYIABgLIAAgLIgBgFQAAAAAAAAQAAAAABgBQAAAAAAgBQAAgBABAAIABghIAAgIIgBgIQAAgJAHAAQAEAAACADIARgEIAOgCQASABALAEQAGACAAAFQAAADgCACQgDADgDAAIgCAAQgNgEgMAAIgMABIgQAEIAAAHIgBAeIAggEIASgBQAEAAACACQACACAAAEQAAAFgHACIgSABIgiADIAAAKIgBAJQAAARADADQACACAKAAIANAAIAOAAIAFgBIAEAAQAIAAAAAIQAAAGgHABQgHACgWAAQgYgBgGgFg");
	this.shape_128.setTransform(12.3,-22.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AgfA6QgCgCAAgDIAAgWIABgfIACgfIAAgKIABgLQABgGAGAAIAHgBIALgBQANAAAMAKQANAKAAAPQAAATgOAKQgNAKgRAAIgJgBIAAAoQAAADgCACQgCACgDAAQgDAAgCgCgAgQgsIAAANIgCAfIAIAAQAMAAAJgGQAJgHAAgMQAAgIgJgHQgIgFgJAAIgGAAIgEABg");
	this.shape_129.setTransform(3.3,-22.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgZAhQgMgKAAgRQAAgSAKgOQAKgOARAAQAMAAAIAEQAKAFAAALQAAAIgJAGIgQAHIgcAOQAFAGAGADQAGAEAIAAQAFAAAHgCQAJgDACgEQADgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAIgOAGQgLAFgLAAQgRAAgKgIgAgPgTQgGAHgDANIAXgKQANgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_130.setTransform(-9.6,-20.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAVA5IgEgRIgBgSIAAgGIAAgGQAAgOgHAAQgJAAgHAIQgEAFgGAMQAAAdgDAFQgCAFgEAAQgEAAgCgCQgCgCAAgDIAAgEQABgCAAgJIAAgLIABg3IAAgMIAAgHIgBgIQAAgDACgCQACgCADAAQAHAAABAHIABANIgBARIAAAQIAAAHQAGgJAHgEQAGgEAIAAQANAAAFAIQADAGAAANIABAOIABAQIADAPIAAADQAAADgCACQgCACgDAAQgGAAgBgGg");
	this.shape_131.setTransform(-18.4,-22.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgEA1QgCgCAAgDIAAgIIAAgJIgBgrIgRgCQgHAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAFIAAAFIALgCQAIAAACABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEgBIgKACIABArIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_132.setTransform(-26.6,-21.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgaA7QgJgCAAgGQAAgHAHAAIAJABQAGACAHgBQAOAAAGgNQADgKAAgSQgDAHgGADQgGAEgGAAQgOABgJgKQgIgKAAgNQAAgVAMgMQAMgNATAAQAIAAAEACQAFABADAEQAIABAAAIIgBAOIgCAPIgDAYQAAAQgDAJQgDAMgHAGQgKAHgQAAIgRgBgAgOglQgGAJAAAOQgBAKAFAFQAEAGAJAAQAGAAAHgIQAGgIABgIIAEgZQgDgCgDgCQgEgBgDAAQgOAAgIAKg");
	this.shape_133.setTransform(-39.1,-18.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AASAlIgCgRIgBgRIABgFIAAgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIAAAIIAAAGIAAAIQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgIIAAgGIABgVIABgWIAAgGIgBgHQAAgEACgCQADgCADAAQAHAAAAAJIABAJQAMgQANgBQAMABAFAKQADAIAAAOIAAAHIAAAGIACAQIABAQQAAADgCADQgCACgDAAQgHAAgBgHg");
	this.shape_134.setTransform(-47,-20.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgHA3QgCgDAAgDIAAgNIAAgOIABgSIAAgRQAAgCACgDQACgCAEAAQACAAACACQACADAAACIgBARIAAASIAAAOIAAANQAAADgCADQgCACgCAAQgEAAgCgCgAgEgpQgDgDAAgDQAAgDADgDQADgDACAAQAEAAACADQADADAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_135.setTransform(-53.2,-22.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgaAzQgLgKAAgRQAAgUALgLQAKgNARAAQAIABAGADIAHAEQABggABgKQABgHAGAAQAHAAgBAIIgDAuIAAAVQAAAZACANIAAACQABADgDABQgCACgDAAQgEABgCgHQgGAEgGACQgGACgFAAQgQAAgKgLgAgRABQgHAIAAAPQABAKAGAGQAIAIAJgBQAFAAAEgBIAJgHIACgCIAAgOIAAgIIAAgJQgCgGgFgCQgFgDgHgBQgMABgGAGg");
	this.shape_136.setTransform(-60.1,-22.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AASAlIgCgRIgBgRIABgFIAAgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIAAAIIAAAGIAAAIQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgIIAAgGIABgVIABgWIAAgGIgBgHQAAgEACgCQADgCADAAQAHAAAAAJIABAJQAMgQANgBQAMABAFAKQADAIAAAOIAAAHIAAAGIACAQIABAQQAAADgCADQgCACgDAAQgHAAgBgHg");
	this.shape_137.setTransform(-68.6,-20.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAYAnIgFgGIgNAGQgFACgDAAQgSAAgIgKQgHgKAAgSQAAgSAMgNQANgNAQAAQAHAAAIADQAKAFAAAFIgBAFIgBAJIgBAQIABAOIAFAOIACADIAAACQAAADgCACQgCACgDAAQgBAAgEgDgAgMgSQgIAKAAALQAAANAEAFQAEAHAJAAQAGAAAFgDQADgBAFgEQgCgUAAgKIAAgGIABgJIgEgCIgEgBQgKAAgJAKg");
	this.shape_138.setTransform(-76.7,-20.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgEA1QgCgCAAgDIAAgIIAAgJIgBgrIgRgCQgHAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAFIAAAFIALgCQAIAAACABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgEgBIgKACIABArIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_139.setTransform(-84.4,-21.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgUAqQgMgEAAgHQAAgDADgDQACgCADAAQACAAAEADIAIADIAIACQAGgBAFgCQAHgCAAgEQAAgLgPgDIgGgCQgLgCgEgDQgGgEAAgIQAAgPAPgIIAOgEIAOgFQADgBAEgBQADAAACACQACADAAADIABAHIABAGQAAADgCACQgCADgEAAQgDAAgCgDQgBgCgBgGIgSAFQgLAFAAAHIAEABQARADAIAGQANAGAAAQQAAAMgLAHQgJAEgNAAQgJABgJgEg");
	this.shape_140.setTransform(-92,-20.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgcAjIAAg0IAAgIIAAgHQAAgIAGAAQAIAAAAANQAOgOASAAQAFAAAEAEQACAFAAAJIAAAFQAAAKgHAAQgHAAABgIIgBgFIAAgGQgMABgHAFQgGAFgFAKIAAApQAAAHgHAAQgHAAABgHg");
	this.shape_141.setTransform(-99,-20.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgaAzQgKgKAAgRQAAgUAKgLQAKgNARAAQAIABAGADIAGAEQACggABgKQABgHAGAAQAGAAAAAIIgCAuIgBAVQAAAZACANIAAACQABADgDABQgCACgDAAQgFABgBgHQgGAEgGACQgGACgFAAQgQAAgKgLgAgRABQgHAIAAAPQABAKAGAGQAIAIAJgBQAFAAAEgBIAJgHIACgCIAAgOIAAgIIAAgJQgCgGgGgCQgEgDgHgBQgMABgGAGg");
	this.shape_142.setTransform(-116,-22.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AASAlIgCgRIgBgRIABgFIAAgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIAAAIIAAAGIAAAIQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgIIAAgGIABgVIABgWIAAgGIgBgHQAAgEACgCQADgCADAAQAHAAAAAJIABAJQAMgQANgBQAMABAFAKQADAIAAAOIAAAHIAAAGIACAQIABAQQAAADgCADQgCACgDAAQgHAAgBgHg");
	this.shape_143.setTransform(-124.4,-20.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AghAtQgJgLgCgVQgCgKAAgcIABgRIABgKQACgFAFAAQAHAAAAANIAAAsQAAAtAfAAQAeAAAAhMIAAgIIAAgGQAAgEACgEQACgEAEAAQAIAAAAAKIAAAJIAAAKQAABWgtAAQgXAAgMgNg");
	this.shape_144.setTransform(-134.2,-22);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAJAXQgCgCAAgDIABgdIABgIQABgFAFAAQADAAABACQACACAAADIAAAEIAAADIgBAcQAAAHgHAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAgUALIAAgNIAAgQQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABgCADAAQAEAAACACQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAIAAAPIgBANIABAFIAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgCACgEAAQgGgBAAgNg");
	this.shape_145.setTransform(-143.6,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86,p:{x:-124.9,y:-1.3}},{t:this.shape_85,p:{x:-116.2,y:0.7}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:-45.6,y:-1.2}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74,p:{x:-6.7,y:0.8}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:28.1,y:-0.5}},{t:this.shape_70,p:{x:36.4,y:-1.3}},{t:this.shape_69,p:{x:45.1,y:0.7}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_85,p:{x:-107.1,y:-20.2}},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_78,p:{x:61,y:-22.2}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_69,p:{x:-3.6,y:3.6}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_74,p:{x:-140.5,y:27.5}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_86,p:{x:-117.4,y:25.4}},{t:this.shape_94},{t:this.shape_71,p:{x:-97.4,y:26.2}},{t:this.shape_70,p:{x:-89.2,y:25.4}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},39).to({state:[]},71).wait(80));

	// Layer 3
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1,1,1).p("AhBhWIEPAkIAWADIgKADIiHAlIk2Be");
	this.shape_146.setTransform(128.8,15.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(1,1,1).p("ATOD1QgsC0lEA6QlEA5qEAQQqFAQlchZQlchagXmIQgXmHGWhSQGWhTJugDQJugCHJBYQHJBYgFDgQgEDghNAH");
	this.shape_147.setTransform(-17,0);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AywHjQldhagWmIQgXmHGWhSQGWhTJugDQJugCHJBYQHJBYgFDgQgFDghMAHQDXANA5AXIALAGIiHAlIk2BfQgrC0lEA6QlEA5qEAQQhiADhbAAQn9AAknhMgAYaBrIkQgkg");
	this.shape_148.setTransform(-6.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]}).to({state:[]},110).wait(80));

	// Layer 5
	this.instance = new lib.anim_pro_pointer();
	this.instance.parent = this;
	this.instance.setTransform(133.5,64.4,0.569,0.569,0,0,0,200.1,134.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({_off:false},0).wait(80));

	// Layer 2
	this.instance_1 = new lib.anim_pro_pointer();
	this.instance_1.parent = this;
	this.instance_1.setTransform(133.5,64.4,0.569,0.569,0,0,0,200.1,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},110).wait(80));

	// Layer 1
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("Ag+BgQgGgGAAgHIAAiGIgBgRIABgQQACgMAUgDQAKgDAWAAQAXAAAWAQQAaASAAAbQAAAOgFAKQgFAJgKAIQAMAGAKAMQALANAAAOQAAARgTAPQgMAKgOAFQgcALgtAAQgIAAgGgHgAghBEQAVgBAZgHQAWgHAAgHQAAgKgOgHQgLgHgKgBIghAAgAghgoIAAAbIARAAQAmgDAAgZQAAgJgMgJQgKgIgOAAIgTAAg");
	this.shape_149.setTransform(201.1,-107.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_150.setTransform(184.4,-107.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_151.setTransform(168.1,-107.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF0000").s().p("AgbBaQgQglgShFIgLgiQgHgYAAgJQAAgHAGgFQAFgFAHAAQAMAAAFANIAGAWIALApQAKAjAJAcIAdhMIALgeQAIgSAJgKQAFgGAIAAQAIAAAFAFQAFAFAAAHQAAAFgDAFQgHAKgGAOIgJAZIgiBXQgGAPgIAQQgGAJgKAAQgNAAgFgMg");
	this.shape_152.setTransform(150.9,-107.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF0000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_153.setTransform(123,-107.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF0000").s().p("AA2BhQgGgFAAgHIAAgbIgBgcIAAgNQgUABgcAFIgxAJIgCAbIgBAbQABAGgGAFQgFAFgHAAQgIAAgEgFQgGgFAAgGQABgNACgZIACgmIABgvIABgvQAAgHAEgEQAGgGAHAAQAIAAAEAGQAFAEAAAIIAAAcIgBAdIgBANIgBAMIAxgJQAcgFAUgBIACguQAAgJAGgNQAHgQAJgBQAHABAFAEQAFAFABAIIgBADQgDAJAAAHIAAALIgBAMIgBAkIgCAjIACAbIABAcQAAAHgEAFQgGAFgHAAQgIAAgFgFg");
	this.shape_154.setTransform(104.8,-107.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF0000").s().p("AgLBcQgHgFAAgHIABgFIABgGIgBgSIgBgRQAAgRgCgdIgEguIgGAAQgdAAgQgEQgOgDgBgNQABgHAEgFQAFgGAJAAIAUADIAVABIAWAAIAXgBIAcACIAdABQAIAAAGAFQAEAFAAAHQAAAIgEAFQgGAFgIAAIgegCIgfgBIAEAzQACAgAAATIABANIAAANQAAAJgDAIQgGAKgJAAQgGAAgFgFg");
	this.shape_155.setTransform(85.7,-107.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF0000").s().p("AhABmQgFgFAAgIIAAiRIAAgOIAAgQQAAgHAGgEQAEgGAIAAQAFAAAEACQAOgDANAAIAVgBQAOAAAWAFQAcAIAAAJQAAAIgFAFQgFAGgIgBIgGgBQgRgFgXAAIgRABIgWADIAAAqQATgFANAAQAWAAASACQAQADAAAOQAAAIgFAEQgFAFgIAAIgUgBIgSgBQgKAAgWAGIAABPQAAAIgGAFQgGAEgHAAQgIAAgEgEg");
	this.shape_156.setTransform(57.6,-107.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF0000").s().p("AhDBPQgcgYAAgkQAAgqAbgkQAegoAuAAQAsAAAWAUQAWAVAAAoQAAAqgZAkQgcAoguAAQglAAgbgVgAgoglQgTAZAAAfQAAAVAQANQARANAXAAQAbAAATgcQARgYAAggQAAgagMgLQgLgKgdABQgcgBgUAcg");
	this.shape_157.setTransform(39,-107.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF0000").s().p("ABEBTIgGgfQgHgXgHgqIgTA1IgHAXQgFAOgFAJQgHAMgLAAQgMAAgGgPIgHgXQgKghgIgiIgQA9IgFAdQgEARgOABQgJAAgGgHQgEgFAAgGQAAgVAJgeIAOgwIAHgnQAGgbAHgJQAHgJAJAAQAMAAAFAMQAGALAGAiQAFAhALAmQAOgmAMgsIAHgeQAHgSAPAAQAOAAAGAWQADAIADAXQAIA1ALAmQALAoAAADQAAAIgGAFQgGAEgGAAQgOAAgIgTg");
	this.shape_158.setTransform(6.2,-107.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF0000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_159.setTransform(-13.6,-107.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF0000").s().p("AhCBPQgdgYAAgkQAAgqAbgkQAegoAtAAQAtAAAWAUQAWAVAAAoQAAAqgZAkQgdAogsAAQgmAAgagVgAgoglQgTAZAAAfQAAAVAQANQARANAYAAQAaAAATgcQARgYAAggQAAgagMgLQgMgKgdABQgagBgVAcg");
	this.shape_160.setTransform(-32.6,-107.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF0000").s().p("AhABmQgFgFAAgIIAAiRIAAgOIAAgQQAAgHAGgEQAEgGAIAAQAFAAAEACQAOgDANAAIAVgBQAOAAAWAFQAcAIAAAJQAAAIgFAFQgFAGgIgBIgGgBQgRgFgXAAIgRABIgWADIAAAqQATgFANAAQAWAAASACQAQADAAAOQAAAIgFAEQgFAFgIAAIgUgBIgSgBQgKAAgWAGIAABPQAAAIgGAFQgGAEgHAAQgIAAgEgEg");
	this.shape_161.setTransform(-50.6,-107.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF0000").s().p("AgMBcQgFgFAAgHIAAgFIABgGIgBgSIgBgRQAAgRgDgdIgDguIgHAAQgcAAgRgEQgOgDABgNQgBgHAFgFQAFgGAJAAIAUADIAUABIAYAAIAVgBIAeACIAdABQAHAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgHAAIgggCIgegBIADAzQADAgAAATIABANIABANQAAAJgFAIQgEAKgKAAQgGAAgGgFg");
	this.shape_162.setTransform(-78.9,-107.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF0000").s().p("Ag4BNQgTgUAAgbQAAgpAlgtQAgglAgAAIAKAAIAIABQAGgFAHAAQANAAADAPQADAKAAAPQAAAGgEAFQgFAHgJAAQgMAAgFgMQgDgGgCgBQgCgBgIAAQgQAAgUAZQgdAiAAAeQAAAOAJAKQAJAKANAAQAMAAANgHIATgMQAKgHAFAAQAIAAAFAGQAFAFAAAHQAAAHgHAGQgjAdgjAAQgcAAgUgVg");
	this.shape_163.setTransform(-96,-107.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF0000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_164.setTransform(-111.9,-107.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF0000").s().p("AhABmQgFgFAAgIIAAiRIAAgOIAAgQQAAgHAGgEQAEgGAIAAQAFAAAEACQAOgDANAAIAVgBQAOAAAWAFQAcAIAAAJQAAAIgFAFQgFAGgIgBIgGgBQgRgFgXAAIgRABIgWADIAAAqQATgFANAAQAWAAASACQAQADAAAOQAAAIgFAEQgFAFgIAAIgUgBIgSgBQgKAAgWAGIAABPQAAAIgGAFQgGAEgHAAQgIAAgEgEg");
	this.shape_165.setTransform(-128.1,-107.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF0000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_166.setTransform(-144.3,-107.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF0000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_167.setTransform(-160.6,-107.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF0000").s().p("Ag4BgQgGgEAAgHIAAgjQABgUACgmQADgnAAgTQAAghASABIAMgCIASAAQAZAAAVAQQAZASAAAaQgBAggZATQgXAQgfAAIgKAAIgBA6QAAAHgFAEQgFAFgGAAQgIAAgEgFgAgXgxIgCAsIAIABQATAAAOgKQAOgKgBgQQAAgLgNgIQgNgIgNAAIgHAAIgGAAIAAASg");
	this.shape_168.setTransform(-176,-108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]}).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185,-128.8,420.5,250.2);


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
		var bgm = createjs.Sound.play('bgmPP',{loop:-1});
		
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
		
		 window.open ("pp_Scene2.html","_self");
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
(lib.pp_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1_repeat:187});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		playSound("perfectformoftheverb");
	}
	this.frame_39 = function() {
		playSound("UnderstandingthePerfectFormoftheVerb");
	}
	this.frame_110 = function() {
		playSound("thewordperfectmeanscomplete");
	}
	this.frame_186 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_197 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(71).call(this.frame_110).wait(76).call(this.frame_186).wait(11).call(this.frame_197).wait(1));

	// content
	this.instance = new lib.contentperfectform();
	this.instance.parent = this;
	this.instance.setTransform(270.8,203.3,1,1,0,0,0,45.5,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(198));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.BkScene("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.1,193.6,1.041,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293.7,201.6,522.8,398.7);
// library properties:
lib.properties = {
	id: 'ECFAB997E176534FBE3F4E1DBCF201B2',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/afterifusehadandnotwouldhave.mp3", id:"afterifusehadandnotwouldhave"},
		{src:"sounds/beforeyoufinishthisprogram.mp3", id:"beforeyoufinishthisprogram"},
		{src:"sounds/boo.mp3", id:"boo"},
		{src:"sounds/futureperfecttense.mp3", id:"futureperfecttense"},
		{src:"sounds/indescribingtwopastactions.mp3", id:"indescribingtwopastactions"},
		{src:"sounds/bgmPP.mp3", id:"bgmPP"},
		{src:"sounds/mostcommonverberrorsoccur.mp3", id:"mostcommonverberrorsoccur"},
		{src:"sounds/ohbaby.mp3", id:"ohbaby"},
		{src:"sounds/pastperfecttense.mp3", id:"pastperfecttense"},
		{src:"sounds/perc_techno.mp3", id:"perc_techno"},
		{src:"sounds/perfectformoftheverb.mp3", id:"perfectformoftheverb"},
		{src:"sounds/presentperfecttense.mp3", id:"presentperfecttense"},
		{src:"sounds/real_disco.mp3", id:"real_disco"},
		{src:"sounds/relax.mp3", id:"relax"},
		{src:"sounds/theformulausetheappropriate.mp3", id:"theformulausetheappropriate"},
		{src:"sounds/thesatrequiresaknowledge.mp3", id:"thesatrequiresaknowledge"},
		{src:"sounds/theverbformindicatingbefore.mp3", id:"theverbformindicatingbefore"},
		{src:"sounds/theverbformindicatingpreceded.mp3", id:"theverbformindicatingpreceded"},
		{src:"sounds/theverbindicatingthatanaction.mp3", id:"theverbindicatingthatanaction"},
		{src:"sounds/thewordperfectmeanscomplete.mp3", id:"thewordperfectmeanscomplete"},
		{src:"sounds/thissoundsmoredifficultthanitis.mp3", id:"thissoundsmoredifficultthanitis"},
		{src:"sounds/UnderstandingthePerfectFormoftheVerb.mp3", id:"UnderstandingthePerfectFormoftheVerb"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/yeah_calm.mp3", id:"yeah_calm"},
		{src:"sounds/youhadlearnedtheperfecttense.mp3", id:"youhadlearnedtheperfecttense"},
		{src:"sounds/youhavelearnedtheperfectform.mp3", id:"youhavelearnedtheperfectform"}
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
an.compositions['ECFAB997E176534FBE3F4E1DBCF201B2'] = {
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