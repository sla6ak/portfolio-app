import { useDispatch } from 'react-redux';
import { isAdmin } from 'redux/sliceAdmin';
import { ButtonWrapper, ModalTitle, LogOutContainer, TitleAccent, Button } from './ModalLogOut.styled';
import { GeneralButton } from 'components/generalButton/GeneralButton.styled';

const ModalLogOut = ({ onModalClose }) => {
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(isAdmin(''));
    };

    return (
        <>
            <LogOutContainer>
                <ModalTitle>
                    <TitleAccent>Log Out</TitleAccent>
                    Are you sure you want to log out?
                </ModalTitle>
                <ButtonWrapper>
                    <Button>
                        <GeneralButton fullWidth variant={'contained'} bts={'submit'} onClick={logOut} type="submit">
                            Yes
                        </GeneralButton>
                    </Button>
                    <Button>
                        <GeneralButton fullWidth variant={'outlined'} bts={'link'} onClick={onModalClose} type="button">
                            No
                        </GeneralButton>
                    </Button>
                </ButtonWrapper>
            </LogOutContainer>
        </>
    );
};

export default ModalLogOut;
