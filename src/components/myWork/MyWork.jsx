import React from 'react';
import {
    ElementWork,
    HeaderWork,
    WorkLink,
    TitleWork,
    Task,
    ProblemsWork,
    ResultWork,
    TitleTask,
    PunctTask,
    LinkBox,
} from './MyWork.styled';
import Contacts from 'components/contacts/Contacts';
// import { DoneOutline } from '@mui/icons-material';
import { DoneAll } from '@mui/icons-material';
import { ReportGmailerrorred } from '@mui/icons-material';
import { Language } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { ModalCloseBtn } from 'components/modal/Modal.styled';
import { useSelector } from 'react-redux';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';

const MyWork = ({ work }) => {
    const admin = useSelector(state => state.admin);

    const editWork = () => {};
    return (
        <ElementWork>
            {admin ? (
                <ModalCloseBtn onClick={() => {}}>
                    <CloseIcon sx={{ color: '#be3952' }} />
                </ModalCloseBtn>
            ) : null}
            <HeaderWork>
                <TitleWork>{work.title}</TitleWork>
                <LinkBox>
                    <Language color="success" width={25} height={25} />
                    <WorkLink href={'https://' + work.link} target="_blank" rel="noreferrer" underline="hover">
                        {work.link}
                    </WorkLink>
                </LinkBox>
                <h3>Задача</h3>
                <Task>{work.task}</Task>
            </HeaderWork>
            <ProblemsWork>
                <TitleTask>Найденные проблемы в коде:</TitleTask>
                <>
                    {work.problems.map((el, ind, arr) => {
                        return (
                            <PunctTask key={ind}>
                                <ReportGmailerrorred sx={{ color: '#be3952', mr: '5px', mt: '-3px' }} />
                                {el}
                            </PunctTask>
                        );
                    })}
                </>
            </ProblemsWork>
            <ResultWork>
                <TitleTask>Решения и результаты:</TitleTask>
                {work.result.map((el, ind, arr) => {
                    return (
                        <PunctTask key={ind}>
                            <DoneAll color="success" sx={{ mr: '5px' }} />
                            {el}
                        </PunctTask>
                    );
                })}
                <Contacts size={21} />
            </ResultWork>
            {admin ? (
                <GeneralButton variant={'contained'} bts={'link'} onClick={editWork} type="button">
                    Edit my work
                </GeneralButton>
            ) : null}
        </ElementWork>
    );
};

export default MyWork;
