import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CardList from "./components/CardList";
import playingCards from "./playingCards.json";



class App extends React.Component {
  state = {
    playingCards,
    currentScore: 0,
    topScore: 0,
    currentGuess: "",
    clicked: []
  };

  componentDidMount(){
    this.handleCardShuffle();
  };

  handleCardShuffle = () => {
    let shuffledCards = this.state.playingCards.map((a) => [Math.random(),a]).sort((a,b) => a[0]-[0]).map((a) => a[1]);
    this.setState({playingCards: shuffledCards});
  };
  
  handleCardClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1){
      this.setState({ clicked: this.state.clicked.concat(id)});
      this.handleIncrement();
    }
    else{
      this.handleGameReset();
    }
  };

  handleIncrement = () =>{
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      currentGuess: "Rad Gusss"
    });
    if (newScore > this.state.topScore){
      this.setState({topScore: newScore});
    }
    else if (newScore === 12){
      this.setState({currentGuess: "Winner Winner Chicken Dinner"});
    }
    this.handleCardShuffle();
  };

  handleGameReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      currentGuess: "No Double Dipping",
      clicked: []
    });
    this.handleCardShuffle();
  };

  render(){
    return (
      <Router>
        <div>
          <Navbar
            score={this.state.currentScore}
            topScore={this.state.topScore}
            currentGuess={this.state.currentGuess}
          />
          <Jumbotron />
          <CardList
          cards={this.state.playingCards}
          processFunction={this.handleCardClick}
          />
        </div>
      </Router>
    );
  }
}

export default App;
