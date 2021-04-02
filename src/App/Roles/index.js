import { PlusOutlined } from '@ant-design/icons';
import { Col } from "antd";
import React from 'react'
import Topbar from '../components/Topbar';
import RolesList from '../components/List';
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";


/* constants */
const userNameSpan = { xxl: 4, xl: 6, lg: 6, md: 8, sm: 10, xs: 11 };

const headerLayout = [
  // { ...userIdSpan, header: "user ID" },
  { ...userNameSpan, header: "Name" }
];

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
      {/* list starts */}
      <RolesList
        itemName="Roles"
        items={[]}
        page={1}
        loading={false}
        itemCount={10}
        onRefresh={() => {}}
        onPaginate={(nextPage) => {
          // paginateRole({ page: nextPage });
        }}
        headerLayout={headerLayout}
        renderListItem={({
          item,
          isSelected,
          onSelectItem,
          onDeselectItem,
        }) => (
          <ListItem
            key={item.id} // eslint-disable-line
            name={item.first_name}
            item={item}
            isSelected={isSelected}
            onSelectItem={onSelectItem}
            onDeselectItem={onDeselectItem}
            renderActions={() => (
              <ListItemActions
                edit={{
                  name: "Edit user",
                  title: "Update user details",
                  onClick: () => this.handleEdit(item),
                }}
                archive={{
                  name: "Archive user",
                  title:
                    "Remove user from list of active Roles",
                  onClick: () => this.showArchiveConfirm(item),
                }}
              />
            )}
          >
           
            <Col
              {...userNameSpan}
              className="contentEllipse"
              title={item.description}
            >
              {item.first_name}{" "}
              {item.middle_name}{" "}
              {item.last_name}
            </Col>
            {/* eslint-enable react/jsx-props-no-spreading */}
          </ListItem>
          // </Link>
        )
        }
      />
      {/* end list */}
    </div>
  )
}

export default Roles;
