import React from 'react';

export default({upcoming}) => {
  return (
    <div>
      {upcoming && upcoming.map((item)=>{
        const { title, id } = item;
        return <p key={id}>{title}</p>
      })
      }
    </div>
  );
}

