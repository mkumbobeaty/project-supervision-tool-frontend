import React from 'react';

import './styles.css'

const SummaryItem = ({name, count}) => (
    <article className='SummaryItem'>
        <div title={name} className='summary-item-title'>{name}</div>
        <div>{count}</div>
    </article>
);

function SummarySection({items, sectionName}) {

    return (
        <section className='SummarySection'>
            <div className='summary-header'>{ sectionName }</div>
            <ol className='summary-contents'>
                    {items.map(({name, count}, i) => <li key={i}><SummaryItem name={name} count={count} key={name}/></li>)}
            </ol>
        </section>
    );

}

export default SummarySection;
