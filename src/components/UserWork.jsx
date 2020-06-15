import React, { Component, Fragment } from "react";
import { Tabs, Tag } from "antd";
import Repositories from "../components/Repositories";

const { TabPane } = Tabs;

class UserWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "repositories",
    };
  }
  handleTabChange = (tabName) => {
    this.setState({
      activeKey: tabName,
    });
  };
  render() {
    return (
      <Tabs activeKey={this.state.activeKey} onChange={this.handleTabChange}>
        <TabPane tab="Overview" key="overview">
          &amp; here will come the content of this tab.
        </TabPane>
        <TabPane
          key="repositories"
          tab={
            <div>
              Repositories <Tag color="blue">{this.props.repocount}</Tag>
            </div>
          }
        >
          <Repositories />
        </TabPane>
        <TabPane
          key="projects"
          tab={
            <div>
              Projects <Tag>0</Tag>
            </div>
          }
        >
          &amp; here will come the content of this tab.
        </TabPane>
        <TabPane
          key="packages"
          tab={
            <div>
              Packages <Tag>0</Tag>
            </div>
          }
        >
          &amp; here will come the content of this tab.
        </TabPane>
        <TabPane
          key="starts"
          tab={
            <div>
              Stars <Tag>0</Tag>
            </div>
          }
        >
          &amp; here will come the content of this tab.
        </TabPane>
        <TabPane
          key="followers"
          tab={
            <div>
              Followers <Tag>0</Tag>
            </div>
          }
        >
          &amp; here will come the content of this tab.
        </TabPane>
        <TabPane
          key="following"
          tab={
            <div>
              Following <Tag>0</Tag>
            </div>
          }
        >
          &amp; here will come the content of this tab.
        </TabPane>
      </Tabs>
    );
  }
}

export default UserWork;
