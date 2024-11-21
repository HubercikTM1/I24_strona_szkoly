import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const slides = [
        "https://lh3.googleusercontent.com/p/AF1QipN7cZO-cUwITeerqjnqFNjFer9zsP3F4u0t7Ya7=s680-w680-h510",
        "https://tm1.edu.pl/wp-content/uploads/2022/06/Koniec-roku-21_22-4.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4Gr5N-Z0fG2zEtwBTutwsp95RSxp22pXN0dYaAiHQi-OV5-Ckz6HCki9eJdpKTORNTxYG9bdacBuDPtEZsWRy4qss9voLWwFaqAIHqWThNq8a9iZ1ERPfT_SYJZJkdY1hyphenhyphenKH9M8B_Hv4/s1600/20180617_181534.jpg"
    ];

    const dots = slides.map((_, index) => index);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const handleDotClick = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className="bg-gray-100 text-gray-900 font-sans min-h-screen flex flex-col">
            <div className="slideshow-container max-w-full mx-auto relative mt-6">
                {slides.map((src, index) => (
                    <div
                        key={index}
                        className={`mySlides fade ${index === slideIndex ? "block" : "hidden"}`}
                    >
                        <img
                            src={src}
                            className="w-full h-96 mx-auto object-cover rounded-lg shadow-lg"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                {dots.map((_, index) => (
                    <span
                        key={index}
                        className={`dot h-4 w-4 mx-1 bg-red-300 rounded-full inline-block transition-all hover:bg-red-600 ${
                            index === slideIndex ? "bg-red-600" : ""
                        }`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>

            <main className="flex-grow container mx-auto my-8">
                <section id="posty">
                    <h2 id="main-h2" className="text-3xl font-bold text-center mb-8 text-red-800">
                        Najnowsze posty
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"].map(
                            (post, index) => (
                                <div
                                    key={index}
                                    className="kafelek bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-100"
                                >
                                    <NavLink to="/single-post" className="no-underline text-gray-900 hover:text-red-500">
                                        <h3 className="text-xl font-semibold">{post}</h3>
                                        <p className="mt-2 text-sm text-gray-700">
                                            Random text post {index + 1}
                                        </p>
                                    </NavLink>
                                </div>
                            )
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};
