import { useState } from "react";
import "./App.css";
import emojiData from "./emoji.json"; //json file having all emoji data
function App() {
  const emptyArrary = emojiData; // json file imported with all emoji interpretation
  const [emoji, setEmoji] = useState(""); // used to track current selected emoji
  const [emojiTranslation, setemojiTranslation] = useState(
    "emoji description will appear here"
  ); // dynamically change the value o f description for the emoji

  // function to check for a description for the input emoji from the emojidata api

  // **********function declarations**********************//
  function hello(items, emoji) {
    const value = items.find(function (list, index) {
      return list.char === emoji;
    });
    let description = value;
    return description;
  }

  function changeHandler(e) {
    let inputEmoji = e.target.value;
    let data = hello(emptyArrary, inputEmoji);

    setemojiTranslation(data.name);
    setEmoji(inputEmoji);
  }

  return (
    <div className="App">
      <header className="heading">Emoji Translator</header>
      <div className="container">
        <input
          value={emoji}
          onChange={changeHandler}
          placeholder="enter the emoji here"
        />
        <div className="image">
          <span>{emoji}</span>
          <h3 class>{emojiTranslation}</h3>
        </div>
        <div className="buttonContainer">
          <button
            className="glow-on-hover"
            onClick={() => {
              setEmoji("");
              setemojiTranslation("Enter another character");
            }}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
