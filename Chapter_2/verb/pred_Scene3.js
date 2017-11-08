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
	this.shape.graphics.f().s("#009999").ss(3,1,1).p("EgnNgXjMBObAAAMAAAAvHMhObAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCFFFF","#FEFDB4"],[0,1],0,-153.2,0,153.3).s().p("EgnNAXkMAAAgvHMBObAAAMAAAAvHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.5,-152.3,505,304.7);


(lib.tobespeakbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmnEwIgIgBIgEgEIgEgCIgFgCIgEgCQgfgWgRgjQgJgSgDgWIgLhrQgEgpgBgpQgCg7AFg6IABgKIAAgKIAAgFIABgDIACgCIAAgNIAAgTIAAgMIAAgNIAAgCIAAgIIAAgCIAAgDIgBgCQAAgiALgfIAFgGIAFgHQAYgDAYgHQAHgCAIAAQB5ACB5gCIABACQBUABBTgBQDlgDDjAQQAOABALAIQAGAFAEAFIADAFQAEABADADIABABIAAADIABACIAAADIABAFIABADIABACIACADIAAACIAAADIACACIACADIACADQALAfgCAjIgBAXIAAADIAAAHIAAADIAAACIAAADIACACIABADIADADIAAACIABADIACAFIABACIAAADIABACIACADIACACQAFADADAFIACADIACADIAAACQgfAKggAFIgGABIgZAFIgGACIgHACIgFABIgZAVIgKAKIgCADQgCAEgDADIgDADIgBACIgCACIAAANIAAAFIAAAIIAAACIAAAIIAAACIAAADIgBACQgEAEgBAEIgDAIIgEAHIAAADQAAAEgDAEIgBACIgCADIgCACIAAAXQAAANgCAMQgNA9gdA3IgFAKQgCAGgFADQgEADgFACQgNAPgVACQhhAIhigBQg5AAg6AFQgPABgPAAQhjAChiAAIiDgBg");
	this.shape.setTransform(-0.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmvFCQgNAAgLgEIgCgDIgBgCIgCAAIgFgDIgDgCIgFgFIgCgCIgCgCIgFgCIgDgCIgDgDIgHgGIgFgCIgDgGIgGgJQgFgFgDgFQgQgbgCghIgEgwQgIhTgChTQgChAAGg/IACglQgBgaAAgaIABghIACgDIAEgFQAJgrAtgDQARgCASAAIDbgEIAPABQDjAIDkgGIheAFIADAAIARAAIClAAQBDgBA8AZQAGADAFAFQAUARADAbIADACIABADIABACQACAEAAAEIAAADQAFAMAAANIABBIIACACIACADIACACIACAFIABADIABADIAAACIABACIADADIACADQACAEAEADIAFADIAJAHIAGAGIACACIAAADIAAACIgBADIgBACIAAACIgCABIgEABIgSADIgQAEIgIABIhXAVIgCACIgCACIgDACQgDADgEACIgEACIgIAHQgFAFgDAFIgGAHIAAADIAAACIAAADIAAAIIAAACQAAAJgCAJIgLAnQgCAGgGAEIAAAFIAAAKIAAAKQgBAkgLAiQgRAygeAuIgHAEQgIADgHAEQgKAIgOACQhlAQhqgDQg4gCg4AEIgQACQgIACgJAAIhIABQh/AAh/gDgAnKktQgYAHgYACIgFAIIgFAFQgLAfAAAiIABADIAAACIAAADIAAAHIAAADIAAANIAAALIAAATIAAANIgCADIgBACIAAAFIAAALIgBAKQgFA6ACA6QABAqAEAoIALBsQADAVAJATQARAjAfAWIAEABIAFACIAEADIAEAEIAIABQCkACCkgDQAPAAAPgCQA6gFA5ABQBiABBhgIQAVgCANgQQAFgBAEgDQAFgEACgGIAFgKQAdg2ANg9QACgMAAgNIAAgXIACgDIACgCIABgDQADgDAAgFIAAgCIAEgIIADgHQABgFAEgDIABgDIAAgCIAAgDIAAgHIAAgDIAAgIIAAgFIAAgNIACgBIABgDIADgCQADgEACgEIACgCIAKgKIAZgWIAFgBIAHgCIAGgBIAZgGIAGgBQAggFAfgKIAAgCIgCgDIgCgCQgDgGgFgCIgCgDIgCgCIgBgDIAAgCIgBgDIgCgFIgBgCIAAgDIgDgDIgBgCIgCgDIAAgCIAAgDIAAgCIAAgIIAAgCIABgXQACgjgLggIgCgCIgCgDIgCgDIAAgCIAAgDIgCgCIgBgDIgBgCIgBgGIAAgCIgBgDIAAgCIgBgCQgDgCgEgBIgDgFQgEgGgGgEQgLgIgOgBQjjgRjlAEQhTABhUgCIgBgCQh5ACh5gBQgIAAgHACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobespeakbubblestill, new cjs.Rectangle(-55,-32.4,110.1,64.9), null);


(lib.tobe4wordsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape.setTransform(102.2,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_1.setTransform(94.4,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgdBJQgDAFgFAAQgEAAgCgCQgDgDAAgEIABgIIAAgHIgBgfIAAgeIAAgbIAAgbQAAgGACgFQAEgGAFAAQAIAAAAAJIgBADIAAAFIgBAVIAAAZQAJgGAHgCQAIgDAGgBQAVAAANAQQAMAOAAAXQAAAWgOAQQgPAPgUAAQgPAAgMgGgAgPgEIgOAJIAAARIAAAPIAAAQIANAGQAGABAIAAQANABAJgLQAJgKAAgOQAAgPgHgJQgIgKgNAAQgHAAgJAEg");
	this.shape_2.setTransform(83.1,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_3.setTransform(65.5,8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBEQgCgCAAgDIAAgMIAAgLIgCg4IgWgBQgIgCAAgJQAAgEADgCQACgDAEAAIAVACIAAgOIgBgMQAAgEADgDQACgCAFAAQAHAAACAOIAAAIIAAAHIAAAGIANgCQALAAADABQAGABAAAIQAAAEgDADQgCADgFAAIgEAAIgGAAIgMABIABA4IAAAFIAAAFQABAVgLABQgDgBgDgDg");
	this.shape_4.setTransform(55.8,6.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGBEQgCgCAAgDIAAgMIAAgLIgCg4IgWgBQgIgCAAgJQAAgEADgCQACgDAEAAIAVACIAAgOIgBgMQAAgEADgDQACgCAFAAQAHAAACAOIAAAIIAAAHIAAAGIANgCQALAAADABQAGABAAAIQAAAEgDADQgCADgFAAIgEAAIgGAAIgMABIABA4IAAAFIAAAFQABAVgKABQgDgBgEgDg");
	this.shape_5.setTransform(40.4,6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_6.setTransform(30.3,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_7.setTransform(20.3,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgIAHQgJAHgGAMIAAA1QABAKgKAAQgJAAAAgKg");
	this.shape_8.setTransform(4.3,8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_9.setTransform(-6.2,8.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_10.setTransform(-22.5,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgdBJQgDAFgFAAQgEAAgCgCQgDgDAAgEIABgIIAAgHIgBgfIAAgeIAAgbIAAgbQAAgGACgFQAEgGAFAAQAIAAAAAJIgBADIAAAFIgBAVIAAAZQAJgGAHgCQAIgDAGgBQAVAAANAQQAMAOAAAXQAAAWgOAQQgPAPgUAAQgPAAgMgGgAgPgEIgOAJIAAARIAAAPIAAAQIANAGQAGABAIAAQANABAJgLQAJgKAAgOQAAgPgHgJQgIgKgNAAQgHAAgJAEg");
	this.shape_11.setTransform(-33.8,5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_12.setTransform(-51.4,8.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGBHQgDgCAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgDQgIgBAAgJQAAgEADgDQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAPIABALIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgDg");
	this.shape_13.setTransform(-62.4,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobe4wordsstill, new cjs.Rectangle(-72.1,-11.1,184.9,31.9), null);


(lib.tobe4words2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape.setTransform(-1.3,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAHIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgVIAAgGIgBgHQAAgEADgCQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAIIAAAFIACAQIABAQQAAACgCACQgCACgDABQgGAAgBgHg");
	this.shape_1.setTransform(-7,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_2.setTransform(-15.2,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_3.setTransform(-21,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgBQgHgCAAgGQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGABABAKIAAAHIAAAEIAAAFIAKgBIAKAAQAFACAAAFQAAADgCACQgCACgEABIgDAAIgEAAIgKABIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_4.setTransform(-26.7,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAoQgLgDAAgIQAAgDACgCQACgCAEAAQACAAAEADQABACAGABIAIABQAFAAAGgBQAGgCAAgFQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAAEIABAFIABAHQAAADgCACQgCACgEAAQgEAAgBgDIgCgHIgRAEQgLAFAAAHIAFACQAPADAJAEQALAHABAPQAAAMgKAGQgKAFgMAAQgJAAgJgEg");
	this.shape_5.setTransform(-34.1,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAfQgMgIAAgRQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbAOQAEAFAGAEQAHADAHAAQAEAAAIgCQAIgCACgEQADgEADAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_6.setTransform(-41.5,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgEgBgJQgDgUAAgOQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_7.setTransform(-49.6,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAKA0IABgIIABgIIABgQIgJABQgPAAgKgIQgKgJAAgOQAAgWAMgNQAMgNAUAAQAEAAADADQADgDACAAQADAAACADQACACAAADQAAAWgCAZIgEAbIgBAcQAAADgCACQgCACgEAAQgGAAgBgHgAAIgtQgMACgHALQgGAJAAANQAAAIAGAFQAFAGAKAAQAHgBADgHQADgHABgUIABgTIgGAAIgDAAIgCAAg");
	this.shape_8.setTransform(-57.7,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAfQgMgJAAgQQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbANQAEAHAGACQAHADAHAAQAEAAAIgCQAIgCACgDQADgFADAAQACAAACACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_9.setTransform(22,-5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_10.setTransform(13.5,-7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_11.setTransform(5.5,-6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgTApQgMgFAAgHQAAgCADgDQACgCACAAQADAAAEADQABACAHABIAIABQAFAAAFgCQAGgCAAgEQAAgKgOgEIgHgBQgJgCgEgDQgGgEAAgHQAAgQAPgHIAMgEIAPgFIAGgBQADAAACACQACACAAADIABAHIABAFQAAAEgCACQgCACgDAAQgFAAgBgDIgCgIIgRAGQgKAFAAAGIADABQAQAEAJAEQAMAIgBAOQABAMgLAGQgJAFgLAAQgKAAgIgDg");
	this.shape_12.setTransform(-6.3,-5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_13.setTransform(-11.8,-7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_14.setTransform(-23,-7.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_15.setTransform(-34.3,-7.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgtA6QgCgCAAgDIABgXIABgXIAAgMIAAgMIABgRIAAgSQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAASIgBARIAAASIAfgFQATgDAMgBIABgfQAAgGACgGQACgHAFgBQADABACACQACACAAADIgBADIgBAJIAAAGIABAHIgCAVIgBAWIABAQIABARQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgRIgBgQIAAgLQgMAAgSADIgeAHIgCASIgBATQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_16.setTransform(-45.3,-7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_17.setTransform(-55.6,-7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTA2QgDgCAAgCQAAgFADgEQADgEAEAAQAHAAAAAIQAAAFgCADQgCAEgEAAQgDAAgDgDgAgOAaQgDgCAAgCQAAgGAKgHIAQgMQAKgJAAgGQAAgIgIgIQgIgGgIAAQgEgBgHAFQgHAEgCABQgDAAgCgCQgCgDAAgDQAAgGALgFQAKgGAGAAQAOAAAMALQAMAMAAAPQAAALgHAHQgEAFgLAIQgLAIgEAFQgCADgDAAQgDAAgCgDg");
	this.shape_18.setTransform(54.1,-29.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgZAgQgKgKgBgQQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAALQAAAHgIAGIgPAHIgbAOQAEAFAGAEQAHACAGAAQAGAAAHgBQAIgDADgEQACgDACAAQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_19.setTransform(42,-28.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIAAgWIAAgUIAAgVQAAgEABgEQADgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAGgDAEAAQAPAAAKAMQAKALAAAQQAAARgMAMQgKALgPAAQgLAAgKgEgAgLgCIgKAGIgBAMIAAAMIABAMIAJAEIALABQAKAAAGgHQAHgIAAgLQAAgLgFgHQgGgHgKAAQgGAAgGAEg");
	this.shape_20.setTransform(33.5,-30.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgIQAAgHAGAAQAIAAgBANQAOgOARAAQAGAAADAFQACADABAJIAAAGQgBAJgHAAQgGAAAAgHIAAgGIgBgFQgLABgGAFQgHAFgEAKIAAAmQAAAIgHAAQgHAAABgIg");
	this.shape_21.setTransform(21,-28.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAgQgLgKAAgQQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAALQAAAHgIAGIgQAHIgbAOQAEAFAGAEQAGACAIAAQAFAAAGgBQAJgDACgEQADgDACAAQADAAADACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgPgTQgFAHgDANIAWgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_22.setTransform(13.3,-28.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAiIgLgeIgNggIgBgEQAAgDACgCQACgCADAAQAFAAACAEIASAzIANghIAGgRQADgFAEAAQADAAACACQACADAAADQAAACgMAdIgPAhQAAAHgGAAQgFAAgCgGg");
	this.shape_23.setTransform(5.4,-28.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAgQgMgKAAgQQABgSAIgNQAKgOARAAQALAAAJAEQAIAFABALQgBAHgHAGIgQAHIgbAOQAEAFAGAEQAGACAIAAQAEAAAHgBQAJgDACgEQADgDADAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_24.setTransform(-2.2,-28.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AggA2QgBgCAAgDQAAgEABgCQADgCADAAIAPgBIACgOIgBgMIgBgNQABgPACgaIgKABIgJAAQgEAAgCgDQgCgBAAgEQAAgGAHgCIAWAAQAOAAAVADQAHABAAAHQAAAEgDACQgCABgCAAIgMAAIgMgCIgCAnIAAANIABANIgBAMIAYAAQACAAACACQACACAAADQAAADgCADQgCACgCAAIgNAAIgMAAIgOACIgOABQgDAAgDgCg");
	this.shape_25.setTransform(-15.1,-30);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAyQgKgLAAgQQAAgUAKgKQAKgMAQAAQAIAAAFADIAHAFIACgpQABgHAGAAQAGAAABAHIgEAtIAAAUQAAAZACAMIAAACQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgFABgDgHQgEAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAIAAAOQABAKAGAGQAHAHAJAAQAFAAAFgCIAIgHIACgBIAAgOIAAgIIAAgJQgDgFgFgDQgFgDgGAAQgLABgGAGg");
	this.shape_26.setTransform(-28.1,-30.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHA1IABgaIABgbIAAgZIAAgbQAAgHAHgBQAGABABAHIgBAbIAAAZIgCAlIAAARQgBAGgFAAQgIABABgIg");
	this.shape_27.setTransform(-34.5,-30.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAQAjQgJAEgLAAQgJAAgHgDQgHgGgBgJQgDgSAAgPQAAgKACgMQABgHAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgEIAAgOIAAgNQAAgQABgMQABgGAGgBQADAAADACQACADAAADIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_28.setTransform(-40.5,-28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_29.setTransform(-48.5,-28.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_30.setTransform(-56.7,-30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobe4words2still, new cjs.Rectangle(-63.4,-43.2,123.9,70.7), null);


(lib.tobe4wordbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AkoDhQjXgQisgqQkbhFAAhiQAAhHCag5QA3gUBKgSQEbhFGQAAQGRAAEbBFQEbBFAABhQAABikbBFQkbBFmRAAQg3AAg2gB");
	this.shape.setTransform(1.9,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlRDuQgYgqgpgLIgNgDIAAABIgJACQgIAEAAAJIABAHQjXgRisgqQkbhFAAhgQAAhJCag4QA3gUBKgTQEbhEGRAAQGPAAEbBEQEbBFAABjQAABgkbBFQkbBGmPgBIhvgBIgBgGQgDgKgKACIgGABQgrALgQAtQgHgIgGgLgAQWCxIADgBQAagMAYgOIACAAIABAAIgIAKQgHAHgCAKIgnAAg");
	this.shape_1.setTransform(15.4,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHA3IgEgKIgBAAIgIgVQgOgegcgXQgaAAgEgSIgBgHQAAgJAIgFIAJgBIAAgBIANADQApAKAXArQAGALAHAGQAQgrArgLIAGgBQAKgCADAKIACAGQACAUgXAKQgKAEgFAIQgSAfgNAgQgCAEgGAAQgSgBgIgPg");
	this.shape_2.setTransform(-18.5,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobe4wordbubblestill, new cjs.Rectangle(-96.2,-20.7,221.9,59.6), null);


(lib.scene1wordsforprostill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(39.1,-7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgJAAgHALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgDACQgCACgDAAQgEAAgDgCQgBgCAAgEIgBgIIAAgHIABgXIAAgXIAAgIIAAgIQAAgEACgCQADgCAEAAQAHAAABAKIAAAKQAOgSANAAQAOAAAFALQAEAIAAAPIAAAJIAAAGQAAAHACALIACASQgBAEgCACQgCACgEAAQgHAAgBgIg");
	this.shape_1.setTransform(32.7,-11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAjQgLgLgBgUQAAgRAKgOQALgSAUABQARAAAIAOQAHANAAARQgBARgJANQgLAPgQABQgOAAgKgLgAgOgQQgGAJAAALQAAAMAHAHQAGAFAHABQAIAAAGgHQAHgGAAgNQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_2.setTransform(23.4,-11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHA8QgCgCgBgEIAAgPIAAgOIAAgUIABgTQABgDACgCQACgDADAAQADAAADADQACACAAADIgBATIgBAUIABAOIAAAPQAAAEgCACQgDACgDABQgDgBgCgCgAgEgtQgEgDAAgEQAAgEAEgDQADgCACAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgCAAgDgDg");
	this.shape_3.setTransform(16.9,-13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_4.setTransform(10.3,-13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAvQgNgFAAgJQAAgDACgCQADgDADAAQADAAAEAEQACACAHABIAKABQAFAAAFgCQAJgCgBgFQABgMgRgDIgHgDQgLgBgEgEQgIgEABgJQAAgSAQgGIAPgGQALgDAEgDQAEgBAEAAQAEAAACACQACADAAADIABAIIABAHQAAAEgCACQgDACgDAAQgFAAgBgDIgDgJIgTAGQgMAFAAAIIAFACQASACAJAHQAOAHAAARQAAANgMAIQgKAFgNAAQgMAAgJgDg");
	this.shape_5.setTransform(2,-11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAGgFQgHgHgMAAQgKAAgGAIg");
	this.shape_6.setTransform(-6.4,-11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATAoQgLAFgNAAQgKAAgIgEQgHgGgCgKQgDgWAAgQQAAgLADgPQAAgIAIABQADgBACADQADACAAAEIgBAMIgCANIACAWQAAALACAFIAFACIAFABQALAAAMgDIAAgRIAAgPQAAgSACgNQAAgIAIAAQADAAACACQADACAAAEIgCAfIAAARIAAASIABAGIAAAGQAAADgDACQgCACgDAAQgHABgBgIg");
	this.shape_7.setTransform(-15.6,-11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAMA7IAAgJIABgJIACgTIgKACQgSAAgLgJQgMgKAAgRQAAgYAOgPQAOgPAXAAQAFAAACAEQAEgEACAAQAEAAACADQADADAAADQAAAZgDAcIgEAfQgCASAAAOQAAAEgCACQgDACgDAAQgIAAAAgIgAgNgkQgGAKAAAOQAAAKAGAFQAGAHALAAQAIgBAEgIQAEgIAAgWIABgXIgGABIgGgBQgOADgIANg");
	this.shape_8.setTransform(-24.8,-9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAkQgOgLAAgSQAAgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgQAGQgMAGgMAAQgSAAgLgJgAgRgWQgGAIgDAPIAZgLQAOgIAGgFQgGgHgNAAQgJAAgIAIg");
	this.shape_9.setTransform(55,-37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAFAAAOIABARIACARIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_10.setTransform(45.4,-39.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_11.setTransform(36.3,-38.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAHAAAEgBQAIgDAAgFQAAgMgPgEIgIgBQgLgCgEgEQgIgEAAgJQAAgRARgIIAPgFQALgDAEgCQAEgCAEAAQADAAADADQACACAAAEIABAGIABAHQAAAEgCADQgDACgDAAQgEAAgCgDIgCgJIgUAGQgMAFAAAIIAFABQASAEAJAFQANAJAAAQQAAAOgLAGQgJAGgPAAQgKAAgKgEg");
	this.shape_12.setTransform(22.9,-37.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgHA8QgDgCAAgEIAAgOIAAgQIAAgTIACgSQAAgFACgCQACgCADAAQADAAACACQADACAAAFIgBASIgBATIAAAQIAAAOQAAAEgBACQgDADgDgBQgDABgCgDgAgFgtQgCgDAAgEQAAgEACgCQADgEAEAAQADAAAEAEQACACAAAEQAAAEgCADQgEADgDAAQgEAAgDgDg");
	this.shape_13.setTransform(16.8,-39.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_14.setTransform(5.1,-38.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAaArIgFgHIgOAHQgGACgDAAQgTAAgJgLQgJgKAAgWQAAgSAOgPQAOgOASAAQAHAAAJADQALAFAAAHIgBAEIgBAKIgBARQAAALACAGIAFAPIACAEIAAABQAAADgCADQgDACgCAAQgCAAgFgDgAgNgUQgJAKAAANQAAAOAEAHQAFAGAKABQAHgBAFgDIAJgGQgDgVAAgKIAAgJIACgJIgFgBIgEgBQgLAAgKAKg");
	this.shape_15.setTransform(-3.2,-37.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAFAAAOIABARIACARIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_16.setTransform(-12.4,-39.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAOAAIAOAAIATABIATABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgTgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_17.setTransform(-22.4,-39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene1wordsforprostill, new cjs.Rectangle(-31,-53.9,98.2,53.4), null);


(lib.scene1slimthumbstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AAFAzQABgFABgGQACgHABgHQABgEABgFIABAAQABgCAAgDIAAAAQADgEADgDQABgBAAgBQAEgEACgHQABgDACgDQAIgNABgPQAAgDAAgEQABgHgEgFQgBgCgCAAQgKgBgKAAQgIACgIAAQAAABgBABQgBAAAAABQgCAAgBABQgJAGgGAIQgDADgBADQgDAEAAAFQgDANgBANQgCAIAAAJQAAAIAAAHQgBAKgBAKQAAAGgBAGQAAACAAACIABAA");
	this.shape.setTransform(9.5,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgfBMIAEgBIgEACIAAgBgAghBBIgCgDIgCgDQgCgDABgDIgBAAIAAgEIABgMIACgUIAAgPIACgRIAEgaQAAgFADgEIAEgGQAGgIAJgGIADgBIABgBIABgCIAQgCIAUABQABAAAAAAQABABAAAAQABAAAAAAQAAAAAAABQAEAFgBAHIAAAHQgBAPgIANIgDAGQgCAHgEAFIgBACIgGAGIAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAAIgCAJIgDAOIgCALIABAFQABAFgEAEIgDABQAAAEgCADQgFADgFgEQgEAEgEgEIgBACQgBAEgDABIgDAAQgDAAgCgCg");
	this.shape_1.setTransform(9.5,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene1slimthumbstill, new cjs.Rectangle(4.5,-11.7,9.9,16.4), null);


(lib.scene1prospeakbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkDqIhJAAIhSAAIhTgBIhSgBIhTgBIgmgBIhLgDIgagFIgegMIAAg/QgBghABgfQABgJACgJQADgJAFgIIAGgLIAMgYIAIgUIADgGIAsgeIAlgJIBEgVIAJgDIASgHIAMgFQAJgDAIgEIAMABIAWgGIAfgKQAWgHAXgDQAdgEAegCIAigBIBEgBQAhgDAigEQAIgCAIgEIAAgZQgBgQgDgRQgDgKgHgIQgHgIgKgIIAwACIAJALIADAHIASAXIAAANQAIAJAJAJQAIAHAKAFQAJAEAJACIAEADIAdABIA6ABIBGABIBJAIIA/AFIBPADIAwAAIA9AGQAaAFAbACQAbAFAbACIAZAUQALAIAIANQAFAIACAKQADASAAATIAABKIgCAjIgCARIgIAfQgFAVgIATIgMAbIgKAEQhUAEhWACIhmABIjwACIjWAAg");
	this.shape.setTransform(-32.8,-31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLD4IhhgBIg3AAIgcAAIgcgBIgbAAIgcAAIgbAAIgcgBIgbAAIgcgBIgcAAIgcgBIghgBIgigCIgbgCIg3gEIgdgCQgRAAgRgDQgQgEgQgHIgDgDQgBgtABgsQABgdAEgdIADgSQAIgXAJgUQAHgRAOgOQAUgTAYgPQAOgIAPgEQAGgDAIAAQApgJApgOIA9gSIAZgHIATgHIATgFIASgFIATgCIAcAAIAcAAIAcAAIAcgCIAcgBIAcgCIAcgCIAbgDIgCg1IgvgcIgBgIIAIgIIArAAIAUAHQAJACAIAFQAQAJAMAPIAIAKIAAAOQAJAJAJAHQAKAHANAAQAkAGAlABQAxABAxAEQBMAIBOAEIBhAEIBHAKQArAEApAJQASADAQAHQAHADAHAEIAMAKIALAMIAHAIIAGBHQABAVgBAWIgGBIQgCAUgGAUIgJAdQgFASgMAOIgBAHQgJAEgKABQgJADgKABIg5ADIhiADIjMADIiDAAIiCAAgAm9hbIgNAGIgRAHIgJADIhFAUIglAJIgsAfIgCAGIgJAUIgMAXIgGAMQgEAIgDAJQgDAIAAAJQgBAgAAAgIABBAIAeAMIAaAFIBLADIAlABIBTABIBTABIBTABIBSAAIBIAAIDXAAIDwgCIBmgBQBVgCBVgEIAJgEIAMgbQAIgTAGgVIAHgfIACgRIACgjIABhKQAAgTgDgSQgCgKgGgJQgIgMgLgJIgYgTQgcgCgagGQgbgBgbgFIg9gGIgwAAIhOgEIhAgEIhIgIIhGgBIg6gBIgegBIgDgDQgKgCgIgEQgKgFgJgIQgJgIgHgKIAAgMIgSgYIgDgHIgJgLIgwgBQAJAHAIAJQAHAIACAKQAEAQAAARIABAYQgIAFgJACQghAEgiADIhEABIgiABQgeABgdAFQgXADgWAHIgfAKIgWAFIgMAAQgIAEgIACg");
	this.shape_1.setTransform(-32.7,-30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene1prospeakbubblestill, new cjs.Rectangle(-101.5,-55.6,137.7,49.7), null);


(lib.musclearmstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AieFNQgYgCgMgeQgVgyAHg3QAPiABPhmQAVgcAZgVIgBgCQAqgcgbgpIgagoQgJgNAFgLQgDgCgBgEQgCgSAMgOQATgXAfgFIAKABIgDgEQgBgGACgFQALgXAbgFIAPABQAGgIAIgFQAGgEAHABQAZgDAMAUIADADQARgZAfgEQAXAIAKAYQALAcgIAbQAJAAAIAEIACABQAQAZgRAcQgEAFgBAIQgLAHgNABQgdACgbgDQgTAJgJATIgDAGIAAAAIgCgBQADARgEAVQgMA8gfA1QgMAWgHAZQgMApAEAqQACANAHAMIAAACQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAgBIgDAAQgcg0AYg8IAKgZQAUg5AXg5QAGgNABgPQABgVAKgNIAAACQAEgSAQgKIAIgFIAAgBIACgCIABgBQApAKAkgPQADgBABgDQAOgXgFgZQgBgEgDgDQgNgCgNABQgEACgGgBQgbAGgVAXIgDgBIAAAAQAQgWAZgIQgQgFgIgOQgDgFAEgCQANAVAYABIAHgBIAAAAIgCgCIAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIACABIABgEIABgCQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABAAQAFgrghgdQgIgGgJADQgVAIgOASQAPARAEAaQACAQgQgCQgHAAgEgDQgBAFgFAFQgIAKgKAHQgGABgFgDQAKAMgMAPQgGAGgIACQgkACgdgPIAAAAIAaAGQAbAHAYgKQAKgUgVgNQgagQgcgLIgEgDQgHABgLAAQgGAAgGACQglAMgDAkIABAFIADgEQAEADAAAEQASAEARgHQAJgEAHACIAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQgYAKgZgEIgDAGIAAACQAgAkAKAsQADAQgKAOQgGAHgHAFQgBAKgOAKQgTAPgPATQhLBggVB3QgMBHAmA8QAEAFAHABQAOAEAHAIIgBAAQAMAGAJAJIAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAIgEABQgSgHgLgMgABEjyIACAAQAKgJAIgKIgBABQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAAAQAAgDADgDIACgDIgBgCQgSgiglgLIAAgBIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgCQgYAAgRASQgHAGgBAKIABAAQACAEADABIABAAQAGgBABAEIgBAAIAAABQAgANAbAVIABABIAEgBQADAAAFAEgABfkPIAGAFIAAAAQAHACAGgCQADgDABgDIAAgDQgFgcgTgSIgBAAIgBgCIgEgEIAAgBIAAAAQgRgRgZAPIgHAFIADAAIABACQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIgFgBIgCADQAoAKASAlIABABIABgBIAAACgAgQijQgIgIADgFQAUAeAmgMQAQgFAPgDIABABQgUAKgYAEIgLABQgQAAgOgNg");
	this.shape.setTransform(1.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_1.setTransform(-4.2,-20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AiIFcQgagNgPgXIgCgEQgbgrgBgzQgBgYAJgVIADgEQgCgQAGgQIAGgVQADgMAIgJQAEgNAHgJQgEgGAGgKIAVgmQALgTAPgSQAIgSASgMIABgBIgBgDIAAgDQARgZAagMIACABIADgHIAAgPIgBgMIgBgHIgBgGQgDgDAAgEIgBgDIgBgEQgDgDABgDIABgBIgCgIIgBABQgOgRgKgTQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgEADgEIgDgCIgBABQgEAAgBgEIgBgBQgCgPAIgNQAEgHAHgFQAHgGAIgBIABAAQAMgHAPgCIAEAAIgDgCIADAAQACgLAFgKQACgEADgDQAFgDgBgEIAAAAIAFgEQAFgDAGgBQANgBAJAEQAJgKAMgEIAIgDQAUAAAJAMIAHADIAEADQAGgOASgIIARgGQAOAGAJAMQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIAAACIAEAGQAFAMABAMIADAGIAAAFQAGANgLAOIgBACIAHABIAHgCIABgBQASAFgGAQIAFABIAAABIgCAPIAAABQgCAGgDAFQgDAFgBAFIgEACIgEABIgFADIgGADIgBAAIgPAFQgJACgJgCQgMgCgMABIAAgBIAAAAIgBABIgDAAIgEABQgKACAAAHIgGAEIgCAAIgGAHQADADgEAGIgDAGQgBADgDADIgCAAQgCAKAAALIAAACIgCABIgCAKIgGAZIgNAoIAAAAQgEAFABAFIgCACQgIALgEANQgIAUgEAWIAAAAIgBAAIgBABIgBABIAAABIgCAFIgBABQgEAFgBAGQgFAOADANIgBAEIgBAMIgBAAIAAAAIgBABIgBAHQgCARAGAOIACAJIAAAFQAGADAAAFQAKAIgKANIgcAlQgSAYgVAVQgfAggaAiQgKANgOAHIgEABIgDgBgAg0jIIABAAIgCgBgAAxj1IACABIACABIADgCIgBAAIgFgBIgBABgACaj8IAAAAIABgBIgBAAIAAABgAAOkIIAJAEIgIgFIgBABgABykFIABABIAEgDIAAgBIgBgDIAAAAQgFADgFABIAAABIACAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAgAADkPIAEABIgEgBIAAAAgACTlOIgBgBIgDABIAEAAIAAAAg");
	this.shape_2.setTransform(1.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.musclearmstill, new cjs.Rectangle(-20,-35.5,42.2,70.3), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AABgiQAAACAAADQAAAAAAAAQAAADgCAGIgLAZQABACgCAGQgCADAAAFQAAABAAABQAAABAAABAAFAeQAGgFADgGIACgJAgPAZQAAACAAABIADAFQAFADAFgC");
	this.shape.setTransform(-6.7,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgGAfIgEAAIgBAAIgBgBIgCgBIgCgCIgCgEIgBAAIAAgBIAAgBIAAAAIAAgCIABgBIgBgBIAAgBIABgBIAAgBIAAAAIABgBIgBAAIABgBIAAAAIABgBIABgBIAAAAIABgBIAAgBIAAgBIAAgCIAAgDIAAgBIAAgBIABAAIAAgBIABgBIABgBIABgBIAAgBIAAAAIABgDIABgDIADgDIAAgBIgBAAIACgCIAAgBIAAgCIAAAAIAAgBIADgFIAAgBIACgBIAAAAIAAAAIABgBIACgBIADAAQADgBACABIABABIACABIAAABIACABIABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABACIAAABIABABIAAABIAAABIAAACIAAAAIgBACIAAAAIAAABIgBABIAAACIAAAAIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIgBAAIABACIgBABIgCACIgDADIAAAAIAAABIABABIgBABIAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIABABIgCACIAAAAIgBACIgDAHIAAAAIgBABIgDAEIgBABIgCACIgBAAIgDABg");
	this.shape_1.setTransform(-6.3,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOBNQgHgBgEgFQgDADgGABQgHgFgIgDIgBgBIAAgBQgOAEgIgOIgCgFIgDAGIgBABIAAABIgBAAIgBAAIgBgBIABgCIAAAAIADgCIABgDIABgCIAAgBIABgBIgBgBIAAgBIABgBQAKgUADgVIABgBIAAAAIACAAIAAABQgDAXgKAUQAAAPAPACQAEABACgBIABgJIABAAIAAgBIABAAIACAAIAAABIgBAIIAAACIAAABQAHACAFAFIAHgDIgBgDQgCgIACgHIAAgBIAAAGQABADABACIACAGIABAAIACACIgBAAQAFAFAKgBQAGAAAEgEQAEgKAJgGIAGgDIACAAQABgEgCgDIgBAAIAAgBIgBAAIAAgBQgIgCgKAEIAAABQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAIAAgCQAEgIAHgGIAAAAIgBgBIgDgDIACgCIABAAIAAAAIAFADIAEgCIACgCIABACIAAgBIAEgDQACACAEgJQAEgKAAgCIAAAAIgBgDIAAAAIAAgBIgCgFIgBAAIAAAAQgEgIgIgEIAAgBIAEgBIAJgKIAAgCIABgCIABgBIABAAIAAgBIACABIAAAAIAAABIgCAIIAAABIgCAPQAJAHgFARQgEASgJAEIgEABQACAAACAFIABABIAAABIABAIQgIADgFAHQgEAEgDAGIgBABIAAABIgBABIAAABQgGAFgJAAIgEAAgAAiAmIAAAAIAAAAgAAmAiIACgCIAAAAIgCACgAhDASIABgFQABgJAEgJIANgiQAFgPAVgJIABAAIAJgGQAHgEAHgBQAFgDAGABIAAACIgBAAIAAABIAAAAQgXAGgUAOIAAAAQgGAFgLAWQgLAWgDAMIgBANIgBAAIgCACIgBABIAAgGg");
	this.shape_2.setTransform(0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AARBMIgJgEIgBAAIgBgBIgCgBIAAABQgGACgHgEIAAABIgDABIAAgDIgFgGQgNADgJgLQgGgJAHgGIACAAIACgJIAFgWIgBADQgDASgJAOQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBgBIgBAEIgCgCIAAABIgEgDIgBAAIgMgNIgDgCIABgBIAAAAIgBgEIAAgEIAAgDQAGgEADgIIAOgdIAEgKIADgEIACgDIAAgBIACgEIADgFIAAAEIABAAIAAgCQABgFAFgDQASgKASgGQAHgCABAFIADgCIAJADQAKAEAJAFQAKAFAGAJIgCACQADAEgBAGIgBACQgFAGgDAGIABACIABABQAPAQgOARQgGAHgJAEIgBACQADADgBAEIAAABIABABQALACgGAKIgDAEQgKAGgGAKQgFAIgHgDIAAAAIgCACIgEAAgAg6AhIAAgBIAAAAgAAtAbIABABIABgCIgCABgAgdABIABACIABgHgAA8gmIgBABIAAAAIACgCIgBABgAgJg5IADgBIAHgEIgKAFgAhEAfIAAgBIABABIgBAAg");
	this.shape_3.setTransform(-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-9.3,-7.8,16.3,17), null);


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


(lib.scene1slimthumb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Layer 1
	this.instance = new lib.scene1slimthumbstill();
	this.instance.parent = this;
	this.instance.setTransform(17.5,4.4,0.683,0.683,-159.7,0,0,8.3,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({regX:7.7,regY:1.1,x:17.9,y:4.2},0).to({regX:7.8,regY:1,scaleX:0.68,scaleY:0.68,rotation:-31.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.2,0.5,9.2,12.1);


(lib.musclearm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musclearmstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-45,x:-12.6,y:5},14).to({rotation:0,x:0,y:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-35.5,42.2,70.3);


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
		var bgm = createjs.Sound.play('bgmAux',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("verb_menu.html","_self");
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
		
		 window.open ("pred_Scene4.html","_self");
		}
		
		function openPrev(){
		
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


(lib.scene1slimarm2sill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjsCBIgCgBIABgBIgIgIQAGADAEAEIABABIAAAAIACADIABAAIAHABIgJABIgDgDgAjUB2QABgEADgEQAEgGAGgCIAAAAQAAgGgCgFQgDgHgHgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQABgBAAAAQAGACAEAEIADgBIADAAQARgKgEgTIgBgGIADAMQACAHgEAFQgFAIgHAFIgFABQAFAHgDAKIAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAAAAIgDACQgEACgCAFIgCAEQAAAAAAABQAAAAgBgBQAAAAAAAAQAAAAAAgBQgBgBAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAFgFACIADgIgAkPB8IAAgBIgDgFIAEABQAEgWADgWIAAgBQACADAAAGIgCAKIgFAaQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgBgCIgBAFIAAAAgAkmBvIACgGIABADIADADIAAAAIgDAAIgBABIgCgBgAk7BNQgGACgIgGQgIgHAIgIIACgBQALgHAIgJIAGgHIABgFQAEgYAVgMQABAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAIgGAMgEQAngMAlgTIAggOIBVgRIABgDIAGACIAEgBQAFgFAegJQAggJBXgDQBWgDAWgNIAAAAIAAgCIAAAAIAAgBIABgBQAZgIAXAJIABABQgJADgMgCQgHgCgIABQgdAQgnAEQgnAEg6ACQg5ACgYAJIggALQgHABgBgBQgcAJgeAEQgbAEgZANQgkATgnAOQgOAGgNACIgBABQgYAJgEAaIAAAAIABgBQABADgDAEIgBABIgFAQIgCAGIgDAIQABADgBAEQgDALgHAOIAFgVgAkzArIgGAFIgQAPQgCACAAADQAHAJAKgCIAAgEQABgEACgEIAFgRIACgFIgDACgAi8AmIAAABQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIABAAQAFgNALgLQAHgIAJgFQAIgGAHgCIADgBIADgBIATgIQA7gKA6gCQAmgBAngDQA7gEA8gFQA4gFA3gIQAPgDALgJIAAABIAAAAIABABIgBABIAAABQgQAQgZgBIgNABQg8AIg9AFIh4AIQg1ADg2ACQggACgcAOQgHADgFgCIAAAAIgJAEQgHACgFAEQgVASgGANIADAKQAAgBAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape.setTransform(1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-23.9,3.2);

	this.instance_1 = new lib.scene1slimthumb();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-43.7,-5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("Ak+ByIgCgDIABAAIAEACIgBADIgCgCgAjIAdIgBAAIgBgDIABgBQgCgDAAgEIgEgDIgJgGIgFgDIAAgBIAAAAIgCgBIgBgBIgOgHIAAAAIgJACIgBgBIAAgDIABgBIACgBQAMgDAKgFQgBgGAIgBQAGgBAFgEQASgLAUgHIAIgCIAagEIABAAIAggFQAEgEAIAAQAHAAAFgEQANABAFgCIASgHQAMgFAVgDIAogGQAHAAAGABQAKgDAtgBQAugBAJgBQAKgBALgEQAOgDAQgMIAEgDQAPAAAOAFIADgCIAFAFQAEACADAEIAFACQABAGAEgBIABAFIAPAMIAJAHIAJACIALAIIAIACIADADIgDACIgEABIgjAHIgCAAIgCABQgPAEgQABQggADgfAFQgLABgLAAIgCgBQgCACgEABQgIACgIgCIhAAEIgJAAQgWADgXAAIgGABIgBAAIgBgBQgMgBgMACIgQABIggACIgSACIgcAFQgFAAgEgCIgLADIgVAIIgTAGIgGAFIgXATIgBAAIgBAAgAjPAMIAAgBIgIgGIgGgDIAOAKg");
	this.shape_1.setTransform(2.7,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDgBIAAgDIABAAIACADIABABIABABIACAEIgHgGg");
	this.shape_2.setTransform(-28.5,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene1slimarm2sill, new cjs.Rectangle(-32.6,-15.6,67.5,27.2), null);


(lib.scene1slimarm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_67 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(67).call(this.frame_67).wait(1));

	// Layer 1
	this.instance = new lib.scene1slimarm2sill();
	this.instance.parent = this;
	this.instance.setTransform(33.5,-14.2,1,1,15,0,0,32.1,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({rotation:45,x:36.4,y:-14.6},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-32.9,72.1,42.9);


(lib.scene1slimarmstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhNDfQgEAAAAgEQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIABgBIAFADQAagTAIghIAFgPQATg4AXg2IAGgPQAFgPAIgNIgFgCIgBgDQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAQA7gpAehEQAHgRAAgTIAEgCIACgBIAGADIABABQgBBHg3A0QgRAPgSALQgaAvgRA0QgUA4gYA2QgIATgTAAIgCAAgAiBB5IAAgCQAAgEAFgCIADgBQAzhLAXhXQgGhEAkg+QARgdAdgNQAGAAABAFIAAACQhDA+gDBbIACABIABABQgUBlhABVIgBACIgHAAQgFgCgBgFg");
	this.shape.setTransform(29.5,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.scene1slimarm2();
	this.instance.parent = this;
	this.instance.setTransform(20,8,1,1,0,0,0,32.5,-12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhEDhIgIgCIgLgIIgJgCIgJgHIgPgMIgBgFQgEABgBgGIgFgCQgDgEgEgCIgFgFQAMgKAKgNQAOgTAKgYIAVg0IARgtQAihVAYhaIA5gxIACADIACACIAFAAQAFAGAHADIAEAFIAFACIAHAJIAlAdIgBgGIAEAIIAJAHIgHgDIADAGQAGAQAAASIgKgJQgCAYgMAYIgFgCIgEAHIgKAMIgUATIAAABIgDADIgCADQgBACgDABIgEAEIgHAJIgWAaIgQAbIgIAPQgLAUgIAVIgUAvIgRAoQgJAVgMAVIgCADgAAnjjQAGACAFAEIgDAAg");
	this.shape_1.setTransform(28.9,-11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene1slimarmstill, new cjs.Rectangle(-47.9,-34,91.2,64.9), null);


(lib.scene1slimarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.instance = new lib.scene1slimarmstill();
	this.instance.parent = this;
	this.instance.setTransform(36.8,-28.1,1,1,0,0,0,36.8,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({regY:-28,scaleX:1,scaleY:1,rotation:29.1,x:36.9},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-34,91.2,64.9);


(lib.Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("be");
	}
	this.frame_19 = function() {
		playSound("pop_up");
	}
	this.frame_31 = function() {
		playSound("tobeornottobe");
	}
	this.frame_60 = function() {
		playSound("pop_up");
	}
	this.frame_65 = function() {
		playSound("thatisthequestion");
	}
	this.frame_93 = function() {
		playSound("pop_up");
	}
	this.frame_98 = function() {
		playSound("couldieverbe");
	}
	this.frame_115 = function() {
		playSound("thatisthequestion2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(15).call(this.frame_19).wait(12).call(this.frame_31).wait(29).call(this.frame_60).wait(5).call(this.frame_65).wait(28).call(this.frame_93).wait(5).call(this.frame_98).wait(17).call(this.frame_115).wait(50));

	// Mouth Guy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgTgBIAHAAQAVACALAB");
	this.shape.setTransform(-123.5,-58.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgUgeQgCAHAFAIIAMANQgJAJAFAIQACAFAHAFQAHAGAGgBQAFAAADAB");
	this.shape_1.setTransform(-124.7,-58.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AgYAjQgCgHAAgKQgBgEgHgMIAAgPQAAgiAdAAIAKAHIAKgCQAMAAAFAUIADAVQAAArgPAAQgGAAgGgGQgEAMgJAAQgPAAgEgNg");
	this.shape_2.setTransform(-122.8,-60.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgZgfQgCAMAQAAQAMgEAPgCIAKAAIAAACQgnAJAAAVQAAAQATAJ");
	this.shape_3.setTransform(-124.2,-58.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("AgdAWQAAgLAPgGQAQgIACgDIgEAAQgJAEgHAEQgFADgHAAQgQAAAEgRQAAgQAGAAIAEABQAMgPASgDIAAAAQATAEAOAQQABAIADAFQAFAFAAAGQAAABgTAVQgQAVgIgDQAAAHgIAAQgUAAAAgYg");
	this.shape_4.setTransform(-122.4,-60.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AgZAFQAOgKAeAAQAEAAADAD");
	this.shape_5.setTransform(-123.6,-61.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9966").s().p("AAZALQgGgJgDAAQgJAAgJAEQgJAEgPAAQgRAAgBgHQAAgFAGAAQAGAAADgFQAIgMANAAQANAAANAFQAOAEAAAGQANANgBAFQAAAGgHAAQgGAAgGgJg");
	this.shape_6.setTransform(-122.2,-62.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AASAsQAAgCgPgSQgNgRAAgGQAAgSAngEQgBgDgIgCQgFAAgLgBIgBAAIgUAGQAJgNgUgK");
	this.shape_7.setTransform(-125.2,-58.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC9966").s().p("AgVAhQgPgPAAgLQAAgPAhgDQgWgGgHAAQgJAAAAgJQAAgMAWgDQACgEAKgGQAJgHADAAIAHAIIAXAFQAFACAAAFQgPAWAAACIACAFQAAgKAHAAQAFAAACANIABANQAAAGgHAAQgFAAgEgFQAFAJAAAIQAAAIgFALIgIAIQgIAHgDAAQgDAAgZgag");
	this.shape_8.setTransform(-122.6,-59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},67).to({state:[{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(84));

	// Mouth Sitting Guy
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgVgKQAWAFAVAQ");
	this.shape_9.setTransform(105.5,-25.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("AAHAcIgPACQgTAAgEgHQgHgJgFgCQgNgEAAgQQAAgbAYAAQAKAAAWADQA5AAAAAgQAAAkgdAAg");
	this.shape_10.setTransform(108.9,-25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AABgOQgCAGAAADQAAAOADAG");
	this.shape_11.setTransform(111,-25.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AgNgDQgJgFgFAAQADAGASAEQARAGARAB");
	this.shape_12.setTransform(107.5,-26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("AgmAfQgMgPAAgHIAEgLIgCgOQAAgiAXAAQAXAAAOAMQAIAHAKgDQALgCAFAFQAFAFAAAEQAAANgZAAQgUAAgNgHQgMgIgDgBIgBAJQAAAFAkAKQAkAJAAAPQAAAcg0AAQgUAAgPgUg");
	this.shape_13.setTransform(107.8,-24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAKQgCgFAAgFQAAgTAQAAQASAAgBATQAAAUgSAAQgJAAgEgKg");
	this.shape_14.setTransform(105.2,-25.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AgCAyIgDgFQgEAAgIgEQgHgDgCgEQgEgIgHgHQgCgCAAgJQAAgSAPgPQAAgEgGgLQAAgPAQAAQAfABgGASIAGAAQAFgCAEgBQARABgDAQQgEAJAAAFIAEAUQAAATgOAGQgFABgCAKQgCAHgKABQgGgBgDgFg");
	this.shape_15.setTransform(107.2,-24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AgdgRQgBARAYAGQALAEAVAGQABABACABIABAAQgCgDgCAB");
	this.shape_16.setTransform(105.3,-26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("AgeAnQgNgMAAgDQAAgHAZgQIgQgmQAAgPAOAAQAGAAAPASQAEAAAGgDQAQAAAKAKQAHAIAAAFQAAAJgIADQAFAIAAAJQAAAJgNAMQgRARgRgBQgJAAgPgNg");
	this.shape_17.setTransform(107.6,-24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AAAgDQgDgBgCgBQgRgDgRgMIgBAAQADALAUAGQgBgCgBgCIABAAQAFAAAGAFQABABABABQgDAAgCgBQABAAACgBQADgBAEAAQAEACAGADIAFACQAIAAAJAAIAAAKQACgBABgCQACgDAEgKIglgBQgDAAgBAAgAALAOQgXAAgagRQgBADAAACQAAATA0AAIATgEIAAgDQgDACgHAAIgLgCQAIAAAHgCQABAAAAAAIAAACIgBgCQgHAAgCgBQAFAAADgCIgKgFQgLAAgIgBQgFAAgFgBQABgCADgBAgRgDQACAEAAABQAAAAAAAAQABAAAAABQAAAAAAgBQAAAAgBAAQgTgCgEgLAgRgDQADABAEABAAHANIAEAB");
	this.shape_18.setTransform(106.5,-26.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AgdgRQgBARAYAGQALAEAVAGQACgBACADIgBAAQgCgBgBgB");
	this.shape_19.setTransform(105.3,-26);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AgPgCQABgBgDgCIAAgHQAIAAAOgBQALAAACACQAAAGAAAFIAAAOQgGgRgJgFQgDgCgCgBQAAAAgBAAQAJAAAEADIgHAA");
	this.shape_20.setTransform(104.2,-25.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AAUANQgIgZgVAAQgEAAgGAJ");
	this.shape_21.setTransform(104.1,-25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("AgVAtQgLgHgCgDQgGgIAAgNQAAgMAKgLQAAgHgJgSQAAgRAYAAQAQAAAAAUIAJgBQAeAAABAjQAAAKgOASQgQAVgOAAQgGAAgMgHg");
	this.shape_22.setTransform(107.8,-24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AAMgHQAAgPgHAAIgGAFQgBACAAAAIAAgBIABgBQABgBACgDQgNgCAAAaQAAAUAKAAQABAAAFgHQAGgIAAgE");
	this.shape_23.setTransform(105,-25.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AgBgRQgBACAAAAIAAgBgAAMgHQAAgPgHAAIgGAFQABgBACgDQgNgCAAAaQAAAUAKAAQABAAAFgHQAGgIAAgE");
	this.shape_24.setTransform(105,-25.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AgEAAIAAAAIAAgBQAAAAAAABQABABADABQABAAABAAQABAAACAA");
	this.shape_25.setTransform(103.9,-25.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AAAgDQgDgBgCgBQgRgDgRgMIgBAAQADALAUAGQgBgCgBgCIABAAQAFAAAGAFQABABABABQgDAAgCgBQABAAACgBQADgBAEAAQAEACAGADIAFACQAIAAAJAAIAAAKQACgBABgCQACgDAEgKIglgBQgDAAgBAAgAALAOQgXAAgagRQgBADAAACQAAATA0AAIATgEIAAgDQgDACgHAAIgLgCQAIAAAHgCIABACIAAgCQAAAAgBAAQgHAAgCgBQAFAAADgCIgKgFQgLAAgIgBQgFAAgFgBAgPACQABAAAAABQAAAAAAgBAgRgDQACAEAAABQAAAAAAAAQABAAAAAAQABgCADgBAgRgDQADABAEABAgPACQgTgCgEgLAAHANIAEAB");
	this.shape_26.setTransform(106.6,-26);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AgMgJQABABACABIgDAAgAAVALQgDgGgMAAQgGAGAAAAIgOgLQACgDAFgFQACgFgGgBQgCADABABIAAABQgCgBgBgBIgGAAIgBACIAAACIAEAAAAVALQABACABACIgCAAg");
	this.shape_27.setTransform(105.6,-27.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AgJgLQgMgIgDgEIgDAAQAIANAGAAQADAAABgBgAgJgIIgKAAQgKgCAAgIQAAgFACgCIAUAAQAlAZAAANQgCACgBADIgEgCIgDAAQgCADgFAAQAAgLgIgHQgGgEgDgDQgCgBgBgBgAgEgGQgDgBgCgBAAQAGQgSgVgFAAQAAADgCABQACACADABIgDAAAgdgDQAUADAMANQANANACAAQACAAAHgIAAQAGQABACABABIACAAQgCgBgCgCgAAFABQAFACAGAD");
	this.shape_28.setTransform(105.8,-26.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC99").s().p("AgnAYQAAgFAFgTQAAgBgJgJQgIgJgBgHQAAgaAaAAQA1ABAaBHQgBAggsAAQgvAAAAgcg");
	this.shape_29.setTransform(108.5,-24.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AgcgBIAGAAQAOABAZAIIAKAAIABgBQgKAAgGgGIgGgDQgMgFgJAAIgCAAIgDACIAAgCIADAA");
	this.shape_30.setTransform(105.2,-25.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AgSADQAPgMAEAAQAGAAAEAGQAHAJABACIAAACQgFgKgNgE");
	this.shape_31.setTransform(104.4,-26.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AgcgBIAGAAQAOABAZAIIAKAAIABgBQgKAAgGgGIgGgDQgMgFgJAAIgCAAIgDAAIAAACIADgC");
	this.shape_32.setTransform(105.2,-25.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AgrgCQAGAHAkAAQAgAAANgJ");
	this.shape_33.setTransform(107.7,-25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC99").s().p("AghAiIABgLQAAgBgGgIQAAgEAMgNIAAAAQgNgDAAgHQABgLAGgGIgDgMQAAgIAJAAQALAAADAFQADAFADAAIAHgBQAIAAAAAGQAAAEgHADQALABAOAOQAMANAAAHQgOAsgbAAQgfAAAAgRg");
	this.shape_34.setTransform(107.9,-24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},32).to({state:[{t:this.shape_17,p:{x:107.6,y:-24.5}},{t:this.shape_16}]},2).to({state:[{t:this.shape_17,p:{x:107.6,y:-24.5}},{t:this.shape_19,p:{x:105.3,y:-26}},{t:this.shape_18}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},10).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},3).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_23}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_17,p:{x:107.6,y:-24.5}},{t:this.shape_19,p:{x:105.3,y:-26}}]},3).to({state:[{t:this.shape_17,p:{x:107.6,y:-24.5}},{t:this.shape_19,p:{x:105.3,y:-26}},{t:this.shape_18}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[{t:this.shape_15},{t:this.shape_14}]},39).to({state:[]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_24}]},1).to({state:[{t:this.shape_17,p:{x:107.7,y:-24.3}},{t:this.shape_19,p:{x:105.5,y:-25.8}},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[]},8).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},7).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_23}]},8).to({state:[]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_31},{t:this.shape_32}]},2).to({state:[{t:this.shape_34},{t:this.shape_33}]},3).wait(24));

	// animation
	this.instance = new lib.musclearm();
	this.instance.parent = this;
	this.instance.setTransform(-159.4,-55.8);

	this.instance_1 = new lib.scene1slimarm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.5,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(165));

	// slimtext1
	this.instance_2 = new lib.tobe4wordsstill();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50.8,-106.9,1.09,1.09);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({x:45.1,y:-103},0).to({x:54.4,alpha:1},14).wait(120));

	// slimBubble1
	this.instance_3 = new lib.tobe4wordbubblestill();
	this.instance_3.parent = this;
	this.instance_3.setTransform(63.3,-92.2,0.045,0.045);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({scaleX:1,scaleY:1,x:67,y:-101.6,alpha:1},8).wait(139));

	// slimText2
	this.instance_4 = new lib.tobe4words2still();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,87.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(103).to({_off:false},0).to({x:-2.5,y:92.9,alpha:1},10).wait(52));

	// slimBubble2
	this.instance_5 = new lib.tobespeakbubblestill();
	this.instance_5.parent = this;
	this.instance_5.setTransform(14.5,81.1,0.08,0.08);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(93).to({_off:false},0).to({scaleX:1.26,scaleY:1.31,x:0.1,y:87.2},10).wait(62));

	// proText
	this.instance_6 = new lib.scene1wordsforprostill();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.2,44.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({_off:false},0).to({x:2.4,y:40.2,alpha:1},14).wait(85));

	// proBubble
	this.instance_7 = new lib.scene1prospeakbubblestill();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.036,0.036);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({regX:-30.6,regY:-54.2,x:-1.1,y:-1.9},0).to({regX:-33.5,regY:-54.6,scaleX:0.83,scaleY:1.27,x:13.9,y:-23.8},10).wait(95));

	// drawing
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.1,1,1).p("AgdgfQAHACAEAEQACACABACQADAFABAGQAAABAAABQAAAEgCAEQAAAAAAAAAAUAKQAAgBABgBQAFgCAFACQACAAACABQACABACACQACACABACQAEAGgCAHQgCAGgKALAgagyIAAAAIAAAAAgWABIAAABAgrgLQAAAAAAgBAAsAzIAAgBAAWAjQAAAAgBgBIAAAA");
	this.shape_35.setTransform(113.2,-39.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("ATzq6IAAABIAAAzIgvhLIgGgJIAAAJQgDACACAEIgBAXIAAASIgqg4Ig0gUIg6AAIgUAAIAHAHIADADIANALIAAAAIAAADQAAgCAAgBATzq9QAAAAAAAAIAAADIABAAIBiBhIAJAJIgxA7IhUBaQgCASgSASIgmAWQgEADgDABIgNAIIAeBoQACgCACAAQAMgBALgCQACAAADAAQABAAABAAIgCgBIA7gIIAAAAIAEACQEfAICRHnQABgEAAgEQABADABAIQABAMACAZQADApgJApQgKAqgDAFQgDAGABAEAQ5p/IgCgCIAAgHIAAgWIgTgNIgpgcIAEgCIACAAIAAgBIAZgIIAFgCIAIgCAQmrdQAAAAABAEAQ8p7IgDgEIAEADIABABQAAACABABIgDgDIgDgEARAp3IgBgBQAHAZAvATQALAFALAFIAWAJAQKoqQAKgGAEgNQACgEAAgFQAAgBABgBIAAgIAQbpQIAAgIIAAgLIAegcAQDonQACAAACgBQABgBACgBAPQnIQgJgIgHgGQgEgFAEgKQAEgKAVgKIAngtAPom0QgHACALATQgBgCgDgTgAPsmfIAAABQARATgUATQgNASAkAGQAmgXgVgjQgggHgJgTAPQnIQAfAKAfgKASHnOIgBglAQVoKQgfAOgdADAMVFpQgBgCgBgDQgEgPgDgXQgCgWAEgYQABgGABgGQAEgVAAgWQgBgGAGgUQAGgSALgdQAAgDABgCQAAgBAAgCQAAgCABgCQAAgBAAgBQABgCAAgCQACgDAAgEQAAgBAAgCQAAgCABgDQAAgBAAgBQAAgBAAgCQACgGABgGQAEgTADgSQACgIACgIQABgFABgGQABgEABgFQABgEABgFQAEgSADgTQACgTAFgTQAEgSAFgSQACgFAAgFQACgKACgJQADgKADgKQABgDAHgRQAEgLAEgLQABgEAGgOQADgGAGgEQAGgEAHgDQADAAACgBQALgBALgBQAFAAAFABQANABAOgBQACAAACAAQAIgCAIgEQAGgCANgFIA9ghIgUgvIg7AAQgmgIgEgmIARhaAQ4kRIAKAeASho7IAAACASHnzQAhgJADgaQAAgBAAgBASqoeIAAgDIgJgYASHnNIAQgHQASgZAeAEQACABACACQADADACADQACACABACQAAABABAAQAEAJgDAKIAAABATZm+IABADIgCgDATYnBIgCgIASqkNQgFADgDANIAJgQgAa5DWIADADAa5DWQAAACAAABQAAAEgBAEQgCAJgEALQgBACgBACQgFAKgIAGQgDAGgFAEQgDAEgHACQgNADgPACQgbADgcAEQgMACgKABQgNABgMADQgDABgCAAQgVADgWAAQgyABgtgNQgCgBgDgBQgUgKgSgJQgCgBgCgBQgEgCgDgBQgFgDgEgCQgCgBgCAAQgKAAgIgCQgFgBgFAAQgYAAgYADQgHAAgHAAQgBABgPAFQgKADgSAFQgBACgBABQgGAJgNABQgKAAgIgCQgJgEgNAAQgNgBgMAAQgcgBgWABQg3AAgUAGQgNADgMADQgMACgKAEQgCABgBAAQgVALgYAIQgKADgNAAQgCAAgCABQAAAAgBABIAAAAATZHbQgEADALAAQADABACAAQAZAFAZACQANABAMAAQAGAAAHgBQATgBASgEQAXgGAVgFQALgBAIgGQACgBACgBQArgRAtgPQADAAACgCQApgTAxgEQAFAAAFgBQATgCATgDQACgBAFABQAFgDAFAAQAFAAAEgCIAEAAIBUADIgOJVImeBSIhlgdAcgUnIgPAAIAAAFATTEKQANASgEAMQgEAMgEAIQgDAJAAAHQAAAEgBAGQAAAAAAABQAQAJALAUQAMAdgFAfQABAIgCAHQgGAKgHAGQAAABAAAAQgBAAAAABQgDACgDACATRFMIAAAAQAggDAhABAVKEKQAcgIAFgVQAEgSgBgTQAAgBgBgCQgBgDgBgEQgCgIgEgIQhsijh1hTQgGgEgFgEQABABABABAR5hQIABABASEhIQgFgCgEgEQgBAAAAgBIgCgBQgegbgmgJQgFgBgFAAQgZgCgUAKQgVALgMAQQgLAPgJAPQgYAogNAsQgHAXgDAZQgEAbgCAZQgBAHgDAGQAAAEgDADQACADgCABQAAAFgCAOQgCAQgFAbQgbA8ABAqQAAABAAABIAAABQgOAAgNAFQgDABgCAAQgEABgEABQgMADgKAFQgMAGgHALQgCACgBADQABAKgGACQgBABAAAAQgBAMgDALQAAABgBACQgBACgBADQAAAGAAAHQgDAVAAAXQAAACAAACQgBgCAAgCQgBgGAAgGQAAgSAAgRQABgJAAgJQAAgEABgDQAAgPAKgCQAAAAABAAQABgHAEgFAOHHlQgBgEgBgEQAAgJgBgIQgBgWAHgSQABgDgCgDQABgFAEgFQAGgGAHgEQAUgMASgHQAKgFAMgCQAcgFAbgDQAxgGAugKQAEAAAEgBQAtgGAvgFATgHMQgCAAgDAAQgBAAgBAAQgwAAgvgBQgDAAgCgBQgNgBgMABQgEABgEAAQgMACgMACQgbADgVANQgEACgBABAP7HHQgEAEAJAIQADAGADAHQAAABABABQALAXAQAXQAdAjAJAqQAEAOAAAQQAAAEAAADQAAAOAFAJQABACAAADQABACABADQACAIADAJQABAIADAFQABAEABADQALAtAHAwQADANAEAMQAGASAIATQAEAIACAMQABADABACQAJANADAPQAAAEABADQABACAAABQABAGgBAHQACAGADACQACgBAAgBQADgDACgEQgCgGgCgGAOHHlQgWAiAAASQABATgEAQQgBADgBACQgBAJgEAGQgPATgOASQgBACgCACQgBACgBABQgFAIgHAFQgEADgBACQgFAMgFAJQgEAJgGAIQgEAMgIAJQAAAEgDACQgEALgFAIQAAACgDAAQgLAUgHATQAAACgBABQgIAXgGAWQgNAtgMAtQAAAFgBAFQgBADAAACQgDAFABALQAAACgBACQgEAFADAHQgBAUABASQABAUgJArQgIAqgwgDQgrAFhmABQh+ABgCgFQgCgFgCgBQgVgCgQgLQgDgCgDgBQgGgCgDgFQgJgLgFgMQgBgCgCgCQgDgHgBgIQAAgLADgJQAEgNAOgCQAKgCAHAFQABABACAAQAIABAHAFQACABADABQAZAJATASQA4AWA2gRQA2gRBKhWQADgHADgIQAJgWAIgWQAJgYAKgXQAFgHADgGQACgDABgEQAGgVAIgTQAKgYAGgaQABgBABgCQAIgVAGgVQAEgMADgKQAHgVACgWQAAgDABgCQAFgKAAgNQABgCAAgDQACgZAGgZQAAgBABgBQAEgSgDgUQABgCAAgCQAEgKgCgKQAAgBAAgBQAAABAAABQACAIAGAGARSPvQAAgTgEgRQgCgBgBgDQgOgqgOgtQgGgVgIgVQgRgtgRgtQgSgsgRgsQgRgpgRgnQgCgEAAgEQAAgEAEAEQgHgIgIgMQgFgGgDgGQgUgZgKgeASoOuQAIAaAPAZQACACACACQAIAWAVANQAJAFAEAIQAAAAAAABQABACACACQAIAHgCAKQAAADgBACQAAAOgLAGQgKAFgMABQgBABgDAAQgJAEgMAAQgDABgCAAQgKABgKAAQgQACgOgEQgFgBgFABQgNAEgPgCQgDAAgEABQggAJgcASQgSALgUAFQgCABgCACQgDABgFACQgLACgMABQgcACgYgHQgDgBgCgBQgXgKgWgMQgDgCgDgCQgfgTgSgfQgBgDgBgDQgIgGAAgKQACgLADgJQACgDACgDQAEgKAKgCQAKgDALAAQADACADAAQAPAAAOAHQAKAIAKAJQADACADABQACABACABQAOAFAOAEQAXAHAZACQAMAAANABQAEAAADABQAGACAHABQAaADASgPQAJgHAGgKQADgCAAgEQADgFABgEQAAgIgBgHIjLgwIAAnaALuIOQADACADACAVSQzIgUo/Az4mLQicBzlYhKQAAAAAAAAQgDgBgCAAIAHgKQB4iVAMgMQANgOALgOQADgFADgGA3lwAIAAAAQgDgJAEgIQADgHAGgEQgFgCgDAAQgDAAgCgCQgBgBAAgBQAAgBAAgBQgDgEgDgCQAAAAgBgBQgHgGAAgKQAAgEgBgFQAAgJAEgHQAEgIAGgFQACAAABAAQABAAABAAQACAAABABQAGACAEAFQgDgEgBgEQgCgCgBgDQgBgDABgDQAAgCAAgCQABgBAAgCQAAgGADgGQABgBABgBQAAgCACgBQAEgHAGgFQAHgFAIgCQABAAAAAAQgBgBAAgBQgIgJAAgLQAAgJAEgHQABgBABgBQACgBAAgBQAFgIAJgCQABAAABgBQAEAAAEAAQABAAAAAAQADgBADAAQAJgBAJADQgBgCAAgBQABgDABgEQABgEACgEQACgGAEgGQAEgGAEgHQAIgJALgEQAGgCAGgBQAIgBAFAFQAEAEADACQAFAFABAGQABAEABAEQAAACAAABQAAABAAAAQABgBAAAAQABgLACgKQABgGAEgFQADgGAEgEQAKgMAOgCQAFgBAFABQAKACAEAKQABADACADQAAAAAAAAQAAAAAAgBQAEgLAJgIQAOgKASgBQAGAAAFAFQACADACADQACADAAAEQAAAGABAGQAEgBACgFQADgEAEgDQAFgEAFgCQASgKAVACQAOABAIALQADADAAADQABAFgBAEQAAAGgBAGQAAAAgBABQAAABgBABQABgCABgBQADgKAIgHQANgNASgIQAFgBAFgCQAKgCAIAFQACABABABQACAFgBAFQgCAFgCAEQgCAHgCAHQgBABgBABQABAAAAAAQABgBABgBQACgBABgBQAEgDAEgCQAWgLAXACQALAAAAAKQAAAIgFAHQgEAGgGAFQAKgHAMgEQAGgCAGgBQAHgBAHAAQAKABAIAFQAEACADADQAFAIgHAHQgEAFgGAEQgEACgDACQgCACgDABQAAABgBAAQABAAAAAAQALgCAKAAQAHAAAGAAQAKABAGAHQAIAJgFALQgGALgKAHQgEACgDACQgCACgDABQABAAAAAAQAFABAEAAQAOAAAKALQADADAAAFQAAACgBADQgBACgDACQgDAEgFACQgCABgCABQAPAAAKALQABABAAACQAAAFgDAEQgCADgCADQgCACgCABQgBACgBACQACADAEgBQADAAADABQAKADAFAJQADAGgEAFQgBABgCACQgBABgBABQgBABgCAAQACAAABAAQAIAAAHABQACABACAAQABABABAAQgBAHgGAEQABABAAAAQACAAABAAQAFAAADAEQABACAAACQABAEgBADQgEAQgOAIQADgBAEAAQAJAAADAJQAIAWgOAUQgIANgPAEQAAABgBAAQABABABAAQADABADABQAIAEAEAIQAFAHgHAFQgIAGgKgCQAEACAEABQACABADACQADACABAFQABACgBACQgCAFgFACQgGADgHABQADAEADAEQABACABACQAAADABACQAAAGgDACQgTAOgYgCQAJAEAIAEQALAHAHAKQACACAAACQABACgBABQgBADgDABQABABAAAAQACABACACQADACgDADQgCACgCABQgIAFgIgFQgBgBgCgCA2NzLIAAAAQACAAADABQABABABABQgEABgCgCQgBAAAAAAQgBgBgCAAQgDAAgDgBQgDAAgDgBQgEAAgFAAA29yXQABABABAAQAEADAEADQAAgFgFgBQAAAAgBgBQgCgBgCABgA2MzJQgBgBAAgBAvBzUQAAABgBAAQgBAAgBAAQACgBABAAgAtjwqIAAABQgBAAgBgBQABAAABAAgAtowCQgCABgCABQAAAAABAAQACgBABgBgAzYvRQAAAFAAAEQABAFACAFQAFALALACQACAAABAAQADABABAAQgBgCABgEQABgCABgCQABgKADgKQAFgNANgFQAEgCADAAQAEgBADAAQAPgCAKALQALAPAEASQABAFABAFQACAMAAAMQgBAJgEAIQgCADgEADQgJAHgLACQgGABgGAAQgFABgEgBQgLABgKgCAzbvdQgCACgDADIAAABQgCACgDACQgMAHgOgBQgFAAgFgBQgLgDgHgIQABgBABgBQAGgGACgIAyBtQQgBABAAAAIgBABQAAABgBABQgBADACADQABACABABQABABABAAQAHABAIgBQABAAABAAQABAAAAAAQACgBABAAQABAAAAgBIAAAAQABAAAAAAQAAAAgBAAQgCACgDACQgFAGgDAIQgBACAAACQAAAGAIABQgEACgEACQgBABgBABQgHAKAAAMQgBAEAFgBQADAAACAAQgCAIgBAHQAAAFADAEQABABACAAQANACAIgJQACgCACgCQADgDACgEQgBAJAHAHQADADADABQACABACAAQAGABACgEQACgCABgCQACgCABgCQADgDABgFQAAgBABgBQAAABAAABQAAAGABAFQAAACABACQADAFAGABQADABACAAQADAAADgCQADgCACgCQAHgHADgIQADAAgBADQAAABABABQADAHAHADQACABADAAQACABACAAQAKAAAAgKQABgDgBgCQgBgBgCgCQgDgEACgDQABAAAAABQACABAAACQABADAAADQAFADAGAAQAEgBADAAQAEgBADgBQAKgEAAgLQAAgDgCgEQgCgHgFgGQgDgDgDgCAyBtQQAAAAAAgBQACgCAGAAQgEADgEAAgAyhtoQAAAEAAAEQABACABACQABADACABQALAIANAAQABAAACAAAzpqKIAAAAQgBAAgCAAQgLgCgLgDQgEgCgCgEQgGgOANgZQgEAAgDAAQgNgCAJgQQAAAAAAAAQACAAABgCQAVgGABgSQAHgTgIgSQgCgFgHAAQgEgFgHANQgPANgSAHQgDgSgOgDQgWABgOgKQgFgEgBgEQgFgOAQgOQAGgSABgUQABgUgIgSQgCgHgEgHQgEgIgGgIQgBgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAA5BoxQAPgKAQgEQATgMAVgBQAQgIARgDQATgFATgCQAUgCARAHQATAAASAGQASAHASACQATACAQgLQAQgLANgPQAOgMAKgNQADgBABgBQAAgBAAgBIAAAAQAEAAADAAIACAAQAVAAANgHQAPgJAKgPQAKgPAFgNAvUsfQAIAHAMACQAFAAAFAAQAEAAAFAAQACgBADAAQAGgBAAgGQAAgBAAgCQABABAAAAQAJAHAIgHQADgCABgCQADgFgBgFQAAAAAAAAQgBgBgBgCQABABABACIAAAAQAgArAWAMQAQAJAQAIQAQAHASABQATABAQgNQAQgNARgOQANgMAOgNQANgMANgMQAOgQAUgLQANgHAOgHQAPgHAPgGQASgHATgGQASgFASgFQATgFAUgDQAPgCAQABQASABARADQALACAIAFQAHAEAFAFQAKAJAFAIA1bu9QgKAKgIAHQAAABAAAAIgBAAQgHAFgHgBQgEgBgDAAQgJgBgGgDQgBAAgBgCQgCgIAEgCQgKAEgNgBQgCAAgCgBQgDgCgDgBQgCgBgCgBQgFgFgCgHQAAgBAAgBQABgKAFgFQgHAAgIgBQgCAAgCgCQgCgCgCgCQgCgBgBgBQgHgCgBgEQgBgDgBgBQgBgCgBgCQgDgJgBgIA1ZvLQgCACgEAGQgFAHgLAHQgCABgBABQgBAAgBAAQAAAAAAAAA0bvZQgCACgDACQgDADgEACQgGAFgHACQgDABgEAAQgDABgEgBQgJAAgKgBQgCAAgBgBQgBAAAAgBQABAAAAgBQADgDADgDQACgDACgCA0/uKQACgIAIgFQAGgDAGABQAGAAAFAFQAJAJAAANQAAADgDADQAAABgBABQABAAAAAAQADgBABgCQADgBACgCQAKgJACgMQAAgDAAgDQABgGgDgEQgBgBgCgCQgDgDgDgEQgCgCgCgCQgFgFgHgCQgDAAgDgBQgGAAgGABQgJABgGAHQgCADgDADQgDADgBAFQgBADgCABQADAGACAEQADAEAEAEgA0dt1QACAAACgBIgBABQgBABgCgBQgDABgDgBQgDAAgCgBQgDAAgCgCQgKgIgIgKA33m5QADgCACAAQACABABABQAOAIAQACQAFABAFAAQAdAEAVgKQAKgFAGgKQAEgHAEgHAxak2QgFABgGABQgSgGgSgGQgRgGgQgIQgQgKgQgLQgPgLgNgOQgIgIgHgKQgBgDgCgDQgCgDgBgDQgLgRgHgMAxak2QANgBALgBQAQgBAQgFQARgFARgGQARgGARgIQASgJAMgQQALgPAIgVQgBgJADgLQABgGABgGAurmoQAEANAOALQAPALAQAIQAQABAQgDAwihoQAAgRAAgQQAAgTABgVQgFgRgIgSQACgVgGgTQgGgSgMgPQgNgPgJgKAt+jtQgDABABAQQACAQAIAOQABAWAHASQAGAQACAFAl0uHQAQgHATgKQAQgBAUgCQAQgKATACQAUgDASAEQAQAHAQAMQAOAKAPALQAJARAIARQAIASABATQACASgEARQgJAQgKANIAAABQAAAAAAAAQAAAAgBABQAAAAAAABQgBAAgBABQgKAQgOAMQgGAFgEAFAl3qBQAFgCAEgDQAMgKAPgOQANgLAKgNQAOgQADgVQAHgOgDgMQAEgNACgJAiirzIAAABIAAAAQAAAAAAABQAAAAAAAAQABABgBABQABAKgGAQQgGARgCASQgHARgDARQgHATAAAUQgIATgGASQgGARgFASQgEAOgFAQQAIAEALAKQAFARAHAUQADAHgDAKQAHANAEAPQAGATAHARQAFAOgGANQgGANgLANQgMAPgJAMQgHAJgJADQgIADgFgGQABgEAAgHQgFAEgGAFQgQAMgRADQgLACgMAAQgLAAgCgJQgNASgUgDQgMgCgHgFQgGgFAAgIQgDAEgDADQgNARgSgKQgRgKgGgVQgHgQgEgUQABAAgBAAQAPgLAPgIQAPgKAQgBAo2sBQgIgCAFgLQADgHADgHQAEgHAGgGQAYgZAjAGQAFABAAADAodp2QAOAQAaAHAl3qBQgLAHgKAGQgRAJgSAEQgSAHgUgBQgQABgQABQgzgGgIAWQABASgFASQACAUgHAQQgGAUgKAPQgKARgPAKQgHAFgIAFQgJAFgJAFQgQAIgMAMApum7QgFASAAAVQABARAAARQAAAQAAAQQABATACATQADATAGATQADAQAHAQQABABAAABQACADABADQAAABABAAQABAEABADAwdhlQABABABAAQAEACADABQAlAKAiAOQACABACABQAVAEAWgDQAJgBAJgCQADgBAEgBQAugHAsgTQAYgKAXgLQAMgGANgFQAGgCAFgDQAEgCAFgCQATgHARgJQAKgGAJgGQAOgJALgJQACgBABgCQACgCACgCQAJgIAGgHQAHgGALgFAm/laQAAAAgBABQgSANgQgPQgQgPAFgWQADgRALgOQAKgSAVACQATABATADQADAAABAFQANgQAHgTQAIgSAJgSQgBgUAJgSQgDgTADgTQgCgUgGgPQABgZgHgMApTjmQAAABAAAAQAEAFADAFQAAgBAAAAQgFgFgEgCQABgCABgBQAFAEAEAFQACADADADQgDgCgEgCApcjmQACgBAFAEQgBACgCADApFjXQAMAJAJAMQAMAOAGARQAGASAEARQAEASABASQAGASgBATQgBARgGASQgFASgJAPQgFAKgIgBQgHAKgQAIQgVANgQAMQgOAKgNAKQgLAJgMAHQgNAHgOAHQgLAKgMAKQgKAIgIAJQgQALgOAMQgNAJgNAKQgVAbgQAbQgBACgCADQgJgGgKgEQAAAAgBABQgJANgGAKQgGALgNANQgMANgTARQgTARgRAGQgBABgCABQgCAAgCABIgBAAQgBABgCAAQgBABgBAAQgDACgBANQACABABABQBLApAzCOQAbBMAUBoQBRBdgwAVQgwAUgDABQgCAAgCAAQgCABgDAAQgRACgRAEQgDABgEAAQgNACgMAEQgDACgDAAQgFABgFACQgHADgIACQgFACgEACQgEADgFACQgDACgEABQgJAFgJACQgCABgDABQgHADgIABQgCAAgCABQgBAAgBAAQgDABgDgBQgIAAgJgCQgCAAgDgBQgFAAgDgEQgBAAAAgBQADgHAGgCQgFAAgFABQgHAAgFgCQgBAAgBgBQgCAAgBgBQgBgBgBgBQgCgDAAgEQAAgBABgBQABgBAAgCQADgGAGgDQAAAAgBAAQAAAAgBAAQgDgBgCAAQgGAAgFgDQgCAAgCgCQgBgBgCgBQgDgBgBgFQgCgFAEgDQAFgEAEgFQgBAAgCAAQgFABgFAAQgJAAgIgBQgGgCgDgDQgCgCAAgCQAAgFABgEQAAgCABgBQABgBABgBQABgBABgBQABgBABgCQAEgFAFgEQAFgDAFgDQABgBABgBQAJgEAJgEQAQgJAUAAQADgBACAAQAFgCAGAAQAFABAFgBQAFAAAEAAQAHAAAHAAQACABADAAQADABADABQAEAAAEABQACAAADAAQAQABAYgIIjXkJQgcgYgSgbQgPgjgEglQgEgnAIgmQAEgLAEgMQAEgJAFgKQgJAAgJgCQgdACgZAFQgSAEgCgOQAAgCAAgCQAAgBAAAAQAAgDgBgEQgCgJgDgJQgIgUgMgQQgMgQgPgPQgNgOgQgNQgSgOgWgFQgQgEgUgDQgSAEgTADIAAAAQgEABgEABQALgNAPgKQAPgJARgHQAOgRAQgPQALgKAQgHQAPgHAPgIQARgIARgIQATgJASgLQAPgKAQgJQAQgJASgGQARgFARgIQAOgHAPgGQAagMAWgMQAAABAAACQAAADgBADAjukxQAEgDADgDAxlDUQAEgDAIgDQAWgFAUgBQASgBASABQATABATACQARACASAEQASAFAUAAQARAGAQAGQAUAEAQAKQADABADACQAAAAAAAAAwdhlQgCAAAAAAQAAAAAAgBQABABABAAgAxlDUQAHgUAHgRQALgYASgTQAFgFADgFQAMgOAPgKQAFgDAEgFQARgQARgRQACgCABgCQACgCACgCQACgCABgCQABgDAEgCAyDEJQAEgHAEgIQAKgRAIgRQABgCADgCAznEAQgHABgHAFQgDABgEACQgBABgCABQgBABgBABQgBABgBABQAAAAgBABQgEAEAAAGQAAACAAACQgBADAAADQgBAKACAJQABACAAABQABAKABAJQABAKABAJQABACAAACQABAKAAALQABACAAADQAAADAAADQABAIAAAIQAAAQgBAQQAAAEgBAEQgCAUgCATQAAACgBACQAAACgBACQgBAFgBAFQgBAIgBAIQgBAIgCAIQgBAEAAAEQgBADgBADQgBAEgBAEQAAACgBABQgDAJgFAKQgCAEgCAEQgFAJgFAJQgEAJgGAJQgBACgCADQgFAHgGAGQgHAHgFAIQgGAHgGAIQAAACgBACQgBACgBABQgCACgCADQAAAAgBAAQAAABAAAAQAAABgBABQgBACAAACQgFALgFAMQgCAEgCAEQgDAFgBAFQAAACgBACQgBACAAACQgCAFgCAFQgBAEgBAFQAAACgBABQAAACAAABQgBARAAASQAAABABABQACADAAAFQgBACgBADQAAABAAABQgBAFgBAEQgCAFgCAFQAAACgBABQgFAHgGAIQAAABgCABQAAABgBABQgCABgCACQgBACgCABQgHAIgJAFQgBABgCABQgKADgKAFQgCABgDABQgBABgDABQgCABgDAAQgHACgIACQgCABgBAAQgOAAgNAAQgBAAgCAAQgDgBgCAAQgDAAgCAAQgDgBgEAAQgBgBgBAAQgEgBgFgBQgBgBAAAAQgFgDgFgBQgDAAgDgBQgDAAgCAAQgBAAgCgBQgNAAgNAAQgKAAgKgBQgBAAgCgBQgCgBgFAAQgDAAgCABQgBAAgBAAQgQABgQAAQgBAAgDAAQgBAAgBABQgEABgFABQgBABgBABQgEAAgEACQgEADgFABQgBAAgBAAQgBABgCAAQgBAAgBABQAAAAgBAAQgBAAgBABQgDABgEABQgHABgHABQgCABgDAAQgIABgJAAQgJABgJgDQgSgFgLgQQgFgHAAgJQAAgJAEgGQAGgJAKABQACAAABABQABAAABABQAFACAEACQAEABACACA8CM/QgBgCAAgDQAAgEACgCQAIgEAGADQACABABAAQABABABAAIABAAQgBgBgBgCQAAgBAAgBQACgHAFgDQAFgDAFgBQAJgBAGAEQADABgBgBQgBAAgBgBQgDgDAAgEQAAgBABgBQAEgGAGABQACABACAAQACAAABABQACAAABABQADACAEABQABABABAAQACAAADAAQABAAABgBQAFAAAFgBQACAAACAAQAGAAAFgCQADgBACAAQACAAACgBQAGgCAGgBQAFgBAEgBQAJgCAJgCQACAAADgBQASgEATgFQACAAACgBQAFAAAEgDQAJgFAHgHQACgBABgCQAEgEADgDQAIgKAHgLQAFgJAFgIQAKgPACgSQAAgDABgEQACgHgBgJQAAgCACgBQAAgBAAgBQAAgEAAgFQAAgDABgDQAAgDAAgCQABgGAAgHQAAgTADgTQABgFAAgEQABgEAAgEQADgSACgSQAAAAAAgBQABgDAAgDQAAgEABgEQABgTAAgUQAAgTAAgTQAAgCAAgCQgBgJAAgJQAAgBAAgBQgCgCAAgDQABgCgBgCQgBgFABgGQAAgBgBgCQAAgBAAgBQgBgKAAgKQAAgLgCgKQgBgDAAgCQAAgDgBgCQAAgDAAgCQgBgNAAgMQAAgDABgCQAAgBAAgCQABgJABgKQAAgBABgCQABgDAAgFQAAgCAAgBQACgDAAgDQAAgBAAgCQADgIACgJQABgBABgBQAAgBAAAAQAAgDABgCQABgBAAgCQABgCAAgBQACgDAAgDQABgDACgEQACgFAAgGQADgJAGgJQABgBAAgBQABgBAAAAIAAgBQAAgBABgBQACgCABgDQAAgBABgBQABgDACgBQABgBAAgCQAFgHAFgJQAGgJAGgJQABgBACgBA1aKdQAAAAAAABQgCABAAABQgDAEgCAFAvMFfQAEgBAEgB");
	this.shape_36.setTransform(5.5,14.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AR/CmQABACACACQAIAJANAAIAAAAQAFAAAEgCQAHgCAFgFQAJgJAAgMQAAgNgJgJQgIgIgNAAQgCAAgCAAATaDjQACABACAAQAIAAAIgEQAIgFAEgIQABgCABgEQAAgBAAgCQACgKgFgKQgHgLgMgDQgGgBgGAAIgGACQAAAAgBAAQgCABgCABQgBABgCABQgCABgBACIAAAAQgCACgBABIAAAAIgDAEQAAABAAABATDDTQgDgGAAgIQAAAAAAgBQAAgCAAgCQABgBAAgBIAAgBQAAgBABgBATEDVQADAFAFAEQABABABAAQAEADAEABQACAAACABAz0jXQAAgCgBgDQgBgBgCgCQgBgCgCgCIgBAA");
	this.shape_37.setTransform(-6.6,-57.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAXA3IgDgBIAAAAIgEAAIgJgEQALgLABgGQACgHgDgGIgDgEIgFgDIgDgCQgGgBgEACIABgCIACgEIAAAAIACgDIAAAAIAEgDIADgBIAEgCIAAAAIAHgCQAFgBAHACQAMADAGAKQAGAJgCALIgBADIgCAGQgEAIgIAFQgHAEgIAAIgBAAgAgvAFIAAAAIABAAgAglADIABgIIAAgBQAAgGgEgFIgDgEQgEgEgGgCIACgJIAAgCIAAgIIAAAAIAAAAIAAgHIAFgBQAMAAAJAJQAJAJAAAMQAAANgJAIQgGAFgHACIABgBg");
	this.shape_38.setTransform(115.7,-39.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C6FFFF").s().p("AgEFNIgDgCIALAIQgFgCgDgEgAAqCOIAAAAIgJAQQAEgNAFgDgAAqh6IAAgCIABACgAhBjcIABABIgBgBIAAgCIAAACIgCgDIgDgEIADADIACACIABADIACACQAFAHAGAGIAJAGIARANIAOAJQgugTgIgZgAhHjjIgBgCIAAgHIAFAMIABAAIAAAAIgBAAIgDgDIADAEgACEkFIABAAIABABIgCgBgAiFkrIAFgCIABABIAAAAIABAAIAAAAQAEAGAKACIAUAUIABABgAA9kvIABACIADAEIgCAMIgEAFgABAk3IgDACIABgJIAFAJIgDgCgAhRk1IABgDIADADIgEAAgAhgk3IAAABIgFAAgAhZk9IABAAIAAADIgBgDgAhmlIIAIAEIAEADIABAEgAhwlSIAVAAIgGABQgIgBAAAHg");
	this.shape_39.setTransform(120.7,-26.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#000000","#996600","#996600"],[0,0.376,1],140.1,88.2,0,140.1,88.2,0).s().p("AAQFVIgTo+IATI+IhkgdIgBgBQgEgIgJgFQgUgNgJgWIgDgEQgPgZgJgaIgDgMIADAMIgFAIIgCABQgDgBgBgHQAAgGgBgHIAAgDIgCgHQgDgOgJgNIgCgGQgCgMgEgHIgOgmQgEgMgCgNQgIgvgKgsIgDgHQgCgGgCgIIgFgRIgCgFIgBgFQgFgIAAgOIAAgIQAAgQgEgOQgIgqgegjQgPgXgMgXIAFgCQAVgNAbgDIAZgFIAHgBQANgBAMABIAFABIBfABIADAAIAEAAIAEAEIgBABIgFAEIgFAGQgDADAKABIAGABQAYAEAZACQANACAMgBIANgBQASgBATgEIAsgKQAKgCAJgFIADgCQArgSAugPIAEgBQApgUAxgEIALgBIAlgFIAHAAQAFgDAGAAQAEAAAFgCIADAAIBUADIgNJVImeBRgAm6DhIAAnZQAJAeAUAZIAIAMIAQAUQgEgEgBAEQAAAEACAEQASAnAQApIAjBXIAjBaQAIAVAGAVIAbBYIADADQAEARABATg");
	this.shape_40.setTransform(140.1,88.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009933").s().p("AiwCMQgZgDgZgEIgFgBQgKgBADgDIAEgGIAGgEIABgBIAAAAQAHgHAGgJQACgHgBgIQAFgggMgcQgKgVgRgIIAAgBIABgKQAAgHADgIIAIgUQAFgMgOgTIAQgFIAOgBQAYgCAYAAIAKABQAIABAKAAIAEABIAJAFIAHADIAEACIAmATIAFACQAtAOAxgBQAWgBAVgCIAFgBQAMgDANgBIAWgDIA3gIIAcgFQAHgCADgDQAFgEADgGQAIgHAFgJIACgEIAGgVIABgHIAAgEIADADIADAmQAEAogKAqQgKAogDAGQgCAFAAAEIgEAAQgEACgFAAQgFAAgFADIgHAAIgmAFIgKABQgxAFgpATIgFACQgtAOgqASIgEACQgIAFgLACIgsAKQgSAEgTACIgNAAIgIAAIgRAAgAj2gOIAEAAQAVgCAXAAIAAAAIABAAIAHAAIAJAAIgJAAIgHAAIgBAAIAAAAQgXAAgVACIgEAAIAAAAIAAAAgAD0iBgADxiEIABgHIACAKg");
	this.shape_41.setTransform(153.4,49.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#996633").s().p("AArCZIgEgIIAAgBQACgFAAgEQAAgGgDgEQADAEAAAGQAAAEgCAFIAAgBIgOghIAFADIgFgDQgcgEgTAZIgQAHIAAAAIAAgmIAAAmQgGgJADgKIAAgDQgFgKAIgGIAAAAIAEgCIAGgEQARgLAJgSIAAAAIAAgCIAAgBIAAgCIAAgDIgBgCIgCgPIgCgFQgCgCgBgDIgBgCIgBAAIgEgBQgHgFgJgBIgCAAIgWgKIgOgJIgRgMIgJgGQgGgGgFgHIgCgCIgCgDIAAgCIAAAAIgBAAIgGgMIAAgWIgSgNIASANIAAAWIgGgQQgEgLgIgIIgBgBIgVgUQgJgBgEgHIgBAAIAAAAIgBAAIAAgBIABAAIAAAAIAagJIgaAJIAAAAIgBAAIgBAAIgCAAIAFgCIABgBQALgFANgBIAFAAIAAgBIAIgDIAAgDIgBAAIgBgEIgEgDIgIgEIgDgDQAAgHAIABIAFgBQAOgCAOAAQAJgEALABQAFAAAFAFQAZgCAUAPIAAAAIABABIABAAIACAAIABABQAIgBAGAIIAHAKQAMANADASIAEAEIADgIIAAARIgpg4Ig0gUIg6AAIA6AAIA0AUIApA4IAAgRIAEgGIACgMIgEgEIgBgCQgBgDACgDIADgCIADACIAwBLIAAgzIAAAAIAAAAQgBgBAAgBQAAgBgBAAQAAgBAAAAQABAAAAAAIABABIADACIABAAQAHABAGAGQAKAKALAIIARALQAHAEAAAHQAGADgCAEIAIAEIACAEIACADQAGANAKAKIAFAJIhjhgIAAAAIAAgDIAAADIAAAAIBjBgIAIAIIgwA7IhVBaIgBgDIAAgCIgCgIIABgCIgBABIAAABIgBAAIAAAAIAAABIAEAMgAAeBxIAJAdIAAgIIgCgGIgCgJIACAEIACAGIgBgEIAAgCIgBgGIAAAGIgCgEIgCgHIgEgCIAAAAIABADgAAvCGIADgFIAAAAIgDAFgAgmBkQAigJACgaQgCAagiAJgABXhJIACABIgCgBgAh/h5IAFAAIgDgDgAgjCNIgDgDIAQgHIgKAKIgDAAgAgWCDIAAAAgAAZBuIAAAAgAgkAUQgKgDgKgGIAWAKIgCgBgAg4ALIAAAAgAAWh5QAEADABAEIABAAIADAEIADACIACABIAEAFIAJANQAJAPAEAPIAEAGIgDgOIAAAAQAIABgFgHIAAgFIgBgGIADACIAAgIIgIgJQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBIACAAIAHAHIAAAzgABGhhIAAAAgAAWh5IAAAAgAiTiMIgBgBIgBAAIgCgCIABAAIADADg");
	this.shape_42.setTransform(125.2,-45.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC99").s().p("AhRN+IgFgCQgXgKgWgMIgGgEQgfgTgTgfIgBgGQgHgGgBgKQABgLAFgJIACgGQAFgKAKgCQAJgDAMAAQADACADAAQAQAAANAHIAUARIAGADIAEACIAcAJQAXAHAZACIAXABIAHABQAHACAHABQAaADASgPQAJgHAGgKQADgCAAgEIADgJIAAgPQAAgTgFgRIgDgEIgbhXQgGgVgIgVIgihaIgihYQgRgpgSgnQgBgEAAgEQAAgEAEAEIgPgUIgIgMQgUgZgKgeIgCgIIgBgRIAAgGQAAgSAGgQIAAgCIgBgEQABgFAEgFQAGgGAHgEQATgMATgHQALgFALgCQAbgFAbgDQAwgGAvgKIAIgBIBcgLIgBAKIAAABQAQAJALAUQAMAdgFAfQAAAIgBAHQgGAKgHAGIgBABIgDgEIgFAAIgCAAIhggBIgEgBQgNgBgMABIgIABIgZAEQgaADgWANIgEADIgBgCIgGgNQgGgGAAgDIABgDIgBADQAAADAGAGIAGANIABACQALAXAQAXQAdAjAJAqQAEAOgBAQIAAAHQABAOAFAJIABAFIABAFIAGARQABAIACAFIADAHQAKAtAIAwQADANADAMIAPAlQADAIACAMIADAFQAJANADAPIABAHIAAADQACAGgBAHQABAGAEACIACgCIAFgHQAIAZAPAaIADAEQAJAWAVANQAJAFADAIIABABIACAEQAIAHgCAKIAAAFQAAAOgLAGQgKAFgNABIgDABQgKAEgLAAIgFABIgUABQgQACgPgEQgFgBgEABQgNAEgPgCIgHABQggAJgcASQgSALgUAFQgDABgCACIgHADQgLACgLABIgMAAQgWAAgSgFgAp7NPIgEgGQgVgCgQgLIgGgDQgGgCgEgFQgIgLgFgMIgDgEQgDgHgBgIQAAgLADgJQAEgNANgCQALgCAHAFIACABQAJABAGAFIAGACQAZAJATASQA4AWA2gRQA2gSBKhVIAGgPIAQgsQAJgYALgXIAHgNIAEgHQAGgVAIgTQAKgYAGgaIABgDQAJgVAGgVIAHgWQAHgVACgWIABgFQAFgKAAgNIAAgFQADgZAGgZIAAgCQAFgSgDgUIABgEQADgKgBgKIAAAAIAAgCIAAgEQAAgXADgVQAAgHgBgGIADgFIABgDQADgLABgMIAAgBQAHgCgBgKIADgGQAHgKALgGQALgFAMgDIAHgCIAFgBQAOgFAOAAQgOAAgOAFIgFABIgHACQgMADgLAFQgLAGgHAKIgDAGIgCgFQgEgPgDgXQgCgWAEgYIACgMQAEgUAAgWQgBgGAGgUIARgvIAAgFIABgDIABgEIAAgCIABgEQACgDAAgEIAAgDIABgFIAAgCIABgDIACgMIAIglIACgQIADgLIACgJIACgJQAEgTADgTQACgTAEgTIAKgkIACgKIAEgTIAGgUIAIgUIAIgWIAHgSQADgGAFgEQAHgEAIgDIAEgBIAWgCIAKABQANABAOgBIAEAAIAQgGIARgHIA+ghIgUgvIg6AAQgmgIgEgmIARhaIgQgOQgEgFAEgKQAEgKAUgKIAngtIACgBIAFgBIADADQAIAJAMAAIABAAIAIgBQAIgCAFgGQAJgIAAgNQAAgMgJgJQgJgJgMAAIgEAAIAAgLIAegcIADAEIADADQAHAZAvATQAJAFALAEIACABIAWAJIAJAYIAAADIABADIAAABIAAACIAAACQgKASgQALIgHAEIgDACIgBAAQgIAGAGAKIgBADQgCAKAGAIIAAABIACADIADAAIALgKQASgZAeAEIANAhIAAAAIAAABIAEAJIABADQgBASgSASIgmAWQgEADgDABIgOAIIAfBoIAEgCIAXgDIAFAAIACAAIgDgBIA8gIIAAAAIAEACQEfAICRHoIgBADIAAAIIgGAUIgCAEQgFAJgIAGQgDAGgFAEQgDAEgHACIgcAFIg3AHIgXADQgNABgMADIgEABQgWADgVAAQgyABgtgNIgFgCIgmgTIgEgCIgHgDQAcgHAFgVQAFgSgDgTIAAgDIgCgHQgCgIgEgIQhsijh1hUIgMgIIACABIgCgBQgegbgmgJIgLgBQgYgCgVAKQgTALgMAQQgLAPgJAPQgYAogNAtQgHAXgEAZIgFA0QgCAHgDAGQABAEgDADQAAAAABABQAAABAAAAQAAABgBAAQAAABAAAAQAAAFgCAOIgHArQgbA7ABAqIAAACIAAABIAAAAIABgBIAEgBQAMAAAKgDQAZgIAUgLIADgBQALgEAMgCIAZgGQATgGA3AAIAyAAIAYABQAOAAAJAEQAIACAKAAQANgBAGgJIACgDIAcgIQANASgEAMIgIAUQgDAIAAAIIhcALIgIABQgvAKgwAGQgbADgbAFQgLACgLAFQgTAHgTAMQgHAEgGAGQgEAFgBAFIABAEIAAACQgGAQAAASIAAAGIABARIACAIQgXAiABASQABATgEAQIgCAFQgBAJgEAGIgdAlIgDAEIgCADQgFAIgHAFIgGAFQgEAMgFAJQgEAJgGAIQgEAMgIAJQAAAEgDACIgJATQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgLAUgHATIgBADIgOAtIgZBaIgBAKIgBAFQgDAFABALIgBAEQgDAFACAHQgBAUABASQABAUgJAqQgIArgwgEQgrAGhmABIgpAAQhVAAgCgEgAjiDfQgGgGgCgIQACAIAGAGgABSn2IgKgegACyoAIAJgQIgBAAQgFADgDANgAgDqiIAAABQAQATgTATQgNASAjAGQAmgYgVgiQgggIgIgSQgHACALATgAAerLQgPAFgPAAQgQAAgPgFQAPAFAQAAQAPAAAPgFgAB1ruQAJABAIgFQAIgEADgIIACgGIABgDQACgLgGgJQgGgLgMgDQgGgCgGABIgGABIgBABIgEACIgDABIgDADIAAABIgDADIAAAAIgDAEIgBABIAAADIgBACIAAAAIgBACIAAAFIAAABQgBAHAEAHIAAAAIABAAIAAABQADAFAEAEIADACIAIADIAEABIAAAAIADAAgAgXr8QAdgDAegOQgeAOgdADgAhoDiIAAAAgADhBJIAAAAgABxAVIAAAAgAA/AQIAJAAQARAAALABQAGABAHADIgygFgADpq+gADlrKIABgBIAAAAIACAHIABADIAAADIgEgMgADbrpIgBgDIAFACIABAHIgFgGIAFAGIADAJIABAFIAAAJIgJgdgADgrjIAAAAg");
	this.shape_43.setTransform(106.3,40.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AwUMSIAAgEIAAAAIgBgHQgBgKgEgJQgHgTgMgQQgNgRgOgOQgOgPgQgMQgRgOgWgGQgQgEgUgCIglAHIgBAAIgIACQALgOAPgJQAQgKARgHQAOgRAQgPQAKgKAQgHIAfgOIAhgRQATgJASgMIAggSQAQgJASgGQARgGARgHIAcgOQAagMAWgMIAAADIADAAIACABIADABIAHADQAkAKAiAOIAFABQAUAEAWgCQAKgBAIgDIAHgBQAvgIAsgSIAvgWQAMgGAMgEIAMgFIAJgFQASgGARgKIATgLQAOgJALgJIAEgEIAEgDIAPgPQAGgHALgEIACAHIgCgHIASAGQAMAIAKAMQALAPAHARQAGARADASQAEASACARQAFATgBASQAAASgGARQgGATgJAQQgFAJgIAAQgHAJgPAJQgVAMgRAMIgbAVQgKAIgMAHIgcAPIgWATQgKAIgJAKIgdAWIgaATQgWAbgQAbIgCAGIgUgLIAAAAIgGgCQgQgKgTgEIghgMQgUgBgTgEQgRgEgSgCQgSgDgTAAQgSgBgTABQgTABgXAEIgMAGQAHgUAIgRQAKgXATgUIAIgJQALgOAPgKIAJgIIAigiIAEgEIAEgDQACgCAAgDQABgDAFgCQgFACgBADQAAADgCACIgEADIgEAEIgiAiIgJAIQgPAKgLAOIgIAJQgTAUgKAXQgIARgHAUIgDAEQgJASgKARIgIAPQgJAAgJgDQgdACgYAFIgIABQgLAAgCgLgAtXGuIAAgGIAAAGgAS1CVQATgTgRgTIAAAAIgEgWIAEAWQgLgUAHgCQAJATAgAIQAVAigmAXQgkgGAOgSgAUfAdQgFgEgDgFIAAgBIgBAAIAAAAQgDgHAAgHIAAgBIAAgEIABgCIAAgBIABgCIABgCQAFgCAFACIAEABIAEADIADADQAEAGgCAIQgCAFgKALIgCgBgATqgNIAAAAQgNAAgIgJIgDgEIADgBIAAAAQAKgHAEgNQAHACAEAFIADADQADAFABAGIAAACIgCAIIAAACIgJABgAtcjbQgGgCgDgEIgCgEIgBgLIAAgDIgBADQgBAEgCAEIgEAEIgCADQgDAEgFAAIgEgBQgEgCgCgDQgHgGAAgKIgFAIIgDADQgJAKgNgCIgDgCQgDgDABgFQAAgIADgHIgFAAQgFAAAAgEQABgLAGgKIACgCIAIgEQgHgBAAgHIAAgEQADgHAGgGIAEgEIgBAAIgCABIgCABIgCAAIgPAAIgCgBIgCgEQgCgDACgDIABgCIAAAAIABgBQAFgBADgCQgFgBgDADIAAABIgDAAQgNgBgLgIIgDgDIgBgFIAAgHIAAgOIAJAAIANgCQALgCAJgHQADgCACgEQAFgIAAgJQAAgMgCgMIgBgKQgEgSgMgOQgJgMgQACIgGABIgHACQgNAGgFAMQgEAKgBAKIgBAFQgCADACACIgEAAIgEgBQgLgCgFgLIgCgKIgBgJIgHgGIAAAAIAFgGIgFAGIAAAAIgFAEQgMAHgOAAIgKgCQgMgCgHgIIACgCQAHgGABgIQgBAIgHAGIgCACIgEADIgHAGQgHAEgHADIgGABIgIAAIgTgCIgDAAIAAgBIABgBIAFgGIAFgGIgFAGIgFAGIgBABIgHAIQgFAGgLAIIgDABIgCABIAAAAIABAAIADAEIADAEIAAAAQgHAEgHgBIgIAAQgJgBgGgDIgBgCQgDgIAEgCQgKAEgMgCIgFgBIgGgDIgDgCQgGgFgBgGIAAgDQAAgJAGgGIgPgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgEgDIgDgCQgHgCgBgFIgBgEIgCgEIgFgRIgCAAIgBAAQgDgJAEgIQADgHAGgEIgIgCQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgBgCIgBgBIgFgGIgBgBQgHgGgBgLIAAgIQgBgJAEgIQAEgHAHgFIACgBIADABIACAAQAGADAEAEQgDgDgBgEIgCgFIgBgGIABgEIAAgEQABgGADgFIABgDIACgDQAEgHAHgFQAHgFAHgBIABgBIgBgCQgHgIAAgLQAAgJAEgIIACgCIABgCQAFgHAJgDIADAAIAHAAIACAAIAIAAIAHABIAGABIACAAIABABQACACAEgCIgCgBIgFgCIAAAAIAAgDIABgGIADgJIAGgMIAJgMQAHgJALgFIAMgDQAIgBAGAGIAGAGQAFAEABAGIACAJIABACIAAACIAAgCIADgUQACgGADgGIAHgKQAKgLAPgDIAKAAQAKACAEALIACAFIAAABIABgBQADgMAKgHQAOgLARAAQAHAAAEAFIAEAFQACAEAAADIACANQADgCADgEIAHgIIAJgGQATgKAUACQAOABAJALQACADABAEIgBAJIgBALIgBAEIABgDIAAgBQAEgJAHgHQAOgOASgHIAJgDQAKgDAJAFIACADQADAFgCAFIgDAJIgFANIgBADIABgBIABgBIADgDIAJgFQAVgKAYABQAKABAAAJQABAIgFAHIgLAMQALgHALgEIANgEIANAAQAKAAAJAFIAGAGQAGAHgHAIQgFAFgGAEIgGAEIgFADIgCABIACAAIAVgDIAMABQAKAAAGAIQAJAJgFAKQgGAMgLAGIgGAEIgFADIABABIAJAAQAOABAJALQADADAAAEQABADgCACIgDAFQgEAEgFABIgDADQAOAAAKAKIABADQABAGgDADIgFAGIgEAEIgCAEQACACAEAAIAHABQAKADAFAJQADAGgEAEIgEADIgBACIgEACIAEAAIAOABIAEABIADABQgCAHgGAEIABAAIAEABQAEAAADAEIACAEQABAEgBADQgFAQgOAIIAHgBQAKAAADAIQAHAXgNAUQgJAMgOAFIgBAAIABABIAGADQAJAEAEAHQAEAIgHAFQgHAFgKgBIAHADIAFACQAEADABAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCAEgEACQgGADgIABIAGAJIACAEIABAFQABAFgEADQgTAOgXgCIAQAIQAMAGAHALIACADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDAEIAAAAIAFADQADADgEADIgDACQgJAGgIgGIgCgCIABADIAAAAQABAFgCAEIgEAFQgJAHgJgHIgBgBIAAACQABAHgHAAIgFABIgJABIgKgBQgMgBgIgHQAFAGADAHIABAGQABALgLAEIgGACIgIABQgGABgEgDIAAAEQgBAKgKAAIgEAAIgFgCQgHgDgDgGIAAgDQAAAAAAgBQAAgBgBAAQAAAAAAAAQgBAAAAAAQgEAIgGAHIgFADQgDACgDAAIgCAAIgDAAgAsljwIADADIgBgHIgCgDIgCgBQgCAEAEAEgAsJkQIgGgGIAGAGgAuek1IACAAIgBAAIgBAAIAAAAgAqhnyIABAAIADgBIgEABgAqYobIAAAAIgBAAIABAAgAznqCQgBgFgEgBIgCAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAIACACIAJAFIAAAAgAr4rFIABAAIABAAIgCAAgAxYlmIgFgBIgEgCQgLgIgIgKQACgJAJgEQAFgDAGAAQAHABAEAFQAKAIgBANQAAAEgCACIgCADIgEABIgDAAIgDAAg");
	this.shape_44.setTransform(-14.9,-37.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC9966").s().p("AgIO7IgRgCIgFgBQgFAAgDgEIgBgBQADgHAGgCIgKABQgHAAgFgCIgCgBIgDgBIgCgCQgCgDAAgEIABgCIABgDQADgGAGgDIgBAAIgBAAIgFgBQgGAAgFgDIgEgCIgDgCQgDgBgBgFQgCgFAEgDQAFgEAEgFIgDAAIgKABQgJAAgIgBQgGgCgDgDQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgJIABgDIACgCIACgCIACgDQAEgFAFgEIAKgGIACgCIASgIQAQgJAUAAIAFgBQAFgCAGAAIAKAAIAIAAIAOAAIAFABIAGACIAIABIAFAAQAQABAYgIIjWkJQgcgYgSgbQgPgjgEglQgEgnAIglQADgMAFgMIAJgTIAIgPQAKgRAIgRIAEgEIAMgGQAWgFAUgBQASgBASABQATABATACQAQACASAEQASAFAUAAIAhAMQAUAEAQAKIAFADIABAAIgBABQgKANgFAKQgGALgNANIgfAeQgTARgRAGIgDACIgFABIAAAAIgDABIgCABIgIADIAEAMIADACQBLApAzCOQAbBMAUBoQBRBdgwAVQgwAUgDABIgEAAIgFABQgRACgRAEIgHABQgNACgMAEIgGACIgKADIgPAFIgJAEQgEADgFACIgHADQgJAFgJACIgFACQgHADgIABIgDABIgCAAIgDABIgDgBgAsmOsQgSgFgLgQQgFgHAAgJQAAgJAEgGQAGgJAKABIADABIACABIAJAEIAGADIgGgDIgJgEIAEgKQgBgCAAgDQAAgEACgCQAHgEAHADIADABIACABIAAAAIgBgDIAAgCQACgHAFgDQAFgDAFgBQAJgBAGAEQABABAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIgCgBQgDgDAAgEIAAgCQAFgGAGABIAEABIADABIACABIAIADIACABIAFAAIACgBIAKgBIAEAAQAGAAAFgCIAFgBIAEgBIAMgDIAJgCIASgEIAFgBIAlgJIAEgBQAFAAAEgDQAJgFAHgHIADgDIAHgHQAIgKAHgLIAKgRQAJgPADgSIABgHQACgHgBgJQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAAgCIAAgJIABgGIAAgFIABgNQAAgTADgTIABgJIABgIIAFgkIAAgBIABgGIAAgIQACgTAAgUIAAgmIAAgEQgBgJAAgJIAAgCQgCgCAAgDIAAgEQgBgFABgGIgBgDIAAgCIgBgUQAAgLgCgKIgBgFIgBgFIAAgFIgBgZIABgFIAAgDIACgTIAAgDQACgDAAgFIAAgDIACgGIAAgDQADgIACgJIABgCIABgBQAAgDABgCIABgDIABgDIACgGIADgHQACgFAAgGQADgJAGgJIABgCIAAgBIABAAIABgDQACgCABgDIABgCIADgEIABgDIAKgQIAMgSIACgCIgBgEIAlgIQAUADAQAEQAWAFASAOQAQANANAOQAPAPAMAQQAMAQAIAUQADAJACAJIAAAHIAAABIgHAAQgHABgHAFIgHADIgDACIgCACIgCACIgBABQgEAEAAAGIAAAEIgBAGQgBAKACAJIABADIACATIACATIABAEIABAVIABAFIAAAGIABAQQAAAQgBAQIgBAIIgEAnIgBAEIgBAEIgCAKIgCAQIgDAQIgBAIIgCAGIgCAIIgBADIgIATIgEAIIgKASIgKASIgDAFQgFAHgGAGIgMAPIgMAPIgBABIgBACIgFAJIgBAAIAAABIgBACIgCAEIgJAXIgEAIQgDAFgBAFIgBAEIgCAEIgDAKIgCAJIgBADIAAADIgBAjIABACQACADgBAFIgBAFIAAACIgCAJIgEAKIgBADIgLAPIgCACIgBACIgEADIgDADQgHAIgJAFIgDACIgUAIIgFACIgEACIgFABIgPAEIgDABIgbAAIgDAAIgFgBIgFAAIgHgBIgCgBIgJgCIgCgBQgEgDgFgBIgGgBIgFAAIgDgBIgaAAQgLAAgJgBIgDgBQgDgBgEAAIgFABIgCAAIggABIgEAAIgCABIgJACIgCACQgEAAgEACIgJAEIgDAAIgCABIgCABIgBAAIgCABIgHACIgOACIgFABIgRABIgDAAQgIAAgHgCgAANgeIgEgCQghgOglgKIgHgDIgCgBIgCAAIAAAAIgEAAIAAgDIABghIABgoQgFgRgIgSQACgVgGgTQgGgSgMgPIgWgZIAYgCQAQgBAQgFIAigLQARgGARgIQARgJAMgQQALgPAIgVIAAgGIABgOIADgMIgDAMIgBAOIAAAGQgIAVgLAPQgMAQgRAJQgRAIgRAGIgiALQgQAFgQABIgYACIgLACIgkgMQgRgGgQgIQgQgKgQgLQgPgLgNgOQgJgIgGgKIgDgGIgDgGIgSgdIASAdIADAGIADAGIgDADQicBzlYhKIgBAAIADgKQB3iWANgMQANgOALgOIAFgKIAIADQAPgKAQgEQATgMAVgBQAQgIARgDQATgFATgCQAUgCARAHQATAAASAGQASAHASACQATACAQgLQAQgLANgPQAOgMAKgNIADgCIABgCIAHAAIACAAQAVAAANgHQAPgJAKgPQAKgPAFgNQgFANgKAPQgKAPgPAJQgNAHgVAAIgCAAIgHAAIAAAAIgDAAQgMgCgKgDQgEgCgCgEQgGgOANgZIgHAAQgOgCAKgPIAAgBIADgCQAVgGABgSQAHgTgIgSQgCgFgHAAQgEgFgHANQgPANgSAHQgDgSgOgDQgXABgNgKQgFgEgBgEQgFgOAQgOQAGgSABgUQABgUgIgSIgGgOIgKgQIgBgCIgBAAIAAgBIgBgBIgCgFIABAAIASgSIgSASIgBAAIgCgEIgEgDIAAAAIAAAAIACgBIACgCQALgHAFgGIAHgJIABABIADABIATABIAHAAIAGgBQAIgCAGgFIAHgFIAEgDQAIAHALADIAKABQAOABAMgHIAFgEIAIAGIAAAJIADAKQAFALALACIADAAIAEABQgBgCABgEIACgEQABgKADgKQAFgNANgFIAHgCIAHgBQAPgCAKALQALAPAEASIACAKQACAMAAAMQgBAJgEAIQgCADgEADQgJAHgLACIgMABIgKABIgCAAIAAAAIgJgBIgBAAIgGAAIgCgBIACABIAGAAIABAAIAJABIAAAAIACAAIAAANIAAAIIACAEIADAEQALAIANAAIACAAIgBACIAAAAIgBACQgBADACADIACADIACABIAPAAIACAAIABAAIADgBIABAAIgFADQgFAGgDAIIgBAEQAAAGAIABIgIAEIgCACQgHAKAAAMQgBAEAFgBIAFAAQgCAIgBAHQAAAFADAEIADABQANACAIgJIAEgEIAFgHQgBAJAHAHQADADADABIAEABQAGABACgEIADgEIADgEQADgDABgFIABgCIAAACIABALIABAEQADAFAGABQADABACAAQADAAADgCIAFgEQAHgHADgIQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIABACQADAHAHADIAFABIAEABQAKAAAAgKIAAgFQAFAEAGgBIAHgBIAGgCQAKgEAAgLIgCgHQgDgHgFgFQAJAGAMACIAKAAIAJAAIAFgBQAGgBAAgGIAAgDIABABQAIAHAJgHIAEgEQADgFgCgFIAAAAIABAAIAAAAQAgArAWAMIAgARQAQAHASABQATABAQgNIAhgbIAbgZIAagYQAOgQAUgLIAbgOIAegNIAlgNIAkgKQATgFAUgDQAPgCAQABQASABARADQAKACAJAFIAFgGQAQgHATgKIAkgDQAQgKATACQAUgDASAEQAQAHAQAMIAdAVIARAiQAIASABATQACASgEARQgJAQgKAOIAAAAIAAAAIAAAAIAAABIAAABIAAABQABAKgGAQQgGARgCASQgHARgDARQgHATAAAUQgIATgGASIgLAjIgJAeQAIAEALAKQAFARAHAUQADAHgDAKQAHANAEAPQAGATAHARQAFAOgGANQgGANgLANIgVAbQgHAJgJADQgIADgFgGIABgLIgLAJQgQAMgRADQgLACgMAAQgLAAgCgJQgNASgUgDQgMgCgHgFQgGgFAAgIIgGAHQgNARgSgKQgRgKgGgVQgIgQgDgTIAAgBQAPgLAPgIQAPgKAQgBQgQABgPAKQgPAIgPALIgBABQgSANgQgPQgQgPAFgWQADgRALgOQAKgSAVACIAmAEQADAAABAFQANgQAHgTIARgkQgBgUAJgSQgDgTADgTQgCgUgGgPQABgZgHgMIAJgFIAbgYQANgLAKgNQAOgQADgVQAFgKAAgJIgBgHIAGgWIgGAWIABAHQAAAJgFAKQgDAVgOAQQgKANgNALIgbAYIgJAFIgVANQgRAJgSAEQgSAHgUgBIggACQgagHgOgQQAOAQAaAHQgzgGgIAWQABASgFASQACAUgHAQQgGAUgKAPQgKARgPAKIgPAKIADAEQgFASAAAVIABAiIAAAgQABATACATQADATAGATQACAQAIAQIgNAUIgPAPIgEAEIgDADQgLAJgOAJIgTAMQgRAJgTAHIgJAEIgLAFQgNAFgMAGIgvAVQgsATguAHIgHACQgJACgJABIgRABQgNAAgNgCgABWizQACAQAIAOQABAWAHASIAIAVIgIgVQgHgSgBgWQgIgOgCgQIAAgIQAAgIACgBQgCABAAAIIAAAIgALokIIAHgGIgHAGgAB8lWQgMADgMAAIgIgBQgQgIgPgLQgOgLgFgNQAFANAOALQAPALAQAIIAIABQAMAAAMgDgAFTmMQgQAIgMAMQAMgMAQgIIASgKIgSAKgAnhmEQASAAAPgGIACgBIAAAAQAKgFAGgKIAIgOIgIAOQgGAKgKAFIAAAAIgCABQgPAGgSAAIAAAAIAAAAIgOgBIgBAAIgKgBQgRgCgNgIIgDgBIAAgBIgBAAIgBAAIgCABIgBABIAAAAIAAAAIABgBIACgBIABAAIABAAIAAABIADABQANAIARACIAKABIABAAIAOABIAAAAIAAAAgAMzrJIAAABIgBABIgBABQgKAQgOAMQgGAFgEAFQAEgFAGgFQAOgMAKgQIABgBIABgBIAAgBIABAAIgBAAgAGgrYQgFgBAAgFIACgHIAGgOIAKgNIABgBIAAAAIABgBIAAAAIAAAAIABgBIABgBQASgQAYAAIABAAIAAAAIAMABQAFABAAADQAAgDgFgBIgMgBIAAAAIgBAAQgYAAgSAQIgBABIgBABIAAAAIAAAAIgBABIAAAAIgBABIgKANIgGAOIgCAHQAAAFAFABgAJptPQAKAJAFAIQgFgIgKgJQgGgFgGgEQAGAEAGAFgAlDtMIAAAAIACgBIAEgDQADgBACgCQAKgJACgMIAAgGQABgFgDgEIgDgEIgGgHIgEgEQgFgFgHgCIgGgBIgMABQgJABgGAHIgFAGQgDADgBAFQgBABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIAFAKIAGAJQAJAJAKAIIAFACIAFABIAGAAQAAABABAAQAAAAABAAQAAAAAAgBQABAAAAAAgAkellIAAAAgAjKtMg");
	this.shape_45.setTransform(-92.8,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.4,-119.1,368.3,267.3);


(lib.content_scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhEB4QgPgNAAgzIABgWIABgZQgCgEAAgEQAAgEADgEQADgtAAgWIgBgRIgCgRQAAgTAQAAQAGAAAFAFQATgFAQgDQARgCAOAAQAmAAAWAJQALAEAAALQAAAGgEAFQgFAFgHAAIgEAAQgbgIgYAAQgNAAgOADQgPACgSAFIABAQQAAAWgCAmIBDgHIAlgDQAHAAAFAEQAFAFAAAHQAAANgPACIglADIhHAHIgBAVIgBASQAAAjAFAGQAEAEAVAAIAcAAIAdgBIAKgBIAJgBQAQAAAAAQQAAAOgNACQgPADgwAAQgwAAgOgNg");
	this.shape.setTransform(188.6,338.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhJB5QgFgHAAgHIAAguQgBgWADgoQADgtAAgUIADgrQABgHADgDQAWgGAbgBQAbABAYASQAeAWAAAfQAAAoggAXQAYAKALAMQAMAMAAAPQAAATgUARQgPANgPAGQgiANg3AAQgGAAgHgFgAgwA+IAAAhQApgCAZgKQALgEAKgJQAJgIAAgEQAAgIgTgJQgPgHgOgDIgQgDIgHAAIgGAAIgSgBIgBAjgAgphcIAAAbIgDA9IAXABQAXgCAPgNQAQgNAAgXQAAgPgRgMQgQgMgRAAIgYABg");
	this.shape_1.setTransform(168.9,338.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AguA5QgMgIAAgLQAAgFAEgEQADgEAHAAQAHAAAEAIQAFALASAAQAOAAAOgGQAOgHAAgIQAAgLgJgEQgGgCgSgBQgQAAgMgFQgQgHAAgNQAAgSATgOQARgOAVAAQAIAAAOAEQAPAFAAAGQAAAFgDADQgDAEgGAAIgMgCIgNgBQgLAAgJAFQgLAGAAAGQAAADADACQAEADAGAAIAVACQAUABALAKQAMAJAAATQAAAXgaALQgTAJgZAAQgVAAgNgKg");
	this.shape_2.setTransform(110.1,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgrBDQgEgFAAgFIAAhbIAAgMQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAFgIAGQAJAEAHAIQAHAKAAAJQAAALgNALQgIAHgKAEQgTAHgfAAQgGAAgEgEgAgXAvQAPAAARgGQAPgEAAgFQAAgHgKgFQgHgFgHAAIgXgBgAgXguIAAATIAAASIAMABQAagDAAgRQAAgGgIgGQgHgHgJABIgOAAg");
	this.shape_3.setTransform(98.5,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_4.setTransform(87,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_5.setTransform(75.7,-1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgvIgHgYQgFgQAAgHQAAgFADgDQAEgEAFAAQAIAAAEAJIADAPIAJAcIANAsIAUg0IAHgVQAFgMAGgHQAEgFAGAAQAFAAAEAEQADADAAAFQAAADgCAEQgFAHgEAJIgGASIgYA8QgEAKgGALQgDAHgHAAQgJAAgDgJg");
	this.shape_6.setTransform(63.8,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQABAFgDAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAVgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgdAAgIgIg");
	this.shape_7.setTransform(44.5,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgmA2QgNgOAAgTQAAgdAZgeQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_8.setTransform(33.1,-1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Ag9BEQgDgEAAgFIAAgKIABgLIAAgQIABgPIgBgQIAAgRIgBgPIgBgQQAAgFAEgEQAFgFAFAAQAHAAAIAMQAnA5AnAjIAAgOIgBg5IgBgKIgBgJQAAgNANAAQAOAAAAAtIAAAOIgBA2IgBAOQgCALgLAAQgGAAgIgHQghgegqg2IgBAbIAAAVIABAVQAAAagNAAQgGAAgEgEg");
	this.shape_9.setTransform(20.1,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAIADAAAIQAAAFgDAEQgDAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_10.setTransform(7.4,-1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_11.setTransform(-4.6,-1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AguA5QgMgIAAgLQAAgFAEgEQAEgEAGAAQAHAAAEAIQAFALASAAQANAAAPgGQAPgHAAgIQgBgLgIgEQgHgCgSgBQgQAAgMgFQgQgHAAgNQABgSASgOQARgOAVAAQAIAAAOAEQAPAFAAAGQAAAFgDADQgEAEgFAAIgMgCIgNgBQgLAAgJAFQgLAGAAAGQAAADADACQADADAHAAIAVACQAUABALAKQAMAJAAATQAAAXgZALQgUAJgYAAQgWAAgNgKg");
	this.shape_12.setTransform(-17.1,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgpBAQgEgEAAgEQABgFAEgEQADgDAGAAIARgCIAAgnQgBgXACgWIgTAAQgFAAgEgDQgEgDAAgFQAAgGAEgDQADgDAFAAIAagBQAPAAAbAEQALABAAALQAAAFgFAEQgDACgFAAIgWgCIgBAqIgBAnIAYAAQAFAAAEAEQAEADAAAFQAAAFgEADQgEAEgFAAIgQAAIgOAAIgRACIgSABQgFAAgEgDg");
	this.shape_13.setTransform(-28.3,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAaAzIgMgSIgLgPIgaAeIgRASQgEADgFAAQgFAAgEgDQgDgEAAgFQAAgEADgDIAQgRIAfgiIgTgWIgKgOQgGgHgFgEQgFgEAAgFQAAgFAEgEQADgEAFAAQAFAAAIAHIAJAKIALAOIAPATIAWgcQASgWAGAAQAFAAAEAEQADAEAAAFQAAAEgDADIgSAWIgVAcIASAZIAUAaQADADAAAFQAAAEgEAEQgDADgFAAQgJAAgOgTg");
	this.shape_14.setTransform(-39.9,-1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgoBDQgKgIABgdIABgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_15.setTransform(-51.6,-1.4);

	this.instance = new lib.Scene1();
	this.instance.parent = this;
	this.instance.setTransform(191.6,155.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.content_scene3, new cjs.Rectangle(-59.6,-16.6,439.6,378), null);


// stage content:
(lib.pred_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3repeat:155});

	// timeline functions:
	this.frame_169 = function() {
		//gotoAndPlay("scene3repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(169).call(this.frame_169).wait(1));

	// content
	this.instance = new lib.content_scene3();
	this.instance.parent = this;
	this.instance.setTransform(273.7,213,1,1,0,0,0,189.7,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,190.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '5DF23F51E6DE954D8ED1A2FDF993BB00',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/be.mp3", id:"be"},
		{src:"sounds/couldieverbe.mp3", id:"couldieverbe"},
		{src:"sounds/bgmAux.mp3", id:"bgmAux"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/needtoreview.mp3", id:"needtoreview"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/pop_up.mp3", id:"pop_up"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/predicateverbsdefinition.mp3", id:"predicateverbsdefinition"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
		{src:"sounds/thatisthequestion.mp3", id:"thatisthequestion"},
		{src:"sounds/thatisthequestion2.mp3", id:"thatisthequestion2"},
		{src:"sounds/tobeornottobe.mp3", id:"tobeornottobe"},
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
an.compositions['5DF23F51E6DE954D8ED1A2FDF993BB00'] = {
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