import React, { useState } from 'react';
import { Tree } from 'antd';

const MultlevelFilter = ({ items, onCheck, onSelect, selectedKeys, checkedKeys }) => {

  const data = items.map(({ title, id, children }) => {
    return (
      {
        'title': title,
        "key": id,
        'children': children.map(({ name, id, }) => ({ 'title': name, 'key': `${id}` }))
      }
    )
  })

  return (
    data.length > 0 ? <Tree treeData={data} checkable onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys} />
      : <h4>No data Available</h4>
  );
};

export default MultlevelFilter