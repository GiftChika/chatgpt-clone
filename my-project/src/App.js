import React from 'react';
import './App.css';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import img1 from './asset/openai.253x256.png';
import background from './asset/machine.jpg';

function App() {
  const [typeEffect] = useTypewriter({
    words:[
        "Pushing the boundaries of AI",
        "Generate a gift idea for my dad's birthday",
        "The future is AI.",
        "Generate a thank you note for an interviewer",
        "Unleashing the power of AI.",
        "Help me debug these codes",
        "AI for a smarter future",
        "Where can I get affordable tacos?",
        
    ],
    loop:{},
    typeSpeed:100,
    deleteSpeed:50,
})
  return (
    <div className="container flex flex-col md:flex-col lg:flex-row 2xl:flex-row xl:flex-row">
      <div style={{backgroundImage: `url(${background})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',w:'100%'}} className="left-side md:w-full   lg:w-[60%]  2xl:w-[70%]  xl:w-[60%]  lg:h-[100vh] 2xl:h-[100vh] xl:h-[100vh] pl-8 pt-[30px] pb-[200px] text-start">
        <div className='flex flex-row items-center'>
            <div className="font-bold text-white text-[25px]">ChatGPT</div>
            <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
        </div>
        <div className='pt-[100px] md:pt-[180px] lg:pt-[280px] 2xl:pt-[280px] xl:pt-[280px]'>
            <div className='tracking-in-expand font-bold text-[35px] text-white ' >Artificial Intelligence, endless possibilities.</div>
            <div className='animate-2 font-medium text-white text-[25px]'>{typeEffect}</div>
        </div>
    </div>
    <div  className="right-side  md:w-full lg:w-[60%]  2xl:w-[60%]  xl:w-[60%]  lg:h-[100vh] 2xl:h-[100vh] xl:h-[100vh] pt-[20px] md:pt-[50px] lg:pt-[350px] 2xl:pt-[350px]  xl:pt-[350px] xl:pl-[80px] 2xl:pl-[200px] flex flex-col items-center">
        <div className='flex flex-col items-center'>
            <div className='text-[32px] font-bold'>Get Started</div>
            <div className='flex flex-row gap-[10px] md:gap-[10px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[20px] pt-4'>
                <div className='bg-blue-950 hover:opacity-75 text-white text-[18px] px-10 md:px-12 lg:px-6 xl:px-8 2xl:px-14 py-3 rounded-xl'>Login</div>
                <div className='bg-blue-950 hover:opacity-75 text-white text-[18px] px-10 md:px-10 lg:px-4 xl:px-8 2xl:px-12 py-3 rounded-xl'>Sign up</div>
            </div>
        </div>
        <div className=' flex flex-col items-center pt-[28px] md:pt-[28px] lg:pt-[200px] 2xl:pt-[200px] xl:pt-[200px]'>
            <div className='flex flex-row items-center gap-1'>
                <div><img className='w-[20px] h-[20px]' src={img1} alt="" /></div>
                <div>OpenAI</div>
            </div>
            <div className='flex flex-row pt-4 gap-4'>
                <div>Terms of Use</div>
                <div>|</div>
                <div>Pricacy Policy</div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
