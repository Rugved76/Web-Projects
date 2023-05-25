import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value);
        // props.showAlert("Converted to lowercase!","success");
    }

    const ClearText = () => {
        console.log("Cleared");
        let newText = "";
        setText(newText)
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={ClearText}>Clear</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
            </div>
        </>
    )
}