import React from "react";
import moment from "moment";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { Button } from "antd";

const RepoListItem = (props) => {
  return (
    <div className="repo-list-item">
      <div className="left">
        <div className="name">
          <h1>
            <a>{props.name}</a>
          </h1>
        </div>
        <div className="details">
          {props.language && <span>{props.language}</span>}
          {props.stargazers_count > 0 && (
            <span>
              <StarOutlined />
              {props.stargazers_count}
            </span>
          )}
          <span>
            Updated {moment(props.updated_at).fromNow()}
            {/* {moment(props.updated_at).format("MMM DD, YYYY")} */}
          </span>
        </div>
      </div>
      <div className="right">
        {props.stargazers_count > 0 ? (
          <Button>
            <StarFilled /> <span className="text">Unstar</span>
          </Button>
        ) : (
          <Button>
            <StarOutlined /> <span className="text">Star</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default RepoListItem;
