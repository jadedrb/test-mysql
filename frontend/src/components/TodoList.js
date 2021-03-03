import React, { Component } from 'react'
import '../syles/TodoList.css';

import { connect } from 'react-redux'

import { addItem, removeItem, updateItem } from '../actions/toDoListActions';

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      inputtedItem : '',
      typeOfInput: 'add',
      tempIndex: 0
    }
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.handleFormReset = this.handleFormReset.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    // Grab the input that the user typed in
    const inputtedItem = document.querySelector("#inputted-item");

    // The parameters "state" & "props" are copies of this components state and props 
    // That way we can manipulate them without touching the real state or real props 

    this.setState({ inputtedItem: '' })
    
    if (this.state.typeOfInput === 'add') {
      this.props.addThis(inputtedItem.value) 
    } else {
      this.setState({ typeOfInput: 'add' })
      this.props.updateThis(this.state.tempIndex, inputtedItem.value)
    }
  }

  handleRemove = (index) => {
    this.props.removeThis(index)
  }

  handleUpdate = (index) => {
    this.setState({ 
      typeOfInput: 'update', 
      inputtedItem: this.props.list[index],
      tempIndex: index
    })
  }

  onChange(event) {
    // Will capture the input value on the <input> tag and save into state 
    // Once the form is submitted, the setstate on the function will reset the value to an empty string

    this.setState({inputtedItem: event.target.value})
  }

  render() {
    // -------------------------------------------------
    // loop through all todo items in state using map() 
    // & render a <h5> tag for each todo item
    // -------------------------------------------------
    const listOfItems = this.props.list.map((item, index) => {
      // console.log("testing list items****", id)
      return (
        <div id="item-wrapper" key={index}>
          <p id="item" >
            {item}
          </p> 
          <button onClick={() => this.handleRemove(index)}>Remove</button>
          <button onClick={() => this.handleUpdate(index)}>Update</button>
        </div>
      )
    })

    return (
      <div className="todo">
        <form onSubmit={this.submitForm} > 
          <input 
            id="inputted-item" 
            type="text" 
            placeholder="Add Item" 
            autoComplete="off"  
            onChange={this.onChange} 
            value={this.state.inputtedItem} />
        </form>        
        {/* here we are rendering the <h5>'s that we made earlier using the variable "listOfItems" */}
        {listOfItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.list.list
})

const mapDispatchToProps = (dispatch) => ({
  addThis: item => dispatch(addItem(item)),
  removeThis: index => dispatch(removeItem(index)),
  updateThis: (index, updatedText) => dispatch(updateItem({ index, updatedText }))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
