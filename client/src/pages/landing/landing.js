import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './landing.scss'
import { ArrowDownIcon, AppLogoIcon } from '../../components/svg-icons/svg-icons'
import { animate } from '../../utils';
import useLocale from '../../hooks/use-locale';

const Landing = () => {

    const [animations, setAnimations] = useState({ logo: '', arrow: '', block: '' });
    const history = useHistory();
    const { i } = useLocale();
    const [switchPage, setSwitchPage] = useState({ switchPage: '', show: '' }); 

    const arrowHandler = () => {
        const attrs = {
            block: `${animate('fadeInUp')} landing__display`,
            arrow: animate('fadeOut'),
            logo: 'landing__logo',
            fadeDescription: animate('fadeInUp slow'),
            animateBg: true 
        }

        setAnimations(attrs);
    }

    const dashboardButtonHandler = () => {

        const attrs = {
            hide : 'landing__switch',
            hzLine: 'landing__line',
        }

        setSwitchPage(attrs)

        setTimeout(() => {
            history.push('/home')
        }, 1200)
    }



    return <div 
        className={`landing__page 
        ${animations.animateBg && 'landing__page-slideUp' }`}>

        <div className="landing__layer text-color">

            <div className={`landing__container ${switchPage.hide}`}>

                <span className={`${animations.logo}`}> <AppLogoIcon />  </span>


                <div className={`landing__text-block ${animations.block}`}>
                    <h1>{i('finance-one-place')}</h1>
                    <div className={`landing__description ${animations.fadeDescription}`}>{i('landing-page-description')}</div>
                    <button className="landing__button" onClick={() => dashboardButtonHandler() }>{i('view-dashboard')}</button>
                </div>

            </div>

            <div className={`${switchPage.hzLine}`}> </div>

            <span className={`landing__arrow-down ${animations.arrow}`} onClick={() => arrowHandler()} > <ArrowDownIcon /> </span>
        
        </div>

    </div>
}

export default Landing;