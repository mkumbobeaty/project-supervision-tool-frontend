import React from 'react';

import './styles.css'

const SummaryItem = ({name, count}) => (
    <article className='SummaryItem'>
        <div title={name}>{name}</div>
        <div>{count}</div>
    </article>
);

function SummarySection({items, sectionName}) {

    return (
        <section className='SummarySection'>
            <div className='summary-header'>{ sectionName }</div>
            <ol className='summary-contents'>
                    {items.map(({name, count}) => <li><SummaryItem name={name} count={count}/></li>)}
            </ol>
        </section>
    );

}

export default SummarySection;
