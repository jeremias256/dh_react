import React from 'react';
import ChartRowUsers from './ChartRowUsers';
import { API_USERS } from '../config';

class ChartUsers extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            users: [],           
        }
    }
    componentDidMount(){
        fetch(API_USERS)

            .then(res => res.json())
            .then(data => {
                this.setState({
                    users:data.data.data   
                })
            })
    }
    render(){
        const {users} = this.state
        return (
            
            <div className="card shadow mb-4">
                <h1>Usuarios registrados en la base de datos</h1>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Cell</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Cell</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    users.map( ( row , i) => {
                                        return <ChartRowUsers { ...row} key={i}/>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }   
}

export default ChartUsers;