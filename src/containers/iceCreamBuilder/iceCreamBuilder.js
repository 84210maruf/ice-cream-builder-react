import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/iceCream/iceCream';
import classes from './iceCreamBuilder.module.css';

class iceCreamBuilder extends Component {

    state = {
        items: {},
        scoops: [],
        totalPrice: 0,
    };

    componentDidMount() {
        fetch('https://react-icecream-27260-default-rtdb.asia-southeast1.firebasedatabase.app/items.json')
        .then((Response) => Response.json())
        .then((ResponeData) => {
            this.setState({
                items: ResponeData
            });
        });
        
    };
    
    // Adding scoops
    addScoops = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);

        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop]
            }
        });
        
    };
    // Removing scoops
    removeScoops = (scoop) => {
        const { scoops, items } = this.state;

        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);
        workingScoops.splice(scoopIndex, 1);
 

        let TotalPrice=0;
        workingScoops.map((sc) => TotalPrice += items[sc] )
        
        this.setState((prevState) => {
                return {
                    scoops: workingScoops,
                    totalPrice: TotalPrice,
                };
        });
    };

    render() {
        const { items, totalPrice, scoops } = this.state;

        return (
            <div className={['container', classes.container].join(' ')}>

             <IceCream 
                items={ items } 
                scoops={ scoops } 
             />
             <Builder 
                items={ items }  
                price={ totalPrice } 
                add={this.addScoops} 
                remove={this.removeScoops} 
                scoops={ scoops }
            />
             
            </div>
        )
    }
}
export default iceCreamBuilder;