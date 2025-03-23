import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let UpperCaseText = text.toUpperCase();
        setText(UpperCaseText)
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }    
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert to upper case</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} characters(included spaces)</p>
            <p>{text.split(" ").length * 0.008} Minutes to read</p>
        </div>
        </>
    )
}
