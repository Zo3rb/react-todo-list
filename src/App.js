import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    title: '',
    editItem: false
  }

  changeHandler = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    const { title } = this.state
    const { id } = this.state
    const newItem = { id, title }
    const updateItems = [...this.state.items, newItem]
    this.setState({
      items: updateItems,
      id: uuid(),
      title: '',
      editItem: false
    })
  }

  clearHandler = () => {
    this.setState({
      items: []
    })
  }

  deleteHandler = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: updatedItems
    })
  }

  editHandler = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredItems,
      title: selectedItem.title,
      id: id,
      editItem: true
    })
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center text-primary mt-5 font-weight-bold">Todo List React App</h1>
              <h5 className="text-muted text-center mb-5">(Bootstrap v4 CSS / Font Awesome 5)</h5>
            </div>
            {/* Todo Input With it's Methods */}
            <TodoInput title={this.state.title}
              changeHandler={this.changeHandler}
              submitHandler={this.submitHandler}
              editItem={this.state.editItem} />
            {/* Todo List With it's Methods */}
            <TodoList items={this.state.items}
              clearHandler={this.clearHandler}
              editHandler={this.editHandler}
              deleteHandler={this.deleteHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;