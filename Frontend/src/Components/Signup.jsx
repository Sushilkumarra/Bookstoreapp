import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div className="bg-white flex h-screen items-center justify-center ">
      <div  className="">
        <div className="modal-box w-screen md:w-[600px] bg-white">
          <form onSubmit={handleSubmit(onSubmit)} >
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          
          <h3 className="font-bold text-lg text-pink-600">Signup!</h3>
          <div className="text-black font-bold space-y-2 mt-4">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Name"
              className="bg-slate-200 w-80 p-1 rounded border outline-none"
              {...register("name", { required: true })}
           ></input>
           <br/>
            {errors.name && <span className="text-pink-700 font-bold">This field is required</span>}
          </div>
          <div className="text-black font-bold space-y-2 mt-4">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-slate-200 w-80 p-1 rounded border outline-none"
              {...register("email", { required: true })}
           ></input>
           <br/>
            {errors.email && <span className="text-pink-700 font-bold" >This field is required</span>}
          </div>
          <div className="text-black font-bold space-y-2 mt-4">
            <span>password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="bg-slate-200 w-80 p-1 rounded border outline-none"
              {...register("password", { required: true })}
           ></input>
           <br/>
            {errors.password && <span  className="text-pink-700 font-bold">This field is required</span>}
          </div>
          <div className="flex mt-6 justify-around">
            <button className="h-10 w-24  bg-pink-500 hover:bg-pink-300 rounded-md text-black">
              Signup
            </button>
            {/* <div>
            <a ><button className="btn bg-slate-200  "
               onClick={()=>document.getElementById('my_modal_3')} >
                
                Login</button></a>
                <Login/>
            </div> */}
            <p>
              Not Registered?{" "}
              <button
                className="underline text-blue-500 cursor-pointer "
                onClick={()=>document.getElementById('my_modal_3').showModal()}
              >
               
                Login
              </button>{" "}
              <Login />
             
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
