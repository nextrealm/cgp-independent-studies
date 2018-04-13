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