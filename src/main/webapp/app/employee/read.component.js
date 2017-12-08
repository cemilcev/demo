window.ReadComponent = React.createClass({
    getInitialState: function () {
        return {
            employees: []
        };
    },
    componentDidMount: function () {

        this.serverRequest = $.get("http://localhost:8080/api/employees", function (employees) {
            this.setState({
                employees: employees._embedded.employees
            });
        }.bind(this));

    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    render: function () {
        var filtered = this.state.employees;
        $('.page-header h1').text('Employees ');

        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode}/>

                <Table
                    employees={filtered}
                    changeAppMode={this.props.changeAppMode}/>
            </div>
        );
    }
});