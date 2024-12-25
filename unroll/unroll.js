function unroll(squareArray) {

    let arrrayOfSquare = [];
    let top = 0;
    let left = 0;
    let right = squareArray[0].length - 1;
    let bottom = squareArray.length - 1;



    while (top <= bottom && left <= right) {
       
        for (let i = left; i <= right; i++) {
          arrrayOfSquare.push(squareArray[top][i]);
        }
        top++;
    
      
        for (let i = top; i <= bottom; i++) {
          arrrayOfSquare.push(squareArray[i][right]);
        }
        right--;
    
        if (top <= bottom) {
          for (let i = right; i >= left; i--) {
            arrrayOfSquare.push(squareArray[bottom][i]);
          }
          bottom--;
        }
    
       
        if (left <= right) {
          for (let i = bottom; i >= top; i--) {
            arrrayOfSquare.push(squareArray[i][left]);
          }
          left++;
        }
      }
    
      return arrrayOfSquare;



    

}

module.exports = unroll;











 