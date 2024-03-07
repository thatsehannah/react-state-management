import { useReducer } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { authenticate, User } from './api/authenticate';
import { authorize } from './api/authorize';

const App = () => {
  const [{ user, permissions, loading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <Header
        user={user}
        onSignInClick={handleSignInClick}
        loading={loading}
      />
      <Main
        user={user}
        permissions={permissions}
      />
    </div>
  );
};

export default App;
