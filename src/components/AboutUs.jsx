import React from 'react';

function AboutUs({ id }) {
  return (
    <>
      <h1 id={id}>О нас</h1>
      <div className="wrapperUs">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, molestiae nam numquam
          deleniti magni pariatur qui vel ex velit aut explicabo sint eveniet expedita itaque
          consequuntur quibusdam blanditiis architecto laudantium.
        </p>
        <div>Сдесь должны быть 2 суки</div>
      </div>
    </>
  );
}

export default AboutUs;
