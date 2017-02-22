import React, {
    Component,
    PropTypes,
} from 'react';

require('../../styles/components/Dashboard/_card.scss');

const Card = (props) => (
    <div className={`card col-lg-3 col-md-3 col-sm-6 col-xs-12`} >
        <a href='#' className={`dashboard-stat dashboard-stat-v2 ${props.type === 'single' && props.reading < 6 ? 'hypo' : ''}`}>
            <div className="visual">
                {
                    props.type == 'single' ? <i className="fa fa-pencil-square-o"></i> : <i className="fa fa-line-chart" aria-hidden="true"></i>
                }
            </div>
            <div className="details">
                <div className="desc">{props.name}</div>
                <div className="number">
                    <span>{props.reading}</span>
                </div>
                {props.time && <div className="desc">{props.time}</div>}
                {
                    props.graphData && props.type == 'average' ? <span className='viewGraph'>View graph <i className="fa fa-arrow-circle-down"></i> </span> : null
                }
            </div>
        </a>
    </div>
);

export default Card;
