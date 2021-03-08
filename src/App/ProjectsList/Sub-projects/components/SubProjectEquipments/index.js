import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import Topbar from "../../../../components/Topbar";
import SubProjectEquipmentsList from "../../../../components/List";
import ListItem from "../../../../components/ListItem";
import ListItemActions from "../../../../components/ListItemActions";
import { subProjectsOperator, subProjectsSelectors } from "../../../../../redux/modules/subProjects";


/* constants */
const nameSpan = { xxl: 5, xl: 5, lg: 4, md: 4, sm: 4, xs: 0 };
const capacitySpan = { xxl: 5, xl: 5, lg: 4, md: 4, sm: 4, xs: 0 };
const contractAmountSpan = { xxl: 4, xl: 3, lg: 3, md: 3, sm: 3, xs: 10 };
const mobilizedAmountSpan = { xxl: 4, xl: 3, lg: 3, md: 3, sm: 3, xs: 10 };
// const mobilizedSpan = { xxl: 5, xl: 5, lg: 5, md: 7, sm: 0, xs: 0 };
// const quantityContractSpan = { xxl: 4, xl: 4, lg: 4, md: 5, sm: 5, xs: 10 };
const mobilizedDateSpan = { xxl: 4, xl: 3, lg: 4, md: 0, sm: 0, xs: 0 };
const remarksSPan = { xxl: 4, xl: 4, lg: 5, md: 5, sm: 10, xs: 11 };

const { confirm } = Modal;

const headerLayout = [
  { ...nameSpan, header: "Name" },
  { ...capacitySpan, header: "Capacity" },
  { ...contractAmountSpan, header: "Contract Amount" },
  { ...mobilizedAmountSpan, header: "Mobilized Amount" },
  // { ...mobilizedSpan, header: "Quantity Mobilized" },
  // { ...quantityContractSpan, header: "Quantity Per Contract" },
  { ...mobilizedDateSpan, header: "Mobilization Date" },
  { ...remarksSPan, header: "Remarks" },

];


/**
 * @class
 * @name SubProjectEquipments
 * @description Render actions list which have search box, actions and Sub subProjectEquipments list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class SubProjectEquipments extends Component {

  // componentDidMount() {
  //   const { getSubProjectEquipments } = this.props;
  //   getSubProjectEquipments()
  // }

  render() {
    const {
      subProjectEquipments,
      loading,
    } = this.props;

    return (
      <div>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for Sub project Equipments here ...",
            onChange: this.searchInitiative,
          }}
          actions={[
            {
              label: "New Sub Project Item",
              icon: <PlusOutlined />,
              size: "large",
              title: "Add New Sub-project",
              onClick: this.openSubProjectForm,
            },
          ]}
        />
        {/* end Topbar */}

        {/* list starts */}
        <SubProjectEquipmentsList
          itemName="Sub-project-equipment"
          items={subProjectEquipments}
          loading={loading}
          headerLayout={headerLayout}
          renderListItem={({
            item,
            isSelected,
            onSelectItem,
            onDeselectItem,
          }) => (
              <ListItem
                key={item.id} // eslint-disable-line
                // name={item.name}
                item={item}
                isSelected={isSelected}
                onSelectItem={onSelectItem}
                onDeselectItem={onDeselectItem}
                renderActions={() => (
                  <ListItemActions
                    edit={{
                      name: "Edit Sub Project",
                      title: "Update Sub Project Details",
                      onClick: () => this.handleEdit(item),
                    }}
                    archive={{
                      name: "Archive Sub Project Item",
                      title:
                        "Remove Sub project item from list of active sub project Equipments",
                      onClick: () => this.showArchiveConfirm(item),
                    }}
                  />
                )}
              >
                {/* eslint-disable react/jsx-props-no-spreading */}

                <Col {...nameSpan}>{item.item ? item.id : "N/A"}</Col>
                <Col {...capacitySpan}>{item.item ? item.capacity : "N/A"}</Col>
                <Col {...contractAmountSpan}>{item ? item.quantity_per_contract : "N/A"}</Col>
                <Col {...mobilizedAmountSpan}>{item ? item.quantity_mobilized : "N/A"}</Col>
                <Col {...mobilizedDateSpan}>{item ? item.mobilization_date : "N/A"}</Col>
                <Col {...remarksSPan} >{item ? item.remarks : "N/A"}</Col>
                {/* eslint-enable react/jsx-props-no-spreading */}
              </ListItem>
            )}
        />
        {/* end list */}
      </div>
    );
  }
}

SubProjectEquipments.propTypes = {
  loading: PropTypes.bool.isRequired,
  subProjectEquipments: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
};

SubProjectEquipments.defaultProps = {
  subProjectEquipments: null,
};

const mapStateToProps = (state) => {
  return {
    subProjectEquipments: subProjectsSelectors.getSubProjectEquipmentsSelector(state),
    loading: subProjectsSelectors.getSubProjectEquipmentsLoadingSelector(state)

  };
};

const mapDispatchToProps = {
  getSubProjectEquipments: subProjectsOperator.getSubProjectEquipmentsStart
};

export default connect(mapStateToProps, mapDispatchToProps)(SubProjectEquipments);


