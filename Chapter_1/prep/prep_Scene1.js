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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfBEQgDgDAAgEIABghIAAggIgCghIgBgRQAAgGACgEQADgFAFAAQADABACACQACACAAADIAAADIgBAEQAHgFAHgCQAGgCAGAAQARAAAIAPQAGAMAAATQAAASgKALQgKANgRAAQgHAAgKgDIAAAnQAAAEgDADQgCACgDAAQgEAAgCgCgAgHgrQgEACgHAGIABAnQAJADAIABQAKgBAGgHQAFgGAAgLQAAgOgEgIQgEgHgHAAQgHAAgGADg");
	this.shape.setTransform(254.1,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHA8QgCgCAAgEIgBgOIAAgPIABgUIABgSQAAgFACgBQACgDAEAAQACAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgCACQgCADgDgBQgDABgCgDgAgFgtQgCgDAAgEQAAgDACgDQAEgEADAAQADAAAEAEQACADAAADQAAAEgCADQgEADgDAAQgDAAgEgDg");
	this.shape_1.setTransform(247.3,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_2.setTransform(239.9,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEADgDQACgCAEAAQACAAAEAEQACACAHABIAJABQAGAAAGgBQAHgDABgFQAAgMgQgDIgIgCQgLgCgFgEQgGgEgBgJQAAgSARgGIAPgGQALgDAFgCQADgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgDgDIgBgJIgTAGQgNAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgKAGgOAAQgKAAgLgEg");
	this.shape_3.setTransform(230.5,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAABAKIAAAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_4.setTransform(222.4,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_5.setTransform(213.1,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHA8QgDgCAAgEIAAgOIAAgPIAAgUIABgSQAAgFADgBQACgDADAAQADAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgEgtQgDgDAAgEQAAgDADgDQACgEAEAAQADAAADAEQADADAAADQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_6.setTransform(206.6,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_7.setTransform(200,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAbArIgGgHIgOAHQgGACgDAAQgTAAgKgLQgIgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQAMAFAAAHIgCAEIgCAKIAAARQAAALACAGIAEAPIACAEIABABQAAAEgCACQgDACgCAAQgCAAgEgDgAgNgUQgKALAAAMQABAOAFAHQAEAGAKAAQAHAAAFgDIAJgGQgDgVAAgKIABgIIABgJIgGgCIgDgBQgLgBgKALg");
	this.shape_8.setTransform(191.7,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIA8IAAgeIABgeIAAgdIABgfQAAgHAHgBQAIABAAAHIAAAfIgBAdIAAApIgBAUQgBAHgGAAQgJABABgJg");
	this.shape_9.setTransform(185,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbAkQgOgLAAgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgPAGQgNAGgMAAQgSAAgLgJgAgRgWQgGAIgDAPIAZgLQAOgIAGgFQgGgHgNAAQgJAAgIAIg");
	this.shape_10.setTransform(178.2,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHABADAFQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_11.setTransform(169.5,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAFgBQAHgDAAgFQAAgMgPgDIgIgCQgLgCgFgEQgHgEAAgJQAAgSARgGIAPgGQALgDAFgCQADgCAEAAQADAAADADQACACAAADIABAHIABAHQAAAEgCADQgCACgEAAQgEAAgCgDIgCgJIgTAGQgNAFAAAIIAFACQASACAJAHQANAIAAAQQAAANgLAHQgJAGgPAAQgLAAgJgEg");
	this.shape_12.setTransform(155.7,16.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATAuQgIAAgGgWIgDgTIgCgSIgHAPIgNAiQAAADgCACQgDAFgFAAQgHAAgGgZQgDgNgCgVIgCgMIgCgNQAAgDADgCQACgDADAAQAHAAABAHIACAMIACANIAEAkQAJgZAKghQADgJAGAAQAGAAADAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQADAAADACQADACgBAEIAAADQgHAcgKAhQgDAHgFAIQgCAFgFAAIgBgBg");
	this.shape_13.setTransform(146.1,16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBASgJAMQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_14.setTransform(135.6,16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAIQgEAGgHANQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgBQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAGAAAOIABAQIACARIACARIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_15.setTransform(126.5,14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAuQgMgFAAgHQAAgEACgDQADgCADAAQADAAAEAEQACACAHABIAKABQAFAAAFgBQAJgDgBgFQAAgMgQgDIgHgCQgLgCgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgCQAEgCAEAAQAEAAACADQACACAAADIABAHIABAHQAAAEgCADQgDACgDAAQgEAAgDgDIgCgJIgTAGQgMAFAAAIIAFACQASACAJAHQAOAIAAAQQAAANgMAHQgKAGgNAAQgMAAgKgEg");
	this.shape_16.setTransform(117.1,16.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663366").s().p("AARAmIgCgRIgBgRIAAgHIAAgHIAAgDIABgEQgBgHgDAAQgHAAgGAJQgGAKgEANIgBAHIgBAIIgBAHIAAAHQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIAAgHIgBgHIACgXIABgVIgBgIIAAgIQAAgEADgDQAEgDAEAAQAMAAAAANIAAABQANgNAMAAQAPAAAHANQADAJAAASIAAAGIAAAEIACARQACAKAAAGQAAAFgEADQgCADgGAAQgKAAgBgKg");
	this.shape_17.setTransform(103.7,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663366").s().p("AgaAjQgNgLAAgUQgBgRALgOQAMgRAWgBQARAAAJANQAJAMAAATQAAARgKAOQgMAPgSAAQgPAAgLgKgAgLgOQgFAIAAAKQAAAKAFAFQAFAFAGAAQAGgBAFgFQAHgFAAgKQABgagPAAQgJABgGAIg");
	this.shape_18.setTransform(94.5,16.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663366").s().p("AgKA8QgDgDAAgFIAAgPIAAgPIABgSIAAgSQAAgFADgDQADgDAFAAQAEAAAEADQADADAAAFIgBASIgBASIABAPIAAAPQAAAFgDADQgEADgEAAQgEAAgEgDgAgHgpQgDgEgBgFQABgFADgEQAEgDAEgBQAGABADADQAFAEAAAFQAAAFgFAEQgDADgGAAQgEAAgEgDg");
	this.shape_19.setTransform(88,14.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663366").s().p("AgHA6QgDgDAAgFIAAgJIAAgJIgBgqIgQgBQgKgBAAgKQAAgEADgEQADgDAFAAIAOABIAAgJIgBgIQAAgFAEgDQADgDAFAAQALAAAAAVIAAAHIAJgBIANABQAGADAAAHQAAAFgDADQgDADgFAAIgEAAIgEAAIgIABIABArIAAAEIAAAEQAAAUgMAAQgDAAgEgDg");
	this.shape_20.setTransform(81.4,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663366").s().p("AgKA8QgDgDAAgFIAAgPIgBgPIABgSIABgSQAAgFAEgDQADgDAEAAQAFAAADADQADADAAAFIAAASIgBASIAAAPIAAAPQAAAFgDADQgDADgFAAQgEAAgEgDgAgHgpQgEgEAAgFQAAgFAEgEQAEgDAFgBQAEABAFADQADAEAAAFQAAAFgDAEQgFADgEAAQgFAAgEgDg");
	this.shape_21.setTransform(75.3,14.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663366").s().p("AgWArQgNgEAAgJQAAgJAKAAQADAAAIADQAHACAEAAQAPAAABgHQAAgEgMgFIgVgKQgLgIAAgMQAAgRARgFQALgEATAAQAJAAAEACQAGADgBAIQAAAPgIAAQgIAAgCgHIgGAAQgUAAAAAFQAAADAMAGQAQAHAGAEQAMAIAAALQAAAOgNAIQgLAGgPAAQgKAAgJgEg");
	this.shape_22.setTransform(68.4,16.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663366").s().p("AgaAjQgNgLAAgUQgBgRALgOQAMgRAWgBQARAAAJANQAJAMAAATQAAARgKAOQgMAPgSAAQgPAAgLgKgAgLgOQgFAIAAAKQAAAKAFAFQAFAFAGAAQAGgBAFgFQAHgFAAgKQABgagPAAQgJABgGAIg");
	this.shape_23.setTransform(59.8,16.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663366").s().p("AgiBDQgDgEAAgEIAAggIAAgfIgBgfIgBgRQAAgGADgFQADgGAHAAQAEABADADQADADAAAEIAAABQAGgDAGgCIAKgCQATAAAJARQAGAMAAATQAAASgKAMQgLANgTgBQgGAAgIgBIAAAiQAAAEgDAEQgEADgEAAQgFAAgEgDgAgEgnQgFACgGAGIABAhQAIACAGAAQAJAAAEgFQAEgFAAgKQAAgLgBgEQgCgKgIAAQgFAAgFACg");
	this.shape_24.setTransform(51,18.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#663366").s().p("AgbAkQgPgLAAgTQAAgUAMgOQALgQAUAAQAPAAAKAEQAMAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAIgFQAGgEAFAAQAIAAABAJQgBAJgOAGQgLAFgNAAQgTAAgMgJgAgKgTQgGAFgDAKIASgIQALgFAGgEQgFgDgKAAQgGAAgFAFg");
	this.shape_25.setTransform(41.5,16.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663366").s().p("AggArQgCgCgBgGIAAg1IAAgHIAAgIQAAgFADgDQAEgDAEAAQAJAAADAKQANgMASAAQARAAAAAXIAAAFQgBANgLAAQgLAAABgLIgBgIQgRADgIAQIAAAoQAAAGgEACQgDAEgFAAQgFAAgDgEg");
	this.shape_26.setTransform(32.9,16.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663366").s().p("AgiBDQgDgEAAgEIAAggIAAgfIgBgfIgBgRQAAgGADgFQADgGAHAAQAEABADADQADADAAAEIAAABQAGgDAGgCIAKgCQATAAAJARQAGAMAAATQAAASgKAMQgLANgTgBQgGAAgIgBIAAAiQAAAEgDAEQgEADgEAAQgFAAgEgDgAgEgnQgFACgGAGIABAhQAIACAGAAQAJAAAEgFQAEgFAAgKIgBgPQgCgKgIAAQgFAAgFACg");
	this.shape_27.setTransform(24.2,18.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAdArIgGgaIgVAEIgWAEIgOAhQgCAEgFAAQgEAAgCgDQgCgCgBgEQAAgEANgaQgBgCgBgDQABgGAHgDIAZgnQASggAFAAQAGABADAIIAFAdIAMA4IAGANIABAJQABADgDADQgCACgEAAQgHAAgGgTgAgKAGIAegGIgHgfg");
	this.shape_28.setTransform(8.2,14.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,1,1).p("A0WiKMAotAAAIAAEVMgotAAAg");
	this.shape_29.setTransform(130.3,15.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("A0WCKIAAkUMAotAAAIAAEUg");
	this.shape_30.setTransform(130.3,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,262.6,30.7);


(lib.prepwordsbetween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCAAgEIgBgIIgBgHIACgXIABgXIAAgIIgBgIQAAgEADgCQACgCAEAAQAHAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape.setTransform(29.3,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAGgFQgHgHgMAAQgKAAgGAIg");
	this.shape_1.setTransform(20.1,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_2.setTransform(10.8,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAuQgIAAgGgWIgDgTIgCgSIgHAPIgNAiQAAADgCACQgDAFgFAAQgHAAgGgZQgDgNgCgVIgCgMIgCgNQAAgDADgCQACgDADAAQAHAAABAHIACAMIACANIAEAkQAJgZAKghQADgJAGAAQAGAAADAKIAGAeIAFAfIAGgWIALgsQABgFAGAAQADAAADACQADACgBAEIAAADQgHAcgKAhQgDAHgFAIQgCAFgFAAIgBgBg");
	this.shape_3.setTransform(0.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_4.setTransform(-9.6,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAGADAJAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQACACAAADQAAAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgIAIg");
	this.shape_5.setTransform(-18.1,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_6.setTransform(-27.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordsbetween, new cjs.Rectangle(-35.6,-13.8,71.3,27.7), null);


(lib.prepwordsbeneath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgPATAAQAHgBADAGQADAEAAALIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFAKIAAAtQAAAJgIgBQgHABAAgJg");
	this.shape.setTransform(20.7,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbAkQgNgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgLgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_1.setTransform(11.9,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA5QgMgMAAgSQABgXALgMQAMgNASAAQAKAAAEADIAIAFQABgjACgMQACgHAGAAQAIAAgBAIQABAMgEAnIgBAXQAAAcACAOIAAACQAAADgBACQgDADgDAAQgFAAgDgIQgGAFgGACQgHACgFAAQgSAAgLgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAKAAQAGAAAFgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape_2.setTransform(2,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCAAgEIgBgIIgBgHIACgXIABgXIAAgIIgBgIQAAgEADgCQACgCAEAAQAHAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_3.setTransform(-7.2,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkAxQgKgMgDgXIgBgpIAAgTIACgLQACgGAFAAQAIAAAAAOIAAAxQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAALIAAALIAAAKQAABfgyAAQgYAAgNgPg");
	this.shape_4.setTransform(-18,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAFAAAPIABAQIACARIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_5.setTransform(27.6,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_6.setTransform(18.6,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgTAAgJgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQALAFAAAHIgBAEIgBAKIgBARQAAALACAGIAFAPIACAEIAAABQAAADgCADQgDACgCAAQgCAAgFgDgAgNgUQgJALAAAMQAAAOAEAHQAFAGAKABQAHgBAFgDIAJgGQgDgVAAgKIAAgJIACgJIgFgBIgEgBQgLAAgKAKg");
	this.shape_7.setTransform(10.3,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAkQgOgLAAgSQAAgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgQAGQgMAGgMAAQgSAAgLgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgJAAgIAIg");
	this.shape_8.setTransform(1.4,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCAAgEIgBgIIgBgHIACgXIABgXIAAgIIgBgIQAAgEADgCQACgCAEAAQAHAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_9.setTransform(-7.6,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAGgFQgHgHgMAAQgKAAgGAIg");
	this.shape_10.setTransform(-16.8,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_11.setTransform(-26.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordsbeneath, new cjs.Rectangle(-34.4,-13.8,68.9,53.4), null);


(lib.prepwordsacross = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCgBgEIAAgIIgBgHIABgXIACgXIAAgIIgBgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape.setTransform(71.5,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAjQgLgLgBgUQAAgRAKgOQALgSAUABQARAAAIAOQAHANAAARQgBARgJANQgLAPgQABQgOAAgKgLgAgOgQQgGAJAAALQAAAMAHAHQAGAFAHABQAIAAAGgHQAHgGAAgNQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_1.setTransform(62.2,-2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfBDQgDgCAAgDIABgiIAAggIgCghIgBgRQAAgGACgEQADgEAFgBQADAAACACQACADAAADIAAADIgBAFQAHgGAHgCQAGgCAGAAQARAAAIAPQAGAMAAAUQAAAQgKAMQgKANgRAAQgHgBgKgDIAAApQAAADgDACQgCACgDABQgEgBgCgCgAgHgrQgEACgHAHIABAmQAJAEAIAAQAKAAAGgIQAFgFAAgLQAAgQgEgHQgEgIgHABQgHAAgGADg");
	this.shape_2.setTransform(53.4,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAxQgKgMgDgXIgBgpIAAgTIACgLQACgGAFAAQAIAAAAAOIAAAxQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAALIAAALIAAAKQAABfgyAAQgYAAgNgPg");
	this.shape_3.setTransform(42.6,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHAAADAGQADAEAAALIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFAKIAAAtQAAAJgIgBQgHABAAgJg");
	this.shape_4.setTransform(27.3,-3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_5.setTransform(18.5,-3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAmIgNghIgPgmIgBgDQAAgEADgCQADgCADgBQAFAAACAGIAVA4IAPglIAHgTQACgFAFAAQAEAAACACQADACAAAEQAAADgOAhIgRAlQAAAJgHgBQgGAAgCgHg");
	this.shape_6.setTransform(9.6,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgpAzQgRgPgBgXQAAgcARgXQAUgaAbgBQAbAAANANQAPANAAAbQAAAcgQAXQgSAagbABQgYgBgQgOgAgcgbQgOATAAAVQAAAQANAKQALAKARAAQASAAAOgVQAMgSAAgWQgBgTgIgJQgJgHgUAAQgTAAgOAUg");
	this.shape_7.setTransform(-1.3,-4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAvQgNgFAAgJQAAgDADgCQACgDADAAQADAAAEAEQACACAHABIAJABQAHAAAEgCQAIgCAAgFQAAgMgPgDIgIgDQgLgBgEgEQgIgEAAgJQAAgSARgGIAPgGQALgDAEgDQAEgBAEAAQADAAADACQACADAAADIABAIIABAHQAAAEgCACQgDACgDAAQgEAAgCgDIgCgJIgUAGQgMAFAAAIIAFACQASACAJAHQANAHAAARQAAANgLAIQgJAFgPAAQgKAAgKgDg");
	this.shape_8.setTransform(-17.6,-3.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAvQgNgFAAgJQAAgDACgCQADgDADAAQADAAAEAEQACACAHABIAKABQAFAAAFgCQAJgCgBgFQABgMgRgDIgHgDQgLgBgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgDQAEgBAEAAQAEAAACACQACADAAADIABAIIABAHQAAAEgCACQgDACgDAAQgFAAgBgDIgDgJIgTAGQgMAFAAAIIAFACQASACAJAHQAOAHAAARQAAANgMAIQgKAFgNAAQgMAAgJgDg");
	this.shape_9.setTransform(-25.9,-3.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAjQgLgLgBgUQAAgRAKgOQALgSAUABQARAAAIAOQAHANAAARQgBARgJANQgLAPgQABQgOAAgKgLgAgOgQQgGAJAAALQAAAMAHAHQAGAFAHABQAIAAAGgHQAHgGAAgNQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_10.setTransform(-34.5,-2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHAAADAGQADAEAAALIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNABgHAHQgHAFgFAKIAAAtQAAAJgIgBQgHABAAgJg");
	this.shape_11.setTransform(-42.6,-3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAlQgMgMAAgRQAAgQAMgSQAMgTAPgBQAHAAALAEQAMAFAAAHQAAADgCADQgCACgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgDgDQgGgEgKAAQgIAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAFAAAGgCIAKgGIAEgBQACAAACACQADADAAADQAAAGgNAFQgLAGgIAAQgPgBgMgJg");
	this.shape_12.setTransform(-51.3,-3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAdArIgGgaIgVAEIgWAFIgOAfQgCAFgFAAQgEAAgCgCQgCgDgBgEQAAgDANgbQgBgCgBgDQABgHAHgCIAZgnQASgfAFgBQAGAAADAJIAFAcIAMA5IAFANIACAJQABAEgDACQgCACgEABQgHAAgGgUgAgKAGIAegGIgHggg");
	this.shape_13.setTransform(-62,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordsacross, new cjs.Rectangle(-70.1,-19.6,148,27.7), null);


(lib.prepwordoutof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBHQgDgCAAgEIAAgCQACgLAAgMIgBgXIAAgXIgMABQgJAAAAgIQAAgJAPABIAIgBIABgNQACgSAIgJQAHgKASAAQAMAAAAAIQAAAIgKAAQgVAAgCAcIgBAFIATgBQANAAAAAIQAAAGgHABIgGABIgTABIgBASIAAAPIABAQQAAAPgCAJQgBAHgGAAQgDAAgCgCg");
	this.shape.setTransform(22.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_1.setTransform(13.3,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_2.setTransform(-0.1,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAoQgKAFgNAAQgKAAgIgFQgHgFgCgKQgDgWAAgQQAAgMACgPQACgGAGgBQAEAAADADQACACAAADIgCANIAAANIAAAXQABAJACAGIAGADIAEABQALAAAMgFIAAgQIAAgPQAAgSABgOQACgHAGAAQAEAAADADQACACAAADIgBAgIAAARIAAASIAAAFIAAAGQAAADgCADQgDACgEAAQgFgBgDgHg");
	this.shape_3.setTransform(-8.5,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpA0QgRgPAAgYQAAgbAQgYQAUgaAbAAQAbAAANAMQAOANABAcQAAAbgQAXQgSAbgbgBQgYABgQgOgAgcgbQgOATAAAVQAAAQANAKQALAJARAAQASAAAOgUQAMgSAAgVQAAgVgJgIQgJgHgUAAQgTAAgOAUg");
	this.shape_4.setTransform(-19.6,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordoutof, new cjs.Rectangle(-28.6,-13.8,57.3,27.7), null);


(lib.prepwordout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape.setTransform(11.2,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAoQgKAFgMAAQgLAAgHgFQgIgFgBgKQgEgWAAgRQAAgLACgPQACgGAGAAQAEAAACACQADACAAADIgCANIgBAMIABAYQABAKACAFIAFADIAGAAQAKAAAMgDIAAgRIAAgPQAAgSABgOQACgHAGAAQAEAAADADQACACAAADIgCAfIAAARIAAASIABAGIAAAFQAAAEgCADQgDABgEAAQgFAAgDgHg");
	this.shape_1.setTransform(2.9,-15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpA0QgRgPAAgYQgBgbASgYQASgbAcABQAbAAANAMQAOANABAcQAAAbgQAXQgSAagcAAQgXAAgQgNgAgdgbQgMASAAAWQAAAQAMAKQALAKAQAAQATgBAOgUQALgSAAgVQABgVgKgHQgIgIgUAAQgTAAgPAUg");
	this.shape_2.setTransform(-8.3,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordout, new cjs.Rectangle(-17.3,-32.5,34.6,46.4), null);


(lib.prepwordin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAjQgLgLgBgTQAAgTAKgNQALgRAUgBQARABAIAPQAHAMAAARQgBARgJANQgLAQgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAALAHAHQAGAGAHgBQAIAAAGgFQAHgIAAgMQABgegSAAIgBgBQgLAAgGAMg");
	this.shape.setTransform(6.2,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_1.setTransform(-2.2,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgDAAQgEAAgDgCQgCgCAAgEIAAgIIAAgHIAAgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAABAKIAAAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_2.setTransform(-10.4,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjA9QgDgCAAgEQAAgEADgCQACgCADgBIASgBIABgQIgBgNIAAgPQAAgRACgdIgLAAIgLAAQgDAAgDgCQgCgCAAgEQAAgIAIgBIAZAAQAPgBAZAEQAIABAAAIQAAAEgDACQgDACgDAAIgNgBIgOgBIgBAtIAAAOIAAAOIAAAPIAagBQAEAAACADQACACAAAEQAAADgCACQgCADgEAAIgOABIgOAAIgPABIgRACQgDgBgCgCg");
	this.shape_3.setTransform(-19.7,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCgBgEIAAgIIgBgHIABgXIACgXIAAgIIgBgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_4.setTransform(-1.9,-16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkA9QgCgDAAgDQAAgEACgCQADgDAEAAIARgCIABgOIAAgPIgBgOQAAgSACgdIgKABIgMAAQgDAAgCgCQgDgCAAgFQAAgHAIgBIAZgBQAPABAaADQAHABAAAIQAAAEgDACQgCACgDAAIgOgBIgNgCIgCAtIAAAPIABAOIgBAOIAaAAQADAAADACQACADAAADQAAAEgCADQgDACgDAAIgOAAIgOAAIgPACIgQABQgEAAgDgCg");
	this.shape_5.setTransform(-11.2,-18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordin, new cjs.Rectangle(-26.4,-33.3,39.3,53.4), null);


(lib.prepbubshorts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AirDIIAFgBQAUgGASgIIAFgCIAAgBIABgBIADANIgBgBQgPAHgQgBIgCABIgSAAgAi5C1QAKgJAIgKQAFgFgBgIIgBgHIgBgBIgBgCIgEgBIAAAAIgCgBIgEgCIgBgBIgEgBIgDgDIgBgBIAAgBIgBgDIgBgCIACgCIAAgCIAAgBIAAgBIAAgDIAAgCIABgBIABgBIAGgCIAHgCIABAAIAegBIABABIABAAQAMADAMgBIgBACQgEACgFAAIAAgDIgDAAQgZgCgUAFIAAAFIgFAAQAFAhAigEIACABIADAIIgEABQgQAJgTAFIAAAFIgEABIgMAGIACgBgApaCwIgBgCIAAgNQAAgJACgIQAUgPAZgCIAJADIAIABIABABIABACIADABIABACIAEAGIABACIAIgBQAFgCAFgDIAAACIAAAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgBACQgJAPgVABIAAgFQADgPgIgEIAAgDIgFAAQgeACgOAUIAAAFQAAAHABAGIgDABIgCgDgAkkCuIAEgBQANgDACgPQAHgBADgFIAAAEIgDAEIAAABIAAADIgBACIgCAEQgDABgBADQgFAAgDADIgKABIgBgBgAkrCrIgFgIIAAgCQAAgGgDgFIAAgBIAAgBIgBgCIgDAAQgHADgEAFIgNAFIgBABIAAABQgPACgPgDIABAAQAJgCAHgFIAEABQAFgFAGgBIABAAIABgCQALgEAHgHQAYACgEAkIgFgCgAm2ClIgEAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgYgIgTgDIACgBQABgXgLABIAAgBQAJgDAKAAIAAABIABACIAAABIACACIABABIAAABIAAABIABACIABABIAAAKIABACQADACACADIAAABIAUADIACABIAAADIABACIACAAIAAACgAkFCEIgCgBIgDAAQgCgKAAgJIAHABIAAAEIACADIAAACQADAJgDAKIgBABIgBACQACgFgCgHgAlQBhIgDgBQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAJgHAOAAIAGAAIAAADIgBAEQgDAFgGABIgEAAIgKgBgAE9AoIABgBIAMgKIgBgBIAGgFIAGAAIACABQAEABACADIAAADIAAADIgCADIgCAEQgHACgHAAQgHAAgHgDgAAhAPIgBgBIgDgFIABgBIABgBIAAgCIAAgBIADgBIAFgDQAGAAAEAEIAFACIAAACIgNgIQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAIAMAGIgBABIgBAEQgFADgFAAQgEAAgFgCgABRAOIAAAAQABgGgCgIIAAgEIAGgBIALADIABACIABACIAAAEIAAABIACACIgBABIAAADIgBABQgFABgFAAIgIgBgAhnghIAEgCQAKgBAHgIIABgCIADgFQABgCAAgDIAAgHIAHAFIgEgEIgHgIIgOgNIgBgBIgBgBIgBgDIAAgDQAVgGAWgJQgLAKgQAFIgBADIgBABIAAADIAAAEIABABIADACQAAADADADQAEAHAIADIABADIAAADIAAABIADADIABABIAAADIAAAEIgBAEIgCADIgBABQgLADgLAAQgJAAgIgBgAFtg/IgBgBIgEgFIgBgCIAAgCIgDgBQgCgCgBgCIgLgHIgDAAIgMAFQgVAMgXAFIAAgBIgCAAIgOgCIgBgCIAAgCQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQgBgJABgKIABgBIACgDIAAgBIAAgCIASgSIALAEIgCAJIgEABQgMAGgIAMQgBAGABAEQADAMARgCIAEgBIANgEQANgGAIgLIABgCIAAgBIACgCIAAgBIABgCIABgBQAGgFAIADQAGAIAJAFQARAGANgHQgEAEgGACIABADQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQALgIAHgMIABgFIAAgEQgDgTgHgPQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAGAAIABAAIABADQAHAVgIAXIgCABIgBABIAAAFIgDATIgCABIgBADIAAABQgGAFgIADIgTgFgAIVhCIgBgBIgCgDIgCgBIgBgCIAAgBIAAgBIAAgDIAAgCIAAgBIABgBIABgCIABgBIABgBIAAgCIAAgBQAAAGACAGQAAAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQALAKAOgJIAEgBQAFAFADAGQgSgGgWAFgAlZhWIAAgFIAAgKIADgBIABgDQANgEgCANIgBAFIgCAAQgBAJgEAAQgDAAgEgEgAIRhcQgNADgJgIIgBgBIgBgBIgCgDIgBgBIgCgCIAAgCIgBgDIgBgBIgCgCIAAgBIgBgCIgBgBIAAgBIAAgCIAAgBIAAgBIgDgCIAAgBIgBgEIABgEIAAgCIAAgBQAIgJALgEIAFgBIABgBIABgCIALgCQAGgCAGgDIABgBIAEgBIABgBQAIAFAKACIABACIAAADQgtAFgXAaQAAAFACAEQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABAAQAQAQAXgPIAEgBIAAAEQgEALgKAEIAAABIgCgCgAiYhuIAEgBQANgDAFAEQAEACgEAJIgBACIgFAAQgOAAgCgNgAhxh4IABgDQALgJAIgMIAAgFQADgkgfANIgQAIIgHgIQANgFALgKQANgEAMACIAFACIADACIACACIABABIAAADIAAABIACACIAAABIAAAKQABADgBACIgCACIAAACIAAACIgEAGIgDADIAAADIABAEIABADIAAABIADADIABABIAJAAIgIAFIgDABQgFAFgKAAIgLgBgAhKiCIAHgGQARgLARAFQAAADgBADQgEAKgFAHQgLgVgUAKgAJUikQgNgkgmAMIAAAFIgCAAQABAKgIAAIAEAFIgGgDIgCgCIgCgBIgBgBIAAgCIAAAAIgCgEIAAgDIAAgCIAAgCIAAgBIADgCQAPgMAXAHIACABIABABIAFACIAEABIABAAIAAABIAAABIADADQAGAIAIAHIACADIADAAIABABIgFADIgDAAg");
	this.shape.setTransform(6.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("ABfEcQADgSgIgHIgBgEQgDgSgBgUIAAgBIAAgPIAIgNIABgBQANgRAQgOIABgDQAJAAABACQAHAWgYAOIgDABIgKAEQADANARgDIAFAAIAFgCIABAAIARgFIABgDQAWgQAVAJIAAACIgBAFQgNAYgsgEIAAAFIgFAAIgEAAIAAAEQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABQgJAKgVgVQAOAdAPAAIACgEQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAnAGgJATQgBAEgKAAIgFAAQgbgDgMANIAAAFQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAIgDACIgFAAIAAgEgAEXDdQAFgFAJgDIAAgCQAQgCADgNIABgFQAQgRARAKQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgFABIgFADQAVAMACADQAFAGgNgBIgFABQgMAEgRAAIAAAFIgFAAIgUAEIAAAFIgEABIgEAAQgJAAADgKgAiEC/QAFgCADgEQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAXgEAOgMIABgEQADgCACAAIAFgCQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgJgDIgCAAIgCgBQgWgJgLgQIAEAAQAKgHATACIAFABIAFAAIADAAQAHABAEAEIABAEIAAAFQACAMgBAJQgCALgEAHIAAAEIAAABIgCAAIgDAAIgEABIgoASIgEABIgEAAQgJAAADgLgAn+DEQgLgBgEgIIgFAAIgFAAIgBgFQgBgDgCgCIAAgFIAAgKQAKgIATgBIAFAAQAAAMACALIACABQAbAJALgdIABgEQAQgTAIATIAAAFIgEABQgDABgCACQAMARAfgEIAAACIgEAAIgFAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAQgHAHgSgDIAAAFIgFAAIgdAEIgFAAIgYAAIAAAFIgFAAgAInC6QgugMglgVIgBgEQgEgGAAgKQAigPAAAoIAKAAQAOgIAPgGIAFgBIACAAQABAQgNADQAYALAAAJIAAAFIgEgBgAkNCJIgJABIAAAFIACAAIgLAGIAAgBIgEABQgMAIgSABIAAAEIgFAAIgHAAIgBAAIgBgCIgFAAIgBABIAAgDIAAgPQAKgOAYgDIAAgCIADgBQABgGgBgFQgEgNgXAFIAAgCQgMgDgMAAIAAgEIAAgPQAHgIAMgBIAFgBQAXAUAHgEQAHgDgHgbIgBgFQAHgPASgEIAEAAQAFAAAEABQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgBAFIgBAFIgBAAIgCAAIgBABIAAAEIAAACIgEADQgFAUAOgDIAAAAIABgBIAOAAIABgBIABgCIAagSIAAAAIABgCIACgBIAGgCIAAgBIABgBIADgBIABAAIACABIABAEQABAFgCAEQgIAFgFAGIgDADIgCABIAAADIgBAAIAAAFIgFAAQAKASAXgPIABgDQAigIAAAbIAAAFIgEABQgSAOgkgFIAAAFIgFABIgFAEQgBANAHAFQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIgBAEIgEAGIAAAFIAAAEIgJAGIgGAEQAEgogiAFgAkoBeIgBABQAAAHACAGQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAIAEAIAAIADAAQAKgCAIgIQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgFgFQgEgDgEgCIgHgBQgKAAgLAJgApbCMQgKgDABgNIgBgFQgNgbgPgbIAAgEQAFgDADgDQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQALgRAQgOQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgFQAEAAAEgCQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQANABACgJIAAgFQAJgIALgGIAEgBIAAAFQAdAWAfgoIADgBQANgBAFAGIABAEIgBAEQgLAPgVAGQgBAMAGAFIAEABQAQAGAcgEIAAADIgBAEQgMAWgogHQgEANAHAEQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQATAKgDAJIgBAFIgBADQgcAKgigDIgDAAQAHAagOAHIAAAFIgEABQgPAJgYAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAgApfAzQgBANAGAFIAEABQAuAKAKgwIgCAAIgBgDQgJgCgFgFIgFAAQgRAAgMAFIAAAFIgCAAQgDAOgJAFgAFDBtQAHgMALgJIABgDIADgBQAJgOgEgFIgDgDQgGgDgOACIgDABQgNAOgSgLIAAgCQgHgCADgJIAAgBIAAgFIAAgFQASAEAHgHQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAIACAAQAGgWgcgPQAOgBAGADIAFABQANAQAKgHIABgEIAAgFIAAgXQAIABgDgLIAAgEIAJgKIAMAAQAUAEgLAVIgBAEIgBAEIgBABIgIAKIgBACQgCAOAPgCIADAAIACgBIACAAIADgCQAdgVApgHIAAACQgFAfghAEIgBADIgEABIgKAJQAaAJAQAUQAJAMgIAHQgGAFgFAAQgJABgJgLIgBgEQgHgMgVACIAAAEIgEABQgbAQgMAgIAAAFIAAAFIgFABQgGADgEAAQgLAAgDgTgAFqAyIAAABQATAJARgJIAAgBIABgCIADgDIAAgBIAAgDIAAgFIAAgBQgCgHgGgCIgCgBIgNAAIgBAAIgCACIgBABQgIAAgCAHIAAACIgJAEQABAEACACIACAAIABADgAJcBaIgBgFQgLgWglARIAAgFIAAgFQALgKASgGIAAgDQAXgIgPgUQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgDIgigHIAAgFIAAgFQAFgDAJgDIABgCQAaACAQANIABADQANAGgDAXIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgEADgFADQgDANANgDIAFgBQAFAIAGAGIADABIAAAFQgEAKgKAEIAAAFIgEABQgOAIgHAAQgLAAAMgXgAA9BjQgIgBADgNQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAwgxhAAhIAAAFIgDABQgKAKgVgBIAAgFIAAgFQAKgOANgLQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAHAAQAAgLgggNIAAgFIAAgKQAKgJAPgCIAAADQANAVAYgOIABgCIAAgFIAAgUIAEgBIABgEQANAUARgSIAAASQAAAHAOgHIAAAKIAAADIAAAFIAAALQgCAegRANIAAAEQgBAAAAAAQgBAAgBABQAAAAAAAAQgBAAAAABQgSANgMATIgFAAgABRAEIgGADIAAABIAAABIAAACIgBABIgBACIAAAFIAAABIABACIADABIAAACIABABIABABIAQADIACgBIAHgDIABgBQACgGAAgGIAAgGIgCgBIgEgBIgBgBIgHgCIgFAAIgHACgACjBaQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQgLgZgZAGIAAgFIAAgdQADgDACgGQALADAIgEIAAABQAVgMgSgMIgCgDIgCgBIgGAAIgMgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAKgHgLgFIAAgFIAAgFQAJgOAOgLIABgEIAOAAIAFAAIADABQABAIgJABIAAAFIAAAFQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgEAHgIABIAAABQAGAMALAAIABAAIAAAAQAJAAAMgHIAAAAIABgBIABgBIABAAIABgEIAegEIAEAAIABAEIAAAFQAAAPgeAFIAAAFIgEABIgFACQAIAQAVADIAFABQAQAHgKANQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgEABQgYAGgZgMIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABQgDANAHADQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAAFQABAPgNAAIgCAAgAhsAHIAAgFIAAgNIAEgFIABgFIACAAQADgWgdAIIgFAAIgPAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgCgEAAgFQAFgCAEgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQANABAHgEQABgBAAAAQAAAAABAAQABgBAAAAQABAAAAAAIAcAaIABADQAFAIAGAGQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQAGARgFAHQAAABAAAAQgBABAAAAQAAAAAAABQAAABAAAAIgFAAIgIABQgNAAgIgGgADJgBIAAAAgADJgGQAegFAAgPIAAgFIgBgEIgEAAIgeAEIgBAEIgBAAIgBABIgBABIAAAAQgMAHgJAAIAAAAIgBAAQgLAAgGgMIAAgBQAIgBAEgHQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAIgBAEIgDAFQAIAJAQgIIAFgBIAAgEQATgFATgDIAAADIAEABIAEAIQANAcgyACIAAgFgAkkgVIABgEQAJgXgPgCIAAgCQgwAIgZAJIAAgDQgIgCADgKQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAegNAXgSIgBgDQgVgQgkAAIAAgFQAHgIALgEIABgDQASAUAFgPIABgFIAAgEIAAgPIAEgBQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgFQANgOAVgFIAFAAIgBAFQgCALgHAIQgDAQAHAFQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAOALAOgMQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIASgQIABgEQAHgHANgCIAFgBQAQgEgBAOIgBAFIgBAEQgOAPgTAKIgFAAIgEAAQgDARAMACIAFAAQASAJAfgBIAAACIgDAAQAAAOgRgEIAAAFQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgJAPgWgQIgFAAIgOAAQAAARACAQIADABIgBAEQgIASgLAAQgGAAgIgIgAkphnIgFABIgKAEQgCARALAEQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQALAKAMgLIABgEIABgEQAKgWgegDIAAAFgAhFgoIAAgDQgLgBgEAJIgBgFQgIgPgPgJQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgBIAAgFIAAgdIAAgoQAIABAGgEIAAgBIABAAQAAAxAOgxIAAgFQA3gPgnAyQAAABAAAAQgBABAAAAQAAAAAAABQAAABAAAAQALAIAWgFIAFAKIgBgBIgDAAIgBAAQgMAFgLAHQAAADABADIADAEIgEAAIAHAGIABABIAIAGIAGAEIABABIAAACIAAABIAAABIABACIACABIAAAEIgBAEIgCADIgCAEQgHAFgIABQgFgDgLgEgAhjhoIgEABQABAPATgCIACgCQADgJgEgDQgCgBgFAAIgKABgAFRhAQgPAAAFgUQAIgFAGgGIABgDQAKADAEgFQAEgFgDgCQgYgTgogBIAAgFIAAgPIAEgFIABgFIAdgEIAFAAQAVAJgKgUIgBgEIAAgFIAAgFIAAgOQAKgEAOgBIAFAAIAAABIgBADIgEAGIAHAJQAGAGAIAAQAIAAAIgGQAHgGAIgJIABgEQAcgEAGAFQAHAEgNANIgBABQgIAIgQAMIACAAQAVAIAggGIABgCQAtAJgoARQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIgEgBQgMgHgWADIAAAFIgFAAQgEASAHAHQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAAAFQABAIgCAGIgBAAIgBAAQgEAEgEADIgOAAIAAAAIgCgBQgNgCgHgMIgRAAIgIAIIAAACIAAABQgMAOgSAIIgFAAgAGFihQgJABgOAIQgDANAHAEIABADQALAKAMgMIABgDIADgBQAGgXgNAAIgCAAgAiJhKIgEgBQgGgEAAgKIAGgEIAEgBQAPAAgHATIgDABIgFAAgAJehQQgCgGAAgIIAAgEQADgNgNADIgEABQgSAJgRgKIAAgFIAAgFQAqgGAZgYQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCQgSgEgGgNIAAgFQAkgDACAgIABAFIgBAEQgIARgUADQAFAPgFATIAAAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBgABohnIgCAAQgCgYAAgZIADgBIABgEIAEgBQAPgSgJgKQgEgGgKgDIAAAFQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQgKgOAEgcIgFAAIgEgBIAAgCIgBgCIAAgFIgCgKIAWAFIAAAFQBCgbgkArIgBAEIgFAAIgFAAQAIAhAjgYQAdgUAZAUQgNATgfABIgFAAIgCAAQgCAIgKgDIAAAEIAAAAIgFAAQAKAGAJAHIAAABQAPALAKAOIgCACIgEADQgFACgJgCIgEgBQgGgFgFgDQgRgIgQAMQAAAHACAHQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIABAEQAMAZgeAAIgIAAgAjIjNIAAgPQAPgaAigHIAEgBQAFAAAEgBIABgDQAWgBgHAeIAAAFIgBAEIgEAFIAAAFQgFAFgFgFIgJgIQgSgLgkAdIAAgFgAgtjcIAAgEIAAgUQAFgMAPgCIAEAAQAegKAYgSIADgBIAFAAQAMAQgGANIgBAAIAAAAIgCAEIACAAIgBAFQgNARgPgRIAAgCQgUgEgIALIAAAFIgCAAQgBAVgTAAIgMgCg");
	this.shape_1.setTransform(1.3,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("ApFBrIAEgCQAOgKAOgHIAEAAQgRAMgVAJIACgCgAJDg7QgKgCgIgDIAAgCIAPAEIAIACIAAABIgFAAgAIphEIADABIAAAAIgDgBgAjPhUQALgCALgFIACAAIgBACQgOAFgQADIAHgDgAivheIAUgHIgDADIgQAGIgFACIAEgEgAGRheIACAAIgCAAgAiQhpIAIgCIAEgBIgRAGIAFgDg");
	this.shape_2.setTransform(-1,-20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ACXFNIABgIQAFgFAEgGQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQATAFAHASIAAABQAAAAAAAAQABAAAAAAQAAABABAAQAAAAABAAIAAAEIgFAAIgOAAIgFABIgGAAQgJAAgBgHgACVE/QgQgRgRgOIgCgCQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgBgCQgBgFAAgGQARgRAbALIAEABQAKAAAFgFIABgCQAEgFgGgHQgSgSgUgRQAOAAAPgCIAAgCQAjABAFgbIABgIIgCAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQgNgGgMABQgPABgNALQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgKAHgUgEIAAgEIACgBQA5gQgsgaQgGgDgFAHQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgQAUgTARIgDAAQgGgUgLgNQAdgNAXgSQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgEABQgXAQggAHIAAAFIgEABQgFADgKABIgEABQgQAJgJgPIgDAAQgBANgKABIAAgFQgCgMgRADIgEgBIgGgEQAMgNADgVIAAgFIAAgCQgKAAgKACIAAAFIgCAAQgCAIgKgDIAAgFIAAgFIAAgTQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAABAAQAPgegSACIAAgFIAAgYIAAgFQgEgbgLgVIAAgFIAFAAIACAAIABABIAHADQAVAIAWgLIABgCIADgDIAAgBIAAgDIAAgHIAAgEIgCgDIgBgBIAAgCIgBgEIgCgCIgCgCIgCgBIgBgBIgDgDIgBgCIgBgBIAAgBIgBgCIgDgBIAAgBIAAgBIgDgDIAAgBIABgDIABgBIAFgCIADgCIAEgBIACgBIAAgBIABgBQAEgBACgCQADgEAEgCIABgBIAAgBIADgDIABgBIAAgBIABAAIAEgCQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAIADgDQADgGAAgGIABgKIgEgEIgDgDQgRAAgOAKIgFABQgEABgCADIgFAAIAAAAIgBgBIgBgBIAAgBIgBgDIAAgBIABgDIAAgCIACgBIACgDIABgBIAAgBIABgCIABgBIABgCIAAgMIAAgIIgBgBIgBgCIgBgCIAAgCIgFgDIgKgIIgGAAIgCAAQgOABgKAIIgFACQgTAEgKANIAAgZIAAgTIAAgFIAAgYIAAgdQAygnAPAwIADAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgDAEgFACQgCARAIAGIAEABQAaAPALgZIABgEIAAgFQAHgIAMgBIAFgBQAVAeAVgjIABgEIAFAAIAAABQAAAGACAGIACABIABAAIAAABQACAOAFAOIADAAIABAdIABAPIgCAAIAAgDQgNAFgMAIIgCAAQABAKgIgBQgCANAEAGIAEAEQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAQAgAAgaAQQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgFAAQALAbAUgVIADgBQAAATADATIACABIAHAGQAGAGAFAIQAAAAABABQAAAAAAAAQAAABAAABQABAAAAABIgFAAIgFAAIgdAAIAAAFIgFABIgFADIAAAPIAAAFQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgIARgSgNIgBgEQgRgPgUAcQgBANAGAFIAEABQAGALAMAFQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgIAMgNAHIAAAOIAAAFQARAPAXgUIAEAFQgEAeAcgDIAAgDQANgSAPgRQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQANARAEAbIAAAAIACAAIAAgFIAAgJQAEgJAKgDIABgDQAQgBABAPIACABQAKAGAHgDQAHgCAFgLIAAgFIADAAIgDgiQAUAVAcgNQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAJgGABgHQACgHgGgKIgBgEIAAgCQgcAAgGgQQAxgCgMgcIgFgIIgDgBIAAgDQgTADgUAFIAAAEIgEABQgQAIgJgJIAEgFIABgEQANgEABgQIAAgEIAAgDQgSgBgQAEIAAAEQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQgIALgNAHIgBgFQgIgPgOgJIgBAAIAAgFIAAgKIAAgFIAAgFQA2ADgRgtQgBgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIAAgFIAAgFQASALAaABIAAgCIAEgBIABgBQAUgMgCgKQgCgKgcgIIgEgBIgEgBIAAgFIAEAAIAIAAIAMgCIAAgCIAFgBQAYgEAFgZQgSgbggAUQgiAWgIgTIAFgBQASgIAGgVIgBgCQgggOgZAVIgWgFQgCgLgFgIIAAgFIAAgFIAAgEQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIABgDQAfgKAbAJIAFABIAKAIIAEABQAUAHAcgEIABgDQAKAAAJgCIAAgCQALADABgIIADAAQAeAIAZAOIgDADIgCAFIAEABIAFgGIAFADIAEABQAqAIA2gGIABgCQAWgCAVgDIAFAAIAcAVIAdATIABAEQAsADAigIIAFAAQAHgHAIAGIAEABQAMACAIAGIAEABQAVAKAGAYIACAFIAAAFIgBAEQgDAHgFAFIgBgBIACgBIABgBIgDgDIgEgEIgBgBIgBgBIgCgCQgDgCgCgDIgBgDIgBgBIgCgCQgTgOgaADQgHAAgHAGQgCACgBADIgBABIAAAGIAAAGIAAADIAAACIABABIAFAEIABABIABACIABAAIAEABIABABIgEABIgRAGQgSAGgMAOIAAAFIAAAHIAAADIAAABIACABIACACIAAACIABADIABACIAAABIACABIABACIAAABIAAABIABACIABABQADADABAEIAEAEIABABIAFABIAPACIgCACIgBABIAAABIgBAGIAAAEIABABIAAACIABABQACABABADIABABIABACIACABIAUAAIAKAAQAIAAAGgBQAGAMADARIAAAFIgEABIgKAEIAAAFIAAAFIgFgBQgRgHggADQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQgEAHgIACIAAAEIgFABIgFAEQAOAOAZAEIAFABIADAAQAHATgPAAIAAAFIgFABQgTAHgKAQQAAAFACAEQAAAAAAAAQAAAAABAAQAAABAAAAQABAAABAAIADgBQAdgFADARIAHALQAPAYAUgWQAKgHAJgJIABgDQAVAKADAcIAAAFQAAAUACATIADAAIAAAFQADAKgIAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgLgHgRAAIgFABQgMAEgRAAIAAAFIgFAAIgdAEIgFABQgKADABgIIACgBQACgagYgbIAAAFQgSABgMAGQgGADAAgBQgGgngoAUIAAAFIAAAFQABAOgLAKIAAAFQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgDAIgIABIAAAFIgEABQgMAKgSADIAAAFQgLgDgDAFIgDADQgBgZgfAGIgBgFQgFgLgLAAQgLgBgQAMIAAAFIgBAEQgEAJgJAGIAAAFIgFAAIgFAAIgBgEIgIgQIgBgCQgdgFgJARQAAAFACAEQAAAAAAAAQAAAAABAAQAAABAAAAQABAAABAAIABADQAcAagsAAIAAAFIgFAAQggAEgLAZIAAAFQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIgIAKIAAAFIgBACIAAACQgGALgIAJIAAAFIAAAFQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAgAFVA6IAAAOIAAABIgEABQgNAKgMANQAEAbAQgBIADgBQAHgCAIgFQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQASgfAZgYIABgEQAOADAJAIIABAEQAJAPAPgGIAGgDQALgIAAgMIAAgEQgGgdgjgGQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIABgDIAFAAQAggCAJgaIAAgDIABgEIABgIIAAgCIgKgBQgnABghAaIAAADIAAACIgBAAIgEAAQgIgBADgNIACgDIACgDIABgEIADgBQAKgTgHgIQgDgEgGgBIAAAAIgCgBIgGAAIgNAAIAAAFIgKAKIgCAAIAAAAQgDAOgJAFIAAAFIgBAFQgBAIgNgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgXgHIAAAFIgFABIgFAEQAIAUAUAKQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABIgFAAIgiAJIAAAFIAAACIAAABQgBAOAHAGIAEABQAPAMAigLIACgBIACAAgAGJhQQARAVAbABQABgDADgBIAGgGQAKgMgBgRIACgCIACgCIABgEQACgGgBgHIABgBIABgEQACgMgEgMIgBgBIAAgBQAJABAHADIAFABIAEgBQANgIAFgGQAQgTgwgFIgEABQgVAGgNgHIAFgFIAJgKIAAAAIADgEQAGgKABgHQABgHgEgCQgIgFgcALQgLAEgHAIQgGAIgFgDQgHgEgEgFQgGgGgDgHIgEABQgUAEgOAKIAAAFIAAAJIAAAKIAAAFIgFAAIgiAKIAAAEIgBAFQgEAFgFAFQAAAKADAJIACAAQAVAEASAGQgEADgCAEQgGAEgFAHIAAADIgBABIgBACIgCACIAAAEQgCAPAHANIABABIAQABIAAABIABAAIAMAAIADgBIAJgFIAEgCQAOgHAPgEIACAAQADAAACADgAhkjrIAEAEQAEACgMgRQAAAHAEAEgAiiFAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAIABgCgLIgBgEIAGgNQAIgVAFgZIABgEIAEAAQALgDABAHQAAAAAAAAQABAAAAAAQAAABABAAQAAAAABAAQAMACAAARIADAAQAEAKAHAIIADABIAEAHQAJANAPAHQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgGACgHAAIgFAAQgKAAgFgFIAAgCQgdACgdAFIAAAFIgFAAgAqkEoIAFgIQAHgJAMgFQAAAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQATgWAFAHIgBACIAAADIgBACIgBACIgBADIAAABIgBACIgDAFIAAAGIgCAeIgDABQgXgEgNgOgAg3EyQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgHgJgIgHQgIgGgIgGIgBgEQgIgQgGgJIgBgDQgDgEgFgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQgMgEgNgDIgBAAIgCAAIgFAAIgFAAIAAgCQgTgDgUAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgDgHgNADQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQgTgHgTgFIgFgBQgngLgdgWIAAgKQASAFASgEIABgBIABgBQALgDAIgIIADACIAAABIACANIADABQAEAGAHADIAPAAIABAAIABgCQALgCAEgLIAAgBIAAgEIADgEIABgCIAAgEIABgBIADgFIAAgCQACgMgCgMIgCgDQAeAEAPgRIABgEQABAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAPgig0AGIAAAFIgFAAIgOAAIAAgFQAFgCADgEQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIgDAAIAJgIIAAgEIAAgCIABAFIACAAIAAgFQAAgKgGgDQgGgEgMACIAAAFIADAAQgJAFgIAIQgJAFgIAIIgMgBIgBAAIAAgBIAAgOQAFgFAEgGIABgEQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgIgJgPgBIgEABQgPAJgKAOIAAAFIAAAFQgBAdgcgYIgEABQgGAGgKACIAAAFIgEABIgFAEIAAATIAAAFQgBAIAKgCIAFgBQAfgEAMAPIABAEIgFAAQgeABgJAXIAAAFIAAAJIAAAFIgFAAIgYAAIAAAFIgFAAIgFAAIAAgCIABgCIAAgBIAAgEIAAgCIgBgBIgCgBQgKgBgJgCIgFgFIAAgBIAAgDIAAgGIAAgBIgCgCIAAgBIgBgCIAAgCIgGgFIgBgCIgLAAIgHACIgFABIgBABIAAACIgZAPIgCgBIgBAAIAAgBQgMgRgWABIgaAGIgBABIgBABIgEADIgEACIgFACQgDADgBAFQgDAQABASIACABIABABIAAACIAAABIACABIACgBIABgBIAAgCIgBgBIAAgBIADgBQABAEACADIABAEIgEABQgWAKgRAOIAAAEIgFABQgbAMgRAVIgCAAQAAgKgIABIgCgBQgCgEAAgFQAUgOAMgVQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAMgTAAgiIACAAQAYgDAYgEIABgDQAJgEADgGQADgGgFgJIgBgEIAAgFQAOgIAoACQAIAAAGgIQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAMgZgigDIAAgFIAAgFQAxADAGglIgCAAIgBgDQgWgHgeAFIAAgEIAAgFQAegGAIgcIABgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgJgGgOgBQgSgBgHAKQgaAggMgWIABgEQACgLgIABIAAgDQgMgCgMAAIAAAFQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgDABQgIAKgIAIIAAAFIgFAAIgBAEQgEADgFADQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgMgHgBgTIAYgIIAFgBIAAgFIALgGIABAAIARgIIAFgBQALgTASgNQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAMgBAMgEIADAAIAEgCQAegJAUgTIABgDQAOgIAHgQQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQARgJAWgFIAFAAQAIgCAGgEQAGgDAEgGQAFgIACgLIADAAIAdAAIAFAAQAiAAAhgCIABgDQAOgDAKgEIAAACQAAAIACAGIADABQAcAMAZgdIACAHQADAOAYgEIAAAOIAABJIAAAFQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgEACgFAAIgFAAIgEAAIAAAFQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgEAHgIABQACANAJAGIAEABQAIAIgHADQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFABIgPAJQAAAHACAHIADAAQAJAJAUgGIAAgDIAPAAIAFAAIgBAFQAAAOgJAGQgDANAHADQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQALARAXgLIAEgBQARAIgEAfIACAAIAAAJIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgEAEgFACQAAAPACAQIgJgBIgLgBIAAAAIgBgBIgggBIgCABIgQAFIgBABIgBACIAAABIgBAEIAAADIgBAHIABAFIAAACIABABIABABIACADIABACIAFAAIABABIABACIAEABIABAAIAEACIABABIAAAJQgBAGgFAFIgPANIgGAGIAAAGIAAADIAAAEIAAABIABADIABABIACACIACABIAlAAQAQAAAPgFQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAIAAACIAJgKQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIAJgKIABgEIAAAAIAFAAQAIAIAVgDIAFAAQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQgJARgOANIAAAFIgDABQgIAHgSgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIgCgCIAAABIABADIACAAQAMAFgGAUIgBAFIgEAAIgGAEIAMApIAFASgAkpgdQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQAJAJAHACQAJAEAGgHQAIgIADgYIgDAAIAAgFIAAgPIAFAAQATADAUAAIAAgDQAWgGAEgXIgCAAIAAgCQgYgDgYAAIAAgCQgNABADgNQAogGAGgmIgDAAIgBgEQgGgHgRACIgFgBQgQgBgIAGIAAAFQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgDAIgI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");
	this.shape_3.setTransform(1.4,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACcFRQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIAAgBQgJgcgWgOIgFAAQgHAAgFgDQgFgCgCgFIAAgFIAAgTIAAgFQgChJgvgdIAAADIgYAHIgFAAIgEAAIAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQgQAVgPAXQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgLAPgOANIAAgFQAGgUgLgFQASAEAHgHIAEgBIAAgFQANgNAJgRQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIgEAAQgUADgJgIQAQACAJgGIAEgBIAAgFIAAgFIgFABQgSADgGgIIAAgFIgCgBQgDgJAAgKIgFAAIAAAnIAAAFIAFAAIAAAAIgBAEIgIAKQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgIAKIgBgCQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgPAFgQAAIgkAAIgCgBIgDgCIAAgBIgCgDIAAgBIAAgEIAAgDIAAgGIAHgGIAOgNQAFgFABgGIAAgJIgBgBIgEgCIAAAAIgEgBIgCgCIgBgBIgEAAIgBgCIgCgDIgBgBIgBgBIgBgCIAAgFIAAgHIABgDIAAgEIABgBIAAgCIACgBIAPgFIADgBIAfABIABABIABAAIALABIAJABQgCgQAAgPQAFgCADgEQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgFIAAgJIgDAAQAEgfgQgIIgEABQgYALgLgRQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQgHgDADgNQAKgGAAgOIAAgFIgFAAIgOAAIgBADQgUAGgIgJIgDAAQgCgHAAgHIAPgJIAEgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAHgDgIgIIgEgBQgIgGgCgNQAIgBADgHQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAAgFIAFAAIAFAAQAFAAAEgCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgFIAAhJIAAgOQgYAEgEgOIgBgHQgaAdgcgMIgDgBQgCgGAAgIIAAgCQgKAEgOADIAAADQgiACgiAAIgFAAIgdAAIgCAAQgCALgFAIQgEAGgHADQgGAEgIACIgEAAQgXAFgQAJQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgHAQgPAIIgBADQgUATgdAJIgEACIgEAAQgLAEgNABQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgSANgMATIgEABIgSAIIAAAAIgMAGIAAAFIgEABIgZAIQABATAMAHQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAFgDADgDIABgEIAFAAIAAgFQAJgIAHgKIAEgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIAAgFQAMAAALACIABADQAIgBgDALIAAAEQAMAWAZggQAIgKASABQANABAKAGQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBAEQgHAcgfAGIAAAFIAAAEQAegFAXAHIABADIACAAQgGAlgygDIAAAFIAAAFQAjADgMAZQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgGAIgJAAQgogCgNAIIAAAFIABAEQAEAJgCAGQgDAGgKAEIAAADQgYAEgYADIgDAAQAAAigMATQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgNAVgUAOQAAAFACAEIADABQAIgBgBAKIADAAQARgVAbgMIAEgBIAAgEQASgOAVgKIAFgBIgBgEQgCgDgCgEQgBgGABgHIAAgFQANgUAegCIAFAAIAAADQAJAEgDAPIgBAFQAWgBAIgPIABgCQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAAgFIAAgDQgEAEgGACIgHABIgCgCIgEgGIAAgCIgEgBIgBgCIgBgBIgIgCIgIgCQgaACgUAPQgCAIABAJIAAANIAAACIADADIAAABIAAABIAAACIgBABIgBABIgDgBIAAgBIAAgCIgBgBIgCgBQAAgSADgQQABgFADgDIAFgCIADgCIAFgDIAAgBIABgBIAbgGQAWgBALARIAAABIACAAIACABIAZgPIAAgCIABgBIAFgBIAHgCIAKAAIACACIAFAFIABACIAAACIABABIABACIAAABIAAAGIAAADIAAABIAGAFQAIACAKABIACABIABABIABACIAAAEIAAABIgBACIgDAAIAAgCIgBgDIgBgBIgUgDIgBgBQgCgDgDgCIAAgCIAAgKIgCgBIAAgCIAAgBIAAgBIgBgBIgDgCIAAgBIAAgCIgBgBQgJAAgJADIgBAAQAMAAgBAXIgDABQATADAYAIQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIAEAAIABAAIAFAAIAFAAIAAgFIAYAAIAFAAIAAgFIAAgJIAAgFQAJgXAdgBIAFAAIAAACQgYADgKAOIAAAPIAAADIABgBIAFAAIABACIABAAIAHAAIAFAAIAAgEQASgBAMgIIAEgBIgBABIAMgGIgCAAIAAgFIAIgBQAjgFgEAoIAGgEIAJgGIAAgEIAAgFIAEgGIABgEQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQgHgFABgNIAFgEIAFgBQAAAJACAKIACAAIADABQABAHgBAFIABgCIABgBQACgKgCgJIAAgCIgCgDIAAgEIgHgBIAAgFQAkAFASgOIAEgBIAAgFQAAgbgiAIIAAgFQAzgGgOAiQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAEQgQARgegEIACADQADAMgDAMIAAACIgDAFIgBABIAAAEIAAACIgDAEIAAAEIAAABQgFALgLACIgBACIgBAAIgPAAQgGgDgEgGIgDgBIgCgNIgBgBIgDgCQgIAIgKADIgBABIgBABQgSAEgSgFIgBgBIAAAAQgHgBgGgDIgGAAIAAAFQAKADAGAGIAEABQAdAWAnALIAEABQAUAFASAHQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAQANgDAEAHQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQATAAATADIAAACIAFAAIAFAAIADAAIABAAQAMADAMAEQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAFACAEAEIABADQAGAJAIAQIAAAEQAJAGAHAGQAIAIAHAIQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIADAAIgGgSIgLgpIAFgEIAFAAQAGAWAEAXIAHAlIgDAAIAAACQgOACgKgEIgFAAQgNADgCgIIgEAAQgKAAgFgFIgFABIgiAJIgEABIgUAHIgFACIgBAEQgEAHgFAGIAIgUQABgGgDgGIADgBQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgFQAFgHAEgIIABgEIAAgDIAAgCQAGgUAIgTIAAgEIAAgDQgZABgNgIIgFgBQgMgEgIgKIgEAAQgWgDgRgGIgFgBQglgLgagWIgEgBQgdgRgoANIAAACQgUACgOAFIgFABIgdAEIAAADQgJACgKAAIgFAAQgOABgKAEIgFAAIgYAAIgFABQgVAKgSANQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgOAOgJAUIgDAHQgEAMgDANIgEAVIgKAEIACgeIAAgGIADgFIABgCIAAgBIAAgDIACgCIAAgCIAAgDIACgCQgGgHgTAWQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQgMAFgHAJIgEAIQANAOAWAEIgCABIgGAEQgPgHgWgCQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgOAcgHgdIAUgWIAUgZQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAAgFQAQgIgJgVIACAAIAAgFQAUgQANgXIABgFIAAgEQAJgVgEghIAAgFIgCAAQgJgjgXgSQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgCgEAAgFQALgFAGgNIADgBIAAgFQARgJAJgTQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIgBgDQgHgTgMgQQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgEgGIABgGIgDgDIgCgIIAAgIQgDgEABgFIAAgHIAIgJIAGgEIAAgBIgCgCIgDgDIgBgBIAAgCIAAgBIgBgBIAKgFIAGAJIAFgDIAUgLIAOgJIAMgGQAmgRAmgSQAqgUAlgbQAkgbAqgSQAngRAogQIA1gUIAigMIADgBIABAAIABAAQADgBACABQALgFANAAIALgBQBAgJBAgEIAxgDIALgCQAtgBAsAGQArAGArAIIAPACQArAFAqAHIAtAHQAsAGArAFQAYACAYAEIAQACQAcADAZAHIACABIAPAGIADAAIAIABIAEgCIABgDIAAgFIgCgHIAQAIIACARIACABIAIAFIAEAEIACACIABAEIACABIAAABIABAEIAEAFIABADIABAEIAHAEQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAACIABABIADACIACAFIABADIAAAEIABABIABABIAAAJQAAAKgGAFIgBAEQgTAVgXATIgBAEQgHATgMAPQgDALAIABIAAADQAZAYgDAwIgCABIAAAEQADAKgIgBIAAAxIAAAEQAhAPAKAnIAAAFQAJABgDANIgBAFIABAFQAHA4gNAHQABgIgJAFIhfA4IgOgHIgIgKIgBgHIgCAAQgBgXgGgQQAHAEADAIQAEAHAAAKIAAAFQAMAlAjgnQASgUAWgRIAAgFIAAgCQgTgFgKAHIgEABQgbAOgbgKIgEAAIgCgBIAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBAAIgCABIgBgBIgFAAQgpgTglAAIgBAEIgEABIgEABIgFAEIAAAFIgBACQgPAEgXANIgBADQgUAHgcAAIAAACQgRACgMAFIgEABQgTAAgLAJIgEABQgeAJghAFIgBACQgkADgHAdIgBAEQgBAIgFAEIgDADIAAAFIAVAbIgBAGIAHAKIABAKIgXAAIgFAAIgTAAIgBADIgDAAQgLAAAFgRgACuE8QgDAGgFAFIgBAIQABAKAOgDIAFgBIAPAAIAFAAIAAgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAIgBgBQgGgSgTgFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAgAB6ESQAAAGACAFIAAACQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIADACQARAOAPARQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIAAgFIAAgFQAHgJAGgLIABgCIAAgCIAAgFIAJgKQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgFQAMgZAggEIAFAAIAAgFQAsAAgdgaIgBgDQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgCgEAAgFQAKgRAdAFIAAACIAJAQIABAEIAFAAIAEAAIAAACQgJADgFAFQgDAMANgCIAEgBIAAgFIAUgEIAFAAIAAgFQARAAAMgEIAFgBQANABgFgGQgCgDgVgMIAFgDIAFgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAAAQgRgKgQARIgBAFQgDANgQACIAAgFQAJgGAFgJIABgEIAAgFQAQgMAKABQALAAAGALIABAFQAfgGAAAZIADgDQAEgFAKADIAAgFQATgDALgKIAEgBIAAgFQAIgBAEgIQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAgFQAKgKgBgOIAAgFIAAgFQApgUAFAnQAAABAGgDQAMgGATgBIAAgFQAXAbgCAaIgCABQAAAIAKgDIAFgBIAdgEIAFAAIAAgFQARAAAMgEIAEgBQARAAALAHQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAIAAgDgKIgBgFIgCAAQgCgTAAgUIgBgFQgCgcgWgKIgBADQgIAJgKAHQgUAWgPgYIgHgLQgEgRgdAFIgDABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgEAAgFQAKgQATgHIAEgBIAAgFQAPAAgHgTIgDAAIgFgBQgZgEgNgOIAFgEIAEgBIAAgEQAJgCADgHQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAfgDASAHIAEABIAAgFIAAgFIAKgEIAFgBIgBgFQgCgRgHgMQgFACgIgBIgKAAIgUAAIgDgBIAAgCIgBgBQgBgDgDgBIgBgBIAAgCIAAgBIAAgEIAAgGIABgBIABgBIABgCIgOgCIgGgBIgBgBIgDgEQgCgEgDgDIgBgBIAAgCIAAgBIgBgBIgBgCIgCgBIAAgBIgBgCIAAgDIgBgCIgCgCIgBgBIAAgBIAAgDIAAgHIAAgFQAMgOASgGIARgGIADgBIgBgBIgDgBIgBAAIgBgCIgBgBIgFgEIgCgBIAAgCIAAgDIAAgGIAAgGIABgBQABgDADgCQAGgGAIAAQAZgDAUAOIACACIAAABIACADQABADAEACIACACIABABIAAABIAEAEIADADIgBABIgBABIgDAAIgDgDQgHgHgGgIIgDgDIAAgBIgBgBIAAAAIgEgBIgGgCIgBgBIgBgBQgYgHgPAMIgCACIAAABIAAACIAAACIAAADIAAACIAAABIABABIAAAAIABACIAAABIADABIACACIAFACIgEgEQAIAAAAgKIACAAIAAgFQAlgMAOAkIACAAIAFgDQAGgFADgHIABgEIgBgFIgBgFQgHgYgUgKIgEgBQgIgGgMgCIgEgBQgJgGgHAHIgFAAQghAIgsgDIgBgEIgdgTIgcgVIgFAAQgVADgXACIAAACQg2AGgrgIIgEgBIgEgDIgFAGIgEgBIACgFIACgDQgYgOgfgIIgCAAQgCAIgKgDIgBACQgJACgKAAIAAADQgcAEgUgHIgEgBIgLgIIgEgBQgcgJgfAKIgBADQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAEIAAAFIAAAFQAFAIADALIACAKIAAAFIAAACIABACIAEABIAFAAQgEAcAKAOQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIAAgFQAKADAEAGQAJAKgPASIgEABIgBAEIgDABQAAAZACAYIACAAQAoADgOgcIgBgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQgCgHAAgHQAQgMARAIQAFADAGAFIAEABQAJACAFgCIAEgDIACgCQgKgOgPgLIAAgBQgJgHgKgGIAFAAIAAAAIAAgEQAKADACgIIACAAIAFAAQAfgBANgTQgZgUgdAUQgjAYgIghIAFAAIAFAAIABgEQAkgrhCAbIAAgFQAZgVAgAOIABACQgGAVgTAIIgEABQAHATAjgWQAfgUATAbQgFAZgYAEIgFABIgBACIgLACIgJAAIgDAAIAAAFIAEABIAEABQAcAIACAKQACAKgUAMIgCABIgEABIAAACQgZgBgTgLIAAAFIAAAFQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQASAtg2gDIAAAFIAAAFIAAAKIAAAFIAAAAQAPAJAIAPIABAFQANgHAIgLQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAAgEQAQgEASABIAAADIAAAEQgBAQgOAEIAAgFIAAgFQAJgBgBgIIgDgBIgFAAIgOAAIgBAEQgOALgJAOIAAAFIAAAFQALAFgKAHQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAMAFIAGAAIACACIACADQASALgVAMIAAgBQgIAEgLgEQgCAGgDAEIAAAdIAAAFQAZgGALAZQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAPABgBgQIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgHgDADgNIAEgBQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgFQAZAMAYgGIAEgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABgBQAKgNgQgHIgFgBQgVgDgIgPIAFgDIAEgBQAHAQAbAAIAAACIABAEQAHAKgCAHQgCAIgJAFQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgbANgUgVIACAiIgCAAIgBAFQgEALgHACQgHADgKgGIgDgBQgBgPgQABIAAADQgKADgEAJIAAAJIAAAFIgDAAIAAAAQgEgbgMgRIAAgEQARgNACgeIAAgKIAAgFIAAgEIAAgKQgOAHAAgHIAAgSQgRASgNgUIgBAEIgEABIAAAUIAAAFIgBADQgYANgNgVIAAgDQgPACgKAKIAAAJIAAAFQAgANAAALIgHAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQgNALgKAOIAAAFIAAAFQAVABAKgKIADgBIAAgFQBAghgwAxQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQgDANAIABIAFAAQAMgTASgNQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgOARgOASIAAADQgcADAEgeIAFAAIABgEQApgjgvAdQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgCABQgXAUgRgPIAAgFIAAgOQAMgHAJgMQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgNgFgGgLIgEgBQgGgFABgNQAUgcARAPIABAEQATANAIgRQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAAgFIAAgPIAFgDIAEgBIAAgFIAdAAIAFAAIAFAAQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBAAAAQgFgIgGgGIgHgGIgDgBQgCgTAAgTIgEABQgUAVgKgbIAFAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAagQggAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgDgEQgEgGABgNQAIABgBgKIADAAQALgIANgFIAAADIADAAIgBgPIgCgdIgDAAQgEgOgDgOIAAgBIgBAAIgBgBQgCgGAAgGIAAgBIgFAAIgBAEQgWAjgVgeQAPARANgRIABgFIgCAAIACgEIAAAAIAAAAQAHgNgMgQIgFAAIgDABQgYASgeAKIgEAAQgPACgFAMIAAAUIAAAEIgEgBQgHgGABgRQAFgCAEgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgDAAQgOgwgzAnIAAAdIAAAYIAAAFIAAATIAAAZQALgNASgEIAFgCQALgIANgBIACAAIAHAAIAKAIIAEADIABACIAAACIABACIABABIAAAIIAAAMIAAACIgCABIAAACIAAABIgCABIgCADIgBABIgBACIAAADIAAABIAAADIABABIABABIAAABIABAAIAEAAQADgDADgBIAGgBQANgKARAAIAEADIADAEIAAAKQgBAGgDAGIgDADQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABIgFACIAAAAIAAABIgBABIgEADIgBABIAAABQgFACgDAEQgCACgDABIAAABIgBABIgBABIgEABIgDACIgFACIgBABIgCADIABABIACADIABABIAAABIACABIACACIAAABIAAABIACACIADADIAAABIADABIACACIAAACIABAEIAAACIACABIACADIAAAEIAAAHIAAADIgBABIgCADIgBACQgVALgVgIIgIgDIgBgBIgBAAIgFAAIAAAFQAKAVAEAbIAAAFIAAAYIAAAFQATgCgQAeQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIAAATIAAAFIAAAFQALADABgIIADAAIAAgFQAKgCAJAAIAAACIAAAFQgDAVgLANIAFAEIAEABQARgDABAMIABAFQALgBABgNIACAAQAJAPAQgJIAEgBQAKgBAGgDIAEgBIAAgFQAfgHAXgQIAEgBQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgYASgcANQALANAGAUIACAAQATgRARgUQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAFgHAGADQAsAag6AQQAZgOgHgWQgBgCgJAAIgBADQgQAOgNARIgBABIgIANIAAAPIAAAAQABAVADASIABAEQAIAHgDASIAAAEIAFgBIADgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgFQAMgNAbADIAFAAQAKAAABgEQAJgTgngGQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABIgCAEQgPAAgOgdQAVAVAJgKQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgEIAEAAIAFAAIAAgFQAsAEANgYIABgFIAAgCQgVgJgWAQIgBADIgRAFIgBAAIgFACIgFAAQgRADgDgNIAKgEIAAAEQAUAEAKgHQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQANgKAOgCQAMgBANAGQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABIADAAIgBAIQgGAbgigBIgBACQgOACgPAAQAVARARASQAGAHgDAFIgCACQgFAFgJAAIgFgBQgKgEgJAAQgOAAgLAKgAiYFBQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIAFAAIAAgFQAdgFAdgCIAAACQAFAFAJAAIAFAAQAIAAAGgCQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAAAAAQgQgHgIgNIgEgHIgEgBQgGgIgFgKIgCAAQAAgRgMgCQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQgCgHgKADIgFAAIAAAEQgFAZgJAVIgFANIAAAEQADALgIgBQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABgAg+CzIAAABIgFACQgSAIgUAGIgEABIARAAIACgBQARABAOgHIACABIgEgNIAAgBIgBACgAiBC8IAAACIAAABIAAADIABABIACACIADAAQgGgDAAgHIAAABgAhICcQgOAMgXAEQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQgDAEgFACQgDANANgCIAEgBIAogSIAEgBIADAAIACAAIAAgBIAAgEQAEgHABgLQACgJgCgMIAAgFIgBgEQgEgEgHgBIgEAAIgEAAIgFgBQgTgCgKAHIgEAAQALAQAWAIQghAFgFghIAFAAIAAgFQATgFAZACIAEAAIAAADQAFAAAEgCIABgCQgNABgMgDIgBAAIAAgBIgeABIgBAAIgHACIgGACIgBABIgBABIgBACIAAADIAAABIAAABIAAACIgBACIAAACIABADIAAABIABABIADADIAEABIACABIAEACIABABIABAAIADABIACACIABABIABAHQAAAIgEAFQgIAKgLAJIgCABIAMgGIAFgBIAAgFQATgFAPgJIAEgBIgBAEgAoOCYIAAAKIAAAFQACACABADIABAFIAFAAIAFAAQAEAIALABIAFAAIAAgFIAYAAIAFAAIAdgEIAFAAIAAgFQASADAHgHQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAIAFAAIAEAAIAAgCQgfAEgMgRQACgCADgBIAEgBIAAgFQgIgTgQATIgBAEQgLAdgbgJIgCgBQgCgLAAgMIgFAAQgTABgKAIgAiBC3IAAABIAAACIAAgEgAHcB7QAAAKAEAGIABAEQAlAVAuAMIAEABIAAgFQAAgJgYgLQANgDgBgQIgCAAIgFABQgPAGgOAIIgKAAQAAgdgRAAQgHAAgKAEgAjTCYQgDAPgMADIgEABIABABIAJgBQAEgDAFAAQABgDACgBIACgEIABgCIAAgDIAAgBIADgEIABgEQgDAEgHACgAj3CPIABACIAAABIAAABQAEAFAAAGIAAACIAFAIIAEABQAEgjgYgCQgHAHgLAEIgBACIAAAAQgHABgEAFIgEgBQgIAFgIACIgCAAQAPADAQgCIAAgBIABgBIANgFQAEgFAHgDIACAAgApFAAQgEACgEAAIAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQgQAOgLARQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQgDADgFADIAAAEQAPAbANAbIABAFQgBANAKADQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAYAAAPgJIAEgBIAAgFQAOgHgHgaIADAAQAiADAcgKIABgDIABgFQADgJgTgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgHgEAEgNQAoAHAMgWIABgEIAAgDQgcAEgQgGIgEgBQgGgFABgMQAVgGALgPIABgEIgBgEQgFgGgNABIgDABQgfApgdgXIAAgFIgEABQgLAGgJAIIAAAFQgCAKgNgBQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAgAJoBLIABAFQgSAkAmgVIAEgBIAAgFQAKgEAEgKIAAgFIgDgBQgGgGgFgIIgFABQgNADADgNQAFgDAEgDQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgFQADgXgNgGIgBgCQgQgOgagCIgBACQgJADgFAEIAAAFIAAAEIAiAHIAAADQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAPAUgXAIIAAADQgSAGgLAKIAAAFIAAAFQAQgIALAAQAPAAAGANgACOgHIAAAFQABAHAAAGIAAAAQAJADAJgDIAAgBIABgDIAAgBIgBgCIAAgBIAAgDIgBgCIgBgDIgMgDIgFABgAhYgfIgCAAIgBAFIgEAFIAAAOIAAAFQAKAGATgCIAFAAQAAAAAAgBQAAgBAAAAQAAAAABAAQAAAAAAgBQAFgHgGgSQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQgGgGgFgIIgBgDIgcgaQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABQgHAEgNgBQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgEAEgFACQAAAFACAEQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAIAPAAIAFAAQAIgCAFAAQAPAAgCAQgAgQg7QABADgBACIgDAFIgCACQgHAIgKABIgEABQAUAFATgGIABgBIACgDIAAgEIAAgEIAAgDIAAgBIgCgDIgBgBIAAgDIgBgDQgHgDgFgHQgCgDgBgDIgDgCIAAgBIgBgEIAAgDIACgBIABgDQAPgFAKgKQgVAJgVAGIAAADIACADIAAABIABAAIAOAOIAHAIIAEAEIgHgFIAAAHgAg4g1IAAADQALAEAEADQAJgBAHgFIACgEIACgDIABgEIAAgEIgCgBIgBgCIAAgBIAAgBIAAgCIgBgBIgGgEIgIgGIgBgBIgHgGIAEAAIgDgEQgBgDAAgDQALgHAMgFIABAAIADAAIABABIAAABIAAAAIgCACIACgCQANgGAKgKQAIgHgPAHQgHADgNgBIgBADQgWAFgLgIQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAngyg3APIAAAFQgOAxAAgxIAFgEIAEgBIAAgFIAQgIQAggNgEAkIAAAFQgIAMgKAJIgBADQASAEAHgIIAEgBIAHgFIgIAAIgCgBIgCgDIgBgBIAAgDIgCgEIAAgDIADgDIAEgGIAAgCIAAgCIACgCQABgCAAgDIAAgKIgBgBIgBgCIAAgBIgBgDIgBgBIgBgCIgEgCIgFgCQgMgCgNAEQgKAKgOAFIgBAAIgLALIAAgDIAJgHIgEABIgDACIgFAHIgCAAIAAAFIANABIABABIAAABQgGAEgIgBIAAAoIAAAdIAAAFIAEABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAPAJAIAPIABAFQAEgIAJAAIACAAgAphhTIgBAAIgFAEIAAABIAAACIAAABQADAFAAAGIABAHIABABIABABQAHABABADQAigKAYgUIgGgGQAAgFgEgCQgCgHgBgIQgTAMgWAJIgBABIgBABIgCAAIgBAAIgHADgAJ7hEQgEgGgFgFIgEABQgOAJgLgKQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQgCgGgBgGIAAABIAAACIAAABIgBABIgBACIgBABIAAABIAAACIAAADIAAABIAAABIABACIABABIADADIABABQAVgFATAGIAAAAgAoohwQAAAIADAGIAAABIAJANQALgKAJgNQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAAgFQARAAAPgDIgJgOIAAgCIAAgBIgBgBIAAgBIAAgBIAAgHIAAAAIAAgBIACAAIACABIAAAFIAAABIABABIAAADIAAABIABABIABADIAAABIAJAKQAegIAQgVQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAAgFQALgGAIgKIgGgHIgCgFIgBgDIAAgDQgTAMgTAKQgrAWgtATIgOAHQgPAIgNAKIgFACIgCABQAVgIARgNIABAAIAAgBIACAAIABABIAHgBIgHAFgAiAhnIgGAEQAAAKAGAEIAEABIAFAAIADgBQAHgTgPAAIgEABgAJphsIAAAEQAAAIACAGQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAAgFQAFgTgFgPQAUgDAIgRIABgEIgBgFQgCgggkADIAAAFQAGANASAEIAAACQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgZAYgqAGIAAAFIAAAFQARAKASgJIAEgBIAEgBQAIAAgCALgAJQhdIAAgBQALgEADgLIABgEIgEABQgXAPgRgQQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgEAAgFQAWgaAtgFIAAgDIAAgCQgLgCgHgFIgCABIgDABIgCABQgFADgGACIgMACIgBACIAAABIgFABQgLAEgJAJIAAABIAAACIAAAEIAAAEIABABIACACIABABIAAABIAAACIAAABIABABIAAACIABABIABACIABABIABADIABACIABACIACABIACADIAAABIABABQAJAIAOgDIABACgABKinIAAAUIAAAFQApADgjAXQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAVAJADghIAAgFIAAgFQgBgOgEgKIgFgBIgCAAQgMAAgFAFgAARh6QAGgIAEgJQABgDgBgDQgRgFgPALIgIAFQAGgDAGAAQALAAAHAPgAmIjMIgZARIABAAIABABIAAAEIAEAEIABACIAAABIAAABIACADIADAAIAAgFIAigJIAFgBIAAgCIgCgBIAAgBIAAgBIgFgFQAAgDgCgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIgBgBIgBgBIAAgFIgOALgABsi1IAAAFQAWAGgOgZIgDgBIgFAAIAAAPgAl2jZQABAHACAHIACAEIAAABIAEADIAAACIABABIAAABQAMgBAHgEQAIgGADgLIgEgGIgFgGIgBgLIgeATgAh8kMIgBADQgEABgFAAIgEABQgiAHgPAaIAAAPIAAAFQAkgdASALIAJAIQAFAFAFgFIAAgFIAEgFIABgEIAAgFQAHgdgWAAIAAAAgAkikEQgOAIgQAFIgDACIgGACIgKAFIAAAHIAAABIABACIADAGIABABIAAABIAAABIACABIAAgCIAAgCIAFgDIA6AAIAAAAQgDgCgBgEIgDgCIAAgEIAAgBIgDgCIgBgDIgDgGIAAgNIgHACgAkPkMIgIAEQgBAKAEAJIAAABIAAAAIADADIABADIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIABACIAAABIADAFIgDABIAEAAIAiAAIAFAAIAAgFQAWgEAPgLIAAgBIgBgCIgBgBIgBgCIAAgBIAAgCIgBgBIgBgCIAAgBIAAgBIAAgBIgBgBIAAgCQgDgOADgPIAAgBIABgDIABgEIgLAGIgOAGIgGADIgMAEIgBARIAAABQACAEABAFIABABIABACIAEAIQAEABAAADQgHABgEgKIgBgCIgFgLIAAgSIgeALgAKPj0IAEAFIABAFIAEADQgDgKgGgGIAAADgAJ3j3IAAADQAIAIACgIIAAgFIAAgCQgJAAgBgGIgDgBIgCgBIgIAAIACgCIgBgBIgZgIIgBAMIgCAKIACAAIAEgBIAGAAQAOAAAOACgAIij0QAXABASgEIADgMIgMAAIgFABQgNADgLgEQAAAIgDAHgAIKkXIAAAHIAAACIACABIABAUIAAABIgBABIABADIAQAAIADgFIABgBIAAgKQgLgFgJgNIAHACIAKADIADACIAAgBIAAgBIAAgCIAAgBIgCgDIABgBIgOgBIgIgBIAAADgAHskcIAAABIAAABIABABIAAAGIAAADIABABIABABIAAAGIAAABIAAAAQAMAJAOAGIgBgRIAAgBIgBgBIgBgNIAAgDIgagDIAAAAIAAACgAi1j7IAAABIAKgGIgEgDIAAgCIAAgDIAAgBQgEgGABgIIAAgJIABgBIABgCIAAgCIAHgKIADgDIADgCIgSAEIABABIgGAEIgEAEIAAAAIgBACQgCAKABAJIABAKIAAABIABABIAAABIAAABIAAABIABABIABABIAAACIAAACIAAABIACACIABAAIADgCIABABgAJOkDIAAgMIgCAAQgTgFgUgDIABAIIAAACQAIADAKACIAFAAIAAgBIARAGgAiMk5IgCABIgFAAIgDABIgCAAIAAABIgDABIgFACQgHAGgEAIIgBABIAAACIAAACIgBABIgBABIABAOQAAADACADIAAABIAAABIAAABQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIAAAAIAHgIIADgBIAAgDIADgBIACgBIASAAIAAgBIAAgCIAAgBIgBgBIgBgBIAAgBIAAgaIAAgCIACgBIAAgEIABgBIgGABgAHckYIAAACQAHAHAIAGIAAgBIAAgBIgCgBIAAgIIAAgCIgBgBIAAgFIAAgBIgBgBIgFgBIghgEIAAAGIAAADIAAABIABAAIAaABgAiCk7IABABIgBABIgBABQgEAPADAQIABADIAAABIAEABIABABIgBACQAOAAAFgJQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAgFIADgBIgBgPIAAgBIABgCIAAgHIAAgBIADgEIAAgCQgQACgPAEgAFokWIAnAAIAEAAQAVgDAWAAIgBgFIAAgDIAAgBIgCgBIAAgBIgVgDIgCAAQgNADgOAAIAAAIIAAAEIgBABIgCAAQgBgEAAgFIAAgDIAAAAQgPAAgOgCIgBAAQADAHgCAIgAE8k1IAAABIAAABIABABQABAIgBAJIAAACIgDAGIADACIAEABIAiAAIAAgBIACgCIgBgKIAAgBIgDgDQgIgFgHgHIgXgDIABABgAgDlLIgCAbIgBANIAAABIgBABIAHADQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAMgHANgGIAAgJIAAgBIgBgCIgCgEIgDgVIgXACgAEFk7IgBACIAvAcIACgCIgBgPIgBgCIAAgEIAAgBIAAAAIAAgBIABAAIACgBIABACIAAABIAAABIABgBIAAgBIACgCIgcgDIgNgCIgLgBIgBACgAgvlIIAAAEIAAABIgCADIAAALIAAACIACACIAAAEIAAABIABABIAAABQATACASAGIAAgOIACgbIgoADgAhflCIgBAHIgBABIgBAHIAAACIgBABIAAABIABAMQAWgHAVAAIAEAAIAAgBIAAAAIAAgCIAAgCIgCgCIAAgPIAAgDIACgCIAAgCIgsAFgACOlBIAAAHIAAABIAAAAIAOADIAAADQAMAHAWAAIAAADIAKAAIAFAAIAHAAQgBgFAEgEIAAgOIAAgFIgUgEIgmgFIgPgCIAAAPgAFnktIABAEIAZgBIAAgCIgdgEIADADgADbk/QAAAKgDAKIAAABQAFgBAEgCIAEgBIAAgFQANABAHgFIAEgBIAAgDIAEAAIAAgDIgmgGIAAAFgAAYlNIADASIAAACIACADIAAABIABALQAPgHARgGIAAgBIgDgXIAAgBIgjADgAGGkqIACgBIgCAAgABFlQIgHAAIABABIAAAGIAAABIABACIABABIABAMIAAABIADAAIAOAAIAFAAQAcgDAVACIABgIIAAgPQgTgBgTAAIgfABgAg2DXIAAgDIAAgBIACACQAAAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAgAhHCYIgDgJIACABIAJADQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAIgFACQgCAAgDACgAFGBjQALgNAOgKIAEgBIAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAHgJgIgCIgCAAIgDABQghALgPgMIgEgBQgHgGAAgOIAAgBIABgCIAAgFIAigJIAFAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAAAQgVgKgHgUIAFgEIAEgBIAAgFIAYAHQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAMADACgIIAAgFIAAgFQAJgFADgOIAAAAIADAAIAAAEQADALgIgBIAAAYIAAAFIgBADQgKAHgNgPIgFgBQgGgEgOABQAcAPgGAWIgCAAQgBAAAAAAQgBAAgBABQAAAAAAAAQgBAAAAABQgHAHgSgEIAAAFIAAAFIgBABQgCAJAHACIAAACQASALANgOIADgBQAOgCAGADIADADQAEAFgJAOIgDABIgBADQgLAJgHAMQAEAaAUgKIAFgBIAAgFIAAgFQAMggAbgQIAEgBIgBAEQgYAYgSAfQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgIAFgGACIgEABIgBAAQgOAAgEgagAkmByIgBgEQgLgPgfAEIgFABQgLACABgIIAAgFIAAgTIAFgEIAFgBIAAgFQAJgCAHgGIADgBQAdAYAAgdIAAgFIAAgFQALgOAOgJIAEgBQAQABAHAJQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAIgBAEQgEAGgFAFIAAAOIAAABIAAAAIAMABQAIgIAKgFQAHgIAKgFIgDAAIAAgFQAMgCAGAEQAGADAAAKIAAAFIgDAAIgBgFIAAACIAAAEIgJAIIADAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgEAEgFACIAAAFIAPAAIAFAAIgBADQgXAPgKgSIAFAAIAAgFIAAAAIABgDIACgBIADgDQAFgGAIgFQACgEgBgFIgBgEIgCgBIgBAAIgDABIgBABIAAABIgGACIgCABIgBACIAAAAIgaASIgBACIgBABIgOAAIgBABIAAAAQgOADAFgUIAEgDIAAgCIAAgEIABgBIACAAIABAAIABgFIABgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgEgBgFAAIgEAAQgSAEgHAPIABAFQAHAbgHADQgHAEgXgUIgFABQgMABgHAIIAAAPIAAAEQAMAAAMADIAAACQAXgFAEANQABAFgBAGIgDABIAAAAgAkXBjQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgCgGAAgHIABgBQAPgMANAEQAEACAEACIAFAGQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQgIAIgKACIgEAAIAAAAQgHAAgIgEgAkBBSQgNAAgJAHQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAEABQAIACAFgBQAHgBADgFIABgEIAAgDIgGAAIgBAAgAGwBGIgBgEQgJgIgOgDIAAgEQAVgCAHAMIABAEQAJALAJgBQAFAAAGgFQAIgHgJgMQgQgUgagJIAKgJIAEgBIABgDQAhgEAFgfIAAgCQgpAHgdAVIgDACIgCAAIgCABIgDAAQgPACACgOIABgCIAIgKIABgBIABgEIABgEQALgVgUgEIgMAAIAAgFIAOAAIAFAAIACABIAAAAQAHABACAEQAHAIgKATIgCABIgBAEIgCADIgCADQgEANAJABIADAAIABAAIAAgCIAAgDQAhgaAngBIALABIAAACIgBAIIgBAEIgBADQgIAaghACIgFAAIgBADQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAkAGAFAdIABAEQAAAMgMAIIgGADQgEACgDAAQgKAAgHgLgAi2BGIAAAAgApJA8IgEgBQgGgFABgNQAJgFADgOIACAAIAAgFQAMgFARAAIAFAAQAFAFAJACIABADIACAAQgIAogiAAIgOgCgAowAWIgFAAIgFAEIgBAEQgIAHgGAJQAAAFACADQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQAdAAAJgTIABgFIgBgEQgCgGgIAAIgIABgAF3ApIAAgBIgBgDIgCgBQgCgBgBgEIAJgFIAAgBQACgHAIAAIABgBIACgCIABAAIANAAIACABQAGACACAHIAAABIAAAFIAAADIAAABIgDADIgBACIAAABQgJAFgJAAQgJAAgJgFgAGGAZIACABIgNAKIAAABQAMAGAPgFIACgEIADgDIAAgDIgBgDQgCgDgEgBIgBgBIgHAAIgGAFgABcARIgBgBIgBgBIAAgCIgDgBIgBgCIAAgBIAAgFIABgCIABgBIAAgBIAAgBIAAgBIAGgDIAHgCIAFAAIAHACIABABIAEABIACABIAAAFQAAAGgCAGIgBABIgHADIgCABIgQgDgABlgCIgGACIgCABIAAABIAAACIgCABIgBABIAEAFIABABQAJAFAKgGIABgEIAAgBIgLgGQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAMAHIAAgCIgEgCQgDgDgFAAIgCAAgAkIgPQgHgCgIgJQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQgHgFABgNQAIAAgCgKIgBgFQAPACgJAXIgBAEQAUATANgdIABgEIgDgBQgCgQAAgRIAOAAIAFAAQAWAQAJgPQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAAgFQARAEAAgOIADAAIAAgCQgfABgSgJIgFAAQgMgCADgRIAEAAIAFAAQATgKAOgPIABgEIABgFQABgOgQAEIgFABQgNACgHAHIgBAEIgSAQQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgOAMgOgLQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgHgFADgQQAHgIACgLIABgFIgFAAQgVAFgNAOIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABIAAAPIAAAEIgBAFQgFAPgSgUIgBADQgLAEgHAIIAAAFQAkAAAVAQIABADQgXASgeANQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgDAKAIACIAAADQAZgJAwgIIAAACIgEABQgsAZgegHIgDgBQgDgFgCgHQgBgHAAgJIAFAAQAIgNAVgBIAHAAQgJgZglgEIAAgFIAAgFQANgDAIgKIADgBIAAgFQATgBADgSIACgBIAAgFIACgCQARgUAnAFIABADIAAAFQADANgIABIAAAFQAAAgAQgVQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAAgFQAIgBAEgIQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAgFQAIgGAQABIAFABQAQgCAHAHIABAEIACAAQgFAmgpAGQgDANANgBIAAACQAYAAAYADIABACIACAAQgEAXgXAGIAAADQgTAAgUgDIgEAAIAAAPIAAAFIACAAQgDAYgIAIQgEAEgFAAIgGgBgAGXhOQgDgEgEABQgQAEgOAHIgDACIgKAFIgDABIgLAAIgBAAIgBgBIgPgBIgCgBQgGgNABgPIAAgEIACgCIACgCIAAgBIABgDQAEgHAHgEQABgEAEgDQgRgGgVgEIgDAAQgCgJAAgKQAFgFADgFIABgFIAAgEIAjgKIAEAAIAAgFIAAgKIAAgJIAAgFQAPgKATgEIAFgBQADAHAFAGQAFAFAGAEQAFADAHgIQAHgIAKgEQAdgLAIAFQAEACgCAHQgBAHgGAKIgCAEIgBAAIgJAKIgFAFQAOAHAUgGIAFgBQAwAFgQATQgGAGgMAIIgFABIgEgBQgIgDgJgBIABABIAAABQAFAMgDAMIAAAEIgCABQABAHgCAGIAAAEIgDACIgBACQABARgKAMIgHAGQgCABgBADQgbgBgRgVgAGThYIAMAHQAAACADACIACABIABACIABACIAEAFIABABIATAFQAHgDAGgFIABgBIABgDIACgBIACgTIAAgFIACgBIACgBQAIgXgIgVIgBgDIAAAAIgGAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAGAPADATIAAAEIgBAFQgGAMgMAIQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgDQAHgCADgEQgNAHgQgGQgJgFgGgIQgJgDgGAEIAAACIgCACIAAAAIgBADIAAABIgCACQgHALgOAGIgMAEIgFABQgRACgCgMQgBgEABgGQAHgMANgGIAEgBIgBADQgGAGgIAFQgFAUAPAAIAFAAQASgIAMgOIAAgBIAAgCIAIgIIARAAQAHAMANACIACABIAAAAIAOAAQAEgDAEgEIABAAIABAAQACgGgBgIIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgHgHAEgSIAFAAIAAgFQAWgDAMAHIAEABQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAogRgtgJIgBACQggAGgVgIIgCAAQAQgMAIgIIABgBQANgNgHgFQgGgEgcAEIgBAEQgIAJgHAGQgIAGgIAAQgIAAgGgGIgHgJIAEgGIABgDIAAgBIgFAAQgOABgKAEIAAAOIAAAFIAAAFIABAEQAKAUgVgJIgFAAIgdAEIgBAFIgEAFIAAAPIAAAFQAoABAYATQADACgEAFQgEAFgKgDIABgJIgLgEIgRASIAAACIAAABIgCADIgCABQgBAKACAJQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIABACIABACIAOACIABAAIABABQAWgFAWgMIALgFIADAAgAkcg8IAAAAgAkhhUQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgLgEACgRIAKgEIAFgBIAAgFQAeADgKAWIgBAEIgBAEQgGAGgGAAQgGAAgFgFgAkXhsIgBADIgEABIAAAKIAAAFQALAKABgPIADAAIAAgFQACgKgHAAIgFABgAGAiOIgBgDQgHgEADgNQAOgIAIgBQAQgCgGAZIgDABIgBADQgGAHgHAAQgFAAgFgFgAGFiiIAAAKIAAAFQANADADgHQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIgBgFQgCgGgIAAIgIABgAggjmQAfAHABgaIABAAIAAgFQAIgLAVAEIAAACIgFABQgMABgHAIIAAAFIgBAEQgGAQgNAAQgIAAgKgGgAhSjlIgEgEQgEgEAAgHQAKAPgBAAIgBAAgAggjmIAAAAgAB2lhIAEACIAAAAIgGABIACgDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbubshorts, new cjs.Rectangle(-69.7,-35.4,139.5,70.8), null);


(lib.prepbubmouthclosed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+ADQAAgDADgBQAGgFAIACQAHABAGgBIArgEQAWgBAVgDIACAAQAKACgEAKQgCAEgFABIgGAAIgKACIgdACIgQACIgsACIgCAAQgKAAAAgKg");
	this.shape.setTransform(1.2,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgMBaIgegEQgEgBgDgCQgMgHgGgNQgFgLAAgLIAAgdQAAgBABAAQAAgBAAAAQAAgBAAgBQABAAAAgBIAAgGIACgDQAEgTAOgOIAKgNIALgPIAEgEQAGgGAIgBIADAAIAHgFIAGgDQAJgFAKgDQAYAAARAQIACADQAGAIAAAKIgDASQABAJgCAIIgCgBQgWADgWACIgrADQgGABgGgBQgJgBgGAEQgDACABADQgBAKAMAAIArgDIARgBIAdgDIAKAAIgBACIgBAEIgDAIIgCADIgCAVQgBALgFAKQAAAEgCAEQgEAJgJADIgQAGQgKAGgJAAIgIgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbubmouthclosed, new cjs.Rectangle(-7.3,-9,14.9,18.1), null);


(lib.prepbubmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEBSIgEAAQgggCgHgbIgBgFQgJgeAAgnIAFgIIABgEQANgVAVgMIAEgBIAAgFIAKgEIADgBIAAgFQAXAAAXACIAEAJIAFADQAGAPgJAXQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAFIgOAUIAAAEQgBAIgIABIAAAKIAAAFIgBAEQgCAdgMAUIgDAAQAAAEgDABIgDABIgFgBgAgKg7QgZAQgHAiIAAAqIAAAFQAHAWASALIAEABQANADACgHQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAAgFQAKgTACgdIADAAIAAgFIAAgFQAFgGADgIIABgEIAAgFQAJgIAFgMIABgEIABgFQAKgcgyAJIgCAAQgCAHgJgDQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAg");
	this.shape.setTransform(0.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgpBcIgHgHQgIgOgLgQQAFggABggIADgCIAAgFIAEgHQAAAnAJAfIABAFQAHAbAgACIAEAAQAFABADgBQADgBAAgEIADAAQAMgUACgdIABgEIAAgFIAAgKQAIgBABgIIAAgEIAOgUIABgFQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAJgXgGgPIAFADQAQAtggAdIAAAGQAEBRhAAAQgNAAgPgDgAguBZIAEADIABAAIACADgAgugrIANgfIAMgKIARgCIAGgFIAegDIAJADIAGAGIACAEQgXgCgXAAIAAAFIgDABIgKAEIAAAFIgEABQgVAMgNAVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbubmouth, new cjs.Rectangle(-6.8,-9.5,13.7,19), null);


(lib.prepantbumps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJAWQgCgCgDAAQgJgCgIAFQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgIABACgIIADgDQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACgBIAIgDQASgDAJAPIgBADQgCACgCAAQgDAAgDgDgAgWgFQgEgFAFgEQALgIAMgCQARgBAFAPQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQgEADgEgDQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBgBAAIgCgDQgPgBgOAJIAAAAIgCAAg");
	this.shape.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepantbumps, new cjs.Rectangle(-2.2,-2.5,4.9,5), null);


(lib.prepantbump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDgfIADgFIAIAGIABABQANAdgGAgQgGgKgCgPQgEgDgEgBQgHAMgEANIgDAIQgJgiAUghg");
	this.shape.setTransform(-0.4,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepantbump, new cjs.Rectangle(-2.2,-4.4,3.6,7.3), null);


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


(lib.bublyinginsand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgBAAIADAAIAAABIgDgBg");
	this.shape.setTransform(-54.1,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AoPOjIAEAAIgGACIACgCgAlNL4IACAAIgDADIABgDgAk9LmIABgBIgBABgAjdj/IABgBIgCADIABgCgACCpWIABgBIACABIgFACIACgCgAIQukIACAAIAAABIgCgBg");
	this.shape_1.setTransform(-27.8,-27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AnMP4IgEAAIgdAAIgFAAQgbgFgWgKIgBgDQgNgLgKgPIgBgEQgPg1g0gQIgFAAIAAgCQgYgCgYAAIAAAEIgFABQgUAEgRgBIgGgEIgTgCIgKgGQgLgIgJgMQgHgSgFgRIgDgJIgIgFIAAgCQgGgJgJgDIgBgBQgDgEgCgEIAAgBQAZgIANgFIABgBIABAAIABgBIgBgBIAAAAIAAgCQgJgJgLgFIgBgBIgEgHIAAgEQAFgIAEgEQALgBAJAEIACADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAEACIAAABIAAACQACAEAFACIADgCIACgBQAKAFAAgCQAAgCgKgHQgDgNgGgLIgBgDIAAgQQAFgHAGgGIARgIQAKgCAJAGIACACIACAEIAAABIAAACQAGAOALAKIADgBIACgCQAJAHgHgRIABgHQAAgPgFgMQADgIgCgMIgBgFIAAgFIAFAAQAggYAJAhIADABQgBANAKAEIAAACIALAOQABAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQAfAUgXgXQAAgBAAAAQgBAAAAgBQAAAAgBAAQgBAAAAAAIgBgEIgJgKQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgOgKAFgeQAIgFAGgGIAAAAIADgEQAJAAAIgCIAAgCQAOABALACIAEABQAZAWAFAsIADABQALADAKAIQALAGAJAHIAEACQARAXALAeIABAFQARAkgKguIgCAAIgBgFQgHgcgVgPIgBgEQgMgKgQgGQgCgIgCgFQgUgkgZgcIgEgBQgJgIgVADIgCAAIgBgGIAAgCIABgBIAAgBIABAAIAAAAIAAgBIABgJQAFgUAAgUIABgCIAEgGIAAgDIAAgDIAJgXIABgEIAAgDIADgFQAFgHAEgIIAJgNIAAgCIABgDIAEgDIACgDQACgDAAgDIABgCIAFgIIAAgBIAAgCIABgCQAGgLAKgJIgBgBIABgDIADAAIABgIIAAAAIABgEIgFgZIgBgCIgBgBIAAgCQAAgGgFgEIAAgHQgCgXAAgXIABgDIADgVQADgNAEgMIADgHQAJgUAOgOQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQASgNAVgLIAFAAIAYAAIAFAAQAKgEAOgBIAFAAQAKAAAJgDIAAgCIAdgFIAFAAQAOgGAUgBIAAgDQAogNAdASIAEABQAaAWAlAKIAFACQARAGAWADIAEAAQAIAKAMAEIAFAAQANAJAZgBIAAACIAAAFQgIATgGAUIAAACIAAADIgBAEQgEAIgFAHIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDABIgBAAIAAAEQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAABIgDAGQgGAPgNAHIAAAEQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgrAog0AcIgUALIAAAFIgEABQgGADgKAAQABAMALgBIAAAAIAAACIABABIADADIABAFQAEAHgBAJIABACIAEAGIAAADIAAACIABABIABABIAAAEQABAFADAFIAAAEIAAALIABACIABACIAAAGIAAAiIgBACIgBACIAAAEQACANgGAKIAAACIgBACIgBABIgBAEIAAABIgBACQgFAKgGAJIgBADQgIASgHATIgCABIgBACIAAABIAAABIgBACIgFAIIAAACIAAABIgBACIgFAEIgBACQgDAMgJAJIAAABIAAACIgJAMIgCACIAAABIgcAkIgQAQIAAADIgBACIgCABIgOASIgDAEIgDADQgGAEgFAFIAAAEIgFAAIADAFIAAABIABACQAEALAAAOIACAAIAAAaIAAAXIAAAFIAAAJIAAAGIgDAAQgFASgLAKIAAAGIgBADQgOAVgTAOIgEABQgGAGgKADIgFAAgAqXLRQgyARgmAfQgVARgRAWIAAAEQAogqA7gZQAegMACgNIgFABgAndGnQAIAJAKAGIAEABQAqASghgWIgEgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgHgKQgOgRgTgLQAFARALALgAIpOmQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQgLgPgOgNIAAgFIAAgEIAAgEIAAgCIAAg1QAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAIABgDIADgBQAGgZgJgOQgUhXg8gzQhehQg1h4IAAgFIAAgZIABgBIAMgTIABgEIAAgFQALgIABgQIgCAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgVgOgRgRIAAgDQgLgBgDgIIgBgCIgBgEIgCgEIgVgbIAAgEIADgDQAFgEABgIIABgEQAHgeAkgCIABgCQAhgGAegJIAEAAQALgJATgBIAEAAQAMgFARgCIAAgCQAcAAAUgIIABgCQAXgOAPgDIABgCIAAgGIAFgDIAEgBIAEgBIABgEQAlAAApASIAFABIACABIgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAIAAABIABABIAIAMIgBABQgDgIgHgEQAGAPABAYIACAAIABAHQACAQAGALIABAFQAFAIABANIgBARIAAAFIANAWQAXAtAOA1IAIAoIAAAFIAAAdIAAAFIAAAEIAAAGIgDAAIgaArQAFA8AJhFIABgGQAJgGAJgJIABgEQAAAAABAAQABAAAAAAQABAAAAAAQAAgBABAAIABgDQAOgIAZADIAEAAQASAGAGASIABAEIgBAFQgIAVgQAOIAAAEIgDABQgGAGgKADQAAAIAKgCIAFgBQAdgDALAQQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQACAJAIAAIAFABIANAUIABAEQgDALAIgBIAFAAQAKAhAdAOIAFACQALAbgLAaIAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgDAFgFAFIAAAFIgBAEIgXAVIAAAEQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQggAVglAQIAAAFIgEAAIgPAJIAAAGIgBAEQgCAJgDAHQgEAHgFAGIAAAFIgBAFQgLAbgkACIAAAFIgFABQgYAEgWAAQgtAAgjgTgAJtMYQAIAJAUgFQAAgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAgBIAEAAQBGgDAqgeIgFABQgxAUhDADIAAAFIgFAAIgCgBQgMAAgFAFgAJFLVIABgFQAHgMACgRIAAgFQALgIAEgQIAAgFIADgBQAZgiAjgXIgFABQgqANgVAiIAAAFQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgEAJgHAEIAAAGIAAAEIgBAFIgJATIAAAGIAAAEIgFAAQABA1AIgmgAHJFaQAiA0A+glIgFABQg/AQgdgkIABAEgANVKkQAUgJANgQQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAFAAQAbAJgVARQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAABQgOAIgOAIIgFABIgBAAQgGAAgDgVgANSKjQgHgLgEgMQAXgIAMgUIADgBQALgDgBAIIAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEAAIAAAGIgDABQgLAOgPAIIAAAGIAAAEQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBgAM8J/QgLgJgHgMIAAgFQAEAAAEgCQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAPgFAEgPIABgFQAXACAIAQIACAHQgIAegjAEIgBgEgAMaJdQgPgHgNgJIAAgFIAAgKQAOgKAHgRQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAjgPAIAiIABAJQAAAWgUADIAAAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgGADgJABQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBgAvEAgIgOAAIAAgDQgLAAgGgEIgFgQQgFgJACgLIABgFIAAgBQACgJgBgJIACgCIABgDIABgFQAHgKACgHQAHgSgfAZIAAAFIgFABIgFAEIAAAFIgDABQgFARgQAGIAAAFQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAIAAABIgBAAIgBABIgBABQgLAFgMgEIgCgCQgFgEgDgGIgBgEQgBgFAAgFIABgBIABgCIAAgBIAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAIACgIIAFgHIABgFQAdgXAAgXIgFADIgFAAQgJAAgFAFIAAAFQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgTARgfAGIgFAAQgNABgIgFIgBgBQgCgFAAgEIACgNIATgZIADgCQAUgJAXgGIAGgBQAKgBAHgEIACAAIAAgBIADgBQATgBACgJIABgBIAAgCQACgDgBgCIAAgVIgBgcIAAgfQACgCABgDIABgEIAAgFIAAgHIACgCIAAgEIAAgBIAEgHIAQgdQAZgfAdgdIAEgHIANgTIACgBIACgBIABgBIACgFIALgIIABgEQAMgMAQgIQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIAHgCIANgGIAKgGIAFgEIAEgBIAEgIIABgBIAAgBQADgJABgKIAAgDIAEgNIACgDIADgDQAGgIAFgJIAAgBIAEgDIACgDIAUgSIAKgJQAOgHAJgLIAEgBIAngaQAYgOAXgOIAOgIIAagLQAKgCAFgGIAEgBIAAAAQATgHARgIIANgEIAIgDQAPgEANgGQAKgCAIgDIAGgCIADgBQAOgCALgGIAEgBIA1gOIAFAAIAZgFIAOAAQAOACAIgHQAqgFAvAAIAFAAQAkAcADgJQAdACAUgWIAAgCIAAgCIAFgCIAIAFIAEACIABgBQANAEAQABIADAEIAsgEIAEgEIAKgBIAGgDIAqAFQAWAEAYAAIAYgFIAFAAIAFgBQAngCAYgQIgFAAQgiAEgdAKIgFAAIgLAAIg4AAIgEAAQgUAAgQgDIAEgDIAFgKIAGgGIAHglQALAPAIAOIAHAHQBdAUgEhiIAAgGQAggdgRguIgEgDQgDgFgEgEIAAgCIgCgBIgCgEIgHgFIgIgEIAOgCIAdApQgFAlAPAiIAFAiIABABIABADQAFAYAPAUQANAKAOAHQAIgBAGgCIACgBIAJgDIACAAIAFgEIARAAIAJgDIAOgXIACABQANAGAOACIgBABIAIAAQAQACAQgEIABAAQAOgCAPgFIALAAIAfACIAUABIAWACQBAACA/ALIAjAGQAVAEAVADIAGABQAWAHAXAEQAHAEAEgDIAWAHIADACQAMAGAOADIADABIAGADIA7AbIAeAPIAEACIALAIQAcAOAZAVQAYACANAUIABACQAMAIAOAGQAVAIARAOQAMAJAJANQANASAIAVIADAJQAIAVADAXIAGAmIACAsQADAlgDAlQAAALAJABQABABABAAQAAAAABgBQAAAAABAAQAAgBAAAAQAJABAJgFQAOgJAQADQAGADAEAGIADAEQACAFAAAFQgMAZgqAEIAAABIgBABIgQAAIAAAAIgDABIgDACIgBAAIABABQgCACABADQAAABABAAQAAABAAAAQAAAAABABQAAAAAAAAQAYADAYAIIABACIAGAFIACADIABABIAAAAIABACIAAACIABABIAAABIgBABIgBABIAAABIAAABQgDACgCAEQgCAFgEAAQgUADgTgDIAAgBQgRgDgMgEIgCAAIgDgBIgBgCQgPgGgSgBQAFALAKAFQAAAFAGABIAHAFIAHAFIADACIADAFIACABIABABIABABIABACQADADABADIACADIABABIABAEQACAFAAAFIAAAFIAAACIgCACIgCABIgCAAIgBABQgPACgPgBQgRgIgPgLQgOgKgPgIIgGgEQgMgLgLAJQgCAFAEAEIADADQADAKAHAGIACAIQAEAPAIANIACAIIAFAQIAAAFIgGAIQgLAMgPAAIgLgCIgGgLIgKgUQgRgfgZgbQgEgEgFACQgKAEgDALQgIAOgKALQgEAFgDAEIgSAMQgPAKgPgDQgFgKgJgJIgCgEIAAgQIAEgNQANgOAMgPIAXgRQAHgFACgHIAAgDQACgGgEgHIgCgCIgEgBIgBgFIgBgCQgDgSgBgTIgCgBIgBgCIAAgEQgFgPAAgRIgBgCIgCgCIAAgDQAAgUgGgSIAAgEIAAgHIAAgdIACgCQACgDAAgEIgCgCIgBgBQAEgQgGgJIAAgCQgUgCgTAAIgFAAQgwgIgsgMIgEgBIgGgDIgBgFQgOgXgPgVQgcglgigfQAdAgAYAkQARAZAPAbQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAQAfALAiIAEAMQAKAeAGAgIABAHIAAAEIgBAEIgEACIgHgBIgEAAIgPgGIgCgBQgZgIgcgCIgQgCQgYgEgYgCIhXgLIgtgHQgqgIgrgEIgPgCQgrgJgrgFQgsgHgtACIgLABIgxAEQhBADg/AKIgLAAQgNABgKAFQgDgBgDABIgBAAIgBAAIgDABIgiALIg1AVQgoAQgnAQQgqASgkAbQglAcgqATQgmATgmARIgMAGIgOAJIgUALIgFADIgFgJIgEgKIgDgDQgDgFgBgFIgDgFIgDgJIgDgDIgBgBIAAgCIAAgBIgBgDIgBgBIAAgCIAAgBIgCgDIgCgEQABgEgCgFIgBgDIAAgDIAAgKIAAgBIAAghIAAgFIAAgMIAEgPIABgBIABgCIAAgCIAAgBIAAgCIADgDIABgBIABgEQACgFADgEIACgEIACgHIADgFQADgEgBgGQACgBABgDIAAgBQADgEABgDQABgIAFgIQgBgFACgGIAHgGIAAgCIgCgDIAAgBIAAgCQAIgPAKgPIABgDIAEgBQAXgaAHgRIgDABIgFAHQgDgEgFABIAAAAIgCABIgDADQgUAQgOAVIAAACIAAABIAAACIgCACIgCACIgBAEIgDAGIAAACIAAABIgBACIgBACIgBAGQgCABgFgCIAAACIAAADIgEABQgLAGgPACIgEABIAAAEQguATgtAWQgfAOghAEQgLgEgIgLIAAAKIgCABIgBABIAAACIgDAVIgBACIgBABIAAADIgCAOIAAABIgCADIAAACIgBAGIgCABIAAAFIgEAMIgBABQgCAEAAADQgGAJgCAJIgCACIgBAAIAAADIAAADIgFAEIAAACIAAABIgBACIgDAHIgCADIAAAAIgCACIAAAAQgOAWgSASQAFASAGgOIABABIAEgFQAQAGAWgBIAFAAQARAQAaAIIAFAAIAAAEQgEAggZAJQgQAAgQADQgPADgOgCIgCgBIAAgCQgNgCgHgFIgEAAIgKAAQgDAPAHAFIABAEQANAUAAAeIgBACIgEAEIgIAEQgPAIgRgBQgDgCgFgBIgDgBIgHgHQgIgagLgaIAAAAIAAAAIgBgDIgBgBIgCgFIgBgEIgBgDIAAgCIgBgBIgDgCIgCABIgCABIAAACIgEADIAAARIgBACIgBACIgBADQgDAKgBAMIgBAEIgBAKIgBADIAAADIgBAAIAAACIAAADIAAABIgEABIgFAEIAAADIgCACIgDAAgACyloIAHAAIgBgBIgEgBIgCACgAgDr7IgDgDIgBAAIgDgDgAjRuIIgBgBIgKgKIAAgFIAAgPIAAgDIABgCIACgCIAAgCIAAgCIAAgCQADgEAFgDIACgBIALgBIABAAIABAFIADAFIACABIABABIgGAQIgDABQAAAEgCAEIgIASIgCgCgAEGu0IgKgZIgFgoIACgCIAMAAIABABQAIAJAGALQAGAKgDAKIgCABIAAACIAAACIAAADIgJAPIgDAFIgBABIgCgDg");
	this.shape_2.setTransform(2.3,-12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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KIgEABQgeAcgsAOIgBAEQgGAGgHAFIAAAFIgDALQgEAPgIANIgBAEQgMAYgeAFIgBADQgcAFgaAAQgzAAgogWgANgMLIAEAAQAPgIANgJQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAUgSgbgIIgEAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABQgMAQgUAJIAAgFIAAgFQAPgJAKgOIAEgBIAAgFIADgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgFQAAgIgKADIgDABQgMAUgYAIQAFAMAHALQAAAAAAABQAAAAABAAQAAAAAAAAQABAAABAAQADAXAHgDgANHKgQgEAPgPAEQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQgEACgFAAIAAAFQAIAMAKAJIABADQAkgDAIgfIAAgFQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgIgRgXgBIAAAFgAMXJ0QgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgIASgOAKIAAAKIAAAFQAOAJAPAHQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAABQAJAAAGgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAAgEQATgDAAgWIAAgFIAAgEQgGgYgTAAQgIAAgKAEgAsLPQIgDgCQgHgIgFgIIgCgBQgJgZgOgTIgCgBIgBgCIAAgBIgDgEQgHgIgJgHIgGgFIAEgCIgCgIIACgCIAAgDIAAgDQAFgMAMgBIgBgFIgBgBIgCgCIAAgOIAAgDQALgQASAAQAJgNAFgQIABgDIACgCQAQgUAWABIABAAIAFgBIACAAIgBACIANADIAFADIAAgIIAAgFIAAgTIAFAAIAAgFIAFgEIAFgBIAAgFQARgGAaABIAFABIAAgFQAHgFAFgJQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAAgFQAJgGAGgLIABgKIABgHQAEgFAAgHIABgEIgBgFIABgBIABgCQgBgHADgHIADgFQgBgHACgHQABgDAAgDIABgCIABgCIAAgBIAAgCQAHgNAJgNIADgEIAAgBIAAgCIADgFIABgDIACAAIABgCIAAgDIAGgHIACgDIABgCIAAgCIABg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gDQgDAJgjgbIgFAAQgvAAgrAFQgIAGgNgBIgPAAIgYAEIgFABIg2AOIgEABQgKAGgPACIgDAAIgFADQgJADgJACQgNAGgPAEIgJADIgMAEQgRAIgTAGIgBAAIgDACQgGAGgKABIgaAMIgOAHQgXAPgXANIgoAbIgDABQgKALgOAHIgKAJIgUASIgBADIgFADIAAABQgFAJgGAIIgCADIgCADIgEAMIAAAEQgCAKgDAJIAAABIgBABIgEAIIgEABIgFADIgKAHIgNAGIgGACQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQgRAJgMAMIgBAEIgLAIIgCAFIgBABIgBABIgDABIgNATIgEAHQgdAcgZAgIgQAdIgDAHIgBABIAAAEIgBABIAAAIIAAAEIgBAFQgBADgDACIAAAfIABAcIABAUQAAADgBADIgBABIAAABQgDAKgTAAIgDACIAAABIgCAAQgHADgJACIgGAAQgYAHgTAJIgDABIgUAaIgBAMQAAAEACAFIABABQAIAEANAAIAFAAQAegGATgQQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAAgEQAFgFAKAAIAFAAIAEgDQAAAWgdAXIgBAFIgFAHIgCAHQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABIAAABIAAABIgBACIAAABQgBAFACAEIABAFQADAGAFAEIACACQALAEAMgFIABgBIAAgBIABAAIABgBQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAAgFQAQgGAGgSIADAAIAAgFIAFgEIAEgBIAAgFQAfgZgHASQgCAGgGALIgBAFIgBADIgCABQAAAKgCAJIAAABIgBAEQgBAMAEAKIAFAPQAHAEAKABIAAACIAPAAIACAAIADgBIAAgDIAFgEIADgBIABgBIAAgDIAAgCIAAgBIAAgDIACgDIABgKIABgFQABgLADgKIAAgEIACgBIAAgCIAAgRIAEgEIAAgBIADgCIABAAIADACIABABIAAABIACADIABAEIACAFIAAABIABADIABABIAAAAQAKAaAJAbIAHAGIADABQAFABADADQAQAAAQgHIAIgFIAEgDIAAgCQAAgggNgTIgBgEQgHgFADgQIAKAAIAFAAQAGAGANACIAAACIACABQAOABAPgCQAQgEAQABQAagKADgeIAAgEIgEgBQgagHgSgRIgFABQgWABgPgGIgEAFIgCgBQgGANgEgRQARgTAOgVIABAAIABgDIAAAAIACgDIAEgGIABgCIAAgBIAAgCIAEgFIAAgCIAAgDIACgBIABgBQADgKAGgIQAAgEACgDIABgBIAEgNIAAgEIABgCIABgFIAAgCIACgDIABgBIACgPIAAgCIAAgBIACgCIADgVIAAgDIABgBIABAAIAAgKQAIALALAEQAhgEAfgOQAtgWAvgUIAAgDIADgBQAPgCAMgGIAEgBIAAgDIAAgCQAEABADAAIAAgHIACgBIAAgCIAAgBIAAgCIAEgGIABgFIACgBIABgCIABgCIAAgBIAAgCQAOgVATgRIADgCIACgBIABAAQAEgBADADIAFgGIAEgBQgIARgXAZIgDABIgBAEQgKAPgJAPIAAACIAAABIADADIAAACIgIAGQgBAGAAAFQgEAHgCAJQgBADgDADIAAACQAAACgCACQAAAGgCAEIgEAFIgCAGIgBAFQgEAEgCAFIAAADIgCACIgCADIAAACIAAABIAAACIgBABIgBACIgEAOIAAANIAAAFIAAAhIAAABIAAAKIAAACIABAEQABAFAAAEIACAEIACADIAAABIAAACIABABIABACIAAACIAAABIABACIADADIADAJIADAFQABAFADAFIACADIAEAJIgKAGIgEgHQADAQgRgnQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQgIgDAEgNIAAgDQgFgKgBgLIAAgFIgCgBIgBgKIgBghIACAAIABgOIACgLIAAgYIAFAAIAAgEIAAgFIAAgFIAAgFQAIABgBgLIACAAIAAgEIAAgFQAKgJAGgMQgWAPgaAKIgdALIgWAIIgBABIgCAAIgCABIgTAGIAAAAQgiALgrABIAAAFIAAAFQgDAUgHAQIgDAFIgBAEIgBADIAAABIAAABIgCABIAAABIgBAEIAAABIgBABQgHATgKARQgJATgMARQADAQAZgFIAFAAIA0AaQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAABIAAAFQgCAvguAFIgFAAIgTABQgYADgWgKIACAEIAAADQADAEABAFIACADIABAFIABADIADAPQAHANgGAXIgCABIgFAAIgBADQgYAOgWgEIgDgBQgJgCgJgGIgBgEIgDgFQgFgFgDgGIAAgBIAAgBIgBgCIgBgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgCIAAgDIgDgCIgBgBQABgDgBgDIgBgFQgDgFAAgGIAAgDIAAgBIgBgCQgCACgCAHIgBADIAAACQADAUgHAIIAAABIgBADIAAACIAAAFIgBAEQgCAGgEAEIAAABQgMALgPAAIgLgBgAoKk/IgBACIACgDIgBABgAOmAnQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAIgHgKQgIgJgEgPIgBgDQgTgTgOgaIgCAAQgOAWgSATIgHAFQgJAGgKAEIgsAAIgDgFIgEgFQgBgTAFgTIAAARIADAEQAIAJAFAJQAQADAPgJIASgMQACgFAEgEQALgLAHgOQADgLALgEQAEgCAEADQAZAcASAfIAKATIAFAKIALADQAQAAALgNIAFgHIAAgFIgFgPIgCgIQgIgNgDgPIgDgIQgHgHgDgKIgCgCQgEgEACgFQAKgJANAKIAGAFQAPAIANAKQAQALARAIQAPABAOgCIACgBIABgBIADgBIABgBIAAgCIAAgGQABgFgDgEIgBgEIAAgBIgDgDQgBgDgCgDIgBgDIgCgBIgBgBIgBgBIgDgEIgEgDIgHgEIgHgFQgGgBAAgFQgKgFgEgLQASABAPAGIAAACIADABIACAAQAMAEARADIAAABQATACAUgCQAFgBACgEQABgEADgCIAAgBIABgBIABgBIAAgBIAAgBIAAgBIgBgCIAAgCIgBgBIAAgBIgCgCIgGgGIgCgBQgXgIgYgDQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBgDABgCIAAgBIABAAIACgCIADgBIAAAAIAQgBIACAAIAAgBQApgFAMgYQAAgGgCgFIgCgDQgEgGgGgDQgQgDgPAIQgJAFgIAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgKgBABgLQACglgCglIgDgsIgFgnQgDgWgJgWIgCgJQgJgUgNgSQgIgNgNgJQgRgOgUgIQgOgGgNgJIgBgCQgNgTgYgCQgYgVgdgOIgKgJIgEgBIgfgQIg6gaIgHgDIgCgBQgOgDgNgGIgDgCIgWgHQgEACgGgDQgXgEgXgHIgFgBQgWgDgUgEIgjgGQg/gLhAgDIgXgBIgTgCIgggBIgLAAQgPAEgOADIAAAAQgRAEgPgCIgIAAIAAgBQgNgCgNgGIgCgBIAMgXQAOAEAPABIADABQAaACAbAAIAAgBIAYABQAlAAAkAGIAOABIAAAAIATACIAFAAIAFAAQARAAARADIAAAAIARACIACABIABAAIADAAQAZAEAaAFIA7ALIANADIAAAAQAmAFAiARIABAAQAeAHAbAPQADACACACQAXAKAVALIAKAGQAhANAcAWIARANIALAIIAQALIAGABIAAADQAPAEANAHQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAMAFALAHQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAABQAJAGAHAIIAEAEQAMAOAJAQIAAAAIAKATQAMAaAFAeQAKA7gBA8IAAADIgBALIAAABIgBAXIABAAIATgGQAFAAAHgCIADgCIAEABIAGgDQACAQAWAFIAAAAIAAACIADAIQAHAUgPAPIgFAEQgLAIgMAEIAMAJQAUASgQAVQgGAJgKAEQgPAHgRgEQgLgDgMgBIAGAIQAPARgIAPIAAAEQgBANgPAEIgFABIAAAAIgBAAQgcAFgYgPIgOgIIgUgNIgDgCIABADIAEALQALAOADAWQABAJAAAJIAAAKIgDAAIgBAEIgDACQgKAOgTACIgLABIgQgBgAMVhNIAFgIIAGgRIADgCQAFgGAHgBIAAgBQgDgDgCgEIgBgMIgDgPIAAgBIgBgBIgDgYIgHhrIAAgIQAAgLgEgIIAAgUIgFABQgSADgGgJIgFAAQgygBgmgNIAAAFQANAXAKAbIAEAMQAKAgAGAlIgPgHQgGghgJgdIgEgMQgMgjgQgeQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgPgbgRgZQgYgkgcggQAhAfAcAlQAQAVAOAXIABAEIAFAEIAFABQAsAMAwAHIAFABQATAAATACIAAACQAGAJgEAQIACABIABACQABAEgDADIgBACIAAAdIAAAHIAAAEQAGASAAATIAAAEIABACIABACQABAQAEAQIABADIABACIABACQABATADARIACADIABAEIADABIACADQAFAHgDAGIAAACQgCAIgHAFIgXAQQgMAQgNAOQAFgOAJgOgAgRqOIgpgGIAEgDQAQADAUAAIAFAAIA3AAIAMAAIAFAAQAdgKAigEIAFgBQgZARgmACIgFABIgFAAIgYAFQgYgBgXgDgAigqSIAFACIAAABIgFgDgADGqcIACAAIgIADIgCABIAIgEgAjUrSIAAgCIAAgCIgBgCIgCgCQABgGgDgFIgCgEIAAgGIAAgEIgEgGIADgEQgFgBAAgEQgBgEADgCIACgBIACgBIAAAAIAAgBIAAgCIAAgCIgCgCQADgEACgHIABgHIAAgBQgHgEgEgIIgHgLIAAgRQgBgPAFgNIACgCIANgNIABAAIABgBQAEAEAIgBIABAAIADABIAAgBIAAgCQAAgWgBgWIgCgUIAAgCIAAgGQABgCADgCIADgBIACABQAEgCAJAEIAEACIgBgTIAAgbIABgCQAIgDAHAHIADACIAAgHIACABQAAgWAJgTIADgEIADAAQAFAAACADQAIABAHAFQAIACAIAGQACACADAAIAGgDQAAgFAEgCIACgBIAOgZIAAgDIABgCQADgHAHgDQAGAFAFAGIAHAGIABAAQAUgRAVgLIAAgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQANAHAIALIAKgKIADgEIACgCQAEgMANgDQAMADAGANIADAFIACAEQALgFALgGIAHgGQADAAACADIAAAAQAKAEgIAGIAEASIAAADIABABIABABIAEgCQAOgGARgEQAFgBABAGIADAPIAAABIABABIABADIABACIACACIAAABIAAABIAAABQADACAAADIAAABIACACIAAABIADgBQAIgEAHgFQADgBACADIAFAUIACgBQARgEARgDIAGgCIABABIACAAQAOABgIALIAAAAQAFAHgBALQgBAHAAAGIAAAPQAAAOgDAOIgCAGIAAAAIAEgCIABgBQAEADAHAAQAPAIAHAVIABACQACATgIAQIgLAVIgCADQABAHgBAGQAAANgFAPIAAABIgEgPIgJgoIgDgEIAAgDIgCgUIALAZIACADIAAgCIAEgEIAIgQIABgCIAAgCIAAgCIACgCQACgKgFgJQgGgLgIgJIgBgBIgNAAIgCACIgDgZIgBgBIAAgCIABgFIABgFIABgCIAAgEIAAgBIgBgoIAAgBIgpAJQgEABgBgEIgBgDIgDgBIAAgBIgBgGIAAgEIgBgCIgBgCIgFAAIgDABIAAgBIgGADQgFgBgEgGIAAgCIAAgBIgDgFIAAgBIgBgBIgEgDIAAAAIAAgDIAAgBIgCgBIgBgMIAAgDIgMAEIgBABQgEADgFACIABAAIgBAAIgFABQgDAEgFABIgEgGIgCgEIgDgHQgCgHgFgFIgLAIQgIAEgIgBIgCACQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgGgDgCgGIgBgCIgDgBIgHgMQgJARgQAMQgHAFgGgHIgBgDIgBgBIgDgDIgDgCIgBgBQgEgEgEgCIgBABIgCACIAAABIgBABQgKAGgHAJIgGADIgCABQgIAKgJgLIgEgEIgEgEIgBABIgCAFIgBAEIgHAFQgKAQgRAJIgGAAIgDAAIABAAIAAgBQgEAAgEgDQgEgBgDgDIgLgEIAAAAIgBAIIAAACIgBACIgBABQAAAQgIANIgBABIgCACIgBAEQgBAAAAAAQAAAAgBAAQAAABAAgBQgBAAAAAAIAAAAQgEAFgGgBIAAADQABAJAAAKIAAAEIgGANIgBAAIgFAAQgEAFgIgDIgGgDIAAACIAAAEIgBAwQAEgMAGgMIABgCIAEgHQADgFAGgFIgCAGIgJAYIgDAFIgOAlIgCgBIgCgBIgCgFIgCgGIgBAAIgLABIgCACQgFACgDAFIAAACIAAACIAAACIgBACIgBACIAAADIAAAOIAAAGIAJAJIABACIACACQgQApALAvIAAAFIABAFIgBgBgAg8wsIAAABIACgDIAAgBIgBAAIgBADgABZtQIgEgJIADAAIAAADQAEAEACAFgAAFwKIABAAIAAAAIABAAIgBAAIgBAAg");
	this.shape_3.setTransform(2.3,-21.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("AjlBmIADAAIAAABIgDgBgAjUAwIAAgEIABgCIAFADQAJADADgFIAFAAIABAAIAGgNIAAgEQABgKgCgJIAAgDQAHABADgFIAAAAQABAAAAABQAAAAABAAQAAAAAAgBQABAAAAAAIABgDIACgCIABgBQAIgNAAgQIABgBIABgCIAAgCIABgHIAAgBIALAEQADADAEABQAEADAEABIABAAIgCABIADgBIAGAAQARgJAKgQIAHgFIABgEIACgFIACgBIADAEIAEAEQAJALAIgKIACgBIAGgDQAHgJAKgGIABgBIAAgBIACgCIACgBQAFACADAEIACABIACADIADACIABABIABADQAGAHAGgFQAQgMAKgRIAHAMIACABIABACQACAGAGADQAAABABAAQAAAAABAAQAAAAABAAQAAAAAAgBIACgCQAJABAHgEIAMgHQAEAEACAHIADAHIACAEIAEAGQAFgBADgEIAFgBIABAAIgBAAQAFgCAEgDIABgBIAMgEIAAADIABAMIACABIAAABIAAADIAAAAIAEADIABABIAAABIADAFIAAABIAAACQAEAGAFABIAGgDIABABIACgBIAFAAIABACIABACIAAAEIABAHIAAAAIAEABIAAADQABAEAEgBIApgJIAAABIACAnIgBABIAAAEIgBACIgBAFIgBAFIAAACQgJgIgHgNQgDgBgFgEQg4gthPACIgDgCIiGAHIgcANQg1AXgZAzQgFAEgEAFIgEAIIgBABQgGAMgEAMIABgwgADGgIIABABIAAgBIAAAAIgBAAgAgYguIADAAIgBAAIgBAAIgBAAgAjlAvQgBgGABgFIACAUIgCgJgADhAvIACgGIADADIgBABIgEACgAhahQIABgDIABABIAAAAIgCADIAAgBg");
	this.shape_4.setTransform(5.3,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bublyinginsand, new cjs.Rectangle(-114.5,-132.1,233.6,221.9), null);


(lib.bubface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AibC0QgEAAgEgCQgKAAgJgEIAAgBIAAgBIABgBIAAAAIAAAAIAEgKIgCgBQgUgNgOgXIgBgCQgEgLgGgLIgBgEIgBgGIgGgOIgBgDIAAgEIABgBIABgBIABgEIAAgCQAEgYgCgZIgBgCIgEgCIAJgSQACgDgBgEIAEgCIAGgPQADAAAEgFIACgBQAKgNADgOIAEgFIABgCIAFgJIAOgSIABAAIAGgHQAEgEABgEIAAAAIABAAIABgBIAAAAIABgBIABAAIAHgGIAEgDIABgBIAIgGIAEgFIACgBIABAAIAAgBIAEgCIAFgCIAHgGIAEABQABgDADgCQAagMAcgFIAIgCQAWgDAWgCIABAAIAKAAQAZgCAYACIAUACQAQADAQAEIARAFQAPAGAOAIIALAIIAAAAIAAABIACAEQAKALALAJIAAABQAEAIAGACIACACIAAAAIADAEIABAAIADABIAEgCIAAAAIAFAoIgDgIIgBAAQAAAMACALIgBABIAAAEIAAAOIABACIACACIAAAEQACARAAARIACACIABACIAAACIAAACIAAAMIABACIACACIAAAEQAAALgEAKIgBACIgBACIgBACQgBAIgEAIIgCACIgDAEQgHAUgOAPIgMAMIgCABQgPAIgHAMQABABAAAAQAAABAAAAQABABAAAAQAAAAABAAIAFgBIABgBIAEgBIAIgEIABAAQALgGAKgJIALgMIACgEIAGAFIgCACIACAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAAABIgBAEIgBABQgIALgKAHIgDABQgGACgHAAIgTAGQgKAEgMgBQgFAAgFgDIAAAAIgEgCQgCgDgEgBIgHgFQgMgJgCgPQgCgNgEgLIgDgIIgBgBIgBgBIAAgBQgEgDgCgGQgFgQgIgQQgHgPAEgQIADgKIgBgKIgCgHIgEgGQgEgHgHgEIgCgBQgGgCgDgDIgCgBIAAAAIgNAAQgJADgIAEIgJAGQgGAEgFgCIgBgCIgBABIgOANQgDADgEAEIgCABIgIANIAAABIgBAAIgCAGIgCAHIgBADQADAIgGADIgBAAIgCAVIgEApQgBAJgCAIIAAAGQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABIAAABIAAABIAAABIAAABIgBABIgDADIAAAAIgBACIAAABIgBACIgBABIgDAIIgBABQgFAHgHgDIgBAAIAAgBQgNgDgLgEIAEAHIATADIAAAAIABACIAAABQgEAEgFABQgaAGgbAAIgKgBgAA5grIgBgBIAAAAIABABgAgxhsIAAAaIAFgGIAAgQIAEgBIABgEIAAgEIAAgFQAXghAsANIAFAAQAOAKABAYQAFAFAEAHQABgRgFgNQgDgIgFgGIgHgGIgFgBQgwgWgdAqIAAAKIAAAEIgFAAgAh/hvQgOADgDALQABAFAGgBIA3gJIAIgBIADgDIABgCQAAgEgDAAIgJgCIgUgBIgZAEgABjiYIgBAAIgDABIgUAGQgIACABAHIACACQAeAAAggDIABgBIABAAIABgCIABgCIgBgCIgFgFQgIgFgLAAQgFAAgHACg");
	this.shape.setTransform(-0.2,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai7C2IgIgFIgCgBIgBABQgGgDgGgFIABgBIgFgHIgDgFIgHgLIgIgMIgFgHIAAgCIAAgCIgBgCIgBgCIgBgKQgLguAQgqIAEADIABACQACAZgEAYIAAACIAAAEIgCABIgBAAIAAAEIABAEIAGANIABAHIABAEQAGAKAEALIABACQAOAYAUANIADABIgFAJIgEgBgAhpCxIgEgHQAMAEAMACIAAACIABAAIgCACIgTgDgACeCsQAIgMAOgIIACgCIAMgLQAOgQAHgUIADgDIACgDQAEgHACgIIAAgCIABgCIABgCQAEgKAAgMIAAgEIgCgCIgBgCIAAgLIAAgDIAAgBIgBgCIgBgCQgBgSgCgRIAAgEIgCgCIgBgCIAAgNIAAgEIABgBQgCgMAAgLIABAAIADAIIACATIAAAEIADADIAJAoIAFAPIgBAGIAAAEIACACIABACIAAAHQAAAagKAYIgBACIgCABIgDADIgDAHIAGACIgMAXIgGgFIgCAEIgLAMQgKAJgLAHIgBAAIgIADIgBAAIgDACIgBAAIgFACQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAgAjXgWIAOglIADgFIAJgYIADgFIAAgBIABgBIABgCIAHgGIAHgHIAKgNQAagaAjgNIAVgGIAPgFIAVgFQAIgCAKAAQALABAIgDIAhAAQAngCAlAIIAVAFQANAEANAGIACABIAQAJQAVAOAQARIAGAIIABABIgBAAIABADIAAgBIAAgBIAAgBIAAAAIAAgBIABgBIABgBIAAgCIABABIADAZIAAABIgEACIgDgCIgBAAIgDgDIAAgBIgCgBQgGgCgEgIIAAgBQgLgJgKgMIgCgDIAAgBIAAgBIgKgHQgPgJgPgFIgRgGQgQgEgQgCIgUgCQgYgCgZABIgKABIgBAAQgVABgXAEIgIABQgcAFgaAMQgDACgBADIgEAAIgHAFIgFADIgEACIAAAAIgBABIgCABIgDAFIgJAGIgBAAIgEADIgHAGIgBABIgBAAIAAAAIgBABIgBABIAAAAQgBAEgEADIgGAHIAAABIgPASIgFAJIgBABIgEAFQgDAPgKAMIgCACQgDAFgDAAIgBgBgAgzhgIAAAAIAFAAIAAgFIAAgKQAdgqAwAWIAFABIAHAHQAFAGADAIQAFAMgBASQgEgHgFgGQgBgXgOgKIgFgBQgrgMgYAgIAAAFIAAAFIgBAEIgEABIAAAPIgFAGIAAgagAiShUQADgMAOgCIAZgFIAUACIAJABQADABAAADIgBACIgDAEIgIABIg3AJIgBAAQgFAAgBgEgABEh6IgCgCQgBgHAIgCIAUgFIADgBIABgBQASgFANAJIAFAFIABABIgBACIgBACIgBABIgBABQgbACgaAAIgJAAg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("Ah7gaIAdgNICFgHIADACQBPgCA5AuQAEADADABQAHAMAJAJIAAABIAAABIgBABIAAACIAAAAIgBgBIgBgBIgGgHQgQgSgUgMIgRgKIgCgBQgMgGgOgDIgUgFQgmgIgnABIggAAQgIAEgMgBQgJgBgJADIgUAFIgQAFIgUAGQgkAMgaAaIgKANIgHAGIgHAHIgBACIAAABIgBAAQAYgxA1gYg");
	this.shape_2.setTransform(1.4,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubface, new cjs.Rectangle(-24.5,-19,49.1,38.3), null);


(lib.antwalking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhDhJQgCACgBABQgCACgDADIAAAAQgYAcAAAlQAAAqAdAdQAdAdApAAQAqAAAdgdQAdgdAAgqQAAgpgdgdQgdgdgqAAQgNAAgNADQgBABgBAAAg6hRQAIgFAIgE");
	this.shape.setTransform(-10,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AkqlJQAAAAABAAQACgDAAgEQAAgEgCgDIgBgBQgBACgCACQgEAEgFACQABADABACQADADADAAQACAAACgDgAisjpQAAACAAADAi9h3IgBAIIgFAeIgDAWAgSCJIg4BMIAACEADuCQIgRgXABvClQADAAADAAQANAAANgBQAMAAAMgCQAngFAggNQAIgDAIgEQASgJAMgKQAbgVAAgbQAAgng5gcQg5gahQAAQhQAAg4AaQg4AcAAAnQAAAjAtAaQAFADAGADQAAAAABAAQATAKAYAHQAKgpAagmIg9AlIgeATADuCQIAyBCIAABtAgSCJIASgZABaFWIAAiyIAAgrIAWAA");
	this.shape_1.setTransform(6.9,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACwD/IgVgBIAAgrIAWAAIgWAAIAAArQgjgCgfgJQALgpAZglIg9AlIgfATIAfgTIA9glQgZAlgLApQgXgGgVgKIATgZIgTAZIAAAAIgMgGQgsgaAAgjQAAgnA4gcQA5gbBQAAQBQAAA4AbQA5AcAAAnQAAAbgaAVQgMAKgTAJIgPAHQggANgnAFIgZACIgZABIgGAAgAEvDqIgRgXgAivCvQgdgdAAgpQAAgmAYgcIABAAIAEgFIADgDIgBgDIgBgGIAAgEIgBgDIgDgEIAAgDIAAgJIAAgEIAAgKIgEgDIAAgEIgBgHIAAgDIgCgEIgEgKIgCgHIgBgGIgCgEIgDgDIgEgEIAAgDIAAgEIgCgDIgJgKIgCgEIgCgDIgSgNQgZgPgagGIgEgEIgCgCQgTAAgSgGQgWgHgYgDIAAgDIACgCIADgCQAggHAcAMQAJAEALABIAFAEIACACIABABQAgAJAbAQQAMAIAHAMIAFAEIAHAJIABAEIABADIAAAEIADADIADAEIADADIAAADQAAAGACAFIACADIAEADIAAAEIABAHIAAADIABADIADAEIAAADIAAALIAAADIAAAJIAEAEIAAADIABAKIAAADQAHgFAJgEQAAgKADgIQABgFAAgFIAAgKQAFgGADgIIACgHIABgDIADgEIAAgDIAAgDIACgEIADgDQAGgWAAgXQgBgbgFgbIgDgEIgCgDIAAgEIAAgDIgIgOIgCgHIgbgPQgFgDgGgBQgYgQgfgCIgCgDIAAAAQADgDAAgEQAAgEgDgDIAAgBIADADIAEADIAzAMQAXAPAUATIAOAOIABADIAAAKIAEAEIABADIAAAKIACAEIADADIgBAHIAAAGIACAMQADAPAAAPIAAAHIgCADIgCAEIAAADIAAAEIgDADIgCADIAAAEIAAAHIgBADIgEADIAAAEIAAADIgDAIQgBAEgEAEIgBABIAAAEIAAADIgDAEQgCAIAAAJQAAAEgCAFIADgBQAMgDAOAAQAqAAAdAdQAdAdAAAqQAAApgdAdQgdAegqAAQgpAAgegegAiGAeIAEgWgAjzjvIgCgFQAFgCAEgEIADgEIAAABQADADAAAEQAAAEgDADIAAAAQgCADgDAAQgDAAgCgDgAjpj+IAAAAg");
	this.shape_2.setTransform(0.5,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.antwalking, new cjs.Rectangle(-37,-31.9,76.1,70.9), null);


(lib.scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_43 = function() {
		/* _root.v1.start();*/
	}
	this.frame_51 = function() {
		/* _root.v2.start();*/
	}
	this.frame_66 = function() {
		/* _root.v5.start();*/
	}
	this.frame_90 = function() {
		/* _root.v6.start();*/
	}
	this.frame_130 = function() {
		/* _root.v9.start();*/
	}
	this.frame_137 = function() {
		/* _root.v4.start();*/
	}
	this.frame_144 = function() {
		/* _root.v10.start();*/
	}
	this.frame_165 = function() {
		/* _root.v11.start();*/
	}
	this.frame_173 = function() {
		/* _root.v8.start();*/
	}
	this.frame_180 = function() {
		/* _root.v12.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(8).call(this.frame_51).wait(15).call(this.frame_66).wait(24).call(this.frame_90).wait(40).call(this.frame_130).wait(7).call(this.frame_137).wait(7).call(this.frame_144).wait(21).call(this.frame_165).wait(8).call(this.frame_173).wait(7).call(this.frame_180).wait(121));

	// between
	this.instance = new lib.prepwordsbetween();
	this.instance.parent = this;
	this.instance.setTransform(28.6,73.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({alpha:1},5).wait(25).to({alpha:0},5).wait(137));

	// across
	this.instance_1 = new lib.prepwordsacross();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.3,-51.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(154).to({_off:false},0).to({alpha:1},5).wait(45).to({alpha:0},5).wait(92));

	// beneath
	this.instance_2 = new lib.prepwordsbeneath();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-69.9,13.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},0).to({alpha:1},4).wait(51).to({alpha:0},5).wait(112));

	// out of
	this.instance_3 = new lib.prepwordoutof();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-32.7,-79.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({alpha:1},5).wait(30).to({alpha:0},5).wait(172));

	// face
	this.instance_4 = new lib.bubface();
	this.instance_4.parent = this;
	this.instance_4.setTransform(20.4,-87.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(301));

	// lost bumps
	this.instance_5 = new lib.prepantbump();
	this.instance_5.parent = this;
	this.instance_5.setTransform(14.9,-27.3,1.72,0.271,-5);
	this.instance_5._off = true;

	this.instance_6 = new lib.prepantbumps();
	this.instance_6.parent = this;
	this.instance_6.setTransform(7.3,-20.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(149).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,rotation:0,x:7.3,y:-20.6},5).wait(35).to({_off:false,scaleX:1.45,scaleY:0.31,rotation:28.8,x:-4.8,y:21.6},3).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(149).to({_off:false},5).to({x:6.6,y:-10},5).to({rotation:45,x:-6.2,y:-0.6},6).to({x:-33.9,y:13.7},9).to({x:-25.2,y:10.6},5).to({rotation:180},4).to({x:-8.3,y:19},6).to({_off:true,scaleX:1.45,scaleY:0.31,rotation:28.8,x:-4.8,y:21.6},3).wait(109));

	// bumps ant 9
	this.instance_7 = new lib.prepantbump();
	this.instance_7.parent = this;
	this.instance_7.setTransform(14.9,-27.3,1.72,0.271,-5);
	this.instance_7._off = true;

	this.instance_8 = new lib.prepantbumps();
	this.instance_8.parent = this;
	this.instance_8.setTransform(7.3,-20.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(140).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,rotation:0,x:7.3,y:-20.6},4).to({_off:false,scaleX:1.45,scaleY:0.31,rotation:15,x:-4.2,y:19.2},12).to({scaleX:1.45,rotation:28.8,x:-4.8,y:21.6},3).wait(142));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(140).to({_off:false},4).to({_off:true,scaleX:1.45,scaleY:0.31,rotation:15,x:-4.2,y:19.2},12).wait(145));

	// bumps
	this.instance_9 = new lib.prepantbump();
	this.instance_9.parent = this;
	this.instance_9.setTransform(14.9,-27.3,1.72,0.271,-5);
	this.instance_9._off = true;

	this.instance_10 = new lib.prepantbumps();
	this.instance_10.parent = this;
	this.instance_10.setTransform(7.3,-20.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(130).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,rotation:0,x:7.3,y:-20.6},3).to({_off:false,scaleX:1.45,scaleY:0.31,rotation:15,x:-4.2,y:19.2},14).to({scaleX:1.45,rotation:28.8,x:-4.8,y:21.6},2).to({_off:true},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(130).to({_off:false},3).to({_off:true,scaleX:1.45,scaleY:0.31,rotation:15,x:-4.2,y:19.2},14).wait(154));

	// shorts
	this.instance_11 = new lib.prepbubshorts();
	this.instance_11.parent = this;
	this.instance_11.setTransform(23.8,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(301));

	// ant10
	this.instance_12 = new lib.antwalking();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-221,-106.3,0.187,0.187,0,0,180);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(34).to({_off:false},0).to({x:-187,y:-102},10).to({x:23.1,y:-94.6},50).wait(1).to({scaleY:0.13,skewX:60,skewY:240,x:24.2,y:-94.7},0).to({scaleY:0.07,skewX:-88.1,skewY:270.1,x:23.6,y:-77.7},8).to({scaleY:0.17,skewX:-30.1,skewY:330.2,x:18.7,y:-65.9},8).to({skewX:-0.1,skewY:360.2,x:5.3,y:-52.4},8).to({skewX:-0.1,x:-23.9,y:-50.1},5).to({scaleY:0.07,skewX:-60.1,skewY:480.2,x:-21.5,y:-58.5},5).to({scaleX:0.18,scaleY:0.17,skewX:-0.1,skewY:540.2,x:-7.5,y:-54.7},5).to({skewX:-0.1,x:16,y:-42.8},9).wait(1).to({scaleX:0.18,scaleY:0.18,skewX:85.2,skewY:625.4},0).to({scaleY:0.18,skewX:78.2,skewY:631,x:18.7,y:-16.4},5).to({scaleY:0.18,skewX:85.2,skewY:625.4,x:-6.2,y:21.4},43).to({skewY:625.5,x:-16.1,y:104.4},7).wait(1).to({skewX:-34.8,skewY:685.4,x:-16},0).to({skewX:-4.8,skewY:715.4,x:-32.7,y:118},2).to({skewX:-4.8,x:-83,y:106.6},2).wait(1).to({skewX:40.2,skewY:760.4},0).to({x:-88.5,y:77.4},2).wait(1).to({scaleX:0.18,skewX:-19.8,skewY:880.4,x:-90.1,y:77.1},0).to({skewX:-19.8,x:-76.1,y:61},6).to({scaleX:0.17,skewX:10.2,skewY:730.4,x:-71.7,y:59.8},1).wait(16).to({scaleX:0.19,scaleY:0.19,skewX:0,skewY:720,x:-71,y:28},6).to({scaleX:0.19,skewX:-36.1,skewY:792,x:-193.6,y:39.7},17).to({scaleX:0.17,scaleY:0.17,rotation:45,skewX:0,skewY:720,x:-211.9,y:-58.8},20).to({scaleX:0.2,scaleY:0.19,rotation:0,skewX:45,skewY:764.9,x:-228.6,y:-75.2},9).to({_off:true},1).wait(17));

	// ant9
	this.instance_13 = new lib.antwalking();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-221,-106.3,0.187,0.187,0,0,180);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({_off:false},0).to({x:-187,y:-102},10).to({x:23.1,y:-94.6},50).wait(1).to({scaleY:0.13,skewX:60,skewY:240,x:24.2,y:-94.7},0).to({scaleY:0.07,skewX:-88.1,skewY:270.1,x:23.6,y:-77.7},8).to({scaleY:0.17,skewX:-30.1,skewY:330.2,x:18.7,y:-65.9},8).to({skewX:-0.1,skewY:360.2,x:5.3,y:-52.4},8).to({skewX:-0.1,x:-23.9,y:-50.1},5).to({scaleY:0.07,skewX:-60.1,skewY:480.2,x:-21.5,y:-58.5},5).to({scaleX:0.18,scaleY:0.17,skewX:-0.1,skewY:540.2,x:-7.5,y:-54.7},5).to({skewX:-0.1,x:16,y:-42.8},5).wait(1).to({scaleX:0.18,scaleY:0.18,skewX:85.2,skewY:625.4},0).to({x:-6.2,y:30.4},24).to({skewY:625.5,x:-16.1,y:104.4},20).to({skewX:-34.8,skewY:685.4,x:-16},1).to({skewX:-4.8,skewY:715.4,x:-32.7,y:118},4).to({skewX:-4.8,x:-83,y:106.6},5).to({skewX:40.2,skewY:760.4},1).to({x:-88.5,y:77.4},5).to({scaleX:0.18,skewX:-19.8,skewY:880.4,x:-90.1,y:77.1},1).to({skewX:-19.8,x:-67.5,y:53.5},13).to({scaleX:0.17,skewX:10.2,skewY:730.4,x:-65.9,y:52.7},1).wait(19).to({x:-60.2,y:46.3},0).to({scaleX:0.19,scaleY:0.19,skewX:0,skewY:720,x:-71,y:28},5).to({scaleX:0.19,skewX:-36.1,skewY:792,x:-193.6,y:39.7},15).to({scaleX:0.17,scaleY:0.17,rotation:45,skewX:0,skewY:720,x:-211.9,y:-58.8},20).to({scaleX:0.2,scaleY:0.19,rotation:0,skewX:45,skewY:764.9,x:-228.6,y:-75.2},9).to({_off:true},1).wait(22));

	// ant8
	this.instance_14 = new lib.antwalking();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-221,-106.3,0.187,0.187,0,0,180);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({x:-187,y:-102},10).to({x:23.1,y:-94.6},50).to({scaleY:0.13,skewX:60,skewY:240,x:24.2,y:-94.7},1).to({scaleY:0.07,skewX:-88.1,skewY:270.1,x:23.6,y:-77.7},8).to({scaleY:0.17,skewX:-30.1,skewY:330.2,x:18.7,y:-65.9},7).to({skewX:-0.1,skewY:360.2,x:5.3,y:-52.4},9).to({skewX:-0.1,x:-23.9,y:-50.1},5).to({scaleY:0.07,skewX:-60.1,skewY:480.2,x:-21.5,y:-58.5},5).to({scaleX:0.18,scaleY:0.17,skewX:-0.1,skewY:540.2,x:16,y:-42.8},5).wait(1).to({scaleX:0.18,scaleY:0.18,skewX:85.2,skewY:625.4},0).to({skewX:85.2,x:-6.2,y:30.4},26).to({skewY:625.5,x:-16.1,y:104.4},17).wait(1).to({skewX:-34.8,skewY:685.4,x:-16},0).to({skewX:-4.8,skewY:715.4,x:-32.7,y:118},5).to({skewX:-4.8,x:-83,y:106.6},7).wait(1).to({skewX:40.2,skewY:760.4},0).to({x:-88.5,y:77.4},6).wait(1).to({scaleX:0.18,skewX:-19.8,skewY:880.4,x:-90.1,y:77.1},0).to({skewX:-19.8,x:-60.6,y:45.9},9).wait(1).to({scaleX:0.17,skewX:10.2,skewY:730.4,x:-60.2,y:46.3},0).wait(26).to({scaleX:0.19,scaleY:0.19,skewX:0,skewY:720,x:-71,y:28},4).to({scaleX:0.19,skewX:-36.1,skewY:792,x:-193.6,y:39.7},15).to({scaleX:0.17,scaleY:0.17,rotation:45,skewX:0,skewY:720,x:-211.9,y:-58.8},20).to({scaleX:0.2,scaleY:0.19,rotation:0,skewX:45,skewY:764.9,x:-228.6,y:-75.2},9).to({_off:true},1).wait(27));

	// mouth
	this.instance_15 = new lib.prepbubmouthclosed();
	this.instance_15.parent = this;
	this.instance_15.setTransform(20.9,-80.4);

	this.instance_16 = new lib.prepbubmouth();
	this.instance_16.parent = this;
	this.instance_16.setTransform(21.2,-80.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},88).wait(213));

	// ant7
	this.instance_17 = new lib.antwalking();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-221,-106.3,0.187,0.187,0,0,180);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(19).to({_off:false},0).to({x:-187,y:-102},10).to({x:117,y:-74.5},75).to({scaleX:0.2,scaleY:0.24,skewX:58.2,skewY:225,x:140,y:-64},5).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:149,y:-45.5},5).to({x:111.8,y:43.8},15).to({scaleX:0.25,scaleY:0.23,skewX:-1.9,skewY:345,x:119.9,y:100.5},15).to({scaleX:0.22,scaleY:0.23,skewX:-10.7,skewY:485.1,x:87.8,y:96.9},10).to({scaleX:0.15,scaleY:0.19,skewX:34.4,skewY:388.6,x:102.9,y:27.8},15).to({scaleX:0.19,scaleY:0.19,skewX:0,skewY:360,x:84.3,y:-30.1},15).to({x:-71,y:28},40).to({scaleX:0.19,skewX:-36.1,skewY:432,x:-193.6,y:39.7},15).to({scaleX:0.17,scaleY:0.17,rotation:45,skewX:0,skewY:360,x:-211.9,y:-58.8},20).to({scaleX:0.2,scaleY:0.19,rotation:0,skewX:45,skewY:404.9,x:-228.6,y:-75.2},9).to({_off:true},1).wait(32));

	// ant6
	this.instance_18 = new lib.antwalking();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-221,-106.3,0.187,0.187,0,0,180);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(14).to({_off:false},0).to({x:-187,y:-102},10).to({x:117,y:-74.5},75).to({scaleX:0.2,scaleY:0.24,skewX:58.2,skewY:225,x:140,y:-64},5).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:149,y:-45.5},5).to({scaleX:0.22,scaleY:0.26,skewX:-16.9,skewY:330,y:5.3},5).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:111.8,y:43.8},10).to({scaleX:0.25,scaleY:0.23,skewX:-1.9,skewY:345,x:119.9,y:100.5},15).to({scaleX:0.22,scaleY:0.23,skewX:-10.7,skewY:485.1,x:87.8,y:96.9},10).to({scaleX:0.15,scaleY:0.19,skewX:34.4,skewY:388.6,x:102.9,y:27.8},15).to({scaleX:0.19,scaleY:0.19,skewX:0,skewY:360,x:84.3,y:-30.1},15).to({x:-71,y:28},40).to({scaleX:0.19,skewX:-36.1,skewY:432,x:-193.6,y:39.7},16).to({scaleX:0.17,scaleY:0.17,rotation:45,skewX:0,skewY:360,x:-211.9,y:-58.8},19).to({scaleX:0.2,scaleY:0.19,rotation:0,skewX:45,skewY:404.9,x:-228.6,y:-75.2},9).to({_off:true},1).wait(37));

	// ant5
	this.instance_19 = new lib.antwalking();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-221,-106.3,0.187,0.187,0,0,180);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(8).to({_off:false},0).to({x:-187,y:-102},11).to({x:117,y:-74.5},75).to({scaleX:0.2,scaleY:0.24,skewX:58.2,skewY:225,x:140,y:-64},5).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:149,y:-45.5},5).to({scaleX:0.22,scaleY:0.26,skewX:-16.9,skewY:330,y:5.3},5).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:111.8,y:43.8},10).to({scaleX:0.25,scaleY:0.23,skewX:-1.9,skewY:345,x:119.9,y:100.5},15).to({scaleX:0.23,scaleY:0.23,skewX:58.2,skewY:405,x:96.6,y:112.6},4).to({scaleX:0.22,scaleY:0.23,skewX:-10.7,skewY:485.1,x:87.8,y:96.9},6).to({scaleX:0.15,scaleY:0.19,skewX:34.4,skewY:388.6,x:102.9,y:27.8},15).to({scaleX:0.19,scaleY:0.19,skewX:0,skewY:360,x:84.3,y:-30.1},15).to({x:-71,y:28},40).to({scaleX:0.19,skewX:-36.1,skewY:432,x:-193.6,y:39.7},16).to({scaleX:0.17,scaleY:0.17,rotation:45,skewX:0,skewY:360,x:-211.9,y:-58.8},19).to({scaleX:0.2,scaleY:0.19,rotation:0,skewX:45,skewY:404.9,x:-228.6,y:-75.2},9).to({_off:true},1).wait(42));

	// ant4
	this.instance_20 = new lib.antwalking();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-221,-106.3,0.187,0.187,0,0,180);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3).to({_off:false},0).to({x:-187,y:-102},11).to({x:117,y:-74.5},75).to({scaleX:0.2,scaleY:0.24,skewX:58.2,skewY:225,x:140,y:-64},5).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:149,y:-45.5},5).to({scaleX:0.22,scaleY:0.26,skewX:-16.9,skewY:330,y:5.3},5).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:111.8,y:43.8},10).to({scaleX:0.25,scaleY:0.23,skewX:-1.9,skewY:345,x:119.9,y:100.5},15).to({scaleX:0.23,scaleY:0.23,skewX:58.2,skewY:405,x:96.6,y:112.6},4).to({scaleX:0.22,scaleY:0.23,skewX:-10.7,skewY:485.1,x:87.8,y:96.9},6).to({scaleX:0.15,scaleY:0.19,skewX:34.4,skewY:388.6,x:102.9,y:27.8},15).to({scaleX:0.19,scaleY:0.19,skewX:0,skewY:360,x:84.3,y:-30.1},15).to({x:-71,y:28},40).to({scaleX:0.19,skewX:-36.1,skewY:432,x:-193.6,y:39.7},16).to({scaleX:0.17,scaleY:0.17,rotation:45,skewX:0,skewY:360,x:-211.9,y:-58.8},19).to({scaleX:0.2,scaleY:0.19,rotation:0,skewX:45,skewY:404.9,x:-228.6,y:-75.2},9).to({_off:true},1).wait(47));

	// ant3
	this.instance_21 = new lib.antwalking();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-214,-105.1,0.187,0.187,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({x:-187,y:-102},9).to({x:117,y:-74.5},75).to({scaleX:0.2,scaleY:0.24,skewX:58.2,skewY:225,x:140,y:-64},5).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:149,y:-45.5},5).to({scaleX:0.22,scaleY:0.26,skewX:-16.9,skewY:330,y:5.3},5).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:111.8,y:43.8},10).to({scaleX:0.25,scaleY:0.23,skewX:-1.9,skewY:345,x:119.9,y:100.5},15).to({scaleX:0.23,scaleY:0.23,skewX:58.2,skewY:405,x:96.6,y:112.6},4).to({scaleX:0.22,scaleY:0.23,skewX:-10.7,skewY:485.1,x:87.8,y:96.9},6).to({scaleX:0.15,scaleY:0.19,skewX:34.4,skewY:388.6,x:102.9,y:27.8},17).to({scaleX:0.19,scaleY:0.19,skewX:0,skewY:360,x:84.3,y:-30.1},13).to({x:-71,y:28},40).to({scaleX:0.19,skewX:-36.1,skewY:432,x:-193.6,y:39.7},15).to({scaleX:0.17,scaleY:0.17,rotation:45,skewX:0,skewY:360,x:-211.9,y:-58.8},20).to({scaleX:0.2,scaleY:0.19,rotation:0,skewX:45,skewY:404.9,x:-228.6,y:-75.2},9).to({_off:true},1).wait(52));

	// ant2
	this.instance_22 = new lib.antwalking();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-201.5,-103.2,0.187,0.187,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({x:-187,y:-102},4).to({x:117,y:-74.5},73).to({scaleX:0.2,scaleY:0.24,skewX:58.2,skewY:225,x:140,y:-64},7).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:149,y:-45.5},5).to({scaleX:0.22,scaleY:0.26,skewX:-16.9,skewY:330,y:5.3},5).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:111.8,y:43.8},10).to({scaleX:0.25,scaleY:0.23,skewX:-1.9,skewY:345,x:119.9,y:100.5},15).to({scaleX:0.23,scaleY:0.23,skewX:58.2,skewY:405,x:96.6,y:112.6},4).to({scaleX:0.22,scaleY:0.23,skewX:-10.7,skewY:485.1,x:87.8,y:96.9},6).to({scaleX:0.15,scaleY:0.19,skewX:34.4,skewY:388.6,x:102.9,y:27.8},18).to({scaleX:0.19,scaleY:0.19,skewX:0,skewY:360,x:84.3,y:-30.1},13).to({x:-71,y:28},41).to({scaleX:0.19,skewX:-36.1,skewY:432,x:-193.6,y:39.7},13).to({scaleX:0.17,scaleY:0.17,rotation:45,skewX:0,skewY:360,x:-211.9,y:-58.8},20).to({scaleX:0.2,scaleY:0.19,rotation:0,skewX:45,skewY:404.9,x:-228.6,y:-75.2},9).to({_off:true},1).wait(57));

	// ant1
	this.instance_23 = new lib.antwalking();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-187,-102,0.187,0.187,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({scaleX:0.2,scaleY:0.24,skewX:58.2,skewY:225,x:140,y:-64},77).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:149,y:-45.5},6).to({scaleX:0.22,scaleY:0.26,skewX:-16.9,skewY:330,y:5.3},6).to({scaleX:0.21,scaleY:0.24,skewX:103.2,skewY:270,x:111.8,y:43.8},10).to({scaleX:0.25,scaleY:0.23,skewX:-1.9,skewY:345,x:119.9,y:100.5},16).to({scaleX:0.23,scaleY:0.23,skewX:58.2,skewY:405,x:96.6,y:112.6},4).to({scaleX:0.22,scaleY:0.23,skewX:-10.7,skewY:485.1,x:87.8,y:96.9},4).to({scaleX:0.15,scaleY:0.19,skewX:34.4,skewY:388.6,x:102.9,y:27.8},21).to({scaleX:0.19,scaleY:0.19,skewX:0,skewY:360,x:84.3,y:-30.1},10).to({x:-71,y:28},44).to({scaleX:0.19,skewX:-36.1,skewY:432,x:-193.6,y:39.7},11).to({scaleX:0.17,scaleY:0.17,rotation:45,skewX:0,skewY:360,x:-215.1,y:-63.2},20).to({scaleX:0.2,scaleY:0.19,rotation:0,skewX:45,skewY:404.9,x:-228.6,y:-75.2},10).to({_off:true},1).wait(61));

	// bub
	this.instance_24 = new lib.bublyinginsand();
	this.instance_24.parent = this;
	this.instance_24.setTransform(15.3,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(301));

	// out
	this.instance_25 = new lib.prepwordout();
	this.instance_25.parent = this;
	this.instance_25.setTransform(84.1,-121.2);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(51).to({_off:false},0).to({alpha:1},4).wait(39).to({alpha:0},6).wait(201));

	// in
	this.instance_26 = new lib.prepwordin();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-26.1,-112.4);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(44).to({_off:false},0).to({alpha:1},5).wait(35).to({alpha:0},5).wait(212));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.3,1,1).p("AwSXaIzyAAMAAAgu1MBIJAAAMAAAAu1Iu/AAAVDXcMglYAAA");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AAMAcIgDAAQgOgBgHgCIAAgFIACAAQgBgPgaAGIgEAAQgSAAgLgFIAAAFIgFAAQgXAFgCgPQAbgEASgGQACADAGgEIABgCIACgBIgCAAIgBgEIgEgKQAeAKAJAAIAFAAQAUAGAXgKIAEgBIAYAAIAFAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABQgIALgPAEIAAAEIgFAAIAGADIADACQAKAFANACIAMABIAAgCIARgBIAAACQgHAEgKADIAAAFIgKABIgCAAQgeACgVAAIgJAAg");
	this.shape_1.setTransform(127.8,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgLgCIASACIAFADQgMgBgLgEg");
	this.shape_2.setTransform(-57.4,95.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(24.9,71.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AVGXbMglYAAAIzyAAMAAAgu1MBIJAAAMAAAAu1gAnTO4IAFAAQArAXATAuIABAEQAJAPAOALIABADIAnAOIAEABQAEAIAQgDIAFAAQARAAAQgDIABgCQAJgDAJgEQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAhgeIABgEQAMgRAHgWIAAgEIAAgFQAIAAgCgKIgBgFIADAAQADgNgBgKQgBgJgEgHIAAgEIAAgiIAAgFQANgJAIgPIAVgWIAfgsIAEgHQAGgHAFgIIADgEIAAgBIABgEIABAAQAKgHADgNIABgFQARgQAHgbIAAgFQARgNACgaIABgFIACAAQAGgggIgVIAAgFQADgXgIgLIAAgFQAAgfgPgRIAAgFQASgKARgKQArgcAkgkIABgDQAPgKAJgPIABgEIAFgCIATgHIAFgBIAigJIAFgBQAFAFAJAAIAFAAQACAIANgDIAEAAQALAEANgCIABgCIACAAIgGglQgFgXgGgWQAOgNAMgPQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAPgXASgVQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgFIAFAAIAFAAIAXgHIABgDQAuAdACBJIAAAFIAAATIAAAFQADAFAFACQAEADAIAAIAFAAQAVAOAJAcIABABQAAAAAAAAQAAAAABABQAAAAAAAAQABAAABAAQgGATAPgCIAAgDIAUAAIAFAAIAYAAIAFAAQASAQAOATIACAEQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABIgDABIAAAFIgDAAQgEAPgIAJIAAAFIAAAEIAAABIgFAAQAAATADATIACAAQApBpBTA+QBTA/AQCBIABAFQADASgJAGIAAAPIAAAFQgCALABAJQACAIADAGIABAEQAMAPAOANIADABQA8AiBVgRIABgCQAegGAMgYIABgEQAIgMAEgQIADgLIAAgFQAHgEAGgGIABgEQAsgPAegcIAEgBQAPgJAIgQIABgEQAJgBABgJIAAgEQASgggNgpIAAgFQAMgCAGgIIABgFQABAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAWgegegWIgBgDQgLgJgHgMIgBgEQgOgNgOgMIgEgBIgBgEIgBgFQgLgpguAMIgBgEQgIgQgPgJIgFgBQgVgFgcABIAAgFIAAgOIABgFQADgNgJgCQAAgWgDgRQgCgLgDgKIgdhNIgRgtIgJgVIAAgFIAAgFIBog9QAJgFgBAIQAMgHgHg4IAAgFIAAgFQADgNgIgBIgBgFQgJgngigPIAAgEIAAgxQAIABgCgLIgBgEIADgBQACgvgYgYIgBgDQgHgBADgLQAMgPAHgTIAAgEQAXgTAUgVIABgEQAGgFAAgKIgBgJIAAgBIgBgBIgBgEIgBgDIgBgFIgDgCIgBgBIAAgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAgBgBIgGgEIgBgEIgCgDIgDgFIgBgEIgBgBIgBgBIgCgEIgCgCIgEgEIgHgFIgCgBQgGgvgNgnIgEgNQgKgagNgYIAAgFQAmAOAyABIAFAAQAGAIASgDIAFAAIAAATQAEAIAAAMIAAAIIAHBrIADAXIABACIAAAAIADAQIABAMQACAEADACIAAABQgHACgFAFIgDACIgGARIgFAJQgJANgFAPIgEAMQgFASABAVIAEAFIADAEIAsABQAKgEAJgGIAHgHQASgTAOgVIACAAQAOAZATAUIABADQAEAQAIAIIAHAJQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAQAOACANgBQATgCAKgOIADgCIABgDIADAAIAAgLQABgKgCgJQgDgVgLgOIgEgLIACgCIAUANIAOAJQAYAPAcgFIABAAIAAgBIAFgBQAPgEABgNIAAgDQAIgPgPgSIgGgIQAMABALADQARAFAPgHQAKgFAGgIQAQgWgUgSIgMgIQAMgFALgHIAFgEQAPgQgHgUIgDgHIAAgCIAAAAQgWgGgCgPIgGACIgEAAIgDABQgHADgFAAIgTAFIgBAAIABgXIAAAAIABgLIAAgEQABg8gKg6QgFgegMgbIgKgSIAAgBQgJgPgMgPIgEgEQgHgHgJgHQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBgBAAQgLgGgMgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgNgHgPgFIAAgCIgGgCIgQgKIgLgIIgRgOQgcgWghgMIgKgGQgVgMgXgJQgCgDgDgBQgbgQgegHIgBAAQgigQgmgFIAAAAIgNgDIg7gMQgZgFgagDIgDAAIgBgBIgCAAIgRgCIAAgBQgRgCgRAAIgFAAIgFAAIgTgCIAAgBIgOgBQgkgFglAAIgYgBIAAABQgbAAgagDIgDAAQgSgCgSgGIAEgHIADgDIACgBIAAgCQALgYAAgaIAAgFIAAgCIgCgCIgBgCIAAgEIAAgHIAEgNQABgIAAgHQABgHgBgHIACgCIALgVQAIgRgCgTIgBgCQgHgUgPgJQgHAAgEgCIgDgEQADgNAAgOIAAgPQAAgHABgGQABgMgFgGIAAgBQAIgKgOgBIgCAAIgBgBIgGACQgRACgRAFIgCABIgFgUQgCgEgDABQgHAGgIADIgDABIAAAAIgCgDIAAgBQAAgCgDgCIAAgBIAAgBIAAgBIgCgCIgBgDIgBgDIgBgBIAAgBIgDgPQgBgFgFABQgRADgOAHIgEABIgBAAIgBgCIAAgCIgEgSQAIgHgKgEIAAAAQgCgDgDABIgHAGQgKAGgMAEIgCgDIgDgFQgGgNgMgEQgNADgEAMIgCACIgDAEIgKALQgIgLgNgHQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAQgWAMgUAQIgBABIgHgGQgFgHgGgFQgHAEgDAGIgBADIAAACIgOAZIgCABQgEADAAAEIgGAEQgDgBgCgCQgIgGgIgCQgHgEgIgBQgCgDgFgBIgDABIgDAEQgJATAAAVIgCAAIAAAHIgDgCQgHgIgIAEIgBACIAAAbIABASIgDgBQgJgFgEADIgCgBIgDAAQgDACgBADIAAAFIAAADQgBAFABAGIACAJQABAVAAAWIAAACIgDABIgBAAQgIABgEgEIgBAAIgBABIgNANIgCACQgFANABAOIAAASIAHAKQADAHAGAEIACABIAAACIgBAHIgEAIIgBACIABACIABAAIAAACIAAACIAAACIAAAAIgBAAIgBAAIgCABQgDADABADQAAAEAEABIABAAIgBABIgCADIADAEIABACIAAAEIAAAGIACAEIABACIAAAAQACAEgBAEIAAACIABAAIABACIABACIAAACIAAACIACACIABACIAAACIAAABIAAABIAEAGIABABIAGAKIAMASIAFAHIgBACIgHALIgGACQgKADgKAFQgFAAgEACIgLgGIgJgIIgCAAIAAgCIAAAAQg4gBgzAEQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgKACgMAAQg0ADgxATIAAAAIgCAAIAAABQgjANgiAJIgBABIgWAGIAAABQgKACgHAFQgPADgNAHIgQAHQgEABgCACIgGADIgdAPIgPAHIAAACIg0AgQgjAWggAbQgUAQgOAXIAAABIAAACIgBABQgDAEgCAEIAAACIAAACIgBABIgBACIAAADIgBADIgBACIgCADIAAABIAAAFIAAAMIgDABIgMAIQghAJgWAYQgFACgDAEIgSAaIAAABIgxAzIAAAEIAAABIgCACQgSASgMAYIAAADIgBADQgEAHgDAHQgFANAAAOIgBACIgBABIABAaIABApIABABIAAAHIAAAFIgBADIgJAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgaAFgZAIQgYAFgQAVQgFAHgDAIIgIAHQgBANAHAFIABABIAAABIAAABIACACQABAEADABQARALAWgFIASgFQAJgDAFACIgBACIgCADIgBAEIgBAEIgCACIAAABQgEAEgFAEIAAAKIAAAFQADAKAHAHIAAABQAMAOATgDIABAAQAHAAAEgDIAFgCQAKgEAIgIIAMgQQABAEABAIIgCAGIgBAEIABAPIAAAAIAAAGIgBAEIAKANIAAABIABACIADAEIAFACIAJADQAWAGAQgPIAAgBQAEgEACgGIABgFIAAgEIAAgCIABgDIAAgBQAHgJgDgTIAAgCIABgDQACgIACgBIABABIAAABIAAAEQAAAGADAFIABAEQABADgBADIABABIADADIAAACIAAADIABABIAAABIAAABIAAACIAAABIABABIABABIAAABIAAACQADAGAFAFIADAFIABAEQAJAGAJACIADABQAWAEAYgPIABgDIAFAAIACAAQAGgXgHgNIgDgPIgBgDIgBgFIgCgEQgBgEgDgEIAAgEIgCgDQAWAKAYgEIATAAIAFgBQAugEACgwIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIg0gaIgFABQgZAFgDgRQAMgQAJgTQAKgRAHgUIABAAIAAgBIABgEIAAgBIACgCIAAgBIAAgBIABgCIABgEIADgGQAHgQADgUIAAgEIAAgFQArgBAigLIAAgBIATgGIACAAIACgBIABAAIAWgJIAdgLQAagKAWgPQgGAMgKAJIAAAFIAAAFIgCAAQABAKgIAAIAAAEIAAAFIAAAFIAAAFIgFAAIAAAYIgCALIgBANIgCAAIABAiIABAKIACAAIAAAGQABALAFAKIAAACQgEANAIAEQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQARAmgDgQIAEAIIAAABIABACIABABIADADIABACIAAABIgFAEIgIAJIgBAHQAAAFADAEIAAAIIACAIIADADIgBAGIAEAFQAAABAAAAQAAAAABAAQAAAAAAAAQABAAABAAQALAQAHATIABAEQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgJATgRAJIAAAFIgDABQgFANgLAFQAAAFACAEQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAXASAIAjIADAAIAAAFQADAhgIAVIAAAEIgBAFQgNAXgUAQIAAAFIgDAAQAJAVgQAIIAAAFQAAAAgBAAQgBAAAAAAQAAAAgBABQAAAAAAAAIgUAZIgVAWQAHAdAPgcQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAABAAQAbACARAMIAEABIAAAPIAAAOIAAAFQADAPAGAMIAAABIAAAFQACAGAEAGIAAADIAAAFIgDABIgBADIgCABIgCACQgGAGgFAHIgBAAIAAABIgDAFIAAABIAAABIgCADIAAABIgEAFIAAABIgBACIAAABIgBACIgCAEIgGAGIAAAEIgBABIgCABIgBADIgDAFIAAABIAAACIgDADQgJANgHAOIAAABIAAACIgBACIgBABQAAADgBADQgCAHABAIIgDAEQgDAHABAIIgBABIgBACIABAEIgBAFQAAAGgEAFIgBAIIgBAKQgGALgJAGIAAAFQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgFAIgHAFIAAAFIgFAAQgagCgRAHIAAAFIgFABIgFAEIAAAEIgFAAIAAAUIAAAFIAAAIIgFgDIgNgEIABgBIgCAAIgFAAIgBABQgWgBgQATIgCADIgBADQgFAQgJAMQgSAAgLARIAAADIAAAOIACABIABABIABAGQgMABgFALIAAAEIAAADIgCABIACAJIgEACIAGAEQAJAIAHAIIADADIAAACIABABIACABQAOATAJAaIACAAQAGAJAGAHIAHAGIgHgBIAJAIIABADQAYAJAagBIgDgCQAUAAAWgGIABgDIAnAAgAo+P8IAAABIgDACQAAAFACAEIADABQAHAOAagHIABgCIACgBIABgCIACgBQAFgQgMgCIgEgBQgFgDgFAAQgJAAgLAIgALZQJQAGgEAFgMIgFAEQgGAEgKAAIAAgBIAHgFQAPgKgpACIAAACIgDAAIAAADIgCAAIACACIgFAAQAXAeAOgPgAqsQBIAAgCIABAAQALADAEgGIACgCIACAAQALgDAFgFQAMgIgIgPQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIAAgCQglgBgeAIIgEgBQgFgJgQABIAAACIgDAAIAAACIgCAAIAAADIgDAAQAEAvA7gLgAIhPMIAAAAIgDACQgBAOALABIAEAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIADABQATAIAdgGIABgCIACAAIABgDIgBgCQgLgDgMAAIAAgBQATABAMgGIAEgBIAEAGIABAEIADAAIAAgEIAAABIADAAQAEgagaACIgFAAIgFAAIgPgBQgbAAgQALgAhhOGQATAZAhgWIABgBIACgCQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgCQgagDgbAAIAAADIgDAAIAAAFgAJfOKIADABIACAAIAAgDIABAAIACAAQgFgogVAUIgIAIIAAAFQAIgFAGAAQAKAAACAOgAFfNmIAAACIgDABIAAAEQAfAcAZgXQAGgEAGgIIgCAAIAAgCQgPgCgNAAQgTAAgQAEgAtoMaIAEABQAjADARgPQAHgGAFgJIgDAAIAAgCQgXgJgeAGIAAACIgDABIAAADIgBAAQgHAFgNgBIAAADIgDAAQACAOANAEgArZKzIAAAAIgDACQALAKAKABQAPADANgMIAFgEIgDAAIgDgBQgFgHgQADIgDAAIgCAAIgDAAQgLAAgFAFgApgJqIAAABIgDABIAAAFIAAAFQASAJAWgKIACgCIAEgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgEQgIgHgMAAQgKAAgNAGgACdJbIAAACIgDABIABAEIAEABQALAKAOgJIAEgBIADgBIABgCIACgBQAFgJgNAAQgJAAgUAFgAEqJJQgDABgCADIgDACQARAXAggMIAEgBIAAgCIADAAIAAgDQghAEgKgQIgFABgAP+JaIAEAAIgEgFgAU6IWIAEgBQASgBACgGIAAgDIgCgDIgDgBIgFgBIgFgBIgCgBIgFgBQgJgDgZAEIAAAFIgFAAQABAMAQgBQAGAFAOgDgAQZHiIAQABIgEACQAQAAAXADIAKACQgIgMgPAAQgFgCgHAAQgLAAgPAGgATrHjIABgDQARgKAVgHIABgCQAnAEAYgFIAAgFQARgFAHgLIgCAAIAAgDIgWAAIAAACIgMgCIgRgFQAJgGAIgHIAIgKIAEgBIAAAAIAAgBIgBgBIAAAAIgBgBQgJgGgPgCQgTgGgeAFIAAAFIgFABQgGAEgLAAQgLgKgTgCQgPgFgVACQAAAFACAEQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIAEAKIABAEIgFAAQgaABgRAJIAAAFIgFABIgFAEQAHAQAQgBQALAGARgIIAFgBIAdAAIAEAAIACAAIAAACIgEAFIAAAFIgEABIgGAEIAAAFIgEAAQAAAQAQgCQAFAFAOgEg");

	this.instance_27 = new lib.bublyinginsand();
	this.instance_27.parent = this;
	this.instance_27.setTransform(15.3,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("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glAAIgYgBIAAABQgbAAgagDIgDAAQgSgCgSgGIAEgHIADgDIACgBIAAgCQALgYAAgaIAAgHIgCgCIgBgCIAAgEIAAgHQAFgPAAgNQABgHgBgHIACgCIALgVQAIgRgCgTIgBgCQgHgUgPgJQgHAAgEgCIgDgEQADgNAAgOIAAgPQAAgHABgGQABgMgFgGIAAgBQAIgKgOgBIgCAAIgBgBIgGACQgRACgRAFIgCABIgFgUQgCgEgDABQgHAGgIADIgDABIAAAAIgCgDIAAgBQAAgCgDgCIAAgBIAAgBIAAgBIgCgCIgBgDIgBgDIgBgBIAAgBIgDgPQgBgFgFABQgRADgOAHIgEABIgBAAIgBgCIAAgCIgEgSQAIgHgKgEIAAAAQgCgDgDABIgHAGQgKAGgMAEIgCgDIgDgFQgGgNgMgEQgNADgEAMIgCACIgDAEIgKALQgIgLgNgHQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAQgWAMgUAQIgBABIgHgGQgFgHgGgFQgHAEgDAGIgBADIAAACIgOAZIgCABQgEADAAAEIgGAEQgDgBgCgCQgIgGgIgCQgHgEgIgBQgCgDgFgBIgDABIgDAEQgJATAAAVIgCAAIAAAHIgDgCQgHgIgIAEIgBACIAAAbIABASIgDgBQgJgFgEADIgCgBIgDAAQgDACgBADIAAAFIAAADQgBAFABAGIACAJQABAVAAAWIAAACIgDABIgBAAQgIABgEgEIgBAAIgBABIgNANIgCACQgFANABAOIAAASIAHAKQAEAIAHAEIAAACIgBAHQgCAGgDAEIACACIAAACIAAACIAAACIAAAAIgCAAIgCABQgDADABADQAAAFAFAAIgDAEIAEAGIAAAEIAAAGIACAEQADAGgBAGIACACIABACIAAACIAAACIACACIABACIAAACIAAACIAFAHIASAcIAFAHIgBACIgHALIgGACQgKADgKAFQgFAAgEACIgLgGIgJgIIgCAAIAAgCIAAAAQg4gBgzAEQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgKACgMAAQg0ADgxATIAAAAIgCAAIAAABQgjANgiAJIgBABIgWAGIAAABQgKACgHAFQgPADgNAHIgQAHQgEABgCACIgGADIgdAPIgPAHIAAACIg0AgQgjAWggAbQgUAQgOAXIAAABIAAACIgBABQgDAEgCAEIAAACIAAACIgBABIgBACIAAADIgBADIgBACIgCADIAAABIAAAFIAAAMIgDABIgMAIQghAJgWAYQgFACgDAEIgSAaIAAABIgxAzIAAAEIAAABIgCACQgSASgMAYIAAADIgBADQgEAHgDAHQgFANAAAOIgBACIgBABIABAaIABApIABABIAAAHIAAAFIgBADIgJAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgaAFgZAIQgYAFgQAVQgFAHgDAIIgIAHQgBANAHAFIABABIAAABIAAABIACACQABAEADABQARALAWgFIASgFQAJgDAFACIgBACIgCADIgBAEIgBAEIgCACIAAABQgEAEgFAEIAAAKIAAAFQADAKAHAHIAAABQAMAOATgDIABAAQAHAAAEgDIAFgCQAKgEAIgIIAMgQQABAEABAIIgCAGIgBAEIABAPIAAAAIAAAGIgBAEIAKANIAAABIABACIADAEIAFACIAJADQAWAGAQgPIAAgBQAEgEACgGIABgFIAAgEIAAgCIABgDIAAgBQAHgJgDgTIAAgCIABgDQACgIACgBIABABIAAABIAAAEQAAAGADAFIABAEQABADgBADIABABIADADIAAACIAAADIABABIAAABIAAABIAAACIAAABIABABIABABIAAABIAAACQADAGAFAFIADAFIABAEQAJAGAJACIADABQAWAEAYgPIABgDIAFAAIACAAQAGgXgHgNIgDgPIgBgDIgBgFIgCgEQgBgEgDgEIAAgEIgCgDQAWAKAYgEIATAAIAFgBQAugEACgwIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIg0gaIgFABQgZAFgDgRQAMgQAJgTQAKgRAHgUIABAAIAAgBIABgEIAAgBIACgCIAAgBIAAgBIABgCIABgEIADgGQAHgQADgUIAAgEIAAgFQArgBAigLIAAgBIATgGIACAAIACgBIABAAIAWgJIAdgLQAagKAWgPQgGAMgKAJIAAAFIAAAFIgCAAQABAKgIAAIAAAEIAAAFIAAAFIAAAFIgFAAIAAAYIgCALIgBANIgCAAIABAiIABAKIACAAIAAAGQABALAFAKIAAACQgEANAIAEQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQARAmgDgQIAEAIIAAABIABACIABABIADADIABACIAAABIgFAEIgIAJIgBAHQAAAFADAEIAAAIIACAIIADADIgBAGIAEAFQAAABAAAAQAAAAABAAQAAAAAAAAQABAAABAAQALAQAHATIABAEQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgJATgRAJIAAAFIgDABQgFANgLAFQAAAFACAEQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAXASAIAjIADAAIAAAFQADAhgIAVIAAAEIgBAFQgNAXgUAQIAAAFIgDAAQAJAVgQAIIAAAFQAAAAgBAAQgBAAAAAAQAAAAgBABQAAAAAAAAIgUAZIgVAWQAHAdAPgcQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAABAAQAbACARAMIAEABIAAAPIAAAOIAAAFQADAPAGAMIAAABIAAAFQACAGAEAGIAAADIAAAFIgDABIgBADIgCABIgCACQgGAGgFAHIgBAAIAAABIgDAFIAAABIAAABIgCADIAAABIgEAFIAAABIgBACIAAABIgBACIgCAEIgGAGIAAAEIgBABIgCABIgBADIgDAFIAAABIAAACIgDADQgJANgHAOIAAABIAAACIgBACIgBABQAAADgBADQgCAHABAIIgDAEQgDAHABAIIgBABIgBACIABAEIgBAFQAAAGgEAFIgBAIIgBAKQgGALgJAGIAAAFQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgFAIgHAFIAAAFIgFAAQgagCgRAHIAAAFIgFABIgFAEIAAAEIgFAAIAAAUIAAAFIAAAIIgFgDIgNgEIABgBIgCAAIgFAAIgBABQgWgBgQATIgCADIgBADQgFAQgJAMQgSAAgLARIAAADIAAAOIACABIABABIABAGQgMABgFALIAAAEIAAADIgCABIACAJIgEACIAGAEQAJAIAHAIIADADIAAACIABABIACABQAOATAJAaIACAAQAGAJAGAHIAHAGIgHgBIAJAIIABADQAYAJAagBIgDgCQAUAAAWgGIABgDIAnAAgAo+P8IAAABIgDACQAAAFACAEIADABQAHAOAagHIABgCIACgBIABgCIACgBQAFgQgMgCIgEgBQgFgDgFAAQgJAAgLAIgALZQJQAGgEAFgMIgFAEQgGAEgKAAIAAgBIAHgFQAPgKgpACIAAACIgDAAIAAADIgCAAIACACIgFAAQAXAeAOgPgAqsQBIAAgCIABAAQALADAEgGIACgCIACAAQALgDAFgFQAMgIgIgPQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIAAgCQglgBgeAIIgEgBQgFgJgQABIAAACIgDAAIAAACIgCAAIAAADIgDAAQAEAvA7gLgAIhPMIAAAAIgDACQgBAOALABIAEAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIADABQATAIAdgGIABgCIACAAIABgDIgBgCQgLgDgMAAIAAgBQATABAMgGIAEgBIAEAGIABAEIADAAIAAgEIAAABIADAAQAEgagaACIgFAAIgFAAIgPgBQgbAAgQALgAhhOGQATAZAhgWIABgBIACgCQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgCQgagDgbAAIAAADIgDAAIAAAFgAJfOKIADABIACAAIAAgDIABAAIACAAQgFgogVAUIgIAIIAAAFQAIgFAGAAQAKAAACAOgAFfNmIAAACIgDABIAAAEQAfAcAZgXQAGgEAGgIIgCAAIAAgCQgPgCgNAAQgTAAgQAEgAtoMaIAEABQAjADARgPQAHgGAFgJIgDAAIAAgCQgXgJgeAGIAAACIgDABIAAADIgBAAQgHAFgNgBIAAADIgDAAQACAOANAEgArZKzIAAAAIgDACQALAKAKABQAPADANgMIAFgEIgDAAIgDgBQgFgHgQADIgDAAIgCAAIgDAAQgLAAgFAFgApgJqIAAABIgDABIAAAFIAAAFQASAJAWgKIACgCIAEgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgEQgIgHgMAAQgKAAgNAGgACdJbIAAACIgDABIABAEIAEABQALAKAOgJIAEgBIADgBIABgCIACgBQAFgJgNAAQgJAAgUAFgAEqJJQgDABgCADIgDACQARAXAggMIAEgBIAAgCIADAAIAAgDQghAEgKgQIgFABgAP+JaIAEAAIgEgFgAU6IWIAEgBQASgBACgGIAAgDIgCgDIgDgBIgFgBIgFgBIgCgBIgFgBQgJgDgZAEIAAAFIgFAAQABAMAQgBQAGAFAOgDgAQZHiIAQABIgEACQAQAAAXADIAKACQgIgMgPAAQgFgCgHAAQgLAAgPAGgATrHjIABgDQARgKAVgHIABgCQAnAEAYgFIAAgFQARgFAHgLIgCAAIAAgDIgWAAIAAACIgMgCIgRgFQAJgGAIgHIAIgKIAEgBIAAAAIAAgBIgBgBIAAAAIgBgBQgJgGgPgCQgTgGgeAFIAAAFIgFABQgGAEgLAAQgLgKgTgCQgPgFgVACQAAAFACAEQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIAEAKIABAEIgFAAQgaABgRAJIAAAFIgFABIgFAEQAHAQAQgBQALAGARgIIAFgBIAdAAIAEAAIACAAIAAACIgEAFIAAAFIgEABIgGAEIAAAFIgEAAQAAAQAQgCQAFAFAOgEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_27}]},300).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.5,-151.4,465.1,303.2);


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
		var bgm = createjs.Sound.play('bgmPrep',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
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
		
		 window.open ("prep_Scene2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("prep_intro.html","_self");
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
(lib.prep_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* music = new Sound();
		music.attachSound("2-a");
		music.start(0,99);
		v1 = new Sound();
		v1.attachSound("in");
		v2 = new Sound();
		v2.attachSound("into");
		v3 = new Sound();
		v3.attachSound("to");
		v4 = new Sound();
		v4.attachSound("under");
		v5 = new Sound();
		v5.attachSound("out");
		v6 = new Sound();
		v6.attachSound("out of");
		v7 = new Sound();
		v7.attachSound("from");
		v8 = new Sound();
		v8.attachSound("over");
		v9 = new Sound();
		v9.attachSound("beneath");
		v10 = new Sound();
		v10.attachSound("between");
		v11 = new Sound();
		v11.attachSound("across");
		v12 = new Sound();
		v12.attachSound("upon");*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(283.2,47.5,1,1,0,0,0,130.3,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape.setTransform(319.9,369.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_1.setTransform(310.6,369.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJApIgNgkIgQgnIgBgEQAAgEACgDQADgCAEAAQAGAAACAFIAWA9QAFgOALgaIAHgUQADgGAFAAQAEAAACADQADADAAADQAAADgPAjIgSAoQAAAIgHAAQgGAAgDgHg");
	this.shape_2.setTransform(301.3,369.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsA2QgSgQAAgZQAAgdASgZQAUgbAeAAQAdAAAOANQAOANAAAdQAAAegQAYQgUAcgdAAQgYAAgSgPgAgegdQgOAUAAAWQAAARANALQAMAKARAAQAVAAANgVQANgUAAgXQAAgVgKgIQgIgIgVAAQgVAAgPAVg");
	this.shape_3.setTransform(289.7,367.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_4.setTransform(251.4,369.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_5.setTransform(242.1,369.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAdADAPIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgLIABgKQgEgHgFgDQgGgDgIAAQgNAAgIAIg");
	this.shape_6.setTransform(231.7,367.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAIAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_7.setTransform(222,369.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_8.setTransform(210.5,367.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_9.setTransform(318.8,351.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_10.setTransform(306.9,351.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_11.setTransform(298.2,351.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgqBHQgCgDAAgDIABg0IAAgzIAAgLIAAgNQAAgEACgCQADgDAEAAQACAAACACIAUgDIAOgBQALAAANADQARAEABAHQgBADgCADQgDADgDAAIgDAAQgLgFgTAAIgMABIgRADIAAAmQARgFAIAAQAMAAAPACQAIABAAAHQAAAFgDACQgCACgEAAIgOgBIgMAAQgGAAgUAFIgBA8QAAADgDADQgCADgDAAQgFAAgCgDg");
	this.shape_12.setTransform(288.8,349.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_13.setTransform(250.9,351.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFBAQgDgCAAgEIAAgEIABgEIgBgNIAAgNIgCgiIgDgjIgIAAQgTAAgLgDQgHgCAAgHQAAgDACgDQADgDAEAAIAOACIAOABIAQAAIAPgBIAUABIAUABQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAIgUgBIgUgBIgGAAQAAAMADAcIABAmIABAJIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgDg");
	this.shape_14.setTransform(241,349.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNBLQgDgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAQgBIAIAAIABgNQADgUAHgJQAIgLATAAQANAAAAAIQAAAJgLAAQgWAAgCAdIAAAGIATgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQgBAHgGAAQgEAAgCgCg");
	this.shape_15.setTransform(333.3,331.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_16.setTransform(324,333.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_17.setTransform(309.8,332.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAUAqQgLAGgOAAQgLAAgIgFQgIgGgCgLQgDgXAAgRQAAgMADgQQABgHAHAAQAEAAADACQACACAAAEIgBANIgBAOIABAYQABAKACAHIAFACIAFABQALAAAOgEIAAgSIgBgQQAAgTACgOQABgIAHAAQAEAAADADQACACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgCADQgDACgDAAQgIAAgBgIg");
	this.shape_18.setTransform(300.9,333.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgrA2QgTgQAAgZQAAgdASgZQAVgbAcAAQAdAAAOANQAPANAAAdQAAAegQAYQgUAcgdAAQgYAAgRgPgAgegdQgOAUAAAWQAAARAMALQANAKARAAQAVAAANgVQANgUAAgXQAAgVgJgIQgJgIgWAAQgUAAgPAVg");
	this.shape_19.setTransform(289.1,331.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_20.setTransform(250,333.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_21.setTransform(241.2,332.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAIAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_22.setTransform(232.5,333.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_23.setTransform(222.7,331.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_24.setTransform(309.9,312.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAUAqQgLAGgOAAQgLAAgIgFQgIgGgCgLQgDgXAAgRQAAgMACgQQACgHAHAAQAEAAADACQACACAAAEIgBANIgBAOIABAYQABAKABAHIAGACIAFABQALAAANgEIAAgSIAAgQQAAgTACgOQABgIAHAAQAEAAADADQACACAAAEIgCAhIAAASIAAATIABAGIAAAGQAAADgCADQgDACgEAAQgGAAgCgIg");
	this.shape_25.setTransform(301,313.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgrA2QgTgQAAgZQAAgdASgZQAVgbAcAAQAeAAANANQAPANAAAdQAAAegQAYQgTAcgdAAQgaAAgQgPgAgegdQgOAUAAAWQAAARAMALQAMAKATAAQAUAAANgVQANgUAAgXQAAgVgJgIQgJgIgWAAQgUAAgPAVg");
	this.shape_26.setTransform(289.2,311.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAHIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgHIABgZIACgZIgBgIIAAgJQAAgDADgDQACgCAEAAQAIAAABALIAAALQAPgUAOAAQAOAAAGANQAEAHAAARIAAAIIAAAIIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_27.setTransform(250.5,313.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_28.setTransform(240.7,311.6);

	this.instance_1 = new lib.scene1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,169.1,0.874,0.874);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC99").s().p("AgdCGIgDgCQgPgGgLgNQgFgHAHgDQAGADADAFIACADQALAIAMAFIABACQAAAFgFAAIgDAAgAAzhjIgEgJQgDgEACgEIAAgEQgHgDAGgHQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIACAAQAIAAgDAHIgBABIAAAHIAAAFIACAGIACADQAFAFgHADIgCAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBg");
	this.shape_29.setTransform(312.4,90.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.instance_1},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '7C4A65D387C9354DB6F02FD63AD61CB1',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3b.mp3", id:"_3b"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_4c.mp3", id:"_4c"},
		{src:"sounds/_5b.mp3", id:"_5b"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/bgmPrep.mp3", id:"bgmPrep"},
		{src:"sounds/MenuPreposition.mp3", id:"MenuPreposition"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/above.mp3", id:"above"},
		{src:"sounds/across.mp3", id:"across"},
		{src:"sounds/alongside.mp3", id:"alongside"},
		{src:"sounds/around.mp3", id:"around"},
		{src:"sounds/behind.mp3", id:"behind"},
		{src:"sounds/below.mp3", id:"below"},
		{src:"sounds/beneath.mp3", id:"beneath"},
		{src:"sounds/between.mp3", id:"between"},
		{src:"sounds/down.mp3", id:"down"},
		{src:"sounds/from.mp3", id:"from"},
		{src:"sounds/_in.mp3", id:"_in"},
		{src:"sounds/infront.mp3", id:"infront"},
		{src:"sounds/inside.mp3", id:"inside"},
		{src:"sounds/into.mp3", id:"into"},
		{src:"sounds/near.mp3", id:"near"},
		{src:"sounds/off.mp3", id:"off"},
		{src:"sounds/on.mp3", id:"on"},
		{src:"sounds/out.mp3", id:"out"},
		{src:"sounds/outof.mp3", id:"outof"},
		{src:"sounds/outside.mp3", id:"outside"},
		{src:"sounds/over.mp3", id:"over"},
		{src:"sounds/preposition.mp3", id:"preposition"},
		{src:"sounds/slurp.mp3", id:"slurp"},
		{src:"sounds/to.mp3", id:"to"},
		{src:"sounds/toward.mp3", id:"toward"},
		{src:"sounds/under.mp3", id:"under"},
		{src:"sounds/up.mp3", id:"up"},
		{src:"sounds/upon.mp3", id:"upon"},
		{src:"sounds/within.mp3", id:"within"}
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
an.compositions['7C4A65D387C9354DB6F02FD63AD61CB1'] = {
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