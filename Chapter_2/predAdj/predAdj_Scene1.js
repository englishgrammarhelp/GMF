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


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ahvk/QBPgOAlgTQAbgNAuAAQBAAAAfAdQAJAIAMAMQAKAKANAAQALgBAVgSQAVgTAKAAQBGAAAoB8QAaBTADBPACijBIgIgIQAIAAArAIQAtAIANAFAA5hXQAagXAMgHAAUg2QAJANAHAAQALAAAOgiQAAgGgEgGQgQAOgVATQAAAAAAAAQgsAqgPAAIgIgEAD2iEQgKgGgCAAQgLACgJADQgBAAgBAAIgEAZQAFAAAQAEQARAAAAgcQAGACAHAFADUiFQgfAHgXAFAFeDGQAxgCApgaQAzghAAg3QAAgZgKgXQgSgrgygpQgFgEgGgEQgNgKgdgGQgUgFgFgRQgBgDgFg5QgDgsgVgfAg8lDQgKAEgmAFQgBAAgBAAQgdADgJAAQgcgIgKAAQhGAAgcAfQgLAMgTAgQgaAugPAWQgyA8geAmQg3BIAAA0QAAAqAmAeQAhAZAfAAQA6AABUhMQAKgIAIgIQA0gxATgjQATglAXhmQAHgiAfgeQAQgSAegXAgvhoQgFgHAAgKQAAgIAxgUQAwgVAQADAgKC1QAdAmgEgIAC/EYQgFAHgHAIQhABHhzAAQgXAAgpgdQgigZgRgVQgZgggGgsQgCgjgEg7QAQAMAEACAiYB5QgMgKgSgPQgggcgOgRAHNAqIAAAiAGBANQACADADATQABAHACABQACAAADgFAE9AwQASgRAAgVQgCgrgcAAQgiAAgqANQg6ASAAAgQAAAGAdAfQACACACACQAIAIAGAHQgKgFgIgOAFeDGQAGgMAAgLQAAgRgXhAQgKgdgGgRQgJAKgPAJQgkAVgcAAQgGAAgFgCAD/DKQAMgPAVgCQAKgCAMACAGKBDQAAARAEAVABrC+QAAAVAFAEACaBlIAAAiABOBIQAAAIAIAVAFeDGQgNAZgoAaQg2AhgrAAQgFgCgEAAQAbglAMgvQAIgiAAgoQAAgNgUgXACRDOQAJARAAAR");
	this.shape.setTransform(-3.4,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAoBvIgNgPIgEgEQgdgeAAgHQAAggA6gTQAqgLAiAAQAcAAABArQAAAUgRASQgKAKgPAJQgjAVgcAAIAAAAQgGAAgGgDgAidgcIABgBIAkghQAFAHAAAGQgPAhgLAAIAAAAQgHAAgJgMgAAfhTIAEgZIABAAIAUgFQADAAAKAGQAAAcgRAAQgRgEgEAAg");
	this.shape_1.setTransform(14.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9933").s().p("AAAFuQgXAAgpgdQgjgZgQgVQgZgggGgsIgGheQAQAMAEACQgEgCgQgMIgegZQgggcgOgRQA0gxATgjQATglAXhmQAHgiAfgeQAQgSAegXQgeAXgQASQgfAegHAiQgXBmgTAlQgTAjg0AxIgSAQQhUBMg6AAQgfAAghgZQgmgeAAgqQAAg0A3hIQAegmAyg8QAPgWAaguQATggALgMQAcgfBGAAQAKAAAcAIIAmgDIACAAQAmgFAKgEQgKAEgmAFIgCAAIgBgFQBPgOAlgTQAbgNAuAAQBAAAAfAdIAVAUQAKAKANgBQALAAAVgSQAVgTAKAAQBGAAAoB8QAaBTADBPIgGAIQAyApASAqQAKAYAAAZQAAA3gzAhQgpAagxACQAGgMAAgLQAAgRgXhAIgQguQASgRAAgVQgCgrgcAAQgiAAgqANQg6ASAAAgQAAAGAdAfQAIAOAKAEQAFADAGAAQAcAAAkgVQAPgJAJgKIAQAuQAXBAAAARQAAALgGAMQgNAZgoAZQg2AigrAAIgJgCQAbglAMgvQAIgiAAgoQAAgNgUgYQAUAYAAANQAAAogIAiQgMAvgbAlIgMAPQhABHhzAAIAAAAgACaDwIAAgBQAAgQgJgRQAJARAAAQIAAABgABwDXQgFgEAAgVQAAAVAFAEgAAPDUIAAgBIAAAAIAAAAIAAABIAAAAIAAAAIAAAAQgCgBgUgaIAAgBIgBgBIAAAAIgBgBIgBgBIABABIABABIAAAAIABABIAAABQAUAaACABIAAAAIAAAAIAAAAgAEgC5QgVACgMAPQAMgPAVgCIAEgBIAEAAIABAAIAAAAIALABIACAAIgCAAIgLgBIAAAAIgBAAIgEAAIgEABgACaCHIAAgigAGOBpQgEgVAAgRQAAARAEAVgABWBlQgIgVAAgIQAAAIAIAVgAHNBMIAAgigAGKAqQACAAABgDIABgBIAAAAIAAAAIAAAAIAAAAIgBABQgBADgCAAIAAABIgBAAIAAgBQgCAAgBgIIgFgVIAFAVQABAIACAAIAAABIABAAIAAgBgAgmgMIACAAIAAAAIABAAIAAAAIABgBIAJgEIABAAQALgHARgQIACgBIAAAAIABgBIAGgFIACgCIAAAAIACgCIABgBIACgCIgCACIgBABIgCACIAAAAIgCACIgGAFIgBABIAAAAIgCABQgRAQgLAHIgBAAIgJAEIgBABIAAAAIgBAAIAAAAIgCAAIgBAAIAAAAIgIgEIAIAEIAAAAIABAAgAA5hXIglAhIAAAAQAJANAHAAQALAAAOgiQAAgGgEgGQAagXAMgHQgMAHgaAXIAAAAgAFJicIAGA8QAFARAUAFQAdAGANAKIALAIIgLgIQgNgKgdgGQgUgFgFgRIgGg8QgDgsgVgfQAVAfADAsgADQhtQAFABAQAEQARAAAAgcQgKgGgCAAIgUAFIgCAAIg2AMIA2gMgAg0h5QAAAKAFAHQgFgHAAgKQAAgIAxgUIACgBIAAAAIABgBIABAAIACgBIACgBIAAAAIACgBIAAAAIAHgCIAAAAQAWgJANgCIAAAAIADAAIAAAAIABAAIAFgBIAAAAIADABIgDgBIAAAAIgFABIgBAAIAAAAIgDAAIAAAAQgNACgWAJIAAAAIgHACIAAAAIgCABIAAAAIgCABIgCABIgBAAIgBABIAAAAIgCABQgxAUAAAIIAAAAgAEDh9IgNgHIANAHgADNjBQAtAIANAFQgNgFgtgIQgrgIgIAAIAIAIIgIgIQAIAAArAIgAiYB5IAAAAgADUiFg");
	this.shape_2.setTransform(-3.4,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.4,-35,100.2,75.3);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAmkVIAHADAAokbQgCADgBADIABAAQABgEABgCgAAukkQgDAAgDAGQAAACAAABQACgFAEgEQALgMAUgKQAjgTAbALQAaAMAUBXQAUBZgUAtQjNDvgBACQgGAOArA0QArA1gMAcQgXA1hugwQgsgTgignQgrgxATgqQATguBHhrQBGhpAfhKQAYhIALgc");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().p("AhWEwQgsgTgignQgrgxATgqQATguBHhrQBGhpAfhKIAjhkIAHADIgHgDIACgGIAGgJQALgMAUgKQAjgTAbALQAaAMAUBXQAUBZgUAtIjODxQgGAOArA0QArA1gMAcQgMAcgkAAQghAAg0gXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-33.7,41,67.4);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AACmMQgCACgCADQgjAhhJBOQhcBjgCAOQAAAAAvB9QAvCGAAAzQgBBNAAAHQAHA6AmAfQAWATAzAbQA3AfAXADQA1AHAhgkQAageAHgyQAHgvg8gfQgigRgQgIQgdgOgNgNQADgZAQgbQAOgbAEgZQAEiBAGgtQAEgTAEgP");
	this.shape.setTransform(0,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().p("ABVGTQgXgDg3gfQgzgbgWgTQgmgfgHg6IABhUQAAgzgviGIgvh9QACgOBchjQBJhOAjghIAEgFQAIgDAKgFQANgHAIABIACABQgBAYAVAYQAcAgAFA1QABAQgCA8QADAeAQAPIgIAiQgGAtgECBQgEAZgOAbQgQAbgDAZQANANAdAOIAyAZQA8AfgHAvQgHAygaAeQgbAegqAAIgRgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-40.4,42.9,81.9);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgWjkQgHATADAFQAJAEghBNQgfBHgNATQgHAJgxA9QgvA/gLAeQgsB/CjA4QAyARAvgHQA8gJAQgtQASg1g+ggQgmgVgDgDQgSgOAGgSQACgGAagWQAqgjASgQQBahSAfhbQAYhGgCgiQgEg/hIgZQg2gTgsAXQgtAXgVA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().p("AhZE5Qijg4Ash/QALgeAvg/IA4hGQANgTAfhHQAhhNgJgEQgDgFAHgTQAVg9AtgXQAsgXA2ATQBIAZAEA/QACAigYBGQgfBbhaBSQgSAQgqAjQgaAWgCAGQgGASASAOIApAYQA+AggSA1QgQAtg8AJQgNACgOAAQgjAAgjgMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-33.5,45.7,67.1);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ajrh9QAJAsAdAuQABACACACQAmA+BSDdQAhAmBbgfQBPgbA5gxQAXgTASgzQASg2gQgTQgfgjgbADQgSADgZAZQgdAcgLAFQgWAJgXgaQgTgWguiBQgviCgLgNQgUgXgdgH");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().p("AhKD8QhSjdgmg+IgDgEQgdgugJgsQAQgRAOgdQAYgwAJgNQAHgLAagVIAKgIQAdAHAUAXQALANAvCCQAuCBATAWQAXAaAWgJQALgFAdgcQAZgZASgDQAbgDAfAjQAQATgSA2QgSAzgXATQg5AxhPAbQgpAOgcAAQglAAgSgVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-28.3,49.3,56.6);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABtDQQAXALAsAAQBHAAAlhiQAchIAAhTQAAhpgYgoQgcgxhRAAQhfAAgbAoQgBAAAAABQAAAAAAABQgBAAgBABQAAABAAAAIAAAAQgDAFgBAEABtDQQgcgNAAgcQAAgDABgHIAAgBQAFgUASg0QAYhJAAg7QAAgggRgpQgUgxgcgMAA2i4IAAAAQggADgfAJQgQAFgbAAQgZAAgSAUQgSAYgJAJQgQAQgtATQgsAKgdAIQggAKgOAMQAeAIAHAFQAMAJAAAcQAAAagGAOQgGALgPAQAhLhBQAJABAPAGQABAAAAAAIgBABIgHACIAAAAQgFAEAAAOQAAAJAJAIQAIAHAGAAQAJAAAOgcAhIACQgDgCgDgDQgHgLAAgVQAAgOAJgPQAAAAABgBIAAAAAAfgJQAPgTAAgMQAAgagYgWQgWgVgWAAQgQAAgXAZQgJAKgFAJIgBAAQgBAAgBAAIgHADAgyg6QAOAHATAKQAUANAcATQAAAAAAAAQgCADgCADQgDADgDADQgBAAgBABQgCADgDADQgLAKgIADAAfgJQAEACADADAgRiEIAMAAQAsgJAiAxAkugnQgJAJAAAKQAAAmAfA8QAMAZASAcQA8BiAjAAIA/gaIAhgOQBbgnAsAEAjTAsQAAAHgJAsAiDB+QAEAGAPAKQAOAJAJABAi+BNQADAjALAQAhZDSIASAAQADABAFABQANACAgAEQAuAGAUAAQAYAAAlgQAhLARQAVAaAQgB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiSgeQAAgKAJgJQAeAIAHAFQAMAJAAAcQAAAagGAOQgGALgPAQQgfg8AAgmgABugeQgJgIAAgJQAAgOAEgDIABgBIAHgCIABAAQAOAGATALQgOAbgJAAQgGAAgIgHg");
	this.shape_1.setTransform(-16.5,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBArIgXgGIgVgNIgFgGQgIgLAAgUQAAgNAJgPIABgBIAAAAQAKAAAPAHIAAAAIAAAAIgIADIAAAAQgFADAAAPQAAAJAKAHQAHAGAGAAQAJAAANgaQAWAMAbASIAAAAIgEAGIgGAHIgBACIgGAFQgFADgQAFQgNADgGAAIgCAAg");
	this.shape_2.setTransform(-2.7,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC9933").s().p("Aj/CDQgRgcgNgZQAQgQAFgLQAHgOAAgaQAAgcgMgJQgHgFgegIQANgMAhgKQAdgIAsgKQAtgTAPgQQAKgJARgYQASgUAaAAQAbAAAPgFQAfgJAggDIAAAAIAAAAIgEAJIAEgJIAAAAIADgDIAAgBQAbgoBfAAQBRAAAdAxQAXAoAABpQAABTgcBIQglBihGAAQgsAAgYgLQgcgNAAgcIACgLIAAAAQAFgUASg0QAYhJAAg7QAAgggRgpQgUgxgcgMQAcAMAUAxQARApAAAgQAAA7gYBJQgSA0gFAUIgHgCIAHACIgCALQAAAcAcANQglAQgYAAQgUAAgugGIgtgGIgHgCIgTAAIgDgHIAhgOIADgBIAPgGIAAAAQBEgbAngBIACAAIAAAAIAHAAIABAAIgBAAIgHAAIAAAAIgCAAQgnABhEAbIAAAAIgPAGIgDABIghAOIg+AaQgjAAg9higAh1COQAPAJAIABQgIgBgPgJQgOgKgEgGQAEAGAOAKgAi0CAQgMgQgCgjQACAjAMAQgAjhBfQAKgsAAgHQAAAHgKAsgAgsAqIACAAIgCAAIAAAAIgBAAQgOgBgSgUIAAgBIgBgCIgCgBIACABIABACIAAABQASAUAOABIABAAIAAAAgAgKAXQAJgDAKgKIAGgGIABgBIAGgGIAFgGIgBAAQgagTgWgNQgSgKgPgHIAAAAQgPgGgKgBQAGgJAJgKQAXgZAQAAQAWAAAWAVQAXAWAAAaQAAAMgOATIAHAFIgHgFQAOgTAAgMQAAgagXgWQgWgVgWAAQgQAAgXAZQgJAKgGAJIAAAAIgCAAIgHADIAHgDIACAAIAAAAIAAAAIAAABQgJAPAAAOQAAAVAHALIAFAFIAVANIAXAGQAGABAQgEQAPgFAFgDQgKAKgJADgABFhcQgegpgkgBIgBAAIAAAAIgLACIAAAAIgBAAIgLAAIALAAIABAAIAAAAIALgCIAAAAIABAAQAkABAeApgABOCcgAhQhBg");
	this.shape_3.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-23.9,64.4,47.8);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AB6DcQAaALAxAAQBPAAAphnQAfhNAAhXQAAhugagrQggg0haAAQhqAAgfArQAAAAAAAAAA8jCIAAAAQgkADgiAKQgSAEgeAAQgcABgVAVQgTAagLAJQgRAQgyAVQgyAKggAJQgkAKgPANQgKAJAAAKQAAAoAiBAAB6DcQgggOAAgeQAAgDACgIIAAAAQAGgVAUg4QAahMAAg/QAAgigTgrQgWgzgfgNAgTiMIANAAQAxgIAnAzAgTgrQgQAdgKAAQgGAAgJgHQgLgIAAgKQAAgPAGgEIAAAAIAJgDQAQAHAVALQAXANAeAUQABAAAAAAQAEADAEACAhihEIADAAIAIAAQABAAABAAIABAAQALAAAQAHQABAAAAAAAgihJIgVAHAlRgpQAhAIAIAFQANAKAAAeQAAAbgHAPQgGAMgRAQQAOAaATAeQBEBoAnAAIBGgcIAlgOQBmgqAxAEAjUBRQADAlANARAjsAvQAAAHgKAvAhkDeIAVAAQACAAAGABQAPADAkAEQAzAGAWABQAcgBApgQAiSCEQAEAHAQALQARAJAJAB");
	this.shape.setTransform(34.8,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AijggQAAgKAKgKQAiAIAHAGQAOAJAAAeQAAAcgIAPQgGALgRARQgihAAAgogAB7gfQgLgJAAgJQAAgPAGgEIAAAAIAJgDQAQAGAVAMQgQAdgKAAQgGAAgJgHg");
	this.shape_1.setTransform(16.4,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9933").s().p("AkdCKQgUgegNgZQARgRAGgMQAHgPAAgbQAAgegNgKQgIgFghgIQAPgNAkgKQAggJAygKQAygVARgQQALgJATgaQAUgVAdAAQAeAAARgFQAjgKAkgDIAAAAIADgDIAAgBQAfgrBqAAQBaAAAgA0QAaArAABuQAABXgfBNQgpBnhPAAQgxAAgbgLQgfgOAAgeIAAgBIACgKIAAAAQAGgVAUg4QAahMAAg/QAAgigTgrQgWgzgfgNQAfANAWAzQATArAAAiQAAA/gaBMQgUA4gGAVIgIgCIAIACIgCAKIAAABQAAAeAfAOQgoAQgcABQgWgBg0gGIgygHIgIgBIgVAAIgDgIIAkgOIADgCIAHgCIACgBIADgBIAAAAQBKgdAsgDIAJAAIAAAAIAJAAIAAABIAAgBIgJAAIAAAAIgJAAQgsADhKAdIAAAAIgDABIgCABIgHACIgDACIgkAOIhGAcQgnAAhEhogAiDCVQAQAKAKABQgKgBgQgKQgQgKgEgHQAEAHAQAKgAjJCHQgNgRgDglQADAlANARgAj7BlQAKgvAAgHIAAAAIAAAAQAAAHgKAvgAAdgKIABAAIAIAFIgIgFIgBAAQgdgUgYgNQgVgLgQgHIgBAAQgRgHgKAAIgBAAIgCAAIgIAAIgDAAIADAAIAIAAIACAAIABAAQAKAAARAHIABAAIgJADIgBAAQgFAEAAAPQAAAKALAIQAJAHAGAAQAKAAAQgdQAYANAdAUgAg8hCIAVgHgABNhhIgBgBIgBgBQgggqgoAAIAAAAIAAAAIgOABIgNAAIANAAIAOgBIAAAAIAAAAQAoAAAgAqIABABIABABgABXClgAg9g9IAAAAg");
	this.shape_2.setTransform(35.4,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgNg6QgPALgKAIQgUAQgDAIAA7ApQADgDAAgFQAAgBAAgBQAAg0gVgRAAQA4QgFADgQAAQgRAAgUgP");
	this.shape_3.setTransform(30,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AB6DcQAaALAxAAQBPAAAphnQAfhNAAhXQAAhugagrQggg0haAAQhqAAgfArQAAAAAAAAAA8jCIAAAAQgkADgiAKQgSAEgeAAQgcABgVAVQgTAagLAJQgRAQgyAVQgyAKggAJQgkAKgPANQgKAJAAAKQAAAoAiBAAB6DcQgggOAAgeQAAgDACgIIAAAAQAGgVAUg4QAahMAAg/QAAgigTgrQgWgzgfgNAgTiMIANAAQAxgIAnAzAhkgpQALAAAQAHQABAAAAAAQAQAHAVALQAWAMAaARQADACACABQABAAAAAAQAEADAEACAlRgpQAhAIAIAFQANAKAAAeQAAAbgHAPQgGAMgRAQQAOAaATAeQBEBoAnAAIBGgcIAlgOQBmgqAxAEAjsAvQAAAHgKAvAjUBRQADAlANARAhkDeIAVAAQACAAAGABQAPADAkAEQAzAGAWABQAcgBApgQAiSCEQAEAHAQALQARAJAJAB");
	this.shape_4.setTransform(34.8,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfgqQAAgKAKgJQAgAIAIAFQANAKAAAfQAAAagHAPQgGALgRARQghg/AAgpg");
	this.shape_5.setTransform(3.2,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9933").s().p("AkdCKQgUgegNgZQARgRAGgMQAHgPAAgbQAAgegNgKQgIgFghgIQAPgNAkgKQAggJAygKQAygVARgQQALgJATgaQAUgVAdAAQAeAAARgFQAjgKAkgDIAAAAIADgDIAAgBQAfgrBqAAQBaAAAgA0QAaArAABuQAABXgfBNQgpBnhPAAQgxAAgbgLQgfgOAAgeIAAgBIACgKIAAAAQAGgVAUg4QAahMAAg/QAAgigTgrQgWgzgfgNQAfANAWAzQATArAAAiQAAA/gaBMQgUA4gGAVIgIgCIAIACIgCAKIAAABQAAAeAfAOQgoAQgcABQgWgBg0gGIgygHIgIgBIgVAAIgDgIIAkgOIADgCIAHgCIACgBIADgBIAAAAQBKgdAsgDIAJAAIAAAAIAJAAIAAABIAAgBIgJAAIAAAAIgJAAQgsADhKAdIAAAAIgDABIgCABIgHACIgDACIgkAOIhGAcQgnAAhEhogAiDCVQAQAKAKABQgKgBgQgKQgQgKgEgHQAEAHAQAKgAjJCHQgNgRgDglQADAlANARgAj7BlQAKgvAAgHIAAAAIAAAAQAAAHgKAvgAg6AnQAPAAAGgDQgGADgPAAQgSAAgVgPQAVAPASAAgAANAQIABAAIAIAFIgIgFIgBAAIgFgDIAAgCQAAg0gUgRQAUARAAA0IAAACQgagRgWgMQgVgLgQgHIgBAAQgRgHgKAAQAKAAARAHIABAAQAQAHAVALQAWAMAaARQAAAFgCADQACgDAAgFIAFADgAhcg7QgVAQgCAIQACgIAVgQIAZgTIgZATgABNhhIgBgBIgBgBQgggqgoAAIAAAAIAAAAIgOABIgNAAIANAAIAOgBIAAAAIAAAAQAoAAAgAqIABABIABABgABXClgAAIANIAAAAg");
	this.shape_6.setTransform(35.4,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AB6DcQAaALAxAAQBPAAAphnQAfhNAAhXQAAhugagrQggg0haAAQhqAAgfArQAAAAAAAAAA8jCIAAAAQgkADgiAKQgCAAgCABQgCACgCABQgQAEgbAAQgZAAgSAUQgSAZgJAJQgKAKgYAIQgQAIgXAKQgyAKggAJQgkAKgPANQAhAIAIAFQANAKAAAeQAAAbgHAPQgGAMgRAQQAOAaATAeQBEBoAnAAIBGgcIAlgOQBmgqAxAEAB6DcQgggOAAgeQAAgDACgIIAAAAQAGgVAUg4QAahMAAg/QAAgigTgrQgWgzgfgNABShhQghgsgqAAQgKABgLACIgMAAAgOi0QgRADgbAAQgcABgVAVQgTAagLAJQgJAJgTAKAhUhGIAAAAQAFgJAJgKQAXgaAQAAQAWAAAWAVQAYAXAAAZQAAAMgPATAhAhQQAAACAAABQABAFAFAEQAGAEAIAAQAEAAADgCQADgBADgCQAGgFgBgHQAAgHgGgFQgGgEgIAAQgIAAgFAFQgGAGABAGgAlRgpQgKAJAAAKQAAAoAiBAAjsAvQAAAHgKAvAjUBRQADAlANARAhUALQAVAbAQgCAiSCEQAEAHAQALQARAJAJABAhkDeIAVAAQACAAAGABQAPADAkAEQAzAGAWABQAcgBApgQ");
	this.shape_7.setTransform(34.8,24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIBBIgYgGIgUgMIgGgGQgHgLAAgVIAAgBQAAgMAJgPIABgBIAAAAQAFgJAJgKQAXgaAQAAQAVAAAXAVQAYAXAAAYQAAANgPATIgEAFIgFAGIgBABIgCACIgFAFIgDACIgSAGQgNAEgFAAIgDgBgAgegqQgGAGABAGIAAADQABAFAFAEQAGAEAIAAIAHgBIAGgEQAFgFgBgHQAAgHgFgFQgGgEgIAAQgIAAgFAFg");
	this.shape_8.setTransform(31.9,19.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiggOQAAgKAKgJQAiAIAIAFQANAKAAAeQAAAbgHAPQgGALgSARQgihAAAgogACAg8QgFgEgBgFIAAgDQAAgGAFgGQAGgFAIAAQAIAAAGAEQAGAFAAAHQAAAHgFAFIgHADIgHACIgBAAQgHAAgGgEg");
	this.shape_9.setTransform(16.1,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC9933").s().p("AkdCKQgUgegNgZQARgRAGgMQAHgPAAgbQAAgegNgKQgIgFghgIQAPgNAkgKQAggJAygKQAXgKAQgIQATgKAJgJQALgJATgaQAUgVAdAAQAbAAAQgEQgBACgCABQgQAEgbAAQgaAAgSAUQgRAZgKAJQgJAKgYAIQAYgIAJgKQAKgJARgZQASgUAaAAQAbAAAQgEQACgBABgCIAEgBQAjgKAkgDIAAAAIADgDIAAgBQAfgrBqAAQBaAAAgA0QAaArAABuQAABXgfBNQgpBnhPAAQgxAAgbgLQgfgOAAgeIAAgBIACgKIAAAAQAGgVAUg4QAahMAAg/QAAgigTgrQgWgzgfgNQAfANAWAzQATArAAAiQAAA/gaBMQgUA4gGAVIgIgCIAIACIgCAKIAAABQAAAeAfAOQgoAQgcABQgWgBg0gGIgygHIgIgBIgVAAIgDgIIAkgOIADgCIAHgCIACgBIADgBIAAAAQBKgdAsgDIAJAAIAAAAIAJAAIAAABIAAgBIgJAAIAAAAIgJAAQgsADhKAdIAAAAIgDABIgCABIgHACIgDACIgkAOIhGAcQgnAAhEhogAiDCVQAQAKAKABQgKgBgQgKQgQgKgEgHQAEAHAQAKgAjJCHQgNgRgDglQADAlANARgAj7BlQAKgvAAgHIAAAAIAAAAQAAAHgKAvgAg2AkIACAAIgCAAIAAAAIgBAAQgNAAgRgTIgCgDIgBgBIgCgCIACACIABABIACADQARATANAAIABAAIAAAAgAhLhZQgJAKgGAJIAAAAIAAABQgJAPAAANIAAAAQAAAWAHALIAGAFIAUAMIAXAGQAGABARgEIASgGIACgCIAFgEIABgCIABgBIAGgGIAEgFQAPgUAAgMQgBgZgXgXQgWgVgWAAQgQAAgXAagABNhhIgFgGQgfglgmgBIAAAAIgCAAIgVADIgLAAIALAAIAVgDIACAAIAAAAQAmABAfAlIAFAGIAAAAgABXClg");
	this.shape_10.setTransform(35.4,24.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AgtgcQgCACgCACQAAAAgBABQAAAIALALQALAKAHAAQAPAAgBgGQALgBgEgLQgCgEgCgDQARAKAGADQAOAGAKAUQAFAMADAGAgkglQAOAIAKAGQAEACAEAC");
	this.shape_11.setTransform(33,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AB6DcQAaALAxAAQBPAAAphnQAfhNAAhXQAAhugagrQggg0haAAQhqAAgfArQAAAAAAAAAA8jCIAAAAQgkADgiAKQgBAAAAAAQgCABgCAAQAAABgBAAQgPAEgbAAQgVAAgQANQgFAEgEAFQgSAZgJAJQgCABgBABQgKAIgRAGQgCABgCABQgQAIgXAKQgyAKggAJQgkAKgPANQgKAJAAAKQAAAoAiBAAB6DcQgggOAAgeQAAgDACgIIAAAAQAGgVAUg4QAahMAAg/QAAgigTgrQgWgzgfgNAgPi0QAAAAABAAQgRADgbAAQgcABgVAVQgTAagLAJQgJAJgTAKAgLi1QgCAAgBABABShhQgggrgpgBQAAAAAAAAQgBAAgBAAQgJgBgKACIgLAAAhfiiQgEAEgDADQgRAZgKAJQgCACgDACAhPgFQgDgCgCgEQgHgKAAgWQAAgNAJgPQAAgBAAAAIAAAAQAFgJAJgJAhAhfQAFgFAFgEQAAgBABAAQAOgMALAAQAWAAAWAVQAXAXAAAZQAAAJgHALQgDAFgEAGQgCADgDADQgDAEgDADQAAABgBABQgDACgDACQgKALgJADAlRgpQAhAIAIAFQANAKAAAeQAAAbgHAPQgGAMgRAQQAOAaATAeQBEBoAnAAIBGgcIAlgOQBmgqAxAEAjUBRQADAlANARAjsAvQAAAHgKAvAhSAJQAWAbAQgCAiSCEQAEAHAQALQARAJAJABAhkDeIAVAAQACAAAGABQAPADAkAEQAzAGAWABQAcgBApgQ");
	this.shape_12.setTransform(34.8,24.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AikgKQAAgLAKgJQAiAIAIAGQANAJAAAeQAAAcgHAOQgHAMgRARQgihAAAgogAB9g8QgLgLAAgIIABgBIAEgEIAJgJIAYAOIAIAEIAEAIQAFAKgMABQABAHgPAAQgHAAgLgLg");
	this.shape_13.setTransform(16.5,23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFA0IgXgGIgVgNIgFgGQgHgLAAgUQAAgNAJgPIAAgBIAAAAQAFgJAJgJQAAAIALALQALALAGAAQAOAAgBgHQAMgBgFgLIgEgHIAYANQAPAHAJAUIAIARIgHALIgFAGIgGAHIgBACIgGAFIgBABQgFADgPAEQgNADgFAAIgDAAg");
	this.shape_14.setTransform(31.8,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC9933").s().p("AkdCKQgUgegNgZQARgRAGgMQAHgPAAgbQAAgegNgKQgIgFghgIQAPgNAkgKQAggJAygKQAXgKAQgIQATgKAJgJQALgJATgaQAUgVAdAAQAbAAAQgEIADgBIABAAQAjgKAkgDIAAAAIADgDIAAgBQAfgrBqAAQBaAAAgA0QAaArAABuQAABXgfBNQgpBnhPAAQgxAAgbgLQgfgOAAgeIAAgBIACgKIAAAAQAGgVAUg4QAahMAAg/QAAgigTgrQgWgzgfgNQAfANAWAzQATArAAAiQAAA/gaBMQgUA4gGAVIgIgCIAIACIgCAKIAAABQAAAeAfAOQgoAQgcABQgWgBg0gGIgygHIgIgBIgVAAIgDgIIAkgOIADgCIAHgCIACgBIADgBIAAAAQBKgdAsgDIAJAAIAAAAIAJAAIAAABIAAgBIgJAAIAAAAIgJAAQgsADhKAdIAAAAIgDABIgCABIgHACIgDACIgkAOIhGAcQgnAAhEhogAiDCVQAQAKAKABQgKgBgQgKQgQgKgEgHQAEAHAQAKgAjJCHQgNgRgDglQADAlANARgAj7BlQAKgvAAgHIAAAAIAAAAQAAAHgKAvgAgzAiIACAAIgCAAIAAAAIgCAAQgNgBgQgSIgBgCIgBAAIgBgBIgBgCIgBgBIABABIABACIABABIABAAIABACQAQASANABIACAAIAAAAgAgRAQQAJgDAKgLIAGgEIABgCIAGgHIAEgFIAIgMIgIgSQgKgUgNgHIgYgNIgIgFIgXgNIABgBQAOgMAKAAQAXAAAVAVQAYAXAAAZQAAAJgHALQAHgLAAgJQAAgZgYgXQgVgVgXAAQgKAAgOAMIgBABIgKAJIgEAEIgBABQgIAJgFAJIAAAAIgBABQgIAPgBANQABAWAGAKIAGAGIAUAMIAYAGQAGABAQgEQAPgEAEgDIABgBQgKALgJADgAAEiNQApABAgArQgggrgpgBIAAAAIgDAAIgCAAIgCAAIgBAAIAAAAIgNABIgMAAIAMAAIANgBIAAAAIABAAIACAAIACAAIADAAIAAAAgAimhnIgEACIAEgCQARgGAKgHQgKAHgRAGgAiLh0IAFgFQAJgJASgZIAHgGIgKAIQgRAZgKAJIgCADIAAAAgAgUizIgBAAQgQAEgbAAQgUAAgQAOQAQgOAUAAQAbAAAQgEIABAAIAAgBIAAABgAgUizIADgCIgDACgABXClgAiLh0IAAAAgAiJh3QAKgJARgZIAKgIIgHAGQgSAZgJAJIgFAFIACgDg");
	this.shape_15.setTransform(35.4,24.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AB6DcQAaALAxAAQBPAAAphnQAfhNAAhXQAAhugagrQggg0haAAQhqAAgfArQAAAAAAAAAA8jCIAAAAQgkADgiAKQgBAAAAAAQgCABgCAAQAAABgBAAQgPAEgbAAQgVAAgQANQgFAEgEAFQgSAZgJAJQgCABgBABQgKAIgRAGQgCABgCABQgQAIgXAKQgyAKggAJQgkAKgPANQgKAJAAAKQAAAoAiBAAB6DcQgggOAAgeQAAgDACgIIAAAAQAGgVAUg4QAahMAAg/QAAgigTgrQgWgzgfgNAgPi0QAAAAABAAQgRADgbAAQgcABgVAVQgTAagLAJQgJAJgTAKAgLi1QgCAAgBABABShhQgggrgpgBQAAAAAAAAQgBAAgBAAQgJgBgKACIgLAAAhfiiQgEAEgDADQgRAZgKAJQgCACgDACAg2hoQAAgBABAAQAOgMALAAQAWAAAWAVQAXAXAAAZQAAAJgHALAhPgFQgDgCgCgEQgHgKAAgWQAAgNAJgPQAAgBAAAAIAAAAQAFgJAJgJQAAgBABAAQABgCACgCQAFgFAFgEQANAIALAFQAEADADACQASAKAFADQAPAHAJAUQAFAMADAGQgDAFgEAGQgCADgDADQgDAEgDADQAAABgBABQgDACgDACQgKALgJADAhEhaQAAAIALALQALALAGAAQAPAAgBgHQAMgBgFgLQgCgEgCgDAlRgpQAhAIAIAFQANAKAAAeQAAAbgHAPQgGAMgRAQQAOAaATAeQBEBoAnAAIBGgcIAlgOQBmgqAxAEAjUBRQADAlANARAjsAvQAAAHgKAvAhSAJQAWAbAQgCAiSCEQAEAHAQALQARAJAJABAhkDeIAVAAQACAAAGABQAPADAkAEQAzAGAWABQAcgBApgQ");
	this.shape_16.setTransform(34.8,24.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC9933").s().p("AkdCKQgUgegNgZQARgRAGgMQAHgPAAgbQAAgegNgKQgIgFghgIQAPgNAkgKQAggJAygKQAXgKAQgIQATgKAJgJQALgJATgaQAUgVAdAAQAbAAAQgEIADgBIABAAQAjgKAkgDIAAAAIADgDIAAgBQAfgrBqAAQBaAAAgA0QAaArAABuQAABXgfBNQgpBnhPAAQgxAAgbgLQgfgOAAgeIAAgBIACgKIAAAAQAGgVAUg4QAahMAAg/QAAgigTgrQgWgzgfgNQAfANAWAzQATArAAAiQAAA/gaBMQgUA4gGAVIgIgCIAIACIgCAKIAAABQAAAeAfAOQgoAQgcABQgWgBg0gGIgygHIgIgBIgVAAIgDgIIAkgOIADgCIAHgCIACgBIADgBIAAAAQBKgdAsgDIAJAAIAAAAIAJAAIAAABIAAgBIgJAAIAAAAIgJAAQgsADhKAdIAAAAIgDABIgCABIgHACIgDACIgkAOIhGAcQgnAAhEhogAiDCVQAQAKAKABQgKgBgQgKQgQgKgEgHQAEAHAQAKgAjJCHQgNgRgDglQADAlANARgAj7BlQAKgvAAgHIAAAAIAAAAQAAAHgKAvgAgzAiIACAAIgCAAIAAAAIgCAAQgNgBgQgSIgBgCIgBAAIgBgBIgBgCIgBgBIABABIABACIABABIABAAIABACQAQASANABIACAAIAAAAgAgRAQQAJgDAKgLIAGgEIABgCIAGgHIAEgFIAIgMIgIgSQgKgUgNgHIgYgNIgIgFIgXgNIgKAJIgEAEIgBABQgIAJgFAJIAAAAIgBABQgIAPgBANQABAWAGAKIAGAGIAUAMIAYAGQAGABAQgEQAPgEAEgDIABgBQgKALgJADgAAbgcQAHgLAAgJQAAgZgYgXQgVgVgXAAQgKAAgOAMIgBABIABgBQAOgMAKAAQAXAAAVAVQAYAXAAAZQAAAJgHALgAAEiNQApABAgArQgggrgpgBIAAAAIgDAAIgCAAIgCAAIgBAAIAAAAIgNABIgMAAIAMAAIANgBIAAAAIABAAIACAAIACAAIADAAIAAAAgAimhnIgEACIAEgCQARgGAKgHQgKAHgRAGgAhuiZQgRAZgKAJIgCADIAFgFQAJgJASgZIAHgGIgHAGQgSAZgJAJIgFAFIACgDQAKgJARgZIAKgIIgKAIgAgUizIgBAAQgQAEgbAAQgUAAgQAOQAQgOAUAAQAbAAAQgEIABAAIAAgBIAAABgAgUizIADgCIgDACgABXClg");
	this.shape_17.setTransform(35.4,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},6).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},3).to({state:[{t:this.shape_17},{t:this.shape_13},{t:this.shape_14},{t:this.shape_16}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,71.7,50.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7FE5").s().p("AhMB/QgTgRABg1QgBgWAEgsQADgsAAgWIgCgRIgCgSQAAgZAYAAQAHAAAGAEQATgEASgDQARgCAPAAQApAAAZAJQAPAGABAPQAAAJgHAHQgGAHgKAAIgHgBQgbgHgZAAQgNAAgNACQgOACgRAEIgBBBIBAgGIAogDQAKAAAHAGQAHAHAAAKQAAATgWACIgnAEIhGAGIgBAiQAAAgAEAFQABACAUAAIAeAAIAegBIALgBIAJgBQAKAAAGAGQAIAGAAALQAAASgTAEQgRADgzAAQg2AAgQgOg");
	this.shape.setTransform(477.7,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7FE5").s().p("AgjB1QgVgwgYhaIgPgtQgIgfgBgMQABgKAGgGQAIgGAJAAQAQAAAGARIAHAcIAQA2QANAuAMAlIAmhkIAOgnQAKgYALgNQAHgIALAAQAJAAAIAHQAGAGABAKQAAAGgFAHQgJANgIASIgLAhIgtBxQgIAVgLAUQgHANgMAAQgSAAgGgRg");
	this.shape_1.setTransform(455.4,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7FE5").s().p("AhOB4QgHgGABgKQAAgJAGgHQAHgGALAAQAMAAAUgDIAAhLQAAgsACgpIgkABQgKAAgGgGQgHgHABgJQgBgKAHgGQAFgGAKgBIAwgBQAfAAAxAHQAVADAAAUQgBALgHAGQgHAFgIAAQgHAAgkgFQgCAfgBAxIAABLIAtgBQAKAAAHAHQAHAGAAAKQgBAJgGAHQgHAGgKAAIgcABIgdAAQgLAAgVADQgXADgLAAQgLAAgGgHg");
	this.shape_2.setTransform(434.3,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7FE5").s().p("AgPB4QgIgGAAgKIABgHIABgHIgBgXIgBgXQAAgXgEglIgEg8IgJAAQglAAgWgFQgSgFAAgRQAAgIAGgHQAHgIALABIAaADIAbABIAeAAIAdAAIAmABIAmACQAKAAAHAHQAGAGAAAKQAAAJgGAHQgHAGgKAAIgogCQgbgCgOABIAFBDQADAqAAAYIACARIABARQAAAMgGAKQgGANgNAAQgIAAgHgGg");
	this.shape_3.setTransform(413.5,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF7FE5").s().p("AhJBlQgZgaAAgkQAAg2Axg6QApgxAqAAIANAAIAKACQAIgHAKAAQARAAAEATQADAOAAATQAAAIgFAHQgGAJgMAAQgPAAgHgQQgEgHgDgCQgCgBgLAAQgVAAgaAgQgnAtAAAnQAAASANANQAMANARAAQAPAAARgIIAZgRQANgIAHAAQAKAAAGAHQAHAHAAAJQAAAJgJAIQgtAmguAAQgmAAgZgbg");
	this.shape_4.setTransform(391.3,26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7FE5").s().p("AhMB/QgTgRABg1QAAgWADgsQADgsAAgWIgCgRIgBgSQgBgZAYAAQAHAAAGAEQATgEASgDQARgCAPAAQApAAAZAJQAPAGABAPQAAAJgHAHQgGAHgKAAIgHgBQgbgHgZAAQgNAAgNACQgOACgRAEIgBBBIBAgGIAogDQAKAAAHAGQAHAHgBAKQABATgWACIgnAEIhGAGIgBAiQAAAgAEAFQACACASAAIAfAAIAegBIAKgBIAKgBQAKAAAGAGQAIAGAAALQAAASgTAEQgRADgzAAQg2AAgQgOg");
	this.shape_5.setTransform(370.5,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF7FE5").s().p("AhHByQgigYAAgfQAAgaAXAAQAXAAAAAZQAAAKARALQARALAPAAQAGAAACgVIADg0QADglAAg5IgBgKIgDAAIgTAAIgUgBQgKAAgGgGQgIgHAAgJQAAgXAeAAIARAAIAQABIAfgCIAfgBQAsAAAAAZQAAAJgGAGQgHAIgKAAIgJgBIgLAAIgNAAIAAALQAAB3gRA2QgMAogfgBQgfABgegWg");
	this.shape_6.setTransform(348.3,27.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF7FE5").s().p("AgzCGQgUgFgLgHQgJAAgHgGQgGgHAAgJIACgyIABgyIgBg2IAAg3QAAgJAIgJQAJgJAKAAQAFAAAWAKIAfAOQAvAQAjAhQApAngBAuQABAdgOAaQgOAagZAQQgcASgwAAQgMAAgQgDgAg5BUQAGAEAJADQAIACALAAQAiAAAQgKQAOgKAJgQQAJgQAAgSQAAgogwgeQgPgKg1gWg");
	this.shape_7.setTransform(325.3,26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF7FE5").s().p("ABUB9QgNgBgNgeQgJgUgGgZQgMACgcABQgZACgOADQgIASgTAlQgHAMgNAAQgJAAgHgHQgIgGAAgJQAAgJAZgxQgDgFABgEQAAgIAQgFQAXgoAdgrQAog/AKAAQASAAAGAWIALA1QAKAwAPA8IAIAWQAGAOAAAIQAAAJgHAHQgHAGgIAAIgCAAgAgMAPIAWgCIAYgCIgLg3IgjA7g");
	this.shape_8.setTransform(299.8,26.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF7FE5").s().p("AhMB/QgTgRABg1QgBgWAEgsQADgsAAgWIgCgRIgCgSQAAgZAYAAQAHAAAGAEQATgEASgDQARgCAPAAQApAAAZAJQAPAGABAPQAAAJgHAHQgGAHgKAAIgHgBQgbgHgZAAQgNAAgNACQgPACgPAEIgCBBIBAgGIAogDQAKAAAHAGQAHAHAAAKQAAATgWACIgnAEIhGAGIgBAiQAAAgAEAFQABACAUAAIAdAAIAggBIAKgBIAJgBQAJAAAIAGQAHAGAAALQAAASgTAEQgQADg0AAQg2AAgQgOg");
	this.shape_9.setTransform(262.7,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF7FE5").s().p("AgPB4QgIgGAAgKIABgHIABgHIgBgXIgBgXQAAgXgEglIgEg8IgJAAQglAAgWgFQgSgFAAgRQAAgIAGgHQAHgIALABIAaADIAbABIAeAAIAdAAIAmABIAmACQAKAAAHAHQAGAGAAAKQAAAJgGAHQgHAGgKAAIgogCQgbgCgOABIAFBDQADAqAAAYIACARIABARQAAAMgGAKQgGANgNAAQgIAAgHgGg");
	this.shape_10.setTransform(240,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF7FE5").s().p("ABUB9QgNgBgNgeQgJgUgGgZQgMACgcABQgZACgOADQgIASgTAlQgHAMgNAAQgJAAgHgHQgIgGAAgJQAAgJAZgxQgDgFABgEQAAgIAQgFQAXgoAdgrQAog/AKAAQASAAAGAWIALA1QAKAwAPA8IAIAWQAGAOAAAIQAAAJgHAHQgHAGgIAAIgCAAgAgMAPIAWgCIAYgCIgLg3IgjA7g");
	this.shape_11.setTransform(215.5,26.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF7FE5").s().p("AhJBlQgZgaAAgkQAAg2Axg6QApgxAqAAIANAAIAKACQAIgHAKAAQARAAAEATQADAOAAATQAAAIgFAHQgGAJgMAAQgPAAgHgQQgEgHgDgCQgCgBgLAAQgVAAgaAgQgnAtAAAnQAAASANANQAMANARAAQAPAAARgIIAZgRQANgIAHAAQAKAAAGAHQAHAHAAAJQAAAJgJAIQgtAmguAAQgmAAgZgbg");
	this.shape_12.setTransform(192.9,26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF7FE5").s().p("AhOB4QgGgGgBgKQAAgJAIgHQAGgGALAAQAMAAATgDIAAhLQAAgsAEgpIgkABQgKAAgHgGQgGgHgBgJQABgKAGgGQAGgGAIgBIAygBQAeAAAyAHQATADAAAUQABALgJAGQgFAFgIAAQgIAAgkgFQgDAfAAAxIAABLIAtgBQAKAAAHAHQAGAGAAAKQABAJgIAHQgGAGgKAAIgdABIgcAAQgKAAgXADQgWADgLAAQgKAAgHgHg");
	this.shape_13.setTransform(172.8,26.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF7FE5").s().p("AgzCGQgUgFgLgHQgJAAgGgGQgIgHABgJIABgyIACgyIgBg2IgBg3QABgJAIgJQAJgJAKAAQAFAAAWAKIAfAOQAwAQAiAhQApAngBAuQABAdgOAaQgOAagZAQQgcASgwAAQgMAAgQgDgAg5BUQAHAEAIADQAIACALAAQAiAAAQgKQAOgKAJgQQAJgQAAgSQAAgogwgeQgPgKg1gWg");
	this.shape_14.setTransform(152.1,26.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF7FE5").s().p("AhNB/QgSgRAAg1QAAgWAEgsQADgsAAgWIgBgRIgCgSQAAgZAXAAQAHAAAHAEQASgEASgDQARgCAOAAQArAAAZAJQAPAGAAAPQgBAJgFAHQgHAHgKAAIgHgBQgbgHgaAAQgMAAgNACQgPACgQAEIgBBBIBAgGIAogDQAKAAAHAGQAGAHAAAKQAAATgUACIgoAEIhGAGIgBAiQAAAgAEAFQACACASAAIAfAAIAegBIAKgBIAKgBQAJAAAHAGQAIAGAAALQAAASgTAEQgQADg0AAQg2AAgRgOg");
	this.shape_15.setTransform(129.1,26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF7FE5").s().p("AhaB8QgGgHAAgJIAAgmIABglIAAiFQAAgKAGgJQAJgLAOABIAqADQAXADAPAIQBHAkAAA0QAAAWgPAQQgOAQgfAMQAtAYAWAaQAGAGgBAJQAAAJgGAHQgIAGgJAAQgJAAgHgHQgzgvg6gSIABA2QAAAJgHAHQgGAGgKAAQgKAAgHgGgAgyAEIAHABQAoAAATgKQAIgEAHgHQAIgHAAgEQgBgSgXgSQgWgQgYgCIgTgCg");
	this.shape_16.setTransform(107.6,26.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF7FE5").s().p("AhKB+QgHgGAAgJIAAguQABgaADgxQADg0AAgZQAAgrAYACQAGgCAKAAIAYgBQAgAAAcAVQAfAXAAAiQAAArghAYQgeAWgoAAIgOgBIgBBMQAAAJgGAGQgGAGgKAAQgJAAgGgGgAgehYIAAAYIgEA5IAMABQAZAAARgMQASgNAAgWQAAgOgRgLQgRgKgSAAIgJAAIgHAAg");
	this.shape_17.setTransform(87.4,25.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag4BHQgcgUAAgmQAAgpAWgdQAZggAoAAQAdAAATAJQAZAMAAAaQAAASgUAOQgKAHgcALIg2AZQAIAIALAFQALAEAOAAQAWAAAPgJQAOgIAIAAQASAAAAARQAAASgcAMQgXAKgaAAQgnAAgZgTgAgWgnQgLAKgHAVIAmgQQAVgKANgJQgLgGgSAAQgOAAgLAKg");
	this.shape_18.setTransform(53.8,30.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAmB5QgEgNgDgYQgCgYgBgPIABgNIAAgMIAAgPQgBgHgIgBQgTAAgNAQQgIAJgNAYQAAA7gGANQgGANgPAAQgIAAgIgFQgHgHAAgJIACgJQABgEABgpIAAhtIAAgGIABgaIgBgPIgCgPQAAgKAHgGQAHgGAJAAQARAAAGARQACALAAAUIgBAhIAAAhQAMgMAOgGQANgGAPAAQAcAAANAQQAJAMACAXIACAqIAEAgQABASAEAOIABAHQAAAIgHAHQgIAGgJAAQgQAAgGgRg");
	this.shape_19.setTransform(35.1,25.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgPB4QgIgGAAgKIABgHIABgHIgBgXIgBgXQAAgXgEglIgEg8IgJAAQglAAgWgFQgSgFAAgRQAAgIAGgHQAHgIALABIAaADIAbABIAeAAIAdAAIAmABIAmACQAKAAAHAHQAGAGAAAKQAAAJgGAHQgHAGgKAAIgogCQgbgCgOABIAFBDQADAqAAAYIACARIABARQAAAMgGAKQgGANgNAAQgIAAgHgGg");
	this.shape_20.setTransform(13.3,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("EAnTgFOIAAKdMhOlAAAIAAqdg");
	this.shape_21.setTransform(244.5,24.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFCC").s().p("EgnSAFPIAAqdMBOlAAAIAAKdg");
	this.shape_22.setTransform(244.5,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-8,-9.7,505,69), null);


(lib.predicateAdjectivesentence = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAVQgLgKAAgLQAAgLALgIQALgKANAAQAQAAAKAIQAKAJAAAMQAAAMgLAJQgKAJgPAAQgNAAgLgJg");
	this.shape.setTransform(435,362.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTCZQgKgIAAgLIABgYIAAgYQAAgagDhXIgqgEQgbgCAAgaQAAgMAIgJQAIgIAOAAIAlACIgBgXIgBgWQAAgMAJgIQAJgJANABQAfgBAAA3IAAASQANgBAJAAQAZAAAKACQARAHAAAUQAAANgIAJQgJAHgNAAIgLAAIgLAAIgVACQAEBXAAAbIAAAMIABAMQAAAyggABQgLAAgJgIg");
	this.shape_1.setTransform(414.8,348.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhEBgQgjgdAAgvQAAgrAfgvQAjg1AuAAQAXAAAeAMQAlAQAAATQAAALgHAJQgIAJgMAAQgKAAgNgLQgOgKgaAAQgQAAgUAhQgTAgAAAXQAAAXARANQAQAMAZAAQAOAAAWgLQAVgLAGAAQAMAAAIAJQAJAIAAALQAAARgmARQghAQgVAAQgwAAgggcg");
	this.shape_2.setTransform(392.2,351.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_3.setTransform(368.1,351.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhPCbQgDgHAAgHQAAgMAKgJQAJgIAMAAQAOAAALAPIAQAdQAJAPAJAAQALAAADgfQAAgXgIhjQgHhiAAgSQAAgNAIgLQAJgMAOAAQAKAAAKAHQALAIAAAJIAIB5QAGBrAAAYQAAAggUAaQgXAeggAAQg1AAgihLgAAIitQgJgJAAgOQAAgOAJgJQAKgKAOAAQAOAAALAKQAKAJAAAOQAAAOgKAJQgLAKgOAAQgOAAgKgKg");
	this.shape_4.setTransform(344.7,352.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhBCnQgIAIgMAAQgMAAgIgIQgIgHAAgMIAAgQIABgRIAAj4QAAgPAHgNQAJgPAQAAQAXAAAAAZIAAAJIgBAJIAABVQAQgKAPgEQAPgEANAAQA0AAAfAlQAeAiAAAyQAAAzgiAjQgkAlgygBQgfAAgcgKgAgYgEQgPAGgTANIAABdQAeANAWABQAagBASgSQASgUAAgcQAAgdgOgSQgQgTgZAAQgLABgOAGg");
	this.shape_5.setTransform(324.4,346);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAsBtQgcAKgdAAQgfAAgVgNQgYgPgFgdQgJg2AAgrQAAgcAHglQAEgYAaAAQAMAAAJAIQAJAIAAAMQAAAKgDAUQgDAVAAAKQAAAfACAWQACAXAEAPIALAEIAKABQAXAAAegHIgBgmIAAgkQAAgtAEghQADgaAbAAQANAAAJAIQAJAIAAAMIgEBOIAAArIAAAtIABANIABAOQAAAMgJAIQgJAIgNAAQgSAAgJgQg");
	this.shape_6.setTransform(299.2,352);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag+BzQgggMAAgYQAAgWAZAAQALAAATAGQATAGAKAAQAsAAAAgSQAAgLgfgNQgsgUgNgIQgfgWAAgfQAAgsAvgQQAbgJA3AAQAWAAALAGQAOAIAAAUQAAAogVAAQgVAAgFgSIgSgCQg0AAAAAPQAAAIAfAPQArAUAPALQAhAWAAAdQgBAmgiATQgdAQgoAAQgeAAgYgJg");
	this.shape_7.setTransform(276.5,351.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_8.setTransform(233.4,351.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_9.setTransform(208.5,345.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTCZQgKgIAAgLIABgYIAAgYQAAgagDhXIgqgEQgbgCAAgaQAAgMAIgJQAIgIAOAAIAlACIgBgXIgBgWQAAgMAJgIQAJgJANABQAfgBAAA3IAAASQANgBAJAAQAZAAAKACQARAHAAAUQAAANgIAJQgJAHgNAAIgLAAIgLAAIgVACQAEBXAAAbIAAAMIABAMQAAAyggABQgLAAgJgIg");
	this.shape_10.setTransform(184.6,348.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag9BzQgigMAAgYQAAgWAbAAQAJAAAUAGQATAGAKAAQAsAAAAgSQAAgLgfgNQgsgUgNgIQgfgWAAgfQAAgsAvgQQAbgJA4AAQAVAAALAGQAPAIAAAUQgBAogVAAQgWAAgEgSIgSgCQg0AAAAAPQAAAIAfAPQAsAUAPALQAfAWAAAdQABAmgkATQgcAQgoAAQgeAAgXgJg");
	this.shape_11.setTransform(143.2,351.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_12.setTransform(119.6,351.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_13.setTransform(101.6,346.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgpC5QgKgHAAgMIABgGQAFgfABgcIAAhtIgPACIgNABQgNAAgJgIQgJgIAAgNQAAgUAWgHQAJgDAdAAIADgZQAGgxAUgYQAZgeA1AAQAoAAAAAdQAAAcgmAAQgaAAgMATQgJAOgDAdIAAAHQAcgDANAAQApAAABAcQAAAdgsgBQgOgBgcADQgBAWAAAkIABA7QAAAogEAYQgGAXgXAAQgMAAgJgIg");
	this.shape_14.setTransform(83.1,347);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_15.setTransform(66.2,346.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA9ClQgPAKgQACQgQADgRAAQgxAAggggQghggAAgxQAAg7AhgjQAhglA1AAQARAAANAEQANADAJAHQADhLAEgcQAEgaAYAAQANAAAIAIQAIAJAAAMQAAAggFBAQgFA/AAAfQAABPAFAbIABAGQAAANgJAHQgJAIgLAAQgQAAgIgPgAgtAKQgQATAAAlQAAAYASARQARAQAXAAQAQAAAJgEQAGgCAOgMIAIgGIAAhQQgIgOgLgHQgMgGgQAAQgfAAgRASg");
	this.shape_16.setTransform(45.8,345.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhIBcQgggegBgzQgCgwAcglQAiguA6ABQAsAAAaAjQAXAgAAAuQAAAygbAkQgeApgzAAQgogBgegcgAgfglQgNAVAAAbQAAAbAPAOQALALAQgBQASABAOgNQAQgPACgbQAChFgogBQgaAAgPAZg");
	this.shape_17.setTransform(20.8,352.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTB/QgIgIAAgMQAAgZgGgxQgFgwAAgZQAAgOgDgIQgZAPgaAhIgDAGIgBBEIgBARIAAAPQAAAMgKAGQgJAHgNAAQgSAAgHgQQgFgLAAgYIAAhRIAAggIgBggQAAgUAHgQQAIgTAQgBQAMAAAKAKQAKAJAAALIgCAUQAhgnAdAAQAiAAAPAaQANgLARgHQAQgFATgBQArAAAPArQADAJAHAzQAGAjAKBSQAAANgJAIQgJAJgNgBQgZAAgFgZQgEgWgEgqQgEgsgDgTQgGgngJAAQgFAAgSAKQgSAKgJAIQAAAYAGAvQAGAvAAAZQAAAMgIAIQgJAJgNgBQgMABgJgJg");
	this.shape_18.setTransform(-7.7,352);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AA9CmQgPAIgQADQgQADgRAAQgxAAgggfQghghAAgxQAAg7AhgkQAhgkA1AAQARAAANAEQANADAJAHQADhLAEgdQAEgZAYAAQANAAAIAIQAIAIAAANQAAAggFBAQgFA+AAAhQAABOAFAbIABAGQAAAMgJAIQgJAIgLAAQgQAAgIgOgAgtAKQgQASAAAmQAAAYASAQQARARAXAAQAQAAAJgDQAGgDAOgMIAIgGIAAhRQgIgNgLgHQgMgGgQAAQgfAAgRASg");
	this.shape_19.setTransform(424.4,278.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAtBlIgGgtQgEgYABgWIAAgSIABgUIAAgIIABgKQAAgSgJAAQgTAAgRAYQgSAYgKAkIgCAUIgBAUIgCATIgBATQAAANgJAJQgIAIgNAAQgOAAgJgIQgIgJAAgNIgBgSIgCgUQAAgVAEgmQADgmAAgVIgBgUIgBgUQAAgMAJgJQAJgIANAAQAcAAADAjIAAACQAgggAiAAQAqAAAQAjQALAXAAAuIAAAQIgBANQAAARAFAbQAFAbAAARQAAANgJAIQgJAIgNAAQgbAAgDgbg");
	this.shape_20.setTransform(400,284.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA1BlQgVAKgPAFQgPAFgKAAQg1AAgagdQgagcAAg4QAAg0AngmQAngmA1AAQAVAAAcAMQAgAOAAATQAAAIgEAGIgEAWIgBAeQAAApAGASIAKAXQAIASAAADQABAMgKAHQgJAIgLAAQgKAAgWgUgAgegsQgXAYAAAdQAAAeALAPQAKAPAVAAQANAAANgFQALgEALgJQgHg0ABgZIABgRIACgUIgHgDIgGgBQgdAAgWAXg");
	this.shape_21.setTransform(375.7,284.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0033").s().p("Ah7DJQgcgZAAhVQAAgkAFhGQAFhGAAgkQAAgIgCgTQgDgSAAgJQAAgoAlAAQALAAAKAGQAfgHAbgEQAcgDAXAAQBCgBAoAPQAZAKAAAYQAAAOgJALQgLAMgQgBIgMgBQgrgLgoAAQgTAAgWACQgXADgaAHQAAAjgCBFIBmgJQAzgGANAAQAQAAAKAKQAMAKAAAQQAAAfghAEIg/AGIhxAKQgCAhAAAVQAAA0AHAGQADAEAeAAIAwgBIAxAAIAQgDIAQgBQAOAAAMAJQAMAJAAASQAAAegfAFQgbAFhRABQhXAAgagYg");
	this.shape_22.setTransform(327.5,275.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0033").s().p("AiCDIQgMgNAAgPIAAkWIgCgkQAAgVACgOQADgYArgGQAUgFAuAAQAxAAAuAgQA1AlAAA4QAAAfgLAUQgJARgVATQAZAMAUAZQAXAcAAAcQAAAjgnAfQgZAVgcAKQg9AXhdAAQgQAAgNgNgAhHCNQAugCA0gPQAugNAAgQQgBgUgdgQQgXgMgUgDIhHgBgAhHiMIABA3IgBA4QAYADANgBQBPgHAAg1QAAgSgYgSQgXgSgcAAQgiAAgHABg");
	this.shape_23.setTransform(293.7,275.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgpC5QgKgHAAgMIABgGQAGgfAAgcIAAhtIgPACIgNABQgNAAgJgIQgJgIAAgNQAAgUAWgHQAJgDAdAAIADgZQAGgxAUgYQAZgeA1AAQAoAAAAAdQAAAcgmAAQgaAAgMATQgJAOgDAdIgBAHQAegDAMAAQAqAAAAAcQAAAdgsgBQgOgBgcADQgBAWAAAkIABA7QAAAogEAYQgGAXgXAAQgMAAgJgIg");
	this.shape_24.setTransform(244.6,279.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhIBcQgggegBgzQgCgwAcgmQAigtA6AAQAsAAAaAkQAXAfAAAvQAAAygbAlQgeAogzgBQgoAAgegcgAgfgkQgNAUAAAbQAAAaAPAPQALAKAQABQASgBAOgNQAQgOACgaQAChGgoAAQgaAAgPAZg");
	this.shape_25.setTransform(221.3,284.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag9BzQghgMgBgYQAAgWAaAAQALAAATAGQATAGAKAAQAsAAAAgSQAAgLgfgNQgsgUgNgIQgfgWAAgfQAAgsAvgQQAcgJA3AAQAWAAAKAGQAOAIAAAUQABAogWAAQgVAAgFgSIgSgCQg0AAAAAPQAAAIAfAPQArAUAPALQAgAWABAdQgBAmgiATQgdAQgoAAQgdAAgYgJg");
	this.shape_26.setTransform(179.1,284.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhBCnQgIAIgMAAQgMAAgIgIQgIgHAAgNIAAgPIABgRIAAj4QAAgQAHgMQAJgQAQAAQAXAAAAAaIAAAJIgBAJIAABVQAQgKAPgEQAPgFANABQA0gBAfAmQAeAiAAAyQAAAzgiAkQgkAjgyABQgfAAgcgLgAgYgEQgPAFgTAOIAABdQAeAOAWAAQAaAAASgUQASgSAAgdQAAgcgOgTQgQgSgZAAQgLgBgOAHg");
	this.shape_27.setTransform(155.1,278.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhWByQgHgHAAgNIAAiPIAAgUIAAgUQABgMAHgJQAIgIANAAQAYAAAFAZQAmgdAvAAQAsAAABA7IgBAOQgCAhgdABQgbgBAAgcIgCgWQgwAIgVArIAABtQAAAMgJAJQgIAIgNAAQgOAAgHgJg");
	this.shape_28.setTransform(131.3,284.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_29.setTransform(107.2,284.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AggBhIhJivQgCgIAAgFQAAgMAJgIQAKgIAMgBQASAAAJASQANAaAkBhQAKgYAUgzIAUgvQAJgRASAAQANAAAJAIQAKAIAAAMQAAAIgkBPQgdBAgRAiQgBALgIAHQgIAIgKAAQgXAAgJgYg");
	this.shape_30.setTransform(84.4,284.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_31.setTransform(40.6,284.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_32.setTransform(15.8,278.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTCZQgKgIAAgMIABgXIAAgYQAAgbgDhWIgqgEQgbgCAAgaQAAgMAIgJQAIgJAOABIAlACIgBgXIgBgWQAAgMAJgIQAJgIANAAQAfAAAAA3IAAASQANgCAJAAQAZAAAKADQARAFAAAWQAAAMgIAIQgJAJgNgBIgLAAIgLAAIgVABQAEBZAAAaIAAALIABANQAAAyggAAQgLABgJgIg");
	this.shape_33.setTransform(-8.2,280.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag9BzQgigMABgYQAAgWAaAAQAKAAATAGQATAGAKAAQAsAAAAgSQAAgLgfgNQgsgUgNgIQgfgWAAgfQAAgsAvgQQAcgJA2AAQAXAAAKAGQAPAIAAAUQgBAogVAAQgWAAgEgSQgJgCgJAAQg0AAAAAPQAAAIAfAPQArAUAQALQAfAWAAAdQABAmgkATQgcAQgoAAQgeAAgXgJg");
	this.shape_34.setTransform(499.5,207.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAIBGQgGgVgHg2IgGAMIgiBVQgDAJgGAGQgKAOgSABQgKAAgMgTQgMgTgHgeQgHgbgOhaQgDgUAAgLQAAgMAJgIQAJgIANAAQAXAAAGAXQADAMACASIADAfIAJA3QAQgsAVhCQAJgdAYAAQAYAAAIAgQAGAXAGAjIALA9IAiiEQAFgTAXAAQAMAAAKAIQAJAIAAAMIgBAHQgXBWgXBFQgHAUgPAVQgKAOgSAAQgcAAgPg1g");
	this.shape_35.setTransform(473.6,207.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhIBdQgggfgBgzQgCgvAcgnQAigsA6gBQAsAAAaAkQAXAgAAAuQAAAygbAkQgeAogzABQgoAAgegcgAgfglQgNAVAAAbQAAAaAPAOQALALAQAAQASAAAOgNQAQgPACgaQAChFgoAAQgagBgPAZg");
	this.shape_36.setTransform(445.9,207.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_37.setTransform(428,201.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_38.setTransform(415.7,201.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhIBdQgggfgBgzQgCgvAcgnQAigsA6gBQAsAAAaAkQAXAgAAAuQAAAygbAkQgeAogzABQgoAAgegcgAgfglQgNAVAAAbQAAAaAPAOQALALAQAAQASAAAOgNQAQgPACgaQAChFgoAAQgagBgPAZg");
	this.shape_39.setTransform(397.7,207.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgpC5QgKgHAAgMIABgGQAFgfAAgcIAAhtIgOACIgNABQgNAAgJgIQgJgIAAgNQAAgUAWgHQAKgDAcAAIADgZQAGgxAUgYQAZgeA1AAQAoAAAAAdQAAAcgmAAQgaAAgMATQgJAOgDAdIAAAHQAcgDANAAQApAAAAAcQAAAdgrgBQgOgBgcADQgBAWAAAkIACA7QgBAogFAYQgFAXgXAAQgMAAgJgIg");
	this.shape_40.setTransform(374.5,202.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTCZQgKgIAAgMIABgYIAAgXQAAgbgDhWIgqgDQgbgEAAgZQAAgNAIgIQAIgJAOAAIAlADIgBgXIgBgWQAAgMAJgJQAJgHANgBQAfAAAAA3IAAASQANgCAJAAQAZAAAKAEQARAFAAAWQAAAMgIAJQgJAHgNABIgLAAIgLgBIgVACQAEBXAAAcIAAALIABAMQAAAzgggBQgLAAgJgHg");
	this.shape_41.setTransform(333.3,203.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AA1BlQgVAKgPAFQgPAFgKAAQg0AAgbgdQgagcAAg4QAAg0AngmQAngmA1AAQAVAAAcAMQAgAOAAATQAAAIgEAGIgEAWIgBAeQAAApAGASIAKAXQAIASAAADQABAMgJAHQgKAIgLAAQgKAAgWgUgAgegsQgXAYAAAdQAAAeAKAPQALAPAVAAQANAAANgFQAMgEAKgJQgHg0ABgZIABgRIACgUIgHgDIgGgBQgdAAgWAXg");
	this.shape_42.setTransform(310.3,207.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_43.setTransform(285,201.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgTCZQgKgIAAgMIABgYIAAgXQAAgbgDhWIgqgDQgbgEAAgZQAAgNAIgIQAIgJAOAAIAlADIgBgXIgBgWQAAgMAJgJQAJgHANgBQAfAAAAA3IAAASQANgCAJAAQAZAAAKAEQARAFAAAWQAAAMgIAJQgJAHgNABIgLAAIgLgBIgVACQAEBXAAAcIAAALIABAMQAAAzgggBQgLAAgJgHg");
	this.shape_44.setTransform(261.1,203.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7C009B").s().p("Ah7DKQgcgaAAhWQAAgiAFhGQAFhIAAgiQAAgKgCgRQgDgSAAgKQAAgoAlAAQAMAAAJAGQAegHAdgDQAbgEAXgBQBCAAAoAPQAZAKAAAYQAAAOgJALQgLALgQABIgLgCQgsgMgoAAQgTABgWADQgXADgaAGQABAjgDBFIBmgKQAygEAOAAQAQgBAKALQAMAJAAARQAAAegiAEIg/AFIhwAKQgCAiAAAUQAAA0AHAIQADADAeAAIAwgBIAygBIAPgBIAQgCQAOAAAMAJQAMAKAAASQAAAdgfAGQgbAEhRAAQhXAAgagWg");
	this.shape_45.setTransform(211,198.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7C009B").s().p("Ag5C7QgghNgoiPIgVhHQgPgyAAgTQAAgQALgKQALgKAPAAQAZAAALAbIAKAtIAZBWQAVBKATA6QAnhjAWg8IAXg/QAPglASgUQAMgOARAAQAPAAALALQALAKAAAPQAAALgHAKQgOAVgMAdIgUA0IhGC1QgMAggSAgQgLAVgVAAQgbAAgLgag");
	this.shape_46.setTransform(175.4,199);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7C009B").s().p("Ah8C/QgLgKAAgPQAAgPALgKQALgLARAAQATAAAggEIgBh3QAAhHAFhBIg5ACQgQAAgKgKQgLgLAAgPQAAgQAKgJQAKgJANgCQAXgCA4AAQAxAABPALQAfAFAAAgQAAARgMAJQgKAJgNAAQgMAAg5gIQgEAxAABPIAAB3IBHgBQAQAAALAKQAKALAAAPQAAAOgKALQgLAKgQAAIguABIgtABQgRAAgjAEQgkAFgSAAQgQAAgKgLg");
	this.shape_47.setTransform(141.9,199);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7C009B").s().p("AgZDAQgMgLAAgPIABgLIACgMIgCglIgCgkQAAgkgFg7QgHhGgBgaIgOAAQg6AAgjgIQgdgHAAgcQAAgNAJgLQALgNASABIAqAFQAaADAQAAIAxgBIAvAAQAUAAAoADQAoACAUAAQAQAAALAKQAKALAAAPQAAAPgKAKQgLALgQAAQgVAAgrgDQgqgDgWAAQABAeAGBNQAFBDAAAoIACAaIACAbQAAAUgIAQQgLAUgUAAQgOAAgLgJg");
	this.shape_48.setTransform(108.9,198.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7C009B").s().p("Ah1CgQgngpAAg5QAAhXBNhcQBChOBDAAIAVABQAKAAAHACQALgLARAAQAbAAAGAfQAEAWAAAeQAAANgHALQgKAOgTgBQgYAAgLgZQgFgLgGgCQgEgCgRAAQghAAgqAzQg9BIAAA+QAAAdATAVQATAVAbgBQAZABAbgOQAKgGAegUQAVgOAKAAQAQAAALAMQALAKAAAOQAAAQgOALQhJA+hKAAQg7AAgpgsg");
	this.shape_49.setTransform(73.4,198.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7C009B").s().p("Ah6DKQgdgaAAhWQAAgiAFhGQAFhIAAgiQAAgKgDgRQgCgSAAgKQAAgoAkAAQAMAAAKAGQAegHAcgDQAcgEAYgBQBCAAAoAPQAYAKAAAYQAAAOgKALQgKALgRABIgLgCQgqgMgoAAQgVABgVADQgXADgZAGQAAAjgDBFIBngKQAygEANAAQAQgBALALQALAJAAARQAAAegiAEIg/AFIhvAKQgCAiAAAUQAAA0AFAIQAEADAeAAIAwgBIAxgBIAQgBIAPgCQAQAAAKAJQANAKAAASQAAAdgfAGQgbAEhSAAQhVAAgagWg");
	this.shape_50.setTransform(40.4,198.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7C009B").s().p("AhyC2Qg2gmAAgyQAAgqAlAAQAlAAAAApQAAAPAbATQAbARAXAAQAKAAAEgjIAFhSQAEg7AAhaIgBgRIgFAAIgfAAIgfgBQgQAAgLgJQgLgLAAgQQAAgkAvAAIAbABIAaAAIAxgBIAxgCQBHAAAAAnQAAANgJAMQgLALgRAAIgPAAIgQgBIgVAAIAAASQAAC8gbBWQgTBAgzgBQgxABgwgig");
	this.shape_51.setTransform(5.1,199.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7C009B").s().p("AhTDVQgdgHgSgLQgQAAgKgLQgLgKAAgPQAAgaADg1IAChPIgBhXIgBhYQAAgOAOgPQAOgOAQAAQAJAAAjAQQAoAUAIACQBMAZA3A1QBBA+AABLQAAAugWApQgXAqgnAZQgsAchOAAQgUAAgZgFgAhcCGQALAHANADQAOADAPAAQA4AAAZgPQAYgPAOgaQAOgaAAgcQgBhAhMgwQgZgQhUgjg");
	this.shape_52.setTransform(-31.6,199);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7C009B").s().p("ACGDHQgVgBgVgwQgOgfgKgpQgUADgrADQgqADgVAEQgNAdgeA6QgLATgVAAQgOAAgMgKQgMgKAAgPQAAgOAnhNQgDgJAAgHQABgMAYgIQAmg/AthGQBChkAPAAQAdAAAKAjIARBVQAPBMAYBhIANAiQAKAXgBALQABAQgMAKQgLAKgOAAIgBAAgAgUAYQAMgCAYgCIAlgDQgGghgMg3Ig3Bfg");
	this.shape_53.setTransform(-72.1,199.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAtBlIgGgtQgEgYAAgWIABgSIABgUIABgIIAAgKQAAgSgJAAQgTAAgRAYQgSAYgKAkIgCAUIgBAUIgBATIgCATQAAANgIAJQgKAIgNAAQgNAAgIgIQgJgJAAgNIgBgSIgBgUQAAgVACgmQADgmAAgVIAAgUIgBgUQAAgMAJgJQAJgIANAAQAcAAACAjIABACQAgggAjAAQApAAAQAjQAKAXAAAuIAAAQIAAANQAAARAFAbQAEAbAAARQAAANgIAIQgJAIgNAAQgbAAgDgbg");
	this.shape_54.setTransform(418.4,129.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AA1BlQgUAKgPAFQgQAFgKAAQg1AAgagdQgagcgBg4QABg0AmgmQAngmA2AAQAVAAAbAMQAiAOAAATQAAAIgGAGIgDAWIgBAeQAAApAGASIAKAXQAJASAAADQgBAMgIAHQgJAIgMAAQgKAAgWgUgAgfgsQgWAYAAAdQAAAeAKAPQAMAPAVAAQAMAAAMgFQANgEAKgJQgGg0gBgZIABgRIAEgUIgIgDIgGgBQgdAAgXAXg");
	this.shape_55.setTransform(394.1,130.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag9BzQgigMABgYQAAgWAaAAQAJAAAUAGQATAGAKAAQAsAAAAgSQAAgLgfgNQgsgUgNgIQgfgWAAgfQAAgsAvgQQAbgJA4AAQAVAAALAGQAPAIAAAUQgBAogVAAQgWAAgEgSIgSgCQg0AAAAAPQAAAIAfAPQAsAUAPALQAfAWAAAdQABAmgkATQgcAQgoAAQgeAAgXgJg");
	this.shape_56.setTransform(350.7,129.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_57.setTransform(334.2,124.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF00FF").s().p("Ah6DJQgdgZAAhWQAAgiAFhHQAFhHAAgiQAAgKgDgRQgCgTAAgJQAAgoAkAAQAMAAAKAHQAegIAdgDQAbgFAYAAQBBABAoAPQAZAJAAAYQAAAOgKAKQgKANgRAAIgKgCQgrgMgoAAQgVAAgVADQgXAEgZAGQAAAjgDBFIBngKQAxgEAOgBQAPAAAMALQALAJAAAQQAAAfgiAEIg/AFIhvAKQgCAiAAAUQAAA0AFAIQADADAfAAIAwgBIAyAAIAPgCIAPgCQAPAAALAJQANAJAAATQAAAdgfAFQgaAGhTAAQhWAAgZgYg");
	this.shape_58.setTransform(291.9,121.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF00FF").s().p("Ag5C7QgghNgoiPIgVhHQgPgyAAgTQAAgQALgKQALgKAPAAQAZAAALAbIAKAtIAZBWQAVBKATA6QAnhjAWg8IAXg/QAPglASgUQAMgOARAAQAPAAALALQALAKAAAPQAAALgHAKQgOAVgMAdIgUA0IhGC1QgMAggSAgQgLAVgVAAQgbAAgLgag");
	this.shape_59.setTransform(256.2,121.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF00FF").s().p("Ah8C/QgLgKAAgPQAAgPALgKQALgLARAAQATAAAggEIgBh3QAAhHAFhBIg5ACQgQAAgKgKQgLgLAAgPQAAgQAKgJQAKgJANgCQAXgCA4AAQAxAABPALQAfAFAAAgQAAARgMAJQgKAJgNAAQgMAAg5gIQgEAxAABPIAAB3IBHgBQAQAAALAKQAKALAAAPQAAAOgKALQgLAKgQAAIguABIgtABQgRAAgjAEQgkAFgSAAQgQAAgKgLg");
	this.shape_60.setTransform(222.7,121.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF00FF").s().p("AgZDAQgMgLAAgPIABgLIACgMIgCglIgCgkQAAgkgFg7QgHhGgBgaIgOAAQg6AAgjgIQgdgHAAgcQAAgNAJgLQALgNASABIAqAFQAaADAQAAIAxgBIAvAAQAUAAAoADQAoACAUAAQAQAAALAKQAKALAAAPQAAAPgKAKQgLALgQAAQgVAAgrgDQgqgDgWAAQABAeAGBNQAFBDAAAoIACAaIACAbQAAAUgIAQQgLAUgUAAQgOAAgLgJg");
	this.shape_61.setTransform(189.7,121.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF00FF").s().p("Ah1ChQgngqAAg5QAAhXBNhcQBChOBDAAIAVABQAKABAHACQALgMARAAQAbAAAGAfQAEAWAAAeQAAANgHAKQgKAOgTABQgYAAgLgaQgFgLgGgCQgEgDgRAAQghAAgqA0Qg9BIAAA+QAAAdATAVQATAVAbAAQAZgBAbgOQAKgEAegVQAVgOAKAAQAQAAALALQALAMAAAOQAAAPgOALQhJA+hKAAQg7AAgpgrg");
	this.shape_62.setTransform(154.3,121.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF00FF").s().p("Ah6DJQgdgZAAhWQAAgiAFhHQAFhHAAgiQAAgKgCgRQgDgTAAgJQAAgoAkAAQANAAAJAHQAfgIAbgDQAcgFAXAAQBDABAoAPQAYAJAAAYQAAAOgJAKQgLANgQAAIgMgCQgrgMgoAAQgTAAgWADQgXAEgaAGQAAAjgCBFIBmgKQAzgEANgBQAPAAALALQAMAJAAAQQAAAfghAEIg/AFIhxAKQgCAiABAUQgBA0AHAIQADADAeAAIAwgBIAxAAIAQgCIAQgCQAPAAALAJQAMAJAAATQAAAdgfAFQgaAGhTAAQhVAAgagYg");
	this.shape_63.setTransform(121.3,121.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF00FF").s().p("AhyC2Qg2gmAAgyQAAgqAlAAQAlAAAAApQAAAQAbARQAbASAXAAQAKAAAEgjIAFhSQAEg7AAhaIgBgRIgFAAIgfAAIgfgBQgQAAgLgKQgLgKAAgQQAAgkAvAAIAbABIAaAAIAxgCIAxgCQBHAAAAAoQAAAOgJAKQgLAMgRAAIgPAAIgQgCIgVAAIAAATQAAC8gbBWQgTA/gzAAQgxAAgwghg");
	this.shape_64.setTransform(86,122.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF00FF").s().p("AhTDVQgegHgRgLQgPAAgLgLQgLgKAAgPQAAgaADg1IAChPIgBhXIgBhYQAAgOAOgPQAOgOAPAAQAKAAAiAQQApAUAIACQBMAZA2A1QBCA+AABLQAAAugWApQgXAqgnAZQgsAchOAAQgUAAgZgFgAhcCGQALAHANADQAOADAPAAQA5AAAYgPQAYgPAOgaQANgaAAgcQABhAhNgwQgYgQhVgjg");
	this.shape_65.setTransform(49.3,121.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF00FF").s().p("ACGDHQgUgBgWgwQgOgfgKgpQgUADgsADQgoADgXAEQgLAdgfA6QgLATgVAAQgPAAgLgKQgLgKAAgPQAAgOAmhNQgEgJABgHQABgMAYgIQAmg/AuhGQBBhkAPAAQAdAAAKAjIARBVQAQBMAWBhIAOAiQAKAXAAALQAAAQgMAKQgLAKgOAAIgBAAgAgUAYQAMgCAYgCIAlgDQgGghgLg3Ig4Bfg");
	this.shape_66.setTransform(8.8,121.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF00FF").s().p("Ah7DJQgcgZAAhVQAAgkAFhGQAFhGAAgkQAAgIgDgTQgCgSAAgJQAAgoAlAAQAMAAAJAGQAfgHAcgEQAbgDAYAAQBBgBAoAPQAZAKAAAYQAAAOgKALQgKAMgQgBIgLgBQgrgLgoAAQgVAAgVACQgXADgaAHQAAAjgCBFIBngJQAxgGAOAAQAPAAAMAKQALAKAAAQQAAAfgiAEIg/AGIhvAKQgCAhgBAVQABA0AFAGQADAEAfAAIAwgBIAyAAIAPgDIAPgBQAPAAALAJQANAJAAASQAAAegfAFQgaAFhSABQhXAAgagYg");
	this.shape_67.setTransform(399.3,43.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF00FF").s().p("AgZDAQgMgLAAgPIABgLIACgMIgCglIgCgkQAAgkgFg7QgHhGgBgaIgOAAQg6AAgjgIQgdgHAAgcQAAgNAJgLQALgNASABIAqAFQAaADAQAAIAxgBIAvAAQAUAAAoADQAoACAUAAQAQAAALAKQAKALAAAPQAAAPgKAKQgLALgQAAQgVAAgrgDQgqgDgWAAQABAeAGBNQAFBDAAAoIACAaIACAbQAAAUgIAQQgLAUgUAAQgOAAgLgJg");
	this.shape_68.setTransform(363.1,43.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF00FF").s().p("ACGDHQgVgBgVgwQgOgfgKgpQgUADgsADQgoADgXAEQgLAdgfA6QgLATgVAAQgPAAgLgKQgMgKABgPQgBgOAnhNQgDgJAAgHQABgMAYgIQAmg/AuhGQBAhkAQAAQAdAAAKAjIARBVQAPBMAXBhIAOAiQAKAXAAALQAAAQgMAKQgLAKgOAAIgBAAgAgUAYQAMgCAYgCIAlgDQgGghgLg3Ig4Bfg");
	this.shape_69.setTransform(324.1,44.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF00FF").s().p("Ah1ChQgngqAAg4QAAhYBNhcQBChOBDAAIAVABQAKABAHABQALgLARAAQAbAAAGAfQAEAWAAAdQAAANgHAMQgKAOgTAAQgYAAgLgZQgFgMgGgDQgEgCgRABQghgBgqA0Qg9BIAAA/QAAAcATAVQATAUAbABQAZAAAbgPQAKgEAegVQAVgOAKAAQAQAAALAMQALALAAAOQAAAPgOAMQhJA9hKAAQg7AAgpgrg");
	this.shape_70.setTransform(288.2,44);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF00FF").s().p("Ah8C/QgLgKAAgPQAAgPALgKQALgLARAAQATAAAggEIgBh3QAAhHAFhBIg5ACQgQAAgKgKQgLgLAAgPQAAgQAKgJQAKgJANgCQAXgCA4AAQAxAABPALQAfAFAAAgQAAARgMAJQgKAJgNAAQgMAAg5gIQgEAxAABPIAAB3IBHgBQAQAAALAKQAKALAAAPQAAAOgKALQgLAKgQAAIguABIgtABQgRAAgjAEQgkAFgSAAQgQAAgKgLg");
	this.shape_71.setTransform(256.2,44.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF00FF").s().p("AhSDVQgegHgSgLQgPAAgLgLQgLgKAAgPQAAgaADg1IAChPIgBhXIgBhYQAAgOAOgPQAOgOAQAAQAIAAAjAQQApAUAIACQBMAZA2A1QBCA+AABLQAAAugXApQgWAqgnAZQgsAchOAAQgTAAgZgFgAhbCGQAKAHANADQANADARAAQA4AAAZgPQAXgPAOgaQANgaAAgcQAAhAhMgwQgYgQhUgjg");
	this.shape_72.setTransform(223.3,44.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF00FF").s().p("Ah7DJQgcgZAAhVQAAgkAFhGQAFhGAAgkQAAgIgCgTQgDgSAAgJQAAgoAlAAQAMAAAJAGQAegHAdgEQAbgDAXAAQBCgBAoAPQAZAKAAAYQAAAOgJALQgLAMgQgBIgLgBQgsgLgoAAQgTAAgWACQgXADgaAHQABAjgDBFIBmgJQAzgGANAAQAQAAAKAKQAMAKAAAQQAAAfgiAEIg/AGIhwAKQgCAhAAAVQAAA0AHAGQADAEAeAAIAwgBIAyAAIAPgDIAQgBQAOAAAMAJQAMAJAAASQAAAegfAFQgbAFhRABQhXAAgagYg");
	this.shape_73.setTransform(186.7,43.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF00FF").s().p("AiPDFQgLgKAAgPIABg7IAAg8IABjUQgBgRALgOQANgSAYACIBBAFQAmAFAYANQBxA5AABTQAAAjgYAaQgYAagvASQBHAnAiApQAKAKAAANQAAAPgLALQgMAKgOAAQgPAAgLgLQhQhLhggdIAEBWQAAAPgLAKQgLAKgPAAQgQAAgKgKgAhRAIIALAAQBBAAAegPQAOgHAKgLQAMgMAAgGQAAgdgmgbQgigagogEIgegCg");
	this.shape_74.setTransform(152.4,43.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF00FF").s().p("Ah3DIQgKgKAAgOIAAhJQAAgpAFhQQAFhRABgoQAAhFAmADQAJgCAQgBIAmgBQAzAAAtAhQAzAlAAA2QAABEg2AnQgvAjhBAAIgWgCQgCAlAABUQAAAOgJAKQgKAKgPAAQgPAAgKgKgAgxiNIAAAmQAAAdgFA+IASACQAoAAAbgUQAdgUAAgjQAAgWgbgSQgagQgeAAIgOAAIgMAAg");
	this.shape_75.setTransform(120.3,43.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_76.setTransform(73.3,52.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_77.setTransform(48.5,46.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgUCgQgLgJAAgNIACgJIABgKIgCgeIgBgfQAAgdgFgyQgFg5gBgWIgLAAQgxAAgdgHQgZgGAAgXQAAgLAIgJQAKgLAPABIAiAEQAWACAOAAIAoAAIAngBQARAAAhADIAyACQANAAAJAIQAJAJAAAMQAAANgJAJQgJAIgNAAQgRAAgkgCQgjgDgTABIAGBZQAFA4AAAhIABAWIACAWQAAAQgHAOQgJARgRAAQgLAAgJgIg");
	this.shape_78.setTransform(19.6,47.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0099").s().p("Ah6DJQgdgZAAhWQAAgiAFhHQAFhHAAgiQAAgKgDgRQgCgTAAgJQAAgoAkAAQAMAAAKAHQAegIAdgDQAbgFAYAAQBBABAoAPQAZAJAAAYQAAAOgKAKQgKANgRAAIgKgCQgrgMgoAAQgVAAgVADQgXAEgZAGQAAAjgDBFIBngKQAxgEAOgBQAPAAAMALQALAJAAAQQAAAfgiAEIg/AFIhvAKQgCAiAAAUQAAA0AFAIQADADAfAAIAwgBIAyAAIAPgCIAPgCQAPAAALAJQANAJAAATQAAAdgfAFQgaAGhTAAQhWAAgZgYg");
	this.shape_79.setTransform(291.9,121.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0099").s().p("Ag5C7QgghNgoiPIgVhHQgPgyAAgTQAAgQALgKQALgKAPAAQAZAAALAbIAKAtIAZBWQAVBKATA6QAnhjAWg8IAXg/QAPglASgUQAMgOARAAQAPAAALALQALAKAAAPQAAALgHAKQgOAVgMAdIgUA0IhGC1QgMAggSAgQgLAVgVAAQgbAAgLgag");
	this.shape_80.setTransform(256.2,121.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0099").s().p("Ah8C/QgLgKAAgPQAAgPALgKQALgLARAAQATAAAggEIgBh3QAAhHAFhBIg5ACQgQAAgKgKQgLgLAAgPQAAgQAKgJQAKgJANgCQAXgCA4AAQAxAABPALQAfAFAAAgQAAARgMAJQgKAJgNAAQgMAAg5gIQgEAxAABPIAAB3IBHgBQAQAAALAKQAKALAAAPQAAAOgKALQgLAKgQAAIguABIgtABQgRAAgjAEQgkAFgSAAQgQAAgKgLg");
	this.shape_81.setTransform(222.7,121.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0099").s().p("AgZDAQgMgLAAgPIABgLIACgMIgCglIgCgkQAAgkgFg7QgHhGgBgaIgOAAQg6AAgjgIQgdgHAAgcQAAgNAJgLQALgNASABIAqAFQAaADAQAAIAxgBIAvAAQAUAAAoADQAoACAUAAQAQAAALAKQAKALAAAPQAAAPgKAKQgLALgQAAQgVAAgrgDQgqgDgWAAQABAeAGBNQAFBDAAAoIACAaIACAbQAAAUgIAQQgLAUgUAAQgOAAgLgJg");
	this.shape_82.setTransform(189.7,121.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0099").s().p("Ah1ChQgngqAAg5QAAhXBNhcQBChOBDAAIAVABQAKABAHACQALgMARAAQAbAAAGAfQAEAWAAAeQAAANgHAKQgKAOgTABQgYAAgLgaQgFgLgGgCQgEgDgRAAQghAAgqA0Qg9BIAAA+QAAAdATAVQATAVAbAAQAZgBAbgOQAKgEAegVQAVgOAKAAQAQAAALALQALAMAAAOQAAAPgOALQhJA+hKAAQg7AAgpgrg");
	this.shape_83.setTransform(154.3,121.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0099").s().p("Ah6DJQgdgZAAhWQAAgiAFhHQAFhHAAgiQAAgKgCgRQgDgTAAgJQAAgoAkAAQANAAAJAHQAfgIAbgDQAcgFAXAAQBDABAoAPQAYAJAAAYQAAAOgJAKQgLANgQAAIgMgCQgrgMgoAAQgTAAgWADQgXAEgaAGQAAAjgCBFIBmgKQAzgEANgBQAPAAALALQAMAJAAAQQAAAfghAEIg/AFIhxAKQgCAiABAUQgBA0AHAIQADADAeAAIAwgBIAxAAIAQgCIAQgCQAPAAALAJQAMAJAAATQAAAdgfAFQgaAGhTAAQhVAAgagYg");
	this.shape_84.setTransform(121.3,121.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0099").s().p("AhyC2Qg2gmAAgyQAAgqAlAAQAlAAAAApQAAAQAbARQAbASAXAAQAKAAAEgjIAFhSQAEg7AAhaIgBgRIgFAAIgfAAIgfgBQgQAAgLgKQgLgKAAgQQAAgkAvAAIAbABIAaAAIAxgCIAxgCQBHAAAAAoQAAAOgJAKQgLAMgRAAIgPAAIgQgCIgVAAIAAATQAAC8gbBWQgTA/gzAAQgxAAgwghg");
	this.shape_85.setTransform(86,122.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0099").s().p("AhTDVQgegHgRgLQgPAAgLgLQgLgKAAgPQAAgaADg1IAChPIgBhXIgBhYQAAgOAOgPQAOgOAPAAQAKAAAiAQQApAUAIACQBMAZA2A1QBCA+AABLQAAAugWApQgXAqgnAZQgsAchOAAQgUAAgZgFgAhcCGQALAHANADQAOADAPAAQA5AAAYgPQAYgPAOgaQANgaAAgcQABhAhNgwQgYgQhVgjg");
	this.shape_86.setTransform(49.3,121.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0099").s().p("ACGDHQgUgBgWgwQgOgfgKgpQgUADgsADQgoADgXAEQgLAdgfA6QgLATgVAAQgPAAgLgKQgLgKAAgPQAAgOAmhNQgEgJABgHQABgMAYgIQAmg/AuhGQBBhkAPAAQAdAAAKAjIARBVQAQBMAWBhIAOAiQAKAXAAALQAAAQgMAKQgLAKgOAAIgBAAgAgUAYQAMgCAYgCIAlgDQgGghgLg3Ig4Bfg");
	this.shape_87.setTransform(8.8,121.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0099").s().p("Ah7DJQgcgZAAhVQAAgkAFhGQAFhGAAgkQAAgIgDgTQgCgSAAgJQAAgoAlAAQAMAAAJAGQAfgHAcgEQAbgDAYAAQBBgBAoAPQAZAKAAAYQAAAOgKALQgKAMgQgBIgLgBQgrgLgoAAQgVAAgVACQgXADgaAHQAAAjgCBFIBngJQAxgGAOAAQAPAAAMAKQALAKAAAQQAAAfgiAEIg/AGIhvAKQgCAhgBAVQABA0AFAGQADAEAfAAIAwgBIAyAAIAPgDIAPgBQAPAAALAJQANAJAAASQAAAegfAFQgaAFhSABQhXAAgagYg");
	this.shape_88.setTransform(399.3,43.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0099").s().p("AgZDAQgMgLAAgPIABgLIACgMIgCglIgCgkQAAgkgFg7QgHhGgBgaIgOAAQg6AAgjgIQgdgHAAgcQAAgNAJgLQALgNASABIAqAFQAaADAQAAIAxgBIAvAAQAUAAAoADQAoACAUAAQAQAAALAKQAKALAAAPQAAAPgKAKQgLALgQAAQgVAAgrgDQgqgDgWAAQABAeAGBNQAFBDAAAoIACAaIACAbQAAAUgIAQQgLAUgUAAQgOAAgLgJg");
	this.shape_89.setTransform(363.1,43.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0099").s().p("ACGDHQgVgBgVgwQgOgfgKgpQgUADgsADQgoADgXAEQgLAdgfA6QgLATgVAAQgPAAgLgKQgMgKABgPQgBgOAnhNQgDgJAAgHQABgMAYgIQAmg/AuhGQBAhkAQAAQAdAAAKAjIARBVQAPBMAXBhIAOAiQAKAXAAALQAAAQgMAKQgLAKgOAAIgBAAgAgUAYQAMgCAYgCIAlgDQgGghgLg3Ig4Bfg");
	this.shape_90.setTransform(324.1,44.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0099").s().p("Ah1ChQgngqAAg4QAAhYBNhcQBChOBDAAIAVABQAKABAHABQALgLARAAQAbAAAGAfQAEAWAAAdQAAANgHAMQgKAOgTAAQgYAAgLgZQgFgMgGgDQgEgCgRABQghgBgqA0Qg9BIAAA/QAAAcATAVQATAUAbABQAZAAAbgPQAKgEAegVQAVgOAKAAQAQAAALAMQALALAAAOQAAAPgOAMQhJA9hKAAQg7AAgpgrg");
	this.shape_91.setTransform(288.2,44);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0099").s().p("Ah8C/QgLgKAAgPQAAgPALgKQALgLARAAQATAAAggEIgBh3QAAhHAFhBIg5ACQgQAAgKgKQgLgLAAgPQAAgQAKgJQAKgJANgCQAXgCA4AAQAxAABPALQAfAFAAAgQAAARgMAJQgKAJgNAAQgMAAg5gIQgEAxAABPIAAB3IBHgBQAQAAALAKQAKALAAAPQAAAOgKALQgLAKgQAAIguABIgtABQgRAAgjAEQgkAFgSAAQgQAAgKgLg");
	this.shape_92.setTransform(256.2,44.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0099").s().p("AhSDVQgegHgSgLQgPAAgLgLQgLgKAAgPQAAgaADg1IAChPIgBhXIgBhYQAAgOAOgPQAOgOAQAAQAIAAAjAQQApAUAIACQBMAZA2A1QBCA+AABLQAAAugXApQgWAqgnAZQgsAchOAAQgTAAgZgFgAhbCGQAKAHANADQANADARAAQA4AAAZgPQAXgPAOgaQANgaAAgcQAAhAhMgwQgYgQhUgjg");
	this.shape_93.setTransform(223.3,44.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0099").s().p("Ah7DJQgcgZAAhVQAAgkAFhGQAFhGAAgkQAAgIgCgTQgDgSAAgJQAAgoAlAAQAMAAAJAGQAegHAdgEQAbgDAXAAQBCgBAoAPQAZAKAAAYQAAAOgJALQgLAMgQgBIgLgBQgsgLgoAAQgTAAgWACQgXADgaAHQABAjgDBFIBmgJQAzgGANAAQAQAAAKAKQAMAKAAAQQAAAfgiAEIg/AGIhwAKQgCAhAAAVQAAA0AHAGQADAEAeAAIAwgBIAyAAIAPgDIAQgBQAOAAAMAJQAMAJAAASQAAAegfAFQgbAFhRABQhXAAgagYg");
	this.shape_94.setTransform(186.7,43.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0099").s().p("AiPDFQgLgKAAgPIABg7IAAg8IABjUQgBgRALgOQANgSAYACIBBAFQAmAFAYANQBxA5AABTQAAAjgYAaQgYAagvASQBHAnAiApQAKAKAAANQAAAPgLALQgMAKgOAAQgPAAgLgLQhQhLhggdIAEBWQAAAPgLAKQgLAKgPAAQgQAAgKgKgAhRAIIALAAQBBAAAegPQAOgHAKgLQAMgMAAgGQAAgdgmgbQgigagogEIgegCg");
	this.shape_95.setTransform(152.4,43.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0099").s().p("Ah3DIQgKgKAAgOIAAhJQAAgpAFhQQAFhRABgoQAAhFAmADQAJgCAQgBIAmgBQAzAAAtAhQAzAlAAA2QAABEg2AnQgvAjhBAAIgWgCQgCAlAABUQAAAOgJAKQgKAKgPAAQgPAAgKgKgAgxiNIAAAmQAAAdgFA+IASACQAoAAAbgUQAdgUAAgjQAAgWgbgSQgagQgeAAIgOAAIgMAAg");
	this.shape_96.setTransform(120.3,43.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0099").s().p("Ah7DKQgcgaAAhWQAAgiAFhGQAFhIAAgiQAAgKgCgRQgDgSAAgKQAAgoAlAAQAMAAAJAGQAegHAdgDQAbgEAXgBQBCAAAoAPQAZAKAAAYQAAAOgJALQgLALgQABIgLgCQgsgMgoAAQgTABgWADQgXADgaAGQABAjgDBFIBmgKQAygEAOAAQAQgBAKALQAMAJAAARQAAAegiAEIg/AFIhwAKQgCAiAAAUQAAA0AHAIQADADAeAAIAwgBIAygBIAPgBIAQgCQAOAAAMAJQAMAKAAASQAAAdgfAGQgbAEhRAAQhXAAgagWg");
	this.shape_97.setTransform(211,198.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0099").s().p("Ah1CgQgngpAAg5QAAhXBNhcQBChOBDAAIAVABQAKAAAHACQALgLARAAQAbAAAGAfQAEAWAAAeQAAANgHALQgKAOgTgBQgYAAgLgZQgFgLgGgCQgEgCgRAAQghAAgqAzQg9BIAAA+QAAAdATAVQATAVAbgBQAZABAbgOQAKgGAegUQAVgOAKAAQAQAAALAMQALAKAAAOQAAAQgOALQhJA+hKAAQg7AAgpgsg");
	this.shape_98.setTransform(73.4,198.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0099").s().p("Ah6DKQgdgaAAhWQAAgiAFhGQAFhIAAgiQAAgKgDgRQgCgSAAgKQAAgoAkAAQAMAAAKAGQAegHAcgDQAcgEAYgBQBCAAAoAPQAYAKAAAYQAAAOgKALQgKALgRABIgLgCQgqgMgoAAQgVABgVADQgXADgZAGQAAAjgDBFIBngKQAygEANAAQAQgBALALQALAJAAARQAAAegiAEIg/AFIhvAKQgCAiAAAUQAAA0AFAIQAEADAeAAIAwgBIAxgBIAQgBIAPgCQAQAAAKAJQANAKAAASQAAAdgfAGQgbAEhSAAQhVAAgagWg");
	this.shape_99.setTransform(40.4,198.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0099").s().p("AhyC2Qg2gmAAgyQAAgqAlAAQAlAAAAApQAAAPAbATQAbARAXAAQAKAAAEgjIAFhSQAEg7AAhaIgBgRIgFAAIgfAAIgfgBQgQAAgLgJQgLgLAAgQQAAgkAvAAIAbABIAaAAIAxgBIAxgCQBHAAAAAnQAAANgJAMQgLALgRAAIgPAAIgQgBIgVAAIAAASQAAC8gbBWQgTBAgzgBQgxABgwgig");
	this.shape_100.setTransform(5.1,199.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0099").s().p("AhTDVQgdgHgSgLQgQAAgKgLQgLgKAAgPQAAgaADg1IAChPIgBhXIgBhYQAAgOAOgPQAOgOAQAAQAJAAAjAQQAoAUAIACQBMAZA3A1QBBA+AABLQAAAugWApQgXAqgnAZQgsAchOAAQgUAAgZgFgAhcCGQALAHANADQAOADAPAAQA4AAAZgPQAYgPAOgaQAOgaAAgcQgBhAhMgwQgZgQhUgjg");
	this.shape_101.setTransform(-31.6,199);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0099").s().p("ACGDHQgVgBgVgwQgOgfgKgpQgUADgrADQgqADgVAEQgNAdgeA6QgLATgVAAQgOAAgMgKQgMgKAAgPQAAgOAnhNQgDgJAAgHQABgMAYgIQAmg/AthGQBChkAPAAQAdAAAKAjIARBVQAPBMAYBhIANAiQAKAXgBALQABAQgMAKQgLAKgOAAIgBAAgAgUAYQAMgCAYgCIAlgDQgGghgMg3Ig3Bfg");
	this.shape_102.setTransform(-72.1,199.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF00CC").s().p("Ah7DJQgcgZAAhVQAAgkAFhGQAFhGAAgkQAAgIgCgTQgDgSAAgJQAAgoAlAAQALAAAKAGQAfgHAbgEQAcgDAXAAQBCgBAoAPQAZAKAAAYQAAAOgJALQgLAMgQgBIgMgBQgrgLgoAAQgTAAgWACQgXADgaAHQAAAjgCBFIBmgJQAzgGANAAQAQAAAKAKQAMAKAAAQQAAAfghAEIg/AGIhxAKQgCAhAAAVQAAA0AHAGQADAEAeAAIAwgBIAxAAIAQgDIAQgBQAOAAAMAJQAMAJAAASQAAAegfAFQgbAFhRABQhXAAgagYg");
	this.shape_103.setTransform(327.5,275.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF00CC").s().p("AiCDIQgMgNAAgPIAAkWIgCgkQAAgVACgOQADgYArgGQAUgFAuAAQAxAAAuAgQA1AlAAA4QAAAfgLAUQgJARgVATQAZAMAUAZQAXAcAAAcQAAAjgnAfQgZAVgcAKQg9AXhdAAQgQAAgNgNgAhHCNQAugCA0gPQAugNAAgQQgBgUgdgQQgXgMgUgDIhHgBgAhHiMIABA3IgBA4QAYADANgBQBPgHAAg1QAAgSgYgSQgXgSgcAAQgiAAgHABg");
	this.shape_104.setTransform(293.7,275.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:189.7,y:121.1}},{t:this.shape_81,p:{x:222.7,y:121.7}},{t:this.shape_80,p:{x:256.2,y:121.8}},{t:this.shape_79},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:189.7,y:121.1}},{t:this.shape_81,p:{x:222.7,y:121.7}},{t:this.shape_80,p:{x:256.2,y:121.8}},{t:this.shape_79},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_82,p:{x:108.9,y:198.3}},{t:this.shape_81,p:{x:141.9,y:199}},{t:this.shape_80,p:{x:175.4,y:199}},{t:this.shape_97},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_82,p:{x:108.9,y:198.3}},{t:this.shape_81,p:{x:141.9,y:199}},{t:this.shape_80,p:{x:175.4,y:199}},{t:this.shape_97},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_104},{t:this.shape_103},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_104},{t:this.shape_103},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(5));

	// Layer 2
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1,1,1).p("EA+DgijMAAABFHMh8FAAAMAAAhFHg");
	this.shape_105.setTransform(209.1,195.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFCC").s().p("Eg+CAikMAAAhFHMB8FAAAMAAABFHg");
	this.shape_106.setTransform(209.1,195.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189,-26.5,796.3,444.4);


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


(lib.walkingdog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(53,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:54.2,y:28.6},3).to({x:53,y:35.5},4).to({x:54.2,y:28.6},3).to({x:53.3,y:33.8},3).wait(1));

	// Layer 5
	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.3,62.8,0.998,0.998,32.6,0,0,-16.2,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-15.6,regY:-21.3,scaleX:1,scaleY:1,rotation:57.1,x:7.5,y:63},3).to({regX:-16.2,regY:-21.9,scaleX:1,scaleY:1,rotation:0,x:7,y:62.5},7).to({regX:-16.3,scaleX:1,scaleY:1,rotation:24.3,x:7.2,y:62.7},3).wait(1));

	// Layer 2
	this.instance_2 = new lib.Tween12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62.6,43,0.999,0.999,-10.3,0,0,4.3,-26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4.2,regY:-26.4,scaleX:1,scaleY:1,rotation:18.9,x:-62.7},7).to({regX:4.3,scaleX:1,scaleY:1,rotation:-6,x:-62.6},6).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ar1hnQACAAACgBQB8gbBdhrQAxg+AYgeQArg2AkgdQBihQCHgdQBlgWCnAAQBmAABHAXQA8ATA6AqQANAKBjBSQA8AzA7AnQARAMARAKAJ/kWQA4AIAhA+QAeA6AABRQAAB6hLCDQhGB6hUAyQiJBQgnAUQijBUhUAAIg/AFQgbAAhLgUQhKgTgIgGQgZgWg4geQgrgWgYgjQgLgPgygpQhKg/gVgTQiAh0AAhFQAAghAqhqQAqhqAXgYIgDAEQgmAehkAsQhfArgTAAQgXgDgNgP");
	this.shape.setTransform(-16.9,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().p("Ag7INQhKgTgIgHQgZgWg4gdQgrgWgYgjQgLgPgygqIhfhRQiAh0AAhGQAAggAqhqQAqhqAYgYIgEAEQgmAehkAsQhfArgTAAQgXgCgNgQIAEgGQB8gbBdhrIBJhcQArg2AkgdQBihPCHgdQBlgXCnAAQBmABBHAWQA8ATA6ArQANAJBjBSQA8AzA7AnIAiAWIgigWQA4AIAhA/QAeA6AABQQAAB5hLCEQhGB6hUAxQiJBRgnAVQijBThUAAIg/AEQgbAAhLgTg");
	this.shape_1.setTransform(-16.9,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(14));

	// Layer 6
	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(31,52.4,0.998,0.998,-28.1,0,0,6,-16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-16.5,rotation:-49.1,x:30.9,y:52.3},3).to({scaleX:1,scaleY:1,rotation:0},7).to({scaleX:1,scaleY:1,rotation:-21,x:31,y:52.4},3).wait(1));

	// Layer 4
	this.instance_4 = new lib.Tween13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-32.2,48.1,1,1,0,0,0,6.6,-20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:6.7,scaleX:1,scaleY:1,rotation:-30.8},7).to({regX:6.6,scaleX:1,scaleY:1,rotation:-4.3},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.7,-24,193.4,140.7);


(lib.sittingdog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		/* gotoAndPlay(36);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(1));

	// Layer 4
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(29.8,19.3,0.934,1.05,13,0,0,34.9,24.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true},15).wait(55));

	// Layer 3
	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.6,15.4,0.808,0.817,0,6.3,-173.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:19.8},1).to({y:28.4},2).to({_off:true},1).wait(70));

	// Layer 1
	this.instance_2 = new lib.Tween16("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(101.6,25.5,0.761,0.761);

	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(69.7,46.1,0.759,0.759,32.6,0,0,-16.2,-21.9);

	this.instance_4 = new lib.Tween12("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(26.1,31.2,0.76,0.76,4.5,0,0,4.4,-26.3);

	this.instance_5 = new lib.Tween11("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(98.5,40.4,0.759,0.759,-28.1,0,0,6,-16.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ao+hNIABgCQBfgUBGhSQAmgvASgXQAhgpAbgWQBKg9BngWQBNgQB/AAQBNAAA2ARQAuAOAtAhQAJAHBLA+QAvAnAsAeQArAGAZAvQAXAsAAA+QAABcg5BkQg2BdhAAmQhoA9geAPQh8BAhAAAIgwADQgUAAg5gOQg4gPgGgFQgTgRgrgWQghgRgSgaQgIgLgmggQg5gwgQgPQhhhYAAg1QAAgYAghQQAehLARgWQABgBABgBAHmjTQANAJANAIAlliWQgcAXhNAiQhIAggPAAQgRgCgKgL");
	this.shape.setTransform(62.1,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9933").s().p("AgtGQQg4gPgGgFQgTgRgrgWQghgRgSgaQgIgLgmggIhJg/QhhhYAAg1QAAgYAghQQAehLARgWIACgCIgCACQgcAXhNAiQhIAggPAAQgRgCgKgLIACgDIABgCQBfgUBGhSIA4hGQAhgpAbgWQBKg9BngWQBNgQB/AAQBNAAA2ARQAuAOAtAhIBUBFQAvAnAsAeQArAGAZAvQAXAsAAA+QAABcg5BkQg2BdhAAmQhoA9geAPQh8BAhAAAIgwADIAAAAQgUAAg5gOgAIAjCIgagRIAaARg");
	this.shape_1.setTransform(62.1,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AJjhTIgCgCQhkgWhLhXQgogzgTgYQgjgtgdgYQhPhAhtgYQhRgSiHAAQhTAAg5ASQgwAQgwAjQgKAHhQBDQgxAqgvAgQgtAGgbAzQgZAwAABCQAABjA9BrQA5BkBEAoQBvBDAfAQQCEBEBEAAIAzAEQAVAAA9gQQA7gPAHgGQAUgSAtgYQAjgSAUgcQAIgMAogjQA9gzARgQQBnheAAg5QAAgagihXQgghQgSgXQgBgBgBgBAF8ihQAeAZBRAkQBNAjAQAAQASgCALgNAoDjjQgOAKgNAI");
	this.shape_2.setTransform(79.5,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC9933").s().p("AghG9IgzgEQhEAAiEhEQgfgQhvhDQhEgog5hkQg9hrAAhjQAAhCAZgvQAbg0AtgGIgbASIAbgSQAvggAxgqQBQhDAKgHQAwgjAwgQQA5gSBTAAQCHAABRASQBtAYBPBAQAdAYAjAtIA7BLQBLBXBkAWIACACIACADQgLANgSACQgQAAhNgjQhRgkgegZIgCgCIACACQASAXAgBQQAiBXAAAaQAAA5hnBeIhOBDQgoAjgIAMQgUAcgjASQgtAYgUASQgHAGg7APQg9AQgVAAIAAAAg");
	this.shape_3.setTransform(79.5,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AnFivQgoAFgXAnQgWAlAAAzQAABMA2BTQAyBNA7AfQBiAzAcANQBzA1A8AAIAtADQATAAA1gNQA0gLAGgFQASgOAogTQAegOARgVQAIgJAjgbQA1goAPgMQBbhJAAgrQAAgVgehCQgcg+gQgSQAbATBHAcQBDAbAOAAQAQgCAKgKAIag/IgCgCQhYgRhChEQgjgngRgTQgfgigZgSQhGgyhggTQhIgOh2AAQhIAAgzAOQgqAMgqAbQgJAGhGA0QgsAggpAZQgMAHgMAH");
	this.shape_4.setTransform(82.7,38.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9933").s().p("AgdFYIgtgDQg8AAhzg1QgcgNhigzQg7gfgyhNQg2hTAAhMQAAgzAWglQAXgnAogFIgYAOIAYgOQApgZAsggIBPg6QAqgbAqgMQAzgOBIAAQB2AABIAOQBgATBGAyQAZASAfAiIAzA6QBDBEBYARIACACIABABQgKAKgQACQgOAAhDgbQhHgcgbgTQAQASAcA+QAeBCAAAVQAAArhbBJIhEA0QgjAbgIAJQgRAVgfAOQgnATgSAOQgGAFg0ALQg1ANgTAAIAAAAg");
	this.shape_5.setTransform(82.7,38.6);

	this.instance_6 = new lib.Tween3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(49.7,28.7,0.999,0.999,26.1,0,0,18.4,5.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_5,p:{regX:6,regY:-16.4,scaleX:0.759,scaleY:0.759,rotation:-28.1,skewX:0,skewY:0,x:98.5,y:40.4}},{t:this.instance_4,p:{regY:-26.3,rotation:4.5,scaleX:0.76,scaleY:0.76,skewX:0,skewY:0,x:26.1,y:31.2,regX:4.4}},{t:this.instance_3,p:{x:69.7,y:46.1,regX:-16.2,regY:-21.9,scaleX:0.759,scaleY:0.759,rotation:32.6,skewX:0,skewY:0}},{t:this.instance_2,p:{x:101.6,y:25.5,scaleX:0.761,scaleY:0.761,skewY:0}}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_5,p:{regX:6,regY:-16.4,scaleX:0.759,scaleY:0.759,rotation:-28.1,skewX:0,skewY:0,x:98.5,y:40.4}},{t:this.instance_4,p:{regY:-26.2,rotation:9.5,scaleX:0.76,scaleY:0.76,skewX:0,skewY:0,x:26.1,y:31.2,regX:4.4}},{t:this.instance_3,p:{x:60.9,y:49,regX:-16.2,regY:-21.9,scaleX:0.759,scaleY:0.759,rotation:32.6,skewX:0,skewY:0}},{t:this.instance_2,p:{x:86.7,y:31.1,scaleX:0.761,scaleY:0.761,skewY:0}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_5,p:{regX:5.9,regY:-16.5,scaleX:0.808,scaleY:0.813,rotation:0,skewX:27.8,skewY:-151.7,x:27.8,y:47.7}},{t:this.instance_4,p:{regY:-26.3,rotation:0,scaleX:0.807,scaleY:0.816,skewX:-9.4,skewY:170.4,x:117.8,y:33.9,regX:4.4}},{t:this.instance_3,p:{x:90.5,y:48.5,regX:-16.3,regY:-22,scaleX:0.809,scaleY:0.813,rotation:0,skewX:-32.3,skewY:147.1}},{t:this.instance_2,p:{x:64.9,y:30,scaleX:0.808,scaleY:0.817,skewY:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance_4,p:{regY:-26.3,rotation:0,scaleX:0.739,scaleY:0.767,skewX:2.3,skewY:-177.8,x:115.8,y:37.8,regX:4.3}},{t:this.instance_3,p:{x:73.2,y:52.1,regX:-16.3,regY:-22,scaleX:0.747,scaleY:0.759,rotation:0,skewX:-31.6,skewY:146.4}}]},1).to({state:[{t:this.instance_6}]},19).to({state:[{t:this.instance_6}]},13).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({_off:false},0).to({startPosition:0},13).to({regX:18.7,scaleX:1,scaleY:1,rotation:7,x:49.8},6).to({regX:18.4,scaleX:1,scaleY:1,rotation:26.1,x:49.7},5).to({regX:18.7,scaleX:1,scaleY:1,rotation:7,x:49.8},5).to({regX:18.4,scaleX:1,scaleY:1,rotation:26.1,x:49.7},5).to({regX:18.7,scaleX:1,scaleY:1,rotation:7,x:49.8},5).to({regX:18.4,scaleX:1,scaleY:1,rotation:26.1,x:49.7},5).to({regX:18.7,scaleX:1,scaleY:1,rotation:7,x:49.8},5).to({regX:18.4,scaleX:1,scaleY:1,rotation:26.1,x:49.7},5).wait(1));

	// Layer 5
	this.instance_7 = new lib.Tween11("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(52.8,48.9,0.776,0.804,0,26.6,-150.4,5.9,-16.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({_off:true},19).wait(55));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AkKmIQApgQAMAAQABAABFgNQBKgNAdAAQAIAAAggHQBVAACYBlQCdBnABBHQgBABAPApQAOApAAAiQAAAKAIAxQAAAHgBAGIgBAJIAAABQAIAYAAAJQAAABAOAXQA2g1Aag5QAQghAMgzQADgJACgKIADgDQABACABAVQgBAVANArQAABHgfBAQgnBQhBAAQgkAWgTAAQgEABgEgBAGaCwQgRAJgNAHQgnAVAAABQAAAEARAYQAUAcATAFQgiAlggAdQg9A4gjAAQgOAAgpAPQgpAPgFAAQgaAIgIAAQgjAHgIgBQgYABgbgfQgdgngQgTQAognAVAAQAIAAAQgFQAIAAAQgTQAIAAAFgFQAFAAARgSQAPgQALgCQACAAABAAQAIAAADgDQgHACgEgBQgDAAgBgCQgCgBABgCQgdgjgdglQgKgMgHgLQgog2AAgOQgGgLAAgIQAAhJAig1AggCrQgNAFgNADQgHACgGACAA2CTQguAbgHAAQgPAAgQAGQgCABgDABIADgLQAJgDAKgEAkll4QAPgIASgJQgBAAgCAAQgCABgBAAQgIADgGADQgJAFgEAFQgCABgCABQg5AegZAPQg3AfgcAcQg+BBAACTQAAAcAQAyQAJAbANAiQAmBkAAAfQAAAohCAdQghANgNAGQgUAKAAALQAAAXAqASQAiAPAWAAQAPAAAggLQAJArBuAAQASAAAegPQAAACAAABQAsgfAGgIQAGgHAQhHQAPhGADgiQACgdAAgaQgHgqAAgIQAEg8gCgWAiyCwIATACQA7AAAqgDAlrBjQgMgcgGgRAn8AUQAtAIAmAdQAtAhARAJAmzFuQgBgDABgEQAAgcA6gSQA7gSAAgXQAAgwgThDQgPghgLgZ");
	this.shape_6.setTransform(92.4,45.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC9933").s().p("AA5G6QgYAAgbgfQgdgngQgTQAognAVAAQAIAAAPgFQAJAAAQgSQAIAAAFgGQAFAAARgSQAPgQALgCIADAAQAIAAADgCQgHABgEgBIgEgBQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQgcgjgdglIgSgXQgng2AAgOQgGgLAAgIQAAhJAig1QgiA1AABJQAAAIAGALQAAAOAnA2QgtAbgHABQgPAAgQAFIgCgJIATgHIgTAHIgaAIIAAgEQgqADg8AAIgTgCQADgcAAgZIAAgCQgHgqAAgIQACgpAAgYIAAgRIAAARQAAAYgCApQAAAIAHAqIAAACQAAAZgDAcQgCAigQBGQgPBHgGAHQgGAIgsAfIAAgDQgeAPgSAAQhuAAgJgrIAAgHIAAAAQAAgcA6gSQA7gSAAgXQAAgwgThDIgag5IAaA5QATBDAAAwQAAAXg7ASQg6ASAAAcIAAAAIAAAHQggALgPAAQgWAAgjgPQgpgSAAgXQAAgLAUgKIAugTQBCgdAAgoQAAgfgmhjQgNgjgJgbQAtAIAmAdQAtAhARAKQgMgdgGgRQAGARAMAdQgRgKgtghQgmgdgtgIQgQgyAAgcQAAiTA+hBQAcgcA3gfQAZgPA5geIAEgCIAhgRIgDABIgDABQApgRAMAAIBGgNQBKgNAdAAQAIAAAggHQBVAACXBlQCeBnABBHIAOAqQAOApAAAiQAAAKAIAxIgBANIgBAJIAAABQAIAYAAAJIAOAZQA2g2Aag5QAQghAMgzIAJABQAAAVANArQAABHggBAQgmBQhBAAQgkAWgTABIgIgBIgDgGIAegQIgeAQIgnAWQAAAEARAYQAUAcASAFQghAlggAdQg9A4gkAAQgNAAgpAPQgpAPgFAAQgaAIgIAAQgjAHgIAAIAAAAgAn8AUIAAAAg");
	this.shape_7.setTransform(92.4,45.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AC9kvQAEACADABQCdBNAABbQAAABALAVQAAAIAGAIQAAAIAHAiQAAADAJAwQAAAHAIAYQAAAhgIAjQAAACgBACQAAABAAAAQABAAAAAAQAGgEABAAQAdAAB4h2QABgCACgCQADAEAAAGQgeBkgNAgQgHARgcAjQghApgQAAQgYARgDAAIgXAFQgrgJgsAAQgGAAgZARQgYARgEAGAjemJIAKAFQABAAACgBQA1gQAOAAQAIAAAbAFQAtAAAXAFQASAFBLAWQBWAVApAeQAKAHAHAHADiEAQgDACgBAGQgBADAAAFQAAAIANAsIgBAJIAKAAQgJAJgBAAQgwAWgBAAQg8AOgcAAQgVAGgTAAQgSAGgHAAQgPAEgHAAQh3AMgEAAQgPAAgSgYQgTgbAAgZQAAgEAQgIQASgIALAAQASAAAsgRQAngPAMgJQgkgIg0g9QgTgWgMgPQAAgBAAAAQgSgXAAgGQgFgPAAgHQAAgsAfgkQAEgGAGgFQAVgVBAglAGBBnQgBAGgCAFAkQlxQAEgFAIgEQAEgCAGgCQABgBACAAQACgBACgBQABAAABAAQgFACgEADQgMAGgKAFgAneAKQgQgwABgaQgBiNA8g+QAbgbA0geQAYgOA2gdQACgBADgBAjemJQABAAABAAAj3l/QAOgGALgEAmYFWQggAKgNAAQgWAAgggOQgogRAAgXQAAgKATgKQAHgDANgFQAKgFAOgFQA/gcAAgmQAAgBAAgBQAAgNgHgZQgJghgUg0QgNghgIgaQArAIAlAcQAqAfARAJQgMgbgGgQAiuCiQACgdAAgYQgGgoAAgIQADg5gBgVAh/CjQAAAAAAAAQgOAAgPAAIgSgBQgDAggOBDQgEARgDANQgJAogEAFQgGAHgnAbQgCACgCABQAAgBAAgCQgEACgCAEQgRAGgLAAQhqAAgIgoQgBgEAAgEQAAgaA4gRQAQgFALgFQAdgOAAgQQAAgXgEgcQgDgSgFgUQgDgKgDgLQgOgfgKgYAkAF0QgFACgFAC");
	this.shape_8.setTransform(89.1,48.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC9933").s().p("AiTF9QgTgaAAgaQAAgDAQgIQASgIALAAQASAAAsgSQAngOAMgJQgkgIg0g9IgfglIAAgBQgSgXAAgGQgFgPAAgHQAAgsAfgkIAKgLQAVgVBAgmQhAAmgVAVIgKALQgfAkAAAsQAAAHAFAPQAAAGASAXIAAABIAAAAIgdAAIgSgBQACgdAAgYQgGgpAAgHQACgoAAgWIAAgQIAAAQQAAAWgCAoQAAAHAGApQAAAYgCAdQgDAggOBDIgHAeQgJAogEAFQgGAHgnAbIgEADIAAgBIAAgCQgEACgCAEQgRAGgLAAQhqAAgIgoIgBgIQAAgaA4gRQAQgFALgFQAdgOAAgQQAAgXgEgcQgDgSgFgUIgGgVIgYg3IAYA3IAGAVQAFAUADASQAEAcAAAXQAAAQgdAOQgLAFgQAFQg4ARAAAaIABAIQggAKgNAAQgWAAgggOQgogRAAgXQAAgKATgKIAUgIIAYgKQA/gcAAgmIAAgCQgBgNgGgZQgJghgUg0QgNghgIgaQArAIAlAcQAqAfARAJIgSgsIASAsQgRgJgqgfQglgcgrgIQgQgwAAgaQAAiNA8g+QAbgbA0geQAYgOA2gcIAFgDIAVgLIAKgFIgDABIgDABIAZgKIACAAIAAgCIAGgBQABAEAEADIgDABIgKgFIAKAFIADgBQA1gQAOAAQAIAAAbAFQAtAAAXAFIBdAbQBWAVApAdQAKAIAHAHIgCADQCdBNAABbIALAWQAAAHAGAJQAAAIAHAiIAJAzQAAAGAIAZQAAAhgIAjIgBAEIAAABIABAAIAHgEQAdAAB3h3IAHAHQgeBjgNAhQgHARgcAjQghApgQgBQgYASgDAAIgXAFQgrgJgsAAQgGAAgZARQgYAQgEAHIgDgBQABgGADgCQgDACgBAGIgBAIQAAAIANAsIgBAJIAKAAIgKAJIgxAWQg8AOgcAAQgVAGgTAAQgSAFgHABQgPAEgHAAIh7AMQgPAAgSgZgAF+ByIADgLIgDALgADEksIgHgDIAHADgAkEFyIAAACIAAABIAEgDIAAACIgKAEQACgEAEgCgAkAFygAneAKIAAAAg");
	this.shape_9.setTransform(89.1,48.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AEKEdQAXAHAtANQAQAAAxghQAogcAMgNQATgUA7hkIAAgTQgDAAAAgFQgFAHgGAHQhHBYhNA1IgHAAIAAgVQASgdAEgYQABgIAAgqQAAhdgCgMQgDgSgnhuQgPgogzgwQglgigmgXQhmg+hqgjQhqgjhPAAQgJAAgRAFQgRAJgPAIQgCABgCABQg2AcgYAPQg1AegaAbQg8A9AACNQAAAaAQAxQAIAaANAgQAkBfAAAfQAAAmg/AbQggANgMAFQgUAKABAKQAAAXAnARQAhAOAVAAQAOAAAggKQgBgEAAgDQAAgbA4gRQA4gRAAgXQAAgugSg/QgOgggKgXQgMgbgGgRAjlFvQAAgKAAgQQgBgkAFgLIAcAAQAuALAJAAQARAABPgYQACAAACgBIgFgDQg4gEhHgsQhTgzAAg8QAAg+BUgvQBAghBOgNAjlFvQAAAMgBACQAGACAnAFQApAFANAAQAaAAAhgHQAhgIAQAAQAhAAA8AHQBNAAAqgKQAmgJBFgiIgegmQgMgNALAEQAAAAABAAAEKEmIAAgJAjdmDQgCABgBAAQgVAGgIAKAnKAJQAqAHAlAcQArAgARAJAmEFUQAIApBqAAQAQAAAdgO");
	this.shape_10.setTransform(87.1,48.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC9933").s().p("Ai5GEQgngFgGgCIABgOIAAgaIAAgLQAAgaAEgKIAcAAQAuALAJAAIABAAIAEAAIABAAIABAAIABAAIAAAAQATgDAtgOIACAAIABgBIACAAIADgBIADgBIAAAAIAFgBIABgBIAEgBIABAAIACgBIAEgBIgFgDQg4gEhHgsQhTgzAAg8QAAg+BUgvQBAghBOgNQhOANhAAhQhUAvAAA+QAAA8BTAzQBHAsA4AEIABAEIgCABIgBAAIgEABIgBABIgFABIAAAAIgDABIgDABIgCAAIgBABIgCAAQgtAOgTADIAAAAIgBAAIgBAAIgBAAIgEAAIgBAAQgJAAgugLIgcAAQgEAKAAAaIAAALIAAAaQgdAOgRAAQhpAAgIgpIgBgHQAAgbA4gRQA4gRAAgXQAAgugSg/IgZg3IAZA3QASA/AAAuQAAAXg4ARQg4ARAAAbIABAHQggAKgOAAQgVAAghgOQgngRgBgXQAAgKAUgKIAsgSQA/gbAAgmQAAgfgkhfQgNgggIgaQAqAHAlAcQArAgAQAJIgSgsIASAsQgQgJgrggQglgcgqgHQgQgxAAgaQAAiNA8g9QAagbA0geQAZgPA2gcIAEgCIAggRQARgFAJAAQBPAABqAjQBqAjBmA+QAmAXAlAiQAzAwAOAoQAoBuADASQACAMAABdQAAAqgCAIQgDAYgSAdIAAAVIAHAAQBNg1BHhYIAOAKQg7BkgTAUQgMANgpAcQgwAhgQAAIhEgUIgBAAQgLgEAMANIAeAmQhFAigmAJQgqAKhNAAQg8gHghAAQgQAAghAIQghAHgbAAQgMAAgpgFgAnKAJIAAAAg");
	this.shape_11.setTransform(87.1,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},22).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,-17.9,134.1,105.3);


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
		var bgm = createjs.Sound.play('bgmPA',{loop:-1});
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../miniMenu/miniMenu.html","_self");
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
		
		 window.open ("predAdj_scene2.html","_self");
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


// stage content:
(lib.predAdj_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1repeat:121});

	// timeline functions:
	this.frame_0 = function() {
		/* play();
		*/
	}
	this.frame_4 = function() {
		playSound("thepredicateadjective");
	}
	this.frame_120 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_141 = function() {
		/* gotoAndPlay("scene1repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(116).call(this.frame_120).wait(21).call(this.frame_141).wait(1));

	// Layer 8
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(274.7,68.6,0.759,0.759,0,0,0,244.6,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(142));

	// Layer 5
	this.instance_1 = new lib.walkingdog();
	this.instance_1.parent = this;
	this.instance_1.setTransform(590.7,267.6,0.818,0.803,0,0,180,52.2,39.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.sittingdog();
	this.instance_2.parent = this;
	this.instance_2.setTransform(164.2,270.9,1.123,1.154,0,-2,178,31.2,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},37).to({state:[{t:this.instance_1}]},50).to({state:[{t:this.instance_2}]},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).to({regX:52.3,regY:39,scaleX:0.89,scaleY:0.87,x:100.1,y:269.6},50).to({_off:true,regX:31.2,regY:22.8,scaleX:1.12,scaleY:1.15,skewX:-2,skewY:178,x:164.2,y:270.9},1).wait(54));

	// Layer 1
	this.instance_3 = new lib.predicateAdjectivesentence();
	this.instance_3.parent = this;
	this.instance_3.setTransform(279.1,121.6,0.565,0.565,0,0,0,217.6,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({regX:217.5,scaleX:0.29,scaleY:0.29,x:269.6,y:109.4},36).wait(75));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAniAFlIAA9UIv0AAImwAAIguAAIiaAAIgfAAIg9AAIghAAIgtAAIgaAAIiYAAMgv7AAAIAAeyIAAN7IAACyMBPDAAAIAAkdg");
	this.shape.setTransform(274,193);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AYIjdQgXAKglAYAY8jDQgjAQgDAHQAAAJgGAMAaAiyIgaAbAXdj2QgpAOg1AlARuFWQAPgPAPgPAUEFCQAKgPALgOQAJgLAKgKA4xmhIgJAqA5/nDIAABVA5FHEQAUgeAKghQAFgRADgSQAHgjAAglQAAgjgEgjQgBgFAAgFA1pF+QgLgrAGgrQABgLADgLQABgHAKgFAslFWQAjgcAqgOQAQgGARgEQAKgDAKgFAvPDKQgOAOgOANQgBABgCABQgdAageAZA03FCQAJgZAIgYQACgGABgFAy/DyQAZgZAZgZQAFgFAFgFAEfmQQgTAOgLAIQgCACgLAbAGGl3IgSAaIAAA8ADsnDIgSAiApxF+QAtgPAqgVQASgIAQgLQAKgHAJgIAnlGcQAKgFAIgHQAHgIAFgKAltF+QAPgKAPgLQAFgEAFgFAOmE4QgGAJgHAIQgFAGgFAFQgWAWgZAUAPiFWQAPgKAPgKAMGGIQAZgUAZgTQAJgHAIgGQALgJAMgJ");
	this.shape_1.setTransform(217.6,289.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AgeoCQgEAOgCANQgBAHADAMQACAMALARQAFAJAFAXQADATADASQAAADABAEQAEAqALA1QABAJADAPQADATAEAeQAAABAAACQABAIABAIQAGAlAGAXQAAACAAABQAAAAAAABQAAARADANQADANAHAIQAAAAABAAQgBABAAABIACAGQAKApAOAtQAFAQAFAOQAIAYAIAQQALAYAEAGQAEALAFAMQABAMANAYQABAAAAABQAAAAABABQADAKAEAJQAEANAHAQQAEAKAGALQAEAHAEAHQAJANAAAIQgEADgDACQgJAJARgEQABgBABAAQAOAVAWAJQATAIAYAAQAAAAABAAQACAAABACQAEACADAGAigBVQAAgHAAgGQAAgFAAgEQAAgjAAghQAAgZgBgaQAAgMAAgOQAAgQAAgSQAAgNAAgOQAAgQAAgPQAAgBAAgBQAAgIgBgIQgBgQgDgOQgBgKgBgKQAAgBAAgBQABgFAAgFQACgOgGgXQgCgZgBgWQAAgCgBgCQAAgDAAgCIAAgCQAAgFgBgFQAAgRAEgEQgDgCgCgCQgLgKAKgCQABAAABgBQgPgIABgJAhkiQQAFAOAEAOQAGARADARQADANACANQAIAygCAzQAAAJAAAJQgCA0AEA5QABALABALQAGA+ApAxAB3GfQACAEADAEQADADACAEAC9EzQgBAAgBABQgfAUAIAPQAKARAQANQAsAmA3AOADcHJIABAAQAYATAXAUQAGAEAFAFADPHwQgGgOgGgPQgJgUgHgWACBG9QAAgHAAgIQAJANAHAOQAEAIAAAKACCGoQgBADAAADAAyg9QgBABAAAAQgDACgDACQgYAVAKAVAkgG+QABgCABgBQArgzASgJQABAAAAAAQASgJADgDQADgEAdgNQgIgGgCgHQABgJAAgIQAUg8gEhGQgBgQABgQQABgJABgIQAEglABgkQAAgFABgEQAAgJAAgJQABgPgCgQQgCgOgBgPQABgKAAgJABPGpQgOgYgaACQgYACgLALQgBABgBABQgJALgGAMQgQAhATApAAdEnQgWg/gog2AjIH7QAYgMAUgKQAlgUATgMQAcgSANAHQANAHAAAaQABAUAFAU");
	this.shape_2.setTransform(398.9,204.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996633").s().p("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");
	this.shape_3.setTransform(274,250.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006633").s().p("AljKMIgNgMQAAgTAVgeIAQgWQAggqA8g7QB4h2AVgCQALA4hkBpIhTBTQgwAwgUAbIgRgPgAnoI2QAAgLANgXQAYgpBDhOIAug1IAAgCQCHj3BVghQADgFAAgDIAMAAQADAABZA5QAvg1AZgTQAHACAJAAQADABABADIARgTIAggjQg9gDg5goQgLASgJAOQgKgBgDgCQgEgBAAgQQAAgPAHgXQgggdAAgKQAAgPAEgIQADgHAAgDIAIAAQAHAQAWAUQAOgkAZgwIAVgmQgNgWAAgaIADgLIAMAAQAGAMAMANQAbguAUgWQAHADAIAAQAFACAAAPQAAAJggBFIAKAIIBIAtQAPAKgZgBQg3AAgkgWIgDAGQgfBBgZAsQAyAjBCAaQAXgVAQgKIAKATQAFALAAAOQAAAJhABMQg7BHgQANIACABQgDAIgKAFIgegLQg0BBhhBnIgbgcQAAgQBYhrIAigpQhNgkgIgnQgiB8hOBZQgDAUhoCAQhWBpgrApIgRAPQgFgJAAgZgAAlCeIAUAMIgRgRIgDAFgAjNI1ICPjXQBSh6BMg/IAFgCQAFABAAAQQAAAghvCgQh5CuhAAYIgGABQgHAAgCgGgADlIDQAAgBA2hHQA1hHAAglIAIAAQADAJANAZQALAVAAAIIgBAFQgEAKgTAeIgWAgQgwBDgQAIQgggbAAgIgAgWIhQgGgCAAgPQAAgfBRh6QBQh6AfgSQgDAPAFAaQAAAkgzBgQg8Byg/AaQgLgCgDgBgAk2HjQA7heAQgYQA3hLAtgZQgWAlgoBLQgpBCg8AsgAB8HSQgFgEAAgQQAAgeAng5QAmg4APgDQAHADAHAAQAEACAAAPQAAAOghA7QgjA+gUAPQgNgCgEgCgAnEGGIgIgBQgCAAgBgMIAAgDQAAg0Bjh6IAfglIA1hjQBCh5Akg0IARAOQAEAFABAIQBFhkBIg5QAKghAVgrQAhhCAbgXIAFgCQAFABAAAQQAAAWhMB2IAGAAQAFACAAAPQAAAUhWBpQhIBXg1AyIgUAmIAAACQAAAOhfCDQhiCGgtApIgEAAgAHhEzQAAg5AZgKQAPAiAAAhQAAAagMAbIgIAFQgUgZAAghgAFKECQgLgeAAgKIACgSQAFAAAUgFQAmAAgKAqQAAAWgXAkQgJgFgMgggAnDDPQgEgGAAgQQAAgPAcg8IAeg5QBAh6AtgmIARAHQAIAFAAAQQAAAihHB5Qg1BaghAgQgNANgKAEIgIgIgAEnBtQhDgugMgSIAIAAICYBxQgTgIg+gpgAoDBqQgFgEAAgQIABgHQABgJAGgQQAQgoAqhOIAWgpIAIgPQAvhSAdgeIADACQAYgjAjgtQBniJAjgeQAHADAKACQAIADAAAOIAZgbQAHADAIAAQAFACAAAQQiqFIiRBeIABgEIgFAKQg/BsgmAjQgNgCgEgCgAh3kpQBChpA7hNQAIALAAAbQiEEnhuAtQAlhTBIhxgADJjjQgogrgZg2QADgEAAgEQACgCAPAAQAKAABLAyQBVA5ASAkIgDARQgDAFgRAAQg/AAg5g6gAm2jvIAUgqQB6j8BVh2IALgPIAQAAQADABABAOIgfAAIAfAAIAAACQAABLj4FUgAA0m7QgagngHgKQgBgFABgDQABgCAQAAQAVAAAZAqQANAWATAiIgDAFQgfgIgcgkgAmfnXQAAgiBThuIAbgkIAhAAQgPAbgUAiQhABtgRAlQgbgZAAgCgAmVpQIAdg7IAaAAQgiAwgOARgAgaqLIAtAAQAHAIADAJQAAAIgPACg");
	this.shape_4.setTransform(380.7,106.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009933").s().p("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");
	this.shape_5.setTransform(274.5,185.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9F8F9").s().p("EgnhgPYMAv7AAAQgcAhgMARIAAAyIAJAGQAFAEAQAAQARAAAYgSQguA9AAAHQAAAjAjAAQAXAAByiYIAFgHQAIANAAAEIgGAUIgKAJQhUBRAAATIAeAcIADgDQhlCEAAAVIAQAPQgfAzAAALQAAAIAhAbQAigsAyhGIAGAMQg+BVhHB6QABAjAgAAQAbAABDhRIgJAPQhpB4AAAQIAaAYQgGAQgCAJQgpA5AAAJQABAjAgAAQAOAAA9hHQAGAFAJAEIALgIQgcA8AAAPQgBAQAFAGIAIAIQAKgEANgNIAFAHQiACPAAATQAAAjAjAAQAQAAAdgaQAAAMADABIAIAAIgBAFQAAAIABAFQgsA+AAAeQAAAaAVAHQgNAWAAALQAAAZAFAJIARgPQhDBfAAAcQAAAjAjAAQAEAABmiFIAEAAQAZAAAQgTIARgcIgCAGIgPAWQgVAfAAASIANAMQgzBNAAAaQAAARALARQAFAJAIAIIAOAOIAJgOIALgRIAkg5QAOAIAUAAIALgBIgBAHQAAAGAeAaQApgsBAiUIAMgbQAGAIAJAEQALAGAVADQgaBigBASQAAARAFADQACACAQACQAKgCAFgDQAQgiAahDQAEgKAWgCIAGAAQgFADABASIAAAKIAAABIABAFIAAAEIADAwQAHAWgCAPIgBAKIgBABIACAVIACAdIABARIADAgIABAcIADAgIAAACIgCAaIgBAWIAAASIgBALIAAgzIAAgNIAAgNIAAgRIAAgRIAAgcIAAAcIAAARIAAARIAAANIAAANIAAAzIgEBFIgBAIIgEBPIguAGQmwguhxgDIlzgFQkDgDh5gOQhtgWhagPQitgfiBAAQifAAkBAsIgkAHIiwAhIgjAAQgrAAhiAVQhiAVhjAAQhZAAiUAZQhwASg0ATQiXAPhVAAIgLAAQgXgXgrAAQgbAAgNAXIgGBoIAAABIAAABIgEAJgAsfC/QB3AOBCAPQASAAARgqQARgpAAgpQAAglhFhMQhFhOghAAQgeAAhJAZQgFgxgxg1QhBhFhaAAQhNAAhoBAQhmA9gNAuQgGgthKgxQhMgzhGAAQinAAiABnQh4BgAABsQgBAVAJAEIAIAAQgHAXgCAQQgBAMACAKIBeAAQBWgJHngIQEQAADsAegEAleAMxQjwAAjMAZIiuAVQgHAGgKAEQgjAPhaAAQiWAAg/guQgTgOgLgRQgNgFgHgNQgGgLAAgNIAAgIIgLACIgTgyQgZhEgOgyIgCgFIABgCIgBAAIgGgVIgCgHIgEgZIgBgCQgGgXgFglIgDgRIAAgDIgHgwIgEgZIgRhmIgGgkIgLg/QAkAoBEA/QBgBaAWAAQBAAAgHhIQABgog4g9IgJgKQAtASAqAAQAQAAAEgJIACgQQgIgPg6gcQgwgXgPgEIgHgCQATgdAEgLIATAFIAMADQATAOALAAQAJAAAIgDQBhAVBRAAQASAAAIgEIAEgDQAuAEAnAAIACAAQAdgCAQgoQABgPgbgMQAbgOgBgSQAAgXgtgNQgcgJgwgEIhggEQB8gBAwgLIACAAQAbgHAWgVQgSgLghgIQgwgKhRgDIgQgBQAmgCAXgFQA5gLAAgeQAAgfgjAAIilACQAZgHAfgNQA1gYASgQQglgWgZAAQgIAAgwAKQgbAFgUACQAqgIARgQIAWgFQBPgVAhggQgRgZghAAQgbAAgpAEQAGgIAAgKQgBgChThJIAQABQAwAAAUglQgrgriAhYIgRgMIAAgGQBXAnA/AAQAeAAAAgdIhpg7QBQAAALgHQADgCADgIQADgHAKgGQgUgOi1g2QADgHAAgHIgTgoQBAAMAwAAQAMAAAPgKIAcgUQhIg1iOgaIgDgEQAiADArAAQBBAAAJgPQACgDADgMQABgHAFgFIP0AAIAAdUQhChLhCAAgAQvD8IAAANQgKgLAKgCg");
	this.shape_6.setTransform(274,139.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(142));

	// Layer 7
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(142));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(294.5,201.6,522,398.7);
// library properties:
lib.properties = {
	id: 'A3EEA22630991A44B47E901730CBC0A1',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/bgmPA.mp3", id:"bgmPA"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
		{src:"sounds/sexy_sax.mp3", id:"sexy_sax"},
		{src:"sounds/thepredicateadjective.mp3", id:"thepredicateadjective"}
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
an.compositions['A3EEA22630991A44B47E901730CBC0A1'] = {
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