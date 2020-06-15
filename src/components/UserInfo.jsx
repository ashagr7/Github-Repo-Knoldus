import React, { Fragment } from "react";
import { Card, Button } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
const UserInfo = (props) => {
  const { data } = props;
  return (
    <Fragment>
      <Card
        className="user-avatar-card"
        cover={<img src={data.avatar_url} width="100%" alt="" />}
        actions={[<Button>Edit Profile</Button>]}
      >
        <Card.Meta
          title={<h1>{data.name}</h1>}
          description={<h2>{data.login}</h2>}
        />
      </Card>
      <div className="user-rest-info">
        <div>
          <EnvironmentOutlined /> {data.location}
        </div>
        {data.email && (
          <div>
            <a href={`mailto:${data.email}`}>
              <MailOutlined /> {data.email}
            </a>
          </div>
        )}
        {data.twitter_username && (
          <div>
            <a
              href={`https://twitter.com/${data.twitter_username}`}
              target="_blank"
            >
              <TwitterOutlined /> {data.twitter_username}
            </a>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default UserInfo;
