import React, { Component } from "react";

import { Button } from "@material-ui/core";
import { Header, Footer } from "./Layouts";

import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

class App extends Component {
  state = { exercises };
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((acc, exercise) => {
        const { muscles } = exercise;

        acc[muscles] = acc[muscles] ? [...acc[muscles], exercise] : [exercise];
        return acc;
      }, {})
    );
  }

  render() {
    const exercises = this.getExercisesByMuscles();

    return (
      <>
        <Header></Header>
        <Exercises exercises={exercises} />
        <Button color="primary">Stuff</Button>
        <Footer muscles={muscles} />
      </>
    );
  }
}

export default App;
