import React, { useState } from 'react'


export default function TextForm(props) {


    const [text, setText] = useState('');

    const handleUpClick = () => {
        console.log('Uppercase was clicked');
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("success", "Converted to upper case!");
    }

    const handleLowClick = () => {
        console.log('Lowercase was clicked');
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("success", "Converted to lower case!");
    }

    const handleClearClick = () => {
        console.log('Clear text was clicked');
        let newText = ""
        setText(newText);
        props.showAlert("success", "Text has been cleared!");
    }

    const handleCopy = () => {
        console.log('Copy text was clicked');
        navigator.clipboard.writeText(text)
        props.showAlert("success", "Text has been copied to clipboard!");
    }


    const handleOnChange = (event) => {
        console.log('Onchange');
        setText(event.target.value)
    }



    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? "rgb(11 38 75)" : 'white' }} className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to lowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy text</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length > 0 }).length} words and {text.length} characters</p>
                <p>Approx. {0.008 * text.split(" ").filter((element) => { return element.length > 0 }).length} minutes required to read</p>
            </div>
        </>
    )
}