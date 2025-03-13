export function Footer() {
    return <>
   <footer className="bg-second">
   <div className="container py-16 mx-auto">
            <div className="up flex gap-10 flex-col md:flex-row text-center py-10 ">
            <div className="First md:w-1/3 text-slate-50">
                <h3 className="text-3xl uppercase ">Location</h3>
                <p className="py-2">2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="second md:w-1/3">
                <h3 className="text-3xl uppercase text-slate-50">AROUND THE WEB</h3>
                <ul className="flex justify-center gap-2 py-2">
                    <li className="size-8 border border-slate-50 rounded-full flex justify-center items-center">
                    <i className="fa-brands fa-facebook text-slate-50"></i>
                    </li>
                    <li className="size-8 rounded-full border border-slate-50 flex justify-center items-center" >
                    <i className="fa-brands fa-twitter text-slate-50"></i>
                    </li>
                    <li className="size-8 rounded-full border border-slate-50 flex justify-center items-center">
                    <i className="fa-brands fa-linkedin text-slate-50"></i>
                    </li>
                    <li className="size-8 rounded-full border border-slate-50 flex justify-center items-center">
                    <i className="fa-solid fa-globe text-slate-50"></i>
                    </li>
                </ul>
            </div>
            <div className="third md:w-1/3 text-slate-50">
                <h3 className="text-3xl uppercase ">ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme <br />  created by Route</p>
            </div>
            </div>
        </div>
        <div className="down">
             <p className="bg-third text-slate-50 text-center py-5">Copyright <i className="fa-regular fa-copyright"></i> Your Website 2021</p>
            </div>
   </footer>
    
    
    </>
}