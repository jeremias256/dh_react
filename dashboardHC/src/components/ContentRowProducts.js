import React from 'react';
import { API_PRODUCTS,API_USERS } from '../config';
import SmallCard from './SmallCard';

class ContentRowProducts extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            products: 0,
            users:0,           
        }
    }
    componentDidMount(){
        fetch(API_PRODUCTS)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    products:data.data.product   
            })
        })
        fetch(API_USERS)
             .then(res => res.json())
             .then(data => {
                 //console.log(data)
                 this.setState({
                     users:data.data.data   
                 })
            })
    }

    render(){
        const {products} = this.state
        const {users} = this.state
        const productsQuantity = {
            title:"Productos totales",
            quantity:products.length,
            color:"primary",
            icon:"fas fa-laptop"
        }
        const usersQuantity = {
            title:"Usuarios totales",
            quantity:users.length,
            color:'success',
            icon:"fas fa-users"
        }
        const categoriesQuantity = {
            title:"Categorias totales",
            quantity:8,
            color:'warning',
            icon:"fas fa-list"
        }

        const totales=[productsQuantity,usersQuantity,categoriesQuantity]
        return (
    
            <section className='totales'>
            <>
                {/* <h2>Productos registrados:  {productsQuantity} </h2>
                <br/>
                { <h2>Productos usuarios:  {usersQuantity} </h2> }
                <br/>
                <h2>Categorias disponibles:  {8} </h2> */}
                
                <div className="row">
                    {totales.map( (movie, i) => {
                        return <SmallCard {...movie} key={i}/>
                    })}
                </div>
            </> 
            </section>
        )
    }
}

export default ContentRowProducts;