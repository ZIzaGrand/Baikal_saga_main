import React from 'react'


const CountPage = (props) => {
    let arr = []
    for(let i=0; i<props.pageCount; i++){
        arr.push(i+1)
    }
    return <>
        { arr.map(el =>(
            <button className={`page-button page${el}`} onClick={() => props.showedItems(el,props.items)} key={el}>
                <p>{el}</p>
            </button>
        ))}        
    </>
}

export default function Page(props) {

  return (
    <div className='page-list'>
        {CountPage(props)}
    </div>
  )
}
