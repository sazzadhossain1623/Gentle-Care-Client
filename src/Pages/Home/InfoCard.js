import React from 'react'

function InfoCard({img, cardTitle, cardDesc, bgClass}) {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure class='pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDesc}</p>
            </div>
        </div>
    )
}

export default InfoCard