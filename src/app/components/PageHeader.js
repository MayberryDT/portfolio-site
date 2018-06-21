import React from 'react';

const script = {fontFamily: 'Kaushan Script, cursive', fontSize: '60px'}

const PageHeader = (props) => (
  <section className={`hero ${props.color}`}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-centered" style={script}>
          {props.title}
        </h1>
        <h2 className="subtitle">
          {props.children}
        </h2>
      </div>
    </div>
  </section>
)

export default PageHeader;