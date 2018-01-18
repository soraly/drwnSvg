function Text() {
  const SVGElement = document.querySelector("svg");
  this.create = function (data) {
    const textNode = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    this.setData(data,textNode);
    var lines = document.querySelectorAll("line");
    // var temp = [].filter.call((item)=>{
    //   return item.id == data.id;
    // })
    //
    // console.log(lines)
    SVGElement.appendChild(textNode);
  }
  this.setData = function(data,textNode){
    data.x && textNode.setAttribute("x", 0);
    data.x && textNode.setAttribute("y", 0);
    textNode.textContent = data.text;
    data.fill && textNode.setAttribute("fill", data.fill);
    data.transform && textNode.setAttribute("transform", data.transform);
  }

}
export default Text;
