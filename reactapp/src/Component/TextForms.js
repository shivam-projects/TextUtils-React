import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    // console.log("Up Click" + text);
    setText("You have clicked onHandleClick");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("Up Click" + text);
    setText("You have clicked onHandeLoClick");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleCleanClick = () => {
    // console.log("Up Click" + text);
    setText("");
    props.showAlert("Clean!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    // console.log("Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode==='dark'? '#042743': 'white', color:props.mode=== 'dark'?'white': '#042743'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Covert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Covert to LowerCase
        </button>
        <button className="btn btn-primary" onClick={handleCleanClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {" "}
          {text.split(" ").length} words and charaters {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} mintes to read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
      </div>
    </>
  );
}
