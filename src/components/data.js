import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight Of Our Works",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your Studens",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Great Counselling",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Satisfaction",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitain an im",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Reasonable",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Highly productive members",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Supports",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
