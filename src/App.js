import React from 'react';
import Card from './Card';
import SearchBar from './SearchBar';

const url = 'https://api.bestbuy.com/v1/products((search=Lens)&manufacturer=sony&name=e-mount*)?apiKey=n6AZysP6mrFp3ljQjiVlvYCQ&sort=name.asc&show=name,image,salePrice,sku,url&pageSize=100&format=json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [],
      searchfield: ''
    }
  }
// Making sure that API call runs AFTER component renders 
  componentDidMount () {
    fetch(url)
    .then(response => response.json())
    .then(data => {
          this.setState({list : data.products})
      }
    )
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    console.log(event)
    console.log(1+1)
  }

  render() {
    const filteredLenses = this.state.list.filter(newLenses => {
      return newLenses.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div>
      <SearchBar searchChange={this.onSearchChange}/>
      <Card list={filteredLenses}/>
      </div>
    )
  }
}

export default App;