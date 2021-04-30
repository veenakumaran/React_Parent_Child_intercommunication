import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './ArrayData';


//********************BASICS: using props in parent and child**********************//
class A extends React.Component {
    render() {
        return (
            <div>
                <B status='a is active'><p>hi there i am A</p></B>
            </div>
        );
    }
}
class B extends React.Component {
    render() {
        return (
            <div>
                <p>hi there i am B</p>
                <p>html props passed by A (parent) : {this.props.children}</p>
                <p> normal props passed by A (parent) : {this.props.status}</p>
            </div>
        );
    }
}


ReactDOM.render(
<A/>,
document.getElementById('root')
)



//**********************PARENT-CHILD EXAMPLE******************
//: PASSING PROPS FROM PARENT TO CHILD THROUGH CLASS COMPONENTS, FUNCTIONAL COMPONENTS OR  COMBINATION OF THE TWO



//1 : CLASS COMPONENTS : maintain state
 

// class Library extends React.Component{
//   state ={
//     open : 'true'
//   }

//   handleClick=()=>
//   {
//       this.setState ({open : !this.state.open})
      
//   }


//   render()
//   {
//     return(
//       <div>
//        <h1 style = {{backgroundColor : 'orange', textAlign : "center"}}> Welcome to Library </h1>
//        <p>THE LIBRARY IS <b>{this.state.open ? 'open' : 'closed'} </b></p>
//        <button className = 'btn-primary' onClick ={this.handleClick} style ={{float : 'right'}}>change</button>
//        <br></br>
//        <h4> Here are the list of available books.... </h4>
       
//       <Book title = "Harry Potter" author ="JK rowling"/>

//       <Book title = "Can Love Happen Twice" author ="Ravinder Singh" />
      
//       </div>
      

//     )
//   }


// }


// class Book extends React.Component{

//  render()
//  {
  
//    return(
//      <div>
      
//        <br></br>
//        <ul>
//        <li>Title : {this.props.title}</li>
//        <li>Author : {this.props.author}</li>
    
//        </ul>
//        <hr></hr>
//      </div>

//    )
//  }

// }


// ReactDOM.render(
// <Library/>,
//  document.getElementById('root')
// )


// ---------------------------------------------------------------------------------


//2 : FUNCTIONAL COMPONENTS : we cannot maintain state variable in functional components
// functional components can be declared as either const arrow or normal function using function keyword

// const Library=()=>{


//  var state ={
//     open : 'true'
//   }
//     const handleclick =()=>
//     {
//       state.open = !state.open
//       console.log(state.open)
//     }
//     return(
//       <div>
//        <h1 style = {{backgroundColor : 'orange', textAlign : "center"}}> Welcome to Library </h1>
//        <p>THE LIBRARY IS <b>{state.open ? 'open' : 'closed'} </b></p>
//        <button className = 'btn-primary' style ={{float : 'right'}} onClick ={handleclick}> change</button>
//        <br></br>
//        <h4> Here are the list of available books.... </h4>
       
//       <Book title = "Harry Potter" author ="JK rowling" />

//       <Book title = "Can Love Happen Twice" author ="Ravinder Singh" />
      
//       </div>
      

//     )
//   }


// //props needs to be passed to the functional component as follows
// const Book =(props)=>{

//    return(
//      <div>
      
//        <br></br>
//        <ul>
//        <li>Title : {props.title}</li>
//        <li>Author : {props.author}</li>
      
//        </ul>
//        <hr></hr>
//      </div>

//    )
//  }


// ReactDOM.render(
// <Library/>,
//  document.getElementById('root')
// )

// ---------------------------------------------------------------------------------


//3 : we can also use a combination of functional components and class components
// the parent components which holds states can be the class component and child component is functional component


// class Library extends React.Component{
//     state ={
//       open : 'true'
//     }
//     handleClick=()=>
//     {
//         this.setState ({open : !this.state.open})
        
//     }
  
  
//     render()
//     {
//       return(
//         <div>
//          <h1 style = {{backgroundColor : 'orange', textAlign : "center"}}> Welcome to Library </h1>
//          <p>THE LIBRARY IS <b>{this.state.open ? 'open' : 'closed'} </b></p>
//          <button className = 'btn-primary' onClick ={this.handleClick} style ={{float : 'right'}}>change</button>
//          <br></br>
//          <h4> Here are the list of available books.... </h4>
         
//         <Book title = "Harry Potter" author ="JK rowling" />
  
//         <Book title = "Can Love Happen Twice" author ="Ravinder Singh" />
        
//         </div>
        
  
//       )
//     }
  
  
//   }

// const Book =(props)=>{

//   return(
//     <div>
     
//       <br></br>
//       <ul>
//       <li>Title : {props.title}</li>
//       <li>Author : {props.author}</li>
//       </ul>
//       <hr></hr>
//     </div>

//   )
// }


// ReactDOM.render(
// <Library/>,
// document.getElementById('root')
// )






