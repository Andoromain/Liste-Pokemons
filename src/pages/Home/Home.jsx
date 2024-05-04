import React from "react";

const Home = () => {
    return (
        <main className="relative overflow-hidden font-mono bg-gray-100 " style={{height:'90vh'}}>
            <div className="absolute hidden md:block -bottom-32 -left-32 w-96 h-96">
                <div className="absolute z-20 text-xl text-extrabold right-12 text-start top-1/4">
                    <span className="text-7xl">
                        🎨
                    </span>
                    <p>
                        Got a project ?
                    </p>
                    <a href="#" className="underline">
                        Let&#x27;s talk
                    </a>
                </div>
                <svg viewBox="0 0 200 200" className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFDBB9" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z" transform="translate(100 100)">
                    </path>
                </svg>
            </div>
            <div className="relative z-20 flex items-center ">
                <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
                    <div className="flex flex-col">
                        <img src="data:image/jpeg;base64,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" className="mx-auto rounded-full w-28" />
                        <p className="my-6 text-3xl text-center  text-slate-800">
                            Hi, I&#x27;m Ando 🤘
                        </p>
                        <h2 className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl  text-slate-800">
                            Building digital products, brands, and experiences.
                        </h2>
                        <div className="flex items-center justify-center mt-4 text-slate-800">
                            <a href="#" className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100  hover:bg-gray-800 hover:text-white text-md">
                                CONNECT WITH ME
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;