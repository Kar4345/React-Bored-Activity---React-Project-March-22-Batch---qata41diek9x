import React, { useEffect, useState } from 'react'
import '../styles/App.css';

const Loader = () => <div id="loader">Loading...</div>


const App = () => {
  const [urlType,setUrlType] = useState("education");
  const [activity,setActivity] = useState("");

  const makeURL = (type) => `http://www.boredapi.com/api/activity?type=${type}`;

  const onEduHandler = ()=>{
    setUrlType("education");
    
  }
  const onRecHandler = ()=>{
    setUrlType("recreational");
    
  }
  async function createInfo(){
    const getInfo = await fetch(makeURL(urlType));
    const data = await getInfo.json();
    setActivity(data.activity);
    console.log(data.activity)
  }
  
  useEffect(()=>{
    createInfo();
  },[urlType])

  return (
    <div id="main">
      <div id='activity'>{activity===""?Loader():activity}</div>
      <button id='btn-education' onClick={onEduHandler}>Education</button>
      <button id='btn-recreation' onClick={onRecHandler}>Recreation</button>
    </div>
  )
}


export default App;
