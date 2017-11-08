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


(lib.letterA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgJBZQgIgBgFgGQgFgFAAgUQgNgGgKgFQgJgFgFgGQgXgaACgYQACgbAcgZQAbgXAjADQAjACAZAbQAJAKAHAUQAHAWgJAHQgEAEgFAAIgMAIIgQANQgVATgGALIgHAPIgHANQgEAFgHAAIgBAAgAgdgjQgOANgDALQgCALAJAKQAGAHAHAEQAIAEAJACQAWgbANgKIAJgHIALgHIgCgGIgCgDQgNgPgWAAIgDAAQgSAAgPANg");
	this.shape.setTransform(17.6,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-10,47.9,46);


(lib.girlswait = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAIgIQgJgRgJASQgKATARAEQADABADAAQAIAAADgH");
	this.shape.setTransform(31.8,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AFOhzQANgFAPgCQAOgCAKAEQgUAFgRAKQgIAFgIADQAGABAPgBQAZgDAWAKIAAABIAAAAQgXABgJgBQgJgCgGAGQAQAHAKAOQAIAPAFAQQAEAQADARQADARgBAQQgCAQgLAPQgKANgIAQQgHAQgIAQQgHAPgHARQgDAFgCAGQgFAJgDALQgHAPgBASQgBATAFARQACADAAAEQgMAAgIgHQgHgFgGgHQgDgEgCgEQgKgUgFgWQgDgNAAgOQgBgGAAgGQAAgSADgRQACgKAHgMQgLgEgJgDAFChkQAAgcAOgNQAHgHAKgDQgJAQgIASQgBABgBABQgCADgFAPQgDgBgCgCgAFFBSQAHABAHgGQANgLADgSQALgDAMgEQgFgOABgSQgBgQACgQQACgRgEgOQAAgBAAgBQgMgJgPgEQgQgFgRgFQgQgGgNAQQgKANgLAPQgLAOgGAPQgGAOABATQABARAHAQQAGARAAASQAAATgEARQgEAQgFARQgBAFgCAFQgEAMgEALQgHAQgIANQgCAEgDADQgHAJgKAJQgOALgPAGQgPAFgQADQAHgHADgHQAHgPAFgQQAEgPAEgQQABgBAAgBQAEgQAEgSQAAgDABgDQADgOADgNQAEgSgGgPQgDgIgEgJQgDgGgDgHQgHgLAEgPQgJgHgMAIQgOAKgKANQgKAOgFAQQgDAIgCAJQgMAIgHATQgHARgIAQQgIAQgDARQgEARgEAQQgCAMABAKQAAAAgBAAQgOAHgBATQgCARgCARQgCARgDASQgEARgEASQgEARgFAPQgGARgPAIQgOAHgRABQgTABgNAAQgNgGgKAUQgDAEgCAGQAWgGAZgCQALgBAMAAQAPgBAPgBQANAAAJABQAQgJAEgJQAEgGADgGQAHAJANANQALALARAEQARAFARgBQASgCARgBQASgBARgCQASAAARgBQARgBASACQAJACAKgBQAAAAABAAQAQgBAPABQASACAQAEQAPAEAPgBQARgBAQgBQATAAALgKQAMgMALgIQARgMgGgUQgEgNgIgJQAAgBABgBQAMgKAPgJQAOgIAGgQQAHgSgKgQQgKgPgPgIQgPgIgSACQgSABgSACQgSADgSgBQACgEADgDQgBAAgBgBQgFgIgDgLQgDgLgEgNQgEgNgGgOQgKgZgGgUAE1gWQAHgSAVAAAFUgFQgNAFgRACQABgDABgEQAIgTATAKQABAEAAAFgAFOAJQACgDACgEQACgDAAgEQADgBAEgCQAFgDAEgFAFihVQgJAAgKAAAE2ACQgDAMAFANQABAFAFgEQACgCACgCQAHgHAFgIQgXADALAMAEaBjQAFACAGACQAGACAGgCQAPgGAFgPQgIAAgHgGQgKgJgDgIAE8EiQANgDAOgCQARgBASgBAE8EiQgDAAgDABQgSAEgPAGQgQAHgQAIQgPAIgPAIQgJAFgJAFQAAgKAEgJQAGgQALgNQALgNAOgJQALgHAJgXQgMgCgMgDQgRgFgLgFAFaF0QgOAAgWAAQgBAAgBABQgLAIgHAMQgGAKgGAKQgHANACAQQABAPAGAOQgBAAAAAAAF3EjQgQAVgKAaQgHAPAEATQAHAAAGAAQAHAAAIAAAE2F0QAEgDADgCQgKgCgMgEQgRgFgSAAQgRgBgSAAQgRAAgRAAAHMGKQgCgCgBgBQgCgBgBgCQgNgJgRgCQgQgBgSgCQgIgBgIgBQAGgOARgJQALgGALgEAgPlfQAGADADgHQAKADgCgTQAAgHgFgFQgFgEgCgJQgCgMgFgLQgEgHgBgJQgDgXgQAJQgKgYgcAGQgEABgCACQgJgVgUAOQgLAGgHgIQgEgEgFgBQgagFgQAVQgGgRgWAKQgUAKgMAQQgRgJgSAZQgDAEgBADQgDACgEAGQgOATALAPQgFgDgHAPQgMAWAXAEQgKAIAGAUQADAOAKgDQgKATAWgCQAEAPAPgGQAGAMAOgJIAAgBQADgBAAgEQADAPANgKQADgCADgDQAGAKAJgKQACgDADgNAi3lAQAHgFAHgLQAGgJAAgMQADAIALgOQADgDADABQAWAAANgSQATAAAOgMQAKAOASgHQADgBAFAIQADAEADADQADAEADAFQAEAHAEAEQACACACABAgqlIQACgSAMALQACACADAEAgjlDQgOABAMAWQACgBABgBQgFgHAEgOQADgBAEABQABAOgHAHAgZkiQAMgPABgSQACgSgFgKAhAlLQgIgUgRAPQgDADgBAEAhPlBQgDABgCADQgCAFACALQgDgCgCgDQgOgPAYAAQAFAAAHABQgCAHgCANQgBALgMgMAiCjbQAAAAABAAQARADASgGQAPgEANgKQAOgLACgPQANgBAKgFQAMgGgHgMQgCgDgBgBQgEgFgMAAAiyBCQAHgDgCgMQgCgTAVgCQAOgBAQgEQASgFAOgJQAOgJAOgJQAOgKAOgNQANgNABgRQAAgQgLgNQgLgNgKgOQgKgOgJgJQgCgDgCgCQgBgFgBgJQgDgQgJgNQgIgMgPgDQgBAAgBAAQgIgBgCAAQgGgGACgKIAAAAQgMgCgIgGACiAkQAAgFACgFQAIgVABgRQABgSALgOQAKgOAMgNQAMgNAOgKQAOgJAQgFQARgFARAEQAOADALAGAjpkQQAAgBAAAAQAAAAAAAAQABADABACAjljzQAHACAIABAjpkQQAAABACADQAEAOgCALQgJgBgJgBQgRgCgTAAQgSABgOAJQgDACgDACQgTAAgRABQgSACgPAFQgPAGgNAIQgBAAgBABQAAAAAAAAQgFACgBAEAh1kRQAQAGAQAFQgEAUgRgCQgSgCgHgRQgFgJAIgGQAAABALAEgAlSieQAHgCAEgDAlkiaQAHgBAIgDQACAAABAAQAMACATAGQAQAFARACQASABARACQASADAQACQAIAAAIACQAIABAJADQARAEANgNQAHAEAKAHQAOALAFAQQAFARgEARQgEANgKAIQgOAKgOAHQgBAAgBABQgFACgEABQgKADgMgBQgSAAgPgGQgPgGgPgIQgPgKgQgGQgQgHgNgIQgOgIgNgLQgHgGgCgEQAAgDAAgDQAAgIgDgHQgGgTgIgMQgJACgIACQgQACgTABQgNABgFAAQgCABAAAAQgEAFAHALQAIAPAMAPQAKAOAGAOIABAAIAAAAQgDABgJAGAmijTQgBAAgBAAQgRgBgPAEQgQAFgRAGQgRAHgFASQgGASAJAOQAIAOAIAQQAHAOALAOQAJANALAMQAMANAIAMQAAACACACQgGAEgEAFQgaAHgKAMQgRATAbgHQAHgCAHgDQAAAHAGAFQgNARAEASQADASAHARQAHARAIAQQAIARAHAQQAEALAXAtQADgLADgDQACADACADQAHAQAMAOQABACABABQgKAJgKAMQgGAGgCAHQgFARgBARQgCASgFAQQgFAPgJAPQgIAPgKAOQgKAOgJAPQgJANgCASQgCATAZgFQARgDATAAQASgBAQABQASABASABQASABARAEQATADAPgHQABAAAAgBQAMAAALABQASACASABQARABATAAQATABAQgEQASgEADgSQACgPgKgIQgNgKgTAFQgOAEgPAHQgPAHgSgDQgTgDAEgPQADgQALgNQALgNAIgOQAJgQAKgPQAJgPAJgQQAIgOALgOQAKgNABgRQAAgUgFgOQgHgPgGgNQgFgJgCABQgDgHgBgIQgHgCgIgBQgRgCgRADQgQADgPAFQgMAEgLADIAAAAQgKgLgIgLQgKgPgJgPQgHgLAAABAm2gTQgHAIgDAKQgCAEAAAEAmmAWQgBgBgBgBQgLgQAHgRQAEgMABgBAlghSQADgDADgFQAEgGADgGAlghSQAKACAGAMQAGANABAUQAAAOgHAGQgQgOgJgMQgFgHgDgHQgNAUgJATQgEAJABAHQABAEACAEQAIARgGARQgMgFgGgJQgEgEgBgFQgGgOAFgMQADgLACgMAmEhHQANgGANgEQAGgBAEAAAmKAAQADgCALAGQAPAKANAIQAOAKAOAIQAOAJARAEQARAFAQADQAAAAABAAQASAEAQgFQALgCARgOQAAAFAAAEQAAARAJANQAFAIAGAHQAGAGAGAGQANAMAKANQALANgEARQgJgEgKgDAi9iFQgDgGgBgGAiOiKQgFgDgEgDAiegYQgLAFgIAMQgLAMgFAPQgEALAAANAlBjpQgGAEgFAGAiyBCQgBAAAAABQgDABgEgBAixBiQAOgHABgHQABgYgRAGAkCA1QACAAAGgCQgGgGgBADQgDAEACABgAkHCuQgCAAgCgBIACADIAVAVQAMALAOAKQAIAGACAJQgSACgJAQQgJAOgJAOQgKANAAATQAAARgBATQAAARgFARQgFAQgLAMQgNAMgFAMQARgEASAGQAOAGgBAVQAAAGgEACAkBCrQgCAAgDACQAAABgBAAQABAAABABQAIACAGAFAkQCsQgEAAgDgBQgRgDgRAFQgUAGgVAFQgQADgKAKAkQCsQAIALABAJQABAKABAKQAAASgKANQgJAMgKAPQAAAAgBABQgCAEgDAEQgBADgCACQgIANgHAPQgFAOgIAPQgGAOgIANQgJAPgLAOQgKAOgCARQgCAKAIADQAQAHAQgFQAPgFARgFAkLCtQgDAAgCgBAm8ATQABABABABQANAJAHgIQAFAGAKAAACrBLQgBAGgBAEQgDAQgFAQQgFAMgJAKQgCADgDADQgDADgFAEQgBABgCABQgDAKgDAJQgCAEgBAFQgGAQgIAQQgKARgGANQgBgMAAgPAB9CtIAVAOQADACAPAFACTCLQAQAKALADAEHDyQAFABAFABQAJABAKAAQAGALAAABQAFAMANAVAEmD1QgBAAgBAAADvCoQAUAEAMgEABhBrQgDAHgBAIQgBAFABAFABcD0QAAAdAAAOQAAATgEARQgDARgGARQgEALgFAKQgDAFgDAGQgJAPgHAOQgFAIgEAIQAAAAgBABADFFWQgFACgDACQgBABgBABQgLAJgLAHQgOAJgPAFQgQAFgRgCQgSgCgPgB");
	this.shape_1.setTransform(51.1,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("Ah7DEQAHgOAFgRIAIgeIABgCIAIgiIABgGIAGgcQAEgRgGgPIgHgRIgGgNQgGgKADgPIACgKQAIgVABgSQABgSALgOQAKgOAMgNQAMgNAOgKQAOgKAQgEQAQgFARAEQAOADALAGIAFADQAFgPACgDQgCADgFAPIgFgDQAAgcAOgNQAHgHAKgDIgRAhIgCADQANgGAPgCQAOgBAKAEQgTAEgSALIgQAIQAGABAPgCQAZgCAWAKIAAAAQgXACgJgCQgJgBgGAFIgTABIATgBQARAHAJAPQAIAOAFARQAFAPACASQADASgBAQQgBAQgMANQgKAOgIAQIgPAfIgOAgIgFALIgIAUQgGAQgCASQgBATAFAQIACAHQgLAAgJgGQgHgFgGgHIgFgIQgKgUgFgWQgCgNgBgOIgBgMQAAgTADgQQACgLAHgLIALAEQAGACAGgCQAPgGAFgPQAHAAAHgGQANgKADgRIAXgHQgEgOAAgSQAAgRABgRQADgQgFgPIAAgCQgMgIgPgEIghgLQgQgGgNARIgUAbQgLAPgGAOQgGAQABASQACASAGAQQAHAQgBASQAAASgEARIgJAiIgDAKIgIAXQgHAQgIANIgFAGQgHAKgKAIQgNALgQAGQgPAGgQADQAHgHADgIgABCgxQgFAIgHAHQgLgNAXgCg");
	this.shape_2.setTransform(77.9,53.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("ACSEWQgQgEgSgCQgQgBgPABIAAAAQgGgOgBgPQgDgQAIgNIAMgUQAHgMALgIIACgBIAkAAIAMAAIAPAAIgPAAIgMAAQgEgTAHgPQAKgaAQgVQASABARgDIAkgDQATgCAOAIQAQAIAJAPQALAQgHASQgGAQgOAIQgPAJgMAKIgCACIgCgDIgEgDQgMgJgRgCIgigDIgRgCQAHgOARgJQAKgGAMgEQgMAEgKAGQgRAJgHAOIARACIAiADQARACAMAJIAEADIACADQAJAJAEANQAGAUgRAMQgLAIgMAMQgLAKgTAAIghACIgGAAQgMAAgMgDgAkyEKQALgTAMAFIAhgBQARgBAOgHQAPgIAHgRQAFgPAEgRIAHgjQAEgRACgSIAEgiQABgTAOgHIABAAQgBgKACgMIAIghQADgQAIgQIAOghQAIgTALgIIAGgRQAFgQAKgOQAKgNANgKQANgIAIAHQgDAPAGALIAHANIgCAKQgDAQgGAQQgEAMgJAKQAJgKAEgMQAGgQADgQIACgKIAHARQAFAPgDASIgGAbQgLgDgQgKIgFAGIgIAHIgDACIgHATIgDAJQgFAQgIAPQgLARgGANIAAgbIAAAbIABArQAAATgEARQgEASgGAQIgIAVIgGALIgRAdIgIAQIgBABIgHAMQgEAJgQAJIgXgBIgeACIgXABQgZACgWAGIAEgKgAhqhCIAAgDIABgHIADgPIgDAPIgBAHIAAADgAhgC2IgggDIAIgVQAGgQAEgSQAEgRAAgTIgBgrQAGgNALgRQAIgPAFgQIADgJIAWAOIASAHIgIAeQgFAQgHAPQgEAIgHAGQARgDAPgFQAPgGAOgLQAJgJAHgJQALAFARAFIAYAFQgJAXgLAHQgOAJgLANQgLAOgGAPQgDAJgBAKIgIAEIgBACQgLAJgLAHQgOAJgPAFQgLAEgMAAIgLgBgABjA6IgHgMIADAAQAFAHAIAFQAIAHAMAAIgCgHQgGgRACgTQABgSAGgOIAIgUIARAsIAKAbIAHAYQADALAFAIQgSABgRABIgcAFQgMgVgFgMgAhrAtIAAAAgAAogeIADgKIAJghQAEgRAAgTQAAgSgGgRQgHgQgBgRQgCgTAHgPQAGgPALgOIAVgcQAMgQARAGIAhAKQAOAEANAJIAAACQAEAOgCARQgCAQAAARQAAASAFAOIgXAHQgEASgMALQgHAGgHgBQgIAAgHgGQgKgJgDgIQADAIAKAJQAHAGAIAAQgFAPgQAGQgGACgGgCIgLgEIgUgHIAUAHQgGAMgCAKQgDARAAASIAAAMQgFACgHAAQgIAAgLgCgABvjEQgDAMAEANQACAFAEgEIAFgEQAGgHAGgIIAEgHIACgIIAAgCIgBgHIgCgBQgFgCgEgBIgBAAIAAAAQgJABgGALIAAABIAAAAIgCAIIACgIIAAAAIAAgBQAGgLAJgBIAAAAIABAAQAEABAFACIACABIABAHIAAACQgNAGgRACgACTjPIgGADIAGgDQAGgDAEgFQgEAFgGADgABtjdIABgBQAHgQATgBIAAAAIABAAIgBAAIAAAAQgTABgHAQIgBABgABShjIAAAAgAB+h0IAAAAg");
	this.shape_3.setTransform(71,67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADQCuQgEgNADgMQARgCANgFIgCAHIgEAIQgXACALAMIgFAEIgDACQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBgAjRhhQgSgCgIgQQgEgJAIgHQAAABALAFIAgALQgEARgOAAIgDAAgAiLiwQgDAOAFAHIgDADQgMgWANgCgAjAieQgOgQAXABQgCAAgCAEQgCAEABAMIgEgFg");
	this.shape_4.setTransform(61.4,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhjBiQgQAHgEgPQgVACAKgUQgKAEgEgOQgFgUAJgJQgWgDALgXQAIgNAEACQgKgPANgTQAEgFADgCIAFgHQARgZARAIQAMgPAVgKQAWgKAFARQARgVAYAFQAGABADADQAIAJAKgHQAUgNAKAUQABgBAFgBQAbgGALAXQAQgIADAWQAAAKAFAHQAFALACAMQABAJAFAEQAGAFABAGQABATgLgEQgDAHgGgDIgEgCQgDgEgFgIIgGgIIgGgHQgFgHgDABQgSAHgKgOQgNAMgUgBQgNASgWgBQgDAAgCADQgLAOgDgIQAAAMgGAJQgHAKgHAFQgKgQgJARQgKAUARAEIAHABQgDAOgCACQgJALgGgKIgGAEQgNAKgDgOQAAADgCACIgBgBIAAABQgGAEgEAAQgGAAgDgHgABEBJQgCgMACgEQACgEADAAIAMABIgDATQgBAGgEAAQgDAAgGgGgAB1AyIAIABQAAAOgGAGQgGgHAEgOg");
	this.shape_5.setTransform(35.7,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9966").s().p("AghGzQgQgEgSgBIgkgCIgjgBQgTAAgRAEQgYAFACgTQACgSAIgNIAUgdQAKgPAIgPQAIgOAFgPQAFgQACgSQACgRAEgRQADgIAFgFQALgNAJgIIgCgDQgLgPgIgPIgDgGQAKgKAPgDQAVgFAUgGQARgFARADIAHABQAIALABAJIACATQAAASgJANIgTAbIgBACIgFAIIgEAFQgIANgHAPIgMAdIgPAbQgIAOgLAPQgKAOgDARQgCAKAIADQAQAHAQgGIAggJIACAAIACgBIAAAAIAKgBIAAAAIABAAQAKABAJADIABAAQANAFAAASIgBADQAAAGgDADIgCABQgJAFgMAAIgMgBgABgGzIgkgCIgkgCIgWgBQADgDAAgGIABgDQAAgSgNgFIgBAAQgJgDgKgBIgBAAIAAAAIgKABIAAAAIgCABIgCAAQAFgNANgLQALgMAFgQQAFgRAAgRIABgkQABgTAIgNIASgcQAKgQASgCQgDgKgHgFQgOgKgNgLIgUgVIACgCIAFgDIAXgHQAPgFARgDQARgDAQACIAPADQACAIACAGQACAAAFAJQAHANAGAPQAGAOgBATQgBASgKANQgKANgJAPIgSAeIgSAfQgIAPgMANQgKANgEAQQgDAPASADQASADAPgHQAPgHAPgEQASgGANALQAKAIgCAPQgDARgRAFQgPADgRAAIgEAAgAAACGQAHACAHAFQgHgFgHgCIgCAAIACAAgABIArQgIgNgBgRIAAgJQgRANgLADQgQAFgSgEIAAAAIghgIQgRgFgOgIIgcgRIgcgSQgLgHgDADIAAgDQAAgHAEgIQAIgTANgTIAJANQAJAMAPAPQAHgGAAgMIAAgCQAAgUgHgNQgGgMgJgCIAGgIIAGgMQADAEAGAGQANALAOAIQANAIAQAHQAQAGAOAJQAPAJAPAGQAQAGASAAQAMAAAJgCIAJgDIACgBQAPgHANgKQALgIADgNQAFgRgGgRQgFgQgOgLIgRgMIgJgFIAJAFQgNAOgRgFIgRgDQgDgGAAgGQAAAGADAGIgQgDIgigEIghgEQgSgBgQgFQgTgHgLgCQAGgBAFgDQgFADgGABIgDABIgQAEIgRAEQgQACgTABIgSABIgCABQgDAFAGAKQAJAQALAOQAKAPAGAOIABAAIAAAAIAagKQAGgCAFABQAJACAGAMQAHANAAAUIAAACQAAAMgHAGQgPgPgJgMIgJgNQgNATgIATQgEAIAAAHIAAADIADAIQAIARgGAQQgLgFgHgIIgFgJQgDgIAAgHQAAgHACgFQAEgMABgMQgBAMgEAMQgCAFAAAHQAAAHADAIIAFAJQgKgBgFgFIgCgDQgGgJAAgLQAAgGACgHQAEgMACgBQgCABgEAMQgCAHAAAGQAAALAGAJIACADQgGAIgNgJIgDgCQgGgFAAgHIAAgBQAAgEACgEQAEgKAGgIQgGAIgEAKQgCAEAAAEIAAABQgGADgIABQgbAHARgTQAKgMAagHIAKgKIgCgDQgIgMgMgNQgLgMgJgNQgLgOgHgPIgPgdQgKgPAGgRQAGgSARgHQAQgGARgFQAOgFARABIABACIABgBQAOgIAOgGQAPgFASgCQASgCATABIAFgEQAOgKASAAQATAAARACIARACQACgMgEgNIgBgFQACgCAAgDQADAPANgLIAGgEQAGAKAJgLQACgCADgNIgHgBQgRgFAKgUQAJgRAKARQAHgGAHgKQAGgJAAgMQAEAIALgOQACgDADAAQAXABAMgSQAUAAANgMQAKAOASgHQADgBAFAIIAGAHIAGAJQAFAHADAEIAEADQAFAJgBATQgCASgMAOIADAEQAHAMgMAHQgKAFgNABQgBAPgOAKQgNALgQAEQgRAGgSgDIgBAAQgMgDgIgFQAIAFAMADIAAAAQgBAKAFAGIALABIABAAQAQADAHALQAJANADARIADAOIAEAEQAJAKAJANIAVAcQAMANgBAPQgBASgNAMQgNANgPALIgbATQgPAJgSAEQgPAFgPABQgUACACASQABAMgHADQARgHgBAZQAAAHgOAHIgMgPgABMAbIADAAIABAAIABgBIABAAIgBAAIgBABIgBAAIgDAAIAAAAIgCAAIACAAIAAAAgAADAIQgBABAAABQAAABAAAAQAAABAAAAQAAAAAAABQACAAAGgDQgDgDgCAAIgCABgABTgvQgLANgEAOQgEAMgBAMQABgMAEgMQAEgOALgNQAJgMAKgFQgKAFgJAMgAiLhpIAMgGIgMAGgAifj6QgEACgCAEQACgEAEgCIABAAIgBAAgAhHkIIAMgJIgMAJgAAukYIgPgDIAPADgACBkvQAHAQASADQASABADgTIgfgLQgMgEABgCQgIAHAEAJgADrlLQgDgEgNAAQANAAADAEgABIlOQAHgBAEgGQgEAGgHABgACrlaIAFAFQAMAMACgLIADgUIgMgBIgBAAQgWAAANAPgADhlsQgOACAMAWIAEgDQAHgGgBgOIgGgBIgCAAgADblwQABgLAEAAIABAAIABAAQACAAAEAEIAFAGIgFgGQgEgEgCAAIgBAAIgBAAQgEAAgBALgACrl5QgDAEAAAEQAAgEADgEQAHgGAGAAIAAAAIABAAQAGAAAEAJIABABIAAACIAAgCIgBgBQgEgJgGAAIgBAAIAAAAQgGAAgHAGIAAAAgAihgRIAAAAgAi9ggIAAAAgAB2izIAAAAgACCkDIAAAAg");
	this.shape_6.setTransform(24.9,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("Ah6ClQgRgEgLgMQgNgNgHgJIABgBIAJgQIAQgdIAGgLIAhAEQARACAQgGQAPgFAOgJQALgGALgKIACgCIAIgEIARgJIAegQIAggOQAPgHASgEIAGgBIAbgEQARgCASAAIACABIgFAGQgPAUgLAbQgGAPADASIgkAAIAHgFIgWgGIgHgCQgNgDgOAAIgBAAIAAAAIgjAAIghAAIAhAAIAjAAIAAAAIABAAQAOAAANADIAHACIAWAGIgHAFIgCACQgLAHgHANIgMAUQgHAMACAQQACAPAFAOIgBABQgKAAgJgBQgSgCgRABIgiABIgjACIgjADIgGAAQgOAAgOgDgABTg+IgTgBIgKgBIgYgGQgRgFgLgFIAFgGQAIgOAHgPIAIgYQAUAEAMgDQABANACAOQAFAWAKAUIAFAHIgCAAgAg+h4IgVgNIAGgTIADgDIAIgHIAFgFQAQAKALADIgBAGIgIAhIgBADIgSgIg");
	this.shape_7.setTransform(72,78.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AiGCBIgOggIgPgiQgHgRgDgSQgEgSANgQIACACQANAIAHgHQAEAFAKAAQAHAJAMAFQAGgQgIgQIgDgJQADgDAKAHIAdATIAcARQAOAIARAFIAgAHIABAAQARAEAQgEQALgDASgOIAAAJQAAARAJANIALAPIAMAMQAMAMALANQALANgEARIgTgGIgPgEQgRgCgRADQgRAEgOAEIgXAHIgBAAQgJgKgIgMIgSgeIgBAAIAAgBIgGgJIAAAAIAAAAIAAAAIAAAAIAGAJIAAABIABAAIASAeQAIAMAJAKIgEACIgBABIgFgBIgEgBIgHgBQgRgDgRAFQgUAGgUAFQgQADgKAKQgDADgDALIgcg4gABjgvQgSgBgQgGQgOgGgPgIQgPgKgQgGQgPgGgNgJQgOgIgNgLQgHgFgCgFIAAgFQgBgJgCgHQgGgTgJgLIAQgFIADAAQAMACATAGQAPAFARACIAjADIAiAFIAPACIASAEQARAEAMgNIARAMQAPAKAEAQQAGARgFASQgDAMgLAIQgNAKgOAHIgDABIgIADQgJADgLAAIgCAAg");
	this.shape_8.setTransform(23.1,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,104.2,98);


(lib.girlsgive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEbj0QAHgHAJgHQALgKAUgCQARgBASgBQAUgCAQAEQgLgIALgUQAJgOANgHQgLASgBAVQAAAFAAAEQAMgQAXgEQAFgBAGABQgTAMgQAPQgDACgDACQAVgIAXgCQAUgBAPAKQgXgCgUAGQgMAEgKACQAIAHAIAIQAJAJAGAIQAFAGAEAGQAGAKAEAMQACALACAIQACAGAAAHQAAAMgGAJQgCAFgEAHQgDAEgCAFQgCAFgCAGQgCAGgCAGQgCAPgCAPQgCAPgCAPQAAABAAAAQgCAPACANQAAACABACQACAEABADQACAFACAEQAEAHAEAGQAEAGACAFQgQABgPgGQgKgEgJgFQACANADAIQAFARAHAPQAIAQAIAQQAIAOADARQAEARAEAPQACAHAEAFAEbj0QgkgFgPAAQgLgBgLADQgBAAgCAAQgEACgDABQgKAEgJAFQgGAEgGAEQgOALgNAJQgLAIgLAGQgDACgEACQgQAJgIAQQgJAQgHAPQgGALgDALQgCAGAAAGQgDANgCANQgWANgGAMQgIAQgBARQgCASAGARQAAAAAAABQAFAPANALQAOALAOALQANAJANALQAMALAOAIQAEADADAAQACAJAEAIQgSgCgRgCQgRgDgTACQgRABgTAIQgBgBAAgBQgFgGgHgFQAEgNgGgLQgHgPgQgFQgPgEgQgFQgDAAgCgBQgNgDgNgCQgTgCgSgDQgRgCgSAAQgMABgKABQgCgRAAgUQgBgSgCgQQgDgSgDgOQgEgRgEgQIAAgSQABgMAAgNQAAgCABgCQAAgQgEgPQgDgQgHgQQgHgQgGgRQAMgDALgGQAHgEANgQQACAAACgBQAGgEABgFQABgFgCgDQgBgCAMgTQAIgNACgLQABgCAAgCQACgEAAABQAAAAAAgBQAAgEgEgUQADgBAFgCQgFAQARgNQAAgRAEgIQAEgLgIgLQgCgTgIgIQgIgUgRgCQgKgVgQALQgQgbgeAPQgLgagUAUQgCgJgOgGQgGgCgHABQgOAEgHALQgNgLgTAMQgDACABAFQgOgIgNAIQgKAHAAANQgSgMgTAZQgHAJAAADQgLgCgIAMQgMAUAPANQgRAXAcABQgNAFADATQAAACABABQABAEACgBQgRAHALAPQADAGAHABQAJABAHALQAFAJAIgFQAEgBACgDQgEAIAOAGQAFACADgGQAIASALgGQACAJgBAHQgcACgQgEQgQgEgRAAQgPAAgKAHQgDACgDADQgMANgNALQgLALgIAPQgIAOgDARQgEARABASQABASAEARQAEANAGAKQgEgBgHAOQgHARABASQAAARADARQADARACASQACASACARQABASAFAQQAFARgJAOQgKAPgPAEQgRAFgOAGQgQAHgPAGQAOAMASgCQAHgBAHgCQgKAGgLAHQAPAGATgCQASgBAOgIQAOgIAQgHQANgGAQAEQARAEARADQARACAQABQASACAKgIQAAAAABAAQAAAAAAgBQgCgWgVADQgMABgMABQgFABgFAAQgGABgGAAAFtivQAGgUAUAGQADABAEACAGahIQADAAADgBQAFAAAFgCQAfgsABgTQABgTgFgGQgFgGAEgLQAEgMgHgMQgHgNgKgKQgOgNgSgIQgQgBgMAOQgMANgLAOQgLAOgIAPQgFAJgDAMQgCAEgBAFQgBAIAAAHQAAABAAAHQABAGACALQACAKgBACQgBACADAKQAAACABADQAEAKABAKQAAAEAAAEQAAADAAADQgBAJgCAJQgDAIgDAIQgIAOgKAPQgCACgBACIAAAAQgJAMgPAGQgQAGgRAEQgEAAgDABQgHABgGABQAJgQAHgPQAAgBAAAAQAIgPAIgOQAGgJADgKQACgHABgGQADgRgEgRQgDgRgFgRQgBgBAAgBQgFgQgEgPQgGgRABgTQACgSAJgOQAJgNALgNQAEgEAEgEAFphYQgFgFgEgFQAAAAgBAAQAAgBgBAAQgGgHgKgZQgLgZAAgCAF2ikQgTAFALALQAEADAEgFQALgMgLgCgADXgXQACAHACAGQAEAOAFARIAAAAQABAFABAEQgBABgCAAQgCgBgBgCQgEgEgFgDQgCgCgDgDQgFgEgHgFQgOgJgNgLQgDABgDAAQgSABgSgCQgRgCgRgDQgRgDgMgNQgMgMACgUQABgEAAgDAGpAfQgIgDgHgEQgDgCgDgBQgRgLgFgRQgEgLADgKQACgHAEgGQAIgMAKgKQADgCACgHQgPABgNgFQgPgEgFgHQgBAAAAgBAGXhnQgXAAAMAMQAagBgPgLgAIrDMQABABAAACQgOAEgRAAQgJAAgIABQgPACgSgBQgRgBgQgGQgJgFgEgKQgFgNgFgQQgEgRgHgQQgFgNgFgPQgHgSgKgRQgIgOgHgQQgEgIgDgHQgCgGgCgHQgFgLgEgOQgCgGgJg5QAAgDgBgDQgCAAgCABQgDAAgCAAAFOhWQAKgBARgBAGni4QgBgGANgBQAFAAACAGAGsioQgSAEALALQAXgNgQgCgAGWiYQAEAMARAKQgPAUgRgGAIrDMQgCgHgHgEQgFgDgHAAQgJgBgIADQgFACgEABAHdCzQAXAEAKgIQANgMATAJQAPAIAPAGQAJADAJADQAJACgFAHQgDADgGABQgPABgPgCAFAByQAAADABADQABAMgEAAAEvAoQADAQAEAQQADAMAEAMQACAJABAJQAIASAEAMQAHAQAJAQQAHAOAJAQQABACACADQAUAAAHgPQAIgPgCgTQgBgSgDgSQgDgRgJgLQgLgMgQgIQgPgIgPgJQgPgLgJgKIAAAAQgBgHAAgGQgBgDAAgDADtAyQABAQAFATQAFARAFARQAFANAGANAAfCrQAIAOASADQAQACARABQAQABAQAFQANAEAOACQABABACAAQAHADAGADQAOAIATAAQAGAAAGgBQAMAAAKgCQAQgDALgMQAMgNgDgTQgCgKgBgJQAAgCgBgCQABABABACQAAAAABABQAIAOAMAOQAMANAJAPQAJAOAHAOQABACABABQABACABADQAHANAGANQABADACADQAEAJAFAJQABABAAABQABABABACQAAABABAAQABACABACQAGAKACAJAGSFYQgBgCgBgDQgEgRgCgQQAAgDgBgCQAAgDgBgCQAAgDgBgCQgBgJgDgJQAAgBAAgBQgEgPgFgPQAAgCAAgBQgBgCgBgDQgEgLgFgLAFSFRQABAIAIgHQAEgDAEgDQgHAHgBAHQgBADABAEQAAABABACQABACABACQACAEAEgFQACgCACgBQABgCABgBQACgCABgBQAAABAAACQgBABABACQAAAOASgBQADAAACgBQACAAABgBQAAASAJAQQAOgJgFgUQgCgIgCgIQgBgCAAgBQgBgCAAgDQgBgBAAgBQAAgBAAgBAFiElQgRAYAAAOQAAAEABACQgOADgLAGQgEACgEADQgCABgBABQgBABgBACQgHAHACAIQgLAUANAOQAHAHgBAFQAAAGAAAIQAAABAAABQAAAFACADQAEAEAJABQACAAAEAAQgJAIACAKQABACABACQABAEADAEQAEAFAHADQARAJASgGQAGgCALgGQALACAIgFQAEgDADgEQABgBAAAAIAAAAQAGgJAFgIQACgDACgEQABgBABgCQAAgBAAAAQABgCABgBQABgDACgDQACgGADgGQACgFACgEQAHgOgFgPQgCgGgEgFQgEgGgGgEQgBgBgBgBQgBAAgBgBQgCAAgCgBQgCgCgCgBQgDgBgCgBQgCgCgDgBQgCgBgCgBQgBgBgBgBAGHFvQAAgBAAgBQAAgFAAgEQAAgCAAgBQAAgCAAgDQgBgBAAgBQAAgFAAgEAGNGcQgGgBABAHAFaF8QgEADAJAEAGCHfQgDAAgCgBQgEgBgDgBQgKgEgJgEQgDgBgDgCQgVgKAGgOQAAgCABgCQACgDAAgDQAAgFgEgDQgRgNARgNQgFAAgEgBQgTgEgHgOQgCgDgBgEAFsGdQABABAAAFQgGABgBALQAAACABAEQAEgDACgDQAEgGgEgGAF8G5QABAMAHgEQACgBAEgEAHFABQAAAIAEADAk1keQgEgCgDgFQgEgJAEgJQAIgQALAIQADABADAAQAHABAJgFQADgCABgCQAEgFgGgIQANAGAAgRQATACgDgWQASAQAIgcQAQANARgJQAOAFAFACQAEABADAEQAHAHAFAGQAEAFAGAAAiIk8QABgCAAgCQABgDAAgDIgCAKQgLgVgRAGAjKknQASAAAAgQQgDgBgDAAQgegGAMAXQADAAADAAQAAgIADgEQAEgDAFgCAifk3QAEgBAHACQgBALgJAHIgEgIQAAgGADgFQgMACAFAVQAFgCADgCAinj9QgGABgJgCADXgXQgBgCAAgDQgCgGgCgGQAAgCAAgBQgBgCAAgDQgEgOgEgPQgEgRgEgRQgEgQgBgSQgBgRABgRQABgSAFgRQAFgSAIgPAC1jrQgCAOgDAVQgCARgBARQgCATAAASQAAAJABAJQAAAIABAIQACASAGAQQAFAQAKAOQABACABABQABABAQAEACrgNQANgDAJgLQAAgBABAAQABgCABgBAljkEQAEgCAFgFQAJAPAJgUQALABgBgOQAGAMADgNQAGADAHgFAj6kPQANAOARAFQAGADAGAAQgKAFgMADQgSAFgCgUQgBgFABgKgAmkmkQAAACAFgBAmphHQAAgNACgNQADgTAJgKQACgBACgBQAJgEAOAEQACAAACABQAQAHAQAFQAPAGATgDQARgDARgDQACAAABAAQAOgDAQgEQARgEARACQAGABADAGQAIAPACASQABASgCASQgDASgSACQgIAAgIABQgKABgKABQgRACgRgFQgQgFgQgFQgPgFgQgFQgRgEgRgEQgSgDgPgGQgCgBgHgCQAAAEAAADQgBAUgNAKQgDADgEABQgBgDgBgDAn5hAQACAEADAEQABABABACQADgEAAgDAm1BGQABgLAAgKQACgSgCgSQgCgRgEgPQgCgGgCgFAjSjgQgEABgDABQgRADgRgFQgIgCgGgCAkVh2QgFgGgCgEAj2ACQgBABgCACQgLAOgIAOQgDAFABAHQAAAGAAAOAjogeQgHAWgHAKQABAUAGARQADAMAHAGQAFgBAFAAQAGgBAFAAQACAAABAAQAKACAJAFQAAAAAAAAQAAAAAAAAQAGgDAAgCAlij0QgBAGgBAEAjlA5QgMACgLACQgJACgJACQgHACgIADQgQAEgRAEQgPAEgRADQgRACgTAAQgTAAgOgGQgHgDgLgIQgBAHAAAGQgCATACASQABASAFAQQAFAOAPAGQAHADAJADAleDGQAAABABAAQAKACAMAAQATABASABQAVACAVAAQAMgBAMgBQAHAEAUAGQARAGASABQASACATAAQASAAARABQASABASAAQAEAAAEAAQAOABAOgBQASgBAMgJQAGgDADgFQAAAAABgEQABgDABgEQAEgMADgMQABgEABgEQAEgTgJgMAi9BFQgGAKgDAMQgFAVAAAXQgBATAFARQAGARAMALQAAAAAAAAQABAAAAABQgBAAAAAAQgNABgOABQgIABgIAAAolDLQACAAACgBQAHgCAHgEQAOgIANgKQAFgEAEgEADjAfQgJAGgIADQgBABgCABQgPAGgMAJQgLAJgMAJQgQAMgHATQgCAFgDAAACHCAQAEAGAEAGQACADAEABAAPB3QgHgFgIgDQgQgHgNgJQgIgGgJgEQgHgDgIgDQgQgFgRgDQgQgCgSgCQgSgBgYABQgNABgGABAjNA3QAMgEANADQAAABAAACQAIgBAGgBAi6A+QgCAEgBADAi1DHIAAAAQAPgHARgDQASgEAPgFQAQgFAQgEQASgDAQgDQACAAACAAQAHgCAGgEAjdlHQAIgQAhAH");
	this.shape.setTransform(59.6,48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgDADQAAgKAFgBQAEAGgDAFQgDADgDADIAAgGg");
	this.shape_1.setTransform(95.8,91.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AAOBJIgFgBIgHgCIgSgIIgGgDQgUgKAFgOIACgEIACgGQAAgFgFgDQgQgNAQgMIgJgBQgSgEgIgOIgDgHQgBgIAGgHIADgDIACgCIAJgFQAKgGAOgDQACAIAIgHIAHgGQgHAHgBAHQAAADABAEIAAADIACAEQADADAEgEIADgDIADgDIADgDIgBADIAAADQAAAOARgBIAFgBIAEgBQAAASAJAQQANgJgEgUIgFgQIgBgDIgBgFIgBgCIAAgCIACACIAFACIAEADIAFACIAFADIADABIACABIADACQAGAEAEAGQAEAFACAGQAFAPgHANIgEAJIgGAMIgDAGIgBADIgBABIgCADIgDAHIgMARIAAAAIAAABQgDAEgEADQgGAEgIAAIgGgBgAAPAsIAAAAIABAAIAAAAIAAgBIAGgFIgGAFIAAABIAAAAIgBAAIAAAAIgBAAIAAAAQgEAAgBgJIAAAAIAAAAQABAJAEAAIAAAAIABAAgAgMAZIAAAGQAFgDACgDQAEgGgEgGQgHABAAALgAgFANIgBgGIABAGgAAVAMQgBgGAEAAIAAAAIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIAAAAQgEAAABAGgAgUgSQgGgDAAgCIABgCIgBACQAAACAGADg");
	this.shape_2.setTransform(96.7,89.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgDA2QgHgEgEgFIgEgHIgBgEQgCgKAIgIIgGAAQgJgBgEgFQgCgDAAgEIAAgDIAAgNQABgEgHgIQgNgOALgTIADAHQAHANATAFIAJABQgQANAQANQAEADAAADIgCAHIgBADQgFAPATAKIAGADIATAHIAHADIAFABIgRAIQgHACgHAAQgLAAgJgFg");
	this.shape_3.setTransform(93.3,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhfBmQgDAFgFgCQgOgFAEgIQgCACgEACQgIAEgFgJQgHgKgJgCQgHAAgDgGQgLgPARgHQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAgBAAAAIgBgDQgDgUANgEQgcgCARgWQgPgNAMgTQAIgNALACQAAgDAHgJQATgYASALQAAgNAKgGQANgJAOAIQgBgEADgCQATgNANAMQAHgLAOgEQAGgCAGACQAOAGACAKQAUgUALAaQAegQAQAbQAQgLAKAWQARACAIATQAIAIACAUQAIAKgEALQgEAIAAARQgRAMAFgQQgEADgEAAQgGABgEgFIgMgOQgDgDgEgCIgTgFQgRAHgQgLQgIAbgSgRQADAWgTgCQAAASgNgGQAGAIgEAFQgBACgDABQgIAFgHAAIgGgCQgLgHgIAPQgEAJAEAJQADAGAEACQgDAMgGgLQABANgLAAQgJAUgJgPQgFAFgEACIgFABQgIAAgGgNgAiKgsIACAAIgCAAIAAAAIAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAIAAgBIAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAAAABAAIAAAAIAAAAgAB0BJQAAgFADgGQAEgBAHACQgBAMgJAGgABPBDQAEgEAFgCIAGACQAAAPgSABQAAgIADgEg");
	this.shape_4.setTransform(31.7,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9966").s().p("ADqEvIgIAAIgkgBIgkgBIgkgCQgSgBgRgGQgUgGgIgEIARgBIAbgCIABAAIgBgBIAAAAQAPgHARgDQARgEAQgFQAPgFARgEIAigGIAEAAQAHgCAGgEQgGAEgHACIgEAAIgiAGQgRAEgPAFQgQAFgRAEQgRADgPAHIAAAAQgMgLgGgRQgFgRABgTQAAgXAFgVQADgMAFgKIAEgHQAFgDAAgCIAPgCIAWgCQASAAARACIAlAFIAaAFIAFABIAfAJQARAFAHAPQAGALgEANQgHgFgJgDQgQgHgNgJQgIgGgJgEIgPgGQgQgFgSgDQgPgCgSgCIgRAAIgBAAIAAAAIgSAAIgGAAIgUACIAUgCIAGAAIASAAIAAAAIABAAIARAAQASACAPACQASADAQAFIAPAGQAJAEAIAGQANAJAQAHQAJADAHAFQAHAFAFAGIABACQAJAMgEATIgCAIIgHAYIgCAHIgBAEQgEAFgFADQgNAJgSABIgWABIgGgBgAkhEnIAVgNIgOADQgSADgOgNIAfgNQAOgGARgFQAPgEAKgPQAIgNgEgSQgFgQgBgSIgEgjIgFgjQgDgRAAgSQgBgSAHgRQAHgOADABQgGgKgDgMQgEgRgCgSQAAgSADgRQAEgRAHgOQAJgPALgLIAZgYIAGgFQAKgHAOAAQASAAAQAEQAQAEAcgCQABgHgCgJQAEgCAFgFQAJAPAJgUQALABgBgOQAFAMAEgNQgEgCgDgFQgEgJAEgJQAHgPAMAHIAGABQAGABAJgFQADgCABgCQADgEgFgJQANAHAAgSQATACgDgWQASAQAHgcQARANARgJIATAHQADABAEAEIAMANQAEAFAGAAIAEAYIgCgCIgBAKIAAAAQgCALgIANQgMATABACQABADgBAFQAAAFgGAEIgEABIgEABIAAAAIgBAAIAAAAIgCAAIgFgBIgBgBIgCAAIACAAIABABIAFABIACAAIAAAAIABAAIAAAAIAEgBQgNAQgHAEQgLAGgMADIANAhQAHAQADAQQADAPAAAQIAAAEIgBAZIAAASIAIAgQADAOADASIACAjIADAlIgPACIABgDQgNgDgMAEIgDAAIgMABIgJABQgHgGgEgMQgFgRgBgUQAHgKAHgXIAQgBQASgCACgSQADgSgCgRQgBgSgIgPQgEgGgFgBQgRgCgRAEIgeAHIgGgKIAGAKIgDAAIgiAGQgSADgPgGIgggMIgFgBQgNgEgJAEIgFACQgIAKgDATQgCANAAAMIAJADQAPAGASADIAiAIIAeAKIAhAKQAPAFASgCIAUgCQgHAXgHAKIgDADQgLAPgIANQgDAGAAAGIABAUIgOAFIghAIQgPAEgRADQgRACgTAAQgTAAgOgGQgHgDgMgIIACgVIABgQIgBgUQgCgSgFgPIgDgLIADALQAFAPACASIABAUIgBAQIgCAVIgBANQgBATABASQACASAFAQQAEAOAPAGIAQAGIAZgCQAUgDADAWIgBABIAAAAQgKAIgSgCIghgDQgRgDgSgEQgPgEgOAGQgPAHgOAIQgOAIgTABIgHABQgOAAgMgFgAjfEBQgNAKgOAIIgPAGIgDABIADgBIAPgGQAOgIANgKIAJgIIgJAIgAh9EEIgNABIANgBIAJgBIgJABgAilAwIAGgEQAOgKAAgUIABgHIgBAHQAAAUgOAKIgGAEIgCgGIACAGgAjZAZQACgEABgDQgBADgCAEIgDgDIgFgIIAFAIIADADIAAAAgAAxiOIAOgBIAHgCIgHACIgOABIAAAAIgBAAQgKAAgKgDIgNgEIANAEQAKADAKAAIABAAIAAAAgAhMibIADgKIgDAKgAAeixQABAUASgFQAMgDALgFQgGAAgGgDQgRgFgNgOIAAAPgAgXjNQADgBAEgCIAAAAIABgBIgBABIAAAAQgEACgDABIgBAAIAAAAIgEgCIAEACIAAAAIABAAgAB5joQgMACAFAVIAIgEQAJgHAAgLIgIgBIgCAAgABIjYIAGAAQASAAAAgQIgGgBIgLgBQgRAAAKASgACQjtQgJgQgLAAIAAAAIgBAAIgFABIgCAAIACAAIAFgBIABAAIAAAAQALAAAJAQgAA7j4IABgBQAGgKAQAAIAAAAIAAAAIAOABIAEABIgEgBIgOgBIAAAAIAAAAQgQAAgGAKIgBABgAByCGIAAAAgAADgnIAAAAg");
	this.shape_5.setTransform(31.5,41);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AFGBjQAQAMgaAAQgMgLAWgBgAlLg1IAAgOQANANARAGQAGACAHAAQgLAGgMACIgGABQgMAAgCgQgAjwhsQgDAFABAGIAEAIIgIAEQgFgVALgCgAkghcQgNgXAfAGQgGACgDADQgDAEAAAIIgBAAIgFAAg");
	this.shape_6.setTransform(67.6,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("Ah3CbIAAgBIARgeQAFgJADgKIADgNQADgRgEgRQgDgQgFgSIgBgCIgJgeQgFgRABgTQABgSAKgOQAJgNALgNIAHgIIAQgOQAMgKATgBIAigDQAUgCAQAEQgLgIAMgUQAJgOAMgHQgKASgBAVIAAAJQAMgQAWgEIALAAQgTAMgQAPIgFAEQAUgIAYgBQATgCAPAKQgXgCgTAGIgXAGIAQAPIAQARIAIANQAGAKAEAMIAEASIACAOQAAALgFAJIgHALIgEAJIgFALIgDAMIgFAeIgDAeIAAACQgCAOABAPQABAHADADIAFAJIAIANIAGAMQgRAAgPgGIgTgJIgPgHIgFgDQgRgLgGgSQgDgLACgKQACgHAEgGQAJgLAKgLQACgCACgHIAHgBIAJgCQAfgsABgSQABgTgFgGQgFgGAEgLQAEgMgHgMQgHgMgKgLQgNgNgTgIQgPgBgNAOQgMAOgKANQgKAOgJAPQgFAJgDAMIgCAJIgCAPIABAHIACARQADAKgCACQgBACADAKIACAFQADAKABAKIAAAIIAAAGQAAAJgDAJQgCAIgEAIQgIAPgKAPIgCAEIgBAAQgJAMgPAGQgPAGgSAEIgHABIgMACIAPgfgAAGgOQgKgLASgFQALACgKAMQgDADgDAAIgDgBgABEgiQARACgYANQgLgLASgEg");
	this.shape_7.setTransform(95.5,35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AAACxQgOgJgNgLIgZgUIgcgWQgNgKgGgQIAAgBQgFgRABgTQACgRAIgPQAGgNAWgMIgBAGQgDAUAMANQAMANARADIAiAFQARABASgBIAGgBIAcAWIAMAJIAFAEIAIAIIAEACQgJAHgIADIgEABQgPAGgLAKIgYASQgQALgGATQgCAFgEAAQgDAAgCgCgABKAnIgCgCQgJgOgGgQQgFgQgCgRIgCgQIgBgTQAAgSACgSIAEgjIAEgjQAJgFAKgEIAIgCQgJAPgFARQgEASgCARQAAASAAARQABARAEARIAJAiIAHAcIABAEIABADIADAMIACAGIgSgGg");
	this.shape_8.setTransform(71.9,42.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AAUCnIgkgCIgWgDIgBgBIABAAQgDgWgVACIgYADIgQgGQgPgHgEgNQgFgRgCgSQgBgSABgSIABgOQALAIAIADQAOAGASABQATAAASgDQAQgDAQgEIAfgIIAQgEIASgEIAXgFIAJgBIAMAAIACAAQALABAJAFIgBABIABgBIAAAAQgJgFgLgBQANgFANADIgBAEQAAACgGADIgDAGQgFALgDAMQgFAVgBAWQAAAUAFARQAFAQAMALIABABIgBAAIgaACIgRACIgYABIgCAAIgngBgAAXhEIgfgKIgegJIgigIQgSgDgPgGIgKgDQABgNACgOQACgTAJgKIAEgCQAKgEANAEIAFACIAfAMQAQAFASgCIAigGIACgBIAegGQASgFARADQAFABADAGQAIAPACASQACASgDARQgDATgSABIgPABIgUACIgLABQgMAAgMgEg");
	this.shape_9.setTransform(28.5,52.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("ABPEkIAAgBIAAgBIAAgKIAAgBIAAgBIAAgFIgBgDIAAgIIAAAIIABADIAAAFIAAABIAAABIAAAKIAAABIAAABIgDABIgFABQgSABAAgPIAAgCIAAgEIgDAEIgCACIgEAEQgEAEgCgDIgCgFIgBgCQgBgEABgEQABgHAHgGIgIAGQgIAGgBgHIgBgGQAAgOARgYIgBgDIgJgRIgDgHIgNgaIgCgEIgCgDIgPgcQgJgPgMgNQgMgOgIgPIgBAAIgCgEIABAFIADATQADATgMANQgLAMgQADIgWACIgMAAQgTAAgOgHIgNgGIgDgBQgOgCgNgEQgQgFgQgBQgRgBgQgCQgSgDgIgPIACgIQAEgSgJgNQATgHARgBQATgCARACIAjAFQgEgIgCgKQADAAACgFQAHgTAQgLIAXgRQAMgJAPgGIADgCQAIgDAJgHIADAAIgCgJIAAgBIgJggIgEgMIgBgGIgEgMIAAgDIgBgEIgIgdIgIgiQgEgRgBgRQgBgRABgSQABgRAFgRQAFgSAIgPIADgBQALgCALAAQAPABAkAFIgIAIQgLANgJANQgJAOgCASQgBATAGAQIAJAgIABACQAFARADAQQAEASgDAQIgDANQgDALgGAJIgQAeIAAAAIgQAgIANgCIAHgCQASgDAPgGQAPgHAJgLIABAGIABAMIAAABQAIAKAPAKQAPAKAPAHQAQAHALANQAJALADARIAEAkQACATgIAPQgHAOgUABIgDgGIgQgeQgJgPgHgRIgMgeQgBgJgCgIIgGgXIgHggIAHAgIAGAXQACAIABAJIAMAeQAHARAJAPIAQAeIADAGIAJAWIACAFIAAACIAJAfIAAACIAEARIABAFIABAFIABAFQACARAEARIACAFIAAABIABADIABAFIABACIAEARQAFAUgOAJQgJgQAAgSgAAsDcIABACIACADQAGALACAJQgCgJgGgLIgCgDIgBgCIgCgCIACACgAhEAKIAKAhQAFAOAGAMQgGgMgFgOIgKghQgFgSgBgQQABAQAFASgAioBBQACACAEABQgEgBgCgCIgIgMIAIAMgAAGA5QADAAAAgIIAAgFIgBgGIABAGIAAAFQAAAIgDAAgABPEkIAAAAgACjCKQgRgBgQgHQgJgEgEgKQgFgNgFgRQgEgRgHgPIgKgcQgHgTgKgPQgIgPgHgPIgHgQIgEgMIgJgaQgCgGgJg5IgBgGIAbgCIgbACIgEAAIgFABQgDgKABgCQABgCgCgLIgDgRIAAgHIABgPIADgKQADgLAFgKQAIgOALgOQALgOAMgNQAMgOAQABQASAIAOANQAKAKAHAMQAHANgEALQgEAMAFAGQAFAGgBATQgBASgfAtIgKACIgGAAIgBAAIgCABIAAAAIgCAAIAAAAIgBAAQgMgBgKgDQgPgFgFgGIgBgBIgJgKIgBgBIgBgBQgGgGgKgZIgLgcIALAcQAKAZAGAGIABABIABABIAJAKIABABQAFAGAPAFQAKADAMABIABAAIAAAAIACAAIAAAAIACgBIABAAQgCAIgDACQgKAKgIALQgEAHgCAGQgDALAEALQAFASARAKIAGADIAPAIIAFAVQAFAQAHAPIAQAgQAIAOADARIAIAgQACAHAEAFQgEgFgCgHQAXADAKgIQANgLATAJQAPAIAPAGIASAGQAJACgFAHQgDADgGABQgPABgPgDIABADQgOAEgRABIgRABIgWABIgLAAgADeBzQAHAAAFACQAHAEACAHQgCgHgHgEQgFgCgHAAIgCAAIgBAAIAAAAIgBAAQgHAAgGABIgJAEIAJgEQAGgBAHAAIABAAIAAAAIABAAIACAAgABUimQAagBgPgLQgXAAAMAMgABbi+QAMAAALgOIABgBQgRgKgEgMQAEAMARAKIgBABQgLAOgMAAIAAAAIgBAAIgGgBIAAAAIAAAAIgBAAIABAAIAAAAIAAAAIAGABIABAAIAAAAgAA2jgQAEAEAEgGQALgLgLgCQgTAFALAKgABtjkQAXgOgQgBQgSAEALALgAA1j6QAFgPAMAAIAAAAIABAAIAIABIAHACIgHgCIgIgBIgBAAIAAAAQgMAAgFAPgABvkDIAAgCQAAgFAMAAIAAAAIAAAAIAAAAIABAAQAEAAACAGQgCgGgEAAIgBAAIAAAAIAAAAIAAAAQgMAAAAAFIAAACgAi2hYIgigFQgRgDgMgNQgMgMACgUIABgHIAFgbIACgLQADgMAGgKIAQgfQAIgQAQgJIAHgEIAWgOIAbgUIAMgIIgFAiIgDAjQgCASAAASIABATIABAQQACASAGAQQAFAQAKAOIgCACIgBACQgJALgNADIgGAAIgQABIgUgBg");
	this.shape_10.setTransform(90.8,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,121.2,99.9);


(lib.doggift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AEzgYQAFABABACQACAEABADQAFAGAFAEQAOALgEATQgCAIgHACQgNAEgMAHQgKAGgIAJQgLAMgRAEQgRADgRADQgQADgSABQgTABgMALQgCADAAAEQgDACgEACQgOAJgRAGQgRAGgSgEQgSgDgRAHQgQAIgRAGQgNAFgOgCQgRgCgSAIQgRAJgRgFQgRgEgSgCQgRgCgQADQgRADgSAAQgTABgQAEQgQAFgQAEQgRAFgQADQgRACgRADQgXAEAIgXQAEgJgDgLQgEgOAIgHQAFgEAGgHQALgMAKgPQAJgQAMgMQAMgNAMgNQAMgMAIgOQANANATAEQARADATgCQARgCALgOQANgOAPAIQAQAKAOgDQAFgBACgEQAHgIAHgEQAHgEAIAAQATAAAGgSQAHgRgFgRQgGgRgSgFQgPgDABgHQABgDAGgBQAEAAADgBQACgBABAAQABgCACgBQAIgJAMgHQANgKANgKQAMgJAQgIQAQgIAOgJQANgJATAAQATABAQAGQAQAGAJAQQAKAQALALQAMALARADQARACANAMQANANAFAPQAFAOAPAJQAOAJAKANQABACABABQAFAFAEAFQAEANgFANQgFASgQADQgQADgTAAQgSABgLAPQgKAOgOAKQgPAKgSABQgQABgRADQgKADgLABQgHACgIAAQAAAAgBAAQABABAAAAQAIADAHgGADDhKQgQAIARAAQAFAAABgEQAGgUgXAMQgJAFACAKQADANAQgCQASgDACgRABGiGQADABAKgFQAMgHAGAEQAEADACAEQAHAKgRAFQgTAEgIgTQgCgBAEgHQANgUAOAMABZhPQgMABAIAHQAFgDgBgFgABpggQAAgCABgCQACgPAVgKQADgBADAAQAJgBAMABQAFABACAGQABADABACQgIABgFAAAB6gPQACgMABgLIAAAAQgDgDAAgCQgBgGAMgHQATAEgbAOIAAAAAB6gPQAAADgBAEAChgdQgEAFgGAEQgMAIgPgDQgBAAgBAAQgNgDgDgJQAAgCgBgDQAFgFAMgGAChgdQgOgGgFgEAClgyQADAMgHAJABZAJQAFgBACAAQAPABgNAPQgJALgLABQABgCAHgGQgJABgFAIQADAAADgBQgBAEAKgBQAGAAAGgDQASgHgJgJAC3AjQADgBADgCQAQgHgCALQgCALgNAEQgKAEgJgFQgHAGgQAEQgGACgHADQAFgKANgKQgHgEgBgCQAEgBAFgCQAGgEAFgDQAFgDAEgCQADgBAEAAQAGAAAGAAQgCAHgGAFQgEAEgHADAC5gZQgIAKAHAIQAagNgWgFQgBAAgCAAgACbBrQAFgDAGgDABnBhQgJgEAAgLQgRAFgRAIQgbAOgdAKQgQAHgSgDQgIgCgHgBQgHgBgGgEQgJgFgNgFQgKgEgMADQgXAFgYAHQghAIgiADQgVADgXABQgOACgOgDQgKgBgKAAQgMgBgJgEAA6hKQgGAAgBAFQAGAFABgKgAgjhMQgOAJgMADQgCgPAIgHAg2gkQAAgCgBgCQgBgFgCgFQgBgEgBgDQAAgEgBgDAg5gIQAEgJAAgIQABgFgCgGQAAAAAAAAQAPgFAPgFAAfgHQgDAHAMABQAEgDADgFQAEgGgEgHQgJgEgHAPQAAABAAABQgJgCgEAEQgEAEgEAGQgIAQARgHQANgEAIgJAAvgUQgLgMgNAPQgKALAFABAgbBRQAFgBAGgBIAAAAQAEgBAEAAQgCgCgGACQAAgGALgIQAEgDgGgFQgJgGgLALQgLALALAJQgGACgFADAgbhBQgSAJgNAGAg1gZQANACAPgGAilBQQAKAPAEgBQADgBADgBQAHgEAHgEQABgCABgCQACgFABgGQACgKgJgEQgIgEgJAFQgGADgEADQgHAHABAJQABABAAABgAimBOQAAACAAABQABAAAAgBQACgCACgCAj3BRQgJADgIALQgGAHAGABQAHACAGgGQAFgEAEgDQAJgBANgKQgLgNgQANQAGgBAGACAgZBEQABACAAABAigA+QAGAHAFANAA+gsQAPAAgGgJQgGADgDAGg");
	this.shape.setTransform(33.7,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999900").s().p("AgSAHIAEgEIgEAEIgBgCQgBgJAHgGQAGAGAFANQgFgNgGgGQAEgEAGgDQAIgEAIADQAJAEgCALQgBAFgCAEIgCAEQgHAFgHADIgFACIgBAAQgEAAgJgNg");
	this.shape_1.setTransform(19,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AjoB7QgFgBAFgHQAIgLAJgDIACAAIAAAAIACAAIABAAIAAAAIAEAAIABABIADAAIgDAAIgBgBIgEAAIAAAAIgBAAIgCAAIAAAAIgCAAQAQgNALANQgMAKgJABIgKAHQgFAFgFAAIgDgBgAC3BBQgHgEgBgCIAJgDIALgHIAJgFIAHgBIAMAAQgCAHgGAFQgEAEgHADQAHgDAEgEIAHgDQAQgHgDALQgCALgMAEQgKAEgJgFQgIAGgPAEIgNAFQAEgKANgKgAA/AMQgIgCgFAEQgEgBAJgLQANgOALAMIAAAAIAAAAIgBAAIgDgBIAAAAIAAAAQgGABgEAIIAAAAIgBABIAAAAIgBABIAAACIAAgCIABgBIAAAAIABgBIAAAAQAEgIAGgBIAAAAIAAAAIADABIABAAIAAAAIAAAAQAEAGgEAGIgGAJQgNgBADgIgADagFIACAAQAXAFgbAMQgHgIAJgJgABnhyQADABAJgFQAMgHAGAEQAEADACAEQAIAKgSAFIgGABQgOAAgGgQg");
	this.shape_2.setTransform(30.5,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AgeAZQAKgLAJAGQAGAFgEADQgLAIAAAGIABABIgBAAIgKACQgLgJALgLgAgbAjIgCgDIACADgAAGgeQAEgHAEgEQAFgEAIACQgDAIANABQgJAJgMAEIgJACQgHAAAGgLg");
	this.shape_3.setTransform(34.1,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAYIgDgBIAEgWIgEAWQgMgCgDgJIgBgFQAEgGAMgFQgMAFgEAGIAAgFQACgOAVgJIAGgCQAIgBANACQAFAAACAHIABAEIgNACIANgCQADAMgHAJIgTgKIATAKQgDAFgHAEQgJAFgJAAIgHAAgAgNgEQAAADAEABIAAABIAAAAIAAgBQgEgBAAgDIAAAAQAAgGAMgGQAGABAAAEQAAAEgOAIQAOgIAAgEQAAgEgGgBQgMAGAAAGIAAAAg");
	this.shape_4.setTransform(47.3,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AkaCdIgUgCQgMAAgJgFIALgKQALgMAKgQQAJgPAMgNIAYgZQALgMAJgOQAMAMAUAEQARAEATgDQAQgCAMgNQANgPAPAJQAPAJAPgDQAEgBADgEQAGgIAIgFQAHgDAIgBQATAAAGgQQAHgRgFgRQgGgRgSgFQgPgEABgGQABgEAGgBIAHgBIADgBIACgDQAJgIALgIIAagTQANgKAQgIQAPgHAPgKQANgJATABQATAAAQAHQAQAGAJAPQAJAQAMALQAMAMARACQAQACANANQAOAMAFAPQAFAOAPAJQAOAJAKAOIACABIAJALQAEAMgFAOQgFASgRADQgPADgTABQgSABgLAPQgKANgPAKQgOALgTAAQgQABgQAEIgVAEIgPACIgBAAQgJgEAAgLQgRAEgRAJQgbANgdALQgRAHgRgDIgPgEQgHgBgGgDIgWgLQgKgEgMAEIgwALQggAIgiAEIgsAEIgKAAIgSgBgAjxBsQgJACgIALQgGAIAGABQAHABAGgFIAJgHQAJgCANgJQgGgHgGAAQgHAAgIAHgAiSB4IAGgCQAIgDAGgFIADgEQACgEABgGQABgLgIgEQgIgDgJAEQgGADgEAEQgHAHABAJIAAACIABAAQAKAPADgCgAggBwQAEgDAHgCIALgCIAAAAIAIgBQgCgCgGACQAAgGAKgIQAEgDgGgEQgIgGgLAKQgLAMALAIQgHACgEADgAC5AyIgHAAIgJAFIgLAIIgKADQABABAIAFQgOAKgEAJIANgEQAQgFAHgGQAJAFAKgDQANgEACgLQACgMgQAHIgGAEQAFgFADgHIgGgBIgGABgABaBCIAAAAIADAAQAGgBAFgCQANgFAAgGQAAgDgDgDQADADAAADQAAAGgNAFQgFACgGABIgDAAIAAAAIgBAAIAAAAQgGAAABgDIAAAAQAKgCAJgKQAHgHAAgEQAAgFgIAAIgBAAIgBAAIAAAAIAAAAIgFAAIAFAAIAAAAIAAAAIABAAIABAAQAIAAAAAFQAAAEgHAHQgJAKgKACQAAgDAIgGQgJABgFAIIAGAAIAAAAQgBADAGAAIAAAAIABAAgAAcAIQgJALAEACQgEADgDAHQgJAQASgHQANgEAIgJIAHgIQADgHgDgGQgFgGgGAAQgGAAgIAIgAC+ASQAagMgXgFIgCgBQgIALAHAHgAB/ARIABgHIACABQAPACAMgHQAGgEAEgEQAGgJgCgNIgCgEQgCgHgFAAQgNgCgIABIgGACQgVAKgDAOIAAAFIABAFQADAIANACIgBAHgABDgSQAQAAgGgJQgHADgDAGgADHgaIAEAAQASgCABgRQgBARgSACIgEAAIAAAAIgBAAQgMAAgCgKIgBgEQABgIAHgEQAHgEAFAAIABAAIAAAAQAHAAgDALIAAABIAAABIgBAAQgBADgEABIAAAAIAAAAIgBAAIAAAAQgQAAAOgIIACgBIgCABQgOAIAQAAIAAAAIABAAIAAAAIAAAAQAEgBABgDIABAAIAAgBIAAgBQADgLgHAAIAAAAIgBAAQgFAAgHAEQgHAEgBAIIABAEQACAKAMAAIABAAIAAAAgAA5gqQAFAEACgKIgBAAQgFAAgBAGgABbgsQAFgEgBgEQgMABAIAHgABMhrQAIATATgFQARgEgHgLQgCgDgEgDQgHgFgLAHQgKAFgDAAIgBgCQAAgCADgEIAAgBIABgBIABgBQAHgKAHAAIAAAAIABAAQAFAAAEAEQgEgEgFAAIgBAAIAAAAQgHAAgHAKIgBABIgBABIAAABQgDAEAAACIABACgAigBpIABACIgBAAIAAgCg");
	this.shape_5.setTransform(33.1,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AlOBQQAEgJgDgLQgEgOAIgHQAJAEANABIATABQAOADAOgCIAsgEQAigDAhgIIAwgMQALgDAKAEIAWAKQAGADAHACIAPADQASADAQgHQAdgKAbgOQARgIARgEQAAAKAJAEIABABQAIADAHgGIAVgEQARgDAQgBQASgBAPgJQAOgKAKgOQALgPASgBQATAAAQgDQAQgDAFgSQAFgOgEgNIAKAKQAOAMgEATQgCAIgHACQgNAEgLAHQgLAGgIAJQgLAMgRAEIgiAGQgQACgSABQgTABgMALQgCADAAAEIgHAEQgOAJgRAGQgRAFgSgDQgSgDgRAHQgQAIgQAGQgOAFgOgCQgRgCgRAIQgSAJgRgFQgRgFgRgBQgSgCgQADQgRADgSAAQgTABgQAEIggAJQgRAFgQADIgiAFIgGABQgQAAAHgUg");
	this.shape_6.setTransform(33.7,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,69.4,39);


(lib.dog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AB/CQQAPgPAOgTQAIgMAJgMQAJgMAKgNQALgPAOgLQANgKAOgFQARgGASAGQAPAFAKANQALAOAGAQQAFARAAARQAAAIgDAFQgCgJgFgIQgEgFgDgGQgDAHgBAJQgBAGgDAAQgMADgKgGQgKgHgMgBQgIgCAEALQABAEgGABQgWAAgWABQgMAAAKAOQAKAOgRACQgKABgKAAQgIAAgBAIQgBAJgGAEQgEACgEABQgJADgFAFQgDgCgEgBQgOgGAIgPQACgEABgEQABgDAAgDQAAgRAAgSQAAgPAAgPQgBgWgLgQQgLgQgRgEQgNgEgOgCQgGgCgHgCQgQgDgPgGQgBAAAAAAQgQgHgOgKQgDgDgDgBQgFgFABgCQAAgEgBgBQgEgHgEgHQgEgFgDgFQgFgIgBgJQgCACgBACQACAEADAEQAEAGgDAIQAAABAAAAQgFAPgOAKQgNAJgOAJQgQAIgTgBQgHgBgHgDQgJgEgIgGQgJgIgBgLQgBgGABgHQAAgCABgCQADgPAIgOQAJgPAHgMQAIgNAvg0QgDAAgDAAQgJgBgLgCQADgKgKgFQgQgJgSAHQgHgBgFADQgBAAAAABAgxDIQABAAAAABQAHAEAIAAQAYADAYgCQASgBARAEQAYAEAaACQAJABAJgFQAOgIAHgPQADgHgFgFAgHiaQABADABADQAFAOAAAPQAAAGAAAGAguhOQgCgIABgHQABgSgDgSQgCgRgJgMQgGgKgLgDQgCAAgDgBAhsivQAAAAAAABQgBABgBACQgFAPgOAIQgLAGgLAFQgVAJgDgSQgDgMAGgFQAEAFAJgHQAEgDACgDQAHgJgDgMAA9AJQgHgBgGgBQgGACgDAEQgFAGgHAGQgGAFgHAFQgOALgTAAQgFgBgEgBQAAAAgBgBQgIgEgFgKQgBgBAAgCQgHgRAGgRQAGgSANgLAisijQgCgDAAgDQAAgBAAgBQAAgCABgDQAEgJAHgEQgJgEgKgEQgDgBgDgBQgCgBgBAAQgNgFgOgFQgDgBgDgBAj4ijQABAAAAgBQABAAABgBQADgDADgDQACgCACgCQACgCADgDQAAgBABAAQAJgNgCgQQgBgBAAAAQAAgBAAAAQgBgDgFACQgDAAgDABQgCABgCABQgFACgFAEQgEADgEAFQgBAAAAAAQgBABgBABQgEAFgCAEQgDAIAFAGQABACABACQAEAEAFAAQgBABAAABQgCACgBADQgDAGABAGQABAJAIAJQAEADADADQAEADAEADQAFADAFACQgEABgDABQgBABgCABQgJAFgIAKQgLAOgEASQgDATASAIQAUAIACgYQAAgCAAgCQACgIACgHQAFACAHAHQADADAEADQAHAIAHAJQAAAAgBAAQgHAJALALQAFAFAFAEQgDATgCARQgDATAKAPQAIANALAOQAJALAAATQAAATgOAIQgLAGgNADQgRACgHAQQgDAIADAHQAGARASACQASABAQgEQAEgBAEgBQAJAGAMABQASADARgDQARgDAQgFQAFgCADgCAj9ijQABAAABABQACgBABAAQgCACgEAAAjohrQgBAGgCADQgLAKgFAOQgDAFADAEAkhhRQgGgCgCAPQgCAMAEAHAk7g/QgKgBAAATQAAAGACADAkngBQAFAKAAAIQABALgBAMQgIgHgCgMQgBgPAGgHgAkhgFQgEACgCACAj4ARQgRAFAQAQQAEAEAGADQgEgIgCgNQgBgFgCgCgAilgiQgNgCgPACQAAAAAAAAAiKgFQgJALgQgEQgJgCgIgFAjhhtQARAOgMASQgDAFgDAGAh2BYQAGAPAGASQAGARgHARQgGAQgUgBQgUgCgEARQgDAIAGAGQAEADAEADAAeCfQgOgIgKgOQgJgPADgSQACgSAPgMQAPgNARAHAg4BPQALAQAHATQACAGABAGQABAJAAAKQAAAKgCAJQgBAAgBAAQgMADgGALQgGAOANAIAAeCfQgIAGgHgCQgQgDgNgNQgJgJgMgMAgkCkQAJgDAKABQAQAAANADQASADAPgFQgHABgGgDQgBgBgBgB");
	this.shape.setTransform(32.6,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("ACgDWQgZgCgZgEQgRgEgSABQgZACgYgDQgIAAgHgEIgBgBQgJgFAAgIQAAgEACgFQAGgLAMgDIACAAQAJgCAKAAQAQAAAOADQASADAPgFQgHABgGgDIgCgCQgOgIgKgOQgHgLAAgOIAAgIQADgSAPgMIABgBIABgBQAJgGAKgBIAAAAIAAAAQAFAAAFACIAAAAIAAAAIABABIgBgBIAAAAIAAAAQgFgCgFAAIAAAAIAAAAQgKABgJAGIgBABIgBABQgPAMgDASIAAAIQAAAOAHALQAKAOAOAIQgIAGgHgCQgRgDgNgNIgVgVIgDgMQgHgTgLgQQALAQAHATIADAMQACAJgBAKQAAAKgCAJIgCAAQgMADgGALQgCAFAAAEQAAAIAJAFIgIAEQgPAFgRADQgRADgSgDQgMgBgJgGIgIgGQgEgEAAgGIABgEIAAgBIAAgBQAFgNAQAAIAAAAIAAAAIACAAIABAAIACAAIAAAAIABAAIAAAAIABAAQARAAAFgPQAEgIAAgJQAAgJgDgIIgMghIAMAhQADAIAAAJQAAAJgEAIQgFAPgRAAIgBAAIAAAAIgBAAIAAAAIgCAAIgBAAIgCAAIAAAAIAAAAQgQAAgFANIAAABIAAABIgBAEQAAAGAEAEIAIAGIgIACQgQAEgSgBQgSgCgGgRQgDgHADgIQAIgQAQgCQANgCALgHQAOgIAAgTQAAgTgJgLQgLgOgIgNQgJgPACgTIAFgkQAIAGAJABQAQAEAJgLQAHADAHABQATACAQgJQAPgJAMgJQANgKAFgPIAAgBQADgIgEgGIgFgIIADgEQABAJAFAIIAHAKIAIAOQgMALgHASQgGARAHARIABADQAFAKAIAEIABABIAJACQATAAAPgLIANgKIAMgMQAEgEAFgCIANACIAbAGQASAEAKAQQALAQABAWIAAAeIAAAjIgBAGIgDAIQgIAPAOAGIAHADQAFAFgDAHQgHAPgOAIQgIAEgIAAIgCAAgAhWDMIAAAAgAiFgjIAAAAIgOgRIgHgGQgHgHgFgCIAGgLQAMgSgRgOIgKgFIgIgGIgHgGQgIgJgBgJQgBgGADgGIADgFQAEAAACgCIABgBIACgBIAGgGIAEgEIAFgFIABgBQAJgNgCgQIgBgBIAAgBIAGACIAbAKIADABIAGACIATAIQgGAEgFAJIgBAFIAAACIACAGQgGAGADALQADASAVgJIAWgLQAOgIAFgPIACgDIAAgBQALADAJAAIAGAAQgvA1gIAMIgQAbQgIAOgDAPIgBAEQgBAHABAGQgMgCgQACg");
	this.shape_1.setTransform(26.6,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAFATQgIgDgIgFIgLgKQgLgKAIgJIABABQAPgDALADQACAKAJAHQAHAHAJADQgHAKgKAAIgHgBg");
	this.shape_2.setTransform(15.8,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgKAmQgSgIADgUQAEgQALgOQAIgKAIgFIADgCIAHgCQARAOgMARIgGALQgCAHgCAIIAAAEQgCASgKAAQgEAAgFgCgAgJAEQgBgCAAgCIABgFQAFgNAKgLQADgCAAgGQAAAGgDACQgKALgFANIgBAFQAAACABACg");
	this.shape_3.setTransform(8.4,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIAaQgFgBgDgEIgDgDQgEgHADgHQABgEAFgFIABgBIABgBIAIgIIAKgGIADgBIAGgCQAFgCABADIABABIAAABQADAQgKAMIgBABIgFAGIgDAEIgGAFIgCACIgBABIgDAAIgCAAg");
	this.shape_4.setTransform(8.1,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghASQgCgLAGgGQADAGAKgHIAGgFQAHgJgDgNQARgGAPAIQAKAFgCALIgBAAIgBAEQgFAOgOAHIgVALQgHADgFAAQgKAAgDgMg");
	this.shape_5.setTransform(18.3,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#993300").s().p("AA3C1QgPgGAJgPIADgIQAPgOAOgTIARgZIASgYQALgQAOgKQAOgKAOgFQARgHARAGQAQAGAKAMQALAPAFAQQAFAQABASQAAAHgEAFQgCgJgFgHIgHgMIgEARQAAAFgDABQgNADgJgHQgKgGgMgCQgIgBAEALQABAEgGAAIgsABQgMABAKANQAKAPgRACIgUAAQgJABgBAIQgBAIgGAEQgDACgEABQgKAEgEAFIgHgEgAheA2IgJgCIgBAAQgJgEgEgKIgBgDQgHgSAGgRQAGgRANgMIABAFQgCACAGAFIAGAEQAPAKAPAGIABABQAQAGAPAEIANADIgNgCQgFADgDADIgNAMIgMALQgPAKgSAAIgBAAgAjHAGQgHgBgHgCQgJgDgIgHQgJgHgCgLQgBgHACgHIABgDQADgPAIgOIAQgcQAHgMAwg0IAFABQAKADAHAJQAJAMACARQADASgCASQAAAIABAHIgCAFIAEAIQAFAGgDAIIAAABQgFAOgOAKQgNAKgPAIQgMAGgOAAIgIAAgAj3ibIgCgGIAAgBIABgGQAEgJAGgEIACAAQAFgDAHAAQADANgHAJIgGAGQgFAEgEAAQgDAAgBgDg");
	this.shape_6.setTransform(40.1,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,67.2,45.1);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},5).wait(1));

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


(lib.theGirlsGiveTheDogABite = function(mode,startPosition,loop) {
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
	this.frame_19 = function() {
		playSound("flickering");
	}
	this.frame_27 = function() {
		playSound("word_appears");
	}
	this.frame_50 = function() {
		playSound("flickering");
	}
	this.frame_55 = function() {
		playSound("flickering");
	}
	this.frame_60 = function() {
		playSound("flickering");
	}
	this.frame_72 = function() {
		playSound("word_appears");
	}
	this.frame_93 = function() {
		playSound("flickering");
	}
	this.frame_98 = function() {
		playSound("flickering");
	}
	this.frame_103 = function() {
		playSound("flickering");
	}
	this.frame_108 = function() {
		playSound("flickering");
	}
	this.frame_117 = function() {
		playSound("word_appears");
	}
	this.frame_143 = function() {
		playSound("flickering");
	}
	this.frame_148 = function() {
		playSound("flickering");
	}
	this.frame_153 = function() {
		playSound("flickering");
	}
	this.frame_158 = function() {
		playSound("flickering");
	}
	this.frame_167 = function() {
		playSound("word_appears");
	}
	this.frame_190 = function() {
		playSound("quick_pad_chord");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(8).call(this.frame_27).wait(23).call(this.frame_50).wait(5).call(this.frame_55).wait(5).call(this.frame_60).wait(12).call(this.frame_72).wait(21).call(this.frame_93).wait(5).call(this.frame_98).wait(5).call(this.frame_103).wait(5).call(this.frame_108).wait(9).call(this.frame_117).wait(26).call(this.frame_143).wait(5).call(this.frame_148).wait(5).call(this.frame_153).wait(5).call(this.frame_158).wait(9).call(this.frame_167).wait(23).call(this.frame_190).wait(78));

	// dynamic text
	this.instance = new lib.textwhoorwhat("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(198.3,277,1.284,1.284,0,0,0,50.2,11.8);

	this.instance_1 = new lib.textwhoorwhatfadein();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.4,77,1.35,1.35,0,0,0,50.2,14.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAAKAEQALADAFAAQAXAAAAgKQAAgFgQgIQgYgKgGgEQgQgMAAgQQAAgYAYgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgKIgJAAQgbgBgBAJQABAEAQAHQAXAMAIAFQARALAAAQQAAAVgTAJQgPAJgVAAQgQAAgMgFg");
	this.shape.setTransform(126.6,40.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgKBcQgFgFAAgGIAAihQAAgIAFgDQAFgFAFAAQAHAAAFAFQAEADAAAIIAACaQAAAXgQAAQgGAAgEgFg");
	this.shape_1.setTransform(117.5,37.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgtA9QgFgEAAgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAHAAQAOAAACAOQATgQAaAAQAXAAAAAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgFAEQgEAFgHAAQgIAAgDgFg");
	this.shape_2.setTransform(108.8,40.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgOBVQgFgFAAgGIAAgVIAAgWIABgaIABgZQAAgHAEgFQAFgEAHAAQAGAAAFAEQAEAFAAAHIgBAZIgBAaIAAAWIABAVQAAAGgFAFQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_3.setTransform(99.7,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("Ag8BLQAAgGAFgEQAEgFAHAAIAPADQAJACAIAAQAQAAAJgLQAIgLABgWQgGAGgHADQgHADgJAAQgXAAgOgPQgPgPAAgXQAAggATgTQAUgVAiAAQALAAAIADQAIADAEAFQAQABAAAQQAAAIgDAOQgFAbgBAeQgBAmgMARQgPAXgmAAQguAAAAgSgAgRg0QgKAMAAASQAAAPAFAGQAFAHALgBQAJABAJgKQAKgLABgKIAFgjIgIgEQgEgBgEgBQgSABgLANg");
	this.shape_4.setTransform(89.5,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AghA9QgRgGAAgNQAAgMAOAAQAGAAAKAEQAKADAFAAQAXAAAAgKQAAgFgRgIQgWgLgHgDQgQgMAAgQQgBgYAZgIQAPgFAdAAQALAAAGADQAIAEAAALQAAAVgMAAQgLAAgCgKIgKgBQgcAAAAAJQAAAEAQAHQAYAMAIAFQARAMAAAPQAAAUgSALQgQAIgVAAQgPAAgOgFg");
	this.shape_5.setTransform(217.8,287.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgKBcQgFgFAAgHIAAihQAAgHAFgDQAFgFAFAAQAHAAAFAFQAEADAAAHIAACbQAAAXgQAAQgGgBgEgEg");
	this.shape_6.setTransform(208.7,284.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgtA9QgEgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAHAAQANAAADAOQATgQAaAAQAXAAABAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgGAAgEgFg");
	this.shape_7.setTransform(200,287.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgOBVQgFgFAAgGIAAgVIAAgWIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAWIABAVQAAAGgFAFQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_8.setTransform(190.9,285);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("Ag7BLQAAgHAEgDQAEgEAGgBIAQADQAKACAHAAQARAAAIgLQAIgLABgWQgGAGgHADQgIADgIAAQgXAAgPgPQgOgPAAgXQAAggAUgTQATgVAiAAQALAAAIADQAIADAEAFQAPABABARQgBAHgCAOQgFAbgBAeQgBAmgLARQgQAXgmAAQgtAAAAgSgAgRg0QgKAMAAASQAAAOAFAIQAGAFAKAAQAJAAAKgKQAIgKACgKIAFgjIgIgEQgDgCgEAAQgTAAgLAOg");
	this.shape_9.setTransform(180.7,290.9);

	this.instance_2 = new lib.textdoes("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(201.6,277,1,1,0,0,0,21.7,11.8);

	this.instance_3 = new lib.textdoesfadein();
	this.instance_3.parent = this;
	this.instance_3.setTransform(201.6,64.9,1.537,1.537,0,0,0,21.7,18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgoAzQgTgPAAgbQAAgdAQgUQARgXAdAAQATAAAOAHQASAIAAATQAAAMgOAKQgHAFgUAIIgmARQAFAGAIAEQAIACAJAAQAQAAALgGQAKgGAGAAQAMAAAAAMQAAANgUAJQgQAHgTAAQgbAAgSgNgAgPgbQgIAHgFAOIAagLQAQgHAJgGQgIgEgMgBQgLAAgHAIg");
	this.shape_10.setTransform(218.4,28.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgQA0IgoheIgBgGQAAgGAFgFQAGgEAGAAQAKAAAFAJQAGAOATAzIAQgnIALgZQAEgJAKAAQAHAAAFAEQAFAEAAAHQAAAEgTAqIgZA0QAAAGgEAEQgFADgFAAQgMAAgEgMg");
	this.shape_11.setTransform(206.2,28.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgFQAFgEAHAAQAHAAAGAEQAFAFAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_12.setTransform(197.1,26.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("Ag8BLQABgGAEgFQAEgDAGAAIAQACQAKABAHAAQARAAAIgKQAIgKABgXQgGAGgHADQgIADgIAAQgXAAgPgPQgOgQAAgWQAAggAUgUQAUgUAhAAQALAAAIACQAIADAEAGQAPACABAQQgBAHgCAOQgFAbgBAfQgBAlgLARQgQAXgmAAQgtAAgBgSgAgRg1QgKAMAAAUQAAANAFAIQAGAFAKABQAJAAAKgLQAIgKACgLIAFgjIgIgDQgDgBgEAAQgTAAgLAMg");
	this.shape_13.setTransform(186.9,32);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAcAAQAVAAANAGQASAKAAARQAAANgPALQgGAEgUAIIgnARQAHAGAHADQAIAEAKAAQAPAAALgHQAKgGAFAAQANAAAAAMQAAANgTAJQgRAHgSAAQgbAAgSgOgAgQgbQgHAHgEAPIAagMQAOgHAKgGQgIgFgNABQgJgBgJAIg");
	this.shape_14.setTransform(212,287.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgRA0IgmhdIgCgHQAAgGAFgFQAGgEAGAAQAKAAAEAJQAHAOATA0IARgoIAJgZQAFgKAKABQAHgBAFAFQAFAEAAAGQAAAFgTAqIgYA0QgBAFgFAEQgDAEgGAAQgLAAgGgMg");
	this.shape_15.setTransform(199.9,287.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgOBVQgFgFAAgGIAAgVIAAgWIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAWIABAVQAAAGgFAFQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_16.setTransform(190.7,285);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ag7BLQAAgHADgDQAFgEAHgBIAOADQAKACAIAAQAQAAAJgLQAIgLABgWQgFAGgIADQgIADgHAAQgYAAgOgPQgPgPAAgXQAAggATgTQAVgVAhAAQALAAAIADQAHADAGAFQAOABAAARQAAAHgCAOQgFAbgBAeQgBAmgMARQgPAXgmAAQgtAAAAgSgAgRg0QgKAMAAASQAAAOAFAIQAGAFAKAAQAIAAALgKQAJgKABgKIAFgjIgIgEQgEgCgDAAQgTAAgLAOg");
	this.shape_17.setTransform(180.6,290.9);

	this.instance_4 = new lib.textwhat("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(154.4,276,1,1,0,0,0,23.9,11.8);

	this.instance_5 = new lib.textwhatfadein();
	this.instance_5.parent = this;
	this.instance_5.setTransform(287.9,63.6,0.808,0.808,0,0,0,23.9,18.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AgoAzQgTgPAAgbQAAgdAQgUQARgXAcAAQAUAAAOAHQASAIAAATQAAAMgPAKQgGAFgUAIIgmARQAFAGAIAEQAIACAJAAQAQAAALgGQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgTAAQgaAAgTgNgAgPgbQgIAHgEAOIAZgLQAQgHAJgGQgIgEgNgBQgKAAgHAIg");
	this.shape_18.setTransform(333.2,38.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AgKBRQgFgEAAgGIABgMIAAgOIgCg7IgXgCQgOgCAAgNQAAgGAEgFQAFgFAHAAIAUABIgBgMIAAgLQAAgHAEgFQAFgDAHAAQAQAAAAAcIAAAKIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgFAFgGAAIgGAAIgGAAIgLABIACA8IAAAGIABAHQAAAbgRAAQgGAAgFgFg");
	this.shape_19.setTransform(321.1,36.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgFQAFgEAHAAQAHAAAGAEQAFAFAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_20.setTransform(312.3,35.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AgiBZQgEAEgHAAQgGAAgFgEQgEgEAAgGIABgJIAAgJIAAiDQAAgJADgGQAFgJAJAAQAMAAAAAOIAAAFIAAAFIAAAsIAQgHQAIgCAHAAQAbAAARAUQAQASAAAaQAAAbgTATQgSAUgbAAQgRAAgOgGgAgNgCQgIADgJAHIAAAyQAPAHAMAAQAOAAAKgKQAJgKAAgQQAAgPgHgKQgJgJgNAAQgFAAgJADg");
	this.shape_21.setTransform(301.5,35.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAdAAQATAAAOAGQASAKAAARQAAANgOALQgHAEgUAIIgnARQAHAGAHADQAIAEAKAAQAPAAALgHQAKgGAGAAQAMAAAAAMQAAANgTAJQgRAHgSAAQgcAAgRgOgAgQgbQgHAHgFAPIAagMQAQgHAJgGQgIgFgMABQgKgBgJAIg");
	this.shape_22.setTransform(219,287.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AgKBRQgFgDAAgHIABgMIAAgOIgDg7IgVgCQgPgBAAgOQAAgHAFgFQAEgEAHAAIAUACIgBgNIgBgMQAAgGAGgFQAFgDAGAAQARAAAAAdIAAAJIALgBQAOAAAEACQAKADAAALQAAAHgEAEQgGAFgHgBIgFAAIgGAAIgLABIACA9IAAAGIAAAHQABAbgSAAQgFgBgFgEg");
	this.shape_23.setTransform(206.8,285.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009900").s().p("AgOBVQgFgFAAgGIAAgVIAAgWIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAWIABAVQAAAGgFAFQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_24.setTransform(198,285);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AgiBZQgFAEgGAAQgGAAgEgEQgFgEAAgGIAAgJIABgJIAAiDQAAgJAEgGQAEgJAJAAQANAAAAAOIgBAFIAAAFIAAAsIAQgHQAIgCAGAAQAcAAARAUQAQASAAAaQAAAbgSATQgTAUgbAAQgQAAgPgGgAgMgCQgJADgJAHIAAAyQAPAHAMAAQAOAAAJgKQAKgKAAgQQAAgPgHgKQgJgJgOAAQgEAAgIADg");
	this.shape_25.setTransform(187.3,284.6);

	this.instance_6 = new lib.texttowhom("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(194.9,277,1,1,0,0,0,41.9,11.8);

	this.instance_7 = new lib.texttowhomfadein();
	this.instance_7.parent = this;
	this.instance_7.setTransform(278.8,167.6,0.884,0.884,0,0,0,41.9,16);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CC66").s().p("Ag8BLQABgGAEgFQAEgDAGAAIAQABQAKACAHAAQARAAAIgKQAIgKABgXQgGAGgHADQgIADgIAAQgXAAgPgPQgOgPAAgXQAAggAUgUQAUgUAhAAQALAAAIACQAIADAEAGQAPACABAPQgBAJgCANQgFAcgBAeQgBAlgLARQgQAXgmAAQgtAAgBgSgAgRg1QgKAMAAAUQAAANAFAIQAGAGAKAAQAJgBAKgJQAIgLACgLIAFgjIgIgDQgDgCgEABQgTgBgLANg");
	this.shape_26.setTransform(271.5,141.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CC66").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_27.setTransform(258.9,138.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CC66").s().p("AAhBYQgIAFgJACQgJABgIAAQgaAAgRgRQgSgRAAgaQAAggASgSQASgUAbAAQAJAAAHACQAHACAFAEQACgoACgPQACgOANAAQAHAAAEAEQAEAFAAAGQAAASgCAiQgDAhAAARQAAAqADAOIAAADQAAAHgFAEQgEAEgHAAQgIAAgEgIgAgXAFQgJAKAAAUQAAANAJAJQAKAJAMAAQAIAAAFgCQADgBAIgHIAEgDIAAgrQgEgHgGgDQgHgEgIAAQgRAAgIAJg");
	this.shape_28.setTransform(245.5,135.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CC66").s().p("Ag8BLQAAgHAFgDQAEgEAGgBIAQADQAJACAIAAQAQAAAJgLQAIgLABgWQgFAGgIADQgHADgJAAQgXAAgPgPQgOgPAAgXQAAggAUgTQAUgVAhAAQALAAAIADQAIADAEAFQAPABABARQgBAHgCAOQgFAbgBAeQgBAmgMARQgPAXgmAAQgtAAgBgSgAgRg0QgKAMAAASQAAAOAFAIQAFAFALAAQAIAAAKgKQAKgKABgKIAFgjIgIgEQgDgCgFAAQgSAAgLAOg");
	this.shape_29.setTransform(214.7,290.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CC66").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_30.setTransform(202.1,287.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CC66").s().p("AAhBYQgIAFgJACQgJABgIAAQgaAAgRgRQgSgRAAgaQAAggASgSQASgUAbAAQAJAAAHACQAHACAFAEQACgoACgPQACgOANAAQAHAAAEAEQAEAFAAAGQAAASgCAiQgDAhAAARQAAAqADAOIAAADQAAAHgFAEQgEAEgHAAQgIAAgEgIgAgXAFQgJAKAAAUQAAANAJAJQAKAJAMAAQAIAAAFgCQADgBAIgHIAEgDIAAgrQgEgHgGgDQgHgEgIAAQgRAAgIAJg");
	this.shape_31.setTransform(188.7,284.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0066FF").s().p("AggA9QgSgHAAgMQAAgMAOAAQAFAAAKADQALAEAGAAQAWAAAAgKQAAgFgQgIQgYgKgGgEQgRgMAAgRQAAgXAZgIQAPgFAcAAQANAAAFADQAIAEAAALQAAAVgLAAQgMAAgDgKIgJgBQgcABABAHQgBAFARAHQAXAMAIAFQARAMAAAPQAAAUgTALQgPAIgVAAQgPAAgNgFg");
	this.shape_32.setTransform(88.1,17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0066FF").s().p("AgKBcQgFgEAAgIIAAihQAAgGAFgFQAFgDAFAAQAHAAAFADQAEAFAAAGIAACcQAAAVgQAAQgGAAgEgEg");
	this.shape_33.setTransform(79,13.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0066FF").s().p("AguA9QgEgEABgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAZAAQAYAAgBAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgFAEQgEAFgHAAQgHAAgFgFg");
	this.shape_34.setTransform(70.3,17.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0066FF").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgFQAFgEAHgBQAHABAGAEQAFAFAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_35.setTransform(61.2,14.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0066FF").s().p("Ag7BLQgBgHAEgEQAFgDAHAAIAOACQAKABAIAAQAQAAAJgKQAIgLABgWQgGAGgHADQgHADgIAAQgYAAgOgPQgPgPAAgXQAAggATgTQAVgVAhAAQALAAAIADQAHADAGAFQAOABAAARQAAAHgCAOQgFAbgBAfQgBAlgMARQgPAXgmAAQguAAABgSgAgRg1QgKANAAASQAAAOAFAIQAGAFAKABQAIAAAKgLQAKgKABgLIAFgjIgIgDQgEgBgEAAQgSAAgLAMg");
	this.shape_36.setTransform(51.1,20.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgoAzQgTgPAAgbQAAgdAQgUQARgXAcAAQAUAAAOAHQASAIAAATQAAAMgPAKQgGAFgUAIIgmARQAFAGAIAEQAIADAJAAQAQgBALgGQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgTAAQgaAAgTgNgAgPgbQgIAHgEAOIAZgLQAQgHAJgGQgIgEgNAAQgKgBgHAIg");
	this.shape_37.setTransform(212.2,18.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgQA0IgoheIgBgGQAAgHAFgEQAGgEAGAAQAKAAAFAJQAGAOATAzIARgnIAKgZQAEgJAKAAQAGgBAGAFQAFAEAAAGQAAAFgTAqIgZA0QAAAFgEAFQgFADgFAAQgMAAgEgMg");
	this.shape_38.setTransform(200,18.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgEQAFgFAHgBQAHABAGAFQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_39.setTransform(190.9,16.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("Ag7BLQAAgHAEgEQAEgDAGAAIAQACQAKABAHAAQARAAAIgKQAIgLABgWQgGAGgHADQgIADgIAAQgXAAgPgPQgOgPAAgXQAAggAUgTQATgVAiAAQALAAAIADQAIADAEAFQAPACABAQQgBAHgCAOQgFAbgBAfQgBAlgLARQgQAXgmAAQgtAAAAgSgAgRg1QgKANAAASQAAAOAFAIQAGAFAKABQAJAAAKgLQAIgKACgKIAFgkIgIgDQgDgBgEAAQgTAAgLAMg");
	this.shape_40.setTransform(180.7,22);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00CC66").s().p("Ag7BLQAAgHADgEQAFgDAGAAIAQACQAKABAHAAQARAAAIgKQAIgLABgWQgGAGgHADQgIADgIAAQgXAAgPgPQgOgPAAgXQAAggAUgTQATgVAiAAQALAAAIADQAIADAEAFQAPABAAARQAAAHgCAOQgFAbgBAfQgBAlgLARQgQAXgmAAQgtAAAAgSgAgRg0QgKAMAAASQAAAOAFAIQAGAFAKABQAJAAAKgLQAIgKACgKIAFgkIgIgDQgDgBgEAAQgTAAgLANg");
	this.shape_41.setTransform(278.4,135.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009900").s().p("AgoAzQgTgPAAgbQAAgdAPgUQASgXAcAAQAVAAANAHQASAIAAATQAAAMgPAKQgGAFgUAIIgnARQAGAGAIAEQAIADAKAAQAPgBALgGQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgSAAQgcAAgSgNgAgQgbQgHAHgEAOIAagLQAOgHAKgGQgIgEgNAAQgKgBgIAIg");
	this.shape_42.setTransform(331.6,18.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009900").s().p("AgKBRQgFgEAAgGIAAgMIAAgOIgCg7IgVgCQgPgBAAgOQAAgGAEgGQAFgEAHAAIAUABIgBgMIAAgMQAAgGAEgFQAGgDAGAAQAQAAABAdIAAAJIALgBQAOAAAFACQAJADAAALQAAAHgFAEQgEAFgIgBIgFAAIgGAAIgLACIACA8IAAAGIABAHQgBAbgRAAQgFAAgFgFg");
	this.shape_43.setTransform(319.5,16.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009900").s().p("AgOBVQgFgEAAgHIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAHgFAEQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgEQAFgFAHgBQAHABAGAFQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_44.setTransform(310.7,16.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("AgiBZQgFAEgFAAQgHAAgFgEQgEgEAAgGIABgJIAAgJIAAiDQAAgJADgGQAFgJAJAAQAMAAAAAOIAAAFIgBAFIAAAsIARgHQAIgCAHAAQAbAAARAUQAQASAAAaQAAAbgTATQgSAUgbAAQgQAAgPgGgAgNgCQgHADgLAHIAAAyQAQAHAMAAQAOAAAJgKQAKgKAAgQQAAgPgIgKQgIgJgNAAQgGAAgIADg");
	this.shape_45.setTransform(299.9,15.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgNAMQgFgGAAgGQAAgFAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAFQAAAGgGAGQgFAEgIAAQgHAAgGgEg");
	this.shape_46.setTransform(375.6,293.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009900").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAdAAQATAAAOAGQASAKAAARQAAANgOALQgHAEgUAIIgmARQAFAGAIADQAIAEAJAAQAQAAALgHQAKgGAGAAQAMAAAAAMQAAANgUAJQgQAHgTAAQgbAAgSgOgAgPgbQgIAHgFAPIAagMQAPgHAKgGQgIgFgMABQgLgBgHAIg");
	this.shape_47.setTransform(363.6,287.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#009900").s().p("AgKBRQgFgDAAgHIABgMIAAgOIgCg7IgXgCQgOgBAAgOQAAgHAEgFQAFgEAHAAIAUACIgBgNIgBgMQAAgGAGgFQAEgDAHAAQAQAAAAAdIAAAJIAMgBQAOAAAEACQAKADAAALQAAAHgFAEQgEAFgHgBIgGAAIgGAAIgLABIACA9IAAAGIAAAHQAAAbgQAAQgGgBgFgEg");
	this.shape_48.setTransform(351.5,285.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009900").s().p("AgiBZQgEAEgHAAQgGAAgEgEQgFgEAAgGIABgJIAAgJIAAiDQAAgJAEgGQAEgJAJAAQANAAAAAOIgBAFIAAAFIAAAsIAQgHQAIgCAGAAQAcAAARAUQAQASAAAaQAAAbgTATQgSAUgbAAQgQAAgPgGgAgMgCQgJADgJAHIAAAyQAPAHAMAAQAOAAAKgKQAJgKAAgQQAAgPgHgKQgJgJgOAAQgFAAgHADg");
	this.shape_49.setTransform(331.9,284.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#009900").s().p("AAcA2IgTAIQgIACgFAAQgcAAgOgOQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAIAAAKQAAADgDAEIgBAMIgBAQQAAAVADAJIAFANIAFALQAAAHgFAEQgEADgHAAQgFABgMgLgAgQgXQgMANAAAPQAAAPAGAIQAGAIALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_50.setTransform(307.8,287.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00CC66").s().p("Ag8BLQABgHAEgDQAEgEAGgBIAQADQAKACAHAAQARAAAIgLQAIgLABgWQgGAGgHADQgIADgIAAQgXAAgPgPQgOgPAAgXQAAggAUgTQAUgVAhAAQALAAAIADQAIADAEAFQAPABABARQgBAHgCAOQgFAbgBAeQgBAmgLARQgQAXgmAAQgtAAgBgSgAgRg0QgKAMAAASQAAAOAFAIQAFAFALAAQAJAAAKgKQAIgKACgKIAFgjIgIgEQgDgCgEAAQgTAAgLAOg");
	this.shape_51.setTransform(284.1,290.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00CC66").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAcAAQAVAAANAGQASAKAAARQAAANgPALQgGAEgUAIIgmARQAFAGAIADQAIAEAKAAQAPAAALgHQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgSAAQgcAAgSgOgAgQgbQgHAHgEAPIAagMQAOgHAKgGQgIgFgNABQgKgBgIAIg");
	this.shape_52.setTransform(234,287.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00CC66").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFAAQgNAAgJAMQgGAGgJAQQAAArgEAIQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhNIABgDIAAgTIgBgKIgBgLQAAgHAFgFQAFgDAHAAQALgBAEAMQACAIAAAPIAAAXIgBAXQAJgIAJgFQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXQABANADAKIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_53.setTransform(220.7,284.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00CC66").s().p("AgKBRQgFgDAAgHIAAgMIAAgOIgCg7IgVgCQgPgBAAgOQAAgHAFgFQAEgEAHAAIAUACIgBgNIAAgMQAAgGAEgFQAGgDAGAAQARAAAAAdIAAAJIALgBQAOAAAEACQAKADAAALQAAAHgEAEQgFAFgIgBIgFAAIgGAAIgLABIACA9IAAAGIAAAHQAAAbgRAAQgFgBgFgEg");
	this.shape_54.setTransform(208,285.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0066FF").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAHAAQANAAADAOQATgQAaAAQAXAAABAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgGAAgFgFg");
	this.shape_55.setTransform(113.1,287.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0066FF").s().p("Ag7BLQAAgHADgDQAFgEAGgBIAQADQAKACAHAAQARAAAIgLQAIgLABgWQgGAGgHADQgIADgIAAQgXAAgPgPQgOgPAAgXQAAggAUgTQATgVAiAAQALAAAIADQAIADAEAFQAPABABARQgBAHgCAOQgFAbgBAeQgBAmgLARQgQAXgmAAQgtAAAAgSgAgRg0QgKAMAAASQAAAOAFAIQAGAFAKAAQAJAAAKgKQAIgKACgKIAFgjIgIgEQgDgCgEAAQgTAAgLAOg");
	this.shape_56.setTransform(93.9,290.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0066FF").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAcAAQAVAAANAGQASAKAAARQAAANgOALQgHAEgUAIIgnARQAHAGAHADQAIAEAKAAQAPAAALgHQAKgGAFAAQANAAAAAMQAAANgTAJQgRAHgSAAQgbAAgSgOgAgQgbQgHAHgEAPIAagMQAPgHAJgGQgIgFgNABQgJgBgJAIg");
	this.shape_57.setTransform(70.4,287.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0066FF").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFAAQgNAAgJAMQgGAGgJAQQAAArgEAIQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhNIABgDIAAgTIgBgKIgBgLQAAgHAFgFQAFgDAHAAQALgBAEAMQACAIAAAPIAAAXIgBAXQAJgIAJgFQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXIAEAXIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_58.setTransform(57.1,284.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0066FF").s().p("AgKBVQgGgEAAgHIABgFIAAgFIAAgRIgBgQQAAgQgDgaQgDgfAAgLIgGAAQgaAAgQgEQgNgDAAgMQAAgGAFgFQAFgGAIABIASACIATABIAVAAIAVAAIAaABIAbABQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAIgcgCIgdgBIADAwQADAdAAASIABAMIAAALQAAAJgDAHQgFAJgJAAQgFAAgFgEg");
	this.shape_59.setTransform(41.7,284.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.shape_9},{t:this.shape_8,p:{x:190.9}},{t:this.shape_7},{t:this.shape_6,p:{x:208.7}},{t:this.shape_5,p:{x:217.8}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},24).to({state:[{t:this.instance_3},{t:this.instance_2}]},22).to({state:[{t:this.shape_17,p:{x:180.6}},{t:this.shape_16,p:{x:190.7}},{t:this.shape_15,p:{x:199.9}},{t:this.shape_14,p:{x:212}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},22).to({state:[{t:this.instance_5},{t:this.instance_4}]},21).to({state:[{t:this.shape_25},{t:this.shape_24,p:{x:198}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},25).to({state:[{t:this.instance_7},{t:this.instance_6}]},25).to({state:[{t:this.shape_31,p:{x:188.7}},{t:this.shape_30,p:{x:202.1}},{t:this.shape_29},{t:this.shape_28,p:{x:245.5,y:135.5}},{t:this.shape_27,p:{x:258.9,y:138.9}},{t:this.shape_26}]},25).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_8,p:{x:104}},{t:this.shape_55},{t:this.shape_6,p:{x:121.8}},{t:this.shape_5,p:{x:130.9}},{t:this.shape_17,p:{x:153.6}},{t:this.shape_16,p:{x:163.7}},{t:this.shape_15,p:{x:172.9}},{t:this.shape_14,p:{x:185}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_31,p:{x:258.1}},{t:this.shape_30,p:{x:271.5}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_24,p:{x:342.7}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_28,p:{x:252.3,y:129}},{t:this.shape_27,p:{x:265.7,y:132.4}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},23).wait(77));

	// girls
	this.instance_8 = new lib.girlswait("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(77.1,65.8,0.706,0.706,0,0,0,51.1,48);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({_off:false},0).wait(240));

	// Give
	this.instance_9 = new lib.girlsgive("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(205.4,82.6,0.715,0.796,0,0,0,59.6,48.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(72).to({_off:false},0).wait(196));

	// Bite
	this.instance_10 = new lib.doggift("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(323.9,81.6,1,1,0,0,0,33.7,18.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(118).to({_off:false},0).wait(150));

	// dog
	this.instance_11 = new lib.dog("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(274.4,175.1,1,1,0,0,0,32.6,21.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(168).to({_off:false},0).wait(100));

	// static text
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00CC66").s().p("AgOA2QgOgHgLgMQgQgSgCgSQgCgVARgQQAUgRAWgCQAYgCARATQAMANAEANQAEAPgLALQgJAHgPgDIgXgJIgigPQgBAHADAHQADAGAGAHQAJAKAKAEQAJADADADQAHAIgIAHQgEAEgGAAQgGAAgIgEgAgNgbIAWALQAOAGAJADQgCgIgHgJQgHgHgJAAIgDAAQgHAAgKAEg");
	this.shape_60.setTransform(330,236.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00CC66").s().p("AgOBUQgHgIAFgIQAFgIAKgLQAIgMAHgGIAGgEIAGgGIAGgFQAEgFgDgDQgIgIgNAAQgHAAgQADQgbAZgIACQgKADgFgHQgEgEAAgGQAAgGAEgDIAFgDQACgBATgQIAygtIADgCIAMgLIAHgHIAGgHQAEgEAGABQAFABAEAEQAHAIgFAKQgEAFgJAJIgQANIgPANQAKAAAJAEQAIAEAGAHQAMAMgCANQgBAJgLALIgSASQgLAMgDACIgMARIgDACQgEAEgFAAQgFgCgEgEg");
	this.shape_61.setTransform(321.9,225.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00CC66").s().p("Ag1A0QgEgFAAgFQAAgGAEgEIAIgHIAJgHIAlgjIgLgQQgHgLAIgHQAFgEAFAAQAFAAAEAFIALANIAIgHIAHgHQAEgEAGAAQAFABAEAEQAKAMgTARIgGAFIAIAHQAIAJABADQADAIgHAHQgEAEgGgBQgFAAgEgFIgDgDIgEgEIgHgHIgmAlIgEAEIgEAEQgKAJgIAAQgFAAgEgEg");
	this.shape_62.setTransform(315.8,217.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0066FF").s().p("AgOA2QgOgHgLgMQgQgSgCgSQgCgVARgQQAUgRAWgCQAYgCARATQAMANAEANQAEAPgLALQgJAHgPgDIgXgJIgigPQgBAHADAHQADAGAGAHQAJAKAKAEQAJADADADQAHAIgIAHQgEAEgGAAQgGAAgIgEgAgNgbIAWALQAOAGAJADQgCgIgHgJQgHgHgJAAIgDAAQgHAAgKAEg");
	this.shape_63.setTransform(102.9,139.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0066FF").s().p("AgOBUQgHgIAFgIQAFgIAKgLQAIgMAHgGIAGgEIAGgGIAGgFQAEgFgDgDQgIgIgNAAQgHAAgQADQgbAZgIACQgKADgFgHQgEgEAAgGQAAgGAEgDIAFgDQACgBATgQIAygtIADgCIAMgLIAHgHIAGgHQAEgEAGABQAFABAEAEQAHAIgFAKQgEAFgJAJIgQANIgPANQAKAAAJAEQAIAEAGAHQAMAMgCANQgBAJgLALIgSASQgLAMgDACIgMARIgDACQgEAEgFAAQgFgCgEgEg");
	this.shape_64.setTransform(94.8,128.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0066FF").s().p("AhLBKQgEgEAAgGQAAgGAEgEIAEgCIADgDIALgKIAKgKQAKgJAQgRIAZgaIgEgEQgOgRgGgMQgGgKAIgHQAEgEAFAAQAHgBADAGIAKANIAKANIANAOIAMAOIAPASIAPARQAEAFAAAGQgBAFgEAEQgEAEgGAAQgGgBgEgEIgQgUIgPgSIgdAdIgdAeIgIAHIgHAHQgFAFgHACIgEABQgGAAgEgFg");
	this.shape_65.setTransform(89.8,116.4);

	this.instance_12 = new lib.textdirectobjectfadein();
	this.instance_12.parent = this;
	this.instance_12.setTransform(330.7,-5.3,1,1,0,0,0,58.9,13.2);

	this.instance_13 = new lib.textverbfadein();
	this.instance_13.parent = this;
	this.instance_13.setTransform(206,-5.3,1,1,0,0,0,19.9,13.2);

	this.instance_14 = new lib.textindirectobjectfadein();
	this.instance_14.parent = this;
	this.instance_14.setTransform(229.3,242.1,1,1,0,0,0,68.3,13.2);

	this.instance_15 = new lib.textsubjectfadein();
	this.instance_15.parent = this;
	this.instance_15.setTransform(65.2,-5.3,1,1,0,0,0,34.5,13.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(0.5,1,1).p("ABVAvQAIABAGAEQAIAEAHAGQAHAGAEAIQADAJABAIQACAKgEAIQgEAIgFAIQgEAEgCgCQgFgHgGgHQgGgIgHgFQgHgGgIgIQgDAHACAJQADAJACAJQACAIAIAFQAEADgBAAQgJAEgIgFQgHgFgIgFQgHgGgGgHQgHgGgCgIQgDgIAAgJQAAgKAEgHQAEgIAKgEQAHgEAJgCQAJgDAJACQAIABAEAFQABABABADAgDg+QgCgEgEgEQgGgGgGgEQgHgEgGgGQgGgFgFgEQgFgEgEgEQgMgJgJgLQgFgGgFgGQgHAHgGAIQgBAAgBABAhlh4QABABACACQAGAEAFAKQAEAHAEAFQAEADACAEQABAEADACQgHADgIAGQgHAEgHAEQgKAFgJAHQgGAEgFADQAIAFAIAIQAGAGAGAHQAFAFAEgJQAFgMAKgJQAKgKAIgMQADgEADgDQALAHAIAHQAIAHAHAGQABABACACQAAAAAAgBQAIgJAGgLAAhggIAAAAQgBgBgBgCQgIgHgGgFIAAgBQgBAAgBAAQgIADgHAGQgHAFgIAFQgIAEgIAGQgHAFgGAHQgGAHgHADQgCABgBABQAHAKAIAKQACADAEADQADgIAHgFQAGgFAHgBQAEgBAFACQAEACAAAEQADAMgHAHQgFAEgGADQAFADADAGQACAFACAGQAAABABACQACgEACgCQAEgFAHgDQAFgCAGgCQAHgEAEgHQADgIAAgKQAAgGgCgFQgEgJgLgDQgMgEgKABQABgDACgCQAFgGAIgFQAKgHALgEgABtBhQABgHgDgIQgDgJgHgDQgFgDgFACQgDABgBAEQAKAGAJALQADAEAEACg");
	this.shape_66.setTransform(311.5,220.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0000FF").s().p("ABJCJIgPgKIgNgNQgHgGgCgIQgDgIAAgJQAAgKAEgHQAEgIAKgEQAHgEAJgCQAJgDAJACQAIABAEAFIACgBIAPAKQAHAGAEAIQADAJABAIQACAKgEAIQgEAIgFAIQgEAEgCgCIgLgOQgGgIgHgFIgPgOQgDAHACAJIAFASQACAIAIAFQABABAAAAQABABAAAAQABABAAAAQAAAAAAAAIgIACQgFAAgEgDgABXBFQgDABgBAEQAKAGAJALQADAEAEACQABgHgDgIQgDgJgHgDQgDgCgDAAIgEABgABjA5IgCgEIACAEgAgGBBIgEgLQgDgGgFgDQAGgDAFgEQAHgHgDgMQAAgEgEgCQgFgCgEABQgHABgGAFQgHAFgDAIIgGgGIgPgUIADgCQAHgDAGgHQAGgHAHgFQAIgGAIgEIAPgKQAHgGAIgDIACAAIAAABIAOAMIACADQgLAEgKAHQgIAFgFAGIgDAFQAKgBAMAEQALADAEAJQACAFAAAGQAAAKgDAIQgEAHgHAEIgLAEQgHADgEAFIgEAGIgBgDgAhkgQIgMgNQgIgIgIgFIALgHIATgMIAOgIQAIgGAHgDQgDgCgBgEQgCgEgEgDQgEgFgEgHQgFgKgGgEIgDgDIABgDIACgBIANgPIAKAMQAJALAMAJIAJAIIALAJIANAKQAGAEAGAGIAGAIIACABQgGALgIAJIgDgCIgPgNQgIgHgLgHIgGAHQgIAMgKAKQgKAJgFAMQgDAGgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_67.setTransform(311.5,220.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(0.5,1,1).p("AgEhLQgDgFgEgFQgHgHgHgFQgIgFgIgHQgGgGgHgGQgFgFgFgEQgOgLgLgNQgGgHgFgHQgJAJgHAIQgBABgBABAh3iSQACACABABQAHAHAGALQAEAIAGAGQAEAEACAFQACAFAEACQgJAEgKAHQgHAFgIAEQgMAHgLAIQgGAFgHAEQAKAGAJAKQAHAIAHAHQAFAGAGgLQAGgOALgLQAMgNAJgNQAEgFAEgFQAMAJAJAIQAKAJAJAIQABABACACQAAAAAAgBQAKgKAGgOAAmgnQgMAGgMAHQgKAHgFAHQgDACgCAEQANgCANAFQANAEAFALQADAGAAAHQABAMgFAKQgEAJgJAEQgGADgHADQgIADgFAGQgDADgCAEQAAgBgBgCQgBgIgEgGQgDgHgFgEQAHgCAFgGQAJgJgEgOQgBgFgEgCQgFgDgGABQgIACgHAFQgIAHgEAKQgDgEgEgEQgJgMgJgMQACgCACgBQAJgDAGgJQAHgIAJgHQAJgHAKgFQAKgFAIgHQAHgHAKgDQABAAABAAQABAAAAAAQAHAHAJAJQABACACAAQgBAAAAABgABkA4QgLgCgLAEQgKADgJAEQgLAGgFAJQgFAJAAALQABALADAKQADAJAHAIQAHAJAJAGQAJAHAJAGQAJAGAKgFQABAAgEgDQgJgGgDgKQgCgLgDgLQgDgLAEgJQAJAKAIAHQAJAHAGAJQAHAJAGAIQADADAEgGQAGgIAFgLQAEgKgBgLQgCgLgEgKQgEgKgIgHQgJgHgJgGQgHgEgJgCgABhBaQAMAHALANQADAFAEADQACgJgDgKQgEgKgJgFQgFgCgGABQgDABgCAGgAB0BEQgBgCgBgCQgFgFgJgD");
	this.shape_68.setTransform(89.1,126.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0000FF").s().p("ABWCmIgSgNQgJgGgHgJQgHgIgDgJQgDgKgBgLQAAgLAFgJQAFgJALgGQAJgEAKgDQALgEALACQAJADAFAFIACAEIgCgEIACgCIASANQAIAHAEAKQAEAKACALQABALgEAKQgFALgGAIQgEAGgDgDIgNgRQgGgJgJgHIgRgRQgEAJADALIAFAWQADAKAJAGQABABABAAQABABAAAAQAAABABAAQAAAAgBAAQgEACgEAAQgGAAgFgDgABmBTQgDABgCAGQAMAHALANIAHAIQACgJgDgKQgEgKgJgFQgDgBgDAAIgFAAgAgIBPQgBgIgEgGQgDgHgFgEQAHgCAFgGQAJgJgEgOQgBgFgEgCQgFgDgGABQgIACgHAFQgIAHgEAKIgHgIIgSgYIAEgDQAJgDAGgJQAHgIAJgHQAJgHAKgFQAKgFAIgHQAHgHAKgDIACAAIABAAIAQAQIACADQgMAGgMAHQgKAHgFAHIgFAGQANgCANAFQANAEAFALQADAGAAAHQABAMgFAKQgEAJgJAEIgNAGQgIADgFAGQgDADgCAEIgBgDgAh2gUIgOgPQgJgKgKgGIANgJQALgIAMgHIAPgJIATgLQgEgCgCgFQgCgFgEgEQgGgGgEgIQgGgLgHgHIgDgDIABgDIACgCQAHgIAJgJIALAOQALANAOALIAKAJIANAMIAQAMQAHAFAHAHIAHAKIACABQgGAOgKAKIgDgCIgTgRIgVgRIgIAKQgJANgMANQgLALgGAOQgEAHgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_69.setTransform(89.1,126.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},164).wait(104));

	// lines
	this.instance_16 = new lib.letterA("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(355.5,128.9,1,1,0,0,0,12.9,14.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(3,1,1).p("AImsuIAAE4Ix5AAIAAlfA4Qn2IlCAAApTnwIAAgGIgEAAIAEAGIAAEVAwKAsIoGoiApXn2Iu5AAAMRH4IFKFeASsHwIw7AIIrEvoAImn2IUtAAARbnuIHVJH");
	this.shape_70.setTransform(205.5,154.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.instance_16}]}).wait(268));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,-24.5,378,279.7);


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
		
		 window.open ("indirect_finish.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("indirect_scene3.html","_self");
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
(lib.indirect_scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4repeat:250});

	// timeline functions:
	this.frame_0 = function() {
		playSound("girlsgivedogbite");
	}
	this.frame_249 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_270 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(249).call(this.frame_249).wait(21).call(this.frame_270).wait(1));

	// navigation
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(271));

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

	this.instance = new lib.theGirlsGiveTheDogABite();
	this.instance.parent = this;
	this.instance.setTransform(281.3,176.8,1,1,0,0,0,210.2,98.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(271));

	// Layer 5
	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.4,534,399.9);
// library properties:
lib.properties = {
	id: '7DCDC9CD6E61C846AB5254E96FD3FB7A',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmInd.mp3", id:"bgmInd"},
		{src:"sounds/flickering.mp3", id:"flickering"},
		{src:"sounds/girlsgivedogbite.mp3", id:"girlsgivedogbite"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/quick_pad_chord.mp3", id:"quick_pad_chord"},
		{src:"sounds/word_appears.mp3", id:"word_appears"}
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
an.compositions['7DCDC9CD6E61C846AB5254E96FD3FB7A'] = {
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