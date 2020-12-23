import * as dayjs from 'dayjs';

const getCalendarData = (props) => {
  const data = dayjs(props);
  
  const nowYear = data.year();
  const nowMonth = data.month() + 1;
  const today =  data.date();
  const nowWeekDay = data.day();
  const daysInNowMonth = data.daysInMonth();
  const firstDay = dayjs(`${nowYear}-${nowMonth}-01`).day() === 0 ? 6 : dayjs(`${nowYear}-${nowMonth}-01`).day() - 1;
  
  const prevYear = nowMonth > 1 ? nowYear :  nowYear - 1;
  const prevMonth = nowMonth > 1 ? nowMonth : 12;
  const prevData = dayjs(`${prevYear}-${prevMonth}`);
  const prevDaysInMonth = prevData.daysInMonth();
 
  const nowMonthArray = Array.from({length: daysInNowMonth}, (v, k) => {
    return {
      day: k + 1,
      isCurrectMonth: true,
      isCurrectDay: today === k + 1
    } 
  });

  const prevMonthArray = Array.from({length: firstDay}, (v, k) => {
    return {
      day:  k + (prevDaysInMonth - firstDay) + 1,
      isCurrectMonth: false,
      isCurrectDay: false
    }
  });

  const rawCalendar = [...prevMonthArray, ...nowMonthArray];

  const durationNextMonth = rawCalendar.length % 7 === 0 ?  0 :  7 - rawCalendar.length % 7;
  const nextMonthArray = Array.from({length: durationNextMonth}, (v, k) =>  {
    return {
      day:  k + 1,
      isCurrectMonth: false,
      isCurrectDay: false
    }
  });

  const fullRawCalendar = [...rawCalendar, ...nextMonthArray];

  const weeks = fullRawCalendar.length / 7;
  let calendar = [];
  for (let i = 0; i < weeks; i++) {
    calendar[i] = fullRawCalendar.slice(i * 7, (i + 1) * 7);
  }

  return {
    year: nowYear,
    month: nowMonth,
    day: today,
    week: nowWeekDay,
    calendar
  }
}

export {getCalendarData}