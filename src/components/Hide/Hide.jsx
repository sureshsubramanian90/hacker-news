import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames/bind';
import { getHomePageData } from '../../actions/HomePageAction';
import * as styles from  './Hide.css';

const cx = classNames.bind(styles);

function Hide (props) {
  return (
    <button className={cx('hide')}>
      Hide
    </button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {getHomePageData},
    dispatch,
  ),
});

export default connect(
null,
mapDispatchToProps,
)(Hide);
