import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames/bind';
import { getHomePageData } from '../../actions/HomePageAction';
import * as styles from  './UpVote.css';

const cx = classNames.bind(styles);

function UpVote (props) {
  console.log('Props', props);
  return (
    <button className={cx('upVote')}>
      UpVote
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
)(UpVote);
