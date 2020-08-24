import _ from 'lodash';
import { ScheduleType } from 'typings/schedule';

const events = [
  {
    date: '0824',
    type: ScheduleType.Lecture,
    text: 'Introductions and course overview',
  },
  {
    date: '0826',
    type: ScheduleType.Lecture,
    text: ['Intro to programming', 'If statements'],
  },
  {
    date: '0827',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #1 Due by 11:59pm',
  },
  {
    date: '0831',
    type: ScheduleType.Lecture,
    text: ['While Loops, For Loops', 'Variables'],
  },
  {
    date: '0901',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #2 Due by 11:59pm',
  },
  {
    date: '0902',
    type: ScheduleType.Quiz,
    text: 'Quiz 1',
  },
  {
    date: '0902',
    type: ScheduleType.Lecture,
    text: 'Data Types',
  },
  {
    date: '0903',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #3 Due by 11:59pm',
  },
  {
    date: '0907',
    type: ScheduleType.NoLecture,
    text: 'Labor Day - No Classes',
  },
  {
    date: '0909',
    type: ScheduleType.Lecture,
    text: ['Operators', 'The print function'],
  },
  {
    date: '0910',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #4 Due by 11:59pm',
  },
  {
    date: '0914',
    type: ScheduleType.Lecture,
    text: 'Collections of Data',
  },
  {
    date: '0915',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #5 Due by 11:59pm',
  },
  {
    date: '0916',
    type: ScheduleType.Lecture,
    text: 'Functions',
  },
  {
    date: '0917',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #6 Due by 11:59pm',
  },
  {
    date: '0921',
    type: ScheduleType.Quiz,
    text: 'Quiz 2',
  },
  {
    date: '0921',
    type: ScheduleType.Lecture,
    text: 'Functions',
  },
  {
    date: '0922',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #7 Due by 11:59pm',
  },
  {
    date: '0923',
    type: ScheduleType.Lecture,
    text: 'Working with strings',
  },
  {
    date: '0927',
    type: ScheduleType.ProblemSet,
    text: 'Problem Set #1 Due by 11:59pm',
  },
  {
    date: '0928',
    type: ScheduleType.Lecture,
    text: 'Visualizations: Bar charts and histograms',
  },
  {
    date: '0930',
    type: ScheduleType.Lecture,
    text: 'Visualizations: Histograms and box plots',
  },
  {
    date: '1002',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #8 Due by 11:59pm',
  },
  {
    date: '1005',
    type: ScheduleType.Quiz,
    text: 'Quiz 3',
  },
  {
    date: '1005',
    type: ScheduleType.Lecture,
    text: 'Visualizations: Line charts and scatter plots',
  },
  {
    date: '1007',
    type: ScheduleType.Lecture,
    text: 'Visualizations: Pie charts and heat maps',
  },
  {
    date: '1008',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #9 Due by 11:59pm',
  },
  {
    date: '1012',
    type: ScheduleType.Lecture,
    text: 'Visualizations: Heat maps and location-based maps',
  },
  {
    date: '1014',
    type: ScheduleType.Lecture,
    text: 'Intro to working with data',
  },
  {
    date: '1014',
    type: ScheduleType.Lecture,
    text: 'Files and file systems, CSV files',
  },
  {
    date: '1015',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #10 Due by 11:59pm',
  },
  {
    date: '1018',
    type: ScheduleType.ProblemSet,
    text: 'Problem Set #2 Due by 11:59pm',
  },
  {
    date: '1019',
    type: ScheduleType.Quiz,
    text: 'Quiz 4',
  },
  {
    date: '1019',
    type: ScheduleType.Lecture,
    text: 'Intro to Pandas',
  },
  {
    date: '1021',
    type: ScheduleType.Lecture,
    text: 'Loading data into Pandas',
  },
  {
    date: '1021',
    type: ScheduleType.Lecture,
    text: 'Data cleaning',
  },
  {
    date: '1022',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #11 Due by 11:59pm',
  },
];

const organizeEventsByDate = (events) => {
  const eventsByDate = {};

  events.forEach((event) => {
    if (!eventsByDate.hasOwnProperty(event.date)) {
      eventsByDate[event.date] = {};
    }

    const dateEvents = eventsByDate[event.date];

    dateEvents[event.type] = _.isString(event.text) ? [event.text] : event.text;
  });

  return eventsByDate;
};

export const eventsByDate = organizeEventsByDate(events);
