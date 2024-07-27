import React from 'react'

export default function Animecard(props) {
    return (
        <>
            <div className={`${props.animekey ? 'host-card-able' : 'host-card'}`}>
                <img src={props.imgsrc} alt="..." />
                <div className='host-text'>{props.text}</div>
                <div className="able-card">
                    <div className='host-text'>{props.text}</div>
                    <div className='host-body'>{props.body}</div>
                </div>
            </div>
        </>
    )
}
