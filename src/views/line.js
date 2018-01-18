function Line() {
  const SVGElement = document.querySelector("svg");
  this.create = function (data) {
    const lineNode = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    this.setData(data,lineNode);

    SVGElement.appendChild(lineNode);
  }
  this.setData = function(data,circleNode){
    circleNode.setAttribute("x1", data.x1);
    circleNode.setAttribute("y1", data.y1);
    circleNode.setAttribute("x2", data.x2);
    circleNode.setAttribute("y2", data.y2);
    data.stroke && circleNode.setAttribute("stroke", data.stroke);
    data.strokeWidth && circleNode.setAttribute("stroke-width", data.strokeWidth);
  }

}
export default Line;
