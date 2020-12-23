import { weeks } from '../utils/dictonary';

const CalendarWeekDaysRow = () => {
  return (
    <tr>
      {
        Object.values(weeks).map(day => (
          <th scope="col" key={day.short} title={day.short}>{day.short}</th>
         ))
      }
    </tr>
  )
}

export default CalendarWeekDaysRow;