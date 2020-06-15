import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Input } from "antd";
import { fetchUserInfo } from "../actions/app";
import { SearchOutlined, GithubFilled } from "@ant-design/icons";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }
  updateValue = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };
  handleUserSearch = () => {
    const { value } = this.state;
    this.props.fetchUserInfo(value).then((data) => {
      if (data.status === 200) this.props.history.push(`/${value}`);
    });
  };
  render() {
    return (
      <Row>
        <Col lg={8} offset={8}>
          <div style={{ marginTop: "40%" }}>
            <Input
              size="large"
              prefix={<GithubFilled style={{ marginRight: 5 }} />}
              suffix={<SearchOutlined />}
              placeholder="Search github user [ &amp; Press Enter ]"
              onChange={this.updateValue}
              onPressEnter={this.handleUserSearch}
              value={this.state.value}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.app.userInfo,
});
export default connect(mapStateToProps, { fetchUserInfo: fetchUserInfo })(
  Index
);
