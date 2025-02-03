import React,{memo} from "react"
function TodoEx({ todos }) {
    return (
        <div>
            {console.log("todosxvxv")}
            {todos.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    )
}
export default memo(TodoEx)