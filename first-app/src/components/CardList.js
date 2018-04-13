import React from 'react';
import Card from './Card';

function CardList (props) {
  return (
    <div className={'cp_CardList'}>
      {props.contacts.map(c => <Card key={c.id} name={c.name} />)}
    </div>
  );
}

export default CardList;
