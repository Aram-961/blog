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
          <ReactQuill theme='snow' value={value} onChange={setValue} />
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
          <input type='file' name='' id='file' />
          <label for='file'>upload image</label>
        </div>

        {/* item 2 */}
        <div className='item'></div>
      </div>
    </div>
  );
};

export default Write;
