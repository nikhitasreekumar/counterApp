import React, { useState } from "react";
 
// Importing app.css is css file to add styling
import "./App.css";
 
const App = () => {
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0);
 
    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1);
    };
 
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter - 1);
    };
    // Function is called everytime reset button is clicked
    const handleClick3 = () => {
      // Counter state is decremented
      setCounter(0);
  };
 
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "300%",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "-15%",
                fontStyle: "italic"
            }}
        >
            Counter App
            <div
                style={{
                    fontSize: "100%",
                    position: "relative",
                    top: "20vh",
                    backgroundColor: "aqua",
                    fontStyle: "italic"
                }}
            >
                {counter}
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontSize: "40%",
                        position: "relative",
                        top: "20vh",
                        marginRight: "5px",
                        backgroundColor: "pink",
                        borderRadius: "5%",
                        color: "black",
                    }}
                    onClick={handleClick1}
                >
                    Increment
                </button>
                <button
                    style={{
                        fontSize: "40%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "blue",
                        borderRadius: "5%",
                        color: "black",
                    }}
                    onClick={handleClick2}
                >
                    Decrement
                </button>
                <button
                    style={{
                        fontSize: "40%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "yellow",
                        borderRadius: "5%",
                        color: "black",
                    }}
                    onClick={handleClick3}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};
 
export default App;