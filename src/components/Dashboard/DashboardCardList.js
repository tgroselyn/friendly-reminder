import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardCard from './DashboardCard';
import {Grid} from '@material-ui/core';
import './Dashboard.css';

class DashboardCardList extends Component {
    render() {

        const dueNow = this.props.redux.dueNow.map(friend => {
            return <DashboardCard key={friend.id} info={friend} due="now"/>
        })

        const overdue = this.props.redux.overdue.map(friend => {
            return <DashboardCard key={friend.id} info={friend} due="over" />
        })

        return (
            <div>
                <h2>due for contact</h2>
                <Grid container spacing={4} className="cardContainer">
                    {dueNow}
                </Grid>
                <h2>overdue</h2>
                <Grid container spacing={4} className="cardContainer">
                    {overdue}
                </Grid>
            </div>
        )
    }
}

const mapRedux = redux => {
    return {redux}
}

export default connect(mapRedux)(DashboardCardList);