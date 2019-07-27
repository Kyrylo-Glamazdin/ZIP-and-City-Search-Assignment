import React from 'react'

function GifGrid(props) {

    let div_style = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }

    let img_style = {
        height: "200px",
        margin: "20px"
    }

    return(
        <div style={div_style}>
            {props.gif_list.map(function(item) {
                return <img 
                    style={img_style} 
                    src={item.images.downsized_medium.url}
                    alt="" />
            })}
        </div>
    )
}

export default GifGrid