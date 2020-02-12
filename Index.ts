import { HilbertCurve } from "./src/HilbertCurve";

const hilbertContainer: HTMLElement = document.getElementById("hilbertContainer");
const hilbertOrder: HTMLInputElement = <HTMLInputElement>document.getElementById("hilbertOrder");
const hilbertOrderValue: HTMLElement = document.getElementById("hilbertOrderValue");
const hilbertDisplayPoints: HTMLInputElement = <HTMLInputElement>document.getElementById("hilbertDisplayPoints");
const hilbertDisplayPointsValue: HTMLElement = document.getElementById("hilbertDisplayPointsValue");
const hilbertCapacityValue: HTMLElement = document.getElementById("hilbertCapacityValue");

const 
  SVGNS = "http://www.w3.org/2000/svg",
  SVG = "svg",
  SVGSIZE_VALUE = "320",
  PX = "px",
  VIEWBOX = "viewBox",
  VIEWBOX_VALUE = `0 0 ${SVGSIZE_VALUE} ${SVGSIZE_VALUE}`,
  PATH = "path",
  PATHM = "M ",
  PATHD = "d",
  FILL = "fill",
  FILL_VALUE = "transparent",
  STROKE = "stroke",
  STROKE_DEFAULT = "gray",
  STROKEWIDTH = "stroke-width",
  STROKEWIDTH_DEFAULT = "1px";
  
const hilbertPath = document.createElementNS(SVGNS, PATH);
hilbertPath.setAttributeNS(null, STROKE, STROKE_DEFAULT);
hilbertPath.setAttributeNS(null, STROKEWIDTH, STROKEWIDTH_DEFAULT);
hilbertPath.setAttributeNS(null, FILL, FILL_VALUE);

const hilbertSvg = document.createElementNS(SVGNS, SVG);
hilbertSvg.setAttributeNS(null, VIEWBOX, VIEWBOX_VALUE);
hilbertSvg.style.width = SVGSIZE_VALUE + PX;
hilbertSvg.classList.add("checkered");
hilbertSvg.appendChild(hilbertPath);
hilbertContainer.appendChild(hilbertSvg);

let scale: number = 0;

const draw = (size: number, order: number) => {

  const capacity = order * order;
  const maxSegments = capacity - 1;

  hilbertCapacityValue.innerText = capacity.toString();
  hilbertDisplayPointsValue.innerText = capacity.toString();
  hilbertDisplayPoints.max = capacity.toString();

  scale = size / (order + 1);

  let p = PATHM;
  for (var i = 0; i < capacity; i++) {
    let point = HilbertCurve.distanceToPoint(order, i);  
    p += `${(point[0] * scale) + scale} ${(point[1] * scale) + scale},`;
  }  
  hilbertPath.setAttribute(PATHD, p);    

};

const sizePath = (index: number, count: number) => {
  const pathLength = hilbertPath.getTotalLength();
  const segmentLength = scale;
  const drawLength = segmentLength * (index - 1);
  hilbertPath.style.strokeDashoffset = (pathLength - drawLength).toString();
  if (index >= count) hilbertPath.style.strokeDasharray = "none";
  else {
    if (index === 0) hilbertPath.style.visibility = 'hidden';
    else hilbertPath.style.visibility = 'visible';
    hilbertPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  } 
}

hilbertOrder.addEventListener("input", function (e) {

  const order = +hilbertOrder.value;
  
  draw(320, 2 ** order); 

  hilbertOrderValue.innerText = order.toString();
  hilbertDisplayPoints.min = "2";
  hilbertDisplayPoints.value = hilbertDisplayPoints.max;
  hilbertDisplayPoints.value = hilbertDisplayPoints.max;

});

hilbertDisplayPoints.addEventListener("input", function (e) {

  const segmentsToDisplay = +hilbertDisplayPoints.value;
  const totalSegments = +hilbertDisplayPoints.max;

  hilbertDisplayPointsValue.innerText = segmentsToDisplay.toString();

  sizePath(segmentsToDisplay, totalSegments);

});

draw(320, 2);