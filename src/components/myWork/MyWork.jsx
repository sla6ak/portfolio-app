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
} from './MyWork.styled';
import Contacts from 'components/contacts/Contacts';
// import { DoneOutline } from '@mui/icons-material';
import { DoneAll } from '@mui/icons-material';
import { ReportGmailerrorred } from '@mui/icons-material';
// import { DoneOutline } from '@mui/icons-material';

const MyWork = ({ work }) => {
    return (
        <ElementWork>
            <HeaderWork>
                <TitleWork>{work.title}</TitleWork>
                <WorkLink href={'https://' + work.link} target="_blank" rel="noreferrer" underline="hover">
                    {work.link}
                </WorkLink>
                <h3>Задача</h3>
                <Task>{work.task}</Task>
            </HeaderWork>
            <ProblemsWork>
                <TitleTask>Найденные проблемы в коде:</TitleTask>
                <>
                    {work.problems.map((el, ind, arr) => {
                        return (
                            <PunctTask key={ind}>
                                <ReportGmailerrorred sx={{ color: '#be3952', mr: '5px' }} />
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
                <Contacts size={18} />
            </ResultWork>
        </ElementWork>
    );
};

export default MyWork;
