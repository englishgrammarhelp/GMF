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


(lib.rapbubble1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AXtg6QABBolVA/QhxAVkeAXQkaAWjJAEIhQCDQgZAAgFgXQgDgNAEgmQAEgkgFgPQgGgYgcAAQqtgMnrgzQnrg0gBhoQAAhoG9hKQG8hJJ0AAQJ0AAG9BJQG8BKAABog");
	this.shape.setTransform(11.9,-7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC5EfQgDgNAEgmQAEgkgFgQQgGgXgcAAQqtgMnrgzQnrg0gBhoQAAhoG9hKQG9hJJzAAQJ1AAG8BJQG8BKAABoQABBolUA/QhyAVkeAXQkaAVjIAFIhQCDQgaAAgFgXg");
	this.shape_1.setTransform(11.9,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rapbubble1, new cjs.Rectangle(-140.8,-39,305.5,64), null);


(lib.BEscene2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag3BiQgMgLAAgpIAAgSIABgVIgBgGQAAgDACgEQADgkgBgSIgBgOIgBgNQAAgQANAAQAFAAAEAEQAPgEAOgCQANgCALAAQAfAAATAHQAIAEAAAJQAAAFgEAEQgDAEgGAAIgEgBQgVgGgUAAQgKAAgLACQgNACgOAEIABANIgCAxIA3gGIAdgCQAGAAAEADQAEAEAAAGQAAAKgMACIgeACIg5AGIgBARIgBAPQAAAcAEAFQADADARAAIAXAAIAXAAIAIgBIAHgBQAOAAAAANQAAALgLACQgMACgmAAQgoAAgLgKg");
	this.shape.setTransform(41.7,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhABgQgEgEAAgFIgBgeIgBgeQABgMACgWQACgXABgMIgBgTIgCgTQAAgHAEgGQAFgGAIAAIAfADQASACAKAGQA0AbAAAoQAAATgSAOQgOAMgVAGQAoAVATAYQADAEABAEQAAAGgFAEQgDAEgGAAQgEAAgFgEQgqgqgygOIABAZIAAAZQABAFgEAEQgDAEgGAAQgFAAgEgEgAgog4IABAPIgCAZIgDAZIAGAAIAGAAQAgAAAQgJQAGgDAGgGQAHgHAAgFQAAgSgUgPQgRgOgVgCIgSgCg");
	this.shape_1.setTransform(25.3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAsBCQgDgMgFgcQgNABgVAFIggAHQgHARgPAgQgEAHgIAAQgEAAgFgEQgDgEAAgFQAAgGATgoQgCgEAAgEQAAgKAMgDQAOgaAWgkQAdgwAIAAQAKAAAEAOIAIArIATBXIAHAUQADAKAAAEQAAAFgDAEQgEAEgFAAQgMAAgJgegAgPAJIAtgJIgKgxg");
	this.shape_2.setTransform(7.1,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgPAbQgDgDAAgEQAAgEAIgRIAKgXQADgGAFAAQAFAAADAEQADADAAAFQAAADgSAnQgCAHgGAAQgFAAgDgEg");
	this.shape_3.setTransform(-12.8,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgyBYQgYgLAAgTQAAgFADgDQAEgEAGAAQAGAAAFAHQAGAJAFAEQALAHAUAAQATAAARgJQAWgKAAgUQAAgQgTgJQgPgIgWgBQgUAAgOgIQgSgJAAgUQAAgXAagSQAYgRAaAAQAMAAAPADQAVAGAAAJQAAAKgLABQgGgBgMgCQgNgDgHAAQgTAAgOAKQgOAKAAAOQAAAKATAFQAHACATABQAdACAQAQQAPAOAAAVQAAAegbASQgZAPgfABQgXgBgTgIg");
	this.shape_4.setTransform(-26.1,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag3BdQgDgEAAgFQAAgGADgDQADgEAGAAIAbgCQABgLAAgNIgBgVIAAgWQAAgcAEgsIgRAAIgRABQgFAAgEgEQgDgDAAgGQAAgMAMgBIAmgBQAYAAAmAGQALABAAAMQAAAGgEADQgEAEgFAAQgIAAgMgDIgVgCQgDAlAAAhIABAVIAAAXIAAAVIAogBQAFAAAEAFQADADAAAGQAAAFgDAEQgEADgFAAIgWABIgVAAQgHABgRACIgZACQgGAAgDgEg");
	this.shape_5.setTransform(-42.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BEscene2still, new cjs.Rectangle(-51.5,-20.1,103,40.3), null);


(lib.BEscene1still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABOBfQgEgFgDgPIgEgWQgGgUgLhFIgZBMIgIAZQgFAOgEAJQgFAJgJAAQgHAAgFgIQgCgFgCgIIgEgPQgNgsgKgyIgFAWIgQBDQgBALgFAYQgEAJgJABQgGAAgEgFQgDgEAAgGQAAgVAJgfIAOgyIAHgoQAGgcAGgJQAFgHAIAAQAIAAAEAJQAFAMAFAiQAIArAOAvQARgwAOg1IAEgTQACgKAEgIQAFgJAJAAQALABAFAUQACAIADAXQAIA4AKApIAHAVQAFARAAAEQAAAGgFAEQgEADgFABQgGAAgFgIg");
	this.shape.setTransform(33.5,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAsBCQgDgMgFgcQgNABgVAFIggAHQgHARgPAgQgEAHgIAAQgEAAgFgEQgDgEAAgFQgBgGAUgoQgDgEABgEQAAgKAMgDQAPgaAVgkQAdgwAIAAQAKAAAEAOIAIArIATBXIAHAUQADAKAAAEQAAAFgDAEQgEAEgFAAQgMAAgJgegAgPAJIAtgJIgKgxg");
	this.shape_1.setTransform(12.2,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgPAbQgDgDAAgEQAAgEAIgRIAKgXQADgGAFAAQAFAAADAEQADADAAAFQAAADgSAnQgCAHgGAAQgFAAgDgEg");
	this.shape_2.setTransform(-7.8,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag3BiQgMgLAAgpIAAgSIABgVIgBgGQAAgDACgEQACgkABgSIgBgOIgCgNQAAgQANAAQAFAAAEAEQAQgEANgCQAOgCAKAAQAfAAATAHQAIAEAAAJQAAAFgEAEQgDAEgGAAIgDgBQgWgGgUAAQgKAAgLACQgNACgOAEIABANIgCAxIA3gGIAdgCQAGAAAEADQAEAEAAAGQAAAKgMACIgeACIg6AGIgBARIAAAPQAAAcAEAFQADADARAAIAXAAIAXAAIAIgBIAIgBQANAAAAANQAAALgLACQgMACgnAAQgnAAgLgKg");
	this.shape_3.setTransform(-19.8,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag7BiQgFgFAAgGIAAglQAAgSADghIADg0QgBgMACgXQABgGADgCQARgGAWAAQAWAAAUAQQAYARAAAaQAAAggZASQATAIAJAKQAKAKAAAMQAAAPgRAPQgMAKgMAFQgcALgsAAQgGAAgFgFgAgmAzIAAAaQAhgBAUgJQAJgDAIgHQAIgHAAgDQAAgGgRgIQgMgFgLgDIgNgCIgFAAIgFAAIgPgBIAAAdgAghhLIAAAWIgDAxIATACQATgCAMgKQANgLAAgSQAAgMgNgLQgOgKgOAAIgTABg");
	this.shape_4.setTransform(-36,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BEscene1still, new cjs.Rectangle(-46.8,-20.1,93.8,40.3), null);


(lib.berap2buystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth moves
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgdQACAJAFAOQABAJgHAMQgCAIgFADQgNAIgQgJQgQgKgGgOQgGgHABgJQAMAAANgBQALgBAIgBQAJgCAJgJg");
	this.shape.setTransform(0.1,-16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAZQgQgKgGgOQgGgHABgJQAMAAANgBIATgCQAJgCAJgJIAHAXQABAJgHAMQgCAIgFADQgGAEgHAAQgIAAgIgFg");
	this.shape_1.setTransform(0.1,-16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAKQAJgDAFgHQAHgHAEADQAMAFAAAOQAAAKgLAHQABAAAAAAQAGAAAGgGQALgHAFgJQADgNACgJQgLADgJgDQgIgDgKgFQgMgFgKgGQgFAHABAKQgCAMAGAMQABADACADQAEAHAFADQAGAGAIAA");
	this.shape_2.setTransform(0.6,-18.6,1,1,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgGANQgFgEgEgGIgDgFQAKgDAEgJQAGgHAEAEQAOAGgBANQAAAKgMAHQgHAAgGgGg");
	this.shape_3.setTransform(0.5,-17,1,1,-30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAgQALgHAAgKQAAgOgMgFQgEgDgHAHQgFAHgJADQgGgMACgMQgBgKAFgHQAKAGAMAFIASAIQAJAEALgEIgFAWQgFAJgLAHQgGAGgGAAIAAAAIgBAAg");
	this.shape_4.setTransform(0.6,-18.6,1,1,-30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AgGgBQACABACAAQAEAAAEABIABAAQABAAACAAQAKAAAFgIQAFAIACAJQAAACABACQABAIgCAGQgMgDgMgCQgLgCgJgBQgJgBgKAGQAAgEgBgFQAAgHAAgIQABgEADgFAAhAOQgLgIgPgFAAZgHQgEgFgEgFQgPgOgNAFQgGABgEAIQgFAFgCAEQALAFALACQgGABgFADQgHAFgIAI");
	this.shape_5.setTransform(0.2,-17.6,1,1,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgggBQABgFADgFQALAFALACQgGABgFADQgHAFgHAHIgBgNgAAHgCIADAAQALAAAEgIQAGAIABAJIABAEQgKgJgQgEg");
	this.shape_6.setTransform(0,-17.3,1,1,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHAXIgTgDQgKgBgJAGIgBgJQAIgIAHgFQAFgDAGgBIAEABIAIABIAAAAIAAAAIgIgBIgEgBQgMgCgKgFIAHgJQAEgIAFgBQAOgFAOAOIAIAKQgEAIgKAAIgEAAQAQAFAKAIQACAIgCAGQgMgDgNgCg");
	this.shape_7.setTransform(0.2,-17.6,1,1,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AgcgWQADgIAFgEQAIAJAKAIQAIAHAHAGQAIAEAMAAQgCADgCAFQgDAFgEAIQgEAEgFADQgHgKgHgIQAEACAHgBQAIAAALgDAANAcQgEACgGACQgHAEgFgBQgPgEgGgSQgCgHAAgGQAAgKADgJQABgCAAgBQAFAMALALQgBgBgCAAQgJgEgIAEAgBAKQgCgBgCgBQgDgEgEgCIAAgB");
	this.shape_8.setTransform(-0.2,-19.3,1,1,-30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAIQAFACAHgBQAIAAALgDIgHANQgDAEgFACQgHgJgJgIgAgMgCQgKgEgIAFQAAgLADgJIACgEQAEANALAMIgCgCg");
	this.shape_9.setTransform(-0.3,-19,1,1,-30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAjQgPgEgGgSIgCgNQAIgEAJAEIADABQgLgLgFgMQADgIAFgEQAIAJAKAIIAPANQAIAEAMAAIgEAIQgLADgIAAQgHABgEgCIgEgCIgHgGIAAgBIAAABIAHAGIAEACQAHAIAHAKIgKAEQgFADgEAAIgDAAg");
	this.shape_10.setTransform(-0.2,-19.3,1,1,-30);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("AgBAOQAEACAHgBQAIAAALgDAgcgTQADgHAFgEQAIAJAKAHQAIAIAHAFQAIAFAMgBQgCAEgCAFQgDAFgEAIQgEAEgFACQgHgJgHgIQgCgBgCgCQgDgDgEgDIAAAAQgBgBgCgBQgJgEgIAFQAAgKADgJQABgCAAgCQAFANALAL");
	this.shape_11.setTransform(-0.9,-18.7,1,1,-30);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAWIgEgDIgHgGIAAAAQgLgMgFgMQADgHAFgEQAIAIAKAIIAPAMQAIAGAMgBIgFAJQgKADgJAAIgEAAIgGgBg");
	this.shape_12.setTransform(-1.1,-19.5,1,1,-30);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAAAIQAFACAHgBQAIAAALgDIgHANQgDAEgFACQgHgJgJgIgAgMgCQgKgEgIAFQAAgLADgJIACgDQAEAMALAMIgCgCg");
	this.shape_13.setTransform(-0.8,-18.1,1,1,-30);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.1,1,1).p("AAIALQABgCABgDQAEgKgHgJQgCgCgDACQgLAIgBAKQgBADADADQAJAIAHgIg");
	this.shape_14.setTransform(0,-18.7,1,1,-30);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIALQgDgDABgDQABgKALgIQABAAABgBQAAAAABAAQABAAAAAAQABABAAAAQAHAJgEAKIgCAFQgEAEgEAAQgDAAgFgEg");
	this.shape_15.setTransform(0,-18.7,1,1,-30);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AAdAMQgDAFgEAIQgEAEgFACQgHgJgHgIQAEACAHgBQAIAAALgDQACgFACgEQgMABgIgFQgHgFgIgIQgKgHgIgJQgFAEgDAHQAFANALALIAAAAQAEADADADQACACACABAgMAFQgBgBgCgBQgJgEgIAFQAAgKADgJQABgCAAgC");
	this.shape_16.setTransform(-0.7,-18.8,1,1,-30);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.1,1,1).p("AANAAQALALAFAMQgDAIgFAEQgIgJgKgIQgIgHgHgGQgIgFgMAAQACgCACgFAAhAAQgIAFgJgFQgCAAgBAAIAAgBQgEgCgDgEQgCgBgCgBQgHgIgHgKQAEgCAGgCQAHgEAFABQAPAEAGASQACAHAAAFQAAALgDAJQgBACAAABAACgJQgEgCgHABQgIAAgLADQADgFAEgIQAEgEAFgD");
	this.shape_17.setTransform(-0.3,-16.7,1,1,-30);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AALABIACABQAKAFAIgFQAAALgDAJIgCAEQgEgNgLgMgAgXgSQADgEAFgDQAHAKAIAIQgEgCgHABQgIAAgLADIAHgNg");
	this.shape_18.setTransform(-0.3,-17,1,1,-30);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADASIgPgNQgIgFgMAAIAEgHQALgDAIAAQAHgBAEACQgHgIgHgKIAKgEQAHgEAFABQAPAEAGASIACAMQgIAFgJgFIgDAAIAAgBIgHgGIgEgCIAEACIAHAGIAAABQALALAFAMQgDAIgFAEQgIgJgKgIg");
	this.shape_19.setTransform(-0.3,-16.7,1,1,-30);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.1,1,1).p("AALABQABABABABQAKAEAIgFQAAALgDAJQgBACgBACQgEgNgLgMIgBAAQgDgCgEgDQgBgCgCgBQgEgCgHABQgIAAgLADQADgFAEgIQADgEAFgDQAHAKAIAI");
	this.shape_20.setTransform(-0.7,-18,1,1,-30);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AALABIACACQAKAEAIgFQAAALgDAJIgCADQgEgMgLgMgAgXgSQADgEAFgCQAHAJAIAIQgEgCgHABQgIAAgLADIAHgNg");
	this.shape_21.setTransform(-0.7,-18,1,1,-30);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAWIgEgDIgHgGIAAAAQgLgMgFgMQADgHAFgEQAIAIAKAIIAPAMQAIAGAMgBIgEAJQgLADgIAAIgFAAIgGgBg");
	this.shape_22.setTransform(-1.4,-19.1,1,1,-30);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAIQAFACAHgBQAIAAALgDIgHANQgDAEgFACQgHgJgJgIgAgMgBQgKgFgIAFQAAgLADgJIACgEQAEANALAMIgCgBg");
	this.shape_23.setTransform(-1.1,-17.7,1,1,-30);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.1,1,1).p("AALABQABABABAAQAKAFAIgFQAAALgDAJQgBACgBABQgEgMgLgMIgBgBQgDgBgEgEQgBgBgCgBQgEgCgHABQgIAAgLADQADgFAEgIQADgEAFgDQAHAKAIAI");
	this.shape_24.setTransform(-0.1,-17.7,1,1,-30);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AALABIACABQAKAFAIgFQAAALgDAJIgCAEQgEgNgLgMgAgXgSQADgEAFgCQAHAJAIAIQgEgCgHABQgIAAgLADIAHgNg");
	this.shape_25.setTransform(-0.1,-17.7,1,1,-30);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.1,1,1).p("AALABQABABABABQAKAEAIgFQAAALgDAJQgBACgBABQgEgMgLgMIgBgBQgDgBgEgEQgBgBgCgBQgEgCgHABQgIAAgLADQADgFAEgIQADgEAFgDQAHAKAIAI");
	this.shape_26.setTransform(-0.2,-17.1,1,1,-30);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.1,1,1).p("AgMgbQAEgCAGgCQAHgEAFABQAPAEAGASQACAHAAAFAAdAXQAAgBABgCQADgJAAgLQgIAFgJgFQgCAAgBAAIAAgBQgEgCgDgEQgCgBgCgBQgEgCgHABQgIAAgLADQADgFAEgIQAEgEAFgDQAHAKAHAIAgcgHQgCAFgCACQAMAAAIAFQAHAGAIAHQAKAIAIAJQAFgEADgIAANAAQALALAFAM");
	this.shape_27.setTransform(-0.4,-17.3,1,1,-30);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AALABIACABQAKAFAIgFQAAALgDAJIgCADQgEgMgLgMgAgXgSQADgEAFgDQAHAKAIAIQgEgCgHABQgIAAgLADIAHgNg");
	this.shape_28.setTransform(-0.3,-17.5,1,1,-30);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.1,1,1).p("AAWAaQgNAIgQgJQgQgKgGgOQgGgHABgJQAMAAANgBQALgBAIgBQAJgCAJgJQACAJAFAOQABAJgHAMQgCAIgFADg");
	this.shape_29.setTransform(-0.4,-17.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.1,1,1).p("AgBAOQAHAIAHAJQAFgCAEgEQAEgIADgFAgBAOQAEACAHgBQAIAAALgDQACgFACgEQgMABgIgFQgHgFgIgIQgKgHgIgJQgFAEgDAHQAFANALALIAAAAQAEADADADQACACACABgAgcgTQAAACgBACQgDAJAAAKQAIgFAJAEQACABABAB");
	this.shape_30.setTransform(-0.7,-18.8,1,1,-30);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.1,1,1).p("AANAAIAAgBQgEgCgDgEQgCgBgCgBAAdAXQgFgMgLgLQABAAACAAQAJAFAIgFAgMgbQAEgCAGgCQAHgEAFABQAPAEAGASQACAHAAAFQAAALgDAJQgBACAAABQgDAIgFAEQgIgJgKgIQgIgHgHgGQgIgFgMAAQACgCACgFAgMgbQAHAKAHAIQgEgCgHABQgIAAgLADQADgFAEgIQAEgEAFgDg");
	this.shape_31.setTransform(-0.3,-16.7,1,1,-30);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AADASIgPgNQgIgFgMAAIAEgHQALgDAIAAQAHgBAEACQgHgIgHgKIAKgEQAHgEAFABQAPAEAGASIACAMQgIAFgJgFIgDAAQALALAFAMQgDAIgFAEQgIgJgKgIgAAGgHIAHAGIAAABIAAgBIgHgGIgEgCIAEACg");
	this.shape_32.setTransform(-0.3,-16.7,1,1,-30);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.1,1,1).p("AgMgbQAEgCAGgCQAHgEAFABQAPAEAGASQACAHAAAFQgIAFgJgFQgCAAgBAAIAAgBQgEgCgDgEQgCgBgCgBQgHgIgHgKQgFADgEAEQgEAIgDAFQgCAFgCACQAMAAAIAFQAHAGAIAHQAKAIAIAJQAFgEADgIQAAgBABgCQADgJAAgLAANAAQALALAFAMAACgJQgEgCgHABQgIAAgLAD");
	this.shape_33.setTransform(-1,-17.6,1,1,-30);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.1,1,1).p("AgBAgQABAAAAAAQAGAAAGgGQALgHAFgJQADgNACgJQgLADgJgDQgIgDgKgFQgMgFgKgGQgFAHABAKQgCAMAGAMQAJgDAFgHQAHgHAEADQAMAFAAAOQAAAKgLAHgAgbAKQABADACADQAEAHAFADQAGAGAIAA");
	this.shape_34.setTransform(0.6,-18.6,1,1,-30);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJAjQgPgEgGgSIgCgNQAIgEAJAEIADABQgLgLgFgMQADgIAFgEQAIAJAKAIIAPANQAIAEAMAAIgEAIQgLADgIAAQgHABgEgCQAHAIAHAKIgKAEQgFADgEAAIgDAAgAgMACIAHAGIAEACIgEgCIgHgGIAAgBg");
	this.shape_35.setTransform(-0.2,-19.3,1,1,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:0.1,y:-16.9}},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13,p:{x:-0.8,y:-18.1}},{t:this.shape_12,p:{x:-1.1,y:-19.5}},{t:this.shape_11}]},3).to({state:[{t:this.shape_15,p:{x:0,y:-18.7}},{t:this.shape_14,p:{x:0,y:-18.7}}]},1).to({state:[{t:this.shape_13,p:{x:-0.6,y:-18.2}},{t:this.shape_12,p:{x:-1,y:-19.6}},{t:this.shape_16,p:{x:-0.7,y:-18.8}}]},2).to({state:[{t:this.shape_19,p:{x:-0.3,y:-16.7}},{t:this.shape_18,p:{x:-0.3,y:-17}},{t:this.shape_17,p:{x:-0.3,y:-16.7}}]},1).to({state:[{t:this.shape_21,p:{x:-0.7,y:-18}},{t:this.shape_20}]},2).to({state:[{t:this.shape_19,p:{x:-1,y:-17.6}},{t:this.shape_18,p:{x:-0.9,y:-17.9}},{t:this.shape_17,p:{x:-1,y:-17.6}}]},1).to({state:[{t:this.shape_15,p:{x:-0.5,y:-18.4}},{t:this.shape_14,p:{x:-0.5,y:-18.4}}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_16,p:{x:-1.2,y:-18.3}}]},2).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_21,p:{x:-0.2,y:-17.1}},{t:this.shape_26}]},2).to({state:[{t:this.shape_19,p:{x:-0.4,y:-17.3}},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_1,p:{x:-0.4,y:-17.7}},{t:this.shape_29}]},1).to({state:[{t:this.shape_13,p:{x:-0.6,y:-18.2}},{t:this.shape_12,p:{x:-1,y:-19.6}},{t:this.shape_30}]},1).to({state:[{t:this.shape_32,p:{x:-0.3,y:-16.7}},{t:this.shape_18,p:{x:-0.3,y:-17}},{t:this.shape_31,p:{x:-0.3,y:-16.7}}]},1).to({state:[{t:this.shape_21,p:{x:-0.7,y:-18}},{t:this.shape_20}]},2).to({state:[{t:this.shape_32,p:{x:-1,y:-17.6}},{t:this.shape_18,p:{x:-0.9,y:-17.9}},{t:this.shape_31,p:{x:-1,y:-17.6}}]},1).to({state:[{t:this.shape_15,p:{x:-0.5,y:-18.4}},{t:this.shape_14,p:{x:-0.5,y:-18.4}}]},2).to({state:[{t:this.shape_19,p:{x:-1,y:-17.6}},{t:this.shape_18,p:{x:-0.9,y:-17.9}},{t:this.shape_33}]},2).to({state:[{t:this.shape_21,p:{x:-0.2,y:-17.1}},{t:this.shape_26}]},2).to({state:[{t:this.shape_19,p:{x:-0.4,y:-17.3}},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_1,p:{x:-0.4,y:-17.7}},{t:this.shape_29}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_13,p:{x:-0.6,y:-18.2}},{t:this.shape_12,p:{x:-1,y:-19.6}},{t:this.shape_30}]},6).to({state:[{t:this.shape_1,p:{x:0.1,y:-16.9}},{t:this.shape}]},4).to({state:[{t:this.shape_32,p:{x:-0.3,y:-16.7}},{t:this.shape_18,p:{x:-0.3,y:-17}},{t:this.shape_31,p:{x:-0.3,y:-16.7}}]},1).to({state:[{t:this.shape_21,p:{x:-0.7,y:-18}},{t:this.shape_20}]},2).to({state:[{t:this.shape_32,p:{x:-1,y:-17.6}},{t:this.shape_18,p:{x:-0.9,y:-17.9}},{t:this.shape_31,p:{x:-1,y:-17.6}}]},1).to({state:[{t:this.shape_1,p:{x:0.1,y:-16.9}},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_34}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_35},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_13,p:{x:-0.8,y:-18.1}},{t:this.shape_12,p:{x:-1.1,y:-19.5}},{t:this.shape_11}]},2).to({state:[{t:this.shape_15,p:{x:0,y:-18.7}},{t:this.shape_14,p:{x:0,y:-18.7}}]},1).to({state:[{t:this.shape_13,p:{x:-0.6,y:-18.2}},{t:this.shape_12,p:{x:-1,y:-19.6}},{t:this.shape_16,p:{x:-0.7,y:-18.8}}]},2).to({state:[{t:this.shape_19,p:{x:-0.3,y:-16.7}},{t:this.shape_18,p:{x:-0.3,y:-17}},{t:this.shape_17,p:{x:-0.3,y:-16.7}}]},1).to({state:[{t:this.shape_21,p:{x:-0.7,y:-18}},{t:this.shape_20}]},2).to({state:[{t:this.shape_19,p:{x:-1,y:-17.6}},{t:this.shape_18,p:{x:-0.9,y:-17.9}},{t:this.shape_17,p:{x:-1,y:-17.6}}]},1).to({state:[{t:this.shape_15,p:{x:-0.5,y:-18.4}},{t:this.shape_14,p:{x:-0.5,y:-18.4}}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_16,p:{x:-1.2,y:-18.3}}]},2).to({state:[{t:this.shape_19,p:{x:-0.4,y:-17.3}},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_1,p:{x:-0.4,y:-17.7}},{t:this.shape_29}]},1).to({state:[{t:this.shape_13,p:{x:-0.6,y:-18.2}},{t:this.shape_12,p:{x:-1,y:-19.6}},{t:this.shape_30}]},1).to({state:[{t:this.shape_1,p:{x:-0.4,y:-17.7}},{t:this.shape_29}]},3).wait(14));

	// Layer 2
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.1,1,1).p("ADzjMQAIgCAIgEQAFgDAHgBQAGgGAJgEQAHgFAHgFQAIgEAGgGQAIgFAHgGQAIgFAFgGQgBgJAAgKQAAgJABgKQgDgMANADQAKABADAIQABACAAAGQABAHAKACQALgCAGACQAJAGAFAHQADAEgEADAFukoQAEgEAHgGQAJgFADgIQAFgIAKABQAEAAgBAGQAAAKgDAJQgCAGgCAEQAHgFAHgHQAIgCAFgHQAEgHAKgBQACAAAAACQACALgFAIQgBADgCADQAFgGAIgDQAHgCgCAMQgBAIgJAFQgIAGgFAFAiai4QgGgFgEgKQgEgLAKgGQAAgCgBgFQgFgIAEgKQAEgKAIAEQgEgKAGgMQADgDAEgBQAFgJAHABQgDgEAEgHQACgCAEAAQACgKAIgFQAJgGAJAGQABABACACQAFgOANgFQADgCADAGQAJgJASgDQACgBAEAEQAFAHAKgGQACgDAEABQAMgIAJAIQAHAGgBAIQAEgGAJAAQABgCAAgCQAJABACAIQABADgDACQANgGAMADQANAMACANQABgHALABQAMACADAJQADAGAAAIQABgGAFACQAGAGAEAIQADADAAAGQgCABACABQAEACACAEQADAGgCAHQgFANgJAHQACABABAEQAAAJgEAIQgEAIgKADQgCAIgJAEQgJADgKgBQgJAAgGgCQgBgBAAgBQgDgFgDgFQgBgCABABQADgJAHAAQgDgJAEgJQADgFAHgCQgEgBgHgDQgDgDADgGQAAgKAFgHQgEgCgEgDQgJgHgBgKQgMAHgRgFQgLgDgFgJQgDABgDACQgIAFgKgCQgFAIgLAAQgJgBgHgDQgEAJgIAGQgEACgGAAQAAAAgBAAQAAABAAAAQAFACABAHQABAJgEAHQgFAIgHADQgEgBACADQgHAVAHANQAIAWASAHQADACAGgBAApj6QgCgIgIACQgBAAgBABQgIAEABAHQADAEADACACAj9QAAAAAAABQAAAAAAABAA9inQAEAKAFAMQALALAWgDQAOgJAMgKQAPgFAQgHQALgPAQgIQADgFAGAAQAQgJATABQAGACAFgEQAAABABABQACAEAEADAgTjfQgEgMAIgEQAGgGAJACQAKAEgBAKAApj6QAAANgNgBQgBgCAAgEQAEgHAKABgAAxguQAUABARgGQATgEAQgJAG1kKQAEgHAFgEQACgCACgBQAMgFgCAMQgCAKgHAFQgGAHgLgDQgJACgIADQgJADgHACQgFABgDgCQgBABAAAAQgFADgHAHQgGAHgFAHQgGAIgEAIQgHAGgHAHQgFAIgGAHQgEAHgGAHQgHAHgHAFQgIAGgJACQgHACgDAGQgIABgFAAQABAJgEAGQgOALgMAMQgMANgMAMQgPAGgRAGQgOAJgSgCQgFAUgOAMQgLANgOAJQAGASAUAEQAQAJASABQAJAAgBALQAOACAQAJQARAIARAKQATABAOAMQATAGADAQQADAUgDAPQgSAMgKAMQgTALgOAMQgOANgPAMQgPAMgLANQgNAIgMANQgJALABARAE+h2QANgIAOgMQATgCAQgGQASgHALgPQAMgQAKgQAGukcQgDACgCACQgDACgDABAGukcQAAAAAAgBQAEgEADgEQgFAEgCAFgAHJi5QgEAQgNAMQgGAUgQALQgJAHgLABAHViBQgJAPgRAIQgNAJgSAFAEvAMQASgCARAIQARAIAPALQAIAGACAEADqAdQASgEARAJQAUABAQANQAUAHAHAIACxAuQgFgEgEABQgLACgHAFQgXANgTAWQgKALgKAMQgLAOgDAQQgBADgBAEQgBgCgBgHQACABACABABUAUQADAHABADABUAUQgLASgUADQgEAAgFABQgTACgUAAQgSAAgSACQgUADgSgDQgTgEgOgFQgQgHgLgLQgIgIgLgBQAAgKgHgIQgPgNgPgRQgHgKgIgRQgDgQABgVQgIACgLACQgJgDgKgBQgIgFgJgBQgIgFgJgEQgGgHgIgFQgGgIgFgIQgHgHgCgIQABgDgEgCQgFgIgIgFQgHgFgHgGQgGgHgHgGQgHgGgHgHQgHgHgIgGQgHgFgJgEQgJAAgHABQgJABgGAHQgFAGgLABQgKAEgHgGQgJgGAJgIQgHAAgBgJQACgJAKgCQAFADAGgBQAJgDAJgBQAGgBABgCABGCIQgTgEgVgBQgLgHgNADQgLgCgNAAQgWAAgVADQgNACgNAIQgRAGgKAEQgBgEAAgDQgJAFgKADQgOAKgSADQgKAKgOAJQAEAEAEAEQADAQAIANQAHAMANALQAQAJAPAKQAPAKACATQABATgHAMQgUALgVgBQgTgBgUAAQgTAAgUAAQgUAAgSABQgPABgNADQgUAEgRgIQgTgJAFgPQAGgXAWAFQARADASADQAUADATAAQANgFAOAAQASgGANgKQgGgMgSgHQgUgDgPgIQgUgDgPgLQgUgEgLgPQgJgFgHgHQgEgFgCgHQAAAAAAgBQgCgHACgKQAJgTALgMQAHgEAAgFQAPgOASgIQAJgMARgMQANgIAOgKQAeABAaAOQASAVASATQAIAJADAJQAAABABAAAEFFAQgDAQgVgCQgUgBgTgCQgJgBgGgBQgTgDgTgBQgPgEgNgHQgEgBgEgDQgEgBgGgBQgXAHgCgTQgBgTAMgOQAMgLASgKQAKgNAMgMQABgBACgBQgBgJgBgMQAGgSANgMQAOgMANgFQgSgHgUADQgSgBgVgDQgRAFgQgGABtADQgUABgFAQACbEHQAGALAUAIQASABAVgBQATABATABQAYgEgHAbQgDAIgLAFQABgCAAgBQAGgQgQgEQgVgGgFAQAD+FCQAEgBADgBAC4CTQATABAGAJAm2kZQgIgGgFgIQgDgFAFAAQAJgDAKADQAIABAGAAQACABABAAQAHgEANABQgDgCgBgDQAAgDAAgEQAAgIAIgFQAGADAGAFQAQAHgBAZQAFAEAIAGQALAIASAIQARABAMAJQAOALAFARQAGgDAMAAQAUAAASAGQAQABAJAOQAOAKABAPQAIgDAOgCQACAAACgBQATgBAPAFQAWgEAKAJAnIkBQgDgCgCgEQgGgKAKgGQAIgDALABQAJACAIABQAIAAAFgDAnMjtQACAAACgBQACAAACABQAKgFAJgBAmJktQAEAAAEABAmLkbQgHAFgCAJQgCAKACAJAkAiiQAEAHAHAFQAFAJAGAFQAIAHAHgDAlchxQAAAPAGAGAkFg9QgHAWAOAMAj1hSQABAWAEARQAEANAHAHAgdj6QABgHgLgBQgEAAgFADQgEAHAFAHQABAFAGAAAgdj6QgJABgDAJQAAACABACQADABAFgCQAHgBgEgMgAjKhmIAAAAQABAAAAAAQgBgCAAACgAiHhHQAHALARAHQAPAPATAAQASAAAKgIAiWAYQAFAIgCAFAiWAYQACgHAAgHAjaBCQADgBADgDQAQgKAQgOQAQgFAOgJAi+C1QgEgFgFgFAleBlQAGgQANgQQAMgQATgIQANgKASABAjbBDQAAAAABgBAjbBDQgBAAgBAAQABAAACgBAloA4QADgNAMgIQARgLAHgG");
	this.shape_36.setTransform(0.3,0.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgqAGQgFgGAEgHQAFgDAEAAQALABgBAHQgJABgDAIQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAQgGAAgBgFgAAbADQgCgGAIgEIADgCQAIgCACAJQgKgBgEAGIABAGIgGgGg");
	this.shape_37.setTransform(-0.2,-24);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0C0C0C").s().p("AheDrIgBgBQgDgJgHgJIglgoQgagOgegBIABgBQAEgBACgDQAQgKARgOQAQgFAOgJQADAGAAAEIAAADIAAgDQAAgEgDgGQACgHAAgHQAKABAJAIQAKALAQAHQAPAFATAEQARADAUgDQASgCATAAQATAAAUgCIAIgBQAUgDALgSIAFAKIgFgKQAFgQAVgBQAFASAVAEQAQAJARABQAJAAAAALQgGgEgEABQgKACgIAFQgWANgTAWIgUAXQgMAOgDAQIgDgCQgUgEgVgBQgLgHgMADQgNgCgMAAQgVAAgVADQgOACgNAIIgbAKIgBgHgABihHQgJAAgHgCIgBgCIgFgKQgBgBAAAAQAAAAAAAAQAAgBAAABQAAAAABAAQADgJAHAAQgEgJAEgJQAEgFAHgCIgMgEQgCgDADgGQgBgKAFgHIgIgFQgJgHAAgKQgMAHgRgFQgMgDgFgJIgHADQgIAFgJgCQgEAIgLAAQgKgBgGgDQgEAJgJAGQgEACgFAAIgCAAIABABQAFACABAHQABAJgEAHQgGAIgGADQgFgBADADQgIAVAIANQgLgJgVAEQgQgFgTABIgEABQgGgFgEgKQgDgLAJgGIgBgHQgEgIAEgKQAEgKAHAEQgEgKAGgMIAHgEQAFgJAHABQgCgEAEgHQACgCAEAAQABgKAIgFQAJgGAJAGIADADQAGgOAMgFQAEgCADAGQAJgJARgDQADgBADAEQAGAHAJgGQACgDAEABQANgIAJAIQAGAGAAAIQADgGAJAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAJABADAIQABADgEACQANgGANADQANAMABANQACgHAKABQANACADAJQACAGABAIQAAgGAGACQAFAGAEAIQADADABAGQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABQAEACACAEQADAGgDAHQgEANgKAHQADABAAAEQABAJgEAIQgEAIgKADQgCAIgJAEQgHADgIAAIgEgBgAgSiOQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBABAAQADgJAJgBQADAMgHABIgGABIgBAAgAAxiQIAAgGQADgHALABQgBAMgKAAIgDAAg");
	this.shape_38.setTransform(-1.8,-8.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BE9670").s().p("AlHFGQgSgJAEgPQAGgXAWAFIAkAGQAUADATAAQAMgFAPAAQASgGANgKQgHgMgRgHQgUgDgQgIQgUgDgPgLQgUgEgLgPQgJgFgGgHQgEgGgCgGIAAgBQgCgHABgKQAKgTALgMQAHgEgBgFQAQgOASgIQAIgMARgMQAOgIAOgKQAeABAZAOIAlAoQAIAJADAJIAAABQgJAFgKADQgNAKgSADQgLAKgNAJIgJgKIAJAKIAHAIQAEAQAHANQAHAMANALQARAJAOAKQAPAKACATQACATgIAMQgUALgUgBIgngBIgnAAQgUAAgSABQgPABgOADIgMABQgNAAgMgFgADyFKQgUgBgTgCIgQgCQgTgDgSgBQgPgEgOgHIgHgEIgKgCQgYAHgBgTQgBgTAMgOQAMgLARgKQALgOAMgLIACgCIgBgVQAFgSAOgMQANgMANgFQgSgHgUADIgmgEQgRAFgRgHQAEgPALgOIAUgXQATgWAWgNQAIgFAKgCQAEgBAGAEQANACAQAJQARAIASAKQATABAOAMQATAGADAQQADAUgEAPQgRAMgLAMQgSALgOAMIgdAZQgQAMgKANQgOAIgLANQgIAKAAANIAAAFIAAgFQAAgNAIgKQAGALATAIQASABAVgBIAnACQAXgEgGAbQgDAIgLAEIAAgCIACgIQAAgJgLgDIgBgBIgBAAIAAAAIgIgBIAAAAIAAAAQgMAAgEAMQAEgMAMAAIAAAAIAAAAIAIABIAAAAIABAAIABABQALADAAAJIgCAIIAAACIgHADIAHgDQgDAPgSAAIgDAAgADVCZQgFgJgUgBQAUABAFAJgAEKE7IAAAAgAhAAqQgTgEgPgFQgQgHgKgLQgJgIgKgBQAAgKgIgIQgOgNgPgRQgHgKgJgRQgCgQABgVIAAAAIABgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgUAEQgJgDgJgBQgIgFgKgBIgQgJQgHgHgHgFQgHgIgFgIQgHgHgBgIQABgDgEgCQgFgIgIgFIgOgLIgOgNIgOgNQgGgHgIgGQgIgFgIgEIgQABQgKABgGAHQgFAGgKABQgKAEgIgGQgIgGAJgJQgHAAgCgIQADgJAKgCIAAAAIABAAQACACAEAAIAAAAIAAAAIABAAIABAAIABAAIATgEQAFgBACgCQgCACgFABIgTAEIgBAAIgBAAIgBAAIAAAAIAAAAQgEAAgCgCIgBAAIAAAAQgDgCgCgEQgGgKAKgGQAHgDALABQgIgGgEgIQgDgFAFAAQAJgDAJADIAPABIADAAQAGgDAOABIAIABIgIgBQgDgCgBgDQgBgDABgEQgBgIAIgFQAGADAGAFQARAHgCAZIANAKQAMAIARAIQARABAMAJQAPALAFARQAFgDANAAQAUAAARAGQARABAIAOQAOAKACAPQAHgDAOgCIAEgBQATgBAQAFQAVgEALAJQAIAWARAHIAGABIAAAAIAAAAIABAAIACAAIgCAAIgBAAIAAAAIAAAAIgGgBQgRgHgIgWQgIgNAIgVQgDgDAFABQAGgDAGgIQAEgHgBgJQgBgHgFgCIABgBQAFAAAEgCQAJgGAEgJQAGADAKABQALAAAFgIQAJACAHgFIAHgDQAFAJAMADQARAFAMgHQAAAKAJAHIAIAFQgFAHABAKQgDAGACADIAMAEQgHACgEAFQgEAJAEAJQgHAAgDAJQAAgBgBAAQAAAAAAAAQAAABAAAAQABAAAAABIAFAKIABACIAJAWQALALAWgDQAPgJALgKQAPgFARgHQAKgPARgIQADgFAFAAQAQgJAUABQAGACAEgEIABACQAJgCAHgEQAGgDAHgBQAGgGAIgEIAPgKQAIgEAFgGQAJgFAGgGQAIgFAFgGIAAgTQgBgJABgKQgCgMANADQAKABADAIQABACgBAGQABAHAKACIAFgBIAGAAIAAAAIABAAIAEAAIACABQAIAGAFAHIACADQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIgCgDQgFgHgIgGIgCgBIgEAAIgBAAIAAAAIgGAAIgFABQgKgCgBgHIALgKQAJgFAEgIQAEgIAKABQAFAAgCAGQAAAKgDAJIgEAKIAPgMQAHgCAFgHQAFgHAJgBQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABALgEAIIgEAGQAFgGAJgDQAHgCgCAMQgCAIgJAFIgNALIANgLIABABQgFAEgDAIQADgIAFgEIAEgCQAMgFgCAMQgBAKgHAFQgHAHgKgDIgSAFIgQAFQgEABgEgCIAAABQgGADgHAHIgLAOIgKAQIgNANQgFAIgGAHQgFAHgGAHQgGAHgHAFQgIAGgKACQgGACgEAGIgMABQAAAJgEAGQgOALgLAMIgYAZQgPAGgRAGQgPAJgSgCQgFAUgOAMQgKANgOAKQgVAAgFAQQgLASgUADIgIABQgUACgTAAQgSAAgTACIgSACQgKAAgJgCgAhIgqQASAAAJgIQgJAIgSAAQgTAAgPgPQgRgHgHgLQAHALARAHQAPAPATAAIAAAAgAA9gyQAQAAANgFQAUgEAPgJQgPAJgUAEQgNAFgQAAIAAAAIAAAAIgGAAIgCAAIACAAIAGAAIAAAAIAAAAgAjaiHIADgBIABAAIgBAAIgDABIAAAAIgBAAQgFgBgFgEIAAAAQgHgFgFgJQgHgFgEgHQAEAHAHAFQAFAJAHAFIAAAAQAFAEAFABIABAAIAAAAgAD+jJQgEgDgDgEQADAEAEADgAgPjjIgBgHQAAgGAFgDQAHgGAIACQAJADABAJIgBACIABgCQgBgJgJgDQgIgCgHAGQgFADAAAGIABAHgAgrkDQgFAHAFAHQACAFAGAAIAHgBQAHgBgDgMQAAgHgKgBIgBAAQgEAAgEADgAm/jxQAJgFAJgBQgJABgJAFIgEgBIgEAAIAEAAIAEABgAAkkFIgDACQgIAEACAHIAFAGQANABABgNQgCgHgGAAIgCAAgAmQj+IgBgJIABgKQADgJAHgFQgHAFgDAJIgBAKIABAJgAGtkcIgFADIAFgDIAFgEIgFAEgAmgkaQAIAAAFgDQgFADgIAAQgJgBgJgCQAJACAJABIAAAAgAGykgIABgBIAGgIQgEAEgDAFIAAAAg");
	this.shape_39.setTransform(-0.1,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.1,1,1).p("ADzjMQAIgCAIgEQAFgDAHgBQAGgGAJgEQAHgFAHgFQAIgEAGgGQAIgFAHgGQAIgFAFgGQgBgJAAgKQAAgJABgKQgDgMANADQAKABADAIQABACAAAGQABAHAKACQALgCAGACQAJAGAFAHQADAEgEADAFukoQAEgEAHgGQAJgFADgIQAFgIAKABQAEAAgBAGQAAAKgDAJQgCAGgCAEQAHgFAHgHQAIgCAFgHQAEgHAKgBQACAAAAACQACALgFAIQgBADgCADQAFgGAIgDQAHgCgCAMQgBAIgJAFQgIAGgFAFAiai4QgGgFgEgKQgEgLAKgGQAAgCgBgFQgFgIAEgKQAEgKAIAEQgEgKAGgMQADgDAEgBQAFgJAHABQgDgEAEgHQACgCAEAAQACgKAIgFQAJgGAJAGQABABACACQAFgOANgFQADgCADAGQAJgJASgDQACgBAEAEQAFAHAKgGQACgDAEABQAMgIAJAIQAHAGgBAIQAEgGAJAAQABgCAAgCQAJABACAIQABADgDACQANgGAMADQANAMACANQABgHALABQAMACADAJQADAGAAAIQABgGAFACQAGAGAEAIQADADAAAGQgCABACABQAEACACAEQADAGgCAHQgFANgJAHQACABABAEQAAAJgEAIQgEAIgKADQgCAIgJAEQgJADgKgBQgJAAgGgCQgBgBAAgBQgDgFgDgFQgBgCABABQADgJAHAAQgDgJAEgJQADgFAHgCQgEgBgHgDQgDgDADgGQAAgKAFgHQgEgCgEgDQgJgHgBgKQgMAHgRgFQgLgDgFgJQgDABgDACQgIAFgKgCQgFAIgLAAQgJgBgHgDQgEAJgIAGQgEACgGAAQAAAAgBAAQAAABAAAAQAFACABAHQABAJgEAHQgFAIgHADQgEgBACADQgHAVAHANQAIAWASAHQADACAGgBAApj6QgCgIgIACQgBAAgBABQgIAEABAHQADAEADACQgBgCAAgEQAEgHAKABQAAANgNgBACAj9QAAAAAAABQAAAAAAABAA9inQAEAKAFAMQALALAWgDQAOgJAMgKQAPgFAQgHQALgPAQgIQADgFAGAAQAQgJATABQAGACAFgEQAAABABABQACAEAEADAgTjfQgEgMAIgEQAGgGAJACQAKAEgBAKAAxguQAUABARgGQATgEAQgJAG1kKQAEgHAFgEQACgCACgBQAMgFgCAMQgCAKgHAFQgGAHgLgDQgJACgIADQgJADgHACQgFABgDgCQgBABAAAAQgFADgHAHQgGAHgFAHQgGAIgEAIQgHAGgHAHQgFAIgGAHQgEAHgGAHQgHAHgHAFQgIAGgJACQgHACgDAGQgIABgFAAQABAJgEAGQgOALgMAMQgMANgMAMQgPAGgRAGQgOAJgSgCQgFAUgOAMQgLANgOAJQAGASAUAEQAQAJASABQAJAAgBALQAOACAQAJQARAIARAKQATABAOAMQATAGADAQQADAUgDAPQgSAMgKAMQgTALgOAMQgOANgPAMQgPAMgLANQgNAIgMANQgJALABARAE+h2QANgIAOgMQATgCAQgGQASgHALgPQAMgQAKgQAGukcQgDACgCACQgDACgDABAGukcQAAAAAAgBQAEgEADgEQgFAEgCAFgAHJi5QgEAQgNAMQgGAUgQALQgJAHgLABAHViBQgJAPgRAIQgNAJgSAFAEvAMQASgCARAIQARAIAPALQAIAGACAEADqAdQASgEARAJQAUABAQANQAUAHAHAIACxAuQgFgEgEABQgLACgHAFQgXANgTAWQgKALgKAMQgLAOgDAQQgBADgBAEQgBgCgBgHQACABACABABUAUQADAHABADABUAUQgLASgUADQgEAAgFABQgTACgUAAQgSAAgSACQgUADgSgDQgTgEgOgFQgQgHgLgLQgIgIgLgBQAAgKgHgIQgPgNgPgRQgHgKgIgRQgDgQABgVQgIACgLACQgJgDgKgBQgIgFgJgBQgIgFgJgEQgGgHgIgFQgGgIgFgIQgHgHgCgIQABgDgEgCQgFgIgIgFQgHgFgHgGQgGgHgHgGQgHgGgHgHQgHgHgIgGQgHgFgJgEQgJAAgHABQgJABgGAHQgFAGgLABQgKAEgHgGQgJgGAJgIQgHAAgBgJQACgJAKgCQAFADAGgBQAJgDAJgBQAGgBABgCABGCIQgTgEgVgBQgLgHgNADQgLgCgNAAQgWAAgVADQgNACgNAIQgRAGgKAEQgBgEAAgDQgJAFgKADQgOAKgSADQgKAKgOAJQAEAEAEAEQADAQAIANQAHAMANALQAQAJAPAKQAPAKACATQABATgHAMQgUALgVgBQgTgBgUAAQgTAAgUAAQgUAAgSABQgPABgNADQgUAEgRgIQgTgJAFgPQAGgXAWAFQARADASADQAUADATAAQANgFAOAAQASgGANgKQgGgMgSgHQgUgDgPgIQgUgDgPgLQgUgEgLgPQgJgFgHgHQgEgFgCgHQAAAAAAgBQgCgHACgKQAJgTALgMQAHgEAAgFQAPgOASgIQAJgMARgMQANgIAOgKQAeABAaAOQASAVASATQAIAJADAJQAAABABAAAEFFAQgDAQgVgCQgUgBgTgCQgJgBgGgBQgTgDgTgBQgPgEgNgHQgEgBgEgDQgEgBgGgBQgXAHgCgTQgBgTAMgOQAMgLASgKQAKgNAMgMQABgBACgBQgBgJgBgMQAGgSANgMQAOgMANgFQgSgHgUADQgSgBgVgDQgRAFgQgGABtADQgUABgFAQACbEHQAGALAUAIQASABAVgBQATABATABQAYgEgHAbQgDAIgLAFQABgCAAgBQAGgQgQgEQgVgGgFAQAD+FCQAEgBADgBAC4CTQATABAGAJAm2kZQgIgGgFgIQgDgFAFAAQAJgDAKADQAIABAGAAQACABABAAQAHgEANABQgDgCgBgDQAAgDAAgEQAAgIAIgFQAGADAGAFQAQAHgBAZQAFAEAIAGQALAIASAIQARABAMAJQAOALAFARQAGgDAMAAQAUAAASAGQAQABAJAOQAOAKABAPQAIgDAOgCQACAAACgBQATgBAPAFQAWgEAKAJAnIkBQgDgCgCgEQgGgKAKgGQAIgDALABQAJACAIABQAIAAAFgDAnMjtQACAAACgBQACAAACABQAKgFAJgBAmJktQAEAAAEABAmLkbQgHAFgCAJQgCAKACAJAkAiiQAEAHAHAFQAFAJAGAFQAIAHAHgDAlchxQAAAPAGAGAkFg9QgHAWAOAMAj1hSQABAWAEARQAEANAHAHAgdj6QABgHgLgBQgEAAgFADQgEAHAFAHQABAFAGAAAgdj6QgJABgDAJQAAACABACQADABAFgCQAHgBgEgMgAjKhmIAAAAQABAAAAAAQgBgCAAACgAiHhHQAHALARAHQAPAPATAAQASAAAKgIAiWAYQAFAIgCAFAiWAYQACgHAAgHAjaBCQADgBADgDQAQgKAQgOQAQgFAOgJAi+C1QgEgFgFgFAjbBDQAAAAABgBAleBlQAGgQANgQQAMgQATgIQANgKASABAjbBDQgBAAgBAAQABAAACgBAloA4QADgNAMgIQARgLAHgG");
	this.shape_40.setTransform(0.3,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},86).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_40}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-33.7,95.9,69.2);


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


