import React from "react";

function HomePage(){
    return <div>Counter</div>
}
export default HomePage;

// states
// creating these states to track count value and countdown
const[count, setCount] = useState(0);
const[timer, setTimer] = useState(0);