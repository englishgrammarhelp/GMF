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


(lib.fcb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAgKIB3AAIAAh3IAKAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_rightOut, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("Ag2A3IAAgKIBjAAIAAhjIAKAAIAABtg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_rightIn, new cjs.Rectangle(1,1,11,11), null);


(lib.fcb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag7A8IAAh3IB3AAIAAAKIhtAAIAABtg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_leftOut, new cjs.Rectangle(0,0,12,12), null);


(lib.fcb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AgxAyIAAhjIBjAAIAAAKIhZAAIAABZg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_leftIn, new cjs.Rectangle(1,1,10,10), null);


(lib.fcb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_check_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgLAiIgBAAIgVgVIgCgEIABgSQAAgFAGAAIADACIARARIAhgkIAEgDQAHAAAAAGIAAASIgCAEIgoAnIgDACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_disabled, new cjs.Rectangle(0,0,7.1,7), null);


(lib.fcb_check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAiIgBAAIgVgVIgCgEIABgSQAAgFAGAAIADACIARARIAhgkIAEgDQAHAAAAAGIAAASIgCAEIgoAnIgDACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check, new cjs.Rectangle(0,0,7.1,7), null);


(lib.fcb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_pressed, new cjs.Rectangle(0,0,9,9), null);


(lib.fcb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_disabled, new cjs.Rectangle(0,0,9,9), null);


(lib.fcb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background, new cjs.Rectangle(0,0,9,9), null);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


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


(lib.VERBAL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,28.9,0.2,-28.8).s().p("Ai6D/QgOgNAAgUIAAhMIAChNIAAkTQAAgWANgSQASgYAeADIBWAGQAvAGAhARQCSBKAABsQAAAtgeAiQggAig8AXQBaAzAuA1QAMANAAARQAAATgPAOQgOAOgTAAQgTAAgPgPQhohhh7glIADBuQAAAUgNANQgNAOgVAAQgUAAgOgOgAhpAKIAPAAQBTAAAngUQASgJAPgOQAOgPAAgIQAAgmgxgkQgtghgzgFIgngDg");
	this.shape.setTransform(-9.6,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3399","#CC33FF"],[0,1],0,29.5,0,-29.5).s().p("AieEFQgmghAAhvQAAgtAHhbQAGhcABgtQgBgMgDgYQgDgXgBgMQABg0AvAAQAQAAAMAIQAogJAkgFQAjgFAfAAQBWAAA0ATQAfAMAAAgQAAASgMANQgOAQgVAAQgHAAgIgCQg2gPg1AAQgaAAgcAEQgdAEgiAIQAAAugDBZQATgBBygLQBCgHAQAAQAVAAAPANQANANAAAVQAAAogrAFIhRAHQgwAGhiAHQgCAsAAAaQAABDAIAKQADAEAoAAIA/gBIBAgBIAUgCQANgCAGAAQAVAAANALQAQANABAXQgBAmgoAIQghAGhrAAQhwAAghgeg");
	this.shape_1.setTransform(-53.7,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,29,0.2,-29).s().p("AhLDyQgphjgzi7IgchcQgThAAAgZQAAgUAOgOQAPgLATgBQAhAAANAjIAOA6IAgBwQAbBgAZBLQAziBAchNIAdhRQAVgxAXgaQAPgSAVAAQAUAAAPAOQAOANAAAUQAAAOgJANQgSAbgPAlIgZBDIhcDtQgQApgXApQgOAbgbAAQgkAAgPgig");
	this.shape_2.setTransform(-99.8,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,27,0.2,-26.9).s().p("Ai2DOIAHhtQAJiTAAi1QAAgUAOgOQANgOAUAAQAVAAAOAOQAOAOAAAUQAAC1gKCZQgDAbgEA4QBSgBB9gmQAIgDAIAAQAVAAAOAQQAMAOgBASQAAAdgdANQgoAThVANQhMANgyAAQhTAAgBhJg");
	this.shape_3.setTransform(127.6,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF3399","#CC33FF"],[0,1],0,27.7,0,-27.7).s().p("ACuECQgbgCgbg+QgTgogNg1QgZAEg6ADQg1AEgcAFQgQAmgnBMQgPAYgbAAQgSAAgQgNQgOgNAAgTQAAgSAxhlQgEgKABgJQABgRAfgJQAxhTA7haQBViCAUAAQAlAAANAuIAVBtQAWBjAeB9QACAKAPAkQAMAdAAAPQABAUgQANQgOANgSAAIgBAAgAgaAgQAPgEAggCIAwgEIgWhyIhJB8g");
	this.shape_4.setTransform(81.4,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.4,29.9,0.4,-29.9).s().p("AioEEQgQgSAAgTIAAlpIgCgvQgBgaADgSQAEggA3gHQAagIA9AAQA/AAA7AqQBGAxAABIQAAAogPAbQgLAWgcAYQAhAQAaAgQAdAkAAAkQAAAugyAoQghAbgkAOQhPAeh5AAQgVAAgQgRgAhbC3QA6gDBEgUQA8gRAAgTQgBgbgmgUQgdgRgagCQgfAAg9gDgAhbi2IAACQQAfAEAPgCQBogIAAhFQAAgYgfgXQgfgXgjAAQgtAAgIABg");
	this.shape_5.setTransform(35.2,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.VERBAL2, new cjs.Rectangle(-121.4,-27.9,267.3,58.3), null);


(lib.Tparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AgUDQQgKgIABgNIABgNIABgMIgBgqIgCgqQgBgogGhJQgHhPgBgjIgbABQhAAAgkgJQgYgGAAgWQAAgMAIgJQAIgKAPABIAuAFQAdAEASAAIA1gBIA0gBQAXAAAsADQAtAEAWAAQAMAAAJAIQAIAIAAANQAAAMgIAIQgJAJgMAAQgVAAgugEQgsgDgWAAIgVAAQABAnAHBYQAHBRgBAtIADAeIACAfQgBATgGAOQgIATgRAAQgLAAgJgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-21.5,39.3,43.2);


(lib.Sparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ah1DEQg2gYgBgrQAAgMAIgHQAJgIAMAAQAPAAAKAQQAPAWAMAHQAZAQAvAAQAsAAAngTQAygYAAgrQAAgkgqgVQgjgSgzgBQgugBghgSQgpgXAAgqQAAgzA7gpQA4goA7AAQAcAAAkAKQAvAMAAATQAAAZgaAAQgMAAgdgGQgdgGgQAAQgtAAgfAWQghAVAAAgQAAAXArAKQAQADAtAEQBDAEAmAkQAiAgAAAvQAABEhAAoQg4AjhIAAQg2AAgsgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-21.5,34.7,43.2);


(lib.Rparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AiUDWQgJgIAAgNIgChCQgCgtAAgWQAAgaAGgyQAGg0AAgaQAAgOgDgdQgDgcAAgOQABgQAIgNQAMgPATACIBHAFQAoAFAaAOQB2A9AABYQAAArgoAgQggAbgxANQBbAwAtA0QAHAJAAAKQAAAMgIAJQgKAJgMAAQgKAAgKgJQhhhdh1ggIAEBvQAAANgIAIQgJAJgNAAQgMAAgIgJgAhdh/QACAVABAOQgBAWgEAiIgGA3IAOABIAMAAQBKAAAlgTQAQgIAOgOQAQgQAAgLQgBgogtgiQgqgfgugFIgsgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-22.2,32.4,44.5);


(lib.Pparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ah7DaQgIgIAAgLIAAhUQAAgpAGhLQAFhSABgjIAAgnQAAgcAEgNQAGgZAWAEQAKgDARgCQAQgBAaAAQA0AAAvAjQAzAoAAA3QAABGg3AoQgwAmhFAAQgHAAgcgEQgCArgBBrQAAALgHAIQgIAIgLAAQgLAAgIgIgAgwirIgRACIgGClIAfADQAwAAAigXQAlgaAAgtQAAgggjgXQgggVglAAIgXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-22.6,26.4,45.2);


(lib.Lparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ah+DfQgRgMAAggIAGheQAIiBAAieQgBgLAJgJQAIgJANAAQAMAAAIAJQAJAJgBALQABCggJCDIgDArQgDAXABASQBMABBzgkIAKgBQAMAAAJAJQAHAKAAALQAAASgTAIQggAQhHALQhAAMgpAAQgegBgNgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-23.1,28.8,46.3);


(lib.Iparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ah/DQQgJgIAAgMQAAgMAJgJQAHgIAMAAQAUAAArgHQADgWAAgeQAAgTgCgdQgBgbgBgUQAAhBAJhhIhMACQgNAAgIgJQgJgIAAgMQABgbAbgDQAYgCBAAAQA5ABBYAMQAaADgBAbQAAANgJAIQgJAGgLABQgTgBgcgDIgvgGQgHBTAABJIABAyIACAwQAAAbgCAWIBbgBQAMgBAJAJQAIAJAAAMQAAAMgIAIQgJAJgMAAIgxAAIgxABQgSAAgmAGQgnAEgUAAQgMAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-21.6,28.7,43.3);


(lib.INFINITIVES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB4CYIAAkvIG/AAIAAEvg");
	mask.setTransform(56.7,-1.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AgxA8QgLgIAAgMQAAgGADgDQAEgEAFAAQAJAAAEAIQAGAMASAAQAPAAAPgHQAPgHABgJQAAgMgLgDQgGgDgUAAQgQgBgNgFQgRgHAAgPQAAgSATgPQAUgPAVAAQAKAAANAEQAQAGAAAGQAAAFgDAEQgDAEgGAAIgNgCIgOgCQgMAAgJAGQgLAGAAAHQAAADADACQADADAIABIAWABQAVABALAKQAOALAAATQAAAYgbANQgVAJgaAAQgXAAgOgLg");
	this.shape.setTransform(60.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AgqBHQgKgJAAgeIACgkIABglIAAgKIgBgJQgBgPANAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAJADAAAKQgBAEgDAEQgEAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAkgDIAVgCQAGAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEAEQAFADAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_1.setTransform(47.8,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6699").s().p("AgUBCQgKgbgOgyIgIgZQgFgSgBgHQABgEAEgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAUg3IAIgWQAGgNAHgHQADgFAHAAQAEAAAFAEQADADAAAGQABADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgJAAgFgJg");
	this.shape_2.setTransform(35.3,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_3.setTransform(23.5,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6699").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_4.setTransform(11.9,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_5.setTransform(-0.1,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6699").s().p("AhABHQgEgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIAAgOIgBg9IgBgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgBAPQgCAMgMAAQgHAAgHgHQglgggrg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgEgFg");
	this.shape_6.setTransform(-12.9,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYADgXIgVABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgYgDQgBARAAAbIAAArIAZgBQAGAAADADQAEAFAAAEQAAAGgEADQgDAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_7.setTransform(-25.9,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6699").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_8.setTransform(-36.6,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6699").s().p("AhBBHQgDgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIABgOQAAgtgCgQIgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgGAAgJgHQgkgggrg6IgBAdIAAAWIABAWQAAAcgNAAQgHAAgFgFg");
	this.shape_9.setTransform(-50.3,-0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_10.setTransform(-63.3,-0.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0066").s().p("AgxA8QgLgIAAgMQAAgGADgDQAEgEAFAAQAJAAAEAIQAGAMASAAQAPAAAPgHQAPgHABgJQAAgMgLgDQgGgDgUAAQgQgBgNgFQgRgHAAgPQAAgSATgPQAUgPAVAAQAKAAANAEQAQAGAAAGQAAAFgDAEQgDAEgGAAIgNgCIgOgCQgMAAgJAGQgLAGAAAHQAAADADACQADADAIABIAWABQAVABALAKQAOALAAATQAAAYgbANQgVAJgaAAQgXAAgOgLg");
	this.shape_11.setTransform(60.1,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0066").s().p("AgqBHQgKgJAAgeIACgkIABglIAAgKIgBgJQgBgPANAAQAEAAAEACIAUgDIASgCQAXAAAOAFQAJADAAAKQgBAEgDAEQgEAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAkgDIAVgCQAGAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEAEQAFADAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_12.setTransform(47.8,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0066").s().p("AgUBCQgKgbgOgyIgIgZQgFgSgBgHQABgEAEgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAUg3IAIgWQAGgNAHgHQADgFAHAAQAEAAAFAEQADADAAAGQABADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgJAAgFgJg");
	this.shape_13.setTransform(35.3,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_14.setTransform(23.5,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0066").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_15.setTransform(11.9,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_16.setTransform(-0.1,-0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0066").s().p("AhABHQgEgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIAAgOIgBg9IgBgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgBAPQgCAMgMAAQgHAAgHgHQglgggrg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgEgFg");
	this.shape_17.setTransform(-12.9,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYADgXIgVABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgYgDQgBARAAAbIAAArIAZgBQAGAAADADQAEAFAAAEQAAAGgEADQgDAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_18.setTransform(-25.9,-0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0066").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_19.setTransform(-36.6,-0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0066").s().p("AhBBHQgDgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIABgOQAAgtgCgQIgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgGAAgJgHQgkgggrg6IgBAdIAAAWIABAWQAAAcgNAAQgHAAgFgFg");
	this.shape_20.setTransform(-50.3,-0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgEAAIgYgDQgCARAAAbIAAArIAZgBQAFAAAFADQADAFAAAEQAAAGgDADQgFAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_21.setTransform(-63.3,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-16.9,139.2,30.5);


(lib.Gerundsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AgxA8QgLgIAAgMQgBgGAEgDQAEgEAFAAQAJAAAEAIQAFAMATAAQAPAAAPgHQAPgHAAgJQAAgMgKgDQgGgDgUAAQgQgBgNgFQgRgHAAgPQABgSASgPQAUgPAWAAQAJAAANAEQAQAGAAAGQAAAFgCAEQgEAEgGAAIgNgCIgNgCQgMAAgKAGQgLAGAAAHQAAADADACQADADAIABIAWABQAUABANAKQAMALAAATQAAAYgbANQgUAJgaAAQgYAAgNgLg");
	this.shape.setTransform(40.1,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AgdBLQgKgCgHgEQgFAAgEgEQgDgEAAgFIAAgcIABgcIAAgdIgBgfQAAgFAGgGQAFgFAFAAQADAAAMAGIARAIQAbAJATASQAXAWAAAaQAAAQgIAOQgIAPgNAJQgQAKgbAAQgGAAgKgCgAggAvQAEADAFABIAKABQATAAAIgGQAJgFAFgJQAEgJAAgKQABgWgbgRQgIgFgegNg");
	this.shape_1.setTransform(27,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AhBBHQgDgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIAAgOIgBg9IgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgBAPQgCAMgMAAQgHAAgHgHQgkgggsg6IgBAdIABAWIAAAWQAAAcgOAAQgHAAgEgFg");
	this.shape_2.setTransform(12.1,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033FF").s().p("AglBAQgYgTAAguIABgNIAAgOIABgKIAAgLQAAgHACgHQAEgIAGAAQAFAAAEADQAEADABAGIAAAQIAAAPIgBAOIgBANQABANADAMQADAOAIAGQAEADAOAAQAYABAJgrQAEgUAAgoQAAgFADgFQAEgGAIAAQAHAAACAEQADAEAAAEQAAAlgDAUQgFAfgQAVQgGAJgKAGQgMAHgMAAQgXAAgMgIg");
	this.shape_3.setTransform(-2.8,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033FF").s().p("AgyBFQgEgDABgGIAAgUIAAgVIAAhKQAAgGADgFQAFgGAJAAIAXACQANACAIAEQAnAUAAAeQABAMgJAIQgIAJgRAHQAZAOAMAOQAEAEAAAEQAAAFgFAEQgDAEgGAAQgEAAgFgEQgcgaghgLIACAeQAAAGgEADQgEAEgGAAQgFAAgEgEgAgcADIAEAAQAXAAAKgFQAFgCAEgEQADgEAAgCQABgLgNgJQgMgJgOgCIgLgBg");
	this.shape_4.setTransform(-15.5,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033FF").s().p("AgqBHQgLgJAAgeIACgkIACglIgBgKIgBgKQABgOANAAQAEAAADACIAVgDIARgCQAXAAAOAFQAJAEAAAIQAAAFgDAEQgFAEgFAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAjgEIAXgCQAFAAAEAEQAEADAAAGQAAAKgMABIgWACIgnAEIAAATQgBASADACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAFADQADAEAAAGQAAALgKACQgJABgcAAQgfAAgJgIg");
	this.shape_5.setTransform(-27.5,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033FF").s().p("AgyA/QgMgNAAgaQAAgYAMgYQALgZATgPQANgLANAAQAJAAAQAGQASAIAAAJQAAAFgDAEQgEADgGAAQgDAAgJgEQgJgGgJAAQgHAAgOASQgUAaAAAeQgBAQAFAFQAEAGAOgBQANAAAMgHQALgJAGgQQgWABgPAIIgGABQgGAAgDgFQgEgDAAgFQAAgOAggFQAUgDAZAAQAFAAAEADQAEAEAAAEQAAAHgGAEQgGAcgTAQQgUARgZAAQgYAAgNgNg");
	this.shape_6.setTransform(-39.9,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033FF").s().p("AgkA8QgPgIgDgMQgCgGACgDQACgEAGAAQAJAAAGAIQAKAMASAAQAPAAANgHQANgHgDgJQgEgMgLgDQgHgDgUAAQgQgBgPgFQgUgHgEgPQgGgSAOgPQAPgPAWAAQAKAAANAEQASAGACAGQACAFgCAEQgCAEgGAAIgOgCIgNgCQgMAAgIAGQgJAGACAHQABADAEACQAEADAHABIAXABQAVABAQAKQAQALAHATQAHAYgWANQgSAJgbAAQgWAAgRgLg");
	this.shape_7.setTransform(41.1,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033FF").s().p("AACBLQgLgCgHgEQgGAAgFgEQgEgEgCgFIgJgcIgIgcIgKgdIgLgfQgCgFAEgGQADgFAFAAQADAAAPAGIATAIQAdAJAaASQAeAWAJAaQAFAQgDAOQgDAPgLAJQgMAKgcAAQgHAAgJgCgAgKAvQAFADAFABIAKABQAUAAAGgGQAHgFACgJQACgJgEgKQgHgWgggRQgKgFgigNg");
	this.shape_8.setTransform(26.6,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0033FF").s().p("AgoBHQgEgDgCgGIgDgLIgDgLIgFgQIgFgRIgHgRIgFgRIgHgRIgHgQQgBgGADgEQAEgFAGAAQAGAAAMAMQA9A8A2AlIgFgOQgOgtgHgQIgFgKIgDgKQgFgNAOAAQAPAAAPAvIAFAPIASA5IAEAPQABAMgLAAQgHAAgKgHQguggg/g6IAJAdIAHAWIAIAWQAKAcgOAAQgHAAgGgFg");
	this.shape_9.setTransform(12.2,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033FF").s().p("AgGBAQgfgTgPguIgEgNIgEgOIgDgKIgDgLQgDgHABgHQABgIAHAAQAFAAAFADQAFADACAGIAFAQIAFAPIAEAOIADANQAFANAHAMQAJAOAIAGQAFADAPAAQAYABgFgrQgDgUgNgoQgBgFABgFQADgGAHAAQAHAAAEAEQAEAEABAEQAMAlADAUQAGAfgJAVQgEAJgHAGQgKAHgMAAQgYAAgNgIg");
	this.shape_10.setTransform(-3.4,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0033FF").s().p("AgcBFQgFgDgBgGIgHgUIgGgVIgZhKQgCgGACgFQADgGAJAAIAXACQAOACAKAEQAtAUAKAeQAEAMgFAIQgGAJgOAHQAdAOARAOQAEAEACAEQACAFgDAEQgCAEgGAAQgFAAgFgEQglgagkgLIALAeQABAGgCADQgDAEgFAAQgGAAgFgEgAgcADIAEAAQAXAAAIgFQAEgCADgEQADgEgBgCQgEgLgPgJQgPgJgPgCIgLgBg");
	this.shape_11.setTransform(-15.2,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033FF").s().p("AgQBHQgOgJgKgeIgKgkIgKglIgEgKIgEgKQgFgOANAAQAEAAAEACIATgDIASgCQAWAAAQAFQAKAEADAIQABAFgCAEQgCAEgGAAIgEAAQgQgFgNAAIgPABIgQAEIALAlIAjgEIAVgCQAGAAAFAEQAFADACAGQADAKgLABIgWACIglAEIAFATQAGASAEACQABACAJAAIASgBIARAAIAFAAIAFgBQAGAAAFADQAFAEACAGQAEALgKACQgJABgdAAQgeAAgLgIg");
	this.shape_12.setTransform(-27.5,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0033FF").s().p("AgfA/QgRgNgJgaQgIgYAEgYQAEgZANgPQAJgLAPAAQAJAAARAGQAVAIACAJQACAFgDAEQgCADgGAAQgCAAgLgEQgLgGgIAAQgIAAgIASQgMAaAKAeQAFAQAGAFQAHAGANgBQAOAAAIgHQAJgJAAgQQgVABgNAIQgCABgDAAQgGAAgFgFQgFgDgCgFQgEgOAegFQASgDAaAAQAFAAAFADQAFAEACAEQACAHgEAEQACAcgNAQQgOARgaAAQgYAAgQgNg");
	this.shape_13.setTransform(-39.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},3).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-15.2,97.4,30.5);


(lib.Eparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AiADaQgcgZAAhbIABgoIACguQgDgHAAgHQABgJAFgHQAGhSgBgnQABgLgDgUQgDgUAAgLQAAghAdAAQAMAAAJAIQAjgJAggFQAegEAaAAQBHAAArAQQAUAIAAATQAAAMgIAIQgIAKgNAAIgJgBQgygOguAAQgXAAgcAEQgcAFghAIQADATAAALQAAAngFBFIB/gMQA4gGANAAQANAAAIAIQAJAIAAAOQAAAYgbADIjKASIgCAnIgCAhQAAA/AKALQAHAIAnAAIA2gBIA2gBIARgCIARgCQAfAAAAAdQAAAYgZAFQgbAFhaAAQhbAAgagXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-24.1,31.3,48.3);


(lib.Cparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Ah5CuQgogsAAg7QAAhfBShlQBFhUBGAAQAOAAALABIAVAEQAKgOAQAAQAUAAAGAaQAEAXAAAhQAAAMgGAIQgIALgPAAQgSAAgKgVQgIgSgHgEQgGgDgYAAQgqAAgzA/QhGBUAABLQAAAkAYAbQAZAbAjAAQAdAAAegPQARgJAjgYQARgMAIAAQANAAAIAJQAJAJAAALQAAANgLAKQhNBChOAAQg9AAgpgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-21.9,32.5,43.8);


(lib.Aparts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("ABmCSQgIgZgLhAQgeAFgwAKIhNAPQgOAlgkBIQgJAPgQAAQgMAAgJgHQgJgJAAgMQAAgOAshZQgFgIAAgJQAAgXAdgHQAhg8AzhOQBEhrARgBQAXAAAIAgIA+EiIARAtQAIAXAAAIQAAAMgJAJQgJAHgMABQgaAAgUhEgAglAUQAjgIBHgMIgYhtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-21.3,35.7,42.7);


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


(lib.ParticiplesTitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// P
	this.instance = new lib.Pparts("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.2,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({startPosition:0},0).to({rotation:30},7).wait(61).to({startPosition:0},0).to({rotation:0},5).wait(13));

	// A
	this.instance_1 = new lib.Aparts("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.8,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({startPosition:0},0).to({scaleX:0.79,rotation:15,x:47.6},7).wait(56).to({startPosition:0},0).to({scaleX:1,rotation:0,x:54.8},5).wait(15));

	// R
	this.instance_2 = new lib.Rparts("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.5,44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({startPosition:0},0).to({scaleX:0.75,rotation:-30,x:80.8,y:43.2},7).wait(51).to({startPosition:0},0).to({scaleX:1,rotation:0,x:96.5,y:44.7},5).wait(17));

	// T
	this.instance_3 = new lib.Tparts("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(137.5,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({startPosition:0},0).to({rotation:-30,x:116.8},7).wait(47).to({startPosition:0},0).to({rotation:0,x:137.5},5).wait(18));

	// I
	this.instance_4 = new lib.Iparts("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(171.6,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({startPosition:0},0).to({rotation:-15,x:143},7).wait(44).to({startPosition:0},0).to({rotation:0,x:171.6},5).wait(19));

	// C
	this.instance_5 = new lib.Cparts("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(206.6,44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({startPosition:0},0).to({scaleX:0.94,rotation:-30,x:174.1,y:44.9},7).wait(40).to({startPosition:0},0).to({scaleX:1,rotation:0,x:206.6,y:44.7},5).wait(21));

	// I
	this.instance_6 = new lib.Iparts("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(240.1,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({startPosition:0},0).to({scaleX:0.89,rotation:15,x:208.7},7).wait(37).to({startPosition:0},0).to({scaleX:1,rotation:0,x:240.1},5).wait(23));

	// P
	this.instance_7 = new lib.Pparts("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(271.6,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({startPosition:0},0).to({rotation:15,x:240.1,y:43.1},7).wait(31).to({startPosition:0},0).to({rotation:0,x:271.6,y:44},5).wait(25));

	// A
	this.instance_8 = new lib.Lparts("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(304.8,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({startPosition:0},0).to({scaleX:0.94,rotation:30,x:270,y:47.5},7).wait(25).to({startPosition:0},0).to({scaleX:1,rotation:0,x:304.8,y:45.4},5).wait(27));

	// L
	this.instance_9 = new lib.Eparts("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(340.1,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(31).to({startPosition:0},0).to({scaleX:0.94,rotation:-30,x:294.7,y:49.3},7).wait(20).to({startPosition:0},0).to({scaleX:1,rotation:0,x:340.1,y:44.6},5).wait(29));

	// S
	this.instance_10 = new lib.Sparts("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(378.9,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(36).to({startPosition:0},0).to({scaleX:0.78,scaleY:1.1,rotation:-15,x:327.2,y:45},7).wait(13).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:0,x:378.9,y:45.9},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,20.5,391.2,48.3);


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


(lib.fcb_background_pressed_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_pressed();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_pressed_1, new cjs.Rectangle(2,2,9,9), null);


(lib.fcb_background_disabled_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_disabled();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_disabled_1, new cjs.Rectangle(2,2,9,9), null);


(lib.fcb_background_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_1, new cjs.Rectangle(2,2,9,9), null);


(lib.fcb_frame = function(mode,startPosition,loop) {
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
		//																		  n*/
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
	this.darkshadow_mc = new lib.fcb_leftOut();
	this.darkshadow_mc.parent = this;

	this.shadow_mc = new lib.fcb_leftIn();
	this.shadow_mc.parent = this;

	this.highlight_mc = new lib.fcb_rightIn();
	this.highlight_mc.parent = this;

	this.highlight3D_mc = new lib.fcb_rightOut();
	this.highlight3D_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight3D_mc},{t:this.highlight_mc},{t:this.shadow_mc},{t:this.darkshadow_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_frame, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_check_disabled_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//component.registerSkinElement(check_mc, "foregroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check_disabled();
	this.check_mc.parent = this;
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_disabled_1, new cjs.Rectangle(2.9,3.2,7.1,7), null);


(lib.fcb_check_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//
		//component.registerSkinElement(check_mc, "check");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check();
	this.check_mc.parent = this;
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_1, new cjs.Rectangle(2.9,3.2,7.1,7), null);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


(lib.GERUNDS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Gerundsymbol();
	this.instance.parent = this;
	this.instance.setTransform(-1.9,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GERUNDS, new cjs.Rectangle(-50.6,-14.9,97.4,30.5), null);


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
		var bgm = createjs.Sound.play('bgmIntro',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.5;
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
				bgm.volume += 0.5;
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
		
		 window.open ("intro_Summary.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("intro_Scene4c.html","_self");
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


(lib.PARTICIPLES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ParticiplesTitle();
	this.instance.parent = this;
	this.instance.setTransform(1.9,-3.3,0.356,0.356,0,0,0,200.6,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.8,-11.1,139.4,17.2);


(lib.Chart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(223.3,-13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAFgHANQAAAegDAFQgCAFgEgBQgEAAgCgCQgCgCAAgDIAAgDIABgLIAAgMIABg5IAAgMIgBgIIAAgIQAAgDACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAHQAHgIAHgEQAGgFAJAAQANAAAEAJQAEAGAAANIABAPIACAQIACAQIAAADQAAACgCACQgCADgDAAQgGAAgCgGg");
	this.shape_1.setTransform(216.7,-19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAiQgMgKAAgQQAAgQALgQQAMgTANAAQAIAAAKADQALAFAAAHQAAADgBACQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgEgCQgEgEgLgBQgHAAgHAPQgHANAAAJQAAAKAHAFQAGAGAJAAQAFAAAFgCIAJgFIAEgCQADABACACQACACAAADQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_2.setTransform(207.9,-17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgPARgBQAMAAAJAEQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgEADgBQADABACACQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJgBgGAIg");
	this.shape_3.setTransform(199.6,-17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgPARgBQAMAAAJAEQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgEADgBQADABACACQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJgBgGAIg");
	this.shape_4.setTransform(190.8,-17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_5.setTransform(182.1,-15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_6.setTransform(173.6,-17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBDQgCgCAAgEIAAgBQACgKAAgMIgBgWIAAgVIgMABQgIAAAAgIQAAgIAOAAIAHAAIABgMQACgSAHgIQAHgKASAAQALAAAAAIQAAAHgKAAQgTAAgDAbIAAAFIARgBQANAAAAAHQAAAGgGABIgGABIgSABIgBAQIAAAPIABAOQAAAPgCAJQgBAGgFAAQgEAAgCgCg");
	this.shape_7.setTransform(160.9,-19.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_8.setTransform(152.7,-17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgCgsIgRgCQgHgBAAgGQAAgEACgDQACgBADAAIARABIAAgLIAAgJQgBgEACgCQADgCADAAQAGAAACALIAAAHIAAAFIAAAEIALAAIAKAAQAFACAAAGQAAADgDACQgBADgEAAIgEAAIgDgBIgLACIABAtIAAADIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_9.setTransform(140,-18.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_10.setTransform(132.6,-17.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgIgKQgJgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_11.setTransform(124.5,-17.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_12.setTransform(116.2,-15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_13.setTransform(103.4,-17.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgPARgBQAMAAAJAEQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgEADgBQADABACACQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJgBgGAIg");
	this.shape_14.setTransform(95.1,-17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVA7QgCgGgBgMIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAFgHANQAAAegDAFQgCAFgEgBQgEAAgCgCQgCgCAAgDIAAgDIABgLIAAgMIABg5IAAgMIgBgIIAAgIQAAgDACgCQACgCADAAQAHAAABAHIABANIAAARIgBARIAAAHQAHgIAHgEQAGgFAJAAQANAAAEAJQAEAGAAANIABAPIACAQIACAQIAAADQAAACgCACQgCADgDAAQgGAAgCgGg");
	this.shape_15.setTransform(86,-19.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEA3QgDgCABgDIAAgJIAAgJIgBgsIgSgCQgHgBAAgGQAAgEACgDQADgBADAAIAQABIAAgLIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAFIAAAEIAMAAIAKAAQAFACAAAGQAAADgDACQgCADgDAAIgDAAIgEgBIgLACIACAtIAAADIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_16.setTransform(77.5,-18.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_17.setTransform(69.4,-17.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgPARgBQAMAAAJAEQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgEADgBQADABACACQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJgBgGAIg");
	this.shape_18.setTransform(56.3,-17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEAuQgCgCAAgDIgCgcIgCgbQAAgJgCgFQgFADgGAFIgJALIgEAFIgBAMIgBAPIABAGIABAGQAAADgDADQgCABgDAAQgJAAAAgTIABgPIAAgMIAAgNIgBgMQAAgSAIAAQADAAADACQACADAAADIAAAFIgBAFIAAAIQAEgIAIgIQAIgGAGAAQAMAAAEAMQAEgFAGgDQAGgDAIgBQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAFgDADIABAOIACAUIACAVQAAADgDACQgCACgDAAQgCAAgDgCg");
	this.shape_19.setTransform(45.7,-17.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_20.setTransform(35,-17.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_21.setTransform(26.8,-17.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_22.setTransform(14.2,-17.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKABgUQgBgRANgOQAOgNARAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgBACgDAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_23.setTransform(6.5,-17.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbA2QgLgMAAgRQAAgVALgLQALgNARAAQAJAAAFADIAHAFQABghABgLQABgHAHAAQAHAAAAAIIgDAwIgBAVQAAAaADAOIAAABQAAADgDADQgCACgDAAQgEAAgDgIQgGAFgFACQgHACgFAAQgQAAgLgKgAgSABQgGAIAAAQQAAAKAHAHQAHAIAKgBQAFAAAFgCIAJgHIACgCIAAgNIAAgJIAAgKQgDgGgFgCQgFgDgHgBQgMAAgHAHg");
	this.shape_24.setTransform(-7.2,-19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgPARgBQAMAAAJAEQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgEADgBQADABACACQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJgBgGAIg");
	this.shape_25.setTransform(-16.1,-17.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_26.setTransform(-24.7,-17.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASAlQgKAGgMgBQgKAAgHgEQgHgFgCgJQgDgWAAgOQAAgLADgOQABgHAGAAQADAAADADQACABAAAEIgBALIgBANIABAUQAAAKACAGIAFACIAFAAQAKABALgEIAAgQIAAgOQAAgQABgNQABgIAHAAQADAAADADQACACAAADIgCAeIAAAQIABAQIAAAGIAAAFQAAADgCACQgCADgEAAQgGAAgBgIg");
	this.shape_27.setTransform(-32.5,-17.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgEAuQgCgCAAgDIgCgcIgCgbQAAgJgCgFQgFADgGAFIgJALIgEAFIgBAMIgBAPIABAGIABAGQAAADgDADQgCABgDAAQgJAAAAgTIABgPIAAgMIAAgNIgBgMQAAgSAIAAQADAAADACQACADAAADIAAAFIgBAFIAAAIQAEgIAIgIQAIgGAGAAQAMAAAEAMQAEgFAGgDQAGgDAIgBQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAFgDADIABAOIACAUIACAVQAAADgDACQgCACgDAAQgCAAgDgCg");
	this.shape_28.setTransform(-47.6,-17.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_29.setTransform(-57.6,-17.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_30.setTransform(-66,-17.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgMBDQgCgCAAgEIAAgBQACgKAAgMIgBgWIAAgVIgMABQgIAAAAgIQAAgIAOAAIAHAAIABgMQACgSAHgIQAHgKASAAQALAAAAAIQAAAHgKAAQgTAAgDAbIAAAFIARgBQANAAAAAHQAAAGgGABIgGABIgSABIgBAQIAAAPIABAOQAAAPgCAJQgBAGgFAAQgEAAgCgCg");
	this.shape_31.setTransform(-74.3,-19.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgkA8QgDgDAAgEIAAgWIACgfIABghIABgVQABgEACgBQAKgDAOAAQANAAAMAJQAPALAAAQQAAAUgQAKQAMAFAGAGQAGAGAAAIQAAAJgLAJQgHAGgIADQgQAHgbAAQgEAAgDgDgAgXAfIAAAQQAUgBAMgFQAFgCAFgEQAFgEAAgCQAAgEgKgFQgHgDgHgCIgIgBIgDAAIgDAAIgJgBIAAASgAgUguIAAAOIgCAeIAMABQALgBAHgHQAIgHAAgKQAAgIgIgGQgIgHgIAAIgMABg");
	this.shape_32.setTransform(-87.7,-19.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgnA7QgCgCAAgEIgBgSIgBgSIACgVIACgVIgBgMIAAgMQAAgEACgDQADgFAFABIATABQALACAGADQAgARgBAYQAAAMgLAJQgIAHgNAEQAZANAMAOQABADAAACQAAAEgCACQgDADgDAAQgDAAgCgDQgagZgfgJIABAPIAAAPQAAAEgCACQgCACgEAAQgDAAgCgCgAgYgiIAAAJIgBAQIgBAOIAEAAIADABQATAAAJgGQAFgBADgEQAFgEAAgEQAAgKgNgKQgKgIgMgCIgMgBg");
	this.shape_33.setTransform(-97.9,-19.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AghA8QgIgGAAgZIAAgMIABgNIgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIACgiIgBgIIgBgJQABgIAHgBQAEABACACIASgEIAOgCQATABAMAEQAFACAAAFQAAAEgDACQgCADgDAAIgDgBQgMgDgNAAIgNABIgQADIAAAIIAAAfIAhgEIASgCQADABADACQACACAAADQAAAHgHABIgSABIgjADIgBALIAAAKQAAARACADQACACAKAAIAOgBIAPAAIAEAAIAFgBQAIAAAAAJQAAAGgGACQgIABgYAAQgYAAgGgHg");
	this.shape_34.setTransform(-107.9,-19.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgOA5QgJgYgMgrIgGgWQgEgQAAgFQAAgEACgCQACgCAEAAQAGAAACAGIACAOIAIAaQAIAdAGAVIABgCIAUg3IAHgUQAEgLAFgGQADgDADAAQADAAADACQACADAAADIgCAFQgEAHgEAIIgGARIgVA4QgDAKgFAJQgCAFgEAAQgGAAgDgGg");
	this.shape_35.setTransform(-117.8,-19.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgSAAgIgKQgIgKAAgUQAAgRAMgOQANgNASAAQAGAAAJADQALAFgBAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgDACgDAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_36.setTransform(-132.4,-17.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_37.setTransform(-145.5,-17.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQADADAAADIgBASIgBASIAAAOIABAOQAAADgDACQgCADgCAAQgEAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDACAAQAEAAADADQADADgBADQABAEgDADQgDACgEAAQgCAAgDgCg");
	this.shape_38.setTransform(-151.2,-19.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF00FF").s().p("AghA9QgEgDgBgIIACgaQACgkAAgrQAAgDADgDQACgCACAAQAEAAADACQABADAAADQAAAsgBAjIgBAMIgBAMQAVAAAdgKIADAAQADAAACADQACACABADQgBAFgFACQgIAFgTACQgQAEgLAAQgJAAgDgDg");
	this.shape_39.setTransform(-162.6,-19.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("AAbApIgFgZIgVADIgTAFIgOAeQgCAEgEABQgEgBgCgCQgDgCAAgDQAAgEAMgZQgBgCAAgDQAAgGAIgCIAWgmQASgdAEAAQAGAAADAJIAFAaIALA1IAFAMIACAJQAAADgDADQgCACgDAAQgHAAgGgSgAgJAGIAcgGIgHgdg");
	this.shape_40.setTransform(-173.2,-19.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF00FF").s().p("AgkA8QgDgDAAgEIAAgWIACgfIABghIABgVQABgEACgBQAKgDAOAAQANAAAMAJQAPALAAAQQAAAUgQAKQAMAFAGAGQAGAGAAAIQAAAJgLAJQgHAGgIADQgQAHgbAAQgEAAgDgDgAgXAfIAAAQQAUgBAMgFQAFgCAFgEQAFgEAAgCQAAgEgKgFQgHgDgHgCIgIgBIgDAAIgDAAIgJgBIAAASgAgUguIAAAOIgCAeIAMABQALgBAHgHQAIgHAAgKQAAgIgIgGQgIgHgIAAIgMABg");
	this.shape_41.setTransform(-183.6,-19.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF00FF").s().p("AgnA7QgCgCAAgEIgBgSIgBgSIACgVIACgVIgBgMIgBgMQAAgEADgDQADgFAFABIATABQALACAGADQAgARgBAYQABAMgMAJQgIAHgNAEQAZANAMAOQACADAAACQgBAEgCACQgDADgDAAQgCAAgDgDQgagZgfgJIABAPIAAAPQAAAEgBACQgDACgEAAQgDAAgCgCgAgYgiIAAAJIgBAQIgBAOIADAAIAEABQATAAAJgGQAFgBADgEQAFgEAAgEQAAgKgNgKQgKgIgNgCIgLgBg");
	this.shape_42.setTransform(-193.9,-19.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF00FF").s().p("AghA8QgIgGAAgZIAAgMIABgNIgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIACgiIgBgIIgBgJQABgIAHgBQAEABACACIARgEIAPgCQATABAMAEQAFACAAAFQAAAEgCACQgCADgEAAIgDgBQgMgDgNAAIgNABIgQADIABAIIgBAfIAhgEIASgCQADABADACQACACAAADQAAAHgHABIgSABIgjADIgBALIAAAKQAAARACADQACACAKAAIAOgBIAOAAIAFAAIAEgBQAJAAAAAJQAAAGgGACQgIABgYAAQgYAAgGgHg");
	this.shape_43.setTransform(-203.8,-19.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF00FF").s().p("AgOA5QgJgYgMgrIgGgWQgEgQAAgFQAAgEACgCQACgCAEAAQAFAAADAGIADAOIAHAaQAIAdAGAVIABgCIAUg3IAGgUQAFgLAFgGQACgDAEAAQADAAADACQACADAAADIgBAFQgFAHgEAIIgGARIgVA4QgDAKgFAJQgCAFgEAAQgGAAgDgGg");
	this.shape_44.setTransform(-213.8,-19.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAbApIgFgZIgVADIgTAFIgOAeQgCAEgEABQgEgBgCgCQgDgCAAgDQAAgEAMgZQgBgCAAgDQAAgGAIgCIAWgmQASgdAEAAQAGAAADAJIAFAaIALA1IAFAMIACAJQAAADgDADQgCACgDAAQgHAAgGgSgAgJAGIAcgGIgHgdg");
	this.shape_45.setTransform(-230.3,-19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2,1,1).p("AKSuYIAAIOIAAUjAKSmKIZnAAAuRuYIAAIOIAAUjEgj4gGKIVnAAIYjAA");
	this.shape_46.setTransform(-2.2,98.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(1));

	// Layer 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF00FF").s().p("AgOA6QgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgDADgDIAGgEQAMgOAAgdQAAgLgDgMQgDgOgGgHIgFgFQgEgEAAgCQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAEACQAKAIAIASQAGAQAAAPQAAAsgYAOIgEACQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_47.setTransform(228.4,47.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF00FF").s().p("AgZAtQgFgFAAgTIAAgIIABgKIgBgDIABgCIABgaIAAgGIgBgGQAAgHAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIANgCIALgBQAOAAAIADQAFACAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgKgDgJAAIgJABIgNACIAAAGIgBAXIAZgDIAPgBQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQABAEgGABIgOABIgaACIAAAIIAAAHQAAANABACQACACAHAAIAKgBIAMAAIADAAIADgBQAHAAgBAHQAAAFgEABQgGABgRAAQgSAAgGgFg");
	this.shape_48.setTransform(222.5,46.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF00FF").s().p("AgKArQgGgSgKggIgEgRQgDgMAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAFAAABAEIACALIAGAUQAGAUAFAQIAAgBIAPgpIAFgPQADgIAEgFQACgCADAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABIgBADIgGAMIgEANIgQApIgGAPQgBADgDAAQgFAAgCgEg");
	this.shape_49.setTransform(215,46.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAABQAAAAAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_50.setTransform(207.5,46.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF00FF").s().p("AgDArQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_51.setTransform(200.6,46.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF00FF").s().p("AgYAkQgHgJgBgMQAAgTARgVQAOgSANAAIAFABIAEABQACgDAEAAQADAAABAFIACAMIgCAEQgBACgDAAQgEAAgCgEQgBgEgCgBQgBgBgFAAQgJAAgJANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIAKgHIAGgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQABACgDACQgQAOgOAAQgMAAgJgJg");
	this.shape_52.setTransform(192.6,46.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF00FF").s().p("AgZAtQgFgFAAgTIAAgIIABgKIgBgDIABgCIABgaIAAgGIgBgGQAAgHAGAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAAAIANgCIALgBQAOAAAIADQAFACAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgKgDgJAAIgJABIgNACIAAAGIgBAXIAZgDIAPgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQABAEgGABIgOABIgaACIgBAIIAAAHQAAANACACQACACAHAAIALgBIALAAIADAAIAEgBQAFAAAAAHQAAAFgEABQgGABgSAAQgRAAgGgFg");
	this.shape_53.setTransform(185.2,46.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF00FF").s().p("AgXAoQgLgHAAgLQAAgIAGAAQAGAAAAAHQAAAFAHAFQAGAFAGAAQAEAAACgeIABgiIgBgGIgDAAIgGAAIgHAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgGAIAAIAGAAIAFAAIALgBIALAAQANAAAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgDAAIgEAAIgHAAIAAAGQAAArgFAUQgEANgJAAQgKAAgKgIg");
	this.shape_54.setTransform(177.3,46.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF00FF").s().p("AgRAvQgHgBgDgDIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgTIAAgSIAAgTIAAgVQAAgCACgDQADgCACAAIAJADIALAFQAPAGAMALQAOAOAAAQQAAAKgFAKQgFAJgHAFQgKAHgPgBIgKgBgAgVgQIAAAQIgBAhIACAAQAEADAJAAQAMAAAGgDQAFgFAEgGQAEgHAAgGQgBgQgSgMQgFgEgWgKg");
	this.shape_55.setTransform(169.2,46.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF00FF").s().p("AAVAeIgEgSIgQADIgOADIgKAWQgCAEgEAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgDAJgTIgBgDQAAgFAGgBIARgcQANgWADAAQAFAAACAGIADAUIAJAoIADAJIACAGQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFAAgEgOgAgGAEIAUgEIgFgWg");
	this.shape_56.setTransform(160.1,46.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF00FF").s().p("AgSABQAAgEAFAAIANgBIAOAAQAFAAAAAEQAAAEgFAAIgbABQgFAAAAgEg");
	this.shape_57.setTransform(149.8,47.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF00FF").s().p("AgYAtQgHgFAAgTIABgIIAAgKIgBgDIACgCIABgaIgBgGIAAgGQAAgHAGAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAAAIANgCIALgBQAOAAAJADQADACAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgKgDgJAAIgKABIgMACIABAGIgBAXIAYgDIAOgBQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABABAAABQAAAEgGABIgOABIgaACIgBAIIAAAHQABANACACQAAACAJAAIAKgBIAKAAIAEAAIAEgBQAFAAABAHQgBAFgFABQgFABgSAAQgSAAgEgFg");
	this.shape_58.setTransform(140.1,46.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF00FF").s().p("AgZAuQgDgDAAgGIABgTQABgaAAghQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAhgDAaIAAAKIgBAIQAQAAAXgIIABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgEABQgHADgNACQgNADgIAAQgGAAgDgCg");
	this.shape_59.setTransform(133,46.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF00FF").s().p("AgYAtIgBgEIAAgRIABgYIABgYIAAgIIAAgIQACgFAEAAIAFgBIAJAAQAJAAAKAIQALAIAAALQAAAPgMAHQgJAIgNAAIgHgBIgBAfIgBAEQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgNgiIAAALIgBAXIAHAAQAIAAAIgEQAGgGAAgJQAAgHgGgEQgHgFgGAAIgFAAIgEABg");
	this.shape_60.setTransform(126.6,46.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAABQAAAAAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_61.setTransform(120.1,46.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF00FF").s().p("AgXAkQgJgJABgMQAAgTAQgVQAOgSANAAIAFABIAEABQACgDADAAQAFAAABAFIAAAMIgBAEQgBACgEAAQgDAAgCgEQgCgEgBgBQgBgBgFAAQgIAAgKANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIAKgHIAGgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAAABAAABQABAAAAABQAAACgDACQgPAOgPAAQgMAAgIgJg");
	this.shape_62.setTransform(113.3,46.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABABABAAQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_63.setTransform(106.3,46.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF00FF").s().p("AgDArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQAAAAABABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_64.setTransform(99.4,46.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF00FF").s().p("AgdAtQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgOIgBgNIABgPIABgQIAAgJIgBgJQAAgDADgDQACgDADAAIAPABQAIABAEADQAYANAAASQAAAJgIAGQgHAFgKADQATAKAJALIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgFgCQgTgTgXgHIABAMIAAALQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgSgZIABAHIgBAMIgBAKIACAAIACAAQAPAAAHgEQADAAADgDQADgEAAgCQAAgIgJgHQgIgHgJgBIgIAAg");
	this.shape_65.setTransform(91.2,46.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF00FF").s().p("AAVAeIgEgSIgQADIgOADIgKAWQgCAEgEAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgDAJgTIgBgDQAAgFAGgBIARgcQANgWADAAQAFAAACAGIADAUIAJAoIADAJIACAGQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFAAgEgOgAgGAEIAUgEIgFgWg");
	this.shape_66.setTransform(82.8,46.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF00FF").s().p("AgYAtIgCgEIAAgRIACgYIABgYIAAgIIABgIQABgFAEAAIAFgBIAJAAQAJAAAKAIQAKAIAAALQAAAPgLAHQgKAIgNAAIgGgBIgBAfIgCAEQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgMgiIAAALIgBAXIAFAAQAKAAAGgEQAIgGgBgJQABgHgIgEQgGgFgGAAIgFAAIgDABg");
	this.shape_67.setTransform(75.5,46.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF00FF").s().p("AAIA6QgYgOAAgsQAAgPAGgQQAHgSALgIIAEgCQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAACgEAEIgFAFQgGAHgDAOQgDAMAAALQAAAdAMAOIAGAEQADADAAADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgEgCg");
	this.shape_68.setTransform(70.2,47.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF00FF").s().p("AgDArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_69.setTransform(161.3,15.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF00FF").s().p("AgXAoQgLgFAAgIQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQADAAACADIAFAGQAFAEAKAAQAIAAAIgEQAKgFAAgJQAAgIgJgEQgHgEgJAAQgJAAgHgDQgIgFAAgJQAAgKAMgJQALgIALAAQAGAAAHACQAJADAAAEQAAAFgFAAIgIgBIgJgCQgIAAgHAFQgGAEAAAHQAAAFAIACIAMABQANABAIAIQAHAFAAAKQAAAOgNAIQgLAIgOAAQgLAAgJgFg");
	this.shape_70.setTransform(152.7,16);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF00FF").s().p("AAVAeIgEgSIgQADIgOADIgKAWQgCAEgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgDAJgTIgBgDQAAgFAGgBIARgcQANgWADAAQAFAAACAGIADAUIAJAoIADAJIACAGQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgEgOgAgGAEIAUgEIgFgWg");
	this.shape_71.setTransform(143.9,15.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF00FF").s().p("AgYAtIgBgEIAAgRIAAgYIABgYIAAgIIABgIQACgFAEAAIAFgBIAJAAQAJAAAKAIQALAIAAALQgBAPgKAHQgKAIgNAAIgIgBIAAAfIgBAEQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgNgiIAAALIgBAXIAHAAQAIAAAIgEQAGgGABgJQgBgHgGgEQgHgFgHAAIgEAAIgEABg");
	this.shape_72.setTransform(136.7,15.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0000FF").s().p("AgOA6QgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgDADgDIAGgEQAMgOAAgdQAAgLgDgMQgDgOgGgHIgFgFQgEgEAAgCQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAEACQAKAIAIASQAGAQAAAPQAAAsgYAOIgEACQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_73.setTransform(47.5,47.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0000FF").s().p("AgXAoQgLgFAAgIQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQADAAACADIAFAGQAFAEAKAAQAIAAAIgEQAKgFAAgJQAAgIgJgEQgHgEgJAAQgJAAgHgDQgIgFAAgJQAAgKAMgJQALgIALAAQAGAAAHACQAJADAAAEQAAAFgFAAIgIgBIgJgCQgIAAgHAFQgGAEAAAHQAAAFAIACIAMABQANABAIAIQAHAFAAAKQAAAOgNAIQgLAIgOAAQgLAAgJgFg");
	this.shape_74.setTransform(41.1,46.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0000FF").s().p("AgYAtQgHgFAAgTIABgIIAAgKIgBgDIACgCIABgaIgBgGIAAgGQAAgHAGAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAAAIANgCIALgBQAOAAAJADQADACABAEQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgKgDgJAAIgJABIgNACIABAGIgCAXIAZgDIAPgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABABAAABQAAAEgGABIgOABIgaACIgBAIIAAAHQAAANADACQABACAIAAIAKgBIAKAAIAEAAIAEgBQAFAAAAAHQAAAFgEABQgGABgSAAQgRAAgFgFg");
	this.shape_75.setTransform(33.3,46.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0000FF").s().p("AgZAuQgDgDAAgGIABgTQACgagBghQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBAhgCAaIAAAKIgBAIQAQAAAXgIIABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgEABQgGADgOACQgNADgIAAQgGAAgDgCg");
	this.shape_76.setTransform(26.3,46.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0000FF").s().p("AgYAtIgBgEIAAgRIABgYIABgYIAAgIIABgIQABgFAEAAIAFgBIAJAAQAJAAAKAIQALAIgBALQAAAPgLAHQgKAIgMAAIgHgBIgBAfIgBAEQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgNgiIAAALIAAAXIAGAAQAIAAAHgEQAIgGgBgJQABgHgIgEQgGgFgGAAIgFAAIgEABg");
	this.shape_77.setTransform(19.8,46.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0000FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABABABAAQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_78.setTransform(13.3,46.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0000FF").s().p("AgXAkQgIgJAAgMQAAgTAQgVQAOgSANAAIAFABIAEABQACgDADAAQAFAAABAFIABAMIgCAEQgCACgDAAQgDAAgCgEQgBgEgCgBQgBgBgFAAQgJAAgJANQgOASAAAPQAAAHAFAGQAFAFAHAAQAFAAAGgDIAKgHIAGgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAAABAAABQABAAAAABQAAACgDACQgQAOgOAAQgNAAgHgJg");
	this.shape_79.setTransform(6.6,46.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0000FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABABABAAQAAAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_80.setTransform(-0.5,46.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0000FF").s().p("AgDArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_81.setTransform(-7.3,46.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0000FF").s().p("AgdAtQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgOIgBgNIABgPIABgQIAAgJIgBgJQAAgDACgDQADgDADAAIAPABQAIABAEADQAYANAAASQAAAJgIAGQgGAFgLADQATAKAJALIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgFgCQgTgTgXgHIAAAMIABALQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgSgZIABAHIgBAMIgCAKIADAAIACAAQAPAAAHgEQADAAADgDQADgEAAgCQAAgIgJgHQgIgHgJgBIgIAAg");
	this.shape_82.setTransform(-15.5,46.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0000FF").s().p("AAVAeIgEgSIgQADIgOADIgKAWQgCAEgEAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgDAJgTIgBgDQAAgFAGgBIARgcQANgWADAAQAFAAACAGIADAUIAJAoIADAJIACAGQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFAAgEgOgAgGAEIAUgEIgFgWg");
	this.shape_83.setTransform(-24,46.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0000FF").s().p("AgYAtIgCgEIAAgRIABgYIACgYIAAgIIABgIQABgFAEAAIAGgBIAIAAQAJAAAKAIQAKAIAAALQABAPgMAHQgKAIgNAAIgGgBIgBAfIgCAEQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgMgiIAAALIgBAXIAFAAQAKAAAGgEQAIgGgBgJQABgHgIgEQgGgFgGAAIgFAAIgDABg");
	this.shape_84.setTransform(-31.2,46.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0000FF").s().p("AgDApQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgHIAAgGIgBghIgMgBQgFgBgBgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAMABIAAgIIgBgHQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAABAJIAAAFIAAADIAAAEIAIgBIAIAAQADACABAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAIgDAAIgIABIABAiIAAACIABADQgBANgGAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_85.setTransform(-40.9,47.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0000FF").s().p("AAOAcIgBgMIgBgNIAAgEIAAgGQAAgNgFAAQgGAAgFAIQgGAHgDAKIAAAFIAAAHIAAAEIAAAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgGIAAgEIABgRIABgQIAAgGIgBgFQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQABAAAAAAQAFAAABAIIAAAHQAKgNAJgBQAKABADAHQADAGAAALIAAAGIAAAEIABANIACAMQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgFAAgBgGg");
	this.shape_86.setTransform(-46.7,48);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0000FF").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_87.setTransform(-53.1,48.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0000FF").s().p("AgQAhQgIgEgBgFQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQACAAADADIAGACIAHAAIAHgBQAGgBAAgEQAAgIgLgDIgFgBQgIgCgDgCQgFgDAAgGQAAgMALgGIALgDIALgEIAFgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAFIABAFQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCAAgCgDIgBgGIgOAEQgJAEAAAFIAEABQANADAGAEQAKAFAAAMQAAAJgJAFQgHAEgJAAQgHAAgIgCg");
	this.shape_88.setTransform(-59.6,47.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0000FF").s().p("AgTAZQgJgHAAgNQAAgOAHgLQAIgLANAAQAJAAAHADQAHAEAAAJQAAAGgHAEIgMAGIgVALQADAEAFADQAFACAFAAIAKgBQAHgCACgDQACgDACAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAGgKAFQgJAEgJAAQgMAAgIgHgAgLgPQgFAGgCAKIASgIQAJgFAFgEQgFgEgJAAQgGAAgFAFg");
	this.shape_89.setTransform(-65.5,48.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0000FF").s().p("AgWAbIAAgoIAAgGIAAgGQABgFAEgBQAGAAABAKQAKgLANAAQAFAAACAEQADADAAAIIgBADQABAIgGAAQgFAAAAgGIgBgEIAAgFQgJACgEADQgGAEgDAIIAAAfQAAAGgGAAQgFAAAAgGg");
	this.shape_90.setTransform(-71.6,48.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0000FF").s().p("AgWAwQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgXIAAgWIAAgYIgBgMQAAgEABgDQACgDAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIACAEIAAACIgBAEQAGgEAEgBQAEgCAEAAQAMAAAFAKQAFAJAAAOQAAALgHAJQgHAIgMAAQgFAAgHgCIAAAcQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAgAgFgeIgHAGIABAbQAFADAGAAQAIAAADgGQAEgEAAgHQAAgLgDgFQgDgFgFAAQgEAAgFACg");
	this.shape_91.setTransform(-77.8,49.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0000FF").s().p("AAIA6QgYgOAAgsQAAgPAGgQQAHgSALgIIAEgCQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAACgEAEIgFAFQgGAHgDAOQgDAMAAALQAAAdAMAOIAGAEQADADAAADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgEgCg");
	this.shape_92.setTransform(-83.1,47.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF00FF").s().p("AgHBLQgDgEAAgFQAAgQgDgeQgDgdAAgPQAAgOgEgHQgJAEgJAJIgPARIgHAIIgBAVIgCAWIACALIABAKQAAAFgEAEQgEADgFAAQgOAAAAggIABgXIABgWIgBgUIgBgUQAAgdANAAQAFAAAEAEQAEAEAAAGIAAAHIgBAIIAAANQAHgNANgLQAMgLAJAAQAUAAAHATQAHgJAJgEQAKgFANAAQAVAAAHAXQACAEAEAfQADAVAGAzQAAAFgEAEQgDADgGAAQgKAAgCgLIgFgnIgEgmQgBgJgDgJQgFgLgFAAQgEAAgNAIQgMAHgEAFIAAAYIAEAhQADAUAAANQAAAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_93.setTransform(153.9,167.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF00FF").s().p("AAcA9QgPAIgUAAQgRAAgLgHQgMgIgCgQQgFgiAAgZQAAgRAEgXQACgLAKAAQAFAAAEAEQAEADAAAGIgCATIgCATIABAjQACAPADAKIAIADIAIABQAQAAATgFIAAgaIgBgYQAAgbADgUQABgMALAAQAGAAADAEQAEADAAAGIgDAwIABAaIAAAbIAAAJIABAIQAAAGgEADQgEAEgFAAQgKAAgDgMg");
	this.shape_94.setTransform(136.9,167.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF00FF").s().p("AAIAlQgDgLgCgTIgDgbIgLAXIgTA0QgCAFgDADQgEAHgIAAQgKABgJgnQgEgTgFghIgDgTQgCgLAAgIQAAgFAEgEQAEgDAFAAQAKAAACAKIADATIACASIAHA4QAOgmAPgzQAFgOAJAAQAKAAAEAQIAIAuQAFAfAEARIAJgiIARhEQABgIAJAAQAGAAAEAEQAEADAAAFIgCAGQgKAqgQAzQgDALgIAMQgFAHgHAAQgOAAgIgig");
	this.shape_95.setTransform(121.2,167.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF00FF").s().p("AgiBHQgVgHABgNQgBgFAFgEQADgEAGAAQADAAAHAGQADADALACIAOACQAJAAAJgDQAMgDAAgIQAAgSgZgGIgLgDQgSgDgGgFQgLgHAAgOQAAgaAZgMQAIgDAPgFIAYgIQAFgCAGAAQAGAAADADQAEAEAAAGIACAKIACALQgBAGgDADQgDAEgGAAQgHAAgDgFQgCgDgBgKIgdAIQgUAJAAAMIAHACQAdAFAOAJQAUAMABAaQAAAUgSALQgQAIgVAAQgQAAgPgFg");
	this.shape_96.setTransform(105.6,166.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF00FF").s().p("AAfA+IgDgcIgCgcIAAgLIABgMQAAgbgLAAQgOAAgMARQgLAPgHAWIgBANIgBAMIABAMIABALQAAAGgDADQgEAEgFAAQgHAAgCgEQgEgDAAgGIgBgLIgBgMIACgjIACgkIAAgMIgBgMQAAgGADgDQAFgEAEAAQAMAAABARIABAOQAVgcAVAAQAVAAAIASQAFAMABAXIAAANIAAALQAAAKACARQADARAAAKQAAAGgEADQgDAEgGAAQgKAAgCgMg");
	this.shape_97.setTransform(138.2,128.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF00FF").s().p("AglA2QgRgSgBgdQgBgcAPgWQASgaAfAAQAZAAANAYQALASgBAbQAAAbgOAUQgRAWgZABQgWgBgPgPgAgWgZQgIAOAAASQAAASAKALQAIAIAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_98.setTransform(124,129.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF00FF").s().p("AAIAlQgDgLgCgTIgDgbIgLAXIgTA0QgCAFgDADQgEAHgIAAQgKABgJgnQgEgTgFghIgDgTQgCgLAAgIQAAgFAEgEQAEgDAFAAQAKAAACAKIADATIACASIAHA4QAOgmAPgzQAFgOAJAAQAKAAAEAQIAIAuQAFAfAEARIAJgiIARhEQABgIAJAAQAGAAAEAEQAEADAAAFIgCAGQgKAqgQAzQgDALgIAMQgFAHgHAAQgOAAgIgig");
	this.shape_99.setTransform(108.6,129.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF00FF").s().p("AgHBaQgEgEAAgFIAAgOIABgPIgDhJIgcgCQgLgBAAgLQAAgGADgEQADgDAGAAIAaACIAAgSIgBgPQAAgGAEgDQAEgEAFAAQAKAAACATIABALIgBAIIAAAIIASgCIASABQAHACAAAKQAAAFgDAEQgEAEgFAAIgGgBIgHAAIgRACIACBKIABAGIAAAGQAAAcgOAAQgEAAgDgDg");
	this.shape_100.setTransform(174.9,88.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF00FF").s().p("AAiBgQgDgKgCgUQgCgSAAgMIAAgKIAAgKQAAgXgMAAQgPAAgMAOQgHAHgLAVQAAAxgEAJQgEAIgHAAQgFAAgEgEQgEgEAAgFIABgFQABgDAAgQIABgTIAAhcIABgVIgBgMIgCgMQAAgGAEgDQAEgEAFAAQALAAABAMQACAMAAAKIgBAcIAAAbIAAAMQAKgOAMgHQALgHANAAQAWAAAHANQAGAKABAWIABAYIACAbIAFAaIAAADQAAAGgEADQgEAEgFAAQgJAAgDgKg");
	this.shape_101.setTransform(161.5,87.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF00FF").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCIgLgBQgXAAgOAQg");
	this.shape_102.setTransform(146.7,94.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF00FF").s().p("AAcA9QgPAIgUAAQgRAAgLgHQgMgIgCgQQgFgiAAgZQAAgRAEgXQACgLAKAAQAFAAAEAEQAEADAAAGIgCATIgCATIABAjQACAPADAKIAIADIAIABQAQAAATgFIAAgaIgBgYQAAgbADgUQABgMALAAQAGAAADAEQAEADAAAGIgDAwIABAaIAAAbIAAAJIABAIQAAAGgEADQgEAEgFAAQgKAAgDgMg");
	this.shape_103.setTransform(133.3,90.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF00FF").s().p("AglA1QgRgRgBgdQgBgcAPgWQASgaAfAAQAZAAANAYQALASgBAbQAAAbgOAUQgRAWgZABQgWgBgPgQgAgWgZQgIAOAAASQAAASAKAKQAIAJAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_104.setTransform(119.4,91);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF00FF").s().p("AgUBsQgDgDAAgFIAAgDQADgQAAgUIgBgiIAAgkIgUABQgNAAAAgMQAAgNAWAAIAMgBIACgTQADgcAMgOQAMgQAcAAQASAAAAANQAAAMgQAAQggAAgDAqIAAAIIAcgBQAUAAAAAMQAAAKgKABIgKABQgGAAgXACIgCAcIABAXIABAYQgBAYgCANQgCALgJAAQgFAAgEgEg");
	this.shape_105.setTransform(106,88);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0000FF").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCIgLgBQgXAAgOAQg");
	this.shape_106.setTransform(38.9,170.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0000FF").s().p("AAfA+IgDgcIgCgcIAAgLIABgMQAAgbgLAAQgOAAgMARQgLAPgHAWIgBANIgBAMIABAMIABALQAAAGgDADQgEAEgFAAQgHAAgCgEQgEgDAAgGIgBgLIgBgMIACgjIACgkIAAgMIgBgMQAAgGADgDQAFgEAFAAQALAAABARIABAOQAVgcAVAAQAVAAAIASQAFAMABAXIAAANIAAALQAAAKACARQADARAAAKQAAAGgEADQgDAEgGAAQgKAAgCgMg");
	this.shape_107.setTransform(25.7,167.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0000FF").s().p("AgMBcQgDgEAAgFIgBgXIAAgXIABgeIACgcQAAgGAEgEQADgDAFAAQAFAAADADQADAEAAAGIAAAcIgCAeIABAXIAAAXQAAAFgEAEQgDADgFAAQgFAAgEgDgAgHhFQgFgFAAgGQAAgGAFgEQAFgEAEAAQAGAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgGAAQgEAAgFgEg");
	this.shape_108.setTransform(15.2,164.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0000FF").s().p("AgHBLQgDgEAAgFQAAgQgDgeQgDgdAAgPQAAgOgEgHQgJAEgJAJIgPARIgHAIIgBAVIgCAWIACALIABAKQAAAFgEAEQgEADgFAAQgOAAAAggIABgXIABgWIgBgUIgBgUQAAgdANAAQAFAAAEAEQAEAEAAAGIAAAHIgBAIIAAANQAHgNANgLQAMgLAJAAQAUAAAHATQAHgJAJgEQAKgFANAAQAVAAAHAXQACAEAEAfQADAVAGAzQAAAFgEAEQgDADgGAAQgKAAgCgLIgFgnIgEgmQgBgJgDgJQgFgLgFAAQgEAAgNAIQgMAHgEAFIAAAYIAEAhQADAUAAANQAAAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_109.setTransform(1.4,167.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0000FF").s().p("AgHBLQgDgEAAgFQAAgQgDgeQgDgdAAgPQAAgOgEgHQgJAEgJAJIgPARIgHAIIgBAVIgCAWIACALIABAKQAAAFgEAEQgEADgFAAQgOAAAAggIABgXIABgWIgBgUIgBgUQAAgdANAAQAFAAAEAEQAEAEAAAGIAAAHIgBAIIAAANQAHgNANgLQAMgLAJAAQAUAAAHATQAHgJAJgEQAKgFANAAQAVAAAHAXQACAEAEAfQADAVAGAzQAAAFgEAEQgDADgGAAQgKAAgCgLIgFgnIgEgmQgBgJgDgJQgFgLgFAAQgEAAgNAIQgMAHgEAFIAAAYIAEAhQADAUAAANQAAAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_110.setTransform(-18.8,167.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0000FF").s().p("AgMBcQgDgEAAgFIgBgXIAAgXIABgeIACgcQAAgGAEgEQADgDAFAAQAFAAADADQADAEAAAGIAAAcIgCAeIABAXIAAAXQAAAFgEAEQgDADgFAAQgFAAgEgDgAgHhFQgFgFAAgGQAAgGAFgEQAFgEAEAAQAGAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgGAAQgEAAgFgEg");
	this.shape_111.setTransform(-32.5,164.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0000FF").s().p("AAIAlQgDgLgCgTIgDgbIgLAXIgTA0QgCAFgDADQgEAHgIAAQgKABgJgnQgEgTgFghIgDgTQgCgLAAgIQAAgFAEgEQAEgDAFAAQAKAAACAKIADATIACASIAHA4QAOgmAPgzQAFgOAJAAQAKAAAEAQIAIAuQAFAfAEARIAJgiIARhEQABgIAJAAQAGAAAEAEQAEADAAAFIgCAGQgKAqgQAzQgDALgIAMQgFAHgHAAQgOAAgIgig");
	this.shape_112.setTransform(-45.3,167.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0000FF").s().p("AgiBHQgVgHABgNQgBgFAFgEQADgEAGAAQADAAAHAGQADADALACIAOACQAJAAAJgDQAMgDAAgIQAAgSgZgGIgLgDQgSgDgHgFQgKgHAAgOQAAgaAZgMQAIgDAPgFIAYgIQAFgCAGAAQAGAAADADQAEAEAAAGIACAKIABALQAAAGgDADQgDAEgGAAQgHAAgDgFQgCgDgBgKIgdAIQgUAJAAAMIAHACQAdAFAOAJQAUAMABAaQAAAUgSALQgQAIgVAAQgQAAgPgFg");
	this.shape_113.setTransform(-60.9,166.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0000FF").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCIgLgBQgXAAgOAQg");
	this.shape_114.setTransform(13,132.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0000FF").s().p("AAfA+IgEgcIgBgcIAAgLIABgMQAAgbgLAAQgOAAgMARQgLAPgHAWIgBANIAAAMIAAAMIABALQAAAGgDADQgEAEgFAAQgHAAgCgEQgEgDAAgGIgBgLIgBgMIACgjIACgkIgBgMIAAgMQAAgGAEgDQADgEAGAAQAMAAAAARIABAOQAVgcAVAAQAVAAAIASQAFAMABAXIAAANIAAALQAAAKACARQADARAAAKQAAAGgEADQgDAEgGAAQgLAAgBgMg");
	this.shape_115.setTransform(-0.2,128.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0000FF").s().p("AgMBcQgDgEAAgFIAAgXIgBgXIACgeIABgcQAAgGADgEQADgDAGAAQAEAAAEADQADAEABAGIgBAcIgCAeIABAXIAAAXQAAAFgEAEQgDADgFAAQgFAAgEgDgAgHhFQgEgFgBgGQABgGAEgEQAFgEAFAAQAFAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgFAAQgFAAgFgEg");
	this.shape_116.setTransform(-10.7,125.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0000FF").s().p("AAfA+IgEgcIgBgcIAAgLIABgMQAAgbgKAAQgOAAgMARQgMAPgHAWIgBANIAAAMIAAAMIABALQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIgBgLIgBgMIACgjIACgkIgBgMIAAgMQAAgGAEgDQADgEAGAAQALAAABARIABAOQAVgcAWAAQAUAAAIASQAFAMABAXIAAANIAAALQAAAKACARQADARAAAKQAAAGgDADQgEAEgFAAQgMAAgBgMg");
	this.shape_117.setTransform(-21.1,128.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0000FF").s().p("AAfA+IgEgcIgBgcIABgLIAAgMQAAgbgKAAQgOAAgMARQgMAPgHAWIgBANIAAAMIAAAMIABALQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIgBgLIgBgMIACgjIACgkIgBgMIAAgMQAAgGADgDQAFgEAEAAQAMAAACARIAAAOQAVgcAWAAQAUAAAIASQAGAMAAAXIAAANIAAALQAAAKADARQACARAAAKQAAAGgDADQgEAEgFAAQgMAAgBgMg");
	this.shape_118.setTransform(-34.7,128.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0000FF").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIACgeIABgcQAAgGADgEQADgDAGAAQAEAAAEADQADAEAAAGIgBAcIgBAeIAAAXIABAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgEgFAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgGAAQgGAAgEgEg");
	this.shape_119.setTransform(-45.2,125.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0000FF").s().p("AAIAlQgDgLgCgTIgDgbIgLAXIgTA0QgCAFgDADQgEAHgIAAQgKABgJgnQgEgTgFghIgDgTQgCgLAAgIQAAgFAEgEQAEgDAFAAQAKAAACAKIADATIACASIAHA4QAOgmAPgzQAFgOAJAAQAKAAAEAQIAIAuQAFAfAEARIAJgiIARhEQABgIAJAAQAGAAAEAEQAEADAAAFIgCAGQgKAqgQAzQgDALgIAMQgFAHgHAAQgOAAgIgig");
	this.shape_120.setTransform(-57.9,129.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0000FF").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCIgLgBQgXAAgOAQg");
	this.shape_121.setTransform(22.3,94.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0000FF").s().p("AAfA+IgEgcIgBgcIAAgLIABgMQAAgbgKAAQgOAAgMARQgMAPgHAWIgBANIAAAMIAAAMIABALQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIgBgLIgBgMIACgjIACgkIgBgMIAAgMQAAgGAEgDQADgEAGAAQALAAABARIABAOQAVgcAWAAQAUAAAIASQAFAMABAXIAAANIAAALQAAAKACARQADARAAAKQAAAGgDADQgEAEgFAAQgMAAgBgMg");
	this.shape_122.setTransform(9.1,90.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0000FF").s().p("AgMBcQgDgEAAgFIAAgXIgBgXIACgeIABgcQAAgGADgEQADgDAGAAQAEAAAEADQAEAEAAAGIgCAcIgBAeIAAAXIABAXQAAAFgEAEQgDADgFAAQgFAAgEgDgAgHhFQgEgFgBgGQABgGAEgEQAEgEAGAAQAFAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgFAAQgGAAgEgEg");
	this.shape_123.setTransform(-1.4,87.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0000FF").s().p("AgHBaQgEgEAAgFIAAgOIABgPIgDhJIgcgCQgLgBAAgLQAAgGADgEQADgDAGAAIAaACIAAgSIgBgPQAAgGAEgDQAEgEAFAAQAKAAACATIABALIgBAIIAAAIIASgCIASABQAHACAAAKQAAAFgDAEQgEAEgFAAIgGgBIgHAAIgRACIACBKIABAGIAAAGQAAAcgOAAQgEAAgDgDg");
	this.shape_124.setTransform(-11.5,88.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0000FF").s().p("AAiBgQgDgKgCgUQgCgSAAgMIAAgKIAAgKQAAgXgMAAQgPAAgMAOQgHAHgLAVQAAAxgEAJQgEAIgHAAQgFAAgEgEQgEgEAAgFIABgFQABgDAAgQIABgTIAAhcIABgVIgBgMIgCgMQAAgGAEgDQAEgEAFAAQALAAABAMQACAMAAAKIgBAcIAAAbIAAAMQAKgOAMgHQALgHANAAQAWAAAHANQAGAKABAWIABAYIACAbIAFAaIAAADQAAAGgEADQgEAEgFAAQgJAAgDgKg");
	this.shape_125.setTransform(-24.9,87.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0000FF").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCIgLgBQgXAAgOAQg");
	this.shape_126.setTransform(-39.7,94.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0000FF").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIABgeIACgcQAAgGADgEQADgDAGAAQAFAAADADQAEAEgBAGIgBAcIgBAeIAAAXIABAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgFgFABgGQgBgGAFgEQAEgEAFAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgFAAgEgEg");
	this.shape_127.setTransform(-49.8,87.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0000FF").s().p("AgUBsQgDgDAAgFIAAgDQADgQAAgUIgBgiIAAgkIgUABQgNAAAAgMQAAgNAWAAIAMgBIACgTQADgcAMgOQAMgQAcAAQASAAAAANQAAAMgQAAQggAAgDAqIAAAIIAcgBQAUAAAAAMQAAAKgKABIgKABQgGAAgXACIgCAcIABAXIABAYQgBAYgCANQgCALgJAAQgFAAgEgEg");
	this.shape_128.setTransform(-60.5,88);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0066").s().p("AgHBLQgDgEAAgFQAAgQgDgeQgDgdAAgPQAAgOgEgHQgJAEgJAJIgPARIgHAIIgBAVIgCAWIACALIABAKQAAAFgEAEQgEADgFAAQgOAAAAggIABgXIABgWIgBgUIgBgUQAAgdANAAQAFAAAEAEQAEAEAAAGIAAAHIgBAIIAAANQAHgNANgLQAMgLAJAAQAUAAAHATQAHgJAJgEQAKgFANAAQAVAAAHAXQACAEAEAfQADAVAGAzQAAAFgEAEQgDADgGAAQgKAAgCgLIgFgnIgEgmQgBgJgDgJQgFgLgFAAQgEAAgNAIQgMAHgEAFIAAAYIAEAhQADAUAAANQAAAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_129.setTransform(-125.2,167.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0066").s().p("AgLBcQgEgEAAgFIgBgXIAAgXIABgeIACgcQAAgGADgEQADgDAGAAQAFAAADADQAEAEgBAGIgBAcIgBAeIAAAXIABAXQAAAFgDAEQgEADgEAAQgGAAgDgDgAgHhFQgFgFABgGQgBgGAFgEQAEgEAFAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgFAAgEgEg");
	this.shape_130.setTransform(-138.9,164.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0066").s().p("AAIAlQgDgLgCgTIgDgbIgLAXIgTA0QgCAFgDADQgEAHgIAAQgKABgJgnQgEgTgFghIgDgTQgCgLAAgIQAAgFAEgEQAEgDAFAAQAKAAACAKIADATIACASIAHA4QAOgmAPgzQAFgOAJAAQAKAAAEAQIAIAuQAFAfAEARIAJgiIARhEQABgIAJAAQAGAAAEAEQAEADAAAFIgCAGQgKAqgQAzQgDALgIAMQgFAHgHAAQgOAAgIgig");
	this.shape_131.setTransform(-151.6,167.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0066").s().p("AgjBHQgTgHgBgNQABgFAEgEQAEgEAFAAQAEAAAGAGQADADAKACIAPACQAKAAAIgDQALgDAAgIQAAgSgYgGIgMgDQgQgDgIgFQgKgHAAgOQAAgaAZgMQAHgDARgFIAXgIQAGgCAGAAQAFAAAEADQADAEAAAGIACAKIABALQABAGgEADQgDAEgGAAQgHAAgDgFQgCgDgBgKIgeAIQgTAJAAAMIAIACQAbAFAPAJQAVAMAAAaQgBAUgRALQgPAIgWAAQgRAAgPgFg");
	this.shape_132.setTransform(-167.2,166.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0066").s().p("AggB+QgEgDAAgEQAAgGAHgGIANgJQAcgeAAhAQAAgZgIgZQgHgegNgQIgMgLQgIgJAAgFQAAgEAEgEQACgDAGAAQACgBAGAEQAXASAQAnQAOAkAAAgQAABgg1AeQgFADgEABQgEgBgDgDg");
	this.shape_133.setTransform(-185.4,166.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0066").s().p("AglA2QgRgSgBgdQgBgcAPgWQASgaAfAAQAZAAANAYQALASgBAbQAAAbgOAUQgRAWgZABQgWgBgPgPgAgWgZQgIAOAAASQAAASAKALQAIAIAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_134.setTransform(-197.5,167.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0066").s().p("AgHBaQgEgEAAgFIAAgOIABgPIgDhJIgcgCQgLgBAAgLQAAgGADgEQADgDAGAAIAaACIAAgSIgBgPQAAgGAEgDQAEgEAFAAQAKAAACATIABALIgBAIIAAAIIASgCIASABQAHACAAAKQAAAFgDAEQgEAEgFAAIgGgBIgHAAIgRACIACBKIABAGIAAAGQAAAcgOAAQgEAAgDgDg");
	this.shape_135.setTransform(-210.3,165.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF0066").s().p("AAQB+Qg0geAAhgQAAggAOgkQAPgnAYgSQAFgEADABQAFAAAEADQADAEAAAEQAAAFgIAJIgMALQgOAQgGAeQgIAZABAZQAABAAbAeIAMAJQAIAGgBAGQAAAEgCADQgEADgEABQgEgBgGgDg");
	this.shape_136.setTransform(-220.8,166.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF0066").s().p("AAfA+IgEgcIgBgcIAAgLIABgMQAAgbgLAAQgOAAgMARQgLAPgHAWIgBANIAAAMIAAAMIABALQAAAGgDADQgEAEgFAAQgHAAgCgEQgEgDAAgGIgBgLIgBgMIACgjIACgkIgBgMIAAgMQAAgGAEgDQADgEAGAAQAMAAAAARIABAOQAVgcAVAAQAVAAAIASQAFAMABAXIAAANIAAALQAAAKACARQADARAAAKQAAAGgEADQgDAEgGAAQgLAAgBgMg");
	this.shape_137.setTransform(-141,128.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0066").s().p("AgMBcQgDgEAAgFIAAgXIgBgXIACgeIABgcQAAgGADgEQADgDAGAAQAEAAAEADQADAEABAGIgBAcIgCAeIABAXIAAAXQAAAFgEAEQgDADgFAAQgFAAgEgDgAgHhFQgEgFgBgGQABgGAEgEQAFgEAFAAQAFAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgFAAQgFAAgFgEg");
	this.shape_138.setTransform(-151.5,125.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0066").s().p("AAIAlQgDgLgCgTIgDgbIgLAXIgTA0QgCAFgDADQgEAHgIAAQgKABgJgnQgEgTgFghIgDgTQgCgLAAgIQAAgFAEgEQAEgDAFAAQAKAAACAKIADATIACASIAHA4QAOgmAPgzQAFgOAJAAQAKAAAEAQIAIAuQAFAfAEARIAJgiIARhEQABgIAJAAQAGAAAEAEQAEADAAAFIgCAGQgKAqgQAzQgDALgIAMQgFAHgHAAQgOAAgIgig");
	this.shape_139.setTransform(-164.3,129.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0066").s().p("AggB+QgEgDAAgEQAAgGAHgGIANgJQAcgeAAhAQAAgZgIgZQgHgegNgQIgMgLQgIgJAAgFQAAgEAEgEQACgDAGAAQACgBAGAEQAXASAQAnQAOAkAAAgQAABgg1AeQgFADgEABQgEgBgDgDg");
	this.shape_140.setTransform(-185.4,128);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF0066").s().p("AglA2QgRgSgBgdQgBgcAPgWQASgaAfAAQAZAAANAYQALASgBAbQAAAbgOAUQgRAWgZABQgWgBgPgPgAgWgZQgIAOAAASQAAASAKALQAIAIAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_141.setTransform(-197.5,129.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0066").s().p("AgHBaQgEgEAAgFIAAgOIABgPIgDhJIgcgCQgLgBAAgLQAAgGADgEQADgDAGAAIAaACIAAgSIgBgPQAAgGAEgDQAEgEAFAAQAKAAACATIABALIgBAIIAAAIIASgCIASABQAHACAAAKQAAAFgDAEQgEAEgFAAIgGgBIgHAAIgRACIACBKIABAGIAAAGQAAAcgOAAQgEAAgDgDg");
	this.shape_142.setTransform(-210.3,126.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0066").s().p("AAQB+Qg0geAAhgQAAggAOgkQAPgnAYgSQAFgEADABQAFAAAEADQADAEAAAEQAAAFgIAJIgMALQgOAQgGAeQgIAZABAZQAABAAbAeIAMAJQAIAGgBAGQAAAEgCADQgEADgEABQgEgBgGgDg");
	this.shape_143.setTransform(-220.8,128);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0066").s().p("AgHBaQgEgEAAgFIAAgOIABgPIgDhJIgcgCQgLgBAAgLQAAgGADgEQADgDAGAAIAaACIAAgSIgBgPQAAgGAEgDQAEgEAFAAQAKAAACATIABALIgBAIIAAAIIASgCIASABQAHACAAAKQAAAFgDAEQgEAEgFAAIgGgBIgHAAIgRACIACBKIABAGIAAAGQAAAcgOAAQgEAAgDgDg");
	this.shape_144.setTransform(-117.8,88.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0066").s().p("AAiBgQgDgKgCgUQgCgSAAgMIAAgKIAAgKQAAgXgMAAQgPAAgMAOQgHAHgLAVQAAAxgEAJQgEAIgHAAQgFAAgEgEQgEgEAAgFIABgFQABgDAAgQIABgTIAAhcIABgVIgBgMIgCgMQAAgGAEgDQAEgEAFAAQALAAABAMQACAMAAAKIgBAcIAAAbIAAAMQAKgOAMgHQALgHANAAQAWAAAHANQAGAKABAWIABAYIACAbIAFAaIAAADQAAAGgEADQgEAEgFAAQgJAAgDgKg");
	this.shape_145.setTransform(-131.2,87.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0066").s().p("AgrBjQgQgEAAgKQAAgLALAAIAPACQALADANgBQAXAAAJgXQAGgQABggQgHANgKAGQgJAGgLAAQgXAAgPgPQgOgQAAgYQAAgiAUgVQAUgWAiAAQAMAAAIADQAIADAEAGQANABAAAPQAAAJgCAPIgEAYIgDApQAAAagFAQQgFAUgNAKQgPAMgcAAQgRAAgLgCgAgXg/QgMAPAAAXQAAATAHAIQAHAJAOAAQAMAAAMgNQALgOACgNQACgNADgeQgFgEgFgCIgLgBQgXAAgOAQg");
	this.shape_146.setTransform(-146,94.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0066").s().p("AgMBcQgDgEAAgFIAAgXIgBgXIACgeIABgcQAAgGADgEQAEgDAFAAQAFAAADADQAEAEAAAGIgBAcIgCAeIAAAXIABAXQAAAFgEAEQgDADgFAAQgFAAgEgDgAgHhFQgEgFgBgGQABgGAEgEQAEgEAGAAQAFAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgFAAQgGAAgEgEg");
	this.shape_147.setTransform(-156.1,87.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0066").s().p("AgUBsQgDgDAAgFIAAgDQACgQAAgUIAAgiIAAgkIgUABQgNAAAAgMQAAgNAWAAIAMgBIADgTQACgcALgOQANgQAcAAQASAAAAANQAAAMgQAAQgfAAgEAqIgBAIIAcgBQAVAAAAAMQAAAKgKABIgKABQgGAAgXACIgBAcIAAAXIABAYQAAAYgDANQgCALgJAAQgGAAgDgEg");
	this.shape_148.setTransform(-166.8,88);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0066").s().p("AggB+QgEgDAAgEQAAgGAHgGIANgJQAcgeAAhAQAAgZgIgZQgHgegNgQIgMgLQgIgJAAgFQAAgEAEgEQACgDAGAAQACgBAGAEQAXASAQAnQAOAkAAAgQAABgg1AeQgFADgEABQgEgBgDgDg");
	this.shape_149.setTransform(-185.4,89.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0066").s().p("AglA1QgRgRgBgdQgBgcAPgWQASgaAfAAQAZAAANAYQALASgBAbQAAAbgOAUQgRAWgZABQgWgBgPgQgAgWgZQgIAOAAASQAAASAKAKQAIAJAMAAQAMAAAJgKQALgKABgSQABgxgcAAQgSAAgKASg");
	this.shape_150.setTransform(-197.5,91);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0066").s().p("AgHBaQgEgEAAgFIAAgOIABgPIgDhJIgcgCQgLgBAAgLQAAgGADgEQADgDAGAAIAaACIAAgSIgBgPQAAgGAEgDQAEgEAFAAQAKAAACATIABALIgBAIIAAAIIASgCIASABQAHACAAAKQAAAFgDAEQgEAEgFAAIgGgBIgHAAIgRACIACBKIABAGIAAAGQAAAcgOAAQgEAAgDgDg");
	this.shape_151.setTransform(-210.3,88.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF0066").s().p("AAQB+Qg0geAAhgQAAggAOgkQAPgnAYgSQAFgEADABQAFAAAEADQADAEAAAEQAAAFgIAJIgMALQgOAQgGAeQgIAZABAZQAABAAbAeIAMAJQAIAGgBAGQAAAEgCADQgEADgEABQgEgBgGgDg");
	this.shape_152.setTransform(-220.8,89.7);

	this.instance = new lib.INFINITIVES();
	this.instance.parent = this;
	this.instance.setTransform(-165.7,35.1,0.771,0.771);

	this.instance_1 = new lib.GERUNDS("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11.5,29.2,0.772,0.772);

	this.instance_2 = new lib.PARTICIPLES();
	this.instance_2.parent = this;
	this.instance_2.setTransform(146,32,0.865,0.865,0,0,0,-1.9,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Chart, new cjs.Rectangle(-238,-33.1,470.7,224.9), null);


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


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,"press":1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}
	this.frame_5 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// check_enabled
	this.instance = new lib.fcb_check_1();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// check_disabled
	this.instance_1 = new lib.fcb_check_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// background pressed/disabled
	this.instance_2 = new lib.fcb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fcb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

	// background static
	this.frb_frame_mc = new lib.fcb_background_1();
	this.frb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(6));

	// check box frame
	this.fcb_frame_mc = new lib.fcb_frame();
	this.fcb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.fcb_frame_mc).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


// stage content:
(lib.intro_Scene6a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6a:0,scene6a_repeat:323});

	// timeline functions:
	this.frame_4 = function() {
		playSound("verbalshortdef");
	}
	this.frame_66 = function() {
		playSound("infinitiveschart");
	}
	this.frame_130 = function() {
		playSound("gerundschart");
	}
	this.frame_211 = function() {
		playSound("participlechart");
	}
	this.frame_322 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_331 = function() {
		this.gotoAndPlay("scene6a_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(62).call(this.frame_66).wait(64).call(this.frame_130).wait(81).call(this.frame_211).wait(111).call(this.frame_322).wait(9).call(this.frame_331).wait(1));

	// content
	this.instance = new lib.VERBAL2();
	this.instance.parent = this;
	this.instance.setTransform(262.2,21,0.526,0.526);

	this.instance_1 = new lib.Chart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(256.1,74.7,0.875,0.875,0,0,0,-18.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(332));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF99FF").ss(3,1,1).p("EAhQAX4MhCfAAAMAAAgvvMBCfAAAg");
	this.shape.setTransform(269.3,194.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D5FFFF","#FFFFFF"],[0,1],0,-120.9,0,121).s().p("EghPAX4MAAAgvvMBCfAAAMAAAAvvg");
	this.shape_1.setTransform(269.3,194.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(332));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: 'E00996C2EFCD9C4CAA462E504035296C',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmIntro.mp3", id:"bgmIntro"},
		{src:"sounds/gerundschart.mp3", id:"gerundschart"},
		{src:"sounds/infinitiveschart.mp3", id:"infinitiveschart"},
		{src:"sounds/participlechart.mp3", id:"participlechart"},
		{src:"sounds/verbalshortdef.mp3", id:"verbalshortdef"}
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
an.compositions['E00996C2EFCD9C4CAA462E504035296C'] = {
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