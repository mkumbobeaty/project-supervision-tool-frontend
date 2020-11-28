import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const SummaryItem = ({name, count, countTitle}) => (
    <article className='SummaryItem'>
        <div title={name} className='summary-item-title'>{name}</div>
        <div title={countTitle ? countTitle : ''}>{count}</div>
    </article>
);

function SummarySection({items, sectionName, getData}) {

    return (
        <section className='SummarySection'>
            <div className='summary-header'>{sectionName}</div>
            <ol className='summary-contents'>
                {items.map((item, i) =>
                    <li
                        key={i}
                        onClick={() => getData(item?.id)}
                    >
                        <SummaryItem
                            name={item.name}
                            countTitle={item?.count_title}
                            count={item.count}
                            key={item.name}
                        />
                    </li>
                )}
            </ol>
        </section>
    );

}

export default SummarySection;

SummarySection.propTypes = {
    items: PropTypes.array.isRequired,
    sectionName: PropTypes.string.isRequired,
    getData: PropTypes.func,
}

SummarySection.defaultProps = {
    getData: () => {
    }
}
