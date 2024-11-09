import Button from '@mui/material/Button';
import Avatar from '../Avatar';
import { forwardRef, ReactElement, Ref } from 'react';
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

interface ModalFollowersProps {
  open: boolean;
  getTweets: () => void;
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

export default function ModalFollowers({ open, setOpen, user, getTweets }: ModalFollowersProps) {
  const userSelector = useAppSelector(state => state.userLogin);
  const userAlreadyFollowing = user.following.find(user => user.userId === userSelector.user.id);

  const handleFollowUser = async () => {
    try {
      if (userAlreadyFollowing) {
        const response = await doDel(`/follower/${userAlreadyFollowing.id}`, userSelector.user.token);
      } else {
        const response = await doPost('/follower', { id: user.id }, userSelector.user.token);
      }
    } catch (error) {
      console.error('Erro ao seguir o usuário:', error);
    } finally {
      setOpen(false);
      getTweets();
    }
  };

  return (
    <>
      <>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setOpen(false)}
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
