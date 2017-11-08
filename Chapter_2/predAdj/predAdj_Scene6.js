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


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA8gZIAAhmIjMD/IEhgzIhDg3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA8h/IAABmIAGgCIgBAOIAIAIIAFARIAFAIIgFACIBDA3IkhAzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-13.7,31.1,27.5);


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


(lib.Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAnJAWlMhORAAAMAAAgtJMBORAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEDB4E","#FFFFDD"],[0,1],-0.6,-128.4,0.6,128.5).s().p("EgnIAWlMAAAgtJMBORAAAMAAAAtJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.9,-146,504,292);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("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");
	this.shape.setTransform(47.1,139.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AhUEfIgigBQhfgFAAgkQAAgVAVhiQAVhdgEhFQgFhBAQhHQAHgjALgXIAIgRIAKgOIABABQAQAHA9AMQA8AMApACQAoABAggTQAggSAYgRIAAAEIAAgEIAJgGIAGASQAHAqgtAvIgEAEQAhgcAIgOIAFgJQAEAFAAAQQAAARgJALQgNANgKANIgFASQAHgFAagbIANDvIADBGQABApgEAYQgHAmgeAPQgVALgfAAQgcAAgagOIgMgIQgHgGgEgGQAEgZAAhOIAAgBIABheIgBBeIAAABQAABOgEAZIgBADQgEASgLALQgIAHgMADQgTAGhJAAIgBAAgAgJhoIAAFLIAAlLIAEgUgACYC1IAAkRIAEgWIgEAWIAAERIgEgJIAEAJgAAyApQAEhOAAgSIAAgOQgDAzgBA7g");
	this.shape_1.setTransform(48.3,157.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEAOQAAgZAVgFIACAjIAJAEQANAAAEgHIADAPIg0AUgAATgbQAAgIAFgKQAFAAAJgFQAPAAAIATQgDgEgGgFQgTARAOAKIAAgBQADADAEgBQALgCABgEIADASIgmANQgMgcAAgMg");
	this.shape_2.setTransform(62.4,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhiCFIAAgrIgqAAIgLAMQgRgtAAgrQAAgoCgg2QBQgbBhgcIAAAIQgcA1gSAsIgEgBQgogVgaAAQhzAAgFBeQgBAXADAqQgBAdgSAAgAAQBVIgCgjIAMAGIAGAHQAHAIADALQgEAIgNAAgABtA0IAAABQgOgLATgQQAGAEADAFIAFANQgBAEgLABIgCABQgDAAgCgCg");
	this.shape_3.setTransform(56.2,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0CCB1").s().p("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");
	this.shape_4.setTransform(47.1,143.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1,-0.9,96.3,281.5), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(4,1,1).p("Ai8i7IF5F4");
	this.shape.setTransform(18.9,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(4,1,1).p("Ai8i8IF5F5");
	this.shape_1.setTransform(18.9,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,41.7,41.7);


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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.5,19.3,0.998,0.998,53.2,0,0,6.6,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:7,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:12.6,y:13.5},12).wait(5));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgtgZQAFACADACQAEACADACQA5AdASAO");
	this.shape.setTransform(73.4,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAjAWQgbgWgrgV");
	this.shape_1.setTransform(77.7,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAdAqQgSgPg5gcIgHgEIgIgEIAAggIA1AAQAqAVAcAWIAAAog");
	this.shape_2.setTransform(75,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAwAAQgXgTgigRQgCgCgDgBAgvACQAGADAGADQAlAVAOAL");
	this.shape_3.setTransform(76.4,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAQAoQgOgLglgVIgMgGQATgTAOgWIAFADQAiARAXATIAAAog");
	this.shape_4.setTransform(76.4,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AA/ALQgfgagzgWQgGgDgGgCQgEgCgEgCQgFgCgFgCAg+gCQAEACAFACQAEACAEACQA5AeATAP");
	this.shape_5.setTransform(74.9,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAfAzQgTgPg5geIgIgEIgJgEIADgVIABAAIAJgbIAKAEIAIAEIAMAFQAzAWAfAaIAAAog");
	this.shape_6.setTransform(74.9,15.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("ABuAYQgfgZg0gXQg2gZhBgOAhtgXQAtAKAhAPQBWAsAXAS");
	this.shape_7.setTransform(70.2,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("ABOBAQgXgShWgsQghgPgtgKIAHgRIAKgXQBBAOA2AZQA0AXAfAZIAAAog");
	this.shape_8.setTransform(70.2,14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AB5AbQgggagzgWQhEgfhVgOAh4gZQA7ALAoATQBWAsAXAS");
	this.shape_9.setTransform(69.1,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("ABYBDQgXgShVgsQgpgTg7gKIACgOIADgcQBVAOBEAfQAzAWAgAaIAAAog");
	this.shape_10.setTransform(69.1,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("ACYAgQgggbgzgWQhfgqh9gLAiPgbQBfAJA5AcQBXArAXAS");
	this.shape_11.setTransform(66.1,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AB3BHQgXgShXgrQg5gchfgJIgCgPIgFgcQB8ALBfAqQAzAWAfAbIAAAng");
	this.shape_12.setTransform(66.1,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AC6AiQgfgbg0gWQh4g1iogEAi2gdQCTACBPAnQBWArAYAS");
	this.shape_13.setTransform(62.6,13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("ACZBJQgXgShWgrQhPgniTgCIgCggIgBgLQCoAEB4A1QA0AWAfAbIAAAng");
	this.shape_14.setTransform(62.6,13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("ADjAiQgfgbg0gWQiDg6i5AAQgbAAgbACAjXgcQAYgBAYAAQCmgBBWAqQBXArAXAT");
	this.shape_15.setTransform(58.5,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("ADDBKQgXgThXgrQhWgqimABIgvABQgDgZgJgSQAbgBAbgBQC5AACDA7QA0AVAfAbIAAAog");
	this.shape_16.setTransform(58.5,13.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AEGAiQgfgbg0gWQiDg6i5AAQhAAAg8AIAj0gWQA1gHA8AAQCkgBBXAqQBXArAXAT");
	this.shape_17.setTransform(55,13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("ADmBKQgXgThXgrQhXgqikABQg8AAg1AHIgCgFQgGgUgJgSQA8gHBAgBQC5AACDA7QA0AVAfAbIAAAog");
	this.shape_18.setTransform(55,13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AErAiQgfgbg0gWQiEg6i4AAQhnAAhfAVAkbgIQBWgUBmgBQClgBBXAqQBWArAXAT");
	this.shape_19.setTransform(51.3,13.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AEKBKQgXgThWgrQhXgqilABQhmABhWAUIgDgUQgDgNgJgLQBfgUBngBQC4AACEA7QA0AVAfAbIAAAog");
	this.shape_20.setTransform(51.3,13.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AFdAiQgfgbg0gWQiEg6i4AAQieAAiMAxAlMAXQB5gzCmgBQClgBBXAqQBWArAYAT");
	this.shape_21.setTransform(46.3,13.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AE8BKQgXgThWgrQhXgqilABQimABh4AzIgRguQCMgyCeAAQC5AACDA7QA0AVAfAbIAAAog");
	this.shape_22.setTransform(46.3,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.3,9.4,34.7,22.2);


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
		var bgm = createjs.Sound.play('bgmPA',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
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
		
		 window.open ("predAdj_scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("predAdj_scene5.html","_self");
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
(lib.predAdj_Scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0,scene6repeat:45});

	// timeline functions:
	this.frame_0 = function() {
		playSound("funky_lead");
	}
	this.frame_7 = function() {
		playSound("slimistall");
	}
	this.frame_44 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_72 = function() {
		/* gotoAndPlay("scene6repeat");
		stopAllSounds();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(37).call(this.frame_44).wait(28).call(this.frame_72).wait(1));

	// Layer 3
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(376.3,65.8,1.694,1.533,0,0,0,45,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73));

	// Layer 1
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(112,176.8,1,1,0,0,0,48,139.8);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(408.9,126.6,1,1,0,0,0,18.9,18.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3FFF").s().p("AhTBeIAEgxQADhDAAhTQABgJAGgGQAGgHAKAAQAJAAAGAHQAGAGAAAJQAABTgEBFIgDAmQAlAAA5gSIAHgBQAKAAAGAHQAFAHABAIQAAANgOAGQgTAIgmAHQgiAGgXAAQgnAAAAgig");
	this.shape.setTransform(502.3,123.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3FFF").s().p("AhTBeIAEgxQADhDABhTQAAgJAGgGQAGgHAJAAQAKAAAGAHQAGAGABAJQgBBTgEBFIgDAmQAlAAA5gSIAHgBQAKAAAGAHQAFAHABAIQAAANgOAGQgTAIgmAHQgiAGgXAAQgnAAAAgig");
	this.shape_1.setTransform(484.7,123.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3FFF").s().p("ABQB2QgNgBgMgcQgJgTgFgYQgMACgaACIglAEQgHARgSAjQgHALgMAAQgJAAgHgGQgHgGAAgJQAAgIAXguQgCgFAAgEQABgIAPgEQAWglAbgpQAmg8AJAAQARAAAGAVIAKAyIAXBmIAIAVQAGANAAAHQAAAJgHAGQgGAGgIAAIgBAAgAgLAPIAVgDIAWgCIgLgzIggA4g");
	this.shape_2.setTransform(463.5,123.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3FFF").s().p("AgOByQgHgHgBgJIABgGIABgHIgBgWIgBgWQAAgVgDgjIgFg4IgIAAQgjAAgUgFQgSgEAAgRQABgIAFgGQAHgIALABIAYADIAZABIAdAAIAcAAIAjACIAjABQAKAAAGAGQAHAGAAAJQAAAJgHAGQgGAGgKAAIgmgBQgZgCgMAAIAEBAQADAnAAAXIABAQIABAQQAAAMgEAJQgHAMgMAAQgIAAgGgFg");
	this.shape_3.setTransform(441,123.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhUBmQgTgPAAgTQAAgKAGgHQAGgGALAAQAOAAAGAOQAJAUAgAAQAZAAAagMQAagMAAgPQAAgTgRgHQgLgEgigBQgbAAgVgJQgdgNAAgYQABgfAggZQAggZAlAAQAQAAAWAHQAcAIAAAMQAAAIgGAGQgGAHgKAAQgHAAgPgDQgOgDgIAAQgUAAgRAKQgTAJAAAMQAAAGAGAEQAGADALACIAnACQAjADAUARQAWARAAAhQAAApguAVQgjAPgsAAQgoAAgXgRg");
	this.shape_4.setTransform(366.6,123.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhKByQgFgHAAgJQgBgIAHgHQAGgFALAAQALgBATgCIAAhGQAAgqADgnIgjABQgJAAgGgGQgHgGABgJQAAgJAFgGQAGgFAJgBQANgCAgABQAeAAAuAGQASADABASQgBAKgGAHQgHAEgHAAQgHABgigFQgCAdAAAuIgBBGIArAAQAJAAAHAHQAFAGABAIQgBAJgFAGQgHAHgKAAIgbAAIgaAAQgJAAgWADQgVACgLAAQgJAAgHgFg");
	this.shape_5.setTransform(346.6,123.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABVBmIgJgmQgHgcgJg0IgYBBIgJAdQgGARgGALQgIAOgOAAQgPAAgHgRIgJgdQgNgogKgrIgTBLIgGAjQgGAXgSAAQgKAAgHgIQgEgGAAgJQgBgZALgkIASg8IAJgwQAGghAJgLQAIgLANAAQAOAAAGAOQAGAOAIAqQAHApAOAuQAQguAPg3IAJgkQAJgWARAAQASAAAHAaQAEAKAEAdQAJBBAOAwQANAwABAEQAAAJgIAHQgGAFgJAAQgRAAgIgYg");
	this.shape_6.setTransform(289.6,123.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhKByQgFgHgBgJQAAgIAHgHQAGgFALAAQALgBASgCIAAhGQAAgqAEgnIgiABQgKAAgGgGQgHgGAAgJQABgJAFgGQAGgFAJgBQAMgCAiABQAcAAAvAGQASADAAASQAAAKgGAHQgHAEgHAAQgIABghgFQgCAdAAAuIgBBGIArAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAIgbAAIgbAAQgKAAgVADQgVACgKAAQgKAAgHgFg");
	this.shape_7.setTransform(266.3,123.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhSBeIACgxQAEhDABhTQgBgJAHgGQAGgHAJAAQAKAAAGAHQAHAGgBAJQABBTgFBFIgDAmQAlAAA5gSIAHgBQAKAAAGAHQAGAHgBAIQAAANgNAGQgSAIgnAHQgjAGgWAAQgmAAAAgig");
	this.shape_8.setTransform(249.4,123.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhUBmQgTgPAAgTQAAgKAGgHQAGgGALAAQAOAAAGAOQAJAUAgAAQAZAAAagMQAagMAAgPQAAgTgRgHQgLgEgigBQgbAAgVgJQgdgNAAgYQABgfAggZQAggZAlAAQAQAAAWAHQAcAIAAAMQAAAIgGAGQgGAHgKAAQgHAAgPgDQgOgDgIAAQgUAAgRAKQgTAJAAAMQAAAGAGAEQAGADALACIAnACQAjADAUARQAWARAAAhQAAApguAVQgjAPgsAAQgoAAgXgRg");
	this.shape_9.setTransform(229,123.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAPQgIgHAAgIQAAgHAIgHQAIgGAJAAQALgBAHAHQAIAGAAAIQAAAIgIAHQgHAHgLgBQgJABgIgHg");
	this.shape_10.setTransform(430,255.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOB7QgHgGAAgJIAAjXQABgJAGgGQAHgGAIAAQAIAAAGAGQAHAGgBAJIAADOQABAegWAAQgJAAgFgGg");
	this.shape_11.setTransform(418.6,243.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOB7QgHgGAAgJIAAjXQABgJAGgGQAHgGAHAAQAKAAAFAGQAHAGAAAJIAADOQgBAegVAAQgJAAgFgGg");
	this.shape_12.setTransform(409.9,243.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAmBIQgPAHgLADQgLAEgGAAQgmAAgTgUQgSgUAAgpQAAgkAbgbQAcgbAmAAQAPAAATAIQAYALAAANQAAAFgEAFIgCAPIgBAWQAAAdAEANIAHAQIAGAPQAAAIgGAFQgGAGgIAAQgIAAgPgOgAgVgfQgQARAAAVQAAAVAHAKQAIALAPAAQAIAAAJgDQAJgEAHgGQgEgkAAgTIABgLIACgPIgGgCIgEgBQgUAAgQARg");
	this.shape_13.setTransform(396.8,248.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOBtQgGgGAAgIIAAgRIABgRIgDhQIgegCQgTgCAAgTQAAgIAGgGQAGgHAJAAIAaACIAAgQIgBgQQAAgIAHgGQAGgGAJAAQAXAAgBAnIAAANIAQgCQASAAAHADQAMAEAAAPQAAAJgHAGQgGAFgIAAIgIAAIgIAAIgPABIADBSIAAAHIAAAJQAAAkgXAAQgHAAgHgFg");
	this.shape_14.setTransform(380.3,245.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgsBRQgXgIAAgRQAAgQATAAQAHAAANAEQAOAFAHAAQAfAAAAgNQAAgHgVgLQgggOgJgFQgWgPAAgXQAAgfAhgLQAUgGAnAAQAPAAAIAEQAKAGAAAOQAAAcgPAAQgQAAgCgNIgOgBQgkAAAAAKQAAAHAWAKQAfAOAKAIQAXAPAAAVQAAAbgZAOQgUALgcAAQgVAAgSgHg");
	this.shape_15.setTransform(350.8,248.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTByQgGgGAAgJIAAgdIgBgdQAAgNACgVIABgiQAAgJAGgGQAGgGAKAAQAIAAAGAGQAGAGAAAJIgBAiIgCAiIABAdIAAAdQAAAJgGAGQgGAFgIAAQgKAAgGgFgAgOhPQgHgGAAgKQAAgKAHgHQAIgGAJAAQAKAAAHAGQAHAHAAAKQAAAKgHAGQgHAHgKAAQgJAAgIgHg");
	this.shape_16.setTransform(339.1,244.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNBaQgGgFAAgKQAAgRgEgiQgEgiAAgSQAAgKgBgGQgTAKgSAZIgDADIAAAxIAAALIgBALQAAAIgHAGQgGAEgJAAQgNAAgFgLQgDgJAAgRIAAg4IgBgXIgBgXQAAgOAFgLQAGgPAMAAQAIABAHAGQAHAHAAAIIgBANQAXgbAVAAQAYABALARQAJgIAMgEQALgEAOAAQAeAAALAfQADAGAEAjIALBUQABAJgHAFQgHAHgJgBQgSAAgDgSIgFgtIgGgtQgEgbgGAAQgEAAgNAHQgNAHgGAFQAAASAFAhQAEAhAAARQAAAKgGAFQgGAHgKAAQgIAAgGgHg");
	this.shape_17.setTransform(308.3,248.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTByQgGgGAAgJIAAgdIgBgdQAAgNACgVIABgiQAAgJAGgGQAGgGAKAAQAIAAAGAGQAGAGAAAJIgBAiIgCAiIABAdIAAAdQAAAJgGAGQgGAFgIAAQgKAAgGgFgAgOhPQgHgGAAgKQAAgKAHgHQAIgGAJAAQAKAAAHAGQAHAHAAAKQAAAKgHAGQgHAHgKAAQgJAAgIgHg");
	this.shape_18.setTransform(291.4,244.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOB7QgHgGAAgJIAAjXQABgJAGgGQAHgGAHAAQAKAAAFAGQAHAGAAAJIAADOQgBAegVAAQgJAAgFgGg");
	this.shape_19.setTransform(282.1,243.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhUBmQgTgPAAgTQAAgKAGgHQAGgGALAAQAOAAAGAOQAJAUAgAAQAZAAAagMQAagMAAgPQAAgTgRgHQgLgEgigBQgbAAgVgJQgdgNAAgYQABgfAggZQAggZAlAAQAQAAAWAHQAcAIAAAMQAAAIgGAGQgGAHgKAAQgHAAgPgDQgOgDgIAAQgUAAgRAKQgTAJAAAMQAAAGAGAEQAGADALACIAnACQAjADAUARQAWARAAAhQAAApguAVQgjAPgsAAQgoAAgXgRg");
	this.shape_20.setTransform(266.7,245.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(4,1,1).p("AlpC8IAAl3A4VC8ISsAAAYWC8I9/AA");
	this.shape_21.setTransform(356.9,126.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(73));

	// Layer 2
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_3 = new lib.Back("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275.5,197.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.UI}]}).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '6B944714EC65B44B981110B1A77F1700',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/funky_lead.mp3", id:"funky_lead"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/bgmPA.mp3", id:"bgmPA"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
		{src:"sounds/sexy_sax.mp3", id:"sexy_sax"},
		{src:"sounds/slimistall.mp3", id:"slimistall"}
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
an.compositions['6B944714EC65B44B981110B1A77F1700'] = {
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