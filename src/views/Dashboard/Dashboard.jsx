import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import BoardsMarketing from "components/Boards/Marketing/CardsMarketing.jsx"
import BordsDesenvolvimento from "components/Boards/Desenvolvimento/CardsDesenvolvimento.jsx"
import BordsDesign from "../../components/Boards/TeamDesing/TeamDesign"
import CardsConcluidosDesign from "../../components/Boards/TeamDesing/CardsConcluidosDesing"
import CardsConcluidosDev from "../../components/Boards/Desenvolvimento/CardsConluidosDev"
import CardsConcluidosMarketing from "../../components/Boards/Marketing/CardsConcluidosMarketing"





class Dashboard extends Component {
  
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-paint text-warning" />}
                statsText="Team Design"
                statsValue={<CardsConcluidosDesign/>}
                statsIcon={<i className="fa fa-check" />}
                statsIconText="Atividades Concluidas"
              />
             
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-success" />}
                statsText="Team Makerting"
                statsValue={<CardsConcluidosMarketing/>}
                statsIcon={<i className="fa fa-check" />}
                statsIconText="Atividades Concluidas"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-display1 text-danger" />}
                statsText="Team Dev"
                statsValue={<CardsConcluidosDev/>}
                statsIcon={<i className="fa fa-check" />}
                statsIconText="Atividades Concluidas"
              />
            </Col>
           
          </Row>
     
        <Row>
        <BoardsMarketing/>
         </Row>
         <Row>
         <BordsDesenvolvimento/>
         <BordsDesign/>
         </Row>
         
        </Grid>

      </div>
    );
  }
}

export default Dashboard;
