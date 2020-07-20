import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames/bind';
import { getHomePageData } from '../actions/HomePageAction';
import { calcDate } from '../helpers/Utils';
import UpVote from '../components/UpVote/UpVote';
import Hide from '../components/Hide/Hide';
import * as styles from  './App.css';

const cx = classNames.bind(styles);
class App extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    if (isEmpty(this.props.data)) {
      this.props.actions.getHomePageData({ tags: 'story' });
    }
  }

  renderStoryRow = (item, currentDate) => {
    const date = new Date(item.created_at);
    let createdDate = '';
    const diffObj = calcDate(currentDate, date);
    if (diffObj.years) {
      createdDate = `${diffObj.years} years ago`
    } else if(diffObj.months) {
      createdDate = `${diffObj.months} months ago`
    } else if (diffObj.days) {
      createdDate = `${diffObj.days} days ago`
    } else if (diffObj.hours) {
      createdDate = `${diffObj.hours} hours ago`
    }
    
    return (
      <div className={cx("tableHead")} key={item.objectID}>
        <div className={cx("tablecell")}>{item.num_comments || '-'}</div>
        <div className={cx("tablecell")}>{item.points || '-'}</div>
        <div className={cx("tablecell")}>
          <UpVote id={item.objectID}/>
        </div>
        <div className={cx("tablecell")}>
          <span>{item.title} {createdDate}</span>
          <span>
            <Hide id={item.objectID} />
          </span>
        </div>
      </div>
    )
  }

  render() {
    const { data } = this.props;
    const currentDate = new Date();
    return (
      <div className={cx("mainContainer", "col8")}>
        <div className={cx("test")}>Story</div>
        <div className={cx("tableContainer")}>
          <div className={cx("tableHead")}>
            <div className={cx("tablecell")}>Comments</div>
            <div className={cx("tablecell")}>Vote Count</div>
            <div className={cx("tablecell")}>Up Vote</div>
            <div className={cx("tablecell")}>News details</div>
          </div>
          {data && data.hits && data.hits.map((item) => this.renderStoryRow(item, currentDate))}
        </div>
          
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    context: state.context,
    data: state.homePageData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {getHomePageData},
    dispatch,
  ),
});

export default connect(
mapStateToProps,
mapDispatchToProps,
)(App);
