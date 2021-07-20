import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    if (name) {
      this.props.onAdd(name);
    }
    this.inputRef.current.value = "";
  };

  addHabit = () => {};

  render() {
    return (
      // 서밋 안되게 하기
      <form onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" className="add-input" />
        <button className="add-button" onClick={this.addHabit}>
          Add
        </button>
      </form>
    );
  }
}

export default HabitAddForm;
