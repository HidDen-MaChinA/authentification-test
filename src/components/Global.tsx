import React, { useState } from "react";
import { signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect } from "react";
import { Button} from "@mui/material";
import {auth} from '../conf/firebase'
import { useNavigate } from "react-router-dom";
import './authentification/Login.css';
export default function (): React.ReactElement {
  const navigate=useNavigate()
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            
        }
        else{
          navigate('/Login');
        }
    });
    function logout(){
        signOut(auth).then(() => {
            navigate("/login")
          }).catch((error) => {
            // An error happened.
          });
    }
    return (<div className="global">
            <h1 className="connected">Connected !</h1>
            <Button variant="contained" type={"submit"} onClick={logout} className="logout">Log out</Button>
        </div>
    )
}