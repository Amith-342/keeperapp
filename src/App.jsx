import React,{useState} from 'react'
import Header  from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import Notes from "./Notes"
import Input from "./Input"
//import notes from './Notes';



function makeNotes(notes){
  
  return (
    
   

    <Note

   key  = {notes.id} title={notes.title} content = {notes.content}
    
    />
  );
}

function Keeper() {

var [Notes,setNotes] = useState([]);

  function onAdd(Value){
console.log("Len:"+Notes.length);
    var newValue = {
      id:Notes.length+1,
      title:Value.title,
      content:Value.content
    }
  setNotes(prev=>{
  
   return [...prev,newValue];
  }
   );
  
  }

  return (
    <div><title>Keeper App</title>
   
    <Header />
    <Input 
    addItem = {onAdd}
    /> 
    {Notes.map(makeNotes)}
<Footer />
    
    </div>

  )
}

export default Keeper