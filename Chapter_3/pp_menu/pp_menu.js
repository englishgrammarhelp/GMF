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


(lib.letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAhIgEgUIgRADIgQAEIgLAYQgCADgDABQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgDAKgUIgBgEQAAgFAGgCIASgeQAOgYAEAAQAFAAACAHIAEAVIAJArIAEAKIACAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAWgEIgFgXg");
	this.shape.setTransform(4.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAxQgCgDAAgDIAAgSIABgZIABgaIABgSQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAJgCALAAQAKAAAKAHQAMAJAAANQAAAQgNAIQAKAFAFAFQAEAEAAAGQAAAIgIAHQgGAFgGADQgNAFgXAAQgCAAgDgCgAgTAZIAAANQARAAAKgEIAIgGQAEgDAAgCQAAgDgIgDIgMgFIgGgBIgCAAIgDAAIgHAAIgBAOgAgQglIAAALIgBAZIAJAAQAJAAAGgGQAHgFAAgJQAAgGgHgFQgHgGgGAAIgKABg");
	this.shape_1.setTransform(4.2,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAnQgIgKgBgNQAAgUASgYQAQgSAOAAIAFAAIAFABQADgDADAAQAEAAABAFIABANQABADgCACQgCADgDAAQgEgBgCgFIgEgEIgGgBQgJAAgLAOQgPATABAQQAAAIAEAGQAGAGAIAAQAFAAAHgDIALgIQADgDACABQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgRAPgQAAQgNAAgKgKg");
	this.shape_2.setTransform(3.9,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAzQgHgCgEgCIgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgUIABgUIgBgVIAAgWQAAgDADgDQACgDACAAQADAAAIAFIALAFQARAGANANQAPAPAAARQAAALgFAKQgGAKgIAGQgKAHgRAAIgLgCgAgXgRIAAASIgBAiIABABQAGAEAJAAQANAAAGgFQAGgEAEgHQAEgHAAgIQAAgRgUgMQgFgFgYgKg");
	this.shape_3.setTransform(4.7,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAxQgGgGAAgUIAAgJIABgKIgBgEIABgCIABgcIAAgGIgBgHQAAgIAHAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAPgDIALgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgLgDgKAAIgKABIgOADIABAGIgBAZIAbgDIAPgBQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAFgHABIgPABIgcADIAAAIIgBAIQAAAOACACQACACAIAAIAMAAIALAAIAEgBIAEAAQAGAAABAGQAAAGgGABQgGABgTAAQgUAAgFgFg");
	this.shape_4.setTransform(4.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA0QAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIABgmIAAgkIAAgIIAAgJQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEACIAOgCIAKgBQAIAAAJACQANADAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAIgCAAQgIgDgNAAIgJABIgMABIAAAcQAMgDAGAAIATABQAGAAAAAGQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgKgBIgJAAQgEAAgPADIAAAsQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_5.setTransform(4.1,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfArQgJgJABgRQgBgRAJgQQAHgRANgLQAHgHAJAAQAFAAAJAEQAMAEAAAFQAAADgBADQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgEgCQgKgGgGAAQgFAAgEAFIgIAJQgPATAAAWQABAMADAEQAEAGAKAAQALAAAIgHQAKgIADgOQgSABgMAFIgCABQgDAAgCgCQgCgBAAgEQAAgDAEgCQAMgHAiAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQgBAEgDACQgEATgMANQgNALgRAAQgPAAgHgJg");
	this.shape_6.setTransform(4.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAyQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIACgUIABgUIgBgJIAAgLIABgPIAAgPQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBAPIgBAQIABAOIAagDQAQgDALgBIABgbIACgKQACgHAEABIAEABQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAIgBADIgBAIIAAAFIAAAGIgBATIgBASIABAPIABAOQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgOIgBgPIAAgJQgKAAgQADIgaAFIgBARIgBAPQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_7.setTransform(4.9,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAvQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAOgCIAAgMIAAgKIAAgLIABgkIgIABIgIAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQgBgCAAgDQAAgGAFAAIAUgBQALAAATADQAGABAAAGQAAADgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgKgBIgKgBIgBAiIAAALIAAALIAAALIAUAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgLAAIgLAAIgLABIgNACQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_8.setTransform(3.4,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAsQgMgJAAgMQAAgHAGAAQAHAAAAAHQAAAGAHAFQAHAFAHAAQAEAAACggIABglIgBgHIgDAAIgHAAIgHAAQgDAAgCgCQgCgCAAgDQAAgGAJAAIAGAAIAGAAIAMAAIAMgBQAOAAAAAHQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgCACgCAAIgEAAIgEgBIgIAAIABAIQAAAugHAWQgEAOgJAAQgLAAgLgIg");
	this.shape_9.setTransform(4.2,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// circle
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAxg+QAVAaAAAkQAAAlgVAaQgUAagdAAQgcAAgUgaQgVgaABglQgBgkAVgaQAUgaAcAAQAdAAAUAag");
	this.shape_10.setTransform(4,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,15.9,22.5);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


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


(lib.btn_pro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBEQgFgFAAgGQAAgOgDgaQgDgZAAgNQAAgHgBgFQgOAIgNASIgCADIgBAkIAAAJIAAAIQAAAGgFAEQgFADgHAAQgKAAgEgIQgCgGAAgNIAAgrIAAgRIgBgRQAAgKAEgJQAEgKAJAAQAGAAAFAFQAGAFAAAGIgBAKQARgUAQAAQASAAAIANQAHgGAIgDQAJgDAKAAQAXAAAIAWIAFAgQAEASAFAsQAAAHgFAEQgFAFgHAAQgNAAgCgOQgDgMgCgWIgEghQgDgVgFAAQgCAAgKAGQgKAFgEAEQAAANADAYQADAaAAANQAAAGgEAFQgFAEgHAAQgGAAgEgEg");
	this.shape.setTransform(212,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA9QgFgEAAgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAZAAQAXAAAAAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgFAEQgEAFgHAAQgIAAgDgFg");
	this.shape_1.setTransform(196.9,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_2.setTransform(184.5,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BeQgDgEAAgIIAAiFIAAgNIAAgPQAAgGAEgFQAFgFAHABQAFAAADABIAZgDIATgCQANABAVAFQAaAHgBAJQABAHgGAFQgEAEgHAAIgFgBQgQgEgWAAIgPABIgVACIAAAnQASgEAMgBQAUAAARACQAPACAAAPQAAAGgFAEQgFAEgGABIgTgBIgRgBQgJgBgVAGIAABJQAAAIgFAEQgFAEgIAAQgGAAgFgEg");
	this.shape_3.setTransform(171.3,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAdAAQATAAAOAGQASAKAAARQAAANgOALQgHAEgUAIIgnARQAHAGAHADQAIAEAKAAQAPAAALgHQAKgGAGAAQAMAAAAAMQAAANgTAJQgRAHgSAAQgcAAgRgOgAgQgbQgHAHgFAPIAagMQAQgHAJgGQgIgFgMABQgKgBgJAIg");
	this.shape_4.setTransform(146.5,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRA0IgnhdIgBgHQAAgGAFgFQAFgEAHAAQAKAAAEAJQAHAOATA0IAQgoIAKgZQAGgKAJABQAGgBAGAFQAFAEAAAGQAAAFgTAqIgYA0QgBAFgFAEQgEAEgFAAQgLAAgGgMg");
	this.shape_5.setTransform(134.4,34.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAEgGAAQgHAAgFgEgAgKg7QgGgFAAgHQAAgIAGgEQAFgGAHAAQAHAAAGAGQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_6.setTransform(125.2,31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAALAEQAKADAGAAQAWAAAAgKQAAgFgQgIQgYgLgGgDQgRgMAAgQQAAgYAZgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgLAAQgMAAgCgKIgKAAQgcgBABAJQgBAEARAHQAXAMAIAFQARAMAAAPQAAAUgTALQgPAIgVAAQgPAAgNgFg");
	this.shape_7.setTransform(115.6,34.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA9QgSgGAAgNQAAgMAOAAQAFAAAKAEQALADAGAAQAWAAAAgKQAAgFgQgIQgYgLgGgDQgRgMAAgQQAAgYAZgIQAPgFAcAAQANAAAFADQAIAEAAALQAAAVgLAAQgMAAgDgKIgJAAQgcgBABAJQgBAEARAHQAXAMAIAFQARAMAAAPQAAAUgTALQgPAIgVAAQgPAAgNgFg");
	this.shape_8.setTransform(103.9,34.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoAyQgTgOAAgbQAAgdAPgUQASgXAcAAQAVAAANAGQASAKAAARQAAANgPALQgGAEgUAIIgmARQAFAGAIADQAIAEAKAAQAPAAALgHQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgSAAQgcAAgSgOgAgQgbQgHAHgEAPIAagMQAOgHAKgGQgIgFgNABQgJgBgJAIg");
	this.shape_9.setTransform(91.3,34.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQATgQAaAAQAYAAgBAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgEAEQgFAFgHAAQgHAAgFgFg");
	this.shape_10.setTransform(79.2,34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7BLQAAgHADgDQAFgEAHgBIAOADQAKACAIAAQAQAAAJgLQAIgLABgWQgFAGgIADQgIADgHAAQgYAAgOgPQgPgPAAgXQAAggATgTQAVgVAhAAQALAAAIADQAHADAGAFQAOABAAARQAAAHgCAOQgFAbgBAeQgBAmgLARQgQAXgmAAQgtAAAAgSgAgRg0QgKAMAAASQAAAOAFAIQAGAFAKAAQAIAAAKgKQAKgKABgKIAFgjIgIgEQgEgCgEAAQgSAAgLAOg");
	this.shape_11.setTransform(66.7,37.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_12.setTransform(54.1,34.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtA9QgEgEgBgHIAAhMIABgKIAAgLQAAgHAEgEQAEgFAHAAQANAAADAOQAUgQAZAAQAXAAABAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgFAEQgEAFgIAAQgGAAgEgFg");
	this.shape_13.setTransform(42.4,34.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BZQgFgFAAgGIAAghQAAgRADgkIACg2QAAgeARABIALgBIARAAQAWgBAUAPQAXARAAAYQAAAegYAQQgVAQgcAAIgKAAIgBA1QAAAGgEAFQgFAFgGAAQgHAAgEgFgAgVguIgCApIAIABQARAAAMgIQANgKAAgPQAAgKgMgIQgMgHgMgBIgHABIgFAAIAAAQg");
	this.shape_14.setTransform(30,31.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5.1,1,1).p("Ay5kwMAlzAAAIAAJhMglzAAAg");
	this.shape_15.setTransform(121,30.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099FF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_16.setTransform(121,30.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_17.setTransform(121,30.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CCFF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_18.setTransform(121,30.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_19.setTransform(121,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_19},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,247,66);


(lib.btn_per = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBEQgFgFAAgGQAAgOgDgaQgDgZAAgNQAAgHgBgFQgOAIgNASIgCADIgBAkIAAAJIAAAIQAAAGgFAEQgFADgHAAQgKAAgEgIQgCgGAAgNIAAgrIAAgRIgBgRQAAgKAEgJQAEgKAJAAQAGAAAFAFQAGAFAAAGIgBAKQARgUAQAAQASAAAIANQAHgGAIgDQAJgDAKAAQAXAAAIAWIAFAgQAEASAFAsQAAAHgFAEQgFAFgHAAQgNAAgCgOQgDgMgCgWIgEghQgDgVgFAAQgCAAgKAGQgKAFgEAEQAAANADAYQADAaAAANQAAAGgEAFQgFAEgHAAQgGAAgEgEg");
	this.shape.setTransform(189.2,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQATgQAaAAQAYAAgBAfIAAAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgGAAgFgFg");
	this.shape_1.setTransform(174.1,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmAxQgRgQgBgbQgBgZAPgUQASgYAfAAQAXAAAOASQANARAAAZQAAAbgPATQgQAVgbAAQgVAAgQgPgAgQgTQgHALAAAOQAAAOAIAHQAGAGAIAAQAKAAAHgHQAJgIAAgNQACglgVAAQgOAAgIANg");
	this.shape_2.setTransform(161.7,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BeQgFgEAAgIIAAiFIAAgNIABgPQAAgGAFgFQAEgFAHABQAEAAAEABIAZgDIATgCQAOABAUAFQAaAHAAAJQgBAHgFAFQgEAEgGAAIgHgBQgPgEgWAAIgPABIgVACIAAAnQASgEALgBQAWAAAPACQAQACAAAPQAAAGgFAEQgFAEgHABIgSgBIgSgBQgIgBgVAGIAABJQAAAIgFAEQgGAEgGAAQgHAAgEgEg");
	this.shape_3.setTransform(148.5,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBRQgFgDAAgHIAAgMIAAgOIgBg7IgXgCQgOgBAAgOQAAgGAEgGQAFgEAHAAIAUACIgBgNIAAgMQAAgGAEgFQAGgDAGAAQAQAAAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgEAFgIgBIgFAAIgGAAIgLABIACA9IAAAGIABAHQgBAbgQAAQgGgBgFgEg");
	this.shape_4.setTransform(125,32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAzQgTgPAAgZQAAgXARgYQATgdAYAAQAMAAAQAGQAUAJAAAKQAAAGgEAEQgEAFgHAAQgFAAgHgGQgHgFgOAAQgIAAgKASQgLARAAAMQAAAMAJAHQAJAGAMABQAIAAALgHQAMgFADgBQAGAAAFAFQAFAFAAAFQAAAKgVAJQgRAIgMAAQgZAAgRgPg");
	this.shape_5.setTransform(112.9,34.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAcAAQAVAAANAGQASAKAAARQAAANgOALQgHAEgUAIIgnARQAHAGAHADQAIAEAKAAQAPAAALgHQAKgGAFAAQANAAAAAMQAAANgTAJQgRAHgSAAQgbAAgSgOgAgQgbQgHAHgFAPIAbgMQAPgHAJgGQgIgFgNABQgJgBgJAIg");
	this.shape_6.setTransform(100.1,34.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWBjQgEgEAAgHIAAgDQADgRgBgOIAAg6IgHABIgHABQgHAAgFgFQgEgEAAgHQAAgLALgDQAFgCAPAAIACgNQADgaALgNQANgQAcAAQAWAAgBAPQAAAPgTAAQgOAAgHAKQgFAIgBAQIgBADIAWgCQAXAAAAAPQgBAQgXgBIgWABIAAAfIAAAfQAAAWgDAMQgDANgLAAQgGAAgGgEg");
	this.shape_7.setTransform(87.3,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAHAAQANAAADAOQATgQAaAAQAXAAABAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgGAAgFgFg");
	this.shape_8.setTransform(75.8,34.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAdAAQATAAAOAGQASAKAAARQAAANgOALQgHAEgUAIIgnARQAHAGAHADQAIAEAKAAQAPAAALgHQAKgGAGAAQAMAAAAAMQAAANgTAJQgRAHgSAAQgcAAgRgOgAgPgbQgIAHgFAPIAagMQAQgHAJgGQgIgFgMABQgLgBgHAIg");
	this.shape_9.setTransform(62.9,34.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0BZQgFgFAAgGIAAghQAAgRADgkIACg2QAAgeARABIALgBIARAAQAWgBAUAPQAXARAAAYQAAAegYAQQgVAQgcAAIgKAAIgBA1QAAAGgEAFQgFAFgGAAQgHAAgEgFgAgVguIgCApIAIABQARAAAMgIQANgKAAgPQAAgKgMgIQgMgHgMgBIgHABIgFAAIAAAQg");
	this.shape_10.setTransform(50,31.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5.1,1,1).p("Ay5kwMAlzAAAIAAJhMglzAAAg");
	this.shape_11.setTransform(121,30.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_12.setTransform(121,30.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_13.setTransform(121,30.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_14.setTransform(121,30.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ay5ExIAAphMAlzAAAIAAJhg");
	this.shape_15.setTransform(121,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_14},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_15},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,247,66);


(lib.BkScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AerArQgEABgEAAQgEABgFAAQgPACgPABQgQABgRABQgKAJgRABQgKAAgGgMQgWgFgWACQgiADgLgZQAAAFgKALQgQAMgTgBQgngBgVgXQgjACgjgBQgNAAgCgJQAAgBAAgBQgLAIgPACQgMACgMABQgRACgSgNQgFAHgPABQgSACgRACQgaADgUgVQgTgEgUABQgiADgfgLQgFgBgPACQgiAEgagHQgYAHgagDQgKAAgKgCQgMgCACgZQACACANgCQAPgFAPgBQBGgEBGAEQAFABAMgLQAHgYAZAHQAcAHAOAUQAEAGAMACQAMgMAZgIQAdANARAZQACgDAJgJQAegPAcAWQAGAFATgCQAIgDAIgCQAMgDANgCQAsgEApAPQAKADAIgDQAZgJAgAGQAVAEAOAIQAWAMAXgOQAWgFAIANQACAFAJALQADAHAQgCAYZAQQAMgJAHgPQgWAGADASgAPFgdQAVAJAUAPQANgRAVgKQAIgEAIgCQAggHAXATQgJAagVAFQgVAGgdgFQgZAFgegDQgOgBACgZQAAgFABgGgAsIgBQARgLARgMQANgKAQgGQAOgFAVANQAhAJArgGQAMgSAaACQANABAMACQAaAEAZAKQAMAEALAGQANAHATgDQAdgHAeAAQBJAABVAHQAIAHAJACQAMACAIgJQAYgbAvAbQARAEAJgGQAGgFAHgDQANgEANgDQAhgGAeALQAIADAFAGQAFAGAKAJQAbgPAtABQAIADAIADQAKAEAHAFQAIAGAPgEQAfgeAsABQAKAAAIAEQAYAKAcgDQBCgGBIARQAUgKAVgNQAigWAqAIQAKACAHAGQAOANAOgRQA5gIAwAbQAHAEAIAAQASABARgMQAPgKAUACQAqAEApAUQAZgUAuAAAPEgSQgDASgJAEQgLAGgLACQgbAGgegDQgZAYgwgIQgGgNgIgFQACANgNAFQgYAKgngGQgEgCgRgIQgZgCgngDQgJgEgZACQAAAegbgFQgNgDgMAAQgSAAgKgOQgLgOgHAEQgYARgeACQgYACAEgYQgMADgJAFQgHAEgGAFQgNALgYgHQgYgGgKAUQgFAFgHAIQgQgDgSAAQgCAAgDAAQgEAAgMgCQgDAAgCAAQgIgIgHAHIgBAAIAAAAQgJgTgNABQgSABgRAMQgVgHAAgUQgWgFgXAAQgbAAgcgCQhHgGhcAAQgOgGgEAIQgGAMgWAEQhIgFhJAAQgBABgCAAQgDAAgDgBQgRgBgPgOQgVgFgXAAQhhAAhnAAQAAgQgXAEQgWASgjgCQgCgJgPACQgMANgVAOQgWgOgXgCQgCgBgKgLA7tAUQAEgHAQAHQAAAAAAAAQAEADAPABQAdACARgHQAygTBCAAQAJgJAOgDQAIgCAHAAQBMAABTAFQAlgYA2ABQANABAMACQANADANADQARAEAPAHQAtASAvADQAiACAfgJQBLgTBLgTQANgDALgFQALgFAPAFQAIADAEAHQAGAIAEAJQADAIAAAIQABAEABAEQgaAAgagBQgYgBgaAKQglADgvACQgMAGgOAAQgWACgcgDQgegCgeAAQgPAAgPgCQgdgEgfACQgjADgegHQgKgCgDgGQgGgKgQALQgUAPgjgIQgygKg3ADQgFAAgKAKQgCAQgSACQgPACgPABQgKABgKABQhDAChEAAQgKAAgJACQgaAFgogEQgqACgvgCQgjAJgsAGQAFgagFgDAsVAGQAFgDAEgDQACAAACgBQAAAAAAgBIAAABIAAAAQgDAJgKgCgAsxAHQAOAAAOgBIAAAAQgHAEgHAEQgKAAgEgHg");
	this.shape.setTransform(-48.6,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EgmPgB4IAAETIAAAcIAAAdIAAU8MBMfAAAIAA1JIAAheIAAjhIAA2XMhMfAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.3,1,1).p("AZOobQABAAACAAQAOgBAPAAQAkABAlgBQArAFAtAAQAUABAUgBIABAAQA+gBA/AAQBCgBA/AEQBBAEBAACQAsABCtgPAZOobIgKAAQgkACgjAEAZOobIg6AAQgKAAgKAAUg62AARgAVgABQgIgBi8gSAbYodQALABALABIABAAQARACAPACQAMADAMADAa3ocQAQAAARgBQALAAALAAIABAAQAlgCAjgCQAbgBAagCAdjmnQAaAFAQAOQgHgcgJgFQgRgEgJASgEAjlgD/QABAJgBAGQgDgCgDgDEAjlgDwQgCAFgEACQgyAcgtgeQgFAOgMAFQhJAegTg1QgsAggTgqQgCgFgCgHEAmQgE8QiEAFgbAJQgCABgCABQgBgBgBgBQgNgGgWgRQgZAbgbgHEAgngFTIAAAAQAAgBAAgBQAGgqAgAvQAIANAAAJQAAATAYgGQAVgEALACQADABAEgDQgDgBgDgBQgEgBgFgDEAgngFTQgBAJAAAMAfLkfQAKg0A2ATQAXAIAFgbEAgwgGXQgWAGgFARQALgPAQgIgEAgVgGAQAoAGgNgdAWHipQADABADACQAvAVA+ALQA8ALA+gDQBCgDA8gEQAcgCAcAAQAYgBAXABQAmAEAoAHQA1AJA3APQA7AQAmgCQAmgCA/gVQA+gWB5hbQijgMgIgGAcikzQAegjAqAMQAMADAEASQAIApAXgNQAEgDAGgFQABgBABAAQAQgHAWAKQACABADABAc+mNQgbgKgdAIQAPAUAZAIQAGgNAKgNgAdskCQAEALgFAJQAAAAgBgBQgFgBgGgBAdrjuQgBACgCACQgfAngvgiQgBABgBAAQgLAFgQALQgsgHAOg4QgGAEgHADQgzAZgwgfQgBAAAAgBQgsAYg2gUQgdASgpAIQAAAAAAABQgEAfgxgFQgBACgBABAfJkJQAAgMACgKAeNkJQAFgKAHgGAfPj3QguAWg2gNAaCmNQBMAKgXgNQgggjgVAmgAY5kqQARgqA9AfQABABABAAQABACACACQADAFAGADQgJADgHAFAbgkfQgDABgCACAaVkoQAfgKAtAQQABABABAAQAAAAABgBQAQgMABgZQAbAGASAOQgGAHgGAJAbgkfQAAAIgBAEQADgBADgCAbjkhQgCABgBABAcajlQADgBADgCAcgItQAugFAhgRAa6JbQA2gIAtgCAXQkeQABAAAAgBQAigcAyALQALADAJADAXFkTQAFgGAGgFAXFj/QABAFAAAFAWQjaQAAAAABAAQADgEgCgHAWgkeQAWgFAaAFAYUkUQgEADgEACQgEgCgEgCAY1kgQACgFACgFQADACADACAQ/ItQARgCAQAEAN8IjQAFgBAEAAQgFAUACAbIAAAAQgfAFgaAKQgDgDgDgCAO4JFQARgLAYgGIAAAAIAAABQgKARgHATQgEgDgEgCATuJyQANgDARgEAVOJrQAMgFASgBASEJhQAaAIAPgOAPQJZQgBACgBADAPQJZQARAIAVAIQgbASgjgGQAAAAgBAAQgVAhguANAOqJyQAHACAGABAOxJKQADgDAEgCAM9JlQAGgDAGgCQAWAOAgAMQgGAUgFAVQAAABAAAAQgBAFgBAFAOGJ8QgEgBgDgBQABgEACgEAsYkTQDhAGD9AVQAdACAdACIAAAAQAKABAKABQALABALABQERAZEyAqQFPiQLLCUAOFIiQApAAAKAjA5AqoQgCgCgCgDQgBADAAADAsekTQoigNl4BMQoPgDgDABQgHABgIABQgBAAi1ADEgmPgEKQB1gKBIgCQAKAAAJgB");
	this.shape_2.setTransform(0,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("AgfAXQgggLgWgOQAagKAegFIABAAQgCgaAFgVQAnABAKAiIgHAGIAHgGQASgLAYgFIAAAAQgKARgHATIgJgEIAJAEQARAJAUAGQgaATgjgGIgBgBIgNgDIANADQgVAigtANQAEgWAHgUgAgfAXIAHACIgHgCIACgIIgCAIIAAAAgAAvgDIACgGIgCAGgAAYASIAAAAg");
	this.shape_3.setTransform(92.7,103.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(99.3,98.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FEE1A3","#FFCC33"],[0,1],0,-57.3,0,53).s().p("EgmPALAIAA07IC2gDIAPgCIISACQF4hMIiANIAGAAQDhAGD9AVIA6AEIAAAAIAAABIAAgBIAAABIAAgBIAUACIAWACIgFAAIgRgCIARACIAFAAQERAZEyAqQFPiRLLCVIAAAAIAGADQAvAVA+ALQA8AKA+gCIB+gHIA4gCIAvAAQAmADAoAIQA1AJA3APQA7AQAmgCQAmgCA/gVQA+gWB5hbIAAVIgAN0D6IgCAJIACgJIAAgBIAAABgANJC1QAWAPAgAMQgGATgFAWQAugNAVghIABAAQAjAGAbgSQgVgIgRgJQAHgSAKgSIAAAAIAAAAQgYAFgRAMQgKgjgpAAQgFAUACAbIAAAAQgfAEgaAKgATuDIIAegHIgeAHgAVODBQAMgFASgCQgSACgMAFgAM9C6IAMgFIgMAFgASWC6QANAAAJgIIABgBIgBABQgJAIgNAAIgBAAIAAAAQgGAAgHgCIgEgBIAEABQAHACAGAAIAAAAIABAAgANJC1IgGgEIAGAEgAa6CwQA2gHAtgCQgtACg2AHgARgCFQgMgDgMAAIAAAAIgBAAIgEAAIgCAAIgBAAIgBAAIABAAIABAAIACAAIAEAAIABAAIAAAAQAMAAAMADIAAAAgAcgCCQAugEAhgRQghARguAEgAN8B4IAJAAIgJAAg");
	this.shape_5.setTransform(0,84.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("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");
	this.shape_6.setTransform(0,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#013FA3").s().p("AgrgBIAhgBIAVACIABAAIAgADQgsgBgrgDg");
	this.shape_7.setTransform(176.2,-11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#0066FF","#000099"],[0,1],183.3,20.4,183.3,-20.4).s().p("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");
	this.shape_8.setTransform(0,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#DA9836","#784D22"],[0,1],160.7,-0.8,160.7,59.7).s().p("AAAgCIADAEIgFABIACgFg");
	this.shape_9.setTransform(-160.4,-26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#00CCFF","#D5FFFF"],[0,1],0,-65.6,0,67).s().p("EgjLALUIjEgSIAA2WMBMfAAAIAAWWQitAQgsgCQhAgChBgEQg/gDhCAAIh9ACIgBAAIgoAAIgggEIgBAAIgWgCIAWgBIABAAIBIgDIA1gEIg1AEIhIADIgBAAIgWABIghABIhJAAIgdAAIgDAAIg6AAIgUAAUg2oAARgENAAAIgWgBgA5FI5IAFgBIgEgFIgBAGgAYALGIBEgCQgkACgjAFIADgFg");
	this.shape_10.setTransform(0,-82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.3,-156.6,492.7,313.3);


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
(lib.pp_menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("mo_funky");
		playSound("mo_funky",-1);
		this.btn_per.addEventListener("click", openPP.bind(this));
		this.btn_pro.addEventListener("click", openPro.bind(this));
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openPP(){
		
		 window.open ("../pp/pp_Scene1.html","_self");
		}
		
		function openPro(){
		
		 window.open ("../pro/pro_Scene1.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(198));

	// content
	this.btn_per = new lib.btn_per();
	this.btn_per.parent = this;
	this.btn_per.setTransform(271,133.5,1,1,0,0,0,121,30.5);
	new cjs.ButtonHelper(this.btn_per, 0, 1, 2, false, new lib.btn_per(), 3);

	this.btn_pro = new lib.btn_pro();
	this.btn_pro.parent = this;
	this.btn_pro.setTransform(271,231.5,1,1,0,0,0,121,30.5);
	new cjs.ButtonHelper(this.btn_pro, 0, 1, 2, false, new lib.btn_pro(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_pro},{t:this.btn_per}]}).wait(198));

	// main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance = new lib.BkScene("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275.1,193.6,1.041,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_menu}]}).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293.7,201.8,527.6,348.5);
// library properties:
lib.properties = {
	id: 'F4CDDC6C994CB04C82740422E6E3EAF3',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/afterifusehadandnotwouldhave.mp3", id:"afterifusehadandnotwouldhave"},
		{src:"sounds/beforeyoufinishthisprogram.mp3", id:"beforeyoufinishthisprogram"},
		{src:"sounds/boo.mp3", id:"boo"},
		{src:"sounds/futureperfecttense.mp3", id:"futureperfecttense"},
		{src:"sounds/indescribingtwopastactions.mp3", id:"indescribingtwopastactions"},
		{src:"sounds/mo_funky.mp3", id:"mo_funky"},
		{src:"sounds/mostcommonverberrorsoccur.mp3", id:"mostcommonverberrorsoccur"},
		{src:"sounds/ohbaby.mp3", id:"ohbaby"},
		{src:"sounds/pastperfecttense.mp3", id:"pastperfecttense"},
		{src:"sounds/perc_techno.mp3", id:"perc_techno"},
		{src:"sounds/perfectformoftheverb.mp3", id:"perfectformoftheverb"},
		{src:"sounds/presentperfecttense.mp3", id:"presentperfecttense"},
		{src:"sounds/real_disco.mp3", id:"real_disco"},
		{src:"sounds/relax.mp3", id:"relax"},
		{src:"sounds/theformulausetheappropriate.mp3", id:"theformulausetheappropriate"},
		{src:"sounds/thesatrequiresaknowledge.mp3", id:"thesatrequiresaknowledge"},
		{src:"sounds/theverbformindicatingbefore.mp3", id:"theverbformindicatingbefore"},
		{src:"sounds/theverbformindicatingpreceded.mp3", id:"theverbformindicatingpreceded"},
		{src:"sounds/theverbindicatingthatanaction.mp3", id:"theverbindicatingthatanaction"},
		{src:"sounds/thewordperfectmeanscomplete.mp3", id:"thewordperfectmeanscomplete"},
		{src:"sounds/thissoundsmoredifficultthanitis.mp3", id:"thissoundsmoredifficultthanitis"},
		{src:"sounds/UnderstandingthePerfectFormoftheVerb.mp3", id:"UnderstandingthePerfectFormoftheVerb"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/yeah_calm.mp3", id:"yeah_calm"},
		{src:"sounds/youhadlearnedtheperfecttense.mp3", id:"youhadlearnedtheperfecttense"},
		{src:"sounds/youhavelearnedtheperfectform.mp3", id:"youhavelearnedtheperfectform"}
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
an.compositions['F4CDDC6C994CB04C82740422E6E3EAF3'] = {
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