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


(lib.Tween40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AALh4QgLgEgMgDQgOgEgOACQgLABgPABQgBAAgCAAQgLAAgNABQgMAAgNAIQgLAHgMADQgMADgIAJQgCACgCACQgEAFgDAIQgGANAAAMIAAAAAhCh/QAJgLAOgHQAOgGAOgDQAPgEAEASQAEAMADAIQAAABABAAQAQgGAMgCQAHgCAGAHQAJAMAAAMQACACACACQACgBACgBQAHgBAIAAQAKABADAJQAGAMgIANQANgBAMgDQANgDADAKQAFAPgMAOQgDAEAAADQgKgLgIgLQgHgJgGgIQgDgEgCgEQgIgMgMgKQgCgBgDgBQgCABgDABQgBgCACgEQgJgEgKgEQgNgGgPgGQgCgBgBAAIgBAAIAAgBAiyg2IAAABQgDAMADANQADAPAEAJQAGALAFALQAFAMAGANQAFALAKAKQAIAKAMAJQAMAJALAKQALAKAPAJQAOAIAPAHQAOAFAPAEQAOAEANACQAOACAQACQAPACAOgDQAPgCAMgDQANgDAMgFQAMgEAOgEQANgEAHgRQAGgOgEgMQgFgOgEgOQgDgPgFgPQgFgOgKgMQgJgMgLgMQAAgBAAAAAiBhUQAOgDAOAEQARAFAOABQAPABAPAFQAGACAHACQgBgGgBgHAAJgxQAEACADACQAEADAEACAAJgxQgJgGgLgFQgIgEgIgDQABAIAAAHQABAMAAAKAAKhDQgBAJAAAJAAMgUQgBgHgCgLQAAgFAAgGAAygmQgBAPABAPQAAAFAAADABLgSQABAOABAN");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AAyCPIgegFQgNgBgOgEQgPgEgOgGQgPgHgOgIQgPgIgLgKIgXgUQgMgJgIgJQgKgLgFgLIgLgYIgLgWQgEgKgDgPQgDgNADgMIAAAAIAAAAQAAgNAGgNQADgHAEgFIAEgEQAIgKAMgDQAMgDALgHQANgIAMAAIAYgBIADAAIAagCQAOgBAOADQAMADALAFIAAAAIABAAIADABIAcAMQAKAEAJAFQgCAEABABIAFgCIAFADQAMAJAIANIAFAIIANARIASAVIAAABQALANAJAMQAKAMAFAOIAIAeIAJAcQAEAMgGAOQgHAQgNAEIgaAJIgZAIIgbAFQgIABgJAAIgMAAgABNgDQgBgOgBgOQABAOABAOgAAygVIAAAIIAAgIIgBgMIABgRIgBARIABAMgAAJgyIADARIgDgRIAAgLIAHAEIAIAEIgIgEIgHgEIAAgCIABgRIgBARIAAACIgUgLIgQgHIABAPIABAVIgBgVIgBgPIAQAHIAUALIAAALgAgbhPIgCgNIACANIgNgFQgPgFgPgBQgOgBgRgEQgHgCgIgBIAAAAIgBAAIgMACIAMgCIABAAIAAAAQAIABAHACQARAEAOABQAPABAPAFIANAFIAAAAgAgbhPIAAAAg");
	this.shape_1.setTransform(0,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABJAsIgMgRIAYgEQANgDADAKQAFAPgMAOQgDAEAAADIgSgWgAA9AbIgGgIQgIgMgMgJIgBgEQAHgBAIAAQAKABAEAIQAFAMgHANIAAAAgAAIgQIgcgMIgDgBIAbgIQAHgCAGAHQAJAMAAAMQgIgEgKgEgAgwglQgOgEgOACIgZACQAIgLAPgHQANgGAOgDQAPgEAFASIAHAUQgLgEgNgDg");
	this.shape_2.setTransform(3.6,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-16.5,38.1,33.2);


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


(lib.scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("ouch");
	}
	this.frame_5 = function() {
		playSound("theycalledthegameamassacre");
	}
	this.frame_9 = function() {
		playSound("bump");
	}
	this.frame_15 = function() {
		playSound("bump");
	}
	this.frame_20 = function() {
		playSound("bump");
	}
	this.frame_41 = function() {
		playSound("massacreistheobjectivecomplement");
	}
	this.frame_42 = function() {
		playSound("Cowbell");
	}
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(4).call(this.frame_9).wait(6).call(this.frame_15).wait(5).call(this.frame_20).wait(21).call(this.frame_41).wait(1).call(this.frame_42).wait(42).call(this.frame_84).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAoQgLgFgIgIQgMgMgCgOQgCgOAMgMQANgNAQgCQAQgDANANQAJAJADAJQAFAMgIAHQgGAGgLgCQgFgBgNgGIgYgIQAAAEACAFQACAFAFAFQAHAHAGABQAHACADADQAFAFgFAFQgDAEgGAAQgDAAgFgCgAgKgSIAQAGIARAGQgCgGgFgFQgFgFgGAAQgGAAgJAEg");
	this.shape.setTransform(222.8,334.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAABBQgDgBgDgDQgFgFADgGQADgGAGgJIALgNIADgDIAFgEIAEgFQACgDgCgCQgFgFgLAAQgFAAgKADQgTATgFACQgHACgEgEQgDgDgBgEQAAgEADgDIADgCIAPgNIAigjIACgBIAIgIIAEgFIAEgFQADgDAFAAQAEAAADADQAFAFgEAIQgCAEgGAGIgLAKIgLAKQAIAAAGADQAGACAFAFQAJAIgBAJQgBAGgHAJIgMANIgJALIgJAMIgBACQgDADgDAAIgBAAg");
	this.shape_1.setTransform(216.6,327.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglAnQgDgDAAgEQAAgFACgCIAGgFIAGgGIAagbIgJgKQgGgHAGgGQADgDAEAAQADgBADAEIAIAJIAGgGIAEgFQADgDAFAAQAEAAADADQAHAIgNANIgEAEIAFAFIAIAIQADAFgFAFQgDADgEAAQgEAAgDgDIgDgCIgCgEIgFgEIgaAcIgCADIgDADQgIAIgFAAQgEAAgDgDg");
	this.shape_2.setTransform(212.1,322.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBAsQgFAAgCgDQgDgCAAgKIgMgFQgFgCgCgDQgNgMABgNQAAgMAOgOQAMgMARAAQASABANAMQAFAFAEAJQAEAMgEAEQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgGAFIgHAGQgKAKgDAGIgDAIIgDAHQgCADgCAAIgBgBgAgPgRQgHAHgBAGQgBAFAFAFQAEADAEACIAIACIAQgTIAEgDIAFgEIAAgDIgCgBQgHgHgLAAQgKAAgHAHg");
	this.shape_3.setTransform(306.8,328.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00E600").s().p("AgYAfQgNgJAAgRQAAgRAKgNQALgOASAAQAMAAAIAEQALAFAAAMQAAAIgJAGQgDADgNAFIgXAKQADAFAFABQAFACAFAAQAKAAAHgEQAGgDAEgBQAIAAAAAIQAAAIgNAGQgKAEgMAAQgQAAgLgJgAgJgRQgFAFgDAJIAQgIQAJgDAGgFQgFgDgHAAQgHABgEAEg");
	this.shape_4.setTransform(347.1,303.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00E600").s().p("AgcAmQgCgDgBgEIAAgvIAAgGIABgHQAAgFADgCQACgDAEAAQAJAAABAJQAMgKAQAAQAOAAAAAUIAAAEQgBAMgJAAQgJAAAAgKIgBgHQgPACgHAPIAAAjQAAAEgDADQgDADgEAAQgFAAgCgDg");
	this.shape_5.setTransform(339.5,303.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00E600").s().p("AgWAgQgMgJAAgQQAAgOALgPQALgSAPAAQAIAAAKAEQAMAFAAAHQAAADgCADQgDADgEAAQgDAAgFgDQgEgEgJAAQgFAAgGALQgHALAAAHQAAAHAGAFQAFAEAIAAQAFAAAHgEIAJgDQAEAAADACQADADAAAEQAAAGgNAFQgLAFgHAAQgPAAgLgJg");
	this.shape_6.setTransform(331.8,303.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00E600").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_7.setTransform(323.9,303.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00E600").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_8.setTransform(316,303.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00E600").s().p("AgUAmQgLgEAAgIQAAgHAJAAIAKACIAJACQAOAAAAgGQAAgEgKgEQgOgHgEgCQgLgHAAgLQAAgOAQgFQAJgDASAAQAHAAAEACQAEACAAAHQAAANgHAAQgHAAgBgGIgGAAQgRAAAAAEQAAADAKAFQAOAHAFADQALAHAAAKQAAAMgMAHQgJAFgNAAQgKAAgIgDg");
	this.shape_9.setTransform(308.7,303.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00E600").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_10.setTransform(301,303.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00E600").s().p("AgFArQgDgDAAgEIgCgZIgCgYIgBgHQgIAFgJALIgBACIAAAWIAAAGIgBAFQAAAEgDACQgDACgEAAQgGAAgCgFQgCgEAAgIIAAgaIAAgLIgBgLQAAgGADgFQADgHAFAAQAEAAADADQADADAAAEIAAAGQALgMAKAAQALAAAEAIQAFgEAFgCQAFgCAHAAQAOAAAFAPIADATIAGAnQAAAEgDADQgDADgFAAQgIAAgBgJIgDgVIgDgVQgCgNgDAAIgHAEIgJAGIACAXIACAYQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_11.setTransform(291.1,303.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006600").s().p("AgYAfQgMgJAAgRQgBgRAKgNQALgOASAAQAMAAAIAEQALAFAAAMQAAAIgJAGQgDADgNAFIgXAKQADAFAFABQAFACAFAAQAKAAAHgEQAGgDAEgBQAHAAABAIQAAAIgNAGQgKAEgMAAQgQAAgLgJgAgJgRQgFAFgDAJIARgIQAIgDAGgFQgFgDgHAAQgHABgEAEg");
	this.shape_12.setTransform(228.8,303.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006600").s().p("AgFArQgDgDAAgEIgCgZIgCgYIgBgHQgIAFgJALIgBACIAAAWIAAAGIgBAFQAAAEgDACQgDACgEAAQgGAAgCgFQgCgEAAgIIAAgaIAAgLIgBgLQAAgGADgFQADgHAFAAQAEAAADADQADADAAAEIAAAGQALgMAKAAQALAAAEAIQAFgEAFgCQAFgCAHAAQAOAAAFAPIADATIAGAnQAAAEgDADQgDADgFAAQgIAAgBgJIgDgVIgDgVQgCgNgDAAIgHAEIgJAGIACAXIACAYQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_13.setTransform(219,303.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006600").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_14.setTransform(208.9,303.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006600").s().p("AglAvQAAgEADgDQACgCAEAAIAKABIALABQAKAAAFgGQAFgHABgOQgEAEgFACQgEABgFAAQgPAAgJgJQgJgJAAgOQAAgUAMgNQANgMAUAAQAHAAAFABQAFACADAEQAKABAAAKIgCANQgDARgBASQAAAYgHALQgKAOgXAAQgdAAAAgLgAgLggQgGAHAAAMQAAAIAEAFQADADAGAAQAFAAAHgGQAFgGABgHIADgWIgFgCIgEgBQgMAAgHAJg");
	this.shape_15.setTransform(200.7,305.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAUA3QgFADgFABIgKABQgQAAgLgKQgLgLAAgRQAAgTALgMQALgMARAAQAFAAAEABQAFACADACQABgZABgJQABgJAJAAQAEAAADACQACADAAAFIgBAfIgCAgQAAAZACAKIAAABQAAAEgDADQgDADgEAAQgFAAgDgFgAgOADQgGAHABAMQAAAIAFAFQAGAGAIAAQAFAAADgBIAGgFIADgCIAAgbQgDgFgEgBQgEgCgFAAQgKAAgFAFg");
	this.shape_16.setTransform(159.8,301.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgYAfQgNgJAAgRQAAgRAKgNQALgOASAAQAMAAAIAEQAMAFgBAMQABAIgKAGQgDADgNAFIgXAKQADAFAFABQAFACAGAAQAJAAAHgEQAGgDAEgBQAIAAAAAIQAAAIgNAGQgKAEgLAAQgRAAgLgJgAgJgRQgFAFgDAJIAQgIQAJgDAGgFQgFgDgHAAQgHABgEAEg");
	this.shape_17.setTransform(151.2,303.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgGA6QgDgDAAgFIAAhkQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAABgQAAAOgKAAQgDAAgDgCg");
	this.shape_18.setTransform(145,301.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgHA6QgCgDAAgFIAAhkQAAgEADgDQADgCADAAQAEAAADACQADADAAAEIAABgQAAAOgKAAQgEAAgDgCg");
	this.shape_19.setTransform(140.9,301.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AASAiIgMAFIgIABQgRAAgJgJQgJgKAAgSQAAgRANgNQANgMARAAQAHAAAJAEQALAEAAAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAIIAAAKQAAANACAGIADAHIADAHQAAAEgDADQgDACgEAAQgDAAgHgGgAgJgOQgIAIAAAJQAAAKAEAFQADAFAHAAQAEAAAEgCQAEgBADgDIgCgZIABgGIABgGIgDgBIgCgBQgJAAgHAIg");
	this.shape_20.setTransform(134.8,303.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgWAgQgMgJAAgQQAAgOALgPQALgSAPAAQAIAAAKAEQAMAFAAAHQAAADgCADQgDADgEAAQgDAAgFgDQgEgEgJAAQgFAAgGALQgHALAAAHQAAAHAGAFQAFAEAIAAQAFAAAHgEIAJgDQAEAAADACQADADAAAEQAAAGgNAFQgLAFgHAAQgPAAgLgJg");
	this.shape_21.setTransform(126.6,303.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AgVA4QgDgCAAgEQAAgHAPgiIgZguIgEgFQgBgEAAgCQAAgEACgDQADgDAFAAQAFAAADADQAKAOANAcIAJgVIALgTQADgFAFAAQAEAAAEACQADADAAAEIgBAFIgaAzIgOAgIgEANQgDAHgGAAQgFAAgDgDg");
	this.shape_22.setTransform(105.7,305.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AgZAfQgMgJABgRQAAgRAJgNQALgOARAAQANAAAJAEQAKAFABAMQgBAIgIAGQgFADgMAFIgYAKQAEAFAFABQAFACAFAAQAKAAAHgEQAGgDAEgBQAHAAAAAIQAAAIgMAGQgKAEgMAAQgQAAgMgJgAgJgRQgFAFgDAJIARgIQAJgDAFgFQgEgDgJAAQgFABgFAEg");
	this.shape_23.setTransform(97.3,303.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AARA1QgCgFgBgLIgBgRIAAgFIAAgGIAAgGQgBgEgDAAQgIAAgGAHQgDAEgGALQAAAagDAFQgCAHgHAAQgEAAgDgDQgDgDAAgEIABgEIABgUIAAgwIAAgDIAAgLIAAgHIgBgGQAAgEADgDQADgDAEAAQAHAAADAIQABAEAAAJIAAAQIgBANQAGgFAGgDQAFgCAHAAQANAAAFAHQAEAGABAJIABATIABANIADAPIAAACQAAAEgDAEQgDACgEAAQgIAAgCgIg");
	this.shape_24.setTransform(89,301.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgGA1QgDgDAAgEIAAgDIAAgDIAAgKIgBgLIgBgZIgCgbIgEAAQgQAAgKgCQgIgCAAgIQAAgDADgDQADgEAFAAIALACIAMAAIANAAIANAAIAQABIARABQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAIgSAAIgRgBIACAeIABAdIABAHIAAAHQAAAGgCAEQgDAGgGAAQgDAAgDgDg");
	this.shape_25.setTransform(79.3,301.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3,1,1).p("AxLAmIAADOA3hAmIGWAAIAAj5AofjsIAAEMADtAgIETkSAXiAmMgotAAA");
	this.shape_26.setTransform(226.6,309.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00E600").s().p("AgYAfQgMgJAAgRQgBgRAKgNQALgOASAAQAMAAAIAEQALAFAAAMQAAAIgJAGQgEADgMAFIgXAKQADAFAFABQAFACAFAAQAKAAAHgEQAGgDAEgBQAHAAABAIQAAAIgNAGQgKAEgMAAQgQAAgLgJgAgJgRQgFAFgDAJIARgIQAIgDAGgFQgFgDgHAAQgHABgEAEg");
	this.shape_27.setTransform(351.7,303.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00E600").s().p("AgcAmQgDgDAAgEIAAgvIAAgGIABgHQAAgFADgCQACgDAEAAQAJAAABAJQAMgKAQAAQAOAAAAAUIAAAEQgBAMgJAAQgJAAAAgKIgBgHQgPACgHAPIAAAjQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_28.setTransform(344.1,303.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006600").s().p("AgZAfQgMgJABgRQAAgRAJgNQALgOARAAQANAAAJAEQAKAFABAMQgBAIgIAGQgFADgMAFIgYAKQAEAFAFABQAFACAFAAQAKAAAHgEQAGgDAEgBQAHAAAAAIQAAAIgMAGQgKAEgMAAQgQAAgMgJgAgJgRQgFAFgDAJIARgIQAJgDAFgFQgEgDgJAAQgFABgFAEg");
	this.shape_29.setTransform(239.9,303.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006600").s().p("AgYAfQgNgJAAgRQAAgRAKgNQALgOASAAQAMAAAIAEQAMAFgBAMQABAIgKAGQgDADgNAFIgXAKQADAFAFABQAFACAGAAQAJAAAHgEQAGgDAEgBQAIAAAAAIQAAAIgNAGQgKAEgLAAQgRAAgLgJgAgJgRQgFAFgDAJIAQgIQAJgDAGgFQgFgDgHAAQgHABgEAEg");
	this.shape_30.setTransform(197.1,303.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#006600").s().p("AARA1QgCgFgBgLIgBgRIAAgFIAAgGIAAgGQgBgEgDAAQgIAAgGAHQgDAEgGALQAAAagDAFQgCAHgHAAQgEAAgDgDQgDgDAAgEIABgEIABgUIAAgwIAAgDIAAgLIAAgHIgBgGQAAgEADgDQADgDAEAAQAHAAADAIQABAEAAAJIAAAQIgBANQAGgFAGgDQAFgCAHAAQANAAAFAHQAEAGABAJIABATIABANIADAPIAAACQAAAEgDAEQgDACgEAAQgIAAgCgIg");
	this.shape_31.setTransform(188.8,301.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006600").s().p("AgGAzQgDgCAAgEIAAgIIAAgIIgBglIgOgBQgJgCAAgIQAAgEADgDQADgDAEAAIAMABIAAgHIAAgIQAAgEADgDQADgCAEAAQAKAAAAASIAAAGIAHgBIAMACQAGABAAAIQAAADgDADQgDADgFAAIgDAAIgEAAIgHABIACAlIAAADIAAAFQAAARgLAAQgDAAgDgDg");
	this.shape_32.setTransform(180.9,302.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:200.7}},{t:this.shape_14,p:{x:208.9}},{t:this.shape_13,p:{x:219}},{t:this.shape_12},{t:this.shape_11,p:{x:291.1}},{t:this.shape_10,p:{x:301}},{t:this.shape_9,p:{x:308.7}},{t:this.shape_8,p:{x:316}},{t:this.shape_7,p:{x:323.9}},{t:this.shape_6,p:{x:331.8}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_15,p:{x:211.8}},{t:this.shape_14,p:{x:220}},{t:this.shape_13,p:{x:230.1}},{t:this.shape_29},{t:this.shape_11,p:{x:295.7}},{t:this.shape_10,p:{x:305.6}},{t:this.shape_9,p:{x:313.3}},{t:this.shape_8,p:{x:320.6}},{t:this.shape_7,p:{x:328.5}},{t:this.shape_6,p:{x:336.4}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_3}]},84).wait(1));

	// Layer 2
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3,1,1).p("AosiZIESEzAE+iZIDvDt");
	this.shape_33.setTransform(246.7,328.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(85));

	// Layer 5
	this.instance = new lib.Tween40("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(350.2,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080,guide:{path:[350.2,96.6,354.2,88.4,357,78.4,360.3,66.6,370.3,73.6,378.7,79.6,382.3,89.5,385.9,99.6,386.2,111,393.2,120.6,394.8,131.3,396.4,142.3,397.3,153.7,398.2,165,399.8,176.2,401.4,187.5,401,198.6,404,210.3,403.8,224.7,407.8,217.1,408.7,204.7,407.4,190.7,414.9,180.6,420.6,172.9,426.9,175.9,432.6,180.2,436.6,185.9,438.3,188.5,440.4,191.5,445.5,199.1,447.6,208,448.9,213.5,448.8,219.3,448.7,223.4,449,224.5,453.4,217.4,457,209.1,462.8,196.2,478.7,198.4,493.3,200.4,504.7,206,510.7,209,515.1,214.1]}},20).wait(65));

	// Layer 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(4,1,1).p("EAkaAN5IAAoKIAA7NMhIzAAAIAAc0IAAGaIAAHvMBIzAAAg");
	this.shape_34.setTransform(232.9,137.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.3,1,1).p("EAkaAJJQgDgCgCgCQgkgag7geQgcA/ACAZQgvhjhJBiAeiRRQDFgnCuAmQACABADAAAF5xvQgGgEgKgBQgJAAgJAAQgKAAgJgBQgIgBgIACQgJABgKABQgJABgJAAQgJABgIAAQgIAAgIAAQgJAAgKAAQgJAAgKgBAvxkeQACANgIAOAuSkhQABAQgKAIA39JPQhBgggdBXQgzhKhdBHQhWhzAICJQgxg/gGBnQhshBBwgnQhGgZg7AJQgVArAQApQgTgkgnA8QgyhLgoA3QADgfAAglQhiAVg0A7AwRExQAAACABADQABAJAAAJQAAACAAACQAAAJAAAJAulE0QALAOgCANQgCAOgQALAw6PMQAKgMAHgMQAIgNAEgNIAAgBAuxOcQACARABALAyTRTQAWgPAfgEQASgDAWABEgkZARHQBcAoCUAEQC5AGC5gEQCXgDCWgSQAjgEAjgF");
	this.shape_35.setTransform(233.4,116);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.3,1,1).p("AJ7pDQAJgOARgGQAOgGANgIQAPgJAOgJQANgKAQgGQAPgHAOgIQAOgIAOgGQAPgHAPgGQAPgGAOgIQAOgHAOgIQAOgIAOgIQANgJAOgIQAOgIAPgJQAMgIAPgHQAOgHAQgFQAPgEAJgKQAQANAeABQALABAKgDQAHgDAGgEQAJgHAKAGQAVANAUAOQAKAGAMAFQAMAEAMAFQAQAHAQgEQALgCgCgKQgDgOgOgIQgMgGgNgGQgSgHgTgCQgUgCgJgPQAHABAFACQAYAJAZACQAGAAAFACQAaAJAbgFQAGgBgCgEQgGgNgJgMQgIgIgLgDQgSgFgRgFQgTgHgSgFQAPgBAOgBQAQgBAQAAQAQAAARgIQAJgLgTgJQgPgHgQgBQgQgCgRAAQgQAAgQAEQgLADgFgHQgMgNAXgFQAQgEAQgEQAQgEAMgFQALgFACgLQABgSgPADQgQADgQAGQgPAFgQAGQgOAFgRADQgOADgIAJQgCACgBADQABgDABgDQAEgJACgLQAIglgXgfQgCgDgDgBQgSgKgWAHQAIALADAPQACALgHAGQgLALABAOQACAQAEAPQAFASgMAIQgHADgGAIQgLAMgGAKQgHAKgRAGQgOAGgOAHQgNAGgNAJQgNAJgOAGQgNAGgOAFQgQAFgPAEQgQAEgPAGQgOAGgPAGQgPAGgPAHQgNAIgPAFQgOAGgOAHQgPAIgOAJQgMAIgPAGQgPAGgPAGQgPAGgMAIQgPAIgMAKQgMALgQAEQgRAEgPAHQgOAHgPAHQgPAHgOAIQgBAAgBABQgCABgCACQgKAGgLAEQgPAHgQAFQgPAFgOAIQgOAJgNAHQgBABgCABQAAgIAAgJQABgQAAgSQAAgPAAgQQAAgQgBgRQgCgPgCgQQgCgQAAgPQgBgRgBgRQAAgQAAgRQAAgQAAgRQAAgQADgQQACgQACgRQACgOABgQQABgPABgRQAAgRAAgRQAAgQgCgPQgCgPgLgMQgCAAgCgBIAAAAQAHgRgJgPQAQgDAIgNQAFgHgFgGQgJgOgDgQQgDgQABgSQAAgQACgQQACgPACgPQACgPADgPQADgIABgIQABgIAAgIAPwvGQgNAIgHAQQgEAJgBAIAPMv5QgPAFgMAJQgNALgGAPQgDAKABAMAFYmXQABgBABAAQAQgFAOgGQAPgGAPgHQAOgGAPgGQAOgGAOgGQAPgHAQgEQAQgFAQgFQAQgEAQgFQAQgDARgDQAPgCAQgDQAQgDAPAGQAHADAGADQABAAABABQAHACAHADQAIADAIADQAOAGAQAFQAPAFAOAJQAOAIAPAFQAPAGAMAHQAPAJAPAGQAPAGAOAGQAQAHAPAHQAOAHAPAIQAOAJANAJQANAIAPAHQAPAGAPAGQAPAGAPAGQAOAGAOAJQANAJANAHQgPAGgRAGQgLAEgLAFQgLAGACAQQAVAIAagIQASgHATAEQAOACgLANQgIAIgHAIQgKAMgOAJQgPAKgEAQQgCAGAEAFQAGAJAOgJQAMgJAMgLQAPgQAMgTQAIgMALgKQANAIAFAPQAIAaAKAaQAGAPACAPQACAKAJACQAHACADgEQAHgIACgLQADgLgCgKQgCgMgEgJQgLgXgPgUQgHgJgCgNQANAJAMAMQALALAJANQAJAOAKAMQAKANANAKQAKAIAEgIQAGgPgFgPQgGgPgKgNQgKgMgMgKQgMgKgMgKQgUgQAaAFQAQADAPAFQARAEAOAJQANAHAMAKQAOAKAPABQAWACgLgTQgIgOgNgIQgOgIgPgFQgPgFgOgHQgPgIgMgKQgMgLgNgJQgNgKgPgJQgPgIgPgCQgRgDgNAFQgNgJgNgJQgOgIgMgLQgMgLgOgHQgPgJgOgJQgNgJgOgHQgPgHgNgJQgOgJgMgLQgNgKgNgKQgOgJgPgFQgQgGgNgIQgNgJgQgGQgPgFgQgEQgPgFgPgHQgOgGgRgEQgQgEgPgEQgPgDgRgCQgJgBgJgCQgCgBgBAAQgCAAgCgBQgMgDgLgBQgEgBgEAAAXjjBQARgLARgIQAZgMAZgPQAigUgdgDQgYgCgYADQggADgNAKQAEgaAEgZQgHAGgIAGQgYASgGAiQAAgMgDgLQgIgXgZgJQgIgDAAAGQACAiAQAfQgRgGgOgFQAEAPAVADQgLAEgLAHQgVAMgSAVQAaABAYgNQgIAKgEAOQgKAegKAXQAJgHAIgIQAVgTAUgTQgDANgBAOQgEAmAVAbQACgHABgJQAEgigDgdQAGAJADAQQAHAdAMAUQgBgQgDgQQgEgYAEgZQABgKAEgJQACgHAEgGQADgEADgEgAXXisQAMAFAPALQARANAMASQAMARAOAOQARAQASAQQAQAPANAVQANAUAOATQAPAVAMASQANAUAOARQAOARAMATQALAQAHAPQABAEACADQAAgFAAgEQgBgPABgPQgIgRgMgUQgMgVgOgRQgPgUgKgQQgMgRgMgSQgDgFgEgFQAAgBAAAAQgJgNgMgNQgPgQgQgRQgQgSgOgPQgOgQgTgSQgOgOgSgMQgIgFgFgDAaUiuQgngBgZAaQgQAQAPACQAkAEAjAFQgbAKgHAaQAbgDAbADQgSAZgSAVQgDADgCACQAFAAAEgCQAYgQAaAHQgRAFgJARQAagHAdgIQAEgBAEgCQAPgEAQABQADAAAEABQAaADATAXQgFgRgKgPQgEgEgEgFQAFAFAFACQAAAAABAAQAUAHALASQALAUARAQQASARAHATQAMgLgFgVQgEgSgLgSQgYgngRgrQAEACAFAAQAhAEAWAZQAAgQgJgLQgaghgngTQAcgDAegBQAGAAAGAAQgHgDgFgBQgygPgrACQACgHAEgDQAbgVAZgRQg3gDgkAkQgFAEgEAAQgFABgGgFQgZgXglgKQgBATARAIQAEABADABAaUiuQAEAAAEAAAa/jDQgOgFgPgBQgjgDghAOQAbAOAbACAUPErQgDgSgLgPQgDgEgJgBQgZgDgKAbQgDAGgDAEQgbgYgdAGQgNARgFAMQgKgMgRACQgGABgIABQgGgogSgcQgDgEgEgEQgDgDgCgCQgUAFgYgQQgIgFgIgDQgLATAEAXQADAPAIAJQgbgLgYgCQgNAUgFARQgRgRgMACQgDAAgEADQgKgVgOgQQgLgPgKANQgLAMgVgJQgJgEgGAFQgJAGACAOQABAbgggMQgKATgHgFQgNgLgQACQgNACgFAMQADAGACAGQAEAPALAMQALALAKALQAMALALAMQALAMALALQAMALAEAQQAFAOAJANQACADABAFQAAABAAACQADANACAOQACARgDAQQgCAMAAANQAUACAPACQAQABAJAQQAHAMAAAOQgBASgPAFQgRAFgOgLQgNgKgJgMQgEgFgFgGQACAHADAGQADAJACAJQAFARgLAMQgPAPgMgQQgGgIgEgKQADAQgLAIQgFAEgGgEQgHgEgFgJQgBAPgQgFQgCAAgCgDQgBAAAAgBQAEAQgSABQgOABgJgIQgDgCgCgDQgHgMAAgSQAAgQAJgOQAIgNAHgOQAGgQALgNQALgNAEgPQADgOgGgGQAGAEAGACAalGEQgKAGgHABQgDABgEgFQgTgXggAQQgTAJgRAUQgCgWgNgEQgFgCgEAGQgMAPgMgCQgFgBAAgGQgBgOgMgIQgMgIgNAFQgWAHgJgKQgEgFgBgGQAAgJAAgJQgMAFgHAGQgEADgFACQABgJgJgBQgHAAgEAEQgDgOgMgHQgZgMgLARQgOgYgTgSQgNgNgOAKQgFAFgFAFQABAFAAAGAUPErQgHAGgEAHAcIC6QAAgDABgDQACgSACgRQADgYAAgZQABgZgBgaQgBgZgCgXQgCgWgHgUAbdgnQAGAXAFAXQAFAYAAAZQABAZgDAYQgBAJgBAKEAgQAHVQgCgYgIgXQgEgPgOgGQgQgHgPAXQgDADgGgEQgYgSgTAWQgMAMgNANQgKAKgOAFQgWAIgCgbQgOAEgOAFQAAgXgDgZQgCgLgCgLQgEgYgDgYQgDgXgHgYQgHgWgGgYQgGgVgLgVQABgDAAgCQABgDAAgDQgBAEgBAGIAAABQgCAOgDANQACATAGAUQAHAWACAaQACASADASQAEAZACAYQACAVAAAVAbAGKQAIgMAJgJQARgTAHgVQAHgXAFgYQAGgZAEgWQABgHABgIAbpCjQAAAUgEAUQgEAZgFAWQgFAXgFAWQgFAXgLAUQgMAVgIASIAAABQgBABAAABIAAABQAHAGAMAHQgEAFgDAGAbAGKIABAAQAJACAIAIQAIAKAJAMQAKgCABAFQAFAPAHAMQAOgNAXgFAalGEQAFgDADgFQgBAAAAAAQgHgKAAASgAc8HCQgJgGgMgFQgFgDgDACQAAAEAAAFAIOO6QAKgMAYAGQAlAJAmALQAlALArgGQApgGApgHQAngGAmgCQAqgDApAAQAmAAAmAAQApAAApAAQAnAAAmABQAmAAAmgDQAqgFArAAQApgBAqAEQAfAEAgAAQApAAAngEQAdgDAfABQAnABAngBQAqgCAqAHQAiAEAjAHQAfAGAhgDAFFzQQgDANgCAOQgEAQgCAPQgCAPgCAQQgCANgCAHAEmy0QgHALgCAOQgDAQAAAQQAAAJgDAFACcwvQAGAAAGAAQARgDARAAQAQgBAQABQAQABAQgCQAQgCAPABQARACARgDQABAAAAAAAizxWQAEgGAHgCQAPgHAOgEQAOgEAPgEQAOgEANgGQAQgHAOgIQAPgIAOgHQAOgIAMgJQAOgKANgJQANgKAQgGQAQgGANgJQANgJAOgIQAFgDAGgDQAMgIANgHQAOgIAQgEQAAAHAAAHQAAAEAAAEQABAQgDAQQgCAPgBAQQAAABAAAAQgCAQgFAQQgFAPgFAPQgEAPgBARQgBAPgIAOQgFAIAHADQAEACAGABQgJAMAFAVQgkAAAJAmQAHAbgBAkQgBAhAEAhQADAigIAdQgOgHgQgFQgPgEgQgEQgDgBgDgBQAQgIASgEQANgEAMgDQgUgCgSADQgYAFgYAEQgRADgQAFQgLAEgOAAQAQgOASgMQAJgFADgJQgSACgRAGQgcAKgcAJQgQAGgQAGQgKADgDAIQgDAJgBAMQAAAGABADQgNgOgTgDQAEARAHAVQgVgIgagBQAQAUARAPQgeADgfAKQgIACgCAGQAcAEAfACQAOACgLAPQgFAHABAJQAAAIAAAIQAUgQASgPQABALgBASQAKgFAMgEQAIgDAKgBQAFgEAIABQAEABAFACQgDgEgDgGQgHgQgQgNQAKgJAUgBQgWgDgQgMQABgKANgBQAsgCAnAAQgRgHAPgDQAPgDARgBQALgBAMACQALABAKAAQACAAACAAQAHAAAGgBQgHgCgKABQgOgFgQgIQAGAAAGABQAPACAQAAQARABAPADQAKACAKACQAGABAFAAQAQACAQADQAIABAGAEAifwZQADABACABQAMAGARgHQAPgGAQgEQAQgEAQgFQAPgFANgIQAOgIAOgJQANgJAOgJQAOgJAIgMQAKgNAOgIQAOgIAPgGQAOgFAOgFQAPgEAMgJQAMgJAMgGADvxzQgFALgCAPAENyTQgGAPgCASQAAALgCAEADgvjQgFAOgFARQgFAPgDAQAEEvkQgGANgBARQgCAQgCARQgCAQgCARACyvfQgHAPAAAQQAAALgDAKAEnvqQgGANgDAOQgCALgCALQgDAMgDAMQgDAPAAAPQAAARADAPQAAAEAAADAFOwVQgEAAgFgBQgTgDgaACQghADgeAEQgiAEgfgCAE6vnQABANAEANQAEANABANQACAQADAQQADAPAAAQQAAARgFAQQgFAOgFAGACBsoQAPAHANAKQAOAJAKALQAGAFAFAFQAHADAFAGACXnAQgEgLALgKQAKgJAHgMQAIgMAEgOQAFgPABgQQABgRgEgPQgEgQgIgMQgJgOgHgOQgGgMgGgLQAJgGAQgDQAPgEAOgHQANgHAAgRQAAgRgPgIQgJgEgJAAQgPAAgOAGQgHACgHAEQgGADgGAFQgHAGgCgHQgEgMgIgNQgIgMgLgIQgIgGgHgFABVrSQAGAOgHALAAqqSQAIgHAKgHQANgLAJgLQABgBABgBQAAgBAAAAQAAgBgBAAQgJgGgPADQgQADgOAGQgQAHgIANACHsEQgCAXAIAeACPpTQAKAFAJgBQgHALgKAMQgKAMgMAKQgNAMgIANQgJANgLALQgJALgPABQgDAAABgFQAAgRAAgQQAAgRAHgMQAGgNAGgNQAFgMAOgGQAIgDAJgBQARgBAPAGgAFVn4QgFACgGADQgPAGgNAFQgQAGgOAFQgJAEgMABQgIAHgRABQgRABgQAEQgRAFgOADQgFACgGABQAAACACADAFYmXQgOAEgNAHQgOAHgPAFQgPAFgPAFQgNACgRADQgQADgQAFQgRAEgNAGQgEACgCACQgCACgCACQgHAIABANQACAQABARQAAARADAPQACAJAFAEQAFAFAIABQAQADARgBQARAAAQgBQAQgCAPAAQAQAAAOgEQAJgCAIgDQAGgDAGgEQALgHABgSQACgQAAgRQABgQAAgRQAAgQgDgPQgCgPACgPgAFVn4QAKgEAKgCQAPgEAQgGQAQgGAPgGQAOgFAQgGQAPgFAPgFQARgEAQgEQAQgEAPgEQAPgEAQgCQAQgDAPgBQANgBANABAFdokQAAAAAAABQAAAIAAAHQAAASgIAKAExlcQgIAMgHANQgIAOgEAPAFDlbQgCARgEAPQgDAOgDAOAhExXQgHALgSADQgNADgLAEAhcw9QgNAKgOAEAg/xyQgIAMgQAHQgQAGgQAFQgRAFgOAFQgFACgDAEAjKxSQABgEABgEQAAgCABgDQgDACgDACQgNAJgRAEQgPAEgPAEQgPAFgRAEQgPAEgQAFQgPAEgOAGQgPAGgQAFQgOAEgMAEQgPAFgQAFQgPAEgPAFQgPAEgPAEQgPADgOAJQgJAFgBALQAAAFABAGQAEAQAFAPQACAIAHAGQABAAAAABQAMAJARgEQAPgDAMgJQAMgJAPgHQAPgHAQgDQAPgEAOgGQAQgGAOgFQAQgFAQgDQAQgDARgEQAQgEAOgEQAQgFAQgDQAQgBAPgFQAIgDgDgDQgBAAAAAAQgEgBgFABAjKxSQgBAGAAAHQgBARABARQABASAMAIQABAAABABQAAAAABAAQATgGAJgLAizxWQgDAGAAAKQAAAQAJAOQAGAJAIAGAizxWQgLADgMABAjpwhQgNAHgQAEQgMAFgOADQgLADgIAEAiouYQAVAkgLArQgLAsgkACQgmACgcgPQghgSgegSQgRgKgXgCAowvVQAAALADAMQADAQAJANQABACAAABQAAAAAAAAQgDACgCAAAogvgQgIAIgIADQAAgEAAgFQgMAAgPAJQgOAIgPAFQgPAFgRAEQgPAEgQAGQgPAGgPAEQgQAEgPAFQgOAFgPAFQgQAGgPAAQgQABgPACQgQADgRAEQgGABgGABQgDAAgCABQgCAAgBAAQgBABgBAAQgFgDgEACQAAgLABgMQABgQAAgSQAAgRAAgQQAAgRgCgPQgCgRgDgPQgEgQgBgPQAAgQADgOQAEgQgBgRQgKgHgPgHQgPgGgQgFQgPgFgPgDQgMgCgIAOQgHAMgCARQgBAQgCAQQgBAQAAARQAAARgBARQgBAQgBAQQgCARAAARQABARACAPQADAMgBAPQAEABAEACQANAJAQAEQAOAEANAGQANAFAMAHQABAAAAAAQAJgLATgIQACAAADgBQAAADAAADAtstUQAJgBAJgCQAHgCAHgBQAJgBAKgCQASgFASgEQAOgDAPgDQAUgDAVgBQAXAAAXgCQAGgBAGgBQASgGAUgGQATgIAVgBQAZgCAVgJQgDgEgEgGIABAAQALgFAIgEAphuyQgQACgOAHQgPAHgQAHQgPAGgOADAm/tYQAqACAkAUQAkAVAjAVQAjAVAHAiQAKAxgrAMQgmALgqAFQgmADgoAAQgjAAgkAAQgiAAgjAAQA/AJBDAPQAoAJAaAVQAbAUgNAnQgDAKgRAEQhMAThRAHQgoAEgkAGQA5gCA3AHQA8AHA3AWQAfAMAIAeQARA/g1AxQgtArg8AYABGsCQACABACABAiAqZQgHAJACAQQABARAFAOQAEARALAIQALAJAOADQAIADAKACQAHABAGgCQAJgBAHgGQAMgKAHgLQAGgJgDgCAAxpgQgKALgLANQgKALgFAQQgFAPgFAPQgCAIgEALQABACABADQABAFACAEQAHALABARQABAQgBAQQgBAJgEAHQgIANgMAHQgNAIgOAHQgOAIgHALQgGAIgGAGQgF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");
	this.shape_36.setTransform(235.4,130.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D2F4FF").s().p("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gFAMQgEgJgGgIQgKgNgGgOIgLgeQgGgQgIgLIgSgaIgSgcIgSgaQgKgOgLgMIgXgWIgWgWIgVgWIgVgVIgYgXIgXgVIgXgXIgLgMQgKgOgMgEQgQgDgOAEQgPAFgOAJIgOALQAJgIgBgPIgDghQgBgQACgQIAFggQACgQgEgQQgKgKgMACQAIgHgIgMIAMgHQALgHABgSIACghIABggQAAgQgDgPQgCgPACgPIACgBQAQgFAOgGIAegNIAdgMIAcgMQAPgHAQgEIAggKIAggJQAQgDARgDIAfgFQARgDAOAGIANAGIACABIAOAFIAQAGIAeALQAPAFAOAJQAOAIAPAFQAPAGAMAHQAPAJAPAGIAeAMIAeAOIAdAPIAbASQANAHAQAHIAdAMIAeAMQAOAGAOAJQANAJANAHIgfAMQgMAEgLAFQgLAGACAQQAVAIAagIQASgHATAEQAOACgLANIgPAQQgKAMgNAJQgPAKgFAQQgCAGAEAFQAGAJAOgJQANgJALgLQAPgQANgTQAIgMAKgKQANAIAFAPIASA0QAGAPACAPQACAKAKACQAGACADgEQAHgIACgLQADgLgCgKQgCgMgEgJQgLgXgPgUQgHgJgCgNQANAJAMAMQALALAJANQAJAOAKAMQAKANANAKQAKAIAEgIQAGgPgFgPQgGgPgKgNQgJgMgNgKIgYgUQgTgQAZAFIAgAIQAQAEAOAJQANAHAMAKQAOAKAPABQAWACgKgTQgJgOgNgIQgOgIgPgFQgOgFgPgHQgPgIgLgKIgagUQgNgKgPgJQgPgIgPgCQgRgDgNAFIgagRQgNgIgMgLQgNgLgOgHQgPgJgOgJQgMgJgPgHQgPgHgNgJQgOgJgMgLIgagUQgOgJgPgFQgQgGgNgIQgNgJgQgGIgfgJIgegMQgOgGgRgEIgfgIQgPgDgRgCIgSgDIgDgBIgEgBQgMgDgLgBIgIgBQAJgOARgGQAOgGANgIIAdgSQAOgKAPgGQAPgHAPgIIAbgOIAegNQAPgGAPgIIAbgPIAcgQIAbgRIAdgRQANgIAOgHQAOgHAQgFQAPgEAJgKQARANAdABQALABALgDQAGgDAGgEQAJgHAKAGQAVANAUAOQAKAGAMAFIAYAJQAQAHAQgEQALgCgCgKQgDgOgOgIIgYgMQgTgHgTgCQgUgCgJgPIAMADQAYAJAZACQAGAAAFACQAaAJAbgFQAGgBgCgEQgGgNgJgMQgIgIgLgDIgjgKQgTgHgSgFIAdgCQAQgBARAAQAPAAARgIQAJgLgTgJQgOgHgRgBIghgCQgQAAgQAEQgKADgGgHQgMgNAYgFIAfgIQAQgEANgFQALgFABgLQACgSgQADQgQADgQAGIgfALQgOAFgRADQgOADgIAJIgDAFIACgGQAEgJACgLQAIglgWgfIgGgEQgSgKgWAHQAIALADAPQACALgHAGQgLALABAOQACAQAEAPQAFASgMAIQgHADgGAIQgLAMgFAKQgIAKgRAGQgOAGgNAHQgOAGgNAJQgMAJgPAGIgbALIgfAJQgQAEgPAGIgcAMQgQAGgOAHQgOAIgPAFQgOAGgOAHIgdARQgMAIgPAGIgeAMQgOAGgNAIQgPAIgMAKQgMALgQAEQgRAEgPAHIgdAOIgdAPIgCABIgEADQgKAGgLAEIgfAMQgPAFgNAIIgcAQIgCACIAAgRIAAgiIAAgfIgBghIgEgfIgCgfIgBgiIgBghIABghQgBgQADgQIAEghIADgeIACggIAAgiQAAgQgCgPQgCgPgLgMIgEgBIAAAAQAHgRgIgPQAPgDAIgNQAFgHgFgGQgJgOgDgQQgDgQABgSQAAgQACgQIAEgeQACgPADgPIAEgQQgGgEgKgBIgSAAIgTgBQgIgBgIACIgTACIgSABIgRABIgQAAIgTAAIgTgBIAAgOQgQAEgOAIIgZAPIgLAGQgOAIgNAJQgNAJgQAGQgQAGgNAKIgbATIgbARIgbAPQgPAIgPAHQgOAGgOAEIgdAIQgOAEgPAHQgHACgDAGQgMADgMABIACgIIABgFIgGAEQgMAJgRAEIgfAIIgfAJIggAJIgdAKIgfALIgaAIIgfAKIgdAJIgfAIQgPADgOAJQgJAFgBALQgIAIgIADIAAgJQgLAAgQAJQgOAIgPAFIgfAJQgQAEgQAGQgPAGgPAEIgeAJIgeAKQgQAGgPAAQgQABgPACIggAHIgNACIgFABIgDAAIgCABQgFgDgEACIABgXIABgiIAAghQAAgRgCgPQgCgRgDgPQgEgQgBgPQAAgQAEgOQADgQgBgRQgKgHgPgHQgPgGgPgFQgQgFgPgDQgMgCgIAOQgHAMgCARIgCAgQgCAQAAARQAAARgBARIgCAgIgCAiQABARACAPQADAMgBAPQgGgCgGACQgQAFAKANQADAFAHAGIACACQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBgBQgOgDgRACQgPABgPADQgQAEgRAAQgRABgPAHQgPAGgBAQQAAARALAMQALALARgJQAOgHAQgEIAfgHQAQgEARABQAMABAGgEQgFAEgBAJQgCAPAKADQABADAAAEQgBARACARIADAgIACAfQAAAQADAQQADAPAAARIAAAhIgBAhQgCARgFAPIgKAfIgMAeQgGAPAAASQABAIAEAGQACAFAFADQACANgIAOQgJgBgHgEQgGARgDARQgDAZADAXQAFAhAHAgQAEAUABAVIABApQAAAVgBAUQgDAngLAjQgIAcAEAdQADAXAAAXIhNABIhOACIgEAAIgDAAIgHAAIAAAAIgBAAQgeAAgegCIgHAAIgFAAIgIgBIgLAAIAAAAIgBAAQgcAAgcAEIgCABQgmAFgnAAIAAAAIAAAAIgDAAIgDAAIgCAAIgIAAIAAAAIgBAAQgbAAgaADIgDABIgBAAIgGABQgdAEggAAIAAAAIAAAAIgJAAIgCAAIgEAAIgDAAIgBAAIAAAAQgWAAgSAEQASgEAWAAIAAAAIABAAIADAAIAEAAIACAAIAJAAIAAAAIAAAAQAgAAAdgEIAGgBIABAAIADgBQAagDAbAAIABAAIAAAAIAIAAIACAAIADAAIADAAIAAAAIAAAAQAnAAAmgFIACgBQAcgEAcAAIABAAIAAAAIALAAIAIABIAFAAIAHAAQAeACAeAAIABAAIAAAAIAHAAIADAAIAEAAIBOgCIBNgBIAAABQAAAUgBAQIgBALIgOAAIhQgBIgOAAIgNAAIAAAAIgBAAIgVAAIgWABIgHAAIg4ABIgBAAIAAAAIgIAAIgIAAIgCAAIgCAAIAAAAIgBAAQgqAAggAQQgJAFgKAEQAKgEAJgFQAggQAqAAIABAAIAAAAIACAAIACAAIAIAAIAIAAIAAAAIABAAIA4gBIAHAAIAWgBIAVAAIABAAIAAAAIANAAIAOAAIBQABIAOAAIgCAUQgDARgBASQAAAMAFAHIABAFIABASIgPgBQgqACgjABIhMAAIhEgBIgIAAIgHAAIAAAAIgBAAQghAAggADIgkACIAkgCQAggDAhAAIABAAIAAAAIAHAAIAIAAIBEABIBMAAQAjgBAqgCQgEAbAIAZQAHAXADAXQAFAggIAgQgHAZgEAbQgEAYgFAZQgUgQgNgVQgPgZgHAiQgFAXABAZQgOgQgOgCIgyAvQgOANgEgdQgCgTgIgQQgZABgLATQADgXgYgWQgIgHgEAKIgPAqQgFAPgHAMIgMgYQgYARgSAYQgLAOgNgFQAHgcgMgQQgZgMgNAOQgRATgCgbQgDgfgegLQgQgHgKAMQgGAIgEAJQhBgggdBXQgzhKhdBHQhWhzAICJQgxg/gGBnQhshBBwgngA1/KSIAIAAIAJAAIBKAAIhKAAIgJAAIgIAAIAAAAIgBAAIg5gBIgKAAIAKAAIA5ABIABAAIAAAAgA/0GGIBTgBQAngBAngEIA8gGIA4gNQAjgHAkgDQAlgDAlgCQAlgBAmAAIA+AAIg+AAQgmAAglABQglACglADQgkADgjAHIg4ANIg8AGQgnAEgnABIhTABIgBAAIAAAAIAAAAIABAAgAP1pVQgEAJgBAIQABgIAEgJQAIgQAMgIQgMAIgIAQgAO1piIAAgFQAAgJACgIQAGgPAOgLQALgJAPgFQgPAFgLAJQgOALgGAPQgCAIAAAJIAAAFgAF+ulIABgQIgBAQgAcIMGQgCgFgKACIgRgWQgIgIgJgCIgBAAQAIgMAJgJQARgTAHgVQAHgXAFgYIAKgvIACgPQACATAGAUQAHAWACAaIAFAkQAEAZACAYIACAqQgXAFgOANQgHgMgEgPgAImK3QgEADgDgHIgJgSQgIAHgHAIQgEgdgaAHQgFACgBAEQgTgUgJARQgEAGgCAIQgQgLgTgEQgIgWgIgOQgEgJgMAIIguAgQgKAHgMAFIgIgHQgMgKgIAEIACgSQACgZAHgXIAPgvQAHgWAEgXQADgYAAgYIAQgKQANgJAMgLIAYgWIAXgTIAXgUQAFANAJAOQAHAOAMALIAXAYIAXAWQANAMAIAMIARAZQAIANAMALIAXAXIAWAXQANAMAHAOIATAeIARAbIAHAKQgYgGgUAIQgJAEgCAIIgQgcQgPAVgQAYQgKgWgUALgAgHHRIAFgEIATgXQAIgLAMgMIAXgWIAXgWQAMgLAKgMIATgZQAIgMAHgOQgFASAAARQAAAQgDAQIgEAfQgBANgGAJIgFADQgOAKgOAHIgdAMQgPAHgRADQgSADgLAHgAuTGzIAAAAgAwJGBIAAAAg");
	this.shape_37.setTransform(232.9,95.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag7A1QgJgDACgPQABgJAFgEIAEgDQAGgCAHAAQAGAAAGgDIAYgNIgYgGQgOgEgNgIIgBgBIgFgDIgDgCQgGgGgEgFQgJgNAQgFQAGgBAGABQAEABAEACQANAJAQAEQAPAEALAGIAZAMIACABIgBgBQAJgLATgIIAFgBIAJgBQAEAEABAEQAEATgUADIgMABIgSgJIASAJIAIAEIANAJIAEADIAGAGQgGANgNgCIgIgCIgUgJIgIgDIgbgMIgGgCIAGACIAbAMIAIADIgaARQgNAIgPAFQgPAEgPABIgDABIgGgBgABAgcIAAgDIAAgDIAAADIAAADg");
	this.shape_38.setTransform(139.4,43.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AAHAZQgIgOgMgKIgLgJQAGgBAHgEIAXgRIAHgGIADAEIADAgQAAAQgCAQIgEAFQgGgFgGgHg");
	this.shape_39.setTransform(258.5,148.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("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bgTQANgJAQgGQAQgGANgJQANgJAOgIIAKgGIAagPQAOgIAQgEIAAANIATABIATAAIAQAAIAQAAIATgBIASgDQAIgBAJAAIASABIASABQALAAAFAEIgDAQQgEAPgBAPIgEAeQgCARAAAQQgBARADAQQADARAJANQAEAGgEAHQgJAOgPACIgBABQgRACgRgBQgQgBgPABQgQACgQgBQgQgBgRABIghADIgMABQgGgBgEgCQgHgEAFgIQAIgNABgQQABgQAEgPIAKgfQAFgPABgQIABgCQgMAGgNAKQgMAIgOAFIgcAKQgPAGgOAIQgOAIgKANQgIAMgOAJIgcARIgcASQgOAHgPAFIgfAJQgQAEgPAGQgKAEgIAAQgGAAgFgCgAEfwwQAOgDAMgKQgMAKgOADgAE5xJQgOADgKAEQAKgEAOgDQARgEAIgLQgIALgRAEgAE/xfIggAKIgfALQgFABgDAFQADgFAFgBIAfgLIAggKQAQgHAIgMQgIAMgQAHgAJ/xZQACgPAFgMQgFAMgCAPgALXy1IgGAfIgEAfQgCANgCAHQACgHACgNIAEgfIAGgfIAEgcIgEAcgAKcxzIgCAQIACgQQABgRAHgQQgHAQgBARgAK0ybQgDAQAAAQQAAAJgDAEQADgEAAgJQAAgQADgQQACgOAHgLQgHALgCAOgAJJzZIgDAfIADgfQACgNAAgNIAAgFIAAgJIAAAJIAAAFQAAANgCANg");
	this.shape_40.setTransform(194.8,130.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag0A0IAAggQAAgRAHgMQAGgMAGgNQAFgNAOgFQAHgEAJAAQARgCAPAGQAKAFAJgBQgHAMgKAMQgKALgMALQgNALgHANQgJANgLAKQgJALgPABQgDAAABgFg");
	this.shape_41.setTransform(246.3,75.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("AiVBVQAAgJAFgGQAKgQgOgBQgegDgdgEQADgFAHgCQAfgKAfgDQgSgPgPgTQAaAAAUAIIgLglQAUADANAOQgCgEABgFQAAgMAEgKQADgHAJgEIAggLIA3gTQASgHASgBQgCAIgKAGQgTALgOAPQAMgBAMgDQAQgFASgDIAwgJQASgEATADIgZAGQgRAEgQAJIAFABIAfAJQAQAEAPAIQAOAHAOAJQANAKALAKIALAJQgGgDgJgBIgfgEIgLgCIgVgDQgPgDgQgBQgQgBgQgCIgLAAQAPAIAPAFIAAACQgLAAgLgCQgLgBgMABQgQABgRACQgOACARAIQgmgBgsACQgOABAAAKQAQAMAVADQgTACgKAJQAPANAHAPIAGALIgIgDQgJgCgFAEQgJABgJAEIgWAIIABgcIgnAeIAAgQg");
	this.shape_42.setTransform(233.9,53.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#996633").s().p("AiyAzIACADIgBAAgACxg0IAAgBIACACIgCgBg");
	this.shape_43.setTransform(198.7,32.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC9900").s().p("EgkZAD/IAAnuIAFAAQBcAoCUAEQC5AGC5gEQCXgDCWgSIBGgJIACAAIAtgCIAwgBIAwgBIAiAAIAIgBQAcgBARgRQASgDAWABIACAKQAEAZACAaIAAAFIABgFIAHgOQALAkATgMIAMgIQAFgDAKADQAJADAJAGQAIAGAIgKQAIgBAHACQgCgVACgaIAAgGIABgHQAqgHAoAAIBTgBQApAAAogFQAngFAmANQAoAMAkAVQApAXAlgRIBKggQAOgHAQABQArACAoAMQAlAMAogBQAogCAngJQAogJAjADIgGAVIgOAtIgOAuQgHAVgFAXQgFAXgIAWQgHAVgJAWQgKAWgPATIgaAfQgEAHgBAHIABAIQAZgTAggIQArgNAUglQADADAAAFQADAdgEAkQAYgMAZgCQAhgDAPgbQgDATAGAPIAMgNIACgCIAPgEIAFgMQAHgEAHgDQgHADgHAEQAEgPAAgTQABgYAEgYQADgXAFgWQAGgYAHgXIAPgtQAIgVADgZIAGgjQAhABAhAEIBHAHQApAEAqgBQAjgBAhgDIAAAQQgCAQAHANQAHAOAPAEQAQAEARgBQARgBAOgIQAOgIAGgPQAFgQAJgOIAEgIIABgCQAKgNAYAHIBLAUQAlALArgGIBSgNQAngGAngCQApgDApAAIBMAAIBSAAIBNABQAnAAAlgDQAqgFArAAQApgBAqAEQAfAEAgAAQApAAAngEQAegEAeACQAnABAngBQAqgCAqAHQAiAEAjAHQAfAGAhgDQDFgnCuAmIAAHlgAuwipQAGAAADgDQgGgGgKgBQAKABAGAGQgDADgGAAIAAAAIAAAAIgBAAIgBAAIgBAAIABAAIABAAIABAAIAAAAIAAAAgAwsitQACgDABgGQgBAGgCADg");
	this.shape_44.setTransform(232.9,249.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#339900").s().p("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YAQAUgFIAFAFIAHAIQASAcAHAoIANgBQARgCAKALQAFgMANgRQAdgGAbAYIAGgJQAKgbAaACQAIABADAEQALAPADASIALgKQANgKAOANQATASANAYQALgQAZAMQAMAGADAPQAEgFAHAAQAJABgBAKIAJgGQAHgFAMgGIAAASQABAHAEAEQAJAKAWgHQANgFAMAIQAMAIABAPQABAGAEAAQAMADAMgQQAEgFAFABQANAFADAVQAQgUATgJQAggQATAXQAFAFADgBQAGAAAKgHQAFgDADgEIAAAAQAHAHAMAGIABAAQAJACAIAIIARAWQAKgCACAFQAEAPAHAMQAOgMAXgGQADgBAFACQAMAFAKAHQANgGAOgEQACAcAWgJQAOgFAKgKIAZgZQATgWAYASQAGAFADgEQAPgXAQAHQAOAGAEAPQAIAXACAYQBJhiAvBjQgCgZAcg/QA7AeAkAbIAAIJQiugmjFAoQghACgfgGQgjgGgigFQgqgHgqACQgnABgngBQgegBgeADQgnAEgpAAQggAAgfgDQgqgEgpAAQgrAAgqAFQglAEgngBIhNgBIhSAAIhMAAQgpAAgpADQgnADgnAGIhSAMQgQACgPAAQgaAAgXgGgAc4iXIAAgJIAAAJgAbSjAIAHgMIgHAMgAUdkdQAFgHAGgHIABALIgBgLQgGAHgFAHgAEOFqIhHgHQghgEghgBIACgOIAKgtQAGgXAHgXQAIgWAFgXIAOgtQAIgXABgaQACgZAQgOQAVgQgBgZQgBgagMgRIgKAGQAFgTAAgVIATgEIgBALIABgLIACgSQACgWAHgXQAGgXADgUQARADAPAGQAOAIANAJIAKAHQANALAHAPQAHAPAFAPQAFARABAPIAEAgQACAPAGAOQAGAOABARQACAQAEAQIAHAhQAFAPABARIAGAfIAJAgIAJAeIACAJQAFAKAAANIAAAGQgBAPgGAQQgGAPADARIACASQghADgjABIgPAAQgiAAgigDg");
	this.shape_45.setTransform(232.9,190.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#993333").s().p("A2CPDQgZAAgYgIIgJgCQAIgOADgMIAAgBIBBAFQAXACAVgFIADAdQgJAAgJACQgWAEgVAAIgEAAgAkVLsQgZgBgWgIQgTgHgPgQQABgRALgNIAcAMQATAHAcgBQAZgBAYgEIAdgFQAAAVgFAUQgMAGgRADQgXAEgWAAIgFAAgAWoJLQgGgDgCACIgCgqQgCgYgEgZIgFgkQgCgagHgXQgGgUgCgSIgCAPIgKAvQgFAYgHAXQgHAVgRASQgJAKgIALQgMgGgHgHIABgDIAAAAQAIgTAMgVQAKgUAGgWIAKgtIAJgvQAEgUAAgVIgBgIIAAgLIABgTIgBATIAAALIgCACQgHgPgLgRQgMgSgOgRQgOgRgNgUIgbgnIgbgoQgNgVgQgPIgjggQgOgOgMgSQgMgRgRgMQgPgLgMgGQACgHAEgGIAGgHIANAIQASALAOAOQATASAOAPIAeAhIAfAiQALANAKANIAAAAIAHAKIAXAlQAKAQAQAUQAOARAMAVQALAUAJARIACgUQADgXgBgZQAAgagFgYIgLguIAIgDQAPgEAQABQAHAUACAWIADAxIAAAzQgBAZgCAXIgEAkIgBAFIgCALIAAAAIgFAcIAFgcQALAWAGAVIANAuQAHAYADAXIAHAwIADAVQAEAaAAAXQgKgHgLgEgA1pFaQgegKgbgDIgBgSIADgBQAKAIARABQAdABAUgFIAcgHQAKAPgBANQgQAEgRABIgDAAIgRABIgFAAgAVpEuIAAAAgAishCQgQAAgQgDIgSgDIADgYQAFAFAIABQAQADARgBIAhgCIAfgBQAQAAAOgEQAJgCAIgEQAHANgHAHQgFABgFADIgHACIgdAFIgeADIgYABIgKAAgA2Kj+QAHgOgCgOQAHAFALAAQARAAAQgCIAegDQAIAAAHgCQAAAQgJAIIgRADQgZAFgaAAIgCAAQgMAAgKgCgAugsNQgJgNgDgRQgDgLAAgLQAIgDAIgIIABALQADAQAFAOQADAJAHAGIABAAIgUAKgAo7t0IgCgCQgMgHgBgSQgCgRACgRIABgOQAMAAALgDQgEAGABAJQAAARAJAOQAGAJAIAFQgJAMgTAGIgBAAgAjnt6QgEgVAJgMIAMgBIAigDQAQAAAQAAQAQABAQgBQAPgCAQABQARACARgDIABAAQAIAPgGARIAAAAIgJgBQgUgDgZACIg/AHQgZADgYAAIgRgBg");
	this.shape_46.setTransform(273.8,115.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#336600").s().p("ADxCJQgRgSgLgUQgKgSgVgGIgBgBQgFgCgEgFIAHAKQAKAOAFASQgSgYgbgDIgHAAQgQgBgOAEIgJACIg2AQQAIgSARgEQgagHgYAPIgEgDQASgVASgZQgbgCgbACQAHgaAbgKQgigEgkgEQgPgBAQgRQAZgZAmAAIAIAAIgIAAQgbgCgagNQAggPAjADQAQABAOAFQgSgIACgTQAkALAaAWQAGAFAEAAQAFgBAEgDQAlgkA2ACQgYASgbAUQgFADgCAHQArgCAyAQIAAADQgeABgbADQAnATAaAgQAJAMgBAPQgWgZgggDIgKgDQARArAYAnQALASAEATQAFAWgMALQgHgTgSgRgABQhCIgGgCIAGACgAjQgEIAEgcIgpAmQgIAIgJAGQALgVAJgfQAEgOAJgKQgYANgbgBQATgVAUgMQALgGALgFQgUgCgFgPIAgAKQgRgegBgiQAAgHAHADQAaAJAHAYQADALAAALQAHgiAXgSIAPgMIgIAzQANgKAggDQAYgCAYACQAdACghAUQgaAPgZAMQgRAJgRAKIgFAIQgEAGgDAHQgEAJgBALQgEAZAEAWIAEAhQgMgVgGgcQgEgPgGgKQADAcgEAiQAAAJgDAIQgUgbADglg");
	this.shape_47.setTransform(400.8,117.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCC99").s().p("AhWQEQgQgEgHgNQgGgOABgQIAAgQIgCgSQgDgRAGgPQAGgQABgPIAAgGQAAgNgFgKIgCgJIgJgeIgJgfIgFggQgCgQgEgQIgIghQgEgQgBgQQgCgQgGgOQgFgPgCgPIgEghQgCgPgFgQQgEgQgHgOQgHgPgOgLIgJgIQgOgJgOgHQgPgHgQgDQAKgYADgWQAFgXAHgWQAFgOACgPQAIgEANALIAIAGQAIAGAJAEIAcALQAOAFALANQAKALAGAOQAHAOACAOIAGAhIAGAcQADARAFAOQAEAPACAPQACAPAGAPIAJAdIAHAfIAGAfIAEAgIACAhIAEAgQABAPAFAQIAHAfQAEARAPAFQAQAFAMgIQAMgHAFgPQAEgRgDgQIgBgEIgCgEQgHgMAEgQQAFgSAKAIQACgOAMAAQAAgEACgFQAGgOAUAMIABgHQAEgQATAIQADgJAEgHQAKgQASAFQAPAFAHAPQAHAPgCARQgCAQgLAJQAJAHAHALQAJANAAARQAAAQgGAPQgGAPgKAMQgJALgPAGQgMAGgOAFQgQAGgQADQgPADgNAMQgKALgEAPQgDAJgEAJIgBACIgEAJQgIAOgFAPQgGAPgOAIQgOAIgRABIgHABQgNAAgMgEgAhcN+IACAHIgCgHIAAgFQAAgOAKgKQgKAKAAAOIAAAFgAAbL3IABgDIAAgCIAAAAIAAgEIAAgDIAAADIAAAEIAAAAIAAACIgBADIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAgACPL1IgFgEIAFAEgABKLzQgFgDAAgQIAAgDIABgLIgBALIAAADQAAAQAFADgAAqLfQAAAJADAJQgDgJAAgJIAAgCIAAACIAAAAgABiLtQgHgJAAgNIABgIIACgMIgCAMIgBAIQAAANAHAJgADGKRIgFgFQgGgMAAgSQAAgRAIgNQAJgNAGgPQAHgPALgOQALgNADgPQADgNgFgGQAFADAGACQgGgCgFgDIgIgGQgGgFgGgCQgPgGgOgGQgPgHgNgKQgOgJgHgOQgHgRAJgPIAHgKQAKgNgGgPIgJgSIgGgKIgRgbIgUgeQgHgOgMgLIgWgXIgXgXQgMgLgIgOIgSgZQgHgMgNgMIgXgWIgWgXQgMgMgIgNQgIgOgGgNIgXAUIgXATIgYAWQgLALgNAIIgRALIgHAEIgaASIgQALIAAAAIgCACIgHAFIgYARQgHAFgGAAIgMgNQgLgLgHgOIgNgdQgGgPgBgQQAAgRABgPQAJgFAGgHQAMgEALADIABABIACgCIANgIIAKgHIAbgPIAcgQQANgIALgNQALgMAMgLIAIgGIADgDIAOgKQANgKAPgFQAOgEAQAEQAMADALAPIAKALIAYAXIAWAWIAYAWIAUAVIAVAWIAXAWIAWAWQALALAKAOIATAbIARAbIASAaQAJAMAFAQIAMAdQAGAOAJANQAGAIAEAJIAFAMQAFAPALAMIAVAWIAXAXIAWAXQALAMAFAPQAEAPAKANQACADAAAEIABADQADAOABANQACARgDARQgCAMABAMIAiAEQARACAJAPQAHAMgBAOQAAATgQAEQgRAFgOgKQgNgKgIgMIgKgLIAFANIAGASQAEAQgLANQgOAPgMgQQgGgIgEgKIgBgDIgCgHIACAHIABADQADAQgLAHQgGAFgFgEQgHgFgGgJIgBgBQgDgHgCgGQACAGADAHIABABQAAAQgQgFIgFgDIgBgBQAFAQgSABIgCAAQgNAAgJgHgADrKHQgCgEgCgFQACAFACAEgADUGwIACAFIgCgFQgCgOAAgOIAAgEQAAgQADgQQgDAQAAAQIAAAEQAAAOACAOgAEBKAIAAAAgApOGLIABgDIgBADgAraChQgQAAgQgDQgPgDgPgFQgPgGgRgEQgQgEgNgJIgGgFQAFACABgEIAEgIQAGgMAIgLIASgZIASgZIASgaIARgZIASgbIARgaQAHgOAMgLQALgMAJgNIASgbQAJgNAFgPQAFgPAKgOQAIgNAFgPIALgeQAGgPADgQQADgRAIgNQAJgNAEgNQAHgHAFgIQAHgLAPgIIAagOQAMgHAJgOQAFgGABgJQABgQgCgQQgBgRgHgLIgEgKIgCgEIAIgTIAKgfQAFgQAJgLIAVgXIgVAXQgJALgFAQIgKAfIgIATQgFgKgHgGQgOgLgJgLIgRgWQAIgCAIgFQAMgLAHgLQAEgGAAgDIgBgCIABACQAAADgEAGQgHALgMALQgIAFgIACQgHABgHgBIgSgEQgNgEgMgIQgKgIgFgRQgEgPgCgQQgBgRAHgIIABgCIAWgJQAJgDAJgBQAFgEAJACIAIADIgGgLQgGgQgQgMQAKgJATgCQgVgDgQgMQABgKANgBQAsgCAnAAQgRgHAOgDQARgDAQAAQAMgBALABQALACALAAIADAAIAPAKQALAIAIAMQAJAOADALQACAHAIgGIAMgIIANgGQAPgGAPAAQAIAAAKAFQAOAIAAARQAAARgMAGQgPAHgOAEQgQAEgJAFIAMAXQAHAOAJAOQAHAMAFARQAEAOgBASQgBAPgFAPQgFAOgHANQgIALgKAKQgKAKADAKIALgCIAggJQAPgEARAAQASgBAIgHQALgBAKgEIAegLIAbgMIAMgFQAHgKABgRIAAgQIAAgBIADgBIAbgQQAOgJAPgFIAegLQAMgFAJgGIAFgDIABgBIAdgPIAdgNQAPgHAQgFQAQgEANgKQAMgKAOgJQANgIAOgFIAegNQAQgGAMgIIAcgQQAOgIAPgFQAOgGAOgHQAPgHAPgGIAdgNQAPgGAPgEIAfgJIAcgLQAOgGANgIQANgJANgHQAOgHAOgFQAQgGAIgKQAGgKALgNQAFgHAHgEQANgIgGgSQgEgPgCgQQgBgOAMgKQAHgGgDgMQgDgOgIgLQAXgIASAKIAFAFQAWAegIAmQgCALgEAJIgCAFIAEgEQAIgJAOgDQAQgEAPgFIAfgLQAPgGARgDQAPgDgCATQgBAKgLAFQgMAFgRAEIgfAIQgYAGAMANQAGAGALgCQAPgEARAAIAhABQAQABAPAHQASAJgIALQgRAJgQAAQgQgBgQABIgdADQARAEATAHIAjAKQAMADAHAJQAKALAGANQABAEgGABQgaAFgagIQgGgCgGgBQgZgCgXgIIgMgDQAJAOATACQAUACASAIIAYAMQAOAHADAOQADAKgLADQgRADgQgGIgXgJQgMgFgLgHQgTgOgVgMQgLgHgJAHQgFAFgHACQgKAEgMgBQgdgCgRgNQgIAKgPAEQgQAFgPAHQgOAHgNAIIgdASIgbAQIgbARIgcAOQgOAIgQAGIgdANIgcAOQgOAIgQAHQgPAHgOAJIgcASQgNAIgPAGQgQAHgKANIAIABQALABAMAEIAEABIADAAIATADQAQACAPAEIAfAHQARAFAOAGIAfALIAfAKQAPAFAOAJQAMAJAQAFQAQAGANAJIAaAUQANAKANAJQANAJAPAHQAPAHANAJQAOAKAOAIQAOAIANAKQAMALAOAJIAaASQAMgFARACQAQACAPAJQAOAIANAKIAaAVQAMAJAOAIQAPAIAPAFQAPAFANAIQAOAIAIAOQALASgWgBQgQgBgOgLQgLgJgNgIQgPgJgQgEIgggHQgZgFATAPIAZAUQAMAKAKANQAKAMAFAPQAGAQgHAOQgDAIgLgIQgNgKgJgNQgKgMgJgNQgJgNgMgLQgLgMgOgJQADAMAHAKQAPATAKAXQAFAKABALQACALgCALQgCAKgHAIQgEAFgGgCQgJgDgCgKQgDgPgFgOIgTg0QgFgPgMgJQgLAKgIANQgMASgQAQQgLAMgNAIQgOAJgGgIQgEgGACgGQAFgPAPgKQAOgJAJgMIAPgRQAMgNgPgCQgSgDgTAGQgaAJgUgIQgCgRALgFQAKgGAMgEIAggLQgOgIgNgIQgNgKgPgGIgdgMIgegMQgPgGgNgJIgcgRIgdgPIgegOIgegMQgOgHgPgIQgMgIgPgFQgPgGgOgIQgOgJgQgFIgegLIgPgGIgPgFIgCgBIgMgGQgPgFgQADIggAFQgQACgQAEIghAJIgfAJQgPAEgPAHIgdAMIgcAMIgfAOQgOAGgPAFIgDAAQgNAFgNAGQgOAHgQAGIgeAKIgeAFQgPACgQAFQgRAEgOAGIgGAFIgDADQgHAJABANQACAQAAAQQABARADAQQACAIAFAFIgDAXIgNgDQgGgBgDAHIgHAPQgGANgDAOIgIAgIgEAfQgCAQAAARQAAARAFAQQgHANgIAMIgTAYQgJANgNALIgXAWIgWAWQgMALgJAMIgUAWIgEAEIgGAEQgFACgFAGIgGABIgGABIgNACIgRADIggAHIggAEIgRADIgPACQgOABgOAAIgGAAgAplAXQAFAQAGAQQgGgQgFgQQgDgNgCgMQACAMADANgApThNQACAPAFAQIAKAfIAHAdQAEARAHAOQgHgOgEgRIgHgdIgKgfQgFgQgCgPQgBgGgBgDQABADABAGgAo6hqIAKAfIAKAeQAEAQAIAOQgIgOgEgQIgKgeIgKgfIgEgOIAEAOgAoWhkQAEAPAFAOIALAgQAEAJACAKQgCgKgEgJIgLggQgFgOgEgPIgJgfIAJAfgAllm2IgCgFIACAFgAmPpSQgJAAgIAEQgOAFgFANQgFANgHAMQgHAMAAASIAAAgQAAAFADAAQAPgBAJgLQALgKAIgNQAJgNAMgMQAMgLAKgLQALgNAHgLQgJABgLgFQgMgFgOAAIgGABgABjo9QgQAAgPADQgQACgQAEIgfAJIgfAIIgfAKIgeALIgfALQgPAGgQAEIgTAGIATgGQAQgEAPgGIAfgLIAegLIAfgKIAfgIIAfgJQAQgEAQgCQAPgDAQAAIAIgBIAFAAIACAAIAAAAIAIAAIACAAIgCAAIgIAAIAAAAIgCAAIgFAAIgIABgAnBqbIgTAPIATgPQANgKAIgLQgIALgNAKgAnCq3QgQADgPAGQgPAHgJAMQAJgMAPgHQAPgGAQgDIABAAIABgBIAAAAIAHAAIABAAIAAAAQAHAAAGADIABAAIAAABIgCAEIACgDIABgBIgBAAIAAgBIgBAAQgGgDgHAAIAAAAIgBAAIgHAAIAAAAIgBABIgBAAgAmpq0QADgGAAgHQAAgFgDgHQADAHAAAFQAAAHgDAGg");
	this.shape_48.setTransform(286.5,129.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AGgBtIs/AAIAAjZIM/AAg");
	this.shape_49.setTransform(322.4,299.4,1.131,1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF00").s().p("AmeBtIAAjZIM+AAIAADZg");
	this.shape_50.setTransform(322.4,299.4,1.131,1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(4,1,1).p("EgkZAHWIAA80MBIzAAAIAAbNIAAIKIAAHmMhIzAAAIAAnvg");
	this.shape_51.setTransform(232.9,137.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.3,1,1).p("AKPpDQAJgOARgGQAOgGAOgIQAOgJAOgJQAOgKAPgGQAPgHAPgIQAOgIAOgGQAOgHAPgGQAPgGAPgIQANgHAOgIQAOgIAOgIQANgJAOgIQAOgIAPgJQANgIAOgHQAOgHARgFQAOgEAJgKQARANAdABQALABALgDQAGgDAGgEQAJgHALAGQAUANAUAOQAKAGANAFQALAEAMAFQAQAHARgEQAKgCgCgKQgDgOgOgIQgMgGgMgGQgTgHgTgCQgUgCgJgPQAHABAFACQAYAJAZACQAGAAAGACQAZAJAbgFQAGgBgCgEQgGgNgJgMQgIgIgLgDQgSgFgRgFQgTgHgSgFQAPgBAOgBQAQgBARAAQAPAAARgIQAJgLgSgJQgPgHgRgBQgQgCgQAAQgRAAgQAEQgKADgGgHQgMgNAYgFQAPgEAQgEQAQgEANgFQALgFABgLQACgSgQADQgQADgPAGQgQAFgQAGQgOAFgQADQgPADgIAJQgCACgBADQABgDABgDQAEgJACgLQAIglgWgfQgDgDgCgBQgTgKgWAHQAIALADAPQACALgGAGQgMALABAOQACAQAEAPQAFASgMAIQgHADgGAIQgLAMgFAKQgIAKgRAGQgOAGgNAHQgOAGgNAJQgMAJgOAGQgOAGgOAFQgQAFgPAEQgQAEgOAGQgPAGgOAGQgQAGgOAHQgOAIgPAFQgOAGgOAHQgOAIgOAJQgNAIgPAGQgPAGgPAGQgOAGgNAIQgPAIgMAKQgMALgQAEQgRAEgOAHQgPAHgPAHQgPAHgOAIQgBAAAAABQgDABgCACQgKAGgLAEQgPAHgQAFQgPAFgNAIQgPAJgMAHQgCABgBABQgBgIABgJQAAgQAAgSQAAgPAAgQQAAgQgBgRQgCgPgCgQQgBgQgBgPQgBgRAAgRQgBgQAAgRQAAgQABgRQgBgQADgQQACgQACgRQACgOABgQQACgPAAgRQAAgRAAgRQAAgQgCgPQgCgPgLgMQgCAAgCgBAQEvGQgMAIgIAQQgEAJgBAIAPgv5QgPAFgLAJQgOALgGAPQgDAKABAMAFsmXQABgBABAAQAQgFAOgGQAPgGAQgHQANgGAPgGQAOgGAOgGQAPgHAQgEQAQgFAQgFQAQgEAQgFQAQgDARgDQAQgCAPgDQARgDAPAGQAGADAGADQABAAABABQAHACAHADQAIADAIADQAPAGAPAFQAPAFAPAJQANAIAQAFQAOAGANAHQAOAJAPAGQAPAGAPAGQAPAHAPAHQAOAHAPAIQAOAJAOAJQAMAIAQAHQAOAGAPAGQAPAGAPAGQAOAGAOAJQANAJAOAHQgQAGgQAGQgMAEgLAFQgLAGACAQQAVAIAagIQASgHATAEQAOACgLANQgIAIgHAIQgKAMgNAJQgPAKgFAQQgCAGAEAFQAGAJAOgJQANgJALgLQAPgQANgTQAIgMAKgKQANAIAFAPQAIAaAKAaQAGAPACAPQACAKAKACQAGACADgEQAHgIACgLQADgLgCgKQgCgMgEgJQgLgXgOgUQgIgJgCgNQANAJAMAMQALALAJANQAJAOAKAMQAKANANAKQAKAIAEgIQAGgPgFgPQgGgPgKgNQgJgMgNgKQgMgKgMgKQgTgQAZAFQAQADAQAFQAQAEAOAJQANAHAMAKQAOAKAQABQAVACgKgTQgJgOgNgIQgOgIgOgFQgPgFgPgHQgPgIgLgKQgNgLgNgJQgNgKgPgJQgPgIgPgCQgRgDgNAFQgNgJgNgJQgNgIgMgLQgNgLgOgHQgPgJgNgJQgNgJgPgHQgPgHgNgJQgOgJgMgLQgNgKgNgKQgOgJgPgFQgQgGgMgIQgOgJgQgGQgPgFgQgEQgPgFgPgHQgOgGgRgEQgPgEgQgEQgPgDgRgCQgJgBgJgCQgCgBgBAAQgCAAgCgBQgMgDgLgBQgEgBgEAAQgNgBgMABQgQABgQADQgQACgPAEQgPAEgQAEQgQAEgRAEQgPAFgPAFQgQAGgOAFQgPAGgQAGQgPAGgQAEQgKACgJAEQAHgKAAgSQAAgHABgIQgBgBABAAAX3jBQARgLARgIQAZgMAagPQAhgUgdgDQgYgCgYADQggADgNAKQAEgaAEgZQgHAGgIAGQgXASgHAiQAAgMgDgLQgIgXgZgJQgHgDAAAGQABAiARAfQgSgGgOgFQAFAPAUADQgLAEgLAHQgVAMgSAVQAbABAYgNQgJAKgEAOQgJAegLAXQAJgHAIgIQAVgTAUgTQgCANgCAOQgEAmAVAbQACgHABgJQAEgigDgdQAGAJAEAQQAGAdAMAUQgBgQgDgQQgEgYAEgZQABgKAEgJQAMAFAPALQARANAMASQAMARAOAOQARAQASAQQARAPANAVQAMAUAOATQAPAVAMASQANAUAOA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PQgGAQADARQACAJAAAJQAAAIAAAIQgCAQAHANQAHAOAPAEQAQAEARgBQARgBAOgIQAOgIAGgPQAFgQAJgOQACgEACgEQAAgBABgBQAEgJACgJQAEgQALgKQAMgMAQgDQAQgEAQgFQANgFANgGQAOgHAKgLQAJgMAGgOQAGgQAAgQQAAgQgIgOQgHgLgJgHABHFIQAAAQAAARQgBARAAAQQgBAOgHAIQgBABgEAHQgHAQgGAUADRIiQgOADgOACQgZAEgZABQgbABgTgHQgPgGgOgGQgGgDgGgDQgHgEgBgLQgBgaAHgYQABgEABgDABPJ5QgCAQgEAPAAvKEQgEAHABAJADNJLQgMAGgSADQgZAEgYAAQgZgBgXgIQgTgGgPgQQgDgEgDgEQgBgBgJgBAg8O8QAEgMAGgNQAIgVAJgYQAIgWADgXQADgYAIgYQAIgXADgXQAFgZADgZQACgWACgXQABgaAIgXQAIgWAJgUAAsI5QACgSAKgNALmEnQgEgJgGgIQgKgNgGgOQgGgPgFgPQgGgQgIgLQgJgNgJgNQgJgOgJgOQgJgOgJgMQgKgOgLgMQgLgLgMgLQgJgJgNgNQgKgKgLgMQgLgLgKgKQgMgKgMgMQgKgKgMgLQgMgLgMgMQgGgGgFgGQgKgOgMgEQgQgDgOAEQgPAFgNAJQgIAFgHAGQAJgIgBgPQgBgRgCgQQgBgQACgQQACgQADgQQACgQgEgQQgKgKgMACQgFABgEADQgDACgEABQgPADgPABQgPACgPABQgRACgRgBQgQAAgPgDQgKgBgIgCQABgLACgNAFBBvQAIgFAIgFQANgJAMgLQALgLANgLQALgKAMgJQAMgJALgLQAFANAJAOQAHAOAMALQAMAMALAMQAKAKANAMQANAMAIAMQAJAMAIANQAIANAMALQAMALALAMQALAMALALQANAMAHAOQALAQAJAOQAIANAJAOQADAFADAFQgYgGgUAIQgJAEgCAIQgHgNgJgPQgPAVgQAYQgKgWgUALQgEADgDgHQgFgJgEgJQgIAHgHAIQgEgdgZAHQgGACgBAEQgTgUgJARQgEAGgDAIQgPgLgTgEQgIgWgIgOQgEgJgMAIQgbATgSANQgLAHgMAFQgEgDgEgEQgMgKgIAEAFaipQgGAMgDAPQgEAQgCARQgCAOgCAPAE4idQgDARgCARQgBAQgDAQQgCAPgBAQQgCAMgCgEAFhhFQgBABgBABQgEADgEAEQgNAKgLANQgLANgMAIQgOAIgOAIQgNAIgOAHQgGADgFAEQgHAEgFAEQgBABgBAAQgBAAgBAAQgKgDgNAEQgGAHgJAEQgBAQABAQQABAQAGAQQAGAPAHAOQAHANAKAMQAGAGAHAHQAGgBAGgEQANgJALgIQAEgDAEgDQAAAAABgBAC1jcQgHgCgGgBQgGgBgDAGQgEAJgDAGQgGANgEAPQgEAQgDAPQgDAPgCARQgBAQAAAQQAAASAFAPAC9idQgBAOACANQABAMAEAJAEGiUQgHANgBASQgBARAAARQAAAPAAAQAEeiTQgIAPAAARQAAAQgBAQQAAARgDAQQgEAUgHgPADjiaQgCAQgCAPQgCARgHAOABzBIQALgHALgFQANgHAPgFQAGgCAFgDABzBIQAGgJABgNQACgPACgQQADgQAAgPQAAgRAFgSAE1FKQAIAFAKAEQANAGAPAFQAOAGALAMQAJAMAHAOQAHAOACAOQACAQAEAQQADAOADAPQADAQAEAPQAFAPACAPQACAPAFAOQAGAPAEAPQADAPAEAQQAEAPACAQQACAPACARQAAAQACARQABAPADARQABAPAFAQQAEAPADAQQAEAQAOAFQAQAGAOgJQAMgGAEgQQAFgQgDgRQAAgCgBgBQgBgCgBgCQgHgMAEgRQAEgSAKAIQAAADAAAEQABAHgCgCAERDeQgBgBgCgBQgHgFgFgHQgKgOgMgKQgFgFgFgFAD4G1QgDAUgGAWQgHAXgCAXQgBAJgBAIQgJACgKACADZGeQAAAZgIAZQgIAXgDAXQAAAEAAAEAC8GgQgDAZgDAZQgEAYgDAZACOHKQgFAXgEAZQgCAHgCAFABvHbQgCAXgCAWACqJvQgMAVgBAYQgCAYgIAWQgHAQgEARACAO1QABgHABgHQAFgXAGgWQAFgYAHgWQAIgWAFgXQAHgYAHgWQAIgXABgZQACgaAQgNQAVgQgBgZQgBgcgMgQQgEADgFADQAEgTAAgWADkIeQAAAGgBAGALoFqQgDAQgBAQQAAARADAQQAAADACACAKlFKQAFAJAEAIQAGAQgKAMQgEAFgDAGQgJAPAHAQQAGAPAOAJQAOAJAPAHQANAHAQAGQAGACAGAFQAEADADACQAGAEAGACAMCHiQAGAGgDAOQgEAPgLANQgLANgGAQQgHAOgIANQgIAOAAAQQAAASAGAMQACADADACQAJAIAOgBQASgBgEgQQgDgEgBgFAL+KBQAAABABAAQACADADAAQAPAFABgPQgBgBAAgBQgEgGgBgGAM0JwQgBgBAAgBQgCgEgBgDABmJ9QAAAfgRAIAEPlDQACASgEAPAu7v8QAAAaAAAZQAAAQAAAQAvntKQgHAEgMgBQgRgBgQAEQgQADgPAEQgQAEgOAHQgRAJgLgLQgLgMAAgRQABgQAPgGQAPgHARgBQARAAAQgEQAPgDAPgBQARgCAOADQACACADgCQADABADACQAAAAAAABQANAIAOAEQAMADAMAEQADABADABQAOAFAOAHQAEABAEACQgOAJgMAIQgOAIgPAFQgPAEgPABQgFABgDgBQABADAAAEQgBARACARQABAPACARQACAPAAAQQAAAQADAQQADAPAAARQAAAQAAARQAAARgBAQQgCARgFAPQgEAQgGAPQgHAQgFAOQgGAPABASQAAAIAEAGQACAFAFADQACANgIAOQgJgBgHgEQgGARgDARQgDAZADAYQAFAhAHAgQAEAUAAAVQABAUABAVQAAAVgBAUQgDAngLAjQgIAcAEAdQADAWAAAXQgoAAglABQgnACgoAAQgpAAgogCQgpgDgpAGQgpAHgqgBQgmAAglAFQgjAFglgBQgbgBgVAFAv6trQgJAEgKACAvmuVQgGgCgGACQgQAFAKANQADAFAHAGQABABABABAvjtNQAFgCAHAAQAGAAAGgDQANgHALgGAvmtyQACAQABAPQABAEgBACQgDABgBACQgGAEgBAJQgCAPAKADAuKwHQgCAYgCAUQgDAagDAYQgCAKAAAOAtquFQADgCAFADQAEAEABAEQAEATgUADQgGABgGAAAuMtvQAAAAAAAAQAJgLATgIQADAAADgBQgBADABADAtwuCQACgCAEgBAuJtOQALAFAKAEQADABAEABQANACAGgNAtttDQABAPABAQQAAARgFAPQgGAOAAAPQABASgCAQQgCARABARQACAPABARQABASgDAPQgBAFAAAGQABASgBAQQAAARgCAPQgDARAAARQAAARADAQQADATgLAIQgHAFgJACQgHACgIAAQgPABgPACQgQADgRgBQgKAAgHgEAuWqIQgBAYgHAYQgHAWgBAYQgCAZAAAZQAAALAAACAuypcQgGAUgIAYQgIAXgBAYQgBASAFAQAucl+QgKAVgJAWQgJAXgHAXQgGAXgCAYQgBATAAATAv3mSQALADAOgBQAZAAAZgEQAJgCAIgCQAKgDAKgEQAJAIABANQADASgDAVQgBAVgEAVQgGAegIAeQgGAWgFAWQgEAUgHAVQgIAYAAAbQAAAbAEAZQAHAlADAlQABAQABAPQgSABgTAAQABATABAUQAAAEAAAEQAUABAUABIABAAQAHAAAIABQArADAjANAuHmfQAEgCAEgCAubmYQAKgIgBgQA3KAEQgfAAgfAAQgmAAglABQglACgkADQglADgjAHQgfAHgZAGQghADgbADQgnAEgnABQgqABgrAAEgkZAIeQA0g7BigVQAAAlgDAfQAog3AyBLQAng8ATAkQgQgpAVgrQA7gJBGAZQhwAnBsBBQAGhnAxA/QgIiJBWBzQBdhHAzBKQAdhXBBAgQAEgJAGgIQAKgMAQAHQAeALADAfQACAbARgTQANgOAZAMQAMAQgHAcQANAFALgOQASgYAZgRQAGANAFALQAHgMAFgPQAHgVAIgVQAEgKAIAHQAYAWgDAXQALgTAZgBQAIAQACATQAEAdAOgNQAYgVAagaQAOACAOAQQgBgZAFgXQAHgiAPAZQANAVAUAQQAFgZAEgYQAEgbAHgZQAIgggFggQgDgXgHgXQgIgZAEgbQgqACgjABQgnAAglAAQgiAAgigBQgpgBgoAEQgSACgSAAAvOlZQgLAUgFAYQgFAVAAAaQABAJACAFAvkApQARAAAQAAIAAAAQAAgGAAgFQgCgagDgXAwOAoQAAABAAAAQAAAUgBAQQAAAGgBAFQgHAAgHAAQgoAAgogBQgkAAgjABQgoACgogBQgtgBgiARQgJAFgKAEAv+BYQAAgDABgCAwQBYQAJAAAJAAQAMAAAMAAQgCgYAEgXAwQBYQgBAKgCAKQgCARgBASQAAAMAFAHQACADACACQAKAHASABQAcABAVgFQANgDAOgDQALAOgCANQACgBABAAAwRCiQAAACABADQABAIAAAKQAbADAeAKQALAAALAAQACAAABAAQARgCAQgEQgCANgQAMAv/CCQgDgVAEgVAueAoQACAYADAXQAAACABABQAEAiAAAlQgIACgJACAvnB/QAEgSgCgTQAAgBgBgBAvBBYQgMAAgMAAQgGAAgGAAIgBAAAu7CIQAAgCgBgHQgDgTgCgUAwOAoQAWAAAUABAueAoQAcAAAZAAQAogBAogDQAsgDAggSA0pE5QglAAglAAQgqAAgqgBAvJD8QgLAXgEAYAvADGQgZACgXgEQgQgCgPgFQgIgCgHgDQAHAAAIABQAAACAAACQAAAJAAAJAuuDsQgIAVgEAXQgFAXgHAQAv2DwQgKAXACAaQACATAAASAuqG5QgBADgBADQgJAagCAcQgDAdAFAbQAGAfABAfQADAsADArQADAgABAcQABALgHACQgEABgDABQgVAEgXgCQghgCgfgDIAAABQgEAMgIAOQgHgCgJgBQgBAOAAANQgBAOACANQACAYgBAZQAAAUACASQgWgBgSADAwnG/QgBAEgBAEQgJAjAAAmQABAjAAAjQAAAXAAAWQAAAQAAAQQAAAMAAAMQAAAJgBAHQgCAJAAAJQAAAMABAMQAAATAUACQABAAABAAAwfNEQgCAUAIASAwpMlQgHAMgKAMAwpMlQAFABAEABQAYAIAZAAQAYAAAXgEQAJgCAJAAQAOAAAQAEQgIAGgDALQgGAZgHATQgKAWgEAYQgDAQgCAQIAAAAQgFABAEAGQABgEAAgDQAqgHAoAAQAoAAArgBQApAAAogFQAngFAnANQAnAMAkAVQApAXAmgRQAkgQAlgQQAOgHAQABQArACAoAMQAlAMAogBQAogCAngJQAogJAjADQgDAKgDALQgHAXgHAWQgIAXgGAXQgHAVgFAXQgFAXgHAWQgIAVgJAXQgKAWgPATQgOARgMAOQgEAHAAAHQgBAEACAEQAYgSAggJQArgNAUglQADADAAAFQADAdgEAkQAYgMAZgCQAhgDAPgbQgDATAGAPQAFgFAHgIQABgBABgBQAGgBAKgDQACgFACgHQgLAGgJAKAvINKQgKAYgBAYQgBAMgDgDAvdNMQgKAXgFAUAv5NPQgDATgEARAuuMpQgBgLgCgRAu8O/QAAADAAADQgCAaACAVQgHgBgIAAQgIAKgJgGQgIgFgJgEQgKgDgFADQgGAEgGAEQgTAMgLgkQgEAHgDAHQgBADAAACAu8P0QAKABAGAGQgEAEgIgBAw2OvQABAFABAFQAEAZACAaQAAADAAACQgBAGgCADA2KPRQAjgEAjgFQABAAABAAQAWgBAXgBQAYgBAYAAQAYAAAYgBQARAAARAAQAEAAAEgBQAcgBARgRQgfAEgWAPA2KPRQAKgJAOAAQAXACAXgCEgkZAO4QBcAoCUAEQC5AGC5gEQCXgDCWgSAJxK+QgCAFgBAGQgDASAKANAJxK+QADgJAEgHQAKgRASAGQAOAFAHAPQAHAPgCARQgCAQgKAIQgDgCgCgCAJZLNQgBAFgBAGQAAASAFADAI8LYQABgFABgEQAGgPAVANQAAgEABgDQAEgQATAIAI8LYQAAABAAABQABAJADAIAIuLlQACgOAMABAHANbQgNAMADARQAAAFABADACGJ5QgFAYgHAYQgFASgFAJAGgPAQghADgjABQgqABgpgEQgjgDgkgEQghgEghgBQgJgBgJAAQgWgBgMAEACAO1QgEARgCASQgDAZgHAVQgIAYgHAVQgIAXgGAYQgFAWgDAXQgEAZAAAYQgBATgEAPQAHgEAHgD");
	this.shape_52.setTransform(233.4,130.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ag7A1QgJgDACgPQABgJAFgEIAEgDQAGgCAHAAQAGAAAGgDIAYgNIAGACIAbAMIAIADIgaARQgNAIgPAFQgPAEgPABIgDABIgGgBgAA+AdIgIgCIgUgJIgIgDIgbgMIgGgCIgYgGQgOgEgNgIIgBgBIgFgDIgDgCQgGgGgEgFQgJgNAQgFQAGgBAGABQAEABAEACQANAJAQAEQAPAEALAGIAZAMIACABIASAJIgSgJIgBgBQAJgLATgIIAFgBIAAADIAAADIAAgDIAAgDIAJgBQAEAEABAEQAEATgUADIgMABIAIAEIANAJIAEADIAGAGQgGALgKAAIgDAAgAAiASIAAAAg");
	this.shape_53.setTransform(139.4,43.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("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IAcgRIAbgTQANgJAQgGQAQgGANgJQANgJAOgIIAKgGIAagPQAOgIAQgEIAAANIATABIATAAIAQAAIAQAAIATgBIASgDQAIgBAJAAIASABIASABQALAAAFAEIgDAQQgEAPgBAPIgEAeQgCARAAAQQgBARADAQQADARAJANQAEAGgEAHQgJAOgPACIgBABQgRACgRgBQgQgBgPABQgQACgQgBQgQgBgRABIghADIgMABQgGgBgEgCQgHgEAFgIQAIgNABgQQABgQAEgPIAKgfQAFgPABgQIABgCQgMAGgNAKQgMAIgOAFIgcAKQgPAGgOAIQgOAIgKANQgIAMgOAJIgcARIgcASQgOAHgPAFIgfAJQgQAEgPAGQgKAEgIAAQgGAAgFgCgAEfwwQAOgDAMgKQgMAKgOADgAE5xJQgOADgKAEQAKgEAOgDQARgEAIgLQgIALgRAEgAE/xfIggAKIgfALQgFABgDAFQADgFAFgBIAfgLIAggKQAQgHAIgMQgIAMgQAHgAJ/xZQACgPAFgMQgFAMgCAPgALXy1IgGAfIgEAfQgCANgCAHQACgHACgNIAEgfIAGgfIAEgcIgEAcgAKcxzIgCAQIACgQQABgRAHgQQgHAQgBARgAK0ybQgDAQAAAQQAAAJgDAEQADgEAAgJQAAgQADgQQACgOAHgLQgHALgCAOgAJJzZIgDAfIADgfQACgNAAgNIAAgFIAAgJIAAAJIAAAFQAAANgCANg");
	this.shape_54.setTransform(194.8,130.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#339900").s().p("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YAQAUgFIAFAFIAHAIQASAcAHAoIANgBQARgCAKALQAFgMANgRQAdgGAbAYIAGgJQAKgbAaACQAIABADAEQALAPADASIALgKQANgKAOANQATASANAYQALgQAZAMQAMAGADAPQAEgFAHAAQAJABgBAKIAJgGQAHgFAMgGIAAASQABAHAEAEQAJAKAWgHQANgFAMAIQAMAIABAPQABAGAEAAQAMADAMgQQAEgFAFABQANAFADAVQAQgUATgJQAggQATAXQAFAFADgBQAGAAAKgHQAFgDADgEIAAAAQAHAHAMAGIABAAQAJACAIAIIARAWQAKgCACAFQAEAPAHAMQAOgMAXgGIAAAJIAAgJQADgBAFACQAMAFAKAHQANgGAOgEQACAcAWgJQAOgFAKgKIAZgZQATgWAYASQAGAFADgEQAPgXAQAHQAOAGAEAPQAIAXACAYQBJhiAvBjQgCgZAcg/QA7AeAkAbIAAIJQiugmjFAoQghACgfgGQgjgGgigFQgqgHgqACQgnABgngBQgegBgeADQgnAEgpAAQggAAgfgDQgqgEgpAAQgrAAgqAFQglAEgngBIhNgBIhSAAIhMAAQgpAAgpADQgnADgnAGIhSAMQgQACgPAAQgaAAgXgGgAbSjAIAHgMIgHAMgAUdkdQAFgHAGgHQgGAHgFAHgAUpkgIgBgLIABALgAEOFqIhHgHQghgEghgBIACgOIAKgtQAGgXAHgXQAIgWAFgXIAOgtQAIgXABgaQACgZAQgOQAVgQgBgZQgBgagMgRIgKAGQAFgTAAgVIATgEIACgSQACgWAHgXQAGgXADgUQARADAPAGQAOAIANAJIAKAHQANALAHAPQAHAPAFAPQAFARABAPIAEAgQACAPAGAOQAGAOABARQACAQAEAQIAHAhQAFAPABARIAGAfIAJAgIAJAeIACAJQAFAKAAANIAAAGQgBAPgGAQQgGAPADARIACASQghADgjABIgPAAQgiAAgigDgADogsIABgLIgBALg");
	this.shape_55.setTransform(232.9,190.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#993333").s().p("A2CPDQgZAAgYgIIgJgCQAIgOADgMIAAgBIBBAFQAXACAVgFIADAdQgJAAgJACQgWAEgVAAIgEAAgAkVLsQgZgBgWgIQgTgHgPgQQABgRALgNIAcAMQATAHAcgBQAZgBAYgEIAdgFQAAAVgFAUQgMAGgRADQgXAEgWAAIgFAAgAWoJLQgGgDgCACIgCgqQgCgYgEgZIgFgkQgCgagHgXQgGgUgCgSIAFgcIgFAcIgCAPIgKAvQgFAYgHAXQgHAVgRASQgJAKgIALQgMgGgHgHIABgDIAAAAQAIgTAMgVQAKgUAGgWIAKgtIAJgvQAEgUAAgVIgBgIIAAgLIABgTIgBATIAAALIgCACQgHgPgLgRQgMgSgOgRQgOgRgNgUIgbgnIgbgoQgNgVgQgPIgjggQgOgOgMgSQgMgRgRgMQgPgLgMgGQACgHAEgGIAGgHIANAIQASALAOAOQATASAOAPIAeAhIAfAiQALANAKANIAAAAIAHAKIAXAlQAKAQAQAUQAOARAMAVQALAUAJARIACgUQADgXgBgZQAAgagFgYIgLguIAIgDQAPgEAQABQAHAUACAWIADAxIAAAzQgBAZgCAXIgEAkIgBAFIgCALIAAAAQALAWAGAVIANAuQAHAYADAXIAHAwIADAVQAEAaAAAXQgKgHgLgEgA1pFaQgegKgbgDIgBgSIADgBQAKAIARABQAdABAUgFIAcgHQAKAPgBANQgQAEgRABIgDAAIgRABIgFAAgAVpEuIAAAAgAishCQgQAAgQgDIgSgDIADgYQAFAFAIABQAQADARgBIAhgCIAfgBQAQAAAOgEQAJgCAIgEQAHANgHAHQgFABgFADIgHACIgdAFIgeADIgYABIgKAAgA2Kj+QAHgOgCgOQAHAFALAAQARAAAQgCIAegDQAIAAAHgCQAAAQgJAIIgRADQgZAFgaAAIgCAAQgMAAgKgCgAugsNQgJgNgDgRQgDgLAAgLQAIgDAIgIIABALQADAQAFAOQADAJAHAGIABAAIgUAKgAo7t0IgCgCQgMgHgBgSQgCgRACgRIABgOQAMAAALgDQgEAGABAJQAAARAJAOQAGAJAIAFQgJAMgTAGIgBAAgAjnt6QgEgVAJgMIAMgBIAigDQAQAAAQAAQAQABAQgBQAPgCAQABQARACARgDIABAAQAIAPgGARIAAAAIgJgBQgUgDgZACIg/AHQgZADgYAAIgRgBg");
	this.shape_56.setTransform(273.8,115.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D2F4FF").s().p("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gFAMQgEgJgGgIQgKgNgGgOIgLgeQgGgQgIgLIgSgaIgSgcIgSgaQgKgOgLgMIgXgWIgWgWIgVgWIgVgVIgYgXIgXgVIgXgXIgLgMQgKgOgMgEQgQgDgOAEQgPAFgOAJIgOALQAJgIgBgPIgDghQgBgQACgQIAFggQACgQgEgQQgKgKgMACQAIgHgIgMIAMgHQALgHABgSIACghIABggQAAgQgDgPQgCgPACgPIACgBQAQgFAOgGIAegNIAdgMIAcgMQAPgHAQgEIAggKIAggJQAQgDARgDIAfgFQARgDAOAGIANAGIACABIAOAFIAQAGIAeALQAPAFAOAJQAOAIAPAFQAPAGAMAHQAPAJAPAGIAeAMIAeAOIAdAPIAbASQANAHAQAHIAdAMIAeAMQAOAGAOAJQANAJANAHIgfAMQgMAEgLAFQgLAGACAQQAVAIAagIQASgHATAEQAOACgLANIgPAQQgKAMgNAJQgPAKgFAQQgCAGAEAFQAGAJAOgJQANgJALgLQAPgQANgTQAIgMAKgKQANAIAFAPIASA0QAGAPACAPQACAKAKACQAGACADgEQAHgIACgLQADgLgCgKQgCgMgEgJQgLgXgPgUQgHgJgCgNQANAJAMAMQALALAJANQAJAOAKAMQAKANANAKQAKAIAEgIQAGgPgFgPQgGgPgKgNQgJgMgNgKIgYgUQgTgQAZAFIAgAIQAQAEAOAJQANAHAMAKQAOAKAPABQAWACgKgTQgJgOgNgIQgOgIgPgFQgOgFgPgHQgPgIgLgKIgagUQgNgKgPgJQgPgIgPgCQgRgDgNAFIgagRQgNgIgMgLQgNgLgOgHQgPgJgOgJQgMgJgPgHQgPgHgNgJQgOgJgMgLIgagUQgOgJgPgFQgQgGgNgIQgNgJgQgGIgfgJIgegMQgOgGgRgEIgfgIQgPgDgRgCIgSgDIgDgBIgEgBQgMgDgLgBIgIgBQAJgOARgGQAOgGANgIIAdgSQAOgKAPgGQAPgHAPgIIAbgOIAegNQAPgGAPgIIAbgPIAcgQIAbgRIAdgRQANgIAOgHQAOgHAQgFQAPgEAJgKQARANAdABQALABALgDQAGgDAGgEQAJgHAKAGQAVANAUAOQAKAGAMAFIAYAJQAQAHAQgEQALgCgCgKQgDgOgOgIIgYgMQgTgHgTgCQgUgCgJgPIAMADQAYAJAZACQAGAAAFACQAaAJAbgFQAGgBgCgEQgGgNgJgMQgIgIgLgDIgjgKQgTgHgSgFIAdgCQAQgBARAAQAPAAARgIQAJgLgTgJQgOgHgRgBIghgCQgQAAgQAEQgKADgGgHQgMgNAYgFIAfgIQAQgEANgFQALgFABgLQACgSgQADQgQADgQAGIgfALQgOAFgRADQgOADgIAJIgDAFIACgGQAEgJACgLQAIglgWgfIgGgEQgSgKgWAHQAIALADAPQACALgHAGQgLALABAOQACAQAEAPQAFASgMAIQgHADgGAIQgLAMgFAKQgIAKgRAGQgOAGgNAHQgOAGgNAJQgMAJgPAGIgbALIgfAJQgQAEgPAGIgcAMQgQAGgOAHQgOAIgPAFQgOAGgOAHIgdARQgMAIgPAGIgeAMQgOAGgNAIQgPAIgMAKQgMALgQAEQgRAEgPAHIgdAOIgdAPIgCABIgEADQgKAGgLAEIgfAMQgPAFgNAIIgcAQIgCACIAAgRIAAgiIAAgfIgBghIgEgfIgCgfIgBgiIgBghIABghQgBgQADgQIAEghIADgeIACggIAAgiQAAgQgCgPQgCgPgLgMIgEgBIAAAAQAHgRgIgPQAPgDAIgNQAFgHgFgGQgJgOgDgQQgDgQABgSQAAgQACgQIAEgeQACgPADgPIAEgQIABgQIgBAQQgGgEgKgBIgSAAIgTgBQgIgBgIACIgTACIgSABIgRABIgQAAIgTAAIgTgBIAAgOQgQAEgOAIIgZAPIgLAGQgOAIgNAJQgNAJgQAGQgQAGgNAKIgbATIgbARIgbAPQgPAIgPAHQgOAGgOAEIgdAIQgOAEgPAHQgHACgDAGQgMADgMABIACgIIABgFIgGAEQgMAJgRAEIgfAIIgfAJIggAJIgdAKIgfALIgaAIIgfAKIgdAJIgfAIQgPADgOAJQgJAFgBALQgIAIgIADIAAgJQgLAAgQAJQgOAIgPAFIgfAJQgQAEgQAGQgPAGgPAEIgeAJIgeAKQgQAGgPAAQgQABgPACIggAHIgNACIgFABIgDAAIgCABQgFgDgEACIABgXIABgiIAAghQAAgRgCgPQgCgRgDgPQgEgQgBgPQAAgQAEgOQADgQgBgRQgKgHgPgHQgPgGgPgFQgQgFgPgDQgMgCgIAOQgHAMgCARIgCAgQgCAQAAARQAAARgBARIgCAgIgCAiQABARACAPQADAMgBAPQgGgCgGACQgQAFAKANQADAFAHAGIACACQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBgBQgOgDgRACQgPABgPADQgQAEgRAAQgRABgPAHQgPAGgBAQQAAARALAMQALALARgJQAOgHAQgEIAfgHQAQgEARABQAMABAGgEQgFAEgBAJQgCAPAKADQABADAAAEQgBARACARIADAgIACAfQAAAQADAQQADAPAAARIAAAhIgBAhQgCARgFAPIgKAfIgMAeQgGAPAAASQABAIAEAGQACAFAFADQACANgIAOQgJgBgHgEQgGARgDARQgDAZADAXQAFAhAHAgQAEAUABAVIABApQAAAVgBAUQgDAngLAjQgIAcAEAdQADAXAAAXIhNABIhOACIgEAAIgDAAIgHAAIAAAAIgBAAQgeAAgegCIgHAAIgFAAIgIgBIgLAAIAAAAIgBAAQgcAAgcAEIgCABQgmAFgnAAIAAAAIAAAAIgDAAIgDAAIgCAAIgIAAIAAAAIgBAAQgbAAgaADIgDABIgBAAIgGABQgdAEggAAIAAAAIAAAAIgJAAIgCAAIgEAAIgDAAIgBAAIAAAAQgWAAgSAEQASgEAWAAIAAAAIABAAIADAAIAEAAIACAAIAJAAIAAAAIAAAAQAgAAAdgEIAGgBIABAAIADgBQAagDAbAAIABAAIAAAAIAIAAIACAAIADAAIADAAIAAAAIAAAAQAnAAAmgFIACgBQAcgEAcAAIABAAIAAAAIALAAIAIABIAFAAIAHAAQAeACAeAAIABAAIAAAAIAHAAIADAAIAEAAIBOgCIBNgBIAAABQAAAUgBAQIgBALIgOAAIhQgBIgOAAIgNAAIAAAAIgBAAIgVAAIgWABIgHAAIg4ABIgBAAIAAAAIgIAAIgIAAIgCAAIgCAAIAAAAIgBAAQgqAAggAQQgJAFgKAEQAKgEAJgFQAggQAqAAIABAAIAAAAIACAAIACAAIAIAAIAIAAIAAAAIABAAIA4gBIAHAAIAWgBIAVAAIABAAIAAAAIANAAIAOAAIBQABIAOAAIgCAUQgDARgBASQAAAMAFAHIABAFIABASIgPgBQgqACgjABIhMAAIhEgBIgIAAIgHAAIAAAAIgBAAQghAAggADIgkACIAkgCQAggDAhAAIABAAIAAAAIAHAAIAIAAIBEABIBMAAQAjgBAqgCQgEAbAIAZQAHAXADAXQAFAggIAgQgHAZgEAbQgEAYgFAZQgUgQgNgVQgPgZgHAiQgFAXABAZQgOgQgOgCIgyAvQgOANgEgdQgCgTgIgQQgZABgLATQADgXgYgWQgIgHgEAKIgPAqQgFAPgHAMIgMgYQgYARgSAYQgLAOgNgFQAHgcgMgQQgZgMgNAOQgRATgCgbQgDgfgegLQgQgHgKAMQgGAIgEAJQhBgggdBXQgzhKhdBHQhWhzAICJQgxg/gGBnQhshBBwgngA1/KSIAIAAIAJAAIBKAAIhKAAIgJAAIgIAAIAAAAIgBAAIg5gBIgKAAIAKAAIA5ABIABAAIAAAAgA/0GGIBTgBQAngBAngEIA8gGIA4gNQAjgHAkgDQAlgDAlgCQAlgBAmAAIA+AAIg+AAQgmAAglABQglACglADQgkADgjAHIg4ANIg8AGQgnAEgnABIhTABIgBAAIAAAAIAAAAIABAAgAP1pVQgEAJgBAIQABgIAEgJQAIgQAMgIQgMAIgIAQgAO1piIAAgFQAAgJACgIQAGgPAOgLQALgJAPgFQgPAFgLAJQgOALgGAPQgCAIAAAJIAAAFgAcIMGQgCgFgKACIgRgWQgIgIgJgCIgBAAQAIgMAJgJQARgTAHgVQAHgXAFgYIAKgvIACgPQACATAGAUQAHAWACAaIAFAkQAEAZACAYIACAqQgXAFgOANQgHgMgEgPgAImK3QgEADgDgHIgJgSQgIAHgHAIQgEgdgaAHQgFACgBAEQgTgUgJARQgEAGgCAIQgQgLgTgEQgIgWgIgOQgEgJgMAIIguAgQgKAHgMAFIgIgHQgMgKgIAEIACgSQACgZAHgXIAPgvQAHgWAEgXQADgYAAgYIAQgKQANgJAMgLIAYgWIAXgTIAXgUQAFANAJAOQAHAOAMALIAXAYIAXAWQANAMAIAMIARAZQAIANAMALIAXAXIAWAXQANAMAHAOIATAeIARAbIAHAKQgYgGgUAIQgJAEgCAIIgQgcQgPAVgQAYQgKgWgUALgAgHHRIAFgEIATgXQAIgLAMgMIAXgWIAXgWQAMgLAKgMIATgZQAIgMAHgOQgFASAAARQAAAQgDAQIgEAfQgBANgGAJIgFADQgOAKgOAHIgdAMQgPAHgRADQgSADgLAHgAuTGzIAAAAgAwJGBIAAAAg");
	this.shape_57.setTransform(232.9,95.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFCC99").s().p("AhWQEQgQgEgHgNQgGgOABgQIAAgQIgCgSQgDgRAGgPQAGgQABgPIAAgGQAAgNgFgKIgCgJIgJgeIgJgfIgFggQgCgQgEgQIgIghQgEgQgBgQQgCgQgGgOQgFgPgCgPIgEghQgCgPgFgQQgEgQgHgOQgHgPgOgLIgJgIQgOgJgOgHQgPgHgQgDQAKgYADgWQAFgXAHgWQAFgOACgPQAIgEANALIAIAGQAIAGAJAEIAcALQAOAFALANQAKALAGAOQAHAOACAOIAGAhIAGAcQADARAFAOQAEAPACAPQACAPAGAPIAJAdIAHAfIAGAfIAEAgIACAhIAEAgQABAPAFAQIAHAfQAEARAPAFQAQAFAMgIQAMgHAFgPQAEgRgDgQIgBgEIgCgEQgHgMAEgQQAFgSAKAIQACgOAMAAQAAgEACgFQAGgOAUAMIABgHQAEgQATAIIgCAMIgBAIQAAANAHAJQgHgJAAgNIABgIIACgMQADgJAEgHQAKgQASAFQAPAFAHAPQAHAPgCARQgCAQgLAJIgFgEIAFAEQAJAHAHALQAJANAAARQAAAQgGAPQgGAPgKAMQgJALgPAGQgMAGgOAFQgQAGgQADQgPADgNAMQgKALgEAPQgDAJgEAJIgBACIgEAJQgIAOgFAPQgGAPgOAIQgOAIgRABIgHABQgNAAgMgEgAhcN+IACAHIgCgHIAAgFQAAgOAKgKQgKAKAAAOIAAAFgAAbL3IABgDIAAgCIAAAAIAAgEIAAgDIAAADIAAAEIAAAAIAAACIgBADIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAgABKLzQgFgDAAgQIAAgDIABgLIgBALIAAADQAAAQAFADgAAqLfQAAAJADAJQgDgJAAgJIAAgCIAAACIAAAAgADGKRIgFgFQgGgMAAgSQAAgRAIgNQAJgNAGgPQAHgPALgOQALgNADgPQADgNgFgGQAFADAGACQgGgCgFgDIgIgGQgGgFgGgCQgPgGgOgGQgPgHgNgKQgOgJgHgOQgHgRAJgPIAHgKQAKgNgGgPIgJgSIgGgKIgRgbIgUgeQgHgOgMgLIgWgXIgXgXQgMgLgIgOIgSgZQgHgMgNgMIgXgWIgWgXQgMgMgIgNQgIgOgGgNIgXAUIgXATIgYAWQgLALgNAIIgRALIgHAEIgaASIgQALIAAAAIgCACIgHAFIgYARQgHAFgGAAIgMgNQgLgLgHgOIgNgdQgGgPgBgQQAAgRABgPQAJgFAGgHQAMgEALADIABABIACgCIANgIIAKgHIAbgPIAcgQQANgIALgNQALgMAMgLIAIgGIADgDIAOgKQANgKAPgFQAOgEAQAEQAMADALAPIAKALIAYAXIAWAWIAYAWIAUAVIAVAWIAXAWIAWAWQALALAKAOIATAbIARAbIASAaQAJAMAFAQIAMAdQAGAOAJANQAGAIAEAJIAFAMQAFAPALAMIAVAWIAXAXIAWAXQALAMAFAPQAEAPAKANQACADAAAEIABADQADAOABANQACARgDARQgCAMABAMIAiAEQARACAJAPQAHAMgBAOQAAATgQAEQgRAFgOgKQgNgKgIgMIgKgLIAFANIAGASQAEAQgLANQgOAPgMgQQgGgIgEgKIgBgDIgCgHIACAHIABADQADAQgLAHQgGAFgFgEQgHgFgGgJIgBgBQgDgHgCgGQACAGADAHIABABQAAAQgQgFIgFgDIgBgBQgCgEgCgFQACAFACAEQAFAQgSABIgCAAQgNAAgJgHgADUGwIACAFIgCgFQgCgOAAgOIAAgEQAAgQADgQQgDAQAAAQIAAAEQAAAOACAOgApOGLIABgDIgBADgAraChQgQAAgQgDQgPgDgPgFQgPgGgRgEQgQgEgNgJIgGgFQAFACABgEIAEgIQAGgMAIgLIASgZIASgZIASgaIARgZIASgbIARgaQAHgOAMgLQALgMAJgNIASgbQAJgNAFgPQAFgPAKgOQAIgNAFgPIALgeQAGgPADgQQADgRAIgNQAJgNAEgNQAHgHAFgIQAHgLAPgIIAagOQAMgHAJgOQAFgGABgJQABgQgCgQQgBgRgHgLIgEgKIgCgEIAIgTIAKgfQAFgQAJgLIAVgXIgVAXQgJALgFAQIgKAfIgIATQgFgKgHgGQgOgLgJgLIgRgWQAIgCAIgFQAMgLAHgLQAEgGAAgDIgBgCIABACQAAADgEAGQgHALgMALQgIAFgIACQgHABgHgBIgSgEQgNgEgMgIQgKgIgFgRQgEgPgCgQQgBgRAHgIIABgCIAWgJQAJgDAJgBQAFgEAJACIAIADIgGgLQgGgQgQgMQAKgJATgCQgVgDgQgMQABgKANgBQAsgCAnAAQgRgHAOgDQARgDAQAAQAMgBALABQALACALAAIADAAIAPAKQALAIAIAMQAJAOADALQACAHAIgGIAMgIIANgGQAPgGAPAAQAIAAAKAFQAOAIAAARQAAARgMAGQgPAHgOAEQgQAEgJAFIAMAXQAHAOAJAOQAHAMAFARQAEAOgBASQgBAPgFAPQgFAOgHANQgIALgKAKQgKAKADAKIALgCIAggJQAPgEARAAQASgBAIgHQALgBAKgEIAegLIAbgMIAMgFQAHgKABgRIAAgQIAAgBIADgBIAbgQQAOgJAPgFIAegLQAMgFAJgGIAFgDIABgBIAdgPIAdgNQAPgHAQgFQAQgEANgKQAMgKAOgJQANgIAOgFIAegNQAQgGAMgIIAcgQQAOgIAPgFQAOgGAOgHQAPgHAPgGIAdgNQAPgGAPgEIAfgJIAcgLQAOgGANgIQANgJANgHQAOgHAOgFQAQgGAIgKQAGgKALgNQAFgHAHgEQANgIgGgSQgEgPgCgQQgBgOAMgKQAHgGgDgMQgDgOgIgLQAXgIASAKIAFAFQAWAegIAmQgCALgEAJIgCAFIAEgEQAIgJAOgDQAQgEAPgFIAfgLQAPgGARgDQAPgDgCATQgBAKgLAFQgMAFgRAEIgfAIQgYAGAMANQAGAGALgCQAPgEARAAIAhABQAQABAPAHQASAJgIALQgRAJgQAAQgQgBgQABIgdADQARAEATAHIAjAKQAMADAHAJQAKALAGANQABAEgGABQgaAFgagIQgGgCgGgBQgZgCgXgIIgMgDQAJAOATACQAUACASAIIAYAMQAOAHADAOQADAKgLADQgRADgQgGIgXgJQgMgFgLgHQgTgOgVgMQgLgHgJAHQgFAFgHACQgKAEgMgBQgdgCgRgNQgIAKgPAEQgQAFgPAHQgOAHgNAIIgdASIgbAQIgbARIgcAOQgOAIgQAGIgdANIgcAOQgOAIgQAHQgPAHgOAJIgcASQgNAIgPAGQgQAHgKANIAIABQALABAMAEIAEABIADAAIATADQAQACAPAEIAfAHQARAFAOAGIAfALIAfAKQAPAFAOAJQAMAJAQAFQAQAGANAJIAaAUQANAKANAJQANAJAPAHQAPAHANAJQAOAKAOAIQAOAIANAKQAMALAOAJIAaASQAMgFARACQAQACAPAJQAOAIANAKIAaAVQAMAJAOAIQAPAIAPAFQAPAFANAIQAOAIAIAOQALASgWgBQgQgBgOgLQgLgJgNgIQgPgJgQgEIgggHQgZgFATAPIAZAUQAMAKAKANQAKAMAFAPQAGAQgHAOQgDAIgLgIQgNgKgJgNQgKgMgJgNQgJgNgMgLQgLgMgOgJQADAMAHAKQAPATAKAXQAFAKABALQACALgCALQgCAKgHAIQgEAFgGgCQgJgDgCgKQgDgPgFgOIgTg0QgFgPgMgJQgLAKgIANQgMASgQAQQgLAMgNAIQgOAJgGgIQgEgGACgGQAFgPAPgKQAOgJAJgMIAPgRQAMgNgPgCQgSgDgTAGQgaAJgUgIQgCgRALgFQAKgGAMgEIAggLQgOgIgNgIQgNgKgPgGIgdgMIgegMQgPgGgNgJIgcgRIgdgPIgegOIgegMQgOgHgPgIQgMgIgPgFQgPgGgOgIQgOgJgQgFIgegLIgPgGIgPgFIgCgBIgMgGQgPgFgQADIggAFQgQACgQAEIghAJIgfAJQgPAEgPAHIgdAMIgcAMIgfAOQgOAGgPAFIgDAAQgNAFgNAGQgOAHgQAGIgeAKIgeAFQgPACgQAFQgRAEgOAGIgGAFIgDADQgHAJABANQACAQAAAQQABARADAQQACAIAFAFIgDAXIgNgDQgGgBgDAHIgHAPQgGANgDAOIgIAgIgEAfQgCAQAAARQAAARAFAQQgHANgIAMIgTAYQgJANgNALIgXAWIgWAWQgMALgJAMIgUAWIgEAEIgGAEQgFACgFAGIgGABIgGABIgNACIgRADIggAHIggAEIgRADIgPACQgOABgOAAIgGAAgAplAXQAFAQAGAQQgGgQgFgQQgDgNgCgMQACAMADANgApThNQACAPAFAQIAKAfIAHAdQAEARAHAOQgHgOgEgRIgHgdIgKgfQgFgQgCgPQgBgGgBgDQABADABAGgAo6hqIAKAfIAKAeQAEAQAIAOQgIgOgEgQIgKgeIgKgfIgEgOIAEAOgAoWhkQAEAPAFAOIALAgQAEAJACAKQgCgKgEgJIgLggQgFgOgEgPIgJgfIAJAfgAllm2IgCgFIACAFgAmPpSQgJAAgIAEQgOAFgFANQgFANgHAMQgHAMAAASIAAAgQAAAFADAAQAPgBAJgLQALgKAIgNQAJgNAMgMQAMgLAKgLQALgNAHgLQgJABgLgFQgMgFgOAAIgGABgABjo9QgQAAgPADQgQACgQAEIgfAJIgfAIIgfAKIgeALIgfALQgPAGgQAEIgTAGIATgGQAQgEAPgGIAfgLIAegLIAfgKIAfgIIAfgJQAQgEAQgCQAPgDAQAAIAIgBIAFAAIACAAIAAAAIAIAAIACAAIgCAAIgIAAIAAAAIgCAAIgFAAIgIABgAnBqbIgTAPIATgPQANgKAIgLQgIALgNAKgAnCq3QgQADgPAGQgPAHgJAMQAJgMAPgHQAPgGAQgDIABAAIABgBIAAAAIAHAAIABAAIAAAAQAHAAAGADIABABIgCAEIACgDIABgBQADgGAAgHQAAgFgDgHQADAHAAAFQAAAHgDAGIgBAAIgBgBQgGgDgHAAIAAAAIgBAAIgHAAIAAAAIgBABIgBAAIAAAAg");
	this.shape_58.setTransform(286.5,129.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_47},{t:this.shape_56},{t:this.shape_55},{t:this.shape_44},{t:this.shape_54},{t:this.shape_42},{t:this.shape_41},{t:this.shape_43},{t:this.shape_39},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},42).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,470,348.2);


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
		var bgm = createjs.Sound.play('bgmCom',{loop:-1});
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
		
		 window.open ("com_finish.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("com_scene4.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mute
	this.vol_mute = new lib.vol_mute();
	this.vol_mute.parent = this;
	this.vol_mute.setTransform(36.8,4.1,1,1,0,0,0,15,14.1);
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
	this.vol_up.setTransform(-1.7,4.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.vol_pos(), 3);

	this.vol_dwn = new lib.vol_neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(-23.7,4.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.vol_neg(), 3);

	this.btn_menu = new lib.menu_main();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(-84.6,4.6,1,1.143,0,0,0,23.4,10.5);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.menu_main(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAYBrQgBgLgUgUQgQgRgKAAIAAh1QAKAAASgTQATgTAAgKg");
	this.shape.setTransform(-42.7,4.3,0.687,0.681);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADBMQgQgRgKAAIAAh1QAKgBASgSQATgTAAgJIAADTQgBgKgUgUg");
	this.shape_1.setTransform(-42.7,4.3,0.687,0.681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s("#000000").ss(1.5,1,1).rr(-0.75,-3.45,1.5,6.9,0.2);
	this.shape_2.setTransform(-47.2,4.3,1,1.003);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AAHAAQAAAKgHAGQgCAEgEACIAAgrQAEACACAEQACACACACQADAGAAAFg");
	this.shape_3.setTransform(-38.2,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGgUQAEABACAEIABABIADADQADAFAAAGQAAAJgGAGIgBABQgCAEgEACg");
	this.shape_4.setTransform(-41.5,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-19.7,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-486.5,-11,539.3,397), null);


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
(lib.com_scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5:0,scene5repeat:83});

	// timeline functions:
	this.frame_95 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglMAa5MAAAg1yMBKZAAAMAAAA1yg");
	mask.setTransform(277.4,209);

	// Layer 3
	this.instance = new lib.scene5();
	this.instance.parent = this;
	this.instance.setTransform(277.5,181,1,1,0,0,0,233.5,137.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAGQgDgDAAgDQAAgDADgCQADgCADgBQAFABADACQADACAAADQAAADgDADQgEADgEgBQgDABgDgDg");
	this.shape.setTransform(344,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34883F").s().p("AghApQgIgGAAgHQAAgEACgDQADgDAEAAQAGAAACAGQAEAIANAAQAKAAAKgFQAKgFAAgFQAAgJgGgCQgFgCgNgBQgLAAgJgDQgMgFABgKQAAgMANgKQANgKAPAAQAGAAAJACQALAEAAAFQAAACgCADQgDADgEAAIgIgBIgJgCQgJABgGAEQgIADAAAFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACACAFAAIAPABQAOABAIAHQAJAHAAANQAAARgTAIQgOAHgRgBQgQABgJgIg");
	this.shape_1.setTransform(336.7,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#34883F").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_2.setTransform(327.7,32.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#34883F").s().p("AgsAxQgCgDAAgDIAAgIIAAgIIABgLIAAgLIAAgLIAAgMIgBgMIgBgLQAAgEADgDQAEgDAEAAQAEAAAGAIQAcAqAcAZIAAgKIgBgpIAAgHIgBgHQAAgJAJAAQALAAAAAgIgBAKIAAAnIgBAKQgBAIgIAAQgFAAgFgFQgZgWgdgmIgBATIAAAPIABAPQAAATgKAAQgEAAgDgDg");
	this.shape_3.setTransform(317.9,33);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#34883F").s().p("AgcAwQgIgGABgUIAAgZIACgZIgBgHIgBgGQAAgKAJAAQAEAAACACIANgDIAMgBQAQAAAKAEQAFACAAAGQAAADgBACQgDADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQABABAHAAIALAAIANgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgSAAQgWAAgFgGg");
	this.shape_4.setTransform(308.8,32.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#34883F").s().p("AAjAqIgEgQIgHggIgJAaIgEAMIgFALQgEAGgEAAQgHAAgCgHIgEgMIgJghIgIAeIgDAOQgCAJgHAAQgEAAgDgDQgCgCAAgEQAAgKAFgPIAGgYIAEgTQADgNADgFQAEgFAFABQAFAAADAFQADAGADARQADARAFASQAHgSAFgXIAEgOQADgJAIAAQAGgBAEALIADAQQADAaAGAUIAGAUQAAAEgDADQgDACgEAAQgHABgCgKg");
	this.shape_5.setTransform(298.9,33.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#34883F").s().p("AgdAwQgHgGAAgUIABgZIACgZIgBgHIgBgGQABgKAIAAQAEAAACACIANgDIAMgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIAMgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgTAAQgVAAgGgGg");
	this.shape_6.setTransform(289.2,32.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#34883F").s().p("AghAnIABgVQACgbAAghQAAgEADgCQACgDAEAAQAEAAACADQADACAAAEQAAAhgCAcIgBAPQAPABAWgIIADAAQAEAAADADQACACAAADQAAAGgGACQgHAEgQADQgNACgJAAQgQAAAAgNg");
	this.shape_7.setTransform(281.5,33.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34883F").s().p("AgcAwQgCgCAAgDIAAgSIABgdIABgdQAAgRAJABIAGgBIAKAAQALABALAHQAMAKAAANQAAAPgNAJQgLAJgPgBIgFAAIgBAeQAAADgCACQgCADgEAAQgEAAgCgDgAgLghIAAAJIgBAWIAEABQAJgBAGgFQAHgFAAgHQAAgGgGgEQgGgFgHAAIgDAAIgDABg");
	this.shape_8.setTransform(274.3,32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#34883F").s().p("AAiAqIgDgQIgHggIgJAaIgEAMIgFALQgDAGgGAAQgGAAgDgHIgDgMIgJghIgIAeIgCAOQgDAJgHAAQgEAAgDgDQgCgCAAgEQAAgKAEgPIAIgYIADgTQADgNADgFQAEgFAFABQAGAAADAFQACAGADARQACARAGASQAGgSAHgXIADgOQAEgJAGAAQAIgBADALIADAQQAEAaAGAUIAFAUQAAAEgDADQgDACgDAAQgHABgEgKg");
	this.shape_9.setTransform(265.2,33.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#34883F").s().p("AghAnQgOgMAAgSQAAgUANgSQAQgUAVAAQAXAAALAKQALAKAAAUQAAAVgMASQgPAUgWAAQgTAAgNgLgAgTgTQgKAOAAAOQAAALAIAGQAIAHAMAAQANAAAJgOQAJgNAAgPQAAgNgGgFQgGgFgPAAQgNAAgJANg");
	this.shape_10.setTransform(254.1,33.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#34883F").s().p("AgcAnQgJgLAAgNQAAgVATgWQAQgSAPAAIAFAAIAEAAQADgCAEAAQAGAAACAHIABAMQAAAEgCADQgDADgEAAQgGAAgDgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgJANQgPAQAAAPQAAAHAEAFQAFAFAHAAQAFAAAGgDIAKgHQAFgDADAAQADAAADADQACADAAADQAAADgDADQgRAPgRAAQgOAAgLgKg");
	this.shape_11.setTransform(245,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#34883F").s().p("AgcAwQgIgGAAgUIABgZIACgZIgBgHIgBgGQAAgKAJAAQAEAAACACIANgDIAMgBQAQAAAKAEQAFACAAAGQAAADgBACQgDADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAYgCIAPgBQAEAAACACQADADAAADQAAAHgIABIgPABIgaADIgBANQAAAMABACQABABAHAAIALAAIANgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgSAAQgWAAgFgGg");
	this.shape_12.setTransform(231.4,32.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#34883F").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_13.setTransform(222.6,32.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#34883F").s().p("AAWAkQgDgHgDgKIgPABIgOACIgLAVQgCAFgFAAQgEAAgDgDQgCgDAAgDQAAgDAJgTIgBgDQAAgDAGgDIAUgfQAPgYAEAAQAHAAACAJIAEAUIAKApIADAIQACAFAAAEQAAADgDACQgCADgEAAQgFAAgFgMgAgEAGIAIgBIAJgBIgFgUIgMAWg");
	this.shape_14.setTransform(213.3,33.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#34883F").s().p("AgbAnQgKgLAAgNQAAgVATgWQAQgSAPAAIAFAAIAEAAQADgCAEAAQAGAAACAHIABAMQAAAEgCADQgDADgEAAQgGAAgDgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgKANQgOAQAAAPQAAAHAEAFQAFAFAGAAQAGAAAHgDIAJgHQAFgDADAAQAEAAACADQADADAAADQAAADgEADQgRAPgSAAQgOAAgJgKg");
	this.shape_15.setTransform(204.6,33);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34883F").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_16.setTransform(196.9,33.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34883F").s().p("AgTAzQgHgBgFgDQgEAAgCgDQgDgCAAgEIABgTIABgTIAAgUIgBgVQAAgEAEgDQADgEAEAAQACAAAJAEIALAGQASAGANAMQAPAPAAASQABALgGAJQgGALgJAGQgLAHgRAAIgLgCgAgWAgIAGADIAIAAQAMAAAGgDQAGgEADgGQADgGAAgHQAAgPgSgLQgFgEgVgJg");
	this.shape_17.setTransform(189,33.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#34883F").s().p("AgcAwQgIgGAAgUIABgZIACgZIgBgHIgBgGQABgKAIAAQADAAADACIANgDIAMgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAXgCIAQgBQAEAAACACQADADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIALAAIANgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgSAAQgWAAgFgGg");
	this.shape_18.setTransform(180.2,32.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#34883F").s().p("AgiAvQgCgCAAgEIAAgOIAAgOIAAgyQAAgFACgDQAEgEAFAAIAQABQAJACAFADQAbANAAAVQAAAIgFAFQgGAHgLAEQARAJAIAKQACADAAADQAAADgCADQgDADgEAAQgDAAgDgDQgTgSgWgHIAAAUQAAAEgCACQgDADgEAAQgDAAgDgDgAgTACIADAAQAPAAAHgDIAGgEIADgEQAAgIgJgGQgIgGgJgBIgIgBg");
	this.shape_19.setTransform(171.9,32.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#34883F").s().p("AgcAwQgCgCAAgDIAAgSIABgdIABgdQAAgRAJABIAGgBIAKAAQALABALAHQAMAKAAANQAAAPgNAJQgLAJgPgBIgFAAIgBAeQAAADgCACQgCADgEAAQgEAAgCgDgAgLghIAAAJIgBAWIAEABQAJgBAGgFQAHgFAAgHQAAgGgGgEQgGgFgHAAIgDAAIgDABg");
	this.shape_20.setTransform(164.2,32.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_21.setTransform(151.5,34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AACAUQgCgFgBgQIgCADIgJAYQgBAEgCABQgDAEgFAAQgDABgDgGQgEgGgCgIIgGgiIgBgJQAAgDADgCQACgCAEAAQAHgBABAHIACAJIABAJIACAPIALgfQADgJAGABQAHgBACAKIAEAQIADARIAKglQABgGAHABQADAAADACQADACAAADIgBADIgNAsQgCAGgEAFQgDAEgFAAQgIAAgFgPg");
	this.shape_22.setTransform(143.8,34.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_23.setTransform(136.2,33.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLA2QgDgDAAgDIAAgCIACgRIAAgfIgEABIgEAAQgEAAgCgCQgDgCAAgEQAAgGAGgCQADgBAIAAIABgHQACgOAGgHQAGgJAPAAQAMAAAAAJQAAAIgLAAQgHAAgEAFQgDAEAAAJIgBACIANgBQALAAAAAIQAAAIgMAAIgMAAIAAARIAAARQAAALgCAHQgBAHgGAAQgEAAgCgCg");
	this.shape_24.setTransform(124.1,33.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_25.setTransform(117.3,34.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AASAvQgFADgEABIgJABQgOAAgKgJQgJgJAAgPQAAgRAKgJQAJgLAPAAIAIABIAHADIACgdQABgIAHAAQAEAAACACQACACAAAEIgBAcIgCAaQAAAYACAHIAAACQAAAEgDABQgCADgDAAQgFAAgCgFgAgMACQgFAGAAALQAAAHAFAEQAFAGAHAAIAGgBIAGgFIACgCIAAgXQgCgEgDgBQgDgBgFAAQgIAAgFADg");
	this.shape_26.setTransform(104.4,32.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AANAeIgCgOIgBgNIABgEIAAgHIAAgCIAAgCQAAgGgDAAQgFAAgFAHQgEAHgDAKIgBAGIgBAFIAAAGIgBAFQAAAEgCACQgDADgDAAQgEAAgCgDQgDgCAAgEIgBgFIAAgGIABgRIABgQIAAgFIgBgHQABgDADgDQACgCADAAQAJAAAAAKIAAABQAKgKAJAAQAMABAEAJQAEAIAAANIAAAEIAAAEIABAMIABANQABADgDACQgDADgEAAQgHAAgBgHg");
	this.shape_27.setTransform(97.4,34.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_28.setTransform(90.4,34.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAcQgKgJAAgNQAAgMAJgNQAKgQANAAQAGAAAJAEQALAEAAAGQAAADgCACQgDADgDAAQgDAAgEgDQgEgDgHAAQgEAAgGAKQgFAJAAAGQAAAGAEAEQAFAEAGAAQAFAAAGgDQAGgEACAAQADAAADADQACACAAADQAAAFgLAFQgJAFgHAAQgNAAgJgIg");
	this.shape_29.setTransform(83.6,34.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAbQgLgIABgOQgBgPAJgLQAKgNAOAAQAMAAAGAEQAKAFAAAKQAAAHgHAFIgPAGIgUAKQADADAEACQAFABAEAAQAJAAAFgDQAFgDAEAAQAGAAABAGQAAAHgLAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgDAIIAOgHIAOgHQgFgCgHAAQgEAAgFAEg");
	this.shape_30.setTransform(76.7,34.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRAhQgKgEABgHQgBgGAIAAIAIACIAJACQAMAAAAgFQAAgEgJgEQgMgFgEgCQgJgGAAgJQAAgNANgEQAJgDAOAAQAHAAADACQAFACAAAGQAAALgHAAQgGAAgCgFIgFAAQgOAAAAAEQAAACAJAEIARAJQAIAGABAIQgBALgJAGQgJAFgLAAQgIAAgHgDg");
	this.shape_31.setTransform(69.9,34.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVAbQgKgIAAgOQgBgPAJgLQAKgNAOAAQAMAAAGAEQAKAFAAAKQAAAHgHAFIgPAGIgUAKQADADAEACQAEABAFAAQAJAAAFgDQAFgDAEAAQAGAAABAGQAAAHgLAFQgJAEgKAAQgOAAgKgIgAgIgOQgEAEgCAIIANgHIAOgHQgFgCgHAAQgFAAgEAEg");
	this.shape_32.setTransform(57.4,34.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAPAuIgDgOIgBgPIAAgFIAAgEIAAgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgHAAgFAFQgDADgFAJQAAAXgCAFQgDAFgFAAQgEAAgCgCQgDgCAAgEIABgDIAAgRIABgqIAAgCIAAgKIgBgGIAAgGQAAgDACgDQADgCAEAAQAGAAACAHIABALIAAANIAAANQAEgFAGgCQAEgCAGAAQALAAAEAGQAEAEABAJIAAAPIACANIACAMIAAACQAAAEgCACQgDADgEAAQgGAAgCgHg");
	this.shape_33.setTransform(50.2,32.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAsQgDgCAAgEIABgGIAAgHIgBggIgMgBQgIgBAAgHQAAgEACgCQADgDADAAIALABIAAgHIAAgGQAAgEACgCQADgCAEAAQAIAAAAAPIAAAGIAGgBIAKABQAFACAAAGQAAADgCADQgDACgDAAIgEAAIgDAAIgGAAIABAhIAAADIAAAEQAAAOgJAAQgCAAgDgCg");
	this.shape_34.setTransform(43.3,33.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgJANQgCgCAAgCQAAgCAEgHIAFgLQACgDAEgBQADAAADACQACADAAADIgEAJIgFAJQgCAFgEgBQgDAAgDgCg");
	this.shape_35.setTransform(379.1,18.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#690FA2").s().p("AgdAwQgGgGAAgUIABgZIABgZIAAgHIgBgGQAAgKAJAAQACAAACACIAPgDIALgBQAQAAAKAEQAGACAAAGQAAADgDACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgaADIgBANQAAAMACACQAAABAIAAIALAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_36.setTransform(372.7,12.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#690FA2").s().p("AgNAtQgIgSgJgiIgFgRQgEgMAAgFQAAgEADgCQACgCAEAAQAGAAACAGIADALIAGAVIAJAfIAPgmIAFgPQAEgJAEgFQADgDAEAAQAEAAADACQACADAAAEIgBAFQgEAEgDAHIgEANIgRArIgIAPQgDAFgEAAQgGAAgDgGg");
	this.shape_37.setTransform(364.2,12.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#690FA2").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_38.setTransform(356.1,12.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#690FA2").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_39.setTransform(348.1,12.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#690FA2").s().p("AgbAmQgKgKAAgNQAAgVATgVQAQgTAPAAIAFAAIAEABQADgDAEAAQAGAAACAHIABAMQAAAEgCACQgDAEgEAAQgGAAgDgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgKANQgOAQAAAPQAAAHAEAFQAFAFAGAAQAGAAAHgDIAJgHQAFgDADAAQAEAAACADQADADAAADQAAAEgEADQgRAOgSAAQgOAAgJgLg");
	this.shape_40.setTransform(339.6,12.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#690FA2").s().p("AgdAwQgGgGgBgUIACgZIABgZIAAgHIgBgGQAAgKAJAAQADAAABACIAPgDIALgBQAQAAAKAEQAGACAAAGQgBADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMACACQABABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_41.setTransform(331.7,12.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#690FA2").s().p("AgbAsQgNgJAAgNQAAgJAJAAQAJAAAAAJQAAAEAHAEQAGAFAGAAQACAAABgJIAAgUIABgjIAAgEIgBAAIgHAAIgHAAQgEAAgDgCQgDgDAAgEQAAgIAMAAIAGAAIAGAAIAMAAIAMgBQARAAAAAKQAAADgDACQgCADgEAAIgEAAIgEAAIgFAAIAAAEQAAAtgGAVQgFAPgLAAQgMAAgMgIg");
	this.shape_42.setTransform(323.2,13.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#690FA2").s().p("AgTAzQgIgBgEgDQgEAAgCgDQgCgCgBgEIABgTIABgTIgBgUIAAgVQAAgEAEgDQADgEADAAQADAAAJAEIALAGQASAGAMAMQARAPgBASQAAALgFAJQgFALgKAGQgKAHgSAAIgLgCgAgWAgIAHADIAHAAQAMAAAGgDQAGgEADgGQAEgGgBgHQAAgPgSgLQgFgEgVgJg");
	this.shape_43.setTransform(314.3,12.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#690FA2").s().p("AAWAkQgDgIgDgJIgPABIgOACIgLAVQgCAFgFAAQgEAAgDgDQgCgDAAgDQAAgDAJgTIgBgDQAAgEAGgCIAUgfQAPgYAEAAQAHAAACAJIAEAUIAKApIADAIQACAGAAADQAAADgDACQgCADgEAAQgFAAgFgMgAgEAGIAIgBIAJgBIgFgUIgMAWg");
	this.shape_44.setTransform(304.6,13);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAhQgCgCAAgEIAAgoIAAgGIAAgGQAAgEACgCQACgDAEAAQAIAAABAIQAKgJAOAAQAMAAAAARIAAAEQAAAKgJAAQgHAAgBgIIAAgGQgOACgFAMIAAAfQgBAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_45.setTransform(291.2,14.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAbQgJgJgBgPQAAgNAIgLQAKgNAQAAQANAAAHALQAHAJAAANQAAAOgIAKQgJAMgOAAQgLAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEADAEAAQAFAAAEgDQAFgFAAgHQABgUgMAAQgHAAgEAHg");
	this.shape_46.setTransform(284.4,14.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000FF").s().p("AgsAxQgCgDAAgDIAAgIIAAgIIABgLIAAgLIAAgLIAAgMIgBgMIgBgLQAAgEADgDQAEgDAEAAQAEAAAGAIQAcAqAcAZIAAgKIgBgpIAAgHIgBgHQAAgJAJAAQALAAAAAgIgBAKIAAAnIgBAKQgBAIgIAAQgFAAgFgFQgZgWgdgmIgBATIAAAPIABAPQAAATgKAAQgEAAgDgDg");
	this.shape_47.setTransform(270.2,12.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000FF").s().p("AgZArQgQgMAAggIAAgJIAAgJIAAgHIABgHQAAgFABgEQADgHAEAAQAEABADACQACACAAAEIAAAKIAAALIAAAJIAAAJQAAAJACAIQADAKAFAEQACACAKAAQAQAAAGgcQADgOAAgbQAAgDACgEQADgEAFgBQAFABACADQABACAAADQAAAZgCAOQgEAUgKAPQgFAGgGAEQgIAGgIgBQgQABgIgHg");
	this.shape_48.setTransform(260,13.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0000FF").s().p("AghAnQgOgMAAgSQAAgVAOgRQAPgUAWAAQAWAAAKAKQAMAKAAAUQAAAVgNASQgOAUgWAAQgTAAgNgLgAgUgTQgJAOAAAOQAAALAIAGQAIAHAMgBQANAAAJgNQAJgMAAgQQAAgNgGgFQgGgFgOAAQgNAAgLANg");
	this.shape_49.setTransform(250.1,13);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0000FF").s().p("AgsAxQgCgDAAgDIAAgIIAAgIIABgLIAAgLIAAgLIAAgMIgBgMIgBgLQAAgEADgDQAEgDAEAAQAEAAAGAIQAcAqAcAZIAAgKIgBgpIAAgHIgBgHQAAgJAJAAQALAAAAAgIgBAKIAAAnIgBAKQgBAIgIAAQgFAAgFgFQgZgWgdgmIgBATIAAAPIABAPQAAATgKAAQgEAAgDgDg");
	this.shape_50.setTransform(239.7,12.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAPAeIgKADIgHACQgPAAgIgIQgHgJAAgPQAAgPALgLQALgLAPAAQAGAAAIAEQAKADAAAGQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgBAGIAAAJQAAAMACAEIADAHIACAGQAAADgDADQgCACgDAAQgDAAgHgFgAgIgMQgHAHAAAIQAAAJADADQADAFAHAAQADAAADgBQAEgCADgDIgCgVIAAgFIABgGIgCgBIgCAAQgIAAgGAHg");
	this.shape_51.setTransform(225.2,14.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRAhQgJgEAAgHQgBgGAIAAIAIACIAJACQALAAABgFQAAgEgJgEQgMgFgEgCQgJgGAAgJQAAgNANgEQAJgDAOAAQAHAAADACQAFACAAAGQAAALgHAAQgGAAgCgFIgEAAQgPAAAAAEQAAACAJAEIARAJQAIAGABAIQgBALgJAGQgJAFgLAAQgIAAgHgDg");
	this.shape_52.setTransform(212.6,14.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHAuQgCgDAAgDIgBgMIAAgLIABgPIAAgMQAAgFACgBQADgDAEAAQADAAACADQACABABAFIgBAMIAAAPIAAALIAAAMQAAADgDADQgCADgDgBQgEABgCgDgAgFggQgDgDAAgDQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape_53.setTransform(207.9,12.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00CC00").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_54.setTransform(195.7,12.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00CC00").s().p("AgsAxQgCgDAAgDIAAgIIAAgIIABgLIAAgLIAAgLIAAgMIgBgMIgBgLQAAgEADgDQAEgDAEAAQAEAAAGAIQAcAqAcAZIAAgKIgBgpIAAgHIgBgHQAAgJAJAAQALAAAAAgIgBAKIAAAnIgBAKQgBAIgIAAQgFAAgFgFQgZgWgdgmIgBATIAAAPIABAPQAAATgKAAQgEAAgDgDg");
	this.shape_55.setTransform(185.9,12.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00CC00").s().p("AgdAwQgGgGgBgUIABgZIACgZIAAgHIgCgGQABgKAIAAQAEAAABACIAPgDIALgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_56.setTransform(176.8,12.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00CC00").s().p("AAiAqIgDgQIgHggIgJAaIgEAMIgFALQgEAGgEAAQgGAAgEgHIgDgMIgJghIgIAeIgDAOQgCAJgHAAQgEAAgDgDQgCgCAAgEQAAgKAFgPIAHgYIADgTQADgOAEgEQADgFAFABQAFAAAEAFQACAGADARQACAQAGATQAGgSAHgXIADgOQAEgJAGAAQAIAAADAKIADAQQADAaAHAUIAFAUQAAAEgDADQgDADgEgBQgHABgDgKg");
	this.shape_57.setTransform(166.9,13);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00CC00").s().p("AgdAwQgGgGAAgUIABgZIABgZIAAgHIgBgGQAAgKAJAAQACAAACACIAPgDIALgBQAQAAAKAEQAGACAAAGQAAADgDACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgaADIgBANQAAAMACACQAAABAIAAIALAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_58.setTransform(157.2,12.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00CC00").s().p("AghAnIABgVQACgaAAgiQAAgEADgCQACgDAEAAQAEAAACADQADACAAAEQAAAigCAbIgBAPQAPABAWgIIADAAQAEAAADADQACACAAADQAAAGgGACQgHAEgQADQgNACgJAAQgQAAAAgNg");
	this.shape_59.setTransform(149.5,13);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00CC00").s().p("AgcAwQgCgCAAgDIAAgSIABgcIABgeQAAgRAJACIAGgCIAKAAQALABALAHQAMAKAAANQAAAPgNAJQgLAJgPAAIgFgBIgBAeQAAADgCACQgCADgEAAQgEAAgCgDgAgLghIAAAJIgBAWIAEABQAJAAAGgGQAHgFAAgHQAAgGgGgEQgGgFgHAAIgDAAIgDABg");
	this.shape_60.setTransform(142.3,12.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00CC00").s().p("AAjAqIgEgQIgHggIgJAaIgEAMIgFALQgDAGgFAAQgHAAgCgHIgEgMIgJghIgIAeIgDAOQgCAJgHAAQgEAAgDgDQgCgCAAgEQAAgKAEgPIAHgYIAEgTQADgOADgEQAEgFAFABQAFAAADAFQADAGADARQADAQAFATQAHgSAFgXIAEgOQADgJAIAAQAGAAAEAKIADAQQAEAaAFAUIAGAUQAAAEgDADQgDADgDgBQgIABgCgKg");
	this.shape_61.setTransform(133.2,13);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00CC00").s().p("AghAnQgOgMAAgSQAAgVANgRQAPgUAXAAQAVAAALAKQAMAKAAAUQAAAVgNASQgOAUgWAAQgTAAgNgLgAgTgTQgKAOAAAOQAAALAIAGQAIAHAMgBQANAAAJgNQAJgMAAgQQAAgNgGgFQgGgFgOAAQgNAAgKANg");
	this.shape_62.setTransform(122.1,13);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00CC00").s().p("AgcAmQgJgKAAgNQAAgVATgVQAPgTAQAAIAFAAIAEABQADgDAEAAQAHAAABAHIABAMQAAAEgCACQgCAEgFAAQgFAAgDgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgJANQgPAQAAAPQAAAHAFAFQAEAFAGAAQAGAAAGgDIAKgHQAFgDACAAQAEAAADADQACADAAADQABAEgEADQgRAOgSAAQgNAAgLgLg");
	this.shape_63.setTransform(113,12.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00CC00").s().p("AgdAwQgGgGgBgUIABgZIACgZIAAgHIgCgGQABgKAIAAQAEAAABACIAPgDIALgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgLACIgBAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIALgBIAEAAIAEAAQAEAAACACQADACAAAEQAAAHgIACQgFABgUAAQgUAAgHgGg");
	this.shape_64.setTransform(99.4,12.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00CC00").s().p("AgNAtQgHgSgKgiIgGgRQgDgMAAgFQAAgEADgCQACgCAEAAQAGAAADAGIACALIAGAVIAKAfIAOgmIAFgPQAEgJAEgFQADgDAEAAQAEAAADACQACADAAAEIgBAFQgEAEgDAHIgFANIgQArIgIAPQgDAFgDAAQgHAAgDgGg");
	this.shape_65.setTransform(90.8,12.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00CC00").s().p("AgdAuQgDgCAAgEQAAgEADgCQADgDAEAAIAMgBIAAgcQAAgRABgPIgOAAQgDAAgDgCQgDgDAAgEQAAgDADgDQACgCAEAAIASgBQALAAATADQAIABAAAIQAAAEgDACQgCACgDAAIgRgCIgBAeIAAAdIARAAQAEAAADACQACADAAADQAAAEgDADQgCACgEAAIgLAAIgLAAIgMABIgNACQgDAAgDgDg");
	this.shape_66.setTransform(82.7,12.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00CC00").s().p("AgFAuQgDgCAAgEIAAgDIABgDIgBgIIAAgJIgCgWIgBgXIgEAAQgOAAgIgCQgHgCAAgHQAAgDACgDQADgDAEABIAKABIAKAAIAMAAIALAAIAOABIAPAAQADAAADADQACACAAAEQAAAEgCACQgDADgDAAIgQgBIgPgBIABAaIACAZIAAAGIABAHQAAAFgCADQgDAFgFAAQgCAAgDgCg");
	this.shape_67.setTransform(74.8,12.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00CC00").s().p("AgcAmQgJgKAAgNQAAgVATgVQAPgTAQAAIAFAAIAEABQADgDAEAAQAHAAABAHIABAMQAAAEgCACQgCAEgFAAQgFAAgDgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgFAAQgIAAgKANQgOAQAAAPQAAAHAFAFQAEAFAGAAQAGAAAHgDIAJgHQAFgDACAAQAEAAADADQACADAAADQAAAEgDADQgRAOgSAAQgOAAgKgLg");
	this.shape_68.setTransform(66.3,12.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00CC00").s().p("AgdAwQgHgGAAgUIABgZIACgZIgBgHIgBgGQABgKAIAAQAEAAACACIANgDIAMgBQAQAAAKAEQAGACgBAGQAAADgCACQgCADgEAAIgDAAQgKgDgKAAIgJABIgMACIAAAZIAXgCIAQgBQAEAAADACQACADAAADQAAAHgIABIgPABIgbADIAAANQAAAMABACQACABAGAAIAMAAIAMgBIADAAIAEAAQADAAADACQADACAAAEQAAAHgHACQgHABgTAAQgVAAgGgGg");
	this.shape_69.setTransform(58.3,12.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00CC00").s().p("AgbAsQgNgJAAgNQAAgJAJAAQAJAAAAAJQAAAEAHAEQAGAFAGAAQACAAABgJIAAgUIABgjIAAgEIgBAAIgHAAIgHAAQgEAAgDgCQgDgDAAgEQAAgIAMAAIAGAAIAGAAIAMAAIAMgBQARAAAAAKQAAADgDACQgCADgEAAIgEAAIgEAAIgFAAIAAAEQAAAtgGAVQgFAPgLAAQgMAAgMgIg");
	this.shape_70.setTransform(49.8,13.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00CC00").s().p("AgeAwQgDgDAAgEIAAhCIgBgJIABgIQABgGAKgBIAQgBQALAAALAHQANAJAAAOQAAAHgDAFQgCAEgFAEQAGADAFAGQAFAHAAAGQAAAJgJAHQgGAFgHADQgOAFgXAAQgDAAgDgDgAgQAiQALgBAMgDQALgDAAgEQgBgFgHgEQgFgDgFAAIgQgBgAgQgUIAAAOIAJAAQASgBAAgNQAAgFgGgEQgFgEgGAAIgKAAg");
	this.shape_71.setTransform(41.5,12.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00CC00").s().p("AghAnQgOgMAAgSQAAgVANgRQAQgUAVAAQAWAAALAKQAMAKAAAUQAAAVgNASQgOAUgWAAQgTAAgNgLgAgTgTQgKAOAAAOQAAALAIAGQAIAHAMgBQANAAAJgNQAJgMAAgQQAAgNgGgFQgGgFgPAAQgMAAgKANg");
	this.shape_72.setTransform(32,13);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AANAeIgCgOIgBgNIAAgFIAAgGIAAgCIABgCQAAgFgDgBQgFABgEAGQgGAHgCAKIgBAGIAAAFIgBAGIgBAGQAAADgCACQgDADgDAAQgEAAgCgDQgDgCAAgDIgBgGIAAgGIABgRIABgQIAAgFIAAgHQAAgDADgCQACgDAEAAQAIAAABAKIAAABQAJgKAJAAQAMAAAFALQADAGAAAOIAAAEIAAAEIABAMIABANQABADgDACQgDADgEAAQgHAAgBgHg");
	this.shape_73.setTransform(17.9,14.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAWAkQgDgIgDgJIgPABIgOACIgLAVQgCAFgFAAQgEAAgDgDQgCgDAAgDQAAgDAJgTIgBgDQAAgEAGgCIAUgfQAPgYAEAAQAHAAACAJIAEAUIAKApIADAIQACAGAAADQAAADgDACQgCADgEAAQgFAAgFgMgAgEAGIAIgBIAJgBIgFgUIgMAWg");
	this.shape_74.setTransform(9.6,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,201.2,546.5,399.1);
// library properties:
lib.properties = {
	id: 'BB4E6A35F5946B49ACCE784D1FA9F598',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bump.mp3", id:"bump"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/Cowbell.mp3", id:"Cowbell"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/massacreistheobjectivecomplement.mp3", id:"massacreistheobjectivecomplement"},
		{src:"sounds/ouch.mp3", id:"ouch"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/bgmCom.mp3", id:"bgmCom"},
		{src:"sounds/theycalledthegameamassacre.mp3", id:"theycalledthegameamassacre"}
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
an.compositions['BB4E6A35F5946B49ACCE784D1FA9F598'] = {
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