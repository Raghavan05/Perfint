// components/ProductTabs.js
'use client';
import { useState } from 'react';
import styles from './Section3.module.css'; // Custom CSS
import Section3Img1 from '../../assets/Section3Img1.png';
import Section3Img2 from '../../assets/Section3Img2.png';
import Section3Img3 from '../../assets/Section3Img3.png';
import Section3Img4 from '../../assets/Section3Img4.png';
import Section3CoverImg1 from '../../assets/Section3CoverImg1.png';
import Section3Img4Vector from '../../assets/Section3Img4Vector.svg';
import Image from 'next/image';

const tabs = ['MAXIO', 'ROBIO EX', 'NAVIOS', 'DISHA'];

const tabContent = {
    MAXIO: {
        title: 'MAXIO',
        trademark: '®',
        description:
            'MAXIO™ is a CT and PET-CT guided physician controlled, robotic stereotactic spatial positioning system. It provides integrated planning, navigation and targeting for MIS procedures in the thoracic, abdominal and pelvic cavities.',
        image: Section3Img1,
        width: 455,
        height: 617,
        note: 'Extended ablation volume reduces chances of recurrence',
    },
    'ROBIO EX': {
        title: 'ROBIO',
        trademark: '®EX',
        description:
            'The ROBIO EX is a CT and PET-CT guided robotic positioning system that assists with accurate tumour targeting and tool placement using imaging and planning software and a respiratory gating system.',
        image: Section3Img2,
        width: 288,
        height: 566,
        note: 'Extended ablation volume reduces chances of recurrence',
    },
    NAVIOS: {
        title: `NAVIOS`,
        trademark: `<span> &trade;</span>`,
        description:
            'NAVIOS is a computer-based software tool designed to assist with CT and PET-CT guided Interventional Oncology procedures.',
        image: Section3Img3,
        width: 295,
        height: 522,
        note: 'Extended ablation volume reduces chances of recurrence',
    },
    DISHA: {
        title: 'DISHA',
        trademark: '',
        description:
            'DISHA X is an image-guided stereotactic navigation system for open or percutaneous (MIS) neurosurgical procedures on rigid anatomies such as the spine, pelvis, skull, and any long bone.',
        image: Section3Img4,
        width: 357,
        height: 547,
        subImage: Section3Img4Vector,
        note: 'Extended ablation volume reduces chances of recurrence',
    },
};

export default function ProductTabs() {
    const [activeTab, setActiveTab] = useState('MAXIO');
    const { title,trademark, description, image, width, height, subImage, note } = tabContent[activeTab];

    return (
        <section className={`${styles.Section3} relative max-w-screen-lg mx-auto lg:p-10 bg-white rounded-xl shadow-md`}>
            {/* Tab wrapper */}
            <div className={`${styles.tabWrapper}`}>
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

            {/* Content in two fixed columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex justify-center items-center lg:min-h-[650px] min-h-[350px]">
                    <Image
                        src={image}
                        alt={title}
                        width={width}
                        height={height}
                        className={`object-contain h-auto ${styles.responsiveImage}`}
                    />
                </div>

                <div className="max-w-xl px-10 py-10">
                    <div className='flex'>
                        <h2 className={`${styles.Section3ProductPagetitle} text-3xl font-bold text-blue-800 flex items-center gap-2`}>
                            {title}
                            </h2>
                            {trademark && (
                                <div className={'text-[#21409A] text-xs align-super'}
                                    dangerouslySetInnerHTML={{ __html: trademark }}
                                >
                                </div>
                            )}

                        {activeTab === 'DISHA' && (
                            <div className="mt-2 ml-3 mb-4">
                                <Image
                                    src={subImage}
                                    alt="DISHA vector"
                                    width={31}
                                height={30}
                                className="object-contain"
                            />
                        </div>
                    )}
                    </div>

                    <p className={`${styles.Section3Description}`}>{description}</p>
                    <div className="my-4">
                        <Image
                            src={Section3CoverImg1}
                            width={469}
                            height={172}
                            alt="cover"
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-2 text-sm text-gray-500 italic">{note}</div>
                    <button className={`${styles.PrimaryButton} mt-6`}>
                        Explore {title}
                    </button>
                </div>
            </div>
        </section>

    );
}
