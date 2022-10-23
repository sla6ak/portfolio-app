import { useState } from 'react';
import { useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import Modal from 'components/modal/Modal';
import ModalLogOut from 'components/modalLogOut/modalLogOut';
import { Greeeting, LogOutBtn, Wrapper, TextBtn } from './UserMenu.styled';

const UserMenu = () => {
    const [modal, setModal] = useState(false);

    const admin = useSelector(state => state.admin);

    return (
        <Wrapper>
            <Greeeting>admin</Greeeting>
            <LogOutBtn
                onClick={() => {
                    setModal(true);
                }}
            >
                <LogoutIcon />
                {admin ? <TextBtn> Exit </TextBtn> : <TextBtn> Enter </TextBtn>}
            </LogOutBtn>
            {modal ? (
                <Modal
                    onModalClose={() => {
                        setModal(false);
                    }}
                >
                    <ModalLogOut
                        onModalClose={() => {
                            setModal(false);
                        }}
                    />
                </Modal>
            ) : null}
        </Wrapper>
    );
};

export default UserMenu;
