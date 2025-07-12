import React, { ReactElement } from "react"
import TodoListItem from "./TodoListItem"


const ItemList:React.FC = (): ReactElement =>{
    return(
          <ul className="list-group mb-0">
           <TodoListItem id={"1"} todoText={"Wake up"} completed={false} />
           <TodoListItem id={"2"} todoText={"Walk the dog"} completed={false} />
           <TodoListItem id={"3"} todoText={"Study"} completed={false} />
          </ul>
    )
}

export default ItemList