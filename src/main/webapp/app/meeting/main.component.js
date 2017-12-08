var MainApp = React.createClass({

    getInitialState: function(){
        return {
            currentMode: 'read',
            meetingId: null
        };
    },

    changeAppMode: function(newMode, meetingId){
        this.setState({currentMode: newMode});
        if(meetingId !== undefined){
            this.setState({meetingId: meetingId});
        }
    },

    render: function(){

        var modeComponent =
            <ReadComponent
                changeAppMode={this.changeAppMode} />;

        switch(this.state.currentMode){
            case 'read':
                break;
            case 'create':
                modeComponent = <CreateComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent = <UpdateComponent meetingId={this.state.meetingId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteComponent meetingId={this.state.meetingId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }

        return modeComponent;
    }
});

ReactDOM.render(
    <MainApp />,
    document.getElementById('content')
);