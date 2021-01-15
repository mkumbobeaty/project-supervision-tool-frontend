
import React, { Component } from "react";
import Proptypes from 'prop-types';
import { Steps } from 'antd';
import { connect } from "react-redux";
import BasicSubProjectDetailsForm from "./BasicSubProjectDetailsForm";
import MoreSubProjectDetails from "./MoreSubProjectDetailsForm";
import {projectActions, projectSelectors} from "../../duck";


const { Step } = Steps;

class SubProjectForm extends Component {
  state = {
    current: 0
  }

  static propTypes = {
    projects: Proptypes.array.isRequired,
    getProjects: Proptypes.func.isRequired
  }

  componentDidMount() {
    this.props.getProjects();
  }

  onChange = current => {
    this.setState({ current });
    console.log(current)
  };

  next = () => {
    this.setState({ current: this.state.current + 1 })
    this.onChange(this.state.current)
  };

  prev = () => {
    this.setState({ current: this.state.current - 1 });
    this.onChange(this.state.current - 1)

  };

  getProjectFormValue = (values) => {
    localStorage.setItem("project_data", JSON.stringify(values));
    this.next()
  }

  handleConfirmButton = () => {
    const {  handleAfterSubmit, getProjects } = this.props;
    handleAfterSubmit();
    getProjects()
  }

  render() {
    const { current } = this.state
    const { projects } = this.props

    const steps = [
      {
        title: 'Step 1',
        content: <BasicSubProjectDetailsForm projects={projects} next={this.next}/>
      },
      {
        title: 'Step 2',
        content: <MoreSubProjectDetails />

      },

    ];
    return (
        <>
          <Steps current={current} key={steps.map(title => title)} onChange={this.onChange}>
            {steps.map(item => (
                <Step title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
        </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: projectSelectors.getProjectsSelector(state),
  };
};

const mapDispatchToProps = {
  getProjects: projectActions.getProjectsStart
}

export default connect(mapStateToProps, mapDispatchToProps)(SubProjectForm);
