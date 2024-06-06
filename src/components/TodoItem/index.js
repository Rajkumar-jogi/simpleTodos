// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {eachTodo, onDeleteTodoItem} = this.props

    const {id, title} = eachTodo

    const onDeleteButton = () => {
      onDeleteTodoItem(id)
    }

    return (
      <li className="todo-item-container">
        <p className="title">{title}</p>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteButton}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
