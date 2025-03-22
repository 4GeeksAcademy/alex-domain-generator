import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  let phrase = [pronoun, adj, noun]

  for (let i = 0 ; i < pronoun.length ; i ++) {
    console.log(`${phrase[0][1]}${phrase[1][1]}${phrase[2][i]}.com`)
  }
  
    for (let j = 0 ; j < pronoun.length ; j ++) {
      console.log(`${phrase[0][1]}${phrase[1][0]}${phrase[2][j]}.com`)

    }
      for (let k = 0 ; k < adj.length ; k ++) {
          console.log(`${phrase[0][0]}${phrase[1][1]}${phrase[2][k]}.com`)
        }

        for (let l = 0 ; l < noun.length ; l ++) {
          // console.log(`${phrase[0][i]}${phrase[1][i]}${phrase[2][l]}.com`)
          console.log(`${phrase[0][0]}${phrase[1][0]}${phrase[2][l]}.com`)

        }

};

      
      
          


