import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { AddAlert } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';

class ExtraDayButton extends Component {

    handleExtraDay = (friend) => {
        console.log('adding extra day to due date');
        this.props.dispatch({ type: 'EXTRA_DAY', payload: friend.id });
        swal("due date extended!", "", "success");
    }

    render() {
        return (
            <IconButton onClick={() => this.handleExtraDay(this.props.friend)}>
                <AddAlert />
            </IconButton>
        )
    }
}

export default withRouter(connect()(ExtraDayButton));