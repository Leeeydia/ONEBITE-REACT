import { useState, useRef, useReducer } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "명구기랑 놀기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: " 삼겹살 먹기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "딩굴딩굴",
    date: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case `CREATE`:
      return [action.data, ...state];
    case `UPDATE`:
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case `DELETE`:
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };
  // todos.map((todo)=> todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo)
  return (
    <div className="App">
      TodoList
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default App;
