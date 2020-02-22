import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const { title, changeHandler, submitHandler, editItem } = this.props;
        return (
            <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 py-3 my-2 border border-gray">
                <h3 className="text-center text-success font-weight-bold">Enter Task or Something To Do</h3>
                <form className="form-inline p-3" onSubmit={submitHandler}>
                    <div className="input-group mb-2 w-100">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-tasks"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" onChange={changeHandler} value={title} />
                    </div>
                    <button disabled={!title.length}
                        className={editItem ? "btn btn-success btn-block" : "btn btn-primary btn-block"}>
                        {editItem ? 'Edit' : 'Add'}
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoInput;