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
    date: '0828',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #1 due by 11:59pm',
  },
  {
    date: '0831',
    type: ScheduleType.Lecture,
    text: ['While Loops, For Loops', 'Variables'],
  },
  {
    date: '0901',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #2 due by 11:59pm',
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
    text: 'After Class Exercise #3 due by 11:59pm',
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
    text: 'After Class Exercise #4 due by 11:59pm',
  },
  {
    date: '0914',
    type: ScheduleType.Lecture,
    text: 'Collections of Data',
  },
  {
    date: '0915',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #5 due by 11:59pm',
  },
  {
    date: '0916',
    type: ScheduleType.Lecture,
    text: 'Functions',
  },
  {
    date: '0917',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #6 due by 11:59pm',
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
    text: 'After Class Exercise #7 due by 11:59pm',
  },
  {
    date: '0923',
    type: ScheduleType.Lecture,
    text: 'Working with strings',
  },
  {
    date: '1001',
    type: ScheduleType.ProblemSet,
    text: 'Problem Set #1 due by 11:59pm',
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
    date: '1003',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #8 due by 11:59pm',
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
    text: 'After Class Exercise #9 due by 11:59pm',
  },
  {
    date: '1012',
    type: ScheduleType.Lecture,
    text: 'Visualizations: Heat maps and location-based maps',
  },
  {
    date: '1014',
    type: ScheduleType.Lecture,
    text: ['Intro to working with data', 'Files and file systems, CSV files'],
  },
  {
    date: '1015',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #10 due by 11:59pm',
  },
  {
    date: '1018',
    type: ScheduleType.ProblemSet,
    text: 'Problem Set #2 due by 11:59pm',
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
    text: ['Loading data into Pandas', 'Data cleaning'],
  },
  {
    date: '1022',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #11 due by 11:59pm',
  },
  {
    date: '1026',
    type: ScheduleType.Lecture,
    text: ['Finishing up dates', 'Exploring data'],
  },
  {
    date: '1028',
    type: ScheduleType.Lecture,
    text: 'Selecting and filtering data',
  },
  {
    date: '1029',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #12 due by 11:59pm',
  },
  {
    date: '1101',
    type: ScheduleType.Midterm,
    text: 'Midterm Project due by 11:59pm',
  },
  {
    date: '1102',
    type: ScheduleType.Quiz,
    text: 'Quiz 5',
  },
  {
    date: '1102',
    type: ScheduleType.Lecture,
    text: ['Missing values', 'Creating new columns'],
  },
  {
    date: '1103',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #13 due by 11:59pm',
  },
  {
    date: '1104',
    type: ScheduleType.Lecture,
    text: 'Sorting and modifying data in Pandas',
  },
  {
    date: '1106',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #14 due by 11:59pm',
  },
  {
    date: '1109',
    type: ScheduleType.Lecture,
    text: ['Data analysis', 'Descriptive Statistics'],
  },
  {
    date: '1110',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #15 due by 11:59pm',
  },
  {
    date: '1111',
    type: ScheduleType.Lecture,
    text: 'Pivot tables',
  },
  {
    date: '1112',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #16 due by 11:59pm',
  },
  {
    date: '1113',
    type: ScheduleType.ProblemSet,
    text: 'Problem Set #3 due by 11:59pm',
  },
  {
    date: '1117',
    type: ScheduleType.Quiz,
    text: 'Quiz 6',
  },
  {
    date: '1116',
    type: ScheduleType.Lecture,
    text: 'Pivot tables',
  },
  {
    date: '1117',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #17 due by 11:59pm',
  },
  {
    date: '1118',
    type: ScheduleType.Lecture,
    text: 'Regression',
  },

  {
    date: '1123',
    type: ScheduleType.NoLecture,
    text: 'Thanksgiving Break',
  },
  {
    date: '1125',
    type: ScheduleType.NoLecture,
    text: 'Thanksgiving Break',
  },

  {
    date: '1130',
    type: ScheduleType.Lecture,
    text: 'Intro to robotic process automation (RPA)',
  },
  {
    date: '1202',
    type: ScheduleType.Lecture,
    text: 'UiPath software for RPA',
  },
  {
    date: '1203',
    type: ScheduleType.ProblemSet,
    text: 'Problem Set #4 due by 11:59pm',
  },
  {
    date: '1203',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #18 due by 11:59pm',
  },

  {
    date: '1207',
    type: ScheduleType.Quiz,
    text: 'Quiz 7',
  },
  {
    date: '1207',
    type: ScheduleType.Lecture,
    text: 'For loops and if statements in RPA',
  },
  {
    date: '1208',
    type: ScheduleType.AfterClassAssignment,
    text: 'After Class Exercise #19 due by 11:59pm',
  },
  {
    date: '1209',
    type: ScheduleType.Lecture,
    text: 'Work on final project in class',
  },
  {
    date: '1212',
    type: ScheduleType.Final,
    text: 'Final Project due by 11:59pm',
  },
];

// Sort the events list by date
events.sort((a, b) => (a.date > b.date ? 1 : -1));

export const lectureNumberByDate = events
  .filter((evt) => evt.type === ScheduleType.Lecture)
  .reduce((acc, evt, index) => {
    acc[evt.date] = index + 1;

    return acc;
  }, {});

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
