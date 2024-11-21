export const SinglePost = () =>{

    const post = {
        username: "jan_kowalski",
        name: "Jan Kowalski",
        date: "21 Listopad 2024",
        content: "Nasza szkoła zajęła 1 miejsce w rankingu! 🐦 #wisniowa #ranking #1miejsce #jtcnw",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
        media: "https://tm1.edu.pl/wp-content/uploads/2021/03/ranking_Xlecia-technika-scaled.jpg", // Optional media (image/video)
    };

    return(
        <div className="bg-gray-100 text-gray-900 font-sans">
             <div className="container mx-auto px-4 py-8 max-w-2xl">
                <div className="bg-white p-4 rounded-lg shadow-lg space-y-4">
                    <div className="flex items-center space-x-3 py-4">
                        <img
                            src={post.image}
                            alt={post.username}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <p className="font-semibold">{post.name}</p>
                            <p className="text-sm text-gray-600">@{post.username} · {post.date}</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-lg text-gray-800">{post.content}</p>
                    </div>

                    {post.media && (
                        <div className="mt-4">
                            <img
                                src={post.media}
                                alt="Media content"
                                className="w-full h-64 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    )}

                    <div className="flex space-x-6 mt-6 text-gray-600">
                        <button className="flex items-center space-x-1 hover:text-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14 2l4 4m0 0l4-4m-4 4v12m0 0H10m4 0H10"
                                />
                            </svg>
                            <span>Reply</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-green-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 9l2 2-2 2m-6 2l-2 2 2 2m-2-6h10M7 4h10m-5 4h5"
                                />
                            </svg>
                            <span>Retweet</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-red-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4-4m0 0l4 4m-4-4v12m0 0H7m4 0H7"
                                />
                            </svg>
                            <span>Like</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}