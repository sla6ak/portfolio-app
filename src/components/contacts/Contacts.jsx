import React from 'react';
import { ReactComponent as Telegram } from '../../svg/icons8-telegram-app.svg';
import { ReactComponent as Viber } from '../../svg/icons8-viber.svg';
import { ReactComponent as WatsUp } from '../../svg/whatsapp-svgrepo-com.svg';
import { IconBox, NumberT } from './Contacts.styled';

const Contacts = ({ size }) => {
    return (
        <IconBox>
            <Telegram width={size} height={size} />
            <Viber width={size} height={size} />
            <WatsUp width={size - 2} height={size - 2} />
            <NumberT sizeSVG={size}>+38 097 173 12 01</NumberT>
        </IconBox>
    );
};

export default Contacts;
