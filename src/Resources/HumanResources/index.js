import isArray from "lodash/isArray";
import { Modal, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Topbar from "../../components/Topbar";
import ItemList from "../../components/List";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import {
  generateEventActionCatalogueVCard,
  joinArrayOfObjectToString,
  notifyError,
  notifySuccess,
  truncateString,
} from "../../util";
import "./styles.css";

/* constants */
const eventTypeSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 4, xs: 6 };
const eventFunctionSpan = { xxl: 4, xl: 4, lg: 3, md: 0, sm: 0, xs: 0 };
const actionSpan = { xxl: 6, xl: 6, lg: 7, md: 7, sm: 8, xs: 12 };
const rolesSpan = { xxl: 5, xl: 5, lg: 5, md: 6, sm: 8, xs: 0 };
const groupsSpan = { xxl: 4, xl: 4, lg: 4, md: 5, sm: 0, xs: 0 };

const headerLayout = [
  { ...eventTypeSpan, header: "Event Type" },
  { ...eventFunctionSpan, header: "Function" },
  { ...actionSpan, header: "Action" },
  { ...rolesSpan, header: "Roles" },
  { ...groupsSpan, header: "Groups" },
];

const { confirm } = Modal;

/**
 * @class
 * @name HumanResources
 * @description Render actions list which have search box, actions and Event Action Catalogue list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class HumanResources extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    showFilters: false,
    isEditForm: false,
    notificationSubject: undefined,
    notificationBody: undefined,
    cached: null,
  };

  componentDidMount() {
    // getEventActionCatalogues();
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
   * @name openEventActionCatalogueForm
   * @description Open Event Action Catalogue form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  openEventActionCatalogueForm = () => {
  };

  /**
   * @function
   * @name openEventActionCatalogueForm
   * @description close Event Action Catalogue form
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  closeEventActionCatalogueForm = () => {
    this.setState({ isEditForm: false });
  };

  /**
   * @function
   * @name searchEventActionCatalogues
   * @description Search Event Human Resources List based on supplied filter word
   *
   * @param {object} event - Event instance
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  searchEventActionCatalogues = (event) => {
  };

  /**
   * @function
   * @name handleEdit
   * @description Handle on Edit action for list item
   *
   * @param {object} eventActionCatalogue Event Action Catalogue to be edited
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleEdit = (eventActionCatalogue) => {
    this.setState({ isEditForm: true });
  };

  /**
   * @function
   * @name handleShare
   * @description Handle share single EventActionCatalogue action
   *
   * @param {object| object[]} eventActionCatalogues EventActionCatalogue to be shared
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleShare = (eventActionCatalogues) => {
    let message;
    let subject;
    if (isArray(eventActionCatalogues)) {
      const eventActionCataloguesList = eventActionCatalogues.map(
        (eventActionCatalogue) =>
          generateEventActionCatalogueVCard(eventActionCatalogue).body
      );
      subject = "Action Catalogue details";
      message = eventActionCataloguesList.join("\n\n\n");
    } else {
      const { body, subject: title } = generateEventActionCatalogueVCard(
        eventActionCatalogues
      );
      subject = title;
      message = body;
    }

    this.setState({
      notificationSubject: subject,
      notificationBody: message,
    });
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
   * @name handleRefreshEventActionCatalogues
   * @description Handle list refresh action
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleRefreshEventActionCatalogues = () => {
    // refreshEventActionCatalogues(
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

  /**
   * @function
   * @name showArchiveConfirm
   * @description show confirm modal before archiving a Event Action Catalogue
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
        // deleteEventActionCatalogue(
        //   item._id, // eslint-disable-line
        //   () => notifySuccess(" Action Catalogue was archived successfully"),
        //   () =>
        //     notifyError(
        //       "An error occurred while archiving Action Catalogue, Please contact your system Administrator"
        //     )
        // );
      },
    });
  };

  render() {
    const {
      eventActionCatalogues,
      loading,
      page,
      showForm,
      searchQuery,
      total,
    } = this.props;
    const {
      showFilters,
      isEditForm,
    } = this.state;
    return (
      <>
        {/* Topbar */}
        <Topbar
          search={{
            size: "large",
            placeholder: "Search for Human Resources here ...",
            onChange: this.searchEventActionCatalogues,
            value: searchQuery,
          }}
          actions={[
            {
              label: "New Human Resources",
              icon: <PlusOutlined />,
              size: "large",
              title: "Add New Human Resources",
              onClick: this.openEventActionCatalogueForm,
            },
          ]}
        />
        {/* end Topbar */}

        {/* list starts */}
        <ItemList
          itemName="Human Resources"
          items={eventActionCatalogues}
          page={page}
          itemCount={total}
          loading={loading}
          onFilter={this.openFiltersModal}
          onShare={this.handleShare}
          onRefresh={this.handleRefreshEventActionCatalogues}
          onPaginate={(nextPage) => this.showArchiveConfirm(nextPage)}
          headerLayout={headerLayout}
          renderListItem={({
            item,
            isSelected,
            onSelectItem,
            onDeselectItem,
          }) => (
            <ListItem
              key={item._id} // eslint-disable-line
              name={item.strings.name.en}
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
                  share={{
                    name: "Share Human Resources",
                    title: "Share Human Resources details with others",
                    onClick: () => this.handleShare(item),
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
              <Col {...eventTypeSpan}>
                {item.relations.type
                  ? item.relations.type.strings.name.en
                  : "All"}
              </Col>
              <Col {...eventFunctionSpan}>
                {item.relations.function.strings.name.en}
              </Col>
              <Col {...actionSpan} title={item.strings.name.en}>
                {truncateString(item.strings.name.en, 50)}
              </Col>
              <Col {...rolesSpan}>
                {joinArrayOfObjectToString(item.relations.roles) || "N/A"}
              </Col>
              <Col {...groupsSpan}>
                {joinArrayOfObjectToString(item.relations.groups) || "N/A"}
              </Col>
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
          {/* <EventActionCatalogueFilters
            onCancel={this.closeFiltersModal}
            cached={cached}
            onCache={this.handleOnCachedValues}
            onClearCache={this.handleClearCachedValues}
          /> */}
        </Modal>
        {/* end filter modal */}

        <Modal
          title={isEditForm ? "Edit Human Resources" : "Add New Human Resources"}
          visible={showForm}
          className="FormModal"
          footer={null}
          onCancel={this.closeEventActionCatalogueForm}
          destroyOnClose
          maskClosable={false}
          afterClose={this.handleAfterCloseForm}
        >
          {/* <EventActionCatalogueForm
            posting={posting}
            isEditForm={isEditForm}
            eventActionCatalogue={eventActionCatalogue}
            onCancel={this.closeEventActionCatalogueForm}
          /> */}
        </Modal>
        {/* end create/edit form modal */}
      </>
    );
  }
}

HumanResources.propTypes = {
  loading: PropTypes.bool.isRequired,
  posting: PropTypes.bool.isRequired,
  eventActionCatalogues: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string })
  ).isRequired,
  eventActionCatalogue: PropTypes.shape({ name: PropTypes.string }),
  page: PropTypes.number.isRequired,
  showForm: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string,
  total: PropTypes.number.isRequired,
};

HumanResources.defaultProps = {
  eventActionCatalogue: null,
  searchQuery: undefined,
};

export default HumanResources;
