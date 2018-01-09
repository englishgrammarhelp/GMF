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
	this.shape_17.graphics.f("#000000").s().p("AgOAfQgHgFAAgJQAAgOAKgEQgIgFAAgJQAAgIAGgFQAGgGAHAAQATAAAAASQAAAGgCADIgHAEQAHADACAEQADAEAAAIQAAAJgGAFQgHAFgJAAQgJAAgFgEgAgJAGQgEAEABAHQAAAFAFADQADACAEAAQAHAAAEgEQACgDAAgGQAAgFgEgEQgDgCgGgCIgJAFgAgIgXQgCADAAAFQAAAHAKACIAHgDQADgCAAgFQAAgGgDgCQgCgCgFAAQgFAAgDADg");
	this.shape_17.setTransform(-36.3,1.6);

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


(lib.SubjMood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("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");
	this.shape.setTransform(140.1,55.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0ACC1A").s().p("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");
	this.shape_1.setTransform(140.2,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14CC33").s().p("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");
	this.shape_2.setTransform(140.2,55.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1FCC4D").s().p("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");
	this.shape_3.setTransform(140.3,55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#29CC66").s().p("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");
	this.shape_4.setTransform(140.4,54.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33CC80").s().p("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");
	this.shape_5.setTransform(140.4,54.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3DCC99").s().p("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");
	this.shape_6.setTransform(140.5,54.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#47CCB2").s().p("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");
	this.shape_7.setTransform(140.5,54.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#52CCCC").s().p("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");
	this.shape_8.setTransform(140.6,54.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5CCCE5").s().p("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");
	this.shape_9.setTransform(140.6,54.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CCFF").s().p("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");
	this.shape_10.setTransform(140.7,54,1.049,1.327);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#75C2FF").s().p("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");
	this.shape_11.setTransform(141,53.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#85B8FF").s().p("AGlIDQgWgFgMgJQgMgBgHgJQgIgJAAgNQAAgVADguIAChDIAAhLIAAhKQAUglAMAAQAGAAAZAOIAjASQA4AVAmAuQAvA1gBBAQAAAmgRAkQgQAkgdAVQgfAYg5AAQgOAAgSgFgAG0HJQAQACANgCQAkgBARgPQAPgNAJgXQAIgbgKgaQgEgxg4gnQgPAEgygKQABBgAUBngABMHaQgqgqABhAQAAhMApg/QAvhHBFAAQBCAAAhAkQAhAkgBBIQgBBMglA+QgsBHhGAAQg4ABgngmgAB2ELQgdAuAAA3QgBAkAZAZQAXAWAkAAQAqAAAcgxQAagsABg4QAAgvgRgSQgRgSgsABQgqAAgfAvgAjqHaQgqgqABhAQABhMAog/QAvhHBFAAQBCAAAhAkQAgAkgBBIQgBBMgkA+QgtBHhFAAQg4ABgngmgAjAELQgdAuAAA3QgBAkAYAZQAYAWAkAAQAqAAAcgxQAagsABg4QAAgvgSgSQgQgSgsABQgqAAgfAvgApRGdQgLgBgHgKQgFgIAAgLIAAgCQAAghAOgpQARgsAEgPIALgqIAIgdQAFgTAFgNQAGgQAFgJQADgHAFgFQAGgEAGgBQAPgBAHAPQAEAKAFAZIAFAZQAHAtANA0IADgJIAEgRIACgIQADgRABgRQACgSADgTIACgaIABgFIAEghIACgKQAJgeAUgBQAMgBAKAPQAEAHAEALIAFARQAFALADATQAGAgAIAcIASA+IAHAUQATA7ABAIQABALgFAGIgDAFQgHAIgJABIgDAAQgQgCgKgbIgFgQIgGgUIgDgLIgFgOIgDgRIgLg7QgHAfgRA9IgKAnQgGAYgGAPQgJATgPACQgPACgIgUIgBgCIgKgfIgbhRIgFgSQgMAfgRA8IgCAIIgIAgQgIAYgQAAIgCAAgAoUhEIgCgBQgbAEgdgKIgEgCIgPgJQgLgGgJgOQgFgGgCgJQgDgHABgJQAAgjAZgHQAYgGABAaQAIANAKAEQAHADAHACQAKACAIgCQAGgEAEgVQAEgLADgPQAEgIACgMIACgOIACgOIAFgtIAEgiIABgQIgTgFQgLgDgEgDQgJgCgGgKIgDgJQgCgHABgIQACgNAHgGQALgKASAGIAQAEIAOAFQAMAEAUADQAUADAKAEQAMADAJAFQAYAOAAAWIAAACQgBAJgEAIIgDAEQgEADgFACQgGADgHAAIgKgCIgKgDIgBgBIgNgDIgBAKIAAAAIgDAmQgDAegGAgIgEAdIgFAcQgEAQgFAKIgKAUIgCADIgEAHQgKAWgUAAQgGAAgGgBgATYicQgUgWAAhJQABgeAEg8QAEg8AAgeIgDgvQAAghAbgBQAIAAAHAGQAXgGAUgDQAUgEARAAQAwAAAdANQARAIAAAUQAAAMgHAJQgIALgMAAIgIgCQgfgKgcAAQgPAAgQADQgQADgTAFIgDBZIBLgJQAlgEAJAAQAMAAAHAJQAIAJAAANQgBAbgYADIgtAEIhRAJQgCAdAAARQgBAtAEAFQACAEAWgBIAkgBIAjAAIAMgBIALgBQALAAAIAHQAJAIAAAPQgBAZgWAFQgTAEg8AAQg+AAgTgTgAlDikQgyguABhxIABggIABggIABgzQABgSAGgPQAHgWAOAAQAKABAIAHQAJAJgBAOIAAAlIgBAmIgBAgIgBAfQgBAjAHAdQAIAiAPAPQAIAHAeAAQAyACAShnQAKg1ABheQAAgNAGgMQAJgPAQgBQANAAAGAMQAFAIAAALQgBBYgIAxQgLBNggAyQgOAXgTAOQgZASgYAAQgxAAgXgVgAxbikQgyguABhxIABggIACggIABgzQAAgSAGgPQAHgWAOAAQAKABAIAHQAJAJAAAOIgBAlIAAAmIgCAgIgBAfQgBAjAHAdQAIAiAPAPQAIAHAeAAQAzACAShnQAJg1ABheQAAgNAHgMQAJgPAPgBQANAAAHAMQAEAIAAALQAABYgIAxQgLBNggAyQgPAXgTAOQgYASgZAAQgxAAgXgVgA2KirQgXgUAAgcQAAgOAIgKQAHgJANAAQARAAAHAVQALAbAmAAQAhAAAfgQQAggSAAgVQAAgbgTgKQgOgGgrgBQghgCgZgNQgkgSABgjQABgsAogkQAnglAvAAQASAAAcAKQAiANAAAQQAAAMgHAJQgIAKgMABQgJgBgSgFQgRgEgKAAQgYAAgXAOQgWAOAAAQQAAAJAGAFQAHAFAOADIAxADQAqAEAYAXQAbAcgBAwQAAA5g4AdQgrAXg3AAQgwAAgcgZgARNiYQgEgFgCgLIAAgLIgBgKIAAgIIAAgMQAAgFgBgFQgEgJgIgNQgLgcgTggIgJgVQgPgXgJgaIgBgGQgMgnABgYQAAgNAHgLQAWgNAFACQAHADADAJQAEALADAPIAEAMIAEAMIAMAaIAGANIAPAfIAPAdIANAYIATggQAHgJADgIQACgEAAgGIABgOIAAgGIAAgdIAAgPIABgYIAAgHIACgQQAGgNAGgFQAGgHAIADQANgBAKAIQAIAHADAKQACAIgCAHQgBARgFAUIABAAQABADgEAQIgCASIgCAGQgEANgIAOQgIAQgMAUQgOAcgVAkIgEAPIgFAQQgFAUgFAQQgBADABACIgDAJQgEAGgGAAQgFAAgEgDgAgWibQgIgDgFgMQgCgHgCgTQgNgagRgbIAAgYIAAgbIAAgdQgBgQgGgMIgGgkQgDgYAAgOQAAgNAIgLQAegOAOAUQAWAlATAhIAAgTQA0BVAsA7IgBAEQgug2gxhLQABAeAEAIQAGAQAAAuIAAAzQgBBJgWAEIgEAAQgIAAgGgEgAD8i+QgcgkABgvQAAhMA5hOQAvhDAyAAQAWACAGACQAIgKALAAQAUAAAEAaQADASAAAaQAAALgFAJQgIAMgNAAQgSABgIgWQgKgOgMAAQgYAAggAsQgtA+AAA2QAAAYANARQAOASATgBQATAAAUgLIAdgVQAPgNAIAAQALABAIAJQAHAKAAAMQAAANgKAJQg1A1g2gBQgrAAgdgkgAs/ihQgQgGgNgMIgEjOIgDgeQABgeACgbQACgVAZgFQALgHAcgCQAegDAgAXQAiAbAGApQAHAXAAASQACARgMAUQAOANAKAVQALAXgDAWQAEAbgUAaQgMATgQALQgkAUg8AFIgFAAQgKAAgJgHgAsukZIAOBGQAhgEAfgMQAbgNgFgNQgDgQgUgMQgRgJgSgCQgOAGgcAFgAstm0IAGBRQAZABAHgHQAvgGgDgpQgEgQgRgNQgUgOgQAAQgUAHgFAIgAI+ilQgIgJAAgNIAAgKIABgKIAAgeIgBggQAAgegEgzIAAgJIgCgkQgPgBgLgCQgNgEgFgLQgEgGAAgJIAAAAIAAgFQgSgCgNgEQgVgGAAgYQAAgKAHgJQAbgKAYADQATACAMAAIAiAAIAjAAQAOAAAdADIAsACQALAAAHAHQAHABAEAHQACAEAAAHIgBAHIgDAJIgGAHIgCADIgBAAQgIAJgLAAQgPAAgfgDIgBAAIARBEIABADQAFASABARQAAALgBAIIgDARQgBAHgCAHIgDATIgCAJIAAAMQAAARgFAQQgHARgMACQgEABgDgBQgEAAgEgDQgHgGAAgIIAAgHIABgGIgBgPIACgIQACgSADgJIACgKIADgSQABgGgBgGIgCgNIgDgJIgDgIQgDgPgFgNIgFgSIABANIABAXQADA7AAAhQAAAIABAPIABAWQAAARgGAOQgIARgPAAQgKAAgIgIgAMtioIgDgDQgEgFgBgHQgBgJAFgHQADgCAEgBIAHgBQAHABAKgBIAHgCQgCgKgBgUIgEhHQgDgwAAgvIAAgYIgZgEIgKgBQgKgCgGgJQgGgJgBgKIAAgCQABgMAGgJQATgLACAAQAPAAAXADIAKACIAUAEQAWAFAfALQAYAIABAbQABAOgHAKQgEAHgIACIgGABQgIgFgXgGQADAXACAtIACALIACAXIAFAnIACALIAPAAQAMAAANABIAJACQAFAAAEADQAEACACAFIACAGQACAHgBAIQgBAMgGAKIgDADQgGAGgKADIgSADIgKACQgTACgKACQgMADgWAHIgiAIIgDABQgIAAgGgFgACmi8QgLAAgOgTQgSgVgTgaIAAgfQAAhjgBgjIgCgbIgCgbQAAgcAYgCQAbgBADBhQADACACAhQAPB2AQAlQAAAIgCARQgBAGgJAAIgLgCgABoj+IAAAAg");
	this.shape_12.setTransform(141.3,53.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#94ADFF").s().p("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");
	this.shape_13.setTransform(141.6,53.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A3A3FF").s().p("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");
	this.shape_14.setTransform(141.9,53.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B399FF").s().p("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");
	this.shape_15.setTransform(142.2,53.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C28FFF").s().p("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");
	this.shape_16.setTransform(142.4,53.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D185FF").s().p("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");
	this.shape_17.setTransform(142.7,53.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E07AFF").s().p("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");
	this.shape_18.setTransform(143,53.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F070FF").s().p("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");
	this.shape_19.setTransform(143.3,53.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF66FF").s().p("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");
	this.shape_20.setTransform(142,53.1,1.031,0.856,0,3.9,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E86FE8").s().p("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");
	this.shape_21.setTransform(143.3,53.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D179D1").s().p("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");
	this.shape_22.setTransform(143,53.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B982B9").s().p("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DIAAgDIABgEIAIACIAKACIgEABQgHAEgIADIAAgCgAhBieQgKgCgGgMQgGgKAAgKQABgHAEgMQALgWAGgHIAZASIgBAFIgBASQAAAPgBACQgCAZgRAAIgDgBgAMZieIgFgBQgFgEgIgCQAIgDAJgCIAAAAQAIgCAGABQAFACgBAEQgBAFgFACIgFABIgGgBgAMHilIAAAAgALliwIgKABIgcABQgZACgNgBIgBAAQgKgBgHgFQgGgHAAgIIAAgBQABgIAHgHQAWgHAEAAIAdgBQAFgGAEgQQAEgKAHgPIAAgDQAHgMAEgMQAFgQAKgOIACgFIgSACQgHAAgDgDQgDgCAAgFIABgCQABgCADgCIACAAIAGgBIADAAIAWgCQAIAAANABQAQAFAUALQAOAFACAOIAAAGQAAAJgHAHQgEAFgHADQgFAFgZABIgGACIgBALIgBAUQgBAMgCANIgEASIgEAIIgFAMIgDAHIgQgHgAgojeIACgXIAUAYIAAANIgWgOgAgojeIAAAAgABklEQABgCAUADQATADAAA0QgTgYgVgggAUXkuIgFgCQgMgIgMgEIgCgBQAUgDAOAAQAOABAAAIQAAAFgEADQgDACgFAAIgFgBg");
	this.shape_23.setTransform(142.7,53.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A28BA2").s().p("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");
	this.shape_24.setTransform(142.4,54);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8B948B").s().p("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");
	this.shape_25.setTransform(142,54.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#749E74").s().p("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");
	this.shape_26.setTransform(141.7,54.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5DA75D").s().p("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");
	this.shape_27.setTransform(141.4,54.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#46B046").s().p("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");
	this.shape_28.setTransform(141.1,54.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2EB92E").s().p("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");
	this.shape_29.setTransform(140.8,55.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#17C317").s().p("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");
	this.shape_30.setTransform(140.4,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},10).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,13.3,275.5,84.4);


(lib.BkScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EgiOgX/IgJAAIgqAAIkaAAIAAABIAAEPIAAAMIAAM4IAAAMIAAFbIAAAIIAAF6IAAANIAAS1MBO3AAAIAAyKIAAgMIAAniIAAgGIAAkiIAAgGIAAi8IAAgHIAAuVIAAgBMhJYAAAg");
	this.shape.setTransform(0,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4B445").s().p("AhuARQgDAGgFgFIgBgBQggAAgEgDIABgBQhiABgbgVQAUgMAYACIAGgDIAGAAIADAAIAIAAIACAAIAAAAID2ACIAoABIAhABQBYgIBTAaIgPAEQhfANhigBIgXABIibACIgEgEg");
	this.shape_1.setTransform(-76.5,126.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7E4B01","#B16A01"],[0,1],-33.7,0,24,0).s().p("AjnBsQABgHAHABQADAHgFAHIAAAAQgHAAABgIgABhBiQAAAMgNgEQgTgGgKACQgFgNgCgIQgKADAKAOIgZgCQgOgBgIAHIgJgNQgCAAgBAJQgIgCABgHQgqAVgGgdQAAAJgJgBQgJAAABAJQgLgHgJACIgSACQgJgOAGguQAFgvgIgRQgHAWAAA6QgeAogBAPQgMgMgOgeQALgVAIgJQgKAAgMAVIgSAiIgRgZQgNABgJAPQgKAPgMAAQAOgdADgTQgMgCgDAOQgDARgCACIgOgDQAFAJgPAWQgKgBgJgKQgJgLgGgDQgFABABALQACANgFAAIgKAAQgBgNAPgOQAHgGALgGQAigUgCgbQArgcgMhrQBAAQBFAHIAAABIAKAAIApADIgFgDQBUABBDgBIASgBQBrADBogVQgNBaA+A/IAAAOQgFAAgDgCIgugmQgHAUAHAYQgKgFgDgMIgNgsQgIAjATAfIgDAGIgQgHIgCAAIgCABIAIAVIgcgYIAAAKIgGgCIgCgKIgKgIIgEgDIgEgHQADAHAFAGQAEAHAGAFIgHARIgIABQgHgBgGgIQgHgNgJAHQgIgLgDgUQgDgQAAgVQgCgygIgQQgLAhAOA2IAEAUQAHAngHATQgOABgbgZQgBABAEAPQAEAQgHAGQgVgNgMgFgABgAhQABAaAQACQgFgLgCgaQgCgYgHgMQABANgCAggAgWAhQgDAWAOAGQACgXAAgMQABgXgKgJQABAGgFAhgAiHBkQgFgHgEgBQALgMgBgMQAGALAEAbIgBAAQgFAAgFgGgAjGBXQgBgFAEgEQAGADABALIgBAAQgHAAgCgFg");
	this.shape_2.setTransform(-78.5,138.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#05A514","#006633"],[0,1],70.4,-12.1,70.4,6.6).s().p("AAOA7IADAEIAAAEIgDgIgAgQhCIAEAAIAAAZIgEgZg");
	this.shape_3.setTransform(-144.7,36.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AkxIwIABgBIACADgAomlEIABAAIABAAIgCABIAAgBgAInm+IAAABIgBABgAgFowIAAgBIACACg");
	this.shape_4.setTransform(-144.2,-46.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#6D4201","#CA9B57"],[0,1],-82.6,38.4,-9.8,12.3).s().p("AomO0QgMgKADgFQAPAAAZAHQABgPgPgPQgQgOgBgOIAjAHQAHgRgMgTQgPgTgFgJQALgGApgDQAjgCAJgNQgCgIgOgEQgPgEgDgFQAFgFgCgKQgDgKgHgBQgEACAGAKQAFAJgHAFQgxAAgdgGQAEgBAbgOQASgKAIAPQgEgJACgJQAMgBASgKQASgKAMgCQgmgjh6AtQAIgaAWgcIAMgQIADACQAAAXAKgDQgFgTgFgBIgCgCIAWggQgoABgeAaIguAzQgPgaAIgZQANgaACgOQABgPgGgPQgIgQgFgNQgCgagFgIQgYgLgCgTQANgegGgOQgRgUgEgOQAGgUAegtQAcgpAEgbQgDgiADgUIgmg2QAAgRAIgYQAJgZAAgNQABgYgXglQgZgpgEgWQgHg1AihGQgCARANARQApAFAYgWQAPgOASglQgIAGgTAaQgRAVgQAGQgBgOgOgBQgCAHAHACQAHADgBAFIgcAAQgMg8gVgUQgbgZhBAHIAAgMQAAgHgHACIAAAFQACADABAKIAtAUQACgGgKgCQgIgDAFgDIAmACQANAEAIAVQgPgQgNgBQgCAFAIAFQAFAFgEACQgLgJgmACQgjADgMgRQAIgCADgPQAAAJAEAIQAFAJAFgFQgCgDgFgNIACAAIgBgBIgBABIgNguQgJgdgVgGQgHgHgJAAQgMAAgDAGQgBAEABAEQgBACgJAGQgJAGgEAAIgPgXQgEgQgFgFIAAgCQACgDgLAAQgUAAgRAXIgFAHIgPAVIgEgFIADgOIAAgBIAIAEQADAAADgFQADgFACgLQANgOADgFQAFgBgBgFQADABAEgCQAAgIgGAAQgEAAgEAIIgGgPIgDgIIAGADIApAOQAYAiAKgZQAKgYgBgUQgBgUAJAAQALAAASANQAEACACAGQADAFAOAAQAHAAAMgKIAIgIQANgBAMAFQATAJgIARQgCgLgGABQAFAMACAkQABAjAGANQAMAFAYgIQAZgHAHACQAAADgDACQAWgJAfgoQAkgsAlgDQAMAEAOAMQgDgZggAEQgaADgUAPQgGgOgOgRQADAMAJARQAEAOgTAGQgQgmABgNQgTAAgRggIAAAVQAHAIAXAJQgBAUASAcQgEALgHAKQACglgTgQQgbgZgDgIQgDgJADgcQACgXgIgLQgIgKgTgFQgVgEgLgIQAFgSAGglQgIgDgPAEQgRAEgLgBQAFgGACgEQgHABgMgGQgKgEgFAFQAHAGAUAEQgUALgLADQgGgMgLACQgLACgMAJIgVAQQgBgbAYgMQAegKAMgJQgPgUgOgQQgRgUgPgMIAAgBQgdgagBgrIAAAAIAAgEQAMgRAAgXQAAgUgcggQgWgQgJgJQgJgJgHgRQgEgMgIgoIgBgCIgDgrIARAAQAEABACADIAAgBIAaAAIA0gBIABAEIABACIACACIAFALIAGAMQA5BNgFAeQAAAQALALQADAJATATIAPAdIACADIADAYIgBACIABAAIADAiQAVAKAvgDQAGAbAfAaQAgAbAGAVQA0gHACgXQgWAYgggBQgBgEAHgPQgRAEABgMQAWADAKgQIAPgeQAAAMACAUQABARgJAIQATgJgFglQgGgrAJgNIgNgqQgJgagaADQgNgXADgUQgRAJAYAqQAGADANgCQAMACgBAOQgDgKgIgBQAAAHASAbQAMAUgPALQADgfgXgPQgdgNgNgJQgOg2AZgiQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAAgCIAAgBIAAAAIAAgNIgEgDIAAgDIgBgEIgGgBIgFABQg1gjAAggIACgNIABgKIAAgFIgCgHIBTAAIAAADIgDABIAAACIAAAMIgCAUQAAASAFAFQAIAHAeAJIABgBQABABAAAAQAAABAAAAQABABAAAAQAAABABAAIADgBQACgNAIgDQAGgDAIgOQASgSACgPIABgFIAAgBIABgDIAAAAIgCgEIAaAAIAAACIAAACIACAHIAAABQAAADgDADQgEADAAAHIAAAEQACAEALAAIASgCQAIAAAHAHIgCABIAAAFQAGACAJAJQAMAIAaAAQAPAAACgFQAFAAABAEIAAABQgMAEgCADQgCADAAAJQAAANAEAMIgCABQgFgMgTgRQgegKgEgFQgCgIgDgDQgEgGgTAAQgOAAgBANQAAARgEACIgZANQgBABAAAUQAAAMABAFIgIgEQAAAHAJAFQAJAGACAFQgIA6AwAbQAMAHAbANQAVAMAIAQQALATgHAnQgHAtADAPQAbALAAAwQABAagEAxQAGACABgGQACgGAFACQAOAMAKACQASADAPgDQAdgHATgfQAfgzAlABQAOgXAIgLQAOgUATAGQgCAFgQAQQgMANACAHQATgbAMgK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");
	this.shape_5.setTransform(-118.1,-57);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("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");
	this.shape_6.setTransform(-83.6,-32.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC33").s().p("AZxCXIAEACIAAABgA5viZIAAAAIgFAIg");
	this.shape_7.setTransform(-20,82.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("AZxCjIgDgBIABAAIAGADIAAABgA5wiNIABAAIgFAIgAxciMIAEADIAAAAgAzwihIAGgEIgGAEg");
	this.shape_8.setTransform(-20,81.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAC46A").s().p("AgLAEIACgDIAFAAIABgBIACgDIABAAIAMAAIgXAHg");
	this.shape_9.setTransform(185.2,88.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#99FF33","#E3E260"],[0,1],0.3,-57.4,0.3,57.5).s().p("EgnbAJfIAAgJMBO3AAAIAAAJgEAncAJWgEgnbAJWIAAy0IHLAEQgEAEgDAGQALAGARAAIAhgDQgDAHgSAPQgPANgBAQQAMATAggJQgbApARARQASgHASAEIAjAKQgCgJACgMQAHAMAOgFQAHgCAKgFQgKAOAHAOQANABAKgKQANgKAHgCQAAATASgCIAagYQAPAKAeASQgkAZgOA9QgNA5AMA5QhOg/hfAaQAhAiA+A7IAbAZQgOgDgmAKQgbAHgJgRQgDAKAGAKQgyATgIAkQAggLA3gHQA8gIAbAFQgHAMgTAXQgPAWADATQALgIATADIAiAFQABAJAGAOIgbgKIAMAMQAcAaALgBIgQgOIACgDQAEgFgFgHQgIgJADgKQATgDASARQASARAGAAQgFgNgYgTQgWgRgEgSQAagMASARQAKAJAPAWQgCg1AngPQACARgGAYQAJgCASgRQAPgPANAEQABALgOAMQgMAMAEAJIAEAHIgDgHQALgCAbgRQAWgOASAGQgNAmgcAAQAHAEAEAUQAEATAJAEIgHgpQAWABARADQAHAXASALQgGgXgLgJQAbAFALAJIgOgRQAVgWANgIQAzAcAigSQgHglgegcQgIgGg1gjQBRgXB0gRQgPgNgrgCQg6gDgKgCQgMgdACgTIgFgHIAFgEQA7giAdgUIgNgSIgCgCIgDgEIgKgIQgWABgYAFIAAgFQANABgBgKQgBgRACgEQgCgLgdABQAJgOgCgNQgGgGgMADQgNAGgGAAQASgbAhgiQAAgBgOgCQAIgJAIAJIABABIgDACIADgCIADAEIAJARIgCgdIAAgDIgDgFIgLgUIADgEQgNgIgCgXQgBgHgCgFIAAgDIAGABQAfAAAVAJQATAIADAAQAIAAAKgNQAKgNAAgGIAAgFQAIACATAAQAwAAAQAKQAQAKAVAAQgegHCPAAIAUAHQAzAIBxAAICVgGQAkAAA6AIQA6AJAQAAQAPAAgGACIgBABIgCAAIACAAIACAAIABAAIAnACIAAgDIARAAIB9gNIARgCQAfgCA7gCIAXgBIAegCQAtgEAIgDIBeAGIA0ADQAjAAAEgBQADgBAAgEQAPgJAMgCIAAAAIAAAFIADgCIALgFIAEABIALABQAAgDgHgBQAhgHArAUQAlgOBPAQIAHABIAOACQAjAFAYgGQAMADApAAIAdgBIANADQCiAAAigLQARgGA8gCIADAAIABACIAaABIAiAAQGBAAE4AEQAAAGABgEIGtABIgfAFQDVAFClAJIABAGIAjABIAYABID8gEIAASJgAvsJGQAGgCADgRQAEgQALABQAHAEAJAMQAJAMAJADQAIgTAJgIQAHATApgGQgMgGACgHQAFAAAJAEIAJAGQANAHAHgEQgCAAgBgKQAQATAdgTIATAKQANAGAIgGQgIABgCgHQAQgHAZAMQAYAMANgEQgFABgDgEQgFgEAGAAQADAEAEACQAPAJAogBQAEgCADgMQAJAJASgIQATgJAJABQgBgCADgLIARACIAHABIAQgLIAEAEIACADIAHAFIAIACIAJAAIACgBIABgNIAMABIACgLIANAHIAHADIAGAAIABgBIgOgxQAGALAIAJQAJAKANACIAQACIAHgFIgBgOIAKAEIALACIAVABIABgBIACgQIAOAAIAEAIQADACAEABIAGADIAIAAIAIgBIAFgBIAFgEIAAgKIgFgBIgFADIgGACIgGAAIgGAAIgDgBIgGgJQgIAAgGgCQgGgBgEgDIgBgEIgBgEIgCgFIgEgDIgFgCIgCAFIgBAFIADAJIAEALIADAKQgLgHgMgGQgYgKgMgWQgig4AFhFQgHgGgHgCQhggUhlACIgqgBIhvAAIijABIgKAAIgBABQghADgNAGQANAUgDArQgDAogKAXQgLAUABgNQABgWgFgCQAKBAhLApQAAgFAHgYQAEgRgOgFQAEAIgEANIAAABIgFAMQgKAUAJALQgHAAgGgHQgFgIgHABQAMApAyAAIACgRQAVAVAagLQAGgDAogcQgPA0AcgBgA0SI9QAIAIAFgFQgIAAgFgHQgEgKgEAAQABAIAHAGgAlwIhQgEAlAKgNQgEAAACgMQAAgGgBgDIAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIAAAAgAzkIkQABALgEAGQAHADADgLQADgJgIAAIgCAAgAyjIyQgCgXgIgBQAAAYAKAAgA1eIdQAIAMgFAJQAKAAgBgJQABgGgEgEQAGAFAFgKIgPgJIAAAAIgTgLQADAGALARgAlqIkQADADAOABQAMABADAGQgFgigCADQAGAQgPAAIgFAAQgLAAAAAEgAjzIeIAAABQgBAKgCACQAIAAABgLQADgMgJgBI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");
	this.shape_10.setTransform(0,93.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgEAGIAAgBIAEgLIAFAAQABANgHAAIgDgBg");
	this.shape_11.setTransform(217.9,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#05A514","#006633"],[0,1],14.2,-8.2,27.7,42.3).s().p("AAAAAIAAAAIAAAAg");
	this.shape_12.setTransform(216.7,-6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02C127").s().p("A6HEWIAAAAIgDACgEggygDAIAAAAIgBABgAeVjKIABgBIAAACIgBgBgEAgUgEDIAAAAIAHABIAAABIgHgCgEAgygEWIACgBIgBABg");
	this.shape_13.setTransform(23.2,15.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996633").s().p("AbtESIABgBIAAABgA0TCeIAfgRQgMgBAFgEIAOgMQAEAEgEADQgFAFAFAFQgFAEgLAHQgHAIAJAIQgOgIgKgCgAzcBhQAIAEAFAUQgCAIgPAJQAGgdgCgMgAiqgLQADgKAAAKQAAAFgBAAQgBAAgBgFgAdWg3QgBgHAFgGQAFgHABgEQAWAHAFAAQgDAMgLAWQgWgOgBgDgAlMi8QADgJACgLIAAAAIAAAVgA92jSQgGgHADgIQAFADAIALQgCAEgDAAQgCAAgDgDgAjukQIAAABIgFAEQgFAEgBAFIgEAAQgBgNAQgBgAg9kCQAAgHgEAAQgBgFAKABQAJABgBgFQAKAEgHAFQgGAGgHAAIgDAAg");
	this.shape_14.setTransform(-4.8,-104.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0099FF").s().p("A/DFjIAEgBIABACgAiYhiIABAAIgBAYIAAAAQABgLgBgNgAkEhUIAAgDIABADIAAAAIgBAAgAe3hlIANAAIgEAGIgJgGgAg/iKIAAAAIAAABgA7iitIAHABIgFADIgCgEgAiPi9IABgBIAAADgA5bjlIADgJQABADAAAIIABAAQgFAEgDAFIADgLgAwHjrIACAAIAAABgA1ulhIAAgCICnAAIipAHIACgFgA+XljIAaAAIgaABgA2PljIACAAIAAAAIgCAAg");
	this.shape_15.setTransform(-22.3,-118.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#996699").s().p("AEmBiQgEglgPg1QgSg+gEgYQAWgNAgAHQAuAJAIAAQARgBAigMIAgAEQAKABAHgCIADABQAMAAAMgJQAMgJAZAAQALAAAeARQAtACATAGQASAGAXAAQASgBAIgGQAIgFAfgBIAdAEIgLAGIglAOQgIAEgLAOQgPAQgDACQgjAYgIgIQgNgQgjAIIgWAJQhCAZAAALIADADQAWgUAogMQAFgBAMgGQAngPAIALQAIALApgQQANgGAHgLQACgHAQgLQAEgEAKgEIAVgGQAGgGAXgMQAagNALAAQALAAAVAHQAWAHAQgBIAPgDIAAC8IlWABIkLgFgAkKBkQgTgFhrgBIhVAAIgWABIADgDIgtABQgeAEgEACQg5gDhfACQh1ABg6gEIAAgBQAHgKAPgBIARgOIAQgEIAHAAIAEgBIBUgEQAXgEA6gRQA1gQAggDQARgCAiACQAPgCAbgPQAagOAOgDQAggFBDAIQAQgBA3gLQArgJAcACIA+ADQAOgDAagRQAQgDAzACQAqABAWgLQgBCBAFAXQh3AEhhACIglAAIgVAAIgRAAgABdBiQgFgiACgyQADg2AAgZQAqgJAWADQAUA/AWBqQgVABgbAAQgaAAgggBg");
	this.shape_16.setTransform(162.1,-52.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#07CD1B","#01984B"],[0,1],246.2,-15.3,246.2,36.9).s().p("AoxEMIgDAAIAKAAQgygBgLgBQgXgCgOgEQgMgBgngHQgngGgkAAIiTAGQhGAAhFgHQhEgHgPAAQhDAAgKAHQgVAAgOgMQgOgMgMAAQgGAAgLAEQgrABgHADQgEgIgMAAIgIABQgXgYAAgMQAEgXAAgHQAAgDgRgtQgRgqAAgZIABgBIgBgCIgDgNIABAAIgBAAQgEgegBgOQgDgjgKgSIAHgDQgCgGgFgFQgOgQgCgGQAJgeAdgHQADADACAMQADAKAFACQAHgBAAgTQANAAAKAJIASAPQADgBAAgKQARAGAHAFQANgTAVAPQAHgEAAgNQAZAJAjgEIAAAAIACADQAHAHACAAIADgCQAAgFABgDIAMgFIANgBIAPALQAMgKAQgGIAKAGQAbgVAeARIAEAIQAggeAYAXQAVgOAYAEIALAQIAAgOIAQgDIAKAIIAHgFQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAIAEgBIADAHQAWgNALAaQgJgYAhgGIATAbIABgKIAJABIAGASQAmgVArAKIABgJQADgLATAGQAXAJAFAPQAEgBABgIQAAgJAGABQAaAWAcgBQgLgWASgJQAbAAAbAbQANgeAEAAQAGACAMAQQAKANANgBQgGgZAKgMQAEAAADAIQACAHAHgBQANgdAPAMQgBAFgIAGQgJAFABAHQANgHANAAQAPgBAPAJIgCAHQAAAIALAAQAEAAAEgDQAEgCADgGIATAZQAFAAAAgCQgBgRAFgEIAEAOQACAIAFADQAOgBAKgKQAKgLAFgBQAIAWAAAEIAGABIAfgNQAEATAOAAQAFAAAIgGQAIgGAHAAQABAAABAAQABAAAAAAQABABAAAAQgBAAAAABIAAAJIAAACIAAgBIAAADIAGABIAUgFIAJgEQANgFAEgFIgCgCIAKgEIAKAMQAGAHAHABQgCgXAUgBQANACAEAaQADgCALgKQAIgHAMACQACADABAbQAngSAaASQAAgHADgDQAEgEAJADIAAAAQALAMAEAAQABAAACgEIADgJQADgPAGgFQAGAEAMAUQACAAADgNQADgOAMAAQAGAAAFAMQAFAMAGAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIADgNQACgKAIgHQAEgDAFgBIAYAPIARgNQALgHANAEIAIAIIAHgGIANgJIAHAJIAEgDIAPgdIAFABIAFAQQAKgDAHgFQAIgFAGgHIAGAGIABAOIAMgBIASgGIADAEIAAAIIgDAJIAKgDIAGgHIAEgEIALgDIAOALIAbgDIAHAFIAJAQIAKgIQARgNASAMIACgJIACgDIANgEIATAPIAEgFIAGgEIANgGIAKAHQAKgHAKgEQADgCAFABIAEAGIAHgFQAHgFAHgDQAEALAGAJQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAEgIIAPACIACARIABADIACAEIAIgIIAJAAIANAFIAEANIABgBIACgCIABgCIASgFIAEAGIAIAOIADAFIACgDIADgIIABgCIALgEIACACIAJAKIAEgJIAFgOQAEgBACACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAHIADAEIAKgFIAdgMIADAOIABgBQAGgIAHgHIAMgIIAOAOIAEgMQADgFAEgEQAEgEAFgDIAPARIACgFIAXgCIAGAFIAHgIQACgDADgBIABABQACACABAEQACAKAIgBQATgNAWAGQAXAHAHAUQAHgFAHgPQAMAGAGABQAEABABgCIANgPQAHgHAMACIAKAIIABABIAKAHIALAGIAIgHQANgLAFgRIAQAPIAGgIIALgOIASASIADgDIAIgLIAHgJIAKAFQAOAIAKAOQAGgOAIgMQAPgVATAJIAMAHIALgIIALgHIANgEIANgCIATAMIAbgRIAWASIAPgGIADgUQAOgCAKAIIAEAEIAEAGIADAGQAHgGAJgDQAJgFAMgCIAZASIAGAGIAFAIIAEAHIAigrIAPAVIAPgXIAUAhQAhgTAWAbQAHAJAGANIAWgpIAPAGIAGAFIAGAHIAIAMQALgZAWAIQARAGAHASIAGAIIAFgJQAMgVAWAMQADACAEAEIAFALIAKgKIACAFIAeAWIAYgsIAVAYIAqgHIALAEQADgFgHgWQgFgWAGgJQANAEAJAcQAIAbASACQAMgMgCggQAMgKAIAXQALgBARguQARguAXACQABAVgfAoQANACAXgSQAWgTAUABQgKAYgdAVQgpAegFAGQANAFAcgLQAcgJAJAFQgCAHgDAHIgDAEQgJAOgRALIgzAZQAIAIAWgIQAagKAPADQAHAVgLAYIgTAlQAQAGAPgTQARgXANgBQACAZgdASQALAHAPgKQARgLAL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");
	this.shape_17.setTransform(0,9.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#0230E3","#0099FF"],[0,1],14.7,23.7,14.7,-23.6).s().p("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");
	this.shape_18.setTransform(0,-21.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#6D4201","#CA9B57"],[0,1],4,-0.9,17.6,-0.9).s().p("ACTI6IgEgKIABAJIgOgOIACiLIADgnIA6AAQgGgJgYACQgbACgEgCQACgzgCgNQAuAQAWgJQAGAlgBBJIgBCCIgCgDQgKgQgRAEIgWAhgACuIIIgnAEIAGAIIAkgHIABgDQAAgEgBAAIgDACgAC3H5IgBgKIgFACIgogIQAVAVAZgFgAC+HaQAEgBAEgCIAAgFQgKAGgSgEIgVgGQAQAUAZgIgACUGiQATARAZgHIAIgDIgogGIgPgEIADADgAA6IkQgPgdgiAOIgKAEQgEgFgCgFQgOhFgNhFIgBgFIABAAQgBgXgNhSQAgAAAKgRQgaALgQgBIgCg6QARAVAegYQACBLAEAoQgXAKgKgNQgEAEACADIAFAGIAhgGIADAHIAAABIABADQgBgPABgKQANAfABANQAFACAAAIIAAADQADAHADAMIgBAAQgFAAAAADIABACIABABIgGADIgvAFIABADQAWAIAYgHIANgFIAfCMIgJAJIgCgGgAAuHeIgEgHIgHAHQgTATgbgEQAiAMAXgbgAAeG4IgyAHIAEAHQAgAJAXgYIgCgGgAANGAIAAAAIAAAEIABABQACgDABgGIgEAEgAgGF7QAHgBAFAAIANgMIgDgCIgDAAIgBgIQgBAHgEAFIgCABQgLAOgYgNQAAAOAYgFgAAGE1QAEgKAAAKQAAAFgBAAQgBAAgCgFgACEEoQgGgaADgTQAVAMArgMQgBAUAEAjQgNAGgMAAQgVAAgSgQgAB9DyQAAgagGgMQAHgCAZADQAYAAAIgLQgGgEgQAHQgQAHgNgEQgKgIgRhGQAeASAtgOQASBVgCAfQgYALgRAAQgSAAgMgLgAgfDVQgVgDgCABQgEguABgaQARAHARgHQgbAAgHgHQACgzABgDQAKAIAbgBQgggJgIgMIAAgiQAKgIAegFQgaABgLgIQAIhDAJgyIAAgBIABgCQAGgiAHgZQAWAQAOgDQgYgJgJgIQAHgYAAgQQAYASADAnIgBAAIABAAQABALgBANQgCAbgSBBQgKABgKgGIgIgGIAAAAIAAAAIgGgCQgJAQAxAAQgPCAAJB0QgHAGgMAAIgGAAgAghhpIAAADQADAFAKACQANADAHgGQgJACgJgGQgIgEgFgCIgCADgABpB3QgEgYgKghIgNgsQgVhBgHghIAbgBQAVAAAHgHQgjAJgUgJQgDgHgHglQAjACAGgPQAUAdAiBgQgsAJgNgJQAAANAYAAQAXAAANgJQAbBQALAzQgRAMgUAAQgQAAgSgIgABfA9QAKAHASgBQATAAAHgJQgsABgKACgAAoiHQgSgXAPgPQgLAFgGgRQgHgWgDgDQAcABACgLQAZALAQA5QgSARgSAAIgFAAgAAGjVQgGgMgUghQAHgCARgDQAOgEACgLQAUAQABAZQABAZgbAAIgJgBgAAokTIAbAAQABAPgLATQgEgDgNgfgAgVkPQgOgLgWgoQg+hzg5g3QAKAAAJgLQAKgMAIgBQALAXAeAjQgVANgKgGQABALAQgBQARAAgDgNQAcAUAQAfQgTAagSgXQgEAOAVgCQAQgBAOgIQAUAiAEAEQgBANgNAAQAFAKAQgNQAeA4AGAIQgPAUgNAAQgIAAgIgGgAAskZQgFgegQAKQAOgXAHgPIATAPQALAJARgDQgFANgPAYgAA2ldIAKgVIACgFQAFgJAHgCQgKAMAogQQgBgEgKAAQgLABgCgEQAIgVADgNQAGgBAVAIQAAgIgHgDQgKgDgEgDQAAgDALgfIAXAKQgCBDgmBJIgDAAQgSAAgUgYgABFl1QAAABgBAAQAAABAAAAQAAABAAAAQABABAAABQAEAEAFgNQgHACgCACgAjBowQAWAJAWAdQgEAPgbAMQgPgQACgxgACcoHIAHAAQABAGgMABQAEgEAAgDgAjMo3QABgDADAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABg");
	this.shape_19.setTransform(171.1,-61.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#05A514","#006633"],[0,1],145.8,-16.9,145.8,12.2).s().p("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");
	this.shape_20.setTransform(-17.6,-123);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AH+EOQgwgQgKAAQgTAEgIgBQgWgKgMgBQgXgBg6AMQg2AMgfgFQgogKgSgDQgggFgaALQhAgdhsAuQgRgUggAFQgpAIgXAAQAqgdCbgjQAUAOAGAUQAGgCAHgJQAHgIAIgCQAdgBBTAPQA2gdApACQASABAiANQAgANAPAAQALAAAWgMQAWgLANgBQAVgBAdAIQAfAKARAAQAvg0BuASQAIAHAFAbQgTAMgPAHQgbANgbgFQgagVgSgCQgJADgCAQQgEAVgCAEQgMAFgOAAQgPAAgRgGgAniEBQAwgSAVAWQAWgLAFgEQAIgCAVAHQANAEgFgLQAQABAZgFQgBAHAGAEQAGAEgBAGQgtAKglgKQgSAPgigBIAAAAQgkAAgOgSgAn9B+QgbgEgKgVQgYAVgoABQgrACgPgcQgfAYgRgUQgCggAogHQAngHAIAdQAWgUAnACQAkADAZASQAKgWAwgDQAwgEAKAaQAGABACgJQACgJAHADQAgAgg1AGQg2AIgRgZQgFACAEAGQAGAIgCAEQgNAQgVAAIgKgBgAneg3QgHgKgDgUQg8AHgZgEQAWgfBJAYQgagKgWgUQAZgiArAzQAEgEgEgGQgGgGADgIQAWgaAwAMQAbAHAxARQAAgIgLgFIgQgHQAWgWAlAIQAhAGAUAVQADgFgGgRQgHgTADgNQAQgVAjgUQAHABAEALQAEALAGABQAEgMgEgbQgEgXALgNQATgKAVAGQAVAHAGASQgCAJgSALQAEAIAKgEQALgGAGAFQANASgKAoQAUAFgDgdQAdgYATASQAHgBASgPQAOgLAOAGQAHALAHAUQgwAjAEAXQBogrCFgdQgBAJgJAMQAlAEAHAhQgHAPgcgBQgZgBgOgKQgGAFgBAMQgBAMgGAFQg4AMgdgPIgRAlIgkABQgVgBgEgKQgZAWgMAJQg3gUgQgcQgDARgHAEQg9AGgOglQgEADACAIQADAJgEAEQgXAMgegKQgagIgNgSQgKAUggAKQgiAJgTgPQg2AngnAAQgSAAgPgJg");
	this.shape_21.setTransform(80,-107.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#FF9966"],[0,1],8.8,55.8,8.8,-55.7).s().p("AJiIsIhfgEI1GAAIABABIhwAAIg+AAIg3AAIgXAAIgEAAIgCAAIgEAAIgDAAIAAABQhJgDh3ABQifABgrgBQgCgmgDgSQgDgfgQgIQABgLAbhOQATg1gTgnQAWgRAmguQAlgsAZgSQASAHAFgBQBEgnAcgZQgGgRAPgQQAUgWABgGQgFggACgPQADgTAPgWQATgdAEgIQAMgHAggCQAkgCALgGIADgVQACgKAMgDQAVAKAAAcQAAAQgHAiQAbAWAsAFQAFARgFAyQATANA7AEQAGAPAjAkIAvgNQATgFARACIACgEIAGgCIAMgEQAIACAFgCIACAAIBNgMIAygKIABgDIAAAAIAPAAIAEAAIABAAIAMAAQAGAJAFAWQAZACAugQQAEAOAVAKQAFAYgPARQgQASABAQQALADAHgIQAHgJAGAAQAQALAEAAQgGgIADgJIAVAAQAAgSgigDIAAgeQAOANAWACQAYABALgQQABgIgGgEQgIgGgBgDQAagKABgGQgEgIgMACQgSADgHgBQAEgaAAgBQgPACgLAPQgPAUgGADIgIgUQgWgCgqAJQgDgEgHgbQgZgIgTAFIgFAAQgKABgMADIgIACIgTADIg4AHIhFANIgHABIAAgBQgnAKgUgBQgBgKgXggQgVACgQgUQgTgWgMgDQAMgPgBgPQgYgTgKgKQgTgUATgTQgqgfgNgXQAcgDBAgRQAwgGAQAdIggARQA5gIAEgJQAFgIAHABQAEAHARAGQAPAFAEAHQgHAMgPAPIABADIAEABQADAAAdgLIAhgKQAFgCALgKIAJgIIAFAGQABAHAFAKIAEAAQASAAAAgYQABgFAAgJQgCgOAEgDQAlAFAPgBQgEgXAOgRQAOgQAUABQANABAiAhQAQAGA0gKQAJAEAFAKQABALgFARQAJAGAhAIQAdAGAIAOQAfAAA6gEQAtABATAXQgMATghAdQAAAHAKAHQAIAGgBAKQgXABgUAaQgYgPgfgCQgJAOgBAKQALAIAXgBQgBACgJAMQgFAIACALQAQAJAVgQQAPAdAWgCQAJgTgKgSQgPgRgFgKQATgaAhAPQAoASAYgKQATAQAIAUIglA3QARADApgpQAMAiAWgDQAFgGgDgLQgEgPACgFQAZgEAFgKQgVgEgDgKQAHgJgDgKQgVgLgoAbQgFgXgXgHQAFgXAqAGQAqAFADgSQACgIgIgDQgJgDgCgDQAMgCACgWQgOgBgOAJQgPALgIABQgCgUgPgDQAAAEgKgBQgJAUAPAYQgZAVgnAAIgKgRQAKgXADgOQAmgHgHgmQgFglgdgKQglAUgsgpQgSAHgTgEQgVgFgBgPQAagkAOgRQAYgeAggFQgEgJgEgFQAagCAMAGQAAAKgGAcQgEAaAOAHQAMgIAMggQALgdAMgCQACgBAZARQANAFAVAGQgEgZAIgCIANgEQgDAOAKAOQg8AMgSASQAPABAggHQAbgFAOAEQgDAJgLATQgJARAGANQAQgCARgVQAUgVAMgDQAHgDATADQARABAKgIQgbgNAJgWQARgaABgOQgeAJgUABQgJgDgJgTQgJgSgNgBQAGAQgXAZQACgOgXABQgXAAAAgLQAsgaANgVQgdgBgxALQAFgdgFgFIg2AiIgJgSQgGgLgJgCQgDADgKAWQgGAQgPAAQgEAcgRgBQAJg3AggQQgNgEgaAAQAMgRAOghIAAgJIgEgBIgHAVIg0ANQgDgMgQgLIgbgVIgEAXQABA5AoAAIACAAQADAFAJADQACgKANgBIgIAGIABADIACAAQAIAAAIgJIAZAEQgKAMgYAxQABAGAKADIAAABQgBAFgMABQgQAAgCAFQAAADACAHQABAFgOAaQgMATgaAnQgPgNACgfIABgQQANgCALgOQgNgHgEgRIAEgDQADADAEAAIAEgBIAAgDIgDgDQASgLAHgHQAUgSAAgcQgIAVgoAnQgHgKgBgIIAGgTQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQABgHAAgIIgEggQgwAFgNgFQgCAPABASQgFgDgJgDIgpgRIgCABIAAAPQAAAQAIAQQAPAcAiAAIAIAAIAAACQgWABgqAOIgLADIgBgBIgQAFQgTAFgLAAQgEgHAAgGQAWgNADgOQgQgKAEgYIAIgtQgKgIgcABIgvABQACAKAMAZQAKAVAAASQgagBgjAPQAfApAAAZQABAAACAFQgGAdg1gFQAKgNgDgOQgLACgoAVQgfAPgXgEQAagbAFgVQgnAJgagCQgEgjgRgJQgEAHgEAXQgEAUgHAIQgOAAgOgKQgQgKgLgBQgCAFADAIQAEAGgFACQgPgOgPAAQgPARg1AKQgLgGgKgSQgMgWgFgFQgygTgpAiQg6AvgOADQgJgXASgqQAPgjgYgaQAEgLAVgSQATgRAEgPIgkACQACgDAGAAQAVgEAHgDIABACQADAOARAZQARAYAFAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAKgaACgKIACgjIASARQATAQAOAAQADAAAQgWQAPgPAYAAQAOAAAJAIQAKAIAFAAIADAAIgBgZQABgPAHAAIAQAIQAPAIARAAQAaAAgBgNIgMgfIArgFQAJgBAAgHQADgJAAgLIAAgFIBXAAIAAgDMAiKAAAIQpAAIAAOUQgRADgGAAQgpgMgRgBIAAAAQAAgDgHAAQgQAAgNAHQgJADgCADQgKACgbAAQgmAAgEAGQgFAGgkAAQgJAAgRgFQgSgHgfgBQgTgBgMgIQgLgIgLAAQgSAAgQAGIgZAJQgcgDg6AIQg3AHghgOQghANgMABQgNgogihTQgfg5gKgbQgSgvAcgdIADARQAFgeATgpQAVguAGgVQApgXAzhLIAEBNQACAwAOARQAchDAbhdQArAjAtBsQALiCgphDQBCAQArAxQAChCg3gnQglgbhQgYQAOgMAugSQAogQAPgTQgdgTiDATQAjhnAAgCQgkAHghAoIgzBLQgMgggjgVIhEggQADAPAZA5QAWAxABAdQglgJgSgJIAEgHQg3hXiZgEQA9gZCJABQgog1hogRQhpgRg9AkQAMgcAEgPQAIgagKgTQhMAPhNBeQgigjg5gQQhCgRg2AUQAPAFASARIAdAdIAsAfQAZARAJARQhngMhnAhQgyAQhzA2QgYgggDgCQgRgEgNAMQgQAPgFABQADgBgUgJQgSAQgQgCQAAgKgMgPQgLgNADgRQgTgegmAGQgoAGACAqQgtAcgFAFQgYAXAJAkQgUgUgmACQglABgVAUQhVgegeAoQgKgJgTgBQgVgBgIALQgCAGAGAHQAFAFgGACQgyAFgDAUQAKAHBLgEQAMAvA4gHQAwgGAhgfQAVALAfgIQAagIARgPQAPASAiAEQAjAGASgSQAMAOAbABQAZABARgJIAgAUQATANARAEQAKgVAhgDIA/gDQAHgJAKgVQAWAKA7gKQAGgJAIgTQA7ASAPgcQACgVgOgMQgSgMgHgJQAGAAABgJQACgJAFAAQAbAABBgJQA6gFAeAOQjXA/AICvQAAAaANAFQBRicB+gzQgtBGAdBUQAeBWBPALQgiibAyg+QAiBaCBAnQArAdAMgCQBMB6AgBDQg2CDADB2QhCAPhJgFQgMAKgPAHQgtgGg+AJQhGAOglADQhBgKghAHQgNACgZAPQgaAPgPACQghgCgSACQggADg7ATQg8ASgdADQgzgDgYADIgLAEIAAAAIAAgCIgDgBIgNAJIgPAJIABAAIACgBIACgBIgLAIIgWANIgCAAIAGgEQgMAGgHACQgVAEglAAIgaAAgAtTDbQgGgLAMgbQALgZgGgFQgYA1ANAPgAuBC/QgCAOAEAHQAFgGAAgNQAAgMAFgHIAAAAQgJAAgDARgALYC/QB5gxA/AgQARgRAhAHIA+AOQA6AHBwgYQAMABAPAMQAZgKA0ARQAyARAagRQAEgEACgPQACgPAFgDIAtAUQAnAHA4gfQgJgogIgLIhBgFQgmgEgaANQgcAcgRACQgMACgggKQgggLgTACQgkAQgcAIIgygRQgcgKgYAAQgSAAgbAKQgfAMgNACQgOACg7gLQgsgHgWATQgRgkg5ARQhGAVgMgFQgIANgjAKQggALgHARQAiALBAgSQAIAGANAOgAFVCVQgaAEgOAPQAUAYAlgDQAWgCAugJIArABQAZABANgJQgFgMACgMQg3gRg8AbQgPgIgUAAIgNAAgAEYAqQAzADAOghQAYAaAxgRQAwgRglghQgCAAgWAHQgUgSgsAFQgnAEgWAQQgYgQgggCQgigBgXAQQgLgVggAFQgkAKgPACQgFAbAUAMQATALAYgNQARAXArAAQApgCAVgVQAJAJASASgAsqidQAMAGAFgDQgZgQgFgBQAAAJANAFgEghuAIpQgCgBjtgBIh+AAIAAs3QAMgEAPgUIAIAUQALARASAAQAQAAAKgKIALgMIAHANQAIAJAPAAQAVAAAKghIABABIAGAQQAHAOAMAAQAJAAAjgTQAEAUADAEQALATAeAAQAYAAACgWQADAEAEAAQAFAAABgDIAJghIANAKQAFAAABgCIABgiQAQAIAIAAQADAAAGgHQAFAFACAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBQAAgDAJAAIAFAEQABAVAFAQQABAHAIANQAGAKAGAEQAQAZAsArQgZgCgRAQQgJAJgRAVQgigWgQAIQAAAQAGAcQAJAHAZgOQADABAFAJQAEAGAIgCQAhgoALgEQAMAOAdgKQAggJAPAIQABAXgEAfQAngCARAaQAQAZgKAnQAbATAbBDQgZAdg5AEQgIhKgEgNQgMglgcAKIAAgCIgEAAQgDAAgHAJIgBABIAAAAIAAAAQgGAJgJAAQgHAAgIgHIgJgIIgggMQgLAAAAAcQgIAcggAAQgUgJgKgDIgWgJQAFgNgBgFQgMgkgTAAQgFAAgHAHQgIAHgOAAQgCgKgFAAIgCAAIAAAIIANARIgdATIgNAKQgJAFgHAAQgBAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABIAGAHQALAAAPAHQAPAHAPAAQARAAAIgMQAHgIAAgIIgBgDIAJAQQAMgDAFgDQAKATAFAGQgTARgDAPIAAAEIgFgCQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABgDgJAAQgIAAgHgFQgGgFgHAAQgfAAAAAdQABAIgFAKQgGAMgHAAQgEgDgDAAQgEAAAAAEIAIAGQArAAAJgDIAFABQACAJAVASIABANQABAMAHAAQAJAAAIgfQgBgQgNgQIgEgFQAGgGAMgUQABgDALgMQADgCALgCIAKgDQAEALAKAPQANAUAEAAQAPAAAVgcQAGAAAEACIAFACIABADIACAAQAZAXgKBRQAhAHASAKIAfgOQAeAQAVgFQACAVgNAeQgPAjgBAQQgDAqAjBJQAdA7gYAoQjJgDhQAFgAbGDsQAMASAKAxQAJAyAKATQgEAEgXAAQgaABgIAFQAKhlAKgtgAaogBIhfh6Qg9hMg3ghQgFgYAMglQAhgDBEgNIAOgCIBfA6QgvAVgTAOQgjAYgBArQAYgDA+gSQA7gRAkgCQgrAagUARQgkAdAOAnQAPgFAqgdQAigXAfgDQgXAggbA8IgtBhQgZgkgCgOgEgiJAAlQgEgFgCAAIgDAAIAAgCIAUgIQABAAAAAAQAAAAABAAQAAAAAAABQAAAAgBAAIADANIgDAAIgCABQgBACAGAEQgDABgIAAQAAgDgEgEgA4KgRQgfgEgIgRQALhggmgYQgEgVAIgaQAHgbgBgKQgCgigogUQgxgYgLgSQgIgNgFgmQgEgTgPgLIACgBIAAgUQgBgNAMgGQAUgMAAgHQgBgHAAgEQAAgJAJAAQAPAAAEAHIAHAJQADADAcALQADACAHANQgpAdgMAAQgJgFgEAAQgBAAAAAAQgBAAAAAAQAAABAAABQAAAAAAABQgBAFAQAQQARASAPAAQAQAAAGgQIACgLQAFAIAPAOIAJAQQAIANADAAIAEgBIABgDIgDgIQAAgHAIgOQAIgOAAgKQAAgagUAAIgNADIgGgaQABgHAHgFIACgBIAAABQADALAoAAIABAAIAAAEIAGAAQADAAADgCIAGAAQgCAvAGALIAFAAQATAAAZgnIAFANIACAEQgWA1gHAbQAMAJAcAMIgzA3QgWgUg7ANQAEALAQAWQAOATADAPQgEAJgPALQgPAMgDAKQAcgCAygPQgLA2ABAOQAXgDAmgwQAFAEASAFQAQAEAFAHQgYASgaArQAHABASgKIAKgHQAZgQALACQgLAMggANQgbAMgJARQgCAFgDARQgBALgLAHQgQAMgXAAIgKAAgA2ijKQADAGgGAAQgIABABAEQgJgEATgHgA9mkOQgtALgYg2IAAgOQgOgegHgMIAGgCQALAAAKgJQAIgHABgHIAJAIQAKAHAOAAQAQAAAMgOIAGgKQAGgHAFAEQAEAEAGgEIAAAAQgKAZAKAyQAwAUAJAKIADA9QgCAigUAEIgGABQgeAAgkhFgA2Oj9IAUgQQAUgQAIACQAMACACARQACAQALACIACAEIgMADQgLgPgUgQQgDARAAAYQgfgNAAgLgAmskFQgTgRgTACQAbgJA2gTQALAYgPAiIgEAAQgSAAgRgPgAoPkhQAAgFgCgCIgCABQABgEACgEQADgHAGgCIAWgLQARgCAOAIQAGgYAzAAQACgEAAgGQAMgCAAgGQAAgCgGgCQABAEgBABIgGABQAAgKgDgMQAEACAHAAQAMAAAVgLIABACIgCAHIgCAMIADAPQABAGADADIgNAMQAAAGAIAEQAGAEgBAHIgJgBIAAAAIgBAAIAAAAQgWABggAJQgqANgPABIAAAEIgKAAQgiAAAAgGgA2ilHIAnAFQAUAFACAQQgrAKgZABQgBgSAIgTgA1AmtIgUgGQAOgGAAgSQADAFAAANIADAAQAHAAAUgMIAMgJQACAQASAcQADgKAcgGIABABQgLAVAJAvQgGAJgPAPQgcgrgogtgAzTm4QAOgFAFgIQAEAGASAHIgeAAIgLAAgA2QnTIABAAIABAVQAAADADACIgWABQAMgMAFgPgA8goDIADACQAHgCALgIIAOAIQAIAAAHgPIAOAJIADgCIgIAMIgKANIgFADQgGABAAAIIgCABQgjAAgBgegA54n4IgHgHIAAAAIAAgGQgGgGgHgCQALgEAJgHQAMgLAAgHIAAAAIAYAAIgCABIgCAEIgBACQgEAGAAADIAAADQACANASgHQAVgHAJAEIAIAHIAFAJIgHgBQgZAAgDALQgDALgVAAQgUAAgLgJg");
	this.shape_22.setTransform(0,-98.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("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gBAPgNAaQgIAZAPAaIAugzQAegaAogBIgXAgIAAAAIgMAQQgWAcgIAaQB6gtAmAjQgNABgSAKQgRALgNABQgBAJAEAIQgJgOgRAKQgcAOgDABQAdAFAwABQAIgFgFgJQgGgKADgDQAHACADAKQACAJgFAGQADAEAQAFQANADADAJQgKAMgiADQgpADgLAGQAFAJAPATQALASgHASIgigHQABAOAPAOQAPAPgBAPQgYgHgQAAQgCAFAMAKQANALgDAMIAVgYQAMgOABgRQADADAYgNQAKADgNApIAegRQATgLATABQgHAaARAFQAFgnAFgJQANAAAJAMQAKANAGACQABgNAKgOQAOgSACgGQAEACgBAKQABALADABQAdgHgCgRQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIABAHQgCAJAFgBQABgFgCgLIgEgSIALAAIAEAYIAAAQQANgCAWAAIAsAWQAIAAAKgRIgHgGIgDABQgSAAgNgXQgJgSAAgLQAFgXAAgHQgjg7AAgvIAAgEIgCgTQgCgPgFgSQgIgigBgQIAAgDQABgKACgGQgNgZgQgvQgUg+gSgZQAphag6g1QAIgzAFgZQAJgrATgXQgIgfABgsQgagZAVg5QAXg/gLgZQAFADACALQAIgMgFgQQgEgOgJgGQBQhKASgpQACAIALgMQAPgSAGgCQALgCAKAJQA0gZANgaQASABACgBQAIgmAggiQgMgiARgkQAYgnAJgUQASABARgIIAdgNQgDAEgHACQAmADgPgTQAGgGABAMQABAMgIACQAVAFgNgkQAFABAGgKQAGgKgEgHQAJAIgCABQgGAFgBAJQACACAHgDQAIgDAHAEIAAgOIAQAsQAHAdgNAaQANANATAIQAYAKAMgKQAIAGAAAIQABAGgCARQAOgNgHAXIgKAbQACADAnAHQgDgEgTgGQgLgDAFgXQgDANAQAJQAUAKABAIQAWgFARAXIAFAIQATAZAFADQAJABAIgEIgOgLQAOAKALgDQgCgEgDgCQAOADAKgEQABgBgHgCQATgGAgADIAEABIgEgBQgEgEARAAIALAAIAHAAIAAAAQAZgEAlgJQAhgJAVgEQAFgDAVAAIAFAAIADAAIAJgBIADAEIABACQAEAJACATQAeADAmgOQAEACAJAMQAHAJAHgGQADgBgFgaQgmAG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IgQgPQgFARgNALIgIAHIgLgGIgKgHIgBgBIgKgJQgMgBgHAHIgNAPQgBACgEgBQgGgBgMgHQgHAQgHAFQgHgUgXgHQgWgGgTAMQgIACgCgKQgBgEgCgCIAAgBIgBAAQgDABgCADIgHAIIgGgFIgXACIgCAFIgPgRQgFADgEAEQgEAEgDAFIgEAMIgOgOIgMAIQgHAHgGAIIgBABIgDgOIgdAMIgKAFIgDgEIgBgHQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgCgCgEABIgFANIgEAJIgJgJIgCgCIgLADIgBACIgDAIIgCADIgDgFIgIgNIgEgGIgSAFIgBACIgCACIgBABIgEgNIgNgFIgJAAIgIAIIgCgEIgBgDIgCgRIgPgCIgEAIQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgGgJgEgLQgHADgHAFIgHAFIgEgGQgFgBgDACQgKAEgKAHIgKgHIgNAGIgGAEIgEAFIgTgPIgNAEIgCADIgCAJQgSgMgRANIgKAIIgJgQIgHgFIgbADIgOgLIgLADIgEAEIgGAHIgKADIADgJIAAgIIgDgEIgSAGIgMABIgBgOIgGgGQgGAHgIAFQgHAFgKADIgFgQIgFgBIgPAdIgEADIgHgJIgNAJIgHAGIgIgIQgNgEgLAHIgRANIgYgPQgFABgEADQgIAHgCAKIgDALQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgGAAgFgMQgFgLgGAAQgMAAgDANQgDANgCAAQgMgTgGgEQgGAFgDAOIgDAJQgCAEgBAAQgEAAgLgMIAAAAQgJgDgEAEQgDADAAAHQgagSgnASQgBgbgCgCQgMgDgIAIQgLAJgDABQgEgYgNgCQgUABACAWQgHgBgGgHIgKgMIgKAFIACACQgEAFgNAEIgJAEIgUAFIgGgBIAAgDIAAgBIAAgIQAAgBABAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgHAAgIAFQgIAGgFAAQgOAAgEgSIgfAMIgGgBQAAgDgIgWQgFABgKALQgKAKgOABQgFgDgCgIIgEgOQgFAEABARQAAACgFAAIgTgZQgDAFgEADQgEADgEAAQgLAAAAgIIACgIQgPgIgPAAQgNABgNAHQgBgHAJgFQAIgGABgFQgPgNgNAdQgHACgCgHQgDgIgEAAQgKAMAG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");
	this.shape_23.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BkScene, new cjs.Rectangle(-253.9,-155.5,507.8,310.2), null);


(lib.Barb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F9F9").s().p("AAAABIAAgCIABACIgBABIAAgBg");
	this.shape.setTransform(152.5,147.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFAFA").s().p("AADgBIAEAAIAAABIgNACg");
	this.shape_1.setTransform(156,148.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("AgBAmIAAgBIAAABgAAAghIACgEIgCAHIAAgDg");
	this.shape_2.setTransform(146.5,40.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AgHABQAAgBAAAAQABAAAAAAQAAAAABAAQAAgBABAAIAHgBIAFAAIgMAFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_3.setTransform(185.2,192.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFCFC").s().p("AgCADQACgDAAgEIADAJg");
	this.shape_4.setTransform(185.1,191.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("Ag6BrIgDAAIgDgCIgCgCQgNgHgGgPIAAACQgeg7ASg3IAEgSQADgNAKgHIACgBIACgDIABAAIACgCIATACIAAgEIAJAFIAIABQAJABAHAHQAQASACAZQADA3gKA2IgBADIAAACQgCAEgEADQgLAJgNAAQgIAAgJgDgAABBOQgDgKACgMQAEgZgBgaIgDgrIAAgIIgBgIIgJgXIAngRIAJgFIALgEQAMgDAKADIAFgGQAIAKAGALIAAABIADAFQAPAhgFAkQALA7gyAiIgEACIgCAAQgDAHgGAGQgKAFgJAAIgEgBQgFAAgFgDIgJAJIgQAFg");
	this.shape_5.setTransform(153.6,138.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#030303").s().p("AgIAGQADADAIgDIACgGIABgHIADAMIgPADg");
	this.shape_6.setTransform(179.3,133.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33CCFF").s().p("AgdC7QAQADAEgRQAHgagYgFQgXAFADAaQABAJAIADIABAAIABAGIgJgHQgGgKgJgJQgOgMgNgNQgRgYgXgTIgLgKIgIgKIgKgUIgBgCIAAgDIgBgBIgFgBIgCAAIgBAAIgBgCIANgfIgDgDIAAgFQgBgIADgGIADgEIABgCIAChLIAaAMIgBADQgCALAJAGQAKAIAOgCQAJgCAEgIQAMgegjgEQgNACgFAMIgRgKIACgLIgHgJQBBhJBfAIIAKAJIgCgGQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQALAPgLAYQgLAZgYANIAHAGIArg4IAAgXIAnAXIACgDIAAgEIgEgJIAOgKIASgYIAEAAIAJgBIAAABIADgBQAIgCAHABQAQADAGATQAKAkgbAdQgHAHgIAGIAEAAIgIADIgEADQAFgfghgDQgRADAAATQgBAIAEAGQAKAOASgCIADgBQgEAGgBAIIgHAHIgEAFQgRAZgPAbIgGALIgIALIAAABIAAAAIgDAPIAAAHQgDAEAAAEIAAAFIgBACIgBABIgBAIQgBADgCACIgEAKIgFATIACgNIgEAEQgRA4gjAwIgCACgAg1BiQAAAGACAEQANAVAbgIQAJgCABgJQADgegegHQgYACgBAXgAhuAtQgXAEABAYQABAHAFAEQAJAHANACQAUACAEgSQAGgggeAAIgGAAgAgdAPQgNAbAfAHQAdAIAAgfQAAgZgagBQgOABgHAOgAhegNQgEANAJAJQAOAQATgKQANgHgBgNQgDgYgbgBQgPABgFAQgAANhCQgRABgBASQAAAFACADQAJASAVAGQAPAEAHgMQAFgKgEgLQgJgWgYAAIgEAAgAAYhkQgCAaAbgDQAMgBADgMQAFgYgYgGQgUAAgBAUgAhIiOQgPACgGAPQgGARAPAKQALAHAPgBQAJgBAEgIQAJgYgUgLIgBgBQgFgFgGAAIgEAAgAgKigQgOABgFANQgEALAGAJQAKANAQgFQAKgDAIgLQADgFgBgHQgFgRgQAAIgIABgABpidQgEAbAcgCQAMAAADgMQAJgdgegDQgPACgDARg");
	this.shape_7.setTransform(184.8,70);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0B0B0B").s().p("AAMASQgGAAgFgDIgBAAIgBgCQgCgFgEgFIgLgNIgCgHQABACAEAAIABACIAAABQABAKAIAHQAMAKAOADIgGAAIgDAAg");
	this.shape_8.setTransform(184.6,28.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkE4IgHgCIAAgBQgJgDAAgJQgDgaAXgFQAYAFgHAaQgEAPgMAAIgFAAgAg5DoQgDgEABgGQABgXAYgCQAfAHgEAeQgCAJgJACQgHACgGAAQgRAAgJgPgAhuDZQgNgCgKgHQgFgEAAgHQgCgYAYgEQAkgDgHAjQgEAQgQAAIgDAAgAgSCtQgegHANgbQAHgOAOgCQAaACAAAZQAAAZgTAAIgLgCgAhgCFQgIgKAEgNQAEgQAQgBQAbABACAYQACAOgOAHQgHAEgGAAQgLAAgJgKgAAVBsQgVgGgJgSQgDgDABgFQABgSARgBQAbgCAJAYQAFALgGAKQgFAJgKAAIgGgBgAh7BFQgIgGACgLIAAgDIACgEQAFgLAOgDQAjAEgNAeQgDAIgJACIgGAAQgLAAgIgGgAARAXQACgUAUAAQAXAGgFAYQgCAMgMABIgGAAQgWAAACgXgABNAhQgEgGAAgIQABgTARgCQAhACgGAfIAAABQgCAKgJACIgCABIgGAAQgOAAgIgMgAhbAZQgOgKAGgQQAFgPAQgCQAJgBAGAGIAAABQAVALgKAXQgDAIgJABIgFAAQgMAAgKgGgAghgCQgHgJAFgLQAFgNAOgBQAXgEAFAUQACAHgEAFQgHAKgLADIgIACQgLAAgGgJgABjghQACgRAQgCQAdADgIAdQgDAMgMAAIgDAAQgaAAAFgZgAAXkYIAGgBQADAAADgDIgFAEIgEAAIgDAAgAAPkjQgGgCgGgEIgCgBIgBgCIgBgBIgCgCIgCgCIAFAAQAIgCAIgBIABAAIAJgBIAPgCIAAAAIADAAIgBACIAAABIgBABIAAAAIgBACIgBABIAAAAIgDAFQgGAKgIAAIgIgCg");
	this.shape_9.setTransform(185.4,57.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0033").s().p("AgfAMQgJgHgBgKIAAAAIgBgCQgDAAgCgCIAIgDIAAABIgBACIAAABIAEADIAMALQANAMAPABIAIAAIAFgEIABgCIAKgMIAFgGIACgDQABgEAAgEIgCgFIgDAAIgjAFIgBAAQgPADgOgBQANgDAPgBIA2gGIgKAUQgHANgMALIgYAGQgOgDgMgLg");
	this.shape_10.setTransform(187.3,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBFBFB").s().p("AABgCIAIgBIgHADIgJAEIgBAAg");
	this.shape_11.setTransform(177.2,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#040404").s().p("AgQAJQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIABgBIALADIgBAAIgHAAgAgEAJQgDgDgHgBIARgFIAMgIQAJACgFAGQgGAJgPAAIgCAAg");
	this.shape_12.setTransform(187.8,21.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020202").s().p("AgMgIIAbgHIAOAOIgcgGIgdAXg");
	this.shape_13.setTransform(181.3,15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#070707").s().p("AgKAKQgEgEAAgGQAAgFAEgFQAFgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_14.setTransform(183,18.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#414141").s().p("AANAFQgKgFgKAAIgHgEQAMABALAEIAGAEIgCAAg");
	this.shape_15.setTransform(185.4,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFD0A0").s().p("AAdHWIgBgLIgBgZIgCgOQgEgPgHgPIAAgCQAAgNANgBQAOADAEAPIACAGIABACQAHAOgCAPQgBAFABAFQACAJAAAJQAAAJgCAIQgCAJgKAAQgNgBABgMgAA+HBIgCgEQgBgFAAgGIAAgOIAAgFIgBgMIgBgDIAAgBQgCgHABgGQABgFAEgFIAEgCIAEgBQAOADABAPIABAIQACAOgBAOIAAAOQAAANgNAAQgIAAgDgFgAjWG2QgFgCgBgEIAAgCQgEgKAAgKIgCgcIABgHQACgHAKAAQAKAAACAKIACAHQAEgYgDgaQgEgdAEgdIADgPIADgSIgBgHQgEgOgBgPQgBgJAEgJIACgEQADgIAJAAQAOADgBANIAAADQgCAJABAJQAFAFAAAIIAAASQAAAbgDAbIgBAaQgBAHgCAFQACAbgDAaIAAABIAAAAQgDAUgHASQgDAGgGACQgGADgGAAQgFAAgGgDgACZFnQgFgCgBgGQgCgPADgPQADgOgCgPQgEgZgMgXIgHgMQgGgNAAgMIAAgBQAAgDACgDIABgBIAFgCIAEgBQAOACADAPIADAHQANAbAIAcQACAHAAAIIAAAGQACARgCARIgCAMIgCAIQgCAKgJAAIgHgBgAjqEaQgDgCgCgEIgBgHIAAgLIgFg3QgBgPABgPIAAgCQACgSAHgQQADgHAGgFQAFgFAJgCQARgDACAPQAAAGgDAEQgEAEgGAAQgLAQgBAUQgCAdAGAdIABAIQABAPAAAOQAAAEgCACQgFAFgFAAQgEAAgFgEgAhJEFIgCgKQgBgHgFgFIgHgHQgJgIgHgKQgKgPAPgIIAEgBQAFABAFADQAFAEAEAGIADAEQAMAJAHAOIACACQAIARgIAQIgDADIgHACQgIAAgDgKgACMgzQgOgCACgOQABgGAFgDQAGgRAQgKQAUgMAXgBQALgCAKAEQAAgJgCgIQgDgNgIgLQgngDgiAVQgOAJgKgNQgCgCABgEIAAgBQgGgDgDgGQgJgUACgVQABgFAFgCIAGgCQAGACAEAEQAFAEAAAJQABAMAFALIALgFQAbgLAcgCQAKgCAKADIADABIAEACQAJAEAFAIQAIANAEAPQADAOgBAPIgBAFQAAAGgGAEQgGAFgHgDQgDADgFABIgFACQgSAEgSAFIgFADIgSARIgIAGIgCABIgDAAIgCAAgAAZigQgGgDABgHIAAgEQACgIAFgHQAEgFgBgHQgCgHACgEQADgGAJgBIAKAEQAFAFAAAJQAAAJgDAIQgDAKgGAJQgEAHgHAAQgEAAgFgCgAAnjtQgNgFgLgKQgUgTgGgbIgBAAIgBgKIgHgmQgDgPACgRIABgEIAEgJQAEgGAIgDIAEgCQAQACgEAPQgBAGgFAFIgBADIgBALQAFAYAEAYQAEAaATAQQAKAIAMABQAFgDAFAAIABAAIABAAQAFACAEAGQAEAHgFAHQgEAIgJAAIgFAAQgLAAgKgDgACulJQgJgFACgMQAEgOgDgPQgHgXABgYIAAgEIgCgaQgQgEAFgPIADgFIADgDQAEgDAFAAQAPACAEAPQAFARAAASQABAVADAVIABACIABAFQADALgBAMIgBAPQgCALgJAEIAAAAIgEABQgDAAgDgCg");
	this.shape_16.setTransform(177.4,57.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#494949").s().p("AgeANIAHABIADAAIgHABIgMABgAAcgLIAMgEIgQAMIAEgIg");
	this.shape_17.setTransform(189.9,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4C4C4C").s().p("AgCAGIACgGIACgJIABACIgDARIgCgEg");
	this.shape_18.setTransform(201,7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("AlIOQIAFgXIgfAiIgBgJQgMARgLgLIgDAEIgPAAIAOgLIABgCQAJgRASgHIAFgBIABAAQAPgdASgZIABgCIAWg+IAQhEQABgIAEgFQABgkADgoIACggIAAgBIgKhSQgBgPAAgPQADg7ANg6QAGgXAKgVQAGgbAAgcIgTgtIAAADQgJgNgJgRQgYgtgQgyQgNgbgMgcQgZg7AFhDQABgOAGgNIAHgUIgCgDIAGgRQACgUAFgUQAFgTAMgJQAHgPALgNIAJgJIAMASQgFgDgFgBIgEABQgPAIAKAPQAHAKAJAIIAHAHQAFAFABAHIACAKQAEANAOgFIADgDQAIgQgIgRIgCgDQASARAQATIAYAZQARAZAMAbIAGADIAKA0IgDgGQgEgPgOgDQgNABAAANIAAACQAHAPAEAPIACAOIABAYIABALQgBAMANABQAKAAACgJQACgIAAgJIAAACIgWEiIAGAEQgGAmgBAqQgBAUgEATIgOBTQgLBFgVBEIgCAKIABADIgHAMIADAHIgZBoIgCAFIgFAMIABACIgfB0IgeAHIAOgbIgGgBIgTAdIgVABgAi1E+IAQgEIgDgNIgBAIIgCAGQgJADgDgCgAjCOOQgKgEgIgMQgHgNgDgPIgFgLQgEgFgBgHIgCgFIAAgBQgDgPAAgRIACgXIgBgHQABgGACgEIACgGIAHgQIAAgDIABgBIAFgRIACgFIADgEIAtjuIAFgFIAcjuQgGgYAIgYIAAgEIAHgiQAAhIgFhJQADAGAIAAQANAAAAgMIAAgOQABgOgCgOIgBgIQgBgPgOgDIgEABIgEACQgEAFgBAFIgGgsIANgRIAehBIABABIAag2QAAAMAGANIAHAMQAMAXAEAZQACAPgDAOQgDAPACAPQABAGAFACQAPAFADgOIACgIIACgNIAAABQAOAngNAoQgKAggDAgQgCAUgJASIgEAHIgCAOIgDAGIACAGQgIA0gMA1IgBAHIgBAFQgBAPgEAPIgJAcQgJAcgQAZIgHAJIABAAIAFABIADgFIAAAGIABABIABAAQAHAFACAJQADALgDAKIAAACIAAAEQAAAPgIANIgCAFIgUA4IgHARIAAABIgBAEIgBADIgBAIIgIAdIgFASQgEAOgBAPQgDAegIAcQgCAIgEAHQgDAHgBAIQgBAWgFAVQgBAJgEAIQAHASAAAUQgBAOADAOIADANIAAACIALAYQASAGAQAOQAHAGAEAIQAEAKgCAHQgBAFgCADIgDADQgEgYgVgOIAAAAIgDABIgBAAIAAABIgBACIAAABQAAADACACQAMAPAJASIABAAIgGADIgIADIAAgBIgBgCIgBgBIAAgCIAAgBIgBgCIgJgOIgBgCQgDgIgIgEIgCABIgCABIAAADIACAJIABACIAHAJIAAADIABACIADADIADAHIgOAFIgFABQABgUgKgQIgEgBIgCAAIgCABIAAADQgBAFABAFIABABIADADIABADQABADAAAEIABABIABACIgBADIABAEIgBAAQgGAAgGgDgAnBA1IAKgGIAWg+IADgBIAAACQABAEAFACQAMAGALgGQAGgCADgGQAIgSACgUQABAdgDAdQgCAYgJAYIgUgyIgJAFIAJAiIgBgmIASA6IgGAWgAiGgfIgBgPIAAADIABAMgAmLhEQgCgKgKAAQgKAAgCAGQgCgagFgaQgEgXgCgXQABAEADACQAKAJAJgKQACgCAAgEQAAgOgBgPIgBgIQgGgdACgdQABgUALgQQAGAAAEgEQADgEAAgGQgCgPgRADQgIACgGAFIAihYIAFgEQAchFAig8IAOgZIAAgBIACgCQAOgRALgRQADAAADgCIAAgBIBegKIAGgFIAAAFQgBAHAGADQANAGAHgLQAGgJADgKQADgIAAgJQAAgJgFgFQAgAMAjgLIgEALIAAABQgEgDgGgCIgGACQgFACgBAFQgCAVAJAUQADAGAGACIAAACQgBAEACACQAKANAOgJQAigVAmADQAIALADANQACAIAAAJQgKgEgLACQgWABgUAMQgQAKgGARQgFADgBAGQgCAOAOACIAFAAIgFAFIgZgJQgJgYgYgHIgBACIANAHIAKAVQhAgKg9AdQgnATgVAlIAIgqIgEAHIAAABIgEAJQgbA9gXA+QgPAogWAlIgBABQABgOgOgCQgJAAgDAIIgCAEQgEAJABAJQABAPAEAOIABAHIgDASIgDAPQgEAdAEAdQADAagEAYIgCgHgAhDj9IACADIgFADgAA8j/QgmgngKg0IgFggIANAKIgQgYIAYgVIAEgKIACgHQACgEAEgCIAGgEIABAAQAbgBAHAbQAIAbAMAYIAEAHICTifIABgPIALgOIABgGQgGgGADgMIAGgbQACgLAEgLIAFgOQABgEAEgCIACgCIAJAAIACABQAGACABAGIgBAKIAAABQgJAagGAcIAFgCIAAAAIAAgBIgBgCIAAAAIABABIAAAAQAKAAAJgFIADgBIABAAIAAAAIABgBIAEAAIABAAIABAAIAAgBIAHAAIABgBIABAAIAAAAQAGgBAFgCIAGgBQANgBAKgIQALgJAGgNIAHgOIAAgBQAGgKAIgKIABgBIACAAIgBABQgCAGAAAGIgBABIAAABIAAABIgBACIAAAAIgBABIAAABIgBACIAAABIAAACIgBABIAAAAIgBABIgDAFIAAABIAAACIgBABQgBADgCADIAAABIAAABIgBAAIgCAEIAAACIgBAAIgBABQgCAFgFAEQgGAFgHADIABABIAAABQAGAAAFgDIABgBIABAAIAAgBIABgBQAOgOAFgSIABgBQACgDAAgDIACgCQADgJABgJIAAgBIACgDIAAAAIAAgBIAAAAIgBgBIAKgBIAAABIgBAFIAAABIgBAAIAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIAAAAIgBADIgBABIAAACIAAABIgBABIAAABIAAABIgBABIgBABIAAABIgBADIAAABIgBACIAAAAIgBABIAAABIAAACIAAABIgBABIAAABIgCAEQAAAEgDADIAAABIAAAAQgKAQgOAMIgGACIAAABIAAACIADAAIAEgBQALgGAGgLIADgFQAJgJADgMIAAgBIAHgUIAAAAIABgBIAAgCIAAAAIABgBQADgGgBgIIADABQAIAAAIAEIAAAAIABABIABAAIAAABIAAABIgCAEIgBABQACAEAAAEIAAABIgDAGQgBAFgDAEIAAAAIAAABIgBADIgBABQAAADgCADIAAABIgEAFIAAABIAAABIgDAEIAAABIgBACIgBAAIgBADIAAAAIgCADIAAABIgOAPIAAABQgDAEgEADIgHADQgSARgaAKIgEABIgUAJIgPAGIgFADQgWAPgUARIgFAHQgmA1gnA0IgHADQgsA5g6AvQgEADgGABIgHgBgAGDo3IAAABIAAACQADABACgBQAEgCAFAAIAAAAIABgBIABAAIAGgHIAAAAIAEgFIACgEIABgCIADgHIAAgCIABgIIABAAIABgDIABgCIADgIIABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIABgBIAAgCIABgBIABgBIAAgBIAAgCIABgCIACgFIAGgHIABAAIAAAAIAAgBIADgDIAAgBIAAgBIgBAAIgBgBIgBAAIgKALIgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIgBABIAAABIgBABIAAADIgBAAIAAABIAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIAAABIAAABIAAAAIgBABIAAACIAAAAIgBABIgBABIAAAAIgBADIAAABIAAAAIgBABIgBABIAAABIgBACIAAABIAAADIgBAAIgBABIAAACIAAADIAAAAIgBACIAAACIgEAJIgBAAIAAABQgEAGgFAFIgBAAIgBAAIgIABIAAABIAAAAIgDABgAGkpGIgBABIAAAAIAAAAIAAABIgBAAIAAABIgBABIAEgFIgBABgAm3kTIAAACIgCAEgAAroTIgDgBIgCAAIAAgBIgCABIgNgBIgDgBIAFgCQAGgBACgDQAHADAGgFQAGgEAAgGIABgFQADARAAASQAAADACADIgCAKQgBgPgMgKgAEqo9IABgBIgBABgAGEptIAAABIgBAAIABgBgAASp1IACAAIABABIgDgBgAGSqEIABgCIgBADIgBABIgBABgAihqaIACgEIAIAEQgJABgDAGgAiaqtQAMAEAOAAQAJAAAEgIQAFgHgEgHQgEgGgFgCIgBAAIgBAAQgFAAgFADQgMgBgKgIQgTgQgEgaQgEgYgFgYIABgLIABgDQAFgFABgGQAEgPgQgCIgFACQgHADgFAGIAbg4QBJABBCgfIADABIgDAFQgFAPAQAEIACAaIAAAEQgBAYAHAXQADAPgEAOQgCAMAJAFQAFADAFgCIAAAAIgTAjQgPAcgVAYQgQAUgZABIgEAAQgaAAgTgSgAhVsJIgiADIgaAJIgDACIAHAKIAAABIAMAOQAEAFACAFIABACIACAAQAFADAGAAIACABQAOAAAOgBQADAAACgDQALgJAIgLIACgGIACgEIAFgHIAFgFIAAgEIgBgCIAAgDIgBgCIgCgCQgSAEgTAAIgDAAgAheslIAAAAQARABAHgKQAFgHgJgCIgMAJIgSAFIgCAAIgBgBIAAgBIgEgBQgDgBgDAAIAAAAIgBABIAAAAIACACIAHACIgBABQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIAHAAIABAAIAEAAgAiUtSQgFAFAAAGQAAAGAFAEQAEAFAGAAQAGAAAFgFQAEgEAAgGQAAgGgEgFQgFgEgGAAQgGAAgEAEgAhHtgQgHACgBAJQAAAKAHADQACACAEAAQADAAACgCQAFgBABgGQAEgLgJgFQgDgCgDAAIgFABgAintwIgRAaIAfgZIAcAHIgPgPgAhatsIAagRIAbAKIgWgTgAAAtBIAAACIAAACIAAgEg");
	this.shape_19.setTransform(196.8,102.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDFDFD").s().p("AgKgBIANgOIAAAJIAGAAIAAAAIAAAAIgBAGIAAAGQgBADACADIACADg");
	this.shape_20.setTransform(221.7,39.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663300").s().p("ADlEMQgPgEgIgQQgNgKAAgSQAAgYAKgTIABgEQgKggADghIgUgmIgDAAQgGgCgEgFIgBgBQgKgCgJgFQgQAJgQgCIgDADQgTAHgJgJIgBABIAAgCQgEgFgCgIQgCgKADgHIgBgJIBBhtIAHAAIgEgPIAGgHIgBglQgFgFgEgGIACgCIADgBIAAgCIAAgCIgBgCIAIAAIgNgHQACgOgBgOIAAgBQAAgTgFgSQgBgGgDgDQgDgFgEgCQgFgCgIABIgMAEIgDAIQgMAUghgCIgDAAIgHgBIgJADIg6AMIgMgEIgBgIIgHACQgJAEgJgBIgBACIAGALIgPAuIgaAjIAWgKIgFAMIAFAhIAHAHIgDAUIAKAKIAAABIgBAAIgBgBIACAHIgCARIANAVIgCAHIAIAIIABAAIABAAIACgEIAQAUIgfAtQgfgFgZAKIAAAAIgBgBIgBgBQgHABgGADQgNAJgKAOIgIALQgQATgNAWQgZAugbAsIgBADIAAABIABAAIABAAIgaA+IgMACIgFAGIgcgDIgDgQIAWgNIgYAGIgHgKQg1ARgggrIgBgBIAAgDQAAgTgEgSIAUguQAKgXAZgKIAVALQgLgVgIgYQgMgiATggIAHgEIACgKIANgFIABgKIBQggIABACQALgFAKAAQAKABAHACIAAgEIgdgaQgIgnAegZQAMgcAhACIANgCIAOgGIAGAJIAGACIgCgKIAIAEIAHgEIAVABIgLgEQgHADgJgBQgjgCgGghQgJgOAIgXQASguAyACQAEgRATgKQANgHAMAAIAKgCQAJgNATAAQANgBAJADIAIAEQAKABALAFIACAAIACAAIAJgBIAMgCIABAAIANACQAIADAFAFQAXgMAbADIAJgBQAbAEAGARIAHAOIgGAHIAAgBIgDAJIgCAGIABAEIgJAYIgYAcQAAAPANgOQAEgEAGgEQAhgTAfARIgCAGQAdAEgGAfQgEAZgVAOIABADQAAAAAAAAQABAAAAABQAAAAAAgBQABAAAAAAQAHgDAHgGQAYgEAYAAIARAFIADACQAIAGAGAHIgZAfIAbgbQAKAtglAiQAUgOAWgEQAJgGALABQA0gBgBAyQAAAHgEAEQgKAQgOAKQgTAhgiARIAggJIAZARIgCA0QgrA3hGgJIAAAAQA1AOAtghIAGgFIgBAMQgTAggjAOIAFAEIgsAzIghABIAfAFIgvAsg");
	this.shape_21.setTransform(182.9,33.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("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HgNgMgJIgDgEQgEgGgFgEIgMgSIgJAJQgLANgIAPQgLAJgFATQgFAUgCAUIgGARIACADIgIAUQgFANgBAOQgFBCAZA8QALAcAOAbQAQAxAXAuQAJARAKANIAAgDIASAtQABAcgGAbQgKAVgGAXQgNA6gDA7QgBAPACAPIAJBSIABABIgCAgQgDAogBAkQgEAFgBAIIgQBEIgWA+IgBABQgSAagPAdIgBAAIgFABQgSAHgJARIgBACIgOALIAPAAIADgEQALALAMgRIABAJIAfgigAgviNIgdBBIgNARIAGAsQgBAGACAHIAAABIACAOIAAAFIAAAOQgBAGACAFIACADQAFBIAABJIgHAiIAAAEQgJAYAHAYIgdDuIgEAFIgtDuIgDAEIgDAFIgEARIgBABIAAACIgHARIgCAGQgCAEgBAGIAAAHIgBAXQAAARADAPIAAABIACAFQABAHAEAFIAFALQACAPAIANQAHAMALAEIABACQADAEAEAAQADAAACgCIgBgBIAAgEIAAgDIgBgCIgBgBQABgEgCgDIgBgDIgCgDIgBgBQgCgFACgFIAAgDIACgBIACAAIADABQALAQgBAUIAFgBIAOgFIgEgHIgCgDIgBgCIAAgDIgHgJIgBgCIgCgJIAAgDIACgBIACgBQAHAEAEAIIAAACIAKAOIABACIAAABIAAACIABABIABACIAAAAIAIgCIAFgDIgBAAQgIgSgMgPQgCgCAAgDIAAgBIABgCIAAgBIABAAIACgBIAAAAQAVAOAFAYIACgDIAGACIgCgKQABgHgEgKQgDgIgIgGQgPgOgTgGIgKgYIgBgCIgCgNQgDgOABgOQAAgUgHgSQADgIACgJQAEgVACgWQABgIADgHQAEgHACgIQAIgcACgeQACgPAEgOIAFgSIAHgdIACgIIABgDIABgEIAAgBIAHgRIAUg4IACgFQAHgNABgPIAAgEIAAgCQADgKgDgLQgCgKgHgEIAAgDIgBADIgCgBIABgGIgEAFIgEgBIgBAAIAGgJQARgZAJgcIAIgcQAFgPABgPIABgGIABgGQALg1AIg0IgCgGIADgGIACgOIAEgHQAIgSACgUQADghALggQAMgngNgnIAAgBQABgRgBgQIAAgGQAAgIgDgHQgIgcgMgbIgDgHQgDgPgNgCIgEAAIgCgDIgDAGIgBABQgDADAA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gBIABgCIAAgBIABgBIAAgBIAAAAIABgBIABgDIAAAAIABgBIABgBIAAAAIAAgCIABgBIAAAAIAAgBIAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgBIAAgBIABAAIAAgDIAAgBIABgBIAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIABgBIAKgLIABAAIABABIAAAAIABABIgBABIgCADIAAABIAAAAIgBAAIgGAHIgCAFIgBACIAAACIAAABIgCABIAAABIgBACIAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABIAAAAIgDAIIgBACIgCADIAAAAIgBAIIgBACIgCAHIgBACIgCAEIgEAFIgBAAIgGAHIgBAAIAAABIAAAAQgFAAgEACIgCAAIgDAAgAHXoXIABAAIAAAAIAAgBIABgBIACgBIgEAEIAAgBgAFepRIABgCIAAgBIAFADIACAEIAAAEQgBgGgHgCgAg2qlIgCgBIAKAAIAYgFQAMgLAHgOIAJgVIg2AGQgOABgOAEQAPAAAOgDIACAAIAjgFIAEABIABAEQABAEgCAEIgCAEIgEAGIgLANIgBABQgDACgEABIgFABQgRAAgNgMIgMgMIgDgEIAAgBIAAgCIABgBIgIADIABAHIAAgBIgIgKIAEgCIAZgJIAjgDIADAAQASAAASgEIACACIABACIAAADIAAACIAAAEIgFAFIgEAHIgCAEIgBAGQgJALgKAJQgCADgDAAQgOABgNAAIgCAAgAghrKIgJABIgBAAQgIABgJACIgGAAIADACIACACIABABIACACIABABQAHAEAGACQAOAGAIgOIADgFIAAAAIABgBIABgCIAAAAIABgBIAAgBIABgCIgDAAIAAAAIgPACgAhEqpIgBgCIACACIABAAIgCAAgAgsr4IgMgDIgGgCIgDgCIABAAIABgBIAAAAQADAAACABIAFABIAAABIABABIACAAQAGABAEADIAAAAIgEAAgACRsHIgBgDQAUgOAFgZQAGgfgdgEIACgGQgggRggATQgGAEgEAEQgNAOAAgPIAYgcIAJgYIAEgSIAGgHIgIgOQgFgRgbgEIgJABQgcgDgWAMQgFgFgHgDIBXgNIAbAXQAGAQgCAUQgCATgIAPIAmADIAoAlIABAMQABAHAEAGIgBAJIAGgBIAGAFIgRAGIAdAHQgYAAgXAEQgHAGgIADIAAABIgBgBgAgSsbQgHgDAAgKQABgJAHgCIAEgBQAEAAADACQAIAEgDAMQgCAGgEABQgDACgDAAQgDAAgCgCgAgFtZIAUATIgagKIgZARg");
	this.shape_22.setTransform(191.5,98.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140.6,0,101.7,196.3);


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


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


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
		var bgm = createjs.Sound.play('bgmVS',{loop:-1});
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
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
		
		 window.open ("subj_Scene2.html","_self");
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


// stage content:
(lib.subj_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1_repeat:62});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_1 = function() {
		playSound("sax_lick");
	}
	this.frame_17 = function() {
		playSound("thesubjunctivemood");
	}
	this.frame_61 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_67 = function() {
		this.gotoAndPlay("scene1_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(16).call(this.frame_17).wait(44).call(this.frame_61).wait(6).call(this.frame_67).wait(1));

	// content
	this.instance = new lib.Barb();
	this.instance.parent = this;
	this.instance.setTransform(72.3,259.3,0.789,0.789,0,0,0,190.1,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68));

	// Layer 10
	this.instance_1 = new lib.SubjMood();
	this.instance_1.parent = this;
	this.instance_1.setTransform(350,157.7,0.749,0.749,0,0,0,140,54.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13).wait(42));

	// Bk
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAAA7QgXAAgSgRQgRgSAAgYQAAgXARgSQASgRAXAAQAZAAARARQASASAAAXQAAAYgSASQgRARgZAAg");
	this.shape.setTransform(103.4,156.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpAqQgSgSAAgYQAAgYASgRQASgRAXAAQAZAAARARQARARAAAYQAAAYgRASQgRASgZAAQgXAAgSgSg");
	this.shape_1.setTransform(103.4,156.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.3,1,1).p("AC5gmQAAAtghAhQghAgguAAQguAAgfggQgfgfgCgrQAAgCAAgCQAAguAhggQALgNAPgHQAXgNAcAAQAuAAAhAhQAhAgAAAugAh8CWQgZAAgRgSQgSgRAAgZQAAgYASgSQARgRAZAAQAYAAASARQARASAAAYQAAAZgRARQgSASgYAAg");
	this.shape_2.setTransform(115.9,147.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AimCEQgSgRAAgZQAAgYASgSQASgRAYAAQAZAAARARQARASAAAYQAAAZgRARQgRASgZAAQgYAAgSgSgAgEAoQgfgfgBgrIAAgEQgBguAhggQALgNAPgHQAXgNAdAAQAtAAAhAhQAhAggBAuQABAtghAhQghAggtAAQgvAAgfggg");
	this.shape_3.setTransform(115.9,147.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3,1,1).p("AGLAAQAABDgvAvQgvAvhCAAQhDAAgvgvQgvgvAAhDQAAhCAvgvQAvgvBDAAQBCAAAvAvQAvAvAABCgAgZgjQAAAtghAgQggAhguAAQguAAghghQgfgfgBgrQAAgBAAgCQAAguAgghQANgMAOgIQAXgMAdAAQAuAAAgAgQAhAhAAAugAlPCYQgYAAgSgRQgRgSAAgYQAAgZARgRQASgSAYAAQAZAAARASQASARAAAZQAAAYgSASQgRARgZAAg");
	this.shape_4.setTransform(136.9,147.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB5ByQgvgvAAhDQAAhCAvgvQAvgvBDAAQBCAAAvAvQAvAvAABCQAABDgvAvQgvAvhCAAQhDAAgvgvgAl5CHQgRgSAAgYQAAgZARgRQASgSAYAAQAZAAARASQASARAAAZQAAAYgSASQgRARgZAAQgYAAgSgRgAjXAqQgfgfgBgrIAAgDQAAguAgghQANgMAOgIQAXgMAdAAQAuAAAgAgQAhAhAAAuQAAAtghAgQggAhguAAQguAAghghg");
	this.shape_5.setTransform(136.9,147.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AehiQQBzBhAACGQAABcg2BLQA/BQAABkQABCQiDBmQiCBli5AAQhgAAhSgbQggBHhKA5QiCBmi5AAQi5AAiChmQgLgJgLgJQgKAJgLAJQiDBmi5AAQi4AAiDhmQgbgVgUgXQgWAXgbAVQiCBmi5AAQi5AAiChmQiChlgBiRQABgeAFgdQifgKh0haQiChmAAiQQAAiQCChkQARgOATgMQgSgLgRgNQiChmAAiQQAAiQCChmQCChlC5AAQBKAABCAQQAKh/B3hcQCChmC5AAQC4AACCBmQAOALANAMQAWgYAbgVQCChmC5AAQC5AACCBmQAiAaAZAdQASgRAUgQQCDhmC5AAQC5AACCBmQBKA5AgBHQCfAKB0BaQCDBmgBCQQABCMh9BlgA0GgfQAABBgvAvQgvAvhDAAQhCAAgvgvQgvgvAAhBQAAhDAvgvQAvgvBCAAQBDAAAvAvQAvAvAABDgA7MiSQAgAhAAAuQAAAuggAfQghAhguAAQguAAggghQgfgegCgsQAAgCAAgBQAAguAhghQAMgMAPgIQAXgMAcAAQAuAAAhAggA+3BnQgSARgYAAQgZAAgRgRQgSgSAAgYQAAgZASgRQARgSAZAAQAYAAASASQARARAAAZQAAAYgRASg");
	this.shape_6.setTransform(305.2,150.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AQJPYQi5AAiChmIgWgSIgVASQiDBmi4AAQi5AAiDhmQgbgVgUgXQgWAXgbAVQiCBmi5AAQi5AAiChmQiChlAAiRQAAgeAFgdQifgKh0haQiChmAAiQQAAiQCChkQARgOATgMQgSgLgRgNQiChmAAiQQAAiQCChmQCChlC5AAQBKAABCAQQAKh/B3hcQCChmC5AAQC4AACCBmIAbAXQAWgYAbgVQCChmC5AAQC5AACCBmQAiAaAZAdQASgRAUgQQCDhmC5AAQC5AACCBmQBKA5AgBHQCfAKB0BaQCDBmAACQQAACMh9BlQBzBhAACGQAABcg1BLQA+BQABBkQAACQiDBmQiCBli5AAQhgAAhSgbQggBHhJA5QiDBmi5AAIAAAAgA4YBRQgvgvAAhBQAAhDAvgvQAvgvBCAAQBDAAAvAvQAvAvAABDQAABBgvAvQgvAvhDAAQhCAAgvgvgEggLABnQgSgSAAgYQAAgZASgRQASgSAYAAQAZAAARASQARARAAAZQAAAYgRASQgRARgZAAQgYAAgSgRgA9pAKQgfgegBgsIAAgDQgBguAhghQAMgMAPgIQAXgMAdAAQAtAAAhAgQAhAhgBAuQABAughAfQghAhgtAAQgvAAggghg");
	this.shape_7.setTransform(305.2,150.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.3,1,1).p("AehiQQBzBhAACGQAABcg2BLQA/BQAABkQABCQiDBmQiCBli5AAQhgAAhSgbQggBHhKA5QiCBmi5AAQi5AAiChmQgLgJgLgJQgKAJgLAJQiDBmi5AAQi4AAiDhmQgbgVgUgXQgWAXgbAVQiCBmi5AAQi5AAiChmQiChlgBiRQABgeAFgdQifgKh0haQiChmAAiQQAAiQCChkQARgOATgMQgSgLgRgNQiChmAAiQQAAiQCChmQCChlC5AAQBKAABCAQQAKh/B3hcQCChmC5AAQC4AACCBmQAOALANAMQAWgYAbgVQCChmC5AAQC5AACCBmQAiAaAZAdQASgRAUgQQCDhmC5AAQC5AACCBmQBKA5AgBHQCfAKB0BaQCDBmgBCQQABCMh9BlgA0GgfQAABBgvAvQgvAvhDAAQhCAAgvgvQgvgvAAhBQAAhDAvgvQAvgvBCAAQBDAAAvAvQAvAvAABDgA7MiSQAgAhAAAuQAAAuggAfQghAhguAAQguAAggghQgfgegCgsQAAgCAAgBQAAguAhghQAMgMAPgIQAXgMAcAAQAuAAAhAggA+3ATQARARAAAZQAAAYgRASQgSARgYAAQgZAAgRgRQgSgSAAgYQAAgZASgRQARgSAZAAQAYAAASASg");
	this.shape_8.setTransform(305.2,150.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.3,1,1).p("AehiQQBzBhAACGQAABcg2BLQA/BQAABkQABCQiDBmQiCBli5AAQhgAAhSgbQggBHhKA5QiCBmi5AAQi5AAiChmQgLgJgLgJQgKAJgLAJQiDBmi5AAQi4AAiDhmQgbgVgUgXQgWAXgbAVQiCBmi5AAQi5AAiChmQiChlgBiRQABgeAFgdQifgKh0haQiChmAAiQQAAiQCChkQARgOATgMQgSgLgRgNQiChmAAiQQAAiQCChmQCChlC5AAQBKAABCAQQAKh/B3hcQCChmC5AAQC4AACCBmQAOALANAMQAWgYAbgVQCChmC5AAQC5AACCBmQAiAaAZAdQASgRAUgQQCDhmC5AAQC5AACCBmQBKA5AgBHQCfAKB0BaQCDBmgBCQQABCMh9BlgA0GgfQAABBgvAvQgvAvhDAAQhCAAgvgvQgvgvAAhBQAAhDAvgvQAvgvBCAAQBDAAAvAvQAvAvAABDgA7MiSQAgAhAAAuQAAAuggAfQghAhguAAQguAAggghQgfgegCgsQAAgCAAgBQAAguAhghQAMgMAPgIQAXgMAcAAQAuAAAhAggEggLABnQgSgSAAgYQAAgZASgRQARgSAZAAQAYAAASASQARARAAAZQAAAYgRASQgSARgYAAQgZAAgRgRg");
	this.shape_9.setTransform(305.2,150.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_7},{t:this.shape_8}]},2).to({state:[{t:this.shape_7},{t:this.shape_9}]},2).wait(55));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.6,1,1,0,0,0,54,40.5);

	this.instance_2 = new lib.BkScene();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,193.7,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.UI}]}).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(296.1,201.3,520.4,398.7);
// library properties:
lib.properties = {
	id: 'FFA849E23B9C4C47A7081084C61051CF',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmVS.mp3", id:"bgmVS"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/departure_louder.mp3", id:"departure_louder"},
		{src:"sounds/JingleAdjetives.mp3", id:"JingleAdjetives"},
		{src:"sounds/ohbaby.mp3", id:"ohbaby"},
		{src:"sounds/real_disco.mp3", id:"real_disco"},
		{src:"sounds/relax.mp3", id:"relax"},
		{src:"sounds/sax_lick.mp3", id:"sax_lick"},
		{src:"sounds/thesubjunctivemood.mp3", id:"thesubjunctivemood"}
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
an.compositions['FFA849E23B9C4C47A7081084C61051CF'] = {
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