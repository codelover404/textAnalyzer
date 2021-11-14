import React, { useState } from 'react';

function TextForm(props) {

    const convertUp = () => {
        let res = text.toUpperCase();
        setText(res);
    }

    const changeUp = (e) => {
        setText(e.target.value)
    }
    const darkmode = () => {

    }

    const clearbtn = () => {
        let newText = ' ';
        setText(newText)
    }


    const preventDefault = (e) => {
        e.preventDefault()
    }

    const [text, setText] = useState("");
    // console.log(text)

    

const [myStyle,newStyle]=useState({
    color:"gray",
    backgroundColor:"#eee"
})     

const copyText=()=>{
    let text = document.querySelector("#textarea");
    text.select();
    navigator.clipboard.writeText(text.value)
}

const removeSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(("")))
}

// dark mode

const darkMode=()=>{
    if(myStyle.color=="gray"){
        newStyle({
            color:"red",
            backgroundColor:"#000"
        }) 
        let moon=document.querySelector("#moon").style.display="none";
    }else{
        newStyle({
            color:"gray",
            backgroundColor:"#eee"
        }) 
        let moon=document.querySelector("#moon").style.display="block";
    }
}

    return (
        <div>
            <div className="container mt-5 p-3" style={myStyle}>
                <div className="darkmode">
                    {/* <i className="far fa-sun" id="moon" onClick={darkMode} /> */}
                    {/* <i className="far fa-moon" ></i> */}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form onClick={preventDefault}>
                            <h3>{props.heading}</h3>
                            <textarea placeholder="WRITE TEXT" rows="10" value={text} id="textarea" className="form-control" onChange={changeUp} />
                            <button className="btn btn-primary mt-3 " onClick={convertUp}>CONVERT TO UPPERCASE</button>
                            {/* <button className="btn btn-primary mt-3 " onClick={convertToTitle}>CONVERT TO TITLE CASE</button>     */}
                            <button className="btn btn-primary mt-3 mx-2" onClick={clearbtn}>CLEAR</button>
                            <button className="btn btn-primary mt-3 mx-2" onClick={copyText}>COPY TEXT</button>
                            <button className="btn btn-primary mt-3 mx-2" onClick={removeSpace}>REMOVE SPACE</button>
                        </form>
                    </div>
                    <div className="col-md-12 my-4">
                        <h2>Your text summary</h2>
                        <p>{text.split(" ").length}Words a d {text.length} characters.</p>
                        <p>{0.008 * text.split(" ").length} Minutes read.</p>
                    </div>
                    <div className="col-md-12">
                        <h2>Preview Text</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TextForm;