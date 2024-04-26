import React from "react";

const MyFunctionalComponent = (props) => {

    //Creating and initialising the state variable
    const [count, setCount] = React.useState(0);
    const [firstName, updateFirstName] = React.useState("Dinesh");
    const [student, updateStudent] = React.useState({
        name: "Dinesh",
        age: 42,
        gender: "Male"
    });

    const increment = () => {
        setCount(count+1);
        updateFirstName("Dinesh S");
    }

    const decrement = () => {
        setCount(count-1);
        updateStudent({...student, name: "Dinesh S" })
    }

    return (<div style={{
        backgroundColor: "aqua",
        margin: "10px"
    }}>
        <div>
            <h1>Count: {count}</h1>
            <p>FirstName: {firstName}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Gender: {student.gender}</p>

            <h3>Received through props: {props.text}</h3>
            <h3>Received through props: {props.number}</h3>
            
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
        <div>
            
        </div>
    </div>)

    //return <h1>Heading from functional component</h1>
}

export default MyFunctionalComponent;