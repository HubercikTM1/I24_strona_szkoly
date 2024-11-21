
export const Documents = () => {
    const documents = [
        {
            title: "Dokument 1",
            description: "Opis dokumentu 1. Kliknij, aby pobrać.",
            link: "#"
        },
        {
            title: "Dokument 2",
            description: "Opis dokumentu 2. Kliknij, aby pobrać.",
            link: "#"
        },
        {
            title: "Dokument 3",
            description: "Opis dokumentu 3. Kliknij, aby pobrać.",
            link: "#"
        },
        {
            title: "Dokument 4",
            description: "Opis dokumentu 4. Kliknij, aby pobrać.",
            link: "#"
        }
    ];

    return (
        <>

            <main className="container mx-auto px-4 py-8 mt-6 mb-8">
                <h2 className="text-3xl font-bold text-center text-[#89223f] mb-8">Dokumenty</h2>
                
                {/* Responsive grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {documents.map((doc, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg border border-gray-200 shadow-lg p-6 transition-all transform hover:scale-105 hover:shadow-2xl hover:border-[#89223f] hover:border-2"
                        >
                            <h3 className="text-xl font-semibold text-[#333] mb-4">{doc.title}</h3>
                            <p className="text-sm text-gray-700 mb-4">{doc.description}</p>
                            <a
                                href={doc.link}
                                className="inline-block text-[#89223f] font-semibold border-2 border-[#89223f] py-2 px-5 rounded-md transition-all duration-300 hover:bg-[#89223f] hover:text-white hover:border-[#89223f]"
                            >
                                Pobierz
                            </a>
                        </div>
                    ))}
                </div>
            </main>

        </>
    );
}
