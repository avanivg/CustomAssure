import React, {Component} from 'react';
import './Nlp.css';
import Sentiment from 'sentiment'; 
const sentiment = new Sentiment(); 


class Nlp extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            sentimentScore: null, 
            generalSentiment:null
        };
        this.findSentiment = this.findSentiment.bind(this); 
    }

    findSentiment(event) {
        const result = sentiment.analyze(event.target.value); 
        console.log(result); 
        this.setState({
            sentimentScore: result.score
        })

        if(result.score < 0) {
            this.setState({
                generalSentiment: 'Negative'
            })
        }
        else if(result.score > 0) {
            this.setState({
                generalSentiment: 'Positive'
            })
        }
        else {
            this.setState({
                generalSentiment: 'Neutral'
            })
        }
    }

    render() {
        return (
            <div className="Nlp">
                <h1> Email Sentiment Analysis </h1>
                <p>Enter text for real time analysis: </p>
                <textarea rows="10" cols="80" onChange={this.findSentiment}/>
                <p>Sentiment Score: {this.state.sentimentScore}</p>
                <p>General Sentiment: {this.state.generalSentiment}</p>
            </div>
        )
    }
}

export default Nlp; 