import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, Col, Layout, Row } from "antd";
import { Link } from "react-router-dom";
import UserMenu from "../navigation/UserMenu";
import "./styles.css";

/* constants */
const { Header, Content } = Layout;
const breadcrumbNameMap = {
  "/projects/": {
    name: "Projects",
    param: null,
    title: "List of Projects"
  },
  "/projects/:id": {
    name: "Project",
    param: "id",
    title: "Project Dashboard"
  }
};

/**
 * @function
 * @name BaseLayout
 * @description Render base layout for the app
 * @param {object} props Properties inject by router
 * @param {object} props.location Location object from react router
 * @param {object} props.match Match prop from react router
 * @returns {object} BaseLayout component
 * @version 0.1.0
 * @since 0.1.0
 */
const BaseLayout = (props) => {

   // generate dynamic breadcrumb items
   const generateBreadCrumbItems = () => {
    const {location, match} = props;
   const pathSnippets = location.pathname.split("/").filter((i) => i);
   const lastPath = pathSnippets[pathSnippets.length - 1];

   return pathSnippets.map((_, index) => {
     const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;

     if (breadcrumbNameMap[match.path]) {
       return (
         <Breadcrumb.Item key={url}>
           <Link to={url} title={breadcrumbNameMap[match.path].title}>
             {breadcrumbNameMap[match.path].name}
           </Link>
         </Breadcrumb.Item>
       );
     }

     return (
       <Breadcrumb.Item key={url}>
         <span title={lastPath}>{lastPath}</span>
       </Breadcrumb.Item>
     );
   });


 }

  return (
    <Layout className="BaseLayout">
      <Header className="BaseLayoutHeader">
        <Row type="flex" align="middle">
          {/* breadcrumb section start */}
          <Col xxl={22} xl={22} lg={22} md={22} sm={20} xs={20} justify="start">
            <Row type="flex" justify="start">
              <Breadcrumb className="Breadcrumb" separator=">">
                {generateBreadCrumbItems()}
              </Breadcrumb>
            </Row>
          </Col>
          {/* breadcrumb section end */}

          <Col xxl={2} xl={2} lg={2} md={2} sm={4} xs={4}>
            <Row type="flex" justify="end">
              <Col span={12}>
                <UserMenu />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content className="BaseLayoutContent">
        {props.children}
      </Content>
    </Layout>
  );
};

BaseLayout.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  match: PropTypes.shape({ url: PropTypes.string, path: PropTypes.string })
    .isRequired,
    children: PropTypes.node.isRequired
};

export default BaseLayout;