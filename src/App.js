import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Index from "./routes/Index";
import Loader from "./components/Loader";
import "./custom.scss";

const { Header, Content } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { is_fetching } = this.props;
    return (
      <Layout>
        {is_fetching && <Loader />}
        <Header>SAMPLE HEADER</Header>
        <Content style={{ margin: 16 }}>
          <Router>
            <Route path="/" exact component={Index} />
            <Route path="/:username" component={Home} />
          </Router>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.app.userInfo,
  is_fetching: state.app.is_fetching,
});

export default connect(mapStateToProps)(App);
