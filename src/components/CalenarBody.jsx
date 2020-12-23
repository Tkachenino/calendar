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

export default CalendarBody;