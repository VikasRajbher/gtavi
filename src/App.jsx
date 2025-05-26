import React, { useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';

function App() {

  let [ShowContent, SetShowContent] = useState(false);

  useGSAP(()=>{
    const tl= gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%  ",
      delay: .6,
    })

    .to(".vi-mask-group",{
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease:"expo.easeinOut",
      transformation:"50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress() >=.9){
          document.querySelector(".svg").remove();
          SetShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP (()=>{

    if(!ShowContent) return;

    gsap.to(".main",{
      scale: 1,
      rotate: 0,
      duration: 2,
      ease:"expo.easeInOut",
      delay:-1,
    });

    gsap.to(".sky",{
      scale: 1.2,
      rotate: 0,
      duration: 2,
      ease:"expo.easeInOut",
      delay:-1,
    });

    gsap.to(".bg",{
      scale: 1.2,
      rotate: 0,
      duration: 2,
      ease:"expo.easeInOut",
      delay:-1,
    });

    gsap.to(".character",{
      scale: 1,
      bottom: 0,
      rotate: 0,
      duration: 2,
      ease:"expo.easeInOut",
      delay:-1,
    });

    gsap.to(".text",{
      scale: 1,
      rotate: 0,
      duration: 2,
      ease:"expo.easeInOut",
      delay:-1.5,
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5)*40;
      gsap.to(".main .text",{
        x:`${xMove * 0.4}%`,
      });
      gsap.to(".sky",{
        x: xMove,
      });
      gsap.to(".bg",{
        x:xMove*1.1,
      });
    })
  }, [ShowContent]);


  return (
    <>
    <div className='svg fixed top-0 left-0 z-[12] w-full h-screen overflow-hidden bg-black'>
      <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <mask id='viMask'>
            <rect width="100%" height="100%" fill='black' />
            <g className='vi-mask-group'>
              <text
              x="50%"
              y="50%"
              fontSize="300"
              textAnchor='middle'
              fill="white"
              >
                VI
              </text>
            </g>
          </mask>
        </defs>
        <image 
        href='./bg.png'
        width="100%"
        height="100%"
        preserveAspectRatio='xMidYMid slice'
        mask="url(#viMask)"
        />
      </svg>
    </div>
    {ShowContent && <div className='main w-full rotate-[-10deg] scale-[1.7]'>
      <div className='landing overflow-hidden relative w-full h-screen  bg-black'>
        <div className='navbar absolute top-0 left-0 w-full py-10 px-10 z-[10]'>
          <div className='logo flex gap-5'>
            <div className='lines flex flex-col gap-1'>
              <div className='line w-7 h-1 bg-white'></div>
              <div className='line w-5 h-1 bg-white'></div>
              <div className='line w-3 h-1 bg-white'></div>
            </div>
            <h3 className='text-3xl -mt-2 leading-none text-white'>Rockstar</h3>
          </div>
        </div>
        <div className='imagesdiv relative overflow-hidden w-full h-screen'>
          <img className='absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
          <img className='absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />

          <div className='text text-white flex flex-col gap-3 top-10 absolute left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]'>
            <h1 className='text-6xl leading-none -ml-10'>grand</h1>
            <h1 className='text-6xl leading-none ml-10'>theft</h1>
            <h1 className='text-6xl leading-noe  -ml-10'>auto</h1>
          </div>
          <img className='absolute character scale-[2]  bottom-[-150%] left-1/2 -translate-x-1/2 w-md rotate-[-20deg] ' src="./girlbg.png" alt="" />
        </div>
        <div className='btmbar absolute text-white bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent'>
          <div className='flex gap-3 items-center'>
            <i className="text-xl ri-arrow-down-line"></i>
            <h3 className='text-md font-[BookAnitqua]'>Scroll Down </h3>
          </div>
          <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12' src="./ps5.png" alt="" />
        </div>
      </div>
      <div className='relative w-full h-screen flex items-center justify-center bg-black'>
        <div className='cntnr flex text-white w-full  '>
          <div className='limg  w-350 h-full'>
           <img className='absolute -mt-50' src="./imag.png" alt="" />
          </div>
          <div className='rg w-full px-15 mt-20'>
            <h1 className='text-5xl mb-5'>still runing</h1>
            <h1 className='text-5xl'>not hunting</h1>
            <p className='w-100  mt-10 font-[BookAntiqua]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, commodi qui ducimus modi doloribus laboriosam dolorum aut nemo fuga perspiciatis ex at consectetur nam in ipsum eligendi est beatae adipisci?</p>
            <p className='w-100 mt-3 font-[BookAntiqua]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='bg-yellow-500 text-black w-60 h-12 text-2xl mt-5'>Download Now</button>
          </div>
        </div>
      </div>
      <div className=' overflow-hidden  w-full mt-30 text-center over font-[BookAntiqua]'>
        <h1 className='text-6xl  py-5  bg-gradient-to-r from-[#ff512f] to-[#dd2476] bg-clip-text text-transparent '>Vice city, USA.</h1>
        <p className='text-4xl px-30 leading-none py-1 bg-gradient-to-t from-[#ff512f] to-[#dd2476] bg-clip-text text-transparent '>Jason and Lucia have always known the deck is stacked against them. But when an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America, in the middle of a criminal conspiracy stretching across the state of Leonida — forced to rely on each other more than ever if they want to make it out alive.</p>
      </div>
      <div className='mt-10 '>
        <img src="./vc.jpg" alt="" />
      </div>
      <div className='relative text-center overflow-hidden'>
  {/* GTA Text above VI */}
  <div className='absolute inset-0  flex flex-col items-center justify-center z-10'>
    <div className='text-white font-extrabold text-5xl leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]'>
      grand <br /> theft <br /> auto
    </div>
  </div>

  {/* VI Background Text */}
  <div className='text-[250px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-pink-500 via-yellow-400 to-purple-600 select-none'>
    VI
  </div>
      </div>
      <div className='w-full text-6xl bg-gradient-to-b text-center -mt-10 from-[#3e75ed] to-[#70e13fa5] bg-clip-text text-transparent font-[BookAquatica]'>
        coming soon <br/> 26 May,2026
      </div>
      <div>
        <div className='mt-10 w-full items-center relative flex gap-3 justify-center text-white font-[BookAquatica]'>
          <h3 className='text-3xl text-center'>Available on:</h3>
          <img className='w-80 ' src="./ps5.png" alt="" />
        </div>
        <div className='font-[BookAquatica] m-5 relative gap-4 items-center justify-center w-full flex text-white  text-sm'>
          <h3 className='bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent'>Corporate</h3>
          <h3 className='bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent'>Privacy</h3>
          <h3 className=' bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent'>Cookie Setting</h3>
          <h3 className=' bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent'>Cookie Policy</h3>
          <h3 className='bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent'>Legal</h3>
          <h3 className=' bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent'>Do Not Sell Or Share My Personall Information</h3>
        </div>
        <div className='w-full gap-5 items-center justify-center relative flex  overflow-hidden'>
          <img className='w-12' src="./logo18.png" alt="" />
          <p className='text-white font-[BookAquatica]'>May contain content inappropriate for children.
Visit esrb.org for rating information.</p>
        </div>
      </div>
    </div>}
  </>
  );
}

export default App