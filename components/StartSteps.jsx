import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}>
      <p className="font-bold text-white text-xl">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] text-lg font-normal text-[#b0b0b0] leading-[32px]">{text}</p>
  </div>
);

export default StartSteps;
