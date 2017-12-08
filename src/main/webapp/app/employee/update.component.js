window.UpdateComponent = React.createClass({
    getInitialState: function() {
        return {
            departments: [],
            selectedDepartmentId: 0,
            id: 0,
            name: '',
            surname: '',
            salary: 0,
            successUpdate: null
        };
    },

    componentDidMount: function(){

        // read departments
        this.serverRequestCat = $.get("http://localhost:8080/api/departments",
            function (departments) {
                this.setState({
                    departments: departments._embedded.departments
                });
            }.bind(this));
        
        var employeeId = this.props.employeeId;

        this.serverRequestProd = $.get("http://localhost:8080/api/employees/" + employeeId,
            function (employee) {
                this.setState({selectedDepartmentId: employee.department_id});
                this.setState({id: employee.id});
                this.setState({name: employee.name});
                this.setState({surname: employee.surname});
                this.setState({salary: employee.salary});

            }.bind(this));

        $('.page-header h1').text('Update employee');
    },
    componentWillUnmount: function() {
        this.serverRequestCat.abort();
        this.serverRequestProd.abort();
    },

    onDepartmentChange: function(e){
        this.setState({selectedDepartmentId: e.target.value});
    },
    onNameChange: function(e){
        this.setState({name: e.target.value});
    },
    onSurnameChange: function(e){
        this.setState({surname: e.target.value});
    },
    onSalaryChange: function(e){
        this.setState({salary: e.target.value});
    },

    onSave: function(e){
        var form_data={
            id: this.state.id,
            name: this.state.name,
            surname: this.state.surname,
            salary: this.state.salary,
            department_id: this.state.selectedDepartmentId
        };

        // submit form data to api
        $.ajax({
            url: "http://localhost:8080/api/employees/"+this.state.id,
            type : "PUT",
            contentType : 'application/json',
            data : JSON.stringify(form_data),
            success : function(response, textStatus, xhr) {
                this.setState({successUpdate: true});
            }.bind(this),
            error: function(xhr, resp, text){
                this.setState({successUpdate: "error"});
                console.log(xhr, resp, text);
            }
        });

        e.preventDefault();
    },
    render: function() {
        var departmentsOptions = this.state.departments.map(function(department){
            return (
                <option key={department.id} value={department.id}>{department.name}</option>
            );
        });

        return (
            <div>
                {
                    this.state.successUpdate === true ?
                        <div className='alert alert-success'>
                            Employee was updated.
                        </div>
                        : null
                }

                {
                    this.state.successUpdate === "error" ?
                        <div className='alert alert-danger'>
                            Unable to update employee. Please try again.
                        </div>
                        : null
                }

                <a href='#'
                   onClick={() => this.props.changeAppMode('read')}
                   className='btn btn-primary margin-bottom-1em'>
                    Employee Lists
                </a>

                <form onSubmit={this.onSave}>
                    <table className='table table-bordered table-hover'>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.name}
                                    required
                                    onChange={this.onNameChange} />
                            </td>
                        </tr>

                        <tr>
                            <td>Surname</td>
                            <td>
                            <textarea
                                type='text'
                                className='form-control'
                                required
                                value={this.state.surname}
                                onChange={this.onSurnameChange}></textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>Salary </td>
                            <td>
                                <input
                                    type='number'
                                    step="any"
                                    className='form-control'
                                    value={this.state.salary}
                                    required
                                    onChange={this.onSalaryChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Department</td>
                            <td>
                                <select
                                    onChange={this.onDepartmentChange}
                                    className='form-control'
                                    value={this.state.selectedDepartmentId}>
                                    <option value="-1">Select department...</option>
                                    {departmentsOptions}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                <button
                                    className='btn btn-primary'
                                    onClick={this.onSave}>Save Changes</button>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

});