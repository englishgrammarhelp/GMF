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


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990066").ss(4,1,1).p("AAAWQMAAAgsf");
	this.shape.setTransform(-241.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990066").ss(4,1,1).p("EglvgWPMBLfAAAMAAAAsfMhLfAAA");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F0EBFA","#D1B5FD"],[0,1],0,148.9,0,-148.8).s().p("EglvAWQMAAAgsfMBLfAAAMAAAAsfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.6,-144.4,487.2,288.8);


(lib.stablewheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AERAAQAAB1hQBSQhQBThxAAQhwAAhQhTQhPhSAAh1QAAh0BPhSQBQhTBwAAQBxAABQBTQBQBSAAB0gAgCCeQgHABgIAAQgwAAgjgjQgGgFgGgHQgGgHgEgHQgdgqAAg4QAAg5AdgqQAEgHAGgHQAGgGAGgGQAkgiAvAAQAIAAAHAAQguAGgiAoQgKAMgIAMQgWAnAAAyQAAAxAWAmQAIANAKAMQAiAoAuAGgAgShFQAXAAAQATQAQATAAAbQAAAZgQATQgQATgXAAQgXAAgQgTQgQgTAAgZQAAgbAQgTQAQgTAXAAgAgcgfQAIAAAFAHQAGAIAAAMQAAAKgGAHQgFAIgIAAQgIAAgGgIQgFgHAAgKQAAgMAFgIQAGgHAIAAgAgCifQAtAGAjAoQAoAvAABCQAABBgoAvQgjAogtAG");
	this.shape.setTransform(30.3,38.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWB9IgMgNIgLgNQgdgqAAg5QAAg4AdgqIALgOIAMgMQAigjAwABIAPAAQguAGgiAoQgJAMgIAMQgWAnAAAxQAAAxAWAnQAIANAJALQAiApAuAFIgPABQgwAAgigig");
	this.shape_1.setTransform(22.5,38.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhQBxQgKgMgHgNQgWgmAAgyQAAgxAWgnQAHgMAKgMQAigoAugGQAuAGAiAoQAoAvAABBQAABCgoAvQgiAoguAGQgugGgigogAAXApQARgTAAgaQAAgagRgTQgQgTgWAAQgXAAgRATQgQATAAAaQAAAaAQATQARATAXAAQAWAAAQgTgAgnAOQgFgHAAgLQAAgLAFgIQAFgHAIAAQAJAAAFAHQAFAIAAALQAAALgFAHQgFAIgJAAQgIAAgFgIg");
	this.shape_2.setTransform(30,38.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AjADHQhQhSABh1QgBh0BQhSQBQhTBwAAQBwAABRBTQBPBSAAB0QAAB1hPBSQhRBThwAAQhwAAhQhTgAhkh9IgMAMIgLAOQgdAqAAA5QAAA4AdAqIALAOIAMAMQAjAjAwAAIAPgBQAtgGAjgoQAogvgBhBQABhCgogvQgjgogtgGIgPAAIAAAAQgwAAgjAig");
	this.shape_3.setTransform(30.3,38.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AAABAQgWABgRgUQgQgSAAgbQAAgZAQgTQARgTAWAAQAXAAAQATQARATAAAZQAAAbgRASQgQAUgXgBIAAAAgAgXgSQgFAIAAAKQAAAMAFAHQAFAIAIAAQAJAAAEgIQAFgHAAgMQAAgKgFgIQgEgHgJAAIAAAAQgIAAgFAHg");
	this.shape_4.setTransform(28.4,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,9.5,56.5,58.4);


(lib.wordsdefinitionpt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNALQgFgEAAgHQAAgFAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAFQAAAHgGAEQgFAFgIAAQgHAAgGgFg");
	this.shape.setTransform(281.8,63.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag5BZQgGgGAAgHIAAh7IAAgQQgBgJABgGQACgLATgCQAJgDAUAAQAVAAAVAOQAXARAAAZQAAAOgFAJQgDAHgKAIQALAFAJALQAKANAAAMQAAAQgRAOQgLAJgNAFQgaAKgqAAQgHAAgFgGgAgfA/QAUgBAXgHQAUgGAAgHQAAgJgNgHQgKgFgJgBIgfgBgAgfg+IAAAZIAAAZIAQAAQAjgCAAgYQAAgIgLgIQgJgIgNAAIgSAAg");
	this.shape_1.setTransform(269.5,55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag/BYQgFgFAAgHIAAgaIABgaIAAheQAAgHAEgHQAGgIALABIAdACQAQACALAGQAyAaAAAlQAAAPgKALQgLAMgVAIQAfARAQASQAEAFAAAGQAAAGgFAFQgFAFgHAAQgGAAgFgFQgkgigpgMIABAlQAAAHgFAFQgFAEgHAAQgHAAgEgEgAgkAEIAGAAQAcAAANgHQAGgDAFgFQAFgFAAgCQAAgNgRgNQgOgLgSgCIgOgBg");
	this.shape_2.setTransform(254.1,55.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag2BaQgNgMAAgmQABgPACgfIACgvIgBgMIgCgMQAAgSARAAQAGAAADADIAagFIAXgCQAdAAASAHQAKAEAAALQABAGgEAFQgGAFgHAAIgEgBQgUgFgRAAIgSACQgLABgLADIAAAuIAsgEIAcgCQAHAAAGAEQAEAEAAAIQAAANgPABIgcADIgxAEIAAAYQAAAXACADQACACANAAIAUAAIAWgBIAHAAIAIgBQAGAAAFAEQAFAEABAIQgBANgOADQgLACgkAAQgmAAgMgKg");
	this.shape_3.setTransform(239,55.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgZBTQgOgigSg/IgJggQgHgWAAgIQAAgHAFgFQAFgEAHAAQALAAAFAMIAEAUIALAmQAJAgAJAaIAahGIALgcQAHgRAIgJQAFgGAHAAQAHAAAFAFQAFAFAAAGQAAAFgDAFQgHAJgFANIgIAXIggBQQgFAOgIAOQgFAKgJAAQgMAAgFgMg");
	this.shape_4.setTransform(223.1,55.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoAyQgTgOAAgbQAAgcAQgVQARgXAdAAQATAAAOAGQASAKAAARQAAANgPALQgGAEgUAIIgmARQAFAGAIADQAIADAJAAQAQABALgHQAKgGAGAAQAMAAAAAMQAAAOgUAIQgQAHgTAAQgbAAgSgOgAgPgcQgIAIgFAPIAagMQAQgHAJgGQgIgFgMABQgLAAgHAGg");
	this.shape_5.setTransform(197.7,58.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbBWQgDgKgCgRQgCgRAAgLIAAgIIABgJIgBgKQgBgFgFgBQgNABgJALQgGAFgJARQAAArgEAIQgFAKgKAAQgGAAgFgFQgFgEAAgHIABgGQABgCAAgdIAAhOIABgDIAAgTIgBgKIgBgMQAAgGAFgFQAFgDAHAAQALAAAEALQACAIAAAOIAAAYIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAJABAQIABAdIADAXIAEAXIAAAEQAAAHgFAEQgFAFgGgBQgMAAgEgLg");
	this.shape_6.setTransform(184.4,54.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKBSQgFgEAAgHIAAgNIAAgMIgBg8IgXgCQgOgCAAgNQAAgHAEgFQAFgEAHAAIAUACIgBgNIAAgMQAAgGAEgEQAFgFAHAAQAQAAAAAeIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgFAEgGABIgGAAIgGAAIgLAAIACA9IAAAGIABAGQAAAbgRAAQgGAAgFgDg");
	this.shape_7.setTransform(171.7,56.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag2A9QgDgEABgHIAMhMIADgQIADgMQACgEAEgCQAEgDAFAAQANAAABAOQAWgQAZAAQATAAAAAVIgBAKIgBAIQgBAHgEAGQgFAFgJAAQgMAAAAgLIAAgEIABgMQgaAEgPAXIgJA6QgBAHgGAEQgFAFgHAAQgGAAgEgFg");
	this.shape_8.setTransform(428.9,22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgsAzQgQgMAAgUQAAgcAVgbQAUgbAhAAQAWAAAMAHQANAIAAAOQAAAMgKAJQgKAIgbAKIgqASQAKANATAAQAQAAAMgHQALgGAGAAQAKAAAAAJQAAAOgTAJQgSAJgVAAQgbAAgPgNgAgagFIAcgMQAPgGAMgIQgHgDgMAAQgVAAgPAdg");
	this.shape_9.setTransform(415.7,22.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AggAsQAAgWAMgiQgUgBgFgEQgEgEAAgIQAAgIAEgEQAFgFAIABIASABIADgXQAAgGAGgFQAEgEAGAAQAOAAAAAUIgDASIAGgBQAHgBALACQAKACABAMQAAAIgGAEQgFAFgHgBIgJAAIgOABIgBAEIgCADQgIAeAAAPQABAOAEAAQAGAAAGgGQAGgHAFAAQAFABAEAEQAEADABAHQAAALgOAJQgNAIgOAAQggAAAAgng");
	this.shape_10.setTransform(404.4,20.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AguBjQgEgEABgHIABgDQAFgRADgOIAJg6IgIABIgHABQgHAAgEgFQgEgEABgHQACgLAMgDQAFgCAQAAIADgNQAIgaANgNQAPgQAcAAQAVAAgCAPQgDAPgTAAQgPAAgIAKQgGAIgEAQIgBADIAXgCQAWAAgCAPQgDAQgXgBIgWABIgFAfIgEAfQgEAWgEAMQgFANgNAAQgGAAgFgEg");
	this.shape_11.setTransform(393.3,20);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWA2QgWAKgMAAQgwAAAAgsQAAglAagXQAZgYAfAAQALAAAOAHQAOAGAAAJQAAAGgDAEQgEAJgDASQgDAQAAAKIABAHIADALIADALQAAAFgFAFQgGAFgHAAQgFAAgKgLgAgMgVQgPAPAAAVQAAAVASAAQAOAAANgJQABgsAHgQQgEgDgDAAQgRAAgOAPg");
	this.shape_12.setTransform(378.5,22.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_13.setTransform(353.2,19.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AA8BYQgKAAgJgWQgGgNgFgSIgcACQgRABgKACIgTAnQgFAIgJAAQgHAAgFgEQgFgEAAgHQAAgGARgjQgCgDABgDQAAgGALgDQARgcAUgfQAcgsAHAAQANAAAEAPIAIAmIARBMIAGAPQAEALAAAFQAAAGgFAFQgEAEgGAAIgBAAgAgIALIAPgCIARgBIgIgnIgYAqg");
	this.shape_14.setTransform(335.9,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AAyBZQgFgEAAgHIgBgZIgBgaIABgMQgTABgaAFIgtAJIgCAYIgBAZQAAAHgEADQgFAFgHAAQgGAAgFgFQgFgEAAgHIACgiIACgjIABgrIABgrQAAgHAEgFQAFgDAHAAQAHAAAEAEQAFAEAAAHIgBAbIgBAbIAAALIgBALIAtgIQAZgFAUAAIABgrQAAgJAGgMQAGgOAIAAQAHAAAEADQAGAFAAAHIgBADQgCAJAAAGIgBALIAAAKIgCAhIgBAgIABAZIACAaQAAAHgFAEQgEAFgHAAQgHAAgFgFg");
	this.shape_15.setTransform(318.2,19.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AAYBbQgHgEAAgHQgFgNgCgJIgNhKQgIAWgJATQgNAcgEAQIABAGQAAAHgGAFQgGAEgHAAQgIAAgGgFQgGgFAAgIIgEgOIgMg2QgIgbgSgzIgBgGQAAgHAFgEQAFgEAHAAQAJAAAFAHQADAFADAKQAMAhAOA/QAKgXAJgeQAIgaAFgKQAMgaALAAQAMAAAFANQACAGADAPIADAYQACAUANA0QAMgdAVg1IAGgWQAEgNAFgIQAFgIAKAAQAHAAAFAEQAEAFAAAHQAAACgEAKIgEAMIgHAUIgVAyQgPAhgGARIgJATQgGAKgLAAQgHAAgFgEg");
	this.shape_16.setTransform(296.3,20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AguA9QgEgEAAgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAZAAQAYAAgBAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgFAEQgEAFgHAAQgHAAgFgFg");
	this.shape_17.setTransform(267.9,22.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_18.setTransform(255.5,22.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AA/BNIgGgdQgFgVgIgmIgRAwIgHAWQgEAMgFAJQgGALgKAAQgLAAgGgNIgHgWQgJgegHggIgPA4IgEAaQgFARgNAAQgIAAgEgGQgFgEAAgHQABgTAHgbIAOgsIAGgkQAGgZAGgIQAGgJAJAAQALAAAFALQAFAKAFAgQAFAeAKAjQANgiAMgqIAGgbQAGgRAOAAQAMAAAHAUQACAIADAVQAHAxAKAkQALAkgBADQABAHgGAFQgFAEgGAAQgNAAgHgSg");
	this.shape_19.setTransform(228.5,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("Ag9BIQgagVAAgiQAAgnAZggQAcglApAAQApAAAUASQAVATAAAmQgBAngWAgQgaAlgrAAQgiAAgYgUgAgkgiQgSAXAAAcQAAAUAPAMQAPAMAVAAQAaAAAQgaQAQgXABgcQgBgZgKgJQgLgKgbAAQgZAAgSAag");
	this.shape_20.setTransform(208.1,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AAyBZQgFgEAAgHIgBgZIgBgaIABgMQgTABgaAFIgtAJIgCAYIgBAZQAAAHgEADQgFAFgHAAQgGAAgFgFQgFgEAAgHIACgiIACgjIABgrIABgrQAAgHAEgFQAFgDAHAAQAHAAAEAEQAFAEAAAHIgBAbIgBAbIAAALIgBALIAtgIQAZgFAUAAIABgrQAAgJAGgMQAGgOAIAAQAHAAAEADQAGAFAAAHIgBADQgCAJAAAGIgBALIAAAKIgCAhIgBAgIABAZIACAaQAAAHgFAEQgEAFgHAAQgHAAgFgFg");
	this.shape_21.setTransform(189.6,19.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AAYBbQgHgEAAgHQgFgNgCgJIgNhKQgIAWgJATQgNAcgEAQIABAGQAAAHgGAFQgGAEgHAAQgIAAgGgFQgGgFAAgIIgEgOIgMg2QgIgbgSgzIgBgGQAAgHAFgEQAFgEAHAAQAJAAAFAHQADAFADAKQAMAhAOA/QAKgXAJgeQAIgaAFgKQAMgaALAAQAMAAAFANQACAGADAPIADAYQACAUANA0QAMgdAVg1IAGgWQAEgNAFgIQAFgIAKAAQAHAAAFAEQAEAFAAAHQAAACgEAKIgEAMIgHAUIgVAyQgPAhgGARIgJATQgGAKgLAAQgHAAgFgEg");
	this.shape_22.setTransform(167.7,20.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghA9QgRgGAAgNQAAgMAOAAQAFAAALAEQAKADAGAAQAWAAAAgKQAAgFgRgIQgWgKgHgEQgRgMAAgQQABgYAYgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgMAAQgLAAgCgKIgKAAQgbgBAAAJQAAAEAPAHQAYAMAIAFQARALAAAQQAAAVgSAJQgQAJgVAAQgQAAgNgFg");
	this.shape_23.setTransform(138.8,22.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAHAAQANAAADAOQATgQAaAAQAXAAABAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgGAAgFgFg");
	this.shape_24.setTransform(127.5,22.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAdAAQATAAAOAGQASAKAAARQAAANgOALQgHAEgUAIIgnARQAHAGAHADQAIADAJABQAQAAALgHQAKgGAGAAQAMAAAAAMQAAAOgTAIQgRAHgTAAQgbAAgRgOgAgPgcQgIAIgFAPIAagMQAQgHAJgGQgIgFgMABQgLAAgHAGg");
	this.shape_25.setTransform(114.7,22.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAEAlQgDgLgDgcIgDAGIgSAtQgCAFgDADQgFAIgKAAQgGAAgGgKQgGgKgEgQQgEgOgHgwIgCgRQAAgGAFgEQAFgFAGAAQANAAADANIADAQIABAQIAFAdIAUg6QAFgPAMAAQANAAAEARIAGAfIAGAgIAThGQACgLAMAAQAHAAAFAFQAFAEAAAHIAAADQgNAugMAkQgEALgIALQgFAIgKAAQgOAAgJgdg");
	this.shape_26.setTransform(100,22.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghA9QgRgGAAgNQAAgMAOAAQAGAAAJAEQALADAFAAQAXAAAAgKQAAgFgQgIQgYgKgGgEQgQgMAAgQQAAgYAYgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgKIgJAAQgbgBgBAJQABAEAPAHQAYAMAIAFQARALAAAQQAAAVgTAJQgPAJgVAAQgPAAgOgFg");
	this.shape_27.setTransform(85.7,22.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_28.setTransform(73.9,22.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAcA2IgTAIQgIACgFAAQgcAAgOgOQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAIAAAKQAAADgDADIgBANIgBAQQAAAVADAJIAFANIAFALQAAAHgFAEQgEADgHAAQgFAAgMgKgAgQgXQgMANAAAPQAAAQAGAHQAGAJALgBQAGABAHgDQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_29.setTransform(60.9,22.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKBRQgFgDAAgHIAAgNIAAgNIgBg7IgXgCQgOgCAAgNQAAgHAEgFQAFgEAHAAIAUACIgBgNIAAgMQAAgGAEgEQAGgEAGgBQAQABAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgEAEgIAAIgFAAIgGAAIgLABIACA9IAAAGIABAGQgBAbgQAAQgGAAgFgEg");
	this.shape_30.setTransform(38.1,20.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag3BVQgEgFAAgGQAAgGAEgFQAGgFAHAAQAIAAAOgCIAAg1QAAgfADgdIgaABQgHAAgFgEQgEgFAAgHQAAgGAEgFQAEgEAHAAIAigBQAWAAAjAEQANACAAAPQABAHgGAEQgEAEgGAAIgfgEQgCAXABAiIAAA1IAgAAQAGgBAFAFQAFAEgBAHQABAHgFAFQgFAEgHAAIgVAAIgTAAIgXACIgYADQgHAAgFgFg");
	this.shape_31.setTransform(25.8,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordsdefinitionpt2, new cjs.Rectangle(0,0,453,72.9), null);


(lib.wordsdefinitionpt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNALQgFgFAAgFQAAgGAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAGQAAAFgGAFQgFAFgIAAQgHAAgGgFg");
	this.shape.setTransform(267.7,99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_1.setTransform(256.4,93.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_2.setTransform(243.6,93.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOBVQgFgFAAgGIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAGgFAFQgEAEgGABQgHgBgFgEgAgKg7QgGgFAAgHQAAgHAGgGQAFgEAHAAQAHAAAGAEQAFAGAAAHQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_3.setTransform(234.3,90.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKBSQgFgFAAgGIAAgNIAAgMIgCg8IgVgCQgPgBAAgOQAAgHAFgEQAEgFAHAAIAUACIgBgNIAAgLQAAgHAEgEQAGgFAGAAQARAAAAAdIAAAKIALgBQAOAAAEACQAKADAAALQAAAHgEAEQgGAEgHABIgFAAIgGAAIgLABIACA8IAAAGIABAGQgBAbgRAAQgFAAgFgDg");
	this.shape_4.setTransform(225.1,91.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkAzQgSgPgBgZQABgXAQgZQATgcAYAAQAMAAAQAHQAUAIAAAKQAAAGgEAEQgEAFgHAAQgFAAgHgFQgHgGgOAAQgIAAgKASQgLARAAAMQAAAMAJAHQAIAHANgBQAIAAALgFQAMgHADAAQAGABAFAEQAEAEABAHQgBAIgTAKQgTAIgLAAQgZAAgRgPg");
	this.shape_5.setTransform(213,93.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFgBQgcABgOgQQgOgPAAgeQAAgbAVgUQAVgVAcABQALAAAOAGQASAIAAAJQAAAFgDACIgBANIgBAQQAAAVADAKIAFAMIAFALQAAAGgFAFQgEADgHAAQgFAAgMgKgAgQgXQgMANAAAPQAAAQAGAHQAGAJALgBQAGAAAHgCQAGgCAGgFQgEgbAAgOIABgIIABgLIgEgBIgDgBQgPAAgMAMg");
	this.shape_6.setTransform(200.4,93.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAAKAEQALADAGAAQAWAAAAgJQAAgGgQgIQgYgKgGgEQgQgMgBgQQAAgYAZgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgJIgJgBQgcgBABAJQgBAEARAHQAXALAIAGQARAMAAAPQAAAVgTAJQgPAJgVAAQgPAAgNgFg");
	this.shape_7.setTransform(442.8,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLAiQgEgDAAgGIABgvQABgIAEgEQADgDAHAAQAGAAAEADQAFAEAAAGIAAAFIgBAEIgBAoQAAAGgEADQgEAEgGAAQgGAAgFgEg");
	this.shape_8.setTransform(431.9,49.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Ag5BZQgGgGAAgHIAAh7IAAgQQgBgJABgGQACgLATgCQAJgDAUAAQAVAAAVAOQAXARAAAZQAAAOgFAJQgDAHgKAIQALAFAJALQAKANAAAMQAAAQgRAOQgLAJgNAFQgaAKgqAAQgHAAgFgGgAgfA/QAUgBAXgHQAUgGAAgHQAAgJgNgHQgKgFgJgBIgfgBgAgfg+IAAAZIAAAZIAQAAQAjgCAAgYQAAgIgLgIQgJgIgNAAIgSAAg");
	this.shape_9.setTransform(419.6,55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag/BYQgFgFAAgHIAAgaIABgaIAAheQAAgHAEgHQAGgIALABIAdACQAQACALAGQAyAaAAAlQAAAPgKALQgLAMgVAIQAfARAQASQAEAFAAAGQAAAGgFAFQgFAFgHAAQgGAAgFgFQgkgigpgMIABAlQAAAHgFAFQgFAEgHAAQgHAAgEgEgAgkAEIAGAAQAcAAANgHQAGgDAFgFQAFgFAAgCQAAgNgRgNQgOgLgSgCIgOgBg");
	this.shape_10.setTransform(404.2,55.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ag2BaQgNgMABgmQgBgPADgfIACgvIgBgMIgCgMQAAgSARAAQAGAAAEADIAagFIAVgCQAeAAASAHQALAEAAALQAAAGgFAFQgFAFgHAAIgFgBQgSgFgTAAIgRACQgKABgLADIgBAuIAsgEIAcgCQAIAAAEAEQAFAEAAAIQAAANgPABIgcADIgxAEIgBAYQAAAXADADQABACAOAAIAVAAIAVgBIAHAAIAIgBQAGAAAFAEQAGAEAAAIQAAANgPADQgLACgkAAQgmAAgMgKg");
	this.shape_11.setTransform(389.1,55.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgZBTQgOgigSg/IgJggQgHgWAAgIQAAgHAFgFQAFgEAHAAQALAAAFAMIAEAUIALAmQAJAgAJAaIAahGIALgcQAHgRAIgJQAFgGAHAAQAHAAAFAFQAFAFAAAGQAAAFgDAFQgHAJgFANIgIAXIggBQQgFAOgIAOQgFAKgJAAQgMAAgFgMg");
	this.shape_12.setTransform(373.2,55.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnAyQgUgOAAgbQAAgcAPgVQASgXAdAAQATAAAOAGQASAKAAARQAAANgOALQgHAEgUAIIgnARQAHAGAHADQAIADAJAAQAQABALgHQAKgGAGAAQAMAAAAAMQAAAOgTAIQgRAHgTAAQgbAAgRgOgAgPgcQgIAIgFAPIAagMQAQgHAJgGQgIgFgMABQgLAAgHAGg");
	this.shape_13.setTransform(347.8,58.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbBWQgDgKgCgRQgCgRAAgLIAAgIIABgJIgBgKQgBgFgFgBQgNABgJALQgGAFgJARQAAArgEAIQgFAKgKAAQgGAAgFgFQgFgEAAgHIABgGQABgCAAgdIAAhOIABgDIAAgTIgBgKIgBgMQAAgGAFgFQAFgDAHAAQALAAAEALQACAIAAAOIAAAYIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAJABAQIABAdIADAXIAEAXIAAAEQAAAHgFAEQgFAFgGgBQgMAAgEgLg");
	this.shape_14.setTransform(334.5,54.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKBSQgFgEAAgHIABgNIAAgMIgCg8IgXgCQgOgCAAgNQAAgHAEgFQAFgEAHAAIAUACIgBgNIgBgMQABgGAFgEQAEgFAHAAQAQAAAAAeIAAAJIAMgBQAOAAAEACQAKADAAALQAAAHgFAEQgEAEgHABIgGAAIgGAAIgLAAIACA9IAAAGIAAAGQAAAbgQAAQgGAAgFgDg");
	this.shape_15.setTransform(321.8,56.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghA9QgRgGAAgNQAAgMAOAAQAGAAAKAEQAKADAFAAQAXAAAAgJQAAgGgRgIQgWgKgHgEQgQgMAAgQQgBgYAZgIQAPgFAdAAQALAAAGADQAIAEAAALQAAAVgMAAQgLAAgCgJIgKgBQgcgBAAAJQAAAEAQAHQAYALAIAGQARAMAAAPQAAAVgSAJQgQAJgVAAQgPAAgOgFg");
	this.shape_16.setTransform(299.7,58);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoAyQgTgOAAgbQAAgcAQgVQARgXAdAAQATAAAOAGQASAKAAARQAAANgOALQgHAEgUAIIgmARQAFAGAIADQAIADAJAAQAQABALgHQAKgGAGAAQAMAAAAAMQAAAOgUAIQgQAHgTAAQgbAAgSgOgAgPgcQgIAIgFAPIAagMQAPgHAKgGQgIgFgMABQgLAAgHAGg");
	this.shape_17.setTransform(287.1,58.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQA0IgohdIgBgHQAAgGAFgFQAGgEAGAAQAKAAAFAJQAGAOATA0IAQgoIAKgZQAGgKAJAAQAGAAAGAFQAFAEAAAGQAAAFgTAqIgZA0QAAAGgEADQgFAEgFAAQgMAAgEgMg");
	this.shape_18.setTransform(275,58);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGABQgHgBgFgEgAgKg7QgGgFAAgHQAAgHAGgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_19.setTransform(265.8,55.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgnAyQgUgOAAgbQAAgcAPgVQASgXAcAAQAVAAANAGQASAKAAARQAAANgOALQgHAEgUAIIgnARQAHAGAHADQAIADAKAAQAPABALgHQAKgGAFAAQANAAAAAMQAAAOgTAIQgRAHgSAAQgbAAgSgOgAgQgcQgHAIgFAPIAbgMQAPgHAJgGQgIgFgNABQgJAAgJAGg");
	this.shape_20.setTransform(255.3,58.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkAzQgTgPAAgZQAAgXARgZQATgcAYAAQAMAAAQAHQAUAHAAALQAAAGgEAEQgEAFgHAAQgFAAgHgGQgHgFgOAAQgIAAgKASQgLARAAAMQAAAMAJAHQAJAHAMAAQAIgBALgFQAMgHADAAQAHABAEAEQAFAFgBAGQABAJgVAJQgRAIgMAAQgZAAgRgPg");
	this.shape_21.setTransform(242.4,58.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgnAyQgUgOAAgbQAAgcAPgVQASgXAcAAQAVAAANAGQASAKAAARQAAANgPALQgGAEgUAIIgnARQAHAGAHADQAIADAKAAQAPABALgHQAKgGAFAAQANAAAAAMQAAAOgTAIQgRAHgSAAQgbAAgSgOgAgQgcQgHAIgEAPIAagMQAOgHAKgGQgIgFgNABQgJAAgJAGg");
	this.shape_22.setTransform(229.6,58.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AguA9QgDgEgBgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAZAAQAYAAgBAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgFAEQgEAFgHAAQgHAAgFgFg");
	this.shape_23.setTransform(217.5,58.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKBSQgFgEAAgHIAAgNIAAgMIgCg8IgVgCQgPgCAAgNQAAgHAFgFQAEgEAHAAIAUACIgBgNIAAgMQgBgGAGgEQAFgFAGAAQARAAAAAeIAAAJIALgBQAOAAAEACQAKADAAALQAAAHgEAEQgGAEgHABIgFAAIgGAAIgLAAIACA9IAAAGIAAAGQAAAbgRAAQgFAAgFgDg");
	this.shape_24.setTransform(195.5,56.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFgBQgcABgOgPQgOgQAAgeQAAgbAVgUQAVgVAcABQALAAAOAGQASAIAAAKQAAADgDADIgBANIgBAQQAAAVADAKIAFAMIAFALQAAAGgFAFQgEADgHAAQgFAAgMgKgAgQgXQgMANAAAPQAAAQAGAHQAGAJALgBQAGABAHgDQAGgCAGgFQgEgbAAgOIABgIIABgLIgEgCIgDAAQgPgBgMANg");
	this.shape_25.setTransform(183.2,58.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAbBWQgDgKgCgRQgCgRAAgLIAAgIIABgJIgBgKQgBgFgFgBQgNABgJALQgGAFgJARQAAArgEAIQgFAKgKAAQgGAAgFgFQgFgEAAgHIABgGQABgCAAgdIAAhOIABgDIAAgTIgBgKIgBgMQAAgGAFgFQAFgDAHAAQALAAAEALQACAIAAAOIAAAYIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAJABAQIABAdIADAXIAEAXIAAAEQAAAHgFAEQgFAFgGgBQgMAAgEgLg");
	this.shape_26.setTransform(169.7,54.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKBSQgFgEAAgHIABgNIAAgMIgDg8IgVgCQgPgCAAgNQAAgHAFgFQAEgEAHAAIAUACIgBgNIgBgMQAAgGAGgEQAEgFAHAAQARAAgBAeIAAAJIAMgBQAOAAAEACQAKADAAALQAAAHgEAEQgFAEgHABIgGAAIgGAAIgLAAIACA9IAAAGIAAAGQABAbgSAAQgFAAgFgDg");
	this.shape_27.setTransform(157,56.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0066FF").s().p("AhRBaQgFgEAAgHIABgOIABgOIAAgVIAAgVIAAgVIAAgXIgCgUIgBgVQAAgHAGgGQAGgGAIAAQAIAAALAPQA0BMA0AvIAAgRQAAg5gBgUIgCgNIgBgNQAAgQARAAQATAAAAA7IAAASIAABJIgCATQgDAPgPAAQgIAAgKgJQgtgpg4hIIgBAkIABAcIAAAcQAAAjgRAAQgIAAgFgGg");
	this.shape_28.setTransform(131.1,55.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0066FF").s().p("AguBQQgfgYAAg6IAAgRIABgQIAAgNIABgOQAAgJADgJQAFgKAIgBQAGABAFAEQAFAEAAAHIAAAUIAAAUIAAAQIgBARQAAARAEAPQAFASAKAHQAEAFATAAQAeAAALg1QAFgaAAgzQAAgGAEgGQAFgJAKAAQAIAAAEAHQADAEAAAFQAAAvgEAaQgHAmgTAaQgJAMgMAIQgOAKgPgBQgeABgOgMg");
	this.shape_29.setTransform(112.4,55.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0066FF").s().p("Ag9BIQgagVAAgiQAAgnAYggQAdglApAAQApAAAUASQAVATgBAmQAAAngWAgQgbAlgqAAQgiAAgYgUgAglgiQgRAXAAAcQAAAUAPAMQAOAMAWAAQAaAAARgaQAQgXAAgcQAAgZgMgJQgKgKgbAAQgZAAgTAag");
	this.shape_30.setTransform(94.1,55.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0066FF").s().p("AhRBaQgFgEAAgHIABgOIABgOIAAgVIAAgVIAAgVIAAgXIgCgUIgBgVQAAgHAGgGQAGgGAIAAQAIAAALAPQA0BMA0AvIAAgRQAAg5gBgUIgCgNIgBgNQAAgQARAAQATAAAAA7IAAASIAABJIgCATQgDAPgPAAQgIAAgKgJQgtgpg4hIIgBAkIABAcIAAAcQAAAjgRAAQgIAAgFgGg");
	this.shape_31.setTransform(74.8,55.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0066FF").s().p("Ag+BIQgagVAAgiQAAgnAZggQAcglAqAAQApAAAVASQATATABAmQAAAngXAgQgaAlgqAAQgjAAgZgUgAgkgiQgSAXAAAcQAAAUAPAMQAOAMAXAAQAZAAAQgaQARgXgBgcQABgZgMgJQgKgKgbAAQgZAAgSAag");
	this.shape_32.setTransform(55.4,55.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0066FF").s().p("Ag/BYQgFgFAAgHIAAgaIABgaIAAheQAAgHAEgHQAGgIALABIAdACQAQACALAGQAyAaAAAlQAAAPgKALQgLAMgVAIQAfARAQASQAEAFAAAGQAAAGgFAFQgFAFgHAAQgGAAgFgFQgkgigpgMIABAlQAAAHgFAFQgFAEgHAAQgHAAgEgEgAgkAEIAGAAQAcAAANgHQAGgDAFgFQAFgFAAgCQAAgNgRgNQgOgLgSgCIgOgBg");
	this.shape_33.setTransform(38.5,55.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0066FF").s().p("Ag0BZQgFgEAAgHIAAghQAAgRADgkIACg2QAAgeARACIALgCIARAAQAWAAAUAOQAXARAAAYQAAAegYAQQgVAQgcAAIgKAAIgBA1QAAAHgEAEQgFAFgGgBQgHABgEgFgAgVgtIgCAoIAIABQARAAAMgJQANgJAAgPQAAgKgMgIQgMgHgMAAIgHAAIgFAAIAAARg");
	this.shape_34.setTransform(24.2,54.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgtA9QgFgEAAgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAZAAQAXAAAAAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgFAEQgEAFgHAAQgIAAgDgFg");
	this.shape_35.setTransform(441.3,22.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_36.setTransform(428.9,22.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0066FF").s().p("AhRBaQgFgEAAgHIABgOIABgOIAAgVIAAgVIAAgVIAAgXIgCgUIgBgVQAAgHAGgGQAGgGAIAAQAIAAALAPQA0BMA0AvIAAgRQAAg5gBgUIgCgNIgBgNQAAgQARAAQATAAAAA7IAAASIAABJIgCATQgDAPgPAAQgIAAgKgJQgtgpg4hIIgBAkIABAcIAAAcQAAAjgRAAQgIAAgFgGg");
	this.shape_37.setTransform(402.6,19.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0066FF").s().p("AguBQQgfgYAAg6IAAgRIABgQIAAgNIABgOQAAgKADgIQAFgKAIgBQAGABAFAEQAFAEAAAHIAAAUIAAAUIAAAQIgBARQAAARAEAPQAFATAKAHQAEADATABQAeAAALg1QAFgbAAgxQAAgHAEgGQAFgJAKAAQAIAAAEAHQADAEAAAFQAAAvgEAZQgHAngTAaQgJAMgMAIQgOAKgPAAQgeAAgOgMg");
	this.shape_38.setTransform(383.9,20.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0066FF").s().p("Ag+BIQgagVAAgiQAAgnAZggQAcglAqAAQApAAAVASQATATAAAmQABAngXAgQgbAlgpAAQgjAAgZgUgAglgiQgRAXAAAcQAAAUAPAMQAOAMAXAAQAYAAASgaQAPgXAAgcQAAgZgLgJQgKgKgbAAQgZAAgTAag");
	this.shape_39.setTransform(365.6,19.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0066FF").s().p("AhRBaQgFgEAAgHIABgOIABgOIAAgVIAAgVIAAgVIAAgXIgCgUIgBgVQAAgHAGgGQAGgGAIAAQAIAAALAPQA0BMA0AvIAAgRQAAg5gBgUIgCgNIgBgNQAAgQARAAQATAAAAA7IAAASIAABJIgCATQgDAPgPAAQgIAAgKgJQgtgpg4hIIgBAkIABAcIAAAcQAAAjgRAAQgIAAgFgGg");
	this.shape_40.setTransform(346.3,19.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAcA2IgTAIQgIACgFAAQgcAAgOgOQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAIAAAKQAAADgDADIgBANIgBAQQAAAVADAJIAFANIAFALQAAAHgFAEQgEADgHAAQgFAAgMgKgAgQgXQgMANAAAPQAAAQAGAHQAGAJALgBQAGABAHgDQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_41.setTransform(319.5,22.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAALAEQAKADAGAAQAWAAAAgKQAAgFgRgIQgWgKgHgEQgRgMAAgQQABgYAYgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgMAAQgLAAgCgKIgKAAQgbgBAAAJQgBAEARAHQAXAMAIAFQARALAAAQQAAAVgSAJQgQAJgVAAQgPAAgNgFg");
	this.shape_42.setTransform(296.4,22.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgOBVQgFgEAAgHIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAHgFAEQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_43.setTransform(287.6,19.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009900").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_44.setTransform(265.3,19.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("Ag0BHQgRgSAAgZQAAgnAigoQAegjAdAAIAJAAIAIABQAFgFAHAAQAMAAADAOQACAKAAANQAAAGgDAFQgFAGgIAAQgLAAgFgLQgCgFgDgCIgJAAQgPAAgSAXQgbAfAAAcQAAANAIAJQAJAJAMAAQALAAAMgGIARgMQAJgGAFAAQAHAAAFAFQAFAFAAAGQAAAHgGAFQghAcggAAQgaAAgTgUg");
	this.shape_45.setTransform(249.5,19.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009900").s().p("Ag2BaQgNgMABgmQgBgPADgfIACgvIgBgMIgCgMQAAgSARAAQAGAAADADIAbgFIAVgCQAeAAASAHQALAEAAALQAAAGgFAFQgEAFgIAAIgEgBQgTgFgTAAIgRACQgKABgMADIAAAuIAsgEIAcgCQAIAAAEAEQAFAEAAAIQAAANgPABIgcADIgxAEIAAAYQAAAXACADQABACAOAAIAVAAIAVgBIAHAAIAIgBQAGAAAFAEQAFAEABAIQgBANgOADQgLACgkAAQgmAAgMgKg");
	this.shape_46.setTransform(234.8,19.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009900").s().p("AgyBRQgYgRAAgXQAAgSARAAQAQAAAAASQAAAHAMAIQAMAIAKAAQAEAAACgQIACgkQABgaABgoIgBgHIgCAAIgNAAIgOgBQgHAAgFgEQgFgFAAgHQAAgQAVAAIAMABIALAAIAWgBIAVgBQAgAAAAASQAAAGgEAFQgFAFgHAAIgHgBIgIAAIgJAAIAAAIQAABTgMAnQgIAcgWAAQgVAAgWgPg");
	this.shape_47.setTransform(219.2,20.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#009900").s().p("Ag5BZQgGgGAAgHIAAh7IAAgQQgBgJABgGQACgLATgCQAJgDAUAAQAVAAAVAOQAXARAAAZQAAAOgFAJQgDAHgKAIQALAFAJALQAKANAAAMQAAAQgRAOQgLAJgNAFQgaAKgqAAQgHAAgFgGgAgfA/QAUgBAXgHQAUgGAAgHQAAgJgNgHQgKgFgJgBIgfgBgAgfg+IAAAZIAAAZIAQAAQAjgCAAgYQAAgIgLgIQgJgIgNAAIgSAAg");
	this.shape_48.setTransform(203.9,19.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009900").s().p("Ag+BIQgagVAAgiQAAgnAaggQAbglAqAAQApAAAVASQATATABAmQgBAngWAgQgaAlgqAAQgjAAgZgUgAgkgiQgSAXAAAcQAAAUAPAMQAOAMAXAAQAYAAARgaQARgXgBgcQABgZgLgJQgLgKgbAAQgZAAgSAag");
	this.shape_49.setTransform(186.3,19.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#009900").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_50.setTransform(158.1,19.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#009900").s().p("Ag0BHQgRgSAAgZQAAgnAigoQAegjAdAAIAJAAIAIABQAFgFAHAAQAMAAADAOQACAKAAANQAAAGgDAFQgFAGgIAAQgLAAgFgLQgCgFgDgCIgJAAQgPAAgSAXQgbAfAAAcQAAANAIAJQAJAJAMAAQALAAAMgGIARgMQAJgGAFAAQAHAAAFAFQAFAFAAAGQAAAHgGAFQghAcggAAQgaAAgTgUg");
	this.shape_51.setTransform(142.3,19.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#009900").s().p("Ag2BaQgNgMABgmQgBgPADgfIACgvIgBgMIgCgMQAAgSARAAQAGAAAEADIAagFIAVgCQAeAAASAHQALAEAAALQAAAGgFAFQgEAFgHAAIgGgBQgSgFgTAAIgRACQgKABgLADIgBAuIAsgEIAcgCQAIAAAEAEQAFAEAAAIQAAANgPABIgcADIgxAEIgBAYQAAAXADADQABACAOAAIAVAAIAVgBIAHAAIAIgBQAGAAAFAEQAGAEAAAIQAAANgPADQgLACgkAAQgmAAgMgKg");
	this.shape_52.setTransform(127.6,19.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#009900").s().p("Ag/BYQgFgFAAgHIAAgaIABgaIAAheQAAgHAEgHQAGgIALABIAdACQAQACALAGQAyAaAAAlQAAAPgKALQgLAMgVAIQAfARAQASQAEAFAAAGQAAAGgFAFQgFAFgHAAQgGAAgFgFQgkgigpgMIABAlQAAAHgFAFQgFAEgHAAQgHAAgEgEgAgkAEIAGAAQAcAAANgHQAGgDAFgFQAFgFAAgCQAAgNgRgNQgOgLgSgCIgOgBg");
	this.shape_53.setTransform(112.4,19.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#009900").s().p("Ag3BVQgEgFAAgGQAAgGAEgFQAGgFAHAAQAIAAAOgCIAAg1QAAgfADgdIgaABQgHAAgFgEQgEgFAAgHQAAgGAEgFQAEgEAHAAIAigBQAWAAAjAEQANACAAAPQABAHgGAEQgEAEgGAAIgfgEQgCAXABAiIAAA1IAgAAQAGgBAFAFQAFAEgBAHQABAHgFAFQgFAEgHAAIgVAAIgUAAIgWACIgYADQgHAAgFgFg");
	this.shape_54.setTransform(97.8,19.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#009900").s().p("AgkBeQgOgCgHgGQgIABgEgFQgEgEgBgIIABgiIABgjIAAgnIgBgnQAAgGAHgGQAGgHAHAAQAEAAAQAIIAVAJQAhAMAYAXQAeAbAAAhQgBAUgJATQgLASgRAMQgTAMgjAAQgIAAgLgDgAgoA7QAEADAGACQAGABAHABQAZAAAKgIQALgGAGgMQAHgLgBgNQABgbgjgWQgKgHglgQg");
	this.shape_55.setTransform(83.2,19.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAcAAQAVAAANAGQASAKAAARQAAANgPALQgGAEgUAIIgnARQAHAGAHADQAIADAKABQAPAAALgHQAKgGAFAAQANAAAAAMQAAAOgTAIQgRAHgSAAQgbAAgSgOgAgQgcQgHAIgEAPIAagMQAOgHAKgGQgIgFgNABQgJAAgJAGg");
	this.shape_56.setTransform(56.8,22.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgRAAgLIAAgIIABgJIgBgKQgBgGgFAAQgNAAgJAMQgGAFgJARQAAArgEAIQgFAKgKAAQgGAAgFgFQgFgEAAgHIABgFQABgDAAgeIAAhNIABgDIAAgTIgBgKIgBgMQAAgGAFgFQAFgDAHAAQALgBAEAMQACAHAAAQIAAAXIgBAXQAJgIAJgFQAJgEALAAQAUAAAJALQAHAJABAQIABAdIADAXIAEAXIAAAEQAAAHgFAEQgFAFgGgBQgMAAgEgMg");
	this.shape_57.setTransform(43.5,19.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_58.setTransform(28.1,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordsdefinitionpt1, new cjs.Rectangle(0,0,466.6,108.4), null);


(lib.anim_pro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AMJD7QAEABAEABQAWAFAHgPQAFgIgJgFQgNgIgMgNQgNgNgKgOQgKgPgHgRQgEgKgBgJQgDgSADgTQACgQACgQQABgCAAgCQAAgKABgKQABgSAIgPQAIgOAHgSQAGgQAFgRQAGgSAAgUQAAgUgFgSQgFgSgRgIQgQgIgTgGQgRgGgTgFQgSgFgSgGQgRgGgSgCQgTgBgUABQgOAAgIgJQgKgLgQgLQgQgKgRgHQgRgHgSgGQgSgHgSgGQgRgGgUAAQgIAAgJAAAK2E7QACgPgEgQQgEgSgFgRQgFgPgFgTQgDgJABgMAMJD7QgCgDgCgCQgKgPgKgRQgKgQgKgPAK/DHQAHARAGATQAGASAHAOQAIAQgGASQAAACgBABQAIAMAPAEQASAEAPgOQAMgNgIgUQgGgPgHgLAFxhnQAPADANAFQAQAFATADQASACASAEQATAEATABQATAAASgDQASgEARgCQAYgEgHAYQgFASgEARQgFATAEATQADASAFARQAGARAFASQAFASACATQACAUgLAQQgKANgQAMQgNAKgRAGQgRAGgSAGQgMAFgKAJQgBABgCABQgKAIAFAUQAFATAVABQATACAPgKQAPgKAOgMQAPgNARgDQAKgCAIAKQAMAOAGASQAHARADASQADATABATQAAAVAXgIQAPgFAEgVQAAgDAAgEQAXAHALgOQABgCABgCAklkzQAAAAAAAAQAHgMANgHQAQgIATgEQATgDATgBQARgBAPABQABABAAAAQACAAACgBIABAAQAQgDATgCQAGgBAHAAQACgBACAAQANgBANABQAPAAAJALQAMAQAOAIQAFACADABArlggQgNgBgKgIQgFgEABgFQACgQAXAGQARAFATABQAUABATACQAEABAEgBQADAAADgBQAQgHAKgRQAIgPAFgTQAFgRACgTQADgUAFgPQAGgQAJgQQAKgRAMgOQAMgOAQgLQAPgMAMgIQARgLAQgIQARgIATgEQASgEAUgBQAUAAASAFQARAFATACQARACARAEQgCADgBAEArUAAQANgHASgGQASgGASgDArlggQANgBALgFArZADQgGABgHAAQgTABgTgCQgUgBgMgJQgFgEAFgIQAFgJAQgBQATgCAUAAQAGAAAFgBArUAAQgCACgDABQACgCACgBQAAAAABAAgAqXAdQgLAGgNAGQgPAFgVgBQgTgBgTAAQgUAAgGgPQAPgJARgGQAOgEAMgHAqXAdQACgBACgCQALgHALgGQAEgCAEgBQAKgFAIgCAiEizQgOAHgPAFQgRAEgSABQgBAAgBAAQgJAAgJAAQgBAAgBAAQgJAAgIgBQgTAAgTgCQgLgBgKgCQgMgCgMgDQgHgBgHgBQgRgEgRgGQgPgFgPgKQABATgHAPQgHARgLAOQgLARgLAPQgKAPgPALQgRALgOAKQgQAKgJAOQgGAKACANQACAGAKABQAJAAAHADQAPAKAPAFQAKAEAMABQAIABAFAJQAKAUgVAGQgTAFgTAAQgUAAgSgEQgSgEgQgJQgDgCgDgDQgCgBgBgCQgPABgNAEQgBAAAAAAQgOAEgHALQgJAOgJANQgJANgUAGQgSAGgVgBQgZgBAQgVQALgPAKgQQALgQAOgKAo0AlQgCgDgCgD");
	this.shape.setTransform(95.7,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BE9670").s().p("AKMFPQgBgTgDgTQgDgSgHgRQgGgSgMgOQgIgKgKACQgRADgPANQgOAMgPAKQgPAKgTgCQgVgBgFgTQgFgUAKgIIADgCQAKgJAMgFIAjgMQARgGANgKQAQgMAKgNQALgQgCgUQgCgTgFgSIgLgjQgFgRgDgSQgEgTAFgTIAJgjQAHgYgYAEIgjAGQgSADgTAAQgTgBgTgEQgSgEgSgCQgTgDgQgFQgNgFgPgDIAEi3IARAAQAUAAARAGIAkANIAjANQARAHAQAKQAQALAKALQAIAJAOAAQAUgBATABQASACARAGIAkALIAkALQATAGAQAIQARAIAFASQAFASAAAUQAAAUgGASIgLAhQgHASgIAOQgIAPgBASIgBAUIgBAEIgEAgQgDATADASQABAJAEAKQAHARAKAPQAKAOANANQAMANANAIQAJAFgFAIQgHAPgWgFIgIgCIgEgFIgUggIgUgfIAUAfIAUAgIAEAFQAHALAGAPQAIAUgMANQgPAOgSgEQgPgEgIgMIABgDQADgHAAgIQAAgJgFgKQgHgOgGgSIgNgkIANAkQAGASAHAOQAFAKAAAJQAAAIgDAHIgBADIgCAEQgLAOgXgHIABgJQAAgLgDgLIgJgjIgKgiQgCgIAAgJIAAgEIAAAEQAAAJACAIIAKAiIAJAjQADALAAALIgBAJIAAAHQgEAVgPAFQgGACgFAAQgMAAAAgPgAq8BsQgZgBAQgVIAVgfQALgQAOgKIAEgDQALgHALgGIAIgDQAKgFAIgCQgIACgKAFIgIADQgLAGgLAHIgEADQgLAGgNAGQgPAFgVgBIgmgBQgUAAgGgPQAPgJARgGQAOgEAMgHIgNABQgTABgTgCQgUgBgMgJQgFgEAFgIQAFgJAQgBQATgCAUAAIALgBQgNgBgKgIQgFgEABgFQACgQAXAGQARAFATABQAUABATACIAIAAIAGgBQAQgHAKgRQAIgPAFgTQAFgRACgTQADgUAFgPQAGgQAJgQQAKgRAMgOQAMgOAQgLIAbgUQARgLAQgIQARgIATgEQASgEAUgBQAUAAASAFQARAFATACQARACARAEIAAAAQAHgMANgHQAQgIATgEIAmgEQARgBAPABIABABIAEgBIABAAQAQgDATgCIANgBIAEgBIAaAAQAPAAAJALQAMAQAOAIIAIADQgDAtggArIgyAjIgKAAIgLAJQgOAHgPAFQgRAEgSABIgCAAIgSAAIgCAAIgRgBQgTAAgTgCIgVgDIgYgFIgOgCQgRgEgRgGQgPgFgPgKQABATgHAPQgHARgLAOIgWAgQgKAPgPALIgfAVQgQAKgJAOQgGAKACANQACAGAKABQAJAAAHADQAPAKAPAFQAKAEAMABQAIABAFAJQAKAUgVAGQgTAFgTAAQgUAAgSgEQgSgEgQgJIgGgFIgDgDIgEgGIAEAGQgPABgNAEIgBAAQgOAEgHALIgSAbQgJANgUAGQgQAFgRAAIgGAAgArZADQADgBACgCQANgHASgGQASgGASgDQgSADgSAGQgSAGgNAHIgBAAIgEADIAAAAgArlggQANgBALgFQgLAFgNABgAkoksIADgHIgDAHgAo0AlIAAAAg");
	this.shape_1.setTransform(95.7,69.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("ALRFXQAEACAEACQAUAIALgMQAFgHgHgHQgLgLgKgPQgKgPgHgPQgIgRgEgSQgCgLABgIQAAgTAGgRQAGgQAFgQQABgCABgBQABgKADgJQAEgSALgOQALgNAJgQQAJgPAJgQQAIgQAEgUQADgTgBgSQgBgSgQgMQgOgKgRgJQgQgKgSgIQgRgJgQgJQgQgIgSgGQgRgFgUgCQgPgCgGgKQgIgOgNgNQgOgNgPgJQgQgLgRgJQgQgKgRgKQgPgJgTgDQgJgBgIgCALRFXQgBgDgBgDQgHgQgHgSQgHgSgHgRAKaGDQAFANAOAGQARAIASgLQAOgKgEgWQgDgPgGgNAGBhPQAOAGANAHQAOAIASAGQASAGARAHQARAHATAEQASAEATAAQASAAASABQAXAAgLAXQgIAPgHARQgIARAAAUQAAATACARQADASABATQACASgCAUQgCAUgNANQgMALgSAJQgPAHgRADQgSADgTADQgNACgLAHQgCABgBABQgMAGABAUQABAUAVAFQASAFARgHQAQgHAQgJQASgKARAAQAKAAAGALQAJAQADATQADARAAATQAAATgDATQgDAUAXgDQAQgCAIgUQABgDABgEQAEgPgBgPQgBgTgCgSQgCgQgBgTQgBgKACgLAjml8QAAAAAAAAQAJgKAOgEQARgGATAAQAUABATACQARABAOAFQABAAABAAQABABADAAIAAAAQARgBASACQAGAAAHABQACAAADABQAMABANADQAPACAFANQAKASAMAKQAEAEADABAhfjhQgPAFgQACQgSABgRgDQgBAAgBAAQgJgCgIgCQgCAAgBAAQgIgCgIgBQgTgFgSgFQgLgDgJgEQgMgEgLgEQgHgDgGgCQgRgHgPgJQgOgIgMgNQgDATgKAOQgKAPgNAMQgOAPgNANQgNANgRAHQgSAJgQAGQgSAIgLALQgIAJAAAOQAAAGALACQAIACAGAGQANAMAOAIQAJAFAMADQAIADADAKQAGAVgWACQgTACgTgEQgUgDgRgHQgRgIgNgMQgEgDgCgDQgBgBgBgCQgPgCgOABQAAAAgBAAQgOACgJAKQgMAMgLALQgLALgVACQgTACgTgEQgZgGATgRQAOgNANgOQANgOAQgHQACgBADgBQAMgFAMgEQAEgBAEgBQAKgDAJAAAKaGDQABgCAAgBQAJgQgEgRQgFgQgDgTQgCgUgEgRAJ1GHQAVALANgLQABgCACgCArQi/QgNgDgJgKQgDgFABgFQAFgQAWALQAQAIASAEQAUAFASAGQADABAEAAQADAAAEAAQARgEAMgPQALgNAJgSQAIgQAFgSQAGgTAJgOQAIgPAMgOQANgPAOgLQAPgMARgIQARgIAOgGQASgIASgFQARgFAUAAQATgBATADQAUADAQAIQARAIASAGQAQAFAQAHQgDADgBADAqPh0QgMAEgOADQgQADgUgFQgSgFgTgDQgUgEgDgQQARgGASgCQAOgCANgFQgGAAgHgBQgTgDgSgFQgUgFgKgMQgEgFAGgHQAHgHAQABQATACATADQAGABAGABQAMAAAMgCArGicQAOgGATgCQATgCASAAArLiaQADAAACgCQAAAAgBAAQgCABgCABgAovhaQgCgDgBgE");
	this.shape_2.setTransform(94.3,55.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE9670").s().p("AJHGTQADgTAAgTQAAgTgDgRQgDgTgJgQQgGgLgKAAQgRAAgSAKQgQAJgQAHQgRAHgSgFQgVgFgBgUQgBgUAMgGIADgCQALgHANgCIAlgGQARgDAPgHQASgJAMgLQANgNACgUQACgUgCgSIgEglQgCgRAAgTQAAgUAIgRIAPggQALgXgXAAIgkgBQgTAAgSgEQgTgEgRgHQgRgHgSgGQgSgGgOgIQgNgHgOgGIAmizIARADQATADAPAJIAhAUIAhAUQAPAJAOANQANANAIAOQAGAKAPACQAUACARAFQASAGAQAIIAhASIAiASQARAJAOAKQAQAMABASQABASgDATQgEAUgIAQIgSAfQgJAQgLANQgLAOgEASIgEATIgCADIgLAgQgGARAAATQgBAIACALQAEASAIARQAHAPAKAPQAKAPALALQAHAHgFAHQgLAMgUgIIgIgEIgCgGIgOgiIgOgjIAOAjIAOAiIACAGQAGANADAPQAEAWgOAKQgSALgRgIQgOgGgFgNIABgDQAGgLAAgLQAAgGgBgFQgFgQgDgTIgGglIAGAlQADATAFAQQABAFAAAGQAAALgGALIgBADIgDAEQgNALgVgLQADgMAAgNIAAgFIgDglIgDgjIAAgHQAAgHABgHQgBAHAAAHIAAAHIADAjIADAlIAAAFQAAANgDAMIgCAHQgIAUgQACIgGABQgRAAADgSgArBgtQgZgGATgRIAbgbQANgOAQgHQgMAEgOADQgQADgUgFIglgIQgUgEgDgQQARgGASgCQAOgCANgFIgNgBQgTgDgSgFQgUgFgKgMQgEgFAGgHQAHgHAQABQATACATADIAMACQgNgDgJgKQgDgFABgFQAFgQAWALQAQAIASAEQAUAFASAGIAHABIAHAAQARgEAMgPQALgNAJgSQAIgQAFgSQAGgTAJgOQAIgPAMgOQANgPAOgLQAPgMARgIIAfgOQASgIASgFQARgFAUAAQATgBATADQAUADAQAIQARAIASAGQAQAFAQAHIAAAAQAJgKAOgEQARgGATAAIAnADQARABAOAFIACAAIAEABIAAAAQARgBASACIANABIAFABIAZAEQAPACAFANQAKASAMAKIAHAFQgLArgmAlIg4AaIgKgCIgMAGQgPAFgQACQgSABgRgDIgCAAIgRgEIgDAAIgQgDQgTgFgSgFIgUgHIgXgIIgNgFQgRgHgPgJQgOgIgMgNQgDATgKAOQgKAPgNAMIgbAcQgNANgRAHIgiAPQgSAIgLALQgIAJAAAOQAAAGALACQAIACAGAGQANAMAOAIQAJAFAMADQAIADADAKQAGAVgWACQgTACgTgEQgUgDgRgHQgRgIgNgMIgGgGIgCgDIgDgHIADAHQgPgCgOABIgBAAQgOACgJAKIgXAXQgLALgVACIgMABQgNAAgNgDgApqiBIgIACQgMAEgMAFIgFACIAFgCQAMgFAMgEIAIgCQAKgDAJAAQgJAAgKADgArHicIgEACQADAAACgCIgBAAgAqlikQgTACgOAGQAOgGATgCQATgCASAAQgSAAgTACgArKi/IAPgBIADgBIgDABIgPABIgBAAIAAAAIgCAAIgDAAIADAAIACAAIAAAAIABAAgAjql2IAEgGIgEAGg");
	this.shape_3.setTransform(94.3,55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(3));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("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gGACapKQADgOACgSQgFALgQAAQgfgCgPgfQgEgHgCgFQgIANgOAEQgPgRgMADQgHAIgEADQgEgLgCgLQgBgDAAgDAgCpOQgBALAEAEQAGADAMgDQALgEAHgHQAFAbAUgLQALgHAKACQAEAEAFADQAMAIAOgFQAHAIALACABkm6QAHABAGgFQALgKADgPQACgHAFAAQAUABAKgMQgGgJgGgIQgDgFgCgFAgIn4QgKAmAnAJQAHAAAFAIQAaANApgGAh0kFQAMgfAGgjQAGgiAfgSQAhgUAXgYQAPgQALgSQAFAFAHADAFXn3QgBgOASgFQATgGAFAPABlgKQAKASgQAPQgNANgSACACBhQQALARgBAUQAAAKgKAFAiUgYQABAEACADQAAABAAAAQABAAABAAQAGABAGACQARAHAOALQAOALANANQANAPAPAKQAQAKASAHQARAGASAGQASAFASAHQASAHATAFQASAEATACQATABATADQAUADAQgHQAAAAABAAQAJgFgBgMQgCgIADgGQADgGAHgCQANgGALgLQALgMgCgVQgBgEADgBQAQgJAKgPQAJgPADgSQABgIAMABQATABATgGQARgFAQgJQAPgJAPgJQAQgKAKgRQAJgOAIgRQAHgSAHgQQAHgTAGgRQADgMAQhFQAQhFgUg5ADCASQALAPgUAOQgRALgUADQgIABgJgBADphCQAEATgCATQgBAGgDAEQgDADgFADAFoEQQgKgMgMgLQgNgNgNgNQgMgMgNgNQgNgNgNgPQgMgOgMgOQgKgKgKgLQgEgEgEgEAnaHQQgDgTgEgSQgGgSgHgRQgIgSgIgSQgBgDgCgCQAAgBgBgCQgHgOgJgMQgKgNgKgQQgLgQgHgSQgHgRgHgQQgHgSgIgTQgIgQgGgSQgGgRgHgRQgHgRgGgRQgBAAAAgBQgBgDABgDQgEgPAKgMQALgPASgEQASgEASgDQASgEASgCQATgCATgEQATgEAQgFQARgFASgCQAFAAAFgBQABgBADgBQABAAABgBQAFgBAEgBQAIgCAIgBQATgCATAAQASgBATAAQAUAAATgCQATgBAUgDQASgDATgBIABAAQATAAATgCQADgBACACQgBgDAAgEQgEgUAMgMQAKgJAGgPQAHgSgGgSQgFgSgGgRQgGgSADgUQACgTAGgQQAGgQAIgOAk2CWQgPADgSAAQgUgBgTABQgTAAgTABQgTAAgSgCQgRgBgQgDQAQALALAMQAMANANANQAMAMAMAOQACABABACQABAGACAHQAAADABADQADATgEASQgDARgGASQgGATADATQADASAFARQADALADALQACAIADAIQAGASAIARQAGAQAKAPQAKARAEARQAFATgKARQgLAQgTADQgTADgRgDQgTgDgSgHQgQgGgPgJQgPgJgOgNQgOgNgPgLQgKgIgFgKQgIgRgTgCQgMgBgMACQgSADgNgMQgKgKgGgRQgGgTASgFQABAAACgBQgEgHAHgMQAJgRASAIQgCgDABgGQAFgWASATQALAKAGAIQAJANAOAMQANAMANANQABAAABABQAOAHARAFQANAEAOAEQABAAAAABQACARAEAOAmdgCQAEgBAFAAQAKAGAKAJQALALALAMQANAOAHARQAGARAFARQAFARAIASQAEAIAEAHQADAEAEADQAHAGANgBQAQgBAQAAQASAAARAAQATAAASABQATACATAFQAQAFARADQABAAABABQAAAAABAAQAQAEAPADQACAAACAAQARAEARADQAUADASACQAUADARAHQAKAFAHAFAhpCyQAPAGAPAJQAAAAAAAAQAQAJAQAJQAPAJARAHQAQAJAQAKQARAKAQALQAQAKAOAJQAPAKAPAJQAPAJANAMQACACABACQABACABAEQADgCAEgCQATgMAVgJQAHgDAHgDQAKgEAKgEQAPgHAPgGQAIgDAJgCQAPgEAQAAQARgBARACQAMABANADQABAAABAAQgCgCgBgCQgCgCgCgCAhsCxQABAAACABADdF/QgTACgQAGQgRAGgRAJQgOAIgOAOQgOAOgJAPQgLAQgIASQgHAQgNAOQgMANgRALQgQAKgRAHQgRAHgSAGQgRAGgRAGQgJACgJADQgKACgKACQgUACgRAHQgRAHgJAQQgKARAOAPQANAPARAIQASAJAUABQATACARAGQAKAEAIAFQAPAKAPALQAOAKAMAPQANAOALAOQALAMAPALQAQAMARAFQALADAIgFQALgGgDgMQgBgCgBgDQgHgQgSgFQgJgCgKABApuGDQABADADACApsGmQgQgKgQADAF0EgQAGAGAGAFQAMALANAOQAMANANAMQANANAMANQANAOAEATQAEATgBATQgCASgNAOQgLAMgPAJQgQAJgRAGQgSAGgSAFQgSADgSACQgSACgSABQgUABgTACQgSADgTADQgTAEgSAGQgRAFgRAFQgMADgLADQgRAGgRAFQgSAGgQALQgQALgPALQgPALgGARQAAABABABQAHATANAJQAOALAQALQAQALAOAIQAQAIARAJQATAJgFASQgBADgBADQACAEABAFQAAAEgBAFQgDAOgKAFAFtEYQgDgDgCgFAF0EgQgEgEgDgEAFvEYQADAEACAEADdF/QAHAGAHAGQAPAOANANACaFMQAKAGALAIQAPAMAQAMQAIAHAHAGACFL/QgFgFgKgB");
	this.shape_4.setTransform(83,82.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("AAzA4IADgHQAFgSgTgJIghgRQgOgHgPgLIgfgWQgMgJgHgTIAaAXQAPALAQAKQAPAJAPALIAaATIACABQAPAKANALIACACIgSAUQgBgFgDgDg");
	this.shape_5.setTransform(91.2,153.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguBaQgNgMgNgHQgOgJgNgLQgNgMAIgVQADgKAFgIQAIgMAJgIQAJATANALQAOALAQAKQAPAJAPAIQAPAHAOADIABAAIACABIACAAQAAAIgHAIQgKAJgKAHQgKAIgLABIgGABQgRAAgMgLgABNglQgPgEgEANQgBgGABgGQABgPALgGIAHgDIAGgDQAKgFAJAFQANAIgNAUIgGAJIgHAHQgCgLgKgDgAgrgsQgJgRAJgQQAKgQARgFIACgBQAOgDAHAKQAMAQgJASIgGAKQgFgPgSAGQgSAFAAAOQgEgCgCgEg");
	this.shape_6.setTransform(121.1,36);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AARI+IgDgDQgNgMgOgJQgPgJgPgLIgegTIghgVQgQgKgRgIQgRgIgPgIIgggTIAAAAQgPgIgPgHIAgAHIADABIAiAGIAnAGQAUACARAIQAKAEAHAFQgHgFgKgEQgRgIgUgCIgngGIgigGIgDgBIgggHIgDAAIghgIQgTgFgTgCQgSgCgTAAIgjABIggABQgNABgHgGIgHgIQgEgGgEgJQgIgRgFgSIgLghQgHgSgNgOIgWgXQgKgJgKgHIgJABIAEgBIADgBIAJgDIAPgCQATgCATgBIAlgBQAUAAATgBQATgBAUgEQASgDATAAIABAAIAmgDQAEAAABABIADAIIABABIABAAQAHAAAFADQARAHAOALQAOAMANANQANAOAPAKQAQALASAGIAkAMQASAGASAHQASAHATAEQASAFASABIAmAEQAUAEAQgHIABgBIAIAIIAUAWIAYAcIAaAcIAZAZIAaAaQAMALALAMQABAEADADIgZgDQgRgCgRAAQgQAAgPAEIgRAFIgeANIgUAJIgOAFQgUAJgUAMIgHAEIgCgGgAhdjMQgFgIgIAAQgogJAKgmIAAAAIgBgBQgGgIAHgIQgGgBgDgGQgGgKADgLQACgFAEgGIAAgBIABAAQgOgDgIgLQgLgPAKgVQAIgRgDgSQgEglAfgIQADgdAUgWQAMgNATAFQADABADgCIAHgHIAAAAIAHgJQAUggAlATQALAGADgGQAMgbAegGQAUgEAQALIAFADIADADIAEgHQAKgPAWgCQAjgDAaARQAQgWAaARQAHAFAGABQAIACAGgEQAKgGAPgBQAUgCAPAJIAEADQAHAFAFAIQAJgVAWAVQATAHATAKQAGADAFAEIADAEIAEAFQAEAHABAJQAAgFAFAAQAUAAAPAPQALAKAAAKIAAAFQADgDAGgBQANAAANARQAJAMAEAOIABAEQgEgCgHAAQAHAAAEACQAHAFABALQADAUgOAJQAKAWgRAWQgFAHgCAHIgBAEIAAAAIgFANQgIAYgXgCQgIAAgCAFQgOAfgagUQABAHgFAEIgDADIAAAAIgDABQgPAJgKgKQgLAPgSgNQAKgKAGgLQAGgLACgNQgXgBAAgUQABgGACgEIgCAAQgQAAgMgIQgHgGgDgKQgKAOgPgNIgKgHIgLgFQgKgEgHACIgPAEQgDABgCAEQgDAGgHAAQgGABgJgFIgNgHIgPgIIAAAAQgHgDgEACQgDABgCADIgBADQgCAGADADQAGAIgIAHQgJAIgOgHQgDgCgDgEQgNALAIAPQgPARgMgQQgBAVgUAEQgXAEgBgUQAAgMgFgGQgOAAgKAFQgJAFgHAJIAAABIgBAAQgHAMABAMIACAHIAFALIAMARQgKAMgUgBQgFgBgBAHQgDAQgLAKQgFAFgIgCIAAABQgNACgLAAQgZAAgRgJgAGfkEQAAgNgLgHQALAHAAANgAhZkFQACgFAAgFQAAgHAFgBIAAAAIADgBIAAAAIABAAQADAAACACIAAAAIAAABIACACIAAABQAHAHAGABIABAAIAAAAIADgBIAAAAQASgGAQgKIACgBIAAAAQAEgCADAAIAAAAIABAAQAGAAACAJQADAPAGAAIABAAIAAAAQAFAAAGgKQgGAKgFAAIAAAAIgBAAQgGAAgDgPQgCgJgGAAIgBAAIAAAAQgDAAgEACIAAAAIgCABQgQAKgSAGIAAAAIgDABIAAAAIgBAAQgGgBgHgHIAAgBIgCgCIAAgBIAAAAQgCgCgDAAIgBAAIAAAAIgDABIAAAAQgFABAAAHQAAAFgCAFQgjgMgFgiQAFAiAjAMgAGFkmIABgLIgBALgAGrkvQALAAALgKIABgBIABgBIAAAAIABgBIABAAQAHgGAJAAIAAAAIAAAAQAGAAAGADIANgEIgNAEQgGgDgGAAIAAAAIAAAAQgJAAgHAGIgBAAIgBABIAAAAIgBABIgBABQgLAKgLAAIgBAAIAAAAIgHgBIAHABIAAAAIABAAgAAIk2QgKgDgHgHIgBAAIgBAAIgHABIgBAAIAAAAQgHAAgHgEIgBAAIgBgBIgJgHIAAAAIgDAAIAAAAIgCAAQgIAAgIAFIgBABQgFACgEAAIAAAAIAAAAQgLAAgEgQIAAgBIAAgBQgHAHgLADIgBAAIAAABIgBAAIgDABIAAAAIgFAAIgBAAIAAAAQgEAAgDgCQgEgDAAgIIAAgDIAAADQAAAIAEADQADACAEAAIAAAAIABAAIAFAAIAAAAIADgBIABAAIAAgBIABAAQALgDAHgHIAAABIAAABQAEAQALAAIAAAAIAAAAQAEAAAFgCIABgBQAIgFAIAAIACAAIAAAAIADAAIAAAAIAJAHIABABIABAAQAHAEAHAAIAAAAIABAAIAHgBIABAAIABAAQAHAHAKADgAGEk/IAIgBIAAgBIAFgCQAGgEAFgHIAHgKQACgEAEgDQAPgKAIgPIAAAAIAAAAQADACADABIAAAAIABAAIAFgCIABAAIAAgBIAAAAQATgKAFgTQgFATgTAKIAAAAIAAABIgBAAIgFACIgBAAIAAAAQgDgBgDgCIAAAAIAAAAQgIAPgPAKQgEADgCAEIgHAKQgFAHgGAEIgFACIAAABIgIABIgCAAIgDAAIADAAIACAAgABhlFIACgBIACgBIAAAAIAAgBIAAABIAAAAIgCABIgCABIgBAAIAAAAQgCAAgBgEQgCgGgEgCQgHgDgFgEQgHgIgBgMQgBgKgEgHIgFgIIgCgDQgEgIAAgKIABgLIgIgIQgPgJgXgBQgIAAgHgGQgLgKAAgSIAAgFIgKADIgFAAIAAAAIgBAAQgPAAAGgWIAAgBIAAABQgGAWAPAAIABAAIAAAAIAFAAIAKgDIAAAFQAAASALAKQAHAGAIAAQAXABAPAJIAIAIIgBALQAAAKAEAIIACADIAFAIQAEAHABAKQABAMAHAIQAFAEAHADQAEACACAGQABAEACAAIAAAAIABAAgAAalVQADgOACgTQgFALgOAAIAAAAIAAAAIgCAAQgegBgPggIgGgMQgIAOgOADIgBgBQgMgMgJgBIgBAAIgBAAIgCAAIgBAAQgHAJgEACQgEgKgCgLIgBgGIABAGQACALAEAKQAEgCAHgJIABAAIACAAIABAAIABAAQAJABAMAMIABABQAOgDAIgOIAGAMQAPAgAeABIACAAIAAAAIAAAAQAOAAAFgLQgCATgDAOgAF6liQgEAFgFADQAFgDAEgFQAEgFAAgFQAAgEgCgDQAPgEAJgKQAEgEAEgCQAJgFACgLIABgIIAAgFIAAgFQAAgOAIgJQANgOASgHQgSAHgNAOQgIAJAAAOIAAAFIAAAFIgBAIQgCALgJAFQgEACgEAEQgJAKgPAEQACADAAAEQAAAFgEAFgAFNlzIgCAHIACgHQADgLAJgGIgBgFIgCgKQAAgMALgGQAQgIAHgPQACgFAAgHIAAgFIgBgJQAAgPAOgDQAGgBADgHQACgHADgFQgDAFgCAHQgDAHgGABQgOADAAAPIABAJIAAAFQAAAHgCAFQgHAPgQAIQgLAGAAAMIACAKIABAFQgJAGgDALgAB9mLQAAAUAVAFQgVgFAAgUQAAgPAGgNIgCABIAAAAQgOAEgMAAIgBAAIAAAAQgIAAgIgCIgCAAQgCAAgCgFIgCgGQgFgNgEgOIgBgFQAAgGAFgGQADgDAAgCQAAgEgHgEQgKgGAAgJQAAgEADgGIAMgRIgMARQgDAGAAAEQAAAJAKAGQAHAEAAAEQAAACgDADQgFAGAAAGIABAFQAEAOAFANIACAGQACAFACAAIACAAQAIACAIAAIAAAAIABAAQAMAAAOgEIAAAAIACgBQgGANAAAPIAAAAgAEvmBIADAGIgDgGIgBgFQAAgJAJgJQACgDAAgCIgBgEQgGgLgEgOQgCgGAAgFQAAgMAIgLQACgDAAgDIgCgFQgGgKgCgMIAAgIQAAgOAKgMQgKAMAAAOIAAAIQACAMAGAKIACAFQAAADgCADQgIALAAAMQAAAFACAGQAEAOAGALIABAEQAAACgCADQgJAJAAAJIABAFgADcmAQAGgNAAgNIgBgIQgBgIgDgHQgDgIAAgHQAAgMAIgJQAGgGAAgIQAAgIgHgJQgCgDAAgEIAAgCQADgTANgKQAFgEAAgGIAAgBIAAABQAAAGgFAEQgNAKgDATIAAACQAAAEACADQAHAJAAAIQAAAIgGAGQgIAJAAAMQAAAHADAIQADAHABAIIABAIQAAANgGANgACxmDQgBgCAAgEIAAgFQgIgIAAgKQAAgIAEgIQACgFAAgEQAAgMgSgHQgJgEAAgIIABgGQACgGAAgFQABgNgQgFQgFgCgDgEQgDgFAAgIQAAgIACgJQgCAJAAAIQAAAIADAFQADAEAFACQAQAFgBANQAAAFgCAGIgBAGQAAAIAJAEQASAHAAAMQAAAEgCAFQgEAIAAAIQAAAKAIAIIAAAFQAAAEABACgAhqjUQAIAAAFAIQgHgEgGgEgAE6jwIgBgDIgCgGQAEgNAPAEQAKADACALQgGAFgGADQgEACgDAAQgGAAgDgGgADyj+QgJAAgLgCIgFgBIgCgCQAAgNARgGQATgFAGAOIgCADIgJAMIgCAAIgCAAg");
	this.shape_7.setTransform(95.8,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BE9670").s().p("ACsLOQgSgFgPgMQgQgLgKgMIgYgcQgNgPgPgKIgdgVQgJgFgJgEQgQgGgUgCQgTgBgSgJQgSgIgNgPQgNgPAJgRQAJgQASgHQARgHAUgCIATgEIASgFIAigMIAjgNQASgHAQgKQARgLAMgNQAMgOAHgQQAIgSALgQQAKgPAOgOQANgOAPgIQAQgJARgGQARgGATgCIAOAMIAcAbIgcgbIgOgMIgQgNIgfgYIgVgOQAUgMAVgJIAOgGIATgIIAfgNIAQgFQAPgEAQAAQARgBARACIAZAEIAHAIIAMALIAZAZIAaAZIAYAaQANAOAFATQADATgBATQgBASgNAOQgMAMgOAJQgQAJgRAGQgSAGgTAFQgRADgSACIglADQgTABgTACIglAGQgTAEgTAGIgiAKIgWAGIgjALQgSAGgPALIgfAWQgQALgGASIACABQAHATAMAJIAeAWQAQALAPAIIAhARQASAJgEASIgDAHQADADAAAFQABAEgBAFQgEAOgKAGQADAMgLAFQgFADgFAAIgIgBgACrKgQASAFAIAQIABAGIgBgGQgIgQgSgFIgBAAQgFgBgHAAIAAAAIAAAAIgEAAIgCAAIACAAIAEAAIAAAAIAAAAQAHAAAFABIABAAgADRKWQgEgGgKgBQAKABAEAGgAlgHdQgTgDgRgHQgRgGgOgJQgPgJgPgNQgOgNgPgLQgJgIgFgKQgIgRgTgCQgNgBgMACQgSADgMgMQgKgKgGgRQgHgTASgFIADAAIAIgBIAAAAIABAAQALAAAKAGIABAAIACABIgCgBIgBAAQgKgGgLAAIgBAAIAAAAIgIABQgEgHAHgNQAKgRARAJQABACADACQgDgCgBgCQgCgEACgGQAEgWATATQAKAKAHAIQAJANAOAMIAZAZIADABQANAHARAFIAcAIQgDgTgFgSQgFgSgIgRIgQgkIgCgFIgBgCQgHgOgJgNQgLgNgKgQQgLgQgHgSIgNghIgQglIgOgiIgMgiIgOghIAAgBIgBgGQgDgPAJgMQAMgPARgEIAlgHIAkgGQATgCASgEQATgEARgFQAQgFATgDIAJgBIAJgBQALAHAJAJIAXAXQANAOAGARIAMAiQAFAQAHASQAEAJAEAGQgOADgTAAIgnAAIglABQgTAAgTgCQgQAAgQgEQAPALAMAMIAZAaQAMAMAMAOIACADIADANIABAGQADATgDASQgEARgGASQgFATADATQACASAFARIAGAWIAGAQQAGASAHARQAHAQAJAPQAKARAFARQAFATgLARQgKAQgUADQgKACgKAAIgQgCgAmNFnQADARADAOQgDgOgDgRIAAgBIAAABgAD4ALIglgEQgTgCgTgEQgSgEgTgHQgRgHgTgFIgjgMQgTgHgPgKQgPgKgOgPQgLgNgOgLQgOgMgRgHQgGgCgHgBIgBAAIgBgBIgCgHIgCgHQgDgUALgMQAKgJAGgPQAIgSgGgSIgLgjQgGgSACgUQACgTAHgQQAFgPAIgPIABAAQAMgfAGgjQAFgiAegSQAhgUAYgYQAQgQAKgSQAGAFAHAEQAaAMAogGIAAAAQAIACAGgGQAKgKAEgPQABgHAGAAQAUABAKgMIgMgRIgGgKIgCgIQgBgLAIgMIAAgBIABgBQAGgIAKgFQAJgFAOgBQAFAGABAMQAAAUAYgEQAUgDAAgVQAMAPAQgQQgIgQANgLQACAFAEACQANAHAKgJQAIgHgHgIQgCgDABgFIABgDQACgDADgCQAFgBAGADIABAAIAOAHIAOAIQAIAFAHgBQAGgBADgGQADgEACAAIAPgEQAIgDAJAEIALAGIAKAHQAQANAJgOQAEAKAHAFQALAJARgBIABAAQgCAEAAAGQgBAUAXACQgCANgFAKQgGAMgKAKIgFAEIgCACQgKAJADAMIACALIAAACIACAMQACANgDALIAAABIgFALQgIARgLAQIgUAeQgKAQgQADQgTAEgUABIgDABIgCAAIgKAAIgKAAIgBAAIAAAAIgJAAIgEAAQgTgBgSgEQgTgDgPgKIgTgPIATAPQAPAKATADQASAEATABIAEAAIAJAAIAAAAIABAAIAKAAIAKAAIACAAIADgBQAUgBATgEQAQgDAKgQIAUgeQALgQAIgRIAFgLIAAgBIARAAIAAAAQAUA6gPBEQgQBFgEAMQgFARgIATIgOAiQgHARgJAOQgKARgQAKIgfASQgQAJgRAFQgSAGgTgBQgMgBgBAIQgDASgKAPQgJAQgRAJQgCABAAAEQADAVgMAMQgLALgNAGQgHADgCAFQgDAGABAIQACALgKAFIgBAAQgLAFgMAAIgNgBgADYgrIAJgBQAUgDAQgLQANgJAAgJQAAgFgDgGQADAGAAAFQAAAJgNAJQgQALgUADIgJABIgJgBIAJABgACshSQgOANgRACQARgCAOgNQAJgJAAgLQAAgGgEgIQAEAIAAAGQAAALgJAJgAE3iGQgBAGgDAEQgDAEgEACQAEgCADgEQADgEABgGIABgOQAAgMgCgMQACAMAAAMIgBAOgADYiVQgBAKgJAFQAJgFABgKIAAgCQAAgSgKgRQAKARAAASIAAACgAFoo6QgFAIgDAKQgIAVANAMQANALAOAJQANAHANAMQAOAMAVgCQAMgBAKgIQAKgHAKgJQAHgIAAgIIgCAAIgCgBIgBAAQgOgDgPgHQgQgIgPgJQgQgKgOgLQgNgMgJgTQgJAIgIANgAH3oTIAEgBIACAAQAJgCAFgHQAFgGAAgHIAAAAQAAgHgGgIIgMgMIAAAAIgLgKIALAKIAAAAIAMAMQAGAIAAAHIAAAAQAAAHgFAGQgFAHgJACIgCAAIgEABIgBAAIAAAAIgGgBIgBAAQgGgCgFgFQAFAFAGACIABAAIAGABIAAAAIABAAgAIcp+IgGADIgHADQgKAGgCAPQgBAGABAGIACAGIABADQAFAJALgGQAGgDAGgEIAHgHIAGgJQANgUgNgIQgFgCgFAAQgEAAgFACgAG6qeIgCABQgRAFgKAQQgJAQAJARQADAEADACIACABIAFACQALACAJAAIAEAAIAJgMIACgDIAGgKQAJgSgMgQQgGgHgKAAIgGAAg");
	this.shape_8.setTransform(75.4,93.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("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gMACQgSAEgNgMQgKgKgGgRQgGgUASgEQABgBACAAQgEgHAHgMQAJgRASAIQgCgEABgFQAFgXASATQALAKAGAJQAJAMAOANQANAMANAMQABABABABQAOAHARAFQANAEAOAEQgDgTgEgTQgGgRgHgSQgIgSgIgSQgBgCgCgCQAAgCgBgBQgHgOgJgMQgKgOgKgPQgLgQgHgTQgHgQgHgRQgHgSgIgSQgIgRgGgRQgGgRgHgRQgFgLgEgKQgBgMADgKQABgCABgBQAHgSAQgIQARgJAQgIQAOgHAPgGQACgBACgBQASgHARgJQARgIAPgJQAPgIARgIQAEgBAFgCQAEgCAEgCQAAAAABAAQEWgtAJgBIABAAQATAAATgCQADAAACABAgXB7QAFAIAFAIQAFAJAFAJIABAAADegXQALAPgUANQgRALgUADQgIABgJgBADtBHQABABABABADuBGIABADQAIARAVArQAiBHAEC+QAAACAAABQAAAEAAADQAAABAAABQAAAEABAEQACAIADAHQAFAQAEASQACAHACAHQACAKAEALQAEAPhDA5QgHABgHABQgSACgSABQgUAAgTADQgSACgTAEQgTAEgSAFQgRAGgRAEQgMAEgLADQgRAFgRAGQgRAGgQALQgQALgPALQgPALgGARQAAABABABQAHATANAJQAOAKAQALQAQAMANAHQAQAJARAIQATAJgFATQgBADgBADQACAEABAFQAAAEgBAFQgDAOgKAFQADAMgLAGQgIAEgLgDQgQgFgQgLQgPgLgLgNQgLgOgNgOQgMgPgPgKQgPgKgPgKQgIgGgKgDQgRgHgTgBQgPgBgOgGQgFgBgEgCQgRgJgNgOQgOgQAKgRQAJgQARgHQAIgDAJgCQAJgCALgCQAKgBAKgDQAJgCAJgDQARgFARgGQASgGARgHQASgHAQgLQARgLAMgNQANgOAGgQQAIgRALgRQAJgPAOgOQAOgNAOgIQARgJARgGQAJgEALgCQgEgWgBgDQgHgTgHgSQgFgJgEgJQgBgCgCgCAnDgTQALAEAMAGQANAIAOAIQAQAKALAPQALAPAJAOQAJAQAMAPQAFAGAIAnAqoGzQAQgDAQAKAqKGXQABADADACAn2HkQABAAAAAAQACARAEAOAExGTQgKgIgKgHQgOgLgPgIQgNgIgPgEQgJgCgIgCQgRgCgQgCQgLgBgKgBQgIgBgHgBQgXgDgXABAExGTQgBgEABgFQAAACABABQAAABAAACQAAACABADQgBgBAAAAQgBAAAAgBQAAACABABAEzGVQAAAAAAABQAAAEAAAEAB/GrQAEgBAFAAQADgBADAAAArNOQgBgCgBgDQgHgQgSgFQgJgDgJABAA2MpQgFgFgKgC");
	this.shape_9.setTransform(84.1,75.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BE9670").s().p("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FgLIAAgBIAAABIgFALQgIAQgLAQIgUAeQgKAQgQADQgTAEgUACIgDAAIgCAAIgKAAIgKAAIAAAAIgBAAIgFAAIgIAAQgTAAgSgEQgTgEgPgKIgTgOIATAOQAPAKATAEQASAEATAAIAIAAIAFAAIABAAIAAAAgAGEpkQgFAJgDAJQgIAVANAMQANAMAOAIQANAIANAMQAOAMAVgCQAMgCAKgHQAKgHAKgKQAHgHAAgJIgCAAIgCAAIgBgBQgOgDgPgHQgQgHgPgKQgQgJgOgMQgNgLgJgTQgJAIgIAMgAITo9IAEgBIACAAQAJgBAFgHQAFgHAAgGIAAgBQAAgHgGgHIgMgMIAAgBIgLgJIALAJIAAABIAMAMQAGAHAAAHIAAABQAAAGgFAHQgFAHgJABIgCAAIgEABIgBAAIAAAAIgGgBIgBAAQgGgCgFgFQAFAFAGACIABAAIAGABIAAAAIABAAgAI4qnIgGACIgHADQgKAGgCAPQgBAHABAFIACAGIABADQAFAJALgFQAGgEAGgEIAHgHIAGgIQANgUgNgIQgFgDgFAAQgEAAgFADgAHWrHIgCAAQgRAFgKARQgJAQAJAQQADAEADACIACACIAFABQALACAJAAIAEAAIAJgMIACgDIAGgKQAJgRgMgQQgGgIgKAAIgGABg");
	this.shape_10.setTransform(76.4,86);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("ACiJrQgNgKgPgIQgOgIgPgEIgRgEIghgEIgVgDIgPgCQgVgCgXAAIgFAAIgDAAIAAgBIABgFIgBgEQgFgRgIgQQgJgPgIgRIgQgfIgSgjQgJgQgLgQIgBgCIgHgKIAAgBIAAAAIgLgRIgJgQIAJAQIALARIAAAAQgqgBgqACQgoACgmgDQglgDglACQglACgoAFIgFgaQgIgmgFgGQgLgPgKgQIgUgdQgKgQgRgKIgbgQQgLgGgMgFQEWgtAJAAIABAAIAmgDQAEAAABABIADAIIABABIABAAQAHABAFACQARAHAOALQAOAMANANQANAOAPAKQAQALASAGIAkAMQASAGASAHQASAHASAEQASAFATABIAmAEQAUAEAQgHIADACIAdA8QAiBHAEC+IgBAAQAAAFAAAEIgUgQgAg8kDQgFgIgIAAQgogJAKgmIAAAAIgBgBQgGgIAHgIQgGgBgDgGQgGgKADgKQACgGAEgFIAAgBIABgBQgOgDgIgLQgLgPAKgVQAIgRgDgSQgEglAfgIQADgdAUgWQAMgNATAFQADABADgCIAHgHIAAAAIAHgJQAUggAkATQAMAGADgGQAMgbAegGQAUgEAQALIAFADIADADIAEgHQAKgOAWgDQAjgDAaARQAQgWAaARQAHAFAGACQAIABAGgEQAKgGAPgBQAUgCAPAJIAEADQAHAFAFAIQAJgVAWAVQATAHATAKQAGADAFAFIADADIAEAFQAEAHABAJQAAgFAFAAQAUAAAPAPQALAKAAAKIAAAFQADgDAGgBQANAAANARQAJANAEANIABAFQAHAEABALQADAUgOAJQAKAWgRAWQgFAHgCAHIgBAEIAAABIgFAMQgIAYgXgCQgIAAgCAFQgOAfgagUQABAHgFAEIgDADIAAAAIgDACQgPAIgKgKQgLAPgSgNQAKgKAGgLQAGgLACgNQgXgBAAgUQABgGACgEIgCAAQgQABgMgJQgHgGgDgKQgKAOgPgNIgKgHIgLgFQgKgEgHACIgPAEQgDABgCAEQgDAGgHAAQgGABgJgFIgNgHIgPgHIAAgBQgHgDgEACQgDABgCAEIgBACQgCAGADADQAGAIgIAHQgJAIgOgHQgDgCgDgEQgNALAIAPQgPARgMgQQgBAVgUAEQgXAEgBgUQAAgMgFgGQgOABgKAEQgJAFgHAJIAAABIgBAAQgHAMABAMIACAIIAFAKIAMARQgKAMgUgBQgFgBgCAHQgDAQgLAKQgFAFgIgBIAAAAQgMACgLAAQgZAAgRgJgAHAk7QAAgNgLgHQALAHAAANgAg4k8QACgFAAgFQAAgHAFgBIADgBIAAAAIABAAQACAAADADIAAAAQAIALAIAAIAAAAIAAAAIADAAIAAAAIAAgBQASgGAPgKIABAAIAAAAQAEgCAEAAIAAAAIABAAQAGAAACAIIAAABQAEAOAGABIABAAIAAAAQAFgBAGgJIAAAAIAAAAIAAAAIAAAAQgGAJgFABIAAAAIgBAAQgGgBgEgOIAAgBQgCgIgGAAIgBAAIAAAAQgEAAgEACIAAAAIgBAAQgPAKgSAGIAAABIAAAAIgDAAIAAAAIAAAAQgIAAgIgLIAAAAQgDgDgCAAIgBAAIAAAAIgDABQgFABAAAHQAAAFgCAFQgjgMgFgiQAFAiAjAMIAAAAgAGmldIABgLIgBALgAHLlmQALAAALgJIACgCIABAAIAAgBIABAAIABgBQAHgGAIAAIABAAIAAAAQAGAAAGADIAAAAIANgEIgNAEIAAAAQgGgDgGAAIAAAAIgBAAQgIAAgHAGIgBABIgBAAIAAABIgBAAIgCACQgLAJgLAAIAAAAIAAAAIgGAAIAAAAIgBgBIABABIAAAAIAGAAIAAAAIAAAAgAApltQgLgDgHgHIAAAAIgJACIgBAAIAAAAQgIAAgGgFIgBAAIAAgBIgJgHQgKgBgLAGIgBABQgFADgEAAIAAAAIAAAAQgLAAgEgTQgHAHgLADIgBABIgCAAIgCABIgFAAIgBAAIAAAAQgEAAgCgBIgBAAQgEgDAAgJIAAgDIAAADQAAAJAEADIABAAQACABAEAAIAAAAIABAAIAFAAIACgBIACAAIABgBQALgDAHgHQAEATALAAIAAAAIAAAAQAEAAAFgDIABgBQALgGAKABIAJAHIAAABIABAAQAGAFAIAAIAAAAIABAAIAJgCIAAAAQAHAHALADgAGll2IAIgBIAAAAIAFgDQAGgDAFgIIAHgKQACgEAEgDQAPgKAIgPIAAAAIAAAAIABABQACACADAAIAAAAIABAAIABAAIABAAIADgCIABgBQATgKAFgTQgFATgTAKIgBABIgDACIgBAAIgBAAIgBAAIAAAAQgDAAgCgCIgBgBIAAAAIAAAAQgIAPgPAKQgEADgCAEIgHAKQgFAIgGADIgFADIAAAAIgIABIgCABIgDgBIADABIACgBgACDl8IACgCIABAAIAAAAIAAgBIAAABIAAAAIgBAAIgCACIgCAAIAAAAQgCAAgBgEQgCgGgEgCQgHgCgFgFQgHgIgBgMQgBgKgEgHIgFgIIgCgDQgEgHAAgLIABgLIgIgHQgPgKgXgBQgJAAgHgGQgLgKAAgRIAAgGIgKADIgEABIAAAAIgBAAQgPgBAGgWIAAgBIAAABQgGAWAPABIABAAIAAAAIAEgBIAKgDIAAAGQAAARALAKQAHAGAJAAQAXABAPAKIAIAHIgBALQAAALAEAHIACADIAFAIQAEAHABAKQABAMAHAIQAFAFAHACQAEACACAGQABAEACAAIAAAAIACAAgAA7mMQADgOACgTQgFALgOAAIAAABIAAAAIgBgBIgBAAQgfgBgOggIgGgMQgIAOgOADIgBgBIgBgBIgBAAQgLgLgJgBIAAAAIAAAAIgDAAIgBAAQgHAJgEACQgEgKgCgLIgBgGIABAGQACALAEAKQAEgCAHgJIABAAIADAAIAAAAIAAAAQAJABALALIABAAIABABIABABQAOgDAIgOIAGAMQAOAgAfABIABAAIABABIAAAAIAAgBQAOAAAFgLQgCATgDAOgAGbmZQgEAFgFADQAFgDAEgFQAEgFAAgFQAAgDgCgEQAPgEAJgKQAEgEAEgCQAJgFACgLIABgIIAAgFIAAgFQAAgNAIgKQANgOASgHQgSAHgNAOQgIAKAAANIAAAFIAAAFIgBAIQgCALgJAFQgEACgEAEQgJAKgPAEQACAEAAADQAAAFgEAFgAFumqIgCAHIACgHQADgLAJgGIgBgFIgCgKQAAgMALgGQAQgIAHgPQACgFAAgHIAAgFIgBgJQAAgPAOgDQAGgBADgHQACgHADgFQgDAFgCAHQgDAHgGABQgOADAAAPIABAJIAAAFQAAAHgCAFQgHAPgQAIQgLAGAAAMIACAKIABAFQgJAGgDALgACenCQAAAUAVAFQgVgFAAgUQAAgPAGgNIgBABIgBAAIgBAAIAAABQgNADgMAAIgBAAIAAAAIgPgBIgBAAIAAAAIgCgBQgCAAgCgFIgCgGQgFgNgEgOIgBgFQAAgGAFgGQADgCAAgDQAAgEgHgEQgKgGAAgIQAAgFADgGIAMgRIgMARQgDAGAAAFQAAAIAKAGQAHAEAAAEQAAADgDACQgFAGAAAGIABAFQAEAOAFANIACAGQACAFACAAIACABIAAAAIABAAIAPABIAAAAIABAAQAMAAANgDIAAgBIABAAIABAAIABgBQgGANAAAPIAAAAgAFQm4QABADACADQgCgDgBgDIgBgFQAAgIAJgKQACgCAAgDIgBgEQgGgLgEgOQgCgFAAgGQAAgMAIgLQACgDAAgCIgCgGQgGgKgCgMIAAgIQAAgOAKgMQgKAMAAAOIAAAIQACAMAGAKIACAGQAAACgCADQgIALAAAMQAAAGACAFQAEAOAGALIABAEQAAADgCACQgJAKAAAIIABAFgAD9m3QAGgNAAgMIgBgJQgBgIgDgHQgDgIAAgHQAAgLAIgKQAGgGAAgIQAAgIgHgJQgCgDAAgEIAAgCQADgTANgKQAFgEAAgFIAAgCIAAACQAAAFgFAEQgNAKgDATIAAACQAAAEACADQAHAJAAAIQAAAIgGAGQgIAKAAALQAAAHADAIQADAHABAIIABAJQAAAMgGANgADSm6QgBgCAAgEIAAgFQgIgIAAgKQAAgIAEgIQACgFAAgEQAAgMgSgHQgJgEAAgIIABgGQACgGAAgFQABgNgQgFQgFgCgDgEQgDgFAAgIQAAgHACgKQgCAKAAAHQAAAIADAFQADAEAFACQAQAFgBANQAAAFgCAGIgBAGQAAAIAJAEQASAHAAAMQAAAEgCAFQgEAIAAAIQAAAKAIAIIAAAFQAAAEABACgAI2ndQgEgDgHAAQAHAAAEADgAhJkLQAIAAAFAIQgHgDgGgFgAhJkLIAAAAgAFbknIgBgCIgCgGQAEgOAPAEQAKADACALQgGAFgGADQgEACgDAAQgGAAgDgGgAETk1QgJAAgLgCIgFgBIgCgBQAAgOARgGQATgFAGAPIgCACIgJAMIgCABIgCgBg");
	this.shape_11.setTransform(96.4,52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:121.1,y:36}},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_6,p:{x:124.9,y:24.8}},{t:this.shape_9}]},2).wait(3));

	// Layer 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AoPjVQAJAPAKARQALAQANAOQANAMANANQABABACACQALALAMAMQANANANANQAMANAOANQAOANANANQAAAAABAAQANAOANAKQANAMAPAKQAPAKAPAKQAPAKAQALQAQALAOAKQADACADACQAPAIAQAJQARAJAQALQAOALAQAJQAQAIARAHQARAHARAHQARAIASAIQADABACABQAMAHALAIQAPALASAHQASAIARAHQARAIASAGQAQAGAQAHQARAHATAFQASAFASAFQATAFARAGQARAGATAFQAOAEAPADQABAAAAABQADAAAEABQASAFAUADQASADASABQAUACARgGQAPgFAPgDQAQgDAMgUQAEgGACgCQABgEABgDQACgMAEgMQgBACgCACQgOANgTAGQgSAFgSACQgTACgTADQgSADgSgCQgTgDgRgEQgTgFgSgGQgSgFgRgHQgSgGgRgGQgSgGgQgHQgQgGgRgIQgRgHgSgGQgDgBgDgBQgUgIgTgJQgSgHgRgIQgSgIgPgJQgEgCgDgCQgMgHgMgGQgRgHgQgIQgSgIgNgKQgMgKgQgIQgIgEgIgGQgEgCgFgCQgIgDgJgHQgQgKgPgKQgOgKgPgLQgOgKgOgKQgNgJgSgLQgPgKgQgJQgPgIgNgNQgNgMgMgNQgNgNgNgNQgBgBgBgBQgNgMgMgMQgNgMgMgMQgMgNgMgOQgNgPgJgQQgJgRgFgSQgEgRAEgTQADgSALgJQAAAAABgBQAPgKAQgHQARgIATAAQATgBATADQATADAQAHQASAIARAHQAQAIAeAWQAeAWAwAYQAwAYAXAQQARAIAPALQAPALAPAKQAPAKARALQAOALAPAJQAQAKAPAKQAPALAQAIQASAJARAHQARAHAQAJQAQAIAQAHQASAHBvA9QAMALAOALQAPAMAQAJQAPAKAQALQAMAKAOAJQABABABABQAPAKANALQAAAAABABQAOALANANQAMAMALAOQAMAPAHAQQAEAJgCAIQgBAFgEAF");
	this.shape_12.setTransform(52.8,142.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F3A01").s().p("AGgFBQgTgCgSgDQgTgDgTgEIgGgCIgBAAIgegIQgSgEgSgGIgjgLIglgKQgSgFgSgIQgPgHgQgFIgjgOIgkgPQgRgIgPgLQgLgIgNgGIgFgDIgigPIgjgPIgggPQgRgIgOgLQgPgMgRgJIgggQIgFgFIgegUIgfgVIgfgVQgOgJgOgLIgagZIAAgBIgbgZIgbgaIgagbIgXgXIgCgCIgagaQgOgNgKgRIgTggIABgHIAFgWIANgdQAMgaAVgJQgKAJgEARQgEATAFARQAFASAJARQAJARAMAPIAZAbIAYAYIAZAXIACACIAaAbIAZAZQANAMAQAJIAfATIAfAVIAbASIAeAVIAeAVQAJAGAJAEIAJADQAHAGAJAFQAPAIANAKQAMAKASAIIAiAPIAYANIAGAEQAQAJARAHIAjAQIAnAQIAGACQASAGASAIIAgAOQAQAHASAGIAjAMIAjAMIAlAKQASAFASACQASADATgDIAlgFQATgCASgFQATgGANgNIAEgEQgFAMgCALIgBAHIgGAJQgNATgPADQgPADgPAFQgOAFgPAAIgIAAg");
	this.shape_13.setTransform(52.5,144.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996600").s().p("AFlE6QgSgCgSgFIglgKIgjgMIgjgMQgSgGgQgHIgggOQgSgIgSgGIgGgCIgngQIgjgQQgRgHgPgJIgGgEIgZgNIgigPQgSgIgMgKQgNgKgPgIQgJgEgHgHIgJgDQgJgEgJgGIgegVIgegVIgbgTIgfgVIgfgSQgQgJgNgMIgZgZIgagbIgCgCIgZgXIgYgYIgZgbQgMgPgJgRQgJgRgFgSQgFgRAEgTQAEgRAKgJIACgBQAOgLARgHQARgHATgBQATAAASADQATADAQAHIAjAPQARAHAeAXQAeAWAwAYQAwAYAWAPQARAJAPALIAeAVIAgAVIAeAUIAeATQAQALAQAIQARAJASAHIAhAQQAPAJAQAHQASAGBwA9IAaAXQAOALAQAKQAQAJAPAMIAbATIACABQAPAKAMALIACACIAaAXQAMAMAMAPQALAPAIAQQAEAJgCAIQgBAFgEAFIgEAEQgNANgTAGQgSAFgTACIglAFQgKACgKAAIgRgCg");
	this.shape_14.setTransform(54.6,141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,179.3,178.3);


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


(lib.animbuffywheels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.stablewheel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(26.9,93.2,1,1,0,0,0,26.9,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080},14).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AE0nDQAVACAMgHQAEgBADgCQATgJgKgRQAjgGAKghQABgEAEgDQAlgdgWgtQAAgBgBgBQgDgEgDgDQgLgggbACQgCgdgagEQgDAAgDAAQgDAAgEgCQgFgDgFgGQgUgZgSAPQgCgNgTgIQgSgHgMALQgJgNgMgHIAAAAQgBAAAAgBQgBAAgBgBQgJgFgMgCQgWgEgLASQgPgegdAGQgDABgCABQgBAAgBAAQgUAFgQAMQgFAEgCAFQAAAAAAABIAAgBQgBAAgBgBQAAAAAAgBQgCgBgBgCQghgcgiAfQgJAIAAAMQgjgTgbAUQAAABgBAAQgBABgBABQgHAFgGAJQgSAYgCAaQgBADAEACQgZACgCAeQAAAIAGAGQgaACgBATQAAAHAEAEQAGAHAAAGQAAAGgGAGQgYAUAaAUQAHAFAGAEQgbASAUAWQAMAMANAIQgPASATAQQACACAEABQABAAAAAAQAFABAEAAQAIAAAIABQATADATgBQAUAAAMgMQAKgMAGgRQAAgBABgCQAAAAAAAAQADgIAEgHQAEgJAGgIAEvoBQgEgKADgGQAEgGAKgDQgBgZALgLQAEgRANABQACAAADgEQAGgNALgKAFEnzQAJgBAGgFQAGgFAEgJQANAAAHgUQAEgNAGgNQADgFABgHADqoaQgUgSAQgOQAMgJgKgKQgMgLAEgJQACgFAHgEQAKgGgDgLQgGgVAXgKQAGgDgDgHQgEgMgJgFAFKqXQgOAIgPANQgOAKAHAPQgVANAUAQQADACgEAFQgNAMAHAWQABAEgDADQgCADgGACQgBAHgCADADIrIQgWAGAMAUQACAEACADQAGAIgLANQgEAFgBAGQgDAQALAKQgVASASAQQAGAFgHAHQgHAHAAAIQAAAHAIAIQAEAEgBAJACQoDQgHgHgCgIIAAgBQgCgIAEgKQACgHAAgGQgBgOgMgJQgKgHgDgGQgCgFAFgEQAEgDABgEQAHgSgQgSQgHgIAKgMQADgDgBgGQgEgQgFgQQAMgOgGgKABOm8QgTgFgLgQQgCgCgBgCQgDgHgBgHQgBgJAEgJQAEgMAKgJQAEgDAFgDQACgBACgBQANgGAPABQACAAACABQAMABAEAJQACADAAAEQABAEgBAEQABADAAADQAEAVAXgEQAMgCABgKQADgWAWAHQANAEAEgIQABgCABgBQAIgKAPAFQAAAAAAAAQAFABAFADQARgJAKANQABABABABQABABABABQADAEAEADQADACAEAAQAEABADgBQAFgBAFABQACAAADABQAAALAHAFQABABACABQACABACABQABAAAAAAQABAAABAAQgGASgJAOABkogQgLgEgCgGQgCgGAHgJQAJgLgFgLQgCgEgDgEQgIgJgKgEQAQgCgCgQQAAgKgJgEQgPgHgCgMQgBgLAAgLQgBgRgNgJQAAAAAAAAQgGgEgFgDAAwoWQgUgEgHgQQAAgBAAAAQgFgNgKgGQgIgFgJAEQAIgUgcgQQgCgBgDgBQAQgTgRgQQgGgGgIgBQAIgQgPgOQgFgEgGgDAADrLQgFAGgCAGQAAABAAABQgCAJAHAIQAEAEAEAEQADAGgFALQgHARAQAPQAJAHgFANQgCAIAIAFQASALABATQAAADAFADQAFADAFAEQAAAAAAAAQAAAAABAAIAAABQACABACACAhbqDQgFAFgBAGQgBAFADAHQACADAEAAQgGAbAhAOQAFACABAHQABAKAJAGQATAMAWAEQAEAUAQAGAACnYQgCACgDABIAAAAQgIAEgIAEQgBAAAAAAQgEACgEABQAAAAAAAAQgOgRgWAFQgJADgHgIQgNgOgLAQQgHgLgKgBAh5ouQgCAGAAADQAAALAUgDQAQgDgBAMQAAAMATAEQAIABAFAMQAFAMARABQASABAOAGAhBmOQAQgCAHgJQAMAIALgSQACgEAIgCQACgBACgDAhwmwQAAAEAAAEQAKgFAFgKQAKAUAQgPQAPgNAQAMQAEACADgCQAGgEAGgCQABgBACAAQADgBADgBIABAAQAAAAABAAQABAAAAAAQADAAABgDABUlCQgCACgCACQALAIAIAKQAGAHAMgBQAPgBAQgDQAMgDAJgFQgFgFgEgFQAAAAAAgBQAIgLAMgIQAMgIAQgEQABAAABAAQABAAAAAAQAAAAABABQAMAIANAEQAKgGAHgHQAFgFAEgEQABgBAAgBQALACAOgDQAJgCAEgIQAGgOgNgMQgJgIAEgOQAEgMAHgLQACgEADgEQABgBABgBABQk+QgCgBgCgCQgQgLgKgQQgCgCgBgCQgCgEgCgFABQk+QgKANgBAPQgCAUADARQAEATADARQABAHACAFQACABACAAQABABABAAQAGACAEACQAAAAAAABQAAATgFARQgBAFgCAEQARACAQAJQAGADAFACQATAHASAGQASAFANAMQAOALAOALQANAKATACQAOACANAEQAQAGAGAQQACAHgBAGQAAALgKAIQgDACgDABQgCABgDAAQgKACgLgHQgNgHgKgNQgEgFgIgBAECnrQADgBAEgCAECnrQAOAIgHAUQgGAQgKAOQgDAEgDACQgDADgCACQgOAKgTAAQgBAAgBAAQgMAAgDgFQgEgGAFgKQAFgLAJgJQAMgNARgKQAMgJAOgGgADzmrQgGgRgSAHQgRAGADATACgk9QgGgGgEgJQgEgHgBgJQgBgKAEgKQAGgRAKgPQAJANAKANQALAPAQALAC8ggQAWgBATAGQASAFAOAGQADACADABQAOAGAMAHQAIACAHAFQAJAFAJAGQAOAKANAJQAIAFAEAFQAMAMAJAOQAHALADAOQABADABACQAEAPgCAQQAAABAAABQgCARgIAOQgIAQgJAPQgJAOgKAPQgKAQgLAOQgJAMgJAKQgCACgCACQgJANgJAKQgJALgJATQgCAFgFAFQgEAEgEAFQgHAIgJAJQgNAOgKAPQgLAOgJAQQgDAEgEAFQABAAAAAAQAKAPAKAPQALAOAFAPQAGAQgBATQAAATABATQACAUgFARQgGASgKARQgKAQgKAPQgMAQgOAMQgOAMgRAKQgQAKgPAHQgPAHgRAFQgUAGgQgKQgFgDgGgCQgUgDgQABIgBAAQACAGABAGAC8ggQgBgFgBgEQgEgUgSgKQgDgCgEgBQgRgEgOgFQgPgGgRgJQgNgHgOgGQAHgHAFgKQAFgMAEgMQAAAAAAgBABQjNQgPgEgOgEQgSgFgSgIQgQgIgSgHQgSgIgQgIQgPgHgQgKQgOgJgOgGQAAAAAAAAQgDAEgDAEQgLANgRAKQgQAJgUAEQgRADgIAIQAPAOASAEQASAEARADQATAFAQALQAPALAQALQAOAJAQAKQAPAJARAGQARAGATAFQASAFARAHQAEABADACQgCACgCACAgzhNQALAGAKAFQAOAGAOAFQAMAEANAFQAJADAJAGQAHAFAFAFQAJAJAEAMQAGAMAHAOQAEAIAHADQAKAEAOABQAVACANgJQADAFABAGQAAAGAFABQATAGAIgUQAFgOABgQQAPAGAQAGQARAGARAGQATAGAOAIQAPAKAMAJQANAKAJARQAJARgEAUQgCARgMARQgKAPgKAPQgKAPgLAPQgDAEgDAEQgHALgGAKQgKAQgKAOQAAABAAABQgEgBgEAAQgTgBgUgBQgSgBgTgCQgTgCgTgCQgJgCgJgBQAQgMAMgNQAMgMAMgLQAKgKAHgLQACgEACgDQAHgQABgUQAAgWgKgNQgLgOgTgEQgJgBgLgCQgRgDgOgEQAEAKABALQABAUgGARQgHASgJARQgIARgOANQgOAOgOAMQgIAHgHAGQAQAEARACQATACATADQAKABAKABABiBbQgBgDgCgEQgIgOgNgKQgPgMgRgHQgRgGgUgCQgRgCgTgCQgTgCgTgCQgSgCgSgBQACgBADgBQgDAAgDAAQgJgHgGgKQAAgBgBgCQgBAAgCAAQAKgOAKgOQALgPAMgLQAOgMARgLAEmgKQAPAFANAHQANAIAQAIQAPAIAPAKQAMAIALAKQACACACACQAMAMADARQABANgHAMQgHANgKALAC+ADQAAAAAAgBQAAgCAAgDQAAgPgCgOAE2ggQAQAIAPAKQARALAOAJQAOAJAQAHQAKAEAJAFQABAAAAABQAGADAFADQAPAIAKAKQAOANgDARQgDATgGARQgFATgLAQQgIAMgLAQQgKAPgKAMQgMAOgOAOQgEADgDADQgKAKgJAJQgOAOgLALQgNAOgNANQgLAMgKAMQgBADgCACQgJANgKAPQgJAOgNAMQgNAMgMALQgJAJgIAIAhvmCQAAAAgBAAQgDAAgDAAQgDAAgDAAQgSABgSAAQgTAAgTAFQgSAFgSAHQgSAHgPAKQgDABgCACQgNAIgLAIQgQALgMAOQgLAOgFASQgDAOABANQAAAEACAFAhwkhQAIgIAJgHAkqi9QABAAAAABQABAAAAAAQABAAABABQANAGAOAHQARAJARAJQAQAIAQAHQAgAPAfANQATAIATAGQALAEALAFQAFACAGADQAIAEAIAEAlXjtQABADACADQAIAQAPANQAIAIALAFQAAAAAAAAQgDAEgEAFQg8BJgYAlQgMASgMARQAAABgBAAQgTAcgTAZQgjAuAnAuQAGAGAGAGQAeAZAtAFQAkADAhAFIAAAAQACAAACABQATADARADQATACASADQATADAQAGQAGADAIABQgCgDgBgEQATACARAAQAGAAADACQADgGAEgFQAKgPALgQQAKgPAPgNAmtCgQgKgQADgVAkuDJQgtgBgigKQgjgKgNgUAkaDJQgLABgJgBAkkChQACAAACABAkaDJQgCAAgCAAQgIAAgIAAAhpAWQgRAFgPAGQgKAEgGAJQgKAQgFATQgFAWgBAXQgBASADARQABAJACAJAmdgjQAxASAxAQQAeAIAbACQAMABAKgBQABAAABAAQAEAAADAAQACAAACAAQAMABAMACQAMABAMACQAGABAHABQATADATAAQAJAAAJAAAiKDYQgSgCgQgEQgTgFgTgCQgTgDgUABQgQAAgRAAAh8C3QgFAJgEAKQgDAHgCAHQgEAKgEAJQgHARgHASQgBACgBACQgGAOgKANQgLAPgMAMQgLAMgTAFQgCABgCABQgCABgCABQgHADgFAGQgCADAAAEQgCAVAJARQAHANAPALQAKAGAKAKQABAAAAABQABAFADAEQACAFAFAFQAIAGAHAGQgRgFgLgMQgGgGgFgGQgMgOgOgMQgOgLgNgLQgOgMgNgOQgMgNgJgSQgFgLABgFQgTgEgJAEQgDABgCAEQgIARAHAQQAGAOAMALQAOANANAOQAMAMAOANQANANAQAKQAQALANAJQAOALAMAMQAMAMAQAMQAOALARAJQAEACADAAIABABQACAAACAAQALABAFgIQAFgHAEgDQABABABAAQAHABAHAAQACgBABAAQARgCAOgOQAKgMgMgKQgIgGgEgCQAIgFgFgIQgFgIgHgEQgHgFgJgCQgTgEgMgHQgJgFgHgJQgCgCgBgDAiiESQgEgBgFAAQgUAAgSgDQgTgDgTABQgUACgTgBQgSAAgSACQgEAAgEABQgFAAgFACQgCgBgBAAQgYgDgagGQgfgHgWgSQgqggA7gvAhrGCQAGgHAHgHQANgPAMgOQAMgOANgMQAJgJAIgJQABgBABgBQADgDADgCQANgPALgLQAFgGAFgFQABgBABgBAgTEpQgHANgHAGQgLANgMALQgOAPgNAKQgNAJgLAMIgCACQgFAFgFAEQAAABgBABQgJAHgIAEQgFAIgBAIQAAACAAABQgDgDgBgEQgIgSAEgTAjvFdQgQgGgPgGQgPgIgTgGQgPgFgCAHAixHbQAKAKAKALQASASATAPQAHAFAJACAiFIpQARAFAQAIQAQAIALALQABgBAAgCQAEgNAFgMQACgFACgFQAHgQAKgPQAIgNAHgNQABgBAAAAQAJgQAOgLQANgNAPgLQAQgMATgDQATgDATgEQARgDAQACQAFgGAGgGQANgMAMgOQALgOANgOQANgNAOgOQgNgCgMgBQgPgCgSgBQgCgBgCAAQgTgBgTgBQgUAAgRgDQgEgBgFgBQAAAAgBAAQgMAMgLAKQgOANgOALQgNALgMAMQgOANgNANQgMAMgCAUQgDAUAIAQQAGANAIAGAhSKkQgEgJAAgMQABgUAEgSQADgRAFgPAhSKkQgFgBgEgBADaFCQADABAEABAC5HEQgHgLgOgHQgPgGgPgKQgBgBgCgBIAAgBQACABABACAC6HCQADgCACgDQgCACgBACQgBAAgBABQAAABgBABQABAAABABQAAABABACQAIANAAAVQABAUgDATQgCATgCATQgCAUgHASQgHARgKAOQgKAOgKAQQgJAPgPALQgNAJgQAIQgPAJgTAFQgQAFgVgBQgRgBgPABQgGgLgKgHQgPgMgQgKQgLgHgMgEAC/G9QACgCACgDADCG4QgBACgCADAgTEpQAOAAAOACQASABARADQANADAOACAgZEpQADAAADAAABKIAQgQAJgPALQgSANgEASQgFASAJASQAJASAVgEQAUgDAPgKQAPgLAIgRQAIgQAAgTQAAgWgLgEQgGgEgHgBQgBAAgBAAQgJAAgMAGgAgMLXQgDAAgDAAAgMLXQADAFACAFQAAAAAAABQABACAAADQgHABAGgGAg/ItQgLgHgLgN");
	this.shape.setTransform(87.7,75.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AB+CEQgJgSAEgSQAFgTARgMQAQgMAQgIQALgGAKAAIACAAQAHABAGAEQALAEgBAWQAAASgHARQgIARgQALQgPAKgTADIgHAAQgQAAgHgOgAhpgIIgKgMQgMgPgPgLIgbgWQgOgMgNgPQgMgNgIgRQgFgLABgFQABgHAQAFQASAGAQAHQAPAHAQAFQgHAEgFAGQgCACgBAFQgBAUAIARQAHANAQALQAKAHAKAJIABACQABAFACAEQADAFAFAEIAOAMQgQgGgMgKg");
	this.shape_1.setTransform(77.7,122.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AAFDqQgOgGgTgDQgTgDgTgCIgkgGIgDgBIADABIgDgBIAAAAQgigFgjgDQgtgEgegaIgMgMQgnguAjguIAmg2IABgBQAxASAxAQQAeAJAbACIAGAAIAGABIABAAIAAAAIAEAAIAFgBIACAAIAHAAIAEAAIAYADIAWADIANACQATADAUAAIARAAIAHAAIgGACQgQAFgQAGQgJAEgGAJQgLAQgFATQgFAWgBAXQAAASACARIAEASIACAHQgIgBgGgDgAg7A+IgGgBIgGAAIAAgEIAAgBQALAFALAAIgFABIgEAAIAAAAIgBAAgAD3g+QgRgHgSgFQgUgFgSgGQgRgGgPgJIgdgTQgRgLgOgLQgQgLgTgFIgkgHQgRgEgPgOQAIgIARgDQAUgEAQgJQARgKAKgNIAHgIIAAAAQANAGAOAJQAQAKAPAHIAjAQIAiAPQASAIASAFIAeAIIADABIADABIAKAEIAAABQAAATgFARIgDAJIAAABIgKAYQgEAKgHAHIgHgDg");
	this.shape_2.setTransform(69.1,70.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AhmEhQgQgIgSgFIAFABIABAAIAAAAIABAAIAAAAIABAAQAHAAAEgFIABgBIABgBIAAgBQAFgHAEgCIACABQAGABAIgBIADAAQALANALAHIgJAZIgBADQgLgLgQgJgAiBEVIgBAAIAAAAIgBAAIgFgBIAAAAIgHgDQgSgJgOgKQgPgMgNgNQgMgMgOgKIgdgUQgPgLgOgNIgZgYIgbgbQgMgLgGgPQgHgQAIgQQACgEADgCQAJgEATAFQgBAFAFALQAIARAMANQANAPAOAMIAbAWQAPALAMAPIAKAMQAMALAQAGIAUAUQASATAUAOQAHAGAJACQgEACgFAHIAAABIgBABIgBABQgEAFgHAAIgBAAIAAAAgAChCeQgOgHgPgJQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIAKgMQANgNAMgOIAZgbIAagbIgZgEIgggDIgEAAIgngCQgTgBgRgDIgJgBIgCAAIgbgFQgRgEgSgBIgbgBIgGAAIAFgGIAYgZIALgKIACgCQAQAEARACIAlAEIAVADIASACIAlAFIAmACIAnACIAHAAIABgBIAUgdIANgVIAGgIIAVgfIAUgeQALgRADgRQADgTgJgRQgJgSgNgJQgLgKgQgJQgOgIgSgGIgjgNIgfgLIAAgBIABgGQAAgPgCgOQAWgBATAFQARAFAOAHIAHADIAaAMIAPAJIARALIAbASQAIAFAFAGQALALAKAPQAHALADAOIABAFQAFAOgCAQIAAADQgCARgIAOIgSAfIgSAdQgKAQgLAOIgTAVIgDAEIgTAXQgJALgJASQgCAFgEAFIgIAJIgQARQgNAPgLAOIgUAeIgGAKIAGgKIAUgeQALgOANgPIAQgRIAIgJQAEgFACgFQAJgSAJgLIATgXIADgEIATgVQALgOAKgQIASgdIASgfQAIgOACgRQAJgMAIgNQAHgMgCgNQgCgQgMgNIgEgDQgLgKgNgJIgegRIgcgQQgNgIgPgFIAGgEQAJgHABgLIAfARIAeAVQAOAKARAHIATAJIABAAIALAGQAPAJAKAJQAOANgEARQgDATgFASQgFASgLAQIgTAcQgLAQgKAMQgLAOgPANIgGAHIgUATIgZAYIgZAbQgMAMgJAMIgDAFIgTAcQgKANgMAMIgZAYIgSARIAAAAIgEAFIgDADIgBACIgBABQgIgKgOgHgADfAvIgIgBIAIABgAlZgCQgYgDgagGQgfgIgXgRQgqghA8guQgKgQADgVQAeAZAtAEQAjAEAiAEIAAABIADAAIAkAGQATACATAEQATADAPAGQAGACAIACIgCgHQATABARAAQAGAAADADIgJASIgGAPQgRgCgQgEQgTgFgTgDQgTgDgUABIgiABIgEAAIgQAAQgsgBgjgKQgjgKgMgUQAMAUAjAKQAjAKAsABIAQAAIAEAAIAigBQAUgBATADQATADATAFQAQAEARACIgHATIgOAiIgCAFIgKgBQgTgBgSgCQgTgDgUABQgTABgUAAQgSAAgSABIgHABIgKACIgDAAIADAAIgEABIABgBgAkphKIAFAAIAHAAIgHAAIgFAAIAAAAIgBAAIgDAAIgEAAIAEAAIADAAIABAAIAAAAgAiNg7IAAAAg");
	this.shape_3.setTransform(88,103.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BIQgEgIgBgIQgBgKAEgLQAGgQAKgQIATAaQALAPAPALIgCABQgPAEgMAIQgMAHgIAMQgGgHgEgIgAgCgHQgMAAgDgFQgEgGAFgLQAFgKAJgJQALgNARgLQAMgIAOgGQAOAHgHAUQgGARgKAOIgGAGQgGgRgSAGQgQAHADATIgBAAIgBAAg");
	this.shape_4.setTransform(108.3,35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BE9670").s().p("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");
	this.shape_5.setTransform(83.2,76.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhYLuQgFgDgGgCQgVgDgRABIAAAAIgCgFIAAgBIgEgKIAHAAIAGAAIAAAAIAAAAIAJAAIADAAIAEAAIAEAAIACAAIACAAIAAAAIAAAAQASAAAOgEQATgFAQgJQAPgIANgJQAOgLAJgPIAUgeQAKgOAHgRQAIgSACgUIAEgmQACgQAAgRIAAgGQAAgVgIgNIgCgDIgBgBIABgCIAEgFIAEgFIAVAeQAKAOAGAPQAFAQAAATQgBATACATQACAUgGARQgFASgLARIgUAfQgLAQgOAMQgPAMgQAKIgeARQgQAHgQAFQgHACgHAAQgMAAgKgGgAhqLXIgCAAIgCAAIgEAAIgEAAIgDAAIgJAAIAAAAIAAAAIgGAAIgHAAQgGgLgKgHQgPgMgQgKQgLgHgMgEQgFgJABgMQAAgUAEgSQADgRAFgPIACgDIAJgZIAEgKQAHgQAJgPIAQgaIABgBQAJgQANgLIAegYQAPgMAUgDIAlgHQARgDAQACIAAABIACACQAQAKAOAGQAOAHAIALIABABIACADQAIANAAAVIAAAGQAAARgCAQIgEAmQgCAUgIASQgHARgKAOIgUAeQgJAPgOALQgNAJgPAIQgQAJgTAFQgOAEgSAAIAAAAIAAAAgAg4IAQgQAJgQALQgRANgFASQgEASAJASQAIASAWgEQATgDAPgKQAQgLAIgRQAHgQAAgTQABgWgLgEQgGgEgHgBIgCAAIgBAAQgJAAgLAGgAjamAIgQgBIgIgBIgCAAIgGgDQgTgQAPgSQgNgIgLgMQgVgWAcgSIgNgJQgagUAYgUQAGgGAAgGQAAgGgGgHQgFgEABgHQAAgTAagCQgGgGABgIQABgeAZgCQgDgCAAgDQADgaASgYQAGgJAHgFIABgCIACgBQAagUAjATQABgMAIgIQAjgfAhAcIADADIABABIABABIABABIAAgBQACgFAFgEQAQgLAUgGIABAAIAGgCQAcgGAPAeQAKgSAXAEQALACAKAFIACABIAAABIAAAAQAMAHAJANQAMgLATAHQATAIABANQATgPATAZQAGAGAFADIAGACIAGAAQAaAEACAdQAbgCAMAgQADADACAEIACACQAWAtglAdQgFADgBAEQgJAhgkAGQALARgTAJIgHADQgNAHgVgCQAKgOAFgSIgBAAIgCAAIgDgCIgEgCQgGgFAAgLIgGgBQgFgBgEABIgHAAQgEAAgEgCQgDgDgEgEIgBgCIgCgCQgKgNgSAJIgJgEIgBAAQgPgFgIAKIgCADQgEAIgNgEQgWgHgCAWQgBAKgMACQgWAEgEgVIgBgGIAAgIIgCgHQgEgJgNgBIgDgBQgPgBgNAGIgFACIgJAGQgJAJgFAMQgEAJABAJQABAHAEAHIgcALIgKARIgGAPIgBAAIgBADQgGARgLAMQgLAMgUAAIgHAAQgQAAgQgCgAjEmOQAQgCAGgJQAEACAEAAIAAAAIAAAAQAHAAAHgKIABgCIAAAAQADgEAHgCQADgBACgDQgCADgDABQgHACgDAEIAAAAIgBACQgHAKgHAAIAAAAIAAAAQgEAAgEgCQgGAJgQACgAj0moQAKgFAFgKIAAAAIABABQAFAKAHAAIABAAIAAAAQAFAAAGgGIABAAIAAAAIAAgBIABAAIAAAAIABgBQAGgFAIAAIAAAAIAAAAQAIAAAIAGQADACAEgCQAFgEAGgCIADgBIgDABQgGACgFAEQgEACgDgCQgIgGgIAAIAAAAIAAAAQgIAAgGAFIgBABIAAAAIgBAAIAAABIAAAAIgBAAQgGAGgFAAIAAAAIgBAAQgHAAgFgKIgBgBIAAAAQgFAKgKAFIAAgIIAAAIgAiWm6IAHgCIAAAAIACAAIABAAQACAAACgDgAignKIABAAIAIgDIAAAAIAQgIIABAAIAFgDIgFADIgBAAIgQAIIAAAAIgIADIgBAAIAAAAQgLgNgPAAIAAAAIAAAAIgJABIgBAAIgEABIAAAAIAAAAQgGAAgGgGIAAAAIAAgBQgGgGgFAAIAAAAIAAAAQgGAAgFAIIgBABIAAAAQgHgLgLgBQALABAHALIAAAAIABgBQAFgIAGAAIAAAAIAAAAQAFAAAGAGIAAABIAAAAQAGAGAGAAIAAAAIAAAAIAEgBIABAAIAJgBIAAAAIAAAAQAPAAALANIAAAAgAjIoEQAIABAFAMQAFAMARABQASABANAGQgNgGgSgBQgRgBgFgMQgFgMgIgBQgTgEAAgLIAAgBIAAAAQAAgJgJAAIgBAAIAAAAIgFAAIgCAAIgEABIAAAAIgCAAIAAAAIgBAAQgLAAgBgJIAAgBIACgIIgCAIIAAABQABAJALAAIABAAIAAAAIACAAIAAAAIAEgBIACAAIAFAAIAAAAIABAAQAJAAAAAJIAAAAIAAABQAAALATAEgADQn5QgHAFgIABQAIgBAHgFQAGgFAEgJIAAAAIAAAAIABAAQALgBAHgTQAEgNAHgNQACgFABgHQgBAHgCAFQgHANgEANQgHATgLABIgBAAIAAAAIAAAAQgEAJgGAFgAjBpAQAEACABAHQABAKAKAGQATAMAVAEQAEAUARAGQgRgGgEgUQgVgEgTgMQgKgGgBgKQgBgHgEgCQgcgMAAgVIABgIIgBAAIgCAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgCgFAAgFIAAgCQABgGAEgFQgEAFgBAGIAAACQAAAFACAFQAAAAAAABQABAAAAABQABAAAAAAQABAAAAABIACAAIABAAIgBAIQAAAVAcAMgACroBQgCgFAAgEQAAgEACgDQADgGAKgDIAAgEQAAgWALgKQADgQALAAIABAAIAAAAIABAAIABAAQACAAACgEQAHgNALgKQgLAKgHANQgCAEgCAAIgBAAIgBAAIAAAAIgBAAQgLAAgDAQQgLAKAAAWIAAAEQgKADgDAGQgCADAAAEQAAAEACAFgAAEoSQACAIAHAHQgHgHgCgIIAAgBIgBgGQAAgGACgGQACgHAAgGIAAAAQAAgOgMgJQgKgHgCgGIgBgDQAAgDADgDQAEgDACgEQACgGAAgFQAAgNgLgMQgEgDAAgFQAAgFAGgHQACgDAAgDIAAgDIgJggQAJgKAAgIQAAgDgCgDQACADAAADQAAAIgJAKIAJAgIAAADQAAADgCADQgGAHAAAFQAAAFAEADQALAMAAANQAAAFgCAGQgCAEgEADQgDADAAADIABADQACAGAKAHQAMAJAAAOIAAAAQAAAGgCAHQgCAGAAAGIABAGIAAABgACZocQgDADgGACQgBAHgCADQACgDABgHQAGgCADgDQACgCAAgCIgBgDQgCgIAAgGQAAgMAJgIQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgCQgKgIAAgHQgBgIALgGQgCgFAAgEQAAgJAJgHQAPgNAPgIQgPAIgPANQgJAHAAAJQAAAEACAFQgLAGABAIQAAAHAKAIIABACQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAABQgJAIAAAMQAAAGACAIIABADQAAACgCACgAA8oUIABgEQAAgGgDgDQgIgIAAgHIAAgBQAAgHAHgHQADgEAAgDQAAgDgDgCQgIgHAAgIQAAgJAMgKQgJgIAAgLIABgHQABgGADgFQAHgIAAgHQAAgDgCgDIgDgHQgFgHAAgGQAAgJAPgEQgPAEAAAJQAAAGAFAHIADAHQACADAAADQAAAHgHAIQgDAFgBAGIgBAHQAAALAJAIQgMAKAAAJQAAAIAIAHQADACAAADQAAADgDAEQgHAHAAAHIAAABQAAAHAIAIQADADAAAGIgBAEgAh9o+QALAGAFANIAAABQAGAQAUAEQgUgEgGgQIAAgBQgFgNgLgGIAAAAQgFgDgFAAIAAAAIgBAAIgGABIgBABQACgFAAgEQAAgPgVgMIgGgCQAIgJAAgJQAAgJgJgIQgGgGgIgBQADgGAAgFQAAgKgKgJQgFgEgFgDQAFADAFAEQAKAJAAAKQAAAFgDAGQAIABAGAGQAJAIAAAJQAAAJgIAJIAGACQAVAMAAAPQAAAEgCAFIABgBIAGgBIABAAIAAAAQAFAAAFADIAAAAgABnoaQgMgKAAgJQAAgHAIgGQAGgFAAgFQAAgFgFgEQgJgJAAgHIABgEQACgFAHgEQAIgEAAgIIgBgFIgBgIQAAgPASgIQAFgCAAgEIgBgEQgFgMgJgFQAJAFAFAMIABAEQAAAEgFACQgSAIAAAPIABAIIABAFQAAAIgIAEQgHAEgCAFIgBAEQAAAHAJAJQAFAEAAAFQAAAFgGAFQgIAGAAAHQAAAJAMAKgAgroqQACAGALAEQgLgEgCgGIgBgCQAAgGAGgHQAFgHAAgHQAAgEgCgEIgEgIQgIgJgLgEQAPgCAAgOIAAgCQgBgKgJgEQgOgHgCgMQgCgLAAgLQgBgRgMgJIgBAAIgKgHIAKAHIABAAQAMAJABARQAAALACALQACAMAOAHQAJAEABAKIAAACQAAAOgPACQALAEAIAJIAEAIQACAEAAAEQAAAHgFAHQgGAHAAAGIABACgAhppSQATALABATQAAADAEADIAKAHIABAAIAAAAIAAABIAFADIgFgDIAAgBIAAAAIgBAAIgKgHQgEgDAAgDQgBgTgTgLQgGgEAAgFIABgEIABgIQAAgHgGgFQgLgKAAgLQAAgGADgFQADgHAAgEQAAgDgCgDIgIgIQgGgHAAgHIAAgDIABgCQABgGAGgGQgGAGgBAGIgBACIAAADQAAAHAGAHIAIAIQACADAAADQAAAEgDAHQgDAFAAAGQAAALALAKQAGAFAAAHIgBAIIgBAEQAAAFAGAEgABYm1QASgHAFARIgFAFQgOAKgTAAQgCgTARgGg");
	this.shape_6.setTransform(100.9,75.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,-1,133.6,153.2);


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
		var bgm = createjs.Sound.play('bgmDir',{loop:-1});
		
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
		
		 window.open ("direct_scene1.html","_self");
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


(lib.DefinitionPro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("Flying");
	}
	this.frame_30 = function() {
		playSound("Flying");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(26).call(this.frame_30).wait(70));

	// Layer 1
	this.instance = new lib.anim_pro();
	this.instance.parent = this;
	this.instance.setTransform(512.8,106.7,0.468,0.468,0,30,-150,88.5,88);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({x:277,y:184.5},7).to({x:-55.5,y:110.2},9).to({_off:true},2).wait(57));

	// Motopro
	this.instance_1 = new lib.animbuffywheels();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-68.5,6.1,0.416,0.416,-30,0,0,68.9,75.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:506.1,y:18.1},15).to({_off:true},1).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-34.8,65.3,74);


(lib.definition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("thedirectobjectisanounorpronoun");
	}
	this.frame_3 = function() {
		playSound("fancy_pad");
	}
	this.frame_65 = function() {
		playSound("fancy_pad");
	}
	this.frame_66 = function() {
		playSound("itanswerswhomorwhataftertheverb");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(62).call(this.frame_65).wait(1).call(this.frame_66).wait(69));

	// ProRiding
	this.instance = new lib.DefinitionPro();
	this.instance.parent = this;
	this.instance.setTransform(81.9,104.3,1,1,0,0,0,45.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	// pt2
	this.instance_1 = new lib.wordsdefinitionpt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(226.5,179.1,1,1,0,0,0,226.5,36.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).to({alpha:1},7).wait(63));

	// pt1
	this.instance_2 = new lib.wordsdefinitionpt1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(233.3,54.1,1,1,0,0,0,233.3,54.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({alpha:1},12).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,37.4,65.3,74);


// stage content:
(lib.direct_scene0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene0:0,scene0_repeat:122});

	// timeline functions:
	this.frame_0 = function() {
		1
	}
	this.frame_121 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_219 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(121).call(this.frame_121).wait(98).call(this.frame_219).wait(1));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EglvAWQMAAAgsfMBLfAAAMAAAAsfg");
	mask_1.setTransform(275.4,199.9);

	// Layer 5
	this.instance = new lib.definition();
	this.instance.parent = this;
	this.instance.setTransform(282,200.2,1,1,0,0,0,233.3,107.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Background("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.4,199.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(306.8,201.6,509.7,398.7);
// library properties:
lib.properties = {
	id: '14CBC3E8AF54BB44BD7BC0F10A26DA28',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmDir.mp3", id:"bgmDir"},
		{src:"sounds/fancy_pad.mp3", id:"fancy_pad"},
		{src:"sounds/Flying.mp3", id:"Flying"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/itanswerswhomorwhataftertheverb.mp3", id:"itanswerswhomorwhataftertheverb"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/thedirectobjectisanounorpronoun.mp3", id:"thedirectobjectisanounorpronoun"},
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
an.compositions['14CBC3E8AF54BB44BD7BC0F10A26DA28'] = {
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