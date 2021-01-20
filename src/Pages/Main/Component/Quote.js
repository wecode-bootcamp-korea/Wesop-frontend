import React, { Component } from 'react';
import './Quote.scss'

class Quote extends Component {
  render() { 
    return (
      <section className="mainSection-quote">
        <div className="mainSection-quote-content">
          <div className="mainSection-quote-content-title">‘It is high time to rekindle the stars.’</div>
          <div className="mainSection-quote-content-writer">Guillaume Apollinaire</div>
        </div>
      </section>  
    );
  }
}

export default Quote;