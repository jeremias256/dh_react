import React from 'react';
import { API_USERS } from '../config';

class LastUserInDb extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            users:[],           
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
        const lastUser = users[users.length-1]
        return(
            
            <div className="col-lg-6 mb-4">
                
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario registrado : {lastUser && lastUser.name}</h5>
                        <h5 className="m-0 font-weight-bold text-gray-800">Apellido : {lastUser && lastUser.last_name}</h5>
                        <h5 className="m-0 font-weight-bold text-gray-800">email : {lastUser && lastUser.email}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={lastUser && lastUser.image} alt=" Star Wars - Mandalorian "/>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            )
    }
}

export default LastUserInDb;
