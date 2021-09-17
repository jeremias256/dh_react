import React from 'react';


function ChartRowUsers(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.last_name}</td>
                    <td>{props.email}</td>
                    <td>{props.cell}</td>
                </tr>
            )
    }
    
        

export default ChartRowUsers;