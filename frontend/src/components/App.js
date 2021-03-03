import React, { useEffect} from 'react';
import '../syles/App.css';
import TodoList from './TodoList';
import LastItemDisplay from './LastItemDisplay';
import axios from 'axios'

function App() {

  useEffect(() => {
    console.log('v1.05 (2:17pm')
    axios
      .get('/api/users')
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }, [])
  // testing
  //asasdfsjadhfl adsjfl kadsjkf
  return (
    <div className="main">
      <h2 className="title">  Checklist  </h2>
      <TodoList />
      <LastItemDisplay />
    </div>
  );
}

export default App;
