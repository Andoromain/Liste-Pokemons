import React from "react";

const Liste = (props) => {

    const { data } = props

    return (
        <div className="container flex flex-col items-center justify-center w-full mx-auto">
            <ul className="flex flex-col">
                {data.map((type, index)=>{

                    return (
                        <li key={index} className="flex flex-row mb-2 border-gray-400">
                            <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-2">
                                <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <a href="#" className="relative block">
                                        <img alt="profil" src={type.image} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                </div>
                                <div className="flex-1 pl-1 md:mr-16">
                                    <div className="font-medium dark:text-white">
                                        {type.name}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Liste