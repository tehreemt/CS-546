//Final implementation of geometry.js
function checkLengthForPrism(length){
    if (length >0 && typeof length =='number'){
    return length;
    }
    else throw "Invalid input for Length! Input number greater than 0 expected!";
}

function checkWidthForPrism(width){
    if (width >0 && typeof width =='number'){
        return width;
    }
    else throw "Invalid input for Width! Width should be a number greater than 0!";
}

function checkHeightForPrism(height){
    if (height >0 && typeof height =='number'){
    return height;
    }
    else throw "Invalid input for Height! Expected number greater than 0!";
}

function volumeOfRectangularPrism(length, width, height){
    checkLengthForPrism(length);
    checkWidthForPrism(width);
    checkHeightForPrism(height);
    volumeRectanglePrism=length*width*height;
    return volumeRectanglePrism;
}
/*
function checkLengthForPrismArea(length){
    if (length >-1 && typeof length =='number'){
    return length;
    }
    else throw "Invalid input for Length!";
}
function checkWidthForPrismArea(width){
    if (width >-1 && typeof width =='number'){
    return width;
    }
    else throw "Invalid input for Width!";
}
function checkHeightForPrismArea(height){
    if (height >-1 && typeof height =='number'){
    return height;
    }
    else throw "Invalid input for Height!";
}
*/
function surfaceAreaOfRectangularPrism(length, width, height){
    checkLengthForPrism(length);
    checkWidthForPrism(width);
    checkHeightForPrism(height);
    surfaceAreaRectangle=2*(length*width+width*height+length*height);
    return surfaceAreaRectangle;

}

function checkInputForSphere(radius){
    if (radius>0 && typeof radius=='number'){
        return radius;
    }
    else throw "Invalid Input for Radius! Input should be a number greater than 0!";
}
function volumeOfSphere(radius){
    checkInputForSphere(radius);
    volumeSphere=(4/3)*Math.PI*radius*radius*radius;
    return volumeSphere;
}

function surfaceAreaOfSphere(radius){
    checkInputForSphere(radius);
    surfaceAreaSphere= 4*Math.PI*radius*radius;
    return surfaceAreaSphere;
}

module.exports={volumeOfRectangularPrism, surfaceAreaOfRectangularPrism, volumeOfSphere, surfaceAreaOfSphere}