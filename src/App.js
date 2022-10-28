import React,{useState} from "react";
import AccountForm from './components/AccountForm';
import { PageContext } from "./contexts/PageContext";


function App(props) {
  const [page, setPage] = useState('login');
  return (
    <PageContext.Provider value={[page, setPage]}>    
      <AccountForm/>
    </PageContext.Provider>
  );
}

export default App;
