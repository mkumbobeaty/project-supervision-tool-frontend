import { Modal, Col, Drawer, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { isoDateToHumanReadableDate } from '../../../Util';
import Topbar from "../../components/Topbar";
import HumanResourcesList from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { appOperations } from "../../duck/";
import { resourceOperations } from "../duck";
import HumanResourceForm from "./Form";
import "./styles.css";

/* constants */
const TypeSpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 4, xs: 6 };
const partnerSpan = { xxl: 3, xl: 3, lg: 3, md: 5, sm: 6, xs: 7 };
const numberSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const descriptionSpan = { xxl: 6, xl: 7, lg: 7, md: 8, sm: 10, xs: 11 };
const locationSpan = { xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const startDateSpan = { xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0 };
const endDateSpan = { xxl: 2, xl: 2, lg: 3, md: 3, sm: 4, xs: 0 };

const headerLayout = [
  { ...TypeSpan, header: "Type" },
  { ...descriptionSpan, header: "Description" },
  { ...partnerSpan, header: "Implementing Partner" },
  { ...numberSpan, header: "Number" },
  { ...startDateSpan, header: "Start Date" },
  { ...endDateSpan, header: "End Date" },
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
    const { getHumanResources, getItems, getAgencies, getLocations } = this.props;
    getHumanResources();
    getItems();
    getAgencies();
    getLocations();
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
  };

  /**
   * @function
   * @name closeHumanResourceForm
   * @description close Event Human Resources form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  closeHumanResourceForm = () => {
    this.setState({ isEditForm: false, visible: false });
    const {closeHumanResourceForm} = this.props;
    closeHumanResourceForm()
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
      items,
      agencies,
      locations,
      loading,
      page,
      showForm,
      searchQuery,
      createHumanResource,
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
              <Col {...TypeSpan}>{item.item.name ? item.item.name : "All"}</Col>
              <Col {...descriptionSpan}>{item.item.description}</Col>
              <Col {...partnerSpan}>{item.agency.name}</Col>
              <Col {...numberSpan}>{item.quantity}</Col>
              <Col {...startDateSpan}>{isoDateToHumanReadableDate(item.start_date)}</Col>
              <Col {...endDateSpan}>{isoDateToHumanReadableDate(item.end_date)}</Col>
              <Col {...locationSpan}>{item.location.name}</Col>
              {/* eslint-enable react/jsx-props-no-spreading */}
            </ListItem>
          )}
        />
        {/* end list */}

        {/* filter modal */}
        <Modal
          title="Filter Event Human Resources"
          visible={showFilters}
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
          onCancel={this.closeHumanResourceForm}
          destroyOnClose
          maskClosable={false}
          afterClose={this.handleAfterCloseForm}
          bodyStyle={{ paddingBottom: 80 }}
        >
           <HumanResourceForm
            posting={false}
            items={items}
            agencies={agencies}
            locations={locations}
            isEditForm={false}
            HumanResources={HumanResources}
            createHumanResource={createHumanResource}
            onCancel={this.closeHumanResourceForm}
          />
        </Drawer>
        {/* end create/edit form modal */}
      </>
    );
  }
}

HumanResources.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  agencies: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  posting: PropTypes.bool.isRequired,
  getItems: PropTypes.func.isRequired,
  getAgencies: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  createHumanResource: PropTypes.func.isRequired,
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
  getItems: () => {},
  getAgencies: () => {},
  getLocations: () => {},
  createHumanResource: () => {},
  items: [],
  agencies: [],
  locations: []
};

const mapStateToProps = (state) => {
  return {
    HumanResources: state.humanResourcesReducer.data
      ? state.humanResourcesReducer.data
      : [],
    items: state.resources?.items?.data,
    agencies: state.resources?.agencies?.data,
    locations: state.resources?.locations?.data,
    total: state.humanResourcesReducer.total,
    page: state.humanResourcesReducer.page,
    showForm:state.humanResourcesReducer.showForm
  };
};

const mapDispatchToProps = (dispatch) => ({
  getHumanResources: bindActionCreators(appOperations.getHumanResources, dispatch),
  getItems: bindActionCreators(resourceOperations.getItems, dispatch),
  getAgencies: bindActionCreators(resourceOperations.getAgencies, dispatch),
  getLocations: bindActionCreators(resourceOperations.getLocations, dispatch),
  createHumanResource: bindActionCreators(resourceOperations.createHumanResource, dispatch),
  openHumanResourceForm: bindActionCreators(appOperations.openResourceForm, dispatch),
  closeHumanResourceForm: bindActionCreators(appOperations.closeResourceForm, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(HumanResources);
