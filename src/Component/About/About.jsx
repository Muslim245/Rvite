export const About = () => {
    return <>
    <div className="contain h-screen bg-main flex flex-col justify-center text-slate-50">
    <div className="title text-center py-5 w-3/4 mx-auto">
            <h2 className="uppercase font-bold text-slate-50 text-4xl pb-3">about component</h2>
            <div className="w-fit mx-auto relative after:content[''] after:w-20  after:h-1 after:absolute 
             after:bg-slate-50 after:bottom-2 after:left-[-100px] before:content['']  before:w-20 before:h-1 before:absolute before:bottom-2 before:right-[-100px] before:bg-slate-50">
            <i className=" fa-solid fa-star text-slate-50 "></i>
            </div>  
            <div className="flex flex-col md:flex-row gap-8 text-left ">
            <p className="w-full md:w-1/2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>  
            <p className="w-full md:w-1/2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>  
            </div>
            </div>
    </div>
    </>
}