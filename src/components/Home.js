import React from 'react';
import {useLocation, withRouter} from 'react-router-dom';

// export default class Home extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return <>
//         {/* <div>{props.location.pathname}</div> */}
//         <div style={{backgroundColor: 'orange', width: "100%", height: "500px"}}>My Home Page</div>
//         </>
//     }
// }
function LocationDisplay(){
    let location=useLocation();
    return <div data-testid="location-display">{location.pathname}</div>
}
export default function Home(){
    return <>
        <LocationDisplay/>
        <div style={{backgroundColor: 'orange', width: "100%", height: "500px"}}>You are home.</div>
        </>
}