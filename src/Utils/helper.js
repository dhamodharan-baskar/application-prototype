import { toast } from 'react-toastify';

export const handleError = (err) => {
const { data, status, config } = err;
    switch (status) {
      case 400:
        if (typeof data === 'string') {
          toast.error(data);
        }
        if (config.method === 'get' && data.errors.hasOwnProperty('id')) {

        }
        if (data.errors) {
          toast.error('data.errors');
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        }
        break;
      case 401:
        toast.error('unauthorised');
        break;
      case 404:
        toast.error('not-found');
        // history.push('/not-found');
        break;
      case 500:
        //mobXstore.commonStore.setServerError(data);
        toast.error('Oops, internal error!');
        break;
    }
}