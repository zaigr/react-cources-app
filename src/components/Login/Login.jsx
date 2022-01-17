import { useAuth } from '../../hooks/use-auth';
import { Button } from '../common/Button/Button';
import { Input } from '../common/Input/Input';
import Header from '../Header/Header';

function Login() {
  const auth = useAuth();

  return (
    <>
      <Header />
      <div className='Login'>
        <Input label='Email' placeholder='Enter email' />
        <Input label='Password' placeholder='Enter password' />
        <Button
          text='Login'
          onClick={() => {
            auth.signin();
          }}
        />
      </div>
    </>
  );
}

export default Login;
