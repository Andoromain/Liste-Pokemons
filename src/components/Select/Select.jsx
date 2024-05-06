import React from "react";

const Select = (props) => {

    const { choice, limit, setLimit } = props
    return (

        <select
            className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="animals"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
        >
            {choice &&
                choice.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
        </select>

    )
}

export default Select