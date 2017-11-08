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


(lib.BubBuilder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAEAEQgBACgDAAQgCAAgCgCQgBgBAAgDQAAgCABgCQACgBACAAQADAAABABQACACAAACQAAADgCABg");
	this.shape.setTransform(76.6,-37.1,0.945,0.991);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAEQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBg");
	this.shape_1.setTransform(76.6,-37.1,0.945,0.991);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.3,1,1).p("AAEAEQgBACgDAAQgBAAgCgCQgCgBAAgDQAAgCACgBQACgCABAAQADAAABACQACABAAACQAAADgCABg");
	this.shape_2.setTransform(73.8,-37.1,0.945,0.991);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAEQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBgBAAg");
	this.shape_3.setTransform(73.8,-37.1,0.945,0.991);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3,1,1).p("AAFA9QgCgfAAgWQgGg2gBgO");
	this.shape_4.setTransform(120.6,40.3,0.945,0.991);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.3,1,1).p("Ah4hlQABAAAAClIAAAsQgBAKATAQQAMALBgAEIASgBIgBgUQAAgEAJgDQAVgHAGgDQAKgEAZgJIAagRIAAgfQAAgigHgbQgNg2gBgFQgHgkgDgFQgIglgIAAQg8AigGADQgXAIgogBQgrADgWAAg");
	this.shape_5.setTransform(118.9,34.1,0.945,0.991);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhlCGQgTgQABgKIAAgsQAAilgBAAQAWAAArgDQAoABAXgIIBCglQAIAAAIAlQADAFAHAkIAOA7QAHAbAAAiIAAAfIgaARIgjANIgbAKQgJADAAAEIABAUIgSABQhggEgMgLg");
	this.shape_6.setTransform(118.9,34.1,0.945,0.991);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.3,1,1).p("AAuiNQADATAGASQAFAOAHANQAHANAGAOQAGANACANQADAPABAPQAAARAAAQQAAALgBALQgBATgBAUQgCATgDAQQgBAHADAHQAFALAHAKQANARgRAOQgEADgFACQgIAAgGAAQgogHgpgHQgQgBgQgBQgQgBgRACQgLACgFgEIAFgFIgJgBIAAgFIACgEIgKgFIAAgFIAOAAQgCgBgCgDQgCgCgBgCQgCgFgBgFQAAgBABgBQAAgBABAAQABgBACgBQABAAACAAQAEAAADABQAMADALADQAMADAMAEQAHABAIABQAHABAHAAQADAAAEAAQAFAAAGAAQAJgBAJgBQAGgCAHgCQAFgCAGgCQAAgBAAgBQABgCAAgBQAAgEAAgDQAAgKgBgKQgCgSgDgRQgBgIgCgHQgDgLgDgLQgDgKgCgKQgEgNgDgLQgBgGgBgFQgDgNgDgOQgDgSgCgUQgBgOgCgNQgBgFAAgEQgBgCgBAAQgFgFgEgDQgCgCgBgBQgDgEgBgEQgCgHAAgHQgBgLACgKQACgHACgHQACgHABgIQABgEABgFIAuAEQAAAKAAAKQgBAKAAALQAAAKACAKg");
	this.shape_7.setTransform(111.3,66.8,0.945,0.991);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("ABHDOIhRgOIgggBQgQgCgRACQgLACgFgDIAFgGIgJgBIAAgFIACgEIgKgFIAAgEIAOAAIgEgFIgDgEIgDgKIABgCIABgCIADgBIADAAIAHABIAXAGIAYAHIAPACIAOABIAHAAIALAAIASgCIANgEIALgEIAAgBIABgFIAAgGIgBgUIgFgjIgDgPIgGgWIgFgUIgHgYIgCgLIgGgbIgFgmIgDgbIgBgJIgCgCIgJgIIgDgDQgDgDgBgEQgCgIAAgHQgBgKACgKIAEgPQACgHABgHIACgJIAuADIAAAUIgBAWQAAAJACALQADATAGASQAFANAHANIANAbQAGANACAOQADAOABAPIAAAhIgBAWIgCAnQgCAUgDAPQgBAHADAHQAFALAHALQANAQgRAOQgEADgFADIgOgBg");
	this.shape_8.setTransform(111.3,66.8,0.945,0.991);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.3,1,1).p("AAHAHIABgFQAAgIgJAAIgFABIgBAMg");
	this.shape_9.setTransform(-19.3,71.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.3,1,1).p("AgIAGIAAgNQACgBADAAQANAAAAAOIgSAAIAAAE");
	this.shape_10.setTransform(-14.3,71.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.3,1,1).p("AgBAKQAHgCAHAAQgBgDgFgHQgFgHgCAAQgMAAAAAJQAAAKAAAAg");
	this.shape_11.setTransform(-8.7,70.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.3,1,1).p("AgIAJQACgBACgBQgBAAgCgCAgEAHQAIgEAFABIAAgFQgGgHgEAAQgEAAAAACQAAADABAJg");
	this.shape_12.setTransform(-1.7,69.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.3,1,1).p("AAbgDQgOgBgPAFQgWAIADAOIgBAAQgCgHgHgLIAAgJQAFAAAKgJQAJgJAHAAQAAAAAXAPQAAADAEABQACAAADAB");
	this.shape_13.setTransform(5.2,65.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.3,1,1).p("AAuiNQADATAGASQAFAOAHANQAHANAGAOQAGANACANQADAPABAPQAAARAAAQQAAALgBALQgBATgBAUQgCATgDAQQgBAHADAHQAFALAHAKQANARgRAOQgEADgFACQgIAAgGAAQgogHgpgHQgQgBgQgBQgQgBgRACQgLACgFgEIAFgFIgJgBIAAgFIACgEIgKgFIAAgFIAOAAQgCgBgCgDQgCgCgBgCQgCgFgBgFQAAgBABgBQAAgBABAAQABgBACgBQABAAACAAQAEAAADABQAMADALADQAMADAMAEQAHABAIABQAHABAHAAQADAAAEAAQAFAAAGAAQAJgBAJgBQAGgCAHgCQAFgCAGgCQAAgBAAgBQABgCAAgBQAAgEAAgDQAAgKgBgKQgCgSgDgRQgBgIgCgHQgDgLgDgLQgDgKgCgKQgEgNgDgLQgBgGgBgFQgDgNgDgOQgDgSgCgUQgBgOgCgNQgBgFAAgEQgBgCgBAAQgFgFgEgDQgCgCgBgBQgDgEgBgEQgCgHAAgHQgBgLACgKQACgHACgHQACgHABgIQABgEABgFIAuAEQAAAKAAAKQgBAKAAALQAAAKACAKg");
	this.shape_14.setTransform(123.5,63.7,0.945,0.991);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("ABHDOIhRgOIgggBQgQgCgRACQgLACgFgDIAFgGIgJgBIAAgFIACgEIgKgFIAAgEIAOAAIgEgFIgDgEIgDgKIABgCIABgCIADgBIADAAIAHABIAXAGIAYAHIAPACIAOABIAHAAIALAAIASgCIANgEIALgEIAAgBIABgFIAAgGIgBgUIgFgjIgDgPIgGgWIgFgUIgHgYIgCgLIgGgbIgFgmIgDgbIgBgJIgCgCIgJgIIgDgDQgDgDgBgEQgCgIAAgHQgBgKACgKIAEgPQACgHABgHIACgJIAuADIAAAUIgBAWQAAAJACALQADATAGASQAFANAHANIANAbQAGANACAOQADAOABAPIAAAhIgBAWIgCAnQgCAUgDAPQgBAHADAHQAFALAHALQANAQgRAOQgEADgFADIgOgBg");
	this.shape_15.setTransform(123.5,63.7,0.945,0.991);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.3,1,1).p("AhjjpQAPAAAPAKIAAAIQgDAAAjAoQAfAyAGAPQAFAKAEAgQADAWAHARQANAegCAYQADAMAYAuQAXAtgEgIQgDgJAvAXQAwAWAXgSQAXgTAKAaQALAJgEAUQAAANgGACQgEABgfAAQgGAAgRARQgQAQgTAAQgQAAgNgIQgOgHgLAAQgRAAgRAMQgQANgfABQgBgBgCAAQgvgDgDgBQgNgEAAgXQAAgVAHgJQAHgJAAgJQAAgGgogWQgpgVgPgTQgQgTgKgwQgJgvgegYQgegZAdgcQAcgcAfgyQAfgyAcAAg");
	this.shape_16.setTransform(25,39.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("AgGDpQgvgDgDgBQgNgEAAgYQAAgUAHgJQAHgJAAgKQAAgFgogWQgpgVgPgTQgQgTgKgwQgJgvgegYQgegZAdgcQAcgcAfgxQAfgzAcAAQAPAAAPAKIAAAIQgDABAjAoQAfAwAGAQQAFAKAEAgQADAWAHASQANAdgCAZQADALAYAuIATAlQgDgJAvAXQAwAWAXgTQAXgSAKAZQALAJgEAVQAAANgGACQgEACgfgBQgGABgRAPQgQAQgTABQgQAAgNgIQgOgHgLgBQgRABgRANQgQAMgfAAIgDAAg");
	this.shape_17.setTransform(25,39.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.3,1,1).p("ABGgbQAAABAAACQgBAEAAAFQAAADAAADQgBABAAACAgvAfQgFgDgDgDQgMgLgCgMQgBgPANgR");
	this.shape_18.setTransform(54.8,-34.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.3,1,1).p("AB0ntQAEgaABgbQAAgigKgdQgJgYgFgZQgFgagIgbQgKgkgGgkQgFgZgCgaQgDgZADgVQACgRAKgJADjuAQAHAUADAVQAEAdgEAdQgFApgJAmQgEAYgBAZQgBAZgBAZQAAAZABAYQAEAuANAsQAKAhgFAkQgDAbgBAcQAAABAAAAQAAAYABATQABAHABAHQABAMACALQACAOABAPQAAADAAAEQABADAAAEQAAANgGAJADhjHQgEgIgEgIQgJgTgGgTQgHgWgIgVIgTgmQADgHACgIQACgIABgJQABgGAAgHQgBgHAFgPQAGgPAEgXQAEgXgOAFQgOAFAAAZQgBAZgFgQQgGgQAAgGQABgHgBgEQAAgEAGgRQAGgQAGggQAFgggTAlQgSAkgCAEQgCAEgCAKAB0ntQAJgwAYAGQgOA6AAAQQgCADAAAEQgBAEAAAEQgBAJgBAKABsn/QADgIADgDQAGgGgFApIABgDQAAgBAAgCABsn/QAAAAgBABQABgBAAgBgABznnQABABgBADQgIAYgBAbQgBAGAAAGABznlQAAgBAAgBABanZIABgBQACgEABgDQABgDADgHQACgIAHgLABmluQgHgIgHgIQgPgSgHgWQgMgjAZgeIAFgHIAYgRABTnCIADgMIAEgLABWnOIABgCIADgJABTnCIAEgOABWmgQgDgLAAgKIAAgNABfksQADgbADgdQAAgFABgFQAQAPAKAUQAJATAFAVQACAGACAHQAIAVAIAVQAHAUAHAWQgSgBgQgEQgNgDgOgDQgCgBgDAAQgLgDgKgCQABgsAEgpAj1kFQAIAGAMADQANACALAKQADADAAAEQADATAPACQALAAAHAJQAKALAFAPQAFAQgCAPQgCAMgEAMIAAAAQAAACgBABQgBADgBADQgBADgCACQgDAGgGAGQgBACgCACQgJAIgLAIQgNAIgNAIAiVh6QAGABA2AIQAOACAMACQAfAFAJAGQAEACAFACQACACADABQAGADAFADQAFACAEAGQAOgOAKgUQAFgMANgJQAPgLAQgGAnWhwQgFgMgBgKQgCgOAEgMQAGgUAEgXQAKACAHALQACgKAHgMQAMgTAPgNQATgSANgSQAJANgDAMQABgCADgCQAMgLALgJQAXgSAeACQgJALgIAHQAQgLAUgEQAXgEAYACQASABANAKQAKAGgKABQgfAEgeADQAGADAGAFQgKADgLACQgLACgLABQgWABgSABQACABADAEQALAPgWAEQgYAFgYAFQASACAKAOQgWADgVAGQACABACACQAKAKABAQQABASgMgHQgNgIgQgEQABACAAADQAGAQACAOQgEgBgHgGQgKgJgQAGQgRAGgDANQAAAEAAAEQAAADACADIAAABQACADADAEQALAIAGANQAFALALAAQAEAAAGgCQARgGAHgKAkljYQAFgNAMgLQAGgGAGAAQAHgBAFAFQAGAFAAAIQAAAMgHAJAlAjNQgBgDgCgBQgHAAgFgBQgGAOAOACQAMACgEgLQAAgBgBgBgAk4h7QAMAJAOABQAPAAAQgDQASgDALgKQAMgMABgLAhKBXQAAABAAABQABAPgEAOQgEAOgFAMQgFAOgHAPQgGAOgLAMQgJALgKALQgKAMgHANQgGANgIAPQgGANgHANQgCAEgCAEQgBABgBACQgDAHgCAGQgGANgKAMQgKAMgHAOQgHAOgHANQgHAMgJAOQgIAMgNAJQgCACgDADQgCABgCACQAAAAAAAAQgDACgCACQgBACgCABQAAABgBABIgWAJIgXAJQgNACgOADQgBAJgDAIQAAAAgBABABnA6QgGAEgGADQgNAJgPAFQgNAEgPADQgPACgQABQgOAAgRAAQgFAAgGAAQgDAAgDAAQgGgBgGAAQgDAAgEAAQgGAAgFgBQgFAAgFgBAFgjfQAAAAAAAAQgBABAAgBQgDgCgDgDQgCgEgCgDQgCgCgDgDQgCgDgDgDQgCgEgCgEQgCgDAAgEQACgEACgDQADgDADgBQADgCAEgBQADgBADgBQAEgBADgBQAEgCADgBQAEgBADgBQAEgCADgBQAEgBADAAQADgBADAAQACgBADAAQAEAAADAAQAEAAADAAQAEABAEAAQADAAADABQAEAAAEABQADAAAEABQADABAEABQADAAAEABQADABADAAQAEAAADABQAEABADABQAEAAADACQADABADADQADACACADQADADACADQACAEACADQACAEABADQACAEABADQACAEAAAEQABAEABAEQAAAFABAEQAAAEAAAFQAAAEAAAFQAAAEAAAEQAAACAAABQAKAGAFAKQAKAVgIAXIgFACIgagFAFhjGQAAgDgBgDQAAgEAAgEIAAgLQATgM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DgDQgGgIgFgNQgHgNgCgQQgBgQABgQQABgFABgFAqrDGQgJAJgIAKQgJANgJAKQgKAKgMAEQALAEAHALQALAQgNAHQgOAIgLgFQgOgHgLgPQgBANgGARQgEAPgSABQgMgBgCgLQgDgOAFgMQgFADgHAEQgVAOgVgEQgQgEAGgNQAJgUARgGQgRAAgWgCQgKAAAHgJQAIgKANgHQgKgEgJgJQgFgHAHgBQAOgDAOAEQAOACAJALQgEgPABgOQAAgPACgOQABgPAEgOQADgQAIgNQAHgPAJgMQAJgNALgKQALgLAMgJQALgJAOgGQAOgHAPgFQADgBADAAQgBgLAHgOQAFgLALgJQALgIAPgHQAOgHAQgFQAOgFAPgFQAQgFAQgBQAOAAAOgBQAQAAAOADQAPACAOAFQAPAEANACQALADALgCApvBsQgDALgEAKQgCADgCAEQAMAJAOgCQAPgCAPgFQAPgGAPgDQAOgCAPgIAqrDGQAHgHAIgHQAOgLAIgOQAHgLAFgMAlTFZQjOARgBAAQgHACgHgCQgLgCgLgCQgNgCgPABQgRABgLgEQgMgFgKgIQAAgBgBAAQgKgJgFgQQgEgRgCgPQgBgPgBgOQAAgPAAgNQAAgNABgPApkIsQAIgIAHgGQALgKALgGAp7JwQAAgDAAgEQABgGAAgFQAAgBAAAA");
	this.shape_19.setTransform(38,-17);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AngBLQgBgIgDgEQgHgMgKgKQgJgJgNgJQgNgJgOgHQgNgHgPgCQgPgDgQgCQgQgCgQABQgQACgOADQgQADgMAHIgZASQgNAKgDAJQgEAJgDALIgFgHIgGgOIgFgOIgHgfIgJgeQgGgQAJgKQAKAIALAFQAMAEAQgBQAPgBAOACIAVAEQAIACAGgCIDPgSQA5gHAAABIAJgFIABgBQAJgDAKgCIAfgGIAggIIAHgCIgGANQgGANgKAMQgKAMgHAOIgOAaIgQAaQgIAMgMAJIgGAFIgEADIgFAEIgDADIgXALIgWAJIgcAFIAAgOgAKLAiIgCgBIgDgCIgCAAIgCAAIgDgBIgCgBIgDAAIgCAAIgDAAIgCAAIAAgBIgCgBIgDAAIgCgDIgFAAIgCAAQgEgEgGgCIgOgGIgCgBIAFABQAWADAWgEIAwgGQAWgEASgKQASgLAOgPIAAAAQAGgDAGABIAKAeIAEAMIgJAFIgSALQgMAGgJAHIhRADIgCgDg");
	this.shape_20.setTransform(49.6,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#993333").s().p("AgMAUIgOgBIgDAAQgPgBgOgDIgLgDQgBgOANgRIAFABIAbAGQAPAEASABIACAGIAGAQIgQAFIgGAAIgGAAgAA5gMIAJgFIABAAIADAAIAAAEIgBAJIAAAEIgBAEIgCAAg");
	this.shape_21.setTransform(54.8,-35.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAJIgFAFIgIgEIgSgHIgBgFIAAgCQgBgIAFgFIAAAAIABACIABACQADACAEAAIAEAAQADgBACgEIAFAFIAAAFQAAAGADAEIACAFIgCgFQgDgEAAgGIAAgFIAEgKIAFAGIACADQADADADgCIAEgCQACgCABgEQALATgBAVIgIABg");
	this.shape_22.setTransform(76.4,-36.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF00").s().p("AAuA8IgDgUQgBgYgTgNQgUgOgZADQgXADgTALIAAAAIgBAAIgGgGIgEgFIgFgGIgFgGIgEgHIgCgHIAEgHQADgDADgCIAHgDIAGgCIAHgCIAHgCIAHgDIAHgCIAHgCIAGgBIAFgBIAHAAIAHABIAIAAIAFABIAIABIAHACIAHABIAHABIAGACIAHABIAHABIAHACIAGAEIAFAFIAFAHIAEAHIADAHIADAHIACAIIACAHIABAJIAAAIIAAAJIAAAJIAAACIgVgCQgLAKACANg");
	this.shape_23.setTransform(79.7,-39.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AABAIQgNgCAFgNIALABQACAAABAEIACACQACAIgHAAIgDAAg");
	this.shape_24.setTransform(5.1,-37.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC99").s().p("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");
	this.shape_25.setTransform(36.7,1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#996633").s().p("ADeLPIgIgCQgIgCABgNQABgjADgmIAHhoQACgmAHglQAGghgDgjQgDgigKgfIgDgHQgIgbgDgcIgBgJIgBgDIgIg/QgEgdgBgdIgBgNIAAgRIgDgYIgCgZIAAgFIAAgDQABgNAKgNIAEABQACAMALALIAJAHIgJgHQgLgLgCgMIAKACQAPADAPACIADAAIANABQAQAAAQgBIAaBHIADARIABALIgBALIgBAQIgBAcIABgcIABgQIABgLIgBgLIgDgRIAGAJQAJATAIAVQgCAdAIAdQAIAfAFAgQAEAdAHAeIACAKQALArgBAtIgBBVIAAA1IAAAnIAAAcQAAALACAJIACAWQABAPgBAOQgBAXgYACIgCABIhNAFIgOABQgUAAgTgEgADqB0QAFAbAJAUQgJgUgFgbQgGgbgKgaQAKAaAGAbgAENCMQgFgegMgbQAMAbAFAegAl6AxQgCgNAEgNQAHgTAEgXQAJADAHAKQACgKAHgLQAMgTAPgOQATgSANgRQAKAMgEANIAEgFIAXgUQAXgSAfADIgRASQAPgLAUgEQAYgFAYACQARABAOAKIgBAIIg8AHQAFACAGAGIgUAFIgXACIgoACIAFAGQALAOgWAFIgwAKQASACALANQgXAEgVAGIAEADQAKAIABARQABASgMgIQgNgIgQgDIACAEQAFAQADAPQgFgCgGgFQgLgKgQAGQgRAGgCANIgBAJQgFgMgBgLgAFPAHIAQgGIACgBIABAGIABAIQABARgDAQgADFAKIAAAAgADxgOIgbgGIgGgCIgVgEQABgtAEgpIABAAIAAgDIAGg5IABgJQARAOAJAUQAJAUAFAVIAFAMIAPAqIAOArQgSgBgPgEgADqg5IAAAAIACgKIAEgnIgEAnIgCAKIAAAAgAE8gfQgJgSgHgTQgHgXgIgVIAAgCIABgXQAAgRgDgRQADARAAARIgBAXIAAAAIAAACIgSglIAEgPQADgJABgJQABgGgBgGQgBgHAGgPQAFgPAEgXQAEgYgOAFQgNAFgBAZQAAAZgGgPQgGgQABgHIgBgLQAAgEAGgQQAGgRAGgfQAGgggTAkIgVApIgEANQABgPANg7QgXgGgKAwQAFgaAAgbQAAghgKgdQgJgZgEgYIgNg1QgKgkgHgkQgFgagCgaQgCgZACgVQACgQAKgKQAMAFANAEIAUAEQAeAFAfABQAQAAANgCQALgDAJgEQAHAUADAVQADAegDAdQgFAogJAmQgFAYgBAZIgBAyQgBAaACAYQADAuANArQAKAhgEAkQgEAbAAAcIAAACQgBAYACASIABAOIADAXIADAdIABAIIAAAGQABAOgHAJIgEAFIgBABIgJAFIgHgRgAE8hAQABgLAAgMQAAgNgCgOIgBgHIABAHQACAOAAANQAAAMgBALgADLjgIABgLIAAAMgADVksIAAgCIAAADg");
	this.shape_26.setTransform(28.1,-35.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.3,1,1).p("AAHAHIABgFQAAgIgJAAIgFABIgBAMg");
	this.shape_27.setTransform(-19.3,71.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.3,1,1).p("AgIAGIAAgNQACgBADAAQANAAAAAOIgSAAIAAAE");
	this.shape_28.setTransform(-14.3,71.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.3,1,1).p("AgBAKQAHgCAHAAQgBgDgFgHQgFgHgCAAQgMAAAAAJQAAAKAAAAg");
	this.shape_29.setTransform(-8.7,70.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.3,1,1).p("AgIAJQACgBACgBQgBAAgCgCAgEAHQAIgEAFABIAAgFQgGgHgEAAQgEAAAAACQAAADABAJg");
	this.shape_30.setTransform(-1.7,69.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.3,1,1).p("AAbgDQgOgBgPAFQgWAIADAOIgBAAQgCgHgHgLIAAgJQAFAAAKgJQAJgJAHAAQAAAAAXAPQAAADAEABQACAAADAB");
	this.shape_31.setTransform(5.2,65.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.3,1,1).p("AAAgDIAAAH");
	this.shape_32.setTransform(18,17.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.3,1,1).p("ADjuAQAHAUADAVQAEAdgEAdQgFApgJAmQgEAYgBAZQgBAZgBAZQAAAZABAYQAEAuANAsQAKAhgFAkQgDAbgBAcQAAABAAAAQAAAYABATQABAHABAHQABAMACALQACAOABAPQAAADAAAEQABADAAAEQAAANgGAJAB5ooQgBgegJgbQgJgYgFgZQgFgagIgbQgKgkgGgkQgFgZgCgaQgDgZADgVQACgRAKgJAB5ooQAAADAAADQAAACAAADIgDAkIgBAEQAAAEgBAEQAAACAAABABfl2QgDgFgEgDQgGgIgFgJQgHgLgEgMQgLgjAmg9QAWgkAGACABznnQAAAAAAABQAAABAAACQAAAAAAAAQgBACgBACQAAADgBACQgCAIgBAHQgCAHAAAIQgBADAAAEIBRCNQAIAVAHAWQAFANAFAOIADAFQABADABADQABABABABQADAHADAHQAFgCAEgDABZnUIgBAAQABAAAAAAQAVgWADAEQABACgBAFQAAAHgEANABfksQADgbADgdQAAgFABgFQgCgBgBgCQgBgBAAAAQgCgDgBgBQAEAEADAEQABACACABQAOANAJATQABABAAABQAIASAFAUQACAGACAHQAEAIADAJQAEALAEALQABABAAACQABABAAACIADAIAj1kFQAIAGAMADQANACALAKQADADAAAEQADATAPACQALAAAHAJQAKALAFAPQAFAQgCAPQgCAMgEAMIAAAAQAAACgBABQgBADgBADQgBADgCACQgDAGgGAGQgBACgCACQgJAIgLAIQgNAIgNAIAiVh6QAGABA2AIQAOACAMACQAfAFAJAGQAEACAFACQACACADABQAGADAFADQAFACAEAGQAOgOAKgUQAFgMANgJQAPgLAQgGAnWhwQgFgMgBgKQgCgOAEgMQAGgUAEgXQAKACAHALQACgKAHgMQAMgTAPgNQATgSANgSQAJANgDAMQABgCADgCQAMgLALgJQAXgSAeACQgJALgIAHQAQgLAUgEQAXgEAYACQASABANAKQAKAGgKABQgfAEgeADQAGADAGAFQgKADgLACQgLACgLABQgWABgSABQACABADAEQALAPgWAEQgYAFgYAFQASACAKAOQgWADgVAGQACABACACQAKAKABAQQABASgMgHQgNgIgQgEQABACAAADQAGAQACAOQgEgBgHgGQgKgJgQAGQgRAGgDANQAAAEAAAEQAAADACADIAAABQACADADAEQALAIAGANQAFALALAAQAEAAAGgCQARgGAHgKAkljYQAFgNAMgLQAGgGAGAAQAHgBAFAFQAGAFAAAIQAAAMgHAJAlAjNQgBgDgCgBQgHAAgFgBQgGAOAOACQAMACgEgLQAAgBgBgBgAk4h7QAMAJAOABQAPAAAQgDQASgDALgKQAMgMABgLAhKBXQAAABAAABQABAPgEAOQgEAOgFAMQgFAOgHAPQgGAOgLAMQgJALgKALQgKAMgHANQgGANgIAPQgGANgHANQgCAEgCAEQgBABgBACQgDAHgCAGQgGANgKAMQgKAMgHAOQgHAOgHANQgHAMgJAOQgIAMgNAJQgCACgDADQgCABgCACQAAAAAAAAQgDACgCACQgBACgCABQAAABgBABIgWAJIgXAJQgNACgOADQgBAJgDAIQAAAAgBABABnA6QgGAEgGADQgNAJgPAFQgNAEgPADQgPACgQABQgOAAgRAAQgFAAgGAAQgDAAgDAAQgGgBgGAAQgDAAgEAAQgGAAgFgBQgFAAgFgBAFgjfQAAAAAAAAQgBABAAgBQgDgCgDgDQgCgEgCgDQgCgCgDgDQgCgDgDgDQgCgEgCgEQgCgDAAgEQACgEACgDQADgDADgBQADgCAEgBQADgBADgBQAEgBADgBQAEgCADgBQAEgBADgBQAEgCADgBQAEgBADAAQADgBADAAQACgBADAAQAEAAADAAQAEAAADAAQAEABAEAAQADAAADABQAEAAAEABQADAAAEABQADABAEABQADAAAEABQADABADAAQAEAAADABQAEABADABQAEAAADACQADABADADQADACACADQADADACADQACAEACADQACAEABADQACAEABADQACAEAAAEQABAEABAEQAAAFABAEQAAAEAAAFQAAAEAAAFQAAAEAAAEQAAACAAABQAKAGAFAKQAEAHABAHQAAABAAACQABABAAABQAAABABADQAAADgBAEQAAAFgBADQgBADgCACQAAAAAAABIgBAAQgCABgCABIgagFAFhjGQAAgDgBgDQAAgEAAgEQAAgFAAgGQACgBABAAQASgLAVgDQAagDAUAQQAOAJAEAOQACAGAAAHQABACAAABQAAAGABAGIAAAAQABADAAACIAQACQAAgBAAgCIAAAAQAAgLAJgIIAVACAF8jPQgCgDgDgCIgNgCIgFACIAAAAQgFAFABAIQAAABAAAAAGCi6QgBgCgCgCQgDgGAAgGQAAgCAAgDIAFgJIAMgCIAIAEQALASgBAVQAAABAAABIgIABIgVgOQgDAEgCABIgBABQgEgCgEgCQgJgEgJgDQAAgDgBgEAD0j2QACgBACgBQAbgKgCAQQgCARgHAGQAAABgBAAQAYgIAKAMQALALgRAIQgQAHgKAFQBBgJgNAVQgOAVgPAGQAlgKgBAOQgBASguAPQgCABgDABIARAoIADAIQAIgBAGADQAEABADACQALAFALAFQAIADAIAEQAVAIAUAGQATAFATADQAXAEAWAHQAIACAHACIABAAQAAAAAAAAQACgEABgFQAJgbgTgQQgFADgEACQgIADgIAAQgaAGgQgUQgOgRgOgSIgBgCQgDgIgEgHQgEgMgFgLQgDgKgDgKIAXABAEJi3QgEADgFACIAAAAQAAAEAAAFQABAQgDAQQABABABACQADgBACAAQAMgCAPgHAD/i4QAAADABADADqi2QABADABACQABACABACQABACABADIAOAfADti2QgCAAgBAAIgEgHQgCgFgDgFAEAiGIAKATQADAFADAFAFii/IgIADQABAVAPANQACACACABADujIQAKgHAPgLADZj4QAEgagEgYQgBgEgBgDACOkjQgCAUgDATQgBAJAAACACwjCQgSgBgQgEQgNgDgOgDQgCgBgDAAQgLgDgKgCQABgsAEgpABnA6QgDgggFgdQgEgdgCgeQAAgGAAgGQAAgJgBgJQAAgMgCgLQgBgNgBgNQAAgCAAgCQAAgCAAgBQABgNAKgOACwjCQABADABADQADAJAEAIQABACAAACIAbBHQADAFACAFQACADACADQAFAMAFAMIABACQABAEABADQAEAIADAHACOinIANABQAQABAPgCADVhgQACAIABAJQABALgBAMQgBAIAAAIQgBAOAAAOACoimQAJgDAIgCACmjgQAEALAGATAB4h4QAKAZAFAcQAGAbAJATABnA6QAAACAAACQABAEAAAFQAEAbAIAbQABAEACADQAKAgACAiQADAjgFAhQgHAlgCAlQgDA1gEA0QgEAmgBAjQAAANAIACQAEABAEABQAZAFAbgCQAogDAmgDAEBgBQAFABAGACQAGADAGABQABAAAAAAQAEABADABQAbAKAcAIQAHABAHACQAKAEAJADQAEABADABQgEgBgBgBQgBAAgBAAAHqBCQgXgIgZgHQgUgFgUgEQgJgCgKgCAEkg5QAMABAJAEAEBgBQAAAAgBAAQgBgCgBgCQgDgFgCgDQgEgHgCgIQgBgCAAgCQAGAOAGANQABACABACgAEAIUQAXgDABgWQACgPgBgPQAAgLgCgKQgCgJAAgLQAAgOAAgOQAAgUAAgTQAAgbAAgbQAAgrABgqQABgtgLgqQgBgFgBgFQgHgegEgdQgFgggJgfQgHgdABgdACZhlQANAcAFAdAC7krQADgdgFgcAGFhbQAagCAQgRQAIgKAEgLQADgIACgJQABgCAAgCQABgDAAgCIAJgDAJjg1QAAAAAAgBQgDgCgDgBQgDgCgEgBQgCgBgEAAAIJh9QAIAeATAVQAFAFAHADQAOAIANgCQACgBACAAQABAAAAAAQADABADACQAHACAGADQAIADAIAFQABAAABABQAEACADACQACABABABQABABABAAQAFACACADIgIgFQAAAAgBgBQgGgEgGgDAHkgyQADgBACgBIACgBIABgCQACgDABgCAHqACQABAAAAABQAAgBAAAAAIPBGQgHAAgHAAQgEAAgFgBQgHgBgHgCQALADAMABAI3BwQgBgBgBgBIAAgBQgGgGgGgHQgNgNgNgNAI1BuQABAAABABQAAAAAAABQALALAJAMQALALAJANQADAEACAEQAHALAHAKAKIggQABABAAABQAGAIAGAHQAEAEAFADQAFAFAFADQAIAHAIAHAKegIQAMAGAJALQACACADADQAJAJAIALQAHAKAIAKQABABABABQAGAHAFAGQADADACADQANAPANAPQAPASALAVQADAEACAEQACACABACQAGAJAEAJQABADABADQABABAAABQAMAWAJAWQAJAVAFAZQAFAYAGAXQAFAWADAXQAFgDAGABQAFAOAFAQQADAHACAHALaA4QAIAKAIAJANpFsQgIAIgIAHQgIAGgIAFQgGAEgGADQgNAGgPACQgZADgYADQgIABgIABIgEAAQgMABgLgCAMrF9QgDgQgDgPQgCgIgCgJQgCgOgEgNQgDgKgFgJQgHgTgJgRQgCgEgCgEQgEgIgEgHQgHgNgGgMAKlEqQgCgEgBgFQgFgOgFgOQgBgEgBgEQgGgOgHgNQgGgLgFgIQgHgJgFgKQAGAKAHALQAGAIAEAJAKlEqQgGgTgGgRQgCgFgBgEAK5GZQgCgLgBgNQAAgDAAgCQgBgOgDgMIAAgBQgEgRgEgPQgBgGgBgGQAAgBgBAAQAAgEgCgDIAAgDAkRFNQgCABgMACQgOACgmAHQA5gIAAABQAEgDAFgCgAi4E3QgDABgEABQgPAFgQADQgPADgQADQgKACgJAEIgBAAAkiHQQAAABgXAKAkaHJQgCACgDACAlrHpQAAgHgBgHQAAgIgEgEQgGgMgKgKQgKgJgNgJQgNgJgNgHQgOgGgOgEQgPgDgQgCQgRgCgPABQgQACgOADQgQAEgMAIQgNAIgMAJQgOAKgCAJQgFAJgCALQgCgEgDgDQgEgHgDgGQgCgHgCgIQgDgQgEgQQgEgOgFgQQgGgQAIgKAlwH9QAAAAAAAAQgEALgDAOQgDAPgGANQgHAOgGAOQgGAMgIAMQgEAGgEAGAmjJzQAAAAgBABQgDAGgDAFQAAABgBACQAGABAGADQAFADAFAEQADADABAFQABADAAAEQAAAAAAABQgCAKgFAHQgEAHgEAFQAIADACAPQACAOA/AfQA/AgAFAfQAFAfgYAQQgYAQgegIQgPgFgQgTQANAcgRAIQgRAHgUgQQgRgOgEgFQACAFgFANQgFAPgRADQgRAEgLgOQgLgOABAKQACAKgLAJQgKAIgSgMQgSgMAAAHQAAAHgMAEQgMAEgVgpQgUgpgWgYQgVgXgRgdQgGgKANgaQANgMAGgHQALgNALgGQgCgHgBgIQgBgEAAgEQAAgDAAgEQABgLABgMIAAgBIgCgIIADgLQABgJACgIQAFgRAJgJQACgDADgDQgGgIgFgNQgHgNgCgQQgBgQABgQQABgFABgFAMjCYQAIAOAHAOAqrDGQgJAJgIAKQgJANgJAKQgKAKgMAEQALAEAHALQALAQgNAHQgOAIgLgFQgOgHgLgPQgBANgGARQgEAPgSABQgMgBgCgLQgDgOAFgMQgFADgHAEQgVAOgVgEQgQgEAGgNQAJgUARgGQgRAAgWgCQgKAAAHgJQAIgKANgHQgKgEgJgJQgFgHAHgBQAOgDAOAEQAOACAJALQgEgPABgOQAAgPACgOQABgPAEgOQADgQAIgNQAHgPAJgMQAJgNALgKQALgLAMgJQALgJAOgGQAOgHAPgFQADgBADAAQgBgLAHgOQAFgLALgJQALgIAPgHQAOgHAQgFQAOgFAPgFQAQgFAQgBQAOAAAOgBQAQAAAOADQAPACAOAFQAPAEANACQALADALgCApvBsQgDALgEAKQgCADgCAEQAMAJAOgCQAPgCAPgFQAPgGAPgDQAOgCAPgIAqrDGQAHgHAIgHQAOgLAIgOQAHgLAFgMAlTFZQjOARgBAAQgHACgHgCQgLgCgLgCQgNgCgPABQgRABgLgEQgMgFgKgIQAAgBgBAAQgKgJgFgQQgEgRgCgPQgBgPgBgOQAAgPAAgNQAAgNABgPApkIsQAIgIAHgGQALgKALgGAp7JwQAAgDAAgEQABgGAAgFQAAgBAAAA");
	this.shape_33.setTransform(38,-17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AngBLQgBgIgDgEQgHgMgKgKQgJgJgNgJQgNgJgOgHQgNgHgPgCQgPgDgQgCQgQgCgQABQgQACgOADQgQADgMAHIgZASQgNAKgDAJQgEAJgDALIgFgHIgGgOIgFgOIgHgfIgJgeQgGgQAJgKQAKAIALAFQAMAEAQgBQAPgBAOACIAVAEQAIACAGgCIDPgSQA5gHAAABIAJgFIABgBQAJgDAKgCIAfgGIAggIIAHgCIgGANQgGANgKAMQgKAMgHAOIgOAaIgQAaQgIAMgMAJIgGAFIgEADIgFAEIgDADIgXALIgWAJIgcAFIAAgOgAKLAiIgCgBIgDgCIgCAAIgCAAIgDgBIgCgBIgDAAIgCAAIgDAAIgCAAIAAgBIgCgBIgDAAIgCgDIgFAAIgCAAQgEgEgGgCIgOgGIgCgBIAFABQALACAMgBIAEAAIARgCIAwgGQAPgCANgGIAMgGIAQgLIAQgPIAAAAQAGgDAGABIAKAeIAEAMIgJAFIgSALQgMAGgJAHIhRADIgCgDg");
	this.shape_34.setTransform(49.6,23.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#993333").s().p("AgMAUIgOgBIgDAAQgPgBgOgDIgLgDQgBgOANgRIAFABIAbAGQAPAEASABIACAGIAGAQIgQAFIgGAAIgGAAgAA+gCIgFgKIAJgFIABAAIADAAIAAAEIgBAJIAAAEIgBAEIgCAAg");
	this.shape_35.setTransform(54.8,-35.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AACAJQgCADgCABIgBABIgIgEIgSgHIgBgFIAAgCQgBgIAFgFIAAAAIABACIABACQADACAEAAIAEAAQADgBACgEIAFAFIAAAFQAAAGADAEIACAFIgCgFQgDgEAAgGIAAgFIAEgKIAFAGIACADQADADADgCIAEgCQACgCABgEQALATgBAUIAAABIgIABg");
	this.shape_36.setTransform(76.4,-36.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF00").s().p("AAuA8IgBgFIAAAAIgBgMIgBgDQAAgHgCgGQgEgPgOgJQgUgOgZADQgVACgSAKIgDACIAAAAIgBAAIgGgGIgEgFIgFgGIgFgGIgEgHIgCgHIAEgHQADgDADgCIAHgDIAGgCIAHgCIAHgCIAHgDIAHgCIAHgCIAGgBIAFgBIAHAAIAHABIAIAAIAFABIAIABIAHACIAHABIAHABIAGACIAHABIAHABIAHACIAGAEIAFAFIAFAHIAEAHIADAHIADAHIACAIIACAHIABAJIAAAIIAAAJIAAAJIAAACIgVgCQgJAJAAALIAAAAIAAADg");
	this.shape_37.setTransform(79.7,-39.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC99").s().p("AoNLTQgSgMAAAHQAAAHgMAEQgMAEgVgpQgUgpgWgYQgVgXgRgdQgGgKANgaQANgMAGgHQALgNALgGQgCgHgBgIIgBgIIAAgHIACgXIAAgBIAAgHIABgLIAAgBIADgRQAFgRAJgJIAFgGIAPgOQALgKALgGQgLAGgLAKIgPAOQgGgIgFgNQgHgNgCgQQgBgQABgQIACgKQACgLAFgJQACgJAOgKIAZgRQAMgIAQgEQANgDARgCQAPgBARACQAQACAPADQAOAEAOAGQANAHANAJQANAJAKAJQAKAKAGAMQAEAEAAAIIABAOQgBAJgDAIIgBABIAAACIAAAAQgEALgDAOQgDAPgGANIgNAcQgGAMgIAMIgIAMIAAABIgBABIgGALIgBADQAGABAGADIAKAHQADAEABAEIABAHIAAABQgCAKgFAHIgIAMQAIADACAPQACAOA/AfQA/AgAFAfQAFAfgYAQQgYAQgegIQgPgFgQgTQANAcgRAIQgRAIgUgRQgRgOgEgFQACAFgFANQgFAPgRADQgRAEgLgOQgMgOACAKQACAKgLAJQgEADgGAAQgIAAgKgHgALSDrIgFgBIgBAAIgBgBIgEgBIgBAAQgCgLgBgNIAAgFQgBgOgDgMIAAgBIgIggIgCgMIgBgBIgCgHIAAgDIgMgkIgDgJQgGgOgHgNIgKgRIgNgVIgOgUIgFgIQgJgNgLgLIgUgXIAAgBIgCgBIAAgBIgMgNIgagaIAAAAIgOAAQgMgBgLgDIgwgPIgogJIgTgEIgHgCIgTgHQgHgCgHgBIg3gSIgHgCIgBAAQgGgBgGgDIgLgEIgBAAIgCgEIgMgbIAMAbIACAEIABAAIgBAAIgCgEIgFgIQgEgHgCgIIgBgEIgHgPIgCgHIgBgCIgKgYIgEgGIgFgKIgbhHIgBgEIgHgRIgCgGIgKgeIAAgBIgDgIIgBgDIgBgDIgIgWIgHgRIgEgNQgFgUgIgSIgBgCQgJgTgOgNIgDgDIgHgIIgHgIQgGgIgFgJQgHgLgEgMQgLgjAmg9QAWgkAGACIAAAGIAAAFIgDAkQgBALgEAIIAAAAIgCgBIAAAAIAAABIgBAAIgCABIAAAAIgDABIAAAAIgDADIAAAAIAAAAIgJAIIgEAFIABgDIAAgBIgCAEIABAAIAEgBIgEABIAEgFIAJgIIAAAAIAAAAIADgDIAAAAIADgBIAAAAIACgBIABAAIAAgBIAAAAIACABIAAAAQABACgBAFIgBAFIgDAPIgCAPIgBAHIBRCNQAIAVAHAWIAKAbIADAFIACAGIACACIAGAOIAFAKIAEAHIADAAIAAgEIAAgFIABgJIAAgEIgDAAIAAgBIAEgFQAGgJAAgNIgBgHIAAgHIAEgCQAbgKgCAQQgCARgHAGIgBABQAYgIAKAMQALALgRAIIgaAMQBBgJgNAVQgOAVgPAGQAlgKgBAOQgBASguAPIgFACIACAFIACADIAGALIAFAPIACAGIgRgoIARAoIADAIQAIgBAGADIAHADIAWAKIAKADIANAFIAOAFIANAFIAKACIADABIAOAEIAOACIAOADIAOADIANAEIAIADQgWgHgXgEQgTgDgTgFIgpgOIgQgHIAQAHIApAOQATAFATADQAXAEAWAHIAPAFIABABIAAgBIADgKQAJgbgTgQIAFgCIACgBIABgCIADgFIgDAFIgBACIgCABIgFACIgJAFQgIADgIAAQgaAGgQgUIgcgjQAagCAQgRQAIgKAEgLIAFgRIABgEIABgFIAJgDIgJADIgBAFIgBAEIgFARQgEALgIAKQgQARgaACIgBgCIgHgPIgJgXIgGgUIAXABIgXgBIgEgDQgPgNgBgVIAIgDIASAHIAIAEIABgBQACgBADgEIAVAOIAIgBIAAgCQABgVgLgSIgIgEIgMACIgFAJIgFgFIgNgCIgFACIgFAAIAAgLIADgBQASgLAVgDQAagDAUAQQAOAJAEAOQACAGAAAHIABADIABAMIAAAAIABAFIAQACIAAgDIAAAAQAAgLAJgIIAVACIABAAIAGACIAFAGIAEAGIADAHIABAJQgBgHgEgHQgFgKgKgGQAKAGAFAKQAEAHABAHIAAADIABACIABAEIgBAHIgBAIIgDAFIAAABIgBAAIgEACQAIAeATAVQAFAFAHADQAOAIANgCIAEgBIABAAIAGABIAHADIAGADIAAABIgNgFIgGgDIAGADIANAFIAQAIIAMAHIABABIAIAFIABACQAGAIAGAHIAJAHIAKAJIAQAOQAJAJAIALIAPAUIACACIALANIAFAGIAaAeQAPASALAVIAFAIIADAEIAKASIACAFIABACQAMAWAJAWQAJAVAFAZIALAvQAFAWADAXIAAAAIgQAPIgQALIg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");
	this.shape_38.setTransform(36.7,0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#996633").s().p("ADeLPIgIgCQgIgCABgNQABgjADgmIAHhoQACgmAHglQAGghgDgjQgDgigKgfIgDgHQgIgbgDgcIgBgJIgBgDIgIg/QgEgdgBgdIgBgNIAAgRIgDgYIgCgZIAAgFIAAgDQABgNAKgNIAEABQACAMALALIAJAHIgJgHQgLgLgCgMIAKACQAPADAPACIADAAIANABQAQAAAQgBIAaBHIAGAJIADAHIAKAYIABABIADAIQgCAdAIAdQAIAfAFAgQAEAdAHAeIACAKQALArgBAtIgBBVIAAA1IAAAnIAAAcQAAALACAJIACAWQABAPgBAOQgBAXgYACIgCABIhNAFIgOABQgUAAgTgEgAE6B/IgBAQIgBAcIABgcIABgQIABgLIgBgLIgDgRIADARIABALIgBALgADqB0QAFAbAJAUQgJgUgFgbQgGgbgKgaQAKAaAGAbgAENCMQgFgegMgbQAMAbAFAegAl6AxQgCgNAEgNQAHgTAEgXQAJADAHAKQACgKAHgLQAMgTAPgOQATgSANgRQAKAMgEANIAEgFIAXgUQAXgSAfADIgRASQAPgLAUgEQAYgFAYACQARABAOAKIgBAIIg8AHQAFACAGAGIgUAFIgXACIgoACIAFAGQALAOgWAFIgwAKQASACALANQgXAEgVAGIAEADQAKAIABARQABASgMgIQgNgIgQgDIACAEQAFAQADAPQgFgCgGgFQgLgKgQAGQgRAGgCANIgBAJQgFgMgBgLgAFTAPIgDgFIgBgDIAQgGIACgBIABAGIABAIQABARgDAQgADFAKIAAAAgADxgOIgbgGIgGgCIgVgEQABgtAEgpIABAAIAAgDIAGg5IABgJIADACQAPAOAIASIABADQAJASAEAUIAFAMIAGARIAIAXIABACIABAEIADAIIAAABIAKAeQgSgBgPgEgADqg5IAAAAIACgKIAEgnIgEAnIgCAKIAAAAgAE9gcIgBgDIgDgGIgCgFIgLgaQgHgXgIgVIAAgCIAAAAIAAACIhRiMIABgIIACgOIADgPIACgFIABgEIAAgBIABgCIgBgBIAAAAIABgDIAAgEIACgIIAAgEIADgkIAAgFIAAgGQgBgegJgaQgJgZgEgYIgNg1QgKgkgHgkQgFgagCgaQgCgZACgVQACgQAKgKQAMAFANAEIAUAEQAeAFAfABQAQAAANgCQALgDAJgEQAHAUADAVQADAegDAdQgFAogJAmQgFAYgBAZIgBAyQgBAaACAYQADAuANArQAKAhgEAkQgEAbAAAcIAAACQgBAYACASIABAOIADAXIADAdIABAIIAAAGQABAOgHAJIgEAFIgBABIgJAFIgGgOgAE8hAQABgLAAgMQAAgNgCgOIgBgHIABAHQACAOAAANQAAAMgBALgAEdhyIABgXQAAgRgDgRQADARAAARIgBAXgADPkSQAEgNABgHQgBAHgEANgADLjgIABgLIAAAMgAC7kbIAAgBIAAABgAC8kfIAAAAIgBADIAAABgADVksIAAgCIABABIgBACg");
	this.shape_39.setTransform(28.1,-35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{rotation:0,x:111.3,y:66.8}},{t:this.shape_7,p:{rotation:0,x:111.3,y:66.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:73.8,y:-37.1}},{t:this.shape_2,p:{x:73.8,y:-37.1}},{t:this.shape_1,p:{x:76.6,y:-37.1}},{t:this.shape,p:{x:76.6,y:-37.1}}]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_24},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_18},{t:this.shape_32},{t:this.shape_15},{t:this.shape_14},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_8,p:{rotation:-30,x:122,y:66.2}},{t:this.shape_7,p:{rotation:-30,x:122,y:66.2}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_3,p:{x:74.2,y:-37.7}},{t:this.shape_2,p:{x:74.2,y:-37.7}},{t:this.shape_1,p:{x:76.9,y:-38.1}},{t:this.shape,p:{x:76.9,y:-38.1}}]},9).wait(11));

	// Layer 4
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.3,1,1).p("Ai3gOIAAAxQBKAsBegFQAWAEAWAKQAgAMARghQAMgWAZgHQBAgWAFg1QABgLgHgMQgOgZgcgFQhBBRgPAaQgOAcgvgIQhfgJhTgqg");
	this.shape_40.setTransform(79.9,-5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC99").s().p("AAdBYQgWgKgWgEQheAFhKgsIAAgxQBTAqBfAJQAvAIAOgcQAPgaBBhRQAcAFAOAZQAHAMgBALQgFA1hAAWQgZAHgMAWQgNAYgUAAQgIAAgIgDg");
	this.shape_41.setTransform(79.9,-5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.3,1,1).p("ADQA9QARgZARAWQANAGACAUQAEANgFAEQgEACgeAJQgGACgLATQgMAUgSAFQgPAFgPgEQgPgDgLADQgQAFgNARQgMAQgeAJQgCABgBAAQgtAKgEAAQgNAAgGgXQgGgUAEgKQAFgLgDgJQgBgFgtgKQgtgKgVgNQgUgOgWgrQgXgsgjgOQgjgPATgiQAUgjAQg5QAQg4AbgIQAOgEASAFIACAIQgDABAtAcQAqAnAMAMQAHAKANAdQAIAUAMAPQAUAZAFAYQAGAKAjAlQAjAlgGgHQgGgHA0AIQA0AJARgYg");
	this.shape_42.setTransform(30.4,33.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC99").s().p("AgEDZQgNAAgGgXQgGgUAEgKQAFgLgDgJQgBgFgtgKQgtgKgVgNQgUgOgWgrQgXgsgjgOQgjgPATgiQAUgjAQg5QAQg4AbgIQAOgEASAFIACAIQgDABAtAcQAqAnAMAMQAHAKANAdQAIAUAMAPQAUAZAFAYQAGAKAjAlQAjAlgGgHQgGgHA0AIQA0AJARgYQARgZARAWQANAGACAUQAEANgFAEQgEACgeAJQgGACgLATQgMAUgSAFQgPAFgPgEQgPgDgLADQgQAFgNARQgMAQgeAJIgDABQgsAKgEAAIgBAAg");
	this.shape_43.setTransform(30.4,33.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.3,1,1).p("Ag3A7QAUAQARAVQAYAcAhgSQAXgNAbAIQBKARAggrQAGgJAAgPQgCgegZgUQhoAigbAPQgcAQgqgiQhYg8g8hUIgZArQAzBPBeAxg");
	this.shape_44.setTransform(77.4,-14.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC99").s().p("AgSBgQgRgVgUgQQhegxgzhPIAZgrQA8BUBYA8QAqAiAcgQQAbgPBogiQAZAUACAeQAAAPgGAJQggArhKgRQgbgIgXANQgNAHgMAAQgRAAgPgRg");
	this.shape_45.setTransform(77.4,-14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-108.6,187.3,196.9);


(lib.anim_twiggs_paint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AFAhBQAJgFAHgHQACgCACgCQABgBABgCQAFgIADgJQACgJgBgKQgCgIACgJQACgIAFgHQAFgHAGgGQAGgHAFgFQABgCACAAQgGAFgBAGQgCAHAAAHQAAAIADAIQAEAIABAJQAAALgDALQgBAHgCAGQgBADgBACQgBACgBACQgFAKgLADQgIACgJABQgCABgDAAQgFACgGABQgBAAgBAAQgKADgLABQgEAAgFADQAEgGAIgDQAJgCAIgEgACEhhQAAAAAAAAQATAGASAFQASAGASAGQARAGASACQATADATADQAKABABAJIAAAAQABAEgCAFQgBAHgEACQgHADgKgCQgLgCgLgBQgSgBgSgEQgSgFgRgFQgCgBgCAAQgQgGgPgHQgPgHgOAEQAHAJgGANQABADAAADQABASgJAMQgBABgBABQgEAEAAAEQgBANgLAJQgXAVADgaQABgIAFgHQABAAAAgBQAAAAAAgBQABgCAAgCACEhhQgDAAgIgCQgTgFgTAFQgDABgBAEQgBAEAAAEAAjhzQAEgCADgCQAQgKAQgKQAUgNAOATQAMAQAMAOQADAEgCABIgBAAQAAABAAAAABIACQAAABgBAAQgIADgHABQgQAFgRgBQgBABgBABQgNANgMALQgPALgRAIQgSAIgSAJQgRAJgRAKQgBABgBABQgOAJgPAJQgPAKgPAJQgQAJgPAJQgQAJgRAKQgPAJgPAJQgPALgQAKQgPAKgSAHQgTAHgRgKQgMgHAFgNQAAgBAAAAQgDgGgCgJQAAgGgBgFQgCgOgBgOQgCgTgBgSQgBgRgBgRQgBgTACgSQACgRAEgRQAEgSADgSQADgTAEgRQABgEABgEQADgOAEgNQADgGACgHQAEgLADgMQAGgSAkg0QAlg0AJBsQgDARgEASQgDARgEAPQgBACgBACQgFASgFATQgFASgDATQgCAMAAAOQABATgCATQAAAEAAAEQgBAQABAPQABATgDASQgCAKACACQABAAABAAQANgIAOgGQARgHARgIQASgIARgIQAQgIAQgJQANgGAMgHQADgBADgCQAQgJAQgJQAQgJASgJQARgIAOgNQAHgHAIgFQABgCAAgFQACgUgCgTQgBgUgBgTQAHgDAGgDQABAAAAgBQAGgDAHgDQAOgGANgIAgIhlQgSgDgTgGQgSgGgTgFQgUgEgHgWQAPgGARABQAUACASAIQASAIATAEQARADAUAMAA+hVQAIABAHACQALADAKAFQAHADAEAFABpgmQgQgLgSgIAA6giQASAFAQAJQAJAFACAH");
	this.shape.setTransform(86.2,70.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AjtDdQgLgHAEgNIABgBQgEgGgBgJIgCgLIgDgcIgCglIgCgiQgBgTACgSQABgRAEgRIAHgkIAHgkIACgIIAIgbIAEgNIAIgXQAGgSAkg0QAkg0AJBsIgGAjIgIAgIgBAEIgKAlQgFASgDATQgDAMABAOQAAATgBATIgBAIQgBAQABAPQACATgEASQgBAKABACIACAAQANgIAOgGIAjgPIAigQIAggRIAZgNIAHgDIAegSIAigSQASgIANgNIAQgMIAAgHQACgUgBgTIgDgnIAOgGIAAgBIAOgGIAcgOIAGgEIAhgUQATgNAPATIAXAeQAEAEgDABIAAAAIgBABQgDAAgIgCQgSgFgTAFQgEABgBAEIgBAIIAAAEIgQgDIAQADQALADAKAFQAHADADAFQAHAJgGANIgEAGIAFAAQACASgKAMQgCgHgIgFQgRgJgSgFQASAFARAJQAIAFACAHIgCACQgDAEAAAEQgBANgLAJQgYAVAEgaQABgIAFgHIAAgBIABgBIABgCIgBgCIABACIgBACIgCABIgPAEQgQAFgQgBIgCACQgNANgOALQgPALgRAIIgjARIgiATIgDACIgbASIgfATIgeASIgiATIgdASIgfAVQgQAKgRAHQgIADgIAAQgLAAgKgGgADmgmQgQgLgTgIQATAIAQALg");
	this.shape_1.setTransform(73.8,70.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ACxA8QgLgCgMgBQgSgBgRgEIgkgKIgEgBQgQgGgPgHQgPgHgOAEQgDgFgHgDQgJgFgLgDIAAgEIABgHQABgEAEgBQASgFASAFQAIACADAAIABAAIAkAKIAkAMQARAGASACIAnAGQAJABACAJIAAAAQAAAEgBAFQgCAHgEACQgEACgGAAIgGgBgAhigJQgSgDgTgGQgSgGgSgFQgUgEgIgWQAQgGAQABQAUACASAIQASAIAUAEQASADAUAMIgcAOIgOAGg");
	this.shape_2.setTransform(95.2,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgfA0QAKgFAGgGIAFgEIACgEQAFgHADgKQABgIgBgJQgBgJABgJQACgIAFgGIALgOIAKgMQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQgFAFgBAFQgDAIAAAHQAAAIAEAHQAEAJAAAJQABAKgDALIgDAMIgDAGIgCAEQgEAKgLADIgQADIgFABIgLACIgCABg");
	this.shape_3.setTransform(121.4,58.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AFNkTQACgEABgEQACgJABgKQACgIgBgIQgBgKACgKQABgJAIgGQAEgDAFACQAJAGACAKQACAIgCAIQgCAKgGAIQgGAHgGAHQgFAGgHAFQgDACgCACQgBADgCACAEbh3QAHgHAFgIQABgDABgDQABgCABgBQACgJAAgKQAAgJgFgJQgEgHAAgKQgBgIADgIQADgIADgIQAEgHADgHQABgCACgBQgEAGAAAHQAAAHACAHQADAIAFAGQAGAGAEAJQADALABALQAAAHAAAGQAAADAAACQgBADAAACQgBALgKAGQgIAEgIAEQgCABgCACQgFACgFADQgBABAAAAQgKAGgJAEQgFABgDAFQACgIAHgFQAHgEAHgHgAgpg4QgSACgUAAQgTgBgTABQgUACgOgSQANgLAQgEQAUgEATACQAUADAUgCQASgCAWAFQADgDABgDQANgOANgOQAOgSAUANQAQAMAPAKQAFADgDACIAAAAQAAABgBAAQABAAAAAAQAUAAATAAQASAAATABQASAAASgDQAUgDATgDQAJgBAEAHIAAABQABAEABAFQAAAHgDADQgGAFgJABQgLABgMADQgRAEgSABQgTABgSAAQgCAAgCAAQgRgBgQgCQgRgDgMAIQAJAGgCAPQACADABADQAHAQgGAPQAAAAgBABQgCAFABAFQADAMgIANQgQAagEgZQgCgIADgIQAAgBAAgBQAAAAAAgBQAAABgBAAQgGAFgHAEQgOAJgQAEQgBABAAABQgJARgJAOQgKAPgOANQgPANgOAOQgOANgNAPQgBABgBABQgLANgLANQgLAOgMANQgNANgLANQgNAOgOAOQgMANgLANQgLAPgMAOQgMAOgPAMQgQAMgTgFQgNgDAAgNQAAgBAAgBQgFgEgEgJQgDgFgCgFQgGgMgFgNQgHgSgGgRQgGgQgGgQQgGgRgEgTQgDgQgBgSQgCgSgDgTQgCgTgBgSQgBgEAAgEQgBgOAAgOQAAgGABgHQAAgMAAgNQABgSATg8QATg8ApBkQACASACARQABARABAPQAAADAAACQAAATABATQABATACATQACANAEANQAGASAEATQABAEABAEQAEAPAFAOQAHASACASQABAKADABQAAAAABAAQAKgLAMgKQAPgMAOgMQAOgNAOgNQANgNANgMQAKgKAKgKQADgDACgCQANgNAMgNQANgOAOgOQAPgNAJgQQAFgJAGgIQgBgCgBgFQgEgTgHgRQgHgSgHgTQAGgFAFgFIABAAQAFgFAGgGQAMgKAKgLABdheQgDABgHAAQgTABgRALQgDACAAAEQAAAEABADAAeg+QAIgBAIgBQAMAAALACQAHABAFADABWgeQgSgFgVgDABcAAQgEgGgJgCQgTgFgSABABCASQAAgCgBgD");
	this.shape_4.setTransform(91.5,57.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgrByQAHgHAFgJIADgFIABgEQACgJAAgJQAAgJgEgJQgEgIgBgJQAAgIACgIIAGgQIAHgNQABgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQgEAGAAAGQABAHACAHQACAIAGAGQAGAGADAJQADAKAAAMIAAANIAAAFIgBAFQgBALgJAFIgPAJIgFACIgJAGIgCABgAAJgyIAEgSQABgIgBgIQAAgKABgKQACgJAHgGQAEgDAFACQAJAFACALQACAIgCAIQgBAKgHAHIgLAPQgFAGgHAEIgGAFIADgJg");
	this.shape_5.setTransform(124.2,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AiSDxQgNgDABgOIAAgBQgGgFgDgIIgFgKIgLgaIgNgjIgMgfQgGgSgEgSQgDgRgCgRIgEgmIgEgjIAAgIIgBgcIAAgNIABgZQAAgTAUg8QATg8AoBkIAEAjIACAhIAAAEIACAmQAAAUADASQABANAFANQAGASAEASIACAIQAEAPAFAOQAHASACASQABAKACACIACgBQAKgLAMgKIAdgYIAcgaIAZgZIAUgUIAFgFIAZgZIAbgbQAOgNAJgRIALgQIgBgHQgEgUgHgSIgOgkIALgKIAAgBIAMgKIAWgVIAFgGIAZgdQAPgSAUAOIAfAWQAEADgCACIAAAAIgBAAQgDACgIAAQgTABgQAKQgDACAAAEIABAIIABAEIgQABIAQgBQALgBALACQAIABAEAEQAKAGgCAOIgCAIIAFgCQAGARgFAOQgEgGgJgCIgEgBQgPgDgOAAIgBAAIAAAAIgDAAIgBAAIABAAIADAAIAAAAIABAAQAOAAAPADIAEABQAJACAEAGIgBADQgDAEACAFQADANgIAMQgQAbgFgaQgBgIADgIIAAgBIAAgBIAAgBIgBgFIABAFIAAABIgBABIgNAIQgOAKgQADIgCADQgIARgKAOQgLAPgOAMIgcAaIgbAcIgCACIgWAaIgYAcIgXAZIgaAdIgXAaIgXAdQgMAOgPALQgMAJgNAAIgLgBgADgiPQgTgGgUgCQAUACATAGg");
	this.shape_6.setTransform(77.7,68.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AhfAUQgSACgUAAQgTAAgTABQgUABgOgSQANgKAQgDQAUgFATADQAUACAUgCQASgCAWAGIgWAUIgLAKgAAPAOQgLgCgLABIgBgEIgBgIQAAgDADgCQAQgKATgBQAHAAADgCIABAAIAnABIAlAAQASABASgDIAngGQAJgCAEAIIAAAAQABAEABAGQAAAGgDACQgGAFgJACQgLAAgMADQgRAFgSAAIglABIgEAAQgRgBgQgCQgRgCgMAIQgFgEgHgBg");
	this.shape_7.setTransform(96.9,49.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AFZAxQAAgKAHgHQAFgHAHgGQAIgHgFgKQgEgHgKABQgHABgHADQgIAGABAKQABAJABAJQABAIACAIQAAABABABQABAIAHAGQgCgIABgJgABqBRQAAAAABAAIAAAAQADAAgBgFQgFgSgFgTQgFgXgXAEQgTADgTACQgEABgEAAQgNgTgOgJQgRgMgNgOQgNgPgSgJQgOgIgRAAQgCAWARAMQAPAMAOANQAPAMAPAKAALCVQgBAAAAAAQgJgBgGgBQgRgCgOgIQgCAAgBABQgRAHgQAEQgTAEgSABQgUAAgUACQgTABgUACQgBAAgCABQgQACgRADQgSADgSACQgRACgRACQgTACgUACQgRACgRADQgTADgSADQgSADgTgBQgVgCgLgQQgIgKAJgKQABgBAAgBQgBgGADgJQABgFACgGQAEgNAFgNQAGgSAGgRQAGgQAGgQQAHgSAJgPQAIgPALgNQALgQAKgPQAKgQALgOQADgEACgDQAJgLAJgLQAEgFAFgEQAIgKAIgJQANgOA2ghQA2gggjBmQgKAPgKAOQgKAOgKAMQgBACgCABQgMAPgMAPQgMAPgKAQQgIAKgFANQgHARgJARQgCAEgCADQgHAOgFAOQgHASgKAPQgGAJABACQABABABAAQAPgCAPAAQATABATAAQATAAATgBQASgBASgBQAOgBAOgBQADAAAEgBQASgBASgCQATgCATgBQAUAAARgHQAKgDAKgCQABgCACgFQAKgRAGgSQAHgTAHgSQAHAAAIAAIAAAAQAHAAAIAAQAPgBAPgBABqBRQgDgBgGgFQgPgLgUgDQgDgBgDADQgCADgCAEABJBkQAOACALANQALAMAMAMQACABABACQAOAMAPALQAOALAQAJQAKAFAJAGQAIAGAIAAQAEAAAEgGQAEgEABgEIAAAAQACgJgIgFQgQgKgRgKQgPgKgOgMQgNgNgPgMQgOgMgOgNQgBgBAAAAAAlBAQAHAEAGAFQAJAHAHAJQAFAGACAFAALCVQACgCABgDAALCVQAAABgBAAQAAAAAAABQgIAEgDAHQgOAWAdgJQAOgFAGgLQACgFAFgBQABgBABgBQABgHgFgIQgLgPgPgMAArCXQAOgHAGgRQABgDABgDQALgKgDgLAA6B9QgKgQgOgQAEJC7QAKgBAJgDQADgBADgCQACgBABgBQAIgFAGgHQAGgHACgKQACgIAGgHQAFgHAHgEQAHgEAIgEQAIgEAHgDQACgBABABQgHACgDAFQgFAGgDAHQgDAHAAAIQAAAJgDAJQgEAKgHAJQgEAFgEAFQgCACgCACQgCACgCABQgIAHgLgCQgJgCgIgCQgDAAgCgBQgGAAgFgCQgBAAgBAAQgLgCgKgDQgEgCgGABQAHgEAIABQAJABAJAAgAEiBQQAAgJgDgIQgFgLgKgBQgNgBACALQACAIAIAGQAIAFAEAIQACAFAAAFQAEgIABgKgAGWBlQADgBAEgDQAHgFAIgHQAGgFAEgHQAGgIAIgGQAHgGAKAAQAFABACAFQAEAKgFAJQgFAHgGAFQgIAGgJACQgJACgKABQgIACgIgBQgEgBgCAAQgEACgDAA");
	this.shape_8.setTransform(82.3,68.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhGBnIgRgDIgGgBIgKgCIgCgBIACgIQAKgBAJgDIAGgDIADgBQAIgGAGgHQAGgHACgJQACgJAGgHQAFgHAHgEIAPgIIAPgGQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQgHABgEAFQgEAGgDAHQgDAHAAAIQAAAJgDAJQgEAKgHAJIgJAKIgDAEIgEADQgGAGgIAAIgFgBgAArADIgHAAIAIgEIAOgLQAHgGAEgHQAGgHAIgHQAHgGAKABQAFAAACAFQADAKgFAJQgEAHgGAFQgIAGgKACIgSADIgJAAIgHAAgAhWgJQgEgJgHgFQgIgFgCgJQgCgLANABQAKABAFALQADAIAAAJQgBAKgEAIQAAgEgDgFgAgihAIgCgSQgBgKAIgFQAGgFAIgBQAKAAAEAIQAEAJgHAHIgNANQgGAHgBAKIgHABIgDgQg");
	this.shape_9.setTransform(119.2,78.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("AkBDFQgUgCgMgQQgIgLAKgKIABgBQgBgHACgIIADgLIAJgbIANgjIAMgfQAGgSAJgQQAJgOAKgOIAVgfIAVgeIAGgGIARgWIAJgKIARgSQAMgOA2ghQA2ghgjBnIgUAdIgUAaIgDADIgYAeQgMAPgKAPQgIALgFAMQgHASgJARIgEAHQgHAOgFAOQgGASgLAPQgGAIABADIACABQAPgCAQAAIAlABIAmgBIAkgDIAcgCIAHAAIAjgDIAngDQATgBASgGIATgFIADgHQAKgRAGgSIAOglIAPAAIAAAAIAQgBIAegBIAIgBIAmgFQAXgEAFAXIAKAlQABAFgDAAIAAAAIgBAAQgDgBgGgFQgPgMgTgDQgEAAgCADIgEAGIgDAEIgMgJIAMAJQAKAHAHAJQAEAFACAGQADALgLAKIgHADIAFADQgGARgNAHIAAgCQAAgGgFgHQgLgPgPgMQAPAMALAPQAFAHAAAGIAAACIgDABQgEACgCAFQgHALgOAEQgdAKANgWQAEgHAIgFIABAAIAAgBIADgFIgDAFIgBAAIgQgCQgQgCgPgIIgDABQgRAHgQAEQgSAEgTABIgoABIglAEIgDAAIgiAGIgjAFIgjADIgnAFIgiAEIglAHQgNACgNAAIgLAAgADyCCQgKgQgNgPQANAPAKAQg");
	this.shape_10.setTransform(63.8,68.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("ACGB+QgJgHgKgFQgQgIgPgLIgcgXIgDgDQgMgMgLgMQgLgNgPgCQgBgGgEgFQgHgJgJgHIACgDIAEgGQADgDADAAQATADAPALQAGAFADABIAAAAIAdAaIAcAZQAOAMAPAKIAhAUQAIAFgCAIIAAABQgBAEgEAEQgEAFgEABQgIgBgIgFgAhYgpIAAgHQgPgKgPgOQgOgMgQgMQgQgMACgXQARABAOAIQASAJANAPQANAOAQAMQAQAKANATIgfABIgNABIgCAAg");
	this.shape_11.setTransform(89.1,75.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).wait(3));

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AgWgFQAIgFAHgGQAGgGAIgCQAIgCAGAGQACADAAADQAAAKgGAGQgFAHgIADQgHAEgIADQgGACgCAF");
	this.shape_12.setTransform(76.5,41.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgVATIgBgQIAAgIQAIgFAHgGQAGgGAIgCQAIgCAGAGQACADAAADQAAAKgGAGQgFAHgIADQgHAEgIADQgGACgCAFIgCgHg");
	this.shape_13.setTransform(76.5,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[]},3).wait(6));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.3,1,1).p("AgDgBQADACAEAB");
	this.shape_14.setTransform(46.3,142.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("AHNoVQgBAJgCAKQAfglgOgvQgNgsgogTQgIgDgIgEQgIgFgHgDQARgEAQADQAMABAMAFQARAHAIAPQgFgQgOgMQgGgFgHgDQgJgGgJgFQAbgPAbAPQgRgXgkgJQgbgHgaAHQAxgdA0AIQgmgUgtARQgMAGgLAFQALgqAugUQhCAHglA3QANg0AvgdQhFALgRBKQgDAMABANIAAAAQAHAFAFAHQgKAFgCgRQgMgJgRgEQgdgGgdAJQgbAJgUAUQgSASgMAVQgCADgCAEQgHANADAOQAAAAgBAAQgLAIgNAGQgXgMAMgXQAJgUANgCQgEgagTgWQgUgVgZgJQgagKgbADQgdAEgUAaQgMAJgKAMQgJAJgIALQgFAHgDAIQgCAGAAAHQAFgIAFgEQgCAGgCAHQgFASgBAXQAAALACALQACAHADAGQAAgHABgIQADgJAGgGQgFAeAPAdQAGAMAKAKQADgEAAgHQAAgKAHgGQgCAdAWAVQAIgKAEgGQALAYAUATQALAKAMAHQAEgTABgVQABgKAEgJQAHAHAFAJQADAHAFAGQAEgZgBgbQgBgrAagZIABAAQABABABABQAFAIgFAPQgIAZAMAXQAHAMALAAQAFAMAFAMQAFAOAMAHQAAABAAAAQADAWgIASQgJARgPAIQgQAHgQAJQgPAJgMANQgLANgEARQgFATgFATQgEATgCASQgBADAAACQgBADAAAEQAAAAAAAAQACAKBbAmAFwqWQAaAOAaAPQANAHAHANAFcqWQAZARALAbAFTqzQgBgUAOgLAEHpRQARgHADgaQAEgjAdgCQAYAZABAeQABAcgOAVQAjgOALgkQAGAkgPAqQAXgPACgfQAIAYgCAZQAYgVgGgnQAWAWADAgQAPgRgDgWQALASgBAWQAAAAAAAAQgJAHgHAGQgHAGgFAIQAEAGgEAJQAAABAAAAQAAABgBABIAAAAQgBADgCADQgLASgRAOQgFAFgGADQAKAGAHAGQAHAGAFAGQAIAJgIAJQgEAEgGABQgJACgJAAQgCAAgCgBQgIgDgIgDQgFgDgFgDQgJADgGAFQgHAFgGAHQgHAGgJAGQgIAFgKACQgJACgKABQgDAAgDAAQgHAAgHgCQgIgCgJgBQgIAAgIgCQgJgBgKgBQgKgBgIgFQgKgFgHAGQgIAGgGAIQgDAFACAEQgGASACATQABASgBASQgCATgBASQAAAUAFASQAAABAAACQAFARACASQACATgHARQgIASgOAOQgNAOgNAMQgOANgLAIQhiB2gNALQgOAKgMAMQgOAOgPAOQgNAMgMAMQgBABgBABQgFAGgFAJQASgCARgCQASgBATgCQATgCATgDQATgEATgEQASgDAHAPQABADABADQACAIAEAHQAOgCAPgDQARgEADARQATgBASgCQAUgCATgCQASgCASgDQASgDATgFQAFgCAGgBQALgCANAAQATAAATAAQASABATAAQATABARAJQANAHADAUQAEAVgLARQgKAOgHAOQgLANgMANQgLAMgMAMQgNANgNAOQgNAOgMAQQgKAOgJAPQgKASgOANQgNANgJAQQgKAQgKAPQgKAQgKAQQgKARgNAPQgLANgJAPQgKARgLARQgMASAKAQQAEAGAIABQASAFATgBQATgBASgHQATgGARgHQARgIAFgUQAGgaAPATQAJAMgCAKAD1o9QAcANAVATQAWATAZAPQAJAGAJAGQgDAHgLAFQgWALAGAWQAFAOAPACQAFABAFAAQACAAACAAQAOgBAMgIQABAAAAAAAFom4QgGgDgFgHQgHgJAGgJQAFgIAJgDQAJgDAIgFQABAAABgBQAHgEAHgEQAJgFAJACQAHABAEAFAGxn6QgDgGgMgDQgcgGgLAVQAAAFgDgBQgCAAgFgEQgFgIgLgHQgXgRgXgRQgYgTgUgZAF8nJQALAAAGgIQACgCACgDQAAAAAAAAQgGgEgHADQgJACgCAJQAAADADAAgAFpmWQgDgDgDgDADNqsQgVAVAIAcAC3qvQgYAYALAbACkokQgGgJADgLQALgpA0gBQAVgBABAUQAJABAIgDQAAAAAAAAAD2pPQAAABAAABQgBAHAAAIQAAAAAAABQAAAJgEAGADwqGQgDAJgDAIADfqdQgLAUACAVADSpLQAKAAAJAGABEqaQgOgWgVgQQgYgTgcADQgQACgQAEAAOqTQgXAAgRASQgUAWgIAdAAaqrQgYgJgWALQgbANgTAXQgKANgHAPAAyp4QgMAWgCAYQgCATACATABfpeQgEACgEACAAmqIQgWAPgKAZQgLAbABAeACInaQABABAAAAQABABABAAQgBgBAAgBQgFgSAEgTQAFgcAWgJQAZAYAagRAEBm0QgBAIgBAIQAAACAAADQAAAFAAAEQAAAJABAIQABADABADQAAACABABQACAFADAEQAEAFAGACAC3o+QAOgNANAAQgEANADAMACMpZQgHANABAPACAqOQgMgKgKABACCpgQgVATADAcAiOjcQACAaAcAJQARAGARgIQATgJAFgVQAFgXAUgNQADgBADAAQgJgHgIgBQgJgCgKAFQgQAJgNAOQgOAOgSAFQgMAEgKgHgAleEKQgIgJgEgMQgFgTACgTQACgTAKgQQAKgRAMgPQANgPANgOQAMgNANgMQANgOARgIQAAgDAHgCQAGgCAHgDIAAAAQALgGAMgGQARgJAPgMQAOgKANgLQAPgMAPgOQAOgMAKgPQAKgOAMgMQANgNAKgOQALgQAKgQQAJgRAHgSQAGgRAKgOQAAAAAAAAQgJgMADgKQgLABgGgGQgIgKADgIQAAgCABgCQAAAAAAAAQAAAAAAAAQACgDACgDQABgBACgBAjmA2QgLAQAGAUQAFATAMAQQALAQASAEQATAEATgBQASAAAbABABsjNQAUAGAUgDQADgBAFgBAAQkEQgEAEgDAEQgHgZgRAPIAAAAQAAAAAAABQgBAAAAAAIAAAAIAAAAQAAAAAAgBQgOACgIgFQgJgGgDgJQgNghAZgcQgIATANAOQAGAFAEAHQAHAMAAAWIAAAAAAJj8QgIAMgDANQAAABAAAAABVg2IAAAAQhMiQgDgDQgBgCgBgBAA6CdQATAEAUgDQASgDASgCQARgDARgDQASgDATgCQATgBATgEQAagEABAWQAAAGADADADrD9QAIgCAJgBQASgCASgEQAFgBAFgBQgIAPgNALQgPANgNAOQgNAPgLAQQgLAPgIARQgIAQgGARQgGAQgHASQgGASgJARQgIARgFATQgFARgKAPQgLAPgIARQgIAPgLAOQgLAOgLAOQgEAFgEAEQgBABgBABQgHAJgIAJQgLALgKAMAB/ENQAGgBAGgBQATgDATgCQATgBATgEQAKgDAKgBQgKAQgLAMQgMAMgMALQgOANgNAOQgMANgMAOQgLAOgNANQgNANgNAPQgMAOgKAPQgKAOgJAOQgKAPgJAPQgLARgLAQQgJAQgKAQQgEAHgKAGQAAADAAACQAAAJAAAIQAAAKAAAKQABATABATQAAALABAKQABAIABAIQADATABASQAEgDAFgCQAAABAAAAQACACAAADQAAAIAGAGQASAUAdgLQAGgDAEACQADACABAFQABAGgFAAQggABgaANQgNAGgFAQQgCAIgIAEQgTAJgVgCQgbgCgcAAQgSAAgSgFQgdgIgfAAQgXABgWgBQgcAAgcAAQgMAAgLAAQgMgBgIgGQgEgEgDgGQgDgHgMgDQgJAFgSgJQgXgKgRgSQgCgCgCgCQgFgEgGgBQgDAAgCgBQACABABABQAFACAIACQgZgGAEAAQADAAACAAQgHgCADAAQACAAACAAQACgBACAAQAPgCAOgHQAPgJAQgHIAAAAQgBgTABgUQABgTACgUQACgRABgSQABgRACgSQABgTACgUQACgTABgUQAAgTgCgUQgCgSgEgRQgEgTgDgTQgDgSgEgSQgFgQgCgRABjESQABgCABgCQAHgSACgTQADgTAAgUQAAgEgBgDAh8C+QAUABATgBQATgCATACQARABASgBQAPgBARgDQARgDASgDQAEAAAEgBABjESQABgBABAAQANgCANgCAgTEvQANgCAMgDQAQgDAQgEQASgDATgDQAIgBADABQAIgDAFgIAgTEvQAIAGABAJQABADgBADQAAAEgCADQAAACAAABQgBAMAAAMQgBASgBASQgBATgBASQgBAUgEATQgEASAAASQAJgFAEgHQAIgRAMgOQANgOAOgPQAOgOAIgSQAIgQAIgSQAIgSAHgSQAGgSAKgQQAKgQAOgNAgMFLQgBACgCABQgNALgWgDQgRgCgRgBQgSgBgRAAQgSAAgSAAQgSgBgSABQgTAAgSACQgSABgRgBQgTgBgTgEQgUgEgTgBQgSgBgQgGQgTgHgSgJQgEgCgBgDQgBgDADgDQAKgPATgHQARgHASgBQAEAFAFAFQAQAMARAJQAQAIASAGQARAEASAAQARAAASACQAQABARgDQARgDARgBQARgCASABQARABASgCQASgCASgCQAGgBAGgBAgaH6QAAACAAABQABAUAAATQgBAPAAAPAgSJcQARAJAQAHQATAHAUABQAGAAAGAAAEhKGQAGgNAHgDQAAAAABAAQAHgCAHAIQADADAAADQABAAAAABQADAAAEAEQAFAEAAAJAEtKTQAIgSAKABQABAAABABAh9C0QABAFAAAFQgBAKgDAKQgFATgJARAh2CmIAAABQgDAGgEAHQgCAEgCADQgEAGgEAGQgMAOgQAJQgIAFgHADAkUF4QAEAOADAPQADARAAASAl3FmQAIAOADAQQADAPADAQQAEATADASQADAUACATQABATAAASQgBATgIARQgIATgDATQgDARALARQAEAGgBAHAlKFkQAAAJAAAJAk4GaQACAQABAPQABAQAAAQQAAAPAAAOQAAAQgBAPQgBAUAFATQABADACADQAOAPgNASQgLARACATQABAOAQAFQAHAWgEASQgCAKAEAHAhrL9QgBAKgJAKQAAgKgFgJQgGgMgIgHQgDAUgTALQgGAEgFAEQgBgFgBgFQgEgQAGgQQACgEABgFQgEACgDADIAAAAQgNAKgIAPQgHAMgDANQgMgFgFgQQgIAEgJAKQgEgTACgTQABgJAEgFQgGAEgFAEIAAAAQgLAJgJALQgHAJgHAHQgDgLgCgLQgCgHgBAAQgBAVgUANQgHgJgBgNQAAgJAAgDQgHAEgHALQgLgEgDgMQgCgMACgNQgLAGgEAMQgEALgHACQgBgKgEgJQgGgMgFgLQgDgFgCgFQABAFABAGQAAABAAAAQABAUgPAMAhrL9QABgCAAgDAhrL9QABAEACAEQAGANAKALQgCgJACgKQADgZAQgTQADgDADgDQgBACAAADQgBAGABAHQAAAMADANQAAAEACAFQADgEADgGQAGgLACgMQACAFACAEQAFgBADgHQAGgKAKgGAjaJ/QAAASABASQABAUAAATAi6K1QAAALADALAmYLkQAAgPgBgOAE8KzQgBABAAAAQgPAJgPAHQgRAJgUABQgUABgTgEQgTgFgTgGQgTgGgTAIQgQAIgPANQgPAOgTAAQgFAAgFAAQgOgBgNgEQgWgGADgUAE8KzQgBAAAAAAQgDgBgCgCAAJLEQAFgSAMgPQACgDACgCQAAAAAAgBQAAAAAAAAQgBAAgBgBQgHgCgIACQgRADgTAIAA/KvQgCANAMAAAEqDyQAOgDAOgDQAOgDAMgHAE2KhQALgTAMAGQAAAAAAAAQADABACADQAIAHgDAIQgHASgUgGAFJq0QgQgPAFgT");
	this.shape_15.setTransform(48.6,82.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CC00").s().p("ACIA5QgbgCgcAAQgSAAgRgFQgegJgeABIgtAAIg4gBIgXAAQgLAAgIgHQgFgEgCgFQgEgHgLgEQgJAFgSgIQgXgLgRgRIgFgDQgFgEgGgBIgEgBIgBgDIAFAAQAOgCAOgIQAPgJARgGQABAOgBAPIAEADQAPgNgBgTIADgCIALAWQAEAKABAKQAHgDAEgLQAFgLAKgGQgCAMADAMQADAMAKAFQAHgMAHgDIABAMQABALAGAJQAVgNAAgTQABAAACAHIAFAVIAPgQQAJgLAKgIIAGAGQgBATADASQAJgKAIgEQAFAPALAFQADgMAHgLQAJgPANgKIAEAEQgHAPAEAQIACAKIAMgIQASgMAEgSQAIAHAGALQAFAIgBALQAJgKACgJIACAHQAGANAKALQgBgJABgKQAEgZAQgTIAFgFIgBAFIAAANQABAMACALIACAKIAGgLQAHgKABgLIAEAJQAFgCAEgGQAFgLAKgGIAKgDIABAFQABAIAGAFQATATAdgKQAGgCADACQAEABABAGQABAEgGAAQgfACgcANQgMAFgFARQgDAIgIADQgQAIgSAAIgGAAg");
	this.shape_16.setTransform(28,159);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#996600").s().p("ABwDyIgCgIIAAgEIAAgCIAAACIAAAEQgBAJgKAKQABgKgFgJQgGgLgIgHQgEATgSALIgMAIIgCgKQgEgQAHgPIACgJIgGAEIAAAAQgNALgJAOQgHAMgDANQgMgFgEgQQgIAFgJAJQgDgSABgTQABgJAEgGIgKAIIgBAAQgKAJgJALIgPAQIgFgVQgCgIgBABQAAAUgVANQgGgJgBgNIgBgLQgHADgHAMQgKgFgDgMQgDgMACgNQgKAHgFALQgEALgHACQgBgKgEgJIgLgWIgFgKIACAKIAAABQABAUgPANIgEgEQABgOgBgOIAAgBQgCgTABgTIAEgoIADgjIACgiIAEgnIACgmQAAgUgBgTQgCgTgEgRQgFgSgDgUQgCgRgFgTQgEgQgDgQIAHgCQABADAFABQARAJATAHQARAGARABQAUABATAEQATAFATABIAGAAIAHAAIABAAIAAAAIALAAIABAAIADgBIAGAAIAkgCQASgBASABIAkABIAjABIAiACIABABIAHAAIAAAAIAAAAQARAAALgJIACgCIgCACQgLAJgRAAIAAAAIAAAAIgHAAIgBgBIgigCIgjgBIgkgBQgSgBgSABIgkACIgGAAIgDABIgBAAIgLAAIAAAAIgBAAIgHAAIgGAAQgTgBgTgFQgTgEgUgBQgRgBgRgGQgTgHgRgJQgFgBgBgDQgBgDADgEQALgPASgHQARgGASgBQAEAFAGAEQAPAMASAJQAQAJASAFQARAEARAAQASABAQABQARABAQgDIAigEQASgCARABQASACARgDIAkgEIANgBQAIAGABAIIAAAHQgBAEgCADIAAADIgBAYIgBAkIgDAlQgBATgEATQgEASABASIAAAEQABATgBATIgBAdIAAAGIAAARIABAUIABAlIACAWIACAPIADAlQgJAGgGAKQgEAHgFABIgEgIQgBALgHALIgGALIgCgKQgCgMgBgMIAAgOIABgEIgFAFQgQATgEAZQgBAKABAKQgKgLgGgNgAhHC/QgCgEAAgGIABgHIABgMQAAgNgEgPQgQgEgCgOIAAgGQAAgQAKgOQAGgJAAgJQAAgIgHgIIgEgGQgEgPAAgQIABgIIABgdIAAgdQAAgRgCgQIgDgeIADAeQACAQAAARIAAAdIgBAdIgBAIQAAAQAEAPIAEAGQAHAIAAAIQAAAJgGAJQgKAOAAAQIAAAGQACAOAQAEQAEAPAAANIgBAMIgBAHQAAAGACAEgAAhC3QgDgKAAgMQAAAMADAKgAAACPIABAnIgBgnIgBgjIABAjgAiIB6IAAgDQAAgGgDgFQgKgNAAgOIABgHQAEgTAIgTQAHgQABgUIAAgLIAAgZIgFgmIgHglIgGggQgDgQgJgNQAJANADAQIAGAgIAHAlIAFAmIAAAZIAAALQgBAUgHAQQgIATgEATIgBAHQAAAOAKANQADAFAAAGIAAADgAgxhaIAAgFQAAgQgDgPQgCgPgFgNQAFANACAPQADAPAAAQIAAAFgAhxicIAAgSIAAASg");
	this.shape_17.setTransform(26.9,135.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AhnFJQgRgBgSAAQgRAAgRgFQgSgFgQgJQgSgJgPgMQgGgEgEgFQgHgKgEgMQgGgSADgTQACgTAKgRQAJgRANgOIAagdIAZgaQANgNAQgIQABgDAHgDIANgFQgLAQAFAUQAGAUALAQQALAPATAEQASAEATAAIAuAAIgDADQgFAFgEAKIAhgEIAlgDQAUgCATgEIAmgHQATgEAGAPIACAGQACAJAEAGIAdgEQASgEADARIAAAHQAAATgCAUQgDATgHARIgCAEQgFAJgIADQgDgBgIABIglAGIggAHIgZAFIgNABIgkAFQgRACgRgBQgRgBgSABIgiAFQgMABgLAAIgKAAgAgaDfQgGATgJARQAJgRAGgTQADgKAAgKIAHAAIAGAAIABAAIAAAAIAMAAIAMgBQATgBATABQARABASgBQARgBAQgDIAjgFIAIgCIgIACIgjAFQgQADgRABQgSABgRgBQgTgBgTABIgMABIgMAAIAAAAIgBAAIgGAAIgHAAIAAgDIAAgHIAHgOIAAAAIAAAAIgHAOIgEAHIgIALQgMAPgRAJIgPAIIAPgIQARgJAMgPIAIgLIAEgHIAAAHIAAADQAAAKgDAKgAgXDBIAAAAgAC7gpQhNiRgCgDIgDgCIAAgBQgJgLADgKIAAgCQAEgNAIgLQgIALgEANIAAACQgMAAgFgGQgIgJACgJIACgDIAAgBIAAAAIAEgFIACgCIABgBIAAAAIAAAAIABAAQARgPAIAZIAGgIIgBAGIAAABQACAKBcAmIAAgBQAUAHATgEIAJgCQAEASADASQACASgIARQgIASgOAPIgaAaIgYAVgAgKisQgcgJgDgaQAKAHAMgEQATgGANgOQAMgNARgJQAJgFAJABQAJACAIAHQgDgBgDACQgTANgGAXQgFAUgSAJQgKAFgKAAQgGAAgHgCgAA+j9QgIgFgEgJQgMgiAYgbQgHASANAOQAFAGAEAGQAIANgBAVIAAABIgGAAQgKAAgGgEg");
	this.shape_18.setTransform(38.5,81.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLAFQACgIAJgDQAGgCAGADIAAABIgEAEQgGAIgKAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape_19.setTransform(87.5,35.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AAIBPQgOgCgEgOQgGgWAVgLQAKgFAEgHIgSgMQgYgOgWgTQgWgTgbgNIAAgBIAAgPIAAgCQAKABAHgDIABAAQAUAZAXATIAuAiQAKAGAGAIQAEAEADABQACAAABgEQALgVAbAGQAMACAEAGQAEAGgEAKIgJgDQgFgFgGgBQgKgCgIAFIgOAIIgCABQgJAFgJADQgIADgFAIQgHAJAHAJQAGAHAFADIAAAHIgLgBg");
	this.shape_20.setTransform(82.7,30.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdAbQgFgEgGgHQgHgJAHgIQAFgHAIgDQAJgDAJgFIACgBIANgJQAIgFAKADQAGABAFAFIAJACIAAABIgBABIAAAAIgEAHQgLAQgQAPQgGAEgGAEIAAAAQgLAHgPABIgDAAgAAAgEQgKADgBAIQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAQAJAAAHgIIADgEIABgBQgEgCgDAAIgFABg");
	this.shape_21.setTransform(87.6,35.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("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");
	this.shape_22.setTransform(59.8,86.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9900").s().p("AizCoQgVgUgLgYIgMAQQgWgVACgdQgHAHAAAKQAAAGgDAEQgKgKgGgLQgPgeAFgeQgGAGgDAKIgBAOIgEgNQgDgKAAgMQABgWAFgSIAEgNQgFAEgFAIQABgHABgGQADgIAFgHIARgUQAKgLAMgKQAUgZAdgEQAcgEAaAKQAZAJAUAWQATAVAEAbQgMABgKAUQgEAHAAAHQAAANAPAIQgPgIAAgNQAAgHAEgHQAKgUAMgBQAKgCAMAKIgEAHQgFAJAAAKIABAHIAAAAQgMAIgNAHQANgHAMgIIAAAAIgBgHQAAgKAFgJIAEgHQAMgVASgRQAUgVAagIQAdgKAdAGQARAEAMAKQADAQAJgFQgFgGgHgFIAAAAQgBgOADgMQARhJBFgMQgvAdgNA1QAlg4BCgHQguAUgLArIAXgMQAtgRAmAUQg0gHgxAcQAagGAbAGQAkAJARAYQgbgQgbAQIASAKIANAIQAPAMAEAQQgIgOgRgIQgLgEgMgCQgRgCgRAEIAPAHIAQAHQAoAUANAqQAOAvgfAlQADgJAAgJIAAgBQABgWgLgSQADAWgPARQgDgfgWgXQAGAngYAVQACgZgIgXQgCAfgXAPQAPgrgGgkQgLAkgjAOQAOgVgBgcQgBgdgYgZQgdACgEAiQgCAagSAHIAAAAQgHADgKgBQAAgTgWAAQgzABgLAqQgDALAGAIQgWAKgFAbQgDATAEASIAAACIgCgBQgLgIgGgNIgKgZQgLAAgHgLQgMgYAIgZQAGgOgGgJIAIgDIgIADIgCgCIAAAAQgbAZABArQABAbgEAZQgFgGgDgGQgFgJgHgIQgEAJgBAKQgBAVgEATQgMgHgLgJgAiSBaIgBgVIABgQQACgZAMgVQgMAVgCAZIgBAQIABAVgAi7BYIAAgFQAAgcALgZQAKgZAWgOQgWAOgKAZQgLAZAAAcIAAAFgAhGBOIAAgIQAAgXASgRQgSARAAAXIAAAIgAgwBBIAAgFQAAgMAGgLQgGALAAAMIAAAFgAjRgBQgUAUgIAdQAIgdAUgUQARgTAYAAQgYAAgRATgADtAGQANAGAHANQgHgNgNgGIg0gdIA0AdgAjLgqQgbANgTAXQgKAMgHAPQAHgPAKgMQATgXAbgNIADgBQALgFAMAAIAAAAIABAAQAJAAAJADIACABIgCgBQgJgDgJAAIgBAAIAAAAQgMAAgLAFIgDABgADJAUQgLgagZgRQAZARALAagAAfAKIAAgHQAAgQAJgRQgJARAAAQIAAAHgAAzAJIAGgQIgGAQgAAJADQgCgGAAgHQAAgTAPgQQgPAQAAATQAAAHACAGgAgMACQgDgHAAgJQAAgRAPgQQgPAQAAARQAAAJADAHgAiVhAQAVAPAOAXQgOgXgVgPIgBgBIAAgBQgUgPgXAAIgBAAIAAAAIgIABQgQABgQAEQAQgEAQgBIAIgBIAAAAIABAAQAXAAAUAPIAAABIABABIAAAAgACcg0IAAgCQAAgSANgLQgNALAAASIAAACgACSg0QgMgMAAgOIABgJIgBAJQAAAOAMAMg");
	this.shape_23.setTransform(66.9,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-1,125.8,166.7);


(lib.scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("anobjectivecomplementisanounoradjective");
	}
	this.frame_87 = function() {
		playSound("twiggspaintedthegoalpostred");
		playSound("Synth_Blip_Down");
	}
	this.frame_124 = function() {
		playSound("theobjectivecomplementisred");
	}
	this.frame_145 = function() {
		playSound("Cowbell");
	}
	this.frame_162 = function() {
		playSound("theybuiltthegoalpostsstronger");
		playSound("Synth_Blip_Down");
	}
	this.frame_202 = function() {
		playSound("theobjectivecomplementisstronger");
	}
	this.frame_225 = function() {
		playSound("Cowbell");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(84).call(this.frame_87).wait(37).call(this.frame_124).wait(21).call(this.frame_145).wait(17).call(this.frame_162).wait(40).call(this.frame_202).wait(23).call(this.frame_225).wait(45));

	// Txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAoQgLgFgIgIQgMgMgCgOQgCgOAMgMQANgNAQgCQAQgDANANQAJAJADAJQAFAMgIAHQgGAGgLgCQgFgBgNgGIgYgIQAAAEACAFQACAFAFAFQAHAHAGABQAHACADADQAFAFgFAFQgDAEgGAAQgDAAgFgCgAgKgSIAQAGIARAGQgCgGgFgFQgFgFgGAAQgGAAgJAEg");
	this.shape.setTransform(233.9,334.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAABBQgDgBgDgDQgFgFADgGQADgGAGgJIALgNIADgDIAFgEIAEgFQACgDgCgCQgFgFgLAAQgFAAgKADQgTATgFACQgHACgEgEQgDgDgBgEQAAgEADgDIADgCIAPgNIAigjIACgBIAIgIIAEgFIAEgFQADgDAFAAQAEAAADADQAFAFgEAIQgCAEgGAGIgLAKIgLAKQAIAAAGADQAGACAFAFQAJAIgBAJQgBAGgHAJIgMANIgJALIgJAMIgBACQgDADgDAAIgBAAg");
	this.shape_1.setTransform(227.7,327);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglAnQgDgDAAgEQAAgFACgCIAGgFIAGgGIAagbIgJgKQgGgHAGgGQADgDAEAAQADgBADAEIAIAJIAGgGIAEgFQADgDAFAAQAEAAADADQAHAIgNANIgEAEIAFAFIAIAIQADAFgFAFQgDADgEAAQgEAAgDgDIgDgCIgCgEIgFgEIgaAcIgCADIgDADQgIAIgFAAQgEAAgDgDg");
	this.shape_2.setTransform(223.2,321.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AAUA3QgFADgFABIgKABQgQAAgLgKQgLgMAAgQQAAgTALgMQALgMARAAQAFAAAEABQAFACADACQABgZABgJQABgJAJAAQAEAAADADQACACAAAFIgBAfIgCAgQAAAaACAJIAAACQAAADgDADQgDADgEAAQgFAAgDgFgAgOADQgGAHABAMQAAAIAFAFQAGAGAIAAQAFAAADgBIAGgFIADgCIAAgbQgDgEgEgCQgEgCgFAAQgKAAgFAFg");
	this.shape_3.setTransform(335.8,296.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AgYAfQgNgJAAgRQAAgRAKgNQALgOASAAQAMAAAIAEQAMAFgBAMQABAIgKAGQgDADgNAFIgXAKQADAEAFACQAFACAGAAQAJAAAHgEQAGgDAEgBQAIABAAAHQAAAIgNAFQgKAFgLAAQgRAAgLgJgAgJgRQgFAFgDAJIAQgIQAJgDAGgFQgFgDgHABQgHAAgEAEg");
	this.shape_4.setTransform(327.2,298.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AgcAmQgCgDgBgEIAAgvIAAgHIABgGQAAgEACgDQADgDAEAAQAJAAABAJQAMgKAQAAQAOAAAAAUIAAAEQgBAMgJgBQgJABAAgKIAAgHQgQACgHAOIAAAkQAAAEgDADQgDADgEAAQgFAAgCgDg");
	this.shape_5.setTransform(319.6,298.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006600").s().p("AgGAzQgDgCAAgEIAAgIIAAgIIgBglIgOgCQgJgBAAgIQAAgEADgDQADgDAEAAIAMABIAAgHIAAgIQAAgEADgDQADgCAEAAQAKAAAAASIAAAGIAHgBIAMABQAGADAAAGQAAAFgDACQgDADgFAAIgDAAIgEAAIgHABIACAlIAAADIAAAFQAAAQgLABQgDAAgDgDg");
	this.shape_6.setTransform(253.9,297.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006600").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_7.setTransform(246.6,298.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006600").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_8.setTransform(238.9,298.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006600").s().p("AgeA7QgCgDgBgEIAAgbIAAgdIgBgbIgBgOQABgGACgEQADgGAFAAQAFAAACADQADADAAAEIAAAAIAKgDIAJgCQARAAAHAOQAHALAAARQAAAQgKAKQgJAMgRAAIgNgCIAAAeQAAAEgDADQgCACgFABQgEgBgDgCgAgEgiQgFACgEAFIABAcQAGADAGAAQAIAAADgEQAEgGAAgIIgBgNQgCgJgHAAQgFAAgEACg");
	this.shape_9.setTransform(231.3,300.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006600").s().p("AgGA6QgDgDAAgFIAAhkQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAABgQAAAOgKAAQgDAAgDgCg");
	this.shape_10.setTransform(225,296.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006600").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_11.setTransform(218.9,298.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006600").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_12.setTransform(210.6,298.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006600").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_13.setTransform(202.8,300.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAVA3QgGADgFABIgKABQgRAAgLgKQgLgMABgQQgBgTALgMQAMgMARAAQAFAAAEABQAFACADACQABgZACgJQAAgJAJAAQAEAAADADQADACAAAFIgCAfIgCAgQAAAaACAJIAAACQAAADgDADQgDADgEAAQgFAAgCgFgAgOADQgFAHAAAMQgBAIAHAFQAFAGAIAAQAEAAADgBIAHgFIACgCIAAgbQgCgEgEgCQgEgCgFAAQgJAAgGAFg");
	this.shape_14.setTransform(174.9,296.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgYAfQgMgJAAgRQgBgRAKgNQALgOASAAQAMAAAIAEQALAFAAAMQAAAIgJAGQgEADgMAFIgXAKQADAEAFACQAFACAFAAQAKAAAHgEQAGgDAEgBQAHABABAHQAAAIgNAFQgKAFgMAAQgQAAgLgJgAgJgRQgFAFgDAJIARgIQAIgDAGgFQgFgDgHABQgHAAgEAEg");
	this.shape_15.setTransform(166.3,298.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgGAzQgDgCAAgEIAAgIIAAgIIgBglIgOgCQgJgBAAgIQAAgEADgDQADgDAEAAIAMABIAAgHIAAgIQAAgEADgDQADgCAEAAQAKAAAAASIAAAGIAHgBIAMABQAGADAAAGQAAAFgDACQgDADgFAAIgDAAIgEAAIgHABIACAlIAAADIAAAFQAAAQgLABQgDAAgDgDg");
	this.shape_16.setTransform(158.7,297.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAPAiIgCgQIgBgOIAAgGIAAgHIAAgCIABgDQAAgHgDABQgHgBgFAJQgGAHgDAMIgBAHIAAAGIgBAGIAAAHQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgHIAAgGIABgUIABgTIAAgGIgBgHQAAgEADgDQADgCAFAAQAJAAABALIAAABQALgLAKAAQAOAAAGALQADAJAAAPIAAAFIAAAEQAAAGACAIIABAPQAAAEgDADQgDACgEAAQgJAAgBgIg");
	this.shape_17.setTransform(151.3,298.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_18.setTransform(145.3,296.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_19.setTransform(138.9,298.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgeA7QgCgDAAgEIAAgbIAAgdIgBgbIgCgOQAAgGADgEQADgGAGAAQADAAADADQADADAAAEIAAAAIAKgDIAJgCQARAAAIAOQAFALAAARQAAAQgJAKQgKAMgQAAIgMgCIAAAeQAAAEgDADQgDACgEABQgFgBgDgCgAgDgiQgFACgFAFIABAcQAGADAGAAQAHAAAFgEQADgGAAgIIgBgNQgCgJgHAAQgFAAgDACg");
	this.shape_20.setTransform(130.9,300.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_21.setTransform(103.5,298.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_22.setTransform(95.9,300.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_23.setTransform(88,300.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AgIA1QgDgDAAgEIAAgNIgBgOIABgQIABgPQAAgFADgCQADgDAEAAQADAAADADQADACAAAFIgBAPIAAAQIAAAOIAAANQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgkQgDgEAAgEQAAgFADgDQAEgDADAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgDAAgEgDg");
	this.shape_24.setTransform(82.2,296.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AACAXQgBgGgCgSIgCADIgLAdQgBADgDABQgCAFgHABQgDgBgEgGQgEgGgCgKIgHgmIgBgLQAAgEACgCQADgDAFAAQAIAAACAHIABALIABAKIAEASIAMgkQADgKAHAAQAIAAADALIAEATIADATIAMgrQABgGAIAAQAEAAADADQAEACAAAFIgBACQgIAcgHAXQgDAGgFAHQgDAFgGAAQgJAAgGgSg");
	this.shape_25.setTransform(74.9,298.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_26.setTransform(64.5,296.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CC00").s().p("AgcAmQgDgDABgEIAAgvIAAgHIAAgGQAAgEACgDQADgDAFAAQAHAAACAJQAMgKAQAAQAPAAAAAUIAAAEQgBAMgKgBQgJABAAgKIAAgHQgQACgHAOIAAAkQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_27.setTransform(345.4,298.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CC00").s().p("AgZAfQgLgJAAgRQgBgRAKgNQALgOARAAQANAAAIAEQAMAFAAAMQgBAIgIAGQgFADgMAFIgYAKQAEAEAFACQAFACAFAAQAKAAAHgEQAGgDAEgBQAHABABAHQgBAIgMAFQgKAFgMAAQgQAAgMgJgAgJgRQgFAFgDAJIARgIQAIgDAGgFQgEgDgJABQgFAAgFAEg");
	this.shape_28.setTransform(337.4,298.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CC00").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_29.setTransform(329.3,300.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CC00").s().p("AAPAiIgCgQIgBgOIAAgGIAAgHIAAgCIABgDQAAgHgDABQgHgBgFAJQgGAHgDAMIgBAHIAAAGIgBAGIAAAHQAAAEgDADQgDACgEAAQgFAAgDgCQgCgDAAgEIgBgHIAAgGIABgUIABgTIAAgGIgBgHQAAgEADgDQADgCAFAAQAJAAABALIAAABQALgLAKAAQAOAAAGALQADAJAAAPIAAAFIAAAEQAAAGACAIIABAPQAAAEgDADQgDACgEAAQgJAAgBgIg");
	this.shape_30.setTransform(321.5,298.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CC00").s().p("AgXAfQgLgKAAgRQgBgQAKgMQALgPATAAQAOAAAJAMQAIAKAAAQQAAAQgJAMQgKANgRAAQgNAAgKgJgAgJgMQgFAHAAAJQAAAIAFAFQAEAEAFAAQAGAAAEgFQAGgFAAgIQABgXgNAAQgIAAgFAIg");
	this.shape_31.setTransform(313.4,298.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CC00").s().p("AgcAmQgCgDAAgEIAAgvIAAgHIAAgGQAAgEACgDQADgDAFAAQAHAAACAJQAMgKAQAAQAPAAAAAUIAAAEQgBAMgKgBQgJABAAgKIgBgHQgPACgHAOIAAAkQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_32.setTransform(306.2,298.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00CC00").s().p("AgGAzQgDgCAAgEIAAgIIAAgIIgBglIgOgCQgJgBAAgIQAAgEADgDQADgDAEAAIAMABIAAgHIAAgIQAAgEADgDQADgCAEAAQAKAAAAASIAAAGIAHgBIAMABQAGADAAAGQAAAFgDACQgDADgFAAIgDAAIgEAAIgHABIACAlIAAADIAAAFQAAAQgLABQgDAAgDgDg");
	this.shape_33.setTransform(298.9,297.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00CC00").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_34.setTransform(291.6,298.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#006600").s().p("AgeA7QgDgDABgEIAAgbIAAgdIgBgbIgBgOQAAgGACgEQADgGAGAAQADAAAEADQACADAAAEIAAAAIAKgDIAJgCQAQAAAJAOQAFALAAARQABAQgKAKQgKAMgQAAIgNgCIAAAeQAAAEgCADQgDACgEABQgFgBgDgCgAgDgiQgFACgFAFIABAcQAHADAFAAQAHAAAFgEQADgGAAgIIgBgNQgCgJgHAAQgFAAgDACg");
	this.shape_35.setTransform(216.5,300.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#006600").s().p("AgHA6QgCgDAAgFIAAhkQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAABgQAAAOgKAAQgEAAgDgCg");
	this.shape_36.setTransform(210.2,296.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgHA6QgCgDAAgFIAAhkQAAgEADgDQADgCADAAQAFAAACACQADADAAAEIAABgQAAAOgKAAQgEAAgDgCg");
	this.shape_37.setTransform(148.9,296.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AAPAkQgKAEgIAAQgLAAgHgFQgIgFgCgJQgDgTAAgNQAAgJADgNQABgIAJAAQADAAADADQAEACAAAEIgBALIgBAKIABARIACANIADABIAEAAQAGAAAKgCIAAgNIAAgLQAAgPACgLQAAgJAKAAQADAAAEADQACADAAAEIgBAZIAAAOIABAPIAAAFIAAAEQAAAEgDADQgDADgEAAQgHAAgCgGg");
	this.shape_38.setTransform(138.8,298.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgVA4QgDACgEAAQgEAAgCgCQgDgDAAgEIAAgFIAAgGIAAhSQAAgFADgEQADgFAFAAQAIAAAAAIIAAADIgBADIAAAdIALgFIAIgBQASAAAKAMQAKALAAAQQAAARgLAMQgMAMgQAAQgLAAgJgDgAgHgBIgMAGIAAAfQAKAFAIAAQAIAAAGgHQAGgGAAgKQAAgJgFgGQgFgGgJAAQgDAAgEACg");
	this.shape_39.setTransform(130.5,296.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0000FF").s().p("AgVA4QgDgCAAgEQAAgHAQgiIgaguIgDgFQgCgEgBgCQABgEADgDQADgDAEAAQAEAAADADQALAOAMAcIAKgVIAKgTQAEgFAFAAQAEAAADACQADADAAAEIgBAFIgZAzIgOAgIgEANQgCAHgIAAQgEAAgDgDg");
	this.shape_40.setTransform(108.9,300.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0000FF").s().p("AgYAfQgNgJAAgRQAAgRAKgNQALgOASAAQAMAAAIAEQALAFAAAMQAAAIgJAGQgDADgNAFIgXAKQADAEAFACQAFACAFAAQAKAAAHgEQAGgDAEgBQAIABAAAHQAAAIgNAFQgKAFgMAAQgQAAgLgJgAgJgRQgFAFgDAJIAQgIQAJgDAGgFQgFgDgHABQgHAAgEAEg");
	this.shape_41.setTransform(100.5,298.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000FF").s().p("AARA1QgCgFgBgLIgBgRIAAgFIAAgGIAAgGQgBgEgDAAQgIABgGAGQgDAEgGALQAAAagDAFQgCAHgHAAQgEAAgDgEQgDgCAAgEIABgEIABgUIAAgwIAAgDIAAgLIAAgHIgBgGQAAgEADgDQADgDAEAAQAHAAADAIQABAEAAAKIAAAPIgBANQAGgFAGgDQAFgCAHAAQANAAAFAHQAEAGABAJIABATIABANIADAPIAAACQAAAFgDADQgDACgEAAQgIAAgCgIg");
	this.shape_42.setTransform(92.2,296.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26,p:{x:64.5}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:145.3}},{t:this.shape_17},{t:this.shape_16,p:{x:158.7}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:202.8}},{t:this.shape_12,p:{x:210.6}},{t:this.shape_11,p:{x:218.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:238.9}},{t:this.shape_7,p:{x:246.6}},{t:this.shape_6,p:{x:253.9}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:223.2,y:321.8}},{t:this.shape_1,p:{x:227.7,y:327}},{t:this.shape,p:{x:233.9,y:334.5}}]},87).to({state:[{t:this.shape_26,p:{x:82.5}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_18,p:{x:145}},{t:this.shape_37},{t:this.shape_16,p:{x:154.6}},{t:this.shape_13,p:{x:188}},{t:this.shape_12,p:{x:195.8}},{t:this.shape_11,p:{x:204.1}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_8,p:{x:224.1}},{t:this.shape_7,p:{x:231.8}},{t:this.shape_6,p:{x:239.1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_2,p:{x:214.5,y:322.4}},{t:this.shape_1,p:{x:219,y:327.6}},{t:this.shape,p:{x:225.2,y:335.1}}]},75).wait(108));

	// Skeleton
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(3,1,1).p("AvYgPIAADaAvYgPIAAjwA45gPIJhAAABFEKIkSkRAlFkJIAAD6AI7gPID6j6AI7gPIuAAAIqTAAAY6gPIv/AA");
	this.shape_43.setTransform(217.6,313.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(3,1,1).p("AxBgLIAADaAxBgLIAAjwA3RgLIGQAAAmOgLIjTAAIngAAAh8EGQiJiJiJiIAphkFIAAD6AIHkFIj6D6IqbAAAXSgLIzFAA");
	this.shape_44.setTransform(228,312.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43}]},87).to({state:[{t:this.shape_44}]},75).wait(108));

	// Char
	this.instance = new lib.anim_twiggs_paint();
	this.instance.parent = this;
	this.instance.setTransform(155,187.7,1,1,0,0,0,66.5,82.3);

	this.instance_1 = new lib.BubBuilder();
	this.instance_1.parent = this;
	this.instance_1.setTransform(285.9,177.9,0.83,0.83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},162).wait(108));

	// Bk
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(4,1,1).p("EAkaAHWIAA80MhIzAAAIAAbNIAAIKIAAHmUAkZAAAAkaAAAIAAnvg");
	this.shape_45.setTransform(233.5,137.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.3,1,1).p("AOckJQgKgIABgQAPykeQgCANAIAOAQSExQAAACgBADQgBAJAAAJQAAACAAACQAAAJAAAJAOmE0QgLAOACANQACAOAQALAX+JPQBBggAdBXQAzhKBdBHQBWhzgICJQAxg/AGBnQBshBhwgnQBGgZA7AJQAVArgQApQATgkAnA8QAyhLAoA3QgDgfAAglQBiAVA0A7AVFRXQAjAFAjAEQCWASCXADQC5AEC5gGQCUgEBcgoAQeOZIAAABQAEANAIANQAHAMALAMAOyOcQgCARgBALAQ3Q+QAWgBASADQAfAEAWAPAl4xvQAGgEAKgBQAJAAAJAAQAKAAAJgBQAIgBAIACQAJABAKABQAJABAJAAQAJABAIAAQAIAAAIAAQAJAAAKAAQAJAAAKgBEgkZAJJQADgCACgCQAkgaA7geQAcA/gCAZQAvhjBJBiA+hRRQjFgniuAmQgCABgDAA");
	this.shape_46.setTransform(233,116);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(0.3,1,1).p("AR+uFQAAgLAAgMQgBgQAAgSQAAgRAAgQQAAgRACgPQACgRADgPQADgQABgPQABgQgEgOQgDgQABgRQAJgHAQgHQAOgGAQgFQAQgFAOgDQANgCAIAOQAHAMACARQABAQABAQQACAQAAARQAAARABARQABAQABAQQABARAAARQAAARgDAPQgCAMABAPQAGgCAGACQAPAFgJANQgEAFgGAGQgBABgBABQADACACgCQAOgDARACQAPABAPADQAQAEARAAQARABAPAHQAPAGAAAQQABARgLAMQgLALgRgJQgPgHgPgEQgPgEgQgDQgQgEgRABQgMABgHgEQAGAEABAJQACAPgKADQgBADAAAEQAAARgBARQgCAPgBARQgCAPAAAQQAAAQgDAQQgDAPAAARQAAAQAAARQAAARABAQQACARAEAPQAFAQAGAPQAGAQAGAOQAGAPgBASQAAAIgEAGQgDAFgEADQgHAEgKAAQgSABgPgDQgPgCgPgBQgIAAgHgCQgJgCgHgFQgMgIAEgTQADgQAAgRQAAgRgDgRQgCgPAAgRQgBgQABgSQAAgGgBgFQgEgPACgSQABgRABgPQABgRgBgRQgCgQAAgSQABgPgGgOQgGgPABgRQABgQABgPQADgBAEgBQAKgEALgFQAEgCAEgBQAOgHAOgFQADgBADgBQALgEANgDQAOgEAMgIQABgBAAAAQADgCADgBATPv8QAAAaAAAZQAAAQAAAQASewHQABAYADAUQACAaAEAYQACAKAAAOASgtvQANgHAMgFQANgGAPgEQAQgEAMgJQAEgCAFgBAT3tNQACABACACAT3tNQgBgCABgEQAAgPACgQATHtfQAKAGAOAHQAGADAGAAQAHAAAFACASdtOQANAJANAIQAOAIAPAFQAPAEAPABQAFABADgBAUNtrQAKAEAKACASqqIQABAYAHAYQAHAWABAYQACAZgBAZQAAALAAACATGpcQAGAUAIAYQAIAXABAYQAAASgEAQASamfQAKAEALADQAIACAJACQAZAEAZAAQAOABALgDQAJgBAHgEQAGARADARQACAZgCAYQgFAhgHAgQgEAUgBAVQgBAUAAAVQgBAVACAUQACAnAMAjQAIAcgEAdQgDAWAAAXQAAABAAAAQgBAUACAQQAAAGABAFQABAKABAKQADARABASQAAAMgFAHQgCADg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QADAQACAPQACAPACAQQACANACAHAhOwVIAAAAQgHgRAIgPAhTmVQgKg1AHguQAAAAAAAAQgHgKAAgSQgBgHAAgIQAAgBAAAAQAAgIAAgJQAAgQAAgSQAAgPAAgQQAAgQABgRQABgPACgQQACgQABgPQAAgRABgRQABgQAAgRQgBgQAAgRQABgQgDgQQgDgQgBgRQgCgOgCgQQgBgPAAgRQAAgRgBgRQAAgQACgPQADgPALgMQACAAACgBAg6vnQgBANgEANQgEANgCANQgCAQgDAQQgCAPAAAQQAAARAFAQQAEAOAFAGAhTmVQALADAKAGQAOAHAQAFQAPAFAPAFQAMACARADQAPADAQAFQARAEAOAGQADACADACQACACABACQADACABAEQADAGgBAIQABABgBACQgCAPAAAQQAAARgEAPQgCAJgFAEQABANACALQgJACgJABQgPADgRAAQgRABgQgCQgOgBgPgCQgPgBgPgDQgEgBgDgCQgFgDgEgBAhBj4QgGgDgFgEQgLgHgCgSQgBgQgBgRQAAgQAAgRQAAgQACgPQACgPgBgPQACABADABQAFAcALAfQABAQAEAPQAEAOACAOAgxlcQAHAMAHANQAIAOAFAPABolDQAAABAAAAQAAABAAABABbnDQgBAZADAaQAEAeAEAbQABADAAADAhBj4QAIADAJACQAPAEAQAAQAPAAAPACQAQABAQAAQARABAQgDQAIgBAFgFABejcQAHgCAGgBQAGgBADAGQAEAJADAGQAGANAEAPQADAQAEAPQADAPABARQACAQAAAQQAAASgFAPQAEASABARQAAAPADAQQACAQACAPQABANAFAJQAHA9AVBHQAIAeAEAcQAGAjgBAfIAAABQAAAQAAAQQABARAAAQQABAOAHAIQABABAEAHQAHAQAGAUQAJgTAeADQAZABALATQAIAOAJALQACADAGgBQAXgCAMAQQAEgiAjARQAGACABAEQAEAOgBAOQAOgeAVAPQAFADADAEQACgQAWAFQAMADAHAHQgQgTAjgOQATgHATANQAKAIAJAGQgFgeAUgVQAOAKAJALQADgkAlgSQAGgDAGgFQAHAbAKAWQADAFABAGQACAVgGAUQAUgPAXAGQAKADgBAPQAAAKgCAJQAMgeAaARQACACACAGQADASgGAOQANgDADAZQABANgBANQAAAEgBAFAgKiTQAIAPAAARQAAAQAAAQQABARACAQQAEAUAHgPAAwiaQACAQACAPQABARAIAOAANiUQAGANACASQABARAAARQAAAPAAAQABWidQAAAOgBANQgBAMgEAJAgkidQADARABARQACAQADAQQACAPABAQQABAMADgEAgFE9QgBgJgBgJQgCgZgIgXQgHgYgIgXQgCgIgCgIQAAgBAAAAQgEgOgCgOQgDgYAAgYQAAAAAAAAQAKhRgig3QgRgcAIgPQAAgBABAAQAAAAAAAAQgJgIABgPQABgRABgQQABgQgBgQQgCgQgDgQQgCgQADgQQALgKAMACQgIgHAHgMAhGipQAGAMADAPQADAQADARQACAOACAPAmRFKQAYgGAUAIQAJAEACAIQAHgNAJgPQAPAVAPAYQALgWATALQAFADADgHQAEgJAFgJQAIAHAHAIQAEgdAZAHQAFACACAEQASgUAKARQAEAGACAIQAQgLATgEQAIgWAHgOQAFgJALAIQAbATATANQAKAHANAFQAEgDADgEQANgKAIAEQADAPADANQAHAWAFAYQADAVALAZQADAUAGAWQAHAXABAXQABAJABAIQAKACAKACAA6GeQAAAZAIAZQAHAXAEAXQAAAEAAAEACFHKQAFAXAEAZQABAHADAFACkHbQABAXADAWABXGgQADAZADAZQAEAYADAZACTO1QgBgHgCgHQgEgXgGgWQgFgYgHgWQgIgWgGgXQgGgYgHgWQgIgXgBgZQgCgagQgNQgVgQABgZQABgcAMgQQAEADAFADQAMAGASADQAYAEAZAAQAZgBAXgIQASgGAQgQQADgEADgEQABgBAJgBABpJvQALAVACAYQACAYAIAWQAHAQADARAAuIeQABAGABAGABGJLQgFgTABgWQAOADAOACQAYAEAaABQAbABATgHQAPgGAOgGQAGgDAGgDQAHgEAAgLQABgagGgYQgBgEgBgDADtIxQABACABACQAHASAIAUQAIAXABAaQACAXACAWQADAZAEAZQAFAXAIAXQAIAYADAYQADAXAIAWQAIAYAJAVQAFANAFAMACtJ9QgBAfASAIADEJ5QACAQAEAPADkKEQADAHAAAJADnI5QgCgSgKgNAAElDQgCASAEAPAzkjBQgRgLgQgIQgZgMgagPQghgUAcgDQAZgCAYADQAgADANAKQgEgagEgZQAHAGAIAGQAXASAHAiQAAgMADgLQAHgXAZgJQAIgDAAAGQgBAigRAfQARgGAPgFQgFAPgUADQALAEALAHQAUAMATAVQgbABgYgNQAIAKAFAOQAJAeAKAXQgJgHgHgIQgVgTgUgTQACANABAOQAEAmgUAbQgDgHgBgJQgDgiADgdQgGAJgEAQQgGAdgMAUQABgQADgQQAEgYgEgZQgBgKgEgJQgMAFgPALQgSANgMASQgLARgPAOQgQAQgTAQQgQAPgNAVQgMAUgPATQgPAVgLASQgNAUgPARQgNARgMATQgLAQgHAPQgCAEgBADQAAAUADAUQAFAZAEAWQAFAXAFAWQAGAXALAUQALAVAIASIAAABQABABABABQAAAAAAAAQAHgKABASQAKAGAGABQADABAFgFQATgXAgAQQATAJAQAUQACgWANgEQAGgCAEAGQAMAPALgCQAFgBAAgGQABgOAMgIQAMgIAOAFQAVAHAKgKQAEgFAAgGQABgJgBgJQAMAFAIAGQAEADAEACQAAgJAIgBQAHAAAEAEQAEgOAMgHQAZgMALARQANgYATgSQAOgNANAKQAGAFAFAFQADgSALgPQADgEAIgBQAZgDALAbQADAGADAEQAbgYAdAGQANARAFAMQAKgMAQACQAHABAHABQAHgoASgcQADgEADgEQADgDADgCQAUAFAYgQQAIgFAIgDQALATgFAXQgDAPgIAJQAbgLAYgCQAOAUAFARQAQgRAMACQADAAAFADQAKgVANgQQALgPALANQALAMAVgJQAJgEAGAFQAIAGgBAOQgCAbAhgMQAKATAGgFQANgLAQACQAOACAFAMQAgAaAhAJA3AjDQAOgFAQgBQAjgDAhAOQgbAOgbACQgEAAgEAAA2UiuQAngBAZAaQAQAQgPACQglAEgjAFQAcAKAHAaQgcgDgbADQATAZASAVQACADACACQgEAAgEgCQgYgQgaAHQARAFAIARQgZgHgdgIA3qB8QAJgRALgUQANgVANgRQAQgUAKgQQAMgRALgSQAEgFADgFQABgBAAAAQAJgNALgNQAPgQARgRQAQgSAOgPQANgQAUgSQAOgOASgMQAIgFAEgDQAEAEACAEQAEAGADAHA4FgtQgDAAgDABQgbADgTAXQAGgRAKgPQADgEAEgFQgEAFgFACQgBAAAAAAQgVAHgKASQgLAUgSAQQgSARgHATQgLgLAFgVQAEgSALgSQAYgnARgrQgFACgFAAQggAEgWAZQgBgQAJgLQAaghAngTQgbgDgegBQgGAAgGAAQAGgDAFgBQAzgPArACQgDgHgEgDQgbgVgZgRQA3gDAlAkQAEAEAEAAQAFABAGgFQAagXAkgKQACATgSAIQgDABgEABA4FgtQAQgBAPAEQAFACAEABQgHAXgFAXQgEAYgBAZQAAAZADAYQABAJAAAKQABAPAAAPQAAAEAAAFA4JC6QAAgDAAgDQgDgSgCgRQgCgYgBgZQAAgZAAgaQABgZACgXQADgWAGgUA8QHVQACgYAHgXQAFgPAOgGQAQgHAOAXQAEADAGgEQAYgSATAWQALAMANANQAKAKAPAFQAWAIACgbQAOAEANAFQABgXADgZQACgLABgLQAEgYADgYQADgXAHgYQAHgWAHgYQAGgVAKgVQAAgDgBgCQAAgDgBgDA4HDFQADAOACANQACAIABAHQAEAWAFAZQAGAYAGAXQAHAVARATQAKAJAHAMQANgHAHgGIAAgBQADAFAFADA4HDFIAAgBQgBgGgBgEA4CDgQAAAHgCAHQgCAMgEANQgGAWgDAaQgBASgDASQgEAZgCAYQgCAVAAAVQAXAFAOANQAHgMAEgPQACgFAJACQAJgMAJgKQAIgIAJgCIAAAAQAEAFAEAGA4fG/QAAgFAAgEQgDgCgGADQgLAFgKAGAwQE2QAAgGABgFQAGAGAFAHA6PPCQAhADAggGQAigHAigEQAqgHArACQAnABAngBQAegBAeADQAnAEAoAAQAgAAAggEQApgEAqABQArAAApAFQAmADAmAAQAngBAnAAQApAAApAAQAmAAAmAAQApAAApADQAnACAmAGQAqAHApAGQAqAGAlgLQAngLAlgJQAXgGALAMATPO4QgqgHgoAAQgoAAgrgBQgpAAgpgFQgmgFgnANQgnAMgkAVQgpAXgmgRQgkgQglgQQgOgHgQABQgrACgpAMQgkAMgpgBQgogCgmgJQgogJgjADQADAKADALQAGAXAIAWQAHAXAHAXQAHAVAFAXQAFAXAHAWQAHAVAKAXQAKAWAPATQAOARAMAOQAEAHAAAHQAAAEgBAEQgYgSgggJQgrgNgUglQgDADAAAFQgDAdAEAkQgYgMgZgCQgigDgPgbQACATgFAPQgGgFgGgIQgCgBgBgBQgFgBgKgDQgCgFgCgHQgEgPgBgTQgBgYgDgZQgDgXgFgWQgGgYgIgXQgHgVgIgYQgHgVgDgZQgCgSgEgRACNJ5QAFAYAHAYQAEASAGAJAiMPAQAhADAjABQApABAogEQAkgDAkgEQAhgEAhgBAmJLrQgDACgCACAkOO6QABAAAAAAQA8AKBFgEADRTiQAKAGAJAKADRTiQgHgEgIgD");
	this.shape_47.setTransform(205.5,130.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D2F4FF").s().p("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");
	this.shape_48.setTransform(233.5,95.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#336600").s().p("AkQCMQAEgTALgSQAYgnARgrIgKADQggADgWAZQgBgPAJgMQAaggAngTQgbgDgegBIAAgDQAygQArACQgCgHgFgDQgbgUgYgSQA2gCAlAkQAEADAFABQAEAAAGgFQAagWAkgLQACATgSAIIgGACIAGgCQAOgFAQgBQAjgDAgAPQgaANgbACIgIAAIAIAAQAmAAAZAZQAQARgPABQgkAEgiAEQAbAKAHAaQgbgCgbACQASAZASAVIgEADQgYgPgaAHQARAEAIASIg2gQIgJgCQgOgEgQABIgHAAQgbADgSAYQAFgSAKgOIAHgKQgEAFgFACIgBABQgVAGgKASQgLAUgRASQgSARgHATQgMgLAFgWgAC9ArQgEgiADgcQgGAKgEAPQgGAcgMAVIAEghQAEgWgEgZQgBgLgEgJQgDgHgEgGIgFgIQgRgKgRgJQgZgMgagPQghgUAdgCQAYgCAYACQAgADANAKIgIgzIAPAMQAXASAHAiQAAgLADgLQAHgYAagJQAHgDAAAHQgBAigRAeIAggKQgFAPgUACQALAFALAGQAUAMATAVQgbABgYgNQAJAKAEAOQAJAfALAVQgJgGgIgIIgpgmIAEAcQADAlgUAbQgDgIAAgJg");
	this.shape_49.setTransform(65.6,117.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("ADDJvQgsgNgUglQgCADgBAFQgDAdAFAkQgZgMgZgCQghgDgPgbQACATgGAPIgMgNIgCgCQgJgKgJgGQgEgPgBgTQgBgYgEgZQgCgXgGgWQgGgYgHgXIgPgtQgHgVgEgZIgFgjIgDgOIgKgtQgGgYgHgWQgHgWgGgXIgOguQgIgXgBgZQgBgagRgNQgUgQAAgYQACgcALgQIAKAGQAMAGARADQAZAEAZAAQAZgBAWgIQASgHAPgPIAIgEIAPAmQAJAXABAZIAEAtQACAZAFAZQAFAXAHAXQAIAYADAYQAEAXAHAWIASAtIAJAZIAGAVIAOAtIAPAuQAHAVAFAXQAEAXAIAWQAHAVAJAXQAKAWAPATIAbAfQADAHABAHIgBAIQgZgSgfgJgAhgAXQACAYAJAWQAGAQAEARQgEgRgGgQQgJgWgCgYQgBgXgMgVQAMAVABAXgAg9AkQAFASAFAJQgFgJgFgSIgMgvIAMAvgAgXAfQgRgIAAgbIAAgDIAAADQAAAbARAIgAgMATIgGgeIAGAegAAQAPIAAgDQAAgHgDgFQADAFAAAHIAAADgAhGhYQgZgBgZgEIgcgFIgTgEIgCgRQgCgXgHgXQgGgWgDgUQgKgZgEgVQgEgYgHgWQgFgNgCgPIgDgSQgCgZgHgXIgPgvIgFgQIAAgBQAQgDANAYQARAfARgkQAEgJgCgKQgHgYgNgUQgNgTgIgfQgGgbACgeQACgbAfgJQAjgJAOAbQAOAZgGAdQgGAcAGAcQADAMAMgIQAbgQAAAiQABAcgFAZQgHAeATATQARAQAhgBIAZgCIACAAQAFAjgBAfIAAABIABAgIABAhQABAOAHAIIADAIQAHAQAGAUIACAHQAHAYgBAaQgBALgHAEIgMAGIgbAMQgRAGgWAAIgIAAgAguh8IgEgtIAEAtgAhIiKQACAHADAFQgDgFgCgHIgJgwIAJAwgAiUi0QAIAXADAXIAAAIIAAgIQgDgXgIgXQgHgXAAgYIAAgDIAAADQAAAYAHAXgAh4iyIAGAxIgGgxIgHgyIAHAyg");
	this.shape_50.setTransform(227,194.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC9900").s().p("EgkZAD/IAAnlQCugmDFAnQAhADAfgGQAjgHAigEQAqgHAqACQAnABAngBQAegCAeAEQAnAEApAAQAgAAAfgEQAqgEApABQArAAAqAFQAlADAnAAIBNgBIBSAAIBMAAQApAAApADQAnACAnAGIBSANQArAGAlgLIBLgUQAYgHAKANIAAAAIABACIAAgCQA8AKBFgEIAAAAQAhADAjABQAqABApgEIBHgHQAhgEAhgBIAGAjQADAZAHAVIAQAtQAHAXAGAYQAFAWADAXQAEAYABAYQAAATAEAPQgHgEgHgDQAHADAHAEIAFAMIAPAEIACACIAMANQAGgPgDgTQAPAbAhADQAZACAYAMQgEgkADgdQAAgFADgDQAUAlAsANQAfAIAZATIABgIQgBgHgEgHIgagfQgPgTgKgWQgJgWgHgVQgIgWgEgXQgGgXgHgVIgOguIgOgtIgGgVQAjgDAoAJQAnAJAoACQAoABAlgMQAogMArgCQAQgBAOAHIBKAgQAlARAqgXQAjgVAogMQAmgNAnAFQAoAFAqAAIBSABQAoAAAqAHIABAHIAAAGQACAagCAVQAHgCAIABQAIAKAIgGQAJgGAJgDQAKgDAFADIAMAIQATAMALgkIAHAOIACAFIAAgFQABgaAEgZIACgKQAWgBASADQARARAcABIAIABIAiAAIAwABIAwABIAtACIACAAIBGAJQCWASCXADQC5AEC5gGQCUgEBcgoIAFAAIAAHuMhIzAAAgAOxipIABAAIABAAIABAAIgBAAIgBAAIgBAAIAAAAIAAAAQgGAAgDgDQAGgGAKgBQgKABgGAGQADADAGAAIAAAAIAAAAgAQtitQgCgDAAgGQAAAGACADg");
	this.shape_51.setTransform(233.5,249.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#339900").s().p("AazGPQiXgDiWgRQgKgKgOABQgXABgXgBIgCAAIgtgDIgwgBIgwgBIgiAAQgWgPgfgEQgSgDgWABQACgSAAgUQgBgZADgYIAAgbIgBgbIgQADQgIgNgEgNIACgBQAUgCAAgSIABgZIgCgSQgBgHAAgJIAAgYIAAggIAAgsIAAhGQABglgJgjIgCgJQAUgQANgVQAPgZAHAiQAFAYgBAYQAOgPAOgDIAyAvQAOANAEgdQACgSAIgRQAZACALASQgDgXAYgWQAIgGAEAJIAPArQAFAPAHALIALgYQAZASASAYQALAOANgGQgHgcAMgPQAZgNANAPQARASACgaQADggAegLQAQgHAKAMQAGAJAEAIQBBggAdBXQAzhKBdBHQBWhzgICJQAxg/AGBnQBshBhwgnQBGgZA7AJQAVArgQAqQATglAnA8QAyhLAoA3QgDgfAAglQBiAVA0A7IAFAAIAAGZIgFAAQhcAoiUAEQhrAEhrAAQhOAAhOgCgAHaGEIhKghQgOgGgQABQgrABgoANQglALgogBQgogCgngJQgogJgjAEIgKgZIgRgtQgIgXgDgXQgDgYgIgYQgHgXgEgXQgFgZgCgYIgFguQgBgagIgWIgPgmIgCgEIAKgBIgKABIgGAIQgCgSgKgNIAMgGQAHgDABgMQABgagHgYIgCgHQAJgSAeACQAZACAKASQAIAOAJALQACADAGAAQAYgDALAQQAEgiAjARQAGACABAFQAFANgCAOQAOgeAVAPQAGADACAFQACgRAWAGQAMADAHAGQgQgTAjgOQATgHATAOIATANQgEgdATgWQAOALAJALQADglAmgSQAGgDAFgFQAHAcALAVQACAFABAGQADAVgGAUQATgPAYAHQAJACAAAQQgBAJgCAJQAMgeAaARQADACABAGQAEATgHANQANgDADAZQACAMgBANQAGgdAmABQAKAAAHAEQANAJACAQQAAgSALgOQAQgVAPAaQgDgUAHgaIAMgsQADgIAFAKQgEgUgEgYQgEgaAQgPQAFgFAFAEIAPAOQAEADABAEQABgKAGgPQAMggAhAKQATAFAJARQADAHAEAFQABgVAHgVQALglALAaQAFALgBAPQAGgNAJgIQAHgGAHAJQAWAYgNAgIgBAGQAEgTARAAQAIAAAJAIQANAOARACQALACALgCIACAGQAJAaACAcQADAdgFAbQgGAfgBAeIgGBXQgDAggBAdQgBALAHABIAHACIgDAdQgOgBgQAFQAIAGACAKQAHAZAIATQAJAWAEAYIAFAgQgqgGgogBIhSgBQgqAAgogFQgngFgmANQgoANgjAUQgZAOgXAAQgQAAgPgHgAH8AWIACgJIgCAJgArjF2IhSgMQgngGgngDQgpgDgpAAIhMAAIhSAAIhNABQgnABglgEQgqgFgrAAQgpAAgqAEQgfADggAAQgpAAgngEQgegDgeABQgnABgngBQgqgCgqAHQgiAFgjAGQgfAGghgCQjFgoiuAmIAAoJQAkgbA7geQAcA/gCAZQAvhjBJBiQACgYAHgXQAFgPAOgGQAQgHAPAXQADAEAGgFQAYgSATAWIAZAZQAKAKAOAFQAWAJACgcQAOAEAOAGQAJgHAMgFQAFgCADABQAXAGAOAMQAHgMAEgPQACgFAKACIARgWQAIgIAJgCIABAAQAMgGAHgHIAAAAQADAEAFADQAKAHAGAAQADABAFgFQATgXAgAQQATAJARAUQACgVANgFQAFgBAEAFQAMAQAMgDQAEAAABgGQABgPAMgIQAMgIANAFQAWAHAJgKQAEgEABgHIAAgSQAMAGAHAFIAJAGQgBgKAJgBQAHAAAEAFQADgPAMgGQAZgMALAQQANgYATgSQAOgNANAKIALAKQADgSALgPQADgEAIgBQAagCAKAbIAGAJQAbgYAdAGQANARAFAMQAKgLAQACIAPABQAGgoASgcIAHgIIAFgFQAUAFAYgQQAIgFAIgDQALAUgFAXQgDAPgHAJQAbgMAYgCQANAVAFARQARgRAMABQADABAEADQAKgVANgRQAMgOAKAMQALAMAVgJQAJgEAGAFQAIAHgBANQgBAbAggMQAKAUAHgGQAMgLARACQANACAFAMQAhAaAgAJIAAAAQAYgGAUAIQAJAEADAJIAPgdQAPAVAQAZQAKgXAUAMQAEACADgGIAJgTQAIAHAHAIQAEgdAaAIQAFABABAEQATgUAJARQAEAHACAHQAQgLATgEQAIgWAIgOQAEgJAMAIIAuAgQAKAHAMAFIAIgGQAMgLAIAEQADAPAEANQAIAXAEAXQADAWALAYQADAUAGAXQAHAXACAWIABASIAUAEQAAAVAFATIgKgGQgMARgBAaQgBAZAVAQQAQAOACAZQABAaAIAXIAOAtQAFAXAIAWQAHAXAGAXIAKAtIACAOQghABghAEIhHAHQgpAEgqgBQgjgBghgDIAAAAQhFAEg8gJIgBgBIAAAAQgKgMgYAGIhLAVQgXAGgaAAQgPAAgQgCgAqmCZIAFgEIgFAEgAjngsIgCgLIACALgA83iXIAAgJIAAAJgA7RjAIgHgMIAHAMgA0ckdQgFgHgGgHIgBALIABgLQAGAHAFAHg");
	this.shape_52.setTransform(233.5,190.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#993333").s().p("AVUO/QgJgCgIAAIACgdQAVAFAXgCIBAgFIAAABQAEAMAIAOIgJACQgYAIgZAAIgEAAQgVAAgWgEgADkLoQgRgDgMgGQgFgUAAgVIAdAFQAYAEAZABQAcABATgHIAdgMQAKANABARQgPAQgTAHQgWAIgZABIgFAAQgWAAgXgEgA25IlIAEgVIAHgwQADgXAHgYIANguQAGgVALgWIAFAcIgCANIgGAZQgHAXgCAaIgFAkQgEAZgCAYIgCAqQgCgCgGADQgLAEgKAHQAAgXADgagA1RIIQgRgSgHgVQgHgXgFgYIgJgvIgDgPIgFgcIAAAAIgCgLIgBgFIgEgkQgCgXgBgZIAAgzIADgxQACgWAHgUQAQgBAPAEIAIADIgLAuQgFAYAAAaQgBAZADAXIACAUIABATIgBALIAAAIQAAAVAEAUIAJAvIAKAtQAGAWAKAUQAMAVAIATIAAAAIABADQgHAHgMAGQgIgLgJgKgA2BF0IAAAAgAVUFZIgDAAQgRgBgQgEQgBgNALgPIAbAHQAUAFAcgBQASgBAKgIIAEABIgCASQgbADgeAKIgFAAIgRgBgA1pEuIABgLIgBgTQAIgRAMgUQAMgVAOgRQAQgUAKgQIAXglIAHgKIAAAAQAKgNALgNIAfgiIAeghQAOgPATgSQAOgOASgLIANgIIAGAHQAEAGADAHQgNAGgOALQgSAMgMARQgMASgOAOIgjAgQgQAPgNAVIgbAoIgbAnQgNAUgOARQgOARgMASQgLARgHAPgA1pEuIAAAAgACLhDIgegDIgdgFIgIgCQgEgDgFgBQgHgHAHgNQAIAEAJACQAOAEAQAAIAfABIAhACQARABAQgDQAIgBAFgFIADAYIgSADQgQADgQAAIgKAAIgYgBgAVzj8QgaAAgZgFIgQgDQgLgIACgQQAGACAIAAIAeADQAQACARAAQALAAAGgFQgBAOAHAOQgKACgMAAIgCAAgAOMsUIABAAQAHgGACgJQAGgOADgQIABgLQAIAIAIADQAAALgCALQgEARgJANIgCADIgTgKgAIfuGQAIgFAGgJQAJgOAAgRQABgJgEgGQALADAMAAIABAOQACARgCARQgBASgMAHIgCACIAAAAQgUgGgJgMgACmt8Ig/gHQgZgCgUADIgJABIAAAAQgGgRAIgPIABAAQARADARgCQAQgBAPACQAQABAQgBQAQAAAQAAIAiADIAMABQAJAMgEAVIgRABQgYAAgZgDg");
	this.shape_53.setTransform(192.7,115.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAzA1QgPgBgPgEQgPgFgNgIIgagRIAIgDIAbgMIAGgCIAYANQAGADAGAAQAHAAAGACIAEADQAFAEABAJQACAPgJADIgGABIgDgBgAhQASIAGgGIAEgDIANgJIAIgEIgMgBQgUgDAEgTQABgEAEgEIAJABIAAADIAAADIAAgDIAAgDIAFABQATAIAJALIgBABIgSAJIASgJIACgBIAZgMQALgGAPgEQAQgEANgJQAEgCAEgBQAGgBAGABQAQAFgJANQgEAFgGAGIgDACIgFADIgBABQgNAIgOAEIgYAGIgGACIgbAMIgIADIgUAJIgIACIgDAAQgKAAgGgLg");
	this.shape_54.setTransform(327,43.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#996633").s().p("AJKR+QgJgBgGABQACgVgCgZIgBgHQAEgFgEgBIgBAAIgEghQgFgYgJgWQgIgTgGgZQgDgKgHgGQAPgEAPAAQAJAAAIACQAYAEAXAAQAZgBAYgHIAJgDQAIAMAKANIgBAbQgDAYABAYQABAUgDATIgBAKQgFAYgBAaIgCABIgGgOQgLAjgUgLIgMgIQgEgEgKADQgKAEgIAGQgDACgDAAQgGAAgEgGgAJUQOIABAAIAAgBIAAABIgBAAIAAAAIAAAAQgCgBAAgJQgCgYgJgYQAJAYACAYQAAAJACABIAAAAIAAAAgAJqQCQgFgVgKgWQAKAWAFAVgAJ+P9IgHgjIAHAjgAKYP0QAGgNAAgQIgBgJIABAJQAAAQgGANgAIvOXIgGgBQgHgCAAgLQABgdADggIAGhWQACggAFgeQAFgbgCgdQgCgcgJgbIgCgGQgIgagDgbIgHg2QgEgdgBgeQAAgSgCgQIgCgZQAAgMAJgNIADABQARAEAQACIADAAQAZACAYgDQAQgDAOgEIAAABIABAQIgBgQIAAgBIAQgGQAEAbgIAaQgHAXgEAWQgFAhAIAfQAHAaAFAaQADAZAGAYIACAJQAIAjAAAlIgBBHIAAAsIAAAhIAAAXQAAAJACAHIABASIAAAZQgBATgUACIgBAAIhBAFIgLAAQgRAAgQgDgAJ8GsQgCASAAASQAAgSACgSIABgJQAAgWgJgSQAJASAAAWIgBAJgAI5GjQAFAWAHAQQgHgQgFgWQgFgXgIgVQAIAVAFAXgAJWG2QgDgYgLgXQALAXADAYgAItFjQgRgLgCgOQACAOARALgAmnK7IACAFIgJADIAHgIgAoZGDQgTgTAGgeQAFgZAAgcQgBgigbARQgMAHgCgLQgGgcAFgdQAGgdgNgZQgPgbgjAKQgeAJgCAaQgDAfAHAbQAHAeANAUQAOATAGAZQADAKgFAJQgRAjgRgfQgNgYgQADIgFgbQgDgZgBgXIABAAQAKhRgig4QgSgcAJgPIADABIgDgDIAAAAQgJgIABgPIADggQABgQgCgPIgEghQgDgQAEgQQALgKALADQAFABAFADIAHACIAdAFIAeADQARABARAAQAQgBAQgCIASgEIANgDQAGgBADAHIAGAPQAHANADAOIAHAgIAFAeQACAQAAARQgBARgEAQQAEASAAAQQABARACAPIAEAgQACANAFAJQAHA9AUBHQAJAdAEAcIgCABIgZABIgEAAQgdAAgQgPgAqOBjQACgBADgFIAAAAIAAAAIAAAAIAAAAQgDAFgCABIAAAAIAAAAQgDgBgCgKIAAgBQgEgPAAgRIAAghQgBgRgHgOQAHAOABARIAAAhQAAARAEAPIAAABQACAKADABIAAAAIAAAAgAqqBWIAAAAIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAQgBAAgBgFIAAgDIAAgBIAAAAIgEgfIgEggQgBgQgDgQQADAQABAQIAEAgIAEAfIAAAAIAAABIAAADQABAFABAAIABAAIAAAAgAp/A2IAAAgIAAggIAAgHIgBgbQgBgRgHgMQAHAMABARIABAbIAAAHgArSgEIAGAgIAEAeIgEgeIgGggQgEgOgGgNQAGANAEAOgAphAOQACARAHAOQgHgOgCgRIgDgdIADAdgApAAIQAAAMgEAJQAEgJAAgMIACgUIAAgGIAAAGIgCAUgAKNFIIAAAAgAI/E2IgbgHIgSgEQABgkAEgjIAAAAIAAgCIAFgvIADgfQADgmAGglQAEgZABgbQAAgagJgZQgHgUgEgVIgKgsQgJgdgFgeQgEgVgCgWQgCgVACgRQABgOAJgIIAVAHIAQAEQAZAEAaABQANAAALgCQAKgCAHgEQAGARACASQADAYgDAYQgEAigIAfQgEAVAAAUIgCApQAAAWABATQADAmALAkQAJAbgEAeQgDAXgBAXIAAABQAAAUABAPIABAMIADATQADASAAASQABALgGAHIgEAFQgKAIgRABIgLAAQgVAAgRgEgAI5ESIAAAAIACgJIAEgmIABgJIABgnIABgLIAFgyIgFAyIgBALIgBAnIgBAJIgEAmIgCAJIAAAAgAJ9EMIACgSQAAgLgCgMIgBgGIABAGQACAMAAALIgCASgAJlEJQgCgLAAgLIABgOIAAgCIAAAAIAAACIgBAOQAAALACALgAJkDjIABgTQAAgPgDgOQADAOAAAPIgBATgApnhhIghgCIgfgCQgPAAgPgDQgJgCgIgEIgMgGQgLgIgBgSIgCggIgBghQAAgQADgPQACgQgBgPIAEACQgKg1AIguIAAAAQgHgKgBgRIAAgQIAAgBIAAgQIgBgiIAAggIACghIADgeIADggIABgiIAAghIAAghQAAgQgCgPIgFghIgDgeIgCghIAAghQAAgQACgQQADgPALgLIADgBIAJgBQAUgDAZACIA/AGQAiAEAggBQAkgBgKAmQgHAcABAjQABAigDAgQgEAjAIAdIAAAAQgFAUgBAPIAAAAQACAYgIAdIAAABQAPA+gKA7QgDAQgEAPQgQAvgDAuIAFAFQAKAKgDAKIgMgCIgBgBQgBAaADAZIAIA5IgDAAIgDgDIgGgFQgOgGgRgEQgQgFgPgCIgegFIgfgKQgPgGgOgHIgWgJIAWAJQAOAHAPAGIAfAKIAeAFQAPACAQAFQARAEAOAGIAGAFIADADIAEAGQADAGgBAIIAAACIAAACQgCAPgBAPQAAARgDAQQgCAIgFAFQgFAEgIACQgMACgNAAIgIAAgArZjQQACARAEAPIAGAcIgGgcQgEgPgCgRQgKgegGgdQAGAdAKAegAqOiXQgDgLAAgLIABgLIgBALQAAALADALgAq4i5QAIAPAEAPQgEgPgIgPIgOgYIAOAYgArdrJQAFAPAFAFQgFgFgFgPQgFgPAAgRIAAAAQAAgQADgPIAFghQACgNAEgMQADgNABgOQgBAOgDANQgEAMgCANIgFAhQgDAPAAAQIAAAAQAAARAFAPgAqqrRIAAgCIABgFQACgOAAgOIAAgEQAAgPgDgPIgFgYIgFgWQgDgOgGgOQAGAOADAOIAFAWIAFAYQADAPAAAPIAAAEQAAAOgCAOIgBAFIAAACgAqTs8IAEAhIAEAhIgEghIgEghQgBgQgGgOQAGAOABAQgApss5QAFAPADAPQgDgPgFgPIgKggIAKAggAo+shQgDgJAAgKIAAgBQAAgQgGgPQAGAPAAAQIAAABQAAAKADAJgAI9kgIgegDQgHAAgHgCQgJgDgHgFQgMgIADgSQADgRAAgRQAAgQgCgRQgDgPAAgRIAAgiIgBgLQgDgQABgRIADghQABgRgCgRQgBgQAAgRQAAgPgFgOQgGgPAAgRIADggIAHgCIAUgJIAaARQAPAJAOAEQAPAFAPABQAFAAAEgBQgCADABAFQAAARgBAQIgEAgIgCAfQAAARgDAPQgDAQAAAQIAAAhIACAhQABARAFAPIALAgIAMAeQAFAPAAARQAAAIgEAGQgDAFgEADQgHAFgLAAIgFAAQgPAAgNgCgAJElUQADgOAAgPIAAgFQgBgYgIgYIgOgsIAOAsQAIAYABAYIAAAFQAAAPgDAOgAImluIAAAOIAAgOIAAgLIgBgnQgBgXgHgXQgIgXAAgZQAAAZAIAXQAHAXABAXIABAnIAAALgALXqnQgPgHgPgEIgfgIQgQgDgRABQgNABgGgFIgEgCIgBgEIAAgCIADggIgDAgIAAACIABAEQgFgCgIgBQgGAAgFgDIgZgNIAZgHQANgEANgIIABAAIAFgEQABABABAAQAAAAABAAQABAAAAAAQABAAAAAAQAOgEARACQAQABAOAEQARADARABQAQABAPAGQAPAHABAPQABASgLALQgHAGgIAAQgGAAgHgDgAKLrbIgTgFIATAFgAHErMIgNgDIgTgEIglgIIgdgGQgUgEgUAAQgXAAgXgCIgMgDIgmgMQgUgHgVgCQgYgCgWgJIAHgJIAGABIgGgBIABgDQAJgOAEgQQACgLAAgMIAAgIQAMgBAQAJQANAIAPAFIAgAKQAPAEAQAGQAPAGAPADIAfAJIAeALQAPAFAQABQAPAAAPADIAhAGIANACIAFACIACAAIACAAQgDAEgBAEQgEATAUAEIALABIgIAFIgNAIIgEADQgIgDABAEIgTgDgADpsfIAfAOQAPAHAOACQgOgCgPgHIgfgOQgOgGgQgDQAQADAOAGgAIKrlQgJgKgSgIQgDgDgDgBIgBgXIgBghIABgiQAAgQABgQQACgQAEgQQADgPABgQQAAgPgDgPQgEgQACgRQAJgGAPgHQAPgHAQgEQAQgGAOgDQAMgCAIAOQAIANABARIADAfQACARAAARQgBARABARIADAfIABAiQAAARgDAPQgDANABAOQgEABgEADQgMAIgRAEQgOAEgNAGIgZANIgBgBgAIMtRIAHAyQACALAAANQAAgNgCgLIgHgyIgDgsIADAsgAI5s/IAAAgIAAggIAAgyIAAAygABasXQgPgEgNgJQgMgJgPgHQgPgGgQgEQgOgDgNgGIgfgMQgQgFgQgDIghgHQgPgDgPgFQgPgFgRgCQgPgCgQgFQgHgCACgDIACgCQANgHAAgSQACgRgCgRIgBgOIgBgHIAEgBQANAIARAEIAeAJIAgAJIAfAJIAeAJIAeALIAaAJIAeAJIAeAJIAeAJQAQADAOAIQAJAGAAALIgBAKQgDAQgFAPQgDAIgHAGIgBABQgIAHgLAAIgJgBgAiPuLIAaAIQALADAJAEQgJgEgLgDIgagIQgPgFgOgHQAOAHAPAFgAjZt9IAAAAIABgBIAFAAIAAAAIAAAAIABAAIADAAIgDAAIgBAAIAAAAIAAAAIgFAAIgBABIAAAAgAkYuOQgPgGgQgEIgfgJQgPgFgOgHIgcgSIgcgRQgOgJgIgMQgKgNgOgIQgOgIgPgGIgcgKQgOgFgMgIQgNgKgMgGIgDgfQgCgNAAgOIAAgFIAAgIIAAgNQAQAEAOAIIAaAPIAKAGQAOAIANAJQANAJAQAGQAQAGANAJIAbATIAcARIAcAQQAPAIAPAHQANAGAOADIAdAIQAOAEAPAHQAHADAEAGQAEAGgBAJQAAARgJAOQgFAJgJAFIgFADQgFACgGAAQgIAAgKgEgAkeulQgOgDgMgKQAMAKAOADgAk4u+QAOADAKAEQgKgEgOgDQgRgEgIgLQAIALARAEgAk+vVIAgALIAfAKQAFACADAEQgDgEgFgCIgfgKIgggLQgQgGgIgMQAIAMAQAGgAo+ulIghgDQgRgBgQABQgQABgQgCQgPgBgQABQgRABgRgCIgBgBQgPgCgJgOQgEgHAEgGQAJgNADgRQADgQgBgRQAAgQgCgRIgEgeQgBgPgEgPIgDgQQAFgEALAAIASgBIASgBQAJAAAIABIASADIATABIAQAAIAQAAIATAAIATgBIAAAIIAAAFQAAAOACANIADAfIABACQABAQAFAPIAKAeQAEAQABAQQABAQAIANQAFAIgHAEQgEACgGAAIgEABIgIgBgAp+vOQgCgPgFgMQAFAMACAPgAqbvoIACAQIgCgQQgBgRgHgQQAHAQABARgArWwqIAGAfIAEAeIAEAVIgEgVIgEgeIgGgfIgEgcIAEAcgAqtvjQgDgEAAgJIAAAAQAAgQgDgRQgCgNgHgLQAHALACANQADARAAAQIAAAAQAAAJADAEgApKx2IAAAAg");
	this.shape_55.setTransform(271.6,116.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AGgBtIs/AAIAAjZIM/AAg");
	this.shape_56.setTransform(329.1,297.4,0.641,1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF00").s().p("AmeBtIAAjZIM+AAIAADZg");
	this.shape_57.setTransform(329.1,297.4,0.641,1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(4,1,1).p("EAkaANwIAAmaIAA80MhIzAAAIAAbNIAAIKIAAHmUAkZAAAAkaAAAg");
	this.shape_58.setTransform(233.5,137.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.3,1,1).p("ANruFQABgLgBgMQgBgQAAgSQAAgRAAgQQAAgRACgPQACgRADgPQAEgQAAgPQABgQgDgOQgEgQABgRQAKgHAPgHQAPgGAPgFQAQgFAOgDQANgCAIAOQAHAMACARQABAQACAQQABAQAAARQAAARABARQABAQABAQQACARAAARQgBARgDAPQgCAMABAPQAGgCAGACQAQAFgJANQgEAFgGAGQgCABgBABQADACACgCQAOgDARACQAPABAPADQAQAEARAAQARABAPAHQAPAGABAQQAAARgKAMQgMALgRgJQgOgHgQgEQgPgEgPgDQgRgEgRABQgMABgHgEAO8v8QAAAaAAAZQAAAQAAAQAOLwHQACAYACAUQADAaAEAYQABAKAAAOAO0tfQAMgEAMgDQAOgEANgIQAAgBABAAQACgCADgBAPnuVQgEABgFACQgMAJgQAEQgPAEgMAGQgNAFgMAHQgBAAAAAAQgJgLgTgIQgDAAgDgBQABADgBADAOKtOQAEgCAEgBQAOgHAOgFQADgBADgBQALAGANAHQAGADAGAAQAHAAAGACQACABABACQAGAEABAJQACAPgJADQgCADAAAEQABARgBARQgCAPgCARQgCAPAAAQQAAAQgDAQQgDAPAAARQAAAQAAARQAAARABAQQACARAFAPQAEAQAGAPQAHAQAFAOQAGAPAAASQgBAIgDAGQgDAFgFADQgHAEgKAAQgRABgQgDQgPgCgPgBQgIAAgHgCQgJgCgHgFQgLgIADgTQADgQAAgRQAAgRgCgRQgDgPAAgRQgBgQABgSQAAgGgBgFQgDgPABgSQABgRACgPQABgRgCgRQgCgQABgSQAAgPgGgOQgFgPAAgRQABgQABgPQAEgBADgBQAKgEALgFQAOAJAMAIQAOAIAPAFQAPAEAPABQAFABAEgBAPntyQgCAQgBAPQgBAEACACAP7trQAJAEAKACAOzpcQAGAUAIAYQAIAXABAYQABASgFAQAOXqIQABAYAHAYQAHAWABAYQACAZAAAZQAAALAAACAOcmYQgKgIABgQAOcmYQAIACAJACQAZAEAaAAQANABALgDQAJgBAIgEQAFARADARQADAZgDAYQgFAhgHAgQgEAUAAAVQgBAUgBAVQAAAVABAUQADAnALAjQAIAcgEAdQgDAWAAAXQAAABAAAAQAAAUABAQQAAAGA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ANAIAPAFQAQAFAQAEQAQAEAPAGQARAHAMgGQACgBADgBABJw9QANAKAOAEAAwxXQAIALASADQANADALAEAjH0AQgKABgJAAQgKAAgJAAQgIAAgIAAQgIAAgJgBQgJAAgJgBQgKgBgJgBQgIgCgIABQgJABgKAAQgJAAgJAAQgKABgGAEQABAIADAIQADAPACAPQACAPACAPQACAQAAAQQABASgDAQQgDAQgKAOQgEAGAEAHQAJANAPADAkgyTQAGAPABASQABALACAEAk5y0QAGALADAOQADAQAAAQQAAAJADAFAkCxzQAFALACAPAi2nZQAEguAPgvQAFgQACgPQAKg8gOg+QAAAAgBAAQAJgegCgXIAAAAQAAgQAGgUQAAAAAAAAQgJgdAEgiQAEghgBghQgBgkAHgbQAJgmgkAAAjFvfQAHAPAAAQQAAALADAKAjzvjQAFAOAFARQAFAPACAQAkXvkQAGANABARQACAQACARQACAQACARAk6vqQAGANADAOQACALACALQADAMACAMQADAPABAPQAAARgDAPQAAAEAAADAl4z+QgBgIAAgIAlYzQQACANADAOQADAQADAPQACAPACAQQABANACAHAlhwVQgCABgCAAQgLAMgCAPQgCAPAAAQQAAARAAARQAAARACAPQABAQACAOQACARACAQQADAQgBAQQABARAAAQQAAARgBAQQAAARgBARQgBAPgBAQQgCAQgCAPQgBARAAAQQAAAQAAAPQAAASABAQQAAAJAAAIQAAAAAAABQAAAIAAAHQAAASAHAKQABAAAAAAQgIAuAKA1QALADAKAGQAPAHAPAFQAPAFAPAFQANACARADQAQADAQAFQAQAEAOAGQAEACACACQACACABACQADACABAEQADAGAAAIQAAABgBACQgCAPAAAQQAAARgEAPQgBAJgFAEQgGAFgIABQgPADgRgBQgRAAgQgBQgQgCgPAAQgQAAgOgEQgJgCgIgDQgHgDgFgEQgLgHgBgSQgCgQAAgRQgBgQAAgRQAAgQADgPQACgPgCgPQADABACABQAGAcAKAfQACAQADAPQAEAOACAOAlNvnQgBANgEANQgEANgBANQgDAQgCAQQgDAPAAAQQAAARAFAQQAFAOAFAGAlElcQAIAMAHANQAIAOAEAPAiplDQAAABAAAAQgBABAAABAislRQAAgDgBgDQgEgbgDgeQgDgaAAgZAi0jcQgIACgJABQgQADgQAAQgRABgRgCQgPgBgPgCQgPgBgPgDQgEgBgDgCQgEgDgFgBQgIgHAIgMAi0jcQAHgCAGgBQAGgBADAGQAEAJADAGQAGANAEAPQAEAQADAPQADAPACARQABAQABAQQgBASgFAPQAFASAAARQAAAPADAQQACAQACAPQABANAGAJQAGA9AVBHQAIAeAFAcQAFAjgBAfIAAABQAAAQABAQQAAARABAQQAAAOAHAIQABABAEAHQAHAQAGAUQAJgTAeADQAZABAKATQAIAOAJALQACADAGgBQAYgCALAQQAEgiAkARQAFACABAEQAFAOgCAOQAOgeAWAPQAFADACAEQACgQAWAFQAMADAHAHQgQgTAjgOQATgHATANQAKAIAJAGQgEgeATgVQAOAKAJALQADgkAlgSQAHgDAFgFQAHAbALAWQACAFABAGQADAVgGAUQATgPAYAGQAJADAAAPQgBAKgCAJQAMgeAaARQADACABAGQAEASgHAOQANgDADAZQACANgBANAi2j0QABANABALAkciTQAHAPAAARQAAAQABAQQAAARADAQQAEAUAHgPAjiiaQACAQACAPQACARAHAOAkFiUQAHANABASQABARAAARQAAAPAAAQAi8idQABAOgCANQgBAMgEAJAk3idQADARACARQABAQADAQQACAPACAQQABAMACgEAlTjlQgMgCgKAKQgEAQACAQQADAQACAQQACAQgBAQQgCAQgBARQgBAPAJAIQAAAAAAAAQAAAAgBABQgIAPARAcQAjA3gLBRQAAAAAAAAQAAAYADAYQADAOADAOQAAAAAAABQACAIADAIQAHAXAIAYQAHAXACAZQABAJACAJAlZipQAGAMADAPQAEAQACARQACAOACAPAqkFKQAYgGAUAIQAJAEACAIQAHgNAKgPQAOAVAQAYQAKgWAUALQAEADADgHQAFgJAEgJQAIAHAHAIQAEgdAaAHQAFACABAEQATgUAJARQAEAGADAIQAPgLATgEQAIgWAIgOQAEgJAMAIQAbATASANQALAHAMAFQAEgDAEgEQAMgKAJAEQACAPAFANQAHAWAEAYQADAVALAZQADAUAGAWQAHAXACAXQABAJABAIQAJACAKACAhuHbQACAXACAWAi7GgQADA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");
	this.shape_59.setTransform(233,130.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CC9900").s().p("EgkZAD/IAAnlQCugmDFAnQAhADAfgGQAjgHAigEQAqgHAqACQAnABAngBQAegCAeAEQAnAEApAAQAgAAAfgEQAqgEApABQArAAAqAFQAlADAnAAIBNgBIBSAAIBMAAQApAAApADQAnACAnAGIBSANQArAGAlgLIBLgUQAYgHAKANIAAAAIABACIAAgCQA8AKBFgEIAAAAQAhADAjABQAqABApgEIBHgHQAhgEAhgBIAGAjQADAZAHAVIAQAtQAHAXAGAYQAFAWADAXQAEAYABAYQAAATAEAPQgHgEgHgDQAHADAHAEIAFAMIAPAEIACACIAMANQAGgPgDgTQAPAbAhADQAZACAYAMQgEgkADgdQAAgFADgDQAUAlAsANQAfAIAZATIABgIQgBgHgEgHIgagfQgPgTgKgWQgJgWgHgVQgIgWgEgXQgGgXgHgVIgOguIgOgtIgGgVQAjgDAoAJQAnAJAoACQAoABAlgMQAogMArgCQAQgBAOAHIBKAgQAlARAqgXQAjgVAogMQAmgNAnAFQAoAFAqAAIBSABQAoAAAqAHIABAHIAAAGQACAagCAVQgKABgGAGQADADAGAAIAAAAIAAAAIABAAIABAAIABAAIgBAAIgBAAIgBAAIAAAAIAAAAQgGAAgDgDQAGgGAKgBQAHgCAIABQAIAKAIgGQAJgGAJgDQAKgDAFADIAMAIQATAMALgkIAHAOIACAFIAAgFQABgaAEgZIACgKQAWgBASADQARARAcABIAIABIAiAAIAwABIAwABIAtACIACAAIBGAJQCWASCXADQC5AEC5gGQCUgEBcgoIAFAAIAAHuMhIzAAAgAQtitQgCgDAAgGQAAAGACADg");
	this.shape_60.setTransform(233.5,249.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#993333").s().p("AVUO/QgJgCgIAAIACgdQAVAFAXgCIBAgFIAAABQAEAMAIAOIgJACQgYAIgZAAIgEAAQgVAAgWgEgADkLoQgRgDgMgGQgFgUAAgVIAdAFQAYAEAZABQAcABATgHIAdgMQAKANABARQgPAQgTAHQgWAIgZABIgFAAQgWAAgXgEgA25IlIAEgVIAHgwQADgXAHgYIANguQAGgVALgWIAFAcIgFgcIAAAAIgCgLIgBgFIgEgkQgCgXgBgZIAAgzIADgxQACgWAHgUQAQgBAPAEIAIADIgLAuQgFAYAAAaQgBAZADAXIACAUQAIgRAMgUQAMgVAOgRQAQgUAKgQIAXglIAHgKIAAAAQAKgNALgNIAfgiIAeghQAOgPATgSQAOgOASgLIANgIIAGAHQAEAGADAHQgNAGgOALQgSAMgMARQgMASgOAOIgjAgQgQAPgNAVIgbAoIgbAnQgNAUgOARQgOARgMASQgLARgHAPIgDgCIABgLIgBgTIABATIgBALIAAAIQAAAVAEAUIAJAvIAKAtQAGAWAKAUQAMAVAIATIAAAAIABADQgHAHgMAGQgIgLgJgKQgRgSgHgVQgHgXgFgYIgJgvIgDgPIgCANIgGAZQgHAXgCAaIgFAkQgEAZgCAYIgCAqQgCgCgGADQgLAEgKAHQAAgXADgagAVUFZIgDAAQgRgBgQgEQgBgNALgPIAbAHQAUAFAcgBQASgBAKgIIAEABIgCASQgbADgeAKIgFAAIgRgBgACLhDIgegDIgdgFIgIgCQgEgDgFgBQgHgHAHgNQAIAEAJACQAOAEAQAAIAfABIAhACQARABAQgDQAIgBAFgFIADAYIgSADQgQADgQAAIgKAAIgYgBgAVzj8QgaAAgZgFIgQgDQgLgIACgQQAGACAIAAIAeADQAQACARAAQALAAAGgFQgBAOAHAOQgKACgMAAIgCAAgAOMsUIABAAQAHgGACgJQAGgOADgQIABgLQAIAIAIADQAAALgCALQgEARgJANIgCADIgTgKgAIfuGQAIgFAGgJQAJgOAAgRQABgJgEgGQALADAMAAIABAOQACARgCARQgBASgMAHIgCACIAAAAQgUgGgJgMgACmt8Ig/gHQgZgCgUADIgJABIAAAAQgGgRAIgPIABAAQARADARgCQAQgBAPACQAQABAQgBQAQAAAQAAIAiADIAMABQAJAMgEAVIgRABQgYAAgZgDg");
	this.shape_61.setTransform(192.7,115.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAzA1QgPgBgPgEQgPgFgNgIIgagRIgUAJIgIACQgNACgGgNIAGgGIAEgDIANgJIAIgEIASgJIACgBIAZgMQALgGAPgEQAQgEANgJQAEgCAEgBQAGgBAGABQAQAFgJANQgEAFgGAGIgDACIgFADIgBABQgNAIgOAEIgYAGIgGACIgbAMIgIADIAIgDIAbgMIAGgCIAYANQAGADAGAAQAHAAAGACIAEADQAFAEABAJQACAPgJADIgGABIgDgBgAg9gFQgUgDAEgTQABgEAEgEIAJABIAAADIAAADIAAgDIAAgDIAFABQATAIAJALIgBABIgSAJIAAAAIgMgBgAgxgEIAAAAg");
	this.shape_62.setTransform(327,43.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#996633").s().p("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");
	this.shape_63.setTransform(271.6,116.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D2F4FF").s().p("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");
	this.shape_64.setTransform(233.5,95.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(0.3,1,1).p("ANruFQABgLgBgMQgBgQAAgSQAAgRAAgQQAAgRACgPQACgRADgPQAEgQAAgPQABgQgDgOQgEgQABgRQAKgHAPgHQAPgGAPgFQAQgFAOgDQANgCAIAOQAHAMACARQABAQACAQQABAQAAARQAAARABARQABAQABAQQACARAAARQgBARgDAPQgCAMABAPQAGgCAGACQAQAFgJANQgEAFgGAGQgCABgBABQgDABgCACQgBAAAAABQgCAQgBAPQgBAEACACQACABABACQAHAEAMgBQARgBARAEQAPADAPAEQAQAEAOAHQARAJAMgLQAKgMAAgRQgBgQgPgGQgPgHgRgBQgRAAgQgEQgPgDgPgBQgRgCgOADQgCACgDgCAO8v8QAAAaAAAZQAAAQAAAQAOLwHQACAYACAUQADAaAEAYQABAKAAAOAPnuVQgEABgFACQgMAJgQAEQgPAEgMAGQgNAFgMAHQgBAAAAAAQgJgLgTgIQgDAAgDgBQABADgBADAO0tfQAMgEAMgDQAOgEANgIAOKtOQAEgCAEgBQAOgHAOgFQADgBADgBQALAGANAHQAGADAGAAQAHAAAGACAOKtOQAOAJAMAIQAOAIAPAFQAPAEAPABQAFABAEgBQgCADAAAEQABARgBARQgCAPgCARQgCAPAAAQQAAAQgDAQQgDAPAAARQAAAQAAARQAAARABAQQACARAFAPQAEAQAGAPQAHAQAFAOQAGAPAAASQgBAIgDAGQgDAFgFADQgHAEgKAAQgRABgQgDQgPgCgPgBQgIAAgHgCQgJgCgHgFQgLgIADgTQADgQAAgRQAAgRgCgRQgDgPAAgRQgBgQABgSQAAgGgBgFQgDgPABgSQABgRACgPQABgRgCgRQgCgQABgSQAAgPgGgOQgFgPAAgRQABgQABgPQAEgBADgBQAKgEALgFgAPotKQAGAEABAJQACAPgJADAP7trQAJAEAKACAOXqIQABAYAHAYQAHAWABAYQACAZAAAZQAAALAAACAOzpcQAGAUAIAYQAIAXABAYQABASgFAQAOcmYQgKgIABgQAOcmYQAIACAJACQAZAEAaAAQANABALgDQAJgBAIgEQAFARADARQADAZgDAYQgFAhgHAgQgEAUAAAVQgBAUgBAVQAAAVABAUQADAnALAjQAIAcgEAdQgDAWAAAXQAAABAAAAQAAAUABAQ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IAPAFQAQAFAQAEQAQAEAPAGQARAHAMgGQACgBADgBQAJALATAGQAAAAABAAAAwxXQAIALASADQANADALAEABJw9QANAKAOAEAjH0AQgKABgJAAQgKAAgJAAQgIAAgIAAQgIAAgJgBQgJAAgJgBQgKgBgJgBQgIgCgIABQgJABgKAAQgJAAgJAAQgKABgGAEQABAIADAIQADAPACAPQACAPACAPQACAQAAAQQABASgDAQQgDAQgKAOQgEAGAEAHQAJANAPADAkgyTQAGAPABASQABALACAEAk5y0QAGALADAOQADAQAAAQQAAAJADAFAkCxzQAFALACAPAi2nZQAEguAPgvQAFgQACgPQAKg8gOg+QAAAAgBAAQAJgegCgXIAAAAQAAgQAGgUQAAAAAAAAQgJgdAEgiQAEghgBghQgBgkAHgbQAJgmgkAAAjFvfQAHAPAAAQQAAALADAKAkXvkQAGANABARQACAQACARQACAQACARAjzvjQAFAOAFARQAFAPACAQAk6vqQAGANADAOQACALACALQADAMACAMQADAPABAPQAAARgDAPQAAAEAAADAl4z+QgBgIAAgIAlYzQQACANADAOQADAQADAPQACAPACAQQABANACAHAlhwVQgCABgCAAQgLAMgCAPQgCAPAAAQQAAARAAARQAAARACAPQABAQACAOQACARACAQQADAQgBAQQABARAAAQQAAARgBAQQAAARgBARQgBAPgBAQQgCAQgCAPQgBARAAAQQAAAQAAAPQAAASABAQQAAAJAAAIQAAAAAAABQAAAIAAAHQAAASAHAKQABAAAAAAQgIAuAKA1QALADAKAGQAPAHAPAFQAPAFAPAFQANACARADQAQADAQAFQAQAEAOAGQAEACACACQACACABACQADACABAEQADAGAAAIQAAABgBACQgCAPAAAQQAAARgEAPQgBAJgFAEQgGAFgIABQgPADgRgBQgRAAgQgBQgQgCgPAAQgQAAgOgEQgJgCgIgDQgHgDgFgEQgLgHgBgSQgCgQAAgRQgBgQAAgRQAAgQADgPQACgPgCgPQADABACABQAGAcAKAfQACAQADAPQAEAOACAOAlNvnQgBANgEANQgEANgBANQgDAQgCAQQgDAPAAAQQAAARAFAQQAFAOAFAGAlElcQAIAMAHANQAIAOAEAPAiplDQAAABAAAAQgBABAAABAislRQAAgDgBgDQgEgbgDgeQgDgaAAgZAi0jcQgIACgJABQgQADgQAAQgRABgRgCQgPgBgPgCQgPgBgPgDQgEgBgDgCQgEgDgFgBQgIgHAIgMAi0jcQAHgCAGgBQAGgBADAGQAEAJADAGQAGANAEAPQAEAQADAPQADAPACARQABAQABAQQgBASgFAPQAFASAAARQAAAPADAQQACAQACAPQABANAGAJQAGA9AVBHQAIAeAFAcQAFAjgBAfIAAABQAAAQABAQQAAARABAQQAAAOAHAIQABABAEAHQAHAQAGAUQAJgTAeADQAZABAKATQAIAOAJALQACADAGgBQAYgCALAQQAEgiAkARQAFACABAEQAFAOgCAOQAOgeAWAPQAFADACAEQACgQAWAFQAMADAHAHQgQgTAjgOQATgHATANQAKAIAJAGQgEgeATgVQAOAKAJALQADgkAlgSQAHgDAFgFQAHAbALAWQACAFABAGQADAVgGAUQATgPAYAGQAJADAAAPQgBAKgCAJQAMgeAaARQADACABAGQAEASgHAOQANgDADAZQACANgBANAi2j0QABANABALAkciTQAHAPAAARQAAAQABAQQAAARADAQQAEAUAHgPAjiiaQACAQACAPQACARAHAOAkFiUQAHANABASQABARAAARQAAAPAAAQAi8idQABAOgCANQgBAMgEAJAk3idQADARACARQABAQADAQQACAPACAQQABAMACgEAlTjlQgMgCgKAKQgEAQACAQQADAQACAQQACAQgBAQQgCAQgBARQgBAPAJAIQAAAAAAAAQAAAAgBABQgIAPARAcQAjA3gLBRQAAAAAAAAQAAAYADAYQADAOADAOQAAAAAAABQACAIADAIQAHAXAIAYQAHAXACAZQABAJACAJAlZipQAGAMADAPQAEAQACARQACAOACAPAqkFKQAYgGAUAIQAJAEACAIQAHgNAKgPQAOAVAQAYQAKgWAUALQAEADADgHQAFgJAEgJQAIAHAHAIQAEgdAaAHQAFACABAEQATgUAJARQAEAGADAIQAPgLATgEQAIgWAIgOQAEgJAMAIQAbATASANQALAHAMAFQAEgDAEgEQAMgKAJAEQACAPAFANQAHAWAEAYQADAVALAZQADAUAGAWQAHAXACAXQABAJABAIQAJACAKACAjYGeQAA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");
	this.shape_65.setTransform(233,130.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAzA1QgPgBgPgEQgPgFgNgIIgagRIAIgDIAbgMIAGgCIgGACIgbAMIgIADIgUAJIgIACQgNACgGgNIAGgGIAEgDIANgJIAIgEIgMgBQgUgDAEgTQABgEAEgEIAJABIAAADIAAADIAAgDIAAgDIAFABQATAIAJALIgBABIgSAJIASgJIACgBIAZgMQALgGAPgEQAQgEANgJQAEgCAEgBQAGgBAGABQAQAFgJANQgEAFgGAGIgDACIgFADIgBABQgNAIgOAEIgYAGIAYANQAGADAGAAQAHAAAGACIAEADQAFAEABAJQACAPgJADIgGABIgDgBg");
	this.shape_66.setTransform(327,43.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#996633").s().p("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");
	this.shape_67.setTransform(271.6,116.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(0.3,1,1).p("ANruFQABgLgBgMQgBgQAAgSQAAgRAAgQQAAgRACgPQACgRADgPQAEgQAAgPQABgQgDgOQgEgQABgRQAKgHAPgHQAPgGAPgFQAQgFAOgDQANgCAIAOQAHAMACARQABAQACAQQABAQAAARQAAARABARQABAQABAQQACARAAARQgBARgDAPQgCAMABAPQAGgCAGACQAQAFgJANQgEAFgGAGQgCABgBABQADACACgCQAOgDARACQAPABAPADQAQAEARAAQARABAPAHQAPAGABAQQAAARgKAMQgMALgRgJQgOgHgQgEQgPgEgPgDQgRgEgRABQgMABgHgEAO8v8QAAAaAAAZQAAAQAAAQAOLwHQACAYACAUQADAaAEAYQABAKAAAOAO0tfQAMgEAMgDQAOgEANgIQAAgBABAAQACgCADgBAPnuVQgEABgFACQgMAJgQAEQgPAEgMAGQgNAFgMAHQgBAAAAAAQgJgLgTgIQgDAAgDgBQABADgBADAOKtOQAEgCAEgBQAOgHAOgFQADgBADgBQALAGANAHQAGADAGAAQAHAAAGACQACABABACQAGAEABAJQACAPgJADQgCADAAAEQABARgBARQgCAPgCARQgCAPAAAQQAAAQgDAQQgDAPAAARQAAAQAAARQAAARABAQQACARAFAPQAEAQAGAPQAHAQAFAOQAGAPAAASQgBAIgDAGQgDAFgFADQgHAEgKAAQgRABgQgDQgPgCgPgBQgIAAgHgCQgJgCgHgFQgLgIADgTQADgQAAgRQAAgRgCgRQgDgPAAgRQgBgQABgSQAAgGgBgFQgDgPABgSQABgRACgPQABgRgCgRQgCgQABgSQAAgPgGgOQgFgPAAgRQABgQABgPQAEgBADgBQAKgEALgFQAOAJAMAIQAOAIAPAFQAPAEAPABQAFABAEgBAPntyQgCAQgBAPQgBAEACACAP7trQAJAEAKACAOzpcQAGAUAIAYQAIAXABAYQABASgFAQAOXqIQABAYAHAYQAHAWABAYQACAZAAAZQAAALAAACAOcmYQgKgIABgQAOcmYQAIACAJACQAZAEAaAAQANABALgDQAJgBAIgEQAFARADARQADAZgDAYQgFAhgHAgQgEAUAAAVQgBAUgBAVQAAAVABAUQADAnALAjQAIAcgEAdQgDAWAAAXQAAABAAAAQAAAUABAQQAAAGA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NAIAPAFQAQAFAQAEQAQAEAPAGQARAHAMgGQACgBADgBABJw9QANAKAOAEAAwxXQAIALASADQANADALAEAjH0AQgKABgJAAQgKAAgJAAQgIAAgIAAQgIAAgJgBQgJAAgJgBQgKgBgJgBQgIgCgIABQgJABgKAAQgJAAgJAAQgKABgGAEQABAIADAIQADAPACAPQACAPACAPQACAQAAAQQABASgDAQQgDAQgKAOQgEAGAEAHQAJANAPADAkgyTQAGAPABASQABALACAEAk5y0QAGALADAOQADAQAAAQQAAAJADAFAkCxzQAFALACAPAi2nZQAEguAPgvQAFgQACgPQAKg8gOg+QAAAAgBAAQAJgegCgXIAAAAQAAgQAGgUQAAAAAAAAQgJgdAEgiQAEghgBghQgBgkAHgbQAJgmgkAAAjFvfQAHAPAAAQQAAALADAKAjzvjQAFAOAFARQAFAPACAQAkXvkQAGANABARQACAQACARQACAQACARAk6vqQAGANADAOQACALACALQADAMACAMQADAPABAPQAAARgDAPQAAAEAAADAl4z+QgBgIAAgIAlYzQQACANADAOQADAQADAPQACAPACAQQABANACAHAlhwVQgCABgCAAQgLAMgCAPQgCAPAAAQQAAARAAARQAAARACAPQABAQACAOQACARACAQQADAQgBAQQABARAAAQQAAARgBAQQAAARgBARQgBAPgBAQQgCAQgCAPQgBARAAAQQAAAQAAAPQAAASABAQQAAAJAAAIQAAAAAAABQAAAIAAAHQAAASAHAKQABAAAAAAQgIAuAKA1QALADAKAGQAPAHAPAFQAPAFAPAFQANACARADQAQADAQAFQAQAEAOAGQAEACACACQACACABACQADACABAEQADAGAAAIQAAABgBACQgCAPAAAQQAAARgEAPQgBAJgFAEQgGAFgIABQgPADgRgBQgRAAgQgBQgQgCgPAAQgQAAgOgEQgJgCgIgDQgHgDgFgEQgLgHgBgSQgCgQAAgRQgBgQAAgRQAAgQADgPQACgPgCgPQADABACABQAGAcAKAfQACAQADAPQAEAOACAOAlNvnQgBANgEANQgEANgBANQgDAQgCAQQgDAPAAAQQAAARAFAQQAFAOAFAGAlElcQAIAMAHANQAIAOAEAPAiplDQAAABAAAAQgBABAAABAislRQAAgDgBgDQgEgbgDgeQgDgaAAgZAi0jcQgIACgJABQgQADgQAAQgRABgRgCQgPgBgPgCQgPgBgPgDQgEgBgDgCQgEgDgFgBQgIgHAIgMAi0jcQAHgCAGgBQAGgBADAGQAEAJADAGQAGANAEAPQAEAQADAPQADAPACARQABAQABAQQgBASgFAPQAFASAAARQAAAPADAQQACAQACAPQABANAGAJQAGA9AVBHQAIAeAFAcQAFAjgBAfIAAABQAAAQABAQQAAARABAQQAAAOAHAIQABABAEAHQAHAQAGAUQAJgTAeADQAZABAKATQAIAOAJALQACADAGgBQAYgCALAQQAEgiAkARQAFACABAEQAFAOgCAOQAOgeAWAPQAFADACAEQACgQAWAFQAMADAHAHQgQgTAjgOQATgHATANQAKAIAJAGQgEgeATgVQAOAKAJALQADgkAlgSQAHgDAFgFQAHAbALAWQACAFABAGQADAVgGAUQATgPAYAGQAJADAAAPQgBAKgCAJQAMgeAaARQADACABAGQAEASgHAOQANgDADAZQACANgBANAi2j0QABANABALAkciTQAHAPAAARQAAAQABAQQAAARADAQQAEAUAHgPAjiiaQACAQACAPQACARAHAOAkFiUQAHANABASQABARAAARQAAAPAAAQAi8idQABAOgCANQgBAMgEAJAk3idQADARACARQABAQADAQQACAPACAQQABAMACgEAlTjlQgMgCgKAKQgEAQACAQQADAQACAQQACAQgBAQQgCAQgBARQgBAPAJAIQAAAAAAAAQAAAAgBABQgIAPARAcQAjA3gLBRQAAAAAAAAQAAAYADAYQADAOADAOQAAAAAAABQACAIADAIQAHAXAIAYQAHAXACAZQABAJACAJAlZipQAGAMADAPQAEAQACARQACAOACAPAqkFKQAYgGAUAIQAJAEACAIQAHgNAKgPQAOAVAQAYQAKgWAUALQAEADADgHQAFgJAEgJQAIAHAHAIQAEgdAaAHQAFACABAEQATgUAJARQAEAGADAIQAPgLATgEQAIgWAIgOQAEgJAMAIQAbATASANQALAHAMAFQAEgDAEgEQAMgKAJAEQACAPAFANQAHAWAEAYQADAVALAZQADAUAGAWQAHAXACAXQABAJABAIQAJACAKACAi7GgQADAZADAZQAEAYADAZA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");
	this.shape_68.setTransform(233,130.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_52},{t:this.shape_60},{t:this.shape_50},{t:this.shape_49},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{scaleX:0.641,x:329.1}},{t:this.shape_56,p:{scaleX:0.641,x:329.1}}]},145).to({state:[{t:this.shape_64},{t:this.shape_67},{t:this.shape_66},{t:this.shape_61},{t:this.shape_52},{t:this.shape_60},{t:this.shape_50},{t:this.shape_49},{t:this.shape_65},{t:this.shape_58}]},17).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_52},{t:this.shape_60},{t:this.shape_50},{t:this.shape_49},{t:this.shape_68},{t:this.shape_58},{t:this.shape_57,p:{scaleX:0.92,x:319.7}},{t:this.shape_56,p:{scaleX:0.92,x:319.7}}]},63).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-2,470,279);


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
		var bgm = createjs.Sound.play('bgmCom',{loop:-1});
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
		
		 window.open ("com_scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("com_scene1.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mute
	this.vol_mute = new lib.vol_mute();
	this.vol_mute.parent = this;
	this.vol_mute.setTransform(36.8,4.1,1,1,0,0,0,15,14.1);
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
	this.vol_up.setTransform(-1.7,4.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.vol_pos(), 3);

	this.vol_dwn = new lib.vol_neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(-23.7,4.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.vol_neg(), 3);

	this.btn_menu = new lib.menu_main();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(-84.6,4.6,1,1.143,0,0,0,23.4,10.5);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.menu_main(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAYBrQgBgLgUgUQgQgRgKAAIAAh1QAKAAASgTQATgTAAgKg");
	this.shape.setTransform(-42.7,4.3,0.687,0.681);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADBMQgQgRgKAAIAAh1QAKgBASgSQATgTAAgJIAADTQgBgKgUgUg");
	this.shape_1.setTransform(-42.7,4.3,0.687,0.681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s("#000000").ss(1.5,1,1).rr(-0.75,-3.45,1.5,6.9,0.2);
	this.shape_2.setTransform(-47.2,4.3,1,1.003);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AAHAAQAAAKgHAGQgCAEgEACIAAgrQAEACACAEQACACACACQADAGAAAFg");
	this.shape_3.setTransform(-38.2,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGgUQAEABACAEIABABIADADQADAFAAAGQAAAJgGAGIgBABQgCAEgEACg");
	this.shape_4.setTransform(-41.5,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-19.7,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-486.5,-11,539.3,397), null);


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
(lib.com_scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2repeat:245});

	// timeline functions:
	this.frame_257 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(257).call(this.frame_257).wait(1));

	// Layer 2
	this.instance = new lib.scene3();
	this.instance.parent = this;
	this.instance.setTransform(277.5,181,1,1,0,0,0,233.5,137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(258));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAGQgCgDAAgDQAAgDACgCQADgCAEgBQAFABADACQACACAAADQAAADgCADQgEADgEgBQgEABgDgDg");
	this.shape.setTransform(306.9,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34883F").s().p("AghApQgIgGAAgHQAAgEACgDQADgDAEAAQAGAAACAGQAEAIANAAQAKAAAKgFQAKgFAAgFQAAgJgGgCQgFgCgNgBQgLAAgJgDQgMgFABgKQAAgMANgKQANgKAPAAQAGAAAJACQALAEAAAFQAAACgCADQgDADgEAAIgIgBIgJgCQgJABgGAEQgIADAAAFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACACAFAAIAPABQAOABAIAHQAJAHAAANQAAARgTAIQgOAHgRgBQgQABgJgIg");
	this.shape_1.setTransform(299.6,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#34883F").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_2.setTransform(290.6,32.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#34883F").s().p("AgsAxQgCgDAAgDIAAgIIAAgIIABgLIAAgLIAAgLIAAgMIgBgMIgBgLQAAgEADgDQAEgDAEAAQAEAAAGAIQAcAqAcAZIAAgKIgBgpIAAgHIgBgHQAAgJAJAAQALAAAAAgIgBAKIAAAnIgBAKQgBAIgIAAQgFAAgFgFQgZgWgdgmIgBATIAAAPIABAPQAAATgKAAQgEAAgDgDg");
	this.shape_3.setTransform(280.8,33);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#34883F").s().p("AgdAwQgHgGAAgUIABgZIACgZIgBgHIgBgGQABgKAIAAQAEAAACACIANgDIAMgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIAMgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgSAAQgWAAgGgGg");
	this.shape_4.setTransform(271.6,32.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#34883F").s().p("AAiAqIgDgQIgHggIgJAaIgEAMIgFALQgEAGgEAAQgHAAgCgHIgEgMIgJghIgIAeIgDAOQgCAJgHAAQgEAAgDgDQgCgCAAgEQAAgKAFgPIAHgYIADgTQADgNAEgFQADgFAFABQAFAAAEAFQACAGADARQACARAGASQAGgSAHgXIADgOQAEgJAGAAQAIgBADALIADAQQADAaAHAUIAFAUQAAAEgDADQgDACgEAAQgGABgEgKg");
	this.shape_5.setTransform(261.7,33.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#34883F").s().p("AgdAwQgGgGgBgUIACgZIABgZIAAgHIgBgGQAAgKAJAAQADAAABACIAPgDIALgBQAQAAAKAEQAGACAAAGQgBADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMACACQABABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_6.setTransform(252,32.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#34883F").s().p("AghAnIABgVQACgbAAghQAAgEADgCQACgDAEAAQAEAAACADQADACAAAEQAAAhgCAcIgBAPQAPABAWgIIADAAQAEAAADADQACACAAADQAAAGgGACQgHAEgQADQgNACgJAAQgQAAAAgNg");
	this.shape_7.setTransform(244.4,33.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34883F").s().p("AgcAwQgCgCAAgDIAAgSIABgdIABgdQAAgRAJABIAGgBIAKAAQALABALAHQAMAKAAANQAAAPgNAJQgLAJgPgBIgFAAIgBAeQAAADgCACQgCADgEAAQgEAAgCgDgAgLghIAAAJIgBAWIAEABQAJgBAGgFQAHgFAAgHQAAgGgGgEQgGgFgHAAIgDAAIgDABg");
	this.shape_8.setTransform(237.2,32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#34883F").s().p("AAjAqIgEgQIgHggIgJAaIgEAMIgFALQgDAGgGAAQgFAAgEgHIgDgMIgJghIgIAeIgCAOQgDAJgHAAQgEAAgDgDQgCgCAAgEQAAgKAEgPIAHgYIAEgTQADgNADgFQAEgFAFABQAFAAADAFQADAGADARQACARAGASQAHgSAFgXIAEgOQADgJAIAAQAGgBAEALIADAQQAEAaAFAUIAGAUQAAAEgDADQgDACgDAAQgIABgCgKg");
	this.shape_9.setTransform(228,33.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#34883F").s().p("AghAnQgOgMAAgSQAAgUANgSQAQgUAVAAQAWAAALAKQAMAKAAAUQAAAVgMASQgPAUgWAAQgTAAgNgLgAgTgTQgKAOAAAOQAAALAIAGQAIAHAMAAQANAAAJgOQAJgNAAgPQAAgNgGgFQgGgFgPAAQgMAAgKANg");
	this.shape_10.setTransform(217,33.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#34883F").s().p("AgcAnQgJgLAAgNQAAgVATgWQAPgSAQAAIAFAAIAEAAQADgCAEAAQAHAAABAHIABAMQAAAEgCADQgDADgEAAQgFAAgDgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgJANQgPAQAAAPQAAAHAFAFQAEAFAHAAQAFAAAGgDIAKgHQAFgDACAAQAFAAACADQADADgBADQABADgEADQgRAPgRAAQgOAAgLgKg");
	this.shape_11.setTransform(207.8,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#34883F").s().p("AgcAwQgIgGAAgUIABgZIACgZIgBgHIgBgGQABgKAIAAQAEAAACACIANgDIAMgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIAMgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgTAAQgVAAgFgGg");
	this.shape_12.setTransform(194.2,32.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#34883F").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_13.setTransform(185.5,32.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#34883F").s().p("AAWAkQgDgHgDgKIgPABIgOACIgLAVQgCAFgFAAQgEAAgDgDQgCgDAAgDQAAgDAJgTIgBgDQAAgDAGgDIAUgfQAPgYAEAAQAHAAACAJIAEAUIAKApIADAIQACAFAAAEQAAADgDACQgCADgEAAQgFAAgFgMgAgEAGIAIgBIAJgBIgFgUIgMAWg");
	this.shape_14.setTransform(176.1,33.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#34883F").s().p("AgbAnQgKgLAAgNQAAgVATgWQAQgSAPAAIAFAAIAEAAQADgCAEAAQAHAAABAHIABAMQAAAEgCADQgDADgEAAQgFAAgEgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgKANQgOAQAAAPQAAAHAEAFQAFAFAHAAQAFAAAHgDIAJgHQAFgDADAAQADAAADADQACADABADQgBADgDADQgRAPgRAAQgOAAgKgKg");
	this.shape_15.setTransform(167.5,33);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34883F").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_16.setTransform(159.7,33.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34883F").s().p("AgTAzQgHgBgEgDQgEAAgDgDQgCgCAAgEIAAgTIABgTIAAgUIgBgVQAAgEADgDQAEgEAEAAQACAAAIAEIAMAGQARAGAOAMQAQAPAAASQAAALgGAJQgFALgKAGQgKAHgTAAIgKgCgAgVAgIAFADIAHAAQANAAAGgDQAGgEADgGQAEgGAAgHQgBgPgSgLQgFgEgUgJg");
	this.shape_17.setTransform(151.8,33.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#34883F").s().p("AgdAwQgGgGgBgUIABgZIACgZIAAgHIgCgGQABgKAIAAQAEAAABACIAPgDIALgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_18.setTransform(143,32.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#34883F").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgyQAAgFACgDQAEgEAFAAIAQABQAJACAFADQAbANAAAVQAAAIgFAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgEAAQgDAAgDgDgAgTACIADAAQAPAAAHgDIAGgEIADgEQAAgIgJgGQgIgGgJgBIgIgBg");
	this.shape_19.setTransform(134.8,32.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#34883F").s().p("AgcAwQgCgCAAgDIAAgSIABgdIABgdQAAgRAJABIAGgBIAKAAQALABALAHQAMAKAAANQAAAPgNAJQgLAJgPgBIgFAAIgBAeQAAADgCACQgCADgEAAQgEAAgCgDgAgLghIAAAJIgBAWIAEABQAJgBAGgFQAHgFAAgHQAAgGgGgEQgGgFgHAAIgDAAIgDABg");
	this.shape_20.setTransform(127,32.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_21.setTransform(114.3,34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AACAUQgCgFgBgQIgCADIgJAYQgBAEgCABQgDAEgFAAQgDABgDgGQgEgGgCgIIgGgiIgBgJQAAgDADgCQACgCAEAAQAHgBABAHIACAJIABAJIACAPIALgfQADgJAGABQAHgBACAKIAEAQIADARIAKglQABgGAHABQADAAADACQADACAAADIgBADIgNAsQgCAGgEAFQgDAEgFAAQgIAAgFgPg");
	this.shape_22.setTransform(106.6,34.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_23.setTransform(99,33.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLA2QgDgDAAgDIAAgCIACgRIAAgfIgEABIgEAAQgEAAgCgCQgDgCAAgEQAAgGAGgCQADgBAIAAIABgHQACgOAGgHQAGgJAPAAQAMAAAAAJQAAAIgLAAQgHAAgEAFQgDAEAAAJIgBACIANgBQALAAAAAIQAAAIgMAAIgMAAIAAARIAAARQAAALgCAHQgBAHgGAAQgEAAgCgCg");
	this.shape_24.setTransform(86.9,33.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_25.setTransform(80.2,34.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AASAvQgFADgEABIgJABQgOAAgKgJQgJgJAAgPQAAgRAKgJQAJgLAPAAIAIABIAHADIACgdQABgIAHAAQAEAAACACQACACAAAEIgBAcIgCAaQAAAYACAHIAAACQAAAEgDABQgCADgDAAQgFAAgCgFgAgMACQgFAGAAALQAAAHAFAEQAFAGAHAAIAGgBIAGgFIACgCIAAgXQgCgEgDgBQgDgBgFAAQgIAAgFADg");
	this.shape_26.setTransform(67.3,32.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AANAeIgCgOIgBgNIAAgEIAAgHIAAgCIABgCQAAgGgDAAQgFAAgEAHQgGAHgCAKIgBAGIAAAFIgBAGIAAAFQAAAEgDACQgDADgDAAQgEAAgCgDQgDgCAAgEIAAgFIAAgGIAAgRIABgQIAAgFIAAgHQAAgDACgDQADgCAEAAQAIAAABAKIAAABQAJgKAJAAQAMABAFAJQADAIAAANIAAAEIAAAEIABAMIABANQAAADgCACQgDADgEAAQgHAAgBgHg");
	this.shape_27.setTransform(60.3,34.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_28.setTransform(53.2,34.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAcQgKgJAAgNQAAgMAJgNQAKgQANAAQAGAAAJAEQALAEAAAGQAAADgCACQgDADgDAAQgDAAgEgDQgEgDgHAAQgEAAgGAKQgFAJAAAGQAAAGAEAEQAFAEAGAAQAFAAAGgDQAGgEACAAQADAAADADQACACAAADQAAAFgLAFQgJAFgHAAQgNAAgJgIg");
	this.shape_29.setTransform(46.4,34.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAbQgKgIAAgOQAAgPAIgLQAJgNAQAAQAKAAAIAEQAJAFAAAKQAAAHgHAFIgPAGIgUAKQADADAEACQAEABAFAAQAJAAAFgDQAGgDADAAQAGAAABAGQgBAHgKAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgCAIIANgHIAOgHQgFgCgGAAQgGAAgEAEg");
	this.shape_30.setTransform(39.5,34.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRAhQgJgEAAgHQAAgGAHAAIAJACIAIACQALAAABgFQAAgEgJgEQgNgFgDgCQgJgGAAgJQAAgNAOgEQAHgDAPAAQAHAAADACQAEACABAGQgBALgGAAQgGAAgCgFIgEAAQgPAAAAAEQAAACAIAEIASAJQAJAGAAAIQAAALgKAGQgJAFgLAAQgIAAgHgDg");
	this.shape_31.setTransform(32.7,34.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVAbQgKgIAAgOQAAgPAIgLQAJgNAQAAQAKAAAIAEQAJAFAAAKQAAAHgHAFIgPAGIgUAKQADADAEACQAFABAEAAQAJAAAFgDQAGgDADAAQAGAAAAAGQAAAHgKAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgCAIIANgHIAOgHQgFgCgGAAQgGAAgEAEg");
	this.shape_32.setTransform(20.3,34.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAPAuIgDgOIgBgPIAAgFIAAgEIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgHAAgFAFQgDADgFAJQAAAXgCAFQgDAFgFAAQgEAAgCgCQgDgCAAgEIABgDIAAgRIABgqIAAgCIAAgKIgBgGIAAgGQAAgDACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgCAGAAQALAAAEAGQAEAEABAJIAAAPIACANIACAMIAAACQAAAEgCACQgDADgEAAQgGAAgCgHg");
	this.shape_33.setTransform(13.1,32.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_34.setTransform(6.1,33.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgJANQgCgCAAgCQAAgCAEgHIAFgLQACgDAEgBQADAAADACQACADAAADIgEAJIgFAJQgCAFgEgBQgDAAgDgCg");
	this.shape_35.setTransform(377.3,18.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#690FA2").s().p("AgdAwQgGgGAAgUIABgZIABgZIAAgHIgBgGQAAgKAJAAQADAAABACIAPgDIALgBQAQAAAKAEQAGACAAAGQAAADgDACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgaADIgBANQAAAMACACQAAABAIAAIALAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_36.setTransform(370.9,12.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#690FA2").s().p("AgNAtQgIgSgJgiIgFgRQgEgMAAgFQAAgEADgCQACgCAEAAQAGAAACAGIADALIAGAVIAJAfIAPgmIAFgPQAEgJAEgFQADgDAEAAQAEAAADACQACADAAAEIgBAFQgEAEgDAHIgEANIgRArIgIAPQgDAFgEAAQgGAAgDgGg");
	this.shape_37.setTransform(362.4,12.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#690FA2").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_38.setTransform(354.3,12.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#690FA2").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_39.setTransform(346.3,12.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#690FA2").s().p("AgbAmQgKgKAAgNQAAgVATgVQAQgTAPAAIAFAAIAEABQADgDAEAAQAGAAACAHIABAMQAAAEgCACQgDAEgEAAQgGAAgDgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgKANQgOAQAAAPQAAAHAEAFQAFAFAGAAQAGAAAHgDIAJgHQAFgDADAAQAEAAACADQADADAAADQAAAEgEADQgRAOgSAAQgOAAgJgLg");
	this.shape_40.setTransform(337.8,12.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#690FA2").s().p("AgdAwQgGgGgBgUIACgZIABgZIAAgHIgBgGQAAgKAJAAQADAAABACIAPgDIALgBQAQAAAKAEQAGACAAAGQgBADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMACACQABABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_41.setTransform(329.9,12.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#690FA2").s().p("AgbAsQgNgJAAgNQAAgJAJAAQAJAAAAAJQAAAEAHAEQAGAFAGAAQACAAABgJIAAgUIABgjIAAgEIgBAAIgHAAIgHAAQgEAAgDgCQgDgDAAgEQAAgIAMAAIAGAAIAGAAIAMAAIAMgBQARAAAAAKQAAADgDACQgCADgEAAIgEAAIgEAAIgFAAIAAAEQAAAtgGAVQgFAPgLAAQgMAAgMgIg");
	this.shape_42.setTransform(321.4,13.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#690FA2").s().p("AgTAzQgHgBgFgDQgEAAgCgDQgCgCgBgEIABgTIABgTIgBgUIAAgVQAAgEAEgDQADgEADAAQADAAAJAEIALAGQARAGANAMQARAPgBASQABALgGAJQgFALgKAGQgKAHgSAAIgLgCgAgWAgIAHADIAHAAQAMAAAGgDQAGgEADgGQAEgGgBgHQAAgPgSgLQgFgEgVgJg");
	this.shape_43.setTransform(312.5,12.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#690FA2").s().p("AAWAkQgDgIgDgJIgPABIgOACIgLAVQgCAFgFAAQgEAAgDgDQgCgDAAgDQAAgDAJgTIgBgDQAAgEAGgCIAUgfQAPgYAEAAQAHAAACAJIAEAUIAKApIADAIQACAGAAADQAAADgDACQgCADgEAAQgFAAgFgMgAgEAGIAIgBIAJgBIgFgUIgMAWg");
	this.shape_44.setTransform(302.8,13);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAhQgCgCAAgEIAAgoIAAgGIAAgGQAAgEACgCQACgDAEAAQAIAAABAIQAKgJAOAAQAMAAAAARIAAAEQAAAKgJAAQgHAAgBgIIAAgGQgOACgFAMIAAAfQgBAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_45.setTransform(289.4,14.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_46.setTransform(282.6,14.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000FF").s().p("AgsAxQgCgDAAgDIAAgIIAAgIIABgLIAAgLIAAgLIAAgMIgBgMIgBgLQAAgEADgDQAEgDAEAAQAEAAAGAIQAcAqAcAZIAAgKIgBgpIAAgHIgBgHQAAgJAJAAQALAAAAAgIgBAKIAAAnIgBAKQgBAIgIAAQgFAAgFgFQgZgWgdgmIgBATIAAAPIABAPQAAATgKAAQgEAAgDgDg");
	this.shape_47.setTransform(268.4,12.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000FF").s().p("AgZArQgQgMAAggIAAgJIAAgJIAAgHIABgHQAAgFABgEQADgHAEAAQAEABADACQACACAAAEIAAAKIAAALIAAAJIAAAJQAAAJACAIQADAKAFAEQACACAKAAQAQAAAGgcQADgOAAgbQAAgDACgEQADgEAFgBQAFABACADQABACAAADQAAAZgCAOQgEAUgKAPQgFAGgGAEQgIAGgIgBQgQABgIgHg");
	this.shape_48.setTransform(258.2,13.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0000FF").s().p("AghAnQgOgMAAgSQAAgVAOgRQAPgUAWAAQAWAAAKAKQAMAKAAAUQAAAVgNASQgOAUgWAAQgTAAgNgLgAgUgTQgJAOAAAOQAAALAIAGQAIAHAMgBQANAAAJgNQAJgMAAgQQAAgNgGgFQgGgFgOAAQgNAAgLANg");
	this.shape_49.setTransform(248.3,13);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0000FF").s().p("AgsAxQgCgDAAgDIAAgIIAAgIIABgLIAAgLIAAgLIAAgMIgBgMIgBgLQAAgEADgDQAEgDAEAAQAEAAAGAIQAcAqAcAZIAAgKIgBgpIAAgHIgBgHQAAgJAJAAQALAAAAAgIgBAKIAAAnIgBAKQgBAIgIAAQgFAAgFgFQgZgWgdgmIgBATIAAAPIABAPQAAATgKAAQgEAAgDgDg");
	this.shape_50.setTransform(237.9,12.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAPAeIgKADIgHACQgPAAgIgIQgHgJAAgPQAAgPALgLQALgLAPAAQAGAAAIAEQAKADAAAGQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAGIAAAJQAAAMACAEIADAHIACAGQAAADgDADQgCACgDAAQgDAAgHgFgAgIgMQgHAHAAAIQAAAJADADQADAFAHAAQADAAADgBQAEgCADgDIgCgVIAAgFIABgGIgCgBIgCAAQgIAAgGAHg");
	this.shape_51.setTransform(223.4,14.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRAhQgJgEAAgHQgBgGAIAAIAIACIAJACQALAAABgFQAAgEgJgEQgMgFgEgCQgJgGAAgJQAAgNANgEQAJgDAOAAQAHAAADACQAFACAAAGQAAALgHAAQgGAAgCgFIgEAAQgPAAAAAEQAAACAJAEIARAJQAIAGABAIQgBALgJAGQgJAFgLAAQgIAAgHgDg");
	this.shape_52.setTransform(210.8,14.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIAuQgBgDAAgDIgBgMIAAgLIABgPIAAgMQAAgFACgBQADgDAEAAQADAAACADQACABABAFIgBAMIAAAPIAAALIAAAMQAAADgDADQgCADgDgBQgEABgDgDgAgFggQgDgDAAgDQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape_53.setTransform(206.1,12.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00CC00").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_54.setTransform(193.9,12.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00CC00").s().p("AgsAxQgCgDAAgDIAAgIIAAgIIABgLIAAgLIAAgLIAAgMIgBgMIgBgLQAAgEADgDQAEgDAEAAQAEAAAGAIQAcAqAcAZIAAgKIgBgpIAAgHIgBgHQAAgJAJAAQALAAAAAgIgBAKIAAAnIgBAKQgBAIgIAAQgFAAgFgFQgZgWgdgmIgBATIAAAPIABAPQAAATgKAAQgEAAgDgDg");
	this.shape_55.setTransform(184.1,12.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00CC00").s().p("AgdAwQgGgGgBgUIABgZIACgZIAAgHIgCgGQABgKAIAAQAEAAACACIAOgDIALgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgHACQgGABgUAAQgUAAgHgGg");
	this.shape_56.setTransform(175,12.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00CC00").s().p("AAiAqIgDgQIgHggIgJAaIgEAMIgFALQgEAGgFAAQgFAAgDgHIgEgMIgJghIgIAeIgDAOQgCAJgHAAQgEAAgDgDQgCgCAAgEQAAgKAFgPIAHgYIADgTQADgOAEgEQADgFAFABQAFAAAEAFQACAGADARQACAQAGATQAGgSAHgXIADgOQAEgJAGAAQAIAAADAKIADAQQADAaAHAUIAFAUQAAAEgDADQgDADgEgBQgHABgDgKg");
	this.shape_57.setTransform(165.1,13);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00CC00").s().p("AgdAwQgGgGAAgUIABgZIABgZIAAgHIgBgGQAAgKAJAAQACAAACACIAPgDIALgBQAQAAAKAEQAGACAAAGQAAADgDACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgaADIgBANQAAAMACACQAAABAIAAIALAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_58.setTransform(155.4,12.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00CC00").s().p("AghAnIABgVQACgaAAgiQAAgEADgCQACgDAEAAQAEAAACADQADACAAAEQAAAigCAbIgBAPQAPABAWgIIADAAQAEAAADADQACACAAADQAAAGgGACQgHAEgQADQgNACgJAAQgQAAAAgNg");
	this.shape_59.setTransform(147.7,13);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00CC00").s().p("AgcAwQgCgCAAgDIAAgSIABgcIABgeQAAgRAJACIAGgCIAKAAQALABALAHQAMAKAAANQAAAPgNAJQgLAJgPAAIgFgBIgBAeQAAADgCACQgCADgEAAQgEAAgCgDgAgLghIAAAJIgBAWIAEABQAJAAAGgGQAHgFAAgHQAAgGgGgEQgGgFgHAAIgDAAIgDABg");
	this.shape_60.setTransform(140.5,12.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00CC00").s().p("AAjAqIgEgQIgHggIgJAaIgEAMIgFALQgDAGgFAAQgHAAgCgHIgEgMIgJghIgIAeIgCAOQgDAJgHAAQgEAAgDgDQgCgCAAgEQAAgKAEgPIAHgYIAEgTQADgOADgEQAEgFAFABQAFAAADAFQADAGADARQADAQAFATQAHgSAFgXIAEgOQADgJAIAAQAGAAAEAKIADAQQAEAaAFAUIAGAUQAAAEgDADQgDADgDgBQgIABgCgKg");
	this.shape_61.setTransform(131.4,13);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00CC00").s().p("AghAnQgOgMAAgSQAAgVANgRQAPgUAXAAQAVAAALAKQAMAKAAAUQAAAVgNASQgOAUgWAAQgTAAgNgLgAgTgTQgKAOAAAOQAAALAIAGQAIAHAMgBQANAAAJgNQAJgMAAgQQAAgNgGgFQgGgFgOAAQgNAAgKANg");
	this.shape_62.setTransform(120.3,13);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00CC00").s().p("AgcAmQgJgKAAgNQAAgVATgVQAPgTAQAAIAFAAIAEABQADgDAEAAQAHAAABAHIABAMQAAAEgCACQgCAEgFAAQgFAAgDgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgJANQgPAQAAAPQAAAHAFAFQAEAFAGAAQAGAAAGgDIAKgHQAFgDACAAQAEAAADADQACADAAADQABAEgEADQgRAOgSAAQgNAAgLgLg");
	this.shape_63.setTransform(111.2,12.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00CC00").s().p("AgdAwQgGgGgBgUIABgZIACgZIAAgHIgCgGQABgKAIAAQAEAAACACIAOgDIALgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgHACQgGABgUAAQgUAAgHgGg");
	this.shape_64.setTransform(97.6,12.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00CC00").s().p("AgNAtQgHgSgKgiIgGgRQgDgMAAgFQAAgEADgCQACgCAEAAQAGAAADAGIACALIAGAVIAKAfIAOgmIAFgPQAEgJAEgFQADgDAEAAQAEAAADACQACADAAAEIgBAFQgEAEgDAHIgFANIgQArIgIAPQgDAFgDAAQgHAAgDgGg");
	this.shape_65.setTransform(89,12.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00CC00").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_66.setTransform(80.9,12.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00CC00").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_67.setTransform(73,12.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00CC00").s().p("AgcAmQgJgKAAgNQAAgVATgVQAPgTAQAAIAFAAIAEABQADgDAEAAQAHAAABAHIABAMQAAAEgCACQgCAEgFAAQgFAAgDgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgJANQgPAQAAAPQAAAHAFAFQAEAFAGAAQAGAAAHgDIAJgHQAFgDACAAQAEAAADADQACADAAADQAAAEgDADQgRAOgSAAQgOAAgKgLg");
	this.shape_68.setTransform(64.5,12.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00CC00").s().p("AgdAwQgHgGAAgUIABgZIACgZIgBgHIgBgGQABgKAIAAQAEAAACACIANgDIAMgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIAMgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgTAAQgVAAgGgGg");
	this.shape_69.setTransform(56.5,12.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00CC00").s().p("AgbAsQgNgJAAgNQAAgJAJAAQAJAAAAAJQAAAEAHAEQAGAFAGAAQACAAABgJIAAgUIABgjIAAgEIgBAAIgHAAIgHAAQgEAAgDgCQgDgDAAgEQAAgIAMAAIAGAAIAGAAIAMAAIAMgBQARAAAAAKQAAADgDACQgCADgEAAIgEAAIgEAAIgFAAIAAAEQAAAtgGAVQgFAPgLAAQgMAAgMgIg");
	this.shape_70.setTransform(48,13.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00CC00").s().p("AgeAwQgDgDAAgEIAAhCIgBgJIABgIQABgGAKgBIAQgBQALAAALAHQANAJAAAOQAAAHgDAFQgCAEgFAEQAGADAFAGQAFAHAAAGQAAAJgJAHQgGAFgHADQgOAFgXAAQgDAAgDgDgAgQAiQALgBAMgDQALgDAAgEQgBgFgHgEQgFgDgFAAIgQgBgAgQgUIAAAOIAJAAQASgBAAgNQAAgFgGgEQgFgEgGAAIgKAAg");
	this.shape_71.setTransform(39.7,12.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00CC00").s().p("AghAnQgOgMAAgSQAAgVANgRQAQgUAVAAQAWAAALAKQAMAKAAAUQAAAVgMASQgPAUgWAAQgTAAgNgLgAgTgTQgKAOAAAOQAAALAIAGQAIAHAMgBQANAAAJgNQAJgMAAgQQAAgNgGgFQgGgFgPAAQgMAAgKANg");
	this.shape_72.setTransform(30.2,13);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AANAeIgCgOIgBgNIABgFIAAgGIAAgCIAAgCQAAgFgDgBQgFABgEAGQgGAHgCAKIgBAGIAAAFIgBAGIgBAGQAAADgCACQgDADgDAAQgEAAgCgDQgDgCAAgDIgBgGIAAgGIABgRIABgQIAAgFIAAgHQAAgDADgCQACgDAEAAQAIAAABAKIAAABQAJgKAJAAQAMAAAFALQADAGAAAOIAAAEIAAAEIABAMIABANQABADgDACQgDADgEAAQgHAAgBgHg");
	this.shape_73.setTransform(16.1,14.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAWAkQgDgIgDgJIgPABIgOACIgLAVQgCAFgFAAQgEAAgDgDQgCgDAAgDQAAgDAJgTIgBgDQAAgEAGgCIAUgfQAPgYAEAAQAHAAACAJIAEAUIAKApIADAIQACAGAAADQAAADgDACQgCADgEAAQgFAAgFgMgAgEAGIAIgBIAJgBIgFgUIgMAWg");
	this.shape_74.setTransform(7.8,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(258));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(4,1,1).p("EAkaAVfMhIzAAAMAAAgq9MBIzAAAg");
	this.shape_75.setTransform(277,181.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#33CCFF").s().p("EgkZAVfMAAAgq9MBIzAAAMAAAAq9g");
	this.shape_76.setTransform(277,181.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.UI}]}).wait(258));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(276.1,201.2,545.4,399.1);
// library properties:
lib.properties = {
	id: 'B01AAE74159A97409BEE2AF4EE752047',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/anobjectivecomplementisanounoradjective.mp3", id:"anobjectivecomplementisanounoradjective"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/Cowbell.mp3", id:"Cowbell"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/bgmCom.mp3", id:"bgmCom"},
		{src:"sounds/Synth_Blip_Down.mp3", id:"Synth_Blip_Down"},
		{src:"sounds/theobjectivecomplementisred.mp3", id:"theobjectivecomplementisred"},
		{src:"sounds/theobjectivecomplementisstronger.mp3", id:"theobjectivecomplementisstronger"},
		{src:"sounds/theybuiltthegoalpostsstronger.mp3", id:"theybuiltthegoalpostsstronger"},
		{src:"sounds/twiggspaintedthegoalpostred.mp3", id:"twiggspaintedthegoalpostred"}
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
an.compositions['B01AAE74159A97409BEE2AF4EE752047'] = {
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