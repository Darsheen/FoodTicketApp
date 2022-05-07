import { Directions } from '@mui/icons-material'
import React from 'react'

const ProgressBar = ({ bgcolor1, bgcolor2, progress1, progress2, height, direction }) => {

    const Parentdiv = {
        height: height,
        width: direction == "row" ? '100%' : 5,
        backgroundColor: direction == "row" ? 'lightgrey' :'white',
        borderRadius: 10,
        display: 'flex',
        flexDirection: direction,
        alignContent: direction == "row" ? 'flex-start' : 'flex-end'
    }

    const Childdiv1 = {
        height: direction == "row" ? '100%' : `${progress1}%`,
        width: direction == "row" ? `${progress1}%` : 5,
        backgroundColor: bgcolor1,
        borderRadius: 40,
        textAlign: 'right'
    }

    const Childdiv2 = {
        marginLeft: direction == "row" ? 10 : 0,
        marginTop:direction == "row" ? 0 : 5,        
        height: direction == "row" ? '100%' : `${progress2}%`,
        width: direction == "row" ? `${progress2}%` : 5,
        backgroundColor: bgcolor2,
        borderRadius: 40,
        textAlign: 'right'
        
    }



    return (
        <div style={Parentdiv}>
            <div style={Childdiv1}>
            </div>
            <div style={Childdiv2}>
            </div>
        </div>
    )
}

export default ProgressBar;
