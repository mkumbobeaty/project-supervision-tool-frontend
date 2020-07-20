import { Modal, Col, Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { moment } from "moment";
import { isoDateToHumanReadableDate } from "../../../Util";
import Topbar from "../../components/Topbar";
import HumanResourcesList from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resourceOperations } from "../duck";
import HumanResourceForm from "./Form";
import "./styles.css";
import { Link } from "react-router-dom";

/* constants */
const TypeSpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 4, xs: 6 };
const partnerSpan = { xxl: 3, xl: 3, lg: 3, md: 5, sm: 6, xs: 7 };
const numberSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const descriptionSpan = { xxl: 4, xl: 5, lg: 7, md: 8, sm: 10, xs: 11 };
const locationSpan = { xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const levelSpan = { xxl: 2, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const startDateSpan = { xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0 };
const endDateSpan = { xxl: 2, xl: 2, lg: 3, md: 3, sm: 4, xs: 0 };

const headerLayout = [
  { ...TypeSpan, header: "Type" },
  { ...descriptionSpan, header: "Description" },
  { ...numberSpan, header: "Number" },
  { ...partnerSpan, header: "Implementing Partner" },
  { ...startDateSpan, header: "Start Date" },
  { ...endDateSpan, header: "End Date" },
  { ...locationSpan, header: "Location" },
  { ...levelSpan, header: "Level" },
];

const { confirm } = Modal;

/**
 * @class
 * @name HumanResources
 * @description Render actions list which have search box, actions and Human Resources list
 * @version 0.1.0
 * @since 0.1.0
 */
class HumanResources extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    showFilters: false,
    showShare: false,
    isEditForm: false,
    visible: false,
  };

  componentDidMount() {
    const {
      getHumanResources,
      getHumanResource,
      getItems,
      getAgencies,
      getLocations,
    } = this.props;
    getHumanResources();
    getItems();
    getAgencies();
    getLocations();
  }

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
   * @description Open Human Resources form
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
   * @description close Human Resources form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  closeHumanResourceForm = () => {
    this.setState({ isEditForm: false, visible: false });
    const { closeHumanResourceForm, selectHumanResource } = this.props;
    selectHumanResource(null);
    closeHumanResourceForm();
  };

  /**
   * @function
   * @name searchHumanResources
   * @description Search Human Resources List based on supplied filter word
   *
   * @param {object} humanResource - instance
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  searchHumanResources = (humanResource) => {};

  /**
   * @function
   * @name handleEdit
   * @description Handle on Edit action for list item
   *
   * @param {object} humanResource Action Catalogue to be edited
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleEdit = (humanResource) => {
    const { selectHumanResource, openHumanResourceForm } = this.props;

    selectHumanResource(humanResource);
    this.setState({ isEditForm: true });
    openHumanResourceForm();
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
    const { selectHumanResource } = this.props;
    selectHumanResource(null);
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
  };

  paginateHumanResources = (page) => {
    const { getHumanResources } = this.props;
    getHumanResources(page);
  };

  /**
   * @function
   * @name showArchiveConfirm
   * @description show confirm modal before archiving a Human Resource
   * @param {object} item Resource item to be archived
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  showArchiveConfirm = (item) => {
    const { deleteHumanResource } = this.props;
    confirm({
      title: `Are you sure you want to archive this record ?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteHumanResource(item.id);
      },
    });
  };

  render() {
    const {
      HumanResources,
      items,
      selected,
      agencies,
      locations,
      loading,
      page,
      showForm,
      searchQuery,
      createHumanResource,
      updateHumanResource,
      total,
      posting,
    } = this.props;
    const { isEditForm } = this.state;
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
              <Col {...TypeSpan} className="humanResourceEllipse">
                {" "}
                <Link
                  to={{
                    pathname: `/app/resources/humanresources/${item.id}`,
                  }}
                >
                  {item.hr_type.name ? item.hr_type.name : "All"}
                </Link>
              </Col>
              <Col
                {...descriptionSpan}
                className="humanResourceEllipse"
                title={item.description}
              >
                {item.description}
              </Col>
              <Col {...numberSpan}>{item.quantity}</Col>
              <Col {...partnerSpan} className="humanResourceEllipse">
                {item.implementing_partners.map((partner, index) => {return (index ? ', ' : '') + partner.name}
              )}
              </Col>

              <Col {...startDateSpan}>
                {isoDateToHumanReadableDate(item.start_date)}
              </Col>
              <Col {...endDateSpan}>
                {isoDateToHumanReadableDate(item.end_date)}
              </Col>
              <Col {...locationSpan}>{item.location.name}</Col>
              <Col {...levelSpan}>{item.location.level}</Col>
              {/* eslint-enable react/jsx-props-no-spreading */}
            </ListItem>
          )}
        />
        {/* end list */}

        <Drawer
          title={
            isEditForm ? "Edit Human Resources" : "Add New Human Resources"
          }
          width={720}
          visible={showForm}
          onCancel={this.closeHumanResourceForm}
          destroyOnClose={true}
          maskClosable={false}
          closable={false}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <HumanResourceForm
            posting={posting}
            items={items}
            selected={selected}
            agencies={agencies}
            locations={locations}
            isEditForm={isEditForm}
            HumanResources={HumanResources}
            handleAfterCloseForm={this.handleAfterCloseForm}
            createHumanResource={createHumanResource}
            updateHumanResource={updateHumanResource}
            onCancel={this.closeHumanResourceForm}
          />
        </Drawer>
        {/* end create/edit form modal */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    HumanResources: state.resources.humanResources.data
      ? state.resources.humanResources.data
      : [],
    items: state.resources?.items?.data,
    agencies: state.resources?.agencies?.data?.data,
    locations: state.resources?.locations?.data?.data,
    total: state.resources.humanResources.total,
    page: state.resources.humanResources.page,
    loading: state.resources.humanResources.loading,
    posting: state.resources.humanResources.posting,
    showForm: state.resources.humanResources.showForm,
    selected: state.resources?.selectedHumanResource,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getHumanResources: bindActionCreators(
    resourceOperations.getHumanResources,
    dispatch
  ),
  getItems: bindActionCreators(resourceOperations.getItems, dispatch),
  getAgencies: bindActionCreators(resourceOperations.getAgencies, dispatch),
  getLocations: bindActionCreators(resourceOperations.getLocations, dispatch),
  createHumanResource: bindActionCreators(
    resourceOperations.createHumanResource,
    dispatch
  ),
  deleteHumanResource: bindActionCreators(
    resourceOperations.deleteHumanResource,
    dispatch
  ),
  updateHumanResource: bindActionCreators(
    resourceOperations.updateHumanResource,
    dispatch
  ),
  openHumanResourceForm: bindActionCreators(
    resourceOperations.openResourceForm,
    dispatch
  ),
  selectHumanResource: bindActionCreators(
    resourceOperations.selectHumanResource,
    dispatch
  ),
  closeHumanResourceForm: bindActionCreators(
    resourceOperations.closeResourceForm,
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(HumanResources);

HumanResources.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  agencies: PropTypes.array.isRequired,
  selected: PropTypes.object,
  locations: PropTypes.array.isRequired,
  posting: PropTypes.bool.isRequired,
  getItems: PropTypes.func.isRequired,
  getAgencies: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  createHumanResource: PropTypes.func.isRequired,
  updateHumanResource: PropTypes.func.isRequired,
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
  updateHumanResource: () => {},
  items: [],
  agencies: [],
  locations: [],
  selected: {},
};
