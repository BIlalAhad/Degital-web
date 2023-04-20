import React from 'react'

export default function Brandcard(props) {
 return (
    <>
        <div>
           <img className='rounded-full shadow shadow-blue-700' src={props.img} />
        </div>
    </>
  )
}
