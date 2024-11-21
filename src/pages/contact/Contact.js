
export const Contact = () =>{
    return(
        <>

        <main className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-[#89223f] text-2xl font-semibold mb-4">Dane Kontaktowe</h2>
            <p className="text-gray-700 mb-2"><strong>Adres:</strong> ul. Wiśniowa 56, 02-520 Warszawa</p>
            <p className="text-gray-700 mb-2"><strong>Telefon:</strong> 22 646-44-99 lub 22 646-44-98</p>
            <p className="text-gray-700"><strong>Email:</strong> szkola@tm1.edu.pl</p>
            </div>

            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-[#89223f] text-2xl font-semibold mb-6">Formularz kontaktowy</h2>
            <form action="#" method="post" className="space-y-6">
                <div>
                <label htmlFor="name" className="block font-semibold text-gray-700">Imię i nazwisko:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#89223f] transition duration-200"
                />
                </div>

                <div>
                <label htmlFor="email" className="block font-semibold text-gray-700">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#89223f] transition duration-200"
                />
                </div>

                <div>
                <label htmlFor="message" className="block font-semibold text-gray-700">Wiadomość:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#89223f] transition duration-200"
                ></textarea>
                </div>

                <button
                type="submit"
                className="w-full bg-[#89223f] text-white py-3 rounded-md transition duration-300 hover:bg-[#a23b56] focus:outline-none focus:ring-2 focus:ring-[#89223f]"
                >
                Wyślij
                </button>
            </form>
            </div>
        </div>

        <div className="mt-12 text-center">
            <h2 className="text-[#89223f] text-2xl font-semibold mb-6">Lokalizacja</h2>
            <div className="bg-gray-200 h-72 rounded-lg flex items-center justify-center">
            <a
                className="h-full w-full hover:opacity-75 transition duration-200"
                href="https://maps.app.goo.gl/vX3VTFgDmfdTmnyr6"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                className="h-full w-full object-cover rounded-lg"
                src="../assets/images/lokalizacja.PNG"
                alt="Lokalizacja"
                />
            </a>
            </div>
        </div>
        </main>

        </>
    );
}