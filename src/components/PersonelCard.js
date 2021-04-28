//önce react import
import React from 'react';
import PropTypes from 'prop-types';

/*
const PersonelCard = (props) => { //PersonelCard child component
    console.log(props); //çıktısı 3 tane object {cardTitle: "Galatasaray"} {cardTitle: "Fenerbahçe"} {cardTitle: "Beşiktaş"}
    return (
        <div className="card w-100">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <p className="card-text"><small className="text-muted">{props.updatedTime}</small></p>
            </div>
        </div>
    );
};
*/

class PersonelCard extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                    <p className="card-text"><small className="text-muted">{this.props.updatedTime}</small></p>
                </div>
            </div>
        );
    }
}

//Default props ve propTypes-start
PersonelCard.defaultProps = {
    cardTitle: "Default Card Title"
}

PersonelCard.propTypes = {
    cardText: PropTypes.string
  };
//Default props ve propTypes-end

export default PersonelCard;

//8-Function and Class Components-start
/*
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}


class Welcome1 extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}
*/
//8-Function and Class Components-end