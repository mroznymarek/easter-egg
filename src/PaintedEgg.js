import React from 'react'
import paintedEgg from './egg-painted.svg'

const PaintedEgg = (props) => {
    return (
        <div>
            <h1>            
                Wesołych świąt!!!
			</h1>
            <img
                src={paintedEgg}
                alt={'Coloured egg'}
            />
        </div>
    )
}

export default PaintedEgg