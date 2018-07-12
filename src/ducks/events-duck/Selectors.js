export const selectEventsList = state => state.events.eventsList;
export const selectTagsList = state => state.events.tags;

export const selectTagForFilter = state => state.events.tagForFilter;

export const selectFiltredEventsList = state => {
  if (!state.events.tagForFilter) {
    return state.events.eventsList;
  }

  return state.events.eventsList.filter(el => {
    if (el.tags) {
      return el.tags.includes(Number(state.events.tagForFilter));
    }
  });
};

export const addEventRes = state => {
  return state.events.postRequestRes;
};
