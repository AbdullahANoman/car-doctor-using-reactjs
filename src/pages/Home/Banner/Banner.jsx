import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
// import img5 from '../../../assets/images/banner/5.jpg'
// import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex  gap-2  h-full w-full pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-10 w-1/2 ">
            <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn bg-[#FF3811] mr-5">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute flex  gap-2  h-full w-full pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-10 w-1/2 ">
            <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn bg-[#FF3811] mr-5">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
      <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex  gap-2  h-full w-full pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-10 w-1/2 ">
            <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="">
            <button className="btn bg-[#FF3811] mr-5">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
