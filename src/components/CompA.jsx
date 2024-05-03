import React from "react";
import { CompC } from "./CompC";

export const CompA = (props) => {

    return <div>
        <h1>CompA</h1>

        <CompC propSwitch={props.propSwitch}/>
    </div>
}  