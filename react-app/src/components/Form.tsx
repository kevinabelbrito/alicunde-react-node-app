import React from 'react'
import { useState } from 'react';
import { FormProps } from '../interfaces';

const Form: React.FC<FormProps> = ({addItem}) => {
    const [hobbie, setHobbie] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHobbie(event.target.value);
    };

    const handleAddClick = (e) => {
        e.preventDefault();
        
        if (hobbie.length < 3) {
            alert("The hobbie must be at least 3 letters");
            return;
        }

        if (hobbie.trim() !== '') {
            addItem(hobbie);
            setHobbie('');
            return;
        }
        alert("Please, text a hobbie!");
    };

    return (
    <div>
        <form onSubmit={handleAddClick}>
            <label 
                htmlFor="hobbie"
                className='text-center block font-bold'
            >
                Text a hobbie
            </label>
            
            <input
                type="text"
                value={hobbie}
                onChange={handleInputChange}
                className='border border-blue-500 px-1 py-3 text-base w-72 placeholder:text-gray-800 placeholder:font-semibold'
                placeholder='Text a Hobbie'
            />
            
            <button
                type="submit"
                className="bg-blue-500 border-blue-500 p-3 uppercase font-bold text-white"
            >
                Add to list
            </button>
        </form>
    </div>
  )
}

export default Form