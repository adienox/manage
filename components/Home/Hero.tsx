import Image from "next/image";
import Graphs from "../../img/illustration-intro.svg";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto mt-10 flex flex-col-reverse items-center space-y-0 px-6 md:flex-row md:space-x-0">
        {/* Left Section */}
        <div className="mb-32 flex flex-col space-y-12 md:w-1/2 ">
          <h1 className="max-w-md text-center text-4xl font-bold md:text-left md:text-5xl">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <GetStarted />
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-1/2">
          <Image src={Graphs} alt="graphs" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
