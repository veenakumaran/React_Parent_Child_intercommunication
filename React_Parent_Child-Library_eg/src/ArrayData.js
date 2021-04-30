import React from 'react';
import ReactDOM from 'react-dom';

///*************************PROPS FROM PARENT --> CHILD *********************

//****************PASSING ARRAYS AS PROPS - CLASS COMPONENT*******************
//array of objects data is passed from one component to another (from parent to child)
//Parent : Library & Child : Book 
//data passed from render --> Library --> Book

// let bookList = [
//     { title: 'C', author: 'Dennis Ritchie' },
//     { title: 'C ++', author: 'Mark David' },
//     { title: 'MBA', author: 'Veena Kumaran' },
// ];


// export default class Library extends React.Component {
//     state = {
//         open: 'true'
//     }

//     handleClick = () => {
//         this.setState({ open: !this.state.open })

//     }

//     render() {
//         return (
//             <div>
//                 <h1 style={{ backgroundColor: 'black', textAlign: "center", color : 'orangered' }}> Welcome to Library </h1>
//                 <p>THE LIBRARY IS <b>{this.state.open ? 'open' : 'closed'} </b></p>
//                 <button className='btn-primary' onClick={this.handleClick} style={{ float: 'right' }}>change</button>
//                 <br></br>
//                 <h4> Here are the list of available books.... </h4>


//                 {this.props.books.map(
//                     book => <Book title={book.title} author={book.author} />
//                 )

//                 }
//                 {/* <Book title = "Harry Potter" author ="JK rowling" /> */}


//             </div>


//         )
//     }


// }


// class Book extends React.Component {

//     render() {

//         return (
//             <div>

//                 <br></br>
//                 <ul>
//                     <li>Title :{this.props.title}</li>
//                     <li>Author : {this.props.author}</li>

//                 </ul>
//                 <hr></hr>
//             </div>

//         )
//     }

// }


// ReactDOM.render(
//     <Library books={bookList} />,
//     document.getElementById('root')
// )




//****************PASSING ARRAYS AS PROPS - FUNCTIONAL COMPONENT*******************
//array of objects data is passed from one component to another (from parent to child)
//Parent : Library & Child : Book 
//data passed from render --> Library --> Book
  
//   let bookList = [
//   	{"title": "Hunger", "author": "Roxane Gay", "pages": 320},
//   	{"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
//   	{"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
//   	{"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
//   ]

//   const Book = (props) => {
//   	return (
//   		<section>
//   			<h3>{props.title}</h3>
//   			<p>by: {props.author}</p>
//   			<p>Pages: {props.pages} pages</p>
//   		</section>
//   	)
//   }

//   const Library = (props) => {
//   	return (
//   		<div>
//               <h2>The List of Available books are : </h2>
//   			{props.books.map(
//   				book => 
//   					<Book 

//   						title={book.title} 
//   						author={book.author} 
//   						pages={book.pages}/>
//   			)}
//   		</div>
//   	)


//         }
//   ReactDOM.render(
//   	<Library books={bookList}/>, 
//   	document.getElementById('root')
//   )




////*************************PROPS TO CHILD DIRECTLY *********************/
//Parent : Library & Child : Book 
//data passed from  Library(not mapped) --> Book
  

  let bookList =[
  	{title : 'C', author : 'Dennis Ritchie'},
  	{title : 'C ++', author : 'Mark David'},
  	{title : 'MBA', author : 'Veena Kumaran'},

    ];


    class Library extends React.Component{
  	state ={
  	  open : 'true'
  	}

  	handleClick=()=>
  	{
  		this.setState ({open : !this.state.open})

  	}


  	render()
  	{
  	  return(
  		<div>
  		 <h1 style = {{backgroundColor : 'orange', textAlign : "center"}}> Welcome to Library </h1>
  		 <p>THE LIBRARY IS <b>{this.state.open ? 'open' : 'closed'} </b></p>
  		 <button className = 'btn-primary' onClick ={this.handleClick} style ={{float : 'right'}}>change</button>
  		 <br></br>
  		 <h4> Here are the list of available books.... </h4>



  		  <Book books={bookList}/>

  		 {/* <Book title = "Harry Potter" author ="JK rowling" /> */}


  		</div>


  	  )
  	}


    }


    class Book extends React.Component{

     render()
     {

  	 return(
  	   <div>

  		{this.props.books.map(boo => <li>{boo.title} by {boo.author} </li>)}
  		 <hr></hr>
  	   </div>

  	 )
     }

    }


    ReactDOM.render(
    <Library/>,
     document.getElementById('root')
    )

