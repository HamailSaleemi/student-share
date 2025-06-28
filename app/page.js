'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import axios from 'axios';
export default function Home() {
  const textareaRef = useRef(null);

  let server = '192.168.10.30'
  useEffect(() => {
    axios.get(`http://${server}:8000/data`)
      .then((res) => {
        console.log(res.data); // { data: "whatever you saved" }
        textareaRef.current.value = res.data.data;
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      })
      .catch((err) => {
        console.error("Error fetching:", err);
      });
  }, []);

  function saveData() {
    const data = textareaRef.current.value;
    axios.post(`http://${server}:8000/data`, { "data": data })
      .then((res) => {
        console.log("Data saved successfully:", res.data);
        
      })
      .catch((err) => {
        console.error("Error saving data:", err);
      });
  }

  useLayoutEffect(() => {
    const textarea = textareaRef.current;
    const autoGrow = () => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    };

    textarea?.addEventListener('input', autoGrow);
    autoGrow();

    return () => textarea?.removeEventListener('input', autoGrow);
  }, []);

  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* <div id="nav-context">

      </div> */}
    <div id="text-content" className="w-100 d-flex">
      <div className="d-flex flex-column gap-4 align-items-center icon-container" >
        <i className="material-icons icon-font pt-4" >subject</i>
        <i className="material-icons icon-font ">description</i>
      </div>
      <div className="d-flex flex-column gap-4 w-100 mt-3">
        <label htmlFor="" className="display-4 ps-4 fw-bold">Text</label>
        <textarea ref={textareaRef} name="" className="" id="text-input" cols="30" rows="10" placeholder="Type something..."></textarea>
        {/* <span id="text-input" className="input" role="textbox" contentEditable="true" placeholder="Type something...">

          </span> */}
        <div className='mb-5 d-flex justify-content-end gap-3 me-5' id='buttons-container'>
          <button className='btn '>Clear</button>
          <button className='btn btn-outline-secondary' type='button' onClick={saveData}><i>Save</i></button>
        </div>
      </div>
    </div>

  </main>
}