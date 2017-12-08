window.CreateComponent = React.createClass({
    getInitialState: function() {
        return {
            departments: [],
            selectedDepartmentId: -1,
            name: '',
            surname: '',
            salary: '',
            successCreation: null
        };
    },
    componentDidMount: function() {
        this.serverRequest = $.get("http://localhost:8080/api/departments", function (departments) {
            this.setState({
                departments: departments._embedded.departments
            });
        }.bind(this));

        $('.page-header h1').text('Create employee');
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    onDepartmentChange: function(e) {
        this.setState({selectedDepartmentId: e.target.value});
    },
    onNameChange: function(e) {
        this.setState({name: e.target.value});
    },
    onSurnameChange: function(e) {
        this.setState({surname: e.target.value});
    },
    onSalaryChange: function(e) {
        this.setState({salary: e.target.value});
    },
    onSave: function(e){
        var form_data={
            name: this.state.name,
            surname: this.state.surname,
            salary: this.state.salary,
            department_id: this.state.selectedDepartmentId
        };

        $.ajax({
            url: "http://localhost:8080/api/employees",
            type : "POST",
            contentType : 'application/json',
            data : JSON.stringify(form_data),
            success : function(response) {

                this.setState({successCreation: true});

                this.setState({name: ""});
                this.setState({surname: ""});
                this.setState({salary: ""});
                this.setState({selectedDepartmentId: -1});

            }.bind(this),
            error: function(xhr, resp, text){
                this.setState({successCreation: "error"});
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

                    this.state.successCreation === true ?
                        <div className='alert alert-success'>
                            Employee was saved.
                        </div>
                        : null
                }

                {

                    this.state.successCreation === "error" ?
                        <div className='alert alert-danger'>
                            Unable to save employee. Please try again.
                        </div>
                        : null
                }

                <a href='#'
                   onClick={() => this.props.changeAppMode('read')}
                   className='btn btn-primary margin-bottom-1em'> Employee List
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
                            onChange={this.onSurnameChange}>
                        </textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>Salary</td>
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
                                    onClick={this.onSave}>Save</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
});