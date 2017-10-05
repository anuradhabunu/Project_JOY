import React, {Component} from 'react';

export default class Block4 extends Component {
  render() {
    return(
          <div className='block4'>
            <div>
              <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/272E02D5-340C-48BB-9B53-794A640D6EA2.png'
              alt='laptop_image'/>
            </div>
            <div>
              <button className='block4_button'>
                <a href='https://withjoy.com/' target='_blank'><img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/E9E52DDE-E455-49DA-A981-09F4433007FE.png'
                alt='play_button'/></a>
              </button>
            </div>
            <div className='block4_container2'>
              <span className='block4_container2_content1'>
                We encourage creativity
              </span>
              <br/>
              <span className='block4_container2_content2'>
                Large businesses require a lot of IT infrastructure and a department to look after it. Small businesses often can’t afford to have that sort of internal support in place, yet they need fully operational IT systems in order for the business to run properly. For businesses like these, external IT support can be a cost-effective yet vital resource.
              </span>
            </div>
          </div>
    );
  }
}