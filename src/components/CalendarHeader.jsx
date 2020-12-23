import {weeks, months} from '../utils/dictonary';

const CalendarHeader = ({data}) => {
  return (
    <>
     <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weeks[data.week].full}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{data.day}</div>
          <div className="ui-datepicker-material-month">{months[data.month].v2}</div>
          <div className="ui-datepicker-material-year">{data.year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months[data.month].v1}</span>&nbsp;<span className="ui-datepicker-year">{data.year}</span>
        </div>
      </div>
    </>
  )
};

export default CalendarHeader;