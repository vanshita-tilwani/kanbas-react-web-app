import ClickEvent from "./ClickEvent";
import FunctionsAsParameters from "./FunctionsAsParameters";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import React from 'react';
import ReduxExamples from "./ReduxExamples";


function Assignment4() {
    function sayHello() {
        alert("Hello")
    }

    return (
        <div>
            <h1>Assignment 4</h1>
            <ReduxExamples />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <FunctionsAsParameters />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
        </div>
    );
}

export default Assignment4;