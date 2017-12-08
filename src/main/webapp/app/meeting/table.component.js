window.Table = React.createClass({
    render: function() {

        var rows = this.props.meetings
            .map(function(meeting, i) {
                return (
                    <MeetingRow
                        key={i}
                        meeting={meeting}
                        changeAppMode={this.props.changeAppMode} />
                );
            }.bind(this));

        return(
            !rows.length
                ? <div className='alert alert-danger'>No meeting found.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
        );
    }
});