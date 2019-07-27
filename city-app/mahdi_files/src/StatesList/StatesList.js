import React from 'react'

function StatesList(props) {
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
            props.states_list.map(function(state_name) {
                return <p key={state_name} style={style_p}>{state_name}</p>
            })
        }</div>
    )
}

export default StatesList
