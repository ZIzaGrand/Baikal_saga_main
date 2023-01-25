import React, { useState } from 'react'

export default function Catigories(props) {
    const [categories] = useState([
        {
            id: "all",
            name: "Все"

        },
        {
            id: "cup",
            name: "Кружки"

        },
        {
            id: "trinket",
            name: "Брелоки"

        },
        {
            id: "thermos",
            name: "Термосы"

        },
        {
            id: "dish",
            name: "Тарелки"

        },
        {
            id: "hetters",
            name: "Шапки"

        },
        

    ])
        
    
        return (
            <>
                {categories.map(el => (
                    <div key={el.id} className='block-filter'>
                        <p className='filter' onClick={() => props.onFilter(el.id)}>{el.name}</p>
                    </div>
                ))}
            </>
        )
    }

