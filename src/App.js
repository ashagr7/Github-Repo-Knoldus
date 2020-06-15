import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import { GithubFilled, LogoutOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./routes/Home";
import Index from "./routes/Index";
import Loader from "./components/Loader";
import { logOut, showLoader, hideLoader } from "./actions/app";
import "./custom.scss";

const { Header, Content } = Layout;
class App extends React.Component {
  render() {
    const {
      is_fetching,
      userInfo,
      logOut,
      showLoader,
      hideLoader,
    } = this.props;
    return (
      <Router>
        <Layout>
          {is_fetching && <Loader />}
          <Header className="app-header">
            <div className="logo">
              <GithubFilled style={{ fontSize: 30, color: "#FFF" }} />
              {userInfo && <span className="login">/ {userInfo.login}</span>}
            </div>
            <div className="user">
              {userInfo && (
                <React.Fragment>
                  <img src={userInfo.avatar_url} alt={userInfo.login} />
                  <LogoutOutlined
                    title="Logout"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      showLoader();
                      setTimeout(() => {
                        logOut();
                        hideLoader();
                      }, 1000);
                    }}
                  />
                </React.Fragment>
              )}
            </div>
          </Header>
          <Content style={{ margin: 16 }}>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => {
                  return userInfo ? (
                    <Redirect to={{ pathname: `/${userInfo.login}` }} />
                  ) : (
                    <Index {...props} />
                  );
                }}
              />
              <Route
                path="/:username"
                render={(props) => {
                  return userInfo ? (
                    <Home {...props} />
                  ) : (
                    <Redirect to={{ pathname: "/" }} />
                  );
                }}
              />
            </Switch>
          </Content>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.app.userInfo,
  is_fetching: state.app.is_fetching,
});

export default connect(mapStateToProps, {
  logOut: logOut,
  showLoader: showLoader,
  hideLoader: hideLoader,
})(App);
