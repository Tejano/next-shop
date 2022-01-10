import React from 'react';

export default function Input({ type, required, value, onChange }) {
  return (
    <div>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className='border rounded px-3 py-1 w-80'
      />
    </div>
  );
}