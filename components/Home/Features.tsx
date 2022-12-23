import { features } from "../../data";
const Features = () => {
  const listElements = features.map((item, index) => (
    <div
      key={index}
      className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6"
    >
      {/* Heading */}
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
            {item.index}
          </div>
          <h3 className="text-base font-bold md:mb-4 md:hidden">
            {item.heading}
          </h3>
        </div>
      </div>
      <div>
        <h3 className="mb-4 hidden text-lg font-bold md:block">
          {item.heading}
        </h3>
        <p className="text-darkGrayishBlue">{item.text}</p>
      </div>
    </div>
  ));
  return (
    <section>
      <div className="container mx-auto mt-10 flex flex-col space-y-12 px-4 md:flex-row md:space-y-0">
        {/* Whats Different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Our software is tailor-made for modern digital product teams.
          </p>
        </div>
        {/* List */}
        <div className="flex flex-col space-y-8 md:w-1/2">{listElements}</div>
      </div>
    </section>
  );
};

export default Features;
