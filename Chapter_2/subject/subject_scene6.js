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


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("thesubjectsheisapronoun");
	}
	this.frame_75 = function() {
		playSound("she");
	}
	this.frame_168 = function() {
		playSound("shekicks");
	}
	this.frame_280 = function() {
		playSound("shekicksapass");
	}
	this.frame_324 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(71).call(this.frame_75).wait(93).call(this.frame_168).wait(112).call(this.frame_280).wait(44).call(this.frame_324).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.staticperiod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAKQgGgEAAgGQAAgFAGgEQAFgFAGABQAIAAAFADQAFAFAAAFQAAAGgGAEQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(6.7,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,34.7);


(lib.static_stace_quad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Aheg/IAAAAQAEgCADgCQAhgUAkgVQAUgLAVgLQAHgEAHgDQALgGALgFQArgUAngVQApgWAlgbQAjgcDJh6QCoC8jDEsQACAPgQAEQgpAJgtAOQgEABgEABQgJADgIACQgfAIghAHQgTADgTAEQgLAEgKABQguAdgYAvQgGAMgNADQgRAEgOgqQgDgIgCgHQgBgBAAgBQAAAAAAgBQgRgugVgsQgWgxgfgsQgdgpgcgygAA2DTQgOAFgnARQidBDhaAwQhbAvg7gGQg8gHhIhQQgKgPAQgbQAQgaAqgoQArgoAogbQAigZAhgaQAngfApgdQAigXAmgUQAigSAigS");
	this.shape.setTransform(53.2,38.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AidDiQg8gGhIhRQgJgPAQgaQAPgbArgnQAqgnApgcQAigYAhgaQAnggAngcQAjgZAlgTIBFglQAbAyAeAqQAfAtAXAxQAVArAQAuIg0AVQieBEhaAvQhPAqg4AAIgPgBg");
	this.shape_1.setTransform(29.3,55.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AieEhIgFgOIgBgCIAAgBQgRgugVgsQgXgxgfgsQgdgrgcgxIAAAAIAHgEIBFgoIAqgWIAOgHIAWgLQArgVAngUQApgWAkgbQAkgcDIh7QCoC9jDEsIgOATQgpAIgtAPIgIACIgRAFQgfAIghAGIglAIQgLAEgKABQguAdgYAvQgGAMgNADIgDABQgPAAgNgog");
	this.shape_2.setTransform(75.1,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,108.6,79.9);


(lib.static_stace_foreleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AlHmWQAKAMAQgBQAbgCAdAAQAeABAWAKQAJAAAJACQAOADAPAIQApAWAoAZQAnAZAhAWQABABABAAQAnAZApATQAAABABAAQACABACAAQAZALCLBIQArATB+BGQAeAGAcAIQAmALAmASQANBAgaAtQgaArgjAcQgBAAgCABQgWAJgRAXQgDAEgDAFQgZAngVApQgWApgaAYQgJAngvAOQgeAJgHgLQgHgJAKgXAHMgTQAmAOAPAcAC2FiQgrgLAog0QAZAAAWgKQAGgJAOgRQAzhBAJhOQAJhOAAgQIhfggQhEgXg8gTQgKgDgJgDQAAAAgBAAQjOhChogjQhYgegOgHQgpgUgsgXQgngTgjgWQgqgZgQgrQgLgcAGgaADVF9QgoABAJgcQAEgKALgPAC2FiQADABADAAADVF9QgCgLAHgRAD2GSQgfgBgCgU");
	this.shape.setTransform(56.5,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AD8GRQgDgDAAgGQAAgJAGgOQgGAOAAAJQAAAGADADIgGABQgfgBgCgUIgBgEQAAgKAGgOQgGAOAAAKIABAEQgoABAJgcQgrgLAog0QAZAAAWgKIAUgaQAzhBAJhOQAJhOAAgQIhfggIiAgqIgTgGIgBAAQjOhChogjQhYgegOgHIhVgqQgngUgjgWQgqgZgQgrQgLgcAGgaIDrAAQAKAMAQgBQAbgCAdABQAeAAAWAKQAJAAAJACQAOADAPAIQApAWAoAZIBIAwIACAAQAnAZApAUIABAAIAEABQAZALCLBIQArATB+BGQAeAGAcAIQAmALAmASQANBAgaAtQgaArgjAcIgDABQgWAJgRAXIgGAJQgZAngVApQgWApgaAYQgJAngvAOQgOAEgJAAQgKAAgEgGgAC2FiIAGABIgGgBQAEgKALgPQgLAPgEAKIAAAAgAIBAXQgPgcgmgNQAmANAPAcgADVF9IAAAAg");
	this.shape_1.setTransform(56.5,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,115.1,83.4);


(lib.static_stace_arm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AkzpOQAhgJAlALQAAAAAAAAQA9AbAxAWQC+BWAgALQAuAQAoAaQAmAZAnAZQAkAYAeAcQAMAMALALQAOAkAHAvQAHAtgBAvQgBAzgJAvQgIArgOAuQgPAwgOAsQgNAngNArQgFAPgOAeQgEAKgGAMQgGANgIAPQgIAmASAkQAWAsgXArQgGALgMAEQgjAKgSAXQgYAeg5gDQgWgCgVAEQgdAFgBgUQgBgagKgMQgJgJgLgEQgPgFABgWQAEgwAagYQAfgbAwgNQAfgBAUhZQAUhaAKgpQAKgvAKguQAKgvABgwQABgvgDgtQgEgxgLgqQgJgOgLgKQgggcgsgVQgqgUgtgPQgmgOiuhSAlznoQgFgbAJgTQAVgoAngQAD0FkQAAABgBABQABgDABgCQAAACgBABgABMIeQApgTAsAAQARgBAKgN");
	this.shape.setTransform(37.4,59.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AAcJDQgBgagKgMQgJgJgLgEQgPgFABgWQAEgwAagYQAfgbAwgNQAfgBAUhZIAeiDIAUhdQAKgvABgwQABgvgDgtQgEgxgLgqQgJgOgLgKQgggcgsgVQgqgUgtgPQgmgOiuhSIgcgOQh0g3gTgMIgCgBIACABQgFgbAJgTQAVgoAngQIAAAAQAhgJAlALIAAAAIBuAxQC+BWAgALQAuAQAoAaIBNAyQAkAYAeAcIAXAXQAOAkAHAvQAHAtgBAvQgBAzgJAvQgIArgOAuIgdBcIgaBSQgFAPgOAeIgKAWIgOAcIgBACIACgFIgBADIABgDIgCAFIABgCQgIAmASAkQAWAsgXArQgGALgMAEQgjAKgSAXQgYAeg5gDQgWgCgVAEIgLABQgSAAgBgQgAChILQgsAAgpATQApgTAsAAQARgBAKgNQgKANgRABgAD1FhQAKgfgHAUIgDALIAAAAg");
	this.shape_1.setTransform(37.4,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,76.8,121);


(lib.static_stace_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Arch7QAAABgBAAQgnAlgWgfQAegTAagdQAfgiAtgTQAogQAygBQAvgBAwABQAyABAjAYQASALARAMQATANATAOQAOAJANAJQALAHAKAGQAOAJANAIQApAXAsARQAhAMAgARQAKAGAKAGQAoAZAnAVQACABADACQAlAVAmARQArASAtAGQAWAAAWgCQAPgBAQgDQAxgHAsgVQApgTAngbQAlgZAjgZQAkgaAxgGQAwgFAjAZQBbAuArBOQkeBrgBABQgoAVgtALQgtAMgtAHQgwAHgvADQgLAAgKABQgoACglABQgRgJgdgYQgigbgggXQgJgHgJgGQgXgQgZgPQgkgWgrgVQgrgVgmgaQgkgYglgVQgCgCgCgBQgDgCgDgBQgFgEgGgDQgggUgagVQgDgCgEgDQgbgWglgXQgNACgMAEQggAKggAFQgMACgMABQghAkgvgBQglAAAbgYQAjgeAogSQAFgXANgQQgbgCgagBQgmAZghAaQgqAigjgXgAmliCQAHgBAHAAAn7jLQgOAIgKANApIi5QgzgEgkAVQgfASgeAb");
	this.shape.setTransform(79.5,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("ABeDLQgigbgggXIgSgNIgwgfQgkgWgqgVQgsgVgmgaQgkgYglgVIgEgDIgFgDIgMgHQgggUgagVIgHgFQgbgWglgXIAPgBIgPABQgNACgMAEQggAKggAFIgYADQghAkgvgBQglAAAbgYQAjgeApgSQAEgXANgQQAKgNAOgIQgOAIgKANIg1gDIgDgBIAAAAIgLAAIgBAAIAAAAQglAAgcAOIgFACIgBABIgBABQgfASgeAbQAegbAfgSIABgBIABgBIAFgCQAcgOAlAAIAAAAIABAAIALAAIAAAAIADABQgmAZghAaQgqAigjgXIgBABQgnAlgWgfQAegTAbgdQAfgiAsgTQApgQAxgBIBgAAQAxABAjAYIAjAXIAmAbIAbASIAVANIAcARQAoAXAsARQAhAMAfARIAVAMIBPAuIAFADQAlAVAmARQArASAtAGQAWAAAWgCIAfgEQAxgHAsgVQApgTAngbIBJgyQAjgaAxgGQAwgFAiAZQBcAuArBOIkgBsQgnAVgsALQguAMgtAHQgwAHgwADIgUABIhNADQgQgJgegYg");
	this.shape_1.setTransform(79.5,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,161,49.2);


(lib.static_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660099").ss(1,1,1).p("AM8AAI53AA");
	this.shape.setTransform(82.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,167.6,2);


(lib.static_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("AgOAUIAAgnIAdAAIAAAng");
	this.shape.setTransform(0,0.1,1,0.637);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.static_bar, new cjs.Rectangle(-1.5,-1.2,3,2.6), null);


(lib.static_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADngFQgBAAABgBQgDhOgvg7QgJgKgJgJQgPgPgQgLQgBgBgBgBIgbgCIgTA5IgEANIBXAKIABgCIgBACIAAAAIgvBAIAGgCIAgANIAcAtgAC6AIIABADIgsAjIg4gMIgBgBIglgoIAYghIAvgIACiCkQAAgBABAAQBEhDAAhgQAAgCAAgDAgXiqIADACIA1gcIAHgeQgTgEgVAAQgOAAgOACIgVAoIAaASIgIAjIg3AnIAAAFIAAABIgHA5IgBAKIA2AgIADgCIAyg5IAAAAIAFgrIgRgOIgggcABUiHIhTAcACCi+QgpgcgxgIAiUivQAAAAgBABQgHAGgGAGQgRARgNATIAQAiIAogFIAEgLIANgpIgdgaQA0gtBEgIAhdghIgTApIADAFIARAkIgnA3AjfA7IBHgvIArABAjAh+QgmA4AABGQAAAfAHAcQAIAeAQAbIBBgJIADgDIBJASIADgEIAXgtIABAAIAEABIgKhDAhWhbIgugRAg3B2IADAFIgGgBAjHB0QAPAZAWAWQAfAfAlARIBHgjIACAAIA4AOIAgg0IgGgIIAJACIBcAgABWAhIAAABIg3A7IAeAlAAfBdIgCgBIg4gSABDCKIADgGAg0B7IAeA0IABABAheDTQArAUAzAAQBfAABDhDAC1iPIgNAd");
	this.shape.setTransform(23.1,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDDEIgBgBIgdgzIgEgGIAXgsIABgBIAEABIA5ASIABACIAdAkIAHAIIggA0gAjMBPIBGgvIArABIARAlIgnA2IgCAEIhCAIQgQgbgHgegABpA2IgBAAIglgqIAZgfIAugIIAGgCIAgAMIAcAuIABADIgrAigAhMgDIABgKIAHg5IAAAAIAAgFIA3goIAhAcIAQAOIgFArIAAAAIgyA5IgDADgAiuhqQANgTARgRIANgMIABgBIAdAaIgNApIgEALIgnAGgABhhlIAFgOIATg4IAbABIACACQAQAMAPAOIASAUIgNAcIgBADgAgFiWIgagSIAVgoQANgBAPAAQAVAAATADIgHAfIg1Acg");
	this.shape_1.setTransform(21.3,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheDSIBHgjIACAAIA4AOIAgg0IADgFIBcAfQhDBDhfAAQgzAAgrgUgAiiCiQgWgWgPgZIBCgIIACgEIAng2IgRglIgDgFIATgpIgTApIADAFIgrgBIhGAvQgIgcAAgeQABhHAlg4IARAjIAngGIAEgLIAuASIAAAAIgHA5IgBAKIA2AhIADgDIAyg5IAAAAIAFgrIgQgOIBSgcIhSAcIghgcIAIgjIADADIA1gcIAHgfQAxAIApAcIgbgBIgTA4IgFAOIBYAKIAAAAIABgDIANgcQAvA7ACBOIAAABIgsANIAsgNIAAAFQAABfhDBDIgBABIhcgfIgKgDIgdgkIA3g7IABgBIA5AMIArgiIgBgDIgcguIgggMIgGACIAvhAIgvBAIguAIIgZAgIAlApIAAABIg3A7IgBgCIg5gSIgKhDIAKBDIgEgBIgBABIgXAsIgDAEIAHACIAdAzIgBABIhHAjQglgRgfgfgAg6B5IhJgSgABWAigAhWhbIgugSIANgpIgdgaQA0gtBEgIIgVAoIAaASIgIAjIg3AoIAAAFg");
	this.shape_2.setTransform(23.1,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.1,48.1);


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


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcAIIgDgLIgFAKQgDAJgEAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIgBgJIgCgHQgGATgDAAIgDgBIgBgDIABgCQAEgEABgHIADgMQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQADAAACAIIADALIADgGIACgJQADgFACAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIADAKIACAHIADAIIAAABIAAADIgCABQgEAAgCgJgAgUANIAAgIIgBgGIgBgHIgFAAIgGgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAGAAIAEAAIAPAAIADAAIAEAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgOABIAAAHIAAAHIABAEIABADIgBADIgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape.setTransform(58,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAYQgHgCAAgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACIAEACIAGABIAFgBQAEgCAAgCQAAgGgIgCIgEgCIgIgCQgDgCgBgFQAAgJAJgEIAHgDIAJgDIADAAIAEABIABADIAAAEIABADIgBAEIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgEIgKADQgGACAAAFIACAAQAKACAEADQAIAEAAAJQAAAHgHADQgFADgGAAQgGAAgFgCg");
	this.shape_1.setTransform(51.7,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMATQgGgGAAgJQAAgIAGgJQAHgLAHAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBIgBgCQgDgCgGAAQgDAAgFAIQgEAIAAAEQAAAGAEADQAEADAFAAIAFgBIAFgDIACgBIADACIABADQAAADgHADQgFADgEAAQgIAAgHgGg");
	this.shape_2.setTransform(47.4,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAgQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgIIABgKIAAgKQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBIACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAKIAAAKIAAAIIAAAIQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCABIgDgBgAgCgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(43.9,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALAVIgBgJIgBgKIAAgDIAAgEQAAgKgDAAQgFABgEAFQgEAGgCAGIAAAFIgBAEIABAEIAAAEIgBAEIgDABIgEgBIgBgEIAAgEIAAgEIAAgMIABgMIAAgEIAAgEIABgEIADgBQAEABAAAFIABAFQAHgJAHgBQAHAAADAHQABAEABAIIAAAFIAAACIABAKIAAAJIgBAEIgDABQgEAAAAgFg");
	this.shape_4.setTransform(40.3,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgKAHgHQAIgIAJAAQAEAAAEADQAGACAAADIgBACIAAAGIgBAJIABAIIADAIIABACIAAABIgBAEIgDABIgDgCgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_5.setTransform(35.5,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAiIgCgLIgBgKIABgEIAAgDQAAgIgFABQgFAAgEADIgGALQAAAQgCADQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBgDIABgCIAAgGIAAgHIAAggIABgGIgBgFIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQADAAAAAFIABAHIAAAKIAAAKIAAADQADgEAEgDQAEgDAEABQAIAAACAEQACAEABAHIAAAIIABAJIABAJIABACQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgDABQgDAAgBgCg");
	this.shape_6.setTransform(30.7,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMATQgGgGAAgJQAAgIAGgJQAHgLAHAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBIgBgCQgDgCgGAAQgDAAgFAIQgEAIAAAEQAAAGAEADQAEADAFAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgGADgEAAQgIAAgHgGg");
	this.shape_7.setTransform(25.8,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAEADACQAEACAEAAIAHgBQAFgCACgCQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAEgCAIIAOgGQAHgEADgDQgDgDgHAAQgFAAgDAEg");
	this.shape_8.setTransform(21,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAhIgCgHIgCgIQgCgGgEgYIgJAaIgCAJIgEAIQgBADgCAAQgDAAgCgDIgBgFIgCgEIgIghIgBAIIgGAXIgCAMQgBADgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgDQAAgHAEgLIAEgQIADgPQACgJACgDQABgDADAAQADAAACAEQACADABANQADAOAEAPQAGgPAEgTIACgGIACgGQACgEADAAQAEAAACAIIACAKQACATAEAOIACAHIABAIQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(14.6,4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_10.setTransform(5.8,5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgKAHgHQAIgIAJAAQAEAAAEADQAGACAAADIgBACIAAAGIgBAJIABAIIADAIIABACIAAABIgBAEIgDABIgDgCgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_11.setTransform(1.2,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAaQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgDAEIgFAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgCABQgGAAAAgLIABgIIAAgHIAAgHIgBgHQABgKAEAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQADgFAEgEQAEgEAEAAQAGAAACAHQACgDADgCQAEgBAEAAQAIAAACAIIACAMIAEAYIgCADIgDABQgDAAgBgDIgCgOIgBgNIgCgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgGADIgFAEIAAAIIABALIAAAMIAAADIgDABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_12.setTransform(-4.5,5.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAaQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgDAEIgFAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgCABQgFAAgBgLIABgIIAAgHIAAgHIgBgHQAAgKAFAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQACgFAFgEQAFgEADAAQAGAAACAHQADgDADgCQADgBAEAAQAHAAAEAIIABAMIADAYIgBADIgDABQgDAAgCgDIgBgOIgBgNIgCgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgGADIgGAEIAAAIIACALIAAAMIgBADIgCABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_13.setTransform(-11.5,5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgKAHgHQAIgIAJAAQAEAAAEADQAGACAAADIgBACIAAAGIgBAJIABAIIADAIIABACIAAABIgBAEIgDABIgDgCgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_14.setTransform(-17.4,5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_15.setTransform(-21.7,5.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAeQgGgGAAgMQAAgMAGgLQAEgLAJgIQAGgFAFAAQAEAAAHADQAHADAAADIgBAEIgDABIgCgBQgIgEgEAAQgDAAgDAEIgFAFQgKAOAAAPQAAAIACAEQADADAHAAQAHAAAHgFQAFgFADgKQgMAAgIAFIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgBgDQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAIgFAYAAIADABIABADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgDAOgJAIQgJAIgLAAQgKAAgFgGg");
	this.shape_16.setTransform(-26.9,4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAhIgBgDIADgIIAKgXQAFgPAHgHIABgBIgVgBIgKAAQgEAAAAgEQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAIARABIAPAAIAIAAQAFAAAAADQAAACgDADIgEAFQgFAHgFAJIgIARIgDAKIgEAKQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgCg");
	this.shape_17.setTransform(-35.5,4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAXQgFgJAAgOQAAgNAGgKQAIgLALAAQAMAAAGAKQAGAJAAAMQAAASgHALQgGAJgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAANAEAIQAEAHAHAAQAJAAAEgLQADgHAAgLQAAgLgEgHQgEgFgHAAQgHAAgFAIg");
	this.shape_18.setTransform(-41.1,4.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAXQgFgJAAgOQAAgNAGgKQAIgLALAAQAMAAAGAKQAGAJAAAMQAAASgHALQgGAJgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAANAEAIQAEAHAHAAQAJAAAEgLQADgHAAgLQAAgLgEgHQgEgFgHAAQgHAAgFAIg");
	this.shape_19.setTransform(-46.6,4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgGABIgGAAIgFAAIgFABIgCAAIgBAAQgDAAgBgDIgBgGQAAgKAGgGQADgDALgHIAHgGQAEgFAAgFQAAgDgEgCQgDgCgDAAQgDAAgEACIgGAFIgDABQgEAAAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAFgFAEgCQAFgDAFAAQAHAAAGAEQAGAEAAAHIgBAJIgEAGQgDADgIAFQgIAFgCADQgFAFAAAHIAJAAIAMgBIAHABQAEACAAACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgCABIgEgBg");
	this.shape_20.setTransform(-52,4.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfABQABgLAKgKQAMgJAMAAQANAAAHAIQAIAIgBAMQABAKgKAKQgJALgMAAIgBAAQgfAAAAgdgAgOgPQgJAHAAAJQAAALAHAFQAFAFAMAAQAJAAAHgJQAGgIAAgHQAAgJgDgFQgFgFgJAAIgCAAQgLAAgHAGgAgLAJQgFgEAAgFQAAgHAHgFQAGgEAGAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAIgBAAIgCAAQgDAAgEACQgFADABADQAAACADABIAEACQADAAADgDIAFgCIACABIABADQAAADgEADQgFADgFAAQgFAAgFgEg");
	this.shape_21.setTransform(-58.4,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-4.3,128.1,16.5);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6600CC").ss(3,1,1).p("EglvgWPMBLfAAAMAAAAsfMhLfAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEFE78","#FEB367"],[0,1],-0.2,199.3,549.7,199.3).s().p("EglvAWQMAAAgsfMBLfAAAMAAAAsfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.1,-143.9,486.2,287.8);


(lib.Wordswho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,flash:1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape.setTransform(91.5,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgrA7QgOgPAAgVQAAggAcgiQAZgcAYAAIAIAAIAGABQAEgFAGAAQAKABACAKQACAJAAALQAAAEgDAFQgDAFgHAAQgJAAgEgKQgCgDgCgBIgIgBQgMAAgPATQgXAaAAAXQAAAKAHAIQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAHgFADQgbAXgbAAQgWAAgPgQg");
	this.shape_1.setTransform(78.4,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgtBKQgKgJgBgfIACgnIADgnIgBgKIgCgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQgBAFgDAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgBAnIAlgEIAXgCQAGAAAEAEQAEADAAAGQAAALgMACIgYABIgpAFIAAAUQAAASADADQABABALAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgLACQgKACgeAAQggAAgKgJg");
	this.shape_2.setTransform(66.2,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgpBDQgVgNABgTQAAgQANAAQAOAAAAAPQAAAGAKAHQAJAGAKAAQADAAABgNIACgeQABgVAAghIAAgHIgCAAIgLAAIgLAAQgHAAgDgEQgFgDAAgHQAAgNASAAIAJAAIAKABIASgBIATgBQAZAAAAAPQAAAFgDAEQgEAEgGAAIgGAAIgGAAIgHAAIAAAHQgBBFgJAfQgIAYgRAAQgTAAgRgNg");
	this.shape_3.setTransform(53.1,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgvBKQgFgEAAgGIAAhmIgBgOIABgMQABgKAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAFAHAJQAJAKAAALQAAANgPALQgJAIgKAEQgWAIgjAAQgGAAgEgFgAgaA1QARgBATgGQARgFAAgFQAAgIgLgGQgJgEgHgBIgagBgAgZgfIgBAVIAOABQAdgCAAgVQAAgHgJgFQgIgIgKAAIgQAAg");
	this.shape_4.setTransform(40.4,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgnBCQgZgUAAgvIAAgPIABgNIAAgMIAAgLQAAgHADgHQAEgJAHAAQAFAAAEADQAFAEAAAGIAAAQIgBARIAAANIgBAPQAAANAEANQAEAPAIAGQAEAEAPAAQAZAAAJgsQAFgXAAgpQAAgFADgGQAFgGAIAAQAGAAAEAEQACAEAAAFQAAAngDAVQgGAggQAWQgHAKgKAGQgNAIgMAAQgYAAgNgKg");
	this.shape_5.setTransform(26.2,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("Ag0BAQgMgKAAgMQAAgGAEgEQAEgEAGAAQAJAAAEAJQAFAMAUAAQAQAAAQgHQAQgIAAgJQAAgMgKgEQgIgDgUAAQgRgBgNgFQgTgIABgPQAAgTAUgQQAUgQAYAAQAJAAAOAFQARAFAAAHQAAAGgDADQgEAFgGAAIgOgCIgNgCQgNAAgLAGQgMAGABAHQAAAEADACQAEADAHABIAYABQAVACANAKQAOALAAAVQAAAZgdANQgVAKgbAAQgaAAgOgLg");
	this.shape_6.setTransform(12.1,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,0,97.4,31.9);


(lib.WordsTowhat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape.setTransform(115.1,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AhEBLQgEgDAAgGIABgMIABgMIAAgRIAAgRIAAgSIAAgTIgBgRIgBgRQAAgHAEgEQAGgEAGAAQAHAAAJAMQArA/ArAoIAAgQIgBg/IAAgLIgBgLQAAgOAOAAQAPAAAAAyIAAAPIAAA9IgCAQQgCAMgMAAQgHAAgIgIQgmgigvg7IAAAdIAAAYIABAXQAAAdgOAAQgHgBgFgEg");
	this.shape_1.setTransform(100,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgtBKQgKgJgBgfIACgnIADgnIgCgKIgBgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQAAAFgEAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgCAnIAmgEIAXgCQAGAAAEAEQAEADAAAGQAAALgMACIgXABIgqAFIAAAUQAAASACADQACABALAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgMACQgJACgeAAQggAAgKgJg");
	this.shape_2.setTransform(85.9,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AA1BAIgFgYQgFgSgGgfIgOAoIgGASIgHARQgGAKgIgBQgJABgFgMIgFgRQgIgZgHgbIgLAuIgFAXQgEANgKAAQgGABgEgFQgEgEAAgFQAAgQAHgXIAKglIAHgeQAEgUAFgIQAFgHAIAAQAJABAEAIQAEAJAFAaQADAaAJAcQAKgbAKgkIAFgWQAFgOAMAAQAKAAAGARQABAGADASQAFApAKAdIAIAhQAAAFgFAEQgEAEgGAAQgKAAgFgPg");
	this.shape_3.setTransform(70.7,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgtBKQgKgJgBgfIACgnIADgnIgCgKIgBgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQAAAFgEAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgCAnIAmgEIAXgCQAGAAAEAEQAEADAAAGQAAALgMACIgXABIgqAFIAAAUQAAASACADQACABALAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgMACQgJACgeAAQggAAgKgJg");
	this.shape_4.setTransform(55.7,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgzA7IACgfQACgqAAgzQAAgGAEgEQAEgEAGAAQAGAAAEAEQADAEAAAGQAAA0gCAqIgCAYQAXAAAjgLIAFgBQAGAAAEAFQADAEAAAFQAAAIgIAEQgMAFgYAEQgVAEgOAAQgYAAAAgVg");
	this.shape_5.setTransform(44,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgsBKQgDgEAAgFIAAgbIACgsIACgtQAAgZAOABIAJgCIAOAAQATAAAQANQATAOAAATQAAAZgUAOQgSANgWAAIgJgBIAAAtQAAAFgEAEQgEAEgFAAQgGAAgEgEgAgSglIgBAhIAHABQAOAAAJgHQAMgIAAgNQAAgIgLgGQgKgHgKAAIgGAAIgEAAIAAAPg");
	this.shape_6.setTransform(32.9,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AA1BAIgGgYQgEgSgGgfIgPAoIgFASIgIARQgFAKgIgBQgJABgFgMIgGgRQgHgZgGgbIgNAuIgDAXQgEANgLAAQgHABgEgFQgDgEAAgFQAAgQAHgXIALglIAFgeQAFgUAFgIQAFgHAIAAQAIABAFAIQAEAJAEAaQAFAaAIAcQAKgbAKgkIAGgWQAFgOAKAAQALAAAFARQACAGADASQAGApAIAdIAJAhQAAAFgEAEQgFAEgFAAQgLAAgFgPg");
	this.shape_7.setTransform(18.9,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AgzA9QgWgSAAgdQAAggAVgbQAXgfAjAAQAiAAARAQQARAPAAAfQAAAhgTAbQgWAfgjAAQgdAAgUgQgAgfgcQgOAUAAAWQAAARAMAJQANAKASAAQAUABAPgWQANgTAAgYQAAgUgJgIQgJgIgWAAQgVAAgQAWg");
	this.shape_8.setTransform(1.9,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgrA7QgOgPAAgVQAAggAcgiQAZgcAYAAIAIAAIAGABQAEgFAGAAQAKABACAKQACAJAAALQAAAEgDAFQgDAFgHAAQgJAAgEgKQgCgDgCgBIgIgBQgMAAgPATQgXAaAAAXQAAAKAHAIQAHAIAKAAQAJAAAKgFIAPgKQAHgFAEAAQAGAAAEAEQAEAFAAAEQAAAHgFADQgbAXgbAAQgWAAgPgQg");
	this.shape_9.setTransform(-12.1,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,0,144.6,31.9);


(lib.Wordsdoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvBKQgFgEAAgGIAAhmIgBgOIABgMQABgKAQgCQAHgCASAAQARAAARAMQAUAOAAAUQAAAMgEAHQgEAHgIAGQAKAFAHAJQAJAKAAALQAAANgPALQgJAIgKAEQgWAIgjAAQgGAAgEgFgAgaA1QARgBATgGQARgFAAgFQAAgIgLgGQgJgEgHgBIgagBgAgZgfIgBAVIAOABQAdgCAAgVQAAgHgJgFQgIgIgKAAIgQAAg");
	this.shape.setTransform(93.3,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag1BJQgEgEAAgGIAAgVIABgWIAAhOQAAgHAEgFQAFgGAIAAIAZACQANACAJAFQAqAVAAAfQAAAMgJAJQgIAKgSAHQAaAOANAPQADAEABAFQgBAGgEAEQgEADgGAAQgFAAgEgEQgegbgigLIABAfQAAAGgEAEQgEAEgGAAQgFAAgFgEgAgdADIADAAQAYAAALgFQAFgDAEgEQAFgEAAgCQgBgLgOgKQgMgKgOgBIgLgBg");
	this.shape_1.setTransform(80.5,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgtBKQgKgJgBgfIACgnIADgnIgCgKIgBgKQAAgPAOAAQAFAAADACIAVgEIATgBQAZAAAPAFQAIAEABAJQAAAFgEAEQgEAFgGgBIgEgBQgQgDgPAAIgPABIgRADIgCAnIAmgEIAXgCQAGAAAEAEQAEADAAAGQAAALgMACIgXABIgqAFIAAAUQAAASACADQACABALAAIARAAIASAAIAGgBIAFAAQAGAAAEADQAFAEAAAGQAAALgMACQgJACgeAAQggAAgKgJg");
	this.shape_2.setTransform(67.9,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgVBFQgMgcgOg1IgIgaQgFgSAAgHQAAgHAEgDQAEgDAFgBQAKAAAEAKIADARIAJAgIAQAwIAWg6IAIgYQAFgNAHgIQAFgFAFAAQAGAAAEAEQAEAEABAGQAAAEgDADQgFAIgFAKIgHAUIgaBCQgFAMgGAMQgFAIgGAAQgKAAgFgKg");
	this.shape_3.setTransform(54.7,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,31.9);


(lib.Wordsverb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_4 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgcBLQgFgEABgFQAAgIADgFQAFgHAIAAQAGAAAEAFQADAEAAAGQAAAFgDAGQgEAGgIABQgFgBgFgDgAgWAiQgEgEAAgGQAAgIANgKIAVgPQANgKAAgHQAAgKgJgHQgJgIgJAAQgFAAgJAGQgKAGgEAAQgFAAgFgFQgDgEAAgFQAAgKARgIQAOgHAKABQAUAAARAPQASAPAAAVQAAAUgVAOIgQALIgOANQgEAGgGgBQgGAAgEgDg");
	this.shape.setTransform(73.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbAzQgPgFAAgMQAAgJAMAAQAFAAAIADQAJADAEAAQATgBAAgHQAAgGgOgFIgZgMQgNgKAAgNQAAgUAVgHQAMgEAYAAQAJAAAFACQAHAEgBAJQABASgKAAQgKgBgCgHIgIgBQgWAAAAAGQAAAEANAHQAUAIAGAFQAPAKAAANQAAAQgQAJQgMAHgSAAQgNAAgLgEg");
	this.shape_1.setTransform(63,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgWAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_2.setTransform(52.5,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_3.setTransform(41.7,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgeBPQgLgDgHgEQgFAAgEgEQgEgEAAgFIABgdIABgeIgBgfIAAghQAAgFAFgFQAFgGAGAAQADAAANAGQAPAIADAAQAcAKAUATQAYAXAAAbQAAARgIAPQgJAQgOAJQgQALgdAAQgHAAgJgCgAghAyQADACAFABQAFACAGAAQAUAAAKgGQAIgGAFgJQAFgKAAgKQAAgXgcgSQgIgGgfgNg");
	this.shape_4.setTransform(29.7,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.1,0,61.3,31.9);


(lib.Wordskicks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape.setTransform(90.2,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAVBCQgFgIgJgLIgMgSIgNAIIAAAXQAAAFgEADQgDAEgGAAQgLAAAAgPIABgVIABgVIAAgcIAAgdIAAgIIAAgJQAAgGACgDQAEgDAFAAQAFAAAEADQAEADAAAGIAAAJIABAJIgBAZIAAAXQALgIAYgZQADgDAGAAQAEAAAFADQADAEAAAFQAAAEgDADQgLALgOANIATAXQAMASAAAGQAAAFgDADQgEADgFAAQgHAAgDgGg");
	this.shape_1.setTransform(81.5,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgbAnQgOgMABgTQAAgRAMgSQAOgWASABQAJAAAMAEQAPAGAAAIQAAAFgDADQgDAEgFgBQgEAAgFgDQgGgFgKAAQgGAAgIAOQgIAMAAAJQAAAJAHAGQAHAEAJAAQAGABAJgFQAIgFACAAQAFAAAEAEQACAEAAAEQAAAHgPAGQgNAHgIAAQgTgBgNgKg");
	this.shape_2.setTransform(71.5,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgKBAQgEgEABgEIgBgQIAAgRIABgUIABgSQAAgFADgDQAEgDAEAAQAFAAADADQADADABAFIgBASIgBAUIAAARIAAAQQAAAEgDAEQgEADgEAAQgFAAgDgDgAgIgsQgEgDABgGQgBgFAEgEQAFgEAFAAQAFAAAFAEQADAEAAAFQAAAGgDADQgFAEgFAAQgFAAgFgEg");
	this.shape_3.setTransform(64.7,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAUBCQgEgIgIgLIgOgSIgLAIIgBAXQAAAFgEADQgDAEgGAAQgMAAAAgPIABgVIABgVIAAgcIABgdIgBgIIAAgJQAAgGAEgDQADgDAGAAQAFAAADADQADADABAGIAAAJIAAAJIAAAZIAAAXQAMgIAXgZQAEgDAFAAQAFAAAEADQADAEAAAFQAAAEgDADQgLALgOANIASAXQAOASAAAGQAAAFgFADQgDADgFAAQgHAAgEgGg");
	this.shape_4.setTransform(57.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.Wordspass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape.setTransform(87.6,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_1.setTransform(78.8,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAVApIgOAFQgGACgDABQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAADgCACIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAGgEACQgDADgFABQgEgBgJgHgAgMgRQgIAJAAAMQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgEQgDgUAAgKIABgHIABgIIgDgBIgDgBQgLAAgJAKg");
	this.shape_2.setTransform(69.6,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgkBGQgDgDAAgFIAAghIAAghIgBghIgCgRQAAgIAEgFQAEgGAGAAQAFAAADADQADAEAAAEIAAABIAMgFQAFgBAGAAQAVAAAJARQAHANAAAUQgBATgKAMQgMAOgUAAIgPgCIAAAkQAAAFgDADQgEAEgFAAQgFAAgEgEgAgEgpQgGACgGAGIABAjQAIACAHAAQAJAAAFgFQAEgGAAgKIgBgQQgCgLgJAAQgGAAgEADg");
	this.shape_3.setTransform(59.9,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.2,147,29.1);


(lib.Wordscomplement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_6 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgcBLQgFgEAAgFQAAgIAEgFQAFgHAIAAQAGAAAEAFQADAEAAAGQAAAFgDAGQgEAGgIABQgFgBgFgDgAgWAiQgEgEAAgGQAAgIANgKIAVgPQANgKAAgHQAAgKgJgHQgJgIgJAAQgGAAgIAGQgKAGgEAAQgFAAgFgFQgDgEAAgFQAAgKARgIQAOgHAKABQAUAAARAPQARAPABAVQAAAUgVAOIgQALIgOANQgEAGgGgBQgGAAgEgDg");
	this.shape.setTransform(77.1,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgIBEQgEgEgBgFIABgKIAAgLIgCgyIgSgBQgMgCAAgLQAAgFADgEQAEgEAGAAIARABIAAgKIgBgKQAAgFAEgEQAEgDAFAAQAOAAAAAYIAAAIIAJgBQAMAAAEABQAIADAAAKQAAAFgEAEQgDADgHAAIgEAAIgGAAIgJABIACAzIAAAEIAAAGQAAAWgNAAQgFAAgEgDg");
	this.shape_1.setTransform(66.8,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAYAtQgKAEgHACQgGADgEAAQgYAAgLgNQgMgNAAgZQAAgWASgRQAQgRAYAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgFAAQgFAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAGAGAJAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIABgKIgDgBIgDAAQgMAAgKAKg");
	this.shape_2.setTransform(56.6,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_3.setTransform(45.4,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AATBMQgFgDAAgGQgFgLgBgIIgKg9QgHASgIAQQgKAXgDAOIAAAEQAAAGgFAEQgFADgGAAQgGAAgFgDQgGgEAAgHIgCgMIgLgtQgHgWgPgrIgBgFQABgGAEgDQAEgDAGAAQAHAAAEAGQADADADAJQAJAcAMA0QAIgTAJgZQAGgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIADAUQACAQAKAsQAKgYASgtIAFgSQADgLAEgGQAEgHAJAAQAGAAAEAEQADADAAAGIgDAKIgEAKIgFARIgSApIgSAqIgIAQQgEAIgJAAQgGAAgFgDg");
	this.shape_4.setTransform(29.1,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.6,0,68.3,31.9);


(lib.Wordsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAVAoIgOAGQgGACgDAAQgWAAgKgLQgLgMAAgWQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAACgCADIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgMgRQgIAJAAAMQAAAMAEAFQAEAHAIAAQAFgBAFgBQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDAAQgLAAgJAJg");
	this.shape.setTransform(73.6,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:true},2).wait(1).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.Wordssubject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_6 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgcBLQgEgEAAgFQAAgIADgFQAFgHAIAAQAHAAADAFQADAEAAAGQAAAGgDAFQgFAGgGAAQgGABgFgEgAgWAhQgEgEAAgFQAAgIANgKIAWgPQAMgJAAgIQAAgJgJgIQgJgIgJAAQgFAAgKAGQgJAGgDAAQgHAAgDgEQgFgFAAgFQAAgJASgJQAOgGAKAAQAUAAARAPQARAPAAAVQAAAUgTAOIgRAMIgOAMQgFAGgFAAQgGAAgEgFg");
	this.shape.setTransform(91.5,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgIBEQgFgDABgGIAAgLIABgKIgCgyIgTgBQgMgBAAgMQAAgGAEgDQAEgEAFAAIARABIgBgKIAAgKQAAgFAEgEQAEgEAGABQANgBAAAZIAAAIIAKgBQALAAAEABQAIADAAAKQAAAFgEAEQgEADgFAAIgGAAIgEAAIgJABIABAyIABAFIAAAGQgBAWgOABQgEAAgEgEg");
	this.shape_1.setTransform(81.2,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AAXAtQgIAEgHACQgHADgEAAQgYAAgLgNQgMgNAAgZQAAgWARgRQARgRAYAAQAJAAAMAFQAPAHAAAIQAAAEgCACIgCAKIAAAOQAAARADAIIAEAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgKgJgAgNgTQgKAKAAANQAAANAFAHQAEAGAKAAQAFAAAGgCQAEgCAGgEQgEgWAAgLIABgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_2.setTransform(71,49.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_3.setTransform(59.7,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AAUBMQgFgDgBgGQgFgLAAgIIgMg9QgGASgHAQQgLAXgEAOIABAEQAAAGgFAEQgFADgFAAQgHAAgGgDQgEgEAAgHIgEgMIgKgtQgHgWgOgrIgBgFQgBgGAFgDQAEgDAFAAQAIAAAFAGQACADADAJQAJAcANA0QAIgTAHgZQAHgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIADAUQABAQALAsQALgYARgtIAFgSQADgLAEgGQAFgHAHAAQAHAAADAEQAFADAAAGIgEAKIgEAKIgGARIgRApIgSAqIgHAQQgFAIgKAAQgFAAgEgDg");
	this.shape_4.setTransform(43.4,47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQgBgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgVAEgJATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_5.setTransform(19.7,49.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_6.setTransform(9.4,49.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_7.setTransform(66.8,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_8.setTransform(56.1,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AATBMQgFgDAAgGQgEgLgCgIIgKg9QgHASgIAQQgKAXgDAOIAAAEQAAAGgFAEQgFADgGAAQgHAAgEgDQgGgEAAgHIgCgMIgLgtQgGgWgQgrIgBgFQABgGAEgDQAEgDAGAAQAHAAAEAGQADADADAJQAKAcALA0QAJgTAIgZQAGgVAEgJQAKgWAJAAQAJAAAFALQACAFACANIACAUQADAQAKAsQALgYARgtIAFgSQACgLAFgGQAEgHAJAAQAFAAAFAEQADADAAAGIgDAKIgEAKIgFARIgSApIgSAqIgIAQQgEAIgKAAQgFAAgFgDg");
	this.shape_9.setTransform(39.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,0,97,61.8);


(lib.Wordsshe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQANAHgBAOQAAAJgKAIQgFADgPAGIgcAMQADAFAHACQAGACAGAAQAMABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAVgIIASgKQgHgEgJAAQgIAAgFAGg");
	this.shape.setTransform(84.8,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_1.setTransform(74.9,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AguA5QgMgIAAgLQAAgFAEgEQADgEAHAAQAHAAAEAIQAFALASAAQAOAAAOgGQAOgHAAgIQAAgLgJgEQgGgCgSgBQgQAAgMgFQgQgHAAgNQAAgSATgOQARgOAVAAQAIAAAOAEQAPAFAAAGQAAAFgDADQgDAEgGAAIgMgCIgNgBQgLAAgJAFQgLAGAAAGQAAADADACQAEADAGAAIAVACQAUABALAKQAMAJAAATQAAAXgaALQgTAJgZAAQgVAAgNgKg");
	this.shape_2.setTransform(63.3,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.anim_pencil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{notinuse:0,inuse:1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AP34IQgJgUguAKQAHAcAIAbQAWgYASgVgASr7RQhLAqg7BpQgUAZgaAdAPysfQBFhHBJhMAPysfQBJgXBTgTQCdhwB1ipQhMAVgmgSQgPgHgOgHQjxh9hRjxAWgxiQgLgeA6g6QAOgNCMiTQgFgohmifQhlifjugRAPA4SQiaCViCCPQgEA8AgBAQizC8idCmQA+FVFHhfQB2h6CHiLAJCliQBUhWBfhiAJCliQlfA4AvmEQweRShJAxQj9Cvi9DZQgRBDgBA9IAAABQAAAAAAABQgCDYDICQQBMA3BgghQCekLDEjzQANgQASgVQgmi3Amh1QAsiHCRgxQBHgYBOgUQgNBeA/AWQBIhKBUhWAFwsQQgwAyguAwAkrIjQhCg7gig7AkrIjQA7g+BGhHAmBJ9QAogqAugwAmBJ9Qh6ghgzhOAouM6QA8hFBxh4A0hPdQAAABgBABQABgBAAAAA0iPfQgsAfgeAgQhCBHAGBJQAGBSBeBUQANAMAQAMQBeBLBgAhQAAAAAAAAQBhAWBZiRA2oSuQh8ERgnC3QgMA6gRAiQAAAAABAAQGVicBpheAjcEqQBhgZBtgTQCmipGqm3AZp1aQl5hNhFkq");
	this.shape.setTransform(164.1,174.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("A5LZ2QAni3B8kRQAGBSBeBUQhZEUjKBqIgBAAQARgiAMg6gASr7RQDuARBlCfQBmCfAFApQl5hOhFkqg");
	this.shape_1.setTransform(164.1,174.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFE49").s().p("AAki+IAdAYQBfBMBfAgQhpBdmUCcQDLhqBXkTg");
	this.shape_2.setTransform(25.6,330);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AsORzIgBAAQhfghhfhLIgcgYQhfhUgGhSQgFhJBChHQAdggAtgfIABAAQgCDYDICRQBLA3BgghQhNB9hTAAQgNAAgMgDgAjTCpQAyBOB7AhQhyB4g7BFQgni3Anh1gAgmEYQh7ghgyhOQAriHCRgwQBGgYBOgUQBigZBsgSIicCeQg0gSAAhEQAAgNACgQQgCAQAAANQAABEA0ASIiACFQhCg6gig7QAiA7BCA6IhVBaIAAAAgAjTCpIAAAAgAJtwTIBdhiQA+FVFHhfIiyC5QgsAHgmAAQkIAAAqlUg");
	this.shape_3.setTransform(129.4,210.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFD85").s().p("AASE1IgdgOQjwh9hRjwIAogtIAtg2QA8hqBLgpQBFEqF4BMIiaCgQg7A5ALAfQgoALgeAAQgaAAgRgIg");
	this.shape_4.setTransform(294.9,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AyaWcQjIiRACjYIAAgBIAAAAQABg9ARhDQC9jaD9iuQBJgyQexSQgvGEFfg3QmqG2imCqQhtAShhAZQhOAUhHAYQiRAxgsCHQgmB2AmC2IgfAmQjEDzieELQgkAMghAAQg4AAgvgigAExq8IFQlhQgghAAEg9QCCiOCaiVQAHAcAIAaQBRDyDxB8IAdAPQAmASBMgVQh1CoidBwQhTAThJAXICOiSIiOCSIj9EFQhIAVg6AAQjTAAgwkLg");
	this.shape_5.setTransform(170.4,166.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AUv5oQhLApg8BqQgUAYgZAeQgTAVgVAXQgJgagGgcQAugLAJAVAR2q3QBFhHBJhLAR2q3QBJgXBSgTQCehwB1ioART1zQBRDyDxB8QAOAIAPAHQAmASBMgVQgMgfA7g6QAOgNCMiSARE2pQiaCViCCOQgEA9AfBAQiyC8ieClQA+FWFIhgQB2h6CHiLAN5myQhfBihUBXQlfA4AvmFQAugwAvgyAgnIGQhFBIg7A9QguAwgoAqQhyB5g7BEQgmi2Amh2QAsiGCQgyQBHgYBOgUQgMBeA+AWgAinKLQhDg6gig7AmqOiQgSAWgOAQQjDDzifELQhgAhhLg3QjIiRACjYQAAAAAAgBQAAABgBAAAj9LlQh7gggyhPA0lUXQgFhKBChHQAeggAsgfQABgBAAAAQABg9AQhDQC9jaD+iuQBIgyQfxSAydRGIAAAAAssXGQhYCQhhgWQAAAAgBAAQhEA+nbgfQgiADgfgEQgogFgjgQQgzgYgogwQCpgnBWgNQBXgMBxiqQAFA5AwA7QgSBehvA0QiAA8iggQAzwWLQAUAYAcAZQANAMAPAMQBfBMBfAgALGj5QmqG2inCqQhUBVhIBKAhZGSQBhgZBtgSAUv5oQDuAQBlCfQBlCfAGApQl5hOhFkpg");
	this.shape_6.setTransform(150.9,184.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFE49").s().p("AjIBlQgjADgfgEQgogFgjgQQCgAQCAg8QBvgzARheQAUAYAcAZIAcAYQBfBLBfAgQgtApjlAAQhvAAicgKg");
	this.shape_7.setTransform(16.9,337.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFCC").s().p("A6RZYQgzgYgogxQCpgnBXgMQBWgNByiqQAEA5AwA7QgRBehwA1QhlAvh6AAQgfAAgigDgAUv5aQDuARBlCfQBlCfAGAoQl5hNhFkqg");
	this.shape_8.setTransform(150.9,182.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AsORzIgBAAQhfghhfhLIgcgYQgcgZgVgZQgwg6gEg6QgFhJBChHQAdggAtgfIABAAQgCDYDICRQBLA3BgghQhNB9hTAAQgNAAgMgDgAjTCpQAriHCRgwQBGgYBOgUQgCAQAAANQAABEA0ASQg0gSAAhEQAAgNACgQQBigZBsgSIicCeIiACFQhCg6gig7QAiA7BCA6IhVBaQh7ghgyhOQAyBOB7AhQhyB4g7BFQgni3Anh1gAAvC+IAAAAgAJtwTIBdhiQA+FVFHhfIiyC5QgsAHgmAAQkIAAAqlUg");
	this.shape_9.setTransform(129.4,230.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:166.1}},{t:this.shape_4,p:{y:31.7}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5,p:{y:186.2}},{t:this.shape_4,p:{y:51.7}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,330.2,351.2);


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


(lib.anim_stace_kicksball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_7 = function() {
		playSound("ball_kick");
	}
	this.frame_15 = function() {
		/* gotoAndPlay("start");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8).call(this.frame_15).wait(1));

	// ball
	this.instance = new lib.static_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-6.8,315.4,1,1,0,0,0,23.1,23.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(2).to({x:-6.9,y:314.6},0).to({scaleX:9.33,scaleY:9.33,rotation:1800,guide:{path:[-6.9,314.5,-10.7,277.7,-28,243.1,-46.9,205.2,-63.6,159.2,-80.3,113.1,-92.1,68.9,-103.8,24.6,-144.2,-52,-184.7,-128.7,-248.3,-148.6,-311.9,-168.6,-360,-172.6,-408.2,-176.7,-471.5,-159.2,-534.8,-141.7,-574.8,-115.4,-614.8,-89.1,-647,-65.5,-679.2,-42,-699.8,-12.3,-705.4,-4.2,-710.2,8.5]}},8).wait(1));

	// hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AlqCyQgLgBgLAAQgxgCgogbQgggWgsgJQgvgKgwgBQgwAAglAWQgYAPgSASQAdg1BDgeQA+gbA+AcQA0AYA/ATQA3ARAwgaQAXgMAhgSQAMgGALgPQAdgoAFg1QAFg7gDg9QgCg4AYgrQAZgsAogdQAmgcA0gHQARgCAUACQAhgOAygIQAvgHAuAKQAvALAhAcQAgAbAVArQAUAqAHAwQAHAwAGAvQAHAwAIArQAIAuAPArQAHAUALAQQAPAWAVAOQAjAWAzABQAmAAAegKQALgEAKgFQAmgUAZgnQAXgkAHgvQACgLgBgMQAFgjAgAoQAdAlAAAwQAAAKAAAKQgDAmgQAgQgFAKgEAJQgOARgQAOQgPAOgRALQglAYgiAWQgmAZgwADQgxADgvgIQgxgKgkgZQgqgeABgnQgMgggLghQgMgmgOguQgOgsgFguQgGgwgJgsQgJgwgSgnQgQgjgYguQgWgqgrgWQgrgWguAQQgxAVgoAZQgnAagUAmQgWAngBAxQgBAyAEAvQADAzgSAmQgSAigbAjQgdAkgtAKQgeAGgdAOgALoDPQgKATgJATQgGAOgHAOQgTAoglAYQgmAYgwALQguAKgxACQgxACgtgOQgugNgmgcQgjgagTgoQgWgtgEgxQgDgtgHgwQgHguAAgwQABgwgCgvQgBgGAAgGQAAgMAAgNQgfgqgZglQgaglgtgTQgngRghgNQgpAdgeAeQggAegPAmQgMAegFAhAiKAVQAXgLAYgUQAKgKAHgKQgRgJgLgPQgSgZgCgsQgHAAgHAAQgCALgBALQgFAwACAyQABANADALQgIAEgIADQAGAFAGAFQAQANASAOQAEADAEADQALAIACAMQAEAdANAWAkWDCQgHgBgIgCQghgKgkgDAhsBBQgIAigTAlQgXAtgpALQgoAKgngIAiOAmQgOAtgVAfQgZAlglAYQgUANgTAG");
	this.shape.setTransform(139.3,38.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFF97").s().p("AF9F0QgugNgmgcQgjgagTgoQgWgtgEgxQgDgtgHgwQgHguAAgwQABgwgCgvIgBgMIAAgZIg4hPQgaglgtgTQgngRghgNQgpAdgeAeQggAegPAmQgMAegFAhIAOAAIAAAKQAAARAFAOQAFAQAKAMIAKALQAIAHAKAGQgRgJgLgPQALAPARAJQgHAKgKAKQgYAUgXALQgDgLgBgNIgBgcQAAgjAEgjIADgWIgDAWQgEAjAAAjIABAcQABANADALIgQAHIAMAKIAiAbQgIAigTAlQgXAtgpALQgoAKgngIQATgGAUgNQAlgYAZglQAVgfAOgtQgOAtgVAfQgZAlglAYQgUANgTAGIgPgDQghgKgkgDQAdgOAegGQAtgKAdgkQAbgjASgiQAPggAAgpIAAgQQgDglAAgnIAAgVQABgxAWgnQAUgmAngaQAogZAxgVIAAAAIABAAIAAAAIABgBIAAAAQASgGASAAIAAAAIAAAAQAaABAYAMIABAAQArAWAWAqQAYAuAQAjQASAnAJAwQAJAsAGAwQAFAuAOAsIAaBUIAXBBIAAABQAAAmApAeQAkAZAxAKIACAAIAEABQAgAFAgAAIABAAIAAAAIAUgBIAFAAQAwgDAmgZIBHguQARgLAPgOQAQgOAOgRQgOARgQAOQgPAOgRALIhHAuQgmAZgwADIgFAAIgUABIAAAAIgBAAQggAAgggFIgEgBIgCAAQgxgKgkgZQgpgeAAgmIAAgBIgXhBIgahUQgOgsgFguQgGgwgJgsQgJgwgSgnQgQgjgYguQgWgqgrgWIgBAAQgYgMgagBIAAAAIAAAAQgSAAgSAGIAAAAIgBABIAAAAIgBAAIAAAAQgxAVgoAZQgnAagUAmQgWAngBAxIAAAVQAAAnADAlIAAAQQAAApgPAgQgSAigbAjQgdAkgtAKQgeAGgdAOIgWgBQgxgCgogbQgggWgsgJQgvgKgwgBQgwAAglAWQgYAPgSASQAdg1BDgeQA+gbA+AcQA0AYA/ATQA3ARAwgaIA4geQAMgGALgPQAdgoAFg1QAFg7gDg9QgCg4AYgrQAZgsAogdQAmgcA0gHQARgCAUACQAhgOAygIQAvgHAuAKQAvALAhAcQAgAbAVArQAUAqAHAwIANBfQAHAwAIArQAIAuAPArQAHAUALAQQAPAWAVAOQAjAWAzABQAmAAAegKQALgEAKgFQAmgUAZgnQAXgkAHgvQACgLgBgMQAFgjAgAoQAdAlAAAwIAAAUQgDAmgQAgIgJATIgTAmIgNAcQgTAoglAYQgmAYgwALQguAKgxACIgMAAQgrAAgngMgAhKgeIAAAAg");
	this.shape_1.setTransform(139.3,38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(15));

	// forward arm
	this.instance_1 = new lib.static_stace_arm2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.6,59.1,1,1,0,0,0,9.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3.6},1).to({regY:7.8,rotation:30,y:59.2},7).to({regX:9.7,regY:7.7,scaleX:1,scaleY:1,rotation:9.3,x:182.5,y:59.1},7).wait(1));

	// body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAhgbQAsgLgPApAhBgHQAqgHgQAs");
	this.shape_2.setTransform(134.1,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_3.setTransform(166.9,182.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC97").s().p("AhRbNQgLAYgjgYQgPgKgFgIIgBgCQgCgEAAgDQABgOAcgJQgcAJgBAOQAAADACAEQgLgBgIgFQgQgJgHgHQgGgHAAgFQAAgKAVgIIABgBIgBABQgVAIAAAKQAAAFAGAHIgGAEQghACgNgUQgGgLgDgIQgBgGAAgEQAAgXAmgCQgmACAAAXQAAAEABAGQgQALgSgPQgQgNgEgKIgCgHQAAgPAfgJQgfAJAAAPIACAHIgNAEQglgQgJguQgEgUANgKQAkgcAxANQAqALAgAkQAkAAAfgDQAxgEAsgTQAngRAngcQAggXAeghQgHgegMgSQgLgUgKgZQgRgsgXgnIgvhRQgWgogRgvQgQgugbgnIg0hPQgZgngggiQghgjgWggQgLgTgQgVQgdglgMguQgLgsgOgtQgOgugGgvQgGgvAGgrQAXgIAZABQAvAAAuADQAvACAtAGQAwAGApASIAcAMQAKAmgJAvQgIAugPAsQgNAkgGAiQAJArAkAbQAPALAOANQAiAcAcAoQAaAlAWAoQAXArAJAwQAIAtALAsQALAwANAsQgCAuANAuIAcBXQAPAuATArIAnBUQAUApgLAuQgMAzg3ABQgyACgrgQQgugRglAjQghAfgmAVQgSAKgPAAQgZAAgQgZgADqYcQgEAJgMADQAMgDAEgJQAFgOAAgPQAAgegYgdQAYAdAAAeQAAAPgFAOgAjqLnQgRgOAAgQQAAgGACgHQgCAHAAAGQAAAQARAOgAhMLLIADgRIgDARgAj7aCIAAAAgAgEj6QgvAAgtgKQgsgKgngSQgngTgfgYIgQgOQgYgTgWgUQAbgMArgzQArgzAKgfQAKggAEgiIANhRQAIgvgIgpIAeAQQA4gSAwgGQAvgFAQAGQAQAFBAgjQBAgkAwgRQAwgQAmgVQAbgOAdgJIAGAZIAAAAIAAABIAAgBIAAABIg4B3IhNB7QhDBrgeBKQgeBKAdBmQgWAWglAJQglAIgsAAIgJAAgAFrvQQgugIgvgBIhhgCQgxAAgugEIhhgIIg6gHIgBAAIgHgBQAJgUAZgRQgZARgJAUIgagDQgqgGgqADQAUgSAYgQQAkgaATgaIAthAQAMg4hVgCQAmAAAdgVQALgIADgOQgDAOgLAIQgdAVgmAAIgCAAQgPAAgRgEQg2gLgngfQgSgOgLgTQAxgMA0gaQg0AagxAMQgNgWgEgeQgCgLgLgJIgIgGIgigaIgMgKIAQgHQAXgMAYgVQAKgJAIgLQASgaABgiQAFgZgIgSQgGgQgOgMIgBAAQgEgDgFAAIAAAAIAAAAIgGABIgBAAIAAAAIAAAAQgZAKgDAfQADgfAZgKIAAAAIAAAAIABAAIAGgBIAAAAIAAAAQAFAAAEADIABAAQAOAMAGAQQgfAMgigBIgOgBQAFghAMgdQAPgnAggeQAegdApgeQAngKAyACQAvACAiAbQAjAcAdAfQAdAdAOAtQAPAtAQAqQAOAnAGAuQAGA1gUAlQgQAggdASQAbAeApAHQApAHAtAJQAvAKAsAPIATAGQASAjAhA1IAAABQAGAJAFAgQADAvgCA5IgWgDgAAs0DIAOgIIgOAIgAjk4JIAAAFQABAPAFAHQAIALAPgGIABAAIAFgDQArgWgQgyIgBgBQgLgfgbAAIAAAAIAAAAQgHAAgIACIgCAAIAAAAIgCABIACgBIAAAAIACAAQAIgCAHAAIAAAAIAAAAQAbAAALAfIABABQgUALgqgHQgBAUABATgAjg5RQgDARgBAQQABgQADgRIADgPIgDAPgAim40IAPgEIgPAEg");
	this.shape_4.setTransform(160.3,182.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AhmLZIgbgMQgpgSgwgGQgtgGgvgCQgugDgvAAQgZgBgXAIQgWAIgUARIAEgeQADgXgBgZIgChhQgBg0gIgqQgIgvgEgvQgDgmgJg7IgGggIDBkjIARAOQAfAYAnATQAnARAsAKQAtAKAvAAQAyABAogJQAlgJAWgVQAHAxAAAwQAAAygaAmIgzBMQgaAqgeAcIgCABIAAAAQggAdgaAfQAagfAggdIAAAAIACgBIgBACQgLApACAwQADAygGAtIgMBhQgGAvACAzIABAoIgYgKgAgyE+IAAAAgAjmnoQgTgKgSgNQglgZgNgqQgKgeAGgiIACgIQAIgkAZgcQAKgMAMgLQAqgDAqAGIAaADIAHABIABAAIA6AHIBhAIQAuAEAxAAIBhACQAvABAuAIIAWADIAmAGQALAFAOACQAXADAegFQALgCAJAFQAjASAqgIQgUAZg7AMQgXAFgagBIgCAAQgkgCAAgRIABgFQgSAHgPADQgPADgPAFQgdAJgbAOQgmAVgwAQQgwARhAAkQg/AjgQgFQgQgGgwAFQgwAGg4ASIgegQgAgSqAQAkAAAjgHIAEgBIAAAAIAFgBIBfgUQAugJAwgCIACAAIABAAIACAAIAAAAIABAAQAUAAARAHQgRgHgUAAIgBAAIAAAAIgCAAIgBAAIgCAAQgwACguAJIhfAUIgFABIAAAAIgEABQgjAHgkAAIAAAAIAAAAIgGAAIAAAAIgGgBIAGABIAAAAIAGAAIAAAAIAAAAgAGZn2QgdgSgbgMIgJgGQgOgJgLgdQgGgPgGgVIAAgBIAAAAIgGgZQAPgFAPgDQAPgDASgHIgBAFQAAARAkACIACAAQgFA2AjAVQAIAFACAJQAMAkgTAaQgGgKgTgLg");
	this.shape_5.setTransform(167.2,155.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhBgHQAqgHgQAsQgTgQgHgVgAAnAAQgFgHgBgPIAAgFQAsgLgPApIAAABQgFACgFAAQgIAAgFgGg");
	this.shape_6.setTransform(134.1,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2AsQARgsgqAFQgFgNAAgRIAAgJQAiAAAfgMQAIATgFAYQgCAigSAaQgKgGgIgHgAAwASIAAgBQAPgpgsALQgBgUABgTQAqAHAUgLQAQAxgrAWIgGADg");
	this.shape_7.setTransform(135.5,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_8.setTransform(166.9,182.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8}]},1).wait(15));

	// foreleg
	this.instance_2 = new lib.static_stace_foreleg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.5,214.9,1,1,0,0,0,13.1,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:8.2,scaleX:1,scaleY:1,rotation:7.8,x:52,y:215.6},1).to({regY:8.1,scaleX:1,scaleY:1,rotation:39.9,x:50.1,y:218.3},4).to({scaleX:1,scaleY:1,rotation:90,x:51.8,y:214.3},3).to({regY:8.2,scaleX:1,scaleY:1,rotation:57.4,x:48.9,y:216.9},4).to({regY:8.1,scaleX:1,scaleY:1,rotation:8.5,x:52.5,y:214.9},3).wait(1));

	// leg
	this.instance_3 = new lib.static_stace_quad("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(131.2,164.6,1,1,0,0,0,91.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:26.1,rotation:-0.8},1).to({regX:91.4,regY:26,rotation:-6.8,x:131.1},7).to({regX:91.5,rotation:0,x:131.2},7).wait(1));

	// arm
	this.instance_4 = new lib.static_stace_arm("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(152.8,76.2,1,1,0,0,0,148.3,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-6.8},1).to({regY:26.7,scaleX:1,scaleY:1,rotation:-55.8},7).to({regY:26.6,scaleX:1,scaleY:1,rotation:-3.8,y:76.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-1,245.1,361.4);


(lib.anim_stace_kicks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("carmen_blocks");
	}
	this.frame_15 = function() {
		/* gotoAndPlay("start");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(14).call(this.frame_15).wait(1));

	// hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AlqCyQgLgBgLAAQgxgCgogbQgggWgsgJQgvgKgwgBQgwAAglAWQgYAPgSASQAdg1BDgeQA+gbA+AcQA0AYA/ATQA3ARAwgaQAXgMAhgSQAMgGALgPQAdgoAFg1QAFg7gDg9QgCg4AYgrQAZgsAogdQAmgcA0gHQARgCAUACQAhgOAygIQAvgHAuAKQAvALAhAcQAgAbAVArQAUAqAHAwQAHAwAGAvQAHAwAIArQAIAuAPArQAHAUALAQQAPAWAVAOQAjAWAzABQAmAAAegKQALgEAKgFQAmgUAZgnQAXgkAHgvQACgLgBgMQAFgjAgAoQAdAlAAAwQAAAKAAAKQgDAmgQAgQgFAKgEAJQgOARgQAOQgPAOgRALQglAYgiAWQgmAZgwADQgxADgvgIQgxgKgkgZQgqgeABgnQgMgggLghQgMgmgOguQgOgsgFguQgGgwgJgsQgJgwgSgnQgQgjgYguQgWgqgrgWQgrgWguAQQgxAVgoAZQgnAagUAmQgWAngBAxQgBAyAEAvQADAzgSAmQgSAigbAjQgdAkgtAKQgeAGgdAOgALoDPQgKATgJATQgGAOgHAOQgTAoglAYQgmAYgwALQguAKgxACQgxACgtgOQgugNgmgcQgjgagTgoQgWgtgEgxQgDgtgHgwQgHguAAgwQABgwgCgvQgBgGAAgGQAAgMAAgNQgfgqgZglQgaglgtgTQgngRghgNQgpAdgeAeQggAegPAmQgMAegFAhAiKAVQAXgLAYgUQAKgKAHgKQgRgJgLgPQgSgZgCgsQgHAAgHAAQgCALgBALQgFAwACAyQABANADALQgIAEgIADQAGAFAGAFQAQANASAOQAEADAEADQALAIACAMQAEAdANAWAkWDCQgHgBgIgCQghgKgkgDAhsBBQgIAigTAlQgXAtgpALQgoAKgngIAiOAmQgOAtgVAfQgZAlglAYQgUANgTAG");
	this.shape.setTransform(139.3,38.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFF97").s().p("AF9F0QgugNgmgcQgjgagTgoQgWgtgEgxQgDgtgHgwQgHguAAgwQABgwgCgvIgBgMIAAgZIg4hPQgaglgtgTQgngRghgNQgpAdgeAeQggAegPAmQgMAegFAhIAOAAIAAAKQAAARAFAOQAFAQAKAMIAKALQAIAHAKAGQgRgJgLgPQALAPARAJQgHAKgKAKQgYAUgXALQgDgLgBgNIgBgcQAAgjAEgjIADgWIgDAWQgEAjAAAjIABAcQABANADALIgQAHIAMAKIAiAbQgIAigTAlQgXAtgpALQgoAKgngIQATgGAUgNQAlgYAZglQAVgfAOgtQgOAtgVAfQgZAlglAYQgUANgTAGIgPgDQghgKgkgDQAdgOAegGQAtgKAdgkQAbgjASgiQAPggAAgpIAAgQQgDglAAgnIAAgVQABgxAWgnQAUgmAngaQAogZAxgVIAAAAIABAAIAAAAIABgBIAAAAQASgGASAAIAAAAIAAAAQAaABAYAMIABAAQArAWAWAqQAYAuAQAjQASAnAJAwQAJAsAGAwQAFAuAOAsIAaBUIAXBBIAAABQAAAmApAeQAkAZAxAKIACAAIAEABQAgAFAgAAIABAAIAAAAIAUgBIAFAAQAwgDAmgZIBHguQARgLAPgOQAQgOAOgRQgOARgQAOQgPAOgRALIhHAuQgmAZgwADIgFAAIgUABIAAAAIgBAAQggAAgggFIgEgBIgCAAQgxgKgkgZQgpgeAAgmIAAgBIgXhBIgahUQgOgsgFguQgGgwgJgsQgJgwgSgnQgQgjgYguQgWgqgrgWIgBAAQgYgMgagBIAAAAIAAAAQgSAAgSAGIAAAAIgBABIAAAAIgBAAIAAAAQgxAVgoAZQgnAagUAmQgWAngBAxIAAAVQAAAnADAlIAAAQQAAApgPAgQgSAigbAjQgdAkgtAKQgeAGgdAOIgWgBQgxgCgogbQgggWgsgJQgvgKgwgBQgwAAglAWQgYAPgSASQAdg1BDgeQA+gbA+AcQA0AYA/ATQA3ARAwgaIA4geQAMgGALgPQAdgoAFg1QAFg7gDg9QgCg4AYgrQAZgsAogdQAmgcA0gHQARgCAUACQAhgOAygIQAvgHAuAKQAvALAhAcQAgAbAVArQAUAqAHAwIANBfQAHAwAIArQAIAuAPArQAHAUALAQQAPAWAVAOQAjAWAzABQAmAAAegKQALgEAKgFQAmgUAZgnQAXgkAHgvQACgLgBgMQAFgjAgAoQAdAlAAAwIAAAUQgDAmgQAgIgJATIgTAmIgNAcQgTAoglAYQgmAYgwALQguAKgxACIgMAAQgrAAgngMgAhKgeIAAAAg");
	this.shape_1.setTransform(139.3,38.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AlqCyQgLgBgLAAQgxgCgogbQgggWgsgJQgvgKgwgBQgwAAglAWQgYAPgSASQAdg1BDgeQA+gbA+AcQA0AYA/ATQA3ARAwgaQAXgMAhgSQAMgGALgPQAdgoAFg1QAFg7gDg9QgCg4AYgrQAZgsAogdQAmgcA0gHQARgCAUACQAhgOAygIQAvgHAuAKQAvALAhAcQAgAbAVArQAUAqAHAwQAHAwAGAvQAHAwAIArQAIAuAPArQAHAUALAQQAPAWAVAOQAjAWAzABQAmAAAegKQALgEAKgFQAmgUAZgnQAXgkAHgvQACgLgBgMQAFgjAgAoQAdAlAAAwQAAAKAAAKQgDAmgQAgQgFAKgEAJQgOARgQAOQgPAOgRALQglAYgiAWQgmAZgwADQgxADgvgIQgxgKgkgZQgqgeABgnQgMgggLghQgMgmgOguQgOgsgFguQgGgwgJgsQgJgwgSgnQgQgjgYguQgWgqgrgWQgrgWguAQQgxAVgoAZQgnAagUAmQgWAngBAxQgBAyAEAvQADAzgSAmQgSAigbAjQgdAkgtAKQgeAGgdAOgALoDPQgKATgJATQgGAOgHAOQgTAoglAYQgmAYgwALQguAKgxACQgxACgtgOQgugNgmgcQgjgagTgoQgWgtgEgxQgDgtgHgwQgHguAAgwQABgwgCgvQgBgGAAgGQAAgMAAgNQgfgqgZglQgaglgtgTQgngRghgNQgpAdgeAeQggAegPAmQgMAegFAhQgCALgBALQgFAwACAyQABANADALAiIh7QAHAAAHAAQACAsASAZQALAPARAJQgHAKgKAKQgYAUgXALQgIAEgIADQAGAFAGAFQAQANASAOQAEADAEADQALAIACAMQAEAdANAWAkWDCQgHgBgIgCQghgKgkgDAhsBBQgIAigTAlQgXAtgpALQgoAKgngIAiOAmQgOAtgVAfQgZAlglAYQgUANgTAG");
	this.shape_2.setTransform(139.3,38.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFF97").s().p("AF9F0QgugNgmgcQgjgagTgoQgWgtgEgxQgDgtgHgwQgHguAAgwQABgwgCgvIgBgMIAAgZIg4hPQgaglgtgTQgngRghgNQgpAdgeAeQggAegPAmQgMAegFAhIgDAWQgEAjAAAjIABAcQABANADALQgDgLgBgNIgBgcQAAgjAEgjIADgWIAOAAIAAAKQAAARAFAOQAFAQAKAMIAKALQAIAHAKAGQgRgJgLgPQALAPARAJQgHAKgKAKQgYAUgXALIgQAHIAMAKIAiAbQgIAigTAlQgXAtgpALQgoAKgngIQATgGAUgNQAlgYAZglQAVgfAOgtQgOAtgVAfQgZAlglAYQgUANgTAGIgPgDQghgKgkgDQAdgOAegGQAtgKAdgkQAbgjASgiQAPggAAgpIAAgQQgDglAAgnIAAgVQABgxAWgnQAUgmAngaQAogZAxgVIAAAAIABAAIAAAAIABgBIAAAAQASgGASAAIAAAAIAAAAQAaABAYAMIABAAQArAWAWAqQAYAuAQAjQASAnAJAwQAJAsAGAwQAFAuAOAsIAaBUIAXBBIAAABQAAAmApAeQAkAZAxAKIACAAIAEABQAgAFAgAAIABAAIAAAAIAUgBIAFAAQAwgDAmgZIBHguQARgLAPgOQAQgOAOgRQgOARgQAOQgPAOgRALIhHAuQgmAZgwADIgFAAIgUABIAAAAIgBAAQggAAgggFIgEgBIgCAAQgxgKgkgZQgpgeAAgmIAAgBIgXhBIgahUQgOgsgFguQgGgwgJgsQgJgwgSgnQgQgjgYguQgWgqgrgWIgBAAQgYgMgagBIAAAAIAAAAQgSAAgSAGIAAAAIgBABIAAAAIgBAAIAAAAQgxAVgoAZQgnAagUAmQgWAngBAxIAAAVQAAAnADAlIAAAQQAAApgPAgQgSAigbAjQgdAkgtAKQgeAGgdAOIgWgBQgxgCgogbQgggWgsgJQgvgKgwgBQgwAAglAWQgYAPgSASQAdg1BDgeQA+gbA+AcQA0AYA/ATQA3ARAwgaIA4geQAMgGALgPQAdgoAFg1QAFg7gDg9QgCg4AYgrQAZgsAogdQAmgcA0gHQARgCAUACQAhgOAygIQAvgHAuAKQAvALAhAcQAgAbAVArQAUAqAHAwIANBfQAHAwAIArQAIAuAPArQAHAUALAQQAPAWAVAOQAjAWAzABQAmAAAegKQALgEAKgFQAmgUAZgnQAXgkAHgvQACgLgBgMQAFgjAgAoQAdAlAAAwIAAAUQgDAmgQAgIgJATIgTAmIgNAcQgTAoglAYQgmAYgwALQguAKgxACIgMAAQgrAAgngMg");
	this.shape_3.setTransform(139.3,38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},14).wait(1));

	// forward arm
	this.instance = new lib.static_stace_arm2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(182.6,59.1,1,1,0,0,0,9.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.6},1).to({regY:7.8,rotation:30,y:59.2},7).to({regX:9.7,regY:7.7,scaleX:1,scaleY:1,rotation:9.3,x:182.5,y:59.1},7).wait(1));

	// body
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAhgbQAsgLgPApAhBgHQAqgHgQAs");
	this.shape_4.setTransform(134.1,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_5.setTransform(166.9,182.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC97").s().p("AhRbNQgLAYgjgYQgPgKgFgIIgBgCQgCgEAAgDQABgOAcgJQgcAJgBAOQAAADACAEQgLgBgIgFQgQgJgHgHQgGgHAAgFQAAgKAVgIIABgBIgBABQgVAIAAAKQAAAFAGAHIgGAEQghACgNgUQgGgLgDgIQgBgGAAgEQAAgXAmgCQgmACAAAXQAAAEABAGQgQALgSgPQgQgNgEgKIgCgHQAAgPAfgJQgfAJAAAPIACAHIgNAEQglgQgJguQgEgUANgKQAkgcAxANQAqALAgAkQAkAAAfgDQAxgEAsgTQAngRAngcQAggXAeghQgHgegMgSQgLgUgKgZQgRgsgXgnIgvhRQgWgogRgvQgQgugbgnIg0hPQgZgngggiQghgjgWggQgLgTgQgVQgdglgMguQgLgsgOgtQgOgugGgvQgGgvAGgrQAXgIAZABQAvAAAuADQAvACAtAGQAwAGApASIAcAMQAKAmgJAvQgIAugPAsQgNAkgGAiIgDARIADgRQAJArAkAbQAPALAOANQAiAcAcAoQAaAlAWAoQAXArAJAwQAIAtALAsQALAwANAsQgCAuANAuIAcBXQAPAuATArIAnBUQAUApgLAuQgMAzg3ABQgyACgrgQQgugRglAjQghAfgmAVQgSAKgPAAQgZAAgQgZgADqYcQgEAJgMADQAMgDAEgJQAFgOAAgPQAAgegYgdQAYAdAAAeQAAAPgFAOgAjqLnQgRgOAAgQQAAgGACgHQgCAHAAAGQAAAQARAOgAj7aCIAAAAgAkxZnIAAAAgAgEj6QgvAAgtgKQgsgKgngSQgngTgfgYIgQgOQgYgTgWgUQAbgMArgzQArgzAKgfQAKggAEgiIANhRQAIgvgIgpIAeAQQA4gSAwgGQAvgFAQAGQAQAFBAgjQBAgkAwgRQAwgQAmgVQAbgOAdgJIAGAZIAAABIAAgBIAAAAIAAABIg4B3IhNB7QhDBrgeBKQgeBKAdBmQgWAWglAJQglAIgsAAIgJAAgAFrvQQgugIgvgBIhhgCQgxAAgugEIhhgIIg6gHIgBAAIgHgBQAJgUAZgRQgZARgJAUIgagDQgqgGgqADQAUgSAYgQQAkgaATgaIAthAQAMg4hVgCQAmAAAdgVQALgIADgOQgDAOgLAIQgdAVgmAAIgCAAQgPAAgRgEQg2gLgngfQgSgOgLgTQAxgMA0gaQg0AagxAMQgNgWgEgeQgCgLgLgJIgIgGIgigaIgMgKIAQgHQAXgMAYgVQAKgJAIgLQASgaABgiQAFgZgIgSQgGgQgOgMIgBAAQgEgDgFAAIAAAAIAAAAIgGABIgBAAIAAAAIAAAAQgZAKgDAfQADgfAZgKIAAAAIAAAAIABAAIAGgBIAAAAIAAAAQAFAAAEADIABAAQAOAMAGAQQgfAMgigBIgOgBQAFghAMgdQAPgnAggeQAegdApgeQAngKAyACQAvACAiAbQAjAcAdAfQAdAdAOAtQAPAtAQAqQAOAnAGAuQAGA1gUAlQgQAggdASQAbAeApAHQApAHAtAJQAvAKAsAPIATAGQASAjAhA1IAAABQAGAJAFAgQADAvgCA5IgWgDgAAs0DIAOgIIgOAIgAjk4JIAAAFQABAPAFAHQAIALAPgGIABAAIAFgDQArgWgQgyIgBgBQgLgfgbAAIAAAAIAAAAQgHAAgIACIgCAAIAAAAIgCABIACgBIAAAAIACAAQAIgCAHAAIAAAAIAAAAQAbAAALAfIABABQgUALgqgHQgBAUABATgAjg5RQgDARgBAQQABgQADgRIADgPIgDAPgAim40IAPgEIgPAEg");
	this.shape_6.setTransform(160.3,182.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AhmLZIgbgMQgpgSgwgGQgtgGgvgCQgugDgvAAQgZgBgXAIQgWAIgUARIAEgeQADgXgBgZIgChhQgBg0gIgqQgIgvgEgvQgDgmgJg7IgGggIDBkjIARAOQAfAYAnATQAnARAsAKQAtAKAvAAQAyABAogJQAlgJAWgVQAHAxAAAwQAAAygaAmIgzBMQgaAqgeAcIgCABIAAAAQggAdgaAfQAagfAggdIAAAAIACgBIgBACQgLApACAwQADAygGAtIgMBhQgGAvACAzIABAoIgYgKgAgyE+IAAAAgAjmnoQgTgKgSgNQglgZgNgqQgKgeAGgiIACgIQAIgkAZgcQAKgMAMgLQAqgDAqAGIAaADIAHABIABAAIA6AHIBhAIQAuAEAxAAIBhACQAvABAuAIIAWADIAmAGQALAFAOACQAXADAegFQALgCAJAFQAjASAqgIQgUAZg7AMQgXAFgagBIgCAAQgkgCAAgRIABgFQgSAHgPADQgPADgPAFQgdAJgbAOQgmAVgwAQQgwARhAAkQg/AjgQgFQgQgGgwAFQgwAGg4ASIgegQgAgSqAQAkAAAjgHIAEgBIAAAAIAFgBIBfgUQAugJAwgCIACAAIABAAIACAAIAAAAIABAAQAUAAARAHQgRgHgUAAIgBAAIAAAAIgCAAIgBAAIgCAAQgwACguAJIhfAUIgFABIAAAAIgEABQgjAHgkAAIAAAAIAAAAIgGAAIAAAAIgGgBIAGABIAAAAIAGAAIAAAAIAAAAgAGZn2QgdgSgbgMIgJgGQgOgJgLgdQgGgPgGgVIAAgBIAAAAIgGgZQAPgFAPgDQAPgDASgHIgBAFQAAARAkACIACAAQgFA2AjAVQAIAFACAJQAMAkgTAaQgGgKgTgLg");
	this.shape_7.setTransform(167.2,155.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhBgHQAqgHgQAsQgTgQgHgVgAAnAAQgFgHgBgPIAAgFQAsgLgPApIAAABQgFACgFAAQgIAAgFgGg");
	this.shape_8.setTransform(134.1,30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2AsQARgsgqAFQgFgNAAgRIAAgJQAiAAAfgMQAIATgFAYQgCAigSAaQgKgGgIgHgAAwASIAAgBQAPgpgsALQgBgUABgTQAqAHAUgLQAQAxgrAWIgGADg");
	this.shape_9.setTransform(135.5,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_10.setTransform(166.9,182.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_9},{t:this.shape_10}]},1).wait(15));

	// foreleg
	this.instance_1 = new lib.static_stace_foreleg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.5,214.9,1,1,0,0,0,13.1,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:8.2,scaleX:1,scaleY:1,rotation:7.8,x:52,y:215.6},1).to({regY:8.1,scaleX:1,scaleY:1,rotation:39.9,x:50.1,y:218.3},4).to({scaleX:1,scaleY:1,rotation:90,x:51.8,y:214.3},3).to({regY:8.2,scaleX:1,scaleY:1,rotation:57.4,x:48.9,y:216.9},4).to({regY:8.1,scaleX:1,scaleY:1,rotation:8.5,x:52.5,y:214.9},3).wait(1));

	// leg
	this.instance_2 = new lib.static_stace_quad("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(131.2,164.6,1,1,0,0,0,91.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:26.1,rotation:-0.8},1).to({regX:91.4,regY:26,rotation:-6.8,x:131.1},7).to({regX:91.5,rotation:0,x:131.2},7).wait(1));

	// arm
	this.instance_3 = new lib.static_stace_arm("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(152.8,76.2,1,1,0,0,0,148.3,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-6.8},1).to({regY:26.7,scaleX:1,scaleY:1,rotation:-55.8},7).to({regY:26.6,scaleX:1,scaleY:1,rotation:-3.8,y:76.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-1,245.1,361.4);


(lib.anim_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ballStable:0,ballStart:1});

	// timeline functions:
	this.frame_0 = function() {
		playSound("ball_passes");
		/* stop();*/
	}
	this.frame_2 = function() {
		playSound("ball_passes");
	}
	this.frame_11 = function() {
		/* gotoAndPlay("ballStart");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(9).call(this.frame_11).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsXKsIAA1XIYvAAIAAVXg");
	var mask_graphics_1 = new cjs.Graphics().p("AsXKsIAA1XIYvAAIAAVXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-12.6,y:36.6}).wait(1).to({graphics:mask_graphics_1,x:-12.6,y:36.6}).wait(11));

	// Layer 1
	this.instance = new lib.static_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-55.7,-5.7,1,1,0,0,0,23.1,23.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-52.7},0).to({rotation:360,x:53.5,y:78.3},9,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.8,-29.8,48.1,48.1);


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
		var bgm = createjs.Sound.play('bgmSub',{loop:-1});
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
		
		 window.open ("subject_scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subject_scene5.html","_self");
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

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-486.5,-13,534.3,401.8), null);


(lib.Diagramkicks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"kicks subject":63,"kicks verb":138,"kicks complement":212,"kicks recap":366});

	// timeline functions:
	this.frame_74 = function() {
		playSound("cowbell_3times");
	}
	this.frame_150 = function() {
		playSound("cowbell_3times");
	}
	this.frame_242 = function() {
		playSound("cowbell_3times");
	}
	this.frame_308 = function() {
		playSound("carmen_blocks");
	}
	this.frame_322 = function() {
		playSound("ball_kick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(76).call(this.frame_150).wait(92).call(this.frame_242).wait(66).call(this.frame_308).wait(14).call(this.frame_322).wait(168));

	// pen
	this.pen = new lib.anim_pencil();
	this.pen.parent = this;
	this.pen.setTransform(31.9,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.pen).to({regX:-7.2,regY:352,x:-490.4,y:577.4},4).to({x:-27.9,y:583.8},10).to({x:-378.4,y:472.3},5).to({y:652.6},6).to({x:-173.5,y:474.1},5).to({x:-172,y:583.8},7).to({x:27.8,y:370},7).to({_off:true},1).wait(256).to({_off:false,regX:164.1,regY:174.6,x:251,y:169.9},0).to({x:1,y:407.1},7).to({x:89.4,y:492.5},7).to({x:271.7,y:426.8},7).to({_off:true},1).wait(167));

	// textClips
	this.instance = new lib.Wordsverb();
	this.instance.parent = this;
	this.instance.setTransform(-261.9,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_1 = new lib.Wordscomplement();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-86,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_2 = new lib.Wordssubject();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-434.9,431.8,1,1,0,0,0,50.7,19.7);

	this.instance_3 = new lib.staticperiod("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-156.2,706.5,1,1,0,0,0,6.9,17.3);

	this.instance_4 = new lib.Wordspass();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-180.9,717.6,1,1,0,0,0,73.5,17.7);

	this.instance_5 = new lib.Wordsa();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-216.4,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_6 = new lib.Wordskicks();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-257.5,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_7 = new lib.Wordsshe();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-307.3,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_8 = new lib.Wordswho();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-429.5,521.6,1,1,0,0,0,51.8,10.4);

	this.instance_9 = new lib.Wordsshe();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-500.2,502.6);

	this.instance_10 = new lib.Wordsdoes();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-266.4,504.6,1,1,0,0,0,73.5,10.4);

	this.instance_11 = new lib.Wordskicks();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-257.5,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_12 = new lib.WordsTowhat();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-82.8,514.2,1,1,0,0,0,51.8,18.7);

	this.instance_13 = new lib.Wordspass();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-180.9,717.6,1,1,0,0,0,73.5,17.7);

	this.instance_14 = new lib.Wordsa();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-216.4,717.6,1,1,0,0,0,73.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},51).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:0,regY:0,x:-500.2,y:502.6}},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_8}]},18).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:0,regY:0,x:-500.2,y:502.6}},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}}]},6).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_10}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_6,p:{x:-267.9,y:525.5}}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_6,p:{x:-267.9,y:525.5}}]},16).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},20).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_12}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_13},{t:this.instance_3},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},17).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_13},{t:this.instance_3},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},16).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}}]},23).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_6,p:{x:-267.9,y:525.5}}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}}]},16).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_6,p:{x:-267.9,y:525.5}},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_6,p:{x:-267.9,y:525.5}},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_6,p:{x:-267.9,y:525.5}},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},8).wait(23));

	// only thing visible (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AUrSrIAApjILPAEIAAJkgAL9HZIAA6IIZsANIAAaIgEgloAHkIAA6IMAxkAAAIAAaIg");
	mask.setTransform(-248,528.9);

	// images
	this.instance_15 = new lib.anim_stace_kicks();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-459.1,519.8,0.257,0.257,0,0,180,126,160.1);
	this.instance_15._off = true;

	this.instance_16 = new lib.anim_stace_kicksball();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-304.4,521.6,0.274,0.274,0,0,180,126.1,179.7);

	this.instance_17 = new lib.anim_ball();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-83.3,521.2,1,1,0,0,0,-12.6,36.6);

	this.instance_18 = new lib.Wordspass();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-84.5,525.5,1,1,0,0,0,73.5,17.7);

	var maskedShapeInstanceList = [this.instance_15,this.instance_16,this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},86).to({state:[]},18).to({state:[{t:this.instance_15}]},24).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_15}]},13).to({state:[{t:this.instance_15},{t:this.instance_16}]},12).to({state:[{t:this.instance_15}]},16).to({state:[{t:this.instance_15},{t:this.instance_16}]},13).to({state:[{t:this.instance_15},{t:this.instance_16}]},20).to({state:[{t:this.instance_15},{t:this.instance_16}]},31).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},14).to({state:[{t:this.instance_15},{t:this.instance_16}]},14).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},13).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_18}]},16).to({state:[{t:this.instance_15},{t:this.instance_16}]},34).to({state:[{t:this.instance_15},{t:this.instance_16}]},12).to({state:[{t:this.instance_15},{t:this.instance_16}]},10).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},10).to({state:[{t:this.instance_16},{t:this.instance_17}]},14).to({state:[{t:this.instance_15},{t:this.instance_17}]},11).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},16).to({state:[{t:this.instance_15},{t:this.instance_16}]},14).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},12).to({state:[{t:this.instance_16},{t:this.instance_17}]},8).to({state:[{t:this.instance_17}]},10).to({state:[]},16).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(86).to({_off:false},0).to({_off:true},18).wait(24).to({_off:false},0).wait(238).to({_off:true},14).wait(11).to({_off:false},0).wait(42).to({_off:true},8).wait(49));

	// diag bar
	this.instance_19 = new lib.static_bar();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-155.4,580.6,1,1,-30,0,0,-0.1,-1.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(308).to({_off:false},0).to({scaleX:1.43,scaleY:45.92,rotation:-43.1,x:-155.8,y:581.2},7).wait(175));

	// right bar
	this.instance_20 = new lib.static_bar();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-166.2,471.3,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(30).to({_off:false},0).to({scaleX:1.18,scaleY:45.6,x:-164.7,y:465.4},7).wait(453));

	// left bar
	this.instance_21 = new lib.static_bar();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-371.1,469.4,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(19).to({_off:false},0).to({scaleX:1.18,scaleY:75.63,y:465.7},6).wait(465));

	// line1
	this.instance_22 = new lib.static_line("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-483.2,574.5,0.02,2.236,0,63.4,0,162.5,0.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(4).to({_off:false},0).to({regX:164,regY:1.6,scaleX:2.8,skewX:-116.6,x:-22,y:579.3},10).wait(476));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.8,-28.2,328.3,349.3);


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
(lib.subject_scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0,scene6repeat:472});

	// timeline functions:
	this.frame_471 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_488 = function() {
		/* gotoAndPlay("scene6repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(471).call(this.frame_471).wait(17).call(this.frame_488).wait(1));

	// Layer 3
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(-65.6,101.5,1,1,0,0,0,13.2,12.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(489));

	// Layer 2
	this.instance_1 = new lib.Diagramkicks();
	this.instance_1.parent = this;
	this.instance_1.setTransform(458,-14.7,1,1,0,0,0,-66.2,329.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(489));

	// NewTitle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("Ag+BIQgCgDAAgEIABgLIAAgMIABgRIAAgSIAAgRIgBgTIgBgRIgBgRQAAgFADgDQAEgEAFAAQAFAAAHALQAXAjASAXQAWAaAaAZIAAgMIgBgMQAAgogCgYIgDgJIgCgKQAAgLAKAAQAQAAAAA8IgBAeIAAAfIgBAOQgCAKgIAAQgFAAgHgHQgmgkgwhCIAAAVIAAAUIAAAXIAAAYQAAAZgJAAQgGAAgDgEg");
	this.shape.setTransform(312.7,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgpA3QgLgNgDgaQgBgMAAgiIAAgWIACgLQACgHAGAAQAJAAAAAPIAAA3QAAA3AmAAQAlAAAAhdIAAgJIAAgIQAAgFACgFQADgFAFgBQAJABAAANIAAALIAAALQAABqg3AAQgcAAgPgQg");
	this.shape_1.setTransform(298.1,28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AguA5QgTgQAAgbQAAgfATgaQAVgdAfAAQAeAAAPANQAPAPAAAfQAAAfgRAaQgUAdgfAAQgaAAgSgQgAgggfQgPAVAAAYQAAATAOALQAMAKATAAQAWAAAOgXQANgUAAgYQAAgXgJgIQgKgJgWAAQgWAAgQAWg");
	this.shape_2.setTransform(283.5,28.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("Ag9BIQgDgDgBgEIACgLIAAgMIABgRIAAgSIAAgRIgBgTIgBgRIgBgRQAAgFAEgDQADgEAFAAQAFAAAHALQAXAjASAXQAVAaAbAZIAAgMIgBgMQAAgogCgYIgDgJIgCgKQAAgLAKAAQAQAAAAA8IgBAeIAAAfIgBAOQgBAKgJAAQgFAAgHgHQgmgkgwhCIAAAVIAAAUIAAAXIAAAYQAAAZgJAAQgGAAgCgEg");
	this.shape_3.setTransform(268.4,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AguA5QgTgQAAgbQAAgfATgaQAVgdAfAAQAeAAAPANQAPAPAAAfQAAAfgRAaQgUAdgfAAQgaAAgSgQgAgggfQgPAVAAAYQAAATAOALQAMAKATAAQAWAAAOgXQANgUAAgYQAAgXgJgIQgKgJgWAAQgWAAgQAWg");
	this.shape_4.setTransform(253.2,28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AguBGQgEgCAAgFIAAgVIgBgWIACgZIACgZIgBgOIgBgOQABgFADgEQADgFAGAAIAWACQANACAIAEQAmAUAAAdQgBAOgNAKQgJAJgQAEQAcAQAPARQADADAAADQAAAEgEADQgCADgEAAQgDAAgDgDQgfgfglgKIABASIAAASQAAAFgDACQgCADgEAAQgEAAgCgDgAgdgpIABALIgBATIgDARIAFAAIADABQAYAAALgHQAFgCAFgEQAEgFABgEQAAgNgPgLQgMgKgPgCIgOgBg");
	this.shape_5.setTransform(239.8,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgnBHQgCgCAAgEIAAgbIACgmIACgmIAAgNIABgNQACgIAHABIAIgCIAOAAQAQAAAPAMQAQAMAAASQAAAXgRANQgQAMgVAAIgLgBIgBAxQAAAEgCACQgDADgDAAQgEAAgDgDgAgUg3IAAARIgCAlIAKABQAPAAAKgHQAMgJAAgPQAAgKgLgIQgKgGgLAAIgIAAIgFAAg");
	this.shape_6.setTransform(228.8,27.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAeAvIgHgGIgPAHQgHACgEABQgVgBgKgMQgKgLAAgYQAAgWAQgQQAPgQAVAAQAIAAAKAFQANAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgCALIAAAUQAAAMABAGIAGAQIACAGIABABQAAAEgDACQgCACgEABQgCAAgEgFgAgPgWQgKAMAAAOQAAAPAFAHQAGAJAKgBQAIAAAGgDQAEgBAGgGQgDgYAAgMIAAgIIACgKIgGgDIgEgBQgNAAgLAMg");
	this.shape_7.setTransform(213.2,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_8.setTransform(197.7,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBDQgDgCABgFIgBgQIAAgRIABgWIABgUQgBgFADgCQADgDAEAAQACAAADADQACACABAFIgBAUIgBAWIAAARIABAQQgBAFgCACQgCADgDAAQgFAAgCgDgAgFgyQgDgEgBgEQABgEADgEQADgDADAAQAFAAADADQADAEAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_9.setTransform(190.9,27.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AALAcQgDgCABgEIAAgjIACgLQACgFAFAAQAEAAACACQACADAAADIAAAEIAAAEIgBAjQAAAJgIAAQgEAAgCgDgAgZAOIAAgRIAAgSQAAgEACgCQADgDADAAQAEAAACADQADACAAAEIgBARIAAARIAAAFIABAEQAAAEgDACQgCACgEAAQgIAAAAgQg");
	this.shape_10.setTransform(177.9,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_11.setTransform(169.2,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_12.setTransform(158.5,27.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AglBAQgRgIAAgOQAAgEACgCQAEgDADAAQAFAAADAGQAFAHAEACQAHAFAPAAQAOAAAMgGQAQgIAAgOQAAgMgNgHQgMgFgPgBQgPAAgKgFQgNgIAAgOQAAgQASgOQATgNASAAQAIAAAMADQAPAEAAAGQAAAJgIAAIgNgCIgOgCQgOAAgKAHQgKAHAAAKQAAAIANADIATACQAVACAMAMQALAJAAAQQAAAWgVANQgRAMgXAAQgRAAgOgHg");
	this.shape_13.setTransform(146.4,28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AALAcQgDgCABgEIAAgjIACgLQACgFAFAAQAEAAACACQACADAAADIAAAEIAAAEIgBAjQAAAJgIAAQgEAAgCgDgAgZAOIAAgRIAAgSQAAgEACgCQADgDADAAQAEAAACADQADACAAAEIgBARIAAARIAAAFIABAEQAAAEgDACQgCACgEAAQgIAAAAgQg");
	this.shape_14.setTransform(135.3,23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFBBQgDgCAAgEIAAgKIAAgLIgBg1IgUgCQgJgBAAgIQAAgEADgDQACgCAEAAIAUABIgBgMIAAgMQAAgEACgCQADgDAEAAQAHAAACAOIAAAIIAAAFIAAAGIANgBQAJAAAEABQAFABAAAHQAAAEgDADQgCADgEAAIgEAAIgFgBIgNACIACA2IAAAEIAAAEQABAVgKAAQgDAAgDgDg");
	this.shape_15.setTransform(121.5,28.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaApQgNgMAAgUQAAgSANgUQANgWARAAQAJAAALAEQAOAFAAAIQAAAEgCADQgCACgEAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgEgEQgGgEgMAAQgJAAgJARQgIAPAAALQAAAMAIAHQAIAHALAAQAGAAAGgDIALgGIAEgCQADAAADADQACADAAADQAAAHgOAHQgNAFgIAAQgSAAgNgLg");
	this.shape_16.setTransform(112.2,30.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_17.setTransform(102.2,30.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdBCIgBgEQAAgEADgCQACgDAEAAQAGAAAGAMIAFAJQADAFAEAAQAEAAADgGIADgKIgDg3IgDgyQAAgFACgEQADgDAEAAQADAAADACQADACABADIADA0IACA5QAAANgIALQgIALgMAAQgTAAgNgfgAAGhOQgDgDAAgEQAAgFADgDQADgDAFAAQAEAAADADQAEADAAAFQAAAEgEADQgDADgEAAQgFAAgDgDg");
	this.shape_18.setTransform(92.1,30.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcBGQgDAEgEAAQgDAAgCgCQgDgDAAgEIAAgHIAAgHIAAgeIgBgcIABgaIAAgaQAAgFACgFQADgFAFAAQAHAAAAAIIAAAEIgBADIAAAVIgBAXQAJgFAHgDQAHgCAGAAQATAAANAPQAMANAAAVQAAAWgOAOQgOAPgTAAQgOAAgMgFgAgOgEIgNAIIgBAQIAAAPIABAPIANAFQAFACAHAAQAMAAAKgJQAIgKAAgOQAAgNgHgKQgHgJgNAAQgHAAgIAEg");
	this.shape_19.setTransform(83.8,27.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAVAsQgMAGgOAAQgMAAgIgFQgJgGgCgLQgDgZAAgSQAAgNADgQQABgIAHAAQAEAAADACQADADAAAEIgBAOIgCAOIABAZQABALACAHIAGADIAGABQAMAAANgEIAAgTIAAgRQAAgUACgPQABgJAIAAQAEAAADADQACADAAAEIgCAjIAAATIABAUIAAAGIAAAGQAAAEgDADQgCACgEAAQgHAAgCgJg");
	this.shape_20.setTransform(73,30.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZA0QgOgFAAgKQAAgDADgDQACgDAEAAQADAAAFAEQACADAIABIAKABQAHAAAGgCQAIgCAAgGQAAgNgRgEIgJgDQgMgCgFgEQgIgEAAgLQAAgTASgIIARgGIASgGQADgCAFAAQAEAAADADQACACAAAFIABAIIABAHQAAAFgCACQgDADgEAAQgFAAgCgEQgBgCgBgIIgWAHQgOAGAAAJIAGABQAUAEAKAGQAQAJAAATQAAAPgOAIQgKAGgQAAQgMAAgLgEg");
	this.shape_21.setTransform(63.2,29.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfAoQgOgMAAgUQAAgYAMgQQAMgSAVAAQAPAAAKAFQAMAHAAANQAAAJgLAIIgUAJIgiARQAFAIAIAEQAIAEAJAAQAGAAAJgDQALgDADgFQADgFAEAAQADAAADADQACACAAADQAAALgQAHQgPAHgNAAQgUAAgNgLgAgSgYQgIAJgEAQIAdgMQAQgJAHgGQgIgHgOAAQgLAAgHAJg");
	this.shape_22.setTransform(48.1,30.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAZBGIgEgWIgBgWIAAgHIAAgHQAAgRgJAAQgLAAgJAKQgEAFgJAQQAAAjgDAHQgCAFgGAAQgEAAgCgCQgDgDAAgEIABgEIABgNIAAgOIAAhDIABgQIgBgJIgBgIQAAgEADgDQACgCAEAAQAIAAABAIIACAQIgBAUQgBAKABALIAAAIQAHgKAJgFQAIgFAJAAQAQAAAFAKQAFAHAAAPIABASIACATIADATIAAADQAAAEgDACQgCADgEAAQgHAAgCgHg");
	this.shape_23.setTransform(37.3,27.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGBEQgDgCAAgEIABgEIAAgFIAAgNIgBgOQAAgNgCgXIgDgmIgIABQgUAAgMgDQgHgCAAgIQAAgDACgDQADgEAEABIAPABIAPABIARAAIAQAAIAVABIAVABQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAIgVgBIgVgBIgHAAQAAANADAdIACAoIAAAKIABAKQAAAGgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_24.setTransform(26.1,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(489));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_2 = new lib.Background("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,195.5,1.069,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.UI}]}).wait(489));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,-172.2,876.8,775.3);
// library properties:
lib.properties = {
	id: 'C8085EADEBF81645A07DAE83BAF7E517',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmSub.mp3", id:"bgmSub"},
		{src:"sounds/ball_kick.mp3", id:"ball_kick"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/carmen_blocks.mp3", id:"carmen_blocks"},
		{src:"sounds/cowbell_3times.mp3", id:"cowbell_3times"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/she.mp3", id:"she"},
		{src:"sounds/shekicks.mp3", id:"shekicks"},
		{src:"sounds/shekicksapass.mp3", id:"shekicksapass"},
		{src:"sounds/thesubjectsheisapronoun.mp3", id:"thesubjectsheisapronoun"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"}
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
an.compositions['C8085EADEBF81645A07DAE83BAF7E517'] = {
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