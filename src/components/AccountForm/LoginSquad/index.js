import React, {useState} from "react";
import { SCHEMA_LOGIN } from  "../../../schemas";
import { Formik, ErrorMessage, Form, Field } from "formik";
import styles from "../accountform.module.css";
import cx from 'classnames';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialState = { 
    email: '',
    pass: '',
    rememberMe:false,
}

function LoginSquard (props) {
    const [checkingValues,setCheckingValues] =useState(null);      

    const handleSubmitToFormik = (values, actions) =>{
        console.log('Sending data to server');
        actions.resetForm();
    }    
    
    const inputColorEmail=(errors,touched)=>{  
        return cx(styles["sign-input"], {
            [styles["sign-input-err"]]: errors["email"] && checkingValues
        });      
    }

    const inputColorPass=(errors,touched)=>{  
        return cx(styles["sign-input"], {
            [styles["sign-input-err"]]: errors["pass"] && !errors["email"] && checkingValues
        });      
    }    

    return (
        <Formik
            initialValues={initialState}
            onSubmit={handleSubmitToFormik}                 
            validationSchema={SCHEMA_LOGIN}
        >
            {(formikProps) => {
                const { values, errors, touched, actions, validateForm } =formikProps; 
                    
                let errEmail = errors.email && checkingValues ? errors.email : null;                         
                let errPass= errors.pass && checkingValues && !errors.email ? errors.pass : null;   

                return(
                    <div className={styles["squad-form"]}>
                        <div className={styles["slogan-info"]}> 
                            <h2>LOGIN TO YOUR ACCOUNT</h2>
                        </div>                            
                        <Form className={styles["signup-form"]}>  
                                <Field name="email" placeholder="Email Address" type="email" className={inputColorEmail(errors,touched)}/>                                       
                                {errEmail? ( <div className={styles["sign-div-err"]}>{errEmail}</div> ):null}    
                                <Field name="pass" placeholder="Password" type="password" className={inputColorPass(errors,touched,"pass")}/>   
                                {errPass? ( <div className={styles["sign-div-err"]}>{errPass}</div> ):null}

                                <div className={styles["sign-row"]}>
                                    <label className={styles["sign-label"]}>
                                        <Field className={styles["login-checkbox"]} type="checkbox" name="rememberMe" />
                                        Remember me
                                    </label> 
                                    <a className={styles["login-a"]} href="https://www.squadhelp.com/forgot_password.php">Forgot password</a>
                                </div>  

                                <button onClick={() => validateForm().then(() => setCheckingValues(true))} className={styles["sign-button"]} type="submit"> LOGIN</button> 

                                <a className={styles["sign-google-button"]}  href="https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online&client_id=78274772730-f62839c388e8b785mhfh211vr4ueva08.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Flogin.php&state&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&approval_prompt=auto">
                                    <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                                </a>                                        
                        </Form> 
                    </div>
                )
            }}
        </Formik>
    )
 }
 
 export default LoginSquard;