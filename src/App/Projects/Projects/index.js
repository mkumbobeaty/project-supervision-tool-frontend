import React from 'react';
import { connect } from "react-redux";
import { projectOperation } from '../duck';


class Projects extends React.Component {
    componentDidMount(){
      const { fetchProjects } = this.props;
      fetchProjects()
    }
    render(){
      return (
        <h1>hello testing observable</h1>
      )
    }
}
const mapStateToProps = state => {
  return {
    // items: state.items.items
  };
};

const mapDispatchToProps = {
  fetchProjects: projectOperation.getProjectsStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);

