import { Modal, Col, Drawer } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { moment } from 'moment';
import { isoDateToHumanReadableDate } from '../../../Util';
import Topbar from "../../components/Topbar";
import InitiativesList from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resourceOperations } from "../duck";
import InitiativeForm from "./Form";
import "./styles.css";


/* constants */
const TitleSpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 4, xs: 6 };
const partnerSpan = { xxl: 3, xl: 3, lg: 3, md: 5, sm: 6, xs: 7 };
const costSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const actorTypeSpan = { xxl: 4, xl: 4, lg: 4, md: 5, sm: 6, xs: 11 };
const locationSpan = { xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const startDateSpan = { xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0 };
const endDateSpan = { xxl: 2, xl: 2, lg: 3, md: 3, sm: 4, xs: 0 };
const focalPersonSpan = { xxl: 2, xl: 3, lg: 3, md: 3, sm: 4, xs: 0 };


const headerLayout = [
  { ...TitleSpan, header: "Title" },
  { ...actorTypeSpan, header: "Actor Type" },
  { ...partnerSpan, header: "Implementing Partner" },
  { ...startDateSpan, header: "Start Date" },
  { ...endDateSpan, header: "End Date" },
  { ...costSpan, header: "Cost" },
  { ...locationSpan, header: "Location" },
  { ...focalPersonSpan, header: "focal Person" },

];

const { confirm } = Modal;

/**
 * @class
 * @name Initiative
 * @description Render actions list which have search box, actions and Event Initiative list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class Initiative extends Component {
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
    const { getInitiatives, getItems, getAgencies, getLocations } = this.props;
    getInitiatives();
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
   * @name openInitiativeForm
   * @description Open Event Initiative form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  openInitiativeForm = () => {
    const { openInitiativeForm } = this.props;
    openInitiativeForm();
  };

  /**
   * @function
   * @name closeInitiativeForm
   * @description close Event Initiative form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  closeInitiativeForm = () => {
    this.setState({ isEditForm: false, visible: false });
    const { closeInitiativeForm } = this.props;
    closeInitiativeForm()
  };

  /**
   * @function
   * @name searchInitiative
   * @description Search Event Initiative List based on supplied filter word
   *
   * @param {object} event - Event instance
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  searchInitiative = (event) => { };

  /**
   * @function
   * @name handleEdit
   * @description Handle on Edit action for list item
   *
   * @param {object} Initiative Event Action Catalogue to be edited
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleEdit = (Initiative) => {
    const { selectInitiative, openInitiativeForm } = this.props;

    selectInitiative(Initiative);
    this.setState({ isEditForm: true });
    openInitiativeForm();
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
   * @name handleRefreshInitiative
   * @description Handle list refresh action
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleRefreshInitiative = () => {
    window.location.reload();
    // refreshInitiatives(
    //   () => {
    //     notifySuccess("Event Initiative refreshed successfully");
    //   },
    //   () => {
    //     notifyError(
    //       "An error occurred while refreshing Event Initiative please contact system administrator"
    //     );
    //   }
    // );
  };

  paginateInitiative = (page) => {
    const { getInitiatives } = this.props;
    getInitiatives(page);
    console.log("pagination", page);
  };

  /**
   * @function
   * @name showArchiveConfirm
   * @description show confirm modal before archiving a Event Initiative
   * @param {object} item Resource item to be archived
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  showArchiveConfirm = (item) => {
    const { deleteInitiative } = this.props;
    confirm({
      title: `Are you sure you want to archive this record ?`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteInitiative(
          item.id
        );
      },
    });
  };

  /**
 * converts ISO date string to human readable
 * date and time
 *
 * @function
 * @name isoDateToHumanReadableDate
 *
 * @param {string} isoFormattDate
 *
 * @returns {string} human readable date
 * @version 0.1.0
 * @since 0.1.0
 */
  isoDateToHumanReadableDate = (isoFormattDate) => {
    return moment(isoFormattDate)
      .utc()
      .format('MMMM Do YYYY');
  }

  render() {

    const {
      Initiatives,
      items,
      selected,
      agencies,
      locations,
      loading,
      page,
      showForm,
      searchQuery,
      createInitiative,
      updateInitiative,
      total,
      posting
    } = this.props;
    const { showFilters, isEditForm } = this.state;
    return (
      <>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for Initiative here ...",
            onChange: this.searchInitiative,
            value: searchQuery,
          }}
          actions={[
            {
              label: "New Initiative",
              icon: <PlusOutlined />,
              size: "large",
              title: "Add New Initiative",
              onClick: this.openInitiativeForm,
            },
          ]}
        />
        {/* end Topbar */}

        {/* list starts */}
        <InitiativesList
          itemName="Initiatives"
          items={Initiatives}
          page={page}
          itemCount={total}
          loading={loading}
          onFilter={this.openFiltersModal}
          onRefresh={this.handleRefreshInitiative}
          onPaginate={(nextPage) => {
            this.paginateInitiative(nextPage);
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
                name={item.title}
                item={item}
                isSelected={isSelected}
                onSelectItem={onSelectItem}
                onDeselectItem={onDeselectItem}
                renderActions={() => (
                  <ListItemActions
                    edit={{
                      name: "Edit Initiative",
                      title: "Update Initiative Details",
                      onClick: () => this.handleEdit(item),
                    }}
                    archive={{
                      name: "Archive Initiative",
                      title:
                        "Remove Initiative from list of active Initiative",
                      onClick: () => this.showArchiveConfirm(item),
                    }}
                  />
                )}
              >
                {/* eslint-disable react/jsx-props-no-spreading */}
                <Col {...TitleSpan}>{item.title ? item.title : "All"}</Col>
                <Col {...actorTypeSpan}>{item.actor_type.name}</Col>
                <Col {...partnerSpan}>{item.implementing_partners.map((partner, index) => {
                  return (index ? ", " : "") + partner.name;
                })}</Col>
                <Col {...startDateSpan}>{isoDateToHumanReadableDate(item.start_date)}</Col>
                <Col {...endDateSpan}>{isoDateToHumanReadableDate(item.end_date)}</Col>
                <Col {...costSpan}>{item.funding_organisations.map((partner, index) => {
                  return (index ? ", " : "") + partner.name;
                })}</Col>
                <Col {...locationSpan}>{item.location.level}</Col>
                <Col {...focalPersonSpan}></Col>

                {/* eslint-enable react/jsx-props-no-spreading */}
              </ListItem>
            )}
        />
        {/* end list */}

        {/* filter modal */}
        <Modal
          title="Filter Event Initiative"
          visible={showFilters}
          onCancel={this.closeFiltersModal}
          footer={null}
          destroyOnClose
          maskClosable={false}
          className="FormModal"
        >
          {/* <InitiativesFilters
            onCancel={this.closeFiltersModal}
            cached={cached}
            onCache={this.handleOnCachedValues}
            onClearCache={this.handleClearCachedValues}
          /> */}
        </Modal>
        {/* end filter modal */}

        <Drawer
          title={
            isEditForm ? <span class="text">Edit Initiative</span> : <span class="text">Add New Initiative</span>
          }
          width={500}
          visible={showForm}
          onCancel={this.closeInitiativeForm}
          destroyOnClose
          maskClosable={false}
          afterClose={this.handleAfterCloseForm}
          bodyStyle={{ paddingBottom: 80 }}
          headerStyle={{ textAlign: 'center', color: "#959595" }}

        >
          <InitiativeForm
            posting={posting}
            items={items}
            selected={selected}
            agencies={agencies}
            locations={locations}
            isEditForm={isEditForm}
            Initiatives={Initiatives}
            createInitiative={createInitiative}
            updateInitiative={updateInitiative}
            onCancel={this.closeInitiativeForm}
          />
        </Drawer>
        {/* end create/edit form modal */}
      </>
    );
  }
}

