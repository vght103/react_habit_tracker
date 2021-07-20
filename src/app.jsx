import React, { Component } from "react";
import "./app.css";

import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Boxing", count: 0 },
      { id: 2, name: "Hiking", count: 0 },
      { id: 3, name: "Runing", count: 0 },
    ],
  };

  handleIncrement = (myHabit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(myHabit);

    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (myHabit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(myHabit);

    const mCount = habits[index].count - 1;
    habits[index].count = mCount < 0 ? 0 : mCount;
    console.log(mCount);

    this.setState({ habits });
  };

  handleDelete = (myHabit) => {
    const habits = this.state.habits.filter((item) => myHabit.id !== item.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    // 여기서 새로운 habit 추가하기
    // 1. 복사해오기
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
    // 2. input value 를 배열에 추가
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });

    this.setState({ habits });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
          pickName={this.state.habits.filter((item) => item.name).value}
        />

        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;

// 1. habits를 app 에 import / habits 는 props
