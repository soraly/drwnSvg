import svgData from './model'
import CircleFn from './views/circle'
import LineFn from './views/line'
import textFn from './views/text'
import read from './controller/read'

const circle = new CircleFn();
const line = new LineFn();
const text = new textFn();
// line.create()
svgData.forEach((item) => {
  if (item.parentId) {
    var obj_father = read(item.parentId, svgData);
    line.create({x1: obj_father.x, y1: obj_father.y, x2: item.x, y2: item.y,strokeWidth:2,stroke: 'black'})
    circle.create(item);
    circle.create(obj_father);
  }
})
svgData.forEach((item)=>{
  text.create({id: item.id,text: item.text,transform:`translate(${item.x-20},${item.y})`})
})
