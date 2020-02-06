import promise from 'promise/lib/es6-extensions';
import rejectionTracking from 'promise/lib/rejection-tracking';

// Separated from other polyfills for import()
if (typeof Promise === 'undefined') {
  rejectionTracking.enable();
  window.Promise = promise;
}
