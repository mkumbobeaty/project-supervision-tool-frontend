import React from "react";
import Proptypes from 'prop-types';
import { Table } from "antd";
import "./styles.css";

const ComponentSubComponent = ({components}) => {

  const dataSource = components.map(
    component => {
        if (component.sub_components.length > 0) {
            return component.sub_components.map(
                ({id, name}) => ({sub_component: name, component: component.name }))
        }

        else {
            return [{  sub_component: 'N/A', component: component.name }]
        }

    }).flat();
    

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
    }
]


    return (
        <section className="project_components">
            <h4>Project Components</h4>
            <Table columns={columns} dataSource={createNewArr(dataSource)} pagination={false} bordered />
        </section>

    );
};


ComponentSubComponent.propTypes = {
  components: Proptypes.array.isRequired
}
export default ComponentSubComponent;
