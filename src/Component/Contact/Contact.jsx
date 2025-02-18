export function Contact() {
    return (
        <div className="container h-screen flex flex-col gap-20">
            <div className="title text-center pt-28">
            <h2 className="uppercase font-bold text-second text-4xl pb-3">conatct section</h2>
            <div className="w-fit mx-auto relative after:content[''] after:w-20  after:h-1 after:absolute 
             after:bg-second after:bottom-2 after:left-[-100px] before:content['']  before:w-20 before:h-1 before:absolute before:bottom-2 before:right-[-100px] before:bg-second">
            <i className=" fa-solid fa-star text-second "></i>
            </div>        
            </div>
<div className="form w-full md:w-1/2 mx-auto px-5">
<form >
  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="floating_email" id="floating_email" className="mb-10 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   blue-500 focus:outline-none focus:ring-0  peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserName</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type name="floating_password" id="floating_password" className="mb-10 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Userage</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="floating_password" id="floating_password" className="mb-10 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserEmail</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="passward" name="floating_password" id="floating_password" className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserPassword</label>
  </div>
  <button type="submit" className="text-white bg-[#1abc9c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center  ">Send Message</button>
</form>
</div>


        </div>
    )
}