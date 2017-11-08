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


(lib.Tweena10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EAAABBBQ7cgBzazaQrbraksuNQgUg7gSg9Qg0iwgli4QhUmmAAnJQAA7dTazaQI1o1Kgk0IAAAsQqPExopIpQzPTOAAbMQAAHJBVGmQAlC4A1CwQASA9AUA7QErN8LOLPQTPTObLAAQbMABTOzPQLPrOErt8QAUg8ASg8QA1ixAli3QBVmnAAnIQAA7MzOzPQoToTpzkuIhlDpIiQltIFuiRIhpDwQJ5ExIZIZQTaTaAAbdQAAHIhUGnQglC3g0CxQgSA8gUA8QktOMraLbQzaTa7dAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.1,-416,848.2,832.1);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAGQgDgDAAgDQAAgCADgDQADgCADAAQAEAAADACQADADAAACQAAAEgDACQgDACgEAAQgDAAgDgCg");
	this.shape.setTransform(164.5,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_1.setTransform(157.8,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_2.setTransform(150,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAqQgHgRgJgfIgEgQQgEgLAAgFQAAgDADgCQACgCADAAQAGAAACAFIACALIAGATIAJAcIANgiIAFgOQAEgJAEgEQACgDAEAAQADAAACACQADACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgFALIgFAMIgQAoIgGAOQgDAEgDAAQgGAAgDgFg");
	this.shape_3.setTransform(142.1,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_4.setTransform(134.7,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_5.setTransform(127.3,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAEABIAEAAQADgCADAAQAGAAACAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgDgDIgEgBQgHAAgJAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDADAAQADAAADADQACACAAAEQAAADgEADQgPANgQAAQgOAAgJgJg");
	this.shape_6.setTransform(119.5,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_7.setTransform(112.1,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAoQgMgIAAgLQAAgJAJAAQAIgBAAAJQAAAEAGAEQAGAEAFAAQACAAABgIIAAgSIABggIAAgEIgBAAIgGAAIgHAAQgEAAgCgDQgDgBAAgFQAAgHALAAIAGAAIAFAAIALgBIALAAQAQAAAAAJQAAADgDACQgCADgEAAIgDAAIgEgBIgEAAIAAAFQAAApgGATQgFAOgKAAQgLAAgLgIg");
	this.shape_8.setTransform(104.3,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAvQgGgBgEgDQgEAAgCgCQgCgDAAgDIAAgSIABgRIAAgSIgBgUQAAgEADgCQADgDAEAAIAKADIAKAFQARAGAMALQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAHgRgBIgKgBgAgUAdIAGADIAGABQAMAAAFgEQAGgDADgGQADgGAAgGQAAgOgRgKQgFgEgTgHg");
	this.shape_9.setTransform(96.1,10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAVAhIgGgQIgOABIgNACIgJATQgDAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAJgRIgBgEQAAgDAGgBQAHgOALgPQAOgWADAAQAGAAADAHIADATIAJAmIADAIIACAHQAAAEgDACQgCACgDAAQgFAAgEgLgAgDAFIAHgBIAIAAIgEgTIgLAUg");
	this.shape_10.setTransform(87.1,10);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_11.setTransform(74,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_12.setTransform(65.9,9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAVAhIgGgQIgOABIgOACIgJATQgCAFgFAAQgDAAgCgDQgDgCAAgDQAAgDAIgRIgBgEQABgDAGgBQAHgOALgPQAOgWADAAQAHAAACAHIADATIAJAmIADAIIACAHQAAAEgCACQgDACgDAAQgFAAgEgLgAgEAFIAHgBIAJAAIgEgTIgMAUg");
	this.shape_13.setTransform(57.3,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAEABIAEAAQADgCADAAQAGAAACAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgDgDIgEgBQgHAAgJAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDADAAQADAAADADQACACAAAEQAAADgEADQgPANgQAAQgOAAgJgJg");
	this.shape_14.setTransform(49.3,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_15.setTransform(42.2,9.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAvQgGgBgEgDQgEAAgCgCQgCgDAAgDIAAgSIABgRIAAgSIgBgUQAAgEADgCQADgDAEAAIAKADIAKAFQARAGAMALQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAHgRgBIgKgBgAgUAdIAGADIAGABQAMAAAFgEQAGgDADgGQADgGAAgGQAAgOgRgKQgFgEgTgHg");
	this.shape_16.setTransform(34.9,10);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_17.setTransform(26.7,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggAsQgBgCAAgEIAAgNIAAgNIAAguQgBgEADgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgGAFQgEAGgLAEQAPAJAIAJQADACAAADQAAADgDADQgDACgDAAQgDAAgDgDQgRgQgVgHIABATQAAAEgDACQgCACgDAAQgEAAgDgCgAgRACIACAAQAPAAAFgDIAGgEIACgDQAAgHgIgGQgHgGgJgBIgGAAg");
	this.shape_18.setTransform(19.1,9.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_19.setTransform(11.9,9.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAQAtIgIACIgIABQgNAAgJgIQgIgJAAgNQgBgPAKgJQAIgKANAAIAIABQAEAAADACIABgbQABgHAHAAQAEAAACADQACACAAADIgCAZIgBAZIABAcIABACQgBADgCACQgCACgDAAQgFAAgCgDgAgLADQgFAFABAKQgBAGAFAFQAFAEAGAAIAGgBIAGgDIABgCIAAgWQgCgDgDgCQgDgBgEgBQgIAAgEAFg");
	this.shape_20.setTransform(-0.1,9.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgEIAAgGIAAgBIAAgDQAAgGgCAAQgFABgEAGQgFAHgDAJIAAAFIgBAFIAAAFIAAAGQAAADgDACQgCACgDAAQgEAAgCgCQgDgCAAgDIAAgGIAAgFIABgPIAAgQIAAgFIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_21.setTransform(-6.6,11.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAOAbIgKAEIgGABQgOAAgGgHQgIgIAAgPQAAgNAKgKQALgKANAAQAGAAAHADQAJAEAAAFQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAJQAAAJABAGIADAFIADAGQgBADgCACQgDACgDAAQgCAAgGgFgAgHgLQgHAHABAGQAAAIACAFQADADAGAAQADABADgCQADgBADgCIgCgVIAAgDIABgGIgCgBIgCAAQgGAAgGAGg");
	this.shape_22.setTransform(-13,11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_23.setTransform(-25.8,10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgpAtQgCgCAAgDIABgIIAAgHIAAgKIAAgKIAAgKIAAgMIgBgKIAAgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIAAgmIgBgGIgBgHQAAgIAJAAQAJAAAAAeIAAAJIAAAkIgBAJQgCAIgHAAQgEAAgFgFQgWgUgcgkIAAASIAAAOIAAAOQAAARgJAAQgEAAgDgDg");
	this.shape_24.setTransform(-34.8,9.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWAoQgQgMAAgdIAAgIIAAgIIABgHIAAgGQAAgFABgEQADgFAEgBQADAAADACQACACAAAEIAAAKIAAAKIAAAIIAAAIQAAAJABAHQADAJAFAEQADACAIAAQAPAAAGgaQADgNAAgaIABgFQADgFAFAAQADAAADADQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAYgCAMQgDATgKAOQgEAFgGAEQgHAFgIgBQgPABgGgGg");
	this.shape_25.setTransform(-44.2,10.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAkQgNgKAAgRQAAgTAMgRQAOgSAVAAQAUAAAKAJQAKAKAAATQAAASgLARQgNASgVAAQgRAAgMgKgAgSgQQgJALAAAOQAAAJAIAHQAHAFALAAQAMAAAJgMQAIgMAAgNQAAgNgGgFQgFgEgNAAQgNAAgJANg");
	this.shape_26.setTransform(-53.4,9.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgoAtQgCgCAAgDIAAgIIAAgHIABgKIAAgKIAAgKIAAgMIgBgKIgBgLQAAgDADgDQADgDAEAAQAEAAAGAIQAZAmAaAXIAAgJIAAgmIgCgGIAAgHQAAgIAIAAQAKAAAAAeIAAAJIgBAkIgBAJQgBAIgHAAQgEAAgFgFQgXgUgbgkIAAASIAAAOIAAAOQAAARgIAAQgFAAgCgDg");
	this.shape_27.setTransform(-63,9.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_28.setTransform(-76.7,9.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_29.setTransform(-84.7,9.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAUAhIgFgQIgOABIgOACIgJATQgCAFgFAAQgDAAgCgDQgDgCAAgDQAAgDAIgRIgBgEQABgDAFgBQAJgOAKgPQANgWAEAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgCACQgDACgEAAQgEAAgFgLgAgEAFIAHgBIAJAAIgEgTIgMAUg");
	this.shape_30.setTransform(-93.4,10);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAOgSAPAAIAEABIAEAAQADgCADAAQAHAAABAGIABAMQAAADgCACQgCADgFAAQgFAAgCgFIgDgDIgEgBQgHAAgJAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDACAAQAEAAADADQACACAAAEQAAADgDADQgRANgPAAQgOAAgJgJg");
	this.shape_31.setTransform(-101.3,9.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_32.setTransform(-108.5,9.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgSAvQgGgBgEgDQgEAAgCgCQgCgDAAgDIAAgSIABgRIAAgSIgBgUQAAgEADgCQADgDAEAAIAKADIAKAFQARAGAMALQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAHgRgBIgKgBgAgUAdIAGADIAGABQAMAAAFgEQAGgDADgGQADgGAAgGQAAgOgRgKQgFgEgTgHg");
	this.shape_33.setTransform(-115.8,10);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIABIgOAAIgYADIAAAMQAAALABACQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_34.setTransform(-123.9,9.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggAsQgCgCAAgEIAAgNIAAgNIAAguQABgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAPAJAIAJQADACAAADQAAADgDADQgDACgDAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgDAAQgEAAgDgCgAgRACIACAAQAPAAAFgDIAGgEIACgDQABgHgJgGQgHgGgIgBIgHAAg");
	this.shape_35.setTransform(-131.5,9.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_36.setTransform(-138.7,9.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAQAtIgIACIgIABQgNAAgJgIQgIgJgBgNQAAgPAJgJQAJgKAOAAIAHABQAEAAACACIACgbQABgHAHAAQAEAAACADQABACAAADIgBAZIgBAZIABAcIABACQgBADgCACQgDACgDAAQgEAAgCgDgAgLADQgFAFABAKQgBAGAFAFQAFAEAGAAIAGgBIAGgDIABgCIAAgWQgCgDgDgCQgDgBgEgBQgIAAgEAFg");
	this.shape_37.setTransform(-150.7,9.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgEIAAgGIAAgBIAAgDQAAgGgCAAQgFABgEAGQgFAHgDAJIAAAFIgBAFIAAAFIAAAGQAAADgDACQgCACgDAAQgEAAgCgCQgDgCAAgDIAAgGIAAgFIABgPIAAgQIAAgFIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_38.setTransform(-157.2,11.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAOAbIgKAEIgGABQgNAAgIgHQgHgIAAgPQABgNAJgKQALgKANAAQAGAAAIADQAIAEABAFQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAJQAAAJABAGIADAFIACAGQAAADgCACQgDACgDAAQgCAAgGgFgAgHgLQgHAHAAAGQAAAIADAFQADADAGAAQADABACgCQAEgBADgCIgCgVIABgDIAAgGIgCgBIgCAAQgGAAgGAGg");
	this.shape_39.setTransform(-163.7,11.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_40.setTransform(161.1,-8.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_41.setTransform(152.8,-8.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAFABIADAAQADgCADAAQAGAAACAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgCgDIgFgBQgIAAgIAMQgOAPAAAOQAAAGAEAFQAFAEAGAAQAFAAAGgDIAJgGQAEgDADAAQADAAACADQACACABAEQgBADgDADQgQANgPAAQgNAAgKgJg");
	this.shape_42.setTransform(145,-8.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEAAACADQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_43.setTransform(137.6,-8.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZAoQgMgIAAgLQAAgKAJAAQAIABAAAIQAAAEAGAEQAGAEAFAAQACAAABgHIAAgTIABggIAAgEIgBAAIgGAAIgHAAQgEAAgCgDQgDgCAAgDQAAgIALAAIAGAAIAFAAIALAAIALgBQAQAAAAAJQAAADgDACQgCADgEAAIgDAAIgEgBIgEAAIAAAFQAAApgGATQgFAOgKAAQgLAAgLgIg");
	this.shape_44.setTransform(129.7,-8.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgcAsQgDgCAAgEIAAg9IAAgIIAAgHQABgGAKgBIAOgBQALgBAKAIQAMAIAAANQAAAGgDAFQgCADgFAEQAGADAEAFQAFAHAAAFQAAAJgIAGQgGAFgGACQgNAGgUgBQgEAAgDgDgAgPAgQAKgCALgDQALgDgBgDQAAgEgGgEQgFgDgFAAIgPgBgAgPgSIAAAMIAIAAQARgBAAgLQAAgFgFgEQgFgDgGAAIgJAAg");
	this.shape_45.setTransform(122.1,-8.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgeAkQgNgKAAgRQAAgTAMgRQAOgSAVAAQAUAAAKAJQAKAKAAATQAAASgLARQgNASgVAAQgRAAgMgKgAgSgQQgJALAAAOQAAAJAIAHQAHAFALAAQAMAAAJgMQAIgMAAgNQAAgNgGgFQgFgEgNAAQgNAAgJANg");
	this.shape_46.setTransform(113.3,-8.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_47.setTransform(99.2,-8.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgZAkQgJgKAAgMQAAgTARgUQAOgSAPAAIAEABIAEAAQADgCADAAQAHAAABAGIABAMQAAADgCACQgCADgFAAQgFAAgCgFIgDgDIgEgBQgHAAgJAMQgOAPAAAOQABAGAEAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDACAAQAEAAADADQABACABAEQAAADgDADQgRANgPAAQgOAAgIgJg");
	this.shape_48.setTransform(91.4,-8.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEAAACADQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_49.setTransform(84,-8.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggAsQgCgCABgEIAAgNIAAgNIAAguQAAgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAPAJAIAJQADACAAADQAAADgDADQgDACgDAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgDAAQgEAAgDgCgAgRACIACAAQAPAAAFgDIAGgEIACgDQABgHgJgGQgHgGgIgBIgHAAg");
	this.shape_50.setTransform(76.4,-8.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_51.setTransform(69,-8.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgSAvQgGgBgEgDQgEAAgCgCQgCgCAAgEIAAgSIABgRIAAgTIgBgTQAAgEADgDQADgCAEAAIAKADIAKAFQARAGAMALQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAHgRAAIgKgCgAgUAeIAGACIAGABQAMgBAFgDQAGgEADgFQADgGAAgGQAAgNgRgLQgFgDgTgJg");
	this.shape_52.setTransform(61.7,-8.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgWAfQgCgCAAgEIAAglIAAgGIAAgFQAAgDACgDQACgBADAAQAHAAABAGQAKgIANAAQALAAAAAQIAAAEQgBAJgHAAQgIAAAAgIIAAgGQgMACgGAMIAAAcQABAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape_53.setTransform(49.2,-7.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_54.setTransform(43,-7.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgKAxQgDgCAAgDIAAgBIACgQIAAgcIgEAAIgDAAQgEAAgCgCQgDgCAAgDQAAgGAGgCIAKAAIABgIQACgNAFgGQAGgIAOAAQALABAAAHQAAAIgKAAQgHAAgEAEQgCAFgBAHIAAACIALgBQALAAAAAIQAAAHgLAAIgMAAIAAAPIABAQQAAALgCAGQgBAHgGAAQgDgBgCgCg");
	this.shape_55.setTransform(36.8,-8.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgFApQgCgDAAgDIAAgGIABgGIgBgeIgLgBQgIgBAAgGQAAgDACgCQADgDADAAIAKABIAAgGIAAgGQAAgDACgCQACgDAEAAQAHAAAAAOIAAAGIAGgBQAHAAACABQAFABAAAGQAAADgDACQgBADgEAAIgDAAIgDgBIgFABIABAeIAAADIAAADQAAAOgJAAQgCAAgDgCg");
	this.shape_56.setTransform(25.9,-8.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgEIAAgGIAAgCIAAgCQAAgGgCAAQgFABgEAGQgFAHgDAJIAAAFIgBAFIAAAFIAAAFQAAADgDADQgCACgDAAQgEAAgCgCQgDgDAAgDIAAgEIAAgGIABgQIAAgPIAAgFIAAgGQAAgDACgCQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAKQADAFAAANIAAAEIAAADIABAMIABALQAAAEgCACQgDACgDAAQgHAAgBgHg");
	this.shape_57.setTransform(20,-7.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_58.setTransform(13.3,-7.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXAfQgBgCAAgEIAAglIAAgGIAAgFQAAgDACgDQACgBAEAAQAGAAACAGQAJgIAMAAQAMAAAAAQIAAAEQAAAJgIAAQgIAAABgIIAAgGQgNACgFAMIAAAcQAAAEgDACQgCACgDAAQgFAAgCgCg");
	this.shape_59.setTransform(7.3,-7.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_60.setTransform(0.9,-7.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgKAxQgDgCAAgDIAAgBIACgQIAAgcIgEAAIgDAAQgEAAgCgCQgDgCAAgDQAAgGAGgCIAKAAIABgIQACgNAFgGQAGgIAOAAQALABAAAHQAAAIgKAAQgHAAgEAEQgCAFgBAHIAAACIALgBQALAAAAAIQAAAHgLAAIgMAAIAAAPIABAQQAAALgCAGQgBAHgGAAQgDgBgCgCg");
	this.shape_61.setTransform(-5.5,-8.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgKAxQgDgCAAgDIAAgBIACgQIAAgcIgEAAIgDAAQgEAAgCgCQgDgCAAgDQAAgGAGgCIAKAAIABgIQACgNAFgGQAGgIAOAAQALABAAAHQAAAIgKAAQgHAAgEAEQgCAFgBAHIAAACIALgBQALAAAAAIQAAAHgLAAIgMAAIAAAPIABAQQAAALgCAGQgBAHgGAAQgDgBgCgCg");
	this.shape_62.setTransform(-11.6,-8.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgGAqQgDgBAAgEIAAgLIAAgLIAAgNIABgLQAAgEACgCQADgCADAAQADAAACACQACACAAAEIAAALIgBANIAAALIAAALQAAAEgCABQgCADgDAAQgDAAgCgDgAgEgdQgDgDAAgDQAAgEADgDQACgCADAAQAEAAADACQACADAAAEQAAADgCADQgDADgEAAQgDAAgCgDg");
	this.shape_63.setTransform(-16.1,-8.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAQAtIgIACIgIABQgNAAgJgIQgJgJABgNQAAgPAJgKQAIgJANAAIAIABQAEABADABIABgbQABgHAHAAQADAAACADQACACABADIgCAZIgBAZIABAcIAAACQAAADgCACQgDACgCAAQgFAAgCgDgAgLADQgEAFgBAKQABAGAEAEQAFAFAGAAIAGgBIAFgEIACgBIAAgWQgBgDgEgCQgDgBgEAAQgIgBgEAFg");
	this.shape_64.setTransform(-21.5,-9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_65.setTransform(-33.6,-7.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgXAfQgBgCAAgEIAAglIAAgGIAAgFQAAgDACgDQACgBADAAQAHAAACAGQAJgIAMAAQAMAAAAAQIAAAEQAAAJgIAAQgHAAgBgIIAAgGQgMACgFAMIAAAcQgBAEgCACQgCACgEAAQgEAAgCgCg");
	this.shape_66.setTransform(-39.6,-7.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAOAbIgKAEIgGABQgOAAgGgIQgIgHAAgPQAAgNAKgKQALgKANAAQAGAAAHADQAJAEAAAEQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAIQAAAKABAGIADAFIADAGQgBADgCACQgDACgDAAQgCAAgGgFgAgHgLQgHAHABAHQAAAIACAEQADADAGAAQADAAADgBQADgBADgCIgCgVIAAgEIABgFIgCgBIgCAAQgGAAgGAGg");
	this.shape_67.setTransform(-45.9,-7.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgPAeQgKgDABgGQgBgGAIAAIAHACIAIACQALAAAAgGQAAgDgIgDIgPgHQgIgGAAgIQAAgLAMgFQAIgCAOAAQAGAAADABQADACAAAGQAAAKgFAAQgGAAgBgEIgFAAQgNgBAAAEQAAACAIAFQALAEAEADQAJAGgBAHQABALgKAFQgIAEgKAAQgHAAgGgDg");
	this.shape_68.setTransform(-57.5,-7.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgFAiQgCgCAAgEIgBgTIgBgTIgBgGQgHAEgHAJIgBABIAAASIAAAEIgBAEQAAAEgCABQgCACgEAAQgFAAgCgEIgBgKIAAgUIAAgJIAAgJQAAgFACgEQACgFAEAAQAEAAACACQACADAAADIAAAFQAJgKAIAAQAJAAADAGQADgDAFgBQAFgCAEAAQAMAAAEAMIACAPIAFAfQAAADgDADQgCACgDAAQgHAAgBgHIgCgRIgDgQQgBgLgDAAIgGADIgGAFIABASIACATQAAAEgCACQgDACgEAAQgCAAgDgCg");
	this.shape_69.setTransform(-64.8,-7.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgXAfQgBgCAAgEIAAglIAAgGIAAgFQAAgDACgDQACgBADAAQAHAAABAGQAKgIANAAQALAAAAAQIAAAEQgBAJgHAAQgHAAgBgIIAAgGQgMACgGAMIAAAcQAAAEgCACQgCACgEAAQgDAAgDgCg");
	this.shape_70.setTransform(-72.4,-7.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_71.setTransform(-78.6,-7.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgKAxQgDgCAAgDIAAgBIACgQIAAgcIgEAAIgDAAQgEAAgCgCQgDgCAAgDQAAgGAGgCIAKAAIABgIQACgNAFgGQAGgIAOAAQALABAAAHQAAAIgKAAQgHAAgEAEQgCAFgBAHIAAACIALgBQALAAAAAIQAAAHgLAAIgMAAIAAAPIABAQQAAALgCAGQgBAHgGAAQgDgBgCgCg");
	this.shape_72.setTransform(-84.8,-8.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgFAiQgBgCAAgEIgCgTIgBgTIgBgGQgHAEgHAJIgBABIAAASIAAAEIAAAEQgBAEgCABQgCACgDAAQgFAAgDgEIgBgKIAAgUIAAgJIAAgJQAAgFACgEQACgFAEAAQAEAAACACQACADABADIgBAFQAJgKAIAAQAJAAADAGQAEgDAEgBQAFgCAEAAQAMAAAEAMIACAPIAFAfQAAADgDADQgCACgDAAQgHAAgBgHIgDgRIgCgQQgBgLgCAAIgHADIgHAFIACASIACATQAAAEgDACQgCACgDAAQgDAAgDgCg");
	this.shape_73.setTransform(-97.4,-7.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAOAbIgJAEIgHABQgOAAgGgIQgIgHABgPQgBgNAKgKQALgKAOAAQAFAAAHADQAKAEgBAEQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAIQAAAKABAGIADAFIADAGQAAADgDACQgCACgDAAQgDAAgGgFgAgIgLQgFAHAAAHQAAAIACAEQADADAGAAQACAAAEgBQADgBADgCIgCgVIAAgEIABgFIgCgBIgBAAQgIAAgGAGg");
	this.shape_74.setTransform(-105.5,-7.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgXAfQgBgCAAgEIAAglIAAgGIAAgFQAAgDACgDQACgBADAAQAHAAACAGQAJgIAMAAQAMAAAAAQIAAAEQAAAJgIAAQgHAAgBgIIAAgGQgMACgFAMIAAAcQgBAEgCACQgCACgEAAQgEAAgCgCg");
	this.shape_75.setTransform(-111.6,-7.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgdAmQAAgEACgCQACgBADAAIAIAAIAJABQAHAAAEgFQAEgFABgLQgDADgEABQgDABgEAAQgLABgIgIQgHgIAAgLQAAgQAKgKQAKgJAQgBQAFAAAEACQAEABADADQAHABAAAIIgBAKQgCAOgBAOQAAAUgGAIQgIAMgSAAQgXgBAAgIgAgIgZQgFAGAAAIQAAAIADADQACACAGABQADgBAFgEQAFgFAAgGIADgRIgEgBIgEgBQgJAAgFAHg");
	this.shape_76.setTransform(-117.8,-5.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAOAbIgKAEIgGABQgOAAgGgIQgIgHAAgPQAAgNAKgKQALgKANAAQAGAAAHADQAJAEAAAEQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAIQAAAKABAGIADAFIADAGQgBADgCACQgDACgDAAQgCAAgGgFgAgHgLQgHAHABAHQAAAIACAEQADADAGAAQADAAADgBQADgBADgCIgCgVIAAgEIABgFIgCgBIgCAAQgGAAgGAGg");
	this.shape_77.setTransform(-124.2,-7.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgGAqQgDgBAAgEIAAgLIAAgLIAAgNIABgLQAAgEACgCQADgCADAAQADAAACACQACACAAAEIAAALIgBANIAAALIAAALQAAAEgCABQgCADgDAAQgDAAgCgDgAgEgdQgDgDAAgDQAAgEADgDQACgCADAAQAEAAADACQACADAAAEQAAADgCADQgDADgEAAQgDAAgCgDg");
	this.shape_78.setTransform(-129.1,-8.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAQAtIgIACIgIABQgNAAgJgIQgIgJgBgNQAAgPAJgKQAJgJAOAAIAHABQAEABACABIACgbQABgHAHAAQAEAAACADQABACAAADIgBAZIgBAZIABAcIABACQgBADgCACQgDACgDAAQgEAAgCgDgAgLADQgFAFABAKQgBAGAFAEQAFAFAGAAIAGgBIAGgEIABgBIAAgWQgCgDgDgCQgDgBgEAAQgIgBgEAFg");
	this.shape_79.setTransform(-134.5,-9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_80.setTransform(-146.6,-7.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_81.setTransform(-153.3,-9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_82.setTransform(-161,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.2,-19.7,338.4,39.4);


(lib.Tween17_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEAAACACQADACAAAEQAAAFgIABIgOACIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape.setTransform(68.9,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAqQgHgRgIgfIgGgQQgDgLAAgFQAAgDADgCQADgCADAAQAFAAACAFIADALIAFATIAJAcIANgiIAFgOQADgJAEgEQADgDAEAAQADAAADACQACACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgGALIgEAMIgQAoIgHAOQgDAEgEAAQgFAAgDgFg");
	this.shape_1.setTransform(61,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_2.setTransform(53.5,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_3.setTransform(46.2,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAkQgJgKAAgMQAAgTARgUQAOgSAPAAIAEABIAEAAQADgCAEAAQAGAAABAGIABAMQAAADgCACQgCADgEAAQgGAAgCgFIgDgDIgEgBQgIAAgIAMQgNAPAAAOQAAAGADAFQAFAEAGAAQAEAAAGgDIAJgGQAFgDACAAQAEAAADADQABACAAAEQAAADgCADQgQANgQAAQgOAAgIgJg");
	this.shape_4.setTransform(38.4,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEAAACACQADACAAAEQAAAFgIABIgOACIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_5.setTransform(31,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZApQgMgJAAgLQAAgKAJABQAIAAAAAJQAAADAGAEQAGAEAFAAQACAAABgIIAAgSIABggIAAgEIgBAAIgGAAIgHAAQgEAAgCgCQgDgDAAgDQAAgIALAAIAGAAIAFAAIALgBIALAAQAQAAAAAJQAAADgDADQgCACgEAAIgDAAIgEAAIgEAAIAAAEQAAApgGATQgFAOgKAAQgLAAgLgHg");
	this.shape_6.setTransform(23.1,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAvQgGgCgEgCQgEAAgCgDQgCgCAAgDIAAgRIABgSIAAgTIgBgTQAAgDADgDQADgEAEAAIAKAEIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAGgRAAIgKgBgAgUAeIAGACIAGAAQAMABAFgEQAGgDADgGQADgGAAgGQAAgNgRgLQgFgDgTgJg");
	this.shape_7.setTransform(15,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAVAhIgGgQIgOABIgOACIgJATQgCAFgFAAQgDAAgCgDQgDgCAAgDQAAgDAIgRIgBgEQABgDAGgBQAHgOALgPQAOgWADAAQAHAAACAHIADATIAJAmIADAIIACAHQAAAEgCACQgDACgDAAQgFAAgEgLgAgEAFIAHgBIAJAAIgEgTIgMAUg");
	this.shape_8.setTransform(6,17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEAAACACQADACAAAEQAAAFgIABIgOACIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_9.setTransform(-7.2,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_10.setTransform(-15.2,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAUAhIgFgQIgOABIgOACIgJATQgCAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAJgRIgBgEQAAgDAFgBQAJgOAKgPQAOgWADAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgCACQgDACgEAAQgEAAgFgLgAgEAFIAHgBIAJAAIgEgTIgMAUg");
	this.shape_11.setTransform(-23.9,17.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAkQgJgKAAgMQAAgTARgUQAOgSAPAAIAEABIAEAAQADgCAEAAQAGAAABAGIABAMQAAADgCACQgCADgEAAQgGAAgCgFIgDgDIgEgBQgIAAgIAMQgNAPAAAOQAAAGADAFQAFAEAGAAQAEAAAGgDIAJgGQAFgDACAAQAEAAADADQABACAAAEQAAADgCADQgQANgQAAQgOAAgIgJg");
	this.shape_12.setTransform(-31.8,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_13.setTransform(-39,17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAvQgGgCgEgCQgEAAgCgDQgCgCAAgDIAAgRIABgSIAAgTIgBgTQAAgDADgDQADgEAEAAIAKAEIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAGgRAAIgKgBgAgUAeIAGACIAGAAQAMABAFgEQAGgDADgGQADgGAAgGQAAgNgRgLQgFgDgTgJg");
	this.shape_14.setTransform(-46.3,17.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEAAACACQADACAAAEQAAAFgIABIgOACIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_15.setTransform(-54.4,17.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggAsQgCgCAAgEIAAgNIAAgNIAAguQABgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAQAJAHAJQACACABADQgBADgCADQgCACgEAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgEAAQgDAAgDgCgAgSACIADAAQAOAAAHgDIAFgEIADgDQAAgHgJgGQgHgGgIgBIgIAAg");
	this.shape_16.setTransform(-62,17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_17.setTransform(-69.2,16.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAXAsIgFgIQgMAJgNAAQgMAAgIgGQgJgIAAgLQAAgLAJgIIASgMQgDgJAAgHQAAgHAFgGQAGgIAGABQAIAAAFAEQAFAFAAAIQAAANgOAKIAJAPIACgIQACgGAEABQAEAAACADQACACAAADQAAALgGAKQAJAOAAAEQAAACgCACQgCADgDAAQgEAAgDgFgAgPAIQgGAGAAAGQAAAFAEADQAEADAGAAQAJAAAHgHIgLgXIgNAHgAAFghQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABIgBAEIABAFIACAEIADgFIACgGIAAgDIgDgBIgBAAg");
	this.shape_18.setTransform(58.6,-1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgpAtQgCgCAAgDIABgIIAAgHIAAgKIAAgKIAAgKIAAgMIgBgKIAAgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIgBgmIgBgGIAAgHQAAgIAJAAQAJAAAAAeIAAAJIAAAkIgBAJQgBAIgIAAQgEAAgFgFQgWgUgcgkIgBASIABAOIAAAOQAAARgJAAQgDAAgEgDg");
	this.shape_19.setTransform(44.6,-1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAoQgPgMAAgcIAAgIIAAgJIABgHIAAgHQAAgEACgEQACgFAEAAQADAAADABQACACAAAEIAAAKIAAAKIAAAIIgBAJQAAAHACAIQADAJAFAEQADACAIAAQAPAAAGgbQACgNAAgZIACgGQADgDAEAAQAEAAADACQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDATgKANQgEAGgGAEQgIAEgHAAQgOAAgIgFg");
	this.shape_20.setTransform(35.2,-1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAkQgNgKAAgRQAAgTAMgRQAOgSAVAAQAUAAAKAJQAKAKAAATQAAASgLARQgNASgVAAQgRAAgMgKgAgSgQQgJALAAAOQAAAJAIAHQAHAFALAAQAMAAAJgMQAIgMAAgNQAAgNgGgFQgFgEgNAAQgNAAgJANg");
	this.shape_21.setTransform(26,-1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgpAtQgBgCAAgDIAAgIIAAgHIAAgKIAAgKIAAgKIAAgMIAAgKIgBgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIAAgmIgBgGIgBgHQAAgIAJAAQAJAAAAAeIAAAJIAAAkIgCAJQAAAIgIAAQgEAAgFgFQgXgUgbgkIAAASIAAAOIAAAOQAAARgIAAQgEAAgEgDg");
	this.shape_22.setTransform(16.4,-1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgDIAOAAQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_23.setTransform(2.7,-1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_24.setTransform(-5.3,-1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAUAhIgFgQIgOABIgOACIgJATQgCAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAJgRIgBgEQAAgDAFgBQAJgOAKgPQAOgWADAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgCACQgDACgEAAQgEAAgFgLgAgEAFIAHgBIAJAAIgEgTIgMAUg");
	this.shape_25.setTransform(-14,-1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAkQgJgKAAgMQAAgTARgUQAOgSAPAAIAEABIAEAAQADgCAEAAQAGAAABAGIABAMQAAADgCACQgCADgEAAQgGAAgCgFIgDgDIgEgBQgIAAgIAMQgNAPAAAOQAAAGADAFQAFAEAGAAQAEAAAGgDIAJgGQAFgDACAAQAEAAADADQABACAAAEQAAADgCADQgQANgQAAQgOAAgIgJg");
	this.shape_26.setTransform(-21.9,-1.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_27.setTransform(-29.1,-1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAvQgGgCgEgCQgEAAgCgDQgCgCAAgDIAAgRIABgSIAAgSIgBgUQAAgDADgDQADgDAEgBIAKAEIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAKgIAFQgKAGgRAAIgKgBgAgUAdIAGADIAGAAQAMAAAFgDQAGgEADgFQADgGAAgGQAAgOgRgKQgFgEgTgHg");
	this.shape_28.setTransform(-36.4,-1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGADAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgDIAOAAQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_29.setTransform(-44.5,-1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AggAsQgCgCAAgEIAAgNIAAgNIAAguQABgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAQAJAHAJQACACABADQgBADgCADQgCACgEAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgEAAQgDAAgDgCgAgSACIADAAQAOAAAHgDIAFgEIADgDQAAgHgJgGQgHgGgIgBIgIAAg");
	this.shape_30.setTransform(-52.1,-1.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_31.setTransform(-59.3,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-12.4,149.1,39.4);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape.setTransform(57.2,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAsQgLgLAAgQQAAgXAWgaQASgWASAAIAGABIAFAAQADgDAEAAQAIAAACAJIABAOQAAAEgCADQgDAEgFAAQgHAAgDgHQgCgEgBAAIgGgBQgJAAgLAPQgRATAAARQAAAIAFAGQAGAGAHAAQAGAAAIgEIALgHQAGgEADAAQAEAAADADQADADAAAEQAAAEgEAEQgUARgUAAQgQAAgMgNg");
	this.shape_1.setTransform(47.4,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgEIAOgBQASAAALAFQAHADAAAGQAAAEgDACQgCAEgFAAIgDAAQgMgDgLgBIgLACIgNACIgBAdIAcgDIARgBQAFAAADADQADADAAAEQAAAIgJABIgSABIgeADIgBAPQAAAPACACQABABAIAAIANgBIANAAIAFAAIAEgBQAEAAADACQAEADAAAFQAAAIgJACQgHACgWgBQgYAAgHgGg");
	this.shape_2.setTransform(38.2,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAyQgPgKAAgOQAAgMALAAQAKABgBAKQABAFAHAFQAIAFAGAAQACAAACgKIAAgXIABgoIAAgFIgBAAIgIAAIgJgBQgEABgDgDQgDgDAAgFQAAgKANAAIAHABIAHAAIAOgBIANAAQAUAAAAALQAAAEgDADQgDADgFAAIgDAAIgFgBIgGAAIAAAGQAAAzgHAYQgGASgNAAQgNAAgOgKg");
	this.shape_3.setTransform(28.4,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjA4QgDgEAAgEIAAhNIgBgKQAAgFABgEQABgHALgCQAGgBANAAQANAAAMAJQAPAKAAAQQAAAIgDAGQgCAFgGAEQAHADAFAHQAGAIAAAIQAAAJgKAJQgHAGgIADQgQAGgaAAQgFAAgDgDgAgTAnQANAAAOgFQANgDgBgFQAAgFgIgFQgGgDgGgBIgTAAgAgTgXIAAAQIAKAAQAWgCAAgOQAAgGgHgEQgGgFgHAAIgMAAg");
	this.shape_4.setTransform(18.8,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmAtQgQgNAAgVQAAgYAPgVQASgXAZAAQAaAAANAMQAMAMAAAXQAAAYgOAUQgRAYgZAAQgWAAgPgNgAgXgVQgLAPAAARQAAAMAKAIQAJAHAOAAQAPAAALgQQAKgOAAgSQAAgPgHgGQgHgGgRAAQgPAAgMAQg");
	this.shape_5.setTransform(7.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_6.setTransform(-9.8,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggAsQgLgLAAgQQAAgXAWgaQASgWASAAIAGABIAFAAQADgDAEAAQAIAAACAJIABAOQAAAEgCADQgDAEgFAAQgHAAgDgHQgCgEgBAAIgGgBQgJAAgLAPQgRATAAARQAAAIAFAGQAGAGAHAAQAGAAAIgEIALgHQAGgEADAAQAEAAADADQADADAAAEQAAAEgEAEQgUARgUAAQgQAAgMgNg");
	this.shape_7.setTransform(-19.7,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgEIAOgBQASAAALAFQAHADAAAGQAAAEgDACQgCAEgFAAIgDAAQgMgDgLgBIgLACIgNACIgBAdIAcgDIARgBQAFAAADADQADADAAAEQAAAIgJABIgSABIgeADIgBAPQAAAPACACQABABAIAAIANgBIANAAIAFAAIAEgBQAEAAADACQAEADAAAFQAAAIgJACQgHACgWgBQgYAAgHgGg");
	this.shape_8.setTransform(-28.8,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnA3QgDgDAAgEIAAgRIAAgQIAAg6QAAgFADgEQAEgFAHABIASABQAKABAGAEQAgAQAAAXQAAAKgHAGQgHAHgNAFQAUALAKAMQACADAAADQAAAEgDADQgDADgEAAQgEAAgEgDQgWgVgZgIIAAAYQAAAEgCADQgDADgFAAQgEAAgDgDgAgWACIADAAQASAAAIgDIAHgFQADgDAAgCQAAgIgKgIQgJgHgLgBIgJgBg");
	this.shape_9.setTransform(-38.4,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiA2QgDgDAAgFQAAgEADgDQADgDAFABIAOgCIAAghQAAgTACgSIgQABQgFAAgDgDQgDgDAAgEQAAgFADgDQADgCAEAAIAVgBQANAAAWADQAJACAAAIQAAAFgDADQgDACgEAAIgTgCIgBAjIAAAhIAUAAQAEAAADADQADACAAAFQAAADgDADQgDADgFAAIgMABIgNAAIgNABIgPABQgFAAgDgCg");
	this.shape_10.setTransform(-47.5,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWA7QgIgCgGgDQgEAAgCgDQgEgDAAgEIABgWIABgWIgBgXIAAgZQAAgEAEgEQAEgEAFAAQACAAAJAFIAOAGQAVAHAPAOQASASAAAUQgBAMgGAMQgFAMgMAHQgMAIgVAAQgFAAgHgCgAgYAlIAGADIAIABQAPAAAHgFQAHgEADgHQAEgHAAgIQAAgRgVgNQgHgFgWgJg");
	this.shape_11.setTransform(-56.7,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-12.4,129,24.9);


(lib.Tween15_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgjA4QgDgEAAgEIAAhNIgBgKQAAgFABgEQABgHALgCQAGgBANAAQANAAAMAJQAPAKAAAQQAAAIgDAGQgCAFgGAEQAHADAFAHQAGAIAAAIQAAAJgKAJQgHAGgIADQgQAGgaAAQgFAAgDgDgAgTAnQANAAAOgFQANgDgBgFQAAgFgIgFQgGgDgGgBIgTAAgAgTgXIAAAQIAKAAQAWgCAAgOQAAgGgHgEQgGgFgHAAIgMAAg");
	this.shape.setTransform(14.8,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgnA3QgDgDAAgEIAAgRIAAgQIAAg6QAAgFADgEQAEgFAHABIASABQAKABAGAEQAgAQAAAXQAAAKgHAGQgHAHgNAFQAUALAKAMQACADAAADQAAAEgDADQgDADgEAAQgEAAgEgDQgWgVgZgIIAAAYQAAAEgCADQgDADgFAAQgEAAgDgDgAgWACIADAAQASAAAIgDIAHgFQADgDAAgCQAAgIgKgIQgJgHgLgBIgJgBg");
	this.shape_1.setTransform(5.2,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AghA4QgIgHAAgYIABgdIABgdIAAgHIgBgIQAAgLAKAAQAEAAACABIAQgCIAOgBQASAAALADQAHADAAAHQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADAEAAAEQAAAHgJABIgSACIgeADIgBAPQAAAOACACQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHACgWAAQgYAAgHgHg");
	this.shape_2.setTransform(-4.2,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgPA0QgJgVgLgoIgGgTQgEgOAAgFQAAgFADgDQADgCAEAAQAHAAADAHIADANIAHAYIALAjIAQgrIAHgRQAEgLAFgFQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgEAFgDAIIgGAPIgTAyQgEAJgFAIQgCAGgGAAQgHAAgDgHg");
	this.shape_3.setTransform(-14.1,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgEIAOgBQASAAALAFQAHADAAAGQAAAEgDACQgCAEgFAAIgDAAQgMgDgLgBIgLACIgNACIgBAdIAcgDIARgBQAFAAADADQADADAAAEQAAAIgJABIgSABIgeADIgBAPQAAAPACACQABABAIAAIANgBIANAAIAFAAIAEgBQAEAAADACQAEADAAAFQAAAIgJACQgHACgWgBQgYAAgHgGg");
	this.shape_4.setTransform(40.3,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AggAsQgLgLAAgQQAAgXAWgaQASgWASAAIAGABIAFAAQADgDAEAAQAIAAACAJIABAOQAAAEgCADQgDAEgFAAQgHAAgDgHQgBgBAAgBQAAgBgBAAQAAAAgBgBQAAAAAAAAIgGgBQgJAAgLAPQgRATAAARQAAAIAFAGQAGAGAHAAQAGAAAIgEIALgHQAGgEADAAQAEAAADADQADADAAAEQAAAEgEAEQgUARgUAAQgQAAgMgNg");
	this.shape_5.setTransform(30.8,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgzA4QgDgDAAgEIABgJIAAgJIABgNIAAgNIAAgMIAAgOIgBgNIgBgOQAAgEAEgDQADgEAFAAQAGAAAGAKQAgAvAhAdIAAgLIgBgwIgBgIIAAgIQAAgKAKAAQAMAAAAAlIAAALIAAAuIgCALQgBAKgJAAQgGAAgGgGQgcgZgjgtIAAAWIAAARIAAASQAAAWgKAAQgFAAgEgEg");
	this.shape_6.setTransform(20,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgEIAOgBQASAAALAFQAHADAAAGQAAAEgDACQgCAEgFAAIgDAAQgMgDgLgBIgLACIgNACIgBAdIAcgDIARgBQAFAAADADQADADAAAEQAAAIgJABIgSABIgeADIgBAPQAAAPACACQABABAIAAIANgBIANAAIAFAAIAEgBQAEAAADACQAEADAAAFQAAAIgJACQgHACgWgBQgYAAgHgGg");
	this.shape_7.setTransform(9.4,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_8.setTransform(-0.7,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgnAvQgJgGAAgJQAAgFADgDQADgDAFAAQAGAAADAHQAFAJAOAAQAMAAAMgFQAMgHAAgGQAAgJgIgDQgFgCgPAAQgNgBgKgEQgOgGABgLQAAgOAPgMQAPgMARAAQAHAAALADQANAFAAAFQAAAEgDACQgDAEgEAAIgLgCIgKgBQgKAAgHAFQgJAEAAAGQAAACADACIAIACIARACQARABAJAIQALAHAAAQQAAATgWAJQgQAIgUAAQgTAAgLgJg");
	this.shape_9.setTransform(-11.1,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgiA2QgDgDAAgFQAAgEADgDQADgDAFABIAOgCIAAghQAAgTACgSIgQABQgFAAgDgDQgDgDAAgEQAAgFADgDQADgCAEAAIAVgBQANAAAWADQAJACAAAIQAAAFgDADQgDACgEAAIgTgCIgBAjIAAAhIAUAAQAEAAADADQADACAAAFQAAADgDADQgDADgFAAIgMABIgNAAIgNABIgPABQgFAAgDgCg");
	this.shape_10.setTransform(-20.5,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAVAqIgJgOIgKgNIgVAZIgOAPQgDADgEAAQgFAAgDgDQgDgDAAgEQAAgEADgDIANgOIAagbIgQgTIgIgLIgJgKQgFgDAAgFQAAgDADgEQADgDAFAAQAEAAAGAGIAIAIIAJAMIANAQIASgYQAOgSAFAAQAFAAADADQADADAAAEQAAAEgDADIgPASIgSAXIAQAVQAJANAHAIQADADAAAEQAAAEgDADQgDADgFAAQgHAAgMgRg");
	this.shape_11.setTransform(-30.1,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgEIAOgBQASAAALAFQAHADAAAGQAAAEgDACQgCAEgFAAIgDAAQgMgDgLgBIgLACIgNACIgBAdIAcgDIARgBQAFAAADADQADADAAAEQAAAIgJABIgSABIgeADIgBAPQAAAPACACQABABAIAAIANgBIANAAIAFAAIAEgBQAEAAADACQAEADAAAFQAAAIgJACQgHACgWgBQgYAAgHgGg");
	this.shape_12.setTransform(-39.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-12.4,93.6,47.8);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgjA4QgDgEAAgEIAAhNIgBgKQAAgFABgEQABgHALgCQAGgBANAAQANAAAMAJQAPAKAAAQQAAAIgDAGQgCAFgGAEQAHADAFAHQAGAIAAAIQAAAJgKAJQgHAGgIADQgQAGgaAAQgFAAgDgDgAgTAnQANAAAOgFQANgDgBgFQAAgFgIgFQgGgDgGgBIgTAAgAgTgXIAAAQIAKAAQAWgCAAgOQAAgGgHgEQgGgFgHAAIgMAAg");
	this.shape.setTransform(49.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgnA3QgDgDAAgEIAAgRIAAgQIAAg6QAAgFADgEQAEgFAHABIASABQAKABAGAEQAgAQAAAXQAAAKgHAGQgHAHgNAFQAUALAKAMQACADAAADQAAAEgDADQgDADgEAAQgEAAgEgDQgWgVgZgIIAAAYQAAAEgCADQgDADgFAAQgEAAgDgDgAgWACIADAAQASAAAIgDIAHgFQADgDAAgCQAAgIgKgIQgJgHgLgBIgJgBg");
	this.shape_1.setTransform(40,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgEIAOgBQASAAALAFQAHADAAAGQAAAEgDACQgCAEgFAAIgDAAQgMgDgLgBIgLACIgNACIgBAdIAcgDIARgBQAFAAADADQADADAAAEQAAAIgJABIgSABIgeADIgBAPQAAAPACACQABABAIAAIANgBIANAAIAFAAIAEgBQAEAAADACQAEADAAAFQAAAIgJACQgHACgWgBQgYAAgHgGg");
	this.shape_2.setTransform(30.6,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgPA0QgJgVgLgoIgGgTQgEgOAAgFQAAgFADgDQADgCAEAAQAHAAADAHIADANIAHAYIALAjIAQgrIAHgRQAEgLAFgFQADgEAEAAQAFAAADADQADADAAAEQAAADgCADQgEAFgDAIIgFAPIgUAyQgEAJgEAIQgEAGgEAAQgIAAgDgHg");
	this.shape_3.setTransform(20.7,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgzA4QgDgDAAgEIABgJIAAgJIABgNIAAgNIAAgMIAAgOIgBgNIgBgOQAAgEAEgDQADgEAFAAQAGAAAGAKQAgAvAhAdIAAgLIgBgwIgBgIIAAgIQAAgKAKAAQAMAAAAAlIAAALIAAAuIgCALQgBAKgJAAQgGAAgGgGQgcgZgjgtIAAAWIAAARIAAASQAAAWgKAAQgFAAgEgEg");
	this.shape_4.setTransform(3,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgmAtQgQgNAAgVQAAgYAPgVQASgXAZAAQAaAAANAMQAMAMAAAXQAAAYgOAUQgRAYgZAAQgWAAgPgNgAgXgVQgLAPAAARQAAAMAKAIQAJAHAOAAQAPAAALgQQAKgOAAgSQAAgPgHgGQgHgGgRAAQgPAAgMAQg");
	this.shape_5.setTransform(-9.2,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgiA2QgDgDAAgFQAAgEADgDQADgDAFABIAOgCIAAghQAAgTACgSIgQABQgFAAgDgDQgDgDAAgEQAAgFADgDQADgCAEAAIAVgBQANAAAWADQAJACAAAIQAAAFgDADQgDACgEAAIgTgCIgBAjIAAAhIAUAAQAEAAADADQADACAAAFQAAADgDADQgDADgFAAIgMABIgNAAIgNABIgPABQgFAAgDgCg");
	this.shape_6.setTransform(-19.3,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_7.setTransform(-28.5,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AggAsQgLgLAAgQQAAgXAWgaQASgWASAAIAGABIAFAAQADgDAEAAQAIAAACAJIABAOQAAAEgCADQgDAEgFAAQgHAAgDgHQgBgBAAgBQAAgBgBAAQAAAAAAgBQgBAAAAAAIgGgBQgJAAgLAPQgRATAAARQAAAIAFAGQAGAGAHAAQAGAAAIgEIALgHQAGgEADAAQAEAAADADQADADAAAEQAAAEgEAEQgUARgUAAQgQAAgMgNg");
	this.shape_8.setTransform(-38.4,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAlA3QgFAAgGgNQgEgJgDgLIgSACIgQABIgMAZQgDAFgGAAQgEAAgDgDQgEgDAAgEQAAgEALgVIgBgEQABgEAGgCIAXgkQASgcAEAAQAIAAADAKIAEAXIALAwIAEAJQADAGAAAEQAAAEgDADQgDACgEAAIgBAAgAgFAHIAJgBIALgBIgFgYIgPAag");
	this.shape_9.setTransform(-48.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-12.4,112.3,24.9);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape.setTransform(29.8,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AggAsQgLgLAAgQQAAgXAWgaQASgWASAAIAGABIAFAAQADgDAEAAQAIAAACAJIABAOQAAAEgCADQgDAEgFAAQgHAAgDgHQgBgBAAgBQAAgBgBAAQAAAAgBgBQAAAAAAAAIgGgBQgJAAgLAPQgRATAAARQAAAIAFAGQAGAGAHAAQAGAAAIgEIALgHQAGgEADAAQAEAAADADQADADAAAEQAAAEgEAEQgUARgUAAQgQAAgMgNg");
	this.shape_1.setTransform(20,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AghA4QgIgIAAgXIABgcIABgeIAAgHIgBgIQAAgLAKAAQAEAAACACIAQgEIAOgBQASAAALAFQAHADAAAGQAAAEgDACQgCAEgFAAIgDAAQgMgDgLgBIgLACIgNACIgBAdIAcgDIARgBQAFAAADADQADADAAAEQAAAIgJABIgSABIgeADIgBAPQAAAPACACQABABAIAAIANgBIANAAIAFAAIAEgBQAEAAADACQAEADAAAFQAAAIgJACQgHACgWgBQgYAAgHgGg");
	this.shape_2.setTransform(10.8,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgfAyQgPgKAAgOQAAgMALAAQAJABABAKQgBAFAIAFQAIAFAGAAQADAAABgKIABgXIABgoIAAgFIgCAAIgIAAIgIgBQgFABgDgDQgDgDAAgFQAAgKANAAIAIABIAGAAIANgBIAOAAQAUAAAAALQAAAEgDADQgDADgEAAIgFAAIgEgBIgGAAIAAAGQAAAzgIAYQgEASgOAAQgNAAgOgKg");
	this.shape_3.setTransform(1,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgjA4QgDgEAAgEIAAhNIgBgKQAAgFABgEQABgHALgCQAGgBANAAQANAAAMAJQAPAKAAAQQAAAIgDAGQgCAFgGAEQAHADAFAHQAGAIAAAIQAAAJgKAJQgHAGgIADQgQAGgaAAQgFAAgDgDgAgTAnQANAAAOgFQANgDgBgFQAAgFgIgFQgGgDgGgBIgTAAgAgTgXIAAAQIAKAAQAWgCAAgOQAAgGgHgEQgGgFgHAAIgMAAg");
	this.shape_4.setTransform(-8.6,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgdAyQgTgPAAgkIAAgKIABgLIAAgIIAAgJQAAgFADgFQACgHAGAAQADAAADACQAEADAAAEIAAANIAAAMIgBALIAAAKQAAAKADAKQACALAHAFQACACAMAAQASAAAHghQAEgQAAgfQAAgEACgEQAEgFAFAAQAFAAADAEQACACAAAEQAAAcgDARQgEAYgMAQQgFAHgIAFQgJAGgJAAQgSAAgKgHg");
	this.shape_5.setTransform(-19.1,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgnAvQgJgGAAgJQAAgFADgDQADgDAFAAQAGAAADAHQAFAJAOAAQAMAAAMgFQAMgHAAgGQAAgJgIgDQgFgCgPAAQgNgBgKgEQgOgGABgLQAAgOAPgMQAPgMARAAQAHAAALADQANAFAAAFQAAAEgDACQgDAEgEAAIgLgCIgKgBQgKAAgHAFQgJAEAAAGQAAACADACIAIACIARACQARABAJAIQALAHAAAQQAAATgWAJQgQAIgUAAQgTAAgLgJg");
	this.shape_6.setTransform(-29.8,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-12.4,74.2,24.9);


(lib.Tween3_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgNk1IAbJr");
	this.shape.setTransform(4.8,-32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAApIIAAJLAAAA1IAAIU");
	this.shape_1.setTransform(-5,-5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,1,1).p("AhtAAIA8AAICfAA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-64.7,24,118.9);


(lib.Tween3_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAk1IAAJr");
	this.shape.setTransform(6.2,-32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAApIIAAJLAAAA1IAAIU");
	this.shape_1.setTransform(-5,-5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,1,1).p("AhtAAIA8AAICfAA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-64.7,24,118.9);


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


(lib.Dynamo_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("A+To9QgDgCgDgDIAAAAQgbgVgQggQgTgqgIguQgIgvAEgwQABgYgFgSQASAkAgAXQAgAXAlAcQAeAXArAMQAtAMAkAZQAeAWATAgQAJAPADANQATgMARgQQAdgaAsgJQARgDAXAAQgbghg3gLQgUgEgQgHQArgSAxAOQAvAOAaAZQAMgmAngbQAhgXAngRQgHAkgUAkQgMAWgLAcQAtgGAoAQQApAQAaAcQADACACADQAXAaALAmQAGAYAIASQACgyAVglQAXgoAmgVQAkgVAugNQAvgOAhgUQAJgGAKgHQgLAqgGAwQgBABAAAAQgFAnAHAtQAGAogFA1QgFAuglAfQguAng1gcQgEgCgCgBQgBgBAAAAQgKgFABgBAr+i9QgFiIAMiDQANiQgNiOQgMiIhwhQQh9hXhygvQh9g0iKgPQiQgPiGAiQiGAjhsA8QiBBIhBBqQhIB0gHCXQgFCIAECXQADCTgBCTQAAAKAAAJQgRAHgQAHQgpASgiAVQgkAVgsAOQgqANgeAZQggAaghAPQgoASghAbQgWASgWAVQgUATgaARIgBAAQAQAlAZAbQAbAdAXAmQAXAmAbAZQAdAaAcAiQAbAhApAcQAqAcAaAeQAbAfAtATQArATAiAQQArATAnAWQAUAMAfASQAtAZAzAIQAwAIAqAQQAlAOAvAIQAtAHAxAEQAyAFAzAGQAzAHAxAHQAxAIAugEQAygEAzAFQApAEAsgDQAEgBAEAAQADABADABQAdALAhATQAhATAnANQACABADABQAjAOAkAMQArAOAtALQAuANApAMQAqAMAtALQAoAKAvAMQAwAMAwAIQAqAHAyAKQAwAJAwgHQAxgIAwABQAUAAAJgIQgKgGgLgFQgggRglgZQgogbgigjQgegdgegiQgegggegoQgKgMgIgNQgQgZgMgbQgSgqgaggQgcgjgNgoQgQgqgBgyQgBg1AlgMQgfgWgqgNQgwgOgwgIQgygHgxgCQg0gDg0gBQgwgCgzAGQgwAFg1gBQg1AAgrALQgyAMgxAFQgvAEgvALQgvALgsAIQgwAJggAaQATAgAeAhQAfAhAeAdQAdAcAeAhQAbAeAlAdQAZAVAjAZQAhAXAlAaQAlAaAtAQQAEABAEACA8vmCQgtgFgWgWQgcgbADgwQACgvgKgkQAAgBAAgBQgBgEgCgEQgNgqgPgrQAcAcAzAFQA6AGA5AMQAmAIASAhQACADABADQAQAmgEAtA8GmKQADAAADAAA8GmKQAEgEAEgDQAKgHAOgEQAWgGAZgBQAggBAdAKQAtAQARAkQASAmgLA2QgHAjgTAeQgWAkg2ACQgyACgagaA8vmCQAGABAIAAA8GmKQgXABgSAHA8Nj2QgEgIgFgJQgSgoALgzQAFgYASgQA64o+QAQgIAPgKAzvpaQAKgrAWglQAWgjAigTQAhgSAjgWQAjgWAhgWQAmgZAfgUQAggVAhgLQgBAlgSAnQgOAgAGAzQAFAzgOAdQgKAUgQAEQAAAAgBAAQgFACgFgBAy/nwQABAEACAEA2MqVQgBABAAABQgBADgCAEA2Em4QgJACgIADA24kZQgDgLgCgMQgHg4AVggQATgcAYgUA15nAQgGAEgFAEQAagGAfAFQAqAHAsAUQArAVADA3QACAdgDAeQgEAvglATQgpAVg2gFQgtgEgcgdQgKgKgHgMAxYl0QgJAqgRAiQgPAegXAOQgBAAgBAAQgEgCgEgCAn8ieQAKgnAYgdQACgCACgCQAXgcAcggQAdggAigZQAhgWAngaQAjgXAngVQAngVAqgJQAtgJA1ACQgRAlgLArQgNAwAHAzQAHAvAAA1QAAAVAAAVQABAeABAdQABAYgCAXQALAEALAEQAUAIAVAEQADABAEABQADgBADgBQAWgEATgHQAmgOAcgXIg1AOIhKAAAhEAdQADgFADgFAg5gxQgCAbgGAYQgEAQABALQABAMAFAIAATgaQADABADAAAATgaQAAgBAAgCAANgbQADABADAAQACAwABAvQABA2AAAsQgBAzADAzQACAtABA1QAAA0AFAzQAEAygHAvQgEAYACAXQAAACAAADQAEgBAEgBIALgBIAAAAQAAAAAAAAQgIAHgJAJIAAAAQAAADABADApFAiQBZBDCXAQQCdAQBWhGQARgOANgUAr+i9QAQABAQAEQAwAKAxADQAIABAIAAQADAAAEAAQABABABAAQATAEAUACQAUADAWABQALABALAAQAAAAABAAQgBACAAACQgLAugVAlQgTAigPAsQgEAMgCAPQgBAHAAAIAAeJ4QgfAegjAWQghAUgmAVQgkAUghAVQgmAXgoAQQgmAOgvANQgsALgqANQguAOg0ACAAvJoQADgDADgDAAvJoQgFABgGAAAAcJrQABAGABAHAxti+QAsgLA1AIQAzAGAxAAQAwgBA1gDQAkgCAhAEQAAAGAAAGQAGCSgFCMA7VAbQgsADgpAOQguAQgkAgQghAcgOAqQgQAzA2AaQAbAOAXAPQAUAPAkADQAyAEAyAEQAyAEAyABQAzABA0AAQA1gBAyADQAzADAxAHQAzAIAwgMQAvgMAwgMQAsgLAvgYQApgVAYgjQATgbgDgpQgDg2gggSQgogWgzgJQgogHgigDQAFgKADgKQANgvACg1QACgtgLglAyYj8QAXANAOAhQADAIADAIA1WhIQgBATgCAUQgDAugWAqQglAIgxgIQgugHglgLQgFAGgDAGA1WhIQgaAHgWAHQgoANgmAcQghAWggAbQgDADgDACQgDgBgDgBA1WhIQAAgDABgDA0xhQQgUAEgRAEA4QB1QAsAFAwgFQAxgFAzgDQAUgBAUgEAx7AMQgNAagZAOQgkAVgvARQgZAJgbAFIAAAAQAEArgEAnQAAABAAABQgEAEgGACQgNAEgPADQgNAEgOAAQgOAAgOAAQgPAAgOAAQgPABgOgBQgPAAgNgBQgOgCgOgDQgNgDgNgDQABglAAgnQgDAAgDgBQgygHgvgOQgugOgagaQgMgMgKgQAjdR7QAAAAABAAQADACAEACA4xiUQAiAiAsgdQAHgFAEgIA7kjAQgBACgCADQgEgEgDgFQgDgEgDgFA74iAQADgjAOgYA74iAQgBAJAAALQgBAyAOAnQAKAaANAUQAFAAAFAAEgiBAAAQADgBADgCQAYgKAXgJQAsgSApgMQAqgOArgSQAlgQAygIQAtgHAmgNA4QB1QAAAAAAgBEgiBAAAQgBBpgFBHA50InQABgBACgBQgCgDgBgDAaxAdICyAuQgoAOgVAjINFhEIAAA1Io+C+Ih4gRIjECIIgeAAIk1BqQgngkAYgoIBLg8IiWAAIBSgtIAuAAQAYgYAsABIlFgtIEBhEICHhLIhLguIgugCIDfg3IgLgDEAgtAErIFrAzIq2DMQgwAIAEgzQgZAVglAHIgWAAIpqCPIg+AAICQA1IjLAAItQh3AQlCnQgTgJgEAAAQlCnIAAACIqvCIIAABqIK2hEIgZAtIgrBLIkPAAIhTBqIE0BxIgOAAAXSBUImPBkQgSgKgMgGQAAAAAAgBALYiNIj4BzIAABhICthZIGYBhIAABYAaxAdIEbhGIuJAAIDEhLIAAgXIovgCIA9gcIgtg8IpqCYQAFgDAEgEAQTGEIgbAAAVEGEIkxAAAjUR2IW9AA");
	this.shape.setTransform(-11.7,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("AAaI2QgygGgyAFQguAEgxgIIhkgOQgzgHgygEQgxgEgtgIQgvgIglgOQgqgPgwgIQgzgIgsgaIg0gdQgngXgrgTIhNgiQgtgTgbggQgagdgqgdQgpgcgbggQgcgjgcgZQgcgagXglQgXgmgbgdQgZgbgPglIAAAAQAagRAUgTQAWgVAWgSQAhgaAogSQAhgPAggbQAegYArgOQArgNAkgWQAigUAqgTIAggPIAHgCIAugUQAsgRApgNQAqgOArgRQAlgRAygHQAtgIAmgNIgBAUQgBAyAOAoQAKAaANAVQgsACgoAOQgvAQgkAgQghAdgNAqQgRAyA2AbQAbANAXAQQAUAOAkADIBkAJQAyADAyACQAzABA0gBQA1AAAzADQAyACAwAIQAzAHAwgMIBfgYQAsgLAvgXQApgVAYgjQATgbgDgqQgDg2gggRQgogWgzgJQgogHgigEQAFgJADgMQANguACg2QACgtgLgkQAsgLA1AHQAzAGAxAAQAwAAA1gDQAkgCAhADQAQACAQADQAwALAxADIAQABIAHAAIACAAIAnAHQAUADAWABIAWAAIAAAFQgLAugVAkQgTAjgPAsQgEAMgCAQQBZBCCXAQQCdARBWhHQARgOANgTQABALAFAIQgFgIgBgLIAGgLIgGALQgBgMAEgPQAGgZACgcIAWAIQAUAIAWAFIAHABIAGACIADBgIABBhQgBA0ADAzQACAtABA1QAAAyAFA0QAEAxgHAwQgDAXABAXIAAAFIACANQggAegjAWQghAVgmAVQgkATghAWQgmAXgoAPQgmAPgvAMQgsALgqAOQguAOg0ABQgQgZgMgaQgSgrgaggQgcgjgNgoQgQgqgBgxQgBg2AlgMQgfgWgqgNQgwgOgwgHQgygIgxgCIhogEQgwgBgzAFQgwAGg1gBQg1gBgrALQgxANgxAEQgvAEgvAMQgvAKgsAIQgwAJggAaQATAhAeAgQAfAhAeAdQAdAcAeAiQAbAeAlAdQAZAUAjAZIBFAyQAlAaAtAPIAAAEQgUACgUAAQgXAAgWgCgAlQC1IADgDIgDgGIADAGIgDADgAtjjBQAFhHABhrQgBBrgFBHgAImkFQAChEAAhGQAAhKgDhLIAAgMIAAAMQADBLAABKQAABGgCBEgALdlBIABgOIgBAOg");
	this.shape_1.setTransform(-143.3,58.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AGNMwIhcgRQgwgIgwgMIhXgVQgtgMgqgMQgogMgvgMQgsgMgrgOQgkgMgjgNIgGgDQgmgNghgTQghgTgegLIgFgCIgIgDQgtgQglgZIhGgyQgjgZgagUQgkgegbgeQgeghgegcQgdgdgfghQgeghgTggQAggaAwgJQAsgIAvgLQAvgLAvgEQAxgFAygMQArgLA1ABQA1AAAwgFQAzgGAwACIBnAEQAxACAyAIQAwAHAwAOQAqANAfAWQglAMABA1QABAyAQAqQANAoAcAjQAaAgASAqQAMAbAQAZIASAaQAeAnAeAhQAeAhAeAeQAiAiAoAbQAlAaAfAQIAWALQgJAIgUAAQgwgBgxAIQgVADgVAAQgbAAgbgFgAqVDEIgYAIQgJAHgDAKQgFAPAHAOQAXAhAkgWQAHgIADgJIADgLQABgKgGgIIgIgLIgKgEIgPgFIAAABgABECnQgJAGgDAKQgEAPAGAOQAXAhAkgWQAHgHADgKIADgLQABgKgGgHIgIgLIgKgFIgPgFIAAABIgYAJgAnDCnQgJAGgEAKQgEAPAHAOQAXAhAjgWQAHgHAEgKIADgLQAAgKgGgHIgIgLIgJgFIgPgFIgBABIgXAJgAizCIIgYAIQgIAGgEALQgEAOAHAOQAXAiAjgWQAHgIADgKIADgLQABgKgGgHIgIgLIgJgFIgPgEIgBABgAHzjiQiXgQhZhCQABgQAEgMQAQgtATgiQAVgkALguIABgFQAKgnAYgdIAEgEIAzg8QAdggAigYIBIgxQAjgXAmgVQAogVAqgIQAtgKA1ADQgRAkgLAsQgNAvAHAzQAHAvAAA2IAAAqIACA6QABAYgCAXQgCAcgHAZQgDAPABALQgNAUgSAOQhFA5h0AAQgbAAgegDgAIvlSIgYAIQgIAGgEALQgEAOAHAOQAXAiAjgWQAHgIADgKIADgLQABgKgGgHIgIgLIgJgFIgPgEIgBABgAF6lwIgYAIQgIAGgEALQgEAOAHAOQAbAjAngYQAHgHADgKIADgLQABgKgGgHIgIgLIgKgFIgWgEIgBABgAK+l4IgYAIQgIAHgEAKQgEAPAHAOQAXAhAkgWQAGgIAEgJIADgLQABgKgGgIIgIgLIgKgEIgPgFIgBABg");
	this.shape_2.setTransform(-95.8,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("ApTDIIk1hxIBThpIEQAAIAqhLIExAAICXAAIhMA8QgXAnAmAjIE0hoIAeAAIDEiIIB5ARIFqAzIq2DLQgvAHADgzQgYAWglAHIgXAAIppCPg");
	this.shape_3.setTransform(143.4,69.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("AivCSIgBAAIAAhZImYhgIitBZIAAhhID4hzIIuACIAAAXIjDBLIOIAAIkbBGIgLgDIALADIjfA3ImOBkIgdgRg");
	this.shape_4.setTransform(112.1,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AoHCsIBLg8IiWAAIBSguIAuAAQAYgXAsABIlFgsIEBhEICHhMIhLgtIgugCIDfg3ICyAtQgoAPgVAjINEhEIAAA1Io+C9Ih4gRIjDCIIgeAAIk1BpQgngjAYgog");
	this.shape_5.setTransform(182.6,49.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("ApqA6IKuiHIABgCIAdARIGPhkIAuACIBMAtIiIBMIkBBCIFFAuQgsgBgYAXIgtAAIhTAtIkxAAIAZgtIq1BEg");
	this.shape_6.setTransform(87.6,46.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF99FF").s().p("AgKHvIgdgCIgbgEIgagHIABhMIADABQAVACAXAAIAAAAIAAAAQATAAATgCIACAAIAAAAIAEAAQAxgFAzgEQAUgBAUgDQgUADgUABQgzAEgxAFIgEAAIAAAAIgCAAQgTACgTAAIAAAAIAAAAQgXAAgVgCIgDgBIAAAAIgGAAQgygHgvgOQgugOgagbQgMgMgKgPIAKgBIgKABQgNgVgKgaQgPgoACgyIABgUQADgjAOgYQAaAbAygCQA2gDAWgjQATgfAHgiQALg1gSgnQgRgjgtgRQgdgKggABQgZABgXAGQgNAFgKAHIgIAGQgXACgTAHQgsgFgWgWQgcgcADgvQACgwgKgjIAAgDIgDgIIgchVQAcAcAyAFQA7AGA5AMQAmAIASAiQAQgIAPgKQATgNARgPQAdgaAsgJQARgEAWABQgagig3gLQgUgEgQgHQArgSAxAPQAvANAaAaQAMgmAmgbQAggXAngSQgGAlgUAkQgMAVgLAcQAtgGAoAQQAoARAbAbIAFAGQAXAaAKAmQAHAXAIATQACgzAVgkQAXgpAmgVQAkgUAugOQAvgNAhgVIATgMQgLApgHAwIAAACIgIABIgBAAIgBAAIABAAIABAAIAIgBQgFAmAHAuQAGAngFA1QgFAuglAfQguAng1gcIgGgDIgBAAIgKgGIAAAAIAAAAIAKAGIABAAQgJAqgRAiQgQAdgXAPIgBAAIgJgFIAJAFIABAAQAXANAOAhIAHAQQALAkgCAtQgCA2gNAuQgDAMgFAJQgNAagaAPQgjAVgvARQgZAJgbAFIAAAAQAEAqgEAoIgBACQgDAEgGACIgcAHQgNADgOAAIgcAAIgdABIgPAAIgNAAgAAuDnQgoANglAbQghAYggAbIgGAFQAlALAuAHQAwAHAlgHQAVgrAEgvIADgmIAlgJIglAJIABgGIgBAGQgbAGgVAIgAhvFTQAEgHAFgFIgGgCIAGACQgFAFgEAHgAhUCfQASAAAUgOQAHgFAEgHQgEAHgHAFQgUAOgSAAIgBAAIAAAAQgVAAgSgRIgBgBIABABQASARAVAAIAAAAIABAAgAAwiXQgZAVgSAbQgUAgAHA5QABAMAEAKIAAAIIACAFQAEAJAGAHQAIALAKAKQAcAeAtAEQA2AFAogWQAlgTAFgvQADgdgCgcQgDg3gsgVQgrgVgqgHQgggFgZAGIAKgIIgKAIIAAAAgAAeiRQAJgEAJgCQgJACgJAEgAj1jDIACgVQAAgigNgdIgDgFIADAFQANAdAAAiIgCAVgAD4jGIgDgIIADAIgAAnlyIgDAHIADgHIABgCIgBACgAHslYIAAAAg");
	this.shape_7.setTransform(-157.8,-7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCCFF").s().p("ADrCfQgLgmgWgaQAJgrAXglQAVgiAigTQAhgSAjgWIBEgsIBFgtQAhgWAggLQgBAlgSAoQgOAgAGAyQAGAygPAeQgKATgQAFIAAgCQAGgwALgoIgTAMQggAUgwANQguAOgkAUQglAVgYApQgUAkgDAzQgIgTgGgXgAk3BRQg4gMg7gGQgzgEgcgdIAdBVIgEAEQgbgVgPghQgUgpgIgtQgIgwAEgwQACgXgGgSQASAkAgAWIBFA0QAeAXArAMQAuAMAjAYQAfAWASAgQAJAPAEANQgQAKgQAIQgRghgngJg");
	this.shape_8.setTransform(-158.2,-48.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjyB0IADgFIABgFQAxAQAXhDIgJgXQgFgKgGgHQgFgDgFgBQgPgDgPgCIgLACQgZAGgNAUQgFALAAAMIgJgRQgSgoAKgyQAFgYASgQIAHAAIgHAAIAJgHQAKgHANgEQAXgGAYgBQAhgBAcAKQAuAQARAkQASAmgLA1QgIAjgSAeQgWAkg2ACIgIAAQgsAAgYgYgACkBqQgtgEgdgdIADgGQAZANAigKQAPgJADgRIADgMIgDgFQgUgvg1AEIgLACIgGACIgFAEIgGAFIgFAFIgDAGIgBALIAAADQgEgLgBgLQgIg4AWggQASgcAZgUQAZgGAgAFQAqAHArAUQArAVAEA3QACAdgDAdQgFAvglATQghARgpAAIgUgBg");
	this.shape_9.setTransform(-164.2,-8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ax/JEIAJADIgIAAgAO0F+ItQh4IAGgFIgGAFIAAAAIgLACIgHACIgBgFQgBgXADgYQAIgvgFgyQgFgzAAg0QAAg0gCgtQgDgzAAg0IgBhhIgChgIAGABIgGgBIAAgDQAVgEATgIQAmgNAcgXIJqiZIAtA9Ig9AcIj4BzIAABiICuhaIGXBiIAABYIgBAAIgIgEIgBAAIgEgCIAAAAIgDgBIAAgBIgBAAIgBAAIAAAAIgCgBIgBAAIgBAAIAAAAIAAAAIABAAIABAAIACABIAAAAIABAAIABAAIAAABIADABIAAAAIAEACIABAAIAIAEIABAAIAAACIquCIIAABpIK1hEIgZAtIgbAAIAbAAIgqBLIkQAAIhTBqIE1BxICQA1gAPwFJIgOAAgARIAjgAnIoAIABAAIgBAFg");
	this.shape_10.setTransform(-17,56.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("An2G/QgHgOAFgOQADgLAJgGIAYgJIAAAAIAPAEIAKAFIAIALQAGAHgBAKIgDALQgEAKgGAIQgOAIgNAAQgSAAgOgUgAD7GZQgHgNAFgPQADgKAJgHIAYgIIAAgBIAPAEIAKAFIAIALQAGAIgBAKIgDAKQgEAKgGAIQgOAJgNAAQgSAAgOgVgAkMGZQgHgNAEgPQAEgKAIgHIAYgIIABgBIAPAEIAJAFIAIALQAGAIAAAKIgDAKQgEAKgHAIQgOAJgMAAQgSAAgOgVgAgTGDQgHgOAEgPQADgKAJgGIAXgJIABgBIAOAFIAKAFIAIALQAGAHgBAKIgDALQgDAKgHAHQgOAJgMAAQgSAAgNgUgAkXCmQgygHgygDQgzgDg0ABQg0AAgzgBQgygCgygDIhlgIQgjgEgVgOQgWgPgcgOQg2gaARgzQAOgpAhgdQAkggAugPQApgOAsgDQAKAPAMAMQAaAbAuAOQAvAOAyAHIAGABIgBBLIAaAGIAbAEIAdACIAdAAIAdAAIAcAAQAOgBANgDIAcgHQAGgCADgEIABgCQAEgngEgqIAAAAQAbgFAZgJQAvgRAjgVQAagOANgaQAiADAoAHQAyAJAoAWQAgASADA2QADAogTAbQgYAjgpAVQguAYgsALIhgAXQgdAIgfAAQgTAAgTgDgALPhXQgHgOAEgPQADgKAJgGIAYgJIABgBIAOAFIAKAFIAIALQAGAHgBAKIgDALQgDAKgHAHQgOAJgMAAQgTAAgNgUgAIah1QgHgOAEgPQADgKAJgHIAYgIIABgBIAWAFIAKAEIAIALQAGAIgBAKIgDALQgEAJgGAIQgQAKgOAAQgUAAgQgVgANeh9QgHgOAEgPQAEgKAIgGIAYgIIABgCIAPAFIAJAFIAIALQAGAHAAAKIgDALQgEAKgHAHQgOAJgMAAQgSAAgOgUgArZlXQgIgDgKgFQgJgFgKgIQgFgLAAgMIAAgFQAAgMAFgLQAOgUAYgGIALgCQAPACAPADQAFABAFADQAHAHAEAKIAKAXQgUA2gjAAQgIAAgKgDgAmNl/QgKgFgKgKQgGgHgFgIIgCgGIAAgIIAAgDIACgMIACgFIAFgGIAGgGIAGgDIAFgCIALgCQA1gFAVAwIACAGIgCALQgEARgPAKQgOAEgNAAQgRAAgPgIg");
	this.shape_11.setTransform(-115.1,36.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgBACIADgDIgCADg");
	this.shape_12.setTransform(-206.1,-36.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.3,1,1).p("Ar+i9QgFiIAMiDQANiQgNiOQgMiIhwhQQh9hXhygvQh9g0iKgPQiQgPiGAiQiGAjhsA8QiBBIhBBqQhIB0gHCXQgFCIAECXQADCTgBCTQAAAKAAAJQADgBADgCQAYgKAXgJQAsgSApgMQAqgOArgSQAlgQAygIQAtgHAmgNQADgjAOgYA6ZpQQATgMARgQQAdgaAsgJQARgDAXAAQgbghg3gLQgUgEgQgHQArgSAxAOQAvAOAaAZQAMgmAngbQAhgXAngRQgHAkgUAkQgMAWgLAcQAtgGAoAQQApAQAaAcQADACACADQAXAaALAmQAGAYAIASQACgyAVglQAXgoAmgVQAkgVAugNQAvgOAhgUQAJgGAKgHQgLAqgGAwQgBABAAAAQgFAnAHAtQAGAogFA1QgFAuglAfQguAng1gcQgEgCgCgBQgBgBAAAAQgKgFABgBA+To9QgDgCgDgDIAAAAQgbgVgQggQgTgqgIguQgIgvAEgwQABgYgFgSQASAkAgAXQAgAXAlAcQAeAXArAMQAtAMAkAZQAeAWATAgQAJAPADANA8vmCQgtgFgWgWQgcgbADgwQACgvgKgkQAAgBAAgBA64o+QgSghgmgIQg5gMg6gGQgzgFgcgcQAPArANAqQACAEABAEA64o+QACADABADQAQAmgEAtA8GmKQADAAADAAA8GmKQAEgEAEgDQAKgHAOgEQAWgGAZgBQAggBAdAKQAtAQARAkQASAmgLA2QgHAjgTAeQgWAkg2ACQgyACgagaA8vmCQAGABAIAAA8Nj2QgEgIgFgJQgSgoALgzQAFgYASgQQgXABgSAHA64o+QAQgIAPgKAzvpaQAKgrAWglQAWgjAigTQAhgSAjgWQAjgWAhgWQAmgZAfgUQAggVAhgLQgBAlgSAnQgOAgAGAzQAFAzgOAdQgKAUgQAEQAAAAgBAAQgFACgFgBAy/nwQABAEACAEA2MqVQgBABAAABQgBADgCAEA2Em4QgJACgIADA24kZQgDgLgCgMQgHg4AVggQATgcAYgUA15nAQgGAEgFAEQAagGAfAFQAqAHAsAUQArAVADA3QACAdgDAeQgEAvglATQgpAVg2gFQgtgEgcgdQgKgKgHgMAxYl0QgJAqgRAiQgPAegXAOQgBAAgBAAQgEgCgEgCAn8ieQAKgnAYgdQACgCACgCQAXgcAcggQAdggAigZQAhgWAngaQAjgXAngVQAngVAqgJQAtgJA1ACQgRAlgLArQgNAwAHAzQAHAvAAA1QAAAVAAAVQABAeABAdQABAYgCAXQALAEALAEQAUAIAVAEQADABAEABQADgBADgBQAAACAAABQADABAGAAQAAgCAAgCQAAgCAAgCAhEAdQADgFADgFAg5gxQgCAbgGAYQgEAQABALAAcgZQgBAWADAUQAHAvgEAyQgFA0AAAzQAAAogCAjQAAAMgBALQgDAzABA0QAAAsgBA1QgBAvgCAxAgBg/IBCAAAANgbQADABADAAApFAiQBZBDCXAQQCdAQBWhGQARgOANgUQABAMAFAIAr+i9QAQABAQAEQAwAKAxADQAIABAIAAQADAAAEAAQABABABAAQATAEAUACQAUADAWABQALABALAAQAAAAABAAQgBACAAACQgLAugVAlQgTAigPAsQgEAMgCAPQgBAHAAAIA5xIlQAggaAwgJQAsgIAvgLQAvgLAvgEQAxgFAygMQArgLA1AAQA1ABAwgFQAzgGAwACQA0ABA0ADQAxACAyAHQAwAIAwAOQAqANAfAWQglAMABA1QABAyAQAqQANAoAcAjQAaAgASAqQAMAbAQAZQA0gCAugOQAqgNAsgLQAvgNAmgOQAogQAmgXQAhgVAkgUQAmgVAhgUQAjgWAfgeQgBgHgBgGQAEgBADAAQAEABAEABQgGAFgHAHIAAAAQAAADABADAATJmQAFABAEABQADABAEABAArJsQAJADAIADQADABACAAQAjAOAaAVQAFAEAEADABBKJIAIAAIA1ANAxti+QAsgLA1AIQAzAGAxAAQAwgBA1gDQAkgCAhAEQAAAGAAAGQAGCSgFCMA7VAbQgsADgpAOQguAQgkAgQghAcgOAqQgQAzA2AaQAbAOAXAPQAUAPAkADQAyAEAyAEQAyAEAyABQAzABA0AAQA1gBAyADQAzADAxAHQAzAIAwgMQAvgMAwgMQAsgLAvgYQApgVAYgjQATgbgDgpQgDg2gggSQgogWgzgJQgogHgigDQAFgKADgKQANgvACg1QACgtgLglAyYj8QAXANAOAhQADAIADAIA1WhIQgBATgCAUQgDAugWAqQglAIgxgIQgugHglgLQgFAGgDAGA1WhIQgaAHgWAHQgoANgmAcQghAWggAbQgDADgDACQgDgBgDgBA1WhIQAAgDABgDA0xhQQgUAEgRAEA4QB1QAsAFAwgFQAxgFAzgDQAUgBAUgEAx7AMQgNAagZAOQgkAVgvARQgZAJgbAFIAAAAQAEArgEAnQAAABAAABQgEAEgGACQgNAEgPADQgNAEgOAAQgOAAgOAAQgPAAgOAAQgPABgOgBQgPAAgNgBQgOgCgOgDQgNgDgNgDQABglAAgnQgDAAgDgBQgygHgvgOQgugOgagaQgMgMgKgQAjdR7QgJAIgUAAQgwgBgxAIQgwAHgwgJQgygKgqgHQgwgIgwgMQgvgMgogKQgtgLgqgMQgpgMgugNQgtgLgrgOQgkgMgjgOQgDgBgCgBQgngNghgTQghgTgdgLQgDgBgDgBQgEgCgEgBQgtgQglgaQglgaghgXQgjgZgZgVQglgdgbgeQgeghgdgcQgegdgfghQgeghgTggQgCABgBABAysOoQgEAAgEABQgsADgpgEQgzgFgyAEQguAEgxgIQgxgHgzgHQgzgGgygFQgxgEgtgHQgvgIglgOQgqgQgwgIQgzgIgtgZQgfgSgUgMQgngWgrgTQgigQgrgTQgtgTgbgfQgagegqgcQgpgcgbghQgcgigdgaQgbgZgXgmQgXgmgbgdQgZgbgQglIABAAQAagRAUgTQAWgVAWgSQAhgbAogSQAhgPAggaQAegZAqgNQAsgOAkgVQAigVApgSQAQgHARgHQgBBpgFBHAjdR7QAAAAABAAQADACAEACAoLNoQAIANAKAMQAeAoAeAgQAeAiAeAdQAiAjAoAbQAlAZAgARQALAFAKAGA4xiUQAiAiAsgdQAHgFAEgIA7kjAQgBACgCADQgEgEgDgFQgDgEgDgFA74iAQgBAJAAALQgBAyAOAnQAKAaANAUQAFAAAFAAA4QB1QAAAAAAgBA50IfQABADACADEAgtAEdII+C+IAAA1ItFhEQAVAjAoAPIiyAtIEbBHIuJAAIDEBLIAAAXIovACIA9AcIgtA9IpqiZAVEDEICWAAIhLg8QgYgoAngjIE1BpIAeAAIDECIIB4gRAO6hhIA+AAIJqCOIAWAAQAlAHAZAWQgEgzAwAHIK2DMIlrAzAXSH0IAugCIBLgtIiHhMIkBhEIFFgtQgsABgYgXIguAAIhSguIkxAAIAZAuIq2hEIAABpIKvCIIAAACQgTAJgEAAABBghIM+h1IDLAAIiQA1Ik0BwIBTBqIEPAAIArBLIgbAAAO6hhIgOAAAQlGhIAABYImYBiIithaIAABiID4BzAQlGhQAAAAAAgBQAMgGASgKIGPBkAaxIrIjfg3AaxIrIgLADAjUR2IW9AA");
	this.shape_13.setTransform(-11.7,21.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000CC").s().p("AAcI2QgygGgyAFQgtAEgygIIhkgOQgygHgygEQgygEgtgIQgugIgmgOQgqgPgwgIQgygIgtgaIg0gdQgngXgqgTIhOgiQgtgTgbggQgagdgpgdQgpgcgbggQgdgjgcgZQgbgagYglQgXgmgbgdQgYgbgQglIAAAAQAagRAVgTQAVgVAXgSQAhgaAngSQAhgPAggbQAfgYAqgOQAsgNAjgWQAigUAqgTIAhgPQgBBrgGBHQAGhHABhrIAGgCIAvgUQAsgRAogNQArgOAqgRQAmgRAxgHQAtgIAmgNIgBAUQgBAyAPAoQAJAaANAVQgsACgoAOQguAQglAgQggAdgOAqQgRAyA2AbQAcANAWAQQAUAOAkADIBkAJQAyADAyACQA0ABA0gBQA0AAAzADQAyACAwAIQAzAHAwgMIBfgYQAsgLAvgXQApgVAYgjQATgbgCgqQgDg2ghgRQgogWgzgJQgngHgigEQAEgJAEgMQANguACg2QACgtgMgkQAsgLA2AHQAyAGAxAAQAwAAA1gDQAlgCAgADQARACAPADQAxALAwADIAQABIAHAAIACAAIAnAHQAUADAWABIAWAAIAAAFQgLAugUAkQgUAjgPAsQgEAMgCAQQBZBCCXAQQCdARBWhHQARgOANgTIAHgLIgHALQgBgMAEgPQAGgZACgcIAXAIQATAIAWAFIAHABIAHACIACBgIABBhQAAA0ADAzIABAXIgBAXQgDAyAAAzIgBBiIgCBgIAAACIAIACIABADIABANQggAegjAWQghAVgmAVQgjATgiAWQgmAXgoAPQgmAPgvAMQgsALgqAOQguAOg0ABQgQgZgMgaQgSgrgZggQgcgjgOgoQgPgqgBgxQgBg2AkgMQgegWgrgNQgwgOgvgHQgygIgygCIhngEQgxgBgzAFQgwAGg1gBQg0gBgsALQgxANgxAEQgvAEgvAMQgvAKgsAIQgwAJggAaQAUAhAeAgQAeAhAeAdQAdAcAeAiQAbAeAlAdQAaAUAiAZIBFAyQAlAaAtAPIABAEQgVACgUAAQgXAAgWgCgAlOC1IADgDIgDgGIADAGIgDADgAIokFQADhEAAhGQAAhKgEhLIAAgMIAAAMQAEBLAABKQAABGgDBEgATolBQgGgIgBgLQABALAGAIgALglBIAAgOIAAAOgAlLCyIAAAAg");
	this.shape_14.setTransform(-143.5,58.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Ax/IgIAJADIgIABgACzERQgagVgjgNIgFgCIgRgGIgIgCIgHgCIgIgCIAAgDIAChfIABhiQAAgzADgzIABgWIABhLQAAg0AFg0QAFgxgIgwQgDgVABgVIAAgEIABgFIAHABIALACIAAAAIASgCIM+h1IDMAAIiQA1IgOAAIAOAAIk1BxIBTBpIEQAAIAqBMIAZAtIq1hEIAABpIKuCHIAAACIgGADIAAAAQgNAHgEAAIAAAAIAAAAQAEAAANgHIAAAAIAGgDIAABZImXBiIiuhbIAABiID4BzIA9AcIgtA9gARIi/IgbAAgAPwnlgAnIojIABAAIgBAFg");
	this.shape_15.setTransform(-17,60.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("ABiA/IgdARIgBgCIquiHIAAhpIK1BEIgZgtIExAAIBTAtIAtAAQAYAXAsgBIlFAuIEBBCICIBMIhMAtIguACg");
	this.shape_16.setTransform(87.6,55.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC33").s().p("Ar1AwIAAhhICtBZIGYhhIAAhYIABgBIAdgQIGOBkIDfA4IEbBFIuIAAIDDBLIAAAXIouACgAHQgEIALgCg");
	this.shape_17.setTransform(112.1,77.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9933").s().p("ADiBAIgeAAIk0hoQgmAjAXAnIBMA8IiXAAIkxAAIgqhLIkQAAIhThpIE1hxIA9AAIJpCPIAXAAQAlAHAYAWQgDgzAvAHIK2DLIlqAzIh5ARg");
	this.shape_18.setTransform(143.4,31.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AnEDAIAugCIBLgtIiHhMIkBhEIFFgsQgsABgYgXIguAAIhSguICWAAIhLg8QgYgoAngjIE1BpIAeAAIDDCIIB4gRII+C9IAAA1ItEhEQAVAjAoAPIiyAtg");
	this.shape_19.setTransform(182.6,52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_8},{t:this.shape_7},{t:this.shape_12},{t:this.shape_9},{t:this.shape_11},{t:this.shape_2},{t:this.shape_14},{t:this.shape_13}]},1).wait(4));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.3,1,1).p("AFjijQAFgCAGgBAIbBoQBjA9CeACQCjACBkgyAFWiCQACgHACgGAwdA6QgCgHgBgHQgBgIgBgI");
	this.shape_20.setTransform(-123.9,15.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFFFFF","#FFCC00"],[0,0.533,0.969,0.988,1,1],-89.3,-61.8,87.4,60).s().p("Ag8L5QiHgoiIgkQiRgmhohKQhmhIgah4IgBgDIAAgPQABiTgDiTQgFiWAGiIQAHiXBIh1QBBhqCBhIQBsg8CGgiQCGgjCPAPQCJAPB+A0QByAvB9BYQBwBPAMCIQANCOgOCRQgKBwACB1QgZAKANAXQgaBigxB1Qg0B5hqBnQhcBYiFArQhLAXhKAAQhGAAhGgVg");
	this.shape_21.setTransform(-158.3,-16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(5));

	// Layer 4
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AA7FJQg0gJgmgnQgfgfgMgnQgIgZAAgcQAAhFAvgyQgugNglgjQg3g3ABhOQgBhOA3g3QA4g4BNAAQAXAAAVAFQAyALAnAoQA3A3ABBOIgBASQgGBCgxAxIgDADQAmALAeAfQAzAyAABIQAAAcgIAZQgMAngfAfQgzAzhIAAQgQAAgPgDgAGEC1QgwAAgjgiQgigjAAgwQAAgdANgYQAIgPANgNQATgTAWgIQAUgIAWAAQAXAAATAIQAXAIASATQANANAIAPQANAYAAAdQAAAwgiAjQgiAigxAAIAAAAgAnGB8QgygyAAhGQAAhFAygyQAygyBGAAQBGAAAxAyQAyAyAABFQAABGgyAyQgxAyhGAAQhGAAgygyg");
	this.shape_22.setTransform(267.1,32.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.3,1,1).p("AkhkNIOhAAAnLmFIf3AAAqdQ4IJ2AAA4rw3MAtTAAAAvTsfISRAA");
	this.shape_23.setTransform(31,13);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.3,1,1).p("Ap8DEIBBAAAkih4ITrAAAvmjDIc+AAAlrDEIVSAAAqMA8IYnAA");
	this.shape_24.setTransform(351.1,40.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.3,1,1).p("A4/kNIOiAAAUnHZIhBAAAN8BRIc/AAAZBCdITrAAAX4HZIVSAAATWFSIYpAAEgjxgMfISSAAEgtJgQ3MAtSAAAA+7Q4IJ2AAA7pmFIf2AA");
	this.shape_25.setTransform(162,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:267.1,y:32.1}}]}).to({state:[{t:this.shape_22,p:{x:265.5,y:59.3}},{t:this.shape_25}]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.3,-96,731.4,235);


(lib.doogbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AAqjmQANgKAOgKQgCgCgBgCABFj6QAFAHAHAGACCjzQARAvgqgSQAAALgBAiABGjFQAUgfASgxQgVANgSAOAB+jzQgTAbgaAbAgGjKQAoAjAEAjQglA1gVAuQgQAigOAcQBBAaBCAeQAOAGgKAXQgUArgcARQg3gTgsgHQgRgDgBAUQgEA8gYAqQgeAHgTAEAB0iZQA0AHgMg4QgcAVgZAY");
	this.shape.setTransform(-81.2,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(1,1,1).p("ACbjyQAAADABACQABgBABgBAidDzQAAAAAAAA");
	this.shape_1.setTransform(-81.2,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAPodQAAABAAAAQAhA+BEA4QBDA2BRAYQAAAAAAAAQABABAAAAQAAAAAAAAAkIk6QAEADAEADQAMAKAJAMAC7CiQAGAqAAArQAAAGAAAGQgBAkgFAkQgRBmgFBt");
	this.shape_2.setTransform(-51.2,24.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AAikZQABgGAAgHQAAgBAAAAAArk7QgCAJgDAHQAAABgBAAQAAACAAACAAlklQgBAGgBAGIAAAAQgEAbABAeQAAAogIAkQgJAlgEAnQgEAmgEAkQgEAlgDAnQgEAngEAnQgBARgBASQgCAegHAZQgBAIgBAIQgEASgFAQQgDAGgCAGQgBABAAABQgBADgBAD");
	this.shape_3.setTransform(-28.3,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3,1,1).p("AHSoLQgSgXgQgXQgBAqgJAwQgCAOABAUQgDgQgFgQQgJgfgMgeQgTgygegeQgXgWglgUQAAAXgEASQgqgVgkgbQgQAKABAaQglgqgmgFQgOAogEAjQgMg9gtAYQghASgdAXQgMAJgLALQgHAGgCAMQgBgJgBgJQAAgpAWgiQANgVAWgLQAFgDAIgCAHSoLQALAOALANQAdAkAMAtQABg4gJg1QgIgqgVgdQgTgZgegQQAzAQA3AVQAZAKAQAUQgKg3g6gWQg0gTgxgRQg0gRg6gDQA4gQA8gJQg1ghhHgHQhBgHgmAUQgVgygvgmQgVgRgbgRQAKAzASAwQgVghg+gDQg6gEgZAhQAlAHAjAJQADAAADABQAJgCAIACQANACALALAGTlQQACgCACgCQgHgFgJgDAHSoLQAIA9gUAzQgOAnghAgQAfAWgWA1QgSAuggAkQgiAng7ANQg0AMg5gGQgKgBgJgCQAAACgBACAIRmfQABAEABAEAjDj9QgMAKgLALQgeAggkAgQghAdgsAhQgkAcggAjQgCACgCACQghAlgkApQgYAdgLAjQgPA0gQAtQgRAzgDA5QgCA3AEA9QABAIABAIAAYr/QgDABgEACQgqAQgYAfQgaAhgFAoQAjgYAqgSAAhpIQAEgDADgEAgxnSQgGgIgCgLQgJgnANgiQAEgKAFgJQABgBABgCQAIgMAKgGQAJgGALABQAYABANASAAwohQgEgZgLgOQgQATgOARAEDmaQAVgogCg6QgBgRgPgLQgRgMgYAQQgQALgJAQQgDAFgCAGQgHAUABAaQABBBA5gKQABgCABgCQAGgJAIgEgAiIkZQghAIgaAUQgKAEgLADAiIkZQgdASgeAKAgxnSQgEA7gTAyQgNAhgaAYAhwksQgKAKgMAHQgBABgBABAE3mVQgCgBgBgBQgfgOgSALAE3mVQAGgVAKgPQAEgFAEgFQAOgPAUgIQAogRgIAxQgIAxgoAlQAEANABARQALAEAAgVAE3mVQAgAQAKAhADzmJQgNAaAWAPQAlAZBFABAgxnSQAQAVAlgBQAOgBAOgGACJliQAAgBAAgCQAAgDAAgCACJliQAFAGAFAHQAbAqA0AXQAsAVAvASQgvAYgsgCQg1gCgSguQgOgngEg0gACRiAQgtgJghgcQgoghgcgrQgagngJguACHhZQgDgEgDgDQAEgDADgEQAAgBABAAQABgBAAgCQABAAAAgBAn/M1QAFAGAJAFQAFACAGACQA0ATAwAKQA5AMA9AAQA8AAA1gLQA2gLA0gTQAxgSAngZAgqJTQgsAkg6gUAiVKSQAVATgUAfAgULMQgeAsgigVAA9HzQAAAAAAAAQABgCAAgBAA9HzQAAABgBABAA6H7QgOAogbAbQgRASgXAFQApAggaAxQgOAZAWARQAMAJAHAIQAOASAFAcQABAEAAAEQAAABAAABQABAGAAAGAA4HuQACADADACApIG5QAEAtALAoQAPA0AFA4QAFA3AIA3QAGAtATAgQAFAKAHAIQAGAIAHAH");
	this.shape_4.setTransform(-38.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ah6DgQgFg9ADg3QACg5ASgzQAPgsAQg0QAKgjAYgdIBFhPQAoAjAFAjQglA1gWAuIgeA/QBCAZBCAeQAOAGgKAWQgVAsgcARQg3gTgsgIQgQgCgBATQgFA8gXAqQgeAIgUADIgBgQg");
	this.shape_5.setTransform(-84.8,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARArQAGgUALgPQgDALAYAJQAKAEAEgLQALgXgbgGIgLAHQAOgPATgJQAogQgIAvQgIAxgnAlQgLghgggQgAhsABQAAgaAHgUQABAKAVAJQAIAEAFgJQAOgbgdgIQgKAFgFAGQAJgRAPgKQAZgQARAMQAPAKAAARQADA6gWAnQgHAFgGAJIgDAEIgNABQgrAAgCg4g");
	this.shape_6.setTransform(-9.1,-45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("ADpCWIgVgbIgjgvQgBAqgIAxIgJACQgJgggMgdQgTgygfgeQgWgWglgUQAAAWgFASQgpgVgjgaQgRALACAYQgmgoglgFQgOAngEAjQgMg9guAYQggARgeAXIgXAUIgLAAQAAgoAWgiQANgVAWgKQgrARgjAYQAGgnAagiQAYgfAqgQIAIgCIAGgBIADAAIABAAIAAAAIADAAIABAAIACAAIABAAQAMACALALQgLgLgMgCIgBAAIgCAAIgBAAIgDAAIAAAAIgBAAIgDAAIgGABIgHgCQgjgIgmgHQAagiA7AEQA+AEAVAgQgSgvgKgzQAbARAVARQAuAlAWAyQAmgUBAAHQBGAIA2AhQg8AIg4ARQA5ACA0ASQAyAQAzATQA7AWAKA2QgQgUgagJQg2gVgzgQQAdAQAUAYQAVAdAHAqQAKA1gBA4QgNgtgdgjgAkBgnIANgFIgNAFg");
	this.shape_7.setTransform(-13,-64.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDCC9A").s().p("AgpEmIABAAIAAAAgAi8DKQhEg4ghg+IAAAAQAbgYAMghQAUgyAEg6QgHgIgCgMQgIgnANgiQADgJAGgJIACgDQAIgNAJgFIgBgCQAdgXAhgRQAtgZAMA+QAFgjANgoQAmAFAlApQgCgZAQgLQAkAbAqAVQAEgSABgXQAlAVAWAWQAeAeAUAyQAMAeAJAfIAIAfQgCgTADgOQAIgxABgqIAiAvQAIA8gTAzQgPAmggAgQAfAWgWA1QgTAuggAlQghAng7ANQg0AMg4gHIgUgDQgtgJghgbQgogigdgrQgZgmgKgvQAKAvAZAmQAdArAoAiQAhAbAtAJIAAAFQgCAJgEAHIAAABIgCADIAAAAQhRgYhDg2gAgoAaIABAEQADAzAPAnQARAuA0ACQAsACAvgXQgugTgsgUQgzgYgcgqQgEgHgFgFIgBgEIAAgFIAAAFgAC4A6QAHAAAAgRQAAARgHAAIgBAAIAAAAIgDgBIAAAAIAAAAIADABIAAAAIABAAgAC0A5QgBgQgEgOQAEAOABAQQhFAAgkgZQgPgKAAgOQAAgIAFgIIADgEQAFgJAIgFIABAAIAAAAQAIgEAJAAIAAAAIABAAQAMAAAQAHIABAAIABABIADABIgDgBIgBgBIgBAAQgQgHgMAAIgBAAIAAAAQgJAAgIAEIAAAAIgBAAQAVgogCg6QAAgRgPgKQgRgMgZAQQgQAKgIAQIgFALQgHAUAAAbQABA/A5gIQgFAIAAAIQAAAOAPAKQAkAZBFAAIAAAAgADiAvIAEgEQgHgEgKgEQAKAEAHAEIgEAEgAC/haQgUAJgOAPIgHAJQgLAQgGAUQAgAQAKAgQAogkAIgxQAGgkgVAAQgHAAgKAEgAixg+IAFAAQANAAAOgHQgOAHgNAAIgFAAIAAAAIgBAAQgiAAgOgTIAAAAIAAAAQAOATAiAAIABAAIAAAAgAiAigQgEgZgLgOQgRATgNARQANgRARgTQALAOAEAZgAiPjHIAHgIIgHAIIgBgBQgOgRgXgBIgBAAIAAAAIgBAAIgBAAIAAAAIgBAAQgIAAgGADIgCABIgBABIABgBIACgBQAGgDAIAAIABAAIAAAAIABAAIABAAIAAAAIABAAQAXABAOARIABABIAAAAgAggD/IAAAAgAC0A5IAAAAg");
	this.shape_8.setTransform(-20.7,-38.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AkVKtQgwgKgzgTIgLgEQgKgFgFgGQgSgggHgtQgHg3gFg3QgGg4gOg0QgLgogFgtIAAgBQAUgDAegIQAXgqAFg8QABgTAQACQAtAIA3ATQAcgRAVgsQAKgWgOgGQhCgehDgaIAfg+QAWguAlg1QgFgjgogjIADgEQAggjAlgcQArghAhgdQAlggAeggQALgLALgJQAegLAegSIACgCQAMgHAKgKQAgA/BEA3QBDA3BRAYIgHAHIAGAHIABAAQgDAbAAAeQAAAngIAkQgJAlgEAnIgIBKIgIBMIgIBOIgCAjQgCAegHAZIgCAQQgEASgFAQIAAgBQAAgqgHgqQAHAqAAAqIAAABIgFAMIAEABQAAAjgGAkQgRBmgEBuQgFgcgPgSQgGgIgNgJQgOgLAAgOQAAgIAFgJQALgUAAgQQAAgZgZgUQAXgFARgSQAcgbAOgoIACgGIABgCIAAAAIAAgBIABgCIgHgCIAGAFIgBACIgCAGQgOAogcAbQgRASgXAFQAZAUAAAZQAAAQgLAUQgFAJAAAIQAAAOAOALQANAJAGAIQAPASAFAcIABAIIAAACQgnAZgzASQg0ATg0ALQg2ALg8AAQg8AAg6gMgAAvI2QAVAAATgbIABgBIAAAAIABgCIgBACIAAAAIgBABQgTAbgVAAIAAAAIAAAAQgKAAgKgGIgBAAIAAAAIAAgBIAAAAIgBAAIABAAIAAAAIAAABIAAAAIABAAQAKAGAKAAIAAAAIAAAAgAgmIQQAKgPAAgMQgBgNgLgKQALAKABANQAAAMgKAPgAAFG2QAgAAAbgVIAAAAIACgBIABgBIgBABIgCABIAAAAQgbAVggAAIAAAAIgBAAQgSAAgUgHQAUAHASAAIABAAIAAAAgAi9ipQAngBgKgyQgdAWgZAYQAZgYAdgWQAKAygnABIAAAAIAAAAIgLgBIALABIAAAAIAAAAgAjVi6IABgtIACABIABAAIAAAAQAKAEAHAAIAAAAIAAAAQARAAgLggIAAgBIgBgBIABABIAAABQALAggRAAIAAAAIAAAAQgHAAgKgEIAAAAIgBAAIgCgBIgBAtgAjrjOQAagbATgbQgTAbgaAbgAj3jWQAUgfASgxQgUANgTAOQAGAHAGAGQgGgGgGgHQATgOAUgNQgSAxgUAfgAigjcIACgBIgCABIgCgFIACAFIAAAAgAkSj3QAMAKAJALQgJgLgMgKIgIgGIAIAGgAkSj3IAagUIgCgEIACAEIgaAUgAFPmLQg1gCgRguQgOgngEg0QAFAGAEAHQAcAqA0AXQAsAVAvASQgsAWgpAAIgHAAgAHKpZQgYgJADgLIAIgJIALgIQAbAGgLAZQgDAHgGAAIgFgBgAFDqPQgVgJgBgKIAFgLQAFgFAKgGQAdAIgOAbQgEAHgFAAIgEgBg");
	this.shape_9.setTransform(-49.4,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.doogbody, new cjs.Rectangle(-98.4,-88.7,120,177.4), null);


(lib.doog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AgpjmQgNgKgOgKQgFAHgHAGAhFjFQgUgegSgxQAVAMASAOQACgCABgCAiBjzQgRAvAqgSQAAAMABAiAh9jzQATAbAaAbACeEWQgBgBgCAAQgTgEgbgGQgYgqgEg8QgBgUgRADQgsAHg3ATQgcgRgUgrQgKgWAOgHQBCgeBBgZQgOgdgQghQgVgvglg0QAEgjAmgiQABgBABgBAhziZQg0AHAMg4QAcAVAZAY");
	this.shape.setTransform(82.5,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AARmOQAigMAhgPQBKggAugtQAPgOAPgPQABgBACgDAgEmIQgdAJgeAGAh2jSQgZBGglBBQgSAdgMAfQgCAFgCAGQgDAKgEAMAAXD7QAAAAgBAAQgHgBgGgDQgJgEgHgIQg0g2hGgzQg3gpg0g3QAAgBAAgBAAXD7QAAABAAABQAAABAAACQgBA6AFA3QAIBXAEBLQAAABAAAAQAAACAAACAAXD7QACgRAIgL");
	this.shape_1.setTransform(31.6,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.3,1,1).p("AGMquQAqASAjAYQgFgogaghQgYgfgrgQQgEgCgEgBQAEgBADAAQAkgJAlgHQgZghg7AEQg+ADgVAhQASgwAKgzQgbARgVARQgvAmgVAyQgmgUhBAHQhHAHg0AhQA7AJA4AQQg6ADgzARQgxARg0ATQg6AWgKA3QAQgUAZgKQA3gVAzgQQgeAQgTAZQgVAdgIAqQgJA1ABA4QAMgtAdgkQALgNALgOQgIA9AUAzQAOAnAhAgQggAWAXA1QASAuAfAkQAiAnA7ANQA0AMA5gGQAJgBAKgCQAtgJAhgcQAoghAdgrQAagnAJguAFmpIQAOgSAZgBQALgBAJAGQAKAGAIAMQABACABABQAFAJADAKQANAigIAnQgCALgGAIQgQAVgmgBQgOgBgOgGAGMquQAWALANAVQAWAigBApQAAAJgBAJQgCgMgHgGQgMgLgMgJQgdgXghgSQgtgYgMA9QgEgjgOgoQgmAFglAqQABgagQgKQgkAbgqAVQgEgSAAgXQglAUgXAWQgeAegTAyQgMAegIAfQgFAQgDAQQABgUgCgOQgJgwgBgqQgQAXgSAXAFvr/QgIgCgIACQgNACgLALACVmJQA5AKABhBQAAgagHgUQgCgGgCgFQgJgQgQgLQgYgQgRAMQgPALgBARQgCA6AVAoQAIAEAGAJQABACABACQANAagWAPQglAZhFABAGMquQgHgDgHgCAFmpIQARATAOARAFYohQAEgZAKgOQgDgDgDgEAD/liQAAgBAAgCQAAgDAAgCAD/liQgEA0gOAnQgSAug1ACQgsACgvgYQAugSAtgVQA0gXAbgqQAEgHAGgGgABRmVQACgBABgBQAfgOASALAAnlkQgnglgIgxQgIgxAnARQAUAIAOAPQAEAFADAFQALAPAGAVQggAQgKAhgAAXlXQAAAVALgEQABgRAEgNAEGhgQAAAAABgBQANgOAQgLQAIgFAIgEQALgDALgEAD3iAQABAGACAGQAEANAIAHQgEAEgDAFQgdAngRAsQgIAVgFAYQgBAEgBAFQgEAXgBAZQgCAiAEAfQADgEADgDAIRkZQALACAKAEQAVAJARANQgUgHgVgLQgJgEgJgGgAG6nSQAEA7ATAyQARAuAtAcQABABABABAJMj9QAMAKALALQAeAgAkAgQAhAdAsAhQAkAcAgAjQADADACADAJMj9QAKAEALADAPRG4QgEAugLAoQgPA0gFA4QgFA3gIA3QgGAtgTAgQgFAKgHAIQgGAIgHAHAOIM1QgFAGgKAFQgFACgFACQg0ATgwAKQg5AMg9AAQg8AAg1gLQg2gLg0gTQgygSgogZQAAgBABgBQADghARgVQAHgIAMgJQAXgRgOgZQgbgxApggQgXgFgRgSQgYgYgOgiQgBgBAAgBQAAgBgBgCQgCgGgCgGQACgCADgDQAFgFAFgGQAZgcAWghQAbgnAOg6QADgQgEgMQAegcAfglQAKgNAHgOQAAAAAAgBQAuAOA8gCQAWgBARgEAITBfQAAALgBAUQgBAFAAAGQgDAmgPAdADmBwQgKAzABAwABMElQABgDACgDQAGgSAKgPQAEgFAEgEQAMgRASgNQAZgTAWgVQAFgGAGgGQAAADABAEAA4F+QAAgCAAgBQAGgsAOgpABGGEQgHgDgHgDQgBACAAABQgBALAAALAoWHsQAugJA2gFQAzgGA2gLQAzgJAlgaQAngbAsgLQA1gNA2gKQA3gLAsAYQADACAFACAEuDvQgFAOACAJQABAEADADAEICvQghAbAOAyAEVDWQgIARAEAYAFLHzQAAAAAAAAQgBgCAAgBAnTJrQAqASA8ADQA4ADA2AGQA8AHA2gLQA3gKA6ADQA5ADA3gIQALgCALgCQAGgCAGgBQAhgHAdgKQADgBADgBQAsgQAogiQAcgYAZgZQAEgEAEgFAFgMZQAAACAAACQAAAEAAAEAGdLMQAeAsAigVAIeKSQgVATAUAfAGzJTQAsAkA6gUAgOlUQACACACACAiImfQgBAEgBAEAsJHQQguAIgdAhQgbAgg3AFQhAAGAig2QAagoAlgVQAogWAzgQQAygQA1gFQA3gGApAPQAGACAFADQAiAUAOApQAHAVALAWQAEAIAFAJAr4G+QgKAIgHAKQAEgBAFgBAoeHtQAEgBAEAAApEJ6QgCAEgCADIAAAAQgogQgMgsAnTJrQgDgBgDgBAnTJrQgIAHgHAFQgoAfg4gTQgDgBgDgBQgSAlgyAFQhJAHAMg8QABgIACgHQAJgmASggArvI4QgngDgDgfQgEgrAUgbArJJmQgNgBgKgCQgXgEAEgYQABgIADgHQAJgjAagaAmLJTQA7gBA5gLAm6IOQA9ABA3gIQA6gJA5gJQAhgGAUADAmvIvQA1gNA5gDQA6gDA6AAAABlcQgJADgGAF");
	this.shape_2.setTransform(0.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AB2DvIgugKQgXgqgFg8QgBgTgQACQgsAIg3ATQgcgRgVgsQgKgWAOgGQBCgeBCgZIgeg/QgWguglg1QAFgiAmgjIACgBIBFBPQAYAdAKAjQAQA0APAsQASAzACA5QADA3gFA9IgBAQIgEgBg");
	this.shape_3.setTransform(86.2,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhqAGQgIgvAoAQQATAJAOAPIgLgHQgbAGALAXQAEALAKgEQAYgJgDgLQALAPAGAUQggAQgLAhQgnglgIgxgAAzA4IgDgEQgGgJgHgFQgWgnADg6QAAgRAPgKQARgMAZAQQAPAKAJARQgFgGgKgFQgdAIAOAbQAFAJAIgEQAVgJABgKQAHAUAAAaQgCA4grAAIgNgBg");
	this.shape_4.setTransform(10.1,-45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AkKB5QAIgqAVgdQAUgYAdgQQgzAQg2AVQgaAJgQAUQALg2A6gWQAzgTAxgQQA1gSA5gCQg4gRg8gIQA1ghBHgIQBAgHAmAUQAWgyAuglQAVgRAbgRQgKAzgSAvQAVggA+gEQA8gEAZAiQgmAHgjAIIgHACIAHACQArAQAYAfQAbAiAFAnQgjgYgrgRQAWAKANAVQAWAiAAAoIgLAAIgXgUQgegXgggRQgugYgLA9QgFgjgNgnQgnAFglAoQACgYgQgLQglAagoAVQgEgSgBgWQglAUgWAWQgeAegUAyQgMAdgJAgIgJgCQgIgxgBgqIgjAvIgVAbQgdAjgNAtQgBg4AJg1gAECgnIgNgFIANAFgADVh5QgMACgLALQALgLAMgCIABAAIACAAIABAAIADAAIAAAAIABAAIADAAIAGABIgGgBIgDAAIgBAAIAAAAIgDAAIgBAAIgCAAIgBAAg");
	this.shape_5.setTransform(14.1,-64.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDCC9A").s().p("AnzJzIAEgPQAJglASggQgSAggJAlIgDAAIgXgDQgXgFAEgYIADgPQAKgiAagbQgaAbgKAiQgmgCgDggQgFgqAVgcQguAJgeAhQgbAfg3AFQhAAGAjg2QAZgnAlgVQAogXAzgQQAygQA1gFQA4gFApAPIALAEQAiAUAOAqQAHAVAKAVQAvgIA1gGQAzgGA2gKQAzgKAmgZQAmgbAsgLQA1gOA2gKQA4gKArAXIAIAEIABgCQAGgtAOgoQA0A3A3ApQBGAzA0A2QAIAIAJAEQgYAagdAYQgnAigtAQIgGACQgcAKgiAHIgLACIgXAEQg3AJg6gEQg6gDg3ALQg2AKg6gHQg3gGg4gDQg7gCgqgSIgGgDIAGADIgQAMQgoAfg4gTIgFgCIADgIIgDAIIAAAAQgogQgMgsQAMAsAoAQQgSAkgzAFIgOABQg5AAAKg2gAi1JQQA8AAA4gLQg4ALg8AAgAhqIcQg5ADg2ANQA2gNA5gDQA6gDA5AAQg5AAg6ADgAjQIMQAvAAArgGIAGgBIBzgTIACAAIADAAIADgBIAAAAQAQgCAMAAIABAAIAAAAIAPABIABAAIgBAAIgPgBIAAAAIgBAAQgMAAgQACIAAAAIgDABIgDAAIgCAAIhzATIgGABQgrAGgvAAIAAAAIAAAAIgUgBIAUABIAAAAIAAAAgAk3H7IgJgSIgHABIAHgBIAJASgAoyHNIAIgBIgIABQAHgKAKgIQgKAIgHAKIAAAAgAEOF/IgCAWIACgWIAAgEIAPAGIgPgGIAAAEgAj8JpIAAAAgAImH9IABAAIAAADIgBgDgAImH9IgEgMIAFgGIAKgKQgIALgCARIgBAAgAImH9IAAAAgAoyHNIAAAAgAE2D8IAHgKIgEALgAHQh2QAegGAdgJIgRAJQgPAKgNAPIgBAAQgJgGgEgNgAHQh2IgCgNQAtgIAhgcQAogiAdgrQAZgmAKgvQgKAvgZAmQgdArgoAiQghAcgtAIIgUADQg5AHg0gMQg7gNghgnQggglgTguQgWg1AfgVIAEADIgEgDQAHgFAKgEQgKAEgHAFQggghgPgnQgTgzAIg8IAigvQABAqAIAxQADAOgCATIAIgfQAJgfAMgeQAUgyAegeQAWgWAlgVQABAXAEASQAqgVAkgbQAQALgCAZQAmgpAmgFQANAoAFAjQAMg+AtAZQAhARAdAXIgBACIgDgCQgGgDgIAAIgBAAIAAAAIgBAAIgBAAIAAAAIgBAAQgYABgOASQAOgSAYgBIABAAIAAAAIABAAIABAAIAAAAIABAAQAIAAAGADIADACQAJAGAIAMIACADQAGAJADAJQANAigIAnQgDAMgGAIQAEA6AUAzQARAtAsAdIADABIASALIgeAdQgvAthJAgQghAQgiALIgWAHQgdAJgeAGIAAAAgAHMlYQgcAqg0AYQgsAUguATQAuAXAtgCQA1gCARguQAPgmADg0IABgDIAAgGIAAAGIgBADQgFAFgEAHgAD2lIIACAAIABgBQAAgQAFgOQAKghAggQIADgBIABAAIABgBQAQgHAMAAIABAAIAAAAQAJAAAIAEIAAAAIABAAQAIAFAFAJIADAEQA4AJAChAQAAgbgHgUIgFgKQgJgRgPgKQgZgQgRAMQgPAKAAARQgDA6AWAoIgBAAIAAAAQgIgEgJAAIAAAAIgBAAQgMAAgQAHIgBABIgBAAIgDABQgGgUgLgPIgHgKQgOgPgUgJQgogQAIAwQAIAxAoAlQgFAOAAAQIgBABIgCAAIAAAAIgBAAQgHAAAAgRQAAARAHAAIABAAIAAAAgAFiliQgkAZhFAAQBFAAAkgZQAPgKAAgOQAAgIgFgJQAFAJAAAIQAAAOgPAKgAJgnBQAiAAAOgTIAAAAIAAAAQgOATgiAAIgBAAIAAAAIgFAAQgNAAgOgHQAOAHANAAIAFAAIAAAAIABAAgAIuojQAEgZALgOIgHgIIAHAIQgLAOgEAZgAJbomQgNgRgRgTQARATANARgAILiFIAAAAg");
	this.shape_6.setTransform(-21.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAuKuQg0gLg0gTQgzgSgngZIAAgCQAEghARgVQAGgIANgJQAOgLAAgOQAAgIgFgJQgLgUAAgQQAAgZAZgUQgXgFgRgSQgYgYgPgiQAPAiAYAYQARASAXAFQgZAUAAAZQAAAQALAUQAFAJAAAIQAAAOgOALQgNAJgGAIQgRAVgEAhIgBABQgDhLgIhXQgFg3ABg7IAAAAIAAgCIAAgCQABgRAIgMQAagcAWghQAagnAOg6QACgIAAgHQAAgHgCgGQAdgcAfglQAJgNAIgOIAAgBIAAABQgIAOgJANQgfAlgdAcQACAGAAAHQAAAHgCAIQgOA6gaAnQgWAhgaAcIgJALIgHACIABACIAAABIAAAAIgIAJQgJgEgIgIQg0g2hGg0Qg3gog1g4IABgBIACgGQAHgSAKgPIADABIgHAXIAHgXIAEgKQAMgfASgeQAlhAAZhFQgEAXgCAZIAAAWQAAAWACAVQgCgVAAgWIAAgWQACgZAEgXIACgJQAFgYAIgWQAQgsAdgnIAIgJIAAgBQANgOAQgLIARgJIAVgHQAjgLAhgPQBJghAugtIAegcQAUAKAVAIQALAJALALQAeAgAlAgQAhAdArAhQAlAcAgAjIAFAGQgnAjgEAiQAlA0AWAvIAeA+QhCAZhCAeQgOAHAKAWQAUArAcARQA4gTAsgHQARgDABAUQAEA8AYAqIAuAKQgFAugLAoQgOA0gGA4QgFA3gHA3QgHAtgSAgQgFAGgKAFIgLAEQgzATgwAKQg6AMg8AAQg8AAg2gLgAguI2QAKAAAKgGIABAAIAAAAIAAgBIAAAAIABAAIgBAAIAAAAIAAABIAAAAIgBAAQgKAGgKAAIAAAAIAAAAQgVAAgTgbIgBgBIAAAAIgBgCIABACIAAAAIABABQATAbAVAAIAAAAIAAAAgAAnIQQgKgPAAgMQABgNALgKQgLAKgBANQAAAMAKAPgAgDG2QASAAAUgHQgUAHgSAAIgBAAIAAAAQggAAgbgVIAAAAIgCgBIgBgBIABABIACABIAAAAQAbAVAgAAIAAAAIABAAgAjJBSQABAEACADQgCgDgBgEIgBgGQAAgHAEgKQgEAKAAAHIABAGgAjjBLIgCgPQAAgOAGgMQgGAMAAAOIACAPgAj/BIQgFgPAAgOQAAgdAXgSQgXASAAAdQAAAOAFAPgAlBgFQgVAVgaATQgRANgNARQANgRARgNQAagTAVgVIALgLIABAHIgBgHIgLALgABlAkIAHAAIAAAAIAHAAQAWgBARgEQgRAEgWABIgHAAIAAAAIgHAAIAAAAIAAAAQgwAAgngKIgEgCQAPgcADgmIAAgLIACgfIgCAfIAAALQgDAmgPAcIAEACQAnAKAwAAIAAAAIAAAAgAkYAfIAAgEQAAgtAKgxQgKAxAAAtIAAAEgAk2gQIAHgHIgHAHgADCipIAIAAIADgBIgDABIgIAAIAAAAIAAAAQgnAAAJgwIABgCQAcAWAZAXQgZgXgcgWIgBACQgJAwAnAAIAAAAIAAAAgADZi5IgBguIAAAAIgCABIAAAAQgJAEgFAAIgBAAIgBAAIgBAAIAAAAQgRAAAKgeIAAgBIAAgBIABgCIgBACIAAABIAAABQgKAeARAAIAAAAIABAAIABAAIABAAQAFAAAJgEIAAAAIACgBIAAAAIABAugADwjOQgagagTgcQATAcAaAagAD7jWQgUgegSgxQAUANATANQgFAIgHAFQAHgFAFgIIAbAUIgbgUIADgEIgDAEQgTgNgUgNQASAxAUAegAAKAYIAAAAgAD8kLIAAAAgAD8kLIAAAAgAmqmhQAvgSAsgVQA0gXAcgqQAEgHAFgGQgEA0gOAnQgRAug1ACIgHAAQgpAAgsgWgAnXpfQgLgZAbgGIALAIIAIAJQADALgYAJIgFABQgGAAgDgHgAlPqVQgOgbAdgIQAKAGAFAFIAFALQgBAKgVAJIgEABQgFAAgEgHg");
	this.shape_7.setTransform(50.4,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.doog, new cjs.Rectangle(-98.4,-88.7,197.8,177.4), null);


(lib.arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjbhGQA7g3BBhCQA0g1Aqg/QAHgLAIgMABgiBQAEACAIACQAEABAFABQADAAADABQAAAAAAABQAeBNAhBIQAHAPAHARQACAGACAGQADAHACAIAgXFLQACgFADgEQAlg/BCg6QBAg4BHg0");
	this.shape.setTransform(-52.9,-9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("AmdhsQAEgfgCgiQgBgZgEgXQgBgEgBgFQgFgYgIgWQgRgsgdgnQgDgFgEgEQAAAAgBgBQgNgOgQgKQgKgHgLgFQgIgDgJgDArxiwQAAAEAAAFQAAAJABANQABAFAAAGQADAmAPAdQAAABAAAAQAHAPAKAMQAfAlAeAbQgEAMADAQQAOA6AbAnQAaAnAfAhAoMggQAFAPgCAIQgBAEgDADAnzg5QAIARgEAYAnmhgQAhAbgOAyAmehlQABgEAAgDQgDgEgDgDAnEifQAKAzgBAwAkWBuQAAgBAAgCQgHgwgQgsQgEgLgGgKQgDgFgDgGQgEgFgEgEQgEgGgFgFQgJgKgMgJQgZgTgWgVQgFgGgGgGADcD+Qg9ABg3gIQg6gJg4gJQghgGgUADAE4DcQgugJg2gFQgzgGg2gLQgzgJglgaQgmgbgsgLQg1gNg2gKQg4gLgsAYQgDACgEABQAAABgBAAQAAAAAAAAQgHADgHADAkWBuQABACAAABQABALAAALAD1FbQgqASg8ADQg4ADg2AGQg7AHg2gLQg3gKg6ADQg6ADg3gIQgLgCgLgCQgGgBgGgCQghgHgdgKQgDgBgDgBQgsgQgogiQgggcgdgdAIrDAQAuAIAdAhQAbAgA3AFQBAAGgig2QgagoglgVQgogWgzgQQgygQg1gFQg3gGgpAPQgGACgFADQgiAUgOApQgHAVgLAWQAEAAAEABAIaCuQAKAIAHAKQgEgBgFgBAHrFWQANgBAKgCQAXgEgEgYQgBgIgDgHQAngDADgfQAEgrgUgbAHNERQASAhAJAlQACAHABAIQAMA8hJgHQgygFgSglQgDABgDABQg4ATgogfQgHgFgIgHQADgBADgBAIREoQgJgjgagaAE4DcQgEAIgFAJACtFDQg7gBg5gLAFmFqQACAEACADIAAAAQAogPAMgtADREfQg1gNg5gDQg6gDg5AA");
	this.shape_1.setTransform(0.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZE5QgfghgagnQgbgngOg6QgDgQADgMQgdgcgfglQgKgNgHgOIgBgBQgOgcgDgmIgBgLIgBgWQA7g3BAhCQA0g2Arg/QAKAFAKAGQAQALANAOIAAABIAIAJQAdAnARAsQAIAWAFAYIABAJIAGABIABABQAeBNAhBIIANAgQgJgKgMgJQgZgTgWgVIgLgLQADgVAAgWIgBgWQgBgZgFgXQAFAXABAZIABAWQAAAWgDAVIALALQAWAVAZATQAMAJAJAKIAFAMIAFAPIgFgPIAEgCIAHAKIAHALIgDACQhHA0g/A4QhDA7gkA+gAALBRQgBAEgDADQADgDABgEIAAgGQAAgHgDgKQADAKAAAHIAAAGgAAlBKIABgPQAAgOgFgMQAFAMAAAOIgBAPgABBBHQAEgPAAgOQAAgdgXgSQAXASAAAdQAAAOgEAPgABZAeIAAgEQAAgtgJgxQAJAxAAAtIAAAEgAB2gKIABgHIgGgHIAGAHIgBAHgABqiDIAJABIgJgBIgMgEIAMAEg");
	this.shape_2.setTransform(-52.8,-9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDCC9A").s().p("AFKDgQgzgFgRgkQAogQAMgsQgMAsgoAQIAAgBIgEgHIAEAHIgGADQg4ATgogfIgPgMIAGgDIgGADQgqARg8ADQg3ADg2AGQg8AHg2gKQg3gLg6ADQg6AEg3gJIgWgEIgMgCQghgIgdgJIgGgCQgsgQgogiQgggdgdgdIAAAAIAAgBIABgDIAAAAQAlg9BDg7QA/g4BHg0IADgBQAGAKAEALQAQAsAHAwIAAADIABAAIAHgEQAsgXA4AKQA2AKA1AOQAsALAnAbQAlAZAyAJQA2AKAzAGQA2AGAuAIQALgWAHgTQAOgqAigUIALgFQAogPA4AGQA1AFAyAQQAzAQAoAXQAlAVAaAmQAiA2hAgGQg3gFgbgfQgdgigugIQAUAcgEAqQgDAggnACIAEAPQAEAYgXAFIgXADIgDAAQgJglgSggQASAgAJAlIADAPQALA2g5AAIgPgBgABJCIQg7AAg4gLQA4ALA7AAgAGtBtQgJgjgagaQAaAaAJAjgAAABUQA4ADA1ANQg1gNg4gDQg6gDg6AAQA6AAA6ADgABlBDIAJAAIAEAAIADAAIADAAIgDAAIgDAAIgEAAIgJAAIAAAAIAAAAQgwAAgsgGIgBAAIgBAAIgDAAIhygTIgBAAQgVgDgPgBIAAAAIgBAAIgOABIgBABIABgBIAOgBIABAAIAAAAQAPABAVADIABAAIByATIADAAIABAAIABAAQAsAGAwAAIAAAAIAAAAgADLAzIAJgSIAIABIgIgBIgJASgAHHAFQgHgJgKgIQAKAIAHAJIgJgBIAJABgAl5hIIABAWIgBgWIgBgEIAAABIgOAFIAOgFIAAgBIABAEgAmyjgIAJALIgEABIgFgMg");
	this.shape_3.setTransform(10.5,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arm, new cjs.Rectangle(-75.9,-43.8,152.8,86), null);


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


(lib.arrow_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* stop();
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1AJJIAAyRMAqBAAAIAASRg");
	var mask_graphics_14 = new cjs.Graphics().p("A1AJJIAAyRMAqBAAAIAASRg");
	var mask_graphics_29 = new cjs.Graphics().p("A1AJJIAAyRMAqBAAAIAASRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.5,y:-69.5}).wait(14).to({graphics:mask_graphics_14,x:-16.5,y:-69.5}).wait(15).to({graphics:mask_graphics_29,x:-16.5,y:-69.5}).wait(1));

	// Layer 8
	this.instance = new lib.Tweena10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-19.8,371.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-37.9},14).wait(16));

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
		var bgm = createjs.Sound.play('bgmDia',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
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
		
		 window.open ("diag_quiz.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("diag_Scene3.html","_self");
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


(lib.Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		playSound("Flying");
	}
	this.frame_36 = function() {
		playSound("Flying");
	}
	this.frame_46 = function() {
		playSound("high_blip");
	}
	this.frame_112 = function() {
		playSound("ZoomingSound");
	}
	this.frame_129 = function() {
		playSound("blips_3times");
	}
	this.frame_145 = function() {
		playSound("right_answer");
	}
	this.frame_150 = function() {
		playSound("right_answer");
	}
	this.frame_154 = function() {
		playSound("right_answer");
	}
	this.frame_175 = function() {
		playSound("high_blip");
	}
	this.frame_239 = function() {
		playSound("blips_2times");
	}
	this.frame_254 = function() {
		playSound("blips_2times");
	}
	this.frame_269 = function() {
		playSound("blips_2times");
	}
	this.frame_330 = function() {
		playSound("Flying");
	}
	this.frame_349 = function() {
		playSound("blips_3times");
	}
	this.frame_364 = function() {
		playSound("high_blip");
	}
	this.frame_387 = function() {
		playSound("right_answer");
	}
	this.frame_393 = function() {
		playSound("right_answer");
	}
	this.frame_399 = function() {
		playSound("right_answer");
	}
	this.frame_421 = function() {
		playSound("right_answer");
	}
	this.frame_426 = function() {
		playSound("right_answer");
	}
	this.frame_429 = function() {
		playSound("right_answer");
	}
	this.frame_440 = function() {
		playSound("high_blip");
	}
	this.frame_535 = function() {
		playSound("blips_2times");
	}
	this.frame_550 = function() {
		playSound("blips_2times");
	}
	this.frame_565 = function() {
		playSound("blips_2times");
	}
	this.frame_613 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(14).call(this.frame_36).wait(10).call(this.frame_46).wait(66).call(this.frame_112).wait(17).call(this.frame_129).wait(16).call(this.frame_145).wait(5).call(this.frame_150).wait(4).call(this.frame_154).wait(21).call(this.frame_175).wait(64).call(this.frame_239).wait(15).call(this.frame_254).wait(15).call(this.frame_269).wait(61).call(this.frame_330).wait(19).call(this.frame_349).wait(15).call(this.frame_364).wait(23).call(this.frame_387).wait(6).call(this.frame_393).wait(6).call(this.frame_399).wait(22).call(this.frame_421).wait(5).call(this.frame_426).wait(3).call(this.frame_429).wait(11).call(this.frame_440).wait(95).call(this.frame_535).wait(15).call(this.frame_550).wait(15).call(this.frame_565).wait(48).call(this.frame_613).wait(5));

	// Layer 17
	this.instance = new lib.arm();
	this.instance.parent = this;
	this.instance.setTransform(-132.7,94,0.565,0.565,0,0,0,-61.5,-23.9);
	this.instance._off = true;

	this.instance_1 = new lib.doogbody();
	this.instance_1.parent = this;
	this.instance_1.setTransform(165.3,92.5,0.572,0.572,0,0,180,0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},33).to({state:[{t:this.instance}]},12).to({state:[]},283).to({state:[{t:this.instance_1},{t:this.instance}]},12).to({state:[]},274).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,rotation:-61.4,x:-132.6,y:94.1},12).to({_off:true},283).wait(12).to({_off:false,rotation:0,skewX:61.4,skewY:-118.6,x:187.9,y:95},0).to({_off:true},274).wait(4));

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHBAQgEgFAAgEQAAgFADgCQAEgDAEAAQAEAAAEAFQAEAFAAAEQAAAEgDADQgEADgEAAQgEAAgEgFgAgFAkQgDgDAAgEIgBgKIAAgJIAAgiIABgiQAAgFADgCQADgDADAAQAFAAADADQADACAAAFIAABXQAAAEgDADQgDADgFAAQgDAAgDgDg");
	this.shape.setTransform(193.4,38.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgqA1QAAgFADgDQADgCAFAAIAKABIANABQALABAGgIQAGgHABgRQgEAFgGACQgFACgFAAQgRAAgKgKQgLgMAAgPQAAgWAOgOQAOgPAYAAQAIAAAFACQAGACADAEQALABAAALIgCAPQgDAUgBAVQgBAbgIAMQgLAQgaAAQghAAAAgNgAgMglQgHAIAAAOQAAAKAEAEQAEAFAHAAQAGAAAHgHQAGgIABgHIAEgZIgGgCIgFgBQgNAAgIAJg");
	this.shape_1.setTransform(186.9,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAmIgCgRIgCgRIABgHIAAgHIAAgDIABgEQAAgHgEAAQgHAAgGAJQgGAKgFANIgBAHIAAAIIgBAHIAAAHQAAAFgDADQgEADgEAAQgFAAgEgDQgDgDAAgFIAAgHIgBgHIACgXIABgVIgBgIIAAgIQAAgEADgDQAEgDAEAAQAMAAAAANIAAABQANgNAMAAQAPAAAHANQADAJABASIAAAGIAAAEIABARQACAKAAAGQAAAFgDADQgEADgFAAQgKAAgBgKg");
	this.shape_2.setTransform(178.2,40.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKA8QgDgDAAgEIAAgPIAAgQIAAgTIABgRQAAgFADgDQAEgDAEAAQAFAAADADQADADAAAFIAAARIgCATIABAQIAAAPQAAAEgDADQgEAEgEAAQgEAAgEgEgAgHgqQgDgDgBgFQABgFADgEQAEgEAFABQAEgBAFAEQADAEAAAFQAAAFgDADQgFAEgEAAQgFAAgEgEg");
	this.shape_3.setTransform(171.5,38.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAwQgEgDAAgFIgCgcIgCgbIgBgIQgJAFgKANIgBACIgBAZIAAAHIAAAGQAAAEgEADQgDACgFAAQgHAAgCgGQgCgEAAgJIAAgeIAAgMIgBgNQAAgHADgGQADgHAGAAQAFAAADADQAEAEAAAEIgBAHQANgOALAAQANAAAFAJQAFgEAGgCQAGgCAHAAQAQAAAGAQIAEAWIAGAsQAAAFgDADQgEADgFAAQgJAAgCgKIgDgYIgDgXQgCgPgEAAIgIAEIgKAHQAAAJACARIACAbQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_4.setTransform(162.4,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAwQgEgDAAgFIgCgcIgCgbIgBgIQgJAFgKANIgBACIgBAZIAAAHIAAAGQAAAEgEADQgDACgFAAQgHAAgCgGQgCgEAAgJIAAgeIAAgMIgBgNQAAgHADgGQADgHAGAAQAFAAADADQAEAEAAAEIgBAHQANgOALAAQANAAAFAJQAFgEAGgCQAGgCAHAAQAQAAAGAQIAEAWIAGAsQAAAFgDADQgEADgFAAQgJAAgCgKIgDgYIgDgXQgCgPgEAAIgIAEIgKAHQAAAJACARIACAbQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_5.setTransform(149.2,40.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUAmQgHAEgGACQgGACgDAAQgUgBgKgKQgKgLAAgVQAAgTAPgPQAOgOAUABQAIAAAKADQANAGAAAHQAAADgCACIgBAIIgBANQAAAOACAHIAEAIIADAJQAAAEgDADQgDACgFABQgDgBgJgHgAgLgQQgIAJAAAKQAAALAEAGQAEAGAIAAQAEAAAFgCQAEgBAEgEQgCgTAAgJIAAgHIABgHIgDgCIgCAAQgKAAgJAJg");
	this.shape_6.setTransform(137.8,40.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggArQgCgDAAgEIAAg2IAAgHIAAgIQAAgFACgDQAEgDAEAAQAKAAABAJQAOgLASABQARAAAAAVIAAAGQgBANgLAAQgLAAAAgLIAAgJQgRAEgJAQIAAApQAAAFgDADQgDACgFAAQgFAAgDgDg");
	this.shape_7.setTransform(129.1,40.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqA1QAAgFADgDQADgCAFAAIAKABIANABQALABAGgIQAGgHABgRQgEAFgGACQgFACgFAAQgRAAgKgKQgLgMAAgPQAAgWAOgOQAOgPAYAAQAIAAAFACQAGACADAEQALABAAALIgCAPQgDAUgBAVQgBAbgIAMQgLAQgaAAQghAAAAgNgAgMglQgHAIAAAOQAAAKAEAEQAEAFAHAAQAGAAAHgHQAGgIABgHIAEgZIgGgCIgFgBQgNAAgIAJg");
	this.shape_8.setTransform(120.3,43.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUAmQgHAEgGACQgGACgDAAQgUgBgKgKQgKgLAAgVQAAgTAPgPQAOgOAUABQAIAAAKADQANAGAAAHQAAADgCACIgBAIIgBANQAAAOACAHIAEAIIADAJQAAAEgDADQgDACgFABQgDgBgJgHgAgLgQQgIAJAAAKQAAALAEAGQAEAGAIAAQAEAAAFgCQAEgBAEgEQgCgTAAgJIAAgHIABgHIgDgCIgCAAQgKAAgJAJg");
	this.shape_9.setTransform(111.2,40.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJA8QgEgDAAgEIAAgPIgBgQIABgTIABgRQAAgFAEgDQACgDAGAAQAEAAADADQADADAAAFIAAARIgBATIAAAQIAAAPQAAAEgDADQgDAEgEAAQgGAAgCgEgAgHgqQgDgDAAgFQAAgFADgEQAEgEAFABQAEgBAEAEQAEAEAAAFQAAAFgEADQgEAEgEAAQgFAAgEgEg");
	this.shape_10.setTransform(104.3,38.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAXA/QgGADgGABIgLABQgTAAgMgMQgNgMAAgTQAAgWANgNQANgNATAAIALABIAIAEIADgnQABgKAKAAQAFAAADADQADADAAAFIgCAkIgCAjQAAAeACAKIAAADQAAAEgDADQgEADgEAAQgGAAgDgFgAgQAEQgGAHAAAOQAAAJAGAGQAHAHAJAAQAFAAADgCIAIgFIADgDIAAgeQgDgFgEgCQgFgCgGAAQgLAAgGAGg");
	this.shape_11.setTransform(96.5,38.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAkQgNgLAAgTQAAgUALgOQAMgQATAAQAPAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAIgFQAGgEAEAAQAKAAgBAJQAAAJgOAGQgLAFgNAAQgTAAgNgJgAgLgTQgFAFgDAKIASgIQAKgFAHgEQgGgDgJAAQgGAAgGAFg");
	this.shape_12.setTransform(79.5,40.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggArQgDgDAAgEIAAg2IAAgHIAAgIQAAgFAEgDQACgDAGAAQAIAAADAJQANgLASABQAQAAAAAVIAAAGQAAANgLAAQgKAAAAgLIgBgJQgSAEgHAQIAAApQgBAFgDADQgDACgFAAQgFAAgDgDg");
	this.shape_13.setTransform(70.9,40.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAUAmQgHAEgGACQgGACgDAAQgUgBgKgKQgKgLAAgVQAAgTAPgPQAOgOAUABQAIAAAKADQANAGAAAHQAAADgCACIgBAIIgBANQAAAOACAHIAEAIIADAJQAAAEgDADQgDACgFABQgDgBgJgHgAgLgQQgIAJAAAKQAAALAEAGQAEAGAIAAQAEAAAFgCQAEgBAEgEQgCgTAAgJIAAgHIABgHIgDgCIgCAAQgKAAgJAJg");
	this.shape_14.setTransform(62,40.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AARApQgLAEgKAAQgMAAgIgFQgJgGgCgLQgDgUAAgPQAAgLACgOQACgJAJAAQAFAAAEADQADADAAAEIgBAMIgBAMIAAATIADAOIAEACIAEAAQAIAAALgDIAAgOIAAgNQAAgRABgMQABgKAKAAQAFAAAEADQADADAAAFIgCAdIABAQIAAAQIAAAGIAAAFQAAAEgDADQgEADgEAAQgHAAgDgGg");
	this.shape_15.setTransform(45.4,40.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaAjQgNgLAAgUQgBgSALgOQAMgRAWAAQARAAAJAOQAJAMAAARQAAATgKANQgMAPgSABQgPAAgLgLgAgLgNQgFAHAAAKQAAAKAFAGQAFADAGAAQAGAAAFgEQAHgGAAgKQABgagPABQgJgBgGAKg");
	this.shape_16.setTransform(36.4,41);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYBAQgEgDABgEQgBgIATgmIgeg0IgEgHQgCgDAAgEQAAgEADgEQAEgDAFAAQAGAAADAEQALAQAPAfIAKgXIAMgWQAEgGAGAAQAEAAAEADQAEADAAAFIgBAFIgdA6QgLAWgFAOIgFAQQgDAHgIAAQgEAAgEgDg");
	this.shape_17.setTransform(27.3,43.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMASQgDgDAAgEQAAgCAFgKIAIgNQACgFAFAAQAFAAADADQADADAAADIgGAMIgGANQgDAFgFAAQgFAAgDgCg");
	this.shape_18.setTransform(11.3,45.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYBAQgDgDAAgEQAAgIASgmIgdg0IgFgHQgCgDAAgEQAAgEADgEQAEgDAFAAQAFAAADAEQAMAQAPAfIAKgXIAMgWQADgGAHAAQAFAAADADQAEADAAAFIgBAFIgdA6QgLAWgFAOIgFAQQgDAHgIAAQgEAAgEgDg");
	this.shape_19.setTransform(3.2,43.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcAkQgOgLABgTQgBgUALgOQAMgQAVAAQAOAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAHgFQAIgEADAAQAKAAgBAJQABAJgOAGQgMAFgNAAQgTAAgNgJgAgLgTQgFAFgEAKIATgIQAKgFAHgEQgGgDgIAAQgHAAgGAFg");
	this.shape_20.setTransform(-6.3,40.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAjA/QgDgDAAgEIgBgSIAAgTIAAgIQgNABgTADIgfAGIgCASIAAARQAAAFgEACQgDADgFAAQgEAAgEgDQgDgDAAgEIACgZIABgYIAAgeIABggQAAgEADgDQADgDAFAAQAFAAADADQAEADAAAFIgBATIAAATIgBAIIAAAIIAfgGQASgDAOgBIABgeQAAgHAEgIQAEgKAGAAQAFAAADADQAEADAAAFIgBACIgBALIgBAHIAAAHIgBAYIgBAWIABASIABASQAAAFgDADQgEADgEAAQgFAAgEgDg");
	this.shape_21.setTransform(-17.3,38.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGAFQgDgCAAgDQAAgCADgDQADgCADAAQAEAAADACQADADAAACQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_22.setTransform(260.6,97);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_23.setTransform(253.9,93);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAHgHAAQgGACgRAAQgUAAgFgGg");
	this.shape_24.setTransform(246.1,92.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMAqQgHgRgJgfIgFgQQgDgLAAgFQAAgDADgCQADgCACAAQAGAAADAFIABALIAHATIAIAcIANgiIAFgOQAEgJAEgEQACgDADAAQAEAAACACQADACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgGALIgDAMIgRAoIgGAOQgCAEgEAAQgHAAgCgFg");
	this.shape_25.setTransform(238.2,92.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_26.setTransform(230.8,92.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_27.setTransform(223.4,92.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAFABIADAAQADgCAEAAQAFAAACAGIABAMQAAADgCACQgCADgEAAQgFAAgDgFIgCgDIgFgBQgIAAgIAMQgNAPAAAOQgBAGAEAFQAFAEAGAAQAFAAAGgDIAJgGQAEgDADAAQADAAACADQACACABAEQgBADgDADQgQANgPAAQgNAAgKgJg");
	this.shape_28.setTransform(215.6,92.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAHgHAAQgGACgRAAQgUAAgFgGg");
	this.shape_29.setTransform(208.2,92.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZApQgMgJAAgLQAAgJAJAAQAIAAAAAJQAAADAGAEQAGAEAFAAQACAAABgIIAAgSIABggIAAgEIgBAAIgGAAIgHAAQgEAAgCgCQgDgCAAgFQAAgHALAAIAGAAIAFAAIALgBIALAAQAQAAAAAJQAAADgDADQgCACgEAAIgDAAIgEAAIgEAAIAAAEQAAApgGATQgFAOgKAAQgLAAgLgHg");
	this.shape_30.setTransform(200.4,93.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgSAvQgGgCgEgCQgEAAgCgDQgCgCAAgDIAAgRIABgSIAAgSIgBgUQAAgDADgDQADgEAEAAIAKAEIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAGgRAAIgKgBgAgUAdIAGADIAGAAQAMABAFgEQAGgDADgGQADgGAAgGQAAgOgRgKQgFgEgTgHg");
	this.shape_31.setTransform(192.2,92.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAUAhIgFgQIgOABIgNACIgJATQgDAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAJgRIgBgEQAAgDAFgBQAJgOAKgPQAOgWADAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgCACQgDACgEAAQgEAAgFgLgAgDAFIAGgBIAJAAIgEgTIgLAUg");
	this.shape_32.setTransform(183.2,92.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAHgHAAQgGACgRAAQgUAAgFgGg");
	this.shape_33.setTransform(170.1,92.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_34.setTransform(162,92.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAVAhIgGgQIgOABIgNACIgJATQgDAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAIgRIAAgEQAAgDAGgBQAHgOALgPQANgWAEAAQAHAAACAHIADATIAJAmIADAIIACAHQAAAEgDACQgCACgDAAQgFAAgEgLgAgDAFIAHgBIAIAAIgEgTIgLAUg");
	this.shape_35.setTransform(153.4,92.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAFABIADAAQADgCAEAAQAFAAACAGIABAMQAAADgCACQgCADgEAAQgFAAgDgFIgCgDIgFgBQgIAAgIAMQgNAPAAAOQgBAGAEAFQAFAEAGAAQAFAAAGgDIAJgGQAEgDADAAQADAAACADQACACABAEQgBADgDADQgQANgPAAQgNAAgKgJg");
	this.shape_36.setTransform(145.4,92.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_37.setTransform(138.3,92.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAvQgGgCgEgCQgEAAgCgDQgCgCAAgDIAAgRIABgSIAAgSIgBgUQAAgDADgDQADgEAEAAIAKAEIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAGgRAAIgKgBgAgUAdIAGADIAGAAQAMABAFgEQAGgDADgGQADgGAAgGQAAgOgRgKQgFgEgTgHg");
	this.shape_38.setTransform(131,92.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAHgHAAQgGACgRAAQgUAAgFgGg");
	this.shape_39.setTransform(122.8,92.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgfAsQgCgCAAgEIAAgNIAAgNIAAguQAAgEACgDQADgEAGAAIAOABQAIABAFADQAZANAAATQAAAHgGAFQgEAGgLAEQAPAJAIAJQACACAAADQAAADgCADQgDACgDAAQgDAAgDgDQgSgQgUgHIABATQAAAEgDACQgCACgDAAQgEAAgCgCgAgSACIADAAQAPAAAFgDIAGgEIACgDQAAgHgIgGQgHgGgJgBIgHAAg");
	this.shape_40.setTransform(115.2,92.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_41.setTransform(108,92.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAQAsIgIAEIgIAAQgNAAgJgIQgJgIABgOQAAgQAJgIQAIgKANAAIAIABQAEABADACIABgcQABgHAHAAQAEAAABACQADACAAAEIgCAaIgBAYIABAcIABACQAAADgDACQgCACgDAAQgFAAgCgEgAgLADQgFAFAAAKQAAAGAFAFQAFAEAGAAIAGgBIAFgDIACgDIAAgVQgBgEgEgBQgDgCgEAAQgIABgEAEg");
	this.shape_42.setTransform(96,92.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgCIAAgEQAAgEgCAAQgFgBgEAHQgFAGgDAJIAAAGIgBAFIAAAFIAAAGQAAACgDADQgCACgDAAQgEAAgCgCQgDgDAAgCIAAgGIAAgFIABgPIAAgPIAAgGIAAgFQAAgEACgCQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAGAAANIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_43.setTransform(89.5,94.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAOAbIgJAEIgHABQgOAAgGgIQgIgHABgPQgBgNALgKQAKgKAOAAQAFAAAHADQAKADgBAFQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAIQAAALABAEIADAHIADAFQAAADgDACQgCACgDAAQgDAAgGgFgAgIgLQgFAGAAAIQAAAIADADQACAFAGAAQACgBAEgBQADgBADgDIgCgTIAAgFIABgFIgCgBIgBAAQgIAAgGAGg");
	this.shape_44.setTransform(83.1,94.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_45.setTransform(70.3,93);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgpAtQgBgCAAgDIAAgIIAAgHIABgKIAAgKIAAgKIAAgMIgBgKIgBgLQAAgDADgDQADgDAEAAQAEAAAGAIQAZAmAaAXIAAgJIAAgmIgBgGIgBgHQAAgIAIAAQAKAAAAAeIAAAJIgBAkIgBAJQgBAIgHAAQgEAAgFgFQgXgUgbgkIAAASIAAAOIAAAOQAAARgIAAQgFAAgDgDg");
	this.shape_46.setTransform(61.3,92.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgWAoQgQgMAAgcIABgIIAAgJIAAgHIAAgHQAAgEABgEQADgGAEABQADAAACACQAEACAAADIAAAKIgBAKIAAAIIAAAJQAAAHACAIQACAJAFAEQACACAKAAQAOAAAFgbQAEgMAAgZIABgHQADgDAFAAQADAAACACQABABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAYgCAMQgDATgKANQgEAGgGAEQgHAEgHABQgQgBgGgFg");
	this.shape_47.setTransform(51.9,93);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgeAkQgNgKAAgRQAAgTAMgRQAOgSAVAAQAUAAAKAJQAKAKAAATQAAASgLARQgNASgVAAQgRAAgMgKgAgSgQQgJALAAAOQAAAJAIAHQAHAFALAAQAMAAAJgMQAIgMAAgNQAAgNgGgFQgFgEgNAAQgNAAgJANg");
	this.shape_48.setTransform(42.7,92.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgoAtQgCgCgBgDIABgIIAAgHIABgKIAAgKIAAgKIAAgMIgCgKIAAgLQAAgDADgDQADgDAEAAQAEAAAGAIQAZAmAaAXIAAgJIgBgmIgBgGIAAgHQAAgIAIAAQAKAAAAAeIAAAJIgBAkIgBAJQgBAIgHAAQgEAAgFgFQgXgUgbgkIgBASIABAOIAAAOQAAARgJAAQgDAAgDgDg");
	this.shape_49.setTransform(33.1,92.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAHgHAAQgGACgRAAQgUAAgFgGg");
	this.shape_50.setTransform(19.4,92.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_51.setTransform(11.4,92.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAVAhIgGgQIgOABIgNACIgKATQgCAFgFAAQgDAAgCgDQgDgCAAgDQAAgDAIgRIgBgEQABgDAGgBQAIgOAKgPQANgWAEAAQAHAAACAHIADATIAJAmIADAIIACAHQAAAEgDACQgCACgDAAQgFAAgEgLgAgEAFIAIgBIAIAAIgEgTIgMAUg");
	this.shape_52.setTransform(2.7,92.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAEABIAEAAQADgCADAAQAHAAABAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgDgDIgEgBQgIAAgIAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDADAAQADAAACADQADACAAAEQAAADgEADQgQANgPAAQgNAAgKgJg");
	this.shape_53.setTransform(-5.2,92.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_54.setTransform(-12.4,92.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgSAvQgGgCgEgCQgEAAgCgDQgCgCAAgDIAAgRIABgSIAAgSIgBgUQAAgDADgDQADgEAEAAIAKAEIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAGgRAAIgKgBgAgUAdIAGADIAGAAQAMABAFgEQAGgDADgGQADgGAAgGQAAgOgRgKQgFgEgTgHg");
	this.shape_55.setTransform(-19.7,92.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEgBACADQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAHgHAAQgGACgRAAQgUAAgFgGg");
	this.shape_56.setTransform(-27.8,92.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AggAsQgBgCAAgEIAAgNIAAgNIAAguQgBgEADgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgGAFQgEAGgLAEQAPAJAIAJQACACAAADQAAADgCADQgDACgDAAQgDAAgDgDQgRgQgVgHIABATQAAAEgDACQgCACgDAAQgEAAgDgCgAgRACIACAAQAPAAAFgDIAGgEIACgDQAAgHgIgGQgHgGgJgBIgGAAg");
	this.shape_57.setTransform(-35.4,92.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_58.setTransform(-42.6,92.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAQAsIgIAEIgIAAQgNAAgJgIQgIgIAAgOQgBgQAKgIQAIgKANAAIAIABQAEABADACIABgcQABgHAHAAQADAAADACQACACAAAEIgCAaIgBAYIABAcIABACQAAADgDACQgCACgDAAQgFAAgCgEgAgLADQgFAFAAAKQAAAGAFAFQAFAEAGAAIAGgBIAGgDIABgDIAAgVQgCgEgDgBQgDgCgEAAQgIABgEAEg");
	this.shape_59.setTransform(-54.6,92.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgCIAAgEQAAgEgCAAQgFgBgEAHQgFAGgDAJIAAAGIgBAFIAAAFIAAAGQAAACgDADQgCACgDAAQgEAAgCgCQgDgDAAgCIAAgGIAAgFIABgPIAAgPIAAgGIAAgFQAAgEACgCQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAGAAANIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_60.setTransform(-61.1,94.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAOAbIgJAEIgHABQgOAAgGgIQgIgHAAgPQAAgNAKgKQALgKAOAAQAFAAAHADQAJADAAAFQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAIQAAALABAEIADAHIADAFQgBADgCACQgCACgDAAQgDAAgGgFgAgIgLQgFAGAAAIQAAAIACADQADAFAGAAQADgBADgBQADgBADgDIgCgTIAAgFIABgFIgCgBIgCAAQgHAAgGAGg");
	this.shape_61.setTransform(-67.6,94.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_62.setTransform(257.2,74.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_63.setTransform(248.9,74);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZAkQgJgKAAgMQAAgTARgUQAPgSAOAAIAFABIADAAQADgCAEAAQAFAAACAGIABAMQAAADgCACQgCADgEAAQgFAAgDgFIgCgDIgFgBQgIAAgIAMQgNAPAAAOQAAAGADAFQAFAEAGAAQAEAAAHgDIAJgGQAEgDACAAQAEAAACADQACACAAAEQAAADgDADQgPANgQAAQgNAAgJgJg");
	this.shape_64.setTransform(241.1,74.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOAAQAEAAACACQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAALABACQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_65.setTransform(233.7,74.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgZAoQgMgIAAgLQAAgJAJAAQAIgBAAAKQAAADAGAEQAGAEAFAAQACAAABgIIAAgSIABggIAAgEIgBAAIgGAAIgHAAQgEAAgCgCQgDgCAAgFQAAgHALAAIAGAAIAFAAIALgBIALAAQAQAAAAAJQAAADgDADQgCACgEAAIgDAAIgEgBIgEAAIAAAFQAAApgGATQgFAOgKAAQgLAAgLgIg");
	this.shape_66.setTransform(225.8,74.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgcAtQgDgEAAgDIAAg9IAAgIIAAgIQABgFAKgBIAOgCQALABAKAGQAMAJAAANQAAAGgDAFQgCAEgFADQAGADAEAFQAFAHAAAFQAAAJgIAGQgGAFgGACQgNAFgUABQgEAAgDgDgAgPAfQAKgBALgCQALgDgBgEQAAgFgGgDQgFgDgFAAIgPAAgAgPgSIAAAMIAIAAQARgBAAgLQAAgFgFgDQgFgFgGAAIgJAAg");
	this.shape_67.setTransform(218.2,74);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgeAkQgNgKAAgRQAAgTAMgRQAOgSAVAAQAUAAAKAJQAKAKAAATQAAASgLARQgNASgVAAQgRAAgMgKgAgSgQQgJALAAAOQAAAJAIAHQAHAFALAAQAMAAAJgMQAIgMAAgNQAAgNgGgFQgFgEgNAAQgNAAgJANg");
	this.shape_68.setTransform(209.4,74.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_69.setTransform(195.3,74);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAEABIAEAAQADgCADAAQAGAAACAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgDgDIgEgBQgHAAgJAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDADAAQADAAADADQACACAAAEQAAADgEADQgPANgQAAQgOAAgJgJg");
	this.shape_70.setTransform(187.5,74.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOAAQAEAAACACQADACAAAEQAAAFgIACIgOABIgYACIAAAMQAAALABACQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACABQADADAAAEQAAAHgHABQgGABgRAAQgUAAgFgGg");
	this.shape_71.setTransform(180.1,74.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AggAsQgBgCAAgEIAAgNIAAgNIAAguQgBgEADgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgGAFQgEAGgLAEQAPAJAIAJQACACAAADQAAADgCADQgDACgDAAQgDAAgDgDQgRgQgVgHIABATQAAAEgDACQgCACgDAAQgEAAgDgCgAgRACIACAAQAPAAAFgDIAGgEIACgDQAAgHgIgGQgHgGgJgBIgGAAg");
	this.shape_72.setTransform(172.5,74);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_73.setTransform(165.1,74.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgSAvQgGgCgEgCQgEAAgCgDQgCgBAAgEIAAgRIABgSIAAgSIgBgUQAAgDADgDQADgDAEAAIAKADIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAKgIAFQgKAHgRgBIgKgBgAgUAdIAGADIAGABQAMAAAFgEQAGgEADgFQADgGAAgGQAAgOgRgKQgFgEgTgHg");
	this.shape_74.setTransform(157.8,74.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgXAeQgBgCAAgDIAAglIAAgFIAAgGQAAgDACgCQACgCAEgBQAGAAACAHQAJgIAMAAQAMAAAAAQIAAAEQAAAJgIgBQgHABgBgIIAAgGQgMADgFAKIAAAdQgBADgCADQgCACgDAAQgFAAgCgDg");
	this.shape_75.setTransform(145.3,75.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_76.setTransform(139.1,75.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgKAxQgDgCAAgDIAAgCIACgQIAAgcIgEABIgDAAQgEAAgCgCQgDgCAAgEQAAgFAGgBIAKgBIABgHQACgOAFgFQAGgJAOABQALAAAAAHQAAAIgKgBQgHABgEAEQgCAEgBAIIAAACIALgBQALAAAAAHQAAAJgLgBIgMAAIAAAQIABAPQAAALgCAGQgBAGgGAAQgDAAgCgCg");
	this.shape_77.setTransform(132.9,74.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgEApQgDgCAAgDIAAgHIABgGIgBgeIgMAAQgHgCAAgGQAAgDACgDQADgCADAAIAKABIgBgGIAAgGQAAgEADgCQACgCADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFABAAAGQAAAEgDACQgCACgDAAIgDAAIgDAAIgGAAIABAeIAAADIAAADQABAOgJAAQgCAAgCgCg");
	this.shape_78.setTransform(122,74.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgEIAAgGIAAgBIAAgEQAAgEgCAAQgFAAgEAGQgFAHgDAIIAAAGIgBAFIAAAFIAAAGQAAADgDACQgCACgDAAQgEAAgCgCQgDgCAAgDIAAgGIAAgFIABgPIAAgQIAAgFIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABAMQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_79.setTransform(116.1,75.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_80.setTransform(109.4,75.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgWAeQgCgCAAgDIAAglIAAgFIAAgGQAAgDACgCQACgCADgBQAHAAABAHQAKgIANAAQALAAAAAQIAAAEQgBAJgHgBQgIABAAgIIAAgGQgMADgGAKIAAAdQAAADgCADQgCACgEAAQgEAAgBgDg");
	this.shape_81.setTransform(103.4,75.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_82.setTransform(97,75.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgKAxQgDgCAAgDIAAgCIACgQIAAgcIgEABIgDAAQgEAAgCgCQgDgCAAgEQAAgFAGgBIAKgBIABgHQACgOAFgFQAGgJAOABQALAAAAAHQAAAIgKgBQgHABgEAEQgCAEgBAIIAAACIALgBQALAAAAAHQAAAJgLgBIgMAAIAAAQIABAPQAAALgCAGQgBAGgGAAQgDAAgCgCg");
	this.shape_83.setTransform(90.6,74.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgKAxQgDgCAAgDIAAgCIACgQIAAgcIgEABIgDAAQgEAAgCgCQgDgCAAgEQAAgFAGgBIAKgBIABgHQACgOAFgFQAGgJAOABQALAAAAAHQAAAIgKgBQgHABgEAEQgCAEgBAIIAAACIALgBQALAAAAAHQAAAJgLgBIgMAAIAAAQIABAPQAAALgCAGQgBAGgGAAQgDAAgCgCg");
	this.shape_84.setTransform(84.5,74.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGAqQgDgCAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgDADAAQADAAACADQACACAAADIAAANIgBAMIAAALIAAALQAAADgCACQgCADgDAAQgDAAgCgDgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDACgEAAQgDAAgCgCg");
	this.shape_85.setTransform(80,74.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAQAtIgIADIgIAAQgNAAgJgIQgJgJAAgNQABgPAIgJQAJgKAOAAIAIABQADAAACACIACgbQABgHAHAAQADAAACADQACABAAAEIgBAZIgBAZIABAcIAAACQABADgDACQgCACgEAAQgEAAgCgDgAgLADQgEAFAAAKQAAAGAEAFQAFAEAGAAIAGgBIAFgDIACgCIAAgWQgCgEgDgBQgDgCgEAAQgIAAgEAFg");
	this.shape_86.setTransform(74.6,73.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_87.setTransform(62.5,75.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgXAeQgBgCAAgDIAAglIAAgFIAAgGQAAgDACgCQACgCAEgBQAGAAACAHQAJgIAMAAQAMAAAAAQIAAAEQAAAJgIgBQgHABAAgIIAAgGQgNADgFAKIAAAdQAAADgDADQgCACgDAAQgFAAgCgDg");
	this.shape_88.setTransform(56.5,75.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAOAbIgJAEIgGABQgPAAgGgHQgIgIABgPQgBgNAKgKQALgKAOAAQAFAAAHADQAKADgBAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAJQAAAJABAFIADAGIADAGQAAADgDACQgCACgDAAQgDAAgGgFgAgIgLQgFAHAAAGQAAAIACAFQADAEAGAAQACgBAEgBQADgBADgDIgCgUIAAgDIABgGIgCgBIgBAAQgIAAgGAGg");
	this.shape_89.setTransform(50.2,75.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPAfQgJgDAAgHQAAgGAGAAIAIACIAIABQALAAAAgEQAAgDgIgEIgOgHQgJgGAAgHQAAgNAMgEQAIgCAOAAQAFAAAEACQADACAAAFQABALgHAAQgFAAgBgGIgFAAQgNAAAAAEQAAACAIAEQALAGAEACQAIAGAAAIQAAAKgJAFQgIAEgKAAQgHAAgGgCg");
	this.shape_90.setTransform(38.6,75.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgFAiQgBgCAAgEIgCgTIgBgTIgBgGQgHAEgHAJIgBABIAAASIAAAEIAAAEQgBAEgCABQgCACgDAAQgFAAgDgEIgBgKIAAgUIAAgJIAAgJQAAgFACgEQACgFAEAAQAEAAACACQACADABADIgBAFQAJgKAIAAQAJAAADAGQAEgDAEgBQAFgCAEAAQAMAAAEAMIACAPIAFAfQAAADgDADQgCACgDAAQgHAAgBgHIgDgRIgCgQQgBgLgCAAIgHADIgHAFIACASIACATQAAAEgDACQgCACgDAAQgDAAgDgCg");
	this.shape_91.setTransform(31.3,75.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgXAeQgBgCAAgDIAAglIAAgFIAAgGQAAgDACgCQACgCAEgBQAGAAACAHQAJgIAMAAQAMAAAAAQIAAAEQAAAJgIgBQgHABAAgIIAAgGQgNADgFAKIAAAdQgBADgCADQgCACgDAAQgEAAgDgDg");
	this.shape_92.setTransform(23.7,75.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_93.setTransform(17.5,75.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgKAxQgDgCAAgDIAAgCIACgQIAAgcIgEABIgDAAQgEAAgCgCQgDgCAAgEQAAgFAGgBIAKgBIABgHQACgOAFgFQAGgJAOABQALAAAAAHQAAAIgKgBQgHABgEAEQgCAEgBAIIAAACIALgBQALAAAAAHQAAAJgLgBIgMAAIAAAQIABAPQAAALgCAGQgBAGgGAAQgDAAgCgCg");
	this.shape_94.setTransform(11.3,74.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgEAiQgCgCAAgEIgCgTIgCgTIAAgGQgHAEgHAJIgBABIAAASIAAAEIAAAEQAAAEgDABQgCACgDAAQgGAAgBgEIgBgKIAAgUIgBgJIAAgJQAAgFACgEQACgFAEAAQADAAADACQADADAAADIgBAFQAJgKAIAAQAJAAADAGQAEgDAEgBQAFgCAFAAQALAAAEAMIADAPIAEAfQAAADgCADQgDACgEAAQgGAAgCgHIgCgRIgCgQQgBgLgCAAIgGADIgIAFIACASIABATQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_95.setTransform(-1.3,75.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAOAbIgJAEIgGABQgOAAgIgHQgGgIAAgPQAAgNAKgKQAKgKAOAAQAFAAAHADQAKADgBAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAJQAAAJACAFIACAGIACAGQAAADgCACQgDACgCAAQgDAAgGgFgAgIgLQgFAHgBAGQABAIADAFQACAEAGAAQACgBADgBQAEgBADgDIgCgUIAAgDIABgGIgCgBIgBAAQgHAAgHAGg");
	this.shape_96.setTransform(-9.4,75.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgXAeQgBgCAAgDIAAglIAAgFIAAgGQAAgDACgCQACgCAEgBQAGAAACAHQAJgIAMAAQAMAAAAAQIAAAEQAAAJgIgBQgHABAAgIIAAgGQgNADgFAKIAAAdQAAADgDADQgCACgDAAQgFAAgCgDg");
	this.shape_97.setTransform(-15.5,75.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgdAlQAAgDACgBQACgCADAAIAIABIAJABQAHgBAEgFQAEgFABgMQgDAEgEABQgDABgEABQgLgBgIgHQgHgIAAgLQAAgPAKgLQAKgKAQAAQAFABAEABQAEABADADQAHABAAAIIgBALQgCAOgBANQAAATgGAJQgIALgSAAQgXAAAAgJgAgIgaQgFAHAAAJQAAAGADAEQACACAGAAQADABAFgFQAFgFAAgFIADgSIgEgBIgEgBQgJAAgFAGg");
	this.shape_98.setTransform(-21.7,77.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAOAbIgJAEIgHABQgOAAgGgHQgIgIABgPQgBgNAKgKQALgKAOAAQAFAAAHADQAKADgBAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAJQAAAJABAFIADAGIADAGQAAADgDACQgCACgDAAQgDAAgGgFgAgIgLQgFAHAAAGQAAAIACAFQADAEAGAAQACgBAEgBQADgBADgDIgCgUIAAgDIABgGIgCgBIgBAAQgIAAgGAGg");
	this.shape_99.setTransform(-28.1,75.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgGAqQgDgCAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgDADAAQADAAACADQACACAAADIAAANIgBAMIAAALIAAALQAAADgCACQgCADgDAAQgDAAgCgDgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDACgEAAQgDAAgCgCg");
	this.shape_100.setTransform(-33,74.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAQAtIgIADIgIAAQgNAAgJgIQgIgJAAgNQgBgPAKgJQAIgKANAAIAIABQAEAAADACIABgbQABgHAHAAQADAAADADQACABAAAEIgCAZIgBAZIABAcIABACQAAADgDACQgCACgDAAQgFAAgCgDgAgLADQgFAFAAAKQAAAGAFAFQAFAEAGAAIAGgBIAGgDIABgCIAAgWQgCgEgDgBQgDgCgEAAQgIAAgEAFg");
	this.shape_101.setTransform(-38.4,73.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_102.setTransform(-50.5,75.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_103.setTransform(-57.2,73.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_104.setTransform(-64.9,74);

	this.instance_2 = new lib.Tween21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.1,83);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},20).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},27).to({state:[{t:this.instance_2}]},65).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.instance_2}]},1).to({state:[]},488).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(112).to({_off:false},0).to({scaleX:1.31,scaleY:1.31,x:45.3,y:-115.6},13).to({startPosition:0},1).to({_off:true},488).wait(4));

	// Layer 27
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_105.setTransform(182,103.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAUAoIgCgSIgBgSIAAgHIAAgIQAAgSgHAAQgIAAgIALQgIAKgEAPIgBAIIAAAIIAAAHIABAIQAAAEgCACQgDACgDAAQgEAAgDgCQgCgCAAgEIAAgIIgBgHIABgXIABgXIAAgIIAAgIQAAgEACgCQADgCADAAQAIAAAAAKIABAKQAOgSANAAQAOAAAFALQADAIABAPIAAAJIAAAGQAAAHACALIABASQABAEgDACQgCACgEAAQgHAAgBgIg");
	this.shape_106.setTransform(175.6,99.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgYAjQgLgLgBgUQAAgRAKgOQALgSAUABQARAAAIAOQAHANAAARQgBARgJANQgLAPgQABQgOAAgKgLgAgOgQQgGAJAAALQAAAMAHAHQAGAFAHABQAIAAAGgHQAHgGAAgNQABgegSAAIgBgBQgLAAgGAMg");
	this.shape_107.setTransform(166.3,99.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgHA8QgDgCAAgEIAAgPIAAgOIAAgUIABgTQAAgDADgCQACgDADAAQADAAACADQADACAAADIgBATIgBAUIAAAOIAAAPQAAAEgBACQgDACgDABQgDgBgCgCgAgEgtQgDgDAAgEQAAgEADgDQACgCAEAAQADAAADACQADADAAAEQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_108.setTransform(159.8,97.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_109.setTransform(153.2,98.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgXAlQgMgMAAgRQAAgQALgSQANgTAOgBQAJAAAJAEQANAFABAHQAAADgCADQgDACgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgEgDQgEgEgMAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAIAGAJAAQAGAAAFgCIAKgGIADgBQAEAAACACQACADAAADQAAAGgNAFQgLAGgIAAQgPgBgMgJg");
	this.shape_110.setTransform(144.9,99.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAbAqIgGgFIgOAGQgGACgDAAQgUAAgJgLQgIgKAAgVQAAgTAOgPQAOgOASAAQAIAAAIAEQAMAEAAAHIgCAEIgCAKIAAASQAAAKABAGIAGAOIABAFIABABQAAADgCADQgCACgEAAQgBAAgEgEgAgNgUQgKALAAAMQAAAOAGAGQAEAIAKgBQAHAAAGgCIAIgHQgDgVAAgLIAAgHIACgJIgFgDIgEgBQgMAAgJALg");
	this.shape_111.setTransform(136.1,99.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgXAvQgMgFAAgJQAAgDACgCQADgDAEAAQACAAAEAEQACACAHABIAKABQAGAAAFgCQAHgCABgFQgBgMgPgDIgIgDQgLgBgFgEQgGgEAAgJQAAgSAQgGIAPgGQALgDAFgDQADgBAEAAQADAAADACQACADAAADIABAIIABAHQAAAEgCACQgCACgEAAQgFAAgCgDIgCgJIgSAGQgNAFAAAIIAFACQASACAJAHQAOAHAAARQAAANgMAIQgJAFgOAAQgLAAgLgDg");
	this.shape_112.setTransform(122.3,99.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgIANQAAgDACgJIADgOQABgGAEAAQADAAACACQACACAAADQAAAHgEASQgCAHgEAAQgHAAAAgHg");
	this.shape_113.setTransform(116.6,92.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_114.setTransform(110.4,97.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_115.setTransform(99.4,97.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgjBAQgJgIABgaIAAgMIABgNIgBgFIABgDIACgkIgBgJIgBgJQAAgKAJAAQADAAADADIATgEIAPgCQAUAAAMAFQAGADAAAFQAAAEgDACQgCADgDAAIgDAAQgOgFgNAAIgOABIgRAFIABAIIgCAgIAkgEIATgBQAEgBACADQACADAAADQAAAHgHABIgTACIgmADIAAALIgBAKQAAASADADQACADALAAIAOgBIAQAAIAFgBIAFAAQAJAAAAAJQAAAGgIACQgHACgagBQgZAAgHgGg");
	this.shape_116.setTransform(88.9,97.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgOA8QgKgZgMguIgHgXQgFgRAAgGQAAgDADgDQACgCAEAAQAGAAABAHIAEAPIAIAcQAHAdAIAXIAAgCIAWg6IAHgVQAFgMAFgHQADgDAEAAQADAAACACQADADAAADIgCAGQgFAHgDAJIgGASIgXA7IgJAVQgCAFgEAAQgHAAgCgHg");
	this.shape_117.setTransform(78.4,97.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("Ag3BAQgCgCAAgEIAAgKIABgLIAAgPIAAgPIAAgQIAAgRIgBgPIgBgPQAAgFADgCQAEgDAEgBQAEAAAHAKQAUAfAQAUQATAXAYAXIAAgLIAAgKQAAgjgDgWIgCgJIgCgIQAAgKAJAAQAOAAAAA2IAAAaIAAAcIgCANQgBAIgIAAQgEAAgGgGQgigggrg7IAAATIgBASIABAVIAAAUQAAAWgJAAQgEAAgDgDg");
	this.shape_118.setTransform(60.5,97.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgpAzQgRgPAAgXQAAgcAQgXQAUgaAbgBQAbAAANANQAOANABAbQAAAcgQAXQgSAagbABQgYgBgQgOgAgcgbQgOATAAAVQAAAQANAKQALAKARAAQASAAAOgVQAMgSAAgWQAAgTgJgJQgJgHgUAAQgTAAgOAUg");
	this.shape_119.setTransform(47,97.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgkA9QgCgDAAgDQAAgDACgDQADgCADAAIASgDIABgOIAAgPIgBgNQAAgTACgdIgLABIgKAAQgEAAgDgCQgCgDAAgEQAAgHAIgBIAZgBQAPAAAZAEQAIABAAAIQAAAEgDACQgDACgCAAIgOgBIgOgCIgBAuIAAAOIABAOIgBAOIAaAAQADAAADADQACACAAADQAAAEgCADQgDACgDAAIgOAAIgOAAIgPACIgRACQgDAAgDgDg");
	this.shape_120.setTransform(35.5,97.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgFA9QgCgCAAgEIAAgEIAAgDIAAgNIgBgMIgCggIgCgiIgIABQgSAAgKgDQgHgCAAgGQAAgEADgCQACgDADAAIAOABIANABIAPAAIAPAAIATABIATABQADAAADACQACADAAADQAAAEgCADQgDACgDAAIgTgBIgTgBIgGAAIACAlIACAlIABAIIAAAJQAAAGgCAEQgCAFgFAAQgCAAgDgCg");
	this.shape_121.setTransform(25.8,97.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_122.setTransform(14.3,97.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAdArIgGgaIgVAEIgWAFIgOAfQgCAFgFAAQgDAAgDgCQgDgDABgEQAAgDAMgbQgBgCgBgDQAAgHAIgCIAZgnQASgfAFgBQAGAAADAJIAFAcIAMA5IAGANIABAJQABAEgDACQgDACgDAAQgHABgGgUgAgKAGIAegGIgHggg");
	this.shape_123.setTransform(2.7,97.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgbAkQgOgLAAgSQAAgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQADACAAADQAAAJgQAGQgMAGgMAAQgSAAgLgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgJAAgIAIg");
	this.shape_124.setTransform(-13,99.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAXA/IgEgUIgBgUIAAgGIAAgGQAAgPgIAAQgKAAgIAIQgEAFgHAOQAAAggDAFQgCAGgFAAQgEAAgCgCQgDgDAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgEADgCQACgCAEAAQAHAAABAIIABAOIgBASIAAASIAAAHQAHgIAIgFQAGgEAJgBQAOABAFAIQAEAGAAAPIABAPIACARIACASIABACQAAADgDADQgCACgEAAQgGAAgBgGg");
	this.shape_125.setTransform(-22.6,97.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgEA6QgDgCAAgDIAAgJIABgKIgCgvIgSgCQgIgBAAgHQAAgEACgCQADgCADAAIASABIgBgLIAAgLQAAgDACgCQADgDADAAQAHAAABAMIAAAIIAAAFIAAAFIAMgBIALAAQAFACAAAGQAAAEgCACQgDADgDAAIgEgBIgEAAIgMABIACAwIAAAEIAAAEQAAATgJAAQgCAAgCgDg");
	this.shape_126.setTransform(-31.6,98.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgWAuQgNgFAAgHQAAgEADgDQACgCADAAQADAAAEAEQACACAHABIAJABQAGAAAGgBQAHgDAAgFQAAgMgPgEIgIgBQgLgCgFgEQgHgEAAgJQAAgRARgIIAPgFQALgDAFgCQADgCAEAAQADAAADADQACACAAAEIABAGIABAHQAAAEgCADQgDACgDAAQgEAAgCgDIgCgJIgTAGQgNAFAAAIIAFABQASAEAJAFQANAJAAAQQAAAOgLAGQgJAGgPAAQgLAAgJgEg");
	this.shape_127.setTransform(192.2,73.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgcAkQgMgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_128.setTransform(183.8,73.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgIAmIgNghIgPglIgBgFQAAgDADgCQADgDADAAQAFABACAFIAVA4IAPglIAHgTQACgFAFAAQAEAAACACQADACAAAEQAAADgOAgIgRAnQAAAHgHABQgGAAgCgIg");
	this.shape_129.setTransform(174.9,73.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgHA8QgCgCAAgEIgBgOIAAgPIABgUIABgSQAAgFACgBQACgDAEAAQACAAACADQADABAAAFIgBASIgBAUIAAAPIAAAOQAAAEgCACQgCADgDgBQgDABgCgDgAgFgtQgCgDAAgEQAAgEACgCQAEgEADAAQADAAAEAEQACACAAAEQAAAEgCADQgEADgDAAQgDAAgEgDg");
	this.shape_130.setTransform(168.5,71.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgcAkQgNgLABgSQAAgVAKgPQAMgPASAAQAOAAAIAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAGAAAHgCQAKgDADgEQACgFAEAAQADAAACADQACACAAADQAAAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAHgFQgIgHgMAAQgJAAgIAIg");
	this.shape_131.setTransform(161.5,73.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgXAkQgMgKAAgSQAAgQALgSQANgUAOABQAIAAAKADQAOAFAAAHQgBADgCACQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCQgFgEgMAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAHAGAKAAQAFAAAGgDIAKgEIAEgCQACAAACADQADACAAADQAAAGgNAGQgLAEgIAAQgQABgLgLg");
	this.shape_132.setTransform(152.3,73.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgbAkQgNgLgBgSQAAgVALgPQALgPATAAQANAAAJAEQALAGAAAMQAAAIgKAHIgRAIIgfAPQAFAHAGAEQAIADAIAAQAFAAAJgCQAJgDADgEQADgFADAAQADAAACADQACACAAADQAAAJgOAGQgNAGgMAAQgSAAgLgJgAgQgWQgHAIgDAPIAZgLQAOgIAGgFQgHgHgMAAQgKAAgGAIg");
	this.shape_133.setTransform(143.4,73.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgfAmIAAg5IAAgJIAAgHQAAgJAIAAQAIAAAAAOQAPgPATgBQAHABADAEQADAFAAALIAAAFQAAALgIAAQgHAAAAgIIAAgGIgBgHQgNACgHAFQgHAGgFALIAAAsQAAAJgIAAQgHAAAAgJg");
	this.shape_134.setTransform(134.8,73.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgFA9QgCgCgBgEIABgEIAAgDIgBgNIAAgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEACgCQADgDAEAAIANABIAOABIAPAAIANAAIATABIATABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAIgTgBIgTgBIgFAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgDAAgCgCg");
	this.shape_135.setTransform(120.3,71.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_136.setTransform(108.9,71.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgjBAQgJgHAAgbIABgLIAAgPIgBgDIACgFIACgjIgBgJIgBgJQAAgKAIAAQAEAAADACIATgEIAPAAQAUAAAMAEQAFACABAGQAAADgCADQgDADgDAAIgDgBQgOgDgNAAIgOABIgSADIABAJIgBAgIAjgEIAUgCQADABADACQADACgBAEQAAAGgHABIgUACIglAEIAAALIgBAKQAAASADADQACADALAAIAOAAIAQgBIAFAAIAEgBQAKAAgBAJQABAGgIACQgIACgYAAQgaAAgHgHg");
	this.shape_137.setTransform(98.5,71.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AghA5QgQgLAAgPQAAgLAIAAQAJAAAAAKQAAAIAKAHQAJAGAIAAQAGAAADgqQABgTAAgeIAAgJIgFAAIgJAAIgKAAQgEAAgCgCQgDgCAAgFQAAgIAMAAIAIAAIAIAAIAPAAIAQgBQATAAAAAKQAAADgCADQgDADgDgBIgFAAIgGgBIgKAAIABAKQAAA9gIAcQgGATgNAAQgOAAgOgLg");
	this.shape_138.setTransform(87.4,72.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgmBAQgDgDAAgEIAAgYIABghIACgiIABgXQAAgEADgCQALgDAOAAQAOAAANAKQAQALAAARQAAAVgRAMQANAFAGAHQAGAGAAAIQAAAKgLAJQgHAHgJADQgRAHgdAAQgEAAgDgDgAgZAhIAAARQAWgBAMgFQAGgCAGgFQAFgEAAgCQAAgEgLgFIgPgGIgIgBIgEAAIgDAAIgJgBIgBATgAgVgxIgBAPIgBAgIAMABQAMgBAIgHQAIgHAAgMQAAgIgIgGQgJgHgJAAIgMAAg");
	this.shape_139.setTransform(76.7,71.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgpA0QgRgPAAgYQgBgbASgYQASgaAcAAQAbAAANAMQAOANAAAcQAAAbgPAXQgSAbgcgBQgXABgQgOgAgdgbQgMATAAAVQAAAQAMAKQALAJAQAAQAUAAANgUQALgSAAgVQABgVgKgIQgIgHgUAAQgTAAgPAUg");
	this.shape_140.setTransform(64.3,72);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgFA9QgCgCAAgEIAAgEIAAgDIAAgNIgBgMIgCggIgCgiIgIABQgSAAgKgDQgHgCAAgGQAAgEADgCQACgDADAAIAOABIANABIAQAAIAOAAIATABIATABQADAAACACQADADAAADQAAAEgDADQgCACgDAAIgTgBIgTgBIgGAAIACAlIACAlIAAAIIABAJQAAAGgCAEQgCAFgFAAQgCAAgDgCg");
	this.shape_141.setTransform(47.3,71.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgiAzQgLgNAAgRQAAgbAXgeQAUgZATAAIAHABIAGABQADgEAFAAQAFAAACAHQABAHAAAKQAAADgCADQgCADgEAAQgFAAgDgGQgCgFgCgCIgJAAQgMAAgOASQgUAZAAAVQAAALAHAHQAHAIAKAAQAIAAAIgEIAPgKQAFgDACAAQAEAAACACQADADAAADQAAAEgDADQgWATgWAAQgRAAgMgNg");
	this.shape_142.setTransform(35.8,71.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgkBAQgHgHgBgbIABgLIAAgPIgBgDIACgFIACgjIgBgJIgBgJQAAgKAIAAQAEAAACACIATgEIAQAAQAUAAAMAEQAGACgBAGQAAADgCADQgCADgEAAIgCgBQgOgDgNAAIgOABIgSADIACAJIgCAgIAjgEIAUgCQAEABACACQADACAAAEQAAAGgIABIgTACIgmAEIgBALIAAAKQAAASADADQACADALAAIAPAAIAPgBIAFAAIAEgBQAJAAAAAJQAAAGgGACQgJACgYAAQgaAAgIgHg");
	this.shape_143.setTransform(25.5,71.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgpA/QgDgDAAgDIAAgUIgBgTIACgWIABgXIAAgMIgBgNQAAgFACgDQAEgFAFABIAUABQALACAHAEQAiASAAAZQAAANgMAJQgJAIgOAEQAaAOANAPQACADAAADQAAADgCADQgDACgDAAQgDAAgDgCQgcgcgggJIAAAQIABARQAAADgDADQgCACgDAAQgEAAgCgCgAgaglIABALIgBAQIgCAQIAEAAIADAAQAVAAAKgGQAFgBAEgFQAEgEAAgEQAAgLgNgKQgLgJgNgCIgMgBg");
	this.shape_144.setTransform(14.7,71.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgkA9QgCgCAAgEQAAgEACgCQADgCAEgBIARgBIABgQIAAgNIgBgPQAAgRACgdIgKAAIgMAAQgDAAgCgCQgDgDAAgDQAAgIAIgBIAZAAQAPAAAaADQAHABAAAIQAAAEgDACQgCACgDAAIgOgBIgNgBIgCAtIAAAOIABAOIgBAPIAagBQADAAADADQACACAAAEQAAADgCACQgDADgDAAIgOABIgOAAIgPABIgQABQgEAAgDgCg");
	this.shape_145.setTransform(4.6,72);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgZBDQgKgDgEgDIgBAAQgEAAgCgDQgDgCAAgDIACgaIABgbIgBgbIAAgeQAAgDADgEQAEgEADAAQACAAALAGIAPAHQAXAIAQAQQATAUAAAXQABAOgHANQgGANgMAIQgNAJgXAAIgOgCgAgfgWIABAXIgCAtIADABQAGAFAMAAQARAAAKgGQAHgGAFgJQAFgJAAgKQAAgWgZgRQgIgFgfgOg");
	this.shape_146.setTransform(-5.9,72);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgcAkQgMgLAAgSQgBgVALgPQAMgPASAAQANAAAJAEQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAHAIAEQAGADAJAAQAFAAAJgCQAJgDADgEQACgFAEAAQADAAACADQACACABADQgBAJgPAGQgMAGgMAAQgSAAgMgJgAgRgWQgGAIgEAPIAagLQAOgIAGgFQgGgHgNAAQgKAAgHAIg");
	this.shape_147.setTransform(-21.9,73.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAXA/IgEgTIgBgUIAAgHIAAgHQAAgOgIAAQgKAAgIAJQgEAEgHAOQAAAggDAGQgCAFgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgMIAAg8IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAHAAABAHIABAPIgBASIAAASIAAAIQAHgKAIgEQAGgFAJABQAOAAAFAJQAEAFAAAOIABARIACARIACARIABACQAAAEgDACQgCACgEAAQgGAAgBgGg");
	this.shape_148.setTransform(-31.5,71.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgFA9QgDgCABgEIAAgEIAAgDIAAgNIgBgMIgCggIgCgiIgHABQgTAAgKgDQgHgCAAgGQAAgEADgCQACgDAEAAIANABIAOABIAOAAIAPAAIASABIATABQAEAAADACQACADAAADQAAAEgCADQgDACgEAAIgTgBIgSgBIgGAAIACAlIACAlIABAIIAAAJQAAAGgCAEQgCAFgFAAQgCAAgDgCg");
	this.shape_149.setTransform(-41.5,71.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgGA3QgDgEAAgEIAAgIIAAgJIgBgnIgPgBQgKgCAAgJQAAgEADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEADgDQADgDAFAAQAKAAAAAUIAAAFIAIAAIAMABQAHADAAAGQAAAFgDADQgDADgFAAIgDAAIgFAAIgHABIABAoIAAAEIAAAEQABASgMAAQgDAAgDgCg");
	this.shape_150.setTransform(85.2,89);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAQAkIgCgQIgBgQIAAgGIAAgHIAAgDIABgEQgBgGgDAAQgGAAgGAJQgGAIgEANIAAAHIgBAHIAAAGIgBAHQAAAFgDADQgEACgEAAQgEAAgDgCQgEgDAAgFIAAgHIgBgGIABgWIABgUIAAgHIAAgHQAAgFADgDQADgDAFAAQAKAAABANIAAABQALgMAMAAQAOAAAHANQADAIAAAQIAAAGIAAAEIACAQIACAPQgBAFgDADQgDACgFAAQgJAAgBgJg");
	this.shape_151.setTransform(77.3,90.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIAEQAMAFAAAMQAAAKgKAGIgRAIIgZALQADAFAGACQAFACAGAAQAKAAAIgFQAGgEAEAAQAIAAAAAJQAAAJgNAFQgLAEgMABQgSAAgLgKgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgCgIAAQgGgBgGAFg");
	this.shape_152.setTransform(68.4,90.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgeApQgDgDAAgEIAAgyIAAgIIABgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgCAMgJAAQgLAAAAgKIAAgIQgQADgIAPIABAnQAAAEgEADQgDADgFAAQgFAAgCgDg");
	this.shape_153.setTransform(60.4,90.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIAEQAMAFAAAMQAAAKgKAGIgRAIIgZALQADAFAGACQAFACAGAAQAKAAAIgFQAGgEAEAAQAIAAAAAJQAAAJgNAFQgLAEgMABQgSAAgLgKgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgCgIAAQgGgBgGAFg");
	this.shape_154.setTransform(51.8,90.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgEABQgGAAgCgDQgEgDAAgEQAAgIAIgCIAOgBIABgJQACgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgKAAgEAGQgDAFgBALIgBACIAQgBQAOAAAAAKQAAAKgPAAIgQABIAAAUIABAVQAAAOgCAIQgBAJgIAAQgEAAgEgDg");
	this.shape_155.setTransform(43.2,88.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgFABQgFAAgDgDQgDgDAAgEQAAgIAIgCIANgBIABgJQADgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgKAAgEAGQgDAFgBALIAAACIAOgBQAPAAAAAKQAAAKgQAAIgPABIAAAUIABAVQAAAOgCAIQgCAJgHAAQgFAAgDgDg");
	this.shape_156.setTransform(35.1,88.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgCADQgEADgEAAQgEAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAFgEADAAQAGAAADAEQADADABAFQgBAFgDADQgDADgGAAQgDAAgFgDg");
	this.shape_157.setTransform(29.1,88.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAVA7QgFADgFABIgLABQgSAAgMgLQgLgLAAgSQAAgVALgMQAMgNATAAIAKABQAFACADACQABgaABgLQACgJAIAAQAFAAADADQADADAAAEIgCAiIgCAhQABAcABAKIAAACQAAAEgCADQgEADgEAAQgGAAgDgFgAgPAEQgGAGAAANQAAAJAGAGQAHAGAIAAQAFAAADgCIAHgEIADgDIAAgdQgDgFgEgBQgEgCgGAAQgLAAgFAGg");
	this.shape_158.setTransform(21.8,88.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgaAhQgNgJAAgSQAAgTALgOQALgOASAAQAOAAAJAEQAMAFAAAMQAAAKgKAGIgRAIIgaALQAFAFAEACQAGACAGAAQAKAAAIgFQAGgEAEAAQAIAAAAAJQAAAJgNAFQgLAEgMABQgSAAgMgKgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgCgJAAQgGgBgFAFg");
	this.shape_159.setTransform(5.7,90.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgeApQgCgDgBgEIAAgyIAAgIIABgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAABAVIAAAFQgCAMgKAAQgJAAgBgKIAAgIQgQADgIAPIAAAnQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_160.setTransform(-2.4,90.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgJAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAALQAAAOACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAAKAEAGQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_161.setTransform(-10.8,90.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgVApQgMgFAAgIQAAgHAJAAIALABQAGADAEAAQAPAAAAgGQAAgFgLgEIgTgKQgMgIAAgKQABgQAQgGQAKgDATAAQAIAAAEACQAEADAAAHQABAOgIABQgIgBgBgGIgGAAQgTgBABAGQAAADAKAEIAUALQAMAIAAALQAAAMgNAHQgKAGgNAAQgKAAgJgDg");
	this.shape_162.setTransform(-26.2,90.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBABIAAAYIgBAGIAAAFQAAAFgDACQgDACgFAAQgHABgCgGQgCgEAAgJIAAgcIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADAEAAAEIgBAGQAMgOALABQAMAAAEAJQAFgFAGgCQAGgBAHgBQAPABAFAPIAEAVIAFApQABAFgEADQgDACgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_163.setTransform(-36.1,90.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgeApQgDgDAAgEIAAgyIAAgIIABgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgCAMgJAAQgKAAAAgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgGAAgCgDg");
	this.shape_164.setTransform(-46.2,90.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_165.setTransform(-54.5,90.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgEABQgFAAgEgDQgDgDAAgEQAAgIAIgCIANgBIABgJQADgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgJAAgFAGQgDAFgBALIgBACIAPgBQAPAAAAAKQAAAKgPAAIgQABIAAAUIABAVQAAAOgCAIQgCAJgHAAQgEAAgEgDg");
	this.shape_166.setTransform(-62.8,88.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBABIAAAYIgBAGIAAAFQAAAFgDACQgDACgFAAQgHABgCgGQgCgEAAgJIAAgcIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADAEAAAEIgBAGQAMgOALABQAMAAAEAJQAFgFAGgCQAGgCAHAAQAPABAFAPIAEAVIAFApQABAFgEADQgDACgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_167.setTransform(98.1,66);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgJAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAALQAAAOACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAAKAEAGQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_168.setTransform(87.3,66);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgeApQgCgDAAgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgLAAABgKIAAgIQgRADgIAPIAAAnQAAAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_169.setTransform(79.1,66);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgnAyQAAgFACgCQADgCAFgBIAKACIALABQALAAAFgHQAGgHABgPQgEAEgFACQgFACgFAAQgQAAgJgKQgKgKAAgPQAAgWANgNQANgNAWAAQAHAAAGACQAFACADAEQAKABAAAKIgBAOQgEATAAATQgBAZgIAMQgKAPgZAAQgeAAAAgMgAgLgiQgHAIAAAMQAAAKAEAEQADADAHABQAGgBAGgGQAGgHABgGIAEgYIgGgCIgFgBQgMAAgHAJg");
	this.shape_170.setTransform(70.8,68.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgJAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAALQAAAOACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAAKAEAGQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_171.setTransform(62.2,66);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIgBgOIAAgOIABgSIABgQQAAgFADgDQADgDAFAAQADAAAEADQADADAAAFIgBAQIgBASIAAAOIABAOQAAAFgEADQgDADgDAAQgFAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAFgEADAAQAFAAAEAEQAEADgBAFQABAFgEADQgEADgFAAQgDAAgFgDg");
	this.shape_172.setTransform(55.7,64.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAWA7QgGADgGABIgLABQgRAAgLgLQgMgMAAgRQAAgVAMgMQAMgNARAAIALABQAFACADACQABgaACgLQABgJAJAAQAEAAADADQADADAAAEIgBAiIgCAiQAAAbACAKIAAACQAAAEgEADQgDADgEAAQgFAAgDgFgAgQAEQgFAGAAAOQAAAIAGAGQAHAGAHAAQAFAAAEgCIAHgEIACgDIAAgdQgCgFgEgBQgFgCgFAAQgKAAgHAGg");
	this.shape_173.setTransform(48.4,63.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgOQALgOASAAQAOAAAKADQALAGAAANQAAAJgJAGIgSAIIgZALQAEAFAFACQAFACAGAAQALAAAGgFQAHgDAEgBQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgEAHgFQgGgCgJAAQgGgBgEAFg");
	this.shape_174.setTransform(32.3,66);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgHQgBgCgDAAQgJgBgGAIQgEADgGALQAAAdgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgEIABgFIABgUIAAg0IABgCIAAgNIgBgHIAAgHQAAgFADgDQADgCAEAAQAIAAADAIQABAFAAAJIAAARIgBAPQAGgGAHgDQAFgDAIAAQANAAAGAIQAEAFABALIABATIACAQIACAPIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_175.setTransform(23.4,63.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgGA3QgDgEAAgEIAAgIIAAgJIgBgnIgPgBQgKgCAAgJQAAgEADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEADgDQADgDAFAAQAKAAAAAUIAAAFIAIAAIAMABQAHADAAAGQAAAFgDADQgDADgFAAIgEAAIgEAAIgHABIABAoIAAAEIAAAEQAAASgLAAQgDAAgDgCg");
	this.shape_176.setTransform(14.9,64.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgLAQQgDgDAAgDQAAgCAFgJIAHgMQACgFAFAAQAEAAADADQADACAAADIgFAMIgGALQgDAGgFAAQgEAAgDgDg");
	this.shape_177.setTransform(0.4,70.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgeApQgCgDAAgEIAAgyIAAgIIAAgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgKAAAAgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_178.setTransform(-6.5,66);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAGAAANQAAAJgJAGIgSAIIgZALQADAFAGACQAFACAGAAQAKAAAHgFQAHgDAEgBQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgEAGgFQgFgCgIAAQgHgBgEAFg");
	this.shape_179.setTransform(-15.1,66);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgWA7QgDADgEAAQgFAAgDgDQgDgDAAgEIABgFIAAgGIAAhYQAAgFACgFQADgFAGAAQAJAAAAAJIgBADIAAADIAAAeQAGgDAFgCIAJgBQATAAALANQALAMAAARQAAATgNAMQgMANgSAAQgLAAgJgEgAgIgBQgFABgHAFIAAAhQALAFAHAAQAJAAAHgHQAGgGAAgLQAAgKgFgGQgGgGgJAAQgDAAgFACg");
	this.shape_180.setTransform(-24.2,63.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBABIAAAYIgBAGIAAAFQAAAFgDACQgDACgFAAQgHABgCgGQgCgEAAgJIAAgcIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADAEAAAEIgBAGQAMgOALABQAMAAAEAJQAFgFAGgCQAGgCAHAAQAPABAFAPIAEAVIAFApQABAFgEADQgDACgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_181.setTransform(-35,66);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgaAhQgNgJAAgSQAAgTAKgOQAMgOATAAQANAAAJADQAMAGAAANQAAAJgKAGIgRAIIgaALQAFAFAEACQAGACAGAAQAKAAAIgFQAGgDAEgBQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgMgKgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgCgIAAQgGgBgGAFg");
	this.shape_182.setTransform(-46,66);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBABIAAAYIgBAGIAAAFQAAAFgDACQgDACgFAAQgHABgCgGQgCgEAAgJIAAgcIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADAEAAAEIgBAGQAMgOALABQAMAAAEAJQAFgFAGgCQAGgCAHAAQAPABAFAPIAEAVIAFApQABAFgEADQgDACgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_183.setTransform(-56.4,66);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAGAAANQAAAJgJAGIgSAIIgZALQADAFAGACQAFACAGAAQAKAAAHgFQAHgDAEgBQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgLgKgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgCgIAAQgHgBgFAFg");
	this.shape_184.setTransform(-67.4,66);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgpA6QgEgDAAgEIAAgSIAAgRIAAg+QAAgFAEgEQADgGAIABIATABQALACAHADQAhARAAAZQAAAKgHAHQgHAIgOAFQAVAMAKAMQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgEgEQgYgWgbgIIABAZQAAAEgDADQgDADgFAAQgEAAgDgDgAgXACIADAAQATAAAIgDQAEgCAEgEQADgDAAgCQAAgJgLgIQgJgHgMgCIgJAAg");
	this.shape_185.setTransform(-76.7,64);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgGAGQgDgDAAgDQAAgCADgCQADgDADAAQAEAAADADQADACAAACQAAAEgDACQgDACgEAAQgDAAgDgCg");
	this.shape_186.setTransform(65.3,117.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgQA6QgDgDABgCQgBgEAEgDIAHgEQALgNAAgcQAAgJgDgLQgDgNgFgHIgHgFQgDgFAAgCQgBgDADgDQACgCAEAAIAEACQAMAIAHASQAGARAAAOQAAAsgZAOIgEACQgEAAgCgCg");
	this.shape_187.setTransform(60.7,114.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_188.setTransform(54.2,113.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAFABIADAAQADgCADAAQAGAAACAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgCgDIgFgBQgIAAgIAMQgNAPgBAOQABAGADAFQAFAEAGAAQAFAAAGgDIAJgGQAEgDADAAQADAAACADQACACABAEQgBADgDADQgQANgPAAQgNAAgKgJg");
	this.shape_189.setTransform(46.4,113.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_190.setTransform(39,113.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgZAoQgMgIAAgLQAAgKAJAAQAIAAAAAJQAAAEAGAEQAGAEAFAAQACAAABgHIAAgTIABggIAAgEIgBAAIgGAAIgHAAQgEAAgCgDQgDgBAAgFQAAgHALAAIAGAAIAFAAIALAAIALgBQAQAAAAAJQAAADgDACQgCADgEAAIgDAAIgEgBIgEAAIAAAFQAAApgGATQgFAOgKAAQgLAAgLgIg");
	this.shape_191.setTransform(31.2,113.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgcAtQgDgDAAgEIAAg9IAAgIIAAgHQABgGAKgBIAOgBQALAAAKAGQAMAJAAANQAAAGgDAFQgCAEgFADQAGADAEAFQAFAHAAAFQAAAJgIAGQgGAFgGACQgNAGgUgBQgEAAgDgCgAgPAfQAKgBALgDQALgCgBgEQAAgFgGgDQgFgDgFAAIgPgBgAgPgSIAAAMIAIAAQARgBAAgLQAAgFgFgDQgFgEgGgBIgJAAg");
	this.shape_192.setTransform(23.5,113.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgXAoQgPgMAAgdIAAgIIAAgIIABgHIAAgGQAAgFACgEQACgFAEgBQADAAACACQADADAAADIAAAKIAAAKIAAAIIgBAIQAAAJACAHQADAJAFAEQACABAKABQAOAAAGgaQACgNAAgaIACgFQADgFAEAAQAFAAACAEQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDATgKAOQgEAFgGAEQgIAFgGgBQgQABgHgGg");
	this.shape_193.setTransform(15.1,113.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_194.setTransform(6.6,113.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_195.setTransform(-6.2,114.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_196.setTransform(-12.9,113.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgFApQgCgDAAgDIAAgGIABgGIgBgeIgMgBQgHgBAAgGQAAgDACgCQADgDADAAIAKABIAAgGIAAgGQAAgEACgBQACgDADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFABAAAGQAAAEgDACQgCACgDAAIgDAAIgDgBIgGABIACAeIAAADIAAADQAAAOgJAAQgCAAgDgCg");
	this.shape_197.setTransform(-19.2,113.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_198.setTransform(-30.5,114.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgFApQgCgDAAgDIAAgGIABgGIgBgeIgMgBQgHgBAAgGQAAgDACgCQADgDADAAIAKABIAAgGIAAgGQAAgEACgBQACgDADAAQAIAAAAAPIAAAEIAGAAQAHAAACABQAFABAAAGQAAAEgDACQgCACgDAAIgDAAIgDgBIgGABIACAeIAAADIAAADQAAAOgJAAQgCAAgDgCg");
	this.shape_199.setTransform(-36.3,113.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAOAsQgDgGgGgHIgIgMIgIAFIAAAQQgBADgCADQgCACgEAAQgIAAAAgKIAAgOIABgOIAAgSIABgTIgBgGIAAgGQAAgEACgCQADgCADAAQAEAAACACQACACAAAEIABAGIAAAGIAAAQIgBAQIAYgWQACgCADAAQAEAAACACQADACAAAEQAAACgDADIgQAPIANAQQAIALAAAEQAAAEgDACQgCACgDAAQgFAAgCgEg");
	this.shape_200.setTransform(-47.4,113.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgRAaQgKgIAAgNQAAgKAJgMQAJgPALAAQAHAAAIADQAKAEAAAGQAAACgCADQgDADgDgBQgCAAgEgCQgDgDgIAAQgDAAgFAJQgFAIAAAFQAAAHAEADQAEAEAGAAQAEAAAGgEIAHgDQADABACACQADACAAADQAAAFgKAEQgJAEgGAAQgMAAgIgHg");
	this.shape_201.setTransform(-54.1,114.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AAOAbIgKAEIgGABQgOAAgGgHQgIgIAAgPQAAgNAKgKQALgKANAAQAGAAAHADQAJAEAAAFQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBAGIAAAJQAAAJABAGIADAFIADAGQgBADgCACQgDACgDAAQgCAAgGgFgAgHgLQgHAHABAGQAAAIACAFQADADAGAAQADABADgCQADgBADgCIgCgVIAAgDIABgGIgCgBIgCAAQgGAAgGAGg");
	this.shape_202.setTransform(-60.3,114.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgRAsQgCADgDAAQgDAAgCgDQgCgCAAgCIAAgFIAAgEIAAhCQAAgEACgDQACgEAEgBQAHAAAAAIIAAACIgBACIAAAXIAJgEIAGgBQAOAAAJAKQAHAJAAANQAAANgJAKQgJAKgNAAQgIAAgIgEgAgGAAIgJAEIAAAZQAIADAGAAQAHABAEgGQAFgFAAgHQAAgIgEgFQgEgEgHAAQgCAAgEACg");
	this.shape_203.setTransform(-67.2,113.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgPAfQgKgDABgHQgBgGAIAAIAIACIAHACQALgBAAgFQAAgDgIgDIgPgHQgIgFAAgIQAAgMANgFQAHgCAOAAQAGAAACABQAEACAAAGQAAAKgFAAQgGAAgBgEIgFAAQgNAAAAADQAAADAIAEQALAEAEADQAJAGAAAHQAAALgKAFQgIAEgKAAQgHAAgGgCg");
	this.shape_204.setTransform(-79,114.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgFApQgCgDAAgDIAAgGIAAgGIgBgeIgKgBQgIgBAAgGQAAgDACgCQADgDADAAIAKABIAAgGIAAgGQgBgEADgBQACgDAEAAQAHAAAAAPIAAAEIAGAAQAHAAACABQAFABAAAGQAAAEgCACQgCACgEAAIgDAAIgDgBIgFABIABAeIAAADIAAADQAAAOgJAAQgCAAgDgCg");
	this.shape_205.setTransform(-84.6,113.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgEIAAgGIAAgCIAAgCQAAgGgCAAQgFABgEAGQgFAHgDAJIAAAFIgBAFIAAAFIAAAFQAAADgDADQgCACgDAAQgEAAgCgCQgDgDAAgDIAAgFIAAgFIABgQIAAgPIAAgFIAAgGQAAgDACgCQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAJQADAHAAAMIAAAEIAAADIABAMIABALQAAAEgCACQgDACgDAAQgHAAgBgHg");
	this.shape_206.setTransform(-90.5,114.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgGAqQgDgCAAgDIAAgLIAAgLIAAgMIABgNQAAgDACgCQADgCADAAQADAAACACQACACAAADIAAANIgBAMIAAALIAAALQAAADgCACQgCADgDAAQgDAAgCgDgAgEgdQgDgDAAgDQAAgDADgDQACgDADAAQAEAAADADQACADAAADQAAADgCADQgDADgEAAQgDAAgCgDg");
	this.shape_207.setTransform(-95.3,113.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_208.setTransform(-100.3,114.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgYAvQgCgCAAgEIABgVIAAgXIgBgVIgBgMQAAgFACgDQADgEAEAAQADAAACACQACACAAADIAAABQAEgCAEgBIAHgBQANAAAHALQAEAJABANQgBAMgHAJQgIAJgNAAIgJgBIAAAXQAAAEgDACQgCACgDAAQgEAAgDgCgAgDgbIgHAFIABAXQAFACAEAAQAGAAAEgDQACgEAAgHIgBgLQgBgHgGAAQgEAAgDACg");
	this.shape_209.setTransform(-106.4,116.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_210.setTransform(103,96.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgFIAAgFIAAgCIAAgCQAAgFgCgBQgFAAgEAHQgFAGgDAKIAAAFIgBAFIAAAFIAAAFQAAADgDADQgCACgDAAQgEAAgCgCQgDgDAAgDIAAgEIAAgGIABgQIAAgOIAAgGIAAgGQAAgDACgCQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAKQADAFAAANIAAAEIAAADIABAMIABALQAAAEgCACQgDACgDAAQgHAAgBgHg");
	this.shape_211.setTransform(96.7,96.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgGArQgDgDAAgDIAAgLIAAgKIAAgOIABgLQAAgEACgCQADgDADABQADgBACADQACACAAAEIAAALIgBAOIAAAKIAAALQAAADgCADQgCACgDAAQgDAAgCgCgAgEgdQgDgCAAgEQAAgEADgDQACgCADAAQAEAAADACQACADAAAEQAAAEgCACQgDACgEABQgDgBgCgCg");
	this.shape_212.setTransform(92,94.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgFAuQgCgCAAgEIAAhQQAAgDADgCQACgCACAAQADAAADACQACACAAADIAABNQAAALgIAAQgCAAgDgCg");
	this.shape_213.setTransform(88.5,94.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_214.setTransform(78.2,96.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_215.setTransform(71.6,94.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgFApQgCgDAAgDIAAgGIAAgGIgBgeIgKgBQgIgBAAgGQAAgDACgCQADgDADAAIAKABIAAgHIAAgFQgBgDADgCQACgDAEAAQAHAAAAAOIAAAGIAGgBQAHAAACABQAFACAAAFQAAADgCACQgCADgEAAIgDAAIgDgBIgFABIABAeIAAADIAAAEQAAANgJAAQgCAAgDgCg");
	this.shape_216.setTransform(65.2,95.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgQAuQgDgDAAgDQAAgGANgbIgVgkIgDgEIgBgGQAAgDACgCQADgDADAAQAEAAACAEQAIAKAKAXIAIgRIAIgPQADgFAEAAQADAAADADQACACAAADIgBAEIgUApIgLAZIgDALQgCAFgGABQgDAAgCgCg");
	this.shape_217.setTransform(53.8,97.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_218.setTransform(47.1,94.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAOAhQgIAAgEgOIgDgTIgBACIgJAXIgCAEQgDAEgFAAQgCAAgEgFQgDgFgCgIIgGgfIgBgIQABgDACgDQACgCAEAAQAGAAACAHIABAIIABAIIACAOIAKgdQACgIAGAAQAGAAACAJIAEAQIADAPIAJgjQABgFAHAAQADAAACADQACACABADIAAACQgHAWgGASQgBAGgEAFQgDAEgEAAIgBAAg");
	this.shape_219.setTransform(39.5,96.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgQAeQgIgDgBgGQABgGAGAAIAJACIAHACQALAAAAgGQAAgDgIgDIgOgHQgJgGAAgIQAAgLANgFQAHgCAOAAQAFAAADABQAFACAAAGQAAAKgHAAQgFAAgBgEIgFAAQgNgBAAAEQAAADAHAEQAMAFAEACQAIAGAAAHQAAAKgJAGQgHAEgKAAQgIAAgHgDg");
	this.shape_220.setTransform(27.2,96.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgGArQgDgDAAgDIAAgLIAAgKIAAgOIABgLQAAgEACgCQADgDADABQADgBACADQACACAAAEIAAALIgBAOIAAAKIAAALQAAADgCADQgCACgDAAQgDAAgCgCgAgEgdQgDgCAAgEQAAgEADgDQACgCADAAQAEAAADACQACADAAAEQAAAEgCACQgDACgEABQgDgBgCgCg");
	this.shape_221.setTransform(22.8,94.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgEApQgDgDAAgDIAAgGIABgGIgCgeIgLgBQgHgBAAgGQAAgDACgCQADgDADAAIAKABIgBgHIAAgFQAAgDADgCQACgDADAAQAIAAAAAOIAAAGIAGgBQAHAAACABQAFACAAAFQAAADgDACQgCADgDAAIgDAAIgDgBIgGABIABAeIAAADIAAAEQABANgJAAQgCAAgCgCg");
	this.shape_222.setTransform(13,95.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAOAbIgKAEIgGABQgNAAgHgIQgIgHAAgPQABgNAJgKQALgKANAAQAGAAAIADQAIAEABAEQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAIQAAALABAFIADAGIACAFQAAADgCACQgDACgDAAQgCAAgGgFgAgHgLQgHAGABAIQgBAHADAFQADADAGAAQADAAACgBQAEgBADgCIgCgUIABgFIAAgFIgCgBIgCAAQgGAAgGAGg");
	this.shape_223.setTransform(6.9,96.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_224.setTransform(0.1,94.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgEApQgDgDAAgDIAAgGIABgGIgBgeIgMgBQgHgBAAgGQAAgDACgCQACgDAEAAIAKABIgBgHIAAgFQAAgDADgCQACgDADAAQAIAAAAAOIAAAGIAGgBQAHAAACABQAFACAAAFQAAADgDACQgCADgDAAIgDAAIgDgBIgGABIABAeIAAADIAAAEQABANgJAAQgCAAgCgCg");
	this.shape_225.setTransform(-6.3,95.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AAHA6QgagOABgsQAAgOAGgRQAIgSALgIIAFgCQADAAACACQACADAAADQAAADgDAEIgGAFQgGAHgEANQgBALAAAJQAAANABAKQAEAOAIAFQAIAGgBAEQAAACgCADQgCACgDAAIgFgCg");
	this.shape_226.setTransform(-11.2,95.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_227.setTransform(-22.9,94.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAOgSAPAAIAEABIAEAAQADgCADAAQAHAAABAGIABAMQAAADgCACQgCADgFAAQgFAAgCgFIgDgDIgEgBQgHAAgJAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDACAAQAEAAADADQACACAAAEQAAADgDADQgRANgPAAQgOAAgJgJg");
	this.shape_228.setTransform(-30.7,94.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGABAAAGQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgCQAEAAACADQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_229.setTransform(-38.1,94.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgZApQgMgJAAgLQAAgKAJAAQAIABAAAIQAAAEAGAEQAGAEAFAAQACAAABgHIAAgTIABggIAAgEIgBAAIgGAAIgHAAQgEAAgCgDQgDgCAAgDQAAgIALAAIAGAAIAFAAIALAAIALgBQAQAAAAAJQAAADgDACQgCADgEAAIgDAAIgEAAIgEAAIAAAEQAAApgGATQgFAOgKAAQgLAAgLgHg");
	this.shape_230.setTransform(-45.9,95);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgcAsQgDgDAAgDIAAg9IAAgIIAAgHQABgGAKgCIAOAAQALgBAKAIQAMAIAAAMQAAAHgDAFQgCADgFAEQAGACAEAGQAFAGAAAGQAAAIgIAHQgGAFgGACQgNAGgUgBQgEAAgDgDgAgPAgQAKgCALgDQALgDgBgDQAAgEgGgEQgFgDgFAAIgPgBgAgPgSIAAAMIAIAAQARgBAAgMQAAgEgFgEQgFgDgGAAIgJAAg");
	this.shape_231.setTransform(-53.6,94.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgXAoQgPgMAAgdIABgIIAAgIIAAgHIAAgHQAAgEABgEQADgGAEAAQADABACACQAEACAAADIAAAKIgBAKIAAAIIAAAIQAAAIACAIQACAJAFAEQACABAKABQAOAAAFgaQADgOABgYIABgGQADgEAFgBQADABACADQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAYgCAMQgDATgKANQgEAGgGAEQgIAFgGAAQgPAAgIgGg");
	this.shape_232.setTransform(-62,95);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgfAmQgHgFAAgIQAAgDACgDQADgCADAAQAGAAACAFQAEAIALAAQAJAAAKgFQAKgEAAgGQAAgHgHgCQgEgCgMAAQgKgBgIgDQgLgEAAgJQAAgMAMgJQAMgKAOAAQAGAAAIADQALADAAAEQAAAEgDACQgCADgEAAIgIgCIgIgBQgIAAgFAEQgHADAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQACACAEAAIAOABQANABAIAHQAIAGAAAMQAAAPgRAIQgNAGgQAAQgPAAgJgHg");
	this.shape_233.setTransform(-70.5,95);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_234.setTransform(-83.3,96.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_235.setTransform(-90,94.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgFApQgCgDAAgDIAAgGIAAgGIgBgeIgKgBQgIgBAAgGQAAgDACgCQADgDADAAIAKABIAAgHIAAgFQgBgDADgCQACgDAEAAQAHAAAAAOIAAAGIAGgBQAHAAACABQAFACAAAFQAAADgCACQgCADgEAAIgDAAIgDgBIgFABIABAeIAAADIAAAEQAAANgJAAQgCAAgDgCg");
	this.shape_236.setTransform(-96.3,95.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgQAuQgDgDAAgDQAAgGANgbIgVgkIgDgEIgBgGQAAgDACgCQADgDADAAQAEAAACAEQAIAKAKAXIAIgRIAIgPQADgFAEAAQADAAADADQACACAAADIgBAEIgUApIgLAZIgDALQgCAFgGABQgDAAgCgCg");
	this.shape_237.setTransform(-107.8,97.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgKAxQgDgCAAgDIAAgBIACgQIAAgcIgEAAIgDAAQgEAAgCgCQgDgCAAgDQAAgGAGgCIAKAAIABgIQACgMAFgHQAGgHAOgBQALAAAAAIQAAAHgKABQgHAAgEAEQgCAFgBAHIAAACIALgBQALAAAAAIQAAAHgLAAIgMABIAAAOIABAQQAAALgCAGQgBAHgGAAQgDAAgCgDg");
	this.shape_238.setTransform(-114.2,94.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgGArQgDgDAAgDIAAgLIAAgKIAAgOIABgLQAAgEACgCQADgDADABQADgBACADQACACAAAEIAAALIgBAOIAAAKIAAALQAAADgCADQgCACgDAAQgDAAgCgCgAgEgdQgDgCAAgEQAAgEADgDQACgCADAAQAEAAADACQACADAAAEQAAAEgCACQgDACgEABQgDgBgCgCg");
	this.shape_239.setTransform(-118.7,94.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AAQAtIgIACIgIABQgNAAgJgIQgJgJAAgNQAAgQAJgJQAJgJAOAAIAIABQADAAACADIACgcQABgHAHAAQAEAAACADQABACAAADIgBAZIgBAZIABAcIAAACQAAADgCACQgDACgDAAQgEAAgCgDgAgLADQgFAFABAKQgBAGAFAEQAFAFAGAAIAGgBIAGgEIABgCIAAgVQgCgDgDgCQgDgBgEAAQgIgBgEAFg");
	this.shape_240.setTransform(-124.1,94.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_241.setTransform(-130.7,96.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgFAiQgCgCAAgEIgBgTIgBgTIgBgGQgHAEgHAJIgBABIAAASIAAAEIAAAEQgBAEgCABQgCACgEAAQgEAAgDgEIgBgKIAAgUIAAgJIAAgJQAAgFACgEQACgFAEAAQAEAAACACQACADABADIgBAFQAJgKAIAAQAJAAADAGQADgDAFgBQAFgCAEAAQAMAAAEAMIACAPIAFAfQAAADgDADQgCACgDAAQgHAAgBgHIgCgRIgDgQQgBgLgCAAIgHADIgHAFIACASIACATQAAAEgCACQgDACgDAAQgDAAgDgCg");
	this.shape_242.setTransform(-138.3,96.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEAAACACQADACAAAEQAAAFgIABIgOACIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_243.setTransform(132.7,76);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgMAqQgHgRgJgfIgFgQQgDgLAAgFQAAgDADgCQADgCACAAQAGAAADAFIABALIAHATIAIAcIANgiIAFgOQAEgJAEgEQACgDADAAQAEAAADACQACACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgGALIgEAMIgQAoIgGAOQgCAEgEAAQgHAAgCgFg");
	this.shape_244.setTransform(124.8,76.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_245.setTransform(117.4,76.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_246.setTransform(110,76);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAFABIADAAQADgCADAAQAGAAACAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgCgDIgFgBQgIAAgIAMQgOAPAAAOQABAGADAFQAFAEAGAAQAFAAAGgDIAJgGQAEgDADAAQADAAACADQACACABAEQgBADgDADQgQANgPAAQgNAAgKgJg");
	this.shape_247.setTransform(102.2,76);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEAAACACQADACAAAEQAAAFgIABIgOACIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_248.setTransform(94.8,76);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgZApQgMgJAAgLQAAgKAJABQAIAAAAAJQAAADAGAEQAGAEAFAAQACAAABgHIAAgTIABggIAAgEIgBAAIgGAAIgHAAQgEAAgCgCQgDgDAAgDQAAgIALAAIAGAAIAFAAIALgBIALAAQAQAAAAAJQAAADgDADQgCACgEAAIgDAAIgEAAIgEAAIAAAEQAAApgGATQgFAOgKAAQgLAAgLgHg");
	this.shape_249.setTransform(87,76.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgSAvQgGgCgEgCQgEAAgCgDQgCgCAAgDIAAgRIABgSIAAgTIgBgTQAAgDADgDQADgEAEAAIAKAEIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAGgRAAIgKgBgAgUAeIAGACIAGAAQAMABAFgEQAGgDADgGQADgGAAgGQAAgNgRgLQgFgDgTgJg");
	this.shape_250.setTransform(78.8,76.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAUAhIgFgQIgOABIgNACIgJATQgDAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAJgRIgBgEQAAgDAFgBQAJgOAKgPQAOgWADAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgDACQgCACgEAAQgEAAgFgLgAgDAFIAGgBIAJAAIgEgTIgLAUg");
	this.shape_251.setTransform(69.8,76.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEAAACACQADACAAAEQAAAFgIABIgOACIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_252.setTransform(56.7,76);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_253.setTransform(48.6,76);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AAVAhIgGgQIgOABIgNACIgJATQgDAFgFAAQgDAAgDgDQgCgCAAgDQAAgDAIgRIgBgEQABgDAGgBQAHgOALgPQANgWAEAAQAHAAACAHIADATIAJAmIADAIIACAHQAAAEgDACQgCACgDAAQgFAAgEgLgAgDAFIAHgBIAIAAIgEgTIgLAUg");
	this.shape_254.setTransform(40,76.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAPgSAOAAIAFABIADAAQADgCADAAQAGAAACAGIABAMQAAADgCACQgCADgFAAQgEAAgDgFIgCgDIgFgBQgIAAgIAMQgNAPgBAOQAAAGAEAFQAFAEAGAAQAFAAAGgDIAJgGQAEgDADAAQADAAACADQACACABAEQgBADgDADQgQANgPAAQgNAAgKgJg");
	this.shape_255.setTransform(32,76);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_256.setTransform(24.9,76.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgSAvQgGgCgEgCQgEAAgCgDQgCgCAAgDIAAgRIABgSIAAgTIgBgTQAAgDADgDQADgEAEAAIAKAEIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAGgRAAIgKgBgAgUAeIAGACIAGAAQAMABAFgEQAGgDADgGQADgGAAgGQAAgNgRgLQgFgDgTgJg");
	this.shape_257.setTransform(17.6,76.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEAAACACQADACAAAEQAAAFgIABIgOACIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_258.setTransform(9.4,76);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgfAsQgCgCAAgEIAAgNIAAgNIAAguQAAgEACgDQADgEAGAAIAOABQAIABAFADQAZANAAATQAAAHgGAFQgEAGgLAEQAPAJAIAJQACACAAADQAAADgCADQgDACgDAAQgDAAgDgDQgSgQgUgHIABATQAAAEgDACQgCACgDAAQgEAAgCgCgAgSACIADAAQAPAAAFgDIAGgEIACgDQAAgHgIgGQgHgGgJgBIgHAAg");
	this.shape_259.setTransform(1.8,76);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_260.setTransform(-5.4,75.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAQAsIgIAEIgIAAQgNAAgJgIQgJgIABgOQAAgPAJgKQAIgJANAAIAIABQAEABADACIABgcQABgHAHAAQAEAAABACQADACAAAEIgCAaIgBAYIABAcIABACQAAADgDACQgCACgDAAQgFAAgCgEgAgLADQgFAFAAAKQAAAGAFAEQAFAFAGAAIAGgBIAFgEIACgCIAAgVQgBgEgEgBQgDgCgEAAQgIABgEAEg");
	this.shape_261.setTransform(-17.4,75.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AAMAbIgCgMIgBgMIABgFIAAgEIAAgDIAAgDQAAgEgCAAQgFgBgEAHQgFAGgDAJIAAAGIgBAFIAAAFIAAAFQAAADgDADQgCACgDAAQgEAAgCgCQgDgDAAgDIAAgEIAAgGIABgPIAAgPIAAgGIAAgFQAAgDACgDQADgCADAAQAIAAAAAJIAAABQAJgJAIAAQAMAAAEAKQADAGAAAMIAAAEIAAADIABAMIABALQAAAEgCACQgDACgDAAQgHAAgBgHg");
	this.shape_262.setTransform(-23.9,77.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAOAbIgJAEIgHABQgOAAgGgIQgIgHABgPQgBgNAKgKQALgKAOAAQAFAAAHADQAKADgBAFQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAFIAAAIQAAALABAEIADAHIADAFQAAADgDACQgCACgDAAQgDAAgGgFgAgIgLQgFAGAAAIQAAAHACAEQADAFAGAAQACAAAEgCQADgBADgDIgCgTIAAgFIABgFIgCgBIgBAAQgIAAgGAGg");
	this.shape_263.setTransform(-30.3,77.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgpAtQgCgCAAgDIABgIIAAgHIAAgKIAAgKIAAgKIAAgMIgBgKIAAgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIAAgmIgBgGIgBgHQAAgIAJAAQAJAAAAAeIAAAJIAAAkIgBAJQgCAIgHAAQgEAAgFgFQgWgUgcgkIAAASIAAAOIAAAOQAAARgJAAQgEAAgDgDg");
	this.shape_264.setTransform(-43.8,76.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgWAoQgQgMAAgcIAAgIIAAgJIABgHIAAgHQAAgEABgEQADgGAEABQADAAADACQACACAAADIAAAKIAAAKIAAAIIAAAJQAAAHABAIQADAJAFAEQADABAIABQAPAAAGgbQADgMAAgZIABgHQADgDAFAAQADAAADACQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAYgCAMQgDATgKANQgEAGgGAEQgHAEgIABQgPgBgGgFg");
	this.shape_265.setTransform(-53.2,76.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgeAkQgNgKAAgRQAAgTAMgRQAOgSAVAAQAUAAAKAJQAKAKAAATQAAASgLARQgNASgVAAQgRAAgMgKgAgSgQQgJALAAAOQAAAJAIAHQAHAFALAAQAMAAAJgMQAIgMAAgNQAAgNgGgFQgFgEgNAAQgNAAgJANg");
	this.shape_266.setTransform(-62.4,76.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgoAtQgCgCAAgDIAAgIIAAgHIABgKIAAgKIAAgKIAAgMIgBgKIgBgLQAAgDADgDQADgDAEAAQAEAAAGAIQAZAmAaAXIAAgJIAAgmIgCgGIAAgHQAAgIAIAAQAKAAAAAeIAAAJIgBAkIgBAJQgBAIgHAAQgEAAgFgFQgXgUgbgkIAAASIAAAOIAAAOQAAARgIAAQgFAAgCgDg");
	this.shape_267.setTransform(-72,76.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEAAACACQADACAAAEQAAAFgIABIgOACIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_268.setTransform(-85.7,76);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_269.setTransform(-93.7,76);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAUAhIgFgQIgOABIgOACIgJATQgCAFgFAAQgDAAgCgDQgDgCAAgDQAAgDAIgRIgBgEQABgDAFgBQAJgOAKgPQANgWAEAAQAGAAACAHIAEATIAJAmIADAIIACAHQAAAEgCACQgDACgEAAQgEAAgFgLgAgEAFIAHgBIAJAAIgEgTIgMAUg");
	this.shape_270.setTransform(-102.4,76.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgaAkQgIgKAAgMQAAgTARgUQAOgSAPAAIAEABIAEAAQADgCADAAQAHAAABAGIABAMQAAADgCACQgCADgFAAQgFAAgCgFIgDgDIgEgBQgHAAgJAMQgOAPAAAOQAAAGAFAFQAEAEAGAAQAFAAAFgDIAJgGQAFgDACAAQAEAAADADQACACAAAEQAAADgDADQgRANgPAAQgOAAgJgJg");
	this.shape_271.setTransform(-110.3,76);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgbArQgCgDAAgDQAAgDACgDQADgCAEAAIALgBIAAgaIABgeIgNABQgDAAgDgDQgCgCAAgDQAAgEACgCQACgCADAAIASgBQAKAAARADQAHABAAAHQAAAEgCACIgFABIgQgBIgBAcIAAAaIAQAAQAEAAACACQACACAAAEQAAADgCACQgCADgEAAIgKAAIgKAAIgLABIgMABQgDAAgDgCg");
	this.shape_272.setTransform(-117.5,76.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgSAvQgGgCgEgCQgEAAgCgDQgCgCAAgDIAAgRIABgSIAAgTIgBgTQAAgDADgDQADgEAEAAIAKAEIAKAFQARAFAMAMQAOAOAAAQQAAAKgFAJQgFAJgIAGQgKAGgRAAIgKgBgAgUAeIAGACIAGAAQAMABAFgEQAGgDADgGQADgGAAgGQAAgNgRgLQgFgDgTgJg");
	this.shape_273.setTransform(-124.8,76.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgaAtQgHgGAAgTIABgWIACgYIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIANgDIALgBQAPAAAIAEQAGACAAAFQAAADgCACQgDADgDAAIgDgBQgJgCgJAAIgJAAIgKADIgBAXIAWgCIAOgBQAEAAACACQADACAAAEQAAAFgIABIgOACIgYACIAAAMQAAAMABABQABABAGAAIAKAAIALAAIAEgBIADAAQAEAAACACQADACAAAEQAAAGgHABQgGACgRAAQgUAAgFgFg");
	this.shape_274.setTransform(-132.9,76);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AggAsQgCgCAAgEIAAgNIAAgNIAAguQABgEACgDQADgEAFAAIAPABQAIABAFADQAZANAAATQAAAHgFAFQgGAGgKAEQAPAJAIAJQADACAAADQAAADgDADQgDACgDAAQgDAAgDgDQgSgQgUgHIABATQAAAEgCACQgDACgDAAQgEAAgDgCgAgRACIACAAQAPAAAFgDIAGgEIACgDQABgHgJgGQgHgGgIgBIgHAAg");
	this.shape_275.setTransform(-140.5,76);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgaAsQgCgCAAgDIAAgQIABgaIACgbQAAgPAIAAIAGgBIAIAAQALAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgFgBIAAAbQAAADgCACQgDADgDAAQgDAAgDgDgAgKgWIgBAUIAEAAQAIAAAGgEQAHgEAAgIQAAgFgGgEQgGgEgGAAIgDAAIgDAAIAAAJg");
	this.shape_276.setTransform(-147.7,75.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_277.setTransform(-159.6,77.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAOArIgDgNIgBgOIAAgEIAAgFIAAgFQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgFAFIgHALQAAAWgCAEQgCAFgFAAQgDAAgDgDQgDgCAAgDIABgDIABgQIAAgmIAAgCIAAgJIAAgGIgBgFQAAgDADgCQACgDADAAQAGAAACAHIABAKIAAAMIAAAMQAEgFAFgCQAEgCAFAAQAKAAAFAGQADAEABAIIAAAOIABAMIACALIABACQAAAEgDACQgCACgEAAQgFAAgCgGg");
	this.shape_278.setTransform(-166.2,75.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgFArQgCgDAAgDIAAgDIAAgCIAAgIIAAgIIgCgVIgBgVIgDAAQgNAAgIgCQgHgBAAgHQAAgDACgCQADgDAEAAIAJABIAKABIAKAAIAKAAIANABIAOAAQADAAADACQACADAAADQAAADgCADQgDACgDAAIgPgBIgOAAIACAYIABAWIAAAGIABAGQAAAFgCADQgCAFgFAAQgCAAgDgCg");
	this.shape_279.setTransform(-173.9,76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]},175).to({state:[]},153).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},40).to({state:[]},52).to({state:[{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186}]},21).to({state:[]},173).wait(4));

	// Layer 16
	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(0.1,1,1).p("AORDNQlnBVn7AAQn7AAlnhVQlchTgKhzIhegrIBxgQQA/hXEUhBQFnhVH7AAQH7AAFnBVQFnBVAAB3QAAB4lnBVg");
	this.shape_280.setTransform(77.8,38.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AszDNQlchTgKhzIhegsIBxgPQA/hXEUhBQFnhVH7AAQH7AAFnBVQFnBVAAB3QAAB4lnBVQlnBVn7AAQn7AAlnhVg");
	this.shape_281.setTransform(77.8,38.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(0.1,1,1).p("AWnlEQo4iHslAAQskAAo5CHQooCDgQC3IiVBGICzAZQBlCIG1BoQI5CHMkAAQMlAAI4iHQI6iHAAi+QAAi9o6iHg");
	this.shape_282.setTransform(93.3,83.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("ABKHMQskAAo5iHQm1hohliIIizgZICVhGQAQi3IoiDQI5iHMkAAQMlAAI4CHQI6CHAAC9QAAC+o6CHQo4CHslAAIAAAAg");
	this.shape_283.setTransform(93.3,83.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(0.1,1,1).p("ATwkbQnwh2q/AAQq+AAnyB2QniBygOCgIiCA9ICcAWQBZB3F9BbQHyB2K+AAQK/AAHwh2QHyh2AAimQAAilnyh2g");
	this.shape_284.setTransform(67.8,84.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AxvEcQl9hbhZh3IicgWICCg9QAOigHihyQHyh2K+AAQK/AAHwB2QHyB2AAClQAACmnyB2QnwB2q/AAQq+AAnyh2g");
	this.shape_285.setTransform(67.8,84.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(0.1,1,1).p("AT/A7QhGBfkwBIQmNBeovAAQowAAmLheQmNheAAiEQAAiDGNheQGLheIwAAQIvAAGNBeQGABbALB/IBoAwg");
	this.shape_286.setTransform(13.5,76.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgzFAQowAAmLheQmNheAAiEQAAiDGNheQGLheIwAAQIvAAGNBeQGABbALB/IBoAxIh9ARQhGBfkwBIQmMBeovAAIgBAAg");
	this.shape_287.setTransform(13.5,76.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(0.1,1,1).p("AeJA5IirAYQhhCDmiBjQogCBsBAAQsCAAofiBQohiBAAi2QAAi1IhiAQIfiBMCgBQMBABIgCBQIQB8AQCvg");
	this.shape_288.setTransform(-15,88.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AhGG4QsCAAofiBQohiBAAi2QAAi1IhiAQIfiBMCgBQMBABIgCBQIQB8AQCvICOBDIirAYQhhCDmiBjQofCBr/AAIgDAAg");
	this.shape_289.setTransform(-15,88.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_281},{t:this.shape_280}]}).to({state:[]},20).to({state:[{t:this.shape_283},{t:this.shape_282}]},27).to({state:[]},65).to({state:[{t:this.shape_285},{t:this.shape_284}]},63).to({state:[]},153).to({state:[{t:this.shape_287},{t:this.shape_286}]},40).to({state:[]},52).to({state:[{t:this.shape_289},{t:this.shape_288}]},21).to({state:[]},173).wait(4));

	// Layer 29
	this.instance_3 = new lib.arrow_motion();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122.1,227.7,0.628,0.628,0,0,180,-19.9,329.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(175).to({_off:false},0).to({_off:true},60).wait(47).to({_off:false},0).to({_off:true},46).wait(113).to({_off:false,regX:-19.8,scaleX:0.7,scaleY:0.7,skewY:0,x:33.1,y:242.7},0).to({_off:true},91).wait(48).to({_off:false,x:44.1,y:249.7},0).to({_off:true},34).wait(4));

	// Layer 19
	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFF00").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_290.setTransform(108.8,-56);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFF00").s().p("AgkAzQgNgNAAgSQAAgbAZgdQAUgZAVAAIAHABIAFAAQADgDAGAAQAJAAACAKIAAAQQABAEgCADQgEAFgGAAQgHAAgEgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAJAAQAGAAAJgFIANgIQAGgEADAAQAFAAAEAEQAEADAAAEQAAAFgFAEQgXATgWAAQgTAAgNgNg");
	this.shape_291.setTransform(97.7,-55.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFF00").s().p("AgmBAQgJgJAAgbIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAFQAAAJgLACIgUACIgiACIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEADQAEAEAAAFQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_292.setTransform(87.3,-55.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFF00").s().p("AgjA5QgRgMAAgQQAAgMALAAQAMAAAAAMQAAAFAJAGQAIAFAHABQADgBACgKIABgaIABguIAAgGIgCAAIgJAAIgKAAQgFAAgDgDQgEgEAAgEQAAgMAPAAIAIAAIAIAAIAPAAIAQgBQAWAAAAANQAAAEgDAEQgDADgFAAIgFAAIgFAAIgHAAIAAAGQAAA6gIAbQgGAUgQAAQgPAAgPgLg");
	this.shape_293.setTransform(76.2,-55.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFF00").s().p("AgoA/QgEgEAAgFIAAhXIgBgLIABgLQABgIANgBQAHgCAOAAQAPAAAOAKQARAMAAARQAAAKgDAHQgDAFgHAFQAIAEAGAIQAIAJAAAIQAAALgNAKQgIAHgIADQgTAHgdAAQgFAAgEgEgAgWAsQAPAAAPgFQAPgEAAgFQAAgGgKgFQgHgEgGgBIgWgBgAgWgrIABARIgBASIAMAAQAYgCAAgRQAAgFgHgGQgHgGgJAAIgNABg");
	this.shape_294.setTransform(65.4,-56);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFF00").s().p("AgrA0QgTgPAAgZQAAgbASgXQAUgbAdABQAdAAAOANQAPANAAAbQAAAbgRAXQgSAageAAQgYAAgRgNgAgagYQgMARAAATQAAAOALAJQAKAIAPAAQASAAAMgSQALgQAAgUQAAgRgIgIQgHgGgTAAQgSAAgNASg");
	this.shape_295.setTransform(52.9,-55.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFF00").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_296.setTransform(33,-56);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFF00").s().p("AgkAzQgMgNAAgSQgBgbAZgdQAVgZAUAAIAHABIAFAAQAEgDAFAAQAJAAACAKIABAQQAAAEgCADQgEAFgGAAQgIAAgDgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAJAAQAGAAAJgFIANgIQAHgEACAAQAFAAAEAEQAEADgBAEQABAFgFAEQgXATgWAAQgTAAgNgNg");
	this.shape_297.setTransform(21.9,-55.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFF00").s().p("AgmBAQgJgJAAgbIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAFQAAAJgLACIgUACIgiACIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEADQAEAEAAAFQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_298.setTransform(11.5,-55.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFF00").s().p("AgsA+QgEgDAAgFIAAgTIAAgSIAAhCQAAgGAEgEQAEgGAHABIAVABQAMACAHAEQAkASgBAaQABALgIAHQgHAJgQAFQAWANAMAMQADAEAAAEQAAAFgDADQgEADgFAAQgFAAgDgDQgagYgcgJIABAbQgBAFgDADQgEADgEAAQgFAAgDgDgAgZACIADAAQAVAAAJgEQAEgCADgDQAEgEAAgCQAAgJgLgJQgLgIgMgBIgKgBg");
	this.shape_299.setTransform(0.7,-55.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFF00").s().p("AgnA9QgDgEAAgEQAAgFAEgEQADgDAGAAIAPgCIAAglQAAgVACgVIgSABQgFgBgDgDQgEgDAAgFQAAgEADgEQADgCAFgBIAYgBQAPABAZADQAKABAAALQAAAFgEADQgDACgEABIgWgDQgBAPAAAYIAAAmIAWgBQAFABAEADQADADAAAFQAAAEgEAEQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_300.setTransform(-9.7,-55.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFF00").s().p("AgZBDQgKgCgFgDQgFgBgEgDQgDgEAAgEIABgZIABgZIgBgbIAAgbQAAgEAEgFQAFgFAFAAQACABAMAEIAPAIQAXAHARARQAVAUAAAWQAAAOgHANQgHAOgNAIQgNAJgYAAIgOgCgAgcAqQADACAEABIAKABQAQAAAIgEQAIgGAEgIQAEgHAAgKQAAgTgYgPQgHgFgagLg");
	this.shape_301.setTransform(-20,-55.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFF00").s().p("AgsA2QgKgHAAgLQAAgFADgEQADgDAGAAQAHAAAEAIQAEAKARAAQANAAAOgHQANgGAAgHQAAgLgIgDQgGgDgSAAQgOAAgMgFQgPgGAAgNQABgRARgMQARgOATgBQAIAAAMAFQAPAEAAAGQAAAFgDADQgDADgFAAIgMgBIgMgCQgLAAgIAFQgKAGAAAGQAAACADADQADACAGAAIAUACQATABAKAJQAMAJAAASQAAAVgYALQgTAJgXgBQgVAAgMgJg");
	this.shape_302.setTransform(253.1,-55.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFF00").s().p("AgRA7QgKgYgNgsIgHgXQgEgQAAgGQAAgEADgEQAEgDAFAAQAHAAAEAJIADAOIAIAaIAMAqIATgyIAHgUQAFgLAGgHQADgEAGAAQAEAAAEADQADAEAAAFQAAADgCADQgEAHgEAIIgGARIgWA5IgKAUQgDAGgGAAQgJAAgDgIg");
	this.shape_303.setTransform(231,-55.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFF00").s().p("AgkAzQgNgNAAgSQAAgbAZgdQAUgZAVAAIAHABIAFAAQADgDAGAAQAJAAACAKIAAAQQAAAEgBADQgEAFgGAAQgHAAgEgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAJAAQAGAAAJgFIANgIQAGgEADAAQAFAAAEAEQAEADAAAEQAAAFgFAEQgXATgWAAQgTAAgNgNg");
	this.shape_304.setTransform(198.9,-55.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFF00").s().p("AAdAvQgFgJgDgOIgTADQgNAAgGACIgOAbQgEAGgGAAQgFAAgEgDQgDgEAAgEQAAgFAMgYIgBgEQAAgEAIgDQAMgUAPgVQATggAFABQAJAAADALIAGAaIAMA2IAEAKQADAIAAADQAAAFgEADQgDADgFABQgGgBgHgPgAgFAHIAKgBIAMgBIgGgbIgQAdg");
	this.shape_305.setTransform(153.2,-55.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFF00").s().p("AgmBAQgJgJAAgbIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAFQAAAJgLACIgUACIgiACIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEADQAEAEAAAFQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_306.setTransform(134.7,-55.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFF00").s().p("AAdAvQgEgJgDgOIgUADQgMAAgIACIgNAbQgDAGgHAAQgEAAgEgDQgEgEAAgEQAAgFAMgYIgBgEQAAgEAIgDQAMgUAOgVQAUggAFABQAJAAADALIAFAaIANA2IAEAKQADAIAAADQAAAFgEADQgDADgFABQgGgBgHgPgAgFAHIAKgBIAMgBIgFgbIgRAdg");
	this.shape_307.setTransform(111.1,-55.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFF00").s().p("AgkAzQgNgNAAgSQAAgbAZgdQAVgZAUAAIAHABIAFAAQADgDAGAAQAIAAACAKIABAQQAAAEgCADQgDAFgGAAQgHAAgEgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAIAAQAIAAAIgFIANgIQAGgEAEAAQAFAAADAEQADADABAEQgBAFgEAEQgXATgXAAQgSAAgNgNg");
	this.shape_308.setTransform(99.8,-55.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFF00").s().p("AgnA9QgDgEAAgEQAAgFAEgEQADgDAGAAIAPgCIAAglQAAgVACgVIgSABQgFgBgDgDQgEgDAAgFQAAgEADgEQADgCAFgBIAYgBQAPABAZADQAKABAAALQAAAFgEADQgDACgEABIgWgDQgBAPAAAYIAAAmIAWgBQAFABAEADQADADAAAFQAAAEgEAEQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_309.setTransform(89.7,-55.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFF00").s().p("AgZBDQgKgCgFgDQgFgBgEgDQgDgEAAgEIABgZIABgZIgBgbIAAgbQAAgEAEgFQAFgFAFAAQACABAMAEIAPAIQAXAHARARQAVAUAAAWQAAAOgHANQgHAOgNAIQgNAJgYAAIgOgCgAgcAqQADACAEABIAKABQAQAAAIgEQAIgGAEgIQAEgHAAgKQAAgTgYgPQgHgFgagLg");
	this.shape_310.setTransform(79.4,-55.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFF00").s().p("AgmBAQgJgJAAgbIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAFQAAAJgLACIgUACIgiACIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEADQAEAEAAAFQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_311.setTransform(67.9,-55.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFF00").s().p("AgtA+QgDgDAAgFIABgTIAAgSIAAhCQAAgGADgEQAEgGAIABIAUABQAMACAHAEQAjASAAAaQAAALgHAHQgIAJgOAFQAVANAMAMQADAEAAAEQAAAFgEADQgDADgFAAQgEAAgEgDQgZgYgegJIACAbQAAAFgEADQgEADgEAAQgFAAgEgDgAgZACIAEAAQAUAAAJgEQAEgCADgDQAEgEAAgCQAAgJgMgJQgKgIgMgBIgKgBg");
	this.shape_312.setTransform(57.1,-55.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFF00").s().p("AglA/QgDgDAAgEIAAgYIACglIACgmQAAgWAMABIAHgBIANAAQAPAAAOAKQAQAMAAARQAAAVgRAMQgPALgTAAIgHgBIgBAnQAAAEgDADQgDADgFAAQgFAAgDgDgAgOgrIgBALIgBAdIAGABQALAAAJgHQAJgGAAgLQAAgHgIgFQgJgGgIAAIgFAAIgDABg");
	this.shape_313.setTransform(46.9,-56.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFF00").s().p("AAXA/QgGADgGABIgLABQgTAAgMgMQgNgMAAgTQAAgWANgNQANgNATAAIALABIAIAEIADgnQABgKAKAAQAFAAADADQADADAAAFIgCAkIgCAjQAAAeACAKIAAADQAAAEgDADQgEADgEAAQgGAAgDgFgAgQAEQgGAHAAAOQAAAJAGAGQAHAHAJAAQAFAAADgCIAIgFIADgDIAAgeQgDgFgEgCQgFgCgGAAQgLAAgGAGg");
	this.shape_314.setTransform(29.9,-56.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFF00").s().p("AARAmIgCgRIgCgRIABgHIAAgHIAAgDIABgEQAAgHgEAAQgHAAgGAJQgGAKgFANIgBAHIAAAIIgBAHIAAAHQAAAFgDADQgEADgEAAQgFAAgDgDQgEgDAAgFIAAgHIgBgHIACgXIABgVIgBgIIAAgIQAAgEADgDQAEgDAFAAQALAAAAANIAAABQANgNAMAAQAPAAAHANQADAJAAASIAAAGIAAAEIACARQACAKAAAGQAAAFgEADQgDADgFAAQgKAAgBgKg");
	this.shape_315.setTransform(20.7,-53.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFF00").s().p("AAUAmQgHAEgGACQgGACgDAAQgUAAgKgLQgKgLAAgVQAAgTAPgPQAOgNAUAAQAIAAAKADQANAGAAAHQAAADgCACIgBAIIgBAMQAAAPACAHIAEAJIADAIQAAAEgDACQgDAEgFAAQgDAAgJgIgAgLgQQgIAJAAAKQAAAMAEAFQAEAGAIAAQAEAAAFgCQAEgBAEgEQgCgTAAgJIAAgGIABgIIgDgBIgCgBQgKAAgJAJg");
	this.shape_316.setTransform(11.4,-53.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFF00").s().p("AgsA2QgKgHAAgLQAAgFADgEQADgDAGAAQAHAAAEAIQAEAKARAAQANAAAOgHQANgGAAgHQAAgLgIgDQgGgDgSAAQgOAAgMgFQgPgGAAgNQABgRARgMQARgOATgBQAIAAAMAFQAPAEAAAGQAAAFgDADQgDADgFAAIgMgBIgMgCQgLAAgIAFQgKAGAAAGQAAACADADQADACAGAAIAUACQATABAKAJQAMAJAAASQAAAVgYALQgTAJgXgBQgVAAgMgJg");
	this.shape_317.setTransform(-6.6,-55.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFF00").s().p("Ag6BAQgDgDAAgFIABgKIAAgLIABgOIAAgPIAAgPIAAgPIgBgPIgBgPQAAgFADgEQAFgDAFgBQAHAAAHALQAkA1AmAiIAAgNIgBg2IgBgJIgBgKQAAgKAMgBQANAAAAAqIAAANIgBAzIgBANQgCAMgKAAQgGAAgHgHQgggdgngzIgBAaIABATIAAAUQAAAZgMgBQgGAAgEgDg");
	this.shape_318.setTransform(-19.3,-55.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFF00").s().p("AghA5QgVgRAAgpIAAgMIABgMIAAgJIAAgKQAAgGACgGQAEgIAFAAQAFAAADADQAEADAAAFIAAAOIAAAOIAAAMIgBAMQAAALADALQAEANAGAFQAEADANAAQAVAAAHglQAEgTAAgjQAAgFADgEQAEgGAHAAQAFAAADAEQACAEAAADQAAAhgDASQgEAcgOASQgGAJgJAFQgKAHgKAAQgVAAgLgIg");
	this.shape_319.setTransform(-32.7,-55.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFF00").s().p("Ag5BAQgEgDAAgFIAAgKIABgLIAAgOIABgPIgBgPIAAgPIgBgPIgBgPQAAgFAFgEQAEgDAGgBQAFAAAIALQAlA1AlAiIAAgNQAAgogCgOIgBgJIAAgKQAAgKAMgBQANAAAAAqIAAANIgBAzIAAANQgCAMgLAAQgFAAgIgHQgggdgngzIgBAaIABATIAAAUQAAAZgMgBQgGAAgDgDg");
	this.shape_320.setTransform(-59.2,-55.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFF00").s().p("AgmBAQgJgJAAgbIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAFQAAAJgLACIgUACIgiACIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEADQAEAEAAAFQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_321.setTransform(-78.6,-55.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFF00").s().p("AgHA9QgEgEAAgFIAAgDIABgEIgBgLIAAgMQAAgLgCgSIgDgeIgEAAQgSAAgLgDQgJgCAAgJQAAgEADgDQADgEAGAAIANABIANABIAPAAIAOAAIATABIATABQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAIgUgBIgUgBIACAiIACAhIABAIIAAAJQAAAGgDAFQgDAGgGAAQgEAAgDgCg");
	this.shape_322.setTransform(-89.9,-56);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFF00").s().p("AAdAvQgEgJgEgOIgUADQgMAAgGACIgOAbQgEAGgGAAQgFAAgEgDQgDgEAAgEQAAgFAMgYIgBgEQABgEAHgDQAMgUAOgVQAUggAFABQAJAAADALIAGAaIAMA2IAEAKQADAIAAADQAAAFgDADQgEADgEABQgIgBgGgPgAgGAHIALgBIAMgBIgGgbIgRAdg");
	this.shape_323.setTransform(-102.2,-55.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFF00").s().p("AgkAzQgMgNAAgSQgBgbAZgdQAVgZAUAAIAHABIAFAAQADgDAGAAQAJAAACAKIABAQQAAAEgCADQgEAFgGAAQgHAAgEgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAJAAQAGAAAJgFIANgIQAGgEADAAQAFAAAEAEQADADAAAEQABAFgFAEQgXATgWAAQgTAAgNgNg");
	this.shape_324.setTransform(-113.5,-55.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFF00").s().p("AgnA9QgDgEAAgEQAAgFAEgEQADgDAGAAIAPgCIAAglQAAgVACgVIgSABQgFgBgDgDQgEgDAAgFQAAgEADgEQADgCAFgBIAYgBQAPABAZADQAKABAAALQAAAFgEADQgDACgEABIgWgDQgBAPAAAYIAAAmIAWgBQAFABAEADQADADAAAFQAAAEgEAEQgDADgFAAIgOABIgOAAIgQABIgRABQgFAAgEgCg");
	this.shape_325.setTransform(-123.6,-55.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFF00").s().p("AgZBDQgKgCgFgDQgFgBgEgDQgDgEAAgEIABgZIABgZIgBgbIAAgbQAAgEAEgFQAFgFAFAAQACABAMAEIAPAIQAXAHARARQAVAUAAAWQAAAOgHANQgHAOgNAIQgNAJgYAAIgOgCgAgcAqQADACAEABIAKABQAQAAAIgEQAIgGAEgIQAEgHAAgKQAAgTgYgPQgHgFgagLg");
	this.shape_326.setTransform(-133.9,-55.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFF00").s().p("AgmBAQgJgJAAgbIACggIABghIgBgIIAAgJQAAgNALAAQAEAAADACIASgEIAQgBQAVABAMAEQAIADAAAIQAAAEgDAEQgEADgFAAIgDAAQgOgEgMAAIgNABIgPADIgBAhIAggEIAUgBQAFAAADADQAEADAAAFQAAAJgLACIgUACIgiACIgBARQAAARACACQABABAKAAIAOAAIAQgBIAFAAIAEgBQAFAAAEADQAEAEAAAFQAAAJgKACQgIACgaAAQgbgBgIgGg");
	this.shape_327.setTransform(-145.4,-55.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFF00").s().p("AgsA+QgEgDAAgFIABgTIAAgSIAAhCQAAgGADgEQAEgGAHABIAVABQAMACAHAEQAkASAAAaQAAALgIAHQgIAJgPAFQAXANALAMQADAEAAAEQAAAFgEADQgDADgFAAQgFAAgEgDQgZgYgdgJIABAbQAAAFgDADQgDADgFAAQgFAAgDgDgAgZACIADAAQAVAAAJgEQAEgCAEgDQADgEAAgCQAAgJgLgJQgLgIgMgBIgKgBg");
	this.shape_328.setTransform(-156.2,-55.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFF00").s().p("AglA/QgDgDAAgEIAAgYIACglIACgmQAAgWAMABIAHgBIANAAQAPAAAOAKQAQAMAAARQAAAVgRAMQgPALgTAAIgHgBIgBAnQAAAEgDADQgDADgFAAQgFAAgDgDgAgOgrIgBALIgBAdIAGABQALAAAJgHQAJgGAAgLQAAgHgIgFQgJgGgIAAIgFAAIgDABg");
	this.shape_329.setTransform(-166.3,-56.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_301,p:{x:-20}},{t:this.shape_300,p:{x:-9.7}},{t:this.shape_299},{t:this.shape_298,p:{x:11.5}},{t:this.shape_297},{t:this.shape_296,p:{x:33}},{t:this.shape_295,p:{x:52.9}},{t:this.shape_294},{t:this.shape_293,p:{x:76.2}},{t:this.shape_292,p:{x:87.3}},{t:this.shape_291},{t:this.shape_290,p:{x:108.8}}]},130).to({state:[]},3).to({state:[{t:this.shape_301,p:{x:-20}},{t:this.shape_300,p:{x:-9.7}},{t:this.shape_299},{t:this.shape_298,p:{x:11.5}},{t:this.shape_297},{t:this.shape_296,p:{x:33}},{t:this.shape_295,p:{x:52.9}},{t:this.shape_294},{t:this.shape_293,p:{x:76.2}},{t:this.shape_292,p:{x:87.3}},{t:this.shape_291},{t:this.shape_290,p:{x:108.8}}]},3).to({state:[]},3).to({state:[{t:this.shape_301,p:{x:-20}},{t:this.shape_300,p:{x:-9.7}},{t:this.shape_299},{t:this.shape_298,p:{x:11.5}},{t:this.shape_297},{t:this.shape_296,p:{x:33}},{t:this.shape_295,p:{x:52.9}},{t:this.shape_294},{t:this.shape_293,p:{x:76.2}},{t:this.shape_292,p:{x:87.3}},{t:this.shape_291},{t:this.shape_290,p:{x:108.8}}]},3).to({state:[]},186).to({state:[{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_295,p:{x:-45.6}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_296,p:{x:123.3}},{t:this.shape_306},{t:this.shape_305},{t:this.shape_301,p:{x:165.9}},{t:this.shape_293,p:{x:177.4}},{t:this.shape_298,p:{x:188.5}},{t:this.shape_304},{t:this.shape_290,p:{x:210.1}},{t:this.shape_300,p:{x:220.4}},{t:this.shape_303},{t:this.shape_292,p:{x:242.1}},{t:this.shape_302}]},22).to({state:[]},3).to({state:[{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_295,p:{x:-45.6}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_296,p:{x:123.3}},{t:this.shape_306},{t:this.shape_305},{t:this.shape_301,p:{x:165.9}},{t:this.shape_293,p:{x:177.4}},{t:this.shape_298,p:{x:188.5}},{t:this.shape_304},{t:this.shape_290,p:{x:210.1}},{t:this.shape_300,p:{x:220.4}},{t:this.shape_303},{t:this.shape_292,p:{x:242.1}},{t:this.shape_302}]},3).to({state:[]},3).to({state:[{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_295,p:{x:-45.6}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_296,p:{x:123.3}},{t:this.shape_306},{t:this.shape_305},{t:this.shape_301,p:{x:165.9}},{t:this.shape_293,p:{x:177.4}},{t:this.shape_298,p:{x:188.5}},{t:this.shape_304},{t:this.shape_290,p:{x:210.1}},{t:this.shape_300,p:{x:220.4}},{t:this.shape_303},{t:this.shape_292,p:{x:242.1}},{t:this.shape_302}]},3).to({state:[]},252).wait(4));

	// Layer 22
	this.instance_4 = new lib.Tween13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-237.9,4);
	this.instance_4._off = true;

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#0000FF").s().p("AgRA4QgDgDAAgFQAAgDAPgbIgQgXIgXglIgCgFQAAgFAEgCQADgDAEAAQAFAAAEAFIAFAJIANAVQAHANAFAIIAQgiIAHgQQADgGAGAAQAEAAAEACQADADAAAFQAAACgEAJIgPAhIgQAhIgMAWQgEAGgGAAQgEAAgDgCg");
	this.shape_330.setTransform(-49.8,4.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#0000FF").s().p("AglA7QgCgEAAgDIAAhTIAAgJIAAgJQAAgEADgDQADgDAEAAIAFABIAPgCIAMgBQAJAAAMAEQAQAEAAAGQAAAEgDADQgDADgEAAIgEAAQgJgEgOAAIgJABIgNACIAAAXQALgCAIAAQAMAAAKABQAKABAAAJQAAAEgDACQgDADgFAAIgLgBIgKAAQgGAAgNAEIAAAuQAAADgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_331.setTransform(-58.7,4.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#0000FF").s().p("AglA7QgCgEAAgDIAAhTIAAgJIAAgJQAAgEADgDQADgDAEAAIAFABIAPgCIAMgBQAJAAAMAEQAQAEAAAGQAAAEgDADQgDADgEAAIgEAAQgJgEgOAAIgJABIgNACIAAAXQALgCAIAAQAMAAAKABQAKABAAAJQAAAEgDACQgDADgFAAIgLgBIgKAAQgGAAgNAEIAAAuQAAADgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_332.setTransform(-67.8,4.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#0000FF").s().p("AgcAyQgUgPAAgkIABgKIAAgLIAAgIIAAgJQAAgFACgFQADgHAFAAQAFAAADACQADADAAAEIgBANIAAAMIAAALIAAAKQAAAKACAKQAEALAFAFQAEACALAAQATAAAGghQAEgQAAgfQAAgEACgEQADgFAHAAQAFAAACAEQACACAAAEQAAAcgDARQgEAYgMAQQgFAHgIAFQgJAGgJAAQgSAAgJgHg");
	this.shape_333.setTransform(-78.1,4.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#0000FF").s().p("AgjA4QgDgEAAgEIAAhNIgBgKQAAgFABgEQABgHALgCQAGgBANAAQANAAAMAJQAPAKAAAQQAAAIgDAGQgCAFgGAEQAHADAFAHQAGAIAAAIQAAAJgKAJQgHAGgIADQgQAGgaAAQgFAAgDgDgAgTAnQANAAAOgFQANgDgBgFQAAgFgIgFQgGgDgGgBIgTAAgAgTgXIAAAQIAKAAQAWgCAAgOQAAgGgHgEQgGgFgHAAIgMAAg");
	this.shape_334.setTransform(-88.1,4.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#0000FF").s().p("AghA4QgIgHAAgYIABgdIABgdIAAgHIgBgIQAAgLAKAAQAEAAACABIAQgCIAOgBQASAAALADQAHADAAAHQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAHgJABIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_335.setTransform(-57.7,4.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#0000FF").s().p("AAgA4QgEgDAAgEIAAgQIgBgQIAAgHQgLABgQACIgcAFIgBAQIgBAQQAAADgDADQgDACgEAAQgEAAgDgCQgDgDAAgEIACgWIABgVIAAgaIABgcQAAgEACgCQADgDAEgBQAFABADADQACACAAAFIAAAQIAAAQIgBAIIAAAHIAcgFQAPgDAMAAIABgbQAAgGAEgHQAEgKAFAAQAEAAADADQADADAAAFIAAACIgBAJIgBAGIAAAGIgBAVIgBAUIABAQIABAQQAAAEgDADQgDACgEAAQgEAAgDgCg");
	this.shape_336.setTransform(-68.2,4.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#0000FF").s().p("AgnAwQgJgHAAgJQAAgFADgDQADgDAFAAQAGAAADAHQAFAJAOAAQAMAAAMgFQAMgHAAgGQAAgJgIgDQgFgDgPABQgNgBgKgEQgOgFABgMQAAgOAPgMQAPgMARAAQAHAAALAEQANAEAAAFQAAADgDADQgDAEgEAAIgLgBIgKgCQgKAAgHAFQgJAEAAAGQAAACADACIAIADIARABQARAAAJAJQALAIAAAPQAAATgWAKQgQAHgUAAQgTAAgLgIg");
	this.shape_337.setTransform(-79.3,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},144).to({state:[{t:this.instance_4}]},4).to({state:[]},87).to({state:[{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330}]},5).to({state:[]},3).to({state:[{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330}]},3).to({state:[]},3).to({state:[{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330}]},3).to({state:[]},76).to({state:[{t:this.instance_4}]},92).to({state:[{t:this.instance_4}]},4).to({state:[]},108).to({state:[{t:this.shape_337},{t:this.shape_336},{t:this.shape_335}]},4).to({state:[]},3).to({state:[{t:this.shape_337},{t:this.shape_336},{t:this.shape_335}]},3).to({state:[]},3).to({state:[{t:this.shape_337},{t:this.shape_336},{t:this.shape_335}]},3).to({state:[]},66).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144).to({_off:false},0).to({x:-72.9},4).to({_off:true},87).wait(185).to({_off:false,x:-237.9},0).to({x:-72.9},4).to({_off:true},108).wait(86));

	// Layer 23
	this.instance_5 = new lib.Tween15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-254.9,4);
	this.instance_5._off = true;

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FF0000").s().p("AgnAwQgJgHAAgJQAAgFADgDQADgDAFAAQAGAAADAHQAFAJAOAAQAMAAAMgFQAMgHAAgGQAAgJgIgDQgFgDgPABQgNgBgKgEQgOgFABgMQAAgOAPgMQAPgMARAAQAHAAALAEQANAEAAAFQAAADgDADQgDAEgEAAIgLgBIgKgCQgKAAgHAFQgJAEAAAGQAAACADACIAIADIARABQARAAAJAJQALAIAAAPQAAATgWAKQgQAHgUAAQgTAAgLgIg");
	this.shape_338.setTransform(71.6,4.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FF0000").s().p("AAPA6QgEgEAAgDIgFgPIgIguQgEAOgGAMQgIARgDAKIABAEQAAAEgEADQgDACgFABQgFAAgEgDQgDgDgBgFIgCgJIgIgiIgQgxIgBgDQAAgEAEgDQADgCAEAAQAGAAADAEIAEAJQAHAWAJAmQAGgPAGgSIAIgWQAIgQAGAAQAHAAAEAIIADANIACAPQABANAIAfIAVgzIAEgNQACgIADgFQADgFAGAAQAFAAADACQADADAAAFIgDAIIgDAHIgEANIgNAeIgOAfIgFAMQgEAHgHAAQgEAAgDgCg");
	this.shape_339.setTransform(58.6,4.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FF0000").s().p("AgmAtQgQgNAAgVQAAgYAPgVQASgXAZAAQAaAAANAMQAMAMAAAXQAAAYgOAUQgRAYgZAAQgWAAgPgNgAgXgVQgLAPAAARQAAAMAKAIQAJAHAOAAQAPAAALgQQAKgOAAgSQAAgPgHgGQgHgGgRAAQgPAAgMAQg");
	this.shape_340.setTransform(44.7,4.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FF0000").s().p("AgnA3QgDgDAAgEIAAgRIAAgQIAAg6QAAgFADgEQAEgFAHABIASABQAKABAGAEQAgAQAAAXQAAAKgHAGQgHAHgNAFQAUALAKAMQACADAAADQAAAEgDADQgDADgEAAQgEAAgEgDQgWgVgZgIIAAAYQAAAEgCADQgDADgFAAQgEAAgDgDgAgWACIADAAQASAAAIgDIAHgFQADgDAAgCQAAgIgKgIQgJgHgLgBIgJgBg");
	this.shape_341.setTransform(34.1,4.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FF0000").s().p("AAgA4QgEgDAAgEIAAgQIgBgQIAAgHQgLABgQACIgcAFIgBAQIgBAQQAAADgDADQgDACgEAAQgEAAgDgCQgDgDAAgEIACgWIABgVIAAgaIABgcQAAgEACgCQADgDAEgBQAFABADADQACACAAAFIAAAQIAAAQIgBAIIAAAHIAcgFQAPgDAMAAIABgbQAAgGAEgHQAEgKAFAAQAEAAADADQADADAAAFIAAACIgBAJIgBAGIAAAGIgBAVIgBAUIABAQIABAQQAAAEgDADQgDACgEAAQgEAAgDgCg");
	this.shape_342.setTransform(23.6,4.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FF0000").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_343.setTransform(12.5,4.5);

	this.instance_6 = new lib.Tween15_v2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-254.9,-17);
	this.instance_6._off = true;

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FF0000").s().p("AgiA1QgDgDAAgEQAAgEADgDQADgCAFgBIAOgBIAAghQAAgTACgSIgQAAQgFAAgDgCQgDgDAAgFQAAgEADgDQADgCAEgBIAVAAQANAAAWADQAJACAAAIQAAAFgDACQgDADgEAAIgTgCIgBAiIAAAiIAUAAQAEAAADACQADADAAAFQAAAEgDADQgDACgFAAIgMAAIgNAAIgNACIgPABQgFAAgDgDg");
	this.shape_344.setTransform(36.7,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},148).to({state:[{t:this.instance_5}]},4).to({state:[]},83).to({state:[{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338,p:{x:71.6}}]},20).to({state:[]},3).to({state:[{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338,p:{x:71.6}}]},3).to({state:[]},3).to({state:[{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338,p:{x:71.6}}]},3).to({state:[]},61).to({state:[{t:this.instance_6}]},96).to({state:[{t:this.instance_6}]},4).to({state:[]},104).to({state:[{t:this.shape_344},{t:this.shape_338,p:{x:46.1}}]},19).to({state:[]},3).to({state:[{t:this.shape_344},{t:this.shape_338,p:{x:46.1}}]},3).to({state:[]},3).to({state:[{t:this.shape_344},{t:this.shape_338,p:{x:46.1}}]},3).to({state:[]},51).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(148).to({_off:false},0).to({x:44.1},4).to({_off:true},83).wait(383));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(424).to({_off:false},0).to({x:33.1,y:-20},4).to({_off:true},104).wait(86));

	// Layer 24
	this.instance_7 = new lib.Tween17("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-261.6,5);
	this.instance_7._off = true;

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgHAHQgEgDAAgEQAAgDAEgDQAEgDADAAQAFAAAEADQADADAAADQAAAEgDADQgEADgFAAQgDAAgEgDg");
	this.shape_345.setTransform(194.4,9.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgmAsIACgXQABgfAAgnQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAngCAgIgCASQASAAAagJIADAAQAFAAACAEQADADAAADQAAAHgGACQgJAEgSADQgPADgLAAQgSAAAAgQg");
	this.shape_346.setTransform(187.3,4.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgmAsIABgXQACgfAAgnQABgEADgDQACgDAFAAQAEAAADADQADADAAAEQAAAngCAgIgCASQASAAAagJIADAAQAFAAACAEQADADAAADQAAAHgGACQgJAEgSADQgQADgKAAQgSAAAAgQg");
	this.shape_347.setTransform(179,4.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AAlA3QgFAAgGgNQgEgJgDgLIgSACIgQABIgMAZQgDAFgGAAQgEAAgDgDQgEgDAAgEQAAgEALgVIgBgEQABgEAGgCIAXgkQASgcAEAAQAIAAADAKIAEAXIALAwIAEAJQADAGAAAEQAAAEgDADQgDACgEAAIgBAAgAgFAHIAJgBIALgBIgFgYIgPAag");
	this.shape_348.setTransform(169.1,4.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgjA4QgDgEAAgEIAAhNIgBgKQAAgFABgEQABgHALgCQAGgBANAAQANAAAMAJQAPAKAAAQQAAAIgDAGQgCAFgGAEQAHADAFAHQAGAIAAAIQAAAJgKAJQgHAGgIADQgQAGgaAAQgFAAgDgDgAgTAnQANAAAOgFQANgDgBgFQAAgFgIgFQgGgDgGgBIgTAAgAgTgXIAAAQIAKAAQAWgCAAgOQAAgGgHgEQgGgFgHAAIgMAAg");
	this.shape_349.setTransform(159.2,4.4);

	this.instance_8 = new lib.Tween17_v2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-261.6,-19);
	this.instance_8._off = true;

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgzA4QgDgDAAgEIABgJIAAgJIABgNIAAgNIAAgMIAAgOIgBgNIgBgOQAAgEAEgDQADgEAFAAQAGAAAGAKQAgAvAhAdIAAgLIgBgwIgBgIIAAgIQAAgKAKAAQAMAAAAAlIAAALIAAAuIgCALQgBAKgJAAQgGAAgGgGQgcgZgjgtIAAAWIAAARIAAASQAAAWgKAAQgFAAgEgEg");
	this.shape_350.setTransform(224.9,4.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgiA1QgDgDAAgEQAAgEADgDQADgCAFgBIAOgBIAAghQAAgTACgSIgQAAQgFAAgDgCQgDgDAAgFQAAgEADgDQADgCAEgBIAVAAQANAAAWADQAJACAAAIQAAAFgDACQgDADgEAAIgTgCIgBAiIAAAiIAUAAQAEAAADACQADADAAAFQAAAEgDADQgDACgFAAIgMAAIgNAAIgNACIgPABQgFAAgDgDg");
	this.shape_351.setTransform(214.6,4.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_352.setTransform(194.4,4.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AggA3QgDgCAAgEIAAgVIABggIACgiQAAgTALABIAHgBIAKgBQANABANAIQAOALAAAPQAAATgPAKQgNAKgSAAIgGgBIAAAiQAAAEgDACQgCADgFAAQgDAAgDgDgAgNgcIgBAZIAEABQALAAAHgFQAJgHAAgJQAAgGgIgFQgHgFgHAAIgFAAIgDAAIAAALg");
	this.shape_353.setTransform(185.2,4.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AAlA3QgFAAgGgNQgEgJgDgLIgSACIgQABIgMAZQgDAFgGAAQgEAAgDgDQgEgDAAgEQAAgEALgVIgBgEQABgEAGgCIAXgkQASgcAEAAQAIAAADAKIAEAXIALAwIAEAJQADAGAAAEQAAAEgDADQgDACgEAAIgBAAgAgFAHIAJgBIALgBIgFgYIgPAag");
	this.shape_354.setTransform(175.6,4.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AggAsQgLgLAAgQQAAgXAWgaQASgWASAAIAGABIAFAAQADgDAEAAQAIAAACAJIABAOQAAAEgCADQgDAEgFAAQgHAAgDgHQgCgEgBAAIgGgBQgJAAgLAPQgRATAAARQAAAIAFAGQAGAGAHAAQAGAAAIgEIALgHQAGgEADAAQAEAAADADQADADAAAEQAAAEgEAEQgUARgUAAQgQAAgMgNg");
	this.shape_355.setTransform(165.6,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},152).to({state:[{t:this.instance_7}]},4).to({state:[]},79).to({state:[{t:this.shape_349},{t:this.shape_348,p:{x:169.1}},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345}]},35).to({state:[]},3).to({state:[{t:this.shape_349},{t:this.shape_348,p:{x:169.1}},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345}]},3).to({state:[]},3).to({state:[{t:this.shape_349},{t:this.shape_348,p:{x:169.1}},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345}]},3).to({state:[]},46).to({state:[{t:this.instance_8}]},100).to({state:[{t:this.instance_8}]},4).to({state:[]},100).to({state:[{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_348,p:{x:205}},{t:this.shape_351},{t:this.shape_350}]},34).to({state:[]},3).to({state:[{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_348,p:{x:205}},{t:this.shape_351},{t:this.shape_350}]},3).to({state:[]},3).to({state:[{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_348,p:{x:205}},{t:this.shape_351},{t:this.shape_350}]},3).to({state:[]},36).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(152).to({_off:false},0).to({x:202.9},4).to({_off:true},79).wait(383));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(428).to({_off:false},0).to({x:191.4,y:-22},4).to({_off:true},100).wait(86));

	// Layer 14
	this.instance_9 = new lib.doog();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-75.1,59.5,1,1,0,0,180,0.5,-0.1);

	this.instance_10 = new lib.doogbody();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-110.1,91.5,0.572,0.572,0,0,0,0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_9}]},20).to({state:[{t:this.instance_9}]},12).to({state:[{t:this.instance_10}]},1).to({state:[]},295).to({state:[]},286).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({scaleX:0.57,scaleY:0.57,x:-110.1,y:91.5},12).to({_off:true,skewY:0},1).wait(585));

	// Layer 1
	this.instance_11 = new lib.Dynamo_motion();
	this.instance_11.parent = this;
	this.instance_11.setTransform(370.6,-114.6,0.143,0.143,0,0,0,86.4,21.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({_off:false},0).to({scaleX:0.32,scaleY:0.32,x:-307.5,y:-63.6},13).wait(1).to({skewY:180,x:-47.7,y:32.5},0).to({scaleX:0.57,scaleY:0.57,x:507.4,y:20.4},17).wait(277).to({scaleX:0.32,scaleY:0.32,x:-314.6,y:28.5},0).to({scaleX:0.57,scaleY:0.57,x:507.4,y:20.4},16).to({_off:true},268).wait(4));

	// Layer 5
	this.instance_12 = new lib.Tween3_v1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-102,26.4,1,1,0,0,0,-11,0);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween3_v2("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-102,26.4,1,1,0,0,0,-11,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(43).to({_off:false},0).to({regY:1,scaleX:13.26,x:-102.6,y:27.4},4).to({_off:true},281).wait(290));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(336).to({_off:false},0).to({regY:1,scaleX:13.26,x:-102.6,y:27.4},4).to({startPosition:0},7).to({_off:true},267).wait(4));

	// Layer 28
	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(1,1,1).p("AlPlPQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLQiLiLAAjFQAAjECLiLg");
	this.shape_356.setTransform(101.5,-5.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(255,255,255,0.502)").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
	this.shape_357.setTransform(101.5,-5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_357},{t:this.shape_356}]},388).to({state:[]},3).to({state:[{t:this.shape_357},{t:this.shape_356}]},3).to({state:[]},3).to({state:[{t:this.shape_357},{t:this.shape_356}]},3).to({state:[]},20).to({state:[]},194).wait(4));

	// Layer 2
	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(0.3,1,1).p("EAjjgWkMAAAAtJMhHFAAAMAAAgtJg");
	this.shape_358.setTransform(46.5,-9.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#FFFFFF","#FF3366"],[0,1],0,227.5,0,-227.4).s().p("EgjiAWlMAAAgtJMBHFAAAMAAAAtJg");
	this.shape_359.setTransform(46.5,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_359},{t:this.shape_358}]}).wait(618));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182,-154.6,457,302);


// stage content:
(lib.diag_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4repeat:608});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		*/
		playSound("heyyouarediagramming");
	}
	this.frame_40 = function() {
		playSound("thediagramformsaredifferentfor");
	}
	this.frame_177 = function() {
		playSound("thedirectobjectreceivestheaction");
	}
	this.frame_246 = function() {
		playSound("buffythrowstheball1");
	}
	this.frame_360 = function() {
		playSound("rememberthediagramformsaredifferent2");
	}
	this.frame_440 = function() {
		playSound("predicatenounandpredicateadjectivemodifythesubject");
	}
	this.frame_548 = function() {
		playSound("sheiscaptain");
	}
	this.frame_607 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_619 = function() {
		/* gotoAndPlay("scene4repeat");
		stopAllSounds();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(137).call(this.frame_177).wait(69).call(this.frame_246).wait(114).call(this.frame_360).wait(80).call(this.frame_440).wait(108).call(this.frame_548).wait(59).call(this.frame_607).wait(12).call(this.frame_619).wait(1));

	// main
	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(4,1,1).p("EAjoAWlMhHPAAAMAAAgtJMBHPAAAg");
	this.shape_360.setTransform(274,187.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_360).wait(620));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggGAaBMAAAgtnMBHZAAAMAAAAtng");
	mask.setTransform(251.5,166.5);

	// Layer 1
	this.instance_14 = new lib.Scene4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(228,196.7);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(620));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(620));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '51ECAF188834E34F938CB4459AE96B9B',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmDia.mp3", id:"bgmDia"},
		{src:"sounds/blips_2times.mp3", id:"blips_2times"},
		{src:"sounds/blips_3times.mp3", id:"blips_3times"},
		{src:"sounds/buffythrowstheball1.mp3", id:"buffythrowstheball1"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/Flying.mp3", id:"Flying"},
		{src:"sounds/heyyouarediagramming.mp3", id:"heyyouarediagramming"},
		{src:"sounds/high_blip.mp3", id:"high_blip"},
		{src:"sounds/predicatenounandpredicateadjectivemodifythesubject.mp3", id:"predicatenounandpredicateadjectivemodifythesubject"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/rememberthediagramformsaredifferent2.mp3", id:"rememberthediagramformsaredifferent2"},
		{src:"sounds/sheiscaptain.mp3", id:"sheiscaptain"},
		{src:"sounds/thediagramformsaredifferentfor.mp3", id:"thediagramformsaredifferentfor"},
		{src:"sounds/thedirectobjectreceivestheaction.mp3", id:"thedirectobjectreceivestheaction"},
		{src:"sounds/ZoomingSound.mp3", id:"ZoomingSound"}
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
an.compositions['51ECAF188834E34F938CB4459AE96B9B'] = {
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