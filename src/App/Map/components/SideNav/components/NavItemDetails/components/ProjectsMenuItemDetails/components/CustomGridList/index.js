import React from "react";
import PropTypes from 'prop-types';
import {chunkIntoSmallerArrays} from "../../../../../../../../../../Util";
import './styles.css';


function CustomGridList({data}) {

    const dataChunks = chunkIntoSmallerArrays(data, 2);

    // render article
    const article = arr => (
        <article>
            { arr.map(({title, value}) => (
                <div>
                    <span title={title} style={{ textTransform: 'uppercase'}}>{title}</span><br/>
                    <b>{value}</b>
                </div>))}
        </article>
    );

    return (
        <section className="CustomGridList">
            { dataChunks.map(dataChunk => article(dataChunk))}
        </section>
    );
}

export default CustomGridList;

CustomGridList.propTypes = {
    data: PropTypes.array.isRequired
}
