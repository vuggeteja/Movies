import Navbar from "./components/navBar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import { ToastContainer } from "react-toastify";
import React, { Component } from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./components/notFound";
import Movieform from "./components/movieform";
import Regform from "./components/registrationform";
import Loginformd from "./components/common/loginformd";
import "react-toastify/dist/ReactToastify.css";
// import Rough from "./components/rough";
// import Rough1 from "./components/rough1";
import Rentals from "./components/rentals";
import Profile from "./components/common/profile";
import Logout from "./components/common/logout";
import auth from "./services/authService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar user={user} />
        {/* <Switch> */}
        <Routes>
          <Route
            path="/movies"
            render={(props) => <Movies {...props} user={user} />}
          />
          <Route path="/loginformd" element={<Loginformd />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/rough" element={<Rough />} />
            <Route path="/rough1" element={<Rough1 />} /> */}
          <Route
            path="/movies/:id"
            render={(props) => {
              if (!user) return <Route path="*" element={<Loginformd />} />;
              return <Movieform {...props} />;
            }}
          />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/registrationform" element={<Regform />} />
          <Route path="/notFound" element={<NotFound />} />
          {/* <Route path="/" element={<Navigate exact to="/movies" />} /> */}
          <Route path="/" exact element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </Switch> */}
      </React.Fragment>
    );
  }
}

export default App;
