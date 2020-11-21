import React from 'react';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div style={{backgroundColor: 'orange', width: "100%", height: "500px"}}>You are home.</div>
    }
}