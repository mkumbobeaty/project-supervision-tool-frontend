import { Modal, Col, Drawer, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Topbar from "../../components/Topbar";
import HumanResourcesList from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getHumanResources, openResourceForm } from "../../common/actions";
import HumanResourceForm from "./Form";
import "./styles.css";

/* constants */
const TypeSpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 4, xs: 6 };
const numberSpan = { xxl: 5, xl: 6, lg: 5, md: 0, sm: 0, xs: 0 };
const partnerSpan = { xxl: 7, xl: 7, lg: 7, md: 9, sm: 8, xs: 12 };
const locationSpan = { xxl: 7, xl: 7, lg: 7, md: 7, sm: 8, xs: 0 };

const headerLayout = [
  { ...TypeSpan, header: "Type" },
  { ...numberSpan, header: "Number" },
  { ...partnerSpan, header: "Implementing Partner" },
  { ...locationSpan, header: "Location" },
];

const { confirm } = Modal;

/**
 * @class
 * @name HumanResources
 * @description Render actions list which have search box, actions and Event Human Resources list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class HumanResources extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    showFilters: false,
    showShare: false,
    isEditForm: false,
    notificationSubject: undefined,
    notificationBody: undefined,
    cached: null,
    visible: false,
  };

  componentDidMount() {
    const { getHumanResources } = this.props;
    getHumanResources();
  }

  /**
   * @function
   * @name handleOnCachedValues
   * @description Cached selected values for filters
   *
   * @param {object} cached values to be cached from filter
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOnCachedValues = (cached) => {
    const { cached: previousCached } = this.state;
    const values = { ...previousCached, ...cached };
    this.setState({ cached: values });
  };

  /**
   * @function
   * @name handleClearCachedValues
   * @description Clear cached values
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleClearCachedValues = () => {
    this.setState({ cached: null });
  };

  /**
   * @function
   * @name openFiltersModal
   * @description open filters modal by setting it's visible property
   * to false via state
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  openFiltersModal = () => {
    this.setState({ showFilters: true });
  };

  /**
   * @function
   * @name closeFiltersModal
   * @description Close filters modal by setting it's visible property
   * to false via state
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  closeFiltersModal = () => {
    this.setState({ showFilters: false });
  };

  /**
   * @function
   * @name openHumanResourceForm
   * @description Open Event Human Resources form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  openHumanResourceForm = () => {
    const { openHumanResourceForm } = this.props;
    openHumanResourceForm();
    console.log("clicking", openHumanResourceForm());
  };

  /**
   * @function
   * @name closeHumanResourceForm
   * @description close Event Human Resources form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  closeHumanResourcesForm = () => {
    this.setState({ isEditForm: false, visible: false });
  };

  /**
   * @function
   * @name searchHumanResources
   * @description Search Event Human Resources List based on supplied filter word
   *
   * @param {object} event - Event instance
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  searchHumanResources = (event) => {};

  /**
   * @function
   * @name handleEdit
   * @description Handle on Edit action for list item
   *
   * @param {object} HumanResources Event Action Catalogue to be edited
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleEdit = (HumanResources) => {
    this.setState({ isEditForm: true });
  };

  /**
   * @function
   * @name handleAfterCloseForm
   * @description Perform post close form cleanups
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleAfterCloseForm = () => {
    this.setState({ isEditForm: false });
  };

  /**
   * @function
   * @name handleRefreshHumanResources
   * @description Handle list refresh action
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleRefreshHumanResources = () => {
    window.location.reload();
    // refreshHumanResources(
    //   () => {
    //     notifySuccess("Event Human Resources refreshed successfully");
    //   },
    //   () => {
    //     notifyError(
    //       "An error occurred while refreshing Event Human Resources please contact system administrator"
    //     );
    //   }
    // );
  };

  paginateHumanResources = (page) => {
    const { getHumanResources } = this.props;
    getHumanResources(page);
    console.log("pagination", page);
  };

  /**
   * @function
   * @name showArchiveConfirm
   * @description show confirm modal before archiving a Event Human Resources
   * @param {object} item Resource item to be archived
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  showArchiveConfirm = (item) => {
    confirm({
      title: `Are you sure you want to archive this record ?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        // deleteHumanResources(
        //   item._id, // eslint-disable-line
        //   () => notifySuccess(" Human Resources was archived successfully"),
        //   () =>
        //     notifyError(
        //       "An error occurred while archiving Human Resources, Please contact your system Administrator"
        //     )
        // );
      },
    });
  };

  render() {
    const {
      HumanResources,
      loading,
      page,
      showForm,
      searchQuery,
      total,
    } = this.props;
    const { showFilters, isEditForm } = this.state;
    return (
      <>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for Human Resources here ...",
            onChange: this.searchHumanResources,
            value: searchQuery,
          }}
          actions={[
            {
              label: "New Human Resources",
              icon: <PlusOutlined />,
              size: "large",
              title: "Add New Human Resources",
              onClick: this.openHumanResourceForm,
            },
          ]}
        />
        {/* end Topbar */}

        {/* list starts */}
        <HumanResourcesList
          itemName="Human Resources"
          items={HumanResources}
          page={page}
          itemCount={total}
          loading={loading}
          onFilter={this.openFiltersModal}
          onRefresh={this.handleRefreshHumanResources}
          onPaginate={(nextPage) => {
            this.paginateHumanResources(nextPage);
          }}
          // generateExportUrl={"testing"}
          headerLayout={headerLayout}
          renderListItem={({
            item,
            isSelected,
            onSelectItem,
            onDeselectItem,
          }) => (
            <ListItem
              key={item.id} // eslint-disable-line
              name={item.name}
              item={item}
              isSelected={isSelected}
              onSelectItem={onSelectItem}
              onDeselectItem={onDeselectItem}
              renderActions={() => (
                <ListItemActions
                  edit={{
                    name: "Edit Human Resources",
                    title: "Update Human Resources Details",
                    onClick: () => this.handleEdit(item),
                  }}
                  archive={{
                    name: "Archive Human Resources",
                    title:
                      "Remove Human Resources from list of active Human Resources",
                    onClick: () => this.showArchiveConfirm(item),
                  }}
                />
              )}
            >
              {/* eslint-disable react/jsx-props-no-spreading */}
              <Col {...TypeSpan}>{item.name ? item.name : "All"}</Col>
              <Col {...numberSpan}>{item.year}</Col>
              <Col {...partnerSpan}>{item.pantone_value}</Col>
              <Col {...locationSpan}>{item.color}</Col>
              {/* eslint-enable react/jsx-props-no-spreading */}
            </ListItem>
          )}
        />
        {/* end list */}

        {/* filter modal */}
        <Modal
          title="Filter Event Human Resources"
          // visible={showFilters}
          onCancel={this.closeFiltersModal}
          footer={null}
          destroyOnClose
          maskClosable={false}
          className="FormModal"
        >
          {/* <HumanResourcesFilters
            onCancel={this.closeFiltersModal}
            cached={cached}
            onCache={this.handleOnCachedValues}
            onClearCache={this.handleClearCachedValues}
          /> */}
        </Modal>
        {/* end filter modal */}

        <Drawer
          title={
            isEditForm ? "Edit Human Resources" : "Add New Human Resources"
          }
          width={720}
          visible={showForm}
          onCancel={this.closeHumanResourcesForm}
          destroyOnClose
          maskClosable={false}
          afterClose={this.handleAfterCloseForm}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          {/* <HumanResourceForm
            // posting={posting}
            isEditForm={isEditForm}
            HumanResources={HumanResources}
            onCancel={this.closeHumanResourcesForm}
          /> */}
        </Drawer>
        {/* end create/edit form modal */}
      </>
    );
  }
}

HumanResources.propTypes = {
  loading: PropTypes.bool.isRequired,
  posting: PropTypes.bool.isRequired,
  HumanResources: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
  page: PropTypes.number.isRequired,
  showForm: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string,
  total: PropTypes.number.isRequired,
};

HumanResources.defaultProps = {
  HumanResources: null,
  searchQuery: undefined,
};

const mapStateToProps = (state) => {
  return {
    HumanResources: state.humanResourcesReducer.data
      ? state.humanResourcesReducer.data
      : [],
    total: state.humanResourcesReducer.total,
    page: state.humanResourcesReducer.page,
    showForm:state.humanResourcesReducer.showForm
  };
};

const mapDispatchToProps = (dispatch) => ({
  getHumanResources: bindActionCreators(getHumanResources, dispatch),
  openHumanResourceForm: bindActionCreators(openResourceForm, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(HumanResources);
