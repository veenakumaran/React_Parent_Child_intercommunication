import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
class Parent extends React.Component {

  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        {/* this.setState( { count : this.state.count +1})  this is how we write a normal setstate method */}
        {/* this.setState( { count :                      this.setState.count +1})  */}
        <Child count={this.state.count} increaseCount={(count) => this.setState({count})} />
        {/* function body for increase count */}
        {/* here this.setState is the actual arrow func wrapped in side increasecount */}
        <Subchild count={this.state.count} />
        {/* function definition is here */}
      </div>


    )
  }

}


const Child=(props)=>
{
  return(
    <button onClick ={()=> props.increaseCount(props.count + 1)}>+</button>
    // function definition for increaseCount
  )
}


const Subchild = ({count}) => {
  return (
    <div>
      <br></br>
      I AM SUBCHILD WITH {count} AS PROPS FROM PARENT
    </div>
  );
}






ReactDOM.render(
  <Parent/>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
