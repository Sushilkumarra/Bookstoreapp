import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
   <>
   <div >
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕</Link>
    
    <h3 className="font-bold text-lg text-pink-600">Login!</h3>
    <div className="text-black font-bold space-y-2 mt-4">
    <span>Email</span>
    <br/>
    <input type="email" 
    placeholder="Enter your Email" 
    className="bg-slate-200 w-80 p-1 rounded border outline-none"
    {...register("email", { required: true })}
    ></input>
  <br/>
    {errors.email && <span className="text-pink-700 font-bold">This field is required</span>}
    </div>
    <div className="text-black font-bold space-y-2 mt-4">
    <span>password</span>
    <br/>
    <input type="password"
     placeholder="Enter your Password" 
     className="bg-slate-200 w-80 p-1 rounded border outline-none" 
     {...register("password", { required: true })}
     ></input>
    <br/>
    {errors.password && <span className="text-pink-700 font-bold">This field is required</span>}
    </div>
    <div className="flex mt-6 justify-around">
      <button className="h-10 w-24  bg-pink-500 hover:bg-pink-300 rounded-md text-black">Login</button>
      <h1>Not Registered?{"  "}
        <Link to="/Signup" className="underline text-blue-500 cursor-pointer">Singup
          </Link>
          {"  "}
          </h1>
    </div>
    </form  >
  </div>
</dialog>
   </div>
   </>
  )
}

export default Login;