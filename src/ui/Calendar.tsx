import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"

const MyCalendar = () => {
  const localizer = momentLocalizer(moment)

  // Replace this with your task data
  const events = [
    {
      title: "Task 1",
      start: new Date(2023, 10, 1),
      end: new Date(2023, 10, 2),
    },
    // Add more events as needed
  ]

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}

export default MyCalendar