(lib.GrassScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIMl1IAAgWIAAgIIwXAAIAAMnIBKAAICeAAIAAAAIBSAAIBRAAIAHAAIARAAIB1AAIAWAAIAsAAQAPAAAOAAIAqAAQALAAAIAAIAJAAIA/AAIDmAAIA1AAIAAgGIAAgIIAAlsIAAmLg");
	this.shape.setTransform(-0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("ADpCSIgRgCIgQgBIgMAAIgLgBIA+AAIg+AAIgKAAQgIgCgKACIAAAAIgqAAQAGgDgYgCIgGADIgFACIgsAAIgGgCQgEgCgMADIgBABIAAAAIABAAIh1AAIgNgBIhcABIhSAAQANgDgUgGQgCgDAAgDIgSAAIAAAAIAAgCIAAgCIABgCIACgDIAAgCIgCgCIgBgKIgBgCIgLgUIAAgBIAAgBIAAgBIgBgBIAAgDIgBgTQgGgGgDgIIgNgDIAAgCIAAgCIADgCIABgCIAAgEIAAgTIgKgJIgSgCIAAgDQABgHgBgGIgCgCIAAAAIACgBIAAgBIgRgFQgGgBgEgEIAAgCIgCgEIgPAAIgHAGIAAADIAAAIIgHAAQgCgFAAgFIAAAAIAAgCQAAgEgBgEIgLABIgKABIgBAAIAAAAIgCAAIgBgBQgLgCgGgNIgDAAIgXgCIAAgBIgCgCIgCgBIgCABIAAACIgHAAIAAg4IAAgDIABgTIAFAAIACACIARACIABAAQAHAAAHgBIAGAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIABgBIAhAAIACAAIAKgCIACgBIAEAAQAEAAAEgDIAAAAIABAAIAVAAIAEABIALABIAKABQAFACAEAAIALABIAOACQANACAPABIAnAEIAHABQAKACAIAAQADACAFAAIAEAAQAEAEAHAAIAUABIAPABIAYACIAbACIAAAAIAGAAIAAAAIAHAAIABAAIABABIAPACIAAAAIADAAIABAAIABAAIAeAEIAEAAIALABIAAAAIABAAIAKAAIACAAIAHAAIABAAIBQgCIABAAIAAABIAJgBIAIgBIABAAIAegFIAVgCIABABIAEAAIAAAAIABgCIAAAAQAhgDAiAEQAJAJANgDQAJAPAHAPQAOADANAGIAMAHQAhAVAnAAQAyABAnAZQAaAEAZgBIAAABQALACALgEIADAAIAAgBIAGgCIAAgBIABAAQgBANABANIABAAIAAAaIAAADIAAACIgBAAIAABBIABAAIADgKQACAFACAcIAAAIQgCAFgJgDIAAgBQgUAEgWABIjnAAIADABIACABQAHACgHAAIgLAAgAgHCGIAAAAIgBAAgAIDBtIAAgBIAAgBIAAACgAjuBeIAAgBIgBAAIABABgAh0gyIAAACIAAgCgAiBCOIAHAAIgSACIgWACIAhgEgAAiCOIAsAAQgJAEgNAAQgMAAgKgEgAh6COgAiBCOIAJgBIgCABgAmriPIAAAAIAAAAIgFABIgHABIgHAAIATgCgAmliQIAGgBIAAAAIgDAAIgDABg");
	this.shape_1.setTransform(-0.1,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("Am+C1ICeAAQgMACgnAAQgoAAhDgCgAkgC1IieAAIhJAAIACgQIAAi5IAHAAQgCAEADAEIAdAEIABAAIAAACIACACIAJAIIAXAAIADAAQAAAFABADIAAADQABAEACAEIATgBIAAgEIAAgCIAAgIIACgCQAJgEgBAIQACADAFADQAJAEAKgCQACAMAAAMIAWADIADACIABACIABAEIAAAOIgCACIgBACIAAAFIAAAGIACACIACACIALAEIABACIAFAGIAAAEIABAPIgBABQAAABAAAAQAAABAAABQAAAAAAAAQABABAAAAIAAABIABABIABACQACACADABIACAEIAFAIIABACIACAEIAAAKQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABABIAAABIAAACIgBABIgBAAIAAACIABABIAAAAIADAAIABgBIAAAAIAVAFQAUAGgNADgAn4CmIAAAAIALgBIgHAAIgEABgAkgC1gAk7ClIAAAAIAAAAgAG/glIAAgEQgGgFgEgHIgXgBQgGgEgEgGQgJgEgJADQgFADgBAFIgGACIgBgCIgEgEQgSgHgMANIgSAAIAAgDQABgJgCgIIgDgCIgMgBIgBgBIgBgBQgTADgNgIIAAgCQABgJgCgJIgEgEIAAgCIAAgCIAAgIIAIAIIACABQgGgHgEgHIAAgOIgCgCIgBgCIAAgEIgCgDIgBgBIAAgBIABAAQAOgBAHAHIABABQAPAQgGgaQgBgEACgDQADgBADgDIABgBIAEABIABAAQAIACACAJIACAAQAEACAFgJIABgCQAHgHAIgGIABgCQALgFAFAIIABACQgEAPALgCIAAgBIAAgCQAHgGgBgCIALABIABATIABAAIAAARIAAACIAAACQACAHgEABQgCAKAEADIADABIAAgCIANACIABACQAMASgIgUIgCAAIAAgCIAAgDIAAgCIAAgRIACAAQADgOgFgIIgCAAIAAgCIAAgKIATAAQAEAOAFgQIABgCQAFgBABgHIABAAQAMAAgBAMIABAAQAHARAIgOIACAAQAHgJAPgBIACAAIACAAIABACIAMAKIANAAIAAADIAAACIAAAkIAAACIAAAwIgFgFIgOABIgRAQIgBACQAAAJgDAIQgHAAAAAGIAAABIgaABIAAgEg");
	this.shape_2.setTransform(-0.5,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336600").s().p("ACbCAIg0gFQgEgGgHgDQgngOgqgEQgMgBgMgEQgqgOgogTIgBgEIAAgCIgCgCIgMgPIACAAIACgEQADgHgBgHIAAgBIACgCQARgDALAJQANARAagEIABABIABABIANACIAAADQgBAKACAJIAZAAQADgEAFgCIASACIABACIACACIAJABIAGgEQACgFAEgDIAEgBIAQAMIAVACQAEADADAFIABACQgBAFACAFIAjgBIACgCQALgMACgRIANgMIAJAAIAAABIAEAFIAAACQgBADACADIACAAIAAAZIAAACIAAAHIAAADIgCAAQAAAPABAQIABAAIAAAFIAAACIgCAAIAAACIAAAAIgHgEQgKABgKADgAiHAXQgZgCgYACQAEgEACgEIAAgCIAAgEIABgCIACgCIAAgCIAAgCIABgBIADgFQAGADAHACIgEABQAGACAGgDQAIABAIgBIAAgCIAAgFIABAAIADAAQABAGALgBIACgBQAIgDAAgKIAKAAIAAgCIACgEIAAgCIAAgNIAOgBIAEAJQADAMABAMQgFAFABAJQgLgEgPACIgCABIAAABQgDACgCAEIAAACQABAGgCAEIgCACIgFAAQgJAAgHgGgAiAgKIAAgCIAFgDIAMgBQgDAFgEAEIAAACIgDAAIgBAAQgFAAgBgFgAg1gsQgHgHgOAAQALgEANAAIABgCIADgEIAAgCIAAgKIACgCIAAgCIABgCIAAgEIAdgDQABgEgBgEQgBgIAEgHQAIgDAHgCIABgCIAAgEIAAAAIADACIACAAQAIgBAGgEIABgCIACAAQANgFAFAIIAGgBIAAABIAAACIAAAVIAAADIAAAaIAAADIAAABIAAABIgCAAIgLAAQgBgCgIAEIABgCQABgGgEgBIgBgCQgHgIgLAFIAAACIgCABQgJAEgHAHIAAADIgDAAIgCACIAAADIgCgBIgCgCQgEgFgHgCIgCAAQgHABgFAEIAAACIgBABQgDAEgDACIAAAFIAAADIgCgBgACrg3IgMgMIgCAAQgOgGgNAKIAAADIgBAAQgIAKgDgPIAAgCQgDgJgLgBIAAACIgCABIgIAEIAAADIgBAAQgCAEgEADIgTAAIAAgJIAAgPQAEAAgCgFIAAgCIAAgDIAAgGIAAgIQADgDAAgEIAAAAIAHAAQAAAFADAAQADAAAFgEIABgBQADgDAGAAIADAAQALgDACAIIABAAQAJAhAegZIACgBQAFAAACADIAAACQAIAJABgBIAKAAIAAAGIAAADIAAAdIAAAAg");
	this.shape_3.setTransform(33,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996633").s().p("AgQCdQAEgNgCgTIAAgCIAAgCIAAgHIAAgTIAAgDIAAgFIAAgCIAAgKIAAgcIAAgDIAAgDIAAgBIAAgPIAAgCIAAgDQAFgCgCgHIAAgDQADgDAAgFIAAAAIAAgCIAAgKIAAgMIAAAAIAAgBQAAgMgCgKIgEgJIAAACIAAADIgCAAIgBAAQgIgHgKgCIAAgBIAAgBIACgBIgDgFQgIgJgMgFIgBgCQgKgHgGgLIgBgBIgIgKIABgBQAPAHAMAOIAVAVIAAAAIACACIALAIIADAHIADgBIABgBIAAAAIAAgBIAGACIADADQgCACgBADIABABIACAAIACgBIACgCIACgFIADgCQACgBABgDIABgCIAIgKIAFgFIAAgDIAAgBIABgBQAMgGALgMIACgBIAHgEIARgOIACAAIABgCIACgEIAAgBIACgDIAAgCIACAAIAAAFIAAACIABAEIgEABIgGAGIgFACIgDAEIgDABIgEAFQgIAMgLALIAAABIgBADIgKABIAAABIgBADIgEADIgOANIAAABIgGAGQgCAFABAEQgBAHABAGIgCABIAAAAIABATIAAAAIAAAQIAAACIAAAEIAAADIgBAAIAAARIAAACIAAABIAAAHIAAACIAAAOIAAABIAAACIgDAAIAAAJIAAACIAAAMIAAADIgCAAIAAATIAAADQAAAJABAJIABABQgBAPADALgAAEgRIgCAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABAAIABAAIgBgBIAAgCIAAgBIABABIACAAIAAAAIABgBIAAABIACABIACAAIABABIAAgBIABgBIACAAIAEgBIAAAAIABAAIAIgDIABgCIAVgGIABgBQAGABAEgDIACAAQAHgCAJABIAEAAIAAADIgCgCIgWAGIgKAFIgbAHIgBABIgGABIgBAAIgBABIAAAAIgDAAIgEgBIAAABIgBABIgBAAgAgRhCQgIgNgBgQIABgEIAAgDIAAgDIAAgOIAAgBIAAgCIADACIADAAIABAAIAAgBIgFgHIAFgPIAAgCIAHgNIAJAEQgEALgFALIAAACIAAACIAAACQACAGgFAAIAAACIgCAAIAAAQIAAADIgCAAIAAAHIAAACIAEAXIAAAAIAAADIgDgCg");
	this.shape_4.setTransform(40,-4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF00").s().p("AAvB0IgDgCIgBgCQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgCgBIgGgBIgDgEIgBgBIAAgBIgBgIIATgDQAIgEALgBQAIgHALgBIABAAIALgFIAAgBIAAgDQABgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgIgHgXAFIAAACIgBABQgCADgEgBIgCAAQgIADgJACIAAACIgDAAIgPAHIgCAAIAAAAIgBAAIgCAAIAAgEIAAgKIABgBIABgCIAAgBIAAgBIACgBIABgBIAAgBIABgCIAAgCQAJgJAKgHIAAgBIABgBQAGgBAFgDQAAgDADgCQAHgIAGgJIAEgCIAAgBIACgEQAKgIALgGQAEADAIgEIADAAIABgBQALgHAAgBQgBgCgOAGIAAACIgDAAIgFABIAAgCIgBgBIgDgBIAAABIAAgEIACgCIABgBIABgBQAEgPgNALIgCAAIgKAFIAAAAIgCAAQgJAAABgKIADgBIAAgBIAAgDQAGgHAIgGIAAgBIAAgDQgCgIgFAIIAAADIgBAAQgDAHgGAEIgCABIAAACIAAADQgDAPANgBIACAAIABAAIAAAAIADAAIABACIAAAAIgCABQgMAKgPAIIAAACIgBABIgSAOIAAAAIAAgBIgFAAIAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABIABACIgBABIgBACIgFAEIAAAAIABAAIABABIgLAQIgCABIgDACIAAABIAAACIgBABIgCABIgDgDQABgEgEgCIgDgCIAAgDQABACgBgNIAAgCIAAgCIAAgPIAAgCIAAgDQAEAAgCgHIAAgBIAAgDIAAgCQAEAAgBgFIAAgCIAAgBQAHgTAEgUIABgDIACgMIgCAAIgDAPIgDAJIgJgFIABgDQAAgFgCgFQgCgFgFAUIAAADIAAACIgBACIgGATQgEgCgCgDQgGgBgCgGIgCgBIAAAAIgBgBIgFgKIgCgBIgBABQAAAFACAEQACAEAFADQAHAIAIAFIAAADIAAACIAAADIgCAAQgCARAEADIAAASIABABIAAABIgCACIgMgMQgSgTgUgMIgBgBQgEgCgCgDIgDgBIAAACQACAFAGAEIgBABIgKgJIgBgCQgEgHgKgBIAHAPIAAACQAKAhAiALIACABIABABIABABQAGAEAGADIADAAIAOAMIADAAQAKAKgDAaIgBADIAAAJIgDgBIAAAAIgCgCIgFgBIAAAAIgCgCIgBAAIgBABIAAABIgBADIAAABQgDAFgGABIgDAAIgIgDIgBgBIgBgBIAAgBQANgPgQAJIAAAAIgCABIgCABIAAABIgBABIAAACIgCABIgCACIgIAAIgBgBIAAgDQAAgGgFgDIAAgBIgBgDIgBgPIAAgCIgCABIgBABIAAACQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgCABIgNABIgIgGIAAgBIAAgGQAEgKgCgMIAAgCIgPgBIAAgGIAAgSIAAgCIACgEQABgEAAgFIAAgCIgCgBIgBgBQgLAAgKgDIAAAAIAAgDIABgLIABgBIAEgBIABgBIAAgKIAAgZIAAgHIABgBIAIAAQAHAFAIgBIACAMIgDABIgCAAIAAABIAGgCIAEgDIgHgJIAAAAQABgDAAgEQgBgLADgKIAAgCIAHgGIABgBQAJABAJADIABAAIABgEIgBgGIAAgBIACgBIAAgCIAAgCIADgEIABgBIAFAAIACABIABABIAHAAIABAAIAAgDIABgGIAAgBIAeAAIAHAFIAAAAIgBADIgBABIAEABIAAAFIAAAEIADAAIAAgBQABgHAAgHIAAgBIABgBIAOAAIAAABIADAJIAAABIACABIABABIAFAAIADgCIACgBIABgBIAAgBQAFgEAGAAIABAAIACABIABABIACAEIABABIABAKIAAACIABABIABABIAGAAIABAAIAFgEIABgBQAGgDAIABIAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAACIABABIABABIAAAFIABABIAgABIAAABIAAARIAAALQACADADABIAAARQAAAHADAGIAAABIAEAEIgBACIgBACQgIACgDAGIgBABQAAAIAGAHIABABIABABIAAABIABABIABABIAAABIAAAJIAAABQgEAQACASQACAMgMACIAAAQQABADgBADQgOADgNgBIAAACIAAACIgCABIgBABIgHAAIgDgCIgCgCIgKABIAAABIAAABIAAABIgBABIgBACIAAABIAAABIgCABIgBABIgIAAgAgfgOIADABIgJgIIgIgJIgGgHQACATASAEgAAegrIACABQALACAGgEIACAAQAGgBADgDQADgDABgFIABgGQgEAGgMAHIAAACIgCAAIgDAAIgCAAQgNAEABgLIABgBQANgSgQAOIAAADIAAACIgDAAQAAAIAFADgAhZgsIAPgDIgHAAIgIADg");
	this.shape_5.setTransform(38.7,-15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AlGGMIgBAAIgBgBIABgBIAAgBIABgBIABgCIgBgBIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgKIgBgEIgBgCIgFgIIgCgEQgDAAgCgDIgBgCIAAgBIgBAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAIABgCIgBgOIAAgFIgFgGIgBgCIgLgEIgCgCIgCgCIAAgGIAAgFIABgCIABgBIAAgPIAAgEIgCgCIgCgCIgWgDQAAgMgCgLQgKACgKgFQgEgDgDgDQACgIgJAEIgCACIAAAIIAAACIgBAFIgSAAQgCgEgBgEIAAgCQgCgEABgEIgDgBIgXAAIgJgIIgCgCIAAgDIgCAAIgdgEQgCgDABgFIABgCIABgBIADABIACACIAAABIAXACIADAAQAGAMALADIABAAIACAAIAAAAIABAAIAKAAIAKgBQACADAAAFIAAACIAAAAQAAAFACAEIAHAAIAAgIIAAgCIAGgGIAQgBIABAFIAAACQAFADAGACIAQAFIAAABIgBABIAAAAIABACQABAGAAAHIAAACIASADIAJAKIAAATIAAADIgBACIgCADIAAACIAAACIANACQADAJAGAGIABATIgBADIABAAIABACIAAABIAAABIALAUIABACIABAJIABADIAAACIgBADIgBABIAAADIAAACIAAAAIgBABIAAAAIgBABIgDAAgAIAF2IABABIAAABIgBgCgAIBFzIgBhAIACAAIAAgCIAAgDIAAgaIgBAAQgBgOAAgNIAAgCIACAAIAAgDIAAgEIgBAAQgBgQAAgQIACAAIAAgCIAAgHIAAgCIAAgZIgCgBQgCgCABgEIAAgCIgEgEIAAgBIgJAAIgNAMQgCARgLAMIgCACIgjAAQgCgEABgGIgBgCQgDgEgEgDIgVgDIgQgLIgEABQgEADgCAFIgGADIgJgBIgCgBIgBgCIgSgDQgFADgDADIgaAAQgCgIABgKIAAgDIgNgDIgBgBIgBgBQgaAFgNgRQgLgJgRADIgCACIAAAAQABAIgDAHIgCADIgCABIAMAPIACACIAAACIABAEQAoATAqAOQAMAEANABQAqAEAnAOQAHADAEAFIA0AGIABAAQAKgDAKgBIAHAEIgBABIgFACIAAAAIgDABQgMADgKgBIAAgBQgZABgagEQgngZgygBQgnAAghgVIgMgHQgNgGgOgDQgIgQgJgOQgMADgJgJQgigEghADIAAAAIgBABIgBAAIgDAAIgBgBIgWADIgdAEIgBABIgIAAIgJABIAAAAIgBAAIhQACIgBAAIgHAAIgCAAIgKAAIgBAAIAAgBIgLAAIgEAAIgegEIgBAAIgBAAIgEgBIgOgCIgBAAIgCgBIgGAAIgGAAIgbgBIgYgCIgPgBIgUgBQgHAAgEgEIgEAAQgFAAgDgCQgJAAgJgCIgHgCIgngDQgPgBgOgCIgNgCIgLgBQgFAAgEgCIgKgCIgMAAIgDgBIgVAAIgBAAIgBAAQgDADgEgBIgFABIgBAAIgKACIgCAAIghABIgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgFAAQgHABgIAAIAAgBIgRgBIgCgCIATAAIACgBQAJAAAJgCIADAAIAMgBIAIAAIAHAAIAHAAIAGgBIAGgBIAAAAIAGgBIADgBIACgBIAAAAIAAAAIABgBIADgBIAGAAIABAAIAOABIACAAIADAAIAXAEQAEACAEAAQANgBANADIAXAEIAxAEIAFAAQAHACAIAAIABAAQAEADAGAAQADACAEABIAYABIAHAAIAHABIAXABIAJAAIAOABIAFABIAOABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIANACIAFAAIABABQAQAAAPADIACAAIAJABIANAAIAHAAIBSgCIABAAIAAgBIBAgDIAFgCIAAgFIAAgCQAKgEALgCIABgBIABgCIABgFIAAgCIACgCIABgEIAAgCIAGgIIABgCQALACAMADIAAAAIgCgBQgDgDAAgGIAIgFIACAAIAGADIAAgBIABgCIATAAIADgFIACAAIAAgCQALgTgGAVIAAADIgDAAIAAACIgBAAIAGAAIABAAIADAAQAEgGgBgJIgBgFIAUgFIAAgKIABgBIAOgCQADADACgEIAAAAIAKgCQgBgJACgHQACgHAEgFIAagCQgDgRANgHIAJgDIAAgBIACgCIAAgBIADABIACADIAAAEIgBACQgIACgIADQgEAGABAJQABADgBAFIgdACIAAAFIgBACIAAABIgCACIAAALIAAACIgDAEIgBABQgNABgLAEQAOAAAHAHIACABIAAgDIAAgFQADgCADgFIABAAIAAgCQAFgEAHgBIACAAQAHACAEAFIACACIACAAIAAgCIACgCIADAAIAAgDQAHgHAKgFIACAAIAAgCQALgFAHAHIABACQAEABgBAHIgBACQAIgEABACQAAABgGAGIAAACIAAABQgLACAEgOIgBgCQgFgJgLAFIgBACQgJAGgHAHIAAACQgFAJgFgCIgBAAQgCgJgIgCIgBAAIgEAAIgCAAQgCADgEABQgCADABAEQAHAbgPgRIgCAAQgGgIgOABIgBAAIAAABIABACIABACIABAEIAAACIACACIABAOQAEAIAGAGIgCgBIgIgIIAAAIIAAACIAAACIAEAEQACAJgBAKIAAABQANAIATgDIABABIABABIAMABIACACQADAIgBAJIAAADIASAAQALgMATAGIADAEIABACIAHgCQABgFAFgDQAJgDAJAEQAEAHAGADIAXABQADAHAGAGIABADIAAAEIAagBIAAgBQAAgGAGAAQAEgIAAgIIABgCIARgRIANgBIAGAGIAAgxIAAgCIAAgkIAAgCIAAgCIAAgBIAAgdIAAgCIAAgGIAAgwIADAAIAAgDIAAgeIAAgDIAAgdIAAgCIAAgUIAAgCIAAgHIAAgsQgDAGgGACIgBAAIAAABIAAAAIgCADIABACQADAIAGAGIAAABIAAAPIAAABIgBABIgCABIABAVQABAJgDALIgBABQgEACgEABQABADAAADQABAJgCAIQgMAHgPgFIAAABIgDAFIAAAAIgNABIgBgBIgDgDIgFAAIAAACIAAABIgDAEIgBACIgEACIAAAAIgMAAIgBgCIgGgFIAAAAIgGgBIgBgBQgCgEgEgBQgBgCAAgEIAAgEQgGACgBgFIABgCIABAAIABgBIAEAAIAAAAIADAAIABAAIABgBIABAAIAFgBIABgBIAcgHIAJgFIAWgGIADACIAAABIgMAFIgBAAQgLABgIAHQgKABgJAEIgSADIAAAIIAAABIABABIADAEIAGABIACABQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAIABABIADACIAIAAIABgBIACAAIAAgCIAAgBIABgCIABgBIAAgBIAAgBIABgBIAJAAIACABIADACIAHAAIABgBIACgBIAAgBIAAgDQAOABANgDQABgDAAgDIgBgQQANgCgCgMQgDgSAFgPIAAgBIAAgJIgBgCIgBgBIAAgBIAAgBIgCgBIgBgBQgGgHABgIIABgCQADgGAHgCIAAAAIABgBIABgDIgDgEIAAgBQgEgFAAgHIABgSQgEgBgBgDIAAgLIAAgRIAAgBIghgBIgBgBIAAgFIgBgBIgBgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBAAQgHgBgHADIgBABIgFAEIgBAAIgFAAIgBgBIgCgBIAAgBIgBgKIgBgBIgCgFIgBgBIgCgBIgBAAQgGAAgEAEIgBACIgBABIgCABIgCABIgGAAIgBAAIgCgCIAAgBIgDgJIAAAAIgOgBIgCABIAAACQABAGgBAHIgBABIgCAAIgBgEIAAgFIgEgBIABgBIABgCIAAgBIgHgFIgeAAIAAABIgBAGIAAADIgBAAIgHAAIgBgBIgBgBIgGAAIgBABIgCAEIAAACIgBACIgBABIAAABIAAAGIgBAEIAAAAQgJgDgKgBIgBABIgGAHIgBABQgCAKAAALQABAEgCADIAAAAQgIABgGgEIgJAAIgBABIAAAGIAAAZIAAAKIgBABIgEACIAAABIgBALIAAADIAAABQAKACAKAAIABABIACABIAAACQABAFgCAEIgCAFIAAABIAAASIAAAHIAPABIABABQACAMgEAKIgBAGIABABIAHAGIAOAAIABgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIABgBIACAAIABABIABAPIAAADIABABQAEAEAAAFIAAADIABABIAJABIACgDIABgBIAAgCIACgBIAAgBIABgBIACAAIABAAQAPgKgNAPIABABIAAABIABABIAIAEIADAAQAGgCADgFIAAgBIABgCIAAgCIABAAIACAAIABABIABABIAEABIACABIABAAIADABIAAgJIAAgCQAEgagLgKIgCgBIgPgLIgCgBQgHgCgGgFIgBAAIgBgCIgCgBQghgKgLgjIAAgCIgHgOQAKAAAEAHIABACIAKAKIAIAKIABABQAHALAJAHIABACQANAFAHAJIAEAFIgCABIgBABIAAABQALACAHAHIABAAIADAAIAAgDIAAgCIADAJQADAKAAAMIAAABIAAAAIgBAMIAAAKIAAACIAAABQAAAFgDADIAAADQACAHgEACIAAADIAAACIAAAPIAAABIAAACIAAADIAAAcIAAAKIAAACIAAAFIAAADIAAASIAAAIIAAACIAAACQACATgEANIgBACIgCgBQgEgDACgKQAEgBgCgGIAAgDIAAgCIAAgRIgBAAIgBgTIACAAIAAgBIAAgBIAAgDIAAgaIAAgDIAAgVIAAgBIAAgBIAAgJIACgDIAAgCIAAAAIAAgCIAAgUIgCAAIgBgBIgBgCIgFAAIgBACQgKALgPgHIgBgBIgBgBIgBgBIgCACIgBABIgBAAIgFAAIgDACQAGAHABAMIAAADQADACAHAAIACAAIAFAAIACAAIADgBIABAAQAIgCACAEIACAHQgFgIgNAFIgCAAIgBACQgGADgIABIgCgBIgDgBIAAgCIAAgFIgCAAIgTAAIgDAAIgMAAIAAABQgQAGAAgLQAGABACgEIABAAIAAgCIADAAIAAgCQgJACABgIIAFAAIADAAQAHgEAMAAIACAAIAAgCQAHAAADgDIACAAIAAgCIgCAAIgBgBIgCgDIAAgBIgBgEIAAgCIgBgBIgCgCIgBgBIgBgGIAAgEIgBAAQgQAEgLgMIAAgBIACgVIABgGIgOgBQgDgDAAgFIACgXIACgIIAAgCIgBgCIgBgBIAAAAQgMACgJgHIAAgBQgBgIACgHIAAgEIABgBIACgCIACgBIAAgDIAAgbIAAgIIAAgBIADgDIABgBIALAAIABABIABACIADAAIAFAAIAAgBQgBgJACgKIABgGIABgBQAKgPAQAJIABgBIAAgEIAAgDIABgBIAAgBQABgEACgEIABgCIABAAIALAAIABABIABABIACAAIAAgBIAAgEIAAgDIABgBIADgBIAAgBIAgABIACABIAEABIABABIABABIAAAAIABgBIAAgBIAFgBIARAAIABABQABAGADAGIAAAAIACABIABgBQAEgCACgEIADgBQAGgDAFAAIABACIAAABIADABIACADQADAHAAAJQAGAAACgGQAKgFALAFIABABIAAABQACAFAAAFIAfABIABACIABABQABAFAAAGIAAAQIAAABIAAAAQADABABACQABAIgBAJQgBAKAHAFIAAglIACAAIAAgCIAAhjIAAgDIAAgkIAAgCIAAgOIABAAQAGgBgCAFIAAADIAAArIAAACIAAADQACA5gEAzIAABNIAAACIAAAuIAAACIAABDIAAADIAAACQABASgDAPIAAmLIAAGLIgBAEIAABLIAAADIAABKIAAACIAAAWIAAACIAAACQACASgEALIAAAbIAAACIAAAdIAAADIAAAeIAAADIAAADQABALgBAKIgDAJgADBCQQAJAIAMgCIACgCQACgEgBgGIAAgCQACgEADgDIAAAAIACgCQAPgBALAEQgBgJAFgGQgBgMgDgMIgDgKIgPACIAAANIAAACIgCADIAAADIgKAAQAAAKgIADIgCAAQgLACgBgGIgDAAIgBAAIAAAFIAAACQgIACgIgBQgGACgGgBIAEgCQgHgCgGgDIgDAEIgBADIAAACIAAABIgCACIgBACIAAAFIAAACQgCAEgEADIAWAAIAbABgAEBCFIAAACIABgBIAAgDIAAgCIgBAAIAAAEgADNBpIgFACIAAADQABAFAGAAIADAAIAAgCQAEgEADgFIgMABgAFAgaIAAABQgMAHgMAEIAAADIAAACIACAAQAFgDAKABIACAAIAPAAIACAAIACAAIABgDQACgOgKAAIgCAAIgFACgAoMCVIAAhZIAAgDIAAgWQAEAJgBANIAAADIAAACQABAjgCAgIgBATIgBADIAAgCgAGNB3IgBgCQgDgLABgPIgBgBQgBgJAAgKIAAgCIAAgTIACAAIAAgDIAAgMIAAgCIAAgJIADAAIAAgCIAAgBIAAgOIAAgCIAAgGIAAgBIAAgCIAAgRIACAAIAAgDIAAgEIAAgCIAAgRIgBAAIgBgTIAAAAIADgBQgBgGABgHQAAgEACgFIAFgGIABgBIANgNIAEgDIABgDIABgBIAJgBIABgDIABgBQAKgLAJgMIADgFIADgBIADgEIAFgCIAGgGIAEgBIAAgEIAAgCIAAgFIgDAAIAAACIgBADIgBABIgBAEIgBACIgCAAIgSAOIgHAEIgCABQgLAMgLAGIgBABIAAABIgBADIgFAFIgIAKIgBACQgBADgCABIgCACIgEAFIgCACIgCABIgCAAIgBgBQABgDADgCIABgBIABgBIAAgCIAAAAIADgCIACgCIALgPIABgCIgCAAIgBABIABgBIAFgEIAAgCIABAAIgBgDQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBIAAAAIAEAAIAAABIAAABIASgPIABgBIAAgCQAPgJAMgKIACgBIAAAAIAAgBIgBgBIgCAAIgBAAIgBAAIgCAAQgNABADgPIAAgDIAAgCIACgBQAGgEADgGIABgBIAAgDQAGgIABAIIABADIgBACQgIAFgGAHIAAADIAAACIgCAAQgCAKAJAAIACAAIAAAAIAKgFIACAAQAOgKgFAPIgBAAIgBABIgCABIAAABIAAAFIABgBIACABIABABIAAABIAGAAIACAAIAAgDQAOgFABABQABABgLAHIgCABIgDAAQgIAEgDgDQgMAGgKAJIgCAEIAAACIgEABQgFAJgIAIQgCACgBADQgEADgHABIAAABIgBACQgKAGgIAKIgBABIAAACIgBABIgBABIgCABIAAACIAAABIgBABIAAABIAAAKIAAAFIgCgBIAAABIABACIgBAAIAAABQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAIAAACIAAAFIAAACQAEAJgCAPIAAACIAAADQACAMgEAFIAAACIAAAGIAAABIAAAAQAAAEgDACIAAAJIAAAGIAAACIAAACQACAGgEgBIAAAQIAAAJIAAAJIAAACIACAAQAEAJgDANIgBAAIAAARIAAADIAAACIAAACIACAAQAEALgBAAQgCAAgFgJgAG9A8IgBAAQAAgNgLAAIgBAAQgBAHgFABIgBACQgGAQgDgNQAEgDACgEIABAAIAAgDIAIgFIACAAIAAgCQALAAADAKIAAACQADAPAIgKIABAAIAAgDQANgKAOAGIgDAAQgOABgHAIIgCAAQgEAHgDAAQgEAAgEgJgAHpA2IgBgBIANAMIAAAAIgMgLgAHvATIAAgCQgCgDgFAAIgCABQgeAZgJghIgBAAQgCgHgLACIgDAAQgGgBgDAEIgBABQgFAEgDAAQgDAAAAgFIAJgDIADAAIAAgCQAIAAAGgBIADgBQAJgBACAFIABADQAHAZAdgSIACgBIAAgCQAHAAACADIABACIABABQAGALgBABIAAAAQgCAAgHgIgAEEAOQgEgOACgSIAAgDQAIgRAKAKIgEABQgFABgCAFQgEAQAAATgAGahBIAAAAIABAAIABAAIgDgBIAOgHIADgBIAAgCQAJgCAIgDIACAAQAFACABgEIABAAIAAgDQAXgFAIAIQABAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgFAAQgJgBgHACIgCAAQgEADgGgBIgBABIgVAGIAAACIgJADIAAAAIAAAAIgFABIgCAAIAAABIgBABIgBgBgAF6hoIgLgIIgBgCIgBAAIgVgVQgMgOgPgHQgFgFgDgFIAAgCIAEABQACADADACIABABQAVANARAUIANALIACACIgBgBIAAgBIAAgBIAAgBIgBgBIAAgSQgEgEACgSIACAAIAAAAIAAgCIAAgDIAAgDQgIgFgHgHQgFgEgCgEQgCgEABgFIAAgBIACABIAFAKIABABIAAAAIADABQACAGAGABQABAEAEACIAGgTIABgDIAAgCIAAgCQAGgVACAFQACAGAAAEIgBAEIgHANIAAACIgFAPIAFAHIAAABIgBAAIgCAAIgEgCIAAACIAAABIAAAOIAAADIAAADIAAAEQAAAQAIANIAEACIADACQAEADgBADIgGgCIAAABIAAAAIAAABIgDABIgEgHgAGBhtIAAAAIgFgXIAAgCIAAgHIACAAIAAgDIAAgQIADAAIAAgCQAEAAgCgGIAAgCIAAgCIAAgCQAGgLAEgLIACgJIAEgPIABAAIgCAMIAAADQgFAVgGATIgBAAIAAADQABAEgEAAIAAADIAAACIAAACQACAHgEAAIAAADIAAADIAAAOIAAACIAAADIAAALIAAgBgAFiilQgRgFgDgTIAGAIIAIAIIAJAIgAEfi/IABAAIAEgBIAAAAIgGABIABAAgAGijCIgCgBQgFgDAAgIIADAAIAAgCIAAgCQAQgOgMARIgCABQgBALANgDIACAAIADAAIACAAIAAgDQAMgHAEgGIgBAGQgBAFgDADQgDADgFABIgCAAQgEADgGAAIgIgBgAEwjHIAIABIgQACIAIgDgAhxmAIAKAAIACAAQAMgBgYADgAk9mKIAAgCIAfAAIACAAQgHADgIAAIgEAAIgOgBg");
	this.shape_6.setTransform(0.1,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6FFFF").s().p("AHUGUQAXgCATgDIAAABQAJACACgEIAAAGgACTGUQALgCAIACIgTAAgACTGUIAAAAgABMGUIAGgDIAFgCQAYABgGAEIgdAAgAAKGUIgBgBIABAAIABAAQALgEAFACIAFADgAh8GUIADgBIgKABIhRgBIBdgBIANACgAoNmTIQWAAIAAAJIAAAVIAAgVIAFABIgFAUIgBAEIAAAOIAAACIAAAkIAAADIAABjIAAACIgDAAIAAAlQgHgFACgKQABgJgBgIQgBgCgDgBIgBAAIAAgBIAAgQQABgGgBgFIgBgBIgBgCIgfgBQAAgFgCgFIAAgBIgCgBQgLgFgJAFQgDAGgFAAQAAgJgEgHIgCgDIgCgBIAAgBIgBgCQgGAAgFADIgDABQgDAEgDACIgBABIgDgBIAAAAQgDgGgBgGIAAgBIgRAAIgFABIgBABIAAABIAAAAIgBgBIgBgBIgEgBIgCgBIghgBIAAABIgCABIgBABIAAADIAAAEIAAABIgDAAIgBgBIgBgBIgKAAIgBAAIgBACQgDAEAAAEIAAABIgCABIAAADIAAAEIAAABQgQgJgKAPIgCABIAAAGQgCAKAAAJIAAABIgEAAIgDAAIgBgCIgBgBIgLAAIgCABIgCADIgBABIAAAIIAAAbIAAADIgBABIgCACIgCABIAAAEQgCAHABAIIAAABQAJAHAMgCIABAAIABABIAAACIAAACIgBAIIgCAXQgBAFADADIAOABIAAAGIgCAVIAAABQAKAMARgEIAAAAIAAAEIACAGIAAABIACACIABABIABACIAAAEIABABIACADIABABIACAAIAAACIgCAAQgEADgGAAIAAACIgDAAQgMAAgHAEIgCAAIgFAAQgBAIAIgCIAAACIgCAAIAAACIgCAAQgCAEgGgBQABALAQgGIAAgBIAMAAIACAAIAUAAIACAAIAAAFIAAACIgBAAIgBgDIgDgBIgBABIgBACIgBABIgIAEQgOAGADARIgaACQgEAFgBAHQgCAHAAAJIgJACIAAAAQgCAEgDgDIgOACIgBABIgBAKIgTAFIAAAFQABAJgDAGIgDAAIgBAAIgGAAIAAAAIABgCIACAAIABgDQAFgVgKATIAAACIgCAAIgDAFIgUAAIAAACIAAABIgHgDIgCAAIgHAFQgBAGAEADIACABIAAAAQgMgDgMgCIgBACIgGAIIAAACIAAAEIgCACIAAACIgBAFIgCACIAAABQgLACgKAEIgBACIAAAFIgFACIg/ADQgzACg0ABIgKgBIgCAAQgPgDgPAAIgBgBIgGAAIgMgCQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAIgNgBIgGgBIgNgBIgKAAIgWgBIgIgBIgGAAIgYgBQgEgBgDgCQgGAAgFgDIAAAAQgIAAgIgCIgEAAIgxgEIgXgEQgNgDgNABQgFAAgDgCIgYgEIgDAAIgCAAIgNgBIgBAAIgHAAIgCABIgBABIAAAAIgFABIAAABIgGABIAAgBIgTADIgIAAIgHAAIgNABIgCAAQgJACgKAAIgCABIgTAAIgEAAQABgggBgjIAAgCIAAgDQACgNgEgJIAAAWIAAADIAABZIAAACIAAA4IAAC6IgCAQgADXAvIAAAAIAAgBIAAABgAECgaIAAADQgCATAFANIABAAQAAgTADgQQACgFAGgBIADgBQgDgEgEAAQgGAAgFALgAoJiJQgBAKABAIQABAIACAGIAAgCQABgTgEgNIAAACgAC4iNQABAGADABIACgBQgCgCgBgEIgDAAgABNjFIABABIAEABQgEgDgBgDIgBAAIABAEgAAOkUIAXAAIAUABIgbgCIgQABgAhxmFIAAACQAYgDgMABIgBAAIgLAAgAk9mPQAKACAJgBQAIAAAHgDIgDAAIgfAAgAgKGMIABAAIAAAAgAlBGGIAAgBIAAAAIASAAQAAADACADIgUgFgAIFFlQACgKgCgLIAAgDIAAgDIAAgeIAAgDIAAgdIAAgCIAAgbQAEgLgBgSIAAgCIAAgCIAAgWIAAgCIAAhKIAAgDIAAhLIABgEIAAFsQgCgcgCgFgAn+GFIAEgBIAIABIgMABgAiDCVIAAgBIAFAAIAAABgAH5AWQABgBgGgLIgCgBIAAgCQgDgDgGAAIAAACIgDABQgdASgHgZIAAgCQgCgGgKABIgCABQgGABgJAAIAAADIgCAAIgKACIgGAAIAAAAIgBgHIAAgCQAEgFgBgMIAAgDIAAgCQABgPgEgJIAAgCIAAgFIAAgCIACAAIgBACQAAAFAGgCIAAAEQAAAEACACQADABACAEIABABIAGABIABAAIAFAFIABACIAMAAIABAAIADgCIACgCIACgEIABgBIAAgCIAEAAIAEADIABABIAMgBIABAAIACgFIABgBQAPAFALgHQACgIAAgJQAAgDgCgDQAFgBADgCIACgBQADgLgBgJIgCgVIACgBIABgBIAAgBIACAAIAAAHIAAACIAAAUIAAACIAAAdIAAADIAAAeIAAADIgCAAIAAAwgAF0gNQgBgEgJACIAAAAIgDABIgCAAIgFAAIgDAAQgGAAgDgCIAAgDQgBgMgGgHIADgCIAFAAIAAAAIABgBIADgCIAAABIABABIABABQAPAHALgLIABgCIAEAAIACACIABABIACAAIAAAUIAAACIAAAAIgBACIgBADIgBAJIgFABgAEpgOIAAgCIAAgDQAMgEALgHIABgBIAEgCIADAAQAKAAgDAOIAAADIgCAAIgDAAIgOAAIgDAAQgJgBgFADIgCAAgAFyh6IACgBIAAABIAAABIAAABIgCgCgAFxilIACAAIAAAAIgCAAgAEkjFIgDgNIAIAJIgEAEg");
	this.shape_7.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-41.6,106.7,82.8);


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


(lib.BEscene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_66 = function() {
		playSound("fading_pad");
	}
	this.frame_87 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(66).call(this.frame_66).wait(21).call(this.frame_87).wait(1));

	// Layer 1
	this.instance = new lib.BEscene2still();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BEscene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		playSound("fading_pad");
	}
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(21).call(this.frame_80).wait(1));

	// Layer 1
	this.instance = new lib.BEscene1still();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.berap2guy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.berap2buystill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.2,y:-3.2},16).to({x:0,y:0},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.6,-32.8,93.9,67.3);


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


(lib.Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rapbubble1();
	this.instance.parent = this;
	this.instance.setTransform(1.8,2.3,0.349,0.295,0,0,0,0.1,0);

	this.instance_1 = new lib.berap2guy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.3,37.4,0.805,0.805);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6FFFF").s().p("AgEAAIAGAAIABgCIAAAAIABAAIgEAFg");
	this.shape.setTransform(-12.6,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAwDaIABgCIABABIABABIgDAAgAAQAcIgBgCIACADIgBgBgAgyjZIACABIAAABIgCgCg");
	this.shape_1.setTransform(-22.4,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-9,106.4,74.1);


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
		
		 window.open ("predNoun_scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("predNoun_scene3.html","_self");
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
(lib.predNoun_scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0});

	// timeline functions:
	this.frame_0 = function() {
		playSound("isisayisare");
	}
	this.frame_48 = function() {
		playSound("ireallymeanbeamisare");
	}
	this.frame_87 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(39).call(this.frame_87).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(399.2,93.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(390.4,93.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(381.6,93.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AghA9QgIgIAAgZIAAgKIABgOIgBgEQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAIACghIgBgJIgBgIQABgKAHABQAEAAACABIARgDIAPgBQATgBAMAFQAFADAAAFQAAADgCACQgCADgEAAIgDAAQgMgFgNAAIgNACIgQAEIABAIIgBAdIAhgDIASgBQADAAADACQACACAAADQAAAHgHAAIgSADIgjADIgBAKIAAAJQAAARACADQACADAKAAIAOAAIAOAAIAFgBIAEgBQAJAAAAAIQAAAHgGABQgIABgYAAQgYAAgGgFg");
	this.shape_3.setTransform(374.9,88.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgnA7QgCgCAAgEIAAgSIgCgSIACgVIACgVIgBgMIAAgMQAAgEACgDQADgFAFABIATABQALACAGADQAgARgBAYQAAAMgLAJQgIAHgNAEQAYANANAOQABADAAACQABAEgDACQgDADgDAAQgDAAgCgDQgagZgfgJIABAPIAAAPQAAAEgCACQgCACgEAAQgDAAgCgCgAgYgiIABAJIgCAQIgBAOIAEAAIACABQAUAAAJgGQAFgBADgEQAFgEAAgEQAAgKgNgKQgKgIgMgCIgMgBg");
	this.shape_4.setTransform(364.8,88.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAbAoIgFgYIgVAEIgTAEIgOAeQgCAFgEgBQgEABgCgDQgDgCAAgEQAAgEAMgYQgBgCAAgDQAAgGAIgCIAWgmQASgdAEAAQAGAAADAIIAFAbIALA1IAFAMIACAJQAAADgDACQgCADgDAAQgHAAgGgTgAgJAFIAcgFIgHgeg");
	this.shape_5.setTransform(353.6,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgJARQgCgDAAgCQAAgCAFgLIAGgNQACgEADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_6.setTransform(341.3,94.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgfA2QgOgHAAgMQAAgDACgCQACgCAEAAQADAAADAEQAEAGADADQAHAEANAAQALAAAKgFQAOgHAAgMQAAgKgMgGQgJgEgNgBQgMAAgJgEQgLgGAAgMQAAgOAQgMQAPgLAPABQAHgBAKADQANAEAAAEQAAAIgHAAIgLgCIgMgCQgMAAgIAGQgJAGAAAJQAAAHAMACIAPACQASABAKAKQAJAIAAANQAAATgRALQgPAJgSABQgPgBgMgFg");
	this.shape_7.setTransform(333.1,88.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgiA5QgCgCAAgDQAAgEACgCQACgCAEAAIARgCIABgPIgBgNIAAgNQAAgRACgbIgKAAIgKABQgEAAgCgDQgCgCAAgDQgBgIAIAAIAXgBQAPAAAYADQAGABAAAIQAAADgDADQgBABgEAAIgNgBIgMgBIgCAqIAAAOIABANIgBAOIAZgBQAEAAACADQABACAAADQAAAEgBACQgCACgEAAIgNABIgNAAIgOABIgQACQgEAAgCgDg");
	this.shape_8.setTransform(323.2,88.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgJARQgCgDAAgCQAAgCAFgLIAGgNQACgEADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_9.setTransform(312.2,94.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_10.setTransform(305.2,90.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQA8QgCgCAAgEQAAgCAHgOIAKgSQgPgSgDgJQgEgJgIgMIgOgVIgBgEQABgDACgDQACgCAEAAQADAAADAEIAGAJIALARQAGAKADAIQADAGAHALIASgrIAJgRQACgFAEAAQAEAAACACQACACAAAEQAAADgDAIIgGAJIgNAhIgPAgIgJARIgDAJQgDAEgEAAQgDAAgDgCg");
	this.shape_11.setTransform(295.8,88.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgJARQgCgDAAgCQAAgCAFgLIAGgNQACgEADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_12.setTransform(284.4,94.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AghA9QgIgIAAgZIAAgKIABgOIgBgEQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAIACghIgBgJIgBgIQAAgKAIABQAEAAACABIASgDIAOgBQATgBAMAFQAFADAAAFQAAADgDACQgCADgDAAIgDAAQgNgFgMAAIgNACIgQAEIAAAIIAAAdIAhgDIASgBQAEAAACACQACACAAADQAAAHgHAAIgSADIgjADIgBAKIAAAJQgBARADADQACADAKAAIAOAAIAPAAIAEgBIAFgBQAIAAAAAIQAAAHgGABQgIABgYAAQgXAAgHgFg");
	this.shape_13.setTransform(277,88.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgnA7QgCgCAAgEIAAgSIgBgSIABgVIACgVIgBgMIAAgMQgBgEADgDQADgFAFABIATABQAKACAHADQAgARAAAYQAAAMgMAJQgIAHgNAEQAYANAMAOQACADAAACQAAAEgCACQgDADgDAAQgCAAgDgDQgagZgfgJIABAPIABAPQgBAEgCACQgCACgDAAQgEAAgCgCgAgYgiIABAJIgBAQIgCAOIAEAAIACABQAUAAAKgGQAEgBADgEQAFgEAAgEQAAgKgMgKQgLgIgMgCIgMgBg");
	this.shape_14.setTransform(266.9,88.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAbAoIgFgYIgVAEIgTAEIgOAeQgCAFgEgBQgEABgCgDQgDgCAAgEQAAgEAMgYQgBgCAAgDQAAgGAIgCIAWgmQASgdAEAAQAGAAADAIIAFAbIALA1IAFAMIACAJQAAADgDACQgCADgDAAQgHAAgGgTgAgJAFIAcgFIgHgeg");
	this.shape_15.setTransform(255.7,88.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgJARQgCgDAAgCQAAgCAFgLIAGgNQACgEADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_16.setTransform(243.4,94.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgfA2QgOgHAAgMQAAgDACgCQACgCAEAAQADAAADAEQAEAGADADQAHAEANAAQALAAAKgFQAOgHAAgMQAAgKgMgGQgJgEgNgBQgMAAgJgEQgLgGAAgMQAAgOAQgMQAPgLAPABQAHgBAKADQANAEAAAEQAAAIgHAAIgLgCIgMgCQgMAAgIAGQgJAGAAAJQAAAHAMACIAPACQASABAKAKQAJAIAAANQAAATgRALQgPAJgSABQgPgBgMgFg");
	this.shape_17.setTransform(235.2,88.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgiA5QgCgCAAgDQAAgEACgCQADgCADAAIARgCIAAgPIAAgNIAAgNQAAgRABgbIgKAAIgJABQgEAAgDgDQgCgCAAgDQAAgIAIAAIAXgBQAPAAAYADQAGABABAIQgBADgDADQgCABgCAAIgOgBIgMgBIgBAqIAAAOIAAANIAAAOIAYgBQADAAACADQACACAAADQAAAEgCACQgCACgDAAIgNABIgNAAIgOABIgQACQgDAAgDgDg");
	this.shape_18.setTransform(225.3,88.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUA9QgCgCAAgDQAAgIARglIgcg1IgEgGQgCgEAAgCQAAgDACgCQADgDADAAQAEAAABADQAOASAOAiIAMgbQAGgOAGgKQACgEAEAAQADAAADACQACACAAADIgBAFIgbA5QgKAVgEAOIgFAQQgCAFgFAAQgEAAgCgCg");
	this.shape_19.setTransform(211.6,92.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgHgKAAgUQAAgRAMgOQAOgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJABAGIAGAOIABAEIABABQAAADgCACQgCACgEAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_20.setTransform(203.6,90.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_21.setTransform(195.4,89.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiA5QgCgCAAgDQAAgEACgCQADgCADAAIAQgCIACgPIgBgNIgBgNQABgRACgbIgKAAIgLABQgDAAgCgDQgCgCAAgDQAAgIAGAAIAZgBQAOAAAXADQAIABgBAIQAAADgCADQgDABgDAAIgMgBIgNgBIgCAqIAAAOIABANIgBAOIAZgBQADAAADADQACACAAADQAAAEgCACQgDACgDAAIgNABIgNAAIgPABIgPACQgDAAgDgDg");
	this.shape_22.setTransform(182.6,88.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgJARQgCgDAAgCQAAgCAFgLIAGgNQACgEADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");
	this.shape_23.setTransform(171.6,94.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgfA2QgOgHAAgMQAAgDACgCQACgCAEAAQADAAADAEQAEAGADADQAHAEANAAQALAAAKgFQAOgHAAgMQAAgKgMgGQgJgEgNgBQgMAAgJgEQgLgGAAgMQAAgOAQgMQAPgLAPABQAHgBAKADQANAEAAAEQAAAIgHAAIgLgCIgMgCQgMAAgIAGQgJAGAAAJQAAAHAMACIAPACQASABAKAKQAJAIAAANQAAATgRALQgPAJgSABQgPgBgMgFg");
	this.shape_24.setTransform(163.4,88.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AghA5QgDgCAAgDQAAgEADgCQACgCADAAIAQgCIABgPIAAgNIgBgNQAAgRACgbIgKAAIgKABQgDAAgDgDQgCgCAAgDQAAgIAIAAIAYgBQAOAAAXADQAIABAAAIQAAADgEADQgCABgCAAIgOgBIgMgBIgBAqIAAAOIAAANIAAAOIAYgBQADAAACADQACACAAADQAAAEgCACQgCACgDAAIgNABIgNAAIgPABIgPACQgDAAgCgDg");
	this.shape_25.setTransform(153.5,88.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AghA9QgIgIAAgZIAAgKIABgOIgBgEQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAIACghIgBgJIgBgIQAAgKAIABQAEAAACABIASgDIAOgBQATgBAMAFQAFADAAAFQAAADgDACQgCADgDAAIgDAAQgNgFgMAAIgNACIgQAEIAAAIIgBAdIAigDIASgBQAEAAACACQACACAAADQAAAHgHAAIgSADIgjADIgBAKIAAAJQgBARADADQACADAKAAIAOAAIAPAAIAEgBIAFgBQAIAAAAAIQAAAHgGABQgIABgYAAQgXAAgHgFg");
	this.shape_26.setTransform(372.4,88.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgnA7QgCgCAAgEIAAgSIgBgSIABgVIACgVIgBgMIAAgMQgBgEADgDQADgFAFABIATABQAKACAHADQAgARAAAYQAAAMgMAJQgIAHgNAEQAYANAMAOQACADAAACQAAAEgCACQgDADgDAAQgDAAgCgDQgagZgfgJIABAPIABAPQgBAEgCACQgCACgDAAQgEAAgCgCgAgYgiIABAJIgBAQIgCAOIAEAAIACABQAUAAAKgGQAEgBADgEQAFgEAAgEQAAgKgMgKQgLgIgMgCIgMgBg");
	this.shape_27.setTransform(362.3,88.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgiA5QgCgCAAgDQAAgEACgCQADgCADAAIARgCIABgPIgBgNIAAgNQAAgRABgbIgJAAIgKABQgEAAgDgDQgBgCgBgDQAAgIAIAAIAXgBQAPAAAYADQAGABABAIQgBADgDADQgCABgCAAIgOgBIgMgBIgBAqIAAAOIAAANIAAAOIAYgBQADAAADADQABACAAADQAAAEgBACQgDACgDAAIgNABIgNAAIgOABIgQACQgDAAgDgDg");
	this.shape_28.setTransform(320.7,88.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AAwA7QgDgEgBgJIgDgNIgKg2IgQAuIgFAPQgCAJgEAFQgDAGgEAAQgEAAgDgFIgEgIIgCgJQgHgbgHgfIgDAOIgKAoQAAAIgDAOQgDAGgFAAQgEAAgCgDQgCgCAAgEQAAgNAFgTIAIgeIAGgZQACgRAFgFQACgFAGAAQAFAAACAGQADAHADAVQAEAaAKAdQAKgdAJghIABgLQACgHACgEQAEgGAEAAQAIAAADANIADASQAFAjAGAZIAFANIACANQAAAEgCACQgDACgDAAQgEAAgDgEg");
	this.shape_29.setTransform(300,88.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgiA9QgHgIAAgZIAAgKIABgOIgBgEQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAIACghIgBgJIgBgIQAAgKAIABQADAAADABIASgDIAOgBQATgBAMAFQAFADAAAFQAAADgDACQgCADgDAAIgDAAQgNgFgMAAIgNACIgQAEIAAAIIgBAdIAigDIASgBQAEAAACACQACACAAADQAAAHgHAAIgTADIgiADIgBAKIAAAJQgBARADADQACADALAAIANAAIAPAAIAEgBIAFgBQAIAAAAAIQAAAHgGABQgIABgYAAQgXAAgIgFg");
	this.shape_30.setTransform(267.2,88.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgkA8QgDgDAAgEIAAgWIACgfIABghIABgVQABgEACgBQAKgDAOAAQANAAAMAJQAPALAAAQQAAAUgQAKQAMAFAGAGQAGAGAAAIQAAAJgLAJQgHAGgIADQgQAHgbAAQgEAAgDgDgAgXAfIAAAQQAUgBAMgFQAFgCAFgEQAFgEAAgCQAAgEgKgFQgHgDgHgCIgIgBIgDAAIgDAAIgJgBIAAASgAgUguIAAAOIgCAeIAMABQALgBAHgHQAIgHAAgKQAAgIgIgGQgIgHgIAAIgMABg");
	this.shape_31.setTransform(257.2,88.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIABgIQgBgRgGAAQgIAAgIAKQgGAKgFAOIAAAHIgBAIIABAHIAAAHQAAAEgCACQgDACgDAAQgDAAgCgCQgCgCgBgEIAAgHIgBgHIACgWIABgWIgBgHIAAgHQAAgEADgCQACgCADAAQAIgBAAALIAAAJQAOgSAMAAQAMABAFAKQAEAIAAAOIAAAIIAAAHQAAAGACAKIACARQAAAEgCACQgDABgDAAQgHAAgBgHg");
	this.shape_32.setTransform(243,90.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKABgUQgBgRANgOQANgNASAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgCACgEAAQgBAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAJgGQgDgUAAgKIABgHIABgJIgFgCIgDAAQgMAAgIAJg");
	this.shape_33.setTransform(234.5,90.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMABAJAEQAKAFAAAMQAAAHgJAGQgEAEgNAEIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgCQAJgCADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_34.setTransform(226.2,90.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEAuQgCgDAAgDIgCgcIgCgaQAAgJgCgEQgFACgGAFIgJALIgEAFIgBANIgBANIABAHIABAGQAAADgDACQgCACgDAAQgJABAAgVIABgNIAAgOIAAgMIgBgNQAAgRAIAAQADAAADADQACACAAADIAAAFIgBAEIAAAJQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgGAGgDQAGgCAIAAQANAAAEAOIAEAWIAFAsQAAADgCACQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAFgDADIABAOIACAUIACAUQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_35.setTransform(215.5,90.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgIAHABQAHgBAAAIIgBAdIAAAbIgBAmIgBASQgBAJgFAAQgIAAAAgJg");
	this.shape_36.setTransform(193.9,88);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQgBgIAIABQAHgBAAAIIgBAdIAAAbIgBAmIgBASQgBAJgFAAQgIAAAAgJg");
	this.shape_37.setTransform(189.5,88);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgTAAgIgKQgHgKgBgUQAAgRAOgOQANgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgBAJIgBARQAAAJACAGIAEAOIACAEIABABQAAADgDACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAFAGQAEAHAJAAQAGAAAFgDIAIgGQgCgUAAgKIAAgHIACgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_38.setTransform(183.2,90.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMABAJAEQAKAFAAAMQAAAHgJAGQgEAEgNAEIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgCQAJgCADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJABgGAHg");
	this.shape_39.setTransform(174.8,90.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_40.setTransform(166.7,90.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AghA5QgDgCAAgDQAAgEADgCQACgCADAAIAQgCIABgPIAAgNIgBgNQAAgRACgbIgKAAIgKABQgDAAgDgDQgCgCAAgDQAAgIAIAAIAYgBQAOAAAXADQAIABAAAIQAAADgEADQgCABgCAAIgOgBIgMgBIgBAqIAAAOIAAANIAAAOIAYgBQADAAACADQACACAAADQAAAEgCACQgCACgDAAIgNABIgNAAIgPABIgPACQgDAAgCgDg");
	this.shape_41.setTransform(153.5,88.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:211.6}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:255.7}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:284.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:312.2}},{t:this.shape_8},{t:this.shape_7,p:{x:333.1}},{t:this.shape_6,p:{x:341.3}},{t:this.shape_5,p:{x:353.6}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:381.6}},{t:this.shape_1,p:{x:390.4}},{t:this.shape,p:{x:399.2}}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_19,p:{x:200}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_12,p:{x:274.6}},{t:this.shape_15,p:{x:286.9}},{t:this.shape_29},{t:this.shape_9,p:{x:309.7}},{t:this.shape_28},{t:this.shape_7,p:{x:330.6}},{t:this.shape_6,p:{x:338.8}},{t:this.shape_5,p:{x:351.1}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_2,p:{x:379.1}},{t:this.shape_1,p:{x:387.9}},{t:this.shape,p:{x:396.7}}]},48).wait(40));

	// Layer 3
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(554.3,55.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(88));

	// Layer 2
	this.instance = new lib.BEscene1();
	this.instance.parent = this;
	this.instance.setTransform(202.9,362.9);

	this.instance_1 = new lib.BEscene2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(338.5,364.5);

	this.instance_2 = new lib.Scene2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(254.4,94.3,3.6,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(88));

	// Layer 1
	this.instance_3 = new lib.GrassScene("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(273.8,189.1,3.769,3.769,0,0,0,-0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,202.6,534,398.7);
// library properties:
lib.properties = {
	id: 'A54C47F6D7955747A39F8194EE132DB5',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/fading_pad.mp3", id:"fading_pad"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/ireallymeanbeamisare.mp3", id:"ireallymeanbeamisare"},
		{src:"sounds/isisayisare.mp3", id:"isisayisare"},
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
an.compositions['A54C47F6D7955747A39F8194EE132DB5'] = {
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