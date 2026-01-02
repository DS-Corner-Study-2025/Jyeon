import React, {useMemo, useReducer, useCallback, useRef} from "react";
import TodoList from "./TodoList";
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  const idRef = useRef(3);
  const [todo, setTodo]=useState(mockTodo);
    const onCreate=(content) =>{
    const newItem={
      id: idRef.current,
      content,
      isDone:false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current +=1;
  };
  const onUpdate=(targetId)=>{
    setTodo(
      todo.map((it)=>
       it.id === targetId ? {...it, isDone: !it.isDone} : it
      )
    );
  };
  const onDelete=(targetId)=>{
    setTodo(todo.filter((it)=>it.id !== targetId));

  const memoizedDispatches = useMemo(() => {
        return {onCreate,onUpdate,onDelete};
    },[]);
    
  };

  return (  
 <div className="App">
            <Header />
            <TodoStateContext.Provider value={todo}>
                <TodoDispatchContext.Provider value={memoizedDispatches}>
                    <TodoEditor />
                    <TodoList />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
  );
}
export default App;
