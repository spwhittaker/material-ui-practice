import React, { Component } from "react";

import { Button } from "@material-ui/core";
import { Header, Footer } from "./Layouts";

import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

class App extends Component {
  state = { exercises, exercise: {} };
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((acc, exercise) => {
        const { muscles } = exercise;

        acc[muscles] = acc[muscles] ? [...acc[muscles], exercise] : [exercise];
        return acc;
      }, {})
    );
  }

  handleCategorySelected = (category) => {
    this.setState({ category: category });
  };
  handleExerciseSelected = (id) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    return (
      <>
        <Header></Header>
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        />
        <Button color="primary">Stuff</Button>
        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelected}
          category={category}
        />
      </>
    );
  }
}

export default App;
