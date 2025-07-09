// components/Footer.js
"use client";
import Image from 'next/image'


export default function Footer() {

    return (
        <footer className="bg-[#222222] text-white py-12 px-4 lg:px-20">
            <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-10">
                {/* Left Side */}
                <div className="lg:w-1/3 flex flex-col items-start gap-6">
                    {/* Logo + Tagline */}
                    <div>
                        <Image src="/Logo.svg" alt="Perfint Logo" width={167} height={67} className="w-32 mb-2" />
                        <p className="italic text-sm text-gray-300">New Directions in <br/> Interventional Oncology</p>
                    </div>

                    {/* World Map */}
                    <Image src="/WorldMap.svg" alt="World Map" width={100} height={100} className="w-full max-w-xs" />

                </div>

                {/* Right Side */}
                <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
                    {/* Column: Products */}
                    <div>
                        <h4 className="text-orange-500 font-semibold mb-3">Products</h4>
                        <ul className="space-y-1 text-[#8B8B8B]">
                            <li>MAXIO</li>
                            <li>ROBIO EX</li>
                            <li>NAVIOS</li>
                            <li>DISHA X</li>
                        </ul>
                    </div>

                    {/* Column: Benefits */}
                    <div>
                        <h4 className="text-orange-500 font-semibold mb-3">Benefits</h4>
                        <ul className="space-y-1 text-[#8B8B8B]">
                            <li>Physicians</li>
                            <li>Patients</li>
                            <li>Hospitals</li>
                        </ul>
                    </div>

                    {/* Column: Scientific Resources */}
                    <div>
                        <h4 className="text-orange-500 font-semibold mb-3">Scientific Resources</h4>
                        <ul className="space-y-1 text-[#8B8B8B]">
                            <li>MAXIO Casestudies</li>
                            <li>ROBIO EX Casestudies</li>
                            <li>Publications</li>
                            <li>Studies</li>
                            <li>Workflow Videos</li>
                            <li>Presentations</li>
                        </ul>
                    </div>

                    {/* Column: About Us */}
                    <div>
                        <h4 className="text-orange-500 font-semibold mb-3">About Us</h4>
                        <ul className="space-y-1 text-[#8B8B8B]">
                            <li>Company</li>
                            <li>Advisory Board</li>
                            <li>Leadership Team</li>
                            <li>Investors</li>
                            <li>Newsroom</li>
                        </ul>
                    </div>

                    {/* Column: Contact Us */}
                    <div>
                        <h4 className="text-orange-500 font-semibold mb-3">Contact Us</h4>
                        <ul className="space-y-1 text-[#8B8B8B]">
                            <li>Careers</li>
                            <li>Installations</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    <div className="col-span-2 lg:col-span-5 text-sm text-gray-400 mt-6 flex flex-col items-start max-w-3xl">
                        <Image src="/FooterAddressIcon.svg" alt="Address Icon" width={28} height={28} className="w-28 mb-2" />
                        <p className="text-orange-500 font-semibold mt-2">INDIA</p>
                        <p className="leading-relaxed text-[#DFDFDF]">
                            Perfint Healthcare, (HO), Plot No 8, Annai Indira Nagar 1st Street, Okkkiyam,<br />
                            Thoraipakkam, Chennai - 600 097, Tamil Nadu, India.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-gray-700 pt-4 text-xs text-gray-500 flex flex-col lg:flex-row justify-between items-center gap-4">
                <p>© Perfint Healthcare. All rights reserved. 2024.</p>
                <div className="space-x-4">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Sitemap</a>
                    <a href="#">Cookies</a>
                </div>
                <p>Digital Partner: IdentitiDesign</p>
            </div>
        </footer>

    );
}
