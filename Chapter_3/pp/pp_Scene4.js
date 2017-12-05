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


(lib.contentfutureperfecttense = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.v1a.start();*/
	}
	this.frame_58 = function() {
		playSound("moog_blip");
	}
	this.frame_59 = function() {
		/* _root.v1a.start();*/
	}
	this.frame_119 = function() {
		playSound("moog_blip");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1).call(this.frame_59).wait(60).call(this.frame_119).wait(1));

	// sentences
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIQgEgEAAgEQAAgDAEgEQAEgCAEAAQAGAAADACQAEADAAAEQAAAEgEAEQgEACgFAAQgEAAgEgCg");
	this.shape.setTransform(293.3,233.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgHAJgBIALACQAHADADAAQAPAAAAgGQAAgEgLgFIgUgKQgLgIABgKQAAgQAQgGQAKgDATAAQAIAAADACQAGADAAAHQAAAOgIABQgIgBgBgGIgHgBQgRAAgBAGQAAACALAGIAVAKQALAIAAALQAAANgMAGQgLAGgNAAQgKAAgJgDg");
	this.shape_1.setTransform(285.9,229.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgOQALgOASAAQAOAAAKADQALAHAAALQAAAKgJAGIgSAIIgZALQAEAEAFADQAFABAGAAQALABAGgEQAHgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgFAHgEQgGgDgJABQgGgBgEAFg");
	this.shape_2.setTransform(277.5,229.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBACIAAAXIgBAGIAAAGQAAAEgDACQgDACgFABQgHAAgCgGQgCgEAAgIIAAgdIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADADAAAFIgBAHQAMgOALgBQAMABAEAJQAFgFAGgCQAGgCAHAAQAPABAFAPIAEAVIAFApQABAEgEAEQgDACgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_3.setTransform(267.1,229.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAEAAQAFAAACADQADADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgDADQgDADgEAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFQgBAFgDADQgDADgFAAQgFAAgDgDg");
	this.shape_4.setTransform(258.7,228);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA2QgEgCAAgFIAAgIIABgJIgCgnIgOgBQgKgCAAgIQAAgFADgDQADgDAFAAIANABIgBgIIAAgIQAAgEADgDQADgDAFAAQALAAAAAUIAAAFIAHAAIANABQAGACAAAIQAAAEgDADQgDADgFAAIgDAAIgFAAIgHABIACAoIAAAEIAAAEQAAASgMAAQgDAAgDgDg");
	this.shape_5.setTransform(252.5,228.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoAuQgCgEAAgDQAAgDADgEQAEgDAEAAQAEABADADIAGAGQAFADAIAAQALAAAIgIQAIgJAAgNQAAgLgEgFQgEgFgIAAQgMAAgJAJIgGAGQgFAEgEAAQgFAAgDgDQgDgDAAgEIABgNIADgeIgBgGIgCgFQAAgEAEgCQADgBAFAAIAEAAIAFAAIAlAAIAGAAIAGAAQAEgBADADQACADAAAEQAAALgXAAIgFAAIgEAAIgWAAIgCAQQAKgEANgBQATAAAKAOQAIAMAAAQQAAAWgNAOQgNAPgWAAQgYgBgLgQg");
	this.shape_6.setTransform(236.9,228);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgEQAAgGgDAAQgGAAgGAJQgGAIgEAMIgBAIIAAAHIgBAGIAAAHQAAAFgDADQgEACgEAAQgFAAgDgCQgCgDAAgFIgBgHIAAgGIABgWIAAgUIAAgHIAAgHQAAgEADgDQADgEAFAAQAKAAABANIAAABQAMgMALAAQAPAAAFANQAEAIAAARIAAAFIAAAEIACAQIABAPQAAAFgCADQgEACgEAAQgKAAgBgJg");
	this.shape_7.setTransform(220.9,229.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnAyQAAgFACgCQADgCAFgBIAKACIALABQALAAAFgHQAGgHABgPQgEAEgFACQgFACgFAAQgQAAgJgKQgKgKAAgPQAAgWANgNQANgNAWAAQAHAAAGACQAFABADAFQAKABAAAKIgBAPQgEASAAATQgBAagIALQgKAPgZAAQgeAAAAgMgAgLgiQgHAHAAANQAAAJAEAFQADADAHAAQAGAAAGgGQAGgHABgGIAEgYIgGgCIgFgBQgMAAgHAJg");
	this.shape_8.setTransform(212.3,232);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIgBgOIAAgOIABgSIABgQQAAgFADgDQADgDAFAAQADAAAEADQACADAAAFIAAAQIgBASIAAAOIABAOQAAAFgDADQgEADgDAAQgFAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_9.setTransform(206.1,228);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgHAKgBIAKACQAHADADAAQAPAAAAgGQAAgEgLgFIgUgKQgLgIABgKQAAgQAQgGQAKgDATAAQAHAAAEACQAGADAAAHQgBAOgHABQgIgBgCgGIgGgBQgRAAgBAGQAAACALAGIAVAKQALAIAAALQAAANgMAGQgKAGgOAAQgKAAgJgDg");
	this.shape_10.setTransform(199.6,229.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgOQALgOASAAQAOAAAKADQALAHAAALQAAAKgJAGIgSAIIgaALQAFAEAEADQAGABAGAAQALABAGgEQAHgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgFAHgEQgGgDgJABQgFgBgFAFg");
	this.shape_11.setTransform(191.2,229.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWA7QgGADgGABIgLABQgRAAgLgLQgMgMAAgRQAAgVAMgMQAMgNARAAIALABQAFACADACQABgaACgLQABgJAJAAQAEAAADADQADADAAAFIgBAhIgCAhQAAAcACAKIAAACQAAAEgEADQgDADgEAAQgFAAgDgFgAgQAEQgFAGAAANQAAAJAGAGQAHAGAHAAQAFAAAEgCIAHgEIACgDIAAgdQgCgEgEgCQgEgCgGAAQgKAAgHAGg");
	this.shape_12.setTransform(182.1,227.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgHAKgBIAKACQAGADAEAAQAPAAAAgGQAAgEgLgFIgTgKQgMgIAAgKQAAgQARgGQAKgDATAAQAHAAAFACQAEADAAAHQABAOgIABQgIgBgCgGIgFgBQgTAAABAGQAAACAKAGIAUAKQAMAIAAALQAAANgNAGQgKAGgNAAQgLAAgIgDg");
	this.shape_13.setTransform(429.1,205.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIgBgOIAAgOIABgSIABgQQAAgFADgDQADgDAFAAQADAAADADQAEADAAAFIgBAQIgBASIAAAOIABAOQAAAFgEADQgCADgFAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQAEgEAEAAQAEAAAEAEQAEADgBAFQABAFgEADQgEADgEAAQgEAAgEgDg");
	this.shape_14.setTransform(423.2,203.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgHQgBgCgDAAQgJgBgGAIQgEADgGALQAAAdgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgEIABgFIABgVIAAgzIABgCIAAgMIgBgIIAAgHQAAgFADgDQADgCAEAAQAIAAADAIQABAFAAAJIAAAQIgBAQQAGgGAHgDQAFgCAIAAQANgBAGAIQAEAFABALIABATIACAPIACAQIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_15.setTransform(416.3,203.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA2QgEgCABgFIAAgIIAAgJIgBgnIgPgBQgKgCAAgIQAAgFADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEADgDQADgDAFAAQAKAAAAAUIAAAFIAJAAIALABQAHACAAAIQAAAEgDADQgDADgFAAIgEAAIgDAAIgIABIABAoIAAAEIAAAEQAAASgLAAQgDAAgDgDg");
	this.shape_16.setTransform(407.8,204.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAWA7QgGADgGABIgLABQgRAAgLgLQgMgMAAgRQAAgVAMgMQAMgNARAAIALABQAFACADACQABgaACgLQABgJAJAAQAEAAADADQADADAAAFIgBAhIgCAhQAAAcACAKIAAACQAAAEgEADQgDADgEAAQgFAAgDgFgAgQAEQgFAGAAANQAAAJAGAGQAHAGAHAAQAFAAAEgCIAHgEIACgDIAAgdQgCgEgEgCQgFgCgFAAQgKAAgHAGg");
	this.shape_17.setTransform(392.2,203.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgaAhQgNgJAAgSQAAgTALgOQALgOASAAQAOAAAKADQALAHAAALQAAAKgKAGIgRAIIgaALQAEAEAFADQAGACAGgBQALAAAGgDQAHgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgMgKgAgJgSQgGAFgDAKIASgIQAJgFAHgEQgGgDgJABQgFgBgFAFg");
	this.shape_18.setTransform(383,205.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgGA2QgDgCAAgFIAAgIIAAgJIgBgnIgPgBQgKgCAAgIQAAgFADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEADgDQADgDAFAAQAKAAAAAUIAAAFIAIAAIAMABQAHACAAAIQAAAEgDADQgDADgFAAIgEAAIgEAAIgHABIABAoIAAAEIAAAEQAAASgLAAQgDAAgDgDg");
	this.shape_19.setTransform(374.9,204.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgYAiQgMgKAAgRQAAgOALgRQANgTAPAAQAIAAALAEQANAFAAAIQAAADgCADQgDAEgFAAQgDAAgFgEQgEgEgKABQgFAAgHAMQgHALAAAHQAAAIAGAFQAGAEAIAAQAFAAAIgDIAKgFQAEAAADAEQADADAAADQAAAHgNAGQgMAFgIAAQgQAAgMgKg");
	this.shape_20.setTransform(366.9,205.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAHAAALQAAAKgJAGIgSAIIgZALQADAEAGADQAFACAGgBQAKAAAHgDQAHgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgLgKgAgKgSQgFAFgDAKIARgIQAKgFAGgEQgFgDgIABQgHgBgFAFg");
	this.shape_21.setTransform(358.3,205.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgeApQgDgDAAgEIAAgyIAAgIIABgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgCAMgJAAQgKAAAAgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgGAAgCgDg");
	this.shape_22.setTransform(350.3,205.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgeApQgDgDABgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQAAAMgLAAQgKAAAAgKIAAgIQgQADgIAPIAAAnQABAEgEADQgDADgFAAQgEAAgDgDg");
	this.shape_23.setTransform(342.6,205.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_24.setTransform(334.3,205.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgYAiQgMgKAAgRQAAgOALgRQANgTAPAAQAIAAALAEQANAFAAAIQAAADgCADQgDAEgFAAQgDAAgFgEQgEgEgKABQgFAAgHAMQgHALAAAHQAAAIAGAFQAGAEAIAAQAFAAAIgDIAKgFQAEAAADAEQADADAAADQAAAHgNAGQgMAFgIAAQgQAAgMgKg");
	this.shape_25.setTransform(325.9,205.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgaAhQgNgJAAgSQAAgTAKgOQAMgOATAAQANAAAJADQAMAHAAALQAAAKgKAGIgRAIIgaALQAFAEAEADQAGACAGgBQAKAAAIgDQAGgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgMgKgAgKgSQgFAFgDAKIARgIQAKgFAGgEQgFgDgIABQgGgBgGAFg");
	this.shape_26.setTransform(310.4,205.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgLAjIgag+IgBgFQAAgEAEgDQADgDAFAAQAGAAADAGIARAsIALgaIAHgRQADgGAGAAQAFAAADADQAEADAAAEQAAADgNAcIgQAiQgBAEgDACQgCADgEAAQgHAAgEgIg");
	this.shape_27.setTransform(302.3,205.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgKQgKgKAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAMQAAANACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAALAEAFQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_28.setTransform(293.9,205.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgHQgBgCgDAAQgJgBgGAIQgEADgGALQAAAdgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgEIABgFIABgVIAAgzIABgCIAAgMIgBgIIAAgHQAAgFADgDQADgCAEAAQAIAAADAIQABAFAAAJIAAAQIgBAQQAGgGAHgDQAFgCAIAAQANgBAGAIQAEAFABALIABATIACAPIACAQIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_29.setTransform(284.9,203.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgHA+QgDgDAAgFIAAhrQAAgFAEgDQADgCADAAQAFAAADACQADADAAAFIAABmQAAAQgLgBQgEAAgDgCg");
	this.shape_30.setTransform(270.9,203.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgHA+QgDgDAAgFIAAhrQAAgFAEgDQADgCADAAQAFAAADACQADADAAAFIAABmQAAAQgLgBQgEAAgDgCg");
	this.shape_31.setTransform(266.5,203.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgJA5QgDgDAAgFIgBgOIAAgOIABgSIABgQQAAgFADgDQADgDAFAAQADAAAEADQACADABAFIgBAQIgBASIAAAOIABAOQAAAFgDADQgEADgDAAQgFAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_32.setTransform(262.3,203.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AADAZQgDgHgBgTIgCADIgMAfIgEAFQgDAFgHABQgDgBgEgGQgFgHgCgLIgIgpIgBgLQAAgEADgDQAEgDAEAAQAJAAABAIIACALIABALIADATIAOgnQADgJAIgBQAIAAADAMIAEAVIAEAUIANguQABgGAIgBQAFABADACQAEADAAAEIgBADIgQA3QgDAGgFAIQgEAFgGAAQgKAAgFgTg");
	this.shape_33.setTransform(254.5,205.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkA5QgDgEAAgEQAAgEADgDQAEgEAEAAIAQgBIgBgjQAAgUABgUIgQABQgFAAgDgDQgDgDAAgFQAAgEADgDQADgDADAAIAYgBQAOAAAXADQAKACAAAJQgBAFgDADQgDACgEAAIgVgCIgBAlIAAAkIAWgBQAEAAAEADQADAEAAAEQgBAEgDADQgDADgEAAIgOABIgNAAIgPABIgQACQgFAAgDgDg");
	this.shape_34.setTransform(237.5,203.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgLAQQgDgDAAgDQAAgCAFgJIAHgMQACgFAFAAQAEAAADADQADACAAADIgFAMIgGALQgDAGgFAAQgEAAgDgDg");
	this.shape_35.setTransform(222.5,210.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeApQgDgDAAgEIAAgyIAAgIIABgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgCAMgJAAQgLAAAAgKIAAgIQgQADgIAPIABAnQAAAEgEADQgDADgFAAQgFAAgCgDg");
	this.shape_36.setTransform(215.6,205.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAHAAALQAAAKgKAGIgRAIIgZALQADAEAGADQAFACAGgBQAKAAAIgDQAGgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgLgKgAgKgSQgFAFgDAKIARgIQAKgFAGgEQgFgDgIABQgGgBgGAFg");
	this.shape_37.setTransform(207,205.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgLAjIgag+IgBgFQAAgEAEgDQADgDAFAAQAGAAADAGIARAsIALgaIAHgRQADgGAGAAQAFAAADADQAEADAAAEQAAADgNAcIgQAiQgBAEgDACQgCADgEAAQgHAAgEgIg");
	this.shape_38.setTransform(198.9,205.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_39.setTransform(190.6,205.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVApQgMgEAAgJQAAgHAKgBIAKACQAGADAEAAQAPAAAAgGQAAgEgLgFIgUgKQgKgIgBgKQAAgQARgGQAKgDATAAQAHAAAFACQAEADAAAHQAAAOgHABQgIgBgCgGIgFgBQgTAAAAAGQAAACALAGIAVAKQALAIAAALQAAANgMAGQgLAGgNAAQgLAAgIgDg");
	this.shape_40.setTransform(175.5,205.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAEAAQAFAAACADQADADABAFIgCAQIAAASIAAAOIAAAOQAAAFgDADQgCADgFAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDADgFAAQgFAAgDgDg");
	this.shape_41.setTransform(169.7,203.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgWA8QgEgDAAgEQAAgHARgkIgbgxIgEgGQgCgDAAgDQAAgEADgEQADgDAFAAQAFAAADADQALAPAOAeIAKgWQAFgMAGgJQADgFAGAAQAEAAAEACQADADAAAFIgBAFIgbA3QgKAUgFANIgEAPQgDAHgHAAQgFAAgDgDg");
	this.shape_42.setTransform(155.8,207.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgKQgKgKAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAMQAAANACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAALAEAFQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_43.setTransform(147,205.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAWA7QgGADgFABIgMABQgRAAgMgLQgLgMAAgRQAAgVALgMQAMgNATAAIAKABQAFACADACQABgaACgLQABgJAIAAQAFAAADADQADADAAAFIgBAhIgCAhQAAAcACAKIAAACQAAAEgDADQgEADgEAAQgFAAgDgFgAgPAEQgGAGAAANQAAAJAGAGQAHAGAHAAQAGAAADgCIAHgEIACgDIAAgdQgCgEgEgCQgEgCgGAAQgLAAgFAGg");
	this.shape_44.setTransform(137.7,203.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgaAhQgNgJAAgSQAAgTALgOQALgOASAAQAOAAAKADQALAHAAALQAAAKgKAGIgRAIIgaALQAEAEAFADQAGACAGgBQALAAAGgDQAHgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgMgKgAgJgSQgGAFgDAKIASgIQAJgFAHgEQgGgDgJABQgFgBgFAFg");
	this.shape_45.setTransform(121.6,205.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgHQgBgCgDAAQgJgBgGAIQgEADgGALQAAAdgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgEIABgFIABgVIAAgzIABgCIAAgMIgBgIIAAgHQAAgFADgDQADgCAEAAQAIAAADAIQABAFAAAJIAAAQIgBAQQAGgGAHgDQAFgCAIAAQANgBAGAIQAEAFABALIABATIACAPIACAQIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_46.setTransform(112.7,203.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgGA2QgDgCgBgFIAAgIIABgJIgCgnIgOgBQgKgCAAgIQAAgFADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEADgDQADgDAFAAQAKAAAAAUIAAAFIAIAAIANABQAGACAAAIQAAAEgDADQgDADgFAAIgDAAIgFAAIgHABIACAoIAAAEIAAAEQAAASgMAAQgDAAgDgDg");
	this.shape_47.setTransform(104.2,204.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0F0F0F").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAHAAALQAAAKgJAGIgSAIIgZALQADAEAGADQAFACAGgBQAKAAAHgDQAHgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgFAGgEQgFgDgIABQgHgBgEAFg");
	this.shape_48.setTransform(88.9,205.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0F0F0F").s().p("AgeApQgCgDAAgEIAAgyIAAgIIAAgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_49.setTransform(80.8,205.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0F0F0F").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_50.setTransform(72.5,205.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0F0F0F").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgFABQgEAAgEgDQgDgDAAgEQAAgIAIgCIANgBIABgJQADgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgJAAgFAGQgDAFgBALIgBACIAPgBQAPAAAAAKQAAAKgPAAIgQABIAAAUIABAVQAAAOgCAIQgCAJgHAAQgFAAgDgDg");
	this.shape_51.setTransform(64.2,203.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0F0F0F").s().p("AgZAhQgOgJAAgSQAAgTALgOQALgOASAAQAOAAAKADQALAHAAALQAAAKgJAGIgSAIIgZALQAEAEAFADQAFACAGgBQALAAAGgDQAHgFAEAAQAIAAAAAIQAAAKgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgFAHgEQgGgDgJABQgGgBgEAFg");
	this.shape_52.setTransform(55.7,205.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0F0F0F").s().p("AgmA7QgDgEgBgEIAAhSIAAgLIAAgKQABgHANgCQAGgBAOAAQANAAAOAJQAQALAAARQAAAJgEAGQgCAFgHAFQAJADAFAIQAHAIAAAIQAAALgMAJQgHAGgJADQgRAHgcAAQgEAAgEgEgAgVAqQAOgBAPgFQANgDAAgFQAAgGgJgFQgGgDgGgBIgVgBgAgUgZIgBARIAMAAQAWgCAAgPQABgGgIgFQgGgFgIAAIgNAAg");
	this.shape_53.setTransform(46.6,203.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0F0F0F").s().p("AgIAIQgEgEAAgEQAAgDAEgEQAEgDAEAAQAGAAADADQAEAEAAADQAAAEgEAEQgEACgFAAQgEAAgEgCg");
	this.shape_54.setTransform(331.2,231);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0F0F0F").s().p("AgeApQgDgDAAgEIAAgyIAAgIIABgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgCAMgJAAQgLAAAAgKIAAgIQgQADgIAPIABAnQAAAEgEADQgDADgFAAQgFAAgCgDg");
	this.shape_55.setTransform(324.1,227.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0F0F0F").s().p("AgZAhQgOgJAAgSQAAgTAKgNQAMgQATABQAOAAAIADQAMAGAAAMQAAAJgKAHIgRAIIgZALQADAFAGACQAFABAGAAQAKAAAIgDQAGgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgLgJgAgKgSQgFAFgDAJIARgHQAKgFAGgEQgFgCgIAAQgGAAgGAEg");
	this.shape_56.setTransform(315.5,227.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0F0F0F").s().p("AgLAjIgag+IgBgFQAAgEAEgDQADgDAFAAQAGAAADAGIARAsIALgaIAHgRQADgGAGAAQAFAAADADQAEADAAAEQAAADgNAcIgQAiQgBAEgDACQgCADgEAAQgHAAgEgIg");
	this.shape_57.setTransform(307.3,227.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0F0F0F").s().p("AgVApQgMgFAAgIQAAgIAKAAIAKADQAGACAEAAQAPAAAAgHQAAgEgLgFIgUgJQgKgIgBgKQAAgQARgFQAKgEATAAQAHAAAFACQAEADAAAIQAAAOgHgBQgIAAgCgGIgFgBQgTABAAAFQAAACALAGIAUAKQAMAIAAAKQAAAOgMAGQgLAGgNAAQgLAAgIgDg");
	this.shape_58.setTransform(284,227.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0F0F0F").s().p("AgJA5QgDgDAAgFIgBgOIAAgOIABgSIABgQQAAgFADgDQADgDAEAAQAFAAACADQADADABAFIgCAQIAAASIAAAOIAAAOQAAAFgDADQgCADgFAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDADgFAAQgFAAgDgDg");
	this.shape_59.setTransform(278.1,225.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0F0F0F").s().p("AASA7QgEgIgHgJIgMgRIgKAIIgBAUQAAAFgDADQgDADgFgBQgLABAAgNIABgTIABgSIAAgZIABgaIgBgIIAAgIQAAgEADgEQADgCAFAAQAEAAADACQADAEAAAEIABAIIAAAIIAAAWIgBAVQALgHAVgVQADgEAFAAQAEAAADADQAEADAAAEQAAAEgDADQgKAKgMALIAQAVQAMAPAAAGQAAAEgEADQgDADgFAAQgGAAgDgFg");
	this.shape_60.setTransform(264.7,225.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0F0F0F").s().p("AgZAhQgOgJAAgSQAAgTALgNQALgQATABQANAAAKADQALAGAAAMQAAAJgJAHIgSAIIgZALQAEAFAFACQAFABAGAAQALAAAGgDQAHgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgLgJgAgJgSQgGAFgDAJIASgHQAJgFAHgEQgGgCgIAAQgHAAgEAEg");
	this.shape_61.setTransform(255.5,227.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0F0F0F").s().p("AgaAhQgNgJAAgSQAAgTAKgNQAMgQATABQANAAAJADQAMAGAAAMQAAAJgKAHIgRAIIgaALQAFAFAEACQAGABAGAAQAKAAAIgDQAGgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgMgJgAgKgSQgFAFgDAJIARgHQAKgFAGgEQgFgCgIAAQgGAAgGAEg");
	this.shape_62.setTransform(246.5,227.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0F0F0F").s().p("AADAZQgDgIgBgSIgCAEIgMAeIgEAFQgDAFgHAAQgDAAgEgGQgFgHgCgLIgIgpIgBgLQAAgEADgDQAEgDAEAAQAJAAABAIIACAMIABAKIADATIAOgmQADgLAIAAQAIAAADAMIAEAUIAEAVIANguQABgHAIAAQAFAAADADQAEADAAAFIgBACIgQA2QgDAIgFAHQgEAFgGAAQgKAAgFgTg");
	this.shape_63.setTransform(236.8,227.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0F0F0F").s().p("AgaAhQgNgJAAgSQAAgTALgNQALgQASABQAOAAAKADQALAGAAAMQAAAJgJAHIgSAIIgaALQAEAFAFACQAGABAGAAQALAAAGgDQAHgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgMgJgAgJgSQgGAFgDAJIASgHQAJgFAHgEQgGgCgJAAQgFAAgFAEg");
	this.shape_64.setTransform(219.7,227.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0F0F0F").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgGQgBgEgDAAQgJAAgGAHQgEAEgGAMQAAAcgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgFIABgDIABgWIAAgzIABgDIAAgLIgBgIIAAgHQAAgEADgEQADgCAEAAQAIAAADAIQABAFAAAKIAAAPIgBAPQAGgFAHgDQAFgDAIABQANAAAGAHQAEAGABAKIABAUIACAOIACAQIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_65.setTransform(210.8,225.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0F0F0F").s().p("AgGA2QgDgCgBgFIAAgIIABgIIgCgoIgOgBQgKgCAAgIQAAgFADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEADgDQADgDAFAAQAKAAAAAUIAAAGIAIgBIANABQAGACAAAIQAAAEgDADQgDADgFAAIgDAAIgFAAIgHAAIACApIAAADIAAAFQAAASgMAAQgDAAgDgDg");
	this.shape_66.setTransform(202.3,226.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0F0F0F").s().p("AgZAhQgOgJAAgSQAAgTAKgNQAMgQATABQAOAAAIADQAMAGAAAMQAAAJgJAHIgSAIIgZALQADAFAGACQAFABAGAAQAKAAAHgDQAHgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgLgJgAgJgSQgGAFgDAJIASgHQAJgFAGgEQgFgCgIAAQgHAAgEAEg");
	this.shape_67.setTransform(187,227.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0F0F0F").s().p("AgeApQgCgDAAgEIAAgyIAAgIIAAgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgKAAAAgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_68.setTransform(178.9,227.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0F0F0F").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_69.setTransform(170.6,227.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0F0F0F").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgFABQgEAAgEgDQgDgDAAgEQAAgIAIgCIANgBIABgJQADgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgJAAgFAGQgDAFgBALIgBACIAPgBQAPAAAAAKQAAAKgQAAIgPABIAAAUIABAVQAAAOgCAIQgBAJgIAAQgFAAgDgDg");
	this.shape_70.setTransform(162.3,225.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0F0F0F").s().p("AgZAhQgOgJAAgSQAAgTALgNQALgQASABQAOAAAKADQALAGAAAMQAAAJgJAHIgSAIIgZALQAEAFAFACQAFABAGAAQALAAAGgDQAHgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgLgJgAgJgSQgGAFgDAJIASgHQAJgFAHgEQgGgCgJAAQgGAAgEAEg");
	this.shape_71.setTransform(153.8,227.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0F0F0F").s().p("AgWA7QgDADgEAAQgFAAgDgDQgDgDAAgEIABgFIAAgGIAAhYQAAgFACgFQADgFAGAAQAJAAAAAJIgBADIAAADIAAAeQAGgDAFgCIAJgBQATAAALANQALAMAAARQAAATgNAMQgMANgSAAQgLAAgJgEgAgIgBQgFABgHAFIAAAhQALAFAHAAQAJAAAHgHQAGgGAAgLQAAgKgFgGQgGgGgJAAQgDAAgFACg");
	this.shape_72.setTransform(144.7,225.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgVApQgMgFAAgIQAAgIAJAAIALADQAHACADAAQAPAAAAgHQAAgEgLgFIgTgJQgMgIAAgKQAAgQARgFQAKgEATAAQAHAAAFACQAEADAAAIQABAOgIgBQgIAAgCgGIgFgBQgTABABAFQAAACAKAGIAUAKQAMAIAAAKQAAAOgNAGQgKAGgNAAQgLAAgIgDg");
	this.shape_73.setTransform(439.9,203);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgaAhQgNgJAAgSQAAgTAKgNQAMgQATABQANAAAJADQAMAHAAALQAAAJgKAHIgRAIIgaALQAFAFAEABQAGACAGAAQAKAAAIgDQAGgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgMgJgAgKgSQgFAFgDAJIARgHQAKgFAGgEQgFgCgIgBQgGABgGAEg");
	this.shape_74.setTransform(431.5,203.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgYIgBgIQgJAEgJANIgBACIAAAXIgBAGIAAAGQAAAEgDADQgDACgFAAQgHgBgCgFQgCgEAAgIIAAgcIAAgMIAAgMQAAgGACgGQADgHAGAAQAEAAAEADQADAEAAADIgBAIQAMgOALgBQAMAAAEAKQAFgFAGgBQAGgDAHAAQAPAAAFAPIAEAWIAFApQABAFgEADQgDACgFAAQgJAAgBgJIgDgWIgDgWQgCgOgDAAIgIADIgKAHIACAYQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_75.setTransform(421,203.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgGA2QgDgCAAgFIAAgIIAAgIIgBgoIgPgBQgKgCAAgIQAAgFADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEADgDQADgDAFAAQAKAAAAATIAAAHIAIgBIAMABQAHACAAAIQAAAEgDADQgDADgFAAIgEAAIgEAAIgHAAIABApIAAADIAAAFQAAASgLAAQgDAAgDgDg");
	this.shape_76.setTransform(406.4,201.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AghAwQgIgNAAgUQAAglAggbIAIgIQAFgFAEgBQAEABADADQAEACAAAFQAAAEgJAIIgMAMQgHAHgDAHIAHgDIAGgBQAUAAAKALQALAJAAASQAAATgLAMQgMANgTAAQgWgBgLgPgAgLAEIgIAGIgBAFQAAAPAFAIQAFAGAKAAQAKABAFgHQAGgGAAgMQAAgJgGgEQgFgFgKABQgGAAgFABg");
	this.shape_77.setTransform(390.8,201.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAVA7QgFADgFABIgLABQgSAAgMgLQgLgMAAgRQAAgVALgMQAMgNATAAIAKABQAFACADACQABgbABgKQACgJAIAAQAFAAADADQADADAAAFIgCAiIgBAgQgBAcACAKIAAACQAAAFgCADQgEACgEAAQgGAAgDgFgAgPADQgGAHAAANQAAAJAGAGQAHAGAIAAQAFAAADgCIAHgEIADgDIAAgdQgDgEgEgCQgEgCgGAAQgLAAgFAFg");
	this.shape_78.setTransform(374.2,200.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgeApQgDgDABgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgLAAABgKIAAgIQgRADgIAPIAAAnQAAAEgDADQgDADgEAAQgGAAgCgDg");
	this.shape_79.setTransform(365.9,203.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgKQgKgKAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAIIAAALQAAANACAGIAEAIIADAJQAAADgEADQgDADgEAAQgDAAgIgHgAgKgPQgIAJAAAJQAAAKAEAGQADAFAIAAQAEAAAEgBQAEgCAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_80.setTransform(357.5,203.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgWA7QgDADgEAAQgFAAgDgDQgDgDAAgEIABgFIAAgGIAAhYQAAgFACgFQADgFAGAAQAJAAAAAJIgBADIAAADIAAAeQAGgDAFgCIAJgBQATAAALANQALAMAAARQAAATgNAMQgMANgSAAQgLAAgJgEgAgIgBQgFABgHAFIAAAhQALAFAHAAQAJAAAHgHQAGgGAAgLQAAgKgFgGQgGgGgJAAQgDAAgFACg");
	this.shape_81.setTransform(339.8,201);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgVApQgMgFAAgIQAAgIAKAAIAKADQAGACAEAAQAPAAAAgHQAAgEgLgFIgUgJQgKgIgBgKQAAgQARgFQAKgEATAAQAHAAAFACQAEADAAAIQAAAOgHgBQgIAAgCgGIgFgBQgTABABAFQgBACALAGIAUAKQAMAIAAAKQAAAOgNAGQgKAGgNAAQgLAAgIgDg");
	this.shape_82.setTransform(324.1,203);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIgBgOIAAgOIABgSIABgQQAAgFADgDQADgDAEAAQAFAAACADQAEADAAAFIgBAQIgBASIAAAOIABAOQgBAFgDADQgCADgFAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQADgEAFAAQAEAAAEAEQADADAAAFQAAAFgDADQgEADgEAAQgFAAgDgDg");
	this.shape_83.setTransform(318.3,201.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgGQgBgEgDAAQgJAAgGAHQgEAEgGAMQAAAcgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgFIABgDIABgWIAAgzIABgDIAAgLIgBgIIAAgHQAAgEADgEQADgCAEAAQAIAAADAIQABAFAAAKIAAAPIgBAQQAGgGAHgDQAFgDAIABQANAAAGAHQAEAGABAKIABAUIACAOIACAQIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_84.setTransform(311.3,201);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGA2QgEgCABgFIAAgIIAAgIIgBgoIgPgBQgKgCAAgIQAAgFADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEAEgDQADgDAEAAQAKAAABATIAAAHIAIgBIALABQAHACAAAIQAAAEgDADQgDADgFAAIgEAAIgDAAIgIAAIABApIAAADIAAAFQAAASgLAAQgDAAgDgDg");
	this.shape_85.setTransform(302.8,201.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgDQAAgHgDAAQgGAAgGAJQgGAIgEAMIgBAHIAAAIIgBAGIAAAHQAAAEgDADQgEADgEABQgFgBgDgDQgCgDAAgEIgBgGIAAgHIABgVIAAgVIAAgHIAAgHQAAgEADgDQADgDAFgBQAKAAABANIAAABQAMgLALAAQAPAAAFAMQAEAIAAARIAAAFIAAAEIACAQIABAPQAAAFgCACQgEADgEABQgKAAgBgKg");
	this.shape_86.setTransform(288,203);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_87.setTransform(279.4,203.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAQAkIgCgQIgCgQIABgGIAAgHIAAgDIABgDQAAgHgEAAQgGAAgGAJQgHAIgDAMIAAAHIgBAIIgBAGIAAAHQAAAEgDADQgEADgEABQgEgBgEgDQgDgDAAgEIAAgGIAAgHIAAgVIABgVIAAgHIAAgHQAAgEADgDQADgDAFgBQAKAAABANIAAABQAMgLALAAQAPAAAFAMQAEAIAAARIAAAFIAAAEQAAAGACAKIABAPQAAAFgCACQgEADgEABQgKAAgBgKg");
	this.shape_88.setTransform(264.2,203);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgnAyQAAgEACgDQADgDAFAAIAKACIALABQALAAAFgHQAGgHABgPQgEAEgFACQgFACgFAAQgQAAgJgKQgKgKAAgPQAAgWANgMQANgOAWAAQAHAAAGACQAFACADAEQAKAAAAALIgBAPQgEASAAATQgBAZgIAMQgKAPgZAAQgeAAAAgMgAgLgjQgHAJAAAMQAAAJAEAFQADAEAHgBQAGABAGgHQAGgHABgHIAEgXIgGgDIgFAAQgMAAgHAIg");
	this.shape_89.setTransform(255.6,205.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAFAAQAEAAADADQACADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgCADQgEADgDAAQgFAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAFgEADAAQAFAAAEAEQAEADAAAFQAAAFgEADQgEADgFAAQgDAAgFgDg");
	this.shape_90.setTransform(249.4,201.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgVApQgMgFAAgIQAAgIAKAAIAKADQAHACADAAQAPAAAAgHQAAgEgLgFIgUgJQgLgIAAgKQAAgQARgFQAKgEATAAQAHAAAEACQAGADgBAIQAAAOgHgBQgIAAgCgGIgGgBQgSABAAAFQAAACALAGIAVAKQALAIAAAKQAAAOgMAGQgKAGgOAAQgKAAgJgDg");
	this.shape_91.setTransform(242.9,203);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgaAhQgNgJAAgSQAAgTALgNQALgQASABQAOAAAKADQALAHAAALQAAAJgKAHIgRAIIgaALQAEAFAFABQAGACAGAAQALAAAGgDQAHgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgMgJgAgJgSQgGAFgDAJIASgHQAJgFAHgEQgGgCgJgBQgFABgFAEg");
	this.shape_92.setTransform(234.5,203.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAWA7QgGADgFABIgMABQgRAAgLgLQgMgMAAgRQAAgVAMgMQAMgNARAAIALABQAFACADACQABgbACgKQABgJAJAAQAEAAADADQADADAAAFIgBAiIgCAgQAAAcACAKIAAACQAAAFgDADQgEACgEAAQgFAAgDgFgAgPADQgGAHAAANQAAAJAGAGQAHAGAHAAQAGAAADgCIAHgEIACgDIAAgdQgCgEgEgCQgFgCgFAAQgLAAgFAFg");
	this.shape_93.setTransform(225.4,200.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgNQALgQASABQAOAAAKADQALAHAAALQAAAJgJAHIgSAIIgaALQAFAFAEABQAGACAGAAQALAAAGgDQAHgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgLgJgAgJgSQgGAFgDAJIASgHQAJgFAHgEQgGgCgJgBQgFABgFAEg");
	this.shape_94.setTransform(209.2,203.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgGQgBgEgDAAQgJAAgGAHQgEAEgGAMQAAAcgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgFIABgDIABgWIAAgzIABgDIAAgLIgBgIIAAgHQAAgEADgEQADgCAEAAQAIAAADAIQABAFAAAKIAAAPIgBAQQAGgGAHgDQAFgDAIABQANAAAGAHQAEAGABAKIABAUIACAOIACAQIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_95.setTransform(200.4,201);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgGA2QgDgCAAgFIAAgIIAAgIIgBgoIgPgBQgKgCAAgIQAAgFADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEADgDQADgDAFAAQAKAAAAATIAAAHIAIgBIAMABQAHACAAAIQAAAEgDADQgDADgFAAIgDAAIgFAAIgHAAIABApIAAADIAAAFQABASgMAAQgDAAgDgDg");
	this.shape_96.setTransform(191.9,201.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AAWA7QgGADgFABIgMABQgRAAgMgLQgLgMAAgRQAAgVALgMQANgNARAAIALABQAFACADACQABgbACgKQABgJAJAAQAEAAADADQADADAAAFIgBAiIgCAgQAAAcACAKIAAACQAAAFgDADQgEACgEAAQgFAAgDgFgAgPADQgGAHAAANQAAAJAGAGQAHAGAHAAQAGAAADgCIAHgEIACgDIAAgdQgCgEgEgCQgFgCgFAAQgLAAgFAFg");
	this.shape_97.setTransform(176.3,200.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AgaAhQgNgJAAgSQAAgTALgNQALgQASABQAOAAAKADQALAHAAALQAAAJgKAHIgRAIIgaALQAFAFAEABQAGACAGAAQAKAAAIgDQAGgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgMgJgAgJgSQgGAFgDAJIARgHQAKgFAHgEQgGgCgJgBQgGABgEAEg");
	this.shape_98.setTransform(167.1,203.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgnAyQAAgEACgDQADgDAFAAIAKACIALABQALAAAFgHQAGgHABgPQgEAEgFACQgFACgFAAQgQAAgJgKQgKgKAAgPQAAgWANgMQANgOAWAAQAHAAAGACQAFACADAEQAKAAAAALIgBAPQgEASAAATQgBAZgIAMQgKAPgZAAQgeAAAAgMgAgLgjQgHAJAAAMQAAAJAEAFQADAEAHgBQAGABAGgHQAGgHABgHIAEgXIgGgDIgFAAQgMAAgHAIg");
	this.shape_99.setTransform(158.4,205.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgDQABgHgEAAQgHAAgFAJQgGAIgEAMIgBAHIAAAIIgBAGIAAAHQAAAEgDADQgDADgFABQgFgBgDgDQgCgDAAgEIgBgGIAAgHIABgVIABgVIAAgHIgBgHQAAgEADgDQADgDAFgBQAKAAABANIAAABQAMgLALAAQAPAAAFAMQAEAIAAARIAAAFIAAAEIACAQIABAPQAAAFgCACQgEADgEABQgKAAgBgKg");
	this.shape_100.setTransform(150.2,203);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgKQgKgKAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAIIAAALQAAANACAGIAEAIIADAJQAAADgEADQgDADgEAAQgDAAgIgHgAgKgPQgIAJAAAJQAAAKAEAGQADAFAIAAQAEAAAEgBQAEgCAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_101.setTransform(141.5,203.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgGQgBgEgDAAQgJAAgGAHQgEAEgGAMQAAAcgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgFIABgDIABgWIAAgzIABgDIAAgLIgBgIIAAgHQAAgEADgEQADgCAEAAQAIAAADAIQABAFAAAKIAAAPIgBAQQAGgGAHgDQAFgDAIABQANAAAGAHQAEAGABAKIABAUIACAOIACAQIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_102.setTransform(132.5,201);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AgYAiQgMgKAAgRQAAgOALgRQANgTAPAAQAIAAALAEQANAGAAAHQAAADgCADQgDAEgFAAQgDAAgFgEQgEgDgKAAQgFgBgHAMQgHALAAAIQAAAIAGAFQAGAFAIgBQAFAAAIgDIAKgFQAEABADADQADACAAAFQAAAFgNAHQgMAFgIAAQgQAAgMgKg");
	this.shape_103.setTransform(123.5,203.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgaAhQgNgJAAgSQAAgTALgNQALgQASABQAOAAAKADQALAHAAALQAAAJgJAHIgSAIIgaALQAFAFAEABQAGACAGAAQALAAAGgDQAHgFAEAAQAIABAAAHQAAAKgNAFQgLAFgMgBQgSAAgMgJgAgJgSQgGAFgDAJIASgHQAJgFAHgEQgGgCgJgBQgFABgFAEg");
	this.shape_104.setTransform(108,203.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgKQgKgKAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAIIAAALQAAANACAGIAEAIIADAJQAAADgEADQgDADgEAAQgDAAgIgHgAgKgPQgIAJAAAJQAAAKAEAGQADAFAIAAQAEAAAEgBQAEgCAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_105.setTransform(91.4,203.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgGQgBgEgDAAQgJAAgGAHQgEAEgGAMQAAAcgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgFIABgDIABgWIAAgzIABgDIAAgLIgBgIIAAgHQAAgEADgEQADgCAEAAQAIAAADAIQABAFAAAKIAAAPIgBAQQAGgGAHgDQAFgDAIABQANAAAGAHQAEAGABAKIABAUIACAOIACAQIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_106.setTransform(82.4,201);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgHA9QgDgDAAgFIAAhrQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEIAABoQAAAOgLAAQgEAAgDgDg");
	this.shape_107.setTransform(68.4,200.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AgHA9QgDgDAAgFIAAhrQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEIAABoQAAAOgLAAQgEAAgDgDg");
	this.shape_108.setTransform(64,200.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AgJA5QgDgDAAgFIgBgOIAAgOIABgSIABgQQAAgFADgDQADgDAEAAQAFAAACADQADADABAFIgCAQIAAASIAAAOIAAAOQAAAFgDADQgCADgFAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFQgBAFgDADQgDADgFAAQgFAAgDgDg");
	this.shape_109.setTransform(59.9,201.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AADAZQgDgIgBgSIgCAEIgMAeIgEAFQgDAFgHAAQgDAAgEgGQgFgHgCgLIgIgpIgBgLQAAgEADgDQAEgDAEAAQAJAAABAIIACAMIABAKIADATIAOgmQADgLAIAAQAIAAADAMIAEAVIAEAUIANguQABgHAIAAQAFAAADADQAEADAAAFIgBACIgQA2QgDAIgFAHQgEAFgGAAQgKAAgFgTg");
	this.shape_110.setTransform(52,203.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgkA5QgEgEAAgEQAAgEAEgDQAEgEAFAAIAOgBIAAgjQAAgUACgUIgRABQgFAAgDgDQgEgDAAgFQAAgEAEgDQADgDAEAAIAXgBQANAAAYADQAKACgBAJQAAAFgDADQgDACgEAAIgUgCIgBAlIAAAkIAUgBQAFAAADADQADAEAAAEQAAAEgDADQgDADgFAAIgNABIgOAAIgPABIgPACQgFAAgDgDg");
	this.shape_111.setTransform(35.1,201.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:72.5,y:205.6}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:190.6,y:205.6}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:302.3,y:205.5}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:206.1,y:228}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_27,p:{x:99.8,y:203}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_39,p:{x:348.7,y:203.1}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_9,p:{x:412.6,y:201.2}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_50,p:{x:299,y:227.4}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},59).wait(61));

	// Layer 4
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(102,204,153,0.6)").s().p("EgigAEXIAAotMBFBAAAIAAItg");
	this.shape_112.setTransform(240.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_112).wait(120));

	// rule
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000099").s().p("AgGAFQgDgCAAgDQAAgCADgDQADgCADAAQAEAAADACQADADAAACQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_113.setTransform(342.9,42.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000099").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgDIAAgDQAAgEgCAAQgFgBgEAHQgFAGgDAJIAAAGIgBAFIAAAFIAAAFQAAADgDADQgCACgDAAQgEAAgCgCQgDgDAAgDIAAgEIAAgGIABgPIAAgPIAAgGIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAKQADAGAAAMIAAAEIAAADIABAMIABALQAAAEgCACQgDACgDAAQgHAAgBgHg");
	this.shape_114.setTransform(337.3,39.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000099").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_115.setTransform(330.9,39.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000099").s().p("AgGArQgDgCAAgEIAAgLIAAgKIAAgOIABgLQAAgEACgCQADgCADAAQADAAACACQACACAAAEIAAALIgBAOIAAAKIAAALQAAAEgCACQgCACgDAAQgDAAgCgCgAgEgdQgDgCAAgEQAAgDADgEQACgCADAAQAEAAADACQACAEAAADQAAAEgCACQgDACgEAAQgDAAgCgCg");
	this.shape_116.setTransform(326.3,38.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000099").s().p("AgEApQgDgDAAgDIAAgGIABgGIgCgdIgLgBQgHgCAAgGQAAgEACgCQADgCADAAIAKABIgBgHIAAgFQAAgDADgDQACgCADAAQAIAAAAAOIAAAGIAGgBQAHAAACABQAFACAAAFQAAADgDACQgCADgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAAEQABANgJAAQgCAAgCgCg");
	this.shape_117.setTransform(321.7,38.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000099").s().p("AgRAaQgKgIAAgMQAAgLAJgNQAJgOALAAQAHAAAIAEQAKAEAAAFQAAADgCACQgDADgDAAQgCAAgEgEQgDgCgIAAQgDAAgFAJQgFAIAAAGQAAAFAEAEQAEADAGAAQAEAAAGgCIAHgEQADAAACADQADACAAADQAAAEgKAFQgJAEgGAAQgMAAgIgHg");
	this.shape_118.setTransform(315.6,39.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000099").s().p("AAOAbIgJAEIgHABQgOAAgGgIQgIgHABgPQgBgNALgKQAKgKAOAAQAFAAAHADQAKADgBAFQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAIQAAALABAEIADAHIADAFQAAADgDACQgCACgDAAQgDAAgGgFgAgIgLQgFAGAAAIQAAAHADAEQACAFAGAAQACAAAEgCQADgBADgDIgCgTIAAgFIABgFIgCgBIgBAAQgIAAgGAGg");
	this.shape_119.setTransform(309.4,39.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000099").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_120.setTransform(297.4,39.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000099").s().p("AgXAeQgBgCAAgDIAAglIAAgFIAAgGQAAgEACgCQACgCAEAAQAGABACAGQAJgIAMAAQAMAAAAAQIAAAEQAAAIgIAAQgHAAAAgHIAAgGQgNACgFALIAAAdQAAADgDADQgCACgDAAQgFAAgCgDg");
	this.shape_121.setTransform(291.4,39.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000099").s().p("AAMAdQgIADgHAAQgIAAgGgEQgGgEgBgHQgDgPAAgKQAAgIACgKQABgGAHAAQADAAADACQACACAAADIgBAIIAAAIIAAAOIACAKIADABIACAAQAGAAAIgCIAAgKIgBgJIABgUQABgHAHAAQAEAAACACQADACAAADIgBAVIAAALIAAAMIAAADIAAAEQAAADgCACQgDACgDAAQgFAAgCgEg");
	this.shape_122.setTransform(285.2,39.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000099").s().p("AgEApQgDgDAAgDIAAgGIABgGIgCgdIgLgBQgHgCAAgGQAAgEACgCQADgCADAAIAKABIgBgHIAAgFQAAgDADgDQACgCADAAQAIAAAAAOIAAAGIAGgBQAHAAACABQAFACAAAFQAAADgDACQgCADgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAAEQAAANgIAAQgCAAgCgCg");
	this.shape_123.setTransform(279.4,38.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000099").s().p("AAMAdQgIADgHAAQgIAAgGgEQgGgEgBgHQgDgPAAgKQAAgIACgKQABgGAHAAQADAAADACQACACAAADIgBAIIAAAIIAAAOIACAKIADABIACAAQAGAAAIgCIAAgKIgBgJIABgUQABgHAHAAQAEAAACACQADACAAADIgBAVIAAALIAAAMIAAADIAAAEQAAADgCACQgDACgDAAQgFAAgCgEg");
	this.shape_124.setTransform(273.4,39.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000099").s().p("AgKAyQgDgDAAgDIAAgBIACgRIAAgbIgEAAIgDAAQgEAAgCgCQgDgCAAgEQAAgFAGgCIAKgBIABgHQACgNAFgGQAGgHAOgBQALAAAAAIQAAAHgKAAQgHAAgEAGQgCAEgBAHIAAACIALgBQALAAAAAIQAAAHgLAAIgMABIAAAPIABAPQAAALgCAGQgBAGgGABQgDAAgCgCg");
	this.shape_125.setTransform(267.2,38.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000099").s().p("AgXAeQgBgCAAgDIAAglIAAgFIAAgGQAAgEACgCQACgCAEAAQAGABACAGQAJgIAMAAQAMAAAAAQIAAAEQAAAIgIAAQgHAAAAgHIAAgGQgNACgFALIAAAdQAAADgDADQgCACgDAAQgFAAgCgDg");
	this.shape_126.setTransform(256.3,39.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000099").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_127.setTransform(249.8,39.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000099").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_128.setTransform(243.2,38.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000099").s().p("AgFApQgCgDAAgDIAAgGIABgGIgBgdIgMgBQgHgCAAgGQAAgEACgCQADgCADAAIAKABIAAgHIAAgFQAAgDACgDQACgCADAAQAIAAAAAOIAAAGIAGgBQAHAAACABQAFACAAAFQAAADgDACQgCADgDAAIgDAAIgDAAIgGAAIACAeIAAADIAAAEQAAANgJAAQgCAAgDgCg");
	this.shape_129.setTransform(236.8,38.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000099").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_130.setTransform(230.8,39.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000099").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgDIAAgDQAAgEgCAAQgFgBgEAHQgFAGgDAJIAAAGIgBAFIAAAFIAAAFQAAADgDADQgCACgDAAQgEAAgCgCQgDgDAAgDIAAgEIAAgGIABgPIAAgPIAAgGIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAKQADAGAAAMIAAAEIAAADIABAMIABALQAAAEgCACQgDACgDAAQgHAAgBgHg");
	this.shape_131.setTransform(224.7,39.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000099").s().p("AAOAbIgKAEIgFABQgOAAgIgIQgGgHAAgPQAAgNAKgKQAKgKANAAQAGAAAIADQAJADAAAFQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAIQAAALACAEIACAHIACAFQAAADgCACQgDACgDAAQgCAAgGgFgAgIgLQgFAGgBAIQAAAHAEAEQACAFAGAAQACAAADgCQAEgBADgDIgCgTIABgFIAAgFIgCgBIgBAAQgIAAgGAGg");
	this.shape_132.setTransform(218.2,39.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000099").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_133.setTransform(206.2,39.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000099").s().p("AgWAeQgCgCAAgDIAAglIAAgFIAAgGQAAgEACgCQACgCADAAQAHABABAGQAKgIANAAQALAAAAAQIAAAEQgBAIgHAAQgIAAAAgHIAAgGQgMACgGALIAAAdQAAADgCADQgCACgEAAQgEAAgBgDg");
	this.shape_134.setTransform(200.2,39.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000099").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_135.setTransform(194,39.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000099").s().p("AgKAyQgDgDAAgDIAAgBIACgRIAAgbIgEAAIgDAAQgEAAgCgCQgDgCAAgEQAAgFAGgCIAKgBIABgHQACgNAFgGQAGgHAOgBQALAAAAAIQAAAHgKAAQgHAAgEAGQgCAEgBAHIAAACIALgBQALAAAAAIQAAAHgLAAIgMABIAAAPIABAPQAAALgCAGQgBAGgGABQgDAAgCgCg");
	this.shape_136.setTransform(187.8,38.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000099").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_137.setTransform(181.4,39.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000099").s().p("AgRAtQgCACgDAAQgDAAgCgCQgCgDAAgDIAAgEIAAgEIAAhBQAAgFACgDQACgFAEABQAHAAAAAGIAAADIgBADIAAAWIAJgEIAGgBQAOAAAJAKQAHAJAAANQAAAOgJAJQgJAJgNAAQgIAAgIgCgAgGAAIgJAEIAAAZQAIADAGAAQAHAAAEgEQAFgFAAgIQAAgIgEgFQgEgEgHAAQgCAAgEACg");
	this.shape_138.setTransform(174.6,38.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000099").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgDIAAgDQAAgEgCAAQgFgBgEAHQgFAGgDAJIAAAGIgBAFIAAAFIAAAFQAAADgDADQgCACgDAAQgEAAgCgCQgDgDAAgDIAAgEIAAgGIABgPIAAgPIAAgGIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAKQADAGAAAMIAAAEIAAADIABAMIABALQAAAEgCACQgDACgDAAQgHAAgBgHg");
	this.shape_139.setTransform(162.8,39.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000099").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_140.setTransform(156.1,39.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000099").s().p("AgXAvQgDgCAAgEIAAgVIAAgXIgBgVIgBgMQABgFACgDQACgEAEAAQAEAAACACQADACgBADIAAABQAEgCAEgBIAHgBQANAAAHALQAFAJAAANQAAAMgIAJQgIAJgNAAIgKgBIAAAXQABAEgDACQgCACgEAAQgDAAgCgCgAgDgbIgHAFIAAAXQAGACAEAAQAGAAADgDQADgEAAgHIAAgLQgCgHgGAAQgEAAgDACg");
	this.shape_141.setTransform(149.8,41.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000099").s().p("AgXAvQgDgCAAgEIAAgVIAAgXIgBgVIgBgMQABgFACgDQADgEADAAQAEAAACACQACACAAADIAAABQAEgCAEgBIAHgBQAOAAAGALQAFAJgBANQABAMgIAJQgIAJgNAAIgKgBIAAAXQABAEgDACQgCACgEAAQgDAAgCgCgAgCgbIgIAFIAAAXQAGACAEAAQAGAAADgDQADgEAAgHIAAgLQgCgHgGAAQgEAAgCACg");
	this.shape_142.setTransform(143.4,41.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000099").s().p("AAOAbIgKAEIgGABQgOAAgGgIQgIgHAAgPQAAgNAKgKQALgKANAAQAGAAAHADQAJADAAAFQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAIQAAALABAEIADAHIADAFQgBADgCACQgDACgCAAQgDAAgGgFgAgHgLQgHAGABAIQAAAHACAEQADAFAGAAQADAAADgCQADgBADgDIgCgTIAAgFIABgFIgCgBIgCAAQgGAAgGAGg");
	this.shape_143.setTransform(136.8,39.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000099").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_144.setTransform(130,38.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000099").s().p("AgFAuQgCgCAAgEIAAhQQAAgDACgCQACgCADAAQADAAADACQACACAAADIAABNQAAALgIAAQgCAAgDgCg");
	this.shape_145.setTransform(447.1,19.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000099").s().p("AgFAuQgCgCAAgEIAAhQQAAgDACgCQADgCACAAQAEAAACACQACACAAADIAABNQAAALgIAAQgDAAgCgCg");
	this.shape_146.setTransform(443.8,19.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000099").s().p("AgGArQgDgDAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgCADgBQADABACACQACACAAADIAAANIgBAMIAAALIAAALQAAADgCADQgCACgDAAQgDAAgCgCgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEgBQgDABgCgDg");
	this.shape_147.setTransform(440.6,19.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000099").s().p("AAOAhQgHAAgFgOIgCgTIgCACIgJAXIgDAEQgCAEgFAAQgDAAgDgFQgDgFgCgIIgFgfIgBgIQAAgDACgDQADgCADAAQAGAAABAHIACAIIABAIIACAOIAKgdQACgIAGAAQAGAAADAJIADAQIADAPIAJgjQABgFAHAAQACAAADADQACACAAADIAAACQgGAWgGASQgCAGgEAFQgCAEgEAAIgBAAg");
	this.shape_148.setTransform(434.8,21.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000099").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgCIAAgEQAAgEgCAAQgFAAgEAGQgFAHgDAIIAAAGIgBAFIAAAFIAAAGQAAADgDACQgCACgDAAQgEAAgCgCQgDgCAAgDIAAgGIAAgFIABgPIAAgPIAAgGIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_149.setTransform(422.4,20.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000099").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_150.setTransform(416,21);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000099").s().p("AgGArQgDgDAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgCADgBQADABACACQACACAAADIAAANIgBAMIAAALIAAALQAAADgCADQgCACgDAAQgDAAgCgCgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEgBQgDABgCgDg");
	this.shape_151.setTransform(411.4,19.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000099").s().p("AgFApQgCgCAAgDIAAgHIAAgGIgBgdIgKgBQgIgBAAgHQAAgEACgCQADgCADAAIAKABIAAgHIAAgFQgBgEADgCQACgCAEAAQAHAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgDAAIgFAAIABAeIAAADIAAADQAAAOgJAAQgCAAgDgCg");
	this.shape_152.setTransform(406.8,20);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000099").s().p("AgRAaQgKgIAAgMQAAgLAJgNQAJgOALAAQAHAAAIAEQAKADAAAGQAAADgCACQgDACgDABQgCAAgEgDQgDgDgIAAQgDAAgFAIQgFAJAAAGQAAAFAEAEQAEAEAGgBQAEAAAGgCIAHgDQADAAACACQADACAAADQAAAEgKAFQgJAEgGAAQgMAAgIgHg");
	this.shape_153.setTransform(400.7,21);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000099").s().p("AAOAbIgKAEIgFABQgOAAgIgHQgGgIgBgPQAAgNALgKQAKgKANAAQAGAAAIADQAIADABAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAJQAAAJACAFIACAGIACAGQABADgDACQgCACgEAAQgCAAgGgFgAgHgLQgHAHAAAGQAAAJAEADQACAFAGAAQACgBADgBQAEgBADgDIgCgUIABgDIAAgGIgCgBIgCAAQgHAAgFAGg");
	this.shape_154.setTransform(394.5,21);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000099").s().p("AgQAfQgJgEAAgGQAAgGAIAAIAIACIAHABQALAAAAgEQAAgDgIgEIgPgHQgIgGAAgHQAAgNANgDQAHgDAOAAQAFAAADACQAFACAAAFQgBALgFAAQgGAAgBgGIgFAAQgNABAAADQAAACAHAEQAMAGAEACQAJAGAAAIQAAAKgKAFQgIAEgJAAQgIAAgHgCg");
	this.shape_155.setTransform(382.9,21);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000099").s().p("AgEApQgDgCAAgDIAAgHIAAgGIgBgdIgLgBQgHgBAAgHQAAgEACgCQACgCAEAAIAKABIgBgHIAAgFQABgEACgCQACgCAEAAQAHAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgDAAIgFAAIAAAeIAAADIAAADQAAAOgIAAQgCAAgCgCg");
	this.shape_156.setTransform(377.3,20);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000099").s().p("AgGArQgDgDAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgCADgBQADABACACQACACAAADIAAANIgBAMIAAALIAAALQAAADgCADQgCACgDAAQgDAAgCgCgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEgBQgDABgCgDg");
	this.shape_157.setTransform(372.9,19.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000099").s().p("AgEApQgDgCAAgDIAAgHIABgGIgCgdIgLgBQgHgBAAgHQAAgEACgCQACgCAEAAIAKABIgBgHIAAgFQAAgEADgCQACgCADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgDADQgCACgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAADQABAOgJAAQgCAAgCgCg");
	this.shape_158.setTransform(363.1,20);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000099").s().p("AAOAbIgKAEIgGABQgNAAgHgHQgIgIAAgPQABgNAJgKQALgKANAAQAGAAAIADQAIADABAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAJQAAAJABAFIADAGIADAGQgBADgCACQgDACgDAAQgCAAgGgFgAgHgLQgHAHABAGQgBAJADADQADAFAGAAQADgBACgBQAEgBADgDIgCgUIABgDIAAgGIgCgBIgCAAQgGAAgGAGg");
	this.shape_159.setTransform(357,21);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000099").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_160.setTransform(350.2,19.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000099").s().p("AgEApQgDgCAAgDIAAgHIABgGIgBgdIgMgBQgHgBAAgHQAAgEACgCQACgCAEAAIAKABIgBgHIAAgFQAAgEADgCQACgCADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgDADQgCACgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAADQABAOgJAAQgCAAgCgCg");
	this.shape_161.setTransform(343.8,20);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000099").s().p("AgdAlQAAgCACgCQACgCADgBIAIACIAJABQAHAAAEgGQAEgFABgMQgDADgEACQgDABgEABQgLgBgIgHQgHgHAAgLQAAgQAKgLQAKgKAQABQAFgBAEACQAEABADADQAHABAAAHIgBAMQgCAOgBAOQAAASgGAJQgIALgSAAQgXABAAgKgAgIgaQgFAHAAAJQAAAGADAEQACADAGgBQADABAFgFQAFgFAAgFIADgSIgEgCIgEAAQgJAAgFAGg");
	this.shape_162.setTransform(332.6,22.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000099").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgCIAAgEQAAgEgCAAQgFAAgEAGQgFAHgDAIIAAAGIgBAFIAAAFIAAAGQAAADgDACQgCACgDAAQgEAAgCgCQgDgCAAgDIAAgGIAAgFIABgPIAAgPIAAgGIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_163.setTransform(326.4,20.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000099").s().p("AgGArQgDgDAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgCADgBQADABACACQACACAAADIAAANIgBAMIAAALIAAALQAAADgCADQgCACgDAAQgDAAgCgCgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEgBQgDABgCgDg");
	this.shape_164.setTransform(321.7,19.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000099").s().p("AgEApQgDgCAAgDIAAgHIAAgGIgBgdIgLgBQgHgBAAgHQAAgEACgCQACgCAEAAIAKABIgBgHIAAgFQABgEACgCQACgCADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgDADQgCACgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAADQAAAOgIAAQgCAAgCgCg");
	this.shape_165.setTransform(317.1,20);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000099").s().p("AAOAbIgKAEIgGABQgOAAgGgHQgIgIAAgPQAAgNAKgKQALgKANAAQAGAAAHADQAJADAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAJQAAAJABAFIADAGIADAGQgBADgCACQgDACgDAAQgCAAgGgFgAgHgLQgHAHABAGQAAAJACADQADAFAGAAQADgBADgBQADgBADgDIgCgUIAAgDIABgGIgCgBIgCAAQgGAAgGAGg");
	this.shape_166.setTransform(311,21);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000099").s().p("AgRAaQgKgIAAgMQAAgLAJgNQAJgOALAAQAHAAAIAEQAKADAAAGQAAADgCACQgDACgDABQgCAAgEgDQgDgDgIAAQgDAAgFAIQgFAJAAAGQAAAFAEAEQAEAEAGgBQAEAAAGgCIAHgDQADAAACACQADACAAADQAAAEgKAFQgJAEgGAAQgMAAgIgHg");
	this.shape_167.setTransform(304.4,21);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000099").s().p("AgGArQgDgDAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgCADgBQADABACACQACACAAADIAAANIgBAMIAAALIAAALQAAADgCADQgCACgDAAQgDAAgCgCgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEgBQgDABgCgDg");
	this.shape_168.setTransform(299.9,19.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000099").s().p("AAQAsIgIAEIgIAAQgNAAgJgIQgJgIABgOQAAgQAJgIQAIgKANAAIAIABQAEAAADACIABgbQABgHAHAAQAEAAABACQADADAAADIgCAaIgBAYIABAcIABACQAAADgDACQgCACgDAAQgFAAgCgEgAgLADQgFAFAAAKQAAAGAFAFQAFAEAGAAIAGgBIAFgDIACgDIAAgVQgBgDgEgCQgDgCgEAAQgIABgEAEg");
	this.shape_169.setTransform(294.5,19.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000099").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgCIAAgEQAAgEgCAAQgFAAgEAGQgFAHgDAIIAAAGIgBAFIAAAFIAAAGQAAADgDACQgCACgDAAQgEAAgCgCQgDgCAAgDIAAgGIAAgFIABgPIAAgPIAAgGIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_170.setTransform(288,20.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000099").s().p("AgGArQgDgDAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgCADgBQADABACACQACACAAADIAAANIgBAMIAAALIAAALQAAADgCADQgCACgDAAQgDAAgCgCgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEgBQgDABgCgDg");
	this.shape_171.setTransform(283.2,19.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000099").s().p("AgEAiQgCgCAAgEIgCgTIgCgTIAAgGQgHAEgHAJIgBABIAAASIAAAEIgBAEQAAAEgCABQgCACgDAAQgGAAgBgEIgBgKIAAgUIgBgJIAAgJQAAgFACgEQACgFAEAAQADAAADACQACADAAADIAAAFQAJgKAIAAQAJAAADAGQADgDAFgBQAEgCAGAAQALAAAEAMIADAPIAEAfQAAADgCADQgDACgEAAQgGAAgCgHIgCgRIgBgQQgCgLgDAAIgFADIgHAFIABASIABATQAAAEgCACQgCACgEAAQgCAAgCgCg");
	this.shape_172.setTransform(271.7,21);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000099").s().p("AgWAeQgCgCAAgDIAAglIAAgFIAAgGQAAgEACgBQACgDAEAAQAGAAABAHQAKgIANAAQALAAAAAQIAAAEQgBAJgHgBQgIABABgIIAAgGQgNADgGAKIAAAdQAAAEgCACQgCACgDAAQgFAAgBgDg");
	this.shape_173.setTransform(264.2,21);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000099").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_174.setTransform(258,21);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000099").s().p("AgKAyQgDgDAAgDIAAgCIACgQIAAgcIgEABIgDAAQgEAAgCgCQgDgCAAgEQAAgFAGgBQADgCAHAAIABgGQACgNAFgGQAGgIAOAAQALgBAAAIQAAAIgKgBQgHABgEAFQgCADgBAIIAAACIALgBQALAAAAAHQAAAIgLAAIgMABIAAAPIABAPQAAALgCAGQgBAGgGAAQgDAAgCgBg");
	this.shape_175.setTransform(251.8,19.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF0000").s().p("AgcAtQgDgDAAgEIAAg9IAAgIIAAgIQABgFAKgCIAOgBQALABAKAGQAMAJAAAMQAAAHgDAFQgCADgFAEQAGADAEAFQAFAGAAAHQAAAHgIAHQgGAFgGACQgNAFgUABQgEAAgDgDgAgPAfQAKgBALgCQALgEgBgDQAAgEgGgEQgFgDgFAAIgPAAgAgPgSIAAAMIAIABQARgCAAgMQAAgEgFgDQgFgFgGAAIgJAAg");
	this.shape_176.setTransform(240,19.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF0000").s().p("AgfAsQgDgCAAgEIAAgNIAAgNIAAguQAAgEADgDQADgEAGAAIAOABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAQAJAHAJQACACABADQgBADgCADQgCACgEAAQgDAAgDgDQgRgQgVgHIABATQAAAEgCACQgDACgEAAQgDAAgCgCgAgSACIADAAQAOAAAHgDIAFgEIADgDQAAgHgJgGQgHgGgIgBIgIAAg");
	this.shape_177.setTransform(232.4,19.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF0000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgDIAOAAQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_178.setTransform(224.8,19.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF0000").s().p("AgMAqQgHgRgIgfIgGgQQgDgLAAgFQAAgDADgCQADgCADAAQAFAAADAFIACALIAGATIAIAcIANgiIAFgOQADgJAEgEQADgDADAAQAEAAADACQACACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgHALIgDAMIgQAoIgHAOQgCAEgFAAQgGAAgCgFg");
	this.shape_179.setTransform(216.9,19.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000099").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_180.setTransform(204.1,21);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000099").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_181.setTransform(197.5,19.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000099").s().p("AgFApQgCgCAAgDIAAgHIAAgGIAAgdIgLgBQgIgBAAgHQAAgEACgCQADgCADAAIAKABIAAgHIAAgFQgBgEADgCQACgCAEAAQAHAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgCADQgDACgDAAIgDAAIgDAAIgFAAIABAeIAAADIAAADQAAAOgJAAQgCAAgDgCg");
	this.shape_182.setTransform(191.1,20);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000099").s().p("AgUAFQgCgBAAgDQAAgDACgCQAEgCADAAIANAAIANAAQAEAAADABQAEACgBADQABAGgKAAIgbABQgDAAgEgCg");
	this.shape_183.setTransform(184.6,20.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000099").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgDIAOAAQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_184.setTransform(172.2,19.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000099").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_185.setTransform(164.1,19.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000099").s().p("AgpAtQgCgCABgDIAAgIIAAgHIAAgKIAAgKIAAgKIAAgMIAAgKIgBgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIAAgmIgBgGIgBgHQAAgIAJAAQAJAAAAAeIAAAJIAAAkIgBAJQgCAIgHAAQgEAAgFgFQgWgUgcgkIAAASIAAAOIAAAOQAAARgJAAQgEAAgDgDg");
	this.shape_186.setTransform(155.1,19.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000099").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgDIAOAAQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_187.setTransform(146.6,19.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000099").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_188.setTransform(138.6,19.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000099").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_189.setTransform(125,19.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000099").s().p("AgZAkQgJgKAAgMQAAgTARgUQAOgSAPAAIAFABIADAAQADgCAEAAQAFAAACAGIABAMQAAADgCACQgCADgEAAQgFAAgDgFIgCgDIgFgBQgIAAgIAMQgNAPAAAOQAAAGADAFQAFAEAGAAQAEAAAHgDIAJgGQAEgDACAAQAEAAADADQABACAAAEQAAADgCADQgQANgQAAQgOAAgIgJg");
	this.shape_190.setTransform(117.2,19.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000099").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgDIAOAAQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_191.setTransform(109.8,19.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000099").s().p("AgdAvQgCgCAAgEIAAhCIAAgHIAAgGQAAgEACgDQADgCADAAIAEABIAMgBIAKgBQAGAAAKACQANAEAAAEQAAAEgCADQgDACgDAAIgDgBQgHgCgLAAIgIAAIgKACIAAATQAJgCAGAAIASABQAHABAAAHQAAADgCABQgCACgEABIgJAAIgIgBIgPADIAAAkQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_192.setTransform(102.4,19.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000099").s().p("AggAsQgCgCAAgEIAAgNIAAgNIAAguQABgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAQAJAHAJQACACABADQgBADgCADQgCACgEAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgEAAQgDAAgDgCgAgRACIACAAQAOAAAHgDIAFgEIACgDQABgHgJgGQgHgGgIgBIgHAAg");
	this.shape_193.setTransform(94.9,19.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000099").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgDIAOAAQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_194.setTransform(87.3,19.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000099").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_195.setTransform(80.2,19.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000099").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgDIAOAAQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_196.setTransform(68.2,19.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000099").s().p("AggAsQgCgCAAgEIAAgNIAAgNIAAguQABgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAPAJAIAJQADACAAADQAAADgDADQgDACgDAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgDAAQgEAAgDgCgAgRACIACAAQAPAAAFgDIAGgEIACgDQABgHgJgGQgHgGgIgBIgHAAg");
	this.shape_197.setTransform(60.6,19.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000099").s().p("AgWAoQgQgMAAgcIAAgIIAAgJIABgHIAAgHQAAgEABgEQADgFAEAAQADAAADABQACACABAEIAAAKIgBAKIAAAIIAAAJQAAAHABAIQADAJAFAEQADACAIAAQAPAAAGgbQADgNAAgZIABgGQADgDAFAAQADAAADACQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDATgKANQgEAGgGAEQgHAEgIAAQgPAAgGgFg");
	this.shape_198.setTransform(52.1,19.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000099").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_199.setTransform(43.6,19.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000099").s().p("AgWAoQgQgMAAgcIAAgIIAAgJIABgHIAAgHQAAgEABgEQADgFAEAAQADAAADABQADACAAAEIAAAKIgBAKIAAAIIAAAJQAAAHABAIQADAJAFAEQADACAIAAQAPAAAFgbQAEgNAAgZIABgGQADgDAFAAQADAAACACQABABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDATgKANQgEAGgGAEQgHAEgIAAQgPAAgGgFg");
	this.shape_200.setTransform(34.9,19.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000099").s().p("AgdAvQgCgCAAgEIAAhCIAAgHIAAgGQAAgEACgDQADgCADAAIAEABIAMgBIAKgBQAGAAAKACQANAEAAAEQAAAEgCADQgDACgDAAIgDgBQgHgCgLAAIgIAAIgKACIAAATQAJgCAGAAIASABQAHABAAAHQAAADgCABQgCACgEABIgJAAIgIgBIgPADIAAAkQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_201.setTransform(27,19.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(255,255,255,0.6)").s().p("EgjfADtIAAnZMBG/AAAIAAHZg");
	this.shape_202.setTransform(238.2,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]}).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,4.5,454.5,238.7);


(lib.anim_surfguy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AEGlSQAEAJAAAKQAAAJgBAKQgCAJgBAJQgCAKgCAJQgCAKgBAJQgBAKgCAJQgBAEgCACQgCACgDACQACARgRADgADqiVQgIADgGAEQgQALAEgCQgYARgEADQgfAWgiAMQgKAEgJgBQgEgBgEgCQgCABgDAAQgMACgMgCQgHgBgIgDQgSgGgSgIQgBgBgBgBQgOgHgJgOABRiFQAKAIAHAMQAFgWATgKQAQgIASgCQATgCATgHQAGgDAAgEQABgLgEgLQgIgYAbAHQAAAFANAKAD5jbQADgCACgCQAEAHADAIQAGAMgHAKQgEAIgIABQACABADACQAFACgGAFQgGAEACAIQgHADgHADIisG8QgHAEgJAEQgJAEgIAEQgCABgCABQgHADgGADQgJAFgJAAQgJAAgJgEQgJgDgGgIQgJgEgDgLABRiFIBPjNQBThTATBTAhNjtQgDAAgDgBQgBAAgBgDQgBgDABgDQgBAAgDACQAAABgBADQgDgEgDgEQgDgDgBgEQgBgDgBgEQAAgFABgDQgEAGgCgEQgBgCAAgDQABgEABgEQACgEgBgCQgBABgCAAQgBACgDABQgDgNALgIQAEgCADgDQAEgCADAAQAEgBADgDQgEAAgDgBQgGgBgFAEQADgGAHgDQAHgCAIgCQAHgCAHAAQAHAAAGABQgFgEgGgBQgCgBgDgBQgEgBgFABQADgCADAAQAFgBADABQAKAAAIAFQAAgDAAgDQACgMALgEQgCADgBAEQAAACAAACIAAAAQAAADAAADQAAgEADgCQAPgOAUACQACAAABAAQgGADgFADQgGADgFAEQAAAAAAAAIAAAAIAAAAQgCACgCACQADgBADAAQAOAAAMAKQABACgFgCQgFgBgFAAIgBAAQAAAAAAAAQgDABgFACQAFAAADAAQATADAEASQACAFABAEQAAACABACQgDgBgBgCQgIgNgPgDQgBgBgCAAQgDAAgCAAQgDABgFgCQgFgCgFAAQAAACABACQAAADgEABQgGACgCAFQgCAEAEACQAAAFgDACQgDADAAAEQAAACAAACQABADACABQADAAgBACQAAACgDAEQgEgKgJgBQgCgBgDACQgHAHABAKQABACAAACQADAHAHAEQAIAEAIgFAAAkZQAAgHgDgDQgCgCgFABQgCABgBADQgEAKAIAHQAEAFAEgDIAAgBQACgCAAgEQAAABgBABQAAADgDgCQgKgGAKgFQACACABABgAgDk5QAAABAAABQAAADABADQACAGABAEQABABAAAAQAFAIAEAIQAEAIAMgBQAIgBgCAHQgBADgDACQgCACgCAAIAAAAQAEAKgCAJQAAAIgKAAQgCAAgCAAQgFgBgEgEQgEgDgBgEQgBAFABAFQACAMALADQABAAABAAQACABABgBQgDAJgGAHQgHAJgJgFQgBAAgCgBQAAABAAAAQgCAJgBAJQAAAGAEABIAAAAQAKgDAMAFQATAHAKAQQAEAGgCAHQARgMAQALQADABACACAABkUQAAgDgBgCAgKkvQgIACgBAIAARjnQgEAGgBAHAgLjHQgGgDgHgDQgGgDgBgFAgKitQgIACgHAGAg+j+QACAJgIADQgFADgDABQgBABAAAAIAAAAAhMjuQgBABAAAAAjFg0QAMgMALgQQALgPALgQQALgPAJgQQAJgRANgNQADgDAEgBQAVgFADgTQADgTgBgSAhaAGQgBgCgCgBQgKgDgMgBQgogCgbgdQgHgHgFgHQgBgDgCgDAi9ByQgGgCgDgHQgPghgKgmQgJgmAjgwAhaAGQALAHAGAZQAJAkASAjQAEAHgFAGQAAABgCABQgFAGgIADQgHAEgKABQgUAEgQgEQgJgCgHgFQgBAMAAAMQAAATgJAQQgIARgOANQgOAMgHASQgHASgIASQgIAUAdgCAiVBvQAAglgcgdAAGhiQAAAUgTAIQgUAIgHAOQgBARgQAEQgLADgCAPQgVAIABAHAgxB8QAAAJABAIQACAKACAJQACAJAAAHQAAABAAAAQABADABACAgqCwIAAABQABACABADIABABQAAABABABQABACABACQAGAPgGARQgBADgBADQAAAIAAAIQAAABgBAAQAAAKgCAJQgDAJgDAJQgBAFgCAFQgBABAAACQgBACgBACQAAABAAAAQgBADABABQgBAEgBADQgGATACAUQAIACALgCQAGgBAEgEQAKgIAPgEQAGgBAHgBQgDAIAFAFQAEAGgDAFQgKARgUAAQgTAAgTAAQgGAAgFACQgOAGgPABQgRABACgOQACgTALgPQALgRAEgTQAFgSgDgSQgEgSgGgSQgHgUAPgRQAFgLgRgMQgPgKgEgRADQiFQgkBygoBoQgoBogsBgQgQAJgOAGQgZAMgRAAQgJABgGgEAg1EqQAAADAAACAi0CXQAGgDAHAAAi9ByQAHAEANgCQANgCAHgDQAHANALAHAi0CXQgCgSgHgTAiMEzQADgCAEgBQAIgBgBAIQAAAIgIAEQgRAHgTABQgUACgTACQgSACgTABQgXABAEgWQACgTAMgQQALgPAHgSQAHgRAHgSQAHgTAIgSQADgFACgFQAHgMAMgEAiMEzQgHACgGAEAirEtQARgIAOAOAA7hOIhlD+");
	this.shape.setTransform(26.7,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("AATBfQgJgCgHgFQgKgHgHgOIAAgBQAAgkgcgdQAcAdAAAkIAAABQgHADgNACQgNACgHgDQgGgDgDgGQgPgigJgkQgKgoAjgwIADAGQAFAIAHAHQAbAcAnADQAMAAAKAFIAEACQAKAIAGAZQAKAiASAkQADAHgEAFIgCADQgGAFgHAEQgIADgJACQgLACgJAAQgJAAgIgCg");
	this.shape_1.setTransform(13.1,42.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAFQgJgFAJgFIADADQACACAAACIgBACQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAIgCgBg");
	this.shape_2.setTransform(26.3,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBAWQgBgFAAgFIAFAHQAEAEAGABIADAAQgEAGAAAHQgMgDgBgMgAgKgPQgHgHADgKQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAEgBADACQACADAAAHIgCgDQgKAFAKAGIABAEIgDABQgDAAgCgDg");
	this.shape_3.setTransform(26.7,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFEF97").s().p("AgoA7IgCgEIAAgGIgDACIgBAEIgHgHIgEgHIgBgIIAAgIQgDAGgDgEIgBgFIADgHQACgFgBgCIgDACIgEACQgDgMAKgHIAIgFIAHgDQAEgBACgCIgHgBQgGgBgEAEQADgHAGgCIAPgFIAPgCQAGAAAHACQgGgEgGgCIABgEQAJAAAHAGIABgGQABgNALgEQgCAEAAAEIgBADIAAAAIABAGQAAgDACgDQAPgOAVACIAEABIgNAFQgGADgEAEIgBAAIAAABIAAAAIgDADIAGgBQAPAAAMAKQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGgCgFABIAAAAIgBAAIgIACIAJABQASADAFASIACAIIABADQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQgIgMgPgDIgEAAIgFAAQgDAAgEgCQgFgBgGAAIABAEQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQgGACgDAGQgCADAEACQAAAEgCADQgEACAAAFIABADQAAABAAABQAAAAABABQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIgEAFQgDgJgIgCQgDAAgCACQgHAGABAKIAAAFQACAIgIAEIgIAEIgBAAIgCAAIgEAAg");
	this.shape_4.setTransform(22.3,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AhvFPQADgTAKgPQALgRAFgTQAEgSgDgSQgDgSgGgSQgHgUAPgRQAFgLgRgMQgQgKgEgRQAQAEAVgEQAJgBAIgEQAHgDAGgGQgBAJACAIIAEATQACAJgBAHIAAABIADAFIAAABIABACIACAEQAGAPgFARIgCAGIgBAQIAAABQgBAKgCAJIgFASIgEAKIgCgBIAAAEIAAAEIgBABIAAADIAAABIAAgBIAAgDIABgBIgBAFIgCAHQgFATABAUQAJACALgCQAGgBAEgEQAKgIAPgEIAMgCQgCAIAEAFQAFAGgDAFQgLARgUAAIgmAAQgGAAgFACQgNAGgQABIgCABQgPAAACgOgAkIEdQADgTALgQQALgPAIgSIANgjQAHgTAIgSIAGgKQAHgMALgEQAGgDAHAAQgHAAgGADQgCgSgHgTQAHAEANgCQANgCAHgDQAHANALAHIgBAYQAAATgIAQQgJARgOANQgOAMgHASIgOAkQgJAUAdgCIAHgDQARgIAOAOQgHACgGAEQAGgEAHgCIAHgDQAIgBAAAIQAAAIgJAEQgRAHgTABIgnAEQgSACgTABIgCAAQgUAAADgVgAhcgcQgKgEgMgBQgogCgbgdQgHgHgFgHIgDgGQAMgMAMgQIAWgfQAKgPAJgQQAKgRANgNQADgDAEgBQAVgFADgTQADgTgCgSIABgBIAIgEQAIgDgCgJQADAHAHAEIABAAIAGACIAAAAIABAAQAEAAAEgDQgEADgEAAIgBAAIAAAAIgGgCIgBAAQgHgEgDgHIAAgEQgBgKAHgHQACgCADABQAJABADAKIAEgGQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIgBgEQAAgEAEgDQACgCAAgFQgEgCACgEQADgFAGgCQABAAAAgBQABAAABAAQAAgBAAAAQAAgBAAgBIgBgEQAGAAAFACQAEACADgBIAFAAIAAACIABAGIAEAKIAAABIAJAQQAFAIALgBQAIgBgCAHQAAADgEACIgDACIAAAAQADAKgBAJQgBAIgKAAIgDAAQgGgBgEgEIgFgHQAAAFAAAFQACAMAMADIABAAQABABAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQgDAJgFAHQgHAJgKgFIgDgBIgNgGQgFgDgCgFQACAFAFADIANAGIAAABIgDASQAAAGAEABQgIACgHAGQAHgGAIgCIAAAAQAKgDAMAFQATAHALAQQAEAGgDAHQARgMARALIAEADQAKAIAHAMQAGgWASgKQAQgIATgCQATgCASgHQAGgDABgEQAAgLgDgLQgIgYAbAHQgBAFAOAKQAQgDgBgRIAEgEIAFgEIAIAPQAFAMgGAKQgFAIgIABIAGADQAFACgHAFQgFAEABAIIgOAGIgOAHQgPALADgCIgcAUQgeAWgiAMQgKAEgKgBIgIgDIgFABQgMACgMgCQgHgBgHgDQgTgGgRgIIgDgCQgOgHgJgOQAJAOAOAHQABAUgUAIQgUAIgGAOQgCARgPAEQgMADgBAPQgVAIABAIIgEgDgAgIlEQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAABQgDAKAHAHQAEAFAEgDIAAgBQACgCAAgEQAAgDgCgCQAAgHgBgDQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgDAAgAgSlFQABgIAJgCQgJACgBAIgAg9keIAAAAg");
	this.shape_5.setTransform(26.5,41.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#57B7EA").s().p("AiQFXQgJgEgDgLIABgDIADgKIAGgSQACgJAAgKIABgBIAAgQIACgGQAGgRgHgPIgBgEIgBgCIgBgBIgCgGIBmj+QAMACAMgCIAFgBIAIADQAIABAKgEQAigMAfgWIAcgUQgkBxgoBpQgnBogsBgQgQAKgOAFQgbAMgQAAIgBAAQgJAAgFgDgAgYhjIBPjNQBThTATBTIghCPQgOgKABgFQgbgHAIAYQAEALgBALQAAAEgGADQgTAHgTACQgSACgQAIQgSAKgFAWQgHgMgLgIg");
	this.shape_6.setTransform(37.2,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8B59E8").s().p("AiJFIQgJgEgGgHQAGADAJAAQARAAAagMQAOgGAQgJQAshgAnhpQAohnAkhyQgEACAQgLIAOgIIirG9IgQAIIgRAIIgEACIgNAGQgJAEgKABQgJgBgJgDgACVlLQAEAKAAAJIgBATIgDATIgEATIgDATIgDATIgDAGIgFAEQACAQgRAEg");
	this.shape_7.setTransform(38,37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.anim_surfguy, new cjs.Rectangle(-1,-1,55.3,78.1), null);


(lib.anim_mick_washer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ag6AmQgCgDgEgCQgHgHgGgHQgFgIgEgJQgDgIgCgKQgBgKACgKQABgJAHgHQAGgGAGgHQAHgHAIgFQAIgFAJgEQAJgEAJgDQAKgEAHADQACgFACgGQAFgIAIgFQAIgEAIgDQAIgEAJgBQAJgBAIABQABAAABAAQAIABAIACQAFABAFACAAjg1QgBgBAAgBQAAgBAAgBQgFAGgHAHQgGAGgHAGQgEADgEACQgBABgDABQAAAAgBAAQgBAAgBAAQgJACgKgBQgHgBgHgBQAGAJAHAHQAFAFACAGQABACABADQADAJACAKQACAJAGAIQAEAGAEAFQACABACACQAHAGAJAJAgEgZQABAFgCAEQgBACAAABQgBACgBABQgEAGgHAFAgJBjQABgDAAgEQAAgHAHgCQARgGATAAQACAAACAAQAIgBAGAAQACgBACAAQAIAGAKADQABAAAAADQgBADgBACQAEABADACQACACABACQADAJgIAGQgIAGgJAEQgJAFgJAAQgKABgKABQgJAAgJABQgJAAgJgCQgKgCgIgEQgJgGACgLQACgJAIgEQgHgDgCgLQgBgKAEgHQgBgBgDgCQgLACgJACQgHABgFgCQABgDABgDQADgJAGgKQAEAEAEAEQAFAIAIAGAgWBfQABgBAAgBQABgDADgEIAAAAQADgDAFgCQAEgBADgBQAIgDAIgCQAFgBAFgCIAAAAQABAAABAAQALgEALABQAGAEADADAARA1QgGAAgHAAAgbBeQABAAABABQABAAACAAQACgBABABQABAAABABQgEAEgBADQgFAJANAEQAIACAHgBIABAAQABAAABAAQAIgBAIgBQACAAABAAQAKAAAJgCQAJgCAJgCQAKgDgEgHQADgEgCgEQAAgBgBgBQAAgBAAAAQgEgIgJgEAAiBsQgCAAgDAAQgCAAgBACQgCACgCABQgBAAgBAAQgDABgEgBQACgFAAgDQAAAAgBAAQgDgKgIgGAAiBsQgBgCgBgGQAAgKgIgGAANBxQgBgBgBAAQgFADgFgBQgDAAgEgEQgEgFABgGQgEgBgEgCAAnBNQAIAKAEAIQABADAAAEABCBZQADABADABQABAAABABABCBjQgCACgFABQgEABgDgBQgDgBgDADQgFAEgHAA");
	this.shape.setTransform(16.4,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgjAUQgKgCgIgFQgJgGACgJQACgJAIgEIACAAIADABIADgBIACABIgFAHQgFAJANADQAIACAIAAIAAAAIADAAIAQgCIACAAQAKgBAJgCIASgDQAKgCgEgIQADgDgCgFIgBgBIAGACIACAAIAHAEQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQADAJgIAGQgIAGgJAEQgJAEgJABIgUABIgRABIgTgBg");
	this.shape_1.setTransform(18.7,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#964A01").s().p("AgkAXQgMgDAEgKIAGgHIgCgBIgDABIAAgCQABgDADgDIABgBQACgCAFgCIAIgDIAQgEIAJgDIAAAAIADgBQAKgDALAAIAKAIIgEAAIgOABIgFABQgSAAgRAGQgHACgBAGIgBAHIgHgEIAHAEQgBAFAFAFQADAEAFABQAEAAAGgDIACABQADABAEAAIAAgBIAFgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAFAAQAHgBAGgEQADgCADABIAGAAQAGgCACgCQADAIgKACIgSAEQgJACgJABIgCAAIgRACIgCAAIAAAAIgDAAQgHAAgHgCgAgfAHIAAAAg");
	this.shape_2.setTransform(18.5,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AABB7QgDgBgEgEQgEgFABgFIABgHQAAgHAHgCQARgGATAAIAEAAIAOgCIAEAAQAIAGAKACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABIgCAEIgCAAIgGgCIAAgCQgEgHgJgFQAJAFAEAHIAAACIABABQACAFgDADQgCADgFABIgHAAQAAgFgBgDQgEgIgIgJQAIAJAEAIQABADAAAFQgDgBgDACQgFAEgHABIgCgJQAAgJgIgGQAIAGAAAJIACAJIgFAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAIgEADIgCABQgDABgEgCIACgGIAAgBIgBgBQgDgJgIgGQAIAGADAJIABABIAAABIgCAGIgCgBQgEADgEAAIgCAAgAgZBnIgCAAQgHgEgCgKQgBgKAEgHIgEgEQgIgGgFgHIgIgIIAIAIQAFAHAIAGIgUAEQgHACgFgCIACgHQADgJAGgJIgGgGIgNgOQgFgIgEgJQgDgJgCgJQgBgKACgJQABgKAHgGIAMgOQAHgHAIgFIARgJIASgGQAKgEAHACIAEgKQAFgIAIgFIAQgIQAIgDAJgBIARgBIACABIAQADIAKADIAAANIgFAHQgCAHgGAFIgBADQgMAIgNAMIgDACIgPAOIgBgDIAAAAIAAgBIgMAMIgNANIgIAFIgEABIAEgBIAIgFIANgNIAMgMIAAABIAAAAIABADIgPAOQgGANgMAKIgEACIgFAHQgHAXAPASIACAEQAHADAGAGQABACAAADIgNAAIAEADQAHAGAJAKIgKADIgQAFIgHACQgFACgDADIAAAAQgDADgBAEIgBACIgDgBgAgagBQAFAEACAHIACAFIAFASQACAJAGAIQAEAGAEAFQgEgFgEgGQgGgIgCgJIgFgSIgCgFQAHgGAEgFIACgDIABgDQACgFgBgEIABgBIgCgEIABAFIgVAAIgOgCQAGAJAHAIg");
	this.shape_3.setTransform(16.4,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAGAvQADgDADgDIAAAAQACgCABgCQAOgTAEgaQAAgFABgGAgTguQgQANADAe");
	this.shape_4.setTransform(18,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AAniFQgEgCgFgBQgIgCgJgBQgBAAgBAAQgIgBgHABQgJABgJAEQgIADgHAEQgJAFgFAIQgDAGgBAFAhEg8QgHAPgEALQgBAAAAAAQgIAVABAGQABAJAEAJQADAJAGAIQAGAHAHAHQADACADADQAEAEADAEQAGAIAHAGQADACABABQgDAHABAKQABALAIADQgJAEgCAJQgCALAKAGQAIAEAJACQAJACAJAAQAKgBAJAAQAKgBAJgBQAKAAAJgFQAJgEAHgGQAJgGgEgJQAAgCgDgCQgDgCgDgBQgCgBgBAAQgCgBgDgBQAAABAAABQACAEgCAEQADAHgKADQgJACgJACQgJACgJAAQgCAAgBAAQgJABgIABQgBAAgBAAIAAAAQgIABgIgCQgMgEAEgJQACgDAEgEQgBgBgBAAQgBgBgCABIAAAAQAAgBAAgBQABgDADgEIABAAQACgDAFgCQAEgBADgBQAIgDAIgCQAFgBAFgCQgCgCgCgCQgGgHgGgEQgCgCgBgBQgGgFgDgGQgDgEgCgEQgCgFgBgEQgCgKgDgJQAAgDgBgCQgDgHgFgEQgBgBgBgKIAAAAAgSBoQgCAAgCAAQgBgBAAAAAA9BUQgCAAgCABQgHAAgHABQgDAAgCAAQgTAAgRAGQgGACgBAHQAAAEgBADQgBAGAFAFQACAEAFAAQAEABAGgDQABAAABABQACgFgBgDQAAAAAAAAQgDgKgJgGAAbBQIAAAAQACAAABAAQAKgEALABQAGAEAEADQAIAGAJADQACAAgBADQAAADgBACAAcBdQAHAGABAKQAAAGABACQgCAAgDAAQgBAAgBACQgCACgDABQgBAAAAAAQgEABgDgBAA5BVQAIAEAEAIQAAAAABABAA4BvQADABADgBQAFgBADgCAArBWQAHAKAEAIQACADAAAEAAlB1QAHAAAGgEQADgDADABAgGBsQgEgBgDgC");
	this.shape_5.setTransform(21.6,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#964A01").s().p("AgkAXQgMgDAEgKIAGgHIgCgBIgDABIAAgBIAAgBQABgDADgDIABgBQACgCAFgCIAIgDIAQgEIAJgDIAAAAIADgBQAKgDALAAIAKAIIgEAAIgOABIgFABQgSAAgRAGQgHACgBAGIgBAHIgHgEIAHAEQgBAFAFAFQADAEAFABQAEAAAGgDIACABQADABAEAAIAAgBIAFgDQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAFAAQAHgBAGgEQADgCADABIAGAAQAGgCACgCQADAIgKACIgSAEQgJACgJABIgCAAIgRACIgCAAIAAAAIgDAAQgHAAgHgCgAgfAHIAAAAg");
	this.shape_6.setTransform(24.1,32.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AAJCEQgEgBgEgEQgDgFABgFIABgHQAAgHAGgCQASgGATAAIAEAAIAOgCIAEAAQAIAGAKACQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABIgCAEIgCAAIgGgCIABABQACAFgDADQgCADgFABIgHAAQAAgFgBgDQgEgIgIgJQAIAJAEAIQABADAAAFQgDgBgDACQgFAEgHABIgCgJQAAgJgIgGQAIAGAAAJIACAJIgFAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgEADIgCABQgDABgEgCIACgGIgBgBIAAgBQgDgJgIgGQAIAGADAJIAAABIABABIgCAGIgCgBQgFADgDAAIgCAAgABJBpIABACIgBgCQgDgHgJgFQAJAFADAHgAgTBwQgHgEgCgKQgBgKADgHIgDgEQgIgGgFgHIgIgIIgGgGIgNgOQgFgIgEgJQgDgJgCgKQAAgEAIgVIAAgBIALgaQgDgdAQgOIAFgKQAFgIAIgFIAQgIQAIgDAJgBIAQgBIABABIARADIAKADIAIAFQADAHgBAJQgCAUgSAKIghAQIABgKIgBAKQgCAbgPATIgDAEIAAAAIgGAHQACACACgGIAAABQACAJABABQAEAFADAHIACAFIAFASIADAJIAEAIQAEAGAFAFIAEADIAMAMIgGAHIgRAFIgGACQgGACgCADIAAAAQgDADgCAEIAAACgAABg5IAAAAg");
	this.shape_7.setTransform(21.2,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:18.7,y:32.5}},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_1,p:{x:24.3,y:34.3}},{t:this.shape_5},{t:this.shape_4}]},2).wait(2));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AgGBXQgDAAgDAAQgCAAgDABQgTAEgUgBQgEgBgBgCQgCgMAGgTQAGgRAHgQQABgBAAAAQAIgRAOgMQAHgGACgHQAGgRAGgSQAIgSARgJQAQgJAVAA");
	this.shape_8.setTransform(19.3,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("AB5lAQAGgEAHAAQAHAAAGABQADAAADABQAJACAHAIQAGAIADAJQADAIgBAJQAAAKgCAJQgCAIgDAGIAAABQgBABgBACQgEAIgIAHQgBgDAEgGQAEgFABgHQAAgBAAgDQAAgMgKAGQgDACgCAAQABgDABgCQAEgJgCgKQgCgKgIgGQgEgCgEgBQgFAAgEACQgDgDgFABQgGAAgGABQgIABgGAGQgDACgCAEQgCAEgCADQgCAEgBAEQgBABAAABQgCAFgBAEQgBAFgBAFQAAADgBABQgCgBgBgCQgCgDgBgEQgBgGgCgFQgBgGABgFQAAgDAAAAQgDACgCACQgCADgDADQgBgEgBgFQAAgEAAgFQgBABgCACQgDACgCADQAAgBgBgEQgBgCgBgCQAAgBAAgBQAAgCABgCQABgBAAgCQgDADgFADQgEgFACgJQACgKAHgHQAFgHAIgEQAIgFAKgCQAIgCAJACQAJACAHAFQAHAGAEAGQABAAAAABgACBk5QAHgHAKAEQAFACAFADACjknQgEgGgGgCQgDgBgDgBQgEgBgEgBIAAAAQgEAAgEgBACNj0QACgCACgCQABAAAAgBQAAgBABgBQABgCABgDIAAAAQABgGgEgGQgIADgGAIQgFAGAAAFQAAgFAJAAQAFABAAAFQAAAAAAABQgBABgCAAQgDACgDAAQgBABgCAAQgBgCAAgBQAAgBAAgBQgBAAAAgBAB4j8QAEgDACgFQADgHACgEQgHgIgKAEQgJAFgEAJQgDAIAEAEQAAgGADgCQACgCAGACQAEACADADQgDAEgFACQgCABgDgBQgEgBgBgCAB3jrQAFAAACAAQACABAAABQACACgEAEACnj3QgGADgIAEQgHAEgDAFQgCACgBADQgBADgBACIAAAAQgBABAAABQgDAFgEADQgHAHgHAGQgBAAAAAAQAIAHABAJQABAHgBAIQgBAIgEAGQgBABAAABQAQAMAAATQABATgLAQQgFAHgEAHQARgBAQAIQARAJAQAKQAGAEAIADQAKAEALABQATABASAJQAFADAFADQAKAHAHAKQANAQgbAAQgCACgBAAQgGAEgGgCQgDgBABgHQABgIgHgDQgJgEgKABQgFABgBAAQAIALgTADQgTADAHgSQgFgFgIgEQgIgDgLgCQgSgCgTgFQgSgGgRgJQgRgIgGgSQgHgSgEgUQgEgTAFgRQgFADgFACQgIAEgJABQgJACgJAAQgBAAgCAAQgHAAgHgBQgGgCgHgCAEKAQQAEgDACgGQgGgKgJgGQgHgFgJgDABEk8QAGgJALAAQAJAAAIABQAEAAADABQAEACAFACQABAAACgBABrk+QgJgCgHAFQgIAEgGAIQgFAHACACAAfkJQgHgFACgLQACgNAKADAAfkJQAAABABAAQADACADAAQACAAACgDABAi+QgBgBgCgBQgJgEgFgJQgFgHgCgJQgCgJABgJABYjoQACAKAIAFQAIAFAHgBQABAAABAAQgEADgDADQgKAKgMgHQgHgEAAgHQAAgHAFgFQADgCABgDgAgcj7QABAAAAAAQAEACAEACQAIAGAHAHQADgFAEgFQAHgGAIgGQAGgFAHgEAhVi0QABAHAFAFQAFAGAGAEQAHAEAHACQAFACACAAAhBh7QgJgDgGAIQgFAFgFAFQgGAGgCAJQgCADACADAAKh+QgEAIgEAJQgCAGgHACQgEACAAADQAAACgCACQgFAEgGADQgJAOgJgDQgKgDgJAAQgKAAgKADQgKACgDAAQgCgBgBAAIgBgBQAAAAAAAAQgCAAgDABABzjGQgBABAAAAQgIAFgIADQgJADgKgBQgIAAgHgDAAxisQAAgCADgDQAGgIAGgFAA6iKQADgCACgCQAGgEADgGAB2iXQgGAHgFAEAiTEmQgSgDgSgFQgUgFgIgRQgJgPAPgRQAMgOAJgQQAKgQAMgOQAKgMAKgKQANgPgHgUQgGgRgDgZQgEgZgSAEQgTADgGAEQgGAEgEACQgEADgDABQgBAAAAABQACASAHARQAHAPgQALQgQALgJARQgJARgCATQgCAUgHARQgDAIgHAGQgRAMgBASQgCAXAWADQASAEARAJQAQAJAPAKQATAOAOgMQADgDgEgEQAIAFAFgEQAFgDgEgDQAEABACgBQAHgDAGgCQAKgCABgLQABgOgOgBQgHgBgGAEQgEACgDAEAhbA5QAOAOAGAHQgLAKACAQQADAUAKASQAIAOAHAPQAIATgBAVQgBAQgGAPQgGASAJANQAHAJALACQAMACAIAGQAGAFAGgHQAQgNASgKQAEgDAEAAQgLgGgMgIQgMgHgFgLQgHgQABgSQABgZgDgaQgDgQgFgOQgEgLgCgMQgCgKAFgHQAEgEAAgHQAAgHgLgDQgLgEghgBQgiAAAKAGgAjBBJQAGAKAJAGAgqBjQAHATgEAUAgeDsQgHAOALACAj7D+QgMAPANAD");
	this.shape_9.setTransform(28.4,34.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAGAGIAAgCIAAgBQAAgEAIAAQAFABABAEIAAABIgDABIgHACIgCABIgCgDgAgOADQgDgBgCgCQAAgFADgCQADgCAFACIAHAFIgHAFIgDABIgDgBg");
	this.shape_10.setTransform(40.6,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9F9F9").s().p("AgbAjQgHgEAAgIQAAgHAFgEQADgDABgCQACAJAIAGQAIAEAHAAIABgBIgGAHQgGAGgHAAQgEAAgFgDgAAbgGQAAgFgFAAQgJAAAAAEQAAgFAFgGQAGgHAIgDQAEAGgBAFIAAAAIgCAGIgBACIgBAAIgEAEIAAgBgAgMgVQAEgJAIgFQAKgFAHAIIgFALQgCAFgEAEIgGgFQgGgCgCACQgDACAAAGQgEgEADgIg");
	this.shape_11.setTransform(39.8,10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AjFE5QgPgKgQgJQgRgJgSgEQgWgDACgXQABgSARgMQAHgGADgIQAHgRACgUQACgTAJgRQAJgRAQgLQAQgLgHgPQgHgRgCgTIABAAIAHgEIAKgGQAGgEATgEQASgDAEAZQADAZAGARQAHAUgNAPIgUAWQgMAOgKAQQgJAQgMAOQgPARAJAPQAIARAUAFQASAFASADQgEACgDAEQADgEAEgCQAGgEAHABQAOABgBAOQgBALgKACQgGACgHADQgCABgEgBQAEADgFADQgFAEgIgFQAEAEgDADQgHAGgHAAQgJAAgKgIgAj6D7QgHgCAAgEQAAgFAGgHQgGAHAAAFQAAAEAHACgAiyBEQgJgGgGgKQAGAKAJAGgAgLEPQgIgGgMgCQgLgCgHgJQgJgNAGgSQAGgPABgQQABgVgIgTIgPgdQgKgSgDgUQgCgQALgKIgUgVIAAAAQgKgHAiABQAhABALADQALAEAAAHQAAAHgEAEQgFAHACAKQACAMAEALQAFAOADAQQADAagBAZQgBASAHAQQAFALAMAHIAXAOQgEAAgEADQgSAKgQANQgDAEgEAAQgCAAgDgCgAgaDnQgHgBAAgGQAAgEADgFQgDAFAAAEQAAAGAHABgAgnB1QACgIAAgHQAAgMgFgMQAFAMAAAMQAAAHgCAIgAD7AAQgDgBABgHQABgIgHgDQgJgFgKABIgGABQAIAMgTADQgTADAHgTQgFgGgIgDQgIgEgLgBQgSgCgTgFQgSgGgRgJQgRgIgGgSQgHgSgEgUQgEgTAFgSIgKAGQgIAEgJABQgJACgJAAIgDAAIgOgBIgNgEIANAEIAOABIgIARQgCAGgHACQgEACAAADIgCAEQgFAEgGADQgJAOgJgDQgKgDgJAAQgKAAgKADQgKACgDgBIgDAAIgBgBIAAAAIAAAAIAAAAIAAAAIgFABIgFABQgTAEgUgBQgEgBgBgCQgCgMAGgTIANghIABgCQAIgQAOgNQAHgGACgHIANgjQAIgSARgJQAQgJAVAAIAAgBIABABIAIAEIAPAMIAHgJIAPgMIANgJIABABIABAAIAAAAIAEABIAAAAIABAAQACAAACgCQgCACgCAAIgBAAIAAAAIgEgBIAAAAIgBAAIgBgBQgHgFACgLQACgNAKADIAIgGIgBADIgBAEIAAACIACAEIABAFIAFgFIADgDIAAAJIACAJIAFgGIAFgEIAAADQgBAFABAGIADALIADAHIADADIABgEIACgKIADgJIABgCIADgIIAEgHIAFgGQAGgGAIgBIAMgBQAFgBADADQAEgDAFABQAEAAAEADQAIAGACAKQACAKgEAJIgCAFIAFgCQAKgGAAAMIAAAEIgOAHQgHADgDAGIgDAFIgCAFIAAAAIgBABIgHAJIgOANIgBAAQAIAHABAJQABAHgBAIQgBAIgEAGIgBACQAQAMAAATQABATgLAQQgFAHgEAHQARgBAQAIQARAJAQAKIAOAGQAKAEALACQATABASAJIAKAGQAKAHAHAKQANAQgbABQAEgEACgGQgGgKgJgGQgHgFgJgDQAJADAHAFQAJAGAGAKQgCAGgEAEIgDACQgEACgEAAIgEAAgAhihsIgBgDIABgDQACgJAGgGIAKgKQAEgGAGAAIABAAIAAAAIADAAIABABIgBgBIgDAAIAAAAIgBAAQgGAAgEAGIgKAKQgGAGgCAJIgBADIABADgAA/ijIgFADIAFgDQAGgFADgGQgDAGgGAFgABrihQAFgEAGgHQgGAHgFAEgAhPi9QAFAGAGAEIAOAGIAHACIgHgCIgOgGQgGgEgFgGQgFgFgBgIQABAIAFAFgAAojyQACAJAFAHQAFAJAJAEIADABQgGAFgGAJQgDADAAACQAAgCADgDQAGgJAGgFQAHADAIABIABAAIABAAIACAAIAAAAIABAAQAHAAAHgCIAAAAQAJgDAHgFIABgBIgBABQgHAFgJADIAAAAQgHACgHAAIgBAAIAAAAIgCAAIgBAAIgBAAQgIgBgHgDIgDgBQgJgEgFgJQgFgHgCgJQgBgHAAgIIAAgDIAAADQAAAIABAHgABUj4QgFAFAAAHQAAAHAHAEQAMAHAKgKIAHgGIgCAAQgHAAgIgEQgIgFgCgKQgBADgDACgAB+j4QADgDAAgCIgBgCIgCgBIgBAAIgDgBIgBAAIAAAAIAAAAIgCABIACgBIAAAAIAAAAIABAAIADABIABAAIACABIABACQAAACgDADgACEkWQgFAFAAAGIABABIAAABIABAEIADgBIAGgCIADgCIAEgDIABgBIABgCIACgFIAAgBQABgFgEgGQgIADgGAIgABykoQgJAFgEAJQgDAIAEAEQABACAEABQADABACgBIAIgGQAEgEACgEIAFgLQgFgGgFAAIgHACgAEKgEIAAAAgAhnheIAFgBIAAAAIAAAAIAAAAIAAAAIABABIgGAAgAhnheIAAAAg");
	this.shape_12.setTransform(28.4,36.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFEF97").s().p("AA3AxQADgGABgGIAAgEQAAgMgJAFIgGADIADgGQAEgJgCgJQgCgJgJgGQgEgDgEAAIABgJIAJABIAFACQAHADAEAGQgEgGgHgDIgFgCIgJgBIAAAAIgIgBIAIABIgBAJQgEgBgEADQgDgDgFABIgMABQgHAAgGAHIgGAFIgEAHIgDAIIgBACIgCAJIgDAJIgBAFIgCgEIgDgGIgDgMQgCgFABgGIAAgCIgEAEIgFAGIgCgJIAAgIIgEACIgEAFIgCgFIgBgDIAAgCIABgEIAAgDIgHAGQgFgGACgIQADgKAGgIQAGgGAHgEQAJgFAJgDQAJgBAIABQAJADAHAFQAGAFAFAGIgDADIgJgEIgFgBIgSgBQgLAAgGAJQAGgJALAAIASABIAFABIAJAEIADgCQAGgDAIAAIAMAAIAGABQAKADAGAHQAHAJADAJQACAIAAAHQAAALgDAJQgCAHgDAHIAAAAIgBADQgFAJgHAHQgBgDAEgGgAghgJIAAgBQAAgDAEgGQAFgHAIgEIABgBIABAAIAAAAIAAgBQAEgCAFAAIAAAAIAAAAIADABIABAAIABAAIgBAAIgBAAIgDgBIAAAAIAAAAQgFAAgEACIAAABIAAAAIgBAAIgBABQgIAEgFAHQgEAGAAADIAAABgAAngfQAFACAEADQgEgDgFgCIgBgBIgGgBIAAAAIAAAAQgGAAgEAFQAEgFAGAAIAAAAIAAAAIAGABIABABgAAfgWIAAAAg");
	this.shape_13.setTransform(39.2,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,58.9,70.4);


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


(lib.contentsurfshopscene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.anim_surfguy();
	this.instance.parent = this;
	this.instance.setTransform(162.7,106.6,1,1,0,0,0,26.7,38.1);

	this.instance_1 = new lib.anim_mick_washer();
	this.instance_1.parent = this;
	this.instance_1.setTransform(98.2,120.1,1,1,0,0,0,28.4,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AL6orQADAAACAAQgDAAgBgBIgBAAQAAAAAAAAIgBAAQABABAAAAQAAAAAAAAQACADACADQAFAJAFAKQADAIAHAGQADADADAEQADAAADAAQAKAAALgBQAHgBAIAAQAEAAAEAAQADAAADABQABAAACAAQACAAACACQACABACABQACABACABQAEADACACQgCgHgDgIQgCgGgDgGQgDgGgFgDQgJgGgKgEQgEgCgDgBQAGgBAHgCQAKgCAKAAQAKgBAHAHQACADADACQADAEAEAEQAHAGAFAIQAEAGADAHQAAABABACQACAHAAAHQAFgDAGgDQAHgFAIgGQAAAAAAAAQAIAAAIAFQAEACADADAKbpGIACgBQAJgBAJAAQAJgBAIACQAIACAHADQAJAEAJACQAJADAIAGQAEADADAEAM5okQgFgCgFgCQgGgBgGgCQgJgBgKAAQgIAAgJABAONojQABgKgBgJQgCgIgCgHQABgEgFgHQgEgFgGgHQAEgDAGgCQAJgDAJgCQAKgDAJAAQAKAAAIAEQAGADAFADQAAABABAAQAAAAABAAQAAAAAAABQgBgBAAAAQgBAAAAAAQgLAAgKACAONpPQAJACAEAHQACAEABAEAOEojQgFgBADgGQAFADAGAEAPJpdQgEADgDAEQgEAHgBAIQABAJAAAKQAAAFABAGIABAAQAAAAAAAAIAAAAQAHgDAIgDQAJgDAJgEQAJgEAIgFQAIgFAIgFQAIgGAIgGQAHgGAAAHQADgCADAAQALgCAGAJQAFAIgBAKQgBAJgJADQgDABgCgBQgJgDgJACQgKACgIAEQgJAEgIAEQgHAEgIAFQAAABgBAAIAAAAQgBAAAAABQAAAAABAAIABAAQAAAAABAAQAJgBAJAAQAKABAJAAQAJAAAJgCQALgCAHgEQAJgBAGAGQAFAHADAIQADAJgCAJQgCAJgEAHQgFAJgJAEQgMAFgBgMQgBgCAAgBQgCgDgDgBQgJgFgKAAQgKABgJAAQgJAAgIAAQgJAAgIACQgIABgFgBAOgpNQACAFABAFAO0pRQgEAFAAAGAPAopIAAAAIAAAAIABAAQAFABAAAGQAAAGgDAFQAIAAAHgBQAGgBAHAAAO/opQgIgBgHAHQgGAHgFAIQgBABgBACQgDgEgEgDQgHgGgIgFAQapOQgHAIAIAHQAIAIAGgJQAEgHgIgFQgFgDgBAGQgBADABADAEUpfQAGAFAKgBQAIgBAHAAQAJgBAIgBQAIAAAIgBQAJAAAIgBQAJgCAKAAQAJAAAHAFQACABAAACQADAHAGAGQABAAABAAQACAAABAAQAHABAGAAQAIAAAIAAQAJgBAIgBQAIgBAHAAQAIAAAIgBQAIgCAIgCQAJgDAJgBQAHAAAAAJQAAAAAAABQAFgEAJAAQAHgBAIgBQAIgBAJAAQAIgBAJABQAJABAJAGQAAAHAFAFQAFAFADAGQADAIABAJQAAAKgDAKQgCAFgCAIQAAAAAAABQACACACAEQACADABACQACADAAACQABACACABQACgJADgJQAEgJAHgHQAFgFAJgHQAHgHAGgIQAGgIAAgMQgEgDgFgBIAAAAQgBAAgBAAIgBAAIAAAAQAAAAABAAAGHoiQgBAAAAAAQgJgDgJgCQgIgCgJgCQgFgCgFAAQgIgBgIAAQgHAAgHAAQgDgBgCAAQgTAGgVAIQgCAFgCAGQgDAIgDAIQgCgDAAgDQgUAIgNANQgOANAAAOQAAAEABADQACAPgTACQgUADgLAPAFQpUQAJAFAIAGQAJAFAJACQAKACAIADQAKADAIAGQAIAEAHAFQAIAFAHAFQAJAEAHAHQAHAGAEAKQABADABADAGTpNQABABABABQAHAFAHAFQAHAGAIAHQAHAGAJADQAIADAHAEQAIADAFAIQADADABAEQADgBAHABQALABAMACQALACALADQAGABAFAEQABACACABQABABACABQADADADADQADAEACADQACACACACQABABABAAQgBgBAAAAQgCgDgBgCQgDgGgDgFQgGgIgCgJQgCgGgCgFQgCgCgBgCQgEgIgDgHQgEgIgEgIQgFgIAAgIADTmjQAAgEAAgDQACgOAJgJQAHgHAIgHQAPgMARgLQAKgGAEgLQACgHAFgFQANgNASgGQARgGATgEQAQgDARABQAAAAABAAAHtpKQAFAEAFAFQAEAFAEAGQAFAIAFAIQADAFADAFAJfpOQAIAFAIABQAJACAKAAQAJAAAKAAQACgBADABAMLntQgEgDgDgCQgJgDgJgFQgKgFACgLQABgGgEgFQgFgIgHgHQgHgGgJgBQgKgBgEgIALJnsQgIAAgDAAQgKgCgHgHQgKgIgIgJQgFgFgCgHQgCgEABgJAIJmVQAKgLAPgKQAPgKAPgLQAQgLARgIQARgIATgDQASgCASgFQAPgDARgFAJpoEQgBgBgBAAQgJgGgLgCQgOgDgPgEQgGgCgHgDQgDgBgBgBAJFmEQAHAAAHgBQAIgBAJABQAJAAAKAAQAKAAAKABQAKAAAIgDQAEgCAAgFQAAgLgKgEQgCgBgCAAQgKAAgJgBQgJAAgJABQgJAAgJAAQgKgBgKAAQgJAAgJABQgJABgJACQgKACgJABQgFAAgDADQgBABAAABQACAAADABQAJADAKACQAEABAFABQACgCACgBQALgDACAJQACABABAAQAEACAEABgAJgllQgBgHAFgFQAEgGAGgEQgDACgDAAQgHACgGgDQgJgEgJgEQgCgBgCgBAIul0QABAAACABQABAAACAAQAJADAIADQAKADAJADQADABAFABAI6mIQgKAAgDALQgBAEABABQAAABABABQAAABAAABAIhlxQABAAACgBQACgBADAAQACgBADAAAIhlxIAAAAQgFgJAGgJQADgFAEgDAIPl9QAJAIAJAEAIblOQAAASABASQACAQABAQQACARADARQAEATAFASQAFATAFATAJMk6QADgFAEgEQAHgGAIgDQAKgDgBgLQgCAAgBAAQgEgBgCgFQgCgDAAgCAJ+l9QgBADgCABQgBAAgBAAQgIABgDAIQgDAGgCAGQAAABAAABQgBAEAAAEQABAAACAAAJMk6QABACACADQAHASABAUQAAASgBASQAAAAAAABQgCAEAEAEAJqlCQgBAHgBAGQgCAKgBAKQgBAFgBAGQgCAJgBAKQgBAJgBAJAIWgTQgCgGgDgIQgHgBAGgQQANgkgQgmQgPgkgMglQgLgjALgmQAMglATgkQAKgJAGgRAIplzQgGAXASALQAPAIAIAPALGl2QABAAACgBQAIgEAHgDQALgDAEAJIAAAAQAIgBAIAAQAJgBAJAAQAKgBAJABQAIAAAJAAQAFAAAFABIAAAAQABgDABgCQADgEAHgBQAJgBAJACQAIABAGADQgCADgBADQAFAAAFgBQAJAAAIgBQAHAAAHAAIAAAAQAAgCAAgBQgCgHAGgGQACgBADgCQAAgCABgCQABgJAAgJQgBgKAAgJQAAgIAAgJQAAgJgBgKQgBgIgEgIQAAADAAACQgEgDgDgEQgGgHgJgFQgIgDgIgFQgDgBgEgBAKFl7QADAAACAAQAOACAOAEQAEABAFABQAEABAEAAQAHAAAIgEQgDAIgCAJQgBABAAACQgJACgJAAQgKABgJAAQgJgBgIABQgFAAgDACQAFgFACgIQACgJgGgIQAAAAAAAAQgBgBgCABQgCgBgCgBAKFl7IAAAAIAAAAAJul7QACgBACgBQAFgCAHACAJvlgQAHADAGADQADABAAgBQABgBACgCAKTkrQgDgKgHgHQgHgGgHgGQgEgDgDgEQgHgHACgKALAliQgDAHACAIQgMAIgMANQgKAKgKAJAJpliQADABADABAHioSQACAEAAAFQAAAKgBAJQgCAJgDAJQgDAIgDAHQgBgCgBgDQgBgDgBgDQgCgEgCgDQgBgEgDgDQgEgHgFgGQgBgBgBgBQgEgFgEgEQgEgEgEgDQgBgBgBAAQgLgJgOgFQgHgEgIgCAHBn9QgNAMgPAIQgRAIgSAFQgTAGgUAEQgSAEgPAMQgQAMgFAXQAOABAPAAQATgBATgEQAEgBAFgBQADAAACAAQAEABAEABQAOgGAQgGIABAAQgBgBAAgBQgEgEgDgFQAAgBAAgBQAEgFAJgCQAKgCAKgBQAHgBADAFQABABAAACQAAABAAABQgEAJgEAJQgDAJACALQgFABgCAHQAAAAABABQABgBADAAQAEgCABgEQgBgBgCgBQACAAACAAQgBABAAABQAIADAHgBQgGgFAFgJQABgCABgCQABgKAHgEQAEgDACgEQAEgIAFgHQABgCACgCQAEgFAFgGQAKgLAMgJQASgQAOgJAGdmvQAEgCAFgCQABAEABABAGsm7QgBAGAGAEQABgDACgDAIImTQgHgCgGgDQgJgEgJgCQgKgCgJgKQgHAAgEAFAHBm/QASgGAPgEADomjQAMgOATgGQATgGAQgLQARgLAQgKQAQgKAPgJQARgLARgEQAUgGARgIAGgmbIAAAAQgBgCABgCQABgJgEgHAGgmbQgDAAgCAAQgJAAgJgEQgGgCgFgCAGqmOQgEgDgFgEQgBgBAAgCQAAgBAAgCAF2mCQAKADAKgEQAJgDAJACQACAAABAAQgCADgCAEQAEgCADgCQABgBABgBQAEALgBAIQgBAKAAAKQgBAJAAAJQgBAJgCAIQgCAJAAAKQAAAJgDAJQgBAFABAEQACAAACgBQAFgDAFgBQAIgCAHgCQADgBADABIAAAAQgCgDABgEQABgKgDgJQgDgJABgJQABgJAAgJQAAgJAAgJQABgIABgKAF2mlQAGAEACAHQACAKgDAIQgDAGgDAAIgBAAAFnmFQgRgBgRgBQgTAAgSAAQgEAQAOANQAJAJgEAPQgBAGAFADQgBgLAKgFQAGgCAFgHQAWgFAAgTQAKgFAAgGQACAAACABQAJABACABAH7l+QABAAACAAQAJAAAIABQgYgKghgJQgGgBgGgCQABAAAAAAQAHgBAEAEAHNmDQAHAGACAKQACAIABAIQACAKAAAKQADgBABgDQAFgJAFgIQAHgLAIgKQABgCACgDQgHAAgHgBQgKgCgKgBQgGgBgGAAQgCAAgCABQgIAAgHgCQADAGABAIQgEgGgEgGQgEgEgEgEQgCgCgBgBIgBgBAG6mEQgBgCgCgCQgCgDgDgDAGxmPQgEgEgDgDQgEgEgGgBAGkmDQAFgDAFgEAGfmEQADgEAIgGAHBjxQgDgQACgSQAAgBAAAAAG/jnQAFADgGADQgBAJgBAJAG/jnIAAAAAGqjmQAFAEACACQAGgEAIgDIAAAAIAAAAQABgFABgFIgCAKAGljlQAAAAABAAQgEAAAAAAQABAAACAAQABAAABAAIAAAAQADgBAAAAQgCgUgLgRAGqjdQAAACAAABQABAAABgBQgBgBgBgBQgEgEAAgEAG8i1QAAgKgCgGQgCgJgEgEQgBADgCADQgEAEgDAFQgBAJAAAJQgCAnABAlQABAjgCAiIjEARQAAAAAAABQgBAOAAAPQgBAagBAZQgBAoADAlQACAaANARQgDAmALAkQALAkgaASQgFADgFACQgVAHgOgYQgRgfgFgnQgFglgLgjQgDgJgBgVQgBgmgCgoQgBgPAAgQIg7AFQABANgBAQQAGABAGADQAWAHgDAWQgCAPgLAJQACACADACQADAEAAAFQgDAFgFAGQgEAEgFAFQgBABgBACQgGAGgFAGQgEAGAAAAQgFgDgGgCQABgCABgDQgBAAAAAAQgCgBgCAAQADgIAEgJQADgGACgHQAAAAAAgBQACgIADgHQAEgFAEABQABAAAAgBQAfgRgkgXIgBAAQgHgKgNgFQALACALAEAGejDQAAgGAEgGQAEgGAEgFAG/jIQACAHgFAMQAAAIAAAIQACAkgBAkQgCAhABAhIABAAQADABADAAQANACAOgBQATgBASAEQAJACAKABAG+jhQgDAFgEAGQADADACAEQACAEABADAG+jhQANgCALgBQADAAAEgBQASAOgRAWQgPgCgQgFAGqjDQgFAFgEAEQgDgFAAgEADnjIIAwAAQAGgBAGAAQAPgBAPACQAkACAmADQAIABALgBAGljlQgLgCgFABQgmAFgoAAQggAAggAAIgbAAQgDANgCAMQgEASgBATQgEAmADAmQAEAmgCAiALQk5QgNAPgGATQgGATgBATQAAASALASQAKAPgCATQgCAPgFAOQgIASABAUQAAAUAAATQgBAVAAAPAKmgIQADgRgKgRQgGgMgDgNQgEgTALgPQgCgTgKgSQgJgQABgTQAAgTgDgTQgDgUgJgRQgEgHABgHQADgSARgNQAEgDAEgDAJWjrQgDgMgGgKAJWjrQABAEABAEQAAAAAAABQAEAlAJAjQAKAmAEAnQADAfgFAfQAEABAEAAQAJABAJABQAIABAJACQAFABAFAAQAEABAFAAQAJABAJACQAIACAJAAQACAAADABQAAAAABAAQAGAAAHABQAHAAAIAAQAJAAAIAAQAIABAJABQAEAAADAAIABAAQACgMAFgQQAFgSACgTQACgUgLgRQgKgRgNgPQgMgPgIgRQgBgCAAgBQgFgNgBgMQgCgSgCgTQgBgTADgSQADgUAKgRQgCgEgFgMQgIgTgOgOQAPADAQABQAUABAUACQAIABAIAAQACABgCAAQAAAAAAAAIAAgBQgDgEAAgGQAAgMAEgLAP2oOQAJgBAJgBQAMgCAEACAP8oHQAHAAAIgBQAGAAAAABAQAn/QAJgBAIgBQAJgBgDACAQooWQAGAEADAGQADAEAAAFQAAAGgDAEAOyoHQACgBABgCQAEgEAEgEQAEgCACgDAOjoRQgDADgDADQgCADgDADQgHAFgHAFAOnn7QAAgBABAAQAFgFAFgGQAMAHAHAOQABACABACQAAAEAAADQAAACAAABQgBgDgBgDQgDgEgEgDQABAHgBAHQAAAHAAAGQgBAHgBAHQgBAJAAAIQgBAJgBAIQgBAJgBAJQgBAKgBAHQgFgEgIAHQgGAGgGAHQgFgBgGgIQgBAAAAAAQAAgBgBgBQACgIABgHAO3lmQgFgFgIgBQgCAAgCAAQgDgBgDgCQAGgEAGgCQAJgEAAgHQABALABAKQABAFgBAAQABABABACQACADgCABQgBAAAAAAQABAcgBAQQgBATgBASQAAATAAASQAAAUAGASQAGATAIARQABADAAADQgGAAgEAAIAAAAQAAAAABABQADAGABADAO1mDQAEABgEACAOKlaQABgCABgCQABgBAAAAQAEgEAFgCQAIAEAIADQAJADAJgEANooaQAHAHAGAGQAFAGAFAFQAFAGABAGAONnqIAAAAAMUoWQAAAIALAAQAIAAAIACQAJADAIAAQAGABAFABAMLntQAAABgBAAQgGABgGABQgHABgIAAQgHABgHAAQgIAAgHgBQgHgBgCgCAMpnqQgEABgDgCQgFgCgEAAQgHAAgHAAAMYn9QADADACAEQAEAIAIAEQADACADACALll3QgDgCgFADQgCABgBACQgDAEgCAEQgDAHAHACQADABADABALnl4QABACgBABQgBgBgBgBQABAAABgBgAL8kvQAKgRAUgGQAPgFAPgCQADgBADAAAOLl0QgBgDgBgDAOMlnQABAAAAAAQADgCACgCQgBgBgCgBQgCgDgCgEQAAAHABAGgANGl2QgCAAgCABQgHABACALQADAJAEAJQAEAEAIAGQAIAGAJAEQAIAFAFAIQAFAJAJAEQACABAAADQAFARgGASQgEALgCALQgEATAGASQAFASABATQACAUgIATQgIASgFASQgFASgCATQgCAPgCAOQgCATgIAJQAEAAADAAQAJABAJAAQAJABAKABQAKAAAIgEQAAgBAAAAQABgDAFgBQAAgBABgDQACgIABgIQABgKABgJQACgKABgKQAAgIAAgIQAAgKgDgKQgDgJgBgJQgBgJAAgKQgBgGAAgHQAMgIALgCQAGAAAFABQACAAACAAQgHgCgIABQgHAAgGACQgFAAgDgBQgDgBgCgDQABgTAAgTQAAgSgBgTQgBgTgBgTQgCgTgDgUQgCgSgFgTQgEAAgBgDQAAgCACgDQABgCAEgDANGl2QADACACgBQAFAAAEgBANgl4QgCAAgBABQgFAAgEABQgHgCgHACANElXQAIgBAHgCQAIgBAJAAQAJgBAIAAQAIgBAIAAAM2lXQACAHAAADAM6k5QgIAOgHAOQgHAQAAARQAAATABASQAAAUAGASQAGAQAGAPQAHASACASQADATgEATQgEATgGATQgEANABAAAL3inQgEARgJAOQgKAQgDAUQgCASgCATQgBAOgCANQgDASAEARAPLiZQABAKgBAGQgBAHgBAIQgBAJAAAKQgBAJgBAJQgCAJgBAIQgCAJgBAJQgBAJAAAJQAAAJAAAJQgBAKADAIAOqi4QACAJgDAIAO0iyQgBAKAFAGAOEojQAHACAGAIQAGAIAGAGAObiQQAAgDACgGANwoeQAMgHAIACAQBAFQAHAGADAKQAHARgJARQgGAKgKAEQgIgCgIgEQgJgDgNABQAAACgBADQgBACgDACQgBgBAAAAQACAGAAAGQgBAKAAAJQgBAIACAJQACAJACAMQgBABgBACQgBABgBABQgBAAAAABQgBAAAAABQgBACgBADQAAACAAABQABAIAEAGQAFAIAAAIQAAAKgFAIQgDAFgBAEQgBADAAACQAAABgBACQgBAEAAAFQAAAJAAAIQAAAKAAAJQABAKAAAJQABAJADAJQADAJADAIQACAGABADQgDAHADAIQADAJACAJQADAJACAKIAAAAQACAJgEAKQgGABgHADQgJAEgJACQgIACgIgEQgIgDgJgFQgCgBABgCQAAgIABgJQACgKABgJQABgKAAgJQABgKABgJQABgJAAgJQABgJgBgJQgBgKgCgKQgDgJABgKQAAAAAAAAQgEgEAAgGQgBgLAEgKQAEgMgGgIQgEgGgBgGQAAgHgBgGQgBgFAAgFIAAAAQgBgDgBgCIAAAAQgCgGACgIQABACACACQABAAACABQAIADAJACQAJADAJgBQAIgCAHgFQAAgCACAAAPDANQALABAJgCQAJgBAKgCQAKgCAJgCQADgBABABQgJAEgEAIQgDAHgDAIQgCAJABAJQACAMAJgCQACAAABgCQAHgGACgJQADgKgGgIQgGgKgDANQgBAKgBAJAOlAQQACgBADgCQAIgFAJgDQADgBADAAQAGAAgDAHQgBABAAABAOgAUQACgCADgCAOsAgQgGAFgFAGQgGAJAAAKAOzAZQgBAAAAAAQgCAAAAACQgCACgBACQgBAAAAABQAJADAGAGQAHAGAFAIQADAFACAGQABABAAACAOwAbQABgBACgBAPTA9QABgIgHgGQgNgLgNgLQAEgDAFgCQAEgDADgEAPeAjQAEADAFACAPjASQgEABgDACQAOAFgCAB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BQABgGAAgGQAAAFABAFQACgDAEgCAG+AHQAAAFAAAEQABAVAAAVQABAbgHALQgCAoAGAoQAGAnAAAnQAAApAJAkQAMAqgzABQgOAAAAgQQgCgQAGgWQAJglAFgmQAFgngEgmQgEgmgFgpQgRgMAJgfQAFgPADgPQgDgCgCgGQAAgEABgEIi7APAG+AHQgBAFABAEQgJgEgHgKQgIARgFgDAGlgNQgFAGgDAHIAAAAAG5BgQgQgBgIgGALEEuQADgGADgIQACgGAEgCAiTqsQAHABAHgBQAJgBAKABQAJAAAJgCQAJgDAGACQAFABADADQAGAGAHAGQAIAFAHAGQAIAFAJADQAJADAJABQAFABADADQACAEABAGQABAJAAAKQAAADABADQAAAGACAHQACAJADALQgDgCgDgCQgBAAgBAAAgSpYQgCgDgCgDQgGgHgFgIQgFgIgFgHQgGgIgJgCQgIgDgKABQgJABgJAAQgJABgJgDQgJgDgJgDQgJgDgHAAAhcqiQAEAIAHAFQAIAGAJACQAJADAJABQAKACAJAFQAIAFACAJQABAEACAEAg6pfQgCAAgBAAQgDAAgDAAQADgBADgCQAAgUgFgNAizn0QAKgMAPgHQASgIATgFQASgEATgGQARgFARgFQASgFAOgMQAIgIAIgDQgHgEgFgGQgFgFgDgFQgZgHgPAAQgTAHgPAKQgQAKgMANQgMAPgRAJQgRAJgSAHQgRAGgPAMQgPAMgFANQAIAAAJABQAEAAAEAAQAMgLAPgEQACgBADgBQASgBARgEQASgEATgDQASgDASgDQASgEARgGQARgGAQgGQASgFAQgOQAFgFAGgGQAEACAEACQAIACAIABQAJACAJABQAEABAEABQgSAAgQAHQgHADgIACQgTAEgSAJQgQAJgRAKQgQAJgRAIQgSAJgRAIQgTAJgSgFQgMAAgFAMQgGgBgGgCQgIgDgJgEQgGgDgGgDQACADACAEQADAJgBAJQgBAKgIAEQAFgBAGgBQADAAADgBQAGgBAHgBQABAAACAAQAIgBAIgBQAKAAAKABQAJACAKACQAJACAJACQAJACAJAAQAJABAJABQAAAAABAAQAIABAIACQAIABAJABQAFABAFAAQAEABAEABQAIABAJACQAGABAGACQADABADABQAJADAJgCQABAGAGADQAFACADgBIAAAAQADgBACgGQACgJAAgJQAAgKgHgIQAAgBgBAAQgFgFgHAKQgEACABADQgEABgFABQgCAAgCAAQgKgBgJAAQgKgBgJgDQgBAAgBgBQALgVATgFQARgEASgFQANgEAOgDQAFgBAGAAQASgDASgBQATgCASgHQASgGAOgNQAOgNAQgKQAHgEAAgGQgGgGgHgFQgIgGgJgEQgGgDgGgCQgHgBgIgCQgGgCgHgBQgEAAgCgCQgDgCgDgCQgDgCgFABQgBgEgBgFQgDgHgEgEQAHABAJAAQAIABAJgCQAIgBAIABQAJAAAJgBQAJAAAJgCQAJgCAKgBQAJAAAIADQAHACACAHQAAABAAACQABAJgBAIQAAADAAADQABACABABQAFAJAMAFQAEACAEABQADABAEABAADphQACAIAGAGQAGAFAGAGQAGAGAHAFQADACADABAgCqEQAHAGAJACQAJACAJAAQAIABAJAAQAJAAAKABQAJABAKABQAJABAKAAQAJAAAKADQAJADAIAGQACACACACAA3poQAEAIAJACQAJADAKABQAJACAIADQAJAEAIAFQAIAFAIAGQAGAFACAFABcouQAEAAADABQAKABAJACQACABACAAQAGABAGACQAJACAHAFQAIAGAGAHQAFAHAFAGQgBgCADgFQADgDACgGQAEgJgIgIQgHgHgFgJQgEgIgDgKQgBgEgCgFAC+pbQAHAAAHABQAJABAJABQAJABAHAGQAGAGAFAHQAEAIACAJQABAHABgBAEUpFQgBAGgBAGQgBAIgCAJQAAADgBAEAmFrOQAHgCAIAAQAIABAIgBQAJAAAIgBQAKgBAJAAQAJAAAIACQAJADAIAFQAJAFAGAGQACACABACAmFrOQABADACAEQACAFACAFQACADACAEQAEAJAFAIQAEAHADAHQACAJgFAIQAAAAgBABAl+q9QALAAAHABQAKAAAKAEQAIAEAIAEQAIAEAHAFQAIAGAFAJQAFAIAGAHQAHAHAHAGQAIAGAGAGQACACACACAoGrvQAHgEAJAEQAJADAKABQAJAAAJABQAJABAJgBQAKAAAJACQAKACAIADQAKAEAFAIQADAFADAEAncrdQAJABAKAAQAIABAJAAQAJAAAJAEQAJADAEAIQAEAIACAJQACAIAEAHQAGAIAAAKAnlrAQADACAFADQAHAEAKABQAKACAIAGQACABACACQAEAEADAGQAGANAFAOQACAEADACQgNASgSAJQgRAIgPALQgQALgPAJQgRALgUADQgUAEgGASAnlrAQACgEADgFQgDgHgGgGQgGgHgIgGQgIgFgHgHAoLq/QAFAIAEAJQADAJADAKQABACAAABQAFgIADgIQAEgJAFgHQADgEACgEAp9ooQAHgJAKgFQAQgKAOgKQAPgLARgJQAPgJARgGQAUgHADgUQABgDABgCQAMgMAQgIQARgJASgBAlGpnQgPAHgPAFQgRAGgRAHQgSAHgSAIQgRAHgRAJQgSAIgSAHQgSAGgHAOQADAAAEAAQANAAAMADQAGgBADgIQAJAHAJAAQAKABAJADQAKACAJAAQAJgOAQgIQARgJASgGQANgEANgFQASgCAPgIQAKgCAIgDQAIgDAHgDQAQgKAsgMQgCgBgCgBQgNgFgRgDQgBgBAAAAQgEgFgCgGQgEgJgDgKQgDgJgBgJQgCgJAAgKQAAgHgEgGQAUAAATABQASACATAAQAEAAAFAAQAOABAPAFQAFABAEADQALAHgIAQQgBACgBABQgIAOgKAMQAQAKAUACQATACASAIQABAAABAAQANAFAJgCAmfqAQACACACABQADADAEACQAFACAEADQAEADACAEQACADABAAQADgHAGgHQAGgHAFgHQAAAEACADQACAFAFADQAGAEAHAEQAHADAHACQACABACABQAHACAHACQAHABAHAAQAGAAAHAAQAGAAAHABQAGABAGAAQAFABAEAAQAEAAAEABQADABADACQACAAACABQgCgBgBgBQgEgEgEgFQgCgCgBgCAlSozQAEgBAFgBQASgGASgHQADgBADABAk9ntQASgJAQgIQAQgIAQgJQAQgJASgDQARgEAQgIQAQgJARgIQAPgIAPgHQANgIASgSQABAAAAgBAi5q2QANAQgEATQgBAJgHAHQgQAQAMASAjUpeQAPAJAJAPQADAGACABQAAgLADgMQADgSALgNQABgBABgCAiVnQQACAAADABQAIABAJAAQAJAAAJABQAJABAJABQAKABAKABQAJABAJABIAAAAQADgFAGgIQAMgPASgIQAQgHATgGQATgGATgHQATgGASgHQATgHAHgQAi+ngQgCgEgDgDQgBABgBABQgBABgCAAQgG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AHQAGAHgCAJQgCAIgIAEQgDABgDABQgFADgFABQgJADgIAGQgCgBgBgCQgHgGgKABQgKABgKACQgJACgKABQgIACgJABQgJABgHADQAAgDgDgBgAsvsMQgCgDgCgDQgFgHgGgHQgHgHgCgMQAFgGAIgDQAJgDAJgDQAIgCAJAAQAJABAIAGQADADAAADQgCAIgCAKQgCAJgBAKQgBADAAADQABgCAAgDQABAAAAABAq2rUQgCgCgDgBQgJgDgKABQgJAAgKAAQgJgBgKgBQgKgBgIgCQABAXAAAQQABASgBARQgBAUgBATQgBAUgCATQgBADAAADQAQAEANABQgBgHgCgKQgDgTAEgTQADgTANgPQAMgOAMgOQANgRAQAGQABAAABABQAIAGAJAFQADABADACQgWAWgSAfQgVAhAFAhQgIgBgGABQgCgGgHABQgHAAgGgBApXqJQACgGADgGQgDgGgDgHQgDgJgFgJQgFgIgFgIQgFgIgGgGQgGgIgHgHQgGgGgGgGQgGgGgIgGQgHgGgIgFQgJgGgIgEQgLgEgFAIAsGsGQAJgCAKACQAKACAJAEQAFACAFACQAJAEAIAEQAKAEADAJQABAGABAGQAAADAAAEQABAFACAGQACAIAGAGAsGsMQABACgBADQAAAAAAABQgCAFgDAFQgCACgCACQgEADgDAEQAAAAABABQABACACACQAEgCACgFQAAgBABgCQAAgBAAgBQAAgDAEAAQALgBgHAJQgBABgBABQgGAHgGAHQgGAHgJADQgBAAgBABQgIACgKAEQgIgEAMgFQABgBACgBQAAgCAAgCQAAgDAAgEQAAgJgEgLQABABABABQAIAEAGAGQABABABAAQAEAFAGAAQACgBABgBAsbr4QABgBAAAAQAFgHAGgFQADgDABgEAsLr4QAAgCAAgCAsDrzQAAAIgCAIQgBACgBADIABAAAsWrxQgCgDgDgEAsxq6QACAAADgCQAIgGAIgFQAIgGAGgHQAFgEACgGAsvsMQACABACABQABABABAAQAIAFAFAJQAAABABACAtAsLQAAADACACQAFAHAIADAtAsLQgCgFAIgDQAFAEAGADAtCrhQAEAAAEABQAEgBAJAAAvHqFQABgGAKgCQAKgBAHgFQAIgGAIgFQAIgFAIgFQAIgFAHgFQAJgGAHgFQAIgGAIgGQAHgGAHgFQAEgEADgEQADgDACgCQgKABgJAEQgJADgJgDQAEAAAEgDQAGgHAAgKQAAgKgEgJQgFgKgJgCQgDAAgBACQgCABgCADQACgDABgCQADgEAFgDQAHgGAKAIQAEADAEACQAGADAJAAAsprfQAEgHAEgKAstrdQACgBACgBQALgDAJgIAtnrcQgEgBgDgEQgGgIgBgKQgBgIABgIQAAgCABgBQAAgCABgBAtTqpQAAgBABAAQAJgEAIgFQAGgDAGgDQACAAACgBAuFqIQACgCACgBQAHgGAIgFQAIgFAIgFQAHgFAIgEAsirYQgGAFgIAFQgHAEgEAFQgCADACADQACAFAEABAsvo8QAAgHAAgHQgBgTACgUQABgKAAgJQAAgHgBgHQAAgCgBgDQgDgRABgSAsuqSQgCAHADAHQgiAegEAlQAHAAAIACQAKABALACAuOo0QALAAAMACQATAEATAEQAEABAFABQgCAJgBAMQgCAZgFAXQgCAGgCAGQgLAkgUAhQgMATgDAKQAAgPgIgNQgVgkACgoQABgoAQgvQgHAAgHABQgBAAgBAAQgNABgMABQgSABgRgDAuIpDQAPABAQAAQALAAALABAsvodQAAgEABgFQAAgLgBgLQAAAAAAAAAsLpAQgCAPABAPQAaAGATABQAAAAABAAQACgDACgDQAAgDABgEQADgJgCgEArKo1QAHAAAIADQAFABAFABQgDgEABgQQABgSADgRQADgTALgPQAKgOAPgHApJr6QAJAAAJADQAJACAJAEQAIAFAHAFQAHAGAIADQAJAEADAKQADAKABAJAqNr7QAKAAAJAAQAKAAAJgBQAKAAAJgCQAKgBAKgBQAJgBAJAAQAGAAAFAAQAHAEAIAEQAIAEAGAGAoLq/QgEgIgFgIQgFgIgHgGQgIgGgKgBQgJgBgJgDQgIgCgHgCQgHgBgHAAQgDAAgCABQACABADACQAHAFAEAGQACAHADAHQABAEABADIAAABQACAFABAGQABAJAAAKQABAIgBAIQATgOAOgMQAGgFAHgDApPrIQAIgBAIAAQAJABAJACQAJACAJABQAJABAHADApmrsQgGgEgGgCQgIgEgJgCQgFgBgFgCAqqsRQADADAEAEQAHAGAHAFQAEACAEACAqSqsQAFACAFADQAIAFAIAFQAIAEAIAFQAIAFAIAFQAAAAABABQgMAYgDAKQgGATgIARQgGANgDAOAqxowQAOAEAOAGQALAEAMADQAAgFABgEApLqaQAAABAAAAQgBAKABAKQAAAFAAAGQAAADAAAEApLp6QgBgBAAgBQgEgIgHgFAwDpbQgDgIAAgLQAAgIgDgFQgDgGAEgGQAFgGAIgEQAJgEAKACQAJABAFAKQgHAHgBAKQAAADAAABQgBABgBAAQgIAGgHAFQgIAGgIAGQADABAEAAQABABABAAQABAAABAAQADAAADACQAAgCgEAAQgBAAgBAAAv8qDQAIgGAKACQAEABADABAwupHQAAgGACgGQAEgJAJgDQAAAAABABQADAEACAGQADAJgBAJQAAAHgHADIgBAAQgJAEgEgLQgCgEAAgEgAwWo3QgGAEgHAFQgIAGgFAEQgBACgDAAQgLgBgCgLQgDgKAGgFQAHgHAJgDAvopOQgGAHgHAGQgHAGgJAGQgDgCgDAAAvypXQAFACAEAFQABABAAABQACADABADQACAFAAAFQAAAGgCAEQACgBABABQAGAEACgDQACgCgBgFQgBgIgEgIQAAgBAEgEQAUABATAFQAJACAKACQABgWAagtAwGjtQACgMACgNQADgTgBgTQgBgTgCgTQgBgRgHgWQABgNAFgSQAFgSABgUQAAgTABgUQAAgTgBgTQgBgSgBgSQAAAAAAAAQgBAAgBABQgLAEADgNQgBAAgBAAQgEAAgFAAQgEgBgEAAAwBovQABgBABgBQAHgGAGgHQAGgHAHgDAvipQQgEgFgGgEQgKgIgGAHAwepeQAMAAAKACQACABADAAAvHqFQAAABABACQgBAJAEAJQADAGAEADQAEACAEAAQAGABAEgDQAGgHAHgGQAGgGAHgGQAGgEAFgEAvNqBQAAgBABgBQACgCADAAAvipzQABgBABgBQAGgEAGgDQAEgCADgDQgEAIADAJQACAKAKACQgIAEgHAEQgJAEgGAGIAAAAQgBABgBABAvCpkQABgBABAAQACgBACgBQgBAEgFgBgAvepKQgBgBAAgBQgCgCgBgCAvgpSQAEgDACAGAugpFQAIABAJABQADAAAEAAQAJgiAshEAvlo0QABARACASQACAUgEASQgDATgCATQgCATAAATQgBAUALAQQAAAEgBACQgBADgCADQgCAPgDAOQAAACgBADQgDAUgCATQgCASABATQAAAIABAIQAAACAAABQAAABAAAAQAAADAAACQABAAAAAAQAJAAAJAAQAKAAAJABQAJACAJAAQAIABAJAAQAKAAAKAAQAJABAKAAQABAAACAAAueozQgXAhgCAlQgCAlgEAlQAAAEgBAEQAQAeARAdQAJgHAQgOAv6l7QAMACALAEQgBADgBADAvYkpQgFgHgDgHQACAEACAEQAFACgBAEQACAEADAFQALATAGAEQgFgmADgoQADgiADgiAvqlSQAEANAGAOAt2jJQgBAAAAAAQgLAAgIgCQgJgCgKABQgJAAgIgBQgJgCgKABQgJABgKABQgJACgJABQAAACAAACQAAACgCABQgCAAgCABQgDgCgCgFQgEgIgDgGQgCACgCACQgGAFgGAJQgCACgBACAwhj1QAEACAFABQADACADgBQABgBAAgDQAHACAEAGQAAAFgBAFQAGADAFAFQgCABgBACQgFAEgFAEQABgJABgKAwhj1QADAEABAGQABAKgCAJQgCAKgHAHQgBABgBAAQgCABgCgDQgGgHABgKQABgIABgIQABgIAFgHQACABABAAQADABADABgAwTjIQgCAAgBAAQgIABgJABQgBAAgBAAAvxjoQAAABAAABQgEAEgDADQgGgIgIgGAvxjfQABgCABgCQgBgDAAgCQAAAAgBAAQABgCAAgDAvxjYQACACADADQAEAFACAFAvxjYQgBgCgCgBQACgCABgCQAAAEAAADgAwJjQQgCACgDACQgDACgCACAwKBHQACgHABgIQABgNABgLQABgSAAgRQABgTABgUQACgSgDgSQgDgTgGgTQgHgSgCgVQAGgQADgSQAAgBABgCQgBABgBAAQgFAEgFgDQAAgGAEgEAvqi1QABAFACAFQAAAEACAEQgOgFgSAMAvsjBQABAGABAGQACAFABAFQACAEABAEQACAEACAEQADAHACADQgFALAAAMQAAAQgCAQQgBARgBARQAAATAAASQAAATAEATQAEATADASQAAABAAACQAGACAFAGQALgLARgBQAFAAACAFQAEAJAHAGICBgKIABgKQAAgQgCgRQgBgCgBgDQgGgSgLgYQgPgjgRgjQgRgigJglQgEgSgFgRQgDgNgEgNQgCgHgCgHQgMgmADgoQACgpApAGQgKAAgEAVQgIAmAGAmQACAPADAPQADAPAEAOQACAIADAJQALAmAQAjQAPAhAQAiQAAAGABAGQAAgGAAgGQgBgHgBgIQgDgSgNgSQAAgGABgHQAEgTAIgSQAIgRABgUQAAgGAAgGQAAgLgBgMQgBgGAAgHQAAgLABgMQABgQgBgQQAAgBAAgCQgBgFAAgFAoJoMQgBAAgBAAQgPgBgOgCQgSgDgSgEQgRgEgSgDQgIgBgHgBAqAoMQAAABABAAQAJACAJACQAJABAKABQAJABAIACQAEABAEAAQAFAHgBAKQgCASgJAOQgLARgCATQgBAKgBAKQgBADgBADQAKgNANgMQABgBACgBQAPgNAKgRQAJgRATgYQgFASAKARQACAEAAAFAqAoMIAAABQgBAVADAQQgPAegNAiQgGAQgBATQgCAtgRAzQgFgJgEgJQgRgjgCgnQgCgkAAgmQAAgCAAgCQAAglAIgoQABAAABAAQAJACAIACQAEABAEABQADAMADAMQAEASADARQADANAFAMQACgJACgJQADgPAGgOQAFgPAIgNAp2nNQgEgKgDgLQAAgCgBgCAqvoUQAFABAFABQAKABAJACQAJABAJACAp2nNQAEAHAEAHQALARAFATQACAJABAIQABgDABgEQAAAAAAgBApZmRIAAAAIAAgBAq5ijQAAgOgCgPQAAgEgBgFQgCgMgBgOQAAgHAAgJQAEgOAEgUQABgHACgHQAFgLAIgJQAGgHAHgBQAEgBAGABQAOADAOAGQAEADAEADQALAKAHANQAJARAGASQADAKADAKIArAAQgFgTAAgUQAAgUANgOQAFgHAHgEApCmrQAAAKAAAIQABAggGAeQgBAEgBADQgHAcgGAPQAAgJgCgJQgIglgPgjQgQgjAJgnAnwk8QABAAACAAQADAAAEAAAsOniQAHAHAEAGQAIANAHAEQABgTADgTQADgLADgKQAEgPAIgNIAAAAArYobQgDAAgDAAArKoaQgFgCgGABQgBAAgCAAAsMoiQAAAUgBATQgBANAAAMQAAAGABAFQgBANACAQQACAQACAPQADAUAKASQACAFADAGQADAIADAJQgHgDgFABQgKADgKADQgRAFgOgEQAAgGABgJQAEgSABgTQABgTgCgUQgCgSgDgQQgLANgNADQgGgQgFgSAsyncQABgSABgSQABgOAAgPAsvnRQgDgDAAgGQAAgBAAgBAsvnRQAAgJgDgCAtfliQABAAABAAQAFACAGAGQAZAbAYAYIAAgBQgCgJgFgJQgCgEgCgDQAFgBAFgBQANgCANgCQAWgEgFATQAFgQACgRAsslBQgFgGAAgEQgBgFADgEAr4k1IAAAAQAAAAAAgBQABgBAAgBQAAABgBACQAPAKAKAPQALAPADATQACAMABALQABAHABAHQgBALAAALQAAAIABAJQACAUACATQACAKgCAIQAFgQAEgRQACgIAEgFQAEASAEATQADATAEASQABAHACABIAvCIIgmAEQgIgRgJgUQgPgigSgjQgNgXgFgVQAAgJgBgJQgDAAgBgCQAAgBAAgCQgPgDgNACQgRADgPAHQgGACgFAGQgDADgEACAr9kmQACgHADgHQAAAAAAgBAr2lqQAZgaALhFAr/jjQgBgEAAgFQgCgRABgRQABgMADgMQADgGACgJAr/jjQABAQAEAPQAAADABACIAsAAArOjjIgxAAAr5i/QADAPACAPQAEATAFASQACAFACAFArihbQgBAFAAAFQgBAUgEATQgEARgBAQQgCASgCATQgCARAAARQAAACgBACQAAABAAACQAAgCABgBQgCAOgBALQAAACgBADQAAACgBACQAAACAAACIAAAAQgOAJgJAIQAAAAABABQAIAIAKAHIAAAAIAAAAQAEgMAFgKQADgFADgEQAEABAEABQAEABAFACQAEABAEABQAGACAFABIAHgBIA3gHQgGgQgEgLIAlgBIAIAZIAJAAIBmgJIAhgCIAAAAIASgCArnhvQABAKAEAKAo8jBQgDgJgCgKQgCgHgCgHAo3iuQAAAAAAgBQgDgJgCgJIApAAQgBgPgGgSAoTjBIAAAAQACAWADASQABADAAADQADAQADAPQAEASACASQAAABABABQAGAkALAlQAHAWAFAaQACAMADANQAAABAAAAQABAEAFAVAqak/QgPANgEAUQgDATABATQAAALAAAKQAAAJgBAIQAAAJAAAJQAAAJABAIQABATAFASQAEARADAQQADgTAIgRQAHgOAGANQANAZAIgZQADgIAFgIQAJgLAHARQAHAUAPgPQADgDgBgEQgCgSAQgCAqdhYQgBAAAAAAQgCgGgBgHQAAgCgBgCAqdhYQAOgJAFgMQACgFAEADQAUAOAHgcQAMAFAXAAQABgYAXAAAoQAvQgCgLgDgKQgJgkAAgeQABgKgBgQQgBgSgDgSQgEgTgGgTQgBgCgBgCQgEgPgFgPAraohQAAADACADAtIooQAMAEANAHAoGBFQAAACABACQAFAJAHAOAoQAvQACAHAIAPIAoAAIAAAAApoBpIgiADIgBAAAqrCCQgCgCgCgCQgBgBAAAAQgHgGgLgBQgDgBgEgBAqvB+QADACABABQAOALgBARQAAAXgXgDQgOgDgFgMQgCgDgFgBQgLgDgKgDIgBAAIAAAAIAAAAIAAAAQABAFAAAGQABAJABAKQABAIABAIQABAIAAAHQAhgIAeAJQAEgBAFgBQABgCACgBQACgDACgBIAAgBQADgEAEAAQADgCAFAAQADAAACABQADACABAFQAAABAAABQgBAHgIAKQgCADgCACQgDACgCACQgFAEgHADQgEABgGAAQAIABAFABQAVADAXACQAKACAKAEQADABACACQABAAAAAAQACABABABQACACACABQACABABAAQACABACABQAEACADAEQgBADAAACQADAHADAHQAEAHAFAIQAKARAKARQALAQAIARQAJAQAGAFQAPAMALgUQACgDAAgFAq3CCQgMADABALQABAFADAEQgDAeAVgSQAFgEgCgHQgBgFgCgEApLDLQARgGASgDIAAAAAovDUQADgIAEgJQAAAAAAgBQADgGACgGQACgJADgHQAFgFAFABQAJACAJAJQADAEAAAFQgDAFgFAGQgGAGgFAGQgGAGgFAGQgBABAAABQAAAAABAAQARgCAQgEQAOgEAOAEAqVBRQgGgPgDgHAp4A3IAIAZAr0BCIABAAAsjgdQABAFAAAFQAAASACARQAAADAAADAshBWQAAAEgBAEQgCARAAAQQgBAEABADQAAAEACABQACAFABAFQgCAIAAAIQgBAMAKACQABgHAEgHQAAACAAACQAAAIAAAHQAAAJAAAIQgBADAAAEQAAABABABQgBABAAAAQAAgBAAgCQAAgEgBgDQgBgLgCgLAshBWQgOgDgSAIQgBABgCAAQgPAIgLAOQgMAQgGASQgGATgDATQgCAUADATQAEASAFAUQAAABAAAAQABASAEATQACALAFALQAAAAABABQADAHAEAIQAAACgBACQAAABgBACQAAABgBACQAAgBAAAAQABgBAAgBQABgBAAgBQgBAFgBAGAshBWQgOAFgKANQgMAPgIASQgHASgDATQgCASACARQADASAFAQQAFARADARIAAAAQgBATAAARAtEBcQgOgFgSgEQgSgEgPAHQgCABgBABQgGADgFAEQgKAHgHAKQgMAPgEAUQgEASAAATQABATAAASQgBASAFARQAGATAHARQAFAPAMAMQACACADADQAAABABABAr0BFQgCASgCANIAAAAQABACABACIAAAAQAEABAEABIABAAAsTCBQgDgEgDgGQgHgQgBgRAruCRQgBgGAAgGQgBgJgDgJAsFCSQACACACACQAFAEAFABQAFACAFgBQAAAFABAGQABATAGASQABAFAFAEAruCRQAAAAAAAAQgIgEgGgEAr3CbQAAACAAADQAAAIAAAIQgBALgBAEAsTClQAEgKAKgJQgIgIgGgJAsFCfQABAFAAAFQAAAKAAAKQAAAJAAAJQgBALgCAEArkCYIgBAAIAAAAArlCYQgGgCgDgFArtCcQAEgBAEgDAsfBBQgBAQgBAFQAGAWAMANAsfCVQAEgKAIgKAq+DjQgIABgIABQADAPAEAPQAGATAKAQQAJARAJAQQAJARALARQAKASAQgDQAEgHADgHQAAAAABgBQAIgQAIgQQAHgRAFgSQAEgSACgSAraDmQgDgFgBgJQgBgBAAgCArWDmQgCAAgCAAQACgBACgBQAAABAAABQAEgBAEAAAscDrQAMACAMACQAEAAAFAAQAPABANgGQADgCACgCAsUDTQAAAFAAAEQgBAJgHAGQADgLAFgNgArdEvQAHgVABgSArdEvQAFAMAEAMQAEATAGATQAFASADATQADAVAXgCQAPgCAEgMQAAgCgBgCQgCgDgDgDQgKgKgHgQQgHgRgHgTQgGgRgHgSQgGgSgIgSQAEgTgFgPAsMD+QAAATAFATAr8D9QABAPABAMArtD4QgDAQABAIAsXFSQgDgNgBgOQgBgSgDgSQgDgUAGgUAsXFSQgGAHgDAFQgFAIgFAJQgJARgMAQQgJAMgMALQgFAFgGADQABgHACgIQADgLgBgKQgCgNgBgOAtoFQQABgBAAgBQACgGACgFAtbFTIAAABQAAACgBACAtpFTQAAgBABgBQAAgBAAAAQAAACgBABQgEAJgEAJQgFAKgGAKQAAABgBAAQgEAIgEAGQABgFgBgG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QAFgSgDgTQgBgJgDgIAvZFNQAAgCgBgCQABABAAABQAAABAAABQACAHACAIQABAEABAFQgBACAAADQAAAAAAABQgBADAAADQgCgSgCgSgAvVFxQgGAhADAgQACAbAGAKQgeAXgLgXQAAgBAAgCQAAgFABgGQADguAAgpQAAgHACgzQAHgJAIgHAvBLVIgNgJIAAgkID3hbQALgNAHgOQAAgBABAAQAIgQgBgUQAPAKAQABAvOLaIANgFIB3BUIABAAIgBgZIAAgBIiEhnAtANTIiOhXIAAgiICOBdgAg4HDIsQFNIgCgBArXJNIArgRIDhhYQgDgQgIgOQgDgHgDgGQAAgEgEgDQAAgBAAAAQgFgIgGgGQgHgGgEgJAB2C8QAHgBAHADQASAIgHAWQgHAUgWgBQgKAAgIgFQAKAQAKAQQALAPAKARQAJAPAMAFQAAARAGAOQAHAPAFAPQAFAQAJAPQAJANAEAIQAKARAHARQAIASAIARQAEAJADADQgJAJgKAAQgKAAgJABQgNAAAFgMQgEgNgHgTQgFgRgOgMQAAgBABgCQgBgCgBgCQgCgEgBgGQgDgSgJgRQgDgHgDgGQAAgEgEgDQAAgBAAAAQgFgIgGgGQgHgGgEgJQAFACAEABQAGAAAHgDQAIgDAGgGAAMArIAAAAIABAAAgZAuQgBgGgBgGQgBgPACgOAAMArQgQACgVABIldAoAAMANQAAAAAAABAgnCiQgBAEgBAFQAAADACAAQADABAEgCQADgDADgEQACgDACgFQABgFgGAAQgIAAgEAJgAguCcQADAAABAAQABABgEAGQgFAFAAAJQAAAGADABIABAAAhzCpQAMgDANgEQASgGAWABQACAAACgBQACAAAGgEQACgDACgBIAAgBQADgEAEAAQADgCAFAAQADAAACABQADACAAAEQABABAAACQgBAJgHAJIAAAAQgFAEgFAEQgFAEgHADQgEABgCgBAgHCTQACABABACQAFAFAGAFQAGAGAFAGQAFAFAEAHQgBABAAAAQAAABgBACQgCAHAEAAQACAAABgCQAAgBABgBQAJAEAJAEQABAEADACQABABACABAAIDAQgBAAgBAAQgHgBgHAAQgPgCgOgCQgEgBgFgCAgOCOQAEADADACQANgCAQABQATgHARgIQAIgDAHgDQABgBAAAAAoHDBQAqADAjgIQAkgIAoACQAmACAogDQAkgCAmgMQAjgLAlgBQAnAAAlgJQAmgLAjgFQAkgEAkgRABXBpQABAAABAAQAHACAGAFAAqCZQACAFAAAFIAAAAQgEAEgDADQAAgCgBgCQgCgIAAgIQgGgCgGgCAA0CcQgBAAgCgBQgDgBgEgBQgEgCgEgBAA+CbQgFgBgFACQgEAEgEADAAbC4QADgIAHgGAApC0QAAACABABQACAIAFAIQAAAAAAAAAA6DLQgBgBgBgCQgDgJgDgJQgCgEgBgDQAFgEAFgCQAFgEADgEAApC0QAAAAABgBQACgCADgCAAfC/QAEgGAGgFABdCRQgBASAEAOQALAGALAFQgEABgDACQgTAJgJAXQAGAHAHAEABMCmQAFACAEADQAGADAFADAAgDJQAAAAgBAAQgCgCgDgBQgJgEgJgCQABASAAATQAAATgBATQAAAGAEADQgHAMgFANQgBACgBACQgIARgJARQgGAKAAADQAHgBAJAGQAFAEAEAFQgIAIgFAIQgFAIgEAIQgEAIgFAIQgEAIgCAJQgDAIgCAIQgEAPABARIAEACIABABIAAAZIsYFYAA4DPQAAAAAAAAIAAAAIAAAAQAAADAEACQAAgCgBgCQgBgCAAgDQAOAIALAMAAgDJQACABABABQACACACABQACABABAAQACABACABQAEACADAEQgBADAAACQgEAPgHAQQgHARgHARQgGAOgFANQgBAFgCAFQgGASgGARQAAAFgBAEAAgDJQgCASgEASQgFASgHARQgBACgBACABVEYQgBAGgCADQgKASgTAEQgTAFgSgEAB5FRQgGgFgJgQQgIgRgLgQQgBgCgBgBQgJgQgJgPQgJgPgGgOAhzCpIAAAAQAEASAHAQQAAACABABQALAPAKAOQgBAUAFARQAAABAAABQABACABACQAGAPAFAOQACAEABADQAGAPAJAKQABAAABABQAFAFABAFQgEAMgPACQgPABgGgIQgFgBABgFIAAAAQAFgTgFgTQgFgSgMgQIAAAAQgJgRgLgNQgBgRgGgTQgFgSgKgTAAAEtQgLgSABgUQAAgSABgSQAAgRABgTAgBFWQgDAEgCAFAgTFqQgEAFABADAgMF0QgCADgDACAgZFgQgDAMgCAJQgCAJgEAIQgEAIgEAIQgDAJgEAJQgCAEAAADQgGAGgFAKIAIADIADAAIgDABIAAgBAgNFbQACgEABgDAg+FbQgCAHAEAEAhEFYQAAAFAAAFAB3FbQACgCADgDQgCgCgBgDQAPAMALgUQACgDAAgFABMgDIBCgFAkQA1QgEAAgDAAQgCABgBAAIhiAIAkQA1IgKABAj+DHQAJgCAKgCQAHgBAIgCQAHgBAHgBQAEAAAEgBQARgDASgEQAGgCAGgCQAFgBAEgBQACgBACAAQAFgCAFgBQAGgBAHgCAlnDVQAFgBAFgBQATgEAUgBQATgBAUgDQAIgCAIgBIABAAAlnDVQADASAHARQAOAlgHAmQgDAMgDAFQgBABgBABQgIAHgKgCQgTgEgKgSQgJgQgHgSQgHgSgHgSQgHgTABgVQAGAAAHAAQAIABAJABQAUACAQgGIAAAAQAEAAAEAAgAleFWQgFADgFgFQgFgEgEgFIgBAAQgTgWgLggQgCgEgBgDAmTEMQAAABAAABQAAgBAAAAQAAAAAAgBQgJgagIgbAniFmQAIAMALAFQAAARAGAOQAHAPAFAPQAFAQAJAPQACACACADIDFhNICmA0AjcDAQgHAUgEASQgEASADAUQgNARgHAQQgIASgGATQgGAQADATQAAADABAEQgCAHgIADQgMAGgNgBQgXAAAJgMQACABADgDQACgEADgEQAIgMAFgNQAIgTAEgSQAEgTABgRQgBgBgCgGQARgOAEgSQAFgTAAgSAkqGEQgBgHAFgEAhvDhQABAHACAHAh4D5QASgBAIgIAkPEMQAMAFAMgDAkeF0QgEAIAEAHAnLHkIAggMAg4HDIAAAWIAAAIIsRFIAtAM3IMJlUIAKgEAgpHhIABAAIAAABAg4HZIALAGACoG+QAMAPARgQAgbAiIj1ATAmBAjIFngeAnjArIgtAEApfBpIg+jB");
	this.shape.setTransform(130.3,103.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC7102").s().p("AoaE9IAAgiICOBdIAAAcgAmWFQIiEhnID3hbIAsgRIDghXIAfgNIDFhMICnAzIAHADIAAACIsPFMgAkqjpIgCgPIgCgQIgCgTIAAgLIAAAAIAAAAIAVAGQAFABACADQAFAMAOADQAXADAAgXQABgQgNgLIgEgEIgCgBQgHgGgLgBIAAgCIA3gIIABAAIAigDIAKAAIBmgIIAggDIABAAIARgCIBQgGIFcgoIAngDIAAAAQAdgBASAGIADABQAMAGAHAJIABAAQAkAXgfASIgBAAQgEAAgEAEQgkARgkAEQgkAFgmALQglAJgnAAQglABgjALQgmAMgkACQgoADgmgCQgogCgjAIQgjAIgqgDIAIgLQAAgFgDgEQgIgIgKgDQgFgBgFAFQgDAHgCAJIgEANIgBAAQgSACgRAGIgMAAIgcADIgJgHIgFgBQgEAAgEACQgDABgDAEIgBAAIgEAEIgCADIgKACQgegJggAIg");
	this.shape_1.setTransform(86.7,148.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("Ag4AeIgBgEQADgTAIgQQAGgOAHANQAMAYAJgYQACgIAGgIQAHgLAHARQAIAUAPgPQACgDAAgEQgDgSAQgCIAKAeQgXAAgBAXQgYAAgLgFQgHAcgTgOQgEgDgCAFQgFAMgPAJIAAAAIgDgNg");
	this.shape_2.setTransform(68.7,90.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#029C01").s().p("ABsFeQgKgQgJgRIgTghQgJgRgGgSQgFgPgDgPIAQgCQARAfANAhQAOAlAXAbQAFAHAHgBIAAABIgIAOIgDAAQgOAAgJgQgAg0gkIghhGQgQgigJglIgJgiIgHgaIgFgPQgMglADgoQACgpApAGQgJgBgFAWQgIAlAGAnIAGAeIAGAdIAFARQALAlAQAjIAgBEIABAMIAAAKQAAASACARIgBABQgHgSgKgZg");
	this.shape_3.setTransform(53.7,104.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("ABjFhQgWgbgOgmQgNghgRgfIAOgBQAJAAAHgDIADgBIgBAEIgBACIgBAGIAAAIIAOACIArAFQAKACAKAEIAFADIACAAIgHAkQgFASgHARIgQAgIgBAAIgBAAQgGAAgFgFgAALBuIgIgCIgIgDIgIgCIgBAAIgIgCIAAAAIgBgEIAAgEIABgFIADgZIAAAAIAAgEIACgiIAEglQABgQAEgRQAEgTABgUIABgKQAFAVAMAXQASAjAPAiIARAlIAJAWIAKAbIg3AHIgGABIgMgDgAhEgsIgfhDQgQgjgLgmIgFgRIgHgdIgFgeQgGgmAIgmQAFgVAJAAIADAAQAEACAGAGIAxAzIABAKIAAADQABAQgBAQIgBAXIABANIABAXIAAAMQgBAUgIARQgIASgEATIgBANQANASADASIACAPg");
	this.shape_4.setTransform(56.7,104.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C08701").s().p("ABOFLQgSgDgKgSQgJgRgHgRIgOglQgHgSAAgWIAOABIAQA1IABACIACAHQALAgAUAWIAAAAIAJAJQAGAFAEgDQgFAFgIAAIgFgBgAgYBOIgGgYIgBgBIgEgZQgFgagHgXQgLgkgHgkIAAgCQgCgSgEgSIgGgfIgBgGQgEgSgBgWIAAAAQgCgPgFgTQgGgTABgTQAAgUAMgPQAGgGAGgEQAKgGAMAAQgRABgJARQgKARABAVQAAATAEAOIAHAiIACAJQAFATADATIAGAkQADATAFARQADAeAMAkQAIAXAGAaIAFAZIABACIAHAYIgRABg");
	this.shape_5.setTransform(85.6,105.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ABZFSIgBAAIgBgDIgVggIgUgfQAIAEAJABQAWABAHgVQAIgWgTgIQgHgDgHACIgggSIgJgEIACgEIACgBQAQgCARgEQANgDAOAEQACARAGAQQAGAQAFARQAFASADARQADAWgKAPQgGAIgHAAQgEAAgEgCgAhihsQAPgJAFgMQACgEAEADQATAOAHgdQAMAGAYAAQABgYAWgBIABAEQAGATAEAUQAEARABATQABAQgCAKQABAdAJAlIAFAUQACAIAHAPIACADIAMAYIhlAIgAhuidQgEgSgCgTIgBgRIABgSIAAgRIAAgVQAAgTADgTQADgUAPgOQAFgBAGACQAOADANAGIAIAGQAMAJAHAOQAJAQAFATIAGATIAEAOIAFAUIAEASIAAABQgPACADASQAAAEgCACQgPAPgIgTQgHgSgIAMQgGAHgCAJQgJAYgMgZQgHgNgGAOQgIASgDATIgIghg");
	this.shape_6.setTransform(73.2,105.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AD0101").s().p("AAnDUIgIgYIgIgZIguiJQgCgCgBgGIgHgkIgIglQAAgPgCgOIgBgJIgDgaIAAgQQAEgPAEgTIADgOQAFgLAIgKQAGgGAHgBQgPANgEAUQgDATABATIAAAVIgBARIAAASIABARQABATAFASIAHAgIABAEIADANIABgBIA9DCg");
	this.shape_7.setTransform(64.7,93);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#712D5F").s().p("AgEErIABgkIACglIAOACIACAAIAAAlIgBAmQAAAFAEADIgMAaQgKgSAAgUgAgUBGQgBgPACgPQACgQAHgRQAJgXgFgaQgHglgBgmIABgtIABgcQAEglgHgsIABgBIAFgKIAKgWIAFgLIAAAAIALgVQgDAoACAeIABADQAGAvgCAjIgCAHQgGAnAEAbIAAABQgCApgEAnQgDAlALAmIAAACIAAARIAAALIAAABIgmADIgBgMg");
	this.shape_8.setTransform(129.7,100.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C569AC").s().p("AghFuIALgbIAOgiQAHgQADgPQAGAOAJAPIASAfQgBAGgCADQgKASgTAEQgKADgKAAIgQgCgAgpFBIABgmIgBglQAJACAJAEIAFADIABAAIgGAkQgFASgHARIgCAEQgEgDAAgGgAAjDhIgJgFIAEgGIALgMIACgDQgBASAEAOIgLgGgAAADRIgHgCIgIgDIgMgEQATgHAQgIIAPgGIABAAIgFANIgHARQgFgBgFACIgCgBgAAMBnIgCgBQgSgHgcACIgBAAIAAgMIAAgRIABAAIgBgBQgLgnAEglQADgnACgpIAAgBQgEgaAGgnIACgHQADgkgHgvIAAgDQgCgdACgoQAMgZAIgZIAGACQAJADAIgCQABAGAGADQAFACADgBQgCALAEAHQgRAmgEAlQgCAmAFAmIACAOIADAbQAAAQgBARQgCAlADAlQAEAlANAwIABACQAGANACARQABANgBAQIgWgGg");
	this.shape_9.setTransform(135.3,98.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01029C").s().p("AAHExQgQgfgGgnQgFglgLgjQgCgJgBgVIgEhOIgBgfIAAgdIAAgPQABglgCglQgCgnADgnIACgYIACgaIAAAAIAAgDIACgVQACgZAAgZIAAgCIALgZQAAAlAFAkQAFAngGAnQgHAlgBAnQgBAmAHAkQAIAkgCAnQgBAnACAlQADAoAGAkIANBIQAIAjAXAKQgFACgFAAQgOAAgLgTg");
	this.shape_10.setTransform(148.6,103.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6666FF").s().p("AgKE5IgOhIQgHgkgCgoQgDglACgnQABgngHglQgIgjACgmQABgnAGglQAGgngEgnQgFglgBgkQAJgWAHgYIABAAQAPAOgIASQAJAOAJAHQgDgEAAgMQAagKgDgaQgBgLAFgOIAAAAQAQAqAEAnQADAmgKAkIgEAQIgGAZQgDASgCATQgEAmADAmQAEAmgCAhIAAABIgBAeIgCAzQgBAoADAlQACAaANARQgDAmALAkQALAkgaASIgKAFQgWgKgHgjg");
	this.shape_11.setTransform(150.8,99.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC33").s().p("ABLFHIgJgJIAAAAQgUgWgLggIgCgHIAAgBIgBgBIgQg1IAQACQAUACAQgGIABAAIAIgBQADATAHARQAOAkgIAnQgCALgDAFIgDADIgDABQgDAAgEgDgAgZA3IgBgCIgFgZQgGgbgIgWQgMgkgDgeQgFgRgDgTIgGgkQgDgTgFgTIgCgJIgHgiQgEgOAAgTQgBgVAKgRQAKgRAQgBIADAAIAIAAQAOABANAHQAMAPAGAUQACAYAHAWIABABQAEAOACASIAAAAIAEAgIAFAlQABAKADAGQAOAoADAgIAIBFIAAADIAGAaIADAMIADAMIhQAHIgHgYg");
	this.shape_12.setTransform(86.7,105.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006600").s().p("AFxDjIgBgdIAAAAIABgZQABgRADgRQAFggACgiQABgTALgdIAHACQAPAFAKAJQgHgNgGgRQAMADAEAKQADAGADAEIABgIIADgIQAEgNAHgJIAJABIARADIAMADQgIAYgMAZIgKAVIgBAAIABgLQAAgVgTgXQATAXAAAVIgBALIAAAAIgEALIgMAWIgFAKIAAAAIAAABIgPAiIgSAvIgKAdIAAAAQgJAYgDAaQgIgYgCgagAoLCHIgFgIQACgFgGgCIgDgHQgHgOgEgOIAGgdIACgFIABgGQgLgQABgUIACglIAFgmQAEgTgCgTIgDgjQAAAAABAAQAAgBABAAQAAAAAAABQABAAAAAAQAGAEADgEQAQADASgBIAZgBQgXAhgCAlQgCAlgEAkIAAAIIgHBEQgDAoAFAmQgGgEgLgUgAiQBtQgIglgPgjQgQgkAKglIAHANQALARAFATIADARIACgHIABgBQAJgOANgKIAAARQACAggHAeIgCAHQgHAbgGAQQAAgJgCgJgAkzAyQgKgRgDgUIgEgeQgCgQABgNIgBgLQAHAGAEAHQAIANAHAEQABgTADgTIAGgWQAEgOAIgNIAAAAIAGAAIAEgBQAFAAAFABQgIAoAAAmIAAADQgLBEgZAbIgFgMgAgrAGQgQgNABgTIAAgGQgBgEgCgEQgKgRAFgSIAJACIASAEQAKACAIAEQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAEgEAHgCQAIgDAJAAIAOAAIAAABQgQATgDANIgEAUIAAADIgFANQgCgDgIgFQgQAIgEANIgIgHgAHwgQIgTgBQgKAAgJgDIgDgBQAMgWATgFIAjgJIAbgGIgcAYQgOAMgGALIgCAAIgCAAgADsg7IgRgBQAFgMAPgNQAPgLARgHQASgHARgJQARgJAMgOQAMgOAQgKQAQgKASgHQAPABAZAHIAIAJQAFAHAIADQgJAEgIAHQgOAMgSAFIgiALIglAKQgTAFgSAIQgPAHgKAMQAKgMAPgHQASgIATgFIAlgKIAigLQASgFAOgMQAIgHAJgEIACABIAGADIgFgUIgCgMQACAIAGAFIAMALQAGAHAHAEIAHAEIgMALQgQANgTAGIghALQgRAHgSADIgkAHIglAHQgRADgSACIgFABQgPAFgMAKIgIAAgAAMhfIgSgDQgJgBgJgGQgDAIgGABQgMgEgNAAIgHAAQAHgNASgHIAkgPIAhgQIAkgPIAigNQAPgEAQgIIANAEIAOACIANAAIANABIAMABIAJAAIAIACIAGACIAEACIgDgCIgIgJIgDgEIABAAQARADANAGIAEACQgsAMgQAJIgOAHQgEgBgDABQgSAHgSAFIgJADIgaAJQgSAGgRAIQgQAIgJAPQgJAAgKgDgAkQiNQgCgFgHAAIgNAAIgDgRQgDgTAEgTQADgUANgOIAYgdQANgQAQAFIACACQAIAGAJAEIAGADQgWAXgSAeQgVAiAFAgIgOAAgAnrihQgTgFgUgBQgCgFgDADQAFgHAJgEIAPgIQAFACABgEIABgBQADACAEABQAGABAEgDQAGgHAHgGIANgMIAMgJQgbAugBAWIgTgFg");
	this.shape_13.setTransform(84.7,61.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E8E8E").s().p("Ag4AMIgTgCQgJAAgHgDQgKgEAJgDQAIgEAKgBIATgCIATgCIATgCQAJgBAJACQgCACgDAFIgGAOIgIAAIgTABIgTAAgAA+AJIgCgKIgCgEQAIgFAIABIATAFQAIACgHAEQgHAGgLAAIgKABIgEAAg");
	this.shape_14.setTransform(202.2,132.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5F5F5").s().p("AggA3QgIgHACgLQACgJgDgKQgCgJgKgCIgEABQgGAEgGACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgKgJgEQgJACAAALQAAALgJAEQgEACgCgEQgCgIAAgKIgBgSIgBgGQgEgMgFAMIAAAAQgBgLAFgGQAFgJAKAAIAUgDIATgDIASgCIAUgCIASgCIASgDIAMAAIgEAMIgRgBQgEAAgDACQgKgCgJACIgTACIgTACIgTACQgKABgIAEQgJAEAKADQAHADAJABIATABIATABIATgBIAIgBIALAAIARAAIATgBIAUgBIAFAAIAOAAQALAAAHgGQAHgFgIgDIgTgEQgIgCgIAFQgDgEgEgBIAIgMQAGAAAGABIATAFIASAHQAJAEACAKQABAGgEADIgGAEQgHAFgKABQgHABgGADQgIAFgIACQgJADgKgBQgLgBgEAHQgFAIgFgFQgIgJgJAHQgHAGAAALIAAATQgBALgKADIgFABQgGAAgEgFg");
	this.shape_15.setTransform(202.4,136.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgUA6QgKgBgIgEQgJgEgKgDIgTgDQgJgBgKADQgIADgEAGQgCgGAAgHQABgKgCgJIgEgTQgDgIACgKIABgSIAAgRIAAgBQAFgMAEAMIABAGIABATQAAAKACAIQACAEAEgCQAJgEAAgLQAAgLAJgDQAJAFAAAKQAAAAABABQAAAAAAAAQABABAAAAQABAAAAgBQAGgCAGgEIAEgBQAKACACAJQADAKgCAIQgCALAIAHQAGAHAJgDQAKgDABgLIAAgSQAAgLAHgGQAJgHAIAJQAFAFAFgIQAEgHALABQAKABAJgDQAIgDAIgFQAGgDAHgBQAKgBAHgFIAGgEIABASQAAAJgBAIQgCAJgBAKIgBASIgCATIgDALQgHADgJADIgTADQgJABgJgBIgTgFQgJgDgKAAQgLgBgHAGQgIAFgJAAIgBAAgAAXAPQgBALAJgDQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgIgGgFQgDgCAAgDIgCANg");
	this.shape_16.setTransform(202.2,139.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009966").s().p("AhjETIgrhCQgPgVAFgVQAKgogXgdIARAFQAHABAGAFIACACQAJAGAJgCIAEgCIAAAAIAGACIATABIATABIAFAAIgCAdIgFBEQgDALgEAJQgFAKAAAIQgBAegFAeQgBgUgLgRgAhdD0IAAgyQAAglgSgsQASAsAAAlIAAAygAgJEHQgGgMgCgMIgCgMQAJgSAKgPQAJgMAAgOIgBgKQgEgRgFgUQAFAUAEARIABAKQAAAOgJAMQgKAPgJASQgCgTAGgSQAFgTgEgTIgGggIAFAAIAOABIADABIATAAIARAAIAEAAQANAXgJASQgGAMgJAJQgLANgJAPQgLATgDAWQgCAMAAAJIgEgLgAB/DHQgbgeAFgrIADAAIAOACIADAAIATACIAGAAQADANgEAIQgIASAEAVQAGAcgRAYQAJgZgQgSgAB/CwQgGgNAAgSIABgRIgBARQAAASAGANgACXBeIgTgCIgTgCIgKAAQADgNAEgQQAGgSABgTQACgUgKgQQgKgRgNgPQgNgPgHgRIgBgDQgEAQgJAPQgLAQgCAUIgEAkIgDAbQgDASAEARIgFgBQgJAAgJgCIgRgDIgJgBQADgRgJgRQgHgMgDgNQgDgTAKgOQgCgTgJgSQgJgQAAgTQABgTgDgTQgEgUgJgRQgDgHABgHQACgSARgNIAIgGQALgJAJgKQAMgNALgIQgBgIACgHIABgDIAGgRIADgBIAPgHQAKgDAFAJIAAAAIgCABQgDgCgFADQgBAAAAABQgBAAAAAAQgBABAAAAQAAABgBAAIgEAIQgEAHAHACIAGACQAPAOAHATIAHAQQgJARgDAUQgCAOAAAOIAAAJIADAlQACAMAFANQgFgNgCgMIgDglIAAgJQAAgOACgOQADgUAJgRQAKgRAVgGQAOgFAPgCQABgDgCgHQAAAAABAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgEgEAAgGQAAgMAFgLIAAAAIACgFQACgEAIgBQAJgBAJACIAOAEIgDAGIgEABIgIABQgHgCgIACIgEABQgHABADALQACAJAFAJQAEAEAIAGIAQAKQAJAFAFAIQAEAJAJAEQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAGARgHASQgEALgCALQgDATAFASQAFASACATQABAUgIATQgHASgGARQgFASgCATIgDAdQgDATgHAKIgKgBgAB7BCIAAgBIADgMQAGgTAEgTQADgLAAgLIgBgPQgCgSgIgSIgLgfQgGgSgBgUIgBglQAAgRAIgQQAGgOAIgOQgIAOgGAOQgIAQAAARIABAlQABAUAGASIALAfQAIASACASIABAPQAAALgDALQgEATgGATIgDAMIAAABgAAEAWIgBAkIABgkIABgTIgBgTIAAgCQAAgTAHgRQAFgOACgPIABgGQAAgQgJgMQgKgRAAgRIAAgCQAAgTAGgTQAGgTANgPQgNAPgGATQgGATAAATIAAACQAAARAKARQAJAMAAAQIgBAGQgCAPgFAOQgHARAAATIAAACIABATIgBATgACBj1IAGgBIgGABgAhQBHIgTgDQgIgBgGgDIgbAEIgUAAIgFgOQgGgBAFgQQAOgkgQglQgPgkgMglQgMgjAMgmQAMglASgkQAKgJAHgRIACgBIAFgBIgFABIgCABIAAAAQgFgJAGgJIAHgIIAEgDQAKgDADAJQgLAAgCALIAAAFIAAACIABACIgGABQgGAXATALQAPAIAIAPIACAFQAIASAAAUIAAAkIAAABQgCAEADAEQAEAlAKAjQAKAmADAmQADAfgFAfIgLgBgAiZjSIADAgIAFAiIAIAlIAKAmIgKgmIgIglIgFgiIgDggQgCgSAAgSQAAASACASgAhfiTQgDgMgHgKQAHAKADAMgAhUkIIgBgFQgCgHAFgFQAFgGAGgEIADgCQAGgCAHACQgBADgCABIgCAAQgIABgEAIQgDAGgBAGIAAACIgCAIIAAAAQgDgBgDgFg");
	this.shape_17.setTransform(199.8,95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01891C").s().p("Ag5FIIgIgRIgBgBIAAgGQAAgjgKggQgLgkgHglQAHAlALAkQAKAgAAAjIAAAGIAAAAIgFgJIgihBQgRghgBgnIAAAAIAdAAIAdAAQAJAQANAQQgEgIgFgYIAcgBQgCAQAAASQAAAggGAfQgHAoAGApQADARgHARQgJgZgLgWgApNDhIgEgnIgBgSIAAgVIgBgOIgEgXQgDgTgKgPQgKgQgPgJIABgEQAFgQABgQIgFgRQAYgaAMhFQAAAmACAlQACAlAQAjIAJATIABAAIgEAOQgDATgFAPIABAQIADAaIABAJQABAOAAAPQgDAFgCAIQgEARgGAQQACgJgBgJgAghCGQgHgYgIgKIADgKQARgjADgmQAEgdgEgeQgCgZgLgTIARgBQAKgBAJACIASAEIATAEIASACIARACIABAAIAQACIARADIAKABQgHAJgEAOIgCAIIgCAIQgDgEgCgGQgFgKgLgDIgEgMIgDgKIADAKIAEAMQAGARAGANQgKgJgOgFIgHgCIgegKIgFgCQgOgHAAgSIAAgBIAAABQAAASAOAHQALAlgCAmQgDAlgNAjQgIATgFASgAg4CGQABgRAHgRQAIAKAHAYgAhgCGQgDgWgHgVQAHAVADAWIgbAAQAAgUACgVQAEgnAHgnQAHgjAPgpQALATgEAXQgGAigBAkQgBAnALAsIAAAAgAk2B9QgGgTgCgTIAAgSQADgngPgiQgEgMgCgMIABgMQAAgJgCgJQABgKADgJIAAgDIAFgUQACgOAQgSIAAgBIABAAIgBABQgHAPACATQADATAJARQADAGgBAHIAIgWQAFgPAOgIQAFAKADAMQAIAlgMAhQgNAkgIAlQgIAjgIAaIgDgHgAkrAdQAJgdAAgmIAAgEIAAAEQAAAmgJAdgAjvBlIgGgnIgEgRQgDgJgCgKIgCgVQgBgQABgQQACgWANgTIAPgXQgBgJAAgJQAFgCAQgMIAOACIATADIASADIAHABQgKAIgLAFIgBAAQgPAGgNAKIgDADQgLAJgHAIIgDgIQgDgJgBgJQABAJADAJIADAIQAHgIALgJIADgDQANgKAPgGQAGARAAATQAAATgJASIgQAhQgHAQgKAPQgKAQgHARQgHASgDASIgCAOQgCgIgCgKgAjjA0QgBgHAAgIQAAgHABgIQAEgSAJgQQAJgQADgSQACgLAAgKIgBgPIABAPQAAAKgCALQgDASgJAQQgJAQgEASQgBAIAAAHQAAAIABAHgAo6BFIgJgTQgQgjgCglQgCglAAgmIAAgDQgBgmAJgoIACABIARAEIAIABIAFAZIAIAjQADANAEAMIAFgSQADgPAFgPQAFgPAIgNQgIANgFAPQgFAPgDAPIgFASQgEgMgDgNIgIgjIgFgZIAKACIASADIASAEIAAAAQAAAVADAQQgPAfgOAiQgGAQgBATQgBArgSA0gABkA0IABAAIgBABIAAgBgAmXgSQgLgnAagnIAAAGQgBATARAOIAHAHQAFgOAPgIQAIAFACAEIACAFQACAJAAAJIgBAMQgDATgMAQQgKASgCATIgIAAIgDAAQgMAAgKAGQgBgigKgigAtDgyIABgIQAEglABglQACgmAXggIACgBIAOAAQgPAugCApQgBAoAVAkQAHANAAAPIgYATQgSgcgPgdgADZgQQgSgDgFgKQgFgHACgLIABAAQAJgDAJgBQAJgBAJADIAEABQAKACANgBIAAAAQgIAUgCAbQgHgNgVgDgAJ1gwQgIgDgJgCQgKgDgJgKQgHABgEAFQAAgKAHgFQAFgCACgEIAJgPIACgEIAKgLQAKgLAMgKQARgPAOgJIAEADIACACIAGAGIAGAGIAEAFIABABIgBgCIgCgFIgHgLQgFgIgDgJIgEgKIAFACIANAEIAdAHQAKACAKAGIABABIAFAGIADAGIACAEQAAABAAAAQABABAAAAQAAABABAAQAAAAAAAAQACgJAEgIQADgJAIgHIAOgNQgCAJACAFQADAGAEAFIASASQAIAHAKABIALAAIggAJQgSAFgTACQgTACgRAIQgRAIgPALIgfAWQgOAKgKALIgCABIgNgFgAiOhJQAEgUAGgSIAOADQAKACAIAEIAGACIgTANIgOALQgKAJgGAJIABgPgADmhNIgJgCIgQgFIgOgIQgFgFgHALQgEACAAADIgIABQAFgLAPgMIAcgYIgcAGIgiAJQgUAFgLAWIgQgEIgUgDIgRgCQACgGAGgHQANgPARgIQASgIASgGIAmgMIAlgOQATgHAIgPIAMACQAIADAIAFQAHAFAGAHIAKANQgBgCAEgEQADgEACgFQADgJgIgIQgHgHgEgJQgFgJgCgJIgDgJQAFgBADACIAFADQADACAEAAIANADIAOAEQAHABAFADIARAKQAIAFAFAHQAAAFgGAEQgQAKgOANQgPANgSAHQgRAHgUABIgkAEIgKACIAKgCIAkgEQAUgBARgHQASgHAPgNQAOgNAQgKQAGgEAAgFQAGAHADAIQgBAJgJAIQgOALgQAIIggASQgQAJgOAMQgOAOgIAQQgMgDgKgBgAqIhsQgEgHgHgGIAAgZQACgUgBgTQAaAFATABIABABQgIANgEAOIgFAWQgEATAAATQgHgEgIgNgApXhhIAAAAgAgnhrIgQgHIgMgGIgFgGIgCACIgEABIgKAAQALgKAPgFIAFgBQASgCARgDIAkgHIAkgHQATgDARgHIAhgLQATgGAPgNIAMgLIAIADQAHADAIABIATADIAIABQgSAAgRAIQgHADgIABQgTAFgRAJIgiASQgRAKgRAIIgjARQgSAJgSgFQgLAAgGAMIgMgEgAiFh9IgTgBIgSgCIgRgDIgHgBIAigSIAfgQQAQgJASgEQARgEAQgIIAhgQIAdgQQAOgHASgSIABgBQANAFAJgDIAFAAIAEAAQgTAHgQAKQgPAKgMAOQgMAOgQAJQgRAJgSAHQgSAHgOALQgQANgFAMIgTgBgAoai+IgcgJQgDgEAAgKIAAgGQABgSADgSQADgSAMgQQAJgNAPgHQgPAHgJANQgMAQgDASQgDASgBASIAAAGQAAAKADAEIgKgDIgQgDQgEggAUgiQATgeAVgXIAKAGIARAJIAPAKIAQAKIABAAQgLAZgDAKQgGASgIASQgGANgDAOIgCAIQgLgCgLgFgAoCi/IAAAAgAn5jaQAIgSAGgSQADgKALgZQAIAGAEAIIAAABIABAEIgBADIABgDIgBgEIAAgLIABgTIAAgBIAhgbQAFgFAHgCQgHACgFAFIghAbIAAgRIgCgTIgCgLIAPAAQAKAAAJACQAJADAJAAQAJABAHADIAIASIAHASIABAEIAIgQQADgJAGgIIAFgHIAHAEQAIAEAJACQAKACAJAGIADADQgSABgRAIQgQAIgLAMIgCAGQgDAUgVAHQgRAFgPAJQgQAJgPALQgPALgQAJQgJAGgHAJQADgOAGgNgAqQjYIAAgFIADgnIADgnQABgSgBgRIgCgoQAJADAJABIAUABIASAAQAKAAAJACIAGADIACALQADAJAGAFQgQgFgOAQIgYAdQgMAOgEAUQgDATADATIADARQgNgBgQgFgAsVjbIgRgBQACgWAaguIADgCQAHgGAJgFIAPgKIAQgJQgsBDgKAiIgHAAg");
	this.shape_18.setTransform(118.1,67.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#015F3A").s().p("AqVImQADgLgBgLIgDgaIAAgNIAAAAIABgMIABgEIAAAAIgHgQIAAAAQgFgMgDgLQgEgTgBgRIAAgBIgJgnQgDgTACgTQADgTAGgTQAGgTAMgPQALgOAQgIIACgBQASgIAOADQgOAFgKAMQgMAQgIASQgHASgDATIgBARIABASQADARAFARQAFARADAQIAAABIgBAkIABgkIAAgBQgDgQgFgRQgFgRgDgRIgBgSIABgRQADgTAHgSQAIgSAMgQQAKgMAOgFIgBAIIgCAhIAAAGQAAAFACABIAEAKQgDAIAAAIQgBAMAKACIAEAWIABAGIgBAEIgIAXQgGAVADATQADASABATQABAOADANQgGAGgDAFIgKARQgJARgMAQQgJANgMAKQgFAGgGADIADgPgAsHIIIgEgYIgBgFIgCgKIgDgPIgBgBIAAgCIgGgTIgEgOIgBgDQgGgRgDgRQgDgTgGgTQgHgSgDgSQgDgTAGgRQAGgSAJgQQAIgOAOgGIAGgCQATgFATABQANAAAMAGQgJAHgIAJQgMAQgEATQgEATAAATIABAlQgBASAFARQAGASAHASQAGAPALAMIAAAAQgCADgBAGQgFAbgNAZQgIANgJANQgGAIgHAGIgGgigAr7HQQAAAMgBAJQABgJAAgMIAAgDQAAgSgFgRIgKgmQgGgSAAgSIgBgaIAAgNQABgPADgPIAJgiIgJAiQgDAPgBAPIAAANIABAaQAAASAGASIAKAmQAFARAAASIAAADgAtaGjIABgnQABgUgIgRQgJgRgFgTQgFgUAJgRQAIgPAEgQIABgEQACgLAIADIAKACIAKABIAAAAIAAAAIALgBIAAAAIgKATIgKAVIgPAkQgGARAEATQAFASAHASIAGARQgFARgOAOIAAgGgANKEhQgCgdAAgcIAAgSQAAgTAKgNQgKANAAATIAAASQAAAcACAdQgIgPgKgOIAEhEIACgdIANAAIAQACIANABIAHAgQAEATgGASQgFATACATQgNAcgFAbQgEgUgKgTgAs/DmIgKgBQAHgMAKgLIAGgHQAGgHAJgBQAJgCAIADQAGADAFAGIgEAEIgCADIgEAHQgSgPgMAUIgFAJIAAAAIgLABIAAAAIAAAAgApaDcIAAAAgANjB7IgRgDIgSgBIgIgBQAFgfgDgfQgEgogKgkQgJgkgEglIAAgBIgCgIQABgRAAgSQgBgUgHgSIgDgGIAHgIQAHgGAIgDQAKgEgBgLIgDAAIABgHIAGACQgCAJAHAIIAHAHIAOAMQAHAGADALIgIAGQgRAMgDASQgBAHAEAHQAJASADAUQADASAAAUQgBASAJARQAKAQACATQgLAQAEASQADANAGAMQAKASgDARIgKgCgAMvivIgDATIgCALIgDATIgCATIACgTIADgTIACgLIADgTIACgOIgCAOgAALg+QgJgPgEgPIAAAAQgKgsABgnQAAgkAGgjQAFgXgMgTQgIgOgRgMIAUgNIALAHQAIAFADAIIALgCIAGgBQAIAbgBAXQAAAQgDAOQgGATAAARQABANADAMQgDgMgBgNQAAgRAGgTQADgOAAgQQABgXgIgbIANgCIADgBQAKATADAZQADAegDAeQgEAmgQAjIgEAKQgHARAAARQgBAPAFAOIAAABQAEAYAFAIQgNgQgJgQgAFdinIgBgYQgDgmgNgtIAAAAIAHgBQAOgBANADIgBAIQAAAPALAKIAAABQgHAYgJAWIgLAagAGAjOQAIgTgPgOIgBgBQgLgKAAgPIABgIIAJACQARAGARABQgHALgBAMQAAAGACAHQgIAMAAAFQAAgFAIgMQgCgHAAgGQABgMAHgLIABAAIARABQgFAPABALQADAagbAKQAAALADAFQgJgIgJgNgAH2jNQAEgOgJgJQgOgOAEgQIAlABIAiACQAAAGgKAFQAAATgWAEQgFAHgGADQgKAFABALQgFgEABgGgAKgjdIgDgRQgCgJgHgGIAMABIAUACIAOACIgDAFQgIAKgHAKIgKARQgBAEgDAAQAAgKgCgJgArFkLQgVgkACgoQABgpAQguQALAAAMACIAmAHIAJADQgCAIgBANQgBAZgGAWIgEANQgLAjgUAiQgMATgDAKQAAgPgIgNgAmXkVQgFgUgLgRIgHgNQgFgKgDgLIgBgFQgDgQABgVIABAAIASAEIATADIARACIAIACQAEAGAAAHIAAAEQgCARgJAPQgLAQgCAUIgCAUIgBAGIgBAAIAAABIgCAHIgDgRgAmRkMIABgGIACgUQACgUALgQQAJgPACgRIAAgEQAAgHgEgGIAKABIASAEIARAFIAKADQgTAXgJARQgKARgPANIgDADQgNALgJAOIAAAAgAFukRIAAAAgAjjkhQgJgRgCgTQgDgSAIgQIAAgBIAFABIATAAIAUAAIARABQAJABAJACQAJADAKABIAFABQgQANgEACQgJAEgKABQgPACgNAHIgBAAQgNAIgGAPIgHAWQAAgHgDgGgAHskZQAFgXAQgNQAPgMASgEQAUgEATgFQASgGARgIQAPgHAOgMIABACIAJAMIAEAHIAEAHIACAHIACAEIAGgOIAFgTQABgJAAgJIgBgJQACgCAHABQALABAMADIAWAEQAGACAFAEQgOAJgSAPQgMAKgKALIgJALIgDAEIghAJIgBgDQgDgEgHAAQgKABgKADQgJACgDAFIgBABIAHAKIABABIgfANIgIgCIgEAAIgKABQgTAFgTAAIgHAAIgWAAgAF0khIgkgJIgHgCQAHgQAOgOQAOgMAQgJIAggSQAQgIAOgLQAKgIABgJIADAKIABAEIACAHIAGgQIAEgMIAogNIAFAAIAOABQAIgBAIABIAKACIARAFIASAEIAAABIgEAAIgEAAIAAAAIAAAAQgNAAgMACQgTAEgRAFQgSAGgNAOQgFAEgCAHQgEALgKAHQgRALgPAMIgPAOQgIAIgCAPIgBAGIABgGQACgPAIgIIAPgOQAPgMARgLQAKgHAEgLQACgHAFgEQANgOASgGQARgFATgEQAMgCANAAIAAAAIAAAAIAEAAIAEAAIABAAIAPAFQAOAGALAIIACACQgRAIgUAFQgRAFgRAKIgfAUIghAVQgQAKgTAHQgTAGgMANIgVAAIgEAAQgRAAgRgDgAGKk+QgUADgLAOQALgOAUgDQARgCAAgMIAAgDIgBgHQAAgPAOgMQAOgNATgJQgTAJgOANQgOAMAAAPIABAHIAAADQAAAMgRACgAqLleQAGgWABgZQABgNACgIQAMADAOAIIgCAdIgCAkIAAACQAAAGADADQgLAMgNAEIgLgjgAqLleIAAAAgAjploIAAAAIAAABIAAgBgAh/lqIgSgEIgSgEIgTgEIgSgDIgTgFIgGgBQAJgPAQgIQARgIASgGIAagJQASgCAPgIIATgFIAOgHQAQgJAsgMQAOAIAJAQQADAGACABQAAgMADgLQADgTALgNIACgCQAQAJAUACQATACASAIIACACQgSASgOAHIgeAQIghAQQgPAIgRAEQgSAEgQAJIggAQIgiASIgJgDgAjplogAl6l7IAAAAgAlEmHIgdgCQgSgDgSgFQgRgEgSgCIgPgDIABgIQAIgJAJgGQAQgJAOgLQAPgLARgJQAPgJARgFQAUgHADgUIACgGQAMgMAQgIQARgIASgBQAEAEADAFIALAcQACADADADQgNARgSAJQgRAJgPALIgfAUQgRAKgUAEQgUAEgGASQAGgSAUgEQAUgEARgKIAfgUQAPgLARgJQASgJANgRIAEADIAHAEIAJAGQAEACACAEIADAEQADgHAGgIIAMgOQgBAEACAEQACAFAFADIANAHIAOAGIAFABQgQAIgPAEIgiANIgkAPIgiAQIgkAPQgSAHgHANIgCAAgAp9m6IgPgCQAEgkAigfIAAAAIgBAUQgCATABAUIAAANIgVgDgAqMm8IgWgBIgfAAQAJgjAshDIABgBIARgJIANgGIADgBQgBASADAQIABAGQgCAHADAGQgiAfgEAkIAAAAg");
	this.shape_19.setTransform(110.4,90.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B4301").s().p("AsdMXIMJlTIsJFTIiOhdIANgEIB3BUIAAAAIAAgZIACAAIMQlNIAAAWIAAAIIABACIAJgEIAFACIABAAIAAAZIsYFYgAsnMKIMSlIgAsnMKIh3hUIgNgJIAAgkICEBmIAAACIAAAZgAsnLxgALtEAQACgFAEgCQADgDAFABIAQAAIAEgMIACgEIAHgTIAHgSQAFgJAIgGQAIgGAHAJQAFAHgDAJQgDAKgEAIIgIASIgCADIgIAMQAFABACADIACAFIACALIgFgBIgTABIgUACIgRAAIgLAAIAGgPgAoSDpIAAAAIgBAAIgCgCQgDgCgBgEIgBgBQgEgHgDgIIgBgDQgFAEgEAGIgCADQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQgEAAACgIIABgCIAAgBQAEgJAHgGIAGgGIAJgHIABgBIAFAAIABAAIAAAAIABAAIACAAIADAAIACABIgCAFQgDAEgFADIgKAGIACAHIAHASIABAEIACAFIgDgBgAq8C5IAAgDQAhgIAdAJIAKgDIgBADIgCADIgBABIgCADIgEACQgHACgJABIgOABIgPACIgIABIgBgCIgDACQgEgFgBgJgAomC/QgCgHgBgIIAGACIADABIgDgBIgGgCIAAgEQASgGASgDIAAABIgHARIgCAAIgBAAIAAAAIgBAAIgFAAIgBABIgDgBIgHgCQACAFgBAFIAAAAIgGAGIgBgEgAn6C6IAKgNIALgMQAqAEAjgIQAlgJAnACQAmADAogDQAlgDAlgMQAjgLAlAAQAnAAAlgKQAmgKAkgFQAkgFAkgRQgEAHgBAJIgBAAIgPAHQgRAIgUAHQgPgCgOADIgHgFIgGgCQgEAAgEACQgDABgDAEIAAAAIgEAEQgFAEgDABIgEABQgVgCgTAGIgZAHIgMAEIgKACIgEABIgJADIgNADIgjAIIgHABIgOACIgQADIgTADIAAAAIgRADQgTAEgUABQgTABgUAEIgJABIgIAAIgBABQgQAGgUgCIgQgCIgOgBIgJAAQgUAAgSgBQgOgEgNADQgRAEgQADgABbCwIAAAAIgBAAIgCgCQgDgCgBgEIgBgBQgEgHgDgIIgBgDQgFAEgEAGIgCADQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQgEAAACgIIABgCIAAgBQAEgJAHgGIgBgEQgCgHgBgJIAJAEQACAFgBAFIAAAAIAJgHQAEgCAGABIADAAIACABIgCAFQgDAEgFADIgKAHIgGAEIgBABIABgBIAGgEIACAGIAHASIABAEIACAFIABADQgEgBAAgDgABICKIAGgGIgGAGgAopCwIAAAAgAr/CGQABgIACgIQAEgKAIgKIgGgKQgIgQAAgRQAGAVAMAOIAAAAQAIAJALAHQgLgHgIgJIAAAAQAJgJAOgIIAAgBIACABIAAAAIAIABIAAAAIgFAKQgFAKgEAMIAAAAIAAAAIANAHIABABQADAFAGACQgEADgEABQgFAAgFgBQgFgCgFgEIgFgEQgIgHgFgJQAFAJAIAHQgJAJgFALQgDAHgBAHQgKgCAAgMgAB7BKIAAgBQAfgSglgWIAAgBQgHgJgNgFIAVAFIANAEQAVAHgCAXQgCAPgLAIQgHgFgHgBgAPwAmIgBgDIgGgMQgEgIgHgGQgHgFgJgEIABAAIAEgDIACgCIAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIgEADIgBAAQgGAFgFAHQgGAIABALQgJAAgEgGIgBgDIAAgBQgDgHADgHQAEgJAIgFIAGgDQgCgFgCgBQgDgBgBgCIgCgGIAAgBQABgCAFgBIgBAFQADAHAIADIgGAEIAGgEIAEgDQAIgGAJgCIAGgCQAHAAgEAIIgBACQgCAEgFACIgJAGIAaAUQAIAHgBAHIgCAFIgEAEIAAAAgAHRgcQgIAQgGgDQgCgBgDgGIACgIIAAAAQADgJAFgGIACgCIgBgJIAAgHIAHALIAAAAQALgIAEABIAAABIAAAAIAHABIgHAGQgFAFgEAGIAGAJIABACIADAGIAAAJQgIgEgHgKgAHKgvIAGgFIgGAFgAHdjlQgCgIgEgFIgEAGIgHAJIgJAKQgCgFAAgEQAAgHAEgGIAIgKIACgCIgCgBQgEgEAAgEIAAgBIABAAIADAAIAHAGQAGgFAHgCIABAAIAAAAQAFACgGAEIgHAKIAFAIIADAHQACAHgGAMQAAgKgBgHgAv1jdQABgGAEgEIAFgFIAFgDIAKgJIACgCQgEgFgGgDIABgLIAOAOIAGgGIABgCIAAgFIABAAIgBAFIABAAIAAAEIgCAFIgCADIADADIAEAGQAFAEABAFIABAFQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgFABQgCgCgDgEIgGgOIgFAEQgGAFgFAIIgEAFIgBABQgDACgDAAIgFgBgAOol8IABgFQACgDAEgCIABgBIAFgDIgDgDIgEgGIgCgHIgBgDQgBgGAGgGIAFgEIgDAPIABACIAAABQAHAHAEABIANgMQAIgHAFAEQABAAAAAAQABABAAAAQAAAAgBABQAAAAgBABQAAAHgJADQgHADgFAEIAFADIAEAAQAJAAAFAFIACADQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgBABQgIAEgKgEQgIgCgHgFQgGACgDAEIgBACIgCAEQgEgBgBgCgAHYmhIgHgIIgEgEIAAAAIgKgIIAAgDIgBgCQAGABAEADIAHAHIACACIAFAGIACAEQAEAGAAAHIgIgLgAHCmjQADgEAIgGIAAAAIAEAEIgKAHIgCABIgHAEIAEgGgAHVmtIgCgCQADgGAFgCIADACQgCAFgEABIgDACIAAAAgAPnoJIgGgHIgIgGQgHgEgIgBIAAgBIALgKQAMAHAHANIACAFQAAADgBAEIAAADIgCgGgAOuoXIgBgEIANgKIAGgGIAGgGIABgCIAMgPQAGgIAJABIAAAAIABAAIAAABIAAAAQAFABAAAFQABAGgEAFIgFAGIgIAIIgDADIgLAKIgBABIgPALIgKAGQAAgGgCgHgAOzo5QgGgHgGgDQgFgBACgFIAMAHIAPAKIAHAHIgGAGIgNgOgAvopWIAGABQAIgFAHgHIAOgMIADAFQgIAEgFAGIgOAOIgCABIgCABIgEABQgFAAACgJgAvApTQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAABgBAAQADgEAAgGQAAgGgCgFIgDgFIgBgCQgEgFgGgDQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgCAAIgCgBIgCAAQAFgIALAIQAFAFAFAFIACAEIABABIgBgBIgCgEIACgCIAAgBQAEgCABAFIgEAFQAFAIABAIQAAAFgBACQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIgGgCgAsSrZQgEAAgDgFQgBgDACgDQAEgFAHgFQAHgEAHgGIgSAGQgIgDALgFIAEgCIAEgCQAKgEAJgHQgFgBgFgEIgBgBQgGgHgIgEIgDgBQgHgEgFgGIgDgFQgBgFAIgDIALAHIAEACIABABQAJAFAEAIIACADIAFAIIgFgIIABAAIAKgNQADgDACgDIAAgGIACABQABABAAAAQABABAAAAQAAABAAAAQABABAAABIAAAEIAAABQgCAGgEAFIgDADIgHAIIAAAAIAEAFQADgDADgEIABgDIAAgCQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAMgBgIAJQABAIgCAHIgCAFQgDAGgEAFQgHAHgIAFIgPALIgFADIgDABIgBgBgArisRIgNAPQgFAHgJADIgCAAIACAAQAJgDAFgHIANgPIABgBIgBABgArzsJIAEgCIgEACgAr+sPIABABQAFAEAFABQgJAHgKAEIAIgRg");
	this.shape_20.setTransform(126.9,106.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8BF01").s().p("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AQgHgBACgRIAAgBIgEgJIAAgBQAAgKALgDQgLADAAAKIAAABIAEAJIAAABQgCARAHABIABAAIABgBgADFKBIgLggQgFgRgOgMIABgDIABABIAAAAQAGAGAGAAIAAAAIABAAQAGgBAHgGIAAAAIABgBIAAAAIABgBIgBABIAAAAIgBABIAAAAQgHAGgGABIgBAAIAAAAQgGAAgGgGIAAAAIgBgBIgCgEIgDgKQgDgTgJgQIgGgNQAAgFgEgCIAAgBQgFgIgGgGQgHgHgEgJQAFADAEABIABAAIABAAIAAAAIABAAIADgBIAHgCIAAAAQAIgDAGgGQgGAGgIADIAAAAIgHACIgDABIgBAAIAAAAIgBAAIgBAAQgEgBgFgDIAFgEIgDgFIAAABIABAAQAFADAEAAIABABIABgBQAHAAAGgLIABAAIAAAAIAAgBQACgDAAgDIAAgCIAAACQAAADgCADIAAABIAAAAIgBAAQgGALgHAAIgBABIgBgBQgEAAgFgDIgBAAIAAgBQgGgFgJgQQgIgRgLgRIgCgCIgSgfQgJgPgGgOIABgFQgDgEgEgCIgEgCIgDgBIgEgDIgDgCIgBgBIgFgCQgJgEgJgCIgCAAIgOgCIgdgDIgJgDIABAAIACAAIABAAIACgBQAHgCAFgEIAKgIIAAAAQAHgJABgJIgBgDQAAgEgDgCIAHAFQANgCAQABIAMAEQAAAIACAHIABAFQgHAGgDAIQgEgHgFgFIgLgMIgLgLIgDgCIADACIALALIALAMQAFAFAEAHIgBABIgBADQgCAHAEAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIABgDIASAJQABAEADACIADACIAAAAQAAADAEABIgBgDIgBgFQAOAIALAMQgLgMgOgIIgCgDIgGgTIgDgGIAKgGQAFgEADgEIALAFIAJAFIALAFIAWAMQAHgBAHADQASAHgHAWQgHAVgWgBQgKgBgIgEQgHgEgGgHQAJgXATgKIAHgCIgHACQgTAKgJAXQAGAHAHAEIAUAfIAVAhQAJAOAMAGQAAARAGAOQAHAPAFAPQAFAQAJAOIANAWQAKARAHARIAQAjQAEAJADADQgJAJgKAAIgTABIgBAAQgMAAAFgMgAnWJIIgGgMQAAgFgEgDIAAAAQgFgIgGgGQgHgHgEgIQAFACAEAAIABABIABAAIAAAAIABAAIADgBIAHgCIAAAAQAIgDAGgGQgGAGgIADIAAAAIgHACIgDABIgBAAIAAAAIgBAAIgBgBQgEAAgFgCIAFgFIgDgFIAAAAIABABQAFADAEAAIABABIAAgBQAIAAAHgMQACgDAAgDIAAgCIAAACQAAADgCADQgHAMgIAAIAAABIgBgBQgEAAgFgDIgBgBIAAAAQgGgFgJgRQgIgQgLgQIgUgiIgJgQIANgVQAGAFAGAGQgGgGgGgFQgGgFgHgEIgCgEIgGgSIgDgGIAKgGQAFgEADgEIALAFIAJAEIAhASIgHACQgTAKgJAXQAJgXATgKIAHgCQAHgCAHADQASAJgHAWQgHAUgWgBQgKgBgIgEQgHgEgGgHQAGAHAHAEIAUAgIAVAfIACAEQAIAMALAFQAAARAGAOQAHAPAFAOQAFARAJAPIAEAFIggAMQgDgQgIgPgAv5JaIAAgDIABgLQADguAAgpIACg6IAPgQIAFAOIAFATIABAEIAEAkQgGAgADAhQACAbAGAKQgPALgKAAQgKAAgGgLgAg4JcIAAgWIADgBIgDAAIgIgDQAFgKAGgGIACgHIAHgSIAIgQQAEgIACgJIAFgVQAAgEAGgKIARghIACgEIAMgaIACgEQAHgRAFgSIAGgjIADACIAEADIADABIAEACQAEACADAEIgBAFQgEAPgHAQIgOAiIgLAbIgDAKIgMAjQAAAEgBAEQgEgFgFgDIgBAAQgFgEgFgBIgDAAIAAAAIgCAAIACAAIAAAAIADAAQAFABAFAEIABAAQAFADAEAFQgIAJgFAIIgJAQIgJAQQgEAIgCAJIgFAQQgEAPABARgAgRH8IAFgGIgFAGgAgWH1IAAgBQAAgDADgFQgDAFAAADIAAABgAgGHiQACgFADgEQgDAEgCAFgAgNHdIADgGIgDAGgAudJHQgbAAAJgQIAEgEQACgMAEgKIAMgkIAMghIADgBIADAMQACANAAAQQABAFgBAGIAIgOIABgBIALgUIAIgSIABgDIABgCIAEgLIABABIAHAPIgBAEIgBACIgBACIAAACIgCAGIgHAYQgHASgIASQgEAHgBAGQAAAEABAEQgCAIgIADQgLAFgMAAIgCAAgAOwIYIgRgIQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBABAAIABgRIADgTIABgUIACgTIABgRQABgKgBgJIgDgTQgDgKABgJIAAAAQgEgFAAgFQgBgMAEgJQAEgMgGgJQgEgFgBgHIgBgMIgBgKIAAAAIAAgEIgCgBIAAAAQgCgGACgIIADAEIADABIARAFIABAAIAKACIABAAIAAAAIAFAAIABAAQAIgCAHgFQgHAFgIACIgBAAIgFAAIAAAAIgBAAIgKgCIgBAAIgRgFIgDgBIgDgEQgDgDACgGQADgIABgKIACgSIABgPIAAgPIAAgDQAAgLAGgIQAFgGAGgGQAJAEAGAFQAHAGAFAJIAFALIABADIACAMIgBATQgBAIACAJIAEAVIgCACIgCADQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIgCAFIgCAEIACgBQABAIAEAGQAFAHAAAJQAAAJgFAJIgEAJIgBAFIgBADIgBAIIAAASIAAATIABASQABAJADAJIAGASIADAIQgDAIADAIIAFASIAFATIgBAAIAAAAIAAAAIgBAAIAAAAIgBAAIgCgBIgCgDIgKgNIAKANIACADIACABIABAAIAAAAIABAAIAAAAIAAAAIABAAQACAJgEAKQgGABgHADQgJAEgJACIgFAAQgFAAgGgCgAPIHkIACASIADARIgDgRIgCgSIgBgPIABAPgAO8HhIADASQABAKADAJQgDgJgBgKIgDgSIgDgPIADAPgAO1H8IAAAAIAAAAQACgKAAgJQAAAJgCAKIAAAAIAAAAIgCAHIAAAAIAAAAIAAgBIAAABIAAAAIAAAAIACgHgAOrFLIAAgCIAAgIIAAgOIAAAOIAAAIIAAACgAOzFIIgBgLIAAgIIAAAIIABALgAO/FBIABgMIgBAMgAO5EMIgBgLIABgGIAAgRIAAARIgBAGIABALgAOoEIIAAgIIAAgKIgDgPIADAPIAAAKIAAAIgAn2IXIAAAAgAkvIOQgXAAAJgNQABABAAAAQABAAAAAAQABAAAAgBQABAAABgBIAFgJQAIgMAFgNQAIgSAEgTQAEgSABgRIgDgHQARgOAEgTQAFgSAAgSIATgEIAPgDQgHAUgEARQgEATADAUQgNARgHAQIgOAkQgGARADATIABAHQgCAHgIADQgLAFgMAAIgCAAgAkqIHIgBgCQAAgGAFgDQgFADAAAGIABACgAkeIGQgCgEAAgEQAAgDACgEQgCAEAAADQAAAEACAEgA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ACIACANIADAKIACAIIgJgBIAAAAIgBAAQgIAAgKAFIAAAAIgCABIgCACIACgCIACgBIAAAAQAKgFAIAAIABAAIAAAAIAJABIABAAIAEAIIAFAKQgFALAAALIgCAgIgCAiIAAAlQAAAUAEATIAHAkIAAADQgIgDgJACQgJACgGAGIgGAHIgBAAgAPpDCQgJgDgNABQABgIgHgHIgagVIAJgGQAEgCADgEQALABAJgCIATgDIATgEIAEgBQgJAFgEAIIgGAOQgBAGAAAGIAAAHQACAKAFAAIABAAIAAAAIABAAIACAAIADgCQAHgGACgJIABgHQAAgGgEgFIAAgBIgBgBIAAAAIgDgCIgBgBIAAAAQgCABgBAFIgBABIAAABIgCATIACgTIAAgBIABgBQABgFACgBIAAAAIABABIADACIAAAAIABABIAAABQAEAFAAAGIgBAHQgCAJgHAGIgDACIgCAAIgBAAIAAAAIgBAAQgFAAgCgKIAAgHQAAgGABgGIAGgOQAEgIAJgFQAHAGADAKQAHASgJARQgGAKgKAEIgQgGgAPnCqIgJgEIAJAEgAPoCeIAAgBQAAgBgMgEIAHgDIgHADQAMAEAAABIAAABgAoGDIQgIgPgCgIIAtgDIAFAZIAAABgAmBCmIFngfQgCAPABAPIj1ATIgHAAIgDABIhiAIIgFgbgAN8CwQgIgCgJABQgKAAgKgBIgLgBIgGAAIgSgCIgDAAIgPgCIgDAAIgPgDQgJgCgKAAIgQABIgMAAIgEAAIgRAAIgTAAIgEgBIgOgBIgGAAIgNgBIgQgCIgNAAIgFAAIgTgBIgTgBIgGgCIAAAAIgEgBIgDgCIgEgDQgIgFgBgLIAAgBQgBgJAGgIQAFgHAIgCQAGADAIABIATADIAMABIAIABIASABIARAEIAKABIAJABIASACQAIACAJABIAFABIABAAIANABIAPAAIARABIARABIAHAAIABAAIAKABIASABIAUADIAJABIAHAAIASABIATACQAKAAAIgFIACAGQACACADABQACACACAEIgGADQgJAGgDAJQgDAHACAIIAAAAQgHgHgKgBgAIxCaIgDgCQgGgFgHgCIgRgEIgTgFQgSgEgSAAIgcAAIAAgTIAAgCIAAgBIAGgGQANACAOgBQATgBASAEIATADIAUAAIAagEQgIACgFAHQgGAIABAJIAAABQABALAIAFIAEADIADACIAAADIgFAAQgGAAgGgEgABMB/IBCgFIABAeIg7AFQgCgRgGgNgAObCKIAAgGIABgFIADgQIACgUQACgJABgKIAAgRQAAgKgDgJIgEgSIgBgSIgBgNQAMgIALgCQgLACgMAIIACgJIAEABIABAAIAAAAIABAAIACAAIANgCIgNACIgCAAIgBAAIAAAAIgBAAIgEgBQgDgBgCgDIABgmQAAgTgBgSIgCgmIgFgnQgCgSgFgTIACgEIABgBQAEgEAFgDQAIAFAIADQAJADAJgEQABAcgBAQIgCAlIAAAlQAAATAGATQAGATAIAQQABADAAAEIgIAAIgBAAIAAAAIgBAAIAAAAIABABIAEAJIgEgJIgBgBIAAAAIABAAIAAAAIABAAIAIAAIAAAPIgCAOIgBAUIgCASIgDAQQgCAKgBAJIgBARIAAASQgBALADAJIgGABQgJACgIAGIgFADQgIgDgCgGgAOygXIALABIAEAAQgFgBgFAAIgFAAgAO4gfQgFgGABgIIAAgCIAAACQgBAIAFAGgAOpgkIABgJIAAgIIAAAIIgBAJgADjBzIAAAAIDEgRQACgigBgjQgBglACgmIABgSIAHgKIADgFQAEAEACAJQACAGAAAKIAAAQQACAjgBAkQgCAhABAhQgDgCgMAIIAAAAIgGgLIgBAHIgBALQgFAHgDAIIAAAAIi7AOIABgegAG6CEIADAAIgDAAIgBgCIgGgJQAEgGAGgFIAAABIAAACIAAATIABAGIgEgGgAG9BuIAAAAgAJEBrIAAAAgApBhSIgEgNIArAAQAGASABAPIgpAAIgFgUgAG/hFIgDgHIACgSIAYgDIAHgBQASANgRAXQgPgCgQgFgAmuhfIC4AAIAbAAIASAAQAFAPAIAPIgdAAIgdAAIiyACQgBgSgFgOgAGLhAIhKgGQgPgBgPABIgMAAIgwABIAFgZIAbAAIBAAAQAoAAAmgFQAFgBALACIgDAAIAEAAQAAAEAEAEIAAADIgIALQgEAGAAAGIgLAAIgIAAgAiuhBQgFgPABgPIAXAAIAmAAIAeAAIAAABIABAcIg9ABIgbAAgAg2heIAkAAIgCAbIgsABIAKgcgAwthFQgGgIABgJIACgQQABgIAFgHIADABIAGACQADADABAHIAAAHIgBAMQgCAKgHAHIgCABIgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAgAA3heIBbAAIgCAaIhWABIgDgbgAwnhEQAHgHACgKIABgMIAAgHQgBgHgDgDIAJADQADABADAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAHACAEAFIAEgYQADgTgBgTIgDgmQgBgSgHgVQABgOAFgRQAFgSABgUIABgnQAAgTgBgTIgCgkIAAAAIACgCIANgNQAGgHAHgDQACAEAAAGQAAAGgCAEIADAjQACATgEATIgFAmIgCAmQgBAUALAQIgBAGIgBgBQgLgDgMgCQAMACALADIgCAHIgFAcIgBAGIgFAnQgCASABATIABAQIAAADIgBABIAAAFIAAACIgHAHIgOgPIgBALQAGADAFAFIgDADIgKAIIACgTIgCATIgFADIgFAFIgDAAIgRACgAt3hGIgTgCQgJgCgKAAQgJABgIgBQgJgCgKABIgTACIgSACQgCgEgEgFIgFgFIAAgHIAAAHIgDgDIADgEIACgEIAAgFIASAAQAKgBAJACIASACQAIABAJgBIAUABIATABIADAAIAHAaIgBAAgAG3hTIAHgLIgCASIgFgHgAwJhNIAAAAgAGqhjQgCgUgLgRIAEgBIAKgFIAPgEQADAAADAAQgDAAgDAAIgPAEIgKAFIgEABQgBgFABgEQADgJAAgKQAAgJACgJQACgIABgJIABgTIABgTQABgIgEgLIAKgHIAIAIIAIALIgCATIAAASIgBASQgBAJADAIQADAKgBAJQgBAFACACIAAAAIAAACQgCASADAQIgCAKIAAAAQgIADgGAEIgHgGgAsijQIgLgBIgCAAIABgPQAEgTABgSQABgUgCgTIgFgiQAAgJgDgCIACgkIABgdQgNgHgMgEIgJgDIgmgHQgMgCgLAAIgOAAIgCABIgZABQgSABgRgDQACgCgBgFQgBgIgEgHIAEgGQAUABATAGIATAEIARABIAHABIAfAAIAWACIAPACIAVACIAAABIAAAAIABAWIgBAJIABgJIgBgWIAAAAIAAgBIAAgNQgBgTACgUIABgUIgBgNIgBgGQgDgQABgSIAFgCIAQgLQAIgGAGgHQAFgFACgGIABAAIABAoQABASgBARIgCAnIgDAnIgBAGQAQAEANABIANAAQAHAAACAGIABADIgCAJIgBAIIgEAGIgBAAQgTgBgagGQAAATgBAUIgBAZIABALQgBANACAQIAEAfQADAUAKARIAFAMIAGARIgBAAIgIgDIgBAAIAAAAIgBAAIgBAAIgUAHIgCAAIAAAAQgIACgHAAIgBAAIAAAAgAsMmfIgBgGIACgYIgCAYIABAGgAM9jmQgCgLAHgCIAEgBQADACACAAIAJgBIAJgBIADgBIAKgBIARgBIAOAAIAAAAIACAGIABANQgEADgBACIgCAFIgQAAIgRABIgRACIgPADQgEgKgDgIgAMmjWIgogDQgQgBgPgDIgGgCQgHgCADgHIAFgIQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAFgDADACIACACIAAgDQAIgBAIAAIASgBQAKgBAJABIARAAQAFAAAFABQgEALAAALQAAAHADAEIgQgBgAJ8jYIgNgFIgGgCIAAgCQACgHADgFQADgIAIgBIACAAQACgBABgDIAEACIADAAIAAAAIAAAAIAFAAQAOACAOADIAJADIAIABQAHAAAIgEIgFAQIgBADQgJACgJABIgTABIgRAAQgFAAgDACQAFgFACgJIAAgEQAAgGgEgGQAEAGAAAGIAAAEQgCAJgFAFIgDACIgBABIgCgBgAJYjkIgTgHIgRgFIgDgBIgDAAIAAgCIgBgCIAAgFQADgLAKAAQgCgKgLADIgEAEIgJgCIgTgFIgFgBIABgCQADgDAFgBIATgDIASgCQAJgBAJAAIAUABIASAAIASgBIATABIAEABQAKAEAAALQAAAEgEACQgIAEgKAAIgUgBIgTgBQgJAAgIABIgOABIgIgDIgDgBIADABIAIADIAEACIASAIQAGACAHgBQADAAADgCQgGAEgEAGQgFAFABAHIgIgCgAO3jjQgFgGgIAAIgEAAIgGgDQAGgEAGgDQAJgDAAgHIACAVIAAAFIAAAAgAOLjxIAEAGIADADIgFAEIgBAAIgBgNgAIPj7QgYgJghgJQgEgFgHACIgBAAQgGgFAFgKIACgDQAEgFAHgBQAJALAKACQAJACAJADIANAGIAFABIATAFIAJACIgHAIQgGAJAFAJIAAAAQgJgEgJgJgAORj5IgBgBIgBgBIADgPIABgFIABgSIgBgTIAAgQIgBgTQgBgJgEgHIAAAAIALgGIAPgMIAAAAQAIABAIAFIAHAFIAAANIAAAOIgCAOIgBARIgCARIgCASIgCARQgFgEgIAHIgMAMQgFAAgGgIgAH+j7IgDAAIgOgCIgUgCIgMgBIgEABQgIgBgHgBIgDgEIgFgGIAEgCQAEgBABgEQAIADAHgBIAMADQAhAJAYAJIgRAAgAF2j/IABAAIAAAAIAAAAIABgBQACAAACgEIAAAAIABgBQABgFAAgFIAAgIQgCgHgGgEQAGAEACAHIAAAIQAAAFgBAFIgBABIAAAAQgCAEgCAAIgBABIAAAAIAAAAIgBAAIgLgCIgEgBIgigCIglgBQgUAAgSgCIgWgCIgBAAIgQgCIgCAAQgRgBgQgFIgJgDQgOgDgNABIgHABQgOABgJgCIgFgBQgIgDgJABQgKABgJADQADgBACgGQACgJAAgJQAAgKgHgIIgBgBIAOAHIARAFIAIACQAKABAMADIAIACIAkAJQATAEATgBIAVAAIAQABIAkADIAJABQAOABAPAAQATgBATgFIAJgBIAFAAIAIACIALAEQAJAEAJAAIAFAAIAAAAIAAgEQABgJgEgHIAJgEQABAEABABQgBgBgBgEIgJAEIgBgCIgHgJIAAgCQAEgFAJgCQAKgDAKgBQAHAAADAFIABADIAAABIgIASQgDAKACALQgFABgCAGIgHgGQgEgEgGgBIAAACIABAEIAJAHQgIAGgDAEIgDAAQgJgCgJADQgGACgFAAIgJgBgAGxkuIADgGIgDAGQgGgEABgFIAAgBIAAABQgBAFAGAEIAAAAgAA9kWQgGgDgBgGQgJACgJgDIgGgCIgMgDIgRgEIgIgBIgKgBIgRgCIgQgDIgBAAIgSgCIgSgCIgSgEIgTgEQgKgCgKABIgQABIgDABIgNACIgGABIgLACQgEgIgIgFIgMgGIgFgDQgJgDgJgCIgPgEIgDgBIgNgCIgGgBIgTgCIgTgEIgOgCIgFAAQgKgBgJgEQgJgCgJgBIgRAAIgUAAIgTgBIgFAAIAAAAIAAAAIgOgBQgJAAgJADQgHACgEAEQADgEAAgKIAAgIQABgDgDgDIACAFIAAABIAAAIQAAAKgDAEQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQgIgEgKgCIgSgEIgJgCIgKgDIgRgFIgSgDIgKgCIgIgBIgRgDIgTgDIgSgDIgBgBIgSgEIgTgCIgKgCIgIgCIgRgEIgCAAQgFgCgGABIgDAAQgCgDAAgDIABgIIACgJIgBgDIAOAAIAPACIAKADIAcAKQALAEAMACIAPADQASACARAEQASAFASADIAdACIACAAIAHAAQANAAAMAEQAGgBADgIQAFAHABAKIAAAAIAAAAIAAAAQgBgKgFgHQAJAHAJAAIATADQAKADAJAAIAGABIATAFIASADIATAFIASADIASAFIAJACIAIABIAQADIATADIATABIATABIARAAIAIAAIALAAIADgBIAHAEIAEAIQACAHAAAIIAAADQgBAKgIAEQAIgEABgKIAAgDQAAgIgCgHIgEgIIAMAGIARAIIAMADIAFAAIARACIASABIASACIAUACIASACIAAAAIASACIATADIAQAEIACABQAJADAKABIATABIAEAAIAJgCQgBgDAEgCQAHgKAFAFIABABQAHAIAAAKQAAAJgCAJQgCAGgDABIAAAAIgCABIgGgCgAQiliIgBgDQgCgDgDgBQgJgFgKAAIgTABIgRAAIgRACIgNAAIgCgFQgHgNgMgHIADgDIAIgIIAGgGIAPAAIANgBIgNABIgPAAQADgFAAgGQAAgFgFgBIgBgBIAPgFIASgHIARgJIAQgKIAQgNQAHgFAAAGIAGgCQALgBAGAJQAFAIgBAJQgBAKgJACQgBABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgJgCgJABQgKADgIAEIgRAIIgPAJIgBABIAAAAIgBABIABAAIABAAIABAAIASgBIATABQAJAAAJgCQALgDAHgDQAJgBAGAGQAFAHADAHQADAJgCAKQgCAJgEAHQgFAJgJAEIgGABQgGAAgBgIgAQxl2QADgEAAgGQAAgFgDgEQgDgGgGgFQAGAFADAGQADAEAAAFQAAAGgDAEgAQRl+IgRACIARgCIACAAIADAAIAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAgBAAIAAABIAAgBQABAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAAIgDAAIgCAAIAAAAgAQRmFIgDAAIAAAAIgDAAIgPAAIAPAAIADAAIAAAAIADAAgAQImNIgSACIASgCIACAAIAGgBIADAAIAAAAIAFAAIgFAAIAAAAIgDAAIgGABIgCAAgAQim4QAEgBACgEIAAAAIABAAIABgFQAAgEgFgEIAAAAIgDgBIAAAAIAAABQgDAAAAAEIgBADIABACIgBgCIABgDQAAgEADAAIAAgBIAAAAIADABIAAAAQAFAEAAAEIgBAFIgBAAIAAAAQgCAEgEABIAAAAIgBAAQgDgBgDgDQgEgEAAgEQAAgEADgEQgDAEAAAEQAAAEAEAEQADADADABIABAAIAAAAgAnbliIAAAAgAODmFQgFgJgHgGIgHgHQAMgHAIACQAHACAGAIIAMAOIgFAFIgOAKQgDgGgEgGgAOcmWIgPgKQABgKgBgJIgEgQQABgDgFgHIgKgMIAKgFQAJgDAJgDQAKgCAJAAQAKAAAIAEIALAGIAAAAIABABIABAAIgHAIQgEAGgBAJIABASIABAMQgJgBgGAHIgLAPIgCADIgHgIgAOanDIADAIIgDgIQgEgHgJgDQAJADAEAHgAOjnAIgDgKIADAKgAOwnDQAAgGAEgFQgEAFAAAGgAOynZQAKgDALAAQgLAAgKADgAxBmrQgDgKAGgGQAHgGAJgDIACAIIAAAAIAAABQADAHAGAAIAAAAIABAAIADgBIAAAAIABAAIgBAAIAAAAIgDABIgBAAIAAAAQgGAAgDgHIAAgBIAAAAIgCgIQAAgGACgGQAEgJAJgEIABACQAMgBAKADIAFABIAHABIACABIACAAIAGABQAFADAEAFIABACIgNANQgHAGgJAGIgGgCIgCAAIgJAAIgIgBIAIABIgNAJIgNAKQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgLAAgCgLgAwXnAQAAAIgHADQAHgDAAgIIAAgEQAAgHgCgHQgCgFgDgEQADAEACAFQACAHAAAHIAAAEgArYmyIAAAAgAwWm0IAAAAgAvsnWQgKgIgGAHIgHgBIAQgMIAPgLIACgBIACgCIAMgIIAHgEQgCAFAAAFIABAGQACALAKACIgPAIQgJADgGAHIAAAAIgCACQgEgFgGgEgAg6ndIgDAAIAAgCIgGACQgJADgNgFIgCAAQgSgJgTgBQgUgCgQgKQAKgMAIgOQAHAAAJADIASAGQAJACAJAAIASgBQAKgBAIADQAJABAGAIIAKAQIALAPIAEAGQgZgHgPgBgAg9nfIAAgDQAAgSgFgMQAFAMAAASIAAADgAwGnrQAAgIgDgFQgDgGAEgGQAFgHAIgDQAJgEAKABQAJACAFAKQgHAHgBAKIAAAEIgCABIgPALIgQAMQgDgJAAgKgAv8oAQAGgFAHAAIABAAIAAAAIADAAIABABIAHACIgHgCIgBgBIgDAAIAAAAIgBAAQgHAAgGAFgAvCnhIACgBIAEgCQAAABgBAAQAAABAAAAQgBABgBAAQAAAAgBAAIgCAAgAvCnhQgKgCgCgLIgBgGQAAgFACgFIABgCQACgCADgBIABADIgBAEQAAAIAEAHQADAGAEACQgEgCgDgGQgEgHAAgIIABgEIgBgDQABgFAKgCQAKgBAHgGIAQgKIAQgLIAPgKIAQgKIAQgMIAOgMIAHgHIAFgFIAIABIADgBIAEAAIABAAIAAAAIACAAIACAAIABAAIgBAAIgCAAIgCAAIAAAAIgBAAIgEAAIgDABIgIgBQgKABgJADQgJAEgJgEQAEABAEgEQAGgGAAgJIAAgBQAAgKgEgJQgFgKgJgCIgEACIgBgBQADgEAFgEQAHgFAKAHIAIAGQAGADAJAAIACAFQAFAGAIAEIACABQAIAFAGAGIgIARIgEACIAAgCIAAgCIAAgBIAAgGQAAgKgEgKQAEAKAAAKIAAAGIAAABIAAACIAAACIgDACQgMAFAIADIASgFQgGAFgIAFQgHAEgEAFQgCADACADQACAFAEABIgMAGIgRAJIgBABIgPAJIgQAKQgIAFgHAGIgEADIgLAIIgNAMQgHAGgGAHQgEADgGgBQgEgBgEgCIAAABIgEACIgCABIAAAAgAobpBQgJAAgJgCQgJgCgJgBIgQABIAAgBIgCgHIgFgOQgEgHgHgEIAAgEQAHAAAHABIAPAEIASADQAKACAIAGQAHAFAFAJIAJAQQgHgEgJgBgAq7pUQgJgDgKABIgTAAIgTgCQgKgBgIgDIgBAAIACgEQACgIAAgIQAHgJgLABQgBAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABIAAgEQADgFACgFQAJgCAKACQAKACAJADIAKAFIARAIQAKAEADAJIACALIAAAHIgFgCgAtnpaQgEAAgDgEQgGgIgBgKQgBgIABgIIABgDIABgEIAEgDIAEgCQAJACAFAKQAEAJAAAKIAAABQAAAJgGAGQgEAEgDAAIgBgBgAtnpaIAAAAgAstpeIAAAAgAsVpuIgBAAIAHgIIAEgDIAAAEIAAACIgBADQgCAFgEACIgDgFgAscp4QgFgJgIgFIgCgBIgEgCIgEgGIgLgOQgHgHgCgMQAFgHAIgCIASgGQAIgDAJABQAJABAIAGQADADAAADIgEASIgDASIgBAHQgBAEgDADIgLAMgAsLp5IAAAAgAsJqNQALgEAHgGIAQgKIAQgKIAPgKIAOgLIAIgEIACgCIAJgGQgDADgBAFIgCALIABAIQACAIAFAGQAEAFAFACIABAAIAGABIABAAIABAAIABAAIABAAIABAAIABAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIgGgBIgBAAQgFgCgEgFQgFgGgCgIIgBgIIACgLQABgFADgDIAEgDIADABQAJACAHAFIANAOQAGAHgCAIQgCAIgIAFIgGACIgKAEQgJACgIAHIgDgDQgHgGgKABIgUADIgTADIgRADQgJABgHADQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAgAqVqfQAEAAADgEIACgCQADgEAAgGQAAgIgFgIIgEgFQgEgDgFAAQAFAAAEADIAEAFQAFAIAAAIQAAAGgDAEIgCACQgDAEgEAAIAAAAIgBAAQgDAAgDgDIAAAAIAAAAQgIgGgBgJIAAgEQAAgIAEgGIAAAAQACgDACgBIABAAIABAAIAAAAIAAAAIgBAAIgBAAQgCABgCADIAAAAQgEAGAAAIIAAAEQABAJAIAGIAAAAIAAAAQADADADAAIABAAIAAAAgAqnrMIAAAAg");
	this.shape_21.setTransform(130.3,90.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CC33").s().p("As6JGQAAgQgCgNIgDgMIgBgEIgEgKIgCgCIgFgFQgLgMgGgPQgHgRgFgTQgFgRAAgSIAAglQgBgTAEgSQAFgUAMgPQAHgKAKgHQgMgGgOAAQgTAAgSAEIgGACIgCgGIACgIIgCAIIACAGQgPAGgIAOQgJARgGARQgGASADASQAEATAGASQAHASADATQADASAFARIABACIgPAQIgNAQQgHAKgLACQACgNAEgMQAEgSgCgTIgEgRIgGgSQgIgRgEgTQgFgSAHgSIAOgjIAKgWIALgTIAEgIQANgUASAOIAEgHIACgCIAEgFQALgMAQAAQAGAAACAFQADAJAIAGQAKAIARADIgEACIgKAHIAKgHIAEgCQAOgHASAEQATAEAOAFQgQAIgKAOQgMAQgGASQgGATgDATQgDAUAEATIAIAmIAAABQACASAEATQACAKAFAMIgEALIgBACIgBABIAAACIgIASIgLAUIgBABIgJAOQABgFAAgGgAuNEoIAAAAgAIhkRIgDgGIgDgHIgEgHIgJgNIgCgCIgJgJIgHgHIgCgBQgMgJgNgFIgPgGIgCAAIgSgFIgQgEIgKgCQgIgBgJAAIgOAAIgEgBIgHgCIgJgDQgLgFgFgJIgDgDIABgGIAAgIIAAgJIgBgDQAHAFAKgBIAOgBIASgCIAPgBQAJAAAJgBQAJgCAJAAQAKAAAHAFIACADQACAHAGAGIADACIANAKIAPANQAHAGAJADQAIADAIAEQAIADAFAIIAEAHIgEgHQgFgIgIgDQgIgEgIgDQgJgDgHgGIgPgNIgNgKIAAgCIADAAIANABIAPAAIASgCIAOgBIAQgBIAQgEIASgEQAHAAABAJIAAABQAAAIAEAIIAIAQIAIAPIACAEIAEALQADAJAFAIIAHALIgCABIgGgHIgGgGIgCgCIgEgDQgFgEgGgBIgWgFQgLgCgMgBQgGgBgDABIACAJQAAAKgCAJIgFASIgFAPIgCgFgAGsmAQAIAFAKACIASAFQAJADAIAGIAQAJIAPAKQAIAEAIAHQAHAGADAKIACAGIgCgGQgDgKgHgGQgIgHgIgEIgPgKIgQgJQgIgGgJgDIgSgFQgKgCgIgFIgRgLIARALgAJBl4IAIALIAKAQIAHAKIgHgKIgKgQIgIgLIgKgJIAKAJgAPQkjQgGgHgJgFIgQgIIgGgCIAFAPIgHgFIgEgCIgDgCIgFgCIgDAAIgFgBIgIAAQgIAAgIABIgVABIgFAAIAEAHQAFAIAIAEQgEABgEgCQgEgCgFAAIgNAAIgIgFIgRgIQgJgFAAgIIAAgDIABgDQAAgEgDgEQgFgIgIgHQgGgGgJgBQgKgBgEgIQAEAIAKABQAJABAGAGQAIAHAFAIQADAEAAAEIgBADIAAADQAAAIAJAFIARAIIAIAFIgCABIgMACIgOABQgHABgHAAIgQgBQgGgBgCgCIgLAAQgKgCgIgHIgSgRQgEgFgDgHQgCgEACgJIgOAMQgIAHgDAJQgEAJgCAJQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIgCgFIgDgFIgFgGIABgBIgCAAQgKgGgKgCIgdgHIgNgFIgFgCIgCgEIgIgPIgIgQQgEgIAAgIQAFgEAIAAIAPgCIARgBQAJgBAIABQAKABAJAGQAIAFAIABQAJACAJAAIATAAIAGAAIgCAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABgBQAFABAEADQgBAMgFAIIgNAPIANgPQAFgIABgMQgEgDgFgBIgBAAIgBAAIACgBIASgBQAIgBAIACIAQAFIASAGQAJADAHAGIAIAHIABABIAAAAIAEAGIAJATQAEAIAGAGIAHAHIgHgHQgGgGgEgIIgJgTIgEgGIAFAAIARgBQAJAAAKABIAMADIAKAEIAHADQAJAEAJAGQAGADACAGIAGAMIgGgMQgCgGgGgDQgJgGgJgEIgHgDIANgDQAJgCAKAAQALgBAGAHIAFAFIAHAIQAHAGAFAIQAFAGADAHIABADQACAHAAAHIAAAAIgBAFIgHgHgAPAlEIAKALQAEAGABAGQgBgGgEgGIgKgLIgOgNIAOANgAK3lJIgDANIADgNQADgKAAgKQAAgJgEgIQgDgGgEgFQgFgFAAgHQAAAHAFAFQAEAFADAGQAEAIAAAJQAAAKgDAKgANplFQAJAAAIACQAIADAJAAIALACIgLgCQgJAAgIgDQgIgCgJAAQgKAAgBgIQABAIAKAAgADulJQgGgHgHgGQgIgFgIgCIgMgDIgEgBIgTgDIgHgBIgIgCIgTgDQgIgBgHgCIgIgEIgHgDQgHgFgGgGIgLgLQgGgGgDgIIACANIAGAUIgHgEIgBAAQgIgEgGgGIgHgKIgFgGIgKgPIgLgPQgFgIgJgCQgJgDgIABIgTABQgJABgIgDIgTgGQgIgDgHAAIABgDQAEgHAAgFQAAgHgGgEQAGAEAAAHQAAAFgEAHIgBADQgIAOgKAMIgCADQgMANgDASQgCAMgBALQgCgBgDgGQgIgPgQgJIgEgCQgNgFgRgDIAAgBIgHgLIgHgTIgEgSIgBgTQAAgHgEgGQATAAATABQATACASAAIAJAAQAPABAOAFQAGABAEADIANAAQAKgBAJABQAKAAAJgCQAJgDAGACQAEABADADIANAMIAPALQAHAFAJADIASAEQAFABADADQAIAGAJACIASACIASABIASABIAUACIASABQAKAAAJADQAKADAIAGIAEAEQAHABAIAAQAJABAIgCQAIgBAJABQAJAAAJgBQAJAAAIgCIATgDQAJAAAJADQAHACABAHIABADIAAAJIAAAIIgBAGIgBAMIgDARIgCAHIgEALIgGAQIgBgGIgBgFIgEgKQgDgIgGgHQgFgGgIgFIgRgKQgFgDgHgCIgOgDIgNgDQgEAAgDgCIgFgEQgDgCgFABIADAJQACAKAFAIQAEAJAHAHQAIAIgDAJQgCAGgDADQgEAFABACIgKgNgAFMlkIAAAAIgBAAQgBgBgBgFIAAAAQgBgJgFgIQgEgHgHgGQgGgGgJgBIgSgCIgPgBIAPABIASACQAJABAGAGQAHAGAEAHQAFAIABAJIAAAAQABAFABABIABAAIAAAAgACPmVIASAEQAJACAIADQAJAEAIAFIARALQAFAFACAFQgCgFgFgFIgRgLQgIgFgJgEQgIgDgJgCIgSgEQgJgCgFgIQAFAIAJACgADjmRIADAJIgDgJQgCgHgEgEQAEAEACAHgAhymYQgFgIABgHQAAgKAIgJQAHgHACgJIABgIQAAgOgLgNQALANAAAOIgBAIQgCAJgHAHQgIAJAAAKQgBAHAFAIgABMmxIABATIAAAGIAAgGIgBgTQgBgGgEgEQAEAEABAGgAgGnMQAGAGAJACIATAEQAKACAIAFQAIAFACAJIADAIIgDgIQgCgJgIgFQgIgFgKgCIgTgEQgJgCgGgGQgHgFgFgIQAFAIAHAFgAJZmFIAAAAgAipmVIgHgBIgJgBIgNgBIgNgBIgMAAIgOgBIgOgEIgEgCIgOgFIgOgIQgEgDgDgFQgBgDAAgEIgLAOQgGAHgEAHIgDgDQgCgEgDgDIgJgFIgIgFIgEgDQgDgCgBgEIgMgbQgCgGgFgEIgDgDQgJgGgKgCQgJgBgIgEIgHgFIAEgJQgCgHgGgGQgHgHgIgGQgIgFgGgHQAGgEAJAEQAJADAKABIASABIATAAQAJAAAJACQAKACAJADQAJAEAGAIIAFAJIADAHIAFAKIADAHIAJARQAFAHACAHIABAGQAAAFgDAGIgBABIABgBQADgGAAgFIgBgGQgCgHgFgHIgJgRIgDgHIASABQAKAAAJAEIARAIIAOAJQAIAGAFAJIALAPIAPANIAOAMIADAEIgDgEIgOgMIgPgNIgLgPQgFgJgIgGIgOgJIgRgIQgJgEgKAAIgSgBIgFgKIgDgHQAHgCAJAAIAQAAIARgBIATgBQAIAAAIACQAKADAIAFQAIAFAHAGIADAEQAEAGAAAHIABATIAEASIAHATIAHALIADAEIAIAJIgBABIgHgDgAl/oTIARABQAKAAAIAEQAJADAFAIQAEAIACAJQACAIAEAHQAFAIAAAKQAAgKgFgIQgEgHgCgIQgCgJgEgIQgFgIgJgDQgIgEgKAAIgRgBIgTgBIATABgAFemWIAAAAgAoBmzQgEgIgIgFIAGgMIgGgNQgEgJgFgJIgKgQQgEgIgGgGIgNgPIgMgMIgOgMIgQgLIgRgKIgCgBIgEgBIgBAAIAAAAQgFABgDAEIgBABIABgBQADgEAFgBIAAAAIABAAIAEABIACABIARAKIAQALIAOAMIAMAMIANAPQAGAGAEAIIAKAQQAFAJAEAJIAGANIgGAMIgBgBIgQgKIgPgJIgRgKIgKgFIgGgDQgJgFgHgGIgCgBQgGgGgDgIIgCgLIgBgHIgCgMQgDgJgJgEIgRgIIgLgEQgJgEgKgCQgJgCgJACIAAgBIAAgFQAHgDAJgBIARgDIATgDIATgDQAKgBAHAGIAEADIAGAHIAPALIAIAEIAJADQAJACAJAEIAMAGIgMgGQgJgEgJgCIgJgDIATAAQAJAAAKgBIATgCIATgCIATgBIAKAAIAPAIQAIAEAHAGQAGAHAIAFQAIAGAHAHQAGAGACAHIgEAJIgFAIQgGAHgDAJIgIAQIgBgDIgHgTIgIgRIgKgQQgEgIgIgGQgIgGgKgBIgSgEIgPgEQgHgBgHAAIgEABIAEADQAIAEAEAHIAFAOIACAHIAAABIACALIACATIAAAQIAAABIgBAUIAAALIAAgCgAntouQAKACAIAEIAQAKQAGAGAIADQAKAEACAKQADAKABAJQgBgJgDgKQgCgKgKgEQgIgDgGgGIgQgKQgIgEgKgCQgIgDgJAAQAJAAAIADgAjDnwIAAAAgAkzn0IAAAAg");
	this.shape_22.setTransform(122.9,83.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("AcEC+IAAglIAAmjIAArNMg4HAAAIAGCHIAALiIAARGMA4BAAAg");
	this.shape_23.setTransform(143.7,99.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.1,1,1).p("AQmCKQAIABAIABQAIACAAAGQAAABgDABQgIABgIABQgJAAgJgBQgIgBgJABQgJABgIAFQgGADAGAFQgLACgIgCQgJgDgJABQgJAAgJACQgFABgDADQAJACAHADQgBAEgDABQgFABgFgBQgIgBgIABQgKACAAAGQAFADADACQgJAGgLABQgHABgGABQgFABgGABQgFACgFABQgNADgMAAQgJAAgIAEAPWGAQgKgCgLgCQgNgDgOgFQgLgEgLACQgaAEgFgNQgFgOgWgBQgUgBgTgFQgOgEgPABQgSABgHgMQgEgIgJgEQgRgHgPgMQgQgMgUgDQgTgDgUABQgSACgSAAQgIABgIgCQgSgEgSgIQgEgCACgEQAHgNASgFQATgFATgFQASgEASgDQASgDARgEQARgEARgEQASgDAVgEQAJgGAOABQAZADAagJQAFgEAIAAQASABASgEQACgBAAgCQgBgDADgBQAIgBAIABQAMACALgGQgBgFAEgCQABgBABAAQADgBADgBQAMAAgFgIQACgGAKAAQANgBANAEQAFABACgEQAEgBAFAAQAKgCALgBQAGgBAHgBQAGgCAFgCQgBgBgCgCQADgBADgBQgFgHgKgBQgJgBgKACQAFAEAEAFQgOgBgOACQgjgGghANQgDABgCABQgBAAgCABAOnDZQAFgDAEgDQAFgCAEgCQAHgCAGgDQAIgCAIgDQAIgDAIgDQAIgDAHgDQAJgEAJgEAQWFxQACgBACgBQAIgFAIgDQAKgEAGgIQACgDAGABQAKACAJAEQAJAEAIADQACABABAAQgBABAEAEQAGAFAGAGQADAEABADQgLABgJABQgMADACgMQABgKAKgGAN9BDQgMgFgMgGQgKgFgFgOQgKgggfADQgLABgHgGQgVgRggABQgkACgEgcQgDgXgTgLQgQgKgKgOQgKgNgIgNQgPgYgUgVQgTgUgUgPQgJgegYgOQgZgQgfAHQgHACgFgDQgIgGgIgJQgNgOgRgLQgZgPgKgYQgMgfgdAHQgWAFgNgRQgRgYgUgUQgUgVgXgPQgVgPgcgJQgIgDgHADQgVAHgUgDQgcgDgagNQgbgNgagOQgMgIgOgBQgcgBgZgLQgbgNgbAEQgdAEgZAPQgZAOgXALQgEAAgLgFQgcgLgcAIQgaAIgaANQgeAPgWgYQgKgKgQAHQgHADgMACQgbADgXgPQgTgNgXgJQgcgKgbAKQgcAKgdAGQgFgDgFgCQgbgOgegGQgcgGgaAMQgSgKgXgHQgpgNgcAeQgHgNgVAMQggATgUgUQgXgXgcAWQgXgVgWANQgogTgiATQgGAEgHgDQgRgJgTgCQgngGgXAeQglgKjAgFQjAgEiEBBA8AD9QIpgCAcACQBLAGBNgNQBKgMBKgHQBGgGBFgNQBDgMBCAGQBOAHBOgDQBKgEA6AQQAMAAAMgBQAngCAnABQAmABAmABQAjABAjgEQAngDAngEQAigEAjgEQAmgEAmgEQAigDAigDQAigCAigDQAmgEAmgEQAkgDAkgBQAkgBAkgCQAlgCAlgDQAhgCAhgDQAkgDAkADQAkAEAmgGQAmgGAmgDQAmgCAnAGQACAKAHAEQgnAJguAGQgvAGguAGQgfAEggADQgTACgSAFQgRAFgRADQgTAEgRAHQgRAHgQAGQgTAHgRAKQgJAFAHAJQAMAPAVABQASABASACQAHABAIAAQALABAMAAQATAAATAEQASAEARAIQAOAHAJAMQADAEAEADQARAKAVAAQAGgBAEAFQAMAMAWADQAKACAJADQARAIATABQACAAACABQADABADABQAOAFAQgBQAUgBABAMQAAAEAGAAQASABARADQASADARADQAQACgDAKQgDAHAHABQASADASACQAPACAQACQASACARADQAQADARgBQAWgBAKAKQgHADgIABQgDAAgDAAQADACAEACQAlALAlAMQANAJASAFQAKADIHA5ANsgbQgBADgBADQgCAFgCAEQAAgEAAgDQAAgLAGgJQgCACgDACQgKAFgIAIQgCAAACgEQAGgQAOgGQgDAAgDAAQgKAAgKgCQADgDAEgCQAPgIASAFQAFACADAFQAEgMAKgCQgCAEgCACQgDACAAADQAVAAAIARQgEgBgEgBQgJgDgKgCQADADACADQAKAKgEAOQAAgEgDgDQgFgHgHgHQgCAAACAEQADAGABAGQgFgHgIgDQgBACAAAEQgDAHABAIQABADABACQgDAJABAJQACAJACAJQADAJADAJQADAJgBAKQACABACABQABgCACgEQADgHADgJQAEgIAFgIQAFgJAHgGQAAgEACgDQgGAFgGADQgHADgFAGQAAgGAEgGQAGgHAIgCQgEgGgJAAQgIAAgFADQACgFAGAAQACAAACgBQAAAAABAAQAGgJAKACQAGABABAFQACgDgBgDQADgBACADQADACABAEQAEgGADgBQABAEABAEQATABAFARQgCgDgHgDQgFgCgFgBQAJAHAAAKQAAAEAAADQAAgKgIgFQgGgEgFgDQADAFgBAGQgCAKgHAEQADgJgDgIQgBgFgDgDQgBACgBAEQgDAIgBAKQgBgFgBgFQAAgBAAAAQgBgDAAgDAN7gdQgDgBgDAAQAAgCAAgCQgFACgEAFQAFALgGAIQAFAAAEACQABACABACQACAAACgBAN0gGQgBACAAABQAAAEAAAFQAAAFAAAFQAAAGABAFQACAJADAIQADAJABAKQgBACABACQADACAEABAOUgBIAAAAIABAAAOUgBQAIAAAIABQgGgGgJAFAOnAaQgFAHgFAIQgFAJgFAIQgGAJgBAGQgCAAgCgBAOMBJQAHADAHACQAGACAFAFQgEAHAEAFINcAAAPyCBQgJgHgOgEQgSgFgRgFQgPgEgEgHANVFQQAHgDAIABQAIACAIAAQAJABAHAFQgBACgBABQAAAEAFAAQAfgBAeAEAPMFtQgLAAgBAIQAAABADABQAJADAKABQAEABAAABQgCgBgCABQgCAAgCACQACAAACABQAKACALAAQADAAAEABQACABADAAQgCAEgCABQACAEACACQgKAAgIgDQgIgEgHgIATUGSQAKACAJABQAPABgHAJQgDADgEAAQgKAAgJABQgFABgEACQABACACAAQAEABgDADQgDAFgHgBQgOgCgPAAQgEAAgEACARJGfQADAAAEgBQAJgCAKABQAJAAAJAAQAIAAAIAAQAJABAJAAQAJABAJAAQAKAAAJABQAIABAHgGQABgCgBgBQgGgIgKgCQgHgCgIgBAcBIFQoEgmgEgBQgTgGgLgLQgCgCgCgCQgHgGgJgDQgGgCgHgCQgJgDgJABQgHAAgJgCQgCgFgEgEQgHgHgKAAQgHABgHAAQgEADgDgBQgRgFgSgHQgGABgFAAQgLAAgGgHQgBgCgDAAQgKAAgJABQgKACgJgFQgGABgGgHAR8F+QAIABAJgBQAGgBAEABQACABABADQAEAIAEAJQACAEgGgBQgKAAgJgBQgKgBgKAAQgKAAgJAAQgKAAgJgBQgJgCgKAAQgIAAgJAAQgCAAgBAAQgIAAgIgCQgJgCgJgEQgIgDgDADQAGgIAHgHQABAAABgBQgNgBgLABQgOAAALgHQgOgCgOgBQAEgEAFgCQAKgEAJgCQALgCAHAHQABACACACQAFAEALABQgFAEgFAEARPF4QgDAAgCABQACAAACgBQABAAAAAAgARKFqQgCAEgCAEAQ0H5QAIgBAIgCQAJgCAIABQAFALAAALQABgBABgDQADgHABgIQAOgDAOABQAEAAAEABQgFgEgGgBQgJgCgKgBQABgDADgBQAHgDAGgCQgDgBgEAAQgJABgIABQgDAAgDABQgFACgDgCQgKgFgJgEQABAEAEAEQACADACADIAAAAQgJADgHAGQgCACgBABgARGFmQgFAEAAAH");
	this.shape_24.setTransform(144,63);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D6FF66").s().p("AgFAAQgIAAgJABIgRADIADgDQAHgFAJgDIAAAAIgEgGQgDgEgCgEIATAJQADACAFgCIAFgBIASgCIAHABIgOAFQgDABgBADIAUADQAFABAFADIgIgBQgOgBgOADQAAAIgDAHIgCAEQAAgLgEgLg");
	this.shape_25.setTransform(255.6,113.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgOADQACgJAKgGQgBABADAEIAMAKQADAEAAADIgTACIgEABQgHAAABgKg");
	this.shape_26.setTransform(257.3,100.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66FFFF").s().p("AgHAAIAAAAQAJgFAGAHQgIgCgHAAg");
	this.shape_27.setTransform(236.4,62.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B36302").s().p("AgEAmIADgFIAFgQQAEgIAFgJQAFgHAHgGIABAFIAAABIgKAPIgKARQgGAJAAAGIgEgCgAgPAiIAAgEQgBgKgDgKIgFgPIgBgLIAAgKIAAgLIABgCIACADIAEAAQgDAKABAIIAEASIAGASQADAJgBAKIgHgDg");
	this.shape_28.setTransform(234.9,66.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009900").s().p("AAhAiQgCgFgDgDIgCAGQgDAIAAAKIgDgKIAAgBIgBgGQABgDACgEQgHAFgGADQgHAEgEAFQAAgGADgGQAGgHAJgCQgFgFgJgBQgHAAgFADQADgFAGgBIACAAIAAAAQAIgBAIADQgGgIgJAFQAHgIAJABQAGABACAGQABgEgBgDQAEgBACADQADADAAADQAEgFAEgCIABAJQAUACAEAQQgCgDgGgDIgLgDQAJAHABAKIgBAHQAAgJgIgGIgLgHQADAFgBAGQgCAKgGAEQACgJgCgIgAgsgEQAAgMAHgIIgGADQgKAFgIAIQAAAAAAAAQgBAAAAgBQAAAAAAgBQABgBAAgBQAGgQAPgGIgGAAQgLAAgKgCIAHgEQAPgJASAFQAFADADAEQAFgLAKgCQgDADgCACQgDACAAAEQAVAAAHARIgIgDIgSgEIAGAFQAIALgEANQAAgDgBgDQgGgIgHgHQAAAAgBABQAAAAAAAAQAAABABABQAAAAABABIADANQgFgIgHgCIgGgCIAAgEQgGACgDAGIgDAFIgEAIIAAgFg");
	this.shape_29.setTransform(235.5,61.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC66").s().p("A8AJaIAAxGQIpgDAcACQBLAGBNgNQBKgMBKgHQBGgGBFgMQBDgMBCAGQBOAGBOgDQBKgDA6AQIAYgBQAngDAnABIBMACQAjABAjgDIBOgIIBFgHIBMgIIBEgGIBEgGIBMgHQAkgEAkgBQAkAAAkgCIBKgFIBCgFQAkgEAkAEQAkADAmgGQAmgGAmgCQAmgDAnAGQACALAHADQgnAKguAGIhdALIg/AHQgTACgSAGQgRAFgRADQgTADgRAIIghANQgTAHgRAJQgJAFAHAJQAMAPAVABIAkADIAPACIAXABQATgBATAFQASAEARAIQAOAHAJALQADAEAEADQARALAVgBQAGAAAEAEQAMANAWADQAKABAJAEQARAHATACIAEAAIAGACQAOAFAQgBQAUgBABANQAAAEAGAAQASAAARAEIAjAFQAQACgDALQgDAHAHABIAkAFIAfADIAjAFQAQADARgBQAWgBAKAKQgHADgIABIgGABIAHADIBKAYQANAIASAGQAKADIHA4IAAMZgARVj1QAFAMAAAKIACgDQADgHABgIQAOgDAOAAIAIABQgFgDgGgCIgTgDQABgCADgCIANgFIgHAAIgRABIgGACQgFABgDgBIgTgJQABAEAEAEIAEAGIAAAAQgJACgHAHIgDADIAQgEIAMgBIAFAAgAObpYIAAACIgFAAIAFgCg");
	this.shape_30.setTransform(144,137.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#78E3FE","#D5FFFF"],[0,1],0,-32.1,0,32.1).s().p("AOoFnQgEgGAEgHQgFgEgGgCIgOgGQABgFAGgKIAKgQIAKgQIACAKQABgKADgIIACgGQADADABAFQADAIgDAJQAHgEACgKQABgGgDgFIALAHQAIAGAAAJIAAgHQAAgKgJgHIAKADQAHADACADQgFgQgTgCIgCgJQgDACgEAFQgBgDgDgDQgCgDgDABQABADgCAEQgBgGgGgBQgKgBgHAIIAAABIgEAAQgGABgCAFQAFgDAIAAQAJABAFAFQgJACgGAHQgEAGAAAGQAFgFAHgEQAGgDAGgFQgCAEAAADQgHAHgFAIQgFAIgEAJIgGAPIgDAGIgEgBQABgLgDgIIgGgSIgEgTQgBgJADgKIgCgFQgBgIADgHQAAgEABgBQAIACAFAIIgEgNQAAgBgBAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAHAHAFAIQADADAAADQAEgNgKgLIgFgFIATAEIAIADQgIgRgVAAQAAgEADgCQACgCACgDQgKACgEALQgDgEgFgDQgSgFgPAJIgHAEQAKACAKAAIAGAAQgOAGgGAQQgBABAAABQAAABAAAAQAAABAAAAQABAAAAAAQAIgIAKgFIAFgDQgGAIAAAMIAAAGIAEgJIACgFQAFAKgGAIQAFAAADACIAAADIAAALIAAAKIABAKIAFARQADAJABAKIAAAEIgYgLQgKgEgFgPQgKgggfAEQgLAAgHgGQgVgSggABQgkADgEgdQgDgXgTgLQgQgJgKgPIgSgaQgPgYgUgVQgTgUgUgPQgJgegYgOQgZgPgfAGQgHADgFgEQgIgFgIgIQgNgOgRgMQgZgPgKgYQgMgegdAGQgWAFgNgQQgRgZgUgTQgUgWgXgOQgVgPgcgJQgIgDgHACQgVAHgUgDQgcgDgagMQgbgNgagPQgNgHgNgBQgcgBgZgMQgbgMgbADQgdAFgZAOQgZAOgXALQgEAAgLgEQgcgMgcAIQgaAIgaANQgeAPgWgXQgKgKgQAGQgHAEgMABQgbADgXgPQgTgNgXgJQgcgKgbAKQgcAKgdAHIgKgGQgbgNgegHQgcgFgaAMQgSgLgXgGQgpgOgcAfQgHgNgVAMQggATgUgVQgXgXgcAWQgXgVgWANQgogTgiAUQgGADgHgDQgRgJgTgCQgngGgXAeQglgKjAgFQjAgEiEBBIgGiIMA4HAAAIAALNg");
	this.shape_31.setTransform(143.7,36.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("ACXDdIgTgCIgUAAIgTAAQgKAAgJgCIgTgCIgRABIgDAAIgQgCQgJgCgJgEQgHgEgDAEQAGgJAGgGIACgCIAKgHIAEgDIAQgIQAKgDAGgIQACgDAGABQAKABAJAEIARAIIADABQgKAFgBALQgCALAMgCIAUgCQAIABAJgCQAGgBAEACQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAIAIARQACAEgFAAIgBAAgABDDAIAEgBIABgBQgDAAgCACgAA/C5IAEgIIgEAIgAA6C3QAAgGAFgFQgFAFAAAGgAgSC/QgOABALgHIgcgDQAEgEAFgDIATgFQALgDAHAIIADADQAEAFALABIgKAHIgXAAgAAPC4IAAAAgAiSi/QgEgDgFAAQAGgIgFgKQAEgFAGgDIgBAEIAGACQgBABAAAEQgDAHABAIIACAFIgEABIgCgDg");
	this.shape_32.setTransform(247.1,81.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5F3A01").s().p("As4GTQgcgCopACIAArgQCFhBC/AEQDAAFAlAKQAXgeAnAGQATACASAJQAGADAGgEQAigTAoATQAXgNAWAVQAdgWAWAXQAUAUAhgTQAUgMAIANQAbgeAqANQAWAHASAKQAagMAcAGQAeAGAbAOIALAFQAcgGAcgKQAbgKAcAKQAXAJAUANQAWAPAbgDQAMgCAHgDQAQgHAKAKQAVAYAegPQAagNAbgIQAcgIAcALQAKAFAFAAQAWgLAZgOQAZgPAdgEQAbgEAbANQAZALAcABQAOABAOAIQAZAOAbANQAaANAcADQAUADAVgHQAHgDAIADQAcAJAVAPQAXAPAUAVQAUAUARAYQANARAWgFQAdgHANAfQAKAYAYAPQASALAMAOQAIAJAIAGQAFADAHgCQAfgHAZAQQAYAOAJAeQAUAPATAUQAUAUAPAYIASAaQAKAOAQAKQATALAEAXQADAcAlgCQAfgBAVASQAIAGAKgBQAggDAJAgQAFAOAKAFIAYALIAIADIADACIAEABIAOAFQAGACAFAFQgEAHAEAFQAEAHAPAEIAjAKQAPAEAJAHQAFAEADAFQgNgBgPACQgjgGghANIgEACIgEABQgngGgmACQgmADgmAGQgmAGgkgEQgjgDglADIhCAFIhKAFQgkACgkABQgkABgkADIhMAIIhEAFIhEAGIhMAIIhGAIIhOAHQgjAEgjgBIhMgCQgngBgnACIgYABQg4gQhLAEQhOADhOgHQhCgGhCAMQhGANhGAGQhKAHhJAMQg1AJg0AAQgYAAgYgCg");
	this.shape_33.setTransform(105.3,48);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEA512").s().p("AB1CaQgTgFgNgJIhKgXIgBgEQAIgBAIgDQgLgKgVABQgQABgQgDIgkgFIgfgEIgkgFQgGgBACgHQAEgKgQgCIgjgGQgSgDgSgBQgGAAAAgEQAAgMgVABQgQABgOgGIgFgCIgFAAQgTgBgRgIQgJgDgJgCQgXgDgLgMQgEgEgHABQgVAAgQgKQgFgDgDgEQgJgMgOgHQgRgIgSgEQgSgEgUAAIgXgBIgPgBIgkgDQgVgBgMgPQgHgJAKgFQARgKASgHIAhgNQASgHASgEQASgDARgFQASgFASgCIA/gHIBdgMQAvgGAmgJQgHgEgBgKIADgCIAEAAIAAgBQAhgOAjAHQAPgCANABQgDgFgFgEQAJgCAKABQAKABAFAHIgGACIADADIgLADIgOADIgVADIgIABQgDAEgEgBQgNgEgOABQgKAAgCAGQAGAIgMAAIgGACIgCABQgEACABAFQgMAGgMgCQgIgBgHABQgBAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgSAEgRgBQgJAAgFAEQgZAJgZgDQgOgBgKAGIgnAHIgiAIQgRAEgSADIgkAHIglAKQgSAFgIANQgCAEAFACQARAIATAEQAHACAIgBIAkgCQAUgBATADQAVADAPAMQAQAMAQAHQAKAEAEAIQAGAMASgBQAPgBAPAEQATAEATABQAXABAFAOQAEANAbgEQAKgCALAEIAcAIIAVAEQAHAIAIAEQAHADALAAQAFAGAHAAQAIAFAKgCQAKgBAKAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAGAHAKAAIALgBIAkAMQADABADgDIAOgBQAKAAAHAHQAEAEACAFQAIACAIAAQAJgBAJADIAMAEQAJADAHAGIAEAEQAMALASAGQAFABIEAmIAAAmQoHg5gKgDg");
	this.shape_34.setTransform(258.8,97.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0066FF").s().p("ABlCrQgSgGgMgLIgEgEQgHgHgJgDIgMgDQgJgDgJABQgIAAgIgDQgCgEgDgFQgHgGgKAAIgPABQgDADgDgBIgkgMIAHgBIAIgBIAHgBIAAAAIAAAAIADAAIABAAIATABIAQAAIARABIASABIASABIACAAIAAAAIAAAAIACAAQAGgBAFgFIABgBIAAgBQgGgIgKgCIgQgEIAQAEQAKACAGAIIAAABIgBABQgFAFgGABIgCAAIAAAAIAAAAIgCAAIgSgBIgSgBIgRgBIgQAAIgTgBIgBAAIgDAAIAAAAIAAAAIgHABIgIABIgHABIgLABQgKAAgGgHQgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgKgBgKACQgKABgIgFQgHABgFgGIgEgGIADgFIgFgBIgHgBQgLAAgJgDIgEgBIAEgBIAEAAIgFgCIABACIgEABIAEABIgVgDIgcgIQgLgEgKACQgbAEgEgNQgFgOgXgBQgTgBgTgFQgPgEgPABQgSABgGgMQgEgIgKgFQgQgGgQgMQgPgLgVgDQgTgDgUABIgkACQgIAAgHgBQgTgEgRgJQgFgCACgDQAIgOASgEIAlgKIAkgHQASgDARgEIAigIIAngIQAKgFAOABQAZADAZgJQAFgEAJAAQARAAASgDQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAQAHgBAIABQAMABAMgFQgBgFAEgDIACAAIAGgCQAMgBgGgHQACgGAKgBQAOAAANAEQAEABADgEIAIgCIAVgCIAOgDIALgDIgDgDIAGgCQgFgHgKgBQgKgBgJACQgJgIgOgDIgkgKQgPgEgEgHINcAAIAAGjQoEgmgFgBgAA1B9QAEAAADgDIAAAAIABgBIABgCQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQADgCAFgBIACAAIAMgBIABAAIAAAAIACAAIADAAQAEAAACgDQACgDAAgCQAAgEgKgCIgSgDIASADQAKACAAAEQAAACgCADQgCADgEAAIgDAAIgCAAIAAAAIgBAAIgMABIgCAAQgFABgDACQAAAAAAABQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIgBACIgBABIAAAAQgDADgEAAIAAAAIgBAAIgBAAIAAgBIgegCQgEAAgDACQADgCAEAAIAeACIAAABIABAAIABAAIAAAAgAhBBfQAJACAJAAIAUAAIATAAIASACQAHABgCgFIgIgRQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgEgCgFACQgKABgIgBQAAgEgDgDIgMgLQgEgEABgBIgDgBIgSgIQgJgEgKgBQgGgBgCADQgFAIgKADIgRAIIgEADQgKgBgFgEIgEgEQgGgIgLADIgTAGQgGACgEAEIAdADQgMAHAPgBIAXABIgBABQgIAGgFAJQACgEAJAEQAJAEAJACIAPACIAEAAIARgBIATACgAjSBCQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAQAKAEAJABQgJgBgKgEQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgIAMAAQgMAAAAAIIAAAAgAjPAtIgCAAIgDgBIgDAAQgUgDgVAAIgBAAIAAAAIgFAAIAAAAIgGAAIgCgGIgDADQABADAEAAIAGAAIAAAAIAFAAIAAAAIABAAQAVAAAUADIADAAIADABIACAAgAkuAbIAPACQAKABAHAFQgHgFgKgBIgPgCIgBAAIgCAAIAAAAIgCAAIAAAAIAAAAQgFAAgFACIAAAAIAAAAQAFgCAFAAIAAAAIAAAAIACAAIAAAAIACAAIABAAgAidh6IgPAHIgRAFIgPAGIgNAFIgJAEIgKAGIAKgGIAJgEIANgFIAPgGIARgFIAPgHIARgIIgRAIgAj/hrIgMACIgMACIgKACQgMAEgNAAQgJAAgHADQAHgDAJAAQANAAAMgEIAKgCIAMgCIAMgCQALgCAKgFIgIgFIAAgBQAAgFAJgCQAIgBAIABIACAAIABAAIAAAAIACAAIADAAIADgBQACAAABgEQgGgEgKgCQAEgCAEgBQAJgCAKAAIABgBIABAAIABAAIAAAAIAGABIAAAAIAGABIACABIAEAAIAGABIAAAAIABAAIAGgBIACAAQgDgDAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAIgFAKgBQAIgBAJABIARAAIARgCQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBQAAgGgIgBIgQgCIAQACQAIABAAAGIAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgRACIgRAAQgJgBgIABQgKABgIAFQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAABADADIgCAAIgGABIgBAAIAAAAIgGgBIgEAAIgCgBIgGgBIAAAAIgGgBIAAAAIgBAAIgBAAIgBABQgKAAgJACQgEABgEACQAKACAGAEQgBAEgCAAIgDABIgDAAIgCAAIAAAAIgBAAIgCAAQgIgBgIABQgJACAAAFIAAABIAIAFQgKAFgLACgAitBYQgIgDgHgJQAJADALAAIAHABIAFABIgDAFIAEAGQgLAAgHgEgAi8BKg");
	this.shape_35.setTransform(261.2,93.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.contentsurfshopscene, new cjs.Rectangle(-36.9,0,361.3,198.8), null);


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
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmPP',{loop:-1});
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
		
		 window.open ("pp_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pp_Scene3.html","_self");
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
(lib.pp_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:106});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_1 = function() {
		playSound("futureperfecttense");
	}
	this.frame_25 = function() {
		playSound("theverbformindicatingbefore");
	}
	this.frame_105 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_126 = function() {
		this.gotoAndPlay("scene4_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(80).call(this.frame_105).wait(21).call(this.frame_126).wait(1));

	// Layer 5
	this.instance = new lib.contentfutureperfecttense();
	this.instance.parent = this;
	this.instance.setTransform(276.5,196.3,1,1,0,0,0,238.3,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.contentsurfshopscene();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.7,60.5,1.436,1.436);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape.setTransform(341.8,42.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhEBTQgPgMAAgQQAAgIAEgFQAFgFAJAAQALAAAGALQAHAQAZAAQAVAAAUgKQAWgJgBgMQAAgQgMgFQgKgEgbgBQgWAAgSgHQgXgKABgUQgBgZAbgUQAagVAeAAQANAAASAGQAXAHgBAJQAAAHgEAFQgFAFgIAAQgGAAgMgCQgMgDgGAAQgQABgOAHQgPAIAAAJQAAAFAFADQAEADAJACIAgACQAcACARANQASAPAAAbQAAAggmARQgdANgjAAQghAAgSgOg");
	this.shape_1.setTransform(324.3,43.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhYBiQgGgFAAgIIABgPIABgPIABgXIAAgWIAAgYIgBgYIgBgWIgBgXQAAgIAGgFQAHgHAIAAQAJAAAMARQA4BSA4AzIAAgTIgBhUIgBgNIgBgPQAAgRASAAQAVAAgBBAIAAAUIAABQIgCAUQgDAQgQAAQgJgBgLgJQgxgtg9hOIAAAnIAAAfIABAeQAAAlgTAAQgJABgFgGg");
	this.shape_2.setTransform(304.7,43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_3.setTransform(286.3,42.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLBcQgHgFAAgHIABgFIABgGIgBgSIgBgRQAAgRgCgdIgEguIgGAAQgdAAgQgEQgOgDgBgNQABgHAEgFQAFgGAJAAIAUADIAVABIAWAAIAXgBIAcACIAdABQAIAAAGAFQAEAFAAAHQAAAIgEAFQgGAFgIAAIgegCIgfgBIAEAzQACAgAAATIABANIAAANQAAAJgDAIQgGAKgJAAQgGAAgFgFg");
	this.shape_4.setTransform(268.9,42.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLBcQgHgFAAgHIABgFIABgGIgBgSIgBgRQAAgRgCgdIgEguIgGAAQgdAAgQgEQgOgDgBgNQABgHAEgFQAFgGAJAAIAUADIAVABIAWAAIAXgBIAcACIAdABQAIAAAGAFQAEAFAAAHQAAAIgEAFQgGAFgIAAIgegCIgfgBIAEAzQACAgAAATIABANIAAANQAAAJgDAIQgGAKgJAAQgGAAgFgFg");
	this.shape_5.setTransform(239.6,42.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag4BNQgTgUAAgbQAAgpAlgtQAgglAgAAIAKAAIAIABQAGgFAHAAQANAAADAPQADAKAAAPQAAAGgEAFQgFAHgJAAQgMAAgFgMQgDgGgCgBQgCgBgIAAQgQAAgUAZQgdAiAAAeQAAAOAJAKQAJAKANAAQAMAAANgHIATgMQAKgHAFAAQAIAAAFAGQAFAFAAAHQAAAHgHAGQgjAdgjAAQgcAAgUgVg");
	this.shape_6.setTransform(222.5,42.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_7.setTransform(206.5,42.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhABmQgFgGAAgHIAAiRIAAgPIAAgOQAAgHAGgGQAEgEAIAAQAFAAAEABQAOgCANgBIAVgCQAOABAWAFQAcAIAAAJQAAAIgFAFQgFAFgIABIgGgCQgRgFgXAAIgRABIgWADIAAAqQATgFANAAQAWAAASACQAQACAAAPQAAAIgFAEQgFAFgIAAIgUgBIgSgBQgKAAgWAFIAABQQAAAHgGAGQgGAEgHAAQgIAAgEgEg");
	this.shape_8.setTransform(190.4,43);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_9.setTransform(174.2,42.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_10.setTransform(157.8,42.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4BgQgFgEgBgHIAAgjQAAgUADgmQACgnABgTQAAghASABIAMgCIASAAQAYAAAXAQQAXASAAAaQABAggaATQgXAQgfAAIgKAAIgBA6QAAAHgEAEQgGAFgHAAQgHAAgEgFgAgXgxIgCAsIAIABQATAAAOgKQAOgKAAgQQAAgLgOgIQgMgIgOAAIgIAAIgEAAIgBASg");
	this.shape_11.setTransform(142.5,42.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_12.setTransform(116.5,42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhEBfQgGgFAAgIIABgcIAAgdIAAhlQAAgIAFgHQAHgJALABIAgADQARACAMAGQA2AbAAApQAAAQgLAMQgMANgWAJQAhATARATQAFAFAAAGQAAAHgGAGQgFAFgHAAQgHAAgGgGQgmgkgtgOIABApQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgnADIAGABQAfAAAOgHQAHgDAFgGQAFgFAAgDQAAgOgSgOQgQgMgTgCIgPgBg");
	this.shape_13.setTransform(99.9,42.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgzBXQghgaAAg/IABgSIAAgSIABgOIAAgPQAAgKAEgJQAFgMAIAAQAHAAAGAEQAGAFAAAIIgBAWIAAAVIAAASIgBASQAAASAFAQQAFAVAKAHQAFAFAVAAQAgAAAMg6QAGgdAAg2QAAgGAEgHQAGgJAKAAQAJAAAEAGQAEAGAAAFQAAAygFAcQgHArgVAcQgKAMgNAJQgQAKgPAAQghAAgQgMg");
	this.shape_14.setTransform(81.6,43.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLBcQgHgFAAgHIABgFIABgGIgBgSIgBgRQAAgRgCgdIgEguIgGAAQgdAAgQgEQgOgDgBgNQABgHAEgFQAFgGAJAAIAUADIAVABIAWAAIAXgBIAcACIAdABQAIAAAGAFQAEAFAAAHQAAAIgEAFQgGAFgIAAIgegCIgfgBIAEAzQACAgAAATIABANIAAANQAAAJgDAIQgGAKgJAAQgGAAgFgFg");
	this.shape_15.setTransform(63.3,42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgzBXQghgaAAg/IABgSIAAgSIABgOIAAgPQAAgKAEgJQAFgMAIAAQAHAAAGAEQAGAFAAAIIgBAWIAAAVIAAASIgBASQAAASAFAQQAFAVAKAHQAFAFAVAAQAgAAAMg6QAGgdAAg2QAAgGAEgHQAGgJAKAAQAJAAAEAGQAEAGAAAFQAAAygFAcQgHArgVAcQgKAMgNAJQgQAKgPAAQghAAgQgMg");
	this.shape_16.setTransform(44.4,43.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhABmQgFgGAAgHIAAiRIAAgPIAAgOQAAgHAGgGQAEgEAIAAQAFAAAEABQAOgCANgBIAVgCQAOABAWAFQAcAIAAAJQAAAIgFAFQgFAFgIABIgGgCQgRgFgXAAIgRABIgWADIAAAqQATgFANAAQAWAAASACQAQACAAAPQAAAIgFAEQgFAFgIAAIgUgBIgSgBQgKAAgWAFIAABQQAAAHgGAGQgGAEgHAAQgIAAgEgEg");
	this.shape_17.setTransform(27.3,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.UI}]}).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '323BC21857255C40AEDB480CAC75FE3E',
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
		{src:"sounds/moog_blip.mp3", id:"moog_blip"},
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
an.compositions['323BC21857255C40AEDB480CAC75FE3E'] = {
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