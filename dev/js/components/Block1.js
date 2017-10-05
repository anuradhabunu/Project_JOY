import React, {Component} from 'react';
import ComponentLink from './ComponentLink';

export default class Block1 extends Component {
  render() {
    return(
          <div className='block1'>
            <div className='filter_container'>
              <div className='filter_logo'>
                <img src ="https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/9934CA06-F4E5-4A2C-9371-ACEFD7F867B4.png" 
                alt='logo' className ='logo'/>
              </div>
              <div className='filter'>
                <ComponentLink
                link='https://withjoy.com/'
                classType='filter_content'
                text='Men'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='filter_content'
                text='Women'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='filter_content'
                text='Kids'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='filter_content'
                text='Shopping'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='filter_content'
                text='Blog'/>
                <ComponentLink
                link='https://withjoy.com/'
                classType='filter_content'
                text='Contact'/>
              </div>
            </div>
            <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/C504EE3E-6E0F-490F-8115-B320E40DF73A.png'
            alt='fashion'/>
            <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/3ABE1CE7-387E-4ABA-936D-9C537BCEC6DA.png'
            alt='image' className='image_shapes'/>
            <img src = "https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/F6EA36BE-CE81-4258-9AA8-E2C2DB81E585.png" 
            alt="new_arrival_img" className='new_arrival_girl_img'/>
            <img src='https://cdn.zeplin.io/59416fd3aa203d22db1e60c9/assets/357AC13A-CDEB-44AB-948D-B74CA4451FE8.png'
            alt='highlight_bar' className='new_arrival_hr'/>
            <span className='New-Arrivals'> New Arrivals</span>
            <div clasName='Browse_Collection_Container'>
              <ComponentLink
              link='https://withjoy.com/'
              classType='Browse-Collection'
              text='Browse Collection'/>
            </div>
          </div>
    );
  }
}