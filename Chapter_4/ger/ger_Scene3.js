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


(lib.verbArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape.setTransform(53.8,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_1.setTransform(43.1,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_2.setTransform(32.5,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033FF").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_3.setTransform(22.5,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0033FF").ss(2,1,1).p("AgZgjIgDBHIA5AA");
	this.shape_4.setTransform(2.9,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0033FF").ss(2,1,1).p("AhNAqQBWh8BFA8");
	this.shape_5.setTransform(7.8,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.verbArrow, new cjs.Rectangle(-1,0,61.9,31.9), null);


(lib.loves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgEAFAAQAEAAAGAFQADADAKACIAOACQAJgBAIgCQALgEAAgHQAAgRgXgFIgLgDQgRgEgGgEQgKgHAAgNQAAgaAYgLQAHgDAPgFIAXgHQAFgDAGAAQAFAAAEAEQADADAAAGIACALIABAJQAAAGgDADQgEAEgFAAQgHAAgCgEQgCgDgBgLQgKADgTAGQgSAHAAAMIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAJgVAAQgQAAgOgGg");
	this.shape.setTransform(53.8,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANgBQAIABAMgDQAOgFAEgGQAEgGAFAAQAEAAAEACQADADAAAFQAAANgWALQgTAHgRAAQgbAAgRgNgAgYggQgKAMgFAVIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_1.setTransform(41.4,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNA4IgTgxIgVg3IgBgGQAAgFADgDQAEgEAFAAQAHAAADAHIAgBVQAIgTANglIALgcQAEgHAHAAQAFAAAEAEQADADAAAFQAAAFgTAvIgaA4QAAAMgKAAQgJAAgEgLg");
	this.shape_2.setTransform(28.4,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_3.setTransform(15.4,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_4.setTransform(5.6,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.loves, new cjs.Rectangle(0,0,62.2,38.9), null);


(lib.pos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhFhFICLAAIAACLIiLAAg");
	this.shape.setTransform(7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAoQgEgDAAgGIAAgSIgOAAQgHAAgGgDQgIgDAAgHQAAgHAHgDQAEgBAKAAIAOgBIAAgEIAAgFQAAgWAOAAQAFAAAEAEQAFADAAAGIgBAFIAAAFIAAAIIAEAAIAGAAIAHAAQAWAAAAAMQAAAFgEAEQgEAEgGAAIgEAAIgEgBIgIAAIgJABIAAAJIAAAJQAAAGgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_1.setTransform(7.2,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLgAgNAgQAAAGAEADQAEAEAFgBQAFABAEgEQAFgDAAgGIAAgJIAAgJIAJgBIAIAAIAEABIAEAAQAGAAAEgEQADgEAAgFQAAgMgVAAIgHAAIgHAAIgDAAIAAgIIAAgFIABgFQgBgGgEgDQgEgEgGAAQgNAAAAAWIAAAFIAAAEIgOAAQgLABgDABQgHACAAAIQAAAGAIAEQAFADAIAAIAOAAg");
	this.shape_2.setTransform(7,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhFBGIAAiLICLAAIAACLgAgNAgQAAAGAEADQAEAEAFgBQAFABAEgEQAFgDAAgGIAAgJIAAgJIAJgBIAIAAIAEABIAEAAQAGAAAEgEQADgEAAgFQAAgMgVAAIgHAAIgHAAIgDAAIAAgIIAAgFIABgFQgBgGgEgDQgEgEgGAAQgNAAAAAWIAAAFIAAAEIgOAAQgLABgDABQgHACAAAIQAAAGAIAEQAFADAIAAIAOAAg");
	this.shape_3.setTransform(7,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AhFBGIAAiLICLAAIAACLgAgNAgQAAAGAEADQAEAEAFgBQAFABAEgEQAFgDAAgGIAAgJIAAgJIAJgBIAIAAIAEABIAEAAQAGAAAEgEQADgEAAgFQAAgMgVAAIgHAAIgHAAIgDAAIAAgIIAAgFIABgFQgBgGgEgDQgEgEgGAAQgNAAAAAWIAAAFIAAAEIgOAAQgLABgDABQgHACAAAIQAAAGAIAEQAFADAIAAIAOAAg");
	this.shape_4.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16,16);


(lib.Stace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANgBQAIABAMgDQAOgFAEgGQAEgGAFAAQAEAAAEACQADADAAAFQAAANgWALQgTAHgRAAQgbAAgRgNgAgYggQgKAMgFAVIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape.setTransform(64,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_1.setTransform(50.6,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_2.setTransform(37.7,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_3.setTransform(25.4,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgwBVQgXgLAAgTQgBgEAEgDQAEgEAFAAQAGAAAEAHQAHAJAFADQAKAIAUgBQASAAAQgIQAVgKAAgTQAAgPgSgKQgPgHgUgBQgUAAgNgHQgSgKAAgTQAAgVAZgSQAYgRAYAAQAMAAAPAEQATAFAAAJQAAAKgLAAIgRgCQgMgDgHAAQgSAAgNAKQgOAJAAANQAAAKASAFIAZACQAcACAQAQQAPANAAAVQAAAdgbARQgYAPgdAAQgXAAgSgIg");
	this.shape_4.setTransform(11,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Stace, new cjs.Rectangle(0,0,72.7,38.9), null);


(lib.neg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhFhFICLAAIAACLIiLAAg");
	this.shape.setTransform(7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAKQgGgEAAgFQAAgGAGgDQAFgDAGAAIAZgBIAZgBQAHAAAFADQAGADAAAHQAAALgQABQgPABglAAQgGAAgFgDg");
	this.shape_1.setTransform(7,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLgAAAgGIgZABQgHAAgFADQgFACgBAHQABAFAFAEQAFADAHAAQAlAAAPgBQAQgBAAgLQAAgHgGgDQgGgDgGAAIgZABg");
	this.shape_2.setTransform(7,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhFBGIAAiLICLAAIAACLgAAAgGIgZABQgHAAgFADQgFACgBAHQABAFAFAEQAFADAHAAQAlAAAPgBQAQgBAAgLQAAgHgGgDQgGgDgGAAIgZABg");
	this.shape_3.setTransform(7,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AhFBGIAAiLICLAAIAACLgAAAgGIgZABQgHAAgFADQgFACgBAHQABAFAFAEQAFADAHAAQAlAAAPgBQAQgBAAgLQAAgHgGgDQgGgDgGAAIgZABg");
	this.shape_4.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16,16);


(lib.dancinggerund = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqBfQgPgEAAgJQAAgLAKAAIAPACQAKACANAAQAWAAAJgWQAGgPAAgfQgGAMgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIADAEAGQANAAAAAOQAAAJgDAPIgDAWIgDApQAAAYgFAPQgFAUgMAKQgPALgbAAQgQAAgLgCgAgWg9QgLAPAAAWQAAASAGAIQAHAIAOAAQALAAAMgMQAKgNACgMQACgOADgcQgFgEgFgBQgFgCgGgBQgWAAgNAQg");
	this.shape.setTransform(80.7,38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeA7IgDgaQgCgOAAgNIAAgLIABgLQAAgbgKABQgOAAgLAQQgLAOgHAXIgBALIgBAMIABALIABALQAAAGgDADQgEAEgFgBQgGABgDgEQgDgDgBgGIAAgLIgBgLIACgiIABgiIAAgMIAAgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAVAAQATAAAIARQAFALAAAXIAAAMIAAALQAAAKADAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_1.setTransform(68,35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwBOQgFgDgBgEQgBgFADgEIAKgUIALgTIAPgXIAQgYQABgFAFgBQAFgBAEACQAFADABAEQABAFgCAFIgQAXIgPAYIgKATIgKAUQgDAEgFABIgDABQgDAAgDgCgAAig1QgFgDgCgFQgCgGADgFQADgFAGgCQAGgBAFADQAFADABAFQACAHgDAFQgDAFgGABIgDAAQgEAAgDgCg");
	this.shape_2.setTransform(54.9,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEBCQgSgCgKgGQgVgMgHgWQgIgWANgVQANgWAbgPQAegQAUAMQAKAGAKAMQANAPgFAJQgDAEgEACQgFACgEgDQgDgBgBgEIgCgGQgDgIgPgIQgKgHgVANQgUANgIANQgIAMAFAOQAFANAOAIQAGADAJABIAQABIAFAAQAEADABAFQABAEgCAEQgEAGgNAAIgHAAg");
	this.shape_3.setTransform(45.1,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAeA8IgEgbQgCgPAAgMIABgKIAAgMQABgagLAAQgNAAgMAQQgLAOgGAXIgBALIgBAMIABALIAAALQAAAGgCADQgEADgFAAQgFAAgEgDQgEgDAAgGIAAgLIgBgLIACgiIACgjIAAgLIgBgMQAAgFADgDQAEgEAFAAQALAAABAQIAAAPQAVgcAUAAQAUAAAIARQAFALABAXIAAANIAAAKQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgLg");
	this.shape_4.setTransform(30,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_5.setTransform(16.7,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgrBTQgRgRAAgbQAAghASgSQAQgUAbAAQAOAAAIAFIAMAIQABgzADgSQABgLAJAAQAMAAAAAMQAAARgFA5QgCASABARQgBApAEAVIAAADQABAEgEAEQgDADgFAAQgIAAgDgLQgJAGgJAEQgJADgKAAQgZAAgRgRgAgcACQgLAMAAAYQAAAQAMALQALAMAPAAQAKAAAGgEIAOgKIADgEIAAgVIAAgOIAAgOQgEgKgIgEQgHgFgLAAQgUAAgKALg");
	this.shape_6.setTransform(2.9,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dancinggerund, new cjs.Rectangle(-6.5,0,96.1,52.6), null);


(lib.dancing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqBeQgPgCAAgKQAAgLAKAAIAPADQAKACANgBQAWAAAJgWQAGgQAAgfQgGANgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIADAEAFQANABAAAOQAAAJgDAOIgDAXIgDApQAAAYgFAPQgFAUgMAJQgPAMgbAAQgQAAgLgDgAgWg8QgLAOAAAWQAAASAGAIQAHAJAOAAQALAAAMgNQAKgNACgMQACgOADgcQgFgEgFgCQgFgCgGAAQgWABgNAQg");
	this.shape.setTransform(82.2,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeA8IgEgbQgBgPAAgMIAAgKIABgMQAAgagKAAQgOAAgLAQQgMAOgGAXIgBALIgBAMIABALIAAALQAAAGgCADQgEADgFAAQgGAAgDgDQgEgDAAgGIAAgLIgBgLIACgiIACgjIAAgLIgBgMQAAgFAEgDQADgEAFAAQALAAABAQIAAAPQAVgcAVAAQATAAAIARQAFALABAXIAAANIAAAKQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgLg");
	this.shape_1.setTransform(69.5,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(59.4,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_3.setTransform(49.3,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAeA8IgEgbQgBgPAAgMIAAgKIABgMQAAgagKAAQgOAAgLAQQgLAOgHAXIgBALIgBAMIABALIABALQAAAGgDADQgEADgFAAQgGAAgDgDQgDgDgBgGIAAgLIgBgLIACgiIABgjIAAgLIAAgMQAAgFAEgDQADgEAFAAQALAAABAQIAAAPQAVgcAVAAQATAAAIARQAFALAAAXIAAANIAAAKQAAAKADAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgLg");
	this.shape_4.setTransform(36.5,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_5.setTransform(23.3,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgrBTQgRgRAAgbQAAghASgSQAQgUAbAAQAOAAAIAFIALAIQACgzADgSQABgLAJAAQAMAAAAAMQAAARgFA5QgBASAAARQAAApADAVIABADQgBAEgDAEQgDADgFAAQgHAAgEgLQgJAGgJAEQgJADgKAAQgZAAgRgRgAgcACQgLAMAAAYQAAAQAMALQALAMAPAAQAKAAAGgEIAOgKIADgEIAAgVIAAgOIAAgOQgEgKgIgEQgIgFgKAAQgUAAgKALg");
	this.shape_6.setTransform(9.5,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dancing, new cjs.Rectangle(0,0,91,38.9), null);


(lib.carat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A9igxIONAAIDSBjMApmAAA");
	this.shape.setTransform(189.1,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AgCAwIAAi7AhYCMIBbhcIBWBX");
	this.shape_1.setTransform(172.9,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.carat, new cjs.Rectangle(-1,-1,380.1,41.2), null);


(lib.skiptomenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape.setTransform(16.7,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVArIgCgTIgBgUIAAgHIAAgIQAAgTgHAAQgKAAgIAMQgIAKgEAQIgBAIIgBAJIABAIIABAHQAAAEgDADQgCACgEAAQgEAAgCgCQgDgDAAgEIAAgHIgBgIIABgZIACgZIgBgIIAAgJQAAgDADgCQACgDAEAAQAIAAABAMIAAAKQAPgUAOAAQAOAAAGANQAEAHAAARIAAAJIAAAHIACATQACALAAAIQAAAEgDACQgCACgEAAQgIAAgBgIg");
	this.shape_1.setTransform(7.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgdAmQgOgLAAgTQAAgXALgPQANgRATAAQAOAAAJAFQAMAGAAAMQAAAKgKAGQgFAEgOAFIggARQAFAHAHADQAHAEAJAAQAGAAAIgCQALgDADgEQADgGADABQADAAADACQACACAAAEQAAAJgQAHQgNAGgNAAQgTAAgMgKgAgRgXQgHAJgEAPIAbgLQAPgJAHgFQgIgHgNAAQgKAAgHAIg");
	this.shape_2.setTransform(-2.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(-14.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("Akah8II1AAIAAD5Io1AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkaB9IAAj5II1AAIAAD5g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgJgGgCgMQgEgaAAgTQAAgNADgRQACgIAHAAQAFAAACACQADADAAAEIgBAOIgCAPIABAbQABALADAHIAGADIAGABQAMAAAOgEIAAgUIAAgSQAAgUACgQQABgJAIAAQAEAAADADQADADAAAEIgCAkIAAAUIAAAVIABAHIAAAGQAAAEgDADQgDACgEAAQgHAAgCgJg");
	this.shape_6.setTransform(18.3,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAvIgCgVIgCgVIABgIIAAgKQAAgVgIAAQgKAAgJANQgJAMgFARIgBAJIgBAKIABAIIAAAJQAAAEgCADQgDADgEAAQgEAAgDgDQgDgDAAgEIAAgJIgBgIIACgbIABgbIAAgKIgBgJQAAgEADgDQADgCAEAAQAJAAABAMIAAAMQAQgWAQAAQAQAAAGAOQAEAJAAARIAAAKIAAAIQAAAIACANQADANAAAIQAAAEgDADQgDACgEAAQgIAAgCgJg");
	this.shape_7.setTransform(8.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAqQgOgMAAgWQAAgYAMgRQANgTAWAAQAPAAALAGQAMAGAAAOQAAAKgLAIQgEADgQAHIgkARQAFAIAIAEQAJAEAJAAQAHAAAJgCQALgEADgFQAEgFADAAQAEAAADADQACACAAAEQAAAKgRAIQgPAHgOAAQgVAAgOgLgAgTgZQgIAJgEARIAegNQAQgIAIgHQgJgHgOAAQgLAAgIAJg");
	this.shape_8.setTransform(-2.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA5QgCgDAAgEQAAgMgDgXQgCgVAAgMQAAgKgDgGQgHADgHAHIgLANIgFAGIgBAQIgBARIABAIIABAHQAAAEgDADQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADAEQADADAAAEIAAAGIgBAFIAAALQAFgLAKgIQAKgIAHAAQAPAAAFAPQAFgHAHgEQAIgDAJAAQAQAAAGARIAEAbIAHA2QAAAEgCADQgDADgFAAQgHAAgCgJQgCgKgBgUIgEgdIgDgNQgDgIgEAAQgEAAgJAGQgKAFgDAEIABASIADAZQACAPAAAKQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(-15.6,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3CJIptAAIAAkRIJtAAg");
	this.shape_10.setTransform(0,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("Ak2CJIAAkRIJtAAIAAERg");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUAqQgLAGgNAAQgMAAgHgFQgJgGgBgLQgEgXAAgRQAAgMADgQQABgHAHAAQAEAAACACQADACAAAEIgCANIgBAOIABAYQACAKACAHIAFACIAGABQALAAANgEIAAgSIgBgQQAAgTACgOQABgIAIAAQADAAACADQADACAAAEIgBAhIAAASIAAATIAAAGIAAAGQAAADgDADQgCACgDAAQgIAAgBgIg");
	this.shape_12.setTransform(16.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIgCgUIgBgSIAAgIIAAgIQAAgTgHAAQgKAAgIALQgIALgEAPIgBAJIgBAIIABAIIABAJQAAADgDADQgCACgEAAQgEAAgCgCQgDgDAAgDIAAgJIgBgIIABgYIACgYIgBgJIAAgIQAAgEADgDQACgCAEAAQAIAAABALIAAAKQAPgTAOAAQAOAAAGAMQAEAIAAARIAAAIIAAAIIACATQACALAAAHQAAAEgDADQgCACgEAAQgIAAgBgIg");
	this.shape_13.setTransform(7.5,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAmQgOgLAAgUQAAgVALgQQANgRATAAQAOAAAJAFQAMAGAAANQAAAIgKAIQgFADgOAGIggAPQAFAIAHAEQAHADAJAAQAGAAAIgCQALgDADgFQADgEADgBQADAAADADQACACAAADQAAAKgQAHQgNAGgNAAQgTAAgMgKgAgRgWQgHAHgEARIAbgNQAPgHAHgGQgIgHgNAAQgKAAgHAJg");
	this.shape_14.setTransform(-2.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEA0QgDgDAAgEIgCgfIgCgfQAAgJgDgFQgGADgGAGIgKAMIgFAFIgBAPIgBAPIABAHIABAHQAAAEgDACQgDADgDAAQgKAAAAgXIABgQIABgOIgBgOIgBgOQAAgUAJAAQAEAAACADQADADAAADIAAAFIgBAGIABAJQAEgJAJgIQAJgIAGAAQAOAAAEAOQAFgGAHgEQAGgDAJAAQAPAAAFAQQABADADAWIAGAxQAAAEgCACQgDADgEAAQgHAAgBgIIgEgbIgDgbQAAgGgCgFQgDgIgEAAQgDAAgJAFQgJAFgCADIAAARIADAWQACAOAAAJQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_15.setTransform(-14.1,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEbh8IAAD5Io1AAIAAj5g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkaB9IAAj5II1AAIAAD5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


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


(lib.blank_gr_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape_1.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgoHgXiMBQPAAAMAAAAvFMhQPAAAg");
	this.shape.setTransform(256.8,150.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9999FF","#99CCFF"],[0,1],0.1,-152.1,0,152.3).s().p("EgoHAXjMAAAgvFMBQPAAAMAAAAvFg");
	this.shape_1.setTransform(256.8,150.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bk, new cjs.Rectangle(-1,-1,515.6,303.5), null);


(lib.stacedance2motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AH4DFQAEABAEACQABABABABAFUEnQAAgDgCgCQgBAAgCABAh2iOQACAAACABQANAGAMAIQAMAIAIAJQACACABAEAh4iOQgCgCgBgBQgIgGgJgFAl+kmQgCABgBAAQgCABgDAAAoBBxQABgBAAgBAi2BDQAKAMAVADQATADATgEQATgEAOgMQAIgHAEgH");
	this.shape.setTransform(-19.6,-54.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("AnzsZQAKgRACgWQAFglAPgYQATgdALghQALghAUgbQASgbASgcQASgeAUgVQAWgWAcgSQAWgOANgYQAAgBABgBQATgUAZgSQAbgSAYgVQAcgZAcgOQAdgQAWgSQAZgVAhgKQAkgJAggDQAogEAaAUQAOALAGARQAKAgAAApQgBAlgKAeQgKAegSAcQgRAagNAbQgPAfgPAcQgMAWgKAWQgIATgKAPQgRAYgIAgQgFASgCAPQgBAGAAAGQgBAiAbAVQALAIAOACQAmAFAngBQAnAAAegWQANgKAMgJQAagTAegXQAdgVAXgYQAUgUAdgUQAegUAbgZQAQgOAOgLQAYgTAXgVQAXgVAagQQAcgRAbgUQAbgTAjgMQAigNAjgFQAqgFAeAQQAeARAIAfQAEAOgBAMQgDAkgTAhQgSAhgRAYQgRAagbAaQgYAXgYAaQgXAYgUAWQgaAagcANQgeAOgcASQggATgUAbQgIALgKAEQgdAOgBAsQAAAUADASQAAABABABQAPAdAWASQAaAVAiANQAiANApgHQAlgHAdgLQAkgNAdgXQAfgXAegWQAcgUAhgJQAhgKAqACQAoACAAApQAAAmgQAaQgTAfgTAWQgXAagPAcQgRAhgLAbQgMAggDAjQgDAmAYASQALAIAKABAIWpoQgBgDAAgDQAAgGACgGQAJghAQgWQATgZAWgYQATgVAWgaQAVgZAVgUQAXgWAZgbQAWgYAegQQAcgPAagaQAYgaAQgXQATgbACgnQABgngUgeQgUgegagUQgUgRgegEQgngFgiANQglAOgdANQgcAMgiATQgeARgcAUQgcATgdAUQgcATgaAaQgYAZgUATQgXAWgRAPQgbAWgRAXQgUAaghAXQgbASgaAPQgdAQglgNQgegKgHgmQgBgBAAgBQgPgeAKghQAMgjALgfQALgdAPgcQAOgbARgfQAPgbAQgaQAPgaATgXQAVgZAHgjQAIgmgRgeQgPgbgbgWQgdgWgigCQgkgDggALQgZAIgaAHQgHACgGACQggAJgfAPQgbANgeAOQgfAPgWAUQgUATgfARQgbAPgTARQgEADgDACQgVAQgQAVQgRAWgWAYQgUAWgTAbQgRAYgNAdQgOAegQAZQgNAUgHAbQgJAhgNAeQgNAegGAgQgBAJgDAGQgDAHgFAFQgCACgCACQgDACAAADAIWpoQAAACAAACQAIgIAAgCAOaj7QAAAAAAAAQgCgBgBgBQgIgBgIgJQgVgbARgmQANgeAVgaQAVgZAbgVQAbgTANgZQAPgbAOgdQAPgfgPgmQgNghgagUQgYgRgegQQgigTglAMQgjAMgjAPQghAOgeALQggAMgZAYQgaAYgjAJQgjAJgkgJQgfgIABglAj0rsQAcgRAbgPQAPgJAVADQAtAGAqAOQAsAPAbAdQAeAfgDA0QgDAxAEAvQADAwACAxQABAyAVAeQANATgIAJQAqgJApgIQAugIAxgDQAsgDAVAXAE+lUQAWAVAhARQAnATAfAaQAgAaAYARQAiAYAhAVQAjAXAcAjQAeAmAUAfQAXAigKAvQgLgEgJgHQgCgCgCgCQgRgNgLgVADZkRQAVgFAZAAABBlSQgCACgDACQgJAFgRAAQgUABgWADQgqAFgqAFQgCAAgDAAQgBgCgCgCQgBgBgBAAQgFgjgPgoQgOglAIgmQAAgBABgCQAAgCABgCQAAgBAAAAQAGgVABgeQABgkgKgbQgOghgigSQgggrgYghQgFgHgHgFQgFgEgDgDQgCgCgBgBQAGgEAFgDQgJgOAIgTQAPgkAigWADZkRQgJACgJADQgbAJgeAGACLj8QgNADgOACQgqAHguALQgTAFgRAFQgBABAAAAQgUAGgRAHQgBABABABQgBACABACQACAAACABQAGADAEAUQALAtgDAsQgBAdAKASQACABACABQAhARAoAQQAnAOAaAdQAaAdASAmQARAlABAyQACA1geAiQgcAhgmAIQgBABAAAAQgrAJgoAAQgFAAgEAAQgBgEgCgDQgNgagegOQAbgSAhgRQgQgMgTgFQACgOAHgMQgJgSgSgLQAGgMANgJQgVgOgagLQgCgBgBAAQgFgCgGgCQgNgFgRgJQgCgBgCgBQgKgFgKgGQgWgOgVgSQgcgZgigcQgVgPgNgXQgPgbgdgDQghgEgYgQQgggWAIgzQAAgBABgBQABgMABgNQAGAIAIAHQgCgPABgRQgJABgJABQgyAFgpAJQgtALguAGQguAGgyAAQgkgBgQgZQgWgkAJg0QAHguAMgoQALgqAGgjQAAAAABgBACQj4QAJAKANANQARARABAWQABAsAEAsQAFAsAvAHQgyACgegeQASA1A5gDQgOAHAAAJQAcAMgcAHQgvALgogNQgsgNgNgtQgFgSAIgXQALgggggHQgZgGgPgMQgdgagEgsAIdhUQgBgBgBgBQgPgKgVgJQgqgRghgWQghgXgqgVQgngTgfgTQglgVgdgaAIdhUQAEADADACAOaj7QgFADgDAAQABACACACQAUAaAiAFQAhAGAjAKQAjAKAeAWQAaAUAeAUQAdAUAJAkQAJAigEAlQgBARgFAQQgEAPgIAOQgDAHgHAFQgCABgBAAQgBABAAABQgQAZgWASQgXAUgVAZQgUAYghAOQgcALgjAPQglARgUAZQgJAMgJADQgCABgBABQgZAOgeALQggALgXARQgaATgbATQgbASgdAQQgeARgbAWQgaAVgXAVQgaAWgXAVQgYAWgLAhQgLAhgBAlQgBApAMAcQAEALALALQAWAXAnANQAkAMAogEQAngDAjgLQAkgMAfgOQAcgNAfgRQAfgSAbgYQAXgWAhgQQAggRAnAAQAugBAIAlQAIAlgRAcQgQAbgZAVQgZAVgaAcQgFAGgFAEQgXATgeAPQgLAGAQAMQALAJABAPQAbgTAfgSQAjgUAeghQAbgdALghQAFgPAFgPQABgFACgEQABgJAAgKQAAgigLgaQgOghgagSQgagSgoAWQgfAQgdARQgeASgcAUQgeAVgjANQggAMgdAMQgiAOghALQgiAKgngJQgmgJgOghQgOggAFgqQADgiATgdQAQgaAQgaQAQgaAggUQAagQAcgPQAdgPAegYQAbgWAbgPQAhgSAegLQAcgKAagWQAYgWAbgOQAbgPAWgUQAXgVAWgRQAWgRATgUQACgDADgDQASgRAUgTQAZgXAMgeQAHgPAFgPQAFgTADgTQAGglgKggQgLghgXgeQgXgeghgNQglgPgegNQgigPgkgHQghgGgcgUgAJ+AqQAEgEAEgEAKgAcQAPAcgOAhQgTAtgugVQAigZgEguQgaAXghARQgJghArgRQAPgFgBgQQAAgsgegbQgOAkgFAjQgBAIgEAGQgbAiACg1QACgwgJgqABbFBQANAnAMAkQAOAqANArQAKAjANApQANApALAmQANArATASQABABACABQAcAWAiAQQAlARAWAgQAZAkARAfQAVAmAHAtQAHArAKArQAKArASAiQARAgAoAOQACAAACABQAqAFAGAvQAEAlAEAuQACAeAQAWQAYAigiAiQgPAQgagBQgTgBADgbQgfgogSglQgSglgSglQgLgYgMgZQAIAIAHAIAGeSeQgKgJgJgIQgagZgXgmQgWgmgYghQgXgggPgiQgSgngZgfQgWgZgQgcQgDgFgDgGQgCgDgCgEQgWgkgRghQgSgigkgVQglgWgbgfQgfgjgTgdQgTgegbgmQgYgjgMgqQgLgngPgpQgOglAFguQgBAAgBgBQAAAAgBAAQgUgOgfgPQgogUghgZQgigZgpgZQgkgWgagaQgXgXgfgbQgBgBgBgBQgsAIgvgBQgxgCgqgKQgugMgjgSQgngUgkgTQgjgSgtgQQgqgPgtAQQg0ASgagmQgLgPgPgRQgZgcgdgfQgZgcgdgUQgegVAGgcQAAgBAAAAQAnACAnAOQAjAOAmAQQAnASApAMQAqANAgAWQAeAUAwAFQAwAFAlAJQArALAuAGQAuAFAnARQAnASAsAGQAqAHAhAVQAjAVAlAPQAqARAkAOQAmAPAgAQQAdAPAcALAHgR5QgWAGAUAQQACgFAHAAAGeSeQAFACACAEQgCgBgCgCQgCgBgBgCgAq4naQgCgBgCAAQgjgKgigBQgoAAgfAJQgiAJgPAeQgPAeADApQACAiALAbQABADABACQACAEACADAqxntQgXgEgZgLQgggPgnABQgjACgkAJQgXAFgLAdQgIAWgGAXQgLAmALAgQANAlAVAVQAFAGAGAEQAFAIAGAEQAGAEAIACAkoszQAGAsAVAdQgCgGAAgGQABguANgqAj0rsQACACACACAj8riQgGADgGADQgWANgSATIAAAAQgDACgCACQgDACgDACQgCACgCABQgDAEgDAEQgCACgBADQgEAIgGAGQAAABAAAAQgCADgCACQgFAmAfAQQAOghgIgyQAAgBgBgBQgCAAgBABQgBAAgBABQgFACgEACAlWqQQgLALgQAGQgPAGgOAFQgBAAgCAAQgZgBgRAMQAWAVAYAXQADAFADAFQAJATABAdQAAAPACAOQAAABAAABQAAAEABAFQADAZAGAbQADAQASAPQAeAZAdgKQAIgDAHgFQAegUAagdAkIrcQgEgIgBgGAplrqQgTgJgFgZQAogNALgqQAAgCABgBQgdgMgYASQgngWglAnQgaAdAPAcQAOAbATAOQAgAYAOAlQAOAkgKAZQgRAogSAkQgHANgFANQgEAKgDAJQgFAPgEAPQgCAHgBAFQAAACAAABQABAIAEABAoOr8QAJgOAGgTIAAgBQAAAAABgBIAAAAQAGACAFAEQAIAHABANQABAIgCAJQAAAOACANQAIAsgfAKQgKADgIAEQgGgXAAgaQAAgcAMgSAoTsRQgBACgBABQgBABAAABQAAABgBABQgRAVgMAVQgBABAAAAQAAAAAAABQgCAEgBAFQgVAFgCgdQgDgrApgHQA6gJgkgdQgdgHgSAHAp+tAQgEAEgFAEQgWAXgOAcQACAZAPACAo4rVQgDAKACANQAEAZAKAcQACAGACAGQAKAbALAgQANApgRAbQgRAbgrgBQgMgBgLAAQgCAKAAALQAlAAAcgHQAkgJANgiQAKgdgLgpQgKghgKgiQgDgIgBgJAorqJQgEAEgCAEQgUAfgGAqQgEAXgMAVQgKAQgEAXAprnQQgBAMAAANQACAwgIAqQgDAQgFAQQgRA6A6gIQArgGAxgHQAsgFAogRQAkgQArgBQAggBAWALQAAgCAAgDQAAgDAAgDQgEgSgBgnAiGk7QgEgCgEgFQgWgdgCg0QgCg2ApgQQAAgDABgCAh0k6QAEgCADgEAiGk7QAJABAJAAQgJAGgJgHgAgyjHQgEABgEAFQgDAFgEAHQADgGgBgJQgGg7glAmQANgegGgdQgXAsghgnQgLAngagUQgEAZABASQg1gQABAuQgIgLgFgNQgKAHgFAIQgCADgCAEAhhk7QgJABgKAAAkck1QACABACABQAJAFAHAHAkTi8QATgqgtgCQACgPgFgIQgLAQgXAJQgGgFgBgJQgMAwgWgiQgFAVgBASQAGgBAHgBAkNhgQAUAmAhARQATAKAgABAiZETQAhAXAsANQAkAMAjABAAHFFQgGAAgGgB");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AB0EwIAAgGIgNgBQgNgagegOQAbgSAigRQgRgMgTgFQACgOAHgMQgJgSgSgLQAGgMANgJQgVgOgagLIgDgBIgLgEQgNgFgQgJIgEgCIgUgLQgWgOgVgSQgcgZgigbQgVgQgNgXQgPgbgdgDQghgEgYgQQgggWAIgzIABgCIACgZIAOAPQgCgPABgRIANgCIgNACQABgSAFgVQAWAiAMgwQABAJAGAFQAXgJALgQQAFAIgCAPQAtABgTArIgEAHIAEgHQAFgIAKgHQAFANAIALQgBguA1AQQgBgSAEgZQAaAUALgnQAhAnAWgsQAGAdgNAeQAlgmAGA7QABAJgDAGIAHgMQAFgFADgBIAEABQAGADAEAUQALAtgDAsQgBAcAKATIAEACQAiARAoAQQAnAPAaAcQAaAdASAmQARAlABAyQACA1geAiQgcAhgmAIIgBABQgpAJgnAAIgDAAgAhrhEQATAKAgABQgggBgTgKQghgRgUgmQAUAmAhARg");
	this.shape_2.setTransform(-10.9,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9966FF").s().p("AMHR1QgPgMAKgFQAfgQAXgTIAKgJQAagcAYgVQAZgWAQgaQARgcgIgmQgIglgtABQgnABghAQQggARgXAVQgbAZggARQgfASgbAMQgfAPgkALQgkALgmAEQgoAEglgNQgmgNgXgXQgKgLgFgKQgMgdACgpQABgkAKghQALgiAZgVIAxgsQAXgVAagVQAagVAfgRQAcgQAbgTIA1glQAYgSAggLQAegKAYgOIADgCQAKgDAJgMQAUgaAlgQIA/gbQAggNAVgZQAVgZAXgTQAWgTAPgYIACgCIACgBQAIgFADgHQAHgOAFgQQAEgPACgRQAEgmgJgiQgKglgdgTIg4gpQgdgVgjgLQgkgKghgFQghgFgVgbIgDgEQgJAAgLgIQgYgSADglQACgjANggQAKgcASghQAPgcAXgaQASgVATgfQARgbAAglQgBgqgngBQgqgCgiAJQggAKgcATIg9AuQgeAXgjANQgeALglAGQgoAHgigNQgigNgagUQgWgSgPgdIgCgCQgDgSABgVQABgsAcgNQALgFAIgKQATgbAggUQAdgRAegOQAcgNAZgbIArguQAYgaAZgXQAagaASgZQARgZASggQATgiADgjQABgMgEgPQgIgegfgRQgegQgpAFQgkAEgiANQgiANgbATQgcATgbARQgaARgXAUQgXAWgYASQgPALgPAOQgbAZgeAVQgeAUgUAUQgXAXgcAVIg4AqIgaATQgdAXgnAAQgnAAgmgFQgNgBgMgJQgagUAAgjIABgLQADgPAEgSQAJggARgZQAKgPAIgSQAKgWAMgWQAPgcAOgfQANgcARgaQASgbAKgeQAJgfABglQABgpgLggQgFgRgOgKQgZgUgpADQggADgkAKQgiAKgZAUQgWATgdAPQgbAOgdAaQgYAUgaATQgZASgUATIgBADQgMAYgWANQgdASgVAWQgVAVgSAfQgRAcgTAaQgTAbgLAiQgLAggTAdQgQAYgEAmQgDAWgKARQgEgEgGgDIgBAAIAAACIAAAAQgHAUgIAOIACABQgMASAAAbQAAAaAFAYIAEAQIAUBEQAMAogLAdQgMAiglAJQgcAIglgBIADgVIAWABQAsACARgbQAQgcgNgoQgKgggLgcIgEgLQgJgcgFgaQgCgMADgLIAEgJIAAAAIAAgBQANgVARgVIABgCIAAgCIACgEIAFgEQAEgEADgHQADgHACgIQAFghANgeQANgeAJghQAIgaANgVQAPgYAOgfQAOgcARgZQASgbAUgVQAXgYARgXQAQgUAVgQIAGgGQAUgQAagPQAggSAUgSQAVgUAggPIA5gcQAegPAggIIAPgEIAzgQQAggKAjACQAhACAdAXQAcAVAOAbQARAfgIAmQgHAigVAaQgTAWgPAaIgeA2IgfA6QgPAcgLAdIgWBBQgLAiAQAeIAAACQAHAlAfALQAkANAdgRQAagPAbgSQAggWAVgbQARgWAbgXIAogkIAsgsQAagbAbgTIA5gnQAcgTAegRQAigTAdgNQAdgNAkgOQAjgNAnAFQAdAEAVARQAZAVAUAdQAVAegCAoQgBAmgTAbQgQAXgZAaQgaAbgcAOQgeAQgWAYQgYAbgXAXQgVAUgWAZIgpAuQgVAYgTAZQgRAXgJAgIgBAMIAAAHQgBAlAfAIQAlAJAjgJQAigJAagZQAagXAfgMIBAgaQAigPAkgMQAkgMAjATQAdAQAYASQAbATANAhQAOAmgPAfQgOAdgPAcQgNAYgaAUQgbAUgVAZQgVAagOAeQgRAmAWAbQAHAKAJABIACABIABABIgCABIAAAAIgGABIAAAAIgBgBIABABIAAAAIAGgBIAAAAIACgBQAbATAhAGQAlAHAiAOIBCAcQAhAOAYAdQAXAeAKAiQALAfgGAnQgDATgGASIgLAfQgNAdgYAXIgnAlIgFAFQgSAVgWAQQgXARgWAVQgWAVgbAOQgcAPgYAVQgZAWgdALQgeALggARQgcAPgbAXQgdAYgdAPQgcAOgaARQggAUgQAZIggA0QgTAegEAiQgEApAOAgQAOAiAlAIQAoAKAigLQAggKAigOIA9gYQAjgNAegVQAdgVAegSIA7ghQAogVAaASQAaASAOAhQALAZABAjQAAAKgCAIIgDAJIgJAfQgLAhgbAdQgeAggkAUQgeASgcAUQAAgQgMgJgAwshxQgMgfALgmQAHgYAIgWQAKgcAXgGQAlgJAigBQAogCAgAPQAYALAXAFIgGATIgFgCQgjgKgiAAQgogBgfAJQgiAKgPAeQgPAeADAoQADAjALAbIgGACQgUgVgNgmg");
	this.shape_3.setTransform(14.1,-25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGgHIABAAIABAAIACgBQAIgBADAIIABABIgCAEQgBADgDACIgCAAQgRAAAJgQg");
	this.shape_4.setTransform(-33.2,-65.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQgLIAEgEIAAgBQAGgGAEgIIACgGIAJgEIACAAIAEABQAIAwgOAiQgegRAFglgAgLgOQgKARAVgBQABgCACgCIABgFIAAgBQgDgIgIABIgDABIgBAAIAAAAgAALgoIADgCIABADIgEgBgAALgoIAAAAg");
	this.shape_5.setTransform(-32.6,-64.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AKOOpIgEgDQAFACACAFIgDgEgADqBTIgDgGIANAAIAAAGIgKAAgACsm8IAGADIgHAMQACgGgBgJgAqRooIAGgBIACAEIADAHIgLgKgABloyIATAAQgFADgEAAQgFAAgFgDgACIo3IAIAEIgFAAIgDgEgAnaqlIACgBIABgCIAAADgABsrRIACgFIgCAJIAAgEgABtrVIABgBIgCAFIABgEgAhSuoIADgEIAFAFIgEABIgCABIgCgDIACADIgIAEIAGgHgAhQulIAAAAg");
	this.shape_6.setTransform(-23.7,24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("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");
	this.shape_7.setTransform(-26.1,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("ACOGLQgsgOgMgtQgFgSAIgYQALggghgHQgYgFgPgNQgegagEgsIABAAQARgGATgEQAvgLAqgHIAbgGIADAAQABACABACQAIALANAMQASASAAAWQACAsAEArQAEAsAvAIQgyABgegdQATA1A4gEQgNAHgBAJQAcAOgbAGQgWAGgVAAQgXAAgWgHgAhdBDIgBgCQgFgjgPgmQgPglAJgmIACgJQAFgVABgeQACgjgLgbQgNgigigRIg5hMQgFgHgGgFIgJgIIgCgDIALgHIADAFIgDgFIA3ggQAOgJAVADQAtAGAqAPQAsAPAcAdQAeAfgDA0QgDAwADAvQAEAwABAxQACAyAVAeQAMASgIAJIgFAEQgIAFgSABIgqADIhTAKg");
	this.shape_8.setTransform(-0.8,-38.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.3,1,1).p("AGzpcQADABACACQAcASAJAgQAIAgAOAjQAOAhAZAbQAWAZAYAbQAWAaAmAGQAiAFAmgIQAOgDANgEQACgBACgBQAPgGANgJQAHgEAEgIQABgBAAgCQABAAABgBQAWgSARgYQARgZAWgXQAWgXAKgiQAJgdALgkQAMgnAYgWQALgLABgJQABgCABgCQAMgZAHgfQACgIACgHQADgMAEgKQAFgLAGgKQAHgNAIgNQADgFADgGQAFgKAGgKQAPgdANgeQAOggATgcQASgcASgZQAUgdASgZQATgbAggOQAggOAkgFQAogGAeAJQALAEAMAJQAZAUARAlQAQAjABAoQAAAngHAkQgEAVgGATQgEAPgFAOQgJAdgOAhQgOAhgWAdQgTAZgNAiIAAAAQgNAiAEAnQAEAtAlAFQAmADAagTQAZgTATgbQASgbAZgcQAGgHADgEQAFgIAEgJQALgSAIgWQAEgLAMAMQABABABABQAKAKAQgBQgRAdgOAhQgRAlgdAhQgaAegfAPQgPAGgPAGQgEACgEACQgIADgKABQgjADgagIQgigLgVgYQgVgYARgqQAIgTAIgTQAGgMAFgMQAPggARgeQASghAJgkQAHgcAIgbQABgEABgEQALgjAHghQAGgjgNgmQgNglgigKQgigLgoAJQgiAHgbAWQgYATgYASQgYATgQAiQgOAbgMAeQgKAbgSAcQgCAEgCADQgUAdgMAdQgEAKgDAKQgJAXgFAWQgEANgFAMQgEAIgEAJQgFAIgFAHQgTAagLAdQgMAdgSAYQgSAYgPAYQgOAYgSAVQgDACgCADQgPAUgRAWQgVAbgcAQQgOAHgPAHQgDABgEACQgPAFgOAFQgmAKgggHQgigHghgUQgfgUgRggQgTgigQgdQgSgggLgjQgKghgWgZQgBAAAAAAQgBgCgBgBQgCgIgKgGQgdgTgkAVIAAAAQgcARgYAXQgLAMgLAOQgJAMgJAPQgQAcgXAQQgaARgbARQgeASgngKQgigJgWgZQgKgLgKgMQgKgMgJgOQgWggAIgmQAIggAIggQABgEACgEQAKgjAIgfQAJghAVgbQAVgdAFgjQAGgkgNgjQgMgegkAFQgDAAgDAAQgHABgFACQgRAHgPAJQgLAHgIAIQgXAVgWAYQgSAWgXAYQgWAXgSAXQAAAAgBABQgUAZgYAbQgVAZgNAfQgMAdgXAdQgXAbgVATQgLAIgMAHQABANABAOQADAwACAxQABAyAVAeQAMASgHAKQAqgKApgHQAugIAxgDQArgDAWAXQAEABADACQABABACACQAWAVAhARQAmATAfAaQAgAaAYARQAiAYAhAVQAjAXAcAjQAeAmAUAfQAXAhgKAwQgLgEgJgHQgCgCgCgCQgRgOgLgVAm11GQAUgOAUgLQASgKAOgMQAGgFAGgFQASgMAXgJQAHgDAHgCQAKgDAIgDQAGgBAFgBQAPgCANAEQAIACAIAFQAHAEAHAHQAJALADANQABACAAABQACAKACAKQABADAAACQAFAYACAYQAEAlgRAfQgBAAAAAAQAAACgBABQgCADgCADQgGALgGAKQgNAVgOAYQgFAIgEAHQgSAfgVAZQgKAMgJAPQgIAMgHAPQgCACgBADQgQAdgVAbQgLAQgJAOQgBABAAABQgQAagTAZQgSAZgOAcQgOAdgQAdQgLAUgIAXQgDALgDALQgJAjgBAkQAAApATAdQAUAcAfAFQAPACAMgCQAjgHAfgWQAFgEAFgEQAYgRATgQQAXgUAXgdQAUgbAYgaQAWgaATgWQADgEADgDQATgZAIgZQALggAPgeQAQgiAYgWQAKgJADgLQAIgVAXgJQAKgEANgBQAUgDASABQABABABAAQAfAMAUAUQAXAYAQAgQARAhgDApQgDAlgHAfQgJAkgUAgQgUAhgTAgQgQAegGAiQgGAiAGApQAGAnApgDQAlgEAZgUQAdgWATgUQAXgaAbgSQAPgKAOgJQAPgIANgHQAXgMAagHQAIgCAIgBQAlgHAUAWQAJAKACAJAjL0UQgBgSgJgUQgBgCgBgCQgMgUgYgGQgGgCgHAAQgCAAgBAAQgfgNggAPQgJAEgJAEQgEABgDACQAfgIAdgCQAogEAaAUQAOALAGARQADALADAMgAoKr2QACgHACgHQAJgeAQgjQANggARgeQAQgcAPgeQABgBABgBQAQgeAXgcQAMgOAKgNQAJgLAIgLQAFgFAEgGQANgSAKgOQAUgeAUgTQAJgIAIgKQAOgRAMgXQAKgRAIgSQAFgKAFgLQAAgBABgCQAFgMAAgNAAeuuQACAAACAAQgHAIgCAAAlapUQABgIAAgIQADg0gegfQgcgdgsgPQgdgKgegGAihj2QAWgFAZAAAk4k3QgCACgDACQgJAEgRABQgUABgXADQgqAFgqAFQgCAAgDAAQgBgCgCgCQgBgBgBAAQgFgkgPgnQgOglAIgmQAAgBABgCQAAgCABgCQAAgBAAAAQAGgWABgdQABgkgKgbQgOghgigSQgggrgYghQgFgHgHgFQgFgEgDgDAihj2QgIACgJADQgbAJgeAGQgBABgCAAQgNADgOACQgqAHguALQgUAEgSAGQAAAAgBABQgTAGgRAHQgBABAAABQAAACABACQACAAABABQAHADAEAUQALAtgDAsQgBAcAKATQACABACABQAiAQAoAQQAnAPAaAdQAaAdASAmQARAlABAyQACA1geAiQgcAhgmAIQAMAnANAkQAOAqANArQAKAjANApQANApALAmQANArATASQABABABABQAdAWAiAQQAlARAWAgQAZAkAQAfQAVAmAHAtQAHArAKArQAKArASAiQARAgAnAOQADAAACABQApAFAHAvQAEAlAEAuQACAeAQAWQAYAigiAiQgPAQgagBQgTgBADgbQgfgogSglQgSglgSglQgLgYgMgZQAIAIAHAIAjrjiQACACAAADQAIAKAOANQARARABAWQABAsAEAsQAFAsAvAHQgyACgegeQASA0A5gDQgOAHAAAJQAcANgcAHQgvALgogNQgsgOgNgsQgFgSAIgXQALgggggHQgZgGgPgMQgfgagEgsACjg5QgBgBgCgBQgOgKgVgJQgqgRghgWQghgXgpgVQgngTgfgTQglgVgegaACjg5QAEACADADAGypTQACgFgBgEAEDBFQAFgEAEgEAEmA3QAPAcgOAhQgTAtgugVQAigZgFguQgZAXghARQgJghArgRQAPgFgBgQQAAgsgegbQgOAjgFAkQgBAIgEAGQgbAiACg1QACgxgJgpAkeFcQgBAAAAABQgrAJgoAAQgFAAgFAAQgBgEgCgDQgNgagegOQAbgSAigRQgRgMgTgFQACgOAHgMQgJgSgSgLQAGgMANgJQgVgOgagLQgCgBgBAAQgFgCgGgCQgNgFgRgJQgCgBgCgBQgKgFgKgGQgWgOgVgSQgcgZgigcQgVgQgNgXQgPgagdgDQghgEgYgQQgggWAIgzQAAgBAAgBQACgMABgNQAGAIAIAHQgCgPABgRQgJABgJABQgyAFgpAJQgtALguAGQguAGgyAAQgkgBgQgZQgWgkAJg0QAHguAMgoQALgqAFgjQABgBABAAQABgBAAgBQABgFACgHQAEgPAFgPQgCgBgCAAQgjgKgigBQgoAAgfAJQgiAJgPAeQgPAeADApQACAiALAbQABADABACQACAEACADQgGgFgFgFQgVgVgNglQgLggALgmQAGgXAIgWQALgdAXgFQAkgJAjgCQAngBAgAPQAYAKAYAFQAFgNAHgNQASgkARgoQAKgZgOgkQgOglgggYQgTgOgOgbQgPgcAagdQAlgoAnAXQAYgSAdAMQgBABAAACQADgBACAAQABgBABAAQATgHAdAHQAkAdg6AJQgpAHADArQACAdAUgFQACgFACgEQAAgBAAAAQAAAAABgBQAMgVARgVQAAgBABgBAAkS5QgKgJgJgIQgZgZgXgmQgWgmgYghQgXgggPgiQgSgngZgfQgWgagQgbQgDgGgDgFQgCgDgCgEQgWgkgRghQgSgigkgVQglgWgbgfQgggjgTgdQgTgegbgmQgYgjgMgqQgLgngPgpQgOgmAFgtQgBAAgBgBQgBAAAAAAQgUgOgfgPQgogUghgZQgigZgpgZQgkgWgagaQgXgXgfgbQgBgBgBgBQgsAHgvAAQgxgCgqgKQgugMgjgSQgngVgkgTQgjgRgtgQQgqgPgtAQQg0ASgagmQgLgPgPgRQgZgcgdgfQgZgcgdgUQgegVAFgcQABgBAAAAQAnABAnAPQAjAOAmAQQAnASApAMQAqANAgAWQAeAUAwAFQAwAFAlAJQArALAuAGQAuAFAnARQAnASAsAGQAqAHAhAUQAjAVAlAQQAqARAkAOQAmAPAgAQQAdAPAcALABmSUQgWAGAUAQQACgFAHAAAAkS5QAEACADAEQgCgBgCgCQgCgCgBgBgAuOr2QADgCACgCQAEgFAEgHQADgHABgIQAGggANgeQANgeAJghQAHgbANgUQAQgZAOgeQANgdARgYQATgbAUgWQAWgYARgWQAQgVAVgQQADgDADgCQAUgRAbgPQAfgRAUgTQAWgUAfgPQAegOAbgNQADgCAEgCAlj1NQgUAJgSAJQgTAJgSAMQgCABgBABQgSAOgWAMQgcAOgcAZQgYAVgbASQgZASgTAUQgBABgBABQgMAYgWAOQgcASgWAWQgUAVgSAeQgSAcgSAbQgUAbgLAhQgLAhgTAdQgPAYgFAlQgCAWgKARQgFgEgGgCIAAAAQgBAAAAABIAAABQgHATgIAOAzskLQAEAHAHAFQAGAEAIACAoKr2QgFgBgEAAQgVgDgPAJQgbAPgcARQgKgOAJgTQAPgkAigWAqIrPQgBgGAAgGQABguANgqAqisYQAFAsAVAdApurRQACACACACApurRQgFADgGAEQABABACACQgGACgGAEQgWAMgSAUIAAAAQgDACgCACQgEACgCACQgCACgCABQgIgGgJgFAqwqSQANAGAMAJQAMAHAIAJQACADABADAq2qSQgFABgEADQADgEADgEQABABACADQABgBAAAAAqwqSQgDAAgCgBQACgBACAAQAAABABABQAIAygOAhQgfgQAEgmAr0nAQgBgFAAgEQAAgBgBgBQgBgPAAgOQgBgdgJgTQgDgGgDgEQgYgXgWgVQARgMAZABQABAAACAAQAOgGAPgFQAPgGALgLQACgDADgCQAAAAAAgBQAGgGAEgIQABgDACgCAlaofQgSAIgWAEQgnAFgggRQgggRgXgXQgTgSgHgdQgJgmAJgkQAIgdAIgZAqCrBQgEgIgCgGAuOr2QgDACABADQAAgBABgBQAAgCABgBgAttr+QAIAHABANQAAAIgBAJQAAAOACANQAIAsgfAKQgKADgJAEQACAJADAIQAKAiAKAhQALApgKAdQgNAigkAJQgcAHgmAAQAAALAAAOQACAwgIAqQgDAQgFAQQgRA6A6gIQArgGAxgHQAsgFAogRQAkgQArgBQAfgBAXALQACABACABQAIAFAIAHAvEsoQgMAqgnANQAFAZATAJAv4slQgFAEgEAEQgWAXgOAcQACAZAPACAulpuQgKgcgEgZQgCgNACgKAvjnKQALAAAMABQArABARgbQARgbgNgpQgLgggKgbQgDgGgBgGAuGrgQgMASAAAcQAAAZAFAYAvjnKQAEgXAKgQQAMgVAEgXQAGgqAUgfQACgEAEgEAvmm1QABgMACgJAwrnSQgEAJgDAKAw+mVQAAACAAABQAAAHAFACAn4nDQgBACAAADAoAkgQgEgCgEgFQgWgdgCg0QgCg2ApgQAnukfQAEgCADgEAoAkgQAJAAAJABQgKAFgIgGgAmsisQgEABgEAFQgDAEgEAIQADgGgBgJQgGg7glAmQANgegGgdQgXAsghgnQgLAngagUQgEAZABASQg1gQABAuQgIgLgFgNQgKAHgFAIQgCADgCAEAnbkgQgKABgJAAAr0nAQAKALAVADQATADATgEQATgDAOgMQAIgIAEgHApUmXQgaAdgeAUQgHAFgIADQgdAKgegZQgSgPgDgQQgGgbgDgZAqWkaQAAgCAAgDQAAgDAAgDQgEgSgBgnAqNihQATgrgtgBQACgPgFgIQgLAQgXAJQgGgFgBgJQgMAwgWgiQgFAVgBASQAGgBAHgBAqHhFQAUAmAhARQATAKAgABAoTEuQAhAXAsANQAkALAjACQAHABAGAA");
	this.shape_9.setTransform(37.8,-2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9966FF").s().p("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");
	this.shape_10.setTransform(51.9,-88.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQgLIAEgEIAAgBQAGgGAEgIIACgGIAJgEIACAAIAEABQAIAwgOAiQgegRAFglgAgLgOQgKARAVgBQABgCACgCIABgFIAAgBQgDgIgIABIgDABIgBAAIAAAAgAAPgnIAAAAgAALgoIADgCIABADIgEgBg");
	this.shape_11.setTransform(-32.6,-64.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FF00").s().p("AKOOpIgEgDQAFACACAFIgDgEgADqBTIgDgGIANAAIAAAGIgKAAgACsm8IAGADIgHAMQACgGgBgJgAqRooIAGgBIACAEIADAHIgLgKgABloyIATAAQgFADgEAAQgFAAgFgDgACIo3IAIAEIgFAAIgDgEgAnaqlIACgBIABgCIAAADgABsrRIACgFIgCAJIAAgEgABtrVIABgBIgCAFIABgEgAhSuoIACADIgIAEIAGgHgAhQulIgCgDIADgEIAFAFIgEABIgCABIAAAAgAhSuoIAAAAg");
	this.shape_12.setTransform(-23.7,24.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("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");
	this.shape_13.setTransform(-26.1,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("ACOGLQgsgOgMgtQgFgSAIgYQALggghgHQgYgFgPgNQgegagEgsIABAAQARgGATgEQAvgLAqgHIAbgGIADAAQABACABACQAIALANAMQASASAAAWQACAsAEArQAEAsAvAIQgyABgegdQATA1A4gEQgNAHgBAJQAcAOgbAGQgWAGgVAAQgXAAgWgHgAhdBDIgBgCQgFgjgPgmQgPglAJgmIACgJQAFgVABgeQACgjgLgbQgNgigigRIg5hMQgFgHgGgFIgJgIIgCgDIALgHIADAFIgDgFIA3ggQAOgJAVADIAJABIgPA3QgKAjAJAmQAIAdATATQAXAXAfARQAgARAngGQAWgDASgJIABAbQAEAwABAxQACAyAVAeQAMASgIAJIgFAEQgIAFgSABIgqADIhTAKgAhAjIQgfgEgUgdQgTgcABgqQAAgjAKgkIAGgVQAeAGAcAKQAsAPAcAdQAeAfgDA0IgBAQIgKAHQgfAXgjAHIgMABIgPgCg");
	this.shape_14.setTransform(-0.8,-38.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("ABGAPQgFgQgPgLQgZgUgoAEQgcACggAIIAHgDIASgIQAhgOAdAMIADAAIAOACQAYAGALAUIACAEQAKATAAASIgGgXg");
	this.shape_15.setTransform(9.8,-136.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.3,1,1).p("ADPlDQAEABADACQACABABABAsqmYQABgBAAgBAqosvQgBAAgBABQgCAAgDABAm1qmQAJAGAIAGQABAAACADAmgqYQADABACABQANAFAMAJQAMAHAIAJQACADABADAnfnFQAKALAVADQATADATgEQATgDAOgMQAIgIAEgHAotgXQgDABgDAAQg6gDgaApQgQAaAAAiQAAAJAFAJACMMvQgPACgRgCQgHgBgIgBQgjgHgbgZQgZgYgWgfQAAAAABgBAHCJuQgUAKgSANQgRALgVALQgCACgBACAK8FhQATgHASgMQABAAAAgBQAMgIAMABQALABALAGQALAHAJAIQAEADADAEAArjiQAAgDgCgBQgBAAgCAA");
	this.shape_16.setTransform(-4.1,22.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.3,1,1).p("AntnzQAKgRACgWQAFgmAPgYQATgdALggQALgiAUgbQASgaASgcQASgfAUgVQAWgWAcgSQAWgNANgYQAAgBABgCQATgUAZgRQAbgTAYgUQAcgaAcgOQAdgPAWgTQAZgUAhgKQAkgKAggDQAogDAaAUQAOAKAGARQAKAgAAApQgBAlgKAfQgKAegSAbQgRAagNAcQgPAfgPAcQgMAWgKAWQgIASgKAPQgRAZgIAgQgFASgCAPQgBAGAAAFQgBAjAbAUQAIAGAJADABJpjQAAgMAEgOQAMgjALgeQALgdAPgcQAOgbARgfQAPgbAQgbQAPgaATgWQAVgaAHgiQAIgmgRgfQgPgbgbgVQgdgXgigCQgkgCggAKQgZAIgaAIQgHACgHACQgfAIgfAPQgbAOgeAOQgfAPgWAUQgUASgfASQgbAOgTARQgEADgDADQgVAQgQAUQgRAXgWAYQgUAVgTAbQgRAZgNAcQgOAfgQAYQgNAVgHAaQgJAhgNAeQgNAegGAhQgBAIgDAHQgDAGgFAFQgCADgCABQgBACgBACQAAABgBABQAAABgBABQgRAUgMAWQAAAAgBABQAAAAAAAAQgCAFgBAEQgVAGgCgeQgDgrApgGQA6gKgkgdQgcgGgTAGADfAUQgJACgJACQgbAJgeAHADfAUQAVgFAZgBABHgtQArgJAogHQAugIAxgDQAsgDAVAXAFEgvQAWAWAhAQQAnATAfAaQAgAaAYARQAiAYAhAVQAjAWAcAkQAeAlAUAfQAXAigKAxQgKgFgKgGQgCgCgCgCQgQgOgMgWAp4oaQgngXglAoQgaAdAPAbQAOAbATAOQAgAZAOAlQAOAjgKAZQgRAogSAkQgHANgFAOQgXgFgZgLQgggPgnACQgjABgkAJQgXAGgLAcQgIAWgGAYQgLAmALAfQANAmAVAVQAFAFAGAFAqyi0QgCgBgCgBQgjgKgiAAQgogBgfAJQgiAKgPAeQgPAeADAoQACAiALAcQABADABACQACAEACADQAFAGAGAFQAHAEAHABAq5h+QgEgCgBgHQAAgCAAgBQABgFACgHQAEgQAFgOQADgKAEgJAl7BlQgJACgJAAQgyAGgpAJQgtAKguAGQguAHgygBQgkAAgQgaQgWgkAJg0QAHgtAMgoQAMgpAFgjQAAgBABAAAjunGQACACACACAjunGQgJgOAIgUQAPgkAigVAjunGQAdgRAagQQAPgJAVADQAtAGAqAPQAsAPAbAdQAeAfgDA0QgDAwAEAvQADAwACAxQABAyAVAfQANASgIAJQgCADgDABQgJAFgRABQgUABgWACQgqAGgqAEQgCABgDAAQgJABgKgBQgJAGgJgGQAKAAAIAAQAEgCADgDAp4oaQAYgSAdAMQAAABgBABQgLArgoAMQAFAaATAIAp4oaQgEADgFAFQgWAXgOAcQACAZAPABAoNnsQgDADAAADAoInWQAJgPAGgTIAAAAQABgBAAgBIAAAAQAGADAFAEQAIAHABANQABAHgCAKQABAOABAMQAIAsgfAKQgKAEgIAEQgGgYAAgaQAAgbAMgSAkHnFQgCgFAAgHQABgtANgqAkioOQAGAtAVAcAkCm3QgWANgSAUIAAAAQgDACgCABQgDACgDADQgCABgCACQgDAEgDADQAEgCAFgCQABAAABAAQACgBABgBQABACAAABQAIAxgOAiQgfgRAFglQACgDACgCQAAgBAAAAQAGgGAEgIQABgDACgDAlQlqQgLAKgQAGQgPAGgOAGQgBAAgCgBQgZgBgRAMQAXAWAXAXQAEAEACAGQAJATABAdQAAAOACAPQAAABAAABQAAAEABAEQADAaAGAaQADAQASAPQAfAZAcgKQAIgCAHgFQAegUAageAplirQAlABAcgIQAkgJANgiQAKgdgLgoQgKghgKgjQgDgIgBgIApjjAQAFgWAJgRQAMgUAEgYQAGgpAUgfQADgEADgEQACAGACAFQAKAcALAgQANAogRAcQgRAbgrgCQgLAAgMgBQgCAKAAALAoymwQgDAKACANQAEAaAKAcAkWgPQgWgLggAAQgrACgkAPQgoAQgsAGQgxAGgrAGQg6AIARg4QAFgRADgQQAIgqgCgwQAAgNABgMAkbhUQABAoAEASQAAADAAADQAAADAAACQACABACABQAJAFAHAGAh4i5QAGgVABgeQABgjgKgbQgOgigigRQgggsgYggQgFgHgHgFQgFgEgDgEQgBgBgCgCQAGgDAFgDAh5izQAAgCABgCQAAgBAAgBQAAADgBADQAAABgBACQgIAmAOAlQAPAnAFAjQABABABABQADACAAACAiAgVQgEgDgEgFQgWgcgCg0QgCg3ApgPAgsBeQgDABgFAFQgDAEgEAIQADgGgBgJQgGg8glAmQANgegGgcQgXArghgnQgLAngagTQgEAYABATQg1gQABAuQgIgMgFgMQgKAHgFAHQAUgqgugCQACgPgFgHQgLAQgXAJQgGgGgBgJQgMAxgWgiQgFAUgBASQAHAAAGgBAkCm3QgEgHgBgHAj2m9QgGADgGADAgsBeQACgBACABQAGADAEAUQALAtgDAtQgBAcAKASQACABACABQAhASAoAPQAnAPAaAdQAaAdASAmQARAlABAzQACA0geAiQgcAhgmAJQgBAAAAAAQgrAKgoAAQgFAAgFgBQgBgDgCgDQgMgagegPQAbgSAhgQQgRgMgSgGQACgOAHgLQgJgSgSgLQAGgMANgKQgVgOgagLQgCAAgBgBQgFgBgGgCQgNgFgRgJQgCgBgCgBQgKgFgKgGQgWgOgVgTQgcgYgigcQgVgRgNgWQgPgbgdgEQghgDgYgRQgggWAIgyQAAgBABgCQABgLABgNQAGAHAIAHQgCgOABgSACRApQgNACgOADQgqAHguALQgTAEgRAGQgBAAAAAAQgTAGgSAIQAAABAAABQgBACABACACWAtQAJAKANAMQARASABAWQABAsAEArQAFAsAvAIQgyABgegdQASA1A5gEQgOAHAAAJQAcAOgcAGQgvAMgogNQgsgOgNgtQgFgSAIgYQALgggggHQgZgFgPgNQgdgZgEgtAkHDFQAUAlAhARQATALAgABAnID2QADABADABQAXAHATAMQAjAWAlAPQAqASAkAOQAmAOAgARQAdAPAcALAkNBoQgCAEgCAEAmoF+QgDgFgDgGQgMgZgOgWQgCgDgDgEQABgBAAgBQACgGABgGAmoF+QADAIADAIQAKAYAHAXQAEAOADAOQABAGABAGQAHAmgBAhQAAAIAAAHQgCAcgBAbQgBAPgBAPQgDAnAEAvQABATAHASQAFANAIAMQAHAJAIAJQAlAogXAnQgKAQgJAUQgPAigRAnQgDAJgEAJQgJAagGAaQgGAkgdAGQAAAAAAAAQgPgkgCgqQgCggAAgjQAAgGgBgFQAAgsgFgqQgEgfADgdQABgLABgLQAGgcgJgiQgCgJgDgJQgIgYgGgVQgFgVgDgSQgCgMgCgNQgHgfgKggQgCgHgCgHQgEgOgCgOQgEgWAAgWQAAgUgDgUQgDgXgGgXQgBgEgBgFQgCgJgBgJAiTI5QgBgBgBAAQAAAAgBgBQgUgNgfgQQgogUghgYQgigZgpgaQgkgVgagaQgGgHgHgHAANJqQgGAAgHAAQgigCgkgLQgrgOgigWABhJnQANAnAMAjQAOAqANArQAKAjANAqQANApALAlQAJAcAKARQABAAABgBQASgZANgdQARglAhgWQADgCACgCQAVgOATgLQALgHAKgGQAngVAsgIQAkgFAkgIQAHgCAIgCQAhgHAcgNQAIgDAHgEQAhgRAOgoQAAgCAAgCQAGgqAvgGQAkgFAvgDQAEgBAEAAQADgBAEgBABZPlQgCgCgDgCQglgWgbgeQgfgjgTgeQgTgegbgmQgYgjgMgpQgLgogPgoQgNgmAEgtAKmFCQAPAbgOAhQgTAtgugUQAigZgEguQAEgEAEgFAKEFQQgaAXghARQgJgiArgQQAPgGgBgQQAAgsgegbQgOAjgFAkQgBAJgEAFQgbAiACg1QACgxgJgpQgBgBgBgBQgPgLgVgIQgqgRghgXQghgXgqgVQgngTgfgTQgkgVgegZADXPOQAGAKAHAHQABABACABQACACADACAHhOtQgBABgCABQgBAAAAAAQgnASgfAaQgaAWgbAQQgGADgFADQgDACgEACQgkAWghARQgKAGgKAHAOQJrIAAAAQAEAEACADQAKAOgBAUQAAATgbgDQgpAfgkASQgcAOgbANQgKAFgJAEQgYAMgZAMQAIgIAIgHANMJeQAOgFALgDAK2MYQgJAJgJAJQgJALgMAJQgTAPgXAOQgdASgcATAK8MRQgBACgCABQgCACgBACAK8MRQgEACgCAFAIjDRQAEACADAD");
	this.shape_17.setTransform(-14.8,-4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099FF").s().p("AB0EwIAAgGIgNgBQgNgagegOQAbgSAigRQgRgMgTgFQACgOAHgMQgJgSgSgLQAGgMANgJQgVgOgagLIgDgBIgLgEQgNgFgQgJIgEgCIgUgLQgWgOgVgSQgcgZgigbQgVgQgNgXQgPgbgdgDQghgEgYgQQgggWAIgzIABgCIACgZIAOAPQgCgPABgRQABgSAFgVQAWAiAMgwQABAJAGAFQAXgJALgQQAFAIgCAPQAtABgTArQAFgIAKgHQAFANAIALQgBguA1AQQgBgSAEgZQAaAUALgnQAhAnAWgsQAGAdgNAeQAlgmAGA7QABAJgDAGIAHgMQAFgFADgBIAEABQAGADAEAUQALAtgDAsQgBAcAKATIAEACQAiARAoAQQAnAPAaAcQAaAdASAmQARAlABAyQACA1geAiQgcAhgmAIIgBABQgpAJgnAAIgDAAgAhrhEQATAKAgABQgggBgTgKQghgRgUgmQAUAmAhARgAiqjQIAEgHIgEAHgAkUjaIANgCIgNACg");
	this.shape_18.setTransform(-25.1,27.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9966FF").s().p("ApHHxQgMggALgmQAHgXAIgWQAKgdAXgFQAlgJAigCQAogBAgAPQAYALAXAFIgGASIgFgBQgjgKgigBQgoAAgfAJQgiAJgPAeQgPAeADApQADAiALAcIgGABQgUgVgNglgAkUGLIADgVIAWABQAsABARgbQAQgbgNgpQgKgggLgbIgEgMQgJgbgFgaQgCgNADgKIAEgJIAAgBIAAgBQANgVARgVIABgCIAAgCIACgDIAFgEQAEgFADgHQADgGACgJQAFggANgdQANgeAJghQAIgbANgUQAPgZAOgeQAOgdARgYQASgbAUgWQAWgYARgWQAQgVAVgPIAGgGQAUgRAagPQAggRAUgTQAVgUAggPIA5gbQAegPAggJIAPgEIAzgPQAggLAjADQAiACAdAWQAcAWAOAbQARAegIAmQgHAjgVAZQgTAXgPAaIgeA1IggA6QgPAcgLAdIgWBCQgEANAAANIgSAAIAABpQgJgCgJgGQgagVAAghIABgLQADgQAEgSQAJggARgYQAKgPAIgTQAKgWAMgWQAPgcAOgfQANgbARgaQATgcAKgeQAJgeABglQABgpgLggQgFgRgOgLQgagUgpAEQggADgkAJQgiAKgZAVQgWASgdAQQgbAOgdAZQgYAVgaASQgZASgUAUIgBACQgMAZgWANQgdASgVAWQgUAVgSAeQgRAcgTAbQgTAbgLAhQgLAhgTAdQgQAYgEAkQgDAWgKARQgEgEgGgCIgBAAIAAACIAAAAQgHATgIAOIACABQgMASAAAcQAAAaAFAYIAEAQIAUBDQAMApgLAdQgMAiglAJQgbAHgjAAIgDAAg");
	this.shape_19.setTransform(-48.5,-61.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQgLIAEgEIAAgBQAGgGAEgIIACgGIAJgEIACgBIADgBIABADQAIAwgOAiQgegRAFglgAgLgOQgKARAVgBQABgCACgCIABgFIAAgBQgDgIgIABIgDABIgBAAIAAAAgAAPgnIgEgCIAEACg");
	this.shape_20.setTransform(-46.8,-39.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC99").s().p("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");
	this.shape_21.setTransform(-5.6,24.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("ACOGLQgsgOgMgtQgFgSAIgYQALggghgHQgYgFgPgNQgegagEgsIABAAQARgGATgEQAvgLAqgHIAbgGIADAAQABACABACQAIALANAMQASASAAAWQACAsAEArQAEAsAvAIQgyABgegdQATA1A4gEQgNAHgBAJQAcAOgbAGQgWAGgVAAQgXAAgWgHgAhcBDIgCgCQgFgjgPgmQgPglAJgmIACgJQAFgVABgeQACgjgLgbQgNgigigRIg5hMQgFgHgGgFIgJgIIgCgDIALgHIADAFIgDgFIA3ggQAOgJAVADQAtAGAqAPQAsAPAcAdQAeAfgDA0QgDAwADAvQAEAwABAxQACAyAVAeQAMASgIAJIgFAEQgIAFgSABIgqADIhTAKg");
	this.shape_22.setTransform(-14.9,-13.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FF00").s().p("AMaJNIgDADIgDAEQACgFAEgCgABhGsIgDgGIANAAIAAAGIgKAAgAAkhjIAFAEIgHALQADgFgBgKgAsZjPIAFgBIACAFIAEAGIgLgKgAgijZIASAAQgEADgFAAQgFAAgEgDgAAAjdIAHADIgFAAIgCgDgApilMIABgBIABgCIAAADgAgbl3IABgGIgCAJIABgDgAgal8IAAgBIgBAGIABgFgAgal9IAAAAgAjbpPIAEgEIAEAFIgDABIgCABIgDgDIADADIgJAEIAGgHgAjYpMIAAAAg");
	this.shape_23.setTransform(-24.2,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-33.2,y:-65.3}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_4,p:{x:-33.2,y:-65.3}},{t:this.shape_10},{t:this.shape_2},{t:this.shape_9}]},5).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_4,p:{x:-47.3,y:-40.3}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},6).wait(10));

	// Layer 6
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.3,1,1).p("AmIjBQAHgVADgTQABgLAAgKQABgfACghQACghAFggQAFgjAAgiQgBghgCgfQgCgjgDgeQgCghgTgdQgQgWgUgTQgGgGgGgFQgggagdgIQgLgDgPACQggADgiAXQggAVgWAiQgVAggNAjQgNAjgHAiQgGAagFAeQgBAEAAAEQgGAkADAkQADAfgHAkQgHAkgXAfQgcAkgigQQgigRgMgeQgLgdgBghQgCgggGgmQgBgIAAgGQgBgdAGgiQACgMgTAFQgOAEgMgJQgCAhgEAkQgGAoAHArQAGAnATAdQAJANAKANQACAEADAEQAGAGAIAHQAbAUAbAIQAiAJAfgKQAegJAHgtQAGgjAFggQAEgjABgjQABgXAFgWQADgOAEgNQAKggAJgfQAJgjAMggQAMghAggaQAegYAjAKQAiAIAeAdQANANAKAQQAIANAFAPQAKAcALAdQALAcgEAlQgDAfgGAfQgGAgABAmQABAjgFAfQgGAkgJAfQgGAQgBATQgCANABAOQACAggFAfQgFAeACAdQADAeAAAdQgBAbAFAbQABAEABADQACAZADAcQADAhAQAcQAIAPAJANQALAQANAOQAaAcAgALQAhAMAlABQAmgBAfgSQAigTAcgQQAUgLATgNQALgJALgJQAZgXAfgJQAAAAABAAQABgBACAAQAGgGAMAAQAigBAUAlQAPAdAIAgQAFAXABAZQAAAJAAAJQAAAOACANQACARAHAOQAMAdAPAdQAPAeAmAMQAiAKAggJQAFgBAGgCQAXgHAZgLQAkgQANgkQAMgjAKglQADgNAEgMQAGgVAGgTQAJghgCgiQgEgkAOggQAOgiAegXQAZgTAdAXQACACADACQAFADAEAFQAUAbAIAbQABAFABAGQAHAZAEAaQAFAcAHAhQAGAgADAdQACAMACAOQACAUAEAWQAGAggGAhQgBAEAAAFQgDATABAWQABAJABAJQAGAjAIAbQAKAfAdAZQAeAZAlADQAjACAggIQAagGAVgUQAcgcALgjQALgmAIgeQAHgfAGgmQAFgiACgiQABgiADgjQABgWgCgYAAHDSQgDgBgCABQgWAAgTAKQgJAFgHAIQgZAWgeAWQgdAVgjALQggAIgiALQgiALgigPQghgOgbgaQgMgMgKgNQgJgNgHgOQgEgHABgJQAAgBABgCQgBgBAAgBQgKgbgBgdQgBgegHggQgHgfAKgiQAIgcAJgkQAKgogIgfQgEgPAEgJQAAgCAAgCQACgQAFgSAN7EfQAAAHABAHQABAVAAATQAAAeADAfQACAfgDAeQgDAggCAiQgBAhgLAjQgLAjgSAeQgWAkgfAOQggANgdgMQgOgGgJgIQgagYgOgjQgPgigJgdQgJgdgFglQgDghgFgjQgEgXgEgWQgBgJgCgIQgFglAHgeQAHggAEghQAEglgJggQgDgNADgLQAAgEABgEQAAgbgdgXQgQgNgQgJQgBAAgBAAQgggGgcAGQggAIgfATQgfATgTAkQgSAhgJAeQgMAkAAAmQAAANAAAOQAAAYgBAZQgCAhgMAgQgNAggcAgQgQATgTgDQgLgCgMgJQgRgNgLgPQgIgMgEgMQgNgigGgcQgGgigNgdQgGgLgFgLQgKgUgKgRQgRgdgagYQgcgZgdAIQgNAEgGAHAIRCHQgCgBgBgBQABALACABAADDaQABgGADgC");
	this.shape_24.setTransform(80,-17.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9966FF").s().p("ALeLbQglgCgegZQgdgZgKgfQgIgbgGgjIgCgSQgBgWADgTIABgJQAGghgGghIgGgpIgEgaQgDgdgGggIgMg9QgEgagHgZIgCgLQgIgbgUgbIgJgIIgFgEQgdgXgZATQgeAXgOAiQgOAgAEAkQACAigJAhIgMAoIgHAZQgKAlgMAjQgNAkgkAQQgZALgXAHIgLADQggAJgigKQgmgMgPgeQgPgdgMgdQgHgOgCgRQgCgNAAgOIAAgSQgBgZgFgXQgIgggPgdQgUglgiABQgMAAgGAGIgDABIgBAAQABgGADgDQgDADgBAGQgfAJgZAXIgWASQgTANgUALIg+AjQgfASgmABQglgBghgMQgggLgagcQgNgOgLgQIgRgcQgQgcgDghIgFg1IgCgHQgFgbABgbQAAgdgDgeQgCgdAFgeQAFgfgCggQgBgOACgNQABgTAGgQQAJgfAGgkQAFgfgBgjQgBgmAGggQAGgfADgfQAEglgLgcIgVg5QgFgPgIgNQgKgQgNgNQgegdgigJQgjgJgeAYQggAagMAhQgMAggJAjIgTA/IgHAbQgFAWgBAXQgBAjgEAjIgLBDQgHAtgeAJQgfAKgigJQgbgIgbgUQgIgHgGgGIgFgIIgTgaQgTgdgGgnQgHgrAGgoQAEgkACghQAMAJAOgEQATgFgCAMQgGAiABAdIABAOQAGAmACAgQABAhALAdQAMAeAiARQAiAQAcgkQAXgfAHgkQAHgkgDgfQgDgkAGgkIABgIQAFgeAGgaQAHgiANgjQANgjAVggQAWgiAggVQAigXAggDQAPgCALADQAdAIAgAaIAMALQAUATAQAWQATAdACAgIAFBCQACAfABAhQAAAigFAiQgFAhgCAhIgDBAIgBAVQgDATgHAVQgBAOgGAKQgFASgCAQIAAAEQgEAJAEAPQAIAfgKAoIgRBAQgKAiAHAfQAHAgABAeQABAdAKAbIABACIgBADQgBAJAEAHQAHAOAJANQAKANAMAMQAbAaAhAOQAiAPAigLIBCgUQAjgKAdgVQAegWAZgWQAHgIAJgFQATgKAWgBIAFAAQAGgGANgEQAdgIAcAZQAaAYARAdQAKARAKAUIALAWQANAdAGAiQAGAcANAiQAEAMAIAMQALAPARANQAMAJALACQATADAQgTQAcggANggQAMggACgiIABgwIAAgbQAAgmAMgkQAJgeASghQATgkAfgTQAfgTAggIQAcgGAgAGIACAAQAQAJAQANQAdAXAAAbIgBAIQgDALADANQAJAggEAlQgEAhgHAgQgHAeAFAkIADASIAIAtQAFAjADAhQAFAlAJAdQAJAdAPAiQAOAjAaAYQAJAIAOAGQAdAMAggNQAfgOAWgkQASgeALgjQALgjABghQACgiADggQADgegCgfQgDgfAAgeQAAgTgBgVIgBgOIAmAeQACAYgBAWIgEBFQgCAigFAiQgGAmgHAeQgIAfgLAmQgLAjgcAcQgVAUgaAGQgZAGgbAAIgPgBg");
	this.shape_25.setTransform(80,-17.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.3,1,1).p("Am5lEQgEgBgDAAQgGAAgGABQghAGgYAPQgFADgEAEQgWAOgVAQQgWASgbAUQgaAUgWATQgJAJgKAIQgQANgRAOQgaAUgSAdQgCAEgDAEQgLAQgQAPQgGAGgHAGQgbAXgYAOQgdAQgmgBQgogBgcgWQgcgWgTgbQgPgVgCgeQgCgnAPgiQAJgSAIgQAvyjVIAAAAQgQAhgHAkQgHApANAfQAPAfAeAKQAOAFAMAAQAkAAAjgRQAhgQAagPQAbgQAbgYQAZgXAcgWQASgPARgOQAHgFAHgGQAcgXAPgbQAQgdATgbQAWgfAcgSQALgHAFgKQADgEACgDQARgUAmACQAUABASAEQABABABAAQAcARAQAYQATAbAKAjQALAjgKAoQgJAkgNAdQgPAigZAcQgJAKgJAKQgQATgQATQgVAagMAfQgMAhgBAqQgBAZARAKQAJAGAPACQAWABASgEQANgDAMgGQAggRAXgRQAcgVAdgNQALgFALgFQAVgIATgGQAhgKAjAAQAlgBARAaQAHALAAAKQAAADgDAFQAAAAAAAAQgBgCgBgBQAAgJgJgIQgagXgnAOQgeALgcAUQgTAOgRARQgHAGgGAHQgJALgKAJQgNAKgOAHQgdANgeAMQggAMgkgRQgggPgSgcQgDgEgDgFQgMgVgMgZQgQgkAOgkQAPghARgiQAGgMAGgLQAKgUAIgSQAOgfAZgYQAbgYALgiQAMgigHglQgGgggkgBQABAAACABQgIAHgCAAAHRAuQAIgUAMgRQAFgJAHgGQAUgZAVgaQAVgZASgcQATgdAXgZQAXgYAWgWQAYgYAXgVQAXgXAigJQAbgGAbgBQAIAAAJAAQApACAbAOQAKAFAKALQAWAYAKAoQAKAlgHAnQgGAngNAiQgOAjgRAdQgNAYgQAZQgDAEgCADQgUAfgaAZQgXAVgTAgQgTAfgDAnQgEAtAkALQAlAKAdgPQAcgOAXgXQAXgXAdgYQAHgFAEgFQAUgVASgeQAGgKALARQAIAMAPABQgVAagUAeQgWAigjAbQgfAZghAJQgQAEgPADQgFABgFABQgIABgKAAQgjgDgYgNQgggQgQgbQgQgcAYgmQASgeATgbQAUgdAWgbQAPgRALgUQAHgMAGgNQAOgfAOgbQAQghANggQANghgHgoQgGgmgggQQgfgRgqACQgSAAgSAGQgPAEgOAIQgaAOgcAOQgaAOgWAfQgTAZgQAbQgRAbgaAcQgYAZgRAaQgUAfgNAdQgHAQgLAPQgIALgKAKQgXAWgRAbQgQAagWAUQgXAVgSAVQgSAVgWARQgDACgDACQgSARgVAUQgZAWgeALQgQAFgPAEQgTAEgTACQgnADgfgMQgggNgcgZQgbgagLgiQgNglgLgfQgHgVgFgXQgCgOgCgOQgEghgSgdAhmBQQACABACACQARAPAHAVQADAJABALQADAhAHAkQAIAkAUAfQASAcARAfQASAeAjAMQAiALAmgBQARAAAQgEQAPgDAPgHQAHgCAFgHQABgCABgBQABAAABgBQAZgOAUgUQAVgWAbgTQAagTAPgfQAOgbARgiQATgkAbgSQANgJADgJQABgBABgCQAKgOAIgQ");
	this.shape_26.setTransform(92.8,-46.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9966FF").s().p("AA3GEQgggNgcgZQgbgagLgiIgYhEQgHgVgFgXIgEgcQgEghgSgdQADgEAAgEIAAAAIAEADQARAPAHAVQADAJABALQADAhAHAkQAIAkAUAfIAjA7QASAeAjAMQAiALAmgBQARAAAQgEQAPgDAPgHQAHgCAFgHIACgDIACgBQAZgOAUgUQAVgWAbgTQAagTAPgfIAfg9QATgkAbgSQANgJADgJIACgDQAKgOAIgQQACgLAJgLQAIgUAMgRIAMgPIApgzQAVgZASgcQATgdAXgZQAXgYAWgWIAvgtQAXgXAigJQAbgGAbgBIARAAQApACAbAOQAKAFAKALQAWAYAKAoQAKAlgHAnQgGAngNAiQgOAjgRAdQgNAYgQAZIgFAHQgUAfgaAZQgXAVgTAgQgTAfgDAnQgEAtAkALQAlAKAdgPQAcgOAXgXQAXgXAdgYIALgKQAUgVASgeQAGgKALARQAIAMAPABQgVAagUAeQgWAigjAbQgfAZghAJIgfAHIgKACQgIABgKAAQgjgDgYgNQgggQgQgbQgQgcAYgmIAlg5QAUgdAWgbQAPgRALgUIANgZIAcg6QAQghANggQANghgHgoQgGgmgggQQgfgRgqACQgSAAgSAGQgPAEgOAIIg2AcQgaAOgWAfQgTAZgQAbQgRAbgaAcQgYAZgRAaQgUAfgNAdQgHAQgLAPQgIALgKAKQgXAWgRAbQgQAagWAUQgXAVgSAVQgSAVgWARIgGAEIgnAlQgZAWgeALIgfAJQgTAEgTACIgQABQgdAAgZgKgAnNC/QgggPgSgcIgGgJQgMgVgMgZQgQgkAOgkQAPghARgiIAMgXIASgmQAOgfAZgYQAbgYALgiQAMgigHglQgGgggkgBIgHgBIgMABQghAGgYAPIgJAHQgWAOgVAQIgxAmQgaAUgWATIgTARIghAbQgaAUgSAdIgFAIQgLAQgQAPIgNAMQgbAXgYAOQgdAQgmgBQgogBgcgWQgcgWgTgbQgPgWgCgdQgCgnAPgiIARgiQAHAGAKAEIAAAAQgQAhgHAkQgHApANAfQAPAfAeAKQAOAFAMAAQAkAAAjgRQAhgQAagPQAbgQAbgYQAZgXAcgWIAjgdIAOgLQAcgXAPgbQAQgdATgbQAWgfAcgSQALgHAFgKIAFgHQARgUAmACQAUABASAEIACABQAcARAQAYQATAbAKAjQALAjgKAoQgJAkgNAdQgPAigZAcIgSAUIggAmQgVAagMAfQgMAhgBAqQgBAZARAKQAJAGAPACQAWABASgEQANgDAMgGQAggRAXgRQAcgVAdgNIAWgKQAVgIATgGQAhgKAjAAQAlgBARAaQAHALAAAKIAAAAQAAAEgDAEIAAAAIgCgDQAAgJgJgIQgagXgnAOQgeALgcAUQgTAOgRARIgNANQgJALgKAJQgNAKgOAHQgdANgeAMQgNAFgPAAQgTAAgVgKg");
	this.shape_27.setTransform(92.8,-46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24}]},11).to({state:[{t:this.shape_27},{t:this.shape_26}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.6,-142.6,245.3,285.2);


(lib.Gerundsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AgcBLQgLgCgHgEQgFAAgEgEQgDgEAAgFIABgcIABgcIgBgdIAAgfQAAgFAEgGQAGgFAFAAQADAAAMAGIARAIQAaAJAUASQAXAWAAAaQAAAQgIAOQgIAPgNAJQgQAKgbAAQgGAAgJgCgAggAvQAEADAFABIAKABQATAAAJgGQAIgFAFgJQAEgJABgKQgBgWgagRQgIgFgegNg");
	this.shape.setTransform(33.6,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AhABHQgEgDAAgGIABgLIAAgLIABgQIAAgRIAAgRIAAgRIgBgRIgCgQQAAgGAFgEQAFgFAGAAQAHAAAIAMQApA8ApAlIAAgOIgBg9IgBgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgBAPQgCAMgMAAQgHAAgHgHQglgggrg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgEgFg");
	this.shape_1.setTransform(18.6,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AgkBAQgZgTAAguIAAgNIABgOIAAgKIAAgLQAAgHADgHQAEgIAHAAQAFAAAEADQADADAAAGIAAAQIAAAPIAAAOIgBANQAAANAEAMQAEAOAHAGQAEADAPAAQAXABAJgrQAEgUAAgoQAAgFADgFQAFgGAHAAQAHAAADAEQACAEAAAEQAAAlgDAUQgGAfgPAVQgHAJgJAGQgMAHgLAAQgYAAgLgIg");
	this.shape_2.setTransform(3.8,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033FF").s().p("AgyBFQgEgDAAgGIAAgUIABgVIAAhKQAAgGAEgFQAEgGAJAAIAXACQANACAIAEQAoAUAAAeQgBAMgHAIQgJAJgRAHQAZAOAMAOQADAEABAEQgBAFgEAEQgDAEgGAAQgFAAgEgEQgcgaghgLIABAeQABAGgEADQgEAEgFAAQgGAAgEgEgAgcADIAEAAQAXAAAKgFIAIgGQAFgEAAgCQgBgLgNgJQgLgJgOgCIgLgBg");
	this.shape_3.setTransform(-9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033FF").s().p("AgqBHQgKgJAAgeIABgkIACglIgBgKIgBgKQAAgOANAAQAFAAADACIAVgDIARgCQAXAAAOAFQAJAEAAAIQAAAFgEAEQgEAEgFAAIgEAAQgPgFgOAAIgOABIgRAEIgBAlIAjgEIAWgCQAGAAAEAEQAEADAAAGQAAAKgMABIgWACIgmAEIgBATQAAASACACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAEADQAFAEAAAGQAAALgLACQgKABgcAAQgeAAgJgIg");
	this.shape_4.setTransform(-20.9,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033FF").s().p("AgxA/QgNgNAAgaQAAgYAMgYQALgZATgPQANgLANAAQAKAAAPAGQATAIAAAJQAAAFgFAEQgDADgGAAQgDAAgJgEQgJgGgJAAQgHAAgOASQgUAagBAeQAAAQAFAFQAFAGAOgBQANAAALgHQALgJAGgQQgWABgPAIIgGABQgFAAgEgFQgEgDAAgFQAAgOAggFQAUgDAZAAQAGAAADADQAEAEAAAEQAAAHgFAEQgHAcgTAQQgTARgZAAQgZAAgMgNg");
	this.shape_5.setTransform(-33.4,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033FF").s().p("AACBLQgLgCgHgEQgGAAgFgEQgEgEgCgFIgJgcIgIgcIgKgdIgLgfQgCgFAEgGQADgFAFAAQADAAAPAGIATAIQAdAJAaASQAeAWAJAaQAFAQgDAOQgDAPgLAJQgMAKgcAAQgHAAgJgCgAgKAvQAFADAFABIAKABQAUAAAGgGQAHgFACgJQACgJgEgKQgHgWgggRQgKgFgigNg");
	this.shape_6.setTransform(33.2,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033FF").s().p("AgoBHQgEgDgCgGIgDgLIgEgLIgEgQIgFgRIgGgRIgGgRIgHgRIgHgQQgCgGAEgEQAEgFAGAAQAGAAAMAMQA9A8A2AlIgFgOQgOgtgHgQIgFgKIgDgKQgFgNAOAAQAPAAAPAvIAFAPIASA5IAEAPQABAMgLAAQgHAAgKgHQguggg/g6IAJAdIAHAWIAIAWQAJAcgNAAQgHAAgGgFg");
	this.shape_7.setTransform(18.7,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033FF").s().p("AgGBAQgfgTgPguIgEgNIgEgOIgDgKIgDgLQgDgHABgHQABgIAHAAQAFAAAFADQAFADACAGIAFAQIAFAPIAEAOIADANQAFANAHAMQAJAOAIAGQAFADAPAAQAYABgFgrQgDgUgNgoQgBgFABgFQADgGAHAAQAHAAAEAEQAEAEABAEQAMAlADAUQAGAfgJAVQgEAJgHAGQgKAHgMAAQgYAAgNgIg");
	this.shape_8.setTransform(3.2,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0033FF").s().p("AgcBFQgFgDgBgGIgHgUIgGgVIgZhKQgCgGACgFQADgGAJAAIAXACQAOACAKAEQAtAUAKAeQAEAMgFAIQgGAJgOAHQAdAOARAOQAEAEACAEQACAFgDAEQgCAEgGAAQgFAAgFgEQglgagkgLIALAeQABAGgCADQgDAEgFAAQgGAAgFgEgAgcADIAEAAQAXAAAIgFQAEgCADgEQADgEgBgCQgEgLgPgJQgPgJgPgCIgLgBg");
	this.shape_9.setTransform(-8.7,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033FF").s().p("AgQBHQgOgJgKgeIgKgkIgKglIgEgKIgEgKQgFgOANAAQAEAAAEACIATgDIASgCQAWAAAQAFQAKAEADAIQABAFgCAEQgCAEgGAAIgEAAQgQgFgNAAIgPABIgQAEIALAlIAjgEIAVgCQAGAAAFAEQAFADACAGQADAKgLABIgWACIglAEIAFATQAGASAEACQABACAJAAIASgBIARAAIAFAAIAFgBQAGAAAFADQAFAEACAGQAEALgKACQgJABgdAAQgeAAgLgIg");
	this.shape_10.setTransform(-20.9,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0033FF").s().p("AgfA/QgRgNgJgaQgIgYAEgYQAEgZANgPQAJgLAPAAQAJAAARAGQAVAIACAJQACAFgDAEQgCADgGAAQgCAAgLgEQgLgGgIAAQgIAAgIASQgMAaAKAeQAFAQAGAFQAHAGANgBQAOAAAIgHQAJgJAAgQQgVABgNAIQgCABgDAAQgGAAgFgFQgFgDgCgFQgEgOAegFQASgDAaAAQAFAAAFADQAFAEACAEQACAHgEAEQACAcgNAQQgOARgaAAQgYAAgQgNg");
	this.shape_11.setTransform(-32.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-15.2,84.2,30.5);


(lib.StaceDancing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stacedance2motion();
	this.instance.parent = this;
	this.instance.setTransform(328,-2,0.527,0.527,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.StaceDancing, new cjs.Rectangle(263.9,-76.6,128.2,149.3), null);


(lib.CaratforDiagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgGBFQgCgDAAgEIAAgLIAAgLIgCg4IgWgBQgIgCAAgIQAAgEADgEQACgCAEAAIAVABIAAgNIgBgMQAAgEADgDQACgDAFAAQAHAAACAPIAAAJIAAAFIAAAGIANgBQALAAADABQAGACAAAHQAAAEgDADQgCADgFAAIgEAAIgGAAIgMABIABA5IAAAEIAAAFQABAWgKAAQgDAAgEgDg");
	this.shape.setTransform(151.1,54.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAQgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgEgBQgOAAgLAMg");
	this.shape_1.setTransform(141.3,55.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AglAtIAAhEIABgJIAAgKQgBgKAJAAQAKAAAAAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQAAAMgJAAQgJAAAAgJIAAgHIAAgIQgQABgJAHQgIAHgGAMIABA1QAAAKgLAAQgIAAAAgKg");
	this.shape_2.setTransform(131.6,55.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIACgKIgGgDIgFgBQgOAAgKAMg");
	this.shape_3.setTransform(121.4,55.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgbArQgOgNAAgUQAAgUANgVQAPgXARAAQAKAAAMAEQAPAHAAAIQAAADgDAEQgDACgDAAQgDAAgCgBIgEgEQgGgFgNABQgJgBgKATQgJAPAAAMQAAAMAJAIQAIAHAMAAQAGAAAGgDIAMgGIAEgCQAEAAACADQADADAAAEQAAAGgPAHQgNAGgJAAQgTAAgNgMg");
	this.shape_4.setTransform(111.2,55.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF9900").ss(2,1,1).p("AhNAqQBWh8BFA8");
	this.shape_5.setTransform(96.1,51.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9900").ss(2,1,1).p("AgZgjIgDBHIA5AA");
	this.shape_6.setTransform(91.2,52.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 4
	this.instance = new lib.verbArrow();
	this.instance.parent = this;
	this.instance.setTransform(151.5,13.3,1,1,0,0,0,30.2,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("AMUBbIsTAAIiei0Ip2AA");
	this.shape_7.setTransform(54.4,20.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0099FF").ss(3,1,1).p("AMUBbIsTAAIiei0Ip2AA");
	this.shape_8.setTransform(54.4,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},4).wait(6));

	// Layer 3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("AAACmIAAlL");
	this.shape_9.setTransform(76.1,45.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0099FF").ss(3,1,1).p("AAACmIAAlL");
	this.shape_10.setTransform(76.1,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},4).wait(6));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_11.setTransform(76.1,69);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0099FF").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_12.setTransform(76.1,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-2.7,208,79.7);


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


(lib.blank_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.blank_gr_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank_1, new cjs.Rectangle(0.1,0,65,34), null);


(lib.GERUND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Gerundsymbol();
	this.instance.parent = this;
	this.instance.setTransform(-1.9,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GERUND, new cjs.Rectangle(-44,-14.9,84.2,30.5), null);


(lib.GerundonaCarat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GERUND();
	this.instance.parent = this;
	this.instance.setTransform(65.8,16.7,1,1,0,0,0,-1.9,0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAVQgDgCAAgEQABgDAGgNIAHgRQACgFAEAAQAEAAACADQACADABADQAAADgOAeQgCAFgEAAQgDAAgDgDg");
	this.shape.setTransform(279,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFBEQgDgCgBgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgDADAAQAJAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgDADgFAAIgFgBIgEAAIgOACIADA5IAAAEIAAAFQAAAVgKAAQgEAAgCgDg");
	this.shape_1.setTransform(270.9,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_2.setTransform(261.1,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQgBAMgIAAQgJAAAAgJIAAgHIAAgIQgQABgIAHQgJAHgGAMIAAA1QABAKgLAAQgIAAAAgKg");
	this.shape_3.setTransform(251.5,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAQgRAVAAQAJAAAKAEQAOAGAAAHQgBADgCACIgBAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_4.setTransform(241.3,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAOgYASAAQAJAAANAFQAPAGgBAHQABAFgDACQgDADgDAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgIAQgBALQABAOAIAHQAJAHALAAQAGAAAHgDIALgHIAEgBQAEAAACADQADADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_5.setTransform(231.1,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_6.setTransform(214.8,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_7.setTransform(198.7,19.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_8.setTransform(187.8,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGBEQgDgCAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDADgDQACgDAEAAIAVABIAAgNIgBgMQAAgEACgCQAEgDAEAAQAHAAACAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgDADQgDADgDAAIgGgBIgEAAIgOACIACA5IAAAEIAAAFQABAVgLAAQgCAAgEgDg");
	this.shape_9.setTransform(172.1,17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_10.setTransform(164.6,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBHQgDgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQADgDAFAAQACAAAEADQACADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAFAAAEAEQADAEAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_11.setTransform(159.3,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_12.setTransform(151.1,19.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdBJQgDAFgFAAQgEAAgCgCQgDgDAAgEIABgIIAAgHIgBgfIAAgeIAAgbIAAgcQAAgFACgFQAEgGAFAAQAIAAAAAJIgBADIAAAEIgBAWIAAAZQAJgGAHgCQAIgEAGAAQAVAAANAQQAMAOAAAXQAAAWgOAPQgPAQgUAAQgPAAgMgGgAgPgDIgOAIIAAARIAAAPIAAAQIANAGQAGABAIAAQANABAJgKQAJgLAAgOQAAgPgHgJQgIgKgNAAQgHAAgJAFg");
	this.shape_13.setTransform(140.2,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaA2QgQgFAAgKQAAgEAEgDQADgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQABgVASgJIASgGQAOgDAFgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgPAGAAAKIAGABQAWAEALAHQAPAKAAATQAAAQgNAIQgLAHgRAAQgNAAgLgFg");
	this.shape_14.setTransform(122.9,18.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDAEAAQACAAAEADQACADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgCACgEABQgEgBgDgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAFAAAEAEQADAEAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_15.setTransform(115.7,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_16.setTransform(9.3,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.GerundonaCarat, new cjs.Rectangle(0,0,283.3,31.9), null);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,press:1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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


(lib.GerundsDiagrammed1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		playSound("cowbell_3times");
	}
	this.frame_59 = function() {
		playSound("Flying");
	}
	this.frame_84 = function() {
		playSound("Flying");
	}
	this.frame_93 = function() {
		playSound("Flying");
	}
	this.frame_110 = function() {
		playSound("Flying");
	}
	this.frame_117 = function() {
		playSound("Flying");
	}
	this.frame_120 = function() {
		playSound("Flying");
	}
	this.frame_131 = function() {
		playSound("_2a");
	}
	this.frame_137 = function() {
		playSound("_2a");
	}
	this.frame_144 = function() {
		playSound("_2a");
	}
	this.frame_185 = function() {
		playSound("wrong_answer");
	}
	this.frame_194 = function() {
		playSound("wrong_answer");
	}
	this.frame_202 = function() {
		playSound("wrong_answer");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(45).call(this.frame_59).wait(25).call(this.frame_84).wait(9).call(this.frame_93).wait(17).call(this.frame_110).wait(7).call(this.frame_117).wait(3).call(this.frame_120).wait(11).call(this.frame_131).wait(6).call(this.frame_137).wait(7).call(this.frame_144).wait(41).call(this.frame_185).wait(9).call(this.frame_194).wait(8).call(this.frame_202).wait(25));

	// carat
	this.instance = new lib.CaratforDiagram();
	this.instance.parent = this;
	this.instance.setTransform(320.7,-220.2,0.493,0.493,0,0,0,65.5,37.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:321.6,y:-220.4,alpha:1},6).wait(207));

	// actions
	this.instance_1 = new lib.carat();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.7,-193.6,1,1,0,0,0,172.6,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227));

	// Stace
	this.instance_2 = new lib.StaceDancing();
	this.instance_2.parent = this;
	this.instance_2.setTransform(493.1,-106.2,0.607,0.607,0,0,0,327.9,-2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({_off:false},0).to({x:-196.1,y:-99.6},13).to({_off:true},1).wait(8).to({_off:false,scaleX:0.61,skewY:180,x:-197.5,y:-91.6},0).to({x:12.3},5).to({x:25.4,y:-18.8},4).to({x:210.3,y:-42.8},5).to({x:198.1,y:-122.2},4).to({x:285.5,y:-85.1},5).wait(1).to({scaleX:0.28},0).wait(1).to({regX:328.1,scaleX:0.37,skewY:0,x:272.8},0).wait(1).to({regX:328,scaleX:0.61,x:271.6,y:-95.2},0).to({x:272.4,y:-101.1},4).to({y:-123.7},2).to({regX:327.9,regY:-1.9,scaleX:0.61,scaleY:0.61,rotation:-24.8,x:299.8,y:-157.5},6).to({scaleX:0.61,scaleY:0.61,rotation:43.1,x:257,y:-145.3},2).to({regY:-2,rotation:13.1,x:219.9,y:-158.4},3).to({rotation:13.1,x:116.5,y:-162.1},6).to({x:-228,y:-163.3},2).to({_off:true},1).wait(96));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ABLAAIiVAA");
	this.shape.setTransform(348.5,-63.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("Ak5AAIJzAA");
	this.shape_1.setTransform(324.4,-63.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AooAAIRSAA");
	this.shape_2.setTransform(300.2,-63.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("AsYAAIYxAA");
	this.shape_3.setTransform(276,-63.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("AwIAAMAgRAAA");
	this.shape_4.setTransform(251.9,-63.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,1).p("Az3AAMAnvAAA");
	this.shape_5.setTransform(227.7,-63.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("A3nAAMAvOAAA");
	this.shape_6.setTransform(203.5,-63.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4,1,1).p("A7WAAMA2tAAA");
	this.shape_7.setTransform(179.4,-63.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,1,1).p("A/GAAMA+MAAA");
	this.shape_8.setTransform(155.2,-63.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4,1,1).p("EAi2AAAMhFrAAA");
	this.shape_9.setTransform(131,-63.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4,1,1).p("AwtAeIAAFAAwtldIAAF7EAi2AAeMgzjAAAIyIAA");
	this.shape_10.setTransform(131,-66.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4,1,1).p("AwtAjIAAFAAwtlYIAAF7AKUliIAAF7EAi2AAjMgzjAAAIyIAA");
	this.shape_11.setTransform(131,-67.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4,1,1).p("AwtAjIAAFAAwtlYIAAF7ATYAZICqipICgCfAKUliIAAF7EAi2AAjMgzjAAAIyIAA");
	this.shape_12.setTransform(131,-67.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(4,1,1).p("AwtB/IAAFAAwtj8IAAF7ATYB1ICqipICgCfAV4g0IAAmKAKUkGIAAF7EAi2AB/MgzjAAAIyIAA");
	this.shape_13.setTransform(131,-76.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4,1,1).p("AwtCMIAAFAAwtjvIAAF7AaKnLIkpAAATYCCICqipICgCfAV4gnIAAmKAKUj5IAAF7EAi2ACMMgzjAAAIyIAA");
	this.shape_14.setTransform(131,-77.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(4,1,1).p("AwtCMIAAFAAwtjvIAAF7AbcnLIl0AAATYCCICqipICgCfAV4gnIAAmKAKUj5IAAF7EAi2ACMMgzjAAAIyIAA");
	this.shape_15.setTransform(131,-77.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(4,1,1).p("AwtCMIAAFAAwtjvIAAF7AbcnLIpWAAATYCCICqipICgCfAV4gnIAAmKAKUj5IAAF7EAi2ACMMgzjAAAIyIAA");
	this.shape_16.setTransform(131,-77.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(4,1,1).p("AwtDHIAAFAAwti1IAAF8ASMmRIgGAAAbcmRIpQAAATYC8ICqiqICgCgAV4ASIAAmIAKUi/IAAF7AQXoGIB1B1EAi2ADHMgzjAAAIyIAA");
	this.shape_17.setTransform(131,-83.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(4,1,1).p("AwtDHIAAFAAwti1IAAF8ASMmRIgGAAAbcmRIpQAAANnoGICwAAIB1B1ATYC8ICqiqICgCgAV4ASIAAmIAKUi/IAAF7EAi2ADHMgzjAAAIyIAA");
	this.shape_18.setTransform(131,-83.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(4,1,1).p("AwtDHIAAFAAwti1IAAF8ASMmRIgGAAAbcmRIpQAAAHHoGIJQAAIB1B1ATYC8ICqiqICgCgAKUi/IAAF7AV4ASIAAmIEAi2ADHMgzjAAAIyIAA");
	this.shape_19.setTransform(131,-83.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0033FF").ss(4,1,1).p("AKKjsIpQAAIhzh0IpQAAACGFhICqiqICgCgAEmC3IAAmI");
	this.shape_20.setTransform(241.5,-100.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(4,1,1).p("AwtCMIAAFAAwtjvIAAF7ASMnLIgGAAAKUj5IAAF7EAi2ACMMgzjAAAIyIAA");
	this.shape_21.setTransform(131,-77.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(4,1,1).p("AwtDHIAAFAAwti1IAAF8ASMmRIgGAAAbcmRIpQAAAHHoGIJQAAIB1B1ATYC8ICqiqICgCgAV4ASIAAmIAKUi/IAAF7EAi2ADHMgzjAAAIyIAA");
	this.shape_22.setTransform(131,-83.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(4,1,1).p("AKKjsIpQAAIhzh0IpQAAACGFhICqiqICgCgAEmC3IAAmI");
	this.shape_23.setTransform(241.5,-100.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(4,1,1).p("AwtDHIAAFAAwti1IAAF8AbcmRIpQAAIh1h1IpQAAATYC8ICqiqICgCgAKUi/IAAF7AV4ASIAAmIEAi2ADHMgzjAAAIyIAA");
	this.shape_24.setTransform(131,-83.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},59).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},20).to({state:[{t:this.shape_11}]},7).to({state:[{t:this.shape_12}]},9).to({state:[{t:this.shape_13}]},6).to({state:[{t:this.shape_14}]},3).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},4).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},3).to({state:[{t:this.shape_21},{t:this.shape_20}]},60).to({state:[{t:this.shape_22}]},5).to({state:[{t:this.shape_21},{t:this.shape_20}]},4).to({state:[{t:this.shape_22},{t:this.shape_11},{t:this.shape_23}]},4).to({state:[{t:this.shape_21},{t:this.shape_20}]},4).to({state:[{t:this.shape_24}]},4).wait(21));

	// Buffy
	this.instance_3 = new lib.Stace();
	this.instance_3.parent = this;
	this.instance_3.setTransform(46.9,32.3,1,1,0,0,0,36.4,19.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).wait(96).to({x:-34.6,y:-81.1},10).wait(86));

	// loves
	this.instance_4 = new lib.loves();
	this.instance_4.parent = this;
	this.instance_4.setTransform(117.9,32.2,1,1,0,0,0,31.1,19.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).wait(102).to({x:112,y:-84.3},10).wait(80));

	// to
	this.instance_5 = new lib.dancing();
	this.instance_5.parent = this;
	this.instance_5.setTransform(197.5,32.5,1,1,0,0,0,45.5,19.4);
	this.instance_5._off = true;

	this.instance_6 = new lib.dancinggerund();
	this.instance_6.parent = this;
	this.instance_6.setTransform(250.3,-145.5,1,1,0,0,0,47.1,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},35).to({state:[{t:this.instance_5}]},108).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_6}]},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).wait(108).to({x:242.5,y:-155},10).to({_off:true},1).wait(73));

	// Layer 13
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEAGQgDgCAAgEQAAgCADgCQABgDADAAQADAAADADQACACAAACQAAAEgCACQgDACgDAAQgDAAgBgCg");
	this.shape_25.setTransform(291.3,-202.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQAAgPAJgLQAIgNAOAAQAKAAAHAEQAIAEAAAJQAAAHgHAFIgOAGIgXAMQAEAFAFADQAFACAHAAIAKgBQAHgDADgDQACgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAAHgLAFQgLAFgIAAQgOAAgJgIgAgMgQQgGAGgCALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_26.setTransform(286.2,-205.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAQAfIgDgOIgBgOIABgFIAAgGQAAgNgFAAQgHAAgGAIQgGAIgDALIAAAGIgBAFIABAHIAAAFQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgBgCAAgDIAAgFIgBgHIABgRIABgSIAAgFIAAgGQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAGAAAAAIIAAAIQALgPAKAAQAKABAEAIQADAHAAALIAAAGIAAAGIACANIABAOQAAACgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAAAgGg");
	this.shape_27.setTransform(279.3,-205.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgLIAAgMIAAgOIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAOIgBAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgDgiQgCgCAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_28.setTransform(274.1,-206.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGAuIAAgXIABgXIABgWIAAgXQAAgGAFAAQAGAAAAAGIAAAXIAAAWIgBAfIgBAPQAAAGgFAAQgGAAAAgGg");
	this.shape_29.setTransform(270.3,-207.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAlQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgCgXIgCgWQAAgGgBgEQgFACgFAEIgHAJIgDAEIgBAKIgBALIABAFIABAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgHAAAAgQIABgLIAAgLIAAgKIgBgKQAAgOAHAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACACAAADIAAADIAAAEIAAAHQADgHAGgFQAHgGAEAAQAKAAADAKQAEgFAEgCQAFgCAGAAQALAAAEALIACASIAFAjQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAAAgGIgDgUIgCgSQAAgFgCgEQgCgGgDAAQgCAAgGAEIgIAGIAAAMIACAQIABARQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_30.setTransform(259.7,-205.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_31.setTransform(251.2,-205.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_32.setTransform(245,-205.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgVAxQgIgCAAgFQAAgFAFAAIAIABIAMABQALAAAFgMQADgIAAgPQgDAFgFAEQgFADgFAAQgMAAgHgIQgHgHAAgMQAAgRAKgKQAKgLARAAQAFAAAEABQAEABADADQAGABAAAHIgBAMIgCAMIgBAUQgBANgCAIQgDALgGAEQgIAHgNAAQgIgBgGgBgAgLgfQgGAHAAAMQAAAJAEAEQADAEAHABQAGAAAGgHQAFgGABgHIADgWIgFgCIgGgBQgLAAgHAIg");
	this.shape_33.setTransform(238.1,-203.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAUAhIgEgFIgLAFIgGACQgPAAgHgJQgHgIAAgQQAAgOALgLQALgLANAAQAGAAAHADQAIADAAAFIgBADIgBAIIAAAOIABAMIAEALIABAEIABABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIgEABIgFgCgAgKgPQgHAIAAAKQAAAKAEAFQADAGAIAAQAFAAAEgDIAGgEIgCgZIABgGIABgGIgEgCIgDgBQgJAAgHAIg");
	this.shape_34.setTransform(231.4,-205.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGAuQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgBgLIAAgMIABgOIAAgOQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAOIgBAOIAAAMIAAALQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgDgiQgDgCAAgDQAAgEADgCQACgCACAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_35.setTransform(226.4,-206.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgWArQgJgJAAgOQAAgRAJgJQAJgKAOAAQAHAAAEACIAGAFQABgcABgIQABgGAFAAQAGAAAAAGIgDAnIgBARQAAAWACALIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgDAAgCgGQgFAEgFABQgFACgEAAQgNAAgJgJgAgOABQgFAGAAANQAAAIAFAGQAGAGAIAAQAEAAAEgCIAHgFIACgDIAAgLIAAgHIAAgHQgDgFgEgCQgEgDgFAAQgKAAgFAGg");
	this.shape_36.setTransform(220.6,-207);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQABgPAHgLQAJgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgOAGIgWAMQADAFAFADQAFACAHAAIAKgBQAHgDACgDQACgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgLAFQgKAFgJAAQgOAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_37.setTransform(209.5,-205.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_38.setTransform(202.1,-207);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_39.setTransform(195.2,-206.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgJA2QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgBQABgJAAgJIAAgSIAAgRIgKABQgGAAAAgGQAAgHALAAIAGAAIABgKQABgOAGgHQAFgIAOAAQAJAAAAAGQAAAHgIAAQgPAAgCAVIAAAEIAOgBQAKAAAAAGQAAAFgFABIgFAAIgPABIAAANIAAAMIAAAMQAAAMgBAHQAAAFgFAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_40.setTransform(184.8,-206.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_41.setTransform(178.1,-205.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgVAbQgKgHABgPQAAgPAHgLQAJgNAOAAQAKAAAHAEQAIAEAAAJQAAAHgHAFIgNAGIgXAMQADAFAFADQAGACAFAAIALgBQAHgDACgDQADgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAAHgMAFQgJAFgKAAQgNAAgJgIgAgMgQQgGAGgCALIAUgIQAKgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_42.setTransform(167.5,-205.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgVAxQgIgCAAgFQAAgFAFAAIAIABIAMABQALAAAFgMQADgIAAgPQgDAFgFAEQgFADgFAAQgMAAgHgIQgHgHAAgMQAAgRAKgKQAKgLARAAQAFAAAEABQAEABADADQAGABAAAHIgBAMIgCAMIgBAUQgBANgCAIQgDALgGAEQgIAHgNAAQgIgBgGgBgAgLgfQgGAHAAAMQAAAJAEAEQADAEAHABQAGAAAGgHQAFgGABgHIADgWIgFgCIgGgBQgLAAgHAIg");
	this.shape_43.setTransform(160.2,-203.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgWArQgJgJAAgOQAAgRAJgJQAJgKAOAAQAHAAAEACIAGAFQABgcABgIQABgGAFAAQAGAAAAAGIgDAnIgBARQAAAWACALIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgDAAgCgGQgFAEgFABQgFACgEAAQgNAAgJgJgAgOABQgFAGAAANQAAAIAFAGQAGAGAIAAQAEAAAEgCIAHgFIACgDIAAgLIAAgHIAAgHQgDgFgEgCQgEgDgFAAQgKAAgFAGg");
	this.shape_44.setTransform(153,-207);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVAbQgKgHAAgPQAAgPAJgLQAIgNAOAAQAKAAAHAEQAIAEAAAJQAAAHgHAFIgOAGIgXAMQAEAFAFADQAFACAHAAIAKgBQAHgDADgDQACgDACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEQABAHgLAFQgLAFgIAAQgOAAgJgIgAgMgQQgGAGgCALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_45.setTransform(145.8,-205.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAbQgJgHAAgPQgBgPAJgLQAIgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgNAGIgYAMQAEAFAFADQAGACAFAAIALgBQAHgDADgDQABgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQgBAHgKAFQgKAFgKAAQgNAAgJgIgAgMgQQgFAGgDALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_46.setTransform(134.8,-205.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgCgFg");
	this.shape_47.setTransform(127.5,-207);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_48.setTransform(120.5,-206.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAPAfIgCgOIgBgOIABgFIAAgGQAAgNgFAAQgHAAgGAIQgFAIgDALIgBAGIAAAFIAAAHIAAAFQAAADgBACQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgCgCAAgDIAAgFIgBgHIABgRIABgSIAAgFIAAgGQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAQAHAAAAAIIAAAIQALgPAKAAQAKABAEAIQADAHAAALIAAAGIAAAGIACANIABAOQAAACgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgGAAgBgGg");
	this.shape_49.setTransform(110.4,-205.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAEATIgDgPIgBgOIgFAMIgKAaQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgCAEgEAAQgFABgFgUIgEgaIgCgJIAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAFAAABAEIABAKIABAJIAEAcQAHgTAIgaQACgGAEAAQAFAAACAHIAEAXIAEAZIAFgSIAIgiQABgDAFAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAADQgFAUgIAaIgGALQgDADgDAAQgHAAgEgQg");
	this.shape_50.setTransform(102.4,-205.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgSAbQgJgJAAgOQAAgOAHgLQAJgNAPAAQANAAAGAMQAFAJAAANQAAAOgHAKQgIALgNAAQgKAAgIgIgAgKgMQgEAHAAAJQAAAJAFAFQAEAEAFAAQAGAAAFgFQAFgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_51.setTransform(94.3,-205.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgWArQgJgJAAgOQAAgRAJgJQAJgKAOAAQAHAAAEACIAGAFQABgcABgIQABgGAFAAQAGAAAAAGIgDAnIgBARQAAAWACALIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgDAAgCgGQgFAEgFABQgFACgEAAQgNAAgJgJgAgOABQgFAGAAANQAAAIAFAGQAGAGAIAAQAEAAAEgCIAHgFIACgDIAAgLIAAgHIAAgHQgDgFgEgCQgEgDgFAAQgKAAgFAGg");
	this.shape_52.setTransform(87.2,-207);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgRAjQgKgDAAgHQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQACAAADADQABACAGAAIAHABQAEAAAEgBQAGgCAAgEQAAgJgMgDIgFgBQgJgCgDgCQgGgDAAgHQAAgNANgGIALgEQAJgCADgCIAGgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIABAGIABAFQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgHIgPAFQgJAEAAAGIAEABQANACAHAFQALAFAAANQAAAKgJAGQgIAEgKAAQgIAAgIgDg");
	this.shape_53.setTransform(76.1,-205.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAQAfIgCgOIgBgOIAAgFIAAgGQAAgNgFAAQgHAAgFAIQgHAIgCALIgBAGIgBAFIABAHIAAAFQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgCgCAAgDIAAgFIAAgHIABgRIAAgSIAAgFIAAgGQAAgBABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAABAIIAAAIQALgPAKAAQAKABAEAIQADAHAAALIAAAGIAAAGIABANIACAOQAAACgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgGAAAAgGg");
	this.shape_54.setTransform(69.9,-205.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgJAAgFgDQgGgEgBgIQgDgRAAgMQABgJACgLQAAgFAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAABQAAAAAAABIgBAJIgBAKIABARIABAMIAFACIAEABQAHAAAKgDIgBgNIAAgLQABgOABgKQABgGAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAIgCAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgGAAgBgGg");
	this.shape_55.setTransform(63,-205.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAdIAAgrIAAgHIAAgGQAAgGAGAAQAGAAAAAKQAMgMAOAAQAFAAADAEQADAEAAAIIgBAEQAAAIgGAAQgFAAAAgGIgBgEIAAgGQgKABgFAFQgFAEgEAIIAAAiQAAAHgGAAQgGAAAAgHg");
	this.shape_56.setTransform(56.7,-205.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgVAbQgJgHAAgPQgBgPAJgLQAIgNAOAAQALAAAGAEQAIAEAAAJQAAAHgHAFIgNAGIgYAMQAEAFAFADQAGACAFAAIALgBQAHgDADgDQABgDADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQgBAHgKAFQgKAFgKAAQgNAAgJgIgAgMgQQgFAGgDALIATgIQALgGAFgEQgGgFgJAAQgHAAgFAGg");
	this.shape_57.setTransform(-14.6,-214.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AARAwIgCgPIgCgPIABgFIAAgFQAAgLgGAAQgIAAgGAGIgIAPQAAAYgCAEQgCAEgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIABgDIABgJIAAgJIAAguIABgLIgBgGIgBgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAFAAABAGIABALIgBAOIAAAOIAAAFQAFgHAGgDQAFgEAHAAQAKAAAEAHQADAFAAAKIABAMIABAOIACANIABACQAAAAAAABQgBAAAAABQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgEAAgCgFg");
	this.shape_58.setTransform(-21.9,-216.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_59.setTransform(-28.9,-215.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAtQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAAgIIAAgHIgBgkIgOgBQgGgBAAgFQAAgDACgCQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAOABIAAgIIgBgIQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAJIAAAGIAAADIAAAEIAJgBIAJABQAEABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgEAAIgDAAIgIABIABAkIAAADIAAADQAAAOgHAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_60.setTransform(-38.9,-215.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAOAeQgIAEgJAAQgIAAgGgDQgGgEgBgIQgCgRgBgMQAAgJACgLQABgFAFAAQABAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAJIgBAKIABARIACAMIAEACIAEABQAIAAAJgDIAAgNIAAgLQAAgOABgKQABgGAFAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBAYIAAANIAAAOIAAAEIAAAEQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgFAAgBgGg");
	this.shape_61.setTransform(-45.3,-214.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgSAwQgCADgDAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgFIAAgFIAAgUIgBgTIABgSIAAgRQAAgEABgDQACgEAEAAQAFAAAAAFIgBADIAAADIAAANIAAARQAFgEAFgCQAFgCAEAAQANAAAJALQAIAIAAAPQAAAOgKAKQgJAKgNAAQgJAAgIgDgAgJgCIgJAFIAAALIAAAKIAAALIAIADIAJABQAIAAAGgGQAGgHAAgJQAAgKgFgGQgFgGgIAAQgFAAgFADg");
	this.shape_62.setTransform(-52.4,-216.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTAzQgHgCgEgCIAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIABgUIAAgUIAAgVIAAgWQAAgDADgDQACgDACAAQACAAAJAFIALAFQARAGANANQAPAPAAARQAAALgFAKQgFAKgJAGQgKAHgSAAIgKgCgAgXgRIAAASIgBAiIACABQAFAEAIAAQAOAAAHgFQAFgEAFgHQADgHAAgIQAAgRgUgMQgFgFgXgKg");
	this.shape_63.setTransform(44,-205.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgqAyQgCgCAAgDIABgIIAAgIIAAgMIAAgMIAAgLIAAgNIgBgMIAAgMQAAgDADgCQACgDADAAQAEAAAEAIQAQAXAMAQQAPASASARIAAgIIAAgIQAAgbgCgRIgDgHIgBgGQAAgIAHAAQALAAAAAqIAAAUIAAAVIgBAKQgBAGgGAAQgDAAgGgEQgZgZgggtIgBAPIAAANIAAAQIABAQQAAARgIAAQgDAAgCgCg");
	this.shape_64.setTransform(34,-205.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgOAzQgTgFgHgOQgFgLADgRQABgIAGgXIAEgOIADgHQADgEAEABQAFABgCALIgKAkQgKAkAaAHQAXAGARg9IACgGIABgFIADgGQADgDADAAQAGACgCAJIgCAHIgCAIQgRA9gdAAIgIgBg");
	this.shape_65.setTransform(24.2,-210.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAVA2QAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQgPgZgWgOIgCANIgDAMQgBACgCACQgCABgDgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQgBgCAAgDIAEgOIADgPIAGgPIAGgRIACgJIACgJQAAgEADgCQAEgDADACIAOAFQAIADAFAFQAVAUgFATQgDAIgKAFQgIAEgLAAQAQAPAGAOQACACgBADQAAACgDACIgDABIgCgBgAgGgfIgBAHIgEAMIgFAMIADAAIADAAQAOAEAJgCIAIgCQAEgDABgCQACgIgIgKQgHgKgJgDIgIgDg");
	this.shape_66.setTransform(14.8,-212.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgCIACgcIgBgGIgBgHQAAgIAGAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAOgDIAMgBQAQAAAIAEQAFABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgFABIgQABIgcADIAAAIIAAAIQAAAOABACQACACAIAAIALAAIANAAIADgBIAEAAQAGAAAAAGQABAGgGABQgGABgTAAQgTAAgGgFg");
	this.shape_67.setTransform(5.1,-215.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AggArQgIgJAAgRQAAgQAIgRQAIgRAMgLQAIgHAIAAQAGAAAKADQALAFAAAFQAAAEgBABQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgBQgKgGgHAAQgEAAgFAFIgHAJQgOATAAAWQAAAMADAEQAEAGALAAQAKAAAJgIQAIgHAEgOQgSABgLAGIgDABQgDAAgCgDQgCgCABgCQgBgEAEgCQAMgIAiAAQABAAAAABQABAAABAAQAAAAABABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAEgDACQgEAUgMALQgNAMgQAAQgQAAgIgJg");
	this.shape_68.setTransform(-3.5,-215.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(227));

	// run
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F4024B").s().p("AgGBMQgDgDAAgEIAAgMIAAgNIgCg+IgYgCQgJAAAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgDAEAAQAJAAACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAGIABAFQAAAYgMgBQgDAAgDgCg");
	this.shape_69.setTransform(364.5,-94.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F4024B").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZAAgMgPQgLgNAAgbQAAgZASgTQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBANIgBAXQAAANACAIIAGATIADAGIABACQAAAEgDADQgDACgEAAQgCAAgGgEgAgRgaQgNAOAAARQAAARAHAJQAGAIAMABQAKAAAHgFIALgIQgEgbAAgOIABgKIACgMIgHgDIgFAAQgPAAgMANg");
	this.shape_70.setTransform(353.8,-92.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F4024B").s().p("AgpAxIAAhKIABgKIAAgLQAAgLAJAAQALAAAAARQAUgTAZAAQAIAAAFAHQAEAGAAANIAAAIQgBANgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAHQgKAIgGAOIAAA5QAAALgKAAQgKAAAAgLg");
	this.shape_71.setTransform(343.2,-92.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F4024B").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZAAgMgPQgLgNAAgbQAAgZASgTQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBANIgBAXQAAANACAIIAGATIADAGIABACQAAAEgDADQgDACgEAAQgCAAgGgEgAgRgaQgNAOAAARQAAARAHAJQAGAIAMABQAKAAAHgFIALgIQgEgbAAgOIABgKIACgMIgHgDIgFAAQgPAAgMANg");
	this.shape_72.setTransform(332,-92.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F4024B").s().p("AgeAvQgPgOAAgXQAAgVAOgXQAQgZATAAQALAAANAEQAQAHAAAJQAAAEgCADQgDADgEAAQgDAAgCgBIgFgFQgGgEgPAAQgKAAgKATQgKASAAAMQAAAOAKAJQAJAHANAAQAGAAAHgEIANgGIAFgCQAEABACADQADACAAAFQAAAHgQAIQgPAGgJAAQgVAAgPgNg");
	this.shape_73.setTransform(320.7,-92.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#F4024B").ss(2,1,1).p("AhBhZIhXBjIEygWAhABaIhZhN");
	this.shape_74.setTransform(295.3,-90.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(244,2,75,0.49)").s().p("AAACqIiWCXIhOhOIClilIAAmOIB3AAIAAGUIAGgHICnCnIhOBNg");
	this.shape_75.setTransform(271,-91.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00FFFF").s().p("AAACqIiWCXIhOhOIClilIAAmOIB3AAIAAGUIAGgHICnCnIhOBNg");
	this.shape_76.setTransform(271,-91.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#F4024B").ss(2,1,1).p("AhABaIhZhNAhBhZIhXBjIEygW");
	this.shape_77.setTransform(295.3,-90.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},113).to({state:[{t:this.shape_76},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},72).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},4).to({state:[{t:this.shape_76},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},4).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},5).to({state:[{t:this.shape_76},{t:this.shape_77},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},4).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},4).wait(21));

	// Layer 10
	this.instance_7 = new lib.GerundonaCarat();
	this.instance_7.parent = this;
	this.instance_7.setTransform(109.1,-236,1,1,0,0,0,162.3,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(227));

	// Stace loves to dance
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0066FF").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_78.setTransform(244.2,42.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0066FF").s().p("AgqBfQgPgEAAgJQAAgLAKAAIAPACQAKACANAAQAWAAAJgWQAGgQAAgeQgGAMgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIACAEAHQANAAAAAOQAAAJgDAPIgDAWIgDAoQAAAZgFAPQgFAUgMAKQgPALgbAAQgQAAgLgCgAgWg9QgLAPAAAWQAAASAGAHQAHAJAOAAQALAAAMgMQAKgNACgNQACgNADgcQgFgEgFgCQgFgBgGAAQgWAAgNAPg");
	this.shape_79.setTransform(234.2,39.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0066FF").s().p("AAeA7IgDgaQgDgOAAgNIABgLIAAgLQAAgbgKABQgNgBgMARQgKAPgHAVIgBAMIgBAMIABALIAAALQAAAFgDAEQgDADgGAAQgEAAgEgDQgEgEABgFIgBgLIgBgLIACgiIABgjIAAgLIAAgMQAAgFADgEQAEgDAFAAQALAAABAQIABAOQAUgbAUAAQAUAAAIARQAFAMAAAWIAAAMIAAALQABAKACAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgMg");
	this.shape_80.setTransform(221.5,36.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0066FF").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgcQAAgFADgDQAEgEAFAAQAEAAAEAEQADADAAAFIgBAcIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhDQgEgEAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_81.setTransform(211.4,33.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0066FF").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDADgEAAQgEAAgDgCIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgIIAFgBQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_82.setTransform(201.3,36.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0066FF").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQAAgbgKABQgNgBgMARQgKAPgHAVIgBAMIgBAMIABALIAAALQAAAFgDAEQgDADgGAAQgEAAgEgDQgEgEABgFIgBgLIgBgLIACgiIACgjIAAgLIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIABAOQAUgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQgBAKADAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgMg");
	this.shape_83.setTransform(188.6,36.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0066FF").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAGAAAKQAAADgDADIgCAPIAAAbQgBAPADAJIAHAVIADAGIABADQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_84.setTransform(175.3,36.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0066FF").s().p("AgrBUQgRgSAAgbQAAggARgTQARgUAbAAQAOAAAIAFIAMAIQABgzACgSQACgLAJAAQAMAAAAAMQAAARgFA6QgBARgBASQABAoADAVIAAADQAAAFgDADQgEADgEAAQgHAAgEgLQgJAHgJADQgJADgKAAQgZAAgRgQgAgcACQgLAMABAZQgBAQAMALQALALAPAAQAJAAAIgEQADgCAKgIIAEgDIgBgWIAAgOIABgOQgFgKgIgEQgIgFgLAAQgTAAgKALg");
	this.shape_85.setTransform(161.5,33.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0066FF").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEQAQgFAHgEQAFgBAGAAQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgDgBgKIgdAJQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_86.setTransform(140.4,36);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0066FF").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgYAcAAQAUABANAGQAPAJAAARQAAAMgOAKIgZANIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgHAFAAQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_87.setTransform(128,36.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0066FF").s().p("AgNA5IgSgyIgWg3IgCgGQAAgFAFgEQADgDAFAAQAHAAAEAIIAeBUQAJgUAOgkIAKgbQAEgJAHAAQAFABAEADQADAEAAAEQABAGgVAvIgZA5QAAALgKAAQgJAAgEgKg");
	this.shape_88.setTransform(115,36.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0066FF").s().p("AgkA0QgQgRgBgdQgBgaAPgVQARgZAdAAQAZAAAMAWQAKASAAAaQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAAQQAAASAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_89.setTransform(102,36.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0066FF").s().p("AgNBYIACgsIABgsIABgsIAAgsQAAgMALAAQAMAAAAAMIgBAsIAAAsIgCA8IgBAcQgBANgKAAQgMAAAAgNg");
	this.shape_90.setTransform(92.2,33);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0066FF").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgYAcAAQAUABANAGQAPAJAAARQAAAMgOAKIgZANIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgHAFAAQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_91.setTransform(74.7,36.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0066FF").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDADgEAAQgEAAgDgCIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgIIAFgBQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_92.setTransform(61.3,36.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0066FF").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAGAAAKQAAADgDADIgCAPIAAAbQgBAPADAJIAHAVIADAGIABADQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_93.setTransform(48.4,36.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0066FF").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgQQAAgFADgDQAEgDAFAAQAKAAACARIAAALIAAAHIAAAIIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQABIACBIIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_94.setTransform(36,34.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0066FF").s().p("AgwBVQgXgLAAgSQgBgFAEgDQAEgEAFAAQAGAAAEAHQAHAJAFAEQAKAGAUAAQASAAAQgIQAVgKAAgTQAAgPgSgJQgPgIgUgBQgUAAgNgHQgSgKAAgSQAAgWAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgCQgMgDgHAAQgSAAgNAJQgOAKAAANQAAAKASAFIAZADQAcACAQAPQAPANAAAVQAAAdgbARQgYAPgdAAQgXAAgSgIg");
	this.shape_95.setTransform(21.6,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},16).to({state:[]},2).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},2).to({state:[]},2).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},2).wait(203));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-252,380.1,84);


// stage content:
(lib.ger_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene7:0,scene7_repeat:217});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		//nav buttons --------------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmusic2',{loop:-1});
		bgm.volume = 1;
		
		
		//volume setting -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume *0.5;
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.5;
		}
		
		//page navigation ----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("ger_Scene4.html","_self");
		}
		
		
		function openPrev(){
		
		 window.open ("ger_Scene2.html","_self");
		}
	}
	this.frame_4 = function() {
		playSound("gerundoncarat");
	}
	this.frame_39 = function() {
		playSound("_6b");
	}
	this.frame_49 = function() {
		playSound("_6b");
	}
	this.frame_55 = function() {
		playSound("_6b");
	}
	this.frame_62 = function() {
		playSound("_6b");
	}
	this.frame_69 = function() {
		playSound("_6b");
	}
	this.frame_78 = function() {
		playSound("_6b");
	}
	this.frame_85 = function() {
		playSound("_6b");
	}
	this.frame_98 = function() {
		playSound("ball_passes");
	}
	this.frame_133 = function() {
		playSound("stacelovesdancing");
	}
	this.frame_227 = function() {
		this.gotoAndPlay("scene7_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(35).call(this.frame_39).wait(10).call(this.frame_49).wait(6).call(this.frame_55).wait(7).call(this.frame_62).wait(7).call(this.frame_69).wait(9).call(this.frame_78).wait(7).call(this.frame_85).wait(13).call(this.frame_98).wait(35).call(this.frame_133).wait(94).call(this.frame_227).wait(1));

	// Lesson
	this.instance = new lib.GerundsDiagrammed1();
	this.instance.parent = this;
	this.instance.setTransform(299.6,503.5,1.346,1.346,0,0,0,125.7,19.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).to({scaleX:1,scaleY:1,x:265.7,y:309.5},7).wait(124));

	// Layer 9
	this.instance_1 = new lib.carat();
	this.instance_1.parent = this;
	this.instance_1.setTransform(252.3,217.8,1.352,1.352,0,0,0,172.6,14.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAIQgDgDAAgFQAAgDADgDQACgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape.setTransform(523.6,206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgRATAAQAOAAAJAFQALAGAAAMQAAAJgKAHIgSAIIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQAKgDADgEQADgFADAAQADAAACACQADACAAADQAAAKgQAHQgNAGgMAAQgTAAgMgKgAgRgWQgHAIgDAPIAagLQAOgIAHgGQgHgGgNAAQgKAAgHAIg");
	this.shape_1.setTransform(516.7,202);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIAAgHIABgIQAAgTgHAAQgKAAgIAMQgHAKgEAPIgBAIIgBAJIABAHIAAAIQAAAEgCACQgDADgDAAQgEAAgDgDQgCgCAAgEIgBgIIAAgHIABgYIABgYIAAgIIAAgJQAAgDACgDQADgCADAAQAJAAAAALIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAAQIAAAJIAAAHQAAAHACALQACALAAAHQAAAEgDADQgCACgEAAQgHAAgBgIg");
	this.shape_2.setTransform(507.3,201.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIA+QgCgDAAgDIgBgPIAAgQIABgUIABgTQAAgEACgCQADgDADAAQADAAADADQACACAAAEIgBATIgBAUIABAQIAAAPQAAADgCADQgDADgDgBQgEABgCgDgAgFguQgDgDAAgFQAAgEADgDQADgCADAAQAFAAACACQADADABAEQgBAFgDADQgCACgFAAQgDAAgDgCg");
	this.shape_3.setTransform(500.2,199.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA+IABgfIABgfIAAgeIABgfQAAgJAHAAQAJAAAAAJIgBAfIAAAeIgBAqIgBAUQgBAJgGAAQgJAAAAgJg");
	this.shape_4.setTransform(495.2,199.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAyQgDgCABgEIgCgeIgDgeQAAgJgCgFQgGACgGAHIgKALIgFAFIgBAPIgBAOIABAIIABAGQAAAEgCACQgDADgEAAQgKAAAAgWIABgQIABgOIgBgOIgBgOQAAgTAJAAQAEAAADADQACADAAADIAAAFIgBAGIAAAJQAFgKAJgHQAJgHAFAAQAOAAAEANQAFgGAGgDQAHgEAIAAQAOAAAGAQIAEAYIAFAwQAAAEgCACQgDACgDAAQgHAAgCgHIgDgbIgCgZQgBgGgDgGQgCgIgDAAQgEAAgJAGIgLAIIABAQIADAWQACANAAAJQgBAEgCACQgCADgEAAQgCAAgDgDg");
	this.shape_5.setTransform(480.8,202);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbAsQgEgDgBgDIgPAGQgGADgDAAQgVAAgJgMQgIgKAAgWQAAgUAOgPQAOgPATAAQAHAAAKAFQALAEAAAHIgBAEIgCALIAAASQAAAKABAHIAGAPIACAFIAAABQAAADgCADQgDACgDAAQgBgBgFgDgAgOgVQgJAMAAANQAAAOAFAGQAEAIAKgBQAIAAAFgCQAEgCAFgFQgDgWAAgLIABgIIABgJIgFgDIgEAAQgMgBgKALg");
	this.shape_6.setTransform(469.4,202.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggAnIAAg6IAAgJIAAgIQAAgKAIABQAIAAAAAOQAQgQAUAAQAGAAAEAFQAEAGgBAKIAAAGQAAALgJAAQgHAAAAgIIAAgHIgBgHQgNABgHAHQgIAFgEALIAAAuQAAAJgJAAQgHAAAAgJg");
	this.shape_7.setTransform(460.9,202);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdBDQgLgDAAgGQAAgIAIAAIAKACQAHABAJAAQAPAAAHgQQAEgLAAgVQgFAIgGAFQgGAEgIAAQgPAAgKgLQgKgKAAgQQAAgXAOgPQANgOAXAAQAIAAAFACQAGACADAEQAJAAAAAKIgCARIgCAQIgCAcQgBARgDALQgEAOgIAGQgKAIgTAAQgLAAgIgBgAgPgqQgIAKAAAQQAAAMAFAFQAEAHAKAAQAIAAAIgJQAHgJABgJIAEgdIgHgEIgIgBQgPAAgJALg");
	this.shape_8.setTransform(451.6,204.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAsQgEgDgBgDIgPAGQgGADgDAAQgVAAgJgMQgIgKAAgWQAAgUAOgPQAOgPATAAQAHAAAKAFQALAEAAAHIgBAEIgCALIAAASQAAAKABAHIAGAPIACAFIAAABQAAADgCADQgDACgDAAQgBgBgFgDgAgOgVQgJAMAAANQAAAOAFAGQAEAIAKgBQAIAAAFgCQAEgCAFgFQgDgWAAgLIABgIIABgJIgFgDIgEAAQgMgBgKALg");
	this.shape_9.setTransform(442.6,202.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHA+QgDgDAAgDIgBgPIAAgQIABgUIABgTQAAgEADgCQACgDAEAAQACAAACADQADACAAAEIgBATIgBAUIAAAQIABAPQAAADgDADQgCADgDgBQgDABgCgDgAgFguQgDgDAAgFQAAgEADgDQADgCAEAAQADAAAEACQACADAAAEQAAAFgCADQgEACgDAAQgEAAgDgCg");
	this.shape_10.setTransform(435.8,199.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeA7QgMgMAAgUQAAgWAMgNQAMgOATAAQAKAAAFADIAIAGQABgkACgNQABgHAHgBQAIAAAAAJQAAAMgEAoIgBAZQAAAdADAOIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAFgHACQgGADgGgBQgSABgMgMgAgUABQgHAJAAARQAAAMAIAHQAIAIALAAQAGAAAFgDIAJgHIADgCIgBgPIABgKIAAgKQgEgHgFgCQgFgEgIAAQgNAAgIAHg");
	this.shape_11.setTransform(427.9,199.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgRATAAQAOAAAJAFQALAGAAAMQAAAJgKAHIgSAIIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQAKgDADgEQADgFADAAQADAAACACQADACAAADQAAAKgQAHQgNAGgMAAQgTAAgMgKgAgRgWQgHAIgDAPIAagLQAOgIAHgGQgHgGgNAAQgKAAgHAIg");
	this.shape_12.setTransform(412.9,202);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAYBBIgFgUIgBgUIAAgHIAAgHQAAgQgIAAQgKABgIAIQgFAGgHAOQAAAggDAHQgCAFgFAAQgEAAgDgDQgCgCAAgEIABgDQABgDgBgJIABgOIAAg+IABgNIgBgJIgBgIQAAgDACgDQADgDAEABQAHAAABAHIABAPIAAATIAAATIAAAHQAGgJAJgFQAHgFAIAAQAOABAGAIQAEAHAAAPIABAQIABASIAEASIAAACQAAAEgDACQgCACgEABQgGgBgBgGg");
	this.shape_13.setTransform(403,199.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFA9QgCgDAAgDIAAgKIABgKIgCgxIgTgBQgIgBAAgIQAAgDACgDQACgCAFAAIASABIgBgMIAAgKQAAgEACgCQADgDADAAQAHAAABANIABAIIgBAFIAAAFIAMgBIAMAAQAFACAAAGQAAAEgCADQgCACgEAAIgFAAIgEAAIgLABIACAyIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_14.setTransform(393.6,200.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNBJQgDgCAAgEIAAgBQADgLAAgNIgBgYIAAgYIgOABQgIAAAAgIQAAgJAPAAIAIAAIACgNQACgUAHgJQAIgKATAAQAMAAAAAIQAAAIgLAAQgVAAgCAdIAAAFIATgBQANAAAAAJQAAAGgHABIgGABIgUABIgBASIAAAQIABAQQAAARgCAJQgBAGgGAAQgEAAgCgCg");
	this.shape_15.setTransform(379.6,200.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAHAOAAARQAAATgKANQgLAPgRAAQgPAAgKgKgAgPgQQgFAJAAALQAAANAHAHQAFAFAIABQAIgBAGgGQAHgHABgMQABghgTAAQgMABgHAMg");
	this.shape_16.setTransform(370.5,202.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgRATAAQAOAAAJAFQALAGAAAMQAAAJgKAHIgSAIIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQAKgDADgEQADgFADAAQADAAACACQADACAAADQAAAKgQAHQgNAGgMAAQgTAAgMgKgAgRgWQgHAIgDAPIAagLQAOgIAHgGQgHgGgNAAQgKAAgHAIg");
	this.shape_17.setTransform(356.2,202);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdBDQgLgDAAgGQAAgIAIAAIAKACQAHABAJAAQAPAAAHgQQAEgLAAgVQgFAIgGAFQgGAEgIAAQgPAAgKgLQgKgKAAgQQAAgXAOgPQANgOAXAAQAIAAAFACQAGACADAEQAJAAAAAKIgCARIgCAQIgCAcQgBARgDALQgEAOgIAGQgKAIgTAAQgLAAgIgBgAgPgqQgIAKAAAQQAAAMAFAFQAEAHAKAAQAIAAAIgJQAHgJABgJIAEgdIgHgEIgIgBQgPAAgJALg");
	this.shape_18.setTransform(346.4,204.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeA7QgMgMAAgUQAAgWAMgNQAMgOATAAQAKAAAFADIAIAGQABgkACgNQABgHAHgBQAIAAAAAJQAAAMgEAoIgBAZQAAAdADAOIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAFgHACQgGADgGgBQgSABgMgMgAgUABQgHAJAAARQAAAMAIAHQAIAIALAAQAGAAAFgDIAJgHIADgCIgBgPIABgKIAAgKQgEgHgFgCQgFgEgIAAQgNAAgIAHg");
	this.shape_19.setTransform(336.6,199.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgRATAAQAOAAAJAFQALAGAAAMQAAAJgKAHIgSAIIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQAKgDADgEQADgFADAAQADAAACACQADACAAADQAAAKgQAHQgNAGgMAAQgTAAgMgKgAgRgWQgHAIgDAPIAagLQAOgIAHgGQgHgGgNAAQgKAAgHAIg");
	this.shape_20.setTransform(326.9,202);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgRATAAQAOAAAJAFQALAGAAAMQAAAJgKAHIgSAIIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQAKgDADgEQADgFADAAQADAAACACQADACAAADQAAAKgQAHQgNAGgMAAQgTAAgMgKgAgRgWQgHAIgDAPIAagLQAOgIAHgGQgHgGgNAAQgKAAgHAIg");
	this.shape_21.setTransform(312,202);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAYBBIgFgUIgBgUIAAgHIAAgHQABgQgJAAQgKABgIAIQgFAGgHAOQAAAggDAHQgCAFgFAAQgEAAgCgDQgDgCAAgEIABgDQABgDAAgJIAAgOIAAg+IABgNIgBgJIgBgIQAAgDACgDQADgDAEABQAHAAABAHIACAPIgBATIAAATIAAAHQAGgJAIgFQAIgFAIAAQAPABAFAIQAEAHAAAPIABAQIABASIAEASIAAACQAAAEgDACQgCACgEABQgGgBgBgGg");
	this.shape_22.setTransform(302.1,199.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFA9QgCgDAAgDIAAgKIABgKIgCgxIgTgBQgIgBAAgIQAAgDADgDQABgCAFAAIASABIgBgMIAAgKQAAgEACgCQACgDAEAAQAHAAABANIABAIIgBAFIAAAFIANgBIALAAQAFACAAAGQAAAEgCADQgCACgEAAIgFAAIgDAAIgMABIACAyIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_23.setTransform(292.7,200.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAVAqIgDgTIAAgTIAAgHIAAgIQAAgTgHAAQgJAAgJAMQgHAKgEAPIgBAIIgBAJIABAHIAAAIQAAAEgCACQgCADgEAAQgEAAgDgDQgBgCAAgEIgBgIIgBgHIACgYIAAgYIAAgIIAAgJQAAgDACgDQADgCAEAAQAHAAABALIABAKQAOgTAOAAQAOAAAFAMQAEAIAAAQIAAAJIAAAHQAAAHACALQACALAAAHQAAAEgCADQgDACgEAAQgHAAgBgIg");
	this.shape_24.setTransform(279,201.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAGAZQgDgHgBgNIgCgSIgHAPIgNAkQgBADgDACQgCAFgGAAQgGAAgGgaIgHgjIgCgNIAAgNQgBgDADgDQADgCADAAQAHAAABAHIACANIABAMIAGAmQAJgaAKgiQADgKAGAAQAHAAACALIAGAfQADAUADANIAGgYIALguQACgFAFAAQAEAAADADQACACABAEIgBADQgHAcgLAjQgDAIgFAIQgDAEgFAAQgKAAgEgXg");
	this.shape_25.setTransform(268.2,202.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAHAOAAARQAAATgKANQgLAPgRAAQgPAAgKgKgAgPgQQgFAJAAALQAAANAHAHQAFAFAIABQAIgBAGgGQAHgHABgMQABghgTAAQgMABgHAMg");
	this.shape_26.setTransform(257.3,202.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeA7QgMgMAAgUQAAgWAMgNQAMgOATAAQAKAAAFADIAIAGQABgkACgNQABgHAHgBQAIAAAAAJQAAAMgEAoIgBAZQAAAdADAOIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAFgHACQgGADgGgBQgSABgMgMgAgUABQgHAJAAARQAAAMAIAHQAIAIALAAQAGAAAFgDIAJgHIADgCIgBgPIABgKIAAgKQgEgHgFgCQgFgEgIAAQgNAAgIAHg");
	this.shape_27.setTransform(247.6,199.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXAwQgNgFAAgJQAAgDADgCQACgDAEAAQACAAAEAEQADACAHABIAJABQAHAAAFgCQAIgCAAgGQAAgLgQgEIgIgCQgMgDgEgDQgHgDAAgKQAAgTARgHQAFgDAKgCIAQgGQAEgCAEABQAEgBACADQACADAAADIABAIIABAHQAAADgCADQgCACgEAAQgFAAgCgDIgCgJIgUAGQgMAGAAAHIAFACQASAEAKAFQAOAJAAAQQAAAPgMAHQgKAGgPgBQgLABgKgEg");
	this.shape_28.setTransform(232.7,201.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIAAgHIABgIQAAgTgHAAQgKAAgIAMQgHAKgEAPIgBAIIgBAJIABAHIAAAIQAAAEgCACQgDADgEAAQgDAAgDgDQgCgCAAgEIgBgIIAAgHIABgYIABgYIAAgIIAAgJQAAgDACgDQADgCADAAQAJAAAAALIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAAQIAAAJIAAAHQAAAHACALQACALAAAHQAAAEgDADQgCACgEAAQgHAAgBgIg");
	this.shape_29.setTransform(224.3,201.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AATApQgKAGgOAAQgLAAgHgFQgIgGgCgKQgDgXAAgRQAAgMADgPQAAgHAIAAQADAAADACQACADAAADIgBANIgBANIABAYQABAKACAGIAFACIAFABQALAAANgEIAAgRIAAgQQgBgSACgOQABgIAIAAQADAAADADQACACAAAEIgBAgIAAASIAAASIAAAGIAAAGQAAADgCADQgDACgDAAQgHAAgCgIg");
	this.shape_30.setTransform(215,202);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghAnIAAg6IAAgJIABgIQAAgKAHABQAJAAAAAOQAQgQATAAQAHAAAEAFQAEAGAAAKIgBAGQgBALgHAAQgIAAAAgIIAAgHIAAgHQgOABgHAHQgIAFgEALIAAAuQAAAJgJAAQgHAAgBgJg");
	this.shape_31.setTransform(206.4,202);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgRATAAQAOAAAJAFQALAGAAAMQAAAJgKAHIgSAIIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQAKgDADgEQADgFADAAQADAAACACQADACAAADQAAAKgQAHQgNAGgMAAQgTAAgMgKgAgRgWQgHAIgDAPIAagLQAOgIAHgGQgHgGgNAAQgKAAgHAIg");
	this.shape_32.setTransform(110.1,189.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAXBBIgDgUIgCgVIABgGIAAgHQAAgQgJAAQgKAAgIAJQgEAGgIAOQAAAggDAHQgCAFgFAAQgDAAgDgCQgDgDAAgEIAAgDQACgDAAgJIAAgOIAAg+IABgNIgBgJIgBgIQAAgDADgDQACgDADABQAIAAABAHIACAPIgCATIAAASIAAAIQAIgJAHgFQAHgEAJgBQAOABAGAIQAEAHABAPIAAAQIACASIACARIABADQAAADgDADQgCADgEAAQgGAAgCgHg");
	this.shape_33.setTransform(100.2,187);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFA9QgCgDAAgDIAAgKIAAgKIgBgxIgTgBQgIgBAAgIQAAgDACgDQACgCAFAAIASABIgBgMIAAgKQAAgEACgCQADgDADAAQAHAAABANIABAIIgBAFIAAAFIAMgBIAMAAQAFACAAAGQAAAEgCADQgCACgEAAIgFAAIgEAAIgLABIACAyIAAAEIAAAEQAAATgJAAQgDAAgDgCg");
	this.shape_34.setTransform(90.8,187.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEA9QgDgDAAgDIAAgKIAAgKIgBgxIgUgBQgHgBAAgIQAAgDADgDQACgCADAAIASABIAAgMIgBgKQABgEACgCQACgDAEAAQAHAAABANIAAAIIAAAFIAAAFIAMgBIAMAAQAFACAAAGQAAAEgCADQgDACgDAAIgEAAIgFAAIgMABIACAyIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_35.setTransform(77.2,187.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AATApQgKAGgNAAQgLAAgIgFQgJgGgBgKQgDgXAAgRQAAgMACgPQACgHAGAAQAFAAACACQACADAAADIgBANIgBANIAAAYQABAKACAGIAGACIAGABQAKAAANgEIgBgRIAAgQQABgSABgOQABgIAHAAQAEAAADADQACACAAAEIgCAgIAAASIAAASIABAGIAAAGQAAADgCADQgDACgEAAQgGAAgCgIg");
	this.shape_36.setTransform(68.6,189.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZBAQgDAEgEAAQgEAAgCgCQgCgCAAgEIAAgGIAAgHIAAgbIAAgaIAAgYIAAgYQAAgFACgEQADgFAEAAQAHAAAAAHIAAAEIAAADIgBATIAAAWQAIgFAGgDQAHgCAFAAQASAAAMAOQALAMgBAUQAAATgMAOQgMANgTAAQgNAAgKgFgAgNgDIgMAHIAAAPIAAAOIAAAOIAMAEQAFACAGAAQAMAAAIgJQAIgIAAgNQAAgNgGgJQgIgIgLAAQgGAAgIAEg");
	this.shape_37.setTransform(59,187);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaBFQgKgDgFgDIAAAAQgEAAgDgDQgCgCAAgEIABgbIABgbIgBgdIAAgeQAAgEADgDQAEgEAEAAQACAAALAGIAQAHQAXAIARARQAUAVAAAXQAAAPgHANQgHANgLAJQgOAJgYAAQgGAAgIgCgAgfgXIAAAYIgCAuIACABQAIAFALABQATgBAJgGQAIgFAFgKQAFgJAAgLQAAgXgagRQgIgFgggPg");
	this.shape_38.setTransform(189.3,201.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag5BDQgCgDAAgDIAAgLIABgMIAAgPIAAgQIAAgRIAAgRIgBgQIgBgPQAAgFADgDQAEgDAEAAQAEAAAIAKQAUAgARAVQAUAYAZAXIAAgLIgBgLQAAgkgDgWIgCgJIgCgJQAAgKAJAAQAPAAAAA3IAAAcIAAAcIgCAOQgBAIgIABQgEAAgHgHQgjghgsg9IgBATIAAATIAAAVIAAAVQAAAYgIAAQgFAAgDgDg");
	this.shape_39.setTransform(175.8,201.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUBFQgagHgJgTQgHgOAEgYIAKgqIAGgSIAEgKQAEgGAFACQAIACgEAOIgNAwQgOAxAjAKQAgAJAXhUIACgIIACgGQABgFADgEQAEgEAEABQAJACgDAMIgDAKIgDAKQgXBTgnAAQgGAAgGgBg");
	this.shape_40.setTransform(162.6,194.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAdBKQgEgBgCgDQgUgjgegSIgEAQIgEARQgBADgDACQgDACgEgBQgDgBgBgDQgCgDABgEIAEgTIAFgUQACgHAGgPIAHgWIADgMIADgNQABgFADgDQAEgDAGABIATAIQALAEAGAGQAdAbgHAaQgDALgOAHQgLAFgPABQAWAVAIASQACAEgBADQgBADgDACIgEABIgCAAgAgIgrIgCAKIgGAQIgGAQIAEABIADAAQAVAGAMgDQAFgBAFgCQAGgEABgDQADgLgLgOQgKgMgMgFIgLgEg");
	this.shape_41.setTransform(149.9,192.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AglBCQgIgHAAgcIAAgMIABgPIgBgDQAAgDABgCIADglIgBgJIgCgJQAAgKAJAAQAEAAACACIAUgEIAQgBQAVAAANAFQAFACAAAGQAAAEgCACQgCADgEAAIgDAAQgOgEgOgBIgPACIgSADIACAJIgCAiIAlgEIAUgCQAEAAADACQACADAAAEQAAAGgIABIgUACIgnAEIgBAMIAAAKQAAATADADQACACALABIAQgBIAQAAIAEAAIAGgBQAIAAABAJQgBAHgGACQgJABgaAAQgaAAgIgHg");
	this.shape_42.setTransform(136.7,187.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgrA6QgLgLAAgYQAAgWALgXQALgXAQgOQALgLALABQAIgBAMAGQAQAGAAAIQAAADgCADQgDACgEABIgFgCQgNgJgJABQgGAAgGAGIgKANQgVAZAAAeQABARAFAGQAFAHAOAAQAPAAALgKQAMgKAFgUQgYACgQAIIgEABQgEAAgCgDQgCgCgBgFQABgEAEgDQARgKAuAAQAEAAACACQACACABADQAAAGgFADQgGAagQAQQgSAPgWAAQgUAAgLgMg");
	this.shape_43.setTransform(125.1,187.8);

	this.instance_2 = new lib.GerundonaCarat();
	this.instance_2.parent = this;
	this.instance_2.setTransform(277.2,160.4,1.352,1.352,0,0,0,162.3,15.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0000FF").s().p("AgEA9QgDgDAAgDIAAgKIAAgKIgBgxIgUgBQgHgBAAgIQAAgDADgDQACgCADAAIASABIAAgMIgBgKQABgEACgCQACgDAEAAQAHAAABANIAAAIIAAAFIAAAFIAMgBIAMAAQAFACAAAGQAAAEgCADQgDACgDAAIgEAAIgFAAIgMABIACAyIAAAEIAAAEQABATgKAAQgCAAgCgCg");
	this.shape_44.setTransform(77.2,187.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0000FF").s().p("AATApQgKAGgNAAQgLAAgIgFQgJgGgBgKQgDgXAAgRQAAgMACgPQACgHAGAAQAFAAACACQACADAAADIgBANIgBANIAAAYQABAKACAGIAGACIAGABQAKAAANgEIgBgRIAAgQQABgSABgOQABgIAHAAQAEAAADADQACACAAAEIgCAgIAAASIAAASIABAGIAAAGQAAADgCADQgDACgEAAQgGAAgCgIg");
	this.shape_45.setTransform(68.6,189.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0000FF").s().p("AgZBAQgDAEgEAAQgEAAgCgCQgCgCAAgEIAAgGIAAgHIAAgbIAAgaIAAgYIAAgYQAAgFACgEQADgFAEAAQAHAAAAAHIAAAEIAAADIgBATIAAAWQAIgFAGgDQAHgCAFAAQASAAAMAOQALAMgBAUQAAATgMAOQgMANgTAAQgNAAgKgFgAgNgDIgMAHIAAAPIAAAOIAAAOIAMAEQAFACAGAAQAMAAAIgJQAIgIAAgNQAAgNgGgJQgIgIgLAAQgGAAgIAEg");
	this.shape_46.setTransform(59,187);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000FF").s().p("AgaBFQgKgDgFgDIAAAAQgEAAgDgDQgCgCAAgEIABgbIABgbIgBgdIAAgeQAAgEADgDQAEgEAEAAQACAAALAGIAQAHQAXAIARARQAUAVAAAXQAAAPgHANQgHANgLAJQgOAJgYAAQgGAAgIgCgAgfgXIAAAYIgCAuIACABQAIAFALABQATgBAJgGQAIgFAFgKQAFgJAAgLQAAgXgagRQgIgFgggPg");
	this.shape_47.setTransform(189.3,201.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000FF").s().p("Ag5BDQgCgDAAgDIAAgLIABgMIAAgPIAAgQIAAgRIAAgRIgBgQIgBgPQAAgFADgDQAEgDAEAAQAEAAAIAKQAUAgARAVQAUAYAZAXIAAgLIgBgLQAAgkgDgWIgCgJIgCgJQAAgKAJAAQAPAAAAA3IAAAcIAAAcIgCAOQgBAIgIABQgEAAgHgHQgjghgsg9IgBATIAAATIAAAVIAAAVQAAAYgIAAQgFAAgDgDg");
	this.shape_48.setTransform(175.8,201.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0000FF").s().p("AgUBFQgagHgJgTQgHgOAEgYIAKgqIAGgSIAEgKQAEgGAFACQAIACgEAOIgNAwQgOAxAjAKQAgAJAXhUIACgIIACgGQABgFADgEQAEgEAEABQAJACgDAMIgDAKIgDAKQgXBTgnAAQgGAAgGgBg");
	this.shape_49.setTransform(162.6,194.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0000FF").s().p("AAdBKQgEgBgCgDQgUgjgegSIgEAQIgEARQgBADgDACQgDACgEgBQgDgBgBgDQgCgDABgEIAEgTIAFgUQACgHAGgPIAHgWIADgMIADgNQABgFADgDQAEgDAGABIATAIQALAEAGAGQAdAbgHAaQgDALgOAHQgLAFgPABQAWAVAIASQACAEgBADQgBADgDACIgEABIgCAAgAgIgrIgCAKIgGAQIgGAQIAEABIADAAQAVAGAMgDQAFgBAFgCQAGgEABgDQADgLgLgOQgKgMgMgFIgLgEg");
	this.shape_50.setTransform(149.9,192.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0000FF").s().p("AglBCQgIgHAAgcIAAgMIABgPIgBgDQAAgDABgCIADglIgBgJIgCgJQAAgKAJAAQAEAAACACIAUgEIAQgBQAVAAANAFQAFACAAAGQAAAEgCACQgCADgEAAIgDAAQgOgEgOgBIgPACIgSADIACAJIgCAiIAlgEIAUgCQAEAAADACQACADAAAEQAAAGgIABIgUACIgnAEIgBAMIAAAKQAAATADADQACACALABIAQgBIAQAAIAEAAIAGgBQAIAAABAJQgBAHgGACQgJABgaAAQgaAAgIgHg");
	this.shape_51.setTransform(136.7,187.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0000FF").s().p("AgrA6QgLgLAAgYQAAgWALgXQALgXAQgOQALgLALABQAIgBAMAGQAQAGAAAIQAAADgCADQgDACgEABIgFgCQgNgJgJABQgGAAgGAGIgKANQgVAZAAAeQABARAFAGQAFAHAOAAQAPAAALgKQAMgKAFgUQgYACgQAIIgEABQgEAAgCgDQgCgCgBgFQABgEAEgDQARgKAuAAQAEAAACACQACACABADQAAAGgFADQgGAagQAQQgSAPgWAAQgUAAgLgMg");
	this.shape_52.setTransform(125.1,187.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0000FF").s().p("AgXAwQgNgFAAgJQAAgDADgCQACgDAEAAQACAAAEAEQADACAHABIAJABQAHAAAFgCQAIgCAAgGQAAgLgQgEIgIgCQgMgDgEgDQgHgDAAgKQAAgTARgHQAFgDAKgCIAQgGQAEgCAEABQAEgBACADQACADAAADIABAIIABAHQAAADgCADQgCACgEAAQgFAAgCgDIgCgJIgUAGQgMAGAAAHIAFACQASAEAKAFQAOAJAAAQQAAAPgMAHQgKAGgPgBQgLABgKgEg");
	this.shape_53.setTransform(232.7,201.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000FF").s().p("AAVAqIgDgTIgBgTIAAgHIABgIQAAgTgHAAQgKAAgIAMQgHAKgEAPIgBAIIgBAJIABAHIAAAIQAAAEgCACQgDADgEAAQgDAAgDgDQgCgCAAgEIgBgIIAAgHIABgYIABgYIAAgIIAAgJQAAgDACgDQADgCADAAQAJAAAAALIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAAQIAAAJIAAAHQAAAHACALQACALAAAHQAAAEgDADQgCACgEAAQgHAAgBgIg");
	this.shape_54.setTransform(224.3,201.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0000FF").s().p("AATApQgKAGgOAAQgLAAgHgFQgIgGgCgKQgDgXAAgRQAAgMADgPQAAgHAIAAQADAAADACQACADAAADIgBANIgBANIABAYQABAKACAGIAFACIAFABQALAAANgEIAAgRIAAgQQgBgSACgOQABgIAIAAQADAAADADQACACAAAEIgBAgIAAASIAAASIAAAGIAAAGQAAADgCADQgDACgDAAQgHAAgCgIg");
	this.shape_55.setTransform(215,202);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0000FF").s().p("AghAnIAAg6IAAgJIABgIQAAgKAHABQAJAAAAAOQAQgQATAAQAHAAAEAFQAEAGAAAKIgBAGQgBALgHAAQgIAAAAgIIAAgHIAAgHQgOABgHAHQgIAFgEALIAAAuQAAAJgJAAQgHAAgBgJg");
	this.shape_56.setTransform(206.4,202);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0000FF").s().p("AAVAqIgDgTIAAgTIAAgHIAAgIQAAgTgHAAQgJAAgJAMQgHAKgEAPIgBAIIgBAJIABAHIAAAIQAAAEgCACQgCADgEAAQgEAAgDgDQgBgCAAgEIgBgIIgBgHIACgYIAAgYIAAgIIAAgJQAAgDACgDQADgCAEAAQAHAAABALIABAKQAOgTAOAAQAOAAAFAMQAEAIAAAQIAAAJIAAAHQAAAHACALQACALAAAHQAAAEgCADQgDACgEAAQgHAAgBgIg");
	this.shape_57.setTransform(279,201.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0000FF").s().p("AAGAZQgDgHgBgNIgCgSIgHAPIgNAkQgBADgDACQgCAFgGAAQgGAAgGgaIgHgjIgCgNIAAgNQgBgDADgDQADgCADAAQAHAAABAHIACANIABAMIAGAmQAJgaAKgiQADgKAGAAQAHAAACALIAGAfQADAUADANIAGgYIALguQACgFAFAAQAEAAADADQACACABAEIgBADQgHAcgLAjQgDAIgFAIQgDAEgFAAQgKAAgEgXg");
	this.shape_58.setTransform(268.2,202.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0000FF").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAHAOAAARQAAATgKANQgLAPgRAAQgPAAgKgKgAgPgQQgFAJAAALQAAANAHAHQAFAFAIABQAIgBAGgGQAHgHABgMQABghgTAAQgMABgHAMg");
	this.shape_59.setTransform(257.3,202.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0000FF").s().p("AgeA7QgMgMAAgUQAAgWAMgNQAMgOATAAQAKAAAFADIAIAGQABgkACgNQABgHAHgBQAIAAAAAJQAAAMgEAoIgBAZQAAAdADAOIAAACQAAAEgCACQgDACgDAAQgFAAgDgIQgGAFgHACQgGADgGgBQgSABgMgMgAgUABQgHAJAAARQAAAMAIAHQAIAIALAAQAGAAAFgDIAJgHIADgCIgBgPIABgKIAAgKQgEgHgFgCQgFgEgIAAQgNAAgIAHg");
	this.shape_60.setTransform(247.6,199.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0000FF").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgRATAAQAOAAAJAFQALAGAAAMQAAAJgKAHIgSAIIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQAKgDADgEQADgFADAAQADAAACACQADACAAADQAAAKgQAHQgNAGgMAAQgTAAgMgKgAgRgWQgHAIgDAPIAagLQAOgIAHgGQgHgGgNAAQgKAAgHAIg");
	this.shape_61.setTransform(356.2,202);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0000FF").s().p("AgdBDQgLgDAAgGQAAgIAIAAIAKACQAHABAJAAQAPAAAHgQQAEgLAAgVQgFAIgGAFQgGAEgIAAQgPAAgKgLQgKgKAAgQQAAgXAOgPQANgOAXAAQAIAAAFACQAGACADAEQAJAAAAAKIgCARIgCAQIgCAcQgBARgDALQgEAOgIAGQgKAIgTAAQgLAAgIgBgAgPgqQgIAKAAAQQAAAMAFAFQAEAHAKAAQAIAAAIgJQAHgJABgJIAEgdIgHgEIgIgBQgPAAgJALg");
	this.shape_62.setTransform(346.4,204.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0000FF").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgRATAAQAOAAAJAFQALAGAAAMQAAAJgKAHIgSAIIggAQQAFAHAHAEQAHADAJAAQAGAAAIgCQAKgDADgEQADgFADAAQADAAACACQADACAAADQAAAKgQAHQgNAGgMAAQgTAAgMgKgAgRgWQgHAIgDAPIAagLQAOgIAHgGQgHgGgNAAQgKAAgHAIg");
	this.shape_63.setTransform(326.9,202);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0000FF").s().p("AgEAyQgDgCABgEIgCgeIgDgeQAAgJgCgFQgGACgGAHIgKALIgFAFIgBAPIgBAOIABAIIABAGQAAAEgCACQgDADgEAAQgKAAAAgWIABgQIABgOIgBgOIgBgOQAAgTAJAAQAEAAADADQACADAAADIAAAFIgBAGIAAAJQAFgKAJgHQAJgHAFAAQAOAAAEANQAFgGAGgDQAHgEAIAAQAOAAAGAQIAEAYIAFAwQAAAEgCACQgDACgDAAQgHAAgCgHIgDgbIgCgZQgBgGgDgGQgCgIgDAAQgEAAgJAGIgLAIIABAQIADAWQACANAAAJQgBAEgCACQgCADgEAAQgCAAgDgDg");
	this.shape_64.setTransform(480.8,202);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0000FF").s().p("AAbAsQgEgDgBgDIgPAGQgGADgDAAQgVAAgJgMQgIgKAAgWQAAgUAOgPQAOgPATAAQAHAAAKAFQALAEAAAHIgBAEIgCALIAAASQAAAKABAHIAGAPIACAFIAAABQAAADgCADQgDACgDAAQgBgBgFgDgAgOgVQgJAMAAANQAAAOAFAGQAEAIAKgBQAIAAAFgCQAEgCAFgFQgDgWAAgLIABgIIABgJIgFgDIgEAAQgMgBgKALg");
	this.shape_65.setTransform(469.4,202.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0000FF").s().p("AggAnIAAg6IAAgJIAAgIQAAgKAIABQAIAAAAAOQAQgQAUAAQAGAAAEAFQAEAGgBAKIAAAGQAAALgJAAQgHAAAAgIIAAgHIgBgHQgNABgHAHQgIAFgEALIAAAuQAAAJgJAAQgHAAAAgJg");
	this.shape_66.setTransform(460.9,202);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0000FF").s().p("AAbAsQgEgDgBgDIgPAGQgGADgDAAQgVAAgJgMQgIgKAAgWQAAgUAOgPQAOgPATAAQAHAAAKAFQALAEAAAHIgBAEIgCALIAAASQAAAKABAHIAGAPIACAFIAAABQAAADgCADQgDACgDAAQgBgBgFgDgAgOgVQgJAMAAANQAAAOAFAGQAEAIAKgBQAIAAAFgCQAEgCAFgFQgDgWAAgLIABgIIABgJIgFgDIgEAAQgMgBgKALg");
	this.shape_67.setTransform(442.6,202.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0000FF").s().p("AgHA+QgDgDAAgDIgBgPIAAgQIABgUIABgTQAAgEADgCQACgDAEAAQACAAACADQADACAAAEIgBATIgBAUIAAAQIABAPQAAADgDADQgCADgDgBQgDABgCgDgAgFguQgDgDAAgFQAAgEADgDQADgCAEAAQADAAAEACQACADAAAEQAAAFgCADQgEACgDAAQgEAAgDgCg");
	this.shape_68.setTransform(435.8,199.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0000FF").s().p("AAVAqIgDgTIgBgTIAAgHIABgIQAAgTgHAAQgKAAgIAMQgHAKgEAPIgBAIIgBAJIABAHIAAAIQAAAEgCACQgDADgDAAQgEAAgDgDQgCgCAAgEIgBgIIAAgHIABgYIABgYIAAgIIAAgJQAAgDACgDQADgCADAAQAJAAAAALIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAAQIAAAJIAAAHQAAAHACALQACALAAAHQAAAEgDADQgCACgEAAQgHAAgBgIg");
	this.shape_69.setTransform(507.3,201.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0000FF").s().p("AgIA+QgCgDAAgDIgBgPIAAgQIABgUIABgTQAAgEACgCQADgDADAAQADAAADADQACACAAAEIgBATIgBAUIABAQIAAAPQAAADgCADQgDADgDgBQgEABgCgDgAgFguQgDgDAAgFQAAgEADgDQADgCADAAQAFAAACACQADADABAEQgBAFgDADQgCACgFAAQgDAAgDgCg");
	this.shape_70.setTransform(500.2,199.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0000FF").s().p("AgJA+IABgfIABgfIAAgeIABgfQAAgJAHAAQAJAAAAAJIgBAfIAAAeIgBAqIgBAUQgBAJgGAAQgJAAAAgJg");
	this.shape_71.setTransform(495.2,199.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:312,y:202}},{t:this.shape_20,p:{x:326.9,y:202}},{t:this.shape_19,p:{x:336.6}},{t:this.shape_18},{t:this.shape_17,p:{x:356.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:412.9}},{t:this.shape_11,p:{x:427.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:451.6}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:516.7}},{t:this.shape},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:312,y:202}},{t:this.shape_20,p:{x:326.9,y:202}},{t:this.shape_19,p:{x:336.6}},{t:this.shape_18},{t:this.shape_17,p:{x:356.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:412.9}},{t:this.shape_11,p:{x:427.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:451.6}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:516.7}},{t:this.shape},{t:this.instance_1}]},39).to({state:[{t:this.instance_2},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:312,y:202}},{t:this.shape_20,p:{x:326.9,y:202}},{t:this.shape_19,p:{x:336.6}},{t:this.shape_18},{t:this.shape_17,p:{x:356.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:412.9}},{t:this.shape_11,p:{x:427.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:451.6}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:516.7}},{t:this.shape},{t:this.instance_1}]},10).to({state:[{t:this.instance_2},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:312,y:202}},{t:this.shape_20,p:{x:326.9,y:202}},{t:this.shape_19,p:{x:336.6}},{t:this.shape_18},{t:this.shape_17,p:{x:356.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:412.9}},{t:this.shape_11,p:{x:427.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:451.6}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:516.7}},{t:this.shape},{t:this.instance_1}]},6).to({state:[{t:this.instance_2},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_60,p:{x:247.6}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:312,y:202}},{t:this.shape_20,p:{x:326.9,y:202}},{t:this.shape_19,p:{x:336.6}},{t:this.shape_18},{t:this.shape_17,p:{x:356.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:412.9}},{t:this.shape_11,p:{x:427.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:451.6}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:516.7}},{t:this.shape},{t:this.instance_1}]},7).to({state:[{t:this.instance_2},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_20,p:{x:110.1,y:189.3}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_19,p:{x:247.6}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_17,p:{x:312}},{t:this.shape_63},{t:this.shape_60,p:{x:336.6}},{t:this.shape_62,p:{x:346.4}},{t:this.shape_61,p:{x:356.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:412.9}},{t:this.shape_11,p:{x:427.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:451.6}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:516.7}},{t:this.shape},{t:this.instance_1}]},7).to({state:[{t:this.instance_2},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_19,p:{x:247.6}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:312,y:202}},{t:this.shape_20,p:{x:326.9,y:202}},{t:this.shape_11,p:{x:336.6}},{t:this.shape_8,p:{x:346.4}},{t:this.shape_17,p:{x:356.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:412.9}},{t:this.shape_60,p:{x:427.9}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_62,p:{x:451.6}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:516.7}},{t:this.shape},{t:this.instance_1}]},9).to({state:[{t:this.instance_2},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_21,p:{x:110.1,y:189.3}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_20,p:{x:312,y:202}},{t:this.shape_17,p:{x:326.9}},{t:this.shape_19,p:{x:336.6}},{t:this.shape_18},{t:this.shape_12,p:{x:356.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_1,p:{x:412.9}},{t:this.shape_11,p:{x:427.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:451.6}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_61,p:{x:516.7}},{t:this.shape},{t:this.instance_1}]},7).to({state:[]},12).wait(131));

	// main
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape_72.setTransform(53.3,10.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgFAiQgCgCAAgEIgBgTIgBgTIgBgGQgHAEgHAJIgBABIAAASIAAAEIgBAEQABAEgDABQgCACgEAAQgEAAgDgEIgBgKIAAgUIAAgJIAAgJQAAgFACgEQACgFAEAAQADAAADACQADADgBADIAAAFQAJgKAIAAQAJAAADAGQADgDAFgBQAEgCAFAAQAMAAAEAMIACAPIAFAfQAAADgCADQgDACgDAAQgHAAgCgHIgBgRIgCgQQgCgLgDAAIgGADIgGAFIABASIABATQAAAEgBACQgDACgEAAQgCAAgDgCg");
	this.shape_73.setTransform(45.5,10.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAMAdQgIADgHAAQgIAAgGgEQgGgEgBgHQgDgPAAgKQAAgIACgKQABgGAHAAQADAAADACQACACAAADIgBAIIAAAIIAAAOIACAKIADABIACAAQAGAAAIgCIAAgKIgBgJIABgUQABgHAHAAQAEAAACACQADACAAADIgBAVIAAALIAAAMIAAADIAAAEQAAADgCACQgDACgDAAQgFAAgCgEg");
	this.shape_74.setTransform(37.6,10.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgFAuQgCgCAAgEIAAhQQAAgDACgCQACgCADAAQAEAAACACQACACAAADIAABNQAAALgIAAQgDAAgCgCg");
	this.shape_75.setTransform(32.8,8.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_76.setTransform(28,10.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgMAqQgHgRgJgfIgEgQQgEgLAAgFQAAgDADgCQACgCADAAQAGAAACAFIACALIAHATIAIAcIANgiIAFgOQADgJAFgEQACgDADAAQAEAAACACQADACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgFALIgFAMIgQAoIgGAOQgDAEgDAAQgGAAgDgFg");
	this.shape_77.setTransform(21,9.1);

	this.vol_up = new lib.pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(51.8,25.9,1,1,0,0,0,7,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.pos(), 3);

	this.vol_dwn = new lib.neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(21.8,25.9,1,1,0,0,0,7,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.neg(), 3);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_3 = new lib.Copyright("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance_4 = new lib.Bk();
	this.instance_4.parent = this;
	this.instance_4.setTransform(275.1,192,1,1,0,0,0,256.8,150.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0000FF").s().p("AgiBDQgOgOAAgWQAAgaAOgPQAOgQAVAAQALAAAGAEIAKAHIADg4QABgIAIAAQAJAAAAAKQAAANgEAuIgBAcQAAAgADARIAAACQAAAEgDADQgDADgDgBQgGABgDgKQgHAFgIADQgHADgIAAQgUAAgNgNgAgWACQgIAJAAAUQAAANAJAIQAIAKAMgBQAIAAAFgCQAEgCAHgGIADgDIAAgRIAAgMIAAgMQgEgHgGgDQgGgEgJAAQgPAAgIAJg");
	this.shape_78.setTransform(378.1,25.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0000FF").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_79.setTransform(367,28.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0000FF").s().p("AgFA6QgDgDAAgFIgCgiQgCgXAAgLQAAgLgDgFQgHADgHAHIgMANIgFAGIgBAQIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADADQADADAAAEIAAAGIAAAGIAAAKQAFgKAKgIQAKgJAGAAQAQAAAFAPQAFgHAHgDQAIgEAJAAQARAAAGASIAEAbIAHA3QAAAEgDADQgDACgEAAQgIAAgCgIIgDgeIgDgeIgEgNQgDgJgEAAQgEAAgJAGQgKAGgDAEIABASIADAZQACAPAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_80.setTransform(353.7,28.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0000FF").s().p("AgFA6QgDgDAAgFIgCgiQgCgXAAgLQAAgLgDgFQgHADgHAHIgMANIgFAGIgBAQIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADADQADADAAAEIAAAGIAAAGIAAAKQAFgKAKgIQAKgJAGAAQAQAAAFAPQAFgHAHgDQAIgEAJAAQARAAAGASIAEAbIAHA3QAAAEgDADQgDACgEAAQgIAAgCgIIgDgeIgDgeIgEgNQgDgJgEAAQgEAAgJAGQgKAGgDAEIABASIADAZQACAPAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_81.setTransform(338.2,28.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0000FF").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAPgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_82.setTransform(325.2,28.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0000FF").s().p("AglAtIAAhEIABgJIAAgKQAAgKAIAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgJAHQgIAHgGAMIABA1QAAAKgKAAQgJAAAAgKg");
	this.shape_83.setTransform(315.5,28.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0000FF").s().p("AghBMQgNgDAAgHQAAgJAJAAIAMACQAIABAKAAQASAAAHgSQAEgMABgYQgGAJgGAFQgIAFgIAAQgSAAgLgMQgLgMAAgTQAAgaAPgQQAQgQAaAAQAIAAAHACQAGACADAFQALAAAAALQgBAIgCALIgCASIgCAgQgBAUgEAMQgDAQgKAIQgMAJgWAAQgMgBgJgBgAgRgwQgJALAAASQAAAPAFAFQAGAIALgBQAIABAKgKQAIgLABgKIAEghIgHgEIgJgCQgSAAgKANg");
	this.shape_84.setTransform(305,30.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0000FF").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQAOAGgBAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgDgZgBgNIABgJIACgKIgGgDIgEgBQgPAAgKAMg");
	this.shape_85.setTransform(294.8,28.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0000FF").s().p("AgJBHQgDgDAAgFIAAgRIAAgSIABgWIABgWQAAgFACgDQAEgCADAAQAEAAACACQADADAAAFIgBAWIgBAWIAAASIABARQAAAFgDADQgDACgDAAQgEAAgDgCgAgFg1QgEgEAAgEQAAgFAEgDQADgDAEgBQAFABADADQADADAAAFQAAAEgDAEQgDAEgFAAQgEAAgDgEg");
	this.shape_86.setTransform(287,25.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0000FF").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_87.setTransform(277.1,26);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0000FF").s().p("AgmBDQgSgHgBgPQAAgEADgDQADgCAEAAQAFgBAEAGQAEAHAEADQAIAFARABQAOgBANgGQAQgIAAgPQAAgNgOgHQgLgGgRAAQgPgBgLgFQgOgIAAgPQAAgRATgOQATgPAUAAQAJAAAMAEQAQAEAAAHQAAAJgJAAIgOgDIgPgCQgOABgLAGQgKAIAAALQAAAIANAEIAVACQAWACAMAMQAMAKAAAQQAAAYgWAOQgSALgXABQgTAAgOgIg");
	this.shape_88.setTransform(256.8,26.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0000FF").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_89.setTransform(242.8,26);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0000FF").s().p("AhBBNQgCgDAAgFIAAgMIABgNIAAgSIABgSIgBgSIAAgUIgBgSIgCgSQABgFAEgEQADgEAFAAQAGAAAHAMQAYAlATAXQAXAcAcAaIAAgNIgBgLQAAgqgDgaIgDgKIgCgKQAAgMAKAAQARAAABBAIAAAfIgBAhIgBAPQgCAKgJAAQgFAAgIgHQgngmgzhFIAAAVIgBAWIABAYIAAAYQAAAagKAAQgFAAgEgCg");
	this.shape_90.setTransform(227.4,25.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0000FF").s().p("AgqA6QgNgOgDgbQgBgNAAgkIAAgWIACgNQADgHAGAAQAJAAAAAQIAAA6QAAA6AoAAQAnAAAAhjIAAgJIAAgIQAAgGACgFQADgFAGgBQAJAAAAAOIAAAMIAAANQAABvg6AAQgdAAgPgRg");
	this.shape_91.setTransform(212,26);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0000FF").s().p("AgxBKQgDgDAAgEIgBgXIAAgXIACgaIACgbIgBgPIgBgOQAAgGADgEQAEgFAGAAIAYACQANACAIAFQAoAVAAAeQAAAPgOAKQgLAJgQAFQAfAQAPATQACADAAADQAAAEgDADQgDADgEAAQgDAAgEgDQgggggngLIABATIABAUQAAAEgDADQgDADgEAAQgEAAgDgDgAgegrIAAAMIgBATIgCATIAEAAIAEAAQAZAAAMgHQAFgCAFgFQAFgFAAgEQAAgOgPgLQgNgLgQgCIgOgBg");
	this.shape_92.setTransform(198.5,25.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0000FF").s().p("AgqBLQgJgJAAgfIAAgOIAAgQIAAgEQAAgDABgDIACgpIgBgLIgBgKQAAgMAKAAQAFAAACADIAWgEIATgCQAYAAAOAFQAHADAAAHQAAAEgDADQgDADgEAAIgDgBQgRgEgPAAIgQACIgVAEIABAKIgCAmIAqgFIAYgCQADAAADADQAEADAAAEQgBAIgIABIgYACIgsAFIgBAMIAAAMQAAAWADADQADADAMAAIASAAIASAAIAGgBIAFgBQALAAAAALQAAAIgIACQgKABgdAAQgeAAgJgIg");
	this.shape_93.setTransform(186.1,25.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0000FF").s().p("AgyBDQgLgNgBgbQABgaALgZQAMgbAUgRQAMgLANAAQAIAAAPAGQASAHAAAIQAAAEgDAEQgDACgEAAIgGgCQgPgJgKAAQgHAAgIAIQgDAEgIAJQgWAfgBAiQAAASAGAHQAHAIAQAAQAQAAANgLQANgLAGgXQgbACgSAJIgFABQgEAAgDgDQgCgDgBgEQAAgFAGgDQAUgMA0gBQADABAEACQACACAAAEQAAAHgFACQgGAegTATQgUARgZAAQgZAAgMgNg");
	this.shape_94.setTransform(172.9,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.instance_4},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_3},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]}).wait(228));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,198.2,537.1,404.8);
// library properties:
lib.properties = {
	id: '8E763D1D8F0BC8428CE7AABC8DCC7DDD',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic2.mp3", id:"bgmusic2"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/wrong.mp3", id:"wrong"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/cowbell_3times.mp3", id:"cowbell_3times"},
		{src:"sounds/right.mp3", id:"right"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/Flying.mp3", id:"Flying"},
		{src:"sounds/gerundoncarat.mp3", id:"gerundoncarat"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/stacelovesdancing.mp3", id:"stacelovesdancing"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_10a.mp3", id:"_10a"},
		{src:"sounds/_2a.mp3", id:"_2a"}
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
an.compositions['8E763D1D8F0BC8428CE7AABC8DCC7DDD'] = {
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