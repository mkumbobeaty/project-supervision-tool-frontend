import React from 'react';

import './styles.css'

const SummaryItem = ({name, count, countTitle}) => (
    <article className='SummaryItem'>
        <div title={name} className='summary-item-title'>{name}</div>
        <div title={countTitle ? countTitle : ''}>{count}</div>
    </article>
);

function SummarySection({items, sectionName}) {

    return (
        <section className='SummarySection'>
            <div className='summary-header'>{ sectionName }</div>
            <ol className='summary-contents'>
                    {items.map((item, i) => <li key={i}><SummaryItem name={item.name} countTitle={item?.count_title} count={item.count} key={item.name}/></li>)}
            </ol>
        </section>
    );

}

export default SummarySection;
