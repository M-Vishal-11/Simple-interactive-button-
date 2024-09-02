import {useState} from "react";

export default function App() {
  const [isDay, UpdateIsDay] = useState(true);
  let item1;
  let item2;
  let thing;
  let morning;
  if(isDay){
    item1 = "Home Work";
    item2 = "Class Work";
    thing= (<ul>
      <li className="list-disc list-inside">{item1}</li>
      <li className="list-disc list-inside">{item2}</li>
    </ul>)
  }else{
    
    item2 = "All work completed";
    thing= (<ul>
      <li className="list-disc list-inside">{item2}</li>
    </ul>)
  }
  if(isDay){
    morning = ("Good Morning!")
  }else{
    morning = ("Good Night!")
  }
  
  return (
    <div>
      <button onClick={() => {UpdateIsDay(!isDay)}} className="hover:scale-125 scale-105 hover:transition-transform hover:duration-300 transform-gpu hover:transform-gpu ease-in duration-200 ml-96 mt-32 bg-fuchsia-300 text-black hover:ring-2 hover:ring-offset-1 hover:ring-lime-900 focus:ring-4 focus:ring-offset-1 focus:ring-lime-900 hover:outline-offset-2 border-fuchsia-400 border-2 hover:border-purple-400 w-20 h-10 hover:bg-fuchsia-700 hover:text-red-100 active:bg-lime-700 focus:bg-green-800 focus:border-transparent focus:text-white">
        Change
      </button>
      <h1 className="transform-gpu hover:transform-gpu bg-gradient-to-r from-red-500 via-orange-500 via-amber-500 via-yellow-500 to-lime-500 hover:bg-gradient-to-t text-4xl text-center p-11 m-11 mt-28 ml-64 font-extrabold text-white w-96 flex justify-center items-center">
        {morning}
      </h1>
      <ul className="transform-gpu hover:transform-gpu transition-all duration-200 hover:duration-300 shadow-lg hover:shadow-xl text-start ml-44 mr-28 bg-teal-200 font-medium text-3xl hover:bg-cyan-400 hover:font-black underline hover:decoration-double border-green-200 hover:border-emerald-500 border-2 hover:border-4 hover:border-dashed p-10">
        <li className="list-outside">Work to be done:</li>
        <li>{thing}</li>
      </ul>
      
    </div>
  )
}