import React from 'react'
import "./ColorCard.css"
import "../NavBar/NavBar.css"

const ColorCard = ({hours,likes,colors}) => {
    return (
        <div className='colorCardContainer' >   
            <div className='colorCard'>
                <div style={{ backgroundColor: "#" + colors[0] }}>{"."}</div>
                <div style={{ backgroundColor: "#" + colors[1] }}>{"."}</div>
                <div style={{ backgroundColor: "#" + colors[2] }}>{"."}</div>
                <div style={{ backgroundColor: "#" + colors[3] }}>{"."}</div>
            </div>"#" + 
            <div className='colorCardInfo'>
                <button>
                    <i class="bi bi-heart-fill"></i>
                    {likes}
                </button>
                <span>
                    {hours} Hours
                </span>
            </div>
        </div>
    )
}

export default ColorCard