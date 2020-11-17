import React from 'react';
import { resourceOperations } from '../duck';

class HumanResources extends React.Component {
    componentDidMount(){
      resourceOperations.getProjectsEpic()
    }
    render(){
      return (
        <h1>hello testing observable</h1>
      )
    }
}
export default HumanResources;
