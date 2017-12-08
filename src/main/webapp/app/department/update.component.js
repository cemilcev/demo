window.UpdateComponent = React.createClass({
    getInitialState: function() {
        return {
            id: 0,
            name: '',
            description: '',
            successUpdate: null
        };
    },

    componentDidMount: function(){
        
        var departmentId = this.props.departmentId;
        this.serverRequestProd = $.get("http://localhost:8080/api/departments/" + departmentId,
            function (department) {
                this.setState({id: department.id});
                this.setState({name: department.name});
                this.setState({description: department.description});
            }.bind(this));

        $('.page-header h1').text('Update department');
    },
    onNameChange: function(e){
        this.setState({name: e.target.value});
    },
    onDescriptionChange: function(e){
        this.setState({description: e.target.value});
    },
    onSave: function(e){
        var form_data={
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
        };

        // submit form data to api
        $.ajax({
            url: "http://localhost:8080/api/departments/"+this.state.id,
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

        return (
            <div>
                {
                    this.state.successUpdate === true ?
                        <div className='alert alert-success'>
                            Department was updated.
                        </div>
                        : null
                }

                {
                    this.state.successUpdate === "error" ?
                        <div className='alert alert-danger'>
                            Unable to update department. Please try again.
                        </div>
                        : null
                }

                <a href='#'
                   onClick={() => this.props.changeAppMode('read')}
                   className='btn btn-primary margin-bottom-1em'>
                    Department List
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
                            <td>Description</td>
                            <td>
                            <textarea
                                type='text'
                                className='form-control'
                                required
                                value={this.state.description}
                                onChange={this.onDescriptionChange}></textarea>
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