import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { title, editHandler, deleteHandler } = this.props;
        return (
            <li className="list-group-item d-flex justify-content-between">
                <h6 className="text-dark font-weight-bold task">{title}</h6>
                <div className="align-self-end">
                    <span onClick={editHandler} className="text-success mr-3 editItem"><i className="fas fa-pen"></i></span>
                    <span onClick={deleteHandler} className="text-danger mr-3 deleteItem"><i className="fas fa-trash-alt"></i></span>
                </div>
            </li>
        );
    }
}

export default TodoItem;