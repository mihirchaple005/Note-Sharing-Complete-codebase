import React,{ useState, useEffect } from 'react';
import './Programme.css'
import { Link, Routes, Route, useLocation } from 'react-router-dom';
export default function Subject(props) {
  {/*
    const location = useLocation();
    const showMainContent = location.pathname === '/Subject';
    var notesData={noteName:"",Subject:"",Topic:"",AuthorName:"",date:"",Notefile:""}
  var subj=props.subject;
    const [notedata, setNotedata] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character?subject=subj')
      .then(response => response.json())
      .then(data => setNotedata(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    
    return (<>
    {showMainContent && (<div className='main'> 
         <div className='Subjectpage'>
         <>
      <title> {subj}Notes</title>
      <div id="cards-container">
        {data.map(note => (
          <div key={data.id} className="notes">
            <h2 className='topic'>Topic:{data.topic}</h2>
            <h4 className='description'>{data.description}</h4>
            <h3 className='username'>By: {data.username}</h3>
            <h3 className='date'>Date: {data.date}</h3>
            <button className="empty">Like</button>
          </div>
        ))}
      </div>
    </>
            </div>
            </div>
    )}
            </>
        
      
    );
    */}
}