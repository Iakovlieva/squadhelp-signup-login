import React from "react";
import { SCHEMA } from  "../../../schemas";
import { Formik, ErrorMessage, Form, Field } from "formik";
import styles from "../accountform.module.css";
import cx from 'classnames';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const initialState = {
    firstName: '',
    lastName: '',
    displayName: '',    
    email: '',
    pass: '',
    passConfirm: '',  
    joinUs:'',      
    sendingMarketingOffers:false,
}

function CreateAccountSquard (props) {

    const handleSubmitToFormik = (values, actions) =>{
        console.log('Sending data to server');        
        actions.resetForm();
     }
 
    const inputColor=(errors,touched,name)=>{
        return cx(styles["sign-input"], {
            [styles["sign-input-err"]]: errors[name] && touched[name],
            [styles["sign-input-valid"]]: !errors[name] && touched[name]
        });      
    }

    return (
        <Formik
            initialValues={initialState}
            onSubmit={handleSubmitToFormik}
            validationSchema={SCHEMA}
        >
            {(formikProps) => { 
                const { values, errors, touched, validateForm } =formikProps;

                let err1 = errors.firstName && touched.firstName ? errors.firstName : (
                        errors.lastName && touched.lastName ? errors.lastName : null); 
                let err2 = errors.displayName && touched.displayName ? errors.displayName : (
                        errors.email && touched.email ? errors.email : null); 
              //  let err3 =(touched.pass || touched.passConfirm) && ( (values.pass !== values.passConfirm ) || values.pass.length<=0 ) ? 'Password confirmation needs to match original password' : null;
                let err3 = ((errors.pass && touched.pass) || (errors.passConfirm && touched.passConfirm)) ? errors.passConfirm : null; 
                
                return(
                    <div className={styles["squad-form"]}>
                        <div className={styles["slogan-info"]}> 
                            <h2>CREATE AN ACCOUNT</h2>
                            <h4>We always keep your name and email address private.</h4>
                        </div>                            
                        <Form className={styles["signup-form"]}>  

                            <div className={styles["sign-row"]}>
                                <Field name="firstName" placeholder="First name"  className={inputColor(errors,touched,"firstName")}/>
                                <Field name="lastName" placeholder="Last name" className={inputColor(errors,touched,"lastName")}/>
                            </div>                                     
                                {err1? ( <div className={styles["sign-div-err"]}>{err1}</div> ):null}

                            <div className={styles["sign-row"]}>
                                <Field name="displayName" placeholder="Display Name" className={inputColor(errors,touched,"displayName")}/>    
                                <Field name="email" placeholder="Email Address" type="email" className={inputColor(errors,touched,"email")}/>   
                            </div>                                     
                                {err2? ( <div className={styles["sign-div-err"]}>{err2}</div> ):null}

                            <div className={styles["sign-row"]}>
                                <Field name="pass" placeholder="Password" type="password" className={inputColor(errors,touched,"pass")}/>
                                <Field name="passConfirm" placeholder="Password Confirmation" type="password" className={inputColor(errors,touched,"passConfirm")}/>
                            </div>                                    
                                {err3? ( <div className={styles["sign-div-err"]}>{err3}</div> ):null}

                            <div >
                                <div className={styles["sign-radio"]}>
                                    <label>
                                        <Field type="radio" name="joinUs" value="Buyer" />
                                        Join As a Buyer
                                        <span>I am looking for a Name, Logo or Tagline for my business, brand or product.</span>
                                    </label>
                                </div>
                                <div className={styles["sign-radio"]}>
                                    <label>                                        
                                        <Field type="radio" name="joinUs" value="Seller" />
                                        Join As a Creative or Marketplace Seller
                                        <span>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
                                    </label>
                                </div>
                                <ErrorMessage name="joinUs" component="p" className={styles["sign-div-err"]}/>
                            </div>

                            <label className={styles["sign-label"]}>
                                <Field type="checkbox" name="sendingMarketingOffers" />
                                Allow Squadhelp to send marketing/promotional offers from time to time
                            </label>

                            <button className={styles["sign-button"]} type="submit">Create account</button>

                            <div className={styles["sign-terms"]}>
                                By clicking this button, you agree to our <a href="https://www.squadhelp.com/Terms&amp;Conditions" target="_blank">Terms of Service</a>                                                            
                            </div> 

                            <a className={styles["sign-google-button"]}  href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;access_type=online&amp;client_id=78274772730-f62839c388e8b785mhfh211vr4ueva08.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Flogin.php&amp;state&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&amp;approval_prompt=auto">
                                <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
                            </a>

                        </Form> 
                    </div>
                )
            }}
        </Formik>
    )
 }
 
 export default CreateAccountSquard;