


import {
  GoogleGenAI,
} from '@google/genai';
// require('dotenv').config();
// const { GoogleGenAI } =require("@google/genai");
let key=import.meta.env.VITE_AI_API_KEY;


const ai = new GoogleGenAI({ apiKey: key});
let chattingHistory={prompt:[]};

async function main(msg){
    if(!chattingHistory.prompt){
    chattingHistory.prompt=[];
     };
  
     let oldChats=chattingHistory.prompt;
    
       let pro=[...oldChats,{
        role:"user",
        parts:[{text:msg}]
    }];
    let answer=await getResponse(pro);
     oldChats.push({role:"user",parts:[{text:msg}]});
    oldChats.push({role:"model",parts:[{text:answer}]});
   
    history.prompt=oldChats;
    return answer;
    
    

}



async function getResponse(msg) {
 
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: msg ,
  });
  
  return response.text;
}

export default main;

