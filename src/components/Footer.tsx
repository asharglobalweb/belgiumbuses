// components/Footer.tsx
"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const icons = [
        { Icon: FaWhatsapp, href: "https://wa.me/442038343226", id: "1" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main content grid - responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
                    {/* Contact */}
                    <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
                        <div className="space-y-4">
                            {/* Logo */}
                            <Link href="/" className="flex justify-center sm:justify-start items-center">
                                <Image src="/images/logo2.png" width={150} height={49} alt="Belgium Buses Logo" />
                            </Link>

                            <div className="space-y-3">
                                <div className="flex justify-center sm:justify-start items-start space-x-2">
                                    <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <address className="not-italic text-sm sm:text-base">
                                        Rue d&apos;Arenberg 3, 1000 Bruxelles, Belgium
                                    </address>
                                </div>
                                <div className="flex justify-center sm:justify-start items-center space-x-2">
                                    <Phone className="h-5 w-5 text-blue-500" />
                                    <a href="tel:+442038343226" className="hover:text-white text-sm sm:text-base">+44 20 3834 3226</a>
                                </div>
                                <div className="flex justify-center sm:justify-start items-center space-x-2">
                                    <Mail className="h-5 w-5 text-blue-500" />
                                    <a href="mailto:info@belgiumbuses.com" className="hover:text-white text-sm sm:text-base">info@belgiumbuses.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Services</h4>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li><Link href="/corporate-events" className="hover:text-white">Corporate events</Link></li>
                            <li><Link href="/school-trips" className="hover:text-white">School trips</Link></li>
                            <li><Link href="/shuttles" className="hover:text-white">Shuttles</Link></li>
                            <li><Link href="/transfers" className="hover:text-white">Transfers</Link></li>
                            <li><Link href="/school-trips" className="hover:text-white">Home to school</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Company</h4>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Social - WhatsApp only */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Contact Us</h4>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            {icons.map(({ Icon, href, id }) => (
                                <Link
                                    key={id}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-green-500 transition transform hover:scale-110"
                                >
                                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Belgium Buses. All rights reserved.
                </div>
            </div>
        </footer>
    );
}