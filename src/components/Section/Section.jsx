import React from 'react';
import propTypes from 'prop-types';
import css from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.options__section}>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.array.isRequired,
};

export default Section;