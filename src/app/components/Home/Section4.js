'use client';
import Image from 'next/image';
import styles from './Section4.module.css';
import HomepageSection4Img1 from '../../assets/HomepageSection4Img1alt.png'

export default function Section4() {
  return (
    <section className={`${styles.Section4} max-w-screen-lg mx-auto bg-[#21409A] text-white rounded-t-[20px] relative overflow-hidden`}>
      <div className={styles.Section4Wave}></div>

      <div className={`${styles.Section4Content} grid lg:grid-cols-2 gap-10 items-center`}>
        {/* Left Content */}
        <div>
          <p className={`${styles.Section4Haeding1} text-sm tracking-widest text-white/60 mb-2`}>ABOUT US</p>
            <h2 className={`${styles.Section4Heading2} text-3xl md:text-4xl text-[#fff]`}>
              Leading the Future of <br/> <span className="text-orange-500">Robotic Navigation</span>, and {" "}
            <span className="text-white/60">Surgical Precision</span>
            </h2>
          <Image
            src={HomepageSection4Img1}
            alt="Robotic Navigation"
            className="rounded-md"
          />
        </div>

        {/* Right Image */}
        <div className={` relative`}>          
          <p className="text-sm leading-relaxed mb-4 text-white/90">
          Perfint Healthcare Systems is a global pioneer in robotic navigation and surgical interventions, specializing in Interventional oncology. We empower physicians with cutting-edge Minimally Invasive Surgery solutions for unparalleled precision and optimal outcomes for patients.
          </p>
          <p className="text-sm leading-relaxed text-white/90 mb-6">
          We bring decades of research and expertise with a strong market presence across Europe, South East Asia, the Middle East and an ongoing expansion into the US market. Perfint is redefining cancer care through technology, ensuring better survival rates and improved quality of life for patients worldwide.
          </p>
          <button className={`${styles.PrimaryButton}`}>
            KNOW MORE
          </button>
        </div>
      </div>
    </section>
  );
}
