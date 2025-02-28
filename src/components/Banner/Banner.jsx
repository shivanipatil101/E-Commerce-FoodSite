import React from "react";
import BannerImg from "../../assets/restaurants/coldrink.jpg";
import { motion } from "framer-motion";
import { BiFoodTag } from "react-icons/bi";
import { FadeLeft, FadeUp } from "../../utility/animation";

export const Banner = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">
        {/* banner image */}
        <div className="flex justify-center items-center ">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerImg}
            alt=""
            className="w-[300px]
            md:max-w-[400px] h-full object-cover"
          />
        </div>
        {/* brnad info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left spacy-y-4 lg:max-w-[400px]  ">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase "
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              repellat at id natus ipsum sequi aperiam dignissimos dolores vero
              deleniti pariatur voluptatum quas, voluptatem tenetur enim itaque!
              Consequatur, ex mollitia!
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              pariatur fuga omnis commodi illo quaerat rerum recusandae maiores
              voluptate dolorem corrupti neque ipsam temporibus, iste, ut,
              nesciunt culpa? Dolores, corrupti?
            </motion.p>
            <motion.div
              variants={FadeLeft(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-4 mt-3 ">
                {" "}
                <BiFoodTag />
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
