const CalendarDaysRows = ({day}) => {
  return (     
    <td className={(!day.isCurrectMonth && "ui-datepicker-other-month") || (day.isCurrectDay && "ui-datepicker-today") || ''}>{day.day}</td>
  )  
}

export default CalendarDaysRows;