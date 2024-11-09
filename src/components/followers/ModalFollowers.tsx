import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Avatar from '../Avatar';
import { forwardRef, ReactElement, Ref, useState } from 'react';
import { doDel, doPost } from '../../services/api';
import { useAppSelector } from '../../store/hooks';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { UserTypes } from '../tweet/Tweets';

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
  user: UserTypes;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalFollowers({ open, setOpen, user }: ModalFollowersProps) {
  const userSelector = useAppSelector(state => state.userLogin);
  const userAlreadyFollowing = user.following.find(user => user.userId === userSelector.user.id);
  const handleClose = () => {
    setOpen(false);
  };
  console.log(userAlreadyFollowing);
  const handleFollowUser = async () => {
    try {
      if (userAlreadyFollowing) {
        const response = await doDel(`/follower/${userAlreadyFollowing.id}`, userSelector.user.token);

        setOpen(false);
      } else {
        const response = await doPost('/follower', { id: user.id }, userSelector.user.token);

        setOpen(false);
      }
    } catch (error) {
      console.error('Erro ao seguir o usuário:', error);
    }
  };

  return (
    <>
      <>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{'Voce deseja seguir'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Avatar useBorder={false} useWidth={true} src={user?.id?.replace(/[^0-9.]+/g, '')} />

              {user.name}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleFollowUser}>{userAlreadyFollowing ? 'unFollow' : 'Follow'}</Button>
          </DialogActions>
        </Dialog>
      </>
    </>
  );
}
