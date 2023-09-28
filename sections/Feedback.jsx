'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: 'false',
        amount: 0.25,
      }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col  gradient-05 sm:p-8 p-4 rounded-[32px] border border-[#6a6a6a] relative">
        <div className="feedback-gradient" />
        <div>
          <h4 className="text-white font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]">Arun Jenson</h4>
          <p className="mt-2 font-normal sm:text-lg text-xs sm:leading-[22px] leading-[16px] text-white">Founder | Metaversus</p>
        </div>
        <p className="mt-7 font-normal sm:text-2xl text-lg sm:leading-[45px] leading-[39px] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic vel labore temporibus vero illum atque delectus ipsum natus suscipit!  temporibus vero illum atque delectus ipsum natus suscipit! natus suscipit!.</p>
      </motion.div>
      <motion.div variants={fadeIn('left', 'tween', '0.2', '1')} className="relative flex-1 flex justify-center items-center">
        <img src="/planet-09.png" alt="planet-09" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        <motion.div variants={zoomIn(0.4, 1)} className="lg:block hidden absolute -left-[10%] top-[3%]">
          <img src="/stamp.png" alt="stamp" className="w-[155px] h-[155px] object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
