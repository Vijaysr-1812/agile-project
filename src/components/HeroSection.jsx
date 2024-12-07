import video2 from "../assets/video2.mp4"
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-5xl sm:text-4xl lg:text:7xl text-center tracking-center bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            SMART PARKING SYSTEM
        </h1>
        <p className="mt-5 text-lg text-center text-neutral-200 max-3xl">
            The new and innovative way of parking your vehicle to make an effiecent 
            way to keep your car safe and sound 
        </p>
        <div className="flex justify-center my-10">
         <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
            BOOK YOUR SLOT
         </a>
         
         <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
            CHECK YOUR SLOT
         </a>
        </div>
        <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
            <source src={video2} type="video/mp4"/>
            your browser does not support thr videos
            </video>
        </div>
    </div>
  )
}

export default HeroSection