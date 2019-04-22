import React, { Component } from 'react';
import Header from "./components/header/index";
import Jumbotron from "./components/jumbotron/index";
import Image from "./components/imsg/index";
import Footer from "./components/footer/index";
import images from "./images.json"
import "./app.css";

class App extends Component {
  state = {
    images,
    score: 0,
    highscore: 0
  };

// function for when the image has been clicked twice
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.images.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

// function for analyzing how many times an image ahs been clicked 
  clickCount = id => {
    this.state.images.find((o, i) => {
      if (o.id === id) {
        if(images[i].count === 0){
          images[i].count = images[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.images.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        <Jumbotron />
        <div id="images">
          {this.state.images.map(images => (
            <Image
              clickCount={this.clickCount}
              id={images.id}
              key={images.id}
              image={images.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
