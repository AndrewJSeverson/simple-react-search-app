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
