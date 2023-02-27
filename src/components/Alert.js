// src/components/Alert.js

import { Component } from 'react';

class Alert extends Component {
  constructor() {
    super();
    this.color = null;
    this.bgColor = this.bgColor;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px"
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor() {
    super();
    this.color = 'rgb(0, 0, 255)'; // blue
    this.bgColor = 'rgb(220, 220, 255)'; // light blue
  }
}

class WarningAlert extends Alert {
  constructor() {
    super();
    this.color = 'rgb(255, 120, 0)'; // orange
    this.bgColor = 'rgb(255, 230, 150)'; // light orange
  }
}

class ErrorAlert extends Alert {
  constructor() {
    super();
    this.color = 'rgb(255, 0, 0)'; // red
    this.bgColor = 'rgb(255, 220, 220)'; // light red
  }
}

export { InfoAlert, WarningAlert, ErrorAlert };
