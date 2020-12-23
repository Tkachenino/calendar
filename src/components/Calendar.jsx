import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalenarBody';
import CalendarWeekDaysRow from './CalendarWeekDaysRow';

import { getCalendarData } from '../utils/dateTransform';

const Calendar = ({date}) => {
  const data = getCalendarData(date);
    return (
      <div className="ui-datepicker">
        <CalendarHeader data={data}/>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
          </colgroup>
          <thead>
            <CalendarWeekDaysRow />
          </thead>
           <CalendarBody calendar={data.calendar}/>
        </table>
      </div>
  )
}

export default Calendar;