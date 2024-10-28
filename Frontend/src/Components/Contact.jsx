
import Footer from './Footer'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
function Contact() {
  return (
    <>
    <Navbar/>
    <div className='bg-white  '>

        <form className='grid grid-cols-1 p-20  w-[400px] items-center md:w-auto text-black'>
        
          <label>Enter Your Name</label>
          <input type='text' className="bg-slate-200 " placeholder='Enter Your Name'></input>
          <label>Enter Your Email</label>
          <input type='Email' className="bg-slate-200" placeholder='Enter Your Email'></input>
          <label>Enter Your Paassword</label>
          <input type='password' className="bg-slate-200" placeholder='Enter Your Password'></input>
          <label>Confirm Your Massage</label>
          <input type='text' className="bg-slate-200" placeholder='Enter Your massage'></input>
         <button className='mt-6 bg-red-400 hover:bg-sky-500'>Submit</button>
        </form>
        <div className='p-12 w-[400px] items-center justify-center md:w-auto space-x-4 '>
          <Link to="/"><button className='h-14 w-40 hover:bg-sky-200 rounded-lg bg-blue-500'>Home</button></Link>
          <Link to="/Course"><button className='h-14 w-40 hover:bg-sky-200 rounded-lg bg-blue-500'>Course</button></Link>
        </div>
        <div>

        <Footer/>
        </div>
    </div>
    </>
  )
}

export default Contact;