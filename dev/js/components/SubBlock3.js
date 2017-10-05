import React, {Component} from 'react';

export default class SubBlock3 extends Component {
  render() {
    return(
            <div className='block3_container1'>
              <div>
                <img src={this.props.source}
                alt={this.props.alternative}/>                
              </div>
              <div><span className='block3_sub_container2_content'>{this.props.text1}</span></div>
              <div className='block3_sub_container3'>
                <span className='block3_sub_container3_content'>
                  {this.props.text2}   
                </span>
              </div>
            </div>
    );
  }
}