import React from "react";
import "./style.css";
 
class App extends React.Component{
  add=()=>{
    var num1= +document.getElementById('d1').value;
    var num2= +document.getElementById('d2').value;
    var result = num1 + num2;
    document.getElementById('d3').innerHTML=result;
  }
  render(){
    return(
      <div>
        <h3>Addition(uncontrolled components with DOM)</h3>
        NUM-1:<input type="text" id='d1'/><hr/>
        NUM-2:<input type="text" id='d2'/><hr/>
        <button onClick={this.add}>Add</button>
        &nbsp;
         Result&nbsp;:&nbsp; <span id='d3'></span>
      </div>
    )
  }

}
export default App;