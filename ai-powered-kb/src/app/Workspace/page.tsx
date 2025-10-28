import React from 'react'

export default function Workspace() {

    return (
        <div className=''>
            <div className='chat-area'>
                <textarea></textarea>
            </div>
            <div className='prompt-input-wrapper'>
                <label htmlFor='prompt-input visually-hidden'></label>
                <input id='prompt-input' name='prompt-input'></input>
            </div>
            <form action="/api" method="post" encType="multipart/form-data">
                <label className="sr-only" htmlFor="file-upload3">Choose File:</label>
                <input className="border-solid border-2 p-[8px]" type="file" id="file-upload" name="uploaded_file" accept=".pdf, .doc, .docx*"></input>
                <button className="p-[8px] bg:red border-solid border-2" type="submit">Upload</button>
            </form>
        </div>
    );
};
