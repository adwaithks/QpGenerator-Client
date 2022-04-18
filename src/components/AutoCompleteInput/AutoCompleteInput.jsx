import React from 'react'
import './AutoCompleteInput.scss';

function AutoCompleteInput() {

  const inputRef = React.useRef(null);
  const [inputText, setInputText] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  const colleges = ['College of Engineering Kallooppara',
    'College of Engineering Chengannur', 'Providence Engineering College'];

  function inputChangeHandler(e) {
    if (e.target.value == "") {
      setSuggestions([]);
      setInputText(e.target.value);
      return;
    }
    setInputText(e.target.value);
    const sugg = colleges.filter((college) => {
      const regex = new RegExp(e.target.value, 'gi');
      return college.match(regex);
    });
    setSuggestions(sugg);
  }


  return (
    <div className='autocomplete-input'>
      <input ref={inputRef} placeholder='College Name' value={inputText} onChange={inputChangeHandler} type="text" />
      {
        suggestions ? (
          <ul className='suggestion-container'>
            {
              suggestions.map((sug) => (
                <li onClick={(e) => {
                  setInputText(sug);
                  setSuggestions([]);
                }} className='suggestion'>{sug}</li>
              ))
            }
          </ul>
        ) : (null)
      }
    </div>
  )
}

export default AutoCompleteInput