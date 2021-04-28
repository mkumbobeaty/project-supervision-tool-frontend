import React from 'react';
import { Tree } from 'antd';

const MultlevelFilter = ({ items }) => {

  const data = items.map(({ title, id, children }) => {
    return (
      {
        'title': title,
        "key": id,
        'children': children.map(({ name, id, }) => ({ 'title': name, 'key': `${id}-0` }))
      }
    )
  })

  return (
    data.length > 0 ? <Tree treeData={data} checkable /> : <h4>No data Available</h4>
  );
};

export default MultlevelFilter