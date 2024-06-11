import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaGoogle,
  FaHandScissors,
  FaHtml5,
  FaJs,
  FaPhp,
  FaReact,
  FaRegHandScissors,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobelightroomclassic,
  SiAdobephotoshop,
  SiAdobexd,
  SiCanva,
  SiFramer,
  SiNextdotjs,
  SiNikon,
  SiPhotobucket,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "Szakismeret",
    info: [
      {
        title: "Weboldal fejlesztés",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          SiNextdotjs,
          SiFramer,
          FaPhp,
        ],
      },
      {
        title: "Grafika",
        icons: [SiAdobephotoshop, SiAdobelightroomclassic, SiCanva],
      },
      {
        title: "Fotózás",
        icons: [SiPhotobucket, SiNikon],
      },
      {
        title: "Videóvágás",
        icons: [FaRegHandScissors],
      },
      {
        title: "Domain & SEO",
        icons: [FaGoogle],
      },
    ],
  },
  {
    title: "Érdeklődési kör",
    info: [
      {
        title: "Sportolás",
        stage: "Futball, röplabda, biciklizés, lábtenisz, úszás",
      },
      {
        title: "Utazás",
        stage: "Dánia, Ciprus, Törökország, Horvátország, Spanyolország",
      },
      {
        title: "Önkénteskedés",
        stage: "Fesztiválokon, koncerteken",
      },
      {
        title: "Zene",
        stage: "Gitározás",
      },
    ],
  },
  {
    title: "Bizonyítványok",
    info: [
      {
        title: "Amatőr labdarúgó játékvezető",
        stage: "2024",
      },
      {
        title: "Digitális kultúra emelt érettségi",
        stage: "2022",
      },
      {
        title: "Emelt angol szintű nyelvvizsga (C1)",
        stage: "2022",
      },
      {
        title: "Digisuli weblapszerkesztő tanfolyam",
        stage: "2019",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 left-[60vw] h-[25vw]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Ki vagyok <span className="text-accent">én</span>
            ?
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Egy fiatal lelkes, digitális világért rajongó srác, aki szakmai téren nagyon szenvedélyes az informatika és a fotózás iránt. Szabadidejét szereti barátokkal, sportolással, vagy zenéléssel tölteni.

          </motion.p>

          {/* counters */}
          <motion.h1
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="text-xl mb-5"
          >Tapasztalati évek száma</motion.h1>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={10} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Weboldal fejlesztés
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={10} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Grafika
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={10} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Fotózás
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={10} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Domain & SEO
                </div>
              </div>
            </div>
            <br />
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] pb-24"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-medium tracking-wide mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
