window.DepartmentRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.department.name}</td>
                <td>{this.props.department.description}</td>
                <td>
                    <a href='#'
                       onClick={() => this.props.changeAppMode('update', this.props.department.id)}
                       className='btn btn-primary m-r-1em'> Edit
                    </a>
                    <a
                        onClick={() => this.props.changeAppMode('delete', this.props.department.id)}
                        className='btn btn-danger'> Delete
                    </a>
                </td>
            </tr>
        );
    }
});