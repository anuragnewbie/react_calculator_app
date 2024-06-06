import React from "react";

const Calculator = () => {
    const [value, setValue] = React.useState("");

    const calculateValue = () => {
        try {
          // Using the Function constructor to evaluate the expression
          const result = new Function(`return ${value}`)();
          setValue(result);
        } catch (error) {
            setValue("error");
        }
    };

    return (
        <>
            <div className="container">
                <h3>Calculator</h3>
                <br />
                <div className="calculator">
                    <div className="row">
                        <input type="text" readOnly value={ value } />
                    </div>

                    <div className="box boxMargin">
                        <button className="content" onClick={(event) => setValue("")}>AC</button>
                        <button className="content" onClick={(event) => setValue(value.slice(0, -1))}>CE</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>%</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>/</button>
                    </div>

                    <div className="box">
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>7</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>8</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>9</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>*</button>
                    </div>

                    <div className="box">
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>4</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>5</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>6</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>-</button>
                    </div>

                    <div className="box">
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>1</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>2</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>3</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>+</button>
                    </div>

                    <div className="box">
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>0</button>
                        <button className="content" onClick={(event) => setValue(value + event.target.innerText)}>.</button>
                        <button className="content-box" onClick={ calculateValue }>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;
