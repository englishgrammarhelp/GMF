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


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(2,1,1).p("EgpKgYDMBSVAAAMAAAAwHMhSVAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#887CFA","#DFE6FD"],[0,1],-263.4,0,263.5,0).s().p("EgpKAYEMAAAgwHMBSVAAAMAAAAwHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-155,529,310);


(lib.textwhoorwhat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgFBAQgDgCAAgEIAAgEIABgEIgBgNIAAgNIgCgiIgDgjIgIAAQgTAAgLgDQgHgCAAgHQAAgDACgDQADgDAEAAIAOACIAOABIAQAAIAPgBIAUABIAUABQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAIgUgBIgUgBIgGAAQAAAMADAcIABAmIABAJIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgDg");
	this.shape.setTransform(86.5,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgkA2QgMgOAAgSQAAgdAZgfQAVgaAUAAIAIABIAGABQADgFAFAAQAGAAACAIIABARQAAAEgCADQgCAEgFgBQgFABgDgHQgDgGgCgBQgCgBgHAAQgNAAgOAUQgVAZAAAXQAAAMAHAIQAIAIAKAAQAIAAAJgFIAQgKQAFgEACAAQAEABADADQACACAAADQAAAFgDACQgXAVgXAAQgSAAgNgOg");
	this.shape_1.setTransform(74.4,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgmBEQgIgIAAgcIAAgNIABgOIgBgEQAAgCABgDIACglIAAgKIgCgJQABgLAIAAQAEAAACADQALgDAJgBIARgCQAVAAANAFQAGADAAAGQAAADgCADQgCADgEAAIgDAAQgPgFgOAAIgOACQgJABgKADIABAJIgCAhIAmgDIAUgCQAEAAADACQADADAAAEQAAAHgJABIgUACIgoADIgBAMIAAALQABATACAEQACACAMAAIAQAAIAQgBIAFAAIAFgBQAKAAAAAJQgBAIgHABQgIACgbAAQgbAAgIgHg");
	this.shape_2.setTransform(63.5,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgjA9QgRgNAAgPQAAgLAJAAQAJAAAAAKQAAAIAKAHQAKAHAJAAQAGAAADgtQABgTAAggIAAgKIgFABIgKgBIgKAAQgEAAgDgCQgCgDAAgEQAAgJAMAAIAJAAIAIAAIAQAAIARgBQAUAAAAAKQAAAEgDADQgCADgEAAIgFgBIgGgBIgKAAIAAALQAABAgJAeQgGAUgNAAQgPAAgPgLg");
	this.shape_3.setTransform(51.7,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgpBDQgCgDAAgDIAAgaIABgjIACgkQAAgJABgQQABgEACgCQAMgDAPAAQAOAAAOAKQARANAAARQAAAXgRAMQAMAFAHAIQAGAGABAIQAAALgMAKQgIAHgIAEQgUAHgeAAQgEAAgEgEgAgaAjIAAASQAWgBAOgGQAGgBAGgGQAFgEABgDQAAgEgMgFQgJgEgHgBIgIgCIgEAAIgDAAIgLgBIAAAUgAgXg0IAAAQIgCAiIAOABQAMgBAJgHQAJgJAAgMQAAgIgJgHQgKgHgJAAIgOAAg");
	this.shape_4.setTransform(40.4,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgmA0QgLgNgDgYQgBgMAAggIAAgUIACgLQACgGAGAAQAIAAAAAOIAAA0QAAA0AkAAQAjAAAAhYIAAgJIAAgHQAAgFACgFQADgFAEAAQAJAAAAAMIAAALIAAALQAABlg0AAQgbAAgNgQg");
	this.shape_5.setTransform(27.7,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgiA9QgRgIAAgNQAAgDADgDQACgCAEAAQAEAAADAEQAFAIADABQAIAGAOgBQANAAALgFQAPgIAAgNQAAgLgMgHQgLgFgOgBQgOAAgKgFQgNgHAAgNQAAgQASgNQARgMARAAQAJAAALADQAOAEAAAFQAAAJgIgBIgMgBIgOgCQgNAAgJAHQgKAGAAAKQAAAHANADQAFACANABQAUABALALQAKAJAAAPQAAAVgTAMQgRALgVAAQgQAAgNgGg");
	this.shape_6.setTransform(14.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.5,0,87.5,29.1);


(lib.textwhat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkQACAVAAAOIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape.setTransform(145.7,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgmA1QgNgNAAgTQAAgdAZgeQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACAKIABARQAAAFgCAEQgDAEgHAAQgIABgDgJQgCgEgCgBQgBAAgGAAQgLAAgNARQgVAXAAAVQAAAJAHAIQAGAGAJAAQAIAAAJgEIANgJQAHgFADAAQAGABADAEQAEADAAAFQAAAFgFAEQgYAUgYAAQgUAAgNgPg");
	this.shape_1.setTransform(133.8,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQgBAFgDAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAVgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIglADIAAASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_2.setTransform(122.8,16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AglA9QgTgNAAgRQAAgOANAAQANAAAAAOQgBAFAKAGQAJAGAHAAQADAAACgMIAAgbQACgTAAgeIAAgGIgCAAIgKAAIgKAAQgFAAgEgDQgEgEABgFQAAgMAPAAIAJAAIAIAAIAQAAIARgBQAXAAABANQAAAFgEADQgEAEgFAAIgFAAIgGAAIgGAAIgBAGQABA+gJAdQgGAVgRAAQgQAAgQgLg");
	this.shape_3.setTransform(111.1,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgrBDQgEgFAAgEIAAhdIAAgMQgBgGABgFQABgIAOgCQAHgCAQAAQAPAAAPALQASAMAAATQAAAKgDAHQgDAFgIAGQAJAEAHAJQAHAIAAAKQAAALgNALQgIAHgKADQgTAIgfAAQgGAAgEgEgAgXAvQAPgBARgFQAPgEAAgFQAAgHgKgFQgHgEgHgBIgXgBgAgXguIAAASIAAATIAMAAQAagCAAgRQAAgGgIgGQgHgGgJgBIgOABg");
	this.shape_4.setTransform(99.6,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AguA2QgTgQAAgZQAAgdASgZQAVgbAfAAQAfAAAPAOQAPAOAAAcQAAAdgRAYQgUAcgfAAQgaAAgSgPgAgbgaQgOASAAAVQAAAOAMAKQALAIAQAAQATAAANgTQALgRAAgVQAAgTgIgHQgIgHgUAAQgSAAgOATg");
	this.shape_5.setTransform(86.4,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_6.setTransform(65.4,16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgmA1QgNgNAAgTQAAgdAZgeQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACAKIABARQAAAFgCAEQgDAEgHAAQgIABgDgJQgCgEgCgBQgBAAgGAAQgLAAgNARQgVAXAAAVQAAAJAHAIQAGAGAJAAQAIAAAJgEIANgJQAHgFADAAQAGABADAEQAEADAAAFQAAAFgFAEQgYAUgYAAQgUAAgNgPg");
	this.shape_7.setTransform(53.5,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AgoBDQgKgIAAgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAIADAAAIQAAAFgCAEQgEAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_8.setTransform(42.5,16.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_9.setTransform(31.1,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AgpBAQgEgEAAgEQAAgFAFgEQADgDAGAAIARgCIAAgnQAAgXABgWIgTAAQgGAAgDgDQgEgDAAgFQAAgGAEgDQADgDAFAAIAagBQAPAAAbAEQALABgBALQABAFgFAEQgDACgFAAIgWgCIgCAqIAAAnIAYAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAIgQAAIgOAAIgRACIgSABQgGAAgDgDg");
	this.shape_10.setTransform(20.2,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AgbBHQgKgCgGgEQgFAAgEgDQgDgEAAgFIABgaIAAgbIAAgcIAAgdQAAgFAFgFQAEgFAGAAQACAAAMAGIAQAHQAZAJASARQAWAVAAAYQAAAPgHAOQgIAOgNAIQgOAKgaAAIgPgCgAgeAtQADACAFABIAKABQASAAAIgFQAIgFAEgJQAFgIAAgKQAAgUgZgQQgIgGgcgLg");
	this.shape_11.setTransform(9.2,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,1,153.6,29.1);


(lib.textverbidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgUA6QgDgCAAgDQAAgFADgEQADgEAEgBQAIAAAAAKQAAAEgCADQgDAEgEAAQgDAAgDgCgAgPAdQgDgDAAgDQAAgGALgHIARgOQAKgIAAgIQAAgIgIgIQgIgHgIAAQgFAAgIAEIgKAGQgDgBgCgCQgCgDAAgDQAAgGAMgGQAKgFAIgBQAOAAANANQAMAMAAAPQABAMgIAIQgEAFgMAIQgMAJgEAGQgCADgEAAQgDAAgCgCg");
	this.shape.setTransform(42.3,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgfA2QgOgGAAgMQAAgEACgCQACgCAEAAQADAAADAEQAEAHADABQAHAFANAAQALAAAKgGQAOgGAAgMQAAgKgMgGQgJgFgNAAQgMAAgJgEQgLgHAAgMQAAgOAQgLQAPgKAPgBQAHABAKACQANADAAAFQAAAIgHgBIgLgBIgMgCQgMAAgIAGQgJAGAAAJQAAAGAMADIAPACQASABAKAKQAJAIAAANQAAATgRALQgPAJgSAAQgPABgMgGg");
	this.shape_1.setTransform(32.9,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgiA8QgHgHAAgZIAAgLIABgMIgBgFQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBABAAIABgiIgBgIIAAgJQgBgIAIgBQADAAADACIASgDIAOgBQATAAALAEQAGADAAAEQAAAEgDACQgBADgEAAIgCgBQgNgDgNAAIgNABIgQADIAAAIIgBAeIAhgDIATgBQADgBADADQACACAAAEQAAAGgHABIgTACIgjACIAAALIgBAJQABARACAEQACACALAAIANAAIAOAAIAFgBIAEgBQAJAAAAAJQAAAGgHACQgHABgXAAQgYgBgIgGg");
	this.shape_2.setTransform(22.6,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgnAwQgQgOAAgWQAAgaAQgWQASgZAZAAQAaAAANAMQANAMAAAaQAAAagPAWQgRAZgaAAQgWAAgPgOgAgagaQgNASAAAUQAAAPALAKQALAJAPAAQATAAAMgUQALgRAAgUQAAgTgJgHQgHgIgUAAQgRAAgNATg");
	this.shape_3.setTransform(11,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgYA/QgIgCgFgDIgBAAQgDgBgDgCQgBgCAAgEIAAgYIABgYIAAgbIgBgcQAAgDADgDQADgEAEAAIAMAGIAPAGQAUAIAQAPQASATAAAVQABANgHANQgGAMgLAIQgMAHgVABIgOgCgAgcgVIAAAWIgCAqIACABQAHAFAKAAQARAAAIgGQAIgFAFgIQADgJAAgJQAAgWgXgPQgIgFgcgNg");
	this.shape_4.setTransform(-0.9,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,0,58,26.3);


(lib.textsubjectidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgUA7QgDgDAAgDQAAgFADgEQACgFAFAAQAHAAAAAKQAAAEgBADQgDAFgEAAQgDAAgDgCgAgPAcQgCgCAAgDQAAgFAKgJIARgMQAKgJAAgHQAAgKgJgHQgIgHgIgBQgEAAgIAGIgJAEQgEABgCgDQgDgCABgEQgBgGAMgGQALgGAHAAQAPAAANANQANAMAAAQQAAALgIAIQgEAFgMAJQgMAIgEAFQgCAEgDAAQgDAAgDgDg");
	this.shape.setTransform(83.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgFA5QgCgCAAgDIAAgEIABgDIgBgMIAAgLIgCgeIgCggIgHAAQgSAAgJgCQgHgCAAgGQAAgEACgCQADgCADAAIANABIANABIAOAAIANgBIASABIASABQADABACACQADACAAADQAAAEgDACQgCADgDgBIgSgBIgSgBIgGAAIADAkIABAiIABAIIAAAJQAAAEgBAFQgCAEgFAAQgCAAgDgCg");
	this.shape_1.setTransform(74.8,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AAbApIgFgZIgVAEIgTAEIgOAeQgCAEgEABQgEgBgCgCQgDgCAAgEQAAgDAMgZQgBgCAAgDQAAgGAIgCIAWgmQASgdAEAAQAGAAADAJIAFAaIALA1IAFAMIACAJQAAAEgDACQgCACgDAAQgHAAgGgSgAgJAFIAcgFIgHgdg");
	this.shape_2.setTransform(62.7,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgwA+QgCgDAAgCIABgZIABgZIAAgMIAAgNIABgTIAAgSQAAgDACgDQADgCADAAQADAAACACQACADAAADIAAASIgBATIAAATIAhgFQAUgEANgBIABghQAAgGACgGQADgJAFAAQADABACACQACACAAADIAAADQgCAEAAAGIAAAHIABAHIgCAXIgBAWIABASIABASQAAAEgCACQgDACgDAAQgDAAgCgCQgCgCAAgEIgBgSIgBgSIAAgLQgNAAgTAEIghAGIgBAUIgBAVQAAACgCADQgDACgDAAQgDAAgCgCg");
	this.shape_3.setTransform(50.9,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AARA9QgDgCAAgEIgFgPIgFgiIgFggQgHAZgIARQgJAVgDAMIABADQABAEgEACQgDACgEAAQgKAAAAgJIgCgKIgIgnIgSg2IAAgDQgBgHAJAAQAEAAAEAFIAFAQIAJAiIAIAiQAIgUAJgaIAIgYQAGgRAGAAQAFAAACAFQAEAHADAZIAEAeIAHAfQALgZAPgqIAEgPQADgJADgFQADgEAFAAQAHAAABAHIgDAIIgEAJIgDAOIgYA3IgLAbQgDAFgFAAQgEAAgDgCg");
	this.shape_4.setTransform(36.7,32.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_5.setTransform(19.6,34.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_6.setTransform(11.2,34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgUA7QgDgDAAgDQAAgFADgEQADgFAEAAQAIAAgBAKQAAAEgCADQgCAFgEAAQgDAAgDgCgAgPAcQgCgCgBgDQAAgFAKgJIASgMQAKgJAAgHQAAgKgJgHQgIgHgHgBQgGAAgHAGIgKAEQgDABgCgDQgCgCgBgEQABgGAMgGQAKgGAIAAQAOAAANANQAMAMAAAQQAAALgHAIQgEAFgMAJQgMAIgDAFQgEAEgDAAQgCAAgDgDg");
	this.shape_7.setTransform(68.1,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgnAwQgQgOAAgWQAAgaAQgWQASgZAZAAQAaAAANAMQANAMAAAaQAAAagPAWQgQAZgaAAQgWAAgQgOgAgagaQgNASAAAUQAAAPALAKQALAJAQAAQASAAAMgUQALgRAAgUQAAgTgJgHQgHgIgUAAQgRAAgNATg");
	this.shape_8.setTransform(57.9,8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AgwA+QgCgDAAgCIABgZIABgZIAAgMIAAgNIABgTIAAgSQAAgDACgDQADgCADAAQADAAACACQACADAAADIAAASIgBATIAAATIAhgFQAUgEANgBIABghQAAgGACgGQADgJAFAAQADABACACQACACAAADIAAADQgCAEAAAGIAAAHIABAHIgCAXIgBAWIABASIABASQAAAEgCACQgDACgDAAQgDAAgCgCQgCgCAAgEIgBgSIgBgSIAAgLQgNAAgTAEIghAGIgBAUIgBAVQAAACgCADQgDACgDAAQgDAAgCgCg");
	this.shape_9.setTransform(45.4,7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AARA9QgDgCAAgEIgFgPIgFgiIgFggQgGAZgJARQgJAVgCAMIAAADQAAAEgDACQgDACgEAAQgKAAAAgJIgCgKIgIgnIgSg2IAAgDQAAgHAIAAQAEAAADAFIAGAQIAJAiIAIAiQAIgUAJgaQAEgRAEgHQAGgRAGAAQAFAAADAFQACAHAEAZIAEAeIAHAfQALgZAQgqIADgPQACgJAEgFQADgEAFAAQAHAAABAHIgDAIIgEAJIgDAOIgYA3IgLAbQgDAFgFAAQgEAAgDgCg");
	this.shape_10.setTransform(31.2,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-6,85,50.6);


(lib.textindirectobjectidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgUA6QgDgCAAgDQAAgFADgEQADgEAEgBQAIAAAAAKQAAAEgDADQgCAEgEAAQgDAAgDgCgAgPAdQgDgDAAgDQABgGAJgHIASgOQAKgIAAgIQAAgIgIgIQgJgHgHAAQgGAAgHAEIgKAGQgDgBgCgCQgDgDAAgDQAAgGANgGQAKgFAIgBQAOAAANANQAMAMAAAPQABAMgIAIQgEAFgMAIQgMAJgDAGQgEADgDAAQgDAAgCgCg");
	this.shape.setTransform(116,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AAwA7QgCgEgCgJIgDgNIgKg2IgQAuIgFAPQgCAJgDAFQgDAGgFAAQgFAAgDgFIgCgIIgDgJQgIgbgFgfIgDAOIgLAoQAAAIgEAOQgCAGgFAAQgEAAgDgDQgBgCAAgEQAAgNAFgTIAJgeIAEgZQAEgRADgFQAEgFAFAAQAEAAADAGQADAHAEAVQADAaAJAdQALgdAIghIACgLQACgHADgEQACgGAGAAQAGAAAEANIADASQAEAjAIAZIAEANIACANQAAAEgCACQgDACgDAAQgEAAgDgEg");
	this.shape_1.setTransform(105.1,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgnAwQgQgOAAgWQAAgaAQgWQASgZAZAAQAaAAANAMQANAMAAAaQAAAagPAWQgQAZgaAAQgWAAgQgOgAgagaQgNASAAAUQAAAPALAKQALAJAQAAQASAAAMgUQALgRAAgUQAAgTgJgHQgHgIgUAAQgRAAgNATg");
	this.shape_2.setTransform(91.7,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgwA+QgCgDAAgDIABgZIABgYIAAgMIAAgNIABgSIAAgTQAAgEACgCQADgCADAAQADAAACACQACACAAAEIAAATIgBASIAAATIAhgGQAUgDANAAIABgiQAAgGACgGQADgIAFAAQADgBACADQACACAAADIAAADQgCADAAAHIAAAHIABAHIgCAXIgBAXIABASIABARQAAAEgCABQgDADgDAAQgDAAgCgDQgCgBAAgEIgBgRIgBgSIAAgMQgNAAgTAEIghAHIgBATIgBAUQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_3.setTransform(79.2,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AARA9QgDgCAAgEIgFgPIgFgiIgFggQgGAZgJARQgJAVgDAMIABADQAAAEgDACQgDACgDAAQgLAAAAgJIgCgKIgIgnIgSg2IAAgDQAAgHAIAAQAEAAADAFIAGAQIAJAiIAIAiQAIgUAJgaQAEgRAEgHQAGgRAGAAQAFAAACAFQADAHAEAZIAEAeIAIAfQAKgZAQgqIADgPQACgJAEgFQADgEAFAAQAHAAABAHIgDAIIgDAJIgEAOIgYA3IgLAbQgDAFgFAAQgEAAgDgCg");
	this.shape_4.setTransform(65,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgUBOQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgDAFgEIAHgGQARgSAAgoQAAgOgEgQQgEgSgJgKIgHgHQgFgGAAgCQAAgDACgCQACgDADAAIAFACQAPALAJAYQAJAWAAAUQAAA7ggATQgEACgCAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_5.setTransform(48.7,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgmAwQgRgOAAgWQAAgaAQgWQASgZAaAAQAaAAAMAMQANAMAAAaQAAAagOAWQgRAZgaAAQgXAAgOgOgAgbgaQgMASAAAUQAAAPALAKQALAJAQAAQARAAANgUQALgRAAgUQAAgTgIgHQgJgIgSAAQgTAAgNATg");
	this.shape_6.setTransform(39.3,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgFA6QgCgCAAgEIAAgDIABgEIgBgLIAAgMIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASAAIASABQADAAACACQADADAAADQAAADgDADQgCACgDABIgSgBIgSgBIgGAAIADAjIABAhIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_7.setTransform(28.1,13.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AAKBOQgggTAAg7QAAgUAJgWQAJgYAPgLIAFgCQACAAADADQACACAAADQAAACgFAGIgHAHQgJAKgEASQgEAQAAAOQAAAoARASIAHAGQAFAEAAADQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgDACgCAAQgDAAgDgCg");
	this.shape_8.setTransform(19.2,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,0,108.6,26.3);


(lib.textdoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag5BZQgGgGAAgHIAAh7IAAgQQgBgJABgGQACgLATgCQAJgDAUAAQAVAAAVAOQAXARAAAZQAAAOgFAJQgDAHgKAIQALAFAJALQAKANAAAMQAAAQgRAOQgLAJgNAFQgaAKgqAAQgHAAgFgGgAgfA/QAUgBAXgHQAUgGAAgHQAAgJgNgHQgKgFgJgBIgfgBgAgfg+IAAAZIAAAZIAQAAQAjgCAAgYQAAgIgLgIQgJgIgNAAIgSAAg");
	this.shape.setTransform(45.4,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag/BYQgFgFAAgHIAAgaIABgaIAAheQAAgHAEgHQAGgIALABIAdACQAQACALAGQAyAaAAAlQAAAPgKALQgLAMgVAIQAfARAQASQAEAFAAAGQAAAGgFAFQgFAFgHAAQgGAAgFgFQgkgigpgMIABAlQAAAHgFAFQgFAEgHAAQgHAAgEgEgAgkAEIAGAAQAcAAANgHQAGgDAFgFQAFgFAAgCQAAgNgRgNQgOgLgSgCIgOgBg");
	this.shape_1.setTransform(30,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag2BaQgMgMAAgmQAAgPACgfIACgvIgBgMIgBgMQAAgSAQAAQAGAAAEADIAagFIAVgCQAeAAASAHQALAEAAALQgBAGgEAFQgFAFgGAAIgGgBQgTgFgSAAIgRACQgLABgKADIgBAuIAsgEIAdgCQAGAAAFAEQAFAEAAAIQAAANgOABIgcADIgyAEIgBAYQABAXACADQACACANAAIAVAAIAVgBIAIAAIAHgBQAGAAAFAEQAGAEgBAIQAAANgNADQgMACgkAAQgmAAgMgKg");
	this.shape_2.setTransform(14.9,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgZBTQgOgigSg/IgJggQgHgWAAgIQAAgHAFgFQAFgEAHAAQALAAAFAMIAEAUIALAmQAJAgAJAaIAahGIALgcQAHgRAIgJQAFgGAHAAQAHAAAFAFQAFAFAAAGQAAAFgDAFQgHAJgFANIgIAXIggBQQgFAOgIAOQgFAKgJAAQgMAAgFgMg");
	this.shape_3.setTransform(-0.9,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,0,65.9,37.5);


(lib.textdirectobjectidle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgUA6QgDgCAAgDQAAgFADgEQACgEAFgBQAHAAAAAKQAAAEgBADQgDAEgEAAQgDAAgDgCgAgPAdQgCgDAAgDQAAgGAKgHIARgOQAKgIAAgIQAAgIgIgIQgJgHgIAAQgEAAgIAEIgJAGQgEgBgCgCQgDgDABgDQgBgGAMgGQALgFAHgBQAPAAANANQANAMAAAPQAAAMgIAIQgEAFgMAIQgMAJgEAGQgCADgDAAQgDAAgDgCg");
	this.shape.setTransform(84.4,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgFA6QgCgCAAgEIAAgDIABgEIgBgLIAAgMIgCgfIgCgfIgHAAQgSAAgJgDQgHgBAAgGQAAgDACgDQADgCADAAIANABIANABIAOAAIANAAIASAAIASABQADAAACACQADADAAADQAAADgDADQgCACgDABIgSgBIgSgBIgGAAIADAjIABAhIABAJIAAAIQAAAGgBADQgCAGgFAAQgCAAgDgCg");
	this.shape_1.setTransform(75.7,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAbApIgFgZIgVADIgTAFIgOAeQgCAFgEAAQgEAAgCgDQgDgCAAgDQAAgFAMgYQgBgCAAgDQAAgGAIgCIAWglQASgeAEAAQAGAAADAIIAFAbIALA1IAFANIACAIQAAADgDACQgCADgDAAQgHAAgGgSgAgJAGIAcgGIgHgdg");
	this.shape_2.setTransform(63.6,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgwA+QgCgDAAgDIABgZIABgYIAAgMIAAgNIABgSIAAgTQAAgEACgCQADgCADAAQADAAACACQACACAAAEIAAATIgBASIAAATIAhgGQAUgDANAAIABgiQAAgGACgGQADgIAFAAQADgBACADQACACAAADIAAADQgCADAAAHIAAAHIABAHIgCAXIgBAXIABASIABARQAAAEgCABQgDADgDAAQgDAAgCgDQgCgBAAgEIgBgRIgBgSIAAgMQgNAAgTAEIghAHIgBATIgBAUQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_3.setTransform(51.8,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AARA9QgDgCAAgEIgFgPIgFgiIgFggQgHAZgIARQgJAVgDAMIABADQABAEgEACQgDACgEAAQgKAAAAgJIgCgKIgIgnIgSg2IAAgDQgBgHAJAAQAEAAAEAFIAFAQIAJAiIAIAiQAIgUAJgaIAIgYQAGgRAGAAQAFAAACAFQAEAHADAZIAEAeIAHAfQALgZAPgqIAEgPQADgJADgFQADgEAFAAQAHAAABAHIgDAIIgEAJIgDAOIgYA3IgLAbQgDAFgFAAQgEAAgDgCg");
	this.shape_4.setTransform(37.6,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.8,0,64.1,26.3);


(lib.texttowhom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC66").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape.setTransform(122.8,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC66").s().p("AgmA2QgNgOAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_1.setTransform(110.9,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC66").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAEADAAAFQABAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_2.setTransform(99.9,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC66").s().p("AglA9QgSgNAAgRQAAgOAMAAQAMAAAAAOQABAFAIAGQAJAGAIAAQADAAACgMIAAgbQACgTAAgeIAAgGIgCAAIgJAAIgLAAQgFAAgEgDQgDgEgBgFQAAgMAQAAIAJAAIAIAAIARAAIAQgBQAYAAgBANQAAAFgCADQgEAEgGAAIgFAAIgFAAIgHAAIAAAGQAAA+gJAdQgGAVgRAAQgQAAgQgLg");
	this.shape_3.setTransform(88.2,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC66").s().p("AgrBDQgEgFAAgFIAAhbIAAgMQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAFgIAGQAJAEAHAIQAHAKAAAJQAAALgNALQgIAHgKAEQgTAHgfAAQgGAAgEgEgAgXAvQAPAAARgGQAPgEAAgFQAAgHgKgFQgHgFgHAAIgXgBgAgXguIAAATIAAASIAMABQAagDAAgRQAAgGgIgGQgHgHgJABIgOAAg");
	this.shape_4.setTransform(76.7,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC66").s().p("AguA2QgTgQAAgZQAAgdASgZQAVgbAfAAQAfAAAPAOQAPAOAAAcQAAAdgRAYQgUAcgfAAQgaAAgSgPgAgbgaQgOASAAAVQAAAOAMAKQALAIAQAAQATAAANgTQALgRAAgVQAAgTgIgHQgIgHgUAAQgSAAgOATg");
	this.shape_5.setTransform(63.5,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC66").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_6.setTransform(42.5,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC66").s().p("AgmA2QgNgOAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_7.setTransform(30.6,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC66").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAAOAFQAIADAAAIQAAAFgDAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_8.setTransform(19.6,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC66").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_9.setTransform(8.2,15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC66").s().p("AgpBAQgDgEAAgEQAAgFADgEQAEgDAFAAIARgCIAAgnQABgXABgWIgTAAQgGAAgDgDQgDgDAAgFQAAgGADgDQADgDAEAAIAbgBQAPAAAbAEQAKABAAALQAAAFgEAEQgDACgEAAIgYgCIgBAqIAAAnIAYAAQAGAAADAEQADADAAAFQAAAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_10.setTransform(-2.7,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC66").s().p("AgbBHQgKgCgFgEQgGAAgDgDQgEgEAAgFIABgaIABgbIAAgcIgBgdQAAgFAEgFQAFgFAFAAQADAAAMAGIARAHQAYAJASARQAWAVAAAYQAAAPgIAOQgHAOgNAIQgOAKgaAAIgPgCgAgeAtQADACAFABIAKABQASAAAIgFQAIgFAFgJQAEgIAAgKQAAgUgagQQgHgGgcgLg");
	this.shape_11.setTransform(-13.7,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CC66").s().p("Ag9BEQgDgEgBgFIABgKIAAgLIABgQIAAgPIAAgQIAAgRIgBgPIgBgQQAAgFAFgEQAEgFAGAAQAGAAAIAMQAnA5AnAjIAAgOIgBg5IgBgKIgBgJQAAgNANAAQAOAAAAAtIAAAOIAAA2IgCAOQgCALgLAAQgGAAgIgHQghgegqg2IgBAbIAAAVIABAVQAAAagMAAQgHAAgEgEg");
	this.shape_12.setTransform(-27.9,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC66").s().p("AgpBAQgEgEABgEQAAgFADgEQAEgDAFAAIARgCIAAgnQABgXABgWIgTAAQgGAAgDgDQgEgDABgFQgBgGAEgDQADgDAEAAIAbgBQAQAAAaAEQALABAAALQgBAFgEAEQgDACgEAAIgYgCIAAAqIgBAnIAYAAQAFAAAEAEQADADABAFQgBAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_13.setTransform(-40.2,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,0,178.1,29.1);


(lib.girlssitting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AHTE+QgBAEgBAEQABgBAAgBQABgDAAgDQAAgFgCgEQAAgBgBgBQgHAGgHAFQgKAHgMAGQgNAGgNAGQgMAGgOADQgGABgFABQgIACgHACQgNAFgOABQgJABgIgBQAAAAgBAAQgFgBgFgBQgHgCgGgDQgDgBgEgCQgJgDgKgDQgIgCgKgBQgEgBgEAAQgOgBgPgCQgOgCgPAAQgDAAgEAAIAAAAQgBAAAAAAQgFgMgBgFQgCgNAAgPQABgQgDgOQgCgNgHgMQAAgBgBgBQgHgMgLgJQgLgJgMgIQgNgIANgOQAEgEADgEQAFgFAFgFQABgBACgCQALgLAKgKQADACACgCQAAgBABAAQAAAAAAgBQAAgBAAgCQAAgHAEgHQAIgMAHgMQAIgOAHgJABuGPQAGgBAFgBQANgCAQAAQAPAAAOAAQAOABAPAAQAPAAAOgCQAOgBAPgBQAFAAAEgBQAKAAALAAQAPAAANAEQAGABAGADQAGACAGAEQAMAHAPgDQANgDAKgJQAJgJAJgLQAEgFAFgDQALgHALgIQANgIADgNQACgDAAgEQgDALgKAGQgNAIgNAGQgFACgBgCAChjvQAJABAFgDQADgCABgDQADgCACgCQAJgIgMgDQAQgJgGgIQABgBACgBQABgBABAAQAAAAABgBQACgBABgBQABgCABgCQAAgBAAgBQAAgLgMAKQADgKgIgKQAQgSgTgIQAFgLgLgIQAIgFgHgIQgHgIgFAAQgDgRgXACQgDgSgWAIQAAgCgCgCQgNgMgVANQgIgOgOAOQgIgLgKARQgVgQgGAZQgDgHgHAGQgBABAAADQgCASgMgCQgYgEAPAPQgLAFAIANQgJAGADAOQgSAKAPAQQgCAAgCgCQgBAFACADQACAFAKACQAAAAABAAQABABACAAQACgBADAAQAFgCACgFQABgBAAgCQABgCACgBQADAEACACQABAAAAABQAAgBAAAAQAFgEAJACQAIAAACACQABAAAAABQACADgEAGQAAAAgBABQgBACgCACQgDACgCABQgBAAgBAAQgGABgHgEQgDgCABgDIAAAAQAAgDABgCQABgCABgCQACACAFACQADAAABABQAAACgBACQgBABgBAAQgJAGgBgHQAAgCAAgDAChjvQABgCABgDAERgvQABgDABgDQACgGADgGQADgFAEgFQAEgEAEgDQACgBADgCQALgGALgIQAKgJAFgNQAFgNADgOQADgRgPgGQgNgGgMgFQgHgDgGgDQgHgDgGgDQgEgCgDgBQgFgCgFgCQgFgBgFgBQgOgDgPgDQgNgDgOgDQgOgDgPgBQgPgCgPACQgTACgEgLQAFABAFgCQAJgEAFAJQAPgEAFgLAgGkoQAAgBAAAAQAFgJALgGQAOgHAaAXQACAGALgIQgDAFAAADQAAAHAOgDQABgDACgBQAHgHAHAHQACACACADQACACABADQABADgBAEQAAAIgDAEQAAAAAAABQgBABgBABQAAAAgBABQgGAEgMgCAgWkaQgCABgCAAQAAABgBAAQgDABgDACQAHALAIAHQgDAAABAJQABABAAABQACAJAIABQAAAAAAAAQADABADAAQANgBALgEQACALgDAGQgCADgCADQgIAEgNgFQAIASANACQABAAACAAQABAAABAAQACAAABAAQABAAAAAAQAAAAABAAQAGAIAEAFQgGABgEACQgHACgFAEQgKAJgJALQgIAKgCANQAAACgBACQgBABgBABQgBABAAABQgHAJgFAOQgFALgEAKQgFANAEAPQAEANAGAKQAGALANAHQAMAGALAIQAHAFAIAEQAEACAEACQAKAFAPABQAEAAADgBQgCANANAHQgJAAgHAEQgFACACAFQAAAAAAABQADAHAPAGIABAAQAAAAAAAAQADgHACgHQACgDABgEQABgDABgEQABgEABgFQAAgCABgDQAAgDABgDQgDgFgDgGQgIgMgLgJQgNgLgEgLQAAAAAAAAQAHADAIABQARADAKgJQAKgKAOACQAHACAHgBQAMAAAMgJQAMgIANgFQAOgGAMgHQAEgDAEgCQgCgFAAgGQgBgOABgPQAAgNABgDQgHgCgIADQgMAFgOAFQgNAEgPADQgNADgNAEQgNAEgOACQgDAAgDAAIgBAAQgLABgKgEQgNgEgLgMQgHAEgEAIQgGAHgCAIQgCAFgBAGQgCAQAHAMQACAFAEAEQAFAHAHAFQAFADAGADAgJjuQAAAIADAHQABABAAACABfkEQAAABAAACQgBABAAABQAAACAAADQABABAAABQAAAIAJgBQgEADgBACQAAACADACQAEACAGABQADABACAAABOkWQgBAGAIgBQgCgDABgCAAajIQAKgBAIgEQAJgGAMgFABaiEQgEAHgEAHAgQiDQAAACAAACQAAAEAAAEABNA/QgCADgBADQgHANgIALQgIAMgJALQgIANAKgCQADAAAFgCQAIgDAIABQAPAAAPABQANACAOACQALADAIAEADygBQgFAJgJAHQgKAIgMAGQgMAFgOAEQgBAAgBAAQgNAEgNACQgGABgGgBQAAAAgBAAQgIAAgIgCQgMgDgLgGQgBgBgCgBQAAgBAAAAQgCgEgBgEQgCgDgBgEACMAeQgFgLgHAJAAliEQAFgDAHgBADWiYQADABADAAQAOADAOACQAKABAHAEQAEACAEADQAFABgDAKQAAABgBACQgEAKgFAJQgCADgCADQgHAMgKAHQgIACgIAAQgBAAgCAAQgDABgCAAQgQADgDAPQgEASAMADQADABACgCQAMgHALgIQAEgCACAAQAGgBABAKQAAACAAACQAAAFADAGQACACgBAEQgCAKgEALQgBACgBABQgGAPAGAJQAIgGAIgGQABgBABgBQABAAAAAAQADgDADgDQADgBABgDQAAAAAAAAQAAAAAAgBQAEgBAAgDQABgDgBgCQAAgIgCgHQgBgCgBgDQgBgBgDAAQAAADAAADQAAAIABAMQAAADADACADTiQQABABABAAQABgEAAgFQgHgBgGgDADUhYQAEAIAHAEQABAAABAAAEzAAQAJAIAKAFQgDgNgGgMQgDgGgFgDQgIgDgGgFQAAgBgBAAQgCgCgCgCIgQgLQAFAFAEAEQAHAIAAACQAAAHAAAHQABADAAAEQABAGgGACQgGACgFACQgFACgFACQgCABgBAAAEOCjQACgCABgCQABgCABgCQAFgMACgPQABgOADgPQADgNACgOQACgLACgMQAAAAAAAAQABgCAAgDQADgOACgPQACgNAAAAAErgEQADACADACQABAAABAAAErgEQADAAACACQABABACABAErgEQgCgCgCgBQgCgCgDgDAkLgwQgBgBgCAAQgEgBgFgBQAAAAgBAAQgDAAgDAAQgJgBgIADQgDABgDABQgMAFgLAIAkLgwQgBAAgBAAQgBABAAAAQgFABgEACQgBAAgBABQgHAEgGAFQgBACgCAGQACAAACAAAlxBAQgBAAAAgBQgCgFgCgGQgCgIACgIQAAAAAAAAQAFgEAEABQAEAAAEAGQABACAEgCQACgBACgBQAFgCAEABQAEABADADQADACACADQADAEABABQgIAKgLAKQgCADgDABAllAEQgQAEgHALQgDAFgDAGQAAAAAAABQgBABAAAAQgCAGgBAGQgCAOABANQAAABAAAAQAAABAAABQABALAGAHQACADADACQAKAIAPABQACAAACAAIAAAAQgDAMACAOQgRgEgJgGQgCgBgCgBQgHgDgIAEQAAABAAAAQgLAGgJAMQgJALgGAMQgBADgCADQgCAGAAAIQABgBABgBQAAABgCAEQAAgBAAgCQgIAJgEAMQgEAOgEAOQgDAOgDANQgDANgBAOQAAARAMAFQAMAFAMgEQANgFAOgFQAMgFAKgIQAGgEAFgFIABAAQAFgEAFgEQALgIANgHQANgGAMgKQADgCAEgDQAIgGAJgHQAMgJALgHQABgBABAAQAAAAAAAAQACgBABgBQABAAABgBQABAAACgBIAAAAQACgBADgBQACgBADAEQAKANAOgJQAGgDAFAAQACAAADABQAFADAFADQAIAFAHAFQAEADANAFIAAAAQACABADABQACABADAAQAMADAEgFQgGgKgHgHQgEgDgFgDQgMgHgMgIQgGgFgGgEQgEgCgDgCQAAAAABAAQADABADACQAGADAHADQAAABAAAAQAGADAGADQAHAFAHADQAFADAFACQACABABAAQAHADAIABQALABgEgKQgEgIgHgGQAAAAAAAAQgBgBAAAAAkhgZQABgBACAAQABAAAAAAQABAAAAAAIAAAAQAEAAAEAAIAAAAQACAAACABIAAAAQACAAABAAQABABAAAAQAJABAGAFQADADACADQAJALgDASQgCAPgHAOQgBACgBADQgFAJgFAKQgHAMgFAOQgGAOABAPIAAAAQAAAMAFAKIAAAAQABADACADQADADAEACQABABAEAEIAAAAQACgBABgBQACgBACAAQAAgBABAAQADgCAFgCQABAAAAAAQgBgHAAgDQAAgCAAgCQABgOAFgNQAGgNAKgMQAKgKAJgKQAGgHAEgHQACgFACgGQAEgOgDgPQgCgMgDgKQgBgCgBgCQgFgOgLgIQgCgCgCgBQgIgGgIgEAkhgZQANAGADABQADABADAFQABACABACQAAAAAAAAQAFALAAAMQgCAQgHALQgIAMgGAMQgDAJgCAJAkigZIAAAAQAAgBgBAAQABAAAAABIABAAAkjgZQAAAAABAAQAJAIgDgBQALAFAAANQAFgDgBgEQAAgEgHgEQgCgBgMgJAkjgaQABAAABABAkpgaQgIgBgFgBQgKgBgFgBQgBAAgBgBQgBAAAAAAQgEgBgCAAIgBAAQgEAAgEAAQABACAAACQACACABACQABABACABQAAAAABAAQADABACABQACAAABABQAAABABACQAAACgBAEQAAADgEABQgHAEgHABQgDABgDAAQAAAAgBAAQAAAAgBAAQgCAAgBAAQAAABAAABIAAAAQgBABAAABQAAABAAABQAAACAAACQABAIAFADAkqgPQAAABABAHQAAAAAAAAQABADADACQACAEAAAFQgBAGgFAGQgDAEgDABQgGACgHgGQgCgCgBgCQAAgBgBgCIAAgBQAAgDACgFQAEgFAEgDQABgBACAAQgEgHAAgHAkuAAQgBAAAAgBQgCgDgCgBAkjAHQgJgEgCgDAk/AQQACAAAIgEQAIgFgBgHAlOggQgBAAAAAAIAAAAIgBABQABAAAAgBQACgBABgBQgBACgBAAgAlYggQABAAAAAAQAAgBgBgBQAAABAAABQAAAGADAEQAAABAAAAIAGAAIgGAAQgCAAgBgBQgEgDgDgEQAEgCADgBgAlQgWQgCAAgDAAQAAAAAAAAAlgAAQgBgNAHgFQgHgGAAgKQABADABACAlZgBQAKgGAAgOAlxBAQADAHAEADQAGADAJgDIAAAAQgDgHgHgCQgJgCgDABgAl2AkQALAJAOADQAMACAOAAAlXARQABAEACABAjXgkQgFgCgFgEQgDgCgDgCQgJgFgLAAQgBAAgBAAQgHABgHACAkCgtQgEgCgFgBAAFFLQAAAAAAgBQAAAAgBgBQAAgCAAgBQgBgKgBgKQgCgNgBgPQgBgOgDgNQgBgGgBgGQAAgBAAgBQAAgBAAgBQABgOAAgOQAAgOACgOQAAgFAAgFQAAgFgBgFQAAgEAAgEQgCgQgLgIQgLgJgPABQgOAAgNAGQgLAGgLAIQgFAEgFAFQgFAFgEAGQAAAAAAABQgCACgBACQAAgBgIgDQgCgBgBAAQgMgEgNgCQgGgBgFgBQgIgBgIgCQgIgBgHAAQgHABgGABQgNAEgPABQgFAAgEABAh3CqQgCAAgDgBQgGgBgFgCQgOgDgOgDQgLgCgEAGQAAAAABAAQADACADABQACABACABQAFACAGACQALAFAKAGQACABACABQAJgKADgGgAhzCkIAAAAQgCACgBADQAAABgBAAAkQCqQAAAAABgBQABAAAAAAQADgCADgCQACgBACgBIAAAAAiyCkQgBAAAAAAQgHgEgHADAi1D2QAAAAAAABQAAgBAAAAIAAAAQARANAEANQAEANAHAOQAHANAJALQAKAMASgFQAAAAAAgBQAAAAAAgBQgDgDADgGQABgBABgCQAEgIAEgJQAGgKADgMQADgMADgMQACgHACgHQADgLACgLQAAgBADgGQgCgJgDgMAjbEXQACgCACgCQALgJALgJQAAAAAAAAQAFgEAHgIIAAABAj9DHQgEAeABALQABALAIAIQAFAHAGAFQACABADAAQAGACABACQACABADACAkCGGQgBgEgBgEQgEgYADgNQADgPAIgMQAHgMAJgLQAHgJAIgHAihDiQgQAOgEAGAkfB8QgBADgEABQgHABgBgFQgCgKAEgWQAAgDABgDAleBqQANAAALgEQAMgGALgGIAAgBQADgBADgCQACAAACgBQACgBADAAAkTCTQgHgIgEgLQgBgCAAgCQgBgCAAgBQgFgOADgPQABgEABgEAkQCqQgEABgEABQgLACgMABQgDAAgCAAQgPABgPAAQgOgBgPAAQgNAAgKAEQgCABgBABQgJAEgEAOQgCAEgBAEQgDAKgCAKQgDANgCAOQAAACAAAAQADgCACgBQALgFAKgFQACgBACgCQALgFAKgJQAEgCADgDQAIgEAIgFQALgGANgGQAJgEAJgGQACgBADgCQAJgGAIgFQADgCADgCQABgBACgBgAmABcQgCAEAAACQAAANAFAJAmHBHQgJAMAAAQQAAAMAEAKAlpDdQgFgDgEgBQgNgFgKgJQgHgIADgDAmJDzQgFgCgDgGQgHgQgBgMAluEaQACAKAJAJQABABABABQALAJAKAIQALAJAIAMQAFAGAFAGQAEAFAEAEQAKALAMAIQACACADABQAAAAAAAAQAFAEAFACQAEADADACQAEACADACQAIAFAGAEQAGAEAIAAQALAAAJgCQACAAABAAQADgBADgBQAFgBAFgCQAGgDAFgDQABgBABAAQANgIAIgJQAJgIAIgLQAIgKAJgLQADgEABgGQAAAAAAgBAkXERQgEgHgEACQgDABgCAJAgsGZQgJgBgJABQgKAAgMACQgKABgJAAQgDAAgDAAQgNAAgOgBQgRAAgPACQgCAAgagDAhiFIQAOgBARADQAMADANABQAEAAAOgCIAAABQAAAAAAABQgVAJgJALQgHAJABANQABANAGAKQAEAGAFAEQACAAACAAQAEAAAYgEQAMAFANAAQAGABAHAAQAHAAAHgBQAPgBAOAAQAPAAAOgCQAIgCAEgGIAAAAAD5CVQAJADAHAGQABAAAAABQACACACACADfC1QACgCADgDQACgBABgCQACgCACgCQAEgFAEgFQAAgBABgBQAEABAEABQABABACAAQAGAFAEgBQADAAACgBAD0CdQACgDADgEQAAAAAAgBQgBAAgCgBQgFgBgFgBQgIgCgIgDQgNgFgOgEQgOgEgOAFQgLAEgEgBQAAgBAAgCACWCIQABACABADQgDAJAAAJQAAAEAAADQAAACAAABQACANADAMQAFANAGANQAFAJAFAKQACADACAEQAHANAMAIQALAIAJAMQAHALAEANQAFANAFAOADfC1QgCACgDACAEyFmIgDgFQgFgLgFgLQgEgNgGgNQgEgIgEgHQgCgEgDgEQgHgLgCgOQgBgJgCgJQgBgFgBgGQgDgPgIgMQgJgMgNgIAAsB/QADAPgFAPQAAABAAABQgCAFgBAFQgBAIAAAIQAAAOAIALQAGAJAGAHQABADACAGQABACABACQAEALAFALQAFANAGAMQAHAMAFAOQAEANAIAJQACABACADQAAABAAAAAhEDSQAGATACAJQAAABABAAQADAMAFALQAEANAFANQAGANAFANQAEAHACAIQABABAAACQAAAAAAAAIAAAAAA6DiQADAEACACQAEAFAFgDAAFFLQAAADAAACQABAPANAGQADABAEACQAJAEAJAFQAMAGAOADQAOACAPgBQANAAAAAJQAAAHgCAEACkFTQgBAAgBAAQgCAAgBAAQgJABgIAAQgPABgOgCQgBAAgBAAQgNgBgOgBQgNgCgPgBQgOgBgOAAQgBAAgBAAQgNAAgIgCAgYFOQABACAAACQAAABABABQAAAAAAABQACANgDAOQgCANAEAOQAAACACACQACADAEACQAAAAABAAQAAABAAAA");
	this.shape.setTransform(46.7,41.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("ACaFTIgJgCIgNgFIgIgDIgSgGIgSgDIABgHIgKgbQgFgNgHgLQgJgLgLgIQgMgJgHgNIgEgHIgKgTQgGgMgEgOQgEgMAAgNIgBgDIAAgHQAAgJACgJIgBgFQAEABAKgEQAOgFAOAEIAbAJIAQAFIAKADIADABIAAAAIgFAIIgBABIgIAKIgDAEIgEAEIgFAEIgEAEIAEgEQANAIAJAMQAJAMADAPIACALIACASQACAOAHALIAFAIIAIAPIALAaIAKAWIACAGIAAAFIAAAAIgBAAgAglE7IgCgBIAAAAIgEgFQgIgJgEgNQgFgOgGgMIgMgZIgJgWIgCgEIgDgIIAFAGIAAAAIABAAIAAABIAEABIAAAAIABAAIAAAAIABAAIABAAIAAgBIAAAAIABAAIgBAAIAAAAIAAABIgBAAIgBAAIAAAAIgBAAIAAAAIgEgBIAAgBIgBAAIAAAAIgFgGIgMgRQgIgLAAgOIABgQIADgKIABgCQAEgPgDgPIAIgCQAIgDAIABIAeABIAcAFQAKACAJAEIgWAVIgDADIgJAKIgIAIQgNAOANAIIAXARQALAJAIAMIABACQAFAMADAOQACANgBAQQAAAPACAOQABAFAFAMIgCAAIgDAAIgQAAIgHAAIgWAAgAhcDKIAAAAgAhJAmQgPgGgDgHIgBgBQgCgFAFgCQAHgDAKAAQgOgHACgNIgHABQgPgBgKgFIgIgEIgOgJQgMgJgMgGQgOgHgGgLQgGgKgEgNQgEgPAFgNIAJgUQAGgPAGgJIABgBIADgCIAAgFQACgNAJgKIAUgUQAEgEAHgCIAKgCIgKgOQAKgBAIgEIAVgLIgVALQgIAEgKABIgBAAIAAAAIgDAAIgDAAIgDAAQgNgCgIgSQANAFAJgEIADgGQADgGgCgLQgLAEgOABIgGAAIAAgBQgIgBgCgJIAAgCQgCgJAEAAQgJgHgHgLIAHgDIABAAIAEgCIAEgBQAFgCACgFIACgCIACgEIAFAGIACABIgCgBIgFgGIAAAAQAGgKALgFQAOgIAaAXQACAGALgIQgCAFAAADQgBAHAOgDIADgEQAHgHAHAHIAEAFIADAFIABAHQgBAIgCAEIgBABIgCACIgBABIAAAAQgEADgGAAIAAAAIAAAAIgDAAIAAAAIgEgBIAEABIAAAAIADAAIAAAAIAAAAQAGAAAEgDIAAAAIABgBIACgCIAAADIAAADIAAAEIAAACQAAAIAJAAQgEACgBACQAAADADABIAKAEIAGABQADAKATgCQAPgBAOABIAeAEIAbAGIAcAGIAKACIAKAEIAHADIANAHIANAFIAZALQAPAGgDARQgDAOgEANQgFANgLAJIgWAOIgFADIgIAIIgGAKIgGALIgCAGIABACIAJAJQAHAIAAADIABANIgBgNIAEgFIABABQAGAFAIADQAGADADAGQAFAMADAOQgKgFgJgIIgCgDQgDgCgDAAIgEgDIgEgFIAAAHQABAHgGACIgLAFIgKADIgDACIADgDIAAAAIAHgFQACgCABgDIAAAAIABgCQAEgBAAgDIAAgFQgBgIgCgHIgCgFQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIAAAGIABAUQAAADADADQgBADgCACIgHAFIAAAAIgDADIgQALQgGgJAGgOIACgFQAEgLACgKIAAgCIgBgEQgDgFAAgGIAAgEIAAAAIgBgCQgBgHgDAAIgBAAIAAAAIAAAAIgBAAIgFADIgYAOIgCABIgCABIAAAAIgBAAQgJgDAAgLIABgHQADgQAQgDIAFAAIADAAQAIAAAIgCQAKgIAHgLIAEgHQAFgJAEgKIABgDQAEgJgGgCIgIgFQgHgDgKgCIgcgFIgGgBIgNgEIANAEIgBAJIgCAAQgHgDgIADIgaAKIgbAIIgaAGQgNAEgOACIgGABIgBAAQgLAAgKgDQgMgFgMgLQAGgEAGgBQgGABgGAEQgGAEgFAHQgFAHgDAIIgDALQgCAQAHAMIAGAKQAFAGAHAFIALAGQAEAMANAKQALAJAIANIAGAMIgGgMQgIgNgLgJQgNgKgEgMIAAAAQAHADAIABQARADAKgJQAKgKAOADQAHABAHAAQAMgBALgJQAMgIAOgFQANgGANgHIAIgFQADAIAHAEIACABIgFAAQgQADgDAQIgBAHQAAALAJADIABAAIAAAAIACgBIACgBIAYgOIAFgDIABAAIAAAAIAAAAIABAAQADAAABAHIABACIAAAAIAAAEQAAAGADAFIABAEIAAACQgCAKgEALIgCAFIgDgDQgGAKgIAHQgLAIgMAFQgMAFgOAEIgCABIgaAFIgLABIAAAAQgJAAgIgDQgMgDgLgGIgCgCIgBgBIgDgHIgDgGIgBAFIgBAFIgCAIIgCAHIgCAHIgGAOIAAAAgAgKAFIAAAAIAAgBIAAgBIgBAAIAAAAQgCgDgDAAIAAAAIAAAAQgDAAgCADQACgDADAAIAAAAIAAAAQADAAACADIAAAAIABAAIAAABIAAABIAAAAIAAAAgAhDiPIAHgOIgHAOgAiniQIAAAAIAAgHIABgEIgBAEIAAAHIAAAAgAiVk7IgBABIgDAEIgBAFIAAABQAAAAAAABQAAAAAAABQABABAAAAQABAAABABQAHAFAGgBIACgBIAFgDIAEgEIAAgBQAEgGgBgDIgBgBQgDgCgHAAIgGgBQgFAAgDADgAhDkqIABAAIABAAIAAAAIgBgEIAAgBIAAABIABAEIAAAAIgBAAIgBAAIAAAAIAAAAQgGAAABgEIAAAAIAAgBIAAABIAAAAQgBAEAGAAIAAAAIAAAAgAA/ixIAAAAg");
	this.shape_1.setTransform(61.8,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AAaDeIgNAAQgNgBgMgFIAAgBIgBAAQgEgCgCgDIgCgEQgDgIAAgJIABgKIACgPIgBgMIAAgBIAAAAIgBgCIgBgEIAAgBIAAgBIAAAAIAAAAIgBgDIgGgPIgLgaIgJgZIgIgYIgBgBIgIgcIgFgVIAFAVIgDAIIgFAVIgEAOIgGAYQgDAMgGALIgIAQIgCADQgDAGADADIAAABIAAABQgSAFgKgMQgJgLgHgNQgHgOgEgNQgEgNgRgNQAEgGAQgOIAFACIAFACIAFABIABAAIAAAAIACAAIAAAAQAFAAADgDIAAgBQgGgKgHgGIgJgHIADgEIAKAFIADABQAHADAIABIAAAAIABAAIABAAIAAAAQAIAAgDgIIAAAAIAAgBQgEgIgHgFIAAAAIgBgBIABABIAAAAQAHAFAEAIIAAABIAAAAQADAIgIAAIAAAAIgBAAIgBAAIAAAAQgIgBgHgDIgDgBIgKgFIgOgHIgMgGIAAAAIgNgHIgGgDIgBAAIAHAEIAMAIIAYAPIAJAHQAHAGAGAKIAAABQgDADgFAAIAAAAIgCAAIAAAAIgBAAIgFgBIgFgCIgFgCIAAAAIgRgIIgPgKIgKgGIgFgBQgFAAgGADQgOAJgKgNQgDgEgCABIgFACIAAAAIgDABIgCABIgDACIAAAAIgCABIgXAQIgRANIgHAGQgMAJgNAHQgNAGgLAIIgKAIIgBAAIgLAJQgKAIgMAFIgbAKQgMAEgMgFQgMgFAAgRQABgOADgNIAGgbIAIgcQAEgMAIgIIAAADIACgEIgCABQAAgHACgHIADgGQAGgMAJgLQAJgMALgGIAAAAQAIgFAHADIAEACQAJAGARAEQgCgOADgMIAAAAIgEAAQgPAAgKgJIgFgEQgGgIgBgLIAAgCIAAgBQgBgNACgOIADgLIABgCIAAgBIAGgLQAHgLAQgDIABgDIAAAAIAAgDIADAAIABAAIABAAIAGgBQAHgBAHgEQAEgBAAgDQABgEAAgCIgBgDIgDgBIgFgCIgBAAIgDgCIgDgEIgBgEIAIAAIgBABIABAAIAAAAIABgBIAGABIABABIACAAIAPACIANACIAEAAIACABIABAAQAJAIgDgBQALAFAAAOIANAPQgCAQgHALQgIAMgGAMQgDAJgCAJIgFABIgEACIgGACIAAABQgLAGgMAGQgLAEgNAAQANAAALgEQAMgGALgGIAAgBIAGgCIgBAFQgEAWACAKQABAFAHgBQAEgBABgDIABAEQAEALAHAIIAAAAIADAGQADADAEACIAFAFIAAAAIgEADIgGADIgBAAIgBABIABgBIABAAIAGgDIAEgDIAAAAIADgCIAEgBIABgBQADgCAFgBIABgBIAJgBQAPgBANgDIANgDQAHAAAIACIAQACIALACIAZAGIADABQAIADAAABIADgEIAAgBIAJgLQAFgFAFgEQALgIALgGQANgGAOAAQAPAAALAIQALAIACAQIAAAIIABAKIAAAKIgCAbIgBAcIAAACIAAACIACAMIAEAbIADAcIACAUIAAADIABABIAAABIAAAFQABAPANAGIAHADIASAJQAMAGAOADIAHABIAPABIAAAAIAAAAIAFAAIACAAIACgBIAAAAIABAAQAKABAAAIIAAABQAAAGgCAEIAAAAQgEAGgIACQgOACgPAAIgdACIgMAAIgCAAgAmGgJIgDACQgJAEgEANIgDAIIgFAUQgDANgCAPIAAACIAFgEIAVgKIAEgDQALgFAKgJIAHgEIAQgKIAYgMIASgJIAFgDIARgLIAGgEIADgCIgIACIgXADIgFAAQgPABgPAAIgdgBIgCAAQgMAAgJAEgAizgYIABAAIABABIAGADIAEABIALAFQALAEAKAGIAEACQAJgKADgGIABgBIADgFIAAAAIAAAAIgDAFIgBABIgFgBIgLgCIgcgHQgLgCgEAGIgBAAIAAAAIgBgBIgBAAIgDgBIgBAAIgBAAIAAAAIgBAAIgFABIgBABIABgBIAFgBIABAAIAAAAIABAAIABAAIADABIABAAIABABIAAAAgAl2iIIAEALIABABQADAHAEADQAGADAJgDIAAAAQADgBACgDIATgUIgEgFIgFgFQgDgDgEgBQgEgBgFACIgEACQgEACgBgCQgEgGgEAAQgEgBgFAEIAAAAQgCAIACAIgAk2jBQgEADgEAHQgCAEAAAEIAAAAIABADIADAEQAHAGAGgCQADgBADgDQAFgGABgHQgJgEgCgEIgBgBQgCgCgCgCQgEgHAAgHQAAAHAEAHIgDABgAlUilIgDgGIADAGgAllixQABAHAFADQgFgDgBgHIAAgDIAAgCIAAgBIAAAAIAAAAIAAABIAAACIAAADgAkji1IAAgCQAAgEgCgEQgDgCgBgCIAAgBIAAAAIgBgIIAAAAIAAAAIABAIIAAAAIAAABQABACADACQACAEAAAEIAAACgAFcDYIgMgGIgMgEQgNgEgPAAIgVABIgJAAIgdACIgdACIgdgBIgdAAQgQAAgNACIgLACQACgEAAgGIAAgBQAAgIgKgBIgBAAIAAAAIgCABIgCAAIgFAAIAAAAIAAAAIgPgBIgHgBQgOgDgMgGIgSgJIgHgDQgNgGgBgPIAAgFIAVACIACAAIAcABIAcADIAbACIACAAQAOACAPgBIARgBIADAAIACAAIABAAIAAAAIAHAAQAPAAAOACIAdADIAIABIASADIATAGIAHADIANAFIAKACIABAAQAIABAJgBQAOgBANgFIAPgEIALgCQAOgDAMgGIAagMQAMgGAKgHIAOgLIABACQACAEAAAFIgCAIQgDALgKAGQgNAIgNAGIgCABIgCAAIAAAAIgBAAIgBAAIAAAAIAAAAIAAgBIAAABIAAAAIAAAAIABAAIABAAIAAAAIACAAIACgBQANgGANgIQAKgGADgLIgCAHQgDANgNAJIgWAOQgFADgEAFQgJALgJAJQgKAJgNADIgJABQgKAAgIgFgAgoDcIgEAAQgFgEgEgGQgGgKgBgNQgBgNAHgJQAJgLAVgJIABAEIABACIAAAAIAAABIABAMIgCAPIgBAKQAAAJADAIIACAEQACADAEACIABAAIAAABQgXAEgFAAIAAAAgAkMDDIgFgDQgMgIgKgKIgIgKIgKgMQgIgMgLgIIgVgSIgCgCQgJgJgCgJIgEgGIABAAIAKgIQALgIANgGQANgHAMgJIAHgGIARgNIAXgQIACgBIAAAAIADgCIACgBIADgBIAAAAQgEAeABALQABALAIAIIALAMIAFACQAGABABACIAFADQgIAHgHAJIgQAXQgIAMgDAPQgDANAEAZIgIABIAAAAgAkfBPQgDABgCAJQACgJADgBIABAAIAAAAIAAAAIAAAAIABAAIAAAAQADAAADAFQgDgFgDAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAgAgYCRIAAAAgAidAPIAAAAgAj9AKIAAAAgAkzjCIAAAAg");
	this.shape_2.setTransform(46.7,60.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgNAUQgEgDgDgHQADgBAJADQAHABACAHIAAAAIgHABQgDAAgEgBgAAAgFQgOgDgLgJQAFgEAFABQAEAAADAGQABACAEgCIADgCQAFgCAEACQAEAAADADIAFAFIAFAFIgBAAQgOAAgLgCg");
	this.shape_3.setTransform(11.8,46.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AicCaIgDgDQACAAAIgFQAIgEgBgIQACADAJAFQgBAGgFAGQgDAEgDABIgDAAQgFAAgFgFgAivBxIAAgBIAFABIADACIABACQAAADgBAEQAAACgEACQgHADgHACQAKgHAAgNgACahVIgBgDQgDgHAAgIIAGAAQAOgBALgEQACAMgDAGIgEAFQgDACgGAAQgFAAgIgCgACeiNQAAAAgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAAAIABgGIAAAGQABAGAKgFIACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgEgBIgIgDIABgBQAFgFAJADQAIAAACACIABABQACADgEAGIgBABIgDAEIgFADIgCAAIgCAAQgGAAgGgEg");
	this.shape_4.setTransform(30.7,27.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AkODrQgIgCgEABIgBgBIgEgMQgCgIACgIIABABQAKAJAOACQANADAOAAIgTAUQgDADgDABQgDgHgHgCgADWg8QgEACgFAAIgGgBIgKgDQgDgCAAgCQABgCAEgDQgJABAAgJIAAgBIAAgFIAAgCIAAgEIABAAQACgFABgHIgBgHIgDgGIgEgEQgHgHgHAHIgDADQgOAEABgHQAAgDACgFQgKAHgDgFQgagXgOAHQgLAFgGAKIAAAAIgCAEIgCADQgCAEgFACIgEACIgEgBIgBAAQgKgCgCgFQgCgDABgFIAEACQgPgQASgKQgCgPAIgFQgIgNALgFQgOgQAXAFQANACACgSQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAHgGADAIQAGgZAWAPQAJgQAJAKQANgOAJAPQAUgNANAMQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAWgJAEATQAXgDADASQAEgBAHAJQAHAHgHAGQALAHgGAMQAUAIgRASQAJAJgEALQAMgLAAAMIAAABIgCAEIgDADIgBABIgCABIgDACQAGAIgPAJQALADgIAIIgGAEIgDAEQgFAEgJgBIABgFIgBAFQgFALgQADQgFgJgJAEgABUhuIAAgGIADgDIAHADIAEABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBABQgFACgDAAQgDAAgBgDg");
	this.shape_5.setTransform(38,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AAhBrIgFgEQgEgCgCgEIgEgFIAAgBQgEgJgBgMIAAAAIAAgBQAAgPAGgNQAFgOAGgMIAKgSIADgGQAGgNADgQIAAgIQABgNgHgJIgGgFQgGgFgIgCIgCAAIgCAAIAAAAIgEgBIgBAAIgHAAIgBAAIAAAAIgBAAIgEAAIgBAAIAAAAIgBABIgBgBIgEgBIADgHQAFgFAHgEIACgBIAJgEIABAAIADgBIAIAEIgIgEIANgCIACAAQAMAAAJAFIAGAEQAEAEAFABIAFADQALAIAFAPIABAEQAEALACAMQACAPgEAOIgEAKQgEAHgGAHIgSAUQgLALgFAOQgGANgBAOIAAADIACALIgBAAIAAAAQgFABgDADIgCAAIgDACIgDACgAhTBDIgEgDQgFgIAAgMIAAgBIACgGIgCAGIAAABQAAAMAFAIQgHgCgHAEQgEgKgBgMQAAgQAJgMIAAAAIABADQAAALAGAHIAFAFQALAIAOABIAEAAIAAAAQgDAMADAOQgRgEgKgGgAAGBEIgBgCQgDgJAAgJIABgLIACgJQACgJAEgIQAGgLAHgMQAIgMABgPQABgNgGgLIAAAAIgCgEQgDgFgDgBIAGgHQAIACAGAFIAGAFQAHAJgBANIAAAIQgDAQgGANIgDAGIgKASQgGAMgFAOQgGANAAAPIAAABIgFADIgCgFgAgFBFQgDgKAEgXIAHABIgBALQAAAJADAJIABACQgBAEgEAAIgBABQgEAAgBgEgAANBGIAAAAgAAGBEIAAAAgAgYgmIgBgEIAAAAIAJgRIADgBQADABABADIABABQACAIgIAEQgIAFgCAAIAAAAgAg5g3QgCgNAHgFIADgEIACABIAGAAQABANgLAHIgFABIgBAAIAAAAgAgDhSIgNgBIgPgCIgCgBIgBAAIgGgBIACgCQAMgJAMgEIAFgCQAJgDAIAAIAGABIABAAIAJABIADABIgDABIgBAAIgJAEIgCABQgHAEgFAFIgDAHIAAAAg");
	this.shape_6.setTransform(17.2,46.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AAVB2IACAAIAGgCIAKgDIAMgGIACgBQAMgIAJgIQAIgIAJgLIAQgWQAEgEAAgGIAAAAIAAAAIABgBIAHgCQAOgBAQAEIAaADIARgBIAAAAIAAABQgUAKgJAKQgIAJABAOQACANAFAJQAEAGAFAEIgRAAIgXACIgTABIgGAAIgbAAQgRAAgPABIAAABIgbgEgAAAB4QgHAAgFgEIgPgJIgGgEIgIgEIgCgIQgDgZACgNQADgPAIgMIAQgXQAHgHAIgIIAEgEIAVgSIAAAAIAMgLIAAAAIAAABIABgBQAQANAEANQAFAOAGAMQAHANAJALQALAMARgEIAAAAIAAAAQAAAGgEAEIgQAWQgJALgIAIQgJAIgMAIIgCABIgMAGIgKADIgGACIgCAAQgKACgKAAIgBAAgABvAnIAAAAgAi3g4QgHgPgCgNIADgIQAEgNAJgFIADgCQAKgEANAAIAdABQAPABAPgCIAFAAIAXgDIAIgCIgDACIgGAEIgRALIgFAEIgSAJIgXAMIgRAKIgJgFQgNgFgJgJQgGgGAAgDIABgCIgBACQAAADAGAGQAJAJANAFIAJAFIgGAEQgLAJgLAGIgEACQgFgCgCgGg");
	this.shape_7.setTransform(25,70.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("ABqCWIgBgBQgHgGgJgCIgDgBIgKgDIgQgFIgbgIQgOgFgOAFQgJAEgFgBIAAgCIAAgDIAAgBQAAgGAEgHIAOgZIAPgXIgPAXIgOAZQgEAHAAAGIAAABIAAADIAAAAIgBABQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgJgFgKgCIgcgEIgegCQgIAAgIACIgIADQgKABAJgMIAQgXIAPgYIADgGIAAgBIAGgOIACgGIACgHIACgJIABgFIABgGIADAGIADAIIABACIACABQALAGAMAEQAIACAJAAIAAAAIAMgBIAZgFIACgBQAOgDAMgGQAMgFALgJQAIgGAGgKIADADQgGANAGAJIAQgLIADgBIAKgDIALgFQAGgCgBgHIAAgGIAEAEIAEADIAGAEIgBAEQgBgBgCANIgFAdIgBAEIAAABIgEAWIgFAcIgEAcQgCAQgFAMIgBADIgEAEIgEgEgAhfgrQgIgCgHgDIAAAAIgLgGQgHgEgFgHIgGgJQgHgNACgQIADgKQADgJAFgHQAFgHAGgEQAMAMAMAEQAKADALAAIABAAIAGgBQAOgCANgDIAagHIAbgIIAagJQAIgDAHACIgBAPQgBAPABAPQABAGACAEIgIAFQgNAHgNAGQgOAFgLAIQgMAJgMABQgHAAgHgBQgOgDgKAKQgIAHgLAAIgIAAg");
	this.shape_8.setTransform(62.7,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,95.4,84.7);


(lib.gifttogirls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AGgA1QgLALgBAKQgBAIABAJQACATgPAAQgOAAgOgDQgNgCgPgCQgOgBgPgDQgOgEgOgCQgPgDgPgDQgOgEgOAAQgPAAgPAAQgPAAgPAAQgOAAgPAAQgOAAgPAAQgNABgOABQgPAAgPABQgOAAgNgBQgPAAgOAAQgOAAgOAAQgFAAgFAAQgJgBgJAAQgOgBgNAAQgPgBgPgBQgOgCgOAAQgPgBgPADQgNADgOABQgPABgPACQgNACgOAEQgLADgJADQgCgIgBgEQgEgcAEgZQABgBAAAAQAAgDACgCQAeAAAfgCQAQgBAQgBQAKAAALgBQAEAAAEAAQgIgDgIgEQgBAAgBAAQgKgEgMgDQgHgCgIgCQgJgDgIgDQgNgEgPgCQgOgDgNgCQgLgBgLgCQgMgCgMgBQgPgCgQgBIAAAAQgLgBgLABIAAAAQAAACAAACQAEASAEASQADAJAFAHQAHAKAKAHQANAKANAIQAMAHAKAIQAJAIAIAKQADgCADgCAFDAHQAYANAOAGQAMAFAMAFQAJADAIAFQAIAEAGAFAEwgrQAJgBAKAAQAFgBAFAAQgBAGgBAFQgBALACAQQABAHADAHQgFAAgIAAQAAAAAAAAQgNABgNABQgLACgKABQgSACgPADQgNADgMADQgMACgMADQgKACgKABQgLABgLABQgOAAgNACQgKAAgJACQgHAAgGACQAJABAKAAQAGAAAHAAQACAAACAAQAIAAAIAAQAEgBADAAQAGAAAGgBQAMAAALAAQAOAAAOACQANABAMACQAJABAJACQAUACAUADQAXACAYAAQAKAAAKAAQAJAAAJAAQARAAAQAAAg9AgQAAgBAAgBQADgBACAAQAHgBAIgCQASgEARgHQAOgGAQgEQAMgEAMgBQAKgCAKgCQAOgCAOgCQANgBAMgBQAJgCAKgCQAKgCAKgCQALgCALgDQANgDANgDQAQgDAQgCQAQgDAQgCQAIgBAIgBQAGgBAGAAQACgBACAAQgIgCgJgCQgOgEgPgDQgGgBgHgCQgIgCgIgBQgOgEgNgEQgOgFgOgDQgOgDgNgFQgOgFgOgFQgGgBgFgCQgIgDgHgCQgJgDgBABQgOgEgNAAQgQgBgQADQgLACgNACQgPACgPADQgMADgOACQgMADgOABQgPACgOABQgQABgQAAQgNgBgNACQgNACgNACQgPADgPADQgOACgOACQgOABgNAEQgNADgOABQgBAAgBAAQgMABgLAAQgNgBgNACQgCAAgCAAQgBAAgBAAQABAAABAAQACABABAAQAOAEANAEQAOAFAOADQAOAEAMAFQAOAFANAFQANAFAMAEQAMAEALAEQANAEANADQABAAACABQAOADAOADQAJABAJAEQAEABAEABQANAFAOAEQANADANACQADABADABgACxgxQgBADgIgDQgGgDgHgCQgNgFgOgEQgMgEgLgDQgHgCgHgBQABACACADQAGAIAFAKQABADABAEQgKABgLABQgaAFgWADQANgPAJgQQgHACgIABQgUAFgQABQgEAAgFAAABtgrQAAAEAAAEQgBgEgBgEQABAAABAAgACbg2QgPADgNACQgEABgEACQAAABABABQgDABgDAAQgDAAgCAAAAmghQgCADgDAAQgGABgGABQgdAIgbALQAEgQAHgQQgFgCgGACQgUADgPACQgGABgEABAg7BHQAAAAAAABQAFABAFACQASgGAbgIQAOgFAQgDQALgCAKgDQAJgCAKgCQABAAAAAAQAJgCAIgCQAEgBAFAAAhxgKQADgCAFgDQAKgHgFgGQgCgCgCgBQAEgCACABQACABACABQAAAAABABQADACADACQAQAKAQANQADACAEABAh0gIQAPAIAQADQgDgBgCgBQgKgEgKgFQgBgBgCgBQgRgJgQgIQAEACAFAEQAIAFAHAFQACABABAAQABABACABQABgBACgBAiSgbQAQgJASACQAFAAADADAikAYQADABACACQANAGANAHQAMAHAOAGQAMAEALAFQAMAEANAFQAAgGAAgEQgCgTAAgKAlsg6QgQABgjAFQAAAMADAOQABAEADADQABACADABQgCgCgCgBQAJgBAJAAAmGgUQABACgBACAlwgUQACADABAFQANAQAYAJQAIADAIAEQAHAFAIAEQADACAFAEIAAAAAkhAjQAAgBABAA");
	this.shape.setTransform(41.6,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AGHBuQgOAAgOgDIgcgEQgOgBgPgDQgOgEgPgCIgdgGQgOgEgOAAIgeAAIgeAAIgdAAIgdAAIgbACIgeABIgcgBIgcAAIgcAAIgKAAIgSgBIgbgBIgdgCIgdgCQgPgBgPADQgNADgOABIgeADIgbAGQgLADgJADIgDgMQgCgOAAgNQAAgOACgMIABgBIADgFIAAAAIABAAIA7gCIAggCIAVgBIAIAAIgQgHIgCAAIgVgHIgQgEIgRgGQgNgEgPgCIgbgFIgWgDIgYgDIgfgDIAfADIAYADIAWADIAbAFQAPACANAEIARAGIAQAEIAVAHIACAAIAQAHIgIAAIgVABIggACIg7ACIgBAAIAAAAIgDAFIgBABIAAAAQgCAMAAAOQAAANACAOIADAMIgGAEQgIgKgJgIQgKgIgLgHQgOgIgNgKQgKgHgHgKQgFgHgDgJIgIgkIAAgEIADAAIADAAIAAAAIABAAIAGAAIAJAAIAAAAIAAAAIgJAAIgGAAIgBAAIAAAAIgDAAIgDAAIAAAAIgSABIAAAAQgDgDgBgEQgDgOAAgMIAzgGIACAAIAEABIAAgBQANgCANABIAXgBIACAAQAOgBANgDQANgEAOgBIAcgEIAegGIAagEQANgCAOABQAPAAAQgBIAdgDIAagEIAagFQAPgDAPgCIAYgEQAQgDAQABQANAAAOAEQABgBAJADIAPAFIALADIAcAKQANAFAOADIAcAIQANAEAOAEIARADIAMADIAdAHIABAGIAMgBIAEgBIASgBIAKgBIgBALQgBALACAQIAEAOIgNAAIgBAAIgaACIgVADIghAFIgYAGIgYAFIgUADIgWACIgbACIAbgCIAWgCIAUgDIAYgFIAYgGIAhgFIAVgDIAagCIABAAIAmATIAYAKIARAIIAOAJIgRAAIgOAAIgBAAIgBAAIgTAAIgTAAQgYAAgXgCIgogFIgSgDIgagDIgbgCIgEAAIgBAAIgFAAIgNAAIgMABIgHABIgFAAIgEAAIgBAAIAAAAIgDAAIgDAAIgEAAIAAgFIgTACIgNACIATABIANAAIAEAAIADAAIADAAIAAAAIABAAIAEAAIAFAAIAHgBIAMgBIANAAIAFAAIABAAIAEAAIAbACIAaADIASADIAoAFQAXACAYAAIATAAIATAAIABAAIABAAIAOAAIARAAQgLALgBAKQgBAIABAJQACATgOAAIgBAAgAgxBLIAtgOIAegIIAVgFIATgEIABAAIARgEIAJgBIgJABIgRAEIgBAAIgTAEIgVAFIgeAIIgtAOIgJgDIgBgBIABABIAJADIAAAAgAg7BHIAAgDIAAgHIgCgXIAAgGIAAgBIAAgBIAFgBIAPgDQASgEARgHQAOgGAQgEIAYgFIAUgEIAcgEIAZgCIATgEIAUgEIAWgFIAagGIAggFIAggFIAQgCIgQACIggAFIggAFIgaAGIgWAFIgUAEIgTAEIgZACIgcAEIgUAEIgYAFQgQAEgOAGQgRAHgSAEIgPADIgFABIAAABIAAABIgGgCIgagFQgOgEgNgFIgIgCIgSgFIgcgGIgDgBIgZgHIgYgIIgZgJIgagKQgNgFgOgEIgcgIIgagIIAaAIIAcAIQAOAEANAFIAaAKIAZAJIAYAIIAZAHIADABIAcAGIASAFIAIACQANAFAOAEIAaAFIAGACIAAAGIACAXIAAAHIAAADIgZgJIgXgJQgOgGgMgHIgagNIgFgDIAFADIAaANQAMAHAOAGIAXAJIAZAJIAAAAgAlsgMQAMAQAYAJQAIADAIAEIAPAJIAIAGIgIgGIgPgJQgIgEgIgDQgYgJgMgQIgEgIIAEAIgAhVADIgFgCIgUgJIgDgCIAIgFQAHgEAAgFQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgDgDIAAgBIADgBIABAAIAAAAIABAAIAAABIAEACIABABIAGAEIAgAXIAHADIgHgDIgggXIgGgEIgBgBIgEgCIAAgBIgBAAIAAAAIgBAAIgDABIAAABIADADQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAQAAAFgHAEIgIAFIghgRIABgBIAAAAQANgGAOAAIABAAIAAAAIAEAAIABAAQAFAAAEADQgEgDgFAAIgBAAIgEAAIAAAAIgBAAQgOAAgNAGIAAAAIgBABIAJAGIAPAKIADABIADACQAPAIAQADIAAAAgAgjgJQAbgLAdgIIAMgCQADAAACgDIAwgIIAVgCIgVACIgwAIQANgPAIgQIgNADQgVAFgQABIgIAAIAIAAQAQgBAVgFIANgDQgIAQgNAPQgCADgDAAIgMACQgdAIgbALQAEgQAHgQQgFgCgHACIgiAFIgLACIALgCIAigFQAHgCAFACQgHAQgEAQIAAAAgABtgjIAAgIIAFAAIAAAAIAAAAIAHgBIgCgCIAIgDIAdgFIgdAFIgIADIACACIgHABIAAAAIAAAAIgFAAIgCAAIACAIgABehEQAGAIAEAKIADAHIgDgHQgEgKgGgIIgDgFIAOADIAXAHIAcAJIAMAFIAGABQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgGgBIgMgFIgcgJIgXgHIgOgDIADAFgAg9AgIAAAAgAiSgbIAAAAg");
	this.shape_1.setTransform(41.6,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYASIABAAIADADIgEgDgAAVgTIgBgBIABAAIAEAAIAAABIgEAAg");
	this.shape_2.setTransform(3.2,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,85.3,23.9);


(lib.boysGift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("Ag8AnQgEAHgEAJQgNgVAOgaQgKAGgHAJQgBgPAMgMQgMABgKAFQAKgUAaABQgKgGgHgHQAWgGAWAIQgEgFgGgEQAPgCAMAEQALgLAMgHQgCAJACAHQAXgSAeAFQgRADgNAKQAVAAATAHQAVAJgVABQAVAMAEARQgKgFgNgEQACAFgBADQgCgBgCgBIAAAAQgDAAgCgBQgbgHgdgGQAHAHAFAHQgHgEgIgCQgMgDgPABQgDAOgDAQIAAAAQgCAJgBAJQgHgRgIgPQgEAFgEAHQgDAGgEAHg");
	this.shape.setTransform(30.1,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AGbnbQgFAIAHAQQAGAOAEAOQACAGACAGQADAGACAGQAGAOADAOQADAOAEANQAFAOACANQADAOADANQADAPAEAOQADAOAFANQAFAOAEANQADAHACAJIgZATQgJAGgDACQgBAAgBAAIAAAAIAAAAQgBABAAAAQgKACgKADQgGABgGACQgGACgHABQgMADgMADQAAAAgBAAQgIADgIABQgHACgIACQgLACgLACQgdAFgcAHQgIACgJACQgEAAgEABIgEACQgBgBgCAAQgJgDgOgDQgRgEgLABQAFgDAFgDQAMgIAGgNQAHgNgBgOQgBgPgIgNQgCgDgBgCQgEgBgDgCQgBgBgBAAQgIgGgLgEQgPgHgQgDQgHgCgGgBQAGAEAFAHQAJAMAAAKQgLgEgKgIQgKgIgLgDQgVgHgVgFQACADACAEQAGAMgDANQgBgEgDgDQgFgEgBgGQgCACgDABQgNAGgNgCQAEgGAAgIQgFAEgGAFQgQANgQAFQAEgJACgIQgGADgHAGQgPALgNAGQADgMAIgMQAJgMANgHQAJgGALgDQgBgCgBgDQgCgGADgGQADABACACQAGAFAFAAQgIgMACgOQAFACAEADQgCgGgBgGQgCgFgBgFQgBgGgCgGQgEgOgDgNQgFgSgEgPQAEAAAHgDQAMgHAMgFQADgCADgBQAKgEALgFQAMgFANgFQABAAABgBQAMgEANgFQAOgFAOgDQANgDAOgDQAOgCAOgCQAQgCALgCQABAAABAAQAAABgBAAQgEAEgFADQgKAIAMAHQAHAEAHgDQADAAADgCQAEgDAEgHQgCgEgCgFQgCgHACgEQABgCADgCQABgBACgBQALgHALgFQAIABAJAEQAEgJASgCQAAgBABgBQADAAADAAQADABADABQAOgBANAEQAEABACACQgCABgCAAQgKACgBABIAAAAQgEANgDAOQgEAPgNgLQgDgDgCgEQgFgHgBgKQAAgGABgEQABgEABgCQABgBAAAAAHDikQAAgCgBgCQAAgMgCgMQgBgNgBgNQgBgQgCgPQAAgNgDgNQgDgNgCgOQgDgPgDgQQgCgKgDgLQgDgJgDgKQgBgDgBgEQgCgFgCgGQgCgHgCgGQgBgEgBgDQgEgMgDgMQgFgSgDgSQAAgBAAAAQAAAAAAAAQAKgBAKgCQAFgBAEgBAFvnUQAAAAABAAQALgCAMgCAHDikQAAAAAAABQgBAAAAAAAHRisQgKAHgEABAF8iSQgEANACAGQACAPgHANQgGANgJALQgJALgOAFQgOAGgOAEQgNAEgNACQgIACgFAAQgEgFgFgFQgHgIgEABAFDm4QgJAGgDACQgFgEgDgGQgCgDgBgEQgCgEAAgDQAAgEABgDADtm6QAEgDAEgDQACgCAGAAAEqm4QgDANgLAKQgIAHgHgGQgHgGgFgIACoj4QgEgBgDABACoj4QACAAACAAQAGAAAGAAQAIAAAIAAQAEAAAEAAQgLgGgNgDQgQgFgQAAQgJAAgIACQAHgEAIgDQAKgEALgBQAJgCAHgBQgMgFgPAAQgOAAgMAEQgQAEgRAEQgKACgJAEQgKAFgDgIQgEgHgCgHQgCAHgCAGQgIgDgJgHQgCgBgBgBADRjUQACAAACABQACAAACABQACgIgFgGQgGgHgIgEQgNgIgPgEQgCgBgCAAAAkkXQABACABACQABgBAAgCQgBAAAAgBQgBAAgBAAgAASj5QADAAADgBABtjJQgFAAgFADQgCABgBACQgEAEADAHQAEALAKAAQAAAAABAAQACgBAEgBQABgBABgBQgDABgCgCQgLgJAYgBAB8jFQgCgEgHgBQgEgBgCACQAHAAAIAEQACACAAADQAAACAAACQgBADgBACQgCAEgEACAARh7QAGAHAJADQAKADADgHAADi8QgOADAOAKAAIigQgCABgCABQgOAFgHgNQgHgPAIgNQAHgMAJAAAh2haQARgLALgBQAFAAACgEQACgDADgCQAKgJAPgFQABgBABAAQAMgEAMgEQANgDAXgCQABADABADQACAGAEAEAAIigQACgCABgCAAJiLQgEgMADgJAgjggQgIABgIADQgFACgFADQgLAIgLAHQgNAJgFANQgDAHAAAHQgBAGAAAHQABALACALQABABAAACQAAAAAAgBQAFgCAFgCQANgFAOgBQAHAAAGAAQAIAAAIABQAQABAOgFQACgBABgBQACgBABgBQABgCABgCQAEgHAHgJQABgBABgCQAJgJAHgKQAIgKAMAAQAQABAPAEQAMAFANAEQAFADAGACQgFAFgIADQgFACgFgCQgMgCgKgGQgDgBgDgCQgCgBgDgBQgGgFgFAEQgJAIgFALAAAhuQAFgJAMgEADRjUQgEgHgDAEAC2i+IAAAAQABAJgJADQgHACgGgCQgGgDgDgHQgCgDABgCQAAgDACgCQADgDADgCQAEgCAFAAQAFABAEADQABACACACQABADABAEQgDAEgGABQgIgIAPgEABziMQgKAOAVACQAJABAGgGACeimQAKACgFAMQgDAAgCABQgCAAgCAAQgDgBgBgDAC7h9QgCABgDABQgFADgGABQgEABgFAAAEMgpQAEAFADAGQABABABABQAGAJAFAFQABAKAEAKQAFALAAALQAAADAAACQAAAPgEANQgEAOgHAMQgIALgFAOQgFAOgIALQgIALgLAIQgBABgBAAQgFAEgGAEQgOACgLAIQgGAEgHACQgGADgHACQgPADgPACQgOACgOAAQgIABgHAAQAAAAgBAAQgGgBgGAAQgOgBgOgDQgOgCgNgDQgPgCgOgEQgOgDgOgEQgOgEgNgGQgNgGgNgIQgMgHgDgHQAAgBABAAQAIgFAIgGQALgHANgEQABgBABAAQANgEANgGQAMgHAMgHQALgHAGgLQADgFAEgEQAOADANAHQAHADAFgBQADgBADgDQAKgGAAgLQAAgGgEAAQgGAAgFABQgBgKAAgGQAAgFAAgEAC2h7QgJANAHAMAnHAtQgBgIABgJQAAgBAAgBQABgOAKgKQALgJANgHQANgIAOABQgCACgBACQgDAEAAADAkrhAQAAAAAAgBQAHgNAKgHQALgJAQAGQAOAFAQAEQABgBABgCQAAAAAAAAQgBgBAAgBQgEgHgCgHQgBgCAAgBQAAgBAAgBQAAAAAAAAQgBAAAAgBQAAgBAAgCQgCgJABgJQgLgBgEgIQgCgDgBgFQAAgEACgBQAFgDADADQACADABAGAkrhAQgEAHgDAGAk7AIQAIgJAFgHAlmDbQgBgBgBAAQgFgDgBgEQAAAAAAAAQAHgCAHgCQACgBADgBQAFgCAEgCQAGgEAEgFQgCgQgSACQgOACgOABQgQABgFgPQgEgOAAgOQAAgPAEgOQACgIABgJQABgGABgFQABgPgCgOQgDgPAAgJIAAgBQAAAAAAgBQABABABAAQAKAEAOAAQANAAAMgEQACAAACgBQAOgEAJgLQACgCABgCQAPABANgHQAOgFAOgFQAOgFAOgEQAGgCAFgCQABADAAACQAAABABAAQALAKAGAKQAEAGABAJQABAEABAEQACANACAMQABAMADAMQADAMAAANQAAABAAABQAAAJAAAIQAFgJAKgHQAAAAABgBQgCAPAKAPQACADADADQAAAAABABQAIAHALAAQACgBAFgBQAPgEANgGQAEgCADgBAmJgVQAGgIAHgIQAJgKAOgDQAOgEAPgDQAOgEAPgDAiWhzQACgBAFgBAh4iWQABAGABAHQADAKgBAIQAAAEAAADQAAADAAACQAAAAAAABQAAABAAABQAAABAAAAQAAAHgCAGQAAAEgCADQgBAEgDADQgFAIgKAFQgEADgFABQgFACgGAAQgDABgEgBQgKAAgKgEQgEgBgDgCQgIgEgEgFQgBAAgBAAQgGACgDgDQgDgDgDgEQgBgBAAAAIAAAAAh4ihQAAAFAAAGQgYgCAAAQAi6g9QgHAEAAAIAjhhPQgDAHgFAGAiKhqQAAAAAAAAQAAAFgCAEQgBAEgEADQgFAGgGABQAAAAgBAAQgGAAgFgDQgCgBgBgBQAAAAgBAAQgLgGgKgIQgDgCgCgGQACACAEABQAMAFAPABQAIAAAHgCQAFgBAFgCQABAAAAAAQABAAAAAAgAh+AjQADgCADgEQAAAAAAgBQAIgMACgOQACgOgKgKQgJgKgNgHQgOgIgFgKAiniMQgMgJgOAIAh+AjQgEACgEAAAhlBCQgHADgGAEQgBgFAAgFQgCgQgJgMAinBoQALgIAEgNQAFgOABgOQABgJgBgJQAAgBAAAAQAAgEAAgEQAAgBAAgBQgCgMABgDAi0C+QgCgBAAgCQAAgPgCgNQgBgPABgOQAAgBAAgBQABgDAAgEQgCADgBADQAAABAAAAQgBABAAAAQgCAHgBAGAjjBDQgEACgDACQADACADADQAGAFAGAFAjagPQADAVACAWQAAABAAAAQABAQADAQQABALACAKQAAACAAABQABAJACAJQABAKACAJQABAKAAAKQAAAEAAAEQgBAQgBANAj/BXQgBgDAAgEQgDgTgBgRIAAAAQAAgBAAgBQABABAAABQAMAOANANQgFADgFAEQgEAEgHAFQAAACAAADIAAAAQAEALgCAFQAAgFgBgFQAAgDgBgDAjGDGQABAAAAAAQAHgCAGgEAlmDbQABAAAAgBQACgBACgBQACAAABAAQAZgFAZgHQAKgDAKgBQAJgCAJgCQANgDAOgCQAIgCAHgCQAJgCAEgDAjGDGQgFACgFABQgMADgNACQgNACgNABQgNABgMADQgMADgNADQgUAEgNAFAkJDjQgCACAGAMQAGAKAEAMQABABAAABQABACAAABQAFAAACAAQAQAHARAFQANAFANABQAOADANABQAGABAFAAQAFAAAEgBAj1EFQAJgJASgMQANgIAOgFQAMgDANAAQAIAAAEgCQABAAAAAAQAAAAAAAAQgCgBgCgCQgKgJgOgBQgOAAgDgLAiZCNQgFAOAAACQADAYAIAXQADAHADAGQACAGADAGQACAGAEAFQgFgDgEgCQgDgCgDgBQgLgHACgDAiCDwQAFADAGAEQANAIALAKQAMAKAAAPQABADAAACQAAAEAAADQgCAOgHAMQgFAMgHALQgHAMgIAMQgFAHgFAGQgEAFgEAEQgKALgLAHQgLAJgNAFQgHADgCACQgCAAgCAAQgEABgFAAAk7BGQABgDANgIQAEgDAEgCQAEAXgEAaQgBAEAAADQAPgHAQgKAltBaQAQgJAOgLQAAATgDATQgCAOgBAMQAAADAAAEQANgNAOgKQAFgEAFgCAmBBeQAAACAGANQAFANAEAOQABAFACADAnHAtQAAAFABAFQADAPAEANQACAHACAHQAAAAAAABQAEANAFAMQAGAOAFANQAFAMAFAMQABAAAAABQAAAAAAABQAGAOACAOQAAAPgDANQgCAGAAAFQgKAAgEACQgPAFgOAFQAAgCAAgCQAAgDgBgDQAAgBAAgCQAAgLgDgMQgCgLgDgKQgDgMgDgLQgDgLgCgMQgDgNgDgNQgDgPgDgPQgEgVADgTQgBgBALgDQALgDAJgEgAmkDnQgMAEgPAFQgDABgDABAmEEKQgBAAgBABIAAAAIgBAAQgLAEgFgMQgCgHAAgIQAAgBAAAAAlbEBQABAAABgBQABgBABgCQADgKgDgGQgCgDgBgDQgEgGgGgEQgBgBgBgBAl/DwQABAFACAIQABAKAEAGQAAAAAAAAQAAAAAAABIAAAAIAAAAQgBAAgBgBQgFgDgGAAIAAAAQgFgMABgMAltEGQAAAAAAAAQAHgFAJAAQAAAAABAAQABAAAAAAQAAAAgBAAQAAgBAAAAQgGgCgEgFQgJgJgFgKAkDETQgOAAgOABQgPACgNAGQgGADgFADQgHAFgHAHQgHgFgGgMQgGgLgFgLQgBAAAAgBQgCACgCACQgDADgDABAkDETQABAEAAADQADAPgBAQQAAALgKAJQgLAJgOAIQgPAIgQAHQgLAEgLAFQgMAHgMAHQgBABAAAAQgNAHgMAHQgKAGgHAHQALAFAPAAQAOgCAOABQALAAAHAIQAFAEAAAHQABAFgCAEQgDAJgJAFQgHAEgIAAQgIAAgJgBQgVgCgVgCQgNgBgNAAQgUgBgOgJQgFgCgCgGQgEgPAMgFQAFgDAFgEQALgJAIgOQABgCABgCQAGgJAIgIQAKgKAKgMQAOgSATgLQAQgJARgEQAFgBAFgBQAIgCAHgBQABgGgDgGAhPHJQABAIgPACQgNACgOABQgPACgOADQgOADgQAAQgPgBgOAAQgNgBgOgBQgOAAgOABQgEABgCgCQgGgFgCgKQgCgNAJgIQALgKANgFQAMgGAKgKQAIgJAEgLQABgCABgDQAFgNAHgMQAIgMAGgMQAIgOAMgEQAOgFAFgMAj8EQQgBADgFAAQAAAAgBAAAh2GnQAOgIANgUQACgDADgEQAEgFAGgFQAJgIAIgJQAIgKAKgIQAMgJAMgEQAOgEANgEQAKgDgRgJQgMgHgFgJQAHgFAHgEQAOgFAOgDQANgDAOgCQALgBAMgDQACAAACAAQANgDANAAQAOAAAOACQAEAAABgCQABgDgCgGQgGgNgGgNQgFgKgFgJAhPHJQAAgBAAgBQgBgDgBgCQAIgHgBgHQgLgIgMgBQgLgBgJADQgCAAgCAAQgNAFgPABQgKACgKgCQgKgCgLABAC7C1QADAQAEAJQAFAMADAMQAEAOAEAOQABAFABAFQAAABAAAAQgBAAAAgBQgBAAgBAAQgCgBgBAAAAZA6QACgDADgDABBAsQgHABgGACQgBAAgBAAQgIgEgEgHABlCvQACgBADgBQALgEAMAAACPFEQgDAIgIAHQgMALgPAFQgNAGgNAEQgOAFgOAEQgLADgLAFQgFADgFADQgHAFgGAEQgJAJgIAMQgHALAJAAQACABAFgBQAQgDAQgEQAPgDAPgCQAMgCAMgBQAOgBANgGQALgFALgBQAMATgVAHQgFACgFABQAHACAFAGQACAFgHAEQgCABgCACQAJAHgIAFQgIAEgKgBQgHgBgHgCQgGgBgIgCQgKgCgLgBQgNgBgMgCQgTgDgSgBQgBgBgBAAQgRAAgPABQgOABgLAJQgFAAgEgCAhSEnQAYAUAIAGQARgKALgLQAEgDAEgDACNEJQAEABACAAQACABAAgBQASgEAWACQAJAAAIADQAAAAAAABQACAFABAFQACAOABANQAAALgMAKQgLAJgRgBQgPgCgOgIQACgFAAgGQABgQgDgN");
	this.shape_1.setTransform(49,48.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AnGFpIAAgGIAGgFIAbgJIgbAJIgGADQgBgMgCgMIgGgVIgFgWIgGgXIgGgbIgFgdQgEgWACgTQAAAAAKgDIAUgHIABAKQADAOAEAOIAEAOIAAAAIAKAaIALAaIAKAYIABACQAGAOABAOQABAPgEAOIgCAKQgJABgFACIgcAKIgBgFgAllFLIgBgCIADgCIAEgBQAZgEAZgHIATgFIASgEIAbgFIAPgDQAJgCAFgEQgFAEgJACIgPADIgbAFIgSAEIgTAFQgZAHgZAEIgEABIgDACIgDgBQgGgDgBgDIAAgBIAOgEIAFgCIAKgEQAFgDAEgGQgBgQgSACIgdADQgPACgGgPQgDgOgBgPQAAgOAEgOIAEgSIABgLQACgOgDgOQgCgQgBgJIADAAQAKADAOAAQANAAAMgDIADgBQAPgEAIgLIAEgEQAPAAANgGIAbgLIAdgKIAKgEIACAGIAAABQALAJAHALQAEAHABAIIABAJIAEAZIAEAXQADANABAMIAAADIgBARIgDAGIAAABIAAABIgDAMIADgMIADABQgCANACAPIABAcQABABAAAAQAAABAAAAQAAABABAAQAAABAAAAIgDACIgOAGIAAAAIgLADIgYAEIgbAEQgMABgNACIgYAGQgUAEgOAGIgEADQgEgHgFgEgAjJEFIgCAcIACgcIABgIIgCgVIgDgSIgCgSIgBgEIgDgVQgCgPgBgQIAAgBIAAAAIgGgsIAGAsIAAAAIAAABQABAQACAPIADAVIABAEIACASIADASIACAVIgBAIgAl9DbQAGAOADANIADAJIgDgJQgDgNgGgOIgGgPIAGAPgAlXD7QANgMAPgLIAJgFIgJAFQgPALgNAMIAAgBIAAgGIAEgZQACgQAAgOIAAgJQgOALgQAJQAQgJAOgLIAAAJQAAAOgCAQIgEAZIAAAGIAAABgAknDdQAPgIAPgJQgPAJgPAIIAAgHQADgOAAgOQAAgLgCgLIgJAGQgMAHgCAEQACgEAMgHIAJgGQACALAAALQAAAOgDAOIAAAHIAAAAgAkADKIABAGIABALQACgGgEgLIAAAAIgBgEIABAEIAAAAgAkGCbQABAQADATIABAIIgBgIQgDgTgBgQIACgBQALAOAOANIgKAHIgMAKIAMgKIAKgHQgOgNgLgOIgCgCIAAACIAAABgAjmC7IANAKIgNgKIgFgGIAFAGgAjrC1IAGgEIgGAEgADtgGIgYgGQgQgEgLACIAKgHQAMgIAGgNQAGgMgBgPQAAgPgIgNIAAgEIAFABQACgIgFgGQgHgGgIgFQgNgIgPgEIAAgBIANAAIAQAAIAHAAQgLgFgMgEQgQgEgRAAIgCgGQAKgDALgCIAQgDQgLgEgQAAQgNAAgMADIgiAJQgJABgJAFQgKAEgEgHIgFgPIgFAOQgHgDgKgHIgDgCIgBgBIgBgBIgEgMIgCgJIgEgNIgHgbIgIggQAEAAAGgEIAZgMIAFgCIAVgJIAagLIABAAIAZgJQAPgGAOgDIAbgFIAcgFIAagDIABABIgIAGQgLAIANAHQAHAEAGgDQADAAADgCQAEgDAEgHQAFAIAHAGQAHAHAIgIQALgJADgOIAFgCQAEAHAFAEIALgIIAGAGQAMALAEgPIAIgaIAAgBIALgDIADAAIABgBIAYgEIAAACIAAgCIAUgDQgGAJAHAQIALAcIAEAMIAEAMQAGANAEAPIAHAbQAEANADAOIAFAbIAHAcQAEAOAFAOIAJAaIAEARIgYASIgOAJIAAAAIgBgFIgCgXIgDgbIgCgeQgBgOgDgMIgEgcIgGgeIgGgVIgFgTIgDgHIgDgLIgFgOIgBgGIgHgYQgFgSgDgSQADASAFASIAHAYIABAGIAFAOIADALIADAHIAFATIAGAVIAGAeIAEAcQADAMABAOIACAeIADAbIACAXIABAFIgBAAIgBAAIgTAFIgMADIgNAEIgYAGIgBAAIgQAEIgQAEIgVAEQgdAFgcAHIgSADIgHABIgEACIgDgBg");
	this.shape_2.setTransform(49.1,37.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AgyBWIADABIgBABIgCgCgAAxhXIABAAIgBABg");
	this.shape_3.setTransform(18,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AgKHXIgNgDIgOgDIgWgDIgZgDQgSgDgTgBIgCgBQgRgBgQACQgNABgLAJQgFAAgEgCIAAgCIgCgFQAHgHgBgHQgLgIgMgBQgKgBgKADIgBgGQAOgIANgUIAFgHQAFgFAGgFQAJgIAHgJQAJgKAKgIQALgJANgEIAcgIQAKgDgSgJQgNgHgFgJQAHgFAJgEQAOgGAOgCIAagFIAYgEIAEAAQAMgDAOAAIAaACQAEAAABgCIAHABIACAAQASgEAWACQAIAAAJADIAAABIACAKIADAbQABALgMAKQgMAJgQgBQgPgCgOgIQABgFABgGIAAgFQAAgNgDgLQADALAAANIAAAFQgBAGgBAFQgEAIgHAHQgMAKgOAGIgaAKIgdAJQgLADgKAFIgLAGIgMAJQgKAJgIAMQgHALAIAAIAIAAIAggHIAegFIAZgDQAOgCALgFQAMgFALgBQALATgUAHIgLADQAIABAEAHQADAFgHAEIgEADQAIAHgIAFQgGADgHAAIgEAAgAgJDIIgNgBQgNgBgOgDIgcgFIgdgGIgdgHQgNgEgNgGIgbgOQgMgHgDgHIABgBIARgLQALgHANgEIACgBQANgEANgGIAYgOQALgHAHgLIAGgJQAPADANAHQAGADAGgBQADgBADgDQAKgGAAgLQgBgHgEABIgKABIgBgQIAAgJIADgHIAHADQAKAGAMACQAFABAEgBQAIgDAFgFIgLgFIgZgJQgPgFgPgBQgNAAgIALIgPATIgDADIgKAQIgCAEIgEACIgDACQgOAEgQAAIgQgBIgNAAQgPABgNAFIgJAEIgBABIAAgDQgCgLgBgLIAAgFIAAgIQABgHADgHQAEgNANgJIAXgPIAKgFQAHgEAJAAQgJAAgHAEIgKAFIgXAPQgNAJgEANQgDAHgBAHIAAAIIAAAFQABALACALIAAADIgNAHIAAgKQgCgQgJgMQADgCACgEIABgBQAHgMACgOQACgOgJgKQgJgKgOgHQgNgIgFgKIAKgCIAKgEQAJgFAGgIIAEgHIACgHQARgLALgBQAEgBACgDIAFgFQALgJAPgFIACgBIAYgIQAMgDAYgCIADAGQACAGAEAEQgEgEgCgGIgDgGQgDgMACgJIgEACQgOAFgHgNQgHgPAIgNQAHgMAKAAQAQgFAPgNIAMgJQgBAIgDAGQAMACANgGIAFgDQACAGAEAEQAEADABAEQADgNgHgMIgEgHQAVAFAUAHQAMADAKAIQAJAIALAEQABgKgJgMQgFgHgHgEIAOADQAQADAPAHQAKAEAJAGIABABIAIADIADAFQAIANAAAPQABAOgGANQgGAMgMAJIgKAGQALgBARAEIAXAGIADABIAEgCIAIgBIARgEQAcgHAdgFIAVgEIAQgEIAQgEQgEANABAGQADAPgHANQgGAMgJAMQgJAKgOAGIgcAKIgbAGIgNACIAIALIABACIALAOQACAJAEALQAEAKABAMIAAAFQgBAOgDAOQgEANgIANQgHALgFAOQgGAOgHALQgIALgLAIIgCABIgLAIQgPACgLAIIgNAGIgNAFIgdAFIgdACIgNABIgBAAgAgECzIgEACIAEgCQAKgEALAAIABAAIABAAIgBAAIgBAAQgLAAgKAEIAAAAgACVgtIAIAKIgIgKIAAAAIgHgGIgBgBIAAAAIgDgBIAAABIAAAAIAAAAIAAgBIADABIAAAAIABABIAHAGIAAAAgABGhcQgDgGAAgFQAAgHAFgHQgFAHAAAHQAAAFADAGgAhthoQAFgJAMgEQAFAHAKADIABAAIAAAAIAEABIAAAAIAAAAQAFAAADgFQgDAFgFAAIAAAAIAAAAIgEgBIAAAAIgBAAQgKgDgFgHQgMAEgFAJgAA2hwIAEgBIADAAIALgEIAFgCIgFACIgLAEIgDAAIgEABIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAgAASh2QAHAAAFgEIABgBIgBABQgFAEgHAAIAAAAIAAAAIgBAAIgBAAQgPgBAAgHQAAgEADgEQgDAEAAAEQAAAHAPABIABAAIABAAIAAAAIAAAAgAAsiRIACAAIABAAIAGgBIABgGQAAgHgHgBQAHABAAAHIgBAGIgGABIgBAAIgCAAQgDgBgCgDQACADADABgAhmiaIAEgEIgEAEgAAAjDQgFAAgGADIgDADQgEAEADAHQAFALAJAAIABAAIAFgCIADgCQAEgCABgEIACgFIAAgEIgBgFQgDgEgHgBIgBgBIgDACgAhripQgHgFAAgDQAAgEAIgBQgIABAAAEQAAADAHAFgAAxjFIgGAFQgCACgBADQAAACACADQADAHAGADQAFACAIgCQAIgDAAgJIAAAAIgDgHIgDgEQgDgDgGgBIgBAAQgEAAgDACgACemaQgHgGgFgIIgDgJIgCgHIABgEQACgDACgBIAEgCIAVgMQAIABAKAEQADgKASgBIAAABIgCAGIgBAGIAAAEQABAKAFAHQgFgHgBgKIAAgEIABgGIACgGIAAgBIACgCIAFAAIAHACQANgBAOAEQADABACACIgDABIgLADIAAAAIgIAbQgEAPgMgLIgFgHIgMAIQgFgEgEgGIgDgHIgBgHIABgHIgBAHIABAHIADAHIgEACQgEANgLAKQgEAEgEAAQgDAAgEgDgAB3mdQgNgHALgIIAIgHIACgBIAIgGQACgCAFAAIgBAEIACAHIADAJQgEAGgEAEQgDABgCABIgGABQgEAAgEgCg");
	this.shape_4.setTransform(60,47.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3D28D").s().p("AAGFKIgdgBIgagBQgPgBgOABQgDABgDgCQgGgEgBgLQgCgMAIgJQALgJANgGQANgFAJgLQAIgJAFgKIACgFQAEgOAIgMIAMgYQAIgOAMgEQAOgEAFgNIAAgIIABAAIABAAIAGAAIACgBIgCABIgGAAIgBAAIgBAAIgLgBIgbgDQgMgCgNgEIghgMIgHgBIAAgCIgBgDIAFgCQAJgJASgMQANgIAOgEQALgEANAAQAIABAFgCQgDADAMAGIAFADIAJAFIALAIQANAHALAKQAMAKABAPIAAAFIAAAIQgCANgGAMIgNAXIgPAYIgKAOIgIAJQgKAKgKAHQgMAJgNAGIgHAEQAJgBAKADQAKABAKgBQAPgCAOgEIADgBQAJgCALABQAMAAALAJQABAHgIAGIACAFIAAACQABAJgOABIgcAEQgPABgOADQgOADgOAAIgBAAgAgJEfIgJABIAJgBIAFgBIgFABgAiwE+IgRgBIgqgDIgbgCQgUgBgOgIQgFgDgBgGQgFgOAMgGIAKgHQALgIAIgOIACgEQAGgKAIgIQAKgKAKgMQAOgRATgLQAQgJARgEIAKgDIAPgDQABgFgDgGIALgGQANgHAPgCQAOgBAPAAIABAIQADAOgBAQQgBAMgKAIQgKAKgPAIQgPAIgQAGQgLAEgKAGIgZAOIgBAAIgZAOQgKAGgGAIQALAFAOgBQAPgBAOAAQAKABAHAHQAFAFAAAGQABAGgBAEQgEAIgIAGQgHADgHAAIgBAAgAjAB6QgFgEgGABIAAAAQgEgKAAgJIABgGIgBAGQAAAJAEAKIAAAAIgBAAIgBAAIAAAAQgMAEgEgLQgDgIAAgIIAAgBIACgKQAEgOgBgPQgBgOgGgOIgBgBIAAgBIgLgYIgLgZIgJgaIAAgBIgEgNQgEgOgDgPIgBgJIAAgRIAAgCQABgPALgKQAKgJANgHQAOgIANAAIgDAFQgCADAAADIAAAAIAAAAQAAgDACgDIADgFIANgQQAKgJANgEIAdgHIAdgHIAAAAQAHgNALgIQALgIAPAFQAOAFAQAEIADgCIAHAHIAAABIAAAAIAEABIAAAAIADAAIABAAIABAAIABgBQAFAFAHAEIAHAEIgHgEQgHgEgFgFIgBABIgBAAIgBAAIgDAAIAAAAIgEgBIAAAAIAAgBIgHgHIgBgBIAAAAIgBgCQgEgGgCgHIgBgEIAAgBIAAgBIAAAAIgBgEQgBgJAAgIQgLgCgEgIIAHgMIAHgNQAJAQAHARIADgSIAAgBIAGgeQAPgBALADQAJADAHAEQgFgIgHgHQAcAGAcAIIADAGIAAALIgCAAIgBAAIgCAAIAAAAIAAAAQgUAAAAAOQAAgOAUAAIAAAAIAAAAIACAAIABAAIACAAIACANQACAKgBAIIAAAIIABAEIAAABIAAACIAAACQgBAGgBAGIgDAHIgDAHQgGAJgJAEIgKAFIgKACQAEAKAOAHQANAIAKAJQAJAKgCAQQgCAOgIAMIAAAAQgDAEgDACQAKANABAPIABAKIANgHIABAAIAJgFQANgFAOAAIANAAIARAAQAQABANgFIAEgBIADgDIACgEIALgPIACgDIAQgUQAIgLAMABQAQAAAPAGIAZAJIAMAEQgGAGgIADQgEABgFgBQgNgDgKgFIgGgDIgEgDIgCgBIgEgBIgBAAIAAAAIgDAAIgBABQgKAIgFAMQAFgMAKgIIABgBIADAAIAAAAIABAAIAEABIACABIAEADIgEAGIAAAKIACAPIAKgBQAEAAAAAGQAAALgKAHQgDACgDABQgFABgGgDQgNgHgPgCIAGgGIgGAGIgHAJQgGAKgLAHIgZAOQgMAHgNADIgDABQgNAEgKAIIgRAKIgBABIgGADQgOAHgPADIgHABQgLAAgIgGIgBgBIgFgFQgKgQACgOIgBAAQgJAHgGAKIAAgRIAAgDQAAgNgCgMIgEgYIgEgYIgCgJQgBgIgEgHQgGgLgLgKIAAgBIgCgFIgLAEIgcAKIgbALQgNAGgPgBIAMgRIgMARIgEAFQgJALgOAEIgDABQgNADgNAAQgOAAgKgDIgCgBIAAABIAAAAQAAAJADAPQACAPgBAOIgBALIgEASQgEANAAAPQAAAOAEAOQAFAPAQgCIAcgDQATgCABAQQgEAGgGADIgJAEIgFACIgOAEIAAABQABADAGADIABACIACABQAGAEAEAHIADAFQADAHgDAJIgCAEIgBABIgCgBIAAAAQgFgDgFgFQgIgJgGgKQAGAKAIAJQAFAFAFADIAAAAIACABIgCAAIgBAAQgJgBgGAFIgBAAIgEAEQgDAEgCAAIgBAAIAAgBQgDgGgCgKIgDgNIADANQACAKADAGIAAABIAAAAIAAAAIAAAAIgCAAgAAmhcQgBAPgEANQgFANgLAJQALgJAFgNQAEgNABgPIABgOIAAgEIAAAAIAAgBIgBgHIAAgCIgBgMIAAgDIAAADIABAMIAAACIABAHIAAABIAAAAIAAAEIgBAOgADrhjIADgBIANgDIgNADIgDABQgIgEgEgIQAEAIAIAEgAA3huIACgBIABgBIgBABIgCABIgDAAIgBAAIABAAIADAAgAgIjEIAAgBQAAgIAHgDQAJADAKABIABAAIABAAIAAAAIAGAAIgGAAIAAAAIgBAAIgBAAQgKgBgJgDQgHADAAAIIAAABgAh5jGIAHgOIgHAOgAgwjVIAIgOIgIAOgAgIj5QAJAIAMAFIAAABIADABQAGADAFAAIACAAQAGgBAFgFQADgEABgEIACgIIAAgBIAAAAIgBAAIgLAEQgHABgIAAQgPAAgLgFIgGgDQACAFADADgAAikHIAHgCIgHACgAg0keQgCgGgCgCQACACACAGgAARkgQgGgEgHAAIAAAAIAAAAQgEAAgFACIgBAAIAAAAIgCABIACgBIAAAAIABAAQAFgCAEAAIAAAAIAAAAQAHAAAGAEgAjLB3gAihBuIAAAAg");
	this.shape_5.setTransform(30.5,62.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AhtBEIAAgFQgBgPgLgKQgMgKgMgHIgMgIIgGgKIgFgLIgFgOQgJgXgCgYIAEgQQAIAHALAAIAIgCQAOgDAOgHIAGgDQADAHAMAHIAbAOQAMAGAOAEIAdAHIAcAHIAcAEQAOADANACIANAAIABAAIAOAAIAdgDIAdgFIANgEQAEAPADAJQAFAMAEAMIAHAcIADAKIAAAAIgCAAIgBgBIgEgBQgIgCgJgBQgVgCgSAFIgCAAIgHgCIABgCIgCgHIgMgZIgKgSIAKASIAMAZIACAHIgBACQgBACgEAAIgbgBQgOgBgMADIgEABIgYAEIgaAEQgOADgNAGQgJADgHAGIgHAGQgMALgQAJIghgag");
	this.shape_6.setTransform(51.6,70.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AhdAjIgMgWIAAgBIAAAAQAHgFAJAAIABAAIABAAIACgBIACgDQADgJgDgGIgEgGIAFgDQANgFAUgEIAZgGQAMgDAMgBIAagDIAZgFIAKgDQACALAPAAQAOABAKAJIAEADIAAAAIgBAAQgFACgHAAQgNAAgMADQgOAFgNAIQgSALgJAJIgGACQgEgMgFgJQgFgJAAgDIABgCIgBACQAAADAFAJQAFAJAEAMIABACIABADIgDAEQgBADgFAAIgBAAQgNAAgOABQgPACgNAGIgLAGQgHAFgHAHQgHgFgGgMg");
	this.shape_7.setTransform(23,73.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlbFZIABAAIABACIgCgCgAmSEsIABABIAAABgAiwEAIABgCIAAgBIADACIAAABgAj5CqIAAgCIABACgAmBCbIAAgBIACABIgCAAgAidAnIgDgBIAAgBQgMgFgKgIQgDgDgCgFIAGADQAMAFAPAAQAIAAAHgCIALgDIABAAIAAAAIAAABIgCAIQgBAEgEAEQgFAFgFABIgCAAIAAAAQgGAAgFgDgABqg6QgDgHAEgEIADgCQAFgEAFAAQAHAAAIAEIACAGIAAADQgYABALAKQACABADAAIgIADIgBAAIgBAAQgJAAgEgLgACsg0QgGgDgDgHQgBgDAAgCQAAgDACgCIAGgEQAFgDAEABQAGABADADIADADQgPAEAIAIQAGgBADgEIAAABQABAJgIACIgIABIgGgBgADchWIAEABIgBAEIgDgFgACzh6IAEAAIAAABIgEgBgAD2k7IADgBIgCACgAGSlaIABAAIAAABIgBgBg");
	this.shape_8.setTransform(47.9,35.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhDAIQgKAGgHAJQgBgPAMgMQgMABgKAFQAKgUAaABQgKgGgHgHQAWgGAWAIQgEgFgGgEQAPgCAMAEQALgLAMgIQgCAKACAHQAXgSAfAFQgSADgNAKQAVAAATAIQAVAIgVABQAVAMAEARQgKgFgNgEIgIAFQgbgHgdgGQAHAHAFAIQgHgFgIgCQgMgDgPACIgGAdIAAAAIgDASQgHgRgIgPIgIAMQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBAAIAAAAIAAAAIgBAAIgCABIAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAAACQABAEABAEIgIAPQgNgUAOgagAg+AfIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAAAAIAAAAIACgBIABAAIAAAAIAAAAIABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAIgHANQgBgEgBgEgAg1AaIAAAAg");
	this.shape_9.setTransform(30.1,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#996633").s().p("AAWA1QgLgKAYgBIgCAFQgCAEgEADIgBAAIgEgBgABZAhIACAHQgDAEgGABQgIgIAPgEgAhzAKQAJgMANgHQAKgGALgDIAGgBIgGABIgCgFQgCgGADgGQADABACACQAGAGAFgBQgIgMACgOIAJAFIACAFIABgEIADACQAJAIAIADIAEgOIAGAOQADAIAKgFQAIgEAKgCIAhgIQAMgDAOAAQAPAAAMAEIgQADQgLACgKADIgPAHQAIgCAJAAQAQABAQAEQANAEALAFIgIAAIgQAAIgMAAIgEAAIgHAAIAHAAIAEABQAPAEANAIQAIAEAGAGQAFAGgCAIIgEgBIgEgBQgEgGgDADIgCgBQgIgFgLgFQgPgGgQgDIgNgCQAGADAFAGQAJAMAAALQgLgEgKgIQgKgIgLgEQgVgGgUgFIAEAHQAGALgDANQgBgDgDgEQgFgEgBgGIgFAEQgNAFgNgCQAEgGAAgHIgLAIQgQANgQAFQAEgIACgJIgOAJQgPAMgNAGQADgNAIgLg");
	this.shape_10.setTransform(58.1,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.6,100,97.6);


(lib.boysgive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("ABSkhQACAAACABQACACABADQACAHAEAEQADgJgCgKQAAgDgBgEQAOgBANAFQAFACAEADQABgKgGgIQAOAEASAFQAKACAIAEQADgKgFgLQAJABAMAFQAHADAFAEQACgGAIABQAJACAJAGQAEADAFADQAFADAEAEQAHAFAEAEQABgJgEgLQgEgMgLgGQgGgEgFgEQANABALACQgJgIgQgDQgLgCgMABQgFAAgFABQgJACACgHQAEgNAEgMQgRAFgPAMQgGAFgEAGQgFgGgKgGQgIgFgHgGQgEAIACALQABAGAEADQgLgDgLgCQgMgDgMgDQgHgDgFgBQgDAAgCgBQAIAJAJAKQgIADgKgBQgLAAgIAGQgIAFgHAHQgDADgBADQAJgFAMAAQgHAMgIAQQgGANADAOQABADABADQADgLAJgKQgBACgCADQACgDACgDQAJgMAPgLQAFgCAEgBgAD1jeQABgEgBgDQgBgLgCgMQgBgFgBgEQgBgLgBgKAFrioQgHgIgHgHQgJgIgNgGQgMgFgMgFQgOgFgPgCQgMgBgRgHQgBAKgMAFQgGADgHADQgDACgEABQgIAEgHAEQgMAHgQgDQgCgBgDAAQgKgCgLgCQgQgCgQgHQgKgFgMgCQgOgDgIgNQgDgFgCgEQgBAAAAgBQgOAAgNAEQgNAEgNAHQgLAFgNAJQgMAIgJALQgIALgIANQgIALgHANQAAABgBABQgDAAgEgBQgDgBgCAGQgIgCgJABQgJABgHgCQAGAGgDAEQgXgLgZAHQAPAEAQAIQgRADgPAOQgKAIgDALQANgGASgFQgJAMgGARQgBADABACQAFgFAIgGQACgCAFAAAETA7QANgIAHgEQAEgDACgBQAOgFAHgKQAHgLAEgNQADgKACgMQACgNAAgOQAAgQgCgQQgBgMgEgLQgEgQgFgOQAAgDgCgDAF7A+QACgDAEgJQAGgOAIgMQAIgLAJgLQAJgKAJgNQADgFAAgGQAAgJABgIQABgGADgHQAGgOgHgOQgGgNgIgKQgIgIgJgKQgJgKgMgIQgPgLgLgIQAEAFAEAGQAGAIADAJAETA7QAKAAAKAAQADAAADAAQAJABALAAQAdACAdAAADvBJQAGgIAIgFQAKgBAMAAAE+B9QgCgKADgBQAMgDAMgFQAPgGAKAEQABABABAAQAFADgBAJQgBAOgHAKQgFAJgFAGQACABACABAFDCaQgGgLgEgQQADgBACgBQALgDABAPQABAOgCALQAAABAAABQACACABABQgHgDgJAIQgDADgBAEQAOgJAOAAQAAAEABACQgCAEgCAEQgBABgBACQgHABgGAAQgPAAgOABQgOABgPAAQgOAAgPgBQgNAAgNACQgJABgEgDQgCgCAAgFQABgFACgDQADgFAHgCQANgDAPgBQAPgBAOgDQAPgDAPgCQARgCAMACgAGFA+QAAABAAABQgGANgHANQgDAGgFAIAGFA+QAAAAAAAAQgFAAgFAAAGoA9QgEgEgIgCQgRgEgGALAI1BCIgBgBQgCgDgGgCQgNgCgQgCQgKgBgLAAQgJABgJAAQgOABgNABQgVACgQABIAAAAIAAAAQAAAAAAABIAAAAQACABgCADQgFAOgGAOQgGANgHANQgCAHABAHQABAAAAgBQAAAJACAHQADAAACgBQAVgDAVgBQALgBALAAQAKAAAKAAQAMgBAHAGQABAAABABQACACABACQACADACADQADgEABgEQADgIAFgFQABgEACgDQAGgLAHgLQAKgOAHgQQADgIgCgFgAIjC+QAHgJAGgLQAGgMAFgMQAGgQAFgQQACgJgEgHQgIgRgHgPAISDYQAAAAAAgBQAHgMAJgMQABAAAAgBQgCAAgCgCQgHgIgNgQQgCgDgCgCAIDCZQADAGgFAIQgDAEgHAMQgEAGgEAHQgBABAAABQAAAAAAAAQgHAPggBYQAAAAAAABQgDADgIABQgFAAgQgBQgZgBgygDQgKgCgIgBQgCABgCAAQAAAAgBAAQgDgJAEgJQADgGACgGQAFgLAFgLQAGgMAHgJQAHgJAEgJAHxC0QABABACABIAAAAQgBgCgCAAgAGAC3QABgBAKgBQAOgBAOAAQAOgBANABQAQAAAOgBQALgCAGADAHdFHQAEgGAEgGQAGgIAEgLQAGgOAGgOQAGgNAGgPQAFgLAFgLQABgBAAgBAHvDEQgBACAAABIAJgOQAVAQAEALQABACABACAHdFJQgBgBAAAAQgKgLgIgMQgBgCgBgCQAAAAgBABAFaFaQABABACAAQAAAAAAABQAMAEAOABQADAAADAAQAOAAAOAAQAPAAAOgBQAOgBANgCQALgCABgJQACgEgBgEQAAgBgBgCAHeFKQAAAAgBgBQAAgBAAgBAGSCVQABADAAACQADAJgCAIQgKgCgKgDQgNgDgLgFAGAC3QgBgBgCgCQgKgKgLgJQgBgBgBgBQgBgBgBgCQgCAEgCACQADgBADgCAFpDHQACABABACQABAAAAAAQAFACAHgCQAHgCAGgCQACgBADABQgDgGgFgFQgBgCgCgCAGPCGQgNAIgOAIQgGAEgGAEQgBAAgBABAFeC5QABACABABQAEAGAEAEQABABAAAAQAIgFAGgHAFeC5QgHgMgGgJQACADADADQADAEACAEQACAEABADgAFVCwQAFARALAIQgDgIgEgIAFJCiQgCgDgDgDQAAgBgBgBAFPC7QgHAQgFARQgDALgDANQgCAIgEAIQgHAMgGAMQgGAKgFAMQAAAAgBADQAAABgBABQABAAAAAAIAAAAIgBAAQAAAAgBABIAAAAQgBAAAAAAQgBAAAAAAAEeE3IABgBQAAABAAAAQABABAAABQAAAAABABQABADADADQADADALAcQAAAAAAABQAIgBAIgBQAFgBAFgBQAHgCAGAAAEeE3QABAAAAAAIgBAAACfEyQAmgFAjAHQAbAGAXgCQAAAAABAAQAEAAABABAEeE1QgCABgCACAEdE3IgDABAEeE1QANgIAEAAQAGABAQgDQAAAAABAAAFFErQAAAAAAABQAGAOAEANQAAANALAGAFFErIAAAAACfEyQgBARAOAHQgCAAADAHQAFAOARAAQAPgBAOACQAPABAPABQAPABAOABQAMABADgEQACAAAEgBQACAAABAAAFcEtQgKgBgMgBACckTQgIgBgHABQgDAAgJAGQgGgGANgHQARgKAGAPQAAABABABQgCAAgCAAgACWj0QgBAAgBAAQAAAAAAAAQABAAABAAQAKgCACgDQABgCgCgCQgBgCgEgCQgEgCgDAEQgHAJAGACQgDgOARAGQAAACAAABQAAACgBABQgBABgDABQAAAAgBAAQgDAAgDAAgADDj7QgBgDAAgDQAAgIAKgDQACgBABACQABABABAEADakeQAAADgCAEQAAAAAAAAQgBAAgBgBQgBAAAAAAQgDgCgDAAQgJgDgHAFQgEgEALgIQAGgEAEgBQAHAAADAKQAAABAAAAgADDj7QAPAAABgGQAAgCgCgDQgOgFAAAQgABJkeIABAAQAFgEADABAAxkIQABgBABgBQAFgIAIgGQAFgDAEgDAAwkGQAAgBABgBQAAAAAAABQABAIAEAIQADAHAEAHADCjwQAGAAAEAKQACAGgGACQgFACgEgBQgGAAgEgGACejXQAAAAAEAHQACAEADACQAEABAFgBQAKgDAGgIAhFiHQgBAEAAADQgFgCgGgBAhFiHQAHACAGACQALAEAKADQASAGALAOQAJALAHANQAFAKgBAKQAAABAAAAQAAADgBADQgDgEgCgDQgBAAAAgBQgFgFgEgEQgBAEgBAFQAAAAgBABQgBAGgCAHQAAgCAAgCQAAgBAAAAQAAgFgCgEQgEgSgQgGQAAADgCADQgDgDgEgCQAAAIAAAHQgGgJgHgGQgCAKgEAIQgJgIgJgIQgBAXgBARQgEgHgEgJQgEgPgKATQgBgLgGgHQgBABgBACAAHg9QgBABAAAAQgBAEgBAMQAAADAAADQgBAHgCAGQgKAAgDgFAg3AJQAJAFAJgBQgDADgFACQgFADgHABQgMACgHgMQgGgNAJgIQAFALANAHgAgxgfIAGAAQAHgBAGADAgygwQACgBADAAQAKgBALAAAgKgNQACADAEAEQAEAFgGAFQgBABgBABAgqAbQACAAACgBQAOgEABgTQABABAAAAQAIAFAGgDQAAAAAAAAQAUAVAXAUQASARAYAEQgMAGgMAEQgOAFgMAGQgOAHgNAFQgLAEgLADQAAAAAAAAQgCABgDABQgNAFgOAGQgHADgDABQAKAFAJAHQALAHgPAEQgHABgHgBQgPgFgLgJQgHgGgEgFQAEAQALANQAJAKgHACQgDABgDgCQgIgEgFgHQgHgKgHgHQAJANAHAPQADAHAEAEQgKABgIgIQgIgJgHgHQgFgFgGgEQADAPAHARQAFALgJAAQgEAAgDgDQgGgFACgIQAAgCAAgDQgPABgGADQgJAGgKAEQgDABgCAAQAAABAAABQgMgPADgIQACgGgOgKQgJACgKAAQgNABgNAAQgRAAgQgEQgOgDgNgFQgOgFgNgIQgMgIgEgOQgCgKACgIQgagBgJAIQgLAIgKAKQgLALgGAOQgFANABAOQAAAOAIANQAIALAJALQAKALAJAMQADAFAEAFQABAAAAABIABAAQACADADADQAFAFAFAEQAAgBgBgBQgEgKACABAAEgmQgHgEgFgFAABgZQgBAEgBAEAhyhHIgCgBQAAgBAAgCQAAgBgBgBQgCgQgPANQgDADAAAEQAAACAAACQAAACABACQAAABABABQgDAKgBALQgMABgKgGQgLgGgNgHQgNgGgQACQgOADgMAGQgMAIgHALQgBACgBABQgGAMAAAOQABACABADAiLgqQAAAFAAAFQABAHADgBAiHg/QADAGAJABAgqAbQAAAAAAABQgLADgMAEQgOAFgNgGQgMgFgJgNQgFgJgDgJAkfBjQAQgDAQACQAQACAPAGQAOAFAOAFQAMAEALgDQALgCAJgFQAJgEAJgCQAKgBAKABQAKACAJAEQAAAAAAAAQAAAAABAAQACABACABQAKAFAKAFQACAAABABQABABACABQAAAAABAAAgXBnQAGgMgCgPQgCgOgJgLQgKgNgCgLAhEB7QAPgdAEgNABZBAQAIgBAKABQAAAAAAABQABAAAAAAQACAGACAFQABgBAFgBQAOgBAPABQAQABAOAAQAOAAAPgCQADAAADgBQAKAAARABABNBEQABAAABgBQAFgCAFgBQABAPAHAWQAEAQAEAPQADALACANQADALADALQACAGABAGQACAIABAHQADAMAEAMQAFAMADAMQADALADAKQABABAAABQgCAAgBgBQABAAABgBADTA0QAHgFgBgCQgBgBgBAAQgEgCAAAKgABwBMQAIAZAGAZQABAEABAFQAEAOAFANQAEAJADAKQADALADAKQADAIABAIQABAGACAHQADAIADAHQAEAMAEAOQgCADgBADAkFghQgKgCgOALQgLAJgNAJQgMAGgHANQgJAMgEAOQgBAIgBAIQAAAHABAGAlXA3QgEAJgFAJQgDADgBAEAksBmQAHAAAGgDAjeAWQgNAJgDAMQgBAHgCAGQgEAOgNAKQgLAKgOAHQgCABgCABAiOCkQgBgDgBgCQgCgGgHgBQgEAAgFgCQgFgDgFgHQgBgBgBgBQgBAAgBAAQgMAAgLADQgEABgFAAAkEDXQgCgNgGgMQgCgFgCgEAi0DPQgRgDgEAAQgLAAgMAGQgKAFgRABQgBABgBAAQgCAAgFgCQAAABAAABQgCgDgEgCQgCAAgBgBQAXAaADAMQADAOAGANQAGAMADAOIAAAAQACAGgDAEQgDADgDABIAAAAIAAgBAkNDTQgBgCgCgBQAHAFAFACAi7C1QAEAOADAMQAHAVAHAJQAIALAGAMQAHALAFANQAEAKABAJQgBAUgHAKQALgKgCgPQAAgDgBgCQABgEAAgFQADAIADAIQANAjAWAKQANAGAKgCQABAAAAAAQAOgCANgDQAXgGASgEIABAAQAugKAIgEQANgFANgGQAMgGAOgFQAOgFANgHQALgHAMgFQAFgCAEgCQABAAABAAQgIAPAAALAl8DwQADACAFgGQAJgLANgFQAOgGAPgDQAOgEAOAAQANgBALAFAlmEHQgkgGgjAQQgiAPgcgSQgPgJgNAEQgkANgRAeQgZAwAngOQAegKAgAEQAXACAZAFQAkAHAjAGQAjAGAlgCQAngBAWgaAltD/QAFADAEACQALAEALAEQALADAJAGQAOAIAFAKQgCgCgDgCQgLgJgOgFQgOgFgNgFQgDgCgDgCAjoE8IAAAAAjoE8IAAAAQgDAGgFAGQgBACgCACQAAABgBAAQARACALAGQAjASAegSQAFgCADgGAjhEuQgDAEgCAEQAAADgCACIAAABAltD/QADAFAEADABaCwQgDABgDACQAEADADAEQAGAIAGAHQADgFAAgCABUCzQgJgLgKgIQgCgDgDgCQACADABAEQABABAAABQgBgBgBgBQAAAEAAADQABAKAAALQAAAKAAAKQABAEAAAEQAAADgCADQABgDAAgDIAAgBQAAgBAAgCQAAgCAAgCABACkQAAABAAABQgBABgBACAgLC/QALgJAPgGQAHgDgBAMQgDAVgCAUQAAABAAABQAAAEAAAFQAQgKARgJQAEgCACABAA/C+QAMgGAJgFAgqFiQAVgGAUgHQALgEBAgeQABgBACAAQAbgNAlgSADEC9QgHAOgPA+QgBACAAACQgBACgBABACnEXQAAAAABgBQgCABgCAAQACAAABAAQAAAAAAABQABgBABAAQgBAAgBAAgACkEXQgGACgOgFAgzDcQgCgBgCgBQAGgLALgIQAGAYgCAaQARgJASgIQADgBgBgDAhODTQACAEABADQACADABAEQAAAAAAAAQAHARAKAQQACAEABADAh1DXQAIgIALAHQADABABADQABACgBADQgBANgQAEQgCgHgBgFQgFgDgDgBQAAgBAAAAQACgFADgDgAhvDwQAAABABABQAFAQAEAPQADAGABAGAhyDkQgBgGgCgHADFCuQAKgbAJgfQAIgaAPgR");
	this.shape.setTransform(58.3,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AkiCTQgWgKgOgjIgFgQIgBAJQgBgJgEgJQgGgNgGgMQgHgLgIgLQgGgJgHgVIgHgaIgBgBIAFgBQALgEAJgGQAGgDAOgCIAAAGQgBAIAGAFQADACAEAAQAJAAgFgLQgHgQgDgPIALAIIAPAQQAIAJAKgCQgEgEgDgGQgHgQgJgNIAOARQAFAHAHAEQAEACADgBQAGgBgIgKQgLgNgFgQIALAKQAMAKAPAEQAGACAHgCQAQgEgLgHQgJgGgKgFIAKgFIAbgKIAFgCIAAAAIAWgHQAOgFANgHQANgGANgFIAZgLIACAAIAKgDQAIgCAJACIABAAIABAAIAEAMQAIAYAGAZIACAJQAEAOAFANIAGAUIAHAVIAEAOIADANIAFAQQAFALAEAPIABgDIABgEQAQg9AHgOQADADAJgCQANgCANABIAdAAIAdgBIAcgBIAOAAQgHAPgFAQIgHAYQgBAIgFAIIgNAYQgGAKgEAMIgBAEIgFACIAAAAIgCABIgLAAIAAAAIAAAAQgPAAgQgDIgDgBIgDAAQgTgFgUAAIgBAAIAAAAQgOAAgOACIgBABIgDAAQABgLAIgQIACgBIgCABIAAgBIgDABIABABIgJAEIgXALQgNAHgPAFIgaALIgZAMQgJADgvALIgBgDQANgFBAgeIACgBIBAgeIhAAeIgCABQhAAegNAFQgUAHgVAFIgaAGIgBAAIgEAAQgJAAgKgFgAk0AjIAKAeIAEANIgEgNIgKgeIAAgCIAAACgAgkBIIADAAIABAAIgBAAIgDAAIAAAAIgEAAIgHgCIgCAAIgBgBIgBAAIAAAAIgBAAIABAAIAAAAIABAAIABABIACAAIAHACIAEAAIAAAAgAgdBHIAEgGIgEAGgAg4BEIAEABIgBgCIgDABgAhjhpIAIAeIAFAYIAGAWIADANIADAPQADALAEALIAIAZIAGAVIgGgVIgIgZQgEgLgDgLIgDgPIgDgNIgGgWIgFgYIgIgeQgHgXgBgOQABAOAHAXgAkQALIADAGIAAABQAHAQAJARIAEAHIgEgHQgJgRgHgQIAAgBIgDgGIgDgHIADAHgAjoApQASgJASgHQABgBABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgBIAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBABQgSAHgSAJIABgNQAAgTgEgQQgLAHgHAKIAFADIgFgDQAHgKALgHQAEAQAAATIgBANIAAAAgAk6AIIgFAHIAAABIAIAEIADANIgDgNIgDgMIAAAAQAEgFAFAAIAAAAIABAAQAEAAAEADIABAAQADACABACIAAAEIAAACQgBAMgQAFQAQgFABgMIAAgCIAAgEQgBgCgDgCIgBAAQgEgDgEAAIgBAAIAAAAQgFAAgEAFIAAAAIAAAAgAi0AdIAhgTIAFgBIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIgFABIghATIAAgEIAAgFIAAgBIAAAAIAEgoIABgBQABgJgEAAIgBAAIAAAAIgCABQgPAFgMAJQAMgJAPgFIACgBIAAAAIABAAQAEAAgBAJIgBABIgEAoIAAAAIAAABIAAAFIAAAEgAiGgRIABAUIAAADIAAAEIAAAAIgBAHIABgHIAAgHIgBgUIAWgLQgJgKgKgJQAKAJAJAKIgWALIAAgVIABgCIABgDIgBgCIACgCIgFgFIADAHIgBABIAAAGIAAAVgAhdgGIACgHIAAAAIAAAAIgCAHIgNgOIgGgIIAGgDIgGADIAGAIIANAOIAAAAgABWCVIgdgCIgegDQgOgCgPABQgQABgFgPQgDgHACAAQgPgGABgRIADAAIABgBQAOgCAOAAIAAAAIABAAQAUAAATAFIADAAIADABQAQADAPAAIAAAAIAAAAIALAAIACgBIACAAIAAAAIABAAIABAAIABAAIABAAIABABIAAACIAEAFQADAEALAcIgCABIgGAAQgDAEgIAAIgEAAgABbBpIgFgBIAFABgACyCSQgOgBgMgFIgBAAIgCgBQgMgGABgNIgKgcIABgBIgBAAQgDgIAEgKIAFgLIAKgXQAGgLAHgKQAHgIAEgJIAAgFQAFACAHgCIANgEIAFgBIgIgLIAIgFIAbgCIAcAAQAQABAOgCQALgBAFACIADADIgFAOIAAABIgBABQgGANggBYQAghYAGgNIAAAAIAKgOQAVARAEAJIACAFIgBACIgKAWIgMAbIgMAcQgEALgHAJIgHAMIgBABIACACIgBAIQgCAIgKACIgbAEQgOABgPgBIgdABIgFAAgAEDBdIACAEQAIAMAKAMQgKgMgIgMIgCgEIgBAAIAAABQgEAEgIAAIAAAAIgDAAIAAAAIgSAAIhKgFIBKAFIASAAIAAAAIADAAIAAAAQAIAAAEgEIABgBgACBBbIAWACIgSgCIgEAAgABWBoIgCAAIAEAAIgBAAIgBAAIAAAAIAAAAgAFagTQgIgHgMgRIgEgEIAEgJQADgHAEgGIAEgHQAFgLAIgKQAKgOAGgQQACgFAAgEIgBgFIABAFQAAAEgCAFQgGAQgKAOQgIAKgFALIgEAHQgEAGgDAHIgEAJIgEgGIgDgEIgCgCQgHgGgMABIgUAAIgWABIgqAFIgFABQgCgHAAgJIgBABQgCgIADgGIAMgbIAMgbQABgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAAAIAkgDIAcgCIASgBIAVABIAdAEQAGABACAEIAAAAIAQAgQAEAIgDAIIgKAgQgFAMgGAMQgGAMgHAJIgEgDgAAThaQAIgbAOgRQAHgHAIgGIAWgBIATABIAGAAIAVABQAdACAdgBIAJAAIAAACIgMAbIgIAOQgLgFgOAGIgYAJQgDABACAKIgFACQADAPAHAMQgNgDgQADIgeAEQgOADgPABQgPABgNADQgHACgDAGQAKgbAJgfgAiGgmIAAAAg");
	this.shape_1.setTransform(78,56.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AAjBEIAAAAIAAABgAgihDIAAgBIAAAAIAAABg");
	this.shape_2.setTransform(104.2,49);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("ABBBsIgGgPIgDgNIgEgQIgGgUIgHgUQgFgNgEgNIgCgJQgGgZgIgYQABgCAFAAQAOgCAPABIAeABQAOAAAPgCIAGAAIAbAAQgPARgIAbQgJAdgKAbIgDAIQAAAFACADQgHANgPA/IgBADIgCADQgEgOgEgMgAh4gcIgBgFQAGgNgCgPQgCgOgJgLQgKgMgCgLIAEgBQAOgFABgSIABAAQAIAFAGgDIAAAAIAsAqQASAQAYAEIgYAKQgOAFgMAGQgOAHgOAFIgWAIIAAAAIAAAAg");
	this.shape_3.setTransform(68.1,49.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996633").s().p("AhwA1QgDgOAGgNIAOgbQgMAAgJAEQABgDAEgCIAPgMQAIgGAKAAQAKABAIgDQgJgJgHgKIAEABIAMAEQAMADAMADIAWAFQgDgDgCgGQgBgLADgIQAHAGAIAFQAJAGAGAGQAEgGAFgFQAPgMASgFIgJAZQgCAHAJgCIAKgBQAMgBALACQARADAJAIQgMgCgNgBIALAIQALAGAFALQADALAAAJIgLgJIgKgHIgJgGQgIgFgKgCQgIgBgBAFQgGgDgHgDQgLgFgKgBQAFALgDAJQgIgEgKgCIgegIQAFAHgBAKQgDgDgGgCQgNgEgOAAIACAHQACAKgEAJQgEgEgCgHIgDgFIgDgBQgEgBgFAEIAAAAIgKAGQgHAGgGAIIgCACIgBACQgIAKgEALIgBgGgAAAA4QgCgOAQAGIAAADQgCADgKACIgCAAgAAvAxQAAgQAOAFQACADAAACQAAAGgPAAIgBAAgAgLASQAQgKAGAPIgDACQgIgBgGABQgDAAgJAGQgGgGANgHgABCAUIgBAAIgFgCQgKgDgHAFQgEgEALgIQAGgEAEgBQAHAAADAKIAAABQAAADgBAEIAAAAIgDgBg");
	this.shape_4.setTransform(73.1,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AhOC3IgBAAIgBAAQgJgCgIACIgLADIgBAAQgYgDgSgRIgsgpIgBgBIADgCQAGgFgFgFIgFgHIAIgEIADgIIADgNIABgHQAAgLACgEIAAgBIABABIAFAHIACgGIAAgBQABgKgGgKQgHgNgJgMQgMgNgRgFIgVgHIgNgEIABgDIAOgYIARgXQAJgMALgIQANgIAMgGQANgGANgEQAOgEAOAAIAAABIAFAIQAJAOAOACQALADALAEQAQAIAQACIAVAEIAFAAIAJACIAAAAIABAAQAHgBAIgDIACgBIAPgIIAHgDIAMgGQAMgFABgLQgBALgMAFIgMAGIgHADIgPAIIgCABQgIADgHABIgBAAIAAAAIgJgCIgFAAIgVgEQgQgCgQgIQgLgEgLgDQgOgCgJgOIgFgIIAAgBIgIgOQgEgIAAgJQAJgMAPgKIAJgDIADABIADAFQADAGADAFQAEgJgCgKIgCgHQAOgBANAEQAGACAEAEQAAgKgFgIIAgAIQAJACAIAEQADgKgEgKQAJABAKAFQAHACAGAEQABgFAIABQAKABAIAGIAJAHIAKAGIALAKIgYANIABAKIADAWIAAAHQASAIALABQAPABAOAGIAZAKQAMAGAJAHQAIAHAGAIIAbATQALAJAJAJIARASQAJAKAGANQAGAOgFAOIgEANQgCAHABAKQAAAFgEAFQgIAOgJALIgRAWQgIAMgGANIgGANQgeAAgdgCIgUgBIgGAAIAAgNIgTAMIgXABQgHAGgHAHIgaAAIgGABQgPACgOAAIgdgCQgPAAgOABQgFAAgBACIgEgMgAAYCrQAGgFAAgCIgDgCIgBAAQgDAAABAJgACWBkIgEAWQgEAOgIALQgHAJgNAGIgHADIAHgDQANgGAHgJQAIgLAEgOIAEgWQADgNAAgOQAAgQgDgQQgBgMgDgMIgJgcIgCgGIACAGIAJAcQADAMABAMQADAQAAAQQAAAOgDANgAC4gnQAFAJAEAIQgEgIgFgJIgJgLIAJALgAgKhUQAKgDAFgHQgFAHgKADIgFABIgEgBQgEgBgCgEIAAgBIgBgBIAAgBIAAAAIgBgBIgBgDIAAAAIAAAAIABADIABABIAAAAIAAABIABABIAAABQACAEAEABIAEABIAFgBgAAHhmIAFgBIABgBQAEgBAAgEIgBgCQgDgKgGAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAQAGAAADAKIABACQAAAEgEABIgBABIgFABIgDAAIAAAAIAAAAIgBAAQgFgBgDgGQADAGAFABIABAAIAAAAIAAAAIADAAgAgliJQgHAJAGACIAAABIACAAIAFAAIACgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIABgCQAAgBABAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgGgEIgCgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAgAAQiVQgJADgBAIIABAGQAQAAAAgHQAAgCgBgDIgDgFIgCgBIgBABgAA1iPIgDgVIADAVgAgzikQgNAIAHAGQAIgGADAAQAHgBAIAAIADgBIABACIgEgBIAEABIgBgCQgDgKgIAAQgFAAgHAEgAAUikIAFACIABABIADABIAAgBQACgDgBgDIAAgBQgDgKgHAAQgEAAgGAEQgKAJADAEQAFgEAGAAIAGABg");
	this.shape_5.setTransform(77,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AhJBQIAAgBIgBgBIgIgJIgSgYIgRgWQgIgMgBgOQAAgOAFgNQAGgOALgLQAKgJALgJQAJgHAaABQgDAIADAJQADAOANAIQAMAJAOAFQAMAFAPADQAPADASABIAZgBIAUgCQANAJgCAGQgDAIANAOIAHAaIgVgDQgMABgLAFQgLAFgQACIgCAAQgDAAgEgCQgDgMgFgMIgEgJIAEAJQAFAMADAMIgMgGIACACQgKgEgNAAQgOABgOADQgOAEgPAFQgNAGgIALQgEAEgDAAIgCAAg");
	this.shape_6.setTransform(27.5,52.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3D28D").s().p("AhZDbIhGgMQgagFgXgDQgggEgeALQgnANAZgvQARgfAkgMQANgFAPAJQAcASAigPQAjgQAkAGIAHAEIAaAKQAOAFAMAJIAEAEQgFgKgOgIQgJgFgLgEIgWgIIgJgFIAAgCIgBAAIAAgBIAAAAIAAAAQgDgHAAAAIABAAIgBAAQAAAAADAHIAAAAIAAAAIAAABIABAAIAAACIgKgJIgFgGQADACAFgFQAJgLANgGQAOgGAPgDQAOgEAOAAQAMAAALAEQAXAaADAMQADAOAGANQAGANAEANQgEgNgGgNQgGgNgDgOQgDgMgXgaIADACIAHAEIgBgCQAFACADAAIACAAQAQgCAKgFQAMgFAMgBIAUADQAHAVAHAKQAIAKAGAMQAHAMAFANQAEAJACAJQgCAUgGAKQgEAGgEACQgfASgigSQgMgGgRgBIABgCIAEgEIAHgMIAAAAQADgBADgDQADgEgBgFIAAgBIgGAIQAAAEgCACIAAAAIAAAAIgHAMIgEAEIgBACQgWAZgmABIgPABQgdAAgcgFgACcAwQgEAAgDgDQgGgEACgIIAAgGIgCgFQgCgFgHgBIgJgDQgFgDgFgHIgCgCIgCAAQgLAAgLADIgJACIgUACIgaAAQgRAAgQgEQgNgDgNgEQgOgFgNgIQgMgIgEgOQgCgJACgIIAEgIIAKgRIABAMIgBgMQAAgIACgIQADgPAJgMQAHgMAMgIQANgIAKgKQAOgLAKACQgGAMABANIAAABIABAFIgBgFIAAgBQgBgNAGgMIACgCQAHgMAMgHQANgHANgCQAQgDANAGIAYANQAKAGAMgBIAAAFIAAAFQABAGACAAIAAAAIABAAIAAAAIABAAIgBAAIAAAAIgBAAIAAAAQgCAAgBgGIAAgFIAAgFQABgLADgKQADAGAJACQgJgCgDgGIgBgBIgBgFIAAgEQAAgEAEgDQAOgNADARIAAABIAAADIACABIAFACIACgDQAGAIACAKQAJgSAFAOQADAKAFAHIACgoIASAPQADgIACgJQAHAGAHAIIAAgOQADABADAEQACgDAAgEQAQAGAFASIABAJIAAABIAAAEIAEgNIAAgBIACgJIAKAKIgBAAQgBAEgBAMIAAAHQgIgFgFgFQAFAFAIAFIgDAMQgLAAgDgFQADAFALAAIgDAIIgIAFIAFAGQAFAFgGAGIgDACQgGADgHgFIgBAAQgCASgOAFIgDABIgEgJQAFgDADgDQgJACgJgGQgNgHgFgMQgJAIAHAOQAGAMAMgCQAHgBAFgCIADAJIABAAQABALALAMQAIALACAOQACAPgGANIABAFIgFABIgaALIgLAEQAKAGAJAFQALAHgPAEQgHABgGgBQgQgEgLgJIgLgLQAEAQALANQAJAKgHABQgDABgDgCQgHgEgFgHIgOgQQAIAMAHAPQADAHAEAEQgKACgHgJIgQgQIgKgJQACAQAIAQQAEALgJAAIAAAAgADbgNIADACIABAAIgBAAIgDgCQAPgdAEgNQgEANgPAdIAAAAgAC/gaIABAAIAFACIAUAKIACABIgCgBIgUgKIgFgCIgBAAIAAAAQgJgEgJgBIgLgBIAAAAIgBAAIgEAAIgDAAIgBAAQgKACgIAEQgKAFgLACIgBABIgHAAIgBAAIAAAAQgGAAgGgCIgBAAIgcgKQgQgFgQgCIgBgBIgNAAIAAAAIgBAAIgOABIgDAAIAFgCQANgHALgJQANgKAEgOIAEgNQACgNANgJQgNAJgCANIgEANQgEAOgNAKQgLAJgNAHIgFACQgFADgHAAQAHAAAFgDIADAAIAOgBIABAAIAAAAIANAAIABABQAQACAQAFIAcAKIABAAQAGACAGAAIAAAAIABAAIAHAAIABgBQALgCAKgFQAIgEAKgCIABAAIADAAIAEAAIABAAIAAAAIALABQAJABAJAEIAAAAIAAAAgADShjQAGAAAHgCIAWgHIgWAHQgHACgGAAIAAAAIgBAAQgGAAgGgCIgCgBQgMgEgIgOQgGgIgCgKQACAKAGAIQAIAOAMAEIACABQAGACAGAAIABAAIAAAAgAEBimIAAAAQgFgCgGAAIAAAAIAAAAIgBAAIgBAAIgGAAIAGAAIABAAIABAAIAAAAIAAAAQAGAAAFACIAAAAIAAAAgADyi6IgFABIAFgBIAVgBIgVABgAAAglIAAAAg");
	this.shape_7.setTransform(29.5,49.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAeQgEgOgKASQgBgKgHgIIgBADIgGgCIgBgBIgBgDIAAgBQgCgQgPAMQgDADgBAEIAAAEQgFAAgBACIgNAMQgBgDABgDQAGgRAIgLQgRAEgNAGQADgKAJgIQAPgOASgDQgRgIgOgEQAYgGAYAKQADgEgGgGQAHACAJAAQAJgBAIABIAKADQgBgDACgEIANAEIAVAHQARAGAMAOQAKALAHAMQAFALgBAJIgIgBIgKgJIgCAJIgFAAQgFgSgPgGQAAAEgCACQgDgDgEgBIAAAOQgGgIgHgGQgCAJgEAIIgSgQIgCApQgEgHgDgKg");
	this.shape_8.setTransform(50.3,27.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Ag/CUQgLgcgDgDIgEgGIgBgBIAAgCIgBAAIAAAAIgCABIABgDIABgDQAFgMAGgKIANgYQAEgIACgIIAGgYQAGgRAHgOIgOAAIgdABIgcABIgegBQgNAAgNACQgJABgDgCQgDgDABgFIACgIQADgFAHgCQAOgDAOgBQAPgBAPgDIAdgFQARgCANACQgHgLgEgPIAFgCIABgBIAAAAIABAAIACAAIAAAAIAAAAQAHAAABAMIABAKQAAAIgCAIIABABIACAEIgCgEIgBgBQACgIAAgIIgBgKQgBgMgHAAIAAAAIAAAAIgCAAIgBAAIAAAAIgBABQgCgKAEgBIAXgJQAPgGAKAFIACAAQAEADAAAHIgBACQgBAOgGALIgJAPIAJgPQAGgLABgOIABgCQAAgHgEgDIgCAAIAHgOIANgbIABgCQAGgLAQAEQAIACAEAEIAAABIAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABIgMAbIgMAaQgDAHABAHIACgBQgBAJACAIIAGgBIAqgFIAWgBIATAAQAMgBAHAGIADACIACAEIAFAFIADAFQANARAHAHIAEADIAAAAQgJALgHANIgBAAIgCgEQgEgJgVgRIgJAOIABgDIAIgNIAKgQQADgFAAgEIgBgEIABAEQAAAEgDAFIgKAQIgIANIAFgOIAAAAIgDgCQgGgCgLABQgOACgPgBIgcAAIgcABQgKABAAACIgEgEQgKgKgKgJIgCgCIACgBIgDgBIgFAGIAGgEIACACQAKAJAKAKIAEAEIADADIAHALIgFAAIgNAEQgGACgEgCIgBAAIgEgDQAJgFAEgHQgEAHgJAFIAEADIABAAIAAAFQgFAJgGAJQgIAKgFALIgLAWIgFAMQgEAKADAIIAAAAIAAABIAKAbQAAAOALAGIgMABIgLACIgQACIAAgBgAhUBqIADgCIAKgFIAAAAIABAAIACAAIABAAIAAAAIABAAIAAAAIABAAIADgBIAFAAIAEgBIACAAIACAAIABAAIADgBIgDABIgBAAIgCAAIgCAAIgEABIgFAAIgDABIgBAAIAAAAIgBAAIAAAAIgBAAIgCAAIgBAAIAAAAIgKAFIgDACgAgNgBIgGgPIABADQAEAFAEAFIABAAIgBAAQgEgFgEgFIgBgDIgEgIIgFgIIgFgFIgFADQgHgEgJAIQgDADgBAEQAOgJAOABIABAGIgEAHIgBAEIABgEIAEgHQAFAQALAIIAAAAgAANgkIAVAFIAAgGQAAgFgCgGIgBgEIABAEQACAGAAAFIAAAGIgVgFQgNgDgKgFIAMgIIAagQIgaAQIgMAIQAKAFANADgAgtguIAEAHIgEgHIgBgCIABACgAgEAAIAAAAgAgTgQIAAAAgAgMgrIAAAAgAgKgsIAAAAg");
	this.shape_9.setTransform(95.4,56.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjRCpIABAEIAAAAIgqAJQAVgFAUgIgABjCzIAAABIgCAAgAEMCcIABABIgBgBIACgBIgBACIABACgAEMCcIAAAAgABKCMIABAAIgBAAgAD4CBIAAAAIgBABIABgBgAB1B/IABAAIgBABIAAgBgAgqBrIACAAIAAABIgCABgAEeAaIABgCIgBADgAiTgQIAGAFIgCACIgEgHgAC1htIABAAIgBACgADYhuIAAAAIAAABIAAgBgAkbifQgHgOAJgIQAFAMANAHQAJAGAJgCQgDADgFADQgFACgHABIgDAAQgKAAgFgKg");
	this.shape_10.setTransform(79.1,53.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,118.6,74.1);


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


(lib.textwhoorwhatfadein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textwhoorwhat("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50.2,11.8,1,1,0,0,0,50.2,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.5,0,87.5,29.1);


(lib.textwhatfadein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textwhat("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(23.9,11.8,1,1,0,0,0,23.9,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,1,153.6,29.1);


(lib.textverbfadein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.textverbidle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.9,11.8,1,1,0,0,0,19.9,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,0,58,26.3);


(lib.textsubjectfadein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.textsubjectidle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34.5,11.8,1,1,0,0,0,34.5,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-6,85,50.6);


(lib.textindirectobjectfadein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.textindirectobjectidle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.3,11.8,1,1,0,0,0,68.3,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,0,108.6,26.3);


(lib.textdoesfadein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textdoes("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.7,11.8,1,1,0,0,0,21.7,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,0,65.9,37.5);


(lib.textdirectobjectfadein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.textdirectobjectidle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(58.9,11.8,1,1,0,0,0,58.9,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.8,0,64.1,26.3);


(lib.texttowhomfadein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texttowhom("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(41.9,11.8,1,1,0,0,0,41.9,11.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,0,178.1,29.1);


(lib.theBoysGiveTheGirlsSome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("flickering");
	}
	this.frame_9 = function() {
		playSound("flickering");
	}
	this.frame_14 = function() {
		playSound("flickering");
	}
	this.frame_20 = function() {
		playSound("word_appears");
	}
	this.frame_45 = function() {
		playSound("flickering");
	}
	this.frame_50 = function() {
		playSound("flickering");
	}
	this.frame_55 = function() {
		playSound("flickering");
	}
	this.frame_71 = function() {
		playSound("word_appears");
	}
	this.frame_91 = function() {
		playSound("flickering");
	}
	this.frame_96 = function() {
		playSound("flickering");
	}
	this.frame_101 = function() {
		playSound("flickering");
	}
	this.frame_116 = function() {
		playSound("word_appears");
	}
	this.frame_135 = function() {
		playSound("flickering");
	}
	this.frame_140 = function() {
		playSound("flickering");
	}
	this.frame_145 = function() {
		playSound("flickering");
	}
	this.frame_161 = function() {
		playSound("word_appears");
	}
	this.frame_181 = function() {
		playSound("quick_pad_chord");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(6).call(this.frame_20).wait(25).call(this.frame_45).wait(5).call(this.frame_50).wait(5).call(this.frame_55).wait(16).call(this.frame_71).wait(20).call(this.frame_91).wait(5).call(this.frame_96).wait(5).call(this.frame_101).wait(15).call(this.frame_116).wait(19).call(this.frame_135).wait(5).call(this.frame_140).wait(5).call(this.frame_145).wait(16).call(this.frame_161).wait(20).call(this.frame_181).wait(103));

	// dynamic text
	this.instance = new lib.textwhoorwhat("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(248,307.4,1.404,1.404,0,0,0,50.2,11.8);

	this.instance_1 = new lib.textwhoorwhatfadein();
	this.instance_1.parent = this;
	this.instance_1.setTransform(127.3,92.4,1.339,1.339,0,0,0,50.3,14.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgYAuQgOgFABgJQgBgJALAAQAEAAAIACQAHADAFAAQAQAAABgHQgBgFgMgGQgRgHgFgDQgNgJAAgMQAAgSAUgGQAKgEAWAAQAIAAAFACQAGADAAAJQAAAQgJAAQgJAAgCgIIgHAAQgUAAAAAGQAAADAMAGQASAIAFAEQAOAJAAAMQAAAPgOAHQgMAHgPAAQgMAAgKgEg");
	this.shape.setTransform(123.1,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgaBFQgDgEAAgFQAAgIASgpQgJgRgVgmIgFgHQgCgEAAgDQAAgFAEgEQADgDAFAAQAHAAACAEQANARAQAhIAMgZIALgXQAFgGAGgBQAFABAEADQAEADAAAFIgBAGIgfA+QgLAXgGAPIgFAQQgDAJgJAAQgEAAgFgDg");
	this.shape_1.setTransform(113.8,63);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgcAlQgNgMgBgVQgBgSAMgPQANgSAXAAQASAAAKAOQAKAMAAATQAAAUgLAOQgNAQgTAAQgRAAgLgLgAgMgOQgFAIAAAKQAAALAGAGQAEAEAHAAQAGAAAGgFQAGgGABgLQABgbgQAAQgKAAgGAKg");
	this.shape_2.setTransform(104,60.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgrBDQgEgEAAgFIAAhdIAAgMQgBgHABgFQABgHAPgDQAGgBAQAAQAQgBAPAMQASAMAAATQAAAKgEAHQgDAGgHAFQAIAEAHAIQAIAKAAAJQAAAMgNALQgJAGgJAEQgUAIgfAAQgFAAgFgFgAgXAwQAPgBARgGQAQgEgBgFQAAgHgKgFQgHgEgHgBIgXgBgAgXguIAAATIAAASIAMABQAagCAAgSQAAgGgIgHQgHgFgJgBIgOABg");
	this.shape_3.setTransform(93.9,58.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AghA9QgRgGAAgNQAAgMAOAAQAFAAALAEQAKADAGAAQAWAAAAgKQAAgFgRgIQgWgKgHgEQgRgMAAgQQABgYAYgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgMAAQgLAAgCgJIgKgBQgbgBAAAJQAAAEAPAHQAYALAIAGQARAMAAAPQAAAVgSAJQgQAJgVAAQgQAAgNgFg");
	this.shape_4.setTransform(261.6,329.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgiBbQgFgFAAgHQAAgKAZg2QgNgYgcgyIgFgJQgEgFAAgEQAAgHAFgFQAGgEAGgBQAIABAEAFQAQAWAWAtIAPgiIAQgeQAGgJAIAAQAHAAAFAEQAFAFAAAHQAAADgCAEIgoBTQgPAegIAUIgHAWQgEALgLAAQgHAAgFgEg");
	this.shape_5.setTransform(249.2,333);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_6.setTransform(236.3,330);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("Ag5BZQgGgGAAgHIAAh7IAAgQQgBgJABgGQACgLATgCQAJgDAUAAQAVAAAVAOQAXARAAAZQAAAOgFAJQgDAHgKAIQALAFAJALQAKANAAAMQAAAQgRAOQgLAJgNAFQgaAKgqAAQgHAAgFgGgAgfA/QAUgBAXgHQAUgGAAgHQAAgJgNgHQgKgFgJgBIgfgBgAgfg+IAAAZIAAAZIAQAAQAjgCAAgYQAAgIgLgIQgJgIgNAAIgSAAg");
	this.shape_7.setTransform(223,326.8);

	this.instance_2 = new lib.textdoes("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(244.4,307.9,1,1,0,0,0,21.7,11.8);

	this.instance_3 = new lib.textdoesfadein();
	this.instance_3.parent = this;
	this.instance_3.setTransform(244.4,90.1,1,1,0,0,0,21.7,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag8BLQAAgGAEgFQAFgDAHAAIAOABQAKACAIAAQAQAAAJgKQAIgKABgXQgGAGgHADQgHADgIAAQgYAAgOgPQgPgQAAgWQAAggATgTQAVgVAhAAQALAAAIACQAHADAGAGQAOACAAAQQAAAHgCAOQgFAbgBAfQgBAlgMARQgPAXgmAAQguAAAAgSgAgRg1QgKAMAAAUQAAANAFAIQAGAFAKABQAIAAAKgLQAKgKABgLIAFgjIgIgDQgEgBgEAAQgSAAgLAMg");
	this.shape_8.setTransform(268.9,59.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_9.setTransform(256.5,56.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgFQAFgEAHAAQAHAAAGAEQAFAFAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_10.setTransform(247,53.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAHAAQANAAADAOQATgQAaAAQAXAAABAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgGAAgFgFg");
	this.shape_11.setTransform(237.8,56.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgiBZQgEAEgGAAQgHAAgFgEQgEgEAAgGIABgJIAAgJIAAiDQAAgJADgGQAFgJAJAAQAMAAAAAOIAAAFIgBAFIAAAsIARgHQAIgCAHAAQAbAAARAUQAQASAAAaQAAAbgTATQgSAUgbAAQgRAAgOgGgAgNgCQgHADgLAHIAAAyQAQAHAMAAQAOAAAKgKQAJgKAAgQQAAgPgIgKQgIgJgNAAQgFAAgJADg");
	this.shape_12.setTransform(224.7,53.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("Ag8BLQAAgGAEgFQAFgDAHAAIAOABQAKACAIAAQAQAAAJgKQAIgKABgXQgGAGgHADQgHADgIAAQgYAAgOgPQgPgQAAgWQAAggATgUQAVgUAhAAQALAAAIACQAHADAGAGQAOACAAAQQAAAHgCAOQgFAbgBAfQgBAlgMARQgPAXgmAAQguAAAAgSgAgRg1QgKAMAAAUQAAANAFAIQAGAFAKABQAIAAAKgLQAKgKABgLIAFgjIgIgDQgEgBgEAAQgSAAgLAMg");
	this.shape_13.setTransform(268.9,321.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_14.setTransform(256.5,318.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgFQAFgEAHAAQAHAAAGAEQAFAFAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_15.setTransform(247,315.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAHAAQANAAADAOQATgQAaAAQAXAAABAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgGAAgFgFg");
	this.shape_16.setTransform(237.8,318.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgiBZQgEAEgGAAQgHAAgFgEQgEgEAAgGIABgJIAAgJIAAiDQAAgJADgGQAFgJAJAAQAMAAAAAOIAAAFIgBAFIAAAsIARgHQAIgCAHAAQAbAAARAUQAQASAAAaQAAAbgTATQgSAUgbAAQgRAAgOgGgAgNgCQgHADgLAHIAAAyQAQAHAMAAQAOAAAKgKQAJgKAAgQQAAgPgIgKQgIgJgNAAQgFAAgJADg");
	this.shape_17.setTransform(224.7,315.5);

	this.instance_4 = new lib.textwhat("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(193.9,306.9,1,1,0,0,0,23.9,11.8);

	this.instance_5 = new lib.textwhatfadein();
	this.instance_5.parent = this;
	this.instance_5.setTransform(336,89,0.766,0.766,0,0,0,23.9,18.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AAcA2IgTAIQgIACgFABQgcgBgOgPQgOgPAAgeQAAgbAVgUQAVgUAcAAQALgBAOAHQASAHAAAKQAAAFgDACIgBAMIgBARQAAAVADAKIAFAMIAFALQAAAGgFAEQgEAFgHAAQgFAAgMgLgAgQgXQgMAMAAAQQAAAPAGAJQAGAHALABQAGgBAHgCQAGgCAGgFQgEgbAAgOIABgIIABgLIgEgBIgDgBQgPAAgMAMg");
	this.shape_18.setTransform(393.7,61);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("Ag0A/QgFgEgBgGQAAgIAIgGQAegZAeguIgNAAQgSAAgSgDQgOgCAAgNQgBgGAFgFQAFgEAGAAIASABIARABIAXgBIAYgBQAOAAAAAMQABAKgLAMIgYAeIgXAgIALgBIAOACIANACQAIAAAEAEQAEAFABAGQgBAHgEAEQgEAFgIAAIgNgCIgOgCQgZAAgXAFIgFAAQgGAAgFgDg");
	this.shape_19.setTransform(380.5,61);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("Ag0A/QgFgEAAgGQAAgIAHgGQAdgZAfguIgNAAQgRAAgTgDQgPgCAAgNQAAgGAFgFQAFgEAGAAIASABIARABIAXgBIAYgBQAPAAAAAMQAAAKgKAMIgZAeIgYAgIAMgBIAOACIAOACQAGAAAFAEQAFAFAAAGQAAAHgFAEQgFAFgGAAIgOgCIgOgCQgZAAgXAFIgFAAQgHAAgEgDg");
	this.shape_20.setTransform(367.6,61);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAFgGAAQgHAAgFgFgAgKg7QgGgFAAgHQAAgHAGgGQAFgEAHAAQAHAAAGAEQAFAGAAAHQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_21.setTransform(358.1,58.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AgwBeQgFgFAAgGIAAgsIAAgtQAAgagBgRIgCgYQAAgJAEgIQAFgHAJgBQAHAAAEAFQAEAFAAAGIAAABQAIgEAIgDQAHgCAIAAQAbAAAMAXQAKASAAAbQAAAZgPAQQgQATgagBQgJAAgLgCIAAAwQAAAGgFAFQgFAFgHgBQgHABgEgFgAgGg3QgIAEgHAGIABAwQAKADAKAAQAMAAAGgHQAGgIAAgNQAAgQgBgGQgEgOgLAAQgHgBgHAEg");
	this.shape_22.setTransform(348.2,63.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AAcA2IgTAIQgIACgFABQgcgBgOgPQgOgPAAgeQAAgbAVgUQAVgUAcgBQALAAAOAHQASAHAAAKQAAAEgDAEIgBALIgBARQAAAVADAKIAFAMIAFALQAAAGgFAEQgEAFgHAAQgFAAgMgLgAgQgXQgMAMAAAQQAAAPAGAJQAGAHALABQAGAAAHgDQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgBIgDgBQgPAAgMAMg");
	this.shape_23.setTransform(280.6,318.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009900").s().p("Ag0A/QgGgEABgGQgBgIAIgGQAdgZAfguIgNAAQgSAAgSgDQgOgCgBgNQABgGAEgFQAEgEAIAAIARABIARABIAXgBIAYgBQAPAAAAAMQAAAKgLAMIgXAeIgZAgIAMgBIAOACIANACQAIAAAEAEQAFAFgBAGQABAHgFAEQgEAFgIAAIgNgCIgOgCQgZAAgXAFIgFAAQgHAAgEgDg");
	this.shape_24.setTransform(267.4,318.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("Ag0A/QgFgEgBgGQAAgIAIgGQAegZAeguIgNAAQgSAAgSgDQgOgCAAgNQgBgGAFgFQAFgEAGAAIASABIARABIAXgBIAYgBQAOAAAAAMQABAKgLAMIgYAeIgXAgIALgBIAOACIANACQAIAAAEAEQAEAFABAGQgBAHgEAEQgEAFgIAAIgNgCIgOgCQgZAAgXAFIgFAAQgGAAgFgDg");
	this.shape_25.setTransform(254.5,318.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009900").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgFQAFgEAHAAQAHAAAGAEQAFAFAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_26.setTransform(245,315.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AgwBeQgFgFAAgGIAAgsIAAgtQAAgagBgRIgCgYQAAgJAEgIQAFgHAJgBQAHABAEAEQAEAFAAAGIAAABQAIgFAIgCQAHgCAIAAQAbAAAMAXQAKARAAAcQAAAYgPARQgQATgagBQgJAAgLgCIAAAwQAAAGgFAFQgFAEgHAAQgHAAgEgEgAgGg3QgIAEgHAGIABAvQAKAEAKAAQAMAAAGgHQAGgIAAgNQAAgQgBgGQgEgOgLAAQgHAAgHADg");
	this.shape_27.setTransform(235.1,321.5);

	this.instance_6 = new lib.texttowhom("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(263.9,307.9,1,1,0,0,0,41.9,11.8);

	this.instance_7 = new lib.texttowhomfadein();
	this.instance_7.parent = this;
	this.instance_7.setTransform(309.7,178.6,0.806,0.806,0,0,0,41.9,16);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CC66").s().p("AghA9QgRgGAAgNQAAgMAOAAQAGAAAKAEQAKADAFAAQAXAAAAgKQAAgFgRgIQgWgLgHgDQgQgMAAgQQgBgYAZgIQAPgFAdAAQALAAAGADQAIAEAAALQAAAVgMAAQgLAAgCgKIgKAAQgcgBAAAJQAAAEAQAHQAYAMAIAFQARAMAAAPQAAAUgSALQgQAIgVAAQgPAAgOgFg");
	this.shape_28.setTransform(308.7,149.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CC66").s().p("AgKBcQgFgFAAgHIAAihQAAgHAFgDQAFgFAFAAQAHAAAFAFQAEADAAAHIAACbQAAAXgQAAQgGgBgEgEg");
	this.shape_29.setTransform(299.6,146.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CC66").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAHAAQANAAADAOQATgQAaAAQAXAAABAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgGAAgFgFg");
	this.shape_30.setTransform(290.9,149.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CC66").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_31.setTransform(281.8,146.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CC66").s().p("Ag7BLQAAgHADgDQAFgEAGgBIAQADQAKACAHAAQARAAAIgLQAIgLABgWQgGAGgHADQgIADgIAAQgXAAgPgPQgOgPAAgXQAAggAUgTQATgVAiAAQALAAAIADQAIADAEAFQAPABAAARQAAAHgCAOQgFAbgBAeQgBAmgLARQgQAXgmAAQgtAAAAgSgAgRg0QgKAMAAASQAAAOAFAIQAGAFAKAAQAJAAAKgKQAIgKACgKIAFgjIgIgEQgDgCgEAAQgTAAgLAOg");
	this.shape_32.setTransform(271.6,152.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00CC66").s().p("AghA9QgRgHAAgMQAAgMAOAAQAFAAALADQAKAEAGAAQAWAAAAgJQAAgHgRgHQgWgLgHgDQgRgMAAgRQABgXAYgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgMAAQgLAAgCgKIgKgBQgbABAAAHQAAAFAPAIQAYAKAIAGQARALAAAQQAAAUgSALQgQAIgVAAQgQAAgNgFg");
	this.shape_33.setTransform(268.4,318.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00CC66").s().p("AgKBcQgFgEAAgIIAAihQAAgHAFgEQAFgDAFAAQAHAAAFADQAEAEAAAHIAACcQAAAVgQAAQgGAAgEgEg");
	this.shape_34.setTransform(259.3,315.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00CC66").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQATgQAaAAQAYAAAAAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgGAAgFgFg");
	this.shape_35.setTransform(250.6,318.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00CC66").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgFQAFgEAHAAQAHAAAGAEQAFAFAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_36.setTransform(241.5,315.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CC66").s().p("Ag7BLQAAgGADgFQAFgDAGAAIAPABQALACAHAAQARAAAIgKQAIgKABgXQgFAGgIADQgIADgHAAQgYAAgPgPQgOgQAAgWQAAggATgUQAUgUAiAAQALAAAIACQAHADAGAGQAPACgBAQQABAHgDAOQgFAbgBAfQgBAlgLARQgQAXgmAAQgtAAAAgSgAgRg1QgKAMAAAUQAAANAFAIQAFAFALABQAIAAALgLQAIgKACgLIAFgjIgIgDQgEgBgDAAQgTAAgLAMg");
	this.shape_37.setTransform(231.3,321.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgLAJQgEgEAAgFQAAgEAEgEQAGgEAFAAQAHAAAFAEQAEAEAAAEQAAAFgEAEQgFAEgHAAQgFAAgGgEg");
	this.shape_38.setTransform(421.3,319.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009900").s().p("AAYAtQgJAEgIACQgGADgEAAQgXAAgMgNQgMgNAAgZQAAgWASgRQARgRAXAAQAJAAANAFQAOAHAAAIQAAAEgCACIgBAKIgBAOQAAARACAIIAFAKIAEAKQAAAFgEADQgEAEgGAAQgEAAgJgJgAgNgTQgKAKAAANQAAANAEAHQAFAGAKAAQAFAAAFgCQAFgCAFgEQgCgWAAgLIAAgHIACgKIgEgBIgDAAQgMAAgKAKg");
	this.shape_39.setTransform(411.6,315.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009900").s().p("AgrA0QgFgDAAgFQAAgGAHgGQAYgUAZgnIgLAAQgOAAgPgCQgNgBAAgLQAAgGAEgEQAEgDAGAAIAOABIAOABIATgBIAVgBQALAAABAKQAAAJgJAJIgTAZIgVAbIAKgBIAMACIAKABQAHAAADAEQAEAEAAAFQAAAGgEADQgDAEgHAAIgKgBIgMgCQgVAAgTAEIgEAAQgFAAgEgDg");
	this.shape_40.setTransform(400.5,315.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009900").s().p("AgsA0QgDgDAAgFQAAgGAFgGQAZgUAagnIgLAAQgPAAgQgCQgMgBAAgLQABgGADgEQAEgDAFAAIAPABIAPABIATgBIATgBQAMAAAAAKQAAAJgHAJIgVAZIgUAbIAKgBIALACIAMABQAFAAAFAEQADAEAAAFQAAAGgDADQgFAEgFAAIgMgBIgLgCQgVAAgTAEIgEAAQgGAAgEgDg");
	this.shape_41.setTransform(389.8,315.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009900").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAFAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQAAAFgDAEQgEAEgFAAQgGAAgDgEgAgIgxQgFgEABgGQgBgGAFgEQAEgFAFAAQAHAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgHAAQgFAAgEgEg");
	this.shape_42.setTransform(381.9,312.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009900").s().p("AgoBPQgEgEABgGIAAglIAAglQAAgVgCgPIgCgUQAAgIAFgGQADgGAIAAQAFAAAEAEQADADAAAGIAAABQAHgEAHgBQAFgCAHgBQAXAAAJAUQAJAOAAAXQAAAUgNAOQgNAPgWAAQgIAAgIgCIAAAoQAAAGgFAEQgEADgFAAQgGAAgEgDgAgFgtQgGADgGAFIABAnQAIADAIAAQAKAAAFgGQAGgHAAgKQgBgNgBgFQgCgNgKAAQgHAAgFAEg");
	this.shape_43.setTransform(373.6,317.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009900").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAHAAQAOAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgQAAQgWAAgOgLgAgMgXQgHAGgEANIAWgKQANgGAHgFQgGgEgLAAQgIAAgGAGg");
	this.shape_44.setTransform(353.7,315.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("AgIA5QgDgEAAgGQAAgLgDgVQgCgVAAgLIgBgKQgMAGgLAQIgCACIAAAeIAAAHIgBAHQAAAFgEADQgEADgFAAQgJAAgDgHQgCgFAAgLIAAgjIAAgOIgBgPQAAgIAEgHQADgJAHAAQAGAAAEAEQAEAEAAAFIAAAJQAOgRANAAQAPAAAHALQAFgFAIgDQAHgCAIAAQATAAAHATQACAEACAWQADAPAFAlQAAAFgEAEQgEAEgGAAQgLAAgCgLIgEgdIgDgbQgDgSgEAAQgCAAgIAFIgMAHQAAALADAUQACAWAAAKQAAAGgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_45.setTransform(340.7,315.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009900").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_46.setTransform(327.4,315.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009900").s().p("AgbAzQgOgGAAgKQAAgKALAAQAEAAAJADQAJACAEAAQATABAAgJQAAgFgNgFIgZgMQgOgKAAgNQAAgVAVgGQAMgEAYAAQAJAAAFADQAGADAAAJQAAARgJAAQgJABgCgJIgIgBQgXABAAAGQAAAEANAGQAUAJAHAFQAOAJgBANQAAARgPAJQgNAHgRAAQgNAAgLgEg");
	this.shape_47.setTransform(317.3,315.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00CC66").s().p("AgbAzQgPgGAAgKQAAgKAMAAQAEAAAJADQAIACAGAAQASABAAgJQAAgFgOgFIgZgMQgNgKAAgNQAAgVAUgGQANgEAYAAQAJAAAFADQAHADAAAJQAAARgKAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAGQAUAJAGAFQAOAJABANQAAARgQAJQgNAHgRAAQgNAAgLgEg");
	this.shape_48.setTransform(298.9,315.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00CC66").s().p("AgIBNQgFgEAAgGIAAiGQAAgGAFgDQADgDAGAAQAFAAAEADQADADAAAGIAACBQAAASgNAAQgFAAgDgDg");
	this.shape_49.setTransform(291.3,312.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00CC66").s().p("AgmAzQgDgEAAgFIAAg/IAAgJIAAgJQAAgGAEgDQADgEAGAAQALAAACALQAQgNAWAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIAAgKQgWAEgJATIAAAwQAAAFgDAEQgEAEgGAAQgHAAgDgEg");
	this.shape_50.setTransform(284,315.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00CC66").s().p("AgLBHQgEgEAAgFIgBgSIAAgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAFAAAEAEQAEAEAAAFIgBAVIgBAWIAAASIAAASQABAFgEAEQgEAEgFAAQgFAAgEgEgAgIgxQgFgEABgGQgBgGAFgEQAFgFAEAAQAHAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgHAAQgEAAgFgEg");
	this.shape_51.setTransform(276.5,312.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00CC66").s().p("AgxA+QAAgFADgDQADgEAGABIANABQAIACAGAAQAOAAAHgJQAGgIABgUQgFAFgGADQgGADgHgBQgTAAgMgMQgMgNAAgTQAAgaAQgRQARgQAbAAQAKAAAGACQAHACAEAFQAMABAAANQAAAHgCALQgEAXgBAZQgBAggJAOQgNASggABQglgBAAgPgAgOgsQgJAKAAAQQAAAMAFAFQAEAFAJABQAHgBAIgHQAIgJABgJIAEgeIgGgDIgHAAQgPAAgJAKg");
	this.shape_52.setTransform(268.1,317.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00CC66").s().p("AghAqQgQgMAAgXQAAgXANgRQAPgTAXAAQARAAALAFQAPAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAHADQAGADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgXAAgPgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_53.setTransform(248.5,315.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00CC66").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_54.setTransform(237.4,312.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00CC66").s().p("AgIBEQgEgEgBgFIABgLIAAgKIgBgxIgTgCQgMgBAAgMQAAgFAEgEQADgEAGAAIARACIAAgLIgBgKQAAgFAEgEQAEgDAFgBQAOAAAAAZIAAAIIAKgBQALAAAEACQAIACAAAJQAAAGgEAEQgEADgGAAIgFAAIgEAAIgJABIABAyIAAAFIAAAGQABAXgOAAQgFgBgEgDg");
	this.shape_55.setTransform(226.8,313.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgxA+QAAgFADgDQADgEAGABIANABQAIACAGAAQAOAAAHgJQAGgIABgUQgFAFgGADQgGADgHgBQgTAAgMgMQgMgNAAgTQAAgaAQgRQARgQAbAAQAKAAAGACQAHACAEAFQAMABAAANQAAAHgCALQgEAXgBAZQgBAggJAOQgNASggABQglgBAAgPgAgOgsQgJAKAAAQQAAAMAFAFQAEAFAJABQAHgBAIgHQAIgJABgJIAEgeIgGgDIgHAAQgPAAgJAKg");
	this.shape_56.setTransform(208.1,317.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AAUAtIgDgUIgBgVIAAgHIAAgJIAAgDIABgFQAAgIgEAAQgJAAgGALQgJAKgEAQIgBAJIgBAJIAAAIIgBAJQAAAFgDAEQgFAEgFAAQgGAAgEgEQgDgEgBgFIgBgJIAAgIIABgbIACgZIgBgJIAAgJQAAgGAEgDQAEgEAGAAQAMAAABAPIAAACQAPgPAPAAQASAAAHAQQAFAKAAAVIAAAGIAAAGQAAAHACAMQACAMAAAIQAAAFgEAEQgEAEgGAAQgMAAgBgMg");
	this.shape_57.setTransform(197.8,315.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AgMBHQgDgEAAgFIAAgSIgBgSIABgWIABgVQAAgFAEgEQAEgEAFAAQAGAAADAEQAEAEAAAFIgBAVIgBAWIABASIAAASQAAAFgEAEQgEAEgFAAQgGAAgEgEgAgIgxQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_58.setTransform(189.9,312.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgmAzQgDgEAAgFIAAg/IABgJIAAgJQAAgGADgDQADgEAGAAQALAAACALQARgNAVAAQATAAAAAaIAAAHQgBAPgNAAQgMAAAAgNIgBgKQgUAEgKATIAAAwQAAAFgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_59.setTransform(182.3,315.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgHIABgGIAAhvQAAgGADgGQAEgHAHAAQAKAAAAALIAAAFIAAADIAAAmQAHgEAHgCQAGgCAFAAQAXAAAOAQQAOAQAAAWQAAAWgQAQQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgIQAIgJAAgMQAAgNgHgJQgGgHgMAAQgEAAgGADg");
	this.shape_60.setTransform(171.4,312.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0066FF").s().p("AgbAzQgPgGAAgKQAAgKAMAAQAFAAAIADQAIACAGAAQASABAAgJQAAgFgOgFIgZgMQgNgKAAgNQAAgVAUgGQANgEAYAAQAKAAAEADQAHADAAAJQAAARgKAAQgKABgCgJIgIgBQgWABAAAGQAAAEANAGQATAJAHAFQAOAJABANQAAARgQAJQgMAHgSAAQgNAAgLgEg");
	this.shape_61.setTransform(151.8,315.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0066FF").s().p("AgcBMQgEgEAAgFQAAgKAVgsQgLgVgXgpIgGgHQgCgFAAgDQAAgGAFgEQAEgEAFAAQAHAAADAFQAOATARAkIANgcIANgZQAFgHAHAAQAGAAAEAEQAEADAAAGIgCAGIghBEQgNAagGARIgGASQgDAJgJAAQgFAAgFgDg");
	this.shape_62.setTransform(141.5,317.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0066FF").s().p("AgfApQgOgNgBgXQgBgVANgRQAPgUAZAAQAUAAALAQQAKAOAAAVQAAAWgMAQQgNASgWAAQgSAAgNgNgAgNgQQgGAJAAAMQAAAMAHAGQAFAFAHAAQAHAAAHgGQAHgHAAgLQACgfgSAAQgLAAgHALg");
	this.shape_63.setTransform(130.7,315.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0066FF").s().p("AgcBKQgEAEgFAAQgFAAgEgEQgEgDAAgGIAAgHIABgGIAAhvQAAgGADgGQAEgHAHAAQAKAAAAALIAAAFIAAADIAAAmQAHgEAHgCQAGgCAFAAQAXAAAOAQQAOAQAAAWQAAAWgQAQQgPAQgWAAQgOAAgMgFgAgKgBQgHACgIAGIAAApQANAGAKAAQALAAAIgIQAIgJAAgMQAAgNgHgJQgGgHgMAAQgEAAgGADg");
	this.shape_64.setTransform(119.7,312.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0066FF").s().p("AggAqQgRgMAAgXQAAgXANgRQAOgTAYAAQARAAAMAFQAOAHAAAQQAAAKgMAJIgWAKIggAOQAFAFAGADQAHADAIAAQANAAAJgGQAIgFAFAAQAKAAAAAKQAAALgRAHQgNAGgPAAQgXAAgOgLgAgMgXQgHAGgEANIAWgKQAMgGAIgFQgGgEgLAAQgIAAgGAGg");
	this.shape_65.setTransform(99.4,315.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0066FF").s().p("AAXBIQgDgIgCgPIgBgWIAAgIIAAgHIAAgJQgBgEgEAAQgLAAgIAJQgEAFgIAOQAAAjgDAIQgEAIgJAAQgFAAgEgEQgEgEAAgFIABgFIABgbIAAhAIAAgDIABgQIgBgJIgBgIQAAgGAEgEQAEgDAGAAQAJAAAEAKQABAGAAAMIAAAUIgBATQAHgHAJgEQAHgDAJAAQARAAAHAJQAFAHACAOIABAYIACATIADATIAAAEQAAAFgEAEQgEADgFAAQgKAAgDgJg");
	this.shape_66.setTransform(88.3,312.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0066FF").s().p("AgJBHQgEgEAAgFIAAgFIABgEIgBgNIAAgOQAAgNgDgWIgCgjIgFAAQgWAAgNgDQgLgDAAgKQAAgFAEgEQAEgFAGABIAQABIAQACIASgBIAQAAIAXABIAWABQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAIgYgBIgYgBIADAnQACAYAAAPIABAKIAAAKQAAAHgDAGQgEAIgHAAQgFAAgEgEg");
	this.shape_67.setTransform(75.5,312.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},17).to({state:[{t:this.instance_3},{t:this.instance_2}]},24).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},27).to({state:[{t:this.instance_5},{t:this.instance_4}]},19).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},26).to({state:[{t:this.instance_7},{t:this.instance_6}]},18).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},27).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},23).to({state:[]},76).wait(23));

	// boys
	this.instance_8 = new lib.boysGift("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(127.8,91.4,0.666,0.645,0,0,0,49.4,48);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21).to({_off:false},0).to({_off:true},240).wait(23));

	// bring
	this.instance_9 = new lib.boysgive("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(250,97.2,0.7,0.722,0,0,0,58.4,36.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(72).to({_off:false},0).to({_off:true},189).wait(23));

	// pizzas
	this.instance_10 = new lib.gifttogirls("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(376.6,106.1,1,1,0,0,0,41.8,11);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(117).to({_off:false},0).to({_off:true},144).wait(23));

	// girls
	this.instance_11 = new lib.girlssitting("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(291.6,188.7,0.711,0.794,0,0,0,46.7,41.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(162).to({_off:false},0).to({_off:true},99).wait(23));

	// static text
	this.instance_12 = new lib.textdirectobjectfadein();
	this.instance_12.parent = this;
	this.instance_12.setTransform(370.8,20.5,1,1,0,0,0,58.9,13.2);

	this.instance_13 = new lib.textverbfadein();
	this.instance_13.parent = this;
	this.instance_13.setTransform(248.8,20.5,1,1,0,0,0,19.9,13.2);

	this.instance_14 = new lib.textindirectobjectfadein();
	this.instance_14.parent = this;
	this.instance_14.setTransform(308.5,273,1,1,0,0,0,68.3,13.2);

	this.instance_15 = new lib.textsubjectfadein();
	this.instance_15.parent = this;
	this.instance_15.setTransform(121,20.5,1,1,0,0,0,34.5,13.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("Ag8BLQAAgHAFgEQAEgDAHAAIAOACQAKABAIAAQAQAAAJgKQAIgLABgWQgGAGgHADQgHADgJAAQgXAAgOgPQgPgPAAgXQAAggATgTQAUgVAiAAQALAAAIADQAIADAFAFQAPABAAARQAAAHgDAOQgFAbgBAfQgBAlgMARQgPAXgmAAQguAAAAgSgAgRg1QgKANAAASQAAAOAFAIQAFAFALABQAIAAAKgLQAKgKABgLIAFgjIgIgDQgEgBgEAAQgSAAgLAMg");
	this.shape_68.setTransform(271.7,49.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_69.setTransform(259.3,46.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgFQAFgEAHgBQAHABAGAEQAFAFAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_70.setTransform(249.8,43.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAHAAQANAAADAOQATgQAaAAQAYAAAAAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgHAAgEgFg");
	this.shape_71.setTransform(240.6,46.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgiBZQgFAEgFAAQgHAAgFgEQgEgEAAgGIAAgJIABgJIAAiDQAAgJADgGQAFgJAJAAQAMAAAAAOIAAAFIgBAFIAAAsIARgHQAIgCAHAAQAbAAARAUQAQASAAAaQAAAbgTATQgSAUgbAAQgQAAgPgGgAgNgCQgHADgLAHIAAAyQAQAHAMAAQAOAAAKgKQAJgKAAgQQAAgPgIgKQgIgJgNAAQgGAAgIADg");
	this.shape_72.setTransform(227.5,43.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0066FF").s().p("AgiA8QgTgHABgMQgBgMAPABQAGAAAKADQALADAGAAQAYAAAAgKQAAgFgSgHQgXgLgIgEQgRgLAAgQQAAgXAagIQAQgEAegBQAMAAAGADQAIAFAAAKQAAAVgMAAQgMAAgCgKIgKgBQgdAAAAAIQAAAEAQAIQAZALAJAFQARALABAPQgBAUgTAKQgQAJgXgBQgPAAgOgEg");
	this.shape_73.setTransform(151.2,45.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0066FF").s().p("AgkBZQgFgFAAgGQAAgLAag0QgNgYgegxIgGgIQgDgFAAgFQAAgGAFgFQAGgEAGgBQAJABAEAFQASAWAWArIAQggIARgeQAFgJAJAAQAHAAAGAFQAFAEAAAGQAAAEgCAEIgqBRQgQAegIATIgHAVQgFAKgLAAQgHAAgGgDg");
	this.shape_74.setTransform(138.1,48.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0066FF").s().p("AgoAwQgSgPAAgbQgBgZAPgTQATgYAgAAQAZABAPARQANARAAAZQAAAZgQATQgRAVgcAAQgWAAgRgPgAgRgSQgHAKAAAOQAAAOAIAHQAHAGAIAAQAKAAAIgHQAJgIABgOQABgjgWgBQgOAAgJAOg");
	this.shape_75.setTransform(124.5,45.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0066FF").s().p("AgkBXQgFAEgGAAQgGAAgFgEQgFgEAAgHIAAgIIABgIIAAiBQAAgIAEgGQAEgIAKAAQANAAAAAMIAAAGIgBAEIAAAsQAJgFAJgCQAIgCAGgBQAeAAASAUQAQARAAAaQAAAbgUASQgTAUgcgBQgRAAgQgFgAgNgCQgIACgLAIIAAAwQARAHAMAAQAPAAAKgKQAKgJAAgQQAAgOgJgKQgIgJgPAAQgEAAgJADg");
	this.shape_76.setTransform(110.6,42.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#009900").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgQQgOgPAAgeQAAgbAVgUQAVgUAcgBQALAAAOAHQASAHAAAKQAAAFgDADIgBALIgBARQAAAVADAJIAFANIAFALQAAAGgFAEQgEAFgHAAQgFAAgMgLgAgQgXQgMAMAAAQQAAAPAGAJQAGAHALABQAGAAAHgDQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgBIgDgCQgPAAgMANg");
	this.shape_77.setTransform(389,46.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#009900").s().p("Ag0A/QgFgEgBgGQABgIAHgGQAegZAeguIgNAAQgSAAgSgDQgPgCAAgNQAAgGAFgFQAFgEAGAAIASABIARABIAXgBIAYgBQAPAAAAAMQAAAKgKAMIgZAeIgXAgIALgBIAOACIAOACQAGAAAFAEQAFAFAAAGQAAAHgFAEQgFAFgGAAIgOgCIgOgCQgZAAgXAFIgFAAQgHAAgEgDg");
	this.shape_78.setTransform(375.8,46.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#009900").s().p("Ag0A/QgGgEABgGQgBgIAIgGQAdgZAfguIgNAAQgRAAgTgDQgPgCAAgNQABgGAEgFQAEgEAIAAIARABIARABIAXgBIAYgBQAPAAAAAMQgBAKgJAMIgYAeIgZAgIAMgBIAOACIAOACQAGAAAFAEQAFAFgBAGQABAHgFAEQgFAFgGAAIgOgCIgOgCQgZAAgXAFIgFAAQgGAAgFgDg");
	this.shape_79.setTransform(362.9,46.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#009900").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgFQAFgEAHgBQAHABAGAEQAFAFAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_80.setTransform(353.4,43.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#009900").s().p("AgwBeQgFgFAAgGIAAgsIAAgtQAAgZgBgTIgCgXQAAgJAEgIQAFgIAJAAQAHABAEAEQAEAEAAAHIAAABQAIgFAIgCQAHgCAIAAQAbAAAMAXQAKARAAAbQAAAZgPARQgQATgagBQgJABgLgDIAAAwQAAAGgFAFQgFAEgHABQgHgBgEgEgAgGg3QgIAEgHAGIABAvQAKAEAKAAQAMAAAGgHQAGgIAAgOQAAgPgBgGQgEgPgLAAQgHAAgHAEg");
	this.shape_81.setTransform(343.5,49.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00CC66").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAALAEQAKADAGAAQAWAAAAgKQAAgFgQgIQgYgLgGgDQgRgMAAgQQAAgYAZgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgLAAQgMAAgCgKIgKAAQgcgBABAJQgBAEARAHQAXAMAIAFQARAMAAAPQAAAUgTALQgPAIgVAAQgPAAgNgFg");
	this.shape_82.setTransform(310.4,149.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00CC66").s().p("AgKBcQgFgFAAgHIAAihQAAgHAFgDQAFgFAFAAQAHAAAFAFQAEADAAAHIAACbQAAAXgQAAQgGgBgEgEg");
	this.shape_83.setTransform(301.3,146.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00CC66").s().p("AguA9QgEgEAAgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAZAAQAYAAgBAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgFAEQgEAFgHAAQgHAAgFgFg");
	this.shape_84.setTransform(292.6,149.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00CC66").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_85.setTransform(283.5,146.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00CC66").s().p("Ag8BLQAAgHAEgDQAFgEAHgBIAOADQAKACAIAAQAQAAAJgLQAIgLABgWQgGAGgHADQgHADgIAAQgYAAgOgPQgPgPAAgXQAAggATgTQAVgVAhAAQALAAAIADQAHADAGAFQAOABAAARQAAAHgCAOQgFAbgBAeQgBAmgMARQgPAXgmAAQguAAAAgSgAgRg0QgKAMAAASQAAAOAFAIQAGAFAKAAQAIAAAKgKQAKgKABgKIAFgjIgIgEQgEgCgEAAQgSAAgLAOg");
	this.shape_86.setTransform(273.4,152.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},237).wait(47));

	// lines
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(3,1,1).p("ARbn4IHVJHAMRHuIFKFeApXoAIgLAAIACDIApitMIAAFMIuuAAIIGIiAIms4IAAE4Ix9AAA4QoAIlCAAASsHmIw7AIIrIvuAImoAIUtAA");
	this.shape_87.setTransform(250,177.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(284));

	// side text
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00CC66").s().p("AgOA2QgOgHgLgMQgQgSgCgSQgCgVARgQQAUgRAWgCQAYgCARATQAMANAEANQAEAPgLALQgJAHgPgDIgXgJIgigPQgBAHADAHQADAGAGAHQAJAKAKAEQAJADADADQAHAIgIAHQgEAEgGAAQgGAAgIgEgAgNgbIAWALQAOAGAJADQgCgIgHgJQgHgHgJAAIgDAAQgHAAgKAEg");
	this.shape_88.setTransform(376.7,261.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00CC66").s().p("AgOBUQgHgIAFgIQAFgIAKgLQAIgMAHgGIAGgEIAGgGIAGgFQAEgFgDgDQgIgIgNAAQgHAAgQADQgbAZgIACQgKADgFgHQgEgEAAgGQAAgGAEgDIAFgDQACgBATgQIAygtIADgCIAMgLIAHgHIAGgHQAEgEAGABQAFABAEAEQAHAIgFAKQgEAFgJAJIgQANIgPANQAKAAAJAEQAIAEAGAHQAMAMgCANQgBAJgLALIgSASQgLAMgDACIgMARIgDACQgEAEgFAAQgFgCgEgEg");
	this.shape_89.setTransform(368.6,250.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00CC66").s().p("Ag1A0QgEgFAAgFQAAgGAEgEIAIgHIAJgHIAlgjIgLgQQgHgLAIgHQAFgEAFAAQAFAAAEAFIALANIAIgHIAHgHQAEgEAGAAQAFABAEAEQAKAMgTARIgGAFIAIAHQAIAJABADQADAIgHAHQgEAEgGgBQgFAAgEgFIgDgDIgEgEIgHgHIgmAlIgEAEIgEAEQgKAJgIAAQgFAAgEgEg");
	this.shape_90.setTransform(362.5,243.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#009900").s().p("AgSA1QgNgHgKgNQgPgTgBgTQgBgVATgPQAUgQAWAAQAZgBAPAUQAMAOACANQAEAQgNAKQgJAHgOgFQgHgCgRgIIgggRQgBAHACAGQADAHAFAHQAJALAKAEQAIAEADAEQAHAIgIAHQgEADgEAAQgHAAgKgFgAgMgcIAVAMQANAHAKADQgBgIgHgIQgGgIgJgBIgEAAQgGAAgLADg");
	this.shape_91.setTransform(417.7,172);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#009900").s().p("AAFBaQgFgBgDgFQgIgJAIgJIAUgVIAWgWQAMgNgCgDIgLgGQgJgDgFAAQgJAGgPAPQgPARgJAHQgFADgFAAQgFgBgEgFQgEgFAAgFQABgGAEgDQAKgIAQgPQAQgQAIgHIAIgHQgNgGgTABIgDAAIgZAUIgHAFIgFAEQgFADgFgBQgFgCgDgEQgGgHAEgHQADgFAJgHIAegYIALgJIAMgKQAHgGAHgBQAJgDAFAFQADAFgBAGQAAAGgEAEIgIAFQAYABAIALQAKAMgFANQAIACAHAEQAHAEAGAHQAMAPgLARQgCAEgRARQgLANgcAbQgDADgEAAIgDAAg");
	this.shape_92.setTransform(408.6,160.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#009900").s().p("AgtAhQgLgOABgTQACgUASgPQASgOAVgBQAagBARAVQANARgGASQgFASgRAOQgTAOgTAAIgBABQgXAAgPgTgAADgWQgKABgKAIQgKAIgBAIQAAAIAEAGQAGAHAIABQAKABAJgGQAbgUgLgNQgHgJgLAAIgEAAg");
	this.shape_93.setTransform(400.4,149.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#009900").s().p("AgXA0QgOgFgMgQQgIgKgEgMQgFgPAJgHQAIgGAHAKQADAEAEAHQADAJADAEQAMAQAHgFQAEgDgEgQQgGgVAAgHQgBgSALgJQAQgMATANQALAHAQAVQAGAIABAFQACAGgIAGQgOAMgGgIQgGgIAFgGIgFgHQgPgTgGAEQgDACAFAQQAFAVAAAJQABASgLAIQgHAHgKAAQgGAAgHgDg");
	this.shape_94.setTransform(394.1,141.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0066FF").s().p("AgOA2QgOgHgLgMQgQgSgCgSQgCgVARgQQAUgRAWgCQAYgCARATQAMANAEANQAEAPgLALQgJAHgPgDIgXgJIgigPQgBAHADAHQADAGAGAHQAJAKAKAEQAJADADADQAHAIgIAHQgEAEgGAAQgGAAgIgEgAgNgbIAWALQAOAGAJADQgCgIgHgJQgHgHgJAAIgDAAQgHAAgKAEg");
	this.shape_95.setTransform(147.8,162.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0066FF").s().p("AgOBUQgHgIAFgIQAFgIAKgLQAIgMAHgGIAGgEIAGgGIAGgFQAEgFgDgDQgIgIgNAAQgHAAgQADQgbAZgIACQgKADgFgHQgEgEAAgGQAAgGAEgDIAFgDQACgBATgQIAygtIADgCIAMgLIAHgHIAGgHQAEgEAGABQAFABAEAEQAHAIgFAKQgEAFgJAJIgQANIgPANQAKAAAJAEQAIAEAGAHQAMAMgCANQgBAJgLALIgSASQgLAMgDACIgMARIgDACQgEAEgFAAQgFgCgEgEg");
	this.shape_96.setTransform(139.7,151.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0066FF").s().p("AhLBKQgEgEAAgGQAAgGAEgEIAEgCIADgDIALgKIAKgKQAKgJAQgRIAZgaIgEgEQgOgRgGgMQgGgKAIgHQAEgEAFAAQAHgBADAGIAKANIAKANIANAOIAMAOIAPASIAPARQAEAFAAAGQgBAFgEAEQgEAEgGAAQgGgBgEgEIgQgUIgPgSIgdAdIgdAeIgIAHIgHAHQgFAFgHACIgEABQgGAAgEgFg");
	this.shape_97.setTransform(134.7,139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]}).wait(284));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61,1.3,378,284.8);


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
		var bgm = createjs.Sound.play('bgmInd',{loop:-1});
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
		
		 window.open ("indirect_scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("indirect_scene2.html","_self");
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
(lib.indirect_scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3repeat:231});

	// timeline functions:
	this.frame_0 = function() {
		playSound("boysbringgirlspizza");
	}
	this.frame_230 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_250 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(230).call(this.frame_230).wait(20).call(this.frame_250).wait(1));

	// navigation
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(251));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgEAFQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgCACgCQACgCACAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQACACAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape.setTransform(175.2,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgSAlQgIgIAAgMQAAgOAIgIQAHgJAMAAQAGAAADACIAFAEIACgfQABgEAEAAQAFAAAAAFIgCAhIgBAPQAAASACAJIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEAAgBgFQgEADgEABQgEACgEAAQgLAAgHgHgAgMABQgEAFAAALQAAAHAFAFQAFAFAGAAQAEAAADgCIAGgEIABgCIAAgJIAAgGIAAgHQgCgEgDgCQgDgCgFAAQgIABgFAEg");
	this.shape_1.setTransform(170.5,27.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgRAXQgJgHAAgMQAAgNAHgJQAIgKALAAQAJAAAFADQAHADAAAIQAAAFgGAFIgLAFIgUAKQADAEAFACQAEACAFAAIAJgBQAGgCACgDQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAGgKAFQgIADgIAAQgLAAgHgGgAgKgOQgEAFgDAKIARgHQAJgFAEgDQgFgFgIAAQgGAAgEAFg");
	this.shape_2.setTransform(164.4,29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgCAgQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIgBgTIgBgSQAAgGgCgDQgEACgDAEIgHAHIgDADIAAAJIgBAJIABAFIAAAEQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgGAAAAgOIAAgJIABgJIgBgJIAAgIQAAgMAFAAIAEACIACADIAAAEIgBADIABAGQACgGAGgEQAFgGAEABQAIAAADAIQADgEAEgCQAEgCAFAAQAJAAADAKIACAPIAEAeQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgEAAgBgFIgCgRIgCgPIgCgHQgCgFgCAAQgCAAgFAEIgHAEIAAAKIACAOIABANQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_3.setTransform(157.1,29.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgUAYIAAgkIAAgGIAAgEQAAgGAFAAQAFAAABAJQAJgKAMAAQAEAAACADQADAEAAAGIAAAEQAAAHgFAAQgFAAAAgGIgBgDIAAgFQgIABgEAEQgFADgDAHIAAAcQAAAGgGAAQgEAAAAgGg");
	this.shape_4.setTransform(150.3,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgPAXQgHgIgBgMQAAgLAGgKQAIgKAMAAQALAAAGAJQAEAIAAALQAAALgGAJQgHAJgLAAQgJAAgGgGgAgJgKQgDAGAAAHQAAAIAEAEQAEAEAEAAQAFAAAEgFQAFgEAAgIQABgTgMgBQgHAAgFAIg");
	this.shape_5.setTransform(144.5,29.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgIAuQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIABgPIAAgPIAAgOIgJAAQgFAAAAgFQAAgFAJAAIAFgBIABgIQACgMAEgFQAFgHAMAAQAHAAAAAFQAAAFgHAAQgNAAgBASIAAAEIALgBQAJAAAAAFQAAAEgEABIgEAAIgNABIAAALIAAAKIAAAKQAAAKgBAGQAAAEgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_6.setTransform(138.8,27.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgUAYIAAgkIAAgGIAAgEQAAgGAFAAQAFAAABAJQAJgKAMAAQAEAAACADQADAEAAAGIAAAEQAAAHgFAAQgFAAAAgGIgBgDIAAgFQgIABgEAEQgFADgDAHIAAAcQAAAGgGAAQgEAAAAgGg");
	this.shape_7.setTransform(133.6,29.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgRAXQgJgHAAgMQAAgNAHgJQAIgKALAAQAJAAAFADQAHADAAAIQAAAFgGAFIgLAFIgUAKQADAEAFACQAEACAFAAIAJgBQAGgCACgDQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAGgKAFQgIADgIAAQgLAAgHgGgAgKgOQgEAFgDAKIARgHQAJgFAEgDQgFgFgIAAQgGAAgEAFg");
	this.shape_8.setTransform(127.8,29.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgUArQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgWIAAgUIgBgVIgBgMQAAgDACgDQABgDADAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAACIAAADQAEgEAFgBIAHgBQALAAAFAKQAEAHAAANQAAAKgGAIQgHAIgLAAQgEAAgHgCIAAAaQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAgEgcIgHAGIAAAZQAGACAFAAQAHAAADgFQADgEAAgGQAAgKgCgFQgCgEgFAAQgEAAgEABg");
	this.shape_9.setTransform(121.8,30.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgOAeQgJgDAAgFQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQACAAACADQACABAFABIAGABIAGgBQAGgCgBgDQABgIgLgCIgFgCQgGgBgEgCQgEgCAAgGQAAgLALgFIAJgEIAKgDIAFgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAIABAFIAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgCgGIgLAEQgJADABAFIACABQAMACAGAEQAJAFAAALQAAAIgIAFQgGADgIAAQgIAAgGgCg");
	this.shape_10.setTransform(112.7,28.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgEAnQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgKIAAgKIAAgMIABgMQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAQAAAAAAAAQABAAABAAQAAABAAAAQABAAAAABIABADIAAAMIgBAMIABAKIAAAKQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAgAgCgdQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_11.setTransform(108.7,27.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AANAaIgBgMIgBgMIAAgEIAAgFQAAgLgEAAQgGAAgEAHQgFAGgDAJIgBAGIAAAFIAAAFIABAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgEIgBgFIABgPIABgPIAAgFIAAgFQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAAAAHIAAAGQAKgMAIAAQAJAAADAHQACAFABAKIAAAGIgBAEIACALIABAMQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_12.setTransform(101.1,29.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgPAXQgHgIgBgMQAAgLAGgKQAIgKAMAAQALAAAGAJQAEAIAAALQAAALgGAJQgHAJgLAAQgJAAgGgGgAgJgKQgDAGAAAHQAAAIAEAEQAEAEAEAAQAFAAAEgFQAFgEAAgIQABgTgMgBQgHAAgFAIg");
	this.shape_13.setTransform(95.1,29.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgEAnQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgKIAAgKIAAgMIABgMQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABADIAAAMIgBAMIABAKIAAAKQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAgAgCgdQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_14.setTransform(90.9,27.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AgDAmQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgGIAAgGIgBgeIgLgBQgGgBAAgFQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIALABIgBgHIAAgHQABgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQADAAABAIIAAAEIAAAEIAAADIAIgBIAIABQACABAAAEQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAIgDAAIgDAAIgHABIABAeIAAADIAAACQAAAMgFAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_15.setTransform(86.6,28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgOAXQgIgHAAgLQAAgKAHgLQAIgNAJAAQAGAAAGACQAIADAAAFIgBAEQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgCgCQgEgCgHAAQgEAAgGAKQgEAIAAAGQAAAHAEAEQAFAEAGAAQADAAAEgCIAGgDIACgBQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAEgIAEQgHADgFAAQgKAAgHgHg");
	this.shape_16.setTransform(81.2,29.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AARAbIgEgDIgJAEIgFABQgNAAgFgHQgGgHAAgNQAAgMAJgKQAJgJALAAQAFAAAGADQAIADgBAEQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBAHIAAALIABALIAEAJIABADIAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIgEgDgAgIgMQgGAGAAAIQAAAJADAEQADAFAHAAQAEAAADgCIAFgEIgCgVIABgFIABgFIgDgCIgDAAQgHAAgGAHg");
	this.shape_17.setTransform(75.6,29.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AgOAeQgIgDAAgFQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQACAAADADQABABAFABIAFABIAHgBQAGgCAAgDQAAgIgLgCIgEgCQgIgBgCgCQgFgCAAgGQAAgLALgFIAJgEIAKgDIAFgBQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAIABAFIAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgGIgMAEQgIADAAAFIADABQALACAGAEQAJAFAAALQAAAIgIAFQgGADgJAAQgGAAgHgCg");
	this.shape_18.setTransform(66.6,28.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AgFAJIABgIIADgJQAAgEACAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAFgDAKQgBAFgCAAQgFAAAAgEg");
	this.shape_19.setTransform(63,24.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgYAqQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgPIAAgWIACgWIAAgPQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAHgDAKAAQAIAAAJAHQAKAHAAALQAAAOgLAHQAIADAEAFQAEAEAAAFQAAAGgHAHQgFAEgFACQgLAEgTAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgQAWIAAALQAOgBAIgEIAHgEQAEgDAAgBQAAgCgHgEIgKgEIgFgBIgCABIgCAAIgHgBIAAANgAgOgfIAAAKIgBAUIAIAAQAHAAAGgEQAFgFAAgIQAAgEgFgFQgGgFgFABIgJAAg");
	this.shape_20.setTransform(58.9,27.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgbApIgBgEIgBgNIAAgNIABgNIABgPIAAgIIgBgIQAAgDACgDQACgDAEABIAMABQAIABAEACQAWAMAAARQAAAIgIAFQgGAFgJADQARAJAIAKQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgEACIgEgCQgRgRgVgHIAAALIABALIgCAEQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAgQgXIAAAGIgBALIgBAKIADAAIACAAQANAAAGgEIAGgDQADgDAAgCQAAgIgJgGQgGgGgJgBIgIgBg");
	this.shape_21.setTransform(51.8,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgXApQgFgFAAgRIAAgHIABgJIgBgDIABgCIABgXIAAgGIgBgGQAAgGAGAAIAEABIAMgCIAJgBQAOAAAHADQAEACAAADIgBAEIgEACIgCAAQgJgDgJAAIgIABIgLACIAAAGIgBAUIAXgCIAMgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAEgFAAIgNABIgYADIAAAHIAAAGQAAAMACACQABACAHAAIAJgBIAKAAIADAAIAEAAQAFAAAAAFQAAAFgEABQgFABgQAAQgRAAgFgFg");
	this.shape_22.setTransform(45,27.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgJAnQgHgQgHgeIgFgPIgCgPQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAEAAABADIACAKIAFASIAKAhIAAAAIAOgmIAEgOQADgHAEgEQAAgBABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIACAEIgBAEIgGAKIgEALIgPAmIgFAOQgBAEgDgBQgEABgCgFg");
	this.shape_23.setTransform(38.2,27.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AgRAXQgJgHAAgMQAAgNAHgJQAIgKALAAQAJAAAFADQAHADAAAIQAAAFgGAFIgLAFIgUAKQADAEAFACQAEACAFAAIAJgBQAGgCACgDQABAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAGgKAFQgIADgIAAQgLAAgHgGgAgKgOQgEAFgDAKIARgHQAJgFAEgDQgFgFgIAAQgGAAgEAFg");
	this.shape_24.setTransform(28,29.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AAOAoIgCgMIgBgNIAAgEIAAgEQABgJgGAAQgGAAgFAFIgIAMQABAUgCAEQgCADgCAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgCIAAgIIAAgIIAAgmIAAgJIAAgFIAAgGQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAEAAABAFIABAJIgBAMIAAAMIAAAFQAFgGAFgDQAEgDAFAAQAKAAADAGQACAEAAAIIABALIABALIABALIABABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgDACQgEAAgCgFg");
	this.shape_25.setTransform(21.8,27.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AgCAmQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgGIABgGIgCgeIgMgBQgEgBAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIAMABIgBgHIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAEAAABAIIAAAEIAAAEIAAADIAHgBIAHABQAEABAAAEQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgDAAIgHABIABAeIAAADIAAACQAAAMgGAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_26.setTransform(15.9,28.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00FF00").s().p("AAhApIgDgJIgCgJIgHglIgKAfIgEAKQgCAHgCADQgCAEgDABQgDgBgCgDIgCgGIgCgGQgFgTgEgUIgCAJIgHAcIgCAPQgCADgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgIADgNIAGgVIADgRQADgMACgDQACgDADAAQAEAAACADQACAFACAPQADARAGAUQAHgUAGgWIACgIIACgHQACgEAEgBQAFABACAIIACANQADAXAFARIACAKIACAJQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEABQgDAAgCgCg");
	this.shape_27.setTransform(307.3,10.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00FF00").s().p("AgaAhQgLgJAAgQQgBgRALgQQANgQARAAQASAAAIAHQAJAJAAARQAAASgKAPQgLARgRAAQgQAAgKgJgAgSgSQgIANgBANQAAAKAJAHQAGAGAMABQALAAAJgOQAHgMAAgOQAAgMgFgGQgFgEgOAAQgMgBgJANg");
	this.shape_28.setTransform(298,10.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FF00").s().p("AghAqQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIABgRIABgRIAAgHIgBgJIABgNIAAgNQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBANIAAANIAAANIAWgEQAOgDAJAAIABgXIABgIQACgFADAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIAAADIgBAGIAAAFIAAAFIgBAQIgBAPIABAMIABANIgCADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCgDIAAgNIgBgMIAAgIQgJAAgNADIgWAEIgBAOIgBANQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAgBgBg");
	this.shape_29.setTransform(289.4,10.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00FF00").s().p("AAMArQAAgBgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgDgKIgFgYIgCgVQgFARgGALQgFAOgCAJIAAACQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIABAAgHIgBgHIgGgaIgMglIAAgCQAAgGAFAAQADAAACAEIAFAMIAFAXIAGAXQAGgOAFgSIAGgQQAFgMADAAQAEAAABAEQACAEADASIADAUIAFAWIASguIADgLIADgKQACgDADAAQAGABAAAFIgCAFIgDAGIgCAKIgQAlIgIATQgBAEgEAAIgFgBg");
	this.shape_30.setTransform(279.7,10.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00FF00").s().p("AgbApIgBgEIgBgNIAAgNIABgNIABgPIAAgIIgBgIQAAgDACgDQACgDAEABIAMABQAIABAEACQAWAMAAARQAAAIgIAFQgGAFgJADQARAJAIAKQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgEACIgEgCQgRgRgVgHIAAALIABALIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgQgXIAAAGIgBALIgBAKIADAAIACAAQANAAAGgEIAGgDQADgDAAgCQAAgIgJgGQgGgGgJgBIgIgBg");
	this.shape_31.setTransform(267.1,10.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00FF00").s().p("AgaAhQgMgJAAgQQABgRAKgQQANgQASAAQARAAAJAHQAIAJABARQgBASgJAPQgMARgSAAQgOAAgLgJgAgSgSQgJANAAANQABAKAHAHQAHAGALABQAMAAAJgOQAIgMgBgOQABgMgGgGQgFgEgNAAQgNgBgJANg");
	this.shape_32.setTransform(259.1,10.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00FF00").s().p("AgZAsQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgfIAAgfIAAgHIAAgHQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAEAAIAMgBIAIgBQAGAAAIACQALADAAADIgBAEQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBgBQgIgCgKAAIgHAAIgLACIAAAYQAKgDAFgBIAQACQAGAAAAAFQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgJgBIgHAAQgEAAgLADIgBAkQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_33.setTransform(251.7,10.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0000FF").s().p("AgUAZIAAglIAAgGIAAgEQAAgGAFAAQAFAAAAAJQAKgKAMAAQAFAAACADQACADAAAHIAAAEQAAAHgGgBQgEABAAgGIAAgEIAAgEQgJABgEADQgFAEgDAHIAAAdQAAAFgFAAQgFAAAAgFg");
	this.shape_34.setTransform(242.2,11.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0000FF").s().p("AgPAXQgHgIgBgMQAAgLAGgKQAIgKAMAAQALAAAGAJQAEAIAAALQAAALgGAJQgHAJgLAAQgJAAgGgGgAgJgKQgDAGAAAHQAAAIAEAEQAEAEAEAAQAFAAAEgFQAFgEAAgIQABgTgMgBQgHAAgFAIg");
	this.shape_35.setTransform(236.4,11.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00FF00").s().p("AAhApIgDgJIgCgJIgHglIgKAfIgEAKQgBAHgDADQgCAEgDABQgDgBgCgDIgCgGIgCgGQgFgTgEgUIgCAJIgHAcIgCAPQgCADgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBgIAEgNIAGgVIADgRQADgMACgDQACgDADAAQAEAAACADQACAFACAPQADARAGAUQAHgUAGgWIABgIIADgHQACgEAEgBQAEABADAIIACANQADAXAFARIACAKIACAJQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEABQgDAAgCgCg");
	this.shape_36.setTransform(225.6,10.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00FF00").s().p("AgaAhQgMgJAAgQQAAgRALgQQANgQASAAQARAAAJAHQAIAJABARQAAASgLAPQgLARgSAAQgOAAgLgJgAgSgSQgJANAAANQABAKAHAHQAIAGAKABQAMAAAJgOQAIgMgBgOQABgMgGgGQgFgEgNAAQgNgBgJANg");
	this.shape_37.setTransform(216.3,10.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00FF00").s().p("AghAqQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIABgRIABgRIAAgHIgBgJIABgNIAAgNQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBANIAAANIAAANIAWgEQAOgDAJAAIABgXIABgIQACgFADAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIAAADIgBAGIAAAFIAAAFIgBAQIgBAPIABAMIABANIgCADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBIgCgDIAAgNIgBgMIAAgIQgJAAgNADIgWAEIgBAOIgBANQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_38.setTransform(207.7,10.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00FF00").s().p("AAMArQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgKIgFgYIgCgVQgFARgFALQgHAOgBAJIAAACQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGABgBgHIgCgHIgFgaIgMglIgBgCQABgGAFAAQADAAACAEIAFAMIAFAXIAGAXQAGgOAFgSIAGgQQAEgMAEAAQAEAAACAEQACAEABASIAEAUIAFAWIASguIACgLIAEgKQACgDADAAQAFABABAFIgCAFIgDAGIgCAKIgQAlIgIATQgBAEgEAAIgFgBg");
	this.shape_39.setTransform(198,10.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FF00").s().p("AgaAhQgMgJAAgQQAAgRALgQQANgQASAAQARAAAJAHQAIAJABARQAAASgLAPQgLARgSAAQgOAAgLgJgAgSgSQgJANAAANQABAKAHAHQAIAGAKABQAMAAAJgOQAIgMgBgOQABgMgGgGQgFgEgNAAQgNgBgJANg");
	this.shape_40.setTransform(184.3,10.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00FF00").s().p("AgDAnQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIAAgCIAAgIIgBgIIgBgUIgBgXIgFABQgMAAgHgCQgEgBAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAIABIAJAAIAKAAIAIAAIANABIAMAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgMgBIgNgBIgDAAIABAYIABAYIABAFIAAAGIgBAHQgCADgDAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBg");
	this.shape_41.setTransform(176.6,10.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000FF").s().p("AgOAeQgJgDAAgFQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQACAAACADQACABAFABIAGABIAGgBQAGgCgBgDQAAgIgKgCIgFgCQgGgBgEgCQgEgCAAgGQAAgLALgFIAJgEIAKgDIAFgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAIABAFIAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCgGIgLAEQgJADABAFIACABQAMACAGAEQAJAFAAALQAAAIgIAFQgGADgIAAQgIAAgGgCg");
	this.shape_42.setTransform(166.3,11.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0000FF").s().p("AgFAnIABgUIAAgTIABgSIAAgUQgBgFAFgBQAFABAAAFIAAAUIAAASIgBAbIAAAMQgBAFgEABQgFgBAAgFg");
	this.shape_43.setTransform(162.3,10.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0000FF").s().p("AARAbIgEgDIgJAEIgFABQgNAAgFgHQgGgHAAgNQAAgMAJgKQAJgJALAAQAFAAAGADQAIADgBAEQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBAHIAAALIABALIAEAJIABADIAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIgEgDgAgIgMQgGAGAAAIQAAAJADAEQADAFAHAAQAEAAADgCIAFgEIgCgVIABgFIABgFIgDgCIgDAAQgHAAgGAHg");
	this.shape_44.setTransform(157.9,11.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0000FF").s().p("AAMAZQgHAEgIAAQgHAAgEgDQgFgEgBgGQgCgOAAgLIABgQQABgFAEAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBAIIgBAIIABAPIACALIADABIADAAQAHABAIgDIAAgLIgBgJIABgVQABgEAFAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBAUIAAALIAAALIAAAEIABADQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgBgGg");
	this.shape_45.setTransform(152.3,11.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0000FF").s().p("AAIAmIAAgGIABgGIABgMIgHABQgKAAgIgFQgIgHAAgKQAAgRAJgJQAJgJAPAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAIgCAiIgCAUIgCAVQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgFABAAgGgAgIgXQgEAGAAAKQAAAGAEADQAEAEAHAAQAFAAACgFQADgGAAgOIABgOIgEAAIgEAAQgJABgFAJg");
	this.shape_46.setTransform(146.3,13.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000FF").s().p("AgRAXQgJgHAAgMQAAgNAHgJQAIgKALAAQAJAAAFADQAHADAAAIQAAAFgGAFIgLAFIgUAKQADAEAFACQAEACAFAAIAJgBQAGgCACgDQABAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAGgKAFQgIADgIAAQgLAAgHgGgAgKgOQgEAFgDAKIARgHQAJgFAEgDQgFgFgIAAQgGAAgEAFg");
	this.shape_47.setTransform(140.7,11.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00FF00").s().p("AgDAnQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIAAgCIAAgIIgBgIIgBgUIgBgXIgFABQgMAAgHgCQgEgBAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAIABIAJAAIAKAAIAIAAIANABIAMAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgMgBIgNgBIgDAAIABAYIABAYIABAFIAAAGIgBAHQgCADgDAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_48.setTransform(131,10.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FF00").s().p("AgWAhQgHgIAAgMQAAgRAPgTQANgQAMAAIAFAAIADABQACgDADAAQAEAAABAFIABALIgBAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgCgEIgCgEIgGgBQgIAAgIAMQgNAQAAANQAAAHAEAFQAFAGAGAAQAFAAAFgDIAKgHIAFgCQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgOANgOAAQgLAAgIgJg");
	this.shape_49.setTransform(123.6,10.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FF00").s().p("AgXApQgFgFAAgRIAAgHIABgJIgBgDIABgCIABgXIAAgGIgBgGQAAgGAGAAIAEABIAMgCIAJgBQAOAAAHADQAEACAAADIgBAEIgEACIgCAAQgJgDgJAAIgIABIgLACIAAAGIgBAUIAXgCIAMgBQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAEgFAAIgNABIgYADIAAAHIAAAGQAAAMACACQABACAHAAIAJgBIAKAAIADAAIAEAAQAFAAAAAFQAAAFgEABQgFABgQAAQgRAAgFgFg");
	this.shape_50.setTransform(116.9,10.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FF00").s().p("AgVAlQgKgIAAgJQAAgHAFAAQAGAAAAAHQAAAFAGADQAGAFAFAAQAEAAACgbIAAggIAAgFIgDAAIgFAAIgHgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgFAHgBIAFABIAFAAIAKgBIAKAAQAMAAAAAHQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBIgEAAIgGAAIAAAGQAAAogFASQgEAMgIAAQgJAAgJgHg");
	this.shape_51.setTransform(109.7,10.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FF00").s().p("AgYAqQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgQIAAgVIACgWIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAHgCAKgBQAIABAJAGQAKAHAAAMQAAANgLAHQAIADAEAFQAEAEAAAFQAAAGgHAHQgFAEgFACQgLAEgTABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgQAVIAAAMQAOgBAIgEIAHgEQAEgCAAgCQAAgDgHgDIgKgEIgFgBIgCABIgCAAIgHgBIAAAMgAgOgfIAAAKIgBAUIAIABQAHgBAGgFQAFgEAAgHQAAgFgFgFQgGgFgFAAIgJABg");
	this.shape_52.setTransform(102.8,10.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FF00").s().p("AgaAhQgMgJAAgQQAAgRAMgQQAMgQARAAQASAAAJAHQAJAJgBARQABASgKAPQgMARgRAAQgQAAgKgJgAgSgSQgJANABANQAAAKAIAHQAGAGAMABQAMAAAIgOQAIgMAAgOQgBgMgFgGQgGgEgNAAQgLgBgKANg");
	this.shape_53.setTransform(94.7,10.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FF00").s().p("AgDAnQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIAAgCIAAgIIgBgIIgBgUIgBgXIgFABQgMAAgHgCQgEgBAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAIABIAJAAIAKAAIAIAAIANABIAMAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgMgBIgNgBIgDAAIABAYIABAYIABAFIAAAGIgBAHQgCADgDAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_54.setTransform(83.7,10.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00FF00").s().p("AgWAhQgHgIAAgMQAAgRAPgTQANgQAMAAIAFAAIADABQACgDADAAQAEAAABAFIABALIgBAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgCgEIgCgEIgGgBQgIAAgIAMQgNAQAAANQAAAHAEAFQAFAGAGAAQAFAAAFgDIAKgHIAFgCQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgOANgOAAQgLAAgIgJg");
	this.shape_55.setTransform(76.3,10.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00FF00").s().p("AgXApQgFgFAAgRIAAgHIABgJIgBgDIABgCIABgXIAAgGIgBgGQAAgGAGAAIAEABIAMgCIAJgBQAOAAAHADQAEACAAADIgBAEIgEACIgCAAQgJgDgJAAIgIABIgLACIAAAGIgBAUIAXgCIAMgBQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAEgFAAIgNABIgYADIAAAHIAAAGQAAAMACACQABACAHAAIAJgBIAKAAIADAAIAEAAQAFAAAAAFQAAAFgEABQgFABgQAAQgRAAgFgFg");
	this.shape_56.setTransform(69.6,10.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00FF00").s().p("AgbApIgBgEIgBgNIAAgNIABgNIABgPIAAgIIgBgIQAAgDACgDQACgDAEABIAMABQAIABAEACQAWAMAAARQAAAIgIAFQgGAFgJADQARAJAIAKQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgEACIgEgCQgRgRgVgHIAAALIABALIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgQgXIAAAGIgBALIgBAKIADAAIACAAQANAAAGgEIAGgDQADgDAAgCQAAgIgJgGQgGgGgJgBIgIgBg");
	this.shape_57.setTransform(62.7,10.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FF00").s().p("AgXAoQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAMgBIAAgKIAAgJIAAgJIABgeIgHAAIgHAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgFAEAAIARAAQAKAAAPACQAGABAAAFQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAIgEABIgJgBIgJAAIgBAcIAAAJIABAJIgBAKIARgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgJAAIgJAAIgJABIgLABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAg");
	this.shape_58.setTransform(56.1,10.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00FF00").s().p("AgQArQgGgCgDgBIgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIABgRIAAgRIAAgSIAAgTQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQADgDACAAIAIAEIALAEQAOAGAKALQANAMAAAOQAAAKgFAIQgEAIgHAGQgJAFgOAAIgJgBgAgTgOIAAAOIgBAeIABABQAEACAIAAQALAAAFgDQAGgEADgFQADgHAAgHQAAgNgQgLQgFgEgUgIg");
	this.shape_59.setTransform(49.3,10.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FF00").s().p("AgjAqIgCgEIABgHIAAgHIAAgJIAAgKIAAgKIAAgLIAAgKIgBgKQAAgCACgDQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQADAAAEAHQANAUAKANQANAPAPAOIAAgHIAAgHQAAgWgCgOIgCgGIgBgFQAAgHAGAAQAJAAAAAjIAAARIAAASIgBAIQgBAGgFAAQgDAAgEgEQgVgVgcgmIAAAMIAAAMIAAANIAAAOQAAAOgFAAQgDAAgCgCg");
	this.shape_60.setTransform(40.8,10.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00FF00").s().p("AgXAoQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAMgBIAAgKIAAgJIAAgJIABgeIgHAAIgHAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgFAEAAIARAAQAJAAAQACQAFABABAFQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgDABIgJgBIgIAAIgBAcIAAAJIAAAJIAAAKIARgBQAAAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAIgJAAIgJAAIgKABIgLABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAg");
	this.shape_61.setTransform(33.4,10.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0000FF").s().p("AANAaIgBgMIgBgMIAAgEIAAgFQAAgLgEAAQgGAAgEAHQgFAGgDAJIgBAGIAAAFIAAAFIABAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgEIgBgFIABgPIABgPIAAgFIAAgFQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAFAAAAAHIAAAGQAKgMAIAAQAJAAADAHQACAFABAKIAAAGIgBAEIACALIABAMQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_62.setTransform(24.4,11.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0000FF").s().p("AATAcIgEgRIgOADIgNACIgKAVQgBADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAgDAIgRIgBgDQAAgEAGgBIAPgaQAMgVADABQAEAAACAFIADASIAIAlIADAJIACAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAABgBAAQgFAAgDgNgAgGAEIATgEIgFgUg");
	this.shape_63.setTransform(17.3,10.6);

	this.instance = new lib.theBoysGiveTheGirlsSome();
	this.instance.parent = this;
	this.instance.setTransform(279.3,176.1,1,1,0,0,0,258.4,128.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(251));

	// Layer 5
	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(251));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.4,534,399.9);
// library properties:
lib.properties = {
	id: '5FFD989DE7241140896C7D754FA2D3B8',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmInd.mp3", id:"bgmInd"},
		{src:"sounds/boysbringgirlspizza.mp3", id:"boysbringgirlspizza"},
		{src:"sounds/flickering.mp3", id:"flickering"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/quick_pad_chord.mp3", id:"quick_pad_chord"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/word_appears.mp3", id:"word_appears"},
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
an.compositions['5FFD989DE7241140896C7D754FA2D3B8'] = {
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