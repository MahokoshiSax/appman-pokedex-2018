import React from 'react'
import CardList from '../components/CardList'


class PokedexPage extends React.PureComponent {

  constructor(){
    super()
    this.state = {
      searchWord: "",
    }
  }

  render() {
    return (
      <div style={{ maxHeight: '89vh', overflow: 'scroll' }}>
        <CardList />
      </div>
    )
  }
}

export default PokedexPage