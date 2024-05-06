import React from 'react'

const Skeleton = () => {
    return (
        <>
            <tr className="mx-auto bg-white rounded shadow-lg">
                <td className=''>
                    <div className="m-2 h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                </td>
                <td>
                    <div className="m-2 h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                </td>
                <td>
                    <div className="m-2 h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                </td>
                <td colSpan={2}>
                    <div className="m-2 h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                </td>

            </tr>
            <tr className="mx-auto bg-white rounded shadow-lg">
                <td className=''>
                    <div className="m-2 h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                </td>
                <td>
                    <div className="m-2 h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                </td>
                <td>
                    <div className="m-2 h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                </td>
                <td colSpan={2}>
                    <div className="m-2 h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                </td>

            </tr>
        </>
    )
}

export default Skeleton
