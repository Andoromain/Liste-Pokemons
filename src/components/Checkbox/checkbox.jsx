import React from "react";

const Checkbox = (props) => {
    const { label, value, setValue, checked } = props
    return (
        <>
        
            <input id={label} type="checkbox" value={value} checked={checked} onChange={setValue} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for={label} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700">{label}</label>
        
        </>

    )
}

export default Checkbox