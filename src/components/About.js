import React from 'react';
import { useLocation } from 'react-router-dom';

// export default class About extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         const location=useLocation();
//         return <div style={{backgroundColor: 'green', width: "100%", height: "500px"}}>You are on the about page.{location.pathname}</div>
//     }
// }
function LocationDisplay(){
    let location=useLocation();
    return <div data-testid="location-display">{location.pathname}</div>
}
export default function About(){
    
    return <>
        <LocationDisplay/>
        <div style={{backgroundColor: 'green', width: "100%", height: "500px"}}>You are on the about page.</div>
        </>
}