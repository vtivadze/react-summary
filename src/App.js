import { Route, Switch } from "react-router-dom";

import AllMeetupPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return <div>
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
