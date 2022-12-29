import React, { useState } from 'react'




function Input(props) {

  //  var notes = [
  //       {
  //         key: 1,
  //         title: "Delegation",
  //         content:
  //           "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
  //       },
  //       {
  //         key: 2,
  //         title: "Loops",
  //         content:
  //           "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
  //       },
  //       {
  //         key: 3,
  //         title: "Arrays",
  //         content:
  //           "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
  //       },
  //       {
  //         key: 4,
  //         title: "Hardware vs. Software",
  //         content:
  //           "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  //       },
  //       {
  //         key: 5,
  //         title: "Hardware vs. Software",
  //         content:
  //           "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  //       }
  //     ];

var boxtitle="";
var boxcontent = "";

var [Value,setValue] = useState({
    
});

function handleTitle(event){
     boxtitle = event.target.value;
     
    setValue(prev=>{
        if(event.target.name === "titleInput"){
        return{
        title:boxtitle,
        content:prev.content}}
        else{
            return {
            title:prev.title,
            content:boxtitle}
        }
    });
    
}

function handleContent(event){
    boxcontent = event.target.value;
    
}


function handleBtn(){
    
{props.addItem(Value); }


    setValue({
        
        title:"",
        content:""
    });
    console.log("yes"+Value.title);
    
    
  
   
    
}
  return (
    <div className='note-title inputBox'>
    <input onChange={handleTitle} className='inputTitle' type="text" name="titleInput" placeholder="Title" value={Value.title}/>
    <input onChange={handleTitle} className='inputContent inputTitle' type="text" name="contentInput" placeholder = "Take a Note..." value={Value.content} />
    <button onClick={handleBtn} className='inputAdd'>Add</button>
    </div>
  )
}



export default Input;
//export {Valuenotes};