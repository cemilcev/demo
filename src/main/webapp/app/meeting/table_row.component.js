window.MeetingRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.meeting.name}</td>
                <td>{this.props.meeting.description}</td>

                <td>
                    <a href='#'
                       onClick={() => this.props.changeAppMode('update', this.props.meeting.id)}
                       className='btn btn-primary m-r-1em'> Edit
                    </a>
                    <a
                        onClick={() => this.props.changeAppMode('delete', this.props.meeting.id)}
                        className='btn btn-danger'> Delete
                    </a>
                </td>
            </tr>
        );
    }
});