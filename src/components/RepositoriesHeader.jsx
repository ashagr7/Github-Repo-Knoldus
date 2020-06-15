import React from "react";
import { Input, Button, Select } from "antd";

const RepositoriesHeader = (props) => {
  const { onSearch } = props;
  const { Option } = Select;
  return (
    <div className="repositories-header">
      <div>
        <Input
          placeholder="Find a repository..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div>
        <Select
          name="type"
          defaultValue="all"
          onChange={(e) => console.log(e)}
        >
          <Option value="all">All</Option>
          <Option value="public">Public</Option>>
          <Option value="private">Private</Option>
        </Select>
      </div>
      <div>
        <Button type="primary">New Repo</Button>
      </div>
    </div>
  );
};

export default RepositoriesHeader;
