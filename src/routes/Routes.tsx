import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Details from "../pages/details/Details";
import SearchPage from "../pages/searchPage/SearchPage";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/:category/:id" component={Details} />
            <Route path="/:keyword" component={SearchPage} />
            <Route exact path='/' component={Home} />
        </Switch>
    );
}
