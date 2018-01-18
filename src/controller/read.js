function Read(id,data) {
  var obj ;
  data.forEach((item)=>{
    if(item.id == id){
      obj = item;
    }
  })
  return obj
}
export default Read
