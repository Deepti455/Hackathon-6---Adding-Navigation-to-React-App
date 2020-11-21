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
export default function Home(){
    let location=useLocation();
    return <>
        <div>{location.pathname}</div>
        <div style={{backgroundColor: 'orange', width: "100%", height: "500px"}}>My Home Page</div>
        </>
}