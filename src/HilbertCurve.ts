class HilbertCurve {

  static rotate(n: number, point: number[], rotateX: number, rotateY: number) {

    if (rotateY !== 0) return point;
      
    if (rotateX === 1) point = [(n - 1) - point[0], (n - 1) - point[1]];

    // point[0] = (n - 1) - point[0];
    // point[1] = (n - 1) - point[1];
    
    point = [point[1], point[0]];
    // point = [point[1], t];
    // point[0] = point[1];
    // point[1] = t;
    
		return point;
  }  

  static numberBoolean(b: boolean): number {
    return b ? 1 : 0;
  } 

  // todo: refacor
  public static pointToDistance(point: number[], order: number): number {
    let 
      rotateX, // number | boolean
      rotateY, // number | boolean
      distance:number = 0; 
    
    for (var s = order / 2; s >= 1; s /= 2) {

      rotateX = (point[0] & s) > 0;
      rotateY = (point[1] & s) > 0;


      distance += s * s * ((3 * rotateX) ^ rotateY);

      this.rotate(s, point, rotateX, rotateY);
    }
    return distance;
  }
    

  public static distanceToPoint(order: number, distance: number): Array<number> {
    let 
      rotateX: number, // for power of 
      rotateY: number,  // for power of 
      s: number, 
      t: number, 
      x: number, 
      y: number;

    t = distance;

    x = y = 0;
  
    for (s = 1; s < order; s *= 2) {      

      rotateX = 1 & (t / 2);
			rotateY = 1 & (t ^ rotateX);

      let point = this.rotate(s, [x, y], rotateX, rotateY);

      [x, y] = [point[0], point[1]]; 
      // x = point[0];
			// y = point[1];

      [x, y] = [x + s * rotateX, y + s * rotateY]
			// x = x + s * rotateX;
			// y = y + s * rotateY;

      t /= 4;
    }
    return [x, y];  
  }
  
}
export { HilbertCurve }
export default { HilbertCurve }