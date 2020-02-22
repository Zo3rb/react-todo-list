import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { items, clearHandler, editHandler, deleteHandler } = this.props;
        const msg = items.length === 1 ? <h3 className="text-center text-success font-weight-bold p-1">You Have Only One Task To Do</h3> : items.length >= 2 ? <h3 className="text-center text-success font-weight-bold p-1">All Tasks You Did Entered To Do</h3> : <h3 className="text-center text-secondary font-weight-bold p-1">Right Now You Don't Have Any Tasks To Do</h3>;
        const oneItem = items.map(item => {
            return <TodoItem
                key={item.id}
                title={item.title}
                editHandler={() => editHandler(item.id)}
                deleteHandler={() => deleteHandler(item.id)} />
        })
        return (
            <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 py-3 my-2 border border-gray">
                <ul className="list-group mb-5 bg-dark text-white">
                    {msg}
                    {oneItem}
                </ul>
                <button disabled={!items.length}
                    onClick={clearHandler}
                    className="btn btn-danger btn-block">Clear All List</button>
            </div>
        );
    }
}

export default TodoList;