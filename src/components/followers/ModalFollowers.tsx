import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Avatar from '../Avatar';
import { useState } from 'react';

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
  const [userIdAvatar, setUserIdAvatar] = useState<string>('');

  const handleClose = () => {
    setOpen(false);
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
          <Avatar useBorder={false} src={userIdAvatar} useWidth={false} />

          <p id="child-modal-description">Voce deseja seguir</p>
          <h2 id="child-modal-title">{user.name} </h2>
        </Box>
      </Modal>
    </>
  );
}
