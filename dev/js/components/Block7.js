import React, {Component} from 'react';
import ComponentLink from './ComponentLink';

export default class Block7 extends Component {
  render() {
    return(
          <div className='block7'>
            <div className='block7_container1'>
              <div className='block7_sub_container1'>
                <span className='block7_headings'>PRODUCT</span>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='Payments'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='Pricing'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='Subscriptions'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='Customers'/>
              </div>
              <div className='block7_sub_container1'>
                <span className='block7_headings'>COMPANY</span>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='About'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='Blog'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='Jobs'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='Press'/>
              </div>
              <div className='block7_sub_container1'>
                <span className='block7_headings'>RESOURCES</span>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='Support'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='Contact'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container1_content'
                text='Privacy & Terms'/>
              </div>
            </div>
            <div className='block7_container2'>
              <span className='block7_container2_content1'>Subscribe to our newsletter</span>
              <div>
              <input className='block7_container2_content2' type='email' value='Your email address' />
              <button className='block7_container2_content3'>
                <ComponentLink
                link='https://withjoy.com/'
                classType='block7_container2_content3_link'
                text='Go!'/>
              </button>
              </div>
            </div>
          </div>
    );
  }
}