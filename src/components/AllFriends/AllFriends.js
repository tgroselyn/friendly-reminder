import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllFriends extends Component {

    handleAddClick = (event) => {
        this.props.dispatch({ type: 'CLEAR_EDIT_FRIEND' });
        this.props.history.push('/add-edit-friend');
    }

    handleDelete = (idToDelete) => {
        this.props.dispatch({type: 'DELETE_FRIEND', payload: idToDelete})
    }

    handleEdit = (friendToEdit) => {
        this.props.dispatch({type: 'SET_EDIT_FRIEND', payload: friendToEdit});
        this.props.history.push('/add-edit-friend');
    }

    handleExtraDay = (idToUpdate) => {
        console.log('adding extra day to due date');
        this.props.dispatch({type: 'EXTRA_DAY', payload: idToUpdate});
    }

    handleEmail = (friend) => {
        window.open(`mailto:${friend.email}`);
    }

    handleSMS = (friend) => {
        console.log('sending an SMS')
    }

    handleUrl = (friend) => {
        window.open(friend.url);
    }

    render() {

        let eachFriendRow = this.props.redux.friend.map(friend => {
            return <tr key={friend.id}>
                <td>{friend.first_name}</td>
                <td>{friend.last_name}</td>
                <td>{friend.last_date}</td>
                <td>{friend.due_date}</td>
                <td>{friend.frequency}</td>
                <td>
                    <button onClick={() => this.handleExtraDay(friend.id)}>+1</button>
                    <button onClick={() => this.handleEmail(friend)}>email</button>
                    <button onClick={() => this.handleSMS(friend)}>sms</button>
                    <button onClick={() => this.handleUrl(friend)}>url</button>
                    <button onClick={()=> this.handleEdit(friend)}>edit</button>
                    <button onClick={()=> this.handleDelete(friend.id)}>delete</button>
                </td>
            </tr>
        })

        return (
            <div>
                <button onClick={this.handleAddClick}>add new friend</button>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Last Contacted</th>
                            <th>Due Date</th>
                            <th>Frequency</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eachFriendRow}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapRedux = (redux) => {
    return {redux}
}

export default connect(mapRedux)(AllFriends);