import { useState } from "react";
import {TodoStateContext} from "../App";
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = () => {
    const {todo} = useContext(TodoStateContext);
    const storeData = useContext(TodoContext);
    console.log(sotreData);
    const [search,setSearch]=useState("");
    const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    };
    const getSearchResult=()=>{
        return search ===""
        ? todo
        : todo.filter((it)=>
            it.content.toLowerCase().includes(search.toLowerCase()));
    };
    return (
    <div className="TodoList">
        <h4>TodoList 🌱</h4>
        <input 
        value={search}
        onChange={{onChangeSearch}}
        className="searchbar" placeholder="검색어를 입력하세요" />  
        <div className="list_wrapper">
            {getSearchResult().map((it)=>(
                 <todoItem key={it.id} {...it} />
            ))}
        </div>  
    </div>
    );
};
export default TodoList;