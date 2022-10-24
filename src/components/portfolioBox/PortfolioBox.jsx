import React from 'react';
import { Container } from '../container/Container';
import { PortfolioHigth, PortfolioConteiner } from './PortfolioBox.styled';
import { useSelector } from 'react-redux';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import myWorks from '../../helpers/myWorks';
import MyWork from 'components/myWork/MyWork';

const PortfolioBox = () => {
    const admin = useSelector(state => state.admin);
    return (
        <PortfolioHigth>
            <Container>
                <PortfolioConteiner>
                    {myWorks.map((el, ind, arr) => (
                        <MyWork work={el} key={ind} />
                    ))}
                    {admin ? (
                        <GeneralButton variant={'contained'} bts={'submit'} onClick={() => {}} type="button">
                            Add new work
                        </GeneralButton>
                    ) : null}
                </PortfolioConteiner>
            </Container>
        </PortfolioHigth>
    );
};

export default PortfolioBox;
