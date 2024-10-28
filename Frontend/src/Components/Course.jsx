import Navbar from "./Navbar";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Course() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div className="   w-screen md:w-auto text-center p-8 ">
          <h1>Hi This is Course Section</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            magnam necessitatibus totam ipsum voluptatem, quos veritatis
            perferendis quam maiores ducimus velit ex odio delectus, corrupti
            possimus consequuntur, ut dolore ab!
          </p>
          <div className="space-y-6">
          <Link to="/">
            <button className=" h-10 w-24 mt-8 bg-pink-400 rounded-lg">
              Back
            </button>
          </Link>
        
        <div className="  grid grid-cols-1 md:grid-cols-4 space-y-4 ">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Course;
