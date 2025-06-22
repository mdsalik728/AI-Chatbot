const API_KEY="AIzaSyCkZpz1xB1OTUvSIXtUhDupA_PpBJkysxM"
// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node


import {
  GoogleGenAI,
} from '@google/genai';
// require('dotenv').config();
// const { GoogleGenAI } =require("@google/genai");
let key=process.env.REACT_AI_API_KEY;


const ai = new GoogleGenAI({ apiKey: 'AIzaSyCkZpz1xB1OTUvSIXtUhDupA_PpBJkysxM'});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: msg  ,
  });
  console.log(response.text);
  return response.text;
}

export default main;

// async function main(prompt) {
//   const ai = new GoogleGenAI({
//     apiKey: API_KEY,
//   });
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     responseMimeType: 'text/plain',
//   };
//   const model = 'gemini-2.5-pro';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: prompt,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();
