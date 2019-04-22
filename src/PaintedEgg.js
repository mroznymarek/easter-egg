import React from 'react'
import paintedEgg from './egg-painted.svg'


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',

    },
    egg: {
        width: '50vh',
    }
}

const PaintedEgg = (props) => {
    return (
        <div
            style={styles.container}
        >
            <h1>
                Wesołych świąt!!!
			</h1>
            <img
                style={styles.egg}
                src={paintedEgg}
                alt={'Painted egg'}
            />
        </div>
    )
}

export default PaintedEgg