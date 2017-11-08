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


(lib.static_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EAAABBBQ7cgBzazaQrbraksuNQgUg7gSg9Qg0iwgli4QhUmmAAnJQAA7dTazaQI1o1Kgk0IAAAsQqPExopIpQzPTOAAbMQAAHJBVGmQAlC4A1CwQASA9AUA7QErN8LOLPQTPTObLAAQbMABTOzPQLPrOErt8QAUg8ASg8QA1ixAli3QBVmnAAnIQAA7MzOzPQoToTpzkuIhlDpIiQltIFuiRIhpDwQJ5ExIZIZQTaTaAAbdQAAHIhUGnQglC3g0CxQgSA8gUA8QktOMraLbQzaTa7dAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.1,-416,848.2,832.1);


(lib.static_predicate_noun_nom_def = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgIAIQgEgEAAgEQAAgDAEgDQAEgDAEAAQAGAAADADQAEADAAADQAAAEgEAEQgEADgFAAQgEAAgEgDg");
	this.shape.setTransform(320.3,101);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AgHA5QgEgDAAgFIABgDIAAgDIAAgMIgBgLIgBgbIgDgcIgEAAQgRAAgKgCQgJgCAAgIQAAgFADgDQADgEAFAAIANACIAMABIAPAAIANAAIASABIASAAQAEAAADADQAEAEAAAEQAAAEgEAEQgDACgEAAIgTgBIgTAAIACAfIABAfIABAIIAAAIQAAAGgCAFQgDAFgGABQgEAAgDgDg");
	this.shape_1.setTransform(311.4,95.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AgiAwQgMgNAAgQQAAgZAYgcQATgXATAAIAHAAIAEABQAEgEAEABQAJgBABAKIABAPQAAAEgCADQgDAEgFABQgIAAgDgIQgBgDgCgCIgGAAQgKAAgLAPQgTAVABATQgBAIAGAGQAFAGAJAAQAGAAAIgEIAMgHQAHgFADAAQAEABAEADQACADABAEQAAAFgEADQgWATgVgBQgSABgMgNg");
	this.shape_2.setTransform(300.9,95.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AgkA8QgIgHAAgaIACgfIABgfIgBgIIAAgIQAAgMALAAQACAAADACIASgDIAOgBQAUgBAMAFQAHADAAAHQAAAEgDAEQgDADgFAAIgDgBQgNgDgMAAIgLABIgPACIgBAgIAegEIATgBQAEAAAEADQADADABAFQgBAIgJACIgTABIggADIgBAQQAAAQABACQABAAAJABIAOAAIAOgBIAFAAIAEgBQAGAAACACQAEADAAAGQAAAIgJACQgIABgYAAQgZABgIgHg");
	this.shape_3.setTransform(291.1,95.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AghA2QgQgLAAgQQAAgLALAAQALAAAAALQAAAFAIAFQAIAFAHABQADAAABgLIABgYIABgrIAAgGIgCAAIgIAAIgKAAQgEAAgEgDQgDgDAAgFQAAgKAOAAIAIAAIAHAAIAPAAIAOgBQAVAAAAAMQAAAEgDADQgDAEgFgBIgEAAIgFAAIgGAAIAAAGQAAA3gIAZQgGATgOAAQgPAAgOgKg");
	this.shape_4.setTransform(280.6,95.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FF").s().p("AgmA7QgDgEgBgEIAAhSIAAgLIAAgKQABgHANgCQAGgBAOAAQAOAAANAJQAQALAAARQAAAJgEAGQgCAFgHAFQAJADAFAIQAHAIAAAIQAAALgMAJQgHAGgIADQgSAHgbAAQgFAAgEgEgAgUAqQANgBAPgFQANgDAAgFQAAgGgJgFQgGgDgGgBIgUgBgAgUgZIAAARIALAAQAXgCgBgPQAAgGgGgFQgHgFgIAAIgMAAg");
	this.shape_5.setTransform(270.4,95.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AgfA1QgUgQAAgmIAAgLIABgLIAAgJIAAgJQAAgGACgGQADgHAGAAQAEAAADADQAEADAAAEIAAAOIAAANIgBALIAAALQAAALADAKQADAMAGAFQAEACAMABQAUAAAHgkQADgRAAghQAAgEADgFQAEgFAGAAQAFAAADAEQACADAAADQAAAfgDASQgEAZgNASQgGAHgIAGQgKAGgJAAQgUAAgKgIg");
	this.shape_6.setTransform(259.1,95.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099FF").s().p("AgpAzQgKgIAAgJQAAgFADgDQADgEAFAAQAHAAADAIQAFAJAQAAQAMAAANgGQANgGAAgHQAAgKgIgDQgGgCgRgBQgNAAgLgEQgOgGAAgMQAAgPAQgNQAQgNATAAQAHAAALAEQAOAEAAAGQAAAEgCADQgEADgEAAIgLgBIgLgCQgLAAgIAFQgJAFAAAGQAAADADACQADACAFAAIATABQASACAKAIQALAJAAAQQAAAUgXALQgSAIgVAAQgUAAgLgJg");
	this.shape_7.setTransform(247.7,95.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAiQgNgKAAgSQAAgTALgOQALgPASAAQAOABAKAEQALAFAAANQAAAJgJAGIgSAIIgaAMQAFADAEADQAGACAGAAQALAAAGgFQAHgDAEAAQAIgBAAAJQAAAIgNAGQgLAEgMABQgSAAgMgJgAgJgSQgGAFgDAKIASgIQAJgEAHgFQgGgCgJAAQgFgBgFAFg");
	this.shape_8.setTransform(467.1,73.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgFIAAgIQgBgCgDAAQgJAAgGAHQgEADgGALQAAAdgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgEIABgFIABgUIAAg0IABgCIAAgNIgBgHIAAgHQAAgEADgDQADgDAEAAQAIAAADAIQABAFAAAJIAAARIgBAPQAGgGAHgDQAFgDAIAAQANAAAGAIQAEAFABALIABATIACAQIACAPIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_9.setTransform(458.2,71);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA3QgDgDgBgEIAAgJIABgJIgBgnIgPgCQgKgBAAgJQAAgEADgDQADgDAEAAIAOABIAAgIIgBgIQAAgFADgCQADgDAFAAQAKAAAAAUIAAAFIAIAAIAMABQAHADAAAGQAAAFgDADQgDADgFAAIgDAAIgFAAIgHABIABAoIAAAEIAAAEQABASgMAAQgDAAgDgCg");
	this.shape_10.setTransform(449.7,71.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVApQgMgFAAgIQAAgHAKAAIAKABQAHADADAAQAPAAAAgGQAAgFgLgEIgUgKQgLgIABgLQAAgPAQgGQAKgDATAAQAHAAAEACQAGADAAAHQgBAPgHAAQgIAAgCgHIgGAAQgRAAgBAEQAAAEALAEIAVALQALAIAAALQAAAMgMAIQgKAFgOAAQgKAAgJgDg");
	this.shape_11.setTransform(435,73);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAiQgNgKAAgSQAAgTALgOQALgPASAAQAOABAKAEQALAFAAANQAAAJgJAGIgSAIIgaAMQAFADAEADQAGACAGAAQALAAAGgFQAHgDAEAAQAIgBAAAJQAAAIgNAGQgLAEgMABQgSAAgMgJgAgJgSQgGAFgDAKIASgIQAJgEAHgFQgGgCgJAAQgFgBgFAFg");
	this.shape_12.setTransform(426.6,73.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAtQgDgCAAgFIgCgaIgCgaIgBgIQgJAGgJAMIgBABIAAAYIgBAGIAAAFQAAAFgDACQgDACgFAAQgHABgCgGQgCgEAAgJIAAgcIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADADAAAFIgBAGQAMgOALABQAMAAAEAJQAFgFAGgCQAGgBAHAAQAPgBAFAQIAEAVIAFApQABAEgEADQgDADgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADASAAAIQAAAFgDACQgDADgFAAQgEAAgDgDg");
	this.shape_13.setTransform(416.1,73.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgJAAgVQAAgRAOgOQAOgNASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAALQAAAOACAHIAEAIIADAHQAAAEgEADQgDADgEAAQgDAAgIgHgAgKgPQgIAJAAAJQAAAKAEAGQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCAAQgJAAgIAIg");
	this.shape_14.setTransform(405.4,73.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgEQABgGgEAAQgHAAgFAIQgGAJgEANIgBAHIAAAGIgBAHIAAAHQAAAFgDADQgDACgFAAQgFAAgDgCQgCgDAAgFIgBgHIAAgHIABgVIABgUIAAgHIgBgHQAAgEADgEQADgCAFAAQAKgBABANIAAABQALgMAMAAQAPABAFAMQAEAIAAAQIAAAGIAAAEIACAQIACAPQgBAFgCADQgEACgEAAQgKAAgBgJg");
	this.shape_15.setTransform(396.8,73);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaAiQgNgKAAgSQAAgTALgOQALgPASAAQAOABAKAEQALAFAAANQAAAJgJAGIgSAIIgZAMQAEADAEADQAGACAGAAQALAAAGgFQAHgDAEAAQAIgBAAAJQAAAIgNAGQgLAEgMABQgSAAgMgJgAgJgSQgGAFgDAKIASgIQAJgEAHgFQgGgCgJAAQgFgBgFAFg");
	this.shape_16.setTransform(387.9,73.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeApQgDgDABgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQAAAMgLAAQgKAAABgKIAAgIQgRADgIAPIAAAnQAAAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_17.setTransform(379.8,73.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWA7QgGADgFABIgMABQgRAAgMgLQgLgLAAgSQAAgVALgMQAMgNATAAIAKABQAFACADACQABgbACgKQABgJAIAAQAFAAADADQADADAAAEIgBAiIgCAiQAAAbACAKIAAACQgBAEgCADQgEADgEAAQgFAAgDgFgAgPAEQgGAGAAAOQAAAIAGAGQAHAGAHAAQAGAAADgBIAHgGIACgCIAAgdQgCgEgEgCQgEgCgGAAQgLAAgFAGg");
	this.shape_18.setTransform(364.1,70.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgEQABgGgEAAQgHAAgFAIQgGAJgEANIgBAHIAAAGIgBAHIAAAHQAAAFgDADQgDACgFAAQgFAAgDgCQgCgDAAgFIgBgHIAAgHIABgVIABgUIAAgHIgBgHQAAgEADgEQADgCAFAAQAKgBABANIAAABQAMgMALAAQAPABAFAMQAEAIAAAQIAAAGIAAAEIACAQIACAPQgBAFgCADQgEACgEAAQgKAAgBgJg");
	this.shape_19.setTransform(355.4,73);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgJAAgVQAAgRAOgOQAOgNASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAALQAAAOACAHIAEAIIADAHQAAAEgEADQgDADgEAAQgDAAgIgHgAgKgPQgIAJAAAJQAAAKAEAGQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCAAQgJAAgIAIg");
	this.shape_20.setTransform(346.7,73.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgmA7QgEgEAAgEIAAhSIAAgLIAAgKQACgHAMgCQAGgBAOAAQAOAAANAJQAQALAAARQAAAJgDAGQgDAFgGAFQAHADAGAIQAHAIAAAIQAAALgLAJQgIAGgIADQgRAHgcAAQgFAAgEgEgAgUAqQANgBAPgFQAOgDAAgFQgBgGgIgFQgHgDgGgBIgUgBgAgUgZIAAARIAKAAQAYgCAAgPQgBgGgGgFQgHgFgIAAIgMAAg");
	this.shape_21.setTransform(330.5,71);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgqA6QgDgDAAgEIABgSIAAgRIAAg+QAAgFACgEQAFgGAGABIAUABQALACAHADQAhARAAAZQAAAKgHAHQgHAIgOAFQAVAMALAMQACADAAAEQAAAEgDAEQgEADgEAAQgEAAgEgEQgXgWgcgIIABAZQAAAEgDADQgDADgFAAQgFAAgDgDgAgXACIADAAQATAAAJgDQAEgCADgEQADgDAAgCQAAgJgLgIQgKgHgLgCIgJAAg");
	this.shape_22.setTransform(320.2,71.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgkA8QgIgHAAgaIABgfIACgfIgBgIIgBgIQABgMAKAAQAEAAACACIASgDIAPgBQATgBALAFQAIADAAAHQAAAEgDADQgDAEgFAAIgDgBQgNgDgLAAIgNABIgNACIgBAgIAdgEIATgBQAEAAAEADQADADAAAFQAAAIgKACIgTABIgfADIgCAQQABAQACACQAAAAAKAAIANAAIAPAAIAEAAIAEgBQAFAAAEACQADADAAAGQAAAIgJACQgIABgXAAQgaABgIgHg");
	this.shape_23.setTransform(310.1,71.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgQA3QgKgWgLgqIgHgVQgEgPAAgGQAAgEADgDQAEgDAEAAQAHAAADAIIAEANIAHAZIAMAnIARguIAHgTQAEgLAGgGQADgEAFAAQAFAAADADQADADAAAFQAAADgCADQgEAGgDAIIgGAQIgVA1IgJATQgDAGgGAAQgIAAgDgIg");
	this.shape_24.setTransform(299.5,71.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgjA8QgJgHAAgaIACgfIABgfIgBgIIAAgIQgBgMALAAQAEAAADACIARgDIAOgBQAUgBAMAFQAHADAAAHQAAAEgDADQgDAEgFAAIgDgBQgNgDgMAAIgMABIgOACIgBAgIAegEIATgBQAFAAADADQADADAAAFQABAIgLACIgSABIghADIgBAQQAAAQACACQACAAAIAAIAOAAIAPAAIAEAAIAFgBQAEAAAEACQADADAAAGQAAAIgJACQgIABgYAAQgZABgHgHg");
	this.shape_25.setTransform(282.4,71.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgiAwQgMgNAAgQQAAgZAYgcQATgXATAAIAHAAIAEABQADgEAFABQAIgBADAKIABAPQAAAEgDADQgDAEgFABQgHAAgEgIQgBgDgCgCIgGAAQgKAAgLAPQgTAVABATQgBAIAGAGQAFAGAJAAQAGAAAJgEIALgHQAHgFACAAQAFABAEADQACADAAAEQAAAFgDADQgWATgVgBQgSABgMgNg");
	this.shape_26.setTransform(272.3,71.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("Ag2A8QgDgDAAgFIAAgJIABgKIAAgNIABgOIgBgOIAAgPIgBgOIgBgNQAAgFAEgEQAEgDAFAAQAGAAAHAKQAjAyAiAfIAAgMIAAgzIgBgIIgBgJQAAgKALAAQANAAAAAmIAAANIgBAxIgBALQgCAKgJAAQgGAAgHgFQgegbglgxIAAAYIAAATIAAASQAAAYgLAAQgGAAgDgEg");
	this.shape_27.setTransform(260.7,71.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgkA8QgIgHAAgaIABgfIACgfIgBgIIgBgIQAAgMAMAAQADAAACACIASgDIAPgBQATgBALAFQAIADAAAHQAAAEgDADQgDAEgFAAIgDgBQgNgDgLAAIgNABIgNACIgBAgIAdgEIATgBQAEAAAEADQAEADAAAFQAAAIgLACIgTABIgfADIgBAQQAAAQACACQAAAAAKAAIANAAIAOAAIAFAAIAEgBQAFAAADACQAEADAAAGQAAAIgJACQgIABgXAAQgaABgIgHg");
	this.shape_28.setTransform(249.5,71.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgHA5QgEgDAAgFIABgDIAAgDIAAgMIgBgLIgBgbIgDgcIgEAAQgRAAgKgCQgJgCAAgIQAAgFADgDQADgEAFAAIANACIAMABIAPAAIANAAIASABIASAAQAEAAADADQAEAEAAAEQAAAEgEAEQgDACgEAAIgTAAIgTgBIACAfIABAfIABAIIAAAIQAAAGgCAFQgDAFgGABQgEAAgDgDg");
	this.shape_29.setTransform(238.7,71.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgpAzQgKgIAAgJQAAgFADgDQADgEAFAAQAHAAADAIQAFAJAQAAQAMAAANgGQANgGAAgHQAAgKgIgDQgGgCgRgBQgNAAgLgEQgOgGAAgMQAAgPAQgNQAQgNATAAQAHAAALAEQAOAEAAAGQAAAEgCADQgEADgEAAIgLgBIgLgCQgLAAgIAFQgJAFAAAGQAAADADACQADACAFAAIATABQASACAKAIQALAJAAAQQAAAUgXALQgSAIgVAAQgUAAgLgJg");
	this.shape_30.setTransform(227.5,71.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgkA5QgEgEABgEQgBgEAEgDQAEgEAEAAIAQgBIgBgjQAAgUACgUIgRABQgFAAgDgDQgEgDABgFQgBgEAEgDQACgDAFAAIAXgBQANAAAYADQAKACAAAJQAAAFgEADQgDACgEAAIgVgCIgBAlIAAAkIAVgBQAFAAADADQAEAEAAAEQAAAEgEADQgDADgFAAIgNABIgOAAIgOABIgQACQgFAAgDgDg");
	this.shape_31.setTransform(217.5,71.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AAXAtIgKgPIgKgOIgYAbIgOAPQgEAEgEAAQgFAAgDgDQgDgEAAgEQAAgEACgDIAPgPIAbgdIgQgUIgJgMQgGgHgEgDQgFgEAAgFQAAgEADgDQAEgEAEAAQAFAAAGAGIAJAJIAJANIAOARIAUgaQAPgTAFAAQAFAAADAEQADADAAAEQAAAEgCADQgLAMgFAIIgTAYIAQAXIARAWQADADAAAEQAAAEgDAEQgDADgFAAQgIAAgMgSg");
	this.shape_32.setTransform(207.2,71.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgjA8QgJgHAAgaIACgfIABgfIgBgIIAAgIQgBgMALAAQAEAAADACIARgDIAOgBQAUgBAMAFQAHADAAAHQAAAEgDADQgDAEgFAAIgDgBQgNgDgMAAIgMABIgOACIgBAgIAegEIATgBQAFAAADADQADADAAAFQABAIgKACIgTABIghADIgBAQQAAAQACACQACAAAIAAIAOAAIAPAAIAEAAIAFgBQAEAAAEACQADADAAAGQAAAIgJACQgIABgYAAQgZABgHgHg");
	this.shape_33.setTransform(196.9,71.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAQAkIgDgQIAAgQIAAgGIAAgHIAAgDIAAgEQAAgGgDAAQgHAAgFAIQgHAJgDANIgBAHIAAAGIgBAHIAAAHQAAAFgDADQgDACgFAAQgEAAgDgCQgDgDAAgFIgBgHIgBgHIACgVIABgUIAAgHIgBgHQAAgEADgEQAEgCAEAAQAKgBABANIAAABQALgMAMAAQAPABAFAMQAEAIAAAQIAAAGIAAAEIACAQIACAPQAAAFgEADQgDACgEAAQgKAAgBgJg");
	this.shape_34.setTransform(180.6,73);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgJAAgVQAAgRAOgOQAOgNASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAALQAAAOACAHIAEAIIADAHQAAAEgEADQgDADgEAAQgDAAgIgHgAgKgPQgIAJAAAJQAAAKAEAGQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCAAQgJAAgIAIg");
	this.shape_35.setTransform(171.9,73.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnAyQAAgFACgCQADgCAFgBIAKACIALABQALAAAFgHQAGgHABgPQgEAEgFACQgFACgFAAQgQAAgJgKQgKgKAAgPQAAgVANgOQANgNAWAAQAHAAAGACQAFABADAEQAKACAAAKIgBAOQgEATAAATQgBAZgIAMQgKAPgZAAQgeAAAAgMgAgLgiQgHAHAAANQAAAKAEAEQADADAHABQAGgBAGgGQAGgHABgGIAEgYIgGgCIgFgBQgMAAgHAJg");
	this.shape_36.setTransform(156.1,75.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAQAkIgDgQIgBgQIABgGIAAgHIAAgDIAAgEQABgGgEAAQgHAAgFAIQgHAJgDANIgBAHIAAAGIgBAHIAAAHQAAAFgDADQgDACgFAAQgFAAgDgCQgCgDAAgFIgBgHIAAgHIABgVIABgUIAAgHIgBgHQAAgEADgEQAEgCAEAAQAKgBABANIAAABQAMgMALAAQAPABAFAMQAEAIAAAQIAAAGIAAAEIACAQIACAPQAAAFgDADQgEACgEAAQgKAAgBgJg");
	this.shape_37.setTransform(147.8,73);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAFAAQADAAAEADQACADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgCADQgDADgEAAQgFAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAFgEADAAQAGAAADAEQAEADAAAFQAAAFgEADQgDADgGAAQgDAAgFgDg");
	this.shape_38.setTransform(141.5,71.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AADAZQgDgHgBgTIgCADIgMAeIgEAGQgDAFgHABQgDAAgEgHQgFgHgCgKIgIgqIgBgLQAAgEADgDQAEgDAEAAQAJAAABAJIACAKIABALIADATIAOgnQADgKAIAAQAIAAADAMIAEAVIAEAVIANgvQABgGAIgBQAFABADACQAEADAAAEIgBACIgQA4QgDAGgFAIQgEAFgGAAQgKgBgFgSg");
	this.shape_39.setTransform(133.6,73.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_40.setTransform(123.8,73.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHA+QgDgEAAgEIAAhrQAAgFAEgCQADgDADAAQAFAAADADQADACAAAFIAABmQAAAPgLABQgEAAgDgDg");
	this.shape_41.setTransform(117.4,70.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHA+QgDgEAAgEIAAhrQAAgFAEgCQADgDADAAQAFAAADADQADACAAAFIAABmQAAAPgLABQgEAAgDgDg");
	this.shape_42.setTransform(113,70.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_43.setTransform(106.6,73.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgFABQgEAAgEgDQgDgDAAgEQAAgIAIgCIANgBIACgJQACgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgJAAgFAGQgDAFgBALIAAACIAOgBQAPAAAAAKQAAAKgQAAIgOABIAAAUIAAAVQAAAOgCAIQgBAJgIAAQgEAAgEgDg");
	this.shape_44.setTransform(98.3,71.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0099FF").s().p("AgGAtQgDgCAAgFIgCgaIgCgaIgBgIQgJAGgJAMIgBABIAAAYIgBAGIAAAFQAAAFgDACQgDACgFAAQgHABgCgGQgCgEAAgJIAAgcIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADADAAAFIgBAGQAMgOALABQAMAAAEAJQAFgFAGgCQAGgBAHAAQAPgBAFAQIAEAVIAFApQABAEgEADQgDADgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADASAAAIQAAAFgDACQgDADgFAAQgEAAgDgDg");
	this.shape_45.setTransform(486.1,48.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0099FF").s().p("AgeApQgCgDgBgEIAAgyIAAgIIABgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgBAMgLAAQgJAAgBgKIAAgIQgQADgIAPIABAnQAAAEgEADQgDADgFAAQgFAAgCgDg");
	this.shape_46.setTransform(476.1,48.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0099FF").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_47.setTransform(467.8,48.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0099FF").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgEABQgGAAgCgDQgEgDAAgEQAAgIAIgCIAOgBIABgJQACgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgKAAgEAGQgDAFgBALIgBACIAQgBQAOAAAAAKQAAAKgPAAIgQABIAAAUIABAVQAAAOgCAIQgBAJgIAAQgEAAgEgDg");
	this.shape_48.setTransform(459.5,47);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0099FF").s().p("Ag2A8QgDgDAAgFIAAgJIABgKIAAgNIABgOIgBgOIAAgPIgBgOIgBgNQAAgFAEgEQAEgDAFAAQAGAAAHAKQAjAyAiAfIAAgMIAAgzIgBgIIgBgJQAAgKALAAQANAAAAAmIAAANIgBAxIgBALQgCAKgJAAQgGAAgHgFQgegbglgxIAAAZIAAASIAAASQAAAYgLAAQgGAAgDgEg");
	this.shape_49.setTransform(442.1,46.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0099FF").s().p("AgfA1QgUgQAAgmIAAgLIABgLIAAgJIAAgJQAAgGACgGQADgHAGAAQAEAAADADQAEADAAAEIAAAOIAAANIgBALIAAALQAAALADAKQADAMAGAFQAEACAMABQAUAAAHgkQADgRAAghQAAgEADgFQAEgFAGAAQAFAAADAEQACADAAADQAAAfgDASQgEAZgNASQgGAHgIAGQgKAGgJAAQgUAAgKgIg");
	this.shape_50.setTransform(429.6,47.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0099FF").s().p("AgpAwQgRgOAAgXQAAgZARgWQASgZAcAAQAbAAANANQAOAMAAAZQAAAagPAWQgSAZgbAAQgXAAgRgOgAgYgXQgMAQAAASQAAANAKAJQAKAHAPAAQAQAAALgRQALgPAAgTQAAgQgHgGQgHgGgSAAQgRAAgMAQg");
	this.shape_51.setTransform(417.4,47);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0099FF").s().p("Ag2A8QgDgDAAgFIAAgJIABgKIAAgNIABgOIgBgOIAAgPIgBgOIgBgNQAAgFAEgEQAEgDAFAAQAGAAAHAKQAjAyAiAfIAAgMIAAgzIgBgIIgBgJQAAgKALAAQANAAAAAmIAAANIgBAxIgBALQgCAKgJAAQgGAAgHgFQgegbglgxIAAAZIAAASIAAASQAAAYgLAAQgGAAgDgEg");
	this.shape_52.setTransform(404.5,46.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAHAcIgOAAIgHAAIgHAAQgFAAgDgCQgDgDAAgEQAAgIAKgBIAPAAIAOAAIAQAAQAEAAADACQADADAAAEQAAAEgDACQgDADgEAAIgQAAgAgWgJQgEAAgDgCQgDgDAAgEQAAgJAPAAIADAAIACAAIAjAAQAEAAADACQADADAAAEQAAAEgDACQgDADgEAAIgjAAIgFAAIgFAAg");
	this.shape_53.setTransform(386.1,47.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0099FF").s().p("AgWBNQgDgDAAgEQAAgFAFgDIAIgGQAQgRAAglQAAgNgEgPQgEgRgIgJIgIgIQgFgFAAgEQAAgEADgDQADgDAEAAQADAAAEADQAPALALAYQAIAVAAAUQAAA7giASQgDADgEAAQgEAAgDgDg");
	this.shape_54.setTransform(371.7,48.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkA8QgIgHAAgaIABgfIACgfIgBgIIgBgIQAAgMAMAAQADAAACACIASgDIAPgBQATgBALAFQAIADAAAHQAAAEgDADQgDAEgFAAIgDgBQgNgDgLAAIgNABIgNACIgBAgIAdgEIATgBQAEAAAEADQAEADAAAFQAAAIgLACIgTABIgfADIgBAQQAAAQACACQAAABAKgBIANAAIAOAAIAFAAIAEgBQAFAAADACQAEADAAAGQAAAIgJACQgIABgXAAQgaABgIgHg");
	this.shape_55.setTransform(363.8,46.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgQA3QgKgWgLgqIgHgVQgEgPAAgGQAAgEADgDQAEgDAEAAQAHAAADAIIAEANIAHAZIAMAnIARguIAHgTQAEgLAGgGQADgEAFAAQAFAAADADQADADAAAFQAAADgCADQgEAGgDAIIgGAQIgVA1IgJATQgDAGgGAAQgIAAgDgIg");
	this.shape_56.setTransform(353.2,47);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgkA5QgEgEABgEQAAgEADgDQAEgEAEAAIAQgBIgBgjQAAgUABgUIgQABQgFAAgDgDQgEgDABgFQAAgEADgDQADgDADAAIAYgBQAOAAAXADQAKACAAAJQgBAFgDADQgDACgEAAIgVgCIgBAlIAAAkIAWgBQAEAAAEADQADAEAAAEQgBAEgDADQgDADgEAAIgOABIgNAAIgPABIgQACQgFAAgDgDg");
	this.shape_57.setTransform(343.3,47);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHA5QgEgDAAgFIABgDIAAgDIAAgMIgBgLIgBgbIgDgcIgEAAQgRAAgKgCQgJgCAAgIQAAgFADgDQADgEAFAAIANACIAMABIAPAAIANAAIASABIASAAQAEAAADADQAEAEAAAEQAAAEgEAEQgDACgEAAIgTAAIgTgBIACAfIABAgIABAHIAAAIQAAAGgCAFQgDAFgGABQgEAAgDgDg");
	this.shape_58.setTransform(333.5,46.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAbAtQgEgKgDgMIgTACQgLAAgHACIgMAaQgEAFgFAAQgFAAgDgCQgEgDAAgFQAAgEAMgXIgBgEQAAgFAHgBIAZgoQASgdAFAAQAJAAACAKIAGAZIALAzIAEAKQADAHAAADQAAAFgEADQgDADgEAAQgHAAgGgOgAgGAHIALgBIALgBIgGgaIgQAcg");
	this.shape_59.setTransform(321.9,47);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag2A8QgDgDAAgFIAAgJIABgKIAAgNIABgOIgBgOIAAgPIgBgOIgBgNQAAgFAEgEQAEgDAFAAQAGAAAHAKQAjAyAiAfIAAgMIAAgzIgBgIIgBgJQAAgKALAAQANAAAAAmIAAANIgBAxIgBALQgCAKgJAAQgGAAgHgFQgegbglgxIAAAZIAAASIAAASQAAAYgLAAQgGAAgDgEg");
	this.shape_60.setTransform(309.6,46.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgkA5QgEgEAAgEQAAgEAEgDQADgEAGAAIAOgBIAAgjQAAgUABgUIgQABQgFAAgDgDQgEgDAAgFQAAgEAEgDQACgDAEAAIAYgBQAOAAAXADQAJACAAAJQABAFgEADQgDACgEAAIgUgCIgBAlIAAAkIAUgBQAFAAADADQADAEAAAEQABAEgEADQgDADgFAAIgNABIgOAAIgPABIgPACQgFAAgDgDg");
	this.shape_61.setTransform(298.7,47);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AArAzIgFgTQgEgOgEgZIgMAgIgFAOIgFAOQgFAHgGAAQgIAAgEgIIgDgPQgHgUgFgVIgKAlIgDASQgCALgJAAQgFAAgDgEQgDgDgBgEQAAgNAGgSIAIgdIAGgYQADgRAEgFQAEgGAHAAQAGAAAEAHQADAHADAVQAEAUAHAXQAHgWAIgcIAFgSQAEgLAIAAQAJAAAFANIADATQAFAhAGAXIAHAbQAAAEgDADQgDADgFAAQgIAAgEgMg");
	this.shape_62.setTransform(287.4,47);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgpAwQgRgOAAgXQAAgZARgWQASgZAcAAQAbAAANANQAOAMAAAZQAAAagPAWQgSAZgbAAQgXAAgRgOgAgYgXQgMAQAAASQAAANAKAJQAKAHAPAAQAQAAALgRQALgPAAgTQAAgQgHgGQgHgGgSAAQgRAAgMAQg");
	this.shape_63.setTransform(273.8,47);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ag2A8QgDgDAAgFIAAgJIABgKIAAgNIABgOIgBgOIAAgPIgBgOIgBgNQAAgFAEgEQAEgDAFAAQAGAAAHAKQAjAyAiAfIAAgMIAAgzIgBgIIgBgJQAAgKALAAQANAAAAAmIAAANIgBAxIgBALQgCAKgJAAQgGAAgHgFQgegbglgxIAAAZIAAASIAAASQAAAYgLAAQgGAAgDgEg");
	this.shape_64.setTransform(261,46.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0099FF").s().p("AAJBNQgigSAAg7QAAgUAJgVQAKgYAPgLQAEgDADAAQAEAAADADQADADAAAEQAAAEgFAGIgIAHQgHAJgFARQgEAPAAANQAAAQADAOQAGASALAIQAJAHAAAFQAAAEgDADQgDADgEAAQgDAAgEgDg");
	this.shape_65.setTransform(251.8,48.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0099FF").s().p("Ag2A8QgDgDAAgFIAAgJIABgKIAAgNIABgOIgBgOIAAgPIgBgOIgBgNQAAgFAEgEQAEgDAFAAQAGAAAHAKQAjAyAiAfIAAgMIAAgzIgBgIIgBgJQAAgKALAAQANAAAAAmIAAANIgBAxIgBALQgCAKgJAAQgGAAgHgFQgegbglgxIAAAZIAAASIAAASQAAAYgLAAQgGAAgDgEg");
	this.shape_66.setTransform(235.2,46.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0099FF").s().p("AgfA1QgUgQAAgmIAAgLIABgLIAAgJIAAgJQAAgGACgGQADgHAGAAQAEAAADADQAEADAAAEIAAAOIAAANIgBALIAAALQAAALADAKQADAMAGAFQAEACAMABQAUAAAHgkQADgRAAghQAAgEADgFQAEgFAGAAQAFAAADAEQACADAAADQAAAfgDASQgEAZgNASQgGAHgIAGQgKAGgJAAQgUAAgKgIg");
	this.shape_67.setTransform(222.7,47.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0099FF").s().p("AgpAwQgRgOAAgXQAAgZARgWQASgZAcAAQAbAAANANQAOAMAAAZQAAAagPAWQgSAZgbAAQgXAAgRgOgAgYgXQgMAQAAASQAAANAKAJQAKAHAPAAQAQAAALgRQALgPAAgTQAAgQgHgGQgHgGgSAAQgRAAgMAQg");
	this.shape_68.setTransform(210.5,47);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0099FF").s().p("Ag2A8QgDgDAAgFIAAgJIABgKIAAgNIABgOIgBgOIAAgPIgBgOIgBgNQAAgFAEgEQAEgDAFAAQAGAAAHAKQAjAyAiAfIAAgMIAAgzIgBgIIgBgJQAAgKALAAQANAAAAAmIAAANIgBAxIgBALQgCAKgJAAQgGAAgHgFQgegbglgxIAAAZIAAASIAAASQAAAYgLAAQgGAAgDgEg");
	this.shape_69.setTransform(197.6,46.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0099FF").s().p("AgjA8QgJgHAAgaIACgfIABgfIgBgIIAAgIQgBgMALAAQADAAAEACIARgDIAPgBQATgBALAFQAIADAAAHQAAAEgDADQgDAEgFAAIgDgBQgNgDgLAAIgNABIgNACIgCAgIAegEIATgBQAFAAADADQAEADgBAFQABAIgLACIgTABIggADIgBAQQAAAQACACQACABAJgBIANAAIAPAAIAEAAIAFgBQAEAAAEACQADADAAAGQAAAIgJACQgIABgYAAQgZABgHgHg");
	this.shape_70.setTransform(179.4,46.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0099FF").s().p("AgHA5QgEgDAAgFIABgDIAAgDIAAgMIgBgLIgBgbIgDgcIgEAAQgRAAgKgCQgJgCAAgIQAAgFADgDQADgEAFAAIANACIAMABIAPAAIANAAIASABIASAAQAEAAADADQAEAEAAAEQAAAEgEAEQgDACgEAAIgTAAIgTgBIACAfIABAgIABAHIAAAIQAAAGgCAFQgDAFgGABQgEAAgDgDg");
	this.shape_71.setTransform(168.7,46.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0099FF").s().p("AAbAtQgEgKgDgMIgTACQgLAAgHACIgMAaQgEAFgFAAQgFAAgDgCQgEgDAAgFQAAgEAMgXIgBgEQAAgFAHgBIAZgoQASgdAFAAQAJAAACAKIAGAZIALAzIAEAKQADAHAAADQAAAFgEADQgDADgFAAQgGAAgGgOgAgGAHIALgBIALgBIgGgaIgQAcg");
	this.shape_72.setTransform(157.1,47);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0099FF").s().p("AgiAwQgMgNABgQQgBgZAXgcQAUgXATAAIAGAAIAFABQADgEAGABQAHgBADAKIABAPQAAAEgCADQgEAEgFABQgHAAgDgIQgCgDgCgCIgGAAQgKAAgLAPQgSAVAAATQAAAIAFAGQAGAGAHAAQAHAAAJgEIALgHQAGgFADAAQAFABADADQADADAAAEQAAAFgDADQgWATgWgBQgRABgMgNg");
	this.shape_73.setTransform(146.5,46.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0099FF").s().p("AgkA5QgEgEABgEQgBgEAEgDQAEgEAEAAIAQgBIgBgjQAAgUACgUIgRABQgFAAgDgDQgEgDABgFQgBgEAEgDQACgDAFAAIAXgBQANAAAYADQAKACAAAJQAAAFgEADQgDACgEAAIgVgCIgBAlIAAAkIAVgBQAFAAADADQAEAEAAAEQAAAEgEADQgDADgFAAIgNABIgOAAIgOABIgQACQgFAAgDgDg");
	this.shape_74.setTransform(137,47);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0099FF").s().p("AgYA/QgJgCgFgDQgEgBgDgDQgEgDAAgEIABgXIABgYIAAgZIgBgaQAAgEAEgFQAEgEAFAAQADAAAKAGIAPAGQAVAHARAQQATATAAAUQAAAOgHAMQgGANgMAHQgNAIgWAAIgOgBgAgaAoIAHADIAIAAQAQAAAIgEQAHgEAEgIQAEgHAAgJQAAgTgXgNQgGgGgZgJg");
	this.shape_75.setTransform(127.2,47);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0099FF").s().p("AgkA8QgIgHAAgaIABgfIACgfIgBgIIgBgIQAAgMAMAAQADAAACACIASgDIAPgBQATgBALAFQAIADAAAHQAAAEgDADQgDAEgFAAIgDgBQgNgDgLAAIgMABIgPACIAAAgIAdgEIATgBQAFAAADADQAEADAAAFQgBAIgJACIgUABIgfADIgBAQQAAAQACACQAAABAJgBIAOAAIAOAAIAFAAIAEgBQAGAAACACQAEADAAAGQAAAIgJACQgIABgXAAQgaABgIgHg");
	this.shape_76.setTransform(116.4,46.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0099FF").s().p("AgqA6QgDgDAAgEIABgSIAAgRIAAg+QAAgFACgEQAFgGAGABIAUABQALACAHADQAhARAAAZQAAAKgHAHQgHAIgOAFQAVAMALAMQACADAAAEQAAAEgDAEQgDADgFAAQgEAAgEgEQgXgWgcgIIABAZQAAAEgDADQgDADgFAAQgFAAgDgDgAgXACIADAAQAUAAAIgDQAEgCADgEQADgDAAgCQAAgJgLgIQgKgHgLgCIgJAAg");
	this.shape_77.setTransform(106.2,46.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0099FF").s().p("AgjA7QgDgDAAgEIAAgWIACgjIACgkQAAgUALABIAIgBIALAAQAOAAANAJQAQAMAAAPQAAAUgQALQgOALgTAAIgHgBIAAAkQAAAEgDADQgDADgEAAQgFAAgDgDgAgNgeIgCAbIAFABQAMAAAHgGQAJgGAAgLQAAgGgIgFQgIgFgIAAIgEAAIgDAAIAAALg");
	this.shape_78.setTransform(96.7,46.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAbAtQgEgKgDgMIgTACQgLAAgGACIgNAaQgDAFgHAAQgEAAgDgCQgEgDAAgFQAAgEALgXIgBgEQABgFAHgBIAZgoQATgdAEAAQAJAAADAKIAEAZIAMAzIAEAKQADAHAAADQAAAFgEADQgDADgFAAQgFAAgHgOgAgGAHIAKgBIAMgBIgGgaIgQAcg");
	this.shape_79.setTransform(79.5,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69,33,428,74.9);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009933").ss(4,1,1).p("EAoDAWQMhQFAAAMAAAgsfMBQFAAAg");
	this.shape.setTransform(-2.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FED370","#FFFFCC"],[0,1],0,-172,0,172.1).s().p("EgoCAWQMAAAgsfMBQFAAAMAAAAsfg");
	this.shape_1.setTransform(-2.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.6,-144.4,516.6,288.8);


(lib.anim_pro_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ag6mpQgMgaATgXQANgRATALQgBgXAQgRQAUgXAPAKQAKggAegCQAMAAAGAJQAEgaAfgBQAXgBAHAVQAOggAzAAQAfAAABAgQAVgUAcAXQAQAMABATQAngEAIAgQACAHABAIQgFgCgGgBAFvncQABgGgBgGQAIAEADAIQAlAcgbAgQASAwgyAGQgCAegbAEQACAeghgDQgBAAAAABQgBABgBACQgDAFgDAFQAAABAAABQgBAEgCADQAAACgBABQAAAAAAAAQgBABAAAAQgCADgCADQgDADgCABQAagFgEAeQgBAJgJADQgCABgCAAQgGABgFAAAEZlgQgEAFgFACQAMAYAXgWQAAgFAAgFAEtk5QAFgOABgQAEtk5QgGgQgYASAElkpQgIgHgHAFQgIAFgCAIQgDALAJADQAGABACgDAEfkdQgFAAgCAFQgCAEADACQABAAAAAAAD2kaQACADABAEQABAEAAAEQAAAAAAAAIAAABQgBACgBACQgFAJgKgBQgDAAgDgBQgKgEAAgLQAAgKAHgGQAHgIAJAEQAEAEACAEgAD6kKQgBADgFABQgMAAACgLQACgLAKACADujFQABAAACAAQAgAFgDghQgIgBgDgFAEdjjQAXAUATAVQARAVADAdQADAZgFATQAKANAJAPQANAYAAAdQABAggMAVQAAAXgOAWQgNAUgVAVQgVAXgVgVQgKgJgJgJQgKAMgNALQgfAbgnAMQAhAbgEA3QgFAyAeAmQAZAiANAnQASA1AyABQALABAfACQAfADAbgCQAbgCAGgBQAFgCACABQAIACAIAEQAEADgDAIQABAEABAEQAAACAAADQAAABAAABQgBACAAABQgDAEgJgCQABALgJABQgIABgJgBQAAAHgCAJQgBACAAACQAAABAAACQgJAGgHgFQAAACAAACQgEAtg/gPQgXgFgPgUQgWgdghALQgqAMgtgBQgLAAgGgJQgNgUAOgPQAPgPAAgdQAAgwgkgTQgngVgXgnQgZgoATgvQghgXgpgLQAAAAAAAAQAAASgIAPQgOAWgYAPQgYAPgXAQQgXAQgWARQgWAQgWAPQgYARgVANQgYAPgTASQgTATgQATQAFAaAcAJQAbAJAfgCQAcgCAZgMQAZgMAeAHQAWAGgJAaQgJAbgfACQgYAWgSgNQgCAGgEAFQgHAJgPACQgHAAgEgDQgcATgIgSQgEADgHADQgQAEgIgHQgIgHgJgEQgSgKgYAAQggAAgQAFQgMAAgMAAQgeAAgWgPQgagRAXgYQARgSAXgPQAWgPAWgOQAagPANgWQANgWAPgWQAQgXAMgXQAMgWARgUQARgTAbgMQAXgLAZgNQgDgBgCgBQgbgMgagFQgagFgagLQgYgKgSgNQAHgQAVgHQAbgJAeAAQAWAAAWgBQAVAAAVAAQAcAAAbAAQAbAAAaAAQAGABAEACQgKgTgWgOQgYgOgTgRQgVgTgcgKAEHg9QAGAAAHABQAEgCAMALQAPAMgIAQQAPARgNAQQAGATgCASQADAVgPADQgFgFgFgFQgNgLgMgJQgIgEgCgKQgBAAAAgBIABAAQAbgBASALAFZhcQgHgKgIgJAEoktQADgGACgGADZgaQAcgBAdgBQAGAAAFABAD3AaQgCgFgIgDQgSgGAIgNQgcgCAKgUQABgDAHAAQAAgHgJgEQgGgCgGgCQACgUAYgBQAUAAAVABQgMgRgRgPQgegagkgLQi5CACbC1QANgCANgDAEbA9QgIAcgSAXABVkwQgBgEABgGQABgQALgKQAMgKACAKQAEAUALgEQACgOANgDQAXATAGgaQAFALAMACQAiAHABgcQADAIAHAEQAXAKARgLABllIQAMAJgIAIAAjkbQgLADgOgQQgJgKgBgMQgWANgbgUQgUgQACgWQgWgpAfgUQAAgBAAAAQAFgCAGAAAi7j7QALgQATgIQAXgKAbgJQAegJAZAJQAWAJARAPQADACAEADQAEABAGgBQAQgFAPgNQAHgCAFgLQARAbAVgjQABAGADAFAjDhCQAcAFAeACQAiADALgbQAEgKACgJQAIgcAiACQAeADAcADQABAAABAAQAcAEgTAQQgJADgNgBQgdgBgcAIAAYhHQgaAOgegBQgTAAgUAAAChjdQgGAEgGAGADujFQgLgCgNgBQgbgFgMgWQgHACgHAEQgBAhASARQANAMAVAAQgBgFAAgFQACgWAZgGgADUifQABAAACAAQACAAACgBQgCgEgGgFADbigQAJAQgiAAQgLAAgLAAQgVAEgVgKQgagNgIgeAAQh6QAngSAwAAQAjAAAeAKAAZhmQAQAEgDARQgBALgNgBQAMANgRAOQgEADgGABQgHABgCADQgZADgdAAQgMAAgMAAQAOAFAWgCQAXgBANADQAKAHgKAGQgyAFgEAEQgEAFgIADQgFACgEABQAAAIAAAIQAABDA2AvQAXAUAaALQAlAQAsAAQASAAARgDADMkfQALgaAMAAQAMgBAIAAAltgyQgLgIgJgLQgRgSgFgcQgGgfAegMQAbgMAbgFQAMgYATgVQAVgXAfgEQAbgEAgAAQgEAGgDAIQgKAagHAZAlJivQgFAIABALAh0iRQgaANgdADQgcADgdABQgDAAgDAAQACABADABQAKAEAIAKQAPASABAZAkXiFQAIADAKACQAMADAPAAAjEg4QABgFAAgFAltgyQAIAHAJAFQAUAUAeAGQAbAEAcAEQAcADAcAEQAdAFAeAAQAUAAASgCQAEAAAFgBAlDCwQgXgOgRgXQgSgYgKgaQgKgagHgbQgHgeAMgaQAOgcAYgCAgiCSQAWARAJAbQADALAAAJAAWCmQgMAUgKAYAirDqQANAFANACAioIJQAggIAJAeQAFAQgLABAkxHcQgGAIgGAEAjuIoQAjgLgDAmQgBALgGgCIgBAAAj6JNQALgKgSgVAivI5QAFgRgYgQAG8HqQAJgGAIAHQAIAGABAKQAAABAAAAAHhHoQgFgEgKAAAHjH1QgBACAAADAGqIgQgBgSgRgEQgbgGgCAKAG9IIQAAgcgkAEADjgBQAbgBAcAC");
	this.shape.setTransform(138.4,154);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhTDiQgbgLgXgUQg2gvAAhDIABgQIAIgDQAIgEAFgFQAEgEAygFQALgGgLgHQgOgDgWABQgWACgPgFIAYAAQAdAAAZgDQAEgDAGgBQAHgBADgDQASgOgNgMQANABACgLQACgRgQgEQATgQgcgEQAogSAwAAQAhAAAeAKQhjBFAABVQgBBIBHBTQhHhTABhIQAAhVBjhFQAlALAeAaQARAPAMARIgpgBQgZABgCATIAMAEQAKAEAAAHQgHAAgCADQgJAUAcACQgIAOARAGQAJADACAFIAAABQADAKAHAEQANAJANALQgIAcgTAXQgKAMgMALQggAbgnAMQgMADgNACQgRADgRAAQgtAAglgQgABJhvQgSgRAAghQAHgEAHgCQAMAWAbAFIAYADQgYAGgCAWIAAAKQgUAAgNgMgACAjCIgHgBQgJgEAAgLQAAgKAHgGQAHgIAJAEIAFAIQgKgCgBALQgCALALAAQAFgBABgDIgCAEQgFAIgIAAIgBAAgACpjUQgKgDADgLQADgIAHgFQAIgFAIAHIgGAKIgBACQgEAAgCAFQgCAEADACIABAAQgCACgDAAIgDAAg");
	this.shape_1.setTransform(149,148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAGGUQgBgKgDgKQgIgbgWgSQgKgTgWgNQgYgPgTgRQgVgTgcgJQAcAJAVATQATARAYAPQAWANAKATQgEgCgGAAIg1AAIg3AAIgqAAIgsABQgegBgbAJQgVAHgHAQQgXgNgRgXQgSgZgKgaQgKgZgHgbQgHgfAMgaQAOgcAYgCQAIAHAJAEQAUAVAeAFIA3AIQAcADAcAGQAdAFAegBQAUAAASgCQAEABAGgCIgBAQQAABDA2AvQAWAVAbALQgMATgKAZIAAAAIAAAAgADwhQQACgKAKABIADAIQABAEAAADIAAABIAAAAQgBAEgFAAIgBABQgLAAACgMgAEfhRQgDgBACgFQADgEAEAAIgDAHIgBACIAAABIgBABIgBgBgAAQhmQgJgKgCgNQgVANgbgUQgUgPACgWQgWgpAfgVIABAAQgNgaATgYQANgQATALQgBgXAPgRQAVgYAPAKQAKgfAegCQAMgBAGAJQAEgZAfgCQAXgBAHAWQAOggAzAAQAfgBABAhQAVgVAcAXQAQANABATQAngEAIAfQADAIAAAIIABAGIgBAGIABgGIgBgGQAIAEADAHQAlAcgbAgQASAwgyAHQgCAegbADQACAfghgEIAFgLQAGgOAAgRQgXAXgLgYIAIgHIgIAHQgRALgYgLQgHgDgDgIQgBAbgigGQgMgCgFgMQgGAagXgSQgNADgCANQgLAFgEgUQgCgLgMAKQgLAKgBAQIAAALQgVAjgRgcQgFAMgHACIgDAAQgJAAgNgNgAE5iWIAAgEIAAgGIAAAGIAAAEgAgzjnIAAAAIABAAQADgCAEAAIABAAIAAAAIAAAAIABAAIgBAAIAAAAIAAAAIgBAAQgEAAgDACIgBAAIAAAAgAF1kmQgEgDgHgBQAHABAEADg");
	this.shape_2.setTransform(137.8,134.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE9670").s().p("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");
	this.shape_3.setTransform(138.4,166);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_4.setTransform(115,118.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhRFIQhGgJg2gsQBGjcDUgwQjUAwhGDcIgEgDQghgbgRghQAFgUgKgWQgLgaABgcQABgeAQgXIAWABQAQAAAOgIQAXgQgHggQgGgTgOAAQBGg5BhAAQBOAAA9AmIgLADQgQAFACAQQABAHAEAGIAGAGQAFAbAFARQAGAXANAPIADAEQAPARAigHQARgEAMAFIABAVQAABThGA6Qg8AzhQAHQgNgaAAgaQAAhWCNhhQiNBhAABWQAAAaANAaIgaABQgUAAgTgDgAgQFKIAAAAgADijJQgVgNgIghIAqABQATABASgDQgHAPAEAUIACAKQgCAGgIABIgOABQgPAAgKgGgADIknQgOgIAKgOQAOgWAJARQgeAKAcASQgEACgEAAQgEAAgFgDg");
	this.shape_5.setTransform(108.4,83.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BE9670").s().p("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");
	this.shape_6.setTransform(115,127.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjQJJQgagjgNgrIgchbQgPgvADgzQABgwAYgpQAPARAmgDIBdgIQATACAUAAIAagBQBQgHA8gyQAfAPAeAkQAgAnAQAuQAQAuAAAyIAAATIgFAEQgWATgKAbQgPApgqASQgsASgvgCIgOgTQgbgoghghQAhAhAbAoIAOATQgGAIgNAGQgqASgtARQgvARgeATQgegXgYgggAg1k5QgUgGADgVQgMALgKgEQgMgFACgOQgKAEgIgLQgKgQAIgJQgIgEgFgFQgOgOACgdQgMgcAQgbQASgeAVALQgIgRAKgPQAVghAYAMQABgaAXgNQAigUAdAYQASgmAqgCQAjgCATAbQAOghAqAKQAbAGADASQANgOAPALQAWATgQAXQAHACAEAHQASAagNAPQAFAFACAJQAIAlgaAJQAAAIgEAFQgSAYgkgMIgIgFIAIAFQgYAHgPgEQgFgJgFgCQgJgEgGgIQgRAQgegFQALAVgYAEQAWATggAGQgZgTgQAhQgPAbAgAFIABAAQADAhgeABIgMABQgOACgDgJIgCgGIACAGQAAAHgGABQgGABgMgFIgEgCQgHAJgKAAIgGgBgAC4mfIAEALQAEAFgFAGIgFAGQgcgSAegKg");
	this.shape_7.setTransform(111.9,92.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89.2,93.2,98.5,121.6);


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


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


(lib.anim_arrow_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1AJJIAAyRMAqBAAAIAASRg");
	var mask_graphics_14 = new cjs.Graphics().p("A1AJJIAAyRMAqBAAAIAASRg");
	var mask_graphics_36 = new cjs.Graphics().p("A1AJJIAAyRMAqBAAAIAASRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.5,y:-69.5}).wait(14).to({graphics:mask_graphics_14,x:-16.5,y:-69.5}).wait(22).to({graphics:mask_graphics_36,x:-16.5,y:-69.5}).wait(1));

	// Layer 8
	this.instance = new lib.static_arrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-19.8,371.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-37.9},14).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-45,269,34);


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
		var bgm = createjs.Sound.play('bgmPN',{loop:-1});
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
		
		 window.open ("predNoun_finish.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("predNoun_scene11.html","_self");
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


(lib.predicateexample5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("karate_kick");
	}
	this.frame_13 = function() {
		playSound("karate_kick");
	}
	this.frame_23 = function() {
		playSound("karate_kick");
	}
	this.frame_40 = function() {
		playSound("Gm_Guitar_Strumming");
	}
	this.frame_79 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(10).call(this.frame_13).wait(10).call(this.frame_23).wait(17).call(this.frame_40).wait(39).call(this.frame_79).wait(1));

	// diagram
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBiQgIgCgFgHQgLgPANgMIAWgVQALgLAMgJIALgHIAKgHIAFgCIAGgEQAJgHgDgEQgIgLgUAAQgUAAgXAJIgLAHIgLAGIgLAGIgLAHQgHAFgIgBQgIgCgFgHQgFgHABgHQABgIAHgFIAKgIIAKgIIAhgWQAWgNAKgIIALgIIAKgJQAHgFAIACQAIACAFAHQALAPgSAPIgBABQAeAEAOAUQAQAWgMAVQgJAPgZASIgIAGIgIAGQgJAGgNAOQgNANgIAGQgFAEgGAAIgDAAg");
	this.shape.setTransform(94.5,45.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTBXQgIgCgEgGQgEgFACgUIgWgNQgJgHgEgFQgVgdAFgYQAFgaAfgWQAcgUAjAGQAkAHAVAdQAIALAEAUQAGAWgLAIQgEADgFgBIgNAHIgRALQgXAQgHALIgIAOIgHANQgFADgFAAIgEgBgAgagmQgQALgEAMQgDAMAIAKQAFAHAHAFQAIAFAJACQAYgYAOgJIAJgGIAMgGIgBgFIgBgEQgMgQgVgDIgJgBQgQAAgNAKg");
	this.shape_1.setTransform(85.6,33.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBJQgUgJgQgWQgLgQgFgRQgGgVANgKQALgIAKAOQAEAFAEAMQAFANAEAGQARAYAKgHQAGgFgFgWQgHgfAAgKQgBgZARgNQAXgRAbATQAQAMAVAeQAJAMABAIQACAJgMAIQgVAQgIgMQgJgLAIgJIgGgKQgVgdgIAGQgEADAEAXQAHAfAAAMQAAAbgQALQgKAIgNAAQgKAAgKgFg");
	this.shape_2.setTransform(-60,79.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah5BSQgFgHABgIQABgIAGgFQAMgIBIgOQAQggAcg/IAGgMQADgIAEgDQAGgFAIACQAKACAEAGQAGAIgCAJQgLAhgcA2IAsgJQAYgFATgBQAMgCAHAJQAFAHAAAJQgCAIgGAFQgEACgGABIhxAUQgpAIgaAHIgcAHIgHABQgJAAgGgIg");
	this.shape_3.setTransform(-71.7,65.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTBXQgIgCgEgGQgEgFACgUIgWgNQgJgHgEgFQgVgdAFgYQAFgaAfgWQAcgUAjAGQAkAHAVAdQAIALAEAUQAGAWgLAIQgEADgFgBIgNAHIgRALQgXAQgHALIgIAOQgGAMgBABQgFADgFAAIgEgBgAgagmQgQALgEAMQgDAMAIAKQAFAHAHAFQAIAFAJACQAYgYAOgJIAJgGIAMgGIgBgFIgBgEQgMgQgVgDIgJgBQgQAAgNAKg");
	this.shape_4.setTransform(-79,54.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag2BdQgLgPAXgdQAIgLAbgaIgJACIg7APQgGACgFgCQgMABgIgKQgEgFAGgNQAGgNANgQQAMgPAsgrQAJgJAGgFQAHgEAHACQAHABAFAHQAKANgLAMIgNAOIgPAOIgcAbIBKgYQATgGAKAOQAJANgOAQIgbAcIgcAfIBVgiQAMgFAIANQAFAGAAAJQgBAIgGAFIgEACQg4AVguAPQgNADgRABQgMAAgHgKg");
	this.shape_5.setTransform(-89.3,36.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhhBHQgFgHABgIQABgIAHgFICjh1QAHgFAIABQAIACAFAHQAFAHgBAIQgBAHgHAFIidBxQgLAIgIAAQgJAAgGgIg");
	this.shape_6.setTransform(-95.1,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTBXQgIgCgEgGQgEgFACgUIgWgNQgJgHgEgFQgVgdAFgYQAFgaAfgWQAcgUAjAGQAkAHAVAdQAIALAEAUQAGAWgLAIQgEADgFgBIgNAHIgRALQgXAQgHALIgIAOQgGAMgBABQgFADgFAAIgEgBgAgagmQgQALgEAMQgDAMAIAKQAFAHAHAFQAIAFAJACQAYgYAOgJIAJgGIAMgGIgBgFIgBgEQgMgQgVgDIgJgBQgQAAgNAKg");
	this.shape_7.setTransform(-105.6,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAkBRIgFgkQgCgUgBgRIABgOIAAgQIABgGIAAgJQAAgOgHAAQgPAAgOATQgNAUgJAcIgBAQIgCAQIgBAPIgBAQQABAKgIAHQgGAGgLAAQgLAAgGgGQgIgHABgKIgBgPIgBgQQAAgRACgeQADgegBgRIAAgQIgBgQQAAgKAIgHQAGgGALAAQAXAAABAbIAAACQAagaAbAAQAiAAANAcQAIATAAAlIAAAMIAAALQAAAOAEAVQADAWAAANQAAAKgGAHQgIAGgKAAQgVAAgDgVg");
	this.shape_8.setTransform(-25.2,-29.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Ag7BMQgegWAAgpQAAgrAXgfQAagiAsAAQAeAAAUAKQAbANAAAbQAAAUgWAPQgKAGgdANIg7AaQAJAJAMAFQAMAEAOAAQAYAAAQgKQAPgIAJAAQASAAAAASQAAAUgeAMQgYALgcAAQgpAAgagUgAgXgqQgMALgHAWIAngRQAXgLAOgJQgLgGgTAAQgQAAgLAKg");
	this.shape_9.setTransform(-45.2,-29.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag7BMQgegWAAgpQAAgrAXgfQAagiAsAAQAeAAAUAKQAbANAAAbQAAAUgWAPQgKAGgdANIg7AaQAJAJAMAFQAMAEAOAAQAYAAAQgKQAPgIAJAAQASAAAAASQAAAUgeAMQgYALgcAAQgpAAgagUgAgXgqQgMALgHAWIAngRQAXgLAOgJQgLgGgTAAQgQAAgLAKg");
	this.shape_10.setTransform(-65.4,-29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ag0CGQgGAGgJAAQgKAAgHgGQgGgHAAgJIAAgNIABgNIAAjGQAAgNAFgKQAHgMANAAQATAAAAAUIAAAIIgBAHIAABDQANgHAMgEQAMgDAKAAQApAAAaAeQAXAbAAAoQAAApgbAcQgcAdgpAAQgYAAgXgIgAgTgDQgMAEgPALIAABLQAYAKARAAQAWAAAOgPQAOgPAAgXQAAgXgLgPQgNgOgUAAQgIAAgMAFg");
	this.shape_11.setTransform(-85.8,-34.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgxBcQgbgKABgTQAAgSAUAAQAJAAAPAGQAPAEAIAAQAjAAAAgOQABgJgZgLQgjgQgLgGQgZgRABgZQAAgkAlgMQAWgHArAAQASAAAIAFQAMAFAAARQAAAggRAAQgRAAgEgPIgOgBQgqAAAAALQAAAIAZALQAjAQAMAJQAZARABAYQAAAegcAQQgXAMggAAQgXAAgUgHg");
	this.shape_12.setTransform(-121.1,-29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AArBRQgRAIgMAEQgNAEgHAAQgqgBgWgWQgUgXAAgtQAAgpAegfQAggeArAAQAQAAAWAKQAaALABAPQAAAGgFAFIgCARIgBAZQAAAgAEAPIAJASIAGARQABAJgIAHQgGAFgKABQgIgBgRgPgAgYgiQgSASAAAYQAAAXAIAMQAJAMARAAQAJAAAKgDQAKgFAJgHQgGgoABgVIABgNIABgQIgGgCIgEgBQgXgBgSAUg");
	this.shape_13.setTransform(-139.5,-29.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AApCBQgEgPgEgaQgDgYAAgQIABgNIAAgOIAAgPQgCgJgHAAQgUAAgPARQgIAJgOAZQAABAgGANQgHAOgPAAQgKAAgIgGQgHgHAAgJIACgKQABgEABgrQgBgjABhSIAAgGIACgbIgCgQIgBgQQgBgLAIgGQAHgGAKAAQARAAAGASQADALABAWIgCAjIgBAiQANgMAPgGQAOgHARAAQAdAAAOARQAKANABAZIACArIAEAjQADATADAPIABAGQAAAKgHAHQgIAGgKAAQgRAAgGgRg");
	this.shape_14.setTransform(-159.7,-34.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0099FF").s().p("Ag5BKQgZgZgCgoQgBgmAXgeQAagkAvAAQAjAAAVAcQASAZAAAmQAAAogVAcQgZAggoAAQggABgYgXgAgYgdQgLARAAAVQAAAVAMALQAJAJANAAQAOAAAMgKQAMgNABgUQADg4ggAAQgVAAgMAUg");
	this.shape_15.setTransform(-226.7,-31.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099FF").s().p("AhFBbQgGgGABgKIAAhyIAAgQIABgQQgBgKAHgHQAFgGALAAQATAAAEAUQAfgYAmAAQAiAAABAvIgBAMQgBAbgXAAQgWAAgBgXIAAgSQgnAHgRAiIAABXQABAKgIAHQgGAHgLAAQgLAAgGgIg");
	this.shape_16.setTransform(-244.2,-31.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0099FF").s().p("AhPCGQgGgHgBgJIAAgyQABgbADg0QADg2ABgbQAAguAZACIARgDIAZAAQAiAAAeAWQAhAZAAAkQAAAtgjAZQggAYgqAAIgPgBIgBBRQAAAJgHAHQgGAGgKAAQgKAAgHgGgAgghFIgDA+IAMABQAagBASgNQAUgNgBgXQAAgPgSgMQgRgLgTAAIgKAAIgIAAIAAAZg");
	this.shape_17.setTransform(-262.7,-36.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CC00").s().p("Ag7BMQgegWAAgpQAAgrAXgfQAagiAsAAQAeAAAUAKQAbANAAAbQAAAUgWAPQgKAGgdANIg7AaQAJAJAMAFQAMAEAOAAQAYAAAQgKQAPgIAJAAQASAAAAASQAAAUgeAMQgYALgcAAQgpAAgagUgAgXgqQgMALgHAWIAngRQAXgLAOgJQgLgGgTAAQgQAAgLAKg");
	this.shape_18.setTransform(126.8,-28.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00CC00").s().p("AgPB7QgIgHAAgKIABgTIAAgSIgDhaIghgEQgWgCAAgUQAAgKAHgHQAHgHAKAAIAdADIAAgUIgBgQQAAgKAIgHQAGgGALgBQAZAAAAAsIAAAOIARgBQAVAAAHADQAOAEAAARQAAAKgHAHQgHAHgLAAIgIAAIgJgBIgQACIADBbIAAAJIAAAKQAAApgaAAQgIgBgHgFg");
	this.shape_19.setTransform(108.6,-31.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CC00").s().p("Ag7BMQgegWAAgpQAAgrAXgfQAagiAsAAQAeAAAUAKQAbANAAAbQAAAUgWAPQgKAGgdANIg7AaQAJAJAMAFQAMAEAOAAQAYAAAQgKQAPgIAJAAQASAAAAASQAAAUgeAMQgYALgcAAQgpAAgagUgAgXgqQgMALgHAWIAngRQAXgLAOgJQgLgGgTAAQgQAAgLAKg");
	this.shape_20.setTransform(89.7,-28.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CC00").s().p("AgQCKQgHgHAAgKIAAjyQAAgKAHgHQAHgGAKAAQAKAAAHAGQAGAHAAAKIAADoQAAAigYAAQgJAAgHgHg");
	this.shape_21.setTransform(74.9,-33.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CC00").s().p("AApCBQgEgPgEgaQgDgYAAgQIAAgNIABgOIgBgPQgBgJgIAAQgTAAgPARQgIAJgOAZQAABAgGANQgHAOgPAAQgKAAgHgGQgIgHAAgJIACgKQABgEABgrQgBgjABhSIAAgGIACgbIgCgQIgCgQQAAgLAIgGQAHgGAKAAQASAAAFASQAEALAAAWIgBAjIgBAiQANgMAOgGQAOgHAQAAQAeAAAOARQAJANACAZIACArIAEAjQADATADAPIABAGQAAAKgHAHQgIAGgKAAQgSAAgFgRg");
	this.shape_22.setTransform(60.1,-33.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00CC00").s().p("AgPB7QgIgHAAgKIAAgTIABgSIgDhaIghgEQgWgCAAgUQAAgKAHgHQAGgHALAAIAeADIgBgUIgBgQQAAgKAIgHQAHgGAJgBQAZAAAAAsIAAAOIASgBQAUAAAHADQAPAEAAARQAAAKgHAHQgHAHgLAAIgIAAIgJgBIgRACIAEBbIAAAJIAAAKQAAApgZAAQgJgBgHgFg");
	this.shape_23.setTransform(40.9,-31.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CC00").s().p("AAqBRQgQAIgMAEQgMAEgIgBQgrAAgUgWQgWgWAAguQAAgpAggfQAfgdAqAAQARAAAWAJQAaALAAAPQAAAGgDAFIgDARIgBAaQAAAfAEAPIAJASIAHARQgBAJgGAHQgIAFgJAAQgIAAgSgPgAgYgiQgSASAAAXQAAAYAJAMQAIAMARAAQAKAAAKgEQAJgDAJgIQgFgogBgVIABgNIADgQIgGgCIgFgBQgXgBgSAUg");
	this.shape_24.setTransform(22.5,-28.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(4,1,1).p("ATFjDIigAAInFqSAdVjDIqQAAAdZL6IqUu9AvztNIAAKEItlAAAvzjJIGlAFIL2QaAvzHWIAAqfApOjEIZzAB");
	this.shape_25.setTransform(-85,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},40).wait(40));

	// arrow
	this.instance = new lib.anim_arrow_motion();
	this.instance.parent = this;
	this.instance.setTransform(-84.6,487,1.034,1.034,0,0,180,-19.9,329.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},40).wait(9).to({_off:false},0).wait(31));

	// sentence
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgNAMQgFgGAAgGQAAgFAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAFQAAAGgGAGQgFAEgIAAQgHAAgGgEg");
	this.shape_26.setTransform(126.6,141.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CC00").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAcAAQAVAAANAGQASAKAAARQAAANgPAKQgGAFgUAIIgmARQAFAGAIADQAIAEAJAAQAQgBALgGQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgTAAQgaAAgTgOgAgQgbQgHAHgEAOIAagLQAOgHAKgGQgIgEgNAAQgJgBgJAIg");
	this.shape_27.setTransform(114.6,136.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CC00").s().p("AgKBRQgFgEAAgGIAAgMIAAgOIgBg7IgXgCQgOgBAAgOQAAgGAEgGQAFgEAHAAIAUABIgBgMIAAgMQAAgGAEgFQAGgDAGAAQAQAAAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgEAFgIgBIgFAAIgGAAIgLABIACA9IAAAGIABAHQgBAbgQAAQgGAAgFgFg");
	this.shape_28.setTransform(102.5,134.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CC00").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAdAAQATAAAOAGQASAKAAARQAAANgOAKQgHAFgUAIIgnARQAHAGAHADQAIAEAJAAQAQgBALgGQAKgGAGAAQAMAAAAAMQAAANgTAJQgRAHgTAAQgbAAgRgOgAgPgbQgIAHgFAOIAagLQAQgHAJgGQgIgEgMAAQgLgBgHAIg");
	this.shape_29.setTransform(89.9,136.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CC00").s().p("AgKBcQgFgEAAgIIAAihQAAgGAFgEQAFgEAFgBQAHABAFAEQAEAEAAAGIAACbQAAAXgQAAQgGgBgEgEg");
	this.shape_30.setTransform(80,132.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CC00").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHAAQALAAAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXIAEAXIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_31.setTransform(70.1,133.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CC00").s().p("AgKBRQgFgEAAgGIAAgMIAAgOIgBg7IgXgCQgOgBAAgOQAAgGAEgGQAFgEAHAAIAUABIgBgMIAAgMQAAgGAEgFQAFgDAHAAQAQAAAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgFAFgGgBIgGAAIgGAAIgLABIACA9IAAAGIABAHQAAAbgRAAQgGAAgFgFg");
	this.shape_32.setTransform(57.4,134.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00CC00").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_33.setTransform(45.1,136.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_34.setTransform(21.8,136.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_35.setTransform(8.8,136.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_36.setTransform(-14.5,136.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAdAAQATAAAOAGQASAKAAARQAAANgPAKQgGAFgUAIIgmARQAFAGAIADQAIAEAJAAQAQgBALgGQAKgGAGAAQAMAAAAAMQAAANgUAJQgQAHgTAAQgbAAgSgOgAgPgbQgIAHgFAOIAagLQAQgHAJgGQgIgEgMAAQgLgBgHAIg");
	this.shape_37.setTransform(-27.8,136.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAcAAQAUAAAOAGQASAKAAARQAAANgPAKQgGAFgUAIIgmARQAFAGAIADQAIAEAJAAQAQgBALgGQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgTAAQgaAAgTgOgAgPgbQgIAHgEAOIAZgLQAQgHAJgGQgIgEgNAAQgKgBgHAIg");
	this.shape_38.setTransform(-41.2,136.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgiBZQgFAEgGAAQgGAAgEgEQgFgEAAgGIAAgJIABgJIAAiDQAAgJAEgGQAEgJAJAAQANAAAAAOIgBAFIAAAFIAAAsIAQgHQAIgCAGAAQAcAAARAUQAQASAAAaQAAAbgSATQgTAUgbAAQgQAAgPgGgAgMgCQgJADgJAHIAAAyQAPAHAMAAQAOAAAJgKQAKgKAAgQQAAgPgHgKQgJgJgOAAQgEAAgIADg");
	this.shape_39.setTransform(-54.8,133.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AggA9QgSgHAAgMQAAgMAOAAQAFAAAKADQALAEAGAAQAWAAAAgKQAAgFgQgIQgYgKgGgEQgRgMAAgRQAAgXAZgIQAPgFAcAAQANAAAFADQAIAEAAALQAAAVgLAAQgMAAgDgKIgJgBQgcAAABAIQgBAFARAHQAXAMAIAFQARAMAAAPQAAAUgTALQgPAIgVAAQgPAAgNgFg");
	this.shape_40.setTransform(-78.4,136.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgiBbQgFgFAAgGQAAgLAZg2QgNgZgcgxIgFgJQgEgFAAgFQAAgGAFgFQAFgFAHAAQAHAAAFAGQAQAXAWAsIAPghIAQggQAFgIAJAAQAGAAAGAFQAFAEAAAGQAAAEgCAEIgpBSQgPAfgHAVIgHAVQgFALgKAAQgHAAgFgEg");
	this.shape_41.setTransform(-90.8,139.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_42.setTransform(-103.9,136.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAEAlQgDgLgDgcIgDAGIgSAtQgCAFgDADQgFAIgKAAQgGAAgGgKQgGgKgEgQQgEgOgHgwIgCgRQAAgGAFgEQAFgFAGAAQANAAADANIADAQIABAQIAFAdIAUg6QAFgPAMAAQANAAAEARIAGAfIAGAgIAThGQACgLAMAAQAHAAAFAFQAFAEAAAHIAAADQgNAugMAkQgEALgIALQgFAIgKAAQgOAAgJgdg");
	this.shape_43.setTransform(-118.8,136.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgKBcQgFgEAAgIIAAihQAAgGAFgEQAFgEAFgBQAHABAFAEQAEAEAAAGIAACbQAAAXgQAAQgGgBgEgEg");
	this.shape_44.setTransform(-130.5,132.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_45.setTransform(-140.2,136.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AghA9QgRgHAAgMQAAgMAOAAQAGAAAKADQAKAEAFAAQAXAAAAgKQAAgFgRgIQgWgKgHgEQgQgMAAgRQgBgXAZgIQAPgFAdAAQALAAAGADQAIAEAAALQAAAVgMAAQgLAAgCgKIgKgBQgcAAAAAIQAAAFAQAHQAYAMAIAFQARAMAAAPQAAAUgSALQgQAIgVAAQgPAAgOgFg");
	this.shape_46.setTransform(-163.4,136.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_47.setTransform(-175.7,136.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHAAQALAAAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXIAEAXIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_48.setTransform(-189.1,133.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0099FF").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_49.setTransform(-213.1,136.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0099FF").s().p("AgtA9QgFgEAAgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAZAAQAXAAAAAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgFAEQgEAFgHAAQgIAAgDgFg");
	this.shape_50.setTransform(-224.8,136.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0099FF").s().p("Ag0BZQgFgFAAgGIAAghQAAgRADgkIACg2QAAgeARABIALgBIARAAQAWgBAUAQQAXAQAAAYQAAAegYAQQgVAQgcAAIgKgBIgBA2QAAAGgEAFQgFAFgGAAQgHAAgEgFgAgVguIgCApIAIABQARAAAMgIQANgKAAgPQAAgKgMgIQgMgIgMAAIgHABIgFAAIAAAQg");
	this.shape_51.setTransform(-237.1,133);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).to({state:[]},40).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},9).wait(31));

	// anims
	this.instance_1 = new lib.anim_pro_ball();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-111.1,-45.4,1,1,0,0,0,102.7,115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},40).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-523.3,-66.9,877.2,1027.2);


// stage content:
(lib.predNoun_scene12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene12:0,scene12_repeat:73});

	// timeline functions:
	this.frame_3 = function() {
		playSound("prohasalwaysbeenanathlete");
	}
	this.frame_49 = function() {
		playSound("athleterenamespro");
	}
	this.frame_72 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_90 = function() {
		/* gotoAndPlay("scene12_repeat");
		stopAllSounds();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(46).call(this.frame_49).wait(23).call(this.frame_72).wait(18).call(this.frame_90).wait(1));

	// Layer 2
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(554.3,55.9,1,1,0,0,0,54,40.5);

	this.instance = new lib.static_predicate_noun_nom_def("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(214,37.5,1,1,0,0,0,214,37.5);

	this.instance_1 = new lib.predicateexample5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(262.3,426.9,1,1,0,0,0,-78.3,239.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.UI}]}).wait(91));

	// Layer 1
	this.instance_2 = new lib.Background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275.4,211.4,1,0.902);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92.2,202.6,877.2,1145);
// library properties:
lib.properties = {
	id: 'CE568A9957AE56449DBB9BAD31EAB77D',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/athleterenamespro.mp3", id:"athleterenamespro"},
		{src:"sounds/Gm_Guitar_Strumming.mp3", id:"Gm_Guitar_Strumming"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/karate_kick.mp3", id:"karate_kick"},
		{src:"sounds/prohasalwaysbeenanathlete.mp3", id:"prohasalwaysbeenanathlete"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/bgmPN.mp3", id:"bgmPN"},
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
an.compositions['CE568A9957AE56449DBB9BAD31EAB77D'] = {
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