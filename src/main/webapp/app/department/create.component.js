window.CreateComponent = React.createClass({
    getInitialState: function() {
        return {
            name: '',
            description: '',
            successCreation: null
        };
    },
    componentDidMount: function() {
        $('.page-header h1').text('Create department');
    },
    onDescriptionChange: function(e) {
        this.setState({description: e.target.value});
    },
    onNameChange: function(e) {
        this.setState({name: e.target.value});
    },
    onSave: function(e){
        var form_data={
            name: this.state.name,
            description: this.state.description
        };

        $.ajax({
            url: "http://localhost:8080/api/departments",
            type : "POST",
            contentType : 'application/json',
            data : JSON.stringify(form_data),
            success : function(response) {

                this.setState({successCreation: true});
                this.setState({name: ""});
                this.setState({description: ""});

            }.bind(this),
            error: function(xhr, resp, text){
                this.setState({successCreation: "error"});
                console.log(xhr, resp, text);
            }
        });

        e.preventDefault();
    },
    render: function() {

        return (
            <div>
                {

                    this.state.successCreation === true ?
                        <div className='alert alert-success'>
                            Department was saved.
                        </div>
                        : null
                }

                {

                    this.state.successCreation === "error" ?
                        <div className='alert alert-danger'>
                            Unable to save department. Please try again.
                        </div>
                        : null
                }

                <a href='#'
                   onClick={() => this.props.changeAppMode('read')}
                   className='btn btn-primary margin-bottom-1em'> Department List
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
                            onChange={this.onDescriptionChange}>
                        </textarea>
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