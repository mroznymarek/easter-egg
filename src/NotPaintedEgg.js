import React from 'react'
import egg from './egg.svg'

const NotPaintedEgg = (props) => {
    return (
        <div>
            <h1>            
                Kliknij aby pomalować jajko!
			</h1>
            <img
                src={egg}
                alt={'Coloured egg'}
            />
            </div>
    )
}

export default NotPaintedEgg