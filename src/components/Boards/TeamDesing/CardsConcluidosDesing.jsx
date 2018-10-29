import React, { Component } from 'react'
import api from '../../../service/api'


const cardConcluido = "5bd0af224f712f0e5b40b338"
   


export class CardsConcluidosDesing extends Component {
    state = {
        cards: []
         
    }

    componentDidMount(){
        this.load();
        
    } 

    load = async () => {
        const card = await api.get(`/lists/${cardConcluido}/cards` ,{
            params: {
                key:'675c4bc27d36b1bff30c1889b1305787',
                token: '4f32f44c9664bb0a13f6e073c5d13176e5bddc8a704947d0018bb664c00b156e'
            }
            
        })
        
      this.setState({ cards: card.data})

    }
render(){

    return(
        <div>
            {this.state.cards.length}
        </div>
    )
}
           
}           

export default CardsConcluidosDesing