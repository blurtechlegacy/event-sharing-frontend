export const selectEventsList = state => state.events.eventsList;
export const selectTagsList = state => state.events.tags;

// function compare(taskA, taskB) {
//   return taskA.startTime - taskB.startTime;
// }

// export const selectSortEventList = state => {
//   console.log(state.events.typeOfSort);
//   console.log(state.events.eventsList);
//   return [...state.events.eventsList].sort(compare).reverse();
//   return "select";
// };
export const selectTagForFilter = state => state.events.tagForFilter;
export const selectFiltredEventsList = state => {
  if (!state.events.tagForFilter) {
    console.log("empty");
    return state.events.eventsList;
  }
  return state.events.eventsList.filter(el => {
    return el.tags.includes(state.events.tagForFilter);
  });
};
