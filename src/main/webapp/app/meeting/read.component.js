window.ReadComponent = React.createClass({
    getInitialState: function () {
        return {
            meetings: []
        };
    },
    componentDidMount: function () {

        this.serverRequest = $.get("http://localhost:8080/api/meetings", function (meetings) {
            this.setState({
                meetings: meetings._embedded.meetings
            });
        }.bind(this));
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    render: function () {
        var filtered = this.state.meetings;
        $('.page-header h1').text('Meetings ');

        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode}/>

                <Table
                    meetings={filtered}
                    changeAppMode={this.props.changeAppMode}/>
            </div>
        );
    }
});