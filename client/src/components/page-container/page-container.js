import React from 'react';
import useLocale from '../../hooks/use-locale';
import alexImg from '../../assets/alex.png';
import { OpenDownArrow } from '../../components/svg-icons/svg-icons'
import { animate } from '../../utils';
import './page-container.scss'

const PageContainer = (props) => {
    const { children } = props;
    const { i } = useLocale();
    const userName = 'Alex Martin';

    return <div className="page-container">

        <div className="page-container__body">

            <div className={`page-container__header flex-row ${animate('fadeInDown')}`}>
                <div className="flex-row page-container__instructions">
                    <span> <img src={alexImg} alt="alex martin" width="64" height="64" /> </span>
                    <span className="mx-1">{i('Welcome')}<strong className="mx-0">{userName}.</strong> {i('personalize-dashboard')} </span>
                </div>
                <div className="fz-0 flex-row mx-">
                    <div className="mx-2"> <span className="mx-0 capitalize"> {i('currency')} GPB  </span> <span> <OpenDownArrow /> </span> </div>
                    <div className="mx-2"> <span className="mx-0"> {i('my-account')}  </span> <span> <OpenDownArrow /> </span> </div>
                </div>

            </div>

            {children}
        </div>

    </div>

}

export default PageContainer;
