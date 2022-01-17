import PublicPage from './PublicPage/PublicPage';
import Courses from './Courses/Courses';
import CreateCourse from './CreateCourse/CreateCourse';
import Login from './Login/Login';
import { ProvideAuth, useAuth } from '../hooks/use-auth';

import { Routes, Route, Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to='/login' />;
  }

  return children;
}

function App() {
  return (
    <ProvideAuth>
      <Routes>
        <Route path='/' element={PublicPage}>
          <Route
            path='/courses'
            element={
              <RequireAuth>
                <Courses />
              </RequireAuth>
            }
          >
            <Route path='add' element={CreateCourse} />
          </Route>
        </Route>
        <Route path='/login' element={Login} />
      </Routes>
    </ProvideAuth>
  );
}

export default App;
