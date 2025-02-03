// import React, { useState, useEffect } from "react";

// function CallBackSetStateFunctional() {
//     const [value, setValue] = useState(0);

//     const call = () => {
//         setValue((prevValue) => prevValue + 1);
//     };

//     useEffect(() => {
//         console.log("Updated Value:", value);
//     }, [value]); // This effect runs whenever `value` changes

//     return (
//         <div
//             style={{
//                 textAlign: "center",
//                 margin: "auto",
//             }}
//         >
//             <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
//             <h3>React Example for callback in useState</h3>
//             <h4>Current state: {value}</h4>
//             <button onClick={call}>
//                 Click to update state!
//             </button>
//         </div>
//     );
// }

// export default CallBackSetStateFunctional;


import React from "react";
 
class CallBackSetState extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        };
    }
 
    call() {
        this.setState({ value: this.state.value + 1 }, () =>
            console.log(
                "Updated Value :" + this.state.value
            )
        );
        // this.setState({ value: this.state.value + 1 });
        // console.log("Updated Value :" + this.state.value); // May log the old value
    }
 
    render() {
        return (
            <div
                style={{
                    textAlign: "center",
                    margin: "auto",
                }}
            >
                <h1 style={{ color: "green" }}>
                    GeeksforGeeks
                </h1>
                <h3>
                    React Example for callback in setState
                </h3>
                <h4>Current state: {this.state.value}</h4>
                <button
                    onClick={() => {
                        this.call();
                    }}
                >
                    Click to update state!
                </button>
            </div>
        );
    }
}
 
export default CallBackSetState;