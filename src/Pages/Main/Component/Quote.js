import React, { Component } from 'react';
import './Quote.scss'

class Quote extends Component {
  render() { 
    return (
      <section className={this.props.fourthFeed ? "mainSection-quote" : "HiddenQuote"} >
        <div className="mainSection-quote-content">
          <div className="mainSection-quote-content-title">‘It is high time to rekindle the stars.’</div>
          <div className="mainSection-quote-content-writer">Guillaume Apollinaire</div>
        </div>
      </section>  
    );
  }
}

export default Quote;