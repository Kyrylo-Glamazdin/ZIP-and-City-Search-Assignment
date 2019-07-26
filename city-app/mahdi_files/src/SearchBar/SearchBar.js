import React from 'react'
import ZipCodes from '../ZipCodes/ZipCodes'
import StatesList from '../StatesList/StatesList'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            zip_codes: [],
            states_list: []
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.updateInfo = this.updateInfo.bind(this)
    }

    onChangeHandler(event) {
        let { value } = event.target
        this.setState({
            city: value
        })
    }

    existsInStatesList(state_name) {
        for (let i = 0; i < this.state.states_list.length; i++) {
            if (this.state.states_list[i] === state_name)
                return true
        }
        return false
    }

    updateInfo() {
        let component = this
        let url = "http://ctp-zip-api.herokuapp.com/city/" + this.state.city.toUpperCase()

        this.setState({
            states_list: []
        })

        fetch(url)
        .then(res => res.json())
        .then(json => {
            component.setState({
                zip_codes: json
            })
        })
        .then(() => {
            let zip_codes = component.state.zip_codes
            for (let i = 0; i < zip_codes.length; i++) {
                let url_zip = "http://ctp-zip-api.herokuapp.com/zip/" + zip_codes[i]
                fetch(url_zip)
                .then(res => res.json())
                .then(json => {
                    for (let j = 0; j < json.length; j++) {
                        if (!component.existsInStatesList(json[j].State)) {
                            let states_list_ = component.state.states_list
                            states_list_[states_list_.length] = json[j].State
                            component.setState({
                                states_list: states_list_
                            })
                        }
                    }
                })
            }
        })
    }



    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="ENTER CITY" onChange={this.onChangeHandler} />
                    <button 
                        onClick={ () => {
                            this.updateInfo(this.state.city)
                        }}>
                        Search
                    </button>
                    <button onClick={ () => {
                        console.log(this.state.zip_codes)
                        console.log(this.state.states_list)
                    }}>
                        Show State
                    </button>
                </div>
                <div>
                    <ZipCodes zip_codes={this.state.zip_codes} />
                    <StatesList states_list={this.state.states_list} />
                </div>
            </div>
        )
    }
}

export default SearchBar