import PropTypes from 'prop-types';
import CalendarDaysRows from './CalendarDaysRows';

const CalendarBody = ({calendar}) => {
  return (
    <tbody>
    { 
      calendar.map((week, idx) => (
        <tr key={`${idx} + ${week}`}>
          {week.map(day => <CalendarDaysRows key={`${day.day} + ${day.isCurrectMonth}`} day={day} />)}
        </tr>
      ))
    }
    </tbody>
  )
};

CalendarBody.propTypes = {
  calendar: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    isCurrectDay: PropTypes.bool,
    isCurrectMonth: PropTypes.bool
  })))
};

export default CalendarBody;