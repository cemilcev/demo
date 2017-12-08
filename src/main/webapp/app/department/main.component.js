var MainApp = React.createClass({

    getInitialState: function(){
        return {
            currentMode: 'read',
            departmentId: null
        };
    },

    changeAppMode: function(newMode, departmentId){
        this.setState({currentMode: newMode});
        if(departmentId !== undefined){
            this.setState({departmentId: departmentId});
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
                modeComponent = <UpdateComponent departmentId={this.state.departmentId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteComponent departmentId={this.state.departmentId} changeAppMode={this.changeAppMode}/>;
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