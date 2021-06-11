import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './layout.scss';
import useLocale from '../../hooks/use-locale';
import { AppLogoIcon, RightOpen, Dashboard } from '../svg-icons/svg-icons';
import { NavLink } from 'react-router-dom';
import { animate } from '../../utils';


const Layout = (props) => {
  const {
    children,
  } = props;

  const { i } = useLocale();
  const currentLocale = window.localStorage.getItem('locale') ? JSON.parse(window.localStorage.getItem('locale')) : 'en';
  const [selectedItem, setSelectedItem] = useState('Dashboard')


  const setLanguage = () => {
    const newSetLng = currentLocale === 'en' ? 'ar' : 'en'

    window.localStorage.setItem('locale', JSON.stringify(newSetLng));
  }

  const navItem = (props) => {
    const { to, title, onClick, className, Icon, label } = props;

    <li className={'layout__link--active'}>
      <NavLink
        exact
        to={to}
        title={title}
        onClick={onClick}
        className={className}
      >
        <Icon className="layout__menu-icon" type="assessment" />
        {label}
      </NavLink>
    </li>
  }

  const navItems = [
    {
      label: 'Dashboard'
    },
    {
      label: 'Advisors'
    },
    {
      label: 'My Documents'
    },
    {
      label: 'News feed'
    },
    {
      label: 'Support'
    }
  ]


  return (
    <div className="layout">
      <div className="layout__body">

        <div className="layout__navbar">
          <div className="layout__bg-layer">

            <div className="layout__nav">

              <span className={`layout__logo ${animate('fadeInBottomRight faster')}`}> <AppLogoIcon /> </span>

              <div className="layout__list">
                <ul>
                  <Dashboard />
                  {/* {navItems.map((item) => (
                    <li 
                      className={`layout__item layout__item--${ item.label === selectedItem &&  'selected'} `}
                      onClick={() => setSelectedItem(item.label)}
                    >
                      <span> Icon </span>
                      <span className="mx-1">{item.label}</span>
                      { item.label === selectedItem &&  <span className="layout__item--arrow"> <Dashboard /> </span> }
                    </li>
                  ))} */}
                </ul>

              </div>

            </div>

          </div>
        </div>

        <div className="layout__content">
            {children}
        </div>
      </div>

    </div>
  );
};


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default React.memo(Layout);
