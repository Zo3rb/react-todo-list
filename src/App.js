import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center text-primary my-5">Todo List React App</h1>
        </div>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
