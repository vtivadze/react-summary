import { Route, Switch } from "react-router-dom";

import AllMeetupPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return <div>
    <MainNavigation />
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
  </div>;
}

export default App;
