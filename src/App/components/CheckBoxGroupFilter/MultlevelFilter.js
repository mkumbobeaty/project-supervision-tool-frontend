import React from 'react';
import { Tree } from 'antd';

const MultlevelFilter = ({items}) => {

  const data = items.map(({title, id, children}) => {
    return (
      {
        'title': title,
        "key": id,
        'children': children.map(({ name, id, }) => ({ 'title': name, 'key':`${id}-0`}))
      }
    )
  })

  console.log(data);


  return <Tree treeData={data} checkable />;
};

export default MultlevelFilter