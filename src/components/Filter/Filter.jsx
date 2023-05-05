import React from 'react';
import PropTypes from 'prop-types';
import sty from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={sty.filter}>
    <label className={sty.labelFilter}>
      Filter
      <input
        type="name"
        value={value}
        onChange={onChange}
        className={sty.filterInput}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;