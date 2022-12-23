import Image from "next/image";
import { testimonials } from "../../data";
import GetStarted from "./GetStarted";

const Testimonials = () => {
  const testimonialList = testimonials.map((item, index) => (
    <div
      key={index}
      className="mb-12 flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:mb-0 md:w-1/3"
    >
      <Image src={item.image} className="-mt-14 w-16" alt="" />
      <h5 className="text-lg font-bold">{item.name}</h5>
      <p className="text-sm text-darkGrayishBlue">{item.testimonial}</p>
    </div>
  ));

  return (
    <section>
      <div className="mx-auto mt-32 max-w-6xl px-5 text-center">
        {/* heading */}
        <h2 className="text-center text-4xl font-bold">
          What's Different About Manage?
        </h2>
        {/* Testimonials */}
        <div className="mt-24 flex flex-col md:flex-row md:space-x-6">
          {testimonialList}
        </div>
        <div className="my-16 flex justify-center">
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
