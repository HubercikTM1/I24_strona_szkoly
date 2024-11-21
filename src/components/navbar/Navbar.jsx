import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="bg-red-800 text-white py-4 shadow-md">
                <div className="container mx-auto text-center">
                    <p className="text-sm animate-pulse">
                        Hubert Świtkowski 5TC - Wszelkie prawa zastrzeżone.
                    </p>
                    <h1 className="text-2xl md:text-4xl font-bold mt-2">
                        <NavLink to="/" className="no-underline text-white hover:text-red-300">
                            Zespół Szkół Licealnych i Technicznych nr 1
                        </NavLink>
                    </h1>
                    <h2 className="text-lg md:text-xl mb-4">Warszawa, ul. Wiśniowa 56</h2>
                    <div className="md:hidden flex justify-between items-center mt-4">
                        <button 
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <nav>
                        <ul className={`md:flex justify-center space-x-4 ${isMenuOpen ? 'block space-y-4' : 'hidden'} md:block`}>
                            <li className="w-full">
                                <NavLink to="/documents" className="w-full block px-4 py-2 border border-white rounded-md text-center hover:bg-red-700 transition duration-300">
                                    Dokumenty
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/contact" className="w-full block px-4 py-2 border border-white rounded-md text-center hover:bg-red-700 transition duration-300">
                                    Kontakt
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/about" className="w-full block px-4 py-2 border border-white rounded-md text-center hover:bg-red-700 transition duration-300">
                                    O szkole
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <a
                                    href="https://planlekcji.staff.edu.pl"
                                    target="_blank"
                                    className="block px-4 py-2 border border-white rounded-md text-center hover:bg-red-700 transition duration-300"
                                >
                                    Plan lekcji
                                </a>
                            </li>
                            <li className="w-full">
                                <a
                                    href="https://uonetplus.vulcan.net.pl/warszawamokotow"
                                    target="_blank"
                                    className="block px-4 py-2 border border-white rounded-md text-center hover:bg-red-700 transition duration-300"
                                >
                                    Dziennik
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
