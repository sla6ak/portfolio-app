import React from 'react';
import { BlokHeroy, HeroyText, BlokContacts, HeroyFlex } from './BlockInfo.styled';
import { Container } from '../container/Container';

const BlockInfo = () => {
    return (
        <BlokHeroy>
            <Container>
                <HeroyFlex>
                    <HeroyText>
                        Профессиональное продвижение <br /> сайтов в поиске Yandex и Google
                    </HeroyText>
                    <BlokContacts>
                        <div>+38 097 173 12 01</div> <div>кейсы</div>
                    </BlokContacts>
                </HeroyFlex>
            </Container>
        </BlokHeroy>
    );
};

export default BlockInfo;
