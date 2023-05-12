import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
  return (
    <div className="hero md:p-10 bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className='relative w-1/2'>
        <img
          src={person}
          className="w-[500px]  md:h-[400px] rounded-lg shadow-2xl "
        />
        <img
          src={parts}
          className="w-[300px] border-8 border-white rounded-lg shadow-2xl absolute md:top-[260px] md:right-10 "
        />
        </div>
        <div className='w-1/2 space-y-5 p-4'>
            <p className='text-[#FF3811] font-bold text-xl'>About Us</p>
          <h1 className="text-5xl font-bold">We are qualified <br />& of experience <br /> in this field</h1>
          <p className="py-6 text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className='text-[#737373]'>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
          <button className="btn btn-primary bg-[#FF3811] border-none">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
