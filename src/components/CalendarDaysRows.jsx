import PropTypes from 'prop-types'

const CalendarDaysRows = ({day}) => {
  return (     
    <td className={(!day.isCurrectMonth && "ui-datepicker-other-month") || (day.isCurrectDay && "ui-datepicker-today") || ''}>{day.day}</td>
  )  
}

CalendarDaysRows.propTypes = {
  day: PropTypes.shape({
    day: PropTypes.number,
    isCurrectDay: PropTypes.bool,
    isCurrectMonth: PropTypes.bool
  })
}

export default CalendarDaysRows;