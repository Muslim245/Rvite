import { useState } from 'react'
import image1 from '../../assets/images/port1.png'
import image2 from '../../assets/images/port2.png'
import image3 from '../../assets/images/port3.png'
import image4 from '../../assets/images/port4.png'
import image5 from '../../assets/images/port5.png'
import image6 from '../../assets/images/port6.png'
export function Portfolio() {
const [arr , setarr] = useState([image1,image2,image3,image4,image5,image6])
const [index, setindex] = useState(0)
    return <>
   <div className="title text-center pt-28 ">
            <h2 className="uppercase font-bold text-second text-4xl pb-3">portfolio component</h2>
            <div className="w-fit mx-auto relative after:content[''] after:w-20  after:h-1 after:absolute 
             after:bg-second after:bottom-2 after:left-[-100px] before:content['']  before:w-20 before:h-1 before:absolute before:bottom-2 before:right-[-100px] before:bg-second">
            <i className=" fa-solid fa-star text-second "></i>
            </div>        
     </div>
    <div className=" contain w-[85%] mx-auto">
        <div className=" flex flex-wrap">
            {arr.map((image , indx)=>
                 <div key={indx} data-modal-target="default-modal" data-modal-toggle="default-modal" onClick={()=>{
                    setindex(indx)}} className=' md:w-1/2 lg:w-1/3 p-4 '> 
                 <div  className=' relative flex justify-center items-center  group/parent'>
                     <div className='duration-500 absolute z-20 text-slate-50 text-8xl opacity-0 peer group-hover/parent:opacity-100 '><i className=" fa-solid fa-plus"></i></div>
                     <div className='duration-500 absolute inset-0 rounded-lg bg-main opacity-0 hover:opacity-75 z-10 peer-hover:opacity-75'></div>
                    <img className='w-full rounded-lg' src={image} alt="" />
                    </div>
                 </div> )}
        </div>
    </div>
    
<div id="default-modal" tabIndex={-1} aria-hidden="true" className="hidden bg-[#2a78a575] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-full">
      <div className="flex items-center justify-between p-4 md:p-5 rounded-t  ">
      </div>
      <div className="md:w-1/2 mx-auto ">
        <img className='w-full' src={arr[index]} alt="" />
      </div>
      <div className="flex items-center p-4 md:p-5  ay-200 rounded-b ">
      </div>
    </div>
    
    </>
}