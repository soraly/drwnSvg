function Cricle() {
  const SVGElement = document.querySelector("svg");
  this.create = function (data) {
    const circleNode = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    this.setData(data,circleNode);
    var svgs = document.querySelectorAll('circle');
    var svglength = [].filter.call(svgs,function (item) {
      return 'svg'  + data.id == item.id;
    });
    console.log(svglength,'svglength');
    if(svglength.length){
      let removeNode = document.querySelector('circle[id="' + svglength[0].id + '"]');
      SVGElement.removeChild(removeNode);
      SVGElement.appendChild(circleNode);
    }else {
      SVGElement.appendChild(circleNode);
    }
  }
  this.setData = function(data,circleNode){
    circleNode.id = 'svg' + data.id;
    data.x && circleNode.setAttribute("cx", data.x);
    data.y && circleNode.setAttribute("cy", data.y);
    data.r && circleNode.setAttribute("r", data.r);
    data.fill && circleNode.setAttribute("fill", data.fill);
    data.stroke && circleNode.setAttribute("stroke", data.stroke);
  }
}
export default Cricle;
