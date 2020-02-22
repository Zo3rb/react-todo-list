import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div className="col-sm col-md-8 offset-md-2 py-3 my-2">
                <h2 className="text-center">Hello, World From Todo List</h2>
                <TodoItem />
            </div>
        );
    }
}

export default TodoList;