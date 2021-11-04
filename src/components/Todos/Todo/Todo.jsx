import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import {
  likeTodo,
  deleteTodo,
} from "../../../actions/todo.Actions.js";
import useStyles from "./styles.js";

const Todo = ({ todo, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={!todo.check ? `${classes.card}` : `${classes.checkCard}`}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {todo.title}
      </Typography>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "black" }}
          size="small"
          onClick={() => setCurrentId(todo._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {todo.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likeTodo(todo._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> Like {todo.likeCount}{" "}
        </Button>
        <div className={classes.overlay}>
          <Typography variant="body2">
            {moment(todo.createdAt).fromNow()}
          </Typography>
        </div>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteTodo(todo._id))}
        >
          <DeleteIcon fontSize="small" /> Delete{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Todo;
