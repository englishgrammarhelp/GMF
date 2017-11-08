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
	this.shape.graphics.f().s("#009999").ss(3,1,1).p("EgnNgXjMBObAAAMAAAAvHMhObAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCFFFF","#FEFDB4"],[0,1],0,-153.2,0,153.3).s().p("EgnNAXkMAAAgvHMBObAAAMAAAAvHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.5,-152.3,505,304.7);


(lib.tobeblondeblinkstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAvIgKgLIgBglIA4gTIATAAIgIARIAYAjQgUAggYAAQgRAAgTgRgAA4gTIgGgdIAIgPIApALIgBAfIgJAHg");
	this.shape.setTransform(-1.1,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah6gQIAEgSQALgKALgHIAJgEIAEgCQAZgJAaAKIhMAqIgKAvIA6AAIg5ATIACAlIABATQgVg9ANg/gAgxAyIAIgRIgTAAIAAgKIBCgTIAAgJIASAAIABgTIAUADQAfAAAVgWIADgrIgbgFIgmAwIAAgTIAcgdIAAgKIAcgGQAKABAJAHIAQAiQADAfgCAiQgBAMgEAFQgQAHgOAQIgEADIgzAAIgCgBIAwAAIgFgLIABgeIgogKIgIANIgiAJIADAOQAFAmgfAVgAg8Ahg");
	this.shape_1.setTransform(0.8,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhgCCIgbghQgQguAIgqQgCgYAAgbIAAgEIAugVQgMAGgLALIgEASQgMA/AVA9IgCgTIAKALQAuAoAig3QAegUgGgnIgCgMIAjgJIAFAcIAhAFIAJgHIAEALIgwAAIACABIgCAAQgNAcgbAZQgHATgPAIIgHAKQgaANgkAAIgIAAgAhuAQIAKgvIBNgqQgbgKgZAKIATgJIAsgHIAMgKIBIgSIAAAJIgdAdIAAATIAmgwIAbAFIgCAsQgWAWgfgBIgUgDIgBAUIgSAAIAAAJIhCASIAAAKgAB3h0QgJgGgKgCIAbgFQAFAWACAZg");
	this.shape_2.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobeblondeblinkstill, new cjs.Rectangle(-13.5,-13,27.1,26.1), null);


(lib.scene3blondestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AgUATQAFgEADgGQACgEAAgFIAAgIIABAAIABgBIAEgEIAFgGIAUgDIgCADQgBADAAADIAAACIgOAUIgHAFQgHAEgGAFIgEgEg");
	this.shape.setTransform(-0.7,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6FFFF").s().p("AgFAAIALAAIgGAAg");
	this.shape_1.setTransform(-67.9,-47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAaIgCgEQgBgGAGgEIgCgJIgBgKQgFgDgCgFIAAgCIAAgEQAAgFAEgCIACAAIADgBIAAAAQAIAAAFADQAHAFgBANIABAIQAHAWgTAHIgDABQgEAAgDgEg");
	this.shape_2.setTransform(-23.8,-74.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AATFAIBRgEIgMARQgigJgjgEgAhsDGQgdgrgqgcIAHgBIgBAEQAJAKAKgIIAKgIIASgBIgBgBQgCgHABgHQAKgKAJgMQAJgMgDgJIATACIAAABQAHAHAKABIAeAEIASADIAMAFQAFACAEAEQARAAASACQBAAQBDgCQAkAAAUgYIAAgBIAKAAIAAACIgBAAQgEACABAFQAMAzgFA1IgCAEQgPAOgLASIgFAIQgOAGgCAMQgPAPgVAIIgBAAIgMACQhOALhMAFIgFAAQgygugmg5gAivg5QgEgBgEgCQgEgDgCgEIAAAAQgGgCgDgFIgBAAQgbgZgJgmQgFgVAFgVQACgHAFgGIAXgXQACgDAEAAQAUgCAVAAIADAAQAUAFANgMQAKgKANgJIAegTIAUgMQAHgDAHgGQAKgHALgDQAjgKAlAAIALgBQALgHAIgKIAFgGIACAAIACgCIAAAAQAbgBgDAaQgCAPgFAOIgIAWQgOAfgSAdQgUAwgmAlQgIAHgNgBQgGAAgEADIgJAEQgQAJgRAEQgSAFgRAIIgdANIgGACIgGABIgIAAQgRAAgRgBg");
	this.shape_3.setTransform(13.5,-10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AkMD9QALABACgJQAGgBADgKIAIgVQAQgqgPgrQgEgLgGgHQgIgnAqApQADACAAAFIAAAhQACAsAMgmQAAgBAFAAQAHAKAOAAQALAAAOgFQACAAAAgFIATgPIADgCIACAFQACADAAACQgDAYgRASIgRALQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgFAAgTAUIgKAGQgTANgBAVQgKACgKAAQgUAAgTgJgACaB+QgUgMgdgFQAAgFgCgCQg2g4gZhSIgDgKIgCgHIgBgFIgBgEIgQgiIgTgrIAAgKQAGgZgaAGQgEAAgBgCQgFgLgFgJQgGgKgHgHIAAgJIAAgEQgEgMgjgNIAUgIIAJgCQAagLAGAJQACACAEAAQAmAGAdAMQAEACAFAAQACAKAHAFQAEACAGABIAKABQAHANAJANIAKAOQADADAAAFQAHAnAPAhQANAbASAXIAIAKQAbAdAmASQADACAFAAQAiAWgfAdQgDACAAAFQADAQASgOQADgCAFAAIAKAAQACANASgBIAAAAIgBACQgRAPgVALIgTAMIgUABIAAgFIAAgKIgJABIgnAJIAAAJQgFAAgEgCgAEWAqQAFAAACgCQACgCABgEIAcADIAAABQgEAIACAEIgBADIgBABIAAACIgGAHQgFADgEAAQgLAAgIgYgAkcApQgBgHgGgHQgFgFgEgGQgJgPgBgSIAAgIQgCgKgDgJIADgCQALgKgFgaIAAgJIAAgFIAAgFQAEgFADgGQACgDAAgFQAFAAACgDQADgCAAgFQATgTARgVQACgDAAgFQAjAEghATQgCABAAAFQAAAFgCACQgRARgTAOIAAAKIAAAFIAAAFIgKAAQgCBBAhggIAAABQAAAOARAFQgCAMACALQgFAMgBAMQgGAJgEAKQgFAJgHAIIgBABIgGgFg");
	this.shape_4.setTransform(-9.5,-71.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("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");
	this.shape_5.setTransform(-0.9,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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");
	this.shape_6.setTransform(-0.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene3blondestill, new cjs.Rectangle(-72.4,-100.9,143.4,202), null);


(lib.Scene3Yes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBUQgEgFAAgEQAAgEADgDQADgDAEAAQADAAAEAGQAEAFAAAEQAAAEgDADQgDADgEAAQgDAAgEgGgAgHAnIAAgNIAAgNIAAgtIAAgvQAAgKAJAAQAJAAAAAKIAAB2QAAAKgJAAQgJAAAAgKg");
	this.shape.setTransform(10.7,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGBUQgEgFAAgEQAAgEADgDQADgDAEAAQADAAAEAGQAEAFAAAEQAAAEgDADQgDADgEAAQgDAAgEgGgAgHAnIAAgNIAAgNIAAgtIAAgvQAAgKAJAAQAJAAAAAKIAAB2QAAAKgJAAQgJAAAAgKg");
	this.shape_1.setTransform(5.4,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_2.setTransform(-4.4,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgQIAAgRIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADADQANgDALgBQAMgCAJAAQAagBAPAHQAIACAAAIQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAGIABAKIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAXADAEQADADAOABIATAAIAUgBIAHgBIAGgBQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_3.setTransform(-18.7,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBSQgEgCAAgGQAAgDAKgTIAOgZQgUgYgFgNQgFgNgLgQIgTgcIgBgGQAAgFADgDQAEgEAEABQAFAAAEAEIAIAOIAPAXQAIANAFALQADAKALAOIAZg7IALgXQADgIAHABQAFAAADACQADAEAAAFQAAAEgFALIgHAMIgTAuQgKAYgKATIgNAZIgFAMQgEAFgGABQgEAAgDgEg");
	this.shape_4.setTransform(-33.3,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("ABsjOQgcgVgigSQgigTgngDQgogDgnAIQgmAHgmADQgiAEggAIQgnAJgiASQggARgdAYQgfAZgRAkQgRAigJAkQgJAkAHAlQAFAkAMAkQAMAiAdAcQAbAaAjASQAZAMAaAJQAkANAkAJQAkAJAnAEQAmAFAogDQAmgDAkgKQAigJAcgRQAggVAcgWQAdgXAkgIQAlgKAnAAQAlgBAkAGQAnAHAmgKQAVgGAQgEQgjgPgggTQgZgOgdgLQghgNgjgNQgigOgSggQgHgKgEgOQgKgkgJglQgJgjgXgeQgXgcgcgWg");
	this.shape_5.setTransform(-1.9,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiMEKQgngEgkgJQgkgJgkgNQgagJgZgMQgjgSgbgaQgdgcgMgiQgMgkgFgkQgHglAJgkQAJgkARgiQARgkAfgZQAdgYAggRQAigSAngJQAggIAigEQAmgDAmgHQAngIAoADQAnADAiATQAiASAcAVQAcAWAXAcQAXAeAJAjQAJAlAKAkQAEAOAHAKQASAgAiAOIBEAaQAdALAZAOQAgATAjAPIglAKQgmAKgngHQgkgGglABQgnAAglAKQgkAIgdAXQgcAWggAVQgcARgiAJQgkAKgmADIgfABQgYAAgXgDg");
	this.shape_6.setTransform(-1.9,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene3Yes, new cjs.Rectangle(-49.1,-17.6,94.4,55.8), null);


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


(lib.tobeblondeblink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tobeblondeblinkstill();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiNBxQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgDgFgLAAQgDgDABgEIABgFQALgFAMgBQAJgBAJACIABAAQgPg2ALg3IAEgSQALgKAMgHIAJgEIADgBQAZgKAbAKIgDACQAFADADAIIABACIAAADIAAACIACADIACACQgCAPAEANIABAHIACACIABACIAAADIAAACQAHAIAAAKIAAAHQgQASgYAHIgEAFIgDAFQgTAKgNARIgGACIgEACIgCACIgBACIgBACQgOAGgNABIgKABIgEAAgAhrgTIgFAYQgGAHAAALQABAgACAfQAWgQARgRQARgIAKgQQAKgJALAHIADgBQgNgcgCgfIgBgIIgFgFIgDgCIAAgDgAAmAmIgCgBIAsAAIALABIgBAAgAB4AaQgoAAgogJQgIgBgEgJIAAgHIAAgEQADgGAHAAQgGgWABgXIABgFIACgBIAAgGIAdgdIAAgJIAcgHQAKABAJAHIAPAiQACATAAAVQgBgIgEgHQgIgTgQgIIABgTIgbgFIgUAaQgGAEgFAFIACABIACACQACAUAFAUIABAFQAlADAmAJIARADQAKADAEAHIAAAFIgBAFQgIACgHgCIgCACIgCACIgRAAIgEAAg");
	this.shape.setTransform(0.6,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhhCCIgYgdQANgCAOgFIAAgCIACgCIABgDIAEgCIAGgBQAOgSATgJIADgFIADgFQAYgHAQgSIAAgIQAAgJgGgHIAAgDIAAgCIgCgDIgCgCIgBgHQgEgOACgOIgCgDIgBgCIAAgDIAAgCIgCgDQgCgIgGgDIADgCQgbgKgYAKIATgJIArgHIAOgKIBGgSIAAAJIgcAdIAAAGIgDACIgBAFQgBAXAGAWQgHAAgDAFIAAAFIAAAIQAEAHAJACQAnAJApAAIgCADQgEAFgFADIgTAAIgKAAIgsAAIACABIgCAAQgNAcgbAZQgHATgPAIIgHAKQgbANgkAAIgHAAgAiDBLQgHgiAGggQgCgYAAgbIAAgEIAtgVQgLAGgLALIgEASQgLA2APA2IgCABQgJgCgJAAgAhxAMQAAgLAHgHIAFgZIA5gfIABACIADADIAEAFIABAHQADAgANAbIgDABQgLgGgKAJQgKAPgRAIQgSASgVAPQgDgfgBgfgAA9gZIgBgFQgGgTgBgVIgCgCIgCgBQAEgFAGgEIAVgaIAbAFIgBAUQAPAHAJATQADAHACAIIAAAGQACAMgCALQglgIglgEgAB1h0QgJgGgKgCIAbgFQAGAWACAZg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},14).to({state:[{t:this.shape_1},{t:this.shape}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-13,27.1,26.1);


(lib.scene3redheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Scene3Yes();
	this.instance.parent = this;
	this.instance.setTransform(-61.4,-75.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ABHBdQgKgIgKgIQgggagdgjQgVgYgPgdAhGhcQAKAdANAa");
	this.shape.setTransform(-12.6,-51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AjMnBQgBAPgCAPQgEAUAEASQAEAQALAOQAHAHALgCQAPgJAPgNQAPgNANgPQANgOALgRQAKgPAJgQQAKgRAKgPQAMgRAJgOQAMgOANgOQANgNALgOQAMgNAKgOQAFgHAIgGQADgDAEgCQAGgHAHgHQAMgPAQgLQAPgKANgNQANgNAKgMQAMgQARgKQAQgLAQgLQAQgLAQgKQAQgKAOgMQAPgNAQgMQAOgMAOgLQAAgBABgBQAEgPAJgOQAJgQAMgNQALgMAKgNQAKgLANgHQACgBADgBQAJgLAJgNQAIgNAIgSQAHgRAEgSQAFgVAOgGQARgIAHAVQAGASgEATQgDASgKARQgEAHgEAGQgGAHgHAFQAHgEAHgDQAGgCAGgCQANACAJAJQACACACACQANgJATgBQAJgBAJAAQAEABAEABQARAEASACQATACAdAEQAcAEADALQADALAEALQgGgDgGgBQgSgDgUgBQgUgCg0AHQgGgEgIACAINu8QALAMAEAPAHZvAQgBABgBAAQgKAHgLAGALDtXQAIAIgOAFQgSAFgUAAQgSgBgTgDQgSgDgUAAQgUAAgTAAQgUAAgSAFQgRAFgQAJQgOAJgVACQgRABgUADQgFAAgEABQgCAAgCABQgNALgMALQgNALgPALQgMAJgLAKQgBABgCACQAAAAAAABQgCABgBABQgJAHgIAHQgPANgPAPQgMALgMAMQgNANgLAOQgKAMgLANQgKAMgKALQgIAHgEAIQgCACgBACQgBABgBABQgLALgJAMQgMAPgMAOQgNAQgPAMQgOAMgPALQgOAMgOAOQgNANgKAPQgKAQgMAQQgLAQgJAPQAAABgBABQgBADgCADQgHAOgGAOQgIARgKAQQgHANgDAPQAAAAAAAAQAHADAHAEQAPALAJAQQAIAQgBAUQAAAUgHASQgHASgLANQgLANgQAJQgNAHgRABQgCAAgDAAQgSgCgTgCQgQgDgUAAQgUAAgRAHQgRAGgRAIQgRAHgRACQgUACgUgCQgTgCgNgOQgFgFgEgGQAAgBgBgCQgFgIgCgJQgEgSgEgSQgEgQgIgQQgFgIgGgHQgFgGgGgGQgNgMgOgOQgMgMgMgMQgBgBAAgBQgCgEgEgDQgNgMgNgOQgNgNgOgMQgPgMgQgLQgPgLgQgKQgPgJgPgLQgPgLgPgMQgQgMgPgNQgOgLgNgMQgIgHgIgGAoqtnQABgKABgKQACgOALgGQAQgIARAEQAOADALAKQADACADAEQgDgEAAgFQgBgOALgJQAMgLAUAAQAJAAAGAFQAQALAIAOQgGgNAJgNQAQgYAcgIQAYgGAZAEQAFABAEACQAXAIAIASQANgRAVADQASACARAJQAPAIABATQAKgFAMgEQASgGATgEQATgEASAFQATAEAYABQAMgLATgDQAOgCALAHQAPAJAUADQAVADAIARQAIASgBATQAAATgGARQgGARgNAOQgMANgTAGQgTAFgVAIQACASgKARQgDAFgFABQgKAEgCAHQgEAUgWAAQgTABgRgHQACgHABgGQAKgugjgJQgKgDgJgFQgBgBgCAAQgCgDgCgCQgJgHgQAFQhNAXgchBQgwgVgUBJQAAAAgBAAQhKAFgaAuQggA3AaA+QABADACADAhgrAQgKAygFA7QgEBBgrAoQgWAUgYAVQgTAQgVARAj4oCQguA4gdhRQgXg+gQhJQgBgEgFgTQA6AbBBghQAKgEAJgIQAMApACAuQACBEgmAugAhRkFQgIgEgJgCQgTgEgUACQgSADgPAKQgOAKgQAFQgSAFgTgBQgTAAgTgCQgSgCgSgGQgSgGgRgDQgUgDgQAJQgRAIgKAPQgKANgCAPAh2hcQgGAKgGAMQgIASgCATQgCATAEASQAEASAFASQAFATAKAQQAEAHAFAFQABABAAAAQAMgJAQgGQASgHASgHQASgHARgGQgDAMgEANQgFATgCATQgCATgDATQgCATgCATQgBATAEASQABAEACAEQAQgIARgJQAQgIAQgLQAEgDAFgEQgKAKgHAMQgIAPgHARQgEALgDALQgCAGgBAGQgEARgRgBQgRgBgUgCQgUgBgTAAQgUAAgSACQgTADgTADQgTADgTACQgUACgRAKQgRAJgQAIQgPAIgPALQgNAKgLAOQgEAGgFAAQgJAAgKgCQgCAAgEgBQgBABgCABQgPAJgPAKQgPAJgQALQgPALgRAJQgRAJgSAIQgRAIgQAKQgPAKgMANQAAAAAAABQAAgBAAgBQgFgTAJgRAgFAuQABgBABAAQAQgGAQgIQARgIAQgLQANgKAPgKQAPgMAPgLQAPgMAPgKQAQgKAPgLQAPgKARgIQARgIAUAEQASADAIATQAHARACATQACASAAATQgBATAAATQgBAUADATQABAIAAAKQAAADAAAFQAAAPAAAQQAAAUAAAUQAAATgBAUQgBAUgCASQgCAUgBAUQAAAMgBAMQABAEAAADQACAPACAPQACASADATQACASABATQABATABAUQAAAKARAVQABgBABgBQALgLAMgMQANgOAKgPQAKgPAJgMQAKgNAEgQQAEgPAIgQQAKgWAOAOQAFAEADAIQABAFABAGQARgDADAVQAAABAAABQABAKgHAEAJFuAQAKABAFAJQAAAAAAABQAvgEATgBQAVAAARAFQASAGALAKQABABACACQACACACADQgBABgBAAQgMAFgPAAALAuUQAMADAKAFQARAJADARQABACAAACQgGAIgJAEAJStpQAEACACADQAAAAABABQAsgCATAAQAVgBANAJQAGADADADAHkG4QABAQghAiQggAjgDAEQAAABgBABQgCACgBACQgHALgHANQgIAQgIAPQgIARgNANQgNANgMANQgMANgSAEQgTAEgSgIQgRgJgGgSQgFgTAAgTQABgUABgTQAAgTABgTQAAgTgCgSQgCgOgFgNQgCgFgDgEQgEgMgEgMQgGgSgFgSQgEgSgGgTQgFgTgGgSQgFgPgHgOQgCgCgBgCQgBgHgCgGQgGgSgGgSQgGgRgGgRQgFgQgGgSQgFgRgFgSQgBgFgBgEQgCgPADgOAGrGWQAQgCANATQAFAHADAGAHbGVQgBADgCADQgCADgFAAAHbGVQAQgCgHAQQAAAAAAAAQATADgLAMQgCACgDACQgBABgCABIAAAAIAAABQgEgDgGgBAHMGDQAVACgGAQAHkGjQgEAJgLABAG4FxQACAMgCAOAgWDmQAFAMAHAIQACABACABQAJAGAKAFAB+B0QgOAOgNANQgMAPgOAMQgKAJgLAIAhqBZQABgBAAgBAhqBZQABAAABgBAlTCKQACAFACAGQAAACABABQANAGASABQATABAUAAQATgBATgCQATgDARgHQASgIAQgKQAOgKAPgJQAMgIAJgNAomHvQAEARAKAMQABABABABQADACADADQAMAJAJAKQANANAKALQAOANAKAOQAMAPALAQQAKAOAIARQAJARAIARQAHAPAFAQQADAMAEAJQACACABADQAKALAKAKQAOAOAKALQAAABABABQABABABADQAHALAIANQALAQALAPQAKAOAOAOQAOAOAMAMQANAOANAOQALALAOAIQARAKAMANQAMAMAKAOIAAAAQAEAEAAAIQAAATgQAMQgPAMgUAAQgTAAgTgDQgTgDgRgGQgRgHgTgGQgTgFgTgDQgUgEgTACQgUABgSAHQgTAGgPALQgIAGgJAFQgQAKgTgEQgLgDgDgJQgDgJgHAEQgQAMgSgNQgSgNAKgNQgLgFgDgJQgGgTAQgKQgGgBgHgDQgGgDgBgGQgDgaAWAGQgBAAAAAAQgPgLgHgSQgGgQAWgJQgQgLgBgSQgBgSAPgLQAOgLAWADQASACATAHQANAFAMAFQASAHASAHQASAIAOAJQALAHAMAFQgLgOgKgOQgKgOgNgNQgOgNgOgNQgNgNgPgNQgOgMgMgPQgLgMgKgNQgCgDgDgCQgGgFgIgFQgPgIgNgNQgOgOgOgKQgPgLgMgMQgNgOgPgNQgGgGgHgIQgDgEgCgCQgLgPgKgPQgLgRgLgPQgJgMgEgQQgBgCAAgCQAAgIACgGQAEgTALgPQAMgQANgNQALgLAMgMQAIgJAKgJQASgQARgOQAGgFAHgFQARgLARgMQAKgHALgIQANgLAPgKQAcgRAYgUQAIgEAOgIQAEgHAFgEQAOgMAOgMQAPgMAOgNQAPgNANgNQANgLAMgLQAAgBgBAAQgBgFgCgFQgFgSgGgTQgFgTgFgSQgEgUgFgSQgFgRgCgTQgDgTAAgUQAAgSABgSAFMIWQgOAMgOAPQgMANgOAMQgNALgEASQgBAGADAHQACAGADAHAk5sGQgGgJAFgLAkZsgQAIAJgDALAoqtnQAAABAAAAQAAAJAAAIApwspQACgQAIgPQAJgQARgKQAQgJASAEAqzrYQAAgBgBAAQgEgKACgPQACgTALgNQALgOARgHQAPgGAOAEAppsnQgEgBgDgBQAAACAAADQgBASAJAQAm9ovQgEAEgJABQgTABgMgDApun4QAKADAKAFQASAHARAJQARAJAMAMQAMANAPAJQAGAEAGAEQAHAFAGAFQACABACABQAIAEAHAFQAQAKARALQAQAKAPAMQAPALANAPQAMAOALANQAQATANgOQAMgNABgTQABgUgDgTQgEgSgFgSQgDgKgDgJAnAo2QABAEACADQADgCACgDAmpokQAAAAAAAAQgMACgIgNAq9rNQADgFAFgFQABgBABAAQACADACADQAHAHAHADAlnF3QgFgBgGgCQgPgFgPgLQgPgLgNgNQgPgNgIgQQgJgRgCgTQgBgMAFgJApEODQABAAABABQAOAJATABQAUABAOgNAo9O5QAOALATgGQAMgEAGgLAoGOdQAGAHgCAMQgBAGgDAHQgEAKgFAJQgJASgBAUQAAAFABAFQABADABADAo8PaQALABAMgEAmKN/QAEACAFACQASAHAPAJQAQAJAQAJQARAIASAGAo3QFQAAAAgBAAIAAAAQABgCAAACQARAHAJgK");
	this.shape_1.setTransform(25.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiAFDIgGgBIgLgDQgPgFgPgLQgPgLgNgNQgPgOgIgQQgJgQgCgTQgBgNAFgJQAEgGAFgFIAcgYIAdgZIAcgZIAZgWIAEALIABADQANAGASABIAnAAQATAAATgDQASgCARgIQASgHAQgKIAdgUQAMgIAJgMIACgBQAMgJAQgGIAkgOIAjgNIgHAZQgFASgCATIgFAmIgEAnQgBATAEARIADAJQAFAMAHAIIAEACIAUAKIgDAMQgEASgSgBIglgDIgngCQgUAAgSADIgmAFIgmAFQgUADgQAJIghASQgPAHgPALQgNAKgLAPQgEAFgFAAIgCAAIgRgBgAh0h7QgTgCgNgNQgFgFgEgGIgBgDQgFgIgCgJIgIgkQgEgRgIgPQgFgIgGgHQACgPAKgOQAKgOARgJQAQgJAUAEQARADASAFQASAGASACIAmADQASABASgGQAQgEAOgKQAPgLASgCQAUgDATAFIARAFIAAABIAOAHQAPAKAJAQQAIAQgBAVQAAATgHASQgHATgLANQgLANgQAJQgNAHgRAAIgFAAIglgEQgQgCgUAAQgUgBgQAHQgRAGgRAIQgRAIgRACIgRAAIgXgBg");
	this.shape_2.setTransform(2.7,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AiLDJQADgCABgEQgBAEgDACIgEgIIAEAIQgFADgIABQgUABgLgDIgFgDIgigRQgSgJgTgHQgSgHgPgJIgggUQgPgKgPgFIgDgBQgKgIgLgOQgJgLgFgQIgBgEQAAgJgCgLQADgFAFgFIABgBIAFAGQAGAHAHADQgHgDgGgHIgFgGIAAgBQgFgJACgQQADgSALgNQALgOARgHQAPgFAOADQACgQAHgPQAJgQARgKQARgIASAEIAAAAIAAAAIAAAJIAAAIIAAgIIAAgJIAAAAIAAAAIACgVQACgOALgGQAPgIARAEQAPAEALAJIAFAGQgDgEAAgFQAAgOAKgJQANgLATAAQAJAAAGAFQAQALAJAOQgGgNAIgNQAQgYAdgIQAYgGAYAEIAJADQAXAIAIASQAMgRAWADQASACAQAJQAQAJABATQAKgGAMgEQASgGASgEQAUgEASAFQASAEAYABQANgLATgDQAPgCALAHQAOAJAUADQAVADAIARQAIASAAATQAAATgGARQgGARgNAOQgNANgTAGIgpANQADARgKARQgDAFgFABQgLAEgBAHQgEAUgWAAQgUABgQgHIADgNQAKgtgjgJQgKgDgJgEIgDgCIgFgFQgIgHgQAFQhOAXgbhBQgvgVgUBKIgBAAQhKAEgaAtQggA3AZA+IADAGIgCACQAKAdANAZIgDAAQgKAAgGgKgAk2gKQgJgOAAgQIAAgEIABgFIAGACIgGgCIgBAFIAAAEQAAAQAJAOg");
	this.shape_3.setTransform(-5.3,-76.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACYHfIgEgCQgIgIgEgMIAhgSQARgIAQgLIAJgGQgKAJgHAMQgIAPgIASIgGAWIgUgLgAilk5QgWg+gQhJIgHgXQA6AcBCghQAKgFAJgIQAMApABAvQACBEglAtQgTAYgQAAQgXAAgSgxg");
	this.shape_4.setTransform(9.4,-23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("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");
	this.shape_5.setTransform(25.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene3redheadstill, new cjs.Rectangle(-109.6,-108.7,210.6,216.7), null);


(lib.scene3redhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene3redheadstill();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:53.9},8).to({x:-0.9,y:0.2},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,-109.6,209.6,214.8);


(lib.scene3blondegirl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene3blondestill();
	this.instance.parent = this;
	this.instance.setTransform(-2.7,0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhVBnQgFgGABgJIADgKQBWACAvg8IgBAAIgLgEQgJgRADgWIABgKIgEgFIgDgFIABgtIABgKIAOgHIABgBIAJAEIAEAEIANgHIAAgBIAKAEIAEAEQAFAMgBANIgBAKIADAFIAEAFIAABFIAAAKQgXAngnAaQgkAQgnAAQgTAAgTgEg");
	this.shape.setTransform(29.4,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({x:-43.6},0).to({x:-2.7},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.1,-100.1,143.4,202);


(lib.predicate_def = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		playSound("Cowbell");
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(21).call(this.frame_29).wait(1));

	// predVerbDef
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAIQgEgDAAgFQAAgDAEgEQAEgEAFAAQAGAAAEADQAEAEAAAEQAAAFgEADQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(234.6,75.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAVgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_1.setTransform(225.4,69.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgmA1QgNgNAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABARQAAAEgCAEQgDAEgHAAQgIAAgDgIQgCgEgCAAQgBgBgGAAQgLAAgNARQgVAXAAAVQAAAKAHAGQAGAIAJgBQAIAAAJgEIANgJQAHgEADgBQAGAAADAFQAEADAAAEQAAAGgFADQgYAVgYAAQgUAAgNgPg");
	this.shape_2.setTransform(214,69.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag9BEQgDgEAAgFIAAgKIABgLIAAgQIABgPIgBgQIAAgRIgBgPIgBgQQAAgFAEgEQAFgFAFAAQAHAAAIAMQAnA5AnAjIAAgOIgBg5IgBgKIgBgJQAAgNANAAQAOAAAAAtIAAAOIgBA2IgBAOQgCALgLAAQgGAAgIgHQghgegqg2IgBAbIAAAVIABAVQAAAagNAAQgGAAgEgEg");
	this.shape_3.setTransform(201,69.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAIADAAAIQAAAFgCAEQgEAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_4.setTransform(188.3,69.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_5.setTransform(176.3,69.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AguA5QgMgIAAgLQAAgFAEgEQAEgEAGAAQAHAAAEAIQAFALASAAQANAAAPgGQAPgHAAgIQgBgLgIgEQgHgCgSgBQgQAAgMgFQgQgHAAgNQABgSASgOQARgOAVAAQAIAAAOAEQAPAFAAAGQAAAFgDADQgEAEgFAAIgMgCIgNgBQgLAAgJAFQgLAGAAAGQAAADADACQADADAHAAIAVACQAUABALAKQAMAJAAATQAAAXgZALQgUAJgYAAQgWAAgNgKg");
	this.shape_6.setTransform(163.8,69.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgpBAQgEgEAAgEQABgFAEgEQADgDAGAAIARgCIAAgnQgBgXACgWIgTAAQgFAAgEgDQgEgDAAgFQAAgGAEgDQADgDAFAAIAagBQAPAAAbAEQALABAAALQAAAFgFAEQgDACgFAAIgWgCIgBAqIgBAnIAYAAQAFAAAEAEQAEADAAAFQAAAFgEADQgEAEgFAAIgQAAIgOAAIgRACIgSABQgFAAgEgDg");
	this.shape_7.setTransform(152.6,69.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAaAyIgMgRIgLgPIgaAeIgRASQgEADgFAAQgFAAgEgDQgDgEAAgFQAAgEADgEIAQgRIAfghIgTgWIgKgOQgGgHgFgEQgFgEAAgFQAAgFAEgEQADgEAFABQAFgBAIAHIAJAKIALAOIAPATIAWgdQASgVAGABQAFgBAEAEQADAEAAAFQAAADgDAEIgSAWIgVAcIASAZIAUAZQADAEAAAEQAAAFgEAEQgDAEgFgBQgJABgOgVg");
	this.shape_8.setTransform(141,69.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgoBDQgKgIABgdIABgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_9.setTransform(129.3,69.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiAuQgCgEgBgEIAAg5IAAgIIAAgIQAAgFADgDQADgEAGAAQAKAAACAKQAOgLATAAQARAAAAAXIAAAGQAAANgMAAQgLAAABgLIgBgJQgTADgIARIAAAsQAAAFgEADQgDADgGAAQgFAAgDgDg");
	this.shape_10.setTransform(300,44.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAAUgLAOQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_11.setTransform(290.7,44.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Ag9BEQgEgEABgFIAAgKIABgLIAAgQIABgPIgBgQIAAgRIgBgPIgBgQQAAgFAEgEQAFgFAFAAQAHAAAIAMQAnA5AnAjIAAgOIgBg5IgBgKIgBgJQAAgNANAAQAOAAAAAtIAAAOIgBA2IgBAOQgCALgLAAQgGAAgIgHQgigegpg2IAAAbIAAAVIAAAVQAAAagNAAQgGAAgEgEg");
	this.shape_12.setTransform(271,42.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AguA2QgTgQAAgZQAAgdASgZQAVgbAfAAQAfAAAPAOQAPAOAAAcQAAAdgRAYQgUAcgfAAQgaAAgSgPgAgbgaQgOASAAAVQAAAOAMAKQALAIAQAAQATAAANgTQALgRAAgVQAAgTgIgHQgIgHgUAAQgSAAgOATg");
	this.shape_13.setTransform(256.4,42.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgpBAQgDgEAAgEQAAgFADgEQAEgDAFAAIARgCIAAgnQABgXABgWIgTAAQgGAAgDgDQgDgDAAgFQAAgGADgDQADgDAEAAIAbgBQAPAAAbAEQAKABAAALQAAAFgEAEQgDACgEAAIgYgCIgBAqIAAAnIAYAAQAGAAADAEQADADAAAFQAAAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_14.setTransform(244.3,42.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_15.setTransform(233.4,42.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgmA2QgNgOAAgTQAAgdAZgeQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABARQAAAEgCADQgDAGgHgBQgIAAgDgIQgCgEgCAAQgBgCgGAAQgLABgNARQgVAXAAAVQAAAKAHAGQAGAIAJgBQAIABAJgGIANgIQAHgEADAAQAGgBADAEQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_16.setTransform(221.5,42.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACIgOAdQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_17.setTransform(209.2,42.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066FF").s().p("AguA5QgLgIAAgLQgBgFAEgEQAEgEAFAAQAIAAAEAIQAFALASAAQAOAAAOgGQAPgHAAgIQgBgLgIgEQgHgCgSgBQgQAAgMgFQgQgHAAgNQABgSARgOQASgOAVAAQAJAAANAEQAPAFAAAGQAAAFgDADQgDAEgGAAIgMgCIgNgBQgLAAgKAFQgKAGAAAGQAAADADACQADADAHAAIAVACQAUABALAKQANAJAAATQAAAXgaALQgUAJgYAAQgXAAgMgKg");
	this.shape_18.setTransform(188.7,42.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066FF").s().p("AgJATQgDgDAAgFIADgWQACgKAJAAQAEAAADADQAEADAAAFIgEAVQAAAEgDADQgDAEgEAAQgFAAgDgDg");
	this.shape_19.setTransform(180.4,37.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066FF").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_20.setTransform(172.3,42.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066FF").s().p("AgmA2QgNgOAAgTQAAgdAZgeQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABARQAAAEgCADQgDAGgHgBQgIAAgDgIQgCgEgCAAQgBgCgGAAQgLABgNARQgVAXAAAVQAAAKAHAGQAGAIAJgBQAIABAJgGIANgIQAHgEADAAQAGgBADAEQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_21.setTransform(160.5,42.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066FF").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_22.setTransform(149.5,42.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066FF").s().p("AglA9QgTgNAAgRQAAgOANAAQANAAAAAOQgBAFAJAGQAKAGAHAAQAEAAABgMIABgbQABgTAAgeIAAgGIgCAAIgKAAIgKAAQgFAAgEgDQgEgEABgFQAAgMAPAAIAJAAIAIAAIAQAAIARgBQAXAAABANQAAAFgEADQgEAEgFAAIgFAAIgGAAIgGAAIgBAGQABA+gJAdQgGAVgRAAQgQAAgQgLg");
	this.shape_23.setTransform(137.7,42.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066FF").s().p("AgrBDQgEgEAAgGIAAhbIAAgMQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAGgIAFQAJAEAHAIQAHAJAAAKQAAAMgNAKQgIAHgKADQgTAIgfAAQgGAAgEgEgAgXAvQAPAAARgFQAPgFAAgFQAAgHgKgFQgHgFgHAAIgXAAgAgXguIAAATIAAASIAMABQAagCAAgSQAAgHgIgFQgHgHgJABIgOAAg");
	this.shape_24.setTransform(126.3,42.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066FF").s().p("AgjA8QgWgSAAgrIAAgNIAAgNIABgKIAAgKQgBgGADgGQAEgJAFABQAFAAAEACQAFADAAAGIgBAPIAAAOIgBANIAAAMQAAANAEAMQADANAHAFQAEADAOAAQAWABAIgoQAEgUAAglQAAgFADgEQAEgHAHABQAHAAACADQADAEAAAEQAAAigEAUQgEAdgPAUQgHAJgJAFQgKAIgLgBQgXAAgLgIg");
	this.shape_25.setTransform(113.6,42.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0066FF").s().p("AgvA5QgLgIAAgLQABgFADgEQADgEAGAAQAIAAAEAIQAFALARAAQAOAAAPgGQAOgHAAgIQABgLgKgEQgGgCgTgBQgPAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAIAAANAEQAQAFAAAGQAAAFgDADQgDAEgGAAIgNgCIgMgBQgMAAgJAFQgKAGAAAGQAAADADACQAEADAGAAIAVACQATABAMAKQAMAJABATQAAAXgbALQgTAJgZAAQgWAAgNgKg");
	this.shape_26.setTransform(100.8,42.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQAOAHAAANQAAAKgLAIQgFADgPAGIgcAMQAEAFAFACQAHACAHAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgDgKAAQgHgBgGAGg");
	this.shape_27.setTransform(81.6,44.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_28.setTransform(71.7,42.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHA9QgEgDABgFIAAgJIAAgKIgCgsIgQgBQgMgCAAgKQAAgFAEgDQAEgEAFAAIAOABIAAgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACAAAIQAAAFgDAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_29.setTransform(62.1,43.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AADAcQgDgIgCgVIgCAEIgNAiQgBAEgDACQgEAGgHAAQgEAAgFgHQgFgIgDgMQgCgLgGgkIgBgMQAAgFADgDQAEgDAFAAQAJAAADAJIACAMIABANIADAVIAPgrQAEgMAJAAQAKAAADANIAEAXIAFAYIANg1QADgHAJAAQAEAAAFADQADADAAAFIAAADIgTA9QgDAIgGAJQgEAFgGAAQgLAAgHgVg");
	this.shape_30.setTransform(333.9,17.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_31.setTransform(322.9,17.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_32.setTransform(313.2,15.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_33.setTransform(303.4,17.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AguA5QgMgIABgLQgBgFAEgEQAEgEAFAAQAIAAAEAIQAFALARAAQAPAAAOgGQAPgHAAgIQAAgLgJgEQgHgCgSgBQgQAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAJAAAMAEQAQAFAAAGQAAAFgDADQgEAEgFAAIgNgCIgMgBQgMAAgJAFQgKAGAAAGQAAADADACQAEADAGAAIAVACQAUABALAKQANAJAAATQAAAXgaALQgUAJgYAAQgXAAgMgKg");
	this.shape_34.setTransform(285.1,15.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgrBDQgEgFAAgFIAAhbIAAgMQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAFgIAGQAJAEAHAIQAHAKAAAJQAAALgNALQgIAHgKAEQgTAHgfAAQgGAAgEgEgAgXAvQAPAAARgGQAPgEAAgFQAAgHgKgFQgHgFgHAAIgXgBgAgXguIAAATIAAASIAMABQAagDAAgRQAAgGgIgGQgHgHgJABIgOAAg");
	this.shape_35.setTransform(273.5,15.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_36.setTransform(262,15.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAVgCQAFAAADAEQAEADAAAFQABAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_37.setTransform(250.7,15.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgvIgHgYQgFgQAAgHQAAgFADgDQAEgEAFAAQAIAAAEAJIADAPIAJAcIANAsIAUg0IAHgVQAFgMAGgHQAEgFAGAAQAFAAAEAEQADADAAAFQAAAEgCADQgFAHgEAJIgGASIgYA8QgEAKgGALQgDAHgHAAQgJAAgDgJg");
	this.shape_38.setTransform(238.8,15.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADAAAIQAAAFgDAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIglADIAAASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_39.setTransform(219.5,15.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_40.setTransform(207.5,15.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACIgOAdQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_41.setTransform(194.5,15.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgmA2QgNgOAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_42.setTransform(182.5,15.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgpBAQgDgEAAgEQAAgFADgEQAEgDAFAAIARgCIAAgnQABgXABgWIgTAAQgGAAgDgDQgDgDAAgFQAAgGADgDQADgDAEAAIAbgBQAPAAAbAEQAKABAAALQAAAFgEAEQgDACgEAAIgYgCIAAAqIgBAnIAYAAQAGAAADAEQADADAAAFQAAAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_43.setTransform(171.9,15.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgbBHQgKgCgFgEQgGAAgDgDQgEgEAAgFIABgaIABgbIAAgcIgBgdQAAgFAEgFQAFgFAFAAQADAAAMAGIARAHQAYAJASARQAWAVAAAYQAAAPgIAOQgHAOgNAIQgOAKgaAAIgPgCgAgeAtQADACAFABIAKABQASAAAIgFQAIgFAFgJQAEgIAAgKQAAgUgagQQgHgGgcgLg");
	this.shape_44.setTransform(160.9,15.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgoBDQgKgIABgdIABgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_45.setTransform(148.7,15.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_46.setTransform(137.2,15.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgnBDQgDgEAAgEIAAgYIABgoIACgoQAAgYANABIAIgBIANAAQAQAAAPALQARAMAAATQAAAWgSANQgQALgUAAIgIAAIAAAoQAAAEgEAEQgDADgFAAQgFAAgDgDgAgQguIAAANIgBAdIAGABQAMABAJgHQAKgHAAgLQAAgIgJgGQgJgGgJAAIgFAAIgEABg");
	this.shape_47.setTransform(126.5,15.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgMAYQAAgGAEgCQAEgDAEAAQAOgBAAAVQAAAEgEAEQgEADgFAAQgNAAAAgUgAgIgSQgEgDAAgFIAAgDIgBgDQAAgFAEgDQAEgDAFAAQAMAAAAARQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_48.setTransform(110.1,16.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AASApIgDgSIgBgTIABgGIAAgJIAAgCIAAgFQAAgHgDAAQgIAAgGAJQgHAKgEAOIgBAIIgBAIIAAAIIgBAIQAAAFgDADQgEADgFAAQgFAAgEgDQgDgDAAgFIgBgIIAAgIIABgYIABgWIAAgIIAAgIQAAgFADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAASIAAAHIAAAFQAAAGACALQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape_49.setTransform(101.5,17.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_50.setTransform(91.9,17.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgKBAQgEgEABgEIgBgQIAAgRIABgUIABgSQAAgFADgDQAEgDAEAAQAFAAADADQADADABAFIgBASIgBAUIAAARIAAAQQAAAEgDAEQgEADgEAAQgFAAgDgDgAgIgsQgEgDAAgGQAAgFAEgEQAFgEAFAAQAFAAAFAEQADAEAAAFQAAAGgDADQgFAEgFAAQgFAAgFgEg");
	this.shape_51.setTransform(85,15.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgHA9QgEgDAAgFIAAgJIABgKIgCgsIgQgBQgMgCAAgKQABgFADgDQADgEAFAAIAPABIAAgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACgBAIQAAAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgMAAQgFAAgDgDg");
	this.shape_52.setTransform(78,16);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgKBAQgDgEgBgEIAAgQIgBgRIABgUIABgSQAAgFAEgDQADgDAGAAQAEAAAEADQACADAAAFIAAASIgBAUIABARIAAAQQgBAEgDAEQgDADgEAAQgGAAgDgDgAgHgsQgEgDgBgGQABgFAEgEQAEgEAEAAQAGAAAEAEQAEAEABAFQgBAGgEADQgEAEgGAAQgEAAgEgEg");
	this.shape_53.setTransform(71.4,15.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AASApIgDgSIgBgTIABgGIAAgJIAAgCIAAgFQAAgHgDAAQgIAAgGAJQgHAKgEAOIgBAIIgBAIIAAAIIgBAIQAAAFgDADQgEADgFAAQgFAAgEgDQgDgDAAgFIgBgIIAAgIIABgYIABgWIAAgIIAAgIQAAgFADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAASIAAAHIAAAFQAAAGACALQACALAAAHQAAAFgDADQgEADgFAAQgLAAgBgKg");
	this.shape_54.setTransform(64.1,17.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgKBAQgEgEABgEIgBgQIAAgRIABgUIABgSQgBgFAEgDQAEgDAEAAQAFAAADADQADADAAAFIAAASIgBAUIAAARIAAAQQABAEgEAEQgEADgDAAQgGAAgDgDgAgIgsQgDgDAAgGQAAgFADgEQAFgEAEAAQAGAAAFAEQADAEAAAFQAAAGgDADQgFAEgGAAQgEAAgFgEg");
	this.shape_55.setTransform(57,15.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgPBKQgFgDAAgFIABgCQACgNAAgLIAAgrIgGABIgFABQgGAAgDgEQgDgDAAgFQAAgIAIgDIAQgBIABgKQACgUAJgJQAJgMAUAAQARAAgBALQAAAMgOAAQgLAAgEAHQgFAGgBALIAAADIARgBQARAAAAALQAAAMgSgBIgRABIAAAXIAAAXQAAARgBAJQgCAJgJAAQgFAAgDgDg");
	this.shape_56.setTransform(49.5,15.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQAMAHAAAOQAAAJgKAIQgFADgPAGIgcAMQADAFAHACQAGACAGAAQAMABAIgFQAIgFAEAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgEAKIAVgIIASgKQgHgEgJAAQgIAAgFAGg");
	this.shape_57.setTransform(39.9,17.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgbBHQgKgCgGgEQgFAAgEgDQgDgEAAgFIABgaIAAgbIAAgcIAAgdQAAgFAEgFQAFgFAGAAQADAAALAGIAQAHQAZAJASARQAWAVAAAYQAAAPgIAOQgHAOgNAIQgOAKgaAAIgPgCgAgeAtQADACAFABIAKABQASAAAIgFQAIgFAEgJQAFgIAAgKQAAgUgZgQQgIgGgcgLg");
	this.shape_58.setTransform(28.9,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

	// existVerbs
	this.instance = new lib.tobeblondeblink();
	this.instance.parent = this;
	this.instance.setTransform(286.8,95.1,0.205,0.205);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF00").s().p("AhpCBIgIgFIAAgIIAAgBIAAgCQAAgFACgEIADgIIACgOIABgFIAAgEIADgJIAAgBIABgDIAAgBIAAgBIAAgBIAAgBIABgBIABgDIAAgCIABgBIAAAAIABgCIABgCIADgEIACgCIAEgEIAAABIACABIABABIACACIACACQALANARAEQAYAKAZgDIADgBIADgBIAKgEQAGgDAIABIADgBIAAAAIABAAIABABIABABIACADQAFAGAAAIIABAJIABAGIAAABIAAACIAAAJIABADIAAAAIgBAGIAAAOIgBAAIAAgBIAAABIgCAAIgBAAIAAABIgBAAIgBACgAhfB/IACAAIAAAAIABgBIgBAAIgDAAIABABgAAqhBIgBAAIgPAAIgGgBIgGAAIgEAAIgBAAIgDgBIgGgBIAAAAIAAAAIgFgDIgDgBIgCgCIgBgBIgBAAIAAAAIgEgBIACgHIANgCIgLgCIANgDIAAgBIgIAAIgDgEIAPgIIAAgBIgCgBIAAAAIgJgCIABgKIABAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIABAAIADgBIAAgBIABAAIACAAIACgBQAIgDAKACIAHACIABAAIADABIAEABIABAAIAHAAIABgBIAFAAIAHgCIAAgBIACAAIAIgCIAJgCQAHAAAGADIAJAFQAEAAACADIAAABQAFAEAAAHIAAAHQABAFgCAFIgBACIgCACIgDADQgGAHgJABIgIADQgJACgJAAIgCAAIgCABIgJABIgJABIgCAAg");
	this.shape_59.setTransform(282.7,122.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FFFFFF","#6699FF"],[0.157,1],0,0,0,0,0,6.7).s().p("AgZA4IgCgPIgBgOIABgQIADgOIADgJIADgIIAEgIIAFgIIAEgIIAGgKIACgBQADgDADAAIAIgBIAEABIADACIACACIABADIABAEIABAIQAAAKgCAKIgDANIgEASIgCAJIgCAGIgBADIgDAHIgDAHIgCACIgEADIgDADIgFADIgEADIgDAAIgHACg");
	this.shape_60.setTransform(308.3,100.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC9966").s().p("AgvBwIADgIIAAgCIgBACIABgEIABgEIAAgCQAEgJAAgLIAAgBIABAAIAAgBIAAAAIACAAQACAEgBAFIgEARIgBAJIgBAEQAFgDACgHIABgFIAAgKIACgDIAAgMIAAAAIgBAAIAAgBIABgCIAAgEIABAAIAAgBIAAgBIAGgOIACgUIAAgBQgHgFgCgJIAAgBIgCgEQgBgEAAgEIAAgTQAAgKABgKIACgKQADgLAFgKIAGgOIAEgJIADgDIACgDIAFgHIABgBIAAAAIADgEIACgCIAEgCIACAAQAHgEAHgBIAFAAIAGAAIABAAIADADIACAEIAAACQAQArgSAqIgBACIgBADIgBACIgBAEQAAADgDAEIgJAPQgEAEgFADIgDACIgGAEQgEADgFAAIgCAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgEABIAAAFIgBAEIAAAAIAAABIAAABIAAABQgCALgGAKIgBABIABACIACAAIAAALIgBAIQgEAWgPAQgAgUAOIAAAAIgBAAgAAMhxIgCACIgCACIgKALQgGAGgDAHQgIARgFASQgDANgBAOIABAXIAHAIQAFAEAHAAIAFgBIAHgDIAHgEQAEgCACgDIAHgPIABgEIACgIIAAAAIABgFIADgLIAFgYIABgBIABgGIABgHIAAgPQgBgHgFgFIgCgCIgCgCIgDAAIgGgBQgEAAgEABg");
	this.shape_61.setTransform(307.6,106.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C6FFFF").s().p("AhnDGIADACIgBAEgAhqDEIgDgOIAGAQIgDgCgABujKIAAgBIAAABg");
	this.shape_62.setTransform(279.9,114.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFF99").s().p("Ag8CnQgBgGgFgDIgDgBIgCgBIAAgiIgBAJIgEAPIgBgPIAEghIgEAEIgEAjIgCgHIAAgXIACgCIAKgiIgHACIgBABIAAACIAAACIgBACIAAACQgBAEABAFQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgCABQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAgDIAAgBIABgIIACgOQABgFACgEIAAgBIABgDIADgGIAEgJQAFgIADgJIACgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAEgMIgGgdIgBgDIgBAAIAAgBIAAgCIgBgBIAAgDIgBgCIAAAAIAAgCIgBgBIAAgCIgBgBIAAgBIAAAAIgBgEIAAgBIAAgBQAAAAAAgBQABAAAAgBQgBAAAAgBQAAAAgBAAIABgHIAAgNIACgGIgCAAIAAgBIAAgBIgBgCIABAAIADgDIABAAIABgBIABAAIAFgCIAGgDIABgBIABAAIAKgHIABgBIABgBIgBgDIgCgDIAAAAIAAgBIgBAAIAAgBIAGgEIACgDQAAgGgDgFQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgNALgHIAOgJQABgCADgBIAKgEQAEgDAEAAIABAAIAAAAIABgBIAAAAIABAAIAAgBIABAAIADADIABAAIAAAAIABABIAAABIAAAAIgBABQABADgBADIgBAIQgBAEgDADIgBAAQgFAGgFAHIgBABQgEAMgCAOIAAAGIgBALIAAAJIABADIAAAGIACALIABAwQAAAXgDAYIgCAYIAAADQgFAXgJAWIgKAnIgBAFQgCARABASgAAkgSIADgBIACgBQAQgEAMgNQAFgGADgGIACgEIABAAIABgFIAAgDIAAgIIABgDIAAgJIgBgHIAAgEIgBgCIgBgBIAAgCIgBgCIAAgBQAAAAAAAAQAAAAAAAAQgBAAABgBQAAAAAAAAIABgCQADgEABgEIAAAAIgBgHIAAgCIgBgBIgDgBIgCgBIgCgPIACACIADADIACACIABAAIABADIABgBIgBgCIgBgBIgBgDIAAgBIAAAAIgCgDIAAgBIgCgDIAAgCIgCgFIgBgDIgBgCIgBgBIAAgBIAAgBIgFgGIgBAAIgBgBIgEgBIgEgBIgCAAIgHgCIgFAAIgFgBIgHgCIgFgDIAAgCIAAgDIABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAFgBAEABIAJACIAIADIAGADIADACIACABIACACIADACIAFAIIACABIABADIACADIACAGIABACIAAACIAAAAIABABIAAABIAAABIABADIABAEIAAAJIAAABIABADIgBAHIAAAEIgBAGIAAABIABAvQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBADIAAAAIgBADQAAAMgDAMIgFAAIgFAAQgNABgNAFIAAACIgIAEg");
	this.shape_63.setTransform(282.7,107.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFCC99").s().p("AhaC5IgFgBQgIgEgHgGIgFgEIgBgBIgHgIQAHgJgBgKQgBgGABgFQAIAJAJAIQAOAMATAHIgKgKQADgvAOguIABgCIAAgBIABAAIABAAIABAAIAIAAIAEACIAHADIAEAAIAHABIANAAIAPAAQAEAAAFgDIAWAAIACACQgDAOgGANQgBADgDAEQgMAPgJARIgDAJIgCAFIgBAAIAAACIAAAAIgBACIgBACIgDARIAAANIAAAAIgBABIgHABIgDABIgBAAIgCAAIgBABIgGADQgNAEgNAAQgRAAgQgIgABFCUIgEgCIgEgFIgCgCIgIgQIgCgGIgBgCQgIgUgCgVIAAgDIAAgBIACgCIAAgBIATgHIACgBIAAgBIABABIAAAAIABAAIADgBIABAAIABADQADADABADIAAABIAAACIAAACQAAAIAEAHIAFANIABACIABABIAAABIABABIAEAAIADgCIAHgEIAEgDIAEgFIAFgDIAEgDQACgDAEgCIABAAIAAgBIAFgDIABgBIAFgEIAIgJIAFgGIADgCIADgEIACgDIACgCIAAAAIABgFIABAAIABAAIABAAIAGgBIgBAKIgBABIgGAZQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABIgHAIIgIAHIAAAAIgBABIAAAAIgEAEIgFAEIgBABQgHAGgFAHIgEAEQgHAHgIAHIAAAAIgBAAIgDADIgGADIgCABQgFAEgHACIgCAAIAAABIgGgBgAghBAIgGgCIAGABIADABIgDAAgADNA1IgBgBIgHgJQAZAAAWALIAAACIgMABQgOAAgNgEgAC+AqIABgDIABgBQACABABADIAAABIABABIABAAIAAACIABAAQADACAAADIAAACIgBABIgKACIAAgOgADFAlQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgBgEIAdgGIAAAAIABAAQAAAAAAAAQABABAAAAQABABAAAAQAAABABAAIgDAHIgBABIgDAAQgIADgIAAIgBABQgEAAgDgDgACkAjIgIgYIAbgEIgEAOIgMACIAAAMgAC9AbIAAAAIgCAAIACgIIAlgKIAAAGIAAABQgFAGgGADIgGACIgBAAIgJAAIgHABIgDgBgAjtATIgDgCIgDgDQAAgIADgGIACgDIAKgKIAJgIIAIgHIABgBIASgOQADgDAEgCIAJgFIAGgFIABgBIAEgFQACgDADgBIACgBIAGgHIABgBIADgCIABgBIAAAAIAEgEIACgCIADgEIAAgBIAEgIIABgEIgBgCIgDgDIgBgBIAAgCIgGgIIgBgBIgGgJIgDgDIgCgFIAAgCIgBgDQgBgEAEgBQAZgVAfAAIAGgBQAEgBACADIAAABQABAEgFABIgIABIgFABIgTAFIgHACIgBAAQgBAAgBABQgBAAAAAAQgBABAAAAQAAABAAAAIgBAAIABADIAIgEIAHgCIABgBIAMgCIACgBIAFgBIABgBIACgBIABAAIAEgBQADgBACABIABABQADADgBAEIgCABIgDABIAAAAIgEABIgEABIgCAAIgCABIgBAAIgGABIAAABIgFABIgEAAIgFACIgCAAIgBAAIgDABQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAIABABIACAAQAEgCAEAAIAAgBIACAAIABgBIATgEIABgBIAJgCQADgBADACIABABQABAFgFABIgCABIgNAGIgHADIgBABIgEAAIgPAEQAFACAGgCIAJgDIABAAQAGgDAHgBIACAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIABACQgBAEgEABQgEACgEADIgBAAIgIADIgPAGIABACIAFADIABAFQABAFgCAGIgBACQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgCADIgBAAIgDAEIgCACIgBACIgIAIQgIAGgHAIIgDACIgEAEIgNAKIgKAIIgBABIgKAGIgBAAIAAABIgCABIgIAFIABADIAAAAIAHgBIAFgBIAAgBQAmgHAnACIgBAQIgFAIIgEAJIgBACQgUADgVgBIgHgBIgPAAIgPAAIgUABIgQAAIAAAAIgDAAgAhWiQIAAAAIABgBIgBABgADFAMIgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgGIAAAAIAAgBIAAAAIABAAIAAAAIACAAIAcgGIAAABIABADIAAABQABACgBACIgBABIgEAEIgBAAIgGACQgHACgGAAIgEAAgAgwh+QgBgNAGgNIAHgPIAOgHIgGgBIAQgKIgFgDIADgEIAoAFIAGAOIgEAAIACAEIgBAGIAAgBIAAAOIgBADQgDACgDADIgBABIgKAAIAEACQALAEAMgDIABACIgNAQIABADIAHgEQASA6g4AQQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAGIAAAFIACAGQAJgLALABIAEgBIABAAQANgBAJAJQAFAEAAAHIABAGIABAIIAAAAIAAABIAAAAIgCABIgDgBIgBACIgDABIABAAIgCAAQAAAAgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgQACIgCAAIgBAAIgPAFIgFgBIgIgDQgHgCgIABIgJACIgCABQgFABgDADIgBAAIgBAAQAFhDgIhFgAAUhMIgCgOIACgCIAGAAIgSgGIAMAWgAgYimQgCACgCADIgBAAIgBACIABAAIgBAAIABABIABAAIAAgBIABgBIABgBIABgBIACgBIACgCIAFgCIADAAIACAAIAFABIABAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgBIgDAAIgDAAIgBAAIgDABIgCABIAAAAIgDABIgBAAIgBAAIgBABgAANixIAAABIAAACIABABIAAABIAAAAIACgBIAAgBIABAAIADgBIACAAIAEABIAAAAIABAAIAAAAIABAAIAAAAIAAAAIABgBIAAAAIgBAAIgCgBIAAAAIgIgBIgEAAIgBAAg");
	this.shape_64.setTransform(286.7,109.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgHDrIABgCIABAAIABAAIACABIgBABgAAADpIgBAAIAAgBIAAgOIABgGIAAAAIgBgDIAAgJIAAgCIAAgBIgBgGIgBgJQAAgIgFgGIgCgDIgBgBIgBgBIgBAAIAAAAIgDABQgIgBgGADIgKAEIgDABIgEABQgZADgYgKQgRgEgLgNIgCgCIgCgCIgBgBIgCgBIAAgBIgEAEIgCACIgDAEIgBACIgBACIAAAAIgBABIAAACIgBADIgBABIAAABIAAABIAAABIAAABIgBADIAAABIgDAJIAAAEIgBAFIgCAOIgDAIQgCAEAAAFIAAACIAAABIAAAIIgDgCIAAgBIAAgBQgBgGACgFQADgLABgKQAAgJACgIQABgLAEgKIAEgKIABgBIAAAAIACgCIAGgGIABgBIACgEIABgBQAEgDABgEIACgGIABgGIABgCIAAgCIAAgBIgBAAIgKgiIgCADIgDgJIAAgBQgBgGACgFIAAgCIABgOIACgJIAAgEIACgKIABgGIADgIIACgCIhRABIgcgBIgGAAIgEgBQgGgCgEgEIAAgDQAAgHACgFIACgEQAJgKAKgHIANgMQALgMANgIIAIgFIABAAIABgBIADgCIAHgGIABAAIACgCIAAgBIAKgIQAIgHAHgJQADgEABgEQAAgEgCgEIgBgBIgUgdIAAgKQAigXApgDIAMgKIAAgCQATgNAXgEQAHgBAIAAIAAgDQAKgEALACQAiAHAKAhQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIABABIABAEIABAGIAAAFIAAAGIAAACIABABQAEArgGArIgDACQACAZANAWIgDADIADAHIAHAHQATAQgPAUQgBAFABAFQAEAFABAHQABAHACAGIADAHIADAKIABABIACAAIAGgEIAMgJIAAAAIAFgEIACgCIAGgFIAFgEIABAAIACgCIADgDIANgOIABgBIADgGIABgBIABgCIAAgBIACgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQABgKgDgIIAAgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIABgEIALgFQAGACAIgBIACgBIABAAIACgGIgBAAQgVhDAig9IAIgLIADgFIAGgEIAGgEQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAHgDAHgBIANABIADABQAFADAAAFIABACIABABIABAGQADAPABAPIAAACQgDAggLAdQgFAGgCAHIgBAEQgJANgNAIQgFACgGAAIABABIAAAAIAHgBIAKAAQAGADAAAHQAAADgDABIAAACQADACABAEIAAABIgBAFIgBACIgBAAIAAAAIgBACIAFADIAAABIAAACIgCAHIgDADIgBABQgDACgDAAIAbAMIgBAGIgFABQgTADgQgKQATAGAUgDIAAgCQgWgLgZAAIAHAJIABABIAAABIgBABQgGAEgIAAIgEgBIgEALQgFALgJAHIgIgBIgBADIgBgEIgFAFIgEAFIgQAOIgGAFIgPAOIgEAEIgHAHIgCACQgGAFgHADIgCABQgEACgEABIgJgBIgDgBIgJgKIgFgJIgEgLIgDgGIgBgCQgDgJgCgJIAAgBIgBgBIAAgBIAAgBQAAgDgBgDIgBAAIAAAAIgBABIgCAHIgEAFIgFAJIgCACIgKALIAAABIgBABIgCADIgBAAIgBACQgCAEgBAFIAAACIgCADIAAACIgBABIAAABIgCAGIgBABIAAADIgBABIgBAOQgBAHAAAIIABAAIACACIAAABQAFAFACAIIABAJIABAKIAAADIAAASIAAACIAAACIAAABIgBAJIAAADIAAAAgAh5B1QABAKgHAJIAHAIIABABIAFAEQAHAGAIAEIAFABQAcANAfgJIAGgDIABgBIACAAIABAAIADgBIAHgBIABgBIAAAAIAAgNIADgRIABgCIABgCIAAAAIAAgCIABAAIACgFIAEgJQAIgRAMgPQADgEABgDQAGgNADgOIgCgCIgWAAQgFADgDAAIgQAAIgNAAIgHgBIgEAAIgHgDIgEgCIgIAAIgBAAIgBAAIgBAAIAAABIgBACQgOAugDAvIAKAKQgTgHgOgMQgJgIgIgJQgBAFABAGgAhUCGQgBgSACgSIABgEIAKgoQAJgWAFgWIAAgDIACgXQADgYAAgYIgBgwIgCgMIAAgGIgBgDIAAgIIABgMIAAgGQACgNAEgMIABgCQAFgGAGgGIABgBQADgDABgEIABgHQABgEgBgCIABgBIAAgBIAAAAIgBgBIAAgBIgBAAIgDgCIgBAAIAAAAIgBAAIAAABIgEAAIACABQgFAAgEACIgKAEQgDABgBACIgOAJQgLAHABAOQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQADAGAAAGIgCACIgGAEIAAABIABABIAAAAIAAAAIACADIABAEIgBAAIgBACIgKAGIgBABIgBABIgGADIgFACIgBAAIgBAAIgBABIgDACIgBABIABACIAAAAIAAABIACABIgCAGIAAANIgBAGQABABAAAAQABAAAAABQAAAAAAABQgBAAAAABIAAABIAAABIABADIAAABIAAAAIABACIAAABIABACIAAABIAAABIABACIAAADIABABIAAABIAAABIABAAIABADIAGAfIgEALQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgCAEQgDAJgFAJIgEAJIgDAEIgBADIAAABQgCAFgBAFIgCAOIgBAHIAAABIAAADQAAABABABQAAAAAAABQABAAABAAQAAAAABAAIACAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQgBgFABgFIAAgBIABgDIAAgCIAAgBIABgCIAHgBIgKAiIgCABIAAAYIACAHIAEgjIAEgFIgEAhIABAQIAEgPIABgJIAAAhIACABIADACQAFADABAGIAUAQIAAAAgAA5AiIgCABIgTAHIAAABIgCACIAAABIAAADQACAVAIAUIABACIACAGIAIAQIACACIAEAFIAEACIAGABIAAgBIACAAQAHgCAFgEIACgBIAGgDIADgDIABAAIAAAAQAIgHAHgHIAEgEQAFgHAHgGIABgBIAFgEIAEgEIAAAAIABgBIAAAAIAIgHIAHgIQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAGgZIABgBIABgKIgGABIgBAAIgBAAIgBAAIgBAFIAAAAIgCACIgCADIgDAEIgDACIgFAGIgIAJIgFAEIgBABIgFADIAAABIgBAAQgEACgCADIgEADIgFADIgEAFIgEADIgHAEIgDACIgEAAIgBgBIAAgBIgBgBIgBgCIgFgNQgEgHAAgIIAAgCIAAgCIAAgBQgBgDgDgDIgBgDIgBAAIgDABIgBAAIAAAAIgBgBgACgApIgCAIIAFAJQAPgQAEgWIABgHIAAgLIACAAIAAAAIADABIAHgBIAJAAIABAAIAGgCQAGgCAFgGIAAgBIAAgGIglAKIgCAHIgCgBIAAgBIAAgBQAGgKACgLIABgBIAAAGQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIABAAQAIABAJgDIAGgCIABAAIAEgEIABgBQABgCgBgDIAAgBIgBgDIAAgBIgcAGIgCAAIAAAAIgBABIABgFIAAgFIADgBQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIADAAQAFgBAFgCIAGgFIACgBQAGgDADgFIAKgQQACgEABgDIABgEIABgCIABgDIAAgCQASgqgPgrIgBgBIgCgFIgDgCIAAAAIgGgBIgFABQgIAAgHAEIgBAAIgEADIgCABIgEAEIAAAAIgBABIgFAHIgDADIgCAEIgFAJIgGANQgFAKgCALIgCAKQgCAKABAKIAAATQgBAFACAEIABAEIABABQACAJAHAFIAAABIgCAUIgGAOIgBAAIAAABIgBABIAAADIAAACIAAABIAAAAIABAAIAAANIgDACIAAAKIgBAGQgBAGgFAEIAAgFIACgJIAEgRQAAgFgCgEIgBAAIgBAAIAAABIAAAAIAAACQAAAKgFAJIAAACIgBAFIgBADIABgBIAAABgAgygBIAKABIAAAAIACABIAAABIgQAIIADAEIAJAAIAAABIgOADIALACIgNACIgCAHIAEABIAAAAIABAAIABABIACACIADABIAFADIABAAIABAAIAFACIADAAIABAAIAEAAIAGAAIAGABIAPAAIABAAIABAAIAJgBIAJgBIACgBIACAAQAJAAAJgCIAIgDQAJgBAGgHIADgDIACgCIABgCQACgFgBgFIAAgHQAAgGgFgEIAAgBQgCgDgEAAIgJgFQgGgDgHAAIgJACIgIACIgCAAIAAABIgHACIgFAAIgBABIgGAAIgBAAIgEgBIgDgBIgBAAIgHgCQgKgCgIADIgCABIgCAAIgBAAIAAABIgEABIgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAABIgBAAIgBAKgAC7AOIgBADIAAAOIAKgCIABgBIAAgCQAAgDgDgCIgBAAIAAgCIgBAAIgBgBIAAgBQgBgDgCgBIgBABgADcAAIgdAGIABAEQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQADADAEAAIABgBQAIAAAIgDIADAAIABgBIADgHQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgBAAgACYgNIAIAXIADAAIAAgLIAMgCIAEgOgAhgjCIgGABQgfAAgZAVQgEABABAEIABADIAAACIACAFIADADIAGAJIABABIAGAIIAAACIABABIADADIABACIgBAEIgEAIIAAABIgDAEIgCACIgEAEIAAAAIgBABIgDACIgBABIgGAHIgCABQgDABgCADIgEAFIgBABIgGAFIgJAFQgEACgDADIgSAOIgBABIgIAHIgJAIIgKAKIgCADQgDAHAAAIIADADIADACIAAABIADAAIAAAAIAQAAIAUgBIAPAAIAPAAIAHABQAVABAUgDIABgCIAEgJIAFgJIABgQQgngCgmAHIAAABIgFABIgHABIAAAAIgBgDIAIgFIACgBIAAgBIABAAIAKgGIABgBIAKgIIANgKIAEgEIADgCQAHgIAIgGIAIgIIABgCIACgCIADgEIABAAIACgDQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIABgCQACgGgBgFIgBgFIgFgDIgBgCIAPgGIAIgDIABAAQAEgDAEgCQAEgBABgEIgBgCQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCAAQgHABgGADIgBAAIgJADQgGACgFgCIAPgEIAEAAIABgBIAHgDIANgGIACgBQAFgBgBgFIgBgBQgDgCgDABIgJACIgBABIgTAEIgBABIgCAAIAAABQgEAAgEACIgCAAIgBgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIADgBIABAAIACAAIAFgCIAEAAIAFgBIAAgBIAGgBIABAAIACgBIACAAIAEgBIAEgBIAAAAIADgBIACgBQABgEgDgDIgBgBQgCgBgDABIgEABIgBAAIgCABIgBABIgFABIgCABIgMACIgBABIgHACIgIAEIgBgDIABAAQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAIABAAIAHgCIATgFIAFgBIAIgBQAFgBgBgEIAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgCAAgAgVjVIAFADIgQAKIAGABIgOAHIgHAPQgGANABANQAIBFgFBFIABgBIABAAQADgDAFgBIACgBIAJgCQAIgBAHACIAIADIAFABIAPgFIABAAIACAAIAQgCQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACAAIgBAAIADgBIABgCIADABIACgBIAAAAIAAgBIAAAAIgBgIIgBgGQAAgHgFgEQgJgJgNABIgBAAIgEABQgLgBgJALIgCgGIAAgFIAAgGQAAAAABgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQA4gQgSg6IgHAEIgBgDIANgQIgBgCQgMADgLgEIgEgCIAKAAIABgBQADgDADgCIABgDIAAgOIAAABIABgGIgCgEIAEAAIgGgOIgogFgAh6hiQgCABgBADIgBAAQgKAIgIAJIgCACIgQAOIgBAAIgBACIgEABIgDADIgHAFIgHAEIgDABQgEACAAADIABABIAFgBIABAAIADgBIAAABIACAAIAAgBIAHgBIAHgCIAGgBIAFAAIADgBIAhgBQADgBABgDIAAgCIABAAQADgTgFgSIgCgHQABAAgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgBAAIAAAAIgBAAIgBABgAAgisIACAAIADACIABABIAAABIABAHIAAABQgBAEgDADIgBACQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABABIAAACIABABIABADIAAADIABAIIAAAIIgBAEIAAAHIAAADIgBAFIgBABIgCADQgDAHgFAGQgMAMgPAFIgCABIgDAAIAEAJIAHgDIAAgCQANgGANgBIAFAAIAFAAQADgLAAgMIABgDIAAgBIABgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAIgBgwIAAAAIABgGIAAgFIABgGIgBgDIAAgCIAAgJIgBgDIgBgDIAAgBIAAgCIgBAAIAAgBIAAgCIgBgBIgCgGIgCgDIgBgDIgCgCIgFgHIgDgDIgCgBIgCgBIgDgDIgGgCIgIgDIgIgCQgEgBgFAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAABIgBABIAAADIAAABIAFADIAHACIAFABIAEABIAHABIACAAIAEABIAEACIABAAIABABIAFAFIAAABIAAABIABABIABADIABACIACAGIAAABIACAEIAAABIACACIAAABIAAAAIABADIAAABIABAAIABADIgBAAIgBgCIgBgBIgCgBIgDgDIgCgDgAiJDpIgCAAIgBgBIADAAIABAAIgBABgAgDDpIgCAAIAAgBIABAAIACAAIgBABgAC4gwIAAAAIAAABgAC5g2IgIgIIAAgYQAAgOAEgMQAEgTAIgQQAEgIAGgGIAKgLIADgCIACgBQADgCAFAAIAGABIACABIADABIACACQAEAFABAHIAAAPIgBAIIgBAFIgBABIgEAYIgDALIgBAFIgBAAIgCAIIgBAEIgGAPQgDAEgEACIgHAEIgIAEIgFAAQgHAAgEgEgADdisQgDAAgDADIgCABIgHAKIgEAIIgFAIIgEAIIgDAIIgDAJIgDAPIgBAQIABAOIACAPIAGAEIAHgCIADAAIAEgDIAFgDIAEgDIAEgDIACgCIADgHIADgHIABgDIACgGIACgJIAEgTIADgNQACgKAAgKIgBgIIgBgEIgBgDIgCgCIgDgCIgEgBIgIABgAAEh7IASAGIgGAAIgCACIACAOgAhaipIABgBIgBABgAghi3IgBgBIABAAIgBAAIABgCIABAAQACgDACgCIABgBIABAAIABAAIADgBIAAAAIACgBIADgBIABAAIADAAIADAAIAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBAAIgFgBIgCAAIgDAAIgFACIgCACIgCABIgBABIgBABIgBABIAAABIgBAAgAAKjFIAAgBIgBgBIAAgCIAAgBIABAAIAEAAIAIABIAAAAIACABIABAAIAAAAIgBABIAAAAIAAAAIgBAAIAAAAIgBAAIAAAAIgEgBIgCAAIgDABIgBAAIAAABIgCABg");
	this.shape_65.setTransform(287.1,112.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgGAFQgDgCAAgDQAAgCADgDQADgCADAAQAEAAADACQADADAAACQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_66.setTransform(293.7,190);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgdAlQAAgCACgDQACgCADAAIAIABIAJABQAHABAEgGQAEgFABgMQgDADgEACQgDACgEAAQgLAAgIgIQgHgHAAgLQAAgRAKgJQAKgKAQAAQAFAAAEABQAEABADADQAHABAAAHIgBALQgCAPgBAOQAAATgGAIQgIALgSABQgXAAAAgKgAgIgZQgFAFAAAKQAAAGADAEQACACAGAAQADAAAFgEQAFgFAAgGIADgRIgEgCIgEAAQgJAAgFAHg");
	this.shape_67.setTransform(288,188.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgDIAAgDQAAgEgCAAQgFgBgEAHQgFAGgDAJIAAAGIgBAFIAAAFIAAAFQAAADgDADQgCACgDAAQgEAAgCgCQgDgDAAgDIAAgEIAAgGIABgPIAAgPIAAgGIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAKQADAGAAAMIAAAEIAAADIABAMIABALQAAAEgCACQgDACgDAAQgHAAgBgHg");
	this.shape_68.setTransform(281.8,187.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGArQgDgCAAgEIAAgLIAAgKIAAgOIABgLQAAgEACgCQADgCADAAQADAAACACQACACAAAEIAAALIgBAOIAAAKIAAALQAAAEgCACQgCACgDAAQgDAAgCgCgAgEgdQgDgCAAgEQAAgDADgEQACgCADAAQAEAAADACQACAEAAADQAAAEgCACQgDACgEAAQgDAAgCgCg");
	this.shape_69.setTransform(277.1,185.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_70.setTransform(271.8,187.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAtQgCACgDAAQgDAAgCgCQgCgDAAgDIAAgEIAAgEIAAhBQAAgFACgDQACgFAEABQAHAAAAAGIAAADIgBADIAAAWIAJgEIAGgBQAOAAAJAKQAHAJAAANQAAANgJAKQgJAJgNAAQgIAAgIgCgAgGAAIgJAEIAAAZQAIADAGAAQAHAAAEgEQAFgFAAgIQAAgIgEgFQgEgEgHAAQgCAAgEACg");
	this.shape_71.setTransform(265,185.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgKAyQgDgDAAgDIAAgCIACgQIAAgcIgEABIgDAAQgEAAgCgCQgDgCAAgEQAAgFAGgBQADgCAHAAIABgGQACgNAFgGQAGgIAOAAQALgBAAAIQAAAIgKgBQgHABgEAFQgCADgBAIIAAACIALgBQALAAAAAHQAAAIgLAAIgMAAIAAAQIABAPQAAALgCAGQgBAGgGAAQgDAAgCgBg");
	this.shape_72.setTransform(328.3,167.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_73.setTransform(322.1,168.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_74.setTransform(310.4,168.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgEApQgDgCAAgDIAAgHIAAgGIgBgdIgLgBQgHgBAAgHQAAgEACgCQACgCAEAAIAKABIgBgHIAAgFQABgEACgCQACgCADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgCADQgCACgEAAIgDAAIgDAAIgFAAIAAAeIAAADIAAAEQAAANgIAAQgCAAgCgCg");
	this.shape_75.setTransform(304.4,167.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAOAbIgJAEIgHABQgOAAgGgHQgIgIAAgPQAAgNAKgKQALgKAOAAQAFAAAHADQAJADAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAJQAAAJABAFIADAHIADAFQgBADgCACQgCACgDAAQgDAAgGgFgAgIgLQgFAHAAAGQAAAJACADQADAFAGAAQADgBADgBQADgBADgDIgCgUIAAgDIABgGIgCgBIgCAAQgHAAgGAGg");
	this.shape_76.setTransform(298.3,168.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgEApQgDgCAAgDIAAgHIABgGIgBgdIgMgBQgHgBAAgHQAAgEACgCQACgCAEAAIAKABIgBgHIAAgFQAAgEADgCQACgCADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgDADQgCACgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAAEQABANgJAAQgCAAgCgCg");
	this.shape_77.setTransform(292.1,167.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgPAfQgJgEAAgGQAAgGAGAAIAIACIAIABQALAAAAgEQAAgDgIgEIgOgHQgJgGAAgHQAAgNAMgDQAIgDAOAAQAGAAADACQADACAAAFQAAALgFAAQgGAAgBgGIgFAAQgNABAAADQAAACAIAEQALAGAEACQAJAGgBAIQAAAKgJAFQgIAEgKAAQgHAAgGgCg");
	this.shape_78.setTransform(286.2,168.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_79.setTransform(274.7,168.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_80.setTransform(268.1,167);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgEApQgDgCAAgDIAAgHIAAgGIgBgdIgLgBQgHgBAAgHQAAgEACgCQACgCAEAAIAKABIgBgHIAAgFQABgEACgCQACgCADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgDADQgCACgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAAEQAAANgIAAQgCAAgCgCg");
	this.shape_81.setTransform(261.7,167.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAOAhQgIAAgEgOIgCgTIgCACIgJAXIgDAEQgCAEgFAAQgCAAgDgFQgEgFgCgIIgFgfIgCgIQAAgDADgDQADgCADAAQAGAAABAHIACAIIABAIIACAOIAKgdQADgIAFAAQAHAAACAJIADAQIADAPIAJgjQABgFAGAAQAEAAACADQADACgBADIAAACQgFAWgHASQgBAGgFAFQgCAEgEAAIgBAAg");
	this.shape_82.setTransform(249.6,168.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_83.setTransform(242.3,168.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_84.setTransform(235.8,167);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgPAfQgKgEABgGQgBgGAIAAIAIACIAHABQALAAAAgEQAAgDgIgEIgPgHQgIgGAAgHQAAgNANgDQAHgDAOAAQAGAAADACQADACAAAFQAAALgFAAQgGAAgBgGIgFAAQgNABAAADQAAACAIAEQALAGAEACQAJAGAAAIQAAAKgKAFQgIAEgKAAQgHAAgGgCg");
	this.shape_85.setTransform(229.3,168.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_86.setTransform(332.7,148.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgcAtQgDgDAAgEIAAg9IAAgIIAAgIQABgFAKgBIAOgBQALAAAKAGQAMAJAAANQAAAGgDAFQgCAEgFADQAGADAEAFQAFAHAAAFQAAAJgIAGQgGAFgGACQgNAFgUAAQgEAAgDgCgAgPAfQAKgBALgCQALgDgBgEQAAgFgGgDQgFgDgFAAIgPAAgAgPgSIAAAMIAIAAQARgBAAgLQAAgFgFgDQgFgFgGAAIgJAAg");
	this.shape_87.setTransform(325,148.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AggAsQgCgCAAgEIAAgNIAAgNIAAguQABgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAQAJAHAJQACACABADQgBADgCADQgCACgEAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgEAAQgDAAgDgCgAgSACIADAAQAOAAAHgDIAFgEIADgDQAAgHgJgGQgHgGgIgBIgIAAg");
	this.shape_88.setTransform(317.3,148.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAAEQAAAGgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_89.setTransform(309.7,148.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgMAqQgHgRgIgfIgGgQQgDgLAAgFQAAgDADgCQACgCAEAAQAFAAADAFIACALIAFATIAJAcIANgiIAFgOQADgJAEgEQADgDADAAQAEAAADACQACACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgHALIgDAMIgQAoIgHAOQgDAEgEAAQgFAAgDgFg");
	this.shape_90.setTransform(301.8,148.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAAEQAAAGgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_91.setTransform(288.9,148.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAEABIAEAAQADgCADAAQAHAAABAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgDgDIgEgBQgIAAgIAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDADAAQADAAACADQADACAAAEQAAADgEADQgQANgPAAQgNAAgKgJg");
	this.shape_92.setTransform(281.4,148.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AgpAtQgCgCAAgDIABgIIAAgHIAAgKIAAgKIAAgKIAAgMIgBgKIAAgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIgBgmIgBgGIAAgHQAAgIAJAAQAJAAAAAeIAAAJIAAAkIgBAJQgBAIgIAAQgEAAgFgFQgWgUgcgkIgBASIABAOIAAAOQAAARgJAAQgDAAgEgDg");
	this.shape_93.setTransform(272.8,148.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAAEQAAAGgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_94.setTransform(264.3,148.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_95.setTransform(256.2,148.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_96.setTransform(247.9,148.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_97.setTransform(240.4,148.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AARAhIgIgLIgHgKIgRAUIgLALQgDADgDAAQgEAAgCgDQgDgBAAgEQAAgDACgCIALgMIAVgWIgNgOIgGgJIgIgIQgDgCAAgEQAAgDACgCQADgDADAAQADAAAFAFIAHAGIAHAKIAKAMIAPgTQALgOAEAAQAEAAACADQADACAAADQAAACgDADIgMAPIgOASIAMARIANAQQADADAAADQAAADgDADQgCACgEAAQgGAAgJgOg");
	this.shape_98.setTransform(232.7,148.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAAEQAAAGgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_99.setTransform(224.9,148.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance}]},9).wait(21));

	// actionVerbs
	this.instance_1 = new lib.scene3redhead();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.3,103.7,0.186,0.186);

	this.instance_2 = new lib.scene3blondegirl();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.3,114.6,0.186,0.186);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgGAFQgDgCAAgDQAAgCADgDQADgCADAAQAEAAADACQADADAAACQAAAEgDABQgDADgEAAQgDAAgDgDg");
	this.shape_100.setTransform(84.1,171.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgCIAAgEQAAgEgCAAQgFAAgEAGQgFAHgDAIIAAAGIgBAFIAAAFIAAAGQAAADgDACQgCACgDAAQgEAAgCgCQgDgCAAgDIAAgGIAAgFIABgPIAAgQIAAgFIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_101.setTransform(78.5,168.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_102.setTransform(72.1,168.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgGAqQgDgCAAgDIAAgLIAAgKIAAgNIABgNQAAgDACgCQADgCADgBQADABACACQACACAAADIAAANIgBANIAAAKIAAALQAAADgCACQgCADgDAAQgDAAgCgDgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEgBQgDABgCgDg");
	this.shape_103.setTransform(67.5,167.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgFApQgCgCAAgDIAAgHIAAgGIAAgdIgLgBQgIgBAAgHQAAgEACgCQADgCADAAIAKABIAAgHIAAgFQgBgEADgCQACgCAEAAQAHAAAAAPIAAAEIAGAAQAHAAACABQAFACAAAFQAAADgCADQgDACgDAAIgDAAIgDAAIgFAAIABAeIAAADIAAAEQAAANgJAAQgCAAgDgCg");
	this.shape_104.setTransform(62.9,167.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgRAaQgKgIAAgMQAAgLAJgNQAJgOALAAQAHAAAIADQAKAEAAAGQAAADgCACQgDACgDABQgCAAgEgDQgDgDgIAAQgDAAgFAIQgFAJAAAGQAAAFAEAEQAEAEAGgBQAEAAAGgDIAHgCQADAAACACQADACAAADQAAAEgKAFQgJAEgGAAQgMAAgIgHg");
	this.shape_105.setTransform(56.8,168.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAOAbIgKAEIgGABQgNAAgIgHQgGgIgBgPQABgNAJgKQALgKANAAQAGAAAIADQAIADABAGQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAJQAAAJACAFIACAHIACAFQABADgDACQgDACgDAAQgCAAgGgFgAgHgLQgHAHAAAGQAAAJADADQADAFAGAAQACgBADgBQAEgBADgDIgCgUIABgDIAAgGIgCgBIgCAAQgGAAgGAGg");
	this.shape_106.setTransform(50.6,168.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAOAhQgHAAgFgOIgDgTIgBACIgJAXIgCAEQgDAEgFAAQgDAAgDgFQgDgFgCgIIgFgfIgBgIQgBgDADgDQADgCADAAQAGAAACAHIABAIIABAIIACAOIAKgdQACgIAGAAQAGAAACAJIAEAQIADAPIAJgjQABgFAHAAQADAAACADQADACAAADIAAACQgHAWgGASQgBAGgEAFQgDAEgEAAIgBAAg");
	this.shape_107.setTransform(38,168.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_108.setTransform(30.6,168.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_109.setTransform(24.2,167);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgQAfQgIgEgBgGQAAgGAHAAIAJACIAHABQALAAAAgEQAAgDgIgEIgPgHQgIgGAAgHQAAgNANgDQAHgDAOAAQAFAAADACQAFACAAAFQAAALgHAAQgFAAgBgGIgFAAQgNABAAADQAAACAHAEQAMAGAEACQAJAGAAAIQAAAKgKAFQgHAEgKAAQgIAAgHgCg");
	this.shape_110.setTransform(17.6,168.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_111.setTransform(94,148.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AgcAtQgDgDAAgEIAAg9IAAgIIAAgIQABgFAKgBIAOgBQALAAAKAGQAMAJAAANQAAAGgDAFQgCAEgFADQAGADAEAFQAFAHAAAFQAAAJgIAGQgGAFgGACQgNAFgUAAQgEAAgDgCgAgPAfQAKgBALgCQALgDgBgEQAAgFgGgDQgFgDgFAAIgPAAgAgPgSIAAAMIAIAAQARgBAAgLQAAgFgFgDQgFgFgGAAIgJAAg");
	this.shape_112.setTransform(86.2,148.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AgfAsQgCgCgBgEIAAgNIAAgNIAAguQAAgEADgDQADgEAGAAIAOABQAIABAFADQAZANAAATQAAAHgFAFQgFAGgLAEQAQAJAHAJQADACgBADQABADgDADQgDACgDAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgEAAQgDAAgCgCgAgSACIADAAQAOAAAHgDIAFgEIADgDQAAgHgJgGQgHgGgIgBIgIAAg");
	this.shape_113.setTransform(78.6,148.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAAEQAAAGgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_114.setTransform(71,148.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AgMAqQgHgRgIgfIgGgQQgDgLAAgFQAAgDADgCQADgCADAAQAFAAADAFIACALIAGATIAIAcIANgiIAFgOQADgJAFgEQACgDADAAQAEAAADACQACACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgGALIgDAMIgRAoIgGAOQgCAEgEAAQgHAAgCgFg");
	this.shape_115.setTransform(63.1,148.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AgpAtQgBgCgBgDIABgIIAAgHIAAgKIAAgKIAAgKIAAgMIgBgKIAAgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIAAgmIgBgGIgBgHQAAgIAJAAQAJAAAAAeIAAAJIAAAkIgBAJQgCAIgHAAQgEAAgFgFQgWgUgcgkIAAASIAAAOIAAAOQAAARgIAAQgFAAgDgDg");
	this.shape_116.setTransform(48.9,148.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF0000").s().p("AgeAkQgNgKAAgRQAAgTAMgRQAOgSAVAAQAUAAAKAJQAKAKAAATQAAASgLARQgNASgVAAQgRAAgMgKgAgSgQQgJALAAAOQAAAJAIAHQAHAFALAAQAMAAAJgMQAIgMAAgNQAAgNgGgFQgFgEgNAAQgNAAgJANg");
	this.shape_117.setTransform(39.2,148.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF0000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_118.setTransform(31.1,148.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF0000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_119.setTransform(23.7,148.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF0000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAEABIAEAAQADgCADAAQAHAAABAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgDgDIgEgBQgIAAgIAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDADAAQADAAACADQADACAAAEQAAADgEADQgQANgPAAQgNAAgKgJg");
	this.shape_120.setTransform(15.9,148.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF0000").s().p("AAVAhIgGgQIgOABIgOACIgIATQgDAFgFAAQgDAAgCgDQgDgCAAgDQAAgDAIgRIgBgEQABgDAGgBQAIgOAKgPQANgWAEAAQAHAAACAHIADATIAJAmIADAIIACAHQAAAEgDACQgCACgDAAQgFAAgEgLgAgEAFIAIgBIAIAAIgEgTIgMAUg");
	this.shape_121.setTransform(7.7,148.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.instance_2},{t:this.instance_1}]},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.7,0,348.7,83.3);


(lib.content_scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.predicate_def();
	this.instance.parent = this;
	this.instance.setTransform(204.3,181.8,1,1,0,0,0,177.7,97.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhOBfQgSgOAAgRQAAgKAFgFQAGgHAKAAQANAAAGAOQAIASAeAAQAYAAAYgMQAYgKAAgOQAAgTgPgFQgLgEgggCQgZAAgUgIQgbgMAAgWQABgeAegXQAegYAjAAQAOAAAVAHQAbAIAAALQAAAHgGAGQgFAGgKAAQgHAAgNgCQgOgDgHAAQgTAAgQAJQgRAJAAALQAAAFAFAEQAFADALACIAkACQAhACATAQQAUARAAAfQAAAlgrAUQggAPgqAAQglAAgVgRg");
	this.shape.setTransform(332.3,37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhIBvQgHgHAAgIIAAibIAAgUQgBgLABgIQACgOAYgDQALgCAaAAQAaAAAaARQAeAVAAAfQAAARgHAMQgEAJgMAKQAOAHALANQAMAQAAAQQAAATgVASQgOALgQAGQghAMg0AAQgJAAgHgHgAgnBPQAZgCAdgIQAagIgBgIQAAgLgQgJQgNgHgLgBIgngBgAgnhOIAAAgIAAAeQANACAHgBQAsgDAAgeQAAgKgNgKQgNgKgPAAIgXAAg");
	this.shape_1.setTransform(313,36.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhPBuQgGgGAAgJIAAggIAAghIABh2QAAgJAFgIQAIgKANABIAkADQAVADANAHQA/AfAAAvQAAATgNAOQgNAPgbAKQAoAVATAXQAFAGAAAHQAAAIgGAGQgGAGgJAAQgHAAgHgGQgsgqg0gQIABAvQAAAJgGAGQgGAFgIAAQgJAAgGgFgAgsAEIAGAAQAkAAAQgHQAHgEAHgHQAGgGAAgDQAAgQgVgQQgTgOgVgCIgRgBg");
	this.shape_2.setTransform(293.7,36.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhEBwQgPgOAAgwQAAgTACgnQADgnAAgTIgBgQIgCgPQAAgWAVAAQAGAAAGAEQARgFAPgCQAPgCANAAQAlAAAWAJQANAFAAANQAAAIgFAGQgGAGgJAAIgGAAQgYgHgWAAIgXACIgaAFIgCA6IA4gFIAkgDQAJAAAGAFQAGAGAAAJQAAAQgTADIgjADIg9AFIgBAeQAAAdADAEQACACAQAAIAbgBIAbAAIAJgBIAIgBQAJAAAGAFQAHAGAAAJQAAARgRADQgPADgtAAQgwAAgPgNg");
	this.shape_3.setTransform(274.8,36.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgfBoQgTgrgVhPIgMgoQgJgbAAgLQABgIAGgGQAGgGAIABQAOAAAGAOIAGAZIAOAwQALApALAgIAhhXIANgjQAJgWAKgLQAGgHAJAAQAJAAAGAFQAHAHAAAIQAAAGgFAGQgHAKgHARIgLAdIgoBlQgGARgKASQgGALgLAAQgPAAgGgOg");
	this.shape_4.setTransform(255.1,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhEBwQgPgOAAgwQAAgTACgnQADgnAAgTIgBgQIgCgPQAAgWAVAAQAGAAAGAEQARgFAPgCQAPgCANAAQAlAAAWAJQANAFAAANQAAAIgFAGQgGAGgJAAIgGAAQgYgHgWAAIgXACIgaAFIgCA6IA4gFIAkgDQAJAAAGAFQAGAGAAAJQAAAQgTADIgjADIg9AFIgBAeQAAAdADAEQACACAQAAIAbgBIAbAAIAJgBIAIgBQAJAAAGAFQAHAGAAAJQAAARgRADQgPADgtAAQgwAAgPgNg");
	this.shape_5.setTransform(222.8,36.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgNBrQgHgGAAgJIAAgGIABgGIgBgVIAAgUQAAgUgDggIgFg1IgIAAQggAAgUgFQgPgEAAgPQAAgIAEgGQAHgHAKABIAXACIAXACIAbAAIAagBIAiACIAhABQAJAAAFAGQAHAGAAAIQAAAJgHAFQgFAGgJAAIgkgBQgXgCgMAAIADA8QADAkAAAWIACAPIABAPQAAALgFAJQgGALgLAAQgHAAgGgFg");
	this.shape_6.setTransform(202.8,36.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAzBTQgIgRgFgXIgkADQgWACgMADQgHAPgRAhQgGAKgLAAQgJABgGgGQgGgGAAgIQAAgIAVgrQgCgEAAgEQABgHANgFQAVgjAagmQAjg4AJABQAQgBAFAUIAKAvIAVBfIAIAUQAFAMAAAHQAAAIgGAGQgHAGgIgBQgLAAgMgbgAgLAOIAUgDIAUgCIgJgwIgfA1g");
	this.shape_7.setTransform(181.1,37.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhBBZQgVgXAAgfQAAgwAqgzQAlgsAlAAIAMABIAJABQAGgGAJAAQAPAAAEARQACAMAAARQAAAHgEAGQgFAIgLAAQgNAAgHgOQgCgHgDgBQgDgBgJAAQgSAAgYAdQghAnAAAjQAAAQAKALQALAMAPAAQANAAAPgIQAGgDARgLQALgIAGAAQAJAAAGAGQAGAGAAAIQAAAJgIAGQgoAigpAAQghAAgXgYg");
	this.shape_8.setTransform(161.1,36.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhFBqQgGgGAAgIQAAgIAHgGQAGgGAJAAIAcgCIAAhCQAAgnADgkIggABQgJAAgGgGQgGgGAAgIQAAgJAGgFQAFgFAIgBQAMgBAfAAQAbAAAsAGQASADAAARQAAAKgHAFQgGAFgHAAIgmgEQgCAaAAAsIgBBCIAogBQAJAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgJAAIgZABIgZAAQgJAAgUADQgUACgKAAQgJAAgGgGg");
	this.shape_9.setTransform(143.3,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgtB2QgRgEgKgGQgJAAgFgGQgGgGAAgIIABgsIABgsIAAgvIgBgxQAAgIAIgIQAIgIAIAAQAFAAAUAJIAbAMQAqAOAeAdQAkAjAAApQAAAZgMAXQgNAXgVAOQgZAQgrAAQgLAAgNgDgAgzBLQAGADAIACQAHACAJAAQAfAAANgJQANgIAIgPQAIgOAAgQQAAgjgrgaQgNgJgvgTg");
	this.shape_10.setTransform(125,37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhEBwQgPgOAAgwQAAgTACgnQADgnAAgTIgBgQIgCgPQAAgWAVAAQAGAAAGAEQARgFAPgCQAPgCANAAQAlAAAWAJQANAFAAANQAAAIgFAGQgGAGgJAAIgGAAQgYgHgWAAIgXACIgaAFIgCA6IA4gFIAkgDQAJAAAGAFQAGAGAAAJQAAAQgTADIgjADIg9AFIgBAeQAAAdADAEQACACAQAAIAbgBIAbAAIAJgBIAIgBQAJAAAGAFQAHAGAAAJQAAARgRADQgPADgtAAQgwAAgPgNg");
	this.shape_11.setTransform(104.7,36.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AhPBuQgGgGAAgJIAAggIAAghIABh2QAAgJAGgIQAHgKANABIAkADQAVADANAHQA/AfAAAvQAAATgNAOQgNAPgbAKQAoAVATAXQAFAGAAAHQAAAIgGAGQgGAGgIAAQgJAAgGgGQgtgqg0gQIACAvQAAAJgGAGQgFAFgKAAQgIAAgGgFgAgsAEIAGAAQAjAAARgHQAIgEAGgHQAGgGAAgDQAAgQgVgQQgTgOgWgCIgQgBg");
	this.shape_12.setTransform(85.6,36.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AhBBvQgGgFAAgIIAAgpQAAgXADgrQADgtAAgXQAAgmAVACQAFgCAJAAIAVgBQAcAAAZATQAcAVAAAdQAAAmgdAVQgbAUgkAAIgMgCIAABEQAAAIgGAFQgFAGgJAAQgIAAgFgGgAgbg5IgCAzIAJABQAXAAAOgLQAQgMAAgTQAAgMgPgKQgOgJgQAAIgIAAIgHAAIAAAVg");
	this.shape_13.setTransform(67.8,36.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.content_scene1, new cjs.Rectangle(33.3,12.6,348.7,154.6), null);


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
		var bgm = createjs.Sound.play('bgmAux',{loop:-1});
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.1;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("verb_menu.html","_self");
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
		
		 window.open ("pred_Scene2.html","_self");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-114,-13,161.8,395), null);


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
(lib.pred_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1repeat:147});

	// timeline functions:
	this.frame_0 = function() {
		///* 
		//drop background music into bgmusic_start layer and set sync: event loop throught he properties tab
		//drop background music into bgmusic_stop layer and set sync: stop loop
		//
		//use actionscript sound object in first frame and then just call the sound object when needed.
		//
		//soundobject = new Sound();
		//soundobject.attachSound("name_of_exported_soundfile_through_linkage");
		//
		//_root.soundobject.start(); //from anywhere
		//*/
	}
	this.frame_3 = function() {
		playSound("predicateverbsdefinition");
	}
	this.frame_85 = function() {
		playSound("needtoreview");
	}
	this.frame_167 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(82).call(this.frame_85).wait(82).call(this.frame_167).wait(1));

	// content
	this.instance = new lib.content_scene1();
	this.instance.parent = this;
	this.instance.setTransform(274.7,191.1,1,1,0,0,0,204.2,146.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Copyright("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,393.5);

	this.instance_2 = new lib.Bk("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,190.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.UI}]}).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297.5,201.6,519,401.3);
// library properties:
lib.properties = {
	id: '83CF1336E299044DB73D9FAA125106F2',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/Cowbell.mp3", id:"Cowbell"},
		{src:"sounds/bgmAux.mp3", id:"bgmAux"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/needtoreview.mp3", id:"needtoreview"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/predicateverbsdefinition.mp3", id:"predicateverbsdefinition"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
		{src:"sounds/trumpet_lick.mp3", id:"trumpet_lick"},
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
an.compositions['83CF1336E299044DB73D9FAA125106F2'] = {
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