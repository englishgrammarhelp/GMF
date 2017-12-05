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


(lib.edflashing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("square_bit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AATA8QgNgMAAgUQAAgYANgNQAMgOAUABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAdADAPIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAGgHABQgHADgHAAQgSAAgMgMgAAdACQgHAIAAASQAAALAIAJQAIAHALABQAHAAAFgEIAKgGIADgEIAAgjQgEgHgFgDQgGgDgIAAQgOAAgIAIgAhPA+QgOgLAAgUQAAgXALgOQANgRAUAAQAOAAAJAFQAMAGAAAMQAAAJgKAGQgFAEgOAGIghAQQAFAIAHADQAHAEAKAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgUAAgMgKgAhDABQgHAHgEARIAbgMQAQgJAHgEQgIgHgNAAQgLAAgHAIg");
	this.shape.setTransform(9.4,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(1,1,1).p("AhiAAIDFAA");
	this.shape_1.setTransform(9.7,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(1,1,1).p("AhiAAIDFAA");
	this.shape_2.setTransform(9.7,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},5).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,0,21.8,17.4);


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


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAlbAVBMhK1AAAMAAAgqBMBK1AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DDF5FF","#3399FF"],[0,1],0,-134.5,0.1,134.6).s().p("EglaAVBMAAAgqBMBK1AAAMAAAAqBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-240.9,-135.9,481.9,272), null);


(lib.played = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.edflashing();
	this.instance.parent = this;
	this.instance.setTransform(45.3,15.1,1,1,0,0,0,9.3,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgeA8QgNgMAAgUQAAgXANgNQAMgOATgBQAKAAAGADIAIAGQABglACgMQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAPIAAADQAAADgCACQgDACgDABQgFgBgDgHQgGAEgHACQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAIQAIAJALAAQAGAAAFgDIAKgHIADgEIgBgOIAAgKIABgLQgEgHgFgDQgGgDgIAAQgNgBgIAJg");
	this.shape.setTransform(50.3,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_1.setTransform(40.3,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgXBFQgCgDAAgDQAAgJATgqIggg8IgEgGQgCgEAAgDQAAgEADgCQACgDAEAAQAEAAACADQAPAVAQAmIANgeIAOgbQADgFAEAAQAEAAADACQACADAAADIgBAFIgeBBQgMAYgFAQIgFARQgDAGgFAAQgEAAgDgCg");
	this.shape_2.setTransform(30.3,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAcAtIgGgGIgPAHIgJACQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAMIAAASQAAALABAGIAGAPIACAFIAAACQAAADgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKAAQAIAAAGgCIAJgIQgDgWAAgMIAAgIIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_3.setTransform(21.3,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgJBAIABggIABggIAAgfIAAggQABgJAHAAQAJAAAAAJIAAAgIgBAfIgBArIgBAVQgBAJgGAAQgJAAAAgJg");
	this.shape_4.setTransform(14.3,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AghBHQgDgCABgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAHgCQAHgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgKgDIAAAqQAAAEgDACQgDADgDAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_5.setTransform(7.1,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.played, new cjs.Rectangle(0.1,0,57.6,29.1), null);


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


(lib.delivered = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.edflashing();
	this.instance.parent = this;
	this.instance.setTransform(69.8,15.1,1,1,0,0,0,9.3,7.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ADUBBIAAg+IABgIIAAgIQAAgJAIAAQAIAAAAAOQARgQAVAAQAHAAADAFQAEAGAAALIAAAFQgBALgIAAQgIAAAAgJIAAgFIAAgHQgOABgIAGQgIAFgFAMIAAAwQAAAJgJAAQgIAAAAgJgAB7A+QgOgLAAgUQAAgXALgOQANgRAUAAQAOAAAJAFQAMAGAAAMQAAAIgKAHQgFAEgOAGIghAQQAFAIAHADQAHAEAKAAQAGAAAIgCQALgDADgFQADgFADAAQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgUAAgMgKgACHAAQgHAIgEARIAbgNQAQgIAHgEQgIgHgNAAQgLAAgHAHgAhFA/IABggIAAgfIABggIAAggQAAgJAJAAQAJAAAAAJIgBAgIAAAgIgCAqIAAAVQgBAJgIAAQgIAAAAgJgAiiA+QgOgLAAgUQAAgXALgOQANgRAUAAQAOAAAJAFQAMAGAAAMQAAAIgKAHQgFAEgOAGIghAQQAFAIAHADQAHAEAKAAQAGAAAIgCQALgDADgFQADgFADAAQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgUAAgMgKgAiWAAQgHAIgEARIAbgNQAQgIAHgEQgIgHgNAAQgLAAgHAHgAkLA8QgNgNAAgTQAAgYANgNQAMgOAUAAQAKAAAGADIAIAGQABglACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAdADAPIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAFgHACQgHADgHAAQgSAAgMgMgAkBABQgHAJAAARQAAAMAIAIQAIAIALAAQAHAAAFgDIAKgHIADgDIAAgjQgEgHgFgDQgGgEgIAAQgOAAgIAIgAAyBAIgdhLIgBgEQAAgEACgDQADgCAEAAQAFAAACAFIAXA9QAGgOAKgbIAIgTQACgGAFAAQAEAAADADQADADAAADQAAADgPAiIgSApQAAAIgIAAQgGAAgDgHgAgQBCQgDgDAAgEIAAgPIgBgQIABgVIABgTQAAgEADgDQACgCAEAAQAEAAACACQACADAAAEIAAATIgBAVIAAAQIAAAPQAAAEgCADQgCACgEAAQgEAAgCgCgAgOguQgDgCAAgFQAAgEADgDQAEgDAEAAQAEAAACADQADADAAAEQAAAFgDACQgCADgEAAQgEAAgEgDg");
	this.shape.setTransform(31,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.delivered, new cjs.Rectangle(3,7.7,77.6,17.1), null);


(lib.baked = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.edflashing();
	this.instance.parent = this;
	this.instance.setTransform(41.6,15,1,1,0,0,0,9.3,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgeA8QgNgMAAgUQAAgXANgNQAMgOATgBQAKAAAGADIAIAGQABglACgMQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAPIAAADQAAADgCACQgDACgDABQgFgBgDgHQgGAEgHACQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAIQAIAJALAAQAGAAAFgDIAKgHIADgEIgBgOIAAgKIABgLQgEgHgFgDQgGgDgIAAQgNgBgIAJg");
	this.shape.setTransform(46.8,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgEQADgFADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_1.setTransform(36.8,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAXBDQgEgJgJgMIgPgVIgQALIgBAbQAAAEgCACQgDADgEAAQgIAAAAgMIABgWIABgWIAAgdIAAgfIAAgJIAAgJQAAgEADgDQACgCADAAQAEAAADACQACADAAAEIAAAJIABAKIgBAcIAAAeIAWgTIAUgUQACgDAEAAQADAAADACQADADAAAEQAAADgDADQgKAMgRAOIATAaQAOASAAAGQAAADgCADQgEACgDAAQgFAAgDgFg");
	this.shape_2.setTransform(27.5,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAcAtIgGgGIgPAHIgJACQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAMIAAASQAAALABAGIAGAPIACAFIAAACQAAADgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKAAQAIAAAGgCIAJgIQgDgWAAgMIAAgIIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_3.setTransform(17.5,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgaBCQgDAEgEAAQgDAAgCgCQgDgDAAgDIAAgHIAAgGIAAgcIgBgcIAAgXIAAgZQAAgGADgDQADgGAFAAQAGAAAAAHIAAAFIgBADIAAATIAAAXQAHgFAIgDQAHgDAEAAQAUAAAMAOQAKAOABATQgBAUgNAOQgNAOgRAAQgOAAgLgFgAgNgDIgNAIIAAAPIAAANIAAAPIAMAFQAFABAIAAQALAAAIgJQAIgIAAgOQAAgNgGgJQgIgIgMAAQgFAAgIAEg");
	this.shape_4.setTransform(7.7,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.baked, new cjs.Rectangle(0.1,0,54.1,29.1), null);


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
		var bgm = createjs.Sound.play('bgmIR',{loop:-1});
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
		
		 window.open ("reg_Scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("reg_Scene1b.html","_self");
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
(lib.reg_Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2_repeat:183});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_3 = function() {
		playSound("regularverbsformtheirpasttense");
	}
	this.frame_102 = function() {
		playSound("regularpastparticipleverbs");
	}
	this.frame_182 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_188 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(99).call(this.frame_102).wait(80).call(this.frame_182).wait(6).call(this.frame_188).wait(1));

	// Layer 10
	this.instance = new lib.edflashing();
	this.instance.parent = this;
	this.instance.setTransform(279.4,217.5,1,1,0,0,0,9.3,7.2);

	this.instance_1 = new lib.edflashing();
	this.instance_1.parent = this;
	this.instance_1.setTransform(461.3,217.5,1,1,0,0,0,9.3,7.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape.setTransform(447.6,218.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_1.setTransform(438.7,219.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQAEAAABADQADACAAAEIAAACIgBAFQAIgFAGgCQAHgDAGAAQASAAAJAQQAGANAAAVQAAASgKAMQgLANgSAAQgHAAgLgDIAAAqQgBAEgCACQgCADgEAAQgEAAgCgDgAgIguQgEADgHAHIABAoQAJAEAJAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgHADg");
	this.shape_2.setTransform(428.9,222);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(417.1,219.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgZAmQgMgNgBgUQAAgTAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAAMQAAANAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_4.setTransform(405.2,220);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgYAnQgNgMAAgTQAAgQAMgUQANgUAQAAQAJAAAKADQAOAGAAAIQgBADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIgDgDQgFgEgMAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAIAGAKAAQAFAAAGgDIAKgFIAEgBQAEgBACADQACADAAADQAAAHgOAFQgLAGgIAAQgRgBgMgKg");
	this.shape_5.setTransform(396,219.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEAAQADAAAEAFQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_6.setTransform(381.3,219.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAcAtIgGgGIgPAGQgGADgDAAQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKAAQAIAAAGgCIAJgHQgDgXAAgMIAAgIIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_7.setTransform(372.6,220);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAYBDIgEgVIgBgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgEAAgCgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQAAgDADgDQACgCAEAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAPAAAFAKQAEAGABAPIAAARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape_8.setTransform(362.9,217.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_9.setTransform(265.4,218.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_10.setTransform(256.4,219.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AghBHQgCgCgBgEIAAgjIAAgiIAAgjIgCgSQAAgGACgFQADgFAFAAQAEAAABADQADACAAAEIAAACIgBAFQAIgFAGgCQAHgDAGAAQASAAAJAQQAGANAAAVQAAASgKAMQgLANgSAAQgHAAgLgDIAAAqQgBAEgCACQgCADgEAAQgEAAgCgDgAgIguQgEADgHAHIABAoQAJAEAJAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgHADg");
	this.shape_11.setTransform(246.7,222);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_12.setTransform(234.9,219.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgZAmQgMgNgBgUQAAgTAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAAMQAAANAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_13.setTransform(222.9,220);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgYAnQgNgMAAgTQAAgQAMgUQANgUAQAAQAJAAAKADQAOAGAAAIQgBADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIgDgDQgFgEgMAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAIAGAKAAQAFAAAGgDIAKgFIAEgBQAEgBACADQACADAAADQAAAHgOAFQgLAGgIAAQgRgBgMgKg");
	this.shape_14.setTransform(213.8,219.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_15.setTransform(148.6,219.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_16.setTransform(139.2,218.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_17.setTransform(130.3,219.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AghBHQgDgCAAgEIAAgjIAAgiIgBgjIgBgSQAAgGACgFQADgFAFAAQAEAAACADQACACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAJAQQAGANAAAVQAAASgKAMQgLANgSAAQgIAAgLgDIAAAqQABAEgDACQgDADgDAAQgEAAgCgDgAgIguQgEADgHAHIABAoQAJAEAJAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgHADg");
	this.shape_18.setTransform(120.5,222);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_19.setTransform(108.7,219.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgZAmQgMgNgBgUQAAgTAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAOQgMAQgRAAQgPAAgKgKgAgPgRQgGAKAAAMQAAANAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_20.setTransform(96.8,220);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgYAnQgNgMAAgTQAAgQAMgUQAOgUAPAAQAIAAALADQAOAGAAAIQAAADgCACQgDADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgEgDQgGgEgLAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAHAGALAAQAFAAAGgDIALgFIADgBQADgBADADQACADAAADQAAAHgNAFQgMAGgIAAQgRgBgMgKg");
	this.shape_21.setTransform(87.6,219.9);

	this.instance_2 = new lib.edflashing();
	this.instance_2.parent = this;
	this.instance_2.setTransform(458.3,294.1,1,1,0,0,0,9.3,7.2);

	this.instance_3 = new lib.edflashing();
	this.instance_3.parent = this;
	this.instance_3.setTransform(444.2,255.6,1,1,0,0,0,9.3,7.2);

	this.instance_4 = new lib.edflashing();
	this.instance_4.parent = this;
	this.instance_4.setTransform(446,178.6,1,1,0,0,0,9.3,7.2);

	this.instance_5 = new lib.delivered();
	this.instance_5.parent = this;
	this.instance_5.setTransform(250.7,293.7,1,1,0,0,0,41.1,14.6);

	this.instance_6 = new lib.baked();
	this.instance_6.parent = this;
	this.instance_6.setTransform(250.7,255.1,1,1,0,0,0,27.1,14.6);

	this.instance_7 = new lib.played();
	this.instance_7.parent = this;
	this.instance_7.setTransform(250.7,178.2,1,1,0,0,0,28.9,14.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgeA8QgNgMAAgUQAAgXANgNQAMgOATgBQAKAAAGAEIAIAFQABglACgMQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAQIAAACQAAADgCACQgDADgDAAQgFgBgDgHQgGAEgHADQgHACgGAAQgSAAgMgMgAgUABQgHAJAAASQAAALAIAIQAIAJALgBQAGAAAFgCIAKgHIADgDIgBgPIAAgKIABgLQgEgHgFgDQgGgDgIgBQgNAAgIAIg");
	this.shape_22.setTransform(463.2,294.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_23.setTransform(453.3,296.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_24.setTransform(444.1,296.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_25.setTransform(434.8,296.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgJApIgNgkIgQgnIgBgEQAAgEACgDQADgCAEAAQAGAAACAFIAWA9QAFgOAKgaIAIgUQADgGAFAAQAEAAACADQADADAAADQAAADgPAjIgSAoQAAAIgHAAQgGAAgDgHg");
	this.shape_26.setTransform(425.5,296.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgIBAQgCgDAAgEIAAgQIgBgQIABgUIABgTQAAgEACgDQADgDAEABQACgBADADQACADAAAEIAAATIgBAUIAAAQIAAAQQAAAEgCADQgDACgCAAQgEAAgDgCgAgFgwQgDgDAAgEQAAgEADgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_27.setTransform(418.7,294.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgJBAIABggIAAggIABgfIAAggQAAgJAIAAQAJAAAAAJIgBAgIAAAfIgBArIgBAVQgBAJgGAAQgJAAAAgJg");
	this.shape_28.setTransform(413.5,294.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_29.setTransform(406.3,296.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgeA8QgNgMAAgUQAAgXANgNQAMgOATgBQAKAAAGAEIAIAFQABglACgMQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAQIAAACQAAADgCACQgDADgDAAQgFgBgDgHQgGAEgHADQgHACgGAAQgSAAgMgMgAgUABQgHAJAAASQAAALAIAIQAIAJALgBQAGAAAFgCIAKgHIADgDIgBgPIAAgKIABgLQgEgHgFgDQgGgDgIgBQgNAAgIAIg");
	this.shape_30.setTransform(395.9,294.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgCAEAAQADAAAEAEQACABAHACIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgFIARgGQADgCAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAJAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_31.setTransform(380.6,296.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AAcAtIgGgGIgPAHIgJACQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAMIAAASQAAALABAGIAGAPIACAFIAAABQAAAEgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKAAQAIAAAGgCIAJgIQgDgWAAgMIAAgIIACgJIgGgDIgEAAQgMAAgKALg");
	this.shape_32.setTransform(371.9,296.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgEAFgIAPQAAAhgDAGQgCAGgGAAQgEAAgCgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQACgCAFAAQAGAAABAIIACAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAOAAAGAKQAEAGABAPIAAARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_33.setTransform(362.2,294.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_34.setTransform(142.8,296.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_35.setTransform(133.5,296.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgJApIgNgkIgQgnIgBgEQAAgEACgDQAEgCADAAQAGAAACAFIAWA9QAFgOAKgaIAIgUQADgGAFAAQADAAADADQADADAAADQAAADgPAjIgSAoQAAAIgHAAQgGAAgDgHg");
	this.shape_36.setTransform(124.2,296.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgIBAQgCgDAAgEIgBgQIAAgQIABgUIABgTQAAgEADgDQACgDADABQAEgBACADQACADAAAEIgBATIAAAUIAAAQIAAAQQAAAEgCADQgDACgDAAQgDAAgDgCgAgFgwQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_37.setTransform(117.4,294.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgJBAIABggIAAggIABgfIAAggQAAgJAIAAQAJAAAAAJIgBAgIAAAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_38.setTransform(112.2,294.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_39.setTransform(105,296.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgeA8QgNgMAAgUQAAgXANgNQAMgOATgBQAKAAAGAEIAIAFQABglACgMQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAQIAAACQAAADgCACQgDADgDAAQgFgBgDgHQgGAEgHADQgHACgGAAQgSAAgMgMgAgUABQgHAJAAASQAAALAIAIQAIAJALgBQAGAAAFgCIAKgHIADgDIgBgPIAAgKIABgLQgEgHgFgDQgGgDgIgBQgNAAgIAIg");
	this.shape_40.setTransform(94.6,294.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgeA8QgNgNAAgTQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAeADAOIAAACQAAAEgCADQgDABgDAAQgFABgDgJQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAARQAAAMAIAJQAIAHALABQAGgBAFgDIAKgHIADgDIgBgPIAAgKIABgKQgEgHgFgDQgGgDgIAAQgNAAgIAIg");
	this.shape_41.setTransform(449.3,255.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_42.setTransform(439.3,257.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AAXBDQgEgJgJgMIgPgVIgQALIgBAbQABAEgDACQgCADgFAAQgIAAAAgMIABgWIABgWIABgdIAAgfIAAgJIgBgJQAAgEADgDQABgCAEAAQAEAAACACQADADAAAEIAAAJIABAKIgBAcIAAAeIAWgTIATgUQAEgDADAAQADAAADACQACADABAEQgBADgCADQgLAMgPAOIATAaQANASAAAGQAAADgCADQgDACgEAAQgFAAgDgFg");
	this.shape_43.setTransform(430,255.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_44.setTransform(420,258);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgaBCQgDAEgEAAQgDAAgCgCQgDgCAAgEIAAgHIABgHIgBgcIAAgbIAAgYIAAgYQAAgFACgEQADgGAFAAQAHAAgBAIIAAADIgBAEIAAATIAAAWQAHgFAIgCQAGgDAFAAQAUAAAMAPQALANgBATQABAUgNAOQgOAOgSAAQgNAAgLgFgAgNgDIgNAHIAAAQIAAAOIAAAOIAMAFQAGABAGABQAMAAAIgJQAIgKAAgNQAAgNgGgJQgIgIgMAAQgFAAgIAEg");
	this.shape_45.setTransform(410.2,255.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgBQAJgDAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgGQADgBAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgDgBgHIgVAGQgNAGAAAIIAFACQAUADAJAGQAPAJAAARQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_46.setTransform(394.6,257.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_47.setTransform(385.9,258);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AAYBDIgDgVIgCgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgEAFgIAPQAAAhgDAGQgDAGgFAAQgDAAgDgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQABgDACgDQADgCADAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAOAAAGAKQAEAGAAAPIABARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape_48.setTransform(376.2,255.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_49.setTransform(133.1,257.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AAXBDQgEgJgJgMIgPgVIgQALIgBAbQAAAEgCACQgDADgEAAQgIAAAAgMIABgWIABgWIAAgdIAAgfIAAgJIAAgJQAAgEADgDQACgCADAAQAEAAADACQACADAAAEIAAAJIABAKIgBAcIAAAeIAWgTIAUgUQACgDAEAAQADAAADACQADADAAAEQAAADgDADQgKAMgRAOIATAaQAOASAAAGQAAADgCADQgEACgDAAQgFAAgDgFg");
	this.shape_50.setTransform(123.8,255.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAHIgJACQgVABgJgMQgJgLAAgXQAAgTAOgQQAPgPATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAIAKAAQAIAAAGgEIAJgGQgDgXAAgLIAAgIIACgKIgGgCIgEgBQgMAAgKALg");
	this.shape_51.setTransform(113.8,258);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgaBCQgDAEgEAAQgDAAgCgCQgDgCAAgEIAAgHIAAgHIAAgcIgBgbIAAgYIAAgYQAAgFADgEQADgGAFAAQAGAAAAAIIAAADIgBAEIAAATIAAAWQAHgFAIgCQAHgDAEAAQAUAAAMAPQAKANABATQgBAUgNAOQgNAOgRAAQgOAAgLgFgAgNgDIgNAHIAAAQIAAAOIAAAOIAMAFQAFABAIABQALAAAIgJQAIgKABgNQgBgNgGgJQgIgIgMAAQgFAAgIAEg");
	this.shape_52.setTransform(104,255.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgeA8QgNgNAAgTQAAgXANgNQAMgPATAAQAKAAAGAEIAIAFQABgkACgNQABgIAHAAQAIAAAAAJQAAAMgEAqIgBAYQAAAdADAQIAAACQAAADgCADQgDACgDAAQgFgBgDgHQgGAFgHACQgHACgGAAQgSAAgMgMgAgUABQgHAJAAARQAAAMAIAIQAIAJALgBQAGAAAFgCIAKgIIADgCIgBgQIAAgJIABgLQgEgHgFgCQgGgFgIAAQgNAAgIAIg");
	this.shape_53.setTransform(451,178.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAJgKAHQgFADgOAGIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADAAQADAAADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAQIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAIg");
	this.shape_54.setTransform(441.1,181);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgXBFQgCgDAAgDQAAgJATgqIggg8IgEgGQgCgEAAgDQAAgEADgCQACgDAEAAQAEAAACADQAPAVAQAmIANgeIAOgbQADgFAEAAQAEAAADACQACADAAADIgBAFIgeBBQgMAYgFAQIgFARQgDAGgFAAQgEAAgDgCg");
	this.shape_55.setTransform(431.1,183.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAIIgJABQgVAAgJgLQgJgLAAgXQAAgUAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCALIAAASQAAALABAGIAGAQIACAEIAAABQAAAEgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKgBQAIAAAGgCIAJgIQgDgWAAgMIAAgIIACgJIgGgDIgEAAQgMAAgKALg");
	this.shape_56.setTransform(422.1,181.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgJBAIABggIABggIAAgfIABggQAAgJAHAAQAJAAAAAJIAAAgIgBAfIgCArIAAAVQgBAJgHAAQgIAAAAgJg");
	this.shape_57.setTransform(415,178.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgCgjIgBgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgLgDIAAAqQAAAEgCACQgDADgDAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAJAEAJAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_58.setTransform(407.8,183.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgCAEAAQADAAAEADQACACAHACIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgCgFgEQgHgEAAgKQAAgSARgIIAQgFIARgGQADgCAFAAQADAAADACQACADAAAEIABAIIABAHQAAAEgCACQgCADgEAAQgFAAgCgEQgBgCgBgHIgVAGQgNAGAAAIIAFABQAUAEAJAHQAPAHAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_59.setTransform(392.9,180.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAIIgJABQgVAAgJgLQgJgLAAgXQAAgUAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCALIAAASQAAALABAGIAGAQIACAEIAAABQAAAEgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKgBQAIAAAGgCIAJgIQgDgWAAgMIAAgIIACgJIgGgDIgEAAQgMAAgKALg");
	this.shape_60.setTransform(384.2,181.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQAAgDACgDQADgCAEAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_61.setTransform(374.5,178.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AgXBFQgCgDAAgDQAAgJATgqIggg8IgEgGQgCgEAAgDQAAgEADgCQACgDAEAAQAEAAACADQAPAVAQAmIANgeIAOgbQADgFAEAAQAEAAADACQACADAAADIgBAFIgeBBQgMAYgFAQIgFARQgDAGgFAAQgEAAgDgCg");
	this.shape_62.setTransform(129.8,183.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAIIgJABQgVAAgJgLQgJgLAAgXQAAgUAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABIgCALIAAASQAAALABAGIAGAQIACAEIAAABQAAAEgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAANQAAAPAFAHQAFAIAKgBQAIAAAGgCIAJgIQgDgWAAgMIAAgIIACgJIgGgDIgEAAQgMAAgKALg");
	this.shape_63.setTransform(120.8,181.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgJBAIABggIABggIAAgfIAAggQABgJAHAAQAJAAAAAJIAAAgIgBAfIgBArIgBAVQgBAJgGAAQgJAAAAgJg");
	this.shape_64.setTransform(113.7,178.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AghBHQgDgCABgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAHgCQAHgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgKgDIAAAqQAAAEgDACQgDADgDAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_65.setTransform(106.5,183.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2,1,1).p("AvbqwIWtAAIahAAAvbqwIAAkMEghygKwISXAAIAAZt");
	this.shape_66.setTransform(280.4,221.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(2,1,1).p("AAAuxIAAEMIAAZX");
	this.shape_67.setTransform(327,220.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(189));

	// Layer 9
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgQAIgQAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_68.setTransform(489.2,141.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQAMAAAAALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgKAAAAgLg");
	this.shape_69.setTransform(480,138.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_70.setTransform(471.2,144);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgEADgDAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_71.setTransform(462.3,138.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATABQALAAANAEQAQAGAAAJQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgGgPAAQgKAAgKAUQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgBQAEAAACACQADAEAAAEQAAAHgQAIQgPAHgJgBQgVAAgPgNg");
	this.shape_72.setTransform(453.4,141.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_73.setTransform(444.9,138.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_74.setTransform(436.4,139.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgKQAAgLAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_75.setTransform(426.3,141.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_76.setTransform(415.1,141.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_77.setTransform(403.9,138.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_78.setTransform(386.3,139.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgHQAAgPgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGgBQAEABADADQADADAAAEIABAKIACAJQAAAEgDAEQgDADgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAEAMAIQARAKAAAWQAAARgPAJQgMAIgSAAQgPAAgMgGg");
	this.shape_79.setTransform(375.5,141);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_80.setTransform(364.8,141.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_81.setTransform(353.6,138.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_82.setTransform(270.5,139.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgHQAAgPgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGgBQAEABADADQADADAAAEIABAKIACAJQAAAEgDAEQgDADgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAEAMAIQARAKAAAWQAAARgPAJQgMAIgSAAQgPAAgMgGg");
	this.shape_83.setTransform(259.7,141);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDACgEAAQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_84.setTransform(249.1,141.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_85.setTransform(237.9,138.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgLIAAgNIgCg9IgYgDQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA/IAAAEIABAGQAAAXgMAAQgDAAgDgDg");
	this.shape_86.setTransform(154.8,139.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAaA1IgDgYIgBgXIAAgKIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgEADgEQADgDAFAAQAJABABAOIABAMQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDADgEAAQgKAAgBgKg");
	this.shape_87.setTransform(144.2,141.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_88.setTransform(132.4,141.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgHQAAgPgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAGgBQAEABADADQADADAAAEIABAKIACAJQAAAEgDAEQgDADgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAEAMAIQARAKAAAWQAAARgPAJQgMAIgSAAQgPAAgMgGg");
	this.shape_89.setTransform(120.5,141);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgRAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGADAAQAEAAAEADQACADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_90.setTransform(109.6,141.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgKQAAgLAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_91.setTransform(98.4,141.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgtBTQgDgDAAgEIAAggIACgsQADgeAAgOIAAgPQAAgKABgFQADgKAIACIAJgCIAQgBQATAAARAOQATAPAAAVQAAAagUAPQgTAOgYAAIgNgBIgBA5QAAAEgDADQgCADgFAAQgEAAgDgDgAgRhAIgGABIAAAUIgDAqIAMABQARAAANgIQANgKAAgRQAAgMgNgJQgMgIgNAAIgIAAg");
	this.shape_92.setTransform(87.3,138.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgEQAEgDADAAQAEAAADADQAEAEAAADQAAAFgEADQgDADgEAAQgDAAgEgDg");
	this.shape_93.setTransform(467,95.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_94.setTransform(460,91.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEAAQADAAAEAFQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_95.setTransform(450.3,90.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape_96.setTransform(441.7,91.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_97.setTransform(432,91.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgLQAAgDADgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgCADgEAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgCgCg");
	this.shape_98.setTransform(422.7,89.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_99.setTransform(408.8,89.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape_100.setTransform(400.1,91.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_101.setTransform(390.4,91.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgDADgDQACgDAEAAQADAAAEAFQACACAHABIAKABQAHAAAFgCQAJgDAAgFQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAPgNAHQgKAGgPAAQgLAAgLgEg");
	this.shape_102.setTransform(380.7,90.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_103.setTransform(371.9,91.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_104.setTransform(362.7,91.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgKgDIAAAqQAAAEgDACQgDADgDAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_105.setTransform(353.5,93.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_106.setTransform(338.4,91.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIABgHQAAgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgDAGgFAAQgEAAgCgDQgDgCAAgEIABgEIABgMIAAgNIAAhAIABgPIgBgIIgBgJQAAgDADgDQACgCAEAAQAIAAAAAIIACAPIgBATIAAAUIAAAHQAHgJAJgFQAHgFAJAAQAPAAAFAKQAEAGABAPIAAARIACASIADASIAAADQAAADgCADQgDACgEAAQgGAAgCgGg");
	this.shape_107.setTransform(328.3,88.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgCADgFAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_108.setTransform(318.7,89.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgZAmQgMgNgBgUQAAgTAKgQQAMgRAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgKgAgPgRQgGAKAAAMQAAANAHAGQAGAHAIAAQAIgBAHgGQAHgIABgMQABghgUgBQgMAAgHANg");
	this.shape_109.setTransform(304.2,91.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_110.setTransform(295.4,89.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAKAaQgCgCAAgDIABghIABgKQACgGAFAAQAEAAACACQACADAAADIAAAEIAAAEIgBAhQAAAIgIAAQgDAAgDgDgAgYAOIAAgRIAAgRQAAgEADgCQACgCADAAQAEAAACACQACACAAAEIAAARIAAAQIAAAEIAAAEQAAADgCACQgCACgEABQgIAAAAgPg");
	this.shape_111.setTransform(281.6,84.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgMQAMgOATAAQAKAAAGACIAIAGQABglACgNQABgHAHAAQAIAAAAAJQAAALgEArIgBAYQAAAdADAPIAAADQAAADgCACQgDACgDAAQgFAAgDgHQgGAEgHACQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgKIABgLQgEgHgFgDQgGgDgIAAQgNgBgIAJg");
	this.shape_112.setTransform(272.8,88.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_113.setTransform(262.8,91.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAKAaQgCgCAAgDIABghIABgKQACgGAFAAQAEAAACACQACADAAADIAAAEIAAAEIgBAhQAAAIgIAAQgDAAgDgDgAgYAOIAAgRIAAgRQAAgEADgCQACgCADAAQAEAAACACQACACAAAEIAAARIAAAQIAAAEIAAAEQAAADgCACQgCACgEABQgIAAAAgPg");
	this.shape_114.setTransform(253.6,84.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgeBEQgLgCAAgHQAAgIAHAAIALACQAHABAJAAQARAAAGgQQAEgLAAgWQgEAJgHAEQgHAEgHAAQgQAAgKgKQgJgLgBgRQAAgXAOgPQAOgPAXAAQAJAAAFACQAGACADAFQAJAAAAAKIgCARIgDAQIgBAdQgBARgDAMQgEAOgJAHQgKAIgTAAQgMAAgIgCgAgQgrQgHAKgBAQQABANAEAFQAFAHAJAAQAIAAAJgJQAHgJABgKIAFgdQgEgDgEgBQgEgCgEAAQgPAAgKAMg");
	this.shape_115.setTransform(239.8,93.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAADgDADQgCACgEAAQgIAAgBgIg");
	this.shape_116.setTransform(230.7,91.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIgBgPIAAgRIABgUIABgTQAAgEADgDQACgCAEAAQADAAACACQACADAAAEIgBATIgBAUIABARIAAAPQAAAEgDACQgBADgEAAQgEAAgBgDgAgFgwQgDgDAAgEQAAgEADgDQAEgDADAAQADAAAEADQADADAAAEQAAAEgDADQgEADgDAAQgDAAgEgDg");
	this.shape_117.setTransform(223.4,89);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgMQAMgOATAAQAKAAAGACIAIAGQABglACgNQABgHAHAAQAIAAAAAJQAAALgEArIgBAYQAAAdADAPIAAADQAAADgCACQgDACgDAAQgFAAgDgHQgGAEgHACQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgKIABgLQgEgHgFgDQgGgDgIAAQgNgBgIAJg");
	this.shape_118.setTransform(215.4,88.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgMQAMgOATAAQAKAAAGACIAIAGQABglACgNQABgHAHAAQAIAAAAAJQAAALgEArIgBAYQAAAdADAPIAAADQAAADgCACQgDACgDAAQgFAAgDgHQgGAEgHACQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgKIABgLQgEgHgFgDQgGgDgIAAQgNgBgIAJg");
	this.shape_119.setTransform(204.8,88.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGADgDAAQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKABQAIAAAGgDIAJgHQgDgXAAgMIAAgIIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_120.setTransform(195,91.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgXBFQgCgDAAgDQAAgJATgqIggg8IgEgGQgCgEAAgDQAAgEADgCQACgDAEAAQAEAAACADQAPAVAQAmIANgeIAOgbQADgFAEAAQAEAAADACQACADAAADIgBAFIgeBBQgMAYgFAQIgFARQgDAGgFAAQgEAAgDgCg");
	this.shape_121.setTransform(180.1,93.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgaBCQgDAEgEAAQgEAAgBgCQgDgCAAgEIAAgHIAAgGIAAgdIgBgbIAAgXIAAgZQABgGACgDQACgGAGAAQAGAAAAAHIAAAFIgBADIAAATIAAAXQAHgGAIgCQAHgDAFAAQATAAALAOQAMAOAAATQAAAUgOAOQgNAOgRAAQgOAAgLgFgAgNgDIgNAIIAAAPIAAAOIAAAOIAMAFQAFACAIgBQALABAIgKQAJgIAAgOQgBgNgGgJQgIgIgLAAQgHAAgHAEg");
	this.shape_122.setTransform(170.5,88.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAHQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgMQAPgIAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_123.setTransform(154.8,91.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgJBAIABggIAAggIABgfIAAggQAAgJAIAAQAJAAAAAJIgBAgIAAAfIgBArIgBAVQgBAJgHAAQgIAAAAgJg");
	this.shape_124.setTransform(147.3,88.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AghBHQgCgCgBgEIAAgjIAAgiIgBgjIgBgSQAAgGACgFQADgFAFAAQADAAADADQACACAAAEIAAACIgBAFQAIgFAGgCQAHgDAGAAQASAAAJAQQAGANAAAVQAAASgKAMQgLANgSAAQgHAAgMgDIAAAqQAAAEgCACQgCADgEAAQgEAAgCgDgAgIguQgEADgHAHIABAoQAJAEAJAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgHADg");
	this.shape_125.setTransform(140.1,93.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIgBgPIAAgRIABgUIABgTQAAgEADgDQACgCADAAQADAAADACQACADAAAEIgBATIgBAUIABARIAAAPQAAAEgDACQgBADgEAAQgDAAgCgDgAgFgwQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_126.setTransform(132.9,89);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgYAnQgNgMAAgTQAAgQAMgUQANgUAQAAQAJAAAKADQAOAGAAAIQgBADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIgDgDQgFgEgMAAQgIAAgJAQQgIAPAAAJQAAAMAIAHQAIAGAKAAQAFAAAGgDIAKgFIAEgBQAEgBACADQACADAAADQAAAHgOAFQgLAGgIAAQgRgBgMgKg");
	this.shape_127.setTransform(125.6,91.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIgBgPIAAgRIABgUIABgTQAAgEADgDQACgCAEAAQADAAACACQACADAAAEIgBATIgBAUIABARIAAAPQAAAEgDACQgBADgEAAQgEAAgBgDgAgFgwQgDgDAAgEQAAgEADgDQAEgDADAAQADAAAEADQADADAAAEQAAAEgDADQgEADgDAAQgDAAgEgDg");
	this.shape_128.setTransform(118.6,89);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgKAAQgCAAgDgCg");
	this.shape_129.setTransform(111.6,89.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_130.setTransform(103.3,91.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGADgDAAQgVAAgJgMQgJgLAAgWQAAgVAOgOQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCADQgDACgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKABQAIAAAGgDIAJgHQgDgXAAgMIAAgIIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_131.setTransform(94.1,91.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgKgDIAAAqQAAAEgDACQgCADgEAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_132.setTransform(84.8,93.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIAAgKIgBgyIgUgBQgIgCAAgHQAAgEACgDQADgCAEAAIASABIAAgMIAAgLQgBgDADgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgDgCg");
	this.shape_133.setTransform(474.8,62.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgCQAJgCAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_134.setTransform(466,63.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGACgDABQgVAAgJgMQgJgLAAgWQAAgUAOgPQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKABQAIAAAGgDIAJgHQgDgXAAgLIAAgJIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_135.setTransform(457.3,64.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AghBHQgCgCAAgEIAAgjIAAgiIgBgjIgCgSQAAgGACgFQADgFAFAAQADAAACADQADACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgKgDIAAAqQAAAEgDACQgCADgEAAQgEAAgCgDgAgHguQgFADgHAHIABAoQAKAEAIAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgGADg");
	this.shape_136.setTransform(448,66.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgeA8QgNgMAAgUQAAgYANgNQAMgOATABQAKAAAGACIAIAHQABgmACgNQABgHAHAAQAIAAAAAIQAAAMgEAqIgBAZQAAAdADAPIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAGgHABQgHADgGAAQgSAAgMgMgAgUACQgHAIAAASQAAALAIAJQAIAHALABQAGAAAFgEIAKgGIADgEIgBgOIAAgLIABgKQgEgHgFgDQgGgDgIAAQgNAAgIAIg");
	this.shape_137.setTransform(432.3,61.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_138.setTransform(422.6,64);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGACgDABQgVAAgJgMQgJgLAAgWQAAgUAOgPQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKABQAIAAAGgDIAJgHQgDgXAAgLIAAgJIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_139.setTransform(413.1,64.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_140.setTransform(398.4,64.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgCQAJgCAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_141.setTransform(388.7,63.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAVArIgCgTIgBgTIAAgIIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAIQAAAEgDACQgCACgEAAQgEAAgCgCQgDgCAAgEIAAgIIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGAMQAEAJAAAQIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_142.setTransform(380.1,64);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_143.setTransform(370.4,64.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIAAgKIgCgyIgTgBQgIgCAAgHQAAgEACgDQADgCADAAIATABIAAgMIgBgLQABgDACgDQACgCAEAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgDADgEAAIgEAAIgEAAIgMABIABAzIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_144.setTransform(361.1,62.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgFA+QgCgCAAgEIAAgKIABgKIgCgyIgUgBQgIgCAAgHQAAgEADgDQACgCAEAAIASABIAAgMIAAgLQAAgDACgDQADgCADAAQAHAAACANIAAAIIAAAFIAAAFIAMgBIAMABQAFABAAAHQAAAEgCACQgDADgDAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_145.setTransform(347.2,62.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgYAxQgNgFAAgJQAAgEADgCQACgCAEgBQADAAAEAFQACABAHACIAKABQAHAAAFgCQAJgCAAgGQAAgMgRgEIgIgCQgMgDgFgDQgHgEAAgKQAAgSARgIIAQgGIARgFQADgCAFAAQADAAADADQACACAAAEIABAHIABAIQAAAEgCADQgCACgEAAQgFAAgCgDQgBgCgBgIIgVAGQgNAGAAAIIAFABQAUAEAJAGQAPAIAAASQAAAOgNAIQgKAGgPAAQgLAAgLgEg");
	this.shape_146.setTransform(338.3,63.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAcAtIgGgGIgPAGQgGACgDABQgVAAgJgMQgJgLAAgWQAAgUAOgPQAPgQATAAQAIAAAJAEQAMAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCALIAAATQAAALABAGIAGAPIACAFIAAACQAAADgCACQgDADgDAAQgCAAgEgEgAgOgVQgKALAAAOQAAAOAFAHQAFAHAKABQAIAAAGgDIAJgHQgDgXAAgLIAAgJIACgJIgGgCIgEgBQgMAAgKALg");
	this.shape_147.setTransform(329.6,64.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AghBHQgDgCAAgEIAAgjIAAgiIgBgjIgBgSQAAgGACgFQADgFAFAAQAEAAACADQACACAAAEIgBACIAAAFQAHgFAIgCQAGgDAGAAQASAAAIAQQAHANAAAVQAAASgKAMQgLANgSAAQgIAAgLgDIAAAqQABAEgDACQgDADgDAAQgEAAgCgDgAgIguQgEADgHAHIABAoQAJAEAJAAQALAAAGgIQAFgGAAgLQAAgQgEgIQgEgIgIAAQgHAAgHADg");
	this.shape_148.setTransform(320.3,66.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_149.setTransform(305.9,64.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIgBgPIAAgRIABgUIABgTQAAgEADgDQACgCAEAAQADAAACACQACADAAAEIgBATIgBAUIABARIAAAPQAAAEgDACQgBADgEAAQgEAAgBgDgAgFgwQgDgDAAgEQAAgEADgDQAEgDADAAQADAAAEADQADADAAAEQAAAEgDADQgEADgDAAQgDAAgEgDg");
	this.shape_150.setTransform(299,61.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgdAmQgOgLAAgUQAAgWALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggAQQAFAIAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADAAQADABADACQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEAQIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAJg");
	this.shape_151.setTransform(291.6,64.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAYBDIgEgVIgBgVIAAgHIAAgHQABgPgJAAQgLAAgIAJQgFAFgHAPQAAAhgDAGQgCAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgMIABgNIAAhAIAAgPIAAgIIgBgJQgBgDADgDQACgCAFAAQAGAAACAIIABAPIAAATIgBAUIAAAHQAIgJAHgFQAIgFAJAAQAPAAAFAKQAEAGAAAPIABARIACASIADASIAAADQAAADgDADQgCACgDAAQgHAAgCgGg");
	this.shape_152.setTransform(281.4,61.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgEA+QgDgCAAgEIAAgKIABgKIgDgyIgTgBQgIgCAAgHQAAgEADgDQACgCADAAIATABIAAgMIgBgLQAAgDADgDQADgCADAAQAHAAABANIAAAIIAAAFIAAAFIANgBIAMABQAFABAAAHQAAAEgCACQgCADgEAAIgFAAIgEAAIgMABIACAzIAAAEIAAAEQAAATgJAAQgDAAgCgCg");
	this.shape_153.setTransform(271.8,62.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_154.setTransform(255.3,64.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AghAoIAAg8IAAgJIAAgJQAAgJAIAAQAJAAAAAPQAQgQAUAAQAHAAAEAFQADAFAAALIAAAGQAAALgIAAQgIAAAAgIIAAgHIgBgHQgNACgIAGQgIAGgFALIAAAvQAAAJgIAAQgIAAAAgJg");
	this.shape_155.setTransform(244.1,64.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgZAlQgMgMgBgUQAAgTAKgPQAMgSAVAAQASAAAJAQQAHANAAASQAAASgKAPQgMAPgRAAQgPAAgKgLgAgPgRQgGAKAAAMQAAAMAHAHQAGAGAIABQAIAAAHgHQAHgHABgNQABghgUAAQgMAAgHAMg");
	this.shape_156.setTransform(234.7,64.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgOBLQgCgCAAgEIAAgCQACgLAAgNIAAgYIAAgZIgOABQgJAAAAgJQAAgIAPgBIAJAAIABgNQADgUAHgJQAIgLAUAAQAMAAAAAIQAAAJgLAAQgVAAgDAdIgBAGIAUgBQAOAAAAAIQAAAHgHABIgHAAIgUACIgBATIAAAQIABAQQAAARgCAJQgBAHgGAAQgEAAgDgCg");
	this.shape_157.setTransform(225.4,62.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF0000").s().p("AgiA9QgRgHAAgOQAAgDADgDQACgCAEAAQAEAAADAEQAFAIADABQAIAGAOAAQANgBALgFQAPgIAAgNQAAgMgMgFQgLgHgOAAQgOAAgKgFQgNgHAAgNQAAgQASgNQARgMARAAQAJAAALADQAOAEAAAFQAAAJgIgBIgMgBIgOgCQgNAAgJAGQgKAHAAAKQAAAHANADQAFABANACQAUABALALQAKAJAAAPQAAAVgTAMQgRALgVAAQgQAAgNgGg");
	this.shape_158.setTransform(209.5,62.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF0000").s().p("AgoBDQgDgDgBgEIAAgaIACgiIACglQgBgHACgQQAAgFACgCQANgDAPAAQAPAAAOALQAQAMAAARQAAAXgSAMQAOAFAGAIQAHAHgBAHQAAALgLAKQgIAHgJAEQgSAHgfAAQgEAAgDgEgAgbAjIAAASQAYgBANgFQAGgDAGgFQAGgEgBgDQABgEgMgFQgIgEgIgBIgJgCIgDAAIgDAAIgLgBIgBAUgAgWgzIgBAPIgBAiIANABQAMgBAIgIQAJgHAAgNQAAgIgJgHQgJgHgJAAIgNABg");
	this.shape_159.setTransform(197.9,61.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_160.setTransform(186.4,61.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQAAgLAJAAQAEAAADADQAKgDAJgBIARgCQAVAAANAFQAGADAAAGQAAADgCADQgDADgEAAIgCAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIAAAMIAAALQgBATADAEQACACAMAAIAQAAIAQgBIAFAAIAFgBQAKAAAAAJQAAAIgIABQgIACgbAAQgbAAgIgHg");
	this.shape_161.setTransform(175.2,61.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF0000").s().p("AgPBAQgLgbgMgwIgIgZQgFgSAAgGQAAgEADgDQADgCADAAQAHAAACAHIADAQIAJAdQAIAgAIAYIABgCIAWg+IAHgVQAFgNAGgIQADgDAEAAQAEAAADADQACACAAAEQAAADgBADQgGAHgDAKIgIATIgXA/IgKAWQgCAFgEAAQgIAAgCgHg");
	this.shape_162.setTransform(164.1,62.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_163.setTransform(146.9,61.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF0000").s().p("AAfAuQgDgIgDgUIgYAEIgWAFQgEAMgLAWQgDAFgFAAQgDAAgDgDQgDgCAAgEQAAgEAOgcQgCgCAAgDQAAgIAJgCIAZgqQAUghAFAAQAHAAACAKIAGAdIANA8IAFAOIADAKQAAADgDADQgDACgDAAQgIAAgGgUgAgLAGIAggGIgHghg");
	this.shape_164.setTransform(134.3,62.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF0000").s().p("AglBFQgFgDAAgKIABgdQADgoAAgxQAAgEACgCQADgDADAAQAEAAADADQACACAAAEQAAAygCAoIgBANIgBANQAXAAAigLIADAAQAEAAACADQACACAAAEQAAAGgFACQgKAFgVADQgTAEgMAAQgJAAgEgDg");
	this.shape_165.setTransform(123.1,62.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF0000").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_166.setTransform(111.4,62);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF0000").s().p("AgsA8QgLgMAAgZQAAgWALgXQAKgZARgOQALgKAMAAQAIAAANAFQAQAGAAAIQAAAEgCADQgDADgDAAQgDgBgDgCQgNgIgKAAQgGAAgHAHIgKANQgVAbABAdQAAARAFAHQAFAHAPAAQAPAAAMgKQALgLAGgTQgZABgQAIIgEABQgEAAgCgDQgDgDAAgDQAAgFAEgCQATgLAugBQAEABACACQADACAAADQAAAGgEADQgGAbgSAQQgRAQgXAAQgWAAgKgMg");
	this.shape_167.setTransform(98.7,61.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF0000").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIgBgKIgBgJQABgLAIAAQAEAAADADQAKgDAJgBIARgCQAVAAANAFQAGADAAAGQAAADgCADQgCADgEAAIgDAAQgPgFgOAAIgPACQgIABgKADIABAJIgCAhIAmgDIAVgCQAEAAACACQADADAAAEQAAAHgIABIgVACIgoADIAAAMIAAALQAAATACAEQACACAMAAIAQAAIAQgBIAFAAIAFgBQAKAAAAAJQAAAIgIABQgIACgbAAQgbAAgIgHg");
	this.shape_168.setTransform(87.1,61.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF0000").s().p("AgsBDQgDgDAAgEIAAgUIgBgVIACgXIACgYIgBgNIgBgOQAAgFADgEQADgEAGAAIAVACQAMABAHAFQAkATAAAbQAAANgMAKQgKAIgOAEQAbAPANAQQADADAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgdgcgigKIAAARIABARQAAAEgDADQgCACgEAAQgEAAgCgCgAgbgmIAAAKIgBASIgCAQIAEAAIAEAAQAWAAALgGQAEgBAFgFQAEgFAAgDQAAgMgOgLQgLgJgOgCIgNgBg");
	this.shape_169.setTransform(75.8,61.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]}).wait(189));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_8 = new lib.Background();
	this.instance_8.parent = this;
	this.instance_8.setTransform(275,192.3,1,1.089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.UI}]}).wait(189));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '5A8B0A759E18B1429C89AADDAB88BEAB',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmIR.mp3", id:"bgmIR"},
		{src:"sounds/boo.mp3", id:"boo"},
		{src:"sounds/compete_copy.mp3", id:"compete_copy"},
		{src:"sounds/competed_copy.mp3", id:"competed_copy"},
		{src:"sounds/dive.mp3", id:"dive"},
		{src:"sounds/doveordived.mp3", id:"doveordived"},
		{src:"sounds/flew.mp3", id:"flew"},
		{src:"sounds/fly.mp3", id:"fly"},
		{src:"sounds/havedived.mp3", id:"havedived"},
		{src:"sounds/haveflown.mp3", id:"haveflown"},
		{src:"sounds/irregularverbsformthepasttense.mp3", id:"irregularverbsformthepasttense"},
		{src:"sounds/laymeanstoplaceortoput.mp3", id:"laymeanstoplaceortoput"},
		{src:"sounds/liemeanstoreclineortorest.mp3", id:"liemeanstoreclineortorest"},
		{src:"sounds/perc_techno.mp3", id:"perc_techno"},
		{src:"sounds/regularpastparticipleverbs.mp3", id:"regularpastparticipleverbs"},
		{src:"sounds/regularandirregularverbs.mp3", id:"regularandirregularverbs"},
		{src:"sounds/regularverbsformtheirpasttense.mp3", id:"regularverbsformtheirpasttense"},
		{src:"sounds/sound_over1.mp3", id:"sound_over1"},
		{src:"sounds/square_bit.mp3", id:"square_bit"},
		{src:"sounds/TherearemanymoreIrregularVerbsyoushouldknow.mp3", id:"TherearemanymoreIrregularVerbsyoushouldknow"},
		{src:"sounds/twotroublesomeverbsarelievslay.mp3", id:"twotroublesomeverbsarelievslay"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/yeah.mp3", id:"yeah"}
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
an.compositions['5A8B0A759E18B1429C89AADDAB88BEAB'] = {
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