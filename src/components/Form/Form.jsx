import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles.js";
import { createTodo, updateTodo } from "../../actions/todo.Actions.js";

const Form = ({ currentId, setCurrentId }) => {
  const [todoData, setTodoData] = useState({ title: "", message: "" });
  const todo = useSelector((state) =>
    currentId ? state.todos.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (todo) setTodoData(todo);
  }, [todo]);

  const clear = () => {
    setCurrentId(0);
    setTodoData({ title: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createTodo(todoData));
      clear();
    } else {
      dispatch(updateTodo(currentId, todoData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${todo.title}"` : "Creating a todo"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={todoData.title}
          onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={todoData.message}
          onChange={(e) =>
            setTodoData({ ...todoData, message: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
