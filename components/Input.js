import React from 'react'

export default function Input({type}) {
    return (
        <div>
            <input type = {type} className="border rounded px-3 py-1 w-80" />
        </div>
    )
}
