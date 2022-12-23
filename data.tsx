import { StaticImageData } from "next/image";
import Avatar1 from "./img/avatar-anisha.png";
import Avatar2 from "./img/avatar-ali.png";
import Avatar3 from "./img/avatar-richard.png";
import Facebook from "./img/icon-facebook.svg";
import Instagram from "./img/icon-instagram.svg";
import Pinterest from "./img/icon-pinterest.svg";
import Twitter from "./img/icon-twitter.svg";
import Youtube from "./img/icon-youtube.svg";

interface Feature {
  index: string;
  heading: string;
  text: string;
}

interface Testimonial {
  image: StaticImageData;
  name: string;
  testimonial: string;
}

interface Social {
  image: StaticImageData;
  alt: string;
  link: string;
}

const features: Feature[] = [
  {
    index: "01",
    heading: "Track Company-wide Progress",
    text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    index: "02",
    heading: "Everything you need in one place",
    text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
  {
    index: "03",
    heading: "Advanced built-in reports",
    text: "Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
];

const testimonials: Testimonial[] = [
  {
    image: Avatar1,
    name: "Anisha Li",
    testimonial:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    image: Avatar2,
    name: "Ali Bravo",
    testimonial:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    image: Avatar3,
    name: "Richard Watts",
    testimonial:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
];

const socials: Social[] = [
  {
    image: Facebook,
    alt: "facebook",
    link: "#",
  },
  {
    image: Youtube,
    alt: "youtube",
    link: "#",
  },
  {
    image: Twitter,
    alt: "twitter",
    link: "#",
  },
  {
    image: Pinterest,
    alt: "pinterest",
    link: "#",
  },
  {
    image: Instagram,
    alt: "instagram",
    link: "#",
  },
];

export { features, testimonials, socials };
