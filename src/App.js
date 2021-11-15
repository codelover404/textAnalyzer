import React from 'react';
import './App.css';
import TextFrom from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import Practice from './components/Practice';
// import {BrowserRouter,Route,Routes} from 'react-router-dom';

// let logo = prompt("please enter site logo name");
// class App extends React.Component {
//   render() {
//     return (
//       <>
//       {/* <Navbar title="logo" link="home" link1="about"/> */}
//       {/* <Navbar title="" link="" link1=""/> */}
//       {/* <Navbar/> */}
//       {/* <TextFrom heading="Enter The Text To Analyze"/> */}
//       {/* <About/> */}
//       </>
//     )
//   }
// }
function App(){
  return(
    <>
    <Practice title="logo name" desc="this is demo page for practice"/>      
    </>
  )
}

export default App;


// function App() {
//   return (
//     <div classNameName="App">
//      <h1>hello</h1>
//     </div>
//   );
// }

// REACT  FUNCTION COMPONENT ------------------------------------------------

// const Fun=()=>{
//   return(
//     <h1>HELLO WAJID</h1>  
//   )
// }

// REACT className COMPONENT ------------------------------------------------
// className Fun extends React.Component{
//   render(){
//     return(
//        <h1>HELLO WAJID</h1>  
//     )
//   }
// }

// HOW TO PASS PROPS IN FUNCTION COMPONENT

// const Fun=(props)=>{
//   return(
//   <h1>{props.name}</h1>  
//   )
// }

// HOW TO PASS PROPS IN className COMPONENT
// in className function no need to pass props just use this keyword

// className Fun extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>{this.props.name}</h1>  
//         <h1>{this.props.state}</h1>  
//         <h1>{this.props.children}</h1>  
//       </div>
//   )
//   }

// }

// REACT className FUNCTION ------------------------------------------------

// className App extends React.Component{
//   render(){
//       return (
//     <div classNameName="App">

//        <Fun name="wajid" state="sitting"/>
//        <Fun name="moiz" state="working">HELLO</Fun>
//        <Fun name="hunain" state="learning"/>

//     </div>
//   )
//   }

// }

