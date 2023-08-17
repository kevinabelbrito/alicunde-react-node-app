import React from 'react'
import { ListProps } from '../interfaces'

const List: React.FC<ListProps> = ({items, onDelete}) => {
  return (
    <ul className='mt-5 shadow-lg'>
      {items.map(item => (
        <li 
            key={item.id}
            onClick={() => onDelete(item.id)}
            className='block font-medium text-lg p-3 hover:bg-yellow-200 transition-all duration-200 cursor-pointer'
        >
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export default List