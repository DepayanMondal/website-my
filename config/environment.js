'use strict';
require('dotenv').config();

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'website-my',
    environment: 'development',
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV.BASE_API_URL = 'http://localhost:4000';
  ENV.MIXPANEL_TOKEN = process.env.MIXPANEL_TOKEN || 'DUMMY_TOKEN';
  ENV.ANDROID_GITHUB_URL =
    'https://play.google.com/store/apps/details?id=com.github.android';
  ENV.RDS_ANDROID_SCHEME = 'app://realdevsquad.com';

  if (environment === 'development') {
    ENV.BASE_API_URL = 'http://localhost:4000';
    ENV.STATUS_SITE = 'https://staging-status.realdevsquad.com';
    ENV.MIXPANEL_TOKEN = 'TEST_TOKEN';
    ENV['ember-cli-mirage'] = {
      enabled: false,
    };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    ENV.MIXPANEL_TOKEN = 'TEST_TOKEN';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
    //mock server url
    ENV.BASE_API_URL = '/mock-api';
    ENV.STATUS_SITE = 'http://localhost:3000';
  }

  if (environment === 'staging') {
    ENV.BASE_API_URL = 'https://staging-api.realdevsquad.com';
    ENV.STATUS_SITE = 'https://staging-status.realdevsquad.com';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.BASE_API_URL = 'https://api.realdevsquad.com';
    ENV.STATUS_SITE = 'https://status.realdevsquad.com';
  }

  return ENV;
};
