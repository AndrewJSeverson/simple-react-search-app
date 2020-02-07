// ERROR REDUCER
export const emptyErrors = { error: { errorMessages: [] } };
export const hasErrors = { error: { errorMessages: [{
  id: 1,
  message: 'error',
  dismissable: true,
}] } };

// SUCCESS REDUCER
export const emptySuccesses = { success: { successMessages: [] } };
export const hasSuccesses = { success: { successMessages: [{
  id: 1,
  message: 'error',
  dismissable: true,
}] } };

// WELCOME REDUCER
export const userIsWelcomed = { welcome: { hasBeenWelcomed: true } };
export const userIsNotWelcomed = { welcome: { hasBeenWelcomed: false } };

// SEARCH REDUCER
export const defaultSearch = { search: {
  searchResults: [],
  isEmptySearch: false,
  isSearching: false,
  searchingError: false,
} };
export const searchingSearch = { search: {
  searchResults: [],
  isEmptySearch: false,
  isSearching: true,
  searchingError: false,
} };
export const resultWithAllData = {
  id: 26476,
  name: 'Oslo S',
  language: 'Norwegian',
  genres: ['Drama'],
  officialSite: 'http://www.dplay.no/oslo-s/',
  image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/104/260530.jpg' },
  summary: "<p>The documentary series <b>Oslo S</b> gives us a close up look at the guards who provide security at one of the country's most deprived areas. Over 150,000 people pass through the Olso S station every day. In addition to the guards, we are also get a close up look at the other users of the station.</p>",
};
export const resultWithMissingData = {
  id: 26476,
  name: 'Oslo S',
  language: 'Norwegian',
  genres: [],
  officialSite: null,
  image: { },
  summary: "<p>The documentary series <b>Oslo S</b> gives us a close up look at the guards who provide security at one of the country's most deprived areas. Over 150,000 people pass through the Olso S station every day. In addition to the guards, we are also get a close up look at the other users of the station.</p>",
};
export const searchResultAllData = { search: {
  searchResults: [resultWithAllData],
  isEmptySearch: false,
  isSearching: false,
  searchingError: false,
} };
export const searchResultMissingData = { search: {
  searchResults: [resultWithMissingData],
  isEmptySearch: false,
  isSearching: false,
  searchingError: false,
} };
