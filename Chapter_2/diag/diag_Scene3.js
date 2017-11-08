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


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAHQgDgDAAgEQAAgCADgDQADgDAEAAQAFAAADACQADADAAADQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape.setTransform(163.4,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgHIAAgHIgBgjIgMgBQgJgBAAgIQAAgDADgDQACgDAEAAIAMABIAAgHIgBgHQAAgEADgDQADgCAEAAQAJAAgBARIAAAGIAIgBQAHAAADABQAGACAAAHQAAAEgDACQgDADgEAAIgDAAIgDAAIgHAAIABAjIAAADIAAAEQABAQgLAAQgCAAgDgDg");
	this.shape_1.setTransform(157.1,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgDAAQgEAAgEgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIAAgGQAAgEACgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIACAOIABAOQAAAEgDACQgDADgDAAQgJAAgBgJg");
	this.shape_2.setTransform(150.2,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAKgMQAKgNAQAAQAMAAAHAEQALAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_3.setTransform(142.4,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEACgCQADgDAEAAQAHAAACAIQALgJAOAAQAPAAAAASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_4.setTransform(135.4,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAKgMQAJgNARAAQALAAAJAEQAKAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAFAAQAJAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgKAAQgQAAgKgHgAgJgPQgEAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgFAFg");
	this.shape_5.setTransform(127.8,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_6.setTransform(120.4,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_7.setTransform(113.3,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAyQgDgDABgEIAAgMIgBgNIABgPIABgOQgBgEADgDQADgCAEAAQADAAADACQACADAAAEIAAAOIgBAPIAAANIABAMQAAAEgDADQgDACgDAAQgEAAgDgCgAgGgiQgDgDAAgEQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgDAAgEgDg");
	this.shape_8.setTransform(108.1,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAzQgFADgFACIgJAAQgPAAgLgJQgKgLAAgPQAAgSAKgLQALgLAQAAIAJABQAEABADADIACghQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAdQAAAYABAIIAAADQAAADgCACQgDADgEAAQgFAAgCgFgAgNADQgFAGAAAMQAAAHAFAFQAGAFAHABIAHgBIAGgFIACgCIAAgZQgCgFgDgBQgEgCgFAAQgJABgFAEg");
	this.shape_9.setTransform(101.7,11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAQAAQAMAAAHAEQAKAFAAAKQAAAIgIAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_10.setTransform(87.6,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEADgCQABgDAFAAQAHAAACAIQALgJAOAAQAOAAABASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgFAAQgEAAgCgCg");
	this.shape_11.setTransform(80.6,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AARAfIgMAFIgGACQgRAAgIgJQgJgJABgSQgBgPAMgMQAMgMAQAAQAHAAAIAEQALAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIADAGQgBAEgCACQgDADgDAAQgDAAgHgHgAgJgNQgGAHgBAJQAAAJADAFQAEAEAGAAIAHgBIAHgEIgBgYIAAgFIAAgGIgBgBIgCAAQgJAAgHAHg");
	this.shape_12.setTransform(73.2,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_13.setTransform(58.4,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA0QgEgDAAgFIAAhHIgBgJIABgJQABgHALgBQAFgCAMAAQAMAAAMAJQAOAJAAAPQAAAIgDAFQgCAFgGAEQAHADAFAHQAGAHgBAHQABAJgKAIQgHAGgHACQgPAGgZABQgDAAgDgEgAgSAlQANgBAMgEQAMgDAAgFQAAgEgHgFQgGgDgGAAIgSgBgAgSgkIAAAPIAAAOIAKABQAUgCAAgOQAAgEgGgFQgGgFgHAAIgLAAg");
	this.shape_14.setTransform(49.3,11.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAzQgDgDAAgEIAAgPIAAgPIAAg3QAAgEADgEQADgEAHAAIARACQAJABAGADQAdAPAAAWQAAAJgGAFQgHAHgMAFQASAKAKALQACACAAAEQAAAEgDACQgCADgFAAQgDAAgEgDQgUgTgYgIIABAWQAAAEgDADQgDADgEAAQgEAAgCgDgAgVACIAEAAQAQAAAIgDIAGgFQADgDAAgBQAAgIgKgHQgIgHgLgBIgIAAg");
	this.shape_15.setTransform(40.4,11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_16.setTransform(31.5,11.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAxQgJgUgJglIgGgSQgEgNAAgFQAAgEADgDQADgCAEAAQAGAAADAHIADALIAGAXIALAhIAPgoIAFgRQAFgJAEgGQADgDAEAAQAEAAADADQADACAAAEIgBAGQgEAFgEAHIgEAOIgTAuQgDAJgEAIQgEAFgEAAQgHAAgDgGg");
	this.shape_17.setTransform(22.3,11.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_18.setTransform(7.3,11.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBAAgBQgBAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_19.setTransform(-1.5,11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgvA1QgDgDAAgEIABgIIAAgJIABgMIAAgMIAAgMIAAgNIgCgMIgBgMQAAgEAEgEQADgDAFAAQAGAAAGAJQAdAsAfAbIAAgKIgBgtIgBgHIgBgIQAAgJALAAQAKAAABAiIAAALIgBAqIgBALQgBAJgJAAQgFAAgGgFQgagYgggqIAAAVIAAAQIAAAQQAAAVgKAAQgFAAgDgDg");
	this.shape_20.setTransform(-11.6,11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_21.setTransform(-21.5,11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_22.setTransform(-30.9,11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_23.setTransform(-40.7,11.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggAyQgCgDAAgEQAAgEADgDQACgCAFAAIANgBIAAgfQAAgSABgRIgPABQgEAAgDgDQgCgDAAgEQAAgEACgCQADgCADgBIAVAAQAMAAAUACQAIACAAAIQAAAEgDADQgDACgDAAIgSgCIgBAgIAAAfIATAAQAEAAADADQACACAAAEQAAAEgDADQgCACgFAAIgLABIgMAAIgNABIgOABQgEAAgDgCg");
	this.shape_24.setTransform(-49.4,11.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAUAnIgJgNIgJgMIgVAYIgMANQgDADgEAAQgEAAgDgDQgCgDgBgDQAAgEACgCIANgOIAYgZIgOgSIgIgKIgJgJQgDgDAAgEQAAgEACgDQADgDAEAAQADAAAHAFIAHAIIAJALIALAPIASgWQANgRAFAAQADAAAEADQACADAAAEQAAADgCADIgOARIgRAVIAPAUIAPATQACADAAAEQAAADgCADQgEADgDAAQgIAAgKgQg");
	this.shape_25.setTransform(-58.4,11.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_26.setTransform(-67.5,11.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AATAzQgFADgFACIgJAAQgPAAgLgJQgKgLAAgPQAAgSAKgLQALgLAQAAIAJABQAEABADADIACghQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAdQAAAYABAIIAAADQAAADgCACQgDADgEAAQgFAAgCgFgAgNADQgFAGAAAMQAAAHAFAFQAGAFAHABIAHgBIAGgFIACgCIAAgZQgCgFgDgBQgEgCgFAAQgJABgFAEg");
	this.shape_27.setTransform(-82.3,11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgEAHQgGAIgDAKIgBAGIAAAHIAAAFIgBAGQAAAEgDADQgCADgEAAQgFAAgCgDQgDgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIAAgGQAAgEADgCQACgDAEAAQAJAAABALIAAABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIACAOIABAOQAAAEgDACQgCADgEAAQgJAAgBgJg");
	this.shape_28.setTransform(-89.9,13);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgIgJQgIgJAAgSQAAgPALgMQANgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIADAGQAAAEgDACQgDADgDAAQgEAAgHgHgAgJgNQgGAHAAAJQAAAJACAFQAEAEAGAAIAHgBIAIgEIgCgYIAAgFIABgGIgCgBIgDAAQgIAAgHAHg");
	this.shape_29.setTransform(-97.5,13.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgvA1QgCgDAAgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgCgMQAAgEAEgEQAEgDAEAAQAGAAAFAJQAfAsAeAbIAAgKIgBgtIgBgHIAAgIQAAgJAKAAQAKAAABAiIAAALIgBAqIgBALQgBAJgJAAQgFAAgGgFQgagYgggqIAAAVIAAAQIAAAQQAAAVgKAAQgFAAgDgDg");
	this.shape_30.setTransform(-113.2,11.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_31.setTransform(-124.6,11.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AggAyQgCgDAAgEQAAgEADgDQACgCAFAAIANgBIAAgfQAAgSABgRIgPABQgEAAgDgDQgCgDAAgEQAAgEACgCQADgCADgBIAVAAQAMAAAUACQAIACAAAIQAAAEgDADQgDACgDAAIgSgCIgBAgIAAAfIATAAQAEAAADADQACACAAAEQAAAEgDADQgCACgFAAIgLABIgMAAIgNABIgOABQgEAAgDgCg");
	this.shape_32.setTransform(-134,11.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_33.setTransform(-142.6,11.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_34.setTransform(-151.8,11.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAYAnQgDgIgDgLIgRACIgPACIgLAWQgDAFgGAAQgDAAgDgCQgEgDAAgEQABgDAJgVIAAgDQAAgEAGgCIAWgiQAQgZAEAAQAIAAACAJIAEAVIAKAsIAEAJQADAGgBAEQAAADgCADQgDACgEAAQgFAAgGgMgAgEAGIAJAAIAJgBIgFgXIgNAYg");
	this.shape_35.setTransform(-161.4,11.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgjAsQABgEACgCQADgDADAAIAJACIAKABQAKAAAFgHQAEgGABgNQgEAEgEABQgEACgEAAQgOAAgJgJQgIgIAAgNQAAgTALgLQAMgMATAAQAGAAAFABQAFACACADQAKABgBAJIgBANQgDAQgBARQAAAWgHAKQgJANgWAAQgbAAAAgKgAgJgeQgHAHAAALQAAAIAEAEQADADAGAAQAFAAAFgFQAFgGACgGIADgVIgGgCIgDgBQgLAAgGAIg");
	this.shape_36.setTransform(166.6,-6.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgDAAQgFAAgDgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIgBgGQAAgEADgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_37.setTransform(159.3,-8.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgIAyQgCgDgBgEIAAgMIAAgNIAAgPIABgOQABgEACgDQACgCAFAAQADAAACACQADADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgCADQgDACgDAAQgEAAgDgCgAgFgiQgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_38.setTransform(153.8,-10.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AACAWIgDgXIgCADIgKAbIgDAEQgDAFgFAAQgEAAgEgGQgDgGgDgJIgGgkIgBgKQAAgDADgDQADgCAEAAQAHAAACAHIABAJIABAKIADAQIAMghQADgJAGAAQAIAAACAKIADASIAEASIALgoQABgGAIAAQADAAAEACQACADAAAEIAAACIgPAvQgCAGgEAHQgEAEgFAAQgJAAgFgQg");
	this.shape_39.setTransform(146.9,-8.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgNQALgOARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_40.setTransform(138.3,-8.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgGA2QgCgDAAgEIAAheQAAgEACgCQADgCAEAAQADAAADACQACACAAAEIAABaQAAANgJAAQgDAAgDgCg");
	this.shape_41.setTransform(132.7,-10.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGA2QgDgDAAgEIAAheQAAgEADgCQAEgCACAAQAFAAACACQADACgBAEIAABaQAAANgJAAQgDAAgDgCg");
	this.shape_42.setTransform(128.9,-10.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgNQALgOARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_43.setTransform(123.2,-8.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_44.setTransform(116,-10);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_45.setTransform(101.7,-9.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_46.setTransform(92,-10.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgvA1QgDgDABgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgBgMQgBgEAEgEQAEgDAEAAQAGAAAFAJQAfAsAdAbIABgKIgBgtIgBgHIAAgIQgBgJALAAQALAAgBAiIAAALIAAAqIgBALQgCAJgIAAQgFAAgGgFQgagYghgqIAAAVIAAAQIABAQQAAAVgKAAQgFAAgDgDg");
	this.shape_47.setTransform(81.4,-10.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_48.setTransform(71.5,-10.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAlAtIgEgRIgHgiIgKAcIgEAMQgCAIgEAEQgDAHgGAAQgGAAgEgIIgDgMIgKgkIgIAgIgDAQQgDAJgIAAQgEAAgDgDQgCgDAAgDQAAgMAFgPIAHgaIAFgVQACgOAEgFQADgFAGAAQAGAAADAGQADAGADATQADARAGAUQAHgTAGgZIAEgPQAEgKAIAAQAHAAAEALIADARQAEAcAGAVIAGAXQAAAEgDADQgDACgEAAQgIAAgDgKg");
	this.shape_49.setTransform(60.9,-10.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_50.setTransform(50.4,-10.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgjApIABgWQACgcAAgkQAAgEACgDQADgDAEAAQAFAAACADQADADAAAEQAAAkgCAdIgBARQAQAAAZgIIADAAQADAAAEADQACADAAADQAAAGgHADQgHAEgRADQgPACgJAAQgSAAABgPg");
	this.shape_51.setTransform(42.2,-10);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgeA0QgDgCAAgEIAAgTIACgfIABgfQAAgSAKABIAGgBIAKAAQANgBAMAKQANAJAAAOQAAARgOAKQgMAJgRAAIgFAAIgBAfQAAAEgCACQgDACgEAAQgEAAgCgCgAgMgaIgBAYIAEABQAKAAAHgGQAIgFAAgJQAAgGgHgFQgHgEgHAAIgEABIgDAAIAAAJg");
	this.shape_52.setTransform(34.4,-10.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAlAtIgEgRIgHgiIgKAcIgEAMQgDAIgCAEQgEAHgGAAQgGAAgEgIIgDgMIgKgkIgIAgIgDAQQgDAJgIAAQgEAAgDgDQgCgDAAgDQAAgMAFgPIAHgaIAEgVQADgOAEgFQAEgFAFAAQAGAAADAGQADAGADATQADARAGAUQAHgTAGgZIAFgPQADgKAIAAQAHAAAEALIADARQAEAcAGAVIAGAXQAAAEgDADQgDACgEAAQgHAAgEgKg");
	this.shape_53.setTransform(24.6,-10.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_54.setTransform(12.7,-10.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBAAgBQgBAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_55.setTransform(2.9,-10.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEACgCQADgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgOADgHANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_56.setTransform(-10.8,-8.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgNQALgOARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_57.setTransform(-18.1,-8.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_58.setTransform(-25.3,-10);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgSAkQgLgEAAgIQAAgGAIgBIAKADQAFACAEAAQANgBAAgFQAAgDgKgFIgRgIQgKgGAAgKQAAgOAPgEQAIgEARAAQAHAAADACQAEADAAAGQAAANgGAAQgHgBgBgFIgGgBQgPABAAAEQAAADAJAEQANAGAFADQAKAHAAAJQAAAMgLAFQgJAGgMAAQgJgBgHgCg");
	this.shape_59.setTransform(-38.3,-8.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_60.setTransform(-47,-8.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEADgCQABgDAFAAQAHAAACAIQALgJAOAAQAOAAABASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgFAAQgEAAgCgCg");
	this.shape_61.setTransform(-55.8,-8.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgNQALgOARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_62.setTransform(-63.1,-8.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_63.setTransform(-70.3,-10);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_64.setTransform(-85.1,-8.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AARAfIgLAFIgHACQgRAAgIgJQgJgJAAgSQAAgPAMgMQAMgMARAAQAGAAAIAEQALAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIADAGQgBAEgCACQgDADgDAAQgEAAgGgHgAgJgNQgGAHgBAJQAAAJADAFQAEAEAHAAIAGgBIAHgEIgCgYIABgFIAAgGIgBgBIgCAAQgJAAgHAHg");
	this.shape_65.setTransform(-94.5,-8.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEACgCQADgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgOADgHANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_66.setTransform(-101.7,-8.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgiAsQgBgEADgCQADgDAEAAIAIACIAKABQAJAAAGgHQAEgGABgNQgDAEgFABQgEACgFAAQgNAAgIgJQgJgIAAgNQAAgTALgLQAMgMATAAQAHAAAEABQAFACADADQAIABABAJIgCANQgDAQgBARQgBAWgGAKQgJANgVAAQgbAAAAgKgAgJgeQgHAHAAALQAAAIADAEQAEADAGAAQAEAAAGgFQAGgGAAgGIAEgVIgGgCIgDgBQgLAAgGAIg");
	this.shape_67.setTransform(-109,-6.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgJgJQgHgJAAgSQAAgPAMgMQAMgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgCAAgIgHgAgJgNQgHAHABAJQAAAJACAFQAEAEAGAAIAHgBIAIgEIgCgYIAAgFIABgGIgDgBIgCAAQgIAAgHAHg");
	this.shape_68.setTransform(-116.5,-8.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgIAyQgDgDABgEIAAgMIgBgNIABgPIAAgOQABgEACgDQACgCAFAAQADAAADACQACADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgCADQgDACgDAAQgEAAgDgCgAgGgiQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgEAAgDgDg");
	this.shape_69.setTransform(-122.2,-10.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AATA0QgFACgFABIgJABQgPAAgLgKQgKgKAAgPQAAgTAKgKQALgLAQAAIAJABQAEABADACIACggQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAcQAAAZABAIIAAACQAAAEgCADQgDACgEAAQgFAAgCgEgAgNADQgFAGAAALQAAAIAFAGQAGAEAHAAIAHgBIAGgEIACgCIAAgZQgCgEgDgCQgEgBgFAAQgJgBgFAFg");
	this.shape_70.setTransform(-128.6,-10.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgHAGIgQAGIgWALQADADAFACQAFACAEAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_71.setTransform(-142.7,-8.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_72.setTransform(-150.4,-10.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_73.setTransform(-159.4,-10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.5,-22.5,351,45.1);


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


(lib.Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_25 = function() {
		playSound("Flying");
	}
	this.frame_42 = function() {
		playSound("Flying");
	}
	this.frame_52 = function() {
		playSound("high_blip");
	}
	this.frame_95 = function() {
		playSound("ZoomingSound");
	}
	this.frame_106 = function() {
		playSound("blips_3times");
	}
	this.frame_121 = function() {
		playSound("right_answer");
	}
	this.frame_126 = function() {
		playSound("right_answer");
	}
	this.frame_130 = function() {
		playSound("right_answer");
	}
	this.frame_136 = function() {
		playSound("blips_3times");
	}
	this.frame_151 = function() {
		playSound("blips_2times");
	}
	this.frame_166 = function() {
		playSound("blips_2times");
	}
	this.frame_181 = function() {
		playSound("blips_2times");
	}
	this.frame_203 = function() {
		playSound("Flying");
	}
	this.frame_213 = function() {
		playSound("blips_3times");
	}
	this.frame_226 = function() {
		playSound("high_blip");
	}
	this.frame_256 = function() {
		playSound("right_answer");
	}
	this.frame_262 = function() {
		playSound("right_answer");
	}
	this.frame_268 = function() {
		playSound("right_answer");
	}
	this.frame_279 = function() {
		playSound("right_answer");
	}
	this.frame_282 = function() {
		playSound("right_answer");
	}
	this.frame_286 = function() {
		playSound("right_answer");
	}
	this.frame_293 = function() {
		playSound("blips_3times");
	}
	this.frame_328 = function() {
		playSound("blips_2times");
	}
	this.frame_343 = function() {
		playSound("blips_2times");
	}
	this.frame_358 = function() {
		playSound("blips_2times");
	}
	this.frame_406 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(17).call(this.frame_42).wait(10).call(this.frame_52).wait(43).call(this.frame_95).wait(11).call(this.frame_106).wait(15).call(this.frame_121).wait(5).call(this.frame_126).wait(4).call(this.frame_130).wait(6).call(this.frame_136).wait(15).call(this.frame_151).wait(15).call(this.frame_166).wait(15).call(this.frame_181).wait(22).call(this.frame_203).wait(10).call(this.frame_213).wait(13).call(this.frame_226).wait(30).call(this.frame_256).wait(6).call(this.frame_262).wait(6).call(this.frame_268).wait(11).call(this.frame_279).wait(3).call(this.frame_282).wait(4).call(this.frame_286).wait(7).call(this.frame_293).wait(35).call(this.frame_328).wait(15).call(this.frame_343).wait(15).call(this.frame_358).wait(48).call(this.frame_406).wait(1));

	// Layer 17
	this.instance = new lib.arm();
	this.instance.parent = this;
	this.instance.setTransform(-132.7,94,0.565,0.565,0,0,0,-61.5,-23.9);
	this.instance._off = true;

	this.instance_1 = new lib.doogbody();
	this.instance_1.parent = this;
	this.instance_1.setTransform(165.3,92.5,0.572,0.572,0,0,180,0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},37).to({state:[{t:this.instance}]},14).to({state:[]},151).to({state:[{t:this.instance_1},{t:this.instance}]},11).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,rotation:-61.4,x:-132.6,y:94.1},14).to({_off:true},151).wait(11).to({_off:false,rotation:0,skewX:61.4,skewY:-118.6,x:187.9,y:95},0).wait(194));

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
	this.shape_22.graphics.f("#000000").s().p("AgHAHQgDgDAAgEQAAgCADgDQADgDAEAAQAFAAADACQADADAAADQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape_22.setTransform(260.5,99);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgHIABgHIgCgjIgNgBQgIgBgBgIQABgDADgDQACgDAEAAIAMABIAAgHIgBgHQAAgEADgDQACgCAFAAQAJAAAAARIAAAGIAHgBQAHAAADABQAGACgBAHQAAAEgCACQgDADgEAAIgDAAIgDAAIgHAAIABAjIAAADIAAAEQABAQgLAAQgCAAgDgDg");
	this.shape_23.setTransform(254.2,94.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgEAHQgGAIgDAKIgBAGIAAAHIAAAFIgBAGQAAAEgDADQgCADgEAAQgFAAgDgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIAAgGQAAgEACgCQADgDAEAAQAJAAABALIAAABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIACAOIABAOQAAAEgDACQgDADgDAAQgJAAgBgJg");
	this.shape_24.setTransform(247.3,95.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAKgMQAKgNAQAAQALAAAIAEQALAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_25.setTransform(239.5,95.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEACgCQACgDAFAAQAHAAACAIQALgJAPAAQAOAAAAASIAAAEQgCALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_26.setTransform(232.5,95.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWAeQgMgJAAgQQAAgQAKgMQAJgNARAAQALAAAJAEQAKAFAAAKQAAAIgJAGIgPAGIgWALQADADAFACQAEACAGAAQAIAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgMAFQgJAEgKAAQgQAAgKgHgAgJgPQgEAEgCAIIAPgGQAIgEAGgEQgFgDgHAAQgGAAgFAFg");
	this.shape_27.setTransform(224.9,95.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_28.setTransform(217.5,94.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_29.setTransform(210.4,94.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgIAyQgCgDAAgEIAAgMIgBgNIABgPIABgOQgBgEADgDQADgCAEAAQADAAADACQACADAAAEIAAAOIgBAPIAAANIABAMQAAAEgEADQgCACgDAAQgEAAgDgCgAgGgiQgCgDAAgEQAAgEACgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_30.setTransform(205.2,94.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AATAzQgFADgFACIgJAAQgPAAgLgJQgKgLAAgPQAAgSAKgLQALgLAQAAIAJABQAEABADADIACghQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAdQAAAYABAIIAAADQAAADgCACQgDADgEAAQgFAAgCgFgAgNADQgFAGAAAMQAAAHAFAFQAGAFAHABIAHgBIAGgFIACgCIAAgZQgCgFgDgBQgEgCgFAAQgJABgFAEg");
	this.shape_31.setTransform(198.8,94);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAKgMQAKgNAQAAQAMAAAHAEQALAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_32.setTransform(184.7,95.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEACgCQADgDAEAAQAHAAACAIQALgJAOAAQAPAAAAASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_33.setTransform(177.7,95.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AARAfIgMAFIgHACQgQAAgIgJQgJgJABgSQgBgPAMgMQANgMAPAAQAHAAAIAEQALAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIAAAHIgBAKQAAAMACAFIADAIIADAGQAAAEgDACQgDADgDAAQgEAAgGgHgAgJgNQgGAHAAAJQAAAJACAFQAEAEAGAAIAHgBIAHgEIgBgYIAAgFIABgGIgCgBIgDAAQgIAAgHAHg");
	this.shape_34.setTransform(170.3,95.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_35.setTransform(155.5,94.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghA0QgDgDAAgFIAAhHIgBgJIABgJQABgHALgBQAFgCAMAAQAMAAAMAJQAOAJAAAPQAAAIgDAFQgCAFgGAEQAHADAFAHQAGAHgBAHQAAAJgJAIQgHAGgHADQgPAFgZABQgDAAgEgEgAgSAlQAMgBANgEQAMgDAAgFQAAgEgIgFQgFgDgGAAIgSgBgAgSgkIAAAPIAAAOIAKABQAUgCAAgOQAAgEgGgFQgGgFgHAAIgLAAg");
	this.shape_36.setTransform(146.4,94.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgkAzQgDgDAAgEIAAgPIAAgPIAAg3QAAgEADgEQADgEAHAAIARACQAJABAGADQAdAPAAAWQAAAJgGAFQgGAHgMAFQASAKAJALQACACAAAEQAAAEgCACQgEADgEAAQgDAAgEgDQgUgTgYgIIABAWQAAAEgDADQgDADgEAAQgDAAgDgDgAgVACIAEAAQARAAAGgDIAHgFQADgDAAgBQAAgIgKgHQgIgHgLgBIgIAAg");
	this.shape_37.setTransform(137.5,94.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_38.setTransform(128.6,94.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgOAxQgJgUgKglIgFgSQgEgNAAgFQAAgEADgDQADgCADAAQAHAAADAHIADALIAGAXIALAhIAOgoIAGgRQAEgJAFgGQADgDAFAAQADAAADADQADACAAAEIgBAGQgFAFgDAHIgFAOIgSAuQgDAJgEAIQgDAFgFAAQgHAAgDgGg");
	this.shape_39.setTransform(119.4,94.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_40.setTransform(104.4,94.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBAAgBQgBAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_41.setTransform(95.6,94.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgvA1QgDgDAAgEIABgIIAAgJIAAgMIAAgMIAAgMIAAgNIgBgMIgBgMQABgEADgEQADgDAFAAQAFAAAHAJQAdAsAfAbIAAgKIgBgtIgBgHIgBgIQABgJAJAAQAMAAAAAiIAAALIgBAqIgBALQgBAJgJAAQgFAAgGgFQgagYgggqIAAAVIAAAQIAAAQQAAAVgKAAQgFAAgDgDg");
	this.shape_42.setTransform(85.5,94.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_43.setTransform(75.6,94.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_44.setTransform(66.2,94.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_45.setTransform(56.4,94.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AggAyQgCgDAAgEQAAgEADgDQACgCAFAAIANgBIAAgfQAAgSABgRIgPABQgEAAgDgDQgCgDAAgEQAAgEACgCQADgCADgBIAVAAQAMAAAUACQAIACAAAIQAAAEgDADQgDACgDAAIgSgCIgBAgIAAAfIATAAQAEAAADADQACACAAAEQAAAEgDADQgCACgFAAIgLABIgMAAIgNABIgOABQgEAAgDgCg");
	this.shape_46.setTransform(47.7,94.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAUAnIgJgNIgJgMIgVAYIgMANQgDADgEAAQgEAAgDgDQgCgDgBgDQAAgEACgCIANgOIAYgZIgOgSIgIgKIgJgJQgDgDAAgEQAAgEACgDQADgDAEAAQADAAAHAFIAHAIIAIALIAMAPIASgWQAMgRAGAAQADAAAEADQADADAAAEQAAADgDADIgOARIgRAVIAPAUIAOATQADADAAAEQAAADgDADQgDADgDAAQgIAAgKgQg");
	this.shape_47.setTransform(38.7,94.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_48.setTransform(29.6,94.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AATAzQgFADgFACIgJAAQgPAAgLgJQgKgLAAgPQAAgSAKgLQALgLAQAAIAJABQAEABADADIACghQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAdQAAAYABAIIAAADQAAADgCACQgDADgEAAQgFAAgCgFgAgNADQgFAGAAAMQAAAHAFAFQAGAFAHABIAHgBIAGgFIACgCIAAgZQgCgFgDgBQgEgCgFAAQgJABgFAEg");
	this.shape_49.setTransform(14.8,94);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIAAgFIAAgGIAAgDIABgDQAAgFgDAAQgGAAgEAHQgGAIgDAKIgBAGIAAAHIAAAFIgBAGQAAAEgDADQgDADgEAAQgEAAgCgDQgDgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQABgEADgCQACgDAEAAQAJAAABALIAAABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgCADgEAAQgJAAgBgJg");
	this.shape_50.setTransform(7.2,95.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgJgJQgHgJAAgSQAAgPAMgMQAMgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgCAAgIgHgAgJgNQgHAHABAJQAAAJACAFQAEAEAGAAIAIgBIAHgEIgCgYIAAgFIABgGIgDgBIgCAAQgIAAgHAHg");
	this.shape_51.setTransform(-0.4,95.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgvA1QgDgDAAgEIABgIIAAgJIABgMIAAgMIAAgMIAAgNIgCgMIgBgMQAAgEAEgEQADgDAFAAQAGAAAGAJQAdAsAfAbIAAgKIgBgtIgBgHIgBgIQAAgJALAAQAKAAABAiIAAALIgBAqIgBALQgBAJgJAAQgFAAgGgFQgagYgggqIAAAVIAAAQIAAAQQAAAVgKAAQgFAAgDgDg");
	this.shape_52.setTransform(-16.1,94.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_53.setTransform(-27.5,94.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AggAyQgCgDAAgEQAAgEADgDQACgCAFAAIANgBIAAgfQAAgSABgRIgPABQgEAAgDgDQgCgDAAgEQAAgEACgCQADgCADgBIAVAAQAMAAAUACQAIACAAAIQAAAEgDADQgDACgDAAIgSgCIgBAgIAAAfIATAAQAEAAADADQACACAAAEQAAAEgDADQgCACgFAAIgLABIgMAAIgNABIgOABQgEAAgDgCg");
	this.shape_54.setTransform(-36.9,94.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_55.setTransform(-45.5,94.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_56.setTransform(-54.7,94.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAYAnQgDgIgDgLIgRACIgPACIgLAWQgDAFgGAAQgDAAgEgCQgDgDAAgEQAAgDAKgVIAAgDQAAgEAHgCIAVgiQAQgZAEAAQAIAAACAJIAEAVIAKAsIAEAKQACAFAAADQAAAEgCADQgEACgDAAQgFABgGgNgAgEAGIAJAAIAJgBIgFgXIgNAYg");
	this.shape_57.setTransform(-64.3,94.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgiAsQAAgEACgCQADgDAEAAIAIACIAKABQAJAAAGgHQAEgGABgNQgEAEgEABQgEACgFAAQgNAAgIgJQgJgIAAgNQAAgTALgLQAMgMATAAQAGAAAFABQAFACADADQAJABAAAJIgCANQgDAQgBARQgBAWgGAKQgJANgWAAQgaAAAAgKgAgJgeQgHAHAAALQAAAIADAEQAEADAGAAQAEAAAGgFQAGgGAAgGIAEgVIgGgCIgDgBQgLAAgGAIg");
	this.shape_58.setTransform(263.7,76.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgDAAQgEAAgEgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIAAgGQAAgEACgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIACAOIABAOQAAAEgDACQgDADgDAAQgJAAgBgJg");
	this.shape_59.setTransform(256.4,74.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgIAyQgCgDAAgEIAAgMIgBgNIABgPIAAgOQABgEACgDQACgCAFAAQADAAADACQACADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgCADQgDACgDAAQgEAAgDgCgAgFgiQgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_60.setTransform(250.9,72.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AADAWIgEgXIgCADIgKAbIgDAEQgDAFgFAAQgEAAgEgGQgDgGgDgJIgGgkIgBgKQAAgDADgDQADgCAEAAQAHAAACAHIABAJIABAKIADAQIALghQAEgJAGAAQAIAAACAKIADASIAEASIALgoQABgGAIAAQADAAADACQADADAAAEIAAACIgPAvQgCAGgEAHQgDAEgGAAQgJAAgEgQg");
	this.shape_61.setTransform(244,74.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgMQALgPARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_62.setTransform(235.4,74.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgGA2QgCgDAAgEIAAheQAAgEACgCQAEgCADAAQADAAADACQACACABAEIAABaQAAANgKAAQgDAAgDgCg");
	this.shape_63.setTransform(229.8,72.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgGA2QgCgDAAgEIAAheQAAgEACgCQAEgCACAAQAEAAADACQADACgBAEIAABaQAAANgJAAQgDAAgDgCg");
	this.shape_64.setTransform(226,72.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgMQALgPARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_65.setTransform(220.3,74.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_66.setTransform(213.1,72.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_67.setTransform(198.8,72.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_68.setTransform(189.1,72.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgvA1QgCgDAAgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgBgMQAAgEADgEQAEgDAEAAQAGAAAFAJQAeAsAfAbIAAgKIgBgtIgBgHIAAgIQAAgJAKAAQALAAgBAiIAAALIAAAqIgBALQgBAJgJAAQgFAAgGgFQgagYgggqIAAAVIAAAQIAAAQQAAAVgKAAQgFAAgDgDg");
	this.shape_69.setTransform(178.5,72.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_70.setTransform(168.6,72.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAlAtIgEgRIgHgiIgKAcIgEAMQgDAIgDAEQgDAHgGAAQgGAAgEgIIgDgMIgKgkIgIAgIgDAQQgDAJgIAAQgEAAgDgDQgCgDAAgDQAAgMAFgPIAHgaIAFgVQADgOADgFQADgFAGAAQAGAAADAGQADAGADATQADARAGAUQAHgTAHgZIADgPQAEgKAIAAQAHAAAEALIADARQAEAcAGAVIAGAXQAAAEgDADQgDACgEAAQgIAAgDgKg");
	this.shape_71.setTransform(158,72.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_72.setTransform(147.5,72.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgjApIABgWQACgcAAgkQAAgEACgDQADgDAEAAQAEAAADADQADADAAAEQAAAkgCAdIgBASQAQgBAYgIIAEAAQADAAAEADQACADAAADQAAAGgHADQgHAEgRADQgPACgJAAQgSAAABgPg");
	this.shape_73.setTransform(139.3,72.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgeA0QgDgCAAgEIAAgTIACgfIABgfQAAgSAKABIAGgBIAKAAQANgBAMAKQANAJAAAOQAAARgOAKQgMAJgRAAIgFAAIgBAfQAAAEgCACQgDACgEAAQgEAAgCgCgAgMgaIgBAYIAEABQAKAAAHgGQAIgFAAgJQAAgGgHgFQgHgEgHAAIgEABIgDAAIAAAJg");
	this.shape_74.setTransform(131.5,72.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAlAtIgEgRIgHgiIgKAcIgEAMQgDAIgDAEQgDAHgGAAQgGAAgEgIIgDgMIgKgkIgIAgIgDAQQgDAJgIAAQgEAAgDgDQgCgDAAgDQAAgMAFgPIAHgaIAEgVQADgOAEgFQAEgFAFAAQAGAAADAGQADAGADATQADARAGAUQAHgTAGgZIAFgPQADgKAIAAQAHAAAEALIADARQAEAcAGAVIAGAXQAAAEgDADQgDACgEAAQgHAAgEgKg");
	this.shape_75.setTransform(121.7,72.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_76.setTransform(109.8,72.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_77.setTransform(100,72.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_78.setTransform(86.3,74.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgMQALgPARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_79.setTransform(79,74.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_80.setTransform(71.8,72.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgSAkQgLgEAAgIQAAgGAIgBIAKADQAFACAEAAQANgBAAgFQAAgDgKgFIgRgIQgKgGAAgKQAAgOAPgEQAIgEARAAQAHAAADACQAEADAAAGQAAANgGAAQgHgBgBgFIgGgBQgPABAAAEQAAADAJAEQANAGAFADQAKAHAAAJQAAAMgLAFQgJAGgMAAQgJgBgHgCg");
	this.shape_81.setTransform(58.8,74.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_82.setTransform(50.1,74.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEACgCQADgDAEAAQAIAAABAIQALgJAOAAQAPAAAAASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_83.setTransform(41.3,74.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgNAIgMQALgPARAAQAOAAAIAMQAHAJAAAPQAAAPgIALQgKANgPAAQgMAAgJgJgAgJgLQgEAHAAAHQAAAJAFAEQADADAFABQAFAAAFgFQAFgEAAgIQABgWgNAAQgHABgFAHg");
	this.shape_84.setTransform(34,74.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_85.setTransform(26.8,72.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_86.setTransform(12,74.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AARAfIgMAFIgGACQgRAAgIgJQgJgJABgSQgBgPAMgMQAMgMAQAAQAHAAAIAEQALAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIAAAHIgBAKQAAAMACAFIADAIIADAGQgBAEgCACQgDADgDAAQgDAAgHgHgAgJgNQgGAHgBAJQAAAJADAFQAEAEAGAAIAHgBIAHgEIgBgYIAAgFIAAgGIgBgBIgCAAQgJAAgHAHg");
	this.shape_87.setTransform(2.6,74.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_88.setTransform(-4.6,74.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgiAsQgBgEADgCQACgDAFAAIAIACIALABQAIAAAGgHQAEgGABgNQgEAEgEABQgFACgEAAQgNAAgIgJQgJgIAAgNQAAgTALgLQAMgMATAAQAHAAAEABQAEACAEADQAIABABAJIgCANQgDAQgBARQgBAWgGAKQgJANgVAAQgbAAAAgKgAgJgeQgHAHABALQAAAIACAEQAEADAGAAQAFAAAFgFQAFgGABgGIAEgVIgGgCIgDgBQgLAAgGAIg");
	this.shape_89.setTransform(-11.9,76.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgJgJQgHgJgBgSQAAgPANgMQAMgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgCAAgIgHgAgJgNQgHAHABAJQAAAJADAFQADAEAGAAIAIgBIAHgEIgDgYIABgFIABgGIgDgBIgCAAQgIAAgHAHg");
	this.shape_90.setTransform(-19.4,74.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgIAyQgDgDABgEIAAgMIgBgNIABgPIABgOQgBgEADgDQADgCAEAAQADAAADACQACADAAAEIAAAOIgBAPIAAANIABAMQAAAEgDADQgDACgDAAQgEAAgDgCgAgGgiQgDgDAAgEQAAgEADgDQAEgDADAAQAFAAACADQAEADAAAEQAAAEgEADQgCADgFAAQgDAAgEgDg");
	this.shape_91.setTransform(-25.1,72.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AATA0QgFADgFAAIgJABQgPAAgLgKQgKgKAAgPQAAgTAKgKQALgLAQAAIAJABQAEABADACIACggQABgIAIAAQAEAAACACQADADAAAEIgCAeIgBAcQAAAZABAIIAAACQAAAEgCADQgDACgEAAQgFAAgCgEgAgNADQgFAGAAALQAAAIAFAGQAGAEAHAAIAHgBIAGgEIACgCIAAgZQgCgEgDgCQgEgBgFAAQgJgBgFAFg");
	this.shape_92.setTransform(-31.5,72.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgIAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_93.setTransform(-45.6,74.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_94.setTransform(-53.3,72.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_95.setTransform(-62.3,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},24).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},29).to({state:[]},42).wait(312));

	// Layer 27
	this.instance_2 = new lib.Tween11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(97.1,82.8);
	this.instance_2._off = true;

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgGA3QgDgEAAgEIAAgIIAAgJIgBgnIgPgBQgKgCAAgJQAAgEADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEADgDQADgDAFAAQAKAAAAAUIAAAFIAIAAIAMABQAHADAAAGQAAAFgDADQgDADgFAAIgDAAIgFAAIgHABIABAoIAAAEIAAAEQABASgMAAQgDAAgDgCg");
	this.shape_96.setTransform(85.2,89);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAQAkIgCgQIgBgQIAAgGIAAgHIAAgDIABgEQgBgGgDAAQgGAAgGAJQgGAIgEANIAAAHIgBAHIAAAGIgBAHQAAAFgDADQgEACgEAAQgEAAgDgCQgEgDAAgFIAAgHIgBgGIABgWIABgUIAAgHIAAgHQAAgFADgDQADgDAFAAQAKAAABANIAAABQALgMAMAAQAOAAAHANQADAIAAAQIAAAGIAAAEIACAQIACAPQgBAFgDADQgDACgFAAQgJAAgBgJg");
	this.shape_97.setTransform(77.3,90.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIAEQAMAFAAAMQAAAKgKAGIgRAIIgZALQADAFAGACQAFACAGAAQAKAAAIgFQAGgEAEAAQAIAAAAAJQAAAJgNAFQgLAEgMABQgSAAgLgKgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgCgIAAQgGgBgGAFg");
	this.shape_98.setTransform(68.4,90.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgeApQgDgDAAgEIAAgyIAAgIIABgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgCAMgJAAQgLAAAAgKIAAgIQgQADgIAPIABAnQAAAEgEADQgDADgFAAQgFAAgCgDg");
	this.shape_99.setTransform(60.4,90.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIAEQAMAFAAAMQAAAKgKAGIgRAIIgZALQADAFAGACQAFACAGAAQAKAAAIgFQAGgEAEAAQAIAAAAAJQAAAJgNAFQgLAEgMABQgSAAgLgKgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgCgIAAQgGgBgGAFg");
	this.shape_100.setTransform(51.8,90.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgEABQgGAAgCgDQgEgDAAgEQAAgIAIgCIAOgBIABgJQACgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgKAAgEAGQgDAFgBALIgBACIAQgBQAOAAAAAKQAAAKgPAAIgQABIAAAUIABAVQAAAOgCAIQgBAJgIAAQgEAAgEgDg");
	this.shape_101.setTransform(43.2,88.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgFABQgFAAgDgDQgDgDAAgEQAAgIAIgCIANgBIABgJQADgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgKAAgEAGQgDAFgBALIAAACIAOgBQAPAAAAAKQAAAKgQAAIgPABIAAAUIABAVQAAAOgCAIQgCAJgHAAQgFAAgDgDg");
	this.shape_102.setTransform(35.1,88.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIAAgOIAAgOIAAgSIABgQQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAQIAAASIAAAOIAAAOQAAAFgCADQgEADgEAAQgEAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAFgEADAAQAGAAADAEQADADABAFQgBAFgDADQgDADgGAAQgDAAgFgDg");
	this.shape_103.setTransform(29.1,88.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAVA7QgFADgFABIgLABQgSAAgMgLQgLgLAAgSQAAgVALgMQAMgNATAAIAKABQAFACADACQABgaABgLQACgJAIAAQAFAAADADQADADAAAEIgCAiIgCAhQABAcABAKIAAACQAAAEgCADQgEADgEAAQgGAAgDgFgAgPAEQgGAGAAANQAAAJAGAGQAHAGAIAAQAFAAADgCIAHgEIADgDIAAgdQgDgFgEgBQgEgCgGAAQgLAAgFAGg");
	this.shape_104.setTransform(21.8,88.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgaAhQgNgJAAgSQAAgTALgOQALgOASAAQAOAAAJAEQAMAFAAAMQAAAKgKAGIgRAIIgaALQAFAFAEACQAGACAGAAQAKAAAIgFQAGgEAEAAQAIAAAAAJQAAAJgNAFQgLAEgMABQgSAAgMgKgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgCgJAAQgGgBgFAFg");
	this.shape_105.setTransform(5.7,90.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgeApQgCgDgBgEIAAgyIAAgIIABgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAABAVIAAAFQgCAMgKAAQgJAAgBgKIAAgIQgQADgIAPIAAAnQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_106.setTransform(-2.4,90.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgJAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAALQAAAOACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAAKAEAGQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_107.setTransform(-10.8,90.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgVApQgMgFAAgIQAAgHAJAAIALABQAGADAEAAQAPAAAAgGQAAgFgLgEIgTgKQgMgIAAgKQABgQAQgGQAKgDATAAQAIAAAEACQAEADAAAHQABAOgIABQgIgBgBgGIgGAAQgTgBABAGQAAADAKAEIAUALQAMAIAAALQAAAMgNAHQgKAGgNAAQgKAAgJgDg");
	this.shape_108.setTransform(-26.2,90.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBABIAAAYIgBAGIAAAFQAAAFgDACQgDACgFAAQgHABgCgGQgCgEAAgJIAAgcIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADAEAAAEIgBAGQAMgOALABQAMAAAEAJQAFgFAGgCQAGgBAHgBQAPABAFAPIAEAVIAFApQABAFgEADQgDACgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_109.setTransform(-36.1,90.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgeApQgDgDAAgEIAAgyIAAgIIABgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAQAAAAAVIAAAFQgCAMgJAAQgKAAAAgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgGAAgCgDg");
	this.shape_110.setTransform(-46.2,90.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgZAhQgLgLgBgSQAAgQAKgOQALgQAVAAQAPAAAJANQAJALAAARQAAARgKANQgLAOgRAAQgPAAgKgKgAgLgMQgEAHAAAJQAAAJAFAFQAEAEAGAAQAGAAAFgEQAFgGABgJQABgYgOAAQgJAAgGAJg");
	this.shape_111.setTransform(-54.5,90.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgOBCQgDgDAAgEIAAgCQACgLAAgKIAAgmIgFAAIgEABQgFAAgEgDQgDgDAAgEQAAgIAIgCIANgBIABgJQADgSAHgIQAIgLATAAQAOAAAAALQAAAKgNAAQgJAAgFAGQgDAFgBALIgBACIAPgBQAPAAAAAKQAAAKgPAAIgQABIAAAUIABAVQAAAOgCAIQgCAJgHAAQgEAAgEgDg");
	this.shape_112.setTransform(-62.8,88.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBABIAAAYIgBAGIAAAFQAAAFgDACQgDACgFAAQgHABgCgGQgCgEAAgJIAAgcIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADAEAAAEIgBAGQAMgOALABQAMAAAEAJQAFgFAGgCQAGgCAHAAQAPABAFAPIAEAVIAFApQABAFgEADQgDACgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_113.setTransform(98.1,66);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgJAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAALQAAAOACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAAKAEAGQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_114.setTransform(87.3,66);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgeApQgCgDAAgEIAAgyIAAgIIAAgHQAAgEACgDQADgDAFAAQAIAAACAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgLAAABgKIAAgIQgRADgIAPIAAAnQAAAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_115.setTransform(79.1,66);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgnAyQAAgFACgCQADgCAFgBIAKACIALABQALAAAFgHQAGgHABgPQgEAEgFACQgFACgFAAQgQAAgJgKQgKgKAAgPQAAgWANgNQANgNAWAAQAHAAAGACQAFACADAEQAKABAAAKIgBAOQgEATAAATQgBAZgIAMQgKAPgZAAQgeAAAAgMgAgLgiQgHAIAAAMQAAAKAEAEQADADAHABQAGgBAGgGQAGgHABgGIAEgYIgGgCIgFgBQgMAAgHAJg");
	this.shape_116.setTransform(70.8,68.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AATAkIgNAFQgFACgDAAQgTAAgJgLQgKgJAAgVQAAgRAOgNQAOgOASAAQAIAAAKAEQALAFAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAALQAAAOACAHIAEAIIADAIQAAAEgEACQgDADgEAAQgDAAgIgHgAgKgPQgIAIAAAKQAAAKAEAGQADAFAIAAQAEAAAEgCQAEgBAEgDQgCgSAAgJIAAgGIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_117.setTransform(62.2,66);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgJA5QgDgDAAgFIgBgOIAAgOIABgSIABgQQAAgFADgDQADgDAFAAQADAAAEADQADADAAAFIgBAQIgBASIAAAOIABAOQAAAFgEADQgDADgDAAQgFAAgDgDgAgHgnQgDgDAAgFQAAgFADgDQAFgEADAAQAFAAAEAEQAEADgBAFQABAFgEADQgEADgFAAQgDAAgFgDg");
	this.shape_118.setTransform(55.7,64.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAWA7QgGADgGABIgLABQgRAAgLgLQgMgMAAgRQAAgVAMgMQAMgNARAAIALABQAFACADACQABgaACgLQABgJAJAAQAEAAADADQADADAAAEIgBAiIgCAiQAAAbACAKIAAACQAAAEgEADQgDADgEAAQgFAAgDgFgAgQAEQgFAGAAAOQAAAIAGAGQAHAGAHAAQAFAAAEgCIAHgEIACgDIAAgdQgCgFgEgBQgFgCgFAAQgKAAgHAGg");
	this.shape_119.setTransform(48.4,63.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgOQALgOASAAQAOAAAKADQALAGAAANQAAAJgJAGIgSAIIgZALQAEAFAFACQAFACAGAAQALAAAGgFQAHgDAEgBQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgEAHgFQgGgCgJAAQgGgBgEAFg");
	this.shape_120.setTransform(32.3,66);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AASA5IgDgSIgCgSIABgGIAAgGIAAgHQgBgCgDAAQgJgBgGAIQgEADgGALQAAAdgDAFQgDAHgGAAQgFAAgDgDQgEgDAAgEIABgFIABgUIAAg0IABgCIAAgNIgBgHIAAgHQAAgFADgDQADgCAEAAQAIAAADAIQABAFAAAJIAAARIgBAPQAGgGAHgDQAFgDAIAAQANAAAGAIQAEAFABALIABATIACAQIACAPIABADQAAAEgEADQgDADgEAAQgIAAgDgIg");
	this.shape_121.setTransform(23.4,63.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgGA3QgDgEAAgEIAAgIIAAgJIgBgnIgPgBQgKgCAAgJQAAgEADgDQADgDAEAAIAOABIAAgIIgBgIQAAgEADgDQADgDAFAAQAKAAAAAUIAAAFIAIAAIAMABQAHADAAAGQAAAFgDADQgDADgFAAIgEAAIgEAAIgHABIABAoIAAAEIAAAEQAAASgLAAQgDAAgDgCg");
	this.shape_122.setTransform(14.9,64.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgLAQQgDgDAAgDQAAgCAFgJIAHgMQACgFAFAAQAEAAADADQADACAAADIgFAMIgGALQgDAGgFAAQgEAAgDgDg");
	this.shape_123.setTransform(0.4,70.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgeApQgCgDAAgEIAAgyIAAgIIAAgHQAAgEADgDQACgDAFAAQAJAAABAJQANgLARAAQAPAAAAAVIAAAFQAAAMgKAAQgKAAAAgKIAAgIQgRADgIAPIABAnQgBAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_124.setTransform(-6.5,66);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAGAAANQAAAJgJAGIgSAIIgZALQADAFAGACQAFACAGAAQAKAAAHgFQAHgDAEgBQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgLgKgAgJgSQgGAFgDAKIASgIQAJgEAGgFQgFgCgIAAQgHgBgEAFg");
	this.shape_125.setTransform(-15.1,66);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgWA7QgDADgEAAQgFAAgDgDQgDgDAAgEIABgFIAAgGIAAhYQAAgFACgFQADgFAGAAQAJAAAAAJIgBADIAAADIAAAeQAGgDAFgCIAJgBQATAAALANQALAMAAARQAAATgNAMQgMANgSAAQgLAAgJgEgAgIgBQgFABgHAFIAAAhQALAFAHAAQAJAAAHgHQAGgGAAgLQAAgKgFgGQgGgGgJAAQgDAAgFACg");
	this.shape_126.setTransform(-24.2,63.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBABIAAAYIgBAGIAAAFQAAAFgDACQgDACgFAAQgHABgCgGQgCgEAAgJIAAgcIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADAEAAAEIgBAGQAMgOALABQAMAAAEAJQAFgFAGgCQAGgCAHAAQAPABAFAPIAEAVIAFApQABAFgEADQgDACgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_127.setTransform(-35,66);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgaAhQgNgJAAgSQAAgTAKgOQAMgOATAAQANAAAJADQAMAGAAANQAAAJgKAGIgRAIIgaALQAFAFAEACQAGACAGAAQAKAAAIgFQAGgDAEgBQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgMgKgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgCgIAAQgGgBgGAFg");
	this.shape_128.setTransform(-46,66);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgGAtQgDgDAAgEIgCgbIgCgZIgBgIQgJAGgJAMIgBABIAAAYIgBAGIAAAFQAAAFgDACQgDACgFAAQgHABgCgGQgCgEAAgJIAAgcIAAgLIAAgLQAAgIACgFQADgHAGAAQAEAAAEADQADAEAAAEIgBAGQAMgOALABQAMAAAEAJQAFgFAGgCQAGgCAHAAQAPABAFAPIAEAVIAFApQABAFgEADQgDACgFAAQgJAAgBgIIgDgYIgDgVQgCgOgDAAIgIAEIgKAFIACAZQADARAAAJQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_129.setTransform(-56.4,66);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTAKgOQAMgOATAAQAOAAAIADQAMAGAAANQAAAJgJAGIgSAIIgZALQADAFAGACQAFACAGAAQAKAAAHgFQAHgDAEgBQAIAAAAAJQAAAJgNAFQgLAEgMAAQgSABgLgKgAgKgSQgFAFgDAKIARgIQAKgEAGgFQgFgCgIAAQgHgBgFAFg");
	this.shape_130.setTransform(-67.4,66);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgpA6QgEgDAAgEIAAgSIAAgRIAAg+QAAgFAEgEQADgGAIABIATABQALACAHADQAhARAAAZQAAAKgHAHQgHAIgOAFQAVAMAKAMQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgEgEQgYgWgbgIIABAZQAAAEgDADQgDADgFAAQgEAAgDgDgAgXACIADAAQATAAAIgDQAEgCAEgEQADgDAAgCQAAgJgLgIQgJgHgMgCIgJAAg");
	this.shape_131.setTransform(-76.7,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},95).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.instance_2}]},122).to({state:[{t:this.instance_2}]},101).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({scaleX:1.25,scaleY:1.25,x:45.1,y:-113.2},8).to({startPosition:0},1).wait(122).to({startPosition:0},0).wait(101).to({startPosition:0},0).wait(80));

	// Layer 16
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(0.1,1,1).p("AORDNQlnBVn7AAQn7AAlnhVQlchTgKhzIhegrIBxgQQA/hXEUhBQFnhVH7AAQH7AAFnBVQFnBVAAB3QAAB4lnBVg");
	this.shape_132.setTransform(77.8,38.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AszDNQlchTgKhzIhegsIBxgPQA/hXEUhBQFnhVH7AAQH7AAFnBVQFnBVAAB3QAAB4lnBVQlnBVn7AAQn7AAlnhVg");
	this.shape_133.setTransform(77.8,38.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(0.1,1,1).p("AWnlEQo4iHslAAQskAAo5CHQooCDgQC3IiVBGICzAZQBlCIG1BoQI5CHMkAAQMlAAI4iHQI6iHAAi+QAAi9o6iHg");
	this.shape_134.setTransform(93.3,83.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("ABKHMQskAAo5iHQm1hohliIIizgZICVhGQAQi3IoiDQI5iHMkAAQMlAAI4CHQI6CHAAC9QAAC+o6CHQo4CHslAAIAAAAg");
	this.shape_135.setTransform(93.3,83.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(0.1,1,1).p("AT/A7QhGBfkwBIQmNBeovAAQowAAmLheQmNheAAiEQAAiDGNheQGLheIwAAQIvAAGNBeQGABbALB/IBoAwg");
	this.shape_136.setTransform(13.5,76.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgzFAQowAAmLheQmNheAAiEQAAiDGNheQGLheIwAAQIvAAGNBeQGABbALB/IBoAxIh9ARQhGBfkwBIQmMBeovAAIgBAAg");
	this.shape_137.setTransform(13.5,76.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132}]}).to({state:[]},24).to({state:[{t:this.shape_135},{t:this.shape_134}]},29).to({state:[]},42).to({state:[{t:this.shape_137},{t:this.shape_136}]},131).to({state:[]},101).wait(80));

	// Layer 19
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("Ah/CLQgHgHAAgLIACgVIABgWIABggIABggIgBgiIAAgiQAAgLgDgVIgCghQAAgKAJgJQAKgIALAAQAOAAAQAXQBRB1BQBJIAAgcQAAhYgBgfIgDgTIgCgUQAAgZAaAAQAeAAAABbIgBAcIgBBxQAAAJgCAUQgEAXgXAAQgNAAgPgOQhGg/hXhwIgBA5IABArIABArQAAA1gaAAQgNAAgJgIg");
	this.shape_138.setTransform(106.8,-56.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("AhgBwQgoghABg1QAAg8AmgzQArg4BAAAQBAAAAfAcQAfAdAAA6QAAA9gjAyQgoA5hCAAQg1AAgmgegAg6g1QgbAkAAArQAAAeAYATQAWASAiAAQAnAAAbgnQAYgjAAgtQAAgmgRgOQgQgOgqAAQgmAAgeAng");
	this.shape_139.setTransform(76.9,-56.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0000").s().p("AhVCDQgHgHAAgKQAAgKAHgHQAIgIALAAQAOAAAVgCIAAhSQAAgwADgtIgnABQgLAAgHgHQgHgHAAgKQAAgLAHgHQAGgGAKgBQAPgBAmAAQAhAAA3AHQAVADAAAWQAAAMgIAHQgHAFgJAAQgJAAgmgFQgDAhAAA2IAABSIAxgBQALAAAHAHQAHAIAAAKQAAAKgHAHQgIAHgLAAIgfABIgfAAQgLAAgYADQgZADgMAAQgLAAgHgHg");
	this.shape_140.setTransform(51.9,-56.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF0000").s().p("AgRCDQgIgHAAgKIABgIIABgIIgBgZIgCgZQAAgYgDgpIgGhBIgJAAQgoAAgYgGQgUgFAAgTQAAgJAHgIQAHgIAMABIAdADQASACALAAIAhgBIAgAAIApACIApACQALAAAIAHQAHAHAAAKQAAAKgHAIQgIAHgLAAIgsgCIgrgCQAAAUAEA1QAEAuAAAbIACASIABASQAAAOgGALQgHAOgOAAQgJAAgIgHg");
	this.shape_141.setTransform(29.3,-57.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AhQBuQgbgdAAgmQAAg8A1g/QAtg1AuAAIAPAAIALACQAIgIALAAQASAAAFAVQADAPAAAVQAAAJgFAHQgHAKgNAAQgRAAgHgRQgEgIgEgCQgCgBgMAAQgXAAgcAjQgqAxAAArQAAATANAPQANAOATAAQARAAASgKIAbgRQAPgKAHAAQALAAAHAIQAHAHAAAKQAAALgJAIQgyAqgyAAQgpAAgcgeg");
	this.shape_142.setTransform(5,-57.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("ABcCIQgOAAgPghQgJgWgIgcQgNACgeACQgbACgQADQgIAUgVAoQgHANgOAAQgLAAgHgHQgJgHABgKQgBgJAbg2QgCgFAAgFQABgJAQgFQAagrAggwQArhEALAAQAUAAAGAYIAMA6QALA0AQBCQABAFAIATQAGAPAAAIQABAKgJAHQgHAHgJAAIgBAAgAgOARQAIgCARgBIAZgCIgLg8IgnBBg");
	this.shape_143.setTransform(-20.3,-56.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AhUCKQgTgSAAg6QAAgYADgwQAEgwAAgYIgCgTIgCgTQAAgbAZAAQAIAAAHAEQAVgEATgDQATgDAQAAQAtAAAbAKQARAHAAAQQAAAKgGAHQgIAJgLAAIgHgBQgegJgbABQgOAAgOABQgQADgSAEIgBBIIBFgHIAsgDQALgBAHAHQAIAHAAALQAAAUgXADIgrAEIhMAHIgCAlQAAAjAEAGQACABAVAAIAhAAIAiAAIAKgBIALgBQAKAAAIAFQAIAHAAAMQAAAUgVAEQgSAEg4AAQg7AAgSgQg");
	this.shape_144.setTransform(143.4,-57.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("Ah/CLQgGgHgBgLIACgVIABgWIABggIABggIgBgiIAAgiQAAgLgDgVIgCghQAAgKAJgJQAKgIAMAAQANAAAQAXQBRB1BQBJIAAgcQAAhYgBgfIgDgTIgCgUQAAgZAaAAQAeAAAABbIgBAcIgBBxQAAAJgCAUQgEAXgXAAQgMAAgQgOQhGg/hXhwIgBA5IABArIABArQAAA1gaAAQgNAAgJgIg");
	this.shape_145.setTransform(93.4,-56.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AhUCKQgTgSAAg6QAAgYADgwQAEgwAAgYIgCgTIgCgTQAAgbAZAAQAIAAAHAEQAVgEATgDQATgDAQAAQAtAAAbAKQARAHAAAQQAAAKgGAHQgIAJgLAAIgHgBQgegJgbABQgOAAgOABQgQADgSAEIgBBIIBFgHIAsgDQALgBAHAHQAIAHAAALQAAAUgXADIgrAEIhMAHIgCAlQAAAjAEAGQACABAVAAIAhAAIAiAAIAKgBIALgBQAKAAAIAFQAIAHAAAMQAAAUgVAEQgSAEg4AAQg7AAgSgQg");
	this.shape_146.setTransform(67.3,-57.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AhhB1QgWgQAAgXQAAgLAHgIQAHgHAMAAQAQAAAIAQQAKAXAkAAQAeAAAdgOQAfgOAAgQQAAgXgTgHQgOgGgnAAQgfgBgZgKQghgPAAgcQABgkAlgdQAlgdArAAQASAAAaAIQAhAKAAAOQAAAJgHAHQgHAIgMAAQgIAAgRgDQgRgEgJAAQgXAAgUALQgVALAAANQAAAIAGAEQAHAEANACIAtADQAoACAXAUQAaAVAAAmQAAAug1AZQgpASgzAAQgtAAgbgVg");
	this.shape_147.setTransform(16.7,-56.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AA1BoIgYgjIgXggIg4A+IghAkQgIAHgKABQgLgBgHgHQgIgHAAgLQAAgIAGgHIAhgjIBAhFIgngvIgUgaQgNgQgKgIQgLgJAAgLQAAgJAIgIQAHgIALAAQAKAAAQAOQALAKAIALIAWAcIAhAoIAtg7QAjgsANAAQALAAAHAIQAIAHAAAKQAAAIgHAIQgXAbgNATQgOATgfAmIAmA1QAXAfASAUQAGAIAAAIQAAAKgHAIQgIAHgKAAQgSAAgdgpg");
	this.shape_148.setTransform(-30.1,-56.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("AhUCKQgTgSAAg6QAAgYADgwQAEgwAAgYIgCgTIgCgTQAAgbAZAAQAIAAAHAEQAVgEATgDQATgDAQAAQAtAAAbAKQARAHAAAQQAAAKgGAHQgIAJgLAAIgHgBQgegJgbABQgOAAgOABQgQADgSAEIgBBIIBFgHIAsgDQALgBAHAHQAIAHAAALQAAAUgXADIgrAEIhMAHIgCAlQAAAjAEAGQACABAVAAIAhAAIAiAAIAKgBIALgBQAKAAAIAFQAIAHAAAMQAAAUgVAEQgSAEg4AAQg7AAgSgQg");
	this.shape_149.setTransform(-54.1,-57.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_143},{t:this.shape_142,p:{x:5}},{t:this.shape_141,p:{x:29.3}},{t:this.shape_140,p:{x:51.9}},{t:this.shape_139},{t:this.shape_138}]},106).to({state:[]},3).to({state:[{t:this.shape_143},{t:this.shape_142,p:{x:5}},{t:this.shape_141,p:{x:29.3}},{t:this.shape_140,p:{x:51.9}},{t:this.shape_139},{t:this.shape_138}]},3).to({state:[]},3).to({state:[{t:this.shape_143},{t:this.shape_142,p:{x:5}},{t:this.shape_141,p:{x:29.3}},{t:this.shape_140,p:{x:51.9}},{t:this.shape_139},{t:this.shape_138}]},3).to({state:[]},16).to({state:[{t:this.shape_143},{t:this.shape_142,p:{x:5}},{t:this.shape_141,p:{x:29.3}},{t:this.shape_140,p:{x:51.9}},{t:this.shape_139},{t:this.shape_138}]},3).to({state:[]},3).to({state:[{t:this.shape_143},{t:this.shape_142,p:{x:5}},{t:this.shape_141,p:{x:29.3}},{t:this.shape_140,p:{x:51.9}},{t:this.shape_139},{t:this.shape_138}]},3).to({state:[]},59).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_140,p:{x:-6.4}},{t:this.shape_147},{t:this.shape_141,p:{x:42.5}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_142,p:{x:120.1}},{t:this.shape_144}]},12).to({state:[]},3).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_140,p:{x:-6.4}},{t:this.shape_147},{t:this.shape_141,p:{x:42.5}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_142,p:{x:120.1}},{t:this.shape_144}]},3).to({state:[]},3).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_140,p:{x:-6.4}},{t:this.shape_147},{t:this.shape_141,p:{x:42.5}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_142,p:{x:120.1}},{t:this.shape_144}]},3).to({state:[]},65).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_140,p:{x:-6.4}},{t:this.shape_147},{t:this.shape_141,p:{x:42.5}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_142,p:{x:120.1}},{t:this.shape_144}]},3).to({state:[]},3).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_140,p:{x:-6.4}},{t:this.shape_147},{t:this.shape_141,p:{x:42.5}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_142,p:{x:120.1}},{t:this.shape_144}]},3).wait(107));

	// Layer 22
	this.instance_3 = new lib.Tween13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-237.9,4);
	this.instance_3._off = true;

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#0000FF").s().p("AgmAtQgQgNAAgVQAAgYAPgVQASgXAZAAQAaAAANAMQAMAMAAAXQAAAYgOAUQgRAYgZAAQgWAAgPgNgAgXgVQgLAPAAARQAAAMAKAIQAJAHAOAAQAPAAALgQQAKgOAAgSQAAgPgHgGQgHgGgRAAQgPAAgMAQg");
	this.shape_150.setTransform(-60.1,4.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#0000FF").s().p("AgnA3QgDgDAAgEIAAgRIAAgQIAAg6QAAgFADgEQAEgFAHABIASABQAKABAGAEQAgAQAAAXQAAAKgHAGQgHAHgNAFQAUALAKAMQACADAAADQAAAEgDADQgDADgEAAQgEAAgEgDQgWgVgZgIIAAAYQAAAEgCADQgDADgFAAQgEAAgDgDgAgWACIADAAQASAAAIgDIAHgFQADgDAAgCQAAgIgKgIQgJgHgLgBIgJgBg");
	this.shape_151.setTransform(-70.7,4.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#0000FF").s().p("AggA3QgDgCAAgEIAAgVIACggIABgiQAAgTAKABIAIgBIAKgBQAOABAMAIQAOALAAAPQAAATgPAKQgNAKgSAAIgFgBIgBAiQAAAEgDACQgDADgDAAQgFAAgCgDgAgNgcIgBAZIAEABQALAAAHgFQAJgHAAgJQAAgGgIgFQgHgFgHAAIgFAAIgDAAIAAALg");
	this.shape_152.setTransform(-79.6,4.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#0000FF").s().p("AghA4QgIgHAAgYIABgdIABgdIAAgHIgBgIQAAgLAKAAQAEAAACABIAQgCIAOgBQASAAALADQAHADAAAHQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAHgJABIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_153.setTransform(-62.9,4.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#0000FF").s().p("AAgA4QgEgDAAgEIAAgQIgBgQIAAgHQgLABgQACIgcAFIgBAQIgBAQQAAADgCADQgEACgEAAQgEAAgDgCQgDgDAAgEIACgWIABgVIAAgaIAAgcQAAgEADgCQAEgDADgBQAFABACADQADACAAAFIAAAQIAAAQIgBAIIAAAHIAcgFQAQgDALAAIACgbQAAgGADgHQAEgKAFAAQAEAAADADQADADAAAFIAAACIgBAJIgBAGIAAAGIgBAVIgBAUIABAQIABAQQAAAEgDADQgDACgEAAQgEAAgDgCg");
	this.shape_154.setTransform(-73.4,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},120).to({state:[{t:this.instance_3}]},4).to({state:[]},27).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},1).to({state:[]},3).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},3).to({state:[]},3).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},3).to({state:[]},38).to({state:[{t:this.instance_3}]},75).to({state:[{t:this.instance_3}]},4).to({state:[]},46).to({state:[{t:this.shape_154},{t:this.shape_153}]},2).to({state:[]},3).to({state:[{t:this.shape_154},{t:this.shape_153}]},3).to({state:[]},3).to({state:[{t:this.shape_154},{t:this.shape_153}]},3).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120).to({_off:false},0).to({x:-72.9},4).to({_off:true},27).wait(126).to({_off:false,x:-237.9},0).to({x:-72.9},4).to({_off:true},46).wait(80));

	// Layer 23
	this.instance_4 = new lib.Tween15("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-254.9,4);
	this.instance_4._off = true;

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF0000").s().p("AgnAwQgJgHAAgJQAAgFADgDQADgDAFAAQAGAAADAHQAFAJAOAAQAMAAAMgFQAMgHAAgGQAAgJgIgDQgFgDgPABQgNgBgKgEQgOgFABgMQAAgOAPgMQAPgMARAAQAHAAALAEQANAEAAAFQAAADgDADQgDAEgEAAIgLgBIgKgCQgKAAgHAFQgJAEAAAGQAAACADACIAIADIARABQARAAAJAJQALAIAAAPQAAATgWAKQgQAHgUAAQgTAAgLgIg");
	this.shape_155.setTransform(60,4.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF0000").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_156.setTransform(49.6,4.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF0000").s().p("AglA7QgCgEAAgDIAAhTIAAgJIAAgJQAAgEADgDQADgDAEAAIAFABIAPgCIAMgBQAJAAAMAEQAQAEAAAGQAAAEgDADQgDADgEAAIgEAAQgJgEgOAAIgJABIgNACIAAAXQALgCAIAAQAMAAAKABQAKABAAAJQAAAEgDACQgDADgFAAIgLgBIgKAAQgGAAgNAEIAAAuQAAADgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_157.setTransform(40,4.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF0000").s().p("AgiA1QgDgDAAgEQAAgEADgDQADgCAFgBIAOgBIAAghQAAgTACgSIgQAAQgFAAgDgCQgDgDAAgFQAAgEADgDQADgCAEgBIAVAAQANAAAWADQAJACAAAIQAAAFgDACQgDADgEAAIgTgCIgBAiIAAAiIAUAAQAEAAADACQADADAAAFQAAAEgDADQgDACgFAAIgMAAIgNAAIgNACIgPABQgFAAgDgDg");
	this.shape_158.setTransform(31.1,4.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF0000").s().p("AgmAsIACgXQACgfAAgnQAAgEACgDQADgDAFAAQAEAAADADQADADAAAEQAAAngCAgIgBASQARAAAagJIADAAQAFAAADAEQACADAAADQAAAHgGACQgJAEgSADQgPADgLAAQgSAAAAgQg");
	this.shape_159.setTransform(23.2,4.7);

	this.instance_5 = new lib.Tween15_v2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-254.9,-17);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},124).to({state:[{t:this.instance_4}]},4).to({state:[]},6).to({state:[{t:this.instance_4}]},3).to({state:[]},3).to({state:[{t:this.instance_4}]},3).to({state:[]},8).to({state:[{t:this.shape_159},{t:this.shape_158,p:{x:31.1}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155,p:{x:60}}]},16).to({state:[]},3).to({state:[{t:this.shape_159},{t:this.shape_158,p:{x:31.1}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155,p:{x:60}}]},3).to({state:[]},3).to({state:[{t:this.shape_159},{t:this.shape_158,p:{x:31.1}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155,p:{x:60}}]},3).to({state:[]},23).to({state:[{t:this.instance_5}]},79).to({state:[{t:this.instance_5}]},4).to({state:[]},6).to({state:[{t:this.instance_5}]},3).to({state:[]},3).to({state:[{t:this.instance_5}]},3).to({state:[]},27).to({state:[{t:this.shape_158,p:{x:36.7}},{t:this.shape_155,p:{x:46.1}}]},17).to({state:[]},3).to({state:[{t:this.shape_158,p:{x:36.7}},{t:this.shape_155,p:{x:46.1}}]},3).to({state:[]},3).to({state:[{t:this.shape_158,p:{x:36.7}},{t:this.shape_155,p:{x:46.1}}]},3).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).to({x:44.1},4).to({_off:true},6).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},8).wait(256));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(281).to({_off:false},0).to({x:33.1,y:-20},4).to({_off:true},6).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},27).wait(80));

	// Layer 24
	this.instance_6 = new lib.Tween17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-261.6,5);
	this.instance_6._off = true;

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgnAwQgJgHAAgJQAAgFADgDQADgDAFAAQAGAAADAHQAFAJAOAAQAMAAAMgFQAMgHAAgGQAAgJgIgDQgFgDgPABQgNgBgKgEQgOgFABgMQAAgOAPgMQAPgMARAAQAHAAALAEQANAEAAAFQAAADgDADQgDAEgEAAIgLgBIgKgCQgKAAgHAFQgJAEAAAGQAAACADACIAIADIARABQARAAAJAJQALAIAAAPQAAATgWAKQgQAHgUAAQgTAAgLgIg");
	this.shape_160.setTransform(208.6,4.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_161.setTransform(198.2,4.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAgA4QgEgDAAgEIAAgQIgBgQIAAgHQgLABgQACIgcAFIgBAQIgBAQQAAADgDADQgDACgEAAQgEAAgDgCQgDgDAAgEIACgWIABgVIAAgaIABgcQAAgEACgCQADgDAEgBQAFABADADQACACAAAFIAAAQIAAAQIgBAIIAAAHIAcgFQAPgDAMAAIABgbQAAgGAEgHQAEgKAFAAQAEAAADADQADADAAAFIAAACIgBAJIgBAGIAAAGIgBAVIgBAUIABAQIABAQQAAAEgDADQgDACgEAAQgEAAgDgCg");
	this.shape_162.setTransform(187.4,4.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgnAyQgKgKAAgVQAAgTAJgTQAKgTAPgMQAKgJAKAAQAHAAAMAFQAPAGAAAHQAAAEgDADQgDADgEAAQgCAAgIgEQgHgEgHAAQgGAAgLAOQgQAVAAAXQAAAMAEAEQAEAFAKAAQAKAAAJgGQAJgHAEgNQgQACgMAFIgFABQgFAAgDgDQgCgDAAgEQAAgMAZgDQAQgCATAAQAFAAADACQACADAAAEQAAAFgDADQgGAWgPANQgPANgUAAQgTAAgKgKg");
	this.shape_163.setTransform(176.5,4.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgiA1QgDgDAAgEQAAgEADgDQADgCAFgBIAOgBIAAghQAAgTACgSIgQAAQgFAAgDgCQgDgDAAgFQAAgEADgDQADgCAEgBIAVAAQANAAAWADQAJACAAAIQAAAFgDACQgDADgEAAIgTgCIgBAiIAAAiIAUAAQAEAAADACQADADAAAFQAAAEgDADQgDACgFAAIgMAAIgNAAIgNACIgPABQgFAAgDgDg");
	this.shape_164.setTransform(167.1,4.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AghA4QgIgHAAgYIABgdIABgdIAAgHIgBgIQAAgLAKAAQAEAAACABIAQgCIAOgBQASAAALADQAHADAAAHQAAAEgDADQgCADgFAAIgDgBQgMgCgLAAIgLABIgNACIgBAdIAcgDIARgBQAFAAADACQADADAAAFQAAAHgJABIgSACIgeADIgBAPQAAAPACABQABABAIAAIANAAIANAAIAFgBIAEAAQAEAAADACQAEADAAAFQAAAIgJACQgHABgWAAQgYABgHgHg");
	this.shape_165.setTransform(158.6,4.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAPA6QgEgEAAgDIgFgPIgIguQgEAOgGAMQgIARgDAKIABAEQAAAEgEADQgDACgFABQgFAAgEgDQgDgDgBgFIgCgJIgIgiIgQgxIgBgDQAAgEAEgDQADgCAEAAQAGAAADAEIAEAJQAHAWAJAmQAGgPAGgSIAIgWQAIgQAGAAQAHAAAEAIIADANIACAPQABANAIAfIAVgzIAEgNQACgIADgFQADgFAGAAQAFAAADACQADADAAAFIgDAIIgDAHIgEANIgNAeIgOAfIgFAMQgEAHgHAAQgEAAgDgCg");
	this.shape_166.setTransform(145.9,4.8);

	this.instance_7 = new lib.Tween17_v2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-261.6,-6.3);
	this.instance_7._off = true;

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgnAyQgJgKgBgVQAAgTAJgTQAKgTAPgMQAJgJALAAQAHAAAMAFQAPAGAAAHQAAAEgDADQgDADgEAAQgCAAgIgEQgHgEgHAAQgGAAgLAOQgQAVAAAXQAAAMAEAEQAEAFAKAAQAKAAAJgGQAJgHAEgNQgQACgMAFIgFABQgEAAgEgDQgCgDAAgEQAAgMAZgDQAPgCAVAAQADAAAEACQACADAAAEQAAAFgDADQgGAWgPANQgPANgUAAQgTAAgKgKg");
	this.shape_167.setTransform(203.4,4.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgzA4QgDgDAAgEIABgJIAAgJIABgNIAAgNIAAgMIAAgOIgBgNIgBgOQAAgEAEgDQADgEAFAAQAGAAAGAKQAgAvAhAdIAAgLIgBgwIgBgIIAAgIQAAgKAKAAQAMAAAAAlIAAALIAAAuIgCALQgBAKgJAAQgGAAgGgGQgcgZgjgtIAAAWIAAARIAAASQAAAWgKAAQgFAAgEgEg");
	this.shape_168.setTransform(192.1,4.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgmAtQgQgNAAgVQAAgYAPgVQASgXAZAAQAaAAANAMQAMAMAAAXQAAAYgOAUQgRAYgZAAQgWAAgPgNgAgXgVQgLAPAAARQAAAMAKAIQAJAHAOAAQAPAAALgQQAKgOAAgSQAAgPgHgGQgHgGgRAAQgPAAgMAQg");
	this.shape_169.setTransform(179.9,4.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgnA3QgDgDAAgEIAAgRIAAgQIAAg6QAAgFADgEQAEgFAHABIASABQAKABAGAEQAgAQAAAXQAAAKgHAGQgHAHgNAFQAUALAKAMQACADAAADQAAAEgDADQgDADgEAAQgEAAgEgDQgWgVgZgIIAAAYQAAAEgCADQgDADgFAAQgEAAgDgDgAgWACIADAAQASAAAIgDIAHgFQADgDAAgCQAAgIgKgIQgJgHgLgBIgJgBg");
	this.shape_170.setTransform(169.3,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},128).to({state:[{t:this.instance_6}]},4).to({state:[]},19).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161,p:{x:198.2}},{t:this.shape_160,p:{x:208.6}}]},31).to({state:[]},3).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161,p:{x:198.2}},{t:this.shape_160,p:{x:208.6}}]},3).to({state:[]},3).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161,p:{x:198.2}},{t:this.shape_160,p:{x:208.6}}]},3).to({state:[]},8).to({state:[{t:this.instance_7}]},83).to({state:[{t:this.instance_7}]},4).to({state:[]},38).to({state:[{t:this.shape_160,p:{x:148.7}},{t:this.shape_161,p:{x:159.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167}]},32).to({state:[]},3).to({state:[{t:this.shape_160,p:{x:148.7}},{t:this.shape_161,p:{x:159.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167}]},3).to({state:[]},3).to({state:[{t:this.shape_160,p:{x:148.7}},{t:this.shape_161,p:{x:159.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167}]},3).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(128).to({_off:false},0).to({x:202.6},4).to({_off:true},19).wait(256));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(285).to({_off:false},0).to({x:199.9,y:-9.3},4).to({_off:true},38).wait(80));

	// Layer 14
	this.instance_8 = new lib.doog();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-75.1,59.5,1,1,0,0,180,0.5,-0.1);

	this.instance_9 = new lib.doogbody();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-110.1,91.5,0.572,0.572,0,0,0,0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},24).to({state:[{t:this.instance_8}]},12).to({state:[{t:this.instance_9}]},1).to({state:[]},165).wait(205));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({scaleX:0.57,scaleY:0.57,x:-110.1,y:91.5},12).to({_off:true,skewY:0},1).wait(370));

	// Layer 1
	this.instance_10 = new lib.Dynamo_motion();
	this.instance_10.parent = this;
	this.instance_10.setTransform(370.6,-114.6,0.143,0.143,0,0,0,86.4,21.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).to({scaleX:0.32,scaleY:0.32,x:-307.5,y:-63.6},12).wait(6).to({skewY:180,x:-317.8,y:32.5},0).to({scaleX:0.57,scaleY:0.57,x:507.4,y:20.4},16).wait(144).to({scaleX:0.32,scaleY:0.32,x:-314.6,y:28.5},0).to({scaleX:0.57,scaleY:0.57,x:507.4,y:20.4},13).wait(191));

	// Layer 5
	this.instance_11 = new lib.Tween3_v1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-102,26.4,1,1,0,0,0,-11,0);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween3_v2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-102,26.4,1,1,0,0,0,-11,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},0).to({regY:1,scaleX:13.26,x:-102.6,y:27.4},4).to({_off:true},149).wait(205));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(209).to({_off:false},0).to({regY:1,scaleX:13.26,x:-102.6,y:27.4},4).to({startPosition:0},4).wait(190));

	// Layer 28
	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(1,1,1).p("AlPlPQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLQiLiLAAjFQAAjECLiLg");
	this.shape_171.setTransform(101.5,-5.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.502)").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
	this.shape_172.setTransform(101.5,-5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_172},{t:this.shape_171}]},257).to({state:[]},3).to({state:[{t:this.shape_172},{t:this.shape_171}]},3).to({state:[]},3).to({state:[{t:this.shape_172},{t:this.shape_171}]},3).to({state:[]},8).wait(130));

	// Layer 2
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(0.3,1,1).p("EAjjAWlMhHFAAAMAAAgtJMBHFAAAg");
	this.shape_173.setTransform(46.5,-9.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#FFFFFF","#FF3366"],[0,1],-0.8,227.4,0.9,-227.3).s().p("EgjiAWlMAAAgtJMBHFAAAMAAAAtJg");
	this.shape_174.setTransform(46.5,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_174},{t:this.shape_173}]}).wait(407));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182,-154.6,457,302);


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
		
		 window.open ("diag_Scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("diag_Scene2.html","_self");
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
(lib.diag_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3repeat:375});

	// timeline functions:
	this.frame_0 = function() {
		playSound("heyyouarediagramming");
	}
	this.frame_60 = function() {
		playSound("thediagramformsforcomplements");
	}
	this.frame_151 = function() {
		playSound("proliftsweights");
	}
	this.frame_225 = function() {
		playSound("rememberthediagramformsaredifferent2");
	}
	this.frame_325 = function() {
		playSound("heisstrong");
	}
	this.frame_397 = function() {
		this.gotoAndPlay("scene3repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(91).call(this.frame_151).wait(74).call(this.frame_225).wait(100).call(this.frame_325).wait(72).call(this.frame_397).wait(1));

	// main
	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(4,1,1).p("EAjoAWlMhHPAAAMAAAgtJMBHPAAAg");
	this.shape_175.setTransform(274,187.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_175).wait(398));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggGAaBMAAAgtnMBHZAAAMAAAAtng");
	mask.setTransform(251.5,166.5);

	// Layer 1
	this.instance_13 = new lib.Scene3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(228,196.7);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(398));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(398));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '215714FB6712234C985C5095573BE36B',
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
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/Flying.mp3", id:"Flying"},
		{src:"sounds/heisstrong.mp3", id:"heisstrong"},
		{src:"sounds/heyyouarediagramming.mp3", id:"heyyouarediagramming"},
		{src:"sounds/high_blip.mp3", id:"high_blip"},
		{src:"sounds/proliftsweights.mp3", id:"proliftsweights"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/rememberthediagramformsaredifferent2.mp3", id:"rememberthediagramformsaredifferent2"},
		{src:"sounds/thediagramformsforcomplements.mp3", id:"thediagramformsforcomplements"},
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
an.compositions['215714FB6712234C985C5095573BE36B'] = {
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