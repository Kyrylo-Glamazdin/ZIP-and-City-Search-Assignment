import React, { Component } from 'react';
import ZipInfo from './ZipInfo.js'
import "./CityForm.css";

class CityForm extends Component{
    constructor(){
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.retrieveCityData = this.retrieveCityData.bind(this);
        this.retrieveStateData = this.retrieveStateData.bind(this);
        this.getZipStateData = this.getZipStateData.bind(this);
        this.state = {
        city: "",
        apiLink: "http://ctp-zip-api.herokuapp.com/city/",
        fullCityLink: "http://ctp-zip-api.herokuapp.com/city/",
        zipList: [],
        stateList: [],
        cityFound: true
        };
    }
    
    handleInputChange(event){
        this.setState({city: event.target.value.toUpperCase()});
        this.setState({fullCityLink: this.state.apiLink + event.target.value.toUpperCase()});
    }
    
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.fullCityLink);
        this.retrieveCityData();
        this.retrieveStateData();
        console.log(this.state.stateList)
    }
    
    //returns the list of zipcodes associated with the name of this city
    retrieveCityData(){
        const that = this;
        let zipArray = [];
        fetch(this.state.fullCityLink)
        .then(res => res.json())
        .then(json => {
              for (let i = 0; i < json.length; i++) {
              zipArray.push(json[i]);
              }
              this.setState({
                            zipList: zipArray,
                            cityFound: true
                            })
              })
        .catch(err => {
               that.setState({
                    zipList: [],
                    stateList: [],
                    cityFound: false
               })
               })
    }
    
    retrieveStateData(){
        let stateArray = [];
        for (let index = 0; index < this.state.zipList.length; index++){
            let newState = this.getZipStateData(this.state.zipList[index]);
            stateArray.push(newState);
        }
        this.setState({
            stateList: stateArray
        })
    }
    
    getZipStateData(zip){
        let zipLink = "http://ctp-zip-api.herokuapp.com/zip/" + zip;
        let stateName = "";
        let resArray = [];
        fetch(zipLink)
        .then(res => res.json())
        .then(json => {
              for (let i = 0; i < json.length; i++) {
              resArray.push(json[i]);
              }
              if (resArray.length > 0){
              let stateName = resArray[0].State;
              return stateName;
              }
              });
    }
    
    render(){
        return (
                <div className="CitySearchForm">
                <form onSubmit={this.handleSubmit}>
                <label>
                City:
                <input type="text" name="cityInput" onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Search" />
                </form>
                {this.state.cityFound === false ? <p>City not Found</p> : <span></span>}
                <div className="ZipcodeSection">
                <ZipInfo zips={this.state.zipList} />
                </div>
                </div>
                );
    }
};

export default CityForm







//takes CITY returns ZIPS
// let getCityInfo = city => {
//    let url = http://ctp-zip-api.herokuapp.com/city/ + city.toUpperCase()
//    let zip_list = []
//    fetch(url)
//        .then(res => res.json())
//        .then(json => {
//            for (let i = 0; i < json.length; i++) {
//                zip_list[i] = json[i]
//            }
//        })
//        .catch(err => {
//            console.log(“Error: Could not find city!“)
//        })
//    return zip_list
// }
// //takes ZIP returns STATES
// let getStateInfo = zipcode => {
//    let url = http://ctp-zip-api.herokuapp.com/zip/ + zipcode
//    let state_list = []
//    fetch(url)
//        .then(response => response.json())
//        .then(data => {
//            for (let i = 0; i < data.length; i++) {
//                state_list[i] = data[i].State
//            }
//        })
//        .catch(err => {
//            console.log(“Error: Could not find zip code!“)
//        })
//    return state_list
// }
// //Goes through list of ZIPS and returns list of STATES
// let getStateList = zipcode_list => {
//    let state_list = []
//    for (let i = 0; i < zipcode_list.length; i++) {
//        let state_info = getStateInfo(zipcode_list[i].toString())
//        for (let j = 0; j < state_info.length; j++) {
//            state_list[state_list.length - 1] = state_info[j]
//        }
//        console.log(state_info)
//    }
//    console.log(state_list)
//    return state_list
// }
