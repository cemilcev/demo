window.Table = React.createClass({
    render: function() {

        var rows = this.props.employees
            .map(function(employee, i) {
                return (
                    <EmployeeRow
                        key={i}
                        employee={employee}
                        changeAppMode={this.props.changeAppMode} />
                );
            }.bind(this));

        return(
            !rows.length
                ? <div className='alert alert-danger'>No employee found.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Salary</th>
                        <th>Department</th>
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