import React from 'react'
import './App.css'
import Search from './Components/Search'
import GifGrid from './Components/GifGrid'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gif_list: [],
      div_style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }
    }

    this.searchGifs = this.searchGifs.bind(this)
    this.searchRandom = this.searchRandom.bind(this)
  }

  fetchData(url, random = false) {
    let component = this

    this.setState({
      gif_list: []
    })

    fetch(url)
    .then(response => response.json())
    .then(json => json.data)
    .then(data => {
      if (random) {
        component.setState({
          gif_list: [data]
        })
      }
      else {
        component.setState({
          gif_list: data
        })
      }})
    .then(() => console.log(component.state.gif_list))
  }

  componentDidMount() {
    let url = "http://api.giphy.com/v1/gifs/trending?api_key=IfGfMPdWrC17Mkoz3U4C9ux0iCNmlacu"
    
    this.fetchData(url)
  }

  searchGifs(search) {
    let search_to_parse = search.toUpperCase()
    let search_parsed = search_to_parse.replace(/ /g, '+')
    let url = "http://api.giphy.com/v1/gifs/search?q=" + search_parsed +"&api_key=IfGfMPdWrC17Mkoz3U4C9ux0iCNmlacu"

    this.fetchData(url)
  }

  searchRandom() {
    let url = "http://api.giphy.com/v1/gifs/random?api_key=IfGfMPdWrC17Mkoz3U4C9ux0iCNmlacu"

    this.fetchData(url, true)
  }

  render() {
    return (
      <div>
        <Search searchGifs={this.searchGifs} searchRandom={this.searchRandom} />
        <GifGrid gif_list={this.state.gif_list} />
      </div>
    )
  }
}

export default App;
