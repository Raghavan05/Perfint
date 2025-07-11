// components/ProductTabs.js
'use client';
import { useState, useEffect } from 'react';
import styles from './Section2.module.css'; // Custom CSS
import Section2Img1 from '../../assets/Section2Img1.png';
import Section2Img2 from '../../assets/Section2Img2.png';
import Section2Img3 from '../../assets/Section2Img3.png';
import Section1anatomyImg from '../../assets/Section2anatomyImg.png';
import anatomyHeart from '../../assets/anatomyHeart.png';
import anatomyLungs from '../../assets/anatomyLungs.png';
import anatomyPancreas from '../../assets/anatomyPancreas.png';
import anatomyLiver from '../../assets/anatomyLiver.png';
import anatomyRightKidney from '../../assets/anatomyRightKidney.png';
import anatomyLeftKidney from '../../assets/anatomyLeftKidney.png';
import Section2NavigationVector from '../../assets/Section2NavigationVector.svg';

import HomepageSection5CenterHex from '../../assets/HomepageSection5CenterHex.svg';
import Image from 'next/image';


export default function Section2() {
    const tabs = ['INTERVENTIONAL ONCOLOGY', "PAIN MANAGEMENT", 'NEURO SURGERY'];
    const hospitals = [
        { name: 'Royal Marsden Hospital', location: 'London', img: Section2Img1 },
        { name: '175 Military Hospital', location: 'Vietnam', img: Section2Img2 },
        { name: 'Moniki Hospital', location: 'Russia', img: Section2Img3 },
        { name: 'Moniki Hospital', location: 'Russia', img: Section2Img3 },
        { name: 'Moniki Hospital', location: 'Russia', img: Section2Img3 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const visibleCards = 3;
    const totalCards = hospitals.length;

    const dotCount = Math.ceil(totalCards / visibleCards); // ✅ Group count
    // Clone first few items
    const extendedHospitals = [...hospitals, ...hospitals.slice(0, visibleCards)];

    const handleDotClick = (groupIndex) => {
        setCurrentIndex(groupIndex * visibleCards);
    };

    const handleNext = () => {
        if (currentIndex + visibleCards >= totalCards) {
            setCurrentIndex(0); // loop to start
        } else {
            setCurrentIndex(currentIndex + visibleCards);
        }
    };

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(totalCards - visibleCards); // loop to end
        } else {
            setCurrentIndex(currentIndex - visibleCards);
        }
    };

    useEffect(() => {
        if (currentIndex === totalCards) {
            // After transition ends, reset without animation
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 300); // matches CSS transition duration

            return () => clearTimeout(timeout);
        } else {
            setIsTransitioning(true);
        }
    }, [currentIndex, totalCards]);


    const [activeTab, setActiveTab] = useState('INTERVENTIONAL ONCOLOGY');

    return (
        <section className='relative'>
            {/* Tab wrapper */}
    <div className={styles.tabContainer}>
  {/* Mobile Dropdown */}
  <select
    className={styles.tabDropdown}
    value={activeTab}
    onChange={(e) => setActiveTab(e.target.value)}
  >
    {tabs.map((tab) => (
      <option key={tab} value={tab}>
        {tab}
      </option>
    ))}
  </select>

  {/* Desktop Tabs */}
  <div className={styles.tabWrapper}>
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>


            <div className={`${styles.Section2} relative max-w-screen-xl mx-10 mx-auto mt-10 mb-20 bg-white rounded-xl`}>

            {/* Content in two fixed columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-end ">
                <div className="flex pt-0 px-10 pr-0">
                    <div className="w-full max-w-screen-xl mt-12 space-y-13">
                        <h2 className={`${styles.Section2HeroSectionHeading} `}>
                            Perfint sets new standards in <br />
                            <span className="text-[#F37030]">global medical practise</span>
                        </h2>
                        <p className="text-sm md:text-base text-gray-700 pr-20 mb-10">
                            We are partnered with over 135 hospitals and universities worldwide,
                            delivering modern medical solutions that transform surgical outcomes.
                        </p>

                        {/* Hospital Cards */}
                        <div className={styles.Section2CarouselWrapper}>
                            <div
                                className={styles.Section2CarouselTrack}
                                style={{
                                    transform: `translateX(-${(currentIndex * (100 / visibleCards))}%)`,
                                    transition: isTransitioning ? 'transform 0.3s ease' : 'none',
                                }}
                            >
                                {extendedHospitals.map((hospital, index) => (
                                    <div key={index} className={styles.Section2CarouselSlide}>
                                        <div className={styles.Section2HospitalCard}>
                                            <Image
                                                src={hospital.img}
                                                alt={hospital.name}
                                                width={146}
                                                height={142}
                                                className={styles.Section2HospitalImage}
                                            />
                                            <div className={styles.Section2HospitalText}>
                                                {hospital.name}
                                                <br />
                                                <span className={styles.Section2HospitalLocation}>{hospital.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center pt-5">
                            <div className="flex space-x-2">
                                {Array.from({ length: dotCount }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleDotClick(i)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / visibleCards) === i
                                            ? 'bg-orange-500 scale-110'
                                            : 'bg-gray-300'
                                            }`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-start justify-end py-5 px-10">                            
                            <button
                                onClick={handleNext}
                            >
                                <Image src={Section2NavigationVector} alt='Section2NavigationVector'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`max-w-screen-xl pt-20 lg:pl-10 bg-[#F8F9FF]`}>
                        <h2 className={`${styles.Section2HeroSectionHeading} ml-7`}>
                            Explore the Perfint Healthcare <br/><span className="text-[#F37030]">Solutions by Organ</span>
                        </h2>
                    <div className={`${styles.Section2leftSide} '`}>
                        <div className="relative w-full max-w-[469px]">
                        <div className="">
                            <Image
                                src={HomepageSection5CenterHex}
                                alt="CenterHex.svg"
                                className={styles.hexCenter}
                            />
                        </div>
                            <Image
                                src={Section1anatomyImg}
                                alt="Anatomy"
                                className="w-full h-auto object-contain"
                            />

                            {/* Heart */}
                            <div className={`${styles.anatomyPointWrapper}`} style={{ top: '54%', left: '44%' }}>
                                <div className={styles.anatomyDot}></div>
                                <div className={styles.popupImage}>
                                    <div className={styles.popupText}>Heart</div>
                                    <Image src={anatomyHeart} alt="Heart" className="" />
                                </div>
                            </div>

                            {/* Lungs */}
                            <div className={styles.anatomyContainer}>

                            <div className={`${styles.anatomyPointWrapper}`} style={{ top: '48%', left: '30%' }}>
                                <div className={styles.anatomyDot}></div>
                                <div className={styles.popupImage}>
                                      <div className={styles.popupText}>Lungs</div>
                                    <Image src={anatomyLungs} alt="Lungs" className="" />
                                </div>
                            </div>
                            </div>

                            {/* Pancreas */}
                            <div className={`${styles.anatomyPointWrapper}`} style={{ top: '68%', left: '43%' }}>
                                <div className={styles.anatomyDot}></div>
                                <div className={styles.popupImage}>
                                      <div className={styles.popupText}>Pancreas</div>
                                    <Image src={anatomyPancreas} alt="Pancreas" className="" />

                                </div>
                            </div>

                            {/* Liver */}
                            <div className={`${styles.anatomyPointWrapper}`} style={{ top: '61%', left: '33%' }}>
                                <div className={styles.anatomyDot}></div>
                                <div className={styles.popupImage}>
                                    <div className={styles.popupText}>Liver</div>
                                    <Image src={anatomyLiver} alt="Liver" className="" />
                                </div>
                            </div>

                            {/* Right Kidney */}
                            <div className={`${styles.anatomyPointWrapper}`} style={{ top: '80%', left: '50%' }}>
                                <div className={styles.anatomyDot}></div>
                                <div className={styles.popupImage}>
                                    <div className={`${styles.popupText} text-nowrap`}>Right Kidney</div>
                                    <Image src={anatomyRightKidney} alt="Right Kidney" className="" />
                                </div>
                            </div>

                            {/* Left Kidney */}
                            <div className={`${styles.anatomyPointWrapper}`} style={{ top: '80%', left: '30%' }}>
                                <div className={styles.anatomyDot}></div>
                                <div className={styles.popupImage}>
                                    <div className={`${styles.popupText} text-nowrap`}>Left Kidney</div>
                                    <Image src={anatomyLeftKidney} alt="Left Kidney"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </section>

    );
}
