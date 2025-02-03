import React from "react"; 
import EnhancedComponent from './name'
   
class App extends React.Component { 
  render() { 
    // Call the props from originalComponent 
    return <h1>{this.props.name}</h1>  
  } 
} 
   
// Passed the originalcomponent  
export default EnhancedComponent(App);