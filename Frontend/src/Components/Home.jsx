import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Cards from "./Cards";
import Navbar from "./Navbar";
function Home() {
  const freebook = list.filter((data) => data.category === "Free");

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center bg-white">
        <div className="w-1/2 order-1  h-full   font-bold text-2xl p-4 space-y-4  ">
          <h1>Hi This Is Cours Wevsite</h1>
          <h1>
            This is{" "}
            <span className="text-red-500 text-4xl font-bold">
              Book Store App
            </span>
          </h1>
        </div>
        <div className="w-1/2  md:order-2  ">
          <img src="book.jpg" className=" " alt="book"></img>
        </div>
      </div>
      <div className="p-12 ">
        <Slider {...settings}>
          {freebook.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
