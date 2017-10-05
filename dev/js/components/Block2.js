import React, {Component} from 'react';

export default class Block2 extends Component {
  render() {
    return(
          <div className='block2'>
            <div className='block2_container1'>
              <span className='Perfect_for_busy_people'>Perfect for busy people</span>
            </div>
            <div className='block2_container2'>
              <span className='block2_container2_details'>With TaskTrack you will never lose track of your buys schedule. We promise :)</span>
            </div>
            <div className='block2_container3'>
              <div className='block2_sub_container3'>
                <a href="https://withjoy.com/" className='block2_sub_container3_details_link' >
                  <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/D286CDE9-DEE9-44F4-A336-A44064DE52B1.png' 
                  alt='google_play'/>
                  <span className='block2_sub_container3_details'>Google Play</span>
                </a>
              </div>
              <div className='block2_sub_container3'>
                <a href="https://withjoy.com/" className='block2_sub_container3_details_link'>
                  <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/0538FC7A-886A-45F6-9A60-AB4F04CFEB12.png' 
                  alt='app_store'/>
                  <span className='block2_sub_container3_details'>App Store</span>
                </a>
              </div>
            </div>
            <div className='block2_container4'>
              <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/6DE550F7-A914-46C6-BAB3-DCB3B58D5164.png'
              alt='spots_image' className='block2_container4_image1'/>
              <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/3472E59A-204B-40A0-AE5E-971B7873789A.png'
              alt='phone_image1' className='block2_container4_image2'/>
              <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/6855D155-171E-4A8A-89AB-0942E82790EB.png'
              alt='phone_image2' className='block2_container4_image3'/>
              <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/25686DAB-1706-4562-A786-CAE77E8DF318.png'
              alt='phone_image3' className='block2_container4_image4'/>
              <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/6DE550F7-A914-46C6-BAB3-DCB3B58D5164.png'
              alt='spots_image' className='block2_container4_image5'/>
            </div>
          </div>
    );
  }
}