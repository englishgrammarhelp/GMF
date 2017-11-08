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


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguBaQgTgTAAgdQAAgjATgVQATgUAcgBQAQABAIAEIAMAKQACg4ADgUQABgLALAAQAMAAAAAMQAAATgGA+QgBATAAAUQAAArAEAXIAAACQAAAGgDADQgEAEgFAAQgIAAgEgMQgJAHgLAEQgKADgKAAQgbAAgSgSgAgeACQgLAOAAAaQAAAQAMANQAMAMAQAAQAKAAAIgEIAOgLIAEgEIAAgXIAAgPIAAgQQgFgKgIgFQgIgFgMAAQgVAAgLAMg");
	this.shape.setTransform(94.4,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtA5QgUgQAAgeQAAgiARgWQASgaAeAAQAVAAAOAIQARAIAAAUQAAANgPALQgHAEgVAJIgxAYQAHALALAGQALAFAOAAQAJAAAMgDQAQgFAEgGQAFgIAFABQAEAAAEADQAEADAAAFQAAAPgYAKQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgTQAXgLAKgIQgLgLgUAAQgQAAgLANg");
	this.shape_1.setTransform(79.4,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBdQgDgEAAgFIAAgPIAAgPIgChMIgegCQgMgCAAgLQABgGADgEQADgEAGAAIAcADIgBgSIgBgRQAAgFAFgEQAEgDAFAAQALAAACATIAAAMIAAAHIAAAJIASgDQAOAAAEACQAIACAAAKQABAGgEAEQgEADgFAAIgHAAIgHAAIgSACIADBNIAAAGIABAGQAAAdgPAAQgEAAgEgDg");
	this.shape_2.setTransform(65.4,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeA/QgRAIgVAAQgRAAgLgHQgNgIgCgRQgFgiAAgbQAAgSAEgXQABgLAMAAQAFgBAEAEQAEAEgBAFIgBAUIgCAUQAAAWABAPQABAPAEAKIAIAEIAIABQARAAAUgGIAAgbIAAgYQAAgcACgWQABgMALABQAHgBADAEQAEADAAAGIgDAyIAAAcIAAAcIABAJIABAJQAAAFgEAEQgEADgGAAQgKAAgCgMg");
	this.shape_3.setTransform(52.1,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape_4.setTransform(37.7,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBkQgDgLgCgUQgDgTAAgMIAAgLIAAgLQAAgXgMAAQgQAAgMAOQgIAIgLAWQAAAygFAJQgDAIgIAAQgFAAgEgDQgEgEgBgFIACgGIACgTIAAgUIAAhgIABgVIgBgOQgBgFAAgHQAAgGADgDQAEgEAFAAQALAAADAMQACAMAAALIgBAdQgBAOAAAPIAAAMQALgPAMgIQAMgGANAAQAWAAAIANQAGAKABAXIABAaIADAbIAEAbIAAAEQAAAGgDADQgEAEgGAAQgJgBgDgJg");
	this.shape_5.setTransform(23.2,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape_6.setTransform(8.3,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(204,204,204,0.098)").s().p("AoECPIAAkdIQKAAIAAEdg");
	this.shape_7.setTransform(53.8,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,105.6,41.6), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape.setTransform(52.5,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBnQgFgEAAgFQAAgNAdg/IgvhaIgGgKQgEgGAAgEQAAgFAEgFQAFgEAFAAQAGAAADAFQAWAfAZA6IAUguQAKgXAKgRQAEgIAHAAQAFAAAFAEQAEAEAAAFIgCAHIguBhQgQAkgIAZIgJAZQgEAKgIAAQgGAAgDgEg");
	this.shape_1.setTransform(38.9,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape_2.setTransform(24.9,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoBjQgEAGgGAAQgFAAgDgEQgEgDAAgGIABgKIAAgKIgBgqIgBgoIABgkIAAglQAAgIADgHQAEgHAIgBQAKAAAAAMIgBAFIAAAGIgBAdIAAAhQALgHALgFQAKgDAIAAQAcAAASAVQARAUAAAeQAAAdgUAWQgTAUgcABQgUAAgRgIgAgUgGQgGAEgNAJIAAAWIAAAVIAAAVIASAIQAIADAKgBQASAAANgNQAMgOAAgTQAAgUgKgOQgLgMgSAAQgKAAgLAFg");
	this.shape_3.setTransform(10.4,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(204,204,204,0.098)").s().p("AkyCkIAAlHIJlAAIAAFHg");
	this.shape_4.setTransform(30.9,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,61.6,41.6), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtA5QgUgQAAgeQAAgiARgWQASgaAeAAQAVAAAOAIQARAIAAAUQAAANgPALQgHAEgVAJIgxAYQAHALALAGQALAFAOAAQAJAAAMgDQAQgFAEgGQAFgIAFABQAEAAAEADQAEADAAAFQAAAPgYAKQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgTQAXgLAKgIQgLgLgUAAQgQAAgLANg");
	this.shape.setTransform(57.5,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBfIACgvIABgwIABgvIAAgwQAAgNAMAAQANAAAAANIAAAwIgBAvIgCBBIgBAfQgCANgKAAQgNAAAAgOg");
	this.shape_1.setTransform(46.2,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBdQgDgEAAgFIAAgPIAAgPIgDhMIgdgCQgMgCABgLQAAgGADgEQADgEAGAAIAcADIgBgSIgBgRQAAgFAFgEQAEgDAFAAQALAAACATIAAAMIAAAHIAAAJIASgDQAOAAAEACQAJACgBAKQABAGgEAEQgEADgFAAIgHAAIgHAAIgSACIADBNIAAAGIABAGQAAAdgPAAQgEAAgEgDg");
	this.shape_2.setTransform(36.1,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIBdQgDgEAAgFIAAgPIAAgPIgDhMIgdgCQgMgCABgLQgBgGAEgEQADgEAGAAIAcADIgBgSIgBgRQAAgFAFgEQAEgDAFAAQALAAACATIAAAMIAAAHIAAAJIASgDQAOAAAEACQAJACgBAKQAAAGgDAEQgEADgFAAIgHAAIgHAAIgSACIADBNIAAAGIABAGQAAAdgPAAQgEAAgEgDg");
	this.shape_3.setTransform(23.4,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBfQgEgDAAgGIAAgXIgBgZIACgeIABgeQAAgGAEgEQADgEAGABQAFgBADAEQAEAEAAAGIgBAeIgCAeIABAZIAAAXQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgEAAgGQAAgHAEgFQAFgEAFAAQAHAAAEAEQAFAFAAAHQAAAGgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_4.setTransform(13.5,21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOBfIABgvIACgwIABgvIAAgwQAAgNAMAAQANAAAAANIAAAwIgBAvIgCBBIgBAfQgBANgLAAQgNAAAAgOg");
	this.shape_5.setTransform(5.8,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(204,204,204,0.098)").s().p("AlACUIAAknIKBAAIAAEng");
	this.shape_6.setTransform(34,21.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,66.8,41.6), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtA5QgUgQAAgeQAAgiARgWQASgaAeAAQAVAAAOAIQARAIAAAUQAAANgPALQgHAEgVAJIgxAYQAHALALAGQALAFAOAAQAJAAAMgDQAQgFAEgGQAFgIAFABQAEAAAEADQAEADAAAFQAAAPgYAKQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgTQAXgLAKgIQgLgLgUAAQgQAAgLANg");
	this.shape.setTransform(43.7,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBkQgDgLgDgUQgCgTAAgMIAAgLIAAgLQABgXgMAAQgRAAgMAOQgIAIgLAWQAAAygEAJQgEAIgIAAQgFAAgEgDQgFgEAAgFIACgGIACgTIAAgUIAAhgIABgVIgBgOQgCgFAAgHQABgGAEgDQADgEAGAAQALAAABAMQACAMABALIgCAdQgBAOABAPIAAAMQALgPAMgIQALgGAPAAQAVAAAIANQAGAKABAXIABAaIACAbIAFAbIABAEQAAAGgFADQgEAEgFAAQgJgBgDgJg");
	this.shape_1.setTransform(28.4,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJBhQgEgEAAgGIABgGIAAgGIAAgTIgBgUQAAgSgDgiQgEglAAgQIgMABQgdAAgQgFQgLgCAAgLQAAgFADgEQAEgFAHABIAVACIAVABIAYAAIAXAAIAeABIAeACQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAIgegCIgegBIgJAAIADA7QADAlAAAVIABAOIABAOQAAAJgDAHQgDAIgIAAQgFAAgEgDg");
	this.shape_2.setTransform(12.4,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.098)").s().p("AkACSIAAkjIICAAIAAEjg");
	this.shape_3.setTransform(27.2,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,53,41.6), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(104,11,244,0.392)").s().p("AgYAfQgMgIAAgRQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbANQAEAHAGACQAGAEAIAAQAEAAAIgCQAIgDACgDQADgEADgBQACABACACQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape.setTransform(21.2,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(104,11,244,0.392)").s().p("AgHA1IABgbIABgaIAAgZIAAgbQAAgHAHAAQAGAAAAAHIAAAbIAAAZIgCAlIAAAQQgBAIgFgBQgIAAABgHg");
	this.shape_1.setTransform(14.9,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(104,11,244,0.392)").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_2.setTransform(9.3,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(104,11,244,0.392)").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_3.setTransform(2.2,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(104,11,244,0.392)").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_4.setTransform(-3.3,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(104,11,244,0.392)").s().p("AgHA1IABgbIABgaIAAgZIAAgbQAAgHAHAAQAGAAABAHIgBAbIAAAZIgCAlIAAAQQgBAIgFgBQgIAAABgHg");
	this.shape_5.setTransform(-7.5,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-11.6,7.5,38.9,24.9), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(104,11,244,0.392)").s().p("AgZAgQgLgKABgQQgBgSAKgNQAKgOAQAAQAMAAAHAEQAKAFgBALQABAHgJAGIgPAHIgbAOQAEAFAGAEQAHACAGAAQAFABAHgCQAJgDADgEQACgDACAAQADAAADACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABAIgOAGQgLAFgLAAQgPAAgLgIgAgPgTQgGAHgDANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape.setTransform(25.2,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(104,11,244,0.392)").s().p("AAUA3IgDgRIgBgRIAAgGIAAgFQAAgOgHAAQgJAAgHAIIgKAQQAAAcgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAAQIAAARIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_1.setTransform(16.7,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(104,11,244,0.392)").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_2.setTransform(7.8,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,31.3,24.9), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.392)").s().p("AgZAyQgKgLAAgQQAAgUAKgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAABAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFABgDgHQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAIAAAOQABAKAGAGQAHAHAJAAQAFAAAFgCIAIgHIACgBIAAgOIAAgIIAAgJQgDgFgFgDQgFgDgGAAQgLABgGAGg");
	this.shape.setTransform(53.3,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.392)").s().p("AgYAgQgMgKAAgQQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbAOQAEAFAGAEQAGACAIAAQAEABAHgCQAJgDACgEQADgDADAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_1.setTransform(45,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,0,0.392)").s().p("AgEA0QgCgCAAgDIAAgJIAAgHIgBgqIgQgBQgHgBAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgDACgDQACgCADAAQAGABABAKIAAAHIAAAEIAAAFIAKgBIAKAAQAFACAAAFQAAAEgCABQgCADgEAAIgDAAIgEAAIgKABIACAqIAAADIAAADQAAARgIgBQgCABgCgCg");
	this.shape_2.setTransform(37.2,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.392)").s().p("AAQAjQgJAEgLAAQgJABgHgEQgHgFgBgJQgDgTAAgPQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgQABgMQABgGAGAAQADAAADABQACADAAADIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_3.setTransform(29.8,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,0,0.392)").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_4.setTransform(21.8,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,0,0.392)").s().p("AAUA3IgDgRIgBgRIAAgGIAAgFQAAgOgHAAQgJAAgHAIIgKAQQAAAcgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAAQIAAARIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_5.setTransform(13.8,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,0,0,0.392)").s().p("AgUAoQgLgDAAgIQAAgDACgCQACgCAEAAQACAAAEAEQABABAGABIAIABQAFAAAGgBQAGgCAAgFQAAgKgNgDIgHgDQgKgBgEgDQgGgDAAgJQAAgPAOgHIAOgEIANgFIAHgBQADAAACACQACACAAAEIABAFIABAGQAAAEgCACQgCACgEAAQgEAAgBgCIgCgIIgRAEQgLAGAAAGIAFACQAPACAJAGQALAGABAPQAAAMgKAGQgKAFgMAAQgJAAgJgEg");
	this.shape_6.setTransform(5.5,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,59.9,24.9), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(7,77,180,0.392)").s().p("AgUAoQgLgDAAgIQAAgDACgCQACgCAEAAQACAAADAEQACABAGABIAIABQAGAAAEgBQAHgCAAgFQAAgKgNgDIgHgDQgKgBgEgDQgGgDAAgJQAAgPAOgHIAOgEIANgFIAHgBQADAAACACQACACAAAEIABAFIABAGQAAAEgCACQgCACgEAAQgDAAgCgCIgCgIIgRAEQgLAGAAAGIAFACQAQACAHAGQANAGAAAPQgBAMgJAGQgKAFgMAAQgJAAgJgEg");
	this.shape.setTransform(30.1,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(7,77,180,0.392)").s().p("AgTA5QgCgCAAgDQAAgHAQgjIgagyIgEgFQgCgDAAgDQAAgDADgCQACgCADAAQADAAACACQANASANAgIALgaIALgWQACgEAEAAQADAAACACQADACAAADIgBADIgaA2IgNAiIgFAOQgCAFgEAAQgDAAgDgCg");
	this.shape_1.setTransform(22.5,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(7,77,180,0.392)").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_2.setTransform(14.7,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(7,77,180,0.392)").s().p("AgVA3QgDADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIgBgWIABgUIAAgVQAAgEACgEQACgEAEAAQAGAAAAAGIAAADIgBADIAAAQIAAATQAGgEAGgCQAFgDAEAAQARAAAJAMQAJALAAAQQAAARgLAMQgKALgPAAQgLAAgJgEgAgLgCIgKAGIAAAMIAAAMIAAAMIAKAEIAKABQAJAAAHgHQAHgIAAgLQAAgLgGgHQgFgHgLAAQgEAAgHAEg");
	this.shape_3.setTransform(6.7,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,36.1,24.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AiYjXIExAAIAAGvIkxAAg");
	this.shape.setTransform(15.3,21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,32.5,45.3), null);


(lib.Target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AH+D6Iv7AAIAAnzIP7AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Target, new cjs.Rectangle(-52,-26,104,52), null);


(lib.QuizB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.733)","rgba(255,255,255,0.271)"],[0,1],-256,0,256,0).s().p("Egn/AC5IAAlxMBP/AAAIAAFxg");
	this.shape.setTransform(0.1,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EAoTgYDIAAfuMhQgAAAIAA/ugEAoTAYEMhQlAAAIAAvHMBQlAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#33FFFF"],[0,1],-324.9,0,325,0).s().p("EgoSAHkIAAvHMBQlAAAIAAPHg");
	this.shape_2.setTransform(0,105.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#FF3366"],[0,1],0,148.9,0,-148.8).s().p("EgoQAP4IAA/vMBQhAAAIAAfvg");
	this.shape_3.setTransform(0.3,-52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.3,-155.5,518.8,311.1);


(lib.Directions1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgFBEQgDgEAAgDQAAgDACgDQADgCADAAQACAAAEAEQADAFAAADQAAADgCADQgDACgDAAQgCABgEgGgAgFAgIAAgLIgBgLIABgkIAAgmQAAgIAHAAQAHAAAAAIIAABgQAAAIgHAAQgHAAAAgIg");
	this.shape.setTransform(201.4,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_1.setTransform(192.6,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AAcAtIgGgHIgPAHIgJACQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAKIAAATQAAALABAGIAGAQIACAEIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_2.setTransform(180.9,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_3.setTransform(172.2,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgeBEQgLgCAAgHQAAgIAIAAIAKACQAHABAJAAQARAAAGgQQAEgLAAgWQgEAJgHAEQgHAEgHAAQgQAAgKgKQgJgLgBgRQAAgXAOgPQAOgPAXAAQAJAAAFACQAFACADAFQAKAAAAAKIgCARIgCAQIgCAdQgBARgDAMQgEAOgJAHQgKAIgTAAQgMAAgIgCgAgQgrQgIAKAAAQQABANAEAFQAFAHAJAAQAJAAAIgJQAHgJABgKIAFgdQgEgDgEgBQgEgCgDAAQgQAAgKAMg");
	this.shape_4.setTransform(162.8,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AAcAtIgGgHIgPAHIgJACQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAKIAAATQAAALABAGIAGAQIACAEIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_5.setTransform(153.5,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgHA/QgDgCAAgEIAAgPIgBgQIABgVIABgUQAAgEADgCQACgDAEAAQADAAACADQACACAAAEIAAAUIgCAVIABAQIAAAPQAAAEgDACQgBADgDAAQgFAAgBgDgAgFgwQgDgCAAgFQAAgEADgDQAEgDACAAQAEAAAEADQADADAAAEQAAAFgDACQgEADgEAAQgCAAgEgDg");
	this.shape_6.setTransform(146.6,-1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgeA8QgNgMAAgUQAAgYANgNQAMgNATAAQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAeADAPIAAABQAAAEgCADQgDABgDAAQgFABgDgJQgGAGgHACQgHACgGAAQgSAAgMgMgAgUABQgHAJAAARQAAAMAIAJQAIAHALAAQAGAAAFgDIAKgHIADgCIgBgQIAAgKIABgKQgEgHgFgCQgGgEgIgBQgNABgIAHg");
	this.shape_7.setTransform(138.5,-1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAHQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgFQADgEADAAQADgBADADQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_8.setTransform(123.2,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_9.setTransform(113,-1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgEA+QgDgCAAgEIAAgKIABgKIgDgyIgTgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgCADgEAAIgFAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_10.setTransform(103.4,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAHIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgHIABgZIACgZIgBgIIAAgJQAAgDADgDQACgCAEAAQAIAAABALIAAALQAPgUAOAAQAOAAAGANQAEAHAAARIAAAIIAAAIIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_11.setTransform(89.3,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAATgKAOQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAIQAGAFAIAAQAIABAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_12.setTransform(79.6,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAHQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgFQADgEADAAQADgBADADQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_13.setTransform(64.9,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgYAmQgNgLAAgSQAAgRAMgTQAOgWAPAAQAIABALAEQAOAFAAAHQAAAEgCACQgDADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgEgDQgGgEgLAAQgIAAgJAQQgIAPAAAKQAAALAIAHQAHAGALAAQAFAAAGgDIALgFIADgBQADAAADACQACADAAADQAAAGgNAHQgMAEgIAAQgRAAgMgLg");
	this.shape_14.setTransform(55.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AAcAtIgGgHIgPAHIgJACQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAKIAAATQAAALABAGIAGAQIACAEIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_15.setTransform(46,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgJBAIABggIABggIAAgfIABggQAAgJAHAAQAJAAAAAJIAAAgIgBAfIgBArIgBAVQgBAJgGAAQgJAAAAgJg");
	this.shape_16.setTransform(38.9,-1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgKgDIAAAqQAAAEgDACQgDADgDAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_17.setTransform(31.7,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAATgKAOQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAIQAGAFAIAAQAIABAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_18.setTransform(16.6,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgCADgFAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_19.setTransform(7.7,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("AAVArIgCgUIgBgTIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAHIABAIQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgIIgBgHIABgZIACgZIgBgIIAAgJQAAgDADgDQACgCAEAAQAIAAABALIAAALQAPgUAOAAQAOAAAGANQAEAHAAARIAAAIIAAAIIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_20.setTransform(-1,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AgHA/QgDgCAAgEIAAgPIgBgQIABgVIABgUQAAgEACgCQADgDAEAAQADAAACADQACACAAAEIAAAUIgCAVIABAQIAAAPQAAAEgDACQgCADgCAAQgFAAgBgDgAgFgwQgDgCAAgFQAAgEADgDQAEgDACAAQAEAAAEADQADADAAAEQAAAFgDACQgEADgEAAQgCAAgEgDg");
	this.shape_21.setTransform(-8.2,-1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAEQACADAHABIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgGQADgBAFAAQADAAADACQACADAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFACQAUADAJAHQAPAIAAARQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_22.setTransform(-21,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AgeA8QgNgMAAgUQAAgYANgNQAMgNATAAQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAeADAPIAAABQAAAEgCADQgDABgDAAQgFABgDgJQgGAGgHACQgHACgGAAQgSAAgMgMgAgUABQgHAJAAARQAAAMAIAJQAIAHALAAQAGAAAFgDIAKgHIADgCIgBgQIAAgKIABgKQgEgHgFgCQgGgEgIgBQgNABgIAHg");
	this.shape_23.setTransform(-30.4,-1.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_24.setTransform(-39.7,0.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAATgKAOQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAIQAGAFAIAAQAIABAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_25.setTransform(-49.1,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AAGAaIgEgVIgCgTIgHAQIgNAkQgBAEgDACQgCAFgHAAQgGAAgGgaQgEgOgDgWIgCgNIgBgOQAAgDADgDQADgCADAAQAHAAACAHIABANIABANIAGAmQAJgaALgjQADgKAGAAQAHAAACALIAGAgIAGAhIAHgYIALgvQACgFAFAAQAFAAACADQADACAAAEIgBAEQgHAcgLAjQgDAIgFAJQgDAEgGAAQgJAAgFgXg");
	this.shape_26.setTransform(-59.8,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAJgKAHQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgFQADgEADAAQADgBADADQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_27.setTransform(-76.1,0.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgDAAgDgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQABgDACgDQACgCAEAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAOAAAGAKQAEAGABAPIAAARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape_28.setTransform(-86.3,-1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_29.setTransform(-95.9,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("AgeBEQgLgCAAgHQAAgIAHAAIALACQAHABAJAAQARAAAGgQQAEgLAAgWQgEAJgHAEQgHAEgHAAQgQAAgKgKQgJgLgBgRQAAgXAOgPQAOgPAXAAQAJAAAFACQAFACADAFQAKAAAAAKIgCARIgDAQIgBAdQgBARgDAMQgEAOgJAHQgKAIgTAAQgMAAgIgCgAgQgrQgIAKAAAQQABANAEAFQAFAHAJAAQAJAAAIgJQAHgJABgKIAFgdQgEgDgEgBQgEgCgDAAQgQAAgKAMg");
	this.shape_30.setTransform(-110.4,3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("AAcAtIgGgHIgPAHIgJACQgVAAgJgLQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCAKIAAATQAAALABAGIAGAQIACAEIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgDIgEAAQgMAAgKALg");
	this.shape_31.setTransform(-119.6,1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0000FF").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_32.setTransform(-128.3,0.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("AgaBHQgKgCgGgEIgBAAQgDAAgDgDQgCgCgBgEIABgcIABgcIAAgdIgBgfQABgEADgEQAEgEADAAQADAAALAGIAQAIQAYAIASASQAVAVAAAYQAAAPgIANQgHAOgMAJQgOAJgYAAQgHAAgHgCgAghgXIABAYIgCAwIACABQAIAFAMAAQATAAAJgGQAJgGAEgJQAGgKAAgLQAAgYgbgRQgJgGgggPg");
	this.shape_33.setTransform(-139.1,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.9,-16.6,397.5,29.1);


(lib.Blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Blank, null, null);


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


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


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
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmTest',{loop:-1});
		
		
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-114,-13,161.8,30.1), null);


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


// stage content:
(lib.diag_quiz3b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.item1.addEventListener("pressmove", click1.bind(this));
		this.item2.addEventListener("pressmove", click2.bind(this));
		this.item3.addEventListener("pressmove", click3.bind(this));
		this.item4.addEventListener("pressmove", click4.bind(this));
		
		//nav buttons --------------------------------------------
		
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		this.btn_goNext.mouseEnabled = false;
		
		
		var _1stHit = false;
		var _2ndHit = false;
		var _3rdHit = false;
		var _4thHit = false;
		
		//Drag n Drop
		var hit = false;
		function checkCollision(obj_1,obj_2) {
		
		    obj1x = obj_1.x;
		    obj1y = obj_1.y;
		    obj1w = obj_1.nominalBounds.width;
		    obj1h = obj_1.nominalBounds.height;
		
		    obj2x = obj_2.x;
		    obj2y = obj_2.y;
		    obj2w = obj_2.nominalBounds.width;
		    obj2h = obj_2.nominalBounds.height;
		
		    if (    obj1x >= obj2x + obj2w
		        ||  obj1x + obj1w <= obj2x
		        ||  obj1y >= obj2y + obj2h
		        ||  obj1y + obj1h <= obj2y) {
				console.log(hit);
				hit = false;
					
		    } 
			else {
				
				hit = true;
				obj_1.x = obj_2.x;
				obj_1.y = obj_2.y;
				console.log(hit);
				
		    }
		}
		
		function click1(evt)
		{
			checkCollision(evt.currentTarget,this.target1);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_1stHit = true;
				console.log("1st hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct1.visible = true;
			}
			
			if (_1stHit & _2ndHit & _3rdHit & _4thHit )
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
			}
		
		}
		
		function click2(evt)
		{
			checkCollision(evt.currentTarget,this.target2);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_2ndHit = true;
				console.log("2nd hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct2.visible = true;
			}
		
			if (_1stHit & _2ndHit & _3rdHit & _4thHit )
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
			}
		
			
		}
		
		function click3(evt)
		{
			checkCollision(evt.currentTarget,this.target3);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_3rdHit = true;
				console.log("3rd hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct3.visible = true;
			}
			
			if (_1stHit & _2ndHit & _3rdHit & _4thHit )
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
			}
		
			
		}
		
		function click4(evt)
		{
			checkCollision(evt.currentTarget,this.target4);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				_4thHit = true;
				console.log("4th hit");
				evt.currentTarget.mouseEnabled = false;
				evt.currentTarget.visible = false;
				this.correct4.visible = true;
			}
			
			if (_1stHit & _2ndHit & _3rdHit & _4thHit )
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
			}
		
			
		}
		
		
		
		//volume setting -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume *0.5;
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.5;
		}
		
		//page navigation ----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("diag_finish.html","_self");
		}
		
		
		function openPrev(){
		
		 window.open ("diag_quiz3.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// main
	this.correct4 = new lib.Symbol8();
	this.correct4.parent = this;
	this.correct4.setTransform(225.5,195.6,1,1,45,0,0,16.9,12.5);
	this.correct4.visible = false;

	this.correct2 = new lib.Symbol7();
	this.correct2.parent = this;
	this.correct2.setTransform(177.1,195.6,1,1,45,0,0,16.9,12.5);
	this.correct2.visible = false;

	this.correct3 = new lib.Symbol6();
	this.correct3.parent = this;
	this.correct3.setTransform(296.1,150.9,1,1,0,0,0,19.1,12.5);
	this.correct3.visible = false;

	this.correct1 = new lib.Symbol5();
	this.correct1.parent = this;
	this.correct1.setTransform(184.6,150.9,1,1,0,0,0,30.1,12.5);
	this.correct1.visible = false;

	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(494,352.3);
	this.btn_goNext.visible = false;
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance},{t:this.correct1},{t:this.correct3},{t:this.correct2},{t:this.correct4}]}).wait(1));

	// items
	this.item3 = new lib.Symbol12();
	this.item3.parent = this;
	this.item3.setTransform(369.7,300.6,1,1,0,0,0,52.3,20.8);

	this.item1 = new lib.Symbol11();
	this.item1.parent = this;
	this.item1.setTransform(282.8,300.6,1,1,0,0,0,30.8,20.8);

	this.item4 = new lib.Symbol10();
	this.item4.parent = this;
	this.item4.setTransform(214.8,300.6,1,1,0,0,0,33.4,20.8);

	this.item2 = new lib.Symbol9();
	this.item2.parent = this;
	this.item2.setTransform(151,300.6,1,1,0,0,0,26.4,20.8);

	this.target4 = new lib.Symbol3();
	this.target4.parent = this;
	this.target4.setTransform(203.8,193.9,1,1,0,0,0,15.3,21.6);
	this.target4.visible = false;

	this.target2 = new lib.Symbol3();
	this.target2.parent = this;
	this.target2.setTransform(157.3,194.4,1,1,0,0,0,15.3,21.6);
	this.target2.visible = false;

	this.target3 = new lib.Target();
	this.target3.parent = this;
	this.target3.setTransform(296.6,140.6,0.48,0.346,0,0,0,0.5,-0.6);
	this.target3.visible = false;

	this.backgrnd = new lib.Blank();
	this.backgrnd.parent = this;
	this.backgrnd.setTransform(64.9,286.9,0.752,0.752);

	this.target1 = new lib.Target();
	this.target1.parent = this;
	this.target1.setTransform(174.2,142.5,0.461,0.332,0,0,0,0.8,-0.5);
	this.target1.visible = false;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AANhTIAAEMAANmUIAAFBIUAAAArNhTILaAAA0MhTIB7AAIHEAAIHqHoAyRhTIHpHo");
	this.shape.setTransform(239.2,175.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.target1},{t:this.backgrnd},{t:this.target3},{t:this.target2},{t:this.target4},{t:this.item2},{t:this.item4},{t:this.item1},{t:this.item3}]}).wait(1));

	// Highlight
	this.text = new cjs.Text("", "15px 'ComicSansMS'", "#0099FF");
	this.text.lineHeight = 23;
	this.text.alpha = 0.00000000;
	this.text.parent = this;
	this.text.setTransform(222.1,210.9);

	this.instance_1 = new lib.Directions1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.1,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text}]}).wait(1));

	// Directions
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_1.setTransform(416.6,76.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguBaQgTgSAAgeQAAgjATgVQATgUAcAAQAQgBAIAFIAMAJQACg3ADgUQABgLALAAQAMAAAAAMQAAATgGA+QgBATAAATQAAAtAEAWIAAACQAAAGgDADQgEAEgFAAQgIAAgEgMQgJAHgLADQgKAEgKAAQgbAAgSgSgAgeACQgLANAAAaQAAASAMAMQAMAMAQAAQAKAAAIgEIAOgLIAEgEIAAgXIAAgPIAAgPQgFgLgIgFQgIgFgMAAQgVAAgLAMg");
	this.shape_2.setTransform(405.1,66.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgtA5QgUgQAAgeQAAgiARgWQASgaAeAAQAVAAAOAIQARAIAAAUQAAANgPAKQgHAGgVAJIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFAAQAEgBAEAEQAEAEAAAEQAAAPgYAKQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgIQgLgLgUAAQgQAAgLANg");
	this.shape_3.setTransform(390.1,70.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBdQgEgEABgFIAAgPIAAgPIgChMIgdgCQgMgCgBgLQABgGADgEQADgEAGAAIAcADIAAgSIgBgRQAAgFAEgEQADgDAGAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACABAKQAAAGgEAEQgEADgGAAIgGAAIgGAAIgSACIACBNIAAAGIAAAGQABAdgPAAQgEAAgEgDg");
	this.shape_4.setTransform(376.1,68.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAeA/QgRAJgUAAQgSAAgLgIQgMgJgDgQQgFgiAAgbQAAgSAEgXQABgMALAAQAGAAAEAEQAEAEAAAGIgCATIgCAUQAAAWABAPQACAPADAKIAIAEIAJABQAQAAAUgGIAAgbIAAgYQgBgdADgUQACgMAKAAQAHAAADADQAEAEAAAFIgCAyIAAAcIAAAcIAAAJIABAJQgBAFgDAEQgEAEgGgBQgJAAgDgMg");
	this.shape_5.setTransform(362.8,70.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape_6.setTransform(348.4,70.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAkBjQgDgKgCgUQgDgTAAgNIABgKIAAgLQAAgXgNAAQgQAAgNAOQgHAIgLAWQAAAygFAJQgDAJgIAAQgFAAgFgFQgDgDAAgGIABgFIABgTIAAgUIABhfIABgXIgBgMQgCgHABgGQAAgFADgEQAEgDAFgBQAMAAACAMQABANABAKIgBAdQgCAOABAOIAAANQALgPAMgIQALgGAOgBQAWAAAJAOQAFALABAXIABAZIADAbIAEAbIAAAEQAAAFgDAEQgEADgGAAQgJAAgDgKg");
	this.shape_7.setTransform(333.9,66.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape_8.setTransform(319,69.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape_9.setTransform(297.8,69.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiBnQgFgEAAgFQAAgNAdg/IgvhaIgGgKQgEgGAAgEQAAgFAEgFQAFgEAFAAQAGAAADAFQAWAfAZA6IAUguQAKgXAKgRQAEgIAHAAQAFAAAFAEQAEAEAAAFIgCAHIguBhQgQAkgIAZIgJAZQgEAKgIAAQgGAAgDgEg");
	this.shape_10.setTransform(284.2,74);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape_11.setTransform(270.2,70.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoBjQgEAGgGAAQgFAAgDgEQgEgDAAgGIABgJIAAgKIgBgrIgBgoIABgkIAAgmQAAgIADgFQAEgJAIAAQAKAAAAAMIgBAFIAAAFIgBAeIAAAhQALgIALgEQAKgDAIAAQAcgBASAWQARAUAAAeQAAAegUAUQgTAWgcAAQgUgBgRgHgAgUgGQgGADgNAKIAAAWIAAAVIAAAWIASAHQAIACAKABQASAAANgOQAMgOAAgTQAAgUgKgOQgLgNgSAAQgKABgLAFg");
	this.shape_12.setTransform(255.6,66.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgtA5QgUgQAAgeQAAgiARgWQASgaAeAAQAVAAAOAIQARAIAAAUQAAANgPAKQgHAGgVAJIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFAAQAEgBAEAEQAEAEAAAEQAAAPgYAKQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgIQgLgLgUAAQgQAAgLANg");
	this.shape_13.setTransform(232.1,70.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOBfIABgvIACgwIABgvIAAgwQAAgNAMAAQANAAAAANIgBAwIAAAvIgCBBIgBAfQgCANgKAAQgNAAAAgOg");
	this.shape_14.setTransform(220.8,66.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBdQgFgEAAgFIABgPIAAgPIgChMIgdgCQgNgCAAgLQAAgGAEgEQAEgEAFAAIAcADIAAgSIgBgRQAAgFADgEQAFgDAFAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACABAKQgBAGgDAEQgEADgGAAIgGAAIgGAAIgSACIACBNIAAAGIAAAGQABAdgOAAQgFAAgDgDg");
	this.shape_15.setTransform(210.7,68.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBdQgFgEAAgFIABgPIAAgPIgChMIgdgCQgNgCAAgLQAAgGAEgEQADgEAGAAIAcADIAAgSIgBgRQAAgFADgEQAEgDAGAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACABAKQAAAGgEAEQgEADgGAAIgGAAIgGAAIgSACIACBNIAAAGIAAAGQABAdgOAAQgFAAgDgDg");
	this.shape_16.setTransform(198,68.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMBfQgEgDAAgGIAAgXIgBgYIACgfIABgeQAAgGAEgEQADgDAGAAQAFAAADADQAEAEAAAGIgBAeIgCAfIABAYIAAAXQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgEAAgHQAAgGAEgFQAFgEAFAAQAHAAAEAEQAFAFAAAGQAAAHgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_17.setTransform(188.2,67.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOBfIABgvIACgwIAAgvIABgwQAAgNAMAAQANAAAAANIgBAwIAAAvIgCBBIgBAfQgBANgLAAQgNAAAAgOg");
	this.shape_18.setTransform(180.5,66.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgtA5QgUgQAAgeQAAgiARgWQASgaAeAAQAVAAAOAIQARAIAAAUQAAANgPAKQgHAGgVAJIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFAAQAEgBAEAEQAEAEAAAEQAAAPgYAKQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgIQgLgLgUAAQgQAAgLANg");
	this.shape_19.setTransform(161.5,70.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkBjQgDgKgCgUQgDgTAAgNIABgKIAAgLQAAgXgNAAQgQAAgNAOQgHAIgLAWQAAAygFAJQgDAJgIAAQgFAAgFgFQgDgDAAgGIABgFIABgTIAAgUIABhfIABgXIgBgMQgCgHABgGQAAgFADgEQAEgDAFgBQAMAAACAMQABANAAAKIAAAdQgCAOABAOIAAANQALgPAMgIQALgGAOgBQAWAAAJAOQAFALABAXIABAZIADAbIAEAbIAAAEQAAAFgDAEQgEADgGAAQgJAAgDgKg");
	this.shape_20.setTransform(146.3,66.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJBhQgEgEAAgGIABgGIAAgGIAAgTIgBgUQAAgSgDgiQgEglAAgQIgMABQgdAAgQgFQgLgCAAgLQAAgFADgEQAEgFAHABIAVACIAVABIAYAAIAXAAIAeABIAeACQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAIgegCIgegBIgJAAIADA7QADAlAAAVIABAOIABAOQAAAJgDAHQgDAIgIAAQgFAAgEgDg");
	this.shape_21.setTransform(130.3,67.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Highlight
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

	// background
	this.instance_2 = new lib.QuizB("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(273.2,192.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,199,552,403.9);
// library properties:
lib.properties = {
	id: '342241A998D81B4D981723664FCAE4AA',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/bgmTest.mp3", id:"bgmTest"},
		{src:"sounds/right_answer.mp3", id:"right_answer"}
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
an.compositions['342241A998D81B4D981723664FCAE4AA'] = {
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