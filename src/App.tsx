import React from "react";
import List from "./components/List";
import InputSearch from "./components/InputSearch";
import ThemeProvider from "./contex/ThemeProvider";
import "./App.scss";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const items = useSelector((state: any) => [...state.todoItems]);

  return (
    <div className="App">
      <div className="App-container">
        <div className="input-group">
          <InputSearch />
          <Counter />
        </div>
        <ThemeProvider>
          <List todoItems={items} />
        </ThemeProvider>
        <ThemeProvider>
          <List todoItems={items} />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default App;
