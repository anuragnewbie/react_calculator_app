import React from "react";
import { commaSeperator } from "../helpers/commaSeperatorHelper";

const Calculator = () => {
    const [value, setValue] = React.useState("");
    const [toggle, setToggle] = React.useState("OFF");

    const calculateValue = () => {
        try {
          // Using the Function constructor to evaluate the expression
          let result = new Function(`return ${value}`)();
          result = commaSeperator(result);
          setValue(result);
        } catch (error) {
            setValue("error");
        }
    };

    // changing the toggle button name dynamically
    function handleToggle(event) {
        setToggle(toggle === "ON" ? "OFF" : "ON");
    }

    return (
        <>
            <div className="container">
                <h3>Calculator</h3>

                <br />

                <div className={`calculator ${toggle === "ON" ? "calculatorLightMode" : "calculatorDarkMode"}`}>
                    <button className="toggleButton" onClick={(event) => handleToggle(event)}>{ toggle }</button>

                    <div className="row">
                        <input className={`content ${toggle === "ON" ? "inputLightMode" : "inputDarkMode"}`} type="text" readOnly value={ value } />
                    </div>

                    <div className="box boxMargin">
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={() => setValue("")}>AC</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={() => setValue(value.slice(0, -1))}>CE</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>%</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>/</button>
                    </div>

                    <div className="box">
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>7</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>8</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>9</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>*</button>
                    </div>

                    <div className="box">
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>4</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>5</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>6</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>-</button>
                    </div>

                    <div className="box">
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>1</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>2</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>3</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>+</button>
                    </div>

                    <div className="box">
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>0</button>
                        <button className={`content ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={(event) => setValue(value + event.target.innerText)}>.</button>
                        <button className={`content-box ${toggle === "ON" ? "contentLightMode" : "contentDarkMode"}`} onClick={ calculateValue }>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;
