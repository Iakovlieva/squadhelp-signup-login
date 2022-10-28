import React,{useState} from "react";
import AccountForm from './components/AccountForm';
import { PageContext } from "./contexts/PageContext";
import CONSTANTS from './constants';
const {PAGES} = CONSTANTS;

function App(props) {
  const [page, setPage] = useState(PAGES.LOGIN);
  return (
    <PageContext.Provider value={[page, setPage]}>    
      <AccountForm/>
    </PageContext.Provider>
  );
}

export default App;
