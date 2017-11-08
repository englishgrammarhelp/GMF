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


(lib.anim_bub_talks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhGATQAVgjArgRQARgHAUgCQAWgBASgEQgJAKgCAOIgKgBIgaAJQgMADgHALIgBgBQgDgEgCgCIgEgDQgdAHgPAYQgIAOgBAOQgHgMgFgRg");
	this.shape.setTransform(87.4,74.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhBAOQAEADAEgDIACgBIABgDQAFgKAGgKQAMgXAQAJIABACIADAEQAIAJAHgHQAAgEADgDIABgDIABgCQABgFADgDIAOgDIAXgDIABADQADAZAMAIQgUANgTAWQgLAMgQABIgJABQglAAgTgdg");
	this.shape_1.setTransform(88.4,78.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhUAdQgag0A8gdQApgUAqgLQAaABAXALIABABIgQAFQABAMgBAPQALACALAEIABACIgZAGIgCANIAAACQAOAOAQAKQgLAEgIgCQgJAagcAUQgeAVgXAAQgpAAgbg3gAAAA/QAPgBALgMQATgWAUgOQgMgIgDgYIgBgDIgXADIgOADQgDADgBAFIgBACIgBADQgDACAAAEQgHAHgIgJIgDgDIgBgCQgQgJgMAWQgGAKgFALIgBADIgCABQgEADgEgDQAWAhAsgFgAAUg6QgTABgSAIQgqAQgVAjQAFARAHAMQAAgOAIgNQAPgZAegGIADACQAEADACAEIABABQAGgLAMgEIAbgIIAKAAQACgNAIgLQgSAEgWACg");
	this.shape_2.setTransform(88.5,76.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhDAeQAggQAqgOQAhgKAZgUQAKATggARQgsAZgsAAIgWgBg");
	this.shape_3.setTransform(89.6,73.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhWAUQgBghAdgSQAJgGAJACQBAAIA/gGQgIAOABAOIgCgBIgFgBIgTgBQgHACgHAGQgHAFgIABQgEgBgDgDIgDgCQgTgDgUAFQgeAKgPAYQgKgGgHgKg");
	this.shape_4.setTransform(78.2,76.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhEgGIAAgBIAEgEIAMgKQAVgHAVABQABACADABQAKAHANgDIACgCQAEgGAHgDIAEgDIAQAAIABAAQAHAGAJADIACADQgGAHgGAJQgKARgRAJQgcAPgTAAQgjAAgQgpg");
	this.shape_5.setTransform(80.2,81);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhbAlQgSAKgTgYIgFgFQgGhRBXAAQAWgBAWAFQAkAIAhgFIABAAIAAAAIAAAAQAlgEAhgTQAMAUgpAHIgmAGQAEAOgCAUIAAAAIACABQAFABABAEQAKABgEAJIAAABIgFAGQABACgBADQgDAFgFgBQgcAfggAWQgIAFgJABIgSABQgzAAgNgrgAhCAIIgLAKIgFAEIABABQAZBDBIgoQARgJALgSQAFgJAGgHIgBgDQgJgCgHgGIgBAAIgQAAIgFADQgHACgEAGIgCACQgLADgMgHQgCgBgCgCIgDAAQgTAAgUAGgAhcAfIAAAAIAAAAgAhcgsQgdASABAiQAHAJAKAHQAPgYAegJQAUgGAUADIADADQADADAEABQAIgBAGgGQAHgGAHgCIATABIAFABIACABIAAgBQgBgOAIgNQg+AGhBgJIgEAAQgHAAgHAEg");
	this.shape_6.setTransform(81.6,78);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgXAXIgBgCQgMgdAXgUIACAAQAQABAOAHIABAEIABAFIADAFQAEAGACAHQgYgBgLAWIgFABQgIAAgFgGg");
	this.shape_7.setTransform(97.4,72.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqAbQgPgrAlgZIAFgDIAtAMIADACQgBALAGAJIADAFIAGAXQABAFgCADQgOADgPgDQgJAHgHAJQgHADgHAAQgSAAgLgSgAgPgbQgXAUAMAdIABACQAHAIALgDQALgWAYABQgCgIgEgFIgDgFIgBgFIgBgEQgOgHgQgBIgCAAg");
	this.shape_8.setTransform(97.6,72.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgOAXIgGgCIgFgFIgFgFIACgCQAYgaAigGIABABIgEAEIgHAFQgEAJgGAHQgHAMgJAJIgIgBg");
	this.shape_9.setTransform(86.4,77.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhFAbQAPg6BLgGQAZgCAVgFQALAUgpAEIABABQgdAUgbAjQgEAFgFAEIgEAAQgWAAgQgSgAg2APIgCACIAGAFIAFAFIAGACIAHAAQAKgIAIgMQAFgIAEgIIAHgGIAEgDIAAgBIgBAAQgiAGgZAag");
	this.shape_10.setTransform(89,76.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_10},{t:this.shape_9}]},2).wait(2));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AmOgbQAFgsAQgmQAKgZAUgQQARgOAPgKQgUgBgSAAQgHAAgHACQgYAIgbAAQALgSAPgLQAGgEAIgCQAUgSAegHQAUgEARAEQAPAIAEgJQAOgZAIgeQADgKACgLQAEgZAOgKQAAADABACQACAFACAFQALAWAPAYQAPgHAKgRQASgRAVgQQAdgXAmgVQAHgGAVgFQAFgEAIgEQAVgIAWgFQAGgBAFgBQAIgCAHAAQAdgBASADQAdgCAZACQAFABAFAAQAYABARAHQAFACAFABQAXADAMAOQgsAJgvAIQgNABgHAMQgBACgBACQADAAAEAAQAXABAWgEQAGABAEgBQARAEATgCQAmAAARAbQgIAIgMgBQgDAAgDAAQgTgBgUgBQgDAAgCAAADZk9QARABAOAHQAEACAEACQAZAPASARQANANABAOQgOgFgPAAQgBAAgBAAIAAAAQgEAAgEAAQgFABgGABQgdAAgcAAQgBAAgBABQgGACgGACQgEABgEAAQgGABgHAAQgvAAgsAHQgKACgKgDQgVAHgQAEQgdAKAFAeQACALgBAKQAAABAAABQAAAJgDAIQgJgIgHgEQgUgLgVgIQADAVAEAUQADAMgBANQgBAIAAAHQABARgJAEQgCgDgCgDQgDgEgFgEQgYgUgTgRQAGAigDAlQgBAKABAKQABAegUATQgOg2glgyQgMgPgLAKQgfAdgYAdQgFAFgBgCQAAgBAAgEQABgDgMAbQgCgDgCgCQAAAAgBgBQgIgHgQAHQgEABgCAHQgHAFgGAHQAAAAAAAAQgEAFgEAHQgBABAAACQgCAEgBADQAAABgBABQgagQgBgJQAAgBAAgCQAAgCABgDQABgIAAgIIAAgBQABgGABgHQACgOgJgBQgTAHgHASQAAABAAABQgCAAgCAAQAAACAAACQAAABAAABIAAAAQAAABAAABIAAABQAAgBABgBIAAAAQABgDACgEQAEAAAEgBQgCADgDAEQAAACgBABIAAAAIgBABQAAABgBAAQgDAHgFAGQgDAEgDAFQgIALgIAMQgWAjgTAkQgJARgKAOQgMARARgCADsjiQgnABgBAAQgHgBgDAAQABACAAABQABABAAABQABAAAAABQABACABADQAEAJADAKQACAFACAGQARgQAKgTQADgEAEgCQAGgDAIACAEHj5QAeAOAKAOQAWATgBAeQAEAMAAAKQgCgGgDgFQgHgEgFgDQgBAAAAgBQgPgZgcAIQgNABgLAPQgDAFgDAGQgDAOADAMQABAFACADQACAEACAEQAAABABABQABACACACQAEABADAEQASADATgBQADAAADAAQAHgBAHgBQADgBACgEQAOgSgCgQQApASAmAOQAIADAIAEQAbANAPAWQAHALAFAMQADAHACAHQAGAbAAAcQAAArgCAqQAAAFgBAFQgBAOgEAIQgCAEgBAEQgOAwgdAjQgEAEgCAFQgNAWgVAPQgEADgEAEQgEAEgEADQhDA9hfAIQgFABgFABQgkAKgegJQgUgGgTgEQgbgDgZgIQgdgKgGgbAEvibQggAFALAiQAAABAJADQAfgCgIgjQgBgGgGgEQAAAAgBgBAENgCQgGgGAHgOQABgBAAgBQAIgOAPgKQAEgBAFgDQAYgDAQAQAHShHQBfARAsANQAIADAHACQABASAAASQAAEBi2C2Qi2C2kBAAQkAAAi3i2QiiiigRjeQAGgFAHgFQAKgHALgFQAagNAdgQQAsgXAugGQAFgBAGgCQACAAACgBQAKgBAGACQABABAJAAAJsgkQgMjpipipQi2i2kBAAQkAAAi3C2Qi1C2AAEAQAAAcACAbAB2lsQgLgCABAIACBlcQgLAAgJAAQgFABgDAAABUi8QgQgCgSAAQgJAAgHAJQgKAJgEANQgCAGAAAGQAHgDAIgEQAKgEALgEQABAAABAAQABAAAAgBQAJgDAKgCQAJgDAHgCQAEgCAEgCQADgBADgCQgCgDgDgDQgIgBgJgBgABli6QgGgFgLADAmCgcQAJgJAJAIQgKABgIAAgAlSAYQgPApATAqQAEAHADAHQAHAPASAGQAFACAFACQAaALAdgKQAmgMAXgTABRhwQgCAAgBAAQgDABgCAAQgKAEgHAIQgRARAEAcQACAOAFALQAHAPASAHQAaAJAWgMQADAAADAAQAKgCAHgHQAOgJAMgMQAFgIADgIQADgJABgJQAAgFgDgFIAAAAQgCgFgDgEQgBgBgBgBIAAAAQgEgFgFgDQgBAAgCgBQgDgBgDgBQgKgBgFgBQgIgBgggCQgFgBgCAAQgHgBgGABgAB+hfQgMAGgQARQgFAFgCAIQgEAXASAEQADABADABQAHAEAHgBQAGAAAGgGQAOgMAIgUQACgEAAgFQAAgJgCgGQgDgFgFgDQgCAAgCgBQgIgBgNAEQgBgBgCAAQAAACACgBQABAAAAAAABlhvQgJAAgLgB");
	this.shape_11.setTransform(62.1,62.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhbA/IgGgCQgSgEAEgXQACgIAFgFQAQgSAMgEQAJACAMgFIAEABQAFADADAEQACAGAAAJQAAAFgCAEQgIAUgOAMQgFAGgHAAIgCABQgGAAgGgEgABPgWQgLgiAggFIAEgFIAAABQAGAEABAGQAIAjgfACQgJgDAAgBg");
	this.shape_12.setTransform(82.4,52.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhuBYQgRgHgHgPQgGgLgCgOQgDgcAQgQQAHgIAKgEIAGgBIACAAIAUABIAoADIAPACIAGACIAEABQAEADAEAEIAAAAIACACIAFAJIABAAQACAFAAAFQAAAJgDAJQgDAIgGAIQgLAMgOAJQgHAHgLACIgFAAQgNAIgNAAQgLAAgMgFgAg6AAQgMAFgQASQgFAFgDAIQgDAXASAEIAGACQAHAEAGgBQAHAAAGgGQANgMAJgUQACgEAAgFQAAgJgDgGQgCgFgGgCIgEgBQgIgBgNADIgCAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAAAAgABGgKQgDgEgEgBIgEgEIgBgCIgEgIIgCgIQgDgMACgOIAGgLQALgPAOgBQAcgIAOAZIABABIAMAHQAEAFABAGIABAFQACAQgOASQgBAEgDABIgOACIgHAAIgLABQgNAAgMgDgAB1g7QggAFALAiQABABAJADQAegCgHgjQgCgGgFgEIgBgBg");
	this.shape_13.setTransform(80.7,52.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC99").s().p("AAAG0QkBAAi3i3QiiiigRjdIANgJQAKgHALgGQAagMAdgRQAsgXAugHIALgCIAEgBQAKgCAGADIAKAAIAAAEIAAADIAAAAIAAACIAAAAIABgCIAAAAIADgHIAAgBQAHgSATgIQAJACgCANIgCAOIAAAAIgBARIgBAFIAAACQABAKAaAQIABgBIADgIIABgDIAIgMIAAgBQAGgHAHgEQACgHAEgCQAQgGAIAHIABAAIAEAGQAMgbgBADIAAAEQABADAFgGQAYgcAfgdQALgLAMAQQAlAxAOA4QAUgVgBgeQgBgKABgKQADglgGghIArAlQAFADADAFIAEAFQAJgEgBgQQAAgIABgHQABgNgDgNQgEgUgDgUQAVAIAUALQAHAEAJAIQADgIABgKIAAgBQAAgKgCgMQgFgeAdgKQAQgDAVgHQAKACAKgBQAsgIAvABIANgBIAIgCIAMgEIACgBIA5ABQAeAOAKANQAWATgBAfQAEALAAAKQgCgFgDgGIgMgGIgBgBQgPgZgcAIQgNAAgLAQIgGAKQgDAPADAMIADAIIAEAHIABACIADAFQAEABADAEQASADATgBIAGgBIAOgCQADgBACgDQAOgSgCgRQApATAmAOIAQAHQAaAMAQAXQAHAKAFANIAFAOQAGAaAAAdQAAArgCArIgBAKQgBAOgEAHIgDAJQgOAvgdAiIgGAJQgNAXgVAPIgIAGIgIAIQhDA8hfAJIgKACIgBAAIgBAAQgRAFgQAAIgBAAIAAAAQgQAAgOgFIgngJQgbgEgZgIQgdgJgGgbQAGAbAdAJQAZAIAbAEIAnAJQAOAFAQAAIAAAAIABAAQAQAAARgFIABAAIABAAIAKgCQBfgJBDg8IAIgIIAIgGQAVgPANgXIAGgJQAdgiAOgvIADgJQAEgHABgOIABgKQACgrAAgrQAAgdgGgaIgFgOQgFgNgHgKQBfARAsANIAPAFIABAkQAAEBi2C1Qi2C3kAAAIAAAAgAkJghQANAAANgEIABAAQAmgMAXgTQgXATgmAMIgBAAQgNAEgNAAIAAAAIAAAAQgNAAgNgEIAAAAIgBgBIgBAAIgKgEQgSgGgHgPIgHgPQgLgXAAgXQABgTAGgSQgGASgBATQAAAXALAXIAHAPQAHAPASAGIAKAEIABAAIABABIAAAAQANAEANAAIAAAAIAAAAgAnjgmIABAAIACAAIgCAAIgBAAIAAAAIAAAAQgNAAAKgPIABAAQAKgOAJgRQASgkAXgkIAQgXIAGgJIAIgNIABgCIABAAIAAAAIABgDIAFgHIASgCQgJgIgJAKIgIAAIAIAAIgFAHIgBADIAAAAIgBAAIgBACIgIANIgGAJIgQAXQgXAkgSAkQgJARgKAOIgBAAQgKAPANAAIAAAAIAAAAgAEMi7QgDgDAAgFQAAgFAEgIIABgCQAIgNAPgKIAJgFIAGAAIABAAIAAAAQATAAAOANQgOgNgTAAIAAAAIgBAAIgGAAIgJAFQgPAKgIANIgBACQgEAIAAAFQAAAFADADgABQkqIgDABIgFABQgKADgHAIQgRASAEAcQACANAFAMQAHAPASAGQAaALAWgNIAGgBQAKgCAHgGQAOgJAMgNQAFgHADgJQADgIABgKQAAgFgDgFIAAAAIgFgJIgCgCIAAAAQgEgEgFgDIgDgCIgGgCIgPgCIgogCIgBAAIgCgBIgDAAIAAAAIAAAAIgBAAIgIgBIgBAAIAAAAIgCAAIgCAAIAAAAgAAxl3QgJAAgHAJQgKAJgEAMQgCAGAAAGIAPgGIAVgIIACgBIABAAIATgGIAQgFIAIgDQADgBADgDIgFgFQgGgGgLAEQgOgCgPAAIgFAAgAC6mZIABACIABABIACAFIAHATIAEALQARgQAKgSQACgFAFgCIADgBIAAAAIADAAIAAAAIABAAIAFAAIABABIABAAIgBAAIgBgBIgFAAIgBAAIAAAAIgDAAIAAAAIgDABIgoABIgKAAIABACgABQkqIACAAIACAAIAAAAIABAAIAIABIABAAIAAAAIAAAAIADAAIACABIABAAIgUgCg");
	this.shape_14.setTransform(62.2,80.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#996633").s().p("Ak3DBIAAgCIAAgFIACgRIAAAAIABgOQACgNgIgCQgUAIgGASIgBABIgDAAQAEgsAQgmQALgYATgQQASgPAOgKIgmgBQgHAAgHACQgYAIgbAAQALgRAQgMQAFgDAIgBQAUgSAegHQAUgFARAFQAPAHAEgIQAOgaAJgdQADgLABgLQAEgYAOgKIABAFIAFAKQALAVAOAYQAPgGAKgSQASgQAWgRQAcgXAmgUQAHgGAUgFQAFgFAJgDQAUgJAYgFIALgCIAPgCQAcgBATAEQAcgCAaACIAKAAQAYABAQAHIALADQAXAEALANIhbASQgNABgHALIgCAEIAHAAQAXABAXgDQAFABAFgBQARADASgCQAmABASAbQgJAIgLgBIgHgBIgngBIgFAAIAFAAQARAAAOAIIAIAEQAZAOATASQAMAMABAOQgNgFgQAAIgBAAIgBAAIgIABIgLACIg5gBIgCABIgLAEIgIACIgNABQgvgBgtAIQgKABgKgCQgVAHgQADQgdAKAEAdQADAMAAAKIAAABQgBAJgEAJQgJgIgHgEQgTgLgVgIQADAUAEAUQACANgBANQgBAHABAIQAAAQgHAEIgFgFQgDgFgFgDIgrglQAHAhgEAlQgBAKABAKQABAegTAVQgPg4glgxQgLgQgMALQgfAdgXAcQgFAFgBgCIAAgEQAAgDgMAbIgEgGIgBgBQgHgGgRAGQgEACgCAHQgHAEgFAHIgBABIgIAMIgBADIgDAIIAAABQgagQgBgKgACiiZIgIABIAIgBIAFAAIAIAAIABAAIAAAAIACAAIAEAAIgEAAIgCAAIAAAAIgBAAIgIAAIgFAAgACiiiIgBAAQAAgHAHAAIAAAAIABAAIADAAIgDAAIgBAAIAAAAQgHAAAAAHIABAAIAAAAgABJAjQAEgMAKgJQAHgJAJAAQASgBARACIARADIAEAFQgCADgDABIgJADIgQAFIgSAGIgBAAIgDABIgVAIIgOAGQAAgGABgGgAD8gBIgHgTIgDgFIAAgBIgBgCIgCgCIAKAAIAogBQgEACgDAFQgKASgRAPIgDgKg");
	this.shape_15.setTransform(56.8,42.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C6FFFF").s().p("ApsEbQAAkBC2i1QC2i2EBAAQEBAAC2C2QCpCoAMDqIgQgFQgrgOhfgQQgQgXgagMIgQgHQgmgOgqgTIgBgFQAAgKgEgLQACgfgWgTQgLgNgegOIALgCIAIgBIABAAIABAAQAQAAANAFQgBgOgMgMQgTgRgZgOIABgLIAGABQAMABAIgIQgSgbgmgBQgSACgRgDQgFABgFgBQgXADgXgBIgHAAIACgEQAHgLANgBIBcgSQgMgNgXgEIgLgDQgQgHgYgBIgKAAQgZgCgdACQgSgEgdABIgPACIgLACQgWAFgVAJQgIADgGAFQgVAFgHAGQglAUgdAXQgVARgTAQQgKARgPAGQgOgXgLgVIgEgKIgBgFQgPAKgEAYQgBALgDAKQgJAdgNAaQgFAIgPgHQgQgFgUAFQgfAHgUASQgHABgGAEQgQAMgLARQAcAAAXgIQAHgCAIAAIAlABQgOAKgSAPQgTAQgLAYQgQAmgEAsIgLAAQgGgDgJACIgFABIgLACQguAHgsAXQgcARgbAMQgLAGgKAHIgMAJQgDgbAAgcg");
	this.shape_16.setTransform(62.1,33.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AmOgbQAFgsAQgmQAKgZAUgQQARgOAPgKQgUgBgSAAQgHAAgHACQgYAIgbAAQALgSAPgLQAGgEAIgCQAUgSAegHQAUgEARAEQAPAIAEgJQAOgZAIgeQADgKACgLQAEgZAOgKQAAADABACQACAFACAFQALAWAPAYQAPgHAKgRQASgRAVgQQAdgXAmgVQAHgGAVgFQAFgEAIgEQAVgIAWgFQAGgBAFgBQAIgCAHAAQAdgBASADQAdgCAZACQAFABAFAAQAYABARAHQAFACAFABQAXADAMAOQgsAJgvAIQgNABgHAMQgBACgBACQADAAAEAAQAXABAWgEQAGABAEgBQARAEATgCQAmAAARAbQgIAIgMgBQgDAAgDAAQgTgBgUgBQgDAAgCAAADZk9QARABAOAHQAEACAEACQAZAPASARQANANABAOQgOgFgPAAQgBAAgBAAIAAAAQgEAAgEAAQgFABgGABQgdAAgcAAQgBAAgBABQgGACgGACQgEABgEAAQgGABgHAAQgvAAgsAHQgKACgKgDQgVAHgQAEQgdAKAFAeQACALgBAKQAAABAAABQAAAJgDAIQgJgIgHgEQgUgLgVgIQADAVAEAUQADAMgBANQgBAIAAAHQABARgJAEQgCgDgCgDQgDgEgFgEQgYgUgTgRQAGAigDAlQgBAKABAKQABAegUATQgOg2glgyQgMgPgLAKQgfAdgYAdQgFAFgBgCQAAgBAAgEQABgDgMAbQgCgDgCgCQAAAAgBgBQgIgHgQAHQgEABgCAHQgHAFgGAHQAAAAAAAAQgEAFgEAHQgBABAAACQgCAEgBADQAAABgBABQgagQgBgJQAAgBAAgCQAAgCABgDQABgIAAgIIAAgBQABgGABgHQACgOgJgBQgTAHgHASQAAABAAABQgCAAgCAAQAAACAAACQAAABAAABIAAAAQAAABAAABIAAABQAAgBABgBIAAAAQABgDACgEQAEAAAEgBQgCADgDAEQAAACgBABIAAAAIgBABQAAABgBAAQgDAHgFAGQgDAEgDAFQgIALgIAMQgWAjgTAkQgJARgKAOQgMARARgCADsjiQgnABgBAAQgHgBgDAAQABACAAABQABABAAABQABAAAAABQABACABADQAEAJADAKQACAFACAGQARgQAKgTQADgEAEgCQAGgDAIACAEHj5QAeAOAKAOQAWATgBAeQAEAMAAAKAFJiRQApASAmAOQAIADAIAEQAbANAPAWQAHALAFAMQADAHACAHQAGAbAAAcQAAArgCAqQAAAFgBAFQgBAOgEAIQgCAEgBAEQgOAwgdAjQgEAEgCAFQgNAWgVAPQgEADgEAEQgEAEgEADQhDA9hfAIQgFABgFABQgkAKgegJQgUgGgTgEQgbgDgZgIQgdgKgGgbAENgCQgGgGAHgOQABgBAAgBQAIgOAPgKQAEgBAFgDQAYgDAQAQAHShHQBfARAsANQAIADAHACQABASAAASQAAEBi2C2Qi2C2kBAAQkAAAi3i2QiiiigRjeQAGgFAHgFQAKgHALgFQAagNAdgQQAsgXAugGQAFgBAGgCQACAAACgBQAKgBAGACQABABAJAAAJsgkQgMjpipipQi2i2kBAAQkAAAi3C2Qi1C2AAEAQAAAcACAbACBlcQgLAAgJAAQgFABgDAAAB2lsQgLgCABAIABUi8QgQgCgSAAQgJAAgHAJQgKAJgEANQgCAGAAAGQAHgDAIgEQAKgEALgEQABAAABAAQABAAAAgBQAJgDAKgCQAJgDAHgCQAEgCAEgCQADgBADgCQgCgDgDgDQgIgBgJgBQALgDAGAFAmCgcQAJgJAJAIQgKABgIAAgAlSAYQgPApATAqQAEAHADAHQAHAPASAGQAFACAFACQAaALAdgKQAmgMAXgT");
	this.shape_17.setTransform(62.1,62.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ah2AyQgMgUAYgQIALgHQALgHAPgCIAHgBIABAAIAFAAQAggGAFAWQABAGgHABIglADQgeADgTAWQgCACgDAAIgCAAgAA6gIIgCgBIgCgBQgDgCgBgDQgBgEABgFQAKgKAMgHQAIgFAIgBQAhgIACAZQAAAGgGACQgdgGgXAVIgHgBg");
	this.shape_18.setTransform(81,52);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("AAAG0QkBAAi3i3QiiiigRjdIANgJQAKgHALgGQAagMAdgRQAsgXAugHIALgCIAEgBQAKgCAGADIAKAAIAAAEIAAADIAAAAIAAACIAAAAIABgCIAAAAIADgHIAAgBQAHgSATgIQAJACgCANIgCAOIAAAAIgBARIgBAFIAAACQABAKAaAQIABgBIADgIIABgDIAIgMIAAgBQAGgHAHgEQACgHAEgCQAQgGAIAHIABAAIAEAGQAMgbgBADIAAAEQABADAFgGQAYgcAfgdQALgLAMAQQAlAxAOA4QAUgVgBgeQgBgKABgKQADglgGghIArAlQAFADADAFIAEAFQAJgEgBgQQAAgIABgHQABgNgDgNQgEgUgDgUQAVAIAUALQAHAEAJAIQADgIABgKIAAgBQAAgKgCgMQgFgeAdgKQAQgDAVgHQAKACAKgBQAsgIAvABIANgBIAIgCIAMgEIACgBIA5ABQAeAOAKANQAWATgBAfQAEALAAAKIABAFQApATAmAOIAQAHQAaAMAQAXQAHAKAFANIAFAOQAGAaAAAdQAAArgCArIgBAKQgBAOgEAHIgDAJQgOAvgdAiIgGAJQgNAXgVAPIgIAGIgIAIQhDA8hfAJIgKACIgBAAIgBAAQgRAFgQAAIgBAAIAAAAQgQAAgOgFIgngJQgbgEgZgIQgdgJgGgbQAGAbAdAJQAZAIAbAEIAnAJQAOAFAQAAIAAAAIABAAQAQAAARgFIABAAIABAAIAKgCQBfgJBDg8IAIgIIAIgGQAVgPANgXIAGgJQAdgiAOgvIADgJQAEgHABgOIABgKQACgrAAgrQAAgdgGgaIgFgOQgFgNgHgKQBfARAsANIAPAFIABAkQAAEBi2C1Qi2C3kAAAIAAAAgAkJghQANAAANgEIABAAQAmgMAXgTQgXATgmAMIgBAAQgNAEgNAAIAAAAIAAAAQgNAAgNgEIAAAAIgBgBIgBAAIgKgEQgSgGgHgPIgHgPQgLgXAAgXQABgTAGgSQgGASgBATQAAAXALAXIAHAPQAHAPASAGIAKAEIABAAIABABIAAAAQANAEANAAIAAAAIAAAAgAnjgmIABAAIACAAIgCAAIgBAAIAAAAIAAAAQgNAAAKgPIABAAQAKgOAJgRQASgkAXgkIAQgXIAGgJIAIgNIABgCIABAAIAAAAIABgDIAFgHIASgCQgJgIgJAKIgIAAIAIAAIgFAHIgBADIAAAAIgBAAIgBACIgIANIgGAJIgQAXQgXAkgSAkQgJARgKAOIgBAAQgKAPANAAIAAAAIAAAAgAEMi7QgDgDAAgFQAAgFAEgIIABgCQAIgNAPgKIAJgFIAGAAIABAAIAAAAQATAAAOANQgOgNgTAAIAAAAIgBAAIgGAAIgJAFQgPAKgIANIgBACQgEAIAAAFQAAAFADADgAB2kgQgPACgLAIIgLAGQgYAQAMAUQAFABACgCQATgWAegDIAlgEQAHAAgBgHQgFgXggAGIgFABIgBAAIgHABgAEUlOQgIACgIAEQgMAIgKAKQgBAEABAEQABADADACIACACIACABIAHAAQAXgUAdAGQAGgCAAgGQgCgTgUAAQgGAAgHABgAAxl3QgJAAgHAJQgKAJgEAMQgCAGAAAGIAPgGIAVgIIACgBIABAAIATgGIAQgFIAIgDQADgBADgDIgFgFQgGgGgLAEQgOgCgPAAIgFAAgAC6mZIABACIABABIACAFIAHATIAEALQARgQAKgSQACgFAFgCIADgBIAAAAIADAAIAAAAIABAAIAFAAIABABIABAAIgBAAIgBgBIgFAAIgBAAIAAAAIgDAAIAAAAIgDABIgoABIgKAAIABACg");
	this.shape_19.setTransform(62.2,80.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AmOgbQAFgsAQgmQAKgZAUgQQARgOAPgKQgUgBgSAAQgHAAgHACQgYAIgbAAQALgSAPgLQAGgEAIgCQAUgSAegHQAUgEARAEQAPAIAEgJQAOgZAIgeQADgKACgLQAEgZAOgKQAAADABACQACAFACAFQALAWAPAYQAPgHAKgRQASgRAVgQQAdgXAmgVQAHgGAVgFQAFgEAIgEQAVgIAWgFQAGgBAFgBQAIgCAHAAQAdgBASADQAdgCAZACQAFABAFAAQAYABARAHQAFACAFABQAXADAMAOQgsAJgvAIQgNABgHAMQgBACgBACQADAAAEAAQAXABAWgEQAGABAEgBQARAEATgCQAmAAARAbQgIAIgMgBQgDAAgDAAQgTgBgUgBQgDAAgCAAADZk9QARABAOAHQAEACAEACQAZAPASARQANANABAOQgOgFgPAAQgBAAgBAAIAAAAQgEAAgEAAQgFABgGABQgdAAgcAAQgBAAgBABQgGACgGACQgEABgEAAQgGABgHAAQgvAAgsAHQgKACgKgDQgVAHgQAEQgdAKAFAeQACALgBAKQAAABAAABQAAAJgDAIQgJgIgHgEQgUgLgVgIQADAVAEAUQADAMgBANQgBAIAAAHQABARgJAEQgCgDgCgDQgDgEgFgEQgYgUgTgRQAGAigDAlQgBAKABAKQABAegUATQgOg2glgyQgMgPgLAKQgfAdgYAdQgFAFgBgCQAAgBAAgEQABgDgMAbQgCgDgCgCQAAAAgBgBQgIgHgQAHQgEABgCAHQgHAFgGAHQAAAAAAAAQgEAFgEAHQgBABAAACQgCAEgBADQAAABgBABQgagQgBgJQAAgBAAgCQAAgCABgDQABgIAAgIIAAgBQABgGABgHQACgOgJgBQgTAHgHASQAAABAAABQgCAAgCAAQAAACAAACQAAABAAABIAAAAQAAABAAABIAAABQAAgBABgBIAAAAQABgDACgEQAEAAAEgBQgCADgDAEQAAACgBABIAAAAIgBABQAAABgBAAQgDAHgFAGQgDAEgDAFQgIALgIAMQgWAjgTAkQgJARgKAOQgMARARgCADsjiQgnABgBAAQgHgBgDAAQABACAAABQABABAAABQABAAAAABQABACABADQAEAJADAKQACAFACAGQARgQAKgTQADgEAEgCQAGgDAIACAEHj5QAeAOAKAOQAWATgBAeQAEAMAAAKQgCgGgDgFQgHgEgFgDQgBAAAAgBQgPgZgcAIQgNABgLAPQgDAFgDAGQgDAOADAMQABAFACADQACAEACAEQAAABABABQABACACACQAEABADAEQASADATgBQADAAADAAQAHgBAHgBQADgBACgEQAOgSgCgQQApASAmAOQAIADAIAEQAbANAPAWQAHALAFAMQADAHACAHQAGAbAAAcQAAArgCAqQAAAFgBAFQgBAOgEAIQgCAEgBAEQgOAwgdAjQgEAEgCAFQgNAWgVAPQgEADgEAEQgEAEgEADQhDA9hfAIQgFABgFABQgkAKgegJQgUgGgTgEQgbgDgZgIQgdgKgGgbAEvibQggAFALAiQAAABAJADQAfgCgIgjQgBgGgGgEQAAAAgBgBAENgCQgGgGAHgOQABgBAAgBQAIgOAPgKQAEgBAFgDQAYgDAQAQAHShHQBfARAsANQAIADAHACQABASAAASQAAEBi2C2Qi2C2kBAAQkAAAi3i2QiiiigRjeQAGgFAHgFQAKgHALgFQAagNAdgQQAsgXAugGQAFgBAGgCQACAAACgBQAKgBAGACQABABAJAAAJsgkQgMjpipipQi2i2kBAAQkAAAi3C2Qi1C2AAEAQAAAcACAbACBlcQgLAAgJAAQgFABgDAAAB2lsQgLgCABAIABUi8QgQgCgSAAQgJAAgHAJQgKAJgEANQgCAGAAAGQAHgDAIgEQAKgEALgEQABAAABAAQABAAAAgBQAJgDAKgCQAJgDAHgCQAEgCAEgCQADgBADgCQgCgDgDgDQgIgBgJgBQALgDAGAFAmCgcQAJgJAJAIQgKABgIAAgAlSAYQgPApATAqQAEAHADAHQAHAPASAGQAFACAFACQAaALAdgKQAmgMAXgTABRhwQgCAAgBAAQgDABgCAAQgKAEgHAIQgRARAEAcQACAOAFALQAHAPASAHQAaAJAWgMQADAAADAAQAKgCAHgHQAOgJAMgMQAFgIADgIQADgJABgJQAAgFgDgFIAAAAQgCgFgDgEQgBgBgBgBIAAAAQgEgFgFgDQgBAAgCgBQgDgBgDgBQgKgBgFgBQgIgBgggCAB+hfQgMAGgQARQgFAFgCAIQgEAXASAEQADABADABQAHAEAHgBQAGAAAGgGQAOgMAIgUQACgEAAgFQAAgJgCgGQgDgFgFgDQgCAAgCgBQgIgBgNAEQAAAAgBAAQgCABAAgCQACAAABABABRhwQAGgBAHABQACAAAFABQgJAAgLgBg");
	this.shape_20.setTransform(62.1,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},4).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_20}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,126.3,126.3);


(lib.anim_baby_stace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(35.9,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhbCzQgTgKgaAAQgZAAgTgMQgUgPgJgUQgJgVAGgZQAFgWAQgSQARgTAUgGQADAHAJAGQAVAOAVAKQAWAKAZABIAkACQgTAMgRAOQgRANAAAZQABASAIAOQAMAUACAPQgXgCgVgLgAgLhDQgMgBABgKQALgBALgFQARgHgPgIQgKgGgNgDQALABALgBQANgCAFgIQAFgIgEgLQgEgKgKgCQAIgHAAgLQAZgCAPATQAJALAJgGQATgMAXgMIAogSQAPgHALAHIAFAFQARASAJATQAFAKgBAIQAAANgKAKIAAABQgKAKgSABQgZABgZgCQgVgCgTABQgGAAgGACIgnARQgSAIgTAAIgKAAg");
	this.shape_1.setTransform(31.5,55.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVgFQgDAGABAEQABAMgHABIgGABQgHgTAVgFgAAlgSIABAGQAAALgIACQgTgQAagDg");
	this.shape_2.setTransform(39.5,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBYQgLgMgDgPQgFgUACgSQAIAZAWAFQASAEAOgLQAAAUgRATQgIAKgIAAQgFAAgHgHgAgwgkIAAAAQgEgSAHgPQAKgWANAMQAOAOAAAWIAAAFQgVAGAIATQgVgBgGgWgAAdgdIgHgHQgNgRgDgYQAIgdAUAUQANANADATIAAADQgZADASARQgDACgGAAIgFAAg");
	this.shape_3.setTransform(38.1,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("Ah6CGIgvgJIAAAAQALgBAGgHQAQgSABgaQAAgZgCgZQgDgZAGgWQAHgXAMgUQAKgSATgNQARgLATgLQAJgEAIgCIAKgCIABAFIgBgFIATgEIABAFIgBgFIANgBIgEAEIAJgFQASgIAWADQAXAEAPAOQASAQANAQQAPATAAAXQABAaAGAVIAMAuQAGAZAHAPQgfgDgTAJQAJgMAEgPQAGgWgBgaQgBgZgKgSQgLgSgCgUQgDgYgVgKQgLgEgMgCQgZgDgVADQgVAEgUAMQgWAOgLAQQgGAKABAOQACAZAHAVQAHAXgCAZQgBAYgNAUIgTAcQgGADgEAGIgjgHg");
	this.shape_4.setTransform(31.7,20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AAVFAIgCgCIgJgLIAJALQgTgNgVgFQgYgGgYAFQgQAEgGADQgCgPgMgUQgIgNAAgSQgBgZARgOQARgOAUgLIAMAAIARAAIACgBIAFgBIAAAAIAEgBIABAAIAAAAIABAAIABAAIAKACQAJABADADQgDgDgJgBIAAgCQgBgRAIgBIAAAAIABAAQAEABAHAEIADACQgEgbAVAAIAAAAIAAAAIAFAAIgBgKQAAgGACgDIABAAIAAAAIABgCQAHgHAKAAIAAAAIAAAAQAKAAANAIQAPAKAAAOIAAACQAXAAARANIAEAEQAIAJAAAOQAAAHgCAIIgBADIABgDQACgIAAgHQAAgOgIgJIgCgKQAAgSARgKIABAAQAHgEAHAAIABAAIAAAAQAKAAAKAHQgKgHgKAAIAAAAIgBAAQgHAAgHAEIgBAAQgRAKAAASIACAKIgEgEQgRgNgXAAIAAgCQAAgOgPgKQgNgIgKAAIAAAAIAAAAQgKAAgHAHIgBACIAAAAIgBAAQgCADAAAGIABAKIgFAAIAAAAIAAAAQgVAAAEAbIgDgCQgHgEgEgBIgBAAIAAAAQgIABABARIAAACIgKgCIgBAAIgBAAIAAAAIgBAAIgEABIAAAAIgFABIgCABIgRAAIgMAAIglgCQgZgCgWgKQgVgKgVgOQgIgGgEgHIgBgFQgFgXAEgZQgMAEgQgCQgZgEgXgFQgWgFgTgKQgVgNgNgSQgJgNACgSQACgaARgNQATgPAVgLQAUgKAXgFIAkgIIAHgCIABAAIAAAAIABAAIAuAJIAjAHIAEAAIAHgJIATgcQAMgUACgYQACgZgHgXQgHgWgCgZQgBgOAGgKQALgQAWgOQATgNAXgDQAUgDAZADQALACAMAEQAVAKACAYQADAUAKASQALASABAaQABAagGAWQgEAPgJAMQASgJAgADQAVgEAWAGQALADAHAFQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAIABAAIAAAFQAAAPACAOQgCgOAAgPIAAgFIAAgPQADgZALgTIAKgRQgFgbATgJQANgHASABQASACAMAIIAIAGIABgMIAAgBQASgFAVACQAIAAABAMQAAALgEAHIgBAAIgBABQgGAHgOABIgBAAIAAAAIgDgBQgOAAgHgDIAEgDQADgDAAgDQAAgDgDgDIgCgEIACAEQADADAAADQAAADgDADIgEADQAHADAOAAIADABIAAAAIABAAQAOgBAGgHIABgBIABAAQAZAIgSAWIgOACIgCAAIgcACIgCAAIAAAAIgGAAIgGgBIAGABIAGAAIAAAAIACAAIAcgCIACAAQAGABgCAKQgDARgNAJQgFAEgGABQAEARgRADQABARgPACQACAagJATQgLAVgRAMQgRAMgYAFQgVAFgTgIQAAgJgFgJQgJgTgRgTIgEgFQgPgOgQgGQAQAGAPAOQgLgGgQAGIgoATQgXALgTANQgJAGgIgLQgPgTgZABQABAMgJAGQAKACAEALQAEALgFAHQgFAIgMABQgNACgKgBQAMADALAGQAPAIgRAHQgLAEgMABIgBABIgGAAIAAAAIgBAAIgKgBIgEgBQARAKAMAOIgCABQgNAIgOAAIgBAAIAAAAIgMgCIgCAAIgBAAQgHgCgIgHQgCAVgQAGQgJADgHAAIAAAAIgBAAQgOAAgKgMIgIgJIgEgHIAEAHIAIAJQAKAMAOAAIABAAIAAAAQAHAAAJgDQAQgGACgVQAIAHAHACIABAAIACAAIAMACIAAAAIABAAQAOAAANgIIACgBQgMgOgRgKIAEABIAKABIABAAIAAAAIAGAAIABgBQgBAKAMABQAZADAXgKIAngRQAGgDAFAAQATAAAWABQAYADAZgBQASgBAKgLIAAAAQAGAVAQAUQARAUgDAZQgCATgFAIQADAGABAGIAAADQAAALgJAGIACAAIABAAIAAAAIAAAAQAQAAAPAIIADACIABABQAHAEAAABIgBAAIABAAQAAgBgHgEIgBgBIgDgCQgPgIgQAAIAAAAIAAAAIgBAAIgCAAQAJgGAAgLIAAgDQAKgSAMALQACAPgBAFQAMgTAOAKIAAAIQgBAIgBABQABgBABgIQAjgFgMAcQASgTgEAdQATALgFAcQgFAVgMAXQAKAKgEAOQgDANgMAMQgPAPgZAAQgaABgXgHQgGgBgCgFQgEgMgIgFIABgRIAAgGIAAAAQAAgZAQgOQAEgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgigbIAiAbQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEADQgQAOAAAZIAAAAIAAAGIgBARQgIgFgMACIAAAIQgCAdgaABIgxABIgCAAQgZAAgOgOgAByD4IALAVQANAJABARQgBgRgNgJIgLgVQgDgGAAgEQAAgGAHgEQATgJAHgUQgHAUgTAJQgHAEAAAGQAAAEADAGgAAAECQgPgGgBgVQABAVAPAGgAgMDQQgUgGAAgSIABgIIgBAIQAAASAUAGgAAkCmQgSALgPARQAPgRASgLQALgHAMgCIADgBIAFAAIAFAAIAAAAIABAAIAHAAIgHAAIgBAAIAAAAIgFAAIgFAAIgDABIgMgMIgKgKIAKAKIAMAMQgMACgLAHgAjIBIQAIgCAGgFQgGAFgIACgAhAAGIgNgDIANADgAg/gfQAMgEAIAAIABAAIAAAAIAFAAIgFAAIAAAAIgBAAQgIAAgMAEgAjNgyQAGAAAHgDQAKgFANgDQAUgFAHgFQAEgCADgGIAFgHIgFAHQgDAGgEACQgHAFgUAFQgNADgKAFQgHADgGAAIAAAAIAAAAQgOAAgMgNIgBgBIABABQAMANAOAAIAAAAIAAAAgAgdg1QAAgFgDgHIgEAAIgPABIgOABIAAAAIAAAAIgPgBIgBAAQAFgDABgLIAAgBQACgYgSgBIgBAAIAAAAIgJACIgBAAQgKACgHAFQAHgFAKgCIABAAIAJgCIAAAAIABAAQASABgCAYIAAABQgBALgFADIABAAIAPABIAAAAIAAAAIAOgBIAPgBIAEAAQADAHAAAFgAAGhPQAUgBAOgOIABgBIAdgfIAIgJIgIAJIgdAfIgBABQgOAOgUABIAAAAIAAAAIgIgBQgXgDgUgKQgNgHgHgKQAHAKANAHQAUAKAXADIAIABIAAAAIAAAAgAEahnIAGAAIAAgBIAAABIgGAAIAAAAIgBAAIgGgBIgDAAIADAAIAGABIABAAIAAAAgAgEiNQADAPAKANQAOAPAQgSQAQgUAAgTQgNALgTgEQgWgFgIgZQgCARAFAUgAEnh7IACAAIABAAIAEAAIgEAAIgBAAIgCAAIAAAAIgBAAQgMAAgFgGQgIgIAAgFQAAgFAJgBIgBgJQAAgUARgHQgRAHAAAUIABAJQgJABAAAFQAAAFAIAIQAFAGAMAAIABAAIAAAAgAExiNIAIgBIABAAIAAAAIABgBIgBABIAAAAIgBAAIgIABIAAAAIgBAAQgMgBgOgGIAAAAIAAAAQAOAGAMABIABAAIAAAAgAEmi4QgHgDAAgIIACgKIAAgBIAAAAIAAABIgCAKQAAAIAHADgAA1i+QAXAAADgbQgRgEgLgLQAJABAGgCQAHgEAAgLIAAgFIgBgDQgDgTgNgOQgUgTgHAcQACAYANARIAHAHQALALARAEQgDAbgXAAgAEDjHIADgBIAAAAIAAAAQAQAAALgGQgLAGgQAAIAAAAIAAAAIgDABIAAAAIgBAAQgTgBgJgLIgBAAIABAAQAJALATABIABAAIAAAAgAEqjTIgJAFIAJgFIAAgBgAgXkQQgHAQAEARIAAAAQAGAXAUAAIAGgBQAHAAgCgNQAAgEADgGIAAgGQgBgWgNgOQgFgEgEAAQgIAAgGAOgAgHCvIAAAAgAAPCiIAAAAgAA7CdIAAAAgAEqjUIAAAAg");
	this.shape_5.setTransform(35.9,43.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99CCFF").s().p("AAABRQgBgYABgYIABgkIAAgLQgPgRABgXQABgWAPgLQAQAAANAKQAVAQgMAXQgDAGgEAFIgCADQgKALgOAHIAAABIAAArIgBAlIAAAAIgBANIgGgHgAgYgKQgWgLACgbQACgYAWgJIABgBQgBAPgFALQgFAMAFAOQAEAOAGAJIgJgDg");
	this.shape_6.setTransform(65.3,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgDAmQgFgJgEgOQgFgOAFgLQAEgLACgPQAJgEAJgBIAEAAQgQALAAAWQgBAWAOARIAAALQgIgBgIgDg");
	this.shape_7.setTransform(64,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AE/jMQADgHgEgLQgDgLgIACQgVADgQAKQAAABAAAAQABAGABAGQACABACACQAHAFgEAHQgCACgBACQAHAAAOgDQASgDAEgMgAEXieQADAAADgBQAPgDAVgIQAGgDAHgDQAMgbgbgBAEUi6IAAAAQgDAEgEAEQAAAAAAAAQAAASAKACAE2h8QAFgDAEgFQALgMgCgSQgBgJgGABADgl1QAPgFAPAGQAYAKgFAaQgBAHgCAFQgBACgBABQgGANgMALQAAABAAAAQAHAaAEARQAFATAEAQADLlrQAJgGAJgDQABgBACAAADikjQgFAAgEgBQgZgFgEgbQgFgXATgPQABAAAAgBQACAPgBAMQgCANAIAMQAIAMAIAIQAJABAIgCQgBgFgBgFQgUgNgFgXQgFgVANgOACWhbQgIgOgGgZQgGgXgGgXQgGgWAAgaQAAgYgQgTQgNgPgRgQQgPgOgXgEQgWgEgSAJQgEACgFADQACgCACgDQAMgOARgOQAUgQAagDQATgCAMAFABkhUQAJgMAEgPQAFgWAAgaQgBgagLgSQgLgSgCgUQgDgZgVgJQgLgFgLgBQgagDgUADQgWADgTANQgWANgLARQgHAKACAOQACAZAHAWQAHAXgCAZQgCAYgNAUQgJAPgJAMQAHgEAKgDQAegHgDAgQgCALgFADQAXABAbgCQACAHABAFQAAAKgIAHQAKACAEALQADALgEAHQgFAJgNABQgMACgLgBQANADALAGQAPAIgRAGQgMAFgLABQgBAKAMABQAZACAWgJQATgJAUgIQAGgDAGAAQATgBAVACQAZADAZgCQASgBAKgKQAAAAAAAAQAKgLAAgMQABgJgFgJQgJgUgRgRQgCgDgDgCQgLgGgPAGQgTAIgVALQgXAKgTANQgJAFgJgKQgPgSgYABABejLQgCgVgOgOQgUgUgIAdQADAYANARQADAEAEADQALALARAEQgDAbgXAAABJi1QAJABAFgDABejLQABADAAADQAAALgIADQgSgRAZgDgAEIjRQgOgFgSADQgSAEgLAKQgPAOALAYQgCAIgDALQgGAVAEAZQABADAAADQAAAAgBAAQgVgGgVADQgggCgSAJQgEAFgEAEQgPAPgOAQQgRATgbgEQgWgDgUgLQgOgGgHgKAEIjRQgHgXgFgYQgEgRgFgTAENiyQAAAAgBAAQgJAIgPAFQgWAHgNgKADBhYQABAFABAEQADAMAEAKQACAGACAFACegWQgOgOgQgHAC3A9IAAAAQAGAVAQAUQAQAUgCAZQgDATgEAIQADAGABAFQABANgKAIQATgBATALQAIAGgCAAADBAmQAFACAEABQAcgCAPgIQAWgMANgPQAOgQAFgWQAEgVgJgYQgGADgKABAEmhPQANgGgEgRQgCABgCABQgOAEgJgFQgTgMAQgHAEvhmQAPgHgIgPQgOAIgXgEQgLgYARgOAEQjNQgEgCgEgCAgZk1QgEgWAHgUQAJgWAUgLAgLk3QgHABgHABQABACABADAgGk3QgDAAgCAAAgskyQgEgRgCgXQgCgSAIgLAi+g0IAAAAQAMAAAGgIQAPgSABgZQABgZgDgZQgDgaAHgWQAHgXALgUQALgSATgNQAQgLAUgLQAIgEAJgDQAEgBAFgBQABADABADAAji+QgVAGAIATQACAAADgBQAIAAgCgNQAAgEACgHQABgagPgPQgOgMgIAWQgHAQAEARQAFAXAVAAAgZk1QgKABgJACAiyB7QgNAEgPgCQgZgEgXgFQgWgFgTgKQgVgNgNgSQgJgNABgTQACgaARgMQATgPAWgLQATgKAYgFQARgEATgFQACgBAEAAQABAAAAgBIABAAQAAABAAAAQAaAFAVADQARADASAEQgDAEgCADQgEAGgEADQgHAFgTAFQgNADgLAFQgUAIgTgTAAOiAQAIAaAXAEQASAFAOgMQAAAUgRATQgPASgOgPQgLgMgDgPQgGgUADgSgAhsgkQACABABAAQAEgEAEgGQgGAEgFAFgAgsBWQgLABgLgCQARAJAMAOQgWAOgXgHQgIgBgHgIQgCAVgRAHQgZAJgPgSQgFgFgDgEQgHAEgHADAgrA5QgGgBgGgCAgPAPQgKgCgQAGAA7C6QgbgEAFAfQgYgTAAAfQALACACADAANDhQgEAAgFgBQgHgBgGAEQgJAAgIAAQgGAAgHgBQgSAAgSgCQgZgBgWgKQgVgKgVgOQgJgGgDgHQgUAHgRATQgQARgFAWQgGAaAJAUQAJAVAUAOQATAMAZAAQAaABATAJQAVALAXACQgDgPgLgUQgIgNgBgSQAAgZARgOQARgOATgMACgDRQgCgCgCgCQgRgNgXAAQABgQgPgKQgbgRgPASQgEAFADAOAAoFxQgSgNgWgFQgXgGgYAFQgQAEgGADAAFEaQABAUAQAGAAJEDQgXgIAFgYAAZD1QAPgRARgMQALgGANgDQgHgGgGgGQgFgEgEgFAiwCwQgBgCgBgDQgEgXAEgZAChFaQAAAEAAAEQgCAdgaABQgZABgZAAQgZABgPgPQgCgBgBgBQgEgFgEgGAEIDGQAkgFgNAbQATgSgEAdQATALgGAcQgEAVgNAXQALAJgEAPQgDANgMAMQgQAPgYAAQgaABgXgHQgGgBgCgFQgEgMgIgFQABgFAAgSQgBgZARgOQAHgGgGgEQgSgOgPgNAEIDGQAAAHgBACADYC5QAJgRAMALQADAPgBAFQAMgUANAKQAAAFAAAEADUCuQgTgNgRAKQgVAMAFAaABRDPQABAAABAAQAJgBAJABAChFaQgBgRgNgJQgDgHgIgOQgJgOAMgGQAUgJAHgUQAAgCABgCQAGgYgNgNAC1FdQgIgFgMACAikB0QgCgEgCgD");
	this.shape_8.setTransform(33.7,38.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBYQgLgMgDgPQgFgUACgSQAIAZAWAFQASAEAOgLQAAAUgRATQgIAKgIAAQgFAAgHgHgAgwgkQgEgRAHgQQAKgWANAMQAPAPgBAaQgVAGAIATQgVgBgGgWgAAdgdIgHgHQgNgRgDgYQAIgdAUAUQAOAOACAVQgZADASARQgDACgGAAIgFAAg");
	this.shape_9.setTransform(38.1,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AADApQgHgIgIgMQgIgMACgMQABgMgCgOQAIgHAJgDIADgBQgMAOAFAWQAFAWASAMIADAKIgNABIgEAAg");
	this.shape_10.setTransform(56.1,5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#99CCFF").s().p("AAhBRQgHgXgEgYIgJgjIgDgKQgTgNgFgXQgEgVAMgOQAPgFAPAGQAYAKgFAaQgBAHgDAFIgBADQgHANgMALIABABIALAqIAIAjIABABIACAMIgJgEgAgMgBQgZgFgFgbQgEgXATgPIABgBQACAPgCAMQgBANAIAMQAIAMAHAIIgIgBg");
	this.shape_11.setTransform(56.8,9.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AArFAIgDgCIgIgLIAIALQgSgNgWgFQgXgGgYAFQgQAEgGADQgDgPgLgUQgIgNgBgSQAAgZARgOQARgOATgLIgkgCQgZgCgWgKQgVgKgVgOQgJgGgDgHIgCgFQgEgXAEgZQAHgCAHgFIgEgHIAEAHQgHAFgHACQgNAEgPgCQgZgEgXgFQgWgFgTgKQgVgNgNgSQgJgNABgSQACgaARgNQATgPAWgLQATgKAYgFIAkgIIAGgCIABAAIABAAIAAAAIAvAJIAjAHIADAAIAIgJIASgcQANgUACgYQACgZgHgXQgHgWgCgZQgCgOAHgKQALgQAWgOQATgNAWgDQAUgDAaADQALACALAEQAVAKADAYQACAUALASQALASABAaQAAAagFAWQgEAPgJAMQASgJAgADQAVgEAVAGIABAAIgBgGQgEgYAGgWIAFgSQgLgZAPgOQALgKASgDQASgEAOAFIAIAEIAEADQAEADAAAEIgBAFIgDAEIAAAAIABAAIAAAAIAHAAIAJgCIABAAIAAAAIADAAQASgEAEgLQgEALgSAEIgDAAIAAAAIgBAAIgJACIgHAAIAAAAIgBAAIAAAAIADgEIABgFQAAgEgEgDIgEgDIgCgMIAAAAQAQgLAVgDQAIgCADALQAEALgDAIQAbABgMAaIgNAGQgVAIgPADIgEABIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAEgBQAPgDAVgIQAGgBABAKQACARgLANQgEAFgFACIgBABIAAAAQgJAFgNAAIAAAAIAAAAIgOgCQgFgJAAgIQAAgNALgIQgKgCAAgRQAAARAKACQgLAIAAANQAAAIAFAJIAOACIAAAAIAAAAQANAAAJgFIAAAAIABgBQAIAPgPAHIgEACIgBAAIgBAAIgKACIAAAAIgBAAQgFAAgFgDQgLgGAAgGQAAgEAIgDQgIADAAAEQAAAGALAGQAFADAFAAIABAAIAAAAIAKgCIABAAIABAAIAEgCQAEARgNAGQgGADgKABQAKgBAGgDQAJAYgEAVQgFAXgOAQQgNAQgWALQgPAIgcACIgJgDQABgJgFgJQgJgTgRgTIgFgFQgOgOgQgGQAQAGAOAOQgLgGgPAGIgoATQgXALgTANQgJAGgJgLQgPgTgYABQAAAMgIAGQAKACAEALQADALgEAHQgFAIgNABQgMACgLgBQANADALAGQAPAIgRAHQgMAEgLABIgBABIgGAAIgBAAIAAAAIgLgBIgDgBQARAKAMAOIgCABQgNAIgPAAIAAAAIAAAAIgNgCIgBAAIgBAAQgIgCgHgHQgCAVgRAGQgIADgHAAIgBAAIAAAAQgOAAgKgMIgIgJIAIAJQAKAMAOAAIAAAAIABAAQAHAAAIgDQARgGACgVQAHAHAIACIABAAIABAAIANACIAAAAIAAAAQAPAAANgIIACgBQgMgOgRgKIADABIALABIAAAAIABAAIAGAAIABgBQgBAKAMABQAZADAWgKIAngRQAGgDAGAAQATAAAVABQAZADAZgBQASgBAKgLIAAAAQAGAVAQAUQAQAUgCAZQgDATgEAIQADAGABAGIAAADQAAALgJAGIABAAIACAAIAAAAIAAAAQAQAAAOAIIADACIACABQAGAEAAABIAAAAIAAAAQAAgBgGgEIgCgBIgDgCQgOgIgQAAIAAAAIAAAAIgCAAIgBAAQAJgGAAgLIAAgDQAJgSAMALQADAPgBAFQAMgTANAKIAAAIQAkgFgNAcQATgTgEAdQATALgGAcQgEAVgNAXQALAKgEAOQgDANgMAMQgQAPgYAAQgaABgXgHQgGgBgCgFQgEgMgIgFIABgRIAAgGIAAAAQAAgZAQgOQAEgDAAgDQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIghgbIAhAbQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAADgEADQgQAOAAAZIAAAAIAAAGIgBARQgIgFgMACIAAAIQgCAdgaABIgyABIgCAAQgYAAgOgOgACID4IALAVQANAJABARQgBgRgNgJIgLgVQgEgGAAgEQAAgGAHgEQAUgJAHgUIABgDQACgIAAgHQAAgOgJgJIgBgKQAAgSARgKIABAAQAHgEAHAAIAAAAIABAAQAJAAALAHQgLgHgJAAIgBAAIAAAAQgHAAgHAEIgBAAQgRAKAAASIABAKIgEgEQgRgNgXAAIAAgCQAAgOgOgKQgNgIgKAAIAAAAIgBAAQgJAAgHAHIgBACIgBAAIAAAAQgCADAAAGIABAKIgFAAIAAAAIgBAAQgVAAAFAbIgEgCQgGgEgEgBIgBAAIAAAAQgJABAAARIAAACQALABACADQgCgDgLgBIAAgCQAAgRAJgBIAAAAIABAAQAEABAGAEIAEACQgFgbAVAAIABAAIAAAAIAFAAIAJAKIANAMQgNACgLAHQgRALgPARQAPgRARgLQALgHANgCIACgBIAGAAIAEAAIABAAIAAAAIAHAAIgHAAIAAAAIgBAAIgEAAIgGAAIgCABIgNgMIgJgKIgBgKQAAgGACgDIAAAAIABAAIABgCQAHgHAJAAIABAAIAAAAQAKAAANAIQAOAKAAAOIAAACQAXAAARANIAEAEQAJAJAAAOQAAAHgCAIIgBADQgHAUgUAJQgHAEAAAGQAAAEAEAGgAAWECQgQgGgBgVQABAVAQAGgAAJDQQgTgGAAgSIABgIIAAAAIACgBQAFgCADAAIABAAIAAAAIABAAIABAAIAJACIgJgCIgBAAIgBAAIAAAAIgBAAQgDAAgFACIgCABIAAAAIgRAAIgNAAIANAAIARAAIgBAIQAAASATAGgAEHCcQABgBAAgIQAAAIgBABgAgrAGIgMgDIAMADgAgpgfQALgEAJAAIAAAAIAAAAIAGAAIgGAAIAAAAIAAAAQgJAAgLAEgAi3gyQAGAAAGgDQALgFANgDQATgFAHgFQAEgCAEgGIAFgHIgFAHQgEAGgEACQgHAFgTAFQgNADgLAFQgGADgGAAIAAAAIgBAAQgNAAgNgNIAAgBIAAABQANANANAAIABAAIAAAAgAgHg1QgBgFgCgHIgEAAIgPABIgOABIAAAAIgBAAIgPgBIgBAAQAFgDACgLIAAgBQACgYgTgBIAAAAIAAAAIgJACIgBAAQgKACgHAFQAHgFAKgCIABAAIAJgCIAAAAIAAAAQATABgCAYIAAABQgCALgFADIABAAIAPABIABAAIAAAAIAOgBIAPgBIAEAAQACAHABAFgAAchPQAUgBAOgOIABgBIAdgfIAIgJIgIAJIgdAfIgBABQgOAOgUABIAAAAIgBAAIgIgBQgWgDgUgKQgOgHgHgKQAHAKAOAHQAUAKAWADIAIABIABAAIAAAAgADDiCIAHAWIAEALIgEgLIgHgWIgCgJIACAJgAARiNQADAPALANQAOAPAPgSQARgUAAgTQgOALgSgEQgXgFgIgZQgDARAGAUgABLi+QAXAAADgbQgRgEgLgLQAJABAFgCQAIgEAAgLIgBgFQgCgVgOgPQgUgTgIAcQADAYANARIAHAHQALALARAEQgDAbgXAAgADkjVQAGAAAHgCIABAAIABgBIABAAQAPgFAJgIQgJAIgPAFIgBAAIgBABIgBAAQgHACgGAAIgBAAIAAAAQgKAAgHgGIgBAAIABAAQAHAGAKAAIAAAAIABAAgAgBkQQgHAQAEARQAFAXAVAAIAFgBQAIAAgCgNQAAgEACgGQABgbgPgPQgFgEgEAAQgIAAgFAOgAEMjlIABABIAAgBIgBAAgAEUjtIgHAIIAHgIIAAAAgAgJCwIAAAAgACgCeIAAAAgAA7CHIAAAAgAikBBIAAAAgAEXjRIAAAAg");
	this.shape_12.setTransform(33.7,43.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_13.setTransform(35.9,38.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAdQgLgMgEgPQgFgTADgSQAIAZAWAFQASAEAOgLQAAATgRATQgIAKgHAAQgHAAgGgHg");
	this.shape_14.setTransform(38.3,29.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AAVFAIgCgCIgJgLIAJALQgTgNgVgFQgYgGgYAFQgQAEgGADQgCgPgMgUQgIgNAAgSQgBgZARgOQARgOAUgLIglgCQgZgCgWgKQgVgKgVgOQgIgGgEgHIgBgFQgFgXAEgZQAIgCAGgFIgEgHIAEAHQgGAFgIACQgMAEgQgCQgZgEgXgFQgWgFgTgKQgVgNgNgSQgJgNACgSQACgaARgNQATgPAVgLQAUgKAXgFIAkgIIAHgCIABAAIAAAAIABAAIAuAJIAjAHIAEAAIAHgJIATgcQAMgUACgYQACgZgHgXQgHgWgCgZQgBgOAGgKQALgQAWgOQATgNAXgDQAUgDAZADQALACAMAEQAVAKACAYQADAUAKASQALASABAaQABAagGAWQgEAPgJAMQASgJAgADQAVgEAWAGQALADAHAFQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAIABAAIAAgPQADgZALgTIAKgRQgFgbATgJQANgHASABQASACAMAIIAIAGIABgMIAAgBQASgFAVACQAIAAABAMQAAALgEAHIgBAAIgBABQgGAHgOABIgBAAIAAAAIgDgBQgOAAgHgDIAEgDQADgDAAgDQAAgDgDgDIgCgEIACAEQADADAAADQAAADgDADIgEADIAAABIgJAFIAJgFIAAgBQAHADAOAAIADABIAAAAIABAAQAOgBAGgHIABgBIABAAQAZAIgSAWIgOACIgCAAIgcACIgCAAIAAAAIgGAAIgGgBIAGABIAGAAIAAAAIACAAIAcgCIACAAQAGABgCAKQgDARgNAJQgFAEgGABQAEARgRADQABARgPACQACAagJATQgLAVgRAMQgRAMgYAFQgVAFgTgIQAAgJgFgJQgJgTgRgTIgEgFQgPgOgQgGQAQAGAPAOQgLgGgQAGIgoATQgXALgTANQgJAGgIgLQgPgTgZABQAAgFgDgHIgEAAIgdACIAAAAIAAAAIgPgBIgBAAQAFgDABgLIAAAAIAAgBQACgYgSgBIgBAAIAAAAIgJACIgBAAQgKACgHAFQAHgFAKgCIABAAIAJgCIAAAAIABAAQASABgCAYIAAABIAAAAQgBALgFADIABAAIAPABIAAAAIAAAAIAdgCIAEAAQADAHAAAFQABAMgJAGQAKACAEALQAEALgFAHQgFAIgMABQgNACgKgBIgNgDIANADQAMADALAGQAPAIgRAHQgLAEgMABIgBABIgGAAIAAAAIgBAAIgKgBIgEgBQARAKAMAOIgCABQgNAIgOAAIgBAAIAAAAIgMgCIgCAAIgBAAQgHgCgIgHQgCAVgQAGQgJADgHAAIAAAAIgBAAQgOAAgKgMIgIgJIAIAJQAKAMAOAAIABAAIAAAAQAHAAAJgDQAQgGACgVQAIAHAHACIABAAIACAAIAMACIAAAAIABAAQAOAAANgIIACgBQgMgOgRgKIAEABIAKABIABAAIAAAAIAGAAIABgBQgBAKAMABQAZADAXgKIAngRQAGgDAFAAQATAAAWABQAYADAZgBQASgBAKgLIAAAAQAGAVAQAUQARAUgDAZQgCATgFAIQADAGABAGIAAADQAAALgJAGIACAAIABAAIAAAAIAAAAQAQAAAPAIIADACIABABQAHAEAAABIgBAAIABAAQAAgBgHgEIgBgBIgDgCQgPgIgQAAIAAAAIAAAAIgBAAIgCAAQAJgGAAgLIAAgDQAKgSAMALQACAPgBAFQAMgTAOAKIAAAIQgBAIgBABQABgBABgIQAjgFgMAcQASgTgEAdQATALgFAcQgFAVgMAXQAKAKgEAOQgDANgMAMQgPAPgZAAQgaABgXgHQgGgBgCgFQgEgMgIgFIABgRIAAgGIAAAAQAAgZAQgOQAEgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgigbIAiAbQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEADQgQAOAAAZIAAAAIAAAGIgBARQgIgFgMACIAAAIQgCAdgaABIgxABIgCAAQgZAAgOgOgAByD4IALAVQANAJABARQgBgRgNgJIgLgVQgDgGAAgEQAAgGAHgEQATgJAHgUIABgDQACgIAAgHQAAgOgIgJIgCgKQAAgSARgKIABAAQAHgEAHAAIABAAIAAAAQAKAAAKAHQgKgHgKAAIAAAAIgBAAQgHAAgHAEIgBAAQgRAKAAASIACAKIgEgEQgRgNgXAAIAAgCQAAgOgPgKQgNgIgKAAIAAAAIAAAAQgKAAgHAHIgBACIAAAAIgBAAQgCADAAAGIABAKIgFAAIAAAAIAAAAQgVAAAEAbIgDgCQgHgEgEgBIgBAAIAAAAQgIABABARIAAACIgKgCIgBAAIgBAAIAAAAIgBAAIgEABIAAAAIgFABIgCABIgRAAIgMAAIAMAAIARAAIgBAIQAAASAUAGQgUgGAAgSIABgIIACgBIAFgBIAAAAIAEgBIABAAIAAAAIABAAIABAAIAKACQAJABADADQgDgDgJgBIAAgCQgBgRAIgBIAAAAIABAAQAEABAHAEIADACQgEgbAVAAIAAAAIAAAAIAFAAIgBgKQAAgGACgDIABAAIAAAAIABgCQAHgHAKAAIAAAAIAAAAQAKAAANAIQAPAKAAAOIAAACQAXAAARANIAEAEQAIAJAAAOQAAAHgCAIIgBADQgHAUgTAJQgHAEAAAGQAAAEADAGgAAAECQgPgGgBgVQABAVAPAGgAAkCmQgSALgPARQAPgRASgLQALgHAMgCIADgBIAFAAIAFAAIAAAAIABAAIAHAAIgHAAIgBAAIAAAAIgFAAIgFAAIgDABIgMgMIgKgKIAKAKIAMAMQgMACgLAHgAg/gfQAMgEAIAAIABAAIAAAAIAFAAIgFAAIAAAAIgBAAQgIAAgMAEgAjNgyQAGAAAHgDQAKgFANgDQAUgFAHgFQAEgCADgGIAFgHIgFAHQgDAGgEACQgHAFgUAFQgNADgKAFQgHADgGAAIAAAAIAAAAQgOAAgMgNIgBgBIABABQAMANAOAAIAAAAIAAAAgAAGhPQAUgBAOgOIABgBIAdgfIAIgJIgIAJIgdAfIgBABQgOAOgUABIAAAAIAAAAIgIgBQgXgDgUgKQgNgHgHgKQAHAKANAHQAUAKAXADIAIABIAAAAIAAAAgADDhfQgCgOAAgPIAAgFIAAAFQAAAPACAOgAEahnIAGAAIAAgBIAAABIgGAAIAAAAIgBAAIgGgBIgDAAIADAAIAGABIABAAIAAAAgAgEiNQADAPAKANQAOAPAQgSQAQgUAAgTQgNALgTgEQgWgFgIgZQgCARAFAUgAEnh7IACAAIABAAIAEAAIgEAAIgBAAIgCAAIAAAAIgBAAQgMAAgFgGQgIgIAAgFQAAgFAJgBQgJABAAAFQAAAFAIAIQAFAGAMAAIABAAIAAAAgAExiNIAIgBIABAAIAAAAIABgBIgBABIAAAAIgBAAIgIABIAAAAIgBAAQgMgBgOgGIAAAAIgBgJQAAgUARgHQgHgDAAgIIACgKIgCAKQAAAIAHADQgRAHAAAUIABAJIAAAAQAOAGAMABIABAAIAAAAgAA1i+QAXAAADgbQgRgEgLgLIgHgHQgNgRgCgYQACAYANARIAHAHQALALARAEQgDAbgXAAgAEDjHIADgBIAAAAIAAAAQAQAAALgGIAAABIAAgBIAAAAQgLAGgQAAIAAAAIAAAAIgDABIAAAAIgBAAQgTgBgJgLIgBAAIABAAQAJALATABIABAAIAAAAgAgPj2QgGADgFAEIgEAFIAEgFQAFgEAGgDQAPgFAOAFIAGADIgGgDQgIgCgGAAQgHAAgIACgAAuj6IABgBQAFgIAJAAIAAAAIAAAAQAFAAAGACIAAABIAAgBQgGgCgFAAIAAAAIAAAAQgJAAgFAIIgBABgAgfCwIAAAAgAgHCvIAAAAgACLCeIAAAAgAi6BBIAAAAgAEqjUIAAAAg");
	this.shape_15.setTransform(35.9,43.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_16.setTransform(35.9,38.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AhbCzQgTgKgaAAQgZAAgTgMQgUgPgJgUQgJgVAGgZQAFgWAQgSQARgTAUgGQADAHAJAGQAVAOAVAKQAWAKAZABIAkACQgTAMgRAOQgRANAAAZQABASAIAOQAMAUACAPQgXgCgVgLgAgLhDQgMgBABgKQALgBALgFQARgHgPgIQgKgGgNgDQALABALgBQANgCAFgIQAFgIgEgLQgEgKgKgCQAIgHAAgLQAZgCAPATQAJALAJgGQATgMAXgMIAogSQAPgHALAHIAFAFQARASAJATQAFAKgBAIQAAANgKAKIAAABQgKAKgSABQgZABgZgCQgVgCgTABQgGAAgGACIgnARQgSAIgTAAIgKAAg");
	this.shape_17.setTransform(31.5,55.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDBTQgLgMgEgPQgFgUADgSQAIAZAWAFQASAEAOgLQAAATgRAUQgIAKgIAAQgHAAgFgHgAgngqQgEgRAHgQQAJgWANANQAPAPgBAaQgUAGAHASQgVAAgFgXg");
	this.shape_18.setTransform(37.3,23.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF99").s().p("Ah6CGIgvgJIAAAAQALgBAGgHQAQgSABgaQAAgZgCgZQgDgZAGgWQAHgXAMgUQAKgSATgNQARgLATgLQAJgEAIgCIAKgCIATgEIABAFIgBgFIANgBIgEAEIAJgFQASgIAWADQAXAEAPAOQASAQANAQQAPATAAAXQABAaAGAVIAMAuQAGAZAHAPQgfgDgTAJQAJgMAEgPQAGgWgBgaQgBgZgKgSQgLgSgCgUQgDgYgVgKQgLgEgMgCQgZgDgVADQgVAEgUAMQgWAOgLAQQgGAKABAOQACAZAHAVQAHAXgCAZQgBAYgNAUIgTAcQgGADgEAGIgjgHgAgWh7IgBgFIABAFg");
	this.shape_19.setTransform(31.7,20.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC99").s().p("AAVFAIgCgCIgJgLIAJALQgTgNgVgFQgYgGgYAFQgQAEgGADQgCgPgMgUQgIgNAAgSQgBgZARgOQARgOAUgLIglgCQgZgCgWgKQgVgKgVgOQgIgGgEgHIgBgFQgFgXAEgZQAIgCAGgFIgEgHIAEAHQgGAFgIACQgMAEgQgCQgZgEgXgFQgWgFgTgKQgVgNgNgSQgJgNACgSQACgaARgNQATgPAVgLQAUgKAXgFIAkgIIAHgCIABAAIAAAAIABAAIAuAJIAjAHIAEAAIAHgJIATgcQAMgUACgYQACgZgHgXQgHgWgCgZQgBgOAGgKQALgQAWgOQATgNAXgDQAUgDAZADQALACAMAEQAVAKACAYQADAUAKASQALASABAaQABAagGAWQgEAPgJAMQASgJAgADQAVgEAWAGQALADAHAFQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAIABAAIAAgPQADgZALgTIAKgRQgFgbATgJQANgHASABQASACAMAIIAIAGIABgMIAAgBQASgFAVACQAIAAABAMQAAALgEAHIgBAAIgBABQgGAHgOABIgBAAIAAAAIgDgBQgOAAgHgDIAEgDQADgDAAgDQAAgDgDgDIgCgEIACAEQADADAAADQAAADgDADIgEADIAAABIgJAFIAJgFIAAgBQAHADAOAAIADABIAAAAIABAAQAOgBAGgHIABgBIABAAQAZAIgSAWIgOACIgCAAIgcACIgCAAIAAAAIgGAAIgGgBQgHgDAAgIIACgKIAAgBIAAAAQgLAGgQAAIAAAAIAAAAIgDABIAAAAIgBAAQgTgBgJgLIgBAAIABAAQAJALATABIABAAIAAAAIADgBIAAAAIAAAAQAQAAALgGIAAABIgCAKQAAAIAHADQgRAHAAAUIABAJQgJABAAAFQAAAFAIAIQAFAGAMAAIABAAIAAAAIACAAIABAAIAEAAIgEAAIgBAAIgCAAIAAAAIgBAAQgMAAgFgGQgIgIAAgFQAAgFAJgBQAOAGAMABIABAAIAAAAIAIgBIABAAIAAAAIABgBIgBABIAAAAIgBAAIgIABIAAAAIgBAAQgMgBgOgGIgBgJQAAgUARgHIAGABIAGAAIAAAAIACAAIAcgCIACAAQAGABgCAKQgDARgNAJQgFAEgGABQAEARgRADQABARgPACQACAagJATQgLAVgRAMQgRAMgYAFQgVAFgTgIQAAgJgFgJQgJgTgRgTIgEgFQgPgOgQgGQAQAGAPAOQgLgGgQAGIgoATQgXALgTANQgJAGgIgLQgPgTgZABQAAgFgDgHIgEAAIgdACIAAAAIAAAAIgPgBIgBAAQAFgDABgLIAAAAIAAgBQACgYgSgBIgBAAIAAAAIgJACIgBAAQgKACgHAFQAHgFAKgCIABAAIAJgCIAAAAIABAAQASABgCAYIAAABIAAAAQgBALgFADIABAAIAPABIAAAAIAAAAIAdgCIAEAAQADAHAAAFQABAMgJAGQAKACAEALQAEALgFAHQgFAIgMABQgNACgKgBIgNgDIANADQAMADALAGQAPAIgRAHQgLAEgMABIgBABIgGAAIAAAAIgBAAIgKgBIgEgBQARAKAMAOIgCABQgNAIgOAAIgBAAIAAAAIgMgCIgCAAIgBAAQgHgCgIgHQgCAVgQAGQgJADgHAAIAAAAIgBAAQgOAAgKgMIgIgJIAIAJQAKAMAOAAIABAAIAAAAQAHAAAJgDQAQgGACgVQAIAHAHACIABAAIACAAIAMACIAAAAIABAAQAOAAANgIIACgBQgMgOgRgKIAEABIAKABIABAAIAAAAIAGAAIABgBQgBAKAMABQAZADAXgKIAngRQAGgDAFAAQATAAAWABQAYADAZgBQASgBAKgLIAAAAQAGAVAQAUQARAUgDAZQgCATgFAIQADAGABAGIAAADQAAALgJAGIACAAIABAAIAAAAIAAAAQAQAAAPAIIADACIABABQAHAEAAABIgBAAIABAAQAAgBgHgEIgBgBIgDgCQgPgIgQAAIAAAAIAAAAIgBAAIgCAAQAJgGAAgLIAAgDQAKgSAMALQACAPgBAFQAMgTAOAKIAAAIQgBAIgBABQABgBABgIQAjgFgMAcQASgTgEAdQATALgFAcQgFAVgMAXQAKAKgEAOQgDANgMAMQgPAPgZAAQgaABgXgHQgGgBgCgFQgEgMgIgFIABgRIAAgGIAAAAQAAgZAQgOQAEgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgigbIAiAbQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEADQgQAOAAAZIAAAAIAAAGIgBARQgIgFgMACIAAAIQgCAdgaABIgxABIgCAAQgZAAgOgOgAByD4IALAVQANAJABARQgBgRgNgJIgLgVQgDgGAAgEQAAgGAHgEQATgJAHgUIABgDQACgIAAgHQAAgOgIgJIgCgKQAAgSARgKIABAAQAHgEAHAAIABAAIAAAAQAKAAAKAHQgKgHgKAAIAAAAIgBAAQgHAAgHAEIgBAAQgRAKAAASIACAKIgEgEQgRgNgXAAIAAgCQAAgOgPgKQgNgIgKAAIAAAAIAAAAQgKAAgHAHIgBACIAAAAIgBAAQgCADAAAGIABAKIgFAAIAAAAIAAAAQgVAAAEAbIgDgCQgHgEgEgBIgBAAIAAAAQgIABABARIAAACIgKgCIgBAAIgBAAIAAAAIgBAAIgEABIAAAAIgFABIgCABIgRAAIgMAAIAMAAIARAAIgBAIQAAASAUAGQgUgGAAgSIABgIIACgBIAFgBIAAAAIAEgBIABAAIAAAAIABAAIABAAIAKACQAJABADADQgDgDgJgBIAAgCQgBgRAIgBIAAAAIABAAQAEABAHAEIADACQgEgbAVAAIAAAAIAAAAIAFAAIgBgKQAAgGACgDIABAAIAAAAIABgCQAHgHAKAAIAAAAIAAAAQAKAAANAIQAPAKAAAOIAAACQAXAAARANIAEAEQAIAJAAAOQAAAHgCAIIgBADQgHAUgTAJQgHAEAAAGQAAAEADAGgAAAECQgPgGgBgVQABAVAPAGgAAkCmQgSALgPARQAPgRASgLQALgHAMgCIADgBIAFAAIAFAAIAAAAIABAAIAHAAIgHAAIgBAAIAAAAIgFAAIgFAAIgDABIgMgMIgKgKIAKAKIAMAMQgMACgLAHgAg/gfQAMgEAIAAIABAAIAAAAIAFAAIgFAAIAAAAIgBAAQgIAAgMAEgAjNgyQAGAAAHgDQAKgFANgDQAUgFAHgFQAEgCADgGIAFgHIgFAHQgDAGgEACQgHAFgUAFQgNADgKAFQgHADgGAAIAAAAIAAAAQgOAAgMgNIgBgBIABABQAMANAOAAIAAAAIAAAAgAAGhPQAUgBAOgOIABgBIAdgfIAIgJIgIAJIgdAfIgBABQgOAOgUABIAAAAIAAAAIgIgBQgXgDgUgKQgNgHgHgKQAHAKANAHQAUAKAXADIAIABIAAAAIAAAAgADDhfQgCgOAAgPIAAgFIAAAFQAAAPACAOgAEahnIAGAAIAAgBIAAABIgGAAIAAAAIgBAAIgGgBIgDAAIADAAIAGABIABAAIAAAAgAgEiNQADAPAKANQAOAPAQgSQAQgUAAgTQgNALgTgEQgWgFgIgZQgCARAFAUgAA1i+QAXAAADgbQgRgEgLgLQAJABAGgCQAHgEAAgLIAAgFQgCgVgPgPQgUgTgHAcQACAYANARIAHAHQALALARAEQgDAbgXAAgAgXkQQgHAQAEARQAGAXAUAAIAGgBQAHAAgCgNQAAgEADgGQABgbgPgPQgFgEgEAAQgIAAgGAOgAgfCwIAAAAgAgHCvIAAAAgACLCeIAAAAgAi6BBIAAAAg");
	this.shape_20.setTransform(35.9,43.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#99CCFF").s().p("AAABRQgBgYABgYIABgkIAAgLQgPgRABgXQABgWAPgLQAQAAANAKQAVAQgMAXQgDAGgEAFIgCADQgKALgOAHIAAABIAAArIgBAlIAAAAIgBANIgGgHgAgYgKQgWgLACgbQACgYAWgJIABgBQgBAPgFALQgFAMAFAOQAEAOAGAJIgJgDg");
	this.shape_21.setTransform(65.3,11.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgDAmQgFgJgEgOQgFgOAFgLQAEgLACgPQAJgEAJgBIAEAAQgQALAAAWQgBAWAOARIAAALQgIgBgIgDg");
	this.shape_22.setTransform(64,7.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_23.setTransform(39.2,38.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AhbCzQgTgKgaAAQgZAAgSgMQgVgPgJgUQgJgVAGgZQAGgWAQgSQAQgTAUgGQAEAHAIAGQAVAOAVAKQAWAKAZABIAlACQgUAMgRAOQgRANABAZQAAASAIAOQAMAUACAPQgWgCgWgLgAgLhDQgMgBABgKQAMgBAKgFQARgHgPgIQgKgGgMgDQAKABAMgBQAMgCAFgIQAFgIgEgLQgEgKgKgCQAJgHgBgLQAZgCAQATQAIALAJgGQATgMAXgMIAogSQAQgHALAHIAEAFQARARAJATIAAAAIAEAZQgCAJgIAIIAAABQgKAKgSABQgZABgYgCQgWgCgTABQgFAAgGACIgoARQgSAIgTAAIgKAAg");
	this.shape_24.setTransform(31.5,55.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC99").s().p("AAFFAIgCgCIgIgLIAIALQgSgNgWgFQgYgGgYAFQgQAEgGADQgCgPgMgUQgIgNAAgSQgBgZARgOQARgOAUgLIglgCQgZgCgWgKQgVgKgVgOQgIgGgEgHIgBgFQgFgXAEgZQAIgCAGgFIgEgHIAEAHQgGAFgIACQgMAEgQgCQgYgEgYgFQgWgFgTgKQgVgNgNgSQgJgNACgSQACgaARgNQATgPAVgLQAUgKAXgFIAkgIIAHgCIABAAIAAAAIABAAIAuAJIAjAHIAEAAIAHgJIATgcQANgUABgYQACgZgHgXQgHgWgCgZQgBgOAGgKQALgQAWgOQATgNAXgDQAVgDAYADQAMACALAEQAVAKACAYQADAUAKASQALASABAaQABAagGAWQgEAPgJAMQASgJAgADQAVgEAWAGIAJADIAAAAQAYAHACAEQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABIAAAAQgGARgCAQQACgQAGgRIAGgOQAKgXAQgPIAPgNQAEgbAUgDQAPgCARAHQARAHAIALIAFAJIAFgMIAAAAQAUAAATAIQAIAEgEAKQgCALgHAFIAAABQgFADgGAAIgBAAIAAAAQgFAAgHgCIgBgBIgCgBQgNgFgGgEIAFgCQAFgDAAgEIgBgFIgCgDIACADIABAFQAAAEgFADIgFACQAGAEANAFIACABIABABQAHACAFAAIAAAAIABAAQAGAAAFgDIAAgBQAWAQgYAPIgPgCQAGACgEAJQgJAQgPAFQgGACgGgBQgQgBgSgQQAFgbAVgCQgVACgFAbQASAQAQABQgBAQgRgCIgFgBQgOgDgEgJIAAAAIgBgCIAAgBQgGgPAKAAIAAAAIAAAAIAEAAIAAAAIAAAAIgEAAIAAAAIAAAAQgKAAAGAPIAAABIABACIAAAAQAEAJAOADIAFABQgFARgPgCQgHgBgIgFQAIAFAHABQgGAZgPAPQgQAQgVAGQgTAGgYgCQgLgBgJgEIgEgZIAAAAQgJgSgRgSIgEgFQgPgOgQgGQAQAGAPAOQgLgGgQAGIgoATQgXALgTANQgJAGgHgLQgQgTgZABQAAgFgDgHIgEAAIgdACIAAAAIAAAAIgPgBIgBAAQAFgDABgLIAAAAIAAgBQADgYgTgBIgBAAIAAAAIgJACIgBAAQgKACgHAFQAHgFAKgCIABAAIAJgCIAAAAIABAAQATABgDAYIAAABIAAAAQgBALgFADIABAAIAPABIAAAAIAAAAIAdgCIAEAAQADAHAAAFQABAMgJAGQAKACAEALQAEALgFAHQgFAIgMABQgNACgKgBIgNgDIANADQANADAKAGQAPAIgRAHQgLAEgMABIgBABIgGAAIAAAAIgBAAIgKgBIgEgBQARAKAMAOIgCABQgNAIgOAAIgBAAIAAAAIgMgCIgBAAIgCAAQgHgCgIgHQgBAVgRAGQgJADgHAAIAAAAIgBAAQgOAAgKgMIgIgJIAIAJQAKAMAOAAIABAAIAAAAQAHAAAJgDQARgGABgVQAIAHAHACIACAAIABAAIAMACIAAAAIABAAQAOAAANgIIACgBQgMgOgRgKIAEABIAKABIABAAIAAAAIAGAAIABgBQgBAKAMABQAaADAWgKIAngRQAGgDAFAAQATAAAWABQAYADAZgBQASgBAKgLIAAAAQAGAVAQAUQARAUgDAZQgCATgFAIQADAGABAGIAAADQAAALgJAGIACAAIABAAIAAAAIABAAQAPAAAPAIIADACIABABQAHAEAAABIgBAAIABAAQAAgBgHgEIgBgBIgDgCQgPgIgPAAIgBAAIAAAAIgBAAIgCAAQAJgGAAgLIAAgDQAKgSAMALQADAPgCAFQAMgTAOAKIAAAIQgBAIgBABQABgBABgIQAjgFgMAcQASgTgEAdQATALgFAcQgFAVgMAXQAKAKgEAOQgDANgMAMQgPAPgZAAQgaABgXgHQgGgBgCgFQgEgMgIgFIABgRIAAgGIAAAAQAAgZAQgOQAEgDAAgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBIgigbIAiAbQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAADgEADQgQAOAAAZIAAAAIAAAGIgBARQgIgFgMACIAAAIQgCAdgaABIgxABIgCAAQgZAAgOgOgABiD4IALAVQAOAJAAARQAAgRgOgJIgLgVQgDgGAAgEQAAgGAHgEQATgJAHgUIABgDQACgIAAgHQAAgOgIgJIgBgKQgBgSARgKIABAAQAHgEAHAAIABAAIAAAAQAKAAAKAHQgKgHgKAAIAAAAIgBAAQgHAAgHAEIgBAAQgRAKABASIABAKIgEgEQgRgNgXAAIAAgCQAAgOgPgKQgMgIgKAAIgBAAIAAAAQgJAAgIAHIgBACIAAAAIgBAAQgCADAAAGIABAKIgFAAIAAAAIAAAAQgUAAAEAbIgDgCQgHgEgEgBIgBAAIAAAAQgIABAAARIAAACIgKgCIgBAAIgBAAIAAAAIgBAAIgEABIAAAAIgFABIgCABIgRAAIgMAAIAMAAIARAAIgBAIQAAASAUAGQgUgGAAgSIABgIIACgBIAFgBIAAAAIAEgBIABAAIAAAAIABAAIABAAIAKACQAKABADADQgDgDgKgBIAAgCQAAgRAIgBIAAAAIABAAQAEABAHAEIADACQgEgbAUAAIAAAAIAAAAIAFAAIgBgKQAAgGACgDIABAAIAAAAIABgCQAIgHAJAAIAAAAIABAAQAKAAAMAIQAPAKAAAOIAAACQAXAAARANIAEAEQAIAJAAAOQAAAHgCAIIgBADQgHAUgTAJQgHAEAAAGQAAAEADAGgAgPECQgQgGgBgVQABAVAQAGgAAUCmQgSALgOARQAOgRASgLQALgHAMgCIADgBIAFAAIAFAAIAAAAIABAAIAHAAIgHAAIgBAAIAAAAIgFAAIgFAAIgDABIgMgMIgKgKIAKAKIAMAMQgMACgLAHgAhPgfQAMgEAIAAIABAAIAAAAIAFAAIgFAAIAAAAIgBAAQgIAAgMAEgAjdgyQAGAAAHgDQAKgFANgDQAUgFAHgFQAEgCADgGIAFgHIgFAHQgDAGgEACQgHAFgUAFQgNADgKAFQgHADgGAAIAAAAIAAAAQgOAAgMgNIgBgBIABABQAMANAOAAIAAAAIAAAAgAgJhPQATgBAOgOIABgBIAdgfIAIgJIgIAJIgdAfIgBABQgOAOgTABIAAAAIAAAAIgJgBQgXgDgUgKQgNgHgHgKQAHAKANAHQAUAKAXADIAJABIAAAAIAAAAgAgUiNQADAPALANQANAPAQgSQAQgUAAgTQgNALgTgEQgVgFgJgZQgCARAFAUgAE4iMQAPAGAVAEQgVgEgPgGIgGgDIAGADgAEyiPQgDgDAAgFQAAgFAFgJIABAAIgBAAIgBAAIgFAAIAAAAIgBAAQgJAAgJgCIgCgBQgWgGgFgPQAFAPAWAGIACABQAJACAJAAIABAAIAAAAIAFAAIABAAIAAAAQgFAJAAAFQAAAFADADgAE/ioIgKADIAKgDIAAAAgAAli+QAXAAADgbQgQgEgMgLQAJABAGgCQAHgEAAgLIAAgFQgCgVgPgPQgUgTgHAcQACAYANARIAHAHQAMALAQAEQgDAbgXAAgAgnkQQgHAQAEARQAGAXAVAAIAGgBQAHAAgCgNQAAgEADgGQABgbgQgPQgFgEgEAAQgIAAgGAOgAgvCwIAAAAgAgXCvIAAAAgAB7CeIAAAAgAjKBBIAAAAgAEUhEIAAAAgAEohTIAAAAgAE6hhIAAAAgAE/ioIAAAAg");
	this.shape_25.setTransform(37.5,43.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgTAgQgCgLAAgOQgBgOAJgJQAIgKAFgNQAKgBAKACIADABQgTAFgGAUQgJAWAKAVIgDAJQgIgDgHgFg");
	this.shape_26.setTransform(73,12);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#99CCFF").s().p("AgoBNQAGgYAJgWIANgiIADgKQgKgVAJgWQAIgVARgFQAQAFAJANQAOAWgSATQgFAFgFADIgCACQgNAHgPACIAAACIgOApIgMAiIgBAAIgEAMIgFgIgAgigSQgSgRALgZQAJgWAXgCIACAAQgGAOgIAJQgIAJAAAPQAAAPACAKIgHgGg");
	this.shape_27.setTransform(73.8,16.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_28.setTransform(35.9,38.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC99").s().p("AAVFAIgCgCIgJgLIAJALQgTgNgVgFQgYgGgYAFQgQAEgGADQgCgPgMgUQgIgNAAgSQgBgZARgOQARgOAUgLIglgCQgZgCgWgKQgVgKgVgOQgIgGgEgHIgBgFQgFgXAEgZQAIgCAGgFIgEgHIAEAHQgGAFgIACQgMAEgQgCQgZgEgXgFQgWgFgTgKQgVgNgNgSQgJgNACgSQACgaARgNQATgPAVgLQAUgKAXgFIAkgIIAHgCIABAAIAAAAIABAAIAuAJIAjAHIAEAAIAHgJIATgcQAMgUACgYQACgZgHgXQgHgWgCgZQgBgOAGgKQALgQAWgOQATgNAXgDQAUgDAZADQALACAMAEQAVAKACAYQADAUAKASQALASABAaQABAagGAWQgEAPgJAMQASgJAgADQAVgEAWAGQALADAHAFQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAIABAAIAAgPQADgZALgTIAKgRQgFgbATgJQANgHASABQASACAMAIIAIAGIABgMIAAgBQASgFAVACQAIAAABAMQAAALgEAHIgBAAIgBABQgGAHgOABIgBAAIAAAAIgDgBQgOAAgHgDIAEgDQADgDAAgDQAAgDgDgDIgCgEIACAEQADADAAADQAAADgDADIgEADIAAABIgJAFIAJgFIAAgBQAHADAOAAIADABIAAAAIABAAQAOgBAGgHIABgBIABAAQAZAIgSAWIgOACIgCAAIgcACIgCAAIAAAAIgGAAIgGgBIAGABIAGAAIAAAAIACAAIAcgCIACAAQAGABgCAKQgDARgNAJQgFAEgGABQAEARgRADQABARgPACQACAagJATQgLAVgRAMQgRAMgYAFQgVAFgTgIQAAgJgFgJQgJgTgRgTIgEgFQgPgOgQgGQAQAGAPAOQgLgGgQAGIgoATQgXALgTANQgJAGgIgLQgPgTgZABQAAgFgDgHIgEAAIgdACIAAAAIAAAAIgPgBIgBAAQAFgDABgLIAAAAIAAgBQACgYgSgBIgBAAIAAAAIgJACIgBAAQgKACgHAFQAHgFAKgCIABAAIAJgCIAAAAIABAAQASABgCAYIAAABIAAAAQgBALgFADIABAAIAPABIAAAAIAAAAIAdgCIAEAAQADAHAAAFQABAMgJAGQAKACAEALQAEALgFAHQgFAIgMABQgNACgKgBIgNgDIANADQAMADALAGQAPAIgRAHQgLAEgMABIgBABIgGAAIAAAAIgBAAIgKgBIgEgBQARAKAMAOIgCABQgNAIgOAAIgBAAIAAAAIgMgCIgCAAIgBAAQgHgCgIgHQgCAVgQAGQgJADgHAAIAAAAIgBAAQgOAAgKgMIgIgJIAIAJQAKAMAOAAIABAAIAAAAQAHAAAJgDQAQgGACgVQAIAHAHACIABAAIACAAIAMACIAAAAIABAAQAOAAANgIIACgBQgMgOgRgKIAEABIAKABIABAAIAAAAIAGAAIABgBQgBAKAMABQAZADAXgKIAngRQAGgDAFAAQATAAAWABQAYADAZgBQASgBAKgLIAAAAQAGAVAQAUQARAUgDAZQgCATgFAIQADAGABAGIAAADQAAALgJAGIACAAIABAAIAAAAIAAAAQAQAAAPAIIADACIABABQAHAEAAABIgBAAIABAAQAAgBgHgEIgBgBIgDgCQgPgIgQAAIAAAAIAAAAIgBAAIgCAAQAJgGAAgLIAAgDQAKgSAMALQACAPgBAFQAMgTAOAKIAAAIQgBAIgBABQABgBABgIQAjgFgMAcQASgTgEAdQATALgFAcQgFAVgMAXQAKAKgEAOQgDANgMAMQgPAPgZAAQgaABgXgHQgGgBgCgFQgEgMgIgFIABgRIAAgGIAAAAQAAgZAQgOQAEgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgigbIAiAbQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEADQgQAOAAAZIAAAAIAAAGIgBARQgIgFgMACIAAAIQgCAdgaABIgxABIgCAAQgZAAgOgOgAByD4IALAVQANAJABARQgBgRgNgJIgLgVQgDgGAAgEQAAgGAHgEQATgJAHgUIABgDQACgIAAgHQAAgOgIgJIgCgKQAAgSARgKIABAAQAHgEAHAAIABAAIAAAAQAKAAAKAHQgKgHgKAAIAAAAIgBAAQgHAAgHAEIgBAAQgRAKAAASIACAKIgEgEQgRgNgXAAIAAgCQAAgOgPgKQgNgIgKAAIAAAAIAAAAQgKAAgHAHIgBACIAAAAIgBAAQgCADAAAGIABAKIgFAAIAAAAIAAAAQgVAAAEAbIgDgCQgHgEgEgBIgBAAIAAAAQgIABABARIAAACIgKgCIgBAAIgBAAIAAAAIgBAAIgEABIAAAAIgFABIgCABIgRAAIgMAAIAMAAIARAAIgBAIQAAASAUAGQgUgGAAgSIABgIIACgBIAFgBIAAAAIAEgBIABAAIAAAAIABAAIABAAIAKACQAJABADADQgDgDgJgBIAAgCQgBgRAIgBIAAAAIABAAQAEABAHAEIADACQgEgbAVAAIAAAAIAAAAIAFAAIgBgKQAAgGACgDIABAAIAAAAIABgCQAHgHAKAAIAAAAIAAAAQAKAAANAIQAPAKAAAOIAAACQAXAAARANIAEAEQAIAJAAAOQAAAHgCAIIgBADQgHAUgTAJQgHAEAAAGQAAAEADAGgAAAECQgPgGgBgVQABAVAPAGgAAkCmQgSALgPARQAPgRASgLQALgHAMgCIADgBIAFAAIAFAAIAAAAIABAAIAHAAIgHAAIgBAAIAAAAIgFAAIgFAAIgDABIgMgMIgKgKIAKAKIAMAMQgMACgLAHgAg/gfQAMgEAIAAIABAAIAAAAIAFAAIgFAAIAAAAIgBAAQgIAAgMAEgAjNgyQAGAAAHgDQAKgFANgDQAUgFAHgFQAEgCADgGIAFgHIgFAHQgDAGgEACQgHAFgUAFQgNADgKAFQgHADgGAAIAAAAIAAAAQgOAAgMgNIgBgBIABABQAMANAOAAIAAAAIAAAAgAAGhPQAUgBAOgOIABgBIAdgfIAIgJIgIAJIgdAfIgBABQgOAOgUABIAAAAIAAAAIgIgBQgXgDgUgKQgNgHgHgKQAHAKANAHQAUAKAXADIAIABIAAAAIAAAAgADDhfQgCgOAAgPIAAgFIAAAFQAAAPACAOgAEahnIAGAAIAAgBIAAABIgGAAIAAAAIgBAAIgGgBIgDAAIADAAIAGABIABAAIAAAAgAgEiNQADAPAKANQAOAPAQgSQAQgUAAgTQgNALgTgEQgWgFgIgZQgCARAFAUgAEnh7IACAAIABAAIAEAAIgEAAIgBAAIgCAAIAAAAIgBAAQgMAAgFgGQgIgIAAgFQAAgFAJgBQgJABAAAFQAAAFAIAIQAFAGAMAAIABAAIAAAAgAExiNIAIgBIABAAIAAAAIABgBIgBABIAAAAIgBAAIgIABIAAAAIgBAAQgMgBgOgGIAAAAIgBgJQAAgUARgHQgHgDAAgIIACgKIgCAKQAAAIAHADQgRAHAAAUIABAJIAAAAQAOAGAMABIABAAIAAAAgAA1i+QAXAAADgbQgRgEgLgLQAJABAGgCQAHgEAAgLIAAgFQgCgVgPgPQgUgTgHAcQACAYANARIAHAHQALALARAEQgDAbgXAAgAEDjHIADgBIAAAAIAAAAQAQAAALgGIAAABIAAgBIAAAAQgLAGgQAAIAAAAIAAAAIgDABIAAAAIgBAAQgTgBgJgLIgBAAIABAAQAJALATABIABAAIAAAAgAgXkQQgHAQAEARQAGAXAUAAIAGgBQAHAAgCgNQAAgEADgGQABgbgPgPQgFgEgEAAQgIAAgGAOgAgfCwIAAAAgAgHCvIAAAAgACLCeIAAAAgAi6BBIAAAAgAEqjUIAAAAg");
	this.shape_29.setTransform(35.9,43.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.1,1,1).p("AEOjaQAQgKAVgDQAIgCADALQAEALgDAHQgEAMgSADQgOADgHAAQABgCACgCQAEgHgHgFQgCgCgCgBQgBgGgBgGQAAAAAAgBQgEgQgFgTQgEgRgHgaQAAAAAAgBQAMgLAGgNQABgBABgCQACgFABgHQAFgagYgKQgPgGgPAFQgCAAgBABQgJADgJAGQACAPgBAMQgCANAIAMQAIAMAIAIQAJABAIgCQAFATAEARQAFAYAHAXQgOgFgSADQgSAEgLAKQgPAOALAYQgCAIgDALQgGAVAEAZQABADAAADQAAAAgBAAQgVgGgVADQgIgOgGgZQgGgXgGgXQgGgWAAgaQAAgYgQgTQgNgPgRgQQgPgOgXgEQgWgEgSAJQgEACgFADQACgCACgDQAMgOARgOQAUgQAagDQATgCAMAFAENiyQAEgEADgEIAAAAAEXieQADAAADgBQAPgDAVgIAE/jMQAbABgMAbQgHADgGADQAGgBABAJQACASgLAMQgEAFgFADQgOAIgXgEQgQAHATAMQAJAFAOgEQACgBACgBQAPgHgIgPADLlrQAAABgBAAQgTAPAFAXQAEAbAZAFQAEABAFAAADgl1QgNAOAFAVQAFAXAUANQABAFABAFABkhUQAJgMAEgPQAFgWAAgaQgBgagLgSQgLgSgCgUQgDgZgVgJQgLgFgLgBQgagDgUADQgWADgTANQgWANgLARQgHAKACAOQACAZAHAWQAHAXgCAZQgCAYgNAUQgJAPgJAMQgEAGgEAEQgBAAgCgBQAFgFAGgEQAHgEAKgDQAegHgDAgQgCALgFADQAXABAbgCQACAHABAFQAYgBAPASQAJAKAJgFQATgNAXgKQAVgLATgIQAPgGALAGQgOgOgQgHABejLQgCgVgOgOQgUgUgIAdQADAYANARQADAEAEADQALALARAEQgDAbgXAAABJi1QAJABAFgDABejLQABADAAADQAAALgIADQgSgRAZgDgAENiyQAAAAAAAAQAAASAKACAENiyQAAAAgBAAQgJAIgPAFQgWAHgNgKADBhYQABAFABAEQADAMAEAKQACAGACAFACWhbQgggCgSAJQgEAFgEAEQgPAPgOAQQgRATgbgEQgWgDgUgLQgOgGgHgKACegWQADACACADQARARAJAUQAFAJgBAJQAFACAEABQAcgCAPgIQAWgMANgPQAOgQAFgWQAEgVgJgYQgGADgKABAC3A9QAAAAAAAAQgKAKgSABQgZACgZgDQgVgCgTABQgGAAgGADQgUAIgTAJQgWAJgZgCQgMgBABgKQgLABgLgCQARAJAMAOQgWAOgXgHQgIgBgHgIQgCAVgRAHQgZAJgPgSQgFgFgDgEQgHAEgHADQgEAZAEAXQABADABACQADAHAJAGQAVAOAVAKQAWAKAZABQASACASAAQAHABAGAAQAIAAAJAAQAGgEAHABQAFABAEAAAC3A9QAKgLAAgMADUCuQAEgIADgTQACgZgQgUQgQgUgGgVIAAAAAEvhmQAEARgNAGAEIjRQAEACAEACAERh4QgLgYARgOAgZk1QgEgWAHgUQAJgWAUgLAgLk3QgHABgHABQABACABADAgGk3QgDAAgCAAAgskyQgEgRgCgXQgCgSAIgLAi+g0IAAAAQAMAAAGgIQAPgSABgZQABgZgDgZQgDgaAHgWQAHgXALgUQALgSATgNQAQgLAUgLQAIgEAJgDQAEgBAFgBQABADABADAAji+QgVAGAIATQACAAADgBQAIAAgCgNQAAgEACgHQABgagPgPQgOgMgIAWQgHAQAEARQAFAXAVAAAgZk1QgKABgJACAiyB7QgNAEgPgCQgZgEgXgFQgWgFgTgKQgVgNgNgSQgJgNABgTQACgaARgMQATgPAWgLQATgKAYgFQARgEATgFQACgBAEAAQABAAAAgBIABAAQAAABAAAAQAaAFAVADQARADASAEQgDAEgCADQgEAGgEADQgHAFgTAFQgNADgLAFQgUAIgTgTAAOiAQAIAaAXAEQASAFAOgMQAAAUgRATQgPASgOgPQgLgMgDgPQgGgUADgSgAgrA5QgGgBgGgCAgrA5QALABAMgCQANgBAFgJQAEgHgDgLQgEgLgKgCQAIgHAAgKAgsBWQALgBAMgFQARgGgPgIQgLgGgNgDAgPAPQgKgCgQAGAAaDmQgCgDgLgCQAAgfAYATQgFgfAbAEQgDgOAEgFQAPgSAbARQAPAKgBAQQAXAAARANQACACACACQgFgaAVgMQARgKATANQADAGABAFQABANgKAIQATgBATALQAIAGgCAAAAoFxQgSgNgWgFQgXgGgYAFQgQAEgGADQgXgCgVgLQgTgJgagBQgZAAgTgMQgUgOgJgVQgJgUAGgaQAFgWAQgRQARgTAUgHAgnDiQgTAMgRAOQgRAOAAAZQABASAIANQALAUADAPAAFEaQABAUAQAGAgJDjQgFAYAXAIAAZD1QAPgRARgMQALgGANgDQgHgGgGgGQgFgEgEgFAChFaQAAAEAAAEQgCAdgaABQgZABgZAAQgZABgPgPQgCgBgBgBQgEgFgEgGAEIDGQAkgFgNAbQATgSgEAdQATALgGAcQgEAVgNAXQALAJgEAPQgDANgMAMQgQAPgYAAQgaABgXgHQgGgBgCgFQgEgMgIgFQABgFAAgSQgBgZARgOQAHgGgGgEQgSgOgPgNAEIDGQAAAHgBACADYC5QAJgRAMALQADAPgBAFQAMgUANAKQAAAFAAAEABRDPQABAAABAAQAJgBAJABAChFaQgBgRgNgJQgDgHgIgOQgJgOAMgGQAUgJAHgUQAAgCABgCQAGgYgNgNAC1FdQgIgFgMACAioBtQACADACAE");
	this.shape_30.setTransform(33.7,38.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC99").s().p("AArFAIgDgCIgIgLIAIALQgSgNgWgFQgXgGgYAFQgQAEgGADQgDgPgLgUQgIgNgBgSQAAgZARgOQARgOATgLIgkgCQgZgCgWgKQgVgKgVgOQgJgGgDgHIgCgFQgEgXAEgZQAHgCAHgFIgEgHIAEAHQgHAFgHACQgNAEgPgCQgZgEgXgFQgWgFgTgKQgVgNgNgSQgJgNABgSQACgaARgNQATgPAWgLQATgKAYgFIAkgIIAGgCIABAAIABAAIAAAAIAvAJIAjAHIADAAIAIgJIASgcQANgUACgYQACgZgHgXQgHgWgCgZQgCgOAHgKQALgQAWgOQATgNAWgDQAUgDAaADQALACALAEQAVAKADAYQACAUALASQALASABAaQAAAagFAWQgEAPgJAMQASgJAgADQAVgEAVAGIABAAIgBgGQgEgYAGgWIAFgSQgLgZAPgOQALgKASgDQASgEAOAFIAIAEIAEADQAEADAAAEIgBAFIgDAEIADgEIABgFQAAgEgEgDIgEgDIgCgMIAAAAQAQgLAVgDQAIgCADALQAEALgDAIQAbABgMAaIgNAGQAGgBABAKQACARgLANQgEAFgFACIgBABIAAAAQgJAFgNAAIAAAAIAAAAIgOgCQgFgJAAgIQAAgNALgIQgLAIAAANQAAAIAFAJQgIADAAAEQAAAGALAGQAFADAFAAIABAAIAAAAIAKgCIACAAIAEgCIgEACIgCAAIgKACIAAAAIgBAAQgFAAgFgDQgLgGAAgGQAAgEAIgDIAOACIAAAAIAAAAQANAAAJgFIAAAAIABgBQAIAPgPAHQAEARgNAGQAJAYgEAVQgFAXgOAQQgNAQgWALQgPAIgcACIgJgDQABgJgFgJQgJgTgRgTIgFgFQgOgOgQgGQAQAGAOAOQgLgGgPAGIgoATQgXALgTANQgJAGgJgLQgPgTgYABQgBgFgCgHIgEAAIgdACIAAAAIgBAAIgPgBIgBAAQAFgDACgLIAAAAIAAgBQACgYgTgBIAAAAIAAAAIgJACIgBAAQgKACgHAFQAHgFAKgCIABAAIAJgCIAAAAIAAAAQATABgCAYIAAABIAAAAQgCALgFADIABAAIAPABIABAAIAAAAIAdgCIAEAAQACAHABAFQAAAMgIAGQAKACAEALQADALgEAHQgFAIgNABQgMACgLgBIgMgDIAMADQANADALAGQAPAIgRAHQgMAEgLABIgBABIgGAAIgBAAIAAAAIgLgBIgDgBQARAKAMAOIgCABQgNAIgPAAIAAAAIAAAAIgNgCIgBAAIgBAAQgIgCgHgHQgCAVgRAGQgIADgHAAIgBAAIAAAAQgOAAgKgMIgIgJIAIAJQAKAMAOAAIAAAAIABAAQAHAAAIgDQARgGACgVQAHAHAIACIABAAIABAAIANACIAAAAIAAAAQAPAAANgIIACgBQgMgOgRgKIADABIALABIAAAAIABAAIAGAAIABgBQgBAKAMABQAZADAWgKIAngRQAGgDAGAAQATAAAVABQAZADAZgBQASgBAKgLIAAAAQAGAVAQAUQAQAUgCAZQgDATgEAIQADAGABAGIAAADQAAALgJAGIABAAIACAAIAAAAIAAAAQAQAAAOAIIADACIACABQAGAEAAABIAAAAIAAAAQAAgBgGgEIgCgBIgDgCQgOgIgQAAIAAAAIAAAAIgCAAIgBAAQAJgGAAgLIAAgDQAJgSAMALQADAPgBAFQAMgTANAKIAAAIQAAAIgBABQABgBAAgIQAkgFgNAcQATgTgEAdQATALgGAcQgEAVgNAXQALAKgEAOQgDANgMAMQgQAPgYAAQgaABgXgHQgGgBgCgFQgEgMgIgFIABgRIAAgGIAAAAQAAgZAQgOQAEgDAAgDQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIghgbIAhAbQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAADgEADQgQAOAAAZIAAAAIAAAGIgBARQgIgFgMACIAAAIQgCAdgaABIgyABIgCAAQgYAAgOgOgACID4IALAVQANAJABARQgBgRgNgJIgLgVQgEgGAAgEQAAgGAHgEQAUgJAHgUIABgDQACgIAAgHQAAgOgJgJIgBgKQAAgSARgKIABAAQAHgEAHAAIAAAAIABAAQAJAAALAHQgLgHgJAAIgBAAIAAAAQgHAAgHAEIgBAAQgRAKAAASIABAKIgEgEQgRgNgXAAIAAgCQAAgOgOgKQgNgIgKAAIAAAAIgBAAQgJAAgHAHIgBACIgBAAIAAAAQgCADAAAGIABAKIgFAAIAAAAIgBAAQgVAAAFAbIgEgCQgGgEgEgBIgBAAIAAAAQgJABAAARIAAACIgJgCIgBAAIgBAAIAAAAIgCAAIgCABIgBAAIgEABIgCABIgRAAIgNAAIANAAIARAAIgBAIQAAASATAGQgTgGAAgSIABgIIACgBIAEgBIABAAIACgBIACAAIAAAAIABAAIABAAIAJACQALABACADQgCgDgLgBIAAgCQAAgRAJgBIAAAAIABAAQAEABAGAEIAEACQgFgbAVAAIABAAIAAAAIAFAAIgBgKQAAgGACgDIAAAAIABAAIABgCQAHgHAJAAIABAAIAAAAQAKAAANAIQAOAKAAAOIAAACQAXAAARANIAEAEQAJAJAAAOQAAAHgCAIIgBADQgHAUgUAJQgHAEAAAGQAAAEAEAGgAAWECQgQgGgBgVQABAVAQAGgAA5CmQgRALgPARQAPgRARgLQALgHANgCIACgBIAGAAIAEAAIABAAIAAAAIAHAAIgHAAIAAAAIgBAAIgEAAIgGAAIgCABIgNgMIgJgKIAJAKIANAMQgNACgLAHgAgpgfQALgEAJAAIAAAAIAAAAIAGAAIgGAAIAAAAIAAAAQgJAAgLAEgAi3gyQAGAAAGgDQALgFANgDQATgFAHgFQAEgCAEgGIAFgHIgFAHQgEAGgEACQgHAFgTAFQgNADgLAFQgGADgGAAIAAAAIgBAAQgNAAgNgNIAAgBIAAABQANANANAAIABAAIAAAAgAAchPQAUgBAOgOIABgBIAdgfIAIgJIgIAJIgdAfIgBABQgOAOgUABIAAAAIgBAAIgIgBQgWgDgUgKQgOgHgHgKQAHAKAOAHQAUAKAWADIAIABIABAAIAAAAgADDiCIAHAWIAEALIgEgLIgHgWIgCgJIACAJgAARiNQADAPALANQAOAPAPgSQARgUAAgTQgOALgSgEQgXgFgIgZQgDARAGAUgAEWh+QAKgBAGgDQgGADgKABgABLi+QAXAAADgbQgRgEgLgLQAJABAFgCQAIgEAAgLIgBgFQgCgVgOgPQgUgTgIAcQADAYANARIAHAHQALALARAEQgDAbgXAAgAEdjSQAPgDAVgIQgVAIgPADIgEABIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAEgBgAEXjRQgKgCAAgRQAAARAKACgADkjVQAGAAAHgCIABAAIABgBIABAAQAPgFAJgIQgJAIgPAFIgBAAIgBABIgBAAQgHACgGAAIgBAAIAAAAQgKAAgHgGIgBAAIABAAQAHAGAKAAIAAAAIABAAgAgBkQQgHAQAEARQAFAXAVAAIAFgBQAIAAgCgNQAAgEACgGQABgbgPgPQgFgEgEAAQgIAAgFAOgAEMjlIABABIAAgBIAHgIIAAAAIAAAAIgHAIIgBAAgAEcjtIAJgCIABAAIAAAAIADAAQASgEAEgLQgEALgSAEIgDAAIAAAAIgBAAIgJACIgHAAIAAAAIgBAAIAAAAIAAAAIABAAIAAAAIAHAAgAgJCwIAAAAgAANCvIAAAAgACgCeIAAAAgAikBBIAAAAgAERirIAAAAg");
	this.shape_31.setTransform(33.7,43.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_32.setTransform(35.9,38.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC99").s().p("AAVFAIgCgCIgJgLIAJALQgTgNgVgFQgYgGgYAFQgQAEgGADQgCgPgMgUQgIgNAAgSQgBgZARgOQARgOAUgLIglgCQgZgCgWgKQgVgKgVgOQgIgGgEgHIgBgFQgFgXAEgZQAIgCAGgFIgEgHIAEAHQgGAFgIACQgMAEgQgCQgZgEgXgFQgWgFgTgKQgVgNgNgSQgJgNACgSQACgaARgNQATgPAVgLQAUgKAXgFIAkgIIAHgCIABAAIAAAAIABAAIAuAJIAjAHIAEAAIAHgJIATgcQAMgUACgYQACgZgHgXQgHgWgCgZQgBgOAGgKQALgQAWgOQATgNAXgDQAUgDAZADQALACAMAEQAVAKACAYQADAUAKASQALASABAaQABAagGAWQgEAPgJAMQASgJAgADQAVgEAWAGQALADAHAFQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAIABAAIAAgPQADgZALgTIAKgRQgFgbATgJQANgHASABQASACAMAIIAIAGIABgMIAAgBQASgFAVACQAIAAABAMQAAALgEAHIgBAAIgBABQgGAHgOABIgBAAIAAAAIgDgBQgOAAgHgDIAEgDQADgDAAgDQAAgDgDgDIgCgEIACAEQADADAAADQAAADgDADIgEADIAAABIgJAFIAJgFIAAgBQAHADAOAAIADABIAAAAIABAAQAOgBAGgHIABgBIABAAQAZAIgSAWIgOACIgCAAIgcACIgCAAIAAAAIgGAAIgGgBIAGABIAGAAIAAAAIACAAIAcgCIACAAQAGABgCAKQgDARgNAJQgFAEgGABQAEARgRADQABARgPACQACAagJATQgLAVgRAMQgRAMgYAFQgVAFgTgIQAAgJgFgJQgJgTgRgTIgEgFQgPgOgQgGQAQAGAPAOQgLgGgQAGIgoATQgXALgTANQgJAGgIgLQgPgTgZABQAAgFgDgHIgEAAIgdACIAAAAIAAAAIgPgBIgBAAQAFgDABgLIAAAAIAAgBQACgYgSgBIgBAAIAAAAIgJACIgBAAQgKACgHAFQAHgFAKgCIABAAIAJgCIAAAAIABAAQASABgCAYIAAABIAAAAQgBALgFADIABAAIAPABIAAAAIAAAAIAdgCIAEAAQADAHAAAFQABAMgJAGQAKACAEALQAEALgFAHQgFAIgMABQgNACgKgBIgNgDIANADQAMADALAGQAPAIgRAHQgLAEgMABIgBABIgGAAIAAAAIgBAAIgKgBIgEgBQARAKAMAOIgCABQgNAIgOAAIgBAAIAAAAIgMgCIgCAAIgBAAQgHgCgIgHQgCAVgQAGQgJADgHAAIAAAAIgBAAQgOAAgKgMIgIgJIAIAJQAKAMAOAAIABAAIAAAAQAHAAAJgDQAQgGACgVQAIAHAHACIABAAIACAAIAMACIAAAAIABAAQAOAAANgIIACgBQgMgOgRgKIAEABIAKABIABAAIAAAAIAGAAIABgBQgBAKAMABQAZADAXgKIAngRQAGgDAFAAQATAAAWABQAYADAZgBQASgBAKgLIAAAAQAGAVAQAUQARAUgDAZQgCATgFAIQADAGABAGIAAADQAAALgJAGIACAAIABAAIAAAAIAAAAQAQAAAPAIIADACIABABQAHAEAAABIgBAAIABAAQAAgBgHgEIgBgBIgDgCQgPgIgQAAIAAAAIAAAAIgBAAIgCAAQAJgGAAgLIAAgDQAKgSAMALQACAPgBAFQAMgTAOAKIAAAIQgBAIgBABQABgBABgIQAjgFgMAcQASgTgEAdQATALgFAcQgFAVgMAXQAKAKgEAOQgDANgMAMQgPAPgZAAQgaABgXgHQgGgBgCgFQgEgMgIgFIABgRIAAgGIAAAAQAAgZAQgOQAEgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgigbIAiAbQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAADgEADQgQAOAAAZIAAAAIAAAGIgBARQgIgFgMACIAAAIQgCAdgaABIgxABIgCAAQgZAAgOgOgAByD4IALAVQANAJABARQgBgRgNgJIgLgVQgDgGAAgEQAAgGAHgEQATgJAHgUIABgDQACgIAAgHQAAgOgIgJIgCgKQAAgSARgKIABAAQAHgEAHAAIABAAIAAAAQAKAAAKAHQgKgHgKAAIAAAAIgBAAQgHAAgHAEIgBAAQgRAKAAASIACAKIgEgEQgRgNgXAAIAAgCQAAgOgPgKQgNgIgKAAIAAAAIAAAAQgKAAgHAHIgBACIAAAAIgBAAQgCADAAAGIABAKIgFAAIAAAAIAAAAQgVAAAEAbIgDgCQgHgEgEgBIgBAAIAAAAQgIABABARIAAACIgKgCIgBAAIgBAAIAAAAIgBAAIgEABIAAAAIgFABIgCABIgRAAIgMAAIAMAAIARAAIgBAIQAAASAUAGQgUgGAAgSIABgIIACgBIAFgBIAAAAIAEgBIABAAIAAAAIABAAIABAAIAKACQAJABADADQgDgDgJgBIAAgCQgBgRAIgBIAAAAIABAAQAEABAHAEIADACQgEgbAVAAIAAAAIAAAAIAFAAIgBgKQAAgGACgDIABAAIAAAAIABgCQAHgHAKAAIAAAAIAAAAQAKAAANAIQAPAKAAAOIAAACQAXAAARANIAEAEQAIAJAAAOQAAAHgCAIIgBADQgHAUgTAJQgHAEAAAGQAAAEADAGgAAAECQgPgGgBgVQABAVAPAGgAAkCmQgSALgPARQAPgRASgLQALgHAMgCIADgBIAFAAIAFAAIAAAAIABAAIAHAAIgHAAIgBAAIAAAAIgFAAIgFAAIgDABIgMgMIgKgKIAKAKIAMAMQgMACgLAHgAg/gfQAMgEAIAAIABAAIAAAAIAFAAIgFAAIAAAAIgBAAQgIAAgMAEgAjNgyQAGAAAHgDQAKgFANgDQAUgFAHgFQAEgCADgGIAFgHIgFAHQgDAGgEACQgHAFgUAFQgNADgKAFQgHADgGAAIAAAAIAAAAQgOAAgMgNIgBgBIABABQAMANAOAAIAAAAIAAAAgAAGhPQAUgBAOgOIABgBIAdgfIAIgJIgIAJIgdAfIgBABQgOAOgUABIAAAAIAAAAIgIgBQgXgDgUgKQgNgHgHgKQAHAKANAHQAUAKAXADIAIABIAAAAIAAAAgADDhfQgCgOAAgPIAAgFIAAAFQAAAPACAOgAEahnIAGAAIAAgBIAAABIgGAAIAAAAIgBAAIgGgBIgDAAIADAAIAGABIABAAIAAAAgAgEiNQADAPAKANQAOAPAQgSQAQgUAAgTQgNALgTgEQgWgFgIgZQgCARAFAUgAEnh7IACAAIABAAIAEAAIgEAAIgBAAIgCAAIAAAAIgBAAQgMAAgFgGQgIgIAAgFQAAgFAJgBQgJABAAAFQAAAFAIAIQAFAGAMAAIABAAIAAAAgAExiNIAIgBIABAAIAAAAIABgBIgBABIAAAAIgBAAIgIABIAAAAIgBAAQgMgBgOgGIAAAAIgBgJQAAgUARgHQgRAHAAAUIABAJIAAAAQAOAGAMABIABAAIAAAAgAEmi4QgHgDAAgIIACgKIAAgBIAAAAIAAABIgCAKQAAAIAHADgAA1i+QAXAAADgbQgRgEgLgLQAJABAGgCQAHgEAAgLIAAgFQgCgVgPgPQgUgTgHAcQACAYANARIAHAHQALALARAEQgDAbgXAAgAEDjHIADgBIAAAAIAAAAQAQAAALgGQgLAGgQAAIAAAAIAAAAIgDABIAAAAIgBAAQgTgBgJgLIgBAAIABAAQAJALATABIABAAIAAAAgAgXkQQgHAQAEARQAGAXAUAAIAGgBQAHAAgCgNQAAgEADgGQABgbgPgPQgFgEgEAAQgIAAgGAOgAgfCwIAAAAgAgHCvIAAAAgACLCeIAAAAgAi6BBIAAAAgAEqjUIAAAAg");
	this.shape_33.setTransform(35.9,43.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_34.setTransform(39.2,38.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC99").s().p("AAFFAIgCgCIgIgLIAIALQgSgNgWgFQgYgGgYAFQgQAEgGADQgCgPgMgUQgIgNAAgSQgBgZARgOQARgOAUgLIglgCQgZgCgWgKQgVgKgVgOQgIgGgEgHIgBgFQgFgXAEgZQAIgCAGgFIgEgHIAEAHQgGAFgIACQgMAEgQgCQgYgEgYgFQgWgFgTgKQgVgNgNgSQgJgNACgSQACgaARgNQATgPAVgLQAUgKAXgFIAkgIIAHgCIABAAIAAAAIABAAIAuAJIAjAHIAEAAIAHgJIATgcQANgUABgYQACgZgHgXQgHgWgCgZQgBgOAGgKQALgQAWgOQATgNAXgDQAVgDAYADQAMACALAEQAVAKACAYQADAUAKASQALASABAaQABAagGAWQgEAPgJAMQASgJAgADQAVgEAWAGIAJADIAAAAQAYAHACAEQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABIAAAAQgGARgCAQQACgQAGgRIAGgOQAKgXAQgPIAPgNQAEgbAUgDQAPgCARAHQARAHAIALIAFAJIAFgMIAAAAQAUAAATAIQAIAEgEAKQgCALgHAFIAAABQgFADgGAAIgBAAIAAAAQgFAAgHgCIgBgBIgCgBQgNgFgGgEIAFgCQAFgDAAgEIgBgFIgCgDIACADIABAFQAAAEgFADIgFACIAAAAIgKADIAKgDIAAAAQAGAEANAFIACABIABABQAHACAFAAIAAAAIABAAQAGAAAFgDIAAgBQAWAQgYAPIgPgCQAGACgEAJQgJAQgPAFQgGACgGgBQgQgBgSgQQAFgbAVgCQgVACgFAbQASAQAQABQgBAQgRgCIgFgBQgOgDgEgJIAAAAIgBgCIAAgBQgGgPAKAAIAAAAIAAAAIAEAAIAAAAIAAAAIgEAAIAAAAIAAAAQgKAAAGAPIAAABIABACIAAAAQAEAJAOADIAFABQgFARgPgCQgHgBgIgFQAIAFAHABQgGAZgPAPQgQAQgVAGQgTAGgYgCQgLgBgJgEIgEgZIAAAAQgJgSgRgSIgEgFQgPgOgQgGQAQAGAPAOQgLgGgQAGIgoATQgXALgTANQgJAGgHgLQgQgTgZABQAAgFgDgHIgEAAIgdACIAAAAIAAAAIgPgBIgBAAQAFgDABgLIAAAAIAAgBQADgYgTgBIgBAAIAAAAIgJACIgBAAQgKACgHAFQAHgFAKgCIABAAIAJgCIAAAAIABAAQATABgDAYIAAABIAAAAQgBALgFADIABAAIAPABIAAAAIAAAAIAdgCIAEAAQADAHAAAFQABAMgJAGQAKACAEALQAEALgFAHQgFAIgMABQgNACgKgBIgNgDIANADQANADAKAGQAPAIgRAHQgLAEgMABIgBABIgGAAIAAAAIgBAAIgKgBIgEgBQARAKAMAOIgCABQgNAIgOAAIgBAAIAAAAIgMgCIgBAAIgCAAQgHgCgIgHQgBAVgRAGQgJADgHAAIAAAAIgBAAQgOAAgKgMIgIgJIAIAJQAKAMAOAAIABAAIAAAAQAHAAAJgDQARgGABgVQAIAHAHACIACAAIABAAIAMACIAAAAIABAAQAOAAANgIIACgBQgMgOgRgKIAEABIAKABIABAAIAAAAIAGAAIABgBQgBAKAMABQAaADAWgKIAngRQAGgDAFAAQATAAAWABQAYADAZgBQASgBAKgLIAAAAQAGAVAQAUQARAUgDAZQgCATgFAIQADAGABAGIAAADQAAALgJAGIACAAIABAAIAAAAIABAAQAPAAAPAIIADACIABABQAHAEAAABIgBAAIABAAQAAgBgHgEIgBgBIgDgCQgPgIgPAAIgBAAIAAAAIgBAAIgCAAQAJgGAAgLIAAgDQAKgSAMALQADAPgCAFQAMgTAOAKIAAAIQgBAIgBABQABgBABgIQAjgFgMAcQASgTgEAdQATALgFAcQgFAVgMAXQAKAKgEAOQgDANgMAMQgPAPgZAAQgaABgXgHQgGgBgCgFQgEgMgIgFIABgRIAAgGIAAAAQAAgZAQgOQAEgDAAgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBIgigbIAiAbQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAADgEADQgQAOAAAZIAAAAIAAAGIgBARQgIgFgMACIAAAIQgCAdgaABIgxABIgCAAQgZAAgOgOgABiD4IALAVQAOAJAAARQAAgRgOgJIgLgVQgDgGAAgEQAAgGAHgEQATgJAHgUIABgDQACgIAAgHQAAgOgIgJIgBgKQgBgSARgKIABAAQAHgEAHAAIABAAIAAAAQAKAAAKAHQgKgHgKAAIAAAAIgBAAQgHAAgHAEIgBAAQgRAKABASIABAKIgEgEQgRgNgXAAIAAgCQAAgOgPgKQgMgIgKAAIgBAAIAAAAQgJAAgIAHIgBACIAAAAIgBAAQgCADAAAGIABAKIgFAAIAAAAIAAAAQgUAAAEAbIgDgCQgHgEgEgBIgBAAIAAAAQgIABAAARIAAACIgKgCIgBAAIgBAAIAAAAIgBAAIgEABIAAAAIgFABIgCABIgRAAIgMAAIAMAAIARAAIgBAIQAAASAUAGQgUgGAAgSIABgIIACgBIAFgBIAAAAIAEgBIABAAIAAAAIABAAIABAAIAKACQAKABADADQgDgDgKgBIAAgCQAAgRAIgBIAAAAIABAAQAEABAHAEIADACQgEgbAUAAIAAAAIAAAAIAFAAIgBgKQAAgGACgDIABAAIAAAAIABgCQAIgHAJAAIAAAAIABAAQAKAAAMAIQAPAKAAAOIAAACQAXAAARANIAEAEQAIAJAAAOQAAAHgCAIIgBADQgHAUgTAJQgHAEAAAGQAAAEADAGgAgPECQgQgGgBgVQABAVAQAGgAAUCmQgSALgOARQAOgRASgLQALgHAMgCIADgBIAFAAIAFAAIAAAAIABAAIAHAAIgHAAIgBAAIAAAAIgFAAIgFAAIgDABIgMgMIgKgKIAKAKIAMAMQgMACgLAHgAhPgfQAMgEAIAAIABAAIAAAAIAFAAIgFAAIAAAAIgBAAQgIAAgMAEgAjdgyQAGAAAHgDQAKgFANgDQAUgFAHgFQAEgCADgGIAFgHIgFAHQgDAGgEACQgHAFgUAFQgNADgKAFQgHADgGAAIAAAAIAAAAQgOAAgMgNIgBgBIABABQAMANAOAAIAAAAIAAAAgAgJhPQATgBAOgOIABgBIAdgfIAIgJIgIAJIgdAfIgBABQgOAOgTABIAAAAIAAAAIgJgBQgXgDgUgKQgNgHgHgKQAHAKANAHQAUAKAXADIAJABIAAAAIAAAAgAgUiNQADAPALANQANAPAQgSQAQgUAAgTQgNALgTgEQgVgFgJgZQgCARAFAUgAE4iMQAPAGAVAEQgVgEgPgGIgGgDIAGADgAEyiPQgDgDAAgFQAAgFAFgJIABAAIgBAAIgBAAIgFAAIAAAAIgBAAQgJAAgJgCIgCgBQgWgGgFgPQAFAPAWAGIACABQAJACAJAAIABAAIAAAAIAFAAIABAAIAAAAQgFAJAAAFQAAAFADADgAAli+QAXAAADgbQgQgEgMgLQAJABAGgCQAHgEAAgLIAAgFQgCgVgPgPQgUgTgHAcQACAYANARIAHAHQAMALAQAEQgDAbgXAAgAgnkQQgHAQAEARQAGAXAVAAIAGgBQAHAAgCgNQAAgEADgGQABgbgQgPQgFgEgEAAQgIAAgGAOgAgvCwIAAAAgAgXCvIAAAAgAB7CeIAAAAgAjKBBIAAAAgAEUhEIAAAAgAEohTIAAAAgAE6hhIAAAAgAE/ioIAAAAg");
	this.shape_35.setTransform(37.5,43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_4},{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape_8}]},4).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_2},{t:this.shape_17},{t:this.shape_16},{t:this.shape_7},{t:this.shape_6},{t:this.shape_15},{t:this.shape_4},{t:this.shape_1},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_4},{t:this.shape_9},{t:this.shape_2},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_29},{t:this.shape_4},{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_11},{t:this.shape_10},{t:this.shape_4},{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape_30}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_33},{t:this.shape_4},{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape_32}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_35},{t:this.shape_4},{t:this.shape_9},{t:this.shape_2},{t:this.shape_24},{t:this.shape_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.9,79.1);


(lib.anim_baby_slim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(34.8,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("ABMCQIgCgDIgBgHIAAgxQAAgZgCgVQgCgZgMgSQgKgRgNgRQARAAAPgDIAvgLQAWgGATgNQAQgLAHgSQAWACAXAKQAXAKAVANQAUANAQANQAHAGAEALQgCAPgGAPQgIAWgPAUQgOAUgUAXQgQALgVAKIgrAVQgVAKgQACIgUABQgTAAgQgEgAk4hUIAEgBIgCADIgCgCgAibiQIAAgDIAAAAQAFgBABAFIgGgBg");
	this.shape_1.setTransform(37.4,57.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtAVQABggAaAWQgGAOgKAAQgFAAgGgEgAATgVQAHgEAIABQAJABADAKQgGARgVAAQgPgQAPgJg");
	this.shape_2.setTransform(47.7,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglApQgPgNgFgTQgIgeAfAFQAKACAHAKQALARgBAUQgagXgBAhIgDgCgAAZAbQgagCAAgdQAAgdATgJQAQAAAJAFQAVAMgFAaIgCAHQgDgJgJgBQgIAAgHADQgPAJAPARIgDAAIgCAAg");
	this.shape_3.setTransform(46.6,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("Ag0BPQgKgbgfADQgFABgEACIgJgJQgJgKgNgHQADgOAKgLQAKgJAMgJIAWgRQAKgIAOgGIAIgEIASgIIAagLIAagLQANgGANgDIAbgFQAOgDAPgBIAaAAIgIAQQgFAKABALIAAAPQAAAHADADIgLgCIgXAEQgPABgNADQgPADgMAHQgMAHgMAFQgOAEgJAIQgNAKAFAOQAAAaASAQQgNAPgQAFIgFABQgKAAgHgQgAhRAhIAaAPQAOAJAJAJQgJgJgOgJIgagPIgYgOIAYAOgAhFARIAXAPQAMAIAFALQgFgLgMgIIgXgPQgMgIgHgKQAHAKAMAIgAgoAdQAFgOAAgPQAAAPgFAOgAgzAAQAGAFAEAFQgEgFgGgFQgOgJgEgNQAEANAOAJgAgcgVQAHAGAAAJQAAgJgHgGQgKgJgGgQQAGAQAKAJgAACggIAKAPIgKgPQgHgMgKgKQAKAKAHAMgAAkgmQAEAHABAHQgBgHgEgHQgHgMgDgOQADAOAHAMgABYgzQACAGAEADQgEgDgCgGQgDgKAAgLIAAgIIAAAIQAAALADAKgABAgvIAEAFIgEgFQgIgNgDgOQADAOAIANgABqg4QgFgJAAgLIABgIIgBAIQAAALAFAJg");
	this.shape_4.setTransform(38.2,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("Ag9FoQgGgBgFgEQgGgEgEgHIgBgEQAAgDACgDQAFgEAFAAIAAAAIAAAAQAGAAAFAHIAAAAIABABIgBgBIAAAAQgFgHgGAAIAAAAIAAAAQgFAAgFAEQgCADAAADIABAEQAEAHAGAEQgMALgNgIQgKgFAEgIQgFAFgKgBQgFAAgEgDQgLgGAAgLIABgGIAAgCIAAgBQADgMAIAAIABAAIAAAAIACAAIABAAIABAAIgBAAIgBAAIgCAAIAAAAIgBAAQgIAAgDAMIAAABIAAACIgBAGIgCABQgNAHgOgGQgQgHAGgOIgBABQgOAFgPgBQgMAAgHgHIgFgHQgEgIAAgGQAAgHAEgHQAIgLAMgBIABAAIAAAAIACABIACAAQAPABAGAPIAagEQAOgCAOgEIAcgIIANgFIAAgBQAAgKgIgNQgLgSgNgQQgOgSgGgVQAGAVAOASQANAQALASQAIANAAAKIAAABIgNAFIgcAIQgOAEgOACIgaAEQgGgPgPgBIgCAAIgCgBIAAAAIgBAAQgMABgIALQgEAHAAAHQAAAGAEAIIAFAHQgKAKgQgGQgOgFgJgNQgEgFAAgGQAAgHAFgHQAHgKAMgBIABAAIAAAAIAGABIgGgBIAAAAIgBAAQgMABgHAKQgFAHAAAHQAAAGAEAFQgJAJgOgEQgLgDgIgGQgEgGAAgGQAAgIAIgGQAHgFAIgBIAHAFIgHgFQgIABgHAFQgIAGAAAIQAAAGAEAGQgQACgKgMQgLgNANgNQALgLANAFQAKAFAJAFQAFAAAGACQgBgRAQgNQARgOAYgDQAZgEAOgIIgBAAQgTgHgQgJQgVgLgQgOQgTgPgCgXQAFgFAAgFQAAgGgHgEQAHAEAAAGQAAAFgFAFIgCADQgIAGgLgIQgZgSAegEIgGgBQgIgDgEgGQgOgXAeAAIAAAAIACABQAEADAGAAIAAAAIABAAIAEAAIADABQADADABAHIAAADQAAANgIADQAIgDAAgNIAAgDQgBgHgDgDIABgCQAXgHABgTQgIgCgGgKIgEgIQgEgMAJgIQAUgSAVAaQAHgIAIgFQgBggAEgcQAGguAngiQAIgHATgCQAMgpAygWQALAUAUAFQgUgFgLgUQgNgYANgWQAEgHAGgEQAEgCAGAAQAegEALAbQAHAUANgEQAQgGANgOQgRgQgBgbQgEgNAMgLQAKgHAOgGQANgFALgGQANgHAOgEQANgCAPgCIAXgDIALACQAIACAHAEQALAHALAJQALAKABAOIAAAOQAJACAGAHQAYAEAVAJQAXAJAOARQAQAVAGAVQAJAWAGAXQAGAWAAAXIABAyQABAXgBAXQgEAGgBBDIAAAUQAAAZgDAbIgCAMQgEgLgHgGQgQgNgUgNQgVgNgXgKQgXgKgWgDIABgEQAHgXARhUQgRBUgHAXIgBAEQgHATgQALQgTANgWAFIgvALQgPAEgRAAQANARAKARQAMATACAYQACAWAAAYIAAAyIABAHIACADIACABIABABQAJALgEARQgDANgPAEQgOADgOACQgPACgPAAIgaAAIgcAAIAEgFIgEAFQgEAEgIABQgGACgIAAQgHAAgHgCgAhnFZIAAgBIAAgFQAAgOALgDQgLADAAAOIAAAFgAixE2QADgRAPgBIAAAAIABAAIgBAAIAAAAQgPABgDARgAAoE0QAQgJAAgRQAAARgQAJgAkfEJIAAgFIAAAFgAhaD/IALgHIgLAHgAizDLIABAAIACAAIgCAAIgBAAIAAAAIAAAAQgHAAgFgCIgBAAIABAAQAFACAHAAIAAAAIAAAAgAiOCeQARgDABgOIAPACIAAAAIABAAQAPAAALgGIABgBQASgKANgSQARAJAaAAIAAAAIABAAIAwABIARAAIgDgEIADAEIgRAAIgwgBIgBAAIAAAAQgaAAgRgJQgNASgSAKIgBABQgLAGgPAAIgBAAIAAAAIgPgCQgBAOgRADQgUgHgCgSIgBgGQAAgJAFgEQAHACAMgDQgOgEgFAFQgMgDgDgNIgBgJQAAgMALgDIABAAIAKAAQgHgBgEABQgLADAAAMIABAJQADANAMADQgFAEAAAJIABAGQACASAUAHIAAAAgAkmBnIADgBIACAAIABAAIgBAAIgCAAIgDABIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAgBIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAgBIAAABIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAABIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAgAilBKIAAAAIAAAAQgGAAgCgDQgEgGAAgFQAAgKASgEQgKgGAAgHQAAgGAJgHIAAgBIABAAQAJgIAMAAIABAAIAAAAIAFAAIAAAAIABAAIABAAIAGACQgBgFgEABIgBgBQgGgHAAgFQAAgKAUgEIABgBIAAAAQAIgBAHAAIABAAIAAAAQAOAAAMAFIAAAAIAAAAIABABIAdAOIABABQAEACADAAIAAAAIABAAQAJgBAGgRIAAgBIAAgBQALgQAUgJQAUgJAWgEIACAAIABgBIANgBIAAAAIAAAAQAKAAAJADIACAAQgBgYAVgOQAOgJAKgJQgKAJgOAJQgVAOABAYIgCAAQgJgDgKAAIAAAAIAAAAIgNABIgBABIgCAAQgWAEgUAJQgUAJgLAQIAAABIAAABQgGARgJABIgBAAIAAAAQgDAAgEgCIgBgBIgdgOIgBgBIAAAAIAAAAQgMgFgOAAIAAAAIgBAAQgHAAgIABIAAAAIgBABQgUAEAAAKQAAAFAGAHQgKgHgMgEIgBgBIgBAAIAAAAQgNgGgNAAIAAAAIAAAAQgIAAgHACIgBAAQgLADgJAFIAAAFIAAgFQAJgFALgDIABAAQAHgCAIAAIAAAAIAAAAQANAAANAGIAAAAIABAAIABABQAMAEAKAHIAAABIAAACIgBAAIgBAAIAAAAIgFAAIAAAAIgBAAQgMAAgJAIIgBAAIAAABQgJAHAAAGQAAAHAKAGQgSAEAAAKQAAAFAEAGQACADAGAAIAAAAIAAAAgAj+AuQAHAAAIgFIADgBIAAgBQAGgOAFAAIABAAIAAAAIAAAAIAAAAIgHgMIAHAMIAAAAIAAAAIAAAAIgBAAQgFAAgGAOIAAABIgDABQgIAFgHAAIAAAAIAAAAIgCAAIgDgBIADABIACAAIAAAAIAAAAgAibgTQgOgLAAgcQAAgLADgPQAGglAUgbIAJgMQAbgdAZgXQgZAXgbAdIgJAMQgUAbgGAlQgDAPAAALQAAAcAOALgAgTiaQAIAGAFAAQgFAAgIgGQgUgPgJgSQAJASAUAPgADqjlQgCAOgJALQgKAMgKAJQgKAJgOAGIgFACQgMAIgNACIgZABIAZgBQANgCAMgIIAFgCQAOgGAKgJQAKgJAKgMQAJgLACgOIACgPIgBgOQgCgNgHgNIgEgGIAEAGQAHANACANIABAOIgCAPgACDinQAGAAAHgCIAAAAIABAAQAIgDAAgJIAAgFIAAAFQAAAJgIADIgBAAIAAAAQgHACgGAAIAAAAIAAAAQgPAAgLgLIAAgBIAAABQALALAPAAIAAAAIAAAAgAghi5IADAAIABAAIAFgBQAEAAAGgEQgFgEAAgCQAAACAFAEQgGAEgEAAIgFABIgBAAIgDAAIAAAAIAAAAQgIAAgGgCIgBAAIABAAQAGACAIAAIAAAAIAAAAgAgijcQgNgDgJgMQAJAMANADgAg0jfQgFgFAAgFIABgCIgBACQAAAFAFAFgACejgIAAAAIAAAAQAJAAABgEIAAAAIAAgBQAEgWgTAAIAAAAIgBAAIgIABIgDABIADgBIAIgBIABAAIAAAAQATAAgEAWIAAABIAAAAQgBAEgJAAIAAAAIAAAAIAAAAIgBAAQgLAAgHgCIgCgBIgCgBIACABIACABQAHACALAAIABAAIAAAAgAg4jrQABgHAMgFQgMAFgBAHgAA8kUQAFAUAPAMIADACQARANAKgXQABgUgMgRQgGgKgLgCIgIgBQgVAAAHAagACIlIQgUAJAAAdQAAAfAbABIAFAAQAVAAAGgTIACgHQAEgagUgNQgKgFgPAAIAAAAgAAlktIABgBIAAgBQAKgQAQAAIAAAAIAAAAIAFAAIABAAIgBAAIgFAAIAAAAIAAAAQgQAAgKAQIAAABIgBABgAB1lMQAGgHAMAAIAAAAIAAAAIADAAIABAAIgBAAIgDAAIAAAAIAAAAQgMAAgGAHgAjiE0IAAAAgAkTEmIAAAAgAk9EiIAAAAgAA7B2IAAAAgAigByIAAAAgAkkBIQgGAAgEgDIgCgBIAAAAIgBgBQgmgrBCABIAEAIQAGAKAIACQgBATgXAHIgEABIgEAAIgBAAIAAAAgAkDAtIAAAAg");
	this.shape_5.setTransform(34.8,42.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("ADekEQAYAEAVAJQAXAKAOAQQAQAVAGAVQAJAWAGAYQAGAVAAAYQAAAYABAZQABAXgBAWQgEAGgBBEQAAAKAAAKQAAAZgDAbQgBAGgBAGQgEgLgHgGQgQgNgUgNQgVgNgXgKQgXgKgWgCQABgDAAgCQAHgXARhUACelJQAIACAHAEQALAHALAJQALAKABAPQAAAHAAAGQAJACAGAHQACADACADQAHANACAOQACAOgDAOQgCAOgJALQgKAMgKAJQgKAKgOAFQgDABgCABQgMAIgNACQgNABgMABAAQljQAIgEAJgDQANgFAOgGQAMgGANgDQAOgDANgDQAPgDAOAAQANAAANAAQgEAHgEAIQgFAKABAMQAAAIAAAHQAAAHADADQgFgCgGAAQgLACgMABQgPACgNADQgLACgJAEQgDACgEACQgLAGgNAGQgOAFgKAIQgMAKAEANQABAbARAQQgNAOgQAGQgNAEgHgUQgLgbgeAEQgGAAgEADQAAgCgIgIQgKgKgNgGQADgPALgLQAJgKAMgIQAMgJALgIQAJgIAOgGQAEgCAEgCQAJgEAJgEQAEgCAFgCQALAOAIALQAFAIAFAIAB2l5QgBAPAEAOQACAGAEADACHl9QgCAQAHAMAA7lpQADANAHANQAEAHADALABWlzQADAOAIANQACADACACAB1ktQAHgKAPACAA/jeQACgDADgCQAKgHAPgFQAHgCAIABACCj1QAOgLATgCQAGgBAIAAACNjbQAhgHgGAcQgBAFgJAAQgOAAgJgEAiCAnQgRgWAfgGQAYgFAUAJQARAIAMAHQARAKAHgbQALgQAUgJQAUgJAWgEQAUgEARAGQgBgZAVgOQAOgJAKgIABpiVQAQASAYgIQAKgDgCgNAgjk/QADANAOAKQAGAEAEAGAgLlXQAGAPAJAKQAHAGAAAIAhFjuQgGADgEAHQgNAWANAYQALAUAUAFQALADANgBQAEgBAGgDQgFgEAAgDAg4jNQgCAGAGAGAhIkVQAMAGAMAIQANAHANAIQAOAIAIAKAg3kqQAHALAMAIQALAHAMAIQAMAIAEALAgii+QgNgDgJgMAgHkLQAFgOAAgPAgrjYQgMAFgBAGAjYAeQgBggAEgcQAGguAnghQAIgIATgBQAMgqAygWAkVA3QgEgMAJgIQAUgTAVAbQAHgIAIgFQAJgGALgCQAWgGAWAKQAMAGAKAHAkfBmQACAAACgBQAXgHABgTQAKACANgHQAGgQAGABQgEgHgDgFAkVA3QACAEACAEQAGAKAIACAkfBmQgLACgGgGQAAgBgBAAQgmgrBCABAjYAeQAAADAAACAiBAnQAEgBABAFQgDgBgDAAQgSgDgMALQgSAPATALQgbAGANATQADADAFAAQAAAAABAAQAFAAAFAAQgHgBgEABQgPAEAFAUQADANAMADQgHAFADAOQACASAUAHQARgDABgOQAaAFARgKQASgKANgSQASAJAaAAQAXAAAZABQAJABAIgBQgBgCgCgBAibAKQgUgOAJgyQAGglAUgbQAEgGAFgGQAbgdAZgXAgwidQAJASAUAPQAIAHAFAAAiBAnIgBAAAiBAnIgBAAIAAAAAhaEdQgGADgHACQgOAEgOAEQgOAEgOADQgOABgMACQgGgOgPgCQgQgCgJANQgIANAIAPQACAEADADQgKAKgQgGQgOgFgJgMQgJAIgOgEQgLgDgIgFQgQABgKgMQgLgNANgNQALgLANAGQAKAEAJAFQAFAAAGACQAAADAAACAhPEXQgFADgGADAiOC8QAGAVAOASQANARALASQAIANAAAKAAoFTQAQgKAAgRAkgCEQANAJgLAMQgBABgBABQgIAHgLgJQgZgSAegDQgDgBgDgBQgIgDgEgGQgOgXAeAAAkfBmQABABACABQADACABAHQABAPgJAEAjADnQgBAAAAAAQgTgHgQgJQgVgLgQgNQgTgPgCgXAkuCEQAIACAGgCAk9FBQgJgRANgJQAHgGAIgBQADADAEADAkTFFQgIgNAJgNQAJgNARADAkfEiQgBgRAQgNQARgOAYgDQAZgEAOgIQAHADAJgBAjiFSQAHAHAMAAQAPABAOgFIABAAQADgTAQABAgVGBQADgCABgCAgVGBQgEAEgIACQgNADgPgDQgGgCgFgDQgGgFgEgHQgDgGAEgDQAMgMAKAPABlFLQABABABABQAAAAABABQAJALgEAQQgDANgPAEQgOAEgOABQgPACgPAAQgNAAgNAAQgOAAgOAAAixFVQgGANAQAHQAOAGANgHQABgBABAAQAAgDABgDQADgSANAEAhnF3QgFAFgKgBQgFAAgEgDQgLgFAAgMAhcFgQgNADACAUIAAAAAhIGCQgMALgNgIQgKgGAEgIAigCQQAHACAMgDQgOgEgFAFgAFSCkQgCAPgGAQQgIAWgPAUQgOAUgUAXQgQALgVAKQgVAKgVALQgWAKgQACQgfADgYgGADKBWQgHASgQALQgTANgWAGQgXAFgYAGQgPADgRAAQANARAKARQAMATACAZQACAVAAAZQAAAYAAAZQAAAEABADQABACABABAAlkPQAMgVAVAE");
	this.shape_6.setTransform(34.8,39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("Ag0BPQgKgbgfADQgFABgEACIgJgJQgJgKgNgHQADgOAKgLQAKgJAMgJIAWgRQAKgIAOgGIAIgEIASgIIAJgEIARgHIAagLQANgGANgDIAbgFQAOgDAPgBIAaAAIgIAQQgFAKABALIAAAPQAAAHADADIgLgCIgXAEQgPABgNADQgLACgJAFQgDgMgEgHQgHgMgDgOQADAOAHAMQAEAHADAMIgHADQgMAHgMAFQgOAEgJAIQgNAKAFAOQAAAaASAQQgNAPgQAFIgFABQgKAAgHgQgAhRAhIAaAPQAOAJAJAJQgJgJgOgJIgagPIgYgOIAYAOgAhFARIAXAPQAMAIAFALQgFgLgMgIIgXgPQgMgIgHgKQAHAKAMAIgAgoAdQAFgOAAgPQAAAPgFAOgAgzAAQAGAFAEAFQgEgFgGgFQgOgJgEgNQAEANAOAJgAgcgVQAHAGAAAJQAAgJgHgGQgKgJgGgQQAGAQAKAJgAACggIAKAPIgKgPQgHgMgMgOQAMAOAHAMgABYgzQACAGAEADQgEgDgCgGQgDgKAAgLIAAgIIAAAIQAAALADAKgABAgvIAEAFIgEgFQgIgNgDgOQADAOAIANgABqg4QgFgJAAgLIABgIIgBAIQAAALAFAJg");
	this.shape_7.setTransform(38.2,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("Ag9FoQgGgBgFgEQgGgEgEgHIgBgEQAAgDACgDQAFgEAFAAIAAAAIAAAAQAGAAAFAHIAAAAIABABIgBgBIAAAAQgFgHgGAAIAAAAIAAAAQgFAAgFAEQgCADAAADIABAEQAEAHAGAEQgMALgNgIQgKgFAEgIIAAgBIAAgFQAAgOALgDQgLADAAAOIAAAFIAAABQgFAFgKgBQgFAAgEgDQgLgGAAgLIABgGIAAgCIAAgBQADgMAIAAIABAAIAAAAIACAAIABAAIABAAIgBAAIgBAAIgCAAIAAAAIgBAAQgIAAgDAMIAAABIAAACIgBAGIgCABQgNAHgOgGQgQgHAGgOQADgRAPgBIAAAAIAAAAIABAAIgBAAIAAAAIAAAAQgPABgDARIgBABQgOAFgPgBQgMAAgHgHIgFgHQgEgIAAgGQAAgHAEgHQAIgLAMgBIABAAIAAAAIACABIACAAQAPABAGAPIAagEQAOgCAOgEIAcgIIANgFIgNAFIgcAIQgOAEgOACIgaAEQgGgPgPgBIgCAAIgCgBIAAAAIgBAAQgMABgIALQgEAHAAAHQAAAGAEAIIAFAHQgKAKgQgGQgOgFgJgNQgEgFAAgGQAAgHAFgHQAHgKAMgBIABAAIAAAAIAGABIgGgBIAAAAIgBAAQgMABgHAKQgFAHAAAHQAAAGAEAFQgJAJgOgEQgLgDgIgGQgEgGAAgGQAAgIAIgGQAHgFAIgBIAHAFIgHgFQAFAAAGACIAAAFIAAgFQgBgRAQgNQARgOAYgDQAZgEAOgIIgBAAQgTgHgQgJQgVgLgQgOQgTgPgCgXQAFgFAAgFQAAgGgHgEQAHAEAAAGQAAAFgFAFIgCADQgIAGgLgIQgZgSAegEIgGgBQgIgDgEgGQgOgXAeAAIAAAAIACABQAEADAGAAIAAAAIABAAIAEAAIgEAAIgBAAIAAAAQgGAAgEgDIgCgBIAAAAIgBgBQgmgrBCABIAEAIQAGAKAIACQgIgCgGgKIgEgIQgEgMAJgIQAUgSAVAaIAHAMIAAAAIAAAAIAAAAIgBAAQgFAAgGAOIAAABIgDABQgIAFgHAAIAAAAIAAAAIgCAAIgDgBQgBATgXAHQAXgHABgTIADABIACAAIAAAAIAAAAQAHAAAIgFIADgBIAAgBQAGgOAFAAIABAAIAAAAIAAAAIAAAAIgHgMQAHgIAIgFQgBggAEgcQAGguAngiQAIgHATgCQAMgpAygWQALAUAUAFIABAAQAGACAIAAIAAAAIAAAAIADAAIABAAIAFgBQAEAAAGgEQgFgEAAgCQAAACAFAEQgGAEgEAAIgFABIgBAAIgDAAIAAAAIAAAAQgIAAgGgCIgBAAQgUgFgLgUQgNgYANgWQAEgHAGgEQAEgCAGAAQAegEALAbQAHAUANgEQAQgGANgOQgRgQgBgbQgEgNAMgLQAKgHAOgGQANgFALgGIAHgEQAJgEALgDQANgCAPgCIAXgDIALACQAIACAHAEQALAHALAJQALAKABAOIAAAOQAJACAGAHIAEAGQAHANACANIABAOIgCAPQgCAOgJALQgKAMgKAJQgKAJgOAGIgFACQgMAIgNACIgZABIAZgBQANgCAMgIIAFgCQAOgGAKgJQAKgJAKgMQAJgLACgOIACgPIgBgOQgCgNgHgNIgEgGQAYAEAVAJQAXAJAOARQAQAVAGAVQAJAWAGAXQAGAWAAAXIABAyQABAXgBAXQgEAGgBBDIAAAUQAAAZgDAbIgCAMQgEgLgHgGQgQgNgUgNQgVgNgXgKQgXgKgWgDIABgEQAHgXARhUQgRBUgHAXIgBAEQgHATgQALQgTANgWAFIgvALQgPAEgRAAQANARAKARQAMATACAYQACAWAAAYIAAAyIABAHIACADIACABIABABQAJALgEARQgDANgPAEQgOADgOACQgPACgPAAIgaAAIgcAAIAEgFIgEAFQgEAEgIABQgGACgIAAQgHAAgHgCgAAoE0QAQgJAAgRQAAARgQAJgAhaD/IALgHIgLAHgAhaD/IAAgBQAAgKgIgNQgLgSgNgQQgOgSgGgVQARgDABgOIAPACIAAAAIABAAQAPAAALgGIABgBQASgKANgSQARAJAaAAIAAAAIABAAIAwABIARAAIgDgEIADAEIgRAAIgwgBIgBAAIAAAAQgaAAgRgJQgNASgSAKIgBABQgLAGgPAAIgBAAIAAAAIgPgCQgBAOgRADQgUgHgCgSIgBgGQAAgJAFgEQAHACAMgDQgOgEgFAFQgMgDgDgNIgBgJQAAgMALgDIABAAIAKAAQgHgBgEABQgLADAAAMIABAJQADANAMADQgFAEAAAJIABAGQACASAUAHQAGAVAOASQANAQALASQAIANAAAKIAAABgAizDLIABAAIACAAIgCAAIgBAAIAAAAIAAAAQgHAAgFgCIgBAAIABAAQAFACAHAAIAAAAIAAAAgAkmBnIADgBIACAAIABAAIgBAAIgCAAIgDABIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAgBIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAgBIAAABIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAABIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAgAkgBmQAIgDAAgNIAAgDQgBgHgDgDIABgCIgEABIADABQADADABAHIAAADQAAANgIADgAilBKIAAAAIAAAAQgGAAgCgDQgEgGAAgFQAAgKASgEQgKgGAAgHQAAgGAJgHIAAgBIABAAQAJgIAMAAIABAAIAAAAIAFAAIAAAAIABAAIABAAIAGACQgBgFgEABIgBgBQgGgHAAgFQAAgKAUgEIABgBIAAAAQAIgBAHAAIABAAIAAAAQAOAAAMAFIAAAAIAAAAIABABIAdAOIABABQAEACADAAIAAAAIABAAQAJgBAGgRIAAgBIAAgBQALgQAUgJQAUgJAWgEIACAAIABgBIANgBIAAAAIAAAAQAKAAAJADIACAAQgBgYAVgOQAOgJAKgJQgKAJgOAJQgVAOABAYIgCAAQgJgDgKAAIAAAAIAAAAIgNABIgBABIgCAAQgWAEgUAJQgUAJgLAQIAAABIAAABQgGARgJABIgBAAIAAAAQgDAAgEgCIgBgBIgdgOIgBgBIAAAAIAAAAQgMgFgOAAIAAAAIgBAAQgHAAgIABIAAAAIgBABQgUAEAAAKQAAAFAGAHQgKgHgMgEIgBgBIgBAAIAAAAQgNgGgNAAIAAAAIAAAAQgIAAgHACIgBAAQgLADgJAFQAJgFALgDIABAAQAHgCAIAAIAAAAIAAAAQANAAANAGIAAAAIABAAIABABQAMAEAKAHIAAABIAAACIgBAAIgBAAIAAAAIgFAAIAAAAIgBAAQgMAAgJAIIgBAAIAAABQgJAHAAAGQAAAHAKAGQgSAEAAAKQAAAFAEAGQACADAGAAIAAAAIAAAAgAjYAFIAAgFIAAAFgAibgTQgOgLAAgcQAAgLADgPQAGglAUgbIAJgMQAbgdAZgXQgZAXgbAdIgJAMQgUAbgGAlQgDAPAAALQAAAcAOALgAgTiaQAIAGAFAAQgFAAgIgGQgUgPgJgSQAJASAUAPgACDinQAGAAAHgCIAAAAIABAAQAIgDAAgJIAAgFIAAAFQAAAJgIADIgBAAIAAAAQgHACgGAAIAAAAIAAAAQgPAAgLgLIAAgBIAAABQALALAPAAIAAAAIAAAAgAgijcQgNgDgJgMQABgHAMgFQgMAFgBAHQAJAMANADgAg0jfQgFgFAAgFIABgCIgBACQAAAFAFAFgACejgIAAAAIAAAAQAJAAABgEIAAAAIAAgBQAEgWgTAAIAAAAIgBAAIgIABIgDABIADgBIAIgBIABAAIAAAAQATAAgEAWIAAABIAAAAQgBAEgJAAIAAAAIAAAAIAAAAIgBAAQgLAAgHgCIgCgBIgCgBIACABIACABQAHACALAAIABAAIAAAAgABdkNQgPAFgKAHIgFAEIAFgEQAKgHAPgFIAGgBIADgBIACAAIAAAAIACAAIACAAIgCAAIgCAAIAAAAIgCAAIgDABIgGABIAAAAgACjkhQgTADgOAKQAOgKATgDIAOgBIgOABgAAlktIABgBIAAgBQAKgQAQAAIAAAAIAAAAIAFAAIABAAIgBAAIgFAAIAAAAIAAAAQgQAAgKAQIAAABIgBABgAB1lMQAGgHAMAAIAAAAIAAAAIADAAIABAAIgBAAIgDAAIAAAAIAAAAQgMAAgGAHgAkTEmIAAAAgAlXEYQgLgNANgNQALgLANAFQAKAFAJAFQgIABgHAFQgIAGAAAIQAAAGAEAGIgDABQgOAAgJgLgAkqECIAAAAgAA7B2IAAAAgAigByIAAAAgAjgAZIAAAAgAg4jrIAAAAg");
	this.shape_8.setTransform(34.8,42.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_9.setTransform(34.8,39.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("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");
	this.shape_10.setTransform(34.8,42.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_1},{t:this.shape_6}]},4).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_9}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,71.7,80.5);


(lib.anim_baby_pro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ACHkPQBhAQAsAqQAmAkAqAdQApAHAlAjQAiAgAKArQALAygRAuQgHAQgKANQgPATgYAMQgpAWgzAFQgZADgaABQgCgIgCgIQgGgUgNgPQAHgTACgWQAIhQgRhLAHHBeQADAdgIAXQgNApglAcQgRAOgVAOQgfAUgYAVQgHAGgHAGQgBABAAAAQgIAJgKAHQgQAKgVAHQAJgEANgYQADgGADgHQAAAAAAgBQAOgjAAgpQAAgcgGgcABHmvQAmgagJAuQAwABgTAuQAcATgRAfQAPATgUAYQAkAaggAdQgGAGgPACQAhAngygGQgIAHgPgDQgKgCgHgEQAAAAAAgBQgagNAPgcQgZgbAbgOQgRgFgHgMQgCgDgBgFQgCgJADgMQACgRgXACQgVgCghABQgzAZgYgYQgtASAJA0QgQAWACAoQABAJABAHQgcASgPgYQgaALgQgjQgJgTAPgCQgngfAfghQgZgsAngdQAMgjAPACQALgtAvAJQADguAoAdQAVgfAUAfQAVgfAeAkQASgfAVAXQAOgXAOAcQAagiADAvAghj4QAGAMARgCQANgBAOgHQAFgDACgHQADgKgDgKQgBgEgCgDQgIgNgQACQgOACgKAKQgCACgDACQAAABAAAAQgCACgBADQgFALAGAMQAAAAABABgAhtj7QAGAIALAAQAQABALgIQANgJABgOQAAgJgIgCQgJgLgQAAQgPABgKAMQgFAGgBAGQgBAGADAGQABAEADADQAMAFABgOQABgHgEgEQgLgOgFAPAgjkQQACgDACgCQAGgEAIAPQABADAAAEQgDATgOgIAA9ixQgQAtgtAQQgPAGgSACQg1AFgqgUQgjgQgJghAhBjpQgOgIgMALQgMANAPAIQAGAEAJACQASAFAHgPAhIisQAGAMARAEQALACAJgEQAOgGAFgOQABgFgCgDAmIDqQgHgaABggQAAgyAlgiQAfgdAugNQgEgOgBgTQgBgYAHgXQAHgUAMgWQAKgTANgSQAPgTATgNQAVgOAOgRIAAgBAibBpQgIgEgHgFQglgZADg5QACgpAJgdAAdCdQgtgCgngOQgegMgcgHQgWgGgUgLAiBEeQgBgDAAgDQgCgFgFgCQgQgFgVgCQgZgCgCgXQgDgZAMgTQAMgTALgRQALgTADgYQAAgIAAgFAmsEWQgFAAgEgBQgXgEgSgLQgGgDAEgGQAKgQAbgBQAYgBAbgBQACAKAEAJAmBEMQgZACgSAIAlnEsQAGgDADgEAklE+QABgEAAgEAlnEsQgTALgWAJQgWAJgOgQQgTgTAbgQAklE+QgCAKgFAIQgNATgcgKQgMgFgGgJQgKgSAKgNAjJErQgCgNgLgDAiBEeQACAXgaABQgaAAgWgLQAAACAAACQAAAagUAHQgXAJgZgEQgZgDABgUADgBUQAPAIALANABShbQgSBGgJBJQgEAjAEAYQgOAVgMAZAA3BvQAHgKAIgJAgjERQAUg0AdgaQgDALgBAMQgCApANAjQAJAYANAVQAHALAIAKQAIAKAKACAAODDQAEgXALgOQAAgBAAAAAASGiQgFAAgFgBQgHgBgGgBQgQgDgMgHQghgVArgZQAdgQAlgEQgSgFgQgJQgngYgFgcQgmARg4gEABzGwQABgGgBgIQgBgLgEgJABzGwQgCAbgWADQglAGgVgQQgYgRAJgRQAEgHAIgHQALgEANAAADtFKQgCABgDABQgLAEgKABIAAAAQAggPAWghAC6FoQgGAFgGADADTFRQgNAOgMAJQA2ARgNAiQgFANgWgCQAEAKgCAMQgSAGgNgBQgoAPgQggACAGKQAeAXANAfQAAABAAAAACqGGQAYANAGAT");
	this.shape.setTransform(48.2,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgDgCIAEgBIADAGIgEABIgDgGg");
	this.shape_1.setTransform(50.7,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALASQAOAIADgTQAAgEgBgDQgHgOgHAEIgBgBIAFgEQAKgKAOgCQARgCAIANIADAHQADAJgDAKQgCAHgFADQgNAHgPABIgDABQgOAAgGgLgAgvAXQgLAAgGgIQANAFABgOQAAgGgDgEQgMgOgFAPQABgGAFgGQAKgMAQgBQAPAAAJALQAIACAAAJQgBANgMAJQgKAHgPAAIgDAAg");
	this.shape_2.setTransform(43.7,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0C0C").s().p("ACoFxIAGgNIABgBQAOgkAAgoQAAgdgHgbIAzgEQAzgFAqgWQAXgMAPgTQADAcgIAYQgNApgkAcQgSANgVAOQgfAVgYAVIgOAMIgBABQgIAIgKAHQgPALgWAHQAJgFANgXgAkyhwQgZALgRgjQgJgTAPgCQgngfAfghQgZgsAogdQAMgjAOACQALgtAvAJQAEguAoAcQAVgeATAeQAWgfAdAkQASgfAXAYQANgXAPAcQAZgiAEAvIAAAAQAkgZgJAuQAwABgSAtQAbATgQAgQAPATgUAXQAjAaggAeQgGAFgOADQAgAmgygFQgIAHgOgDQgJgDgHgDIgBgBQgZgNAPgdQgagaAcgOQgSgFgHgMIgDgIQgCgJADgNQACgQgWABQgXgBggABQgzAYgZgXQgtASAJA0QgQAWACAoIADAQQgMAIgKAAQgNAAgJgOgAh8i2IgBgBQgGgLAFgLIAEgFQAHgFAHAPQABAEAAAEQgCANgHAAQgEAAgEgDgAjIi4IgEgHQgDgGABgGQAFgPAMAOQADAEAAAHQgBAKgHAAIgGgBg");
	this.shape_3.setTransform(57.3,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE9670").s().p("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");
	this.shape_4.setTransform(48.2,53.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AFkhaQABAlgPAaAE0izQApAWAGAwQABAKAAAJQApAHAlAjQAiAgAKAqQALAzgRAtQgHARgKANQADAcgIAYQgNApglAcQgRANgVAOQgoAbgdAbQgBABAAAAQgIAIgKAHQgQALgVAHQgCABgDABQgxAQgogZQgJAZgkgBQgzgBgmgWQgngXgFgcQAUg0AYgbAHHCYQgPATgYAMQgpAWgzAFQguAFgwAAQgVABgWAAQgbAAgaAAQgyAAgxgBQgxgBgpgQQgegLgcgHQgWgGgUgLQgIgEgHgFQglgaADg5QACgpAJgeADHlaQAlgiACApQAAALgKACQgDABgCAAQgNACgPgBABHl2QAGgIALgFQAqgVAEAsQABAIgCAGQAag5AkAjQAPAPgLALQAAAAgBABQgQAOgNgDACFleQgBACgBABADflFQAjAegwACQAaAFARAQQAnASANAuQAFAPgCAOQgBAKgEAJAishzQgcASgPgYQgaALgQgjQgJgTAPgCQgngfAfghQgZgsAngdQAMgjAPACQALgtAvAJQADguAoAcQAVgeAUAeQAVgfAeAkQASgeAVAXQAOgXAOAcQAagiADAvQgPAXARAtQghgfgoAoQgJAJAJAQQACAFADADQgVgBghABQgzAYgYgXQgtASAJA0QgQAWACAoQABAJABAHgAghi/QAGAMARgBQANgBAOgIQAFgDACgGQADgLgDgJQgBgEgCgEQgIgNgQADQgOABgKALQgCABgDADQAAAAAAAAQgCADgBADQACgEACgBQAGgEAIAOQABAEAAAEQgDATgOgJgAhtjBQAGAIALAAQAQABALgIQANgJABgPQAAgJgIgBQgJgMgQABQgPABgKAMQgFAGgBAGQAFgPALAOQAEAEgBAHQgBAOgMgFQgDgDgBgEQgDgGABgGAgjjWQgFALAGALQAAABABAAAAaj5QAOAEARgIQAIAPAJADQAQAHAVgVAAaj5QgDANACAJQABAEACAEQAHAMARAFQgbAOAZAaQgPAdAaAOQABgCAAgCABKjrQgCAuAkAfQAFAFAFADQgOAQgDARQgCAMAFAOAAFkIQAJAMAMADABlh1QgIAHgPgDQgKgDgHgDQgQAtgtAQQgPAGgSACQg1AFgqgUQgjgRgJghQgOASgVANQgTANgPAUQgNARgKAUQgMAUgHAVQgHAXABAZQABASAEAPQguAMgfAeQglAiAAAyQgBAgAHAaQACAKAEAIAhBivQgOgIgMALQgMAMAPAJQAGAEAJACQASAEAHgOAhIhzQAGANARADQALADAJgEQAOgGAFgPQABgEgCgDAB2iWQAQALAFgHABlkjQAtAFANAeAishzIAAAAAiBFXQgBgCAAgDQgCgGgFgBQgQgFgVgCQgZgCgCgXQgDgZAMgTQAMgTALgSQALgSADgYQAAgIAAgFAmsFQQgFgBgEAAQgXgEgSgLQgGgDAEgGQAKgQAbgBQAYgBAbgBAmBFFQgZACgSAJQALABAIAAAklF4QgCAKgFAIQgNATgcgLQgMgEgGgKQgKgSAKgMQgTALgWAJQgWAJgOgQQgTgTAbgQAklF4QABgEAAgFAlnFmQAGgDADgEAjJFlQgCgNgLgDAiBFXQACAYgaAAQgaABgWgLQAAACAAACQAAAZgUAIQgXAIgZgDQgZgDABgUAC7DYQAqAPAZAqQAbAvgWAoQgNAYgJAEAElFiQAGgHAFgJAgjFLQgmARg4gF");
	this.shape_5.setTransform(48.2,40.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C0C0C").s().p("ACoFxQAWgpgbguQgZgrgqgOIArgBQAwgBAugEQAzgFAqgWQAXgMAPgTQADAcgIAYQgNApgkAcQgSANgVAOQgoAbgdAbQAHgIAEgIQgEAIgHAIIgBABQgIAIgKAHQgPALgWAHQAJgFANgXgAkyhwQgZALgRgjQgJgTAPgCQgngfAfghQgZgsAogdQAMgjAOACQALgtAvAJQAEguAoAcQAVgeATAeQAWgfAdAkQASgfAXAYQANgXAPAcQAZgiAEAvQgQAWARAuQghgfgoAoQgJAJAJAQIAGAIQgXgBggABQgzAYgZgXQgtASAJA0QgQAWACAoIADAQQgMAIgKAAQgNAAgJgOgAgMhoQgJgDgHgDIABgEIgBAEQgbgOAQgdQgagaAcgOQgSgFgHgMIgDgIQgCgJADgNQAOAEASgIQAHAOAJAEQgCAuAjAfIAKAIQgOAQgDARQgFAFgIAAIgJgBgAh8i2IgBgBQgGgLAFgLIAEgFQAHgFAHAPQABAEAAAEQgCANgHAAQgEAAgEgDgAjIi4IgEgHQgDgGABgGQAFgPAMAOQADAEAAAHQgBAKgHAAIgGgBg");
	this.shape_6.setTransform(57.3,39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BE9670").s().p("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");
	this.shape_7.setTransform(48.2,41.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AFkhaQABAlgPAaAE0izQApAWAGAwQABAKAAAJQApAHAlAjQAiAgAKAqQALAzgRAtQgHARgKANQADAcgIAYQgNApglAcQgRANgVAOQgoAbgdAbQgBABAAAAQgIAIgKAHQgQALgVAHQgCABgDABQgxAQgogZQgJAZgkgBQgzgBgmgWQgngXgFgcQAUg0AYgbAHHCYQgPATgYAMQgpAWgzAFQguAFgwAAQgVABgWAAQgbAAgaAAQgyAAgxgBQgxgBgpgQQgegLgcgHQgWgGgUgLQgIgEgHgFQglgaADg5QACgpAJgeADHlaQAlgiACApQAAALgKACQgDABgCAAQgNACgPgBABHl2QAGgIALgFQAqgVAEAsQABAIgCAGQAag5AkAjQAPAPgLALQAAAAgBABQgQAOgNgDADflFQAjAegwACQAaAFARAQQAnASANAuQAFAPgCAOQgBAKgEAJAishzQgcASgPgYQgaALgQgjQgJgTAPgCQgngfAfghQgZgsAngdQAMgjAPACQALgtAvAJQADguAoAcQAVgeAUAeQAVgfAeAkQASgeAVAXQAOgXAOAcQAagiADAvQgPAXARAtQghgfgoAoQgJAJAJAQQACAFADADQgVgBghABQgzAYgYgXQgtASAJA0QgQAWACAoQABAJABAHgAgsjKQAMgKAVAEQAQACAGAOAAaj5QAOAEARgIQAIAPAJADQAQAHAVgVAAaj5QgDANACAJQABAEACAEQAHAMARAFQgbAOAZAaQgPAdAaANQAAAAAAABQAHADAKADQAPADAIgHQADgRAOgQQgFgDgFgFQgkgfACguAAFkIQAJAMAMADABlh1QgCAMAFAOAhIhzQAGANARADQALADAJgEQAOgGAFgPQABgEgCgDAhBivQgOgIgMALQgMAMAPAJQAGAEAJACQASAEAHgOAA9h3QgQAtgtAQQgPAGgSACQg1AFgqgUQgjgRgJghQgOASgVANQgTANgPAUQgNARgKAUQgMAUgHAVQgHAXABAZQABASAEAPQguAMgfAeQglAiAAAyQgBAgAHAaQACAKAEAIABlkjQAtAFANAeAB2iWQAQALAFgHAiDjNQAFgQAXADQARABANAHAishzIAAAAAiBFXQgBgCAAgDQgCgGgFgBQgQgFgVgCQgZgCgCgXQgDgZAMgTQAMgTALgSQALgSADgYQAAgIAAgFAmsFQQgFgBgEAAQgXgEgSgLQgGgDAEgGQAKgQAbgBQAYgBAbgBAmBFFQgZACgSAJQALABAIAAAklF4QgCAKgFAIQgNATgcgLQgMgEgGgKQgKgSAKgMQgTALgWAJQgWAJgOgQQgTgTAbgQAklF4QABgEAAgFAlnFmQAGgDADgEAjJFlQgCgNgLgDAiBFXQACAYgaAAQgaABgWgLQAAACAAACQAAAZgUAIQgXAIgZgDQgZgDABgUAC7DYQAqAPAZAqQAbAvgWAoQgNAYgJAEAElFiQAGgHAFgJAgjFLQgmARg4gF");
	this.shape_8.setTransform(48.2,40.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C0C0C").s().p("ACoFxQAWgpgbguQgZgrgqgOIArgBQAwgBAugEQAzgFAqgWQAXgMAPgTQADAcgIAYQgNApgkAcQgSANgVAOQgoAbgdAbQAHgIAEgIQgEAIgHAIIgBABQgIAIgKAHQgPALgWAHQAJgFANgXgAkyhwQgZALgRgjQgJgTAPgCQgngfAfghQgZgsAogdQAMgjAOACQALgtAvAJQAEguAoAcQAVgeATAeQAWgfAdAkQASgfAXAYQANgXAPAcQAZgiAEAvQgQAWARAuQghgfgoAoQgJAJAJAQIAGAIQgXgBggABQgzAYgZgXQgtASAJA0QgQAWACAoIADAQQgMAIgKAAQgNAAgJgOgAgMhoQgJgDgHgDIgBgBQgZgNAPgdQgagaAcgOQgSgFgHgMIgDgIQgCgJADgNQAOAEASgIQAHAOAJAEQgCAuAjAfIAKAIQgOAQgDARQgFAFgIAAIgJgBg");
	this.shape_9.setTransform(57.3,39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BE9670").s().p("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");
	this.shape_10.setTransform(48.2,41.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("ACHkPQBhAQAsAqQAmAkAqAdQApAHAlAjQAiAgAKArQALAygRAuQgHAQgKANQADAdgIAXQgNApglAcQgRAOgVAOQgfAUgYAVQgHAGgHAGQgBABAAAAQgIAJgKAHQgQAKgVAHAHHBeQgPATgYAMQgpAWgzAFQgZADgaABQAGAcAAAcQAAApgOAjQAAABAAAAQgDAHgDAGQgNAYgJAEQgCABgDABQgLAEgKABQgNAOgMAJQgGAFgGADABHmvQAmgagJAuQAwABgTAuQAcATgRAfQAPATgUAYQAkAaggAdQgGAGgPACQAhAngygGQgIAHgPgDQgKgCgHgEQAAAAAAgBQgagNAPgcQgZgbAbgOQgRgFgHgMQgCgDgBgFQgCgJADgMQACgRgXACQgVgCghABQgzAZgYgYQgtASAJA0QgQAWACAoQABAJABAHQgcASgPgYQgaALgQgjQgJgTAPgCQgngfAfghQgZgsAngdQAMgjAPACQALgtAvAJQADguAoAdQAVgfAUAfQAVgfAeAkQASgfAVAXQAOgXAOAcQAagiADAvAghj4QAGAMARgCQANgBAOgHQAFgDACgHQADgKgDgKQgBgEgCgDQgIgNgQACQgOACgKAKQgCACgDACQAAABAAAAQgCACgBADQACgDACgCQAGgEAIAPQABADAAAEQgDATgOgIgAhtj7QAGAIALAAQAQABALgIQANgJABgOQAAgJgIgCQgJgLgQAAQgPABgKAMQgFAGgBAGQAFgPALAOQAEAEgBAHQgBAOgMgFQgDgDgBgEQgDgGABgGAgjkQQgFALAGAMQAAAAABABAhIisQAGAMARAEQALACAJgEQAOgGAFgOQABgFgCgDAhBjpQgOgIgMALQgMANAPAIQAGAEAJACQASAFAHgPAA9ixQgQAtgtAQQgPAGgSACQg1AFgqgUQgjgQgJghQgOARgVAOQgTANgPATQgNASgKATQgMAWgHAUQgHAXABAYQABATAEAOQguANgfAdQglAiAAAyQgBAgAHAaQACAKAEAJAisitIAAABAibBpQgIgEgHgFQglgZADg5QACgpAJgdAiBEeQgBgDAAgDQgCgFgFgCQgQgFgVgCQgZgCgCgXQgDgZAMgTQAMgTALgRQALgTADgYQAAgIAAgFAAdCdQgtgCgngOQgegMgcgHQgWgGgUgLAmsEWQgFAAgEgBQgXgEgSgLQgGgDAEgGQAKgQAbgBQAYgBAbgBAmBEMQgZACgSAIAklE+QgCAKgFAIQgNATgcgKQgMgFgGgJQgKgSAKgNQgTALgWAJQgWAJgOgQQgTgTAbgQAklE+QABgEAAgEAlnEsQAGgDADgEAjJErQAAACAAACQAAAagUAHQgXAJgZgEQgZgDABgUAiBEeQACAXgaABQgaAAgWgLQgCgNgLgDAERCcQgCgIgCgIQgGgUgNgPQAHgTACgWQAIhQgRhLAD6BpQgLgNgPgIAgjERQAUg0AdgaQAEgXALgOQAAgBAAAAABGBcQgIAJgHAKQgOAVgMAZAAODDQgDALgBAMQgCApANAjQAJAYANAVQAHALAIAKQAIAKAKACABShbQgSBGgJBJQgEAjAEAYAArFTQglAEgdAQQgrAZAhAVQAMAHAQADQAGABAHABQAFABAFAAQAEgHAIgHQALgEANAAABzGwQgCAbgWADQglAGgVgQQgYgRAJgRABzGwQABgGgBgIQgBgLgEgJAArFTQgSgFgQgJQgngYgFgcQgmARg4gEADTFRIAAAAQAggPAWghADIGmQAEAKgCAMQgSAGgNgBQgoAPgQggACAGKQAeAXANAfQAAABAAAAAC6FoQA2ARgNAiQgFANgWgCQgGgTgYgN");
	this.shape_11.setTransform(48.2,46.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BE9670").s().p("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");
	this.shape_12.setTransform(48.2,53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5}]},3).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_12},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_11}]},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,98.5,94.8);


(lib.anim_baby_bub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(52.9,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYANQgGgGABgJIAAAAQAegIgQAdIgJgGgAgiABIgBgBQgCgDAAgFIACgDQAOgTANAeIgGACIgDABIgHACQgGAAgEgEg");
	this.shape_1.setTransform(48.3,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAjQAQgdgeAHIAAgBQACgTATgMQATgDAKARQAMAVgSAPQgJAIgJAAQgGAAgGgEgAg1AEIgCgBQABgIAEgEIAOgNQALgJALgHQAIAEACAFQAFAPgFAOQgEAHgJAFIgJAEQgMgegPASg");
	this.shape_2.setTransform(50,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AhqCVIgBgeIgCgNQAEgVgDgRQgFgXgKgWQgKgUgSgTIgfghQgLgKgLgHQARAIAUABQAaAAALgQIADAAQAAAUgCATQgCAOAPADQASAFAOgMIADgBQAFARAOACQAZAFATgPIADgCQAFAGAMADQAUAFAMgMQAKgJgCgLQAHgCAFgDQAsgXAtgLIAPgEQATAHAbgBQAZgBAYgFIAvgLQAWgGAVgIIAmgPIAfgNIAAAAIgBAGIABAvQAAAYgDAYQgEAXgJAVQgJAWgQARQgRASgTAPIgMAJIgpAXQgWAMgXAHQgVAGgWAEQgZAEgZgBIgwAAIgwAAIgwgBQgZAAgYADIgwAIIgKACQACgFgBgHgAmbiVQAWgIAYgDQADAJAHAHQAYAYAuAQQAkANAngBQgDAJADAOIgLgEQgVgHgaADQgWADgUALIgEACQgphAg4gYg");
	this.shape_3.setTransform(63.5,80.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AkvHbQgOgCgOgDQgPgEgNgHQgMgHgLgIQgLgKgGgLQgGgNgDgPQgCgRAJgIQAKgIAIgKQgNAEgMgDIgPAAQgOABgOgEQgOgEgKgLQgKgLgEgMIgFgHQgGgOAAgPQAAgPALgLQALgMgLgLQgKABgJgFQgFgCgEgHQgIgNAJgMIABAAIAJABIABAAIAAAAIADAAIAEAAIgEAAIgDAAIAAAAIgBAAIgJgBIgBAAQgTgEAKgOQAIgMAQAAIAAAAQAHAGAMAAIAAAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIAAAAQgMAAgHgGIAAAAIgBAAQgLgJAKgGQAMgHAPACQgFgUAyAGQAFANAOAAIAAAAIABAAQAHAAAJgDQgJADgHAAIgBAAIAAAAQgOAAgFgNQgEgzA4AiQAPASAFAaIAAADQACAMAAAOIAAAJIAAgJQAAgOgCgMIAAgDQAHgJAJgFQASgLATgHQA4AYApBAQgTALgVAIQgUAHgWAGIAGAGQABACAAADIAAACIgBAAIAAAAIgEgBIAAAAIgBAAQgGAAgDAHIAAACIgBAAQgCADgFAAIgBAAIAAAAIgEgBIgBAAQgQgDgIgNIgBgFQAAgGAFgGQAJgJAJAEQgJgEgJAJQgFAGAAAGIABAFIAAAAQgFADgFAAIAAAAIAAAAQgIgBgGgHIAAAAIAAgBQgEgEgBgFIAAgDQAAgHAFgGIACgCQAGgHAKAAIAAAAIAAAAIAHABIAAAAIABAAIAAAAQAOABAIANIgCADIAFAFIgDgIQgIgNgOgBQgFgIgGgBQgFgGgGgDQAGADAFAGQAGABAFAIIAAAAIgBAAIAAAAIgHgBIAAAAIAAAAQgKAAgGAHIgCACQgFAGAAAHIAAADIgBAAIgBAAIAAAAIgCAAIgIgCQgNgGgBgMIABgFQADgQAUgDQgUADgDAQIgBAFQABAMANAGIAIACIACAAIAAAAIABAAIABAAQABAFAEAEIAAABIAAAAQAGAHAIABIAAAAIAAAAQAFAAAFgDIAAAAQAIANAQADIABAAIAEABIAAAAIABAAQAFAAACgDIABAAIgBAFIAAABIAAAAQAAAPANAEIACABIAIABIABAAIAAAAQAIAAAFgFIABgBIgBABQgFAFgIAAIAAAAIgBAAIgIgBIgCgBQgNgEAAgPIAAAAIAAgBIABgFIAAgCQADgHAGAAIABAAIAAAAIAEABIAAAAIABAAIABAAIAAAAIABAAIAFgBIAAAAIABAAQAJAAAIAHIABABQALALABAPIABAEIgBAEQALAIAFAOQAFAOABAOIACAdIAAAOIAAANIAAgNIAAgOIgCgdQgBgOgFgOQgFgOgLgIIABgEIgBgEQgBgPgLgLIgBgBQgIgHgJAAIgBAAIAAAAIgFABIgBAAIAAAAIgBAAIAAgCQAAgDgBgCIgGgGQAWgGAUgHQAVgIATgLIAEgCQAUgLAXgDQAagDAUAHIALAEQgDgNADgKQADgJAIgGQATgPAaAAQgDgDgHgDQgPgGgEgOQgCgGAAgFQAAgRARgKIABAAIADgCIAAAAQAIgEAJAAIAAAAIAAAAQAKAAAKAGIAAAAIADACIAAAAQARAMANAMQAMgVAWgKIArgUQAWgKAXgIIAAAAIAJADQAIABAKAAIAAAAIAAAAIAAAAIAAAAQgKAAgIgBIgJgDQgggKgLgnQgHgXAAgWQAAgaAJgZQgJAZAAAaQAAAWAHAXQALAnAgAKIAAAAQgXAIgWAKIgrAUQgWAKgMAVQgNgMgRgMIAAAAIgDgCIAAAAQgKgGgKAAIAAAAIAAAAQgJAAgIAEIAAAAIgDACIgBAAQgRAKAAARQAAAFACAGQAEAOAPAGQAHADADADQgaAAgTAPQgIAGgDAJQgnABgjgMQgvgRgYgXQgGgIgEgJQgMgbAJgrQALguAdgWQAqgfAogRQgDgLAAgJQgDgqAhghQAkglAngUIABAAIABABQAKADALAAIAAAAIAAAAQAKAAAIgDQALgCAIgHQgIAHgLACQgIADgKAAIAAAAIAAAAQgLAAgKgDIgBgBIgBAAIgDgBQgVgIgMgTQgMgUACgXQACgXABgZIgBAAQgcgFADgbQADgbAYAIIABABQAFAGALgDIADgCIAGgCIAJgEQAJgFADgIQAGgOgFgPQgCgGgIgDQALgGAQgCQAQgHAXgDQAYgEAaACIAPAAQgNAIgJAHQAiACAqgEIABACQgUAFgMAQIAvAAQgMAKgHASQAMgCAMgEQgIAQgMAOQAXgIAggEQAdgDAFAdQADATgFANQgBAEgDACQAIABAEgDQAEAUgNAUQAOgFAIgIQANAWANgbQAFgKgBgNQAKAAAJAGQAgAgAoAcQApAdAeAnQAdAlATAsQATArAKAtQAMAugDAyQgDAkgHAfIgCAIIgeANIgmAPQgVAIgWAGIgwALQgYAFgZABQgbABgTgHQAngLAXgTQAWgSAVgZQAegjANgwQAIgbAAgbQAAgWgFgWQgJgxgagoQAaAoAJAxQAFAWAAAWQAAAbgIAbQgNAwgeAjQgVAZgWASQgXATgnALIgOAEQguALgrAXQgGAEgGABQABALgJAJQgNAMgUgEQgNgEgFgGQALgJAAgLQAAgIgGgIQAGAIAAAIQAAALgLAJIgCADQgTAOgZgFQgOgCgGgRIAAgBQAPgOABgWQgBAWgPAOIgCACQgOAMgSgEQgOgEABgOQACgTABgUIAAgNQgBAHgDAGQgKARgbgBQgUgBgRgIQAMAHAKAKIAgAiQASATAJAUQALAWAEAYQADARgDAVIACANIABAeQAAAHgBAEIgBABQgCAHgIABQgOADgPAAIgegBIgeABIgdABIgdAAIgdACQgOABgOAFQgOAEgMAGQAJgGAGgIIABgEIAAgBIAAABIgBAEQgGAIgJAGIgFAEQgLAHgQACIgPABIgOgBgAl9FdIgCADIACgDQAEgFAAgFQAAgHgIgGQgMgIgKgLQgKgLgFgNQgFgOAAgOIAAgBQAAgRAMgIIAHACIABAAIABAAIAAAAIAAAAQAGAAADgEIABgBIAAAAIAAgBIAAABIAAAAIgBABQgDAEgGAAIAAAAIAAAAIgBAAIgBAAIgHgCQgMAIAAARIAAABQAAAOAFAOQAFANAKALQAKALAMAIQAIAGAAAHQAAAFgEAFgAkjDwQgIgIgLgCQALACAIAIgACUDpQgCgJgJgJQAJAJACAJgAmrDVQACAMAKAEQgKgEgCgMIAAgGQAAgLAFgJQAGgJAKgFIABAAQAFgCAFAAIABAAIAAAAQAIAAAHAEQAIAFADAIIAAAAIAAAAIAAAAQgDgIgIgFQgHgEgIAAIAAAAIgBAAQgFAAgFACIgBAAQgKAFgGAJQgFAJAAALIAAAGgAhjDLIgGgDIAGADgAllC+QgEgCgFAAIgBAAIAAAAIAAAAIgBAAIABAAIAAAAIAAAAIABAAQAFAAAEACIAAAAgAm7ChIAAAAIgGgBIgBAAIgJgCIgGgBQgJgLgCgHQACAHAJALIAGABIAJACIABAAIAGABIAAAAgAg2kSQAOgBACgMQAJAMARAAIABAAIAAAAIAGAAIAAAAIAAAAIgGAAIAAAAIgBAAQgRAAgJgMQgDgFgCgGQACAGADAFQgCAMgOABIAAAAIAAAAIgEgBIAAAAIAAAAIAEABIAAAAIAAAAgACyk1QAXAAASgQIABgBIAGgIIgGAIIgBABQgSAQgXAAIgBAAIAAAAIgCAAQgNAAgHgJQAHAJANAAIACAAIAAAAIABAAgADTlRIABgGQAAgKgLgKQgFgFgFgCIABAJQAAAKgJAGQAJgGAAgKIgBgJQAFACAFAFQALAKAAAKIgBAGgAhKlbQAIAAAHgEQgHAEgIAAIAAAAIgBAAIgDAAIgCgBIgBAAIgBAAIABAAIABAAIACABIADAAIABAAIAAAAgACilqQAIgKAKgBIABAAIAAAAQAEABAEABIABABIABAAIgBAAIgBgBQgEgBgEgBIAAAAIgBAAQgKABgIAKgAgGmzQgTAMgCAUIAAABQgBAKAGAGIAJAGQAOAIAOgMQATgPgNgWQgHgOgOAAIgGAAgAAvnDIgBgBIAAgBIAAAAQgHgGgHAAIgBAAIAAAAQgHAAgHAFQAHgFAHAAIAAAAIABAAQAHAAAHAGIAAAAIAAABIABABgAlRD3IAAAAgAlPDQIAAAAgACFAogAgmkfIAAAAg");
	this.shape_4.setTransform(52.9,53.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996600").s().p("AB0BQQgEAEgHgCQACgCABgEQAGgNgEgTQgEgdgdADQghAEgXAIQANgOAHgQQgLAEgNACQAIgRAMgKIgvAAQALgQAUgFIAJgCIgJAAQgpAEgigCQAIgHANgIIgPAAQgZgCgYAEQgYADgRAHQgeACgagBIAJgHQAWgTAdgEIgXAAQAHgFANgCQAkgHAigBQgUgPgUgHIAQAAQAQAAAOADIBMAWQgPgMgNgHQAYgBAXAHIAUAGQgCgJgEgJQAXACANASQgBgSABgKQAWAPAOAcQgBgSgDgKQATATAFAeQAJgMAGgNQAJAMgDAUQgBAGACAFQAEAUANATQgFgFgFABQASARAIAfQgOgGgMgBQAPATgFAcQgKgHgJAAQABANgGAKQgNAbgNgWQgIAIgNAFQANgUgFgUgABNhTIgXgKIAXAKg");
	this.shape_5.setTransform(65.1,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_6.setTransform(52.9,50.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AkvHbQgOgCgOgDQgPgEgNgHQgMgHgLgIQgLgKgGgLQgGgNgDgPQgCgRAJgIQAKgIAIgKIACgDQAEgFAAgFQAAgHgIgGQgMgIgKgLQgKgLgFgNQgFgOAAgOIAAgBQAAgRAMgIQgKgEgCgMIAAgGQAAgLAFgJQAGgJAKgFIABAAQAFgCAFAAIABAAIAAAAQAIAAAHAEQAIAFADAIIAAAAIAAAAIAAAAQgDgIgIgFQgHgEgIAAIAAAAIgBAAQgFAAgFACIgBAAQgKAFgGAJQgFAJAAALIAAAGQACAMAKAEQgMAIAAARIAAABQAAAOAFAOQAFANAKALQAKALAMAIQAIAGAAAHQAAAFgEAFIgCADQgNAEgMgDIgPAAQgOABgOgEQgOgEgKgLQgKgLgEgMIgFgHQgGgOAAgPQAAgPALgLQALgMgLgLQgKABgJgFQgFgCgEgHQgIgNAJgMIABAAIAJABIABAAIAAAAIADAAIAEAAIgEAAIgDAAIAAAAIgBAAIgJgBIgBAAQgTgEAKgOQAIgMAQAAIgBAAQgLgJAKgGQAMgHAPACQgFgUAyAGQgEgzA4AiQAPASAFAaQAHgJAJgFQASgLATgHQA4AYApBAIAEgCQAUgLAXgDQAagDAUAHIALAEQgDgNADgKQADgJAIgGQATgPAaAAQgDgDgHgDQgPgGgEgOQgCgGAAgFQAAgRARgKIABAAIADgCIAAAAQAIgEAJAAIAAAAIAAAAQAKAAAKAGIAAAAIADACIAAAAQARAMANAMQAMgVAWgKIArgUQAWgKAXgIIAAAAQgggKgLgnQgHgXAAgWQAAgaAJgZQgJAZAAAaQAAAWAHAXQALAnAgAKIAAAAQgXAIgWAKIgrAUQgWAKgMAVQgNgMgRgMIAAAAIgDgCIAAAAQgKgGgKAAIAAAAIAAAAQgJAAgIAEIAAAAIgDACIgBAAQgRAKAAARQAAAFACAGQAEAOAPAGQAHADADADQgaAAgTAPQgIAGgDAJQgnABgjgMQgvgRgYgXQgGgIgEgJQgMgbAJgrQALguAdgWQAqgfAogRQgDgLAAgJQgDgqAhghQAkglAngUIgDgBQgVgIgMgTQgMgUACgXQACgXABgZIgBAAQgcgFADgbQADgbAYAIQgDgEAAgFIAAgEIABgGQABgFADgCIANgNQAMgJALgHQALgGAQgCQAQgHAXgDQAYgEAaACIAPAAQgNAIgJAHQAiACAqgEIABACQgUAFgMAQIAvAAQgMAKgHASQAMgCAMgEQgIAQgMAOQAXgIAggEQAdgDAFAdQADATgFANQgBAEgDACQAIABAEgDQAEAUgNAUQAOgFAIgIQANAWANgbQAFgKgBgNQAKAAAJAGQAgAgAoAcQApAdAeAnQAdAlATAsQATArAKAtQAMAugDAyQgDAkgHAfIgCAIIgeANIgmAPQgVAIgWAGIgwALQgYAFgZABQgbABgTgHQAngLAXgTQAWgSAVgZQAegjANgwQAIgbAAgbQAAgWgFgWQgJgxgagoQAaAoAJAxQAFAWAAAWQAAAbgIAbQgNAwgeAjQgVAZgWASQgXATgnALIgOAEQguALgrAXQgGAEgGABQABALgJAJQgNAMgUgEQgNgEgFgGQALgJAAgLQAAgIgGgIQAGAIAAAIQAAALgLAJIgCADQgTAOgZgFQgOgCgGgRIAAgBQAPgOABgWQgBAWgPAOIgCACQgOAMgSgEQgOgEABgOQACgTABgUIAAgNQgBAHgDAGQgKARgbgBQgUgBgRgIQAMAHAKAKIAgAiQASATAJAUQALAWAEAYQADARgDAVIACANIABAeQAAAHgBAEIgBABQgCAHgIABQgOADgPAAIgegBIgeABIgdABIgdAAIgdACQgOABgOAFQgOAEgMAGQAJgGAGgIIABgEIAAgBIAAABIgBAEQgGAIgJAGIgFAEQgLAHgQACIgPABIgOgBgAjeGQIAAgNIAAgOIgCgdQgBgOgFgOQgFgOgLgIIABgEIgBgEQgBgPgLgLIgBgBQgIgHgJAAIgBAAIAAAAIgFABIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAFgBIAAAAIABAAQAJAAAIAHIABABQALALABAPIABAEIgBAEQALAIAFAOQAFAOABAOIACAdIAAAOIAAANgAkUEgQAIAAAFgFIABgBIgBABQgFAFgIAAIAAAAIgBAAIgIgBIgCgBQgNgEAAgPIAAAAIAAgBIABgFIAAgCQADgHAGAAIABAAIAAAAIAEABIAAAAIABAAIAAgCQAAgDgBgCIgGgGQAWgGAUgHQAVgIATgLQgTALgVAIQgUAHgWAGQgIgIgLgCQALACAIAIIAGAGQABACAAADIAAACIgBAAIAAAAIgEgBIAAAAIgBAAQgGAAgDAHIAAACIgBAAQgCADgFAAIgBAAIAAAAIgEgBIgBAAQgQgDgIgNQAIANAQADIABAAIAEABIAAAAIABAAQAFAAACgDIABAAIgBAFIAAABIAAAAQAAAPANAEIACABIAIABIABAAIAAAAgAlbD6QAFAAAFgDIAAAAIgBgFQAAgGAFgGQAJgJAJAEQgJgEgJAJQgFAGAAAGIABAFIAAAAQgFADgFAAIAAAAIAAAAQgIgBgGgHIAAgBQgEgEgBgFIAAgDQAAgHAFgGIACgCQAGgHAKAAIAAAAIAAAAIAHABIAAAAIABAAIAAAAQgFgIgGgBQgFgGgGgDIAAgJQAAgOgCgMIAAgDIAAADQACAMAAAOIAAAJQAGADAFAGQAGABAFAIIAAAAIgBAAIAAAAIgHgBIAAAAIAAAAQgKAAgGAHIgCACQgFAGAAAHIAAADIgBAAIgBAAIAAAAIgCAAIgIgCQgNgGgBgMIABgFQADgQAUgDQgUADgDAQIgBAFQABAMANAGIAIACIACAAIAAAAIABAAIABAAQABAFAEAEIAAABQAGAHAIABIAAAAIAAAAgACUDpQgCgJgJgJQAJAJACAJgAmWDnQAGAAADgEIABgBIAAAAIAAgBIAAABIAAAAIgBABQgDAEgGAAIAAAAIAAAAIgBAAIgBAAIgHgCIAHACIABAAIABAAIAAAAIAAAAgAk5DeIgCADIAFAFIgDgIQgIgNgOgBQAOABAIANgAhjDLIgGgDIAGADgAllC+QgEgCgFAAIgBAAIAAAAIAAAAIgBAAIABAAIAAAAIAAAAIABAAQAFAAAEACIAAAAgAniClIABAAIABAAIgBAAIgBAAIAAAAIAAAAQgMAAgHgGIAAAAIAAAAQAHAGAMAAIAAAAIAAAAgAm7ChIAAAAIgGgBIgBAAIgJgCIgGgBQgJgLgCgHQACAHAJALIAGABIAJACIABAAIAGABIAAAAgAmbCKQAHAAAJgDQgJADgHAAIgBAAIAAAAQgOAAgFgNQAFANAOAAIAAAAIABAAgACgAsIAAAAIAAAAQgKAAgIgBIgJgDIAJADQAIABAKAAIAAAAIAAAAgAgQjhQAKAAAIgDQALgCAIgHQgIAHgLACQgIADgKAAIAAAAIAAAAQgLAAgKgDIgBgBIgBAAIABAAIABABQAKADALAAIAAAAIAAAAgAg2kSQAOgBACgMQgDgFgCgGQACAGADAFQgCAMgOABIAAAAIAAAAIgEgBIAAAAIAAAAIAEABIAAAAIAAAAgAgLkTIAGAAIAAAAIAAAAIgGAAIAAAAIgBAAQgRAAgJgMQAJAMARAAIABAAIAAAAgACyk1QAXAAASgQIABgBIAGgIIgGAIIgBABQgSAQgXAAIgBAAIAAAAIgCAAQgNAAgHgJQAHAJANAAIACAAIAAAAIABAAgADTlRIABgGQAAgKgLgKQgFgFgFgCIgBAAIgBgBQgEgCgEAAIAAAAIgBAAQgKABgIAKQAIgKAKgBIABAAIAAAAQAEAAAEACIABABIABAAQAFACAFAFQALAKAAAKIgBAGgAC3lZQAJgGAAgKIgBgJIABAJQAAAKgJAGgAhKlbQAIAAAHgEQgHAEgIAAIAAAAIgBAAIgDAAIgCgBIgBAAIgBAAIABAAIABAAIACABIADAAIABAAIAAAAgAAImYQAOAIAGAMQgGgMgOgIIgCgBQgJgFgLAAIAAAAIgBAAIgJABIAAAAIgBAAIAAAAIAAAAIABAAIAAAAIAJgBIABAAIAAAAQALAAAJAFIACABgAhHmKIAGgBIABAAIADgCIAGgCIgGACIgDACIgBAAIgGABIAAAAIAAAAQgGAAgDgEIAAAAIgBgBIABABIAAAAQADAEAGAAIAAAAIAAAAgAgwmiIgFgBIgMgBIAAAAIgBAAIgOABIgBAAIgCABIACgBIABAAIAOgBIABAAIAAAAIAMABIAFABgAAvnDIgBgBIAAgBIAAAAQgHgGgHAAIgBAAIAAAAQgHAAgHAFQAHgFAHAAIAAAAIABAAQAHAAAHAGIAAAAIAAABIABABgAmfDlIAAAAgAllC+IAAAAgAgmkfIAAAAg");
	this.shape_7.setTransform(52.9,53.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AEsksQgJgHgKABQABAMgFALQgNAbgNgWQgIAIgOAFQANgUgEgUQgEADgIgBQADgDABgDQAFgOgDgTQgFgdgdAEQggAEgXAIQAMgOAIgQQgMAEgMABQAHgRAMgLQgbAAgUAAQAMgPAUgGQAEgBAFAAQgFgBgFABQgqAEgigCQAJgIANgHQgHAAgIgBQgagBgYADQgXAEgQAGQgeACgaAAQAFgDAEgEQAVgUAegEQgQAAgHAAQAHgEAMgDQAjgHAjAAQgVgPgUgIQAJAAAIAAQAPAAAOAEQAsAMAhAKQgOgNgPgGQAZgCAYAHQAKADAJAEQAMAEAMAFAEsksQAGgbgQgUQANABAOAHQgIgfgTgTQAFAAAFAFQgMgUgFgUQgBgFABgFQACgUgIgMQgGAMgJAMQgFgdgTgTQADAKABASQgPgdgVgOQgBAKABASQgNgTgYgCQAEAJACAKAIHCgQAHggADgjQADgzgMgtQgKgtgTgsQgTgrgdglQgegogpgcQgogcggggAF7h6QAaAnAJAyQALAygOAwQgNAvgeAkQgVAYgWATQgXASgnAMQATAHAbgBQAZgBAYgFQAYgFAYgGQAWgGAVgIQAVgIARgHQAPgHAPgGQABgEABgEAgBHOQABgBAIgBQAXgEAYgEQAZgDAZAAQAYABAYAAQAYAAAYAAQAYAAAYAAQAaABAYgEQAXgEAUgGQAYgHAVgMQAVgLAUgMQAHgEAFgFQATgPARgSQARgRAJgWQAJgWADgXQADgYAAgYQAAgYgBgXQABgDABgDQABgEAAgEADikvQgCAEgEADQgTATgagBQgNgBgHgJAC/lTQAFACAFAFQAOAMgEAOAC3k6QAMgIgEgRACilLQANgQAQAIAgNldQAOAIAOgMQATgPgNgWQgJgRgSADQgTAMgCAUQAAABAAAAIAAAAQAdgIgPAegAARmnQAQgMAOAOAgrmnQgLAGgMAKQgGAFgHAIQgEAEgBAJQAAACAAACQABgCABgBQAOgTANAfQAFgCAEgDQAJgFADgIQAGgNgFgPQgCgGgIgDgAg3lwQgDABgDABQgBABgCAAQgLAEgFgGQgBgBAAgBQgYgHgDAbQgDAbAcAFIABAAQgBAZgCAXQgCAWAMAUQAMAUAVAIQABAAACABQAVAHAUgGQALgDAIgGAhUl5QAAAFADADAhSk9QANACAKgFAgblzQgBAKAGAGQAFAEAEACAgQmwQgQADgLAGAgmkBQALAPAWgCAg6j0QASACACgPAgnjGQgnATgkAmQghAhADAqQAAAJADALQgoARgqAeQgdAWgLAvQgJArAMAbQAEAJAGAHQAYAYAvAQQAjANAngBQADgJAIgGQATgPAaAAQgDgEgHgDQgPgGgEgNQgHgZAWgNQAWgOAWAQQARAMANAMQAMgWAWgJQAWgJAVgLQAWgKAXgIIAAAAQgggLgLgnQgPgwARgvAgrkLQACAGADAEAkECMQgYADgWAIQgTAHgSAKQgJAGgHAJQgFgagPgSQg4gjAEA0QgygGAFAUQgPgCgMAHQgKAGALAIQAAABABAAQgQAAgIAMQgKAOATAEQAJACAJgBAn1C+QAIAGANAAAncCqQACAHAJAKQARAFAFAAAlwDbIAAAAQgDgIgIgFQgNgIgOAGQgKAEgGAKQgHALACAPQACAMAKAEQADABAEABQAJAAADgGAluEHQgGAAgGgDQgQgHADgPQADgQAUgDIAAAAQAGAAAFACQABgTgDgQQAAgBAAgCAllDdQAGACAFAGQAGACAFAIQAOABAIANQACACABAFQgCgDgDgBQgJgEgJAJQgGAHACAKQAIANAQADQAJACAFgEQgBACAAAEQAAAOANAFQAQAFAJgJAmvCcQAIAUAcgKAluEHQgBgJAGgHQALgNAPAFAluEHQABAEAEAFQAKANAOgHAmfEEQgMAIAAARQAAAOAFAOQAFAOAKALQAKAKAMAJQANAKgJANQgBABgBABAoEDcQgJALAIAOQAEAGAFADQAJAEAKAAQALAKgLANQgLALAAAOQAAAPAGAOQACAFADADQAEAMAKALQAKALAOAEQAOAEAOgBQAIAAAHAAQAMADANgFQgIALgKAHQgJAJACARQADAPAGANQAGALALAKQALAIAMAHQANAGAPAEQAOAEAOACQAPABAOgBQAQgCALgIQADgBACgCQAJgHAGgHQACgCgBgDAjRDvQACgBACgBQAUgLAXgDQAagDAUAHQAGABAFADQgDgOADgJAkcEcQABgEgCgEQgDgDgDgDQgIgHgLgDAkrEkQAAgCAAgBQAEgIALADAjeGvQAAgOAAgNQgBgPgBgPQgBgOgFgNQgFgOgLgIQABgEgBgEQgBgPgLgLQgMgLgOAEAkjEOQAWgFAUgHQAVgJATgKAjyHtQAMgGAOgEQAOgFAOgBQAPgCAOAAQAOgBAPABQAPAAAOgBQAPgBAPAAQAPAAAPAAQAPAAAOgCQAIgBACgHQAAgBABAAQABgFAAgHQgBgOAAgQQgBgGgBgHQADgVgDgRQgEgXgLgWQgJgUgSgUQgQgRgQgQQgKgKgMgHQgDgCgDgBAkyCXQA4AYApBAACFBHQAEABAFABQAIACAKAAAEHDdQgHACgHACQguALgrAXQgGADgGACQgCgJgJgKAAXESQgBABgBABQgOAMgSgFQgOgDABgOQACgTABgUQAAgHAAgGQgBAHgDAGQgKAQgbAAQgUgBgRgIABZEaQgBABgBABQgTAPgZgFQgOgDgGgQQAAAAAAgBQAPgOABgWABZEaQATgQgOgVACUEIQABALgJAJQgNAMgUgFQgNgDgFgG");
	this.shape_8.setTransform(52.9,50.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AkvHbQgOgCgOgDQgPgEgNgHQgMgHgLgIQgLgKgGgLQgGgNgDgPQgCgRAJgIQAKgIAIgKQgNAEgMgDIgPAAQgOABgOgEQgOgEgKgLQgKgLgEgMIgFgHQgGgOAAgPQAAgPALgLQALgMgLgLQgKABgJgFQgFgCgEgHQgIgNAJgMIABAAIAJABIABAAIAAAAIADAAIAEAAIgEAAIgDAAIAAAAIgBAAIgJgBIgBAAQgTgEAKgOQAIgMAQAAIgBAAQgLgJAKgGQAMgHAPACQgFgUAyAGQAFANAOAAIAAAAIABAAQAHAAAJgDQgJADgHAAIgBAAIAAAAQgOAAgFgNQgEgzA4AiQAPASAFAaIAAADQACAMAAAOIAAAJQgEgCgFAAIgBAAIAAAAIAAAAIgBAAIAAAAQgDgIgIgFQgHgEgIAAIAAAAIgBAAQgFAAgFACIgBAAQgKAFgGAJQgFAJAAALIAAAGQACAMAKAEQgKgEgCgMIAAgGQAAgLAFgJQAGgJAKgFIABAAQAFgCAFAAIABAAIAAAAQAIAAAHAEQAIAFADAIIAAAAIAAAAIABAAIAAAAIAAAAIABAAQAFAAAEACIAAgJQAAgOgCgMIAAgDQAHgJAJgFQASgLATgHQA4AYApBAIAEgCQAUgLAXgDQAagDAUAHIALAEIAGADQAMAHAKAKIAgAiQASATAJAUQALAWAEAYQADARgDAVIACANIABAeQAAAHgBAEIgBABQgCAHgIABQgOADgPAAIgegBIgeABIgdABIgdAAIgdACQgOABgOAFQgOAEgMAGQAJgGAGgIIABgEIAAgBIAAABIgBAEQgGAIgJAGIgFAEQgLAHgQACIgPABIgOgBgAjeGQIAAgNIAAgOIgCgdQgBgOgFgOQgFgOgLgIIABgEIgBgEQgBgPgLgLIgBgBQgIgHgJAAIgBAAIAAAAIgFABIgBAAIAAAAIgBAAIAAgCQAAgDgBgCIgGgGQAWgGAUgHQAVgIATgLQgTALgVAIQgUAHgWAGIAGAGQABACAAADIAAACIgBAAIAAAAIgEgBIAAAAIgBAAQgGABgCAFIgBABIAAACIgBAAQgCADgFAAIgBAAIAAAAIgEgBIgBAAQgQgDgIgNQAIANAQADIABAAIAEABIAAAAIABAAQAFAAACgDIABAAIgBAFIAAABIAAAAQAAAPANAEIACABIAIABIABAAIAAAAQAIAAAFgFIABgBIgBABQgFAFgIAAIAAAAIgBAAIgIgBIgCgBQgNgEAAgPIAAAAIAAgBIABgFIAAgCIABgBQACgFAGgBIABAAIAAAAIAEABIAAAAIABAAIABAAIAAAAIABAAIAFgBIAAAAIABAAQAJAAAIAHIABABQALALABAPIABAEIgBAEQALAIAFAOQAFAOABAOIACAdIAAAOIAAANgAl9FdIgCADIACgDQAEgFAAgFQAAgHgIgGQgMgIgKgLQgKgLgFgNQgFgOAAgOIAAgBQAAgRAMgIIAHACIABAAIABAAIAAAAIAAAAQAGAAADgEIABgBIAAAAIAAgBIAAABIAAAAIgBABQgDAEgGAAIAAAAIAAAAIgBAAIgBAAIgHgCQgMAIAAARIAAABQAAAOAFAOQAFANAKALQAKALAMAIQAIAGAAAHQAAAFgEAFgAlbD6QAFAAAFgDIAAAAIgBgFQAAgGAFgGQAJgJAJAEIAFAFQALACAIAIQgIgIgLgCIgDgIQgIgNgOgBQAOABAIANIgCADQgJgEgJAJQgFAGAAAGIABAFIAAAAQgFADgFAAIAAAAIAAAAQgIgBgGgHIAAgBQgEgEgBgFIAAgDQAAgHAFgGIACgCQAGgHAKAAIAAAAIAAAAIAHABIAAAAIABAAIAAAAQgFgIgGgBQgFgGgGgDQAGADAFAGQAGABAFAIIAAAAIgBAAIAAAAIgHgBIAAAAIAAAAQgKAAgGAHIgCACQgFAGAAAHIAAADIgBAAIgBAAIAAAAIgCAAIgIgCQgNgGgBgMIABgFQADgQAUgDQgUADgDAQIgBAFQABAMANAGIAIACIACAAIAAAAIABAAIABAAQABAFAEAEIAAABQAGAHAIABIAAAAIAAAAgAniClIABAAIABAAIgBAAIgBAAIAAAAIAAAAQgMAAgHgGIAAAAIAAAAQAHAGAMAAIAAAAIAAAAgAm7ChIAAAAIgGgBIgBAAIgJgCIgGgBQgJgLgCgHQACAHAJALIAGABIAJACIABAAIAGABIAAAAgAArEHQgOgCgGgRIAAgBQAPgOABgWQgBAWgPAOIgCACQgOAMgSgEQgOgEABgOQACgTABgUIAAgNQgBAHgDAGQgKARgbgBQgUgBgRgIIgGgDQgDgNADgKQADgJAIgGQATgPAaAAQgDgDgHgDQgPgGgEgOQgCgGAAgFQAAgRARgKIABAAIADgCIAAAAQAIgEAJAAIAAAAIAAAAQAKAAAKAGIAAAAIADACIAAAAQARAMANAMQAMgVAWgKIArgUQAWgKAXgIIAAAAQgggKgLgnQgHgXAAgWQAAgaAJgZQgJAZAAAaQAAAWAHAXQALAnAgAKIAAAAQgXAIgWAKIgrAUQgWAKgMAVQgNgMgRgMIAAAAIgDgCIAAAAQgKgGgKAAIAAAAIAAAAQgJAAgIAEIAAAAIgDACIgBAAQgRAKAAARQAAAFACAGQAEAOAPAGQAHADADADQgaAAgTAPQgIAGgDAJQgnABgjgMQgvgRgYgXQgGgIgEgJQgMgbAJgrQALguAdgWQAqgfAogRQgDgLAAgJQgDgqAhghQAkglAngUIABAAIABABQAKADALAAIAAAAIAAAAQAKAAAIgDQALgCAIgHQgIAHgLACQgIADgKAAIAAAAIAAAAQgLAAgKgDIgBgBIgBAAIgDgBQgVgIgMgTQgMgUACgXQACgXABgZIgBAAQgcgFADgbQADgbAYAIIABABQAFAGALgDIADgCIAGgCIAJgEQAJgFADgIQAGgOgFgPQgCgGgIgDQALgGAQgCQAQgHAXgDQAYgEAaACIAPAAQgNAIgJAHQAiACAqgEIABACQgUAFgMAQIAvAAQgMAKgHASQAMgCAMgEQgIAQgMAOQAXgIAggEQAdgDAFAdQADATgFANQgBAEgDACQAIABAEgDQAEAUgNAUQAOgFAIgIQANAWANgbQAFgKgBgNQAKAAAJAGQAgAgAoAcQApAdAeAnQAdAlATAsQATArAKAtQAMAugDAyQgDAkgHAfIgCAIIgeANIgmAPQgVAIgWAGIgwALQgYAFgZABQgbABgTgHQAngLAXgTQAWgSAVgZQAegjANgwQAIgbAAgbQAAgWgFgWQgJgxgagoQAaAoAJAxQAFAWAAAWQAAAbgIAbQgNAwgeAjQgVAZgWASQgXATgnALIgOAEQguALgrAXQgGAEgGABQABALgJAJQgNAMgUgEQgNgEgFgGQALgJAAgLQAAgIgGgIQAGAIAAAIQAAALgLAJIgCADQgPALgRAAIgMgCgACUDpQgCgJgJgJQAJAJACAJgACgAsIAAAAIAAAAQgKAAgIgBIgJgDIAJADQAIABAKAAIAAAAIAAAAgAg2kSQAOgBACgMQgDgFgCgGQACAGADAFQgCAMgOABIAAAAIAAAAIgEgBIAAAAIAAAAIAEABIAAAAIAAAAgAgLkTIAGAAIAAAAIAAAAIgGAAIAAAAIgBAAQgRAAgJgMQAJAMARAAIABAAIAAAAgACyk1QAXAAASgQIABgBIAGgIIgGAIIgBABQgSAQgXAAIgBAAIAAAAIgCAAQgNAAgHgJQAHAJANAAIACAAIAAAAIABAAgADTlRIABgGQAAgKgLgKQgFgFgFgCQAFACAFAFQALAKAAAKIgBAGgAC3lZQAJgGAAgKIgBgJIABAJQAAAKgJAGgAhKlbQAIAAAHgEQgHAEgIAAIAAAAIgBAAIgDAAIgCgBIgBAAIgBAAIABAAIABAAIACABIADAAIABAAIAAAAgACilqQAIgKAKgBIABAAIAAAAQAEABAEABIABABIABAAIgBAAIgBgBQgEgBgEgBIAAAAIgBAAQgKABgIAKgAgGmzQgTAMgCAUIAAABQgBAKAGAGIAJAGQAOAIAOgMQATgPgNgWQgHgOgOAAIgGAAgAAvnDIgBgBIAAgBIAAAAQgHgGgHAAIgBAAIAAAAQgHAAgHAFQAHgFAHAAIAAAAIABAAQAHAAAHAGIAAAAIAAABIABABgAlRD3IAAAAgAlPDQIAAAAgAgmkfIAAAAg");
	this.shape_9.setTransform(52.9,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_7},{t:this.shape_3},{t:this.shape_6}]},4).to({state:[{t:this.shape_5},{t:this.shape_9},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_8}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,107.9,103.3);


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


(lib.anim_babies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.anim_baby_stace();
	this.instance.parent = this;
	this.instance.setTransform(73.1,54.6,1,1,0,0,0,36,38.5);

	this.instance_1 = new lib.anim_baby_slim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.9,46.6,1,1,0,0,0,34.9,39.3);

	this.instance_2 = new lib.anim_baby_bub();
	this.instance_2.parent = this;
	this.instance_2.setTransform(216.1,59.5,1,1,0,0,0,53,50.6);

	this.instance_3 = new lib.anim_baby_pro();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160.4,40.6,1,1,0,0,0,48.2,40.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AiNhWICUgSIBzAmIAUCIIh5AjIgCiLIBnggAhSg0IAAACIAABRQBfAghfhxABKAPIgbggIgUA8IAhAVIABgpIAWAcIARgmIAKAcIASgVIgmg2gAiNhWICgA0IAAAAAhKgeIAAAwQA7AUg7hEgAAVBpIiVg2IgNiJ");
	this.shape.setTransform(102.2,103.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AAVBpIgCiKIBnghIhnAhIAAgBIigg0ICUgSIBzAmIAUCIIh5AjgAAbAqIAhAWIABgpIAWAcIARgmIAKAcIASgVIgmg1IgQAwIAQgwIAmA1IgSAVIgKgcIgRAmIgWgcIgBApIghgWIAUg6IAbAfIgbgfIgUA6gAiAAzIgNiJICgA0IAAABIACCKgAgxAmQAoAAhEhSIAAAAIgBgBIgBgBIgBgBIAAAAIgBgCIgBgBIABABIABACIAAAAIABABIABABIABABIAAAAQBEBSgoAAQgMAAgUgHIgBAAIAAhRIAABRIABAAQAUAHAMAAIAAAAgAg2AXQAaAAgug1QAuA1gaAAIAAAAIgBAAIAAAAQgGgBgJgCIgBAAIAAgBIgCAAIAAAAIgBAAIAAgxIAAAxIABAAIAAAAIACAAIAAABIABAAQAJACAGABIAAAAIABAAIAAAAIAAAAgAhSgyIAAgCgAATghgAATghgAiNhWg");
	this.shape_1.setTransform(102.2,103.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAyBZQAQAGATAAQAlAAAagXQAagXAAggQAAgfgagXQgNgLgQgGQhPBGAKBJgAAHgSQAFgKAKgJQAagWAlAAQALAAAJABQhNArgCBaQgCgCgCgBQgZgXAAggQAAgGABgFIhxgcQgbAXgWgXQgNgMAFgZQACgEACgEQAOgXArgEQABAAAAAAQAYAAAEARQgCATgRASIBsAWQgHALgCANAAaBLQALAIANAGACXAMQAHARgHAOQgJAFgJgGQARgMABgSgAB3g2QgHgCgHgCAh3hLQAAgBABABQALAAABAHQgbAlgLgLQgGgGADgLQABgCABgCQAGgLAUgBg");
	this.shape_2.setTransform(39.4,114.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,0,0.533)").s().p("AgKANQAQgLABgRQAIAPgIAOQgEACgDAAQgFAAgFgDg");
	this.shape_3.setTransform(53.8,117.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgtA8QAChaBLgrIAOAEQhOBGALBJQgOgGgKgIg");
	this.shape_4.setTransform(46.7,116.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99CCFF").s().p("AAyBZQgKhJBPhGQAQAGANALQAaAXAAAfQAAAggaAXQgaAXglAAQgTAAgQgGgACFAqQAJAGAJgFQAHgOgHgRQgBASgRAMgAAWBIQgZgXAAggIABgLQACgNAHgLQAFgKAKgJQAagWAlAAQALAAAJABQhNArgCBaIgEgDgAhzgWQgbAXgWgXQgNgMAFgZIAEgIQAOgXArgEIABAAQAYAAAEARQgCATgRASIBsAWQgHALgCANgAh3hLQgUABgGALIgCAEQgDALAGAGQALALAbglQgBgHgLAAIgBAAIAAAAgAAHgSg");
	this.shape_5.setTransform(39.4,114.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.anim_babies, new cjs.Rectangle(0,0,269,125.2), null);


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
		
		 window.open ("pred_Scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pred_Scene5.html","_self");
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


(lib.verbs_wasNwereExample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_73 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAIQgEgDAAgEQAAgFAEgDQAEgEAFAAQAGAAAEAEQAEADAAAFQAAAEgEADQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(311.1,54.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQgBAFgDAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAVgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIglADIAAASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_1.setTransform(301.9,48.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_2.setTransform(290.5,48.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgoBDQgKgIABgdIABgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_3.setTransform(279.2,48.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AARBEQgEgDAAgFQgFgKgBgGIgJg4QgGARgGAOQgLAVgDAMIABAEQAAAGgEADQgEADgGAAQgGAAgFgDQgEgEAAgGIgDgLIgJgoQgGgUgOgnIgBgEQAAgFAFgEQADgCAFAAQAHAAAEAFIAFALQAJAZAKAvQAHgRAHgXIAKgbQAJgTAIAAQAIAAAFAJQACAFABAMIACARQACAQAKAmIAZg9IAFgRQACgJAEgGQAEgGAHAAQAGAAADADQAEADgBAFIgCAKIgEAJIgFAPIgQAlIgQAlIgGAPQgFAHgIAAQgFAAgFgDg");
	this.shape_4.setTransform(264,48.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZBEQgEgDAAgFQAAgIATgpIgfg3IgEgHQgDgEAAgDQAAgFAEgDQAEgEAFAAQAGAAADAEQAMARAQAhIALgZIANgXQADgGAHAAQAFAAAEADQAEAEAAAEIgCAGIgeA+IgRAmIgFAQQgDAIgIAAQgFAAgEgDg");
	this.shape_5.setTransform(241.7,52.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQANAGABAOQAAAKgLAHQgFAEgPAFIgdAOQAFAEAFADQAGACAIAAQALgBAIgEQAIgEAEAAQAJgBAAAKQAAAKgOAGQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgEAKIAUgJIASgJQgFgDgKAAQgIAAgFAFg");
	this.shape_6.setTransform(231.7,50.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_7.setTransform(221.7,48);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgLgCAAgKQgBgFAEgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACABAIQAAAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_8.setTransform(212.1,48.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAALAFQANAGAAAOQAAAKgLAHQgFAEgPAFIgdAOQAFAEAFADQAGACAHAAQAMgBAIgEQAIgFAEABQAJgBAAAKQAAAKgOAGQgNAFgOAAQgUAAgNgKgAgLgUQgGAFgEALIAUgJIASgJQgFgDgKAAQgHAAgGAFg");
	this.shape_9.setTransform(329,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAUBCQgEgIgIgLIgOgSIgMAIIAAAXQAAAFgDADQgEAEgFAAQgMAAgBgPIABgVIABgVIAAgcIABgdIgBgIIAAgJQABgGADgDQADgDAGAAQAEAAAEADQADADAAAGIABAJIAAAJIAAAZIgBAXQANgIAXgZQAEgDAEAAQAFAAAEADQAEAEAAAFQAAAEgEADQgKALgOANIASAXQANASABAGQAAAFgFADQgDADgFAAQgHAAgEgGg");
	this.shape_10.setTransform(319.6,20.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKBAQgDgEgBgFIAAgQIgBgPIABgVIABgSQABgFADgEQADgDAGAAQAEAAAEADQADAEAAAFIgBASIgBAVIABAPIAAAQQgBAFgDAEQgDADgFAAQgFAAgDgDgAgHgsQgFgEAAgFQAAgGAFgEQAEgDAFAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_11.setTransform(312.1,21.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIBFQgDgDAAgGIAAh4QAAgFAEgDQADgDAEAAQAGAAADADQADADAAAFIAAB0QAAARgMAAQgEAAgEgEg");
	this.shape_12.setTransform(306.8,20.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQANAGABAOQAAAKgLAHQgFAEgPAFIgdAOQAEAEAGADQAHACAHAAQALgBAIgEQAHgFAFABQAJgBAAAKQAAAKgOAGQgNAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIATgJIASgJQgFgDgKAAQgIAAgFAFg");
	this.shape_13.setTransform(291.4,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbAmQgOgLABgTQAAgQAMgTQAOgVASgBQAJABAMAFQAPAFAAAIQAAAFgDADQgDAEgFAAQgEAAgFgFQgGgDgKAAQgGAAgIANQgIANAAAIQAAAJAHAFQAGAGAKAAQAGgBAJgEQAIgEACAAQAFAAAEADQACADAAAFQABAGgQAIQgNAFgIAAQgTAAgNgLg");
	this.shape_14.setTransform(281.7,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASAoIgDgSIgBgSIABgHIAAgIIAAgDIAAgDQAAgIgDAAQgIAAgGAKQgHAKgEAOIgBAHIgBAIIAAAHIgBAIQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIgBgHIAAgIIABgXIABgYIAAgIIAAgIQAAgEADgEQAEgDAFAAQALAAABAOIAAABQANgNANAAQARAAAGAOQAEAJAAATIAAAGIAAAEQAAAIACAKQACALAAAHQAAAEgDAEQgEADgFAAQgLAAgBgLg");
	this.shape_15.setTransform(272.7,23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKAMAAAUQAAASgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAJQAAALAGAFQAFAFAGAAQAHAAAFgFQAHgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_16.setTransform(263.1,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgvA5QgKgIgBgLQABgFADgEQADgEAHAAQAHAAAEAIQAFALARAAQAOAAAPgGQAOgHAAgIQABgLgKgEQgGgCgTgBQgPAAgMgFQgQgHAAgNQAAgSATgOQASgOAUAAQAIAAANAEQAQAFAAAGQAAAFgDADQgDAEgGAAIgNgCIgMgBQgLAAgJAFQgLAGAAAGQAAADADACQADADAHAAIAVACQATABAMAKQAMAJAAATQAAAXgaALQgTAJgZAAQgVAAgOgKg");
	this.shape_17.setTransform(244.5,21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAtBCQgHAAgHgQQgFgKgDgOIgWACIgUACIgOAdQgEAHgHAAQgFAAgDgDQgEgEAAgFQAAgEANgaQgCgDABgCQAAgFAIgCIAcgsQAVghAFAAQAKAAADAMIAFAcIANA5IAFALQADAIAAAEQAAAFgEADQgDADgEAAIgBAAgAgGAIIALgBIANgBIgGgdIgSAfg");
	this.shape_18.setTransform(231.6,21.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AASBEQgFgDgBgFQgDgKgBgGIgKg4QgGARgHAOQgKAVgCAMIABAEQgBAGgFADQgDADgGAAQgGAAgEgDQgFgEAAgGIgDgLIgJgoQgGgUgOgnIAAgEQAAgFADgEQAEgCAFAAQAHAAAEAFIAFALQAJAZAKAvQAHgRAIgXIAJgbQAJgTAIAAQAJAAADAJQACAFADAMIACARQABAQAKAmIAZg9IAEgRQADgJAEgGQAEgGAHAAQAGAAADADQAEADAAAFIgEAKIgDAJIgFAPIgQAlIgQAlIgHAPQgEAHgIAAQgFAAgEgDg");
	this.shape_19.setTransform(215.8,21.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgpBAQgDgEAAgEQAAgFADgEQAEgDAFAAIASgCIAAgnQgBgXACgWIgTAAQgFAAgEgDQgDgDAAgFQAAgGADgDQADgDAFAAIAagBQAPAAAbAEQALABAAALQAAAFgFAEQgDACgFAAIgWgCIgBAqIgBAnIAYAAQAGAAADAEQAEADAAAFQAAAFgEADQgEAEgFAAIgPAAIgPAAIgRACIgSABQgFAAgEgDg");
	this.shape_20.setTransform(193.6,21.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("An5GmQAQgEAPgIQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQiJgZhhhpIAMgGQgCgLgLADIgJADIgMgPIgFADIAEAQQivAwifhYQBtAHBvhHQAsgcAFgeQAXgbAMgaQAbASAggMQgcgUgVgYQADgXgIgZQgEABgBACIgKAWQgegrgOg4QgVhUAbhRQANgnAAghQDEgEDRgYQCUgRCUgLQH0gkHoAMQEnFBjFGAIAAAFIABAEQm7APm9AoQj8AWj8AjQg4AIguAMg");
	this.shape_21.setTransform(249,37.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AoWHDQAZgJAbgHQAvgMA4gIQD7gjD9gXQG8goG7gPIAAgEIAAgFQDEl/knlCQnngLn1AkQiUAKiTASQjRAYjEAEQgBAggNAnQgaBSAVBUQANA3AfAqIAKgUQABgCADgBQAIAXgDAZQAWAYAbATQggANgbgTQgLAbgYAaQgFAfgsAcQhuBHhtgHQCeBYCwgxIgEgQIAEgCIANAOIAJgCQAKgEADAMIgMAGQBgBpCKAYQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABABQgPAIgQAEQhHAShRhBQg0gpgTgwQjCBTiuiOQgegEgdgLQAUABAUgCQgFgEAMgBIAHAEQBigJBhgvQAwgYAigiIAihEQgGgJgHgMQhii1BJinIgFAAIAHgCQAJgVAMgVQAFAPABARQBIgXBagHIHDgkQFmgdFmgKQDigYDEA7IAAADIgxgBQExEminGOQgEALgHAHQAvgQAfAcQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQjaAfjwAKQlgANlcAmQj8Acj7AVIAAAAQgDAAgDgFg");
	this.shape_22.setTransform(246.8,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},60).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).wait(1));

	// Layer 2
	this.instance = new lib.anim_bub_talks();
	this.instance.parent = this;
	this.instance.setTransform(62.1,62.1,1,1,0,0,0,62.1,62.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},55).to({rotation:720,alpha:1},5).wait(14));

	// Layer 1
	this.instance_1 = new lib.anim_babies();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.6,149.1,1,1,0,0,0,98.5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,317.6,248.9);


// stage content:
(lib.pred_Scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0,scene6_repeat:96});

	// timeline functions:
	this.frame_8 = function() {
		playSound("beamisarewaswere");
	}
	this.frame_54 = function() {
		playSound("wrong_answer");
	}
	this.frame_59 = function() {
		playSound("iwasonceliketheywere");
	}
	this.frame_108 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(46).call(this.frame_54).wait(5).call(this.frame_59).wait(49).call(this.frame_108).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhYAfQArAKBAgeQAvgWAXgW");
	this.shape.setTransform(188.2,128,1.069,1.069);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AmpgdQAFgvARgpQALgaAVgRQASgPAQgLQgVgBgTAAQgIAAgIACQgZAJgdAAQAMgTAQgMQAHgFAHgBQAWgUAggHQAWgFARAFQARAIAEgJQAPgbAJggQADgLACgMQAEgaAPgLQAAADABADQACAFADAFQAMAXAPAaQAQgHALgTQAUgSAWgRQAfgZAogWQAIgGAWgFQAGgFAIgEQAXgJAXgFQAGgBAGgBQAIgCAIgBQAggBATAEQAfgCAaACQAGABAFAAQAaABARAHQAGACAFABQAZAEANAPQgvAJgzAJQgOABgHANQgBACgBACQADAAAEAAQAZABAYgEQAGABAEgBQATAEAUgCQAoAAATAdQgJAJgNgBQgDgBgDAAQgVgBgVAAQASAAAPAIQAFACADACQAbAQAUATQANANABAPQgOgGgQABQgBAAgBAAIgBAAQgEAAgEAAQgGABgGABQgfAAgeAAQgBAAgBABQgGACgHACQgEABgEABQgHABgHAAQgygBgvAIQgLACgLgDQgWAIgRADQgfALAFAgQACAMgBALQAAABAAABQAAAJgEAJQgJgIgHgEQgVgMgYgJQAEAWAEAWQADANgBAOQgBAIAAAIQABASgJAEQgDgDgCgDQgDgFgFgEQgagVgUgSQAHAkgEAnQgBALABALQABAggVAVQgPg7gog1QgMgQgNALQggAfgaAeQgFAGgBgCQgBgCABgDQAAgDgNAcQgBgDgDgCQAAgBAAAAQgJgIgRAIQgEABgDAIQgHAEgGAIQAAAAgBAAQgEAFgEAIQgBABgBACQgBAEgCAEQAAABAAAAQgQAtAUAsQAEAIADAIQAHAQAUAGQAFACAFADQAdALAfgKQAogNAYgUADolSQgDAAgDAAAB+mFQgLgCABAJACKl0QgMAAgKAAQgEAAgEABABajJQALgDAHAGQgJgCgJgBQgSgCgSAAQgKAAgHAKQgMAJgEAOQgBAGgBAHQAIgEAIgDQALgFAMgEQABAAABgBQABAAAAAAQAKgDAKgDQAKgCAHgDQAEgCAFgCQADgBADgDQgCgDgDgCAD8jyQAGgDAJADAD8jyQgqABgBAAQgHAAgDAAQABABAAABQABABAAABQABABAAABQABACACADQAEAKADAKQACAGACAGQASgRAKgUQAEgFAEgCgAEZkKQAgAPALAPQAYAUgCAhQAFAMgBALQgBgGgEgGQgHgEgFgDQgBgBgBAAQgPgbgeAIQgOABgNARQgDAEgDAHQgCAPADANQABAFABAEQACAEACAEQABABABABQACACABADQAFABADAEQATADAUgBQADAAAEgBQAHAAAIgBQADgBACgEQAPgUgDgRQAtAUAoAPQAJADAIAEQAdANAQAYQBmASAuAPQAJACAIADQABATAAATQAAETjDDCQjCDDkTAAQkSAAjDjDQititgTjtQAHgFAHgFQALgIALgGQAdgNAegSQAvgYAxgHQAGgBAGgBQADgBACgBQAKgBAGADQACAAAKAAAFEimQgiAFALAlQABABAJADQAhgCgIglQgCgHgGgEQAAAAAAgBAHyhMQAIAMAFANQADAHACAIQAHAcAAAeQAAAugCAuQgBAFAAAGQgBAPgFAIQgCAEgBAFQgPAzgfAlQgEAEgDAFQgNAZgXAQQgEADgFADQgDAFgFADQhHBBhmAJQgGABgFABQgmALghgKQgUgGgVgEQgdgEgbgJQgfgKgGgdAEggCQgHgHAIgPQAAgBABgBQAJgOAPgLQAEgBAGgEQAagCAQAQABWh4QgBAAgBAAQgDABgDABQgLADgIAJQgRATAEAeQACAOAGAMQAHAQATAHQAcALAYgNQADAAADgBQALgCAHgHQAPgKANgNQAGgIADgJQADgJAAgKQAAgGgCgFIgBAAQgCgFgDgFQgBgBgBgBIAAAAQgEgFgFgDQgCgBgCgBQgDgBgEAAQgKgCgGgBQgIgBgigBACHhmQgBAAAAAAQgCACAAgDQABABACAAQANgEAJABQADABABABQAGACADAGQACAGABAKQgBAFgCAEQgJAWgOANQgGAGgHABQgHAAgIgEQgDgBgDgBQgUgEAEgZQADgIAFgGQARgTANgGABWh4QAHgBAIACQABgBAGACQgKgBgMgBgAKXgmQgNj6i1i1QjCjCkTAAQkSAAjDDCQjCDDAAESQAAAeACAdAlpAZQgcgQgBgKQAAgCAAgBQAAgCAAgDQABgJABgJIAAAAQABgIABgHQACgOgJgCQgVAIgHATQAAABgBABQgBAAgCAAQAAACAAACQAAACgBABIAAAAQAAABAAABIAAAAQABAAAAgBIAAgBQABgCACgFQAFAAAFgBQAJgKAKAJQgLABgIAAQgDADgDAFQgBACgBABIAAAAIAAAAQAAABgBABQgEAIgFAGQgDAEgEAFQgIANgIAMQgYAmgVAmQgJATgLAPQgMARARgB");
	this.shape_1.setTransform(154.7,115.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhhBEIgGgDQgUgEAEgYQADgJAFgGQARgSANgFQAKACAMgFIAFABQAFADADAFQACAGABAJQgBAGgCAEQgJAWgOANQgGAFgHABIgDAAQgFAAgHgDgABUgYQgLgkAigFIAEgFIABAAQAFAFACAGQAIAlggADQgKgDgBgCg");
	this.shape_2.setTransform(176.4,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah1BeQgTgHgIgQQgGgMgCgPQgDgeARgRQAIgJAKgEIAGgBIADAAIAVABIArADIAQACIAHACIADACQAFADAEAEIABAAIACACIAFAJIAAABQADAFAAAFQAAAKgEAJQgDAJgGAJQgMANgPAKQgIAGgLACIgGABQgNAIgOAAQgMAAgMgFgAg+AAQgNAGgRASQgGAGgCAJQgEAYATAEIAHADQAHAEAHgBQAHgBAGgFQAPgNAJgWQACgEAAgGQAAgJgDgGQgCgGgGgCIgEgBQgJgCgOAEIgCAAQAAAAAAAAQAAAAAAAAQAAABABgBQAAAAABAAIAAAAgABLgKQgEgFgEgBIgEgFIgBgCIgEgIIgCgIQgEgNADgQIAGgLQAMgQAPgBQAdgIAQAaIABABIANAHQADAGACAGIABAFQACASgPATQgBAEgEABIgPACIgGAAIgMABQgOAAgNgCgAB9g/QgiAFAMAkQAAACAKADQAhgCgIgmQgCgGgGgFIgBAAg");
	this.shape_3.setTransform(174.5,104.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AAAHSQkTAAjDjDQititgTjtIAOgKQAKgHAMgGQAcgNAfgSQAvgZAxgHIAMgDIAFgBQAKgCAGADIAMAAIgBAFIAAACIAAABIAAACIAAAAIABgCIAAAAIADgIIABgBQAHgTAVgIQAJABgCAPIgCAOIAAABIgCASIAAAFIAAACQABALAbARQgGATAAAUQAAAZALAZIAHAPQAHARATAGIALAEIABABIAAAAQAOAFAPAAIABAAIAAAAQAOAAAOgFQApgNAYgUQgYAUgpANQgOAFgOAAIAAAAIgBAAQgPAAgOgFIAAAAIgBgBIgLgEQgTgGgHgRIgHgPQgLgZAAgZQAAgUAGgTIABgBIADgIIACgEQAEgHAEgGIABgBQAGgHAHgFQACgHAFgCQARgHAJAHIAAABIAEAGQANgdAAADIAAAFQABADAFgGQAageAgggQANgLAMARQAoA1APA7QAVgWgBggQgBgLABgKQADgogGgjIAuAnQAFAEADAEIAFAHQAJgFgBgSQAAgHABgIQABgOgDgOQgFgVgDgWQAXAJAWALQAHAEAJAJQAEgJABgKIAAgBQAAgLgCgMQgFggAegLQASgEAWgHQALACALgBQAvgIAyAAIAOgBIAIgBIANgFIACgBIA9ABQAgAPALAOQAYAVgCAgQAEANAAAKQgBgGgEgGIgNgHIgBAAQgQgbgdAIQgPABgMAQIgGAMQgDAPAEANIACAJIAEAIIABABIAEAFQAFACADAEQATADAUgCIAHAAIAOgCQAEgBACgEQAOgTgCgSQAtAUAoAPIARAIQAcANARAYQBmASAuAOIARAFIABAoQAAERjDDDQjCDDkSAAIAAAAgAC3DAQAPAAAQgDIAAgBIABAAIACAAIABAAIACgBIAKgCQBngJBHhBIAIgIIAJgHQAWgQAOgYIAGgJQAgglAOgzIAEgJQAEgIABgPIACgLQACgsAAgsIAAgDQAAgfgHgcIgFgPQgFgOgIgLQAIALAFAOIAFAPQAHAcAAAfIAAADQAAAsgCAsIgCALQgBAPgEAIIgEAJQgOAzggAlIgGAJQgOAYgWAQIgJAHIgIAIQhHBBhnAJIgKACIgCABIgBAAIgCAAIgBAAIAAABQgQADgPAAIgBAAIAAAAQgRAAgQgEQgVgGgVgFQgcgDgbgJQgfgKgHgdQAHAdAfAKQAbAJAcADQAVAFAVAGQAQAEARAAIAAAAIABAAgAoEgpIACAAIgCAAIAAAAIgBAAQgNAAAKgOIAAgBIABgBQALgPAJgSQAUgnAZgmIAQgYIAHgKIAJgOIABgCIAAAAIAAgBIACgCIAFgIIgJAAIAJAAIgFAIIgCACIAAABIAAAAIgBACIgJAOIgHAKIgQAYQgZAmgUAnQgJASgLAPIgBABIAAABQgKAOANAAIABAAIAAAAgAEejIQgDgDAAgFQAAgGAFgIIABgCQAIgPAQgKIAKgFIAHAAIAAAAIAAAAQAUAAAOANIABABIgBgBQgOgNgUAAIAAAAIAAAAIgHAAIgKAFQgQAKgIAPIgBACQgFAIAAAGQAAAFADADgABVk+IgCAAIgHABQgKAEgIAJQgRASADAeQADAPAFAMQAIAQATAHQAbALAYgOIAHgBQAKgBAIgHQAPgKANgNQAFgIAEgJQADgKAAgJQAAgGgCgFIgBAAIgFgKIgCgCIgBAAQgDgFgGgDIgDgCIgHgCIgQgCIgrgDIgBAAIgFgBIAAAAIAAAAIAAAAIAAAAIgDAAIgDAAIgDgBIgBAAIAAAAIgDABIgCAAIAAAAgAmejkIAUgCQgKgIgKAKIAAAAgAAjmIQgLAKgEANQgCAGAAAHIAQgHIAWgIIADgBIABAAIAUgGIARgGIAJgDQADgBADgDIgFgGQgHgGgLAEQgSgCgTAAIAAAAQgKAAgHAJgADGm3IABACIABACIABABIACAGIAIAUIADAMQATgRAKgUQADgFAFgCIAHgCIAAAAIABAAIAGABIABABIgBgBIgGgBIgBAAIAAAAIgHACIgrABIgKAAIAAAAgABVk+IACAAIADgBIAAAAIABAAIADABIADAAIADAAIAAAAIAAAAIAAAAIAAAAIAFABIABAAIgVgBg");
	this.shape_4.setTransform(154.8,135);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996633").s().p("AlNDOIAAgCIAAgFIACgSIAAgBIACgOQACgPgJgBQgVAIgHATIAAACIgEAAQAFgvARgpQALgaAVgRQASgQAQgKIgogBQgIAAgIACQgZAIgdAAQAMgSAQgNQAHgDAIgCQAVgTAhgHQAVgFASAFQAQAIAEgJQAPgcAJgfQADgLACgMQAEgaAQgLIABAFIAEALQAMAXAPAaQAQgHALgTQAUgSAWgRQAfgZAogWQAIgGAVgGQAGgEAJgEQAWgJAZgGIALgCIAQgCQAggBATAEQAfgCAaACIALAAQAaABARAIIALADQAZAEANAOIhiATQgOABgHAMIgCAFIAHAAQAZABAYgEQAGABAEgBQATAEAUgCQAoAAATAdQgJAIgMgBIgHAAIgqgCQASABAPAIIAIAEQAbAQAUASQANAOABAPQgOgGgQAAIgCAAIgBAAIgIABIgMACIg9gBIgCABIgNAFIgIABIgOABQgyAAgvAIQgLACgLgDQgWAHgRAEQggALAFAfQADAMgBALIAAABQgBAKgEAJQgJgIgHgFQgVgLgXgJQAEAWAEAVQACAOgBAOQgBAIAAAIQABARgIAFIgFgGQgDgFgFgEIgugnQAHAjgEAoQgBALABAKQABAggVAWQgPg7gog1QgMgRgNAMQggAfgaAeQgFAGgBgDIAAgEQAAgEgMAdIgFgGIAAAAQgJgIgRAHQgEACgDAHQgHAFgGAHIgBABQgEAGgEAIIgBADIgEAIIAAABQgcgRgBgLgAEhiCIgFAAIACAAIADAAgACtijIgIABIAIgBIAEAAIAKAAIABAAIAAAAIADAAIAEAAIgEAAIgDAAIAAAAIgBAAIgKAAIgEAAgACtiuQgBgGAHgBIABAAIAAAAIADABIABAAIgBAAIgDgBIAAAAIgBAAQgHABABAGgABOAlQAEgNAMgJQAHgKAKAAQASAAASACIASACIAFAGQgDADgDABIgJAEIgRAFIgUAGIgBAAIgCABIgXAJIgPAHQAAgHABgHgAENgBIgHgUIgDgGIgBgBIAAgCIgCgCIAKAAIArgBQgEACgDAFQgLAUgSAQIgEgLg");
	this.shape_5.setTransform(149,94.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6FFFF").s().p("AqXEvQAAkTDDjCQDDjCESAAQESAADDDCQC1C0AND5IgRgFQgugOhmgSQgRgYgcgNIgRgIQgpgPgsgTIgBgGQAAgKgEgNQABgggXgVQgLgOgggPIAMgCIAIgBIAAAAIACAAQARAAAOAGQgBgPgNgOQgUgRgbgQIABgLIAGAAQANABAIgIQgSgdgpAAQgUACgSgEQgFABgGgBQgYAEgYgBIgIAAIADgFQAHgMAOgBIBigTQgNgOgZgEIgLgDQgSgIgZgBIgLAAQgbgCgfACQgTgEgfABIgQACIgMACQgXAGgXAJQgIAEgGAEQgXAGgHAGQgoAWgfAZQgXARgUASQgKASgQAHQgQgZgMgXIgEgLIgBgFQgPALgFAaQgBAMgDAKQgJAfgPAcQgFAJgQgIQgSgFgVAFQggAHgWATQgIACgGAEQgRANgMASQAeAAAZgIQAHgCAIAAIApABQgQAKgTAQQgUARgMAaQgRApgEAvIgMgBQgGgCgKABIgFABIgMADQgxAHgvAZQgfASgcANQgMAGgKAHIgOAKQgDgcAAgeg");
	this.shape_6.setTransform(154.6,84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},83).wait(26));

	// content
	this.instance = new lib.verbs_wasNwereExample();
	this.instance.parent = this;
	this.instance.setTransform(257.5,181.1,1.069,1.069,0,0,0,158.3,124);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgrBIQgKgJAAgfIABgkIADgmIgBgKIgCgKQAAgOAOAAQAEAAAEACIAUgEIARgBQAYAAAOAFQAJAEAAAIQAAAFgDAEQgEAEgGAAIgEAAQgPgEgPAAIgOABIgQADIgCAlIAkgDIAXgCQAGAAADAEQAEADABAGQAAAKgNACIgWABIgnAEIgBATQAAATACACQACABAKAAIARAAIASAAIAFgBIAGAAQAFAAAEADQAEADAAAHQAAAKgLACQgJACgdAAQgeAAgKgIg");
	this.shape_7.setTransform(425.5,367.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgyBGQgEgDAAgGIAAgVIAAgVIAAhLQAAgGAEgFQAFgGAIAAIAYACQANACAIAFQAoAUAAAeQAAAMgIAIQgJAKgQAGQAZAOAMAPQADADAAAFQAAAFgEAEQgEAEgFAAQgFAAgEgEQgdgbghgKIABAeQAAAGgEADQgDAEgGAAQgGAAgDgEgAgcADIAEAAQAXAAAKgFIAJgGQAEgEAAgCQAAgLgNgKQgMgJgOgBIgLgBg");
	this.shape_8.setTransform(413.3,367.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgrBIQgKgJAAgfIACgkIABgmIAAgKIgBgKQAAgOANAAQAEAAADACIAVgEIASgBQAXAAAPAFQAIAEAAAIQAAAFgDAEQgEAEgGAAIgDAAQgQgEgOAAIgOABIgSADIAAAlIAjgDIAXgCQAFAAAFAEQADADAAAGQABAKgMACIgXABIgnAEIgBATQAAATADACQAAABALAAIAQAAIASAAIAGgBIAFAAQAGAAADADQAFADAAAHQAAAKgLACQgKACgcAAQgeAAgKgIg");
	this.shape_9.setTransform(401.2,367.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AATBJQgFgDAAgGQgFgKgBgHIgKg8QgGASgHAPQgLAXgDANIABAEQAAAGgFAEQgFADgFAAQgHAAgFgEQgFgEAAgGIgDgLIgKgsQgGgVgPgpIgBgFQAAgGAFgDQAEgDAFAAQAHAAAEAGQADADADAJQAJAaAMAyQAHgSAIgYIAKgdQAKgUAIAAQAJAAAFAKQACAEACANIACATQACAQAKAqIAbhDIAFgRQACgKAFgGQAEgHAIAAQAFAAAEAEQAEADAAAGIgDAKIgEAJIgFAQIgRAoIgRAoQgEAKgEAFQgEAIgJAAQgGAAgEgDg");
	this.shape_10.setTransform(384.9,367.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgNAUQgEgEAAgDQAAgDAGgLIAIgQQADgFAGAAQAFAAADADQAEADAAAEQAAACgGAMIgIAOQgDAHgGAAQgFAAgDgDg");
	this.shape_11.setTransform(362,375.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgyA9QgMgIAAgMQABgGADgEQADgEAHAAQAJAAADAJQAFALAUAAQAPAAAPgHQAPgHAAgIQAAgMgJgEQgHgDgUAAQgQgBgNgFQgRgHAAgPQAAgSATgPQAUgQAWAAQAJAAANAFQARAFAAAHQAAAFgDADQgEAFgGAAIgNgCIgNgCQgMAAgLAGQgLAGABAGQgBAEAEACQADADAHABIAXABQAVABAMALQANAKAAAUQABAYgcAMQgVAKgaAAQgYAAgOgLg");
	this.shape_12.setTransform(351.6,367.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAhA1QgFgLgEgOIgXACIgVADIgPAeQgEAHgIAAQgFAAgEgDQgEgEAAgFQAAgFAOgcIgCgGQABgEAJgCQANgXAQgZQAXgjAFAAQAKAAAEANIAGAeIAOA8IAFANQADAIAAAEQAAAFgEAFQgEADgFAAQgIgBgHgRgAgHAIIANgBIANgBIgGgfIgUAhg");
	this.shape_13.setTransform(337.8,367.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AATBJQgFgDAAgGQgFgKgBgHIgKg8QgGASgHAPQgLAXgDANIABAEQAAAGgFAEQgFADgFAAQgHAAgFgEQgFgEAAgGIgDgLIgKgsQgGgVgPgpIgBgFQAAgGAFgDQAEgDAFAAQAHAAAEAGQADADADAJQAJAaAMAyQAHgSAIgYIAKgdQAKgUAIAAQAJAAAFAKQACAEACANIACATQACAQAKAqIAbhDIAFgRQACgKAFgGQAEgHAIAAQAFAAAEAEQAEADAAAGIgDAKIgEAJIgFAQIgRAoIgRAoQgEAKgEAFQgEAIgJAAQgGAAgEgDg");
	this.shape_14.setTransform(320.9,367.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgNAUQgEgEAAgDQAAgDAGgLIAIgQQADgFAGAAQAFAAADADQAEADAAAEQAAACgGAMIgIAOQgDAHgGAAQgFAAgDgDg");
	this.shape_15.setTransform(298,375.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgrBIQgKgJAAgfIACgkIACgmIgBgKIgBgKQAAgOANAAQAEAAADACIAVgEIARgBQAZAAAOAFQAIAEAAAIQAAAFgDAEQgEAEgGAAIgDAAQgQgEgPAAIgNABIgRADIgBAlIAjgDIAXgCQAFAAAEAEQAFADAAAGQgBAKgMACIgWABIgnAEIgBATQAAATADACQABABAKAAIARAAIASAAIAFgBIAFAAQAFAAAEADQAFADAAAHQAAAKgLACQgKACgcAAQgfAAgJgIg");
	this.shape_16.setTransform(288.5,367.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgyBGQgEgDAAgGIAAgVIAAgVIAAhLQAAgGAEgFQAFgGAIAAIAYACQANACAIAFQAoAUAAAeQAAAMgIAIQgJAKgQAGQAZAOAMAPQADADAAAFQAAAFgEAEQgEAEgFAAQgFAAgEgEQgdgbghgKIABAeQAAAGgEADQgDAEgGAAQgGAAgDgEgAgcADIAEAAQAXAAAKgFQAFgCAEgEQAEgEAAgCQAAgLgNgKQgMgJgOgBIgLgBg");
	this.shape_17.setTransform(276.2,367.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAhA1QgFgLgEgOIgXACIgVADIgPAeQgEAHgIAAQgFAAgEgDQgEgEAAgFQAAgFAOgcIgCgGQABgEAJgCQANgXAQgZQAXgjAFAAQAKAAAEANIAGAeIAOA8IAFANQADAIAAAEQAAAFgEAFQgEADgFAAQgIgBgHgRgAgHAIIANgBIANgBIgGgfIgUAhg");
	this.shape_18.setTransform(262.8,367.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgNAUQgEgEAAgDQAAgDAGgLIAIgQQADgFAGAAQAFAAADADQAEADAAAEQAAACgGAMIgIAOQgDAHgGAAQgFAAgDgDg");
	this.shape_19.setTransform(242.9,375.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgyA9QgLgIAAgMQAAgGADgEQADgEAHAAQAIAAAFAJQAEALATAAQAQAAAPgHQAQgHAAgIQAAgMgKgEQgHgDgUAAQgQgBgNgFQgSgHAAgPQABgSATgPQAUgQAVAAQAKAAAOAFQAQAFAAAHQAAAFgDADQgEAFgGAAIgNgCIgOgCQgMAAgJAGQgMAGAAAGQAAAEAEACQADADAHABIAXABQAVABAMALQAOAKAAAUQgBAYgbAMQgVAKgbAAQgXAAgOgLg");
	this.shape_20.setTransform(232.5,367.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgsBEQgDgDgBgGQABgFADgEQAEgEAHABIARgCIAAgrQAAgYACgXIgUABQgGAAgEgFQgDgDgBgGQABgFADgEQAEgDAEAAIAcgBQARAAAcAEQAMABAAAMQgBAGgEAEQgEACgEAAIgZgCIgBAtIAAAqIAZgBQAGABADAEQAFADAAAGQAAAFgFAEQgEADgFAAIgQAAIgQAAIgSADIgTABQgGAAgEgEg");
	this.shape_21.setTransform(220.5,367.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgNAUQgEgEAAgDQAAgDAGgLIAIgQQADgFAGAAQAFAAADADQAEADAAAEQAAACgGAMIgIAOQgDAHgGAAQgFAAgDgDg");
	this.shape_22.setTransform(202.5,375.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AAzA9IgGgWQgEgSgFgeIgOAnIgGAQQgDALgEAGQgFAJgIAAQgJAAgFgKIgFgSQgHgYgGgZIgMAtIgDAVQgEANgLAAQgGAAgEgEQgDgEAAgFQAAgQAGgVIALgjIAFgdQAFgUAFgHQAFgGAHgBQAJABAEAIQADAIAFAaQAEAYAIAbQAKgaAJgiIAFgWQAFgNALAAQAKAAAFAQIAFAXQAFAnAIAdIAJAfQAAAFgFAEQgEAEgFAAQgKAAgFgPg");
	this.shape_23.setTransform(190.3,367.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AAhA1QgFgLgEgOIgXACIgVADIgPAeQgEAHgIAAQgFAAgEgDQgEgEAAgFQAAgFAOgcIgCgGQABgEAJgCQANgXAQgZQAXgjAFAAQAKAAAEANIAGAeIAOA8IAFANQADAIAAAEQAAAFgEAFQgEADgFAAQgIgBgHgRgAgHAIIANgBIANgBIgGgfIgUAhg");
	this.shape_24.setTransform(174.6,367.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgNAUQgEgEAAgDQAAgDAGgLIAIgQQADgFAGAAQAFAAADADQAEADAAAEQAAACgGAMIgIAOQgDAHgGAAQgFAAgDgDg");
	this.shape_25.setTransform(154.7,375.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgrBIQgKgJAAgfIABgkIADgmIgBgKIgCgKQAAgOAOAAQAEAAAEACIAUgEIARgBQAYAAAOAFQAJAEAAAIQAAAFgDAEQgEAEgGAAIgEAAQgPgEgPAAIgOABIgQADIgCAlIAkgDIAXgCQAGAAADAEQAEADABAGQAAAKgNACIgWABIgnAEIgBATQAAATACACQACABAKAAIARAAIASAAIAFgBIAGAAQAFAAAEADQAEADAAAHQAAAKgLACQgJACgdAAQgeAAgKgIg");
	this.shape_26.setTransform(145.2,367.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AguBHQgEgEAAgGIAAhjIgBgMIABgNQABgIAPgCQAHgCARAAQARAAAQALQATANAAAVQAAALgEAHQgDAGgIAGQAJAEAIAJQAIAKAAAKQAAAMgOAMQgJAHgKAEQgVAIgiAAQgFAAgFgFgAgZAyQARgBASgFQAQgFAAgFQAAgHgLgGQgIgEgHgBIgZgBgAgYgeIgBAUIANABQAcgDAAgSQAAgHgIgGQgIgGgKAAIgPAAg");
	this.shape_27.setTransform(133.2,367.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgyA9QgMgIAAgMQAAgGAEgEQAEgEAGAAQAJAAADAJQAGALATAAQAOAAAQgHQAPgHAAgIQAAgMgJgEQgHgDgUAAQgRgBgMgFQgRgHAAgPQAAgSATgPQATgQAXAAQAJAAANAFQARAFAAAHQAAAFgDADQgEAFgGAAIgNgCIgNgCQgMAAgLAGQgLAGAAAGQABAEADACQADADAHABIAXABQAVABAMALQANAKAAAUQAAAYgbAMQgWAKgZAAQgYAAgOgLg");
	this.shape_28.setTransform(205.6,24.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AguBHQgEgEAAgGIAAhjIgBgMIABgNQABgIAPgCQAHgCARAAQARAAAQALQATAOAAATQAAAMgEAHQgDAGgIAGQAJAEAIAJQAIAKAAAKQAAANgOALQgJAHgKAEQgVAIgiAAQgFAAgFgFgAgZAyQARgBASgFQAQgEAAgGQAAgHgLgGQgIgEgHgBIgZgBgAgYgeIgBAUIANABQAcgDAAgTQAAgGgIgGQgIgGgKAAIgPAAg");
	this.shape_29.setTransform(193.2,23.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgyBGQgEgDAAgGIAAgVIAAgVIAAhLQAAgGAEgFQAFgGAIAAIAYACQANACAIAFQAoAUAAAeQAAAMgIAIQgJAKgQAGQAZAOAMAPQADADAAAFQAAAFgEAEQgEAEgFAAQgFAAgEgEQgdgbghgKIABAeQAAAGgEADQgDAEgGAAQgGAAgDgEgAgcADIAEAAQAXAAAKgFQAFgCAEgEQAEgEAAgCQAAgLgNgKQgMgJgOgBIgLgBg");
	this.shape_30.setTransform(180.8,23.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgrBIQgKgJAAgfIABgkIACgmIgBgKIgBgKQAAgOAOAAQAEAAADACIAVgEIASgBQAYAAAOAFQAIAEAAAIQAAAFgDAEQgEAEgGAAIgEAAQgPgEgOAAIgPABIgRADIgBAlIAkgDIAXgCQAFAAAFAEQADADAAAGQABAKgMACIgXABIgnAEIgBATQAAATACACQABABALAAIAQAAIASAAIAGgBIAGAAQAEAAAFADQAEADAAAHQAAAKgLACQgJACgdAAQgfAAgJgIg");
	this.shape_31.setTransform(168.7,23.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgTBDQgMgcgOgyIgIgaQgFgRAAgHQAAgGAEgDQAEgEAFAAQAJAAADAKIAFAQIAJAeQAHAaAGAVIAWg4IAHgXQAGgNAHgHQAEgFAGAAQAFAAAEAEQAEAEAAAFQAAAEgDADQgFAIgEAKIgHATIgYBAQgFALgHALQgEAIgGAAQgKAAgDgJg");
	this.shape_32.setTransform(156,24.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgrBIQgKgJAAgfIACgkIACgmIgBgKIgBgKQAAgOANAAQAEAAAEACIAUgEIARgBQAYAAAOAFQAJAEAAAIQAAAFgDAEQgEAEgGAAIgDAAQgQgEgPAAIgNABIgRADIgBAlIAjgDIAXgCQAFAAAEAEQAFADAAAGQAAAKgNACIgWABIgnAEIgBATQAAATADACQABABAKAAIARAAIASAAIAFgBIAFAAQAFAAAFADQAEADAAAHQAAAKgLACQgJACgdAAQgeAAgKgIg");
	this.shape_33.setTransform(135.4,23.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgpA5QgOgPAAgUQAAgeAbghQAYgcAXAAIAIAAIAGABQAEgEAGAAQAJAAACALQACAIAAALQAAAEgDAEQgDAFgHAAQgIAAgFgJQgBgEgCgBIgIAAQgMAAgOASQgWAZAAAWQAAAKAHAIQAHAHAKAAQAIAAAJgFIAPgJQAHgFAEAAQAFAAAEAEQAEAEAAAFQAAAGgFAEQgaAWgZAAQgWAAgOgQg");
	this.shape_34.setTransform(123.2,24);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AhBBIQgEgDAAgGIABgMIAAgKIAAgRIABgRIAAgRIgBgSIgBgRIgBgRQAAgFAFgFQAFgDAGAAQAHgBAIAMQAqA9AqAlIAAgNIgBg+IgCgLIAAgKQAAgNANABQAQAAAAAuIgBAQIAAA6IgCAOQgCANgMAAQgGAAgIgHQglghgsg6IgBAdIABAWIAAAXQAAAcgNAAQgHgBgEgEg");
	this.shape_35.setTransform(109.3,24.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgrBIQgKgJAAgfIACgkIACgmIgBgKIgBgKQAAgOANAAQAEAAAEACIAUgEIARgBQAYAAAOAFQAJAEAAAIQAAAFgDAEQgEAEgGAAIgDAAQgQgEgPAAIgNABIgRADIgBAlIAjgDIAXgCQAFAAAEAEQAFADAAAGQAAAKgNACIgWABIgnAEIgBATQAAATADACQABABAKAAIARAAIASAAIAFgBIAGAAQAEAAAFADQAEADAAAHQAAAKgLACQgJACgdAAQgeAAgKgIg");
	this.shape_36.setTransform(95.8,23.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgIBEQgFgDABgGIAAgEIABgEIgBgNIgBgNIgCghIgDgjIgEAAQgVAAgMgDQgLgCAAgKQAAgFADgDQAEgFAGAAIAQACIAPABIARAAIAQAAIAWABIAVABQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAIgXgBIgXgBIACAmIADAmIABAJIAAAKQAAAHgDAFQgEAIgHAAQgEAAgEgEg");
	this.shape_37.setTransform(83,23.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgyA9QgMgIAAgMQAAgGAEgEQADgEAHAAQAJAAADAJQAFALAUAAQAPAAAPgHQAPgHAAgIQAAgMgJgEQgHgDgUAAQgRgBgMgFQgRgHAAgPQAAgSATgPQAUgQAWAAQAJAAANAFQARAFAAAHQAAAFgDADQgEAFgGAAIgNgCIgNgCQgMAAgLAGQgLAGABAGQAAAEADACQADADAHABIAXABQAVABAMALQANAKAAAUQABAYgcAMQgWAKgZAAQgYAAgOgLg");
	this.shape_38.setTransform(69.6,24.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgsBEQgDgEAAgFQAAgFADgEQAEgDAGgBIASgBIAAgrQAAgYACgXIgUABQgGAAgEgFQgDgDAAgGQAAgFADgEQAEgDAEAAIAcgBQARAAAcAEQALABAAAMQABAGgFAEQgDACgFAAIgZgCIgBAtIAAAqIAZAAQAGAAAEADQADAEAAAFQAAAFgDAFQgEADgGAAIgRAAIgQAAIgSADIgSABQgGAAgEgEg");
	this.shape_39.setTransform(57.6,24.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AAbA2IgMgSIgMgRIgcAhIgSASQgEAEgFAAQgGAAgEgEQgEgDAAgGQAAgEAEgEIARgSIAhgkIgUgYIgLgNQgGgJgGgFQgFgEAAgGQAAgEAEgEQADgEAGAAQAFAAAJAGQAGAGADAGIAMAOIARAWIAXggQASgWAHAAQAGAAAEAEQAEADAAAFQAAAFgEAEIgTAYIgXAdIAUAcQALAQAKAKQADAEAAAFQAAAFgEAEQgEADgFAAQgKAAgPgVg");
	this.shape_40.setTransform(45.2,24.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgrBIQgKgJAAgfIABgkIADgmIgBgKIgCgKQAAgOAOAAQAEAAAEACIAUgEIARgBQAYAAAOAFQAJAEAAAIQAAAFgDAEQgEAEgGAAIgEAAQgPgEgPAAIgOABIgQADIgCAlIAkgDIAXgCQAGAAADAEQAEADABAGQAAAKgNACIgWABIgnAEIgBATQAAATACACQACABAKAAIARAAIASAAIAFgBIAGAAQAFAAAEADQAEADAAAHQAAAKgLACQgJACgdAAQgeAAgKgIg");
	this.shape_41.setTransform(32.7,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance}]}).wait(109));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,190.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'B798D1DF33A9214A863A8D4FEF5A743A',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/beamisarewaswere.mp3", id:"beamisarewaswere"},
		{src:"sounds/bgmAux.mp3", id:"bgmAux"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/iwasonceliketheywere.mp3", id:"iwasonceliketheywere"},
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
an.compositions['B798D1DF33A9214A863A8D4FEF5A743A'] = {
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