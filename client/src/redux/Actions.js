import { OPEN_MENU, CHANGE_PAGE, LINE_CHART, PIE_CHART, BAR_CHART } from './Constants.js';

// CHANGE A CHART ______________________________________________________________
export const setPage = (text) => ({
  type: CHANGE_PAGE,
  payload: text
})

// OPEN CLOSE MENU _____________________________________________________________
export const openMenu = (boolean) => ({
  type: OPEN_MENU,
  payload: boolean,
})

// LINE_CHART __________________________________________________________________
export const lineChart = (data) => ({
  type: LINE_CHART,
  payload: data
})

// PIE_CHART ___________________________________________________________________
export const pieChart = (data, years) => ({
  type: PIE_CHART,
  payload: data
})

// BAR_CHART ___________________________________________________________________
export const barChart = (data) => ({
  type: BAR_CHART,
  payload: data
})
