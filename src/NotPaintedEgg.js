import React from 'react'
import egg from './egg.svg'

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


const NotPaintedEgg = (props) => {
    return (
        <div
            style={styles.container}
        >
            <h1>
                Kliknij aby pomalować jajko!
			</h1>
            <img
                style={styles.egg}
                src={egg}
                alt={'Egg'}
                onClick={() => props.paintEgg(true)}
            />
        </div>
    )
}

export default NotPaintedEgg