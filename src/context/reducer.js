const setWeather = (state, { weather }) => {
  state.weatherData = weather;
  return { ...state }
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
