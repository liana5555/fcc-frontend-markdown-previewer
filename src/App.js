
import './App.css';
import Markdown from 'marked-react';
import React from 'react';

const h1 = "# This is the head line\n";
const h2 = "## This is the subline\n";
const linky= "[link](http://freecodecamp.com). This was a link\n";
const inline_code = "`<div></div>` This was inline code.\n";
const multi_line_code = 
          " ```\n        // this is multi-line code: \n"+

                          "function anotherExample(firstLine, lastLine) {\n"+
                            "if (firstLine == '' && lastLine == '') { \n"+
                              "return multiLineCode;\n"+
                            "}\n"+
                          "}\n"+

              "```\n";

const lists= "- Here are some list\n- Another little bullet or something.\n"
const block_quotes="> Block quotes.\n\n"
const image="![some logo](./logo.svg)"
const bold = "**Thank you!**"
            


function App() {
  
  const [textEditor, setTextEditor] = React.useState(h1 + h2 + linky+ inline_code+multi_line_code+lists+block_quotes+image+bold)

  function handleChange(event) {
    setTextEditor(event.target.value)

  }


  return (
    
    <main>
      <h2>Markdown Previewer</h2>
      <div className='label_container'>
        <h3>Editor</h3>
        <h3>Previewer</h3>
      </div>
    <div className='main_container'> 
    <textarea id="editor" value={textEditor} placeholder="Write something here" onChange={handleChange} />
    <div id="preview" >
      <Markdown >{textEditor}</Markdown> 
    </div>
    </div>

    </main>
  );
}

export default App;
