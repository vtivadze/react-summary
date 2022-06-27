import { Route, Switch } from 'react-router-dom';

import AllMeetupPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
