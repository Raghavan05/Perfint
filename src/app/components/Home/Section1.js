// components/Section1.js
import Image from "next/image";
import CountUp from "react-countup";
import HerosectionVector1 from '../../assets/HerosectionVector1.svg'
import HerosectionVector2 from '../../assets/HerosectionVector2.svg'
import HerosectionVector3 from '../../assets/HerosectionVector3.svg'
import styles from './Section1.module.css'

export default function Section1() {
  return (
    <section className={`${styles.Section1}  bg-white py-12 relative`}>
      <div className="max-w-screen-xl mx-auto ">
        {/* Top Section with Image and Heading */}
        <div className="flex flex-col lg:flex-row items-center mx-10 mb-16">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 lg:text-center lg:text-left">
            <h2 className={`${styles.Section1HeroSectionHeading} text-3xl md:text-4xl font-semibold text-[#000]`}>
              Robotic <span className="text-orange-500">Precision</span>, aiding{" "}
              <span className="text-[#21409A]">human touch</span>
            </h2>
            <p className={`${styles.Section1HeroSectionPara} my-5 text-gray-600 text-base`}>
              Delivering confidence to physicians, hope to patients — our devices
              ensure superior tumor coverage for better outcomes.
            </p>
          </div>

          {/* Right Image */}
          {/* Right Video Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className={`${styles.videoFeatherWrapper}`}>
              <video
                src="/LifeatCambridgeMedicalStudent.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* Stats Cards */}
<div className="grid grid-cols-2 gap-y-4 lg:grid-cols-3 place-items-center">
          {/* Card 1 */}
          <div className={`${styles.Section1Card1} bg-[#FCEAE1] rounded-lg col-span-1`}>
            <Image src={HerosectionVector1} alt="HerosectionVector1" />
            <h3 className="lg:mt-5">
              <CountUp end={135} duration={5} />
            </h3>
            <p className="lg:mt-2 text-[18px] text-gray-800">Institutional Partners</p>
          </div>

          {/* Card 2 */}
          <div className={`${styles.Section1Card2}  bg-[#DEE3FF] p-6 rounded-lg shadow-sm col-span-1`}>
            <Image src={HerosectionVector2} alt="HerosectionVector2" />
            <h3 className="lg:mt-5">
              <CountUp end={131} duration={2} />
            </h3>
            <p className="mt-2">Devices Sold Worldwide</p>
          </div>

          {/* Card 3 */}
          {/* Card 3 */}
          <div className={`${styles.Section1Card3} bg-[#FFFAFA] p-6 rounded-lg shadow-sm w-full col-span-2 lg:col-span-1`}>
            <Image src={HerosectionVector3} alt="HerosectionVector3" />
            <h3 className="lg:mt-5">
              <CountUp end={165000} duration={2.5} separator="," />+
            </h3>
            <p className="mt-2">Procedures Done</p>
          </div>

        </div>
      </div>
    </section>
  );
}
