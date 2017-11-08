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


(lib.wordrace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAHAAAOQAAAJgLAIQgFADgPAGIgcAMQAEAFAGACQAFACAIAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIAUgIIARgKQgGgEgJAAQgHAAgGAGg");
	this.shape.setTransform(31.6,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbAnQgNgMAAgTQAAgRAMgSQAOgWASABQAJAAAMAEQAPAGAAAIQAAAFgDADQgDAEgFgBQgEAAgGgDQgEgFgLAAQgGAAgIAOQgIAMAAAJQABAJAGAGQAHAEAJAAQAGABAIgFQAJgFACAAQAFAAAEAEQADAEAAAEQgBAHgPAGQgNAHgIAAQgSgBgOgKg");
	this.shape_1.setTransform(21.9,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAVAoIgOAGQgGACgDAAQgWAAgKgLQgLgMAAgWQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAACgCADIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgMgRQgIAJAAAMQAAAMAEAFQAEAHAIAAQAFgBAFgBQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDAAQgLAAgJAJg");
	this.shape_2.setTransform(12.5,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQABgFADgDQADgEAFAAQAKAAABAKQAPgLATAAQASAAAAAXIAAAGQgBANgMAAQgKAAgBgLIAAgJQgTADgJARIAAAsQAAAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_3.setTransform(3.3,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordrace, new cjs.Rectangle(-3.3,0,42.1,29.1), null);


(lib.wordgirls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape.setTransform(33.5,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgIBFQgDgEAAgEIAAh5QAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGIAABzQAAASgMgBQgFABgDgEg");
	this.shape_1.setTransform(26.7,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgiAuQgCgEgBgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQARAAABAXIAAAGQgBANgMAAQgLAAABgLIgBgJQgTADgIARIAAAsQgBAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_2.setTransform(20.2,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgKBAQgDgEgBgEIAAgQIgBgRIABgUIABgSQAAgFAEgDQADgDAGAAQAEAAAEADQADADgBAFIAAASIgBAUIABARIAAAQQgBAEgDAEQgDADgEAAQgGAAgDgDgAgHgsQgEgDgBgGQABgFAEgEQAEgEAEAAQAGAAAEAEQAEAEABAFQgBAGgEADQgEAEgGAAQgEAAgEgEg");
	this.shape_3.setTransform(13.4,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgtA4QAAgFAEgDQACgDAGAAIALACIANABQANAAAFgIQAHgHAAgRQgEAEgGACQgFADgGAAQgSAAgKgMQgLgLAAgRQAAgYAPgOQAOgQAZAAQAJAAAFACQAGACAEAEQAMACgBAMIgCAQQgEAVAAAVQgBAdgIANQgMARgcAAQgjAAAAgOgAgNgnQgHAJAAAOQAAALAEAFQAEAEAIAAQAGAAAHgHQAHgIABgIIAEgaIgGgDIgGgBQgOAAgIAKg");
	this.shape_4.setTransform(5.8,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordgirls, new cjs.Rectangle(-1,0,41.1,29.1), null);


(lib.wordbuffy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgZBEQgEgDAAgFQAAgIATgpIgfg3IgEgHQgDgEAAgDQAAgFAEgDQAEgEAFAAQAGAAADAEQAMARAQAhIALgZIANgXQADgGAHAAQAFAAAEADQAEAEAAAEIgCAGIgeA+IgRAmIgFAQQgDAIgIAAQgFAAgEgDg");
	this.shape.setTransform(35.2,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgPBKQgFgDAAgFIABgCQACgNAAgLIAAgrIgGABIgFABQgGAAgDgEQgEgDABgFQAAgIAIgDIAPgBIACgKQACgUAJgJQAJgMAUAAQAQAAAAALQAAAMgOAAQgLAAgEAHQgFAGgBALIAAADIARgBQARAAAAALQAAAMgSgBIgRABIAAAXIABAXQgBARgBAJQgCAJgJAAQgFAAgDgDg");
	this.shape_1.setTransform(25.6,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgPBKQgEgDgBgFIABgCQACgNAAgLIAAgrIgGABIgFABQgFAAgEgEQgDgDgBgFQAAgIAJgDIAQgBIABgKQACgUAIgJQAKgMAVAAQAPAAAAALQAAAMgOAAQgLAAgFAHQgDAGgCALIAAADIARgBQAQAAAAALQAAAMgRgBIgRABIAAAXIAAAXQAAARgCAJQgBAJgJAAQgFAAgDgDg");
	this.shape_2.setTransform(16.4,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AASArQgMAFgLAAQgMAAgJgGQgJgFgCgNQgEgVAAgQQAAgMADgPQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBANIABAUQAAAJACAGIAEACIAEAAQAJAAAMgCIAAgQIgBgNQAAgTACgNQABgKALAAQAFAAAEADQAEAEgBAEIgBAfIAAARIAAASIAAAFIAAAGQAAAEgDAEQgEADgFAAQgHAAgDgHg");
	this.shape_3.setTransform(7.2,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgrBDQgEgFAAgFIAAhbIAAgMQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAFgIAGQAJAEAHAIQAHAKAAAJQAAALgNALQgIAHgKAEQgTAHgfAAQgGAAgEgEgAgXAvQAPAAARgGQAPgEAAgFQAAgHgKgFQgHgFgHAAIgXgBgAgXguIAAATIAAASIAMABQAagDAAgRQAAgGgIgGQgHgHgJABIgOAAg");
	this.shape_4.setTransform(-2.7,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordbuffy2, new cjs.Rectangle(-10.8,0,53.1,29.1), null);


(lib.wordcaptialThe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6633FF").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQANAHABAOQAAAJgLAIQgFADgPAGIgdAMQAFAFAFACQAGACAIAAQALABAIgFQAIgFAEAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgEgKAAQgIAAgFAGg");
	this.shape.setTransform(23.8,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6633FF").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_1.setTransform(13.8,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6633FF").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_2.setTransform(2.4,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordcaptialThe, new cjs.Rectangle(-6.1,0,37.1,29.1), null);


(lib.static_mick_arm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AACAlQgCgCgDgCQgHgdAOgiQAAgDACgD");
	this.shape.setTransform(8.5,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AEHhKQg7gMgegfQgPgPgRgKQghgTghgRQgLgGgNgCQgWgFgYAEQglAHgfAZQgfAYgQAiQgEAIgEAIQgDAGgEAHQgJARgLAPQgUAdgHAgQgCAHgCAGQAAAAAAAAQgJAXgSAGQgLAEgMABQgqABAGAkQALALAFABQAHgNAZAAQAFAAAEABQgLgQAKgNAiqBnQgLgCgOANQAAAAAAAAQgXAVgEAkQABACABABQARAdAdgYQgBAAAAgBAjMBtQAFACAEADAiqBoQAAAAAAgBQAFgHAOgKQARAKALAAAitBuQgDAOAfAHQANADALACQABAAABAAQARADANgBQAMgvgXgRQgDgCgDgCQAAAAgBAAQAAgBAAAAQgDgCgEgBQgBgBgCgBQAEgDAEgFQAlgqAagKQAZgKASgeQAOgZAPgUQACgEADgDQACgDABgCAh1BAQgPgJADgRAAfhYQACAEgBADQgGAaAIAUQAEAJAGAIQAEAFAEADQAVAQAgABQAEABAgAiAj1B5QgGALAGASQAFAPANgDQADAFACAEAiuCzQAfAWATghQALgRgGgP");
	this.shape_1.setTransform(26.3,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AhTAvQAgAjBAgRQBCgQAFgtQAEgtgygc");
	this.shape_2.setTransform(48.7,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AjzCuIgCgDQAEgkAXgVIABAAQALgLAJAAIAAAAIAAAAIAEAAIAAABIAAAAIgDAGQgKAXAAAWQAAAJADAKIAFAEIABABQgNALgLAAQgNAAgJgQgAjFCzIgBgBIgFgEQgDgKAAgJQAAgWAKgXIADgGIAAAAIAAgBQAFgHAOgKIAEACQAKAGAIABIACAAIADABIABAAIAAAAIAAAAIABAAIgBAAIAAAAIAAAAIgBAAIgDgBIgCAAQgIgBgKgGIgEgCQgOAKgFAHIgEAAIAAAAIAAAAQgJAAgLALIgBAAQgEgDgFgCQgFgIAAgIQAAgHAFgGQgFAGAAAHQAAAIAFAIIgIgBQgaAAgHANQgFgBgLgLQgGgkArgBQALgBALgEQASgGAJgXIAAAAIAEgNQAIggAUgdQAKgPAKgRIAHgNIAIgQQAQgiAfgYQAfgZAlgHQAXgEAXAFQAMACAMAGQAhARAgATQARAKAPAPQAeAfA7AMQAyAcgFAuQgEAshCAQQhCARgfgjQgggigDgBQghgBgUgQIgIgIQgHgIgEgJQgIgUAGgaQABgDgCgEIAEgFIgEAFIgFAHQgOAUgPAZQgSAegZAKQgaAKglAqIgIAIIAEACIAGADIABABIAAAAIAHAEQAWARgMAvQgNABgRgDQAGAPgKARQgMAUgQAAQgLAAgMgJgAioCDIAYAFIACAAIgCAAIgYgFQgcgHAAgMIAAgCIAAACQAAAMAcAHgAiMBAQgMgIAAgNIAAgFIAAAFQAAANAMAIgAj5CiQgNADgFgPQgGgSAFgLQAHgNAaAAIAIABQAFACAEADQgXAVgEAkIgEgJgAjaByIAAAAgAjjBtIAAAAgAjBBoIAAAAg");
	this.shape_3.setTransform(28.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,59.2,40);


(lib.static_mick_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgcAVQATgfAlgK");
	this.shape.setTransform(4.7,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AhYANQAEgCAEgCQACgBABgBQADgBADgBQANgFAPAAQAngEAmAEQALACAKAAQAZABARgDQAQgwAcgRQAFgEAIgBQAmgFAjANQAjAMgNAYQgEAJAFAJQAKAOgPAGQgXAIABAYQAAApgnACQgZABgWgNQgfgTgkAVQgIAEgHAFQgWAOgVASQgbAWgjAIQgHABgGABQgfAGggAJQgeACgfgkQgMgPgHgJQgCgCgBgBQgIgLgBAAQgSgegJgjQgKgjADgoQACgnAPghAiyihQBDgNACAqQABAqgCAFQAOBDAIAfQgLAHgKAK");
	this.shape_1.setTransform(25.4,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("Ai7CDIgTgYIgDgDIADADIgEgCIgCgDIADACIgJgLQgSgegJgjQgKgjADgoQACgnAPghQATggAmgKQBDgNACAqQABAqgCAFQAOBDAIAfIAIgEIADgCIAGgCQAOgFAOAAQAngEAmAEIAVACQAZABARgDQAQgwAcgRQAFgEAIgBQAmgFAjANQAjAMgNAYQgEAJAFAJQAKAOgPAGQgXAIABAYQAAApgnACQgZABgWgNQgfgTgkAVIgPAJQgWAOgVASQgbAWgjAIIgNACQgfAGggAJIgCAAQgdAAgegigAhtAeQAKgKALgHQgLAHgKAKg");
	this.shape_2.setTransform(25.4,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,52.8,35.1);


(lib.static_dust = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AABgaQABgFgHADQgGgCACAHQgIACAFAHQAAAAAAABQABAEAEgBQADADAEgCQAAgBABAAQAIAAgCgFQADgBAAgDQgBgBgBgCQABgIgIAEgAgnAJQgIACAFAHQAAAAAAABQABAEAEgBQADADAEgCQABgBABAAQAIAAgCgFQADgBAAgDQgBgBgBgCQABgIgIAEQABgFgIADQgGgCACAHgAgFAZQAAABABABQAAACADAAQACACADgBQAAgBABAAQAHAAgCgEQADgBgBgCQAAgBgBgCQAAgGgGAEQABgFgGACQgEgBACAGQgHABAEAFgAAfASQgGABAEAFQAAABAAAAQAAADAEgBQACADADgCQAAgBABAAQAGAAgCgEQADAAgBgCQAAgBgBgCQAAgFgFADQAAgEgFACQgFgBACAFg");
	this.shape.setTransform(5.1,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFD85").s().p("AgBAdQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgBgCQgEgFAHgBQgCgGAEABQAGgCgBAFQAGgEAAAGIABADQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBABQACAEgHAAIgBABIgDAAIgCgBgAAhAbQgBAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgBQgEgFAGgBQgCgFAFABQAFgCAAAEQAFgDAAAFIABADQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQACAEgGAAIgBABIgDABIgCgCgAglAWQgEABgBgEIAAgBQgFgHAIgCQgCgHAGACQAIgDgBAFQAIgEgBAIIACADQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAQACAFgIAAIgCABIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAgHgKQgEABgBgEIAAgBQgFgHAIgCQgCgHAGACQAHgDgBAFQAIgEgBAIIACADQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAQACAFgIAAIgBABIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_1.setTransform(5.1,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0.9,11,8.1);


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


(lib.slim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AL0HdQAAAAAAABQgHAEgKACALAHeQgDgdANgUQARgYAZATQAKAIABANQACAWgNAKQAaAQAEAbQABADAAACQASgKADgUQABgEAAgGQgBgQgFgRQgLglAjgBQAfgBgCAlQAAABAAABQAbAAgKAeQgBABAAACQAcAEgOAaQAAABAAAAQgBACgCADQgEAHgJAAANYHEQgCAXgRAHANoHlQgBABAAAAQgEAJgLAEAOGIpQAEAKgEAKQgBABAAABQgKAVgcAEQgBAAgBAAQgdADgZAPQgHAEABAGQAAABAAAAQABAUgGASQgHAZghAFQgWADgMgRQgJgOgSgMQgEgDgFgDQADgGADgHQAOgZASgQQASgQAWgOQAYgPgBgbQgDACgDABAN2IDQAdAIgKAZQgBADgCACQgCADgFABAnVmyQAHgKAEgLQANgdAaATQAWAPAaAPIgCgBQAAAAAAABQABAAABABQAWANATAMQAXAPAWAPQAWAQAWASQAWATAXASQAVAQAVARQAVAQAVAVQAQAPANAPQABABABABQATAVAVASQASARAUARQAVASAVAUQAUASAUAUQAEAEAEAFQAPAPALASQADAFACAEQABABABABQAHAXAPANQADACACACQAVAPARASQAMALALAOQACADAKAKQAVANASAJQAOAIANANQAIAIgGAOQgBAEgDADQAKAIAGANQABADABADQAFALABALQAXARAWAPQAVAQAVATQAVATAWASQAJAHAHAHQANALAMALQATATAUAVQAKAKAJAJQABAAAAABQALAKAKAIQADACACACQABABABAAQATAPASANQAWAOAbALIAAAAQAAgBAAgCQALgGAIABQAGAAAEAEAAZgJQgDAAgCAAQgcgDgRgaQgOgWgYgQQgYgRgYgSQgHgFgJgGQgYgPgTgTQgUgUgRgYQgPgWgSgWQgGgIgHgJQgLgPgLgPQgHgLgIgMQgBgBgBgCQgHgKgHgKQgPgZgXgTQgCgCgDgDQgSgOgSgPABqAtQgJgMgKgOQgFgIgGgIQgUgfgYgVQgXgVgZgaQgZgbgfgUQgagRgggWQgfgVgYgYQgZgYgbgWQgYgUgdgVABqAtQgJgIgKgGQgGgFgHgEQgDgDgEgCQgTgNgRgPQgEACgCAAQABARgDAPQgFAcgPAaQgEAJgGAHQgDAEgDADQgJAJg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");
	this.shape.setTransform(90.8,75.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AGWLSQgdgBgZgMIgBAAQgagNgYgPQgYgQgVgSQgWgUgWgPIghgaIgdgZIgPgNQgUgTgXgQQgWgPgZgMQgYgNgTgLIACgBIABgBQAHgDAGgBIAAAAIAAAAQAGABAFADIABABIAHAHIABAAQAFAEAHABQAOAEASgIQAKgFABgPIAHgFIABgBQAVANAUASQAUARAYAPIAxAeIAUAOIAbAUQAWATAWAOQAYARAYAKQAYAKAXAGQAdAHAbgJQAZgJAXgQIAZgQIAEgDIAGAGQAQARAZAOIANAIIgJAGQgTALgSANQgYARgZAKQgaAKgbAGIgCABQgVAEgWAAIgPgBgAKQI+QgUgNgTgPQAZgHAQgVIAWAPQANAJAMAJQgPAUgSAOIgQgLgALcHiIgFgDIgVgTQASgKALgLQAJARgHAWQgBADgCACIgCgBgAgOHGQABgFAEgHQAGgLAJgEIAIgFIATgIQAOgFAQAKQAIAGACAGQABAFgFAGQgLAMgJgCIgCABQgHAFgDAKIgHgHIgBgBQgFgDgGgBIAAAAIAAAAQgGABgHADIgBABIgCABIgBABIgLAJQgIgGAEgMgAg4GdIgngiIgqgnQgVgTgSgUIgngnQgTgUgXgQIgDgCIgIgHIgNgHIgpgeQgVgQgUgUIgngpQgUgUgTgSQgVgUgDgeQgCgeAagQIAAAAIAIgEQAMAPALAQIADAEIACACQAPAPAUAOQAWARASASQAUAWASAQIAcAdIAMANQASAVAXASQAXATAUAUIAnAmQAUAUASAUQATAUARAWQASAYAXATQATARAUAIQgFAGgGAEIgIAFQgJAEgGALQgEAHgBAFQgUgWgWgTgAAOGmIAAAAgApmmzIgmgZQgRgMgPgNQgOgNgSgLQgNgHgHgLIgDgEIADAAQANAAAKgBQgEgFgGgKQARgLgEgSQAMABAHgEIgIgHQgIgIgEgHQARACAOgJQAAgHAEgGQAJAFAEACIgBgLIgHgnQASAHASACIAAgLQAAgQgGgMIgDgEIgBgCIAAAAIAAAAIABAAIADAAIAHABQAbAIgCgfQAWAQARAXQAQAVAFAcQgRgDgRAQQgTARgKAcQgHAQgDARIAAABIgEASQgCASARALQAZAOASANIAHAGQANANgLAOQgQgVggAJIgBANg");
	this.shape_1.setTransform(74,72.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABBA9QgQABgGgJQgFgJAEgTQAEgRALAKQASAOAEAfQgHgDgHABgAhFgDQgYgWAjgIIAFAGQAEAJgBALIgBADQgCACgHAAIgJgBgAgogkQgRgVAggFIAEANIgCAKQgCADgEABIgFABQgEAAgCgCg");
	this.shape_2.setTransform(30.5,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA7QgGgCgGgEQgPgLgEgXQgDgTAHgHQAHgHAQACQAQADANAJQgFgeAGgcQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIADgBIAGABQAYAJAGAeIABABQggAFARAVQADADAHgCQAFgBABgDIAEADQgKANgEAQIgRgBQABgLgEgJIgFgFIgEgEIgFgEIAFAEIAEAEQgiAIAYAWQANABAFgCIgCAFQgGAVgRAAQgHAAgKgEgAAOAIIAAAAg");
	this.shape_3.setTransform(23.1,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AAMDTQgNgCgMgHIgugaIAAAAIAAgBIAAAAQADgLgDgLQgCgJgFgFIgggcQgLgJgNgBQgMgBgNADIgHABIgCAAQgOgSgRgRIgJgKIgEgDIgCgOQgIghgUgdQAggBAZgJQAbgJAagOQAZgNAXgQQALgIAKgJIAFgHQAHgHAFgJQAPgaAFgcQACgPAAgSIAFgCQAQAQATANIAIAFIANAJIATAOIAGAFIAGAFQAXATAVAVQASATAXAOIACABQAYAQAYAMQAHAEAJACQgDAEgEABIgEACIgSAGIgYAJQgYAKgMASQgEAFgBAGIgBABIAAAAIAAAAQAQAVATAQIgJgCIgQgCQgLgBgKADQgfAKgZARQgLAIgJAJQgHAIgFAIQgHAMgEANIgHAgIgBADIABAGIABAMQABANgHAAIgCgBgAAxg6IADADQAUAWAXASQAYASAQAWIABABIgBgBQgQgWgYgSQgXgSgUgWIgDgDIgignIAiAng");
	this.shape_4.setTransform(94.6,95.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AFQILQgXgGgYgKQgYgKgYgRQgWgOgWgSIgbgVIgUgNIgxgfQgYgPgUgRQgUgSgVgNIAFgEIACgCIARgPIADgCQAEgBAGAEQAFgHACgGIABgCIAAABIAuAaQAMAGAOADQAJABgBgNIgBgNIgBgGIABgDIAHggQAEgNAHgMIAMALQAQANARALQAaARAVASQAWAVAWAQIAvAgQAWAOAXATQAWARASAVIALANIACACIAZAZIgYAQQgXARgZAIQgPAFgQAAQgMAAgNgDgAISGmIgFgEIgrgjIgogiQgXgSgUgVQgSgUgWgRQgWgQgVgRIABgBIADgEQAFgHABgIIAsAeIAtAfIACACIAtAeQAYAQAUARQAUASAWAPIAYARQgPAUgZAHIgCgBgAJsFQIgTgTIgngnIgZgXIgQgOIgrglQgVgTgVgPIgtghQgCgLgEgLIgCgFQAaAGAaALQAcALARAPQAUASAUAVIAnAnQAUAUAYASQAUAPARATQAGAGADAHQgKALgSAKIgBgBgAhjEIQgXgTgSgXQgRgWgTgVQgSgUgUgUIgngmQgUgUgXgSQgXgTgSgVIgMgNIgcgbQgSgRgUgVQgSgTgWgQQgUgOgPgPIgDgDIgCgEQgLgRgMgPIAHgFIgHAFIgFgGQgRgUgXgSQgRgNgNgPIgEgEQgRgTgNgVQgQgYgFgbQgEggAXgSIAggbIAJgHQAOgOAUgKIAHgEQALAJANAIIAAABQgFAIgIAIQgdAEgQAZQgQAZAIAbQAJAcAVARIACACIAGAFQANAMALAQQAQAYAUAUIApApQATAVASAWIAjAsQATAWAPAWIAOATIAKAHIAhAcIAfAdIAMALQAWATASAVIALALQANAOANANIACACIASAQQAWAUASAUQARASAWAUIABABQAXAVgOAWIgCADQgTgIgUgRgAhXCdIgRgQIgdgcIAAAAIAAgBIgLgKIgogoQgRgQgRgOIgJgGIgHgIIgRgRQgRgTgRgYIgfgxQgPgYgRgWQgQgUgQgaIgTgfIAFgDIAwAgIAuAgQAXAQAUAWQATAVATAXQARAVAPAYIAhAuQAQAWAPAXIAOAYIAAAAQAUAdAIAhIACAOIgIgIgACqg7IgNgJIgIgFQgTgNgRgPIgCgDQgDACAAADIgFgBQgdgDgRgaQgOgWgYgQQgXgQgYgSIgQgLQgYgPgTgUQgUgTgRgZQgPgWgSgWIgNgRIgWgdIgPgXQAcAUAZAUQAbAWAZAZQAYAXAfAWIA5AmQAfAUAZAbQAaAbAXAUQAYAWAUAfIALARIATAZIgTgOgAmbn4QgHgGgDgGQAQgHATgCQgJANgMALIgEgDg");
	this.shape_5.setTransform(82.5,84.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AIjLGQgdgFABghQAAgKgIgIQgKgLgKgIQgKgIgKgFQgZgOgWgQQgRgNgRgKIgNgIQgZgNgQgSIgGgGQgNgNgRgJIgCgCIgLgNQgSgVgWgRQgXgTgWgOIgvggQgWgQgWgVQgVgSgagRQgRgLgQgNIgMgLQAFgIAHgHQAJgKALgHQAZgRAfgKQAKgEALABIAQADIAKADIgBgBQAXAIAJAWQACAGAAAGIAAADIAAACIAAgCIAAgDQAAgGgCgGQgJgWgXgIQgTgQgQgVIAAgBIABAAQABgHAEgFQAMgSAYgKIAYgJIASgGIAEgCQAEgCADgDQgJgDgHgEQgYgLgYgQIgCgCQgXgOgSgTQgVgVgXgTIgGgFIgGgFIgTgYIgLgRQgUgfgXgWQgXgUgagbQgZgbgfgUIg6gmQgfgWgYgXQgZgZgbgWQgZgUgcgUIAPAXIAWAdIANARQASAWAPAWQARAZAUATQATAUAYAPIAQALQAYASAYAQQAYAQAOAWQARAaAdADIAFABQAAARgCAQQgFAbgPAZQgFAJgHAIIgFAGQgKAJgLAIQgXAQgZAOQgaANgbAKQgZAJggABIAAAAIgOgYQgPgXgQgWIghgvQgPgXgRgVQgTgXgTgVQgUgWgXgQIguggIgwggIgFADIgKgSQgOgYgRgXQgSgYgLgbQALAbASAYQARAXAOAYIAKASIATAfQAQAaAQAUQARAWAPAYIAfAwQARAYARAUIARARIAHAIIAJAGQARAOARAQIAoAoIALAKIAAABIAAAAIAdAcIARAQIAIAIIAEAEIAJAJQARARAOATIACAAIAHgCQANgDAMACQANABALAJIAgAcQAFAEACAKQADALgDAKIAAABIAAAAIgBACQgCAHgFAGQgGgEgEABIAAgEQAAgQgRgJQARAJAAAQIAAAEIgDACIgRAPIABgIQAAgXgVgOQAVAOAAAXIgBAIIgCACIgFAEIgBABIgHAFQgBAPgKAFQgSAIgPgEQgGgBgFgEIgBAAQACgKAIgFIACgBQAJACALgMQAFgGgBgFQgCgGgIgGQgQgKgPAFIgIgCIACgDQAOgWgXgVIgBgBQgWgUgRgSQgSgUgWgUIgSgQIgCgCQgOgNgMgOIgLgLQgSgVgWgTIgMgLIgfgdIghgcIgKgIIgOgTQgPgVgTgWIgjgsQgSgWgTgVIgpgpQgUgUgQgYQgLgPgNgNIgGgFIgCgCQgVgRgJgcQgIgbAQgZQAQgZAdgEQAIgIAFgIIAAgBQgNgIgLgJQgKgIgIgJQgUgTgSgVQgSgVgagJIADgJIgDAJIAAAAQgGAKgOgEQgbgKAAgdIACgNQAggIAQAUQALgNgNgOIgHgGQgSgMgZgPQgRgLACgSIADgSIAAgBQAEgQAHgRQAKgbATgSQARgQARADQAHACAIAFIAKAHIAZATQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgHAcAFAfQgOgKgQgDQgQgDgHAIQgHAIADATQAEAWAQAMQAFAEAHACQAgANAJgeIABgFIAAgEIARABQAFgQAJgNIAGgGIALgJQAagTAEAgIAAACIAAADQAUAOARAVIAGAGQAPASARAOQAbAVgYAXQgLALAFAKQADAGAHAGIAEADQAMgLAJgNQAGgJAFgLQANgeAaATQAWAPAaAQIgDgCIABABIACABIApAZIAtAfQAWAPAWASIAtAlIAqAhQAVARAVAUIAdAeIACADQATAUAVATIAmAhQAWATAVATIAnAmIAIAJQAOAPAMASIAFAJIABADQAIAXAPANIAFAFQAVANARASQAMAMALANIAMANQAVANASAKQAOAHANANQAIAIgGAPQgBADgEADQALAJAGANIACAFQAEALACALIAtAhQAVAPAVATIArAlIAQAOIAZAXIAnAnIATATIABABIAVATIAFADIABABQATAPATANQAWAPAbAKIAAAAIAAgCQALgHAIABQAGAAAEAFQgEgFgGAAQAGgjAaARIACACQAGAEACAHQgCgHgGgEIgCgCQgCgdANgTQARgZAZATQAKAIABAOQACAVgNAKIgBABQgGAEgKACQAKgCAGgEIABgBQAaAQAEAcIABAEQASgKADgTIABgKQgBgRgFgRQgLglAjgBQAfAAgCAlIAAABQAbAAgKAeIgCADQAcAEgNAbIAAAAIgDAFIAAABQgEAGgIAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAQAIAAAEgGIAAgBIADgFIAAAAQAcAHgJAaIgDAEQgDADgEABQAEgBADgDQAEAKgEALIgBACQgLAUgcAEIgBAAQgdAEgZAOQgHAFABAFIAAABQAAAUgFATQgHAZghAEQgWAEgMgSQgKgOgSgMIgJgFIAHgOQAOgZASgPQASgQAWgPQAXgOAAgZIAAgDIgGADIAGgDIAAADQAAAZgXAOQgWAPgSAQQgSAPgOAZIgHAOIgDAHQgEAPgCAQQgDAdgUAUQgQAQgWAAIgMgBgADcFAQAWARASAUQAUAVAXASIAoAiIArAjIAFAEIACABQASAPAVANIAQALIAfAUQATAMAXANQAaANAbgEQABABAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAYgEAFgdIAAgKQAAgKgDgKQgFgUgCgUQACAUAFAUQADAKAAAKIAAAKQgFAdgYAEIgBAAIgCAAIgFgEQgRgQgVgOIgCgCQgOgVgUgSIgOgNQgMgJgNgIIgXgPIgYgRQgWgPgUgSQgUgRgYgQIgtgeIgCgCIgtgfIgsgeQgBAIgFAHIgDAEIgBABIgEALIAEgLQAVARAWAQgAMvG6QgFAKgKAEQAKgEAFgKIAAgBIAAABgAMNG2QARgHACgXQgCAXgRAHgAD9DKIAAgFIgBgNIABANIAAAFgADgCFIADACIgDgCQgIgGgKgCQAKACAIAGgAhsAZIAIgBIABgBIAAgCQAAgLAFgJQgFAJAAALIAAACIgBABIgIABIgBAAIAAAAIgCAAIAAAAIAAAAIACAAIAAAAIABAAgAp/ljQgKgKgNgHQANAHAKAKgAmVmtIAFAEQAXAUAPAYIANAUIADAEIgDgEIgNgUQgPgYgXgUIgFgEIgkgeIAkAegAncmfQgVAWgWARQAWgRAVgWQAJgKAFgIQgFAIgJAKgAoYm7QgEgGgGgFQAGAFAEAGgAqKnTQADgFAAgHIAAgGIgGgZQgFgOgGgLQAGALAFAOIAGAZIAAAGQAAAHgDAFgApDn+QgEgggSgOQgLgJgEAQQgFATAGAJQAGAJAQgBQAHAAAHADIAAAAgAp6pVQgKAVgYABQAYgBAKgVQACgFAAgFQAAAFgCAFgAs8pdQgFgBAAgFIAAgEQALghAbgCQgbACgLAhIAAAEQAAAFAFABgAr3qfQAEgSAHgHQgHAHgEASgAhfFYIAAAAg");
	this.shape_6.setTransform(96.4,79.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,183.5,153);


(lib.sam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AFykfQgKgNgMgLQgPgMgMgNQgOgOgKgPQgIgLgLgKQgQgJgTgFQgRgFgSgGQgRgGgRgEQgRgFgTAAQgTAAgTgBQgSgBgTAAQgTgBgTgBQgTAAgQACQgSADgQADQgTAEgSAFQgTAGgTAFQgSAEgRAIQgSAIgPAIQgRAJgOAJQgPAKgOAKQgQAKgQALQgQALgNANQgNANgMAPQgMAPgLAQQgKAOgKAPQgLAPgKAQQgLAPgFARQgEAQgEAPQAAABAAACQgFARgEASQgEATgGASQgGASgCATQgCASgBASQgBAUACATQADATAGARQAFATAGASQAFASAHARQAHARAJAOQAHAPANAMQAMALANANQANAOAOAOQAOAOAOAMQANANAOANQANAMAPAKQAPAJAQAGQARAGARAFQASAGARAGQASAHAQAEQARAFASACQAUACATABQATACATAAQASAAATgCQASgCARgCQATgDASgCQAJgBAJgCQASgFATgFQASgFARgHQAQgHARgKQAQgLAPgMQAPgMAOgMQAPgOALgLQAGgHAFgHQABgCACgBQAJgOAKgNQALgPAIgOQAKgPALgRQAKgPAJgRQAJgQAIgSQAHgRAGgQQAGgSAEgTQADgQAAgRQAAgUgDgSQgCgTgCgTQgCgSAAgTQABgUgCgTQgCgSgDgTQgBgUgGgSQgGgSgLgPQgKgQgMgPQgLgOgKgOgADNCWQABgEACgDQAEgIADgIQACgEACgFQADgJACgJQACgKACgIQACgJACgJQABgIADgKQADgJAAgJQABgKACgKQADgIABgJQABgJABgJIAAgBQAAgCAAgBQAAgIgCgHQgDgJgDgJQgEgJgEgIQgEgJgDgJQgEgJgFgIQgFgJgEgIQgFgHgDgIQgEgIgFgIQgFgHgHgHQgDgDgDgDQgGgHgGgHQgFgGgFgGQgCgBgBgBQgEgFgEgGQgFgIgHgFQgIgFgIgEQgIgEgJgDQgIgDgJgDQgIgDgJgCQgJgBgJgBQgKgBgJgDQgJgDgJgCQgCAAgCAAQAEADAFABQADABAEABQACABADABQACACADABQAIAFAGAGQAIAGAIAGQAMAKAFAIQgDgBgEgCQgIgDgIgEQgTgIgSABQADADADADQAJAJAFAEQgHgGgHgDQgHgEgHgDQgBAKgBAKQgBAJgCAJQAAACAAABQgBAIgDAHQgBAEgCADQgEgEgGgFQgGgHgIgEAiIjJQAAAAABgBQAFgIAFgHQAFgIAGgHIAAAAQAGgFAHgDQAIgFAKACQAJACAJACQAJABAJACQAHABAFACQgDgJgIgFQAMgCANAEQAHACAIADQAGACAEACQABAAABAAAABkSQgHgBgHAAQgJAAgJACQgKACgJADQgJADgJACQgJACgJACQgJACgJAEQgIADgIAFQgIAFgGAFQgGAGgHAGQgCABgBABQgGAEgFAEQgBAAAAAAQgCABgBABQgCABgBABQgDABgEABQgFACgEADQgGAFgFAGIgBABQgCACgDACQgBABAAAAQADAJAAALQAAAIgCAJQgKAogWAZQAAAAAAABQAAACAAACQAEgBAEgBAgYjHQAIgFAIAGQADACAGABAgFgkQAEgIACgGQADgHAFgHQAFgHAIgHQAHgGAKgDQAIgDAJABQAJAAAIAFQAGAEAHAHQAHAHAEAGQACABABACQAFgIAGgHQAGgGAIgGQAHgHAIgCQAJgCAKAAQAJABAGAHQACACADACQAGAHADAIQAEAIADAJQACAJABAJQACAJAAAKQABAKgBAJQgCAJgBAKQgBAHAAAIQgCAHAAAJQABAJAAAKQAAAJAAAKQAAAKAAAKQgBAKABAJQAAAFACAEQAEADAEAGAgGitQABAAAAABQABAAAAABQACADACABQgCAGgEAEQgGAGgIACQgBAAAAABQgLADgLgBQgEAAgCgCAgUiVQgBADABACQAAAKgEAHQgDAIgFAHQgBACgCABIAAABQAAAAgBABQgEAFgFADQgHAFgJADQgIADgIACQgJADgKABQgKAAgJABQgCAAgDABQAEAHAGAHQAGAHAHAFQAGAGAIAFQAIAFAHAFQACABABABQACAAACAAQACAAADAAQAJgBAJgCQAJgDAJgCQAGgBAHADQABAAABABQABAAAAABQACABACACQAAAAgBABQgGAFgIADQgHADgJAEQgIAEgJACQgKADgIADQgJAEgGAFQAJABAKgBQAJgBAJgDQAJgBAJgDQAHgDAGgDQABgBABAAQAKgGAFAGQADACgDAEQgEAGgIAEQgBAAgBABQgHACgIACQgHACgIACQgCAAgBABQgIABgIADQgBAAgBABQgMAFAMABQABAAACAAQACAAACAAQAKgBAKgBQAJAAAHgDQAFgCAFAAQABAAABAAQAEAAgBAFQAAADgBADQgDAFgGACQgJAEgJACQgJACgJgBQgCAAgBAAQgCAAgBABQgGABgCAEQgBACAAADQABAGgBAEQgBACgBACQgGAEgGADQgJADgHAGQgIAEgGAHQgFAEgEADAAYB+QgCgHgBgGQgCgJgBgKQgCgJgBgKQgBgJAAgJQgBgKAAgJABuA4QABgGABgFQAAgBAAgBQACgJABgJQACgKAAgJQAAgIgCgJQgBgJgDgJQgCgJgDgHQgDgGgDgGACYCiQgEgGgFgGQgEgHgFgJQgFgIgEgJQgEgJgDgJQgDgIgBgJQgCgJgBgKQgBgDAAgEQAAACgBACQgCAKAAAJQgBAFgBAFQAAABAAAAQAAAJABAJQABAHABAIQACAJAAAKQAAAKgCAKQgBAJgBAKQgCAKABAJQABAEABAEQAJAHAIgGQAIgFAGgHQAFgHAEgJQAEgJABgJQAAAAAAgBgAi5ipQgDgIADgHQAEgIAHgHQAEgEAEgBQAEgBAFACQACABABABQABABAAABQADAEgCAHAiljTQgCABgBAAQgDABgEACAiMjIIAEgBQgBADgCACQgBgCAAgCgAiWjdQADAEACAFQADAFACAHAhZjBQAGgIAKgBQAKgBAJACQADAAAEABAiZjHIANgBAkagbQAAgBABgCQACgFACgGQAEgHADgHQADgJADgJQADgIADgIQADgJAEgIQADgJAEgJQADgIAEgJQAFgJAFgHQAFgHAGgGQABgBAAAAQABgBABgBQAFgGAGgGAjphOIgBAAQgIADgGAGQgGAGgHAHQgGAHgGAIQgFAGgEAIQAAAAAAABQgBAAAAABQABgBAAgBAkbgZQAAABgBABQgDAEgDAFQgEAIgGAHQgGAIgFAIQgEAIgEAIQgBACAAABQgFAIgDAKQgCAJgCAJQgDAJgBAJQgBAHAAAHQAAABABACQABAHACAHQABADACACQAHANAHANQAFAHAFAHQAFAHAHAFQAHAFALACQAIABAIAAQAJAAAKABQAJAAAJgDQAFgDAFgCQADgCADgCQAHgFAIgEQAIgFAGgGQAHgHAGgGQAHgHAIgFQAHgGAHgGQAGgGAIgEQACgCACgBQAAAAABgBQAQAgABAIQABAJAFAHQAFAJAGAFQAHAHAJAEQAJAEAKACQAJACAKAAQAJABAJgBQAIAAAFgDQAAAAABgBQAAABAAABQgDAIgGAGQgHAGgFAIQgFAIgGAIQgFAHgFAHQgFAJgHAFQgDADgEgBQgBAAgBAAQgHgBgIgCQgIgDgJgCQgJgCgJgDQgJgCgJgEQgJgEgIgFQgIgFgIgGQgIgFgHgFQgIgFgGgGQgIgGgGgHQgFgGgEgHAhgh2QAJAAAJACQAJABAKABQAIAAAFgDAh4hQQgGADgDAHQgEAIgBAKAi5ipQAAABABACQAEAIAHAFQAIAEAKgBQAFgBAEgEAjHilQAIgCAGgCAhBgfQgBgBgCAAQgEAAgEAAQgJgCgGAEQgJAFgCAJQgDAIgCAIQgCAJgCAJQgCAJgBAKQgBAIgBAJQAAABAAABQgBAAgCABQgJABgKABQgJACgIACQgJADgJADQgJACgIADQgJADgGAEQgHAFgIAFQgJAFgIAEQgIAEgJACQgJACgKgCQACgFAEgEQAFgIAFgHQAFgIADgIQAEgHADgIQADgIAAgJQABgIgBgJQgBgIABgJAg6EJQAAAAABABQAIABAIAAQAIAAAJAAQAKAAAJAAQAIAAAJgBQAKAAAJAAQAKABAJgBQAFAAAFgBQAEgBAFgBQAJgDAJgCQAHgCAGgCQAGgFAJgDQAIgEAHgGQAHgGAGgFQAGgHAGgGQAHgGAGgHQAGgHAEgGQAFgHAHgGQAFgGAFgJQACgEADgEADFCNQgDgCgCgBQgJgFgJADQgKADgFAHQgFAHgCAJAACC+QAEgJADgHQAEgIADgIQAEgJADgKQABgGAAgHAA8EJQgHgDgEgIQgEgIgCgJQgBgJAAgJIAAAAQAAgGAAgGQAAgKAAgJQAAgDAAgDQgBgKgDgJQgDgJgDgIQgDgIgDgIQgBgCgBgC");
	this.shape.setTransform(45.2,43.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AAuBQIgBAAIgPgDIgRgFIgSgFQgJgCgIgEQgJgEgIgFIgRgLIgPgKIgOgLQgHgGgHgHQgFgGgEgGIAGgEIAPgJQAIgFAHgGIANgNIAOgMIAOgMQAHgGAHgEIAEgDIABgBQAPAhABAHQACAJAEAHQAFAJAHAFQAHAHAJADQAIAEAKACQAJACAKAAIATAAQAHAAAGgDIACgBIgBACQgDAIgGAGQgIAGgFAIIgKAQIgKAOQgGAJgGAFQgDADgDAAIgCgBg");
	this.shape_1.setTransform(34.7,61.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3D28D").s().p("AB0D2QgFgIgBgJIgBgSIAAAAIAAgMIAAgTIAAgGQgBgKgEgJIgFgRIgGgQIgCgEIgDgNIgEgTIgCgTIgBgSIgBgTIABATIABASIACATIAEATIADANQAAAHgBAGQgDAKgEAJIgIAQIgHAQQgFADgIAAIgSAAQgLAAgIgCQgKgCgIgEQgJgEgHgHQgGgFgFgJQgFgHgBgJQgCgHgQggIAAAAIgEADQgIAEgGAGIgPAMIgOAMIgNANQgHAGgHAFIgPAJIgGAEIgKAFQgJADgKAAIgTgBIgQgBQgKgCgIgFQgGgFgFgHIgKgOIgPgaIgCgFIgDgOIgBgDQgBgHACgHIADgSIAFgSQACgKAGgIIABgDIAIgQIALgPIAKgQIAGgJIABgCIABgBIAAgBIAJgOIAMgPIANgNQAGgGAIgDIAAAAIAAgEIAAgBQAXgZAKgoQACgJAAgIIAOgDQgDgIADgIQAEgIAHgHQAEgEAEgBQAEgBAFACIADADIABABIANgBIABAEIADgEIABgCIAJgPQAFgIAGgGIAAgBIAOgIQAIgFAKACIARAEIASADIAMADQgDgJgIgFQALgCAOAEIAOAFIAMAEIABAAIgBAUIgDASIgBADIgKgDIAAgBQgEgCgDAAIgBAAIAAAAQgEAAgDABIAAABIgBAAIABAAIAAgBQADgBAEAAIAAAAIABAAQADAAAEACIAAABIAKADQgBAIgDAHIgDAHIgKgJQgGgHgIgEQAIAEAGAHIAKAJIABABIABABIAEAEQgCAGgFAEQgGAHgIACIAAAAQgIACgJAAIgGAAQgDAAgCgCQACACADAAIAGAAQAJAAAIgCIAAAAIABAEQgBAKgDAHQgDAIgFAHIgDAEIAAAAIgBABIgJAIQgHAFgJADIgPAFQgJADgKABIgTABIgFABQAEAIAGAGQAGAHAGAFIAPALIAPAKIAAACIgIgBIAAAAIgDAAIgBgBIgBAAIAAAAIgBAAQgFABgEABIAAABQgKAFgBAJIgFARIgEARIgEATIgBARIgBACIgCABIgTACIgRAEIgSAGIgRAFQgJADgGAEIgPAKIgRAJQgIAEgJACIgEAAIgGABIgBAAIAAAAIgIgBIAFgJIALgPQAFgIADgIIAGgPQAEgIAAgJIAAgGIAAgLIgBgIIABgIIgBAIIABAIIAAALIAAAGQAAAJgEAIIgGAPQgDAIgFAIIgLAPIgFAJIAIABIAAAAIABAAIAGgBIAEAAQAJgCAIgEIARgJIAPgKQAGgEAJgDIARgFIASgGIARgEIATgCIACgBIABgCIABgRIAEgTIAEgRIAFgRQABgJAKgFIAAgBQAEgBAFgBIABAAIAAAAIABAAIABABIADAAIAAAAIAIABIACAAIADAAIAGAAQAJgBAJgCQAJgDAJgCQAGgBAGADIADABIABABIAEAEIgBAAQgGAFgJADIgPAHQgIAEgJACIgSAGQgIAEgGAGQAJABAJgBIARgEIASgFIAOgGIACgBIABgBQAEgCADAAIAAAAIABAAQADAAAEADQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBADQgFAHgIAEIgCABIgQADIgPAEIgDABIgQAEIgBABQgFADAAABQAAACAFAAIACAAIAFAAIATgCQAKAAAHgDIAKgCIACAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABIAAABIgCAGQgCAFgGACIgSAGIgBAAIgNABIgBAAIAAAAIgDAAIAAAAIgEAAIgDABQgFABgCAEIgBADIAAACIAAAFIAAAFIgCAEQgFAEgHADQgIADgHAGQgIAEgGAHIgKAIIAKgIQAGgHAIgEQAHgGAIgDQAHgDAFgEIACgEIAAgFIAAgFIAAgCIABgDQACgEAFgBIADgBIAEAAIAAAAIADAAIAAAAIABAAIANgBIABAAIASgGQAGgCACgFIACgGIAAgBQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgCAAIgKACQgHADgKAAIgTACIgFAAIgCAAQgFAAAAgCQAAgBAFgDIABgBIAQgEIADgBIAPgEIAQgDIACgBQAIgEAFgHIABgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQgEgDgDAAIgBAAIAAAAQgDAAgEACIgBABIgCABIgOAGIgSAFIgRAEQgJABgJgBQAGgGAIgEIASgGQAJgCAIgEIAPgHQAJgDAGgFIABAAIgEgEIgBgBIAHgOIAHgOQAGgHAIgHQAHgGAKgDQAHgDAKABQAJAAAIAFQAGAEAHAHIALANIACAEQAGgJAGgHIAOgMQAHgHAIgCQAIgCALAAQAJABAGAHIAFAEQAGAHADAIQAEAIADAJIADASIACATQABAKgCAKIgCASIgBAPQgCAHAAAJIABATIAAATIAAAUQgBAKABAJIABAJQAFAEADAFIgEAIQgFAJgGAGQgGAGgFAHIgKANIgNANIgMANIgNALQgHAGgIAEQgKADgFAFIgNAEIgSAFIgJACQgIgDgDgIgACwA0IgCATIgCAKIAAABQAAAJABAJIACAPQACAJgBAKQABAKgCAKIgCATQgCAKABAJIACAIQAIAHAJgGQAIgFAGgHQAFgHAEgJQAEgJABgJIAAAAQACgJAFgIQAFgHAKgDIAAAAIAAAAIAHgBIAAAAIAAAAQAFAAAFADIABAAIAEADIgEgDIgBAAQgFgDgFAAIAAAAIAAAAIgHABIAAAAIAAAAQgKADgFAHQgFAIgCAJIgJgNIgJgQIgJgRIgIgSIgDgRIgDgTIgBgHIgBAEgAC2ARIgDASIAAACIgCALIACgLIAAgCIADgSIABgSIgBgSQgBgJgDgJIgFgQIgHgLIAHALIAFAQQADAJABAJIABASIgBASgAg+hOQgFAIgBAKQABgKAFgIQACgHAHgDQgHADgCAHgAinhWIAJgCIgJACgAAJh6QAFAAAFgCIABgBIgBABQgFACgFAAIgBAAIAAAAIAAAAIgBAAIgTgCQgIgCgKAAQAKAAAIACIATACIABAAIAAAAIAAAAIABAAgAhdieIAFAAQAFgBAEgEQgEAEgFABIgFAAIAAAAIgBAAQgGAAgFgCIgBgBQgHgFgEgIIgBgCIABACQAEAIAHAFIABABQAFACAGAAIABAAIAAAAgAhWjEIACgFQAAgEgCgCQACACAAAEIgCAFgAgGjSQgLABgFAIQAFgIALgBIAAAAIAGAAIAAAAIAAAAIAKAAIABABIABAAIAHABIgHgBIgBAAIgBgBIgKAAIAAAAIAAAAIgGAAIAAAAg");
	this.shape_2.setTransform(38.5,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiKAjIABgBIAGgEIABgBIAKgLIAKgFIAGgCIADgBIADgCIABgBIALgHIAGAIIAEAMIgEgMIgGgIIADgCIAOgLIAOgLIAQgIIASgGIARgEIASgFIASgFIASgCIAPABIAKAFIAGABIAFACIAFAEQAIAEAHAGIAPAMQANAKAFAIIgHgCIgQgIQgTgIgSABIAFAGIAOAMQgHgFgGgDIgPgGIgBgBIgMgEIgPgFQgNgEgLACQAIAFADAJIgMgDIgRgDIgTgDQgKgDgHAFIgOAIIAAABQgGAGgFAHIgKAPIAAACIgFAAIAFAAIgEAEIgBgEIgMABIgBgBIgEgDQgEgCgEABQgEABgEAEQgHAHgEAIQgDAIACAIIgNADQAAgKgEgKg");
	this.shape_3.setTransform(38.8,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgnGtIgngDQgSgCgRgFQgQgEgSgHIgjgMIgigLQgQgGgPgJQgPgKgNgMIgbgaIgcgaIgbgcIgZgYQgNgMgHgPQgJgOgHgRQgHgRgFgSIgLglQgGgRgDgTQgCgTABgUIADgkQACgTAGgSIAKglIAJgjIAAgDIAIgfQAFgRALgPIAVgfIAUgdQALgQAMgPQAMgPANgNQANgNAQgLIAggVIAdgUQAOgJARgJIAhgQQARgIASgEIAmgLIAlgJIAigGQAQgCATAAIAmACIAlABIAmABQATAAARAFIAiAKIAjALQATAFAQAJQALAKAIALQAKAPAOAOQAMANAPAMQAMALAKANIAVAcIAWAfQALAPAGASQAGASABAUIAFAlQACATgBAUQAAATACASIAEAmQADASAAAUQAAARgDAQQgEATgGASIgNAhQgIASgJAQQgJARgKAPIgVAgQgIAOgLAPIgTAbIgDADQgFAHgGAHIgaAZIgdAYQgPAMgQALQgRAKgQAHQgRAHgSAFIglAKIgSADIglAFIgjAEQgTACgSAAIgmgCgAjMDAQAGAHAIAGIAOALIAPAKIAQALQAIAFAJAEQAJAEAJACIASAFIARAFIAPADIACAAIABABIAQABIARAAIATAAIARgBIATAAIATAAIAKgBIAJgCIASgFIANgEQAGgFAJgDQAIgEAHgGIANgLIAMgNIANgNIAKgNQAFgHAHgGQAFgGAFgJIAFgIIADgHIAHgQIAEgJIAFgSIAEgSIAEgSIAEgSQADgJAAgJQABgKACgKIAEgRIACgSIAAgBIAAgDQAAgIgCgHIgGgSIgIgRIgHgSIgJgRIgJgRIgIgPIgJgQQgFgHgHgHIgGgGIgMgOIgKgMIgDgCIgIgLQgFgIgHgFIgQgJIgRgHIgRgGQgIgDgJgCIgSgCQgKgBgJgDQgJgDgJgCIgEAAIgOgBIgSACIgTAFIgSAFIgSAEIgSAGIgQAIIgOAKIgNAMIgDACIgLAIIgBAAIgDACIgDABIgHADIgJAFIgLALIgBABIgFAEIgBABIgLAMIgCACIgBABIgLANIgKAQIgHARIgHASIgHARIgGAQIgGASIgHAOIgEALIgBADIgBACIgBACIgGAJIgKAPIgLAQIgIAQIgBADQgFAIgDAKIgEASIgEASQgBAHAAAHIABADIADAOIADAFIAOAaIAKAOQAFAHAHAFQAHAFALACIAQABIATABQAJAAAJgDIAKgFQAEAHAFAGg");
	this.shape_4.setTransform(45.2,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,92.5,88.2);


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


(lib.sentence2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAIQgEgDAAgFQAAgDAEgEQAEgEAFAAQAGAAAEADQAEAEAAAEQAAAFgEADQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(242.9,23.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20).to({_off:false},0).wait(15));

	// Layer 4
	this.instance = new lib.wordbuffy2();
	this.instance.parent = this;
	this.instance.setTransform(216.7,17.4,1,1,0,0,0,15.8,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({alpha:1},5).wait(15));

	// Layer 3
	this.instance_1 = new lib.wordrace();
	this.instance_1.parent = this;
	this.instance_1.setTransform(169.1,17.4,1,1,0,0,0,17.8,14.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({alpha:1},5).wait(20));

	// Layer 2
	this.instance_2 = new lib.wordgirls();
	this.instance_2.parent = this;
	this.instance_2.setTransform(126.6,16.6,1,1,0,0,0,19.6,14.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({alpha:1},5).wait(25));

	// Layer 1
	this.instance_3 = new lib.wordcaptialThe();
	this.instance_3.parent = this;
	this.instance_3.setTransform(86.1,16.6,1,1,0,0,0,12.5,14.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},5).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.5,2,37.1,29.1);


(lib.Diagramstatement2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape.setTransform(347.7,-16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAEABIAEAAQADgCADAAQAHAAABAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgDgDIgEgBQgIAAgIAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDADAAQADAAACADQADACAAAEQAAADgEADQgQANgPAAQgNAAgKgJg");
	this.shape_1.setTransform(339.9,-16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgaAtQgHgGAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGABAAAGQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgCQAEAAACADQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_2.setTransform(332.5,-16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgZApQgMgJAAgLQAAgKAJAAQAIABAAAIQAAAEAGAEQAGAEAFAAQACAAABgHIAAgTIABggIAAgEIgBAAIgGAAIgHAAQgEAAgCgDQgDgCAAgDQAAgIALAAIAGAAIAFAAIALAAIALgBQAQAAAAAJQAAADgDACQgCADgEAAIgDAAIgEAAIgEAAIAAAEQAAApgGATQgFAOgKAAQgLAAgLgHg");
	this.shape_3.setTransform(324.7,-16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgcAsQgDgDAAgDIAAg9IAAgIIAAgHQABgGAKgCIAOAAQALgBAKAIQAMAIAAAMQAAAHgDAFQgCADgFAEQAGACAEAGQAFAGAAAGQAAAIgIAHQgGAFgGACQgNAGgUgBQgEAAgDgDgAgPAgQAKgCALgDQALgDgBgDQAAgFgGgDQgFgDgFAAIgPgBgAgPgSIAAAMIAIAAQARgBAAgMQAAgEgFgEQgFgDgGAAIgJAAg");
	this.shape_4.setTransform(317,-16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgeAkQgNgKAAgRQAAgTAMgRQAOgSAVAAQAUAAAKAJQAKAKAAATQAAASgLARQgNASgVAAQgRAAgMgKgAgSgQQgJALAAAOQAAAJAIAHQAHAFALAAQAMAAAJgMQAIgMAAgNQAAgNgGgFQgFgEgNAAQgNAAgJANg");
	this.shape_5.setTransform(308.2,-16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_6.setTransform(294.1,-16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgZAkQgJgKAAgMQAAgTARgUQAOgSAPAAIAEABIAEAAQADgCAEAAQAGAAABAGIABAMQAAADgCACQgCADgEAAQgGAAgCgFIgDgDIgEgBQgIAAgIAMQgNAPAAAOQAAAGAEAFQAEAEAGAAQAEAAAGgDIAJgGQAFgDACAAQAEAAADADQABACAAAEQAAADgCADQgQANgQAAQgOAAgIgJg");
	this.shape_7.setTransform(286.3,-16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AgaAtQgHgGAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGABAAAGQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgCQAEAAACADQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_8.setTransform(278.9,-16.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AggAsQgCgCAAgEIAAgNIAAgNIAAguQABgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAQAJAHAJQACACABADQgBADgCADQgCACgEAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgEAAQgDAAgDgCgAgRACIACAAQAOAAAHgDIAFgEIACgDQABgHgJgGQgHgGgIgBIgHAAg");
	this.shape_9.setTransform(271.3,-16.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_10.setTransform(264,-16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AgSAvQgGgBgEgDQgEAAgCgCQgCgCAAgEIAAgSIABgRIAAgTIgBgTQAAgDADgEQADgDAEAAIAKAEIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAKgIAFQgKAGgRABIgKgCgAgUAeIAGACIAGAAQAMAAAFgDQAGgDADgGQADgGAAgGQAAgNgRgLQgFgDgTgJg");
	this.shape_11.setTransform(256.7,-16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgcAsQgDgDAAgDIAAg9IAAgIIAAgHQABgGAKgCIAOAAQALgBAKAIQAMAIAAAMQAAAHgDAFQgCADgFAEQAGACAEAGQAFAGAAAGQAAAIgIAHQgGAFgGACQgNAGgUgBQgEAAgDgDgAgPAgQAKgCALgDQALgDgBgDQAAgFgGgDQgFgDgFAAIgPgBgAgPgSIAAAMIAIAAQARgBAAgMQAAgEgFgEQgFgDgGAAIgJAAg");
	this.shape_12.setTransform(179.9,-16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgfAsQgCgCAAgEIAAgNIAAgNIAAguQAAgEACgDQADgEAGAAIAOABQAIABAFADQAZANAAATQAAAHgGAFQgEAGgLAEQAQAJAHAJQADACgBADQABADgDADQgDACgDAAQgDAAgDgDQgSgQgUgHIABATQAAAEgDACQgCACgEAAQgDAAgCgCgAgSACIADAAQAOAAAHgDIAFgEIADgDQAAgHgJgGQgHgGgJgBIgHAAg");
	this.shape_13.setTransform(172.3,-16.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgaAtQgHgGAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGABAAAGQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgCQAEAAACADQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_14.setTransform(164.7,-16.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgMAqQgHgRgJgfIgFgQQgDgLAAgFQAAgDADgCQADgCACAAQAGAAADAFIABALIAHATIAIAcIANgiIAFgOQAEgJAEgEQACgDADAAQAEAAACACQADACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgGALIgDAMIgRAoIgGAOQgCAEgEAAQgHAAgCgFg");
	this.shape_15.setTransform(156.8,-16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066FF").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_16.setTransform(68.3,-16.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066FF").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAEABIAEAAQADgCADAAQAHAAABAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgDgDIgEgBQgIAAgIAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAGgDIAIgGQAFgDADAAQADAAACADQADACAAAEQAAADgEADQgQANgPAAQgNAAgKgJg");
	this.shape_17.setTransform(60.5,-16.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066FF").s().p("AgaAtQgHgGAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGABAAAGQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgCQAEAAACADQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_18.setTransform(53.1,-16.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066FF").s().p("AgZApQgMgJAAgLQAAgKAJAAQAIABAAAIQAAAEAGAEQAGAEAFAAQACAAABgHIAAgTIABggIAAgEIgBAAIgGAAIgHAAQgEAAgCgDQgDgCAAgDQAAgIALAAIAGAAIAFAAIALAAIALgBQAQAAAAAJQAAADgDACQgCADgEAAIgDAAIgEAAIgEAAIAAAEQAAApgGATQgFAOgKAAQgLAAgLgHg");
	this.shape_19.setTransform(45.2,-16.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066FF").s().p("AgcAsQgDgDAAgDIAAg9IAAgIIAAgHQABgGAKgCIAOAAQALgBAKAIQAMAIAAAMQAAAHgDAFQgCADgFAEQAGACAEAGQAFAGAAAGQAAAIgIAHQgGAFgGACQgNAGgUgBQgEAAgDgDgAgPAgQAKgCALgDQALgDgBgDQAAgFgGgDQgFgDgFAAIgPgBgAgPgSIAAAMIAIAAQARgBAAgMQAAgEgFgEQgFgDgGAAIgJAAg");
	this.shape_20.setTransform(37.6,-16.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066FF").s().p("AgXAoQgPgMAAgdIABgIIAAgIIAAgHIAAgHQAAgEACgEQACgGAEAAQADABACACQADACAAADIAAAKIAAAKIAAAIIgBAIQAAAIADAIQACAJAFAEQACABAKABQAOAAAFgaQADgOAAgYIACgGQADgEAEgBQAFABABADQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAYgCAMQgDATgKANQgEAGgGAEQgIAFgGAAQgPAAgIgGg");
	this.shape_21.setTransform(29.1,-16.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066FF").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_22.setTransform(20.6,-16.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3,1,1).p("ArRC8IAAjWIW8AAIOSAAA58gaIBaAAIJ0E+A4igaINPAAALrgaIAAj9ArRgaIAAkJ");
	this.shape_23.setTransform(168.1,23.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(204,153,0,0.431)").s().p("A8dBiIAAjDMA47AAAIAADDg");
	this.shape_24.setTransform(173.8,-17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

	// Layer 8
	this.instance = new lib.wordbuffy2();
	this.instance.parent = this;
	this.instance.setTransform(288.4,0.4,1,1,0,0,0,15.8,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({alpha:1},5).wait(13));

	// Layer 7
	this.instance_1 = new lib.wordrace();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.1,1.4,1,1,0,0,0,17.8,14.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({alpha:1},5).wait(18));

	// Layer 6
	this.instance_2 = new lib.wordgirls();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.4,2.4,1,1,0,0,0,19.6,14.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:1},5).wait(23));

	// Layer 5
	this.instance_3 = new lib.wordcaptialThe();
	this.instance_3.parent = this;
	this.instance_3.setTransform(67.5,35.8,0.994,0.994,23.6,0,0,12.5,14.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({alpha:1},5).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-27.7,364.4,82.3);


(lib.animsamrolls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sam("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20.8,19.9,0.462,0.462,0,0,0,45.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43.8,41.8);


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


(lib.anim_sled_girls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgFkHQAAgBAAgCQACgLADgMQADgMAFgIQAGgLALgFQAKgFALAHQAKAHAEAMQAFALAAAMQAAAEAAADQAAAIgBAHQAAAEABADQAAAAAAABQABABACADQABABABAAQADAFADAEQABgBABgBQAEgHgBgIAA4j7QACAAADAAQAAgBAAAAQgDAAgCABQgGACgCAIABIjoQgCgFgDgEQgEgFgDABQgDAAgBAFQgCAGABAEQABADAEACQAAAAABABQACgBADgCQAAAAAAAAQAEgCACgDQADAFABAHQgCAAgDAAIgBgBIAAAAQAAAAgBAAIAAAAQgBAAgBgBQgDgBgDgBABBj8QgCAAgCAAABWjcQABAAAAAAQAHgBAHgBQgDAKgIAIQAAAAAAAAIgBAAQABABAAABQABALABAJQABADAAADQABAJgCAJQgBAMgKAHQgKAJgKgIQgIgGgMAIQgDACgBAFQgBADAAADQAFALAHAJQAIAJAGAKQAGAKAHAKQAIAJAHAJQAHAJAHAJQADAEAEAEQADgDACgFQAFgJAEgKQAAgBAAgBQAFgNANADQABAAAAAAIABABQAJADAHAKQACADABACIAAAAQACAAABABQAEAAACgCQACgCABgDQACgFgCgJQgBgFgCgCQAAgBAAAAQABgEABgDQAEgFAGAJQABABABABQANgIAFAOQABAAAAABQAHgCAHgBQACgOALACQAEAAADACQABgJAJgFQAGgEADAHQACAEABAEQAAgLAJADQABABAAAAQADACABAEQAAABAAABQAGgHADAKQABACgBAEQgBAIgGgCQgBgBgCgBQgCACgCACQgCACgCgBQgEgCgBgBQgDAFgGABQABAOgFALQgEALgDAJQgFALgEALQgDALgCALQgCALgBAMQgCAMgBALQgBAGgBAHQAAAFAAAGQAAAHACAIQACAAABgBQABAAABAAQALgDALgCQAMgDALgBQANgCAMABQANAAAKABQACAAACABQADAAADACQAAAAABAAQALACAKAEQAMAFAJAGQAKAGAKAGQAKAFAIAJQAFAFAFAHQACADACAEQAHAKACAMQADAMgCAMQgBAMgFALQgEALgFAIQgBABgBABQgCADgDABQgKAEgKgBQgBAAgCAAQgLgDgMAAIgBAAQgLAAgMgEQgLgEgMgBQgMgCgLgCQgMgDgMgCQgGgBgGgDQgFgCgFgDQgDgCgEgBQgKAGgJAGQgLAGgGAKQgIAMAOAEQALAEALACQAMADALADQABAAAAAAQAIACAHABQAEABADAAQADABADAAQAJABAJABQALACAMgEQAFAEgBAGQgDANgLAEQgKAEgLgCQgIAAgHgCQgEgBgEgBQgJgDgHgDQgCgBgBgBQABgCAAgCQABgDAAgCQABgBAAgBQgMACgMAAQgBAAgCAAQgCAAgCAAQgIAAgIgBQgFgBgGgBQgFgCgFgBQgLgEgMgEQgJgDgJgDQgBgBAAAAQAAgBAAgBQAAgBgBgCABMjtQADAEACADQADAEACAGABFjdQgEgBABgFABMjcQAFAAAFAAAA3jmQAAAHgBAEQACACABACQAGAEgCAGQgBADgEADQAAAAAAAAQgLAHgIgLQAAgBgBgBQgGgJAFgKQABgDACAAQABAAABABQAIABAGAGQAAABgBACQAAAAAAAAQAFAAgBAHQgBAHgCAAQgCAAgEgIQgEAEgIABAA1jYQgCADgDADABSivQgBAMgIAGQgLgHgFgKQgCgDAAgEQAIAGAKABQAFAAAEgBQACAAADgBQgEgEABgIABZjMQAAAAABAAABMjtQgCADgCACAD6g4QAAAAAAAAQAAgNgJgFQgBgBAAAAADchBQAFgBAFAAQAIABACAIQgBAAAAABQgLAGgMACIAAAAQgBABgBAAQgEAAgFgBQAEgGgDgIACQg7QAHgGAJgEQAIgDAFAEAC7hFQAGAKgDAJIAAAAQgCAGgEABQgDAAgFgDACtgeQAEAAAFgCQACAAADgBQAJgDAHgEQAEgDADgBQABAAABAAQABAAAAAAQABgBAAgBAB0AEQACgDACgBQAFgKAHgIQAIgJAGgIQACgDABgCIAAgBQgEgHgIAAQgDABgBADACfgfQAIgBgDgIACVgoQABABABACQADAHAFgBQAHACAHgBQgJAFgIAIQgJAHgKAGQgJAGgMACQgEAGgIAFQgBAAgBABQgIAGgHAGQgBABAAAAQgIAHgKAGQAAAAAAABQgBAJAAAKQAAAMAFALQADAJAFAGQAKgFAKgFQAIgFAHgFIABAAQABgBgBgBQAEgJAGgJQAHgLAIgJACygEQgDgBgEAAQgMABgLAEQgDACgDACQgHAEgIAEQgKAFgLAEQgKAEgJADAC+AMQAAgDgCgDQgDgHgHgDACNCDQABgIAEgJQAEgMAFgKQAGgKAGgLQAGgJAGgKQAHgLAEgLQACgIgCgJIAAgBQAEgCAEgBQAGgDAHgBQADAAACAAQAAACAAADQAAAFAAAFQgBALgCAMQgBAIgBAIQAAABAAACQAAACAAACQAAAGgBAFQgBAGgDAGQgEALgEALQgEAKgFAIQAHgDAGgCQAKgDAKgDAC+gyQADACADADQAFAFAEgGQAAgBAAgBADVgsQgCAFgDAFQgGAKgJAIQgBABgBAAQgGAGgHAFADYAFQAAgEAAgDQAAgMAAgLQABgLgBgMABcgDQgEgCgFgDQgIgIgIgGQgHgHgHgIQgDAGgJAEQgJAEgGgBQACALAEAKQAFAJAGAJQAHAKAMgJQAJgIAKgGQAGgCAFgDgAA1glQACgCAAgDQAEgMgKgIQgJgHgBgNQAAgDgBgEQgBgDgCgCQgCgDgGgDQgCgKgFgHQgGgKgMACIAAgBQgBgCgBgCIAAAAABvgUQgEAGgGAEQgEADgFADQAAAAAAABABEArQgJAFgJAGQgMAJgHgJQAAgBgBAAQgCAAgCABQgLAEgKAFQABgHAAgKIAAAAQgDAAgCAAQgJgDgLABQAFAFAEAFQAGAHAGAGQACABACACQAJAHAGAJQAGAJAHAIQAIAIAHAJQABABACACQAIgCAGgEQADgBACgCQAIgEAGgEQgBgBgBgBQgBgCgCgCAA0B7QAGAGAHAGQAJAGAAAEQALAEANgBQACAAACAAQALgBAJgDQAFgCgBADQAFgHAJgGQAAgBABAAABzBQQgDAJgEALQgEALgBALQgBADAAADIgkgLACMCWQANgJgKgMQgBABgBABADTA+QgKAFgGAMQgFAJgGAKQgGAKgEAKQgFALgEALQAIgEAHgDQAFgCAEgCADvg4QACAEADAAQAFAAABgEQACABABgBAEGg+QAAgBAAgBQACgHgCgGQAAAAAAgBAEUhNQAAABAAAAQABAEgBADQAAACgBADAgYjJQgFgBgFgEQgKgGgBgNQgBgKAEgKQABgBABgCQAHgLALgEQAJgEAIAEQAAAEgBAFQAAAFABAGQABAKAGAOQAFgJAJgGQAGgDAGgDQAEgDAFgCQAJgEAKgCAinjhQADgHADgIQACgGADgFQABgCACgCQAHgHAMgDQAAAAABAAQALgCAKADQAKADAIAFQAAABAAAAIAAABQABABAAABQABAEABAFQAAACAAACQAAAEgBAEQADAEgBAFQAEgBAEgDQAEgDAAgEAiGkPQgJgJgNADQgMADgKAFQgFADgFACQgGACgFAAQgNACgMABQgMAAgMgBQgDAAgEAAQgIAAgJgCQgEAAgDgBQgIgCgIgCIgBAAQgEgBgEgBQgIgCgHgBQgLgCgNgBQgFAAgFAAQgHAAgGACQgFABgDADAiyjFQgCACgDACQgHAEgIACQgOADgOAAQgPAAgNgEQgFgBgFgCQgRgHgPgJQgMgHgLgHQgOgIgRgGQgPgFgPgCQgHgBgHAAQgEAAgDAAQgKAAgKAAQgIgBgGACQAKgFAEgIQAFgKAHgJQAIgIAKgGQALgGAMAAQAMgBAKADQAMACALAEQAKADAMAEQAEABAEABQAIACAIABQALACAMAAQAMABAMgBQALgBAMgEQANgDAJgFQALgGAMgDQAMgDALAAQANgBAIAHQAIAHAHAKQAGAIADAKAhbjzQgEgDgEAEAhsjxQgHgKgJALAhcjnQgBgBgBgBQgDACgBABQgBAFgCACQAAAAgBgBQAAABAAAAQABAAAAAAQADABADAAQAAAAABAAQACAAACAAQAAADgDAFQAAAAAAAAQgBABgBABIAAAAQgDAEgDgHQgBgEAAgEAh6jeQAAgBAAAAQACgDACgCQAJgJADAJQABACABADQAAABgBAAQACAAABgBAhpjeQgCABgEAAQAAAAgBAAQgBABAAABQgCADABAEQgBAAgBABQgCABgCgCQgEgFACgFQACABAEABQACgBACAAAhfjUQgEgFAEgFAhmjgQABgDADgDAhdjWQAGAKAIAFQAEADgFAEQgEAEgHAAQAAAAgBABQgHAIgFALQgFAKgJAIQgJAHgMgBQgJgBgIABQgCAAgBABQAFALAGAJQAGAKAIAKQAGAHAFALQAFALAFALQAHALAKABQAEAAAFAAQANgDAJgFQAEgDAEgBQABgCAAgCQADgJAGgKQAFgLAEgLQACgGAFgBQgEgMAIgDQADgCADACQABABACAAQAAgOAOAKQACABACACQAAgBAAgCQAEgJADgLQADgKgBgLQAAAAgBgBQgHgCgDgJQAAAAAAAAQgBgBgCAAQgEACgDAEQgEAFgDAFQgCACgBACQAAABgBAAQgLAFgMgBQgLAAgMACQgJACgGAFQgCABgCACAgYjJQgFALgLACQgLACgMAEQgDABgDABQgCAAgBABQgMAFgFAKQgCACgBACIAAABQgCAEgBAEQgEAMgFAKQgCAJgJgBAiQjIQACAKAGAJQAGAJAKABQgEAJgOgCQgNgCAAgOQAAgMAHgIgAgWinQgBADgCACQgGAKgKAEQgNAFgNgDQgKgCgKAGQgJAFgIAIAhcigQAIgFAHgEQAFgDAGgBQAFgCAGAAQAMABAPgFQAGgJAJgFQACABABACQADABACACAhyjUQAGgEADgGAApjpQgFgBgFACQgCABgCADAACjbQgBABgBACQAAABgBABQABAIAFACQAKADACAKAANi/QgJgMgHAMQAAADABACAAJiuQABAAAAAAQAFABACgBAgNjBQgCgDAAgDQgFAAgEgCAgBjWQgIAGgFAHQgBABAAABAgfhzQADgBAEABQALABABAIQABgBABAAQAEgCgBgEQgBAAABgBQgCgJgJgGAgHhxIAAAAQAAgBAAAAAgHhxQAEADADgFQADgFgBgFAmJkAQAKgEAKgCQACAAACAAQAIgCAIABQABAAAAAAQADAAADAAQALACALADQALAEAMADQALAEALACQAKACAJAAQAFgCAMABQANABANgCQAKgCAKgCQADgBACgBQACAAACAAQACgBACAAQAAgBABAAQAGgCAFgCQACgCADAAAi9jsQgLACgJAIQgEADgFACQgFACgGgBQgMAAgMAAQgMAAgMgCQgLgCgLgEQgHgCgGgEQgEgBgEgCQgJgGgKgGQgHgDgGgBAiyjFQgCgFgHgEQgBAAgBgBQgFgDAAgHQAAgIAIgDQADgBAEAAQAIAAAEAEQADAEABAGAi1jaQgDAFAEAFAjchUQgEgFgEgGQgGgKgDgMQgBgMAFgLQAEgJAOgEQAKgCAJADQACAAAAABQABAAAAgBQAFgDACgFQAFgKADgLQABgGAAgFQAAgCgBgDAkRjTQALAEALACQAMABAMgEQAGgCAGgDIABAAQAEgCAEgCAiZhcQgCgBgCgBQAAgBgCgBQgEgDgGgCQgJgDgMADQADAKAGAJQAGAKAGAKQAFAJAJAIQAGgEAEgEQAAgBABAAQABgBABgCQAGgLgHgLQgDgEgDgEQgCgCgCgDgAjZhPQAAgBgBgBQgBgBgBgBQAAgBAAAAAjahRQABABABABQgBAAAAAAQgEABgDACQgKAGgJAHQgHgGAJgIQAAAAgBAAQgOAAAGgNQADgFAGADQAKAEALAEAjzgJQgCgBgCgCQAHgDAIgFQAJgHAFgLQAEgKAAgMQAAgJgDgKAjYhPQABABABACQAHAIAGAJQAHAIAHAKQAHAIAGAJAjxhNQADAAACgBQAFgEABABAj+gBQAFgEAGgEQADADAEADQAKAFAMABQAMABALABQAIABAEgDQABAAAAgBQADgCABgEQACgIgBgJQAAgBAAgBQAAAAAAAAQAAgBgBAAQABAAAAABQAHAKAFAJQABACABABQAAABABAAIAAAAQAFAEAFAGQACACACACQAIAIAHAGQAJAIAJAGQAIAEAIgDQADgBADgCQAJgGAIgJQAIgJAFgLQABgBABgBQAFgJACgJQAEgKAEgLQAEgKABgLQABgCAAgCQAAAAAAgBQAAAAAAgBQACgHACgHQADgKAFgLQABgCABgCQACABADAAQAEACABgDQAAgCAAgCAj+gBQgEACgDAEQgEAFgDAFIAAAAQgJgDgLgCQAAAAgBAAAioAOQgCgBgEgBQAAAAgBAAQAAAAAAAAQgBABgBAAQgKAEgKADQgLAFgGALAizADQgBADABAEQABAAAAAAQACABABABAizAKQgHgCgHABQgLABgNAEAlUAaQADgCAEgCQALgFAMgEQALgDAKAAIAAAAQACgHAKgDQALgDAMACAkMAPQgCAEgBAEQgEAKAFANQABABABACQAEAIAGAHQAIAJALAEQACABABAAQAKADAKgBQALAAALAAQAKgBAJgCQADAAADgBQABAAABgBQACAAACgBQgGgHgEgLQgDgMACgKQABgKAFgKQAAAAABgBQAGgBAFgBQACgBABAAQABAAABAAQABAAACAAAlUAaQAGABAEABQAJADALAFQAKAFAJAEQAKAEANAAAjeBhQgBAAAAAAQgDgBgCgBQgGgCgFgBQgGgCgGAAQgLgCgLgEQgLgEgMgDQgKgDgLgDQgKgDgNgCQgEgBgDgBQgHgCgFgFQgJgJABgMQABgLAIgBQADgBAEABQAFAAAFACQABAAAAAAAhQDNQgCAEgDADQgGAHgIADQgJADgIgDQgKgEgNgFQgOgEgOgEQgMgDgMgFQgOgGgNgHQgMgHgOgFQgRgFgQgGQgBAAgBAAQgSgGgRgJQgGgDgHgEQgIgEgIgEQACgBABgBQAFgFAEgBQAEgBAEACQALAFAJAGQAJAFALAEQAFACAFABQAHACAGACQALACALgBQAHgBAFgDQgJgDgLgDQgKgEgKgEQgPgFgNgGQAHgCAHgBQANgBAKAEQALAFAJAEQAJAEAKADQAEgKgCgKQgCgLgEgLQAHADAHADQALAEALAFQAEACAEACQgGAAgFADQgJAFgIAIQgEAEgDAGQAJAEAJAEQAJAFAMgCQAOgCAEgJQADgGgCgIQgFgCgFgDQgGgEgFgDQgBAAgBAAAijBKIAAAAQABAAABAAQgBAAgBAAQACACABABQAEADACAAQABAAAAAAQADgBACgGQABgDAAgDQgHABgGAEQAAABgBABAAbhkQAAADAAACQAAAMgBAKQgBAMgBAKQAAAMABAMQAAACABABAAkh7QgBAIABAIQAAAGgBAHAgEgtQgBgGgBgFQAAgFgBgFQAAgHgCgIAgWhmQgGgCgFgCAgkg9QAAAAAAgBAgkg9IAAAAAghg0QAMgCAKAFQAEABADADAgHhCQgDACgDABQgLAEgMgCQACAHABACQACAKgBAJQAAANgCAKQgEALgCAKQAAADgCACQABAEACACQAIAHAHAJQADADACADAAMAPQgBgBAAAAIAAgBQgDgLgEgLQgDgLgDgMQgBgHgBgGAifiPQgHACgBAJQgBALAFANQADAHAEAEQABADACACAibgtQAAAAABAAQAIAIAJAIQAJAIAHAIQAJAIAJAFQAKAGAJgKQAGgJAGgMQABgCABgCQgBABgBAAQgBABAAAAQgGAEgKADQgNADgJgHQgHgHgJgIQgJgIgIgHAhGgdQAAAAAAgBQAEgIADgIQAEgJACgIAiTBDIAAAAQACAAABAAQANgCALgDQAMgDAMgEQACgBACgBQAKgCAJADQAEABADACQACABABACQAHAHAJAJQAIAJAHAGQAJAHAHAHIAAAAQABAAAAABQAJAHAJAGQAKAFAIAFQABAAAAABQABAAAAAAQAKAGAHAHQAEAEAAAIQAAAAAAABQgCAJABAJQAAAGAFAEQADABACABQAIADAJgEQAHgCAGgBQACgBACAAQAIgBAIAAQALACAMAAQAFAAAEgCQADgCACgDQgBgBAAgCQAHgDgHgJQAHgBgDgFQAKgGAIgFQACgCACgBACLDbQgLgDgLgCQgMgBgLgCQgMgDgIgEQgKgGgJgFQgCgCgDgBQgHgDgIgEQgLgEgKgEQgLgDgKgEQgLgEgMgFQgKgEgLgEQgLgEgMgDQgMgDgKgCQgMgCgMgCQgCAAgCAAQgGACgEAEQgEAFgCAGQgFANALAGQABAAAAABQALACALAEQAKADAKAEQAIACAIACQADABACAAQALACALAAQAMAAALgFQACgBAAgDQADAFgBAGQgBAJgHAFQgKAGgMgBQgQgDgNgFAivBNQAKAEALAEQAMADAKACQAMACALAFQALAFAKAEQALAEAIAIQADACADgBQgEgHgBgLQgBgMAAgMQAAgKADgKAibCAQAEABAFABQABADACABQABABABAAQAIgBAJABAg/B3QABACABACQAFAIAMADQALADAMgBQADgBAEAAQABAAABgBQAHgBAGgBQALgDAJAAAAGAuQgCgFABgFQABgKAGgLAAeA1QgFgIgGgKQgEgKgDgKAgqAQQAAAAAAgBQgEgMgLAAAinBLQAEABADABAgMCGQALACAIAEQAKADAKAFQAIAEAJADAEAE7QgFAJgMgCQgHAAgGgDQgDgBgEgBQgHgDgKgCQgBgBgCAAIAAAAQgQgEgOgFQgMgEgMgDQgOgDgSgEQgDAAgCgBQgUgEgWgDQgSgCgQgFQgWgIgTgKQAKgBAJgFQAGgEAHABQANAEAPAEQAOAFAJADQAIADAHADQALADALAEQAIADAHgCQgLgEgLgEQgKgDgLgFQgKgFgKgFQgFgCgJgDQADAAACgBQANgGALAFQALADAKAEQANACAIADQALAEAKACQAAgCABgBQADgMgCgMQAAgIgEgHAhdDLQAJgDAGgGQACgBAAAAQACgCgDAJQgBACgCADAhdDLQgDABgEABQgLACgKgDQgGgCgGgDQgFgCgEgCQgKgFgKgFQgHgEgIgDQgIgEgIgCQgJgCgHgHQgCgCgCgDQAGAEAHACQALACAKAGQAJAFALAEQALADAKADQABABAAAAQAMADALAFQAJADAMAEgAjVCeQgBgBAAgCQgBgEABgFQAAgCABgCAjiCUQAAAAABAAQAEgDACgEQABgBAAgBIAAAAAGKCuQgHAAgHABQgHAAgHACQgJADgKACQgBAAgCABQgFABgGACQgPAGAAgKQAAgFADgDQAFgGAHgDQgNAEgMAAQgGABgGAAQgFAAgGABQgIACgIACQgFABgGAAQgFABgGACQABgHAGgDQAEgCADgEQACgDgBgBQgCgFgIABQgFABgFAAQgCAAgCABQgIABgIABQgIACgIADQgKAEgLABQgDAAgFABQAIgEAKgEQAMgDALgEQAJgDAJgCQACgBACAAQAAgBAAAAQALgDALgBQAMgCAMgCQAJgCAJABQgGAEgGADQgFAEgEAEQgDADACABQAIACAIgDQALgEAKgBQAGgBAHgBQACAAABgBQAPgBAPABQgEAIgKAHQAJACAQgDQAFAAAEAAQAFAAAGAAQAKAAAGAEQACABACABQgKAEgMABgAC3DcQAAAAABAAQAHgCAFgLQADgFgCgIQgLAEgLgBQgJAAgLgGQgKgGgKgFAC3DcQAAAAAAABQgIAGgJgCQgKgDgHgHQgGgGgHgCQgDgCgEAAQgLgBgMgBQgMAAgKgFQgGgCACgFQACgFABgEAC3DgQACACABABQAKAGgBAKQAAAHgEAHQgBADgCACQgIAKgNgEQgKgDgIgCQAAgBABgCQACgKAGgIQAHgJALgGQADgCAEgBQADgBADgBQgBAAAAAAQgDgBgCgBAD0DtQgGgDgIgBQgMgCgLgDQgHgCgIgDQgBAAgCgBACDCYQAFAAADgCQAAAAABAAABiCUQABgCAAgCQACgHABgJACHDVQACACACAEAB+EUQABAAAAgBQABAAABAAQAIgFAEgJADkEyQgKgDgKgDQgLgDgMgFQgKgEgLgEQgIgEgIAAQAAgIABgIQAAAAAAgBACPCaQgBgCgCgC");
	this.shape.setTransform(36.6,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AD3CLQAAgEADgDQAFgGAHgEQgNAEgNABIgMABIgKABIgQADIgLACIgLADQABgHAFgDQAFgDADgDQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgDgFgIACIgJABIgFAAIgPADQgJACgHADQgKAEgLABIgIABQAIgFAKgDIAXgHIASgGIADgBIABAAQALgDALgBIAXgEQAKgCAIABIgLAHQgFADgEAFQgBAAAAABQgBABAAAAQAAABAAAAQAAAAABABQAIABAIgDQAKgDAKgCIAOgBIADgBQAPgBAPABQgEAIgKAHQAJACAQgDIAJgBIALABQAJAAAHAEIAEABQgKAEgMABIgPACIgNACIgTAFIgDABIgLADQgFACgEAAQgGAAAAgHgAkzAkIgDgBQgLgEgIgJQgGgHgEgIIgCgEQgFgLADgLIADgHIABgBIAHgJIAHgIIAKgHIAIAGQAKAFAMACIAXACQAIABAEgDQgBACABAFIgBgBIgJgBIAAAAIAAAAIgCAAIgCABQgMAAgMAFQAMgFAMAAIACgBIACAAIAAAAIAAAAIAJABIABABIABADIgTAHQgMAFgFALQAFgLAMgFIATgHIADgBIAAAAIABgBIAGADQgFAKgCAKQgCAIAEAMQAEAMAGAHIgEABIgDABIgGABQgJACgJAAIgWABIgCAAQgKAAgIgCgAjwhpIgMgTQgGgJgDgKQAMgEAJAEQAGACAEADIACABIADADIAEAFIAGAIQAHAKgFAMIgDADIAAAAQgEAFgHADQgIgHgFgKgAk4h3IAEgCIAFgCIAAAAIABgBIAAAAIABAAIgBAAIAAAAIgBABIAAAAIgFACIgEACIgBAAQgPAAAHgNQADgFAGADIAVAIIAAABIACACIABACQgEAAgEADQgJAGgJAHQgIgGAKgIg");
	this.shape_1.setTransform(43.7,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AEvDFIgPgDIgIgCIgPgFIgEgCIACgFIABgEIAAgDQgMACgLABIgEAAIgDAAIADAAIAEAAQALgBAMgCIAAADIgBAEIgCAFQgEAIgNgBQgGgBgHgDIgGgCIgRgFIgEgBIAAAAIgegJIgYgGIgggHIgFgBQgUgFgWgCQgRgCgQgGQgWgHgUgKQALgBAIgGQAGgEAHACIAdAIIAXAIIAPAFIAVAIQAIADAIgDIgXgHQgKgDgKgFIgUgKQgFgDgJgCIAFgCQAMgFAMAEIAVAHQAMACAJAEIAUAFIABgDQADgLgBgMQgBgJgEgHIgEgGIACgGQAHADAFAFQAIAIAJACQAKADAHgHIABAAIAEABIACABIgGABIgIAEQgKAGgHAJQgHAIgCAKIAAADIARAFQAOAEAHgKIAEgGQADgGABgHQAAgLgJgFIADgFIADABIAPAEIAWAFQAIABAHADIgUAMQgLAGgGAKQgHAMANAFIAWAGIAYAFIABABIAOACIAIACIAGABIARACQAMACAMgFQAEAEgBAGQgDAOgKADQgIADgIAAIgGAAgACaCZIAAACIABAAIASAHIAXAHIALADIALACIAQACIgUgHIgXgHIgVgJQgIgDgIAAIAAADgACaCWIAAgGIAAgKIABgBIgBABIAAAKIAAAGgACGCQIgBABIgBAAIABAAIABgBQAJgEADgKQgDAKgJAEgAhuBbIgYgIIgbgIIgYgJIgbgMQgMgHgPgFIghgLIgBAAQgSgHgRgIIgNgHIgQgIIADgCQAEgEAEgBQAEgCAEACIAVAKQAJAGALADIAKAEIAMADQALADAMgCQAHgBAEgCIgTgHIgUgHIgdgLIAOgCQANgCAKAEIAVAJQAJAEAJACQAFgIgCgKQgCgLgFgLIAOAFIAWAJIAIAEQgFABgGADQgJAFgIAGQgEAEgCAGIARAIQAKAFALgBQAOgCAEgKQADgGgCgHIAJACIAEAEIABAAQAJgBAIABQgGADgEAEQgEAEgCAHQgEAMALAHIABAAIAWAHIATAGIAQAEIAGACQAKABALAAQAMABALgGQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQADAFAAAFQgCAKgHAFQgKAGgMgCQgQgCgMgGIACgFIABgBIAAAAIAAAAQACgGgBAAIAAAAIgCACQgGAGgJADQAJgDAGgGIACgCIAAAAQABAAgCAGIAAAAIAAAAIgBABIgCAFIgGAIQgFAHgJADIgIABQgEAAgEgCgAjLAhQAHAHAJACQAHACAJADIAPAHIATAKIAJAEIANAFQAJADALgCIAIgBIgWgIIgWgIIgBAAIgVgGQgLgEgKgFQgJgGgLgDQgHgCgHgDIAFAFgAjRAZIABADIgBgDIAAgFIAAgEIACgFIgCAFIAAAEIAAAFgAjVAJIgBACQgCAEgEACIgBABIABgBQAEgCACgEIABgCIAAgBgADMgTIAIgWIADgLIACgLIAAgEIAAgEIACgQIACgXIAAgJIABgGIAAgHIAAgYIgBgWQAMgDALgGQACAFAEAAQAEgBABgDIAEAAQAAANgEALIgIAVIgIAWQgEALgCAMIgDAXIgDAXIgBAMIgBALQAAAIADAIIgUAGIgNAEIAJgSgACliiQAHgBgCgHIADAAQADAAACgCIADgEQAFADADgBQAEAAACgGIAGAEQAGAFADgGIABgBIAEAAIABAAIABAAIACAAIAAACIAAABIgCAAIgBAAIgHAEQgHAEgKADIgFACIgIABIgFABIgJgCgADXiyIgEAAQADgGgDgIQAHgDAHgBIALAAQAIAAABAIIgBABQgLAGgMADIAAAAIgCAAIgCAAIgBAAIgBAAg");
	this.shape_2.setTransform(36,48.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("Ag0B1QgLgDgFgJIgCgDQgEgIgBgKQgCgMABgMQAAgKADgKIADACIAPARQAIAIAIAHIAQANIAAABIABAAQAIAIAKAFIASALQgJAAgKACIgOADIgCAAIgIABIgHAAQgIAAgIgBgAAqBmIgPgQQgHgIgGgJQgGgJgIgIIgEgDIgNgNIgJgJQALgBAJACIAFABIABAAIgBARIAUgKIAEgBIABABQAHAJAMgIIASgMQgCAJABAKQAAAMAFAMQADAIAFAHIADAEIABACIgNAIIgFADQgHADgIACIgCgDgAASgqIAAgCQgCgMABgMIACgWIABgWIgBgFQAGACADAEIACAEIACAIQABAMAJAIQAKAHgEANIgCAEQgEAHgJADQgHADgFAAIgDAAgAgShDQgKgFgNADIgCgJQALACALgEIAHgDIABAJIABALIgGgEg");
	this.shape_3.setTransform(37.3,37.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("ABxA/IADgJIABAAIACgFQAFgKAMgFIADgBIAHgCIAWgGQALgCAFgKIAJACIABgCQAFgHAJgGQABAHAFACQAKADADAKIgFABQgJgNgIAMIABAFIgCgBIgFgDIgDgDQgDgCAAgDIAAAAIAAAAQAAADADACQgKAFgGAJIgCABIAAAAIgBAAQgKADgIAAIgEABIgBAAIgBAAIAAAAIgBAAIgEAAIgCAAIgDABIgBAAQgGABgFADIgOAKIAOgKQAFgDAGgBIABAAIADgBIACAAIAEAAIABAAIAAAAIABAAIABAAIAEgBQAIAAAKgDIABAAIAAAAIACgBQAGgJAKgFIADADIAFADQgFACgDAFIgHAJIgDAFIgBAAQgJAEgLABIgBAAIAAAAIgBAAIgBAAIgCAAIgBgBIAAAAIgBAAIgRACIgBAAIgBAAQgJACgGAFIgEAEIAEgEQAGgFAJgCIABAAIABAAIARgCIABAAIAAAAIABABIACAAIABAAIABAAIAAAAIABAAQALgBAJgEIABAAIgDAFQgFAJgLAEQgNAFgMgDQgKgCgLAGQgIAFgJAIQAGgKADgLgAgRAdQgPAAgNgEIgKgDQgRgGgPgKIgXgMQgNgIgSgGQgPgFgPgDIgOgBIgHAAIgUAAQgIAAgGACQAKgFAEgIQAGgLAHgIQAHgJALgGQAKgGANAAQALAAALACIAWAGIAWAHIAIACIAQADQAMACALAAIAYAAQAMgBALgDQAMgDAKgGQAKgGAMgDQAMgCALgBQANgBAIAHQAJAHAGAKQAHAIACALQgIgGgKgDQgJgDgMACIgBABQgMACgHAIIgDADQgDAFgCAGIgGAPQgEgEgIAAIgGABQgJADAAAJQAAAFAGADIACABQAGAFACAFIgFAEQgGADgIACQgNADgNAAIgCAAgAgjAIIAMgBIACgBIAAAAIAAAAIACAAIABAAIANgFIAAgBIAHgDIgHADIAAABIgNAFIgBAAIgCAAIAAAAIAAAAIgCABIgMABIAAAAIAAAAIgDAAIAAAAIgDAAIAAAAQgMgCgLgEQALAEAMACIAAAAIADAAIAAAAIADAAIAAAAIAAAAgAgSgFIAJgCIAAAAQAFgCAEgDQAJgIALgCQgLACgJAIQgEADgFACIAAAAIgJACIAAAAIgBAAIgZgBQgMAAgMgCQgLgCgLgEIgNgFIgHgEIgUgLQgHgEgGgBQAGABAHAEIAUALIAHAEIANAFQALAEALACQAMACAMAAIAZABIABAAIAAAAgAiQgxIABAAIAGAAQALACALAEIAYAHIAVAFQAKACAKABIAAgBIAKgBIAAAAIAAAAIADAAIADAAIABAAIAGABIAAAAIAAAAIASgCIACAAIASgEIAFgBIAEgBIAEgBIABgBIALgEIAFgCIgFACIgLAEIgBABIgEABIgEABIgFABIgSAEIgCAAIgSACIAAAAIAAAAIgGgBIgBAAIgDAAIgDAAIAAAAIAAAAIgKABIAAABQgKgBgKgCIgVgFIgYgHQgLgEgLgCIgGAAIgBAAIgBAAIgBAAIgBAAIAAAAIgEAAIgJABIgEABIgUAFIAUgFIAEgBIAJgBIAEAAIAAAAIABAAIABAAIABAAIAAAAgAgPgtQANgBALgBIALgDIAKgEQALgGAMgCIAAgBIABAAIAAAAIAEAAIABAAIAAAAQAJAAAGAGQgGgGgJAAIAAAAIgBAAIgEAAIAAAAIgBAAIAAABQgMACgLAGIgKAEIgLADQgLABgNABIgDAAIgBAAIgKAAIgKAAIgGgBIgSgCIgHgBIgQgEIAAAAIgJgCIgPgDIgXgDIgBAAIgCAAIgCAAIgCAAIgBAAIAAAAIgBAAIgCAAIgNACQgFABgDADQADgDAFgBIANgCIACAAIABAAIAAAAIABAAIACAAIACAAIACAAIABAAIAXADIAPADIAJACIAAAAIAQAEIAHABIASACIAGABIAKAAIAKAAIABAAIADAAgADEAUIAAAAg");
	this.shape_4.setTransform(15.6,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhuCdQgDAAgDgDIgDgDIABgBIACgBQAFgEAIgBIgBAGQgCAGgEABIAAAAIAAAAgABhh+QgCAAgDgHIAEgHQAFABgBAGQgBAHgCAAIAAAAgAg0iRIABAAIAFgBQgBAEgCAEIgBABIgBACQgFgGAEgEgAhGiPIACgBIABAAIAGgBQgDAFgGAEQgBgDABgEgAByiQIAAAAIAAAAIgBAAIAAgBQgEgBAAgEIABgBIAGgFQADAGABAGIgGAAg");
	this.shape_5.setTransform(32.2,28.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABcASQgCgDAAgFQAIAGALABIAIAAQgBAMgIAGQgLgHgFgKgAhmAcQgOgCAAgOQAAgMAIgHQABAJAGAIQAGAJAKACQgDAHgKAAIgEAAgABIgLIAAgBQAHgBAFgEQADAHACAAIADADIgBABQgEACgEAAQgGAAgFgHgAhBgWQgCgFABgDIAAgBIAGACQgEAEAFAGIgBAAIgCABQgCAAgBgEgAhUgUQgFgFACgFIAGACIAEAAIgBABQgCAEABADIgCABIgBABIgCgCgABmgdIgGgDIAFgCQgBAEAEABIgCAAg");
	this.shape_6.setTransform(33,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("ACTD1QgKgCgHgHQgGgGgHgDIgHgBIgXgCQgMgBgKgEQgGgCACgGIADgJIAEgBIACAAIAGAAIABAAIAAAAIADAAIAEAAIAXACQAFAAAEgCQgEACgFAAIgXgCIgEAAIgDAAIAAAAIgBAAIgGAAIgCAAIgEABIgNAEQgJAEgIgDIgFgDQgFgDAAgHQgBgIACgJIAAgBQAAgIgEgFQgHgGgKgGIgBgBIgBAAIgRgLQgKgFgJgIIgBAAIAAAAIgQgOQgHgGgIgJIgQgRIgDgCQgDgDgEgBQgJgCgKACIgEABIgYAHQgMAEgMABIgDABIAAAAQgHABgGAEIgBABIgCABQgGgHgEgMQgDgLACgKQABgKAFgKIABgBIALgDIADAAIACAAIADAAIgKgLIAAAAIgBgBIgCgDIgMgSIgBgBIABAAIAAABIAAACQABAIgCAIQgBAEgDADIgBABQgEADgIgBIgXgCQgMgCgKgFIgHgGIgEgDIAPgIQAJgGAFgLQAEgKAAgMQAAgJgDgKIABAAIgCgCIgCgCIAAgBIgIgLQgHgKgCgNQgCgMAGgLQAEgJAOgDQAKgDAJAEIACAAIABAAQAFgDACgFQAFgKADgLQABgGAAgFIgBgFQgCgFgHgEIgCgBQgFgDAAgHQAAgIAIgDIAHgBQAIAAAEAEIAGgQQABgFAEgFIADgEQAHgHAMgDIABAAQALgCAKADQAKADAIAFIAAABIAAAAIABACIACAJIgBAAIAAAAIgBAAIgBAAIgBAAQgCAAgCACQACgCACAAIABAAIABAAIABAAIAAAAIABAAIAAAFIgBAIIgCgCIgEADIAEgDIACACQADAEgBAEIgEABIgBAAIgGgCQACgBABgFQgDADgBADIAAABIgDABIABgBIgCgFIAAAAIAAgBQgCgDgCAAIgBgBIAAABIgFACIAAAAIgBAAIgBACIgEAEIAAABIAAgBIAEgEIABgCIABAAIAAAAIAFgCIAAgBIABABQACAAACADIAAABIAAAAIACAFIgBABIADgBQAAAEABAEQADAHADgEIAAAAIACgCQAGAKAIAFQAEADgFAEQgEAEgHAAIgBABQgHAHgFALQgFALgJAIQgJAHgMgCQgJAAgIABIgDABIALAUQAGAKAIAJQAGAIAFALIAKAVQAHAMAKABIAJgBQANgCAJgGIAIgEIABgDIAJgTIAJgWQACgGAFgBIACgBIABAAIABAAIAAAAIABAAIACAAQALACABAHQgBgHgLgCIgCAAIgBAAIAAAAIgBAAIgBAAIgCABQgEgMAIgEQADgBADACIADABQAAgPAOAKIAEAEIABgDIAHgUQADgKgBgMIABABIAAAAIAEAAIAAAAIAAAAIADAAIAAAAIAAAAIgDAAIAAAAIAAAAIgEAAIAAAAIgBgBIgBAAQgHgCgEgJIAAgBIgBgEQAIgMAJAMIAEgBQgCgJgKgDQgGgCgBgJIACgCIACgCQAFgKAJgFIALgGIAJgFQAJgFAKgBQgGACgCAIQACgIAGgCIAFgBIAAAAIAEAAIAAAAIADAFIACABIAGAJIgEAEIgFgIIgBgBIgBgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIgBAAIAAAAIAAAAQgDAAgBAFIgCAGIABAEIgBgEIACgGQABgFADAAIAAAAIAAAAIABAAIAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIABABIABABIAFAIIAEgEIAFAHIAFAJIABAAIAOgBQgDAKgIAIIgBAAIABACIACAUIABAGQAAAJgBAJQgCAMgJAHQgKAJgKgIQgJgGgLAHQgDADgBAFIgBAFIgBAKIABAHIAAAFIgBAIIABgIIAAgFIgBgHIABgKQAFAMAHAJIAOATIANATIAPATIAOASIAHAHIAFgHIAJgUIAAgBQAFgNANADIABAAIABAAQAJAEAHAJIADAGIAAAAIAAAAIgDgGQgHgJgJgEIgBAAQAHgHAJgDQAIgDAFAEIACgHQAEgFAGAJIACACQANgIAFANIABACQACAIgDAGIAAABQgEAGgFgEIgGgFIAAAAIABgHQAAgGgEgGQAEAGAAAGIgBAHIAAAAQgCAGgEABQgDAAgFgDIABgHIgBgHQgBgFgCgDIAAAAIAAAAQACADABAFIABAHIgBAHIgDAFQgDACgDgBIgDAAQADAIgIABQgFABgDgHIgCgEIAAAAQgEgHgIAAQgDAAgBAEQABgEADAAQAIAAAEAHIAAAAIgDAGIgOAPQgHAIgFAKIgEAFQALgBAKgHIATgOIARgLIAJgCIAFgBQAJgDAHgFIAHgDIACgBIABABIgFAJQgGALgJAHIgCABIgNALIgCgBIgEAAIgBAAIAAAAQgMABgLAFIgGADIgPAIIgVAKIgTAHQAHgHAIgFIACgCQAIgEAEgHQgEAHgIAEIgCACQgIAFgHAHIATgHIAVgKIAPgIIAGgDQALgFAMgBIAAAAIABAAIAEAAIACABQAHACADAJIACAGIAAAAIABAJIgBAJQgEALgHALIgMATIgMAVIgJAVQgEAJgBAIQABgIAEgJIAJgVIAMgVIAMgTQAHgLAEgLIABgJIgBgJIAAAAIAIgEIANgDIAFgBIAAAGIAAAKIgDAXIgCAPIAAAEQgKAFgGAMIgLATQgGAJgEALIgJAWIgEADIgSALQADAFgHABQAGAJgGADIABADQgCADgDACIAUAKQALAGAJABQALABALgEQACAIgDAFQgFAKgHADIgBAAIAAAAQgGAFgGAAIgFgBgAB8CvIgDgFIADAFgAB4CrQgDACgFAAQAFAAADgCIABgBIgBABgAB5CqQAHgEAAgGQAAgFgEgFIgCABIgBABQgJAHgFAGQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIAAAAIgBAAIgCABQgJADgLABIgEAAIABgFIADgPIABgGQABgLAEgMIAHgTIABAAIAAgBIAAgBQAEgJAGgJIAPgUIgPAUQgGAJgEAJIAAABIAAABIgBAAIgPAJIgUALQgFgGgDgJQgFgMAAgMQgBgKACgJIAAAAQAKgGAIgHIABgBIgBABQgIAHgKAGIAAAAIgSAMQgMAJgHgKIgBgBQgGgHgFgLQgDgJgDgKIgBgBIAAgBIgHgXIgHgWIgCgNIACANIAHAWIAHAXIAAABIABABQgGALgBAJQgBAFACAGIgFAAQgKgDgLABIAJAKIANAMIAEAEQAJAHAFAJQAGAJAHAIIAPARIADACQAGAHAHAFQAJAHAAADQALAEANAAIAEAAQALgBAJgDIACgBIABAAIAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAFgGAJgHIABgBIACgBQAEAFAAAFQAAAGgHAEgAh4BBIAFgBIABAAIAGgDQAJgGAIgJQAIgKAFgKIACgDQALABAEAMIAAABIADAFIAPARIAFAGIgFgGIgPgRIgDgFIACgFIAGgXQACgJAAgMQABgKgCgJQAMgCAKAEIAHAFIgCgLIgBgKIgCgPIACAPIgGADQgLAEgMgCIAAgBIAAgBIAEgOIAIgWIACgDIAFABIACABIABAAIABgBIABgBIAAAAIAAAAIAAgDIAAgCIAAACIAAADIAAAAIAAAAIgBABIgBABIgBAAIgCgBIgFgBIgLgEIALAEIgCADIgIAWIgEAOIAAABIAAABIgBAEQgBALgEAKIgIAUQgDAJgEAJIgCADQgFAKgIAKQgIAJgJAGIgGADIgBAAIgFABIgBAAIAAAAQgFAAgEgDQgJgFgJgIIgPgOIgEgEIAEAEIAPAOQAJAIAJAFQAEADAFAAIAAAAIABAAgAAIhKIgBAWIgCAWQAAAMABAMIABACQABAKAFALQAEAKAHAJQAHAKAMgKQAJgHAKgGIALgHQgFgBgEgEIgQgNQgHgGgHgJIACgEQAEgNgKgHQgJgHgBgNIgBgIIgDgEQgDgEgFgCIAAAFgAjRhQQADAKAGAJIAMATQAFAKAJAHIABABIARAPIAQAPQAJAJAJAGQAKAGAJgMQAGgIAGgLIACgEIgCABIgBABQgGAEgKACQgNADgJgGIgQgPIgRgPIACgDQAGgLgHgLIgGgIIgEgFIgDgFQgEgEgDgIQgEgJAAgKIAAgEQABgJAHgCQgHACgBAJIAAAEQAAAKAEAJQADAIAEAEIADAFIgEgDIgCgBQgEgDgGgCQgEgCgGAAQgFAAgGACgABSAKIgJAGIAAAAIAAAAIAJgGQAGgEAEgGQgEAGgGAEgAjpg4IANARIAOASIANASIgNgSIgOgSIgNgRIgCgCIACACgAhSgaIgHARIAAABIAAgBIAHgRIAGgRIgGARgAABhhQAFAIACAKQgCgKgFgIIAAAAQgFgHgJgBIAAAAIAAAAIgDABIAAAAIAAgBIgDgEIAAAAIAAAAIADAEIAAABIAAADQAAADgDAEIAAAAIgDACIgBABIgBAAIgCgBIAAAAIAAAAIAAgBQgDgJgIgGQAIAGADAJIAAABIAAABQAAADgDACIgCAAIACAAQADgCAAgDIAAgBIAAAAIACABIABAAIABgBIADgCIAAAAQADgEAAgDIAAgDIAAAAIADgBIAAAAIAAAAQAJABAFAHIAAAAIAAAAgAAmiZQAFAKALAHQAHgGACgMIAFgBQgEgDAAgHIABgCIgBACQAAAHAEADIgFABIgJAAQgKAAgIgHQAAAFACADgAiqifQAAAOANACQAOACAEgJQgKgCgGgJQgGgIgCgKQgHAIAAAMgAASi3QAIALALgGIAAgBQAEgCABgDQABgHgFgEIgDgDIgBACIAAABIgFAGQgEAEgIABQgDgFAAgGQAAgEACgFIAAAAQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIAAAAIAAAAIACAAQAIABAGAHQgGgHgIgBIgCAAIAAAAIAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAIAAAAQgCAFAAAEQAAAGADAFIABABgAjHi7QgCgDAAgDIABgEIgBAEQAAADACADgAiLi/QABAAAAAAQABABAAAAQABAAAAAAQABAAAAgBIACgBQAGgEADgFIgGABIgBAAIgEABIgGgDQgCAGAEAFgAi2jCQgBgGgDgEQADAEABAGgAAjjGIABgLQABADAEACIABAAIgBAAQgEgCgBgDIgBALgAA9jHIACAAIAEgBIgEABIgCAAIgBAAIAAAAIgBAAIgCAAQgBgHgDgGIgGAFIAAABIgFACIAGADIACABIAAAAIABAAIAAAAIABAAIAFABIACAAIABAAIAAAAIABAAgAAMjUQgCACgCADQACgDACgCIACAAIACgBIABAAIAAAAIAAAAIACAAIAAAAIADABIgDgBIAAAAIgCAAIAAAAIAAAAIgBAAIgCABIgCAAgAiPjbIABgBQAEgEAEgBIAAAAIAAAAQAEAAADAEIAAABIAAAAIAAAAIAAgBQgDgEgEAAIAAAAIAAAAQgEABgEAEIgBABgABEAxIAAAAgAjAgCIAAAAgADcgjIABgBQgCgIgIgBIgKABQACgOALABIAHACIABABQAJAGAAALIAAABIAAABIAAAAIAAAAIAAgBIAAgBQAAgLgJgGIgBgBQABgJAJgFQAGgDADAHIADAIIAAABIABAGIgBAGIAAADIAAgDIABgGIgBgGIAAgBQAAgLAJADIABABQADABABAEIAAADIAAABIAAADIAAADIgBAFIABgFIAAgDIAAgDIAAgBQAGgHADAKIAAAGQgBAIgGgDIgDgCIgEAFQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAgBIgFgCQgDAFgGABIgDAAQgBAEgFAAIAAAAQgEAAgBgEgAgahdIAAAAgAh5jLQABgDADgDQgBAFgCABIgBAAg");
	this.shape_7.setTransform(38.5,33.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AFnErIgDgBQgLgCgMgBIgBAAQgLAAgMgEQgLgDgMgCIgXgEIgYgFIgLgDIgLgFIgHgEQgGgDgIgBIgWgFIgQgEIgDgBIgBgBIgFgBIABgBQAHgCAFgKQADgFgCgIQgLADgLAAQgJgBgLgGIgUgKQADgCACgDIgBgDQAHgEgHgIQAHgBgDgGIASgKIAEgDIAQgIIAJgEIAMgEIAUgGIAEgBIABAAIAWgGIAXgDQANgCAMAAIAXACIAEAAIAGACIABAAQALADAKAEQAMAFAJAGIAUALQALAGAHAIIAKAMIAEAHQAHALACAMQADAMgCALQgBAMgFAMQgEAKgFAJIgCACIgFAEQgIADgHAAIgFAAgAEfDLQgDADAAAEQAAALAQgGIAKgEIADAAIATgFIAOgDIAOgBQAMgBAKgEIgEgCQgGgDgJAAIgMgBIgJABQgPADgKgDQAKgGAEgIQgPgBgPABIgDAAIgNACQgKACgLADQgIADgIgCQgBAAAAAAQAAAAAAgBQAAAAABgBQAAgBABgBQAEgEAFgDIAMgHQgJgBgJACIgYAEQgLABgLADIAAAAIgEABIgSAFIgXAIQgKADgIAFIAIgBQALgBAKgEQAIgDAIgCIAQgDIAEAAIAKgCQAIgBACAFQAAABAAAAQAAAAAAABQAAABAAAAQgBABAAABQgDADgEADQgGADgBAHIALgDIAMgCIAPgDIALgBIAMgBQAMgBANgEQgHAEgFAGgABTDzIgXgEQgMgCgIgFIgTgLIgFgCIgOgHIgVgIIgWgHIgXgJIgVgIIgXgHIgWgFIgYgEIgEAAQgJgBgIABIgBgBIgEgFIgJgCIgKgFIgLgGIgCgBIgIgEIgWgJIgOgFIgBAAIgFgCIgLgEIgLgCQgMgBgLgFIgXgGIgVgGQgKgEgNgCIgHgBQgHgDgFgFQgJgIABgNQABgKAIgCIAHAAIALACIAAAAIAKADIAUAIIATAIQAKAEANABQAEAIAGAHQAIAJALAEIADAAQAKADAKAAIAWgBQAKAAAJgCIAGgCIACAAIAHACQAEADACAAIABAAQADgBACgGIABgGIAAAAIAEgBQAMgBALgEIAYgHIAEgBQAKgDAJADQAEABADADQgDAKAAAKQAAAMABAMQABAKAEAIIAAAAIgCAAIgDgBIgBgBQgIgHgLgEIgVgKQgLgFgMgCIgWgFIgVgHIAVAHIAWAFQAMACALAFIAVAKQALAEAIAHIABABIADABIACAAIAAAAIACADQAFAJAMADQALADAMgCIAHAAIACgBIAOgDQALgCAJAAIABAAIABABQAKAFAGAHQAFAFgBAHIgQgGIgUgJQgJgDgLgCQALACAJADIAUAJIAQAGIAAACQgBAJAAAIQAAAHAFADIAFACQAIAEAJgEIANgEIgDAJQgCAFAGADQAKAEAMABIAXACIAHABIgBAGIAEAGIgWgEgAAoCtQAAgDgJgHQgHgFgGgHQAIgCAGgDIAkALIgDAPIgBAFIgBAAQgMAAgLgEgAlFBJIgTgIIgUgIIgKgDIAHgEIAXgIQALgEAKABIAAAAQACgHAKgDQALgEAMABIgHAHIgHAKIAAAAQgJgDgLgBIgBAAIABAAQALABAJADIgDAIQgEALAGAMIABAEQgNgBgKgEgAg6isIgKgFQgKgHgBgMQgBgLAEgJIACgDQAHgLALgFQAJgDAIAEIAAgDQACgMAEgLQADgMAFgJQAGgKALgFQAJgFALAHQAKAGAEAMQAFAMAAAMIAAAHIgBAPIABAHIgEAAIgFABQgKABgJAFIgIAEIgMAHQgJAFgFAJQgHgOgBgJIgBgKIAAgCIABgIIgBAIIAAACIABAKQABAJAHAOIgBADIgDACQgIAHgFAHIgBACIgJgCg");
	this.shape_8.setTransform(40,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 2
	this.instance = new lib.static_dust("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(4.1,48.7,0.091,0.091,-15,0,0,6.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:6.2,regY:5,scaleX:1.29,scaleY:1.29,x:-11.6,y:40.8,alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,2.1,89.2,67.5);


(lib.anim_mick_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// front arm
	this.instance = new lib.static_mick_arm("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.3,46.4,1,1,-15,0,0,7.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:8.6,regY:3.7,rotation:135,x:87.3,y:49.3},4).to({regX:7.8,regY:6.1,rotation:0,x:86.2,y:46.4},5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("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");
	this.shape.setTransform(69.2,83.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZgEQACgGALAGQgBAJgCAFQgCAFgDAAQgHgPACgEgAgTgMQgEAMgNAKQgFgfAWAJg");
	this.shape_1.setTransform(119.2,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABVC4QgLgigZgWIAAgBQgbgXgigOIhHgbQgkgPgigPQgQgIgPgLQAPALAQAIQAiAPAkAPIBHAbQAiAOAbAXIAAABQgHAAgDAFQgUAcgWAPQgCgGgEgGQgFgIgJgHQgNgLgOgFQhAgchAgVIgVgHQAOgaABglIAAgDIAAgDIAAADIAAADQgPgLgNgNQgXgagDgkQgEgnAKgkQAIggAWgeIgBAIIAAACIABAIIgBgIQAbAcAiATQAgATAkAPQAiAPAkgDQAlgEAegNIABABQAaAaAeAYQAaAVAhAPQAfAOAeARIgZAUIgBAAIgnAhQgpAggUAtIgBADIgIgCIAIACQgJAVAAAYIAAALIABAQIgBgQIAAgLQAAgYAJgVIAZAIIgDAOQgFAggPAZIgBACIgEAAIgCABQgOAAgJgagABxCAIAAAAg");
	this.shape_2.setTransform(71.9,91.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AGbMKQgigJgigNQglgOgnAGQgmAGgggUQgTgLAHgbQAIggAVgfQAVgcASgiQASgiALgiQAMgkgCgoQgCgoAGgmQAGgmATgdQASgdAggZIAMAFIgMgFIg3gXQgcgLgYgOQgQgJgRgHIgDgBIgZgIIABgDQAUgtApggIAnggIABgBQAhAOAfATQAgAVAhATQAhASAaAWQAhAcgTAkQgQAegOAkIgGANQgGADgCAHIgBACQgLAcgUAdQgSAbgOAjQgOAigJAlQgJAkgOAhQgPAjAFAmQAGAnAuABQAuABAEgmQAAgKAGgEQApgWgCA6QATASgHAYQgDAIADAIQANAhgkAPQgUAJgVAAQgNAAgOgEgAD+KuQgEgIAAgHQAAgQARgKQgRAKAAAQQAAAHAEAIgAhWFVIhDgeQgggPghgUQghgTgdgUIg9gqQgdgTghgOQgkgQgjAVQgYAPgTAPIABgFQACgGAAgHQAAAHgCAGIgBAFIgLAKIALgKQgLAsgfgmIABgBIAIgPIgIAPIgBABQgRAWgMgiQANgIAJgYQgJAYgNAIIgCgGIACAGQgFADgGABQgpAIARgwQAfgGAhgKQAagJAHgVQAMgjAbgcQAMgMAQgFQAlgKAZAiQAHAKAIAJQASASAXAKQAhAQAnAGQAiAFAhAQIBFAhIALAHQAPALANAXQgNgXgPgLQAYgrAKgdQBAAVA/AcQAOAFANALQAJAHAFAIIgUAiQgTAfgPAgQgOAegdAUQgRALgTAAQgQAAgRgIgAmyBfIAAgBIAAgBIAAAAIABgBQAIgVAMAAIAAAAIAAAAQAIABAKALIAAAAIABABIgBgBIAAAAQgKgLgIgBIAAAAIAAAAQgMAAgIAVIgBABIAAAAIAAABIAAABgAoFDFIAAAAgApMC/IAAAAgApMC/IAAAAgAAPhbQgjgPgggTQgigTgbgcIAAgCIABgHIAAgDQACgcALgaIAehFQAQgiAXgfIArg6QAZggAXgWIApgmIANgMQAbgXAggWQAdgUAhgDQAkgEAigNQAkgOAYgaQANABAOABQAbAAASgUQAWgYAKgiQALglAlgHQANgDALABQAUACAKALIACADIABABIABABIABACIAAABQgCAIACAGQADAOAGAMIACAEIACACIABABQAGAJAIAHIAOAJQgDAYgKAQIgFAGIgIAAIgGAAIAGAAIAIAAQAfAEgDAbQgDAWgTABIgHAAQgSgBgFgFQAFAFASABQgLAggVAbIgGAHQgdgEgSgTQgZgagRgjQARAjAZAaQASATAdAEQgTAVgcAKQgoAOgagYQgXgXgcgFQgXAmAOAiQAPAkgRAcIgBAEIgFAPQgOAbifCnQgWATgOAaQgLATgHAUIgBAAQgeANgmAEIgOAAQgcAAgcgMgAJMqdQgCAFAHAQQADAAACgFQACgGABgKQgGgCgDAAQgDAAgBACgAIOqNQANgMAEgLQgFgCgEAAQgMAAAEAZgAIvq2IgBgBIAAAAIAAgBIgCgDIAAAAQgKgSgKgBIAAAAIAAAAQgIABgGALIgBACIABgCQAGgLAIgBIAAAAIAAAAQAKABAKASIAAAAIACADIAAABIAAAAIABABIAAAAg");
	this.shape_3.setTransform(62.9,88.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AhuByQgOAAgNgCQgPgCgOgEIgDgBIgLgEQgWgIgTgOQgJgGgIgFQAZAEAPgSQAKgLgIgLQgCgEgFgEQgWgRgZgPIAMADQAhAFAcgMQAJgEACgGQABgGgGgIIgKgNQgOgVgJgVQAJAWAbAMQARAHATgHQAdgLAdgUQAfgWApALQAXAGATANIACACIAAAAIABABIABABIACABQAHAGAHAIQARAVANAVIABACQAeALARgWQAGgHAEgLQAOgkgNggQAqAggJAtQAggMgLgrQARAjgJAuIAAAFIgGAAIAGAAIABAAQAbgDALgVQAEAbgIAZIgFAOIgCAFIgCADQgFAKgJAHQAJgHAFgKIACgDIACgFIgBAFIgBAEQgEALgHAKQgKAPgQAIIgCABIgBAAIAAAAIAAAAQgOAGgSAAQgeAAgWgNIgOgJQgIgGgGgJIgBgBIgCgDIgCgEQgGgLgDgPQgCgFACgJIAAgBIgBgCIgBgBIgBAAIgCgDQgKgLgUgBQgLgBgNACQgkAHgLAkQgKAjgWAYQgSAUgaAAIgBgBgACwBNQAIAAAJgBIAAAAIABgBIgBABIAAAAQgJABgIAAIAAAAIAAAAQgYAAgTgOIgCgCIgEgEIAEAEIACACQATAOAYAAIAAAAIAAAAgAiWBKIAJgBQAggGASgkIAAgBQAQgfAZgbQgZAbgQAfIAAABQgSAkggAGIgJABIgIgBIAIABgACeAzQANAAANgEQAIgCAFgEQAEgFACgHQgCAHgEAFQgFAEgIACQgNAEgNAAIgBAAIAAAAQgNAAgOgEIgBAAIgBAAIgBgBIgCgBIgOgGIAOAGIACABIABABIABAAIABAAQAOAEANAAIAAAAIABAAgAiTAmQASAAAPgVQgPAVgSAAIAAAAIgBAAQgNAAgOgLIgJgHIAJAHQAOALANAAIABAAIAAAAgABKAMQACAFACAHQgCgHgCgFIgBgBgAB5AVQAcgBAMgdQgMAdgcABIgEABIgEgBIgMgCIAMACIAEABIAEgBgABhgGIgGgLIAGALgAh3gNQAYABAUgaIAGgHIABgBIAAgBIACgBIADgDIACgBQAQgLAVAAIABAAIAAAAIAJAAIABAAIACAAQAVAEAMAIQANAJAEAOQgEgOgNgJQgMgIgVgEIgCAAIgBAAIgJAAIAAAAIgBAAQgVAAgQALIgCABIgDADIgCABIAAABIgBABIgGAHQgVAagXgBQgIAAgJgEQAJAEAIAAg");
	this.shape_4.setTransform(113.3,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// backarm
	this.instance_1 = new lib.static_mick_arm2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.9,35.6,1,1,0,0,0,49.6,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-166.7,y:35.7},4).to({scaleX:1,scaleY:1,rotation:-15,y:35.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,140.5,169);


(lib.anim_mick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.anim_mick_run();
	this.instance.parent = this;
	this.instance.setTransform(100,83.5,1,1,0,0,0,69.3,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgQghQgQAEAKANQAKAMAIgPQAGgMgBgIQgPgIgHgOQAVAHABAPAhcAxQAEAHASgKQgMAAgKgDQgBAAgBgBQAAAFACACgABdAiQgdgUAOAwQAMAAAFAA");
	this.shape.setTransform(31.7,148.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AGhjdQAFgEAGgFQALgNAHgRQANghgNgdQgCgEgCgFQgVgjgmgLALzjAQAHg0AkAsQAGAIgBAOAKbjUQAHAMACANQABAEAAAFAHTjFQgHAMADAHQADAHAMADAGDiUQALgaAKAAQAGAAAHANQACAFACAHQABAFgGAHQgFAEgBABQgFAEAQgVAIThiQANAHAMgSAIPikQgBAeAbACAOVjMQgsACAfATQAIAFAIgHQAcgYgRgSARpjkQgjgfgMAbQAOAOAPgGAShjZQAIgOAQgBAyLBlQgbAEgFAcQAOAHAFgKAxJC/QAxALgeAYQgIgIgBgDAyPgEQgMACAHAKAwziaQghgJAIATQATgBAGgJgAyRhOQgfgTgIAZArnjdQAeAEAeADQAkAFAlACQAoADAZAfQAJALAHALQALASAHATQAQAmgPAmQgFAPgMAMQgIAJgDAAAqeCHQgagDAJAXQACAFADAHArLCoQgsgWAHAwQABAHALgDQAKgCAMgFAnvCAQgrgZgNAhQATAHAMgKAmEggQAWgSAQgqQANgjgOgkQgEgMgHgKQgNgXgWgSQgbgXgcgTAkLArQgeAHAXAUAixArQgTAHgCAJQgCAIAQAKQARgOgKgUgAjykQQAaAVALAhAkxDtQgfgZgaAkQAhANAVgKAjWDDQgwAIAWAnQAVAAAFgJAunFHQgyAWAzAHQAYAEgFgTAwTE5QgmgSgaAcQAWAJAWABAtLFcQgjATAcALQAMgNgMgEAqjDWQAOANgOAF");
	this.shape_1.setTransform(122.4,175.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("ASAj7QgjgfgMAbQAPAOAOgGAMRmgQAAAeAaACAMVleQAKAGALgLQgDgKgGgKAMqljQACgCADgEAOsjjQgsACAfATQAIAFAJgHQAbgYgRgRAI8B9QAHABAHAAQASgBARgHQAggOALgeQACgEABgFQAHgcgIgaAL/hDQAIAMABANQABAEAAAFANXgvQAHg0AkAsQAHAJgCANAQ5hcQAIgOAQgCAmbkTQgQAEAKANQAKANAIgQQAHgLgBgJQgQgHgHgPQAWAIABAOAnpjGQAAAEACADQAFAGARgKQgMABgKgEQgBAAgBAAgApNAUQgsgWAHAvQABAHAKgDQALgCALgFAktjPQgdgTAOAwQAMAAAFgBAk5hOQAUAIAPATQAJALAHALQALASAHASQAPAmgOAlQgGAPgLANQgIAJgEgBAohgNQgZgDAJAXQACAFADAGAolBCQAOANgOAEAkWDGQgrgagOAiQAUAHALgLAGbj3QALgaAKAAQAHAAAGANQACAFACAHQACAFgHAHQgEAEgCABQgFAEAQgVAHrknQgGAMADAHQADAHAMACAh/CgQAXgRAQgrQAOgjgPgjQgDgHgDgHAAfCSQASgNgKgVQgUAIgBAJQgDAIAQAJgACSCDQgFAigXAaAgyBwQgeAIAWAUAlkFkQgvAJAWAnQAUgBAFgJAm+GOQgfgYgaAkQAhANAUgLAt7FuQgzAWAzAHQAYAEgFgTAsfGEQgjASAbALQANgNgNgEAxfCMQgbAEgFAcQAOAHAEgKAwdDmQAxALgfAYQgHgIgBgDAvnFgQgmgSgaAcQAWAJAWAB");
	this.shape_2.setTransform(100.7,168.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AOxjuQAHAMACANQABAEAAAFAQ1lBQAHgzAkAsQAGAIgBANAM8kkQACgHABgHQACgRgFgSQgIgigcgQQgEgCgEgCQgbgMgbADAK4hSQgsACAfATQAIAFAIgHQAcgYgRgRAIRiiQABAGgGAGQgEAFgCABQgFAEAQgWgAI7jRQgGAMADAHQADAHAMACAHrihQALgZAKAAQAHgBAGAOQACAFACAGAOjgFQgBAdAbACAOzAjQAFAKADAKQADgCACgEAOnA8QAKAGAKgLArvAIQgtgVAHAvQABAGALgCQALgDALgFAxEhTQgbAFgFAbQAOAHAEgKAw6BrQAxALgeAYQgIgIgBgDAowjRQgyAXAzAHQAYADgFgSAmwhCQgeAHAXAUArDgZQgagCAJAXQACAEAEAHArCDXQAAAAgBgBQAAAFABACQAFAHASgKQgMAAgLgDgArHA2QANANgNAFAlyB/QAIAUgDAYQgBANgEAOQgEAUgIASQgRAmgkARQgPAGgRACQgLAAgDgDAm5C7QgrgagNAhQATAHALgKAsahbQAfgNAiAHAigkeQgQAEAKANQAKAMAIgPQAHgLgBgJQgQgIgHgOQAWAHABAPAlWhCQgTAIgCAIQgCAJAQAJQARgNgKgVgAj8hpQgEgcgcgjQgYgegmgFQgIgBgHAAAgWANQgdgSAOAvQAMAAAFgBAFUB8QAIgOAQgCAGbgjQgigegNAbQAPANAOgGAjVEpQgvAJAWAnQAUgBAFgJArOF4QgjASAbALQANgMgNgFAvMEuQgmgRgaAbQAWAJAWABAkvFTQgfgYgaAkQAhANAUgL");
	this.shape_3.setTransform(117,169.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AGhjdQAFgEAGgFQALgNAHgRQANghgNgdQgCgEgCgFQgVgjgmgLALzjAQAHg0AkAsQAGAIgBAOAKbjUQAHAMACANQABAEAAAFAHTjFQgHAMADAHQADAHAMADAGDiUQALgaAKAAQAGAAAHANQACAFACAHQABAFgGAHQgFAEgBABQgFAEAQgVAIThiQANAHAMgSAIPikQgBAeAbACARpjkQgjgfgMAbQAOAOAPgGAOVjMQgsACAfATQAIAFAIgHQAcgYgRgSAShjZQAIgOAQgBAyRhOQgfgTgIAZAwziaQghgJAIATQATgBAGgJgAyPgEQgMACAHAKAxJC/QAxALgeAYQgIgIgBgDAyLBlQgbAEgFAcQAOAHAFgKArnjdQAeAEAeADQAkAFAlACQAoADAZAfQAJALAHALQALASAHATQAQAmgPAmQgFAPgMAMQgIAJgDAAArLCoQgsgWAHAwQABAHALgDQAKgCAMgFAqeCHQgagDAJAXQACAFADAHAnvCAQgrgZgNAhQATAHAMgKAixArQgTAHgCAJQgCAIAQAKQARgOgKgUgAkLArQgeAHAXAUAmEggQAWgSAQgqQANgjgOgkQgEgMgHgKQgNgXgWgSQgbgXgcgTAjykQQAaAVALAhAjWDDQgwAIAWAnQAVAAAFgJAkxDtQgfgZgaAkQAhANAVgKAtLFcQgjATAcALQAMgNgMgEAwTE5QgmgSgaAcQAWAJAWABAunFHQgyAWAzAHQAYAEgFgTAqjDWQAOANgOAF");
	this.shape_4.setTransform(122.4,175.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("ASGmPQgjgegMAbQAOANAPgGAI+isQACgHACgHQAEgQgDgTQgFgjgagSQgEgDgEgCQgZgPgbABANTmKQgsACAfAUQAIAFAIgHQAcgZgRgRAMZheQAGAKADAKQACgCADgEAMNhFQALAGAKgLAMJiHQAAAeAaACAIcgvQAHg0AkAsQAHAJgCANAPHjaQgmgSgaAcQAWAJAWABAQQi2QAIgOAQgCAtOhnQgbAEgFAcQAOAHAEgKAsMgNQAxALgfAXQgHgIgBgDAmGjPQgdgTAOAwQAMAAAFgBAoqgMQgsgXAHAvQABAHAKgDQALgCALgFAoSCqQAIAUgDAYQgBAOgEANQgEAUgIATQgRAmgkAQQgPAGgRACQgLAAgDgDAlzAqQgagCAJAXQACAFAEAHAl3B6QANANgNAFAlvDGQgrgagOAiQAUAHALgLAgmhoQgEgdgdgjQgXgdgmgFQgIgBgIgBAiLhNQgwAJAWAnQAVgBAFgJAhvDwQAAAAgBAAQAAAEABADQAFAGASgKQgMABgLgEgAiLBwQgeAIAWAUABiA6QgRAEAKANQAKAMAJgPQAGgMAAgJQgRgHgHgOQAWAHACAOAg5CSQASgNgKgVQgUAIgCAIQgCAJAQAJgAHEhDQAIAMACANQAAAEAAAFAE+B2QALgaAKAAQAHAAAGANQACAFACAHQABAFgGAHQgEAEgCABQgFAEAQgVAGOBGQgGALADAHQADAHAMADAkzAAQAUAbACAiAoXGOQgfgYgaAkQAhANAUgLAxsgLQgjARAbALQANgMgNgFAxsCYQgyAWAzAHQAYAEgFgT");
	this.shape_5.setTransform(109.6,168.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4},{t:this.shape}]},2).to({state:[{t:this.shape_5}]},2).wait(2));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AwCASQAcgTAfgIQAhgIAjgKQADAAADgBQAfAGAfgUQAagRAdAKQAcAJARgTQADgEAEgDQAWgUAkAEQAWADAWgCQAmgEAkgLQAKgCAJgEQAbgIAZgJQAkgMAjgBQAXAAAWgEQAPgDAOgFQAkgLAnAGQAlAGAlgMQAhgMAjgMQAhgMAnAFQAgAEAgAAQAnAAAngEQAQgCANgLQAegZAlgIQAVgEARANQABAAABABQAmANAfgQQAagOAYgLQAhgOAkgGQAMgCAMgBQAcgCAZAFQAoAJAegYQAAAAABgBQAegXAoAHQAlAGAngCQAcgCAZgRQAfgWAlgMQAogMAlALQAgAKASAcQAUAgAoAJQAoAJgUAqQgJAUAKAOQAWAegeAWQAAACAAABQgCANAAAIQgYAVgaAaQgTATgtgFQgpgEglAKQgkAJglAKQgmAKgZAUQgcAYglAFQgbAEgcgGQgJgCgIAAQgeABgRAcQgWAkgggVQgIgFgGABQgBABgCAAQgPABgSgEQgtgLgUAaQgdAlglgVQghgTggAbQgcAXggAQQgHAEgHgBQghgHgjACQgDgDgEgLQgRAJgSAMQggAVglgEQglgDgogBQggAAgcAKQAAAAgBAAQgGACgGACQghAOgoAWQgQgIgbAFQglAGgfAeQgigPglAPQgiANglAKQgZAGgcgBQgxgBgOAdQgHAOgXgCQgLgBgMAAQgOABgPACQgLACgKACQgaAFgWAIQgdAKgiAHAQOiIQABgEAAgGAwCASQAMgDAEgDQAZgSAPAaQAJAQASAEQAlAIAcAVQAWAQgLAkQgEANACALQACAHAEAGQABACACADQABAAABABQAWAXAVAfQAKAOABAOQACAUgPASQgOARACAUQACATgIAKQgDADgEACQgMAGgWgGQgbgGgSgQQgVgTglgQQgsgSARgmQAJgUADgWQADgPgBgQQAAgDAAgEQgEgfgVgWQgBgCgCgCQgVgWgNglQANgQAPgMgAveBVQAAgzArAfQAaATAQAZQABABABACQABACACACQAIAPAFAQQABABAAABQADALABALQABACAAACQABAFAAAFQAAACAAACQABAngVAcQgFAHgFAEAugCpQAAgKgCgIQgCgKgGgHQgJgLgUADQgDAVADAMQAAAAABABQADAMAKADQAMgogTAUAvIDLQAQAuAggkQAMgMAAgM");
	this.shape_6.setTransform(120.8,167.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("AtsFjQgbgGgSgQQgVgTglgQQgsgSARgmQAJgUADgWQADgPgBgQIAAgHQgEgfgVgWIgDgEQgVgWgNglQANgQAPgMQAcgTAfgIIBEgSIAGgBQAfAGAfgUQAagRAdAKQAcAJARgTIAHgHQAWgUAkAEQAWADAWgCQAmgEAkgLIATgGIA0gRQAkgMAjgBQAXAAAWgEQAPgDAOgFQAkgLAnAGQAlAGAlgMIBEgYQAhgMAnAFQAgAEAgAAQAnAAAngEQAQgCANgLQAegZAlgIQAVgEARANIACABQAmANAfgQQAagOAYgLQAhgOAkgGIAYgDQAcgCAZAFQAoAJAegYIABgBQAegXAoAHQAlAGAngCQAcgCAZgRQAfgWAlgMQAogMAlALQAgAKASAcQAUAgAoAJQAoAJgUAqQgJAUAKAOQAWAegeAWIABgKIgBAKIAAADIgCAVQgYAVgaAaQgTATgtgFQgpgEglAKIhJATQgmAKgZAUQgcAYglAFQgbAEgcgGQgJgCgIAAQgeABgRAcQgWAkgggVQgIgFgGABIgDABQgPABgSgEQgtgLgUAaQgdAlglgVQghgTggAbQgcAXggAQQgHAEgHgBQghgHgjACQgDgDgEgLQgRAJgSAMQggAVglgEQglgDgogBQggAAgcAKIgBAAIgMAEQghAOgoAWQgQgIgbAFQglAGgfAeQgigPglAPQgiANglAKQgZAGgcgBQgxgBgOAdQgHAOgXgCIgXgBQgOABgPACIgVAEQgaAFgWAIQgdAKgiAHQAGgHAAgNIAAgJIgBgFQAAgRANgPQAOgQgBgSIAAgEQgBgOgKgOQgVgfgWgXIgCgBIgDgFQgEgGgCgHIgBgIQAAgIADgIQAEgMAAgJQAAgUgPgLQgcgVglgIQgSgEgJgQIgBgBQgIgPgMAAIAAAAIAAAAQgJAAgKAIIAAAAQgEADgMADQAMgDAEgDIAAAAQAKgIAJAAIAAAAIAAAAQAMAAAIAPIABABQAJAQASAEQAlAIAcAVQAPALAAAUQAAAJgEAMQgDAIAAAIIABAIQACAHAEAGIADAFIACABQAWAXAVAfQAKAOABAOIAAAEQABASgOAQQgNAPAAARIABAFIAAAJQAAANgGAHQgDADgEACQgGADgJAAQgIAAgLgDgAuEEAQgFAHgFAEQAFgEAFgHQAUgbAAglIAAgDIAAgEIgBgKIAAAOIABAAIAAADQAAAlgUAbgAuwDlQAJAAAMgMIADgEQAMgMAAgMQAAAMgMAMIgDAEQgMAMgJAAIgBAAIAAAAQgNAAgJgWIAAgCIgBgBIAAgBIAAABIABABIAAACQAJAWANAAIAAAAIABAAgAvHCfIABABQADAMAKADIAAgBQAIgZgGAAIAAAAIAAAAQgDAAgFAGIgBAAIABAAQAFgGADAAIAAAAIAAAAQAGAAgIAZIAAABQgKgDgDgMIgBgBQgBgHAAgJIABgRIABAAIACAAIABAAIADgBIAAAAIAAAAQAOABAIAIIAAAAQAGAHACAKQACAIAAAKQAAgKgCgIQgCgKgGgHIAAAAQgIgIgOgBIAAAAIAAAAIgDABIgBAAIgCAAIgBAAIgBARQAAAJABAHgAuzBBQAaATAQAZIACADIADAEQAIAPAFAQIABACQADALABALIABAEIgBgEQgBgLgDgLIgBgCQgFgQgIgPIgDgEIgCgDQgQgZgagTIgEgDQgNgIgJAAIAAAAIAAAAQgRAAAAAfQAAgfARAAIAAAAIAAAAQAJAAANAIIAEADgAQOiIIAAAAg");
	this.shape_7.setTransform(120.8,167.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0,243.7,213.9);


(lib.anim_dunes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mick
	this.instance = new lib.anim_mick();
	this.instance.parent = this;
	this.instance.setTransform(68.3,206.5,0.46,0.46,0,0,0,122.3,106.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:157.2,y:222.5},59).wait(41));

	// slim
	this.instance_1 = new lib.slim("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25.2,31.6,0.418,0.418,0,0,0,90.8,75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:69.9,y:66.9},59).wait(41));

	// sam
	this.instance_2 = new lib.animsamrolls();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.9,105.5,1,1,0,0,0,20.9,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:90.8,y:137.5},59).wait(41));

	// girls
	this.instance_3 = new lib.anim_sled_girls();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130.1,112.3,1.379,1.379,0,0,0,36.6,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:190,y:147.5},29).to({x:278.2,y:188.9},30).wait(41));

	// buffy
	this.instance_4 = new lib.animbuffywheels();
	this.instance_4.parent = this;
	this.instance_4.setTransform(134.7,72.7,0.429,0.429);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:208.1,y:98},19).to({x:247.7,y:108.5},40).wait(41));

	// pro
	this.instance_5 = new lib.anim_pro();
	this.instance_5.parent = this;
	this.instance_5.setTransform(88.8,64,0.371,0.371,0,0,0,88.7,88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:181.1,y:91.4},59).wait(41));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(0.1,1,1).p("AFwhfQAFgCAFgCQAAAAAAAAQARgGAWgEAG+iWQgdAFgUAPQgNAKgJAPAGSipQgPAIgNAJQgGAEgGAEQgYARgZAOQgCABgCABQgEACgDACAEYhyQACgIACgIQACgFABgFQAAgBAAgBQADgLADgLQADgMACgMQACgIACgHAEkiAQABgBACgBQABAAABgBQAPgLAOgOQANgNAMgRAAjCfQAcgdAtgNQAhgKAfgHAAUCUQAVgjAjgZQAPgLARgIAmfBeQALgLAMgKQAKgHALgHAmhBEQAEgKAGgJAm8A/QABgOACgNAmhBFQgHAPgDAQAm8A/QgCAYABAXAAWjPQgIAPgGAQQgEAMgCALQgCALgBAMAgQiOQgBgHgBgHQgBgHAAgGQAAgBAAAAQgBgPgBgPAAPg8QgbgZgVgiQgBAAAAAAQgNgVgHgWQgEgPgCgPAioBoQACgEABgFQAAgBAAgDQACgGAAgGQADgbgFgaQgCgJgGgIAjADBQAHgNAPgHAjgC3QAEgSAIgRAj5DQQgDgIgDgIQgNgdgSgXAAKCkQgFgPgGgQQgSgmgCgoAAMCTIAAgBQAAAAABgBQAHgrAfghAiQBcQABgCABgCQABgBABgBQAAAAABgBQATgaAagSAiUBiQABgCACgDQAAAAABgBQAAAAAAAAAhFAxQgnAQgeAaQgBACgFgBAiBALQgUAggDAl");
	this.shape.setTransform(399.9,71.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("EAlTgQkIAAlfMhKvAAAIAAFyMAAAAmVMBKvAAAIAA9PIAAjAgAOgwnQC4ACC7ANQC3AOCwAaQC+AdC7gVQC0gUCsgoEAlTgKLQiJAKhmhaQg5gzhDghQgMgGgNgGQgRgHgRgGQgSgHgTgGQgQgEgRgEQgPgDgPgDQiIgah3AUQgOADgOADIAAAAQgRAEgRAFQgVAFgUAIQggALggANQhoArhjA8EAlTgKLQAFAAAFgBAOgwnQB9BLB8BFQB8BGCOAcACjwXQAegKAegJQCkguC6gXQDEgYCLBUQAKAGAKAGASgp0QgNgDgOgCQAAAAAAAAASgpzQAAgBAAAAEAlTgHLQh/AriMASQjCAZibgyQhUgchQgdQAAgBAAAAIgBAAQgIgDgJgDQAAgBgBAAQhIgchGgeQAAAAgBAAQgHgDgHgDQgCgBgCgBQgFgCgGgCQAAgBgBAAIAAAAQgIgDgIgDQgBAAAAAAQghgNghgLQgBAAgBgBIAAAAQg6gTg+gOQgNgCgNgDASFp5QgOgDgOgCQjJghipA8QiwBAizhEQiXg5hahtQhfhzjcAaQgIABgIABAZPolIAAAAQgCAGAAAHQAAABAAAAQAAACgBABACjwXQiDAthpBIQgoAbgqAbQgHAEgGAEQitASirgZQizgZh6hHQgzgeg1gaQgCgBgCgBQACAAADAAQC+AJDBgCQDIgCCsgYQCfgVClAWgEglcgQRQBbgaBqgFQC+gJDAAAQDDABCqghQC7gjCkAxQBcAcBYAq");
	this.shape_1.setTransform(239.6,141.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EEFBFF","#11C9F7"],[0,1],0,22,0,-22).s().p("AZ/DBQiwgai3gNQi7gOi4gCIgUgMQiLhTjEAXQi6AXikAvQgeAIgeAKQimgWieAVQitAYjHACQjBACi+gIIgFgBQhYgphcgdQikgxi7AjQiqAhjEgBQi/AAi+AJQhqAGhbAaIAAlyMBKvAAAIAAFfQisAni0AUQhPAJhPAAQhtAAhugRg");
	this.shape_2.setTransform(239.2,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8CC67").s().p("AWFB9Qg5gyhCgiIgZgLQAUgPAdgFQgdAFgUAPIgjgOIAMgIQANgJAPgIQgPAIgNAJIgMAIIgkgMQANgNAMgQQgMAQgNANIghgIIAFgYIADgOIgDAOIgFAYIgegGQiIgZh3AUQAFgQAJgPQgJAPgFAQIgcAFIgCgeIACAeIgBAAIgiAJQgFgPgBgQQABAQAFAPQgVAFgUAHQggALggAOQiOgch8hFQh7hGh9hLQC3ACC7AOQC4ANCwAbQC+AcC6gVQC0gUCsgnIAAGYIgaABQh5AAhchSgAzegRQi0gZh6hIQgzgeg0gZIABgCQC+AIDAgCQDIgCCtgXQCfgWCmAXQiDAshqBIQgoAbgrAbIgMAIQhKAIhKAAQhjAAhhgOgANsgPIAAAAg");
	this.shape_3.setTransform(313.1,55.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFD98").s().p("AKPFWQhTgchQgeIgBAAIAAAAIgRgGIgBgBQhJgchFgeIgBAAIgOgGIgEgCIgLgEIgBgBIAAAAIgRgGIAAgBQghgMghgLIgCgBQg7gTg+gOQAKgIALgGQgLAGgKAIIgZgFIAKgTIgKATIgbgFIADgbIgDAbIgcgFQjJghioA8QixBAiyhEQiYg6hZhrQhfhzjdAaIgEgGQArgbAogbQBqhICDgtQAdgKAfgJQCkguC6gXQDEgYCLBUIAUAMQB9BKB7BGQB7BGCPAcQAfgNAhgMQAUgHAUgGIAjgIIAAABIABANIACAOIgCgOIgBgNIAAgBIAcgGQB3gUCIAaIAeAGIgGAWIAAACIgDAKIgEAQIAEgQIAIACIADgCIACgBQAPgLAOgOIAkAMIAjAOQgNAKgJAPIADAGIgKAEIAKgEIAAAAQARgGAWgEIAFgJQBDAhA4AyQBmBaCKgKIAADAQh/AriMASQhAAIg8AAQh6AAhoghgAHlDJQAHARAFAPQgFgPgHgRQgSglgCgoQACAoASAlgAH0DWIgBABIAAABIAAAAIgBANIgBABIAAADIAAgDIABgBIABgNIAIABIgHgDQAHgrAfghQgfAhgHArIAAAAgAJTC6QgtANgcAdQAcgdAtgNQAhgKAfgHQgfAHghAKgAIzCcQgjAagVAjQAVgjAjgaQAPgKARgIQgRAIgPAKgAFDCUIgCAMIAAAEIgDAJIADgJIAAgEIACgMIACgTQAAgRgEgRQgCgJgGgIQAGAIACAJQAEARAAARIgCATgAFbCaIgBABIgCACIgCAEIAAAAIgBABIgDAFIADgFIABgBIAAAAIADAAIAAAAIADAAIAAgBQAegaAngQQgnAQgeAaIAAABIgDAAIAAAAIgDAAIACgEIACgCIABgBQATgaAagSQgaASgTAagAFOCVQADglAUggQgUAggDAlgAB9AvQBjg7BogrQhoArhjA7gAHEgyIABAAQAVAiAcAYQgcgYgVgiIgBAAQgNgVgHgWQAHAWANAVgAMggsIgEACIgHAEIAHgEIAEgCQAZgOAYgRQgYARgZAOgAHphUIgEAXIAEgXIAGgXIgGAXg");
	this.shape_4.setTransform(351.2,64.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("EglXAT2MAAAgmUQBbgaBqgGQC+gJC/AAQDEABCqghQC7gjCkAxQBcAdBYApIAFABIgBABIgEgCIAEACQA0AaA0AeQB5BHC0AaQCrAYCtgSIANgIIADAGIgQACIAQgCQDcgaBfBzQBZBtCYA5QCyBECxhAQCog8DKAhIAcAGIAbAFIAaAFQgNAJgLALQALgLANgJQA9AOA7ASIAAABIACAAQAhALAhANIABAAIAQAGIAAAAIABABIALAEIAEACIAOAGIABAAQBFAfBJAbIABABIARAGIABAAIAAABQBQAeBTAbQCbAyDDgZQCMgSB/grIAAdPgAVHqGIAHAQIgHgQQgNgdgSgWQASAWANAdgAWGqFQAHgMAPgIQgPAIgHAMgAVmqPQAEgSAIgRQgIARgEASgASKrXIgBgTIABgcIgBAcIABATgASbriQADgQAHgPQgHAPgDAQgAZUqzIAAAAIAAAAIAAgCIAHADgAU3rbIAAgBIACABIgCAAgAS/r8gAfBuqIgDgGQAJgOANgKIAZALIgFAJQgWAFgRAFIAAAAIAAAAgAdkvJIACgKIAAgCIAGgWIAhAJQgNANgQALIgCABIgDACgAYzvxIAAAAIAAABg");
	this.shape_5.setTransform(239.2,155.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.1,-1,544.5,284.5);


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
		var bgm = createjs.Sound.play('bgmDir',{loop:-1});
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
		
		 window.open ("direct_scene3.html","_self");
		}
		
		function openPrev(){
		
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
(lib.direct_scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2repeat:124});

	// timeline functions:
	this.frame_0 = function() {
		playSound("thedirectobjectanswerswhoorwhataftertheverb");
		playSound("Flying");
	}
	this.frame_35 = function() {
		playSound("right_answer");
	}
	this.frame_67 = function() {
		playSound("thegirlsracebuffy");
	}
	this.frame_105 = function() {
		playSound("right_answer");
	}
	this.frame_123 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_139 = function() {
		this.gotoAndPlay("scene2repeat");
		this.stopAllSounds();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(32).call(this.frame_67).wait(38).call(this.frame_105).wait(18).call(this.frame_123).wait(16).call(this.frame_139).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAlYgWDMhKvAAAMAAAAsHMBKvAAAg");
	this.shape.setTransform(278.1,202.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(140));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAGQgDgCAAgEQAAgDADgCQADgCADgBQAFABADACQADACAAADQAAAEgDACQgEACgEABQgDgBgDgCg");
	this.shape_1.setTransform(466,52.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgeAwQgDgDAAgEIAAhCIgBgJIABgIQABgGAKgBIAQgBQALAAALAHQANAJAAAOQAAAHgDAFQgCAEgFAEQAGADAFAGQAFAHAAAGQAAAJgJAHQgGAFgHADQgOAFgXAAQgDAAgDgDgAgQAiQALgBAMgDQALgDAAgEQgBgFgHgEQgFgDgFAAIgQgBgAgQgUIAAAOIAJAAQASgBAAgNQAAgFgGgEQgFgEgGAAIgKAAg");
	this.shape_2.setTransform(459.3,47.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgyQAAgFACgDQAEgEAFAAIAQABQAJACAFADQAbANAAAVQAAAIgFAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgEAAQgDAAgDgDgAgTACIADAAQAPAAAHgDIAGgEIADgEQAAgIgJgGQgIgGgJgBIgIgBg");
	this.shape_3.setTransform(451,47.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgdAwQgGgGgBgUIACgZIABgZIAAgHIgBgGQAAgKAJAAQADAAABACIAPgDIALgBQAQAAAKAEQAGACAAAGQgBADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMACACQABABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_4.setTransform(442.8,47.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgNAtQgIgSgJgiIgGgRQgDgMAAgFQAAgEADgCQACgCAEAAQAGAAACAGIADALIAGAVIAJAfIAPgmIAFgPQAEgJAEgFQADgDAEAAQADAAAEACQACADAAAEIgBAFQgEAEgDAHIgEANIgRArIgIAPQgDAFgEAAQgGAAgDgGg");
	this.shape_5.setTransform(434.3,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAbQgLgIABgOQgBgPAJgLQAKgNAOAAQAMAAAGAEQAKAFAAAKQAAAHgHAFIgPAGIgUAKQADADAEACQAFABAEAAQAJAAAFgDQAFgDAEAAQAGAAABAGQAAAHgLAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgDAIIAOgHIAOgHQgFgCgHAAQgEAAgFAEg");
	this.shape_6.setTransform(420.5,49.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAuIgDgOIgBgPIAAgFIAAgEIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgHAAgFAFQgDADgFAJQAAAXgCAFQgDAFgFAAQgEAAgCgCQgDgCAAgEIABgDIAAgRIABgqIAAgCIAAgKIgBgGIAAgGQAAgDACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgCAGAAQALAAAEAGQAEAEABAJIAAAPIACANIACAMIAAACQAAAEgCACQgDADgEAAQgGAAgCgHg");
	this.shape_7.setTransform(413.3,47.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_8.setTransform(406.3,48.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAhQgBgCAAgEIAHgpIABgJIACgGIADgDQACgCADAAQAHAAABAIQALgJAOAAQAKAAAAAMIAAAFIgBAEQAAAEgDADQgDADgEAAQgHAAAAgGIAAgCIABgGQgOACgIAMIgFAfQgBAEgCACQgDADgEAAQgEAAgCgDg");
	this.shape_9.setTransform(395,49.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAcQgIgHAAgLQAAgOALgPQALgPASAAQAMAAAGAEQAHAEAAAIQAAAHgFAEQgGAFgPAFIgVAKQAFAGAKAAQAIAAAHgDQAGgDADAAQAFAAAAAEQAAAIgKAFQgKAFgLAAQgOAAgJgHgAgNgCIAOgHIAPgHQgEgCgHAAQgLAAgHAQg");
	this.shape_10.setTransform(387.9,49.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRAYQAAgMAGgSQgKgBgDgCQgCgCAAgEQAAgEACgDQADgCAEAAIAKABIABgNQABgDACgDQADgCADAAQAHAAAAALIgBAJIADAAIAJABQAGAAAAAHQAAAEgCADQgDACgEAAIgFAAIgIAAIAAACIgBACQgEAQAAAIQAAAIACAAQADAAADgEQAEgDACAAQADAAADACQACACAAAEQAAAGgHAFQgIAEgHAAQgRAAAAgVg");
	this.shape_11.setTransform(381.7,48.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYA2QgDgDABgDIAAgCQADgJABgIIAFgfIgEABIgEAAQgDAAgDgCQgCgCABgEQABgGAGgCIAMgBIABgHQAEgOAHgHQAIgJAPAAQAMAAgBAJQgCAIgKAAQgIAAgEAFQgEAEgCAJIAAACIAMgBQAMAAgBAIQgCAIgMAAIgMAAIgCARIgDARQgCALgCAHQgDAHgHAAQgDAAgCgCg");
	this.shape_12.setTransform(375.8,47.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAMAdQgMAGgGAAQgaAAAAgYQAAgTAOgNQAOgNAQAAQAGAAAIAEQAHADAAAFQAAADgCACQgCAFgCAKIgBANIAAAEIACAGIACAGQAAADgDADQgDACgEAAQgDAAgFgGgAgGgLQgIAIAAALQAAAMAJAAQAHAAAHgGQABgXAEgJIgEgBQgJAAgHAIg");
	this.shape_13.setTransform(367.8,49.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAxQgDgDAAgEQAAgEADgEQADgEAFAAQAEAAACADQACADAAAEQAAADgCAEQgCAEgFAAQgEAAgDgCgAgOAWQgDgDAAgEQAAgFAIgGIAPgJQAIgHAAgEQAAgGgGgGQgGgFgGAAQgDAAgGAEQgGAEgDAAQgDAAgDgDQgCgDAAgDQAAgGALgGQAJgEAGAAQANAAALAKQALAKAAAOQAAANgNAIIgKAIQgHAEgCAEQgDAEgEgBQgDAAgDgCg");
	this.shape_14.setTransform(354.8,47.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_15.setTransform(346.7,47.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AAWAkQgDgIgDgJIgPABIgOACIgLAVQgCAFgFgBQgEAAgDgCQgCgDAAgDQAAgDAJgTIgBgDQAAgEAGgCIAUgfQAPgYAEAAQAHAAACAJIAEAUIAKApIADAIQACAFAAADQAAAEgDACQgCADgEAAQgFgBgFgLgAgEAGIAIgBIAJgBIgFgUIgMAWg");
	this.shape_16.setTransform(337.3,47.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AAbAwQgDgCAAgEIAAgOIAAgNIAAgHIgYADIgYAFIgBANIgBAOQAAADgCACQgDADgEAAQgDAAgDgDQgCgCAAgEIABgSIABgTIAAgXIABgYQAAgDACgDQADgCADAAQAEAAADADQACACAAADIAAAPIgBAOIAAAHIAAAGIAYgFQANgCALgBIAAgXQABgFACgGQAEgIAFAAQADAAACACQADADAAADIAAACIgBAIIgBAGIAAAFIgBASIAAARIAAAOIABAOQAAAEgCACQgDADgDAAQgEAAgDgDg");
	this.shape_17.setTransform(327.7,47.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AANAxQgDgBgBgFQgDgHAAgFIgHgnQgEALgFALQgHAPgCAJIAAACQAAAEgDADQgDACgEAAQgFAAgDgCQgDgDAAgEIgCgIIgHgdIgOgqIgBgDQAAgEADgDQADgBAEAAQAEAAADADIAEAJQAGARAIAiQAFgMAFgQIAHgTQAHgOAFgBQAGABADAGQACAEABAIIACANQABAKAHAdIASgtIADgLQACgIADgEQADgEAFAAQAEgBACADQADADAAADIgCAHIgDAGIgEAMIgLAaIgMAbIgEALQgDAEgHAAQgDAAgDgCg");
	this.shape_18.setTransform(315.9,47.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAhQgCgCAAgEIAAgoIAAgGIAAgGQAAgEACgCQADgDADAAQAIAAABAIQAKgJANAAQANAAAAARIAAAEQgBAKgHAAQgJAAABgIIgBgGQgOACgFAMIAAAfQAAAEgDACQgDADgDAAQgEAAgCgDg");
	this.shape_19.setTransform(300.5,49.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_20.setTransform(293.7,49.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgSAxQgDgDAAgEQAAgEADgEQADgEAFAAQAEAAACADQACADAAAEQAAADgCAEQgCAEgFAAQgEAAgDgCgAgOAWQgDgDAAgEQAAgFAIgGIAPgJQAIgHAAgEQAAgGgGgGQgGgFgGAAQgDAAgGAEQgGAEgDAAQgDAAgDgDQgCgDAAgDQAAgGALgGQAJgEAGAAQANAAALAKQALAKAAAOQAAANgNAIIgKAIQgHAEgCAEQgDAEgEgBQgDAAgDgCg");
	this.shape_21.setTransform(281,47.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AAiAqIgDgQIgHggIgJAaIgEAMIgFALQgEAGgEAAQgGAAgEgHIgDgMIgJghIgIAeIgDAOQgCAJgHAAQgEAAgDgDQgCgDAAgDQAAgKAFgPIAHgYIADgTQADgNAEgFQADgFAFAAQAFABAEAFQACAGADARQACAQAGATQAGgSAHgXIADgPQAEgIAGgBQAIAAADALIADAQQADAaAHATIAFAWQAAAEgDACQgDACgEABQgHgBgDgJg");
	this.shape_22.setTransform(271.7,47.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AghAnQgOgMAAgSQAAgUAOgSQAOgUAXAAQAWAAALAKQALAKAAAUQAAAVgMARQgPAVgWAAQgTAAgNgLgAgUgSQgJAMAAAPQAAAKAIAHQAIAGAMABQANAAAJgOQAJgNAAgPQAAgNgGgFQgGgFgOAAQgNAAgLAOg");
	this.shape_23.setTransform(260.7,47.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009900").s().p("AAbAwQgDgCAAgEIAAgOIAAgNIAAgHIgYADIgYAFIgBANIgBAOQAAADgCACQgDADgEAAQgDAAgDgDQgCgCAAgEIABgSIABgTIAAgXIABgYQAAgDACgDQADgCADAAQAEAAADADQACACAAADIAAAPIgBAOIAAAHIAAAGIAYgFQANgCALgBIAAgXQABgFACgGQAEgIAFAAQADAAACACQADADAAADIAAACIgBAIIgBAGIAAAFIgBASIAAARIAAAOIABAOQAAAEgCACQgDADgDAAQgEAAgDgDg");
	this.shape_24.setTransform(250.6,47.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AANAxQgDgBgBgFQgDgHAAgFIgHgnQgEALgFALQgHAPgCAJIAAACQAAAEgDADQgDACgEAAQgFAAgDgCQgDgDAAgEIgCgIIgHgdIgOgqIgBgDQAAgEADgDQADgBAEAAQAEAAADADIAEAJQAGARAIAiQAFgMAFgQIAHgTQAHgOAFgBQAGABADAGQACAEABAIIACANQABAKAHAdIASgtIADgLQACgIADgEQADgEAFAAQAEgBACADQADADAAADIgCAHIgDAGIgEAMIgLAaIgMAbIgEALQgDAEgHAAQgDAAgDgCg");
	this.shape_25.setTransform(238.7,47.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAhQgJgEAAgHQAAgGAHAAIAJACIAIACQALAAABgFQAAgEgJgEQgNgFgDgCQgJgGAAgJQAAgNAOgEQAHgDAPAAQAHAAADACQAEACABAGQgBALgGAAQgGAAgCgFIgEAAQgPAAAAAEQAAACAIAEIASAJQAJAGAAAIQAAALgKAGQgJAFgLAAQgIAAgHgDg");
	this.shape_26.setTransform(223.1,49.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAhQgCgCAAgEIAAgoIAAgGIAAgGQAAgEACgCQACgDAEAAQAIAAABAIQAKgJAOAAQAMAAAAARIAAAEQAAAKgJAAQgHAAgBgIIAAgGQgOACgFAMIAAAfQgBAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_27.setTransform(217,49.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgVAbQgLgIAAgOQAAgPAJgLQAJgNAPAAQALAAAHAEQAKAFAAAKQAAAHgIAFIgOAGIgVAKQADADAFACQAEABAFAAQAIAAAHgDQAEgDAEAAQAHAAgBAGQABAHgLAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgDAIIAPgHIAMgHQgEgCgHAAQgEAAgFAEg");
	this.shape_28.setTransform(210,49.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AACAUQgCgFgBgQIgCADIgJAYQgBADgCACQgDAEgFAAQgDABgDgGQgEgGgCgIIgGgiIgBgJQAAgDADgCQACgDAEAAQAHAAABAHIACAJIABAJIACAPIALgfQADgJAGAAQAHAAACAKIAEAQIADARIAKglQABgGAHAAQADAAADADQADACAAADIgBACIgNAtQgCAFgEAHQgDADgFAAQgIAAgFgPg");
	this.shape_29.setTransform(202.1,49.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRAhQgKgEAAgHQAAgGAIAAIAIACIAJACQALAAABgFQAAgEgJgEQgNgFgDgCQgJgGAAgJQAAgNANgEQAJgDAPAAQAGAAADACQAFACgBAGQABALgHAAQgGAAgBgFIgGAAQgOAAAAAEQAAACAJAEIAQAJQAJAGAAAIQAAALgKAGQgIAFgLAAQgIAAgHgDg");
	this.shape_30.setTransform(194.3,49.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AANAdIgCgNIgBgNIAAgEIAAgHIAAgBIABgDQAAgGgDABQgFgBgFAIQgEAGgEAKIAAAFIAAAGIgBAGIAAAFQgBAEgCADQgCACgEAAQgEAAgDgCQgCgDAAgEIAAgFIAAgGIAAgRIABgQIAAgFIgBgGQAAgEADgDQADgCADAAQAJAAABAKIAAABQAJgKAJAAQAMAAAEAKQADAHAAANIAAAFIAAADIACANIACANQAAAEgDACQgDACgDAAQgJAAAAgIg");
	this.shape_31.setTransform(187.9,49.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAPAdIgKAFIgHABQgPAAgIgIQgHgIAAgRQAAgOALgLQALgLAPAAQAGAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAHIAAAJQAAAKACAGIADAGIACAGQAAADgDADQgCACgDAAQgDAAgHgGgAgIgMQgHAHAAAIQAAAJADAEQADAEAHAAQADAAADgCQAEgBADgCIgCgWIAAgEIABgHIgCgBIgCAAQgIABgGAGg");
	this.shape_32.setTransform(180.9,49.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009900").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_33.setTransform(167.1,47.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009900").s().p("AgcAnQgJgKAAgOQAAgUATgXQAQgSAPAAIAFAAIAEAAQADgCAEAAQAGAAACAIIABALQAAAEgCADQgDADgEAAQgGAAgDgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgJAMQgPARAAAPQAAAHAEAFQAFAFAHAAQAFAAAGgDIAKgGQAFgEACAAQAEAAADADQACADAAADQAAADgDADQgRAPgRAAQgOAAgLgKg");
	this.shape_34.setTransform(158.6,47.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009900").s().p("AgcAwQgIgGABgUIABgZIABgZIgBgHIAAgGQgBgKAKAAQACAAACACIAOgDIAMgBQAQAAAKAEQAFACABAGQAAADgCACQgDADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADADAAADQAAAHgIABIgPABIgaADIgBANQAAAMACACQAAABAIAAIAKAAIAMgBIAEAAIAEAAQADAAADACQADACAAAEQAAAHgIACQgGABgSAAQgWAAgFgGg");
	this.shape_35.setTransform(150.6,47.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009900").s().p("AgbAsQgNgJAAgNQAAgJAJAAQAJAAAAAJQAAAEAHAEQAGAFAGAAQACAAABgJIAAgUIABgjIAAgEIgBAAIgHAAIgHAAQgEAAgDgCQgDgDAAgEQAAgIAMAAIAGAAIAGAAIAMAAIAMgBQARAAAAAKQAAADgDACQgCADgEAAIgEAAIgEAAIgFAAIAAAEQAAAtgGAVQgFAPgLAAQgMAAgMgIg");
	this.shape_36.setTransform(142.1,47.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009900").s().p("AgeAwQgDgDAAgEIAAhCIgBgJIABgIQABgGAKgBIAQgBQALAAALAHQANAJAAAOQAAAHgDAFQgCAEgFAEQAGADAFAGQAFAHAAAGQAAAJgJAHQgGAFgHADQgOAFgXAAQgDAAgDgDgAgQAiQALgBAMgDQALgDAAgEQgBgFgHgEQgFgDgFAAIgQgBgAgQgUIAAAOIAJAAQASgBAAgNQAAgFgGgEQgFgEgGAAIgKAAg");
	this.shape_37.setTransform(133.8,47.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009900").s().p("AghAnQgOgMAAgSQAAgUAOgSQAOgUAXAAQAWAAALAKQALAKAAAUQAAAVgMARQgPAVgWAAQgTAAgNgLgAgUgSQgJAMAAAPQAAAKAIAHQAIAGAMABQANAAAJgOQAJgNAAgPQAAgNgGgFQgGgFgOAAQgNAAgLAOg");
	this.shape_38.setTransform(124.3,47.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009900").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_39.setTransform(109,47.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009900").s().p("AgcAnQgJgKAAgOQAAgUATgXQAPgSAQAAIAFAAIAEAAQADgCAEAAQAHAAABAIIABALQAAAEgCADQgCADgFAAQgFAAgDgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgJAMQgPARAAAPQAAAHAFAFQAEAFAGAAQAGAAAHgDIAJgGQAFgEACAAQAEAAADADQACADAAADQAAADgDADQgRAPgSAAQgOAAgKgKg");
	this.shape_40.setTransform(100.5,47.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009900").s().p("AgdAwQgHgGAAgUIABgZIACgZIgBgHIgBgGQABgKAIAAQAEAAACACIANgDIAMgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIAMgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgTAAQgVAAgGgGg");
	this.shape_41.setTransform(92.5,47.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009900").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgyQAAgFACgDQAEgEAFAAIAQABQAJACAFADQAbANAAAVQAAAIgFAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgEAAQgDAAgDgDgAgTACIADAAQAPAAAHgDIAGgEIADgEQAAgIgJgGQgIgGgJgBIgIgBg");
	this.shape_42.setTransform(84.3,47.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009900").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_43.setTransform(76.3,47.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009900").s().p("AgTAzQgIgBgEgDQgDAAgDgDQgCgCgBgEIABgTIABgTIgBgUIAAgVQAAgEADgDQAEgEADAAQADAAAIAEIAMAGQASAGAMAMQAQAPAAASQAAALgFAJQgGALgJAGQgLAHgSAAIgKgCgAgVAgIAGADIAGAAQANAAAGgDQAGgEADgGQADgGABgHQAAgPgTgLQgFgEgUgJg");
	this.shape_44.setTransform(68.4,47.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVAbQgLgIAAgOQABgPAIgLQAKgNAPAAQALAAAHAEQAJAFAAAKQAAAHgIAFIgOAGIgVAKQADADAFACQAFABAEAAQAIAAAHgDQAFgDADAAQAGAAAAAGQAAAHgKAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgCAIIANgHIANgHQgEgCgGAAQgGAAgEAEg");
	this.shape_45.setTransform(54.1,49.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAPAuIgDgOIgBgPIAAgFIAAgEIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgHAAgFAFQgDADgFAJQAAAXgCAFQgDAFgFAAQgEAAgCgCQgDgCAAgEIABgDIAAgRIABgqIAAgCIAAgKIgBgGIAAgGQAAgDACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgCAGAAQALAAAEAGQAEAEABAJIAAAPIACANIACAMIAAACQAAAEgCACQgDADgEAAQgGAAgCgHg");
	this.shape_46.setTransform(46.9,47.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_47.setTransform(38.6,47.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.UI}]}).wait(140));

	// Layer 3
	this.instance = new lib.sentence2();
	this.instance.parent = this;
	this.instance.setTransform(273,358,1,1,0,0,0,155.3,16.9);

	this.instance_1 = new lib.Diagramstatement2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(273.3,358.3,1,1,0,0,0,168.2,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},35).to({state:[{t:this.instance}]},34).to({state:[{t:this.instance_1}]},36).wait(35));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglvAWQMAAAgsfMBLfAAAMAAAAsfg");
	mask.setTransform(279.4,203.8);

	// Layer 5
	this.instance_2 = new lib.anim_dunes2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(202.8,197.7,1,1,0,0,0,164.1,135.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '6609D5EF5E101E4E94AF2C7A68244648',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmDir.mp3", id:"bgmDir"},
		{src:"sounds/Flying.mp3", id:"Flying"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/thedirectobjectanswerswhoorwhataftertheverb.mp3", id:"thedirectobjectanswerswhoorwhataftertheverb"},
		{src:"sounds/thegirlsracebuffy.mp3", id:"thegirlsracebuffy"},
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
an.compositions['6609D5EF5E101E4E94AF2C7A68244648'] = {
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