import React from 'react';
import './ResultsGrid.scss';

const ResultsGrid = (props) => (
  <section className='resultsGrid'>
    <header className='resultsGrid__header'>{props.header}</header>
    <main className='resultsGrid__resultsList'>{props.resultsList}</main>
    <aside className='resultsGrid__toolbar'>{props.toolbar}</aside>
  </section>
);

export default ResultsGrid;
