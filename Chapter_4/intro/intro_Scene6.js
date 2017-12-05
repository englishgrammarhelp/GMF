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


(lib.MickLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCEaQgTgQgPgkQgPgkgxhLQgxhKhWhKQg5gxASgeIABgBIABABQAGAFAMAHQDrD2gEA7QgBAMAFAMQAbBTBXggIAhgNIABACIABAEIAAACQghAdgjAAQggAAgggagACDEKQgEgDABgGQAeg2A0gkQABgFAEgFIABgBQgFgWAHgSIgHgHIAKAAIACgDIACgBIADADIAZgCQAJgQADgSQABgGgCgFQgHgGgJAEIgaAUIgCABIgEgCQgEgCABgFQAOgOAQgIIAAAAIACgCIACgCIAAgCQgBgGgGgDQgIgFgKACIgCADIgCACIgEABIgHAIQgHAIgJgCIgCgCIAAgCIgBgBIAAgCIASgRIAFgEIACgJQABgEgBgEQgHgGgJgBIgOgCIgBADQgDAHgIgDIgCgCIAAgBIgDAFQgGAKgKAGIgEgBIgCgEIgBgBQAFgJAGgIQAJgLAMgEQADgJgDgKIgFgLQgIgFgJAEQgJAGgHAHIAAALIAAACIgFABIgDgBQgEAIgDAJIgCAEIgGgBIgDgDQADgUAKgOQgFgWgKgWQgDgHgGgEQg0AKAPA2IADAEIAEAFQAPAMAJAOQAKAUgBAbQgCApgZAMIgHALIgBACQgFACgGABIgRgLIgJgBIAAgCIABgCQglgbgXgcQgPgSgPgsQABAAgBgGIAAABIgBAEIgFgTIAAgCIAAgCIgEgMIgLgfIAAgDIAAADIgSg1QgGgMgHgSQgFgQgFgWIgBAHIgJgWIAAgBQgUg0gGgIQgJgMgQgDQgMgCgNABIAAABQgFgBgHABIAAAAIgCgBIgFABIADgQIAAgBIANACIADACQAGgDAIgBQBJARA6DiIAAgEIAGAVIAUAuQAcBDA1AkIAXgEIAEgBIAIgJQADgDAAgEIACgCIACgCQAGgUgEgTIgCgOIgCgBIgDgEQAAgHgCgFIgFgIIgGgDIgEgBQgGgFgEgGIgEgGQgUhCA/gTQAiAUAHAmQAKgIAOgEIAAgBQAiANgGAgQAWABAPARIABABIAAAIIAAAHQAdABAFAbIAFAAIADABQAWAdgWAgIgGAJQgSAJgOgEIgDAIIgBACQAHA2g3AdQgIAEgGAIIgdApIgEgBg");
	this.shape.setTransform(28,30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AgMDpQgEgMABgMQADg8jrj1QgLgHgHgFIgBgBIAAABQgIABADgdQAFgnAVgmQAVgmAGgnIAFgBIACABIAAAAQAHgBAGABIAAgBQAMgBAMACQAQADAJAMQAGAHAUA1IABABIAIAVIABgGQAFAVAGARQAGASAGALIASA1IAAgCIABADIAKAfQACAPABAPIABgNIAAgBIAGASIgBABIABABQAPArAPATQAXAcAmAbIgBACIgBACIAJABIASALQAFgBAFgCIACgCIAGgLQAZgMACgpQACgcgLgTQgIgPgQgLIgDgFIgDgEQgQg2A0gKQAHAEADAHQAJAVAFAXQgKANgDAVIADADIAHABIACgEQACgKAEgHIAEABIAEgBIABgCIAAgLQAGgIAJgFQAJgEAIAFIAFALQADAKgCAJQgNADgIAMQgHAIgEAJIAAABIADAEIADABQAKgGAGgKIAEgFIAAABIABACQAIADAEgHIABgDIANACQAKABAGAGQABAEAAAEIgDAIIgEAFIgSARIAAACIAAABIABACIABACQAJACAHgIIAHgIIAEgBIADgCIABgDQAKgCAJAFQAFADACAGIAAACIgCACIgCACIAAAAQgRAHgNAPQgBAFAEACIADACIACgBIAagUQAKgEAHAGQABAFgBAGQgCASgKAQIgZACIgDgDIgCABIgBACIgLABIAHAGQgHATAFAWIgBABQgDAFgBAFQg1AkgdA2QgBAGADADIgDAFIggANQgZAIgTAAQgzAAgUg7g");
	this.shape_1.setTransform(27.3,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MickLeg, new cjs.Rectangle(0,0,55.9,61.5), null);


(lib.CouchboardingOlympic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBYQgFgGAAgEQAAgEADgDQADgDAEAAQAEAAAEAGQAFAFAAAFQAAAEgEADQgDADgDAAQgEAAgEgGgAgHApIAAgOIgBgNIABgwIAAgxQAAgKAJAAQAJAAABAKIAAB8QgBAKgJAAQgJAAAAgKg");
	this.shape.setTransform(90,45.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeA/QgSgHAAgLQAAgEADgEQAEgDAEAAQAEAAAGAGQACACAKACIANABQAIAAAHgCQALgEAAgGQgBgQgVgFIgLgDQgPgDgFgFQgKgEAAgOQAAgXAWgKQAHgDAOgEIAVgHQAFgCAFAAQAFgBADAEQADADAAAFIABAKIACAJQAAAFgDADQgDADgFAAQgGAAgDgDQgCgDgBgKIgaAIQgQAHgBALIAHACQAYAEANAJQASAKAAAXQABASgRAJQgNAIgSAAQgPAAgNgFg");
	this.shape_1.setTransform(81.6,47.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAxQgQgOAAgYQAAgWAPgYQASgbATAAQAMAAANAFQARAHAAAJQAAAEgCAEQgEADgDAAQgEAAgCgCIgFgEQgGgFgQAAQgKAAgLAUQgKATAAANQAAAPAKAIQAJAIAOAAQAGAAAIgDIAOgHIAEgCQAFAAADADQACADAAAFQAAAIgRAIQgPAGgKAAQgWAAgQgOg");
	this.shape_2.setTransform(70.5,48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKBRQgDgDAAgFIgBgUIAAgUIABgbIABgZQABgFADgDQACgDAGAAQADAAAEADQADADAAAFIgCAZIgBAbIABAUIAAAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgHg9QgDgEAAgFQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGQAAAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(61.5,45.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBbQgDgDAAgFIAAgtIAAgrQAAgZgBgUIgCgXQAAgIADgGQADgGAHAAQAEAAADADQADADAAAEIAAAEIgBAHQAKgHAJgDQAIgEAIAAQAXAAALAVQAIAQAAAbQAAAXgNAQQgOAQgXAAQgKAAgOgDIAAA1QAAAFgDADQgDADgFAAQgFAAgDgDgAgKg7QgGAEgJAIQACAaAAAbQAMAFALAAQAOAAAIgLQAGgIAAgOQAAgVgFgKQgFgKgKAAQgJAAgJAEg");
	this.shape_4.setTransform(52.1,51);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGBCQgDgDAAgFQAAgOgDgaQgCgaAAgNQAAgMgEgHQgIAEgIAIIgNAPIgGAHIgBASIgBAUIABAJIABAJQAAAFgDADQgEADgEAAQgNAAAAgdIABgUIABgTIgBgSIgBgSQAAgZAMAAQAEAAAEADQADAEAAAFIAAAGIgBAHIAAAMQAGgMAMgKQALgJAIAAQASAAAFARQAGgIAJgEQAIgEALAAQATAAAHAUIAFAfIAIBAQAAAEgDADQgEAEgFAAQgJAAgBgKIgEgjIgEgiQgBgIgDgHQgEgKgEAAQgEAAgMAHQgLAGgDAEIABAWIADAdQACARAAAMQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_5.setTransform(37.1,48.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdBYQgEgDAAgFQAAgLAZg2IgphMIgFgJQgDgEAAgEQAAgFAEgDQADgDAFgBQAFABADADQATAbAVAxIAQgnQAJgUAJgOQADgHAGAAQAFAAADADQAEAEAAAEIgCAGIgnBTQgOAfgHAUIgHAWQgDAIgHAAQgFAAgDgDg");
	this.shape_6.setTransform(21.7,51.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBRIACgpIABgoIAAgoIABgpQgBgLALAAQALAAAAALIgBApIgBAoIgBA3IgBAaQgBAMgJAAQgLAAAAgMg");
	this.shape_7.setTransform(12.9,45.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag4BFQgYgUABggQAAglAWghQAbgiAkAAQAlAAATAQQATASAAAkQgBAmgVAfQgYAlgmgBQgfABgWgUgAgnglQgSAZAAAdQAAAWAQANQAQAOAWAAQAbAAARgcQARgZgBgeQABgagMgLQgMgLgcAAQgaABgTAbg");
	this.shape_8.setTransform(0.7,45.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_9.setTransform(-21.6,48.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAeBVQgCgKgCgQQgCgQAAgLIAAgJIAAgJQAAgUgKAAQgOAAgLAMQgGAGgKATQAAArgDAIQgDAHgHAAQgFAAgDgDQgDgDAAgFIABgFIABgQIAAgRIAAhSIABgSIgBgLIgBgKQAAgFADgDQAEgDAEgBQAKAAABALIACATIgBAYQgBANABAMIAAAKQAJgMAKgGQAKgHAMABQASAAAHAMQAFAJABASIABAWIACAXIAEAYIAAACQAAAFgDAEQgDACgFAAQgIAAgDgIg");
	this.shape_10.setTransform(-34.6,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBPQgCgDAAgEIAAgNIAAgMIgChBIgZgCQgKgBAAgKQAAgFADgEQADgCAFAAIAXABIgBgPIAAgOQAAgEAEgDQACgEAGAAQAIAAACAQIAAAKIAAAHIAAAHIAQgBQAMAAADABQAHABAAAJQAAAFgDADQgDAEgFgBIgGAAIgFAAIgPABIACBCIAAAFIAAAGQABAYgNAAQgDAAgEgDg");
	this.shape_11.setTransform(-46.8,46.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBPQgDgDAAgEIAAgNIABgMIgChBIgZgCQgKgBAAgKQAAgFADgEQADgCAEAAIAYABIAAgPIgBgOQAAgEADgDQAEgEAEAAQAKAAABAQIAAAKIAAAHIAAAHIAQgBQAMAAAEABQAGABAAAJQAAAFgDADQgDAEgFgBIgFAAIgGAAIgPABIACBCIAAAFIAAAGQAAAYgMAAQgDAAgEgDg");
	this.shape_12.setTransform(-64.5,46.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAkA5IgIgIIgTAJQgIADgEAAQgbAAgMgPQgLgOAAgdQAAgaATgTQASgTAZAAQAKAAAMAFQAPAGAAAJQAAADgCACIgBAOIgBAYQAAAOACAIIAHAUIACAGIABACQAAAEgDADQgDADgEAAQgDAAgFgFgAgSgbQgNAOAAARQAAATAHAJQAGAJANAAQAKAAAHgEQAFgCAHgGQgEgdAAgPIABgKIACgMIgHgEIgFgBQgRAAgMAPg");
	this.shape_13.setTransform(-75.8,48.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgrBbQgDgDAAgFIAAgtIAAgrQAAgZgBgUIgCgXQAAgIADgGQADgGAHAAQAEAAADADQADADAAAEIAAAEIgBAHQAKgHAJgDQAIgEAIAAQAXAAALAVQAIAQAAAbQAAAXgNAQQgOAQgXAAQgKAAgOgDIAAA1QAAAFgDADQgDADgFAAQgFAAgDgDgAgKg7QgGAEgJAIQACAaAAAbQAMAFALAAQAOAAAIgLQAGgIAAgOQAAgVgFgKQgFgKgKAAQgJAAgJAEg");
	this.shape_14.setTransform(113.4,17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGBCQgDgDAAgFQAAgOgDgaQgCgaAAgNQAAgMgEgHQgIAEgIAIIgNAPIgGAHIgBASIgBAUIABAJIABAJQAAAFgDADQgEADgEAAQgNAAAAgdIABgUIABgTIgBgSIgBgSQAAgZAMAAQAEAAAEADQADAEAAAFIAAAGIgBAHIAAAMQAGgMAMgKQALgJAIAAQASAAAFARQAGgIAJgEQAIgEALAAQATAAAHAUIAFAfIAIBAQAAAEgDADQgEAEgFAAQgJAAgBgKIgEgjIgEgiQgBgIgDgHQgEgKgEAAQgEAAgMAHQgLAGgDAEQAAALABALIADAdQACARAAAMQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_15.setTransform(98.4,14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAkA5IgIgIIgTAJQgIADgEAAQgbAAgMgPQgLgOAAgdQAAgaATgTQASgTAZAAQAKAAAMAFQAPAGAAAJQAAADgCACIgBAOIgBAYQAAAOACAIQABAFAGAPIACAGIABACQAAAEgDADQgDADgEAAQgDAAgFgFgAgSgbQgNAOAAARQAAATAHAJQAGAJANAAQAKAAAHgEQAFgCAHgGQgEgdAAgPIABgKIACgMIgHgEIgFgBQgRAAgMAPg");
	this.shape_16.setTransform(83.4,14.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAeBVQgCgJgCgRQgCgRAAgKIAAgJIAAgJQAAgUgKAAQgOAAgLAMQgGAHgKASQAAArgDAIQgDAHgHAAQgFAAgDgDQgDgEAAgEIABgFIABgQIAAgRIAAhRIABgTIgBgLIgBgLQAAgEADgEQAEgDAEAAQAKAAABAKIACAUIgBAYQgBANABANIAAAJQAJgMAKgGQAKgGAMgBQASABAHAMQAFAIABAUIABAVIACAYIAEAWIAAAEQAAAEgDAEQgDADgFAAQgIAAgDgJg");
	this.shape_17.setTransform(71,11.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfAxQgQgOgBgYQABgWAPgYQAQgbAVAAQALAAANAFQARAHAAAJQAAAEgDAEQgCADgFAAQgDAAgCgCIgFgEQgHgFgOAAQgLAAgMAUQgJATgBANQABAPAJAIQAKAIAOAAQAHAAAHgDIANgHIAFgCQAEAAADADQAEADAAAFQAAAIgSAIQgPAGgKAAQgWAAgPgOg");
	this.shape_18.setTransform(58.4,14.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9900FF").s().p("AgmBXQgOgDgBgJQABgKAJAAIAOACQAJACALAAQAVAAAIgVQAGgNAAgdQgGALgIAGQgJAGgKAAQgUAAgMgOQgNgOgBgVQAAgfASgSQASgTAeAAQAKAAAIACQAGADAFAGQAMAAgBANQABAIgDANIgDAVIgDAlQAAAXgEAOQgFASgLAJQgOAKgYAAQgPAAgKgCgAgUg4QgKAOAAAUQAAAQAFAIQAHAIAMAAQALAAAKgMQAKgMABgLIAGgmQgFgEgFgCIgKgBQgVAAgLAOg");
	this.shape_19.setTransform(39.3,17.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9900FF").s().p("AAcA3IgEgZIgCgZIABgJIAAgLQAAgYgJAAQgMAAgKAPQgLANgGAUIgBALIAAALIAAAKIABAKQAAAFgDADQgEAEgEAAQgFAAgDgEQgDgDAAgFIgBgKIgBgKIACgfIACggIAAgLIgBgKQAAgFADgDQAEgDAEAAQALAAAAAOIAAANQATgZATAAQATAAAGAQQAFALABAUIAAAMIAAAJQAAAJACAPQADAPgBAJQAAAFgCADQgEADgFAAQgJAAgBgKg");
	this.shape_20.setTransform(27.7,14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9900FF").s().p("AgKBRQgDgDAAgFIAAgUIgBgUIABgbIACgZQgBgFADgDQAEgDAEAAQAEAAADADQADADAAAFIgBAZIgBAbIAAAUIABAUQAAAFgDADQgDADgEAAQgFAAgDgDgAgGg9QgEgEAAgFQAAgGAEgEQAEgDAEAAQAGAAAEADQADAEAAAGQAAAFgDAEQgEAEgGAAQgEAAgEgEg");
	this.shape_21.setTransform(18.4,11.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9900FF").s().p("AgnBMQgQgPAAgZQAAgeAQgRQAQgSAYAAQANAAAIAEIAKAIQACgvABgRQACgKAJAAQAKAAAAALQAAAQgFA1QgBAQAAAQQAAAmADATIABACQAAAEgDAEQgEACgEABQgGAAgEgLQgIAGgJADQgIADgJAAQgXAAgPgQgAgZACQgKALAAAXQAAAOALALQAJAKAOAAQAJAAAGgEIAMgJIAEgEIAAgTIAAgNIAAgNQgFgJgGgEQgIgEgJAAQgSAAgJAKg");
	this.shape_22.setTransform(8.1,11.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9900FF").s().p("AgrA0IAAhOIABgLIAAgMQAAgKAKgBQALAAAAATQAVgVAaAAQAJAAAEAHQAFAHAAAOIAAAIQgBANgKAAQgKAAAAgLIAAgIIgBgJQgSACgJAIQgKAHgHAPIAAA9QAAALgLAAQgKAAAAgLg");
	this.shape_23.setTransform(-3.8,14.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9900FF").s().p("AAkA5IgIgIIgTAJQgIADgEAAQgbAAgMgPQgLgOAAgdQAAgaATgTQASgTAZAAQAKAAAMAFQAPAGAAAJQAAADgCACIgBAOIgBAYQAAAOACAIQABAFAGAPIACAGIABACQAAAEgDADQgDADgEAAQgDAAgFgFgAgSgbQgNAOAAARQAAATAHAJQAGAJANAAQAKAAAHgEQAFgCAHgGQgEgdAAgPIABgKIACgMIgHgEIgFgBQgRAAgMAPg");
	this.shape_24.setTransform(-15.5,14.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9900FF").s().p("AghAwQgPgQgBgaQgBgYAOgUQAQgWAbAAQAWAAAMAUQAJARAAAXQgBAYgMARQgPAVgXgBQgSAAgOgNgAgUgWQgHANAAAPQAAAQAJAJQAHAIAKAAQALAAAJgIQAJgKABgQQABgrgZAAIgBAAQgOAAgKAQg");
	this.shape_25.setTransform(-27.6,14.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9900FF").s().p("AghBUQgEAGgFAAQgEAAgDgDQgDgDAAgFIAAgIIAAgJIAAgkIgBgiIAAgfIAAggQAAgGADgGQAEgHAGAAQAJAAAAAKIgBAFIgBAEIAAAZIAAAdQAKgHAJgDQAIgEAHAAQAYAAAPATQAOAQAAAaQAAAZgQASQgRASgXAAQgRAAgOgHgAgRgEQgFACgLAIIAAATIAAASIAAASIAPAGQAHADAJAAQAPAAALgMQAKgLAAgRQAAgRgIgLQgKgLgPAAQgIAAgKAFg");
	this.shape_26.setTransform(-40.1,11.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9900FF").s().p("AAeBVQgCgJgCgRQgCgRAAgKIAAgJIAAgJQAAgUgKAAQgOAAgLAMQgGAHgKASQAAArgDAIQgDAHgHAAQgFAAgDgDQgDgEAAgEIABgFIABgQIAAgRIAAhRIABgTIgBgLIgBgLQAAgEADgEQAEgDAEAAQAKAAABAKIACAUIgBAYQgBANABANIAAAJQAJgMAKgGQAKgGAMgBQASABAHAMQAFAIABAUIABAVIACAYIAEAWIAAAEQAAAEgDAEQgDADgFAAQgIAAgDgJg");
	this.shape_27.setTransform(-53.6,11.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9900FF").s().p("AgfAxQgQgOgBgYQABgWAPgYQAQgbAVAAQALAAANAFQARAHAAAJQAAAEgDAEQgCADgFAAQgDAAgCgCIgFgEQgHgFgOAAQgLAAgMAUQgJATgBANQABAPAJAIQAKAIAOAAQAHAAAHgDIANgHIAFgCQAEAAADADQAEADAAAFQAAAIgSAIQgPAGgKAAQgWAAgPgOg");
	this.shape_28.setTransform(-66.2,14.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9900FF").s().p("AAZA2QgOAHgRAAQgPAAgJgHQgLgHgCgOQgFgdAAgXQAAgPAEgUQABgJAKAAQAEAAAEADQADADAAAFIgCAQIgBARIABAfQABAOADAIIAHADIAHABQAOAAARgFIAAgXIgBgUQAAgZADgRQABgLAJAAQAFAAADADQAEADAAAFIgCArIAAAXIAAAYIAAAIIABAHQAAAFgEADQgDADgFAAQgIAAgDgKg");
	this.shape_29.setTransform(-78.2,14.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9900FF").s().p("AghAwQgPgQgBgaQgBgYAOgUQAQgWAbAAQAWAAAMAUQAJARAAAXQgBAYgMARQgPAVgXgBQgSAAgOgNgAgUgWQgHANAAAPQAAAQAJAJQAHAIAKAAQALAAAJgIQAJgKABgQQABgrgZAAIgBAAQgPAAgJAQg");
	this.shape_30.setTransform(-90.4,14.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9900FF").s().p("AggAxQgPgOAAgYQAAgWAOgYQASgbAUAAQAKAAAOAFQARAHAAAJQAAAEgCAEQgEADgEAAQgDAAgCgCIgFgEQgGgFgPAAQgLAAgMAUQgKATABANQgBAPAKAIQAKAIAOAAQAHAAAHgDIAOgHIAEgCQAEAAADADQADADAAAFQAAAIgRAIQgPAGgKAAQgWAAgQgOg");
	this.shape_31.setTransform(-102.1,14.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_32.setTransform(75.4,-19.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAeBVQgCgKgCgQQgCgQAAgLIAAgJIAAgIQAAgVgKAAQgOAAgLAMQgGAGgKAUQAAAqgDAIQgDAHgHAAQgFAAgDgDQgDgDAAgFIABgFIABgQIAAgRIAAhSIABgSIgBgLIgBgLQAAgEADgEQAEgCAEAAQAKgBABALIACATIgBAZQgBAMABANIAAAJQAJgMAKgGQAKgGAMAAQASgBAHAMQAFAKABASIABAWIACAXIAEAXIAAADQAAAGgDACQgDADgFABQgIAAgDgJg");
	this.shape_33.setTransform(62.4,-22.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGBQQgDgDAAgFIAAgNIAAgNIgDhAIgYgCQgKgBAAgLQAAgEADgEQADgDAFAAIAXACIgBgPIAAgOQAAgFAEgDQADgDAEAAQAJAAACARIABAKIAAAGIgBAHIAQgCQAMAAADABQAHACAAAJQAAAFgDADQgDAEgFAAIgGgBIgFAAIgPACIACBBIAAAFIAAAFQABAZgMAAQgEAAgDgCg");
	this.shape_34.setTransform(50.2,-21.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgmAxQgRgOAAgaQAAgcAOgUQAQgVAZAAQASAAAMAGQAOAIAAAQQAAALgMAJIgYAMIgqAUQAGAKAKAEQAJAFALAAQAIAAALgDQANgEAEgFQADgHAFAAQAEAAADADQADADAAAEQAAANgUAJQgRAHgRAAQgYAAgQgMgAgXgdQgJAKgEAVIAigQQAUgKAIgHQgJgJgRAAQgNAAgKALg");
	this.shape_35.setTransform(31.8,-19.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghBUQgEAGgFAAQgEAAgDgDQgDgDAAgFIAAgIIAAgJIAAgkIgBgiIAAgfIAAggQAAgGADgGQAEgHAGAAQAJAAAAAKIgBAFIgBAEIAAAZIAAAdQAKgHAJgDQAIgEAHAAQAYAAAPATQAOAQAAAaQAAAZgQASQgRASgXAAQgRAAgOgHgAgRgEQgFACgLAIIAAATIAAASIAAASIAPAGQAHADAJAAQAPAAALgMQAKgLAAgRQAAgRgIgLQgKgLgPAAQgIAAgKAFg");
	this.shape_36.setTransform(18.7,-22.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnBMQgQgPAAgZQAAgeAQgRQAQgSAYAAQANAAAIAEIAKAIQABgwACgQQACgKAJAAQAKAAAAALQAAAPgFA2QgBAPAAARQAAAmADASIABADQAAAEgDADQgEAEgEAAQgGAAgEgLQgIAGgJADQgJADgIAAQgXAAgPgQgAgaACQgJALAAAXQAAAOAKAKQAKALAOAAQAIAAAIgEIALgJIAEgDIAAgUIAAgNIAAgNQgEgJgIgEQgGgEgLAAQgRAAgKAKg");
	this.shape_37.setTransform(-2,-22.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgMBRIABgpIABgoIABgoIAAgpQAAgLALAAQALAAAAALIgBApIAAAoIgCA3IgBAaQgBAMgJAAQgLAAAAgMg");
	this.shape_38.setTransform(-11.8,-22.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAZA2QgOAHgRAAQgPAAgJgHQgLgHgCgOQgFgdAAgXQAAgPAEgUQABgJAKAAQAEAAAEADQADADAAAFIgCAQIgBARIABAfQABAOADAIIAHADIAHABQAOAAARgFIAAgXIgBgUQAAgZADgRQABgLAJAAQAFAAADADQAEADAAAFIgCArIAAAXIAAAYIAAAIIABAHQAAAFgEADQgDADgFAAQgIAAgDgKg");
	this.shape_39.setTransform(-20.9,-19.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AghAvQgPgPgBgaQgBgZAOgSQAQgYAbAAQAWABAMAUQAJAQAAAYQgBAYgMASQgPATgXAAQgSAAgOgOgAgUgWQgHANAAAPQAAARAJAJQAHAHAKAAQALAAAJgIQAJgKABgQQABgqgZAAIgBgBQgPAAgJAQg");
	this.shape_40.setTransform(-33.2,-19.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfAxQgRgOABgYQgBgWAPgYQASgbAUAAQAKAAAOAFQARAHAAAJQAAAEgDAEQgCADgFAAQgDAAgCgCIgFgEQgHgFgOAAQgLAAgMAUQgKATAAANQAAAPAKAIQAKAIAOAAQAGAAAIgDIAOgHIAEgCQAEAAADADQADADABAFQgBAIgRAIQgPAGgKAAQgWAAgPgOg");
	this.shape_41.setTransform(-44.8,-19.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgxBTQgDgDAAgGQAAgEADgDQAEgEAEAAQAIAAAQgCQACgKAAgLIgBgTIgBgTQAAgZADgnIgOABIgPAAQgFAAgDgDQgDgEAAgFQAAgKAKgBIAigBQAWAAAhAFQAKABAAALQAAAFgEADQgDADgEAAIgSgBIgSgDQgDAhAAAcIAAAUIABAUIgBATIAjAAQAFAAADACQAEAEAAAFQAAAFgEADQgDAEgFgBIgSAAIgTABIgVACIgXACQgEAAgEgDg");
	this.shape_42.setTransform(-63.9,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.6,-41.5,238.5,104.2);


(lib.CouchboardingIdea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHBcQgEgGgBgFQABgEADgDQADgDAEAAQAEAAAFAGQAEAGAAAFQAAAEgDADQgDADgEAAQgEAAgFgGgAgHArIgBgOIAAgPIAAgxIABgzQAAgLAJAAQAKAAAAALIAACBQAAAKgKAAQgJAAAAgKg");
	this.shape.setTransform(184.2,59.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgbATgVQAUgUAaAAQAKAAANAGQAQAGAAAJQAAADgDADIgBAPIgBAZQAAAOACAIQABAGAGAPIADAGIAAACQAAAFgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAPAAASQAAATAHAKQAGAKAOgBQAKAAAIgEQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_1.setTransform(175.4,62.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoAzQgRgPAAgbQAAgdAPgUQAPgXAbAAQATAAAMAHQAPAHAAASQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEANABQAHAAAMgDQAOgEAEgHQADgGAFAAQAEAAAEADQACAEAAAEQAAAMgUAKQgTAIgQAAQgaAAgRgNgAgXgeQgKAKgFAVIAkgQQAVgKAJgIQgKgJgSAAQgOAAgJAMg");
	this.shape_2.setTransform(162.9,62.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBQQgQgRAAgZQAAggAQgSQARgSAZAAQAOAAAHAEIALAIQACgyACgRQACgKAIAAQAMAAAAALQgBARgFA3IAAAiQAAAnADAUIAAACQAAAFgDADQgEADgEAAQgHAAgDgKQgJAGgJADQgJADgJAAQgYAAgQgQgAgbACQgJAMAAAXQAAAPAKALQALALAOAAQAJAAAHgEQAEgCAJgHIADgEIAAgUIAAgOIAAgOQgEgJgIgEQgHgFgLAAQgSAAgKALg");
	this.shape_3.setTransform(149,59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLBVQgDgDAAgGIAAgVIgBgUIABgcIACgaQAAgGADgDQADgEAFAAQAEAAADAEQAEADAAAGIgCAaIgBAcIABAUIAAAVQAAAGgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_4.setTransform(138.9,59.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBTQgDgEAAgEIAAgOIABgNIgDhEIgagCQgKAAAAgLQAAgFADgDQADgEAFAAIAZACIgBgQIAAgPQAAgEADgEQADgCAFAAQAKAAACARIAAAKIAAAHIAAAHIAQgCQANAAADACQAHABAAAKQAAAEgDAEQgDADgFAAIgGAAIgGgBIgQACIADBFIAAAFIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_5.setTransform(122.4,60.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgbATgVQAUgUAaAAQAKAAANAGQAQAGAAAJQAAADgDADIgBAPIgBAZQAAAOACAIQABAGAGAPIADAGIAAACQAAAFgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAPAAASQAAATAHAKQAGAKAOgBQAKAAAIgEQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_6.setTransform(110.7,62.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnAzQgTgPABgbQAAgdAOgUQAQgXAbAAQATAAAMAHQAPAHAAASQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEAMABQAJAAAKgDQAOgEAEgHQAFgGAEAAQAEAAADADQADAEABAEQAAAMgWAKQgRAIgSAAQgZAAgQgNgAgYgeQgJAKgEAVIAkgQQATgKAJgIQgKgJgRAAQgOAAgKAMg");
	this.shape_7.setTransform(98.2,62.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgtA2IAAhRIAAgMIABgMQAAgMAKAAQALAAABAUQAWgWAaAAQAKAAAFAHQAFAIAAAOIAAAIQgCAPgLAAQgKAAAAgMIAAgIIAAgKQgTACgJAJQgLAHgHAQIAAA/QAAAMgLAAQgLAAAAgMg");
	this.shape_8.setTransform(86,62.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgoBbQgPgDAAgJQAAgKAKAAIAOACQAKACAMgBQAWAAAIgVQAGgPAAgdQgGALgJAGQgJAGgKAAQgVAAgNgOQgOgPAAgWQAAgfASgUQATgUAgAAQAKAAAIADQAHADAEAFQANAAAAAOQAAAJgDANIgDAXIgDAmQAAAYgFAOQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAAQAGAIQAHAJANgBQALAAALgMQAKgNABgMQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_9.setTransform(73.3,65.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgbATgVQAUgUAaAAQAKAAANAGQAQAGAAAJQAAADgDADIgBAPIgBAZQAAAOACAIQABAGAGAPIADAGIAAACQAAAFgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAPAAASQAAATAHAKQAGAKAOgBQAKAAAIgEQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_10.setTransform(53.8,62.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggBCQgSgHAAgMQAAgEADgEQAEgDAFAAQAEgBAFAGQADADAKACIANABQAJAAAHgCQALgEAAgIQAAgPgWgGIgLgCQgQgEgGgEQgJgGgBgNQABgZAXgKQAGgEAPgDIAWgIQAFgDAGABQAFgBADAEQADADAAAFIABAKIACAKQAAAGgDADQgEAEgEAAQgHAAgDgFQgBgDgBgJIgbAIQgTAHABALIAGACQAaAFAOAIQASAMABAWQAAAUgRAKQgOAHgUAAQgPAAgOgEg");
	this.shape_11.setTransform(34.3,62.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBVQgDgDAAgGIAAgVIgBgUIABgcIACgaQAAgGADgDQADgEAFAAQAEAAADAEQAEADAAAGIgCAaIgBAcIABAUIAAAVQAAAGgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(25.6,59.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgoBbQgPgDAAgJQAAgKAKAAIAOABQAKACAMAAQAWAAAIgVQAGgPAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgOQgOgPAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHADAEAFQANAAAAAOQAAAJgDANIgDAXIgDAmQAAAXgFAPQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAAQAGAIQAHAJANgBQALAAALgMQAKgMABgNQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_13.setTransform(212.6,30.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_14.setTransform(200.4,27.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AgLBVQgDgDAAgFIAAgWIgBgUIABgcIACgaQAAgGADgDQADgEAFAAQAEAAADAEQAEADAAAGIgCAaIgBAcIABAUIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_15.setTransform(190.7,24.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgpBQQgRgRAAgZQAAggARgSQARgSAZAAQAOAAAHAEIALAIQACgyACgRQABgKAKAAQALAAgBALQABARgGA3IgBAiQAAAnAEAUIAAACQAAAFgDADQgDADgEAAQgIAAgEgKQgIAGgJADQgJADgJAAQgYAAgQgQgAgbACQgKAMAAAXQAAAPALALQALALAOAAQAJAAAHgEIANgJIADgEIAAgUIAAgOIAAgOQgEgJgHgEQgIgFgKAAQgTAAgKALg");
	this.shape_16.setTransform(180,24);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQAMAAAAAUQAWgWAbAAQAJAAAFAHQAEAIABAOIAAAIQgBAPgMAAQgJAAgBgMIAAgIIAAgKQgTACgKAJQgKAHgHAQIAAA/QAAAMgLAAQgKAAAAgMg");
	this.shape_17.setTransform(167.6,27.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgbATgVQAUgUAaAAQAKAAANAGQAQAGAAAKQAAACgDADIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAACQAAAFgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAPAAASQAAATAHAJQAGALAOgBQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_18.setTransform(155.3,27.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_19.setTransform(142.7,27.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("AgjBYQgEAFgFAAQgEAAgEgDQgDgDAAgFIAAgJIAAgJIAAglIAAgkIAAggIAAghQAAgHACgGQAFgHAGAAQAJAAAAAKIgBAFIAAAFIgBAaIAAAeQALgHAIgEQAKgDAHAAQAZAAAQATQAOARAAAbQAAAagQATQgSATgYAAQgTAAgOgHgAgSgFIgRALIAAAUIAAASIAAAUIAQAGQAHACAKAAQAPAAAMgMQALgLgBgSQABgSgKgLQgJgMgQAAQgIAAgLAFg");
	this.shape_20.setTransform(129.8,24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgJQAAgWgLAAQgOAAgLANQgGAHgLAUQAAAsgDAJQgEAGgHABQgEgBgEgDQgEgDAAgFIABgFIACgRIAAgRIAAhWIABgTIgBgLQgBgGAAgFQAAgGADgCQAEgDAFgBQAJAAACALQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAKABAUIABAWIACAZIAEAXIABAEQAAAFgEADQgDADgFAAQgJABgCgKg");
	this.shape_21.setTransform(115.6,24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AghAzQgQgPAAgZQAAgXAPgZQARgcAWAAQALAAAPAGQASAGAAAKQAAAFgEADQgDAEgEAAQgDAAgCgDIgGgEQgGgFgQAAQgLAAgMAWQgKATgBANQABAQAKAIQAKAJAOAAQAIAAAIgEIANgHIAFgCQAEAAAEADQADAEAAAFQgBAIgRAIQgQAHgLAAQgXAAgQgPg");
	this.shape_22.setTransform(102.4,27.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgbATgVQAUgUAaAAQAKAAANAGQAQAGAAAKQAAACgDADIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAACQAAAFgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAPAAASQAAATAHAJQAGALAOgBQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_23.setTransform(90,27.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAJAHAJAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_24.setTransform(77.4,27.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgwBIQgQgSAAgZQAAgmAhgqQAcgjAbAAIAKABIAIABQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCAEQgEAEgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgUAaQgcAjAAAeQAAAPAKALQAKAMAOAAQALAAAMgHQAHgDAOgKQAHgFADAAQAFAAAEADQADAEAAAFQAAAFgEAEQgfAcgfAAQgYAAgRgTg");
	this.shape_25.setTransform(64.4,24.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHBcQgEgGAAgFQAAgEADgDQADgDAEAAQAEAAAFAGQAFAGAAAFQAAAEgEADQgDADgFAAQgDAAgFgGgAgIArIAAgOIAAgPIAAgxIAAgzQAAgLAKAAQALAAAAALIAACBQAAAKgLAAQgKAAAAgKg");
	this.shape_26.setTransform(46.6,24.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAHAiIgEgbIgDgaIgKAWIgSAwQgBAFgDACQgEAHgHAAQgJAAgJgjQgEgSgEgeIgDgSIgBgRQAAgFADgDQAEgEAEAAQAJAAADAKIACARIACARIAHA0QANgjAOgvQADgNAJAAQAJAAAEAOIAHAqQAFAdAEARIAIggIAPg/QACgHAIAAQAFAAAEADQADADAAAFIgBAFQgJAngPAvQgDAKgHAMQgFAGgHAAQgMAAgIggg");
	this.shape_27.setTransform(35.9,27.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAJAHAJAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_28.setTransform(21.2,27.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAaBcQgEgEAAgFQgGgOgBgJIgKgyQgFgfgCgTQgKAngMAaQgNAfgFARIACAFQgBAGgEADQgEADgGAAQgPAAAAgOIgEgPIgNg5QgHgcgTg2IAAgFQgBgLAMAAQAIAAAEAIIAJAZQAHAVAHAeIALAyQANgdAMgoIALgkQALgaAJAAQAJAAADAJQAEAKAFAmQABATAHAaIAKAuQAPgmAXg/IAHgWQADgOAFgIQAEgGAHAAQALAAAAAMIgDALIgFANIgGAVIgjBUIgQAoQgFAIgIAAQgFAAgFgDg");
	this.shape_29.setTransform(3.2,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CouchboardingIdea, new cjs.Rectangle(-15.6,4.7,240.4,72.9), null);


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


(lib.MickDayDreaming = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/AIIgBAAIAAAAQBHgGA6gqQADAigOAcIAAABIgHAIQgYAKgUAAQglAAgdghg");
	this.shape.setTransform(56.7,31.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFF97").s().p("AhMCKQgIgLgKgGIgBABIgEAFIAAAAIgBgDIAAAAIgBgBIgGgYIgBAAQgTAFgOAOQgFgPAIgOIAQgfQghAFgWAbQgCgWAPgPQAIgIAMABQAIABAGgCQAFgCAEgFQgTgYghgFQAigJAZAWIACABIADgBQgTgfACgnQAAgHAEgEQAFgGACgFIAAAAQgBAKABALQACANAGAKIAAABQAAABAAABQABAAAAABQABAAAAAAQABAAAAAAQAEAFAGAEIABgBQABgEgBgDIgBgBIgCgBIgEgGQAKg5AlgqIADACQgOAiANAgQADABACgDQgDgIgBgIQAHAAgGgFIgBAAIgBABIAAgEIACgDIAAAAQAagfAggYQgdAkAGAvQACADADgBQgBgTAEgSQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAsgWAkgfQgBAcgOAYIgFACIAAACIAAACQALACAFgMIABgBIADgCQADgEAFgBIA0gMIgCACQgRAVgLAZIAAABQABAEADADIACABIACgBIABgBQAAgDgCgDIACgFQAegBAcgFQgSARgTAQIAAABQAAABAAAAQABABAAAAQAAAAAAABQAAAAABAAIAJgGQAOAMASgCIgMANIgBACIgEAFIgBgCIgBABIABACIgCADIACADQgIAPgXgFQgjgJgYATIgCgBIgEAAQgKAAgEAHIABABIAvAPQgaAJgdgBQgWgBgPAJIgBgCIgBABIAAACQgEAEgFAFQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIAHgFQACANAJAMIgDACQg2gIguAUQAQAXAOAZIgJAGQgGgDgEgGg");
	this.shape_1.setTransform(40.7,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhXCyQgqgHgcgeIgRgUQAlAdAyAIIACgDQABgDAAgDQhagTgohYQgKgXgJgWQgFgbADgbQABgOgDgKIAMgOIAbgXQA6gyBLgOIgMAVQAAADADACIABAAQgGASAAAUQgDBMA8AtQBzBZCAhEIABgCQABgFgCgDQAKgJAHgLIgJBbIgDgBQhSAjhZAPIAFgCIgOABQgoARgkAXIgEgBIgFAFIgFAGIgrgFg");
	this.shape_2.setTransform(95.9,114.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC97").s().p("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ACQgDAHgHAFQgVgBgPgHQAUgPAbAGIACAAQANADAMgDQAKgDAIgHIAFgEQAFAMAJAHQATASAgABIABgCQAQATAOAVQApA/gqA/IAAABIgJABIAAAAQgHAFgGAHIgOAOIAAgBIgBABIgBACIgCACQgXATgeAGQg0AKg0gJQgKgCgJgEIgDAFIAEACIgBgCQAWAJAYACQAsAEAqgLQAQgFAPgIIABAEIAEgHIAJgFQgFAoAgAfQASAQAVAMQAPAJAMgCQgEgGgIgEIgHgCQgpgRgVgnIgDgIIACAAQAeAAAegKQAggKAhgHQAIgCACgDQACgDgDgDIgLADIgCgJQANgKAPgIQAPgIASgCIAxgEIAAAAQgPgIgSABQAygSAzgKQA5ABA5gHIACgBQACgCAAgEIgEgCQgRgEgTABIgaACIgBgBQgLgKgSAHIgYAGQhtgBhqghIgDABQgEACAAADIgVACQgGgzgugjQCkABCeApQAkAJAfACIgBACIgBADQAQAGATgDIAGAGQAlAnAdArQgaAOgTATQACgNgFgLQgNAogbAmQgLAQgQAKQhAAlhCAdIgGgLQgPgdgcgPIgCABIgBABQAOAJAKAPQAMARAKATIADAEQAUAoAJArIACACIADAAIABAaQgGADAFAGQAsAwAGA+IgBAAIgCACIgCADIABACIAFABIAAAOQAAABAAABQABAAAAAAQABABABAAQAAAAABgBQADgEAAgGIAAgDQAWAJAOATQhGBFgxBUQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAIgcAGQACgFgDgFIgCABQhXAag1BFQgEgFgIADgAhZg6IAAABQAgAcANAqIABAAIAAAHQACAEADgCQACgDABgEQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgCQgFgagQgTQgJgSgLgRIgCAAIgBgBQgGAFAHAIIAIAKQgIgGgKgEIgDAAgAjsiNQgSAkADAlQACAeASAgQAEAFAGgEQgNgogFgsQgBgQAIgMQAOgUgIgOQgGADgEAHgAiXiiQgCANANAKQAfAWAIAiIgBAGIAAABQABADACABIAAAEQADADACgCIACgGQADgCAAgGQACgvgxgZQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAABABIAXAfIghgpIgBgBIgCAAIAAAAgAkBhDIABAAIAAAAIgBAAgAgQhpQANAfAYgDIgBgDQgMgLgHgPQgYgvgqgfIgDgBIgmgBIgCABIgEAEIAAABIABADQARANAZgIQAiAbATAogAk8isQhNAXg/AxIAAACIABACQAZgNAbgRQBCgoBMgNIAAgBQABgEgFAAQgaAFgZAHgAoShoIABAAIgBgCIAAACgAoyh/IADABIgBgCIgCABgAkok6QgHAHALAJIAEADIADAFQAuAgAPA0QAGAPADAPIABACIgCABIAAAAIgBABIAAABIgJAUIAPgUQACABAEgCIABgBIgEgRQAngKApgIIAQgEIAUgGQAXgCAWgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIgBgBQgDgDgEABIgCAAIgOABIAEgCIAAgCQgCgGgGgBQg9AJg1AZIgWAIQgUhHhAgxIgBABIgDgEIgBAAIACAFgAnjlQIgZAEIgUAFIgCABIgCACIAAACIAAABQAIAJANgCQBSgMBTACIACgBIABgCIABgCIAAgCIgBAAQg6gDg8gEIgWACgAh7nKIgWAMQgrAagkAjIAAABQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQAugrA4gdIABgBQABgFgFAAIgBABgAlImsQgLAWAPAQQABAAAAABQAAAAABAAQAAAAAAgBQABAAAAAAIgDgFQgCgDgBgDQgEgUAMgSIABAAQAGgFgCgGQgIAKgGAMgAsFmHIAEgDIABgBIgFAEgAkmpjQgDAFgBAFQg5AuhJAHIgBAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIABADQAFAOAQAJQA9AiA1grQALgJgEgIQgDABgDAEQgDAFgEAEIADgFQAHgOABgRQABgYgGgUgAnlpXIgCAFIgBAIIACABIADABIACgDQALgiAkgEIAAABIAAACIAAACIADACQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQACgCgBgDIgCgGIgCgBIgGgCIgBAAQgdAIgSAZgAlspyQgLAIgFANQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIACABQAEgBABgEQAHgNANgIIAHAAIAAABIADADIABABQAAABABAAQABAAAAAAQABAAAAgBQABAAAAgBIABgBIgEgHIgCgCIgCAAIgIgBQgGADgGAFgAlyqfQgIAFgFAJIABABIADACIAKgJQAJgKADAEIABABQADADADgDQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIABgFIgBgBQgCgCgDgBQgJADgHAGgAH8idIABAAIgDAAg");
	this.shape_3.setTransform(93,86.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ALzMXQgggKgTgUQgfgHgWgYIgBgCIADgDIADgBQgagRgiAEQgwAGgvgLQgogKgCgnQgCgpAVgdQAWhRgYhOIgBgLQgvgwgThCQgVhPAqg7IAEgGIAAgBIgHAFQg7Aig1AlQgRAygXAvQAFAaABAfQABAbgGAYIgSAKQhXAlhdAJIgDgCIAAgDQgqAUgnAZIAKABIgBADIgBAAIgPABIgBABIgCAAIAAgBQhFAAgzgwQgIgHgGgJQgLgPgKgQQgNgQgLgUQghg9AEhCIAAAAIAAAAIACgBIAJAhQgBgSACgTIgDAEQgDgBgCgCIgCACIgBgCIAAgCIADgDIAGgJIgHgEIgCAAIgCgCQgVgTgNgXQgOgWgHgaIgCgBIgagOQg4gOgbg0IAAgBQh/gQhGhqIgHgDQgHgbAKgWQglAXgrAOQhKAYhIgdQgegLgOgcQgSAGgTAAQgHgGgEgGIgSgSQAEgRALgPIADgDIACgBIgBgCIgGgIIgDgDIAAgDIAAgDIAJgNIAAAAIAAgBQgBgPABgPIAAgJQAAgOAIgLQAngjAsgYIAAAAQA8gwA+gvQAJgHAHgJQACgWAQgSIgCAAIgCgBIgCgBIgBAAIAfgbQAEAIgMALIgIAGQABAHgJAJQgMANAAASQABAKACAKIADAEIAAABQgCADgDgBIgEgEIgCgQIgGAGIhgBLIgVAQIgHAFQgCAFgLAFQgLAEgKAHQgeASgWAbQgKANACASIACAMQgCAIABAJIgFAGQAAAEAEACQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIAAgEIgEAEIAGAHIACADIACAHIAAABQgFAGgDAIIgBgBIgCAEQAHARAKASIABABQANgEALAAIAYgRQABAAAAAAQAAAAAAABQABAAAAABQAAAAgBABIAAAAIgFAHIgJAIIAFACQABADgCACIAHAIIgHgEQAMANAOAKQgOgNgHgVQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIADABIACABIAAABQArA7BRgRQA0gLAygIIABAAIAXgNIADgCIgCgNIAAAAIAAgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgBIgBgBIgBAAIgMgBIAFgCIgFACQgOABgNADQAZgRAfgJQAMACALgIIAAAAIAAAAIAZgEIgCAGQgRADgRAEIgBABIgCABQgIABgGAGIgGAEIAAACIgBADIgBAAIABACIAAAEIAAABIABABIABAAIAEAMQAAAHACAHIACACIAFAMIABAAIAAABIACAGIAGAIIAEAHIAEAFIATAZIAVAYQgJABgJgJIgUgYQAiA6BFAVIA0ARIADgBIADACIACACIABAAIAJADIAAABIgHABIACAEIAHABIABABQABADgBADIgCACQAlA4BHAIQABgKACgJIAFATIAFABIABACQAAADgDACIAAAAQAPAvAbAtIABACQAIgDAEAFQA1hFBXgaIACgBQADAGgCAEIAcgFQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAyhVBFhGQgOgRgWgKIAAADQAAAGgDAFQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBgBAAAAIAAgOIgFgBIgBgCIACgEIACgBIABAAQgGg+gsgxQgFgFAGgDQAxAyAHBFQAfAGAPAXIAQgOQBzhrCJhNQAogXAqgMIgDARQhYAahRA6QhdBChPBRIgBABIgYAaQg4A9guBEQAFARgIAWQgMAlAOAmQAhBXBgAQQBFALA9gdQgCgCgBgDQAYgXAQgaIAAgEIACgBIAAACQAcguAIg5QAOhfAnhTIgCACIgBgBIACgEQAKgZATgSQAOgNABgLQAKgIALgHIAMgHIBGgaIADgBIAKACIAKgBIAIABQAKAAAHgDQAMABAMAFIADABIACACQAGAKgCAMIAAABQAQATAGAYIgLBzIgFAMIADAFIgCABIAAACQgKASgCAUIABADIgIAcQgFAIAAANIABAJIgCAAQgSBpAdBsIAAAAIABAAQAyCRCTA/IAGADQAtgFApgPQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIAAgDQAQgSAUgJQArAZghAmQgEAGgGABQgBAYgfAGQAAAxg0ADIgDgEQAAAfgeAQQgJAEgKAAQgGAAgHgBgALILvIAVAGIAAABIgCADQARAHASAHQAgAKACggQAEg2grgbQgFgDgIACQgIADgHAFIABAPQABAIgFAFQgFADgEgFIgBgCIAAgQQAAgIABgHQARgMAVgEIAAAAQAvAQAJA2QAFABAEAEIABABQAIADAHgDQAQgMADgSIABgHIgCgCIABgDIAB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");
	this.shape_4.setTransform(92.9,79.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(56));

	// Layer 2
	this.instance = new lib.MickLeg();
	this.instance.parent = this;
	this.instance.setTransform(136.1,66.9,1,1,0,0,0,4.3,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-18.8,y:68},11).wait(21).to({scaleX:1,scaleY:1,rotation:0,y:66.9},14).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.7,158.5);


(lib.Idea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MickDayDreaming();
	this.instance.parent = this;
	this.instance.setTransform(216.5,235.9,0.852,0.852,0,0,0,93.9,79.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AgLAMQgGgEAAgIQAAgGAGgFQAFgFAGAAQAHAAAGAFQAFAFAAAGQAAAIgFAEQgGAGgHAAQgGAAgFgGg");
	this.shape.setTransform(473.2,201.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0066").s().p("AgLAMQgGgEAAgIQAAgGAGgFQAFgFAGAAQAHAAAGAFQAFAFAAAGQAAAIgFAEQgGAGgHAAQgGAAgFgGg");
	this.shape_1.setTransform(466,201.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0066").s().p("AgLAMQgGgEAAgIQAAgGAGgFQAFgFAGAAQAHAAAGAFQAFAFAAAGQAAAIgFAEQgGAGgHAAQgGAAgFgGg");
	this.shape_2.setTransform(458.8,201.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0066").s().p("AgwA9QgWgRABggQAAgkARgZQAUgbAgAAQAXAAAPAIQARAJABAVQgBAOgPALQgIAGgWAJIg1AaQAHAMANAGQALAGAPAAQAKAAANgEQARgFAFgHQAEgIAFAAQAFAAAEAEQAEAEAAAFQAAAPgZAMQgVAJgVAAQgfAAgUgQgAgdglQgLANgGAaIArgUQAZgMALgJQgMgMgVAAQgRAAgMAOg");
	this.shape_3.setTransform(447.4,195.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0066").s().p("AgwBuQgTgDABgMQAAgMAMAAIARACQAMADAPgBQAaAAAKgaQAGgSABgjQgHAOgLAHQgKAHgNAAQgaAAgQgRQgQgSAAgbQAAgmAWgXQAWgZAmAAQAOABAJADQAJADAFAHQAPAAAAARQAAAKgEARIgDAbIgDAuQgCAdgEARQgHAXgNALQgSANgfAAQgTABgMgDgAgahGQgNAQABAaQgBAVAJAJQAHAKAPAAQAOABANgQQANgOACgPIAGgwQgGgEgGgDQgGgCgGAAQgbAAgPATg");
	this.shape_4.setTransform(431.3,199.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0066").s().p("AAiBFIgDgfQgDgRAAgOIABgMIABgOQAAgfgMAAQgPAAgOATQgNARgHAaIgBAOIgCANIACANIAAANQAAAGgEAEQgDAEgHAAQgGAAgEgEQgDgEAAgGIgCgNIgBgNIADgnIACgpIgBgNIAAgOQgBgGAFgDQAEgEAFAAQANAAACASIABARQAXggAYAAQAXAAAJAUQAGANABAaIAAAPIAAAMQAAALADATQACATAAALQAAAHgDADQgFAEgFAAQgNAAgCgNg");
	this.shape_5.setTransform(416.5,195.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0066").s().p("AAgBEQgSAJgWAAQgTAAgMgIQgNgJgDgSQgFglAAgdQAAgTAEgZQACgMALAAQAGAAAFAEQAEAEAAAGIgCAUIgCAWQAAAYABAQQACARADAKIAJAEIAJABQASAAAVgGIAAgdIAAgaQAAgfACgWQACgNAMAAQAGAAAEAEQAEAEAAAGIgDA1IABAeIAAAeIAAAKIABAJQAAAGgEAEQgEAEgGAAQgLAAgDgNg");
	this.shape_6.setTransform(401.1,195.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0066").s().p("AgpA8QgUgTAAghQgBgfARgZQATgdAjAAQAcAAAPAaQALAVAAAeQAAAegQAWQgTAagcAAQgYAAgRgSgAgYgcQgKAQAAAUQAAAUAMAMQAJAJANAAQANAAALgLQAMgMABgUQACg2ggAAQgUAAgLAUg");
	this.shape_7.setTransform(385.6,195.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0066").s().p("AgPBnIABg0IACgzIABgyIAAg0QAAgOANAAQAOAAAAAOIAAA0IgBAyIgCBGIgBAhQgCAOgLAAQgOAAAAgOg");
	this.shape_8.setTransform(374.3,191.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0066").s().p("AgpA8QgUgTAAghQgBgfARgZQATgdAjAAQAcAAAPAaQALAVAAAeQAAAegQAWQgTAagcAAQgYAAgRgSgAgYgcQgKAQAAAUQAAAUAMAMQAJAJANAAQANAAALgLQAMgMABgUQACg2ggAAQgUAAgLAUg");
	this.shape_9.setTransform(353.7,195.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0066").s().p("AgIBkQgFgEAAgFIABgRIAAgQIgDhSIgfgBQgNgCAAgNQAAgGAEgEQAEgEAGAAIAeACIgBgTIAAgRQAAgHAEgDQAEgFAGAAQALAAADAWIAAAMIAAAIIAAAJIAUgCQAOAAAFABQAJADAAAKQAAAHgEAEQgEAEgGAAIgHAAIgHAAIgUABIADBTIAAAGIAAAIQABAegQAAQgEABgEgEg");
	this.shape_10.setTransform(339.5,192.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAiBFIgDgfQgCgRAAgOIAAgMIABgOQgBgfgKAAQgRAAgNATQgNARgHAaIgBAOIgBANIABANIAAANQAAAGgEAEQgDAEgHAAQgGAAgEgEQgEgEABgGIgBgNIgBgNIACgnIABgpIAAgNIAAgOQAAgGAEgDQADgEAGAAQANAAACASIAAARQAYggAZAAQAWAAAJAUQAGANABAaIAAAPIAAAMQAAALACATQADATAAALQAAAHgEADQgEAEgFAAQgNAAgCgNg");
	this.shape_11.setTransform(316.8,195.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAgBEQgSAJgWAAQgTAAgMgIQgNgJgDgSQgFglAAgdQAAgTAEgZQACgMALAAQAGAAAFAEQAEAEAAAGIgCAUIgCAWQAAAYABAQQACARADAKIAJAEIAJABQASAAAVgGIAAgdIAAgaQAAgfACgWQACgNAMAAQAGAAAEAEQAEAEAAAGIgDA1IABAeIAAAeIAAAKIABAJQAAAGgEAEQgEAEgGAAQgLAAgDgNg");
	this.shape_12.setTransform(301.4,195.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWB5QgEgEAAgFIAAgDQADgTAAgWIAAgmIAAgoIgXABQgOAAAAgNQAAgOAZgBIANgBIACgVQAEgfAMgPQAOgTAfABQAUAAAAANQAAAOgSAAQgiAAgEAvIgBAJIAfgBQAXgBAAAOQAAALgLACIgLABQgHgBgaADIgBAfIAAAaIABAaQAAAbgDAPQgCALgKAAQgGABgEgEg");
	this.shape_13.setTransform(286.1,192.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglBvQgFgEAAgGQAAgOAfhEIgzhgIgGgLQgEgGAAgFQAAgFAFgFQAEgEAGAAQAGAAAEAFQAYAhAaA+IAVgxQAMgZAKgTQAFgIAHAAQAGAAAEAFQAFAEAAAFQAAADgCAEIgxBpQgSAngJAaIgJAcQgEAKgJAAQgGAAgEgEg");
	this.shape_14.setTransform(454.2,156.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPBnIABg0IACgzIABgyIAAg0QAAgOANAAQAOAAAAAOIAAA0IgBAyIgCBGIgBAhQgCAOgLAAQgOAAAAgOg");
	this.shape_15.setTransform(443.1,148.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAjBFIgFgfQgCgRAAgOIABgMIAAgOQABgfgLAAQgQAAgOATQgNARgIAaIgBAOIgBANIABANIABANQAAAGgDAEQgFAEgFAAQgHAAgEgEQgDgEgBgGIgBgNIAAgNIABgnIACgpIAAgNIgBgOQABgGAEgDQADgEAHAAQANAAABASIAAARQAYggAZAAQAWAAAJAUQAGANAAAaIAAAPIAAAMQAAALADATQAEATAAALQAAAHgFADQgDAEgHAAQgMAAgBgNg");
	this.shape_16.setTransform(431.9,152.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNBmQgEgDAAgHIAAgZIgBgaIACghIABggQAAgGADgEQAFgEAGAAQAEAAAFAEQADAEAAAGIgBAgIgBAhIAAAaIABAZQgBAHgDADQgEAEgGAAQgFAAgEgEgAgIhNQgGgFAAgHQAAgHAGgFQAEgEAGAAQAHAAAFAEQAFAFAAAHQAAAHgFAFQgFAEgHAAQgGAAgEgEg");
	this.shape_17.setTransform(420.2,149.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAtBIQgGgFgDgFIgYALQgLAEgFAAQgiAAgPgTQgOgRAAglQAAghAYgYQAXgZAgAAQAMAAAPAHQAUAIAAALQAAAEgDADQgCAFAAAMIgBAfQAAASACAKIAJAZIADAHIABADQAAAFgEAEQgEAEgFAAQgDAAgHgHgAgXgjQgQASAAAXQAAAXAIAMQAIALARAAQAMAAAKgFIAOgLQgEgkAAgTIAAgNIADgPIgJgEIgGgCQgVAAgQASg");
	this.shape_18.setTransform(408.4,153);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIBkQgFgEAAgFIABgRIAAgQIgDhRIgfgCQgNgCAAgNQAAgGAEgEQAEgEAGAAIAeACIgBgTIAAgRQAAgHAEgDQAEgFAGAAQALAAADAWIAAAMIAAAJIAAAIIAUgCQAOAAAFABQAJADAAAKQAAAHgEAEQgEAEgGAAIgHAAIgHAAIgUACIADBSIAAAHIAAAHQABAegQAAQgEABgEgEg");
	this.shape_19.setTransform(394.1,150.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag2BBIAAhiIAAgOIABgPQAAgOAMAAQAOAAAAAYQAbgaAgAAQAMAAAGAIQAFAJAAARIAAAKQgBASgNAAQgMAAAAgOIgBgKIAAgMQgWADgNAKQgNAJgIASIAABNQAAAOgOAAQgMAAAAgOg");
	this.shape_20.setTransform(380.7,153);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgwA9QgVgRgBggQABgkARgZQATgbAhAAQAWAAAPAIQATAJgBAVQAAAOgPALQgIAGgXAJIg1AaQAJAMAMAGQALAGAPAAQAKAAANgEQAQgFAGgHQAEgIAGAAQAEAAAFAEQADAEAAAFQABAPgaAMQgVAJgVAAQgfAAgUgQgAgdglQgLANgGAaIAsgUQAYgMALgJQgMgMgVAAQgSAAgLAOg");
	this.shape_21.setTransform(365.7,152.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgoA+QgUgSAAgeQAAgcATgfQAVgiAaAAQANAAASAHQAVAIAAAMQAAAGgDAEQgEAEgFAAQgEAAgDgDIgGgEQgIgHgTAAQgOAAgOAaQgNAXABARQgBASANALQAMAKASAAQAIAAAKgEIAQgJIAGgDQAGAAADAFQAEAEAAAFQAAALgWAJQgSAJgNAAQgcAAgUgSg");
	this.shape_22.setTransform(350.1,152.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgnBPQgWgIABgPQAAgFAEgEQAEgFAGAAQAEABAHAGQAEADALADQAKABAGAAQALAAAKgCQANgFgBgJQABgSgcgIIgNgDQgTgEgIgFQgLgIAAgQQAAgdAbgMQAJgFASgEIAagJQAHgDAGAAQAGAAAFAEQADADAAAHIACAMIACAMQAAAGgEAFQgEADgGAAQgIAAgDgFQgDgDgBgMIggAKQgXAJAAANIAJADQAfAGARAJQAWAPAAAbQAAAXgTAMQgRAKgZAAQgSAAgRgGg");
	this.shape_23.setTransform(326.5,152.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJAfIgBgOIgBgMIgBgLQAAgOABgFQADgLAIAAQAGAAADAEQAEADAAAGIAAAJIgBAIIABAMIABANQAAASgOAAQgHAAgCgGg");
	this.shape_24.setTransform(313.8,140.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIBkQgFgEAAgFIABgRIAAgQIgDhRIgfgCQgNgCAAgNQAAgGAEgEQAEgEAGAAIAeACIgBgTIAAgRQAAgHAEgDQAEgFAGAAQALAAADAWIAAAMIAAAJIAAAIIAUgCQAOAAAFABQAJADAAAKQAAAHgEAEQgEAEgGAAIgHAAIgHAAIgUACIADBSIAAAHIAAAHQABAegQAAQgEABgEgEg");
	this.shape_25.setTransform(301.7,150.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag9BoQgFgEAAgGQAAgGAFgEQAEgFAGAAQAJAAAVgDQABgLAAgPIAAgYIgBgXQAAggADgxIgSAAIgSABQgGAAgFgEQgEgEAAgHQAAgNAOgBIArgBQAbAAAqAGQANACAAANQAAAHgFAEQgEADgGAAQgJAAgOgCIgWgDQgEApAAAlIABAYIABAZIgBAYIAsgBQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAEgGAAIgYABIgXAAQgJAAgSADQgTACgJAAQgGAAgEgEg");
	this.shape_26.setTransform(287,149.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_27.setTransform(496.8,203.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_28.setTransform(490.1,203.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_29.setTransform(483.4,203.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHBdQgFgEAAgFIABgPIAAgPIgDhMIgcgCQgMgCAAgLQAAgGADgEQAEgEAFAAIAcADIgBgSIAAgRQAAgFADgEQAEgDAGAAQALAAACATIAAAMIAAAHIAAAJIASgDQAOAAAFACQAIACAAAKQgBAGgDAEQgEADgGAAIgGAAIgHAAIgSACIADBNIAAAGIAAAGQABAdgOAAQgFAAgDgDg");
	this.shape_30.setTransform(473.6,195);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgyA8IAAhbIAAgNIAAgNQAAgNAMAAQANAAAAAVQAZgYAeAAQALAAAFAIQAFAIAAAQIAAAJQgBARgMAAQgLAAAAgNIgBgJIAAgMQgVADgMAKQgLAIgIARIAABHQAAAOgNAAQgLAAAAgOg");
	this.shape_31.setTransform(461.2,197.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape_32.setTransform(447,197.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgyBrQgEgEAAgFIAAg1IAAg0IgCg0IgCgbQAAgJAEgHQAEgIAHAAQAFAAAEAEQADAEAAAFIAAAEIgBAIQALgIALgEQAKgEAJAAQAbAAANAYQAKATAAAfQAAAcgQASQgQAUgbAAQgMAAgQgEIAAA/QAAAFgEAEQgDAEgGAAQgGAAgDgEgAgMhFQgHAEgKAKQABAeAAAgQAPAFANAAQARAAAIgMQAIgKAAgRQAAgYgGgLQgGgMgMAAQgLAAgKAFg");
	this.shape_33.setTransform(433,200.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape_34.setTransform(418.7,196.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAgBAIgDgdQgDgPAAgOIABgLIAAgNQABgcgLAAQgPAAgMARQgNAQgGAYIgBANIgBANIABALIAAAMQAAAGgDAEQgEAEgFAAQgHAAgDgEQgDgEgBgGIAAgMIgBgLIACglIABgmIAAgMIgBgNQAAgFAFgEQAEgEAFAAQAMAAABARIAAAQQAXgeAWAAQAVAAAJATQAFAMAAAZIAAANIAAALQAAALAEARQACASAAALQAAAFgEAEQgEAEgFAAQgLAAgCgNg");
	this.shape_35.setTransform(397.7,197.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAdA/QgQAJgVAAQgRAAgLgIQgNgIgCgRQgFgiAAgbQAAgSAEgXQACgMAKAAQAGAAAEAEQADADABAHIgCATIgCAUQAAAWACAPQABAPACAKIAJAEIAIABQARAAAUgGIgBgbIAAgYQABgdACgUQABgNAMAAQAFAAAEAEQAEAEAAAFIgDAyIAAAcIAAAcIABAJIAAAJQAAAFgDAEQgEADgFAAQgLAAgDgMg");
	this.shape_36.setTransform(383.4,197.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVBxQgDgEAAgFIAAgDQACgRAAgUIAAgkIAAgmIgVACQgNAAAAgNQAAgNAXgBIAMAAIADgUQADgdALgOQANgRAdAAQATAAAAANQAAAMgRAAQggAAgEAtIAAAIIAdgCQAVAAAAANQAAAKgKACIgLABQgGgBgZADIAAAcIAAAZIAAAZQAAAZgCANQgBALgLAAQgFAAgEgDg");
	this.shape_37.setTransform(369.2,194.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgiBnQgFgEAAgFQAAgNAdg/IgvhaIgGgKQgEgGAAgEQAAgFAEgFQAFgEAFAAQAGAAADAFQAWAfAZA6IAUguQAKgXAKgRQAEgIAHAAQAFAAAFAEQAEAEAAAFIgCAHIguBhQgQAkgIAZIgJAZQgEAKgIAAQgGAAgDgEg");
	this.shape_38.setTransform(347.1,200.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHBdQgFgEAAgFIABgPIAAgPIgDhMIgcgCQgMgCAAgLQAAgGADgEQAEgEAFAAIAcADIgBgSIAAgRQAAgFADgEQAEgDAGAAQALAAACATIAAAMIAAAHIAAAJIASgDQAOAAAFACQAIACAAAKQgBAGgDAEQgEADgGAAIgGAAIgHAAIgSACIADBNIAAAGIAAAGQABAdgOAAQgFAAgDgDg");
	this.shape_39.setTransform(334.1,195);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHBdQgFgEAAgFIABgPIAAgPIgDhMIgcgCQgNgCAAgLQAAgGAEgEQAEgEAFAAIAcADIAAgSIgBgRQAAgFADgEQAEgDAGAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACABAKQgBAGgDAEQgEADgGAAIgGAAIgGAAIgSACIACBNIAAAGIAAAGQABAdgOAAQgFAAgDgDg");
	this.shape_40.setTransform(321.4,195);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgtA5QgUgQAAgeQAAghARgYQASgZAeAAQAVAAAOAHQARAJAAAUQAAAMgPALQgHAGgVAJIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFAAQAEAAAEADQAEAEAAAEQAAAOgYALQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgJQgLgKgUAAQgQAAgLANg");
	this.shape_41.setTransform(307.9,197.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgyA8IAAhbIAAgNIAAgNQAAgNAMAAQANAAAAAVQAZgYAeAAQALAAAFAIQAFAIAAAQIAAAJQgBARgMAAQgLAAAAgNIgBgJIAAgMQgVADgMAKQgLAIgIARIAABHQAAAOgNAAQgLAAAAgOg");
	this.shape_42.setTransform(294.2,197.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgyBrQgEgEAAgFIAAg1IAAg0IgCg0IgCgbQAAgJAEgHQAEgIAHAAQAFAAAEAEQADAEAAAFIAAAEIgBAIQALgIALgEQAKgEAJAAQAbAAANAYQAKATAAAfQAAAcgQASQgQAUgbAAQgMAAgQgEIAAA/QAAAFgEAEQgDAEgGAAQgGAAgDgEgAgMhFQgHAEgKAKQABAeAAAgQAPAFANAAQARAAAIgMQAIgKAAgRQAAgYgGgLQgGgMgMAAQgLAAgKAFg");
	this.shape_43.setTransform(280.2,200.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAqBEIgJgKIgWAKQgJAEgGgBQgfAAgOgRQgNgQAAgiQgBgfAXgWQAWgXAdAAQALAAAPAGQARAHABALQAAADgDADIgCAQIgBAdQAAAQACAJQACAGAGASIAEAHIABACQAAAFgEAEQgEADgFAAQgCAAgHgFgAgWggQgPAQAAAWQABAVAHAKQAIAMAQAAQALAAAJgFQAFgDAIgHQgEgiAAgSIAAgLIADgPIgIgDIgGgCQgUAAgPARg");
	this.shape_44.setTransform(258,197.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape_45.setTransform(456.3,157.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgMBfQgEgDAAgGIAAgYIgBgXIACgfIABgeQAAgGAEgEQADgEAGAAQAFAAADAEQAEAEAAAGIgBAeIgCAfIABAXIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgEAAgHQAAgGAEgFQAFgEAFAAQAHAAAEAEQAFAFAAAGQAAAHgFAEQgEAEgHABQgFgBgFgEg");
	this.shape_46.setTransform(446.6,154.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000FF").s().p("AgtBmQgRgDAAgKQAAgMAMAAQAFAAALACQALACANAAQAZAAAJgYQAGgQABgiQgHANgKAHQgKAHgMAAQgXAAgPgRQgPgQAAgZQAAgkAUgVQAVgXAkAAQAMAAAIADQAIAEAFAGQAOAAAAAQQAAAJgDAQIgDAYIgDAsQgBAagFARQgGAVgNAKQgQANgdAAQgRAAgMgDgAgYhBQgMAPAAAYQAAATAHAJQAIAKAOAAQANAAAMgOQALgOACgOIAGgtQgFgEgGgCQgGgCgGAAQgYAAgOASg");
	this.shape_47.setTransform(427.1,161.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000FF").s().p("AAgBAIgEgdQgCgPAAgOIABgLIAAgNQAAgcgKAAQgPAAgMARQgMAQgHAYIgBANIgBANIABALIABAMQgBAGgDAEQgEAEgGAAQgGAAgDgEQgDgEgBgGIAAgMIgBgLIACglIABgmIAAgMIgBgNQAAgFAFgEQAEgEAFAAQAMAAABARIAAAQQAXgeAWAAQAVAAAIATQAGAMAAAZIAAANIAAALQAAALADARQADASAAALQAAAFgEAEQgEAEgFAAQgMAAgBgNg");
	this.shape_48.setTransform(413.4,157.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0000FF").s().p("AgMBfQgEgDAAgGIAAgYIgBgXIACgfIABgeQAAgGAEgEQADgEAGAAQAFAAADAEQAEAEAAAGIgBAeIgCAfIABAXIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgEAAgHQAAgGAEgFQAFgEAFAAQAHAAAEAEQAFAFAAAGQAAAHgFAEQgEAEgHABQgFgBgFgEg");
	this.shape_49.setTransform(402.5,154.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0000FF").s().p("AguBaQgTgSAAgeQAAgjATgUQATgWAcABQAQgBAIAFIAMAJQACg3ADgTQABgMALAAQAMAAAAAMQAAATgGA/QgBASAAATQAAAtAEAWIAAACQAAAGgDAEQgEADgFAAQgIAAgEgMQgJAHgLADQgKAEgKAAQgbAAgSgSgAgeACQgLANAAAaQAAARAMANQAMAMAQAAQAKAAAIgEIAOgLIAEgEIAAgXIAAgPIAAgPQgFgLgIgFQgIgFgMAAQgVAAgLAMg");
	this.shape_50.setTransform(390.4,154);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0000FF").s().p("AgyA8IAAhbIAAgNIAAgNQAAgNAMAAQANAAAAAVQAZgYAeAAQALAAAFAIQAFAIAAAQIAAAJQgBARgMAAQgLAAAAgNIgBgJIAAgMQgVADgMAKQgLAIgIARIAABHQAAAOgNAAQgLAAAAgOg");
	this.shape_51.setTransform(376.5,157.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0000FF").s().p("AAqBEIgIgKIgXAKQgKAEgFgBQgfAAgOgRQgNgQgBgiQABgfAVgWQAXgXAdAAQAMAAAOAGQARAHAAALQABADgDADIgCAQIgBAdQAAAQADAJQAAAGAIASIADAHIAAACQAAAFgDAEQgEADgEAAQgDAAgHgFgAgVggQgQAQABAWQgBAVAJAKQAHAMAPAAQAMAAAJgFQAFgDAIgHQgEgiAAgSIABgLIACgPIgJgDIgFgCQgUAAgOARg");
	this.shape_52.setTransform(362.8,157.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0000FF").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape_53.setTransform(348.5,157.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000FF").s().p("AgoBjQgEAGgGAAQgFAAgDgDQgEgEAAgGIABgJIAAgKIgBgrIgBgpIABgkIAAglQAAgHADgGQAEgJAIABQAKAAAAALIgBAFIAAAFIgBAeIAAAhQALgIALgDQAKgEAIAAQAcgBASAXQARATAAAeQAAAegUAUQgTAWgcAAQgUgBgRgHgAgUgGQgGAEgNAIIAAAYIAAAUIAAAWIASAHQAIACAKABQASAAANgOQAMgOAAgTQAAgUgKgNQgLgOgSAAQgKABgLAFg");
	this.shape_54.setTransform(333.9,154.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0000FF").s().p("AgtA5QgUgQAAgeQAAghARgYQASgZAeAAQAVAAAOAHQARAJAAAUQAAAMgPALQgHAGgVAJIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFAAQAEAAAEADQAEAEAAAEQAAAOgYALQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgJQgLgKgUAAQgQAAgLANg");
	this.shape_55.setTransform(318.5,157.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0000FF").s().p("AgIBdQgDgEAAgFIAAgPIAAgPIgChMIgegCQgLgCgBgLQABgGADgEQAEgEAFAAIAcADIAAgSIgCgRQABgFAEgEQADgDAGAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACAAAKQAAAGgDAEQgEADgGAAIgGAAIgGAAIgSACIACBNIAAAGIABAGQAAAdgPAAQgEAAgEgDg");
	this.shape_56.setTransform(304.5,155.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0000FF").s().p("AAqBEIgJgKIgWAKQgJAEgGgBQgfAAgOgRQgNgQAAgiQgBgfAXgWQAWgXAdAAQALAAAPAGQASAHAAALQAAADgDADIgCAQIgBAdQAAAQACAJQACAGAGASIAEAHIABACQAAAFgEAEQgEADgFAAQgCAAgHgFgAgWggQgPAQAAAWQABAVAHAKQAIAMAQAAQALAAAJgFQAFgDAIgHQgEgiAAgSIAAgLIADgPIgIgDIgGgCQgUAAgPARg");
	this.shape_57.setTransform(291.3,157.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0000FF").s().p("AAjBlQgHgNgOgTIgWgfIgYARIgBAnQAAAGgEAEQgDADgGAAQgNABAAgTIABggIACghIAAgtIABgtIgBgOIAAgOQAAgGADgEQAEgEAGAAQAFAAAEAEQAEAEAAAGIAAAOIABAOIgBArQgBAXABAWQASgOAPgPIAdgeQAFgFAFABQAFAAAEADQAEAFAAAFQAAAEgEAEQgQAUgYAVIAdAmQAUAcAAAIQAAAGgEADQgEAEgGABQgHAAgEgIg");
	this.shape_58.setTransform(277.8,153.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0000FF").s().p("Ag0BcQgZgMAAgUQAAgGAEgDQAEgDAFAAQAHAAAFAHQAGAKAGADQALAIAVAAQAUAAARgJQAXgLAAgUQAAgRgTgJQgQgJgXAAQgVgBgOgHQgTgMAAgTQAAgYAbgTQAZgSAagBQANAAAQAFQAWAGAAAJQAAALgMAAIgTgCQgNgEgHAAQgUABgOAJQgPALAAAOQAAALAUAFQAHACAUABQAeACARARQAPAOAAAWQAAAggdASQgZAQggABQgYgBgUgIg");
	this.shape_59.setTransform(260.5,154.9);

	this.instance_1 = new lib.CouchboardingIdea();
	this.instance_1.parent = this;
	this.instance_1.setTransform(385.9,175.6,1.154,1.154,0,0,0,120.3,36.5);

	this.instance_2 = new lib.CouchboardingOlympic("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(364.6,173.2,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},12).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},40).to({state:[{t:this.instance_1}]},37).to({state:[{t:this.instance_2}]},124).wait(87));

	// Layer 3
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("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");
	this.shape_60.setTransform(414.4,71.8,1.115,1.115,9.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhoJYQhZgKAChUIACgEIAAABQAJAAAAgVIgBgPIAAgHIgGgBIAAAHQgBgLgNgJQAGALABAKQABAGgBAFIgGAQIAAABIgBADIACgCIABABIAHAAIgCADIgGAJQgOAUgUANIAAAAIAAAAQgVANgbAFIAJgEIAUgNQhGAqhQgnQgOgHgHgOQgOgcgCgeIAAgVIABgBIgBgBIABgDIAAAAQABgPAFgPQgKAKgFASIgCAJQg1AghGgZQgXgJgIgYQgOgsAQgpIACgBIAAAAQAAgGAIgQQgKAIgGALIgRAIQhIAehCgfQgEgLAAgLQgCgiARgeIADgBQAZgJAHgPIgSAIIgEgBQgRgBgRgHQgngOgGghIAAgNIAAgBIAAgBIABgNQAOhEA7gSQAOAHAVAAIAAABIACACIAAgCIAAgBQgbgEgKgMIAAAAQgcgVACguQADgzApghQAhgaApgFIACAAIAQACIAHgCIgGgIQgIgEgHgHIgSgPQgcgaACggQABgNAFgPQAkhdBmAJIAGAIIgBgIIALACQARAOgGATQgFAPAIAFIACgCQAOg0gqgIQgEgpAcgiQAsg5BCAHQAVACAXAJQACAFADADQABgFADgDIgCgHIAAgGIgBgGQAMgSAPgPQArgtA+AEQBDAEgEA6IADAEQAFAEACgGIgBgCQAAgQgEgMIADABIgCgGIABgHIgCAAIABgCIADgDIAFgGIABAAQAfghAlgQQBAgdBNAWQADAPAAAQIgGAGQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAIABgBQgBARgHARQgEALAHAEQALgZABgdQBCgwBNAFIAJAAQAbADAcAJQAGAIACAIQADAIgBAIIAAAAIgBAGIAAAAQgBAGgEAHQgGANAJAEQAIgQABgRIAzgRIAHgCIAJgCQBOgYA/AvQAIAGAEAIQAGAKAAALQABAWgDAUIAAAAQgBAGgBAEQgFASgIARQAKgGAGgMQAGgLACgKIAcgGQBngVAvBNIgDAHQgIARgLAQQgJAFgFAHIAHgDIgEAFQgGAJgCAKQANgMAMgQQAVgGARAHQAZAKASAjQAiBCgyAqQgKABgKADIALAEQgKAGgMAHQARgBAPgLIAPAAQARARAQAUQAIAMACANQALBchUAnQARgBAOgHIAEgCIACAKIgCAAQAKAMAUAOQAQANgBATQgCA1giAsIgBgBIgBAAQAAABAAABQAAAAAAABQAAAAgBABQAAABAAAAIgHAIIgDACIgNAKQgOgVgigGQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQgBANAUgIQAZARAHAeQAGAagSAUQhYBkiEgFQAGgagNgYIgCABQgEADABAEQAEAVgEAVIgCgBIABAEQgFAZgSAYQggAogzAEQguAFgmgOIgCgQIgBgCQgFgXgQgTIgFACQASAXAEAcIAAACIAAACIAAABQgMgFgLgGQAMAKALAGQABATgGAVQgFAPgKAJQg/A3hYgTQAGgegdglIgCABQAQAXACAeQABAKgFAJQggA8hAgCIAAgBIgRgEIgTgGQAOgTAGgbQgbBLhOgBIgUgBg");
	this.shape_61.setTransform(414.6,69,1.115,1.115,9.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#666666").s().p("AhfBEIABgCIABgBIAAgBIAAAAIABgDIAAAAIAAgBIAEAAIAYACIAEABIACAAIACAAIABAAIACABIACAAIAAAAIABAAIAAAAIAHABIACAAIABAEIgCAAIAAAAIAAgBIgBAAIgIgBIgCAAIgDgBIAAAAIgDAAIgBAAIgEAAIgQAAIgDABIgFABIgCABIAAABIgBAAgABXg0IgBAAIgBAAIgEgBIAAAAIgBAAIAAAAQgTgEgTgCIgBAAIgBAAIgEAAIAAAAIgCgCIABAAIAAgCIAAAAIABgBIADgFIACAAIAAAAIAAABIABAAIAAAAIABAAIABABQAIADAJABIABAAIAUACIABAAIAEABIAEABIABAAIABABIADADQgCADgCABIgFgBg");
	this.shape_62.setTransform(399.5,78.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999999").s().p("AhbA5IAsgEIAAAAIASgCIAEAAQADAFgDAFIgDAAIgLABIgIABIABgDQgEABgCADIgpAGQACgGAAgHgAAWg4QADgGACgHIAWAEIAOABQAPAAAPgCQACAEgBADIgBAAIgDAAQgNgBgOAAQgNAAgMACIgOADg");
	this.shape_63.setTransform(445.5,71.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#33CC66").s().p("Al9CnIgBAAIgEgDQgEgEABgHQABgHADgGIADgFIACgEIABgBIAAAAIACgBIgBAAIABgCIABgBIACgEIACgCIALgMIABgBIABACIACACIADAAIgBABIgBAAIgBACQAKgFAMACIAKABIAMABIABAAIgHAEIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIACAAQAMgCAGgMIAEADIADAAIAXgDIAEAAIABAAIADAAIAAAAIADAAIgCADIgCAEIACAEIAAAAIAAABIAAAAIABABIAAAAIABAAIAAABIAAABIABABIgDADIgBAAIAAAAIABAAIgGAFIgBgBIgCACIgKAHIgIAFQggATglAJIgJAAQgHAAgHgCgABFBfIACgEQAGgMAMgIIAEgCIADgCIASgMIAFAAIAEgBIANgCIADAAIADgBIgBABIAIgCIADgDIgBAAIACgCIABAAIAAgBIABgBIAAAAIABgCIABgBIAAAAIAqgGIAAADQAAAIAGAEIADACIgBAAIADADIABAAIADAAIgEADIgBAAIgHAEIgWAOIgDABIAAAAIgBABIgBAAIgCABIAAAAIgHAEIAAAAIAAABIgBAAIAAAAIgDABIAAABIgBAAIgCABIgBABIgCABIgJAFIgFADIAAAAIgBAAQgRAIgSAHIgGAAQgSAAgNgQgAB7A7IAAAAIABAAIAAgBIgBABgADLA1IAAAAIADABIgCgBIgBgBIAAABgAkABjIgBAAIAAAAIgFgBIAAAAIgDAAIgBAAQgPgDgPAAIgCgDQgBgGgFgEIgFgEIgBAAIgBgBIAAABIACABIgCAAIAAAAIgDgBIgBAAIAAAAIgHgCIACgHIADgFIACgCIAEgEIAEgDQATgQAUgOIAPgKIAPgMIAVgTIAGgFIABgBIABAAIAQADIAPABIgCADIADgDIAAAAIACAAIgCgBIAEgDIABgCIAAAAIACACIAEAAIApAGIAAAAIABAAIABAAIACABIAAAAIABAAIAAABIgBAEQAAADABADIABAAIAAAAIAGABIAAAAIABAAIABAAIAAAAIABABIABAAIACAAIADAAIAAAAIgGAGIgDABIgOAJIgGAFIgDACIgKAHIgyAhIgOAKQgMAKgIAMIgBABIAAAAIgBAAIgBgBIgCgCIAAgBIgEgCIgDgBQgLACgCAIIAAACgAiJAPIAAAAQAGAAACgEIgBAAIgHAEgACdAHIABAAIgBgCIgBAAIgBgCIgCABIgCgBIAAgBQAvgiAigtIAggDQgFAFgGAFQAPgIAHgMIACABIAAABIAIAAQASACARgBIgCAGIAAACQAAAEACADIAAgBIAAgBQACAEAEADIgEABIAAAAIACADQgiAfgjAfIgYACIgBgBIgBAAQgKAFgHAHIAAACQgbABgYAJQAAgIgEgJgAiPgcIgDgBIAAAAQgIgBgIgCIgBAAIgBgBIAAAAIgBAAIgBAAIACgGIAAAAIABgBIAAAAIgDgHIAAAAIAAgBIABAAIgBAAIgBgCIAAAAIAAACIgBAAIgBgBIgCAAIgBAAIgCgBIgBAAIAAAAIAAAAIAAgBIAAAAIABgBIACgBIABAAIAAgBIABAAIABgBIACgBIAAAAIABgBIACgCIAHgEIAUgMIAbgOIACgBIAPgHIACgBIABAAIAHgDIAAAAIABgBIABAAIAEgBIAEgBQAJgCAIABQAKACAIAHIABADQACAEgBAEQgHAggeAQIgCABIAAAAIAAAAIABAAIAAABIgBAAIAAAAIgCABIAAABIAAAAIABABIAAAAIABgBIgBADIgBAAIAAgBIgBAAIAAAAIgBAAIAAAAIgBAAIgBAAIgBAAIgBgBIgBAAIgBAAIgIgBIgDgBIgBABIAAAAIgBAAIgBgCIgDAAQgFABgDACQgEADgBAFQgOgDgOgBgAFAhSIAAgBIAAABIAAAAgAEzhmIgbgCQACgJAAgJIgBAAIgCgCIAAgBIgBAAQgCgCgFAAIgJAAIAKgGIAAgBIACAAIAIgGIABAAQASgKAUgIQAggNAgADIACAAIAAABIABABIACAHIAAACIAAAMQAAALgFALIgBACIgBABIAAABIgCAEIgLACIgIACIAAgCIAAgBQgEgEgFgBQgRADgFAPIgYgBg");
	this.shape_64.setTransform(420.2,74.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFF00").s().p("AkND5QAQgBAEgPQACgGgCgFIAXAGIABABIABAAIACAEQACADAAADIgFABIAEAAIAAAAQgHAJgLAEQgOgDgQgBgAkTD0IAAAAIAAgBIgBAAIAAAAIgCgDIAAAAIAAAAIAAgBIAAAAIgBgBIAAAAIABgCIAAAAIACgFIACAAIAJABIAAAAIgDABQADACADgDIAAgBIgBgCIAAgBIAAAAIgCgCIAAAAIAAACIgHgCIABgCIAAgBIABgCQADgDAEgCIAAAAQAAABAAAAQgBABABAAQAAAAABABQAAAAABAAIAAAAIADABIAGABIABAAIAAABIABAAIAAAAQACAJgGAIQgEAGgFACIAAAAIgEAAQgFAAgDgDgAlVDrIgLgBIAAgCQAMgHABgNQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIgBgBIAAAAIAAgCIABAAIABAAQAHAEAHACIABABIACAAQADADABADIAAAFIgDAGIgFAHIgCABIgBAAIgDAAIgJgCgAl3DrIAAgBIgBgBIABgBIgCABIgBgDIAAAAQADgSAPgLIAIACIABAAIABAAIAEACIADAEQADAFgDAGQgJAMgOADIgIACIgBgCgABKC1IAAAAIAAgCIAAAAQAIgCAGgGIACgBQAJgJACgJQABgFgCgGIgCgEIgBgCIgBgBIgCgDIAWADIAHAAIgCABIAFAAIAAAAIACgBIAIAAIAAACQAFAOgCAKIgCADIAAABIgBAAIgBADIABAAIgBABIAAAAIAAABIgGAGIgBAAIgBAAIgCABIgFAAIgCAAIgMABIgBAAIgCABIgEAAIgBAAIgBAAIgVADgAC7CgIAdgDIABgBIgHgBQAFgFgEgGIAHAAQAFAAgDgDIgDAAIgWAAIAAgCQALgFALgDIAHAHQALANgMAQIgGAGIgUAEQgOgCAEgPgAA7CwIgCgFQAFgWAQgLIACAAIAAAAIAAgBIAEgCIAAAAIAEgCIAEAAIADACIAAABIABACQABADAAADQgBAIgCAFQgHARgUACIgEAAIgEAAgADhCmQAQgagagMIASAAIgBACIAEAAIADgCIAZgBIACAJQAGAUgKALIgDAAIghAFIgGABIAFgHgAhgB9IgYgCIAAAAIgBAAIgBAAIgDgBIgBAAIgBAAIAAAAIgBAAIAAAAIABAAIABAAIAAAAIADgCIAAAAIABAAIAAAAIADgDIACgCIAAAAIADgDIAAgBIACgCIABgFIAAAAIAAgBIAAAAIAAgCIAAgBIAAgBIgBgBIAAgBIgBgCIAAAAIAAgBIgBgBIAAAAIACAAIABAAIAHACIABAAIABAAIAAAAIAAAAIABAAIABAAIABABIABAAIABAAIAAAAIABAAIABAAIAAAAIALACQAFAIgCAIIAAABQgGAIgJADgAiIB0QAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgBIAAAAIABAAIABABIADAAIgBABIABAAIABAAIACABIABAAIAAAAIABAAIABgBIAAAAIAAAAIgBgBIgBAAIAAAAIgBAAQADgBABgEIAAgBIgCgCIAAAAIABgBIgCAAIgBAAIAAgBIgBAAIAAAAIgCAAQAEgGAHgCIAEgBIABAAIAAABIABABIABAAIABADIAAAAIABACIAAABIgBACIAAABIAAAAIAAAAIgBACIAAAAQgCAEgCADIgCACIgCACIgBAAIAAABIgBAAIAAAAIgBAAIgBABIgBAAIAAABIgBAAIgCAAIgFABQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBgAjDBrIgJgBIAAAAIgTgDIgDAAIABgEIACAAIABAAQAEAAADgCQAHgEADgEIABgEIAAgBIABgCIAAgBIAAgEIgCgFIABABIAEABIACABIABAAIABABIACAAIABAAIABABIABAAIAAAAIABAAIACABIAEAAIAAAAIABAFIABADIgCAFIAAAAIAAAAIAAABIgCgBIgBAAIAAAAIAAAAIACACIAAAAIgCADIAAAAIAAABIgCACIAAABIgBABIgCADIgBABIgBABIAAABgAjnBeIAAgCQgBgNAKgJIABgBIABAAIABAAQAAABAAAAQAAABAAAAQAAAAABAAQABAAAAAAIAAACQAAAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIABgCIAAgCIADgBIABAAIAEACIAAAAQACAEAAADIAAAFIgBACIAAAAIAAABIgEAEQgFAGgFABIAAAAIgBAAIAAAAQgFAAgFgEgAFZATIARgFIgBABIgBABIgBABIAAABIADAAIABAAIADgFIAAAAIAKgCIACAAIABAAIADgBIABAAIAAAAIACAAIgCACIgBABIgEAPIgEAHIgCAFQgEAJgGAFIgCAAIgrAEQAbgMABgbgAEzAzIgBgFIgBgBQABgDACgDIAUgDIgBABIAAABIACgCIAGgBIABAAIgFgBQACgDgDgFIAGgBIgBAAIgBAAIgEAAIgBgBIgBAAIABABIgPgBQANgRAQAHIAAACIgJAFQADACAEgCIACgBIgCAHIgDAJIAAAAQgKATgSABIgDgFgADBAuQAhgLAMgfQAMgBAMgCIACADQgBAJgCAJIgHgBIgBAAIAHACQgDALgIAJIgCgBIgCAAQgaACgaAEgAC7AnQAKgbAbgJIAKABIAAABIAAAAQgMAcgeAKgAnigoIABAAIAAgBQgYgiANgjIACgDQAWgcAhgMQAogNAogJQANgDAHgFIABACQAGACAGgCIABAAQAnAhAZApIgNAIIgCgBQgGgEgJACIAAgBIhAARIAAAAIgWAFQgoALgfAYIgXATIgPgNgAjNgrQgBgDABgDIABgBIABgCIABgCIACgBQAvgSAxgHIAEAMQg1AOgxATQAAgEgDgEgAkxgpQgHgCAAgFQAAgbAbgBIAFAGQAAABABABQAAAAABAAQAAAAABAAQAAAAABAAQgBgFgEgEIgCgDIACAAIAHACQAPADgGANQgJAWgVAAIgKgBgAgRhFQAzgYA4gHQAQgCANAGIACADIABAAIACADIgIABQhFACg+AZgAhChlIgQAAQgyAIgwARIAAgBIAAgBIgRgZIAAAAIgFgJQgbgxgygdIAAgBQAPgCAQgFQBHgVBJgIQAOgBADgGIAOAHQA2AoAZA+QAFAGABAIQABAKAHADIABACQgdAJgeALIgDACQgKgOgPgNgADJhfIAAgBQAUgLAWgFQAYgHAZgBIAIAAIACAAIAGABIABAAIABAAIAMAEQAMAFABANIgBABQhEgLg/AUgACehnQgXgMgbgCIgaAFIgBAAIAAgEIgBgBIgCgEIAAgIIAAAAQgchFhAglIAAgGQBOgVBSAUIAAAAIADABQAKACAKAHQAJAGAKAEIgFgDIABgBQANAKAKAOQANARAIAVIAAABIAAABIAAABIAAAAIABABIADACIAHAhQgYAHgYALIgCAAIgWAKQgDgEgGgCgAHAhyQgLgDgGgMQAAgEACgFQAHgLALgHIATgBIABAAIACgDIADgEQAPAFAGAPIgCAFQgJANgOAHQgLAFgIAAIgFAAg");
	this.shape_65.setTransform(421.9,61.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0066FF").s().p("AmxEXIACgBIALgFIACgBQAKgFAIgGQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAFgGIAKgKIAFgGIgBAAIgFAEIAUgUQAOgNAPgLIADgCIABgBIABAAIABgBIABAAIAAgBIANgHIAQgKIAAAAIAEgCIAAAAIAVgNIAYgQIAngcIAggZIABgBIAFgEIABgBIABgBIABAAIAAgBIAAAAIAEgDIABgBIABgBIABAAIAKgJIAEgDIABgCIABAAIABgBIABAAIABAAIADgBIABAAIABgBIAAAAIACgBIAAAAIAAgCIAAgBIgBAAIAAgCIABAAIAAAAIABgBIABAAIAAAAIAAgBIADgBIABAAIAAgBIABAAIABAAIADgCIACgBIAUgJQATgJAUgGIAJgDIADgBIAOgEIAEgBIAAAAIAHgCIABAAIAAAAIAFgBIABAAIAAgBIAAAAIAEgBIABAAIAFgBIAAAAIAVgEIAkgHIAGAAIBugSIAggEIAvgDIABAAIAGAAIAAAAIAAACIACADIACABIABAAIgBgHIABAAQAgAAAgABIAaACIACAAIAGABIAFAAIAAAAIgFgBQgwgKgzAEIgEgxQgBgGgCgFIAWgJIAAAAIABAAIAAgBQAYgJAYgHIABAAIAAACIADAHIgCgJQAbgIAdgEIACAAIACgBIABAAIABAAIAAAAIACAAIAFgBIAAAAIABAAIACAAIAMABIAAAAIABABIABAAIAAAAIABAAIAAAAIABAAIACABIABAAIAAAAIABAAIAAAAIABAAIAAABIAIAEQAJAEAHAIQAGAGADAIQAJAVAEAVIAAADIAAAAIAAABIABAAIAAADIAAAAIABAIQADgFgBgHIAAgBIAAAAIAAgDIAAgBQgDgQgGgOIgCgFQgLgWgTgLIgHgDIgCgBIgBAAIAAAAIgBAAIAAAAIgEgBIgBgBIgBAAIgJgBIgDgBIgDAAIgBAAIgDAAIgDAAIgCAAIgDABIgCAAIgQADQgUADgUAGQgBgVgJgTQgIgXgPgTQgGgJgKgFIgJgFIAAABIgEgDQgHgGgIgDQgHgDgIgCIgDAAQgugPgyABIgcAEQgUACgSAHIgQAHIAOgFIAAAAIACAAIABAGIgBAAQA+AnAdBFIAAAHIAAAAQABAGAEgCIABAAIAAAEIgEABQgdAGgbAIIgBgBIgFgNIgCgKIgBgCIgBgBIgCgCQABgFgDgEIgNgYQgRghgbgWQgRgPgVgJQgFACAFACQgQAEgRACQgqAEgoAJQgnAKgmAOIAAAAIABABIgBABQAYAWAcAWQAOALAGARQAFAMAHAIQAFANALAGIAAABIglAPIgPAHIgBAAIgDACIAXgHIAagJQAPgHAPgFQAsgPAugBQAJAIAIAJIAJAOQARAaACAdIgJACIAAAAQggAEgeAIIgFABIAAAAIgHACIgIACIgSAEIgHACIgrAOQgMAEgKAGIgDACIgEADIAAABIgBAAIgCACIAAAAIAAAAIgBABIgBAAIAAABIAAAAIgCgGIAAgBIgBgCIAAAAIAAgBIgCgDIgFgJIgCgEIgBgBIgIgNIgFgKIADAHIADAJQAIASAJASIAAABIAAAAIAAAAIABAAIAAABIABABIAAAAIgBAAIgBABIAAAAIgEACIAAAAIgBABIgBAAIgBABIgBABIAAAAIgQALIgCACIgFADIAAAAIgCABQgXARgWATQgOAMgRAJIgdAPQgdARgaAVIgEADQgbAXgZAbIgIAJQgMAJgMAHIgKAFIAAgBIgDgPQgFgVgJgUQgSgngVgmIgBgDIAAAAIgLgVQgHgMgJgMQgPgVgTgSQgXgWgKgZQgMgbAEggQAEgmAdgZIAfgaIAEgEQAKgIAXgNIAAAAIACgBQAJAGASgJQBAgfBIgNIA8gLICEgYIAlgHIBEgMIAKgCIABAAIACgBQAkgGAlgCQA2gCA3AGQAgAEAfALIAAAAIADACIACAAIANAGIADABIAVALIAJAFIABABIABABQAdATAVAdQALAPAJARQACACAAADIABACQAJAHALADIAEABIABAAIAKADQAJABAKgBIACAAIADgBIAEgBIAKgCIABgBIgGAAIgGAAIgBAAIgCgBIAAAAIgCAAIgBAAIgBAAIAAAAIABgBIABgBIAFgDIAAAAIACgBIAAAAQA3ghBCgKIAGgBIAHAAIACACIAJAHIgCADQgGgEgIAAIgGAAQgHABgGADQgrAUAAAsIAJAJQASAPAVADQAPACAQgDIALgDIALAqIgCAIIAAAAIAAABIgDAKIgGgCQgWgIgZADQgOADgNAFQgNAGgKAIIgJAIQAFABAGgEIAFgEIAAgBQApgfAxASIAEACIAAAAIAAABQAAABABAAQAAAAABAAQAAAAABAAQAAgBABAAIAAAAIADABIgBACIAAABIAAABIAAABIABABIgFAQQg0AggwAnIgKAIIgBABIgDADIAAAAIgBAAIgTARQgkAgggAhIAAAAIAEAEIgVASIABgCQAEgIAHgIIgPAQIAAAAIgBABIAAAAIADABQgPAOgOAPIgRAAIg3AAIgKAAQgIABgIABQgHACgFADIgCgDIABAAIADgCIABAAIAHgEIAEgDIADgBIAVgOIAIgGIAEgDIABAAQAKACAIgGIAWgEIAIgBIAAAAIALgCIgBABIAGgBIAEgEIgBAAIACgDQALgPgLgVQAEgBgDgEIAAAAIgDAAIAAAAIgBAAIAAAAIgUACQAlgeAdgiIAYAAQAGADAHgCIALgEIAPgCIAAAAIgGgCIgBAAIgBAAQAFgDAEgFQAEgGADgHIAAAAIAAgCIAAgBQADgHgBgKIABgCIABAAIACAAIAIAAIABAAIgIgBIgCAAIAAAAIgCgBIgBAAIgBAAIgGABIgBAAIgBAAIAAAAIgIABIABgCIABgBIAAAAIAAgBIABgBIABgEIAEgJIACgEIABgDIAAgBQAEgMgEgIIgCgDIgCgCIgBgBIgCgBQgFgDgIgBIgGABIgFABQgjAGgeAPIAAAAIgJAFIgFADIgCABIgBABIgIAFIgBABIgBABIgKAGIgGABIgDAAIgEgCQgHAAgFACIgBABQgaAMgJAbIAAABIAAAAIAAABIAAAAQAEADAGABIAAACIgJABIgFABIAjgBQgmAqgsAkIgFAEIgEAAIgfgCIAAAAIgBAAIgBAAIgHAAIgBAAIAFABIgBACIgCAAIgHAEIAAAAQgTALgEAZIABADIABADIABAAIAAAAIACABIAAAAIABAAIAAAAIABAAIAAAAQAHABAFgBIAAAAIAAACIgKAAIgCAAIgBABIACAAIACAAIALAAIAAAAIABAAIABAAIAOAAIgKAHIgBAAIgDACIgEADIgCACIgUASIAAAAIgQgCIgDAAIAAAAQgHgCgHgBIgBAAIhmALIAAAAIggADIgcABIgDAAQgnAAggANQABgEgEgFIgBgBIAAgBIgBAAIgCgBIgWgEIABgCIABAAQAPgQARgNQANgJAOgIIAigXIAagUIAGgGIAAAAIAIABIADAAIANABQgGABgHgBIgDgBIADABQAJA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");
	this.shape_66.setTransform(414.2,61.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("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");
	this.shape_67.setTransform(413.9,68.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("At7KyIAAgBIABABIAAAAIgBAAgAuWJxQhKgbABg+IAAgCQAAgNAEgPIgEAFQgMANgPAJIgBAAQggASgvgHQhKATg8g9QgqgqANg1IAFgPIgYAGIgRADQgqAFgkgSQgMgGgLgJQg6gtAehEQAFgLAGgJQhUAVhMgrQgQgKACgUQAEhAAzgVQhPgIgBhPIABgJIgBgCIACgJIACgJQALgrAvgXQATgJAUgGQgTgUADgnQAIhpBngbIASgEQACgDAOgEIAOgDQgNgNgKgUQgOgeADgbIABgJQAEgXASgWIALgMQA0gzBJAIQAPABAMADQgDgVAOgaQAzhfBvAZQAdADAZAPIACgMQBChIBeADQA4APAOAmQAkguBBgOIAEgBQAZgFAYgCIAkAEIAJACIAAgFQAkAHAfAVIACACQABAKgBAKIgCAOQBIgoBWAOIAHABIAKACQAhAHAcAUIADACQAEAMABALIAAABIAAAOQAggJAigCIAdgBIAeABQBkAIASBOQADAMABAMQABASgFAQQASgDASAEQB2ACAjBhIABACQgHALgIALIgKALIAGgBIARAJQBOAsgVBdQgGAegbATIgBABIAAABIAEABQA0A4gJA4QgBAIgDAIIAAAAQgJAagVAaQgPASgUAJQAGAFAKAPQAZAnADARQACAKgCAKQgDAZgVAbQASgcgaAkQgaAkgCACQgPAKgTALIgIABQAFAVgKAdQgRAugvAVQhsAuhwgVQgIAPgOAPQguAwhAAGIgEAAQg7ADgrgfQgEARgJASIgBACQglBMhcgNQgqgHgdgUQgNAegvASQgdAMgZgDQgZgCgWgPIgJgDIgDgBQgVASgcADIgQABQgdAAgjgMgAsPJhIAUAKIASAJIAAAAIAAAAQBGAPAug8QAHgJABgLQAEgigOgcIACgBQAaAugNAhQBdAlBQgxQANgIAIgPQAKgWADgVQgLgJgLgMQALAIAMAIIAAgCIAAgCIAAgCQACgfgQgdIAGgCQAPAYABAbIAAACIgBASQAoAWAzAEQA5AFAqgnQAZgWAKgaIAAgFIACABQAIgWgBgXQAAgFAFgDIADgBQAJAegLAbQCQAeBzhdQAXgTgCgdQgCgjgYgXQgXAFADgOQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAlANALAaIARgJIADgBIAJgIQACg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QgBAAAAAAQAAgBAAAAQgIAGgKAFIgCABIgLAGIgCABIgBAAIAEAAIAPgDIAAAAIAkgFIAUgDIAJgCIAXgDIAHgBIABgBIABAAIgBAAIgGABIAJgFIAAAAIACgDQAFgIAIgGIAAAAIAAgCQgFgIAJgMQAGgIAJgEIAGACQAEAAADADIACgCIAAgBIgIgDIgBgBIABAAIAJAEIABAAIADABIAAAAIAHACIAAAAIABAAIADABIAAAAIACAAIgCgBIAAgBIABABIABAAIAFAEQAFAEABAGIAAABIAAACIACAAQAPAAAPADIABAAIADAAIAAABIAFAAIAAAAIABABIABAAIAAgDQACgIALgCIADABIAEADIAAAAIACACIABABIABAAIAAAAIAWAFIACABIABgBIAAABIABABQAEAFgBAFQAggOAnABIADAAIAcgBIAggDIAAAAIBngLIABAAQAHAAAHADIAAgBIADAAIAQACIAAAAIAUgRIACgCIAEgDIADgCIABgBIAKgGIgOAAIgBAAIgBAAIAAAAIgLAAIgCAAIgCgBIABAAIACAAIAKgBIABAAIABAAIAWgCIABgBIAAAAIAFAAIABAAIACgBIALgBIACAAIAFAAIADgBIABAAIABAAIAGgGIAAAAIAAgBIABgBIgBAAIABgDIABAAIAAAAIABgEQADgKgFgOIAAgCIgJAAIgBACIgBAAIgEAAIACgCIgHAAIgWgCIACACIABABIABADIACADQACAGgBAFQgCAJgKAJIgBACQgHAFgHACIgBAAIAAAAQgGACgGgBIAAAAIgBgBIAAAAIgBAAIAAAAIgCAAIAAAAIgBgBIgBgDIgBgDQADgZAUgKIAAgBIAHgDIACgBIABgBIgFgBIABAAIAHAAIABAAIABAAIAAAAIAfABIAEAAIAFgEQAsgkAmgpIgjACIAFgBIAJgBQAagEAagDIACAAIACACQAHgJAEgMIgHgCIABAAIAHABQACgIABgKIABAAQAAAKgCAIIAbACIAYABQAFgPARgDQAFABAEAEIAAABIAAACIAIgCIALgCIACgEIAAgBIABgBIABgCQAFgLAAgLIAAgMIAAgCIgCgHIgBgBIAAAAIgCgBQgggDggANQgUAIgSAKIgBAAIgIAGIgCABIAAAAIgKAGIAJAAQAFAAACACIABAAIAAABQgMACgMAAQgMAfghALQgGAAgEgEIAAAAIAAAAIAAgBIAAAAQAJgcAagMIABAAQAFgDAHABIAEACIADgBIAGgBIAKgHIABAAIABgBIAIgFIABgBIACgBIAFgEIAJgEIAAAAQAegQAjgGIAFgBIAGgBQAIABAFADIACACIABAAIACACIACAEQAEAHgEANIAAABIgBADIgCADIgEALIgBADIgBABIAAABIAAAAIgBABIgBADIAIgBIAAAAIABAAIABAAIAGgBIABAAIABAAIACAAIAAAAIACAAIAIABIgBABIgIAAIgCAAIgBAAIgBAAIAAAAIgBAAIgEAAIAAAAIgCAAIgKACIgBAAIgCAFIgBABIgDgBIAAgBIABgBIABgBIABgBIgRAFQgBAbgbAMIArgEIACAAQAGgFAEgJIACgEIADgIIAFgPIABgBQAAAKgCAIIAAABIAAABIAAAAQgDAIgEAGQgEAEgFAEIABAAIABAAIAGABIAAABIgPACIgLAEQgHACgGgEIgYAAIgFAAIAAAAIAEgBQgEgDgCgEIAAABIAAABQgCgDAAgDIAAgDIACgGQgRABgSgBIgIgBIAAgBIAOgCQAMgCANgBQANAAAOACIADAAIABAAQABgEgCgDQgPACgPgBIgPgBIgVgDQgCAHgDAFQgHAMgPAIQAGgFAFgFIggADQgiAsgvAkIgCABIAAAAIAEAAIACgBIABACIABAAIABACIgBAAQADAJABAIQAAAGgDAGIAqgGQACgDAEgBIgCAEIAJgBIALgBIADAAQADgFgDgFIgEAAIgSABIgBAAIgrAFQAYgJAbgBIAWAAIADAAQADADgFAAIgHABQAEAGgFAEIAHABIgBABIgeADQgDAPAOACIAUgDIAGgGQALgRgKgNIgHgHQgLADgLAFQAHgHAKgFIABAAIABABIAYgDQAjgeAigfIADgDQgdAhglAeIAUgCIAAAAIABAAIAAAAIADAAIAAAAQADAFgEABQALAVgLAPIgCACIABAAIgEAEIgGABIABgBIgLACIAAAAIgIABIgWAEQgIAHgKgDIgBAAIgEADIgIAGIgVAOIgDACIgEACIgHAEIgBABIgDABIgBABIgDABIgLAGIgIADQgCADgFACIgXAHIgEABQASgHARgIIABAAIAAAAIAFgDIAJgFIACgBIABgBIACgBIABAAIAAAAIADgCIAAAAIABAAIAAgBIAAAAIAHgEIAAAAIACgBIABAAIABgBIAAAAIADgBIAWgOIAHgEIABAAIAEgDIgDAAIgBAAIgDgDIABAAIgDgCQgGgEAAgIIAAgDIgqAGIAAAAIgBABIgBACIAAAAIgBABIAAABIgBAAIgCACIABAAIgDADIgIACIABgBIgDABIgDAAIgNACIgEABIgFAAIgSAMIgDACIgEADQgMAIgGALIgCAEQAPATAWgDIAEgBIAAAAIgIADQgGACgHgBQgQgCgHgNQgBgDABgDIAAgBIABAAIAAgBIABgDIgPAAIgEgBIgXABQhDAEhDAGQgwAFguAJIgBAAQgBAFgGAEQgFAEgGACIACAAIAAAAIgFAAIgDAAIACAAIgkgEQgEAFgHACIgKAHQgUANgWAKQgUAKgUAAQgJAAgJgCgAvoCmIAAAAIgBABIgCAEIgDAFQgDAGgBAHQgBAHAEAEIAEADIABAAQALAEAMgCQAlgJAggTIAIgFIAKgHIACgCIABABIAGgFIgBAAIAAAAIABAAIADgDIgBgBIAAgBIAAAAIgBgBIAAAAIgBgBIAAAAIAAgBIAAAAIgCgEIACgEIACgDIgDAAIAAAAIgDAAIgBAAIgEAAIgXADIgDAAIAAgBIABgBIABAAIAGgCIADgBIAPAAIAFABIAAAAIADAAIABAAIACAAIADAAIAHABIACABIAAAAIgKgBIgBAAIgCAFIAAABIgBABIAAAAIABABIAAABIAAAAIAAAAIAAABIACACIAAAAIABABIAAAAIAAABQAEADAIgBIAAAAQAFgCAEgGQAGgIgDgIIAAgBIAAAAIAAAAIgCgBIgFgBIgDgBIAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBABAAIAGABIABAAIAAAAIACABIACABIgBgCIAAgBIgDgBQgEgBgDACQgEABgDAEIgBACIAAABIgBACIAHABIAAgCIAAAAIABACIABAAIAAABIABADIAAAAQgDADgDgBIACgCIADAAIgCgDIgBAAIgHgBIgBAAIgBAAIAAAAIgBgBIgDAAIgBAAIgCAAIgBgBIgFAAIgYgCIgEAAIAAAAIAAABIgBACIAAABIAAABIAAAAIgBACQgGAMgMACIgCAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABAAIAHgEIgBAAIgMgBIgKgBQgMgCgKAFIABgCIABAAIABgBIgDAAIgCgCIgBgCIgBABIgLAMIgCACIgCAEIgBABIgBACIABAAIgCABgAtVCPQgEAPgQABQAPAAAPADQALgDAHgKIAAAAIgEABIAEgCQABgDgCgDIgCgEIgBAAIgBgBIgXgGQABAFgBAHgAtqCfQgDAAgCgCIgBACIAGAAIAAAAgAuxB0IAAAAIABACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAOgMAGIgEACIABAAIADAAIALACQAGABAGAAIAAAAIADgBIAFgHIADgGIAAgEQgBgEgDgDIgCAAIgBgBQgIgCgGgDIgBAAIgBAAIAAABgAvVCOIACACIAAAAIABACIAIgBQANgEAKgMQADgFgDgGIgEgDIgDgDIgBABIgBAAIgIgDQgPALgDASIAAAAIABADIACgBIgCABgAoNAwQgRALgEAVIAAACIABAAIAAABIAAAAIAAAAIAAABIABABIAAAAIAIAAQATgCAHgRQADgFABgHQAAgEgBgDIgBgCIgBAAIgCgDIgEABIgEABIAAABIgEACIAAAAIgBAAIgBABgAl6BLIgFAHIAGgBIAhgFIACAAQAKgLgFgTIgCgJIgaABIgCABIgEAAIABgBIgSgBQAaAMgQAagAkngzQgCADgBAEIABABIABAEIADAFQARgBAKgSIABgBIADgJIABgGIgBAAQgEACgDgCIAJgFIAAgBQgQgIgNASIAPAAIgBgBIABAAIAAABIAFAAIABAAIABABIgGAAQACAFgBADIAFABIgBABIgGABIgCABIAAAAIABgBIgUACgAksguIAAAAIAAgBIAAABgAmggzIgBABIACACIACABIACAAQAegKAMgbIAAgBIAAgBIgLAAQgaAJgKAagAhACOQg4gUgxgUIACgBQA4APA2AVIAAABQAAAEgEAAIgDAAgA1IB/IAJgFQApgUAtgPIAKgDQAEALgfAHQgbAHgXAOQgNAIgLAAIgEgEgAs/BrIAOgKIAyghIAKgHIADgCIAGgFIAOgJIADgBIgaAUIgiAWQgOAIgNAKQgRANgPAPIgBABQAIgMAMgKgAm8B6QAIgCAIAAIAKAAIA3AAIARgBQAOgPAPgNIgDgBIAAAAIABgBIAAgBIAPgPQgHAIgEAIIgBABIAVgRIABAAQgXAYgbAYIgCABIgRAAIgGAAIAAAAIgBAAIgDAAQgrgBgoAGQAFgDAHgCgAuqBfIAGgGIAEgCQAggVAfgYIAYgVIAAgBIABAAIAIgGIgGAFIgVAUIgPAMIgPAKQgUAOgTAQIgEADIgEAFIgCABIgDAFQABgFACgFgAnxBfIABgBIAAABIgBAAgAmhBaIAAgBIAAgBIABABIACABIgDAAgAAABOQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAGABIgHAFIAAgEgAjnAEIATgQIABgBIAAAAIADgDIABAAIAKgJQAwgmA0ggQgcAUggAWQgaASgYAUIgDACQggAZgcAeQgMANgOALIgDACIAAAAQAgggAkgggA1kA7IAFgBIgFACIAAgBgAr2AzIAHgEIABAAQgCAEgGAAgABNArQhKgJhBgcIACAAQBEATBGAPIAAADIgBAAgArKAkIgDgBIADABQAHABAGgCIgNgBIgDAAIgIgBIAAAAIAAAAIgDAAIgCAAIgBAAIgBgBIAAAAIgBAAIgBAAIAAAAIgGgBIAAAAIgBAAQgBgDAAgDIABgEQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABIAFgBIACAAIAAAAIABAAIAAAAIACgBIABAAIAAgBIAAAAIABAAIABgBIACgBIABgCQADgDACgFIAAAAIAAgCIAAAAIABAAIAAgBIAAgBIAAgCIAAgCIAAAAIgBgDIgBAAIgBgBIgBAAIAAgBIgFABQgGACgEAGIACABIAAgBIABAAIAAABIAAAAIADAAIgBABIgBAAIADADIAAAAQgBAEgDABIABAAIAAAAIABAAIABABIAAAAIAAABIgBAAIgBAAIgBAAIAAAAIgCgBIgBAAIgBAAIABgBIgDAAIgBgBIgBAAIAAAAIgBAAIAAAAIgCAAIgBAAIAAgBIgBAAIAAAAIgpgGIgEAAIABAAIADAAIABAAIABAAQATACATADIABAAIAAABIABAAIADAAIABABIACAAIAFABQACgCABgCIgCgEIgBAAIgBgBIgFAAIgEgBIAAAAIgUgDIgBAAQgKAAgIgEIgBAAIgBgBIAAAAIgBAAIAAAAIAAAAIgBAAIgEAFIAAAAIAAABIgBACIgBAAIAAAAIgBACIgEADIACABIgCAAIAAAAIgDADIACgDIgPgBIgQgDIgBAAIgBABIAAgBIgBgBIgBAAIgCAAIAAgBIACABIAAAAIADAAIABAAIAAAAIADAAIASADIABAAIAJABIAAAAIABgBIABAAIABgCIACgDIABgBIAAAAIABgDIABgBIAAAAIACgCIAAgBIgCgBIAAgBIAAAAIABAAIABABIAAAAIABAAIAAgBIACgDIgBgEIgBgFIgBAAIgDAAIgCgBIgBAAIAAAAIgBAAIgCAAIAAgBIgCAAIgBAAIgBgBIgCAAIgEgCIgBAAIABAEIABAFIAAAAIgBADIAAAAIgCAEQgCAEgHADQgEACgDABIgBAAIgCAAQgEgBgEgFIAAgGIABgFIAAAAIABgDQACgEAEgEIADgCIAAAAIABgBIAAAAIACAAIABAAIAEABIgBgBIAAAAIABAAIABABIABAAIAEABIABAAIABAAIAAAAIAAABIAAAAIABABIADABIACABIADABIABAAIABAAIAAAAIABAAIAAAAIABABIABAAIAAAAIAAAAIABAAIACABIABAAIACAAIABABIABAAIAAgCIAAAAIABACIABAAIgBAAIAAABIAAAAIADAHIAAAAIgBABIAAAAIgCAFIABAAIABAAIAAABIABAAIABAAQAIADAIAAIAAAAIADABQAOABAOADQABgFAEgDQADgCAFgBIADAAIABACIABABIAAAAIABABIAAAAIABADIAAAAIAAABIABABIAAABIAAACIAAAAIAAABIAAABIgCAEIgBADIAAAAIgDADIAAABIgCACIgDACIgBAAIAAABIAAAAIgDABIgBAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIACABIADAAIAAAAIACAAIAAAAIAYADIAAAAQAIgCAHgJIAAAAQACgJgFgIIgLgBIgBAAIAAgBIgBAAIgBAAIAAAAIgCAAIgBAAIAAAAIgBgBIAAAAIgBAAIAAAAIgBAAIgHgBIgCgBIgBAAIABgBIADABIAIABIABAAIABAAIABABIABAAIABAAIABAAIAAAAIABAAIAAAAIABAAIAAABIABAAIABAAIAAAAIAIACIABAAIAAAAIABAAIAAABIgBAAQAGAHgCAJIAAAAIgBACQgHAIgHACIgHABIgJgBgAs6gUQgKAJABAMIAAA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gFIgCgBIgDgBIAAAAQgfgLgggEQg3gHg2ADQglACglAGIgCAAIgBAAIgKACIhEANIglAGIiEAZIg8AKQhIANhAAgQgSAIgJgFIAJgEIAAAAIABgBIABAAIAAgBIABAAIABAAIAKgGQA5gfBEgKIAJgBIABAAICBgVIBpgSIBOgOIAAAAIBFgNQBCgJA8AMQBCAOA7AoQATANANAUIADAEIACAEIAZAmIADACQAOAEAMADIASADIABAAIABgCIAHgEIAAAAQA3gmBDgIIAFgBIAEAAIACgBQANAFAGANIAAAAIgBAAIgFgEIgJgIIgCgCIgHABIgGABQhCAJg3AiIAAAAIgCABIAAAAIgFADIgBAAIgBABIAAAAIABAAIABAAIACABIAAAAIACAAIABAAIAGAAIAGAAIgBABIgKADIgEABIgDAAIgCAAIgJABIgKgBgAytjoIABAAIgCADIABgDgA1QkBIABgBIAEACIgFgBgAASkDIACABIgGABIAEgCgA0TkMQgTgBgUADQALgKARgCIANACQAZAFAYAMIABABQgZgJgbgBgAmylDQgLgHgKgCIgCAAIAAAAQhSgVhQAVIgCABIAAAAIgOAEIAQgHQASgHAUgCIAcgDQAygCAuAPIADABQAIABAHADQAIAEAHAFIAEADIAFADQgKgDgJgHgAkqk/QBEgeBKgTIAlgJIADAAQgLAOgbAFIAAABIgEAAQhAALg8AYQATgCALAFQgMAFgMAAIAAAAQgLAAgLgFgAv6lnQgCgBgBgEIglgzIgBgBIAAABQABAKgHgEQAAgMADgMQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAQATAnAbAhIAAABQgDADgCAAIAAAAgAsXmPQgIgZAKgaIABgEQABgWARgSIABgBQgNAogGAtIAAABQAGACACADQgCAEgDABIgCABIgEgBgAnSnmIACgBIggBEIgDACQAHglAaggg");
	this.shape_68.setTransform(482.3,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61},{t:this.shape_60}]},70).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},5).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_62},{t:this.shape_63},{t:this.shape_61},{t:this.shape_60}]},3).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_62},{t:this.shape_63}]},3).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_62},{t:this.shape_63},{t:this.shape_61},{t:this.shape_60}]},2).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_62},{t:this.shape_63}]},3).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_62},{t:this.shape_63},{t:this.shape_61},{t:this.shape_60}]},2).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_62},{t:this.shape_63}]},2).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_62},{t:this.shape_63},{t:this.shape_61},{t:this.shape_60}]},2).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_62},{t:this.shape_63}]},2).wait(206));

	// Layer 4
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgNgGIADgIIAAgBIABAAIAAgBIACgBIADgCQAWACgFAaIgDAIQgGADgEAAQgMAAgBgag");
	this.shape_69.setTransform(203.8,163.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("ADaHPQgGgFgCgKQACgRAJgMQAigBgIAmQgHANgJAAQgGAAgHgGgADdGrIgBABIgBABIAAAAIAAABIgEAIQACAjAWgLIAEgIQAFgcgXgBIgEACgAj4nUIABAJIAAAEIAAAEIAAABIAAABIgBAHg");
	this.shape_70.setTransform(180.9,118.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#0099FF","#CCFFFF"],[0,0.761],-48.1,-104.1,-48.1,225.7).s().p("Ag9AnIgJhZQAAhIA5AAQA4AAAcC6QAAAYgSASQgTARgaAAQgyAAgThUg");
	this.shape_71.setTransform(304.1,33.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgmAwIADgJIAAAAIABAAIAAgBIACgCIADgBQAXABgFAcIgDAIQgGACgEAAQgNAAgBgagAAFg6IAEgKIAAAAIAAAAIABgBIACgCIAEgCQAcABgGAiIgFAJQgGAEgFAAQgQAAgBghg");
	this.shape_72.setTransform(206.3,157.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("ADAHPQgGgFgCgKQADgRAJgMQAigBgIAmQgHANgKAAQgGAAgHgGgADEGrIgCABIAAABIgBAAIAAABIgDAIQABAjAXgLIADgIQAFgcgXgBIgDACgADtFqQgHgGgDgMQADgUALgPQApgBgKAuQgIAPgLAAQgIAAgIgHgADxE+IgCACIgBABIAAAAIAAABIgEAKQABAqAbgNIAFgKQAGghgcgCIgEACgAkRnUIAAAJIAAAEIAAAEIAAABIAAABIAAAHg");
	this.shape_73.setTransform(183.4,118.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AoFKTIAEgJIgBAAIABAAIAAgBIACgBIADgCQAXABgEAcIgEAIQgGACgEAAQgNAAgBgagAnZIpIAEgLIAAAAIABAAIAAgBIACgCIAEgCQAcACgFAhIgFAKQgHADgFAAQgQAAgBgggAmcHDQgNgMACgTQACgUAJgJIAFgFQAogNAEAcQAEAcgHAKQgGAJgBAGQgKAGgJAAQgKAAgKgJgAHqqsQAJAJAHAPQASAkgJAcQgQgqgJgug");
	this.shape_74.setTransform(254.2,96.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AkdKuQgGgFgCgKQACgRAJgMQAigBgIAmQgHANgJAAQgGAAgHgGgAkaKKIgBABIgBABIAAAAIAAABIgEAIQACAjAWgLIAEgIQAFgcgXgBIgEACgAjxJJQgHgGgDgMQADgUAMgPQAogBgJAuQgJAPgLAAQgHAAgJgHgAjtIdIgBACIgBABIAAAAIAAABIgFAKQACAqAbgNIAFgKQAFghgbgCIgFACgAizHVQgWgJAEgmQADgdAKgIQgCgFASgEQAagHAMAfQANAfgVAcQgNANgOAAQgHAAgHgDgAiyGEIgFAFQgJAJgCAUQgCATANAMQASAQAVgNQABgGAHgJQAGgKgEgcQgCgTgUAAQgJAAgNAEgAi0GEIABAAIgBAAQAAABAAgBgArwj1IABAJIAAAEIAAAEIAAABIAAABIgBAHgALopRQAKgdgTgkQgHgOgJgKIgCgJQAmAbgDA6QAAALgEAKIgEgIg");
	this.shape_75.setTransform(231.3,96.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AhqDVIAEgIIAAgBIAAAAIABgBIABgBIAEgCQAXABgFAcIgEAIQgFADgEAAQgOAAgBgbgAg+BrIAFgKIAAgBIAAAAIABgBIABgCIAFgCQAbACgFAhIgFAKQgHADgFAAQgPAAgCgggAgBAFQgNgLACgTQACgUAJgJIAEgFQAogNAEAcQAEAcgGAKQgHAIgBAGQgJAGgJAAQgLAAgJgJgAAkicQgFgFgEgGQgPgWALgaQALgaAYACQAVgBAQAOQAFAFADAIQAGARgEAfQgSAQgXACIgDAAQgNAAgMgJg");
	this.shape_76.setTransform(213.1,141.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AiED8QgGgFgCgKQACgRAKgMQAhgBgIAmQgHANgJAAQgGAAgHgGgAiADYIgCABIgBABIAAAAIAAAAIgEAJQACAjAWgLIAEgIQAFgcgXgBIgDACgAhXCXQgHgGgDgMQADgUALgPQApgCgKAvQgJAPgLAAQgHAAgIgHgAhTBrIgCACIgBABIAAAAIAAAAIgFALQACAqAbgNIAFgKQAGghgcgCIgEACgAgZAjQgXgJAEglQADgdAKgIQgCgFASgFQAZgGANAfQAMAfgVAbQgMAMgOAAQgHAAgGgCgAgYgtIgFAFQgKAJgCAUQgBASANAMQARAQAUgNQACgGAGgJQAGgJgEgcQgCgTgTAAQgJAAgMAEgAgbgtIABAAIgBAAQAAAAAAAAgAARiAQgIgDgHgGQgGgHgFgLQgKgUAEgVQAEgVAJgGQAOgLASgDQAiABANAbIADAGQAJAYgEAMQgFAPABAEQgOASgQAEQgHACgHAAQgKAAgKgEgAgFjJQgLAaAPAWQAEAGAFAEQAMALAPgBQAXgCATgQQADgfgGgRQgDgIgFgFQgQgOgVABIgDAAQgWAAgJAYgACLjfIACABIAAABIgCgCgABUj+IgFgDIADAAIAEADIgCAAg");
	this.shape_77.setTransform(215.9,139.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AlbL/IADgJIAAAAIABAAIAAgBIACgBIADgCQAXABgFAcIgDAIQgGADgEAAQgNAAgBgbgAkvKVIAEgLIAAAAIAAAAIABgBIACgCIAEgCQAcACgGAhIgFAKQgGADgFAAQgQAAgBgggAjyIvQgNgMACgTQABgUAKgJIAFgFQAogNAEAcQAEAcgHAKQgGAJgCAGQgJAGgJAAQgKAAgKgJgAjMGMQgFgEgFgGQgPgWALgaQALgaAYACQAVgBAQAOQAFAFADAIQAHARgEAfQgSAQgXACIgDAAQgOAAgLgKgAhbEJQhOgJABhLIABgDIABABQAIAAAAgTIgCgTIgEAAIAAAGQgBgLgMgHQAIAPgCANIgFAOIAAABIgBACIACgBIAAABIAHAAIgCACIgFAIQgMASgSALIAAAAIAAABQgSALgYAFIAHgEIASgLQg+AkhGgiQgMgGgGgMQgRgiADgkIAAgBIAAgBIABgDIgBAAQACgNAEgNQgJAJgEAQIgCAIQgvAbg9gVQgVgIgHgVQgMgnAOgkIABgBIAAAAQAAgFAIgOQgJAHgGAJIgOAIQhAAag6gcQgDgJgBgKQgBgdAPgaIACgBQAWgIAHgNIgQAGIgEAAQgPgBgPgGQgigNgFgcIgBgMIAAgBIAAgBIACgLQAMg8A0gQQANAGARAAIABACIABABIAAgCIAAgBQgXgDgJgLIAAAAQgZgSACgqQADgtAkgdQAdgXAkgEIABAAIAPACIAGgCIgFgHQgHgDgHgHIgQgNQgYgXACgcQABgMAEgMQAghSBaAHIAFAIIgBgHIAJABQAQANgGARQgEANAHAEIABgCQANguglgHQgDgkAYgeQAngyA6AGQATACAUAIQABAEADADQABgFACgCIgBgGIAAgFIgBgFQAKgQANgOQAngnA2ADQA7AEgDAzIACADQAFAEABgFIAAgCQAAgOgEgLIADABIgCgFIABgGIgCgBIABgBIADgDIAEgFIABAAQBMhPBsAdQADAOgBAOIgFAFQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgBQgBAQgGAPQgEAJAGAEQAKgXABgZQA6gqBDAEIAIAAQAYADAZAIQAFAGACAIQADAGgBAIIgBAAIAAAFIAAAAQgBAFgDAHQgGALAIAEQAIgPAAgOIAtgPIAGgCIAIgCQBFgVA3ApQAHAGAEAHQAFAIAAAKQABATgDASIAAAAQAAAFgCAEQgEAQgHAPQAJgFAFgLQAFgKACgJIAZgFQBagTAqBFIgDAFQgHAPgJAOQgIAFgFAGIAHgDIgEAFQgGAIgCAIQAMgKAKgOQATgFAPAGQAXAIAPAfQAeA6gsAmQgJABgJACIAKADQgIAGgLAGQAPgBANgKIANAAQAPAQAOARQAHALACALQAKBRhLAjQAQgCAMgGIADgCIACAJIgCAAQAJALASANQAOALgBARQgCAvgdAmIgBAAIgCAAIAAAEIgGAHIgDACIgMAJQgLgTgfgFQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAALARgHQAWAPAGAbQAFAWgPASQhNBXh1gEQAFgXgLgUIgCAAQgEADABAEQAEARgDASIgCAAIABADQgFAWgQAVQgcAkgtAEQgoADgigLQgBgfgUgXIgEACQASAWABAcIgUgKQAKAIALAGQAAARgFASQgEANgJAIQg4AwhNgQQAGgbgbggIgBABQAOAUACAbQAAAJgEAIQgcA0g4gCIAAAAIgPgEIgRgFQAMgRAGgYQgYBChFAAIgRgBg");
	this.shape_78.setTransform(237.2,85.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("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");
	this.shape_79.setTransform(233.2,85.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFF00").s().p("AixDLIgEgCIgggMIgCAAIgPgGQgOgJAEgSIABgBIABgCIAAgCQAJgXAWgMIACAAQANgIANAAIABAAIABAAIAMABIAAAAIABABIACAAIAAAAIADABIAAADIgBAAIAAAAIgFABIgGABIANACIABAAIABAAIADAAIAAAAIAcAEIgBAFQgJAEgIAFQgYAQgJAcQgDAKADAFIADAEIgCAFIgCgBgAitDFQgBgDABgDQAEgkAfgTQAJAZgQAYQAAABABAAQAAABAAAAQABAAAAAAQABAAABgBIABgBQAQgZgNgYIAJgFIABAAIACAAIACABQACAEAAAFQgBAGAEADQABgEAAgFQAAgFgCgEQAOgBAGANQAPAdgbARQgSANgSAAQgNAAgNgGgAi5gPQgBgLgEgKIgFgJIgEACIgBAAIgBABIAAAAIgUANIgXAPIgHAFIAAABIgCgDIAAAAIAGgFIAmgiIAAAAIAAAAIABAAIABgBIAegbIACgDIABgBIABgCIABgBIACgCQACAEAAAEIABAPQABAJAEAKQAbgKAXgSIABAAIAJgIIATgTIALgNIAAgBIABAAIAAAAIAAAAIABgCIAAAAIABAAIAIgLIAAgBIAMgSIAFAGQAEAHADAIQALgBAKgJQA2g0BMgQIACADQgYASgaAQQg3AigrAvIgBACIAAgBIgDgFQgFgLgJgJQgDAAgBADIgBACIAAAAIAAABQgEAKgIAIIgBABQgNAOgPAOIgDACIgWATQgdAVggARIgDgSgAC9gsIAAgDQAXgHAKgZIAAgBQgCgRgNgNIAJgDQAGAFAFAAQgCgDgEgDIABgBIAFgBIAOABQASALgHAVQgNAognAAIgLgBgAC9gvIgFgDIgJAAIgBgDQgGgqAmgPQALAOACARQgKAUgUAMgACIg3IABgFQgIgCgHgJQgEgGAAgHIAAgGIAAAAQACgWAOgNIACgBIACgCIAAAAIACgBQALgHARgDIAAAAIACAAIAAAAIABAAQAEAEAEABIACABIACAAIAAAFIgFgBIgBAAIAUAEIABAAIAAAAQAVAEAWgCIAAAEIgNAAQgOABgMAFQgMAFgLAKIAAAAIAAABIAAABQgJAMgDAOQgDANAGAHQgRgBgRgEg");
	this.shape_80.setTransform(247.9,58.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#33CC66").s().p("AjqEEIgDAAIgBAAIgEAAQgSgCgSgIQgFgCgGAAIgMgBIgBAAIgBAAIgBgBIgCAAIgBAAQgRgFgRgCIgWgHIgFgCQgXgIgSgPQgQgMADgQIADgIIABABIABABIABABIACABIAAACIAHAHQARAUAdAKQAUAGAVAFIAKABIAHABIACABIACAAQAfAEAggBIgQAEIAQgBIABAAQAVgEAYgIIAogOIAWgHQAQgFAOgHQATgKARgNIADgDIAPgNIAAAAIACgCIACgCIABgBIAAAAIAAAAIABgBIAAAAIABgBIAHgEIACgBIAHgEIABgBIAAAAQAZgPAWgUIAegZIAHgGQAlgcAqgXIABAAIAEgDQAbgNAZgQIAAAAIABAAQAUgNATgOIABgBIAUgPIACgCIAFgDIAAgBIADgCIAAAAIADgCIAAAAIAAAAIASgNIAAAAIAMgIIAAAAIAHgFIAAAAIACgBIACgBIAAAAIAWgOIAAgBIAkgXQAZgQANgWQAIgNAEgQQABAQgEAPIgBACQgLAegVAVQgPAQgVALIAAABIAAAAIAAACIAAAAIgBABIAAAAIAAABQgIADgGAFIAAABIgGgEIgCgBIgDAAIAAAAIgCAAIgBAAQgHAAgGADIgLAGIgEADIgDABIgBACIAAAAIgCABIgCACIgCADIgCACIAAABIgCADIgBAAIgBAEQgEAGgBAHIgBAGQgJAEgHAGIgBABIgHAGIABAAIAIgEIAAAAIAAAAIAAAAIgIAFIgkASIgBAAQgeAPgcARQgrAZgoAdQgQAMgOAMQgaAWgUAZIAAAAIgDAEIgBADIgIgEIgEABIgBABIgBAAIgBAAIgGABIgGACIgBABIgMAFIgBAAIgEACIAAAAQgQAJgIAPIgFAJIgCADQgvAPgvAUIgHADQgXAJgWAAIgDAAgAj8DiQgZABgYgDIgCAAIgSgDQgVgEgUgIIgEgBQgagJgPgTIgDgFIgBgBIAEAAIAMABQANABAMgCQASgBAQgGQAbgKAXgTQAxgqA1gkIBshGIAAAAIABAAIADgDIABAAIAMgIIAEgDIAdgSIAAAAIABgBIABAAIABgBIAAAAIAEgCIABgBQAqgaAtgXIAHgEIARgKQAMgIAKgLIABgBIAAAAQAOgLAQgJQBFgkAqg8IAAAAIgBAAIADgDIADgEQBFgSA7AjQAJADAIAFQAJAHAGAJIAAABIgDALQgCAIgFAGQgdAqgtAcIgCACIgBAAIgWAOIAAABIgBAAIAAAAIAAAAIgDACIgGAEIgLAIIgBABIgSAOIAAAAIgDACIgDACIgIAGIgUAOIAAAAIgBAAIgbATIgMAIIgBABQgSALgUAJIgOAIIgBAAIgDACIAAAAIgBABQgcAPgbATIgWAQIAAAAIgCABQgRANgQAPQgOALgOAKIgVAQIgBAAIgJAHIgCABIgHAGIgBAAIAAABIgFAEIgKAIIgGAFQgNALgPAGQgfAOgfALQgqAQgqAMQgGgGgLABgAiwCCIAAAAIAbgYQAzgxA6glIAEAFQADAGABAHQABAPAFAPIAogXQANgIAMgIIAAAAIAWgTQARgPAOgSIAMgSIAAgBIAAAAIACgDQAEADACAFQAFALAHAJIACgDIAOgPQAngrAzgcQASgJAPgMIALgJIAIgHIAAgBIAHgHIgIAGIAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBgBgBQgYAJgaAIQgdAIgXASQgcAVgdARIgBAAIgEgIQgFgKgIgFIgLAVIgJAOIgBACIgBABQgRAXgWAQQgWAQgaAIIgCgIQgCgGABgGQAAgLgDgJIgBABIgCACIAAAAIgCACIgBAAIgCACIgYAWIgKAJIgBAAIgBABIAAAAIgBABIgBABIAAAAIg6A1QgjAfggAjIACAAIACgBIAcgcQgOAOgNAQgAFPhFIABAAIAEABIAIABIAHAAIAAAAIAAADIgUgFg");
	this.shape_81.setTransform(232.1,52.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("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");
	this.shape_82.setTransform(237.2,85.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("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CIAQgFQgfABgggEIgCAAIgCAAIgHgBIgKgCQgUgEgVgHQgcgJgSgUIgGgIIgBgBIgBgCIgCAAIgBgBIACAAIgCgDIAAABIgDAJQgDAPAQANQASAOAWAJIAGACIAVAGQASACARAFIABAAIABABIACAAIAAAAIABAAIAMABQAGABAFACQASAHASACIAEAAIABAAIADAAQAYABAYgJIAHgDQAvgVAvgPIABAAIABgCIAFgKQAJgPAPgJIABAAIADgCIABAAIANgFIAAAAIAHgCIAGgCIAAAAIABAAIABAAIAEgBIAIADIABABIABAAIAAAAIACABIAAAAIABAAIADACIAAAAIgDgBIAAAAIgCAAIgBgBIAAAAIgMgBIgBAAIgBAAQgNAAgNAHIgCABQgWALgJAYIAAABIgBADIgBABQgEARAOAKIAPAFIACABIAgAMIAEABIACABIAAABIgDgBIAAAAIgEgBIgcgJIgBAAIgagMIABAAQgMgJAGgTQglASgoAOIgYAJQgWAKgXAAQgRAAgSgGgAk5hTIABAAIgBAAgAFZhqQgXgLgJgPIABAAIBKAoIABABQgRgBgbgOgAnyh1IADAAQgWATgsgDQgNgBgNAFIgHABQArgVA1AAgAsDiKIABAJIAAAFIAAADIAAABIAAABIgBAHgAAViUIgbgEIAAAAIgDAAIgBAAIgBgBIgNgBIAGgCIAFAAIAAAAIABAAIAAAAIADAAIABAAIABAAQARACAQAGIAAABIgFgBgAgQipIAAgBQAVgZAZgVQAOgNAQgLQAogeArgZQAdgRAdgOIABgBIAlgTIAHgEIABgBIAKgFIgIAJIAAAAIgBAAIAAABIgCABQgHAFgKAFQglAPgiAVQhAAlg6AwIgzAtIgBAAIgDADIADgDgAi6jJQAMgQAOgOIgcAcIgBACIgCAAQAfgjAjggIA6g0IAAgBIABAAIABgCIABAAIAAgBIABAAIALgKIAYgWIACgCIAAAAIACgCIAAAAIADgCIABgBQADAKgBAKQAAAHACAGIACAJQAZgJAWgQQAWgQARgYIABgBIABgBIAJgOIAMgWQAIAGAEAJIAFAJIAAgBQAdgRAcgVQAYgRAdgJQAagHAYgJQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgCACgHABQhMAQg3A0QgKAJgLAAQgDgHgEgHIgFgHIgMATIAAAAIgIALIgBABIAAAAIgBABIAAABIAAAAIgBAAIAAAAIgLANIgTAUIgJAHIgBAAQgXATgaAKQgEgKgBgKIgBgOQAAgEgCgEIgCACIgBABIgBACIgBABIgCADIgeAaIgBABIgBABIAAAAIAAAAIgmAhIgGAGIAAAAIghAeQARgPASgNIAAAAIAHgFIAXgQIAUgNIAAAAIABAAIABAAIAEgCIAFAJQAEAKABALIADATQAggSAcgWIAWgTIADgCQAPgNANgOIABgBQAIgJAEgJIAAgBIAAAAIABgCQABgDADAAQAJAIAFAMIADAFIAAAAIABgBQAsgwA3ghQAagRAYgRIAHgGIABAAIAIgGIgIAIIAAAAIgIAHIgLAKQgPALgRAKQgzAbgoArIgOAQIgCACQgHgIgFgMQgCgEgEgDIgCACIAAAAIAAABIgMASQgOASgQAQIgXATIAAAAQgMAIgNAIIgoAXQgEgOgCgQQAAgHgDgGIgDgFIgBAAIAAABIgBAAQg6AkgzAxIgaAYgAGrjwIABAAQBCACA+AQIAAABQhDgFg+gOgAnrkVIAAgBQAEgDAEgBIACgBQAiABAgAIIgBAAQgmAAglgDgAFNk5QgJgCgFgFQggABgcgOIgBAAIACAAIAWAHIABAAQARAEARAAQgGgHADgMQADgOAJgMIAAgBIAAgBIAAAAQALgKAMgFQAMgGAOAAIANAAIAAAAQAPAMABAOQAAAPgNAQQgGAGgGAFQgOAKgSAAQgHAAgHgBgAFDlAQACADAFABIAGABQAwAGAPguQAHgUgSgLIgOgBIgFABIgBABQAEACACAEQgFAAgGgFIgJACQANANACASIAAABQgKAZgXAGQAUgLAKgUQgCgSgLgNQgmAPAGApIABAEIAJAAIgBAAIAAAAIgHABgAEFllIAAgCIAAgDQgGAGgJAFIAAAAIAAAAIgIAEIAAAAIAHgGIAAAAQAHgHAJgEIABgFQACgIADgGIACgEIAAAAIACgDIAAAAIACgDIACgCIADgDIABgBIAAAAIACgBIACgCIAEgDIALgFQAHgDAHgBIAAAAIACAAIABAAIACAAIACABIAGAEIABABIABABIADACIAAABIgCgBIgCAAQgEgCgEgDIgBAAIAAAAIgCAAIAAAAQgRACgLAIIgCABIAAAAIgCABIgCACQgOAMgCAWIAAAAIAAAHQAAAHAEAFQAHAJAIADQgXgFAAgVgAHxl5IABgBQA6ABA3APIAAABQg8gEg2gMgAltmQIACAAQASAEAQAIQARAIAQALIABACQgkgMgigVgAkml5QgRgFgRgHIgVgKIABAAQAgALAeAMIABABIgJgCgAFZmMIAAAAIgBAAIABgCIArADIAAABIgPAAQgOAAgOgCgAiBnnQgGgYgKgWIABAAQAHALAFAMQgDgNADgQQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQADAZAGAaIgBACIgFgJIACAIIAAABIgCACIgCgCgAIInsQAjgaAugEIABAAQgIAKgYAGQgYAFgWAKIgBAAIgDgBgABapFQgJgkAPgeIABAAQgHAhAIAiIAAACIgEABQgDAAgBgEg");
	this.shape_83.setTransform(233.2,85.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AlbL/IADgJIAAAAIABAAIAAgBIACgBIADgCQAXABgFAcIgDAIQgGADgEAAQgNAAgBgbgAkvKVIAEgLIAAAAIAAAAIABgBIACgCIAEgCQAcACgGAhIgFAKQgGADgFAAQgQAAgBgggAjyIvQgNgMACgTQABgUAKgJIAFgFQAogNAEAcQAEAcgHAKQgGAJgCAGQgJAGgJAAQgKAAgKgJgAjMGMQgFgEgFgGQgPgWALgaQALgaAYACQAVgBAQAOQAFAFADAIQAHARgEAfQgSAQgXACIgDAAQgOAAgLgKgAhbEJQhOgJABhLIABgDIABABQAIAAAAgTIgCgTIgEAAIAAAGQgBgLgMgHQAIAPgCANIgFAOIAAABIgBACIACgBIAAABIAHAAIgCACIgFAIQgMASgSALIAAAAIAAABQgSALgYAFIAHgEIASgLQg+AkhGgiQgMgGgGgMQgRgiADgkIAAgBIAAgBIABgDIgBAAQACgNAEgNQgJAJgEAQIgCAIQgvAbg9gVQgVgIgHgVQgMgnAOgkIABgBIAAAAQAAgFAIgOQgJAHgGAJIgOAIQhAAag6gcQgDgJgBgKQgBgdAPgaIACgBQAWgIAHgNIgQAGIgEAAQgPgBgPgGQgigNgFgcIgBgMIAAgBIAAgBIACgLQAMg8A0gQQANAGARAAIABACIABABIAAgCIAAgBQgXgDgJgLIAAAAQgZgSACgqQADgtAkgdQAdgXAkgEIABAAIAPACIAGgCIgFgHQgHgDgHgHIgQgNQgYgXACgcQABgMAEgMQAghSBaAHIAFAIIgBgHIAJABQAQANgGARQgEANAHAEIABgCQANguglgHQgDgkAYgeQAngyA6AGQATACAUAIQABAEADADQABgFACgCIgBgGIAAgFIgBgFQAKgQANgOQAngnA2ADQA7AEgDAzIACADQAFAEABgFIAAgCQAAgOgEgLIADABIgCgFIABgGIgCgBIABgBIADgDIAEgFIABAAQBMhPBsAdQADAOgBAOIgFAFQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgBQgBAQgGAPQgEAJAGAEQAKgXABgZQA6gqBDAEIAIAAQAYADAZAIQAFAGACAIQADAGgBAIIgBAAIAAAFIAAAAQgBAFgDAHQgGALAIAEQAIgPAAgOIAtgPIAGgCIAIgCQBFgVA3ApQAHAGAEAHQAFAIAAAKQABATgDASIAAAAQAAAFgCAEQgEAQgHAPQAJgFAFgLQAFgKACgJIAZgFQBagTAqBFIgDAFQgHAPgJAOQgIAFgFAGIAHgDIgEAFQgGAIgCAIQAMgKAKgOQATgFAPAGQAXAIAPAfQAeA6gsAmQgJABgJACIAKADQgIAGgLAGQAPgBANgKIANAAQAPAQAOARQAHALACALQAKBRhLAjQAQgCAMgGIADgCIACAJIgCAAQAJALASANQAOALgBARQgCAvgdAmIgBAAIgCAAIAAAEIgGAHIgDACIgMAJQgLgTgfgFQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAALARgHQAWAPAGAbQAFAWgPASQhNBXh1gEQAFgXgLgUIgCAAQgEADABAEQAEARgDASIgCAAIABADQgFAWgQAVQgcAkgtAEQgoADgigLIgBgPIgBgCQgEgUgPgRIgEACQAQAVADAYIAAACIAAACIAAABIgUgKQAKAIALAGQAAARgFASQgEANgJAIQg4AwhNgQQAGgbgbggIgBABQAOAUACAbQAAAJgEAIQgcA0g4gCIAAAAIgPgEIgRgFQAMgRAGgYQgYBChFAAIgRgBg");
	this.shape_84.setTransform(237.2,85.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("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");
	this.shape_85.setTransform(233.2,85.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("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");
	this.shape_86.setTransform(237.2,85.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("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");
	this.shape_87.setTransform(233.2,85.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhbIRQhOgJABhLIABgDIABABQAIAAAAgTIgCgTIgEAAIAAAGQgBgLgMgHQAIAPgCANIgFAOIAAABIgBACIACgBIAAABIAHAAIgCACIgFAIQgMASgSALIAAAAIAAABQgSALgYAFIAHgEIASgLQg+AkhGgiQgMgGgGgMQgRgiADgkIAAgBIAAgBIABgDIgBAAQACgNAEgNQgJAJgEAQIgCAIQgvAbg9gVQgVgIgHgVQgMgnAOgkIABgBIAAAAQAAgFAIgOQgJAHgGAJIgOAIQhAAag6gcQgDgJgBgKQgBgeAPgaIACgBQAWgIAHgNIgQAGIgEAAQgPgBgPgGQgigNgFgcIgBgMIAAgBIAAgBIACgLQAMg8A0gQQANAGARAAIABACIABABIAAgCIAAgBQgXgDgJgLIAAAAQgZgSACgpQADgtAkgdQAdgXAkgEIABAAIAPACIAGgCIgFgHQgHgDgHgHIgQgNQgYgXACgcQABgMAEgMQAghSBaAHIAFAIIgBgHIAJABQAQANgGARQgEANAHAEIABgCQANguglgHQgDgkAYgeQAngyA6AGQATACAUAIQABAEADADQABgFACgCIgBgGIAAgFIgBgFQAKgQANgOQAngnA2ADQA7AEgDAzIACADQAFAEABgFIAAgCQAAgOgEgLIADABIgCgFIABgGIgCgBIABgBIADgDIAEgFIABAAQBMhPBsAdQADAOgBAOIgFAFQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgBQgBAQgGAPQgEAJAGAEQAKgXABgZQA6gqBDAEIAIAAQAYADAZAIQAFAGACAIQADAGgBAIIgBAAIAAAFIAAAAQgBAFgDAHQgGALAIAEQAIgPAAgOIAtgPIAGgCIAIgCQBFgVA3ApQAHAGAEAHQAFAIAAAKQABATgDASIAAAAQAAAFgCAEQgEAQgHAPQAJgFAFgLQAFgKACgJIAZgFQBagTAqBFIgDAFQgHAPgJAOQgIAFgFAGIAHgDIgEAFQgGAIgCAIQAMgKAKgOQATgFAPAGQAXAIAPAfQAeA6gsAmQgJABgJACIAKADQgIAGgLAGQAPgBANgKIANAAQAPAQAOARQAHALACALQAKBRhLAjQAQgCAMgGIADgCIACAJIgCAAQAJALASAMQAOALgBARQgCAvgdAmIgBAAIgCAAIAAAEIgGAHIgDACIgMAJQgLgTgfgFQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAALARgHQAWAPAGAbQAFAWgPASQhNBYh1gEQAFgXgLgVIgCAAQgEADABAEQAEASgDASIgCAAIABADQgFAWgQAVQgcAkgtAEQgoADgigLIgBgPIgBgCQgEgUgPgRIgEACQAQAUADAZIAAACIAAACIAAABIgUgKQAKAIALAGQAAARgFASQgEANgJAIQg4AwhNgQQAGgbgbggIgBABQAOAUACAbQAAAJgEAIQgcA0g4gCIAAAAIgPgEIgRgFQAMgRAGgYQgYBChFAAIgRgBg");
	this.shape_88.setTransform(237.2,59.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhKIvIAAgBIABABIAAAAIgBAAgAhoIAQg8gLgIgwIgBgCQgBgKABgMIgDAEQgHAMgLAIIgBABQgWASgmACQg3AYg3gnQgrggAKgzIgSAIQgxAVgugZQgzgbAOg5QADgJADgIQg+AchCgYQgNgFgCgQQgFgyAlgXQg+AEgMg9IgBgHIAAgCIAAgIIAAgIQADgjAhgXQAOgKAPgHQgRgOgDgdQgIhTBMgjIAOgFQABgDAKgFIALgEQgMgJgKgOQgPgWgCgVIAAgGQAAgUALgSIAHgLQAigvA5gEQANgBAJABQgFgQAHgWQAbhRBZAEQAYgCAVAJIAAgJQAqhBBJgKQAuAEAQAbQAWgpAwgTQAagKAZgGQAqgHAmASIACABIACAPIAAALQAzgpBFAAIAGAAIAIAAQAaABAZAMIADABQAEAJACAJIAAAAIACAMQAYgMAagGIAXgFIAXgDQBPgHAZA6QAEAJACAKQADANgBANQAOgFAOABQBcgOAoBGIABACQgDAKgFAJIgGAKIAEgCIAOAFQBDAYgEBLQAAAYgSASIgBABIgBABIAEAAQAwAlAAAtIgBAOIAAAAQgDAVgNAXQgJAQgOAKQAFADAJAKQAZAbAFAMQADAHAAAIQABAUgNAYQAKgYgPAgIgRAhQgKAKgOALIgGACQAHAPgEAYQgHAngiAWQhOAyhbgBQgDANgKAOQgdArgxANIgDAAQguALglgTQgBAOgEAQIgBABQgSBAhKACQghABgagMQgFAZgjAVQgVAMgUACQgUABgTgJIgHAAIgBgBQgOAQgWAHQgOAFgSAAQgPAAgRgDgAiqGnQgCBKBOAJQBTAJAbhJQgFAYgLAQIAPAFIAPAEIAAAAIAAAAQA5ACAcg0QAEgIgBgJQgCgagOgVIACAAQAaAggGAbQBOAQA3gwQAJgIAEgNQAGgTgBgQQgKgGgKgIIAUAJIAAgBIAAgBIgBgCQgCgZgQgUIAEgCQAOAQAFAVIAAACIACAOQAiAMAogEQAtgDAcgkQAQgVAFgWIgCgDIACAAQAEgSgEgSQgBgEADgDIADgBQALAWgFAWQB0AEBNhYQAQgRgFgXQgGgagWgPQgSAHABgMQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAfAGAMASIAMgIIACgCIAGgHIABgEIABAAIABAAQAegmACgvQABgQgPgLQgRgOgJgKIABAAIgBgJIgEACQgMAGgPABQBKgjgKhQQgBgMgIgKQgNgSgQgPIgMAAQgOAJgPABQALgFAJgGIgKgDQAJgDAJgBQArglgeg6QgPgfgWgJQgPgGgTAFQgLAPgLAKQACgJAFgHIAEgFIgGADQAFgHAHgEQAKgOAGgPIADgGQgphEhbASIgYAGQgCAJgFAJQgGALgJAFQAIgPAEgPQABgEAAgFIABgBQADgSgBgSQgBgLgEgIQgEgHgIgFQg3gphFAUIgHACIgHACIgtAPQAAAPgIAOQgIgEAGgLQAEgGABgGIgBAAIABgFIAAAAQABgHgCgHQgCgHgGgHQgYgIgYgCIgIgBQhDgEg7ArQgBAYgJAXQgGgEADgJQAGgPABgPIgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIAGgFQAAgOgDgNQhsgehMBPIAAAAIgFAGIgDADIgBABIACAAIAAAGIABAFIgDgBQAEALAAAOIABACQgCAFgEgDIgDgEQADgzg7gDQg2gEgmAoQgNANgKAQIABAFIgBAFIACAGQgCADgBAEQgDgDgBgEQgVgIgTgCQg5gGgoAzQgYAeADAkQAmAHgNAuIgCACQgHgFAEgNQAGgRgPgMIgKgCIABAHIgFgHQhZgIggBSQgFANgBAMQgBAcAYAXIAQANQAGAGAHADIAGAHIgHACIgOgCIgCABQgkAEgdAXQgkAdgCAtQgCAoAYATIABAAQAIALAYADIAAABIAAACIgCgCIAAgBQgSAAgMgHQg1AQgMA8IgBALIAAABIAAABIABAMQAFAdAiANQAPAFAPACIAEAAIAPgHQgGANgWAIIgDACQgPAaACAeQAAAJADAKQA7AcA/gbIAPgHQAGgKAIgHQgHAOAAAGIAAAAIgCABQgNAjAMAoQAGAVAVAHQA+AWAugcIACgIQAFgQAIgJQgEAOgBANIAAAAIgBADIABABIgBAAQgCAkAQAiQAGAMAMAGQBHAiA9gkIgRALIgIAEQAYgFASgLIAAAAIABAAQASgMAMgRIAFgIIABgDIgGABIgBgCIgBACIABgCIAAgBIAFgOQACgOgIgPQALAIABAKIAAgGIAFABIABATQAAASgIAAIAAAAIgBADgAK1BoIAAAAIAAAAg");
	this.shape_89.setTransform(237.5,61.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("ABgHPQgGgFgCgKQACgRAKgMQAhgBgHAmQgIANgJAAQgGAAgHgGgABkGrIgCABIAAABIgBAAIAAABIgEAIQACAjAXgLIADgIQAFgcgXgBIgDACgACNFqQgHgGgDgMQADgUALgPQApgBgKAuQgIAPgLAAQgIAAgIgHgACRE+IgCACIgBABIAAAAIAAABIgFAKQACAqAbgNIAFgKQAGghgcgCIgEACgADLD2QgXgJAEgmQADgdAKgIQgCgFASgEQAagHANAfQAMAfgUAcQgNANgPAAQgGAAgHgDgADMClIgFAFQgKAJgBAUQgCATANAMQARAQAVgNQACgGAGgJQAGgKgEgcQgCgTgUAAQgJAAgMAEgADJClIABAAIgBAAQAAABAAgBgAD2BTQgIgEgHgGQgHgHgFgLQgKgUAEgVQAEgUAJgGQAQgLARgDQAiABANAbIADAFQAJAYgEANQgFAOABAEQgOASgQAFQgHACgHAAQgKAAgKgEgADfAJQgLAaAPAWQAFAGAFAFQAMAKAPgBQAYgCASgQQADgfgGgRQgDgIgFgEQgQgOgVABIgDAAQgWAAgKAXgAFwgLIABAAIABABIAAAAIAAABIgCgCgAE5grIgFgDIADAAIAEADIgCAAgAlxnUIAAAJIAAAEIAAAEIAAABIAAABIAAAHg");
	this.shape_90.setTransform(193,118.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("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OAHgQAGIgVAHIgpANQgXAIgWAEIgBAAIgQACIAQgFQgfABgggEIgCAAIgCAAIgHgBIgKgCQgUgEgVgHQgcgJgSgUIgGgIIgBgBIgBgCIgCAAIgBgBIACAAIgCgDIAAABIgDAJQgDAPAQANQASAOAWAJIAGACIAVAGQASACARAFIABAAIABABIACAAIAAAAIABAAIAMABQAGABAFACQASAHASACIAEAAIABAAIADAAQAYABAYgJIAHgDQAvgVAvgPIABAAIABgCIAFgKQAJgPAPgJIABAAIADgCIABAAIANgFIAAAAIAHgCIAGgCIAAAAIABAAIABAAIAEgBIAIADIABABIABAAIAAAAIACABIAAAAIABAAIADACIAAAAIgDgBIAAAAIgCAAIgBgBIAAAAIgMgBIgBAAIgBAAQgNAAgNAHIgCABQgWALgJAYIAAABIgBADIgBABQgEARAOAKIAPAFIACABIAgAMIAEABIACABIAAABIgDgBIAAAAIgEgBIgcgJIgBAAIgagMIABAAQgMgJAGgTQglASgoAOIgYAJQgWAKgXAAQgRAAgSgGgAk5hTIABAAIgBAAgAFZhqQgXgLgJgPIABAAIBKAoIABABQgRgBgbgOgAnyh1IADAAQgWATgsgDQgNgBgNAFIgHABQArgVA1AAgAsDiKIABAJIAAAFIAAADIAAABIAAABIgBAHgAAViUIgbgEIAAAAIgDAAIgBAAIgBgBIgNgBIAGgCIAFAAIAAAAIABAAIAAAAIADAAIABAAIABAAQARACAQAGIAAABIgFgBgAgQipIAAgBQAVgZAZgVQAOgNAQgLQAogeArgZQAdgRAdgOIABgBIAlgTIAHgEIABgBIAKgFIgIAJIAAAAIgBAAIAAABIgCABQgHAFgKAFQglAPgiAVQhAAlg6AwIgzAtIgBAAIgDADIADgDgAi6jJQAMgQAOgOIgcAcIgBACIgCAAQAfgjAjggIA6g0IAAgBIABAAIABgCIABAAIAAgBIABAAIALgKIAYgWIACgCIAAAAIACgCIAAAAIADgCIABgBQADAKgBAKQAAAHACAGIACAJQAZgJAWgQQAWgQARgYIABgBIABgBIAJgOIAMgWQAIAGAEAJIAFAJIAAgBQAdgRAcgVQAYgRAdgJQAagHAYgJQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgCACgHABQhMAQg3A0QgKAJgLAAQgDgHgEgHIgFgHIgMATIAAAAIgIALIgBABIAAAAIgBABIAAABIAAAAIgBAAIAAAAIgLANIgTAUIgJAHIgBAAQgXATgaAKQgEgKgBgKIgBgOQAAgEgCgEIgCACIgBABIgBACIgBABIgCADIgeAaIgBABIgBABIAAAAIAAAAIgmAhIgGAGIAAAAIghAeQARgPASgNIAAAAIAHgFIAXgQIAUgNIAAAAIABAAIABAAIAEgCIAFAJQAEAKABALIADATQAggSAcgWIAWgTIADgCQAPgNANgOIABgBQAIgJAEgJIAAgBIAAAAIABgCQABgDADAAQAJAIAFAMIADAFIAAAAIABgBQAsgwA3ghQAagRAYgRIAHgGIABAAIAIgGIgIAIIAAAAIgIAHIgLAKQgPALgRAKQgzAbgoArIgOAQIgCACQgHgIgFgMQgCgEgEgDIgCACIAAAAIAAABIgMASQgOASgQAQIgXATIAAAAQgMAIgNAIIgoAXQgEgOgCgQQAAgHgDgGIgDgFIgBAAIAAABIgBAAQg6AkgzAxIgaAYgAGrjwIABAAQBCACA+AQIAAABQhDgFg+gOgAnrkVIAAgBQAEgDAEgBIACgBQAiABAgAIIgBAAQgmAAglgDgAFNk5QgJgCgFgFQggABgcgOIgBAAIACAAIAWAHIABAAQARAEARAAQgGgHADgMQADgOAJgMIAAgBIAAgBIAAAAQALgKAMgFQAMgGAOAAIANAAIAAAAQAPAMABAOQAAAPgNAQQgGAGgGAFQgOAKgSAAQgHAAgHgBgAFDlAQACADAFABIAGABQAwAGAPguQAHgUgSgLIgOgBIgFABIgBABQAEACACAEQgFAAgGgFIgJACQANANACASIAAABQgKAZgXAGQAUgLAKgUQgCgSgLgNQgmAPAGApIABAEIAJAAIgBAAIAAAAIgHABgAEFllIAAgCIAAgDQgGAGgJAFIAAAAIAAAAIgIAEIAAAAIAHgGIAAAAQAHgHAJgEIABgFQACgIADgGIACgEIAAAAIACgDIAAAAIACgDIACgCIADgDIABgBIAAAAIACgBIACgCIAEgDIALgFQAHgDAHgBIAAAAIACAAIABAAIACAAIACABIAGAEIABABIABABIADACIAAABIgCgBIgCAAQgEgCgEgDIgBAAIAAAAIgCAAIAAAAQgRACgLAIIgCABIAAAAIgCABIgCACQgOAMgCAWIAAAAIAAAHQAAAHAEAFQAHAJAIADQgXgFAAgVgAHxl5IABgBQA6ABA3APIAAABQg8gEg2gMgAltmQIACAAQASAEAQAIQARAIAQALIABACQgkgMgigVgAkml5QgRgFgRgHIgVgKIABAAQAgALAeAMIABABIgJgCgAFZmMIAAAAIgBAAIABgCIArADIAAABIgPAAQgOAAgOgCgAiBnnQgGgYgKgWIABAAQAHALAFAMQgDgNADgQQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQADAZAGAaIgBACIgFgJIACAIIAAABIgCACIgCgCgAIInsQAjgaAugEIABAAQgIAKgYAGQgYAFgWAKIgBAAIgDgBgABapFQgJgkAPgeIABAAQgHAhAIAiIAAACIgEABQgDAAgBgEg");
	this.shape_91.setTransform(233.2,85.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("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");
	this.shape_92.setTransform(237.2,85.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_70},{t:this.shape_69}]},29).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},3).to({state:[{t:this.shape_75},{t:this.shape_74}]},2).to({state:[{t:this.shape_77},{t:this.shape_76}]},2).to({state:[{t:this.shape_79},{t:this.shape_78}]},3).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},4).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},2).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},2).to({state:[{t:this.shape_85},{t:this.shape_84}]},2).to({state:[{t:this.shape_84},{t:this.shape_85},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},2).to({state:[{t:this.shape_84},{t:this.shape_85}]},2).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_81},{t:this.shape_80}]},2).to({state:[{t:this.shape_90},{t:this.shape_76},{t:this.shape_89},{t:this.shape_88}]},2).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_81},{t:this.shape_80}]},2).to({state:[]},233).wait(8));

	// Layer 5
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgXAMQgDgLABgGIARgPIABgCQAHgCAKAAQANAMADAQQgDAKgIAFQgJAGgHAAQgNAAgJgNgAgSAKIAGAIQAdALACgiIgFgIIAAgBIAAAAIgBgBIgCgBIgFgCQgeABAGAbg");
	this.shape_93.setTransform(155.9,154.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgMARIgFgIQgGgaAegCIAEACIACABIABABIABAAIgBABIAFAIQgBAagSAAQgFAAgHgDg");
	this.shape_94.setTransform(155.9,154.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAKBDQgKgmAtABQAMAMAEARQgEAKgHAFQgKAGgIAAQgMAAgKgNgAAQBBIAFAIQAeALACgjIgFgIIAAgBIAAAAIgBgBIgCgBIgFgCQgfACAHAbgAg5giQgNguA2ABQAQAPADAUQgDAMgKAGQgLAHgKAAQgPAAgLgPgAgzglIAHAKQAkANADgqIgGgKIAAgBIgBAAIgBgBIgCgCIgGgCQglACAHAhg");
	this.shape_95.setTransform(152.5,149.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAVBIIgGgIQgGgcAfgBIAFABIACACIABABIAAAAIAAAAIAFAJQgCAagRAAQgGAAgHgCgAgsgdIgHgJQgHgiAlgBIAGACIACACIABABIABAAIgBAAIAHAKQgCAhgWAAQgGAAgJgEg");
	this.shape_96.setTransform(152.5,149.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AA/CSQgLgmAtABQANAMADARQgDAKgIAFQgJAGgIAAQgNAAgJgNgABECQIAGAIQAeALACgjIgFgJIAAAAIAAAAIgBgBIgCgBIgFgCQgfABAGAcgAgEAsQgNguA1ACQAQAOAEAUQgEAMgKAGQgLAHgKAAQgPAAgKgPgAABApIAHAKQAkANADgqIgHgLIABAAIgBAAIgBgBIgCgCIgGgCQgkACAGAhgAhfhJQgcgdARgeQAQgfAjAGQAZAFgDAFQAOAIAEAdQAFAmgeAJQgJACgJAAQgUAAgRgMgAhliBQgFAcAJAKQAIAJACAGQAdANAXgQQASgMgDgTQgCgUgNgJIgHgFQgRgEgMAAQgaAAgEATgAgmiQQAAAAAAAAIgCAAIABAAIABAAg");
	this.shape_97.setTransform(147.2,141.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("ABJCVIgGgIQgGgbAfgCIAFACIACACIABAAIAAABIAAAAIAFAIQgCAbgSAAQgFAAgHgDgAAHAwIgHgJQgGgiAkgBIAGACIACABIABABIABABIgBAAIAHAKQgCAggWAAQgHAAgIgDgAhYhOQgCgGgIgKQgJgJAFgdQAFgcA2ANIAHAGQANAJACATQADAUgSAMQgNAIgOAAQgMAAgNgFg");
	this.shape_98.setTransform(147.3,141.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("ABoD1QgLgmAtABQANAMADARQgDAKgIAFQgJAGgIAAQgNAAgJgNgABtDzIAGAIQAeALACgjIgFgJIAAAAIAAAAIgBgBIgDgBIgEgCQgfABAGAcgAAjCPQgNgvA3ACQAPAPAFAUQgFAMgJAGQgLAHgKAAQgPAAgMgPgAAqCMIAGAKQAlANADgqIgHgLIAAAAIAAAAIgBgBIgCgCIgGgCQglACAHAhgAg2AZQgcgbARgfQAQgfAjAGQAYAFgDAFQAOAIAEAdQAFAlgeAJQgJACgIAAQgUAAgRgMgAg8geQgFAcAJAJQAIAJACAGQAcANAXgQQARgMgCgSQgCgUgNgJIgGgFQgRgEgMAAQgbAAgDATgAABgtQABAAAAAAIgCAAIABAAIAAAAgAhoh+IgKgDQgQgGgOgNQABgEgHgPQgDgHADgLQADgKAIgOQAJgNAPgHQAQgHAYgBQAXADAVALQANAGAFAVQACAIgBAIQgBAMgIANQgNAVgYAGQgOAEgNAAQgJAAgKgCgAh8jUIgCACQgEADgDAFQgLARAGAiQARALAVAFIARACQAdACAVgWQALgLABgMQACgMgIgNQgPgaggACIgGAAQgZAAgTANgAiZj+IACgDIAKAAIgHADIgFAAg");
	this.shape_99.setTransform(143.2,131.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("ABwDtIgGgIQgGgcAfgBIAFACIACABIABABIAAAAIAAABIAFAIQgCAbgRAAQgGAAgHgDgAAuCIIgHgKQgHghAlgCIAGACIACACIABABIABAAIgBABIAHAKQgCAggWAAQgGAAgJgDgAgxAIQgCgGgIgIQgJgKAFgcQAFgcA2ANIAGAFQANAJACAUQADATgSALQgMAJgOAAQgMAAgNgGgAhWiTIgRgCQgVgEgRgMQgFgiAKgRQADgFAEgDIACgCQAWgOAcABQAggCAPAaQAIAOgCAMQgBALgKALQgUAUgbAAIgEAAg");
	this.shape_100.setTransform(143.4,132.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("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");
	this.shape_101.setTransform(88.4,80.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AKVL1IgFgIQgHgcAfgBIAFABIACACIABABIAAAAIAAAAIAFAJQgCAagRAAQgGAAgHgCgAJTKPIgHgJQgHghAlgCIAGACIACACIABABIABAAIAAAAIAGAKQgCAhgWAAQgGAAgJgEgAHzIQQgCgGgIgKQgJgJAFgdQAFgbA2AMIAHAGQANAJACATQADAUgSAMQgNAJgOAAQgMAAgNgGgAjJFtIgLgaQAKgMAIgQIgCgHIgBAAIgCAAIABABQgFANgHAKQgDAJgGACIAAAAQgUAYhAAPIgTgHQgugSgLgnQALgHAMgJIgBgDIgBgDIgBABQgHAJgLAFQhqA1g9heIABgBIAAAAQACgPgCgOQASgFARgNIAJgIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgPAMgUAFQhWAWgqhIQgJgQADgSQALg5AigrQANgDAPgLIgBgCQgMAJgMADIABgBIgBABQgWAEgYgSQgIgGgDgJQgihaBHhKIACAAIADAAIAAABIABgBIABAAIAAABIABABIAEAEIAAgBQASANAXgQQgGgDgGAHIgQAAQgIgDgGgGIgBgCIgCgCIgBAAIgCgCQgGgHgCgKQgQhPA7g+QAcgeAmAJIACABIAJgHIgBgBIgFACIgBABQgOgNABgTQAFhVBZgBIAFAAQAEAIAHAGIgEgLIAEADQAPARAGARIABgCQgCgjgbgJQgVhJBOgmQAlgSAcAOIAAABQABAGAFgBIACgCQAIAGAHAJIAGgBIACgBIgBgCQgKgPgOgHIgEgLIgBgGQAnhIBXAIQAQACAOAFQAQADALAKQAGAFACAFIAaATIAAgCQgRgYgXgOQAKgRAQgNQB2hbCRAlIACABQAQAFAHAOIAAACQAKAYAMASIgCABQgJACgIAEQgJAFgHAGQAEAEAGgDIASgHQAKgHAGAAIAFAAQBHgQA8AzQAZAWAFAgIAFAhIgMAAQgRAGgMAPQgEAEgDAFIAAABIABAAIAFgFIAFAAQAFgGAIgFQALgHANgCIAAAAQACgCAEAAIABAAQALgBALABQBMAKASBEIAGAPIgLABIgDABIACAJIAPgFIAAABIAJgBIAAgBQASgBATAGQANAEANAIIAJAFQAOAKAIANQALARABAVQACASAHALQgLgDgMgBIgDABIgFABIgEACIgBACQATACAXADIADADIAAgCQAGACAEADIABAAIAAAAIAAAAQAEAEADAFQAxBgg5BYQgKgFgMgDIgIgCIgCABIAKADQAHADAFAEQAKAEABAHQATAZABAdQAAAKgBALQgDAUgHAQQgOAegdAPIgCgDIgEACIgCABIABADIAAAAIAAAEIAAACIACgBQAKAYgCAbQgBANgHALIgKAOQgoA2hJACQAGgWgJgdQgHABAEAKQAKAcgSAVQgwA4hGgIIAAAAQADgPgHgUIgCgBIgBALIAAACIAEAHQgBAIgDAGQgPAcgbASQhAAnhEgKIAAAAQgJAAgBgGIgCADIADgOQAEgigagfQAMAYABAmQACAyg0ATQgeAKgdgIQgagGgNgWQAGgagNghIgFgEQAJAbgBAbIgBAGIgCARIgVAUQgnAggyAIIgEAAQhMgVgLgZgAD8CAIAEgBIgBgBIgDACgAl5BqIAAABIADgBIACgBgAEjBjIADACIAAgBIgBgBgAIYjcIABAEIgBgEgAIBm5IACACIAAgBIgCgBIAAAAgADNqaIACADIgBgDIgBAAgAHOF0QgfgCgYgRQgHgtAVgPQAWgPAcACQAggCAPAaQAPAagUAVQgUAVgbAAIgEAAg");
	this.shape_102.setTransform(88.5,80.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#013A7E").s().p("ADpA6IgCgBIgBAAIgDAAIgBAAIAAAAIgGgBIABgFIABAAIgBgMQAAgNgEgMIAHgCIAOgGIAEgCIASgHIACgBIABgBIABABIAAAAIAAABIgBAAIgBABIgKAFIAKgDQgDAHACAJQACAIADAFIACACQgSAMgQAOIgBABgAmLAkIAAgBQgCgJABgKIAAgBIAAgBIACABIACgBIAAAAIADABIAAABIAAgBIAjADIAAAAIAAAHQgVAFgUAIIAAgCgAFvgRQAAgPgIgOIAAgBIgBABIAAgCIAAgBIABAAIADgBIABAAQANgEAOgDIAAABIABAAIADABIABAAIAAABIAAAAIAAAAIgBAFQgCANAFAGIgNAOIgRAAIAAgBg");
	this.shape_103.setTransform(90.7,87.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFF00").s().p("AggC4IgYgBIgHAAIgDAAIgTAAIgxgCIgDAAIgHAAIg0gEIgEAAIgFAAIgCAAIgeACQglACglgCIgIgBIgegDIAAAAIAAgBIgCgHIgBgIIgBgFIgBgEIgBgJIgBgBIAAgBIAAAAIAAgEIAAgEQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABAAIALACIABAAIAVgBIABgBIABAAIACAAQAkgGAlAAIAAAAIAjAAIAlgCIAIAAIAAABQhMAECLgEQC1gFAPABIAAADQgBABAAABQAAAAAAAAQAAABABAAQAAAAABAAIAAAAIABgBIABgCIABgDIABAAIAXABIABAAIAGABIABAAIABAAIABAAIAHAAIABAAIAdACIAbADIAnAFIAHAAIAAABIABADIAAABIAAAHIgBACIAAABIAAADIAAACIgBADIgEAKIgoAGIgGABIgZADIgeADIgBAAIgBAAIgKAAIgZACIgBAAIgDAAIAAAAQg1ACg0AAIgbAAgAk8BwIgBAAIgIgBIAAgEIABAAIAHAAIgCgBIgGgCIgBgBIAAgCIgBAAIgBgHIAAAAIAAgCIAAgCIAAgEQAAgJADgJQAPADARgDQAZgFAZgCQAigDAjACIAEAAIABABIABABIACAAIgCAXIAAAIIAAAAIAAABIAAACIAAABIgFAAQgiAIgiAEQgbADgcAAIgUAAgAhhBoQgDgCgEABQgFgEgDgFIAAgBIABgIQABgLAHgKQATADAVgBIAMAAIAggCIACAAIBXgEIAAABIADAVIABATQgQgDgTACIgbACIgdACIgBAAIghABIgwABIACgCgAD/BqIgGgBIAAAAIAAAAIgBAAIgBAAIgCgBIgCAAIgFgBIgBAAIgBAAIgUgBQgVgBgUABIgHAAIgVACIgCAAIgFABIgEAAIAAgBIADgBIACgBIgCgBIAAAAIgEAAIgBAAIAAAAIAAAAIgBgBQgDgFgCgEIgBgEIAAgEIAAgDIACgFIACgDIABABIADABIABAAIAMAAIAAAAIASgBIAIAAIABAAIApgCIAUAAIAJgBIADAAIABAAIAAAAIABAAIABAAIABAAIgCAMQABALAEAGIABAAIgBAHgAEyBGIAAgBIgBgBIAAgBIAAgBQgCgLABgLQACgdASgZIARABIAMgEIAAABIABABQAFAWgHAZQgHAYgSAIQgIADgLAAgAnDApIAAgBQgIgoAXgfIACgDQAEgBACADIAAABQAJANAKAJIADACIAAAAIgDgEIgLgSIAKAHQAKAIAGAMQAMAYgUAUQgGAHgGADQgHAEgGAAQgNAAgLgPgAkWAiIANgHIACgBIAGgEIACgBQANABAPAAIALgBIAAAAIABAAIAUgDQAggGAcgCIADADQgHAGgGAIQgFAHgBAFIg/ADIAAAAIgMABIgBAAIgdABIgGABIgiACIgFAAIAXgNgADYAmQgbgBgbACIABAAQARgGAJgGIAAgDIAAAAIAbACIAmABIABAAIgBACQgDAGABAEIgCABIgigCgAhNAkIAIgDIAEgCIANgGIADgCIAEgCIAAAAIAFgDIABgBIAFAAIACAAIABAAIANgBIBbgBIADAAIAJAAIABAAIARAAIAAAFQgLAGgHAKIgBABIgCAAIgIAAIgBAAQgzgEg1ADIgBAAIgCAAIgFAAIgFABIghADgAlVAWIAAgBIAAAAQABgMgDgJQgHgagbgPIgBAAIgCgFIAagLIACgCQAVgJAPgKIABABQAXAXAHAeIABAEIgCABIgNAPQgRAQgUANIgBABIgBAAgAEVgNQgfABgfgDIgVgLQADgbAHgZQAMgsAcglIAAAAQALgMAPgDQAUgDAUgBQAkgDAlAFQAYADAYAHQAKADAGAFQAJAJgCAPQgDAVACASIAAAFIgmAGQhBAIg0AnQgHAFgCAHIgFAOQgBgDgGABgAhjgTIAAAAQgMgEgNAAQgygCgxAGIgCgWQAAgRgIgKQgFgHgIgEQgGgDgHgCQAGgZARgUQATgYAVgRQAGABAGgCQBOgWBMAVIACAAIABAAIADADIgCABQgfAegQAlQgLAYgFAbQgCAMAFAFQACADAEACIgKANIgJgEgAB+gWIgBAAIhvgJIgYACIgSADIgEAAIAAAAIAAAAQgJgfAJggQADgLAGgLQAQghAZgXQAIAAAJgDQBNgWBNAQIgUAkIgWArIgJAUQgNAcADAbg");
	this.shape_104.setTransform(83.3,67.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0066FF").s().p("ADlDxIgHgBIAAgBIgCgSIgBgBIgCgJIAAAAIAAgBQgBgFgDgFIAagCIANgBIAPgBIAAAAIACAAIAIAAIAAgBIgIAAIAAAAIgCAAIgBAAIgLAAIgNAAIgHAAIgCgBIgDAAIgBAAIgBAAIgGAAIgBAAIgDABIgKABIgYACIgzADIgHAAIgDAAIgCAAIgLAAIgBAAIgMAAIgEAAIgJAAIgEAAIAAAAQhDAAhBABIgaABIhMACIhAAAIgEAAQg4AAg4gCIgDgBIgBAAIgBAAIgBAAIgDAAIAAAAQgUADgTACIgBAAQgaACgZAAIAAgBIgBAAIgBgEIAAgCIgBAAIAAAAIAAABIAAgBIAIgcIAEgWIACgQIAAgCQAAgRgCgRIgDgOIAAgBIAAAAIAAgCIgBAAIgBgFIgBABIAAAFIgIACQgbAGgagOIAAgBQgJgSgFgUIgBgBIgBgFIgBgFIgBAAQgCgWADgUIAAAAIABgEQAFgTAOgRIABgCIAGgGIAEgDQAHgGAHgDIADgBIADgBQARgFAUAJIAGgFIABgBQANgKAOgHQASgKAVgGIAFgBIAJgDIAAAAIADgBIAAgBIAAAAIABgDIgBAAQAGgeAYgXIAGgGQAVgUAbgOQANgHANgFQBPghBUAVQAQADALAMIAFAGIACACIACACIAEADIAAABIAFAEIgCABQABABAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAEADIgDgEIAEgEIAAAAIADgBIABgBQBCgjBOAFQAYACAQAMQAHAGAGAIIAAAAIACADIACACIABADIABAAIAAABIAAABQAUAEATgHIABAAQAEgCADgEIAAAAIABgCQAbgPAggJQAngLAlABQAPABAQADQAYAFAYAKIAFADIAAAAIAFACIAEACQAIAFAGAGIAIAJIABABIACAFIABABIAEALIABADQAFAUgBASIgBAKIgBACIgBAIIACgCQgHAVgEAWIgCALIgBAKIgDAaQgDAYgBAYQgBAZABAZIAAACQgCAYACAYQgTAIgPAKIgEADIAAAAIABAAQAVgJAQgKIADATIABAHQgCAFACADIgCABIgjASIAAAAIgDgGIAAgBIAAgDIgCgXIAAgBIAAgCIABAAIAAAAIABgBIgCAAIAAgCIgFAAIAAAAIgBABIgIAAQgHAAgIADIAAAAIgEABIgHADIAAAAIgDABIgTAKIgpAVIAAAAIgEACIgCABIgCACIgHABIgGACIgKAFIgBAAIAAAAIgBAAIgDACIgBAAIgDACIgCABIgBAAIgMAGIgXAIIgCgFIgBAAIABAFIgHACQADACAEAAIAEAZIADAMIgBAFIgugHgAlUDEIAAAAIAAAAIAAAAgAmhg2IAEAJIAAAAIABAEIAAAAIAEAJIAHAUIAAAAIAAABIAFAQIACAMIAAAAIABADIADAOIAAACIAAABIABACIAAABIAAAEIAAAAIABAGIABAIIAAADIAAAAIABAIIAAAAIAAAFIABACIAAACIAAABIAAAIIABAMIAAAWIAAAMIAAAGIAAABIgCASIgBALQgCALAFAGIABgPIABgIIAAAAIAAgEIAAgBIAAgSIAAAAIABgTIAAgHIAAAGIABABIAAAFIABACIAAAFIACAGIAAABIABADIABAFIAEAMIAAAAIABABIgGgBIAHADIAAABIAAAAIAAAAQAOAFAQABIAGAAIACAAIA4gBIA3AAIADAAIA8ABIADABIAbABIARABIAbAAIAHAAIAYAAICEgBIAAAAIAEAAIAJAAIAPgBIABAAIAKAAIACAAIABAAIAbgDIAagEIAHgBIAJgCQAQgDAQABIAFAAIABgBIABAAIADgBIACgCIAAgBIAAgCIAAAAIgCAAIgDAAIgBAAIgDABIAAgBIADgIIABACIAAgFIABgEIAAgDIAAgIIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIgBgBIACgDIAAAAIAAAAIgBgBIgBgBIgBAAIgBgCIAAgBIgCgDIgBgBIgDgFIgCgDIAAAAIgCgBIAAgBIgCgBIAAAAIADADIAEAHIADAHIhkgFIgCAAIAAAAIgHAAIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBAAIgYgBIAAAAIAAgBIgBgDIAAgIIgBgCIAAgCIAAAAIAAgFIAAgFIABgCIABgMIADgLIAEgLIAAAAIAAAAIAAgBIABgCIACgEIAAgBIABAAIAAgBIAAAAIADgFIABgCIACgDIABgCIACgBIAAgBIAEgEIABgBIAAgBIABgBIABAAIAAgBIABAAIAAAAIAEgDIADgBIAEgCIABAAIABAAIAAAAIAEgDIABAAIABAAIABAAIAFgDIAAAAIAFAAIAAAAIABAAIAGAAIABAAIABAAIAQAAIABAAIABAAIABAAIAaAAIAmAAIAFAAIAAAAIAPABIACAAIAAAAIgBgBIgNgCQgggFgiAEIgcABIAAAAIgCAAIgIABIADgBIgGAAQgGAAgFACIgBABIAAAAIgBAAIgBABIgBAAIgEAEIgBABIAAAAIgBAAIgCACIAAABIgBAAIgBABIAAABIgBAAIAAAAIAAAAIgBABIgCACIgDAEIAAAAIgBABIgBABIAAABIAAAAIgCADIgFAHIgBAAIAAAAIgCAEIAAABIgCADIgBABIAAACIgCAEIgCAGIgEAMIgBAQIAAAIIAAAEIABAJIAAAAIAAABIAAABIAAABIgBAAIgSgBIgFAAIgBAAIgBAAIhbgBIhDAEIgyACIgBAAIgQABIgBAAIAAgBQhFABgTAAIAAAAIgYAAIgYADIgZADIgCAAIAAAAIgCAAIgIAAIgBAAIgPgBIgMgCIgCAAIgCABIAAgEIgBgOIAAgJIABgLIAAgBIAAgDIAAAAIAAgCIABgCIAAAAIAAgBIABgDIAAgBIAAgCIABgBIAAgBIAAAAIADgFIACgDIAAAAIADgEIABgBIABgCIAEgEIAAgBIABAAIAAAAIADgDIABgBIADgDIABgBIADgDIAAAAIAFgEIACgCIAAAAIAHgFIACgBIABgBIAIgFQANgHAPgEIANgEIAFAAQANABAQgDIAAAAIALgCIAAAAIACAAQAggGAggBIABAAIABAAIAEAAIAOAAIAAAAIADAAIAKAAIAAAAIARABIAAAAIACABIABAAIAIABIABgBIgJgCIAAAAIgRgDIAAAAIgQgBIgSAAIgBAAQghACghAFIgBAAIgBAAIgFABIgEABQgRACgNABIACgBIAAAAIABgBIgQADIgIACIgbAKIgBAAIgIAEIgIAGIgEADIgBAAIgDACIgEAEIgBABIgBAAIAAABIgBAAIAAABIgCABIgHAIIgDAFIAAABIgBAAIAAABIAAAAIgBACIgBAAIAAACIgBAAIAAACIgCAFIgBABIgCAFIAAACIgBADIAAABIgCAGIAAACIAAgCIAAgCIAAgEIAAgBIAAgBIAAAAIgBgJIAAgCIAAgEIgBgHIAAAAIAAgBIAAgCIAAAAIAAgBIgBgCIAAgBIAAgEIAAAAIgCgMIgBgCIAAAAQgHgggOgfIgBAAIgBgEIgBgBIAAAAIgDgFIAAgBIgIgNIAAAAIAFAOgAEHgVIgFAWIAAAAIAAACIAAABIAAABIAAABIAAAAIgBACIAAAEIAAACIAAABIAAAAIAAABIgBAKIAAACIAAABIAAABIAAAMIAAAAIAAABIAAAAIAAACIAAABIAAAIIAAABIACAOIAAADIABACIAAAAIABAIIAAAAIAAAGIABACIAAAAIAAADIAAACIAAACIAAABIABAGIAAACIAAABIAAAEIAAABIAAAGIAAACIAAAAIAAADIAAABIAAABIAAACIAAAIIAAACIAAAGIABAGIAAABIAAAEIAAAAIAAAEIABABIABAHIABACIAAgCIAAgBIAAgDIABgDIAAgBIAAgBIAAgCIAAAAIAAgGIAAAAIAAgDIAAgLIAAgFIAAAAIAAgBIAAgCIAAgBIgBgPIAAAAIgBgFIAAgBIAAgHIAAAAIAAgBIgBgCIAAgCIAAgCIAAgCIAAgBIgBgBIgBgIIAAAAIAAgEIgBgDIAAAAIgBgOIAAgEIAAAAIAAgFIAAgBIAAgBIAAgCIAAgMIAAgBIAAgCIAAAAIAAgPIAAgEIAAgBIABgBIAAgBIAAgBIABgHIADgWIAAgDIAAAAQADgLAJgHQATgQAVgLIABgBIAAAAIAQgHQAlgQAqgCQATgBANgHIACgBIADgCIgJABIgIACIABgEQABgLAEgMQAHgagSgPIgIgFQgMgGgMgEQgygQg2AHQgLgBgKABIgOADIgDABIgGACQgKAEgIAGQgFADgCAEIAAAAIgMAPQgLAOgIAPQgIAPgFARIgBABQgJAfACAeIABAGQAAAAABABQAAAAABAAQABAAAAAAQABgBAAAAIAAgBQADACAJACQAmAJAlgGgAEqCkIAAAAIgBABIABgBIAAAAIAAAAIACgBIAAAAIAGgCIAAAAIABAAIALgGIACgBIAIgEIABgBIACgBIAGgDQAYgOAZgLIAOgFIALgEIADgBIACgBIAXgGIABgBIgMgDIgIAEIgiAOIghAQIAAAAIgCABIgVAMIgCABIgCAAIgHAFIgOAHIAAABIgFADIgBABIgBAAgAEqBNIgCAHIgCAJIAAABIgBABIAAAAIAAABIAAABIgBAGIgBABIAAADIgBAFIgBAQIAAABIAAAGIABAMIAAAHQABABAAABQAAAAABABQAAAAABAAQABAAAAAAIABgBIgCgUQgBgNACgNIAAgEIABgMIABgBIAAAAIACAAQAHgOAKgNIABgCIACgCIABgCIAOgOIACgDQAWgUAGgdQAJgpgigXQgKAAgJADQAHADALgCQAjAZgOApQgKAcgUAUIgEAEIgBABIgEADIgBABIgBACIgBAAIgCABIAAABIgBAAQgGAFgDAFIgEAFIAAABIgBAAgAhqAAIgCAAIAAAAIgBAAIgEACIgEACIgCABIgBAAIgKAGIgEAEIgBAAIgEAEQgHAHgFAHIgBABIgDAFIAAAAQgFAKgCAKIAAABIAAACIgBADIAAAEIAAACIAAAKIABABIAAAAIAAABIAAACIABAJIABABIACAGQABADADAAIgDgLIgCgGIAAgCIAAgBIAAgCIAAAAIgBgLIAAgEIABgHIABgDQACgKAGgJIABgBIABgCQAFgHAIgGIAEgEIABAAIADgCIAHgFIABAAIADgCIABAAIAGgEIABAAIAAAAIAEgCIAAAAIAAAAIAGgDIAAAAIABAAIAAAAIACgBIAFgEIgBAAIgFACIgCAAIAAAAIgBAAIAAABIgDAAIgDACIgBAAgAHQhYQAGACABAFQAGAfgYAZIgGAgIgDAZIgCASIgCAaQgBAPAGAJIACADIAAgBIAAgFQAAgDgCgBIgCgVQABgVACgVQADgcAIgbQAOgQAFgVQAHgdghgJQAAAGAOAGgAkcBkIAXgBIAmgEQAKgCAIgDQAHgCAFgFIAFAAIABAFIAAADQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIABAAIABAAIAAgBIAAgEIgBgEIAAgCIAAAAIAAgDIAAgCIAAAAIgBgGIAAgGIAAgRIABAAIABAAIAAgBIgCgBIAAAAIgBAAIgEgBIgFgBQgSgFgUADIgeADIgdADIgWADIgBAAIgdADIAAgBIgBABIgBAAIABAAQgEAFgCAEIAAABIAAAAIgBAFIgBADIAAAFQAAAIACAEQACADADABIABAAIAAAAIAAAAIAAAFIAIAAIABAAIABABIACAAQAYACAZgBgAhpBgQALABALAAIAMgBIAhgDIABAAQAtgCAugBIAAAGIABgBIABgFIAFAAIAAAAIgFgCQABgKgBgKQgBgLgEgKIALgBIABAAIAAAAIAOgBIgCgCIgHABIAAAAIgBABIgEABIAAAAIgBgBIgDAAIgGgBQgsACguABIgCAAIgMAAIgBAAIgTAAIgZABIgJABIgBAAIgEAAIgMABIABgCIgCABIgBABIgBAAIgBAAIABAAIAAAAQgJAKgBALIAAAKQAEAJAIADIgCAAQAKADAKAAgADqBdIAAAAIABgBIABgGIAAgBIgBgMIgBgRIAEAAIAAAAIgEAAIAAgFIgCAFIgBAAIgBAAIgBAAIAAAAIgBAAIgDAAIgJgBIgUAAIgpgBIgBAAIgJAAIgOgBIgCAAIgBAAIgCABIgDAAIgJABIgBAAIAAAAIgBAAIACgCIABgBIgBAAIgCABIAAAAIgDADIgBABIgDAHIgBACIAAABIgBABIAAAGQABAJALAHIAAAAIABAAIAAABIAAABIABAAIAIAAIACAAIBZABIAAAAIABAAIABAAIAGAAIADAAIABAAIABAAIAAAAIADAAIACAAgAEtgaQgNAUgFAUIAAABIgBADIgBAKIAAAEIAAAAIAAABIAAAMIAAABIAAABIAAAFIAAABIABADIAHAGIABAAIADAAIADgBQAHAAAHgEIAAAAQAGgDAEgFQAFgEADgHQARgggKgfIgBgDIAAAAIgEgJIgBAAIAEAJIAAABIAAAAIgMAEQgIgFgLAAIgBACgAnNgtQgDADgDAFQgFAMgCANQgEAUAEAVQARAWAWgIQAHgDAIgHQAJgIACgMQABgMgCgKQgDgMgIgKIAAgBIgCgBIgHgGQgFgEgHgDIgLgFQgFACgDAEgAkVAGIgHABIAHAAIgHADIgCABQgPAGgNAIIgIAGIgDADIgCACIADgBIAIAAIAAAAIAigBIASgBIARgBIABAAIAMgBIAAAAIAngCIAEAAIAUgBIAAADIABAAIACgDQADAAABgEIgBAAIAJgPIACgEIADgFIgBAAIgDgDIgBAAIgOgCQggAFghACIgBABIAAAAIgLABIgBAAIgdACgAhwAdIAFAAIAAAAIABAAIAJAAIAagBIATAAIABAAIALgBIACAAIBbgDIAKABIAAABIABgBIAGgEIABgBIAEgEIAIgJIAAgBIAAgFIABAAIACAAIABAAIAEAAIABAAIADAAIABAAIAAAAIgEgBIAAAAIgEAAIgBAAIgDAAIgSgBIAAAAIgKAAIgDAAIgMgBQglgBglABIgDAAIgEABIAAAAIgCAAIgEABIgDAAIgBAAIgBAAIgBAAIgCABIgFABIgBABIABAAIgBABIgFACIgFACIgEABIgEACIgBAAIgIADIgDACIgBAAIAAAAIgGADIgBAAIgBABIgBAAIgHADIAAAAIgBAAIgGADIgFACIgBAAIAAAAIgCABIABAAIABAAIAAAAIABAAIABAAIAEAAIABAAIABAAgACnAOIgGABIgHACQgLAEgKAFIgDACIAAAAQAHABAGAAIAKgBIACAAIApgBIAUAAIAMABQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIACgBIAAAAIABgBIABgBQADgFABgGIADAAIAAgBIgCAAIAAgCIAAgCIgCABIgBADIgCgBQgTgCgTAAIgbAAIgBAAIgBAAIgIAAIAIABIABAAIABAAIAAADIgBAAIgBABgAlmAMIAAABIgBAAIgBABIAAAAIgDACIgDACIAAAAIADgCIADgBIAAAAIAAAAIABAAIABgBIABAAIACgBIAAAAIAAAAIADgCQALgFAJgHIAHgGQAKgJAIgMIAAABIABgDIAAAAIACgDIAAABIABgBIABgCIgBgFQgEgRgJgQQgIgMgLgLQgBAAgBABQAAAAAAABQAAAAAAABQAAAAABABQgVAHgUAJIgUALIgEAAIgDABIAAAAIgBABIAAAAQgFADgCAFIAKgEIAEAEQAhAVAAAiIAAAFIABACQAAAAAAABQAAAAABAAQAAABABAAQAAgBABAAgAA4gFIAAAAIAKABIATACIAAAAIADABIACAAIADAAIABAAIABABIABAAIABAAIACAAIABAAIAHABIAAAAIgEgBIgCAAIgBAAIgDgBIAAAAIgDgBIAAAAIgDgBIgCAAIghgGIgDAAQgqgGgrAEIgEAAIgBAAIgDAAIgBAAIgBAAIgBABIAAAAIgBAAIgBAAIAAAAIgBAAIgDAAIgBAAIgBAAIgBAAIgDAAIAAAAIgaABIgCAAIgEAAIAAAAIgCAAIgBAAIADAAIAAAAIAEABIADAAIAUABIAFAAIABAAIAAAAIACAAIABAAIAHAAIAAAAIABAAIAAAAIACAAIAAAAIABAAIAAAAIADAAIABAAIADAAIBKACIAMAAIACAAIABAAgABsgjIAAADIAAADIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIAAgBIAAgBIAAAAIAAgBIAAgCIAAgBIAAgEQACgoAUgkIAGgKQAJgPAHgPQAKgTAGgTIAAgBIABABIgBgBIAAAAIAAAAQgjgQgrAGIgpAFQgYAEgXAFIADgCIgCABIgEACIgCABIAAAAIgJADIAGAAQgHAGgHAHIgBABQgaAegJAhQgHAeAGAhIAAACIgEABIAAAAIgBAAIgBABIABAAIAAAAIAAAAIAFACIAEAAIABAAIAAAAIAEAAIABAAIADgBIACAAIABAAIAEAAQAsgEAtACIAFAAIAsADIAAABIAAABIACAAIACAAIAAgBIAAgBgAiWggIAcACIAFAAIAHABIAKgNQgJgSAHgXQAGgQAHgPIAFgIQASgiAYgcIABgCIACgCIgEAEIgBABIgDgDIAAgBIAAgBIgBAAQglgNgpADIgdABQgaACgYAHIgKAEIAEgDIgEABQgbARgQAYQgRAXgHAcQAIAAAHADQAHADAFAHIABADQAFAIAAAKQAAAQgDAPIADAAIAGgBIAEAAIACAAQAhgDAhABIABAAIACAAIARAAIABAAIAAAAgACri8IABACIABACIADABIABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgCIABABgAmxDpIAAgBIgBgJIgBgLQAuAAAtgGIgCAMQAAAHABAEQgqAFgrACIgCAAgAHACIIABgCIAAACg");
	this.shape_105.setTransform(85.3,68.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("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CIgBAAIgEADIAEAFIgFgDQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAIABgCIgEgEIgBAAIgEgEIgBgCIgCgBIgGgGQgKgMgQgEQhVgUhOAgQgOAGgNAHQgaAOgWAUIgDADIgDADQgXAXgGAdIAAAAIAAADIgBAAIAAACIgDABIAAgBIgJADIgFACQgUAFgTAKQgOAHgMAKIgBABIgBABIgGAEQgTgIgRAFIgEABIgCABQgIADgGAFIgEAEIgGAGIgBABQgOARgGATIgBAEIAAAAQgDAWADAVQABANADANIAAAAIABABIgFgbIABAGIACAFIAAABQAGAUAJASIAAAAQAZAPAbgGIAIgDIAAgFIABAAIACAFIAAgBIABACIgBAAIAAABIADAPQADARgBAQIAAACIgBAPIgFAXIgIAcIAAABIABAAIAAgBIAAgBIAAAAIAAACIAAABIgBACIACACIABgBIAAAAIAAABQAaABAZgCIACgBQATgBATgDIAAAAIADAAIABAAIACgBIAAAAIACABIACAAQA3ACA4AAIAFAAIA/AAIBNgBIAagBQBCgCBBABIABAAIADAAIAKAAIAEAAIALAAIABAAIALAAIACAAIADAAIAHgBIA0gCIAXgDIALgBIADAAIABAAIAFAAIACAAIABAAIADAAIACAAIAHAAIANAAIAKABIABAAIACAAIAAAAIAIAAIABAAIgJABIgBAAIgBAAIgOABIgNABIgaABQACAFABAFIAAABIABABIACAJIAAAAIADATIAAABIAHABIAuAGIAFABIAAAAIABAAIAEABIAAAAIACAAIAAAAIABgBQAQgOATgLIgDgDQgDgEgCgIQgCgKADgIIgKAFIALgHIAAAAIABgBIAAAAIAAgBIAAABIABAAIAVgNIACgBIADgCIADgBIABgBIAogVIAUgJIACgBIABAAIAGgDIAEgCIABAAQAHgCAIgBIAHABIABgBIAAAAIAFgBIAAACIACABIAAAAIAAABIgCAAIAAABIAAABIACAXIgCACQgFgGACgNIABgEIABgBIgBAAIAAAAIAAgBIAAgBIgBABIgDgBIgBAAIAAAAQgOACgNAEIAAAAIgEACIAAAAIgBAAIAAAAIgBAAIgBABIgVAIIgPAJIgBAAIgDACIgFADIgXANIgWAKIgBABIAAAAIgBA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AIACgEIAAAAIAAgBIAFgHIACgDIAAAAIABAAIAAgBIABgCIABAAIADgEIACgCIAAAAIABAAIAAAAIAAgBIABAAIAAgBIABgBIAAAAIADgCIAAgBIAAAAIACgBIAEgDIAAgBIACAAIAAgBIAAAAIACAAQAFgCAFgBIAHAAIgDACIAIgBIABAAIABAAIAbgCQAigFAhAGIANADIABAAIgBAAIgBAAIgPAAIgBAAIgFAAIglgBIgbAAIgBAAIAAAAIgCAAIgQABIAAAAIgCAAIgFAAIgBAAIgBAAIgFAAIAAgBIgFADIAAAAIgCABIAAAAIgFACIAAAAIgBAAIgBABIgDABIgEACIgDACIgBAAIAAABIgBAAIgBABIAAAAIgBABIgBABIgDAEIgBABIgBACIgBABIgDAEIAAABIgDAFIgBABIAAAAIAAABIAAAAIgCAEIgBACIAAABIgBABIAAAAIgEALIgCALIgCALIAAADIAAAEIAAAFIAAAAIAAACIAAACIABAJIAAADIAAAAIAAAAIAYABIABAAIACAAIABAAIAAAAIADAAIABAAIAAAAIABAAIAHABIABAAIABAAIBkAFIgDgHIgEgHIgDgEIABAAIABACIABAAIABACIAAAAIACACIAEAFIABACIABADIAAAAIABACIABAAIACACIAAAAIAAABIAAAAIgBACIAAAAIAAABIAAABIABABIAAACIAAABIAAAAIAAAJIgBADIAAADIAAAFIgBgCIgEAJIABAAIADAAIABAAIADgBIACAAIAAABIAAABIgBACIgBACIgDABIgBAAIgCAAIgEAAQgQAAgQADIgJABIgHACIgaADIgcADIgBAAIgBAAIgLABIgBAAIgOAAIgKAAIgCAAIgBAAgADqAvIgCgHIAAgBIAAgDIAAAAIgBgFIAAAAIAAgHIAAgGIAAgCIAAgHIAAgDIAAAAIAAgCIAAgDIAAAAIAAgBIgBgGIAAgBIAAgDIAAgCIAAgCIAAgGIAAAAIgBgDIAAgCIAAgCIAAAAIAAgCIgBgGIAAAAIgBgJIAAAAIAAgCIgBgCIgBgPIAAAAIgBgJIAAgBIAAgBIAAAAIAAgBIAAgBIAAgMIAAAAIAAgBIAAgDIABgJIAAgBIAAgBIAAAAIAAgDIABgEIAAgBIAAgBIAAAAIAAgBIABgCIAAgBIAAgBIAFgWIAAgCIAAAAQglAFgngIQgJgCgCgDIAAABQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBIAAgGQgDgeAKgeIAAgCQAGgRAIgPQAIgPAKgNIANgPIgBAAQADgFAEgDQAJgGAJgEIAHgCIACgBIAOgCQAKgCALABQA3gHAyARQAMAEALAGIAIAFQASAOgHAbQgDALgCALIAAAEIgBgEQgCgSADgVQACgPgJgJQgGgFgKgDQgXgHgZgDQgkgFglADQgUABgTADQgPADgLAMIgBAAQgbAlgNAsQgHAZgCAbIABAGIAAAAQAKAEAKABQAfADAfgBQAGgBABADIAEgOQADgHAGgFQA0gnBBgIIAngHIAIgBIAJgCIgDACIgCABQgNAHgUABQgqADgkAPIgQAIIgBAAIAAAAQgWALgTAQQgJAHgCALIAAAAIgBADIgDAXIgBAHIAAABIAAABIAAABIAAACIAAAEIgBAOIAAABIAAACIAAABIAAALIAAACIAAABIAAABIAAAFIAAABIABADIABAOIAAAAIAAADIABAFIAAAAIABAIIAAABIAAAAIAAACIABACIAAACIAAACIAAABIAAABIABAGIAAABIAAAFIAAABIABANIAAACIABABIAAACIAAAAIAAAEIgBALIAAADIAAABIAAAGIAAAAIAAABIAAACIAAABIAAADIAAACIAAACIgBACIAAgDgAEKAuIABgBIAAAAIAAAAIABgBIAFgDIABAAIANgIIAIgEIABgBIACgBIAVgLIACgBIABAAIAhgPIAigOIAIgEIALADIAAAAIgXAHIgCAAIgDABIgLAEIgOAFQgZAKgZAPIgFADIgCABIgCABIgIAEIgCABIgLAFIAAAAIgBABIgFACIgBAAIgBABIAAAAIgBAAIgBAAIABAAgAEDAkIgBgIIAAgMIAAgGIAAAAIABgPIAAgGIABgDIAAAAIABgHIAAAAIABgBIAAgBIAAgBIAAgBIACgIIACgHIABgBIgDAQIAAABIAAAAIAAABIgCAMIAAAEQgBALABANIABAUIAAABIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAgAGkARIAEgDQAQgLATgHQgCgYACgYIAAgCQgBgZABgYQABgZACgZIADgZIACgLIABgKQAEgXAIgUIgDABIACgIIAAgBIABgKQABgTgFgTIAAgDIgEgLIgBgCIgDgEIAAgBIADAEIAKALIgBAAIACAMQACAQgBAQIgBANIAAACIgBABIAAAAIgJA9IgHA8IgBACIgCAWQgDAwAEAuIACgBIgCABIABARIABADIgBABIgDAAIgCgSQgRAJgVAKIAAAAgAi+gRIgCgGIAAgBIgCgJIAAgCIAAgBIAAAAIAAgBIAAgJIAAgDIAAgDIAAgDIABgDIAAAAQABgLAFgJIABgBIADgFIAAgBQAFgHAHgGIAFgEIAAgBIAFgDIAKgGIABgBIACgBIAEgCIAEgBIAAgBIABAAIACgBIAAAAIAAAAIAEgBIADgBIAAAAIAAAAIABAAIABgBIAFgBIABAAIgFADIgBABIgBABIAAAAIgBAAIgFADIAAAAIgBABIgDABIgBABIAAAAIgGADIgBABIgEACIAAAAIgHAEIgDACIgBABIgEADQgIAHgFAHIgCACIAAAAQgGAJgDAKIAAADIgBAIIgBAEIABAKIAAABIAAACIABABIAAACIABAGIADALQgCAAgCgEgAGdgSQgGgJABgPIACgaIACgRIAEgZIAGgiQAXgYgGgfQgBgGgGgCQgNgFAAgGQAhAJgHAcQgFAWgPAQQgHAbgDAcQgDAVAAAVIABAVQACACABADIAAAEIgBABIgCgDgAltgTIgBAAIgCAAIAAAAIgIgBIAIAAIAAAAQAmACAmgEQAigEAigIQgFAEgIADQgHADgKABIgmAEIgYABIgMABIglgCgAiIgVQgLgBgJgDIABAAQgIgDgDgIIAAgKQABgMAJgJIgBAAIgBAAIACgBIAAAAIACgBIABAAIgBABIAMgBIAEAAIABAAIAJAAIAZgBIATgBIACAAIALAAIACAAQAvAAAsgCIAFAAIAEABIABAAIAAAAIAAABIgBAAIgLAAQADALACALQAAAKgBAKIAFABIAAABIgFAAIgBAFIgBAAIAAgFQgtAAguADIAAAAIgiACIgMABIgJAAIgMAAgAiUgbIgDACIAwgBIAigBIAAAAIAfgCIAbgCQARgCAQADIgBgTIgCgVIABgBIgBAAIhYAEIgBAAIghACIgLAAQgVABgUgDQgGAJgCAMIAAAIIAAABQADAFAFAEIADAAIAEABgAl3gYIgBAAIgBAAIAAgBIAAAAQgDgBgCgDQgDgEAAgIIABgEIAAgEIACgEIAAgBIAAAAQACgFADgEIgBAAIACAAIAAgBIAAABIAegDIABgBIAWgCIAcgEIAegDQAUgCATAEIAEABIAEACIABgBIAAABIACABIAAAAIAAABIgCAAIABARIAAAGIAAAFIAAABIAAABIABAEIAAAAIAAABIAAAEIAAAEIAAABIAAAAIgCABQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCIAAgGIAAAAIAAgCIAAgBIAAAAIAAgIIABgXIgBAAIgBgBIgCgBIgEAAQgigCgjADQgZACgZAFQgRADgOgDQgEAJAAAJIAAADIAAADIABABIAAABIABAGIAAABIABACIABABIAFABIADACIgEAAIgDAAgAENgpIAAAAIADgFQAEgFAFgFIABgBIABAAIABgBIABgBIABgBIACgBIAEgEIAAAAIAEgEQAVgVAJgcQAOgpgjgaQgKACgHgDQAIgCAKAAQAjAXgJApQgHAdgVAVIgDACIgNAPIgBABIgCADIgBABQgKANgIAPQgBgJAEgIgADKgZIgEAAIgBAAIgBAAIAAAAIgDAAIgHAAIAAAAIgBAAIAAAAIhagBIgBAAIgJAAIAAAAIADAAIAGgBIABAAIAWgCIAHgBQAUgBAUACIAVABIABAAIAAAAIAGABIACAAIABAAIACAAIAAAAIAAABIABAAIAFABIAAAAIAAAAgABUgbIAAAAIgBgBQgLgHAAgJIAAgFIAAgCIAAAAIABgDIAEgGIABgBIACgDIABgBIABgBIACAAIgBACIgCACIAAAAIABAAIABAAIAJgBIACgBIADAAIAAAAIACAAIAPAAIAIAAIACAAIAoABIAVABIAJAAIACAAIABAAIABAAIABAAIAAAAIABAAIACgFIABAFIAEAAIAAABIgEAAIABARIAAALIAAABIAAAAQgFgGAAgLIABgMIgBAAIAAAAIgBAAIgBAAIgBAAIgCAAIgJAAIgVABIgoACIgBAAIgJAAIgRAAIgBAAIgMABIAAAAIgDgBIgCgBIAAAAIgBACIgCAGIAAADIAAAEIABAEQABAEADAFIABABIABAAIAAAAIABAAIADgBIABAAIACACIgCABIgEABgAECg4IgBAAIgHgFIAAgDIAAgBIgBgFIAAgBIAAgBIAAgMIAAgBIAAgBIABgEIABgKIAAgCIABgCQAEgVANgUIACgCQALABAHAFIgRgBQgRAagCAdQgBALABALIAAABIAAABIABABIABAAIAAABIABABIABAAQAKAAAJgEQARgIAHgXQAIgZgGgXIAAgBIgBgBIAAgBIAAAAIgDgKIABAAIAEAJIAAABIABADQAKAggRAgQgEAGgEAFQgFAFgFACIAAAAQgHAEgIABIgDAAIgBAAIgCAAgAAghIgAAkhJIAAAAIABAAIAHgCIABADIgNAAgAn5hYQgFgWAEgVQADgMAFgMQACgFADgEQAEgDAEgCIALAEQAHADAGAEIAGAGIACACIAAAAQAIAKADANQACAKgBAMQgBAMgJAIQgIAHgIADQgGADgGAAQgOAAgMgQgAnmimIgBADQgYAgAJAoIAAABQAQAWAUgLQAGgEAGgGQAVgUgNgZQgGgMgJgIIgLgHIAMARIACAFIAAAAIgCgCQgKgKgJgMIAAgBQgCgCgDAAIgCAAgAllhUIADgCIAJgGQAMgJAPgGIACAAIAHgDIgGgBIAGAAIAegDIAAAAIALgBIAAAAIACAAQAggEAhgEIAOABIAAABQgcACggAGIgTACIgBABIgBAAIgLAAQgOABgOgBIgCABIgGAEIgBABIgNAHIgYANIAGgBIAhgCIAGAAIAegCIAAAAIAMAAIABAAIA+gDQABgFAFgHQAHgIAHgGIAAAAIgDAGIgCAEIgJAOIABABQAAADgEABIgCACIAAABIgBgDIgUABIgEAAIgmACIgBAAIgLAAIgBAAIgRABIgTABIghACIAAAAIgJAAIgDAAIACgCgAiRhYIgEAAIgCAAIgBAAIAAAAIgBAAIgBAAIACgBIAAAAIABgBIAFgCIAHgCIAAgBIABAAIAGgCIABgBIACgBIAAAAIAHgCIAAgBIABAAIADgBIAIgDIAAgBIAFgBIADgCIAFgCIAFgCIABAAIAAgBIAAAAIAFgCIACAAIACAAIAAAAIACgBIADAAIADgBIADgBIAAAAIADAAIADgBQAmgBAkACIANAAIACAAIAKABIAAAAIATABIACAAIACABIAEAAIAAAAIADAAIAAABIAAAAIgEAAIAAAAIgEAAIgCAAIgBAAIgBAAIgSAAIAAAAIgKAAIgCAAIhbABIgNABIgCAAIgCAAIgFAAIgBABIgEADIgBAAIgEACIgDACIgNAGIgEACIgIADIAAAAIgBAAIAAABIgIACIgBAAIAAABIgEABIAEgBIAAAAIABAAIAJgBIABAAIAhgDIAFAAIAFAAIABAAIACAAQA1gDAzADIABAAIAHABIACAAIAAAAIgCAAIgHABIgBAAIhbADIgCAAIgLAAIgCAAIgTABIgZAAIgKAAIgBAAIAAAAIgEABIgCAAgABjhZIAAgBIADgBQAKgGALgDIAHgCIAFgCIACAAIAAAAQgJAGgRAGIAAAAQAbgDAbABIAhADQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgMgBIgUgBIgpABIgDAAIgJABIgFAAIgIAAgADIhcQAAgFACgFIACgDIgCAAIglAAIgbgCIgBAAIAAAAIgCAAIgHgBIAHgBIACAAIABAAIAbAAQATABASACIACAAIACgDIABAAIAAACIAAABIACABIAAAAIgCAAQgBAGgEAGIAAABIgBAAgAAfhcIABgCIABgBQAHgLAMgFIgBABIgIAJIgEADIgBABIgFAEIgBABgAmOhkIAEgCIACgBIABgBIABAAIABgBIAAAAIABgBIAAAAQAVgNARgSIANgOIABgBIgCAEIABAAIgCADIAAgCQgIAMgKAJIgHAHQgJAHgLAGIgCABIgBABIAAAAIgBAAIgCABIgBAAIAAABIAAAAIgBAAIgCABIgDABIgBAAIAAAAgAmMhvIAAgCIAAgEQgBgkghgUIACAAQAbAPAHAaQACAKAAAMIAAAAIgBABIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBgABEh2IgBAAIgCgBIAAAAIgBAAIgCAAIAAAAIgEgBIgCAAIgDAAIAAAAIgSgCIgKgBIgBAAIgCAAIgNAAIhKgCIgDAAIAAAAIgDAAIgBAAIAAAAIgBAAIgBAAIgBAAIAAAAIgBAAIgGgBIgCAAIgBAAIgBAAIAAAAIgFAAIgVgBIgCAAIgEAAIgBAAIgCAAIAAgBIACAAIABAAIADAAIADAAIAagBIAAAAIACAAIACAAIABAAIAAAAIAEAAIAAAAIABAAIABAAIAAAAIABAAIABAAIABAAIABAAIACAAIABAAIAEAAQAtgEApAFIADABIAgAFIADABIADABIAAAAIACAAIABAAIADABIAAAAIADABIAEABIgBABIgHgCgABNiQIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIgBgCIAAgEQgCgbAMgcIAKgUIAVgrIAUgkQhNgQhMAWQgJACgIABQgZAXgRAhQgFALgEALQgJAfAJAgQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAgBQgGghAIgdQAIgiAbgeIABgBQAGgHAIgFIgHgBIAJgCIABgBIADAAIAEgDIACgBIgDADQAXgGAWgEIApgEQAsgHAiARIABAAIAAAAIAAAAIgBAAIAAAAQgGAUgJATQgHAPgKAPIgGAKQgTAjgCAoIgBADIAAACIAAABIAAACIAAAAIAAABIAAABIAAAAIAAAAgAiViUIgEgBIgcgBIgBAAIgSgBIgBAAIgBAAQghAAghACIgDABIgEAAIgFAAIgDABQADgQgBgPQAAgKgFgJIgBgCQgFgHgGgEQgHgDgJABQAIgdAQgWQARgYAagSIAEgBIgEADIALgDQAXgIAagBIAegCQAogDAlANIABABIABABIgBABIgBAAIgCAAQhMgVhNAWQgGACgGgBQgWARgTAYQgQAUgHAZQAHACAGACQAJAEAFAHQAHALAAARQAAAMgEALIAGgBQAxgGAyACQAOAAALAEIAAAAIAKAEIgIgBgAlQiYIAAgEQgIgegXgXIAAgBQgPAJgVAKIgDABIgaAMIgBAAIAAAAIAAAAIgLAFQADgFAFgEIAAAAIABAAIAAAAIACgCIAFAAIAUgKQAUgKAUgHQAAAAgBgBQAAgBAAAAQAAAAABgBQAAAAABAAQAMALAHAMQAKAPAEASIABAEIgBADIgBAAIgBgBgABHiYIgBAAIAAgBIgsgEIgEAAQgsgCguAEIgDAAIgCABIgCAAIgDAAIAAAAIgEAAIgBAAIgBAAIgDAAIgFgBIAAAAIgBAAIgBgBIACAAIAAAAIABAAIADgBIAEgBIABAAIAEgBIASgCIAZgCIBtAJIABAAIAAABIAAABIgBABIgCgBgAiKilQgEgGACgLQAFgbAKgYQARgmAfgdIABgCIABgBIAFgEIgCADIgCACQgXAbgTAiIgEAJQgIAPgFAQQgIAWAJATQgEgCgCgDgACOkvIgCgBIgBgCIgBgCIAFADQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAIgBABIgCgCgAFFl1IAAgCIACAAIgBAEIgBgCgAICm1IACAAIAAABIgCgBgADOqXIABAAIABAEIgCgEg");
	this.shape_106.setTransform(88.4,80.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AKVL1IgFgIQgHgcAfgBIAFABIACACIABABIAAAAIAAAAIAFAJQgCAagRAAQgGAAgHgCgAJTKPIgHgJQgHghAlgCIAGACIACACIABABIABAAIAAAAIAGAKQgCAhgWAAQgGAAgJgEgAHzIQQgCgGgIgKQgJgJAFgdQAFgbA2AMIAHAGQANAJACATQADAUgSAMQgNAJgOAAQgMAAgNgGgAjJFtIgLgaQAKgMAIgQIgCgHIgBAAIgCAAIABABQgFANgHAKQgDAJgGACIAAAAQgUAYhAAPIgTgHQgugSgLgnQALgHAMgJIgBgDIgBgDIgBABQgHAJgLAFQhqA1g9heIABgBIAAAAQACgPgCgOQASgFARgNIAJgIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgPAMgUAFQhWAWgqhIQgJgQADgSQALg5AigrQANgDAPgLIgBgCQgMAJgMADIABgBIgBABQgWAEgYgSQgIgGgDgJQgihaBHhKIACAAIADAAIAAABIABgBIABAAIAAABIABABIAEAEIAAgBQASANAXgQQgGgDgGAHIgQAAQgIgDgGgGIgBgCIgCgCIgBAAIgCgCQgGgHgCgKQgQhPA7g+QAcgeAmAJIACABQAGAFAJgCIgCgDQgDgCgBgEIAAgBIgBgBIgFACIgBABQgOgNABgTQAFhVBZgBIAFAAQAEAIAHAGIgEgLIAEADQAPARAGARIABgCQgCgjgbgJQgVhJBOgmQAlgSAcAOIAAABQABAGAFgBIACgCQAIAGAHAJIAGgBIACgBIgBgCQgKgPgOgHIgEgLIgBgGQAnhIBXAIQAQACAOAFQAQADALAKQAGAFACAFIAaATIAAgCQgRgYgXgOQAKgRAQgNQB2hbCRAlIACABQAQAFAHAOIAAACQAKAYAMASIgCABQgJACgIAEQgJAFgHAGQAEAEAGgDIASgHQAKgHAGAAIAFAAQBHgQA8AzQAZAWAFAgIAFAhIgMAAQgRAGgMAPQgEAEgDAFIAAABIAAAFIAAADIAAACIAAACIABACIABgDIADgFIABgDIAAgCIAFgGQAFgGAIgFQALgHANgCIAAAAQACgCAEAAIABAAQALgBALABQBMAKASBEIAGAPIgLABIgDABIgGABIgHADQgDgFgFgFIgKgJIADADIAIAKIAMAPIAAABIABgBIAJgEIAPgFIAAABIAJgBIAAgBQASgBATAGQANAEANAIIAJAFQAOAKAIANQALARABAVQACASAHALQgLgDgMgBIgDABIgFABIgEACIgBACQATACAXADIADADIAAgCQAGACAEADIABAAIAAAAQAEAEADAFQAxBgg5BYQgKgFgMgDIgIgCIgCABIAKADQAHADAFAEQAKAEABAHQATAZABAdQAAAKgBALQgDAUgHAQQgOAegdAPIgCgDIgEACIgCABIABADIAAAAIAAAEIAAACIACgBQAKAYgCAbQgBANgHALIgKAOQgoA2hJACQAGgWgJgdQgHABAEAKQAKAcgSAVQgwA4hGgIIAAAAQADgPgHgUIgCgBIgBALIAAACIAEAHQgBAIgDAGQgPAcgbASQhAAnhEgKIAAAAQgJAAgBgGIgCADIADgOQAEgigagfQAMAYABAmQACAyg0ATQgeAKgdgIQgagGgNgWQAGgagNghIgFgEQAJAbgBAbIgBAGIgCARIgVAUQgnAggyAIIgEAAQhMgVgLgZgAC0BVQAEALABAMIAAACIABABIABAKIABABQAeAFAfABIAAAAIAGAAIAAAAIgDACIAEgBQATgNAQgOIADABIAAgBIgBgBIABAAIAAgBIgBgBIgBAAIAAgBQgFgPgBgPIABAAIAAAAIABgBIAWgKIAXgOIAFgDIADgBIABgBIAPgIIAVgJIABAAIABAAIAAAAIAAACIAAAAIAAAAIgBABIABABIABADQAGAOgBAQIAQgBIAEgEIANgOIACgCIAAADIAAABIADAGIABAAIAjgSIABgBQgBgDABgFIgBgHIADgBIABAAIgBgDIgBgRIACgBIgCAAQgEguADgvIACgWIABAAIAAgCIAHg9IAJg9IAAAAIABgBIAAgBIABgNQABgQgCgRIgCgLIABAAIgKgMIgDgDIgIgKIgDgDIgMgJIgNgIIgDgCQgLgFgLgEQgcgJgfABIgRABQgdADgcAGQghAGgZAUIgPAFIgBAAQgOAFgPgCIgCgEIgDgFQgHgHgIgGQgigZgsAIIguAGQgnAEgbAYIgEAEIgEgEIgBgBIgDgDIgCgCIgCgCQgrglg9AFQgTABgUAEIgeAGQgOADgNAFQggAMgaAXIgQAPIgDAEQgUAXgMAcIgCAHIgHACQgZAGgXANQgRAJgQANQgigMgZAVIgFAEIgFAFIgEAGQgMAPgDARIAAABIAAABIgBAKIAAACQgDAfAHAfQABAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIAAgBIADANIACADIAGAGIABABQAbAUAagIIAHgDIABgBIAAABIABAFIABAJQAEAsgNAtQgCAIABAFIAAAVIABALIAAACIAJAAQArABAqgIIAAAAIADgBIACAAIAigIQAFgBACgCIABACIAAgBIAAgBIACgDIgCAAIAAgGQAlABAmgDIAEAAQBXACBXgCIB8gDIABAAIADAAIAKAAIAPgBIAOAAIAFAAIAEgBIBNgDIADAAIABAHgAFEl4IABACIABgEIgCAAIAAACgAIBm5IACACIAAgBIgCgBIAAAAgADNqaIACADIgBgDIgBAAgAHOF0QgfgCgYgRQgHgtAVgPQAWgPAcACQAggCAPAaQAPAagUAVQgUAVgbAAIgEAAgAnSByQAAAAgBAAQAAAAAAgBQAAAAAAgBQABAAABgBIAAADIgBAAgAnWBVIABgCIAAgBIACAEIgBAAIgCgBgAnWBQIABABIgBABIAAgCgAlwBRIgCgBIAEABIgBAAIgBAAgAEeBBIAAgBIAAgBIAPgJIAHgBIgVAMIgBABIAAgBgAAvAyIAAgEIABAAIAAAEgAGhAPIABAAIgBAAgAmZgEIAAABIAAADIAAgEgAjUgKIAIAAIAAABIgIAAgAAvgNIAAAAIgBAEgAEHgcIAAAAIADgQIACAAQgEAIABAIgABOg+IAAAAIgBACIABgCgAD/g/IgBgBIAAgBIACACgAoahDIAAgBQgDgMgBgNIAAAAIAFAbIgBgBgAAShKIABAAIgBAAgAiMhfIAAAAIABAAIAIgDIAAAAIABAAIAAAAIABADIgBAAIgJABIgBAAIAAAAIgEABIAEgCgAAVhhIABAAIAHAAIACAAIAAAAIgBABgADniRIAAAAIAAACgACPibIAAAAIgBgGIAVAKQgKgBgKgDgABMiaIABgDIgBAEIAAgBgAkWiwIACAWIgGAAQAEgLAAgLgAhZijQAAABABAAQAAABABAAQAAAAABAAQAAAAABgBIAAABIgEABgAmyi1IAAAAIAAAAIABgBIACAFgAnAjHIABAAIgHAFIAGgFgAlLkpIADgDIgGAFIADgCg");
	this.shape_107.setTransform(88.5,80.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AKVL1IgFgIQgHgcAfgBIAFABIACACIABABIAAAAIAAAAIAFAJQgCAagRAAQgGAAgHgCgAJTKPIgHgJQgHghAlgCIAGACIACACIABABIABAAIAAAAIAGAKQgCAhgWAAQgGAAgJgEgAHzIQQgCgGgIgKQgJgJAFgdQAFgbA2AMIAHAGQANAJACATQADAUgSAMQgNAJgOAAQgMAAgNgGgAjJFtIgLgaQAKgMAIgQIgCgHIgBAAIgCAAIABABQgFANgHAKQgDAJgGACIAAAAQgUAYhAAPIgTgHQgugSgLgnQALgHAMgJIgBgDIgBgDIgBABQgHAJgLAFQhqA1g9heIABgBIAAAAQACgPgCgOQASgFARgNIAJgIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgPAMgUAFQhWAWgqhIQgJgQADgSQALg5AigrQANgDAPgLIgBgCQgMAJgMADIABgBIgBABQgWAEgYgSQgIgGgDgJQgihaBHhKIACAAIADAAIAAABIABgBIABAAIAAABIABABIAEAEIAAgBQASANAXgQQgGgDgGAHIgQAAQgIgDgGgGIgBgCIgCgCIgBAAIgCgCQgGgHgCgKQgQhPA7g+QAcgeAmAJIACABIAJgHIgBgBIgFACIgBABQgOgNABgTQAFhVBZgBIAFAAQAEAIAHAGIgEgLIAEADQAPARAGARIABgCQgCgjgbgJQgVhJBOgmQAlgSAcAOIAAABQABAGAFgBIACgCQAIAGAHAJIAGgBIACgBIgBgCQgKgPgOgHIgEgLIgBgGQAnhIBXAIQAQACAOAFQAQADALAKQAGAFACAFIAaATIAAgCQgRgYgXgOQAKgRAQgNQB2hbCRAlIACABQAQAFAHAOIAAACQAKAYAMASIgCABQgJACgIAEQgJAFgHAGQAEAEAGgDIASgHQAKgHAGAAIAFAAQBHgQA8AzQAZAWAFAgIAFAhIgMAAQgRAGgMAPQgEAEgDAFIAAABIABAAIAFgFIAFAAQAFgGAIgFQALgHANgCIAAAAQACgCAEAAIABAAQALgBALABQBMAKASBEIAGAPIgLABIgDABIACAJIAPgFIAAABIAJgBIAAgBQASgBATAGQANAEANAIIAJAFQAOAKAIANQALARABAVQACASAHALQgLgDgMgBIgDABIgFABIgEACIgBACQATACAXADIADADIAAgCQAGACAEADIABAAIAAAAIAAAAQAEAEADAFQAxBgg5BYQgKgFgMgDIgIgCIgCABIAKADQAHADAFAEQAKAEABAHQATAZABAdQAAAKgBALQgDAUgHAQQgOAegdAPIgCgDIgEACIgCABIABADIAAAAIAAAEIAAACIACgBQAKAYgCAbQgBANgHALIgKAOQgoA2hJACQAGgWgJgdQgHABAEAKQAKAcgSAVQgwA4hGgIIAAAAQADgPgHgUIgCgBIgBALIAAACIAEAHQgBAIgDAGQgPAcgbASQhAAnhEgKIAAAAQgJAAgBgGIgCADIADgOQAEgigagfQAMAYABAmQACAyg0ATQgeAKgdgIQgagGgNgWQAGgagNghIgFgEQAJAbgBAbIgBAGIgCARIgVAUQgnAggyAIIgEAAQhMgVgLgZgAD8CAIAEgBIgBgBIgDACgAl5BqIAAABIADgBIACgBgAEjBjIADACIAAgBIgBgBgAIBm5IACACIAAgBIgCgBIAAAAgADNqaIACADIgBgDIgBAAgAHOF0QgfgCgYgRQgHgtAVgPQAWgPAcACQAggCAPAaQAPAagUAVQgUAVgbAAIgEAAg");
	this.shape_108.setTransform(88.5,80.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("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AIgCACIgBAAIgEADIAEAFIgFgDQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAIABgCIgEgEIgBAAIgEgEIgBgCIgCgBIgGgGQgKgMgQgEQhVgUhOAgQgOAGgNAHQgaAOgWAUIgDADIgDADQgXAXgGAdIAAAAIAAADIgBAAIAAACIgDABIAAgBIgJADIgFACQgUAFgTAKQgOAHgMAKIgBABIgBABIgGAEQgTgIgRAFIgEABIgCABQgIADgGAFIgEAEIgGAGIgBABQgOARgGATIgBAEIAAAAQgDAWADAVQABANADANIAAAAIABABIgFgbIABAGIACAFIAAABQAGAUAJASIAAAAQAZAPAbgGIAIgDIAAgFIABAAIACAFIAAgBIABACIgBAAIAAABIADAPQADARgBAQIAAACIgBAPIgFAXIgIAcIAAABIABAAIAAgBIAAgBIAAAAIAAACIAAABIgBACIACACIABgBIAAAAIAAABQAaABAZgCIACgBQATgBATgDIAAAAIADAAIABAAIACgBIAAAAIACABIACAAQA3ACA4AAIAFAAIA/AAIBNgBIAagBQBCgCBBABIABAAIADAAIAKAAIAEAAIALAAIABAAIALAAIACAAIADAAIAHgBIA0gCIAXgDIALgBIADAAIABAAIAFAAIACAAIABAAIADAAIACAAIAHAAIANAAIAKABIABAAIACAAIAAAAIAIAAIABAAIgJABIgBAAIgBAAIgOABIgNABIgaABQACAFABAFIAAABIABABIACAJIAAAAIADATIAAABIAHABIAuAGIAFABIAAAAIABAAIAEABIAAAAIACAAIAAAAIABgBQAQgOATgLIgDgDQgDgEgCgIQgCgKADgIIgKAFIALgHIAAAAIABgBIAAAAIAAgBIAAABIABAAIAVgNIACgBIADgCIADgBIABgBIAogVIAUgJIACgBIABAAIAGgDIAEgCIABAAQAHgCAIgBIAHABIABgBIAAAAIAFgBIAAACIACABIAAAAIAAABIgCAAIAAABIAAABIACAXIgCACQgFgGACgNIABgEIABgBIgBAAIAAAAIAAgBIAAgBIgBABIgDgBIgBAAIAAAAQgOACgNAEIAAAAIgEACIAAAAIgBAAIAAAAIgBAAIgBABIgVAIIgPAJIgBAAIgDACIgFADIgXANIgWAKIgBABIAAA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EIABAAIACgEIAAAAIAAgBIAFgHIACgDIAAAAIABAAIAAgBIABgCIABAAIADgEIACgCIAAAAIABAAIAAAAIAAgBIABAAIAAgBIABgBIAAAAIADgCIAAgBIAAAAIACgBIAEgDIAAgBIACAAIAAgBIAAAAIACAAQAFgCAFgBIAHAAIgDACIAIgBIABAAIABAAIAbgCQAigFAhAGIANADIABAAIgBAAIgBAAIgPAAIgBAAIgFAAIglgBIgbAAIgBAAIAAAAIgCAAIgQABIAAAAIgCAAIgFAAIgBAAIgBAAIgFAAIAAgBIgFADIAAAAIgCABIAAAAIgFACIAAAAIgBAAIgBABIgDABIgEACIgDACIgBAAIAAABIgBAAIgBABIAAAAIgBABIgBABIgDAEIgBABIgBACIgBABIgDAEIAAABIgDAFIgBABIAAAAIAAABIAAAAIgCAEIgBACIAAABIgBABIAAAAIgEALIgCALIgCALIAAADIAAAEIAAAFIAAAAIAAACIAAACIABAJIAAADIAAAAIAAAAIAYABIABAAIACAAIABAAIAAAAIADAAIABAAIAAAAIABAAIAHABIABAAIABAAIBkAFIgDgHIgEgHIgDgEIABAAIABACIABAAIABACIAAAAIACACIAEAFIABACIABADIAAAAIABACIABAAIACACIAAAAIAAABIAAAAIgBACIAAAAIAAABIAAABIABABIAAACIAAABIAAAAIAAAJIgBADIAAADIAAAFIgBgCIgEAJIABAAIADAAIABAAIADgBIACAAIAAABIAAABIgBACIgBACIgDABIgBAAIgCAAIgEAAQgQAAgQADIgJABIgHACIgaADIgcADIgBAAIgBAAIgLABIgBAAIgOAAIgKAAIgCAAIgBAAgADqAvIgCgHIAAgBIAAgDIAAAAIgBgFIAAAAIAAgHIAAgGIAAgCIAAgHIAAgDIAAAAIAAgCIAAgDIAAAAIAAgBIgBgGIAAgBIAAgDIAAgCIAAgCIAAgGIAAAAIgBgDIAAgCIAAgCIAAAAIAAgCIgBgGIAAAAIgBgJIAAAAIAAgCIgBgCIgBgPIAAAAIgBgJIAAgBIAAgBIAAAAIAAgBIAAgBIAAgMIAAAAIAAgBIAAgDIABgJIAAgBIAAgBIAAAAIAAgDIABgEIAAgBIAAgBIAAAAIAAgBIABgCIAAgBIAAgBIAFgWIAAgCIAAAAQglAFgngIQgJgCgCgDIAAABQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBIAAgGQgDgeAKgeIAAgCQAGgRAIgPQAIgPAKgNIANgPIgBAAQADgFAEgDQAJgGAJgEIAHgCIACgBIAOgCQAKgCALABQA3gHAyARQAMAEALAGIAIAFQASAOgHAbQgDALgCALIAAAEIAIgBIAJgCIgDACIgCABQgNAHgUABQgqADgkAPIgQAIIgBAAIAAAAQgWALgTAQQgJAHgCALIAAAAIgBADIgDAXIgBAHIAAABIAAABIAAABIAAACIAAAEIgBAOIAAABIAAACIAAABIAAALIAAACIAAABIAAABIAAAFIAAABIABADIABAOIAAAAIAAADIABAFIAAAAIABAIIAAABIAAAAIAAACIABACIAAACIAAACIAAABIAAABIABAGIAAABIAAAFIAAABIABANIAAACIABABIAAACIAAAAIAAAEIgBALIAAADIAAABIAAAGIAAAAIAAABIAAACIAAABIAAADIAAACIAAACIgBACIAAgDgADpiPIAEgOQADgHAGgFQA0gnBBgIIAngHIgBgEQgCgSADgVQACgPgJgJQgGgFgKgDQgXgHgZgDQgkgFglADQgUABgTADQgPADgLAMIgBAAQgbAlgNAsQgHAZgCAbIABAGIAAAAQAKAEAKABQAfADAfgBIABAAQAFAAABACgAEKAuIABgBIAAAAIAAAAIABgBIAFgDIABAAIANgIIAIgEIABgBIACgBIAVgLIACgBIABAAIAhgPIAigOIAIgEIALADIAAAAIgXAHIgCAAIgDABIgLAEIgOAFQgZAKgZAPIgFADIgCABIgCABIgIAEIgCABIgLAFIAAAAIgBABIgFACIgBAAIgBABIAAAAIgBAAIgBAAIABAAgAEDAkIgBgIIAAgMIAAgGIAAAAIABgPIAAgGIABgDIAAAAIABgHIAAAAIABgBIAAgBIAAgBIAAgBIACgIIACgHIABgBIgDAQIAAABIAAAAIAAABIgCAMIAAAEQgBALABANIABAUIAAABIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAgAGkARIAEgDQAQgLATgHQgCgYACgYIAAgCQgBgZABgYQABgZACgZIADgZIACgLIABgKQAEgXAIgUIgDABIACgIIAAgBIABgKQABgTgFgTIAAgDIgEgLIgBgCIgDgEIAAgBIADAEIAKALIgBAAIACAMQACAQgBAQIgBANIAAACIgBABIAAAAIgJA9IgHA8IgBACIgCAWQgDAwAEAuIACgBIgCABIABARIABADIgBABIgDAAIgCgSQgRAJgVAKIAAAAgAi+gRIgCgGIAAgBIgCgJIAAgCIAAgBIAAAAIAAgBIAAgJIAAgDIAAgDIAAgDIABgDIAAAAQABgLAFgJIABgBIADgFIAAgBQAFgHAHgGIAFgEIAAgBIAFgDIAKgGIABgBIACgBIAEgCIAEgBIAAgBIABAAIACgBIAAAAIAAAAIAEgBIADgBIAAAAIAAAAIABAAIABgBIAFgBIABAAIgFADIgBABIgBABIAAAAIgBAAIgFADIAAAAIgBABIgDABIgBABIAAAAIgGADIgBABIgEACIAAAAIgHAEIgDACIgBABIgEADQgIAHgFAHIgCACIAAAAQgGAJgDAKIAAADIgBAIIgBAEIABAKIAAABIAAACIABABIAAACIABAGIADALQgCAAgCgEgAGdgSQgGgJABgPIACgaIACgRIAEgZIAGgiQAXgYgGgfQgBgGgGgCQgNgFAAgGQAhAJgHAcQgFAWgPAQQgHAbgDAcQgDAVAAAVIABAVQACACABADIAAAEIgBABIgCgDgAltgTIgBAAIgCAAIAAAAIgIgBIAIAAIAAAAQAmACAmgEQAigEAigIQgFAEgIADQgHADgKABIgmAEIgYABIgMABIglgCgAiIgVQgLgBgJgDIABAAQgIgDgDgIIAAgKQABgMAJgJIgBAAIgBAAIACgBIAAAAIACgBIABAAIgBABIAMgBIAEAAIABAAIAJAAIAZgBIATgBIACAAIALAAIACAAQAvAAAsgCIAFAAIAEABIABAAIAAAAIAEgBIAAAAIABAAIAHgCIABADIgNAAIAAABIgBAAIgLAAQADALACALQAAAKgBAKIAFABIAAABIgFAAIgBAFIgBAAIAAgFQgtAAguADIAAAAIgiACIgMABIgJAAIgMAAgAiUgbIgDACIAwgBIAigBIAAAAIAfgCIAbgCQARgCAQADIgBgTIgCgVIABgBIgBAAIhYAEIgBAAIghACIgLAAQgVABgUgDQgGAJgCAMIAAAIIAAABQADAFAFAEIADAAIAEABgAl3gYIgBAAIgBAAIAAgBIAAAAQgDgBgCgDQgDgEAAgIIABgEIAAgEIACgEIAAgBIAAAAQACgFADgEIgBAAIACAAIAAgBIAAABIAegDIABgBIAWgCIAcgEIAegDQAUgCATAEIAEABIAEACIABgBIAAABIACABIAAAAIAAABIgCAAIABARIAAAGIAAAFIAAABIAAABIABAEIAAAAIAAABIAAAEIAAAEIAAABIAAAAIgCABQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCIAAgGIAAAAIAAgCIAAgBIAAAAIAAgIIABgXIgBAAIgBgBIgCgBIgEAAQgigCgjADQgZACgZAFQgRADgOgDQgEAJAAAJIAAADIAAADIABABIAAABIABAGIAAABIABACIABABIAFABIADACIgEAAIgDAAgAENgpIAAAAIADgFQAEgFAFgFIABgBIABAAIABgBIABgBIABgBIACgBIAEgEIAAAAIAEgEQAVgVAJgcQAOgpgjgaQgKACgHgDQAIgCAKAAQAjAXgJApQgHAdgVAVIgDACIgNAPIgBABIgCADIgBABQgKANgIAPQgBgJAEgIgADKgZIgEAAIgBAAIgBAAIAAAAIgDAAIgHAAIAAAAIgBAAIAAAAIhagBIgBAAIgJAAIAAAAIADAAIAGgBIABAAIAWgCIAHgBQAUgBAUACIAVABIABAAIAAAAIAGABIACAAIABAAIACAAIAAAAIAAABIABAAIAFABIAAAAIAAAAgABUgbIAAAAIgBgBQgLgHAAgJIAAgFIAAgCIAAAAIABgDIAEgGIABgBIACgDIABgBIABgBIACAAIgBACIgCACIAAAAIABAAIABAAIAJgBIACgBIADAAIAAAAIACAAIAPAAIAIAAIACAAIAoABIAVABIAJAAIACAAIABAAIABAAIABAAIAAAAIABAAIACgFIABAFIAEAAIAAABIgEAAIABARIAAALIAAABIAAAAQgFgGAAgLIABgMIgBAAIAAAAIgBAAIgBAAIgBAAIgCAAIgJAAIgVABIgoACIgBAAIgJAAIgRAAIgBAAIgMABIAAAAIgDgBIgCgBIAAAAIgBACIgCAGIAAADIAAAEIABAEQABAEADAFIABABIABAAIAAAAIABAAIADgBIABAAIACACIgCABIgEABgAECg4IgBAAIgHgFIAAgDIAAgBIgBgFIAAgBIAAgBIAAgMIAAgBIAAgBIABgEIABgKIAAgCIABgCQAEgVANgUIACgCQALABAHAFIgRgBQgRAagCAdQgBALABALIAAABIAAABIABABIABAAIAAABIABABIABAAQAKAAAJgEQARgIAHgXQAIgZgGgXIAAgBIgBgBIAAgBIAAAAIgDgKIABAAIAEAJIAAABIABADQAKAggRAgQgEAGgEAFQgFAFgFACIAAAAQgHAEgIABIgDAAIgBAAIgCAAgAn5hYQgFgWAEgVQADgMAFgMQACgFADgEQAEgDAEgCIALAEQAHADAGAEIAGAGIACACIAAAAQAIAKADANQACAKgBAMQgBAMgJAIQgIAHgIADQgGADgGAAQgOAAgMgQgAnmimIgBADQgYAgAJAoIAAABQAQAWAUgLQAGgEAGgGQAVgUgNgZQgGgMgJgIIgLgHIAMARIACAFIAAAAIgCgCQgKgKgJgMIAAgBQgCgCgDAAIgCAAgAllhUIADgCIAJgGQAMgJAPgGIACAAIAHgDIgGgBIAGAAIAegDIAAAAIALgBIAAAAIACAAQAggEAhgEIAOABIAAABQgcACggAGIgTACIgBABIgBAAIgLAAQgOABgOgBIgCABIgGAEIgBABIgNAHIgYANIAGgBIAhgCIAGAAIAegCIAAAAIAMAAIABAAIA+gDQABgFAFgHQAHgIAHgGIAAAAIgDAGIgCAEIgJAOIABABQAAADgEABIgCACIAAABIgBgDIgUABIgEAAIgmACIgBAAIgLAAIgBAAIgRABIgTABIghACIAAAAIgJAAIgDAAIACgCgAiRhYIgEAAIgCAAIgBAAIAAAAIgBAAIgBAAIACgBIAAAAIABgBIAFgCIAHgCIAAgBIABAAIAGgCIABgBIACgBIAAAAIAHgCIAAgBIABAAIADgBIAIgDIAAgBIAFgBIADgCIAFgCIAFgCIABAAIAAgBIAAAAIAFgCIACAAIACAAIAAAAIACgBIADAAIADgBIADgBIAAAAIADAAIADgBQAmgBAkACIANAAIACAAIAKABIAAAAIATABIACAAIACABIAEAAIAAAAIADAAIAAABIAAAAIgEAAIAAAAIgEAAIgCAAIgBAAIgBAAIgSAAIAAAAIgKAAIgCAAIhbABIgNABIgCAAIgCAAIgFAAIgBABIgEADIgBAAIgEACIgDACIgNAGIgEACIgIADIAAAAIgBAAIAAABIgIACIgBAAIAAABIgEABIAEgBIAAAAIABAAIAJgBIABAAIAhgDIAFAAIAFAAIABAAIACAAQA1gDAzADIABAAIAHABIACAAIAAAAIgCAAIgHABIgBAAIhbADIgCAAIgLAAIgCAAIgTABIgZAAIgKAAIgBAAIAAAAIgEABIgCAAgABjhZIAAgBIADgBQAKgGALgDIAHgCIAFgCIACAAIAAAAQgJAGgRAGIAAAAQAbgDAbABIAhADQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgMgBIgUgBIgpABIgDAAIgJABIgFAAIgIAAgADIhcQAAgFACgFIACgDIgCAAIglAAIgbgCIgBAAIAAAAIgCAAIgHgBIAHgBIACAAIABAAIAbAAQATABASACIACAAIACgDIABAAIAAACIAAABIACABIAAAAIgCAAQgBAGgEAGIAAABIgBAAgAAfhcIABgCIABgBQAHgLAMgFIgBABIgIAJIgEADIgBABIgFAEIgBABgAmOhkIAEgCIACgBIABgBIABAAIABgBIAAAAIABgBIAAAAQAVgNARgSIANgOIABgBIgCAEIABAAIgCADIAAgCQgIAMgKAJIgHAHQgJAHgLAGIgCABIgBABIAAAAIgBAAIgCABIgBAAIAAABIAAAAIgBAAIgCABIgDABIgBAAIAAAAgAmMhvIAAgCIAAgEQgBgkghgUIACAAQAbAPAHAaQACAKAAAMIAAAAIgBABIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBgABEh2IgBAAIgCgBIAAAAIgBAAIgCAAIAAAAIgEgBIgCAAIgDAAIAAAAIgSgCIgKgBIgBAAIgCAAIgNAAIhKgCIgDAAIAAAAIgDAAIgBAAIAAAAIgBAAIgBAAIgBAAIAAAAIgBAAIgGgBIgCAAIgBAAIgBAAIAAAAIgFAAIgVgBIgCAAIgEAAIgBAAIgCAAIAAgBIACAAIABAAIADAAIADAAIAagBIAAAAIACAAIACAAIABAAIAAAAIAEAAIAAAAIABAAIABAAIAAAAIABAAIABAAIABAAIABAAIACAAIABAAIAEAAQAtgEApAFIADABIAgAFIADABIADABIAAAAIACAAIABAAIADABIAAAAIADABIAEABIgBABIgHgCgABNiQIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIgBgCIAAgEQgCgbAMgcIAKgUIAVgrIAUgkQhNgQhMAWQgJACgIABQgZAXgRAhQgFALgEALQgJAfAJAgQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAgBQgGghAIgdQAIgiAbgeIABgBQAGgHAIgFIgHgBIAJgCIABgBIADAAIAEgDIACgBIgDADQAXgGAWgEIApgEQAsgHAiARIABAAIAAAAIAAAAIgBAAIAAAAQgGAUgJATQgHAPgKAPIgGAKQgTAjgCAoIgBADIAAACIAAABIAAACIAAAAIAAABIAAABIAAAAIAAAAgAiViUIgEgBIgcgBIgBAAIgSgBIgBAAIgBAAQghAAghACIgDABIgEAAIgFAAIgDABQADgQgBgPQAAgKgFgJIgBgCQgFgHgGgEQgHgDgJABQAIgdAQgWQARgYAagSIAEgBIgEADIALgDQAXgIAagBIAegCQAogDAlANIABABIABABIgBABIgBAAIgCAAQhMgVhNAWQgGACgGgBQgWARgTAYQgQAUgHAZQAHACAGACQAJAEAFAHQAHALAAARQAAAMgEALIAGgBQAxgGAyACQAOAAALAEIAAAAIAKAEIgIgBgAlQiYIAAgEQgIgegXgXIAAgBQgPAJgVAKIgDABIgaAMIgBAAIAAAAIAAAAIgLAFQADgFAFgEIAAAAIABAAIAAAAIACgCIAFAAIAUgKQAUgKAUgHQAAAAgBgBQAAgBAAAAQAAAAABgBQAAAAABAAQAMALAHAMQAKAPAEASIABAEIgBADIgBAAIgBgBgABHiYIgBAAIAAgBIgsgEIgEAAQgsgCguAEIgDAAIgCABIgCAAIgDAAIAAAAIgEAAIgBAAIgBAAIgDAAIgFgBIAAAAIgBAAIgBgBIACAAIAAAAIABAAIADgBIAEgBIABAAIAEgBIASgCIAZgCIBtAJIABAAIAAABIAAABIgBABIgCgBgAiKilQgEgGACgLQAFgbAKgYQARgmAfgdIABgCIABgBIAFgEIgCADIgCACQgXAbgTAiIgEAJQgIAPgFAQQgIAWAJATQgEgCgCgDgACOkvIgCgBIgBgCIgBgCIAFADQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAIgBABIgCgCgAFFl1IAAgCIACAAIgBAEIgBgCgAICm1IACAAIAAABIgCgBgADOqXIABAAIABAEIgCgEg");
	this.shape_109.setTransform(88.4,80.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AKVL1IgFgIQgHgcAfgBIAFABIACACIABABIAAAAIAAAAIAFAJQgCAagRAAQgGAAgHgCgAJTKPIgHgJQgHghAlgCIAGACIACACIABABIABAAIAAAAIAGAKQgCAhgWAAQgGAAgJgEgAHzIQQgCgGgIgKQgJgJAFgdQAFgbA2AMIAHAGQANAJACATQADAUgSAMQgNAJgOAAQgMAAgNgGgAjJFtIgLgaQAKgMAIgQIgCgHIgBAAIgCAAIABABQgFANgHAKQgDAJgGACIAAAAQgUAYhAAPIgTgHQgugSgLgnQALgHAMgJIgBgDIgBgDIgBABQgHAJgLAFQhqA1g9heIABgBIAAAAQACgPgCgOQASgFARgNIAJgIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgPAMgUAFQhWAWgqhIQgJgQADgSQALg5AigrQANgDAPgLIgBgCQgMAJgMADIABgBIgBABQgWAEgYgSQgIgGgDgJQgihaBHhKIACAAIADAAIAAABIABgBIABAAIAAABIABABIAEAEIAAgBQASANAXgQQgGgDgGAHIgQAAQgIgDgGgGIgBgCIgCgCIgBAAIgCgCQgGgHgCgKQgQhPA7g+QAcgeAmAJIACABQAGAFAJgCIgCgDQgDgCgBgEIAAgBIgBgBIgFACIgBABQgOgNABgTQAFhVBZgBIAFAAQAEAIAHAGIgEgLIAEADQAPARAGARIABgCQgCgjgbgJQgVhJBOgmQAlgSAcAOIAAABQABAGAFgBIACgCQAIAGAHAJIAGgBIACgBIgBgCQgKgPgOgHIgEgLIgBgGQAnhIBXAIQAQACAOAFQAQADALAKQAGAFACAFIAaATIAAgCQgRgYgXgOQAKgRAQgNQB2hbCRAlIACABQAQAFAHAOIAAACQAKAYAMASIgCABQgJACgIAEQgJAFgHAGQAEAEAGgDIASgHQAKgHAGAAIAFAAQBHgQA8AzQAZAWAFAgIAFAhIgMAAQgRAGgMAPQgEAEgDAFIAAABIAAAFIAAADIAAACIAAACIABACIABgDIADgFIABgDIAAgCIAFgGQAFgGAIgFQALgHANgCIAAAAQACgCAEAAIABAAQALgBALABQBMAKASBEIAGAPIgLABIgDABIgGABIgHADQgDgFgFgFIgKgJIADADIAIAKIAMAPIAAABIABgBIAJgEIAPgFIAAABIAJgBIAAgBQASgBATAGQANAEANAIIAJAFQAOAKAIANQALARABAVQACASAHALQgLgDgMgBIgDABIgFABIgEACIgBACQATACAXADIADADIAAgCQAGACAEADIABAAIAAAAIAAAAQAEAEADAFQAxBgg5BYQgKgFgMgDIgIgCIgCABIAKADQAHADAFAEQAKAEABAHQATAZABAdQAAAKgBALQgDAUgHAQQgOAegdAPIgCgDIgEACIgCABIABADIAAAAIAAAEIAAACIACgBQAKAYgCAbQgBANgHALIgKAOQgoA2hJACQAGgWgJgdQgHABAEAKQAKAcgSAVQgwA4hGgIIAAAAQADgPgHgUIgCgBIgBALIAAACIAEAHQgBAIgDAGQgPAcgbASQhAAnhEgKIAAAAQgJAAgBgGIgCADIADgOQAEgigagfQAMAYABAmQACAyg0ATQgeAKgdgIQgagGgNgWQAGgagNghIgFgEQAJAbgBAbIgBAGIgCARIgVAUQgnAggyAIIgEAAQhMgVgLgZgAC0BVQAEALABAMIAAACIABABIABAKIABABQAeAFAfABIAAAAIAGAAIAAAAIgDACIAEgBQATgNAQgOIADABIAAgBIgBgBIABAAIAAgBIgBgBIgBAAIAAgBQgFgPgBgPIABAAIAAAAIABgBIAWgKIAXgOIAFgDIADgBIABgBIAPgIIAVgJIABAAIABAAIAAAAIAAACIAAAAIAAAAIgBABIABABIABADQAGAOgBAQIAQgBIAEgEIANgOIACgCIAAADIAAABIADAGIABAAIAjgSIABgBQgBgDABgFIgBgHIADgBIABAAIgBgDIgBgRIACgBIgCAAQgEguADgvIACgWIABAAIAAgCIAHg9IAJg9IAAAAIABgBIAAgBIABgNQABgQgCgRIgCgLIABAAIgKgMIgDgDIgIgKIgDgDIgMgJIgNgIIgDgCQgLgFgLgEQgcgJgfABIgRABQgdADgcAGQghAGgZAUIgPAFIgBAAQgOAFgPgCIgCgEIgDgFQgHgHgIgGQgigZgsAIIguAGQgnAEgbAYIgEAEIgEgEIgBgBIgDgDIgCgCIgCgCQgrglg9AFQgTABgUAEIgeAGQgOADgNAFQggAMgaAXIgQAPIgDAEQgUAXgMAcIgCAHIgHACQgZAGgXANQgRAJgQANQgigMgZAVIgFAEIgFAFIgEAGQgMAPgDARIAAABIAAABIgBAKIAAACQgDAfAHAfQABAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIAAgBIADANIACADIAGAGIABABQAbAUAagIIAHgDIABgBIAAABIABAFIABAJQAEAsgNAtQgCAIABAFIAAAVIABALIAAACIAJAAQArABAqgIIAAAAIADgBIACAAIAigIQAFgBACgCIABACIAAgBIAAgBIACgDIgCAAIAAgGQAlABAmgDIAEAAQBXACBXgCIB8gDIABAAIADAAIAKAAIAPgBIAOAAIAFAAIAEgBIBNgDIADAAIABAHgAFEl4IABACIABgEIgCAAIAAACgAIBm5IACACIAAgBIgCgBIAAAAgADNqaIACADIgBgDIgBAAgAHOF0QgfgCgYgRQgHgtAVgPQAWgPAcACQAggCAPAaQAPAagUAVQgUAVgbAAIgEAAgAnSByQAAAAgBAAQAAAAAAgBQAAAAAAgBQABAAABgBIAAADIgBAAgAnWBVIABgCIAAgBIACAEIgBAAIgCgBgAnWBQIABABIgBABIAAgCgAlwBRIgCgBIAEABIgBAAIgBAAgAEeBBIAAgBIAAgBIAPgJIAHgBIgVAMIgBABIAAgBgAAvAyIAAgEIABAAIAAAEgAGhAPIABAAIgBAAgAmZgEIAAABIAAADIAAgEgAjUgKIAIAAIAAABIgIAAgAAvgNIAAAAIgBAEgAEHgcIAAAAIADgQIACAAQgEAIABAIgABOg+IAAAAIgBACIABgCgAD/g/IgBgBIAAgBIACACgAoahDIAAgBQgDgMgBgNIAAAAIAFAbIgBgBgAAShKIABAAIgBAAgAiMhfIAAAAIABAAIAIgDIAAAAIABAAIAAAAIABADIgBAAIgJABIgBAAIAAAAIgEABIAEgCgAAVhhIABAAIAHAAIACAAIAAAAIgBABgADniRIAAAAIAAACgACPibIAAAAIgBgGIAVAKQgKgBgKgDgABMiaIABgDIgBAEIAAgBgAkWiwIACAWIgGAAQAEgLAAgLgAhZijQAAABABAAQAAABABAAQAAAAABAAQAAAAABgBIAAABIgEABgAmyi1IAAAAIAAAAIABgBIACAFgAnAjHIABAAIgHAFIAGgFgAlLkpIADgDIgGAFIADgCg");
	this.shape_110.setTransform(88.5,80.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#013A7E").s().p("ADpA6IgGgBIgBAAIAAAAIgGgBIABgFIABAAIgBgMQAAgNgEgMIAHgCIAOgGIAEgCIASgHIACgBIABgBIABABIAAAAIAAABIgBAAIgBABIgKAFIAKgDQgDAHACAJQACAIADAFIACACQgTAMgQAPgAmMAQIAAgBIAAgBIACABIACgBIAAAAIADABIAAABIAAgBIAjADIAAAAIAAAHQgVAFgUAIQgCgLABgLgAFvgRQAAgPgIgOIAAgBIgBABIAAgCIAAgBIABAAIADgBIABAAQANgEAOgDIAAABIABAAIADABIABAAIAAABIAAAAIAAAAIgBAFQgCANAFAGIgNAOIgRAAIAAgBg");
	this.shape_111.setTransform(90.7,74);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFF00").s().p("AggC4IgYgBIgHAAIgDAAIgTAAIgxgCIgDAAIgHAAIg0gEIgEAAIgFAAIgCAAIgeACQglACglgCIgIgBIgegDIAAAAIAAgBIgCgHIgBgIIgBgFIgBgEIgBgJIgBgBIAAgBIAAAAIAAgEIAAgEQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABAAIALACIABAAIAVgBIABgBIABAAIACAAQAkgGAlAAIAAAAIAjAAIAlgCIAIAAIAAABQhMAECLgEQC1gFAPABIAAADQgBABAAABQAAAAAAAAQAAABABAAQAAAAABAAIAAAAIABgBIABgCIABgDIABAAIAXABIABAAIAGABIABAAIABAAIABAAIAHAAIABAAIAdACIAbADIAnAFIAHAAIAAABIABADIAAABIAAAHIgBACIAAABIAAADIAAACIgBADIgEAKIgoAGIgGABIgZADIgeADIgBAAIgBAAIgKAAIgZACIgBAAIgDAAIAAAAQg1ACg0AAIgbAAgAk8BwIgBAAIgIgBIAAgEQAEABAEgBQgDgCgFgBIgBgBIAAgCIgBAAIgBgHIAAAAIAAgCIAAgCIAAgEQAAgJADgJQAPADARgDQAZgFAZgCQAigDAjACIAEAAIABABIABABIACAAQgCAQAAAPIAAAAIAAABIAAACIAAABIgFAAQgiAIgiAEQgbADgcAAIgUAAgAhhBoQgDgCgEABQgFgEgDgFIAAgBQAAgQAJgNQATADAVgBIAMAAIAggCIACAAIBXgEIAAABQAEAUAAAUQgQgDgTACIgbACIgdACIgBAAIghABIgwABIACgCgAD/BqIgGgBIAAAAIAAAAIgBAAIgBAAIgCgBIgCAAIgFgBIgCAAIgUgBQgVgBgUABIgHAAIgVACIgCAAIgFABIgEAAIAAgBIADgBIACgBIgCgBIAAAAIgEAAIgBAAIAAAAIAAAAIgBgBQgDgFgCgEIgBgEIAAgEQAAgEACgEIACgDIABABIADABIABAAIAMAAIAAAAIASgBIAIAAIABAAIApgCIAUAAIAJgBIADAAIABAAIAAAAIABAAIABAAIABAAIgCAMQABALAEAGIABAAIgBAHgAEyBGIAAgBIgBgBIAAgBIAAgBQgCgLABgLQACgdASgZIARABIAMgEIAAABIABABQAFAWgHAZQgHAYgSAIQgIADgLAAgAnDApIAAgBQgJgpAaghQAEgBACAEQALAOALAKIAAAAIgOgWQARAJAJASQAMAYgUAUQgNAOgMAAQgNAAgLgPgAkWAiIANgHIACgBIAGgEIACgBQANABAPAAIALgBIAAAAIABAAIAUgDQAggGAcgCIADADQgHAGgGAIQgFAHgBAFIg/ADIAAAAIgMABIgBAAIgdABIgGABIgiACIgFAAIAXgNgADYAmQgbgBgbACIABAAQARgGAJgGIAAgDIAAAAIAbACIAmABIABAAIgBACQgDAGABAEIgCABIgigCgAhNAkIAIgDIAEgCIANgGIADgCIAEgCIAAAAIAFgDIABgBIAFAAIACAAIABAAIANgBIBbgBIADAAIAJAAIABAAIARAAIAAAFQgLAGgHAKIgBABIgCAAIgIAAIgBAAQgzgEg1ADIgBAAIgCAAIgFAAIgFABIghADgAlVAWIAAgBIAAAAQABgMgDgJQgHgagbgPIgBAAIgCgFIAagLIACgCQAVgJAPgKIABABQAXAXAHAeIABAEIgCABIgNAPQgRAQgUANIgBABIgBAAgAEVgNQgfABgfgDIgVgLQADgbAHgZQAMgsAcglIAAAAQALgMAPgDQAUgDAUgBQAkgDAlAFQAYADAYAHQAKADAGAFQAJAJgCAPQgDAVACASIAAAFIgmAGQhBAIg0AnQgHAFgCAHIgFAOQgBgDgGABgAhjgTIAAAAQgMgEgNAAQgygCgxAGIgCgWQAAgRgIgKQgFgHgIgEQgGgDgHgCQAGgZARgUQATgYAVgRQAGABAGgCQBOgWBMAVIACAAIABAAIADADIgCABQgfAegQAlQgLAYgFAbQgCAMAFAFQACADAEACIgKANIgJgEgAB+gWIgBAAIhvgJIgYACIgSADIgEAAIAAAAIAAAAQgJgfAJggQADgLAGgLQAQghAZgXQAIAAAJgDQBNgWBNAQIgUAkIgWArIgJAUQgNAcADAbg");
	this.shape_112.setTransform(83.3,53.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0066FF").s().p("ADlDxIgHgBIAAgBIgCgSIgBgBIgCgJIAAAAIAAgBQgBgGgDgEIAagCIANgBIAPgBIAAAAIACAAIAIAAIAAgBIgIAAIAAAAIgCAAIgBAAIgLAAIgNAAIgHAAIgCgBIgDAAIgBAAIgBAAIgGAAIgBAAIgDABIgKABIgYACIgzADIgHAAIgDAAIgCAAIgLAAIgBAAIgMAAIgEAAIgJAAIgEAAIAAAAQhDAAhBABIgaABIhMACIhAAAIgEAAQg4AAg4gCIgDgBIgBAAIgBAAIgBAAIgDAAIAAAAQgUADgTACIgBAAQgaACgZAAIAAgBIgBAAIgBgEIAAgCIgBAAIAAAAIAAABIAAgBIAIgcIAEgWIACgQIAAgCQAAgYgFgYIAAgBIAAAAIAAgCIgBAAIgBgFIgBABIAAAFQgfAKgegQIAAgBQgJgSgFgUIgBgBIgBgFIgBgFIgBAAQgCgWADgUIAAAAIABgEQAFgTAOgRIAHgIIAEgDQAHgGAHgDIADgBIADgBQARgFAUAJIAGgFIABgBQANgKAOgHQASgKAVgGIAFgBIAJgDIAAAAIADgBIAAgBIAAAAIABgDIgBAAQAGgeAYgXIAGgGQAVgUAbgOQANgHANgFQBPghBUAVQAQADALAMIAFAGIACACIACACIAEADIAAABIAFAEIgCABQABABAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAEADIgDgEIAEgEIAAAAIADgBIABgBQBCgjBOAFQAYACAQAMQAHAGAGAIIAAAAIACADIACACIABADIABAAIAAABIAAABQAUAEATgHIABAAQAEgCADgEIAAAAIABgCQAbgPAggJQAngLAlABQAPABAQADQAYAFAYAKIAFADIAAAAIAFACIAEACQAOAIAJANIADAGIAEALIABADQAGAagEAYIgBAIIACgCQgHAVgEAWIgCALIgBAKQgJA9ACA/IAAACQgCAYACAYQgTAIgPAKIgEADIAAAAIABAAQAVgJAQgKIADATIABAHQgCAFACADIgCABIgjASIAAAAIgDgGIAAgBIAAgDIgCgXIAAgBIAAgCIABAAIAAAAIABgBIgCAAIAAgCIgFAAIAAAAIgBABIgIAAQgHAAgIADIAAAAIgEABIgHADIAAAAIgDABIgTAKIgpAVIAAAAIgEACIgCABIgCACIgHABIgGACIgKAFIgBAAIAAAAIgBAAIgDACIgBAAIgDACIgCABIgBAAIgMAGIgXAIIgCgFIgBAAIABAFIgHACQADACAEAAIAEAZIADAMIgBAFIgugHgAlUDEIAAAAIAAAAIAAAAgAmhg2IAEAJIAAAAIABAEIAAAAIAEAJIAHAUIAAAAIAAABIAFAQIACAMIAAAAIABADIADAOIAAACIAAABIABACIAAABIAAAEIAAAAIABAGIABAIIAAADIAAAAIABAIIAAAAIAAAFIABACIAAACIAAABIAAAIIABAiIAAAMIAAAGIAAABIgCASIgBALQgCALAFAGIABgPIABgIIAAAAIAAgEIAAgBIAAgSIAAAAIABgTIAAgHIAAAGIABABIAAAFIABACIAAAFIACAGIAAABIABADIABAFIAEAMIAAAAIABABIgGgBIAHADIAAABIAAAAIAAAAQAOAFAQABIAGAAIACAAIA4gBIA3AAIADAAIA8ABIADABIAbABIARABIAbAAIAHAAIAYAAICEgBIAAAAIAEAAIAJAAIAPgBIABAAIAKAAIACAAIABAAIAbgDIAagEIAHgBIAJgCQAQgDAQABIAFAAIABgBIABAAIADgBIACgCIAAgBIAAgCIAAAAIgCAAIgDAAIgBAAIgDABIAAgBIADgIIABACIAAgFIABgEIAAgDIAAgIIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIgBgBIACgDIAAAAIAAAAIgBgBIgBgBIgBAAIgBgCIAAgBIgCgDIgEgGIgCgDIAAAAIgCgCIgCgBIAAAAQAHAIADAJIhkgFIgCAAIAAAAIgHAAIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBAAIgYgBIAAAAIAAgBIgBgDIAAgIIgBgCIAAgCIAAAAIAAgFIAAgFIABgCQAAgMAEgLIAEgLIAAAAIAAAAIAAgBIABgCIACgEIAAgBIABAAIAAgBIAAAAIADgFIABgCIACgDIABgCIACgBIAAgBIAEgEIABgBIAAgBIABgBIABAAIAAgBIABAAIAAAAIAEgDIADgBIAEgCIABAAIABAAIAAAAIAEgDIABAAIABAAIABAAIAFgDIAAAAIAFAAIAAAAIABAAIAGAAIABAAIABAAIAQAAIABAAIABAAIABAAIAaAAIAmAAIAFAAIAAAAIAPABIACAAIAAAAIgBgBIgNgCQgggFgiAEIgcABIAAAAIgCAAIgIABIADgBIgGAAQgGAAgFACIgBABIAAAAIgBAAIgBABIgBAAIgEAEIgBABIAAAAIgBAAIgCACIAAABIgBAAIgBABIAAABIgBAAIAAAAIAAAAIgBABIgCACIgDAEIAAAAIgBABIgBABIAAABIAAAAIgCADIgFAHIgBAAIAAAAIgCAEIAAABIgCADIgBABIAAACIgCAEIgCAGQgFANAAAPIAAAIIAAAEIABAJIAAAAIAAABIAAABIAAABIgBAAIgSgBIgFAAIgBAAIgBAAIhbgBIhDAEIgyACIgBAAIgQABIgBAAIAAgBQhFABgTAAIAAAAIgYAAIgYADIgZADIgCAAIAAAAIgCAAIgIAAIgBAAIgPgBIgMgCIgCAAIgCABIAAgEIgBgXIABgLIAAgBIAAgDIAAAAIAAgCIABgCIAAAAIAAgBIABgDIAAgBIAAgCIABgBIAAgBIAAAAIADgFIACgDIAAAAIADgEIABgBIABgCIAEgEIAAgBIABAAIAAAAIADgDIABgBIADgDIABgBIADgDIAAAAIAFgEIACgCIAAAAIAHgFIACgBIABgBIAIgFQANgHAPgEIANgEIAFAAQANABAQgDIAAAAIALgCIAAAAIACAAQAggGAggBIABAAIABAAIAEAAIAOAAIAAAAIADAAIAKAAIAAAAIARABIAAAAIACABIABAAIAIABIABgBIgJgCIAAAAIgRgDIAAAAIgQgBIgSAAIgBAAQghACghAFIgBAAIgBAAIgFABIgEABQgRACgNABIACgBIAAAAIABgBIgQADIgIACIgbAKIgBAAIgIAEIgIAGIgEADIgBAAIgDACIgEAEIgBABIgBAAIAAABIgBAAIAAABIgCABIgHAIIgDAFIAAABIgBAAIAAABIAAAAIgBACIgBAAIAAACIgBAAIAAACIgCAFIgBABIgCAFIAAACIgBADIAAABIgCAGIAAACIAAgCIAAgCIAAgEIAAgBIAAgBIAAAAIgBgJIAAgCIAAgEIgBgHIAAAAIAAgBIAAgCIAAAAIAAgBIgBgCIAAgBIAAgEIAAAAIgCgMIgBgCIAAAAQgHgggOgfIgBAAIgBgEIgBgBIAAAAIgDgFIAAgBIgIgNIAAAAIAFAOgAEHgVIgFAWIAAAAIAAACIAAABIAAABIAAABIAAAAIgBACIAAAEIAAACIAAABIAAAAIAAABIgBAKIAAACIAAABIAAABIAAAMIAAAAIAAABIAAAAIAAACIAAABIAAAIIAAABIACAOIAAADIABACIAAAAIABAIIAAAAIAAAGIABACIAAAAIAAADIAAACIAAACIAAABIABAGIAAACIAAABIAAAFIAAAGIAAACIAAAAIAAADIAAABIAAABIAAACIAAAIIAAACIAAAGIABAGIAAABIAAAEIAAAAIAAAEIABABIABAHIABACIAAgCIAAgBIAAgDIABgDIAAgBIAAgBIAAgCIAAAAIAAgGIAAAAIAAgDIAAgLIAAgFIAAAAIAAgBIAAgCIAAgBIgBgPIgBgFIAAgBIAAgHIAAAAIAAgBIgBgCIAAgCIAAgCIAAgCIAAgBIgBgBIgBgIIAAAAIAAgEIgBgDIAAAAIgBgOIAAgEIAAAAIAAgFIAAgBIAAgBIAAgCIAAgMIAAgBIAAgCIAAAAIAAgPIAAgEIAAgBIABgBIAAgBIAAgBIABgHIADgWIAAgDIAAAAQADgLAJgHQATgQAVgLIABgBIAAAAIAQgHQAlgQAqgCQATgBANgHIACgBIADgCIgJABIgIACIABgEQABgLAEgMQAHgagSgPIgIgFQgMgGgMgEQgygQg2AHQgLgBgKABIgOADIgDABIgGACQgKAEgIAGQgFADgCAEIAAAAIgMAPQgLAOgIAPQgIAPgFARIgBABQgJAfACAeIABAGQAAAAABABQAAAAABAAQAAAAABAAQABgBAAAAIAAgBQADACAJACQAmAJAlgGgAEqCkIAAAAIgBABIABgBIAAAAIAAAAIACgBIAAAAIAGgCIAAAAIABAAIALgGIACgBIAIgEIABgBIACgBIAGgDQAYgOAZgLIAOgFIALgEIADgBIACgBIAXgGIABgBIgMgDIgIAEIgiAOIghAQIAAAAIgCABIgVAMIgCABIgCAAIgHAFIgOAHIAAABIgFADIgBABIgBAAgAEqBNIgCAHIgCAJIAAABIgBABIAAAAIAAABIAAABIgBAGIgBABIAAADIgCAVIAAABIAAAGIABAMIAAAHQABABAAABQAAAAABABQAAAAABAAQABAAAAAAIABgBIgCgUQgBgPACgPIABgMIABgBIAAAAIACAAQAHgOAKgNIABgCIACgCQAIgKAJgJQAWgUAGgdQAJgpgigXQgKAAgJADQAHADALgCQAjAZgOApQgLAegXAWIgBABIgFAEIgBACIgBAAIgCABIAAABIgBAAQgGAFgDAFIgEAFIAAABIgBAAgAiaBoIgDgLIgCgGIAAgCIAAgBIAAgCIAAAAIgBgPIABgHIABgDQACgKAGgJIABgBIABgCQAFgHAIgGIAEgEIABAAIADgCIAHgFIABAAIADgCIABAAIAGgEIABAAIAAAAIAEgCIAAAAIAAAAIAGgDIAAAAIABAAIAAAAIACgBIAFgEIgBAAIgFACIgCAAIAAAAIgBAAIAAABIgDAAIgDACIgBAAIAAAAIgCAAIAAAAIgBAAIgEACIgEACIgCABIgBAAIgKAGIgEAEIgBAAIgEAEQgHAHgFAHIgBABIgDAFIAAAAQgFAKgCAKIAAABIAAACIgBADIAAAEIAAAMIABABIAAAAIAAABIAAACIABAJIABABIACAGQABADADAAIAAAAgAHQhYQAGACABAFQAGAfgYAZIgGAgIgFArIgCAaQgBAPAGAJIACADIAAgBIAAgFQAAgDgCgBIgCgVQABgyANgvQAOgQAFgVQAHgdghgJQAAAGAOAGgAkcBkIAXgBIAmgEQAKgCAIgDQAHgCAFgFIAFAAIABAFIAAADQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIABAAIABAAIAAgBIAAgEIgBgEIAAgCIAAAAIAAgDIAAgCIAAAAIgBgMIAAgRIABAAIABAAIAAgBIgCgBIAAAAIgBAAIgEgBIgFgBQgSgFgUADIgeADIgdADIgWADIgBAAIgdADIAAgBIgBABIgBAAIABAAQgEAFgCAEIAAABIAAAAIgBAFIgBADIAAAFQAAAIACAEQACADADABIABAAIAAAAIAAAAIAAAFIAIAAIABAAIABABIACAAQAYACAZgBgAh9BdQAKADAKAAQALABALAAIAMgBIAhgDIABAAQAtgCAugBIAAAGIABgBIABgFIAFAAIAAAAIgFgCQACgVgHgUIALgBIABAAIAAAAIAOgBIgCgCIgHABIAAAAIgBABIgEABIAAAAIgBgBIgDAAIgGgBIhaADIgCAAIgMAAIgBAAIgTAAIgZABIgJABIgBAAIgEAAIgMABIABgCIgCABIgBABIgBAAIgBAAIABAAIAAAAQgMANACASQAEAJAIADIgBAAIgBAAgADqBdIAAAAIABgBIABgGIAAgBIgBgMIgBgRIAEAAIAAAAIgEAAIAAgFIgCAFIgBAAIgBAAIgBAAIAAAAIgBAAIgDAAIgJgBIgUAAIgpgBIgBAAIgJAAIgOgBIgCAAIgBAAIgCABIgDAAIgJABIgBAAIAAAAIgBAAIACgCIABgBIgBAAIgCABIAAAAIgDADIgBABIgDAHIgBACIgBACIAAAGQABAJALAHIAAAAIABAAIAAABIAAABIABAAIAIAAIACAAIBZABIAAAAIABAAIAHAAIADAAIABAAIABAAIAAAAIADAAIACAAgAEtgaQgNAUgFAUIAAABIgBADIgBAKIAAAEIAAAAIAAABIAAAMIAAABIAAABIAAAFIAAABIABADIAHAGIABAAIADAAIADgBQAHAAAHgEIAAAAQAGgDAEgFQAFgEADgHQARgggKgfIgBgDIAAAAIgEgJIgBAAIAEAJIAAABIAAAAIgMAEQgIgFgLAAIgBACgAnTglQgFAMgCANQgEAUAEAVQAXAeAfgaQAJgIACgMQABgMgCgKQgDgMgIgKIAAgBIgCgBQgLgLgTgHQgJAEgFAKgAkVAGIgHABIAHAAIgHADIgCABQgPAGgNAIIgIAGIgDADIgCACIADgBIAIAAIAAAAIAigBIASgBIARgBIABAAIAMgBIAAAAIAngCIAEAAIAUgBIAAADIABAAIACgDQADAAABgEIgBAAIAJgPIACgEIADgFIgBAAIgDgDIgBAAIgOgCQggAFghACIgBABIAAAAIgLABIgBAAIgdACgAhwAdIAFAAIAAAAIABAAIAJAAIAagBIATAAIABAAIALgBIACAAIBbgDIAKABIAAABIABgBIAGgEIABgBIAEgEIAIgJIAAgBIAAgFIABAAIACAAIABAAIAEAAIABAAIADAAIABAAIAAAAIgEgBIAAAAIgEAAIgBAAIgDAAIgSgBIAAAAIgKAAIgDAAIgMgBQglgBglABIgDAAIgEABIAAAAIgCAAIgEABIgDAAIgBAAIgBAAIgBAAIgCABIgFABIgBABIABAAIgBABIgFACIgFACIgEABIgEACIgBAAIgIADIgDACIgBAAIAAAAIgGADIgBAAIgBABIgBAAIgHADIAAAAIgBAAIgGADIgFACIgBAAIAAAAIgCABIABAAIABAAIAAAAIABAAIABAAIAEAAIABAAIABAAgACnAOIgGABIgHACQgLAEgKAFIgDACIAAAAQAHABAGAAIAKgBIACAAIApgBIAUAAIAMABQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIACgBIAAAAIABgBIABgBQADgFABgGIADAAIAAgBIgCAAIAAgCIAAgCIgCABIgBADIgCgBQgTgCgTAAIgbAAIgBAAIgBAAIgIAAIAIABIABAAIABAAIAAADIgBAAIgBABgAlmAMIAAABIgBAAIgBABIAAAAIgDACIgDACIAAAAIADgCIADgBIAAAAIAAAAIABAAIABgBIABAAIACgBIAAAAIAAAAIADgCQALgFAJgHIAHgGQAKgJAIgMIAAABIABgDIAAAAIACgDIAAABIABgBIABgCIgBgFQgEgRgJgQQgIgMgLgLQgBAAgBABQAAAAAAABQAAAAAAABQAAAAABABQgVAHgUAJIgUALIgEAAIgDABIAAAAIgBABIAAAAQgFADgCAFIAKgEIAEAEQAhAVAAAiIAAAFIABACQAAAAAAABQAAAAABAAQAAABABAAQAAgBABAAgAA4gFIAAAAIAKABIATACIAAAAIADABIACAAIADAAIABAAIABABIABAAIABAAIACAAIABAAIAHABIAAAAIgEgBIgCAAIgBAAIgDgBIAAAAIgDgBIAAAAIgDgBIgCAAIghgGIgDAAQgqgGgrAEIgEAAIgBAAIgDAAIgBAAIgBAAIgBABIAAAAIgBAAIgBAAIAAAAIgBAAIgDAAIgBAAIgBAAIgBAAIgDAAIAAAAIgaABIgCAAIgEAAIAAAAIgCAAIgBAAIADAAIAAAAIAEABIADAAIAUABIAFAAIABAAIAAAAIACAAIABAAIAHAAIAAAAIABAAIAAAAIACAAIAAAAIABAAIAAAAIADAAIABAAIADAAIBKACIAMAAIACAAIABAAgABsgjIAAADIAAADIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIAAgBIAAgBIAAAAIAAgBIAAgCIAAgBIAAgEQACgoAUgkIAGgKQAJgOAHgQQAKgTAGgTIAAgBIABABIgBgBIAAAAIAAAAQgjgQgrAGIgpAFQgYAEgXAFIADgCIgCABIgEACIgCABIAAAAIgJADIAGAAQgHAGgHAHIgBABQgaAegJAhQgHAeAGAhIAAACIgEABIAAAAIgBAAIgBABIABAAIAAAAIAAAAIAFACIAEAAIABAAIAAAAIAEAAIABAAIADgBIACAAIABAAIAEAAQAsgEAtACIAFAAIAsADIAAABIAAABIACAAIACAAIAAgBIAAgBgAiWggIAcACIAFAAIAHABIAKgNQgJgSAHgXQAGgQAHgPIAFgIQASgiAYgcIABgCIACgCIgEAEIgBABIgDgDIAAgBIAAgBIgBAAQglgNgpADIgdABQgaACgYAHIgKAEIAEgDIgEABQgbARgQAYQgRAXgHAcQAIAAAHADQAHADAFAHIABADQAFAIAAAKQAAAQgDAPIADAAIAGgBIAEAAIACAAQAhgDAhABIABAAIACAAIARAAIABAAIAAAAgACri8IABACIABACIADABIABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgCIABABgAmxDpIAAgBIgBgJIgBgLQAuAAAtgGIgCAMQAAAHABAEQgqAFgrACIgCAAgAHACIIABgCIAAACg");
	this.shape_113.setTransform(85.3,54.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("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IACABIAHAAIANAAIAKAAIABAAIACAAIAAAAIAIAAIABABIgJAAIgBAAIgBAAIgOABIgNABIgaACQACAEABAGIAAABIABAAIACAJIAAABIADASIAAABIAHABIAuAHIAFAAIAAAAIABABIAGAAIAAAAQAQgOAUgMIgDgCQgDgFgCgIQgCgKADgHIgKAEIALgGIAAgBIABgBIAAAAIAAAAIAAABIABgBIAVgMIACgCIADgBIADgCIABAAIAogVIAUgKIACgBIABAAIAGgDIAEgBIABAAQAHgDAIAAIAHAAIABgBIAAAAIAFAAIAAACIACAAIAAABIAAAAIgCAAIAAACIAAABIACAXIgCACQgFgGACgNIABgFIABAAIgBAAIAAgBIAAAAIAAgCIgBACIgDgBIgBAAIAAgBQgOADgNAEIAAAAIgEABIAAAAIgBABIAAAAIgBAAIgBAAIgVAJIgPAIIgBABIgDABIgFADIgXANIgWALIgBAAIAAABIgBAAQABAPAFAPIACAEIAAABIgDgCQgPAPgUANIgEABIADgCIAAAAIgGgBIAAAAQgfgBgegFIgBAAIgBgKIgBgBIAAgCQgBgMgEgLIgBgHIgDAAIhNADIgEAAIgFABIgOAAIgPABIgKAAIgDAAIgBAAIh8ADQhXAChXgCIgEAAQgmADglgCIAAAHIACAAIgCACIAAACIAAABIgBgCQgCACgFABIgiAIIgCAAIgDABIAAgBQgqAIgrAAIgJAAIAAgCIgBgMIAAgVQgBgEACgIQAOgxgGgyIgBgFIAAAAIAAgBIgBABQgeANgegWIgBgBIgGgGIgCgDIgDgNIAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQgHgfADgfIAAgCIABgLIAAAAIAAgBQADgSAMgOIAJgLIAFgEQAZgVAiAMQAQgNARgJQAXgNAZgHIAHgBIACgHQAMgcAUgXIADgEIAQgPQAagXAggMQANgFAOgDIAegGQAUgEATgBQA9gGArAmIACACIACACIADADIABABIAEAEIAEgEQAbgYAngEIAugGQAsgIAiAZQAIAFAHAIIADAFIACAEQAPACAOgFIABAAIAPgFQAZgUAhgGQAcgGAdgDIARgCQAfgBAcAKQALADALAGIADACIANAHQAMAIAKALQAFAEADAFIAHgCIAGgCIADgBIA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IABAAIAFAAIATABIABAAIAAgBIAAgBIgBgBIAAAAIgBgJIAAgEIAAgIQABgPAEgNIACgGIACgEIABgCIABgBIABgDIABgBIACgEIAAAAIAAAAIAFgHIACgDIAAAAIABgBIAAgBIABgBIABAAIADgEIACgCIAAgBIABAAIAAAAIAAAAIABgBIAAgBIABAAIAAgBIADgCIAAAAIAAAAIACgBIAEgEIAAAAIACgBIAAAAIAAAAIACgBQAFgCAFAAIAHgBIgDACIAIgBIABAAIABAAIAbgCQAigEAhAFIANADIABABIgBAAIgBAAIgPgBIgBAAIgFAAIglAAIgbAAIgBAAIAAAAIgCAAIgQAAIAAAAIgCAAIgFAAIgBAAIgBAAIgFAAIAAAAIgFADIAAAAIgCAAIAAAAIgFADIAAAAIgBAAIgBAAIgDACIgEABIgDADIgBAAIAAAAIgBABIgBAAIAAABIgBABIgBABIgDAEIgBABIgBABIgBACIgDADIAAACIgDAFIgBAAIAAABIAAAAIAAABIgCAEIgBACIAAABIgBAAIAAAAIgEALQgDALgBAMIAAACIAAAFIAAAFIAAAAIAAACIAAACIABAIIAAADIAAABIAAAAIAYABIABAAIACAAIABAAIAAAAIADAAIABAAIAAAAIABAAIAHAAIABAAIABAAIBkAFQgDgJgHgIIABAAIABABIACACIAAAAIACADIAFAGIABADIAAABIABACIABAAIACABIAAABIAAAAIAAAAIgBADIAAABIAAAAIAAABIABACIAAABIAAABIAAABIAAAIIgBADIAAAEIAAAFIgBgCIgEAIIABABIADgBIABAAIADAAIACAAIAAAAIAAACIgBABIgBACIgDABIgBAAIgCABIgEAAQgQgBgQADIgJACIgHABIgaAEIgcADIgBAAIgBAAIgLAAIgBAAIgOABIgKAAIgCAAIgBAAgADqhZIgCgHIAAgBIAAgEIAAAAIgBgEIAAgBIAAgGIAAgGIAAgCIAAgIIAAgCIAAgBIAAgBIAAgDIAAAAIAAgCIgBgGIAAgFIAAgBIAAgCIAAgGIAAgBIgBgCIAAgCIAAgDIAAAAIAAgCIgBgGIAAAAIgBgIIAAAAIAAgCIgBgDIgBgOIAAgBIgBgIIAAgBIAAgCIAAAAIAAgBIAAAAIAAgMIAAgBIAAgBIAAgCIABgKIAAgBIAAAAIAAgBIAAgCIABgEIAAgCIAAAAIAAgBIAAgBIABgBIAAgCIAAAAIAFgXIAAgCIAAAAQglAGgngJQgJgCgCgCIAAABQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAIAAgGQgDgeAKgfIAAgBQAGgRAIgPQAIgQAKgNIANgPIgBAAQADgEAEgDQAJgGAJgEIAHgCIACgBIAOgDQAKgBALABQA3gHAyAQQAMAEALAGIAIAFQASAPgHAaQgDAMgCALIAAAEIAIgCIAJgBIgDACIgCABQgNAHgUABQgqACgkAQIgQAHIgBAAIAAABQgWALgTAQQgJAHgCALIAAAAIgBADIgDAWIgBAIIAAABIAAABIAAABIAAABIAAAEIgBAPIAAAAIAAACIAAABIAAAMIAAACIAAABIAAABIAAAFIAAAAIABAEIABAOIAAAAIAAADIABAEIAAAAIABAIIAAABIAAABIAAACIABACIAAACIAAACIAAABIAAAAIABAHIAAABIAAAFIABAPIAAABIABACIAAABIAAAAIAAAFIgBALIAAADIAAAAIAAAGIAAAAIAAACIAAABIAAABIAAADIAAADIAAABIgBACIAAgCgADpkYIAEgPQADgHAGgFQA0gmBBgJIAngGIgBgEQgCgTADgVQACgPgJgIQgGgGgKgDQgXgGgZgDQgkgFglACQgUABgTAEQgPACgLAMIgBAAQgbAmgNArQgHAZgCAcIABAGIAAAAQAKADAKABQAfADAfgBIABAAQAFAAABADgAEKhbIABAAIAAAAIAAAAIABgBIAFgDIABgBIANgHIAIgFIABAAIACgBIAVgMIACgBIABAAIAhgQIAigOIAIgEIALADIAAABIgXAGIgCABIgDABIgLAEIgOAFQgZALgZAOIgFADIgCABIgCABIgIAEIgCABIgLAGIAAAAIgBAAIgFACIgBAAIgBABIAAAAIgBAAIgBABIABgBgAEDhlIgBgHIAAgMIAAgGIAAgBIABgVIABgDIAAgBIABgGIAAgBIABgBIAAAAIAAgBIAAgBIACgJIACgHIABAAIgDAQIAAAAIAAAAIAAABIgCAMQgBAPABAPIABAUIAAABIgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBgAi+iaIgCgGIAAgBIgCgJIAAgCIAAgBIAAAAIAAgBIAAgMIAAgEIAAgDIABgCIAAgBQABgKAFgKIABAAIADgFIAAgBQAFgIAHgGIAFgEIAAAAIAFgEIAKgGIABAAIACgBIAEgCIAEgCIAAAAIABAAIACgBIAAAAIAAAAIAEgCIADAAIAAgBIAAAAIABAAIABAAIAFgCIABAAIgFAEIgBABIgBAAIAAAAIgBABIgFADIAAAAIgBAAIgDACIgBAAIAAAAIgGAEIgBAAIgEACIAAAAIgHAFIgDACIgBAAIgEAEQgIAGgFAHIgCACIAAABQgGAJgDAKIAAADIgBAHIAAAPIAAAAIAAACIABABIAAACIABAGIADALQgCAAgCgDgAGdibQgGgJABgPIACgaIAGgrIAGghQAXgZgGgfQgBgFgGgCQgNgGAAgGQAhAJgHAdQgFAVgPAQQgNAwAAAyIABAVQACABABADIAAAFIgBABIgCgDgAlticIgBAAIgCgBIAAAAIgIAAIAIAAIAAAAQAmABAmgEQAigDAigJQgFAEgIADQgHADgKACIgmAEIgYABIgMAAIglgBgAiIifQgLgBgJgCIABAAQgIgEgDgIQgDgSANgNIgBAAIgBAAIACAAIAAAAIACgBIABgBIgBACIAMgBIAEAAIABAAIAJgBIAZgBIATAAIACAAIALAAIACAAIBbgDIAFABIAEAAIABABIAAAAIAAAAIgBAAIgLABQAHAUgDAVIAFACIAAAAIgFAAIgBAFIgBABIAAgGQgtABguACIAAAAIgiADIgMABIgJAAIgMgBgAiUilIgDADIAwgBIAigCIAAAAIAfgBIAbgCQARgDAQAEQAAgUgDgVIABAAIgBAAIhYAEIgBAAIghABIgLABQgVABgUgDQgIAMAAAQIAAABQADAGAFAEIADgBIAEABgAl4iiIAAAAIgBAAIAAAAQgDgBgCgDQgDgFAAgHIABgFIAAgDIACgFIAAAAIAAgBQACgFADgEIgBAAIACAAIAAgBIAAABIAegDIABAAIAWgDIAcgDIAegDQAUgDATAFIAEABIAEABIABAAIAAAAIACABIAAABIAAAAIgCAAIABARIAAAMIAAAAIAAACIABADIAAAAIAAACIAAAEIAAAEIAAABIAAAAIgCAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgDIAAgFIAAAAIAAgCIAAgBIAAgBQgBgPACgQIgBAAIgBAAIgCgBIgEgBQgigCgjADQgZACgZAFQgRADgOgDQgEAJAAAJIAAAEIAAACIABACIAAABIABAGIAAABIABACIABABQAFAAADACIgFABIgDgBgAENiyIAAgBIADgFQAEgFAFgFIABAAIABgBIABgBIABAAIABgCIAGgEIAAgBQAYgWAKgeQAOgqgjgZQgKACgHgDQAIgDAKAAQAjAXgJApQgHAegVAUQgKAJgHAKIgCACIgBACQgKANgIAOQgBgIAEgIgADKiiIgEAAIgBAAIgBAAIAAAAIgDAAIgHAAIgBAAIAAAAIhagBIgBAAIgJAAIAAAAIADgBIAGgBIABAAIAWgCIAHAAQAUgBAUABIAVABIABABIAGAAIACABIABAAIACAAIAAAAIAAAAIABAAIAFABIAAAAIAAABgABUilIAAAAIgBAAQgLgHAAgJIAAgGIAAgCIABgCIAEgHIABgBIACgDIABAAIABgBIACAAIgBABIgCACIAAAAIABAAIABAAIAJgBIACAAIADgBIAAAAIACAAIAPABIAIAAIACAAIAoABIAVAAIAJABIACAAIABAAIABAAIABAAIAAAAIABAAIACgFIABAFIAEAAIAAAAIgEAAIABARIAAAMIAAABIAAgBQgFgGAAgLIABgMIgBAAIAAAAIgBAAIgBAAIgBAAIgCABIgJAAIgVABIgoABIgBAAIgJAAIgRABIgBAAIgMAAIAAAAIgDAAIgCgBIAAgBIgBADQgCAEAAAFIAAADIABAEQABAFADAEIABABIABABIAAAAIABgBIADAAIABAAIACABIgCACIgEABgAECjBIgBAAIgHgGIAAgDIAAgBIgBgFIAAgBIAAgBIAAgMIAAgBIAAAAIABgEIABgKIAAgDIABgBQAEgVANgUIACgCQALAAAHAFIgRgBQgRAagCAeQgBAKABALIAAACIAAABIABAAIABABIAAABIABABIABAAQAKgBAJgDQARgIAHgXQAIgZgGgXIAAgCIgBgBIAAAAIAAgBIgDgJIABAAIAEAJIAAAAIABADQAKAggRAgQgEAHgEAEQgFAFgFADIAAAAQgHADgIABIgDABIgBAAIgCAAgAAgjRgAAkjSIAAgBIABAAIAHgBIABACIgNABgAn5jiQgFgVAEgVQADgNAFgMQAE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QAGgHAIgGIgHAAIAJgDIABAAIADgBIAEgCIACgBIgDACQAXgGAWgDIApgFQAsgGAiAQIABAAIAAAAIAAABIgBgBIAAABQgGATgJATQgHAPgKAPIgGAKQgTAkgCAoIgBADIAAABIAAABIAAACIAAABIAAAAIAAABIAAABIAAgBgAiVkeIgEAAIgcgCIgBAAIgSAAIgBAAIgBAAQghgBghADIgDAAIgEAAIgFABIgDAAQADgPgBgQQAAgKgFgIIgBgDQgFgHgGgDQgHgDgJAAQAIgcAQgXQARgYAagRIAEgBIgEADIALgEQAXgHAagCIAegBQAogDAlANIABAAIABABIgBABIgBABIgCgBQhMgUhNAVQgGACgGgBQgWASgTAXQgQAVgHAZQAHABAGADQAJAEAFAHQAHAKAAASQAAALgEALIAGgBQAxgFAyABQAOAAALAEIAAAAIAKAEIgIgBgABHkhIgBgBIAAgBIgsgDIgEAAQgsgCguAEIgDAAIgCAAIgCAAIgDABIAAAAIgEAAIgBAAIgBAAIgDAAIgFgCIAAAAIgBAAIgBAAIACgBIAAAAIABAAIADgBIAEAAIABAAIAEgBIASgCIAZgDIBtAJIABABIAAABIAAABIgBAAIgCAAgAiKkuQgEgGACgLQAFgcAKgYQARglAfgeIABgBIABgBIAFgEIgCACIgCACQgXAcgTAiIgEAIQgIAPgFAQQgIAXAJASQgEgBgCgDgAICm1IACAAIAAABIgCgBgACOm4IgCgCIgBgCIgBgBIAFACQABAAABABQAAAAAAABQABAAAAABQAAAAgBABIgBAAIgCgBgADOqXIABAAIABAEIgCgEg");
	this.shape_114.setTransform(88.4,80.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AKVL1IgFgIQgHgcAfgBIAFABIACACIABABIAAAAIAAAAIAFAJQgCAagRAAQgGAAgHgCgAJTKPIgHgJQgHghAlgCIAGACIACACIABABIABAAIAAAAIAGAKQgCAhgWAAQgGAAgJgEgAHzIQQgCgGgIgKQgJgJAFgdQAFgbA2AMIAHAGQANAJACATQADAUgSAMQgNAJgOAAQgMAAgNgGgAjJFtIgLgaQAKgMAIgQIgCgHIgBAAIgCAAIABABQgFANgHAKQgDAJgGACIAAAAQgUAYhAAPIgTgHQgugSgLgnQALgHAMgJIgBgDIgBgDIgBABQgHAJgLAFQhqA1g9heIABgBIAAAAQACgPgCgOQASgFARgNIAJgIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgPAMgUAFQhWAWgqhIQgJgQADgSQALg5AigrQANgDAPgLIgBgCQgMAJgMADIABgBIgBABQgWAEgYgSQgIgGgDgJQgihaBHhKIACAAIADAAIAAABIABgBIABAAIAAABIABABIAEAEIAAgBQASANAXgQQgGgDgGAHIgQAAQgIgDgGgGIgBgCIgCgCIgBAAIgCgCQgGgHgCgKQgQhPA7g+QAcgeAmAJIACABQAGAFAJgCIgCgDQgDgCgBgEIAAgBIgBgBIgFACIgBABQgOgNABgTQAFhVBZgBIAFAAQAEAIAHAGIgEgLIAEADQAPARAGARIABgCQgCgjgbgJQgVhJBOgmQAlgSAcAOIAAABQABAGAFgBIACgCQAIAGAHAJIAGgBIACgBIgBgCQgKgPgOgHIgEgLIgBgGQAnhIBXAIQAQACAOAFQAQADALAKQAGAFACAFIAaATIAAgCQgRgYgXgOQAKgRAQgNQB2hbCRAlIACABQAQAFAHAOIAAACQAKAYAMASIgCABQgJACgIAEQgJAFgHAGQAEAEAGgDIASgHQAKgHAGAAIAFAAQBHgQA8AzQAZAWAFAgIAFAhIgMAAQgRAGgMAPQgEAEgDAFIAAABIAAAFIAAADIAAAEIABACIAEgIIABgDIAAgCIAFgGQAFgGAIgFQALgHANgCIAAAAQACgCAEAAIABAAQALgBALABQBMAKASBEIAGAPIgLABIgDABIgGABIgHADQgDgFgFgFQgKgKgMgIIgNgIIgDgBQgLgGgLgEQgcgJgfABIgRABQgdADgcAGQghAHgZAUIgPAFIgBAAQgOAFgPgDIgCgDIgDgFQgHgIgIgGQgigYgsAIIguAGQgnAEgbAYIgEAEIgEgEIgBgBIgDgEIgCgCIgCgBQgrgmg9AGQgTABgUADIgeAHQgOADgNAFQggAMgaAWIgQAQIgDADQgUAXgMAdIgCAGIgHACQgZAHgXAMQgRAKgQANQgigMgZAVIgFAEIgJAKQgMAPgDASIAAAAIAAABIgBALIAAABQgDAgAHAeQABABAAAAQAAAAAAAAQABABAAAAQAAAAABgBIAAAAIADANIACADIAGAFIABABQAeAXAegOIABAAIAAABIABAEQAGAygOAxQgCAJABAEIAAAVIABALIAAACIAJABQArAAAqgIIAAABIADgBIACgBIAigIQAFAAACgCIABABIAAAAIAAgCIACgDIgCABIAAgHQAlACAmgDIAEAAQBXABBXgBIB8gDIABAAIADAAIAKgBIAPAAIAOgBIAFAAIAEAAIBNgDIADgBIABAHQAEAMABAMIAAABIABABIABALIABAAQAeAFAfABIAAAAIAGAAIAAAAIgDADIAEgBQATgNAQgPIADACIAAgBIgCgEQgFgPgBgPIABgBIAAAAIABAAIAWgLIAXgNIAFgDIADgCIABAAIAPgIIAVgJIACABIgBACIABABIABACQAGAPgBAQIAQgCIAEgDIANgPIACgCIAAADIAAABIADAGIABAAIAjgSIABADIABgDIABgQIABAAIgBgEIgBgRIACgCIgCABQgEguADgwQAEgqAGgqIAJg9IAAAAIABgDQADgWgDgXIgCgLIAKgFIAPgFIAAABIAJgBIAAgBQASgBATAGQANAEANAIIAJAFQAOAKAIANQALARABAVQACASAHALQgLgDgMgBIgDABIgFABIgEACIgBACQATACAXADIADADIAAgCQAGACAEADIABAAIAAAAIAAAAQAEAEADAFQAxBgg5BYQgKgFgMgDIgIgCIgCABIAKADQAHADAFAEQAKAEABAHQATAZABAdQAAAKgBALQgDAUgHAQQgOAegdAPIgCgDIgEACIgCABIABADIAAAAIAAAEIAAACIACgBQAKAYgCAbQgBANgHALIgKAOQgoA2hJACQAGgWgJgdQgHABAEAKQAKAcgSAVQgwA4hGgIIAAAAQADgPgHgUIgCgBIgBALIAAACIAEAHQgBAIgDAGQgPAcgbASQhAAnhEgKIAAAAQgJAAgBgGIgCADIADgOQAEgigagfQAMAYABAmQACAyg0ATQgeAKgdgIQgagGgNgWQAGgagNghIgFgEQAJAbgBAbIgBAGIgCARIgVAUQgnAggyAIIgEAAQhMgVgLgZgAD8CAIAEgBIgBgBIgDACgAl5BqIAAABIADgBIACgBgAEjBjIADACIAAgBIgBgBgAIBm5IACACIAAgBIgCgBIAAAAgADNqaIACADIgBgDIgBAAgAHOF0QgfgCgYgRQgHgtAVgPQAWgPAcACQAggCAPAaQAPAagUAVQgUAVgbAAIgEAAgAnSgWQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBABgBIAAAEIgBAAgAoajNIAAAAQgDgNgBgMIAAAAIAFAaIgBgBgAmyk/IAAAAIAAAAIABAAIACAFgAnAlQIABgBIgHAFIAGgEgAlLmzIADgDIgGAGIADgDg");
	this.shape_115.setTransform(88.5,80.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("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AIgCACIgBAAIgEADIAEAFIgFgDQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAIABgCIgEgEIgBAAIgEgEIgBgCIgCgBIgGgGQgKgMgQgEQhVgUhOAgQgOAGgNAHQgaAOgWAUIgDADIgDADQgXAXgGAdIAAAAIAAADIgBAAIAAACIgDABIAAgBIgJADIgFACQgUAFgTAKQgOAHgMAKIgBABIgBABIgGAEQgTgIgRAFIgEABIgCABQgIADgGAFIgEAEIgGAGIgBABQgOARgGATIgBAEIAAAAQgDAWADAVQABANADANIAAAAIABABIgFgbIABAGIACAFIAAABQAGAUAJASIAAAAQAZAPAbgGIAIgDIAAgFIABAAIACAFIAAgBIABACIgBAAIAAABIADAPQADARgBAQIAAACIgBAPIgFAXIgIAcIAAABIABAAIAAgBIAAgBIAAAAIAAACIAAABIgBACIACACIABgBIAAAAIAAABQAaABAZgCIACgBQATgBATgDIAAAAIADAAIABAAIACgBIAAAAIACABIACAAQA3ACA4AAIAFAAIA/AAIBNgBIAagBQBCgCBBABIABAAIADAAIAKAAIAEAAIALAAIABAAIALAAIACAAIADAAIAHgBIA0gCIAXgDIALgBIADAAIABAAIAFAAIACAAIABAAIADAAIACAAIAHAAIANAAIAKABIABAAIACAAIAAAAIAIAAIABAAIgJABIgBAAIgBAAIgOABIgNABIgaABQACAFABAFIAAABIABABIACAJIAAAAIADATIAAABIAHABIAuAGIAFABIAAAAIABAAIAEABIAAAAIACAAIAAAAIABgBQAQgOATgLIgDgDQgDgEgCgIQgCgKADgIIgKAFIALgHIAAAAIABgBIAAAAIAAgBIAAABIABAAIAVgNIACgBIADgCIADgBIABgBIAogVIAUgJIACgBIABAAIAGgDIAEgCIABAAQAHgCAIgBIAHABIABgBIAAAAIAFgBIAAACIACABIAAAAIAAABIgCAAIAAABIAAABIACAXIgCACQgFgGACgNIABgEIABgBIgBAAIAAAAIAAgBIAAgBIgBABIgDgBIgBAAIAAAAQgOACgNAEIAAAAIgEACIAAAAIgBAAIAAAAIgBAAIgBABIgVAIIgPAJIgBAAIgDACIgFADIgXANIgWAKIgBABIAAA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EIABAAIACgEIAAAAIAAgBIAFgHIACgDIAAAAIABAAIAAgBIABgCIABAAIADgEIACgCIAAAAIABAAIAAAAIAAgBIABAAIAAgBIABgBIAAAAIADgCIAAgBIAAAAIACgBIAEgDIAAgBIACAAIAAgBIAAAAIACAAQAFgCAFgBIAHAAIgDACIAIgBIABAAIABAAIAbgCQAigFAhAGIANADIABAAIgBAAIgBAAIgPAAIgBAAIgFAAIglgBIgbAAIgBAAIAAAAIgCAAIgQABIAAAAIgCAAIgFAAIgBAAIgBAAIgFAAIAAgBIgFADIAAAAIgCABIAAAAIgFACIAAAAIgBAAIgBABIgDABIgEACIgDACIgBAAIAAABIgBAAIgBABIAAAAIgBABIgBABIgDAEIgBABIgBACIgBABIgDAEIAAABIgDAFIgBABIAAAAIAAABIAAAAIgCAEIgBACIAAABIgBABIAAAAIgEALIgCALIgCALIAAADIAAAEIAAAFIAAAAIAAACIAAACIABAJIAAADIAAAAIAAAAIAYABIABAAIACAAIABAAIAAAAIADAAIABAAIAAAAIABAAIAHABIABAAIABAAIBkAFIgDgHIgEgHIgDgEIABAAIABACIABAAIABACIAAAAIACACIAEAFIABACIABADIAAAAIABACIABAAIACACIAAAAIAAABIAAAAIgBACIAAAAIAAABIAAABIABABIAAACIAAABIAAAAIAAAJIgBADIAAADIAAAFIgBgCIgEAJIABAAIADAAIABAAIADgBIACAAIAAABIAAABIgBACIgBACIgDABIgBAAIgCAAIgEAAQgQAAgQADIgJABIgHACIgaADIgcADIgBAAIgBAAIgLABIgBAAIgOAAIgKAAIgCAAIgBAAgADqAvIgCgHIAAgBIAAgDIAAAAIgBgFIAAAAIAAgHIAAgGIAAgCIAAgHIAAgDIAAAAIAAgCIAAgDIAAAAIAAgBIgBgGIAAgBIAAgDIAAgCIAAgCIAAgGIAAAAIgBgDIAAgCIAAgCIAAAAIAAgCIgBgGIAAAAIgBgJIAAAAIAAgCIgBgCIgBgPIAAAAIgBgJIAAgBIAAgBIAAAAIAAgBIAAgBIAAgMIAAAAIAAgBIAAgDIABgJIAAgBIAAgBIAAAAIAAgDIABgEIAAgBIAAgBIAAAAIAAgBIABgCIAAgBIAAgBIAFgWIAAgCIAAAAQglAFgngIQgJgCgCgDIAAABQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBIAAgGQgDgeAKgeIAAgCQAGgRAIgPQAIgPAKgNIANgPIgBAAQADgFAEgDQAJgGAJgEIAHgCIACgBIAOgCQAKgCALABQA3gHAyARQAMAEALAGIAIAFQASAOgHAbQgDALgCALIAAAEIAIgBIAJgCIgDACIgCABQgNAHgUABQgqADgkAPIgQAIIgBAAIAAAAQgWALgTAQQgJAHgCALIAAAAIgBADIgDAXIgBAHIAAABIAAABIAAABIAAACIAAAEIgBAOIAAABIAAACIAAABIAAALIAAACIAAABIAAABIAAAFIAAABIABADIABAOIAAAAIAAADIABAFIAAAAIABAIIAAABIAAAAIAAACIABACIAAACIAAACIAAABIAAABIABAGIAAABIAAAFIAAABIABANIAAACIABABIAAACIAAAAIAAAEIgBALIAAADIAAABIAAAGIAAAAIAAABIAAACIAAABIAAADIAAACIAAACIgBACIAAgDgADpiPIAEgOQADgHAGgFQA0gnBBgIIAngHIgBgEQgCgSADgVQACgPgJgJQgGgFgKgDQgXgHgZgDQgkgFglADQgUABgTADQgPADgLAMIgBAAQgbAlgNAsQgHAZgCAbIABAGIAAAAQAKAEAKABQAfADAfgBIABAAQAFAAABACgAEKAuIABgBIAAAAIAAAAIABgBIAFgDIABAAIANgIIAIgEIABgBIACgBIAVgLIACgBIABAAIAhgPIAigOIAIgEIALADIAAAAIgXAHIgCAAIgDABIgLAEIgOAFQgZAKgZAPIgFADIgCABIgCABIgIAEIgCABIgLAFIAAAAIgBABIgFACIgBAAIgBABIAAAAIgBAAIgBAAIABAAgAEDAkIgBgIIAAgMIAAgGIAAAAIABgPIAAgGIABgDIAAAAIABgHIAAAAIABgBIAAgBIAAgBIAAgBIACgIIACgHIABgBIgDAQIAAABIAAAAIAAABIgCAMIAAAEQgBALABANIABAUIAAABIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAgAGkARIAEgDQAQgLATgHQgCgYACgYIAAgCQgBgZABgYQABgZACgZIADgZIACgLIABgKQAEgXAIgUIgDABIACgIIAAgBIABgKQABgTgFgTIAAgDIgEgLIgBgCIgDgEIAAgBIADAEIAKALIgBAAIACAMQACAQgBAQIgBANIAAACIgBABIAAAAIgJA9IgHA8IgBACIgCAWQgDAwAEAuIACgBIgCABIABARIABADIgBABIgDAAIgCgSQgRAJgVAKIAAAAgAi+gRIgCgGIAAgBIgCgJIAAgCIAAgBIAAAAIAAgBIAAgJIAAgDIAAgDIAAgDIABgDIAAAAQABgLAFgJIABgBIADgFIAAgBQAFgHAHgGIAFgEIAAgBIAFgDIAKgGIABgBIACgBIAEgCIAEgBIAAgBIABAAIACgBIAAAAIAAAAIAEgBIADgBIAAAAIAAAAIABAAIABgBIAFgBIABAAIgFADIgBABIgBABIAAAAIgBAAIgFADIAAAAIgBABIgDABIgBABIAAAAIgGADIgBABIgEACIAAAAIgHAEIgDACIgBABIgEADQgIAHgFAHIgCACIAAAAQgGAJgDAKIAAADIgBAIIgBAEIABAKIAAABIAAACIABABIAAACIABAGIADALQgCAAgCgEgAGdgSQgGgJABgPIACgaIACgRIAEgZIAGgiQAXgYgGgfQgBgGgGgCQgNgFAAgGQAhAJgHAcQgFAWgPAQQgHAbgDAcQgDAVAAAVIABAVQACACABADIAAAEIgBABIgCgDgAltgTIgBAAIgCAAIAAAAIgIgBIAIAAIAAAAQAmACAmgEQAigEAigIQgFAEgIADQgHADgKABIgmAEIgYABIgMABIglgCgAiIgVQgLgBgJgDIABAAQgIgDgDgIIAAgKQABgMAJgJIgBAAIgBAAIACgBIAAAAIACgBIABAAIgBABIAMgBIAEAAIABAAIAJAAIAZgBIATgBIACAAIALAAIACAAQAvAAAsgCIAFAAIAEABIABAAIAAAAIAAABIgBAAIgLAAQADALACALQAAAKgBAKIAFABIAAABIgFAAIgBAFIgBAAIAAgFQgtAAguADIAAAAIgiACIgMABIgJAAIgMAAgAiUgbIgDACIAwgBIAigBIAAAAIAfgCIAbgCQARgCAQADIgBgTIgCgVIABgBIgBAAIhYAEIgBAAIghACIgLAAQgVABgUgDQgGAJgCAMIAAAIIAAABQADAFAFAEIADAAIAEABgAl3gYIgBAAIgBAAIAAgBIAAAAQgDgBgCgDQgDgEAAgIIABgEIAAgEIACgEIAAgBIAAAAQACgFADgEIgBAAIACAAIAAgBIAAABIAegDIABgBIAWgCIAcgEIAegDQAUgCATAEIAEABIAEACIABgBIAAABIACABIAAAAIAAABIgCAAIABARIAAAGIAAAFIAAABIAAABIABAEIAAAAIAAABIAAAEIAAAEIAAABIAAAAIgCABQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCIAAgGIAAAAIAAgCIAAgBIAAAAIAAgIIABgXIgBAAIgBgBIgCgBIgEAAQgigCgjADQgZACgZAFQgRADgOgDQgEAJAAAJIAAADIAAADIABABIAAABIABAGIAAABIABACIABABIAFABIADACIgEAAIgDAAgAENgpIAAAAIADgFQAEgFAFgFIABgBIABAAIABgBIABgBIABgBIACgBIAEgEIAAAAIAEgEQAVgVAJgcQAOgpgjgaQgKACgHgDQAIgCAKAAQAjAXgJApQgHAdgVAVIgDACIgNAPIgBABIgCADIgBABQgKANgIAPQgBgJAEgIgADKgZIgEAAIgBAAIgBAAIAAAAIgDAAIgHAAIAAAAIgBAAIAAAAIhagBIgBAAIgJAAIAAAAIADAAIAGgBIABAAIAWgCIAHgBQAUgBAUACIAVABIABAAIAAAAIAGABIACAAIABAAIACAAIAAAAIAAABIABAAIAFABIAAAAIAAAAgABUgbIAAAAIgBgBQgLgHAAgJIAAgFIAAgCIAAAAIABgDIAEgGIABgBIACgDIABgBIABgBIACAAIgBACIgCACIAAAAIABAAIABAAIAJgBIACgBIADAAIAAAAIACAAIAPAAIAIAAIACAAIAoABIAVABIAJAAIACAAIABAAIABAAIABAAIAAAAIABAAIACgFIABAFIAEAAIAAABIgEAAIABARIAAALIAAABIAAAAQgFgGAAgLIABgMIgBAAIAAAAIgBAAIgBAAIgBAAIgCAAIgJAAIgVABIgoACIgBAAIgJAAIgRAAIgBAAIgMABIAAAAIgDgBIgCgBIAAAAIgBACIgCAGIAAADIAAAEIABAEQABAEADAFIABABIABAAIAAAAIABAAIADgBIABAAIACACIgCABIgEABgAECg4IgBAAIgHgFIAAgDIAAgBIgBgFIAAgBIAAgBIAAgMIAAgBIAAgBIABgEIABgKIAAgCIABgCQAEgVANgUIACgCQALABAHAFIgRgBQgRAagCAdQgBALABALIAAABIAAABIABABIABAAIAAABIABABIABAAQAKAAAJgEQARgIAHgXQAIgZgGgXIAAgBIgBgBIAAgBIAAAAIgDgKIABAAIAEAJIAAABIABADQAKAggRAgQgEAGgEAFQgFAFgFACIAAAAQgHAEgIABIgDAAIgBAAIgCAAgAAghIgAAkhJIAAAAIABAAIAHgCIABADIgNAAgAn5hYQgFgWAEgVQADgMAFgMQACgFADgEQAEgDAEgCIALAEQAHADAGAEIAGAGIACACIAAAAQAIAKADANQACAKgBAMQgBAMgJAIQgIAHgIADQgGADgGAAQgOAAgMgQgAnmimIgBADQgYAgAJAoIAAABQAQAWAUgLQAGgEAGgGQAVgUgNgZQgGgMgJgIIgLgHIAMARIACAFIAAAAIgCgCQgKgKgJgMIAAgBQgCgCgDAAIgCAAgAllhUIADgCIAJgGQAMgJAPgGIACAAIAHgDIgGgBIAGAAIAegDIAAAAIALgBIAAAAIACAAQAggEAhgEIAOABIAAABQgcACggAGIgTACIgBABIgBAAIgLAAQgOABgOgBIgCABIgGAEIgBABIgNAHIgYANIAGgBIAhgCIAGAAIAegCIAAAAIAMAAIABAAIA+gDQABgFAFgHQAHgIAHgGIAAAAIgDAGIgCAEIgJAOIABABQAAADgEABIgCACIAAABIgBgDIgUABIgEAAIgmACIgBAAIgLAAIgBAAIgRABIgTABIghACIAAAAIgJAAIgDAAIACgCgAiRhYIgEAAIgCAAIgBAAIAAAAIgBAAIgBAAIACgBIAAAAIABgBIAFgCIAHgCIAAgBIABAAIAGgCIABgBIACgBIAAAAIAHgCIAAgBIABAAIADgBIAIgDIAAgBIAFgBIADgCIAFgCIAFgCIABAAIAAgBIAAAAIAFgCIACAAIACAAIAAAAIACgBIADAAIADgBIADgBIAAAAIADAAIADgBQAmgBAkACIANAAIACAAIAKABIAAAAIATABIACAAIACABIAEAAIAAAAIADAAIAAABIAAAAIgEAAIAAAAIgEAAIgCAAIgBAAIgBAAIgSAAIAAAAIgKAAIgCAAIhbABIgNABIgCAAIgCAAIgFAAIgBABIgEADIgBAAIgEACIgDACIgNAGIgEACIgIADIAAAAIgBAAIAAABIgIACIgBAAIAAABIgEABIAEgBIAAAAIABAAIAJgBIABAAIAhgDIAFAAIAFAAIABAAIACAAQA1gDAzADIABAAIAHABIACAAIABgBQAHgLAMgFIgBABIgIAJIgEADIgBABIgFAEIgBABIgBAAIABgCIAAAAIgCAAIgHABIgBAAIhbADIgCAAIgLAAIgCAAIgTABIgZAAIgKAAIgBAAIAAAAIgEABIgCAAgABjhZIAAgBIADgBQAKgGALgDIAHgCIAFgCIACAAIAAAAQgJAGgRAGIAAAAQAbgDAbABIAhADQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgMgBIgUgBIgpABIgDAAIgJABIgFAAIgIAAgADIhcQAAgFACgFIACgDIgCAAIglAAIgbgCIgBAAIAAAAIgCAAIgHgBIAHgBIACAAIABAAIAbAAQATABASACIACAAIACgDIABAAIAAACIAAABIACABIAAAAIgCAAQgBAGgEAGIAAABIgBAAgAmOhkIAEgCIACgBIABgBIABAAIABgBIAAAAIABgBIAAAAQAVgNARgSIANgOIABgBIgCAEIABAAIgCADIAAgCQgIAMgKAJIgHAHQgJAHgLAGIgCABIgBABIAAAAIgBAAIgCABIgBAAIAAABIAAAAIgBAAIgCABIgDABIgBAAIAAAAgAmMhvIAAgCIAAgEQgBgkghgUIACAAQAbAPAHAaQACAKAAAMIAAAAIgBABIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBgABEh2IgBAAIgCgBIAAAAIgBAAIgCAAIAAAAIgEgBIgCAAIgDAAIAAAAIgSgCIgKgBIgBAAIgCAAIgNAAIhKgCIgDAAIAAAAIgDAAIgBAAIAAAAIgBAAIgBAAIgBAAIAAAAIgBAAIgGgBIgCAAIgBAAIgBAAIAAAAIgFAAIgVgBIgCAAIgEAAIgBAAIgCAAIAAgBIACAAIABAAIADAAIADAAIAagBIAAAAIACAAIACAAIABAAIAAAAIAEAAIAAAAIABAAIABAAIAAAAIABAAIABAAIABAAIABAAIACAAIABAAIAEAAQAtgEApAFIADABIAgAFIADABIADABIAAAAIACAAIABAAIADABIAAAAIADABIAEABIgBABIgHgCgABNiQIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIgBgCIAAgEQgCgbAMgcIAKgUIAVgrIAUgkQhNgQhMAWQgJACgIABQgZAXgRAhQgFALgEALQgJAfAJAgQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAgBQgGghAIgdQAIgiAbgeIABgBQAGgHAIgFIgHgBIAJgCIABgBIADAAIAEgDIACgBIgDADQAXgGAWgEIApgEQAsgHAiARIABAAIAAAAIAAAAIgBAAIAAAAQgGAUgJATQgHAPgKAPIgGAKQgTAjgCAoIgBADIAAACIAAABIAAACIAAAAIAAABIAAABIAAAAIAAAAgAiViUIgEgBIgcgBIgBAAIgSgBIgBAAIgBAAQghAAghACIgDABIgEAAIgFAAIgDABQADgQgBgPQAAgKgFgJIgBgCQgFgHgGgEQgHgDgJABQAIgdAQgWQARgYAagSIAEgBIgEADIALgDQAXgIAagBIAegCQAogDAlANIABABIABABIgBABIgBAAIgCAAQhMgVhNAWQgGACgGgBQgWARgTAYQgQAUgHAZQAHACAGACQAJAEAFAHQAHALAAARQAAAMgEALIAGgBQAxgGAyACQAOAAALAEIAAAAIAKAEIgIgBgAlQiYIAAgEQgIgegXgXIAAgBQgPAJgVAKIgDABIgaAMIgBAAIAAAAIAAAAIgLAFQADgFAFgEIAAAAIABAAIAAAAIACgCIAFAAIAUgKQAUgKAUgHQAAAAgBgBQAAgBAAAAQAAAAABgBQAAAAABAAQAMALAHAMQAKAPAEASIABAEIgBADIgBAAIgBgBgABHiYIgBAAIAAgBIgsgEIgEAAQgsgCguAEIgDAAIgCABIgCAAIgDAAIAAAAIgEAAIgBAAIgBAAIgDAAIgFgBIAAAAIgBAAIgBgBIACAAIAAAAIABAAIADgBIAEgBIABAAIAEgBIASgCIAZgCIBtAJIABAAIAAABIAAABIgBABIgCgBgAiKilQgEgGACgLQAFgbAKgYQARgmAfgdIABgCIABgBIAFgEIgCADIgCACQgXAbgTAiIgEAJQgIAPgFAQQgIAWAJATQgEgCgCgDgACOkvIgCgBIgBgCIgBgCIAFADQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAIgBABIgCgCgAFFl1IAAgCIACAAIgBAEIgBgCgAICm1IACAAIAAABIgCgBgADOqXIABAAIABAEIgCgEg");
	this.shape_116.setTransform(88.4,80.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("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QhOgFhDAjIgBAAIgCACIgBAAIgEADIAEAFIgFgDQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAIABgCIgEgEIgBAAIgEgEIgBgCIgCgBIgGgGQgKgMgQgEQhVgUhOAgQgOAGgNAHQgaAOgWAUIgDADIgDADQgXAXgGAdIAAAAIAAADIgBAAIAAACIgDABIAAgBIgJADIgFACQgUAFgTAKQgOAHgMAKIgBABIgBABIgGAEQgTgIgRAFIgEABIgCABQgIADgGAFIgEAEIgGAGIgBABQgOARgGATIgBAEIAAAAQgDAWADAVQABANADANIAAAAIABABIgFgbIABAGIACAFIAAABQAGAUAJASIAAAAQAZAPAbgGIAIgDIAAgFIABAAIACAFIAAgBIABACIgBAAIAAABIADAPQADARgBAQIAAACIgBAPIgFAXIgIAcIAAABIABAAIAAgBIAAgBIAAAAIAAACIAAABIgBACIACACIABgBIAAAAIAAABQAaABAZgCIACgBQATgBATgDIAAAAIADAAIABAAIACgBIAAAAIACABIACAAQA3ACA4AAIAFAAIA/AAIBNgBIAagBQBCgCBBABIABAAIADAAIAKAAIAEAAIALAAIABAAIALAAIACAAIADAAIAHgBIA0gCIAXgDIALgBIADAAIABAAIAFAAIACAAIABAAIADAAIACAAIAHAAIANAAIAKABIABAAIACAAIAAAAIAIAAIABAAIgJABIgBAAIgBAAIgOABIgNABIgaABQACAFABAFIAAABIABABIACAJIAAAAIADATIAAABIAHABIAuAGIAFABIAAAAIABAAIAEABIAAAAIACAAIAAAAIABgBQAQgOATgLIgDgDQgDgEgCgIQgCgKADgIIgKAFIALgHIAAAAIABgBIAAAAIAAgBIAAABIABAAIAVgNIACgBIADgCIADgBIABgBIAogVIAUgJIACgBIABAAIAGgDIAEgCIABAAQAHgCAIgBIAHABIABgBIAAAAIAFgBIAAACIACABIAAAAIAAABIgCAAIAAABIAAABIACAXIgCACQgFgGACgNIABgEIABgBIgBAAIAAAAIAAgBIAAgBIgBABIgDgBIgBAAIAAAAQgOACgNAEIAAAAIgEACIAAAAIgBAAIAAAAIgBAAIgBABIgVAIIgPAJIgBAAIgDACIgFADIgXANI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ABgBIABgBIABgEIABAAIACgEIAAAAIAAgBIAFgHIACgDIAAAAIABAAIAAgBIABgCIABAAIADgEIACgCIAAAAIABAAIAAAAIAAgBIABAAIAAgBIABgBIAAAAIADgCIAAgBIAAAAIACgBIAEgDIAAgBIACAAIAAgBIAAAAIACAAQAFgCAFgBIAHAAIgDACIAIgBIABAAIABAAIAbgCQAigFAhAGIANADIABAAIgBAAIgBAAIgPAAIgBAAIgFAAIglgBIgbAAIgBAAIAAAAIgCAAIgQABIAAAAIgCAAIgFAAIgBAAIgBAAIgFAAIAAgBIgFADIAAAAIgCABIAAAAIgFACIAAAAIgBAAIgBABIgDABIgEACIgDACIgBAAIAAABIgBAAIgBABIAAAAIgBABIgBABIgDAEIgBABIgBACIgBABIgDAEIAAABIgDAFIgBABIAAAAIAAABIAAAAIgCAEIgBACIAAABIgBABIAAAAIgEALIgCALIgCALIAAADIAAAEIAAAFIAAAAIAAACIAAACIABAJIAAADIAAAAIAAAAIAYABIABAAIACAAIABAAIAAAAIADAAIABAAIAAAAIABAAIAHABIABAAIABAAIBkAFIgDgHIgEgHIgDgEIABAAIABACIABAAIABACIAAAAIACACIAEAFIABACIABADIAAAAIABACIABAAIACACIAAAAIAAABIAAAAIgBACIAAAAIAAABIAAABIABABIAAACIAAABIAAAAIAAAJIgBADIAAADIAAAFIgBgCIgEAJIABAAIADAAIABAAIADgBIACAAIAAABIAAABIgBACIgBACIgDABIgBAAIgCAAIgEAAQgQAAgQADIgJABIgHACIgaADIgcADIgBAAIgBAAIgLABIgBAAIgOAAIgKAAIgCAAIgBAAgADqAvIgCgHIAAgBIAAgDIAAAAIgBgFIAAAAIAAgHIAAgGIAAgCIAAgHIAAgDIAAAAIAAgCIAAgDIAAAAIAAgBIgBgGIAAgBIAAgDIAAgCIAAgCIAAgGIAAAAIgBgDIAAgCIAAgCIAAAAIAAgCIgBgGIAAAAIgBgJIAAAAIAAgCIgBgCIgBgPIAAAAIgBgJIAAgBIAAgBIAAAAIAAgBIAAgBIAAgMIAAAAIAAgBIAAgDIABgJIAAgBIAAgBIAAAAIAAgDIABgEIAAgBIAAgBIAAAAIAAgBIABgCIAAgBIAAgBIAFgWIAAgCIAAAAQglAFgngIQgJgCgCgDIAAABQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBIAAgGQgDgeAKgeIAAgCQAGgRAIgPQAIgPAKgNIANgPIgBAAQADgFAEgDQAJgGAJgEIAHgCIACgBIAOgCQAKgCALABQA3gHAyARQAMAEALAGIAIAFQASAOgHAbQgDALgCALIAAAEIAIgBIAJgCIgDACIgCABQgNAHgUABQgqADgkAPIgQAIIgBAAIAAAAQgWALgTAQQgJAHgCALIAAAAIgBADIgDAXIgBAHIAAABIAAABIAAABIAAACIAAAEIgBAOIAAABIAAACIAAABIAAALIAAACIAAABIAAABIAAAFIAAABIABADIABAOIAAAAIAAADIABAFIAAAAIABAIIAAABIAAAAIAAACIABACIAAACIAAACIAAABIAAABIABAGIAAABIAAAFIAAABIABANIAAACIABABIAAACIAAAAIAAAEIgBALIAAADIAAABIAAAGIAAAAIAAABIAAACIAAABIAAADIAAACIAAACIgBACIAAgDgADpiPIAEgOQADgHAGgFQA0gnBBgIIAngHIgBgEQgCgSADgVQACgPgJgJQgGgFgKgDQgXgHgZgDQgkgFglADQgUABgTADQgPADgLAMIgBAAQgbAlgNAsQgHAZgCAbIABAGIAAAAQAKAEAKABQAfADAfgBIABAAQAFAAABACgAEKAuIABgBIAAAAIAAAAIABgBIAFgDIABAAIANgIIAIgEIABgBIACgBIAVgLIACgBIABAAIAhgPIAigOIAIgEIALADIAAAAIgXAHIgCAAIgDABIgLAEIgOAFQgZAKgZAPIgFADIgCABIgCABIgIAEIgCABIgLAFIAAAAIgBABIgFACIgBAAIgBABIAAAAIgBAAIgBAAIABAAgAEDAkIgBgIIAAgMIAAgGIAAAAIABgPIAAgGIABgDIAAAAIABgHIAAAAIABgBIAAgBIAAgBIAAgBIACgIIACgHIABgBIgDAQIAAABIAAAAIAAABIgCAMIAAAEQgBALABANIABAUIAAABIgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAgAGkARIAEgDQAQgLATgHQgCgYACgYIAAgCQgBgZABgYQABgZACgZIADgZIACgLIABgKQAEgXAIgUIgDABIACgIIAAgBIABgKQABgTgFgTIAAgDIgEgLIgBgCIgDgEIAAgBIADAEIAKALIgBAAIACAMQACAQgBAQIgBANIAAACIgBABIAAAAIgJA9IgHA8IgBACIgCAWQgDAwAEAuIACgBIgCABIABARIABADIgBABIgDAAIgCgSQgRAJgVAKIAAAAgAi+gRIgCgGIAAgBIgCgJIAAgCIAAgBIAAAAIAAgBIAAgJIAAgDIAAgDIAAgDIABgDIAAAAQABgLAFgJIABgBIADgFIAAgBQAFgHAHgGIAFgEIAAgBIAFgDIAKgGIABgBIACgBIAEgCIAEgBIAAgBIABAAIACgBIAAAAIAAAAIAEgBIADgBIAAAAIAAAAIABAAIABgBIAFgBIABAAIgFADIgBABIgBABIAAAAIgBAAIgFADIAAAAIgBABIgDABIgBABIAAAAIgGADIgBABIgEACIAAAAIgHAEIgDACIgBABIgEADQgIAHgFAHIgCACIAAAAQgGAJgDAKIAAADIgBAIIgBAEIABAKIAAABIAAACIABABIAAACIABAGIADALQgCAAgCgEgAGdgSQgGgJABgPIACgaIACgRIAEgZIAGgiQAXgYgGgfQgBgGgGgCQgNgFAAgGQAhAJgHAcQgFAWgPAQQgHAbgDAcQgDAVAAAVIABAVQACACABADIAAAEIgBABIgCgDgAltgTIgBAAIgCAAIAAAAIgIgBIAIAAIAAAAQAmACAmgEQAigEAigIQgFAEgIADQgHADgKABIgmAEIgYABIgMABIglgCgAiIgVQgLgBgJgDIABAAQgIgDgDgIIAAgKQABgMAJgJIgBAAIgBAAIACgBIAAAAIACgBIABAAIgBABIAMgBIAEAAIABAAIAJAAIAZgBIATgBIACAAIALAAIACAAQAvAAAsgCIAFAAIAEABIABAAIAAAAIAAABIgBAAIgLAAQADALACALQAAAKgBAKIAFABIAAABIgFAAIgBAFIgBAAIAAgFQgtAAguADIAAAAIgiACIgMABIgJAAIgMAAgAiUgbIgDACIAwgBIAigBIAAAAIAfgCIAbgCQARgCAQADIgBgTIgCgVIABgBIgBAAIhYAEIgBAAIghACIgLAAQgVABgUgDQgGAJgCAMIAAAIIAAABQADAFAFAEIADAAIAEABgAl3gYIgBAAIgBAAIAAgBIAAAAQgDgBgCgDQgDgEAAgIIABgEIAAgEIACgEIAAgBIAAAAQACgFADgEIgBAAIACAAIAAgBIAAABIAegDIABgBIAWgCIAcgEIAegDQAUgCATAEIAEABIAEACIABgBIAAABIACABIAAAAIAAABIgCAAIABARIAAAGIAAAFIAAABIAAABIABAEIAAAAIAAABIAAAEIAAAEIAAABIAAAAIgCABQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCIAAgGIAAAAIAAgCIAAgBIAAAAIAAgIIABgXIgBAAIgBgBIgCgBIgEAAQgigCgjADQgZACgZAFQgRADgOgDQgEAJAAAJIAAADIAAADIABABIAAABIABAGIAAABIABACIABABIAFABIADACIgEAAIgDAAgAENgpIAAAAIADgFQAEgFAFgFIABgBIABAAIABgBIABgBIABgBIACgBIAEgEIAAAAIAEgEQAVgVAJgcQAOgpgjgaQgKACgHgDQAIgCAKAAQAjAXgJApQgHAdgVAVIgDACIgNAPIgBABIgCADIgBABQgKANgIAPQgBgJAEgIgADKgZIgEAAIgBAAIgBAAIAAAAIgDAAIgHAAIAAAAIgBAAIAAAAIhagBIgBAAIgJAAIAAAAIADAAIAGgBIABAAIAWgCIAHgBQAUgBAUACIAVABIABAAIAAAAIAGABIACAAIABAAIACAAIAAAAIAAABIABAAIAFABIAAAAIAAAAgABUgbIAAAAIgBgBQgLgHAAgJIAAgFIAAgCIAAAAIABgDIAEgGIABgBIACgDIABgBIABgBIACAAIgBACIgCACIAAAAIABAAIABAAIAJgBIACgBIADAAIAAAAIACAAIAPAAIAIAAIACAAIAoABIAVABIAJAAIACAAIABAAIABAAIABAAIAAAAIABAAIACgFIABAFIAEAAIAAABIgEAAIABARIAAALIAAABIAAAAQgFgGAAgLIABgMIgBAAIAAAAIgBAAIgBAAIgBAAIgCAAIgJAAIgVABIgoACIgBAAIgJAAIgRAAIgBAAIgMABIAAAAIgDgBIgCgBIAAAAIgBACIgCAGIAAADIAAAEIABAEQABAEADAFIABABIABAAIAAAAIABAAIADgBIABAAIACACIgCABIgEABgAECg4IgBAAIgHgFIAAgDIAAgBIgBgFIAAgBIAAgBIAAgMIAAgBIAAgBIABgEIABgKIAAgCIABgCQAEgVANgUIACgCQALABAHAFIgRgBQgRAagCAdQgBALABALIAAABIAAABIABABIABAAIAAABIABABIABAAQAKAAAJgEQARgIAHgXQAIgZgGgXIAAgBIgBgBIAAgBIAAAAIgDgKIABAAIAEAJIAAABIABADQAKAggRAgQgEAGgEAFQgFAFgFACIAAAAQgHAEgIABIgDAAIgBAAIgCAAgAAghIgAAkhJIAAAAIABAAIAHgCIABADIgNAAgAn5hYQgFgWAEgVQADgMAFgMQACgFADgEQAEgDAEgCIALAEQAHADAGAEIAGAGIACACIAAAAQAIAKADANQACAKgBAMQgBAMgJAIQgIAHgIADQgGADgGAAQgOAAgMgQgAnmimIgBADQgYAgAJAoIAAABQAQAWAUgLQAGgEAGgGQAVgUgNgZQgGgMgJgIIgLgHIAMARIACAFIAAAAIgCgCQgKgKgJgMIAAgBQgCgCgDAAIgCAAgAllhUIADgCIAJgGQAMgJAPgGIACAAIAHgDIgGgBIAGAAIAegDIAAAAIALgBIAAAAIACAAQAggEAhgEIAOABIAAABQgcACggAGIgTACIgBABIgBAAIgLAAQgOABgOgBIgCABIgGAEIgBABIgNAHIgYANIAGgBIAhgCIAGAAIAegCIAAAAIAMAAIABAAIA+gDQABgFAFgHQAHgIAHgGIAAAAIgDAGIgCAEIgJAOIABABQAAADgEABIgCACIAAABIgBgDIgUABIgEAAIgmACIgBAAIgLAAIgBAAIgRABIgTABIghACIAAAAIgJAAIgDAAIACgCgAiRhYIgEAAIgCAAIgBAAIAAAAIgBAAIgBAAIACgBIAAAAIABgBIAFgCIAHgCIAAgBIABAAIAGgCIABgBIACgBIAAAAIAHgCIAAgBIABAAIADgBIAIgDIAAgBIAFgBIADgCIAFgCIAFgCIABAAIAAgBIAAAAIAFgCIACAAIACAAIAAAAIACgBIADAAIADgBIADgBIAAAAIADAAIADgBQAmgBAkACIANAAIACAAIAKABIAAAAIATABIACAAIACABIAEAAIAAAAIADAAIAAABIAAAAIgEAAIAAAAIgEAAIgCAAIgBAAIgBAAIgSAAIAAAAIgKAAIgCAAIhbABIgNABIgCAAIgCAAIgFAAIgBABIgEADIgBAAIgEACIgDACIgNAGIgEACIgIADIAAAAIgBAAIAAABIgIACIgBAAIAAABIgEABIAEgBIAAAAIABAAIAJgBIABAAIAhgDIAFAAIAFAAIABAAIACAAQA1gDAzADIABAAIAHABIACAAIABgBQAHgLAMgFIgBABIgIAJIgEADIgBABIgFAEIgBABIgBAAIABgCIAAAAIgCAAIgHABIgBAAIhbADIgCAAIgLAAIgCAAIgTABIgZAAIgKAAIgBAAIAAAAIgEABIgCAAgABjhZIAAgBIADgBQAKgGALgDIAHgCIAFgCIACAAIAAAAQgJAGgRAGIAAAAQAbgDAbABIAhADQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgMgBIgUgBIgpABIgDAAIgJABIgFAAIgIAAgADIhcQAAgFACgFIACgDIgCAAIglAAIgbgCIgBAAIAAAAIgCAAIgHgBIAHgBIACAAIABAAIAbAAQATABASACIACAAIACgDIABAAIAAACIAAABIACABIAAAAIgCAAQgBAGgEAGIAAABIgBAAgAmOhkIAEgCIACgBIABgBIABAAIABgBIAAAAIABgBIAAAAQAVgNARgSIANgOIABgBIgCAEIABAAIgCADIAAgCQgIAMgKAJIgHAHQgJAHgLAGIgCABIgBABIAAAAIgBAAIgCABIgBAAIAAABIAAAAIgBAAIgCABIgDABIgBAAIAAAAgAmMhvIAAgCIAAgEQgBgkghgUIACAAQAbAPAHAaQACAKAAAMIAAAAIgBABIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBgABEh2IgBAAIgCgBIAAAAIgBAAIgCAAIAAAAIgEgBIgCAAIgDAAIAAAAIgSgCIgKgBIgBAAIgCAAIgNAAIhKgCIgDAAIAAAAIgDAAIgBAAIAAAAIgBAAIgBAAIgBAAIAAAAIgBAAIgGgBIgCAAIgBAAIgBAAIAAAAIgFAAIgVgBIgCAAIgEAAIgBAAIgCAAIAAgBIACAAIABAAIADAAIADAAIAagBIAAAAIACAAIACAAIABAAIAAAAIAEAAIAAAAIABAAIABAAIAAAAIABAAIABAAIABAAIABAAIACAAIABAAIAEAAQAtgEApAFIADABIAgAFIADABIADABIAAAAIACAAIABAAIADABIAAAAIADABIAEABIgBABIgHgCgABNiQIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIgBgCIAAgEQgCgbAMgcIAKgUIAVgrIAUgkQhNgQhMAWQgJACgIABQgZAXgRAhQgFALgEALQgJAfAJAgQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAgBQgGghAIgdQAIgiAbgeIABgBQAGgHAIgFIgHgBIAJgCIABgBIADAAIAEgDIACgBIgDADQAXgGAWgEIApgEQAsgHAiARIABAAIAAAAIAAAAIgBAAIAAAAQgGAUgJATQgHAPgKAPIgGAKQgTAjgCAoIgBADIAAACIAAABIAAACIAAAAIAAABIAAABIAAAAIAAAAgAiViUIgEgBIgcgBIgBAAIgSgBIgBAAIgBAAQghAAghACIgDABIgEAAIgFAAIgDABQADgQgBgPQAAgKgFgJIgBgCQgFgHgGgEQgHgDgJABQAIgdAQgWQARgYAagSIAEgBIgEADIALgDQAXgIAagBIAegCQAogDAlANIABABIABABIgBABIgBAAIgCAAQhMgVhNAWQgGACgGgBQgWARgTAYQgQAUgHAZQAHACAGACQAJAEAFAHQAHALAAARQAAAMgEALIAGgBQAxgGAyACQAOAAALAEIAAAAIAKAEIgIgBgAlQiYIAAgEQgIgegXgXIAAgBQgPAJgVAKIgDABIgaAMIgBAAIAAAAIAAAAIgLAFQADgFAFgEIAAAAIABAAIAAAAIACgCIAFAAIAUgKQAUgKAUgHQAAAAgBgBQAAgBAAAAQAAAAABgBQAAAAABAAQAMALAHAMQAKAPAEASIABAEIgBADIgBAAIgBgBgABHiYIgBAAIAAgBIgsgEIgEAAQgsgCguAEIgDAAIgCABIgCAAIgDAAIAAAAIgEAAIgBAAIgBAAIgDAAIgFgBIAAAAIgBAAIgBgBIACAAIAAAAIABAAIADgBIAEgBIABAAIAEgBIASgCIAZgCIBtAJIABAAIAAABIAAABIgBABIgCgBgAiKilQgEgGACgLQAFgbAKgYQARgmAfgdIABgCIABgBIAFgEIgCADIgCACQgXAbgTAiIgEAJQgIAPgFAQQgIAWAJATQgEgCgCgDgACOkvIgCgBIgBgCIgBgCIAFADQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAIgBABIgCgCgAFFl1IAAgCIACAAIgBAEIgBgCgAICm1IACAAIAAABIgCgBgADOqXIABAAIABAEIgCgEg");
	this.shape_117.setTransform(88.4,80.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AKVL1IgFgIQgHgcAfgBIAFABIACACIABABIAAAAIAAAAIAFAJQgCAagRAAQgGAAgHgCgAJTKPIgHgJQgHghAlgCIAGACIACACIABABIABAAIAAAAIAGAKQgCAhgWAAQgGAAgJgEgAHzIQQgCgGgIgKQgJgJAFgdQAFgbA2AMIAHAGQANAJACATQADAUgSAMQgNAJgOAAQgMAAgNgGgAjJFtIgLgaQAKgMAIgQIgCgHIgBAAIgCAAIABABQgFANgHAKQgDAJgGACIAAAAQgUAYhAAPIgTgHQgugSgLgnQALgHAMgJIgBgDIgBgDIgBABQgHAJgLAFQhqA1g9heIABgBIAAAAQACgPgCgOQASgFARgNIAJgIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgPAMgUAFQhWAWgqhIQgJgQADgSQALg5AigrQANgDAPgLIgBgCQgMAJgMADIABgBIgBABQgWAEgYgSQgIgGgDgJQgihaBHhKIACAAIADAAIAAABIABgBIABAAIAAABIABABIAEAEIAAgBQASANAXgQQgGgDgGAHIgQAAQgIgDgGgGIgBgCIgCgCIgBAAIgCgCQgGgHgCgKQgQhPA7g+QAcgeAmAJIACABQAGAFAJgCIgCgDQgDgCgBgEIAAgBIgBgBIgFACIgBABQgOgNABgTQAFhVBZgBIAFAAQAEAIAHAGIgEgLIAEADQAPARAGARIABgCQgCgjgbgJQgVhJBOgmQAlgSAcAOIAAABQABAGAFgBIACgCQAIAGAHAJIAGgBIACgBIgBgCQgKgPgOgHIgEgLIgBgGQAnhIBXAIQAQACAOAFQAQADALAKQAGAFACAFIAaATIAAgCQgRgYgXgOQAKgRAQgNQB2hbCRAlIACABQAQAFAHAOIAAACQAKAYAMASIgCABQgJACgIAEQgJAFgHAGQAEAEAGgDIASgHQAKgHAGAAIAFAAQBHgQA8AzQAZAWAFAgIAFAhIgMAAQgRAGgMAPQgEAEgDAFIAAABIAAAFIAAADIAAACIACABIADgFIABgDIAAgCIAFgGQAFgGAIgFQALgHANgCIAAAAQACgCAEAAIABAAQALgBALABQBMAKASBEIAGAPIgLABIgDABIgGABIgHADQgDgFgFgFIgKgJIADADIAIAKIAMAPIABAAIAJgEIAPgFIAAABIAJgBIAAgBQASgBATAGQANAEANAIIAJAFQAOAKAIANQALARABAVQACASAHALQgLgDgMgBIgDABIgFABIgEACIgBACQATACAXADIADADIAAgCQAGACAEADIABAAIAAAAIAAAAQAEAEADAFQAxBgg5BYQgKgFgMgDIgIgCIgCABIAKADQAHADAFAEQAKAEABAHQATAZABAdQAAAKgBALQgDAUgHAQQgOAegdAPIgCgDIgEACIgCABIABADIAAAAIAAAEIAAACIACgBQAKAYgCAbQgBANgHALIgKAOQgoA2hJACQAGgWgJgdQgHABAEAKQAKAcgSAVQgwA4hGgIIAAAAQADgPgHgUIgCgBIgBALIAAACIAEAHQgBAIgDAGQgPAcgbASQhAAnhEgKIAAAAQgJAAgBgGIgCADIADgOQAEgigagfQAMAYABAmQACAyg0ATQgeAKgdgIQgagGgNgWQAGgagNghIgFgEQAJAbgBAbIgBAGIgCARIgVAUQgnAggyAIIgEAAQhMgVgLgZgAC0BVQAEALABAMIAAACIABABIABAKIABABQAeAFAfABIAAAAIAGAAIAAAAIgDACIAEgBQATgNAQgOIADABIAAgBIgBgBIABAAIAAgBIgBgBIgBAAIAAgBQgFgPgBgPIABAAIAAAAIABgBIAWgKIAXgOIAFgDIADgBIABgBIAPgIIAVgJIABAAIABAAIAAAAIAAACIAAAAIAAAAIgBABIABABIABADQAGAOgBAQIAQgBIAEgEIANgOIACgCIAAADIAAABIADAGIABAAIAjgSIABgBQgBgDABgFIgBgHIADgBIABAAIgBgDIgBgRIACgBIgCAAQgEguADgvIACgWIABgCIAHg9IAJg9IAAAAIABgBIAAgBIABgNQABgQgCgRIgCgLIABAAIgKgMIgDgDIgIgKIgDgDIgMgJIgNgIIgDgCQgLgFgLgEQgcgJgfABIgRABQgdADgcAGQghAGgZAUIgPAFIgBAAQgOAFgPgCIgCgEIgDgFQgHgHgIgGQgigZgsAIIguAGQgnAEgbAYIgEAEIgEgEIgBgBIgDgDIgCgCIgCgCQgrglg9AFQgTABgUAEIgeAGQgOADgNAFQggAMgaAXIgQAPIgDAEQgUAXgMAcIgCAHIgHACQgZAGgXANQgRAJgQANQgigMgZAVIgFAEIgFAFIgEAGQgMAPgDARIAAABIAAABIgBAKIAAACQgDAfAHAfQABAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIAAgBIADANIACADIAGAGIABABQAbAUAagIIAHgDIABgBIAAABIABAFIABAJQAEAsgNAtQgCAIABAFIAAAVIABALIAAACIAJAAQArABAqgIIAAAAIADgBIACAAIAigIQAFgBACgCIABACIAAgBIAAgBIACgDIgCAAIAAgGQAlABAmgDIAEAAQBXACBXgCIB8gDIABAAIADAAIAKAAIAPgBIAOAAIAFAAIAEgBIBNgDIADAAIABAHgAFEl4IABACIABgEIgCAAIAAACgAIBm5IACACIAAgBIgCgBIAAAAgADNqaIACADIgBgDIgBAAgAHOF0QgfgCgYgRQgHgtAVgPQAWgPAcACQAggCAPAaQAPAagUAVQgUAVgbAAIgEAAgAnSByQAAAAgBAAQAAAAAAgBQAAAAAAgBQABAAABgBIAAADIgBAAgAnWBVIABgCIAAgBIACAEIgBAAIgCgBgAnWBQIABABIgBABIAAgCgAlwBRIgCgBIAEABIgBAAIgBAAgAEeBBIAAgBIAAgBIAPgJIAHgBIgVAMIgBABIAAgBgAAvAyIAAgEIABAAIAAAEgAGhAPIABAAIgBAAgAmZgEIAAABIAAADIAAgEgAjUgKIAIAAIAAABIgIAAgAAvgNIAAAAIgBAEgAEHgcIAAAAIADgQIACAAQgEAIABAIgABOg+IAAAAIgBACIABgCgAD/g/IgBgBIAAgBIACACgAoahDIAAgBQgDgMgBgNIAAAAIAFAbIgBgBgAAShKIABAAIgBAAgAiMhfIAAAAIABAAIAIgDIAAAAIABAAIAAAAIABADIgBAAIgJABIgBAAIAAAAIgEABIAEgCgAAVhhIABAAIAHAAIACAAIAAAAIgBABgADniRIAAAAIAAACgACPibIAAAAIgBgGIAVAKQgKgBgKgDgABMiaIABgDIgBAEIAAgBgAkWiwIACAWIgGAAQAEgLAAgLgAhZijQAAABABAAQAAABABAAQAAAAABAAQAAAAABgBIAAABIgEABgAmyi1IAAAAIAAAAIABgBIACAFgAnAjHIABAAIgHAFIAGgFgAlLkpIADgDIgGAFIADgCg");
	this.shape_118.setTransform(88.5,80.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_94},{t:this.shape_93}]},3).to({state:[{t:this.shape_96},{t:this.shape_95}]},3).to({state:[{t:this.shape_98},{t:this.shape_97}]},3).to({state:[{t:this.shape_100},{t:this.shape_99}]},3).to({state:[{t:this.shape_102},{t:this.shape_101}]},3).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},4).to({state:[{t:this.shape_108},{t:this.shape_101}]},2).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},2).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_102},{t:this.shape_101}]},2).to({state:[{t:this.shape_110},{t:this.shape_116},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},2).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_102},{t:this.shape_101}]},2).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},2).wait(269));

	// Burst
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#FF99FF","#FFFF99","rgba(255,255,153,0)"],[0,0.761,0.992],0,0,0,0,0,103.4).s().p("AN3JYQg0gfgphBQgshFgkgbQhHgqgkgaQhCgxAAg4IgGhvIgSAVQgvA4gnA/QgNAVgoAjQg6AzhMApQjiB8ksAAQn0AAijjyQgYgjgdikQgKCTgmAfQh3BdgMAOIg7A0QguAogKAUQgvAkgcAGQgNAClqARQgiAJhZAAQiqAAjYhXQjlhcgxhoQgfhBgEhpIABisQAAiIBOiJQBHh8BlhbQBmhbCBgbQCCgbDrALQDsALBSAHQBuAWAmAxIBiB/QA8BOCBD/QBDjrAugqQAvgqA/gsQBAgsAognQBEhEBSgQQBTgRFlAIQFkAJB8CEQB9CEgTEwQBZkTA+gCQA+gCAKhOQAJhOEmhfQElheFDAZQFDAaBMgGQBMgGBaA3QCTBYBCCgQBCCgAZCRQAZCPgRCAQgQCAhiBfQkhEcn/AAQpPAAimhngAQrm+QiyBfgjAlQgwAxgbBqQgTBLAAAyQAABmAQAkQAUAyBrB9QAPARAgArQAkAoA7AaQCpBMGqAAQF/AADtjGQB4hjArhtQAAgfhCiZQg/iVgVgZQguhBgdggQg0g5hAgSQiIgmkMgeQjpgah3AAQhBAAjCBngA8ioEQkGA4iMCRQhzB2AACAQAACUANBWQAHA0CjAsQAcAHBeApQBJAgAqAAQCCAACogYQDCgbA2glQAOgKAmgqQAigmAbgQQBjg7AAiXQAAj4jdh9QiZhVi9AAQgwAAgyAFgAlCn8Qh1BciABUQh7BSgUAQQgzAogRAuQgRAuAABhQAAA5AHAfQANA9ApAtQB1B9FVAAQDjAACahJQBmgwAng5QAigyBOhdQBChPAAgEQAAg1gmhEQguhQhQhAQjDiak9AAQgiAAgkABg");
	this.shape_119.setTransform(261.1,70.8);
	this.shape_119._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_119).wait(139).to({_off:false},0).to({_off:true},4).wait(2).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).wait(140));

	// background
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(3,1,1).p("EAooALIMAAAgm7MhRPAAAMAAAAmUIAAABIAARSMBRPAAAIAAwn");
	this.shape_120.setTransform(260,178);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1,1,1).p("AAAADIAAgF");
	this.shape_121.setTransform(488.2,86.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#0099FF","#CCFFFF"],[0,0.761],-4,-195.7,-4,134.1).s().p("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");
	this.shape_122.setTransform(260,124.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00CC00").s().p("EgonAK6IAAxRIAFAAIAAgBQAWgFAZAAIABAAIACAAIAEgBIgBgEIAIAAIAagEIADgCIABAAIAAABQAegFAfgJQAOgFAOAAQBjgCBfASIAFgGQAHgLAAgOQAzA+BUgCIAHAEQASALAMgOQABgDgBgDQgEgPgIgNQgIgLgKgKQAEgDAMAFIBHAZIAAABIABAAIAMAEIgCgCIgGgEQAMgIAHgOIADACQABANALAGIAEgHQA1AaA5gZQANgSgBgQQADAKAGAFQAJgjARgaQgHAaALAWIAHAKIAKAAQBJgXAYg6QAFgMADgOIAAACQACANgCAOIgCAKQgDACgBAEQgCAEAFABIANgSIAgguIAAACQgJAYAEAZIAFAFIAWAAQASgiAOgjIAEgJIAEgKIAAgBIAJgZIABACQACAMABAMIAAAQIAAADIgCARIAOgRIAQgTIAdgiQgGARgCAPQAAAMABAJIACAHIAGgHQApgzAhg6QAKAhgFAgQgCAPgGAOQAEAFACgGQAFgKANgHIAAABQgCAEABAEQAPAHAQgEIAIAEQgDAGABAGQAYgEAQAAQABAFACAEQACAGAFAEQAGAEAHgCIAIgMQAegrAFg0QAkAgAUApIgBADIgIAQQAGAAAEgEIAAABIABgCIADgHQAOgbASgUQATgUAYgOIABACQgQAdABAhQAggbAqgYIgBAEQgNAfgFAfQAFACADgEIgBAEIAAAPIABAJIAZgJQATgGAUgFIAGALQAZAvA9geIAmgRQAygVAygLIAAACQgCAJAFAFQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAEgUIABgCIAFgZIAAABQAAAOAEAMIADAJQAEALAIALIALgGIAIgFIAAACIAAAJQAEAFAEgFQADgJAJgCQACALAHAIIACACIAJgCIADAAQALgOAMgGQABAMAIAIQADAEAFADIAWAAIAIgHQApgkAGg7IABAEQAYArAFAwIABAEIAHgEIAngWIALgDQgEANgBAMIgBAFIAVgFIAHgBIAAABIAAACIAAATQADAHAFAGQATgHASgFQgBANALAHIAQgNIAHAIQAZgHAYADIALALQAjgDAbgPIABAAQgXAIgIAcQAPAFAQAAQBTgDA4g+IgBAGQgBAoAFAnQASgJAPgNQANgMALgOIgBAEQgCAKAAALQAAAKABAKQAKgHAIgKQACAJAIAGQA3gTALg/IABgDIABACIAAABQATAugGAwQAugWAQgqIAFgRIABADIACAQQADASAFARIAdgWIAngdQgSAOgEAUIgCANQA2geA4gSQgNAfgWAWQAbACAZgMIgBACQgCAEABAFQACAFAEADIAHAAQAIgFAJgCIABABIAHALIAKgBQAEgEADgBQABAAABgBQAAAAABABQAAAAABAAQAAAAABABQACALALgIQAmgdAEgzIAAgBIABABQAmApgRAuQAKADALgIIACAAIAAAIQAGABAHgIQACAHAGAEQA4gHAYg0IABAEQABAjANAeQA7gXA6gUIgPADIgBgCQA8gGArgnIgBACQgGAfgLAeIABACQACADAAADQAJABAGgHQAQAYAWgMIABABQAAAIACAHQAHAFAHgFIALgPIAeAOQA8gNAdg2IgBACQgbAxAdApQAhADAcgKIAAACQgBAEACAEQAJgDAEgJQAGABAGAGQAvgFABgyIABACQAMAcgDAeQgEACAAADIAHACQAIgHAIgBQgCAIAIgCQAHgGAHgCQAIgDAHAAQABAHAFAGQAOgFALgOQAiACAcgRQgQAPAIAUQBAAHArgoIAAACIgFAnQAPgFAPgKIgBACQgBADAAAEQABAGAFAEQAagHgCAKQARAJAQgPQAgggAlgEIgBACQgCAHABAIQAEADAHABQAGAJAJAGQAHAEAGABQBQAWBMgmIgBgBIAEgCQAbgLAagWIABgDQAIgTABgSIABABQAJAigGAjQAGAFACgKIAAgBIADALQAMgJANgEIABACQACAJADAIQANgGANgNIgBAEIAAAWQAQAUAYgCQAJgBAEgIIADgGIABgDQAfg1AtgoQgeAogFAwIAZgMIgBACIgEAPQAFAGAEgHQgDAQAMATQA2ACAygGIgFAFIAIgGIANgBIgLgBIADgBQAYgWAPgiQgBAWAHATIADAIQAOgRAQgJQgJALABANQAKACAJgKQAIARATgCQAigfALgvQAHAggHAeQgEAPgHAPQAXgKARgNIACABQgEAHgBAIQAGAGALgIQAEgBgBAHIAXACQABALAKAGIAJgCIAHgBIAHgBQB0ALByAIIABAAIAAQmgAh2INQgZABgTAJQACAGAIgFQAVgMAVAHQgJgLgEgLQAYAVAcgSQAUgMAWgIQAdgKAcABIAHgKQARAJAOAPIAEAAQACgKgDgJIgPg6QARAiALAhIADAKQAJgwAYgqQgHAWgCAYQgCAdAVAOQgLgMgBgOQgDgoALglQgeAqgLA0IgJgkQgHgXgQgLQgBAEACAFQAOAgABAiIgfgUIgGgEQgdgTgbAMQAZAHAVAOQgSgCgRADQgLADgKAGQgjAWgnACQgLgLgMgHQAGANAJAOgAyajdIgBgBQgmg6hDgMQgHAFAMAGQATAIAOANIAEAEIgEgBQgkgMglAEQABAFAGADQANAHANAJQhTAKhPgPIgHAHQgFAHAGADQADgBACgEQABgEAEgBQBOAPBSgJQAIgBAAgHIgHgFQgKgIgKgFQAjACAgAHIAAgCIAAgGIAAgBIgIgIIgBAAQgKgJgEgFQAKACAHAHIAOAMQAaAWAYARIAAAAg");
	this.shape_123.setTransform(260,286.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("Ai1J0QASgJAZgBQgJgOgFgNQALAHALALQAogCAjgWQAJgGAMgCQASgDARABQgWgNgYgIQAcgLAcASIAFAEIAgAVQgBgigOghQgCgEAAgFQARALAHAXIAJAkQALg0AegqQgLAlACAoQABAPAMALQgWgNACgeQADgXAHgXQgYAqgJAwIgDgJQgLgigSghIAQA5QADAKgDAJIgDAAQgPgPgQgJQgZgOgfABQAbAIAWAQQgbgBgeAKQgWAHgVANQgbARgYgVQAEALAIALQgVgGgVAMIgFABQgDAAgBgDgAzfinIgPgMQgGgGgKgCQAEAFAKAIIABABIAIAHIAAACIAAAGIAAABQgggGgkgDQALAGAKAHIAGAGQABAGgIABQhSAJhOgPQgFABgBAFQgBADgDACQgGgEAFgHIAGgHQBQAPBSgJQgMgJgOgHQgFgDgBgGQAlgEAkAMIAEACIgEgEQgOgOgUgIQgLgFAHgFQBCAMAmA5IABACQgXgSgagWgEAkugEhIgHAAIgHACIgKACQgKgHAAgKIgXgCQABgIgEACQgLAHgGgFQABgIAEgIIADgFIgGAFQgQAMgXAKQAHgPADgPQAIgegHgfQgLAvgiAfQgTACgJgRQgJAJgKgBQAAgOAJgLQgQAJgOASIgEgJQgGgTABgVQgPAhgYAWIgDACIALAAIgNACIgIAGIAEgGQgxAGg2gBQgMgUADgQQgEAHgFgGIAEgPIAAgCIgYANQAFgwAegoQgtAngfA2QAchOBFgiQgiAsgRA0QAJgHAPgDQAEAGgDAJIAAACQAJgKALAAQgEANgKALQgCAKAFAJIAAACIBoABQAggoAUgwQAHAKgEAWQgEARAGAQQATgRAYgJQgHAPgJAPIANgKQAFAJAHAIIANACQAmgxAKg5QANAxgKAwIgDAMIgBACIARgKQARgJATgHIgPAVIgFAHQAHAAAFgFQAMgFABAIQgGADAAAEIATgDQAEAFgCAHIAAABIAFAGIAJACIAIgCQArgMAwAMQBDAQBFADQAGAAADADIAAACQhxgIh0gLgEgglgErIgHgFQhUACgzg9QAAANgIAMIgEAGQhfgThjADQgOAAgOAEQgfAKgfAFIABgBIgBAAIgEACIgZADIgIABIgGAAIgJABQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAEgFAIAGQBigiBnACQAWABAWAEIBOAOIABgCQAKgOgCgQQgBgFAFgCQArA8BOAFIAFAAIgEgCIgBAAQAQgDAQAMQAIAFAGgFQgBgOgIgMQgPgWgOgOIAAAAQA5ADAwAdQAVgqAcgiQgLAWgGAdQgCAJAGAEIACACQAGgEgCAIIAAAAIAAABQAzANA1gRQATgkgUgmQAPAPALAdQAQg+ArglQABAEgCAEIgBACQgmAmASAyIAFAHQBIgXAYg2QAKgXABgbQABgNgBgOIAHAbQAEAXAAAZQARgcAUgUQAMgNANgJQgIAKgGAMQgPAbAEAhIABABQAEAJAMgKQAQgeAMgeIAFgMIADgIIAAgBQARgtAJgwQACgIAHgCQgSAxAGA4IAAACIABAKIABAGIAOgSIBChSQABgBAAAAQAAAAABgBQAAAAABAAQABAAABAAQgdAtgJA1QAzg+AhhFQAIAtgBAvIAAAHIgBACIAFgEIAEgEIAhgeQgKAPgJARIgDAIIgDAFQAHACAHgBQAOgBAPgJIAIADQgHALgIALQAUgFAUAAQgBAJAFAIIADAEQAFADAFgFIABgCQAkg0gDg8QAnAfAcAyIABABIADgEQANgSAOgPQAgghApgTQgbAfgHAqIBMg1QAEALgKAWQgJARAAALQAHgCgBAHQgGAOABAQIAAADIAAABIACgBQAdgPAfgCQAEAJAFAIQAbAnA5gcIAXgLQA4gbA7gRQAEgcAIgcIADgEQAHARgBAZQgBAMADAMIAEAOIACAGIAEgCQAMgHAMgCQABAEgCADIAAADIAFgFIAJgCQAIAHACALIAJACQALgQARgHQAFAOAIAMIAWACQAugoAGhDQgFgIAEgHIACgBQAaA2ANA7IAAAEIAAABIANgJQAYgQAagGQgEAQgFAQIgBACQALgGAPAAIAAAJIAEAVIACACIAngHIAEAOIACACQAHgEAFgHQAIABAEAHQAXgGAYABIAMALQAmgCAkgQIgMAIQgbAQgjADIgLgMQgYgCgZAGIgIgHIgPAMQgLgGAAgOQgSAFgSAIQgFgGgEgHIAAgTIAAgCIAAgCIgGACIgVAFIAAgFQABgNAEgMIABgEIgLAHIgoAWIgGAEIgBgEQgFgwgYgsIgCgEQgFA8gqAkIgIAGIgVAAQgFgDgDgDQgIgIgBgMQgMAGgLANIgDABIgJABIgCgBQgIgIgBgLQgJABgDAKQgEAFgFgFIAAgKIAAgBIgHAFIgMAFQgHgKgFgMIgCgJQgEgMAAgNIAAgCIgFAZIgBACIgEAUQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAABQgFgFACgKIAAgCQgyALgzAWIgmARQg8AdgaguIgFgMQgUAFgUAHIgYAJIgBgJIAAgQIABgDQgEAEgFgDQAGgfAMgeIABgEQgqAYgfAaQgBghAQgcIADgEIgEACQgZANgSAUQgTAUgNAbIgDAHIgBACIAAAAQgEADgGABIAHgRIABgCQgUgqgjgfQgGAzgdAsIgIALQgIACgFgEQgFgEgDgFQgCgFAAgEQgRAAgXAEQgBgHADgGQACgFAGgFQgIAFgIACQgQAEgPgHQgBgEACgEIAAgBQgNAGgFALQgCAFgEgFQAFgOADgOQAFgggLghQggA6gpAzIgGAHIgCgHQgCgKABgLQABgPAHgSIgdAjIgQATIgPAQIACgQIABgDIAAgRQgBgMgDgMIgBgBIgJAZIAAAAIgDAKIgEAKQgPAjgRAiIgWAAIgFgGQgEgZAIgYIABgCIggAuIgOASQgEAAACgFQAAgDADgCIADgLQACgOgCgNIAAgCQgDAOgFAMQgYA6hJAYIgKAAIgHgLQgMgWAIgZQgRAagJAiQgHgEgCgLQAAAQgNATQg4AZg1gaIgEAGQgLgGgBgMIAAgGIAAgCIgDAGQgIANgLAIIAGAEIACACIgMgEIgCABIABgBIhHgaQgNgEgDADQAKAJAIALQAIANAEAPQABADgCADQgGAIgJAAQgGAAgIgEgAculTIAAgXIABgDQgOANgMAFQgEgHgCgJIAAgCQgNAEgNAIIgCgLIgBABQgBAKgHgEQAHgjgJgjIgBgBIAAABQgBASgIASIgBAEQgaAVgcAMIgEABIACABQhNAnhQgWQgFgCgHgEQgJgFgHgJQgGgBgEgEQgBgHACgIIABgCQglAFghAfQgPAQgRgJQACgKgbAGQgEgDgCgGQAAgEACgEIABgCQgPALgPAEIAFgnIAAgCQgrAphAgHQgIgUAQgQQgcASgigCQgLANgPAGQgEgGgCgHQgHgBgHADQgHADgHAFQgIACACgHQgJAAgHAIIgHgCQAAgEADgCQAEgdgMgdIgBgCQgBAygvAFQgHgGgFAAQgFAJgIACQgCgDAAgEIABgCQgcAJgigCQgcgpAbgxIAAgCQgcA1g9AOQgSgKgDgSIgJANIgKAQQgIAFgGgGQgCgHAAgIIgBgBQgWANgQgYQgGAHgKgCQAAgDgBgCIgBgCQALgfAGgfIABgCQgsAng7AHQA/gQAqguIABgBIABABQAFAZgLAaIgBACIAEAGIgFANIgBABQAPAOAUAFQAFgGAJgCQACAJABALIALgNQAKgLAKgIQADATAQALQA7gOAbg7QAMAXgNAiQgHAWAKASIAWABIAFgEIAGAEQAQgBAQgIIAFACIAIgEIAJAHQArAAgBgxQAAgLAGgHQARAiABApQALgHAJADIgBAGIACgBIAEgCQAMgGAOgDIADANQALgDAIgKQAygGAvgZQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABQgkAPgDAjQBHgBAqgwQgFAXgCAYIAAACIABgBQAagRAWgTQgNASgKAZIAjABIgDAIIAAABIABgBQAkgQAlgaQAMgIAMAFQAEAIgFAIQBBBBBZguQASgKANAEQAigSAUggQAMgRgCgWQgCgIAHgCQARAkgDAoIAAABIABgBQAHgEACAHIAAAGIAAABQAHgDAOgDQAFAIABAJQAOgPAOgCIAAAcIAAACQAMATAYgDIAOgJIgDAGQgFAHgIABIgFAAQgVAAgOgRgAItnIIAAgEQgYA0g5AIQgFgFgCgHQgHAJgHgCIAAgHIgBAAQgLAIgKgDQARgvgmgoIgBgBIAAABQgEAygmAdQgLAJgDgMQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQgDABgEAFIgKAAIgHgLIgBgBQgJACgIAGIgIgBQgEgDgCgEQAAgFABgFIACgCQgaANgagDQAVgVAOgfQg4ARg3AeIACgMQAFgUASgPIgnAdIgdAWQgFgRgDgRIgCgQIgBgEIgFARQgQArguAWQAFgxgSgtIgBgCIgBgCIAAAEQgMA+g2ATQgIgGgCgJQgJALgJAHQgCgLABgKQAAgKACgLIABgDQgLAOgNALQgPANgSAJQgFgnAAgoIABgFQg3A9hTADQgRABgPgFQAJgcAXgIIgXAeQBIAVA7g3QALgLAKgLIANgQQACAHACAJQACAMgBARQgBARAAASIAAABIABAMIAQgNQAWgSAUgUQABATgEAVIAAADQAGgJAKgEIAGAPIABACQAmgHAOgrIAGgXQAEgRACgOQAIAPAFAQQANAmgEApIAAACIABAAQAygZAIg4IABgGIADAGQAIAPADAUIACATIABACIARgOQAdgXAhgTIAKgHIABACIgEAFIgpAzQA2gWAzgdIAJgGQAFgDABAGIgBADQgOAggWAeQAagGAYgKIgHAUIAAACQAOAAANgHQADAGAFAFIAGACIABAAQAGgJAJADQADADAAADIAAADIABgBQAjgTAFgwIABgJIACgPQAIAHAGAIQAaAeAAAvQAMgEAMgCIAJAPQA7gPAag5QgCAmALAnIABADIAAAAQAxgWAygJIAQgCQg6ATg8AYQgMgfgCgjg");
	this.shape_124.setTransform(261.9,276.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0000").s().p("AgLAhIAAgDQAEADADgIQghgFgiAYIgBgCQgKgXgJgYIABgDQAgAEAfgFIAGAIIgBgIIABAAIAAgBIgBAAQgDgVgFgUIgLgsQAmgOAoAJQgMAYgDAaQgEAYAIAQIABgHIAAAAQAKACAJgHQAXgQAVAAQgFAfAHAeIgUgCQgIACgIAAQgMAAgJADIgCgKIAAAAIgBANIAAAAQgCAgAQAhQgaACgUAJQgJgkgCgkg");
	this.shape_125.setTransform(159.2,17.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("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IABACQAmgHAOgrIAGgXQAEgRACgOQAIAPAFAQQANAmgEApIAAACIABAAQAygZAIg4IABgGIADAGQAIAPADAUIACATIABACIARgOQAdgXAhgTIAKgHIABACIgEAFIgpAzQA2gWAzgdIAJgGQAFgDABAGIgBADQgOAggWAeQAagGAYgKIgHAUIAAACQAOAAANgHQADAGAFAFIAGACIABAAQAGgJAJADQADADAAADIAAADIABgBQAjgTAFgwIABgJIACgPQAIAHAGAIQAaAeAAAvQAMgEAMgCIAJAPQA7gPAag5QgCAmALAnIABADIAAAAQAxgWAygJIAQgCQg6ATg8AYQgMgfgCgjgAwH2iIgBgBQgGAAgGgBIAKgFQgMgpAHgnIAAgBQgfAEgXAVQgCAMgJgLQgKgbgGgfQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAABQAJAZAKAXIABACQAigYAhAFQgDAIgEgDIAAADQACAkAJAkQAVgJAagCQgQghACggIAAAAIABgNIAAAAIACAKQAJgDAMAAQAIAAAIgCIAUACQgHgfAFgfQgVAAgXAQQgJAHgKgCQAZgRAfgMIAEgCIAFAAIACgGQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAABIgBAIIAKACIAAABIABACQAFAIgJgDIgIgBQgCAhAIAiIAAACQgGADgCgHIAAgBQgcAEgdAAQAFAhANAgIACAFIAAACIAAAAIAAAAIABACQgSgBgXAEIgBAEIAAABIgMADIABACIAAACIgFABQgDAAAAgEgAwe4fQgfAFgggEIgFgBIgCgBIACgCIABgBIBCADQgJgSgCgZQgBgagRgTIAAgBQAagHAZgCQAZAAAZABIACABQgJAVgEAYIgFAsIgBAHQgIgQAEgYQADgaAMgYQgpgJgmAOIALAsQAFAUADAVIABAAIAAABIgBAAIABAIIgGgIg");
	this.shape_126.setTransform(261.9,173.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#0099FF","#CCFFFF"],[0,0.761],-4,-195.7,-4,134.1).s().p("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");
	this.shape_127.setTransform(260,124.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(3,1,1).p("EgonAKhIAAABIAARSMBRPAAAIAAwnEAooALIMAAAgm7MhRPAAAMAAAAmU");
	this.shape_128.setTransform(260,178);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AsPAhIAAgDQADADADgIQgggFgjAYIgBgCQgKgXgIgYIAAgDQAgAEAggFIAFAIIgBgIIABAAIAAgBIgBAAQgCgVgGgUIgLgsQAmgOApAJQgMAYgDAaQgEAYAIAQIABgHIAAAAQAKACAJgHQAXgQAVAAQgFAfAHAeIgTgCQgJACgIAAQgLAAgKADIgBgKIgBAAIgBANIAAAAQgCAgAQAhQgZACgVAJQgKgkgBgkgAMaAkIAAgCIgFggIANABIgIAEIAPgEIAGAAIAAAAIALgDIgDAAIAGgCIAPgFIAAAAIAHgCIABAAIgBAAIgCAFIAAABIAAABIgBAAIAAABIgBADIAAACQgCAHACAHIAAACIgCAAIgJAEIgHADQgOAGgLAJIAAABIgCACQgDgGgFgDgAMYgoQgEgTgFgSIgBgJQAXAAAYgBIAcgDIABAIQgCANAIABIgCABQgRAEgQAGQgTAIgQAMg");
	this.shape_129.setTransform(236.5,17.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("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IABACQAmgHAOgrIAGgXQAEgRACgOQAIAPAFAQQANAmgEApIAAACIABAAQAygZAIg4IABgGIADAGQAIAPADAUIACATIABACIARgOQAdgXAhgTIAKgHIABACIgEAFIgpAzQA2gWAzgdIAJgGQAFgDABAGIgBADQgOAggWAeQAagGAYgKIgHAUIAAACQAOAAANgHQADAGAFAFIAGACIABAAQAGgJAJADQADADAAADIAAADIABgBQAjgTAFgwIABgJIACgPQAIAHAGAIQAaAeAAAvQAMgEAMgCIAJAPQA7gPAag5QgCAmALAnIABADIAAAAQAxgWAygJIAQgCQg6ATg8AYQgMgfgCgjgAwH2iIgBgBQgGAAgGgBIAKgFQgMgpAHgnIAAgBQgfAEgXAVQgCAMgJgLQgKgbgGgfQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAABQAJAZAKAXIABACQAigYAhAFQgDAIgEgDIAAADQACAkAJAkQAVgJAagCQgQghACggIAAAAIABgNIAAAAIACAKQAJgDAMAAQAIAAAIgCIAUACQgHgfAFgfQgVAAgXAQQgJAHgKgCQAZgRAfgMIAEgCIAFAAIACgGQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAABIgBAIIAKACIAAABIABACQAFAIgJgDIgIgBQgCAhAIAiIAAACQgGADgCgHIAAgBQgcAEgdAAQAFAhANAgIACAFIAAACIAAAAIAAAAIABACQgSgBgXAEIgBAEIAAABIgMADIABACIAAACIgFABQgDAAAAgEgAIe3jIgEgHIgCgEQgHgQACgRIAAgEIgBAAIgHgBIgBAAIAAgBIABAAIAGAAIADAAIAAgDIACAAIAAADIATAAIAWgKIAGgDIAHgCIALgDIALgDIADAAIAHADIAAABIgMAEIgFABIgBAEIgBAFIAAACIAAAAIgDAUIAHADIAAABIgGACIgDABIgBABIAAgBIgOAFIgGACIgZAKIAAgBQALgJAOgGIAHgDIAJgEIACAAIgBgCQgBgHABgHIABgCIABgEIAAgBIAAAAIABgBIAAgBIACgFIABAAIgBAAIgHACIAAAAIgPAFIgGACIADAAIgLAEIAAAAIgHAAIgPAEIAIgEIgMgBIAFAgIAAACQAFADACAGIABACQAAAEgDAAIgDgBgAJd36IABgCIAAgCIAAAAIABgCIAAAGIgCACIAAACIgBABIgCABIADgGgAwe4fQgfAFgggEIgFgBIgCgBIACgCIABgBIBCADQgJgSgCgZQgBgagRgTIAAgBQAagHAZgCQAZAAAZABIACABQgJAVgEAYIgFAsIgBAHQgIgQAEgYQADgaAMgYQgpgJgmAOIALAsQAFAUADAVIABAAIAAABIgBAAIABAIIgGgIgAIZ44IAAAAIAAgBIACgBIAAAAIABAAIAAgBQAQgMATgIQAQgGARgEIACgBQgJgBADgNIABgIIgCAAIgcADQgYABgXAAIgBAAIgBAAIgBAAIABgBQAZgFAYgEIAjgEIAFABIACACIABABIgCADIgBABIgDADQgCAGAAAGQABAFgBAEIAHADIAAABQgVAGgVAJIghANIAAABIAAAAIgFACgAIO5YIACgLIAAAAQAGASADATIAAACQgMgMABgQg");
	this.shape_130.setTransform(261.9,173.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#0099FF","#CCFFFF"],[0,0.761],-4,-195.7,-4,134.1).s().p("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AIAAAEIgCAAIgHgBIgBAAIAAABIABAAIAHABIABAAIABAAgAIZrMIAAAAIABABIACgBIgCgEgAINsAIACAAIAAgBIgCABgAv0u+QABAHAHgEIAAgCIgBgCIANgDIAAgBIAAgEQAXgEASABIgBgCIAAAAIAAAAIAAgCIgCgFQgNgfgEgiQAdABAbgFIAAABQACAHAGgDIAAgCQgHghABgiIAIABQAJADgFgIIAAgCIAAgBIgLgCIABgIQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgCAGIgEAAIgFACQgfAMgZARIAAAAIAFgsQAEgYAKgVIgCgBQgagBgZAAQgZACgZAHIgBABQARATACAaQABAaAJARIhCgDIgBABIgCACIACABIAFABIAAADQgBAAAAAAQgBgBAAABQAAAAAAAAQAAAAAAABQAFAfAKAbQAJALACgMQAXgVAfgEIABABQgHAnAMApIgLAFQAGACAGgBgAtwvmIgCAGIADABIABgIIgBAAIgBABgAInwvIgBAEQgCASAHAPIACAEIAEAHQAGAEAAgHIAAgCIACgCIAZgKIAGgCIAOgFIAAABIABgBIADgBIAGgCIAAgBIgHgDIADgUIAAAAIAAgBIABgFIABgEIAFgCIAMgEIAAgBIgHgDIgCAAIgLADIgMAEIgGACIgHACIgWAKIgTABIAAgEIgCAAIAAAEIgCAAIgHgBIgBAAIAAABIABAAIAHABIABAAIABAAgAJxwaIAAABIAAABIgBACIgDAGIACgBIABAAIAAgDIADgCIAAgGIgCACgAIvxWIAAAAIgBAAIAAABIgCABIAAAAIAAAAIABABIAEgCIAAAAIAAAAIAhgOQAVgIAWgHIAAgBIgIgDQABgEAAgFQgBgGACgGIADgDIABgBIACgDIAAgBIgDgCIgFgBIgjAEQgYAEgYAFIgCABIACAAIABAAIAAAAIABAJIgBAAIgCALQgBARANALIAAgCgAJuyLIACgBIgBAIg");
	this.shape_131.setTransform(260,124.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]}).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_123},{t:this.shape_125},{t:this.shape_120}]},35).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_123},{t:this.shape_129},{t:this.shape_121},{t:this.shape_128}]},30).wait(235));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,523,358.9);


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
		
		 window.open ("intro_Scene6a.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("intro_Scene5.html","_self");
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
(lib.intro_Scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0,scene6_repeat:251});

	// timeline functions:
	this.frame_16 = function() {
		playSound("couchboardingdaydream");
	}
	this.frame_250 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_259 = function() {
		this.gotoAndPlay("scene6_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(234).call(this.frame_250).wait(9).call(this.frame_259).wait(1));

	// content
	this.instance = new lib.Idea();
	this.instance.parent = this;
	this.instance.setTransform(277.4,191.1,0.858,0.858,0,0,0,263,174.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: '34BB09FEF1F5A446AF1D5887C35F7F73',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmIntro.mp3", id:"bgmIntro"},
		{src:"sounds/couchboardingdaydream.mp3", id:"couchboardingdaydream"}
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
an.compositions['34BB09FEF1F5A446AF1D5887C35F7F73'] = {
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