const setWeather = (state, { weatherData }) => {
  return {
    ...state,
    weatherData
  }
};

const actions = {
  setWeather
}

export const reducer = (state, action) => {
  if (action && action.type && actions[action.type]) {
    return actions[action.type](state, action)
  }
  return { ...state }
}
