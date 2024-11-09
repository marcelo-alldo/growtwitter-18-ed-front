import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Avatar from '../Avatar';
import { useState } from 'react';
import { doDel, doPost } from '../../services/api';
import { useAppSelector } from '../../store/hooks';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface ModalFollowersProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: {
    username: string;
    name: string;
    id: string;
  };
}

export default function ModalFollowers({ open, setOpen, user }: ModalFollowersProps) {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const userSelector = useAppSelector(state => state.userLogin);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFollowUser = async () => {
    try {
      if (isFollowing) {
        const response = await doDel(`/follower/${user.id}`, userSelector.user.token);
        console.log(response);
        setIsFollowing(false);
      } else {
        const response = await doPost('/follower', { id: user.id }, userSelector.user.token);

        console.log(response);
        setIsFollowing(true);
      }
      setIsFollowing(true);
    } catch (error) {
      console.error('Erro ao seguir o usuário:', error);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <Avatar useBorder={false} useWidth={false} src={user.id.replace(/[^0-9\.]+/g, '')} />

          <p id="child-modal-description">Voce deseja seguir</p>
          <h2 id="child-modal-title">{user.name} </h2>
          <Button onClick={handleFollowUser}>{isFollowing ? 'Seguindo' : 'Seguir'}</Button>
        </Box>
      </Modal>
    </>
  );
}
