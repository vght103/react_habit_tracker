import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncrement = (myHabit) => {
    this.props.onIncrement(myHabit);
  };

  handleDecrement = (myHabit) => {
    this.props.onDecrement(myHabit);
  };

  handleDelete = (myHabit) => {
    this.props.onDelete(myHabit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((myHabit) => (
            <Habit
              key={myHabit.id}
              habit={myHabit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset
        </button>
      </>
    );
  }
}

export default Habits;
