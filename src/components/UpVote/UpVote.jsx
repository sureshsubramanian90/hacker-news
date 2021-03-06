import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames/bind';
import { upVoteAction } from '../../actions/HomePageAction';
import * as styles from  './UpVote.css';

const cx = classNames.bind(styles);

function UpVote (props) {
  const handleVoteEvent = () => {
    props.actions.upVoteAction({ id: props.id })
  }
  return (
    <button aria-label="vote" onClick={() => handleVoteEvent()} className={cx('upVote')}>
      <span className={cx("upArrow")} />
    </button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { upVoteAction },
    dispatch,
  ),
});

export default connect(
null,
mapDispatchToProps,
)(UpVote);
