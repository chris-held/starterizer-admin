/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .constant('malarkey', malarkey)
    .constant('apiUrl', "http://localhost:1337")
    .constant('moment', moment);

})();
