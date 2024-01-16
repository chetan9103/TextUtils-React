import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleOnClick1 = (e) => {
    e.preventDefault();

    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("converted to uppercase", "success");
  };
  const handleOnClick3 = (e) => {
    e.preventDefault();

    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleOnClick4 = (e) => {
    e.preventDefault();

    setText("");
    props.showAlert("text cleared", "success");
  };
  const handleOnClick2 = (e) => {
    e.preventDefault();
    let regex = /\s+/g;
    let replacetext = text.replace(regex, " ");
    setText(replacetext);
    props.showAlert("extra spaces removed", "success");
  };
  const [text, setText] = useState("");
  return (
    <div style={{ color: props.theme === "light" ? "black" : "white" }}>
      <form>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter the text"
            onChange={handleOnchange}
            style={{
              backgroundColor: props.theme === "light" ? "white" : "#434040",
              color: props.theme === "light" ? "black" : "white",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnClick1}
        >
          convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleOnClick3}
        >
          convert to lower case
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnClick2}
        >
          remove extra spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleOnClick4}
        >
          Clear Text
        </button>
      </form>
      <div className="container my-3">
        <h2>Your text summary</h2>

        <p>
          {text.split(/\s+/).filter((word) => word !== "").length}words and{" "}
          {text.length}characters
        </p>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length * 0.008}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
