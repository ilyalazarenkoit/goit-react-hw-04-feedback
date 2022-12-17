import { Component } from 'react';
import PropTypes from 'prop-types';
import section from '../Section/Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <section className={section.section}>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export { Section };
