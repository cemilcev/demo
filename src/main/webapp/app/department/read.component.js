window.ReadComponent = React.createClass({
    getInitialState: function () {
        return {
            departments: []
        };
    },
    componentDidMount: function () {

        this.serverRequest = $.get("http://localhost:8080/api/departments", function (departments) {
            this.setState({
                departments: departments._embedded.departments
            });
        }.bind(this));
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    render: function () {
        var filtered = this.state.departments;
        $('.page-header h1').text('Departments ');

        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode}/>

                <Table
                    departments={filtered}
                    changeAppMode={this.props.changeAppMode}/>
            </div>
        );
    }
});