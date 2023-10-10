import Sidebar from "./components/Sidebar.js";
import MainContent from "./components/MainContent.js";
import './App.css';
import "./styles.css";
import "./main-content-styles.css";
import { useState, createContext } from 'react';

const CategoryContext = createContext();

function App() {
  const [activeContent, setActiveContent] = useState("Transactions");

  return (
    <div className="App">
      <div id="page-content">
        <CategoryContext.Provider value={{activeContent, setActiveContent}}>
          <Sidebar />
          <MainContent />
        </CategoryContext.Provider>
      </div>
    </div>
  );
}

export default App;
export { CategoryContext };
