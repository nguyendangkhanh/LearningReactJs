import React, { Component } from 'react';

function WarningBanner(props){
    if(!props.warn)
    {
        return null;
    }
    return (
        <div>Warning</div>
    );
}

export default class Page extends Component{
    constructor(props){
        super(props);
        this.state = {showWarning: true};
        this.handleShowWarning = this.handleShowWarning.bind(this);
    }

    handleShowWarning(){
       this.setState(prevState =>({
           showWarning: !prevState.showWarning
       }));
    }

    render(){
        return (
            <div>
                <WarningBanner warn = {this.state.showWarning} />
                <button onClick = {this.handleShowWarning}>{this.state.showWarning ? 'Show' : 'Off'}</button>
            </div>
        );        
    }
}