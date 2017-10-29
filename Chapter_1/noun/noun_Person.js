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


(lib.StaceName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgQAVQgIgGAAgLQAAgMAHgIQAGgKALAAQAIABAFACQAHADgBAIQABAEgGAFIgKAEIgSAJQACAEAEACQAFACAEAAIAIgBQAGgCABgDQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIADABIACADQAAAGgJAEQgIACgHAAQgKAAgHgFgAgJgMQgEAEgCAJIAPgHQAIgEADgDQgEgDgHgBQgFABgEAEg");
	this.shape.setTransform(11,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgNAVQgHgGAAgKQAAgJAGgLQAIgMAIAAQAFABAGACQAHACAAAFIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgDgBIgCgCQgCgCgHAAQgEAAgFAIQgEAJAAAFQAAAGAEAEQAEADAGAAIAGgBIAGgDIACgBIADACQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAEgHADQgHACgEAAQgJABgHgHg");
	this.shape_1.setTransform(5.6,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AAPAZIgCgEIgJAEIgFACQgLAAgGgHQgEgGAAgMQgBgLAJgIQAIgJAKAAQAFAAAEACQAHADAAAEIgBACIAAAHIgBAJIABAKIADAJIABACIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgDABIgEgCgAgHgLQgGAGAAAHQAAAIADAEQADAEAFAAQAEAAADgCIAGgDIgCgSIAAgGIABgEIgDgCIgDAAQgGgBgFAHg");
	this.shape_2.setTransform(0.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgCAiQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAgFIABgGIgBgcIgLgBQgEAAgBgEQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAKAAIAAgGIgBgGQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAEgBQADAAABAHIAAAFIAAADIAAACIAHAAIAHAAQACACABADIgBADQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgCgBIgHABIABAcIAAADIAAACQAAAKgEAAIgDgBg");
	this.shape_3.setTransform(-4.5,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgTAiQgJgFAAgHQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQADAAABADIAFAFQAEADAHAAQAHAAAHgDQAIgFAAgHQAAgGgHgEQgGgDgIAAQgHAAgFgCQgIgEAAgIQAAgIAKgIQAKgGAIAAIAMABQAHACAAAEQABAEgFAAIgHgBIgIgBQgGAAgFAEQgGADAAAGQAAAEAHABIAKACQALAAAGAHQAGAEAAAIQAAAMgKAHQgKAGgMAAQgIAAgIgDg");
	this.shape_4.setTransform(-10.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AB0g2QAwAXAAAfQAAAggwAXQgwAXhEAAQhDAAgwgXQgwgXAAggQAAgfAwgXQAwgXBDAAQBEAAAwAXg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhyA3QgxgXAAggQAAgfAxgXQAvgXBDABQBEgBAvAXQAxAXAAAfQAAAggxAXQgvAWhEAAQhDAAgvgWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-9.6,34.7,18.4);


(lib.Stace_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Main
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAcIgCgQQAKAKAIgRQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIgFgLQgFgTANgBIgDAfQAAAKgFAHQgFAHgIAAIgBAAg");
	this.shape.setTransform(-2,-21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F4F4F").s().p("AgCAAIAFAAIAAABg");
	this.shape_1.setTransform(12.2,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("ABRCSIgBgBIgBgCIAAgBIAAAAIgGgFIgBgCIgBgBIgBgEIgBgCIgBgBIAAgBIAAgCIALgHIABAAIAAgBIACgBIABAAIAAAAQAJgGAIgIIABAAIAAABIABADIAAABIAAAAIgCABIgKAJQgBANABANQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgHAAgAAqCDIABgBIAIAAIAGAAIAAgBIABgBIACgBIABgBIAGgCIAAABIAAACQgLAEgKAAIgEAAgAgkCCIgBgCIgBgBIAAgBIAAgBIgBAAIgCgCIAAgBIgBgCQgLgDgKgHIAAgBIAAgCIAAgBIABAAIgBAAQABgGAAgHIABgEIAAAAIADgJQAEgLgCgKIAFgPIAAgGIAAgGIADAEIAXAwIABAAIABABIABACIACABIABAAIABABIAEAFIAAABIgDACIgEACIgBAEIgCAEIgBAJIgDAGIAAAEQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgEAAgAAmA0Igjg4IgCgBIgDgEIgHgIIgSgXIgCgCIAAgBIABAAIgCgCIgBgCIgFgIIgCgCIAAgCIgDgFIAAAAIgBgDIgEgIIgBgBIAAgBIgCgDIAAAAIAAgBIgBgCIgFgHIAAgCQgFgMgJgHIgDgDIAAAAIgBgBIgCgBIgCgCIgCgCIgCAAIgBAAIgGABIgGAAIgCAAQgHgCADgMQAKgBAFgKQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAZAMIASgFIAlAeIAkAMQAWA/gKBAQgBAKgEAMg");
	this.shape_2.setTransform(1.8,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#303030").s().p("AgIgLIAAgGIARAjg");
	this.shape_3.setTransform(4.3,-3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgBAdQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAgpIAAgNIAFANIAAApIAAAGQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAgBgBAAg");
	this.shape_4.setTransform(3.1,-7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#141414").s().p("AhLAVIgHgMIAMAAIAGAMIAAAlgABAgnIANgSQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABIgMAYIAAAZIAAALg");
	this.shape_5.setTransform(6.1,-7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#535353").s().p("AgEAVIACABIgCAFIAAgGgAABgbIAEAOIgCABg");
	this.shape_6.setTransform(10.6,-22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181818").s().p("AgCgKIADAFIAAABIACAPQgCgLgDgKg");
	this.shape_7.setTransform(15.7,-3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("ABTEkQgPgBgKgMQgEgGgGgEIgBgBIgIgOIgBgBIg7hwQAPgQgdAEIgLAAIAHAMQgSAHgFgOQgCgCAAgDQAAgDACgCQAggjgoAbIgGAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAfglgsAXIAGgQIASgNIhcgCIBmgKIAJAAIABAAQAJgCAGAGIACACIAGAIIAIAMIAHALIADAGIADAGIAAACIAAABIACADIAAAAIAAABQAHANAIAMIAEAEQAfA2AsApQAAAAABABQAAAAABAAQAAAAABABQABAAAAAAQALgRgCggQgCgcAAgbIAAgDQgCgDABgEIAAgEIgBgHIgFgPIgBgCIgDgLIgCAAIgGgTQgIgCgIgFIgDgBIgLgKQgHgHgJgGIgFgDIAAAAIAAAAIgDgCIgMgEIgIgEIgBgBQgNgEgOABIgCgBIgCAAIgDAAIAAgDIAAgEQABgDADgCIADgCQAIgEAHgDIAIgFIABgBIABAAIAEgCIAMgNIAAgkIAfAAQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAABAAIASAeIAWAqIACAoIABAEIgBADIABAJIgDAAIABAFQADAHABAHIAAAEIABAGIABADIAAABIAAAAIABACIAAAAIABACIAAgBIAOASQAGAGAIADIAIACIAHACIAAA+QAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAABIAAAGQABAHgBAHIgCADIAAABIAAADQAAAHgDAGIAAADIgFAMIgBABQgGAKgLAEIAAABIgBABIgCABIAAAAIgBABIAAAAIgPAIIgBABIgCAAIgDAAIgIACIgMgBgAAJhJIgIgCIgQgWIAcgeIgdAQIgRgRQAMghgUgcIgFgGIAmgGIAIAJQANAPASgcQAQgZgOgaIgYgJIAAgEIAMgKIAlgNQAGATAZgGIALgCIANAMIgGAlIAAAMIglBEIgMAlIAAAMIgIAaIgdAEg");
	this.shape_8.setTransform(-3,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#363636").s().p("AgCAYIAAgvIAFAvIgFAAg");
	this.shape_9.setTransform(-5.5,-3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("ABPDdIgZgYIgHhiIgFgHIgfhPIAAgeIArhiIACgGIAEgSIAHgDIgDgOIgEgOIACAOIgIALIAAAYIgrBcIgEANIgHAFIAFAkIAlBDIAAATIglgrIgRglIAAgqIAMgrIAkhJIAGgxIgMgSQAGAAAEgDQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAIADADgGIAAgBIgegCIgdgGIAkgGIAkAGIAlAZIgBgGQgHgXgdgCIAAgDQgOABgEgIIAAgCIAYAAIAxAYIAABiIgeA+IgMASIAGAwQAAAVAFgPIABgGIAEACIAAACQAHAFAFAHQAEALACAKIgCgPIACAFIACAKIgCAAIACANQABATgCATIgBACIgCAGQgEAKgEAJIAAgdQABAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIgEgeIgBAXQgeAUALA2IAMgMIAMAYIAVAfIgJAGIAAAJIgSAIgABKiHIgIAIIAAAYIgSAlIgSA3IgHAqIARATIAFAHQAZAmgEAvIAAAGQgPAOATAWIACAAIATAZIgTgfIAAhcIgkg4QgDgPADgUIAkhiIAAgMIAHgJIgHgogABKhHQgCACAAADQgUAmACApIAAAGIAZhPIAeg3IgGhJQAEA/ghA2gAAqDFQgCgKAJAIIAFACQAJARgCAEgABnCQIABAAIABAAIgCAEgAAqBcgAh0ATIAHgDIgBgPIAMAAIAMAUIAEAlIAHgpIAIACIAGAMIAAAZIgNgZIAAArIgSgGIgGAAIgGgxIAAAxIgCASgAiBAIIATgNIAAAGQgRAaAIAiIAAACQgOgVAEgigABVAHIAAgYIAMgYIgGAeIAAASIgGAAgAhuABgAgxjhIAGgGQADAAACACQALAOAbgKIgZARIgKgDIgDAKIgLAGg");
	this.shape_10.setTransform(4.7,-8.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#151515").s().p("AgFgGIAkgDIgBABQgGADABAFIgkAFIgHAAIAAAFIgMAAg");
	this.shape_11.setTransform(5.2,-30);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA0FAIgBgBIgJgBIgDAAIgFgBIgBgCIgCgBQgHgCgFgHIgDgBIAAgBIgBgEIgGgHIgFgGIgBgCIAAgBIgDgEIgBgCIAAAAIgDgBIgBgCIgBgBIAAAAIgYgwIgDgEIAAAHIAAAGIgFAOQADALgFAKIgCAKIgBgBIAAABIgBADQABAHgBAGIgBABIAAABQgBAFgDAFIgBAAIgDAAIgBgBIgCgCIAAgEIAAAAIgCgKIgBgCIAAgDIABgEIABgDIAAgBIABgCIABgDIACgJIABgDIAAgDIABgCIACgIIABgDIAAgBIAAgBIABAAIAAgCIABgEIAAgDIABgEIAAgCIAAgBIAAgDIABgCIgBgeIgHgfIA8BwIAAABIAJAPIABABQAFAEAFAFQAJAMAPABIAMABIAJgCIACAAIADAAIABgBIAOgIIABAAIAAgBIABAAIACAAIAAgBIABgBQALgFAGgKIAAAAIAGgNIgBgDQAEgGgBgHIABgDIAAgBIABgDQACgGgBgHIAAgGIAAgBQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAg+IAAgBIgGgBIgJgCQgIgCgGgHIgOgSIAAABIgBgBIAAgBIAAgBIgBgBIAAAAIAAgEIgBgGIgBgEQgBgHgDgHIAAgFIACAAIAAgJIAAgCIAAgEIgCgoIgWgrIAkArIAAgTIAFAHIAIBhIAYAZIAZALIASgJIAAgIIAJgGIgVgfIgNgYIgMAMQgKg2AegUIABgXIAEAdQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAeQADgKAFgJIACgGIABgDQACgSgBgSIgBgNIgBgKIgCgFIgBgBIgDgFQgGgHgHgGIAAgBIgEgCIgBAGQgFAPAAgVIAAgNIAGAAIAAgSIAGgeQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAIAfg9IAAhiIgxgYIgZAAIABACQADAIAPgBIAAADQAdACAHAXIABAFIglgYIglgGQAAgFAGgEIABgBIgmADQgbAKgLgNQgCgCgCAAIgGAFIAAAfIAKgGIAEgKIAKACIAMAAIAAgEIAGAAIAfAGIAdACIABABQgDAGgJgDQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgFACgGABIAMASIgGAwIglBKIgMArIgGgMIAMglIAlhEIAAgLIAGglIgMgNIgMACQgYAHgHgTIgjANIgNAKIAMg3IAJgEQBDgKBGgCIACAJIAVAEIAUAVQAUAdgIA4QgDATgJANIgeBbQgDAMACAHIABABIABADQARANADATIABAJQACAegGAcIABAKIgFACIgCACIAAAcIAMAeIAMAIIgDAPQgGAegogDIgFBsIgIAOIAAABIgEADIgBgBIgBAAQgIAHgJAGIAAABIgBAAIgCABIAAABIgBAAIgLAGIgBAAIgGADIgBABIgCABIgBAAIAAABIgGAAIgIAAIAAABIgBAAIgIAAgABZB8IASAVQADgEgJgSIgFgCQgEgDgCAAQgDAAACAGgACWBLIABgEIgBAAIAAgBgABBEAQgrgpgfg2IgDgEQgJgMgGgNIAAgBIgBAAIgBgCIgBgCIgBgBIgCgGIgEgHIgHgLIgIgMIgGgHIgCgCQgGgHgJACIAAAAIgKAAIhlAKIBbACIgRAOIgHAQIgGgRIgpAAQgggBAGgOQAKgSAgAFQAzAFALgcQARgHgFgeIAAgGQgegwAegvIAKgDIgKgMIAAgSQAKgkgWgfIA3gGIgJgrIACAEQAJAPAEgNQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgCgFAAgGQADgDAEgCQACgCADABIABADIAXAJQAOAbgQAZQgRAbgPgPIgHgJIgmAGIAEAGQAUAcgMAhIARARIAfgPIgdAdIARAWIgIAqIgEglIgMgUIgMAAIAAgHIgSAOQgEAiANAVIABgCQgJgjARgZIABAPIgHADIALBCIABgSIAGAAIAHAAIASAGIAAgqIAMAZIAAgZIAMAkIgMAMIgDADIgCAAIgBAAIgIAFQgIAEgHAEIgEACQgDADAAADIAAADIgBAEIADgBIACABIACABQAPgCANAEIACABIAIAEIAKAEIADACIAAAAIAAABIAGADQAIAFAIAHIALAKIACABQAIAFAJACIAGATIACAAIADALIABADIAFAOIAAAHIAAAFQAAAEACADIgBACQAAAbACAcQADAggLARQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAg9BEIACADIACACIACABIABABIAAAAIADACQAJAHAFAMIAAACIAFAHIABADIAAABIAAAAIACACIAAABIABABIAEAIIABADIAAAAIADAFIAAACIACACIAFAIIABACIACADIgBAAIAAAAIACACIARAYIAHAHIAEAEIACABIAjA5QACACAAADIACgDQADgMABgLQAKhBgWg+IglgMIgkgfIgSAGIgZgNQAAAAgBABQgBAAAAAAQgBAAAAAAQAAABAAAAQgFAJgKACQgDALAHACIACAAIAGAAIAGgBIABAAIACAAgAgdiwQAIAAAGgHQAGgHAAgLIACgfQgMABAEATIAGALQAAAAgBABQgBAAAAAAQgBAAAAAAQAAABAAAAQgKARgKgKgAhACmQgSAAgMgJQgNgJAAgMIAGAAQAogcggAjQgBACAAADQAAADABADQAGANARgHIgGgMIALAAQAdgEgQAQIgFABIgHAFgAB3BvIgCAAQgUgXAQgNIAAgHQADgugZglIgEgIIgRgSIAGgrIASg3IATglIAAgZIAHgIIgBgcIAGAoIgGAJIAAAMIglBiQgCAVADAPIAkA3IAABcIASAfgAhwCGQgHgEAAgMQAsgYgeAlQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAABQgDAAgCgCgAA0gvIgHglIAIgFIAFgOIArhbIAAgZIAIgKIABAAIAEAOIgHADIgFASIgBAAIAAAGIgrBiIAAAfIAeBOgAgDgpIgGgMIAdgFIAHgaIAAArgABlg7QgCgrAUglQAAgDABgDQAig2gEg/IAGBKIgfA3IgYBQIAAgGg");
	this.shape_12.setTransform(0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Stace_1, new cjs.Rectangle(-19.4,-32.8,38.8,65.6), null);


(lib.SlimName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgCAdQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgSIgCgQQAAgFgBgDIgHAFIgGAHIgCADIgBAHIAAAJIAAAEIABAEQAAABAAAAQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgGAAAAgNIABgJIAAgIIAAgIIgBgHQAAgLAFAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAADIAAADIAAAFQADgFAEgFQAFgDAEAAQAHgBACAIIAHgFQADgCAFAAQAIAAADAJIACANIAEAbQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgEAAgBgEIgBgPIgCgOIgCgHQgBgFgCABQgCAAgFACIgGAFIAAAJIABANIABAMIgBAEQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape.setTransform(6.2,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgEAkQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAgJIgBgJIABgLIAAgKQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABIAAAKIgBALIAAAJIAAAJIgBAEIgCABIgEgBgAgCgaQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIADgBQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAIgDgCg");
	this.shape_1.setTransform(1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgEAjIAAgRIABgSIAAgRIAAgRQAAgFAEAAQAEAAAAAFIAAARIAAARIAAAYIgBALQAAAFgEAAQgEAAAAgFg");
	this.shape_2.setTransform(-1.9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgSAiQgKgFAAgHQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIAEAFQAFADAIAAQAGAAAGgDQAJgFAAgHQAAgGgHgEQgGgDgHAAQgIAAgGgCQgGgEAAgIQAAgIAKgIQAIgGAKAAIAKABQAJACAAAEQgBAEgEAAIgHgBIgHgBQgHAAgGAEQgFADAAAGQAAAEAIABIAJACQALAAAGAHQAGAEAAAIQAAAMgLAHQgJAGgLAAQgKAAgGgDg");
	this.shape_3.setTransform(-6.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AB0g2QAwAXAAAfQAAAggwAXQgwAXhEAAQhDAAgwgXQgwgXAAggQAAgfAwgXQAwgXBDAAQBEAAAwAXg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhyA3QgxgXAAggQAAgfAxgXQAvgXBDABQBEgBAvAXQAxAXAAAfQAAAggxAXQgvAWhEAAQhDAAgvgWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-9.6,34.7,18.4);


(lib.Slim_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Main
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgeAFIgSAYIgGAHAA3gjIgeAq");
	this.shape.setTransform(-11.8,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADdlKIgJANIgTAZIgtA8IggArIgCAEIgHAJQgFAHgFAHIgXAfIgPAUIgKANIgDAFIgPAUAAlgzIAGgHIA4hNIADgFIAhgtIAAgBIA9hTIALgQIAOgTIAEgFQAHgDABgIIAEgLADqkjQgGAGgGAMIixD9IgGAIIgDAFIgQAWIgEAGIgFAHAhaCtIABAAIAXgiIABgBIAXghIADgEIABgCAgfBaIANgTAicEMIAagmIACgDIAYgiIABgBIANgTAicEMIADgGIABgBIAYgkIAKgOIAPgXIANgPAjkE7IARgYIAKgOIARgXIAKgOAjJFMIAHgKIAVgdIADgFIAGgIIADgFIgJAOIgDAEAicEMIgFAHAjsFFIAAAB");
	this.shape_1.setTransform(-7.3,-16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AhABHQAAgEgCgDIAAgEIgCgFQgCgHgFgFIAAgCQAAgDgCgCIAAgCIgCgBIAAgEIgHgNIgBgCIgEgLIAJgDIAEgDIAPgNIABgBIAHgEQACgDAAgCQA2gQA1gZQAVgKARALIgMAqIgrAAIg2AkIAAAGIABACIACAsQgRAMgPgJQgSgLAEARg");
	this.shape_2.setTransform(-14.1,-49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1D").s().p("AgVABIgMgFIBCAEIABABIAAAAIgBABIAAABIAAABIABABg");
	this.shape_3.setTransform(10.2,58.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#101010").s().p("AguAdIAAAAIgEgBQgKgCgKABIgDAEIgSAAIgYAAQgBAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBgBgBIASgCIACAAIAFgBIATgCIAAgBQALAAAKABIAJAAIABABIABABIAOACIAsgEQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAAAIgwAHQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAgAAfgFIBbgZIAAAHIgkASIhbAFg");
	this.shape_4.setTransform(3.7,56.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#252525").s().p("AgSAOIAagaQADAGAEgFIACgCIABADIgeAYIgGAAg");
	this.shape_5.setTransform(-14,56.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#141414").s().p("AgpACQAFgCAGAAIBDgFQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAABAAIhVAGIABgEg");
	this.shape_6.setTransform(-12.2,59.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494949").s().p("AgEADIAAAAIABgBIAIgEIgHAFg");
	this.shape_7.setTransform(-28.9,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1C1C").s().p("AAAAAIACgBIACgBIgHAFIADgDg");
	this.shape_8.setTransform(-3.4,21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006600").s().p("AiJBmIgBAAQgKgDgKgGIAAAAIAAgBIAAgBIgBAAIgBgBQgCgEgDgDIgBgCIgLgOQAQABAcAIIABAAIAAABIgBgBIADACIABAAIAAABIABAAIABAAIABAAIAAAAQARAFAQABIAKAAIACAAIABAAIAJAAIABAAIAAAAQAkgEAdgaQAcgLANgbIABgFIAlhDIAGAAIBcgxIgHANIANA9IgNASIgCAAIgqASQgMAAgIAHQgJAHAAAKIgCAAIgHAFQgWANgWALIgBAAIAAAAQgkARgjAKIgLADIgkAKQgSAGgQAAIgBAAQgLAAgLgDgABlAfIACgCIABgBIABgBIABgBIACgCIAIgFIABAAIADgBQAGgDAGgBIAEgCIAFgBIABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAIADAAIABAAIAMgCIACAAQgVAZgcAAIgNgBg");
	this.shape_9.setTransform(-14.7,19.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeA4IAHgJIACgBIAqg9IAYgkQALgIAFAOQAXBDg+AkIghAAIgOACgAgqArQgHgEAAgFQAGAAAEgIQAFgHAAgLIAJgMIgJAMIgRAXIgKAOQACgKgHgDIAagXQAHgIAIgFIADgCIAKgJIABABIAOgOQADgCADgEIAJgGIACABIABACIAAgCIADgGIARgOIAFADIgQAXIgJAGIAAAIIgXAiIgBABIgMASIgGAIIgDAFIgBAAQgKAAgHgEg");
	this.shape_10.setTransform(-22.3,8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373737").s().p("AgEAMIgCgBIAGgFIgDAGIgBAAgAABgHIABAAIgCACIABgCgAADgIIAAAAIgBAAgAAGgLIABAAIgDABIACgBg");
	this.shape_11.setTransform(-19.8,2.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#181818").s().p("AgCAhIAAgGIAAg7IAFAAIAAA2IAAALIgFAAg");
	this.shape_12.setTransform(-7,10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D0D0D").s().p("AgLAYIAAgSQAKABgDgMIgBgGIAFgMIAGAAIAGAAIAAASIAAALIgGAAQgGADgCAKIgJAFg");
	this.shape_13.setTransform(-2.4,-16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#878787").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_14.setTransform(-9.7,-18.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EDEDED").s().p("AgEgBIAJgHIgJARg");
	this.shape_15.setTransform(-31.3,-21);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#222222").s().p("AgBALIABAAIgBABgAABgKIAAgBIABACIgBgBg");
	this.shape_16.setTransform(-8.7,-45.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#212121").s().p("AgFAPIgGgXIAXgGIgMARIAAAMIgFAAg");
	this.shape_17.setTransform(13.5,-22.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#424242").s().p("AAAABIAAgBIABABg");
	this.shape_18.setTransform(14.8,-29.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4B4B4B").s().p("AAAACIABgEIAAAFg");
	this.shape_19.setTransform(11.6,-31.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A2A2A").s().p("AgYAhIAxhCIgkBCg");
	this.shape_20.setTransform(9.9,-35.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AAJgVQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIgdAjg");
	this.shape_21.setTransform(13.8,-40.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C4C4C").s().p("AANDuIAGABIgGABgAgLjuIAFgBIgMAQg");
	this.shape_22.setTransform(14.1,-21);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#242424").s().p("AgQAOQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBIABgIQAFgLAHgGIAWABIgGAAIgXAeQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_23.setTransform(16.6,-44);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("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");
	this.shape_24.setTransform(2.4,4.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7F7F7F").s().p("AgKADIARgSQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAABQAHAagVADg");
	this.shape_25.setTransform(24.4,-52.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#888888").s().p("AgKAHQgHgWATAEQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQATAVgiABIgBgGg");
	this.shape_26.setTransform(23.7,-48.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#707070").s().p("AgIADIAHgFIgBgTQABAAAAABQABAAAAAAQAAAAAAAAQABABAAAAQAUAggdAJg");
	this.shape_27.setTransform(25.5,-56.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC9933").s().p("AivGxQgdgGgagPIABgGQgIgDgIgFQgCgCgBgDIgGAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgTgJgNgNIgphDIAGhJIAthSQAAALgDAKIgDAMIgEAPIgCAJQgGAxAiAkIABACQAJAOANgDIAQAWIAAAAQAbAcAmgKQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIgcgJIASgeIAFADQAZAcAogYIAGgEQAOgIAHgOIAEgHIABgDQAbgvgdgmIgDgEIgDgPIATgeIABgBIAXgiIAAgCIABgBIACAAQAIAAAHgJQAGgJAAgMIAdgrIgdArIABglIAcgGIAFgIIAEgFIAFABQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAFgCAGAAIAAASIAAAAIAJgFQACgKAHgDIAHAAIACAcQgDADAAAFQAAAUAJAQQAlA9g6AnIgMAGIgkAxIAAA9IgrBKIglArQgnAYgpAAQgPAAgPgDgAgcBmIADgDgAjWE4IARgYIAFAIIAPAIIACAIIgFAHIgHAKgAjWE4IgMgQIAAAAIAZgVQAGADgCAKIgRAYgAicEeIAAADIgDABgAjOBwIBQgNQAWgTACgdIABgTIAMgSIAXgDIAIAwIAAAEIgCAEIAAAAIgSAYIgGAHIgEAFIgEADIgnAeIhGAkgAg8BDIAAANIgEAEIgOAHgAg8BDIAAAAgABMgEIAAgSIAwhKQAPAGgNAJIgBABIgZAuQAAAOgJAOQgBADgDABIgFABQgDAAgDgDgAA/gWIgEAAICxj9IgBAIIgYArIgyBDIhcCHIgGAAgAA7gWIgXAAIABgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAAAIABgCIAEgBIAHgDIACgDIAEgCQACgCAAgFIABgDQgBgEgEAAIgDAAIgBgBIAGgHQgFACgHgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQACAAACgDQACgCAAgEIAQgaIAZgeIArg+IA9hPIAYgTIgGAPIg9BTIAAAAIghAuIAhguIAAAAIA9hTIALgQIAOgLIAAgIIAEgFQAHgDABgIIAEgLIgEAEIgMgDQgUgBgLgIIAxgxIA1gtIAPACIAIANIgPA9QgCAcgJAVQgLAcgVgKIgXgBQgHAGgFAMIixD9IAAAAgAA5g8IA4hNgAB0iOIgDAFIAAALIAkgxgAAZgWIAEgCIABgBIABgBQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABgAAVgWIAAgBIAAABgAAxgoIABAAIgCABgAA0gtIABgBIAAABIAAABIgBABIgBACQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAg");
	this.shape_28.setTransform(-8.7,-16.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4F4F4F").s().p("AgHAJIAEgBIgEAFIAAgEgAAEgIIAEgEIgEALg");
	this.shape_29.setTransform(15.6,-48.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ADADAD").s().p("AgHACQAAgFADgDQAEgEAEAAIAFAVg");
	this.shape_30.setTransform(11.9,-53.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("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");
	this.shape_31.setTransform(0,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#616161").s().p("AgqAMIAYgGIgEgXIA4gIIAJAIIgOgDIg1AtIAAgDQgGAEgEAAQgHAAgBgOg");
	this.shape_32.setTransform(19,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Slim_1, new cjs.Rectangle(-42.2,-60.3,84.6,120.7), null);


(lib.Person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AAqBWIgEgnQgCgUAAgSIAAgQIABgRQgBgmgOAAQgTAAgRAYQgRAVgJAgIgBARIgBARIABAQIABAPQAAAIgEAFQgGAFgHAAQgIAAgEgFQgFgFgBgIIgBgPIgBgQQABgSACgfQADggAAgTIgBgQIgBgRQAAgIAFgEQAFgFAHAAQARAAABAXIABAUQAdgnAeAAQAcAAAMAZQAHAQABAgIAAASIAAAQQAAAOAEAXQADAXAAAPQAAAIgEAEQgGAFgHAAQgPAAgDgQg");
	this.shape.setTransform(47,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("Ag0BKQgXgYgCgoQgBgoAVgeQAZgkArAAQAjABASAgQAPAagBAlQAAAmgUAbQgXAggkAAQgdAAgWgXgAgfgjQgLAUAAAZQAAAZAOAOQALAMAQAAQARAAAOgOQAPgOAAgZQADhDgngBIgCAAQgYAAgOAZg");
	this.shape_1.setTransform(27.3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgwBiQgcgKAAgRQAAgIAGgFQAGgFAHAAQAFAAAJAJQAEAEAPACQALACAIAAQAOAAALgEQARgEAAgMQAAgXgigJIgRgEQgXgFgKgHQgOgJAAgTQAAglAigQQALgFAWgGQAXgHAKgFQAIgDAIAAQAIABAEAEQAFAFAAAIIACAPQADAKAAAFQAAAIgFAFQgFAEgIAAQgJABgEgHQgDgEgCgPIgoANQgcALAAAQIALADQAnAHAUANQAcARAAAjQAAAdgYAOQgVANgfAAQgXAAgUgIg");
	this.shape_2.setTransform(8.9,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AhEBRIAAh7IABgRIAAgRQAAgSAQAAQARAAAAAdQAighAoAAQAOAAAIALQAGALAAAWIAAAMQgBAWgRAAQgOAAAAgSIgBgMIAAgPQgdAEgPAMQgPALgLAXIABBgQAAASgSAAQgQAAAAgSg");
	this.shape_3.setTransform(-7.4,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("Ag8BMQgbgWABgoQAAgsAVgfQAZgiAoAAQAcAAATAKQAWAMAAAZQAAASgUAOQgJAGgcANIhCAgQAKAOAOAIQAPAHATAAQALAAARgFQAVgFAFgKQAGgJAHAAQAGAAAGAFQAEAEAAAGQABAUggAOQgbAMgZAAQgnAAgZgUgAgkgvQgOARgHAgIA2gYQAfgQANgLQgPgOgaAAQgWAAgOAQg");
	this.shape_4.setTransform(-26.1,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AhDCPQgGgFAAgIIABhHIAAhEQAAgngCgfIgDgkQAAgMAEgJQAGgLAKAAQAHAAAEAFQAFAFAAAHIgBAGIgBAKQAQgKAOgGQANgFANAAQAjAAARAgQANAaAAApQAAAlgUAZQgWAagkAAQgRAAgUgGIgBBUQAAAIgFAFQgEAEgIAAQgHAAgFgEgAgQhdQgJAGgOANQACAoAAArQATAIASAAQAWAAAMgRQAKgNgBgXQAAgggHgQQgIgPgPAAQgQAAgNAGg");
	this.shape_5.setTransform(-45.7,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Person, new cjs.Rectangle(-57.6,-30,115.8,54.2), null);


(lib.MickName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AANAlQgCgFgGgGIgHgMIgJAGIgBAPIgBAEIgDABQgFAAAAgHIAAgMIABgMIAAgQIAAgRIAAgFIAAgFQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIABAEIABAFIAAAFIAAAQIgBAQIAMgKIALgLIADgCQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgBAEIgPAOIALAOQAHAKAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBgBg");
	this.shape.setTransform(8.6,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgNAVQgHgGAAgKQAAgJAGgLQAIgMAIAAQAFABAGACQAHACAAAFIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgDgBIgCgCQgCgCgHAAQgEAAgFAIQgEAJAAAFQAAAGAEAEQAEADAGAAIAGgBIAGgDIACgBIADACQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAEgHADQgHACgEAAQgJABgHgHg");
	this.shape_1.setTransform(3.1,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgEAkQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAgJIgBgJIABgLIAAgKQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABIAAAKIgBALIAAAJIAAAJIgBAEIgCABIgEgBgAgCgaQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIADgBQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAIgDgCg");
	this.shape_2.setTransform(-0.8,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AAeAlIgDgIIgBgJIgHghIgKAdIgCAJIgEAJQgCADgCAAQgDAAgCgCIgCgGIgBgFQgFgSgEgSIgCAIIgGAZIgCAOQgCADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgDQgBgJAEgMIAFgTIADgPQACgKACgEQADgCACAAQADAAACADQACAFACANQADAPAGATQAFgTAGgUIABgHIADgHQACgEADAAQAEABACAHIACAMQADAWAEAPIACAJIACAIQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgDABgCgDg");
	this.shape_3.setTransform(-6.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AB0g2QAwAXAAAfQAAAggwAXQgwAXhEAAQhDAAgwgXQgwgXAAggQAAgfAwgXQAwgXBDAAQBEAAAwAXg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhyA3QgxgXAAggQAAgfAxgXQAvgXBDABQBEgBAvAXQAxAXAAAfQAAAggxAXQgvAWhEAAQhDAAgvgWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-9.6,34.7,18.4);


(lib.Mick_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#515151").s().p("AADAXIgBgBIABAAIAAABgAgCARIADgnIgBAoIgCgBg");
	this.shape.setTransform(8.4,49.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AgBADIgBgFIACABQAAABADACIAAABg");
	this.shape_1.setTransform(8.4,51.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2F2F").s().p("AgFAAIALgFIAAAJQgDgGgFADIgDAFIAAgGg");
	this.shape_2.setTransform(13,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292929").s().p("AgLAJIAXgYIgXAfIAAgHg");
	this.shape_3.setTransform(3.2,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D2D2D").s().p("AAMgUIAGAAIgjApg");
	this.shape_4.setTransform(6.2,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#282828").s().p("AgOAMIAXgeIAGAAIgdAkg");
	this.shape_5.setTransform(13.3,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5C5C5C").s().p("AAIAEIABgCIAAgBIAAgBIABgBIABABQgBAAAAAAQAAAAAAABQAAABAAAAQAAABABABIgCABIgBgBgAgKADIAAgFIACgCIgBAHg");
	this.shape_6.setTransform(-29.5,57.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2B").s().p("AAXAkIgBAAIgBgCIAAgBQAEgCAAgGIAAAAIABgCIgBAAQADgdAjgdIAHAAIggAzQABAIgGAHIgFAFIgFAAgAhCAkIgBAAIgCgCIAAgEIAAgEIAAgCIABgBIACgDIABAAIAAgBIAGABIABABIABABIABABIAAABIgCACIgDACIAAAAIAAADQABADgDACIgDAAg");
	this.shape_7.setTransform(-22.8,55.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3D3D3D").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_8.setTransform(-21.9,26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#535353").s().p("AAAAAIAAAAIAAAAg");
	this.shape_9.setTransform(-33,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhqBhIAMgVQALgHAAAMIABAQgAgtAbIATgjIAYggIAkgqQAIgLAHgDIAJAAQAKALgEAPIAEgBIAbBKIAMAxIhCAbIgDgHIgCAJIgyAPgABMhDIAFAIIALAtg");
	this.shape_10.setTransform(4.7,16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AAAgHIABAAIgBAPg");
	this.shape_11.setTransform(-19.2,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7A7A7A").s().p("AgIAGIASgLIgSALg");
	this.shape_12.setTransform(-24.1,-25.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDEDED").s().p("AgRAYIAAgHIALgNQgFAJgBAMQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAgAAQgYIACAEIgKAGg");
	this.shape_13.setTransform(36.2,-23.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#323232").s().p("AgRASIAdgjIAGAAIgdAjg");
	this.shape_14.setTransform(16,-1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("Ag2BDIBniGIAGAAIhnCGg");
	this.shape_15.setTransform(22.8,-10.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A1A1A1").s().p("AgBAAIADAAIAAABg");
	this.shape_16.setTransform(1,-44.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#676767").s().p("AAHgIIABAAIgPARg");
	this.shape_17.setTransform(13.4,-42);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC99").s().p("AgIIfIgOgIIgMgMIATh/IAAgSQgBgngPglIASg9IgFgVIBagWIAAAGIgmDfIgFAoIABAGQACARAHAQQAEALAMAIIABABIAbAKIgjgBIgKAEIgKAIgAkLIgQgFgBgEgEIgIAAQgCADgEgBIgogBIgDgCIgCgCIAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAIAAgBIABAAIADgCQAxgeAcg0IADgEIAAgKIAFgGIAKgWIACgSIAphFIAtg4IAEgFQARgPANgRIAXAJIAIAbIiEDWQgkAcgCAfIgBAAIAAACIAAAAQAAAGgDACQgCABgDAAIgFAAgAlJhiQgGgNgDgNIAAgaQAGgSADgSQAIgjgFghIAZglIATgNICSgmIADgGIAAgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIABgGQABgKgEgIQgDgGgEgFIgCgCIgIgMIgCgQQgcALgQgZIAAgZQAggFAJggIgRAHIAHgWIAOgLIAJAAIAWAOIANgPIALgVIAngEIAGAIIAAAEQABAGAHgBIAAALIgLAYIALANIAEAAIAIAKIgKAAQgFABgCADQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIAFAAIAVADIAIgHIgMgTIAHgHIAAgHIATAAQAmAlgbAxQgIAOgLAGQgqASARASIAAAMIAAABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAAACIABABIgBABIgBAFIgfAcIgBANIgGAGIgNAMIgLATIgZAeIhJAWIgggcQAKAbgKAcIgYAZIAPAJIAWgiIBigrIATgYIAYgTIBggDIhBAPIAeAOIgrAFIAlANIAAAMIglgNIAWAcIgEAJIgHgCQgdgKgNASQgegIgQAXIAAABIgCADIAAABQgnA0g3AkQgZAQgUAAQgiAAgVgvgAktjHIAJAWIAJgjgAhQmVIAPAWQAIgBAIgCQAmgGgBgnIgQALIhNgSIAXAeIgBAAIADADgAhin5QgHAIAAALQAAALAHAIQAGAIAIAAQAJAAAGgIQAHgIAAgLQAAgLgHgIQgGgIgJAAQgIAAgGAIgAhxnxIABACIAJgNIAbgPQgGgCgFAAQgTAAgHAcgAD0kFIASAHIAAAGIgRAHgAEGkFIgNgMIAZgMIASASQAAAAgBAAQgBAAAAAAQAAABgBAAQAAAAAAABQgFAGgKAAIgMgCgAEPkuQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQA2AEgwAHIgGABQgIgCAFgJgAEYk2IAAgMIAlgSIAVAGIgEARIgFACIgGAFg");
	this.shape_18.setTransform(5.2,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#212121").s().p("AgFARIAAgRIAKgRIgHAUIACAOIgFAAg");
	this.shape_19.setTransform(35,-32.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5E5E5E").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_20.setTransform(24.7,-41.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#343434").s().p("AipFjIABABIgCABgACqljIABAHIAAABg");
	this.shape_21.setTransform(7.5,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5D5D5D").s().p("AhjAPQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQACgCAFgBIgGAHIAEABgAAnAJIAJgFIgJAGgABigOIACgBIAAABIgCAAg");
	this.shape_22.setTransform(10.3,-43.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFCC").s().p("AiJF5IABgRQAXgZgIgkIgJgEIgBgCIgEAAQgsgPgfA2IAAhFQg1AAglAnIAYgfIABgYIgOgVQgbgGgbAPIgHADIBKh2IAZglIAXgUIATgLIABAAIAuggIAtgtQAHgEAAgFIAxgRIAvgIIAOgcIAFgNIAMgMIgJgSIgCgDQAIgDAJAAIAdgEQgLgcgsAIIgwAFIgEgMIAGgGICOigIAQgSIAJgFIAEgCIAugRIACAAIAAgBIAVACIAAAQIgDAHIAAADIgDAGQgDAGgGADIABAMIACAKIACADQAlAKAogQIAAABIADAoIA4gHIADABIACAKIgLAQIAAATIgHARIgLANIgmA+IgLAGIAIAiIgIAIIhoCGIgfAlIgYAfIgrAxIgfAqIgXAZIg+BQQgFAAgDADQgEAEAAAFIgpAwIgBABIgBABIgHALgAFckLIABgDIACABIgDADIAAgBg");
	this.shape_23.setTransform(3.3,-7.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgHAAIAPAAIgPABIAAgBg");
	this.shape_24.setTransform(21.1,-47.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#303030").s().p("AAFAeIADgEIgCAFIgBgBgAAGgXIgOgHIARADIgGAqIgBADg");
	this.shape_25.setTransform(37.9,-36.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiXFbIAGgKIAIgMQADgGABgIQgCgNgSALIgMAGQgSAIgMAPQgaAlgNgcIATgoIABgPIABgRQgrgKgfApQgLAPgVAJIgEgCIAlhRQgSgPgTAOQgUAOgKgHIAAgBQAFgFgDgEIAHgJIA9gLIAMATIAAAOIgaAsIALAAIAugmIAjgEIgEBIIA4glQANgIAOAAIADAAIACACQAKARgIAUQgEANgIAKIADAWIABABIgeAjQgJAEgJADQAGgiASgfgAFJjxIACgRIAAgBQAIgIAAgLIgBgFIgHgLIg3AIIgEgLIABgdIhNAGIAIghIgBgiQgbgKgcARIgBgCIARgPIAPgFIAQgBQAKAAAHALQAHAKAAAPIACAKIAAACIABAIIABABQACAFAGgBIAHgBIAfgOIAZABIAFAtQAFACAFgBQAEACAEgBIADgBIAKgEIAYABIgEAqQgDAegOAAIgEAAgAg0kmIgBAAIgCgEIAAAAIA0gGIAIADQgNARgRAAQgNAAgOgKgAg/lnIAAgfIANAAIAAAfgAgQmYIAQgDIgDAVIAAANQgUgJAHgWg");
	this.shape_26.setTransform(2.4,-6.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("AhVgGIAdgZQA4gcBJABIAMAYIABAEIgCACQgHAIgLgJIg2ASIgTAXIgXgHIgMAFQgEABgDgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAIgQAOIAIAGIgMANIgEASg");
	this.shape_27.setTransform(-6,-49.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9900").s().p("AmeI/IAAgDQgHgKgMgFIgCgCQgHgJgLgBIgCABQgBgDABgEIAAgLIAAgXIAAgCQgCgVADgVQAAgagBgbQgBgdABgeIACgDIACgBIAAAAIBfhoIBZgxIglA9IAGAdIAagHIBIg1IACAbIgTAcIgBAAIgBADIABAUQAEAQAOgCIAWgKIA0gsQAJAKgEANIgGAJQgEAGgHAFQgZAXAMAfQADAGACAHIivDFIgCAAQgNAMgTACQgIAAgHADgAF+lNIAFgrIgRgCIgOABIgSAGQgLADgBgKIgCgjIgqgBIgbAJIgFguIgvgPIABgBIABAAIACgBIAJgIIACgDQAIgJAIgHIABgBIABgBIACgCIATgQIAEgCIAIgIIABgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIANgMQAOgLAOgJIACgBQAHgCADgEQAvgXA4ALQAiApgJA5IgTAxIgBAGIgHAUIgHAMIAAACIgIASIAAACQgNAWgQASgACpm0IACgBIABACIgDgBg");
	this.shape_28.setTransform(0,-1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("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");
	this.shape_29.setTransform(0.1,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mick_1, new cjs.Rectangle(-45.9,-60.5,91.9,119.3), null);


(lib.BuffyName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AAQAZIgEgDIgIADIgFABQgMABgEgHQgFgGgBgMQABgLAHgJQAJgIAKAAQAEAAAGACQAGADAAAEIgBACIgBAGIAAAKIABAKIADAJIABACIABABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgDABIgDgCgAgIgLQgFAGAAAHQAAAIADAEQADAEAGAAQADAAAEgCIAEgDIgBgSIAAgGIABgEIgDgCIgCgBQgHAAgGAHg");
	this.shape.setTransform(6.4,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgCAjQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIAAgFIAAgGIgBgcIgLAAQgFgBABgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAKABIAAgHIAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIADgBQAEAAAAAIIABAEIgBADIAAADIAHgBIAHABQACABAAADIgBAEQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAIgDAAIgGAAIABAcIAAACIAAADQgBALgFAAIgCgBg");
	this.shape_1.setTransform(1.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgEAjQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAgJIgBgJIABgLIAAgKQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAgBQAAABAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABIAAAKIgBALIAAAJIAAAJIgBADIgCACIgEgCgAgCgaQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIADgCQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgDgCg");
	this.shape_2.setTransform(-2.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgYAlQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIgBgLIAAgMIABgMIABgNIgBgIIAAgHQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQABgCAEAAIALABQAHABAEACQAUAKAAAQQAAAHgHAFQgGAEgIADQAPAIAIAJQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgQgQgTgGIAAAKIAAAJIgBAEIgDABIgEgBgAgPgVIABAGIgBAKIgBAIIACAAIACAAQAMAAAGgDIAFgDIADgEQAAgHgIgGQgGgFgIgBIgHgBg");
	this.shape_3.setTransform(-6.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ACSg7QA9AZAAAiQAAAjg9AZQg8AZhWAAQhVAAg8gZQg9gZAAgjQAAgiA9gZQA8gZBVAAQBWAAA8AZg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiRA7Qg9gYABgjQgBgiA9gZQA8gYBVgBQBWABA8AYQA9AZgBAiQABAjg9AYQg8AahWAAQhVAAg8gag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-9.4,43.3,18.9);


(lib.Buffy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#434343").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape.setTransform(-2.4,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6FFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-13.9,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#141414").s().p("AgLAGIAGgBIgDANIAAAAIgBACIgBAAIAAAAIAAAAIAAABIgDACIAAACIABACIgCABgAgDgNIABAJIAAAAIgBADgAgDgYIAAAAIAAACIAAgCgAAGgZIAJgCIgJADIAAgBg");
	this.shape_2.setTransform(-13.5,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DADADA").s().p("AgGAAIAQgHIgTAPg");
	this.shape_3.setTransform(-11.6,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#838383").s().p("AAAADQgKgMAPAIIgCAGQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBg");
	this.shape_4.setTransform(-12.9,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7D7D7").s().p("AgUAGQAGAAAEgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIAegLQAAAKgNAGQgMAHgSAAg");
	this.shape_5.setTransform(-11.7,-3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAGgCQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAABQgFACgFAAg");
	this.shape_6.setTransform(-13.2,-3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CECECE").s().p("AgUAFIAAgFIAXgFIASAAIgQALg");
	this.shape_7.setTransform(-11.1,-5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgEAJIgMgYQARAQAQgBIgDAPg");
	this.shape_8.setTransform(-18.9,-12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A4A").s().p("AgcADQgDgEgCgHIAfAAIAkAAIgTALIgjAGg");
	this.shape_9.setTransform(-16,-8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3C3C3").s().p("AAAAAIAAAAIAAAAg");
	this.shape_10.setTransform(-10.7,-8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgbApQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIAAgGQAdgRATALIgFABQgEACgDADQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgEAMgPAAIgIgBgAgBgpIAjAJIgiABg");
	this.shape_11.setTransform(-13.5,-8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424242").s().p("AAEALIAGgCQgTgKgdAQQgEgQAUAFIAOgGQAUACAKgIIAAAGIAAALIgXAGQACgDADgBgAAdgNIALgBIgRAGg");
	this.shape_12.setTransform(-13,-7.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C4C4C4").s().p("AgVAJQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIATgMIAkAHIgMABIgGAEIAAAAIAAAAQgJAHgMAAIgKgBg");
	this.shape_13.setTransform(-11.7,-8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C6C6C6").s().p("AgZADQgDgRAZAKIAAgBQAFgCAGAAIATAPg");
	this.shape_14.setTransform(-11,-15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#717171").s().p("AgFAPIAFgdIAGARQAAAFgEAEQgCADgEAAIgBAAg");
	this.shape_15.setTransform(-18.7,-19.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E5E5E5").s().p("AgEgIQAFAIAEACIgEAHg");
	this.shape_16.setTransform(-18.2,-20.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4B4B4B").s().p("AAMANQgMgBgJgKQgGgGgCgHQACABADAAIAGgBIAYAYIgGAAg");
	this.shape_17.setTransform(-9.5,-20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383838").s().p("AgUgCIAGAAQATAJgMgQQgBgCAAgDIALAAQgCATAUACIAAADIAAADIgIACQgOAAgTgRg");
	this.shape_18.setTransform(-6.2,-19);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#404040").s().p("AgLgIIAAgGQAKAAAGAJQAHAIAAAMg");
	this.shape_19.setTransform(-8.3,-22);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ABABAB").s().p("AgFAOQgEgOgHgPIgBgDIARAGQAHABAGAFQAFAGABAGQgNAMgGAAQgDAAgCgEg");
	this.shape_20.setTransform(-4.6,-22.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#535353").s().p("AAAAEQgXgFASgIIASAJIABADQABAHgEAAQgEAAgHgGg");
	this.shape_21.setTransform(-20.9,-7.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D6D6D6").s().p("AgYADQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgGgIAPAEIAIgHIAmAXIgIAAQgTAAgagJg");
	this.shape_22.setTransform(-18,-15.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#525252").s().p("AgLgJIgDgIQAPANAJgGQACgBADAAIgXAdg");
	this.shape_23.setTransform(-1.9,-26);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#252525").s().p("AgEAFQAAgBAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQACgCAFgCQgBAJgHAAIgBAAg");
	this.shape_24.setTransform(-6,-28.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2E2E2E").s().p("AgLgQQAIASAEgBQAWgDgQAKIgHAGIAAADQgRgEAGgdg");
	this.shape_25.setTransform(-21.8,-11.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AhgBTIAAgCIAAAAIgFgxIgIgJQAEACAFgDIADgBQAEAAACgDIAKAMIAEAwIgJACIAAABIgKACgAASAsIAAgDIgCABIAAAAIgCACIgEgCQgDgHgFgFIAAgBIgCgGIgBgMQgBgUACgUIADgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQACgDAAgEQACgBADgCIABgBIAMgHIAFgBIAKgKIABAAIAGgEIABAAIAUAHQAGgEgGgEIgGgGIAmgJIAKAQQgFAJgHAGIgEAFIgKAIQgFAEgEAHIgMASIgQAWQgIANgLALIgHAGIgCABIgBAAgAAIAHIABAAIgBgBIAAABg");
	this.shape_26.setTransform(-4.2,14.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#353535").s().p("AgGAJIADgOIAIgDQAGANgLAEIgEAAIgCAAg");
	this.shape_27.setTransform(-16.8,-12.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#363636").s().p("AgOABQAVADAFgNQAAAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAIAAAGIAAACQgPANgHAAQgHAAAAgKg");
	this.shape_28.setTransform(-14.7,-4.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDEDED").s().p("AAAALQgLgIgDgOQAGAAAFADQAgANgZAHQgDAAgBgBg");
	this.shape_29.setTransform(4.8,-5.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3C3C3C").s().p("AAIAfIgBgGQgEgRgTgCIgFgoQAHAQAFAPQAEALATgTIAGARIgDAAQAKAdgJAAQgEAAgGgEg");
	this.shape_30.setTransform(-4.2,-21.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC9966").s().p("AinD3IgBgBIAAgBQgFgCgEgFIgCgBIgCgBIAAgBIgBAAIgBgCIAAgDIADgCIAAAAIAAAAIABgBIABgBIAAgBIADgMIACgHIABgDIAAAAIgBgJIAbgGIARAUIACADIAGALIACACQADAFAFAEIACACIAAAAIgCABIgBACIgCADQgLACgJgFIgBAAIgCAAIAAABIgCACIgKACIgDADIgBABQgDACgEAAQgEAAgDgCgAhSDqIgFAAIAAAAIgSgMIhCh6IAAADIgBACIgBABIgDAAIgDAAIgEABQABggAHggIAHgbQAGgVAIgUIAegLIgFgKIAGgTIAAgSQAhgHgHgSQgCgCAAgEQALgCgBgPIAAgBIADAAIAAgSIALghIgcgFIAjgNIgHgTIABgEIAGAAQAYAPgPgnIADAAIATAMQAIAAAIgCIAbgCIAIAMIgOgGQgnAcAnAcQAKAHANgEIAsgEIgaBGIgLACIgZgVIgMAVQgUAMAhAQIAFACIAFAKIgEAFQgDAFgGADQgJAFgKAEIgFABQgOAEgPABIgEABIgBAAIgDAAIAAAAIgCABIgCAAIgBACQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAIABACQAKAEAJgCIAsAbIgWAOIgDAAIgHADIgbANIgSAJIgBABQgGADgCAGQgCAFAAAGQgDACACADIgBAEQgCAOACAPIAAADQAAAHADAHIABAIIABACQAAAKAFAIIACAEIAAADIABgBIARAUIABgBQABgGAFgDIACgBIAAgCIABgBIAAgBIABAAIAAAAIAAgBIAKgNIADgEIARgXIADgDIANgTIAFgKIACgEIALgLQAKgIAIgKQAEgGADgGIAAgBQARgVAfgJIAAAAQALgIALgGIAIgDQAQgDARgBQAPgBAOAGQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAHgHAAIgBABIgcAFQgOACgOAEIgLABIAAAAIgBABQAAAIAHgCIAGAAIAQAOIgcACIAeAPQgNAQgTgVQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAbAoIgPAJIAAgCQgDACgDABQgMABgMgBIgCgBIgWgCIgsBLIgeAfQgMANgRAJIgHAEIgBAAQgPAIgPACIgCAAgACrgGIAAAAIAAAAgAgmDmIAGgEIgFAFIgBABIAAgCgAgKDTIAGgGIACgEIABgBIAAgCIABgBIAAgBIACgCIAAgBIACgEIAFgFIAAAAIABAAIAEAAIAAABIAAAAIgFAJQAAABAAAAQAAABABAAQAAABgBAAQAAABAAAAIgBADIABAHIABACIABABIgBADIAAABIgCAAIgEAAIgCgDIgDgCIgBgCIgCABIgFADIgEADIgFACIAIgGgAhDBtIAAgBIAAABgAiIgqIAAgCIABAAIACABIACABIgBAFIgCAAQgDAAABgFg");
	this.shape_31.setTransform(3.5,4.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQgBIAOgNIASANIAAABQABAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgBABQgCAAgCADQgCADAAAEIgFAAIAAAGIAFAQQgbgHADgegAAAggIADgCQAEABABAEg");
	this.shape_32.setTransform(3.7,-17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#313131").s().p("AhaA6QgYgIgFgNIATAGQAEABADgBQALgEgGgOQAKgBgBAOIAWALIgfAMIgCgDgABZgwQAKABgBgNIADAAQAAAKANgDIAGgBQAAABgBAAQAAABAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgDACIgWADIAAgFg");
	this.shape_33.setTransform(-7.4,-15.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#303030").s().p("AgGAHQgBAAAEgFIgMgNIANgHQAFAYAHgFQACgBAEAAIgBAGQgBAKgLACQgBgHgIgEg");
	this.shape_34.setTransform(0,-22.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5A5A5A").s().p("AgJARIAAgGQAEAAABgBQALgJgQgNQAJAAAAgJIAEgBQAEAIACAJIgBAcg");
	this.shape_35.setTransform(-5.5,-26.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#494949").s().p("AgzBhQgDgDgCgOIAjgGIAAAGQgJAAgHAEQgHADAAAFQgDAFgCAAIgCAAgAgPAlIAegMIAGAMgAgtAlIgBgIIgYACIAHgFQAQgLgWAEQgFABgIgTIAAgFQAEgEAFgBIAAABQAGgCAKgBIAMAYQAEANAZAIIABADgABGg8IgYgYIABgGIAFgGIAYAYQAAADACACQAIALgFAAQgDAAgIgEg");
	this.shape_36.setTransform(-14.7,-13.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#414141").s().p("AgGAXQgLgSAPgFIgEgTIAOgDIADAhIgLAMIgGAAg");
	this.shape_37.setTransform(2.2,-24.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8D8D8D").s().p("AgRAPIAXgeIAAgFIAGAAIAGASIAAAFQgBALgLABIgLAGg");
	this.shape_38.setTransform(-1,-25.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BEBEBE").s().p("AgKACQAKgCABgJIAAgGIAAgHIAHAAIADAUQgOAFALARQgEAAgCACIgCABQgFAAgFgVg");
	this.shape_39.setTransform(0.8,-24.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("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BAAQAAABABAAQAAAAABAAQAAABABAAIAUgPIgRAHQgHgDgCAAQgEAAAGAJgAiCgjIgMAGIgBAGQASAAANgHQANgHAAgKgAAqgqQACABACAAQAZgHgggOQgFgDgGAAQADAPALAIgAiNh4IAjgBIgjgJgAAQitQgEAfAdAGIgGgPIAAgGIAFAAIAAABQAIAAgBgHIgBgEIABgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAgBgBIAAgBIgTgOgAjTidQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAhAMAVgDIgogYIgHAHIgIgBQgGAAAEAGgAhXiTIgTgQQgGAAgFACIgBABQgYgLACATIA1AFgADJAjIAAAAIAAAAgAjWhMQARAMgCgNIgBgEIAHgDIAIAGIAkgGQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgNAIQgVgHAEASIgkAFgAgti2IAAgDQgTgBABgUQAUABAEARIABAGIgHAAgAhLjOQAAgNgHgJQgHgJgKAAIgYgOIAPgUIgBATIAWADIgHgLIABgOIAYATIAAAGIABACIAFApg");
	this.shape_40.setTransform(0.5,0.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#656565").s().p("AgFgGIAKgFIABAXg");
	this.shape_41.setTransform(2.1,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Buffy, new cjs.Rectangle(-23.1,-30.1,46.3,60.3), null);


(lib.BubName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgOAlQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBIgBgEIAAgDIAAgEIAAgPIAAgPIAAgNIAAgOQgBgDACgCQACgEACAAQAEABAAAEIAAACIAAACIAAAKIgBANIAJgFIAFgBQALAAAGAIQAHAHgBALQABALgIAIQgGAHgLAAQgHAAgGgCgAgHgCIgHAFIAAAIIAAAIIAAAIIAHADIAGABQAHAAAEgGQAFgFAAgHQAAgIgEgEQgEgFgHAAQgDAAgEACg");
	this.shape.setTransform(5.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AALAXQgGADgHABQgHgBgEgDQgEgCgCgHIgBgVIABgQQABgEAEAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAIgBAIIgBAIIABAMIACAJIADACIADAAQAFAAAIgCIAAgKIAAgIIABgTQAAgEAEAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBASIAAAKIAAAKIABAEIAAADQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAgBgFg");
	this.shape_1.setTransform(0.1,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgWAlIgCgDIAAgPIABgTIABgUIABgOQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAHgBAIAAQAIgBAIAGQAJAHAAAKQAAANgKAFQAHAEAEADQAEAFAAAEQAAAFgHAGQgEAEgFACQgKAFgRAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBgAgOATIAAAKQANAAAHgDQADgBADgDIADgEQAAgDgGgCIgJgEIgEgBIgCAAIgCAAIgGAAIAAALgAgMgUIgBATIAHAAQAHAAAEgEQAFgFAAgGQAAgFgFgEQgFgDgFAAIgHAAg");
	this.shape_2.setTransform(-5.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAshJQgBAAgCAAQgTgDgWAAQgyAAgmAPQgJADgIAEQgsAXAAAfQAAAgAsAXQAsAWA9AAQA+AAAsgWQAsgXAAggQAAgfgsgXQgYgMgdgFQgEgBgFgBg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhpA3QgrgXAAggQAAgfArgXIARgHQAmgPAyAAQAWAAATADQABAAABgBQAAAAAAAAQAAAAgBAAQAAAAgBgBQABABABAAQABAAAAAAQAAAAAAABQAAAAAAAAIgDAAIADAAIAJACQAdAFAXAMQAsAXAAAfQAAAggsAXQgrAWg+AAQg9AAgsgWg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AAphJQgTgDgWAAQgyAAgmAPQgJADgIAEQgsAXAAAfQAAAgAsAXQAsAWA9AAQA+AAAsgWQAsgXAAggQAAgfgsgXQgYgMgdgFQgEgBgFgBQgBAAgCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_5}]},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-9.6,31.9,18.4);


(lib.Bub_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Main
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,3.1).s().p("AAQAUQgagNgLgcIArAqIgGgBg");
	this.shape.setTransform(-5,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,5.5).s().p("AgXgwIAFAAIAqBhg");
	this.shape_1.setTransform(-9.6,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#585858").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_2.setTransform(-31.7,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#000000"],[0,1],0,-0.2,0,0,-0.2,0.7).s().p("AAAAAQAHgDgIAFQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAg");
	this.shape_3.setTransform(-9.4,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0.2,0,0,0.2,5.4).s().p("AgJgRIATgaIgTBXg");
	this.shape_4.setTransform(-9.2,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,3.4).s().p("AgLAfIAXg9IgRA9IgGAAg");
	this.shape_5.setTransform(-10.9,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,3.5).s().p("AgCAiIAAhDIAFAAIAABDIgFAAg");
	this.shape_6.setTransform(-11.8,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#101010").s().p("AgIgFIAGgNIAFANQAAAFACAFIAEABIAAAHIgRAFg");
	this.shape_7.setTransform(-17.9,5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1E1E").s().p("AAtB6IAIgGIAEAHgAg4h6IAGAAIADAkIAJAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_8.setTransform(-24.1,-2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#996600").s().p("AAAAQIgLgRQAWgdABAdIAAAFIgDAAQABAMgJAAIgBAAg");
	this.shape_9.setTransform(-14.6,-45.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#282828").s().p("AAAADIABgGIAAAHIgBgBg");
	this.shape_10.setTransform(-45.3,-10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2E2E2E").s().p("AgCABIAAgBIAFABIgFAAg");
	this.shape_11.setTransform(21.9,53.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#212121").s().p("AgfALQAAgBAAgBQABAAgBAAQAAgBAAAAQAAAAgBAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQACgCAAgDIAGAAIAYAAQAEAAADgCQACgDAAgHIADAAQAHALAKACIAAADIhBAHIABgBg");
	this.shape_12.setTransform(27.4,55.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DCDCDC").s().p("AgIAAIgMgRIAkAGIAGAAIAAALIgTASg");
	this.shape_13.setTransform(26.8,32.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#858585").s().p("AgEAIIgUgSIAxAVg");
	this.shape_14.setTransform(25.3,28.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#323232").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape_15.setTransform(-5.5,-30.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#996600","#000000"],[0,1],35.8,13.2,133.2,13.2).s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_16.setTransform(19.2,42.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,3.4).s().p("AgegIIA9APIAAACIgKAAQgcAAgXgRg");
	this.shape_17.setTransform(2.6,36.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,1.5).s().p("AgMgFQAggDgJAIQgIAHgFAAQgHAAgDgMg");
	this.shape_18.setTransform(8.8,37.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CDCDCD").s().p("AgbgFIAdgSIAJAJIgGAVIARAGIAGALg");
	this.shape_19.setTransform(16.4,36.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FFFFFF","#000000"],[0,1],-4.8,0,4.5,0).s().p("AgYA0QgFgCgDgJIgCgKIgFgLIgFgKIAFgPQADgGACgIIACgYQANgPAQAJQACACACAAIAgASIALASIgSAeIgdAfIgGABQgGACgEAAIgFgBg");
	this.shape_20.setTransform(22.7,35.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#909090").s().p("AgaAFIAAgBQgBgEAEgDQAEgEAEAAIAfACIAMAJIgTAAQgDAAgDgBQgOgIgOANIgBgDg");
	this.shape_21.setTransform(21.9,30.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","#000000"],[0,1],0.1,0.1,0,0.1,0.1,3).s().p("AgSAKIAmgdIgHASIgEADIgKAIIgBABIABAAQAAAFADACIgNACg");
	this.shape_22.setTransform(11.5,27.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,2.9).s().p("AgXAKIAvgVIgBADQgNAUgTAAQgHAAgHgCg");
	this.shape_23.setTransform(14.9,28.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,3.3).s().p("AgQgCIgHABQAMgTAhAUIACABIgLAKQgHgSgWAFg");
	this.shape_24.setTransform(16,25.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFFFFF","#000000"],[0,1],0.1,0,0,0.1,0,6.5).s().p("AgzALIAuAIIAOgTIArglQgSA1g3AWg");
	this.shape_25.setTransform(10.9,16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0.2,0,0,0.2,4.2).s().p("AAfgbIgGAKQgVAmgiAGg");
	this.shape_26.setTransform(-1.7,19.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.2,-0.1,0,-0.2,-0.1,8.8).s().p("AhAA6QAhgpAkgnIAvglIANAHIggAeIgCgDIgCgDIgBAAIgIAIIhRBQIgDgCg");
	this.shape_27.setTransform(0.9,16.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,28.3).s().p("AhOCvIgCAAQg6gwgYhRIAAhJIASg9IABgDIALgWQAHgCADACQgfgigogbIgEgBQgCgFAAgGQARgpAeAeQAXAXAgAMIA3gQQAcgeAWAJIg8AfIBzgMQAtAJAfAXIALAIIAMAPIASASIASBEQAHAugVAoIgEAFIAAAMQgFAAgEAEQgDADAAAFIgBAAQgJgFACANIAAABIgSAWIgeASQgCAPAcATQAGAEADAFQAJALgDAOIgDAAIgUAGQgyALg1gIQgfgEAYAKIABADQg2gEgtgggAg5CnIAFABIgrgrQALAdAbANgAAhCQIAAgDIg8gQQAZAWAjgDgAAzCDQAFAXATgRQAHgHgQAAIgPABgAiQgnIAABCIAxBiIgrhiIAAhCIATg+QAJgGgIADQgBAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAgAAfAEQgCAJAAAJIgTAVIAOAIIACAjIAPAEIAOgJIgNgeIAJgTIABgRIgIgMIAJgQQgEgIgEAAQgHAAgHAZgABwATQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABIgnAdIAIAKIANgCQADABAEgBIABgBIAAAAQAfAJARgcIABgEIABgCIALgLIgCgCQgSgKgMAAQgLAAgGAJgAh9hAIAAA+IAUhYgAhGgJQAjgHAUgmIAGgKgAgJheQgkAoghApIACACIBRhRIAIgIIABAAIADADIABADIAggeIgMgHgAAVglIgIAZQAbgDgHgbgAA/geQA4gWASg3IgrAlIgPAUIgugIg");
	this.shape_28.setTransform(2.4,23.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A3A3A3").s().p("AgYAGIAMgLIAegSIAHAGIgfApg");
	this.shape_29.setTransform(21,10.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FFFFFF","#000000"],[0,1],-2.7,0,2.8,0).s().p("AgbAJIAZgXIAdAMQAAAAAAABQAAABAAAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgHgFIgeARg");
	this.shape_30.setTransform(21.3,8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FFFFFF","#000000"],[0,1],-5.4,0,5.5,0).s().p("AAZB4QgbgMgIgLIAAgCIAdADIgwgVIAAhPQAEghgVgcQgDgDgFgEIAfgqQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIAkAeIAaA/IAKA0QACA0gaApIgGAAg");
	this.shape_31.setTransform(25.8,19.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000099").s().p("AiPCLIgIgHIgDAAIgUgYIgfgbIgpgrIgBgDIgHgKQgmg6ARg5IAlAMIB6AJIAGAAQAFAAADgDQADgCAAgEQALACACALIAAAGIgLAYIgHARIgRA/IAFA8IAMAlgADwiGQANgPAZATQAEACgBAHg");
	this.shape_32.setTransform(-2.8,18);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCCCCC").s().p("AAgAYQgfgRgqgGIgOgGQgQAFgBgLQAigUAyAOQAfAIAeAMIAAAEQgGAIgFgFQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgaAQg");
	this.shape_33.setTransform(13,4.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1D").s().p("AgOAoIAAgNIAShOIAKAqIAAAHIgEAAIgLAkIAAASg");
	this.shape_34.setTransform(28.6,-4.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009900").s().p("AAAAAIABgBIgBADg");
	this.shape_35.setTransform(26.6,7.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC9966").s().p("AgQAHIAQgHIgBAEIgOAEgAARgHIgCACIgGABg");
	this.shape_36.setTransform(41,-14.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#141414").s().p("AgLgEIAZAEIgbAFg");
	this.shape_37.setTransform(36.2,-13.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2A2A2A").s().p("AAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_38.setTransform(19.2,-16.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3D3D3D").s().p("AAAAAIABAAIgBABg");
	this.shape_39.setTransform(11.3,-36.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#363636").s().p("AAJAYIgDAAQAIgfgdgLIAAgFIAHAAQAYAHgBAiIAAAGIgGAAg");
	this.shape_40.setTransform(34.2,-26.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#494949").s().p("AhWD5IABAAIgBADgAmkAGIADABIAAAlgAGkjqIABABIgBAAgAF0j7IABAAIgBABg");
	this.shape_41.setTransform(-3.3,-10.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990066").s().p("ABkGdIgBAAIABgGIADgLIABgBQgEgnATADIgBAAIgBAAIAAABIgHA1gABkEuIABgCIAAAGIgBgEgABuEBIADgEIgMAYQgMgLAVgJgAgWDYIgMgKIARgNIACggIANgMIgLAXIAJAKIgKAeIAPAeIgTAIgAB0DzIABAAIAAAAgACaDXIAMAIIgfACgAAlDaIABgBIgBACgABADDIAJgFIATAGIgpAUgAggCLQAIgLACAGIAAACIgMAMgABdAOIgBgNIAYgHIgRAbgAh+hCIADgGIAKgKIgEAfQgNgDAEgMgAC+h2IAAglQADgDAAgEQACgIAJAGQAFAJAAAJQgDAegLAAIgFgCgAh2i3IgUgVQgPgcAXgEIABABQgJAZAQAAIALgRIAMALIgXAGIAEAcgACyi5IASgTIAAAHIgEAKQgEADgFAAIgCAAIgDgBgAlcjSIAQgYIgQgGIAAgNIAMgkIAMAKIgJAfIAVgXIANAGQAdAKgWAWQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAADABACQAMASgZABIAEgWIgTADIgDABIgEABQgHAUgGAAQgEAAgEgJgAD1kuIAFgFIgFgUIgLgEIgSAFIgHgSIADgFQATgNAUALQAdALgIAgIADAAIAGAQIgeAIgAEzlzIAAgQIAqAkIgOgDIgMATgAk4l9IAfgTIA9gMIgSAfIgLgFIgQAOIgMgPIg1Arg");
	this.shape_42.setTransform(7.5,6.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#313131").s().p("AiXGbIgBgBIAKABgACYmaIABABIgCABg");
	this.shape_43.setTransform(-11.9,16.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1B1B1B").s().p("AgSACQAQgIAUADIABADIgYAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgCACgDAAQgJgCACgBg");
	this.shape_44.setTransform(0.1,-52.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC99").s().p("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");
	this.shape_45.setTransform(-0.2,2.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhYJDIAOgCIAFgRIglAAIA9gSQABAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAMAFAFgLIABgGQgvAIgYgbIADAAIALgKQAKgOAOgJQAEgCACgDIADgLIAEgGIAAgBIAAgCIACgDIAEgEQgCgIgDgHQgHgNgJAAQgrgWgSgpQgDgIgFgHIgYAAIACAOIgEADQAAAGgGAGIgGAGQAAAJgIAGIAAABIgBAAQgHAFgGAGIgDAEIgDADIgBAAIAAABQgIAKgEAMIAAACQgDAHgDAGQgEAGgFAGIgJAOIgBAEIgBACIgjAWIgeAVQgIASAGASQADAKAKAEQALAFAMABIAigCIgBACIAOAAQA0gHA5AEQAHADAIAEIABADIguAAQg/AEg+gEIgKgBIgKgBQgGAAgFgDQgJgGgFgIQgIgYAKgXQADgJAKgGIAKgFIATgNIAAgCQAWgXAPgdQADgHAFgFIAIgIIABgCIAEgDIABgBIAHgIQANgRAKgTQACgDACgDIAAgEIAEgMIABAAIAAgHIgHgIIAnACIgNgkIgEg8IAQhBIAIgQIALgZIAAgGQgCgLgLgCQAAAEgDADQgEACgFAAIgGABIh5gJIglgNQgSA5AmA8IAIAKIABACIAoAsIAgAbIAUAXIgKAAIgKgHQgCgCgEAAIgTggQgIgFgMgBIgBAAIgogvIgDgEIgLgYQgeg9AQg9IABgDIAAgYIgfgMIBCAFIANgHIAFAoIAHgdIAKgGIAAArIAIAIQABAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQgBgYAFgYQABgDAFADIAIBAIARACIAMABIgEgGQACAAADgCQAIgEgNgNIASgGIAAgGQAoAbAfAiQgDgCgHACIgLAWIgBAAIAAADIgTA9IAABKQAZBRA6AwIACAAQAtAgA1AEIAEAAQgBgBAAAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQgZgKAfAEQA2AIAygMIAUgFIACgBQAEgNgJgLQgEgFgGgEQgcgTADgPIA4AfIACAKQACAIAGADQAGADAJgFIAFgBIAfgeIASgfIATgSIAAgNQAZgogCg0IACAOIABArIgBADQgDALgEAIQgHAPgLALIgGASIAAAGIg+A3IgUARIgIAHIABAvIgVAIIABgGIAAgBIAKAAIAHg1IABAAIABgBQgTgDAEAoIgBAAIgDALIADgjIgFAAQgSgFAGARIgfAlQAFAJAHAEIAGAAQASABASACQAdAEAbAKQARgBAFANQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABAAIAZAMIgEAAQABAHgDADQgCACgFAAIAAgFIgBgBQgBgIgKABIAAAAIgGABIgGAMIgGAAIgZgSIAJAAQAfABgXgMIgEgBQgUgLgVgCQgQgCgSADQgeAGgJgLQgDgDAAgGIAlgwIAAgCIgFABQhJAMhLgRIgSAMIABATIgHAGIAAArIAMAFQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAqAAIArAeIANAGIAYAAIAxANQAAgIAGgFQAFgGAHAAIAAgGQABgQgNgCIguARIgMgCIgBgDQAPgdAsALIArAKIAAACQgWAAgCASQgCAUAUgIIADABIARACIAKgIQABAAAAABQABAAAAAAQAAABAAAAQAAABgBAAIgBABIgJAIIgQAAIgwAGIgBAAIgkgGIhQAAIgXALIgNgDIhIgBIgIAEQgFACgEAAQgIAAgHgHgAAYI9IAWgHIAAgGIAGAAQABgOgLgHQgfgXgHAaQgZgMgEASIgBAGIgTgGIAFAVIAOgPQADACACADQABADAAAFQAAAAAAABQAAABAAAAQABAAAAABQAAAAAAAAQALAGAJgIIADgagAggHIIgDAEQgCAIgEAHIgEAHQgIACgFAFIgRAWIAmgDQAQgYgGgdgAihBZQgMARAZgLQAOgDgTgMQgHgEgHgGgAjmBaIgFgBIgCAAIAHABgAkuBAIACAIIA1AMIgfgUIgFgSIgTAAgACrFzIAGgWIgJgJIASgWIAAgBQgCgNAJAFIABAAIABAEIgCAYQgBAJgEAFIgEAQIAEAKgACxFxQABAIAAgLIgBADgAC7FEQgVAJAMALIAMgYIgDAEgADmE1IATAAIgMgKIgggCIAAgMIAFgFQAUgogGgvIgThEQAFADADAEQAVAbgEAiIAABPIATATIAAACQAIALAdALIglgGIAMATgADUEjIAfgBIgMgJgAA0E/IgCgjIgOgIIATgVQAAgJACgJQAKgoAMAWIgJARIAIAMIgBARIgJATIANAeIgOAJgAA9DjIgCAgIgRAOIAMAJIAEAjIAUgJIgQgeIAKgdIgJgLIALgWgAB2EkQgEgCAAgFIABgBIAKgIIAEgEIAHgSQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAHgBQAXgEAIATIgBACIgxAXIAAAAIgCABIgDABIgDgBgACNEFIgNAVIApgTIgTgGgAAvDDIAMgFQAHAbgbADgAAsDOIgCAJIAMgMIAAgDQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgDAAgFAIgAEXBrQALAIAHAMIAJArgADyBMIgegMIgZAZIAMAGIgMAMIgLgPIgLgJQgfgWgtgJIhzAMIA8gfQgYgJgbAeIg2APQghgLgWgXQgfgegQApIgHgNIAZgXIAfARIgGgwIgzABIhOhEIgYgMQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAICDBPIAKgEIAHAEQAYAZgLAeIgBAFIAvAiQBBgrBGgJQAEAAACgBQABgCAAgDIBWAGIAHAEQAzASA0gEIAAAfIAFgEIgCADIgBAMIgCABIABAEIgBAGIAEACIAIATgACpBDIABANIAGAHIARgcgABZAuQArAGAfARIACAAIAAAAIAZgQQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAFAFAGgIIAAgEQgegNgggIQgzgOghAUQAAALARgFgADVAsIAqAOQABgHgEgDQgOgKgLAAQgIAAgGAGgAELAPIAIgKIgCgNIANALIgBAGQgBAMgHAHIAAAAIAAAAQgEAEgGABgAlzARQg6gSgcgyIgCgGIAGhBQAqhLA9g3QABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAlgZIASgYIA3gZIBpglIgSgGIgZgfIAAgeQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgSAogDgpIAfgxIgGAUIgMAXIAYgTQAAgMAQgJQAQgJAXAAIAAgNIAZgPIANAKIALgHQgDgUAbANQAjAQgKgVQADAAACgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAYAAIAYAGIgpAFIALANIhJgGIgVArIgKggIgSAOIgBAFQgJAsgOgNIAAgGQgCgcgXAcIAMATQgNABgHAJQgIAJABALQABALALAHQAJAIAMgBQAkgLgVATQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAtApIAmAQQAfgBAfABQA+ABAfgxIABgBIAAgBIARgfIgKhAIgNgEQgHgxgkgXIgOALIAAgSIgGgNIArAGIASAIIgSAJIASA5IAhAbQgBAKADAKIgEAnIC4AYIAAACIATADIgBABIABgBQAWAFATAHIAGAFIAAABIACAAIAMAJIAAAFIArArQAFAHADAJIAEBAIACAIQgHAKAAAQIgPAIIgBACIgHAIIgIADIgIACIgBACIgRAIIABABIgSAEIgagFIgCAJIgFABIgIgBQgfgTgUAQIAGAfIgTBPIgQgfIAFgxIgSgDIgCgVIATgSIglglIgEABQgKASgPAAIAAgBIgBABIgVgGIgDgLIgagJIgHgHIgPACIgSggIghAHIgCAIIgcAIIgOgUIAHgTIACgBIgBgBIAYgYIAwgMIAKgPQAAgEAGgDQAFgDAHAAICiABIAlAMIgGAAIAAAGQgUgMgTAOIgDAEIAHATIASgFIALADIAFAUIgFAGIAGASIAegJIgGgPIAHAAIACAhIgOgDIgaADIgKgJIAFgVIgMgOIgWAAIgDgmIhigGIg3AGIgMASIg3ATIgVAUIgEAEIAAAGIALAPIBVgtIgMALIAFAGIgFAKIAJAXIALgOIADgIIABgBQAXgPgUAlIAAABIAXgBIABgNIAOgJIAAAlIgCACQgMAMARAIIAFgBIAFgBIAKgfIAHgLIALAZIBEAlIBiAGQAZAAASgUQARgUAAgcIAAAAIgFhDIguAZIgcg1IgWgOIgJgWIhJgcIhoAAIgvAPQgEARgPAJQgnAcgxgBIgWAAIgngFIgBgCIAAABQgggIgSgUIgbgWIgEAAQgBAygagHIASgeIg9AMIgfASIgSAlIA1gqIAMAOIAQgNIALAEQgGAAgDADQgDADgCAFQgOAagJgYQgMgGgPAWQgOAWgUgOIAJgcIhYA1IhsCIIgDAJIgDAHIADAmQAhA1A0AeIgHgDgAEOhfQAAADgDAEIAAAlQAPAHAEgjQAAgKgFgJQgEgCgCAAQgEAAgBAFgAD/h3QADACACgBQAFAAAEgDIAEgKIAAgGgAGAkxIAQAlIAMgUIAOAEIgqglgAg0ANQgEgGAAgIQAAgJAEgHQAEgGAHAAQAGAAAEAGQAFAHgBAJQABAIgFAGQgEAGgGAAQgHAAgEgGgAgugGIgDAGQgEALANADIAEgegAEpgzIAFAAIgBABgAhLiFIAAgjIAWgPIALAVIAAABIABgBIAdAAIgHAVIgNAEIAEAlIgTACgAg9iJIAUAVIAAABIAAgBIgEgbIAXgHIgMgKIgLARQgQgBAJgZIgBgBQgXAFAPAcgAkWiPIABgGQAIgggVAgIgGAAIAIgMIAFgNIAAgSIASgfQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAUgJADASQAgglAhAOIgoAqIBPgZIgDAHQgTAagggCIAAAMQAjAMgjADIAAgDIgCAAQgNgLgEARQADAHgBAFQgEAogXgbIABgGQADgOgMABIATgDIgEAWQAZgCgMgRQgBgDAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAWgWgdgKIgNgGIgVAXIAJgfIgMgLIgMAlIAAAMIAQAGIgQAZQAJAXAMgjIAEAAIgRAhgAHHkNIAAAAIAEAJgAihk7gAg1lpIgEgJQAfAgAqgHQANgGABANIAAACIgaADIgLABQgfAAgPgdgAAEl+QAgACAHgYIAAADQgEAZgQAAQgIAAgLgGgAiVmQQgKgFAEgUQATgKgKAmgAg3mbIgDgDQgEgXAYAQIAAACQgDAKgHAAQgDAAgEgCgAAinCQAVgPgDAbIgGACIgEAAQgLAAADgOgAhYnIIAZAAQgMAMgGAAQgHAAAAgMgAjYngQAKgCAFgJQAAgBAAAAQAAAAABAAQAAAAABAAQABAAAAAAQgCgJALgBIAJgJIAyglIgHAAQgTACAIgOIAFgBIBpgXIABAQIBrgRIgeATIAGAMIgRgDIgHgPIhOAQQAJgYgcANQgYALgNAIIg9AlQgQANANAGIADAAIgMAMQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgJALgGAAQgHAAgEgMgAAJnmIAcgKIAJAQg");
	this.shape_46.setTransform(-0.2,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A06800").s().p("AhqAtIAGgUIgGgNIgDAAQgNgFAQgMIA9glQANgIAYgLQAbgNgJAYIBPgRIAHAPIARAEIAGANIAAASIgGAAIgYgHIAAgCQgWgEgPAKQgDABAJACQALAUgkgQQgbgMADAUIgKAGIgNgJIgZAOIAAANQgXgBgQAKQgQAJAAAMIgYASg");
	this.shape_47.setTransform(-6.9,-50.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#996600","#000000"],[0,1],4.1,37.9,47.6,124.9).s().p("AAAAAIAAAAIABABg");
	this.shape_48.setTransform(-71,51.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,2.9).s().p("AARARQgfgDgGgeIApAgIgDABIgBAAg");
	this.shape_49.setTransform(-59.9,40.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.1,0,0,-0.1,0,3.3).s().p("AgEARQANgPgOgSIgEgFQAVACgCAnIgBACg");
	this.shape_50.setTransform(-57,40.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.6,0.6,0,-0.6,0.6,6.4).s().p("AgyADIALgmIAOAsIAYAEIA0AWIgTABQgtAAglghg");
	this.shape_51.setTransform(-50.6,31.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.5,-3.5,2.7,4.8).s().p("AACAnIgogNIgEgFQgIgGAAgGQAAgGAHgFIAIgHIAHgKIAIgIIAQgDQAFABAJgDIAWgJQATAFgBATQAAADABACIgDAjIgKATg");
	this.shape_52.setTransform(-64.1,50.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0.2,0,0,0.2,1.5).s().p("AAEAMQgWgKASgNQAOAXgHAAIgDAAg");
	this.shape_53.setTransform(-70.6,39.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.1,0.2,0,-0.1,0.2,3).s().p("AABAKIgLgGIgCgBIAAABQgEACAAAEIgIgKIAGgLIAqAVIgTACIgEgCg");
	this.shape_54.setTransform(-60.8,37.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FFFFFF","#000000"],[0,1],0.1,0,0,0.1,0,3.1).s().p("AgJAXQgBgdAUgWIgSA5IgBgGg");
	this.shape_55.setTransform(-77.8,27.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,3.4).s().p("AgEgeIAMA8IgDABQgRgeAIgfg");
	this.shape_56.setTransform(-73.2,33.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.1,0,0,-0.1,0,5.5).s().p("AAfgrIADAGIhDBRg");
	this.shape_57.setTransform(-73.4,20.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.1,0.5,0,-0.1,0.5,5.4).s().p("AALgNIAhAHIhXAUg");
	this.shape_58.setTransform(-62.3,14.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#FFFFFF","#000000"],[0,1],0,-0.2,0,0,-0.2,3.4).s().p("AggAAIBBgFIg+AKIgDgFg");
	this.shape_59.setTransform(-60.9,12.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,3.5).s().p("AgfAMIA8gdIACAGIg7AdIgDgGg");
	this.shape_60.setTransform(-67.1,14.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.1,0.1,0,-0.1,0.1,4.2).s().p("AAbAOQgqgBgWgbIBLAdIgLgBg");
	this.shape_61.setTransform(-59.8,22.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#FFFFFF","#000000"],[0,1],0.3,-0.4,0,0.3,-0.4,8.7).s().p("AAmASIACgDIABgEIgBAAIgKgDIhsglIABgDQAzAMAzAOIA2AZIgBAOg");
	this.shape_62.setTransform(-55.8,23);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#FFFFFF","#000000"],[0,1],0.3,0,0,0.3,0,0.6).s().p("AgCAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIgFgCg");
	this.shape_63.setTransform(-57.3,12.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.2,2,0,-0.2,2,28.2).s().p("AhrDwIgNgPQghgogRgzQgKgeADAbIgDACQgVgzAIg2IAAgCQAQhJA+g5IAygZIAPgGIAHABQAGgDAFgBQAEgBAEgDIAlgGIADAAIAYAAQAFAFAAADQARgrAGgvQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAEgEAFgDQAsgEgNApQgLAfAEAhIAnAqQAnAMACAZIg3goIA/BiQAMArgGAmIgDANIgIARIgIAYIg0AvQgnAbgugBIgGgBIgLAFQgCgEgFgCQgFgBgEACIAAAAQAAgLgJAHIgBABIgcgGIgegTQgOAEgFAiQgBAHgCAGQgGAMgOADgAAyCuIABgDQACgogWgCQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgrgVIgFAKIAIAMQAAACACAEIACAAIAAABQAGAfAfACIAEAAIADAAgAhZCUQALAFgRgdQgSAPAYAJgAhzBxIADgBIgNg9QgJAgATAegAgkBAIgeASIADAPIAPAIIAUgYIAVgBIAPgHIAHgMIATAAQAPgUgpAJQgIACgIAEIgbgIgAA2A/QAtAnA5gIIg1gVIgYgFIgOgtgAiwAqIABAGIATg5QgUAVAAAegAAQAZQAOAYAWgTIgLgIgAgYg1IBrAlIALADIABABIgCAEIgCADIApAOIABgNIg2gbQg1gOgygLIAAADgAgeh+Ig8AeIhCBXIBFhSIA8geIA+gLgAAogSIALABIhLgeQAWAcAqABgAg2hdIBWgVIgggHgAAjiEQAKAFgGgGIgBAAIgDABg");
	this.shape_64.setTransform(-61.1,25.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#FFFFFF","#000000"],[0,1],-2.6,-5,2.3,4.8).s().p("AhdBQIgDgFQgCgeAGgNIACAAIAKAcIgCg2IBHgiQAfgMAOgeQADgFAAgFIA0AIQABABAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABgBAAAAIgLAuIgsAzIgqAgQgmAVgoAAIgPgBg");
	this.shape_65.setTransform(-47.4,46.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.9,-2.6,1.5,2.3).s().p("AANAWQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIACgJIgdgSIAAgNIAgALIADAfIgEABIgBAAg");
	this.shape_66.setTransform(-39.4,37.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#101010").s().p("AgRgBIAVgKIAOgBIgIAMQgGABgDAEQAAABAAAAQAAABAAAAQAAABAAAAQAAABABABIgFADg");
	this.shape_67.setTransform(-54.5,1.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1E1E1E").s().p("AhWBfIAIAEIgDAHgAAzhFQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAIACgCIADABIAEgCIgBAGIgDAAIgBAAgABWhpIABACIgEAAg");
	this.shape_68.setTransform(-50.1,-7.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#282828").s().p("AgDAAIAHgBIgGADIgBgCg");
	this.shape_69.setTransform(-52.4,-30.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DCDCDC").s().p("AgRAPIALgSIAKgTIALAiIADAGIgLAFg");
	this.shape_70.setTransform(-58.6,53.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#858585").s().p("AgEAAIAHgaIACA1g");
	this.shape_71.setTransform(-56,50.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CDCDCD").s().p("AgNgfIAdATIgEAMIgWAEIACASIgHAKg");
	this.shape_72.setTransform(-66.1,46.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#909090").s().p("AAEAJQgCgDABgDQAAgRgRgGIACgDIAAAAQAFgCAFABQAEACACAEIALAcIgDAPg");
	this.shape_73.setTransform(-59.4,48.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#009900").s().p("AAAAAIACAAIgDABg");
	this.shape_74.setTransform(-36.6,42.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A3A3A3").s().p("AgaAIIAIgXIAQAFIAdASIgCAIg");
	this.shape_75.setTransform(-40.9,37.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CCCCCC").s().p("AARA9QAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgZgQIgBgBQABgjgNgpIAAgPQgMgMAJgFQAhAVAKAyQAHAgABAhIgDABQgKgCACgGg");
	this.shape_76.setTransform(-39.6,28.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000099").s().p("ACeB0IgwgQIgLgCQgIAAAAAIIAAABIgKgBIgIgIIgCAAIgUgXIgggbIgngsIgCgCIgHgJQgmg8ASg5IAlANIB4AJIAGgBQAFAAAEgCIAAgBIANABIACAGIABAGIgHAQIAAAAIAJgNIAAgOQB+AJD1AIQgDANgGAoIgEAqIADAhIADANQgDAaAAAxQgLgJgTgGQgjgLhFAAQgnAAgPACQgKg/AAgNIAEgdQgBgGgHAAQgLAAAAAjQAAAMAIBTIAAAIIgBgBIgBABQgHABgqABQggAAg4gSgAn/gvIAdgRIgZAZgAlkhwQAGgCAGABIAIABIgKAAIgKAAgAk5iEQADABACgCQACAGgCAFg");
	this.shape_77.setTransform(-25.4,21.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#494949").s().p("AnsDoIADgBIAAABgAmmiuIABACIghARgAHsjWIABAAIgBABgAG8jnIAAAAIAAABg");
	this.shape_78.setTransform(-10.5,-12.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#990066").s().p("AnIGJIARAMIgCAPgAodGNIADgBIgFADIACgCgAoGGCQAEgQASAQIAFAAgAnhGAIAAAAIAAABgAnlE6IAYACIAIAGIADAUgAnuEvIAAgBIABABIgBAAIAAAAgAokEKIAegSIACgQIAUAKIAegNIAQAHIgZABIgGAMIgeAFIgUAagAkiEOIAEgJIALgGIASARgAnQDOIAJgBQANABgEAFIgBABgABJhJIADgGIAKgKIgEAfQgNgDAEgMgAGGh9IAAglQADgDAAgEQACgIAJAGQAFAJAAAJQgDAdgLAAIgFgBgABRi+IgUgVQgPgcAXgEIABABQgJAZAQAAIALgRIAMALIgXAGIAEAcgAF6jAIASgTIAAAHIgEAKQgEADgFAAIgCAAIgDgBgAiUjZIAQgYIgQgGIAAgNIAMgkIAMAKIgJAfIAVgXIANAGQAdAKgWAWQAAAAAAABQAAAAgBABQAAABAAAAQAAABAAABQAAADABACQAMASgZABIAEgWIgTADIgDABIgEABQgHAUgGAAQgEAAgEgJgAG9k1IAFgFIgFgUIgLgEIgSAFIgHgSIADgFQATgNAUALQAdALgIAgIADAAIAGAQIgeAIgAH7l6IAAgQIAqAkIgOgDIgMATgAhwmEIAfgTIA9gMIgSAfIgLgFIgQAOIgMgPIg1Arg");
	this.shape_79.setTransform(-12.5,7.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFCC99").s().p("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");
	this.shape_80.setTransform(-7.7,2.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("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");
	this.shape_81.setTransform(-18.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_47},{t:this.shape_81},{t:this.shape_44},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_43},{t:this.shape_37},{t:this.shape_36},{t:this.shape_34},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_12},{t:this.shape_11},{t:this.shape_69},{t:this.shape_9},{t:this.shape_15},{t:this.shape_68},{t:this.shape_67},{t:this.shape_2},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},5).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-58.5,91.9,117.2);


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


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("NounPerson");
	}
	this.frame_44 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_52 = function() {
		playSound("Mick");
	}
	this.frame_59 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_68 = function() {
		playSound("Slim");
	}
	this.frame_74 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_83 = function() {
		playSound("Bub");
	}
	this.frame_89 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_98 = function() {
		playSound("Rita");
	}
	this.frame_104 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_113 = function() {
		playSound("Stace");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(40).call(this.frame_44).wait(8).call(this.frame_52).wait(7).call(this.frame_59).wait(9).call(this.frame_68).wait(6).call(this.frame_74).wait(9).call(this.frame_83).wait(6).call(this.frame_89).wait(9).call(this.frame_98).wait(6).call(this.frame_104).wait(9).call(this.frame_113).wait(47));

	// Mick Name
	this.instance = new lib.MickName();
	this.instance.parent = this;
	this.instance.setTransform(-103.9,54.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({alpha:0.801},4).to({alpha:1},1).wait(106));

	// Mick
	this.instance_1 = new lib.Mick_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-98.1,4.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({alpha:0.801},4).to({alpha:1},1).wait(111));

	// Slim Name
	this.instance_2 = new lib.SlimName();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-46.5,54);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).to({alpha:1},5).wait(91));

	// Slim
	this.instance_3 = new lib.Slim_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-30.6,2.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({alpha:1},5).wait(96));

	// Bub Name
	this.instance_4 = new lib.BubName();
	this.instance_4.parent = this;
	this.instance_4.setTransform(24.9,52.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({alpha:1},5).wait(76));

	// Bub
	this.instance_5 = new lib.Bub_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(28.1,3.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({alpha:1},5).wait(81));

	// Buffy Name
	this.instance_6 = new lib.BuffyName();
	this.instance_6.parent = this;
	this.instance_6.setTransform(73.4,52.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).to({alpha:1},5).wait(61));

	// Buffy
	this.instance_7 = new lib.Buffy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(77,-31.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({_off:false},0).to({alpha:1},5).wait(66));

	// Stace Name
	this.instance_8 = new lib.StaceName();
	this.instance_8.parent = this;
	this.instance_8.setTransform(123.5,52.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(109).to({_off:false},0).to({alpha:1},5).wait(46));

	// Stace
	this.instance_9 = new lib.Stace_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(121.7,-32.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(104).to({_off:false},0).to({alpha:1},5).wait(51));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A2pqxIBPAAIBoAAIAYAAIROAFIY6gFIAAAfIAAAVIAAGWIAAEAIAAAgQABAIgBAKIAAAKIAABPIAAAXIAAAhIAAAfIAABJIAAA7IAAAUIAAACIAACwIAAAMQAAACAAACQAAADAAACQAAALAAAKIAAANIAAAGIAAAXIAAAcIgHAAIgNAAMgmdAAAIg3AAIgkAAIhpAAIjjAAA2sq0IAAB0IAACAIAAEUIAAC3IAAA9IAABDIAADTIAAATIAAAMA2sI2IAAA0IAAAMIgCA0");
	this.shape.setTransform(0.5,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AWoK4IgHAAIgMAAI+eAAIgYAAIhHAAIqXgBIiYABAWVKyIAAAGA2nq3IBHABIBZABQABAAABAAIANAAIAYAB");
	this.shape_1.setTransform(1.1,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC33").s().p("AoBBBIgYAAIhIgCImUAAIgMgDIg3AAIgkAAIAkAAIAAADIgNAAIgXgDQg1gDg0AAIjjAAIAAg8IBigMQAMAFAOgCIANACIABgBIAEgCQAJgEAJgBIAFAFIABACIAKAAIAGgGIADgCQAHgFAJAGQAGAEAIgBQAFgEAHAAIAGABQAKADAMAAIASABIAEgBIAGAAQANgBAMgCQAFgBAEABQAJABAGgFQAIgGAIgDQALAPASgDIACgBQAJgMAMABIAFAFIABABIALAAIAFgEQAEgGAFgDQARAXAdABIABAAQADgCACgDIAAgBIAHAAIABAAQAPALAUgHIAFAEIADACIARAAIABgBIAQgKQAGAFAHgCQANAEAOgBQADgBABgDIBnAFIAKgFIBUgCIAeAAQA9gIA4ACIAGAAIABAAIARADQAMADAOACQAlADAlAAIADgBQAKgEALgCIBBgMIABAAQAWADAYgCQAPAMAOgKIAUgDIAEAAQASAOARgPIABgBIANABIADAAQAMAIAMgHIAKABQAHACADgFIABgCIATgBIAGAAQANAFAPgBIACAAIAAAAIAVgEQADAAACACQABABACADIBRACIALgIIASAAIABAAIAJALIAFgCIASgDIAOgHIADgBQAKgGAHADIALADQAeALAhAAIAkAAIAHgPIAPALIANgMIAFAFIAPgLIASAEIAIgMIAGAOIASgKIARAKIAKAOIAcgTQAEgGADAFIgBAAQADADgCADQgEAHALgCIAFABIAMgFIAaABIADAAIABgBIAKgDIATAGIAOgHIArgEIAFgHIBFAJIALgBIAUAIIArgTIA+AVIAZgLQAKABAKADQAPAIANgKIAIgIIAjAIIAxAAQAOAFAOAEQAQADAQgFIABAAIACABQATAOAZgFQARAAALgKQAOAOAVgGIAOgGIAMANIBKgPIAAAFIABAAIAjAAIBBAOIARgIIALAGIA0ADIAbgEIAAAsIAAAtIgNAAMgmdAAAMAmdAAAIAAAFgAlsgiIADAAIgDABIAAgBgAB7goIAEAAIgDACIgBgCg");
	this.shape_2.setTransform(0.3,65.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6FFFF").s().p("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");
	this.shape_3.setTransform(0.6,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("AAAgBIABgBIgBAFIAAgEg");
	this.shape_4.setTransform(70.8,-6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#886800").s().p("Ag7ASQg1gKgyADQgQgFAJgEIAGgCIALgCQAQADAFgLIABgDIAHAAIAmABIABABIAFAAIADgBIAIAAIAHAGIAAgBQgCgGAEgEIAXgHIABgBIBmAAIAEAAIABABIARACIAJABQADADAFgBIAHAAIABABIABAAIAMACIAFABIAPAEIAPADIALACQgzAfg/gCQgWADgVAAQglAAgmgIg");
	this.shape_5.setTransform(-56.8,32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996633").s().p("AjrCKIAAAAQAZgJAQALIABAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgGABIgNACQgQAAgBgPgACYCUIgKgBQgXACgVgJIgBAAIgEgBIgbgCQgDAAgCADIgBACQgmAIgpgGQgTgDgUADIgeAAIhbADIgSgWQAsglAMg2QAHghgQgbIATgNIAChMIgDgCQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBACAAADIAGAHIAAAeIgNgrQBKgLBbALQARAAANgDQBBgDA6gcIgMAZQgGgEAAACIgJBDQgCASgOAMIALAYIgLAGIAIAfQAFgCADgEIgEgHQgHgNALgGIgEgjIANgZIAHgIIgBgvQAMANABAQQACAUgIATQgBAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIAMBHIACADIADAEIAAAEQABAOAFANQABAGACAGQADAHAFAGQARASAQATIADAGIAEADIgGABIgQADIgTAFIgDAAIAAABIAAAAIgEABIgEABQgNABgOAAIgFAAgAh5BGIgMAfQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABIATgnIAPgHIAKgSQAkgcgYgsQgEgLAAAfQABAYgWAKIgCANIgRAFIgLAMIAEAOQAEgDACAAQADAAgDAHgAhfBUIAaAQIgGgPIAKgngAicBZQALAOAIgUQADgGgCgDIgDgBQgFAAgMAQgAB5gcIgIAIIAJA/IAAhRg");
	this.shape_6.setTransform(-55.4,47.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AF8EBQgKAAgKgCQg9gOg7AUQgGgPgPgFQgagIgbAAQgMAAgLADQgwAIgigaQAzgKAkgkIgOgaIgLgBQgfAEgMAaQguAYgyAKQg9ANg+gEIhogNQg1gJg4gDIgBADIgMgBIAAgCIgZAAIAAABIgSAAIgEgKIg5gjIADgTIgUgQIAMgTIgfgLIAhgVIgigZIAXgPIgXgUIAogQIgagUIAggQIgrgfIBAgZIgggGIA6gOIgngXIAjAGIAEACQAEgCAAgFIAAgIIgCgGIAAgEQgDgJADgHIABACIANAGIAEgkIAYAQIAGgBIABgBIAbAKIAHggIARAQICTggIAEgHIAVgEIgTAPIAJAOIAWgHIAOgJIAHgBQAJgBgFARIgBAGQgQAUAcgHQAAAAABgBQAzgVggAdQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAABQgWAFABAOIABADIAUgEIAxAAIgjATIgOgBQAIARATAAQANgDAGAEIgVAZIAYAMIgIAHIgFABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIAhgHIgCAKIgLAUIAYAMQAAAJABAJIABAEQAagfgjgJIgEAAIAHgPIgDgQIAAgMIANgSQAQgEAFAIQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIABAHQADANgKgBQAGAaAHgaIAGgMQAMAAAFAHQABACAAADIASAfIAIASIAKgRIAGgFIAAgXIgMAOIgYgSIAAgYIASgHIAAgeIAGgNQAgAGgBAlIAAAGIAAABQAJAGAPgWIAAgDIAAgMIAOgKQAEAPAJgNIAEgDQAdAIgGAYIAZAAIgMAiIAUgKIAeAOIAFgjIAPARIAQgWQAMAAgIAJIgCADIAXAMIgGAgIAMgrIgPgFIgDgRQgIgHgKAFIgGAKIgRgLIgbAbIgKgQIgRgEIAAgYIgVAEIgGgYIgPAOIgVgLIgNAVIgygSQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgIAKgMgLIgGgTIAYAKIAAgYIgGgKQABgOAIAOQAFAIAIADIAPg3IAJAsIAVgsIgCAsIAVgTIgCAtIAZgZIAMAYIAUgNQAeAvABg7IAAgHIASA+IAMgPIgLgHIgBgcIAOAKIADACIANAJIANAEIATgKIAKAnIACgWIATAdIALgOIgMgMIAIgUIAJAKIgFgjIABgBIAOAIIgJBJIAZgbQAVADgNARQgCACAAADIgoArIgiAGIASAMIgKANIARAGIgeAYIAkANIADAMIA2gUIADACQADABADAAIAFgDIAGgCIAIAVIAHgpIAJgDIACAEQAEANADgOQACgJgIgDIgeALIgBAFIgGAJQgOAEgPADQgSAEgPgNIgDgLIABgHIgJgSIA3gyIABAAIADABQAGAWgdAUQAZAMAPgdQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAQAYIACgfQAHAYAIgNQADgHABgJQAFgEAGAAIAAAEIABABQAFAGABAIQABAIgBAKIAAAJIAABQIAAAWIAEAOIAAASIgEAAIAAggIAAAgIAAAgIAABIIAAA8IAAAWIgHAcgAl/BHIgBABIgCACIgEATIAAACQgBAKACAHIARAGIgDABIgCADIgBADIAAAOIABABIABACIAAACIAAABIABACIACABQgBAEACAEQAKAQAVgFIABgCIAAgDQgIgJgNAAIgBgCQgEgLgBgMQAMgHgBgLIgYgIIAAgBIAAgCIABgDQACgGgBgGIABgCIABgBIAAgEQABAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAIgBgBIgCgCIgDABgAmuBnIgBABIAAAEIABADIABABQAEAEACAEIgDAGQgCAGADAFIADACQAGAFADAGIgBABIgEAHIAAADQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAEADADgDQACgEADgEQALgMgNgHIgCgDIgGgGIADgBIAIgEIABgCIAAgDIgBgBIgVgRIAAABIgDAAIgBAAIgBABgAjuCRIAmAJQgHgXgeABIgggbIgSADIgSgdIgZAXIAFAUIAWgkIAKAlIAZgDIAJAQIAPgEgAhJB4IABAGQAQgTgigFQgBgBAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgQgNgNASQABAoAQgnQABgCAFACQAFABADAEIAAAFIAAAHIAMgCQAEAAABACgAmXgSIgCABIgDAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIABAEIAUAHQAEABABACQAJAQAFARIAFABIAGAjIAGApQAHgxgPgdIABgBIABgBIAAgBIgBgCIgBgBQAAgFgBgD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");
	this.shape_7.setTransform(95.6,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#996600","#000000"],[0,1],-6.4,11.1,91,11.1).s().p("AEXBtIgWAEIgBAKIgqgEIgSgSIAAAdIgGACIgZAAIgXgFIgBgBIgBAAIh0gZIgcALIgHAHQgmgXglATIgFAEIg3gSIgfAMIhPgGIgMgMIgbAGIgFAHIgHAAIAAACIglADIgSAEIgpADIgHgHIgKAGIgMgNIgiAWIgBAAIgKgMIgOgUIgUAXIgOgNIgCABIAAAEQgFgCgEgDIgFgGIgEgHIgBgJQgCghABggQACgaAJgZIACgNIABgEIACgFIADgEIACgFIAGgHIAHgHIAHgGIAKgEQBGgEBGACIASACIABABIAAgBIADgCIACAAIAvAAIADgBIABgBIABgCIA8AFIAgARQBlAFBkgCQAlgBAlgOQAtgSAngdQACgCAFABIAGANIhEAkIgSANIAAAMIgrAlIgpglIgZAGQAGAVASAJQAHACALAHIgLAIIAdAHIATgKQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIABACIABABIACACQAPACAIgEQATgKAKgTIgTAGIgGAKIgjABQACgQAWgEQASgBAQgKIAAgBIgRgDICqAHIAUALIBDgGIB7ATIg3A8IgMA6IAYAfIhWgDQAAgDACgDQAKgSgeALIg2ATgABJAHQg1ASgqgaQgFgDgDgEIAHAFIAMgHIgfgEQApBFBKgwgADvAAIAGgCIgGAAIg9gEgAGngCQgEgMgMACQgXgBgXAFIhVgMQgjgUgtACQgMADgLAEIABADQBVALBWANQAFgBAFADIBEAAIAAAAgAjDgtICHgGQhDgOhEAIQgqgcg4AHIgMgEQAPAYAdgFQAKgCAJAAQAbAAAUAUgAHLBfIATg9IBDgqQAPBNg6Asg");
	this.shape_8.setTransform(89.5,48.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#996600").s().p("AgrBNQgQgFgDgSQgEgdAFgUIA7g2IAtgSIgtAfIgTAeIgfA3QAGAKALAKQAVATAdgGIAlhAIAGhWIAGgcIABAAIAACvIgBAAIgKguIgVBAQgngHglgNg");
	this.shape_9.setTransform(139.4,52.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#000000"],[0,1],-10.6,-0.9,0.3,-0.9).s().p("AgCgRIAAAAIACAAQACASABARIgFgjg");
	this.shape_10.setTransform(59.1,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("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IABADIABABIAFgCIATgEIABgBIACAAIAIgBIABAAIBmAAQAEAAACABIAJABQAIACAIAAIABAAQAIACAIABIABAAIAAABQAJAAAJABQAJACAIAEIAGABIAEAAIADgDIAEAEIACAAIACABIAGADIABACIAAABIAAABIAAABIAAAAIARAOIgMBsIgGAJIAYArIAHAAIgKAMIAAABIAAABQAIANgBAQIABAEIAGAPQAGAOAMAKQAIAHAGAHQAFAGAEAHQApAKAsAAIADABQAFADAFAAQARgJAVACQAEAAAEADQAGAEAGgCQAJgLAOACIACABQAJABAHAFIACgBQAPgIALAJIAEAEQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgBABQgDAFgHgCIgKgBQgMAIgMgJIgDAAIgNgBIgBABQgRAPgSgOIgBgBIgDABIgUAEQgOAJgPgLQgYABgWgDIgBAAIhBAMQgLACgKAEIgDABQglABglgEQgOgBgMgEIgRgDIgBAAIgGAAQg4gBg9AHIgGgMQAUgEATADQAqAHAmgJIABgBQACgDADAAIAbABIAEABIABABQAVAJAXgCIAKAAIAFABQAOAAANgCIAEAAIAEgBIAAAAIADgBIATgFIAQgDIAGgBIgEgEIgDgGQgQgTgRgSQgFgFgDgHQgCgGgBgHQgFgMgBgPIAAgDIgDgFIgCgCIgMhIQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAIgSgCgVQgBgPgMgOIABAvIgHAJIgNAYIAEAkQgLAGAHANIAEAIQgDAEgFABIgIgfIALgHIgLgYQAOgMACgRIAJhEQAAgCAGAEIAMgYQg6AbhBADQgNADgRAAQhcgKhKAKIANArIAAgdIgGgHQAAgEABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABABABAAIADABIgCBNIgTANQAQAbgHAhQgMA2gsAmIASAVIBbgCIAGAMIhUACIgKAGIhngGQgBADgDACQgOAAgNgEQgHACgGgEIgQAJIgBABIgRAAIgDgCIgFgEQgUAIgPgMIgBAAIgHAAIAAABQgCAEgDACIgBAAQgdgCgRgXQgFADgEAGIgFAEIgLAAIgBgBIgFgEQgMgBgJALIgCABQgSADgLgPQgIAEgI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");
	this.shape_11.setTransform(0.2,28.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CBCBCB").s().p("AgCCOIADAAIAAAMIAAgMIACgBIAAACIgCALIAAAAIgCAAIgBABgAABCOgAgCB5IACAFIgCAFIAAgKgAgCh7IAAgfIADAAIAABDIAAhDIACAAIgCBDIgDANgAABiaIAAAAg");
	this.shape_12.setTransform(-144.9,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A6A6A6").s().p("AhwADIAAgFIA7AAICmADIAAACg");
	this.shape_13.setTransform(-45,72.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B5B5B5").s().p("AABAfIgDAAIAAgfIAAgdIADAAIAAA8IAAg8IACAAIAAA8IgCAAgAABgdIAAAAg");
	this.shape_14.setTransform(-144.9,6.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C6C6C").s().p("AgMAAIAAAAIAZAAIAAABg");
	this.shape_15.setTransform(57.7,38.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#959595").s().p("AgBASIAAAUIAAgUIAAg6IADAAIgDBOIAAADg");
	this.shape_16.setTransform(146.1,38.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0F0F0F").s().p("Ah8FGIAAgdIATASIgTAMIAAgBgAB0ktIAFgZIAEAjg");
	this.shape_17.setTransform(121.5,28.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CACACA").s().p("AgagCIALAAIArAAIAAAFg");
	this.shape_18.setTransform(-59.1,73);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CDCDCD").s().p("AgCAaIAAgyIAFgBIgDAzg");
	this.shape_19.setTransform(-144.5,61.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C5C5C5").s().p("AghACIAAgDIA2AAIANADg");
	this.shape_20.setTransform(-104.4,71.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#141414").s().p("AAAABIAAgBIAAABIAAAAg");
	this.shape_21.setTransform(62.4,-4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#202020").s().p("AqbAJIgEgEIAIAAIATAFIgDABIgUABQAAgBAAAAQABAAgBgBQAAAAAAAAQAAgBAAAAgAKQALIAAgGIgGgLQAegMgKASQgCACAAADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQgEACgGAAg");
	this.shape_22.setTransform(58.8,60.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#232323").s().p("AgGANIAHgdIAGAAIgFAhg");
	this.shape_23.setTransform(122.4,28.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C2C2C").s().p("AgRABIAcgJQgDAMAJACQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABg");
	this.shape_24.setTransform(90.8,59.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#363636").s().p("ACiBMIACAGIgCAHgAijhYIAGAAIgFACg");
	this.shape_25.setTransform(129.7,57);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3D3D3D").s().p("AgFAAIgGAAQAAgFAFgEQAGgDAGAAQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQAAAIgEAHQgCAEgDAAQgDAAgFgNg");
	this.shape_26.setTransform(142.8,7.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E1E1E").s().p("ACmAkIACgLQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQACgBgBgEIADAQIgIAPIgNAGgAivgqQAOAEgBgKIAAgGQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAAAAQABACAAADIAAAGQgBAQgEAAQgFAAgIgQg");
	this.shape_27.setTransform(78.3,7.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#272727").s().p("AgLAGIgGgLIAdAAIAGALg");
	this.shape_28.setTransform(-62.5,62.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#282828").s().p("AgIAOIAJgMIACgKIAAgHIAGAAIAAAfg");
	this.shape_29.setTransform(86.1,20.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3A3A3A").s().p("AgNABIAGgLIAUARQgKgHgCAJIAAACIgOgKg");
	this.shape_30.setTransform(124.5,-2.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#222222").s().p("AgIAAIAegLIAAAGIgqARg");
	this.shape_31.setTransform(72.6,59.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#686868").s().p("AgCAfIAAg9IAFAAIAAAeIAAAfIgFAAg");
	this.shape_32.setTransform(-145.5,9.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3B3B3B").s().p("AgGAAIANgEIAAABIgNAIIAAgFg");
	this.shape_33.setTransform(83.4,-3.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B9B9B9").s().p("Ag/ADIAAgDIBoAAIAXADgAg/AAIAAgCQA0AAA0ACgAg/AAg");
	this.shape_34.setTransform(-115.5,71.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#404040").s().p("AGLADIshAAIAAgEICXAAIKWAAIqWAAIAzgBICAAAIANAAIBCAAIGUAAIAAABIAAAEg");
	this.shape_35.setTransform(-101.4,72.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#252525").s().p("AAHgPIAAgGIAIALIgcAgg");
	this.shape_36.setTransform(77.1,3.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#212121").s().p("AgDAAIAHAAIgGABg");
	this.shape_37.setTransform(59,59.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#656565").s().p("AgyADIAAgEIAAgBIBHABIAXAAQADACAEACIg6AAgAgygBIBHAAg");
	this.shape_38.setTransform(-55.5,72.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373737").s().p("AAAAAIAAAAIAAAAg");
	this.shape_39.setTransform(62.3,2.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgGgEIgCgFQgIgLAQADQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAQABAAABAAIAGAAIgDAeg");
	this.shape_40.setTransform(141,8.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#262626").s().p("AgBAvIgFhIIAAgVQADAFACAFQANApgIAqg");
	this.shape_41.setTransform(146.6,-58.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#878787").s().p("AggABIAAgBIBBABIhBAAg");
	this.shape_42.setTransform(-30.4,73.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5E5E5E").s().p("AgCAZIAAgFIAFAAIAAAFgAADAUIgFAAIAAgsIAFAAIAAARIAAAbgAgCAUg");
	this.shape_43.setTransform(145.5,69.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#646464").s().p("AgCBNIAAiYIAFAAIAABmIAAAKIAAAMIAAAMIgBABIgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIgBALIgBAAg");
	this.shape_44.setTransform(-145.5,34.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4C4C4C").s().p("AgCgaIAFAAIgBAvIgEAHg");
	this.shape_45.setTransform(146.8,-51.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#313131").s().p("AgCAAIACAAIADAAg");
	this.shape_46.setTransform(-5.8,61.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#676767").s().p("AgBAGIAAgWIAAAAIAAAWIAAgWIADgDIAAAngAgBgQg");
	this.shape_47.setTransform(146.1,20.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6A6A6A").s().p("AgBAAIAAAGIgBAAIABgGgAgBAAIABgFIADAJIgEACg");
	this.shape_48.setTransform(146.1,65.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2F2F2F").s().p("AsMD8IAAAAIAAAAgALujpIAAgGIADAAIADAAIABABQAQAXACgeIAAgEIABgBIABgBIAEAAIAAAGQAAAhgKAAQgHAAgOgVg");
	this.shape_49.setTransform(43.2,21.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#757575").s().p("AgCBHIAAiNIAFAAIAAAxIAABcIgFAAg");
	this.shape_50.setTransform(-145.5,19.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#727272").s().p("AgCArIAAhVIAFAAIAAA2IAAAfIgFAAg");
	this.shape_51.setTransform(-145.5,2.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#707070").s().p("AgCA6IAAhzIAFAAIAABzIgFAAg");
	this.shape_52.setTransform(-145.5,-7.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BEBEBE").s().p("AABBcIgDAAIAAg3IAAh0IADgMIAAC3IAAi3IACAAIAAC3IgCAAgAABhbg");
	this.shape_53.setTransform(-144.9,-5.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D0D0D0").s().p("AgzACIAAgCIBnAAIAAACgAgzAAIAAgBIBYABIACAAIANAAgAgzAAg");
	this.shape_54.setTransform(-131.4,-66.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#515151").s().p("AWhFaIAAAAIAABPIAAhPIAEAAIAABMIgEADIAAABgAWhFagA2kmpIA9AAIBoAAIAAAGg");
	this.shape_55.setTransform(1.8,-23.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D4D4D").s().p("AWuGYIAAggIADAAIAAAsIgDgMgA2skjIAAiAIAACAIgEgGIAAh6IAEAAIACAAIAACAIgCAAg");
	this.shape_56.setTransform(0.5,-13.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#353535").s().p("AFkHwIAeADIgTADQABADgCADQgCADgCADgAl3mNIAAh0IAAB0IgEAAIgGhvIAAgFIAKAAIADAAIAAACIAAByIgDAAg");
	this.shape_57.setTransform(-107.2,-15.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#888888").s().p("AgFCTIAFklIAEAGIAAESIAAkSIACAAIAAESIgCAAIgEANIgFAAgAAEiMg");
	this.shape_58.setTransform(-145.2,-28.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F6F6F6").s().p("AACgCIAAAFIgCABQgDgJAFADg");
	this.shape_59.setTransform(-146,-66.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B8B8B8").s().p("AAAAeIgBgIIABg0IACAAIAAA9IgCgBg");
	this.shape_60.setTransform(-144.8,68.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#616161").s().p("AAAAAIAAAAIAAAAg");
	this.shape_61.setTransform(-99.5,-60);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#454545").s().p("AABAKQANgQgUgCIgCgBQgIgGAKABQAfADgVAZQgBAAAAAAQAAABgBAAQgBAAAAAAQgBAAAAAAQAAgDABgCg");
	this.shape_62.setTransform(137.3,2.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999999").s().p("AiAKxIAMgEIDiAAIjiAAIABgCIDhAAIAAACIAAAEIgyABIiXABIAAAEgAh0KtgABDq2IA+AAIg+AFIAAgFg");
	this.shape_63.setTransform(-132.9,3.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5D5D5D").s().p("AgFhaIAAAdIAAA9IABAKQABAJAHAAIAAA0IAAAMIAAgMIACAAIAAAMIgCAAIgCA0IABAJIADAAIAAACIgLAEgAgFiVIABAAIgBASg");
	this.shape_64.setTransform(-145.2,57);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(2,1,1).p("A2pqxIBPAAIBoAAIAYAAIROAFIY6gFIAAAfIAAAVIAAGWIAAEAIAAAgQABAIgBAKIAAAKIAABPIAAAXIAAAhIAAAfIAABJIAAA7IAAAUIAAACIAACwIAAAMQAAACAAACQAAADAAACQAAALAAAKIAAANIAAAGIAAAXIAAAcIgHAAIgNAAMgmdAAAIg3AAIgkAAIhpAAIjjAAA2sF9IAAgMIAAgTIAAjTIAAhDIAAg9IAAi3IAAkUIAAiAIAAh0A2uKqIACg0IAAgMIAAg0");
	this.shape_65.setTransform(0.5,2.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00CC33").s().p("AoBBBIgYAAIhIgCImUAAIgMgDMAmdAAAIAAAFgAxFA/IgXgDIAkAAIAAADgAWcA8MgmdAAAIg3AAIgkAAQg1gDg0AAIjjAAIAAg8IBigMQAMAFAOgCIANACIABgBIAEgCQAJgEAJgBIAFAFIABACIAKAAIAGgGIADgCQAHgFAJAGQAGAEAIgBQAFgEAHAAIAGABQAKADAMAAIASABIAEgBIAGAAQANgBAMgCQAFgBAEABQAJABAGgFQAIgGAIgDQALAPASgDIACgBQAJgMAMABIAFAFIABABIALAAIAFgEQAEgGAFgDQARAXAdABIABAAQADgCACgDIAAgBIAHAAIABAAQAPALAUgHIAFAEIADACIARAAIABgBIAQgKQAGAFAHgCQANAEAOgBQADgBABgDIBnAFIAKgFIBUgCIAeAAQA9gIA4ACIAGAAIABAAIARADQAMADAOACQAlADAlAAIADgBQAKgEALgCIBBgMIABAAQAWADAYgCQAPAMAOgKIAUgDIAEAAQASAOARgPIABgBIANABIADAAQAMAIAMgHIAKABQAHACADgFIABgCIATgBIAGAAQANAFAPgBIACAAIAAAAIAVgEQADAAACACQABABACADIBRACIALgIIASAAIABAAIAJALIAFgCIASgDIAOgHIADgBQAKgGAHADIALADQAeALAhAAIAkAAIAHgPIAPALIANgMIAFAFIAPgLIASAEIAIgMIAGAOIASgKIARAKIAKAOIAcgTQAEgGADAFIgBAAQADADgCADQgEAHALgCIAFABIAMgFIAaABIADAAIABgBIAKgDIATAGIAOgHIArgEIAFgHIBFAJIALgBIAUAIIArgTIA+AVIAZgLQAKABAKADQAPAIANgKIAIgIIAjAIIAxAAQAOAFAOAEQAQADAQgFIABAAIACABQATAOAZgFQARAAALgKQAOAOAVgGIAOgGIAMANIBKgPIAAAFIABAAIAjAAIBBAOIARgIIALAGIA0ADIAbgEIAAAsIAAAtgAwBA8gAxcA8gAlsgiIADAAIgDABIAAgBgAB7goIAEAAIgDACIgBgCg");
	this.shape_66.setTransform(0.3,65.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C6FFFF").s().p("A2rKPIAEg0IABAAIACgEQADgHAAgIIgBg8IAAg8IABgeQABgOgNgBIACgLIAAgCIABAAIABgLIABgKIABgEIgGAHIAAjUIAADUIgCADIgCgFIAAhoIAAhcIAEgOIAChCIAAg9IAAi3IAAkUIAAiAIAAhyIAAgCIAJAAIBHABIAAABIhQAAIBQAAIAAADIg+AAICmAGIA9gGIg9AAIAAgDIAYAAIRNAGIY7gGIAAAgIAAAVIAAGWIAAmWIAFBJIAAA3IgFEWIgJD9IgEABIgDAAQAAANgJgBQgIAAgFAEQgGADAAAFQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgEgMIgaAAIgBAAIgGgMQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAVgagggDIANgSIgfgqIAAgIIgNAWIgLAKIAAAEQACAQgFAIIgDAAIgBgCIAAACIgGgEIgJgRIAAAAQgIACgFADIgLAAIgHADIgNgJIgVgSIgDgGIgFgEIgPAAIABABIgFAHIgBACIgBACIgBABIAAADQgCAegQgWIgBgCIgDAAIgKgDIAAgBIgFgCIAAgQIgGgCQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgEADgGABIgIgSIgRAKQADgXgVgLIAAADIgKAIIghgUIgIANIAAAlIgLgEIgSgDIAEAkIgIgGIgOABIAMAbIg3A5IglAQIANgVIgfgTIAxgfIhKgGIAlgqIg9AYQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAJgcIgaAGIgOADIgMgGIAWgQIgKAEIgIAAIgUgMIgWASIgLgGIAHgSIg3AgIgJgZIgBABIgBAFIgFARIgBgCQgDABgCADIgKAIIgYgEIgRAOIgVgOIgBgBIAAABIgQAhIg3gaIgEAdIgYAFIAIAVIhAAMIAzAWIAAACIgvAPIADAQIgpASIAkAdIAAACIgagBIAXAkIgnANIAVAWIgIAFIgDAXIAVAQIABABQgPABgHAGQgIAGABAHQACAHALAEQAKAFALgCIAAABIgHAQIASAYIAAAUIA4AiIgCACIABACIAAADQghADglgFIgSAAQgiAAggAEQgDABgCACQgLAKgFAOIgHAWIgDAMQgMAlAEApQADAhAHAgIgRAJIgOAEIgVgCIgGAHIgMgDIhVADIgLgEQgHgDgKAGIgDACIggABIgEAAIgGgJIgMACIhCABIgbAGIgDAAQgCgNgKADIgNAEQgLACgLABIgJgCIgRgFIgBgBIgOAFIgIAAQgLgJgPAIIgCABQgHgFgJgBIgCgBQgOgCgJALQgGACgGgEQgEgDgEAAQgVgCgRAJQgFAAgFgDIgDgBQgsAAgpgKQgEgHgFgGQgGgHgIgHQgMgKgGgOIgGgPIgBgEQABgQgIgNIAAgBIAAgBIAKgMIgHAAIgYgrIAGgJIAMhsIgRgOIAAAAIAAgBIAAgBIAAgBIgBgCIgGgDIgCgBIgCAAIgEgEIgCADIgFAAIgGgBQgIgEgJgCQgJgBgJAAIAAgBIgBAAQgIgBgIgCIgBAAQgIAAgIgCIgJgBQgCgCgEAAIhmAAIgBAAIgIABIgCABIgBABIgTAEIgFACIAAgBIgCgDIg3ASIgHAAIgBADIggAKIgGACIgcAKIAxAGIAGASIATBLIgTARQANAVgDAcQgFAsghAiQgXAYgdAIIgCgBIgPAAIgGAAQgLADgMABIgEABIgGgBIACADIgBABIgCAAIgFACQgHADgIABIgCgBIAAgDQgCgCgBgDIgBACQgFAEgFAAIgBABIgPALIgHAAIgDgBIgCgCQgNgEgNAFIgFgDIgHgFIgUAAQgEACgBAEIAAABIgCAAQgDgDgEgBQgLgEgGgKQgGgJgLAAIgGAEIgKALIgFgDQgVgHgNARIgGAAIgGgEIAAgDQAAgGgDgDQgMgKgKAQIgEAEQgCADgDABIgFABIgWAAIgJAEIgLAAQgEAAgCACIgOAAIgGgBQgVgJgVAIQgOgGgPAAIgHAFIgFAEIgCgDQgHgFgJACIgEACIgFABIAAAAQgCACgDABQgCACgEABQgQACgRABIgKABQgOACgNgEIgCAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAliHgIAAgBIAAAAgAAaE9IAAABIABgCgAvppIIABgBIgBAAgA2tGEgAzbqMgAzzqMIAAAAIAYAAgA1bqMg");
	this.shape_67.setTransform(0.6,-1.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6A6A6A").s().p("AgBAAIAAAGIAAgGIABgFIADAJIgEACIgBAAIABgGg");
	this.shape_68.setTransform(146.1,65.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5D5D5D").s().p("AgFhaIAAAdIAAA9IABAKQABAJAHAAIAAA0IACAAIAAAMIgCAAIAAgMIAAAMIgCA0IABAJIADAAIAAACIgLAEgAgFiVIABAAIgBASg");
	this.shape_69.setTransform(-145.2,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_69},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_68},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_67},{t:this.shape_66},{t:this.shape_1},{t:this.shape_65}]},129).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-68,293.5,141.3);


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
		var bgm = createjs.Sound.play('bgmNoun',{loop:-1});
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.2;
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
		
		 window.open ("noun_Place.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("noun_def.html","_self");
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


// stage content:
(lib.noun_Person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2repeat:144});

	// timeline functions:
	this.frame_164 = function() {
		this.gotoAndPlay("scene2repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(164).call(this.frame_164).wait(6));

	// Buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).to({_off:true},165).wait(5));

	// Main
	this.instance = new lib.Person("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,361.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMANQgFgGAAgHQAAgGAFgGQAFgFAHAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape_6.setTransform(454.8,54.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMANQgFgGAAgHQAAgGAFgGQAFgFAHAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape_7.setTransform(447.4,54.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMANQgFgGAAgHQAAgGAFgGQAFgFAHAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape_8.setTransform(439.9,54.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgLAEgGAAQgiAAgPgUQgPgSgBglQABgjAYgZQAYgZAhAAQANAAAQAGQATAJABALQAAAEgEADQgBAGgBANIgBAfQABASACALIAJAaIAEAHIABADQAAAGgFAEQgEADgFAAQgDAAgIgGgAgYgkQgQATgBAXQAAAYAJAMQAJAMAQAAQAOAAAJgFQAGgDAJgIQgEgmAAgTIAAgOIACgQIgJgEIgGgBQgWAAgQASg");
	this.shape_9.setTransform(428.5,48);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXB9QgFgEAAgGIABgDQADgTAAgWIgBgoIAAgqIgWACQgPAAgBgPQABgOAZgBIAOAAIADgWQADghANgPQAOgTAgAAQAWAAgBAOQABAOgUAAQgjAAgEAyIgBAJIAggCQAYAAAAAOQgBALgKACQgGABgHAAIghACIgCAgIACAcIAAAbQAAAbgDAQQgCAMgLAAQgGAAgEgEg");
	this.shape_10.setTransform(403.9,44.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgrA+QgUgUgBgiQgBggASgZQAUgeAkAAQAdAAAPAbQAMAVAAAfQgBAfgQAXQgTAageAAQgZAAgRgSgAgZgdQgKARAAAUQAAAVALAMQAKAKANAAQAOAAALgLQANgNAAgVQACg3ggAAIgBAAQgUAAgLAUg");
	this.shape_11.setTransform(388.4,48);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgyA/QgWgSAAghQAAglATgaQAUgcAhAAQAXAAAQAIQATAKAAAVQAAAPgRAMQgHAFgXAKIg3AbQAIAMAMAGQAMAGAPAAQALAAANgDQARgFAFgIQAFgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgWAKgWAAQggAAgVgRgAgegnQgMAOgFAbIAtgUQAagNALgKQgNgLgWAAQgSAAgMANg");
	this.shape_12.setTransform(363.8,47.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBWQgEgEAAgGQAAgSgEgjQgEghAAgSQAAgQgEgIQgKAEgLALIgRATIgIAKIgBAYIgCAaIACAMIABAMQAAAGgEAEQgFAEgGAAQgRAAAAgmIACgaIACgZIgCgYIgBgXQAAghAPAAQAGAAAEAFQAFAFAAAFIgBAJIAAAJIAAAPQAIgPAOgNQAPgNALAAQAXAAAHAXQAIgKALgGQALgFAPAAQAYAAAJAaQACAGAEAjQAEAZAHA6QAAAGgEAEQgFAEgGAAQgMAAgCgMQgDgQgCgeIgFgsQgCgKgDgKQgFgNgGAAQgFAAgPAJQgOAJgFAFIABAbIAEAmQADAYAAAPQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_13.setTransform(343.9,47.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgLAEgGAAQgiAAgPgUQgPgSgBglQAAgjAZgZQAYgZAhAAQANAAAPAGQAVAJAAALQAAAEgEADQgBAGgBANIAAAfQAAASACALIAJAaIAEAHIABADQAAAGgFAEQgEADgFAAQgDAAgIgGgAgYgkQgRATAAAXQAAAYAJAMQAIAMARAAQAOAAAJgFQAGgDAJgIQgEgmAAgTIAAgOIACgQIgJgEIgGgBQgWAAgQASg");
	this.shape_14.setTransform(324.4,48);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAkBHIgEggQgCgRAAgPIAAgNIABgOQAAgfgMAAQgQAAgOATQgOASgIAaIgBAOIgBAPIABANIABANQAAAHgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgHIgBgNIgBgNQAAgPADgaIACgqIgBgOIAAgOQAAgGAEgEQAEgEAGAAQAOAAABATIAAARQAZghAZAAQAXAAAKAVQAGAOAAAbIAAAOIAAANQAAAMAEATQADAUAAAMQAAAGgEAEQgFAEgGAAQgNAAgBgOg");
	this.shape_15.setTransform(309.2,47.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgxA/QgXgSAAghQAAglASgaQAVgcAhAAQAYAAAPAIQATAKAAAVQAAAPgQAMQgIAFgYAKIg3AbQAJAMAMAGQAMAGAQAAQAJAAAOgDQARgFAGgIQAEgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgXAKgUAAQghAAgUgRgAgdgnQgMAOgGAbIAtgUQAZgNALgKQgMgLgWAAQgRAAgMANg");
	this.shape_16.setTransform(275.1,47.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAoBvQgDgMgDgWQgDgWAAgNIAAgMIABgLQAAgbgOAAQgSAAgOAQQgIAJgMAYQAAA4gGAKQgDAJgJAAQgGAAgEgEQgGgEAAgGIACgHQABgDABgSIAAgWIABhqIABgZIgBgOIgCgOQAAgGAEgEQAFgEAFAAQANAAACANQACAOAAAMIgBAgIgBAgIAAANQAMgQAOgIQAMgIAQAAQAYAAAKAPQAGAMAAAZIACAcIADAeQACARADAOIAAAEQABAGgFAEQgFAEgFAAQgLAAgDgLg");
	this.shape_17.setTransform(258.2,43.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJBnQgEgDAAgHIABgQIAAgRIgDhVIgggCQgNgCgBgNQAAgGAFgEQADgFAHABIAeACIAAgUIgBgSQAAgGAFgEQADgEAHAAQAMAAACAVIAAAOIAAAIIAAAJIAVgCQAPAAAFABQAJADAAALQgBAGgDAEQgEAFgHAAIgHAAIgHgBIgUACIADBWIAAAGIAAAIQAAAggQAAQgEAAgFgEg");
	this.shape_18.setTransform(242.2,45.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgoBSQgXgJAAgOQAAgGAFgFQAEgEAGAAQAFAAAHAHQAEADAMADIAQABQAMAAAJgCQAOgFAAgJQAAgUgcgHIgOgDQgUgFgIgFQgMgHAAgRQAAgfAdgNQAJgEASgFIAcgJQAGgDAHAAQAGAAAEAEQAEAEAAAHIACAMIACANQAAAGgEAEQgEAEgHAAQgIAAgDgFQgCgEgCgMIghAKQgXAKAAAOIAIACQAhAGARALQAXAOAAAdQAAAYgUAMQgRAKgaAAQgTAAgRgGg");
	this.shape_19.setTransform(209.5,47.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNBqQgFgEAAgHIAAgaIgBgaIACgiIABghQAAgIAFgDQADgFAHAAQAFAAAEAFQAEADAAAIIgBAhIgCAiIABAaIAAAaQAAAHgEAEQgEAEgFAAQgGAAgEgEgAgJhQQgFgFAAgHQAAgHAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_20.setTransform(198.7,44.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AAkBHIgEggQgCgRAAgPIAAgNIABgOQAAgfgMAAQgQAAgOATQgOASgIAaIgBAOIgBAPIABANIABANQAAAHgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgHIgBgNIgBgNQAAgPADgaIACgqIgBgOIAAgOQAAgGAEgEQAEgEAGAAQAOAAABATIAAARQAZghAZAAQAXAAAKAVQAGAOAAAbIAAAOIAAANQAAAMAEATQADAUAAAMQAAAGgEAEQgFAEgGAAQgNAAgBgOg");
	this.shape_21.setTransform(177.8,47.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AAhBGQgSAKgXAAQgTAAgNgJQgOgJgDgSQgFgnAAgdQAAgVAEgZQACgNAMAAQAGAAAFAEQAEAEAAAGIgCAWIgCAXQAAAYABAQQACASADAKQAFADAFACIAJABQASAAAWgGIAAgeIAAgcQAAgfADgYQABgNANAAQAGAAAEAEQAFAEgBAGIgCA4IAAAeIAAAgIABAKIAAAKQAAAGgEAEQgFAEgGAAQgLAAgDgOg");
	this.shape_22.setTransform(161.8,47.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AgrA+QgUgUgBgiQgBggASgZQAUgeAkAAQAdAAAPAbQAMAVAAAfQgBAfgQAXQgTAageAAQgZAAgRgSgAgZgdQgKARAAAUQAAAVALAMQAKAKANAAQAOAAALgLQANgNAAgVQACg3ggAAIgBAAQgUAAgLAUg");
	this.shape_23.setTransform(145.8,48);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AAkBHIgEggQgCgRAAgPIAAgNIABgOQAAgfgMAAQgQAAgOATQgOASgIAaIgBAOIgBAPIABANIABANQAAAHgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgHIgBgNIgBgNQAAgPADgaIACgqIgBgOIAAgOQAAgGAEgEQAEgEAGAAQAOAAABATIAAARQAZghAZAAQAXAAAKAVQAGAOAAAbIAAAOIAAANQAAAMAEATQADAUAAAMQAAAGgEAEQgFAEgGAAQgNAAgBgOg");
	this.shape_24.setTransform(130.7,47.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAzBMIgKguQgOACgZAFIglAIQgIAUgRAkQgFAJgIAAQgGAAgFgFQgEgEAAgGQgBgIAXguQgCgEAAgFQAAgMAOgDQARgeAZgpQAhg3AJgBQALABAFAPIAJAyIAWBlIAIAXQAFAMAAADQAAAHgFAEQgFAEgGABQgNAAgKgjgAgSALQARgFAkgGIgMg4g");
	this.shape_25.setTransform(102.4,44.6);

	this.instance_1 = new lib.Main();
	this.instance_1.parent = this;
	this.instance_1.setTransform(273.8,196.8,1.81,1.81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance}]}).to({state:[]},165).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'E7A8FD41E090AE48AB38A7D34BBE624F',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmNoun.mp3", id:"bgmNoun"},
		{src:"sounds/Bub.mp3", id:"Bub"},
		{src:"sounds/CrashMountain.mp3", id:"CrashMountain"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/JingleNoun.mp3", id:"JingleNoun"},
		{src:"sounds/Mick.mp3", id:"Mick"},
		{src:"sounds/nounanounis.mp3", id:"nounanounis"},
		{src:"sounds/NounPerson.mp3", id:"NounPerson"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/Rita.mp3", id:"Rita"},
		{src:"sounds/SECorrectAnswer.mp3", id:"SECorrectAnswer"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/SENameOfPlace.mp3", id:"SENameOfPlace"},
		{src:"sounds/SENameofThing1.mp3", id:"SENameofThing1"},
		{src:"sounds/SENameofThing2.mp3", id:"SENameofThing2"},
		{src:"sounds/SESummary.mp3", id:"SESummary"},
		{src:"sounds/SEWrongAnswer.mp3", id:"SEWrongAnswer"},
		{src:"sounds/Skateboard.mp3", id:"Skateboard"},
		{src:"sounds/Slim.mp3", id:"Slim"},
		{src:"sounds/Stace.mp3", id:"Stace"}
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
an.compositions['E7A8FD41E090AE48AB38A7D34BBE624F'] = {
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