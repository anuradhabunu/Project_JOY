import React, {Component} from 'react';

export default class ComponentLink extends Component {
  render() {
    return(
      <a href={this.props.link} className={this.props.classType} target="_blank">{this.props.text}</a>
    );
  }
}