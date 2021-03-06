import { Route, Switch } from "react-router-dom";
import AddTaskPage from "../pages/AddTaskPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ListPage from "../pages/ListPage";
const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/add" component={AddTaskPage} />
      <Route path="/list" component={ListPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Page;
