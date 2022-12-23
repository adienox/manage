import GetStarted from "./GetStarted";

const CallToAction = () => {
  return (
    <section id="cta" className="bg-brightRed">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-12 px-6 py-24 md:flex-row md:space-y-0 md:py-12">
        <h2 className="text-center text-5xl font-bold leading-tight text-white">
          Simplify How Your Team Work
        </h2>
        <GetStarted style="text-brightRed bg-white shadow-2xl hover:bg-gray-600 hover:text-white" />
      </div>
    </section>
  );
};

export default CallToAction;
