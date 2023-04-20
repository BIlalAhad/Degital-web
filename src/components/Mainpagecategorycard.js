import React from 'react'

export default function Mainpagecategorycard(props) {
  return (
    <>
        <div>
            <img src={props.img}/>
            <p className='text-center shadow text-lg font-serif'>{props.text}</p>
        </div>
    </>
  )
}
