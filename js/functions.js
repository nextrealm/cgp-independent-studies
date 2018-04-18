function cartesianToIsometric(x, y){
var tempPt={'x': 0, 'y': 0};
tempPt.x=x-y;
tempPt.y=(x+y)/2;
return (tempPt);
}

function isometricToCartesian(x, y){
var tempPt={'x': 0, 'y': 0};
tempPt.x=(2*y+x)/2;
tempPt.y=(2*y-x)/2;
return (tempPt);
}

function getTileCoordinates(x, y, tileHeight){
var tempPt={'x': 0, 'y': 0};
tempPt.x=Math.floor(x/tileHeight);
tempPt.y=Math.floor(y/tileHeight);
return(tempPt);
}

Number.prototype.padLeft = function(len,chr){
	var self = Math.abs(this)+'';
	return (this<0 && '-' || '')+(String(Math.pow(10,(len || 2)-self.length)).slice(1).replace(/0/g,chr||'0')+self);
}