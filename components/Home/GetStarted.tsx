import Link from "next/link";

const GetStarted = ({
  smHidden = false,
  style,
}: {
  smHidden?: boolean;
  style?: string;
}) => {
  return (
    <Link
      href="#"
      className={`${
        smHidden ? "hidden md:block" : "block"
      } rounded-full bg-brightRed p-3 px-6 pt-2 align-baseline text-white transition-all hover:bg-brightRedLight ${style}`}
    >
      Get Started
    </Link>
  );
};

export default GetStarted;
