var MainApp = React.createClass({

    getInitialState: function(){
        return {
            currentMode: 'read',
            employeeId: null
        };
    },

    changeAppMode: function(newMode, employeeId){
        this.setState({currentMode: newMode});
        if(employeeId !== undefined){
            this.setState({employeeId: employeeId});
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
                modeComponent = <UpdateComponent employeeId={this.state.employeeId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteComponent employeeId={this.state.employeeId} changeAppMode={this.changeAppMode}/>;
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