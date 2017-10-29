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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape.setTransform(140.7,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsBXQgSgSAAgcQAAgiASgUQASgUAbAAQAPAAAIAEIAMAJQACg1ACgTQACgLAKAAQALAAAAAMQAAASgFA8QgBASAAASQAAArAEAVIAAADQAAAFgEAEQgDADgFAAQgIAAgDgLQgKAGgJAEQgKADgKAAQgaAAgRgRgAgdACQgLANAAAZQAAAQAMAMQAMAMAPAAQAKAAAHgEIAOgKIAEgEIAAgWIAAgPIAAgPQgFgKgIgEQgIgGgLAAQgUAAgLAMg");
	this.shape_1.setTransform(129.7,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglA1QgRgRgBgdQgBgcAPgWQASgaAfAAQAZAAANAXQALATgBAbQAAAbgOAUQgRAXgZAAQgWgBgPgQgAgWgZQgIAOAAASQAAASAKAKQAIAJAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_2.setTransform(115.1,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglA1QgRgRgBgdQgBgcAPgWQASgaAfAAQAZAAANAXQALATgBAbQAAAbgOAUQgRAXgZAAQgWgBgPgQgAgWgZQgIAOAAASQAAASAKAKQAIAJAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_3.setTransform(101.4,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCQgGgBgFAAQgXAAgOAQg");
	this.shape_4.setTransform(87.7,27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiBHQgVgHAAgNQAAgFAFgEQAEgEAFAAQAEAAAGAGQADADAKACIAPACQAJAAAJgDQAMgDgBgIQABgSgYgGIgNgDQgRgDgGgFQgLgHAAgOQAAgaAZgMQAHgDAQgFIAZgIQAEgCAHAAQAFAAAEADQADAEAAAGIACAKIACALQAAAGgEADQgDAEgGAAQgHAAgDgFQgCgDgBgKIgdAIQgUAJAAAMIAHACQAcAFAPAJQAVAMgBAaQABAUgTALQgPAIgVAAQgRAAgOgFg");
	this.shape_5.setTransform(66.6,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIABgeIACgcQAAgGAEgEQADgDAFAAQAFAAADADQAEAEgBAGIgBAcIgBAeIAAAXIABAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgFgFABgGQgBgGAFgEQAFgEAEAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgEAAgFgEg");
	this.shape_6.setTransform(57.2,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAdgQAUQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_7.setTransform(35,24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIABA+QgBAIgFAFQgEAEgIAAQgIAAgFgFg");
	this.shape_8.setTransform(22.4,24.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("Ag5BgQgEgEAAgHIAAgjQAAgUACgmQADgngBgTQABghASABIAMgCIATAAQAXAAAXAQQAYASgBAaQAAAggZATQgXAQgeAAIgLAAIgBA6QAAAHgEAEQgGAFgHAAQgHAAgFgFgAgXgxIgCAsIAJABQASAAANgKQAOgKABgQQAAgLgOgIQgMgIgOAAIgIAAIgEAAIgBASg");
	this.shape_9.setTransform(9,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146,40.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape.setTransform(135.2,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsBXQgSgSAAgcQAAgiASgUQASgUAbAAQAPAAAIAEIAMAJQACg1ACgTQACgLAKAAQALAAAAAMQAAASgFA8QgBASAAASQAAArAEAVIAAADQAAAFgEAEQgDADgFAAQgIAAgDgLQgKAGgJAEQgKADgKAAQgaAAgRgRgAgdACQgLANAAAZQAAAQAMAMQAMAMAPAAQAKAAAHgEIAOgKIAEgEIAAgWIAAgPIAAgPQgFgKgIgEQgIgGgLAAQgUAAgLAMg");
	this.shape_1.setTransform(124.2,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglA1QgRgRgBgdQgBgcAPgWQASgaAfAAQAZAAANAXQALATgBAbQAAAbgOAUQgRAXgZAAQgWgBgPgQgAgWgZQgIAOAAASQAAASAKAKQAIAJAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_2.setTransform(109.6,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglA1QgRgRgBgdQgBgcAPgWQASgaAfAAQAZAAANAXQALATgBAbQAAAbgOAUQgRAXgZAAQgWgBgPgQgAgWgZQgIAOAAASQAAASAKAKQAIAJAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_3.setTransform(95.9,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCQgGgBgFAAQgXAAgOAQg");
	this.shape_4.setTransform(82.2,27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgjBHQgTgHgBgNQABgFAEgEQADgEAGAAQADAAAHAGQADADAKACIAPACQAJAAAJgDQALgDAAgIQAAgSgXgGIgNgDQgRgDgGgFQgLgHAAgOQAAgaAZgMQAIgDAQgFIAYgIQAEgCAHAAQAFAAAEADQADAEAAAGIACAKIACALQAAAGgEADQgEAEgFAAQgHAAgDgFQgCgDgBgKIgeAIQgTAJAAAMIAHACQAcAFAPAJQAVAMgBAaQAAAUgSALQgOAIgWAAQgQAAgQgFg");
	this.shape_5.setTransform(61.1,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIABgeIACgcQAAgGAEgEQADgDAFAAQAFAAADADQADAEAAAGIgBAcIgBAeIABAXIAAAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgFgFABgGQgBgGAFgEQAFgEAEAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgEAAgFgEg");
	this.shape_6.setTransform(51.7,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgHAFgWAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAcgNQAQgHALgHQgJgFgNAAQgLAAgJAIg");
	this.shape_7.setTransform(29.1,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AA2BhQgFgFAAgHIgBgbIgBgcIABgNQgVABgcAFIgxAJIgBAbIgBAbQgBAGgFAFQgEAFgIAAQgHAAgGgFQgEgFAAgGQgBgNADgZIACglIABgwIAAgvQABgHAEgEQAFgGAIAAQAHAAAGAGQAEAEAAAHIgBAdIAAAdIgBANIgBAMIAxgJQAbgFAWAAIABgvQAAgKAGgMQAHgQAJgBQAHABAFAEQAGAFgBAHIAAAEQgCAKgBAGIAAALIgBAMIgBAkIgBAjIABAbIABAcQABAHgGAFQgFAFgHAAQgHAAgGgFg");
	this.shape_8.setTransform(12.3,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.5,40.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape.setTransform(157.9,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCQgGgBgFAAQgXAAgOAQg");
	this.shape_1.setTransform(147.5,27.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfA+IgDgcIgCgcIABgLIAAgMQAAgbgKAAQgOAAgMARQgMAPgHAWIgBANIgBAMIABAMIABALQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIgBgLIgBgMIACgjIACgkIAAgMIgBgMQAAgGADgDQAFgEAEAAQANAAABARIAAAOQAVgcAWAAQAUAAAIASQAGAMAAAXIAAANIAAALQAAAKADARQACARAAAKQAAAGgDADQgEAEgFAAQgLAAgCgMg");
	this.shape_2.setTransform(134.3,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIABgeIACgcQAAgGAEgEQADgDAFAAQAFAAADADQAEAEgBAGIgBAcIgBAeIABAXIAAAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgFgFABgGQgBgGAFgEQAFgEAEAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgEAAgFgEg");
	this.shape_3.setTransform(123.8,21.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAoBFQgMgOgcgnIgZAaIgWAUQgEAFgFAAQgFAAgDgEQgEgEAAgFQAAgDADgFIALgLIAMgKIAbgbIgRgZQgKgOgHgGQgFgFAAgFQAAgFAEgEQADgEAFAAQAHAAAPATIAVAfIAZgXQAQgOAFgJQAEgGAGAAQAFAAAEAEQADADAAAFQAAAIgLALIgTASIgXAXIAqA1QADADAAAFQAAAEgEAFQgEADgEAAQgFAAgEgEg");
	this.shape_4.setTransform(112.2,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglA1QgRgRgBgdQgBgcAPgWQASgaAfAAQAZAAANAXQALATgBAbQAAAbgOAUQgRAXgZAAQgWgBgPgQgAgWgZQgIAOAAASQAAASAKAKQAIAJAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_5.setTransform(97.5,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmBfQgEAGgGAAQgFAAgDgDQgEgEAAgFIABgKIAAgJIgBgpIAAgnIAAgjIAAgjQAAgIADgGQAEgIAIAAQAJAAAAALIAAAGIgBAFIAAAcIgBAgQALgIAKgDQAKgEAIAAQAbAAARAVQAQATAAAcQAAAdgSAUQgTAVgbAAQgTAAgQgIgAgTgFIgTALIAAAWIAAAUIAAAVIASAHQAHACAKAAQASAAALgMQAMgNAAgUQAAgTgJgMQgLgNgRAAQgJAAgLAGg");
	this.shape_6.setTransform(83.5,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjBHQgTgHgBgNQABgFAEgEQADgEAGAAQADAAAHAGQADADAKACIAPACQAJAAAJgDQALgDAAgIQAAgSgXgGIgNgDQgRgDgGgFQgLgHAAgOQAAgaAZgMQAIgDAQgFIAYgIQAEgCAHAAQAFAAAEADQADAEAAAGIACAKIACALQAAAGgEADQgEAEgFAAQgHAAgDgFQgCgDgBgKIgeAIQgTAJAAAMIAHACQAcAFAPAJQAVAMgBAaQAAAUgSALQgOAIgWAAQgQAAgQgFg");
	this.shape_7.setTransform(61.1,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIABgeIACgcQAAgGAEgEQADgDAFAAQAFAAADADQADAEAAAGIgBAcIgBAeIABAXIAAAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgFgFABgGQgBgGAFgEQAFgEAEAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgEAAgFgEg");
	this.shape_8.setTransform(51.7,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgrA3QgVgQAAgdQAAggARgWQASgYAgAAQAVAAAPAHQAUAJAAAUQAAAOgQALQgHAFgWAIIgqATQAHAHAIADQAJADAKAAQARAAAMgHQAKgGAHAAQANAAAAANQAAAOgWAJQgRAIgUAAQgdAAgUgOgAgRgeQgIAIgFAQIAcgNQAQgHALgHQgJgFgNAAQgLAAgJAIg");
	this.shape_9.setTransform(29.1,24.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AA2BhQgFgFAAgHIgBgbIgBgcIABgNQgVABgcAFIgxAJIgBAbIgBAbQgBAGgFAFQgEAFgIAAQgHAAgGgFQgEgFAAgGQgBgNADgZIACglIABgwIAAgvQABgHAEgEQAFgGAIAAQAHAAAGAGQAEAEAAAHIgBAdIAAAdIgBANIgBAMIAxgJQAbgFAWAAIABgvQAAgKAGgMQAHgQAJgBQAHABAFAEQAGAFgBAHIAAAEQgCAKgBAGIAAALIgBAMIgBAkIgBAjIABAbIABAcQABAHgGAFQgFAFgHAAQgHAAgGgFg");
	this.shape_10.setTransform(12.3,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.2,40.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape.setTransform(163.4,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCQgGgBgFAAQgXAAgOAQg");
	this.shape_1.setTransform(153,27.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfA+IgDgcIgCgcIABgLIAAgMQAAgbgKAAQgOAAgMARQgMAPgHAWIgBANIgBAMIABAMIABALQAAAGgEADQgDAEgGAAQgGAAgDgEQgDgDAAgGIgBgLIgBgMIACgjIACgkIAAgMIgBgMQAAgGADgDQAFgEAEAAQANAAABARIAAAOQAVgcAWAAQAUAAAIASQAGAMAAAXIAAANIAAALQAAAKADARQACARAAAKQAAAGgDADQgEAEgFAAQgLAAgCgMg");
	this.shape_2.setTransform(139.8,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIABgeIACgcQAAgGADgEQADgDAGAAQAFAAADADQAEAEgBAGIgBAcIgBAeIAAAXIABAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgFgFABgGQgBgGAFgEQAEgEAFAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgFAAgEgEg");
	this.shape_3.setTransform(129.3,21.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAoBFQgMgOgcgnIgZAaIgWAUQgEAFgFAAQgFAAgDgEQgEgEAAgFQAAgDADgFIALgLIAMgKIAbgbIgRgZQgKgOgHgGQgFgFAAgFQAAgFAEgEQADgEAFAAQAHAAAPATIAVAfIAZgXQAQgOAFgJQAEgGAGAAQAFAAAEAEQADADAAAFQAAAIgLALIgTASIgXAXIAqA1QADADAAAFQAAAEgEAFQgEADgEAAQgFAAgEgEg");
	this.shape_4.setTransform(117.7,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglA1QgRgRgBgdQgBgcAPgWQASgaAfAAQAZAAANAXQALATgBAbQAAAbgOAUQgRAXgZAAQgWgBgPgQgAgWgZQgIAOAAASQAAASAKAKQAIAJAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_5.setTransform(103,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmBfQgEAGgGAAQgFAAgDgDQgEgEAAgFIABgKIAAgJIgBgpIAAgnIAAgjIAAgjQAAgIADgGQAEgIAIAAQAJAAAAALIAAAGIgBAFIAAAcIgBAgQALgIAKgDQAKgEAIAAQAbAAARAVQAQATAAAcQAAAdgSAUQgTAVgbAAQgTAAgQgIgAgTgFIgTALIAAAWIAAAUIAAAVIASAHQAHACAKAAQASAAALgMQAMgNAAgUQAAgTgJgMQgLgNgRAAQgJAAgLAGg");
	this.shape_6.setTransform(89,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiBHQgVgHAAgNQAAgFAFgEQAEgEAFAAQAEAAAGAGQADADAKACIAPACQAJAAAJgDQAMgDgBgIQABgSgYgGIgNgDQgRgDgGgFQgLgHAAgOQAAgaAZgMQAHgDAQgFIAZgIQAEgCAHAAQAFAAAEADQADAEAAAGIACAKIACALQAAAGgEADQgDAEgGAAQgHAAgDgFQgCgDgBgKIgdAIQgUAJAAAMIAHACQAcAFAPAJQAVAMgBAaQABAUgTALQgPAIgVAAQgRAAgOgFg");
	this.shape_7.setTransform(66.6,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIABgeIACgcQAAgGAEgEQADgDAFAAQAFAAADADQAEAEgBAGIgBAcIgBAeIAAAXIABAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgFgFABgGQgBgGAFgEQAFgEAEAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgEAAgFgEg");
	this.shape_8.setTransform(57.2,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAdgQAUQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_9.setTransform(35,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIABA+QgBAIgFAFQgEAEgIAAQgIAAgFgFg");
	this.shape_10.setTransform(22.4,24.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("Ag5BgQgEgEAAgHIAAgjQAAgUACgmQADgngBgTQABghASABIAMgCIATAAQAXAAAXAQQAYASgBAaQAAAggZATQgXAQgeAAIgLAAIgBA6QAAAHgEAEQgGAFgHAAQgHAAgFgFgAgXgxIgCAsIAJABQASAAANgKQAOgKABgQQAAgLgOgIQgMgIgOAAIgIAAIgEAAIgBASg");
	this.shape_11.setTransform(9,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168.7,40.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape.setTransform(163.4,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCQgGgBgFAAQgXAAgOAQg");
	this.shape_1.setTransform(153,27.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfA+IgDgcIgCgcIABgLIAAgMQAAgbgKAAQgOAAgMARQgMAPgHAWIgBANIgBAMIABAMIABALQAAAGgEADQgDAEgGAAQgGAAgDgEQgDgDAAgGIgBgLIgBgMIACgjIACgkIAAgMIgBgMQAAgGADgDQAFgEAEAAQANAAABARIAAAOQAVgcAWAAQAUAAAIASQAGAMAAAXIAAANIAAALQAAAKADARQACARAAAKQAAAGgDADQgEAEgFAAQgLAAgCgMg");
	this.shape_2.setTransform(139.8,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIABgeIACgcQAAgGADgEQADgDAGAAQAFAAADADQAEAEgBAGIgBAcIgBAeIAAAXIABAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgFgFABgGQgBgGAFgEQAEgEAFAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgFAAgEgEg");
	this.shape_3.setTransform(129.3,21.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAoBFQgMgOgcgnIgZAaIgWAUQgEAFgFAAQgFAAgDgEQgEgEAAgFQAAgDADgFIALgLIAMgKIAbgbIgRgZQgKgOgHgGQgFgFAAgFQAAgFAEgEQADgEAFAAQAHAAAPATIAVAfIAZgXQAQgOAFgJQAEgGAGAAQAFAAAEAEQADADAAAFQAAAIgLALIgTASIgXAXIAqA1QADADAAAFQAAAEgEAFQgEADgEAAQgFAAgEgEg");
	this.shape_4.setTransform(117.7,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglA1QgRgRgBgdQgBgcAPgWQASgaAfAAQAZAAANAXQALATgBAbQAAAbgOAUQgRAXgZAAQgWgBgPgQgAgWgZQgIAOAAASQAAASAKAKQAIAJAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_5.setTransform(103,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmBfQgEAGgGAAQgFAAgDgDQgEgEAAgFIABgKIAAgJIgBgpIAAgnIAAgjIAAgjQAAgIADgGQAEgIAIAAQAJAAAAALIAAAGIgBAFIAAAcIgBAgQALgIAKgDQAKgEAIAAQAbAAARAVQAQATAAAcQAAAdgSAUQgTAVgbAAQgTAAgQgIgAgTgFIgTALIAAAWIAAAUIAAAVIASAHQAHACAKAAQASAAALgMQAMgNAAgUQAAgTgJgMQgLgNgRAAQgJAAgLAGg");
	this.shape_6.setTransform(89,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiBHQgVgHAAgNQAAgFAFgEQAEgEAFAAQAEAAAGAGQADADAKACIAPACQAJAAAJgDQAMgDgBgIQABgSgYgGIgNgDQgRgDgGgFQgLgHAAgOQAAgaAZgMQAHgDAQgFIAZgIQAEgCAHAAQAFAAAEADQADAEAAAGIACAKIACALQAAAGgEADQgDAEgGAAQgHAAgDgFQgCgDgBgKIgdAIQgUAJAAAMIAHACQAcAFAPAJQAVAMgBAaQABAUgTALQgPAIgVAAQgRAAgOgFg");
	this.shape_7.setTransform(66.6,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIABgeIACgcQAAgGAEgEQADgDAFAAQAFAAADADQAEAEgBAGIgBAcIgBAeIAAAXIABAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgFgFABgGQgBgGAFgEQAFgEAEAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgEAAgFgEg");
	this.shape_8.setTransform(57.2,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgpA1QgSgRgBgdQgBgcAQgWQATgaAiAAQAZAAAPAVQAOASAAAbQAAAdgQAUQgSAYgcAAQgYgBgRgQgAgSgVQgHAMAAAQQAAAPAJAHQAGAHAKAAQAKAAAIgIQAJgIABgPQABgogXAAIgBAAQgOAAgJAOg");
	this.shape_9.setTransform(35,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgyBCQgDgEAAgIIAAhSIAAgLIAAgMQAAgHAEgFQAFgFAIAAQAOAAACAPQAWgRAbAAQAZAAABAiIAAAIQgCAUgQAAQgQAAgBgRIAAgNQgcAFgMAZIABA+QgBAIgFAFQgEAEgIAAQgIAAgFgFg");
	this.shape_10.setTransform(22.4,24.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("Ag5BgQgEgEAAgHIAAgjQAAgUACgmQADgngBgTQABghASABIAMgCIATAAQAXAAAXAQQAYASgBAaQAAAggZATQgXAQgeAAIgLAAIgBA6QAAAHgEAEQgGAFgHAAQgHAAgFgFgAgXgxIgCAsIAJABQASAAANgKQAOgKABgQQAAgLgOgIQgMgIgOAAIgIAAIgEAAIgBASg");
	this.shape_11.setTransform(9,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168.7,40.3);


(lib.pronounheader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape.setTransform(134.8,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_1.setTransform(121.5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_2.setTransform(108.2,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSBgQgDgEAAgFIABgQIABgQIAAgWIAAgXIAAgXIAAgZIgBgXIgCgWQAAgGAFgEQAEgGAHAAQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgCgJgBgEQABgPANAAQAVAAAABQIAAAoIgBAoIgCATQgCANgLAAQgGAAgKgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgNgBQgHAAgEgDg");
	this.shape_3.setTransform(92.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_4.setTransform(68.1,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_5.setTransform(47.8,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_6.setTransform(35.4,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_7.setTransform(22,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_8.setTransform(9.1,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_9.setTransform(-0.7,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvBjQgDgDAAgGIAAgwIAAgxQAAgagBgWIgCgZQAAgJADgFQAEgIAHABQAEAAAEADQADADAAAFIgBAEIAAAHQAKgIAKgDQAJgEAJABQAZAAALAVQAJATAAAcQAAAagOAQQgPATgZAAQgLAAgPgEIAAA6QAAAGgDADQgEAEgFAAQgFAAgEgEgAgLhAQgGADgKAKQABAbAAAeQAOAFAMAAQAPAAAIgLQAHgJAAgQQAAgWgFgLQgFgLgLAAQgLAAgJAFg");
	this.shape_10.setTransform(-10.7,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_11.setTransform(-24.1,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_12.setTransform(-36.8,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9C30CE").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLAAQgNAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgFAAgEgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_13.setTransform(-56.9,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C30CE").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_14.setTransform(-70.2,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9C30CE").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_15.setTransform(-83.5,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C30CE").s().p("AAeA7IgEgaQgBgOAAgNIAAgLIAAgLQABgbgKAAQgOAAgMARQgLAOgGAWIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgGAAgDgDQgEgEAAgFIAAgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAVAAQATAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_16.setTransform(-96.1,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C30CE").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_17.setTransform(-109.8,4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9C30CE").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHgBAPIAAAJQAAAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIAABCQAAAMgMAAQgLAAAAgMg");
	this.shape_18.setTransform(-121.7,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C30CE").s().p("AgzBeQgDgDAAgFIAAgkQAAgSACggIADgyIAAgRQAAgMABgFQADgMAJACIALgBIASgCQAVABAUAPQAVARAAAYQAAAegXARQgUAQgcAAIgPgBIgBBAQAAAFgDADQgDADgFAAQgFAAgDgDgAgahIIgBAXIgCAwIANABQAUAAAOgKQAPgLAAgTQAAgOgPgKQgNgJgPAAIgJAAIgHABg");
	this.shape_19.setTransform(-134.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("A3CiOMAuFAAAIAAEdMguFAAAg");
	this.shape_20.setTransform(-0.5,3.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("A3CCOIAAkcMAuFAAAIAAEcg");
	this.shape_21.setTransform(-0.5,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronounheader, new cjs.Rectangle(-148.9,-19.4,297,38.8), null);


(lib.proboxstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AE0BmIoSAAAhthkIi6AAIgMAA");
	this.shape.setTransform(-58.6,85.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010101").s().p("AgBAOQABgOACgOIAAALIAAAOIAAAEIgDgBg");
	this.shape_1.setTransform(-93.1,89.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmNNPIgCAAQgggJgVgTIgBgCQAxgTArgaIApgaQAXgPADgYIAFgIIAQgXIABgBIAGgBQACAHgCAHIgCALIgKAqQAAADABACQAGAFADgBQAEgCACgHIALgoIABgCIACgKQABgJgCgHQAYgBAXAGQAZAGAXAPIAHAFIAAABQAAAJgRAKIgMAJIgLAJQgIgCgJAGQAJgKAMgGQAKgGAGgKQAFgJgDgGQgCgEgFgCQgEAAgCAFIAAABQgEAOgQAFQAAABgBAAQAAAAgBAAQgBABAAAAQAAAAgBABIgbAeQgDADACADQADADACACIgWAQQgbAUgbAQQgIAFgFAGQgIAMACAMIAAABIhNgDgAjKKoIgEAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABIgBAJIgFAGIgFAFQgVARgTATQgDACABAEQAFAOALgLIAogmQAGgFADgHIABgBQAFgNgLgGgAmrJ5IgBAAQABgLgEgNIABAAQACgJgBgEIABAAQAIgjATgWIACAAQA4ABAxgOIAPgMIAIgHIAEALIgDABQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBADAAADIgLAKIgQANQgHAGgIAEIgHADQgJACgFAGQgCADADADQAFAEAFABIgBAKIgLACQgPADACANQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAKAAAKgCQAKgCAJgEIAGgDQAYgOAXgRQgGANgCAOQgCAPgEAOIgDACIgIgCIgQgCIgBgBIgBAAIAAABIgegCIgIgBQgXgCgXAGIAAADQgPAEgRAAIgMAAgAGXqPQgKgGgIgIIgGgEIgHgIIgNgNIgFgGQgFgKADgHIAAgBIAAgBIACgCIAFgFIACgBQAGgBAFACQAIADAEAKIABABQAMAJAHAMQAIAEAJADIANAEIABABIgbAaIgBAAIgEgCgAGRsBIgCgBIgCgDQgDgEACgGQgDgJAAgLQABgLADgJIAAgBIACgDIABgEIABAAQAHgJAJgGIACgBIAEgCQAQgDAIAPIACAEQADAHACAIIgEgCIgPgBQgGACgCAHQgEAKAHAIQAIAIANgDIABgBIgFAEQgGADgFAEIgGAFQgJAGgKAAIgKgBg");
	this.shape_2.setTransform(-17.7,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AjrEIIAAgBIgNAAIgCAAIgGgDIgggSIgBgCQgLAKgQAGIAAABQgZACgWgEIgDgBIgCAAIgDgBIgCAEQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgSAAIgBAAIgBABQgMADgJgEQgGgCgEgHIgJgEQgDgBgCgCIgBAAIgCAAQgLgQgHgVIAAgCQAFgfARgUQABgBAAAAQABAAAAgBQABAAAAABQAAAAAAAAIAFgCIACgBIAHABIAAgBIABgBQADgBAFAAQAJACgHATQgFAPAGAOQAPAjAcASIAFACQAJgFgNgJQgegYgIguQAEgGABgGIAAgCIABgDQABgIAEgIIACgEIACgCIAAgBIABgDIACgDIAVgvQANgeAbgPQAOgIAQgFQATgGAVgBQAfgCAhAJQAiAJAWAUQAiAeAIA4QAFAkgKAqQgDAHgEADIgBACQgDAGgFAGQgNAQgQAKQgOAIgSABQgQACgPgCIgGABIAAABQgMgDgKgFgACHA3QgLAAgMgDQgIgBAEgEQAFgRgNAMIgBABQgGAAgFgFIgCAAQgTgVgNgcIgBAAQgBgTgEgQIAAgCQACgTAIgHIABgCQAOgEATAAIAAABQgCAtAYAcQAIAJAKAFIACABQAYAMANALQABAOgOAIIgCAAIgOABIgHAAgACdAKIgEgCIgHgEIgGgDIgCAAIgDgEIgFgEQgRgNgGgVIAAgCIgDgKIgBgCIAAgBIgEgPQgDgLgBgKQgCgNAEgMIAAgMIAAgCQAMggATgZQAiguA5gYIAKgDQAwgQA6AKQBKANAiA0QALARAIAVQADAYgEAfIAAACQgRA1gtAhQgYARgggBQgWgBggACIgfgQIgCAAQgDAMgKAIQgOAMgSADIgTABQgTAAgQgGgAC4hcQABAYAgADQAOACAPgEQAKgCAMgEQArgRACg9IgBgBQgLgXgZgJIgCgBQgigFgtAEIAAABQgHAFgGgDIAAACQgPAKgLAFQAEAJAMgHQAYgOAegBQA1gDAVAiIAAACQAEAhgYAXIgCAAQgIADgHAEIgBAAQgeAKgagIIAAgBQgMgDgDgNIAAgBIgCAAQgDAAgCAHg");
	this.shape_3.setTransform(45.6,-32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("AmUMZQgKgFgNgEQgOgDgIgGQgTACgZgBIAAgBQAPgoAMgsQADgJAFgGIAsgrIAigUQAUgLAUABQAKgDAJgGQAMgJAHgPIAHgDIABgCQADgHgKgBIgCAAQgPgWgYgTQgSgOgQgSQgogtgjgxIgLgPQApgqA8gYQAogQAxgIQAagEAngCQAKAAAKAFQAXA3ASA/IABAAQAEAkAGAbQAIAkgJAfIACADQgBAFACAFIAEASIAAAHIgBAEIgGAUIAAABIgBgBQgMAIgJAVQgGANgJANQhEBhhrA7QgFACgCAFQgYgHgZgMgAiqKeIAJgJIAFgIIAFgIQACgGAEgFQALgNAGgQIABgBIAEgKIADgNIABgBIAAgCIAHgTIgBgYQAAgEAFABQgHg3gRhFQgMgzgRg0QAMgHgHgTIAAgCQAXgMAigLIAAgBQAPAAAQgIIABgBQAyABAtAFQAGABAGgCIAfA2IABAAQAJAWAEAcIAAACQAKAfAEAmQAGAqgBAbIgBAhQAAAngPAdQgGAMgJAKQgNASgYAHQg1AQg1AMQgbAGgbAEQgWAEgiACIAKgPgAnVKOQgGgNgEgPQgCgJgGgEQAJgLAMgIQAigZAzgIQAngFAYAHIAAACQgIASgUAGQgJgCgMAEIgHADQg5AYgkAsQAAgDgCgFgAilBKQg1gCg7gIIgTgDIgMgCQhVgRgng8IAAgDIAAgCQALgHgEgHIgBgCIgCABIACgLIADgEIAGAKIADADQAZAhAqAPQAbALAeAGQAeAGAgABIAwACIAggBQA+gFApgaQALAFAPABQANACAFAFIABAAQgVAcgcAWIgBAAIAAAFIgFADIgDACQgBgHgDgHQglAOgyAAIgQgBgAiyATQhcAFhMgaIgCAAIgwgbQgFgCAEgGQgRgJgIgSQgGgMgEgNQgMgqACg4QANhAAYg0IAAgCQgSg4AUgpQAHgOALgMQAogrBGgNQAWgEAZAAIAPgCQAygJAdgdIAAACQAKABAHAGIACABQAggKAcgYQAEgEgCgKQASgGAOgJQAFgEACgHQgIgPgUgEIABgBQAMADAOAAQgKgGgEgJQgIgDgKgCIgCAAQADgGAMABIACAAQgDgPAHgVIgEgEIAAgBIgJABIAAgDQALgCgEgJIAAgCIAGgHIAAABIAJAGIAIgOIgCgBIgBgBIAAgDQABgEAHgDIADgBIABAAIABgCIgBgBIgBgCIgBgCIAAAAIAEgDIACACIAAABQAWgeAfgVIgEgBIADgHQABABAAAAQABAAAAAAQABAAABAAQAAABABgBIACAAIACACIANgIIAOABQAFgEAHgDIAKAAIAEgDQAHgFgLACQABgPAOAFIACAAQgMAPATgBIAAABIAAABIALABIAIAAQANgKAEACIgBACQgDADgBADIAnAAIANALQASAUABARIADAAIAEgDIAAABQAHAdgFAaIAAACQgGAGgBAGQgCAHADAHIAAACIAHAEQADgIAIgDIAGgDQADgDAFgBQAVgDgBAUIgBAHQAAAJgIAHQgKAGgNgDQgTABgOgGIgBAAQgGABAGAGIACAAQAEAGAIACIAAABQAAAegQAPIAAABIgWAAIgCAAQgLgCgJgFQgagNgHgcIgBgBQAOgIgKgIIgCgBIgCABQgNAEgFAMIAAACQgNAHgIAMIAAABIgBAAQgTAHAPAJIACAAIANgBIAAABIAPASIACABQgEAEAFAEIAAABIALALIAHAKIABABQAKADAHAGIABABQAGAFAFAIIAAABIAAAAQgPAPgWADIgBAAQgIABgJAAQghgDgggIQgJgLgLgFIAAADQgEASAaAHIACAAQgOAOADAOQAVgBAQAKQAfAHAWAQIABAAQAfAYgCAvIALAJIAIAFIAHAHQAVAVAQAZQAHALADAMQACAKgEAIIADAKIgOgEQgFABgEgCIgGgCIgcgJIgBAAQgTgCgVACIgCAAQAMgfgJgjIgBgBQgDABgDADQgDADgBAIIgBAAQACAOgCAKIAAACQgIALAAANIABACIgeAMIgWAIQgnANgPAoIgPAkQgFALgFAHQgBAEgCADQgCAEgEABQgXADgWgEIgHgCQgLgEgLgDQgKgCgIgGQgKgGgMgBIgCgBIgSgKIgJgCIgHgCIgIgDIgBAAIgFgBQgGAAgEgCIgMACIgBABIgBAAQACgVgIgbIABAAQgGgFABgKIABAAIgMgVIgBgBQATgTAKgbIABgCQgHgDgJAMIgXAfIAAAGQAGAFADAKIAEAJQAKAcABAeQABAEgDADQgGAHgHgBIgDABIgHAKIAIgGQAEgEAHgCIAJgCQANgBAMACIALABIAEACIAOAGIAaAJIAXAJIANAHIADADIAAgBIABAAIAOAJIABAAQAAAXgKAQIgBACIABATQADAbANASIACAAQgsAagyAFIgHABQgMAAgLgFgAlUj3IgBAAQgSAkgLArQAEASALAMQANAOALgCIAAgBQgGgMgMgFIgBgCIgJgPIAAgCQACgzAYgcIABgCQACgEgEAAIgGABgACrqMIACABQAQADANgIIAGgFQAFgEAFgDIAGgEQACgBACgCQAAAEAFgBIACgBQABgMgGgMQgCgNgGgNQgEgHgGgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgDAAQgFgCgHABQgEABgEACQgNAGgGAMQgHAIABAMIACAUQAAAKgBAJQAAAHAGgBIABAAIAAgDIADADgAC7sHQgPAGgMANIgEAFQgEAIAJAAIAIgHQAJgLANgFIABAAQAIgBAGAGQAEAEAFAAIACgCQACgEgCgDQgKgKgOAAIgGABgAE4gvQAFgMADgRQAIg7gWg0IgBAAQgLgNgIgQQA9gVA4gaQATgIAGgWIAPABIAAAFQAKA2ApAeQgfAngjAjQgIAIAEABIAAABIgDACQgKANgMAMQglAjg2ASIAEgIgACprFIABAAIgBADIgBABIABgEgACtrLIAAAAIACgCIAEgGIABAAIACgCIAJgEIgDABQgJAGgHAJIAAAAIABgCg");
	this.shape_4.setTransform(5.2,-6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AmTQyQg1gBhAgFIhIgFQgkgCgoABQgQgGgTACIgCAAQgSgFgaABQgbABgZgIQgIAEgSgMIgCgBQAKgZgGgZIAAgCQAHgPAIgOIAAgCIAAAAQA2gmA2gkIABgBQAYgHAUgNIAAgBQBCgSAwgkIAAgBQgDgIAOgJQAXgPATgUQASgUAOgaIAFgLIACgFQgJADgJABQgOAFgTAAIhkABQgWAAgJgDQgaASgYAWIgMAMIgCADIi6AAIC6AAIgVATQgaAcgXAgIgMASQgGAKgFALQgRAhgbAVQgKAIgLAGQgfASgcgWQgOgKgCgRIAAgFIABgOIAAgLIACgKIACgKQACgIADgDQAGgPAJgOIABgCQgBgIADgMIAAgCIAGgHIABgBQAFgSAGgNIABgCIAEgJIABgCQAagnAXgqIAAgCQApg1AxgtIATgPQAJgGAMgEQAcAIAVAQQAWAQAVAEQADALAUgKIABgBQAvADAvgKIACAAQAEgHAJgCIABgBQAEgDACgEIAAgCQAEADAEgEIABgBQALgMANgKQAWgTAagMQAkgQAyAEQAKABAJgEQhHhFg8hPIAAgEIgBAAQgCgCgCgDIgKgTQgGgLgJgJIgEgFIgKgXQgGgMgBgPQgBgSgDgSIAAgIIAAgsIAAgsIgBgsIABgTIADgJQAGgWAJgTIACgGIAAgBIAEgDIAJgJIADgEIAHgDQAMgNALgQQAJgOACgQIACgBIADgKIAEgKIAAgBIAAAAQACgSgGgQIgEgKQgEgKgCgLQgFgbABgoQAMhCAYgxIABgBQgUgxAVgwIACgGQAghDBRgUQAHgCADACIABAAQANgJAYADQAmAEAlgVQALgGAKgCQARgKABgSIAAgBQgPgKAVACIACAAQAPgSACgVIgBAAQgIgFgIADIAAABQgUAZghAKIgHACQgGABgGgBQgLgJAJgEIACAAIASAGIAAgBQAYgRAQgWIgDAAQgFgEgHAKIgBAAQgQAHgTgCIgBACIgBAAQgEANgMgDIAAABQgGgCgJAAIgCABIgagRIgCAAQAGgLARgCIABAAIgzgnQgsABgIgtQgIgtAsgPQAGgVACgWQABgLAGgLQAMgXAbgGQAHgRAPgKQAWgOAcAFQgDgVANgQQAFgGAHgFQARgMAWADQAhgoA4AEIAGgFQAPgOARgGQAygOAbAlIAFAFQAZgGAXACQAaACAYAOQAUALAAARIAGgBIACAAQAIABgCAEIgBACQgRACACALIABAAQAFAJAIgGIAAABQATgQAbABIABAAQgLANgXALIABAAQADAOAFACIACAAQATgQAZADIACAAQAFADgGAEIgBABIghAMIAAABQAMADAIAGIABgBQACgBABgEQATgCAQASQAHAIgCAGQgIAEgMgNIgIgIQgIATgEAOIABAAQAHAGAEAAIACAAQAEgJAGgHIABgBQAbADAEAXIAKADIACgBQAQAMABAQIgBAAQgKADgFgMIgBAAQgKARgQABIgCAAQgEgJgHACIAAABQgMAOgSAHIgDAAQgFgIgIADIAAABIgMAMIgBABQALAlgHAqQAKgEAMgDIACAAQAKAFAIAGIAAACQACAJgDALIABAAQgJAegeABIgDAAIgCAAQgEAwgdANIgCAAIgFAIQgLATgOAPIgBACQgIAIgFAKIgDAEQgNAIgSADIgBAAQglAGgWgHQgHAGgEAJIAAABQAHAEAIABQAIACAIgBIACAAQAOAHAMACIABAAIALAHIABAAQAkAaAEA0IAAACQAjAYAXAkIAEAIIABADIADARIAAAGIABABIABAJQAAAMAFAJIgBAEIAAABIAAABIACABQAGAEAFAFIABABIABACIABgBIADgBQAGACAIgEIAEgFIAWgIIAIgDQAagFAWgNIAFgBIACAAQAVgNAXgSIACAAQgGAWgTAIQg4Aag9AVQAIAQALANIABAAQAWA0gIA7QgDARgFAMIgEAIQA2gSAkgjQANgMAKgNIADgCIAAgBQgEgBAIgIQAjgjAfgnQgpgegKg2IAAgFIAAgKQABgJgHgFQAFgSAPgKIAFgEIABgBQAIgBAHgCIABAAQAEgHAGgEIABgBQAAgQACgPQAFgcANgUIABgCQAigqAvggIAJgGQAJgEAMgDIAIgBQAWgMAnAAQAngBAYAFQBCAOAjAyQAHAJAGAKQAVAlgNAwIgCAHQgSA9gtAiQgOALgVAEQggAGgZABQgZABgTgKIgLgIQgaAigwgBIgCAAQgCAOgGAJQgGAJgKAGIAAABIgagDIghgDIAAgBQguA+g4A0QgTASgUAQQgcAXgrAJIgIAKQgLAMgOAJIAAABQg5ATg2gRIgCAAQgRgHgOgKIgCAAQgjARgtgEIgOgCIgCAAQgXA0grAWIgCABIAAgBIgIAEIAAAAIAAACIBJBYIACABQASAkAVAhIABABQAJAaAQAcQAWAnAHA6QAHA3ABAjQABAfgFApQgCATgGAQQgWA6hGAMQhBALg9AOQgpAJglgEQg6BIhRAzIgUAMIgNAKQgGAEgIAEQgFAEABACIAAABQghAVgcAZIgCAAQgKgHgPANQgaAVgeASQgKAFgDANQAPAZAhAIQAXAGAbAEIBOAIQAQACAPAEQATAFAQAKQAGAkgCAeIAAACIgGALIAAACIgpAbIgBABQg4gEg7gBgAsZQGQAFAEAGAAIgLgEIAAAAgAkXO7IoTAAgAnDLYIgBABIgPAXIgGAIQgDAYgWAPIgqAaQgqAagxATIAAACQAWATAfAJIACAAIBNADIAAgBQgBgMAHgMQAGgGAHgFQAcgQAagUIAXgQQgDgCgCgDQgDgDADgDIAcgeQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABgBQAPgFAEgOIABgBQABgFAFAAQAFACABAEQAEAGgGAJQgFAKgLAGQgLAGgKAKQAKgGAHACIALgJIANgJQARgKAAgJIABAAIgBgBIgIgFQgWgPgagGQgWgGgZABQADAHgCAJIgCAKIgBACIgLAoQgCAHgDACQgEABgFgFQgCgCABgDIAJgqIADgLQABgHgBgHIgHABgAl5LPQANAEAKAFQAZAMAYAHQACgFAFgCQBrg7BEhhQAJgNAGgNQAJgVAMgIIABABIAAgBIAGgUIABgEIAAgHIgEgSQgCgFABgFIgCgDQAJgfgIgkQgGgbgEgkIgBAAQgSg/gXg3QgKgFgKAAQgnACgaAEQgxAIgoAQQg8AYgpAqIALAPQAjAxAoAtQAQASASAOQAYATAPAWIACAAQAKABgDAHIgBACIgHADQgHAPgNAJQgIAGgKADQgUgBgUALIgiAUIgsArQgFAGgDAJQgMAsgPAoIAAABQAZABATgCQAIAGAOADgApeKuIABAAQAYACATgGIABgDQAWgGAYACIAHABIAfACIAAgBIABAAIABABIAPACIAIACIAEgCQAEgOACgPQACgOAFgNQgXARgYAOIgGADQgJAEgKACQgJACgKAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgCgNAOgDIAMgCQAcgIAWgTQAJgHAHgJIAEgCIAEgBIAAAAIgIgNIgBAEQgDAEgEADIgKAHQgKARgUAHIgFACQgHAFgFAAQgGgBgFgEQgCgDACgDQAFgGAJgCIAHgDQAIgEAGgGIARgNIALgKQgBgDABgDQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIADgBIgDgLIgIAHIgQAMQgwAOg5gBIgCAAQgTAWgHAjIgBAAQABAEgCAJIgBAAQADANAAALgAg/HWIABAYIgHATIAAACIgBABIgEANIgDAKIgBABQgGAQgLANQgEAFgCAGIgFAIIgFAIIgJAJIgKAPQAigCAWgEQAbgEAbgGQA0gMA2gQQAYgHANgSQAJgKAGgMQAPgdAAgnIABghQABgbgGgqQgEgmgKgfIAAgCQgEgcgJgWIgBAAIgfg2QgGACgGgBQgugFgxgBIgBABQgQAIgPAAIAAABQgiALgXAMIAAACQAHATgMAHQARA0AMAzQARBFAHA3IgBAAQgEAAAAADgAmpJdIABABIABgCIgCABgAlLHwQgzAIgiAZQgMAIgJALQAGAEACAJQAEAPAGANQACAFAAADQAkgsA5gYIAHgDQAMgEAJACQAUgGAIgSIAAgCQgNgEgSAAQgPAAgRACgAl3hmQAEAHgLAHIAAACIAAADQAnA9BVARIAMACIATADQA7AHA1ACQA8ADArgPQADAGABAHIADgCIAFgDIAAgFIAAAAQAcgVAVgcIgBAAQgFgFgNgCQgPgBgLgFQgoAag+AFIggABIgwgCQgggBgegGQgegGgbgLQgqgQgZghIgDgDIgGgKIgDAEIgCALIACgBIABACgAhigpQAygFAsgbIgCAAQgNgSgDgbIgBgTIABgCQAKgQAAgXIgBAAIgOgJIgBAAIAAABIgDgDIgNgHIgXgJIgagJIgOgGIgEgCIgLgBQgMgCgNABIgJACQgHACgEAEIgIAGIAHgKIADgBQAHABAGgHQADgDgBgEQgBgegKgcIgEgJQgDgKgGgFIAAgGIAXgfQAJgMAHADIgBACQgKAbgTATIABABIAMAVIgBAAQgBAKAGAFIgBAAQAIAbgCAVIABAAIABgBIAMgCQAEACAGAAIAFABIABAAIAIADIAHACIAIACIATAKIACABQAMABAKAGQAIAGAKACQALADALAEIAHACQAVAEAXgDQAEgBADgEQACgDABgEQAFgHAFgLIAPgkQAPgoAngNIAWgIIAegMIgBgCQAAgNAIgLIAAgCQACgKgCgOIABAAQABgIADgDQADgDADgBIABABQAJAjgMAfIACAAQAVgCATACIABAAIAcAJIAGACQAEACAEgBIAPAEIgDgKQAEgIgCgKQgDgMgHgLQgQgZgVgVIgHgHIgIgFIgLgJQACgvgfgYIgBAAQgWgQgfgHQgQgKgVABQgDgOAOgOIgCAAQgagHAEgSIAAgDQALAFAJALQAgAIAhADQAJAAAHgBIACAAQAWgDAPgPIAAAAIAAgBQgFgHgGgGIgBgBQgHgGgKgDIgBgBIgHgKIgLgLIAAgBQgFgEAEgEIgCgBIgPgSIAAgBIgNABIgCAAQgPgJATgHIABAAIAAgBQAIgMANgHIAAgCQAFgMANgEIACgBIACABQAKAIgOAIIABABQAHAcAaANQAJAFALACIACAAIAWAAIAAgBQAQgPAAgeIAAgBQgIgCgEgGIgCAAQgGgGAGgBIABAAQAOAGATgBQAMADALgGQAIgHgBgJIACgHQABgUgVADQgFABgDADIgGADQgIAEgDAHIgHgEIAAgCQgDgHACgHQABgGAGgGIAAgCQAFgagHgdIAAgBIgEADIgDAAQgBgRgSgUIgNgLIgnAAQABgDADgDIABgCQgEgCgNAKIgIAAIgLgBIAAgBIAAgBQgTABAMgPIgCAAQgOgFgBAPQALgCgHAFIgFADIgJAAQgHADgFAEIgOgBIgNAIIgCgCIgCAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBIgDAHIAEABQgfAVgWAeIAAgBIgDgCIgEADIAAAAIABACIABACIABABIgBACIgBAAIgEABQgGADgBAEIAAADIABABIACABIgIAOIgJgGIAAgBIgGAHIAAACQAEAJgLACIAAADIAJgBIAAABIAEAEQgHAVACAPIgBAAQgMgBgDAGIACAAQAKACAIADQAEAJAJAGQgNAAgMgDIgBABQAUAEAIAPQgCAHgFAEQgOAJgRAGQACAKgEAEQgcAYggAKIgCgBQgHgGgKgBIAAgCQgdAdgyAJIgPACQgZAAgWAEQhGANgoArQgLAMgHAOQgVApATA4IAAACQgYA0gNBAQgCA4AMAqQAEANAGAMQAIASARAJQgEAGAFACIAwAbIACAAQBMAbBcgFQANAGARgCgADag/IAAABQAKAFAMADIAAgBIAGgBQAQACAPgCQASgBAOgIQAQgKANgQQAFgGADgGIABgCQAEgDADgHQAKgqgFgkQgIg4gigeQgWgUgigJQghgJgfACQgVABgTAGQgQAFgOAIQgbAPgNAeIgVAvIgCADIgBADIAAABIgCACIgCAEQgEAIgBAIIgBADIAAACQgBAGgEAGQAIAuAeAYQANAJgJAFIgFgCQgcgSgPgjQgGgOAFgPQAHgTgJgCQgFAAgDABIgBABIAAABIgHgBIgCABIgFACQAAAAAAAAQAAgBgBAAQAAABgBAAQAAAAgBABQgQAUgFAfIAAACQAHAVAKAQIACAAIABAAQACACADABIAJAEQAEAHAGACQAJAEAMgDIABgBIABAAIASAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIACgEIADABIACAAIADABQAXAEAYgCIAAgBQAQgGALgKIABACIAgASIAGADIACAAIAGAAIAHAAgAIykXQgEAEAIABQAMADALAAQAMABAJgCIACAAQAOgIgBgOQgNgLgYgMIgCgBQgKgFgIgKQgYgcACgtIAAgBQgTAAgOAEIgBACQgIAHgCATIAAACQAEAQABATIABAAQANAdATAVIACAAQAFAFAGAAIABgBQAFgFADAAQADAAgDAKgAKrpMIgKADQg5AYgiAuQgTAZgMAgIAAACIAAAMQgEAMACANQABAKADALIAEAPIAAABIABACIADAKIAAACQAGAVARANIAFAEIADAFIACAAIAGADIAHAEIAEACQAYAJAegEQASgDAOgMQAKgJADgMIACAAIAfAQQAggCAWABQAgABAYgRQAtghARg1IAAgCQAEgfgDgYQgIgVgLgRQgig0hKgNQgWgEgVAAQgiAAgdAKgAC6qiIgCABIgEAFIgDACIAAABIAAABQgDAHAFAKIAGAGIAMANIAIAIIAFAEQAJAIAJAGIAEACIACAAIAagaIAAgBIgOgEQgIgDgIgEQgHgMgNgJIgBgBQgEgKgIgDQgDgBgFAAIgDAAgAm4MfQgCgEADgCQATgTAVgRIAGgFIAFgGIABgJQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIADAAIAAgBQAMAGgGANIAAABQgDAHgGAFIgpAmQgFAFgDAAQgFAAgCgIgAkxjLQgLgMgEgSQALgrASgkIABAAQALgEgDAHIgBACQgYAcgCAzIAAACIAJAPIABACQAMAFAGAMIAAABIgDABQgKAAgLgNgAKejwIAAgIIABAAIABAJIgCgBgAKfmIQgggDgBgYQADgJAEACIAAABQADANAMADIAAABQAaAIAegKIABAAQAHgEAIgDIACAAQAYgXgEghIAAgCQgVgig1ADQgeABgYAOQgMAHgEgJQALgFAPgKIAAgCQAGADAHgFIAAgBQAtgEAiAFIACABQAZAJALAXIABABQgCA9grARQgMAEgKACQgLADgKAAIgIgBgADTrTQABgJAAgKIgCgUQgBgMAHgIQAGgMANgGQAEgCAEgBQAHgBAFACIADAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAQAGAFAEAHQAGANACANQAGAMgBAMIgCABQgFABAAgEQgCACgCABIgCABQgMADgIgIQgHgIADgKQADgHAFgCIAPABIAEACQgBgIgDgHIgDgEQgHgPgRADIgEACIgIAEIgCACIgBAAIgEAGIgCACIAAAAIgBACIgCAEIgBAAIgBAEQgCAJgBALQgBALAEAJQgCAGACAEIAAADIgBAAIgBABQgFAAAAgHgADOswIAEgFQAMgNAPgGQASgDAMAMQACADgCAEIgCACQgFAAgEgEQgGgGgIABIgBAAQgNAFgJALIgIAHQgJAAAEgIg");
	this.shape_5.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.proboxstill, new cjs.Rectangle(-93.3,-107.9,186.6,215.8), null);


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


(lib.proisboxingsentence = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("scene_1wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(102));

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-31.6,1.7,1,1,0,0,0,84.4,20.1);

	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.6,1.7,1,1,0,0,0,84.4,20.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-34.4,1.7,1,1,0,0,0,81.6,20.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-45.8,1.7,1,1,0,0,0,70.2,20.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-43,1.7,1,1,0,0,0,73,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},21).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).wait(1).to({regX:83.9,regY:24.2,x:-32.1,y:5.8,alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(21).to({startPosition:0},0).wait(1).to({regX:81.5,regY:24.2,x:-34.5,y:5.8,alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).wait(20).to({startPosition:0},0).wait(1).to({regX:70.1,regY:24.1,x:-45.9,y:5.7,alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-18.4,168.7,40.3);


(lib.proboxingmove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.proboxstill();
	this.instance.parent = this;
	this.instance.setTransform(-23,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5,y:-21},4).to({x:-2,y:-10},5).to({x:23.4,y:-9.4},5).to({x:0,y:0},10).to({x:-23},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.3,-107.9,186.6,215.8);


(lib.proboxingjump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.proboxingmove();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-30},4).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.3,-107.9,186.6,215.8);


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
		var bgm = createjs.Sound.play('bgmusic',{loop:-1});
		var vo = createjs.Sound.play('VO');
		
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
		
		 window.open ("pronoun_Scene2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_intro.html","_self");
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


(lib.Pronounboxing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pro
	this.instance = new lib.proboxingjump();
	this.instance.parent = this;
	this.instance.setTransform(-67.9,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mirror lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhGQVIAPgUIAAgCQAIgCAEgPIAAgBQAKgCAHgHIAAABIAAgBQALgVASgMIACgBQALgUAQgPIAAgCQAHAEAFgOIADgDIAQgWIAAgCQAEAEADgHIABAAQAFgOAKgBIABAAQAKgQAPgLIACgBQAHgVAQgOIABgBIAQgLIACgBIAPgdQABAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQAJgHAKgEIABAAQgCAMgMAMIifCtQgtAzgwAvgAkgLWQAKgPAPgOIABAAQAGgQASgNIAAgBQACgFAHgIIABgBQAPgJAOgTIAHgKQAJgQANgCQATgdAZgeQAKgMAPABQgBAIgNAOQhSBWhLBVQgEAGgGADIgDABQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBgBgBgAloLUIALgHIADAAQAMgTAJgLIAAgBIAMgLIACAAQBKhcBUhSIAHgGQAVgWAWgUQALgNARgQQAPgPAOgQQAIgIAQgKIACgBQACALgOAMQgsAngqAqIgiAjIAAABQhABCg+BGQgkApgpAlIgCABQgBAAgCgFgAExH3IAAgEQASglAkgVIABgBQgcAegZAiIgBABIgBgCgAkFF9IABgBQAEACAEgGIABAAQBRhVBWhQICoijQAHgHAHgFQAKAAAGgDIAAAEIAAAAIhSBKIhZBWQhVBRhTBTQgnAngpAmQgGAFgKABQAcgaAgglgAjsGnIAAgBQAJgDABgDIABgBQAIgPAKgEIACAAQAGgNALgFIAAABIACABQAggvAogeIACgBQAlgtAsgnIACgBQgEgEAHgCIAAgBQAoglAmgoIAAABIABAAQAngpApgoIABABQAFACAFgBIiiChIimClIg0A2QgKAAAKgMgAlMnQIAggYQBOg8BFhFIBHhHQANgNAUABQgPAVgYAVIivCcQgXATgZASQgHAEgFAAQgFAAgEgDgAlInvIAAgEICbiQIAAgBQAcgVAggdQAcgbAVgaQABgBAAgBQAAgBAAAAQAAgBAAAAQgBAAgBAAQALgOAOgKIACAAQALgDAHACIABABIAAABQglAmglAkQgvAtgxAqQg2Avg0AzQgIAIgIAFQgJAGgIADgAkgqmQArgxA2gnIABAAQAPgVAXgUQAtgmArgpQAqgpAjgxQACgEAEgBQAEgBAFACQAFAMgQAMQgLAKgJALQhQBWhYBOIg6AxIg6AtgABwtlQAMgNALADIADAAQBXhKBKhPIABgCQAGgCAKgJQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAABAAAAQAIACgOAOQhTBShcBLIgIAFQgEACgEAAIgBAAQgHAAgGgGg");
	this.shape.setTransform(62.4,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJbTuIAAAWgAJDT/IgngGIAAAAIgbgEIAAAAQjggjjfgoIAAAAQj9gtj8g0IAAAAQhRgRhQgUIAAAAQASgMAGgkIAAAAQAFghgEgiIAAAAIgCgOIAAAAQACgqgFgqIAAAAIAAgGIAAAAQABgfAFgeIAAAAQAaipAGipIAAAAQADhSgKhPIAAAAQgLhUgGhVIAAAAQgLiqAdioIAAAAQAThrgehoIAAAAQgHgUABgXIAAAAQAAgUgEgSIAAAAQACiJgOiHIAAAAQgEgsgTggIAAAAIAAgDIAAADIAAgDQAKghAGgjIAAAAQAKg6gQgoIAAAAQARgKAagEIAAAAIAIAAIAAAAQALgEANgDIAAAAQCvgmCwghIAAAAQD3gtDyhBIAAAAQBTgWBOgYIAAAAQA1gBAhATIAAAAQgKAbAAAfIAAAAQAECLAACMIAAAAQAGAaAEAcIAAAAQADAVAAAWIAAAAIAAAQIAAAAQgCAZABAaIAAAAIACAiIAAAAQAGAFgCALIAAAAIgBAPIAAAAIAAA8IAAAAIAAA8IAAAAIAAA7IAAAAIAAA8IAAAAIABAqIAAAAQAEAFgCAJIAAAAIAAAMIAAAAIAAAlIAAAAQAHAYgGAgIAAAAQgEAcAGAcIAAAAQAQA9gSA4IAAAAQAXCEgKCKIAAAAQgBAagMAPIAAAAQAXAYgFAxIAAAAQgEArAAArIAAAAIAAFVIAAAAQAACqADCrIAAAAQABAtgDAsIAAAAIADAIIAAAAIACAHIAAAAQADAOgDAPIAAAAQgBAJAAAJIAAAAIAAARIAAAAQADAGgBAIIAAAAIgCAFIAAAAIgBAvIAAAAIAAABIAAAAIACABIAAAAIAAAWIgYgFg");
	mask.setTransform(62.1,-6.2);

	// pro reflection
	this.instance_1 = new lib.proboxingjump();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.5,18.5,1,1,0,0,180);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AkkA+IB5gZIKYiMIBJgQIALgDIBOgQAkrBAIkhA9IgBAAIAAAAIhBAO");
	this.shape_1.setTransform(60.9,-124.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AbHAfIAAg8Mg2NAAA");
	this.shape_2.setTransform(-10.2,-147.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("ACrmXIgHh/IAAgJIgBg0IgJlCIAAgMIACg9ADBKSIgGADIgiAAIAYAGAVLOMIF8BTA2QHKIAjgBIC6AAIDPAAIDVAAIABAAIATAAIADgCA15HKIgXAAArBHTIg2gQIgKgDA66KVIgMAAA6mHKIEWAAACZKVItajC");
	this.shape_3.setTransform(-11.4,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("A7G4FMAAAAjxIAADLIAAJPMA2NAAAIAAiEIAAiBMAAAgrJ");
	this.shape_4.setTransform(-10.2,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#0066FD","#CCCCCC","#FFFFFF","#FFFFFF","#FFFFFF","#996600","#FFCC00"],[0,0.184,0.788,0.937,1,1,1],61.8,-6.7,61.8,-6.7).s().p("AJHUDQgqgGgegHIhlgWIh/gaQiIgbh8gbQiGgciIgaIAAAAQgHgBgDgEQg7gIg9gNQg8gMg5gRQgIABgNgBQgPgCACgJIAAgBIgLAEIgBAAIgFACIgiAAIAlgHIAAAAIABAAIAIgPIAAgxIgBgwQgCg5gBgtIgCh9IgEhrIgChCIgChGIgDhFQgDhLAChDQgIgrAAgmIgBhaQgBgggDgdIADgjQABgXgBgaQgBgsgDgiIgBgIIgBAAIgBgBIgBg0IgJlCQACABAEgCIABgBQACgFAAgEQAAgKgGgKIgBgqIgBggQgBglADghQgFgYgBgaIgDgxIgEhiIgFiDQgBgMgCgCIgBAAIgCgPIABAAIABAAIEgg9IACgBIAFgBIB5gZIALgCIBegSIBbgTICoghIB+gXIAIgCIABAAQBCgMA9gRIAAABIAWgBIAAgBQAUgEAWgIIACAAQALAAALgCIAMgEIAAADIABABQANAsAEAtQACAmgBAhIgDA3QgHBPAPA8QAEAPABAQQAEA1ABA5IABAoIAAAFIAAAoIAAAJIACA+IABBGQACADABAFQABANgFAJQADAfAAAfIABBNQABBEAAA1QADALgDAQIgBADIACACIABAAIABB2IAAAXQADABABAEQACAHAAAIIAAA8IAAAmIABAOQAAAUgBATIAAAaIAAA8IAAAlQAFAegFAdIABAXQAAAJgDAJIAECcIAABeIAABjIgCAAQAHAXgCAhIAAAcIACAHQABADAAACIAAALIgBAPQAAAKgDAHQACAhAAAsIACBOQABAYgBAbIgBA/IABBcQAAA3ADArIABAQQADATgHAPQgMgGgJgBgAglNVIAAABQgFAPgIACIAAACIgPAUIAAACQAwgvAtgzICfitQAMgMADgMIgCAAQgJAEgKAHQgBAAAAAAQgBAAgBAAQAAABgBAAQAAABAAAAIgQAdIgCABIgQALIgBABQgPAOgIAVIgCABQgPALgJAQIgCAAQgJABgGAOIgBAAQgCAHgEgEIgBACIgQAWIgCADQgGAOgHgEIAAACQgQAPgLAUIgCABQgSANgKAUIgBABIAAgBQgHAHgJACgAHuKdIABAAIACgBIgBgBgAHOJpIAAgBIgBAAIABABgACgJVIAAAAIAAAAgAh5GCQgZAegSAdQgOACgJAQIgGAKQgPATgPAJIgBABQgHAIgCAFIAAABQgSANgGAQIgBAAQgPAOgJAPQAAAGAFgDQAGgDAFgGQBKhVBThWQANgOAAgIIgDAAQgMAAgKALgAliI8QABAHADgDQApglAlgpQA9hFBAhDIAAgBIAjgjQApgqAsgnQAOgMgCgLIgCABQgPAKgJAIQgOAQgPAPQgRAQgLANQgWAUgVAWIgHAGQhUBShKBcIgCAAIgLALIgBABQgJALgMATIgCAAIgLAHgACNIJIAAgBIgBAAIABABgACeH8IgBACIABgCgAG3H5IACgBIAAAAIgCABgAD4HxIABABIABgBIgCAAgAFsEhQgjAVgTAlIAAAEQAAABAAAAQAAABABAAQAAAAAAAAQABgBAAAAQAZgiAdgeIgCABgAj/DlQghAlgcAaQAKgBAGgFQApgmAngnQBThTBVhRIBZhUIBShLIABAAIgBgEQgGADgJAAQgIAFgHAHIioCiQhVBQhRBVIgCAAQgEAGgEgCIAAABgAjcEHIAAABQgCADgJADIAAABQgKAMAKAAIA0g2ICnilIChifQgEAAgGgCIgBgBQgpAognApIAAgBQgmAngpAlIAAABQgGACADAEIgCABQgrAngmAtIgCABQgoAeggAvIgBgBIgBgBQgLAFgFANIgCAAQgLAEgIAPgABYlvIAAAAIAAgBIAAABgAhNtIIhHBHQhFBFhOA8IggAYQAJAHAMgIQAZgSAXgTICwicQAXgVAPgVIgDAAQgRAAgNAMgAghufIgCAAQgOAKgKAOQAAAAABAAQAAABAAAAQAAABAAAAQAAABgBABQgUAagdAbQgfAdgdAVIAAABIibCQIAAAEIAAACQAIgDAJgFQAIgGAIgIQA0gzA3gvQAwgqAvgtQAlgkAlgmIABgBIgCgBIgHgBIgLACgAAZxtQgEABgDAEQgiAxgrApQgqApgtAmQgYAUgPAVIgBAAQg1AngrAxIABABIA5gtIA6gxQBYhOBPhWQAKgLAMgKQAPgMgEgMIgGgBIgDAAgAB1v9QAGAHAIgBQAEAAAEgCIAJgFQBbhLBThSQAOgOgHgCQgBAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgJAJgHACIgBACQhKBPhXBKIgCAAIgFAAQgKAAgJAKgApfiwQAGgKACgNIABAAQAPAAAOgDIABA0g");
	this.shape_5.setTransform(61.8,-6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("Aa6WDIl7hSIAAgFQgEgdABgfIgBiBIAAhXIgBiCIgDg7QgDghAHgVQgHgsABguIAAhMIgBhrIgChtQAAg9gBguIgDhhIgBhGIAAh4IgBhuIgChWIgChkIgDh2QgBg+AAhVIgBgiQgCgggBg0QgBhHgChCQgDhMAAhNQAAgcgDgoQgEg4gBhSQgBgiADgkQABgYgEgRQgCgIgEgHIgDAAIgBgDIBPgRIhPARIgLACQgHgEgIADQglAKglAHIgmAFIAAABQhLAUhBAHIgBABQgCABgDAEQgbABgXAGIgxAMQg0AMg0AHIhlAWIh0AYIiEAbQiEAaiLAYQglAGgcANQgBAFAEAAIADAAIAAAFIAAAAIhBAOIBBgOIACAPQgDgCgEAJQAHA0ABA3IAABWQAAApACAfQAGBKAAA3QABA1AEAzIAEAAIABAMIAIFCQgNADgPAAIgCAAQgCANgGAKIAoAaIAAABIAAAIIAAgJIAAAJQgCA9gEA5IAAA9QAAAiABAZQAFBGABA7QABAlgCAoQgBAcAGASQAAAuACAnIAEBeIACA7IAECVQADBXAAA5IAABDQAAALgBAUQgCAmAIAeIgkAHItajBIgBAAIg1gQIgKgDIAKADIgBADIgDgBIAAADIgTAAIgBAAIjVAAIjPAAIi6AAIgjABIkWAAIgUAAMAAAgjwMA2NAAAIAAA9MAAAArIgAsbNuIABgBIATAAIgBABgA2FNuIgXAAIAjgBIAAABgA15NtIAAAAgAsDNog");
	this.shape_6.setTransform(-10.2,-9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#993300").s().p("A7GGPIAApOIAAjLIAUAAIEWAAIAXAAIAMAAIAAgBIC6AAIAAABIDPAAIAAgBIDVAAIAAABIATAAIABgBIAAgDIADABIgDACIADgCIA2AMIABAAINaDCIAXAGQAHAJARACQASABAOADQB3AYBxAZICBAcQAUAFALgDIABABIAJAEIC6AmID9AyIEBA1IABAAQACAGAHADIAAABQAGADAHgCQACgFAAgGIF7BTIANAAIAACBIAACEg");
	this.shape_7.setTransform(-10.2,117.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC9966").s().p("ACnBTIACgCIABABIgCABgAiohOIAAAAIgBACIABgCgAByhRIAAAAIgCABIACgBg");
	this.shape_8.setTransform(94.5,52);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AJXUSIAAgBQgHgEgCgFIgBAAIkBg1Ij9g0Ii5glIgJgFIgBgBQgLADgUgEIiBgdQhxgYh3gYQgOgDgSgCQgRgCgHgJIABAAIAKgGIAFgCIAAAAIAMgEIAAABQgCAJAPACQAMABAIgBQA6ARA8AMQA9ANA7AIQACAEAHABIAAAAQCJAaCFAcQB9AbCHAbICAAaIBkAWQAfAHAqAGQAJABALAGQAHgPgDgTIgBgQQgCgrgBg3IAAhcIAAg/QABgbgBgYIgBhOQgBgsgCghQAEgHAAgKIAAgPIAAgLQABgCgBgDIgDgHIABgcQACghgHgXIABAAIAAhjIAAheIgDicQACgJAAgJIAAgXQAFgdgGgeIAAglIAAg8IAAgaQACgTAAgUIgCgOIAAgmIABg8QAAgIgCgHQgBgEgDgBIAAgXIgCh2IgBAAIgBgCIABgDQADgQgDgLQAAg1gChEIgBhNQABgfgDgfQAFgJgCgNQAAgFgCgDIgChGIgBg/IAAgJIAAgnIAAgGIgBgnQgCg5gEg1QgBgQgEgPQgOg8AHhPIADg3QABghgDgmQgDgtgOgsIAMAAQADARAJATIABABIgBglIAHAAQAFAQgCAZQgDAkABAiQABBSAEA4QADAoAAAcQAABNADBMQACBCABBHQABA0ACAgIABAiQAABVABA+IADB2IACBkIACBWIABBvIAAB3IABBGIADBhQABAuAAA9IACBtIABBrIAABMQgBAuAHAsQgHAVADAhIADA7IABCCIAABXIABCBQgBAfAEAdIAAAEQAAAGgCAGIgFAAQgEAAgEgBgAopQQIAFgCgAonQJQgIgeACgmQABgUAAgLIAAhDQAAg5gDhXIgEiVIgCg7IgEheQgCgnAAguQgGgSABgcQACgogBglQgBg7gFhGQgBgZAAgiIAAg8QAEg6ACg9IAGB/IgGh/IACAAQAEAiABAsQAAAagBAXIgDAjQAEAdABAgIAABaQAAAmAIArQgCBDADBLIADBFIACBGIADBCIAEBrIACB9QAAAtADA5IABAwIgBAxIgIAPIAAAAIgBAAgAHFJbIAAAAIAAABIAAgBgACXJIIABAAIAAAAgACEH7IAAAAIAAABIAAgBgADvHkIACAAIAAABgApAiaIAAAAgABQl8IAAgBIAAABgApKolIACg9IgCA9IgFAAQgEg0gBg0QAAg3gGhKQgCgfAAgpIAAhWQgBg3gHg0QAFgJACACIAAAAQADACAAAMIAFCDIAFBiIACAxQABAaAFAYQgDAhACAlIABAgIAAAqQAHAKAAAJIgJAAgAplw3QAcgNAlgGQCLgYCEgaICEgbIB0gYIBkgWQA0gHA0gMIAxgMQAXgGAbgBQADgEACgBIABgBQBBgHBLgUIAAgBIAmgFIAQAAIAzAAQgLACgLAAIgCAAQgWAIgUAEIAAABIgXABIAAgBQg8ARhDAMIAAAAIgJACIh+AXIinAhIhcATIhdASIgLACIKXiNIqXCNIh5AZIgFABIgpAIIjFAoQgdAHgZACIAAAAIgDAAQgEAAABgFg");
	this.shape_9.setTransform(62.7,-5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#010101").s().p("AAwAJIAAgDIgBgKIACAAQAEAFACAIgAAYAJIAAgBIgBgCIgLADIgyAAIgQAAQAlgGAkgKQAJgDAGAFIhIAOIBIgOIACABIAAALIABACgAAigFIAAAAg");
	this.shape_10.setTransform(114,-136.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AgMWlIAAiBMAAAgrIIAZAAMAAAAtJIgZAAg");
	this.shape_11.setTransform(164.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pronounboxing2, new cjs.Rectangle(-185.9,-152.1,351.8,311.4), null);


// stage content:
(lib.pronoun_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48));

	// btn
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance = new lib.pronounheader();
	this.instance.parent = this;
	this.instance.setTransform(282,44);

	this.instance_1 = new lib.proisboxingsentence();
	this.instance_1.parent = this;
	this.instance_1.setTransform(306.7,361.2);

	this.instance_2 = new lib.Pronounboxing2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(284.5,184.7,0.98,0.98);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglAtQgCgCgBgDQgCgSAHgQQADgMAFgMIAEgHQAIgOAOgFQAYAAAJAXIAEAKIAFAUQABAGgFABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAgEgBgEIgFgQQgDgIgEgHQgJgMgNADIgCABIgCAAQgGAFgEAHIgHALIgCAJQgBAHgDAHQgFAMACANQABAEgCADIgCABIgCAAg");
	this.shape.setTransform(241.6,95.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AgLWmMAAAgtLIAXAAIAAFMIAAFMIAAFMIAAFMIAAFLIAAFMIAAFLIAAFMIAADtIgXAAg");
	this.shape_1.setTransform(455.4,168.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.UI}]}).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'BB27D7B4AB6E8F46B02D694AD1684B89',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_12b.mp3", id:"_12b"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_13c.mp3", id:"_13c"},
		{src:"sounds/_16a.mp3", id:"_16a"},
		{src:"sounds/_18b.mp3", id:"_18b"},
		{src:"sounds/_19b.mp3", id:"_19b"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/_9a.mp3", id:"_9a"},
		{src:"sounds/bgmusic_1.mp3", id:"bgmusic_1"},
		{src:"sounds/MenuPronoun.mp3", id:"MenuPronoun"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/scene_1wav.mp3", id:"scene_1wav"},
		{src:"sounds/hesheit.mp3", id:"hesheit"},
		{src:"sounds/himherit.mp3", id:"himherit"},
		{src:"sounds/i.mp3", id:"i"},
		{src:"sounds/me.mp3", id:"me"},
		{src:"sounds/nominative.mp3", id:"nominative"},
		{src:"sounds/objectis.mp3", id:"objectis"},
		{src:"sounds/objectivecase.mp3", id:"objectivecase"},
		{src:"sounds/objectsof.mp3", id:"objectsof"},
		{src:"sounds/replaces.mp3", id:"replaces"},
		{src:"sounds/subjectis.mp3", id:"subjectis"},
		{src:"sounds/subjectof.mp3", id:"subjectof"},
		{src:"sounds/substitutes.mp3", id:"substitutes"},
		{src:"sounds/them.mp3", id:"them"},
		{src:"sounds/they.mp3", id:"they"},
		{src:"sounds/us.mp3", id:"us"},
		{src:"sounds/we.mp3", id:"we"},
		{src:"sounds/you.mp3", id:"you"}
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
an.compositions['BB27D7B4AB6E8F46B02D694AD1684B89'] = {
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