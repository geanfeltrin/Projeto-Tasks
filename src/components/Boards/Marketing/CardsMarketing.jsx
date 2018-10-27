import React, { Component } from 'react'
import api from '../../../service/api'
import Card from '../../Card/Card'
import { Grid, Row, Col, PageHeader } from "react-bootstrap"
import './style.css'




const boardMarketing = '5bd088d33995822fc367bc9d'
   


export class CardsMarketing extends Component {
    state = {
        cards: []
         
    }

    componentDidMount(){
        this.loadMarketign();
        
    } 

    loadMarketign = async () => {
        const card = await api.get(`/boards/${boardMarketing}/cards` ,{
            params: {
                key:'675c4bc27d36b1bff30c1889b1305787',
                token: '4f32f44c9664bb0a13f6e073c5d13176e5bddc8a704947d0018bb664c00b156e'
            }
        })
      this.setState({ cards: card.data})
    }

    render(){    
        const cards = this.state.cards
       
      
       return (
           <div className= "content">
           <Grid fluid>
               <Row>
              <PageHeader header="Heading" className= "ajust-text">
                  Marketing
              </PageHeader>               
                   <Col md={4}>
                       <Card
                       title= "Atividades"
                       category="Todas as atividades do Marketing"
                       stats="Updated 3 minutes ago"
                       statsIcon="fa fa-history"
                       content = {
                           <div className="table-full-width table-responsive content">
                               {cards.map(conteudo => {
                                   if(conteudo.idList === "5bd08933468e900894f7c225"){
                                       return (
                                        <table className="table">
                                        <li key={conteudo.id}>{conteudo.name}</li>
                                        </table>
                                       )
                                   }
                               })}
                           </div>
                        }                
                        />
                   </Col>

                   <Col md={4}>
                       <Card
                       title= "Em Andamento"
                       category="Backend development"
                       stats="Updated 3 minutes ago"
                       statsIcon="fa fa-history"
                       content = {
                           <div className="table-full-width table-responsive content">
                               {cards.map(conteudo => {
                                   if(conteudo.idList === "5bd0893a0a026f43ffcdeefa"){
                                       return (
                                        <table className="table">
                                        <li key={conteudo.id}>{conteudo.name}</li>
                                        </table>
                                       )
                                   }
                               })}
                           </div>
                            }                
                         />
                   </Col>
                   <Col md={4}>
                       <Card
                       title= "Pausado"
                       category="Backend development"
                       stats="Updated 3 minutes ago"
                       statsIcon="fa fa-history"
                       content = {
                           <div className="table-full-width  table-responsive content">
                               {cards.map(conteudo => {
                                   if(conteudo.idList === "5bd1f819fee38d80cff71cb4"){
                                       return (
                                        <table className="table">
                                        <li key={conteudo.id}>{conteudo.name}</li>
                                        </table>
                                       )
                                   }
                               })}
                           </div>
                          
                                }                
                        />
                        <Card
                       title= "Concluidos"
                       category="Backend development"
                       stats="Updated 3 minutes ago"
                       statsIcon="fa fa-history"
                       content = {
                           <div className="table-full-width table-responsive content">
                               {cards.map(conteudo => {
                                   if(conteudo.idList === "5bd0893dc5182a55345c8df3"){
                                       return (
                                        <table className="table">
                                        <li key={conteudo.id}>{conteudo.name}</li>
                                        </table>
                                       )
                                   }
                               })}
                           </div>
                            }             
                        />                   
                   </Col>
                   
               </Row>
           </Grid>
           </div>
          
       )
          
            
    }

}


export default CardsMarketing