Initiative.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  agencies: PropTypes.array.isRequired,
  selected: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  posting: PropTypes.bool.isRequired,
  getItems: PropTypes.func.isRequired,
  getAgencies: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  createInitiative: PropTypes.func.isRequired,
  updateInitiative: PropTypes.func.isRequired,
  Initiative: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
  page: PropTypes.number.isRequired,
  showForm: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string,
  total: PropTypes.number.isRequired,
};

Initiative.defaultProps = {
  Initiatives: null,
  searchQuery: undefined,
  getItems: () => { },
  getAgencies: () => { },
  getLocations: () => { },
  createInitiative: () => { },
  updateInitiative: () => { },
  items: [],
  agencies: [],
  locations: [],
  selected: null,
};

const mapStateToProps = (state) => {
  return {
    Initiatives: state.resources.initiative.data
      ? state.resources.initiative.data
      : [],
    items: state.resources?.items?.data,
    agencies: state.resources?.agencies?.data,
    locations: state.resources?.locations?.data,
    total: state.resources.initiative.total,
    page: state.resources.initiative.page,
    loading: state.resources.initiative.loading,
    posting: state.resources.initiative.posting,
    showForm: state.resources.initiative.showForm,
    selected: state.resources?.selectedInitiative,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getInitiatives: bindActionCreators(resourceOperations.getInitiatives, dispatch),
  getItems: bindActionCreators(resourceOperations.getItems, dispatch),
  getAgencies: bindActionCreators(resourceOperations.getAgencies, dispatch),
  createInitiative: bindActionCreators(resourceOperations.createInitiative, dispatch),
  deleteInitiative: bindActionCreators(resourceOperations.deleteInitiative, dispatch),
  updateInitiative: bindActionCreators(resourceOperations.updateInitiative, dispatch),
  openResourceForm: bindActionCreators(resourceOperations.openResourceForm, dispatch),
  openInitiativeForm: bindActionCreators(resourceOperations.openInitiativeForm, dispatch),
  selectInitiative: bindActionCreators(resourceOperations.selectHumanResource, dispatch),
  closeResourceForm: bindActionCreators(resourceOperations.closeResourceForm, dispatch),
  closeInitiativeForm: bindActionCreators(resourceOperations.closeInitiativeForm, dispatch),


});
export default connect(mapStateToProps, mapDispatchToProps)(Initiative);
