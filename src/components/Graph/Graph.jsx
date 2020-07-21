import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

import './Graph.css';

// const cx = classNames.bind(styles);

function Graph (props) {
  return (
    <div className={'graphCont'}>
      <XYPlot width={1000} height={500}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis title="S.No" />
      <YAxis title="Comments" />
      <LineSeries
        data={props.data}
      />
        </XYPlot>
    </div>
  )
}


export default Graph;
