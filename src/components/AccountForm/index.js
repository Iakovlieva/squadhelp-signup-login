import React,{useContext} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PageContext } from "../../contexts/PageContext";
import LoginSquard from "./LoginSquad";
import CreateAccountSquard from './CreateAccountSquad';
import styles from "./accountform.module.css";
import CONSTANTS from '../../constants';
const {PAGES} = CONSTANTS;

const AccountForm = (props) => {
    const [page,setPage]=useContext(PageContext);


    const nextPage = page === PAGES.LOGIN ? PAGES.SIGNUP : PAGES.LOGIN;
    
    return (
        <BrowserRouter>   
            <div className={styles["page-container"]}>
                <div className={styles["main-container"]}>  
                    <div className={styles["squad-header"]}>
                        <a href="https://www.squadhelp.com"><img src={'./images/squardlogo.png'} /></a>
                                
                            <Link to={page} onClick={()=>{setPage(nextPage)}} className={styles["button-header"]}>{page[0].toUpperCase() + page.slice(1)}</Link>
                    </div>

                    <Routes>
                        <Route path={`/${PAGES.LOGIN}`} element = {<LoginSquard />} />
                        <Route path={`/${PAGES.SIGNUP}`} element = {<CreateAccountSquard />} />              
                        <Route path='/*' element = {<NotFound />} />              
                    </Routes>   

                </div>
            </div>
        </BrowserRouter>
    )
}


const Home = () =>{
    return (
        <h1>Hello</h1>
    )
}

const NotFound = () => {
    return (
        <h1> 404: Page not found</h1>
    )
}


export default AccountForm;