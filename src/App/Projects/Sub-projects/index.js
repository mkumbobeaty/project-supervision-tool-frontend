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
import { projectOperation } from "../duck";
import InitiativeForm from "./Form";
import "./styles.css";
import {Link} from "react-router-dom";
import PreviewInitiativeOnMap from "./PreviewInitiativeOnMap";
import PreviewOnMap from "../../Map/components/PreviewOnMap";


/* constants */
const TypeSpan = { xxl: 2, xl: 2, lg: 2, md: 3, sm: 2, xs: 3 };
const partnerSpan = { xxl: 2, xl: 2, lg: 2, md: 3, sm: 4, xs: 5 };
const organisationSpan = { xxl: 2, xl: 2, lg: 2, md: 3, sm: 4, xs: 5 };
const numberSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const descriptionSpan = { xxl: 4, xl: 5, lg: 7, md: 8, sm: 10, xs: 11 };
const locationSpan = { xxl: 3, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const levelSpan = { xxl: 2, xl: 2, lg: 0, md: 0, sm: 0, xs: 0 };
const startDateSpan = { xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0 };
const endDateSpan = { xxl: 2, xl: 2, lg: 3, md: 3, sm: 4, xs: 0 };



/**
 * @function
 * @name displayLocation
 * @description display location of human resource
 * @param {object} location to be display
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const displayLocation = (location) => {
  const regionLevel = `${location?.region?.name}`;
  const districtLvel = `${location?.region?.name}, ${location?.district?.name}`;
  return location?.district ? districtLvel : regionLevel;
};

const headerLayout = [
  { ...TypeSpan, header: " Actor Type" },
  { ...descriptionSpan, header: "Initiative Type" },
  { ...numberSpan, header: "Title" },
  { ...partnerSpan, header: "Implementing Partner" },
  { ...organisationSpan, header: "Funding Organisation" },
  { ...startDateSpan, header  : "Start Date" },
  { ...endDateSpan, header: "End Date" },
  { ...locationSpan, header: "Location" },
  { ...levelSpan, header: "Focal Person" },
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
    previewOnMap: false,
    isEditForm: false,
    notificationSubject: undefined,
    notificationBody: undefined,
    cached: null,
    visible: false,
  };

  componentDidMount() {
    const { getInitiatives, getItems, getAgencies } = this.props;
    getInitiatives();
    getItems();
    getAgencies();
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
   * @version 0.1.0Initiative
   * @since 0.1.0
   */
  closeInitiativeForm = () => {
    this.setState({ isEditForm: false, visible: false });
    const { closeInitiativeForm } = this.props;
    closeInitiativeForm()
  };



  /**
   * @function
   * @name handleMapPreview
   * @description Handle map preview
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleMapPreview = (initiative) => {
    const { selectInitiative } = this.props;
    const { previewOnMap } = this.state;
    selectInitiative(initiative);
    this.setState({previewOnMap: true })
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
      regions,
      districts,
      getDistricts,
      loading,
      page,
      showForm,
      searchQuery,
      createInitiative,
      updateInitiative,
      total,
      posting
    } = this.props;
    const { showFilters, isEditForm, previewOnMap } = this.state;
    return previewOnMap ? <PreviewOnMap data={selected}/> : (
      <div>
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
          itemCount={Initiatives.length}
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
                      onMapPreview={{
                        name: 'Preview Initiative on Map',
                        title: 'Preview Initiative on Map',
                        onClick: () => this.handleMapPreview(item),
                      }}
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
                        pathname: `/app/resources/initiatives/${item.id}`,
                      }}
                  >
                    {item.actor_type.name ? item.actor_type.name : "All"}
                  </Link>
                </Col>
                <Col
                    {...descriptionSpan}
                    className="humanResourceEllipse"
                    title={item.initiative_type}
                >
                  {item.initiative_type.name}
                </Col>
                <Col {...numberSpan}>{item.title}</Col>
                <Col {...partnerSpan} className="humanResourceEllipse">
                  {item.implementing_partners.map((partner, index) => {
                    return (index ? ", " : "") + partner.name;
                  })}
                </Col>
                <Col {...organisationSpan} className="humanResourceEllipse">
                  {item.funding_organisations.map((org, index) => {
                    return (index ? ", " : "") + org.name;
                  })}
                </Col>

                <Col {...startDateSpan}>
                  {isoDateToHumanReadableDate(item.start_date)}
                </Col>
                <Col {...endDateSpan}>
                  {isoDateToHumanReadableDate(item.end_date)}
                </Col>
                <Col {...locationSpan}>{displayLocation(item.location)}</Col>
                <Col {...levelSpan}>{item.focal_person.first_name } { item.focal_person.last_name }</Col>
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
            regions={regions}
            getDistricts={getDistricts}
            districts={districts}
            isEditForm={isEditForm}
            Initiatives={Initiatives}
            createInitiative={createInitiative}
            updateInitiative={updateInitiative}
            onCancel={this.closeInitiativeForm}
          />
        </Drawer>
        {/* end create/edit form modal */}
      </div>
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
  getRegions: PropTypes.func.isRequired,
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
  getRegions: () => { },
  createInitiative: () => { },
  updateInitiative: () => { },
  items: [],
  agencies: [],
  regions: [],
  districts: [],
  selected: null,
};

const mapStateToProps = (state) => {
  return {
    Initiatives: state.resources.initiative.data
      ? state.resources.initiative.data
      : [],
    items: state.resources?.items?.data,
    agencies: state.resources?.agencies?.data?.data,
    regions: state.resources?.regions?.data,
    districts: state.resources?.districts?.data,
    total: state.resources.initiative.total,
    page: state.resources.initiative.page,
    loading: state.resources.initiative.loading,
    posting: state.resources.initiative.posting,
    showForm: state.resources.initiative.showForm,
    selected: state.resources?.selectedInitiative,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getInitiatives: bindActionCreators(projectOperation.getInitiatives, dispatch),
  getItems: bindActionCreators(projectOperation.getItems, dispatch),
  getAgencies: bindActionCreators(projectOperation.getAgencies, dispatch),
  getRegions: bindActionCreators(projectOperation.getRegions, dispatch),
  getDistricts: bindActionCreators(projectOperation.getDistricts, dispatch),
  createInitiative: bindActionCreators(projectOperation.createInitiative, dispatch),
  deleteInitiative: bindActionCreators(projectOperation.deleteInitiative, dispatch),
  updateInitiative: bindActionCreators(projectOperation.updateInitiative, dispatch),
  openResourceForm: bindActionCreators(projectOperation.openResourceForm, dispatch),
  openInitiativeForm: bindActionCreators(projectOperation.openInitiativeForm, dispatch),
  selectInitiative: bindActionCreators(projectOperation.selectInitiative, dispatch),
  closeResourceForm: bindActionCreators(projectOperation.closeResourceForm, dispatch),
  closeInitiativeForm: bindActionCreators(projectOperation.closeInitiativeForm, dispatch),


});
export default connect(mapStateToProps, mapDispatchToProps)(Initiative);
