import { PlusOutlined } from '@ant-design/icons';
import React from 'react'
import Topbar from '../components/Topbar';

function Roles() {
  return (
    <div>
      {/* Topbar */}
      <Topbar
          search={{
            size: "large",
            placeholder: "Search for roles here ...",
            // onChange: this.searchInitiative,
            // onSearch: this.handleSearch,
            // value: searchQuery,
          }}
          actions={[
            {
              label: "New Roles",
              icon: <PlusOutlined />,
              size: "large",
              title: "Add New Role",
              // onClick: this.openFormModal,
            },
          ]}
        />
        {/* end Topbar */}
    </div>
  )
}

export default Roles;
