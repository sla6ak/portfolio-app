import React from 'react';
import { Container } from '../container/Container';
import { PortfolioHigth, PortfolioConteiner } from './PortfolioBox.styled';
import { useSelector } from 'react-redux';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';
import myWorks from '../../helpers/myWorks';
import MyWork from 'components/myWork/MyWork';

const PortfolioBox = () => {
    const admin = useSelector(state => state.admin);

    const addNewWork = () => {
        myWorks.push({
            title: 'Продвижение интернет-магазина стройматериалов оптом',
            link: 'smesiopt.ru',
            task: 'Попадание в ТОП по ряду запросов и увеличение количества органического трафика на сайт',
            problems: [
                'Ошибки в коде',
                'Низкая скорость, особенно на мобильных',
                'Отсутствовали meta-теги Title и Description',
            ],
            result: [
                'Исправлены ошибки в коде',
                'Значительно повышена скорость на мобильных и десктоп',
                'Оптимизированы все meta-теги Title и Description',
            ],
        });
        console.log(myWorks);
    };

    return (
        <PortfolioHigth>
            <Container>
                <PortfolioConteiner>
                    {myWorks.map((el, ind, arr) => (
                        <MyWork work={el} key={ind} />
                    ))}
                    {admin ? (
                        <GeneralButton variant={'contained'} bts={'submit'} onClick={addNewWork} type="button">
                            Add new work
                        </GeneralButton>
                    ) : null}
                </PortfolioConteiner>
            </Container>
        </PortfolioHigth>
    );
};

export default PortfolioBox;
