import React from "react";
import "./Header.scss";

//rahul
//write style for disbaled button

const Header = props => {

  return (
    <div className='headerMain'>
      <div className='upperSection'>
        <div className='mainHeading'>
          <p className='mainTitle'>Web Design
            <i className='icon-star'></i>
          </p>
          <p className='subTitle'> Add board description</p>
        </div>
        <div className='lowerSection'>
          <ul className='iconUl'>
            <li className='iconLi marginR'>
              <i class="icon-user iconCss"></i>
              <i class="icon-user iconCss borderOuter"></i>
            </li>
            <li className='iconLi borderOutline border0'>
              <i className='icon-plug iconCss iconCssSmall'> / 0 </i></li>
            <li className='iconLi borderOutline border0'>
              <i className='icon-robot iconCss iconCssSmall'> / 0</i>
            </li>
            <li className='iconLi borderOutline'>
              <i className='icon-multimedia iconCssSmall'>
                <span className='paddR'>Start zoom call</span>
              </i>
            </li>
            <li className='iconLi borderOutline borderLess'>
              <div className='iconText'>
                <i className='icon-multipleUser iconCss iconCssSmall'> / <span className='fontB'> 1 </span> </i>
                <span className='fontS'> Activities / 0</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='secondRow'>
        <div className='tableSection'>
          <i className='icon-table paddT'></i>
          <p className='mainTitle'>Main Table <i className='icon-downArrow'></i></p>
        </div>
        <div className='rightSection'>
          <ul>
            <li className='iconLi borderR bgColor padd0'>
              <span className='paddR'>New Item </span>
            </li>
            <li className='iconLi borderL bgColor'>
              <i className='icon-left'></i>
            </li>
            <li className='iconLi borderOutline'>
              <span className=''> Search / Filter Board
              </span>
            </li>
            <li className='iconLi iconCss'>
              <i className='icon-user'></i>
            </li>
            <li className='iconLi iconCss'>
              <i className='icon-closeEye'></i>
            </li>
            <li className='iconLi iconCss paddLast'>
              <i className='icon-alignment'></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
