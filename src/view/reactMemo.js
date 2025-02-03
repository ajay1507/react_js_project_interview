import { useState, useMemo,useCallback  } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const ReactMemo = () => {
    /////////////////////////////////React Memo////////////////////////////////////////////////////////
    //   const [count, setCount] = useState(0);
    //   const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    //   const increment = () => {
    //     setCount((c) => c + 1);
    //   };

    //   return (
    //     <>
    //       <Todos todos={todos} />
    //       <hr />
    //       <div>
    //         Count: {count}
    //         <button onClick={increment}>+</button>
    //       </div>
    //     </>
    //   );
    ////////////////////////////////////////Use Memo//////////////////////////////////////////////

    //   const [count, setCount] = useState(0);
    //   const [todos, setTodos] = useState([]);
    //   const expensiveCalculation = (num) => {
    //     console.log("Calculating...");
    //     for (let i = 0; i < 1000000000; i++) {
    //       num += 1;
    //     }
    //     return num;
    //   };
    // //const calculation = expensiveCalculation(count);
    // const calculation = useMemo(() => expensiveCalculation(count), [count]);

    //   const increment = () => {
    //     setCount((c) => c + 1);
    //   };
    //   const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    //   };

    //   return (
    //     <div>
    //       <div>
    //         <h2>My Todos</h2>
    //         {todos.map((todo, index) => {
    //           return <p key={index}>{todo}</p>;
    //         })}
    //         <button onClick={addTodo}>Add Todo</button>
    //       </div>
    //       <hr />
    //       <div>
    //         Count: {count}
    //         <button onClick={increment}>+</button>
    //         <h2>Expensive Calculation</h2>
    //         {calculation}
    //       </div>
    //     </div>
    //   );
    /////////////////////////////////////////useCallback//////////////////////////////////////////
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
      }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );

};


export default ReactMemo;