import React from "react";
import "../Qlist/Qlist.css"


const Qlist=(props)=>{
    let localQuesList=[];
    // let localQuesList = new Set();


    // let quesList=new Set();
    let quesList=[
          {id:0,question:"What is the color of sky?"},
          {id:1,question:"When was India won the first World Cup?"},
          {id:2,question:"When did the world war start?"},
          {id:3,question:"What is the famous food of odisha?"},
          {id:4,question:"Difference between stress and strain?"},
          {id:5,question:"How did the world war start?"},
        
     ]

   


    


    localQuesList=JSON.parse(localStorage.getItem('QuestionList'));
    
      
    return(
        <div className="list-card">
            <h2 className="h2-qlist">{props.title}</h2>
            <div className="list">
           { 
            
            localQuesList && localQuesList.map((e,index)=>
                <span className="sub-tags"  key={index} >
                        <p onClick={()=>props.print(e)} className="ptag" >{e}</p>
                </span>
            )
         
           
           }

            {   
                
                quesList && quesList.map((data)=>
                <span className="sub-tags" key={data.id}>
                        <p onClick={()=>props.print(data.question)} className="ptag" >{data.question}</p>
                </span>
                )
            }
            </div>   

        </div>

    )
}
export default Qlist
