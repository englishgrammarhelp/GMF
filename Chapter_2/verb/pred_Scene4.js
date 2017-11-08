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


(lib.tobe2wordsamstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgCAiQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIgBgVIgCgUQAAgGgCgDQgEABgEAFIgHAHIgDAEIgBAJIAAALIAAAEIABAFIgCAEQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgHAAAAgPIABgLIABgJIgBgKIAAgJQAAgNAFAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIgBADIAAAEIAAAGQADgGAGgFQAGgFAEAAQAJAAADAJQADgEAEgCQAFgDAGAAQAJAAAEALIACAQIAFAhQAAAAAAABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgFAAgBgFIgCgTIgCgRIgCgIQgCgFgCAAQgCAAgGAEIgIAFIABALIABAPIABAPQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape.setTransform(2.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AATAeIgEgEIgKAEIgGABQgOAAgGgHQgGgIAAgOQAAgNAKgLQAJgKANAAQAFABAGACQAIADAAAFIgBADIgBAHIAAAMIABALIADALIACADIAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgEgCgAgJgOQgHAIAAAIQAAAKAEAFQADAEAHAAQAFAAADgBIAGgFIgCgWIABgGIABgGIgEgCIgCgBQgJAAgGAIg");
	this.shape_1.setTransform(-5.7,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobe2wordsamstill, new cjs.Rectangle(-10.8,-10.3,21.6,20.7), null);


(lib.tobe2wordsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(66.1,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgHIAAgGIgBghIgOgBQgEgBAAgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAAAAJIABAFIAAADIgBAEIAJgBIAIABQAEABgBAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIAAADQABANgHAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(61.8,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAhQgIgEgBgFQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQACAAACADIAGACIAHAAIAIgBQAFgBAAgEQAAgIgLgDIgFgBQgIgCgDgCQgFgDAAgGQAAgMALgGIALgDIALgEIAFgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABIABAFIABAFQAAAAgBABQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgBgDIgBgGIgOAEQgJAEAAAFIAEABQANADAGAEQAKAFAAAMQgBAJgHAFQgIAEgJAAQgHAAgIgCg");
	this.shape_2.setTransform(55.9,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAqQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgKIAAgLIABgOIAAgMQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAMIAAAOIAAALIAAAKQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAgDgfQgCgCAAgDQAAgDACgCQACgCACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_3.setTransform(51.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAfIgSgXIgLALIgKAJQgBABAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIAEgFIAGgFIAMgMIgHgLIgIgKQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQAEAAAGAJIAJAOIAMgKQAHgHADgEQABgCADgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgGAGIgIAIIgLAKIATAYIACAEIgCAEIgDACQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_4.setTransform(46.2,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_5.setTransform(39.5,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_6.setTransform(29.2,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGANQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAEgJIAEgKQABgDADAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAABABIABADIgIATQgBADgDAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_7.setTransform(21,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_8.setTransform(15.9,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAbIAAgoIABgGIAAgGQAAgFAEAAQAHAAgBAJQALgLAOAAQAEAAADAEQACAEAAAGIAAAFQgBAHgFAAQgFAAAAgGIAAgEIAAgFQgKABgFAEQgEAEgEAIIAAAfQAAAGgGAAQgFAAAAgGg");
	this.shape_9.setTransform(9.8,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAZQgHgIgBgOQAAgMAHgKQAIgMAOAAQALAAAGALQAFAIAAAMQAAANgHAJQgHAKgMAAQgJAAgIgHgAgKgLQgDAHAAAHQAAAJAEAEQAEAEAFAAQAFAAAFgEQAFgFAAgIQABgWgNAAQgIAAgFAIg");
	this.shape_10.setTransform(3.5,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAyQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIABgRIAAgQIAAgQIgJABQgGAAAAgGQAAgGAKAAIAGAAIAAgJQACgNAFgGQAFgHANgBQAIABAAAFQAAAGgHgBQgOABgCATIAAAEIANgBQAJAAAAAGQAAAEgFABIgEABIgOAAIAAANIAAALIAAAKQAAALgBAHQAAAEgFAAIgEgBg");
	this.shape_11.setTransform(-2.7,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_12.setTransform(-8.8,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWAbIAAgoIAAgGIAAgGQAAgFAGAAQAFAAAAAJQALgLANAAQAFAAADAEQACAEAAAGIgBAFQAAAHgFAAQgFAAAAgGIAAgEIAAgFQgKABgFAEQgEAEgEAIIAAAfQAAAGgFAAQgGAAAAgGg");
	this.shape_13.setTransform(-14.8,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_14.setTransform(-21.1,1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAQAsIgCgNIgCgOIABgFIAAgEQAAgKgGAAQgHAAgFAFIgIANQAAAXgCAEQgCAEgDAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgIIAAgJIAAgqIABgKIgBgFIAAgGQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAQAFAAABAGIABAKIAAANIgBAMIAAAGQAFgHAGgDQAEgDAGAAQAKAAAEAGQACAFABAJIAAALIABAMIACANIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgBgFg");
	this.shape_15.setTransform(-27.9,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgHIAAgGIgBghIgMgBQgGgBAAgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAAAAJIABAFIAAADIgBAEIAJgBIAIABQAEABAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQAAANgHAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_16.setTransform(-34.2,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAhQAAgEAGgHQAEgIADAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAADgFAEQgEAFAAADQgBAFgDAAQgGAAAAgGgAAAgXQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAIAAgDIgBgCQAAAAAAgBQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQABAAAAAAQAHAAAAALQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_17.setTransform(-42.9,2.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgZArQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBg");
	this.shape_18.setTransform(-65.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobe2wordsstill, new cjs.Rectangle(-70.8,-10.3,140.6,20.7), null);


(lib.tobe2bubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALni7QDtBOAABtQAABujtBOQjtBOlQAAQlPAAjthOQjthOAAhuQAAhtDthOQDthOFPAAQFQAADtBOgAqVhZQAWAMAAASQAAARgWAMQgWANgeAAQgfAAgWgNQgVgMAAgRQAAgSAVgMQAWgMAfAAQAeAAAWAMgAuWAjQgKADgPAAQgPAAgLgDQgKgDAAgEQAAgEAKgDQALgDAPAAQAPAAAKADQALADAAAEQAAAEgLADgAt9goQAPgFAVAAQAUAAAPAFQAPAGAAAJQAAAIgPAGQgPAGgUAAQgVAAgPgGQgOgGAAgIQAAgJAOgGg");
	this.shape.setTransform(-15.2,-17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmSC8QjthOAAhuQAAhtDthOQDuhOFOAAQFPAADuBOQDtBOAABtQAABujtBOQjuBOlPAAQlOAAjuhOgAvJAjQgKgDAAgEQAAgEAKgDQALgDAPAAQAPAAAKADQALADAAAEQAAAEgLADQgKADgPAAQgPAAgLgDgAt8gLQgPgGAAgIQAAgJAPgGQAPgFAUAAQAVAAAOAFQAPAGAAAJQAAAIgPAGQgOAGgVAAQgUAAgPgGgAr9geQgWgLAAgSQAAgRAWgNQAWgMAeAAQAeAAAWAMQAWANAAARQAAASgWALQgWANgeAAQgeAAgWgNg");
	this.shape_1.setTransform(-15.2,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobe2bubblestill, new cjs.Rectangle(-114.2,-45.1,198,55.2), null);


(lib.scene2bottomtitlestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABgB1QgEgHgEgSIgGgaQgGgZgOhVIggBeIgJAdQgGASgFALQgHAMgKAAQgJAAgGgKQgDgHgDgKIgFgRQgPg3gNg+IgFAcIgUBRQgCAPgGAcQgFAMgKAAQgIAAgFgFQgDgFAAgHQgBgaALgmIASg+IAJgxQAGgiAIgLQAHgJAIAAQALAAAFALQAGAOAHArQAIA0ARA6QAWg7AShBIAEgXQADgNAEgJQAGgLAMAAQANAAAHAaQADAIADAcQAJBGAOAyIAHAbQAHAVAAAFQAAAHgGAFQgFAEgGAAQgJAAgFgJg");
	this.shape.setTransform(41.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA3BRQgFgOgGgjIgpAIIgpAIQgIAVgTAnQgFAJgIAAQgHAAgEgFQgGgEAAgHQAAgHAYgyQgDgEAAgFQAAgNAPgEQASggAbgrQAlg8AJAAQAMAAAEASIAKA0IAYBsIAJAYQAEANAAAEQAAAHgEAEQgGAFgFAAQgPAAgKglgAgUALIA5gLIgNg8g");
	this.shape_1.setTransform(15.1,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgSAiQgFgEAAgGQAAgEAKgWIANgbQADgIAHAAQAGAAADAEQAEAFABAFQAAAEgXAwQgCAJgIAAQgFAAgEgEg");
	this.shape_2.setTransform(-9.5,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhEB4QgPgNAAgzIABgWIABgZQgCgEAAgEQAAgEADgEQADgtAAgWIgBgRIgCgRQAAgTAQAAQAGAAAFAFQATgFAQgDQARgCAOAAQAmAAAWAJQALAEAAALQAAAGgEAFQgFAFgHAAIgEAAQgbgIgYAAQgNAAgOADQgPACgSAFIABAQQAAAWgCAmIBDgHIAlgDQAHAAAFAEQAFAFAAAHQAAANgPACIglADIhHAHIgBAVIgBASQAAAjAFAGQAEAEAVAAIAcAAIAdgBIAKgBIAJgBQAQAAAAAQQAAAOgNACQgPADgwAAQgwAAgOgNg");
	this.shape_3.setTransform(-24.4,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhIB5QgHgHAAgHIAAguQABgVACgpQADgtABgUIABgrQABgHAFgDQAUgGAcgBQAaABAaASQAdAWAAAfQAAAogfAXQAXAKALAMQAMAMABAPQAAATgVARQgOANgQAGQgiANg3AAQgHAAgFgFgAgvA+IAAAhQAogCAZgKQALgEAKgJQAJgIAAgEQABgIgVgJQgOgHgOgDIgRgDIgGAAIgGAAIgSgBIAAAjgAgphcIgBAbIgCA9IAXABQAXgCAPgNQAQgNAAgXQAAgPgQgMQgRgMgRAAIgYABg");
	this.shape_4.setTransform(-44.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene2bottomtitlestill, new cjs.Rectangle(-57.2,-24.3,114.4,48.6), null);


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


(lib.tobe2wordsam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tobe2wordsamstill();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,19.2,21.6,20.7);


(lib.scene2bottomtitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene2bottomtitlestill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-24.3,114.4,48.6);


(lib.Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// eyes
	this.instance = new lib.tobeblondeblink();
	this.instance.parent = this;
	this.instance.setTransform(-57,-57.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

	// text
	this.instance_1 = new lib.tobe2wordsstill();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.1,-98.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.tobe2wordsam();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.9,-129.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},28).to({state:[{t:this.instance_1},{t:this.instance_2}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({x:71.3,y:-100.1,alpha:1},10).wait(1));

	// bubble
	this.instance_3 = new lib.tobe2bubblestill();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45.8,-97.4,0.075,0.075);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:70.1,y:-81.5},9).wait(11));

	// drawing
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ANTiBQAEgNACgOQAAgEAAgEQAAgCAAgCQgBgCgCgCQgJgJgGgNQgHgSgGgTQgEgOgEgPQgFgQgFgPQgDgLgDgMQgBgDgCgEQABgJgBgKQAAgEgBgFQABgXABgWQABgOACgNQABgIAAgHQAFgxAIguQABgKADgKQAAgBABgCQABgCAAgDQABgDABgDQAMgpAKgqQACgGABgGQAAAAABgBQAKgoAMgmQAIgXAMgWQAMgUAUgOQAEgCADgDQAHgGAHgGQAKgIANgIQAEgEAGgEQAGgGAIgEQACgDADgCQADgCACgBQAAgBABgBQAPgNAUgOQAXgPAdACQAQAAAOADQAhAHAXAbQAfAmAUAuQATAsADAwQADAwgKAvQgEATgIASQgEAIAAAKQABAFgCAFQgRArgPAsQgFASgGARQgHAWgKAVQgUAogXAqQgJAQgRANQgDADgDADQgMALgNAJQgEADgEACQAAABgBAAQgBABAAAAIAAAAQgFADgFACQgEADgCADQgBAAgCABQgVAGgUAKQgBAAgBABQAAAAgBAAQgUAKgRAJQgKAFgHAHQgEABAAADQgDAEgBADASErFQABgHgBgGQAAgGgBgGQgBgFgBgFIAAAAQAAgDAAgCQAAgBAAgCQgGgVgHgUQgBgDgCgDQgLgVgRgSQgOgKgRgDQgGgBgGgBQgBAAAAAAQgDAAgCAAQgBAAAAAAQgIAAgHAAQgJAAgJAEQgGADgFAEQgEADgDAFQgDAEgEAEQgBACgBABIgDAEQgCACgBABQAAAAAAABQgCACgCACIgDAEQgGAHgGAHQgMAOgNATQgPAVgSARQgJAJgHAKQgCADgDADQgCAEgDAFQgEAFgDAHQAAABgBACQgEAJgEAKQgHAVgDAWQgCANgFAMQgBACAAADQgCAMgDALQgBAEgBADQAAACgBADQAAABAAAAQgCAGgBAGQgBADgBAEQgBAMgCAIQgBADgBAEQAAADgBACQgBAMgCALQgDAZAAAbQAAAnABAnQABAEAAADQABAMAFALQAFALAHAJQAHAJAJAIQAJAKAPABQADABACAAQAYABAYABQAMgBAKgEQAKgEAHgIQALgKAIgLQAEgGADgFQABgCABgDQgUAUgegDQgDAAgEgBQgXgFgWgMQgDgBgDgBQgGgBgEgFQgGgIgDgIQgBgCgCgDQgKgUgEgWQgCgSgCgRQgCgLABgMQACgwAKgvQAAgCABgCQABgEABgEQAOglAPgkQAJgXAPgWQAMgYAMgYQATgfATgeQAIgNAJgLQAKgLALgJAQRs9QgGADgFAEQAEgEAEgEQACABABAAgAPzk6QADgEACgDQASgYANgcQACgEACgEQAWgsAXgsQAVgqALgrQAFgXAEgYQAFgbAEgcQgBgIAAgHQABgZAAgZQAAgLgCgLQgBgCgBgDQgCgIgEgIQgOgegZgUQgIgGgKgFQgNgFgPgCQgFAAgDACQgBABgBAAQAJgGAJgEAOViRQAHgDAKgCIAAAAQAEgBADgBQAHgDAIAAQAbgCAaAEQAFABAFAAQAZABASARQAGAIAAAKQAAACAAADQAAATgOALQgJAGgKAEQAAAAgBAAQgFACgFACQgFACgFABQgEAAgEAAQgXAHgbgCQgCAAgBgBQgBgDgGABQgGABgGgBQgDAAgCAAQgGAAgGgCQgIASgDABQgEABgCACQgBACgDABQgYAQgPAVQgBABgBABQgCAEgCAEQgBACAAABQgBABAAAAIAAABQAAAAAAAAQgBABAAABQgBADgBADQgBAGAAAGQAAACACABQADACAEAAIAAAAQAFACAGAAQABAAABAAIABAAQACABACAAQACAAADAAQABAAABAAQABAAABAAQAAgBABAAQAOAAAOgFQACgBABAAQABAAABgBQAcgKAdgJQAMgFAPgCQACAAADABQAHgCAGgCQADgBAEgBQAKgCALgCQAAAAABAAQAHgCAEgEQAAAAABgBIAAAAQABgBABgBQABgBABgCQgBgCABgCQADgFAAgDQAAgFAGgCQgBAMgJAJQgBABAAAAQgBACAAABIAAAAQgBAFAEADQADADAEACQAJAHAAALQAAAHgBAIQAAAAgBABIAAAAQgBAHgBAHQgBAFgCAFQgBABgBABQgMASgVAEQgCABgCgCQgQAGgQADQgDAAgDAAQAIAFAJACQAHACAIAEQASAHAPAIQAQAJAYAGQACABADABQANAFAOADQADABACAAQAdAEAaAHQADAAABABQAGAGgEAIQgMAVgaABQgeACgcgEQgbgEgcgIQgGgBgGgDQgXgKgWgLQgEgBgCgCQgLgJgNgBQgMgCgKAFQgEAEgEADAQAhDQAYAFALABQAKACACAKQABAIgBAIANwBPQABABABABQAEACAFABQAEAAAEAAQAQACAQgCQABAAAAAAIABAAQAEAAAFgBQACAAABAAQACgBACAAQAXgEAXgGQAWgHAWgIQAKgDAFgJQABgBABgBQAEgDABgEQABgDgCgFQAAgBgBgCQgDgFgFgCAOViRQgCAAgBAAQgCgBgCAAQgLgCgJACQgEABgEACQgBAAAAAAIgBABQgCABgCACIgBAAQgDACgDAEQgDAEAAAFQgBABAAABQAAACAAACQAJAXASAQQAFAFAFAEQACABAEABQAEADAFABIAAAAAOViRQAFABAEADAMhhUQAGgGAGgGQAEgDAEgEQAOgNAOgKQABgBABgBQAAAAAAgBIABABQAAAAAAABQAAAAAAABQABAAAAABQACAFABAFQAAAAAAAAQAOArgOArQgDAKgCAHQgBACgBABIAAABQgCAEgDACQgCACgBAAQgCABgCABQgDABgDABQgHADgIACQgHABgIABQgNABgMgCAF2F6QAMAAAHgGQAJgEALgFQAagVAegOQACgBACgCQACgCACgCQACgBACgBQAFgDAFgDQAMgGANgEQAMgIAQgJQAEgCADgCQAFgEAGgEQADgCADgDQAIgFAHgEQAFgCADgDQACgCACgBQAGgEAFgGQAVgYATgZQADgEABgEQAJgGAFgKQAQgTANgUQACgDACgEQAFgIABgKQABgQABgPQgBgcgGgaQgEgOAAgPQAAgSAKgOQAEgGADgCQACgCABgCQAZgTAbgMQADgBACgBQAYgGASgEANwBPIgBAAQAAgBAAAAQgBgBgBgCQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgBQAAgBAAgBQgBgBAAgBQAAgDAjgcANwBPQgIARAAAEQABACAAACQgBADAAADQgFAbgIAaQAAAAAAABIAAAAQgFATgIARQgHARgHAQQgLAWgPASQgBABgBABQgPAVgWAIQgFABgGgBQgLgCgBgMQAAgCAAgCQAAgSAFgSQAMgsAEguQADgDAAgEQAEgPADgOQAHgaAHgbQABgBAAgBIAAAAQABgDABgDQADgKABgKQAAgJAFgEAOpCUQACgCABgDQAFgIACgIAOpCUIAAAAQgDABgDgBQgIAFAGACQgDACgCABQgYAKgdgCALeEdQgcASgUAZQgCACgCADQgSAcgaAVQgkAfgmAeQgVAQgPAVQgCADgCADQgQAXgUAUQgDAEgDABQgMATgQAMQgnAdguAIQgTAEgVgCQgEAAgEAAQgXgDgTgLQgEgCgEgBQgHgCgEgGQgjgggVgqQgEgIgEgJQgTgigPglQgEgKgFgLQgTgsgMgvQgBgFABgCQABgCAEACAnlu8QAFgMAFgIQAIgLALgKQAIgHAIgHQATgPAVgNQALgGALgJQAlgiAugLQAEgBADgCQAJgEAJgDQAQgEAQgEQAFgCAGgBQAIgBAJgBQAUgDAUgBQACAAACABQAFACgCAJArDpOQAAAAABgDQAAgCAAgBQAFgUgBgXQAAgCAAgCQgCgOgHgLQgFgGgGgFQgMgKgNgJQgEgCgEgEQgFgIgIgEQgCgBgCgCQgCgCgCgCQgLgKgIgOQgGgKgEgMQgBgCgBgDQgFgWAFgXQABgBAAgBQAAgPALgKQADgDAEgDQAKgHAIgHQAEgDAGgEQAEgCADgCQAggSAjgKQACgCADgCQALgHAMgCQAMgDAMgCQAFgDAGgCQAEgBADgBQANgDANgCQAKgCAMgBQAEgBADgBQANgEANgCQAVgEAUgDAnju3QASAFgDAWQgCALgKACIAAAAQgDABgCABQgBAAAAAAQgEACgEABQgXAJgaAKQgWAJgXAHQgtAOgrAMQgDAEgFAAQgIAFgDAHAnsuFQADgBAEAAQABAAABAAQADABADABQAIACAIADQABAAAAAAQABABABAAQADABACABQACAAACABQABABACAAIAAAAQACABADABQACABABAAQAJAEAIAFQAJAGgGAIQgPASgXADQAAAAgBAAQgDAAgDAAQgBABgBAAQgCAAgDABQgEAAgEAAQgGABgHgBQgKAEgLAEQgJADgJAEQgqANgrAOQgdAJgaAJAnHtHQgDADAKADQADABACABQAIAFAGAGQABABAAACQgCACgCACQgIAKgMAIQgFACgFACQgJAIgMADQgCAAgDABQgBABgCACIAAAAQgHADgHACQgrANgsANQgQAEgOAGQgKADgFAEQgEACgCACAnqsGQAFAIAEAIQAEAHgCAKQAAAEgFAFQgBACgCACQgHAIgMAFQgCABgDACQgDAFgJACQgEACgFACQgBACgCAAQgBADgDABQgBABgCABQgVAKgWAEQgTAEgOAIQgCABgCABQgBABgBABQgDABgCACQgCABgDADAp6gkQgCAAgCAAQgMgBgKAEQgHADgIABQgJAAgJABQgBABgBAAQgMACgLADQgOAFgQABQgwgDgxAAQgYAAgYgDQgCAAgDgBQgcgEgdgBQgIgBgHABQgMACgNgBQgUgCgUABQgDABgCgBQgRgCgSABQgbAAgagBQgCAAgDAAQgOgBgNgBQgJgBgJgBQgLgBgLgCQgEgBgHgCQgDgBgDgBQgIgDgIgEQgFgDgEgFQgGgIgCgJQgBgJADgLQAIgWAMgUQANgYAQgXQANgUASgQQASgPAUgLQAogXAmgbQADgCADgDQARgLAOgPQAEgDADgDQAlgfAngbQAHgFAGgFQAGgEAGgEQAQgOAPgPQAFgEAEgFQADgDADgDQACgCACgBQAFgDAFgFQAQgVAVgRQAFgEAEgFQAFgGAJgFQAMgHANgHQAZgQARgWQACgDABgDQACgFADABApdn9QgHgBgDAFQgBACgBACQgBACgCABQgSASgVARQgMAHgGAKQgHAFgFAHQgFACgDAFQgQAQgTAPQgPASgOAQQgDADgEADQgmAegnAdQgKAIgLAIQgVANgVAOQgTANgUAIQgHADgGADQgHAEgDACQgBACgCACQgCACgDABQgMAFgIAHQgGAFgDAEQgCACgBACQgCAEgCABQgFgFABALQgBACAAACQgBADABACQAAABABABQACAEAGgBQACACADAAQARABAPgFQAHgDAGgDQACgCAEABQAVgIAXgGQAJgDALgCQACAAADgCQAKgFAMgBQAEAAAEgBQAUgHAWgCQADAAACAAQAbgCAagEQAZgFAcgCQAGAAAGgCQADgBAEAAQAcAAAbgBQADAAACgBQAGgBAHABQAPAEASgCQgDAWgEAUQgFAZgKAWQgDAIAAAIQgBAFgCAFQgIAZgIAYQgDAIgEAHQgDAFgCAEQgBABAAABQAAAAgBABQgTAjgMAmQgNArgEAxQgEAsACAsQgCAFgBAEQgCAKABALQABAKABAKQACAuASArQAOAgALAfQABACABABQABABACABQgCgDgBgDQgWgvAAg2QABg2AYgxQAFgKAEgKQACgCABgDQABACAAABQAAAFgCAFQgCAHgCAHQgLAqABAsQAAAPAAAPQABAnAJAmQABACABADQABADABADIAAABQAHAVAIATQADAIAEAHQAUAmAXAkQAFABgGgFQgCgCgBgCQgJgZgEgaQgCgJAAgKQABgoALgmQAAAoAAAoQAAAhAKAeQACAGABAGQALApAfAZQAEADAEADQALAGALAFQATAHATAHQACABACABQAFACAIACQAEABAEABQgHgKgDgPQgBgFgBgFQgBgQgBgQQgCgyAIgwQADgYAFgYQAEgHAAgHQAHgwARgsQAPgtAMgrQABgEACgDQACgDABgDQAEgKAEgKQABgCABgCQAHgWAIgWQADgIADgJQAAgBABAAQAAgBAAAAIAAAAIABgDQADgLABgLAknrRQAAgHgBgGQgBghAHggQAGgYAOgSQASgYAWgYQAHgHAIgHQAGgEAGgHQABgBAAgBQABgBABAAQAKgNAMgKQAJgJALgIQAFgEAGgEQASgNATgNQALgJgCgOQAAgDgDgEQgGgKgIgHQgDgDgEgDAk7BrQAFgSADgSQABgGABgGIAAAAQAAgDAAgDQACgPABgOQABgJAAgKQABgFABgGQACgNgBgPQAAgFABgFQABgCAAgDQACgMAAgNQgBgIABgHQAHgvAJgwQAAgDACgEQAEgMADgNQACgMABgLQABgNABgOQADgvAAgwQABgwACgvQgCgJABgIQgFgYAAgYQABgZgFgXQgFgagCgaQgDgfgJgdQgCgGgDgGQgGgLAAgMApqqOQABAOANAJQABADADAEQAIALAAAOQAAAZgCAXQgBAMgBANQAAAIABAHQABAEABADQACADABACApdnrQgDAHAEAHQAEAFABAHQASAsADAvQAEAvAAAwQAAAbgDAaAisxVQABAHAIgCQACgBABgBQAAAAABAAQAAgBABAAIAAAAQAYgQAagLQATgMAYgBQAWgBAUAFQAXAFAVAFQAEABAEABQALAFALAFQAbANAaARQAUAOAUAQQAHAFAHAIQAGAGAEAJQALAWAFAZQACAPADAPQABACABADQADAMABAMQgCASgDASQABAKAAAKIAAAAQAAAEgBADQAAADgBACACbtxQgFgGgGgGQgCgDgIgIQgEgEgHgGAEJhgQAFgNgBgCQAAgDgBgBQgDgEgBgFQgEgPgGgKQgGgJgDgLQgCgJgFgMQgCgBAAgDQgHgKgDgMQgBgEgCgDQgHgKgFgLQgEgLgDgLQAAgDgBgCQgDgFADgLQgBgLABgLQABgEABgDQAHgZAGgZQAEgOACgOQAEgigBgkQgBgwAAgxQAAgEgBgEQgDgNABgOQABgKgBgKQgDgWABgXQgDgLgDgJQgCgKgBgKQgBgDgBgCQgCgGgBgHQgCgMgDgKQgDgKgEgLQgBgCgCgBQgDgGgBgIQAAgBgBgCQgBgKAAgLQgBgDAAgDQAAgDAAgEQgBgQgCgOQgBgGgBgGIAAgBQAAAAAAgBQAAgDgBgDQAAgDABgCQADgEADAEACltiQAAAAgBgBQgDgCgBgDQgCgEgDgFQAGAHAEAIQADADABAEIgDgFQAAgBgBgBgAAVsiQgJgHAJABQACABABgBQATALAaAAQAagBAYAEQAHABAGgCQABgBABAAQAKgDAKABQAEALACAJQAAAEgBADQAAABgBAAQgBADgCACQgCABgCACQgIAHgFAIQgIAMgKAKQgBAAAAABQAAABABABQABAEAFAFQACACgBADQAPAUAMAWQAMAVAFAYQADANABAOQAAAEAAAEQABAMAAANQgBAJgBAIQgCAXgJATQgEAJgEAJQgBADgCADQgHAKgJAJQgIAHgHAIQgBACgCABQgGAFgHALQgSARgOAQQgFADgGAGQgNAJgLAJQgCABgCABQgBABgCABQgUAMgYACQgNABgMABQgLABgLAFQgIAAACAIQABAHABAHQAAALAIAIQADADADADQALALALACAhywRQAAAAABAAQABAAAEAAQAwAAAugBQAIACAGAAQAbABAdABQAMAAALADQADABAGAKQAGAJAHARQAHARADARQACALABgJIABADAhNugQgHgIgOgBQgKgBgIAEQgUAJgRALQgNAJgJAMQgDAEgBAFAAfvGQADgOAPgEQACgBADAAQAOgDAKAJQACADACACAByvCQAGBDACACQACADAAAEQABALAAALQAAAEABAEQAAABAAACQAAALACALQABAGABAGQABAKADAKAB4rVQgBAAgBABQgCACgCABQgJAIgGAFQgDACgDACQgCACgCABAgNpMQgFgBgFgCQACAAABAAQAFgBACAEQAEABAEAAQAPACAQAEQAHACAGACQAXAIAWAFQgTgBgKAPQgBABgBACQgCAEgDAHQgCAUAJAPAA7nwQgCAAgDgBQAAAAAAAAQgGAAgHgEQgpgXgXgqQgHgKAKAAAgrkOQAEAAADgCQAFgCAFgCQAFgCAGgBQANgBALgDQAZgHAbACQAIABAFgDQACgBADAAQARgBAPACQAwAHAmAdQAEADACAEQABADACADQAAAAAAAAQAOAWAAAcQABAYgBAXQAAADgBACQgBAIgDAIQAAABAAABIAAAAQAGAAAFABQACAAABAAQAJACAIAFQAJAIAKAJQACAAABAAQABABAAAAQAlAhAKAwQAAAKADAJQAAAHgBAGQAAACgBADQgLAlgTAcQgFAHgHAKQgEAFgEAGQgGAGgIAHQgDADgDABQgDACgDACQgDABgDADQgCADgEACQgUAMgVAJQgYAKgXAGQgDABgDABQgWAGgYAAQgEABgEAAQgRAAgSAAQgMgCgKACQgEABgEAAQgPABgOACQgEABgDAAQgMABgLgBQgPgBgNAFQgDgBgEABQgugBgugBQgEAAgEgCQgWgEgXgGQgCAAgDgCQgJgGgNgCQgDAAgCgCQgSgHgTgGQgLgDgKgDQgKgCgFgEAkhg0QAWgJAVgMQAFgGAHgBQASgMAVgDQAmgLAoAGQAYAEAWAIQAWAHATAJQAPAIASgDQANABANgBQAEAAADgCQAggIAdgPQADgCADAAQADgBADABQApgbAxAAQAIAAAIAAQgCAGgCAGACNDQQgIABACALQABAHgBAGQgFAdgHAfQgBACgBADQgBADgBADQgCAOgGAMQgJAVgPAUQgNAOgHASQgEAFgDAFQgVAfgTAgQgIAMgJALQgDAEgCADQgCADgCADQgJAMgKAMQgSAWgTAVQgDAEgDAEQgKANgFAPQgJAbgGAcQgFAcgCAeQAAAQABAQQAAABAAAAQAAABABABQACACABADAESBzQgFAAAAACQgBACADAEQADAFABAFQAHAWAJAXQAJAaALAZQAMASAJAUQAIASAIASQAKAaAJAaQACAFABAGQADAGABAGQABAEABADQAAADABACQABAFADACAkYAZQAaAAAaADQAFABAEACQABAAAAAAQADABACAAQAGACgBgEAjjBaQgCAAgBAAQgEAAgEABQghAJgiAFQgCABgBAAIAAAAQgDAAgCABQgBAAgBAAAjjBaQADgCAEAAQABAAAAAAQACAAgGABQgCAAgCABgAkgA/QgEgBgDgBQgBgBgCAAQALgFAOABQAJABAJgBQAPgBAQgDAkhg0QgEAEgBgBQAAAAAAAAQAAgBAEgCQAAAAABAAgAkmBJQAAgBAGAAQAhABAgABAlBBuQgEAAADgBQAAAAABgBQACAAAEgBQAAACgBACQgCAGgEAGQABgGAAgHgAlBBsQAAABAAABQACABADAAAsORuQAMgeAFgiQACgTAEgSQAJgwAIgvQAIgwAMgvQAFgYAMgVQAKgSALgRQAEgGAEgHQAUghAageQABgGACgGQAAgBABgBQAAAAAAAAQAAgCABgDQAHgOAEgQQAJgrgCgtQgBgKgCgJQgBgUgDgTQgCgDABgEQAAgBAAgBQABAEAAAFApfK5IAAAAQADAEADAFQABACgCAEApsKjQgDAEAFADQAJAGACAJQgDAFAHAJQAAAAABABQACADABAEQAXAgAnAQQAJAGAJAFQAsATAqAQQAYAIAYAFQAuAIAxgBQAJAAAIgBQAFAAAFgBQAegDAcgIQAVgHATgKQAMgHAIgKQACABADgCQAMgHANgNAmkKPQABADACADQADAEAEADAsORuQgCAHgDAHAhhMJQAKAQAIATQAFAOAFAMQAFALAEALQAQAuALAvQADAXAAAYQABAIAAAHQAEAdADAdQABAFAAAFQAEAUABAUQABAFAAAGQABADAAADQAAAEABAEAhxL8QACABAAgBIAAgBQAAAAAAAAQABgBAAgCAsORuIL+AAIABAA");
	this.shape.setTransform(-53.6,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#6699FF"],[0.157,1],0.9,1.3,0,0.9,1.3,32.3).s().p("AgqELIgHgBQgXgFgWgLIgGgCQgGgBgEgGQgGgHgDgIIgDgFQgKgUgEgXIgEgjQgCgLABgLQACgxAKguIABgFIACgHQAOgkAPglQAJgXAPgVIAYgwIAmg+QAIgNAIgLQAKgLALgJIALgHIACAAQADgDAFABQAPABANAGQAKAEAIAGQAZAUAOAfIAGAPIACAFQACALAAALQAAAZgBAZIABAQIgJA2QgEAYgFAWQgLAsgVApIgtBYIgEAIQgNAcgSAYIgFAHQgQASgYAAIgJgBg");
	this.shape_1.setTransform(46.8,-30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AjwJkQgLgCgBgMIAAgFQgBgSAGgRQAMgsAEguQACgDABgEIAHgdIAOg1IABgCIAAgBIABgFQADgKABgKQABgJAFgEIgBgTIAQgCQAIgCAHgDIAFgCIAEgCIADgDIAGgHIAAAAIABgDIAGgRQANgrgNgrIAAAAIgEgKIAAgBIgBgCIAAgBIAAAAQADgNACgOIABgIIgBgEIgCgEQgKgJgFgNQgIgSgGgTIgIgdIgJgfIgGgWIgEgHIAAgTIgBgJIADgtQAAgOACgNIACgPQAEgxAIguIAFgUIAAgDIACgFIACgGIAWhTIADgMIAAgBQAKgpANglQAIgXAMgWQALgUAVgOIAHgFIANgMQAKgIANgIIAKgIQAHgGAIgEQACgDACgCIAEgEIABgBQAQgNAUgOQAWgPAeACQAPAAAPADQAgAHAXAbQAfAmAUAuQAUAsADAwQADAwgKAvQgEATgJASQgDAIAAAKQAAAFgCAFQgRArgOAsIgLAjQgHAWgLAVQgTAogYApQgJAQgQANIgHAGQgMALgMAJIgIAFIgCABIgBABIAAAAIgJAFQgFADgCADQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQgUAGgTAKIgCABIgBAAIgmATQgKAFgGAHQgEABgBADIgEAGIADARQgKACgHADIgCgBIgEAAQgMgCgJACIgIADIgBAAIAAAAIgFADIAAABIgGAGQgDAEgBAFIAAACIAAAEQAIAXASAQIALAJIAFACQAEADAGABIAAAAQgIARgEABQgDACgCACIgEADQgZAQgOAVIgCADIgFAIIgBADIgBABIAAAAIAAABIgBACIgBAGIgCAMQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAGACIABAAIAKACIADAAIAAAAIAEAAIAFAAIACAAIACAAIABAAQAOgBAPgEQgjAbAAAEIAAACIAAACIAAAAIABADIAAABIAAAAIACAEIABAAIAAABQgHARAAAEIAAAEIgBAGQgEAbgIAaIAAABIAAAAQgGASgHASIgPAhQgKAWgPASIgDACQgOAVgXAIIgGABIgEgBgAimhvIACBOIAAAHQACAMAEALQAFAKAHAJQAHAJAJAIQAJAKAQABIAFABIAvACQAMgBAKgEQAKgEAIgIQAKgKAHgLIAHgKIACgGIAGgGQASgYAMgcIAEgIIAthYQAVgqALgrQAGgXAEgYIAIg3IAAgPQABgZgBgZQAAgMgCgKIgBgFIgGgQQgPgegZgUQgIgGgJgFQgNgFgPgCQgFAAgEACIgCABQAJgGAJgEQgJAEgJAGIgDgBIgHAIQgMAIgJALQgKALgHAOIglA9IgZAwQgOAWgKAXQgPAkgNAlIgCAHIgCAFQgKAvgCAwQAAAMABALIAFAjQADAWALAUIACAFQAEAIAGAIQAEAFAGABIAGACQAVALAXAFIAIABQAeADASgUIgCAGIgHAKQgHALgKAKQgIAIgKAEQgKAEgMABIgvgCIgFgBQgQgBgJgKQgJgIgHgJQgHgJgFgKQgEgLgCgMIAAgHIgChOQAAgbAEgZIADgXIABgFIABgHQADgIABgMIABgHIADgMIABgBIABgFIACgHIAEgXIACgFQAFgMABgNQAEgWAHgVIAHgTIACgDIAGgMIAGgJIAEgGQAHgKAJgJQATgRAPgVQANgTAMgOIALgOIAEgEIADgEIABgBIACgDIADgEIACgDIAGgIIAIgIQAEgEAGgDIABgBIABAAIAAAAIABgBQAHgCAGAAIAAAAIAAAAIABAAIABAAIACAAIAFAAIAFAAIAAAAIABAAIABAAIABAAIABAAIAFAAIACAAIALACQASADANAKQARASAMAVIACAGIANApIAAADIABAEIAAABIABAKIACAMIAAAJIAAAEIAAgEIAAgJIgCgMIgBgKIAAgBIgBgEIAAgDIgNgpIgCgGQgMgVgRgSQgNgKgSgDIgLgCIgCAAIgFAAIgBAAIgBAAIgBAAIgBAAIAAAAIgFAAIgFAAIgCAAIgBAAIgBAAIAAAAIAAAAQgGAAgHACIgBABIAAAAIgBAAIgBABQgGADgEAEIgIAIIgGAIIgCADIgDAEIgCADIgBABIgDAEIgEAEIgLAOQgMAOgNATQgPAVgTARQgJAJgHAKIgEAGIgGAJIgGAMIgCADIgHATQgHAVgEAWQgBANgFAMIgCAFIgEAXIgCAHIgBAFIgBABIgDAMIgBAHQgBAMgDAIIgBAHIgBAFIgDAXQgEAZAAAbIAAAAgAANgHIAAAAgAAroJIAAAAg");
	this.shape_2.setTransform(46.1,-5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AomJ0QAMgeAFgiIAGglIARhfQAIgwAMgvQAFgYAMgVIAVgjIAIgNQAUghAageIADgMIABgCIAGACQgDAEAFADQAJAGACAJQgDAFAHAJIABABQACADABAEQAXAgAnAQIASALQAsATAqAQQAYAIAYAFQAuAIAxgBIARgBIAKgBQAegDAbgIQAVgHATgKQAMgHAIgKQACABADgCQAMgHANgNIACgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAgBIAAAAIABgDIAGAAIAAABIABACIADAFIADAJQAKAQAIATIAKAaIAJAWQAQAuALAvQADAXAAAYQABAIAAAHIAHA6IABAKQAEAUABAUIAAALgACZkwIhcgCQgEAAgEgCQgWgEgXgGIgFgCQgIgGgNgCIgFgCIglgNIgVgGQgKgCgFgEIABgBIAAgBIAAAAIABgDQADgLABgMQAEgFACgGIABgEIACAAIAFgBIAAAAIADgBQAigFAhgJIAHgBIADAAIgDAAIgHABQghAJgiAFIgDABIAAAAIgFABIgCAAQAFgSADgSIACgMIAAAAIAAgGIADgeIABgSIACgMQACgNgBgPIABgKIABgGIACABIAAAAQABAAAEgDQAWgJAVgMQAFgGAHgBQARgMAVgDQAmgLAoAGQAYAEAWAIQAWAHATAJQAPAIATgDQANABANgBQAEAAADgCQAggIAdgPIAGgCIAGAAQApgbAxAAIAQAAIgEAMIAEgMIAAAAIALABIADAAQAJACAIAFIATARIADAAIABABQAlAhAKAwQAAAKADAKIgBANIgBAFQgLAlgTAcIgMARIgIALIgOANIgGAEIgGAEIgGAEQgCADgEACQgUAMgVAJQgYAKgXAGIgGACQgWAGgYAAIgIABIgjAAQgMgCgKACIgIABIgeADIgHABQgMABgLgBQgPgBgNAFIgHAAgAAEmfIAEgBIAEgBIgBAAQgEAAgDACIAAAAgAg4mxIBAACIhAgCIgCAAIgBAAIgDABIAAAAIAAAAIADgBIABAAIACAAgAhCm9IADABIAHACIgHgCIgDgBIACAAIAAgBQAIgDAKAAIABAAIAAAAIACAAIACAAIADAAIADAAIAAAAIABAAIAFAAIAGAAIAegEIgeAEIgGAAIgFAAIgBAAIAAAAIgDAAIgDAAIgCAAIgCAAIAAAAIgBAAQgKAAgIADIAAABIgCAAIAAAAgAAWnYQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAIgBAAIgBgBIgBAAIgFgBIgBgBIgJgCQgZgDgaAAQAaAAAZADIAJACIABABIAFABIABAAIABABIABAAIABAAg");
	this.shape_3.setTransform(-76.8,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("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gSgDgAOCCRIgEAAIAAAAIgDAAIgLgCIAAAAIgGgCQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIABgMIACgGIABgCIAAgBIAAAAIABgBIABgDIAFgIIACgDQAOgVAZgQIAEgDQACgCADgCQADgBAJgRIgBAAQgFgBgEgDIgFgCIgLgJQgSgQgIgWIAAgEIAAgCQAAgFAEgEIAGgGIAAgBIAFgDIAAAAIABAAIAIgDQAJgCAMACIADAAIADABQAHgDAKgCIABAAIAGgCQAIgDAIAAQAbgCAZAEIAKABQAaABASARQAFAIAAAKIAAAFQABASgPALQgJAGgKAEIAAAAIgLAEIgKADIgIAAIgBAAIgBAAQgSAFgUAAIAAAAIAAAAIgJAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgBAAQgBgCgEAAIAAAAIAAAAIgBAAIAAAAQgGABgHgBIgFAAQgGAAgFgCQAFACAGAAIAFAAQAHABAGgBIAAAAIABAAIAAAAIAAAAQAEAAABACIABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAABAAIAJAAIAAAAIAAAAQAUAAASgFIABAAIABAAIAIAAIAKgDIAAAAIAjAGQAKACACAKQABAIAAAHQgGACAAAGQgBADgCAFQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIgCADIgCACIAAAAIgBABQgDAEgIACIgBAAIgVAFIgHACIgMAEIgGgBQgOACgNAFIg5ATIgCABIgCABQgPAEgOABIgBAAIgCAAIgCAAIgDAAIgCAAgAO5gkQgFgDgFgBQAFABAFADgAszBVQgYAAgXgDIgFgBQgdgEgdgBQgHgBgIABQgMACgNgBQgTgCgVABIgFAAQgQgCgTABQgaAAgagBIgFAAIgcgCIgRgCQgMgBgLgCIgKgDIgHgCQgIgDgHgEQgGgDgEgFQgGgIgBgJQgCgJAEgLQAIgVALgUQANgYAQgXQANgUATgQQASgPAUgLQAngXAmgbIAHgFQAQgLAPgPIAGgGQAmgfAmgbIANgKIANgIQAQgOAPgPIAIgJIAHgGIAEgDQAFgDAEgFQARgVAUgRQAFgEAEgFQAGgGAIgFIAZgOQAZgQASgWIADgGQABgFADABIAFgHIABgEIABgCQAEgUAAgXIgBgFQgCgNgHgLQgFgGgGgFIgZgTQgEgCgDgEQgGgIgHgEIgFgDIgDgEQgMgKgHgOQgGgKgFgMIgCgFQgFgWAGgXIAAgCQAAgPAMgKIAHgGIASgOIAKgHIAGgEQAggSAjgKIAGgEQALgHAMgCIAYgFQAEgDAHgCIAHgCIAZgFIAXgDIAHgCQAMgEANgCIApgIIAMADQASAFgEAWQgBALgLACIAAAAIgFACIgBAAIgHADIgyATQgWAJgWAHQgtAOgrAMQgEAEgEAAQgIAFgEAHQAEgHAIgFQAEAAAEgEQArgMAtgOQAWgHAWgJIAygTIAHgDIABAAIAFgCIgDAJIAHACIAPAFIACAAIABABIAGACIADABIADABIAAAAIAFACIAEABQAJAEAIAFQAJAGgHAIQgOASgYADIAAAAIgGAAIgDABIgEAAIgIABQgGABgHgBIgWAIIgSAHIhVAbIg3ASIA3gSIBVgbIASgHIAWgIQAHABAGgBIAIgBIAEAAIADgBIAGAAIAAAAIABAEQgCADAKADIAFACQAHAFAHAGQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgEAEQgIAKgMAIIgKAEQgIAIgMADIgFABIgEACIAAAAQgHAEgHACIhXAaQgQAEgOAGQgJADgGAEQgEACgBACQABgCAEgCQAGgEAJgDQAOgGAQgEIBXgaQAHgCAHgEIAAAAIABADIAKAQQAEAHgCAKQgBAEgEAFIgEAEQgHAIgLAFIgFADQgEAFgIACIgJAEQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgCADgCABIgEACQgVAKgWAEQgTAEgOAIIgDACIgDABIgFAEIgEAEIAEgEIAFgEIADgBIAEALQABAOAMAJIAEAHQAIALAAAOQABAZgDAXIgCAZQAAAIABAHIgKACQgHgBgCAFIgDAEIgCADQgTASgVARQgLAHgHAKQgGAFgFAHQgFACgDAFQgRAQgSAPIgeAiIgGAGIhOA7IgVAQIgpAbQgUANgUAIIgNAGIgJAGIgEAEIgEADQgNAFgIAHIgJAJIgDAEQgCAEgCABQgFgFABALIgBAEIAAAFIABACQACADAGAAIAFACQASABAPgFIAMgGQADgCADABQAVgIAXgGIAUgFIAFgCQALgFAMgBQAEAAADgBQAUgHAXgCIAFAAQAbgCAZgEQAagFAbgCQAHAAAGgCIAHgBIA3gBIAFgBQAGgBAGABQAPADASgBQgDAVgEAVQgFAZgJAWQgDAIgBAIIgCAKIgRAwIgHAPIgFAJIgBACIgDAAQgMgBgKAEQgIADgIABIgRABIgDABQgMACgKADQgOAFgQABQgxgDgxAAgAnSscIAHgBIACAAIgCAAIgHABgAkNA2QABgLAAgNQAAgIABgHIAPheIACgHQAFgMACgNIADgXIACgbQADgvABgwQAAgwACgvQgCgJABgIQgFgYABgYQAAgZgEgXQgFgagDgaQgDgfgJgdQgBgGgDgGQgGgLAAgMIACgFIAAgNQgCghAIggQAGgYANgSQASgYAWgYIAQgOQAGgEAFgHIACgCIABgCQAKgMAMgLIAUgQIAMgIIAkgaQAMgJgCgOQgBgDgDgEQgGgKgIgHIAEgEIABABIAGAAIBdgBQAHACAGAAIA6ACQAMAAALADQADABAFAKQAGAJAHARQAHARADARQACALABgJQAHBDACACIACAHIABAWIAAAIIAAACIACAXIACAMIAEAUIAAADIgCABIgBAAIAAAAIgCAAIgBABIgEAAIAAAAIgBAAIgCAAIAAAAIgBAAIgBAAQgVgDgXAAIgEAAIgCAAIgBAAIgBAAIAAAAIgBAAQgYAAgSgLIgCAAIgBAAIgCAAQgFAAAFAEIABABIAAAAIAAAAIABABIgBgBIAAAAIAAAAIgBgBQgFgEAFAAIACAAIABAAIACAAQASALAYAAIABAAIAAAAIABAAIABAAIACAAIAEAAQAXAAAVADIABAAIABAAIAAAAIACAAIABAAIAAAAIAEAAIABgBIACAAIAAAAIABAAIACgBQAKgDAKABIAGAUIgBAHIAAABQgCADgCACIgEADQgHAHgGAIQgIAMgKAJIgCACIACAAIAAACQABAEAFAFQACACgBADQAPAUANAWQALAVAGAYQADANAAAOIABAIQABAMgBANIgBARQgDAXgIATIgIASIgEAGQgHAKgJAJIgPAPIgCADQgHAFgGALQgSARgPAQQgFADgGAGIgYASIgDACIgEACQgUAMgYACIgYACQgMABgLAFQgHgBABAJIACAOQABALAIAIIAGAGQAKALAMACIABADIgJAEQgDACgEAAQAEAAADgCIAJgEIALgDQAMgBAMgDQAZgHAcACQAHABAGgDIAEgBQARgBAQACQAvAHAmAdQAEADACAEIADAGIAAAAQAOAWABAcQABAYgBAXIgBAFIgEAQIgBACIgQAAQgxAAgpAaIgFAAIgHACQgcAPggAIQgEACgEAAQgMABgNgBQgTADgOgIQgTgJgWgHQgXgIgYgEQgogFglAKQgVADgTAMQgHABgFAGQgUAMgXAJIgBAAQgBABgBAAQgBAAAAABQAAAAgBAAQAAABAAAAgABVmHIAvAnIgzgsIAAAEIgBAAQgGAAgGgEQgpgXgZgqQgCgEAAgDQAAgDAFAAQgFAAAAADQAAADACAEQAZAqApAXQAGAEAGAAIABAAIAEABgABRmMQgHgMAAgQIABgHIAEgLIACgDIABgCQAJgMAPAAIABAAIAAAAIACAAIABAAQgWgFgXgIIgMgEQgQgEgRgCIgIgBQgCgEgFABIgCAAIAJADIAIABQARACAQAEIAMAEQAXAIAWAFIgBAAIgCAAIAAAAIgBAAQgPAAgJAMIgBACIgCADIgEALIgBAHQAAAQAHAMgACNpoIgPANIgGAEIgFADIAFgDIAGgEIAPgNIADgDIgDADgAhZs9QgVAJgQALQgNAJgJAMQgDAEgBAFQABgFADgEQAJgMANgJQAQgLAVgJQAGgDAHgBIABAAIAAAAIABABIADAAQANABAHAIQgHgIgNgBIgDAAIgBgBIAAAAIgBAAQgHABgGADgABQtwIgFABQgOAEgDAOQADgOAOgEIAFgBIABAAIABgBIACAAIACAAIAAAAIABAAQAJAAAHAFIAAABIACABIADAFIgDgFIgCgBIAAgBQgHgFgJAAIgBAAIAAAAIgCAAIgCAAIgBABIgBAAgANIAIIAAAAgACrsUIgKgLIgLgKIgJgtIABgIIACgUIAEALIACAFIAMAqIABAFQAEATAKARIAFAHIgLgMg");
	this.shape_4.setTransform(-56.3,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("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");
	this.shape_5.setTransform(-74.7,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.7,-90,252.2,231.6);


(lib.content_scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvA5QgLgIABgLQgBgFAEgEQAEgEAFAAQAIAAAEAIQAFALARAAQAPAAAOgGQAPgHAAgIQAAgLgJgEQgHgCgTgBQgPAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAJAAANAEQAPAFAAAGQAAAFgDADQgEAEgFAAIgMgCIgNgBQgMAAgJAFQgKAGAAAGQAAADADACQAEADAGAAIAVACQAUABALAKQANAJAAATQAAAXgaALQgUAJgYAAQgXAAgNgKg");
	this.shape.setTransform(122.2,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgrBDQgEgEAAgGIAAhcIAAgLQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAGgIAFQAJAEAHAIQAHAJAAAKQAAAMgNAKQgIAHgKADQgTAIgfAAQgGAAgEgEgAgXAvQAPAAARgFQAPgFAAgFQAAgHgKgFQgHgFgHAAIgXAAgAgXguIAAATIAAASIAMABQAagCAAgSQAAgGgIgGQgHgHgJABIgOAAg");
	this.shape_1.setTransform(110.6,24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_2.setTransform(99.1,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAVgCQAFAAADAEQAEADAAAFQABAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_3.setTransform(87.8,24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgvIgHgYQgFgQAAgHQAAgFADgDQAEgEAFAAQAIAAAEAJIADAPIAJAcIANAsIAUg0IAHgVQAFgNAGgGQAEgFAGAAQAFAAAEAEQADADAAAFQAAADgCAEQgFAHgEAJIgGASIgYA8QgEAKgGALQgDAHgHAAQgJAAgDgJg");
	this.shape_4.setTransform(75.9,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADAAAIQAAAFgDAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAVgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_5.setTransform(56.6,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgmA1QgNgNAAgTQAAgdAZgeQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABARQAAAEgCADQgDAGgHgBQgIAAgDgIQgCgEgCAAQgBgCgGAAQgLABgNARQgVAXAAAVQAAAKAHAGQAGAIAJgBQAIABAJgGIANgIQAHgEADgBQAGAAADAEQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgPg");
	this.shape_6.setTransform(45.2,24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag9BEQgDgEgBgFIABgKIAAgLIABgQIAAgPIAAgQIAAgRIgBgPIgBgQQAAgFAEgEQAFgFAGAAQAGAAAIAMQAnA5AnAjIAAgOIgBg5IgBgKIgBgJQAAgNANAAQAOAAAAAtIAAAOIAAA2IgCAOQgCALgLAAQgGAAgIgHQghgegqg2IAAAbIAAAVIAAAVQAAAagMAAQgHAAgEgEg");
	this.shape_7.setTransform(32.2,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgoBDQgKgIABgdIABgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_8.setTransform(19.5,24.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkQACAVAAAOIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_9.setTransform(7.5,24.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgvA5QgLgIABgLQAAgFADgEQAEgEAFAAQAIAAAEAIQAFALARAAQAOAAAPgGQAOgHAAgIQABgLgKgEQgGgCgTgBQgPAAgMgFQgQgHAAgNQABgSARgOQATgOAUAAQAJAAAMAEQAQAFAAAGQAAAFgDADQgEAEgFAAIgNgCIgMgBQgMAAgJAFQgKAGAAAGQAAADADACQAEADAGAAIAVACQATABAMAKQANAJAAATQAAAXgbALQgTAJgZAAQgWAAgNgKg");
	this.shape_10.setTransform(-5,25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgpBAQgDgEAAgEQAAgFADgEQAEgDAFAAIARgCIAAgnQABgXABgWIgTAAQgGAAgDgDQgDgDAAgFQAAgGADgDQADgDAEAAIAbgBQAPAAAbAEQAKABAAALQAAAFgEAEQgDACgEAAIgYgCIgBAqIAAAnIAYAAQAGAAADAEQADADAAAFQAAAFgDADQgEAEgFAAIgPAAIgQAAIgQACIgSABQgGAAgDgDg");
	this.shape_11.setTransform(-16.2,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAaAyIgMgRIgLgPIgaAeIgRASQgEADgFAAQgFAAgEgDQgDgEAAgFQAAgEADgDIAQgRIAfgiIgTgWIgKgOQgGgHgFgEQgFgEAAgFQAAgFAEgEQADgDAFAAQAFgBAIAHIAJAKIALAOIAPATIAWgcQASgWAGABQAFAAAEADQADAEAAAFQAAADgDAEIgSAWIgVAcIASAZIAUAZQADAEAAAFQAAAEgEAEQgDAEgFgBQgJAAgOgUg");
	this.shape_12.setTransform(-27.8,25.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAUgCQAGAAADAEQAEADABAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_13.setTransform(-39.5,24.8);

	this.instance = new lib.Scene2();
	this.instance.parent = this;
	this.instance.setTransform(188.2,201);

	this.instance_1 = new lib.scene2bottomtitle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(200.2,363.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.content_scene4, new cjs.Rectangle(-47.5,9.6,307.6,378.1), null);


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
		
		 window.open ("pred_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pred_Scene3.html","_self");
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
(lib.pred_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:93});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		playSound("beam3");
	}
	this.frame_22 = function() {
		playSound("pop_up");
	}
	this.frame_29 = function() {
		playSound("iamthereforeiexist");
	}
	this.frame_107 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(20).call(this.frame_22).wait(7).call(this.frame_29).wait(78).call(this.frame_107).wait(1));

	// content
	this.instance = new lib.content_scene4();
	this.instance.parent = this;
	this.instance.setTransform(267.3,190.3,1,1,0,0,0,197.3,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(108));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,190.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'BA105D60D58E634AB4FB456DA855ABBA',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/beam3.mp3", id:"beam3"},
		{src:"sounds/bgmAux.mp3", id:"bgmAux"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/iamthereforeiexist.mp3", id:"iamthereforeiexist"},
		{src:"sounds/needtoreview.mp3", id:"needtoreview"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/pop_up.mp3", id:"pop_up"},
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
an.compositions['BA105D60D58E634AB4FB456DA855ABBA'] = {
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