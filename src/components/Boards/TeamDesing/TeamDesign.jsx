
// boardDesenvolvimento:'5bd310b21216fe78f29812d4',
// boardProjeto: '5bd1cc1cd43ab84a005dfa25',
// boardTimeDesign: '5bd0aeded2fed00f87693a02'

import React, { Component } from 'react'
import api from '../../../service/api'
import Card from '../../Card/Card'
import { Grid, Row, Col, PageHeader } from "react-bootstrap"
import '../Marketing/style.css'




const boardTimeDesign = '5bd0aeded2fed00f87693a02'
   


export class CardsDesign extends Component {
    state = {
        cards: []
         
    }

    componentDidMount(){
        this.load();
        
    } 

    load = async () => {
        const card = await api.get(`/boards/${boardTimeDesign}/cards` ,{
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
               Time Design
              </PageHeader>               
                   <Col md={4}>
                       <Card
                       title= "Atividades"
                       category="Todas as atividades desenvolvimento"
                       stats="Updated 3 minutes ago"
                       statsIcon="fa fa-history"
                       content = {
                           <div key="test" className="table-full-width table-responsive content">
                           <ul>
                               {cards.map(conteudo => {
                                   if(conteudo.idList === "5bd0aee69146ce81f2244f0b"){
                                       return (
                                        
                                        <li key={conteudo.id}>{conteudo.name}</li>
                                        
                                       )
                                   }else{
                                          return null
                                      }
                               })}
                               </ul>
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
                           <div>
                           <ul>
                               {cards.map(conteudo => {
                                   if(conteudo.idList === "5bd0af2105fec6322fd4f235"){
                                       return (
                                        
                                        <li key={conteudo.id}>{conteudo.name}</li>
                                       
                                       )
                                      } else{
                                          return null
                                      }
                               })}
                            </ul>
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
                           <ul>
                               {cards.map(conteudo => {
                                   if(conteudo.idList === "5bd20b33a354921bb872af68"){
                                       return (
                                        
                                        <li key={conteudo.id}>{conteudo.name}</li>
                                        
                                       )
                                   }else{
                                          return null
                                      }
                               })}
                            </ul>
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
                            <ul>
                               {cards.map(conteudo => {
                                   if(conteudo.idList === "5bd0af224f712f0e5b40b338"){
                                       return (
                                       
                                        <li className="txt-concluido" key={conteudo.id}>{conteudo.name}</li>
                                        )
                                   }else{
                                          return null
                                      }
                               })}
                               </ul>
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

export default CardsDesign