import { useState, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import Exam from "./components/Exam";

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
const App = () => {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
  // todos.map((todo)=> todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo)
  return (
    <div className="App">
      TodoList
      <Exam />
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
    </div>
  );
};

export default App;
