import React, {
    Component,
    PropTypes,
} from 'react';

require('../../styles/components/Dashboard/_card.scss');

const Card = (props) => (
    <div className="card col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <a className="dashboard-stat dashboard-stat-v2 blue" href="#">
            <div className="visual">
                <i className="fa fa-comments"></i>
            </div>
            <div className="details">
                <div className="number">
                    <span>{props.reading}</span>
                </div>
                <div className="desc">{props.name}</div>
            </div>
        </a>
    </div>
);

export default Card;
