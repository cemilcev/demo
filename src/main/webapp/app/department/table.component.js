window.Table = React.createClass({
    render: function() {

        var rows = this.props.departments
            .map(function(department, i) {
                return (
                    <DepartmentRow
                        key={i}
                        department={department}
                        changeAppMode={this.props.changeAppMode} />
                );
            }.bind(this));

        return(
            !rows.length
                ? <div className='alert alert-danger'>No department found.</div>
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