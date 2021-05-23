const tail = (array) => {
    if(array == null){
       // console.log(array);
    return (array);}
  array.shift();
  //console.log(array);
  return array;
}
module.exports = tail;