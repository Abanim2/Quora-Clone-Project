import React from 'react';
import "./App.css";
import Navbar from "../src/components/Navbar/Navbar"
import Home from '../src/components/Home/Home';
import AddQues from '../src/components/AddQues/AddQues';
import AnsQues from '../src/components/AnsQues/AnsQues';
import Login from '../src/components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../src/components/Register/Register';
import {useState} from 'react';
import Confirm from '../src/components/Confirm/Confirm';





const App = () => {


    const [count,setCount]=useState(0);

    const [questionObj,setQuestionObj]=useState([])

    const [quesAns,setQuesAns]=useState([])
 
    const [search,setSearch]=useState('')

    const [searchedQues,setSearchedQues]=useState('')
    const [searchedAns,setSearchedAns]=useState('')

    function searching(){

        var QuestionAnswerList = JSON.parse(localStorage.getItem('QuestionAnswer'));
        QuestionAnswerList.map((data)=>
          (data.question===search?setSearchedQues(data.question)&setSearchedAns(data.answer):setSearchedQues("This question is not Found")&setSearchedAns("So please submit your question"))
            
        )
   
      

    }

  

  return (
    <div className="browser-router">
      <BrowserRouter >
        <Navbar search={search} setSearch={setSearch} searching={searching} />
        <Routes> 
            <Route path="/" element={<Home search={search} searchedQues={searchedQues} searchedAns={searchedAns}  setSearchedQues={setSearchedQues} setSearchedAns={setSearchedAns}/>}/>
            <Route path="/add_ques" element={<AddQues count={count} setCount={setCount} questionObj={questionObj} setQuestionObj={setQuestionObj}/>}/>
            <Route path="/ans_ques" element={<AnsQues quesAns={quesAns} setQuesAns={setQuesAns}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/confirm" element={<Confirm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    

      
     
    
  )
}


export default App;

