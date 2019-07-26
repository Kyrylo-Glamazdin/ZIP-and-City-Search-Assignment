import React from 'react'

function ZipCodes(props) {
    let style_div = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    }

    let style_p = {
        margin: "10px"
    }
    
    return(
        <div style={style_div}>{
            props.zip_codes.map(function(zip) {
                return <p key={zip} style={style_p}>{zip}</p>
            })
        }</div>
    )
}

export default ZipCodes