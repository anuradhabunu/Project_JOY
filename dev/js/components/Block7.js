import React, {Component} from 'react';

export default class Block7 extends Component {
  render() {
    return(
<div className='block7'>
            <div className='block7_container1'>
              <div className='block7_sub_container1'>
                <span className='block7_headings'>PRODUCT</span>
                <a href="https://withjoy.com/" className='block7_container1_content'>Payments</a>
                <a href="https://withjoy.com/" className='block7_container1_content'>Pricing</a>
                <a href="https://withjoy.com/" className='block7_container1_content'>Subscriptions</a>
                <a href="https://withjoy.com/" className='block7_container1_content'>Customers</a>
              </div>
              <div className='block7_sub_container1'>
                <span className='block7_headings'>COMPANY</span>
                <a href="https://withjoy.com/" className='block7_container1_content'>About</a>
                <a href="https://withjoy.com/" className='block7_container1_content'>Blog</a>
                <a href="https://withjoy.com/" className='block7_container1_content'>Jobs</a>
                <a href="https://withjoy.com/" className='block7_container1_content'>Press</a>
              </div>
              <div className='block7_sub_container1'>
                <span className='block7_headings'>RESOURCES</span>
                <a href="https://withjoy.com/" className='block7_container1_content'>Support</a>
                <a href="https://withjoy.com/" className='block7_container1_content'>Contact</a>
                <a href="https://withjoy.com/" className='block7_container1_content'>Privacy & Terms</a>
              </div>
            </div>
            <div className='block7_container2'>
              <span className='block7_container2_content1'>Subscribe to our newsletter</span>
              <div>
              <input className='block7_container2_content2' type='email' value='Your email address' />
              <button className='block7_container2_content3'>
                <a href="https://withjoy.com/" className='block7_container2_content3_link' >Go!</a>
              </button>
              </div>
            </div>
          </div>
    );
  }
}