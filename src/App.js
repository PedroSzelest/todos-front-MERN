import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles.js"
import Todos from "./components/Todos/Todos";
import Form from "./components/Form/Form";
import { getTodos } from "./actions/todo.Actions.js";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const classes = useStyles()

  useEffect(() => {
    dispatch(getTodos());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={12}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid
              className={classes.formContainer}
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Todos setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
