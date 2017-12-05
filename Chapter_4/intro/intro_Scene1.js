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


(lib.WhiteSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.753)").s().p("EggOAQLMAAAggVMBAaAAAIAAP3IADAAIAADcIgDAAIAANCg");
	this.shape.setTransform(206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteSheet, new cjs.Rectangle(0,0,412.6,207), null);


(lib.Flip1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AC7jIQADgMAGgHQACgDACgEQAEgIACgIQADgKAEgKQAEgIgBgKQgBgMABgMQABgdgGgZADgBDQgNAYgDAcQgEAZAEAaQAFAbANAZQANAYADAcQAEAegSAaQgIAMgMAGQgaAOgbgRAiWClQABAAAAgBQADgDADgBIABAAQgCgKABgKQAAgLAKgJQAYgEAPAWQANATASAPQARAOAXAHAg5FKQgIAHgJAHQgWAQgNgBQgNAAgOgLQglAAgPAAQgPgBABgWIAFgFQgJAAgFgDQgCAAgBgBQgEgBgDgCQgEgDgCgOQgCgMAPgJQABAAACgBQgCAAgBAAQgOAAgJgLQgCgUARgLQgIADgIgNQgGgIADgIQALgQAIABQgOgOAFgXQAEgOANgDQACgBABAAQAPAAAQAFQANADAIAJQAFAGAEAGAhuDHQgXgLgNgSQgCgCgCgD");
	this.shape.setTransform(-35.8,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_1.setTransform(6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AA3D5IAQgCIANgDIgNADIgQACQgUACgVgBQgcgBgbgJQgcgKgXgQQgKgHgJgIQgLgKgLgNQgTgWgQgXIgiguIghgwQgOgXgGgZQgHgcgDgcIgHg4QgEgagBgaQAAgYADgoIAlgHQAOgCAMgEIAIAyQAEAbAKAZQAKAbAJAbQAJAcAOAZQANAaASAWQASAXAYAQQAXAQAZANQAZAOAbAIQAdAIAeABQAXgCAagJQAbgJAZgOQAYgPAYgKQATgJAJgNIgFALIAFgLIAAgCQAJgVACgYQAEAbABAbQABAfgQAXQgQAWgSAXQgQAUgWARQgWASgSATQgVAVgWASQgOALgRAAQgLAAgLgEg");
	this.shape_2.setTransform(31.4,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1D38D").s().p("ACRJBQgeABgYgSQgXgQgWgTQgWgTgSgXIghguQgQgXgOgZQgOgZgMgaQgMgagOgYQgOgZgKgaIAAgCQgGgOAAgPIABgEQgYAGgXADIgQABIgPgBIAPABIAQgBQAXgDAYgGIgBAEQAAAPAGAOIAAACQgMAYgEAcQgDAZAEAaQAEAbAOAZQANAYADAcQADAegSAaQgHAMgNAGQgZAOgcgRIAFgEQATgVACgdIAAgFQAAgagNgVQgPgXgIgcQgIgaAAgcIgBgSIABgpIAEgiQgNgCgNgFQgbgLgWgPQgOAWgSAUQgUAUgbAKIgBABIgDABQgJACgJABIAAAAIgBAAIAAAAIgBgBQgPAAgPgHQgWgKgCgYQgUgVAPgWQgWgRgDgPQgHghAYgNQARgKgGgZQgEgPAKgGQAUgNAUgKQgPgfASgYQALgOAPACIAEgrQADgcAGgaQAGgeAJgbQAKgbAPgYIAdgxQAPgaAQgSQAKgMAPgJQAbgIAbgBIA3gEQAMAZAVASIArAnIArAmQATARAQAXQAPAXANAYQANAbAJAeQgNAFgLAIQgXAPgNAYQgNAXgNAgQgXgMgagJIgFgCQgWgHgWAAIgBAAIAAAAIgCAAIgCAAQgdACgXANQgaAPgPAXQgQAYgRAPIgBABQgKAEgJAAIAAAAIgBAAQgQAAgPgMQgTgRgLgZQgMgZgWgSQgLgIgJgBQAJABALAIQAWASAMAZQALAZATARQAPAMAQAAIABAAIAAAAQAJAAAKgEIABgBQARgPAQgYQAPgXAagPQAXgNAdgCIACAAIACAAIAAAAIABAAQAWAAAWAHIAFACQAaAJAXAMQANggANgXQANgYAXgPQALgIANgFQANgEAPgBQAdgCAUgNQAFgEAEgGQALgWAQgXIAOgYQgTAGgfgDQgfgEgZgNQgbgNgNgVQAJADAKAAIAAAAIABAAQAPgBARgHIABgBIAAAAIAAAAIAAAAIABgBQAagNARgXQASgXAGgdQgGAdgSAXQgRAXgaANIgBABIAAAAIAAAAIAAAAIgBABQgRAHgPABIgBAAIAAAAQgKAAgJgDIgBgCQgOgYgIgbQgIgbACgdQgeAAgKgWQgGgOAQgFQAagHAVgKQAVgaAJgcQAKgaAMgVIAOgQQAKgKANgJQAHgEAIgDQAEANACANIACAnQAYgIAWgMQANgHALgKIAHAbQAGAaAJAVIAQgVQAHgKAEgLQAPAJAKARQAJARALALQAXgEAbAQQAIAFAIAGQAUAGAKAOIAMAPQAHAcgLAdQgLAagBAeIgCARQAMARAVATQAVATARAXQATAXAOAZIAdAxQAPAYADAbQAEAbAIAaQAKAcAHAdQAGAcADAcQACAcgDAeQgDAdgHAbQgHAdAEAdQADAcgBAeIAAALQgDAYgIAWIgBACQgJANgSAJQgYAKgZAPQgZAOgaAKQgaAIgYADQgegCgcgIQgcgIgagOQgZgNgXgQQgYgQgRgWQgSgYgOgaQgOgZgIgcQgJgbgKgbQgKgZgFgbIgHgyQAOgFAMgIQAWgPASgVIABgCIACgFIABgBIABgCIABAAQAMgSASgBIAAAAIAAAAIABAAIABAAQAdABAcACIABAAIADABIAEAAIAAAAIAAAAQAZAAATgPQgTAPgZAAIAAAAIAAAAIgEAAIgDgBIgBAAQgcgCgdgBIgBAAIgBAAIAAAAIAAAAQgSABgMASIgBAAIgBACIgBABIgCAFIgBACQgSAVgWAPQgMAIgOAFQgNAEgOADIglAHIgPADQgZAIgXANQgWANgcAIIg3ANIgJACIAJgCIA3gNQAcgIAWgNQAXgNAZgIIAPgDQgDAnABAYQAAAaAFAaIAHA4QADAcAGAcQAHAbAOAWIAgAwIAiAuQARAXATAWQAKANAMAKQgegDgcAAgAByAHQgaANgdAAQAdAAAagNQAQgHAJgMQgJAMgQAHgAiPhcIgHAUIgGAQIgFAHQgGAHgCAMQACgMAGgHIAFgHIAGgQIAHgUQADgHAAgJIAAgCIgBgQIAAgIIAAgMQAAgWgEgUQAEAUAAAWIAAAMIAAAIIABAQIAAACQAAAJgDAHgAFglNQAQAAAOgHIABgBIABAAQAagQAEgdIABgIQAAgMgGgKQgJgPgNgLQANALAJAPQAGAKAAAMIgBAIQgEAdgaAQIgBAAIgBABQgOAHgQAAIAAAAIgBAAQgIAAgJgCIgCgBQgfgIgOgVQAOAVAfAIIACABQAJACAIAAIABAAIAAAAgAFkmOIgBgBIgBAAIgBAAQgIgDgKgBIAAAAIAAAAIgFABIgDAAIgDAAIgBAAIABAAIADAAIADAAIAFgBIAAAAIAAAAQAKABAIADIABAAIABAAIABABgAEznIQgPAPgFAWQgDANgDABQADgBADgNQAFgWAPgPQAGgEAIgFQgIAFgGAEgABcmZQgCgHAAgGQAAgUAQgSQAMgQARgBQgRABgMAQQgQASAAAUQAAAGACAHgAnTIRQgNAAgOgLIg0AAQgOgBABgWIAEgFQgIAAgGgDIgDgBIgGgDQgEgDgCgOQgCgMAOgJIADgBIgDAAQgOAAgIgLQgCgUARgLQgJADgHgNQgHgIAEgIQAKgQAJABQgPgOAGgXQADgOANgDIAEgBQAPAAAQAFQANADAHAJIAKAMIAEAFQANASAWALQAYAJAdAAQAZAAAJgPQADgFACgGQAFgTgEgRQgHgcgJgXIgDgLIABABIAAAAIABAAIAAAAQAJgBAJgCIADgBIABgBQAbgKAUgUQASgUAOgWQAWAPAbALQANAFANACIgEAiIgBApIABASQAAAcAIAaQAIAcAPAXQANAVAAAaIAAAFQgCAdgTAVIgFAEQgTAQgbgLQgWgJgdgHQgXgFgYgCIgKAAQgegDgcAGIgSAOQgVAPgNAAIgBAAgAnUFxQgWgLgNgSIgEgFIAAgBQADgDAEgBIABAAQgCgKAAgKQABgLAKgJQAYgEAPAWQANATARAPQASAOAWAHQgJAPgZAAQgdAAgYgJgAl9FrIAAAAg");
	this.shape_3.setTransform(0,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AC1CoIgJgPIgMgQQgLgNgUgHQgHgGgIgFQgbgQgXAFQgLgMgKgQQgJgRgPgKQgEALgIALIgOAVQgJgVgHgaIgHgcQgLALgMAHQgXAMgYAHIgCgmQgBgNgEgNQgJADgHAFQgMAIgLAKQgHAFgEAIIgCADIg1AbQgbANgZAOQgFACgMABQAogfAmgiQAPgNAMgIIAMgLQg0gEg4ACQgPABgOgCQgIgCgGgDQA3geBDgMIA4gJQATgDAWABQgYgygqgmQBBAYA3AqQAigrATgwQAVAqASAyQAFAMACgCQALgZAegIQAcgIAcgGQAagEAYAGQgXAJgfAUQgNAJgKAKQAbAGAiADQArADAnAQQAPAGANANQgogGgvgDQgXgCgIAMQA4AiAvAnQASAQAPATQgfgJgpgQQgRgGgQgJQAUAcAgAlQARAWAPAWQgagQgkgSQgagPgXgQQAMAcABAgQABAeAFAcQgMgGgKgSg");
	this.shape_4.setTransform(25.7,-50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-70.3,122.2,140.7);


(lib.Beach1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("EAhNgX2MhCZAAAIgMAAIAAAAIAAKMIAAAMMAAAAlVMBCxAAAIAA4iIAAgDIAAncIAAgMIAAvgIAAAAg");
	this.shape.setTransform(-1.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D9AF9A","#993300"],[0,1],31.5,78.6,-49.3,-60.6).s().p("AgWBuQgPgLAOgiIAbg8IgBgFQgDgSALgtQAEgRAAgNQAAgIgCgGIAFgDIAJgCQAAADAEAAIgCAQQgGAogOA1IgCAGIgCAIQgRA/gDAdIAAAHQgEgBgDgCg");
	this.shape_1.setTransform(-155.6,-93.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-263.2,-132.4,-282.9,320.4).s().p("AA+A8IgHgKQgSgYgeABQADAKAKARQgKABgIgGIgJgGIAAAAIAAgCIABgBQgBgFgMAAQgMAAgGADIgDgEQgDABgKAHIgEAEQgMAHgFgMQAEgGARgGIABAAQAQgGADgJQgIgBgMACQgMADgRAGQgcALgLgIQAHgFAdgOQAXgJAJgLQg8AQgPgQQANgKAkgIQARgEAJgEQAKgEADgEIgNAAQgzAAgRgOQAdgKAmADIABAAQAnAEAOARQgBgHgRgUQgOgQAGgFQATABAaAgQASAVASgJIAGgEQADAMgFAKIgEAOIgBAFIABAAQAbAIAYASQAbAWgEASQgKgRgUgNQgXgOgPAKQATABAHAdIACAJQADAWgLAOQgLgWgIgNg");
	this.shape_2.setTransform(-151.1,-109.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],181.5,24.6,-49.9,238.6).s().p("AAWAiQgHgQgIgEQgEAFAEAIQAFAIgBAEQgJAEgBgHQAAgJgBgCIgDABQgBgEgFgDQgFgEgDACIAAABIgBAAIAAABIgIgBQgGAAgEgEIAUgIQgMgJgUAEQgMADgXAJQADgMASgJQASgLAIAGQAAgKgSgBQgOgBgOAFQAIgKAXgBQAUgBAQAFQADgCAFgIQAEgGAGgEQAAAOAWgEQAcgGAJAGQAAAEgOADQgSADgFADQAQgEASAMQASALAHANQgQABgZgUQgDAGAKANQAMAPAAAJQgPADgRgbQgCAIAEAMQAFAQABAEQgJAAgHgOg");
	this.shape_3.setTransform(-20.2,-78);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#009900","#14A110","#FFFFCC","#FCE794"],[0.149,0.38,0.565,1],251.7,-159.1,282.1,212.1).s().p("AgCgBQgDgHABgDIADALQABAHAFAFQgFgCgCgLg");
	this.shape_4.setTransform(-92,-67.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D9AF9A","#993300"],[0,1],37.3,76.9,-4.7,-78.5).s().p("ABADyIAAAAIAAABgABDDoQANgsALgKQgEALAAAaQAAAFgMAMIgBABIAAgBQADgEgEAAIgBAAIgCAEIgGAKIADgKgABAC4IAFgEIAAAAIgFAMgABjCtIABgCIAAACIgBABIAAgBgABVCVIgFgMQgIgUgEgVQgFgZgKgdIgNghQgHgPACgRIADgEIADgDQgLgGgNgNQgQgRgSgdQgNgUgIgRQgLgYgEgRQgQgBgQgWQgRgXAEgWQA1AxAnA7QAXAmATApIAKAWIANAgIANAvQALAnAHArIAAAFIABADIADAcQgEgGgFgKgAASgyQALAFAEgHIgHgCQgFAAgDAEg");
	this.shape_5.setTransform(-111,-90.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#D9AF9A","#993300"],[0,1],-52,20.8,55.9,-16.7).s().p("AhFBtIAIgFIAEgGIgFANIgHgCgAhIBlIABgBQAIgKgCgEQAMgDgHAMIgFAIIgGAGIgCAAIgDAAQAAgDAEgFgAhQBjIAAAAIAAABIAAgBgAg3BGQAAgHAGgLIAEgHQARgdAOgDIgVAeQgMATgFAQQgEgBABgHgAgXAHQAPgMAcgnIADgFQAcglAXgYQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBIACAEIABADQgLAGgMAPQgWAcgLAGIgUAkQgMAUgLAAIgFgBg");
	this.shape_6.setTransform(-29.5,-64.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D9AF9A","#993300"],[0,1],-55.3,29.9,25.1,-109.4).s().p("AgBgBIABAAIACADIgDgDg");
	this.shape_7.setTransform(-67.5,-63.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D9AF9A","#993300"],[0,1],9.6,61.4,9.3,-38.6).s().p("AAQBEIgBgDIgFgIIgBgEIgHgQIgBgFQgKggACgUQgJgDgGgPIgDgLQgCgKAEgJIAMAVQAOAcAKAdIAFAQIADALIADANIADAPIAAAAIAAACIgDAAIgBAAIACgBQgEgDgDABIgDABIACABQAAAAABABQAAAAABAAQABAAAAAAQABAAAAAAIgEACIgBgBg");
	this.shape_8.setTransform(-51.7,-66.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-73.4,-138.3,-224.6,99.1).s().p("ABTBRIgLgKIgBgBIgEgEIgSgSQgZgTgRAJQgBADAMAHQALAGgGAHQgIgCgFgHQgFgHgFgCQAAACgTALQgHAEgFAEQgJAIgCAJQgBgHACgOIAGgXQgHACgLAPIgBABQgLAQgGADQgHgNAGgTIACgHQAHgRANgOQgLABgRAOIgNAJQgJAGgHAAQACgNAKgNQAGgIALgIQARgPARgHQgJgCgTgCIgRgBIgKgDQAGgFAHgDQAKgEAOABQAHAAAjAJQgCgJgHgMIgLgUQATAFAPARQAMAOAFASQAIgPAPgCQAKgCATAFQgFAKgMAIQgNAIgEAIQASgGAYAJIAPAGIAHAFIAEADIABACIAHAHIADAEIgEgBIgGgCIgCAAIgDgBIgLgDIgHgCQgYgFgMAIQAXANAMANIAFAFQAFAHACAIIAAADQABAIgDAIIgBgBg");
	this.shape_9.setTransform(-54.4,-78.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D9AF9A","#993300"],[0,1],25.9,50.3,-32.1,-49.5).s().p("Ag1CMIgBAAIANgWIgEAIIAEAOIAAgFIACgHIAEgLQADgIAEAAIACAHQgDAEgCAIIAAACIgBADQgCAHgFABQgGgBgIAAgAgMBNIAIgSQAGgaAFgMQAKAKgPAjQgFAPgGAIIgDgMgAAVgXIAJgTIAEACIgHAbIgGgKgAAjhAQgBgOAHgbQAFgUgEgMIAEgCIAGgBQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQgDAggMAuIgFgEg");
	this.shape_10.setTransform(-48.3,-71.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-188.7,-94.9,-202.8,229.7).s().p("AAnAkQgMgRgWAAQACAIAHAMQgGAAgHgEIgGgEIAAAAIAAgCIABAAQAAgEgKAAQgIAAgEACIgDgDQgCABgKAIQgIAFgEgJQADgEANgEQAMgEABgHQgKgBgYAJIgIACQgOAEgHgFIARgJIAJgEQARgGAGgJQgXAHgOAAQgMgBgFgGQAFgDAHgCQAJgEAPgDQAXgFAEgHQgsABgOgKQAVgIAbADQAdACAKAMQAAgFgNgOQgKgLAEgEQAOABATAXQAOARAQgMQACAJgEAHQgDAJAAAEQAUAGARANQATAQgDANQgHgNgOgJQgQgKgLAIQAOAAAEAVQAFAUgJAMQgLgWgIgKg");
	this.shape_11.setTransform(-41.7,-89);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#D9AF9A","#993300"],[0,1],36.1,69.8,-44.8,-69.4).s().p("AhLC9IARgdIgFALIAFAUQAAgJACgJIAEgJIACgFQAIgTALANQgFACgEAJIgEALIAAACQgEAPgJABIgEAIQgHgDgHgJgAggC2IABAAIgBABIAAgBgAglCFIAAAAQATgXALghIALgmIAFgPQAJAKgFAYIgCAIIgCAFIAAACIgGAQQgSAsgTAAIgDAAgAARgJIAEgOIAcg7IgBgGQgCgTAKgsIACgHQAFgXgEgOIAFgDIAIgDQABADADABIgFAoQgGAfgKAmIgCAGIgDAIIgJAjQgLArAAAVQgVgGAIgcg");
	this.shape_12.setTransform(-83.3,-87.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-263.2,-132.4,-282.9,320.4).s().p("ABMBUQgMgUgHgLIgCgDQgSgYgeABQADAKAKARQgKABgIgGIgJgGIAAAAIAAgCIABgBQgBgFgMAAQgMAAgGADIgDgEQgDABgKAHIgEAEQgMAHgFgMQAEgGARgGIABAAQAQgGADgJQgIgBgMACQgMADgRAGQgcALgLgIQAHgFAdgNIARgJQAKgGAFgHQgQAFgNACQgjAGgLgMQAFgEAKgEQANgFAVgFQARgEAJgEQAKgEADgEIgNAAQgzAAgRgOQAdgKAmADIABAAQAnAEAOARQgBgHgRgTQgOgRAGgFQATABAaAgQASAVASgJIAGgEQADAMgFAKIgEAOIgBAFIABAAQAXAHAUANIAIAGQAOALAFALQAGAJgCAJQgEgHgGgGQgIgJgMgIIgLgGQgQgGgLAIQAKAAAHAJQAGAHADAOQADAKAAAJQgBAPgIALIgFgLg");
	this.shape_13.setTransform(-74.2,-111.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],-172.1,-186.3,-308.3,246).s().p("AhiBDQAEgeANgbQgQAGgVAdQgWAegQAGQgEgjAfgsQAUgdAYgTQgPAAgdAGQgbAFgRAAQAPgaAlgHQALgCA7gCQgHgNgQgPIgagbQAgAAAeAUQAZAQAPAbQAHgbAWgKQAPgGAfAAQgEAQgPASQgQARgEAQQAagSApAEQAYACATAJQALAFAJAIIAGAFIgOAAIgbgBIgNAAQgnADgRARQAfAGAVAKIAEACQAuAXgFAoIhEglQgugVgYAVQABAHAVAFQAUAFgHANQgNAAgLgJQgKgJgKgBQAAAFgYAYQgbAZACAYQgJgUABg0QgKAHgLAdQgLAdgJAIQgTgUAFgpg");
	this.shape_14.setTransform(-123.2,-121.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],-167.2,-47.7,-167.2,-196.2).s().p("AgwBhIAAgkIAYAAQAJAAAggZQAhgYAEAAQAuAAArAZQAjAVAAAJQAAAfgbACQiYACgOAHIgNANQgEgDgQgWgAAfBSIgVAEIAAADQABACARAAIA1gEIAogFIAAgDQgCgCgiAAIg2AFgAA4A4QgYANAAADQAAACAAABQAAABAAAAQABAAAAAAQAAAAAAgBIAEABQAGgGAegKQAdgKAEgHQgCgCgIAAQgPAAgZAPgAAXA6QgUAKAAACQAAABAAABQAAABAAABQAAAAABAAQAAAAAAgBIAFAAQBBgmAAgEIgCgEQgWARgbAOgAiqghQgHgHAAgPQAEgTAAgJIAHgBQAGAAAKACIAAACIgFAGQAAACAAABQAAABAAAAQAAABABgBQAAAAAAAAQADADAEAAIAmgbQAsgbAmAAIATAAQgFAJAgATQAlAVAAAYQgJAeg5AAQgnAAgZgJQgagJgFAAQgcAAgJAcQgWgTgGgGgAhEg6QAAACAAABQAAABAAAAQAAAAAAAAQABAAAAgBIA2AAQAMAAABgFQgBgCgKAAQg5AAAAAEgAiBg9QABACAGAAQAVAAAhgNQAlgNALgQQhGAcgnAMg");
	this.shape_15.setTransform(181.2,44.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A3839").s().p("AXcRYQgFgEgDAAQABgGAGABQAGAAAAAFQgBAEgCAAIgCAAgA6rL2QAGgUAAAUQAAAKgBAAQgCAAgDgKgA4kLhIAEgIQABgEABAFIAAAHQAAAKgBAAQgCAAgDgKgAcRjcQgNgHAVAAIAhAAIA2gNQAdgKAEgYQAFABABAGIABANQgOAGgGAOIg2ALQgUAEgTAAIgWgBgAfyjzQAmgRAHgOQAIAUghAOIg4AUQABgHAjgQgAYgkOQA1gSAMgGQgPATgkALIg/ARQAGgJArgOgAU8kJQAYgOAvgWQgfAdgjAMgAmurGIgBAAIADgCQADgBAEADIgDACIgBAAIAAAAIgFgCgA5JuoQgUgEgRgXQgPgCgRAEQgVAFgIAAQAGgPAlAAQAqAAAKgFQgNgTgrAEQgxAIgRAAQAOgUAngPQA0gUAKgGQgqgHgvASQgwASgSAgQgRgQAWglQAdgnAGgQQgiACgcAgQghAiABAvIghgqQgTgagXgGQgBAUAOAWQAKASjHANIAAgNIABAAQCrgegJglQA1AFAVAxQAegvATgTQAfghAqgJQgDAZgRAaIgbArQASgBA6gbQA6gWApARQgSAOggANIg6AUQAKAHArAAQAoAAAIANQAEAOgQAAQgUABgBAFQATAWApgCQAKAAAJABQgEACAAAFIgBANQgOgGglgIgAv9wtQAEgIALAFQgCAEgGAAIgHgBg");
	this.shape_16.setTransform(-7,11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#009900","#14A110","#FFFFCC","#FADB63"],[0.149,0.38,0.565,1],161,-253.8,191.5,117.4).s().p("EghYATkMAAAglVQDIgNgLgSQgNgWABgUQAXAGATAaIAgAqQgBgvAhgiQAdggAigCQgGAQgdAnQgWAlARAQQASggAwgSQAvgSAqAHQgKAGg0AUQgnAPgOAUQAQAAAygIQArgEAMATQgJAFgrAAQgkAAgGAPQAIAAAUgFQARgEAQACQARAXAUAEQAlAIAOAGIAAgNQABgFAEgCIACAAIAEAGIgLAOIAWgGQAMAHAUAFIAAAAIAAABIAAgBQAIgJADgCQAHgEAIAJQAAgHAGgMQAEgKgDgMQANAMAKgPQALgTAOACQADAOgSANQgPAKAJAKQAGABAZgJQASgHAFAJQACAIgKADQgMADAAAGQATgGAFAQQAHAWADACQAKgWANARQAUAYAEABIAAgRQABgJAGgBQAMAMAPABQAHAAAUgEQAjgIATAaQABgFgCgeQgBgWAIgEQAJAHAHASQAIAXAEAGQAjggAMATQgcAEgGAQQAhABApATQgPAFgFAAQgFAAgPgFQAHAMAOAQQAHANgWANQATgDAogNQAfgFAFAjQAXgIAiALIAAABIAAgBQAfAKAbgNIAEATQADALAGADIgBg0QgBgfAQgFQAHAJALAjQAMAcAQgKQAEADAEACIAAAIQAJgDAUgJQARgFAIARQAAgCgBgTQgBgOAJABQABAbAkAJQApAKAJAWQAugWAIgGQAIAKAHAIQAJAIAJAFQAGADAHACQARAFAcgGIApgHIgGALQgGAPAAAJIAAAJIABAAQAFAHAUAAQAdAAAOgGQARgHATgCQgHAJAAAFIAAAGQACAFAJAAQANAAA0gQQgLAKAAAPQAAAVAMAAQAmABAbACIgBAEIABAAQAJgEAHgGIAOAAIAEgFIACgBIABgBIAAgBQAngaARgOQADAFgEAPQgBALAOADIAGAAIACAAIgBgBQAHgDAOgJIABADQABAIgJAFIgBACIACABIA/gBIAAADIAAAmIAVABQAAAYACAKIAVABQAIAAArgXIABADQgIAvAAARIALABQACgBApgkQAAAbACAOIAaABQALAAACgJIALAJIAHAEIAWAAIALgJIABACIgEATIgDgBIgBgBIAAAHIADABQgCAOACAMIAFAAQAJgGADgNIADABIACgEIAAAAIgCgBQAKgLAfgEIgBAUIADABIACAZQAFAGAKAFQAOgBAMgRIAEAAIgDAZQACAUAZAAQAIAAAJgMIAOgUQAFADAHAXQAFAPAbgBQgDAHgBAIIACACIAFALIAGAEIAOAAIAJADIAPADIAIgHIgBgBQALgGAPgOQAVgUAsAIIAAACIgSAQQgJAJAAAHIAAABIACACIAAACQABAGACADQAIgCAIgDIAFAAIAxgOIAGACIAAACIgJARQAAALACgEIAxABQALAAAhgIIgCADQgKAQgGADQAAAIACAEIAjABQAKAAATgGIABACQgIAHgVAMQgLAGAAAGIAAAFIgPACIAIAKIBlAAIgfAHQgFAJgMAEIgGADIgCACIAHAAQgSAPAAAOQAAAIAGACQARAGBIAAQAAAMACADIBJAEQgkAIgJAHQgHAEAAAMQAAAFADABIArAPQgIAKAEAHIA5ACIAAAHIAlABIAEAAQABABAAgHQAAgIgIgFQgFgDgHgCIgTgDIhbgRIAAgBQAhgKAKgHQALgHAAgOQAAgFgEgEIhEgCIAWgCIAAgKQgDgEh3gDQAHgRAMgMIAeAAIAaAAIAAABIAfgBQAkgCAVAAQAVAAAEADQASAKC8AQQAbAFDOAWQDoAXBQAAIBGgBIABAAIAGADQC0AQCUAEICiAIIAAYigAWkO4QADACACgGQAAgFgGAAQgGgBgBAGIAAAAQADAAAFAEgA7jJWQAGAUAAgUQAAgKgCAAQgBAAgDAKgA5ZI5IgDAIQAGAUAAgUIAAgHIgBgDIgCACgAbnDaQgCADAAAYIACAcQAHAbAXAAQAKAAACgEIAHgKQAYgWA/AKQBEAKAUgNQAVgOADgGIAAgRQAAgTgugZQgugZgeAAQghAAgkAhIgMALQgKAKgPgGQgEgCgEAAQgIAAgEAHgAZkBtIAKAfQAPAdAWAAQAGAAAKgOQAJgOALAAQAIAAAVAJQAVAIAtAAQAoAAAXgQQARgMAAgMQAAghgcgQQg2glgCAAQg7AAggAVIgSAOQgIAHgHAAQgWgGgGAAQgWAAAAApgABXpqIABABIABgCIgCAAgAwUtvIACgBIgCgCIAAADg");
	this.shape_17.setTransform(-1.4,27.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FAFFFF").s().p("AWnGoQARgMgOAOIgIAHQgBAAAGgJgAM6GhIAAgNIAVAAIAAANgA2ngFIABAAIAAAAgA2vhqIAAgEIACAIgADGkcQgvAFgogmQgZAPgngCQgmgCgTgSQAzgcA7gKQBIgLAhAdQAIgFAMgQQALgPAKgFQAVAEAhAQQATgqAzAFQANACAjAHIAPADQAAAAgBABQgBAAAAABQAAAAAAABQgBAAAAABQAAAFALABQAOAAAFADIAQANIgBANQBGgpAZApQAOgFAXgUQAKgJAKgGQALAAAKgDQANAOAXAAQALAAAngHQAggGAPAFQAXAHAIAeQARACAfgHIA1gLQBEgMAcAjQAQgKAWgEQAbgEAPALQgSAGgSAWQgVAagKAGQgegDg6geQgFAEgFANQgFANgFADQhWAHgqgoQgFAEgFANQgFANgFADQghAHgWgNIghgbIgvAKQgcAHgbgEQgFgEgFgNQgFgMgFgEQgGAig1AKQg1ALgXgcQgEAEgKAVQgJARgLAFIgDACQgGgCgLgIIgFgEQgHgPgIAAQgiAbgjAPQgYAKgRAAQggAAgHgngARxmIQAWgeA0gIQAygHAfATQgyAPgRADQgnAIgtAAIgEAAg");
	this.shape_18.setTransform(40.6,-71.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#0033FF","#66CCFF","#BCFEFD","#0099FF"],[0.008,0.165,0.235,0.553],-96.4,20.5,-96.3,-35.2).s().p("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");
	this.shape_19.setTransform(99,-28.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("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");
	this.shape_20.setTransform(24.5,-38.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],-29.8,72.3,-29.8,-76.2).s().p("AmlHvIhAABIgBAAIABgCIARAAIAxgCIgBAEIgBADgApBHyIACgBIAAAAIAAABIgCAAgAc/HtIAAvfIAHAAIAAPfIgHAAgAqAHrIABgBIADAAIACAAIACAAIAHACIACAAIgRgBgAn1HrIABgBIABABIgCAAgAqeHoQABgKAegOIAIgEIgLATIAAABIAAAAIgBAAIAAABIgEAJIgXgCgAsAG0IAFgCIABAAIACAAIgMAGIAEgEgAuVGmIABAAIgBABIAAgBgAsVE/IgDgHQAMgGAAgGQAAgEgFgOQAYASAKAJIAFAFIAAACIgWA2QgJgbgMgYgA0bFkIACgFIABAAQAEABgDAEIgEAAgAr3EHQAKgGATAHIgFARQgJgKgPgIgA9FDWIAIABIgDAFIgFgGg");
	this.shape_21.setTransform(26.8,-102.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#66CCFF"],[0,1],-1.6,71.6,-1.6,-76.9).s().p("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");
	this.shape_22.setTransform(-1.4,-102.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.5,-154.2,431.6,308.4);


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


(lib.Verbal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,28.9,0.2,-28.8).s().p("Ai6D/QgOgNAAgUIAAhMIAChNIAAkTQAAgWANgSQASgYAeADIBWAGQAvAGAhARQCSBKAABsQAAAtgeAiQggAig8AXQBaAzAuA1QAMANAAARQAAATgPAOQgOAOgTAAQgTAAgPgPQhohhh7glIADBuQAAAUgNANQgNAOgVAAQgUAAgOgOgAhpAKIAPAAQBTAAAngUQASgJAPgOQAOgPAAgIQAAgmgxgkQgtghgzgFIgngDg");
	this.shape.setTransform(-21.4,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3399","#CC33FF"],[0,1],0,29.5,0,-29.5).s().p("AieEFQgmghAAhvQAAgtAHhbQAGhcABgtQgBgMgDgYQgDgXgBgMQABg0AvAAQAQAAAMAIQAogJAkgFQAjgFAfAAQBWAAA0ATQAfAMAAAgQAAASgMANQgOAQgVAAQgHAAgIgCQg2gPg1AAQgaAAgcAEQgdAEgiAIQAAAugDBZQATgBBygLQBCgHAQAAQAVAAAPANQANANAAAVQAAAogrAFIhRAHQgwAGhiAHQgCAsAAAaQAABDAIAKQADAEAoAAIA/gBIBAgBIAUgCQANgCAGAAQAVAAANALQAQANABAXQgBAmgoAIQghAGhrAAQhwAAghgeg");
	this.shape_1.setTransform(-65.4,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,29,0.2,-29).s().p("AhLDyQgphjgzi7IgchcQgThAAAgZQAAgUAOgOQAPgLATgBQAhAAANAjIAOA6IAgBwQAbBgAZBLQAziBAchNIAdhRQAVgxAXgaQAPgSAVAAQAUAAAPAOQAOANAAAUQAAAOgJANQgSAbgPAlIgZBDIhcDtQgQApgXApQgOAbgbAAQgkAAgPgig");
	this.shape_2.setTransform(-111.6,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3399","#CC33FF"],[0,1],0,23.1,0,-23).s().p("Ai7DiQgrghAAgrQAAgVAOgPQANgOAXAAQAfAAAPAgQAUAqBFAAQA7AAA4gaQA6gaAAggQAAgsglgOQgZgKhMgCQg8gBgvgUQhBgdABg2QABhDBIg4QBGg5BVAAQAiAAAyAQQA+ATAAAZQAAATgNANQgNAQgXAAQgPAAghgHQgggHgRAAQgtAAgnAWQgqAVAAAZQABAOANAIQAMAJAZADIBYAFQBMAGAtAlQAxApABBJQAABahnAuQhNAjhjAAQhYAAgzgng");
	this.shape_3.setTransform(160.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.1,27,0.2,-26.9).s().p("Ai2DOIAHhtQAJiTAAi1QAAgUAOgOQANgOAUAAQAVAAAOAOQAOAOAAAUQAAC1gKCZQgDAbgEA4QBSgBB9gmQAIgDAIAAQAVAAAOAQQAMAOgBASQAAAdgdANQgoAThVANQhMANgyAAQhTAAgBhJg");
	this.shape_4.setTransform(115.9,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF3399","#CC33FF"],[0,1],0,27.7,0,-27.7).s().p("ACuECQgbgCgbg+QgTgogNg1QgZAEg6ADQg1AEgcAFQgQAmgnBMQgPAYgbAAQgSAAgQgNQgOgNAAgTQAAgSAxhlQgEgKABgJQABgRAfgJQAxhTA7haQBViCAUAAQAlAAANAuIAVBtQAWBjAeB9QACAKAPAkQAMAdAAAPQABAUgQANQgOANgSAAIgBAAgAgaAgQAPgEAggCIAwgEIgWhyIhJB8g");
	this.shape_5.setTransform(69.7,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF3399","#CC33FF"],[0,1],-0.4,29.9,0.4,-29.9).s().p("AioEEQgQgSAAgTIAAlpIgCgvQgBgaADgSQAEggA3gHQAagIA9AAQA/AAA7AqQBGAxAABIQAAAogPAbQgLAWgcAYQAhAQAaAgQAdAkAAAkQAAAugyAoQghAbgkAOQhPAeh5AAQgVAAgQgRgAhbC3QA6gDBEgUQA8gRAAgTQgBgbgmgUQgdgRgagCQgfAAg9gDgAhbi2IAACQQAfAEAPgCQBogIAAhFQAAgYgfgXQgfgXgjAAQgtAAgIABg");
	this.shape_6.setTransform(23.5,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(64,0,51,0.251)").ss(0.7,1,1).p("AlIkbQAIgXAKgQQALgTAcgKQAGgIAKgHQAJgOAYgKQANACAOABQAmAFAjAOQAYgFAWACQAIABAIACQAkAoAOAxQAHAGADAHQAIARAAAKQgNAlgYAdQAHAIAGAKQAZAKAXAPQARAMANAMQABATgHAUQgHAYgTAXQgBAUgJATQgGAOgGAMQgUAIgXAEQgaAGgcAEQgbAZgiATQgegGgfgHQgRgFgQgNQgVgHgDgIIgHgRIgFhmIgfg2IAThiIgRgmQgJgTgKgTgAikiDQgLgHgNgGIgDgFIgOAKIgFg5IgfgGIASgzIgggcIgBAAQAVgGAigFQAAgLACgLQAcABAaAKQAMgNAMgLQAEAGAEAFQAMAQALARQAVgDAOgCQAAAHgBAIQgDAUgFASQAPAJAKAHQgUASgZAQQAGAOADANQgVACgWAAQASATATAVQACgBABgCQAVgFARgFQAGAagCAbQAGACAGACQAMAGACAFQgVAQgcAPQACAIACAIQABAFABAGQgcACgdABQgHATgGATQgYgKgZgLQgPAOgPANIgDACIgFg4IgfgIIASg0IghggIAAAAQAcgFAbgFQADgOAAgOQASAFAQAEgAh4icQAAAAABgBQAAABABAAQgBAAgBAAQgGAAgFAAQgDAFgDAFQgBAIgDAHQgCAFgCAFQgJgFgKgFQAKACAKADQABgCACgDQAMgPAJgKgADWF2QAcgcA3hMQgDgPgCgQQgJgMgEgMQgLgVANgRQAxgdAzgaQANg+APg+QAwgLAjAAQAwhGAZgaQADgCAEgBQAZAYAJA1QACAVADAXQAdAPAeAaQAIAGAJAGQgNA6gLA/QAlAtAnAwQgDAHgEAGQgMAKgEAeQgFATgKANQACAGABAEQAGAagGAUQgFAVgIAKQgDAEgEABQgigVgigsQgMgOgMgPQgNAAgLgFQgKAKgOAKQgXgOgggQQgXgMgTgLQgdALgXALQgUAagZAjQgDgCgGAFQgDABgFgEQgQAEgSAAQgaAAgXgJQgXgKgNgPgAOoAqQAdAaAkAUQAHgTAJgVQADgGACgFQAHgJADgBQAAAEAAAGQACAUgIAWQgLAkgjAZQgUgXgqgZQgWAFgWAEQgxAJgtAGQgKgMgEgQQgFgHgCgLQhEgZgeg6IgBgBQAiAAAnhQQgLhIgKhAQAdgPAcgRQALhDAMhGQADgCAEgCQADgCANACQAFABAGADQAPgJARgEQAagHAVAEQAVAEAKAIQgOBEgQBCQAhAqAhAoQghAyghAxQALAeAKAeQAKAbAJAkQgFADgFAEQgHAFgHAGQABgHAFgKQAEADAEADgAX1iAIABAAQApgFAWANQADAEACAEQAfAtgGBEQAAADgBAEQgFAng8APQgKAFgKAFQg3AZhAALQgQgDgSgFQghgKgXgTQgbgIgXgOQgqgcgLgiQAFgRAOgMQAOgMAWgCQAegCASAWQARAWAogJQASgFARgKQAdgCAcgIQAzgPAMgTQAAgcgLgSQgGgJgJgHQgPgPgngLQgJADgKADQgFABgFACIgBAAQggAHgZgEQgngfAJguQAEgWALgUQAKgUAggPQANgGAOgDQA3gYA+gCQAMAAANABQAOAHATAMQAnAUgIAZQgBATgFAKQgHAOgMADQgIADgUgCQgMgBgHABQgIgBgGAAQgrAAgpAQQgYAJgNAKQgFAKABAKQAAAAAAABQAAAAAAABQAAAAAAABIADAJQACAEADAEQACABABABIABABQAKAKAUAHQAZAIAZAIQAIgBAHgCgAWNipQACAEAEAEQABABABABAFpDwQAfgXAfgXQgVgcgUgbQAkgCAjgCQgCgmgBglQAZARAZASQAUgiATgiQAFAaAEAaQANgGANgHQAUgCAUgCQgTAhgSAhQAgATAfASQgeAOgeAOQASAkARAjQgbgIgbgJQgBAHAAAHQgJAbgOAbQgSgegUgdQgRALgRAKQgQALgQAKQACgeAEgdQgpABglAAgA5dlxQAGgSASgNQARgLAUgDQAcgEASAMQgBATgDANQgBAHAAANQAUAaAVAhQAOAUANAUQANAWALAPQAEAJADAIQAbgWAXgQQAhhCAbg0IABAAQAJgNAJgOQADgEAEgDQAXgbAZgSQATgOAZgCQAIAAAHABQAFAFADAKQAGAPgFATQgEAPgLANQgJAMgJANQAAASABAWQALAHgHA4QgjAmgrA1QgGA6gJBDQgDADgDACQgaAVggATQgFAEgHACQgMARgRAGQgfAMgPgNQgDgDgEgDQgTg5gVhHQgggagggiQgBgYgBgaQgCgmgBgnQgHgJgIgJQggg0gSgVgAztDTQAMgnAQhJQABhSgGgmQgCgLgFgUQABgRADgIQAHglAqADQAOABAMAHQAigNAYgKQAbgJAYgGQAHgCAHgCQA9ALAoAXQANAHAHAJQAIAGABALQACALgHAIQgIAJgNgDQgFgBgFgCQgLgGgLgFQgcABgcAGQgUAFgWAIQgLAEgLAEQgJACgLADQALAeAIA5QgBAFgBAGQAGAHBNgBQAEABAEAAQAugBASAEQASABAOAMQANALADASQAAACAAADQgIAagjAEQgcACgwAEQgEAAgFAAQggAPg/ARQABAKAAAJQgEATgEAMQgGAuAAACQABABAOAAQAGACAIACQANAFAeAEQAeAFAOAGQACAAADAAQAEgBAGgDQAJgDAEgCQAPgDAKAFQALAGgBAOQgBAPgNAFQgIAGgNADQgjALhWAFQgDAAgCgBQhJgLgUggQgCgBgCgCQgpgbgOhVgArPGIQAHgWAIgpQAEgRADgNQgCgXgDgPIgJg/IAWhLIAAheQAFgUAJgHQAQgMAaAHQANADALADQAugDAFgDQAXgCAUABQANAHALAKQAaAVATAXQAxAaAbAfQAFAbgGAdQgDAWgKASQgCAQgHAPQgKAVgUASQgQAGgSAGQASAPANAPQAmAiAZAiQAIAPgCAHQgEAMgOAIQgOAIgRgDQgHgBgGgCQgJAAgIgFQgbgOgdgJQglglgogcQgegHgggEQgDASgDAPQAFApAEgBQACAKgHAGQgQALgUAAQgTgBgOgLQgOgLgDgPgAqJBhQAdgEASgEQAGgKAEgEQAYAHAXAJQAMgGALgEQAEADAEAFQAOAOALAOQATACANABQADAVgBAWQAAACgBACQAHAFgBAHQABACAAACQgQAPgSAMQgCABgCABQAAALgEAKQgYADgbABQgIANgKALQgLgDgLgDQgIgDgKgDIgDgGIgIgEIgFgxIgUgPIALgvIgYgeg");
	this.shape_7.setTransform(23.3,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF6673","#D966BF"],[0,1],9.1,6.9,9.4,-50.8).s().p("ACEDeIgNgEQgJAAgIgEQgbgOgdgKQglgkgngdQgegHgggDIgGAgQAFApAEgBQACAKgHAGQgQAMgUgBQgTgBgOgKQgOgLgDgPQAHgWAIgqIAHgeIgFglIgJg+IAWhLIAAheQAFgVAJgHQAQgMAaAGIAYAHQAugCAFgFQAWgBAUABQANAHALAKQAaAWATAXQAxAaAbAfQAFAbgGAdQgDAVgKATQgCAPgHAOQgKAWgUARQgQAHgSAFQASAPANAPQAmAiAZAjQAIAOgCAIQgEALgOAIQgKAGgNAAIgIAAgAg/h9QgSAEgdADIAAABIAYAfIgLAvIAUAOIAFAxIAIAEIADAGIASAFIAWAHQAKgMAIgMQAagCAYgDQAEgJAAgKIAEgDQASgMAQgOIgBgEQABgIgHgEIABgEQABgWgDgVIgggDQgLgPgOgOIgIgIIgWAKQgXgJgYgHQgEAFgGAKg");
	this.shape_8.setTransform(-30.6,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF6673","#D966BF"],[0,1],19,17.7,19,-41.3).s().p("AghEBQhIgLgUghIgFgCQgogbgOhWQAMgmAPhIQAChTgGgmIgHggQAAgQADgIQAIglAqACQAOACAMAGIA5gWQAbgJAYgHIANgDQA+ALAoAWQAMAIAIAJQAHAGACAKQACAMgHAHQgIAKgNgDIgKgDIgWgMQgcACgcAFQgUAFgXAJIgVAIIgTAEQAKAeAJA7IgCALQAGAHBMgBIAIABQAugBASADQASACANAMQAOAKACASIABAEQgIAagkAFIhLAFIgJABQggAPg+ARIABATIgIAfIgGAwQABABAOAAQAGACAHABQAOAGAdAEQAeAFAOAGIAEAAIALgEIANgFQAPgDAKAFQAKAGAAAOQgBAPgNAEQgJAHgNADQgiALhVAFIgGgBg");
	this.shape_9.setTransform(-84.4,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF6673","#D966BF"],[0,1],5.2,49.5,5.5,-8.5).s().p("AgtD1IgIgHQgTg5gVhHQgfgaghgjIgCgxIgDhMIgOgTQghgzgSgWQAHgRARgNQARgMAVgDQAbgDATALQgBATgDAOIgBAUQATAZAVAiIAcAnQAMAXAMAPIAHAQQAZgVAYgQIA8h2IAAAAIATgcIAGgHQAYgbAYgRQAUgPAYgBQAIgBAHABQAFAGAEAKQAGAOgFAUQgEAOgLAOQgKALgIANIAAAoQAMAHgHA4QgkAngrAzQgGA6gJBEIgGAFQgaAUgfAUQgGAFgHACQgLAQgRAHQgPAFgLAAQgMAAgHgGg");
	this.shape_10.setTransform(-117,-18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#CC26B3","#A626FF"],[0,1],-5.5,36.2,-5.5,-9.9).s().p("AgtDbQghgJgXgTQgbgIgWgPQgrgbgKgjQAEgRAOgNQAPgMAVgBQAfgDARAXQASAWAngJQASgGASgJQAbgDAdgHQAzgPALgTQAAgcgKgRIgPADIgzgQQgTgHgLgLIgBAAIgCgDIACADIgCgDIgFgIIAFAIIAAAAIAAAAIALgCIASgGQAoALAOAPQAJAGAHAKIAAAAQAqgGAVANIAGAHQAfAugHBEIAAAIQgFAng9APIgUAKQg3AZg+ALQgRgDgSgGgAg4gnQgngeAJguQAFgWAKgVQAKgTAggQQANgFAOgEQA3gYA9gBIAaABIAgASQAnAVgIAZQAAATgFAKQgHAOgNADQgHACgUgBQgMgBgHABIgOgBQgsgBgpAQQgYAKgMAKQgEAKABAKIAAAAIAAACIAAAAIACAJIAFAIQgUAFgSAAIgTgCgAABgqIAAAAg");
	this.shape_11.setTransform(165.8,-10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FF6673","#D966BF"],[0,1],7.8,41.2,8.1,-12.6).s().p("ABHDnIgsAIQgwAJgtAHQgKgNgEgPQgFgIgCgKQhEgZgdg8IgBAAQAiAAAmhRIgViHQAdgOAcgRIAXiJIAIgEQADgCANACIAKADQAPgIAQgFQAagGAWADQAUAEALAIQgOBFgQBBIBBBTIhBBhIAUA8QAKAbAJAlIgKAIIgNAKQAAgHAFgKIAIAHIgIgHQgFAKAAAHIANgKQAeAZAkAVIAPgoIAFgMQAHgIADgCIABAKQABAUgHAWQgMAlgiAZQgUgXgrgZg");
	this.shape_12.setTransform(107.9,-12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#CC26B3","#A626FF"],[0,1],-1.3,11.2,-1.3,-44.2).s().p("ACLDaIgYgdQgNAAgLgFQgJAKgPAKQgXgOgggQQgVgMgTgLQgeALgWALIguA9QgCgCgHAFQgDABgEgEQgQAEgTAAQgaAAgXgJQgXgKgMgPQAbgcA3hMIgFgfQgIgMgFgMQgKgVAMgRQAxgcAzgaQANg+APg/QAwgLAiAAQAwhGAagaIAGgDQAZAYAJA1IAGAtQAcAPAeAaIARAMQgMA6gMA+IBMBdIgHANQgMAKgEAeQgEATgKANIACAKQAGAagGAUQgEAVgJAKQgDAEgDABQgjgVgigsgAA9CRQAOgbAIgbIABgOIA2ARIgjhHIA8gbIg/glIAlhCIgnAEIgaANIgJg0IgoBEIgxgjIADBLIhHAEIApA2Ig+AuIBOgBQgDAdgDAeIAhgVIAggVQAUAdATAeg");
	this.shape_13.setTransform(71,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#CC26B3","#A626FF"],[0,1],13.1,43.1,13.8,-16.7).s().p("AhODuQgRgFgQgNQgVgHgDgIIgHgRIgFhnIgfg2IAThhIgRgmIgTgnIAAgBQAIgWAKgQQALgTAcgKQAGgIAKgHQAJgOAYgKIAbADQAmAFAiAOQAYgFAWACIAQADQAkAoAOAxQAHAGAEAGQAIASAAAKQgOAkgYAeQAHAIAGAKQAaAJAXAPQARAMANALQABAUgHATQgHAYgTAYQgBAVgJATIgMAaQgVAHgXAFQgaAGgcAEQgbAYghAUIg9gNgAhEAaIg3AKIAAAAIAhAgIgSA1IAfAIIAFA5IADgCIAegbIAwAUIANglIA5gFIgCgKIgEgQQAcgQAVgQQgCgEgMgGIgMgFQACgbgGgaIgmALIgDADIglgnIArgCQgDgNgGgPQAZgPAUgTIgZgPQAFgTADgTIABgPIgjAEQgLgQgMgQIgIgLQgLALgMANQgagLgcAAQgCALAAAKQgiAGgVAGIABAAIAgAcIgSAzIAfAGIAFA4IAOgKIADAGIAYALIgigHQAAANgDANg");
	this.shape_14.setTransform(10,-12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(128,0,102,0.502)").ss(1.3,1,1).p("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gogogognQAYgFAYgDA43o2IAmAgQAVARAVAQQAIgPAHgVQAEAJAFAJQAgAIAfALQAohDAlg7QAAABAAACQAEANAEANQABAEABAEQAggVAggOQAYgMAbgEQAIgBAJAAQgCAJgCALQgDAQgLAUQgIAOgMAOQgLANgLANQAKATALATQAXAOALAtQg1Adg7AkQAIBEAFBJQgEAAgEAAQglAAgogBQgHAAgIgBQgLAUgOANQgaAYgPAHQgEACgEACQgUhEgVhMQgvgCgwgHQAFgbAEgbQAIgqAHgrQgLgHgKgHQgugmgkgSQANgPAUgNQAUgLAWgGQAMgDALgBQAEADAFAEgA5Ao9QAEADAFAEA5Ao9QAPgCAOACQgQgFgMgDQgIgDgHAAIAJAHQACACADACgA5Ao9IAAAAA5FpBQACACADACArpFqIAKgIIAAhaQAFgOAIgBQAPgCAVAKQALAGAKAGQAkgIAJgKQAUgGARgFQAJAKAGALQAQAZALAaQAxAPAhASQgEAYgLAaQgHASgLARQAEAOAAAMQACAUgFAQQgPAFgSAEQACAKgCAKQAeAkAVAlQAEAKgEADQgHAFgNACQgOACgPgFQgGgCgGgDQgHADgGABQgXACgXAFQgcgngegjQgdAAgeADQgHAPgHAMQAJASAIgLQADADgCAAQgRAGgTgBQgRgBgPgIQgOgIgHgLQAPgTAPgfQAHgNAHgLQgFgUgGgOIgTg6IAigeIACgCQAggIAagIQgJgWgFgMQAfAJAfALQAHgTAIgTQAEAGAFAFQAPAUAPAUQAWgLATgLQAAAdgDAcQAAADgBADQAQABAKADQAFAAAFABQgVATgXARQgCACgDACQAOAQALAOQggACghACQAAAXgCAXQgNgHgNgHQgLgFgLgGIgFgHIgRAbIgJhAIgpAGIAWg7IgugZIgBgBIAAAAQACgBABAAgAyHA0QAFAFAEAFQAIACADAEQAEAEgCACQgCADgGgGQgCgCgCgDQgFgHgFgHQgUAJgTANQgOAKgRAMQgHAGgIAGQgCAAgDACQAVARATAkQgBAFgCAFQgIAPAoAKQACABABABQAnAEATAHQAQADAOAKQAMAKAGAOQAAACABACQgNASgfACQgcACgqADQgEAAgEAAQgQAZglAaQABAJABAJQgHAJgIAEQgHAOgFAFQgEADgDgCQgBgBAHgCQAAABABABQADACADADQAHALASAJQAQALAGAKQgkANhBALQgBgBgCgBQgogYgFgkQgCgBgBgBQgtgWgbg8QAWgfAag3QgDhDgOglQgEgLgGgRQAFgKAGgEQAOgVAmAFQAMABALAGQAZgQAPgOQASgPARgMQAEgDAFgDQAwAUAjAcQAEADAEADgAy4GlQgBAAgBABQgEABgDABQAAABABAAQABABACABQACgDADgDIAAAAQAGgFADgDQAIgHAGAAQAHgBgCAEQgBAFgKgBQgIAFgJADg");
	this.shape_15.setTransform(23.6,2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#991ACC","#801AFF"],[0,1],-4.3,-5.6,-4.3,-61).s().p("ACODvIgmgfIgbA5QgJATgMASQgYgggeggQgVgZgTgaQgjAUgdATIhEBHQAJgeAFgbQACgKABgOQgWADgXAAQghAAgfgHQgggGgYgKQAtgiA5g3ICFgBIgfB5IA2gqIA4gpQAcA7AcA8QAQg1AMg0IADgYIBwAzIhCh5IBZgaIAHgCIBeBCIgRALQgdALgVAYQgUAQgXAMIAGANQALAeAFAcIAHAwIADAQQgxgcgygsgAi+BSIgXglIgXgcQgVgbgHgXIBNgPIBQBOIhjBDIAQgPgACDgaIBNhvIhNAVIgvATIgJh4IhFB3IhZhXIAQCGIhHgFIAXgEIAFinQA+AbAwAeQA0hSAlgzIAIgHQARAtAHBAIAEA5QAzgBAzAHIAeABQghBEggBGIg9gbg");
	this.shape_16.setTransform(74,35.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FF994D","#E69980"],[0,1],36.6,6,36.6,-53).s().p("AhADfQgogXgFglIgEgCQgtgVgag8QAWggAZg1QgDhEgNglIgKgbQAEgKAHgEQANgVAmAEQAMACALAGQAZgQAQgPIAigaIAJgHQAwAUAjAcIAIAHQgUAJgUAMIgeAWIgQAMIgEACQAVASATAkIgEAKQgHAPAoAJIADADQAmAEAUAGQAQAEANAJQANAJAFAOIABAFQgMARggADIhGAEIgIABQgQAZgkAZIACASQgIAJgGAEQgHAPgGAEIgBgBQgGABAAABIABABIAAAAIABAAIABAAIABAAIAAAAIACgBIAAAAIABgBIAHAGQAHAKAQAKQAQAKAHALQglANhAAKIgCgCgAAnDLIAAgBIAGgDIACAAIABgBQAGgEACgEQAJgGAGgBQAGgBgBAEQgCAFgKgBQgHAFgKAEIgFAFIgDgBgAgTCdIgBAAIAAAAIgBgBQAAgBAGgBIABABIgBABIAAAAIgCABIAAAAIgBAAIgBAAgABuiWIgEgFIgJgOIAIAKQAIABADAEQAEAFgCACIgBABQgDAAgEgEg");
	this.shape_17.setTransform(-102.1,24.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FF994D","#E69980"],[0,1],17.7,-15.1,18,-72.9).s().p("AgWBzQgeAAgeACIgOAcQAJARAIgKQABAAAAABQABAAAAABQAAAAAAAAQAAAAgBAAQgRAHgSgCQgSgBgPgIQgNgIgIgLQAPgSAPggIAPgYQgGgTgGgPIgTg4IAjgfIAtAaIgWA6IApgGIAJBAIARgbIAGAHIAVAKIAZAOQACgWAAgXIBBgFIgYgdIAEgDQAXgRAVgUIgKgBQgKgDgQgBIABgFQAEgdgBgcQgTALgWALIgegoIgJgLIgOAmQgfgLgfgJIAOAhQgaAJgfAHIAJgIIAAhaQAFgOAIgBQAPgCAVALIAVALQAkgIAIgKIAlgLQAJAKAGAMQAQAZALAaQAxAPAhASQgEAYgLAZQgGATgMAQQAEANAAANQADATgFARIghAIQABAKgCALQAeAkAWAkQADALgEADQgGAEgOACQgNACgQgEIgLgFQgIADgGAAQgXADgXAFQgbgogdgig");
	this.shape_18.setTransform(-39.2,45.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FF994D","#E69980"],[0,1],10,68.8,10.3,10.8).s().p("AhHBfQgvgCgwgHIAJg1IAPhVIgWgOQgtglgkgTQAMgPAVgNQAUgLAVgGIAYgEIAJAHIAmAgIAqAhQAIgPAGgVIAJASQAhAIAdALQAphDAlg7IAAADIAIAaIACAIQAggUAfgPQAZgMAbgDIARgCIgFAUQgCARgLATQgIAPgNAOIgWAaIAWAmQAXANAKAtQg0Adg7AkQAIBDAEBJIgIAAIhMgBIgPgBQgLAUgOANQgZAYgPAHIgIAFIgpiRgAiTirIAAAAIgGgEIgJgGQAIgBAIADIAcAIQgOgBgPABIAJAHIgJgHgAiTirIgGgEIAGAEgAiTirgAiZivIAAAAg");
	this.shape_19.setTransform(-121.7,-37.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#991ACC","#801AFF"],[0,1],-13.3,49.1,-13.3,3).s().p("AhACsQgOgSgHgZQgbgIgXgMQgrgVgUgbQAIgOAPgJQAPgLAVgDQAdgEAUAMQAIACASgSQAHgLAGgMQAcACAbgBQAYgDARgDQADAHAFAFQAIANAPAKIAnAeIAEgJQAOgQAAgEIACAJQAMAwgMBBIgCAGQgGADgsgNIgTAKQg3AZg7AQIgOgVgAAtgMIgCgLQgBgKACgJIAZgJQgEgTgKgOQgIgVgagTQgDAGgFAGQgRAWgMANQgNgdARgrQAIgTALgTQAEADASAFQAHADAHAFQA5gSA8gCIAZAAQABAKAGANQAPAWgPAYIABAZQABANgEAGQABAGgHADQgDACgBAEIgNgBQgrAAgpAJIgOAEQACAPAAARQgKAEgQADIAAAAg");
	this.shape_20.setTransform(173.6,-23.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FF994D","#E69980"],[0,1],9,56.3,9.3,2.4).s().p("AARDQIg4AMIh8AWQAPgdATgfIASghQhVgmg6g9IgDgCQBEgCBIg3IgviwIBuAiIAtiyIAOAoQAGAPANATIAKAOQAUgLAVgJQAggOAcgGIAxgJQgdBWgfBUICGBFQg/AzhAAxIArBKQAWAjAVAqQgXABgWADIgfgQQAEAMADAOIAFAUIAQBDIgEgHIgghQIgDgGIAEgJIAAgBIAEgLIADABIgCgEIgBADIgUgMIABAEIALAdIgCAGIACgGIAAAAIgCAGIgSAlQgXArgnAkQgIg8gXg+gACCDQIAAAAIADAGIgDgGgACCDQIAAAAgACCDQIAAAAgAB3CzIgBgEIAUAMIgEALIAAABIgEAJIgLgdgACKC7IABgDIACAEIgDgBg");
	this.shape_21.setTransform(106.7,-27.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#991ACC","#801AFF"],[0,1],24.7,53.7,25.5,-6.1).s().p("Ah8BgIArgKIAHBEIgEgDQgUAIgGAEIgOAIgABYhbIANgaIgngEQAGgYAEgZIADAHIASgCQAQAAALgEQgIAcgLAYIAYACIgkAcIgBgEg");
	this.shape_22.setTransform(-1.7,-22.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(191,0,153,0.749)").ss(1.9,1,1).p("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DgOgIQgFgCgFgEQgGAHgFAEQgRATgSAUQgQglgRgiIgHAQIgFgaQgZAGgYAIQABgCABgBQAFgFACgHQgSACgRgCQgRgCgOgGQgPgFgKgHQAWgPAWgVQALgKALgIQgIgRgJgOIgDgGIgHgMIgSghIBAgFQgJgOgHgKQgEgFgDgEQgBgCgBgBQAOAEAOAFIAAg9QAGgHAHAFQAOAIAQAPQAGAFAEAFQAEADADAEQAGgDAEgDgAsmL8QAAAAgBAAQgLAMgKAKQALgFALgRgA1rDbIACgBQABAAABgBQAGgCADgEQADgEACgJQABgDAAgDQACgIACgIQgMARgLASIgDAEQgBADgCADQADgBADgBgA13DoIgGAKQgFAIgFAIQAGgBAEAAQAgAFAeAPQgCADgDAEQgVAXADAUQgBADgBACQAfAIAVALQAOAFANAIQALAIAJALQABABABACQgSAJgbABQgdACgjACQgEAAgEAAQAAAigKAkQACAIACAIQgLgBgLgEQgRADgQgLQgCgBgBgCQABAEABADQAAAFAAAFQgEADgFACQgnASg4ARQAAgBAAgCQgHgjAKgpQgCgBgBgBQgxgPgogjQAigZAigkQgIg0gUgjQgGgLgHgNQAJgDAJAAQAVgGAgAHQALADAKAEQAPgTAIgTQAKgTAIgSQACgGADgFQAkAdAdAiQAIAIAGAIIAAAAQABAAABAAIAAAAQADgCADgBA1xDdIAAABQgDAEgDAGA1xDdIAAABQgDAEgDAGA1xDdIAAAAA1zDeQABAAABgBA1uDXQgBADgCADA2mHnQABALADAKQAEAQgBARQAAABABACQAAgEACgFQACgFAAgFQADgKACgHQACgIgDgFQgCgEgGgIQgEACgEACgA2oHWQAAgCAAgB");
	this.shape_23.setTransform(25.6,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#660DE6","#590DFF"],[0,1],-7.3,-25.4,-7.3,-80.8).s().p("AgHEPIgqhOIhLA3IhZBSIAkh1IANgtQgbABgcAAQgoAAgngDIhNgJIBBgtIC1ABIg4C2IBNg+IBNg9IBLCyQAShOAPhPIAFgiICjBUIARAnIAMAbQhAgjhBgsIg0ghIgeB3IgRA2QgZgxgcgygACbBKICfgmIA+AfIgcAJQgrAMgoASQgiANgjALIAHAPQARAkAOAiIhPiNgAjKAgIgngpIghghQgigggZgfIAvAAIB+BwIgtAcIgHAFIAKgIgAChgpIBxiWIAegGIhvCoIgggMgAiYhnIARABIgTjSQBNBBBAA6IBoiqIAIgKQAKBCAFBMIAEBFQA8gOA9gMIhKAYIhEAaIgJi8IhiCqIiDiLIAeDBIgpgFg");
	this.shape_24.setTransform(76.9,55.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FFCC26","#F2CC40"],[0,1],54.3,-6.6,54.3,-65.6).s().p("AAODFQABgQgEgRQgDgKgBgKIAIgFQAGAIACAFQADAFgCAIIgFAQIgCALIgCAIIgBgDgAhgC1QgHgjAKgqIgDgBQgxgQgogjQAigYAigjQgIg1gUgjIgNgYQAJgCAJAAQAVgGAgAHQALACAKAEQAPgTAIgTIASglIAFgKQAjAdAdAhQAIAIAGAJIAAAAIACgBIgGAKIgGAKIgKAQIAKgBQAgAFAeAPIgFAIQgVAXADAUIgCAEQAfAJAVAJQAOAFANAJQALAIAJAKIACADQgSAJgbACIhAADIgIAAQAAAjgKAjIAEARQgLgCgLgDQgRADgQgLIgCgEIABAIIAAAKIgIAEQgnATg4ARIAAgDgAAGB+IgBgCIAAgBIAAABIABACgAAHCQIAAAAgAA8h5gAA8h5IAAAAIAAAAIAGgDIgGADIAAAAIAAAAgAA8h5IAAAAIADgHIgDAHIADgHIADgDIAXgkIgEAQIgBAHQgCAIgDAEQgDAEgGADIgCABIgCAAIgGADgABCh8IAAAAg");
	this.shape_25.setTransform(-119.8,37.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FFCC26","#F2CC40"],[0,1],25.6,-38.7,25.9,-96.4).s().p("AgRBkIgHARIgFgbIAGgBIAGALIARgpIAIAIIAYAQIAgAVIgQhEIBQgDIg1gmIAGgFIA2gvIgUACIgtAEIABgHIADgeQAwADAnAFQgMAWgQAWQgLAQgNAOIARAVQAOARALAQIggAFIggALQAWAnASAmQAAAHgGgCIgYgHQgMgDgOgIIgKgGIgLALIgjAnQgPglgRgjgAhPBpIABAAQgLARgLAFIAVgWgAhMBmQAFgFACgHQgSACgRgCQgRgCgOgGQgPgFgKgHQAWgPAWgVIAWgSQgIgQgJgOIgDgGIAvAOIghBHIA9gbIAKA0IgxAPIACgDgAgdBagAhIhhIAAg9QAGgHAHAFQAOAIAQAPIALAKIgGAtIgwgPgAgBh+QASgMAKgMIAggVIAGAaIAEAZIgqAmIgcgsg");
	this.shape_26.setTransform(-47.2,68.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#660DE6","#590DFF"],[0,1],38.1,71.7,38.8,11.9).s().p("AAGC2IgagVIAQgcIBKA9IABAhIhBgtgAiLBwIAwgLIACAXIhKAcgACBAzIgGgHIAOgNIAbAVIgjgBgAhzhOIgRgHIAIgCIgMgfQgPgegKgcIAgAKQAqAOAqARIgEAXQg0gVgogBIAlA8IgLgEgAAliDIgSAQIgmhGIgEgIIACgHIAHgaQAcAuAXAxIA7g0IgHAhIgBAHIgSAMIgZARIgIgRg");
	this.shape_27.setTransform(-15,-40.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FFCC26","#F2CC40"],[0,1],13.7,90.8,14,32.8).s().p("Ag7BqQg/AXg/AUIAUg6IAhhcIgdgJQg7gZg3gOQAUgOAXgLQAXgLAXgJQAfgLAcgFIg0gxQgPgOgPgLQAqASApAWIA5AbIAEhtIAMATIBKBLIBgiGIAAAFIgFBQIgBAZQAngQAogMQAcgKAegEIASgCIgQAWQgMATgPATQgMAPgPAPIgaAbIAqAlQAjASAcAjIiQAnQAUBMAUBQIgLgFIhfgrIgRgIQgKAXgLATIglBAIgIAPIgpihg");
	this.shape_28.setTransform(-125.4,-59.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#660DE6","#590DFF"],[0,1],-22.8,64.2,-22.8,18.1).s().p("AAXB7IgTAJQg2AZg5AVIAHggQAFgbAIggQgbgHgYgJQgqgQgfgUQAMgIAQgIQARgIATgFQAcgGAYACIgHgsIgJgiIA3ALIBGAKQABgdgDgYIADgGIgDAGIAAgBIADgFIAagrIACgFQAMgRAOgRQgEAZAEAZIACAaQA6gLA6gFIAZgBQgKANgIAPQgIAYgXAYQADANAFAIIAOAUQAJAKAGAHIAMAMIgOgBQgqgBgpAEIgpAFIACATQADAOAGALQAEAKAGAKIgJgLIgCAKQgHA0gSA8IgDAGQgHghgagpgABlBYIgGgIQAPASALAVIAHAMIgbgrgAgCifIgCgSQAKAaADAcIADAOIgDAGIgDAHQgGgdgCgigAAMhtIAAABIgDAFIADgGg");
	this.shape_29.setTransform(183.1,-38.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FFCC26","#F2CC40"],[0,1],7.2,72.2,7.4,18.3).s().p("AhDDCIhHAOIiZAeIBShdIArgwQhlgzhYg+IgEgCQBngFBnggIhJjXIClBiIBBjZIAWBTQAKAhAMAjIAKAZIAxgcQAmgUAjgQIBDgeQgqBmgvBoIDJA3Ii8BoIBCBXQAiAsAhAvIhEgMIhwgoQANBkAPBkIgvheIgPgdQgNgagPgYIgKARQgUAggXAgQgiAzgqAwQAEhigEhjg");
	this.shape_30.setTransform(108.6,-43);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF00CC").ss(2.5,1,1).p("AgojsIA/B8IBihjIgeCIICLgMIhvBUIBzBPIiLgGIAlCHIhohfIg5B/IgSiLIh/A8IBMh2IiHgjICFgpIhRhyICBA1g");
	this.shape_31.setTransform(193.5,-52.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3300FF").s().p("AgvBiIh+A8IBLh2IiHgjICFgpIhQhyICAA1IAMiLIBAB8IBihjIgfCIICMgMIhwBUIBzBPIiLgGIAlCHIhohfIg5B/g");
	this.shape_32.setTransform(193.5,-52.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF00CC").ss(2.5,1,1).p("AUzomIC0DOIkFhPIAGERIiWjkIirDVIAfkPIkLA1IDGi7IjviDIEQgQIhij+IDaCjIBYkDIA/EKIDpiOIh6D0IENApgAPtKcIDxBZIj7A0IB/DfIjih5IguD8IhfjuIjGCjIBRjzIkAgCIDZiHIjDimID+AlIgrj8ICqC/ICCjdIAIEAIDxhWgAvCsaIi2ALIBDCrIiThtIg7CtIgqiyIicBfIBRijIi0gbICnhJIh4iJICvA0IgFi3IBlCZIByiPIgVC1ICzgkIiEB+gAk9skIBAB8IBihjIgeCIICLgNIhvBVIBzBQIiMgHIAlCHIhnhfIg6B/IgSiKIh/A7IBMh1IiHgkICFgqIhRhyICBA2gApaNnIg9hIIBaAdIAAheIAyBQIA+hJIgOBfIBegRIhHBAIBSAvIhfADIAhBaIhLg7IghBZIgThdIhSAvIAshTIhdgRgA1/EpIA6BeIBHhUIgQBtIBtgSIhTBJIBfA4IhuADIAlBoIhXhFIgnBoIgWhsIhgA2IA1hhIhsgUIBmgpIhGhVIBpAjg");
	this.shape_33.setTransform(-1.5,2.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3300FF").s().p("AGDLqIjFCjIBQjzIkAgCIDaiHIjDimID9AlIgrj8ICrC/ICBjdIAIEAIDyhWIifDJIDwBZIj7A0IB/DfIjih5IguD8gAqzqIIh/A8IBMh2IiHgjICFgqIhRhyICBA1IAMiLIBAB8IBihjIgeCIICLgMIhvBUIBzBQIiMgGIAlCHIhnhfIg6B/g");
	this.shape_34.setTransform(35.2,20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF00").s().p("AovP3IhSAvIAshUIhdgQIBYgkIg9hIIBaAdIAAhfIAzBRIA9hJIgOBeIBegQIhGA/IBSAwIhgADIAhBZIhLg6IggBZgA1xJnIhhA2IA1hhIhsgUIBmgoIhFhWIBoAjIABhuIA6BeIBIhUIgRBtIBtgSIhSBKIBeA4IhuADIAlBoIhWhFIgoBngARSlDIirDVIAfkPIkLA1IDGi7IjviDIEQgQIhjj+IDbCjIBYkDIA/EKIDpiOIh6D0IENApIj6BsIC0DOIkFhPIAFERgA0tqfIicBfIBRijIi0gbICohJIh5iJICvA0IgFi3IBmCZIBxiPIgUC1ICzgkIiFB+IChBXIi3ALIBDCrIiThtIg7Ctg");
	this.shape_35.setTransform(-1.5,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},2).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF00FF").s().p("AgzBCQgWgWgCgkQgBgiAUgaQAYghApAAQAgAAASAaQARAWAAAhQAAAkgUAZQgVAdgkgBQgdABgVgUgAgWgaQgJAPAAATQAAASAKALQAJAHALABQANgBAKgIQALgMABgSQACgxgdAAQgSAAgLARg");
	this.shape_36.setTransform(140.4,-54.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF00FF").s().p("AgOBtQgGgGAAgIIAAgRIABgRIgDhQIgegCQgTgCAAgTQAAgIAGgGQAGgHAJAAIAaACIAAgQIgBgQQAAgIAHgGQAGgGAJAAQAXAAgBAnIAAANIAQgCQASAAAHADQAMAEAAAPQAAAJgHAGQgGAFgIAAIgIAAIgIAAIgPABIADBSIAAAHIAAAJQAAAkgXAAQgHAAgHgFg");
	this.shape_37.setTransform(124.7,-57.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF00FF").s().p("AAgBIIgEggQgDgSAAgPIABgNIAAgOIABgFIAAgHQAAgNgGAAQgOAAgMARQgMARgIAZIgBAPIgBAOIgBANIgBAOQAAAJgGAGQgGAGgKAAQgJAAgGgGQgGgGAAgJIgBgOIgBgNQAAgPACgbIACgqIAAgOIgBgOQAAgJAHgGQAGgGAJAAQAVAAABAZIAAABQAXgXAYAAQAeAAALAZQAHARAAAhIAAALIAAAJQAAAMAEATQADAUAAAMQAAAIgGAGQgGAGgKAAQgTAAgCgTg");
	this.shape_38.setTransform(95,-55.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF00FF").s().p("AgzBCQgWgWgCgkQgBgiAUgaQAYghApAAQAgAAASAaQARAWAAAhQAAAkgUAZQgVAdgkgBQgdABgVgUgAgWgaQgJAPAAATQAAASAKALQAJAHALABQANgBAKgIQALgMABgSQACgxgdAAQgSAAgLARg");
	this.shape_39.setTransform(77.8,-54.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("AgTByQgGgGAAgJIAAgdIgBgdQAAgNACgVIABgiQAAgJAGgGQAGgGAKAAQAIAAAGAGQAGAGAAAJIgBAiIgCAiIABAdIAAAdQAAAJgGAGQgGAFgIAAQgKAAgGgFgAgOhPQgHgGAAgKQAAgKAHgHQAIgGAJAAQAKAAAHAGQAHAHAAAKQAAAKgHAGQgHAHgKAAQgJAAgIgHg");
	this.shape_40.setTransform(65.5,-58.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF00FF").s().p("AgOBtQgGgGAAgIIAAgRIABgRIgDhQIgegCQgTgCAAgTQAAgIAGgGQAGgHAJAAIAaACIAAgQIgBgQQAAgIAHgGQAGgGAJAAQAXAAgBAnIAAANIAQgCQASAAAHADQAMAEAAAPQAAAJgHAGQgGAFgIAAIgIAAIgIAAIgPABIADBSIAAAHIAAAJQAAAkgXAAQgHAAgHgFg");
	this.shape_41.setTransform(53.2,-57.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF00FF").s().p("AgwBFQgZgWAAghQAAgeAWgiQAZglAhAAQAQAAAWAIQAaAMAAAOQAAAHgFAGQgGAGgJAAQgHABgJgIQgKgHgSAAQgLAAgPAXQgNAYAAAPQAAARAMAIQALAJASAAQAKAAAPgIQAPgHAEAAQAJgBAGAHQAGAGAAAIQAAAMgbAMQgXALgPAAQgiAAgXgTg");
	this.shape_42.setTransform(37,-54.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF00FF").s().p("AAfBNQgUAIgUgBQgWABgQgKQgRgKgDgVQgGgnAAgdQAAgVAFgZQADgSASAAQAJAAAGAFQAHAGAAAJIgCAVQgDAPAAAIQAAAVACAQQABAQADALIAIACIAHABQAQAAAVgEIAAgcIgBgZQAAggADgXQADgTATAAQAJAAAGAFQAHAHAAAIIgDA3IAAAfIAAAfIABAKIAAAKQAAAIgGAHQgHAFgJAAQgNAAgGgMg");
	this.shape_43.setTransform(20.7,-54.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF00FF").s().p("AArB2QgKAGgMACQgLACgLAAQgjAAgXgWQgYgXAAgkQAAgqAYgYQAXgaAmAAQALAAAKACQAJADAHAFQACg2ACgUQADgSASAAQAJAAAGAGQAFAGAAAIQAAAYgDAtQgEAsAAAXQAAA4AEATIAAAEQAAAJgGAGQgGAFgJAAQgLAAgGgKgAgfAHQgMANAAAbQAAARANAMQAMAMARAAQALAAAGgDQAEgBAKgJIAFgFIAAg5QgFgKgIgEQgIgEgMgBQgWAAgLANg");
	this.shape_44.setTransform(2.8,-59.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF00FF").s().p("AgzBCQgWgWgCgkQgBgiAUgaQAYghApAAQAgAAASAaQARAWAAAhQAAAkgUAZQgVAdgkgBQgdABgVgUgAgWgaQgJAPAAATQAAASAKALQAJAHALABQANgBAKgIQALgMABgSQACgxgdAAQgSAAgLARg");
	this.shape_45.setTransform(-15,-54.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF00FF").s().p("Ag9BRQgFgFAAgJIAAhmIAAgOIAAgOQABgJAFgGQAFgGAKAAQARAAAEASQAagUAigBQAfAAAAAqIAAAKQgBAZgVAAQgTAAgBgVIgBgQQghAGgPAfIAABNQgBAJgGAFQgGAHgJAAQgJgBgGgGg");
	this.shape_46.setTransform(-30.6,-54.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF00FF").s().p("AgNBtQgIgGABgIIAAgRIAAgRIgChQIgegCQgTgCAAgTQAAgIAGgGQAGgHAJAAIAbACIgBgQIgBgQQABgIAFgGQAHgGAJAAQAWAAAAAnIAAANIAQgCQASAAAHADQAMAEAAAPQAAAJgGAGQgGAFgJAAIgJAAIgHAAIgPABIADBSIAAAHIAAAJQAAAkgXAAQgHAAgGgFg");
	this.shape_47.setTransform(-46.1,-57.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF00FF").s().p("AAgBIIgEggQgDgSAAgPIABgNIAAgOIABgFIAAgHQAAgNgGAAQgOAAgMARQgMARgIAZIgBAPIgBAOIgBANIgBAOQAAAJgGAGQgGAGgKAAQgJAAgGgGQgGgGAAgJIgBgOIgBgNQAAgPACgbIACgqIAAgOIgBgOQAAgJAHgGQAGgGAJAAQAVAAABAZIAAABQAXgXAYAAQAeAAALAZQAHARAAAhIAAALIAAAJQAAAMAEATQADAUAAAMQAAAIgGAGQgGAGgKAAQgTAAgCgTg");
	this.shape_48.setTransform(-61.9,-55.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF00FF").s().p("AhJByQgHgGABgJQAAgJAGgHQAHgFAKAAQALAAATgDIAAhHQAAgpACgnIgiABQgJAAgGgGQgGgGAAgJQgBgKAHgFQAFgFAIgBQAOgBAgAAQAdgBAvAHQATADAAATQAAAKgIAGQgFAEgIAAQgIAAghgEQgCAdAAAuIAABHIAqgBQAKAAAFAHQAHAGAAAIQAAAJgHAHQgGAFgKABIgbAAIgaAAQgJAAgWADQgVADgLgBQgJAAgGgFg");
	this.shape_49.setTransform(-79.3,-58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(18));

	// Layer 3
	this.instance = new lib.WhiteSheet();
	this.instance.parent = this;
	this.instance.setTransform(30.6,-57.8,0.626,0.213,0,0,0,206.3,103.6);
	this.instance.alpha = 0.738;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.1,-84.4,316.5,114.7);


(lib.SamFlippim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Flip1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-28.6,x:-76.8,y:-38.5},2).to({scaleX:1,scaleY:1,rotation:-59.4,x:-154.6,y:-53.9},2).to({scaleX:0.87,scaleY:0.87,rotation:-82,x:-223.6,y:-64.9},2).to({scaleX:0.72,scaleY:0.72,rotation:-126.8,x:-277.2,y:-60.5},2).to({scaleX:0.61,scaleY:0.61,rotation:-194.3,x:-357.9,y:-61.9},2).to({scaleX:0.49,scaleY:0.49,rotation:-220.8,x:-424.7,y:-77.3},2).to({scaleX:0.39,scaleY:0.39,rotation:-269.4,x:-461.4,y:-72.9},2).to({scaleX:0.32,scaleY:0.32,rotation:-321.6,x:-493,y:-55.2},2).to({scaleX:0.24,scaleY:0.24,rotation:-377.8,x:-520.9,y:-49.4},2).to({regX:-0.7,regY:2.5,scaleX:0.2,scaleY:0.2,rotation:-412.6,x:-564.2,y:-28.9},2).wait(3).to({regX:6.2,regY:12.5,scaleX:0.2,rotation:-360,skewX:-52.6,skewY:127.4,x:-569.3,y:94.5},0).to({regX:1.5,regY:18.2,scaleX:0.27,scaleY:0.27,skewX:-31.8,skewY:148.2,x:-523.2,y:84.3},2).to({regX:-3.8,regY:14.7,scaleX:0.35,scaleY:0.34,skewX:10.6,skewY:190.6,x:-486.5,y:78.4},3).to({regX:-3.7,regY:14.6,scaleX:0.45,scaleY:0.44,skewX:73.5,skewY:253.5,x:-454.3,y:115.2},3).to({regX:-3.6,regY:14.3,scaleX:0.52,scaleY:0.51,skewX:129.7,skewY:309.7,x:-426.4,y:150.3},3).to({x:-347.9,y:200.9},3).to({scaleX:0.52,scaleY:0.51,skewX:300.4,skewY:480.3,x:-284.8,y:198},3).to({regX:-3.8,scaleY:0.51,skewX:401.2,skewY:581.2,x:-263.4,y:112.9},3).to({regX:-3.9,regY:14.4,scaleX:0.7,scaleY:0.73,skewX:503.4,skewY:683.4,x:-223.9,y:76.9},3).to({scaleX:0.98,scaleY:1.02,skewX:581.4,skewY:761.4,x:-159.9,y:10.8},3).to({scaleX:1.51,scaleY:1.58,skewX:677.2,skewY:857.2,x:-77.1,y:-44.2},3).to({scaleX:1.6,scaleY:1.66,skewX:705.3,skewY:885.3,x:29.4,y:-99.9},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-70.3,122.2,140.7);


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
		var bgm = createjs.Sound.play('bgmIntro',{loop:-1});
		
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
		
		 window.open ("intro_Scene2.html","_self");
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
(lib.intro_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		playSound("introverbals");
	}
	this.frame_99 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(97).call(this.frame_99).wait(1));

	// Layer 16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghYAX3MAAAgvtMBCxAAAMAAAAvtg");
	mask.setTransform(274.1,195.9);

	// Sam
	this.instance = new lib.SamFlippim();
	this.instance.parent = this;
	this.instance.setTransform(587.5,182);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Verbal
	this.instance_1 = new lib.Verbal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(243.8,213.7,1.244,1.244);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_2 = new lib.Copyright("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,393.5);

	this.instance_3 = new lib.Beach1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(274.7,196,1,1,0,0,0,-0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.UI}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(333.9,201.6,482.6,401.3);
// library properties:
lib.properties = {
	id: '4607B83E18628B4BA8AC711E7FE8E68F',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmIntro.mp3", id:"bgmIntro"},
		{src:"sounds/introverbals.mp3", id:"introverbals"}
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
an.compositions['4607B83E18628B4BA8AC711E7FE8E68F'] = {
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