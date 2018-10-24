import React, { Component } from "react"
import moment from "moment"
import 'moment/locale/pt-br'

import Timeline from "react-calendar-timeline"
import './Timeline.css'
import { Button , Row , Grid, Col} from 'react-bootstrap';

var keys = {
    groupIdKey: "id",
    groupTitleKey: "title",
    groupRightTitleKey: "rightTitle",
    itemIdKey: "id",
    itemTitleKey: "title",
    itemDivTitleKey: "title",
    itemGroupKey: "group",
    itemTimeStartKey: "start",
    itemTimeEndKey: "end"
  };
  
  export default class app extends Component {
    constructor(props) {
      super(props);
  
      const  groups = [{ id: 1, title: 'Projeto 1' , start_time: moment().add(-0.5, 'hour') }, { id: 2, title: 'Projeto 2' }, { id: 3, title: 'Projeto 3' }]
      const items = [
          {
            id: 1,
            group: 1,
            title: 'Projeto 1',
            start_time: moment(),
            end_time: moment().add(1, 'hour')
          },
          {
            id: 2,
            group: 2,
            title: 'Projeto 2',
            start_time: moment().add(-0.5, 'hour'),
            end_time: moment().add(0.5, 'hour')
          },
          {
            id: 3,
            group: 1,
            title: 'Projeto 3',
            start_time: moment().add(2, 'hour'),
            end_time: moment().add(3, 'hour')
          }
      ]

      const defaultTimeStart = moment()
        .startOf("day")
        .toDate();
      const defaultTimeEnd = moment()
        .startOf("day")
        .add(1, "day")
        .toDate();
  
      this.state = {
        groups,
        items,
        defaultTimeStart,
        defaultTimeEnd
      };
    }
  
    animateScroll = invert => {
      const width = (invert ? -1 : 1) * parseFloat(this.scrollRef.style.width); // cos curve in both directions
      const duration = 2000;
  
      const startTime = performance.now();
      let lastWidth = 0;
      const animate = () => {
        let normalizedTime = (performance.now() - startTime) / duration;
        if (normalizedTime > 1) {
          // not overanimate
          normalizedTime = 1;
        }
  
        // http://www.wolframalpha.com/input/?i=plot+0.5+(1%2Bcos(%CF%80+(x-1)))*1000+from+0+to+1 --> 1000 is the simulated width
        const calculatedWidth = Math.floor(
          width * 0.5 * (1 + Math.cos(Math.PI * (normalizedTime - 1)))
        );
        this.scrollRef.scrollLeft += calculatedWidth - lastWidth;
        lastWidth = calculatedWidth;
  
        if (normalizedTime < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };
  
    onPrevClick = () => {
      this.animateScroll(true);
    };
  
    onNextClick = () => {
      this.animateScroll(false);
    };
  
    render() {
      const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;
  
      return (
        <div className="content">
          <Timeline
            scrollRef={el => (this.scrollRef = el)}
            groups={groups}
            items={items}
            keys={keys}
            sidebarContent={<div className="content center">Projetos</div>}
            itemsSorted
            itemTouchSendsClick={false}
            stackItems
            itemHeightRatio={0.75}
            showCursorLine
            canMove={false}
            canResize={false}
            defaultTimeStart={defaultTimeStart}
            defaultTimeEnd={defaultTimeEnd}
          />
   {/*        <Grid fluid>
          <Row>
          <Col sm={6} md={3}>
            <Button bsSize="small" center  onClick={this.onPrevClick}>{"< Prev"}</Button>
            <Button bsSize="small" onClick={this.onNextClick}>{"Next >"}</Button>
          </Col>
          </Row>
          </Grid> */}
          
        </div>
      );
    }
  }

