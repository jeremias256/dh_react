import React from 'react';
import { API_PRODUCTS,API_USERS } from '../config';
import SmallCard from './SmallCard';

class ContentRowTotals extends React.Component{
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
        
        // var aux={};
        // const filtrados = products.filter(filtrar=>aux[filtrar.category.info] ? false : aux[filtrar.category.info] = true)

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
    
                <div className="row">
                    {totales.map( (movie, i) => {
                        return <SmallCard {...movie} key={i}/>
                    })}
                </div>
           
        )
    }
}

export default ContentRowTotals;