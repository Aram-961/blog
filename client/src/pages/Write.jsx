import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className='add'>
      <div className='content'>
        <input type='text' name='' placeholder='Title' />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className='menu'>
        {/* item 1 */}
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input type='file' style={{ display: "none" }} name='' id='file' />
          <label className='file' for='file'>
            upload image
          </label>
          <div className='buttons'>
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>

        {/* item 2 */}
        <div className='item'>
          <h1>category</h1>
          <div className='cat'>
            <input type='radio' name='cat' value='art' id='art' />
            <label for='art'>Art</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='news' id='news' />
            <label for='art'>News</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='politics' id='politics' />
            <label for='art'>Politics</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='tech' id='tech' />
            <label for='art'>Technology</label>
          </div>
          <div className='cat'>
            <input type='radio' name='science' value='science' id='science' />
            <label for='art'>Science</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
