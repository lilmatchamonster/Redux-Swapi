import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getStarwarsCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props)
    this.props.getStarwarsCharacters()
    
  }

  render() {console.log(this.props)
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h3>Fetching Your Starwars Data...</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  (mapStateToProps),
  {
    getStarwarsCharacters: getStarwarsCharacters
  }
)(CharacterListView);
