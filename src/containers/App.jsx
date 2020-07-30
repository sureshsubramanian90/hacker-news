import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import classNames from 'classnames/bind';
import { browserHistory } from 'react-router';
import { getHomePageData, clientRefreshAction } from '../actions/HomePageAction';
import { calcDate } from '../helpers/Utils';
import UpVote from '../components/UpVote/UpVote';
import Hide from '../components/Hide/Hide';
import Graph from '../components/Graph/Graph';
import * as styles from  './App.css';

const cx = classNames.bind(styles);
class App extends Component {
  constructor() {
    super();
    this.state  = {
      showGraph: false
    }
  }

  componentWillMount() {
    if (isEmpty(this.props.data)) {
      const page = get(this.props, 'context.queryParam.page', false);
      this.props.actions.getHomePageData({ page });
    }
  }
  renderStoryRow = (item, currentDate) => {
    if(!item.hide) {
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
        <div className={cx("tableBody")} key={item.objectID}>
          <div className={cx("tablecell", "w68", "commentsCell", "hideMob")}>{item.num_comments || '-'}</div>
          <div className={cx("tablecell", "w68", "pointsCell", "hideMob")}>{item.points || '-'}</div>
          <div className={cx("tablecell", "w56", "upvoteCell", "hideMob")}>
            <UpVote id={item.objectID}/>
          </div>
          <div className={cx("tablecell", "newsDetails")}>
            {item.title && <span className={cx('title')}>{item.title}</span>}
            {item.url && <span className={cx('url')}> ({item.url})</span>}
            {item.author && <span className={cx('author')}> <span>by </span><span className={cx('authorName')}>{item.author}</span></span>}
            <span className={cx('url')}> {createdDate}</span>
            <span className={cx('hideBtn')}>
              [<Hide id={item.objectID} />]
            </span>
          </div>
          <div className={cx("tablecell", "w68", "commentsCell", "showMob")}>{item.num_comments || '-'}</div>
          <div className={cx("tablecell", "w68", "pointsCell", "showMob")}>{item.points || '-'}</div>
          <div className={cx("tablecell", "w56", "upvoteCell", "showMob")}>
            <UpVote id={item.objectID}/>
          </div>
          <div className={cx('hideBtnMbl')}>
            [<Hide id={item.objectID} />]
          </div>
        </div>
      )
    }
    return null;
    
  }
  componentDidMount() {
    this.props.actions.clientRefreshAction();
    const disableGraph = get(this.props, 'context.queryParam.disableGraph', false);
    if (!disableGraph) {
      this.setState({
        showGraph: true
      });
    }
  }
  goToPreviouspage = () => {
    const { data } = this.props;
    browserHistory.push(`/?page=${data.page -= 1}`)
    this.props.actions.getHomePageData({ page: data.page });
  }
  goToNextPage = () => {
    const { data } = this.props;
    browserHistory.push(`/?page=${data.page += 1}`);
    this.props.actions.getHomePageData({ page: data.page });
  }
  render() {
    const { data } = this.props;
    const currentDate = new Date();
    return (
      <div className={cx("mainContainer")}>
        <div className={cx("tableContainer")}>
          <div className={cx("tableHead")}>
            <div className={cx("tablecell", "w68")}>Comments</div>
            <div className={cx("tablecell", "w68")}>Vote Count</div>
            <div className={cx("tablecell", "w56")}>Up Vote</div>
            <div className={cx("tablecell", "newsDetailsHead")}>News details</div>
          </div>
        </div>
        <div className={cx("tableContainer")}>
          {data && data.hits && data.hits.map((item) => this.renderStoryRow(item, currentDate))}
        </div>
        <div className={cx("paginationSection", "desktopPagination")}>
          <button className={cx('paginationBtn', 'paginationBtnPrevious')} disabled={!data.page} onClick={() => this.goToPreviouspage()}>Previous</button> | <button className={cx('paginationBtn', 'paginationBtnNext')} disabled={data.page === data.nbPages} onClick={() => this.goToNextPage()}>Next</button>
        </div>
        {this.state.showGraph ? <Graph data={data.graph} /> : null}
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
    { getHomePageData, clientRefreshAction },
    dispatch,
  ),
});

export default connect(
mapStateToProps,
mapDispatchToProps,
)(App);
