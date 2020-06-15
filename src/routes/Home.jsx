import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { fetchUserInfo } from "../actions/app";
import UserInfo from "../components/UserInfo";
import UserWork from "../components/UserWork";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    const { userInfo, match, fetchUserInfo } = this.props;
    const username = match.params.username;
    if (!userInfo && username) {
      fetchUserInfo(username);
    }
  }

  render() {
    const { userInfo } = this.props;

    return (
      <Fragment>
        <Row gutter={16}>
          <Col lg={5} offset={1}>
            {userInfo && <UserInfo data={userInfo} />}
          </Col>
          <Col lg={16} offset={1}>
            <UserWork repocount={userInfo && userInfo.public_repos} />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.app.userInfo,
});
export default connect(mapStateToProps, {
  fetchUserInfo: fetchUserInfo,
})(Home);
