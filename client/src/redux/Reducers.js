import { CHANGE_PAGE, OPEN_MENU, LINE_CHART, PIE_CHART, BAR_CHART, } from './Constants.js';

// PAGE MENU ___________________________________________________________________
const menu = {
  isOpen: false,
  page: 'Line-chart',
}

export const pageMenu = (state = menu, action={} ) => {
  switch (action.type) {
    case OPEN_MENU:
      return {...state, isOpen: action.payload}
    case CHANGE_PAGE:
      return {...state, page: action.payload}
    default:
      return state;
  }
}


// UPDATE DATA IN CHARTS _______________________________________________________
const data = {
  LineChart: [],
  PieChart: [],
  BarChart: [],
}

export const chartData = (state = data, action = {} ) => {
  switch (action.type) {
    case LINE_CHART:
      return {...state, LineChart: action.payload}
    case PIE_CHART:
      return {...state, PieChart: action.payload}
    case BAR_CHART:
      return {...state, BarChart: action.payload}
    default:
      return state;
  }
}
