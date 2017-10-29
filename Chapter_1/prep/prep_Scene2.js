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


(lib.prepwordsunderneath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAFAAAPIABAQIACARIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape.setTransform(12.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_1.setTransform(3.4,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgUAAgIgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQAMAFAAAHIgCAEIgBAKIgBARQAAALACAGIAEAPIACAEIABABQAAADgCADQgCACgDAAQgCAAgFgDgAgNgUQgKALAAAMQABAOAEAHQAFAGAKABQAHgBAFgDIAJgGQgDgVAAgKIABgJIABgJIgGgBIgDgBQgLAAgKAKg");
	this.shape_2.setTransform(-4.9,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape_3.setTransform(-13.7,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIAAAIQAAAEgBACQgDACgEAAQgDAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_4.setTransform(-22.8,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_5.setTransform(-31.9,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZA+QgCAEgEAAQgDAAgCgCQgDgDAAgDIABgGIAAgGIgBgbIAAgZIAAgXIAAgXQAAgFACgEQADgFAFAAQAGAAAAAHIAAADIgBAEIAAASIAAAVQAHgFAHgCQAGgCAFgBQASAAALAOQAKAMAAATQAAASgMAOQgMANgRAAQgNAAgLgFgAgMgDIgMAHIAAAPIAAAMIAAAOIALAEQAFACAHAAQALAAAHgJQAIgHAAgNQAAgMgGgJQgHgIgLAAQgGAAgHAEg");
	this.shape_6.setTransform(-41.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-13.8,68.3,27.7);


(lib.prepwordsoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBHQgCgCAAgEIAAgCQACgLAAgMIgBgXIAAgXIgMABQgJAAAAgIQAAgJAPABIAHgBIACgNQACgSAHgJQAIgKASAAQAMAAAAAIQAAAIgLAAQgUAAgCAcIAAAFIASgBQANAAAAAIQAAAGgGABIgHABIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgCg");
	this.shape.setTransform(10.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBHQgCgCAAgEIAAgCQACgLAAgMIAAgXIAAgXIgOABQgIAAAAgIQAAgJAPABIAHgBIACgNQACgSAHgJQAIgKASAAQAMAAAAAIQAAAIgLAAQgUAAgCAcIAAAFIASgBQANAAAAAIQAAAGgGABIgHABIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgCg");
	this.shape_1.setTransform(2.3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpA0QgSgPAAgYQAAgbARgYQAUgaAbAAQAbAAANAMQAPANAAAcQgBAbgPAXQgSAbgbgBQgYABgQgOgAgcgbQgNATgBAVQABAQAMAKQALAJARAAQASAAAOgUQAMgSAAgVQgBgVgIgIQgJgHgUAAQgUAAgNAUg");
	this.shape_2.setTransform(-8.6,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordsoff, new cjs.Rectangle(-17.5,-13.8,35.1,27.7), null);


(lib.prepwordsinfrontof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBHQgCgCAAgEIAAgCQACgLAAgMIgBgXIAAgXIgMABQgJAAAAgIQAAgJAPABIAHgBIACgNQACgSAHgJQAIgKASAAQAMAAAAAIQAAAIgKAAQgVAAgCAcIgBAFIATgBQANAAAAAIQAAAGgGABIgHABIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgCg");
	this.shape.setTransform(39.8,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_1.setTransform(31,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_2.setTransform(17.6,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCgBgEIAAgIIgBgHIABgXIACgXIAAgIIgBgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_3.setTransform(9.4,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_4.setTransform(0.1,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgHQAAgJAIAAQAIAAAAAOQAPgPATgBQAHABADAEQADAFAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_5.setTransform(-8.1,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNBHQgCgCAAgEIAAgCQACgLAAgMIgBgXIAAgXIgMABQgJAAAAgIQAAgJAPABIAHgBIACgNQACgSAHgJQAIgKASAAQAMAAAAAIQAAAIgKAAQgVAAgCAcIgBAFIATgBQANAAAAAIQAAAGgGABIgHABIgTABIgBASIABAPIAAAQQAAAPgCAJQgBAHgFAAQgEAAgDgCg");
	this.shape_6.setTransform(-16.9,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgGAAQgKAAgHALQgIAKgEAPIgBAIIgBAIIABAHIABAIQgBAEgCACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIABgXIAAgIIgBgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSAOAAQANAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_7.setTransform(-30.4,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkA9QgCgCAAgEQAAgEACgCQADgCADgBIASgBIABgQIgBgNIAAgPQAAgRACgdIgLAAIgKAAQgEAAgDgCQgCgDAAgDQAAgIAIgBIAZAAQAPAAAZADQAIABAAAIQAAAEgDACQgDACgDAAIgNgBIgOgBIgBAsIAAAPIABAOIgBAPIAagBQADAAADADQACACAAAEQAAADgCACQgDADgDAAIgOABIgOAAIgPABIgRABQgDAAgDgCg");
	this.shape_8.setTransform(-39.7,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordsinfrontof, new cjs.Rectangle(-46.4,-13.8,92.9,27.7), null);


(lib.prepwordsbehind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgHQAAgJAIAAQAIAAAAAOQAPgPATgBQAHABADAEQADAFAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape.setTransform(18.3,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAHADAIAAQAGAAAHgCQAKgDADgEQADgFADAAQADAAACADQADACgBADQABAJgQAGQgMAGgMAAQgSAAgMgJgAgQgWQgHAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgHAIg");
	this.shape_1.setTransform(9.5,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA5QgMgMAAgSQAAgXANgMQALgNASAAQAJAAAGADIAIAFQAAgjACgMQACgHAGAAQAIAAAAAIQAAAMgEAnIgBAXQAAAcACAOIAAACQAAADgCACQgCADgDAAQgFAAgCgIQgHAFgGACQgHACgFAAQgRAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAHAHALAAQAFAAAFgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgFgCQgGgEgHAAQgNAAgHAHg");
	this.shape_2.setTransform(-0.4,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgDACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIAAgXIAAgIIAAgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSANAAQAOAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_3.setTransform(-9.6,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkAxQgKgMgDgXIgBgpIAAgTIACgLQACgGAFAAQAIAAAAAOIAAAxQAAAxAiAAQAhAAAAhTIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAALIAAALIAAAKQAABfgyAAQgYAAgNgPg");
	this.shape_4.setTransform(-20.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordsbehind, new cjs.Rectangle(-28.8,-13.8,53.1,27.7), null);


(lib.prepwordsaroundnear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgIQAAgIAIAAQAIAAAAAOQAPgQATAAQAHAAADAGQADAEAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAGQgHAFgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape.setTransform(16.1,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbArIgGgGIgOAGQgGACgDAAQgUAAgJgLQgIgLAAgVQAAgSAOgPQAOgOASAAQAIAAAIADQAMAFAAAHIgCAEIgCAKIAAARQAAALABAGIAGAPIABAEIABABQAAADgCADQgCACgEAAQgBAAgEgDgAgNgUQgKALAAAMQAAAOAGAHQAEAGAKAAQAHAAAGgDIAIgGQgDgVAAgKIAAgIIACgJIgFgCIgEgCQgMAAgJALg");
	this.shape_1.setTransform(7.4,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAEAHAIAEQAGADAJAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgIAIg");
	this.shape_2.setTransform(-1.4,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag3BAQgCgCAAgDIAAgLIABgLIAAgPIAAgPIAAgQIAAgRIgBgPIgBgPQAAgFADgDQAEgCAEAAQAEAAAHAJQAUAfAQAUQATAXAYAXIAAgLIAAgKQAAgjgDgWIgCgJIgCgIQAAgLAJABQAOAAAAA2IAAAaIAAAcIgCANQgBAIgIAAQgEAAgGgFQgighgrg7IAAATIgBASIABAVIAAAUQAAAWgJABQgEAAgDgEg");
	this.shape_3.setTransform(-12.9,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdA5QgMgMAAgSQABgXALgMQAMgNASAAQAKAAAEADIAIAFQABgjACgMQACgHAGAAQAIAAgBAIQABAMgEAnIgBAXQAAAcACAOIAAACQAAADgBACQgDADgDAAQgFAAgDgIQgGAFgGACQgHACgFAAQgSAAgLgLgAgTABQgHAJAAAQQAAALAIAIQAIAHAKAAQAGAAAFgCIAJgHIACgDIAAgOIAAgKIAAgJQgDgHgGgCQgEgEgIAAQgNAAgHAHg");
	this.shape_4.setTransform(23.6,-12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgGAAQgJAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCAAgEIgBgIIgBgHIACgXIABgXIAAgIIgBgIQAAgEADgCQACgCAEAAQAHAAAAAKIABAKQAOgSAOAAQANAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIACASQAAAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_5.setTransform(14.4,-10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASAoQgKAFgNAAQgKAAgIgFQgHgFgCgKQgDgWAAgRQAAgLACgPQACgGAGAAQAEAAADACQACACAAADIgBANIgBAMIABAYQAAAKACAFIAGADIAEAAQALAAAMgDIAAgRIAAgPQAAgSABgOQABgHAHAAQAEAAADADQACACAAADIgBAfIAAARIAAASIAAAGIAAAFQAAAEgCADQgDABgDAAQgHAAgCgHg");
	this.shape_6.setTransform(5.4,-10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgRAUAAQARAAAIAPQAHANAAARQgBARgJAOQgLAOgQAAQgOABgKgLgAgOgQQgGAKAAALQAAAMAHAGQAGAGAHAAQAIgBAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_7.setTransform(-3.7,-10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfAmIAAg5IAAgIIAAgIQAAgJAIAAQAIAAAAAOQAPgPATAAQAHAAADAEQADAGAAAKIAAAGQAAAKgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFAKIAAAtQAAAIgIAAQgHAAAAgIg");
	this.shape_8.setTransform(-11.9,-10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAdArIgGgaIgVAEIgWAFIgOAfQgCAFgFAAQgDAAgDgDQgDgCABgDQAAgFAMgaQgBgCgBgDQAAgGAIgCQAKgRAPgXQASggAFABQAGgBADAKIAFAcIAMA4IAGANIABAJQABADgDADQgDADgDAAQgHgBgGgTgAgKAGIAegGIgHggg");
	this.shape_9.setTransform(-22.5,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-26.7,61.4,53.4);


(lib.prepwordsalongside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAkQgNgLABgSQgBgVALgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQADACgBADQABAJgPAGQgNAGgMAAQgSAAgMgJgAgQgWQgHAIgDAPIAZgLQAOgIAHgFQgIgHgMAAQgKAAgGAIg");
	this.shape.setTransform(36.1,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdA5QgMgMABgSQAAgXAMgMQALgNASAAQAJAAAGADIAIAFQAAgjACgMQACgHAGAAQAIAAAAAIQgBAMgDAnIgBAXQAAAcADAOIAAACQgBADgCACQgCADgDAAQgFAAgCgIQgHAFgGACQgGACgGAAQgRAAgMgLgAgTABQgHAJAAAQQAAALAIAIQAHAHALAAQAGAAAEgCIAJgHIADgDIAAgOIAAgKIAAgJQgDgHgFgCQgGgEgHAAQgNAAgHAHg");
	this.shape_1.setTransform(26.3,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHA8QgCgCAAgEIgBgOIAAgQIABgTIABgSQAAgFACgCQACgCAEAAQACAAACACQADACAAAFIgBASIgBATIAAAQIAAAOQAAAEgCACQgCADgDgBQgDABgCgDgAgFgtQgCgDAAgEQAAgEACgCQAEgEADAAQADAAAEAEQACACAAAEQAAAEgCADQgEADgDAAQgDAAgEgDg");
	this.shape_2.setTransform(19.1,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAGAAAGgBQAHgDAAgFQAAgMgPgEIgIgBQgLgCgFgEQgHgEAAgJQAAgRARgIIAPgFQALgDAFgCQADgCAEAAQADAAADADQACACAAAEIABAGIABAHQAAAEgCADQgCACgEAAQgEAAgCgDIgCgJIgTAGQgNAFAAAIIAFACQASADAJAFQANAJAAAQQAAAOgLAGQgJAGgPAAQgKAAgKgEg");
	this.shape_3.setTransform(12.2,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcBAQgLgCAAgHQAAgGAIgBIAKACIAPABQAPAAAGgPQAEgLAAgUQgEAIgHAEQgGAEgGAAQgQAAgJgKQgKgLAAgPQAAgWANgOQAOgOAVAAQAJAAAFACQAFACADAEQAIAAABAKIgCAPIgDAQIgCAbQAAARgDAKQgDAOgJAGQgKAIgSAAQgLAAgHgCgAgOgpQgJAKABAPQgBAMAFAFQAFAGAJAAQAHAAAIgIQAHgJACgIIADgcIgHgFIgIgBQgOAAgIALg");
	this.shape_4.setTransform(-1.4,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgBACQgDACgEAAQgDAAgCgCQgDgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_5.setTransform(-10.1,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAjQgLgMgBgSQAAgTAKgOQALgQAUgBQARABAIAPQAHAMAAARQgBASgJANQgLAPgQgBQgOAAgKgKgAgOgQQgGAJAAAMQAAAMAHAGQAGAGAHgBQAIAAAGgFQAHgIAAgLQABgggSAAIgBAAQgLAAgGAMg");
	this.shape_6.setTransform(-19.4,2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIA8IABgeIABgeIAAgdIAAgfQAAgHAHgBQAJABAAAHIgBAfIAAAdIgCApIgBAUQAAAHgHABQgHAAAAgJg");
	this.shape_7.setTransform(-26,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAdArIgGgaIgVAEIgWAEIgOAhQgCAEgFAAQgDAAgDgDQgDgCABgEQAAgDAMgbQgBgCgBgDQAAgGAIgCQAKgRAPgXQASggAFABQAGAAADAJIAFAcIAMA4IAGANIABAJQABADgDADQgDACgDAAQgHAAgGgTgAgKAGIAegGIgHgfg");
	this.shape_8.setTransform(-34.6,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordsalongside, new cjs.Rectangle(-42.8,-13.8,85.6,27.7), null);


(lib.prepwordsaboardabove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUAoIgCgSIgCgSIABgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIgBAIIABAHIAAAIQAAAEgBACQgDACgEAAQgDAAgCgCQgDgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEADgCQACgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQAAAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape.setTransform(7,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpA0QgRgPAAgYQAAgbAQgYQAUgaAbAAQAbAAANAMQAOANABAcQAAAbgQAXQgSAbgbgBQgYABgQgOgAgcgbQgOATAAAVQAAAQANAKQALAJARAAQASAAAOgUQAMgSAAgVQAAgVgJgIQgJgHgUAAQgTAAgOAUg");
	this.shape_1.setTransform(-4.3,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepwordsaboardabove, new cjs.Rectangle(-13.3,-13.8,26.6,27.7), null);


(lib.prepbubscene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ag3FcIgIgKQAggHAXgPQADgCAFAAQAAgFgCgDQgGgPgLgDQgLgCgPALIgIABQgdAGABgWIAAgCIAAgJQAGgFAJgDQAJgCAMABIAJABQALAMAKACQAPAEAPgUQACgDAAgEIAAgJIAAgRQALgQARgLIAIgEIADgBIAFgBQAJACAEADIABAAQAMAIgVAOIgDACQgCABAAADQgEAAgEACQgFADgEAEQAOAZAXAQQADACAEAAQApASADAAIAGAdIgOADQgFAAgDACQgNAJgYgDIAAAJIgJAAQgYACgLgLQAAgDgDgCQgCgDgEAAQAAgEABgBQAIgEAAgBQANhIgoBKIAAAIQgFAAgCADQgSASghAEIgEAAQAAgEgBgDgAj6EgQAAgFgCgCQgDgBgEAAQAAgFgCgBQgIgFgHgHQgGgHgEgKQASAAARgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBIAAgJIAAgIIAAgJQASgZAbgOQAEgCAEAAQAAAEgBADQgLAYgXAKIAAAJIAAAIIAAAJIAJAAQAlACAZgGIAAAEQAAAFgCACQgNANgegDIgIABIgSAIQAAANAEALQAAABAFAAIABAIQAEAMAAAGQAAAEgDAAQgGAAgXgegAlTExQATgHAKgRQACgBAEAAQAFAAACABQACACAAAFQgEAAgBABQgLAWgcADIAAgJgAEuDtQAAgEgCgCQgCgCgEgBIgJgZIAAgGIgHgLQgQAEgNAFIgBgEQgNgDAFgSQANgNAMgFIADgBQgOgGgFgOQgbAEgkgRQAFAAACgBQACgCAAgFQB1gLg9grQgCgBAAgEQAZgbAeAQQADACAEABIAAAIIgBAIIgBAFQgKAhgSARQALAGAIAIQARACgBgUIAEAAIAAgJIAAghIAJAAQAHAcACAfIAAAJQgEAAgEABQgFADgFAEIgIAAQAFAIADAKIAAgBIAJAAQAIAFACALQACALgCAPIgBAIIABAJQAFAcgPAGIgIABIgIABQgPAAAEgTgAE6DVIAGADIAAgFIAAgCQgCACgEACgAhRB/IAAgJQAlgMgVgbQgCgDgFAAIAAgEQgfgEgfAAIAAgJIAAgZQAEgEAGgCQADgCAFAAQBCAXAShAQABgBAEAAQAsgdAAA2IAAAIQgFAAgBACQgMAYgsAIQBEAtA7hVQACgCAEAAQAYgHACAPIABAJQAAABAAAAQAAABgBABQAAAAAAABQAAAAAAAAQgQAEgKAJIAAAIIgIABIgtAQQAAAJADAGQABACAFAAQAPAPASANIABAAQABACAAADQAAAFgCABIgDACQgtAbgdg0IgJAAQgYgBgMAKIAAAIIAAAJQgEAAgBABQgKAYgIAAQgHAAgGgZgADxhNQghgNgNgkQgEAAgCACIgEAGIgIABIAAAIIABAAIgBABIAAAAQgwA2gpg3QAGgKAIgIQAJgIALgGIAAAAQAZgNAngCIAAgEQAdgCADAcIAEAAQAQAWAKAdIABAIQgFAAgDgCgACxioIgIAAIgbAAIAAgJIAAgIQAdgQAIARQACAGABAKgAA9ioIgaAAIAAgJIAAgqQAEAAACgCQADgCAAgFIAjAAIAJAAQAOAMAOgJQADgCAFgBIAJAAIAJAAQAAAFABADQAGAQgOAMQgKAIgSAGQgPAGgWAEIgJAAgAgHkxQgCgCAAgFIAAgJIAAgiIAJAAIAIAAIAJAAQARANgEAdIgEABQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQgMADgMAAQgFAAgCgBg");
	this.shape.setTransform(-1.2,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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");
	this.shape_1.setTransform(-8,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AgQCbIgBAAIgDgJQgDAAgBAEIgBAAQgDg0AUgvQAKgbgEgcIgFgGQgCgFAAgEIAAgDQgKgKgFgLQgFgLAGgLQgogqg0gWQAGgGADgHQACgGAAgEIgBgDIAqAMQADAFAFADQADACACgDIACgCIAEABIACAAIAFACQAEABADACIAAABIABACIABABIAAABIAAABIAAABIACACIADAIIAGAMIABADIABAFQAGAGAIgEQAJgGAIgJQALAEABAXIAAApIgBACIgBADQgBAEABADQAHAFADgGIACABQALgBAHgMQAGgDAEgFIACgCQAJgCAFgGIABgBIAAAAIACAFQAEASgHARIgCACIgBABIAAACIAAABIgCADIgBABIAAACQgFANgJAOQAAADADABIAAAAIAAAAIABAAQATACARAEIABAEQAEAIgCAJIgOAHIgIgDIgEABQgHADABAHIABADIgBABIADABQASARARAPIADAJQADAFgBAHIhDAKQgTADgQAMQgLAIgMAAIgHgBgAh0iWIABgDIAAAAIgBADg");
	this.shape_2.setTransform(166.6,-49.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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gEQACgLAAgMIAAgIIACgEIADgEQAGgagBgcIAAgMIAEgEQAEgaAHgZIABgHQADgJAFgFIACgcIAEgEIABgEIAAgEIAAgEIAEgDIABgEIAAgHIAAgIIAAgIIAEgEIABgEIABgHIAAgIIAAgIIADgEIABgEIABgEIAAgEIAEgDIADgFIADgDIAAgEIAAgEIADgEIACgEIAAgEIAAgEIADgEIAEgHIAIgIIABgEIAAgEIAEgEIAAgBIABgDIAAgEIAAgEIAAgEIADgDIACgEIAAgEIAAgEIADgEIACgEIABgDIADgFIABgEIABgEIAAgDIAEgEIABgEIAAgEIAAgEIAAgEIADgEIADgEIADgEIABgEIAAgBIAAgCIAAgEIAAgEIAAgEIADgEIADgEIAAgEIAAgEIACgEIADgEIAAgDIAAgEQAvg7ArhAQAJgOALgNIAAgHIARgMQALgKALgJIABgEIABgDIAAgEQANgSAQgQQA1g1BLgdQAvgTAxgNIAugLQA1gFAvAWIACACQATACARAJQAZAOAXARIANAGQAwAYAeAuQAUAeAVAcIADAIQAFALADANQAEAMAHALIAAAEIAAADIAFAIIAMAXIAFAIQArAMArg5QAkgwBFgTIAAgIQAmgHAigJIAJgBIAAgJQAEgEAFgCQAEgCAFAAIAAgJIBdg7IBNgxQAEgCAEAAQBZguBrgdIAIgBIAAgIQBYgPBSgSIAJgBIAAgJIA/AAIAJAAIAIAAIAAgIIBIAAIAJAAIA1AAIAJAAIAAgJQAtAAAsAFIABAEIAJAAIAIAAQAkAAAjAEIABAEQA8gCAnASQAEABAEAAQASAAARAEQAAAAAAAAQAAABAAAAQAAABAAABQABABAAABQBYAEA4AkIABABIAHABQAEAAAEACIARAIIABAAIABgCQAjAIAWAdIACACIATAEIAFAHIABAEQAdAGAdgHIACgEIADgDIAMgMQAPgOARgMIBJgVQAPgFAIgGIAZABIAAgCQA9gDAqAQIAFACQADACAFAAQAYAKAGgIQABgCAFAAIAAgIQAhg2BBgVQAEgCAFAAIAAgIQAsAAAtAEIAAAEQAOAJALALQACACAAAEIAAAzIAAAIQAMACAKAGQAOgBALANIADACIACACIABgHIAAgZQAGgCAEAAQAJAAAAAKIADAKIAFANQAGALADAKIAEAJIAAACQAGAFAIAAIAIgBIABAAIAAgIIAAgJQAGgCAFABQAGgFAEALIACAFIAKAjQADALABAMIALACQALgGANgEIABAAIACgBQADgCACAEIAEAIQAFANgBAOQgCATgLARQAAAHgFAHIgBACIAaADQAEABADAEQAJAQgFATQgFAEgGABIgCABQAgAXAGArIAAADIgJAFQggAUgrAAQgZAAgWANIgJAFIAAAAIAAAVIAAAJQAAAEgBAEQgPAkgdAYIAAACIgCAFQgMASgeAAIgJAAIgtAAQAAAEgCACQgLALgOAIQARAkARAhQACADAAAFIAFAKQARAjANAoIABAIQAPAigLA5IgBAAIgDABIAAABIAAAHIAAAJIAAAIIgBAIQgbC0h8BTIAAADIgCACIgDACQhbAwh2AVIgJAAIhNAAIgEAAIgIAAQhPADgugcIgJgBQgVgFgPgLIAIgBIgKgEQgSgFgMgPQgagOgXgSIgFAEIgFADQACADAAAEQAAAFgCABQgbANgbADQgXALgaAJIgeAKIgHADIgbAIQhYAZhegKIgOgBQgPgBgOgCQgjgDgkAAQgMAAgJgDIgXAAQAAAEgCABIgjAPQgeANggAJQAAAFgBAAIg9AdIgBAFQgjAEgkAAIAAAEQgfAEgfAAQgFAAgDACIgTAIQgkAMgsAEQAAABgBAAQAAABAAABQAAAAAAABQAAAAAAAAQgRAEgSAAQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAQhCALgwgPIgJABQgZACgRgGQgHgCgFgDIgIgBQgggHgWgSIgJgBQg7gNgtgcIgMgJIgJAAIgJABQgqAGgUgPQAEgEAFgDQAEgBAEAAIAAgJIAJAAIAAgIIAAgJQAOgIALgLIABgBQABgCAAgDIAAgBQAAgEgCgBQgCgDgFAAQgEAAgCACIgJANQgjAugwAgIAAARIAAAJIABAIQALBfhTgCQAAABgBABQAAABAAAAQAAABAAAAQgBABAAAAQgIACgIABIgJABQgSAAgLAIIgEAFIgDAAIgYASIgIAAIgHAJIgBABIgCACIgCABIgBAAIgMAEIgBAEIgCAEQg0Agg4AWIgIAEQgUAHgSAAQgeAAgXgWgAjgG/QAAAEgBABQgbAPgiAGIAAAIIAAAIQAoARApAPIAAAAIAaAJQAEACAFAAQAfANAoAIIAAAEIAJAAIAJAAIBqAAIAJAAIAJAAIAJAAIAogKIAFgBIASgFIAJgBQAAgBgBgBQAAgBAAAAQAAgBAAAAQgBAAAAAAIgOgEIgLAAIgDgBIgFgBQgMgJACgXQAfgJgOgGQgEgCgEAAQgFAAgDgCQgKgGgJgJQgEAAgBgBQgEgLAAgMIAAgBQAHgKAJgFQAGgFAHgCQAPgFATAIQAEACAFAAQALAHAHAAQANgBAAggIAEAAIAAgIIAAgJQATgGALgRQACgCAEAAIAAgIIAIAAIAIABIABAAQATACAHAHIABAAQANAMgYAaQgCACgEAAQAAADgCACQApgOAhAcQAFAEgJAJQgPAPgaAEQAEAAADACQAfARgDAAQgEAAgogTQgFAAgDgCQgXgPgOgZQAEgEAGgDQADgCAFAAQAAgEACgBIACgCQAVgNgMgIIAAAAQgFgDgIgCIgGAAIgCABIgIAFQgSAKgLARIAAARIAAAJQAAAEgCADQgOAUgQgEQgLgDgKgMIgJAAQgMgBgJACQgJACgGAGIAAAIIgBADQgBAWAdgHIAJgBQAPgKAKACQALACAHAPQABAEAAAEQgEAAgDACQgXAQggAHIAHAKQACADAAAEIAEAAQAhgFATgSQACgCAEAAIAAgJQAohJgNBIQAAABgHAEQgCABAAAEQAFAAACACQACACAAAEQAMALAYgCIAJAAIAAgJQAYACANgIQADgCAEAAIAPgDQBTgSBJgcQADgCAFAAQAAgEgCgCQgNgNAGggQAEAAADADQACACAAAEQgFAXAXgFIAJgBQAPgGgGgcIAAgJIAAgIQADgQgCgKQgDgLgHgFIgJAAIAAABQgDgKgFgIIAIAAQAEgEAGgDQADgCAFAAIgBgIQgCgggGgbIgJAAIAAAhIAAAJIgFAAQABATgRgBQgIgIgKgGQARgRAKghIACgFIABgIIAAgJQgFAAgDgCQgegRgZAcQAAAEACABQA9Arh0ALQAAAEgCACQgDACgEAAQAkARAagFQAFAOAOAHIgDABQgLAEgOANQgFASAOADIAAAFQANgGARgDIAGAKIAAAHIgJAAIgbAAIgDgBQgVgHAFgYIACgGQgmgTgYgjIgBgBQAEgEAGgDQADgCAFAAIAAgIQBRAJgVgsIgFgJQgCgDAAgEIAAgIQAqgCATgZQACgDAAgEQgCAAAAgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQgEgMAAgMQgEAAgBgCQgCgIgDgGQgEgGgEgEIgJgBQg7gOgegsIAAAAIAAgJIAIgBIAEgFQABgCAFAAQAMAjAhAOQAEACAEAAIgBgIQgJgdgQgXIgFAAQgCgcgdADIAAAEQgnABgaAOIAAAAQgLAGgIAIQgJAHgFALQAoA3Awg3IABAAQgBAEgBADQggAngYgDQgGgBgGgEQgQgLgMgkIAAgIQAIgFAGgFQAHgGAFgGIAJgLIAFgIIgFAAIgEAAIAAAAQgEANgSgGQAAABgBABQAAABAAAAQAAABAAAAQAAAAAAABQgoAIgRgQIgFgEQAAgFgBAAQgHgDgCgIQgCgHADgLQAPgGgBgcIAEAAIAAgJIA2AAIAJAAIgBgIQgBgNgEgKQgMgegkgGQAAAEgCACQgNAOgegDQgEAAgBABQgGANgPADIAAAIIAAABIgBAHQgDAfgOAUIgFAjQgHAagPAOIAAAJIAAAIQgCAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAQgFAYgRAJIAAAJIAAAIQgEAAgBABQgHAbgPAPQAAAEgBADQgHALgIAIQgJAJgJAHIAAAIQAAAFgCACQggAdgmAYIAAAIIAAAIQAAAFgCACQgCACgFAAIAAAIIAAAJQgEAAgEACQgFACgFAEQAAAFgCACQgGAGgJAEQAEAEAFADQAEACAEAAIAAgJQANgIAMgLIAAAAQACgCAAgEIAAgJQAFgEAFgCQAEgCAEAAQAFAEACAFQACAEAAAEQAAAEgCACQgCACgFAAIAAAJQgEAAgCACIAAABQgJAMgOAHIgHADIgBAIQgIAWgaAEQAAAEgCABQgHADgJAAIAAAJQgFAAgEABIgSAHQAAAJADAGIABABIAFABIAbAAIAJAAQAAgEgCgDQgDgFgEgFQARgEAMgKQACgDAEAAIAAgIQAJgPANgLIABAAQANgKASgFIAJgBIAAAIQAEAAABACQAPAfgvASIAAAIQA1gWATAeIADAJIgDAAQAAAFgCAAQgeAMgfAJIAAAYIgDATQgJArghhFQgEAAgCACQglAlglgGQgEAAgBgBIgCgGQgCgJAAgJQATgHALgQQABgCAFAAIAAgFIgIAAQgLgCABgKIgIgCQgSgIgWAKIgPAIQAAAOASgBgACxH7QgXADgNANIAAAJQAQABALgFQALgEAFgKQACgDAAgFIgJABgAg1FTQgcAPgSAZIAAAJIAAAIIAAAJQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgRAEgRAAQADAJAHAIQAGAHAJAFQABABAAAEQAFAAACACQACACAAAFQAgAqAAgRQAAgFgEgMIgBgIQgEAAgBgCQgEgLAAgNIASgHIAJgBQAeADANgOQACgCAAgEIAAgEQgaAFglgBIgJAAIAAgJIAAgIIAAgJQAYgLAKgXQACgEAAgEQgFAAgDACgAieHBQgLARgTAHIAAAIQAdgCAKgWQABgBAFAAQAAgFgCgCQgDgCgEAAQgFAAgBACgAO8EXIARAHQALAFAMAGQAPAfAdAVQAmAbAoAYIAVAMQADACACAEIgBAEIgCAEIAAAAIADACIAAABQACABAEAAQA3ARBGAAIAEAAIAFAAIBIAAIAJAAQBzgMBSgtQAEgCAEAAIAAgJIACgBQCBhRAQjEIABgBIAEAAIAAgCIAAgGQAAhmgkhDQgUgwgqgcQAAgEgCgDQgZgngJg3QAwBMAggpQATgXAaAeQAUgHAZgBIAJAAIAIAAIAAgJQAZgSAKghIABgIIAAgEIgBAAQgaANAAgoIgEgDQADgRAVAAIgBgBIAAgDQABgEAEgBIADAKIABAAQARACAOgKQAQgLATgDIBDgLQABgGgDgFIgDgKQgRgPgSgRIgEgBIACgBIgBgCQgBgIAHgDIAEgBIAIAEIAOgIQACgIgEgJIgBgDQgRgEgTgCIgBgBIAAAAQgDAAAAgEQAJgNAFgPIAAgCIABgBIACgCIAAgBIAAgCIABgBIACgDQAHgRgEgSIgCgEIgBAAIAAAAQgGAGgIADIgCACQgEAFgGACQgHAMgLABIgCAAQgDAFgHgEQgBgEABgEIABgDIABgCIAAgpQgCgXgLgDQgHAIgKAGQgIAEgGgGIgBgEIgBgDIgGgNIgDgHIgCgDIAAgBIAAgBIAAgBIgBgBIgBgBIAAgBQgDgDgEgBIgGgBIgBgEIAAADIgEgBIgCADQgCADgDgCQgGgDgDgFIgpgMIAAACQABAFgCAFQgDAIgGAFIgDACIgHADIgEAIIAFACIgIACIgFAGQA0ARAYAvQACADAAADQAAADgCACIgFAHIgKAAQgbgsgwgaIgCgCIgGADQgLADgLgCIgBAAQgPAHgHgVQApgUAUgoQABgEAAgEIABgIQADgigNgRIAAgEQhmgFgyAzIAAAzIAAAIIABAJQAEAXgEAAQgFAAgNgXQAAgBgBgBQAAgBAAgBQAAAAAAgBQAAAAAAAAQgOgCAGgTIgJAAQgcgCgRgOIgJAAIgSAAIgJAAIg+AAIgJAAIgHAAIgCAAIAAADIAAABIgYACIgtANIgLAGIgDAAIAGABQgQAGgNAKIgJAGQgUAQgPAUIgCAAIgCgEQgyAHgzgpIgUgPQgfgNgYgSQgFAAgEgCQhCgehWgLIgJABQgYAFgDgOIgJgBQgngIgqgEQgqgEguAAIgJAAIhrAAIgJAAIhaAAIAAAEIgQADQgOABgOAAIgJABQhxAPhmAbIgIAAIAAABIgGABQhjAghbAqQAAAEgCABQguAVgpAYQgrAYgmAbQAFAFAFACQAEACAEAAQBdgFBBAYIANAFQADABAFAAQAeAPAaAUQAkAaAeAiQACADAAAEQAhA0ALBLIAAAIQAWANARATIAAAAQACACAEAAQASANAQAPQACACAAAEQAcAPAPAcQABACABAEIAAACQAWARAUATQACACAAAEQAVATAUAWQATAWASAWQADADAAAEIAAABQAcAfAXAlQACADAAAEQALAHAFANIABAGIABAIIABADQALAPAIASQAGAPAGAQIADAKIABAIIAEAMQAKAcADAkIABAIIAHAlQAGAhADAlQAJgCANADQA6ALA8ABQBDAABDgGQAQgBAQgEQAQgEAQgGQBFgcBDgYQgXgUgUgYQgDgDgEgCQgEgBgFAAQghgBgfgFQgZgBgVgHIAFAAQAogCAegTQAaAFAaAJgAveCjQg6BbgzBkQgDAzAmAMQAAAAAAAAQAAABAAAAQAAABAAABQABABAAABIAJAAQAqAGAWgNQADgCAEAAIAFgCQBCgbBJgUIAIgBIAAgJIASAAIAJAAQAGgEAGgGQAIgKAEgOQADgPAAgTIAAgIQgFAAgCgCIgIgIQhOhPhEhZQgdAbgXAkgA9uFsIgSAGIABAEIgCADIgGAHIgFACIgIACIAAAEIAAAIIAAABIAMAHIAPAGQAQAEAVAAIAAAAIAAgFQAAgEACgDQAMgagOgRIgJAAIgIAAQgFAAgEABgAElgRIAAAIIAAAJIAbAAIAJAAIAEAAQAAgKgDgGQgEgJgKAAQgJAAgOAIgADBg1QgCACgFAAIAAAqIAAAJIAbAAIAJAAQAVgFAQgFQASgGAJgIQAPgMgGgQQgCgDAAgFIgJAAIgJAAQgEAAgDACQgPAKgNgMIgJAAIgkAAQAAAFgCACgACNiZIAAAJQAAAEADACQACACAEAAQAOAAAMgEQAAAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAFgBQAEgdgSgNIgJAAIgJAAIgJAAIAAAigASyppIAAACIAHgEIgHACgAawqHIAAACIAAABIABgEIAAAAIAAgDIgBAEgA6GH6QATgGAYgGQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIAAgIQAqgPAYgiQABgCAFAAIAAgIQAegOAGACQAGABgRARQgDACgEAAQAAAEgCADQgiAkgtAZQAAAEgCACQgRAQgNABIgBAAQgMAAgIgPgAHRF8QAEgBADgCIAAACIAAAFIgHgEgArSFnQgCgBAAgEQApAXgCAAQgCAAgjgSgAA8FAIgIgIIAAgJIAAgRQAfgRgLgSQgCgDAAgEIgIACQgjAOgUgYIAAgFQgNgCAGgTIAAgIQANABgBgSIAEAAIAAgJIAJAAIAJAAIAJAAQAoAbAag7QABgBAFAAIAAgJQBbgMgbA/IgCAIQAaAMAWgjQABgCAFAAIAAgJQANgBAJACQAdAGgCAjIgFABQAAAEgCACQgLALgNAIQgFAAgBACQgHAMgXgFIAAAIQAMAKAIAOQAHAMAEAPIgEAAQAAAEgCACQgJAIgJAFQgNAIgKABQgeADgRgwQgEAAgEACQgOAGgNAJIAAAIQAAAFgCACQgRASgQAAQgKAAgKgIgAAaDDQgFADgFAEIAAAZIAAAJQAgAAAeAEIABAEQAEAAACACQAVAbgkANIAAAJQAKAxAVgwQAAgBAFAAIAAgJIAAgIQALgKAYABIAJAAQAeA0AugcIADgBQACgBAAgFQAAgDgCgCIAAAAQgSgNgQgPQgEAAgBgCQgEgHAAgIIAtgQIAJgBIAAgJQAJgIAQgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIAAgIQgDgPgXAGQgFAAgBACQg8BWhEgtQArgIAOgYQABgCAEAAIAAgJQABg2gtAdQgFAAAAABQgSBBhDgYQgEAAgEACgAJeEeQAEAAADgCQACgCAAgEQAAgEACgCQAkgdAdgkIAAgBIAEgEQgEAAgEABQhXAqglgxIgBgBIgBgCQAAgEgCgDQgNgRgIgVQgJgWgEgaIAAgIIAAgJIAJgFIAAgDIAAgIQAVgmAqgVQASgIARgKQAdgRAggIQAMgBAFAMIAAABIAQgDIgDgHQgCgEgEgEIgBgIIAAgEIAAgEIgDgEIgCgEIAAgEIAAgDIgDgEIgCgEIAAgMIAAgMIgDgEIgDgEIAAgDIAAgEIAAgEIgFgIIgEgEQgCgGABgGIAAgPQAhgiAwgFQBGAKAKBDIAAADIADAEIACAEIAAAEIAAAEQAIALAEANQAEAIAFAHIAAAEIAAAEIAGAHIAJAIQADAHgFAEIgEAEIAWAGQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAACQATAUAsgDIAJAAIA+AAIAJAAQAtAAAsADIABAEQAWAAAVAEQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAACQA4gOAMhDQAFgZgBAnQgQAfALA0IAFAAQAQACAOAEQAeAJAWARQACACAFAAQAEAAADADQAyAvhLgpQgEAAgEgCIghgNIgwgTIgJAAQgnAEgPgVIgJAAIgdAAQhNgThUAKQgTAFgUAIQgPgFgPgQQgEAAgEgBIgFgCIgGgLIgNgUQgOgTgRgNIgBgDIgEgIIAAgEIAAgEQgJgPgFgQQgDgJABgKQgmhHhEAyIADAEIADAEIABAHIAAAEIAAAEIADAEIADAEIAAAMIAAALIACAEIADAEQgCAJAEAHQAEAHgBAIIAFAIIAFAIIAAAIIgBACIAFAAIAGAWIgfgBIgJABQgjAIgeAJIgXAJIgKAKQgqAJghAaIgBAIIAAAQIABAEIAKAGQAEADAEABIANgGIABACIgCADIAAABIgBADIgCADIgDABIgFACQgOgCgKgIIgGgHIgBABQgDACAAAEQADATAYgCIAJAAQAFAAACACQACACAAAFIgJAAIgSAAQAGAYAQAIQAJAEANAAQAQgBAVgIQAEgCAFAAIAAgIQAhgDAdgFIAJgBIAAgIQBSgMgfAPQgLAEgXAIQgEACgEAAIgJAAQgiAFgdALIgIABIgsALIgbAFIgBAAIAAAHIAAACIAAAIQBNAZBdgoQAEgCAFAAIhtBkQgDACgEAAQADAbApgJIAJgBIAAgJQAygUACAEQABAEgtAbQgDACgFAAQgEAAgEACQgPAHgMAAQgXAAgNgagAM0EdQgggHgagNIgBgBQgLgFgKgGIAeAFIAJAGQAEACAEABIALADQAMAPATABIgJgBgAJnBkQA0gXA3gSQAEgBAFAAQguAig+AQIgIABIAAgJgAWdn9QgQgFAGgcQAJgEAKgDIAIgBIAAgFQARAKAJAIQAeAahBADIgIgBg");
	this.shape_3.setTransform(-16.3,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("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");
	this.shape_4.setTransform(-22,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#272722").s().p("AADAZIgDgDQAEADAFABIABABQgEgBgDgBgAgPgXIAFgDIACAAIgBACIAAATIAAADQgLgEAFgRgAAQgGIAAgEIAAgGIABAMIgBgCgAAMgaIAAAAIABABIgBgBg");
	this.shape_5.setTransform(-103.3,70.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#39342F").s().p("AAYAOQgiAAgTgQIAAgIIAAgDIALAAQAIAYAbgTQADgCAEAAQgFAPALAEIAAAFIgGAAg");
	this.shape_6.setTransform(-107.3,68.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24211C").s().p("AAHAFQgNgDgIgHIAdAAIAAADIAAAIIgIgBg");
	this.shape_7.setTransform(-111.8,68);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ACA8A1").s().p("AgGgBIANAAIgHACIgGABg");
	this.shape_8.setTransform(-86.3,70.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F1B").s().p("AgHgdIAgAAIgCADIgCAEIgMAEIgCABIgDACIgCAEIgCAEIgKAFIgCABIgPAAIAAADIAHgBQgZANgZAPIgKABQAdgeAsgdgAAwgMIAMgEIgNAIIABgEgABCgUIAIgJIAHAAIgQAKIABgBg");
	this.shape_9.setTransform(-84.2,70.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#695E56").s().p("AgIgDQAIADAJABQgFACgEABIAAAAQgEAAgEgHg");
	this.shape_10.setTransform(39.6,68.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prepbubscene3, new cjs.Rectangle(-213.1,-76.1,393.7,152.7), null);


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


(lib.antscene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAGgRIAAAAQgDgBgDABQgIgBgGAGQgHAFAAAHQAAAIAHAFQAGAFAIABQAJgBAGgFQAHgFAAgIQAAgGgGgFIAAAAQAAgBgBAAQAAgBAAAAAANgOQgCgBgCgB");
	this.shape.setTransform(5.4,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABBg8QAAAAABAAQAAAAABAAQAAgBAAAAQgBgBgBAAQAAgBAAAAQgBABAAABQAAAAABABgAgyAbQgCgBgCgBQgEgBgCgCQgGgEAAgFQAAgHAMgFQANgEARAAQARAAALAEQANAFAAAHQAAAHgKAEIgHgDIAEAEAAmgqQAAAAAAABAApgVIAAABIABAGIABAEAAAAVIgMgHQAGAHACAIQAEgCAEgCIAMAPIAAAYAAHAYQgBABgCAAAgYAfQgDAAgDgBQgCAAgDAAQgIgBgHgCIgLAMIAAAUAgSAeIAAAh");
	this.shape_1.setTransform(1.7,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmAvIgGAAIgFAAQgIgBgHgDIgEgBIgGgEQgGgDAAgFQAAgIAMgFQANgFARAAQARAAAMAFQAMAFAAAIQAAAGgJAFIgHgEIAEAFIgJADQgCgHgGgIIANAHIgNgHQAGAIACAHIgOACIgFAAIgBAAgAgNAlIAHAEIgDABgAAHAgQgGgFAAgIQAAgHAGgGQAHgFAJAAIAFAAIABAAIgBgBIAAgCIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIgBAAIgBgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAAAIgBgBIAAgBIABgGIABgCIAAgBIgBgBIABgBIAAAAIABgCIAAgBIABgBIAAgCIAAAAIADgCIABgBIAIgGIALgCIABgBIABAAIgBABIAAAAIAAAAIABACIgBgCIAAAAIAAAAIABgBIAAAAIACACIAAABIgBAAIgBAAIgBAAQgHAAgFADIgCABIgDACIgDABIAAABIgCADIAAAAIAAABIgBABIAAAAIgBALQgBAEACAEIABABIAAAAIAAABIAAAAIABABIAAABIAAABIACACIAAACIAAACIABACIADACIAAAAIAAgCIABgBIAAAAIAAgBIAAgBIAAgCIAAgBIABAAIAAgBIAAAAIAAgCIAAAAIABgBIABAAIAAgCIAAgBIABgBIABAAIAAgBIAAgBIAAAAIAAgBIACgBIABgBIAEgEQAGgDAHgCIAAAAIABAAIABgBIAEgBQAGgCAHABIABABIAAAAIAAABIgKABIgIABIAAABIgBAAQgGACgFACIgEADIAAABIgBAAIgCACIAAAAIAAABIAAABIgBAAIgBABIAAABIAAABIgBABIgBACIAAABIAAAAIAAACIAAAAIgBABIAAACIAAAAIAAABIAAABIgBABIAAAAIAAABIAAABIgBABIABAAIABABIAAAAQAFAFAAAHQAAAIgGAFQgGAGgJAAQgJAAgHgGgAAdAFIgBgEg");
	this.shape_2.setTransform(3.1,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.antscene3, new cjs.Rectangle(-6,-9,17.3,14.8), null);


(lib.ant1still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAtiFQAAAXgRARQgQAQgWAAQgXAAgRgQQgQgRAAgXQAAgXAQgQQARgRAXAAQAWAAAQARQARAQAAAXgABshTQAAABAAAAQAAAFADADQABABACABQACABAEAAQAFAAACgDQAEgDAAgFQAAgFgEgEQgCgDgFAAQgFAAgEADQgDAEAAAEgACQgeQABgBACAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAQgEAAgDgEQgCgBAAgBQgBgCAAgDQAAgFADgDQABgCADAAgAArAKQAAAegMAVQgLAVgRAAQgPAAgMgVQgMgVAAgeQAAgcAMgVQAMgVAPAAQARAAALAVQAMAVAAAcgAB4BsQgBACAAABQAAADAFADQACABAEABQALACAPAAQAQAAALgCQALgDAAgFQAAgDgLgDQgLgDgQAAQgPAAgLADQgHABgDACgAiYg1QgEAEgFAAQgFAAgEgEQgDgEAAgFQAAgFADgEQAEgDAFAAQAFAAAEADQAEAEAAAFQAAAFgEAEgAiDAQQAAgCgCgBQgCgDgEgBQgBAAgCAAQgFAAgDAEQgEADAAAFQAAAFAEAEQADADAFAAQAFAAAEgDQADgEAAgFQAAgDgBgCgAi1C5QgMgEAAgGQAAgGAMgEQANgEARAAQASAAAMAEQAMAEAAAGQAAAGgMAEQgMAFgSAAQgRAAgNgFg");
	this.shape.setTransform(-2,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai7D7QgMgEAAgGQAAgGAMgFQAMgDASAAQARAAANADQAMAFAAAGQAAAGgMAEQgNAEgRAAQgSAAgMgEgAh3DeQAAgCgBgDIgBgCIgBgCIgBgCIAAgRIAAgJQgDgJgBgKIABgDIABgIQACgHgDgEIABgGQAYgJAZgFQAHgBAHgDIAAgBIABgCIADAAIAAgBIACABIAEgBIAFACIABABIAAACIgBADIgBABIgDABIgJAHQgbAIgaAMIAAAAQgCACgBADIgBAFIAAABIABAMQAEAPgCARIABACIABABQACAHADAGIACADIAAAEIgBACIgBAAQgJAAgDgLgABuC6IgEgEQAAgHgEgIQgBgDgDgDQABgFgCgFIgEgGIgBgCIgFgIIgFgOIgCgIIgoAJIgBgBIAAgCIAAgCQAQgLAUgCQAOAAAEAOIAKAbQgCAFAFAFIACACIAEAJIAAABIAAACIABABIABACIAAACIAAAAQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAADAFADIAAAAIAAACIgBABIgDACIgDgCgAB7C4IgGgBQgFgDAAgDQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQADgCAGgBQALgEAQAAQAPAAALAEQALACAAAEQAAAFgLACQgLADgPABQgQgBgLgDgAByCuIAAAAgACiCkQgVgCgUgFIAEgBIAEgDQAggBAeAMIAJADIAAADIgmgGgAgfB/QgLgVAAgeQAAgdALgVQAMgVARAAQAPAAAMAVQAMAVAAAdQAAAegMAVQgMAVgPAAQgRAAgMgVgAidBfQgDgDAAgFQAAgFADgEQAEgDAFAAIADAAQADABACACIADAEIgDgEQgCgCgDgBIABgBIABgBIAEgDIACgBIABgBIACAAIAAAAQAnAGAoAEIABABIABACIAAABIgBABIAAABQgmACgkgIIgEAAIgCACIgDACIABAFQAAAFgEADQgDAEgFAAQgFAAgEgEgAAtBMQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgDQAigDAjgKQADgCADgDQAGgHAAgIIACgGIABgCIABAAIADgBIACABIABACQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIgEACQgDAEAAAEIABAFQgNAYgigBIgCABIAAABQgLACgLAAIgPgBgACFA1IgCgDIgBgFQAAgEADgEIAEgCIAEgBQAEAAADADQAEAEAAAEQAAAFgEADQgDADgEAAQgFAAgDgDgAhnApIgEgCQgfgGgVgVQAFgEAAgFIABABIACABIABABIABADQAaAUAgAHIAKADQALAFAMACIAEABIAAADIAAADIgHAAQgWAAgUgMgACDAyIAAAAgAAoAaIABgDQAggJAVgWIAGgGIABgDIAAABQAAAFAEADIACACQgIALgMAGIgBACIgBAAQgUAPgXACQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAgAiwAMQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQAFAEAAAEQAAAFgFAEQgDAEgFAAQgFAAgEgEgAiaADIAAAAgABrgGIgCgCQgEgDAAgFIAAgBQABgEADgDQADgDAFAAQAFAAADADQADADABAFQgBAFgDADQgDADgFAAQgDABgDgCgABrgGIAAAAgAg4gbQgQgQAAgYQAAgWAQgRQAQgRAXAAQAXAAAQARQAQARAAAWQAAAYgQAQQgQAQgXAAQgXAAgQgQgAg6hyQgDgFgEgEIgQgcQgCgHACgHQgGgFgBgIQgDgcAcgDQAdAEgHAdQgGAXgYgHQgCAOAOANIADADIAGAKIAAAEIgBACIgDABIgEgBgAAKh5QgCgNADgNIABgJIgBgBIgBgCQABgZgQgSIgDgDIgCACQgIAEgIgFIgBAAIgCgCQgMgEgCgOQgDgbAcgEQAdAFgIAdQgBAGgCAEQAOAOAEAWQADANAAAOQAAAOgFAMQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_1.setTransform(-1.4,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ant1still, new cjs.Rectangle(-22.9,-27.1,41.7,52.6), null);


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


(lib.ant1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ant1still();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.999,0.999,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:20.8},4).to({rotation:-9.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-29.9,50,58.9);


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
		
		 window.open ("prep_Scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("prep_Scene1.html","_self");
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


(lib.scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.v7.start();*/
	}
	this.frame_9 = function() {
		/* _root.v6.start();*/
	}
	this.frame_28 = function() {
		/* _root.v8.start();*/
	}
	this.frame_43 = function() {
		/* _root.v9.start();*/
	}
	this.frame_49 = function() {
		/* _root.v10.start();*/
	}
	this.frame_59 = function() {
		/* _root.v5.start();*/
	}
	this.frame_66 = function() {
		/* _root.v2.start();*/
	}
	this.frame_73 = function() {
		/* _root.v11.start();*/
	}
	this.frame_79 = function() {
		/* _root.body.start();*/
	}
	this.frame_81 = function() {
		/* _root.v5.start();*/
	}
	this.frame_84 = function() {
		this.stop();
	}
	this.frame_86 = function() {
		/* _root.body.start();*/
	}
	this.frame_88 = function() {
		/* _root.body.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(19).call(this.frame_28).wait(15).call(this.frame_43).wait(6).call(this.frame_49).wait(10).call(this.frame_59).wait(7).call(this.frame_66).wait(7).call(this.frame_73).wait(6).call(this.frame_79).wait(2).call(this.frame_81).wait(3).call(this.frame_84).wait(2).call(this.frame_86).wait(2).call(this.frame_88).wait(1));

	// around near
	this.instance = new lib.prepwordsaroundnear("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-186,-16.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},5).wait(20).to({startPosition:0},0).to({alpha:0},5).wait(20));

	// underneath
	this.instance_1 = new lib.prepwordsunderneath("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.8,76.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({alpha:1},5).wait(20));

	// off
	this.instance_2 = new lib.prepwordsoff();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.2,100.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0},3).wait(7));

	// aboard above
	this.instance_3 = new lib.prepwordsaboardabove();
	this.instance_3.parent = this;
	this.instance_3.setTransform(35.8,-75.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({alpha:1},5).to({_off:true},6).wait(14).to({_off:false},0).wait(10));

	// dancing ant
	this.instance_4 = new lib.antscene3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(217.8,-30.2,0.94,1,0,0,180);
	this.instance_4._off = true;

	this.instance_5 = new lib.ant1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(13.7,-49.4,0.362,0.399);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({x:21.8,y:-47.5},22).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},0).to({scaleX:0.45,scaleY:0.5,x:21.7,y:-57.8},2).to({scaleX:0.37,scaleY:0.41,x:30.9,y:-23.3},2).wait(11).to({scaleX:0.41,scaleY:0.45,x:18.4,y:85.1},6).wait(6).to({scaleX:0.37,scaleY:0.41,x:30.9,y:-23.3},5).to({x:43.1,y:-28.1},6).wait(1));

	// behind
	this.instance_6 = new lib.prepwordsbehind();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-147.5,109.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},4).wait(60).to({alpha:0},5).wait(20));

	// along side
	this.instance_7 = new lib.prepwordsalongside();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-39.9,-27.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0},5).wait(45));

	// in front of
	this.instance_8 = new lib.prepwordsinfrontof();
	this.instance_8.parent = this;
	this.instance_8.setTransform(165.9,-60.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0},5).wait(65));

	// bub
	this.instance_9 = new lib.prepbubscene3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(13.6,31.6,0.768,0.768);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({scaleX:0.77,scaleY:0.77,rotation:-4,x:30.5,y:20.3},7).wait(3));

	// ant
	this.instance_10 = new lib.antscene3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(217.8,-30.2,0.94,1,0,0,180);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({x:-117.4,y:-38.2},37).wait(1).to({skewX:-60,skewY:120},0).to({x:-175.7,y:34.8},14).to({scaleX:0.88,rotation:15,skewX:0,skewY:0,x:-170,y:57.8},5).to({scaleX:1,scaleY:1,rotation:-4.7,x:-74.4,y:86.1},12).to({rotation:-4.7,x:-57,y:86.8},6).wait(7));

	// annt
	this.instance_11 = new lib.antscene3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(217.8,-30.2,0.94,1,0,0,180);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).to({x:-117.4,y:-38.2},37).wait(1).to({skewX:-60,skewY:120},0).to({x:-175.7,y:34.8},14).to({scaleX:0.88,rotation:15,skewX:0,skewY:0,x:-170,y:57.8},5).to({scaleX:1,scaleY:1,rotation:-4.7,x:-70.3,y:86.8},10).to({scaleX:1,scaleY:1,rotation:0,x:-38.6,y:84.1},10).wait(7));

	// ant
	this.instance_12 = new lib.antscene3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(217.8,-30.2,0.94,1,0,0,180);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},0).to({x:-117.4,y:-38.2},37).wait(1).to({skewX:-60,skewY:120},0).to({x:-175.7,y:34.8},13).to({scaleX:0.88,rotation:15,skewX:0,skewY:0,x:-170,y:57.8},5).to({scaleX:1,scaleY:1,rotation:-4.7,x:-70.3,y:86.8},9).to({scaleX:1,scaleY:1,rotation:0,x:-19.9,y:81.6},14).wait(7));

	// ant
	this.instance_13 = new lib.antscene3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(217.8,-30.2,0.94,1,0,0,180);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({x:-117.4,y:-38.2},37).wait(1).to({skewX:-60,skewY:120},0).to({x:-175.7,y:34.8},13).to({scaleX:0.88,rotation:15,skewX:0,skewY:0,x:-170,y:57.8},5).to({scaleX:1,scaleY:1,rotation:-4.7,x:-70.3,y:86.8},8).to({rotation:-4.7,x:-1.3,y:76.2},15).wait(9));

	// ant
	this.instance_14 = new lib.antscene3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-245.7,56.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(20).to({_off:false},0).to({rotation:15,x:-173.1,y:54.1},15).to({scaleX:1,scaleY:1,rotation:-4.7,x:-70.5,y:87.9},20).to({scaleX:1,scaleY:1,rotation:0,x:63.3,y:65},29).wait(5));

	// ant
	this.instance_15 = new lib.antscene3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-245.7,56.6);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(16).to({_off:false},0).to({rotation:15,x:-173.1,y:54.1},15).to({scaleX:1,scaleY:1,rotation:-4.7,x:-70.5,y:87.9},20).to({scaleX:1,scaleY:1,rotation:0,x:85.1,y:62.9},33).wait(5));

	// ant
	this.instance_16 = new lib.antscene3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-245.7,56.6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(12).to({_off:false},0).to({rotation:15,x:-173.1,y:54.1},15).to({scaleX:1,scaleY:1,rotation:-4.7,x:-70.5,y:87.9},20).to({scaleX:1,scaleY:1,rotation:0,x:104.8,y:57.2},37).wait(5));

	// ant
	this.instance_17 = new lib.antscene3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-245.7,56.6);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(8).to({_off:false},0).to({rotation:15,x:-173.1,y:54.1},15).to({scaleX:1,scaleY:1,rotation:-4.7,x:-70.5,y:87.9},20).to({scaleX:1,scaleY:1,rotation:-1.3,x:64.8,y:62.9},29).to({rotation:0,x:123.1,y:53},12).wait(5));

	// ant
	this.instance_18 = new lib.antscene3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-245.7,56.6);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({_off:false},0).to({rotation:15,x:-173.1,y:54.1},15).to({scaleX:1,scaleY:1,rotation:-4.7,x:-70.5,y:87.9},20).to({scaleX:1,scaleY:1,rotation:0,x:133.6,y:45.3},45).wait(5));

	// ant
	this.instance_19 = new lib.antscene3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-245.7,56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({rotation:15,x:-173.1,y:54.1},15).to({scaleX:1,scaleY:1,rotation:-4.7,x:-70.5,y:87.9},20).to({scaleX:1,scaleY:1,rotation:0,x:147.6,y:39.7},49).wait(5));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAhAgX0IBUAAIAGAAIAAdyIAAR3MhEzAAAMAAAgvpg");
	this.shape.setTransform(0,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A+nBKIgOgHQgcgBgcADQgdADgcAHQgtALgwgGIgCAAQgDAAgDgEQgBgLAJgDIAGgBIAAAAQBTABBNgbQAlgMAfATQAKAGALABIASABIAGAAQAtAAApgNIARgGIAHgCQAUgIAUgMIADgBIAFgDIAFgBIAAgBIABAAIAYABQAbACAbADQAQACAQAEQAaAFAaAHIAYAFQBRATBWgMQAEgDAFAAQBvgCBuAFQAbgRAegJQAhgJAlABIAKAAIAEAAQAJgXAlABICFAAIAGAAIAHAAIAdAAIAFAAIATAAIASAAIAFAAIA+gBIAYgBIAGAAIAigBIACAAIADAAIACAAIAXgBIATAAIAGAAIANgBIBZgDIAFAAIASgBIATgBIACAAIADgBQARgIAUgGIAKgCIAMgDIASgCIALgIIAHgEQAdgNAjAOQAHADAGAAIAwABIA9ABQAMgKAQADQAMACACALIAEAAIAGAAQBAgCA+gHQAMgBAMABQBLAGBKACQCBAECAgGIAIACIAGABIAEgEIAHgJIAAgEIAAgEIACgEQADgHAFgFIABgBIADgCIADgBIADAAIAAgBQAYAFAZAJIAFACIAGACIAeAOIAEABIAMAHIAIADIAFgBIABAAQAUgcAhgHQAXgEADAVQBSgYBIATQBXAYBdgFQAjgCAjAGQAbAEASASIAAABQAQAAAKAMQARACARAAQDIABDGADIAGAAIBWACIAQABQAGAAACAHQBaADBaAJQAPABALAMQAJAJANAAQBdgBBbAEQAFgHAJgBIAGAAIAEACQAGACAEAHIAAAEIAAAJIAAAEQgRAWgfgLQgZgJgaACQg+AGg+gGQgXgCgQgPIgHgHIgvgBQhDgBhDgDQgNgBgHgMQjqgJj5AKIgFAAIgFAAQgdgBgVgQQgUgDgPgMIgNgKQiKABiLgJQgTgBgMgOIgeADIgKAAIAAAAIgGABIghAAIgQgBIgGAAIgVgCIgBgEIAAgEIgEgDQgDgCgDAAIgIAHQgJAJgJAKQgKAMgNAEIhNgmIgEgCIgEgBIgKgGIgBgBIgNAFQgFAJgHAIQgMAOgQAIIgPAFIgPAEQgQACgSgBQingOiogGIgmgBQgsgDgqALQgjAJgggMQgFgCgEgEQhmAJhmgMQgpAXgzAJIgLABQj2ATj5gEIAAACIgBAFIgDAEIgEADQhuAChmAeIgLACQgtAFgtgCIgXgBQg3gEg4AHQh+APh3glQhtghhqA0QgjASgjAAQgfAAgegOg");
	this.shape_1.setTransform(-0.6,-53.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6FFFF").s().p("EgiOAPPIAFAAIgFABgAdFO4IAvABIAHAHQgbgDgbgFgAHCOLIgEgBIABgBIAPgEIgKAFIgCABgEgiOgPEMBDIAAAIAAgLIBVAAIAAPZIgOAAQgEgHgGgCIgEgBIgGAAQgJAAgFAHQhbgEhdABQgNAAgJgIQgLgMgPgCQhagIhagEQgCgHgGgBIgRAAIhWgCIgFAAQjGgEjIAAQgRAAgRgDQgKgLgQAAIAAgBQgSgSgbgFQgjgFgjACQhdAEhXgXQhIgThSAXQgDgUgXAEQghAHgUAcIgCAAIgEABIgIgEIgMgGIgEgCIgfgNIgFgCIgFgCQgZgJgYgFIAAABIgDAAIgDABIgDACIgBAAQgFAGgDAHIgCAEIAAAEIAAAEIgHAJIgEAEIgGgBIgIgCQiAAGiBgEQhKgDhLgGQgMgBgMABQg+AIhBACIgFAAIgEAAQgCgMgMgBQgQgDgMAKIg9gBIgwgCQgGAAgHgCQgkgOgcANIgHAEIgLAIIgSACIgMADIgLACQgTAFgSAJIgCABIgCAAIgUABIgRABIgGAAIhYADIgNAAIgGABIgTAAIgXABIgCAAIgEAAIgBAAIgiABIgGAAIgYABIg+ABIgFAAIgTAAIgSAAIgGAAIgcAAIgHAAIgGAAIiFAAQglgBgJAYIgEAAIgKAAQglgBghAJQgeAJgbAQQhugFhvACQgFAAgEADQhWALhSgSIgXgEQgagIgagEQgQgEgQgCQgbgEgbgBIgYgBIgBAAIAAAAIgFABIgGAEIgCABQgUALgUAIIgHADIgRAFQgqANgtgBIgFAAIgSgBQgLAAgKgGQgfgSglALQhNAahTAAIgBAAIgFABg");
	this.shape_2.setTransform(0.5,-49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("EgiZAX1MAAAgvpMBDZAAAIAAALMhDJAAAIAAPjQgJACABALQADAEADABIACAAQAwAFAtgLQAcgHAcgCQAdgDAcABIAOAHQBBAdBCghQBqg0BtAhQB3AkB+gOQA4gHA3ADIAXACQAtABAtgFIALgCQBmgdBugDIAEgDIADgEIABgEIAAgCQD5ADD2gSIALgCQAzgKApgXQBmAMBmgJQAEAEAFACQAgANAjgJQAqgMAsADIAmACQCoAFCnAOQASACAQgDIAPgDIAPgGQAQgIAMgOQAHgHAFgJIANgFIABAAIAKAGIAEACIAEACIBNAmQANgFAKgLQAJgKAJgJIAIgHQADAAADABIAEADIAAAEIABAFIAVABIAGABIAQAAIAhAAIAGAAIAAAAIAKgBIAegDQAMAOATABQCLAKCKgBIANAJQAPAOAUACQAVAQAdABIAFAAIAFAAQD5gKDqAKQAHAMANAAQBDAEBDABIAvABIAHAHQAQAOAXACQA+AGA+gFQAagDAZAJQAfAMARgXIAAgEIAAgIIAAgEIAOAAIAAOYIAGAAIAAR3gAUjJ9IABAAIACAAIAAgBgAHNJ8IAAAAIAPgJIgDgHQgDADgFAAIgBABQgBABgEABIAAABIgCAJIABAAIADAAgEgiJAGrIAFgBIgFAAgAeAGbIgHgHIgvgBQAbAFAbADgA2LF6IABAEIgGABIgGABQgcAHgdADQAggDAfgHIAFgBIAGgBIgBgEIADAAIAAgBIgIABgAzvGKIAFgDQAagJAagFIgDAAQgbAEgbAKIgGADIADAAIADAAgA0XGIIAFABIAAAAIABgDIAAgBIgFgCIgBAFgAxfF4QgQAFgRABIADABQASgCARgFIAEgBIgDgBIgGACgA18F7IAAABIAIgBIgBAAIgHAAgANtFtIgMABQAJAAAJgBIACAAIgFgBIgDABgAHHFmIABAAIABgBIAKgFIgPADIgBACIABAAIADABgAMdFTIgBABQgBACgEABIgBAAQgCADgDABIAAABQAHAAAEgFIABAAQADgBABgCIABgBIAHgBIgDgBQgFAAgEACgAq+FIIAAABQgGAGgIADIgCAFQAFgBACgDIAAgBQAJgDAGgGIAAgBIACAAIgBAAIgBAAIgGAAgAkgEWIADABQAegOAXgCIAAAAQgXAAghAPgACiDYQg5AuhKAGIAAAAQBMgEA6guIgCgDIgBABgAiuEEIABAAIgEgIIADAIg");
	this.shape_3.setTransform(0,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},84).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.7,-148.5,472.5,308);


// stage content:
(lib.prep_Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* music = new Sound();
		music.attachSound("2-a");
		body = new Sound();
		body.attachSound("3-b");
		music.start(0,99);
		v1 = new Sound();
		v1.attachSound("above");
		v2 = new Sound();
		v2.attachSound("off");
		v3 = new Sound();
		v3.attachSound("behind");
		v4 = new Sound();
		v4.attachSound("below");
		v5 = new Sound();
		v5.attachSound("on");
		v6 = new Sound();
		v6.attachSound("in front");
		v7 = new Sound();
		v7.attachSound("under");
		v8 = new Sound();
		v8.attachSound("alongside");
		v9 = new Sound();
		v9.attachSound("around");
		v10 = new Sound();
		v10.attachSound("near");
		v11 = new Sound();
		v11.attachSound("beneath");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(283.2,47.5,1,1,0,0,0,130.3,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBLQgDgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAQgBIAIAAIABgNQACgUAIgJQAIgLATAAQANAAAAAIQAAAJgLAAQgWAAgCAdIAAAGIATgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQgBAHgGAAQgEAAgCgCg");
	this.shape.setTransform(385.5,352.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrA2QgTgQAAgZQAAgdASgZQAVgbAcAAQAdAAAPANQAOANAAAdQAAAegQAYQgUAcgdAAQgZAAgQgPgAgegdQgOAUAAAWQAAARANALQAMAKARAAQAVAAANgVQANgUAAgXQAAgVgKgIQgIgIgWAAQgUAAgPAVg");
	this.shape_1.setTransform(374,352.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_2.setTransform(357,353.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACAMAAAGQAAAFgDACQgCACgEAAQgIAAgBgIg");
	this.shape_3.setTransform(348.3,354.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAATgKANQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAAOAHAGQAGAHAIgBQAIAAAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_4.setTransform(338.6,354.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_5.setTransform(329.9,354.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqBIQgDgDAAgEIABg0IABgzIAAgMIAAgLQAAgEACgDQADgDADABQAEgBACACIATgDIAPgBQAJAAANADQASAEAAAGQAAAEgCADQgDADgEAAIgCgBQgMgDgRAAIgNAAIgSACIAAAmQARgEAJAAQAMAAAPACQAIAAAAAJQAAADgCAEQgDABgEAAIgOgBIgMAAQgGAAgUAEIgBA9QAAAEgCADQgCACgFAAQgEAAgCgCg");
	this.shape_6.setTransform(320.5,352.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACAMAAAGQAAAFgDACQgCACgEAAQgIAAgBgIg");
	this.shape_7.setTransform(304.6,354.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmBBQgCgDAAgEQAAgDACgDQADgDADAAIATgBIABgRIAAgOIgBgPQAAgUADgeIgMAAIgLABQgEAAgDgDQgCgCAAgEQAAgJAIAAIAbgBQAQAAAbAEQAHABAAAIQAAAEgDADQgCACgEAAIgOgBIgOgCQgCAZAAAXIAAAPIABAPIgBAPIAcAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgPAAIgPAAIgQACIgSABQgDAAgDgCg");
	this.shape_8.setTransform(294.8,352.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeA8QgNgNAAgTQAAgXANgNQAMgPATAAQAKAAAGAEIAIAFQABgkACgNQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAeADAPIAAACQAAADgCADQgDACgDAAQgFgBgDgHQgGAFgHACQgHACgGAAQgSAAgMgMgAgUABQgHAJAAARQAAAMAIAIQAIAJALgBQAGAAAFgCIAKgHIADgDIgBgQIAAgJIABgLQgEgHgFgCQgGgFgIAAQgNAAgIAIg");
	this.shape_9.setTransform(257.5,352.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACAMAAAGQAAAFgDACQgCACgEAAQgIAAgBgIg");
	this.shape_10.setTransform(247.8,354.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBAQgCgDAAgEIgBgQIAAgPIABgVIABgTQAAgEACgDQADgCADAAQADAAADACQACADAAAEIgBATIAAAVIAAAPIAAAQQAAAEgCADQgCACgDAAQgFAAgCgCgAgFgwQgDgCAAgFQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDACQgDADgFAAQgDAAgDgDg");
	this.shape_11.setTransform(240.6,352.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgDAAgDgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQABgDACgDQACgCAEAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAOAAAGAKQAEAGABAPIAAARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape_12.setTransform(232.8,352.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAJgKAHQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAIgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_13.setTransform(222.7,354.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoBEQgDgEAAgDIAAgaIABgjIACgkQgBgJACgQQABgEABgBQANgEAPAAQAPAAAOAKQAQAMAAATQAAAWgRAMQANAGAGAGQAHAIgBAIQABAKgMAKQgIAHgJADQgTAIgeAAQgEAAgDgDgAgbAjIAAASQAYAAANgHQAHgBAFgGQAGgEAAgCQAAgEgMgGQgJgEgHgCIgJgBIgDAAIgDAAIgLgBIgBAUgAgWg0IgBAQIgBAiIANABQAMgBAJgHQAIgIABgMQgBgJgIgHQgKgHgJAAIgNAAg");
	this.shape_14.setTransform(212.4,352.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAIAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_15.setTransform(308.3,329);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgsA2QgSgQAAgZQAAgdASgZQAVgbAdAAQAcAAAPANQAOANAAAdQAAAegRAYQgSAcgdAAQgaAAgRgPgAgegdQgOAUAAAWQAAARANALQALAKATAAQAUAAAOgVQAMgUAAgXQAAgVgKgIQgIgIgVAAQgVAAgPAVg");
	this.shape_16.setTransform(296.3,327.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOBLQgCgCAAgEIABgCQABgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAPgBIAJAAIABgNQACgUAIgJQAIgLAUAAQAMAAAAAIQAAAJgLAAQgVAAgDAdIgBAGIAUgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQAAAHgHAAQgEAAgDgCg");
	this.shape_17.setTransform(257.3,327.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNBLQgDgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAQgBIAIAAIABgNQACgUAIgJQAIgLATAAQANAAAAAIQAAAJgLAAQgWAAgCAdIgBAGIAUgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQgBAHgGAAQgEAAgCgCg");
	this.shape_18.setTransform(248.1,327.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgsA2QgSgQAAgZQAAgdASgZQAUgbAdAAQAeAAAOANQAOANAAAdQAAAegQAYQgUAcgdAAQgYAAgSgPgAgegdQgOAUAAAWQAAARANALQAMAKARAAQAVAAANgVQANgUAAgXQAAgVgKgIQgIgIgWAAQgUAAgPAVg");
	this.shape_19.setTransform(236.6,327.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAGAaIgEgVIgCgTIgHAQIgNAkQgBAEgDACQgCAFgHAAQgGAAgGgaQgEgOgDgWIgCgNIgBgOQAAgDADgDQADgCADAAQAHAAACAHIABANIABANIAGAmQAJgaALgjQADgKAGAAQAHAAACALIAGAgIAGAhIAHgYIALgvQACgFAFAAQAEAAADADQADACAAAEIgBAEQgHAcgLAjQgDAIgFAJQgEAEgFAAQgJAAgFgXg");
	this.shape_20.setTransform(331.3,299.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAAOAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_21.setTransform(320.2,299.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgJBAIABggIABggIAAgfIABggQgBgJAIAAQAJAAAAAJIAAAgIgBAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_22.setTransform(313.2,297.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_23.setTransform(306,299.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgoBDQgDgDAAgDIAAgaIABgjIACgkQgBgJACgQQABgEABgCQANgDAPAAQAPAAAOAKQAQANAAARQAAAXgRAMQANAFAGAIQAHAGgBAIQABALgMAKQgIAHgJAEQgTAHgeAAQgEAAgDgEgAgbAjIAAASQAXgBAOgGQAHgBAFgGQAGgEAAgDQAAgEgMgFQgJgEgHgBIgJgCIgDAAIgDAAIgLgBIgBAUgAgWg0IgBAQIgBAiIANABQAMgBAJgHQAIgJABgMQgBgIgIgHQgKgHgJAAIgNAAg");
	this.shape_24.setTransform(295.7,297.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_25.setTransform(257.8,299.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJApIgOgkIgPgnIgBgEQAAgEACgDQADgCAEAAQAFAAACAFIAXA9QAGgOAJgaIAIgUQADgGAFAAQADAAADADQADADAAADQAAADgPAjIgSAoQAAAIgHAAQgGAAgDgHg");
	this.shape_26.setTransform(248.5,299.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZAmQgMgNgBgVQAAgSAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAALQAAAOAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_27.setTransform(239.2,299.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaBCQgDAEgEAAQgEAAgBgCQgDgDAAgDIAAgHIAAgGIAAgcIgBgcIAAgXIAAgZQABgGACgEQACgFAGAAQAGAAAAAHIAAAFIAAADIAAATIgBAXQAHgFAIgDQAHgDAFAAQATAAALAOQAMAOAAATQAAAUgOAOQgNAOgRAAQgOAAgLgFgAgNgDIgNAIIAAAPIAAAOIAAAOIAMAFQAFABAIAAQALAAAIgJQAJgIAAgOQgBgNgGgJQgIgIgLAAQgHAAgHAEg");
	this.shape_28.setTransform(229.5,297.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_29.setTransform(217.2,297.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8wT8MAAAgn3MA5hAAAMAAAAn3g");
	mask.setTransform(277.8,160);

	// main
	this.instance_1 = new lib.scene3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,154.7,0.81,0.81);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '417054C21077834581DF95C47140A576',
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
an.compositions['417054C21077834581DF95C47140A576'] = {
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