import React, {useState} from 'react'

export default function TextForm(props) {

  const wordsLen = (text)=>{
    let words = text.split(" ");
    let wordsLen = words.length;
    words.forEach((element) => {
      if (element === '') {
        wordsLen--;
      }
    });
    return wordsLen;
  } 

  const lettersLen = (text)=>{
    let letters ={}
    let countText = Array.from(text);
      let count = 0;
      let space = 0;
      for (let index = 0; index < countText.length; index++) {
        if (countText[index] !== ' ') {
          count++;
        }
        else{
          space++;
        }
      }
        letters['char']= count;
        letters['emptySpace']=space;
        return letters;
  }

  const [text, setText] = useState('');


  const toUpCase = ()=>{
      let newText = text.toUpperCase();
      setText(newText);
    }

  const toLowCase = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
    }

  const onChangeFunc = (event)=>{
      setText(event.target.value);
    }

  const clearAll = ()=>{
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

  return (
    <>
    <div className='container my-5'>
        <h1>{props.heading}</h1>
      <textarea id="textArea" className="form-control" value={ text } onChange={onChangeFunc} aria-label="With textarea"></textarea>
      <div id="alert"></div>
      <button className="btn btn-primary my-3 mx-3" onClick={toUpCase}>convert to UPPERCASE</button>
      <button className="btn btn-primary my-3 mx-3" onClick={toLowCase}>CONVERT to lowercase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={clearAll}>Clear text</button>
    <div className="dropdown mx-3">
      <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Change font style
      </a>

      <ul className="dropdown-menu" id="fonts" aria-labelledby="dropdownMenuLink">
        <li className="dropdown-item" onClick={toBold}><b>BOLD</b></li>
        <li className="dropdown-item" onClick={toItalic}><i>ITALIC</i></li>
      </ul>
    </div>
   </div>
    <div className="container">
      <h2>Your text summary</h2>
      <p>{wordsLen(text)} words and {lettersLen(text).char} characters and {lettersLen(text).emptySpace} spaces.</p>
      <p>{0.125 * wordsLen(text)} minutes will take to read this.</p>
      <h3>Preview</h3>
      <p id="preview" >{text}</p>
    </div>
    </>
  )
}
