import React from 'react'
  
const EnhancedComponent = (OriginalComponent) => { 
    class NewComponent extends React.Component { 
  
        // Logic here 
  
        render() { 
            // Pass the callable props to Original component 
            return <OriginalComponent name="GeeksforGeeks"  />  
        } 
    } 
    // Returns the new component 
    return NewComponent 
} 
  
export default EnhancedComponent;