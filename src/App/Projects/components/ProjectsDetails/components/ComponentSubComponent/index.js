import React from "react";
import Proptypes from 'prop-types';
import { Table } from "antd";
import "./styles.css";

const ComponentSubComponent = ({components}) => {

  const dataSource = components.map(
    component =>  component.sub_components.map(
      ({id, name}) => ({ key: id, sub_component: name, component: component.name }))).flat();
    

      //Merge array cells
 const createNewArr=(data)=>{
    return data.reduce((result, item) => {
    //First, take the name field as a new array result
        if (result.indexOf(item.component) < 0) {
            result.push(item.component)
        }
        return result
    }, []).reduce((result, component) => {
    //Take the data with the same name as a new array, and add a new field * * rowSpan inside it**
      const children = data.filter(item => item.component === component);
      result = result.concat(
        children.map((item, index) => ({
          ...item,
          rowSpan: index === 0 ? children.length : 0,//Add the first row of data to the rowSpan field
        }))
      )
      return result;
    }, [])
  }

  const columns = [
    {
      title: 'Components',
      dataIndex: 'component',
      key: 'component',
      render(_, row) {
          return {
            children: row.component,
            props: {
              rowSpan: row.rowSpan,
            }
          }
        },
    
    },
    {
        title: 'Sub Components',
        dataIndex: `sub_component`,
        key: 2,  
    }
]


    return (
        <section className="project_components">
            <h4>Projects Components</h4>
            <Table columns={columns} dataSource={createNewArr(dataSource)} pagination={false} bordered />
        </section>

    );
};


ComponentSubComponent.propTypes = {
  components: Proptypes.array.isRequired
}
export default ComponentSubComponent;
