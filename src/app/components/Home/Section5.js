'use client';
import Image from 'next/image';
import styles from './Section5.module.css';

import img1 from '../../assets/HomepageSection5Hex1.png';
import img2 from '../../assets/HomepageSection5Hex2.png';
import img3 from '../../assets/HomepageSection5Hex3.png';
import img4 from '../../assets/HomepageSection5Hex4.png';
import img5 from '../../assets/HomepageSection5Hex5.png';
import img6 from '../../assets/HomepageSection5Hex6.png';
import centerIcon from '../../assets/HomepageSection5CenterHex.svg';

export default function Section5() {
  return (
    <section className="bg-[#FBF9F4] py-16 px-6 lg:px-20 rounded-b-[20px] max-w-screen-xl mx-10 mx-auto mb-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Hex Shape */}
        <div className="flex justify-center">
        <div className={styles.hexWrapper}>
          <div className={`${styles.hex} ${styles.hex1}`}>
            <Image src={img1} alt="hex1" />
          </div>
          <div className={`${styles.hex} ${styles.hex2}`}>
            <Image src={img2} alt="hex2" />
          </div>
          <div className={`${styles.hex} ${styles.hex3}`}>
            <Image src={img3} alt="hex3" />
          </div>
          <div className={`${styles.hex} ${styles.hex4}`}>
            <Image src={img4} alt="hex4" />
          </div>
          <div className={`${styles.hex} ${styles.hex5}`}>
            <Image src={img5} alt="hex5" />
          </div>
          <div className={`${styles.hex} ${styles.hex6}`}>
            <Image src={img6} alt="hex6" />
          </div>
          <div className={styles.hexCenter}>
            <Image src={centerIcon} alt="center" />
          </div>
        </div>
        </div>

        {/* Right Cards */}
        <div className="space-y-6">
          <div className="bg-[#F370300D] py-10 px-10 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-3">OUR VISION</h3>
            <p className="text-sm text-gray-700">
              Improving quality of life by partnering with physicians in cancer treatment and pain management
            </p>
          </div>

          <div className="bg-[#21409A0D] p-10 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-3">OUR MISSION</h3>
            <p className="text-sm text-gray-700">
              Bring innovation as a frontrunner in image-guided therapies
            </p>
          </div>

          <div className="bg-[#F370300D] py-10 px-10 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-3">OUR VALUES</h3>
            <p className="text-sm text-gray-700">
              A steady commitment to consistency in value, quality and deliverables
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
