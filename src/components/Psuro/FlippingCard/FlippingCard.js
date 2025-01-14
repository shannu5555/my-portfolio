import React, { Component } from 'react';
import './FlippingCard.css';

// Component for form inputs
class CardInput extends Component {
  render() {
    return (
      <fieldset>
        <input
          name={this.props.name}
          id={this.props.id}
          type={this.props.type || 'text'}
          placeholder={this.props.placeholder}
          required
        />
      </fieldset>
    );
  }
}

// Component for textarea
class CardTextarea extends Component {
  render() {
    return (
      <fieldset>
        <textarea
          name={this.props.name}
          id={this.props.id}
          placeholder={this.props.placeholder}
          required
        ></textarea>
      </fieldset>
    );
  }
}

// Component for button
class CardBtn extends Component {
  render() {
    return (
      <fieldset>
        <button
          className={this.props.className}
          type={this.props.type}
          value={this.props.value}
        >
          {this.props.value}
        </button>
      </fieldset>
    );
  }
}

// Component for profile links
class CardProfileLinks extends Component {
  render() {
    const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];

    const linksList = profileLinks.map((link, index) => (
      <li key={index}>
        <a href="#">
          <i className={'fa fa-' + link}></i>
        </a>
      </li>
    ));

    return (
      <div className="card-social-links">
        <ul className="social-links">{linksList}</ul>
      </div>
    );
  }
}

// Component for the front side of the card
class CardFront extends Component {
  render() {
    return (
      <div className="card-side side-front">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
              <img src="https://source.unsplash.com/w8YICpz1I10/358x458" alt="front" />
            </div>

            <div className="col-xs-6 side-front-content">
              <h2>Czech based</h2>
              <h1>UI/UX Designer</h1>
              <p>
                Andrey is driven by turning ideas into scalable and empowering
                experiences that solve real life problems.
              </p>
              <p>
                He is currently the founder of Dvorak Media. Previously, Andrey was a product designer at Dropbox.
              </p>
              <p>
                Over the years, Michael has been privileged to have worked with Adobe, Evernote, Square, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Component for the back side of the card
class CardBack extends Component {
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          <h1>Let's get in touch!</h1>

          <form action="" className="card-form">
            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactFirstName"
                  id="contactFirstName"
                  type="text"
                  placeholder="Your first name"
                />
              </div>

              <div className="col-xs-6">
                <CardInput
                  name="contactLastName"
                  id="contactLastName"
                  type="text"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactEmail"
                  id="contactEmail"
                  type="email"
                  placeholder="Your email address"
                />
              </div>

              <div className="col-xs-6">
                <CardInput
                  name="contactSubject"
                  id="contactSubject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>

            <CardTextarea
              name="contactMessage"
              id="contactMessage"
              placeholder="Your message"
            />

            <CardBtn className="btn btn-primary" type="submit" value="Send message" />
          </form>

          <CardProfileLinks />
        </div>
      </div>
    );
  }
}

// Main Flipping Card component
class FlippingCard extends Component {
  render() {
    return (
      <div className="react-card">
        <div className="card-container">
          <div className="card-body">
          <h1>flippingcard</h1>
            <CardBack />
            <CardFront />
          </div>
        </div>
      </div>
    );
  }
}

export default FlippingCard;
