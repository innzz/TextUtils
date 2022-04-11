import React, {useState} from 'react'

export default function TextForm(props) {

  const wordsLen = (text)=>{
    let words = text.split(/\s+/).filter((element)=>{return element !== ""}).length;
    return words;
  } 

  const lettersLen = (text)=>{
        let letters = text.split(/\s+/).filter((element)=>{return element !== ""}).join('').length;
        return letters;
  }

  const [text, setText] = useState('');


  const toUpCase = ()=>{
      props.showAlert('your text converted to upper case','success');
      let newText = text.toUpperCase();
      setText(newText);
    }

  const toLowCase = ()=>{
    props.showAlert('your text converted to lower case','success');
    let newText = text.toLowerCase();
    setText(newText);

    }

  const onChangeFunc = (event)=>{
      setText(event.target.value);
    }

  const clearAll = ()=>{
    props.showAlert('All text cleared','success');
      let newText = '';
      setText(newText);
    }

  const toBold = ()=>{
    let preview = document.getElementById('preview');
    preview.innerHTML = `<b>${text}</b>`;
  }

  const toItalic = ()=>{
    let preview = document.getElementById('preview');
    preview.innerHTML = `<i>${text}</i>`;
  }

  const copyText = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert('Added to clipboard','success');
  };

  const removeSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  };

  return (
    <>
    <div className='container my-5'>
        <h1 style={{color:`${props.mode==='light'?'black':'white'}`}}>{props.heading} to count words and characters.</h1>
      <textarea id="textArea" className="form-control" value={ text } onChange={onChangeFunc} aria-label="With textarea" style={{color:`${props.mode==='light'?'black':'white'}`,backgroundColor:`${props.mode==='light'?'white':'#52535a'}`}}></textarea>
      <div id="alert"></div>
      <button className="btn btn-primary my-3 mx-3" onClick={toUpCase}>convert to UPPERCASE</button>
      <button className="btn btn-primary my-3 mx-3" onClick={toLowCase}>CONVERT to lowercase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={clearAll}>Clear text</button>
      <button className="btn btn-primary my-3 mx-3" onClick={copyText}>Copy text</button>
      <button className="btn btn-primary my-3 mx-3" onClick={removeSpaces}>remove extra spaces</button>
    <div className="dropdown mx-3">
      <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{color:`${props.mode==='light'?'black':'white'}`}}>
        Change font style
      </a>

      <ul className="dropdown-menu" id="fonts" aria-labelledby="dropdownMenuLink">
        <li className="dropdown-item" onClick={toBold}><b>BOLD</b></li>
        <li className="dropdown-item" onClick={toItalic}><i>ITALIC</i></li>
      </ul>
    </div>
   </div>
    <div className="container" style={{color:`${props.mode==='light'?'black':'white'}`}}>
      <h2>Your text summary</h2>
      <p>{wordsLen(text)} words and {lettersLen(text)} characters.</p>
      <p>{0.125 * wordsLen(text)} minutes will take to read this.</p>
      <h3>Preview of text</h3>
      <div className="container p-3" style={{border:`${wordsLen(text) >= 1?'2px solid grey':'0px'}`,borderRadius:`${wordsLen(text) >= 1?'10px':'0px'}`}}>
      <h2 id="preview" >{text}</h2>
      </div>
    </div>
    </>
  )
}
