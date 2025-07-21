import { useEffect, useState } from 'react'
import './App.css'
import Search from './component/Search'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTodos } from './todoSlice';
import { Provider } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
       dispatch(setTodos(response.data));
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      })
  }, [dispatch])

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <>
     <h1>Todo list</h1>
    <Search />
    </>
  )
}

export default App
