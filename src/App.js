import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import { GithubFilled, LogoutOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Index from "./routes/Index";
import Loader from "./components/Loader";
import { logOut } from "./actions/app";
import "./custom.scss";

const { Header, Content } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { is_fetching, userInfo, logOut } = this.props;
    console.log(userInfo);
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
              <img src={userInfo && userInfo.avatar_url} />
              {/* <LogoutOutlined
                title="Logout"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  logOut();
                }}
              /> */}
            </div>
          </Header>
          <Content style={{ margin: 16 }}>
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/:username" component={Home} />
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

export default connect(mapStateToProps, { logOut: logOut })(App);
