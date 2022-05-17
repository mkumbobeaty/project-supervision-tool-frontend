import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import CustomList from "../../../../../components/List";
import ListItem from "../../../../../components/ListItem";
import API from "../../../../../../API";

import {
  ProcuringEntityActions,
  ProcuringEntitySelectors,
} from "../../../../../../redux/modules/ProcuringEntities";
import { isoDateToHumanReadableDate } from "../../../../../../Util";

const reportTitle = { xxl: 5, xl: 5, lg: 5, md: 5, sm: 10, xs: 20 };
const reportNumber = { xxl: 5, xl: 5, lg: 5, md: 5, sm: 10, xs: 0 };
const reportingPeriod = { xxl: 11, xl: 11, lg: 11, md: 11, sm: 0, xs: 0 };

const headerLayout = [
  { ...reportTitle, header: "Title" },
  { ...reportNumber, header: "Report Number" },
  { ...reportingPeriod, header: "Reporting Period" },
];

function LatestReports() {
  const [progressReports, setProgressReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getReports = async () => {
    setIsLoading(true);
    const response = await API.getProcuringEntitiesProgressReports(1);
    setProgressReports(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getReports();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="LatestReports">
      {/* list starts */}
      <h4 className="text-blue" style={{paddingBlock: 10, paddingInline: 40, fontSize: 16}}>Latest Reports</h4>
      <CustomList
        itemName="Progress Reports"
        items={progressReports}
        headerLayout={headerLayout}
        renderListItem={({ item }) => (
          <ListItem
            key={item.id} // eslint-disable-line
            name={item?.report_title}
            item={item}
          >
            {/* eslint-disable react/jsx-props-no-spreading */}

            <Col
              {...reportTitle}
              className="contentEllipse"
              title={item?.report_title || "N/A"}
            >
              {item?.report_title || "N/A"}
            </Col>

            <Col {...reportNumber} className="contentEllipse">
              {item?.report_number}
            </Col>

            <Col {...reportingPeriod} className="contentEllipse">
              {`${isoDateToHumanReadableDate(
                item.start
              )} - ${isoDateToHumanReadableDate(item?.end)}`}
            </Col>

            {/* eslint-enable react/jsx-props-no-spreading */}
          </ListItem>
        )}
      />
      {/* end list */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  procuringEntity: ProcuringEntitySelectors.getProcuringEntitySelector(state),
});

const mapDispatchToProps = {
  getProcuringEntity: ProcuringEntityActions.getProcuringEntityStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestReports);
