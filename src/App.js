import './App.css';
import SearchArea from "./components/SearchArea";
import ResultArea from "./components/ResultArea";
import {useState} from "react";

function App() {
  const [doSearch, setDoSearch] = useState({});
  function searchGitInfo(txt){
    setDoSearch({
      doSearch : true,
      searchTxt : txt,
    });
    //setDoSearch(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchArea props={searchGitInfo}></SearchArea>

        <ResultArea props={doSearch}></ResultArea>
      </header>
    </div>
  );
}

export default App;
