import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Example() {
  const notify = () => {
    toast.success('Tweet publicado com sucesso!!', {
      position: 'top-center',
    });

    toast.error('Error ao publicar seu tweet', {
      position: 'top-center',
    });
  };

  return (
    <>
      <div>
        <button onClick={notify}>Notify</button>;<h1>teste</h1>
        <ToastContainer />
      </div>
    </>
  );
}

export default Example;
