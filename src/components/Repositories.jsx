import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchUserRepos, searchRepos } from "../actions/app";
import { Row, Col, message } from "antd";
import RepoListItem from "./RepoListItem";
import RepositoriesHeader from "./RepositoriesHeader";

class Repostiories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltered: false,
      searchText: null,
    };
  }
  handleSearch = (value) => {
    this.props.searchRepos(value);
    if (value !== "") {
      this.setState({
        isFiltered: true,
        searchText: value,
      });
    } else
      this.setState({
        isFiltered: false,
        searchText: null,
      });
  };
  componentDidMount() {
    const username = this.props.match.params.username;
    const { fetchUserRepos } = this.props;
    if (username) {
      fetchUserRepos(username);
    }
  }
  render() {
    const { isFiltered, searchText } = this.state;
    const { userRepoList } = this.props;
    const repoListUI =
      userRepoList.filtered &&
      userRepoList.filtered.map((repo) => (
        <RepoListItem key={repo.id} {...repo} />
      ));
    return (
      <Fragment>
        <RepositoriesHeader onSearch={this.handleSearch} />
        {isFiltered && (
          <div className="search-header">
            <strong>{userRepoList.filtered.length}</strong>{" "}
            {userRepoList.filtered.length > 1 ||
            userRepoList.filtered.length === 0
              ? "results"
              : "result"}{" "}
            for repositories matching <strong>{searchText}</strong>
          </div>
        )}
        <div>{this.props.userInfo && this.props.userInfo.login}</div>
        <Row>
          <Col lg={24}>{repoListUI}</Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  userRepoList: state.app.userRepoList,
});
export default withRouter(
  connect(mapStateToProps, {
    fetchUserRepos: fetchUserRepos,
    searchRepos: searchRepos,
  })(Repostiories)
);
