import React from "react"

import image from '../../assets/images/avataaars.svg'
export function Home() {
    return (
        <div className="bg-main h-screen flex  items-center ">
           <div className="container flex flex-col items-center gap-4">
            <img className="w-1/6" src={image} alt="avataaars" />
            <h2 className="uppercase font-bold text-slate-50 text-4xl">start Framework</h2>
            <div className=" relative after:content[''] after:w-20  after:h-1 after:absolute 
             after:bg-slate-50 after:bottom-2 after:left-[-100px] before:content['']  before:w-20 before:h-1 before:absolute before:bottom-2 before:right-[-100px] before:bg-slate-50">
            <i className=" fa-solid fa-star text-slate-50 "></i>
            </div>
            <p className="text-slate-50">Graphic Artist - Web Designer - Illustrator</p>
           </div>
        </div>
    )
}