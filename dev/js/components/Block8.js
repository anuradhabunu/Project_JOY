import React, {Component} from 'react';

export default class Block8 extends Component {
  render() {
    return(
          <div className='block8'>
            <div className='block8_container1'>
              <span className='block8_container1_content'>© Rainbow UI. All rights reserved</span>
            </div>
            <div className='block8_container2'>
              <a href="https://withjoy.com/" className='block8_container2_content' target="_blank"> 
                <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/4FC30161-3583-49C8-9EB1-12483690722F.png'
                alt='facebook icon'/>
              </a>
              <a href="https://withjoy.com/" className='block8_container2_content' target="_blank">
                <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/77593E80-FCBF-4A2A-8DE3-122540A73925.png'
                alt='google plus icon'/>
              </a>
              <a href="https://withjoy.com/" className='block8_container2_content' target="_blank">
                <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/E4D01890-E19E-4972-BF33-753DE9C5FAE3.png'
                alt='twitter icon'/>
              </a>
              <a href="https://withjoy.com/" className='block8_container2_content' target="_blank">
                <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/629FEB4C-C3C5-4311-A4E5-271639C416D2.png'
                alt='instagram icon'/>
              </a>
          </div>
        </div>
    );
  }
}