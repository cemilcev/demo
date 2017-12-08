window.EmployeeRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.surname}</td>
                <td>{parseFloat(this.props.employee.salary).toFixed(2)} TL</td>
                <td>{this.props.employee.department_id} </td>
                <td>
                    <a href='#'
                       onClick={() => this.props.changeAppMode('update', this.props.employee.id)}
                       className='btn btn-primary m-r-1em'> Edit
                    </a>
                    <a
                        onClick={() => this.props.changeAppMode('delete', this.props.employee.id)}
                        className='btn btn-danger'> Delete
                    </a>
                </td>
            </tr>
        );
    }
});