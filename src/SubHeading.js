

const SubHeadingComponent=(props)=>{
  // let myNumber= 80;
  console.log(props);
  return  <h2>  My favourite number is {props.numberToPass} (From other file subheading component)</h2>
}


export default SubHeadingComponent;