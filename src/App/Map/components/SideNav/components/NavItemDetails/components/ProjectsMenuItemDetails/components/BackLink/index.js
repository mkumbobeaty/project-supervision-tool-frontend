import {LeftOutlined} from "@ant-design/icons";
import React from "react";
import PropTypes from 'prop-types';

function BackLink({goBack}) {

    return (
        <div className="BackLink" onClick={goBack}>
            <a> <LeftOutlined style={{fontSize: 10}}/> <span>Back</span></a>
        </div>

    );

}

export default BackLink;
BackLink.propTypes = {
    goBack: PropTypes.func.isRequired
}

