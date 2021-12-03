import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Details from "../pages/details/Details";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:category/:id' component={Details} />
        </Switch>
    );
}
