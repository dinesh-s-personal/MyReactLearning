import React from "react";
import { CompE } from "./CompE";
import { CompF } from "./CompF";

export const CompC = (props) => {

    return <div>
        <h1>CompC</h1>

        <CompE propSwitch={props.propSwitch}/>
        <CompF />
    </div>
}  