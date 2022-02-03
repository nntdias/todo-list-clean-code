import React, { useState } from "react";
import List from "./components/List";
import useTodoItems from "./hooks/useTodoItems";
import InputSearch from "./components/InputSearch";
import ThemeProvider from "./contex/ThemeProvider";
import "./App.scss";

const App: React.FC = () => {
  const [filterText, setFilterText] = useState("");
  const { todoItems } = useTodoItems(filterText);

  const handleChange = (event: any) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <ThemeProvider>
      <div className="App">
        <div className="App-container">
          <div className="input-group">
            <InputSearch value={filterText} onChange={handleChange} />
          </div>
          <List todoItems={todoItems} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
