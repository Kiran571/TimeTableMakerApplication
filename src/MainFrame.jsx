


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, Month, Inject, ViewDirective, ViewsDirective, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule';


class MainFrame extends React.Component {
    // constructor() {
    //     super(...arguments);
    //     this.data = [{
    //             Id: 2,
    //             Subject: 'Paris',
    //             StartTime: new Date(2018, 1, 15, 10, 0),
    //             EndTime: new Date(2018, 1, 15, 12, 30),
    //             IsAllDay: false,
    //             // RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
    //         }];
    // }
  
  localData = [{
      Id: 1,
      Subject: 'Paris',
      StartTime: new Date(2018, 1, 15, 10, 0),
      EndTime: new Date(2018, 1, 15, 12, 30),
      // IsAllDay: false
      location: 'mandup'
  },
  {
      Id: 2,
      Subject: 'Mumbai',
      StartTime: new Date(2018, 1, 16, 10, 0),
      EndTime: new Date(2018, 1, 16, 12, 30),
      // IsAllDay: false
      location: 'Thane'
  }];
    render() {
      return <ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: this.localData }} >
        <ViewsDirective>
          <ViewDirective option='Day' startHour='8:00' endHour='19:00'></ViewDirective>
          <ViewDirective option='Week' isSelected={true}></ViewDirective>
          <ViewDirective option='Month'></ViewDirective>
        </ViewsDirective>
    <Inject services={[Day, Week, Month, DragAndDrop, Resize ]} />
    </ScheduleComponent>
  };
};
export default MainFrame;
// ReactDOM.render(<App />, document.getElementById('schedule'));