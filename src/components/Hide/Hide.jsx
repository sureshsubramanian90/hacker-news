import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames/bind';
import { hideDataAction } from '../../actions/HomePageAction';
import * as styles from  './Hide.css';

const cx = classNames.bind(styles);

function Hide (props) {
  const handleHideEvent = () => {
    props.hideDataAction({ id: props.id })
  }
  return (
    <button onClick={() => handleHideEvent()} className={cx('hide')}>
      Hide
    </button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { hideDataAction },
    dispatch,
  ),
});

export default connect(
null,
mapDispatchToProps,
)(Hide);
