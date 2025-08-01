import React, { useContext } from 'react';
import './Main.css';
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context';


const Main = () => {
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>AI chatBot</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult?<>
             <div className="greet">
                
                    <span>Hello User</span>
                    <p>how can i help u today</p>
                
            </div>
            <div className="cards">
                <div onClick={()=>onSent('Suggest beautiful places to see an upcoming road trip in brief')} className="card">
                    <p>Suggest beautiful places to see an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                 <div onClick={()=>onSent('Briefly summarize this concept')} className="card">
                    <p>Briefly summarize this concept</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                 <div onClick={()=>onSent('Brainstorm team bonding activities for our work retreat in brief')} className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                 <div onClick={()=>onSent('improve the readability of the following code')} className="card">
                    <p>improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
       
            </>:<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />

                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
}
                </div>
            </div>
            }
           
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="enter a prompt"/>
                    <div>
                        {/* <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" /> */}
                       {input?<img onClick={()=>onSent()}src={assets.send_icon} alt="" />:null} 
                    </div>
                </div>
                 <p className='bottom-info'>
                    AI may display inaccurate info,double check its responses.
                </p>
            </div>

        
        </div>
    </div>
  )
}

export default Main
