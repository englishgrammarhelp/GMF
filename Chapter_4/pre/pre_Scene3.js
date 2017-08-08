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


(lib.underline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(3,1,1).p("A4IAAMAwRAAA");
	this.shape.setTransform(-149.5,0,0.041,1,0,0,0,0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF00FF").ss(3,1,1).p("AhxAAIDkAA");
	this.shape_1.setTransform(-144.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF00FF").ss(3,1,1).p("AilAAIFLAA");
	this.shape_2.setTransform(-139.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF00FF").ss(3,1,1).p("AjYAAIGxAA");
	this.shape_3.setTransform(-134,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AkLAAIIXAA");
	this.shape_4.setTransform(-128.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("Ak+AAIJ9AA");
	this.shape_5.setTransform(-123.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AlxAAILjAA");
	this.shape_6.setTransform(-118.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF00FF").ss(3,1,1).p("AmkAAINJAA");
	this.shape_7.setTransform(-113.4,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF00FF").ss(3,1,1).p("AnXAAIOvAA");
	this.shape_8.setTransform(-108.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF00FF").ss(3,1,1).p("AoKAAIQVAA");
	this.shape_9.setTransform(-103.1,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF00FF").ss(3,1,1).p("Ao9AAIR7AA");
	this.shape_10.setTransform(-97.9,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF00FF").ss(3,1,1).p("ApwAAIThAA");
	this.shape_11.setTransform(-92.8,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF00FF").ss(3,1,1).p("AqjAAIVHAA");
	this.shape_12.setTransform(-87.6,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF00FF").ss(3,1,1).p("ArXAAIWuAA");
	this.shape_13.setTransform(-82.4,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF00FF").ss(3,1,1).p("AsKAAIYVAA");
	this.shape_14.setTransform(-77.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF00FF").ss(3,1,1).p("As9AAIZ7AA");
	this.shape_15.setTransform(-72.2,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF00FF").ss(3,1,1).p("AtwAAIbhAA");
	this.shape_16.setTransform(-67,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF00FF").ss(3,1,1).p("AujAAIdHAA");
	this.shape_17.setTransform(-61.8,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF00FF").ss(3,1,1).p("AvWAAIetAA");
	this.shape_18.setTransform(-56.7,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF00FF").ss(3,1,1).p("AwJAAMAgTAAA");
	this.shape_19.setTransform(-51.5,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF00FF").ss(3,1,1).p("Aw8AAMAh5AAA");
	this.shape_20.setTransform(-46.4,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF00FF").ss(3,1,1).p("AxvAAMAjfAAA");
	this.shape_21.setTransform(-41.2,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF00FF").ss(3,1,1).p("AyiAAMAlFAAA");
	this.shape_22.setTransform(-36.1,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF00FF").ss(3,1,1).p("AzVAAMAmrAAA");
	this.shape_23.setTransform(-30.9,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF00FF").ss(3,1,1).p("A0JAAMAoTAAA");
	this.shape_24.setTransform(-25.7,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF00FF").ss(3,1,1).p("A08AAMAp5AAA");
	this.shape_25.setTransform(-20.6,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF00FF").ss(3,1,1).p("A1vAAMArfAAA");
	this.shape_26.setTransform(-15.4,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF00FF").ss(3,1,1).p("A2iAAMAtFAAA");
	this.shape_27.setTransform(-10.3,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF00FF").ss(3,1,1).p("A3VAAMAurAAA");
	this.shape_28.setTransform(-5.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{regX:0.2,scaleX:0.041,x:-149.5}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape,p:{regX:0,scaleX:1,x:0}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.3,-1.5,15.7,3);


(lib.PartitipialPronunciation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBJQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgDAEgDIAHgGQAQgQAAgmQAAgOgEgOQgEgSgIgIIgHgIQgEgEAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQABgBAAAAIAFADQANAJAJAXQAIAUAAAUQAAA3geARIgFACQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape.setTransform(167.7,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC33FF").s().p("AgfA5QgEgDAAgHIABgZQACghAAgoQAAgDACgDQACgCADAAQADAAADACQACADAAADQAAApgCAhIgBALIgBALQATAAAdgJIACAAQADAAACACQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgDg");
	this.shape_1.setTransform(160.8,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC33FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_2.setTransform(150.9,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC33FF").s().p("AgfA2QgDgCAAgEQAAgDADgBQACgDADAAIAQgCIAAgNIAAgMIAAgNQAAgPABgaIgJABIgKAAQgDgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgCACQgCABgEAAIgLAAIgMgCIgBAnIAAANIAAANIAAAMIAWAAQAEAAACACQACACAAADQAAADgCADQgCACgEAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_3.setTransform(141.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AgeA4IgCgFIAAgVIABgeIACgeIAAgKIAAgLQACgGAGABIAHgBIAKgBQAMABAMAIQANAKAAAPQAAASgNAKQgNAJgRAAIgIgBIgBAnIgCAFQgBACgEAAQgDAAgBgCgAgPgrIgBANIgCAeIAIAAQAMAAAJgGQAIgHABgLQAAgJgJgFQgIgGgIABIgGAAIgEAAg");
	this.shape_4.setTransform(133.6,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AgfA2QgCgCAAgEQAAgDACgBQACgDADAAIAPgCIABgNIAAgMIgBgNQAAgPACgaIgJABIgKAAQgDgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDACQgBABgDAAIgMAAIgMgCIgBAnIAAANIAAANIAAAMIAWAAQAEAAACACQABACAAADQAAADgBADQgCACgEAAIgMAAIgMAAIgOACIgOABQgDAAgCgCg");
	this.shape_5.setTransform(125.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_6.setTransform(117,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AggA2QgBgCAAgEQAAgDABgBQADgDADAAIAPgCIACgNIgBgMIgBgNQABgPACgaIgKABIgJAAQgEgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAWADQAGABAAAHQAAAEgDACQgCABgCAAIgMAAIgMgCIgCAnIAAANIABANIgBAMIAYAAQADAAABACQACACAAADQAAADgCADQgBACgDAAIgNAAIgMAAIgOACIgOABQgDAAgDgCg");
	this.shape_7.setTransform(108.2,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_8.setTransform(99.6,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_9.setTransform(89.3,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_10.setTransform(78.9,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF00FF").s().p("AgfA4IgBgFIAAgVIABgeIACgeIAAgKIABgLQACgGAFABIAGgBIALgBQANABALAIQANAKAAAPQAAASgOAKQgMAJgQAAIgJgBIgBAnIgBAFQgDACgDAAQgCAAgDgCgAgQgrIAAANIgBAeIAIAAQALAAAIgGQAKgHgBgLQAAgJgIgFQgIgGgJABIgFAAIgFAAg");
	this.shape_11.setTransform(69.7,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKBJQgegRAAg3QAAgUAIgUQAJgXANgJQABgBAAAAQABgBABAAQAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgEAEIgHAIQgIAIgEASQgEAOAAAOQAAAmAQAQIAHAGQAEADAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAABIgFgCg");
	this.shape_12.setTransform(63.1,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEA5QgDgDAAgDQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQACAAADAEQADAEAAADQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgDACgCAAQgCAAgDgEgAgFAbIAAgJIAAgJIAAgfIAAggQAAgGAGAAQAGAAAAAGIAABRQAAAGgGAAQgGAAAAgGg");
	this.shape_13.setTransform(282,-22.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_14.setTransform(276.6,-20.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_15.setTransform(268.4,-20.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_16.setTransform(262.6,-22.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_17.setTransform(256.9,-21.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_18.setTransform(249.5,-20.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_19.setTransform(243.7,-22.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_20.setTransform(237.6,-20.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_21.setTransform(230,-20.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAQAjQgJAFgLgBQgJAAgHgEQgHgEgBgKQgDgTAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgEIAAgOIAAgOQAAgPABgMQABgHAGAAQADABADACQACACAAACIgCAcIAAAPIAAAQIABAFIAAAFQAAADgCACQgCACgDAAQgGAAgCgHg");
	this.shape_22.setTransform(222,-20.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_23.setTransform(214.3,-20.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_24.setTransform(206.1,-20.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgIQAAgHAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQADAFgBAIIAAAGQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAJIAAAoQABAHgIAAQgGAAAAgHg");
	this.shape_25.setTransform(199,-20.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcA8QgCgDAAgDIABgdIAAgdIgBgdIgCgOQAAgGACgDQADgEAEgBQADAAACACQABACAAAEIAAACIAAAEQAGgEAGgCQAFgCAFAAQAPAAAHAMQAGAMAAAQQAAAPgJAKQgJALgPAAQgGAAgJgCIAAAjQAAADgCADQgCACgDAAQgEAAgCgCgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgMgDgIQgDgGgHAAQgGAAgFADg");
	this.shape_26.setTransform(191.2,-18.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgTALgLQALgMAPAAQAIAAAFACIAHAGIACgqQABgGAGAAQAHAAAAAHIgEAtIAAAVQAAAYACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgFgBgCgGQgFAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHABAPQAAAKAGAGQAHAHAJAAQAFAAAFgCIAHgHIADgCIAAgMIAAgJIAAgIQgDgGgFgCQgEgDgHAAQgLgBgGAHg");
	this.shape_27.setTransform(178.2,-22.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_28.setTransform(170.1,-20.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_29.setTransform(162.1,-20.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYA5QgKgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKAAgNQAAgUALgMQAMgMASAAQAIAAAEACQAEABADAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgEAMgHAFQgJAHgPAAQgKAAgGgBgAgMgkQgIAJAAANQAAALAFAEQADAFAJAAQAGAAAHgHQAGgIABgHIAEgZIgHgDQgCgCgEAAQgNAAgHAKg");
	this.shape_30.setTransform(149.8,-18.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_31.setTransform(142.1,-20.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_32.setTransform(136.1,-22.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIA1IABgbIABgaIAAgaIABgaQAAgIAGAAQAIAAAAAIIgBAaIAAAaIgBAkIgBARQAAAIgGAAQgHgBgBgHg");
	this.shape_33.setTransform(131.8,-22.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIA1IACgbIABgaIAAgaIAAgaQAAgIAHAAQAGAAAAAIIAAAaIAAAaIgCAkIAAARQgBAIgFAAQgIgBAAgHg");
	this.shape_34.setTransform(127.7,-22.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAJgOARAAQAMAAAIAEQAJAFAAAKQAAAIgIAGIgQAHIgbANQAEAHAGACQAGADAIAAQAFAAAGgCQAJgCACgDQADgFADAAQACAAADACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgGAHgDANIAWgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_35.setTransform(121.7,-20.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgcA8QgCgDAAgDIABgdIAAgdIgBgdIgCgOQAAgGACgDQADgEAEgBQADAAACACQABACAAAEIAAACIAAAEQAGgEAGgCQAFgCAFAAQAPAAAHAMQAGAMAAAQQAAAPgJAKQgJALgPAAQgGAAgJgCIAAAjQAAADgCADQgCACgDAAQgEAAgCgCgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgKQAAgMgDgIQgDgGgHAAQgGAAgFADg");
	this.shape_36.setTransform(113.5,-18.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTApQgMgFAAgHQAAgCADgDQACgCACAAQADAAAEADQABACAHABIAIABQAEAAAGgCQAGgCAAgEQAAgKgNgEIgIgBQgJgCgEgDQgGgEAAgHQAAgQAPgHIAMgEIAPgFIAGgBQADAAACACQACACAAADIABAHIABAFQAAAEgCACQgCACgDAAQgEAAgCgDIgCgIIgRAGQgLAFABAGIADABQAQAEAJAEQAMAIgBAOQABAMgLAGQgIAFgMAAQgKAAgIgDg");
	this.shape_37.setTransform(105.6,-21);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_38.setTransform(93.9,-20.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_39.setTransform(87.8,-22.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGADAIAAQAFAAAGgCQAJgCACgDQADgFACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_40.setTransform(77.2,-20.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_41.setTransform(69.1,-20.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAIIgBAHIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgHQAAgDADgBQACgCADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAPQAAAEgCACQgCABgDAAQgGAAgBgGg");
	this.shape_42.setTransform(61.4,-20.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZAfQgLgJABgQQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGADAHAAQAFAAAHgCQAJgCADgDQACgFACAAQAEAAACACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_43.setTransform(53.4,-20.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgbAiIAAgzIAAgHIAAgIQAAgHAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAFAAAIIAAAGQAAAJgHAAQgGAAAAgHIAAgFIgBgHQgLACgGAFQgHAFgEAJIAAAoQAAAHgHAAQgHAAABgHg");
	this.shape_44.setTransform(45.8,-20.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAJgOARAAQAMAAAIAEQAJAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGADAIAAQAFAAAGgCQAJgCACgDQADgFADAAQACAAADACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgOgTQgGAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgFAHg");
	this.shape_45.setTransform(38,-20.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_46.setTransform(29.8,-22.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgLA/QgCgCAAgDIAAgCQABgJAAgMIAAgUIAAgUIgLABQgIAAAAgHQAAgHANgBIAHAAIABgLQACgQAGgIQAHgJAQAAQALAAAAAHQAAAHgKAAQgSAAgCAYIAAAFIAQgBQAMAAAAAHQAAAGgGABIgGAAIgRABIAAAQIAAANIAAAOQAAAOgBAIQAAAFgGAAQgDAAgCgBg");
	this.shape_47.setTransform(22.2,-22.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgDACgDQACgCADAAQACAAACACQACADAAADIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_48.setTransform(16.6,-22.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgZAyQgLgKAAgRQAAgTALgLQALgMAPAAQAIAAAFACIAHAGIACgqQABgGAGAAQAHAAAAAHIgEAtIAAAVQAAAYACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgFgBgCgGQgFAEgGACQgGACgFAAQgPAAgKgKgAgQABQgHAHABAPQAAAKAGAGQAHAHAJAAQAFAAAFgCIAHgHIADgCIAAgMIAAgJIAAgIQgDgGgFgCQgEgDgHAAQgLgBgGAHg");
	this.shape_49.setTransform(9.9,-22.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAfQgKgJgBgQQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAHAGACQAHADAGAAQAFAAAIgCQAIgCACgDQADgFADAAQADAAABACQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_50.setTransform(-2.9,-20.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAUA3IgDgQIgBgSIAAgGIAAgGQAAgNgHABQgJAAgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgLIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABAOIAAAPIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_51.setTransform(-11.4,-22.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_52.setTransform(-19.3,-21.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGADAIAAQAFAAAGgCQAJgCACgDQADgFACAAQADAAADACQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_53.setTransform(-31.3,-20.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADgBIAPACIAAgKIAAgJQAAgDACgCQACgCADAAQAGAAABALIAAAGIAAAEIAAAFIAKgCQAIAAACACQAFABAAAFQAAAEgCACQgCABgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_54.setTransform(-39.1,-21.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_55.setTransform(-46.7,-20.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_56.setTransform(-56.4,-22.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgSBJQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgDAEgDIAHgGQAQgQAAgmQAAgOgEgOQgEgSgIgIIgHgIQgEgEAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIAFADQANAJAJAXQAIAUAAAUQAAA3geARIgFACQgBgBAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_57.setTransform(158.3,1.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF00FF").s().p("AgfA4QgHgGAAgYIAAgKIAAgMIAAgEIABgDIABggIAAgHIgBgIQAAgJAHAAQADAAACACIARgDIAOgCQASABAKAEQAFABAAAGQAAADgCACQgCADgDAAIgCgBQgNgDgLgBIgMABIgQAEIABAHIgBAdIAfgEIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghACIgBAKIAAAJQAAAQACADQACADAKAAIANgBIANAAIAFAAIAEgBQAIAAAAAHQAAAHgHABQgGABgWAAQgXABgGgHg");
	this.shape_58.setTransform(150.9,0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF00FF").s().p("AgfA5QgEgDAAgHIABgZQACghAAgoQAAgDACgDQACgCADAAQADAAADACQACADAAADQAAApgCAhIgBALIgBALQATAAAdgJIACAAQADAAACACQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgDg");
	this.shape_59.setTransform(142.1,0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF00FF").s().p("AgfA4IgBgFIAAgVIABgeIACgeIAAgKIABgLQABgGAGABIAGgBIALgBQANABALAIQANAKAAAPQAAASgOAKQgMAJgQAAIgJgBIgBAnIgCAFQgCACgCAAQgEAAgCgCgAgPgrIgBANIgBAeIAIAAQALAAAJgGQAJgHgBgLQAAgJgIgFQgIgGgJABIgGAAIgDAAg");
	this.shape_60.setTransform(134,0.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF00FF").s().p("AggA2QgCgCABgEQgBgDACgBQADgDADAAIAQgCIABgNIgBgMIAAgNQAAgPACgaIgKABIgJAAQgEgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAWADQAHABAAAHQAAAEgCACQgDABgDAAIgLAAIgMgCIgCAnIAAANIABANIgBAMIAYAAQACAAACACQACACABADQgBADgCADQgCACgCAAIgNAAIgMAAIgOACIgOABQgDAAgDgCg");
	this.shape_61.setTransform(125.9,0.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF00FF").s().p("AgfA2QgDgCAAgEQAAgDADgBQACgDADAAIAQgCIAAgNIAAgMIAAgNQAAgPABgaIgJABIgJAAQgEgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgCACQgCABgEAAIgLAAIgMgCIgBAnIAAANIAAANIAAAMIAWAAQAEAAACACQACACAAADQAAADgCADQgCACgEAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_62.setTransform(108.6,0.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF00FF").s().p("AgeA4IgCgFIAAgVIABgeIACgeIAAgKIAAgLQACgGAGABIAHgBIAKgBQAMABAMAIQANAKAAAPQAAASgNAKQgNAJgRAAIgIgBIgBAnIgCAFQgBACgEAAQgDAAgBgCgAgPgrIgBANIgCAeIAIAAQAMAAAJgGQAIgHABgLQAAgJgJgFQgIgGgIABIgHAAIgDAAg");
	this.shape_63.setTransform(70.1,0.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAKBJQgegRAAg3QAAgUAIgUQAJgXANgJQABgBAAAAQABgBABAAQAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgEAEIgHAIQgIAIgEASQgEAOAAAOQAAAmAQAQIAHAGQAEADAAADQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAABIgFgCg");
	this.shape_64.setTransform(63.5,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:78.9}},{t:this.shape_9,p:{x:89.3}},{t:this.shape_8,p:{x:99.6}},{t:this.shape_7},{t:this.shape_6,p:{x:117}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_64},{t:this.shape_63},{t:this.shape_10,p:{x:79.3}},{t:this.shape_9,p:{x:89.7}},{t:this.shape_8,p:{x:100}},{t:this.shape_62},{t:this.shape_6,p:{x:117.4}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},18).wait(20));

	// Layer 2
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#CC33FF").ss(1,1,1).p("AiJAAIETAA");
	this.shape_65.setTransform(150.7,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_65).to({_off:true},18).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,-35.6,355,47.8);


(lib.ParticiplePhraseSentence = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgFAGgBQAHABAGAFQAFAFAAAGQAAAHgFAGQgGAEgHAAQgGAAgFgEg");
	this.shape.setTransform(157.7,53.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("Ag+BtQgNgMAAguIAAgUIACgXIgCgHQAAgEADgEQACgoAAgUIgBgPIgBgQQgBgRAOAAQAHAAAEAFQARgFAPgCQAPgDAMAAQAjAAAUAJQAKAEAAAJQAAAGgEAEQgEAFgGAAIgFgBQgXgGgXAAQgLAAgNACQgOACgQAEIABAPIgCA2IA9gGIAigDQAGAAAFAEQADAEAAAHQAAAMgMABIgiADIhAAGIgBATIgBARQAAAfAEAGQAEAEATAAIAagBIAaAAIAIgBIAIgBQAQAAgBAPQABAMgMACQgOADgrAAQgsAAgNgMg");
	this.shape_1.setTransform(145.4,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s().p("Ag5BiQgZgMgBgWQAAgFAEgEQAEgEAHAAQAGAAAFAIQAIALAGAEQALAHAXAAQAWAAASgJQAYgMAAgWQAAgSgUgKQgRgJgYgBQgXAAgQgIQgTgMgBgVQABgZAcgVQAcgUAcAAQANAAARAFQAYAGAAAJQAAANgOAAQgFAAgOgDQgPgDgHAAQgVAAgQALQgPALAAAPQgBAMAWAFQAIACAUABQAhADATASQAQAPAAAYQAAAhgfAUQgbASgjAAQgZAAgXgKg");
	this.shape_2.setTransform(126,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("AAyBKQgEgNgGggQgPACgXAFIglAIQgGASgRAkQgFAIgIAAQgGAAgEgEQgFgEABgGQAAgHAVgtQgCgEAAgEQAAgMANgDQAQgeAZgnQAhg2AIAAQALAAAEAQIAJAwIAVBhIAIAWQAFAMAAAEQgBAGgEAEQgFAEgFAAQgNAAgJghgAgSAKIA0gKIgMg2g");
	this.shape_3.setTransform(105,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AhHBrQgFgEAAgGIgBgiIgBghQAAgNADgZQADgaAAgNIgBgVIgCgVQAAgIAFgGQAFgIAKABIAiACQATADANAHQA5AeAAAsQAAAWgUAPQgPAOgYAHQAsAXAWAaQAEAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFQgvgug4gQIABAcIABAcQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgtg/IABARIgBAcIgDAcIAGAAIAGAAQAkAAARgKQAIgDAHgHQAHgIAAgGQAAgTgWgRQgTgQgXgCIgVgCg");
	this.shape_4.setTransform(85.8,43.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AhYBwQgEgFAAgFQAAgPACgeQADgdAAgQIgBgXIAAgXIACgiIABghQAAgGADgEQAEgEAGAAQAGAAAEAEQAEAEAAAGIgBAiIgCAiIAAAjIA9gLQAkgHAZAAQACgUgBgpQABgLADgLQAEgPAJAAQAGAAADAEQAFAEAAAFIgCAHQgCAGAAALIABAMIAAANQAAAOgCAcQgDAcAAANIACAhIABAgQAAAGgDAEQgFAEgFAAQgGAAgEgEQgEgEAAgGIgBggIgCghIABgUQgZAAgiAHIg7AMQAAAMgDAYQgDAXAAANQAAAFgDAFQgFAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(65.5,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("Ag7BtQgEgEAAgFIAAgqQAAgVACglIAEg6IAAgUQAAgOABgHQAEgMAKACQAFgBAIgBIAVgBQAYAAAXASQAZATAAAcQAAAjgbATQgXAUghgBIgRgCIgBBMQAAAFgEAEQgEAEgFAAQgGAAgDgEgAgfhUIAAAaIgDA4IAPACQAXAAAQgMQASgNAAgWQAAgQgRgMQgQgKgRAAIgLAAIgIABg");
	this.shape_6.setTransform(46.8,43.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("Ag8BwQgJgGAAgQIADgvQAEhAAAhPQAAgGAEgEQAEgFAGAAQAGAAAEAFQAEAEAAAGQAABQgEBBIgCAVQgBAMAAAJQAlAAA4gSIAEAAQAGAAAEAFQAEAEAAAGQAAAJgJAEQgQAHgiAGQgfAGgUAAQgOAAgGgEg");
	this.shape_7.setTransform(22.8,43.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AAyBKQgFgNgFggQgOACgYAFIglAIQgGASgSAkQgEAIgIAAQgFAAgFgEQgFgEAAgGQABgHAVgtQgCgEAAgEQAAgMANgDQAQgeAZgnQAhg2AIAAQALAAAEAQIAJAwIAVBhIAIAWQAFAMAAAEQAAAGgFAEQgFAEgFAAQgNAAgJghgAgSAKIA0gKIgMg2g");
	this.shape_8.setTransform(3.7,43.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("Ag9BoQgFgEAAgGQAAgGAFgEQAEgFAGAAQAJAAAVgDQABgLAAgPIAAgYIgBgXQAAggADgxIgSAAIgSABQgGAAgFgEQgEgEAAgHQAAgNAOgBIArgBQAbAAAqAGQANACAAANQAAAHgFAEQgEADgGAAQgJAAgOgCIgWgDQgEApAAAlIABAYIABAZIgBAYIAsgBQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAEgGAAIgYABIgXAAQgJAAgSADQgTACgJAAQgGAAgEgEg");
	this.shape_9.setTransform(-14.7,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("Ag7BtQgEgEAAgFIAAgqQAAgVACglIAEg6IAAgUQAAgOABgHQAEgMAKACQAFgBAIgBIAVgBQAYAAAXASQAZATAAAcQAAAjgbATQgXAUghgBIgRgCIgBBMQAAAFgEAEQgEAEgFAAQgGAAgDgEgAgfhUIAAAaIgDA4IAPACQAXAAAQgMQASgNAAgWQAAgQgRgMQgQgKgRAAIgLAAIgIABg");
	this.shape_10.setTransform(-30,43.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF00FF").s().p("Ag9BoQgFgEAAgGQAAgGAFgEQAEgFAGAAQAJAAAVgDQABgLAAgPIAAgYIgBgXQAAggADgxIgSAAIgSABQgGAAgFgEQgEgEAAgHQAAgNAOgBIArgBQAbAAAqAGQANACAAANQAAAHgFAEQgEADgGAAQgJAAgOgCIgWgDQgEApAAAlIABAYIABAZIgBAYIAsgBQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAEgGAAIgYABIgXAAQgJAAgSADQgTACgJAAQgGAAgEgEg");
	this.shape_11.setTransform(-45.6,43.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF00FF").s().p("Ag6BXQgUgWAAgeQAAguApgzQAhgqAhAAIANABIAKABQAFgHAHAAQAKAAADANQACAMAAARQAAAFgDAFQgEAFgHAAQgJAAgFgLQgDgIgEgDQgDgBgMAAQgVAAgYAfQghArAAAkQAAATAMANQAMANAQAAQAOABAOgIQAJgEARgNQAIgGAEAAQAGAAAEAFQAEAEAAAGQAAAHgFAFQgmAgglABQgdgBgUgWg");
	this.shape_12.setTransform(-61.9,43.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF00FF").s().p("Ag9BoQgFgEAAgGQAAgGAFgEQAEgFAGAAQAJAAAVgDQABgLAAgPIAAgYIgBgXQAAggADgxIgSAAIgSABQgGAAgFgEQgEgEAAgHQAAgNAOgBIArgBQAbAAAqAGQANACAAANQAAAHgFAEQgEADgGAAQgJAAgOgCIgWgDQgEApAAAlIABAYIABAZIgBAYIAsgBQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAEgGAAIgYABIgXAAQgJAAgSADQgTACgJAAQgGAAgEgEg");
	this.shape_13.setTransform(-78.9,43.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF00FF").s().p("AgJBoQgFgEAAgGIABgHIABgGIgBgVIgBgVQAAgUgDgkIgEg5IgNABQgfAAgSgFQgLgDAAgLQAAgGADgEQAFgFAGAAIAXADIAXABIAaAAIAYAAIAhABIAgACQAGAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgGAAIgggCIgggBIgLAAIAEA/QADAoAAAXIABAPIABAPQAAAKgDAHQgEAJgIAAQgFAAgEgEg");
	this.shape_14.setTransform(-95.5,43.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("AhHBrQgFgEAAgGIgBgiIgBghQAAgNADgZQADgaAAgNIgBgVIgCgVQAAgIAFgGQAFgIAKABIAiACQATADANAHQA5AeAAAsQAAAWgUAPQgPAOgYAHQAsAXAWAaQAEAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFQgvgug4gQIABAcIABAcQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgtg/IABARIgBAcIgDAcIAGAAIAGAAQAkAAARgKQAIgDAHgHQAHgIAAgGQAAgTgWgRQgTgQgXgCIgVgCg");
	this.shape_15.setTransform(-115.3,43.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF00FF").s().p("AAyBKQgEgNgGggQgPACgWAFIgmAIQgGASgRAkQgFAIgIAAQgGAAgEgEQgFgEABgGQgBgHAWgtQgDgEABgEQgBgMAOgDQARgeAYgnQAgg2AJAAQALAAAEAQIAJAwIAWBhIAIAWQADAMAAAEQAAAGgEAEQgFAEgFAAQgNAAgJghgAgSAKIAzgKIgLg2g");
	this.shape_16.setTransform(-135.5,43.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("Ag7BtQgEgEAAgFIAAgqQAAgVACglIAEg6IAAgUQAAgOABgHQAEgMAKACQAFgBAIgBIAVgBQAYAAAXASQAZATAAAcQAAAjgbATQgXAUghgBIgRgCIgBBMQAAAFgEAEQgEAEgFAAQgGAAgDgEgAgfhUIAAAaIgDA4IAPACQAXAAAQgMQASgNAAgWQAAgQgRgMQgQgKgRAAIgLAAIgIABg");
	this.shape_17.setTransform(-153.3,43.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAtBIQgGgFgDgFIgYALQgLAEgFAAQgiAAgPgTQgOgRAAglQAAghAYgYQAXgZAgAAQAMAAAPAHQAUAIAAALQAAAEgDADQgCAFAAAMIgBAfQAAASACAKIAJAZIADAHIABADQAAAFgEAEQgEAEgFAAQgDAAgHgHgAgXgjQgQASAAAXQAAAXAIAMQAIALARAAQAMAAAKgFIAOgLQgEgkAAgTIAAgNIADgPIgJgEIgGgCQgVAAgQASg");
	this.shape_18.setTransform(162.9,4.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgwA9QgWgRABggQAAgkARgZQAUgbAgAAQAXAAAPAIQARAJABAVQgBAOgQALQgHAGgWAJIg1AaQAHAMANAGQALAGAPAAQAJAAAOgEQARgFAFgHQAEgIAFAAQAFAAAFAEQADAEAAAFQAAAPgZAMQgVAJgVAAQgfAAgUgQgAgdglQgLANgGAaIArgUQAZgMALgJQgMgMgVAAQgRAAgMAOg");
	this.shape_19.setTransform(139.2,4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAmBsQgIgOgOgTIgYgjIgaATIgBAqQAAAGgEAFQgEADgGAAQgPABAAgUIACgjIACgjIAAgwIABgyIgBgOIAAgPQAAgHAEgDQADgFAGAAQAHAAAEAFQADADAAAHIABAPIABAPIgBAuIgBAxQAUgPAQgRIAgggQAEgFAGAAQAFAAAFAFQAEAEAAAGQAAAEgEAFQgRAUgaAXIAfAqQAWAdAAAKQAAAFgFAEQgEAFgGgBQgIAAgEgIg");
	this.shape_20.setTransform(124,0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAtBIQgGgFgDgFIgYALQgLAEgFAAQgiAAgPgTQgOgRAAglQAAghAYgYQAXgZAgAAQAMAAAPAHQAUAIAAALQAAAEgDADQgCAFAAAMIgBAfQAAASACAKIAJAZIADAHIABADQAAAFgEAEQgEAEgFAAQgDAAgHgHgAgXgjQgQASAAAXQAAAXAIAMQAIALARAAQAMAAAKgFIAOgLQgEgkAAgTIAAgNIADgPIgJgEIgGgCQgVAAgQASg");
	this.shape_21.setTransform(107.9,4.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHBTQgEgEAAgGQAAgRgDgiQgEggAAgRQAAgPgEgJQgKAFgKAKIgRATIgHAJIgCAYIgBAYIABAMIABALQAAAGgEAEQgEAEgGAAQgQAAAAgkIABgaIACgYIgBgXIgCgWQAAggAPAAQAFAAAFAEQAEAFAAAGIAAAIIgBAJIAAAPQAIgPAOgNQAOgMAKAAQAXAAAHAWQAIgKALgFQAKgGAOAAQAYAAAIAaQACAFAEAjQAEAXAGA5QABAGgEAEQgFAEgGAAQgLAAgCgNIgFgsIgFgrQgCgJgDgKQgFgMgGAAQgFAAgOAIQgOAJgEAFIABAaIAEAlQADAWAAAPQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_22.setTransform(89.3,4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgpA8QgUgTAAghQgBgfARgZQATgdAjAAQAcAAAPAaQALAVAAAeQAAAegQAWQgTAagcAAQgYAAgRgSgAgYgcQgKAQAAAUQAAAUAMAMQAJAJANAAQANAAALgLQAMgMABgUQACg2ggAAQgUAAgLAUg");
	this.shape_23.setTransform(61.3,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIBkQgFgEAAgGIABgQIAAgPIgDhTIgfgCQgNgCAAgLQAAgHAEgEQAEgEAGAAIAeACIgBgTIAAgSQAAgFAEgFQAEgDAGAAQALgBADAWIAAAMIAAAIIAAAJIAUgCQAOAAAFABQAJADAAALQAAAGgEAEQgEAEgGAAIgHgBIgHAAIgUACIADBTIAAAGIAAAHQABAfgQABQgEAAgEgEg");
	this.shape_24.setTransform(47.1,2.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgnBPQgWgIAAgPQABgFAEgEQAEgFAGABQAFgBAGAIQAEADAMABQAJACAGAAQALAAAKgDQANgEgBgIQAAgUgbgGIgNgEQgTgEgIgGQgLgGAAgQQAAgeAbgMQAJgEASgFIAagJQAHgDAGAAQAHAAADAEQAEADAAAHIACAMIACAMQgBAHgDADQgEAEgGAAQgIABgDgGQgDgDgBgMIghAKQgWAJAAANIAJADQAfAFARALQAWANAAAdQABAXgVALQgQAKgZAAQgSAAgRgGg");
	this.shape_25.setTransform(24.3,4.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgyBgQgUgTAAggQAAgmAUgVQAUgXAfAAQARAAAJAFIANAKQACg8ADgUQACgNALAAQANAAAAANQAAAUgGBEIgCAoQAAAvAFAYIAAAEQAAAFgEAEQgEADgFAAQgJABgEgNQgKAIgLADQgLAEgLAAQgeAAgTgUgAghADQgMAOAAAbQAAATANANQANANASAAQALABAIgFQAFgCALgKIAEgEIgBgZIAAgQIABgRQgGgLgJgFQgJgGgMAAQgXAAgMAOg");
	this.shape_26.setTransform(9,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag2BBIAAhiIAAgOIABgPQAAgOAMAAQAOAAAAAYQAbgaAgAAQAMAAAGAIQAFAJAAARIAAAKQgBASgNAAQgMAAAAgOIgBgKIAAgMQgWADgNAKQgNAJgIASIAABNQAAAOgOAAQgMAAAAgOg");
	this.shape_27.setTransform(-6,4.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgpA8QgUgTAAghQgBgfARgZQATgdAjAAQAcAAAPAaQALAVAAAeQAAAegQAWQgTAagcAAQgYAAgRgSgAgYgcQgKAQAAAUQAAAUAMAMQAJAJANAAQANAAALgLQAMgMABgUQACg2ggAAQgUAAgLAUg");
	this.shape_28.setTransform(-21.3,4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAJApIgGghIgEgeIgLAaIgWA6QgCAFgDADQgEAIgKAAQgKABgLgqQgFgXgFgkIgDgVIgCgWQAAgGAEgEQAEgDAGAAQALAAADALIADAVIACAVIAIA/QAQgrARg5QAEgQALAAQALAAAEASIAJAyQAGAjAEAVIALgnIAShMQACgJAKAAQAGAAAEAEQAFAEAAAGIgCAGQgLAugRA6QgEANgKANQgFAIgIgBQgQAAgIgmg");
	this.shape_29.setTransform(-38.5,5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag2BBIAAhiIAAgOIABgPQAAgOAMAAQAOAAAAAYQAbgaAgAAQAMAAAGAIQAFAJAAARIAAAKQgBASgNAAQgMAAAAgOIgBgKIAAgMQgWADgNAKQgNAJgIASIAABNQAAAOgOAAQgMAAAAgOg");
	this.shape_30.setTransform(-63.7,4.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgwA9QgWgRAAggQAAgkASgZQAUgbAgAAQAXAAAOAIQASAJAAAVQABAOgRALQgGAGgYAJIg1AaQAJAMALAGQAMAGAPAAQAJAAAOgEQARgFAEgHQAFgIAFAAQAGAAADAEQAFAEAAAFQgBAPgZAMQgWAJgUAAQgfAAgUgQgAgdglQgLANgGAaIAsgUQAYgMALgJQgMgMgVAAQgRAAgMAOg");
	this.shape_31.setTransform(-78.8,4.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAmBrQgCgMgEgVQgCgVAAgNIAAgLIAAgLQABgagNAAQgSABgOAPQgHAIgMAXQgBA3gEAJQgEAJgJAAQgFAAgEgEQgFgEAAgFIACgHIABgUIABgVIAAhoIABgXIgBgNQgCgHAAgHQAAgGAEgEQAEgEAGAAQAMAAACAMQACAOAAALIgBAfQgBAQABAQIAAAMQALgQAOgHQAMgIAPAAQAXAAAIAPQAHALABAZIABAbIADAdQACARACAMIABAEQAAAGgEAEQgEAEgHAAQgJAAgEgLg");
	this.shape_32.setTransform(-95.2,0.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIBkQgFgEAAgGIABgQIAAgPIgDhTIgfgCQgNgCAAgLQAAgHAEgEQAEgEAGAAIAeACIgBgTIAAgSQAAgFAEgFQAEgDAGAAQALgBADAWIAAAMIAAAIIAAAJIAUgCQAOAAAFABQAJADAAALQAAAGgEAEQgEAEgGAAIgHgBIgHAAIgUACIADBTIAAAGIAAAHQABAfgQABQgEAAgEgEg");
	this.shape_33.setTransform(-110.6,2.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgpA8QgUgTAAghQgBgfARgZQATgdAjAAQAcAAAPAaQALAVAAAeQAAAegQAWQgTAagcAAQgYAAgRgSgAgYgcQgKAQAAAUQAAAUAMAMQAJAJANAAQANAAALgLQAMgMABgUQACg2ggAAQgUAAgLAUg");
	this.shape_34.setTransform(-125.3,4.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgpA8QgUgTAAghQgBgfARgZQATgdAjAAQAcAAAPAaQALAVAAAeQAAAegQAWQgTAagcAAQgYAAgRgSgAgYgcQgKAQAAAUQAAAUAMAMQAJAJANAAQANAAALgLQAMgMABgUQACg2ggAAQgUAAgLAUg");
	this.shape_35.setTransform(-149.2,4.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIBkQgFgEAAgGIABgQIAAgPIgDhTIgfgCQgNgCAAgLQAAgHAEgEQAEgEAGAAIAeACIgBgTIAAgSQAAgFAEgFQAEgDAGAAQALgBADAWIAAAMIAAAIIAAAJIAUgCQAOAAAFABQAJADAAALQAAAGgEAEQgEAEgGAAIgHgBIgHAAIgUACIADBTIAAAGIAAAHQABAfgQABQgEAAgEgEg");
	this.shape_36.setTransform(-163.4,2.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgyBgQgUgTAAggQAAgmAUgVQAUgXAfAAQARAAAJAFIANAKQACg8ADgUQACgNALAAQANAAAAAOQAAATgGBEIgCAoQAAAvAFAYIAAADQAAAGgEAEQgEADgFABQgJAAgEgNQgKAIgLADQgLAEgLAAQgeAAgTgUgAghADQgMAOAAAbQAAATANANQANANASAAQALABAIgFQAFgCALgKIAEgEIgBgZIAAgQIABgRQgGgLgJgFQgJgGgMAAQgXAAgMAOg");
	this.shape_37.setTransform(185.6,-41.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgwA9QgVgRgBggQABgkARgZQATgbAhAAQAWAAAPAIQATAJgBAVQAAAOgPALQgIAGgXAJIg1AaQAJAMAMAGQALAGAPAAQAKAAANgEQAQgFAGgHQAEgIAGAAQAEAAAFAEQADAEAAAFQABAPgaAMQgVAJgVAAQgfAAgUgQgAgdglQgLANgGAaIAsgUQAYgMALgJQgMgMgVAAQgSAAgLAOg");
	this.shape_38.setTransform(169.5,-37.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgyBgQgUgTAAggQAAgmAUgVQAUgXAfAAQARAAAJAFIANAKQACg8ADgUQACgNALAAQANAAAAAOQAAATgGBEIgCAoQAAAvAFAYIAAADQAAAGgEAEQgEADgFABQgJAAgEgNQgKAIgLADQgLAEgLAAQgeAAgTgUgAghADQgMAOAAAbQAAATANANQANANASAAQALABAIgFQAFgCALgKIAEgEIgBgZIAAgQIABgRQgGgLgJgFQgJgGgMAAQgXAAgMAOg");
	this.shape_39.setTransform(152.6,-41.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgyBgQgUgTAAggQAAgmAUgVQAUgXAfAAQARAAAJAFIANAKQACg8ADgUQACgNALAAQANAAAAAOQAAATgGBEIgCAoQAAAvAFAYIAAADQAAAGgEAEQgEADgFABQgJAAgEgNQgKAIgLADQgLAEgLAAQgeAAgTgUgAghADQgMAOAAAbQAAATANANQANANASAAQALABAIgFQAFgCALgKIAEgEIgBgZIAAgQIABgRQgGgLgJgFQgJgGgMAAQgXAAgMAOg");
	this.shape_40.setTransform(135.6,-41.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAtBIQgGgFgDgFIgYALQgLAEgFAAQgiAAgPgTQgOgRAAglQAAghAYgYQAXgZAgAAQAMAAAPAHQAUAIAAALQAAAEgDADQgCAFAAAMIgBAfQAAASACAKIAJAZIADAHIABADQAAAFgEAEQgEAEgFAAQgDAAgHgHgAgXgjQgQASAAAXQAAAXAIAMQAIALARAAQAMAAAKgFIAOgLQgEgkAAgTIAAgNIADgPIgJgEIgGgCQgVAAgQASg");
	this.shape_41.setTransform(119.7,-37.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgwA9QgWgRABggQAAgkARgZQAUgbAgAAQAXAAAPAIQARAJABAVQgBAOgPALQgIAGgWAJIg1AaQAHAMANAGQALAGAPAAQAKAAANgEQARgFAFgHQAEgIAFAAQAFAAAEAEQAEAEAAAFQAAAPgZAMQgVAJgVAAQgfAAgUgQgAgdglQgLANgGAaIArgUQAZgMALgJQgMgMgVAAQgRAAgMAOg");
	this.shape_42.setTransform(96,-37.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgrBqQgEAGgHABQgFgBgEgDQgDgEAAgGIAAgLIAAgKIAAgtIgBgsIAAgnIAAgoQAAgIADgHQAFgJAJABQAKAAAAAMIAAAGIgBAFIgBAgIAAAkQAMgJALgEQALgEAJAAQAeAAAUAXQARAVABAgQgBAggUAXQgVAXgegBQgWAAgSgIgAgVgGIgVANIgBAZIABAVIAAAYIATAIQAJADALgBQAUAAANgOQANgOgBgWQAAgVgKgOQgMgOgTAAQgKAAgMAGg");
	this.shape_43.setTransform(79.5,-41.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAiBFIgDgfQgDgRAAgOIABgMIAAgOQAAgfgLAAQgQAAgNATQgNARgHAaIgCAOIgBANIABANIABANQAAAGgEAEQgEAEgFAAQgHAAgEgEQgEgEAAgGIgBgNIgBgNIACgnIADgpIgBgNIAAgOQgBgGAFgDQAEgEAFAAQANAAACASIABARQAXggAYAAQAXAAAJAUQAGANAAAaIAAAPIAAAMQABALADATQACATAAALQAAAHgDADQgFAEgFAAQgNAAgCgNg");
	this.shape_44.setTransform(54.6,-37.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAtBIQgGgFgDgFIgYALQgLAEgFAAQgiAAgPgTQgOgRAAglQAAghAYgYQAXgZAgAAQAMAAAPAHQAUAIAAALQAAAEgDADQgCAFAAAMIgBAfQAAASACAKIAJAZIADAHIABADQAAAFgEAEQgEAEgFAAQgDAAgHgHgAgXgjQgQASAAAXQAAAXAIAMQAIALARAAQAMAAAKgFIAOgLQgEgkAAgTIAAgNIADgPIgJgEIgGgCQgVAAgQASg");
	this.shape_45.setTransform(39.3,-37.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgnA+QgVgSAAgeQAAgcATgfQAVgiAaAAQANAAASAHQAVAIABAMQAAAGgEAEQgDAEgGAAQgEAAgDgDIgGgEQgIgHgTAAQgOAAgOAaQgNAXAAARQAAASANALQAMAKARAAQAJAAAKgEIAQgJIAHgDQAEAAAFAFQADAEAAAFQAAALgVAJQgUAJgNAAQgcAAgSgSg");
	this.shape_46.setTransform(24.5,-37.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF00FF").s().p("Ag+BtQgNgMAAguIAAgUIACgXIgCgHQAAgEACgEQADgoAAgUIgBgPIgCgQQABgRAOAAQAGAAAEAFQARgFAPgCQAPgDAMAAQAjAAAVAJQAJAEAAAJQAAAGgEAEQgEAFgGAAIgEgBQgYgGgXAAQgLAAgNACQgNACgRAEIABAPIgCA2IA9gGIAigDQAGAAAEAEQAEAEAAAHQAAAMgNABIghADIhBAGIAAATIgBARQAAAfAEAGQAEAEATAAIAagBIAaAAIAIgBIAJgBQAPAAgBAPQABAMgMACQgOADgrAAQgsAAgNgMg");
	this.shape_47.setTransform(-0.3,-41.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF00FF").s().p("Ag8BwQgJgGAAgQIADgvQAEhAAAhPQAAgGAEgEQAEgFAGAAQAGAAAEAFQAEAEAAAGQAABQgEBBIgCAVQgBAMAAAJQAlAAA4gSIAEAAQAGAAAEAFQAEAEAAAGQAAAJgJAEQgQAHgiAGQgfAGgUAAQgOAAgGgEg");
	this.shape_48.setTransform(-17.4,-40.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF00FF").s().p("Ag7BtQgEgEAAgGIAAgpQAAgVACglIAEg6IAAgUQAAgOABgHQAEgMAKACQAFgCAIAAIAVgBQAYAAAXASQAZATAAAcQAAAjgbATQgXAUghgBIgRgCIgBBLQAAAGgEAEQgEAEgFAAQgGAAgDgEgAgfhUIAAAaIgDA4IAPACQAXAAAQgLQASgOAAgWQAAgQgRgLQgQgLgRAAIgLAAIgIABg");
	this.shape_49.setTransform(-33.1,-41.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF00FF").s().p("Ag9BoQgFgEAAgGQAAgGAFgEQAEgFAGAAQAJAAAVgDQABgLAAgPIAAgYIgBgXQAAggADgxIgSAAIgSABQgGAAgFgEQgEgEAAgHQAAgNAOgBIArgBQAbAAAqAGQANACAAANQAAAHgFAEQgEADgGAAQgJAAgOgCIgWgDQgEApAAAlIABAYIABAZIgBAYIAsgBQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAEgGAAIgYABIgXAAQgJAAgSADQgTACgJAAQgGAAgEgEg");
	this.shape_50.setTransform(-48.8,-41);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF00FF").s().p("Ag6BXQgUgWAAgeQAAgvApgyQAhgqAhAAIANABIAKACQAFgIAHAAQAKAAADANQACALAAASQAAAFgDAFQgEAFgHAAQgJAAgFgLQgDgJgEgBQgDgCgMAAQgVAAgYAfQghAqAAAlQAAASAMAOQAMANAQAAQAOAAAOgHQAJgFARgMQAIgGAEAAQAGAAAEAFQAEAEAAAGQAAAGgFAGQgmAgglAAQgdAAgUgWg");
	this.shape_51.setTransform(-65.1,-41.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF00FF").s().p("Ag9BoQgFgEAAgGQAAgGAFgEQAEgFAGAAQAJAAAVgDQABgLAAgPIAAgYIgBgXQAAggADgxIgSAAIgSABQgGAAgFgEQgEgEAAgHQAAgNAOgBIArgBQAbAAAqAGQANACAAANQAAAHgFAEQgEADgGAAQgJAAgOgCIgWgDQgEApAAAlIABAYIABAZIgBAYIAsgBQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAEgGAAIgYABIgXAAQgJAAgSADQgTACgJAAQgGAAgEgEg");
	this.shape_52.setTransform(-82.1,-41);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF00FF").s().p("AgJBoQgFgEAAgGIABgHIABgGIgBgVIgBgVQAAgUgDgkIgEg5IgNABQgfAAgSgFQgLgDAAgLQAAgGADgEQAFgFAGAAIAXADIAXABIAaAAIAYAAIAhABIAgACQAGAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgGAAIgggCIgggBIgLAAIAEA/QADAoAAAXIABAPIABAPQAAAKgDAHQgEAJgIAAQgFAAgEgEg");
	this.shape_53.setTransform(-98.6,-41.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF00FF").s().p("AhHBrQgFgEAAgGIgBgiIgBghQAAgNADgZQADgaAAgNIgBgVIgCgVQAAgIAFgGQAFgIAKABIAiACQATADANAHQA5AeAAAsQAAAWgUAPQgPAOgYAHQAsAXAWAaQAEAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFQgvgug4gQIABAcIABAcQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgtg/IABARIgBAcIgDAcIAGAAIAGAAQAkAAARgKQAIgDAHgHQAHgIAAgGQAAgTgWgRQgTgQgXgCIgVgCg");
	this.shape_54.setTransform(-118.5,-41.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF00FF").s().p("AAyBKQgEgNgGggQgPACgWAFIgmAIQgGASgRAkQgFAIgIAAQgGAAgEgEQgFgEABgGQgBgHAWgtQgDgEABgEQgBgMAOgDQARgeAYgnQAgg2AJAAQALAAAEAQIAJAwIAWBhIAIAWQADAMAAAEQAAAGgEAEQgFAEgFAAQgNAAgJghgAgSAKIAzgKIgLg2g");
	this.shape_55.setTransform(-138.7,-40.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF00FF").s().p("Ag7BtQgEgEAAgGIAAgpQAAgVACglIAEg6IAAgUQAAgOABgHQAEgMAKACQAFgCAIAAIAVgBQAYAAAXASQAZATAAAcQAAAjgbATQgXAUghgBIgRgCIgBBLQAAAGgEAEQgEAEgFAAQgGAAgDgEgAgfhUIAAAaIgDA4IAPACQAXAAAQgLQASgOAAgWQAAgQgRgLQgQgLgRAAIgLAAIgIABg");
	this.shape_56.setTransform(-156.5,-41.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAxBKQgEgNgFggQgOACgYAFIglAIQgGASgSAkQgEAIgIAAQgFAAgFgEQgFgEAAgGQABgHAVgtQgDgEAAgEQAAgMAOgDQAQgeAZgnQAgg2AJAAQALAAAEAQIAJAwIAVBhIAIAWQAEAMABAEQAAAGgFAEQgFAEgFAAQgNAAgKghgAgRAKIAzgKIgMg2g");
	this.shape_57.setTransform(-183.6,-40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ParticiplePhraseSentence, new cjs.Rectangle(-200.5,-64.6,401.1,129.2), null);


(lib.ParticipialSiren = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.173)").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgIQAAgIAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFACAAAEQAAADgCADQgCACgDAAIgCAAQgNgDgLAAIgMAAIgQAEIABAHIgBAcIAfgDIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghADIgBAJIAAAJQAAARACACQACACAKAAIANAAIANAAIAFgBIAEAAQAIAAAAAHQAAAHgHABQgGACgWgBQgXAAgGgGg");
	this.shape.setTransform(77.1,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,255,0.173)").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_1.setTransform(67.1,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,255,0.173)").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_2.setTransform(56.2,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,255,0.173)").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_3.setTransform(46.3,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,255,0.173)").s().p("AgtA6QgCgCAAgDIABgXIABgXIAAgLIAAgNIABgRIAAgSQAAgCACgDQACgCADAAQADAAACACQACADAAACIAAASIgBARIAAASIAfgFQATgEAMAAIABgfQAAgGACgFQACgIAFAAQADAAACACQACACAAADIgBADIgBAJIAAAHIABAGIgCAWIgBAUIABARIABARQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgRIgBgRIAAgKQgMAAgSADIgeAGIgCATIgBATQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_4.setTransform(35.8,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,255,0.173)").s().p("AgfA5IgBgGIAAgVIABgeIACgeIAAgKIAAgKQACgHAGABIAHgBIAKgBQAMAAAMAJQANALAAAOQAAASgNAKQgNAJgRAAIgIAAIgBAmIgCAGQgBABgDAAQgEAAgCgBgAgPgrIgBANIgCAdIAIABQAMAAAJgFQAIgIABgLQAAgIgJgGQgIgGgIABIgHAAIgDAAg");
	this.shape_5.setTransform(26.1,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,0,255,0.173)").s().p("AgfA6QgEgDAAgIIABgZQACggAAgpQAAgEACgCQACgCADAAQADAAADACQACACAAAEQAAApgCAhIgBALIgBALQATAAAdgJIACgBQADAAACADQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgCg");
	this.shape_6.setTransform(13.7,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,0,255,0.173)").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_7.setTransform(3.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,0,255,0.173)").s().p("AgfA2QgDgCAAgEQAAgCADgCQACgDADAAIAQgCIAAgNIAAgNIAAgMQAAgPABgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgCABQgCACgEAAIgLAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAIgMABIgMAAIgNABIgPABQgDAAgCgCg");
	this.shape_8.setTransform(-5.7,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,0,255,0.173)").s().p("AgeA5IgCgGIAAgVIABgeIACgeIAAgKIAAgKQACgHAGABIAHgBIAKgBQAMAAAMAJQANALAAAOQAAASgNAKQgNAJgRAAIgIAAIgBAmIgCAGQgBABgEAAQgDAAgBgBgAgPgrIgBANIgCAdIAIABQAMAAAJgFQAIgIABgLQAAgIgJgGQgIgGgIABIgHAAIgDAAg");
	this.shape_9.setTransform(-13.6,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,0,255,0.173)").s().p("AgfA2QgCgCAAgEQAAgCACgCQACgDADAAIAPgCIABgNIAAgNIgBgMQAAgPACgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDABQgBACgDAAIgMAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQAEAAACACQABADAAADQAAADgBACQgCACgEAAIgMABIgMAAIgOABIgOABQgDAAgCgCg");
	this.shape_10.setTransform(-21.7,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,0,255,0.173)").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_11.setTransform(-30.2,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,0,255,0.173)").s().p("AggA2QgBgCAAgEQAAgCABgCQADgDADAAIAPgCIACgNIgBgNIgBgMQABgPACgaIgKAAIgJAAQgEAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgDABQgCACgCAAIgMAAIgMgCIgCAoIAAAMIABANIgBAMIAYAAQACAAACACQACADAAADQAAADgCACQgCACgCAAIgNABIgMAAIgOABIgOABQgDAAgDgCg");
	this.shape_12.setTransform(-38.9,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,0,255,0.173)").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_13.setTransform(-47.5,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,0,255,0.173)").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_14.setTransform(-57.8,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,0,255,0.173)").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_15.setTransform(-68.3,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,0,255,0.173)").s().p("AgfA5IgBgGIAAgVIABgeIACgeIAAgKIABgKQACgHAFABIAGgBIALgBQANAAALAJQANALAAAOQAAASgOAKQgMAJgQAAIgJAAIgBAmIgBAGQgDABgDAAQgCAAgDgBgAgQgrIAAANIgBAdIAIABQALAAAIgFQAKgIgBgLQAAgIgIgGQgIgGgJABIgFAAIgFAAg");
	this.shape_16.setTransform(-77.4,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,0,255,0.424)").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgIQAAgIAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFACAAAEQAAADgCADQgCACgDAAIgCAAQgNgDgLAAIgMAAIgQAEIABAHIgBAcIAfgDIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghADIgBAJIAAAJQAAARACACQACACAKAAIANAAIANAAIAFgBIAEAAQAIAAAAAHQAAAHgHABQgGACgWgBQgXAAgGgGg");
	this.shape_17.setTransform(77.1,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,0,255,0.424)").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_18.setTransform(67.1,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,0,255,0.424)").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_19.setTransform(56.2,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,0,255,0.424)").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_20.setTransform(46.3,0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,0,255,0.424)").s().p("AgtA6QgCgCAAgDIABgXIABgXIAAgLIAAgNIABgRIAAgSQAAgCACgDQACgCADAAQADAAACACQACADAAACIAAASIgBARIAAASIAfgFQATgEAMAAIABgfQAAgGACgFQACgIAFAAQADAAACACQACACAAADIgBADIgBAJIAAAHIABAGIgCAWIgBAUIABARIABARQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgRIgBgRIAAgKQgMAAgSADIgeAGIgCATIgBATQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_21.setTransform(35.8,0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,0,255,0.424)").s().p("AgfA5IgBgGIAAgVIABgeIACgeIAAgKIAAgKQACgHAGABIAHgBIAKgBQAMAAAMAJQANALAAAOQAAASgNAKQgNAJgRAAIgIAAIgBAmIgCAGQgBABgDAAQgEAAgCgBgAgPgrIgBANIgCAdIAIABQAMAAAJgFQAIgIABgLQAAgIgJgGQgIgGgIABIgHAAIgDAAg");
	this.shape_22.setTransform(26.1,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,0,255,0.424)").s().p("AgfA6QgEgDAAgIIABgZQACggAAgpQAAgEACgCQACgCADAAQADAAADACQACACAAAEQAAApgCAhIgBALIgBALQATAAAdgJIACgBQADAAACADQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgCg");
	this.shape_23.setTransform(13.7,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,0,255,0.424)").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_24.setTransform(3.8,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,0,255,0.424)").s().p("AgfA2QgDgCAAgEQAAgCADgCQACgDADAAIAQgCIAAgNIAAgNIAAgMQAAgPABgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgCABQgCACgEAAIgLAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAIgMABIgMAAIgNABIgPABQgDAAgCgCg");
	this.shape_25.setTransform(-5.7,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,0,255,0.424)").s().p("AgeA5IgCgGIAAgVIABgeIACgeIAAgKIAAgKQACgHAGABIAHgBIAKgBQAMAAAMAJQANALAAAOQAAASgNAKQgNAJgRAAIgIAAIgBAmIgCAGQgBABgEAAQgDAAgBgBgAgPgrIgBANIgCAdIAIABQAMAAAJgFQAIgIABgLQAAgIgJgGQgIgGgIABIgHAAIgDAAg");
	this.shape_26.setTransform(-13.6,0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,0,255,0.424)").s().p("AgfA2QgCgCAAgEQAAgCACgCQACgDADAAIAPgCIABgNIAAgNIgBgMQAAgPACgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDABQgBACgDAAIgMAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQAEAAACACQABADAAADQAAADgBACQgCACgEAAIgMABIgMAAIgOABIgOABQgDAAgCgCg");
	this.shape_27.setTransform(-21.7,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,0,255,0.424)").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_28.setTransform(-30.2,0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,0,255,0.424)").s().p("AggA2QgBgCAAgEQAAgCABgCQADgDADAAIAPgCIACgNIgBgNIgBgMQABgPACgaIgKAAIgJAAQgEAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgDABQgCACgCAAIgMAAIgMgCIgCAoIAAAMIABANIgBAMIAYAAQACAAACACQACADAAADQAAADgCACQgCACgCAAIgNABIgMAAIgOABIgOABQgDAAgDgCg");
	this.shape_29.setTransform(-38.9,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,0,255,0.424)").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_30.setTransform(-47.5,0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,0,255,0.424)").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_31.setTransform(-57.8,0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,0,255,0.424)").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_32.setTransform(-68.3,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,0,255,0.424)").s().p("AgfA5IgBgGIAAgVIABgeIACgeIAAgKIABgKQACgHAFABIAGgBIALgBQANAAALAJQANALAAAOQAAASgOAKQgMAJgQAAIgJAAIgBAmIgBAGQgDABgDAAQgCAAgDgBgAgQgrIAAANIgBAdIAIABQALAAAIgFQAKgIgBgLQAAgIgIgGQgIgGgJABIgFAAIgFAAg");
	this.shape_33.setTransform(-77.4,0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,0,255,0.745)").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgIQAAgIAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFACAAAEQAAADgCADQgCACgDAAIgCAAQgNgDgLAAIgMAAIgQAEIABAHIgBAcIAfgDIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghADIgBAJIAAAJQAAARACACQACACAKAAIANAAIANAAIAFgBIAEAAQAIAAAAAHQAAAHgHABQgGACgWgBQgXAAgGgGg");
	this.shape_34.setTransform(77.1,0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,0,255,0.745)").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_35.setTransform(67.1,0.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,0,255,0.745)").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_36.setTransform(56.2,0.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,0,255,0.745)").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_37.setTransform(46.3,0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,0,255,0.745)").s().p("AgtA6QgCgCAAgDIABgXIABgXIAAgLIAAgNIABgRIAAgSQAAgCACgDQACgCADAAQADAAACACQACADAAACIAAASIgBARIAAASIAfgFQATgEAMAAIABgfQAAgGACgFQACgIAFAAQADAAACACQACACAAADIgBADIgBAJIAAAHIABAGIgCAWIgBAUIABARIABARQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgRIgBgRIAAgKQgMAAgSADIgeAGIgCATIgBATQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_38.setTransform(35.8,0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,0,255,0.745)").s().p("AgfA5IgBgGIAAgVIABgeIACgeIAAgKIAAgKQACgHAGABIAHgBIAKgBQAMAAAMAJQANALAAAOQAAASgNAKQgNAJgRAAIgIAAIgBAmIgCAGQgBABgDAAQgEAAgCgBgAgPgrIgBANIgCAdIAIABQAMAAAJgFQAIgIABgLQAAgIgJgGQgIgGgIABIgHAAIgDAAg");
	this.shape_39.setTransform(26.1,0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,0,255,0.745)").s().p("AgfA6QgEgDAAgIIABgZQACggAAgpQAAgEACgCQACgCADAAQADAAADACQACACAAAEQAAApgCAhIgBALIgBALQATAAAdgJIACgBQADAAACADQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgCg");
	this.shape_40.setTransform(13.7,0.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,0,255,0.745)").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_41.setTransform(3.8,0.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,0,255,0.745)").s().p("AgfA2QgDgCAAgEQAAgCADgCQACgDADAAIAQgCIAAgNIAAgNIAAgMQAAgPABgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgCABQgCACgEAAIgLAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAIgMABIgMAAIgNABIgPABQgDAAgCgCg");
	this.shape_42.setTransform(-5.7,0.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,0,255,0.745)").s().p("AgeA5IgCgGIAAgVIABgeIACgeIAAgKIAAgKQACgHAGABIAHgBIAKgBQAMAAAMAJQANALAAAOQAAASgNAKQgNAJgRAAIgIAAIgBAmIgCAGQgBABgEAAQgDAAgBgBgAgPgrIgBANIgCAdIAIABQAMAAAJgFQAIgIABgLQAAgIgJgGQgIgGgIABIgHAAIgDAAg");
	this.shape_43.setTransform(-13.6,0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,0,255,0.745)").s().p("AgfA2QgCgCAAgEQAAgCACgCQACgDADAAIAPgCIABgNIAAgNIgBgMQAAgPACgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDABQgBACgDAAIgMAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQAEAAACACQABADAAADQAAADgBACQgCACgEAAIgMABIgMAAIgOABIgOABQgDAAgCgCg");
	this.shape_44.setTransform(-21.7,0.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,0,255,0.745)").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_45.setTransform(-30.2,0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,0,255,0.745)").s().p("AggA2QgBgCAAgEQAAgCABgCQADgDADAAIAPgCIACgNIgBgNIgBgMQABgPACgaIgKAAIgJAAQgEAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgDABQgCACgCAAIgMAAIgMgCIgCAoIAAAMIABANIgBAMIAYAAQACAAACACQACADAAADQAAADgCACQgCACgCAAIgNABIgMAAIgOABIgOABQgDAAgDgCg");
	this.shape_46.setTransform(-38.9,0.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,0,255,0.745)").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_47.setTransform(-47.5,0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,0,255,0.745)").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_48.setTransform(-57.8,0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,0,255,0.745)").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_49.setTransform(-68.3,0.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,0,255,0.745)").s().p("AgfA5IgBgGIAAgVIABgeIACgeIAAgKIABgKQACgHAFABIAGgBIALgBQANAAALAJQANALAAAOQAAASgOAKQgMAJgQAAIgJAAIgBAmIgBAGQgDABgDAAQgCAAgDgBgAgQgrIAAANIgBAdIAIABQALAAAIgFQAKgIgBgLQAAgIgIgGQgIgGgJABIgFAAIgFAAg");
	this.shape_50.setTransform(-77.4,0.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF00FF").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgIQAAgIAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFACAAAEQAAADgCADQgCACgDAAIgCAAQgNgDgLAAIgMAAIgQAEIABAHIgBAcIAfgDIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghADIgBAJIAAAJQAAARACACQACACAKAAIANAAIANAAIAFgBIAEAAQAIAAAAAHQAAAHgHABQgGACgWgBQgXAAgGgGg");
	this.shape_51.setTransform(77.1,0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF00FF").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_52.setTransform(67.1,0.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_53.setTransform(56.2,0.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF00FF").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_54.setTransform(46.3,0.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF00FF").s().p("AgtA6QgCgCAAgDIABgXIABgXIAAgLIAAgNIABgRIAAgSQAAgCACgDQACgCADAAQADAAACACQACADAAACIAAASIgBARIAAASIAfgFQATgEAMAAIABgfQAAgGACgFQACgIAFAAQADAAACACQACACAAADIgBADIgBAJIAAAHIABAGIgCAWIgBAUIABARIABARQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgRIgBgRIAAgKQgMAAgSADIgeAGIgCATIgBATQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_55.setTransform(35.8,0.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF00FF").s().p("AgfA5IgBgGIAAgVIABgeIACgeIAAgKIAAgKQACgHAGABIAHgBIAKgBQAMAAAMAJQANALAAAOQAAASgNAKQgNAJgRAAIgIAAIgBAmIgCAGQgBABgDAAQgEAAgCgBgAgPgrIgBANIgCAdIAIABQAMAAAJgFQAIgIABgLQAAgIgJgGQgIgGgIABIgHAAIgDAAg");
	this.shape_56.setTransform(26.1,0.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF00FF").s().p("AgfA6QgEgDAAgIIABgZQACggAAgpQAAgEACgCQACgCADAAQADAAADACQACACAAAEQAAApgCAhIgBALIgBALQATAAAdgJIACgBQADAAACADQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgCg");
	this.shape_57.setTransform(13.7,0.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_58.setTransform(3.8,0.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF00FF").s().p("AgfA2QgDgCAAgEQAAgCADgCQACgDADAAIAQgCIAAgNIAAgNIAAgMQAAgPABgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgCABQgCACgEAAIgLAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQAEAAACACQACADAAADQAAADgCACQgCACgEAAIgMABIgMAAIgNABIgPABQgDAAgCgCg");
	this.shape_59.setTransform(-5.7,0.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF00FF").s().p("AgeA5IgCgGIAAgVIABgeIACgeIAAgKIAAgKQACgHAGABIAHgBIAKgBQAMAAAMAJQANALAAAOQAAASgNAKQgNAJgRAAIgIAAIgBAmIgCAGQgBABgEAAQgDAAgBgBgAgPgrIgBANIgCAdIAIABQAMAAAJgFQAIgIABgLQAAgIgJgGQgIgGgIABIgHAAIgDAAg");
	this.shape_60.setTransform(-13.6,0.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF00FF").s().p("AgfA2QgCgCAAgEQAAgCACgCQACgDADAAIAPgCIABgNIAAgNIgBgMQAAgPACgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDABQgBACgDAAIgMAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQAEAAACACQABADAAADQAAADgBACQgCACgEAAIgMABIgMAAIgOABIgOABQgDAAgCgCg");
	this.shape_61.setTransform(-21.7,0.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF00FF").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_62.setTransform(-30.2,0.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF00FF").s().p("AggA2QgBgCAAgEQAAgCABgCQADgDADAAIAPgCIACgNIgBgNIgBgMQABgPACgaIgKAAIgJAAQgEAAgCgCQgCgCAAgDQAAgGAHgBIAWgBQAOAAAVADQAHABAAAHQAAAEgDABQgCACgCAAIgMAAIgMgCIgCAoIAAAMIABANIgBAMIAYAAQACAAACACQACADAAADQAAADgCACQgCACgCAAIgNABIgMAAIgOABIgOABQgDAAgDgCg");
	this.shape_63.setTransform(-38.9,0.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF00FF").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_64.setTransform(-47.5,0.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF00FF").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_65.setTransform(-57.8,0.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_66.setTransform(-68.3,0.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF00FF").s().p("AgfA5IgBgGIAAgVIABgeIACgeIAAgKIABgKQACgHAFABIAGgBIALgBQANAAALAJQANALAAAOQAAASgOAKQgMAJgQAAIgJAAIgBAmIgBAGQgDABgDAAQgCAAgDgBgAgQgrIAAANIgBAdIAIABQALAAAIgFQAKgIgBgLQAAgIgIgGQgIgGgJABIgFAAIgFAAg");
	this.shape_67.setTransform(-77.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},12).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ParticialPhrases = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AgDAjQgCgDgBgDIAAgEIgBgEQAAgDADgCQACgCACAAQAIAAAAAPQABADgDADQgCACgDAAQgCAAgCgCgAgFgSQgCgCAAgDIAAgDIgBgDQAAgDACgCQADgCADAAQAHAAAAANQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape.setTransform(86.6,-22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_1.setTransform(79.3,-23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s().p("AgfA4QgHgGAAgYIAAgKIAAgMIAAgDIABgEIABgfIAAgIIgBgIQAAgJAHAAQADAAACACIARgDIAOgBQASAAAKADQAFADAAAFQAAADgCACQgCACgDABIgCgBQgNgEgLAAIgMABIgQAEIABAIIgBAcIAfgEIARgBQADAAADACQACACAAADQAAAHgHAAIgRABIghADIgBALIAAAIQAAAQACAEQACACAKAAIANgBIANAAIAFAAIAEgBQAIAAAAAIQAAAGgHABQgGACgWAAQgXAAgGgHg");
	this.shape_2.setTransform(69.6,-23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_3.setTransform(59.5,-23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_4.setTransform(48.7,-23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_5.setTransform(38.7,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AgtA6QgCgCAAgDIABgXIABgYIAAgLIAAgMIABgRIAAgRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAARIgBASIAAARIAfgFQATgEAMABIABggQAAgGACgGQACgIAFAAQADAAACACQACACAAAEIgBADIgBAJIAAAGIABAHIgCAVIgBAWIABAQIABARQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgRIgBgQIAAgMQgMABgSAEIgeAFIgCATIgBATQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_6.setTransform(28.2,-23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AgfA4IgBgEIAAgWIABgeIACgeIAAgKIAAgLQACgGAGABIAHgBIAKgBQAMABAMAIQANALAAAOQAAASgNAKQgNAKgRgBIgIgBIgBAoIgCAEQgCACgCAAQgEAAgCgCgAgPgrIgBAOIgBAdIAHAAQAMAAAJgGQAIgGABgMQAAgIgJgGQgIgFgIgBIgHAAIgDABg");
	this.shape_7.setTransform(18.6,-23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AgfA5QgEgCAAgJIABgYQACghAAgpQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAAqgCAhIgBALIgBALQATAAAdgJIACAAQADgBACADQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgDg");
	this.shape_8.setTransform(6.1,-23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_9.setTransform(-3.8,-23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AgfA2QgCgCgBgDQABgEACgCQACgCADAAIAPgBIABgOIAAgMIgBgNQAAgQACgZIgJABIgKAAQgDAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQANAAAXADQAGABAAAHQAAAEgDACQgBABgEAAIgLgBIgMgBIgBAnIAAANIAAANIAAANIAWgBQADAAADACQABACAAADQAAAEgBACQgDACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_10.setTransform(-13.2,-23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF00FF").s().p("AgfA4IgBgEIAAgWIABgeIACgeIAAgKIAAgLQACgGAGABIAHgBIAKgBQAMABAMAIQANALAAAOQAAASgNAKQgNAKgRgBIgIgBIgBAoIgCAEQgBACgDAAQgEAAgCgCgAgPgrIgBAOIgCAdIAIAAQAMAAAJgGQAIgGABgMQAAgIgJgGQgIgFgIgBIgHAAIgDABg");
	this.shape_11.setTransform(-21.1,-23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF00FF").s().p("AgfA2QgCgCAAgDQAAgEACgCQACgCADAAIAPgBIABgOIAAgMIgBgNQAAgQACgZIgJABIgKAAQgDAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQANAAAXADQAGABAAAHQAAAEgDACQgCABgCAAIgMgBIgMgBIgBAnIAAANIAAANIAAANIAWgBQAEAAABACQACACAAADQAAAEgCACQgBACgEAAIgMAAIgMAAIgOACIgOABQgDAAgCgCg");
	this.shape_12.setTransform(-29.2,-23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF00FF").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_13.setTransform(-37.7,-23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF00FF").s().p("AggA2QgCgCAAgDQAAgEACgCQADgCADAAIAQgBIABgOIgBgMIAAgNQAAgQACgZIgKABIgJAAQgEAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQANAAAWADQAHABAAAHQAAAEgCACQgDABgDAAIgLgBIgMgBIgCAnIAAANIABANIgBANIAYgBQACAAACACQACACABADQgBAEgCACQgCACgCAAIgNAAIgMAAIgOACIgOABQgDAAgDgCg");
	this.shape_14.setTransform(-46.5,-23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_15.setTransform(-55.1,-23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF00FF").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_16.setTransform(-65.4,-23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00FF").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_17.setTransform(-75.8,-23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF00FF").s().p("AgeA4IgCgEIAAgWIABgeIACgeIAAgKIABgLQACgGAFABIAGgBIALgBQAMABAMAIQANALAAAOQAAASgOAKQgMAKgQgBIgJgBIgBAoIgBAEQgCACgEAAQgCAAgCgCgAgQgrIAAAOIgCAdIAJAAQALAAAIgGQAKgGgBgMQAAgIgIgGQgIgFgJgBIgFAAIgFABg");
	this.shape_18.setTransform(-85,-23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_19.setTransform(98.9,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_20.setTransform(91.2,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYA5QgKgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKAAgNQAAgUALgMQAMgMASAAQAIAAAEACQAEABADAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgEAMgHAFQgJAHgPAAQgKAAgGgBgAgMgkQgIAJAAANQAAALAFAEQADAFAJAAQAGAAAHgHQAGgIABgHIAEgZIgGgDQgDgCgEAAQgNAAgHAKg");
	this.shape_21.setTransform(82.7,5.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_22.setTransform(76.9,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_23.setTransform(68.9,3.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUAoQgLgDAAgIQAAgCACgDQADgCADAAQACAAAEADQABACAHABIAHABQAFAAAGgBQAGgDAAgEQAAgKgNgEIgIgCQgJgCgEgCQgGgDAAgJQAAgPAOgGIANgFIAPgFIAGgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgEAAgBgDIgCgIIgRAFQgLAFAAAHIAFABQAPAEAJAEQAMAIgBAOQABAMgKAGQgKAFgMAAQgJAAgJgEg");
	this.shape_24.setTransform(54.7,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_25.setTransform(49.2,1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_26.setTransform(42.8,1.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHA1IAAgbIABgaIAAgZIABgbQAAgHAHAAQAHAAAAAHIgBAbIAAAZIgBAlIgBAQQAAAIgGgBQgHAAAAgHg");
	this.shape_27.setTransform(31.8,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIA1IABgbIACgaIAAgZIAAgbQAAgHAGAAQAIAAgBAHIAAAbIAAAZIgBAlIgBAQQgBAIgFgBQgIAAAAgHg");
	this.shape_28.setTransform(27.7,1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_29.setTransform(21.8,3.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_30.setTransform(9.2,1.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADAAQAGAAABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_31.setTransform(1.3,2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_32.setTransform(-4.2,1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAFAVIgEgRIgBgQIgGAOIgLAeIgCAEQgDAEgFABQgFgBgFgVIgGgeIgCgLIgBgLQABgDACgCQACgCADAAQAGAAABAGIACALIABAKIAEAgQAIgVAIgeQADgIAFAAQAGAAACAJIAFAbIAFAbIAFgTIAKgoQABgEAFAAQADAAACACQACACAAADIAAADIgPA1QgCAHgFAHQgDAEgEAAQgIAAgEgUg");
	this.shape_33.setTransform(-11.5,3.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgJgJQgIgKAAgNQABgUAKgMQAMgMAUAAQAGAAAFACQAEABADAEQAIAAAAAIIgBAOIgDAOIgBAYQAAAOgDAKQgDAMgIAFQgIAHgQAAQgKAAgHgBgAgNgkQgGAJAAANQAAALADAEQAEAFAIAAQAHAAAHgHQAGgIACgHIACgZIgFgDQgDgCgEAAQgNAAgIAKg");
	this.shape_34.setTransform(-25.2,5.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF00FF").s().p("AASAkIgCgQIgBgRIAAgFIAAgHQAAgQgFAAQgJAAgGAKQgHAJgEAMIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgGIgBgHQAAgDADgDQACgCADAAQAGAAABAKIAAAIQANgQAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_35.setTransform(-32.9,3.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF00FF").s().p("AgGA1QgCgCAAgEIAAgMIgBgOIABgRIABgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIAAARIAAAOIAAAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_36.setTransform(-38.9,1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF00FF").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJAAgHAIIgKARQAAAbgCAGQgCAEgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgKIAAg1IAAgNIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAHIABAMIAAARIAAAQIAAAGQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAOIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_37.setTransform(-45.4,1.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF00FF").s().p("AgUAoQgLgDAAgIQAAgCACgDQACgCAEAAQACAAADADQACACAGABIAIABQAGAAAEgBQAHgDAAgEQAAgKgNgEIgHgCQgKgCgEgCQgGgDAAgJQAAgPAOgGIAOgFIANgFIAHgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgEAAQgDAAgCgDIgCgIIgRAFQgLAFAAAHIAFABQAQAEAHAEQANAIAAAOQgBAMgJAGQgKAFgMAAQgJAAgJgEg");
	this.shape_38.setTransform(-53.6,3.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF00FF").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_39.setTransform(-61,3.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("AgcA8QgCgCAAgEIABgdIAAgcIgBgdIgCgPQAAgFACgEQADgFAEAAQADABACACQABACAAACIAAADIAAAEQAGgFAGgCQAFgCAFAAQAPAAAHANQAGALAAASQAAAPgJAJQgJAMgPAAQgGAAgJgDIAAAjQAAAEgCACQgCABgDAAQgEAAgCgBgAgGgmIgKAIIABAiQAIADAHAAQAJAAAFgHQAEgFAAgJQAAgNgDgIQgDgGgHAAQgGAAgFADg");
	this.shape_40.setTransform(-68.8,5.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTAoQgMgEAAgHQAAgDADgCQACgCACAAQADAAAEAEQABABAHABIAIABQAFAAAEgCQAHgCAAgEQAAgKgOgDIgHgCQgJgDgEgCQgGgEAAgHQAAgQAPgHIAMgEIAPgFIAGgBQADAAACACQACACAAAEIABAGIABAFQAAAEgCACQgCACgDAAQgFAAgBgCIgCgIIgRAEQgKAGAAAGIADACQAQACAIAGQAMAGAAAPQAAAMgKAGQgIAFgMAAQgKAAgIgEg");
	this.shape_41.setTransform(71.6,26.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAyQgLgLAAgQQAAgTALgLQALgMAPAAQAJAAAEACIAHAGIACgqQABgGAGAAQAHAAgBAHIgDAtIAAAVQAAAYACAMIAAACQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgEAAgCgHQgGAEgFACQgGACgFAAQgPAAgKgKgAgRABQgFAHAAAPQgBAJAHAHQAHAHAJAAQAFAAAEgCIAIgHIACgCIAAgMIAAgJIAAgIQgCgGgFgCQgFgEgGAAQgLAAgHAHg");
	this.shape_42.setTransform(63.7,24.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_43.setTransform(57.4,24.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AATA4QgEgHgHgKIgMgSIgNAJIgBAWQAAAEgCACQgCACgDAAQgIAAABgKIABgSIAAgTIABgYIAAgZIAAgIIgBgIQAAgDACgCQACgCAEAAQADAAABACQACACAAADIABAIIAAAIIgBAYIAAAYQALgHAHgJIARgQQACgDADAAQADAAACADQADACAAADQAAACgDADQgIAKgOALIAQAWQALAPAAAFQAAADgCACQgDACgDAAQgDAAgDgEg");
	this.shape_44.setTransform(51.6,24.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgcAiIAAgzIABgHIAAgIQAAgHAGAAQAIAAAAANQANgOARAAQAGAAADAFQADAEAAAIIAAAGQgBAJgGAAQgHAAAAgHIAAgGIgBgFQgLABgGAFQgGAFgFAJIABAoQgBAHgHAAQgHAAAAgHg");
	this.shape_45.setTransform(39.2,26.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYAgQgMgJAAgRQABgSAIgNQALgOAQAAQALAAAJAEQAIAFABAKQgBAIgHAGIgQAHIgbAOQAEAFAGAEQAHACAHAAQAEAAAIgCQAIgBACgFQADgDADAAQACAAACABQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgKAAQgQAAgKgIgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_46.setTransform(31.4,26.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgMgHAAQgJgBgHAIIgKAQQAAAdgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg0IAAgMIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABANIAAAQIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_47.setTransform(22.9,24.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgqIgQgBQgHgCAAgGQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADgBQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_48.setTransform(15,25.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_49.setTransform(7.3,26.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAgQgLgJAAgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAKAFgBAKQABAIgJAGIgPAHIgbAOQAEAFAGAEQAHACAGAAQAGAAAHgCQAIgBADgFQACgDACAAQAEAAACABQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgIgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_50.setTransform(-4.9,26.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAUA3IgDgRIgBgRIAAgGIAAgGQAAgMgHAAQgJgBgHAIIgKAQQAAAdgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg0IAAgMIAAgIIgBgHQAAgDACgCQACgCADAAQAGAAABAGIABANIAAAQIAAAQIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAGAAAMIABANIABAQIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgGg");
	this.shape_51.setTransform(-13.4,24.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgIIAAgIIgBgqIgQgBQgHgCAAgGQAAgDACgDQACgCADAAIAPACIAAgKIAAgJQAAgDACgCQACgCADgBQAGAAABAMIAAAGIAAAEIAAAFIAKgCIAKABQAFACAAAFQAAAEgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAADIAAAEQAAAPgIAAQgCAAgCgBg");
	this.shape_52.setTransform(-21.3,25.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF00FF").s().p("AgYA5QgKgCAAgGQAAgGAGAAIAJABQAHABAHAAQANAAAGgOQADgJAAgSQgEAHgFAEQgGAEgFAAQgOAAgJgJQgHgKAAgNQAAgUALgMQAMgMASAAQAIAAAEACQAEABADAEQAIAAAAAIIgCAOIgBAOIgCAYQgBAOgCAKQgEAMgHAFQgJAHgPAAQgKAAgGgBgAgMgkQgIAJAAANQAAALAFAEQADAFAJAAQAGAAAHgHQAGgIABgHIAEgZIgHgDQgCgCgEAAQgNAAgHAKg");
	this.shape_53.setTransform(-33.4,28.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF00FF").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAJQgHAJgEANIAAAIIgBAGIABAHIAAAHQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIgBgHIAAgHIABgUIABgUIAAgIIgBgHQAAgCADgCQACgCADgBQAGAAABAKIAAAIQANgQAMAAQALAAAFALQADAGAAAOIAAAIIAAAFIACAQIABAPQAAAEgCACQgCACgDAAQgGgBgBgGg");
	this.shape_54.setTransform(-41,26.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF00FF").s().p("AgGA1QgCgCAAgDIAAgOIgBgNIABgRIABgQQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAQIAAARIAAANIAAAOQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgDAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_55.setTransform(-47.1,24.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF00FF").s().p("AgIA1IABgaIABgbIAAgZIABgbQAAgIAGAAQAIAAAAAIIgBAbIAAAZIgBAkIgBASQAAAGgGABQgHAAgBgIg");
	this.shape_56.setTransform(-51.3,24.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF00FF").s().p("AgIA1IACgaIABgbIAAgZIAAgbQAAgIAHAAQAGAAAAAIIAAAbIAAAZIgCAkIAAASQgBAGgFABQgIAAAAgIg");
	this.shape_57.setTransform(-55.4,24.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF00FF").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_58.setTransform(-61.4,26.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF00FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_59.setTransform(-69,26.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgZAfQgKgIgBgRQABgSAIgNQALgOAQAAQAMAAAHAEQAJAFAAAKQAAAIgHAGIgQAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgDQAIgCACgDQADgFADAAQADAAABADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgOgTQgHAHgCANIAWgKQAMgGAGgFQgGgGgLAAQgIAAgGAHg");
	this.shape_60.setTransform(69.1,49.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAQAjQgJAFgLAAQgJAAgHgFQgHgFgBgIQgDgUAAgOQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgOQAAgPABgMQABgHAGABQADAAADACQACABAAADIgCAcIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_61.setTransform(61,49.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_62.setTransform(53.2,49.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTApQgMgEAAgIQAAgCADgDQABgCADAAQADAAADADQACACAHABIAIABQAFAAAEgCQAHgBAAgFQAAgKgOgEIgHgCQgJgCgEgCQgGgDAAgJQAAgPAPgGIAMgFIAPgFIAGgBQADAAACACQACACAAADIABAGIABAHQAAADgCACQgCACgDAAQgFAAgBgDIgCgIIgRAGQgKAEAAAHIADABQAQAEAJAEQALAIAAAOQAAAMgKAGQgIAFgMAAQgKAAgIgDg");
	this.shape_63.setTransform(45.5,49);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZAfQgLgIABgRQgBgSAKgNQAKgOAQAAQALAAAIAEQAKAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGAEAHAAQAFAAAHgDQAJgCADgDQACgFACAAQAEAAACADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_64.setTransform(38.1,49.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAFAAAJIAAAFQAAAJgHAAQgGAAAAgHIAAgFIgBgHQgLACgGAFQgHAFgEAKIAAAmQAAAIgHAAQgHAAABgIg");
	this.shape_65.setTransform(30.5,49.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgYAfQgLgIAAgRQAAgSAJgNQAJgOARAAQALAAAJAEQAJAFAAAKQAAAIgJAGIgPAHIgbANQAEAHAGACQAGAEAIAAQAFAAAGgDQAJgCACgDQADgFACAAQADAAADADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgKAAQgQAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgJAAgGAHg");
	this.shape_66.setTransform(18.2,49.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAUA4IgDgRIgBgSIAAgGIAAgFQAAgNgHgBQgJABgHAHIgKARQAAAcgCAEQgCAFgFAAQgDAAgCgCQgCgCAAgDIABgDIAAgLIABgLIAAg1IAAgMIAAgHIgBgGQAAgEACgCQACgCADAAQAGAAABAGIABAOIAAAQIAAAPIAAAHQAGgIAHgEQAFgEAIAAQAMAAAFAIQADAFAAAMIABAPIABAPIADAPIAAACQAAADgCACQgCACgDAAQgFAAgCgFg");
	this.shape_67.setTransform(9.7,47.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAPgIABQgCgBgCgBg");
	this.shape_68.setTransform(1.8,48);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgEACgCQACgBADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAPgIABQgCgBgCgBg");
	this.shape_69.setTransform(-17.7,48);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF00FF").s().p("AASAkIgCgQIgBgQIAAgGIAAgHQAAgQgFAAQgJAAgGAKQgHAIgEANIAAAHIgBAIIABAGIAAAGQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgGIAAgGIABgVIABgVIAAgHIgBgGQAAgEADgCQACgBADAAQAGAAABAJIAAAJQANgRAMAAQALAAAFAKQADAIAAANIAAAHIAAAGIACAQIABAQQAAADgCABQgCACgDAAQgGABgBgHg");
	this.shape_70.setTransform(-37.4,49.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF00FF").s().p("AgGA1QgCgCAAgDIAAgNIgBgOIABgRIABgQQAAgDACgCQACgCADgBQACABACACQACACAAADIgBAQIAAARIAAAOIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgoQgCgCAAgDQAAgEACgCQADgDACAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_71.setTransform(-43.4,47.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF00FF").s().p("AgDArQgCgCAAgDIgCgaIgCgZQAAgIgCgFQgFADgGAFIgIAKIgEAEIgBAMIgBANIABAGIABAGQAAADgCACQgDACgDAAQgIAAAAgTIABgNIABgMIgBgMIgBgLQAAgRAIAAQADAAACACQACADAAADIAAAEIAAAFIAAAHQAEgHAHgHQAHgGAGAAQALAAADALQAEgFAGgDQAGgCAHAAQAMAAAEANIADAUQADAMADAdQAAADgCACQgCACgEAAQgGAAgBgGIgCgXIgDgVQAAgGgCgEQgDgHgDAAQgCAAgIAFQgHAEgCACIAAAOIADATIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_72.setTransform(-51.4,49.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF00FF").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_73.setTransform(-61.4,49.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF00FF").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_74.setTransform(-69,49.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgVAfQgKgKAAgRQgBgQAJgMQAKgPASAAQAOAAAIANQAGALAAAPQAAAQgJALQgJANgPAAQgMAAgJgJgAgMgOQgFAIAAAKQAAAKAGAGQAFAFAGAAQAHAAAGgFQAGgGAAgLQABgbgQAAQgKAAgGAKg");
	this.shape_75.setTransform(7.3,26.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF00FF").s().p("AgZA5QgJgCAAgGQAAgGAHAAIAJABQAFABAIAAQANAAAFgOQAEgJAAgSQgEAHgFAEQgFAEgHAAQgNAAgJgJQgIgKAAgNQABgUAKgMQAMgMAUAAQAGAAAFACQAEABADAEQAIAAAAAIIgBAOIgDAOIgBAYQAAAOgDAKQgDAMgIAFQgIAHgQAAQgKAAgHgBgAgNgkQgGAJAAANQAAALADAEQAEAFAIAAQAHAAAHgHQAGgIACgHIACgZIgFgDQgDgCgEAAQgNAAgIAKg");
	this.shape_76.setTransform(-25.2,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-25.2,y:5.4}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},32).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-25.2,y:5.4}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:7.3,y:26.4}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},25).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_76},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_75},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_34,p:{x:-29.7,y:51.2}},{t:this.shape_69},{t:this.shape_49,p:{x:-10.4,y:49.3}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},23).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-36.3,182.1,24.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("EggOAQLMAAAggVMBAaAAAIAAP3IADAAIAADcIgDAAIAANCg");
	this.shape.setTransform(206.3,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteSheet, new cjs.Rectangle(0,0,412.6,207), null);


(lib.KidsPushinBubOnly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFF").s().p("AAoCIQAAgGADAAQAEAAAIALQAAAHgKAAIgFgMgAAxBZQgCgGADgBQADgBAMAJQABAHgKADIgHgLgAA5AbQgNgEAvgDQALAFgYACQgEACgFAAQgGAAgGgCgAAlgUQgOAAAtgPQAMABgXAIQgGAGgMAAIgCAAgAgrhoQAFgWAFgBQAFgCABAEQABAFgGALQgJAPgCAAQgCAAACgKgAheh5QgBgWAEgDQAFgDACAEQADAEgEAMQgEARgDAAQgBAAgBgJg");
	this.shape.setTransform(99.3,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAnCeQgBgUgMgGQAHgJAJACQAIACAFAJQAGAJgDAGQgEAHgMAAIgDAAgAApCJIAEAMQALAAAAgHQgJgLgDAAQgDAAAAAGgAAiBZQAEgLAJAAQAJAAAHAHQAIAHgBAHQgCAJgPADQgGgUgNgCgAAzBTQgDABABAGIAIAKQAKgCgCgHQgKgIgEAAIAAAAgAAuAbQAIgJATgDQAVgDALAJQgBAOgZAAIgCAAQgWAAgJgIgAA6AcQANAEAIgFQAYgBgLgFQgvADANAEgAAagQQAFgLASgJQAUgIAMAGQADAOgYAGQgNAEgJAAQgHAAgFgCgAAlgTQAOAAAHgGQAXgIgMgCQgtAPANABgAgtiHIAbAAIgKAhQgIAQgPADQAJghgDgTgAghh+QgEABgFAWQgFAWAQgcQAGgKgCgFQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBAAAAAAIgDABgAhoiXIAZgGIgBAiQgDASgNAHQAAgjgIgSgAhaiRQgEADABAWQABAWAIgeQADgMgDgEQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgDABg");
	this.shape_1.setTransform(99.3,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(16));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgHgGIAFABIAIAIIABABIABADIgPgNg");
	this.shape_2.setTransform(34.1,24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AhfAYQAMACANAHQAIAGAKAIIgFAAIgIABQgOgOgQgKgAAXgaQgNgPgKgEQAAAAAAAAQgBAAAAgBQABAAAAAAQAAAAAAgBQALAGALAEIACABQAIAIAMABQAKgKAUADIAWgBQgHAGgNAGQgZAJgGAJQgJgEgNgRg");
	this.shape_3.setTransform(37.3,31.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9A67").s().p("AhHB2IgNgIIgEgGIgRgXIgDgCQgGgEgCgHIgDgEIANgBIAdAdQAZAEAbgIQAegJAPAAIgBAFQgIgCgDAEIgNAAIgEAEIgDAEIgCACQgFgCAAADIgFAFIgIAFQgRAEgOAHgAg5BWQgSgDgLgPIgFgHIABAAIgFgEIAAgBIAAAAQgKgNgEgDQgggPgOgJQgagOAGgaQgLAEAFAQQAEAQAJACIgFAIQgKgHgIgJIgFgCQgEgCgBgEIADgBQAFABgDgFQgDgDgCgEIgBgGIADgDQACgEAFABIAFgJIAJgFQAVgNAXgGQAJgDAJgBIAEAEQAIAJAHAFIADAAQAIAAALAOQAmAEAGAvQANgQAagKQARgHAigLQA/gXADgxIAAAAIAGgDIAigPQAegJAIAUQgOgDgNAFQgQAGgJgBQAMAJgBALQgBAFAWABQgGAIgNAFQACAKAIgFQALgIAFADIAAAaQgLACgCgPQgVAJggAZIg4AuQgOAMgOAJIgLAHQgnAXghAAIgOgBgABrgoQgGAOAKACQAKgRAEgJIgFgBQgHAAgGALgAAzA7QAIgEAIgIQAUgTASgBIAJAMIgLAFIgGAGIgCAFQgGADgIACQgKADgKgBIgEABIgBAAIgFgEgAA0gfIABgBIAAABgAA6gmIACgCQACgBAEAAIAAAAQgBADgGAAIgBAAg");
	this.shape_4.setTransform(43.7,30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhdBuIgdgdIgNABIgBgBIgJgJIAIAAIAFAAQgLgJgIgFQgMgIgMgCIgGgDIgJgGIAFgIQgIgCgEgQQgFgPALgFQgGAaAaAPQAOAJAfAOQAFAEAJAMIABAAIAAABIAFAEIgBABIAFAHQALAPARACQAnAGAvgcIAMgHQANgIAPgMIA4gvQAggYAUgJQACAPAMgCIAAgaQgGgDgKAIQgIAFgCgKQANgGAGgHQgWgBAAgFQABgLgMgJQAJAAAQgFQAOgFAOADQgIgUgeAJIgjAPIgFACIAFgGIAFgFQAngkAqAcQABAPgOAFQgTADgIADIASAWQAKANgBARQgIAGgFAOQg7gCgLAVQgFALAGAYIgBAAIgGADIgJgMQgSABgVATQgIAIgHAEIAFAEQgHADgBADIgOAAIgBABIgHgEIAAAAIgCAKIgBADQAAAEgEAAIAAAAIABgEQgOAAgfAJQgSAFgRAAIgRgBgAhbgNQgLgPgJAAIgCABQgHgFgJgKIgDgEIAMAAIAQANIgBgDIAJAJIAQAFIAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAABAAQALAEANAPQANAPAIAEQAHgIAYgKQAMgEAIgGIAQAAIACgBIACgDIAAABIABgBQABgGAEAAIABAAQAGAAABgEQACAAADgCIACgCIAGACQAJgIASgWIASgWQgCAxg/AXQgjAKgPAGQgcAMgMAQQgGgvgmgEgABbgWQAHgOAKADQgDAKgKAQQgLgBAHgOgAA0gfIABgBIACACIgDAAIAAgBg");
	this.shape_5.setTransform(45.4,28.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9A67").s().p("AjLAbQgdgKgQAAIgGAAQgKAEgUABIgDAAQgJgBAAgIIAEgGIAAgCIgFgBIABgFIADgHIADgBIAMABQARAAAEgKIAJgBQAOAAACgOIABABIApgBQAEAAAPAFQAmACAGABQApAKARAAQAUAAAGgDQAGgEA5ABQBTAAAiADQArAAAUgIIARgJQAOAAAXAGQAXAFAVgBQgBACgfAHIgUAAQgOABAAAIIgDAMQgFAHgHACQgGABAAABIAIAJQgCAEgKAAQgFAAgLgFQgKgHgsAAQhdALgYAAQgZgFgXABQgeAAgcAGQgbAGgeAAQgeAAgegJg");
	this.shape_6.setTransform(53.7,27.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjRAiQgPgHgfAAIgmAHQgGAAAAgGQAAgEAHgCQAUgBAKgEIAGAAQAQAAAdAKQAeAJAeAAQAeAAAbgGQAcgGAeAAQAXgBAaAFQAXAABdgLQAsAAALAHQAKAFAGAAQAJAAACgEIgIgJQABgBAFgBQAHgCAFgHIADgMQAAgIAOgBIAUAAQAfgHABgCQgVABgWgFQgYgGgNAAIgSAJQgTAIgrAAQgjgDhSAAQg5gBgHAEQgGADgTAAQgSAAgpgKQgGgBglgCQgQgFgEAAIgpABIgBgBIABgDIgBgGIAPAAQAvAAgCAFIAbgCQAIgBAMAGQANAJArAAQAVAAAGgDQAGgDA5AAIBTADIAGABQBFAAAUgJIASgJQAMAAAmAJQApABAAALQAAAHgPAHQgSAHggAAIABADQAAAKgQAKIACAFQAAANgXAAQghgLglAAQhRAKgjAAQgXgEgaAAQgeAAgWAHQgXAFgnAAQgpABgSgMg");
	this.shape_7.setTransform(54.5,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},4).wait(15));

	// Layer 9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CCFF").s().p("AgBAGQgRgOgLgTIAGAGQAYAaAdAXQgSgIgNgOg");
	this.shape_8.setTransform(70.4,119.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC97").s().p("AASBIQAYghALgZQAVAGAfgGIAUgFIBHgUIAAgUIAOAHQAGACADgCQADgCAAgFQAeAuAPAQQAcAeAjALIADABQgJARgdAGIgQACQgNABgRAAQgngCgSABQgfAAgRAHQgJACgCgHIgCgOQgXAIADAyQgWgCgcAEQglAFgLAAQgMgvARgggABAAqQgEACgBAEQgBAGAIAFQAGgKgCgFQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgDABgAj5CFIgkgFIgSgDIgDgBIABgCQADgqgFgdQgGgegTgnQAXgBBBgHQA7gDAXAYQAEgHgMgoQgMglANgUQAXAKAcATIAuAiQA6AnA8ACQgFBGhbAWQgmAJgmgGQgngFgXgTQgJADABATQACAagBAEQgIgHgSABQAAAJARAEQAPADgGAQQgTgGgjgFgAB/iWIBoALIASADIgBABIgRABIgNABQgpAAgygRg");
	this.shape_9.setTransform(41.8,116.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC9A67").s().p("AglArIBLhbQgFAWgGAOQgTArgkARQgGgCgDgDg");
	this.shape_10.setTransform(23.8,92.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AhjBTIg5grQgigYgggJQAJgPAggzQAagqAMgdQAQAIAdATIAlAnIBIAcIAGADQAdAQAcALQBMAdBCgDIAFgBQAFAJgMAcQgNAfAHAYIgEAAQgkAEgQgjQgKgXABgmQgaAPgZAkIgjA1IgFAHIgNABQhJAAhBgwg");
	this.shape_11.setTransform(43.2,101.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABUDkQAaAGgGgaQgeASgfgBQgnAAgEgkQABgEAQgMQALgJgDgPIhUAHQhCAFgggMQgGAHAGAHIAQAOQALAKgBAHQAAAHgJAFIgFAAIAAgDQgBgFAFgJQAHgMgXgCQgIAAABANIABAPIgHgCQAGgQgPgDQgRgEAAgJQASgBAIAHQABgEgBgaQgBgTAIgDQAXATAnAGQAmAFAngJQBagWAFhHQg9gCg5gnIgughQgbgTgXgKQgOAUAMAkQAMAogEAHQgXgYg7ADQhBAIgXAAQATAoAGAeQAFAdgDAqIgBACIgMgCIACgMQADgYgFgeQgDgQgRhBQALgGACgHQAdAKArgFQAtgGAaAHQAEgEgGghQgFgdAOgLQgJgXgrgDQgEgNAIgGIAPgHQgCgHgMgIIgFgEIAKgNQADADAGADQAlgRATgtQAGgOAFgVIAEgFIARgDIAkAnQgdgSgQgIQgMAdgaApQggAzgJAQQAhAKAiAYIA4ArQBGAzBRgFIAFgHIAkg0QAYglAagOQgBAlALAYQAPAiAlgEIADAAQgHgXANgfQAMgcgFgJIgEAAQhDADhLgdQgdgMgdgPIgGgEIBFAaIAFAHIAcADQA6AUAugDIARgCIgKAYQgEAOgBAOQgCAYAGAWQAFAXAOASQALATAQAPQAPAOARAIIAPAMQgjgLgcgeQgPgQgegvQAAAFgDACQgDACgGgCIgOgHIAAAUIhHAWIgUAEQgfAHgVgHQgLAZgYAhQgQAgALAvQALAAAlgFQAcgEAXACQgEgyAXgIIACAOQACAHAJgCQARgHAfAAQASAAAnABQARABANgCIAQgCQAdgGAJgQIAJAGIgEAOIgOAGQgRAFgWADQgTACgWABQhrADgTAEQgDANAJAKQAKAKgDANQgLAKgXADIgOACQgQAAgIgIgAB8DXQgHABAAAFIAMgBQAHgBABgEIgNAAgAAUDTQAHAMAFgPQgGAAgBgJQgCgKgEAAQgFAKAGAMgAB7AKQgLASgKALQgNAQgLADQASAHAagEIAVgEIBBgTQgDgOgOgaQgNgZgCgTQgYALgdAtgAgnDZQgqgLgRACQAHgEAIgCQAOgCATAFIAaAJIASAHQAAABAAAAQgBAAAAABQAAAAgBAAQgBAAgBAAQgHAAgWgGgAkDC5IAjAFQAjAFATAGIhZgQgABUBpQABgEAEgCQAFgCABAEQACAFgGAKQgIgFABgGgAlNAEQAMgMAOACQgBADgPAIQgMAHACANQgMgHAMgOgAlpgKQAKgMAMACIgMAMQgHAHgBAGQgMgEAKgLg");
	this.shape_12.setTransform(39.3,110.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCFF").s().p("AATBsQgSAAgQgGIgQgGIgBAAQgcgYgZgaIgCgCIgEgFIgCgDQgIgRgFgSQgHgfAGgbQADgJAEgIIABgCQASgjAqgIQAZgFATACQALABAKADQAbAwAYAyQATAmAPAoIhcBQIAAgegAgdgkQgGAKAEAQQAFARANAEIAFgDQAJgGAFgGQAMgRgSgUIgaAAIgDAFgAgUgIIAAgTIAUAAQAAAEgBADIgBADQgEAGAAADgAAAiEIAPgFIAHAMQgLgFgLgCg");
	this.shape_13.setTransform(76.5,112.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC97").s().p("ACqCXIg2gQQgfgIgSACQgJAAAAgHIACgPQgYACgKAyQgVgIgcgEQgkgEgLgDQABgwAYgbQAggaAQgVQAYAPAvgBIBKgDIAFgSIAMAKQAKAGADgJIACADIAAACIABACQAGgCAIAAIAIAAIBAACIgDAAIAjAAIACADQAZAaAcAXQgDAOgCADQgKAPgvAZIgTAKIAAABQgKAMgQAAIgEAAQgJADgMAAQgVAAgfgJgAAHAwQgFAAgCAFQgBAFAFAHQAIgIAAgGQAAgDgEAAIgBAAgAFyBZIAAAAIAAAAIADABIgBABIgCgCgAk/A3IghgOIgUgKQAPgoADgeQACgegIgsQAWAGBBAJQA5AMAQAeQAGgHgBgpQgCgnASgQQAUAQAWAaIAkAsQAtA1A5ASQgVBChfgDQgngBgjgPQglgPgRgYQgJAAgEATQgFAZgCAEQgGgJgSgEQgCAJAPAIQAOAHgKAOQgRgLgggNgAEMh6IgLgDQgMgRAwgDQAZgBAZgCIgFADQgfAVgOAFQgHgDgSAAg");
	this.shape_14.setTransform(37.8,114.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("ACNCfIgFgCQgmgFgGgnQgDgYAJghIgHgCQgZAJgdAZIg2AwQhPgRg3hEIgsg4QgQgTgQgOIgXgQQAzgqArgyIARgUIAmAlIAOAXQAVAgAgAXIAVAPIADADIABAAIASgBQAPAAACADIAAABQAAACgHABIBFAhIAHACIABACIANABQAfAIAsAHQAtAHAOABIgHASQAAAPgDAEIgCACIgBAHQgBAXAFAYQAFAUAMAQQghgDgmAFIgVACQgSAAAAgIg");
	this.shape_15.setTransform(42,99.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AABEAQgagDgIgNQAXAMABgaQghAKgfgJQglgLAFgkQADgDASgIQANgFABgPIhTgQQhCgNgbgTQgIAFAEAJIAMARQAPAWgWAHIgFgCQAAgGAJgKQAJgJgVgIQgIgCgCANIgDAOIgGgDQAJgOgNgHQgQgIADgJQASAEAFAJQACgEAFgZQAEgTAJgBQASAZAkAPQAjAPAoABQBeADAXhDQg7gSgtg0IgkgsQgVgagUgQQgSAQABAnQACAogGAHQgQgdg6gMQhAgKgWgFQAIAsgDAdQgCAegPApIgMgGQANgZAEgmQABgQABhDQANgDADgGQAZASArAGQAtAFAYAPQAEgEADgiQADgdARgIQgCgNgNgKIgdgPIADgLIAXgJIgEgKQASgJARgMQAqgfAcgsIARACIAZAvIglglIgSAVQgqAygzAqIAWAQQARAOAQATIArA4QA3BEBOAQIA3gvQAdgYAZgJIAHACQgJAgAEAYQAGAnAmAFIAEACQABALAmgFQAngFAgADQgMgQgEgVQgGgXACgYIAAgGIACgCQADgDAAgQIAHgSQgOgBgsgHQgtgHgfgHIgMgCIgCgCIgHgCIhEghQAHgBAAgCIgBgBQAOAEBCAdQANAEAGAEIBBAGQAHABASAEIAMACQASABAHACQAOgFAegUIAFgDQAegDAdgFIAAAAIgPAFQALADALAEIAEAHQgJgCgLgBQgVgCgZAEQgqAJgSAiIgBACQgEAJgCAJQgHAZAIAgQAEATAJAQIACAEIAEAEIgjAAIACgBIhAgBIgHgBQgIAAgHACIAAgCIgBgBIgBgEQgDAKgKgGIgMgKIgFASIhLADQguABgZgPQgPAVghAaQgYAbAAAwQALACAkAFQAbAEAVAIQAKgyAYgCIgCAPQABAHAJAAQASgCAeAIIA3AQQAwANAYgHIAEAAQAQAAAKgNIAAAAIATgKQAwgaAKgPQACgCADgOIAAAAIARAHQAQAFASABIABAdIgBABIgLAAIgCgRQgGAFgJAEIAEgPIgJgGIAAgBIgDgBIAAAAIAAAAIgEANQgJAPgtAbQgrAagMAAIgEAAQghAEg5gNQhogZgUgBQgGAMAGAMQAIAMgHAMQgKAFgPAAIgLgBgAAADyIALACQAHABACgEIgMgDIgCAAQgFAAgBAEgAhaDPQADANAIgNQgFgBABgKQABgJgEgCQgHAJADANgAA8AnQglAjgTAAQAWAQApAAIBEgBQAAgPgGgeQgGgbACgSQgZAEgoAkgAiWDFQgmgVgRgDQAUgGAbAPIAmAcQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgGAAgXgOgAljBtIAhAPQAgANASALIhTgngAgBB5QABgEAEgBQAGAAgBAEQABAFgJAJQgFgHADgGgAFgAnQgEgQAGgKIADgEIAbAAQASAUgMAQQgFAHgJAGIgGADQgNgEgFgSgAFsApIANAAQAAgDAEgGIACgCQABgEAAgEIgUAAgAl7hUQAPgJANAFQgCADgRAFQgNAEgCANQgJgKAPgLgAmShqQANgIAKAFIgOAIQgIAFgEAHQgKgIANgJgAAchvIgCgCIADACIAAAAIgBAAg");
	this.shape_16.setTransform(38.1,107.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},8).wait(11));

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8B5E30").s().p("AhkAlQgBgmgCgKQAQAKAKgUQAMgaAIgEQBIgUBZAIQAAABgEAGQgIgDgYAAQgWAAgGAEQgDAGgEACQgEACgOgBQgMgBgGAJQgFAPgHAIQgEAEgjAGQgcAEAAAaIAAAFIgCgDQgEAJAHAPQAGAMgJADQgQgGAAgXg");
	this.shape_17.setTransform(74.5,39.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("AAYFeIglgoIAdATQAyAfAeARgAhAATQgdgFgYgSIgDgKQgPgyAAgVQABgVAGgMIAEgHIARgOQARgIAnAHIBHAMQAsAEAigQQATA8gcAnQgRAWgvAjQgGgKADgXQAEgZgHgNQgHAJgBAdQAAAegFAJQgKACgNAAQgVAAgagFgAh1j0IAHgGQAJgGAKgDQAIgBAHgDQA7gTAFg+IAAgDIgCgJIABAAIAFAAIAIAJIABABIACACQAsAbAxgQIACgKIgBgNQgDgYAQAFQgKATAKANIAUAOIgHAJIANAAIgHAMIADBCIAAAAIgMAPIgrgDQglgEg4gCQg5gDggAbg");
	this.shape_18.setTransform(34.7,59.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgfB1IgJgJIgFgBIgCgBQgBgFgCAAIgDgHQALgBAEgLQABANAHAXIAAAAIgBgBgABjBVQgHgEgHABQAAgIANgFQANgFAAgJQAHAHgCAJQgBAGgEALIgBAAQgFAAgGgDgAh1AKQAGABAOgLQALgKACAIQgNAZgUA7IABABQgHAFgMAAQAngpgVglgAiSA3QASggAFgUQALAagPAaIgPAdIgKAAIgJABQAGgOAJgQgAg9BOIgDABIABgFIAMhHQANATgGAcIgJAeIgFACIgDgEgAhfBRIgJgBQAEgEADgHQAHgQANACQgFAPgMALIgBAAgACOAoQAAgyACgSQAMASgBAfIgDApIgLAJIABgfgAB+A4QgEAAgCgFQgCgHAGgIQAIAKAAAGQAAAEgFAAIgBAAgAhUAxQAJgFADggQACgcATABQgDAKgHAOQgFANAIAOQgKgEgDALQgBAHgGAAIgGgBgAiiAKQABgHAOgKQAMgJgBgMQAMAJgLAQQgJAOgNAAIgFgBgAhogpQANgQAUgKIgnBBQgLgRARgWgAhMgpQATgWAMgEQAOALAggFIA+gLIAAAAIgJAJQg6AGgHAEIgHAFQgLgBgRABQgkAEgCAWIgDABQgGAAARgUgABkhAQADgEACgGQAtAFANApQgQgZgvgLgAhxg1QAQgSAAgDQAJAFgMANQgQASgBADQgIgFAMgNgAgghGQgSgGgOACQgCgMAgACQAhACABAPIgIAAQgLAAgNgDgAB8hKIAAgNIAUAAIAAANgAAphVIgCgJQAGgEAEABIAKADQgBAEgGADQgGACAAAFQgEgBgBgEgAg8hlQATgGAJAHQgEAKgRAAQgVABgKAJQADgOAVgHgAgOhZQgDgDACgEQADgFAEACQAFACADAKIgFABQgGAAgDgDgAAJheQgJgGAAgGQgWAAgEgDQgDgCALgBQAfgFAHARQAAAHgFAAIgGgBgABUhzQAOgFAHAHQgEAGgOACQgSADgDACQADgLAPgEg");
	this.shape_19.setTransform(37.9,13.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC9A67").s().p("Ai4GzQAUgfABgDQALg/AHgdQALgyAXgVQgdhPgDgzQARAAAiAHQAgAFAVAAQgcAfgOA3QgGAYgMBNQgFAggFAYIhMBcQgHgIAIgMgAB2gsQACgzAQgMQgCgGgMgOIABgDIgDgDIABgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgRgSIABhOIgSgVIgGgLIgDgKIAAgFQAGAAAEACIAaAcIAAAGIANAQQAXAeANAlIARAYQARApgMAtQgRBCg/AMQAMgOACg1gAgtg3Qg+gDgegXIABgOIgFgXIAOgFQAcgMAegIIAAgBQBJASBFgHIgOAmQgEANADAOQglANguAAIgUAAgAiji0QACg/AygpQAFACgCAFIgBADIgOAGQAAAFAHAAIAFgCIAAABQAOgCAKgJIAOgHQADAGAFAGIACAAIACAIIgHAeQgGAbgrASQgaALgMAAQgHAAgBgEgAgakDQgTg1ADglQADglAagjIgBgBIACgDQAYgKAcAHQACAAALgIIARgLQAGAGADACQAEAHANACQAYAFADAEQgBAFgDAAIgBgBQAHAWgGAZQgGAagSATQgrAuhBgYQAIARARAAQALABAcgFIAAAgIgOACIgTABQgWAAgWgEgAAwlDQAOACAIgDQAIgEgHgIQgKANgSgJIgYgRQgIAVAlAFgABBljQAJADAIgFQAIgGAHABQABgTgIgLIACAAQASAAAAgHQAAgFgKAAQgNAAAAAGIAAABQgGgGgKgEQADAMgGAHQgJAKgBADQAGABAQgFQAHgCAEANIgIgBQgRAAgBAOgAAamCQACAKAKABIAAgQQgBgJgFgBQgHAHABAIgAAMmiQgCADAGACQAHADAPgEQgIgIgIAAIgBAAQgGAAgDAEgAhLkkIAAABIAAAAIAAgBgABOnFIABgBIAFAAIgDAFIgDgEgAA4nDIABgBIgBABg");
	this.shape_20.setTransform(38.6,51.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC97").s().p("AolHUIgBAAIATADIgSgDgABTGfIAEABIgBABIgDgCgAABDPIABgBIgRgCIhogMIgRgGQgagKgbgOQh0g5gZgfQgZgegHgsQgGgtAFgcQASheBag8QBEgtCDgkIApAXQAdALAOgVQg4ARgCgrQAMgbAoAOQgEgOgJgTIgHgOQAIgBgEgRQACgJABAAIAfgJQApgLADgZQAVAAATgLQAFgCgDgDQACgBAlAAIAJAAQgEAFAHAQQgJABgKADQABACgBASQgBANAIgBQgDgeAqgCQAIAHgFAIIgJARQAKADAGgJQAGgJAKACQAxAOAOAhQALAdgRAlQgPAiggAeQgfAdgfAKQANgBARgJQASgIALgCQCzB0BmB9QgfASgZANQgcAOgVAHQgTgag8gZQgtgSgXgPQgKgHgGgGQAHgkABggQACgygRAHQACBQgGAyQgHA0gPATQgTgfgXgXQgngmgxgLQgUgoghgiQgigkgegIQBLA9AqBGQAsAKAjAdIARARQAZAcAjBBQgoAFgFAPQAagIAOAOQAKAKgEALIgbAAQgKgHgJAAQhWAFhIgtIgMgIQg4gngihAQgsgBghgcQgigmgUgRQAsBVBQAGQATA3A4AmQAPAKAcAOIA1AZIARAIQgRgBgQAEQgPAEgOAJIgFADQglAZgNACgAAIgBQAIgHAWgKQAVgJAIgHQgpADgSAegAF3gzQgIAWAHAIIALgkQAIgYgMgMQAEAPgKAbgAC0lxQgOANgIASQgJARADANQAPggAZgSQAcgVAeAFQgPgNgQAAQgTAAgUASgAB3lIQAMADAFgVQAEgUgIgBQgLAbgCAMgAAPlyQAFAJAIAHQAAgegUgJQACANAFAKgABamOQAIALACAAQADgIAPgDQARgFAEgDQgCgVgLgFQAKAQgjAEQgRABgEADQgIAEAIALQACgIADAAQACAAADADgAD7CTQgFgTgJAAQAMgPATARQASARgRAOIgEABQgLAAgDgPgAEHB6QADgIAJACQAHACAIAIQAHAHAAAHQgCAHgMABQABgOgVgMgAEiB0IgKgHQgEgDAHgEQARgBAEADQABABAAAAQAAAAAAABQAAABAAAAQAAABAAAAIgBABQgFAIgEABIgFgCgAHFBSQgFgKgEgBQgGgDgMAIQAIgSAtgCQAIAIgCAgIgJABQgPAAgIgPgAHqA+QgIgLgKgBIACgEQAHgKAOgCQAOgCAJAMQAAAEgEAIIAAAEQAAACAEABQgBADgGADQgGADAAAEQgHgCgIgMgAIGAYIAgAAQADANgJANQgZgBgBgZg");
	this.shape_21.setTransform(66.5,81.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CCFF").s().p("AgeABIAQgEQAPgDAUABIACAAIAIABQgXAEgUAGIgSgFg");
	this.shape_22.setTransform(79.6,99);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("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");
	this.shape_23.setTransform(67.1,67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(19));

	// Layer 11
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AFsDJQAEgGAEAAQACAAAKAGQAKAHAAABIgBAGQAAACgEAAQgCAAgXgQgADICjIAAgDQgBgFAGAAIAnAAQAlADALANQgBAHgFAAQg5AAgdgPgAFzCdIAFABQASABARgBIAAACIgNAFIgbgIgAIpCVIAAgKIAGgCQAFAAACALIgBAFQABAAgBABQAAAAAAAAQgBAAgBABQgBAAgBAAgABNCKQADgHADAAQAHAAAQAMIAAADQgDAFgCAAQgLAAgNgNgAKuCLIgBgEQAAgDAFgBIAGAFIAAAEQAAACgGAAQgCAAgCgDgADKCHQAAgDAFgBIAFAFIAAAEIgFACIgFgHgALRB4IAEgGQAHgFAOACIALABIABAEQAAAEgFABIgbAFIgFgGgAJ9BfQAFgFABgBIAFAGIgBAFIgEACQgGgGAAgBgANqBEIgBgDQAAgDAVgEIAKABIAAAEQAAAIgaAAIgEgDgAK3BBQAAgDASgHQATgIAIAAIAEACIABADQABAIgTAFIgbAGgAMuAcIAAgDQAAgIAaABIAIABIABAEQAAAIgYAAQgIAAgDgDgAOnAIQgCgCAAgDQABgEAdgGQAcgFAMAAQADAAADAEQgMARg5AAgAk3AAQgggDgNgHIgGgEIA0AOIgBAAIAAAAgARvggQgBgDAGgBIAGAFIgBAEIgFACIgFgHgAQ+gvQAAgEAIgDQADAFACAAIgCAGIgFACIgGgGgAsChzIABgEIAEgBIARAGQgFAHgFAAQgMAAAAgIgAtiiUQAEgDAJAAQAOAAgCAFIgBAFIgLABQgNAAAAgIgAtLicIAAgFIAFgBQAUAAAFAOIgGAFQgLAAgNgNgAr8iUIACABIgBABIgBgCgAujiwIAAgDQAAgFALAAQAMAAAEAGQgEAHgEAAQgMAAgHgFgAvOiyQABgHAFABIAFAGIAAAFIgFACQgFgGgBgBgAvki8QgCgCgBgDQABgCAGgDIAGABIABAEIAAAFQgBABgGAAgAwgjJQADgDAEAAIAcAJIABACQAAAGgJAAQgVAAgGgOgAx4jEIgBgEQAAgCAIgCIAGABIABAEIgBAEQgCACgEAAQgEAAgDgDgAvNjVIgMgDIAQAEIgEgBg");
	this.shape_24.setTransform(193.5,167.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3A3839").s().p("Ah0A5QgCAAgDgKQAGgTAAATQAAAKgBAAIAAAAgABwgSQgEgNgBgZQALASACAOQADANgEACIgBABQgDAAgDgKg");
	this.shape_25.setTransform(108.8,108.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("AC3I1QhrgVgGgBIgKAAIgEgBQg3gUgfAAIgGgCIgBAAQhwgahJgTIgBgBQgKgJgqgJQhIgRgXgLQhLgogngOQhugXghgQIh6gpIABgCIgIgBIgSgFQgEAAgCACIgKgCIgMgDIgCAAIgvgMIhhgdIgmgLQhdgWg3AKQgWgrgDh7IgBgeIgLgBIACgCQhIgbgbgqQgPgZgDgmIAIhBQAlgbA0gEIANABIAjAIQANAFALAJQAfAaASA6QAHAXARBTQANBAAPAaQBfAeBzAaIBUASIAaAGIAAABQAAAOBLAAQAgAAAGgJIAAgPQgCg8gIgOIAAAAQANgMAlgUQAugYAUgOQAQgLBBgZQA0gVAAgMIgBgFIhbgVIABgBIgPgDIgSgEIgBABIgjgHIgjgFIgrgGIgwgGIh3gPQgEgGgBgcQgCgXgMgCIAHAeQADAWgKAHQgHgEgBgVQgCgUgKgBQgBAFAHAXQAFASgLAGQgUALAAgcIAAgRQgBgGgFAHQAIBCgpg1QgCAbgFABQgDACgGgLQgHgLgDABQgDAAgCALIgCABQgBgHgFAAQACAfgPABQgBgUgMgGQADAZgJgBQgIgCgGgQIAAARQAAAJgGABQgEAAgDgGQgDgHgDAAQgDAQgRAKIgJAFQgaANgKgSIgJAUQgGAMgMABQAMg2gsg6QgagjgigTIgRgLIhhADQCHguCngXIBTgTIAtgdQAfgPAcgXIAUgRIAFABIArhNIAGgDIAGgFIAJgIIAUgTIA4gzICTg+QB6gfJWAsQCaAMCYAaQDaAPB8APQB9APBQAVQBeAXAeA5IAkBCQAGAfgKAoQgJAmgZA+QgwBegnBjIgYBBQgfhGhMgLQiPgXiPAdIAAgBIgBgBIgCgBQidAgifAFQhEADhDgEIgrAAIgEAAIgCABIjTCGIgSAAIgFAAIABAFIgHgCQAEAIgEANQgIAXAEALQgLgIAFgUIAGgbIADgBQAEgDACgDQAogVBJgtQBag4AAgFIiKg3QhpgvkNAAQiiBPhKApIgMAAQgNAAgDAXQgBAMABAMQAAAcABAHQADASAPARQABABBwAZQBPAWBPACIgBABIAEABIA+ASQAnAMAaAEQAbAFAygBQA0AAAVADQArAHC2AqIA+AOIBDAOQA0AKAzgCIgHAzQgKBNAIBMIACAYQgVACgzAYQhbgfhqgVgAiMEZQgYgIgmgGIgXgCIBVAQgAvRhQQACAJACABQABAAAAgKQAAgKgBAAQgBAAgDAKgAy7hgQAFATANADQApgWgcgeIgaAAQgKALAFATgAroiSQAEALAEgCQADgCgCgNQgDgPgLgSQABAZAEAOgAHqFSIgSAMQgCgSAAgTQAAgOACgOIAnAGQgzgYgcgyQgMgUgGgXIgFAEQgCggASgcIAMgRIgFgDQBehOBxAzIARAUQAnBjgrA6QgrA7gjAEQgjAFgPAEQBFgBA7gfQAlgSAdgbQgaAIgZAQIgRALQARgTAIgXIAJggIAAgCQAFgigJghQgDgXAAgTIgwgzQD7hDCpAyQBSAZgGBrQjNAKi9BIIGIhBIgKB1IgIAAIAJBRQj4A4jxBSQhQAahQAdQglh3A+hsgAIRCDQgSAVAAAcIALgBQAlgMgPgngAEhFGIg+gJQiDgVhRgZQgJgRACgeIAFgiIACAAIgCACIAEABIAEgDQCrAEAqATIAAAAQhEgLgqgGIAnAIQAwALAoAGIAKAFQAKADASACQBagGBMAuIAKAHIgNBIgAilD8QgfgGhLgSIgBABIgkgDIgxgGQgsgDgNgFQgGgFgGgCIgmgNQgSgHgmgEQgegEgIgZQgDgIAAgcQgGgKAGgKQAOgUBCAAQAcAAA7AaIBBAcIEyAtQgFAHADALIAHgDQAAA1AHAcQhJgChRgRgAFlDcQgigBgigEIgWABQgqgHgrgKQg9gQhVgBIBlg5QAPgIAigcQAhgPAGgEIAGgIIAGgEQAIgGABgFQAPADAcABIBpACIgCAIIBNAAQgtAdgKAZQgMAggBAmIARAhQgaACgZAAIgKAAgAqLCtQgUgCgLAAIACgEIgegGIhJgQIg9gOQhwgahDgeQgSgkAFg2QBQAdCCAfICdAjIA/APIAAAEQAAAmAJAVIAAAPgAk5B9QgogSgigNQg6gWhSgDIB8hBQBhgwAhAAQDYAABwAoQA3ATBXAiQh2BJhPAwQisgQiNgdgAqdBOQgTgEgYgGQhQgYgjgIQhIgQiCgqQBqhSDBACQAtAAA1AGQBPAIBgATQAQAIAeAHQAaAGAfAFIAAACQgaATh0AuQhJAdgVAZQgIADgHABIgPABQgUAAgdgFgAy7ALIgNgLIAYAPIgLgEgAyvhdIAAgUIATAAQABAGgDAFQgEAFAAAEg");
	this.shape_26.setTransform(194.5,121);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("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");
	this.shape_27.setTransform(195,120.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("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");
	this.shape_28.setTransform(195,120.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CCFF").s().p("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");
	this.shape_29.setTransform(194.5,120.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AFrJsIACgEQhAgRiCgXIgkgKQgCAFgOAAQgNAAgCgEIAAgDQAAgFACgBIhagZIiKgeIAQADIg2gNIg+gPQhcgVgMgBQgggEgNgGQgNgJgOgGIg6gaQgpgSgYgFQghgGhygmQhZgegXgNQgJgBgJgEIgFgCQgXgCgegKQhRgcgNgCIgmgDQgLgCgIgEQgIgEgGgGQhQgGhSgKIADgMIAVACQgFgMgMgIIAAgBIADgOIAIACQAAgXgDgdIABgfIgFAAIgFgmIgBgQIgEACIgBgNQgGgBgQgJIgYgPIgCgBQgogcgJgNQgRgYgEgVIgBgHQgBgWADgWQAFgjAUgbIAAgGIAlgOQCAgxCJgRIAAgFIACAEQA+AABNgxQBOgwApg6IAsg7IABgBQAbgZAfgVQBJgjBMgYIAbgIIANgFIAMgDIgFACQAogFBJgHQCXgCCWALIFDAcQCyAVCwALQCvALDHAkQDHAjAbBJQAbBIgBAWQgBAWgaBCIgWA5QhHCfgtCnIADAHQgbBnAPBtIAMgBIAIACIABADQAAAJgeAAQgMAAgDgDQhyAUhuAjQgGAHgHADIg5AQIAAABIgBAGIgKABQgGAAgDgCQhwAfhyAdQgOAKgEAQIgCAHIg3ACQgkAIgHAcIgMAEIgVADQgPACgDAJIgIADQAJAFAIAIQgEAHgEAAQgegPgEgEgAgjIEQAgABA2ATIAEABIAKABQAGAABrAVQBqAVBbAgQAzgZAVgBIgCgYIgBgFIgKAHIgFgHQAAgEAKgHIAEgCQgFhDAJhEIAHgzQgzABg0gJIhDgPIg+gNQi2grgqgGQgWgEg0ABQgyAAgbgEQgagFgngLIg+gTIgEgBIABgBQhPgBhPgXQhwgYgBgBQgPgSgDgRQgBgHAAgcQgBgNABgLQADgXANAAIAMAAQBKgpCihQQENAABpAvICKA3QAAAGhaA3QhJAugoAVQgBADgFACIgDABIgGAcQgFAUALAHQgEgLAIgWQAFgOgFgHIAHABIgBgFIAFABIASAAIDTiHIACgBIAEAAIArAAQBDAEBEgCQCfgGCdgfIACAAIABABIAAACQCPgdCPAXQBMAKAfBHIAYhCQAnhjAwhdQAZg/AJglQAKgogGgfIgkhDQgeg5hegXQhQgVh9gPQh8gOjagQQiYgaiagLQpWgsh6AfIiTA9Ig4A0IgUASIgJAIIgGAGIgGADIgrBMIgFgBIgUARQgcAXgfAQIgtAcIhTAUQinAWiHAuIBhgCIARAKQAiATAaAjQAsA6gMA2QAMgBAGgLIAJgVQAKASAagMIAJgFQARgLADgQQADABADAGQADAGAEAAQAGgBAAgJIAAgQQAGAQAIABQAJACgDgZQAMAFABAVQAPgBgCggQAFABABAGIABAMIABgNQACgKADgBQADAAAHALQAGAKADgBQAEgCADgaQApA1gIhCQAFgHABAFIAAARQAAAcAUgKQALgHgFgRQgHgXABgGQAKACACATQABAWAHADQAKgGgDgWIgHgfQAMADACAWQABAdAEAFIB3APIAwAGIArAGIAjAGIAjAGIABAAIASAEIAPADIgBAAIBbAWIABAEQAAANg0AUQhBAZgQALQgUAOguAZQglATgNANIAAgBQAIAPACA8IAAAOQgGAJggAAQhLAAAAgNIAAgCIgagFIhUgTQhzgahfgeQgPgagNg/QgRhUgHgXQgSg6gfgZQgLgJgNgGIgjgIIAFgCIgSACQg0AEglAbIgIBAQADAmAPAZQAbAqBIAbIgCADIALABIABAdQADB7AWAsQA3gLBdAXIAmAKIBhAdIAvAMIACAAIAMAEIAKABQACgCAEAAIASAGIAIAAIgCACIABAAIB6AqQAhAQBuAXQAnAOBLAnQAXALBIARQAqAKAKAIIABABQBJATBwAaIAFACIgEgBIAGABgAHXIIQAAANgOAOIACAIQADgIAWgHIAIABIACAEQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQBBgXBAgWQDxhSD4g3IgJhSIAIAAIAKh0ImIBAQC9hIDNgJQAGhrhSgZQipgzj7BDIAwAzQAAATADAYQAJAhgFAiIgBABIABAAIgJAhQgIAXgRASIARgLQAZgPAagIQgdAbglASQg7AehFABQAPgDAjgFQAjgFArg6QArg7gnhjIgRgTQhxg0heBOIAFADIgMASQgSAcACAgIAFgEQAGAXAMAUQAcAyAzAYIgngHQgCAOAAAPQAAASACATIASgMQg3BgAXBpIABgBQAHgTAEgBQAGAGAAABgAADDaQgCAeAJASQBRAZCDAUIA+AKICjAYIANhJIgKgGQhMguhaAFQgSgBgKgDIgKgFQgogHgwgKIgngJQAqAGBEAMIAAAAQgqgTirgEIgEADIgEgCIACgBIgCAAIgFAhgAgQEKQgHgcAAg2IgHAEQgDgLAFgIIkygtIhBgcQg7gZgcAAQhCAAgOATQgGAKAGALQAAAbADAIQAIAZAeAEQAmAFASAGIAmANQAGACAGAFQANAFAsADIAxAGIAkAEIABgCQBLATAfAGQBRAQBJADIAAAAgAFgDWQAeABAfgDIgRghQABglAMghQAKgZAtgcIhNAAIACgIIhpgDQgcgBgPgCQgBAEgIAHIgGAEIgGAIQgGAEghAPQgiAbgPAJIhlA4QBVACA9APQArALAqAHIAWgCQAiAEAiABgAqQCoIA2AAIAAgPQgJgVAAgmIAAgFIg/gOIidgkQiCgehQgeQgFA3ASAkQBDAeBwAaIA9ANIBJAQIAeAHIgCAEIACAAQALAAASACgAmYAAIh8A/QBSADA6AWQAiAOAoASQCNAdCtAPQBOgvB2hJQhXgig3gTQhwgpjYAAQghAAhhAygAwKgbQCCAqBIAQQAjAIBQAXQAYAHATADQAoAIAYgDQAHgBAIgDQAVgaBJgdQB0guAagTIAAgCQgfgFgagGQgegHgQgHQhggThPgJQg1gFgtgBIgLAAQi5AAhnBRgAtrk3IgBAAIAHgDgADaJXIgBgDQAAgDAJgCIAHABIABAEQAAAGgIAAQgFAAgDgDgAFxJEIgEgKQAAgKAIACQAIAIAEAQQgCAEgDAAQgGAAgFgKgAEoI3QgGgKAAgCIABgFIAFgBQACAAATAYQgFAGgEAAQgGAAgGgMgAADI4IAAgEQAAgHAQAAQAPAAAAAFQAAAJgZAAQgDAAgDgDgAAtIyQAAgFAbAAQAcAAAAAFQAAAGgcAAQgbAAAAgGgAFIIDIAAgDQAAgDAHgCIAHABIABAEQAAAGgIAAQgEAAgDgDgAF2HyQAAgJAGAAQAHAAgCAJIAAAIIgFADQgGgGAAgFgAkJHsIhJgDQgCgCgOgDIAAgEQAAgEAFAAIA0ACQA1AEALAJQgDAHgCAAIgbgGgAo7GfIgngNIgBgDQAAgFAJAAQANAABGAYQgEAHgFAAQgOAAgdgKgAOoGKQAAgIAOgMQAQgOAQgEIAGABIABAEQgTAWgdARgAPsF2IgCgFQAAgGAQgCIAHABIABAEQAAADgGAFQgGAEgCAAQgGAAgCgEgAshFcQADgDAIAAQASAAAEAJQgEAHgDAAIgHABQgPAAgEgOgAsMExIALgEIgKAJIgBgFgAvQEZIgFgCQgUABgDgLQADgDALAAIAFAAIACAAQAJAAAJAFQAHAFAAACIAAAFQAAACgFAAQgDAAgKgEgAjmEEIAXACQAmAFAYAIIhVgPgAx8DxIgBgEQAAgDAGgCQADABACAEQAAADgBACQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgFgCgAIMB9IAPgCQAPAmglAMIgLACQAAgdASgVgAyvBXIABAAIgCAAgAzAhlQgFgTAKgMIAaAAQAcAegpAXQgNgEgFgSgAy0hjIANAAQAAgDAEgGQADgFgBgFIgTAAg");
	this.shape_30.setTransform(195,121);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3A3839").s().p("Ah1A4QgBgBgDgJQAGgTAAATQAAAKgCAAIAAAAgABxgQQgFgOAAgZQAKASADAPQACANgDACIgBABQgDAAgDgKg");
	this.shape_31.setTransform(109,107);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CCFF").s().p("ACsI3QhqgXgHAAIgJgBIgEgBQg2gUgggBIgGgCIgBAAQhwgchIgUIgBgBQgKgJgqgKQhHgSgYgLQhKgogngPQhugYgggRIh6grIABgCIgIAAIgRgGQgFAAgCACIgJgCIgNgEIgCABIgvgNIhggfIgmgKQhdgYg3AJQgVgrgCh7IAAgeIgLgBIACgCQhHgdgbgqQgPgZgCgmIAJhAQAlgbA0gDIANAAIAjAJQANAGALAJQAeAZASA7QAGAXAQBUQAMBAAPAaQBfAfByAcIBUATIAaAGIAAABQAAAOBLABQAgAAAGgJIAAgOQgBg8gIgPIAAABQANgNAmgTQAtgYAVgNQAQgLBCgYQA0gUAAgMIgBgFIhagWIAAgBIgPgDIgSgFIgBABIgigHIgjgGIgrgHIgxgGIh2gRQgEgGgBgcQgBgXgNgCIAHAfQADAVgLAHQgGgEgBgVQgBgUgKgBQgBAFAGAXQAFASgLAGQgUALAAgcIAAgRQgBgGgFAHQAIBCgpg1QgDAagFACQgDABgGgLQgGgLgDABQgDAAgCALIgCABQgBgHgFgBQACAggPABQgCgVgLgFQADAYgJgBQgJgCgFgQIgBARQAAAIgGACQgEAAgDgGQgDgHgDgBQgDAQgRALIgJAFQgaAMgKgSIgJAUQgGALgMABQANg2grg6QgagjgigUIgRgLIhhACQCIgtCngUIBUgSIAsgcQAggPAcgXIAVgRIAFABIAshMIAFgCIAHgGIAJgIIAUgSIA4gyICVg8QB6gdJVAzQCaAOCYAcQDZASB8ARQB9AQBPAWQBeAZAdA5IAkBDQAFAfgKAoQgKAlgaA+QgxBdgoBjIgZBBQgehHhMgMQiPgZiPAcIAAgCIgBgBIgCAAQidAdifADQhFAChCgFIgsgBIgEAAIgBABIjVCEIgSAAIgFgBIAAAFIgGgBQAEAHgFAOQgIAWAEALQgLgIAFgUIAHgbIADgBQAFgCABgDQAogVBKgsQBag3AAgFIiJg5QhogwkNgEQijBNhLAoIgMAAQgNAAgDAXQgBAMAAAMQAAAcACAHQACASAPARQABABBvAaQBPAYBPACIgBABIAEABIA+AUQAnAMAaAFQAaAFAyAAQA0AAAWAEQAqAHC2AtIA+AOIBDAPQAzALAzgBIgIAzQgLBMAHBNIACAYQgVABgzAYQhbghhqgWgAiSEWQgZgIgmgGIgWgCIBVAQgAvTheQADAKABAAQACAAAAgKQAAgJgCAAQgBAAgDAJgAy8hwQAEASANAEQAqgWgcgeIgagBQgKAMAFATgAroicQADALAEgCQADgDgCgMQgDgPgKgSQAAAZAFAOgAHjFYIgTAMQgBgTAAgSQAAgPACgOIAnAHQgzgYgbgzQgMgUgFgXIgFAEQgBggASgcIAMgRIgFgDQBfhNBwA1IARAUQAmBjgsA6QgsA6gjAFQgjAEgPADQBFAAA8geQAlgRAdgbQgaAIgaAPIgQALQAQgTAJgWIAJggIAAgCQAFgigIghQgDgYABgTIgwgzQD9hACoA1QBRAagHBrQjNAGi+BGIGIg7IgLB0IgIAAIAIBSQj4A0jzBOQhQAahQAcQgkh4BAhrgAIMCJQgSAVgBAcIALgBQAmgLgPgngAEaFKIg+gLQiDgWhRgaQgIgSACgeIAFghIADAAIgDABIAEACIAFgDQCqAGAqAUIAAAAIhtgTIAmAJQAxALAnAHIAKAFQAKADASACQBagEBMAvIAJAGIgOBJgAirD6QgfgHhLgTIgBABIgkgEIgxgHQgrgDgNgFQgHgGgGgCIglgNQgSgHgmgFQgegEgIgZQgCgIAAgcQgGgLAGgJQAOgUBCABQAcAAA7AbIBBAdIExAxQgFAHACALIAIgDQgBA1AHAdQhJgEhRgRgAFfDgQgigCghgEIgXABQgqgHgrgLQg8gRhVgCIBmg4QAPgIAigbQAhgPAGgDIAHgIIAGgEQAHgHABgEQAQACAcACIBpAEIgCAIIBMABQgtAcgKAZQgNAggCAmIARAhQgWABgVAAIgSAAgAk+B4QgngSgigOQg5gXhSgEIB8g+QBigwAhABQDYACBvAqQA3AUBXAjQh3BIhQAuQisgSiNgfgAqQCkQgUgDgLABIACgEIgegHIhJgRIg8gOQhwgchDgfQgRgkAFg2QBQAeCCAgICcAmIA/APIAAAFQgBAlAJAWIAAAPgAqgBEQgUgEgYgGQhQgZgigIQhIgSiCgrQBshRDBAFQAtABA1AGQBOAJBgAVQAQAHAeAIQAaAGAfAFIAAACQgbATh0AtQhKAcgVAZQgIADgHABIgNAAQgUAAgegGgAy+gFIgNgLIAYAQIgLgFgAyxhuIAAgTIAUAAQABAFgEAFQgEAGAAADg");
	this.shape_32.setTransform(194.8,121);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("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");
	this.shape_33.setTransform(195.3,120.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00CCFF").s().p("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");
	this.shape_34.setTransform(194.5,120.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AGGJtIgEABIABAEQgDAEgDAAQgEAAgHgKQg+gRiCgXIACABQgDAHgDAAQgRAAgLgGIgWgMIAAgFIhsgeIiKgdIAQADIg2gNIg0gNIAEADQAUAMAEAKQgBADgFAAQgtgZgEgDIAAgGQhMgSgLgBQgggDgNgHQgNgIgOgGIg6gbQgpgSgYgEQghgHhygmIgwgRIABAEQgBACgFAAQgNAAgbgNIgBgEQAAgEADgBIgVgJQgJgCgJgDIgFgCQgXgCgegKQhRgcgNgCIgFgBQgDACgHAAQgNAAgCgCIABgCIgJgBQgLgBgIgFQgIgEgGgGQhQgGhSgKIADgLIAVABQgFgLgMgJIAAAAIADgPIAIACQAAgXgDgdIABgeIgFAAIgFgmIgBgRIgEADIgBgNQgGgBgQgKIgYgPIgCgBQgogbgJgNQgRgYgEgVIgBgHQgBgXADgWQAFgjAUgbIAAgFIAlgOQCAgxCJgSIAAgEIACAEQA+AABNgxQBOgxApg5IAsg8IABAAQAbgZAfgWQBJgjBMgYIAbgIIANgEIAMgDIgFACQAogGBJgGQCXgCCWAKIFDAdQCyAUCwALQCvALDHAkQDHAkAbBIQAbBIgBAWQgBAWgaBCIgWA5QhHCggtCnIADAGQgcBqARBwQgxAIgwALIgIADIgBgBIg7AOQAJAEAIAHQgEAHgDAAQgGAAgLgEQgHgDgQgDIgdAIIAdgCIAFAFQAAAFgZAEQglAFgKADIgBgCIhjAdQgEAEgTAMIgTAKIABAEQgBACgFAAQgGAAgHgHIABgHIAGgBIAEAAIAHgGIihArQgJAGgFAJIAEAEIgHAEIgBACIgCAHIgQABIghASQgFgFAAgDQAAgEAHgFIgIAAQgkAIgHAcIgMAFIgVADQgJABgFADIAfARIABACQAAAFgGABIgkgQgAgjIHQAgAAA2AUIAEABIAKAAQAGAABrAWQBkAUBXAdIABgBQgUgLgMgJIAAgFIAFgBQAGAAAtAXQAngRASgCIgCgRQgTgEgEABQgGgFAAgCQAAgGAJAAIATAGQgHhLAKhLIAHgzQgzACg0gKIhDgOIg+gOQi2gqgqgHQgWgDg0AAQgyABgbgFQgagEgngMIg+gSIgEgBIABgBQhPgChPgWQhwgZgBgBQgPgRgDgSQgBgHAAgcQgBgMABgMQADgXANAAIAMAAQBKgpCihPQENAABpAvICKA3QAAAFhaA4QhJAtgoAVQgBADgFADIgDABIgGAbQgFAUALAIQgEgLAIgXQAFgNgFgIIAHACIgBgFIAFAAIASAAIDTiGIACgBIAEAAIArAAQBDAEBEgDQCfgFCdggIACABIABABIAAABQCPgdCPAXQBMALAfBGIAYhBQAnhjAwheQAZg+AJgmQAKgogGgfIgkhCQgeg5hegXQhQgVh9gPQh8gPjagPQiYgaiagMQpWgsh6AfIiTA+Ig4AzIgUATIgJAIIgGAFIgGADIgrBNIgFgBIgUARQgcAXgfAPIgtAdIhTATQinAWiHAvIBhgDIARALQAiATAaAjQAsA6gMA2QAMgBAGgMIAJgUQAKASAagNIAJgFQARgKADgQQADAAADAHQADAGAEAAQAGgCAAgIIAAgRQAGAQAIACQAJABgDgZQAMAGABAUQAPgBgCgfQAFAAABAHIABAMIABgNQACgLADAAQADgBAHALQAGALADgCQAEgBADgbQApA1gIhCQAFgHABAGIAAARQAAAcAUgLQALgGgFgSQgHgXABgFQAKABACAUQABAVAHAEQAKgHgDgWIgHgeQAMACACAXQABAcAEAGIB3APIAwAGIArAGIAjAFIAjAHIABgBIASAEIAPADIgBABIBbAVIABAFQAAAMg0AVQhBAZgQALQgUAOguAYQglAUgNAMIAAAAQAIAOACA8IAAAPQgGAJggAAQhLAAAAgOIAAgBIgagGIhUgSQhzgahfgeQgPgagNhAQgRhTgHgXQgSg7gfgZQgLgJgNgFIgjgIIAFgCIgSABQg0AEglAbIgIBBQADAlAPAaQAbAqBIAbIgCACIALABIABAeQADB7AWArQA3gKBdAWIADABQADgLANgEQAFAGAAAFQAAAEgDAFIAEABIAJgFQAGAFABAEIBeAdIAvAMIACAAIAMADIAKACQACgCAEAAIASAFIAIABIgCABIABABIB6ApQAhAQBuAXQAnAOBLAoQAXALBIARQAqAJAKAJIABABQBJATBwAaIAFACIgEgCIAGACgAHMIyQBQgdBQgaQBtglBvggIgEgEIABgEIAFgBQAGAAABAGIA+gRQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgHAbAAIAOABIBMgTIANgMIAIgOQAFAGAAACQAAAHgDAFIA8gOIgJhRIAIAAIAKh1ImIBBQC9hIDNgKQAGhrhSgZQipgyj7BDIAwAzQAAATADAXQAJAhgFAiIgBABIABABIgJAgQgIAXgRATIARgLQAZgQAagIQgdAbglASQg7AfhFABQAPgEAjgFQAjgEArg7QArg6gnhjIgRgUQhxgzheBOIAFADIgMARQgSAcACAgIAFgEQAGAXAMAUQAcAyAzAYIgngGQgCAOAAAOQAAATACASIASgMQg+BsAlB3gAADDdQgCAdAJASQBRAZCDAVIA+AJICjAYIANhIIgKgHQhMguhaAGQgSgCgKgDIgKgFQgogHgwgKIgngIQAqAGBEALIAAAAQgqgTirgEIgEADIgEgBIACgCIgCAAIgFAigAgQEMQgHgcAAg1IgHADQgDgLAFgHIkygtIhBgcQg7gagcAAQhCAAgOAUQgGAKAGAKQAAAcADAIQAIAZAeAEQAmAEASAHIAmANQAGACAGAFQANAFAsADIAxAGIAkADIABgBQBLASAfAGQBRARBJACIAAAAgAFgDZQAeAAAfgCIgRghQABgmAMggQAKgZAtgdIhNAAIACgIIhpgCQgcgBgPgDQgBAEgIAHIgGAEIgGAIQgGAEghAPQgiAcgPAIIhlA5QBVABA9AQQArAKAqAHIAWgBQAiAEAiABgAqQCqIA2AAIAAgPQgJgVAAgmIAAgEIg/gPIidgjQiCgfhQgdQgFA2ASAkQBDAeBwAaIA9AOIBJAQIAeAGIgCAEIACAAQALAAASACgAmYABIh8BBQBSADA6AWQAiANAoASQCNAdCtAQQBOgwB2hJQhXgig3gTQhwgojYAAQghAAhhAwgAwKgZQCCAqBIAQQAjAIBQAYQAYAGATAEQAoAHAYgDQAHgBAIgDQAVgZBJgdQB0guAagTIAAgCQgfgFgagGQgegHgQgIQhggThPgIQg1gGgtAAIgLAAQi5AAhnBQgAtrk1IgBABIAHgDgAJPIfIgBgDQAAgDAOgIQAQgKANAAQACAAADADIABADQgFAAgXANQgMAIgCAAQgDAAgDgDgAngGjIAAgFIAFgBQACAAAHAEQAIAFABADQAAAGgFAAQgSAAAAgMgAMYGDQAAgJARgHIAFAFQAAADgEAEIgDADQgGAGgDABgAMqF/QAFgBAAgGQAFABABALIgGADQgFgFAAgDgAQdFkIgBgEQAAgCAIgCIAHABIABAEQAAAGgIAAQgEAAgDgDgAQnFPIABgHIAFgBQAJAAAGAJQgEAHgDAAIgOgIgAsME0IALgEIgKAIIgBgEgAw+ElIgBgDQAAgHApAAQADAAADAEQgBAJgZAAQgRAAgDgDgAuzEgQAAgFAOAAQAOAAAAAFQAAAGgOAAQgOAAAAgGgAjmEGIAXACQAmAFAYAJIhVgQgAykDhIAGgDQAFABAAAEIAAACQgCADgDABQgEgEgCgEgAIMCAIAPgDQAPAnglAMIgLABQAAgcASgVgAyvBZIABABIgCAAgAzAhjQgFgTAKgLIAaAAQAcAegpAWQgNgDgFgTgAy0hgIANAAQAAgEAEgFQADgFgBgGIgTAAg");
	this.shape_35.setTransform(195,121.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3A3839").s().p("AhzA7QgCAAgDgJQAGgUAAAUQAAAJgBAAIAAAAgABwgUQgFgNgBgZQALARADAPQACANgDACIgBABQgDAAgDgKg");
	this.shape_36.setTransform(108.6,109.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CCFF").s().p("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");
	this.shape_37.setTransform(194.1,120.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("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");
	this.shape_38.setTransform(194.6,120.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26,p:{y:121}},{t:this.shape_25,p:{y:108.1}},{t:this.shape_24}]}).to({state:[{t:this.shape_28},{t:this.shape_26,p:{y:121.5}},{t:this.shape_25,p:{y:108.6}},{t:this.shape_24}]},3).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_25,p:{y:107.6}}]},2).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_24}]},4).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_25,p:{y:108.1}}]},2).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26,p:{y:121}},{t:this.shape_25,p:{y:108.1}},{t:this.shape_24}]},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,0.1,322.7,189.3);


(lib.PhrasesLesson = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.ParticipialSiren();
	this.instance.parent = this;
	this.instance.setTransform(38.6,-59.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(246).to({_off:false},0).to({_off:true},94).wait(9).to({_off:false},0).to({_off:true},92).wait(10).to({_off:false,x:-79.4},0).wait(74));

	// Layer 1
	this.instance_1 = new lib.underline();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,-15.8,0.912,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(246).to({_off:false},0).to({_off:true},94).wait(9).to({_off:false,x:48.7},0).to({_off:true},92).wait(10).to({_off:false,x:-51.3},0).wait(74));

	// Layer 3
	this.instance_2 = new lib.ParticiplePhraseSentence();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.7,-10.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.ParticialPhrases();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-4,-27.4,1.57,1.57);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(149.3,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBjQgDgKgCgUQgDgTAAgNIABgKIAAgKQgBgYgMAAQgQAAgNAOQgHAIgLAWQAAAygEAJQgEAJgIAAQgFAAgFgFQgDgDAAgGIABgFIABgUIAAgTIABhfIABgXIgBgMQgBgHAAgGQgBgGAEgDQAEgDAFAAQAMAAACALQABAMAAALIgBAdQgBAOABAOIAAAMQALgOAMgIQALgHAOAAQAWABAJAOQAFAKABAXIABAYIADAcIAEAbIAAAEQAAAGgDADQgEAEgGgBQgJABgDgLg");
	this.shape_1.setTransform(138.3,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglA6QgTgRAAgdQAAgZASgdQAUgfAXAAQANAAAQAGQAUAHAAAMQAAAFgDAEQgDADgFAAQgEAAgDgCIgFgEQgIgHgSAAQgMAAgNAYQgMAWAAAPQAAASAMAKQALAJAQAAQAIAAAJgEIAPgIIAGgCQAFAAADAEQAEAEAAAFQAAAJgUAJQgSAIgMAAQgaAAgSgQg");
	this.shape_2.setTransform(123.4,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeA/QgRAJgUAAQgSAAgLgIQgMgIgDgRQgFgjAAgaQAAgSAEgXQABgMALAAQAGABAEADQAEADAAAHIgCATIgCAUQAAAWABAPQACAQADAJIAIADIAJACQAQAAAUgGIAAgbIAAgYQgBgdADgUQACgNAKAAQAHAAADAEQAEADAAAGIgCAyIAAAbIAAAdIAAAJIABAJQgBAGgDADQgEADgGAAQgJAAgDgMg");
	this.shape_3.setTransform(109.5,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape_4.setTransform(95,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglA6QgTgRAAgdQAAgZASgdQAUgfAXAAQANAAAQAGQAUAHAAAMQAAAFgDAEQgDADgFAAQgEAAgDgCIgFgEQgIgHgSAAQgMAAgNAYQgMAWAAAPQAAASAMAKQALAJAQAAQAIAAAJgEIAPgIIAGgCQAFAAADAEQAEAEAAAFQAAAJgUAJQgSAIgMAAQgaAAgSgQg");
	this.shape_5.setTransform(81.3,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgtA5QgUgRAAgdQAAghARgYQASgZAeAAQAVAAAOAHQARAKAAASQAAANgPALQgHAFgVAKIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFgBQAEAAAEAEQAEAEAAAEQAAAOgYALQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgJQgLgKgUAAQgQAAgLANg");
	this.shape_6.setTransform(59.1,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAkBjQgDgKgDgUQgCgTAAgNIABgKIAAgKQgBgYgLAAQgRAAgNAOQgGAIgMAWQAAAygEAJQgEAJgIAAQgFAAgFgFQgDgDAAgGIABgFIABgUIAAgTIABhfIABgXIgBgMQgBgHgBgGQAAgGAFgDQADgDAGAAQAKAAACALQACAMAAALIgBAdQAAAOAAAOIAAAMQALgOAMgIQAMgHAOAAQAVABAJAOQAFAKABAXIABAYIACAcIAFAbIABAEQgBAGgEADQgDAEgGgBQgJABgDgLg");
	this.shape_7.setTransform(43.9,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBdQgDgEAAgFIAAgPIAAgPIgChMIgegCQgLgCgBgLQABgGADgEQAEgEAFAAIAcADIAAgSIgCgRQABgFAEgEQADgDAGAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACAAAKQAAAGgDAEQgEADgFAAIgHAAIgGAAIgSACIACBNIAAAGIABAGQAAAdgPAAQgEAAgEgDg");
	this.shape_8.setTransform(29.5,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgtA5QgUgRAAgdQAAghARgYQASgZAeAAQAVAAAOAHQARAKAAASQAAANgPALQgHAFgVAKIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFgBQAEAAAEAEQAEAEAAAEQAAAOgYALQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgJQgLgKgUAAQgQAAgLANg");
	this.shape_9.setTransform(8,10.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgtBmQgRgDAAgKQAAgMAMAAQAFAAALACQALACANAAQAZAAAJgYQAGgQABgiQgHANgKAHQgKAHgMAAQgXAAgPgRQgPgQAAgZQAAgkAUgVQAVgXAkAAQAMAAAIADQAIAEAFAGQAOAAAAAQQAAAJgDAQIgDAYIgDAsQgBAagFARQgGAVgNAKQgQANgdAAQgRAAgMgDgAgYhBQgMAPAAAYQAAATAHAJQAIAKAOAAQANAAAMgOQALgOACgOIAGgtQgFgEgGgCQgGgCgGAAQgYAAgOASg");
	this.shape_10.setTransform(-7.1,14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AguBaQgTgSAAgeQAAgjATgUQATgWAcABQAQgBAIAFIAMAJQACg3ADgTQABgMALAAQAMAAAAANQAAASgGA/QgBASAAATQAAAsAEAXIAAADQAAAFgDAEQgEADgFAAQgIAAgEgMQgJAHgLADQgKAEgKAAQgbAAgSgSgAgeACQgLANAAAaQAAARAMANQAMAMAQAAQAKAAAIgEIAOgLIAEgEIAAgXIAAgPIAAgPQgFgLgIgEQgIgGgMAAQgVAAgLAMg");
	this.shape_11.setTransform(-22,7.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdA/QgQAJgVAAQgRAAgLgIQgMgIgDgRQgFgjAAgaQAAgSAEgXQACgMALAAQAFABAEADQADADAAAHIgBATIgCAUQAAAWACAPQABAQACAJIAJADIAIACQARAAAUgGIgBgbIAAgYQABgdACgUQABgNAMAAQAFAAAEAEQAEADAAAGIgDAyIAAAbIAAAdIABAJIAAAJQABAGgEADQgEADgFAAQgKAAgEgMg");
	this.shape_12.setTransform(-36.8,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoBjQgEAGgGAAQgFAAgDgDQgEgEAAgFIABgKIAAgKIgBgrIgBgpIABgkIAAglQAAgHADgGQAEgJAIABQAKAAAAALIgBAFIAAAFIgBAdIAAAiQALgIALgDQAKgEAIgBQAcAAASAXQARATAAAdQAAAfgUAUQgTAWgcgBQgUAAgRgHgAgUgFQgGADgNAIIAAAYIAAAUIAAAWIASAHQAIADAKAAQASAAANgOQAMgNAAgVQAAgTgKgNQgLgNgSgBQgKAAgLAHg");
	this.shape_13.setTransform(-51.6,7.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIBdQgEgEAAgFIABgPIAAgPIgChMIgdgCQgMgCgBgLQABgGADgEQADgEAGAAIAcADIAAgSIgBgRQAAgFADgEQAEgDAGAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACABAKQAAAGgEAEQgEADgGAAIgGAAIgGAAIgSACIACBNIAAAGIAAAGQABAdgPAAQgEAAgEgDg");
	this.shape_14.setTransform(-74.3,8.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape_15.setTransform(-88,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAgBAIgEgdQgCgPAAgOIABgLIAAgNQAAgcgKAAQgPAAgMARQgMAQgHAYIgBANIgBANIABALIABAMQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEABgGIgBgMIgBgLIACglIABgmIAAgMIAAgNQAAgFADgEQAEgEAGAAQAMAAABARIABAQQAWgeAWAAQAVAAAIATQAGAMABAZIAAANIAAALQAAALACARQADASAAALQAAAFgEAEQgDAEgGAAQgMAAgBgNg");
	this.shape_16.setTransform(-101.6,10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAgBAIgEgdQgBgPAAgOIAAgLIABgNQAAgcgLAAQgPAAgMARQgNAQgGAYIgCANIAAANIAAALIABAMQAAAGgDAEQgEAEgGAAQgFAAgEgEQgDgEAAgGIgBgMIgBgLIACglIACgmIAAgMIgBgNQAAgFADgEQAEgEAGAAQAMAAABARIABAQQAVgeAXAAQAVAAAIATQAGAMABAZIAAANIAAALQAAALACARQADASAAALQAAAFgDAEQgEAEgGAAQgMAAgBgNg");
	this.shape_17.setTransform(-115.8,10.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAqBEIgJgKIgWAKQgJADgGAAQgfAAgOgRQgOgQAAgiQAAgfAXgWQAWgXAdAAQALAAAPAGQARAHABALQAAADgDADIgCAQIgBAdQAAAQACAJQACAHAGARIAEAHIABACQAAAGgEADQgEADgFAAQgCAAgHgFgAgWggQgPAQAAAWQABAVAHAKQAIAMAQAAQALAAAJgFQAEgDAJgHQgEgiAAgSIAAgLIADgPIgIgDIgGgCQgTAAgQARg");
	this.shape_18.setTransform(-130,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AglA6QgTgRAAgdQAAgZASgdQAUgfAXAAQANAAAQAGQAUAHAAAMQAAAFgDAEQgDADgFAAQgEAAgDgCIgFgEQgIgHgSAAQgMAAgNAYQgMAWAAAPQAAASAMAKQALAJAQAAQAIAAAJgEIAPgIIAGgCQAFAAADAEQAEAEAAAFQAAAJgUAJQgSAIgMAAQgaAAgSgQg");
	this.shape_19.setTransform(-143.8,10.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgPAcQgEgDAAgFQAAgEAIgRIALgYQACgGAHAAQAEAAADAEQAEADAAAFQAAADgTApQgCAHgGAAQgFAAgDgEg");
	this.shape_20.setTransform(190.9,-20.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBdQgFgEAAgFIABgPIAAgPIgChMIgdgCQgNgCAAgLQAAgGAEgEQADgEAGAAIAcADIAAgSIgBgRQAAgFADgEQAEgDAGAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACABAKQAAAGgEAEQgEADgGAAIgGAAIgGAAIgSACIACBNIAAAGIAAAGQABAdgOAAQgFAAgDgDg");
	this.shape_21.setTransform(180,-31);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAkBjQgDgKgCgUQgDgTAAgNIABgKIAAgKQAAgYgNAAQgQAAgNAOQgHAIgLAWQAAAygFAJQgDAJgIAAQgFAAgFgFQgDgDAAgGIABgFIABgUIAAgTIABhfIABgXIgBgMQgCgHABgGQAAgGADgDQAEgDAFAAQAMAAACALQABAMAAALIAAAdQgCAOABAOIAAAMQALgOAMgIQALgHAOAAQAWABAJAOQAFAKABAXIABAYIADAcIAEAbIAAAEQAAAGgDADQgEAEgGgBQgJABgDgLg");
	this.shape_22.setTransform(166.1,-32.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgtBmQgRgDAAgKQAAgMAMAAQAFAAALACQALACANAAQAZAAAJgYQAGgQABgiQgHANgKAHQgKAHgMAAQgXAAgPgRQgPgQAAgZQAAgkAUgVQAVgXAkAAQAMAAAIADQAIAEAFAGQAOAAAAAQQAAAJgDAQIgDAYIgDAsQgBAagFARQgGAVgNAKQgQANgdAAQgRAAgMgDgAgYhBQgMAPAAAYQAAATAHAJQAIAKAOAAQANAAAMgOQALgOACgOIAGgtQgFgEgGgCQgGgCgGAAQgYAAgOASg");
	this.shape_23.setTransform(150.7,-25.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMBfQgEgDAAgGIAAgYIgBgXIACgfIABgeQAAgGAEgEQADgEAGAAQAFAAADAEQAEAEAAAGIgBAeIgCAfIABAXIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgFAAgGQAAgGAEgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_24.setTransform(140.2,-32);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBNQgEgDAAgGQAAgQgDgfQgDgfAAgPQAAgOgEgIQgJAEgKAKIgPARIgHAJIgCAWIgBAXIABAKIACALQAAAFgEAEQgEAEgGAAQgPAAAAgiIACgYIABgWIgBgWIgBgUQAAgeANAAQAFgBAFAFQAEAEAAAGIgBAHIgBAJIABANQAHgOANgLQANgMAKAAQAUABAHAUQAHgKAKgEQAKgFANAAQAWAAAIAXQACAFAEAgIAJBMQABAEgEAFQgEADgGAAQgLAAgCgLQgCgPgCgbIgFgnQgBgJgDgJQgFgMgFAAQgFAAgNAIQgNAIgEAFQAAAMABAMIAEAiQACAWAAANQAAAGgDADQgEAFgGAAQgEAAgEgFg");
	this.shape_25.setTransform(125.9,-28.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape_26.setTransform(100.2,-29.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMBfQgEgDAAgGIAAgYIgBgXIACgfIABgeQAAgGAEgEQADgEAGAAQAFAAADAEQAEAEAAAGIgBAeIgCAfIABAXIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgFAAgGQAAgGAEgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_27.setTransform(90.5,-32);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAkBjQgDgKgDgUQgCgTAAgNIAAgKIAAgKQABgYgMAAQgRAAgMAOQgIAIgLAWQAAAygEAJQgEAJgIAAQgFAAgEgFQgFgDAAgGIACgFIACgUIAAgTIAAhfIABgXIgBgMQgCgHAAgGQABgGAEgDQADgDAGAAQALAAABALQACAMABALIgCAdQgBAOABAOIAAAMQALgOAMgIQALgHAPAAQAVABAIAOQAGAKABAXIABAYIACAcIAFAbIABAEQAAAGgFADQgEAEgFgBQgJABgDgLg");
	this.shape_28.setTransform(78.8,-32.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgOBfIACgvIABgwIABgvIAAgwQAAgNAMAAQANAAAAANIAAAwIgBAvIgCBBIgBAfQgBANgLAAQgNAAAAgOg");
	this.shape_29.setTransform(59.1,-32.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgOBfIABgvIACgwIABgvIAAgwQAAgNAMAAQANAAAAANIAAAwIgBAvIgCBBIgBAfQgBANgLAAQgNAAAAgOg");
	this.shape_30.setTransform(51.7,-32.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAqBEIgIgKIgXAKQgJADgGAAQgfAAgOgRQgOgQAAgiQAAgfAXgWQAWgXAdAAQAMAAAOAGQARAHAAALQABADgDADIgCAQIgBAdQAAAQADAJQAAAHAIARIADAHIAAACQABAGgEADQgEADgEAAQgDAAgHgFgAgVggQgPAQgBAWQAAAVAJAKQAHAMAPAAQAMAAAJgFQAFgDAIgHQgEgiAAgSIABgLIACgPIgJgDIgFgCQgTAAgPARg");
	this.shape_31.setTransform(41.1,-28.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAkBjQgDgKgDgUQgCgTAAgNIAAgKIAAgKQABgYgMAAQgRAAgMAOQgIAIgLAWQAAAygFAJQgDAJgIAAQgFAAgEgFQgFgDAAgGIACgFIACgUIAAgTIAAhfIABgXIgBgMQgCgHAAgGQABgGAEgDQADgDAGAAQALAAABALQACAMABALIgCAdQgBAOABAOIAAAMQALgOAMgIQALgHAPAAQAVABAIAOQAGAKABAXIABAYIACAcIAFAbIABAEQAAAGgFADQgEAEgFgBQgJABgDgLg");
	this.shape_32.setTransform(18.5,-32.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHBdQgFgEAAgFIABgPIAAgPIgChMIgdgCQgNgCAAgLQAAgGAEgEQAEgEAFAAIAcADIAAgSIgBgRQAAgFADgEQAFgDAFAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACABAKQgBAGgDAEQgEADgGAAIgGAAIgGAAIgSACIACBNIAAAGIAAAGQABAdgOAAQgFAAgDgDg");
	this.shape_33.setTransform(4.2,-31);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgMBfQgEgDAAgGIAAgYIgBgXIACgfIABgeQAAgGAEgEQADgEAGAAQAFAAADAEQAEAEAAAGIgBAeIgCAfIABAXIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgFAAgGQAAgGAEgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_34.setTransform(-5.7,-32);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAfBKQgPAAgIgkIgFgfIgDgcIgLAYIgUA3QgCAFgDACQgEAIgJAAQgKABgJgoQgFgVgFgiIgDgTIgCgUQAAgGAEgDQAEgEAGAAQAKAAACALQACAIABALIACAUIAIA6QAOgoAQg1QAEgOAKAAQAKAAAEAQIAJAvQAFAhAEASIAKgkIARhHQACgIAJAAQAGAAAEAEQAEAEAAAFIgCAGQgKArgRA1QgDAMgJANQgEAHgHAAIgBAAg");
	this.shape_35.setTransform(-18.9,-28.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgtBmQgRgDAAgKQAAgMAMAAQAFAAALACQALACANAAQAZAAAJgYQAGgQABgiQgHANgKAHQgKAHgMAAQgXAAgPgRQgPgQAAgZQAAgkAUgVQAVgXAkAAQAMAAAIADQAIAEAFAGQAOAAAAAQQAAAJgDAQIgDAYIgDAsQgBAagFARQgGAVgNAKQgQANgdAAQgRAAgMgDgAgYhBQgMAPAAAYQAAATAHAJQAIAKAOAAQANAAAMgOQALgOACgOIAGgtQgFgEgGgCQgGgCgGAAQgYAAgOASg");
	this.shape_36.setTransform(-43.6,-25.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAgBAIgEgdQgCgPAAgOIABgLIAAgNQAAgcgKAAQgPAAgMARQgMAQgHAYIgBANIgBANIABALIABAMQgBAGgDAEQgEAEgGAAQgGAAgDgEQgDgEgBgGIAAgMIgBgLIACglIABgmIAAgMIgBgNQAAgFAFgEQAEgEAFAAQAMAAABARIAAAQQAXgeAWAAQAVAAAIATQAGAMAAAZIAAANIAAALQAAALADARQADASAAALQAAAFgEAEQgEAEgFAAQgMAAgBgNg");
	this.shape_37.setTransform(-57.3,-28.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgMBfQgEgDAAgGIAAgYIgBgXIACgfIABgeQAAgGAEgEQADgEAGAAQAFAAADAEQAEAEAAAGIgBAeIgCAfIABAXIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgFAAgGQAAgGAEgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_38.setTransform(-68.2,-32);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAkBjQgDgKgDgUQgCgTAAgNIABgKIAAgKQgBgYgLAAQgRAAgNAOQgGAIgMAWQAAAygEAJQgEAJgIAAQgFAAgFgFQgDgDAAgGIABgFIABgUIAAgTIABhfIABgXIgBgMQgBgHgBgGQAAgGAFgDQADgDAGAAQAKAAACALQACAMAAALIgBAdQAAAOAAAOIAAAMQALgOAMgIQAMgHAOAAQAVABAJAOQAFAKABAXIABAYIACAcIAFAbIABAEQgBAGgEADQgDAEgGgBQgJABgDgLg");
	this.shape_39.setTransform(-79.9,-32.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape_40.setTransform(-94.8,-29.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAeA/QgRAJgUAAQgSAAgLgIQgNgIgCgRQgFgjAAgaQAAgSAEgXQABgMALAAQAGABAEADQADADAAAHIgBATIgCAUQAAAWABAPQABAPAEAKIAIADIAJACQAQAAAUgGIAAgbIAAgYQAAgdACgUQACgNAKAAQAHAAADAEQAEADAAAGIgCAyIAAAbIAAAdIAAAJIABAJQAAAGgEADQgEADgGAAQgKAAgCgMg");
	this.shape_41.setTransform(-108,-28.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgyBrQgEgEAAgFIAAg1IAAg0IgCg0IgCgbQAAgJAEgHQAEgIAHAAQAFAAAEAEQADAEAAAFIAAAEIgBAIQALgIALgEQAKgEAJAAQAbAAANAYQAKATAAAfQAAAcgQASQgQAUgbAAQgMAAgQgEIAAA/QAAAFgEAEQgDAEgGAAQgGAAgDgEgAgMhFQgHAEgKAKQABAeAAAgQAPAFANAAQARAAAIgMQAIgKAAgRQAAgYgGgLQgGgMgMAAQgLAAgKAFg");
	this.shape_42.setTransform(-122.2,-25.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgQAcQgDgDAAgFQAAgEAJgRIAKgYQACgGAHAAQAEAAAEAEQADADAAAFQAAADgTApQgCAHgGAAQgFAAgEgEg");
	this.shape_43.setTransform(-140.5,-20.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgoBjQgEAGgGAAQgFAAgDgDQgEgEAAgFIABgKIAAgKIgBgrIgBgpIABgkIAAglQAAgHADgGQAEgJAIABQAKAAAAALIgBAFIAAAFIgBAdIAAAiQALgIALgDQAKgEAIgBQAcAAASAXQARATAAAdQAAAfgUAUQgTAWgcgBQgUAAgRgHgAgUgFQgGADgNAIIAAAYIAAAUIAAAWIASAHQAIADAKAAQASAAANgOQAMgNAAgVQAAgTgKgNQgLgNgSgBQgKAAgLAHg");
	this.shape_44.setTransform(-152.8,-32.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAeA/QgRAJgVAAQgRAAgLgIQgNgIgCgRQgFgjAAgaQAAgSAEgXQABgMAMAAQAFABAEADQAEADgBAHIgBATIgCAUQAAAWABAPQABAPADAKIAJADIAIACQARAAAUgGIgBgbIAAgYQAAgdADgUQABgNALAAQAGAAAEAEQAEADAAAGIgDAyIAAAbIAAAdIABAJIAAAJQAAAGgDADQgEADgGAAQgKAAgCgMg");
	this.shape_45.setTransform(-168,-28.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag9BlQgFgFAAgGIAAgmQAAgTACgiIADg3IACgkQABgGADgCQASgGAXAAQAWAAAVAQQAZASAAAbQAAAigaASQATAJAKAKQAKAKAAAMQAAAQgRAPQgMALgNAFQgdAMguAAQgGAAgFgGgAgoA0IAAAcQAjgCAUgIQAKgEAIgHQAIgHAAgEQAAgGgRgIQgMgFgMgDIgNgDIgGABIgFAAIgPgBIgBAdgAgihOIgBAXIgCAzIAUABQATgBAMgLQAOgMAAgSQAAgNgOgKQgOgLgOAAIgUABg");
	this.shape_46.setTransform(-183,-32.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgOBfIACgvIABgwIAAgvIABgwQAAgNAMAAQANAAAAANIgBAwIAAAvIgCBBIgBAfQgBANgLAAQgNAAAAgOg");
	this.shape_47.setTransform(114.8,7.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAkBjQgDgKgDgUQgCgTAAgNIAAgKIAAgKQABgYgMAAQgRAAgNAOQgGAIgMAWQAAAygEAJQgEAJgIAAQgFAAgEgFQgFgDAAgGIACgFIABgUIAAgTIABhfIABgXIgBgMQgCgHAAgGQAAgGAFgDQADgDAGAAQALAAABALQACAMAAALIgBAdQAAAOAAAOIAAAMQALgOAMgIQAMgHAOAAQAVABAIAOQAGAKABAXIABAYIACAcIAFAbIABAEQAAAGgFADQgEAEgFgBQgJABgDgLg");
	this.shape_48.setTransform(88.6,7.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgtA5QgUgRAAgdQAAghARgYQASgZAeAAQAVAAAOAHQARAKAAASQAAANgPALQgHAFgVAKIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFgBQAEAAAEAEQAEAEAAAEQAAAOgYALQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgJQgLgKgUAAQgQAAgLANg");
	this.shape_49.setTransform(21.6,10.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAgBAIgDgdQgCgPgBgOIABgLIABgNQAAgcgLAAQgPAAgMARQgNAQgGAYIgCANIAAANIAAALIABAMQAAAGgDAEQgEAEgFAAQgHAAgDgEQgDgEgBgGIAAgMIgBgLIACglIABgmIAAgMIgBgNQAAgFAFgEQAEgEAFAAQAMAAABARIAAAQQAWgeAXAAQAVAAAJATQAFAMAAAZIAAANIAAALQAAALAEARQACASAAALQAAAFgDAEQgFAEgFAAQgLAAgCgNg");
	this.shape_50.setTransform(7.2,10.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAdA/QgQAJgUAAQgSAAgLgIQgNgIgCgRQgFgjAAgaQAAgSAEgXQACgMAKAAQAGABAEADQADADABAHIgCATIgCAUQAAAWACAPQABAQACAJIAJADIAJACQAQAAAUgGIgBgbIAAgYQABgdACgUQACgNALAAQAFAAAEAEQAEADAAAGIgCAyIAAAbIAAAdIAAAJIAAAJQAAAGgDADQgEADgFAAQgLAAgDgMg");
	this.shape_51.setTransform(-31.2,10.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAgBAIgDgdQgCgPAAgOIAAgLIABgNQAAgcgLAAQgPAAgMARQgNAQgGAYIgCANIAAANIAAALIABAMQABAGgEAEQgEAEgFAAQgGAAgEgEQgEgEAAgGIAAgMIgBgLIACglIACgmIAAgMIgBgNQAAgFADgEQAEgEAGAAQAMAAABARIABAQQAVgeAXAAQAVAAAJATQAFAMABAZIAAANIAAALQAAALADARQACASAAALQAAAFgDAEQgFAEgFAAQgMAAgBgNg");
	this.shape_52.setTransform(-115.9,10.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAjBlQgHgOgOgSIgWgfIgYAQIgBApQAAAFgEAEQgDAEgGgBQgNABAAgTIABggIACghIAAgtIABgtIgBgOIAAgOQAAgGADgEQAEgEAGAAQAFAAAEAEQAEAEAAAGIAAAOIABAOIgBArQgBAXABAWQASgOAPgQIAdgdQAFgFAFABQAFAAAEADQAEAEAAAGQAAAFgEADQgQAUgYAVIAdAnQAUAbAAAIQAAAGgEADQgEAEgGAAQgHABgEgIg");
	this.shape_53.setTransform(-129.8,7.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgQAcQgDgDAAgFQAAgEAJgRIAKgYQADgGAFAAQAFAAADAEQAEADAAAFQAAADgTApQgCAHgHAAQgEAAgEgEg");
	this.shape_54.setTransform(179.3,-20.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape_55.setTransform(167.8,-29.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AguBaQgTgSAAgeQAAgjATgUQATgWAcABQAQgBAIAFIAMAJQACg3ADgTQABgMALAAQAMAAAAANQAAASgGA/QgBASAAATQAAAsAEAXIAAADQAAAFgDAEQgEADgFAAQgIAAgEgMQgJAHgLADQgKAEgKAAQgbAAgSgSgAgeACQgLANAAAaQAAARAMANQAMAMAQAAQAKAAAIgEIAOgLIAEgEIAAgXIAAgPIAAgPQgFgLgIgEQgIgGgMAAQgVAAgLAMg");
	this.shape_56.setTransform(153.6,-32.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAjBlQgHgOgOgSIgWgfIgYAQIgBApQAAAFgEAEQgDAEgGgBQgNABAAgTIABggIACghIAAgtIABgtIgBgOIAAgOQAAgGADgEQAEgEAGAAQAFAAAEAEQAEAEAAAGIAAAOIABAOIgBArQgBAXABAWQASgOAPgQIAdgdQAFgFAFABQAFAAAEADQAEAEAAAGQAAAFgEADQgQAUgYAVIAdAmQAUAcAAAIQAAAGgEADQgEAEgGAAQgHABgEgIg");
	this.shape_57.setTransform(131.7,-32.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgyA8IAAhbIAAgNIAAgNQAAgNAMAAQANgBAAAWQAZgYAeAAQALAAAFAIQAFAIAAAQIAAAJQgBARgMAAQgLAAAAgNIgBgJIAAgMQgVADgMAJQgLAJgIARIAABHQAAAOgNAAQgLAAAAgOg");
	this.shape_58.setTransform(109.5,-28.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgtA5QgUgRAAgdQAAghARgYQASgZAeAAQAVAAAOAHQARAKAAASQAAANgPALQgHAFgVAKIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFgBQAEAAAEAEQAEAEAAAEQAAAOgYALQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgJQgLgKgUAAQgQAAgLANg");
	this.shape_59.setTransform(95.4,-28.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgHBdQgFgEAAgFIABgPIAAgPIgDhMIgcgCQgNgCAAgLQAAgGAEgEQAEgEAFAAIAcADIAAgSIgBgRQAAgFADgEQAFgDAFAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACABAKQgBAGgDAEQgEADgGAAIgGAAIgGAAIgSACIACBNIAAAGIAAAGQABAdgOAAQgFAAgDgDg");
	this.shape_60.setTransform(65.8,-31);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgtA5QgUgRAAgdQAAghARgYQASgZAeAAQAVAAAOAHQARAKAAASQAAANgPALQgHAFgVAKIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFgBQAEAAAEAEQAEAEAAAEQAAAOgYALQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgJQgLgKgUAAQgQAAgLANg");
	this.shape_61.setTransform(30.1,-28.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAkBjQgDgKgDgUQgCgTAAgNIAAgKIAAgKQABgYgMAAQgRAAgNAOQgGAIgMAWQAAAygEAJQgEAJgIAAQgFAAgEgFQgFgDAAgGIACgFIABgUIAAgTIABhfIABgXIgBgMQgCgHAAgGQAAgGAFgDQADgDAGAAQALAAABALQACAMAAALIgBAdQAAAOAAAOIAAAMQALgOAMgIQAMgHAOAAQAVABAIAOQAGAKABAXIABAYIACAcIAFAbIABAEQAAAGgFADQgEAEgFgBQgJABgDgLg");
	this.shape_62.setTransform(14.8,-32.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgOBfIACgvIABgwIAAgvIABgwQAAgNAMAAQANAAAAANIgBAwIAAAvIgCBBIgBAfQgBANgLAAQgNAAAAgOg");
	this.shape_63.setTransform(-53.6,-32.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAqBEIgJgKIgWAKQgKADgFAAQgfAAgOgRQgOgQAAgiQAAgfAXgWQAVgXAeAAQAMAAAOAGQARAHAAALQAAADgCADIgCAQIgBAdQAAAQACAJQABAHAHARIAEAHIAAACQAAAGgDADQgEADgFAAQgCAAgHgFgAgVggQgPAQgBAWQABAVAHAKQAIAMAQAAQALAAAJgFQAEgDAJgHQgEgiAAgSIAAgLIADgPIgJgDIgFgCQgTAAgPARg");
	this.shape_64.setTransform(-71.6,-28.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgQAcQgDgDAAgFQAAgEAJgRIAKgYQADgGAFAAQAFAAAEAEQADADAAAFQAAADgTApQgCAHgHAAQgEAAgEgEg");
	this.shape_65.setTransform(-103.4,-20.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgiBnQgFgEAAgFQAAgNAdg/IgvhaIgGgKQgEgGAAgEQAAgFAEgFQAFgEAFAAQAGAAADAFQAWAfAZA6IAUguQAKgXAKgRQAEgIAHAAQAFAAAFAEQAEAEAAAFIgCAHIguBhQgQAkgIAZIgJAZQgEAKgIAAQgGAAgDgEg");
	this.shape_66.setTransform(-115.4,-25.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgVBxQgDgEgBgFIAAgDQADgRABgUIgBgkIAAgmIgVACQgNAAAAgNQAAgNAXgBIANAAIACgUQADgdAMgOQAMgRAdAAQATAAAAANQAAAMgRAAQggAAgEAtIAAAIIAdgBQAVgBAAANQAAALgKABIgLABQgGAAgZACIgBAcIABAZIAAAZQAAAZgCANQgCALgJAAQgGAAgEgDg");
	this.shape_67.setTransform(-129.1,-31.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgVBxQgDgEgBgFIAAgDQADgRAAgUIAAgkIAAgmIgVACQgNAAAAgNQAAgNAXgBIAMAAIADgUQADgdALgOQANgRAdAAQATAAAAANQAAAMgRAAQggAAgEAtIAAAIIAdgBQAVgBAAANQAAALgKABIgLABQgGAAgZACIgBAcIABAZIAAAZQAAAZgCANQgBALgLAAQgFAAgEgDg");
	this.shape_68.setTransform(-142.8,-31.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAdA/QgQAJgUAAQgSAAgLgIQgMgIgDgRQgFgjAAgaQAAgSAEgXQABgMALAAQAGABAEADQAEADAAAHIgCATIgCAUQAAAWABAPQACAPADAKIAIADIAJACQAQAAAUgGIAAgbIAAgYQgBgdADgUQACgNALAAQAGAAADAEQAEADAAAGIgCAyIAAAbIAAAdIAAAJIABAJQgBAGgDADQgEADgGAAQgJAAgEgMg");
	this.shape_69.setTransform(-156.4,-28.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("Ag9BlQgFgFAAgGIAAgmQAAgTACgiIADg3IACgkQABgGADgCQASgGAXAAQAWAAAVAQQAZASAAAbQAAAigaASQATAJAKAKQAKAKAAAMQAAAQgRAPQgMALgNAFQgdAMguAAQgGAAgFgGgAgoA0IAAAcQAjgCAUgIQAKgEAIgHQAIgHAAgEQAAgGgRgIQgMgFgMgDIgNgDIgGABIgFAAIgPgBIgBAdgAgihOIgBAXIgCAzIAUABQATgBAMgLQAOgMAAgSQAAgNgOgKQgOgLgOAAIgUABg");
	this.shape_70.setTransform(-171.3,-32.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAdA/QgQAJgVAAQgRAAgLgIQgNgIgCgRQgFgjAAgaQAAgSAEgXQACgMAKAAQAGABAEADQADADABAHIgCATIgCAUQAAAWACAPQABAQACAJIAJADIAIACQARAAAUgGIgBgbIAAgYQABgdACgUQABgNAMAAQAFAAAEAEQAEADAAAGIgDAyIAAAbIAAAdIABAJIAAAJQAAAGgDADQgEADgFAAQgLAAgDgMg");
	this.shape_71.setTransform(137.2,10.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAkBjQgDgKgCgUQgDgTAAgNIAAgKIAAgKQAAgYgMAAQgQAAgMAOQgIAIgLAWQAAAygFAJQgDAJgIAAQgFAAgEgFQgFgDAAgGIACgFIACgUIAAgTIAAhfIABgXIgBgMQgBgHAAgGQAAgGADgDQAEgDAGAAQALAAABALQADAMAAALIgBAdQgCAOABAOIAAAMQALgOAMgIQALgHAOAAQAWABAIAOQAGAKABAXIABAYIACAcIAFAbIAAAEQAAAGgDADQgFAEgFgBQgJABgDgLg");
	this.shape_72.setTransform(35.3,7.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAdA/QgQAJgVAAQgRAAgLgIQgNgIgCgRQgFgjAAgaQAAgSAEgXQACgMAKAAQAGABAEADQADADABAHIgCATIgCAUQAAAWACAPQABAQACAJIAJADIAIACQARAAAUgGIgBgbIAAgYQABgdACgUQABgNAMAAQAFAAAEAEQAEADAAAGIgDAyIAAAbIAAAdIABAJIAAAJQAAAGgDADQgEADgFAAQgLAAgDgMg");
	this.shape_73.setTransform(7.2,10.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgyBrQgEgEAAgFIAAg1IAAg0IgCg0IgCgbQAAgJAEgHQAEgIAHAAQAFAAAEAEQADAEAAAFIAAAEIgBAIQALgIALgEQAKgEAJAAQAbAAANAYQAKATAAAfQAAAcgQASQgQAUgbAAQgMAAgQgEIAAA/QAAAFgEAEQgDAEgGAAQgGAAgDgEgAgMhFQgHAEgKAKQABAeAAAgQAPAFANAAQARAAAIgMQAIgKAAgRQAAgYgGgLQgGgMgMAAQgLAAgKAFg");
	this.shape_74.setTransform(-84.6,14);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgOBfIABgvIACgwIAAgvIABgwQAAgNAMAAQANAAAAANIgBAwIAAAvIgCBBIgBAfQgCANgKAAQgNAAAAgOg");
	this.shape_75.setTransform(-95.6,7.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAkBjQgDgKgCgUQgDgTAAgNIAAgKIAAgKQAAgYgMAAQgQAAgMAOQgIAIgLAWQAAAygFAJQgDAJgIAAQgFAAgEgFQgFgDAAgGIACgFIACgUIAAgTIAAhfIABgXIgBgMQgBgHAAgGQAAgGADgDQAEgDAFAAQAMAAABALQADAMAAALIgBAdQgCAOABAOIAAAMQALgOAMgIQALgHAOAAQAWABAIAOQAGAKABAXIABAYIACAcIAFAbIAAAEQAAAGgDADQgFAEgFgBQgJABgDgLg");
	this.shape_76.setTransform(-121.8,7.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgOBfIACgvIABgwIAAgvIABgwQAAgNAMAAQANAAAAANIAAAwIgBAvIgCBBIgBAfQgCANgKAAQgNAAAAgOg");
	this.shape_77.setTransform(-141.5,7.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgMBgQgEgEAAgGIAAgYIgBgXIACgfIABgeQAAgGAEgEQADgEAGAAQAFAAADAEQAEAEAAAGIgBAeIgCAfIABAXIAAAYQAAAGgDAEQgEADgFAAQgFAAgEgDgAgIhIQgEgFAAgGQAAgGAEgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_78.setTransform(-156.1,7.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAkBjQgDgKgDgUQgCgTAAgNIABgKIAAgKQgBgYgMAAQgQAAgNAOQgHAIgLAWQAAAygEAJQgEAJgIAAQgFAAgFgFQgDgDAAgGIABgFIABgUIAAgTIABhfIABgXIgBgMQgBgHgBgGQABgGADgDQAEgDAFAAQAMAAACALQABAMAAALIgBAdQgBAOABAOIAAAMQALgOAMgIQALgHAOAAQAWABAJAOQAFAKABAXIABAYIADAcIAEAbIAAAEQAAAGgEADQgDAEgGgBQgJABgDgLg");
	this.shape_79.setTransform(110.8,-32.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgIBdQgDgEAAgFIAAgPIAAgPIgChMIgegCQgMgCABgLQAAgGADgEQADgEAGAAIAcADIgBgSIgBgRQAAgFAFgEQAEgDAFAAQALAAACATIAAAMIAAAHIAAAJIASgDQAOAAAEACQAIACAAAKQABAGgEAEQgEADgFAAIgHAAIgHAAIgSACIADBNIAAAGIABAGQAAAdgPAAQgEAAgEgDg");
	this.shape_80.setTransform(96.5,-31);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgPAcQgEgDAAgFQAAgEAIgRIALgYQADgGAFAAQAFAAADAEQAEADAAAFQAAADgTApQgCAHgHAAQgEAAgDgEg");
	this.shape_81.setTransform(79.1,-20.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAdA/QgQAJgVAAQgRAAgLgIQgMgIgDgRQgFgjAAgaQAAgSAEgXQACgMALAAQAFABAEADQADADAAAHIgBATIgCAUQAAAWACAPQAAAPADAKIAJADIAIACQARAAAUgGIgBgbIAAgYQAAgdADgUQABgNALAAQAGAAAEAEQAEADAAAGIgDAyIAAAbIAAAdIABAJIAAAJQABAGgEADQgEADgFAAQgKAAgEgMg");
	this.shape_82.setTransform(52.8,-28.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgtA5QgUgRAAgdQAAghARgYQASgZAeAAQAVAAAOAHQARAKAAASQAAANgPALQgHAFgVAKIgxAXQAHALALAFQALAGAOAAQAJAAAMgDQAQgEAEgIQAFgGAFgBQAEAAAEAEQAEAEAAAEQAAAOgYALQgUAJgTAAQgdAAgTgPgAgbgiQgKAMgGAYIApgSQAXgMAKgJQgLgKgUAAQgQAAgLANg");
	this.shape_83.setTransform(-24.2,-28.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAkBjQgDgKgDgUQgCgTAAgNIABgKIAAgKQgBgYgMAAQgQAAgNAOQgHAIgLAWQAAAygEAJQgEAJgIAAQgFAAgFgFQgDgDAAgGIABgFIABgUIAAgTIABhfIABgXIgBgMQgBgHgBgGQAAgGAEgDQAEgDAFAAQAMAAACALQABAMAAALIgBAdQgBAOABAOIAAAMQALgOAMgIQALgHAOAAQAWABAJAOQAFAKABAXIABAYIADAcIAEAbIAAAEQAAAGgEADQgDAEgGgBQgJABgDgLg");
	this.shape_84.setTransform(-39.5,-32.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgIBdQgDgEAAgFIAAgPIAAgPIgChMIgegCQgMgCAAgLQABgGADgEQADgEAGAAIAcADIgBgSIgBgRQAAgFAFgEQAEgDAFAAQALAAACATIAAAMIAAAHIAAAJIASgDQAOAAAEACQAIACAAAKQABAGgEAEQgEADgFAAIgHAAIgHAAIgSACIADBNIAAAGIABAGQAAAdgPAAQgEAAgEgDg");
	this.shape_85.setTransform(-53.8,-31);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgHBdQgEgEgBgFIABgPIAAgPIgDhMIgdgCQgLgCAAgLQgBgGAEgEQADgEAGAAIAcADIgBgSIgBgRQAAgFAEgEQAFgDAFAAQALAAACATIAAAMIAAAHIAAAJIASgDQAOAAAEACQAJACgBAKQAAAGgDAEQgEADgFAAIgHAAIgHAAIgSACIADBNIAAAGIAAAGQABAdgOAAQgFAAgDgDg");
	this.shape_86.setTransform(-88.8,-31);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAgBAIgDgdQgDgPAAgOIABgLIAAgNQABgcgLAAQgPAAgMARQgNAQgGAYIgBANIgBANIABALIAAAMQAAAGgDAEQgEAEgFAAQgHAAgDgEQgDgEgBgGIAAgMIgBgLIACglIABgmIAAgMIgBgNQAAgFAFgEQAEgEAFAAQAMAAABARIAAAQQAXgeAWAAQAVAAAJATQAFAMAAAZIAAANIAAALQAAALAEARQACASAAALQAAAFgEAEQgEAEgFAAQgLAAgCgNg");
	this.shape_87.setTransform(-124.3,-28.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgnA4QgRgTgBgeQgBgdAQgXQASgaAgAAQAbAAANAYQALATgBAcQAAAcgPAVQgRAXgaAAQgXAAgQgQgAgXgaQgIAPAAASQAAATAKALQAJAIAMAAQAMAAAKgKQALgLABgTQACgygeAAQgSAAgLATg");
	this.shape_88.setTransform(-167.6,-28.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("Ag2BRQgSgUAAgcQAAgrAlgwQAfgnAfAAIAMABIAJACQAEgHAIAAQAJAAACAMQACALAAAQQAAAFgDAEQgDAFgHAAQgIAAgEgKQgEgIgDgCQgDgBgLgBQgTAAgWAdQggAoAAAiQAAARALANQALAMAQAAQANAAANgHQAIgEAQgLQAHgGAEAAQAGAAAEAFQADAEAAAFQAAAGgFAFQgiAegjAAQgbAAgTgVg");
	this.shape_89.setTransform(-182.2,-32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_2}]},93).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_3}]},1).to({state:[]},103).to({state:[{t:this.shape_46,p:{x:-183,y:-32.2}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:-122.2,y:-25.6}},{t:this.shape_41},{t:this.shape_40,p:{x:-94.8,y:-29.3}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:-18.9,y:-28.5}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:18.5,y:-32.3}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:59.1,y:-32.5}},{t:this.shape_28},{t:this.shape_27,p:{x:90.5}},{t:this.shape_26,p:{x:100.2,y:-29.3}},{t:this.shape_25,p:{x:125.9}},{t:this.shape_24,p:{x:140.2}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:180}},{t:this.shape_20},{t:this.shape_19,p:{x:-143.8,y:10.8}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:-101.6,y:10.7}},{t:this.shape_15,p:{x:-88,y:11}},{t:this.shape_14},{t:this.shape_13,p:{x:-51.6}},{t:this.shape_12,p:{x:-36.8}},{t:this.shape_11,p:{x:-22,y:7.2}},{t:this.shape_10,p:{x:-7.1,y:14.4}},{t:this.shape_9,p:{x:8}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:59.1}},{t:this.shape_5,p:{x:81.3}},{t:this.shape_4,p:{x:95}},{t:this.shape_3},{t:this.shape_2,p:{x:123.4,y:10.8}},{t:this.shape_1},{t:this.shape,p:{x:149.3}}]},5).to({state:[]},94).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_2,p:{x:-85.4,y:-28.8}},{t:this.shape_64},{t:this.shape_29,p:{x:-61,y:-32.5}},{t:this.shape_63},{t:this.shape_27,p:{x:-45.9}},{t:this.shape_16,p:{x:-35,y:-28.9}},{t:this.shape_10,p:{x:-21.3,y:-25.2}},{t:this.shape_21,p:{x:0.5}},{t:this.shape_62},{t:this.shape_61,p:{x:30.1}},{t:this.shape_15,p:{x:52.1,y:-28.6}},{t:this.shape_60,p:{x:65.8,y:-31}},{t:this.shape_32,p:{x:80.2,y:-32.3}},{t:this.shape_59,p:{x:95.4}},{t:this.shape_58,p:{x:109.5}},{t:this.shape_57,p:{x:131.7}},{t:this.shape_24,p:{x:142.2}},{t:this.shape_56},{t:this.shape_55,p:{x:167.8}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_4,p:{x:-102.3}},{t:this.shape_35,p:{x:-85.6,y:11.1}},{t:this.shape_40,p:{x:-70.3,y:10.3}},{t:this.shape_46,p:{x:-46.1,y:7.4}},{t:this.shape_51},{t:this.shape_13,p:{x:-15.9}},{t:this.shape_50},{t:this.shape_49,p:{x:21.6,y:10.8}},{t:this.shape_9,p:{x:36.4}},{t:this.shape_11,p:{x:51.4,y:7.2}},{t:this.shape_26,p:{x:65.6,y:10.3}},{t:this.shape_48,p:{x:88.6}},{t:this.shape_6,p:{x:103.9}},{t:this.shape_47},{t:this.shape_42,p:{x:125.8,y:14}},{t:this.shape,p:{x:136.3}}]},9).to({state:[]},92).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_25,p:{x:-149.5}},{t:this.shape_27,p:{x:-135.2}},{t:this.shape_87},{t:this.shape_10,p:{x:-110.6,y:-25.2}},{t:this.shape_86},{t:this.shape_15,p:{x:-75.6,y:-28.6}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_58,p:{x:-2.1}},{t:this.shape_61,p:{x:11.6}},{t:this.shape_55,p:{x:24.9}},{t:this.shape_19,p:{x:38.9,y:-28.8}},{t:this.shape_82},{t:this.shape_59,p:{x:67.4}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_49,p:{x:126.1,y:-28.8}},{t:this.shape_57,p:{x:149.4}},{t:this.shape_24,p:{x:159.9}},{t:this.shape_11,p:{x:171.3,y:-32.4}},{t:this.shape_40,p:{x:185.5,y:-29.3}},{t:this.shape_35,p:{x:-169.3,y:11.1}},{t:this.shape_78},{t:this.shape_29,p:{x:-148.9,y:7.1}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_9,p:{x:-106.5}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_46,p:{x:-60.3,y:7.4}},{t:this.shape_12,p:{x:-45.4}},{t:this.shape_13,p:{x:-30.1}},{t:this.shape_42,p:{x:-7,y:14}},{t:this.shape_73},{t:this.shape_26,p:{x:20.3,y:10.3}},{t:this.shape_72},{t:this.shape_60,p:{x:57.3,y:8.6}},{t:this.shape_32,p:{x:71.6,y:7.3}},{t:this.shape_6,p:{x:86.9}},{t:this.shape_5,p:{x:109.1}},{t:this.shape_4,p:{x:122.8}},{t:this.shape_71},{t:this.shape_2,p:{x:151.2,y:10.8}},{t:this.shape_48,p:{x:166}},{t:this.shape,p:{x:177.1}}]},10).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({alpha:1},12).wait(93).to({alpha:0},8).to({_off:true},1).wait(387));

	// Layer 2
	this.instance_4 = new lib.PartitipialPronunciation();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-94,134.4,0.851,0.851);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({_off:false},0).to({scaleX:1.09,scaleY:1.09,x:-115,alpha:1},12).to({_off:true},147).wait(284));

	// Layer 4
	this.instance_5 = new lib.WhiteSheet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.1,-5,1,1,0,0,0,206.3,103.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({alpha:0.75},12).wait(489));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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


(lib.blank_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank_1, new cjs.Rectangle(0.1,0,65,34), null);


(lib.CouchKidsBubPushes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghIAXoMAAAgvPMBCRAAAMAAAAvPg");
	mask.setTransform(212.5,158.4);

	// Layer 2
	this.instance = new lib.KidsPushinBubOnly();
	this.instance.parent = this;
	this.instance.setTransform(179.2,166.5,0.864,0.864,0,0,0,191.3,96);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAjmgD0IAA0CMhHKAAAIgBAAIAAABIAAGVIABDiEAjmgDsIAAbjIiWAAI+PAAMgmmAAAMAAAglpIAAgD");
	this.shape.setTransform(213.7,158.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFFFF").s().p("AgRAyIAAAAIAAAAgAASgxIgBAFIgEADg");
	this.shape_1.setTransform(371.2,106.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3839").s().p("AolO6QAGgUAAAUQAAAKgCAAQgBAAgDgKgAmeOlIADgIQACgEABAFIAAAHQAAAKgCAAQgBAAgDgKgAIYvDQAMgBACAIIgDABQgJAAgCgIg");
	this.shape_2.setTransform(325.2,186.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D9AF9A","#993300"],[0,1],-49.7,59.1,30.7,-80.1).s().p("AgFDSQgpg6gIg0IABAAIAKAOIARAfIAAABIABABIACAEIABACQAVAvAHAOQAKARAdAgQAVAcgMASQgLgdgwhGgAhcCxIANgvQAGgagBgLQAMARgKA+QgPBYAAAIQgWgbARhAgAheBDQgFgTgIgDQALgNAIATQAIAQAAATQgLgBgDgSgAg+AyIACgFQARgnAVgjIAYgpIAVgdIAPgSQBKhbBog4QgCAXgXASQgVARgPgDQgOAcgpAmQgZAXgVANQgPAJgMADIACADIACAFQgDARgLANIgTAdQgRAZgMAWQgMAagSAVQgHAIgGAFIAMgdgAAoh0QACAJAMgCQgCgHgJAAIgDAAgAiOgSQgUgxAOgPQAHARAKAkQALAfATAXIgDABQgTAAgTgsgAi9i1IgCgIQgThEgFgwQAEAAABgDIAIACIAFADQgFAQAHAcQAMA1gFAQIAcA8QAQAqgYAGQAAgcgVhHg");
	this.shape_3.setTransform(374.9,101.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#14A110","#009900","#FFFFCC","#FCE794"],[0.29,0.318,0.486,1],399.9,-250.4,419.5,202.4).s().p("ADBT6IAAgGMgmmAAAMAAAglqIABAAIANAAQA+AAAWgCQALgBgXAAIAzgBQAQAAABABIAGgCIABAAIABgBQANgJAKgEQgHAIAAADQAAABAAABQAAABAAAAQAAABAAgBQABAAAAgBIAnABQgEAGADADQAZgCAqgJIAAABQgEADAAACQAAABAAABQAAABAAABQABAAAAAAQAAAAABgBIAwABQgFACAAADQAAAEAGAAIA1gRIAAAAIABAAQAcgJASgCIALAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQABABABAAQADAAAYgIIABABQgRALAAABQAAACAAABQAAABAAABQAAAAAAAAQAAAAABAAIBLgBQgGAHgNAKQAAAEALAAIAogHIAbAAIABAYIAegOIAXAAQACAXACADIADgDIAAgHQAEAFAHANQAEAKAIADQAEgHABABQAHAHAHAVQAFARAPAKQAEgDABgOQAAgNAFgEIARAlQAGgIAAgGIABAAIALAbQAHAQAKAJQADgGAAgNIABAAQAJATAFADIAMgTIABABQAHAWAHADQAIgJANgbIAFAUQADAMAGAEQAIgNAigdIAAAPQgEAJAFAIQAPgMAFgKIABAAIgCAUQgBAJADAFIADADIAfgrIACABQAAALAFAXQAKgBAKgKQALgKAEAAQAAAOABACQAIANAhAAQAIAAAEgJQAFgLAGgEQACAKANAKQAMAIAOABIAEAAIABgBQAFgFAVgkIAKATQAMAPAaAAQAKAAAGgbIALAMQAJAIAQAAQAGAAAUgcQAZAWAYABQANAAAAgLIgCgMQAIgCALAJIAIAGIAHADQAJgBAFgOIACgEIAMgHQAEAOASAGQADgBAIgRIAQAUQALAQAHgBQAGAAAAgBIAAgjQANAEAHARQAFgBAAgPIAAgDIAvAoQACgIgCgYQAUAHAuAjQACgDAAgFQgFgXAAgKQATALA5AxQACAAABAAQABAAAAAAQAAAAAAgBQAAAAAAAAQgTgmAEgPIAnAmQAdAdANAAQAOAAAAgTQALALALAcQAKgDACgMQACgMAGgDQAFAHAAAOQgBANADADQAEgEADgMQADgKAFgGQAIAWAIAAQAGAAgBgCIAbg1QAKATAIAkQAXgvAEgEQAEADAQAYQAKgFAIgdQAGAIACARQACAQAHAIQAHgGANgcIACABIABAmQAHgHALgTQAMgSAHgHQgDASAKAZIASArQAPgIAPgXQAQgWAOgIQAQAgANANQAJgKAHgZQAMASAEAAQABAAABAAQABAAABgBQABAAAAAAQAAgBgBAAIABgjQAIAIALAUQAKATAJAHQAEgKAAgVQAAgVADgHIAYAkQASAaAEAAQAHAAgCgCIABgRQAAgRghhKQB7BNAaAVQAFgCAAgBQgHgXAAgIQAAgFACgBIAxAfQAcASAIANQAFgBAAgNQAHACAdARQABAAABAAQABAAABgBQABAAAAAAQAAgBgBAAIABgUQALAGAKAYIADgCIAAgVQAPAJAQAVIACgCQAAgNgJgSIgOgdQAyAlAZAcIAUAQIARANIAMAJIgFAEQAJAHAHALIAhApQgBguAhgjQAdgfAhgCQgGAQgdAnQgWAkARARQASggAwgSQAvgTAqAIQgKAGg0AUQgMAFgKAFQgWALgJAOQARAAAxgIIAOgBIANABQAVADAIALQgIAFggABIgMAAQgkAAgHAPQAIAAAVgFQALgDAKAAIALABQARAXAUAEQAlAIAOAGIABgNQAAgGAEgBIACAAQAJAQAmAKQAIgJAEgCQAGgEAJAJQAAgHAFgMQAEgKgCgMQAMAMAKgPQAMgUANADQADAOgSANQgPAKAKAKQAFABAZgJQATgHAFAIQABAJgKACQgLAEgBAGQATgGAFAPQAHAXADABQAKgVANAQQAUAZAEAAIABgQQAAgJAGgBQAMAMAPABQAIAAATgEQAjgIATAZQABgEgCgeQgBgWAJgEQAIAHAHASQAIAXAEAGQAjggAMASQgcAEgGAQQAhACApATQgOAFgGAAQgFAAgPgFQAHAMAOAQQAHANgVANQASgDAogNQAfgFAFAjQAXgIAiALQAfAKAbgNIAEATQADAKAHAEIgCg0QgBgfAQgFQAHAJAMAjQAMAcAQgLQgFgBgFgOQgEgNAIABIAJASQAGAKgCANQAJgDAUgJQARgFAIARQABgCgCgTQgBgOAJABQACAbAjAJQApAKAKAVQAtgVAJgGQAVAdAYAHQARAEAdgFIApgIIADAAQAHASAEABQAFADAfAAQADAAApgWQAGgBAUAWQA6AVAOAAQAIgBANgFQATAAgFgGIAAgXQALAKAGAJQAGAFAlgBQATAAA9gJQAEgDABgGQADgDALAAIAzAHQAxAFAVgFIAAbjIiWAAI+PAAIePAAIAAAGgAI1PNQAGAVAAgVQAAgKgBAAQgCAAgDAKgALAOxIgEAIQAGAUAAgUIAAgHIgBgDIgBACgADCr5IgBgBIAAABIABAAgADAsEIABAAIAAgCgAdywUQgDgfgIgJQgNAygOARQAIgXgTgeQgSgfACgEQgKgBgNAFQgMAGgMgDQgEgPAUABQAWAAACgGQgRgagxAHIhLATQAIg6BqAEQgLgVglgNIg1gNQAggRAqAHQApAHAUAXQAAgPgLgWQgKgVABgRQAdAJANAKQASAPAAAbQAWgVAdgJQAigMAeAJIgfASQgTAMgLAKQA5ASAJAEQAiAQAIAeQgQgEgYgNQgbgNgOgEQARAYANAjQASAygOAhQgNgKgOgjQgMghgPgKQAGAdgEAeQgFApgYAPQgGgKgDgfgAsuv8IABgDIAGADIAGAFIgBAJQgGgKgGgEgAUPxpQAHgdATAAQgPgLgXAOQgTANgKARQgEgSAbgWQAXgTAcgIQAAgGgFgNQgFgKADgMQAVARAVgZQAagfAUgCQAGAGgOAQQgRATgCAHQAOgRApgEQAlgDAeAKQgTAPg+gBQAGAJAgAHQAkAIANAKQgPARg7gRQAJALAXALQAdANAHAFQgMAIgcgLQghgMgPACQACAJAQAGQASAGAEAGQgFAMgLgHQgNgLgEgBIgEAEQgGgDgLAAQgNAAAAAFIABABIAAACIAAAAIgKAGQgJAGgJgBQAKgRADgKQgegBgSAYQgKAOgQAfQgNgRAHgcg");
	this.shape_4.setTransform(213.7,184.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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");
	this.shape_5.setTransform(213.3,96.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#00CCFF"],[0,1],233.1,44.3,233.1,-75.8).s().p("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");
	this.shape_6.setTransform(213.2,69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,4.2,458.5,308.4);


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


// stage content:
(lib.pre_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3_repeat:504});

	// timeline functions:
	this.frame_0 = function() {
		//nav buttons --------------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmusic',{loop:-1});
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
		
		 window.open ("pre_Scene3a.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pre_Scene2.html","_self");
		}
	}
	this.frame_21 = function() {
		playSound("participialphrasedef");
	}
	this.frame_77 = function() {
		playSound("notethedifference");
	}
	this.frame_113 = function() {
		playSound("participle");
	}
	this.frame_128 = function() {
		playSound("participial");
	}
	this.frame_159 = function() {
		playSound("participialphrases");
	}
	this.frame_250 = function() {
		playSound("bubpushingwithallhismight");
	}
	this.frame_350 = function() {
		playSound("buffycallingotherkids");
	}
	this.frame_455 = function() {
		playSound("comingtotherescue");
	}
	this.frame_512 = function() {
		this.gotoAndPlay("scene3_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(56).call(this.frame_77).wait(36).call(this.frame_113).wait(15).call(this.frame_128).wait(31).call(this.frame_159).wait(91).call(this.frame_250).wait(100).call(this.frame_350).wait(105).call(this.frame_455).wait(57).call(this.frame_512).wait(1));

	// lesson
	this.instance = new lib.PhrasesLesson();
	this.instance.parent = this;
	this.instance.setTransform(273.7,194.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(513));

	// char
	this.instance_1 = new lib.CouchKidsBubPushes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(273.6,200.6,1,1,0,0,0,209,165.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(513));

	// main
	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(63.3,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_2 = new lib.Copyright("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,393.5);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAZQgKgHAAgOQAAgNAIgLQAIgLAOAAQAKAAAHADQAJAFAAAJQAAAGgHAFIgNAGIgTAJQADADAEABQAEACAEAAQAIAAAFgEQAFgCADAAQAGAAAAAGQAAAGgKAEQgIAEgJAAQgNAAgJgHgAgHgNQgEADgCAIIANgGIALgHQgDgCgHAAQgEAAgEAEg");
	this.shape.setTransform(53.3,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAiQgCgCAAgEIgBgTIgBgTIgBgGQgHAEgHAJIgBABIAAASIAAAEIgBAEQABAEgDABQgCACgEAAQgEAAgDgEIgBgKIAAgUIAAgJIAAgJQAAgFACgEQACgFAEAAQADAAADACQADADgBADIAAAFQAJgKAIAAQAJAAADAGQADgDAFgBQAEgCAFAAQAMAAAEAMIACAPIAFAfQAAADgCADQgDACgDAAQgHAAgCgHIgBgRIgCgQQgCgLgDAAIgGADIgGAFIABASIABATQAAAEgBACQgDACgEAAQgCAAgDgCg");
	this.shape_1.setTransform(45.5,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMAdQgIADgHAAQgIAAgGgEQgGgEgBgHQgDgPAAgKQAAgIACgKQABgGAHAAQADAAADACQACACAAADIgBAIIAAAIIAAAOIACAKIADABIACAAQAGAAAIgCIAAgKIgBgJIABgUQABgHAHAAQAEAAACACQADACAAADIgBAVIAAALIAAAMIAAADIAAAEQAAADgCACQgDACgDAAQgFAAgCgEg");
	this.shape_2.setTransform(37.6,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAuQgCgCAAgEIAAhQQAAgDACgCQACgCADAAQAEAAACACQACACAAADIAABNQAAALgIAAQgDAAgCgCg");
	this.shape_3.setTransform(32.8,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAZQgJgIAAgOQgBgMAIgKQAJgMAPAAQALAAAHAJQAGAJAAAMQAAANgHAJQgIALgNAAQgKAAgIgHgAgHgJQgEAGAAAGQAAAHAEAEQADADAEAAQAEAAAEgEQAEgEABgHQABgRgLgBQgGAAgEAHg");
	this.shape_4.setTransform(28,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAqQgHgRgJgfIgEgQQgEgLAAgFQAAgDADgCQACgCADAAQAGAAACAFIACALIAHATIAIAcIANgiIAFgOQADgJAFgEQACgDADAAQAEAAACACQADACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIgFALIgFAMIgQAoIgGAOQgDAEgDAAQgGAAgDgFg");
	this.shape_5.setTransform(21,9.1);

	this.vol_up = new lib.pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(51.8,25.9,1,1,0,0,0,7,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.pos(), 3);

	this.vol_dwn = new lib.neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(21.8,25.9,1,1,0,0,0,7,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.neg(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vol_dwn},{t:this.vol_up},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.instance_2},{t:this.btn_menu},{t:this.btn_goBack}]}).wait(513));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,198.2,532.5,404.8);
// library properties:
lib.properties = {
	id: 'E0456A38055D82438607746DBA72312D',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bubpushingwithallhismight.mp3", id:"bubpushingwithallhismight"},
		{src:"sounds/buffycallingotherkids.mp3", id:"buffycallingotherkids"},
		{src:"sounds/comingtotherescue.mp3", id:"comingtotherescue"},
		{src:"sounds/notethedifference.mp3", id:"notethedifference"},
		{src:"sounds/participial.mp3", id:"participial"},
		{src:"sounds/participialphrasedef.mp3", id:"participialphrasedef"},
		{src:"sounds/participialphrases.mp3", id:"participialphrases"},
		{src:"sounds/participle.mp3", id:"participle"}
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
an.compositions['E0456A38055D82438607746DBA72312D'] = {
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