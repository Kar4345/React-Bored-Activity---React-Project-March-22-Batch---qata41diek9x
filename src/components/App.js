import React, { useEffect, useState } from 'react'
import '../styles/App.css';

const Loader = () => <div id="loader">Loading...</div>


const App = () => {
  const [activity,setActivity] = useState("");

  const makeURL = (type) => `http://www.boredapi.com/api/activity?type=${type}`;

  const onEduHandler = ()=>{
    createInfo("education");
    setActivity("")
  }
  const onRecHandler = ()=>{
    
    createInfo("recreational");
    setActivity("")
  }
  async function createInfo(type){
    const getInfo = await fetch(makeURL(type));
    const data = await getInfo.json();
    setActivity(data.activity);
    console.log(data.activity)
  }
  
  useEffect(()=>{
    createInfo("education");
  },[])

  return (
    <div id="main">
      {activity?<div id='activity'>{activity}</div>:Loader()}
      <button id='btn-education' onClick={onEduHandler}>Education</button>
      <button id='btn-recreation' onClick={onRecHandler}>Recreation</button>
    </div>
  )
}


export default App;
