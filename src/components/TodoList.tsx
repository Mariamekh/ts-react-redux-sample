import React, {FC, useEffect} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchTodos, setTodoPage } from '../store/action-creators/todo';

 const TodoList: FC = () => {
    const {todo, loading, page, error,limit } = useTypedSelector(state => state.todoReducer);
     const dispatch = useDispatch();
    const pages = [1,2,3,4,5]

     useEffect(() => {
         dispatch(fetchTodos(page, limit))
     }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
    <>
    {todo.map(todos => <div key={todos.id}>{todos.id} - {todos.title}</div>)}
  <div style= {{display: 'flex'}}>
    {pages.map(p => <div onClick={()=> setTodoPage(p)} style={{border: p === page? '2px solid green' : '1px solid gray', padding: 10}}>{p}</div>
    )}   
  </div>
   
 </>
    );
}

export default TodoList;