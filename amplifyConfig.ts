// amplifyConfig.ts
import { Amplify } from 'aws-amplify';
import {secret } from '@aws-amplify/backend';
// path to the file the sandbox just generated:
import outputs from './amplify/amplify_outputs.json';

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://6tgwnqdj6je23laqw2hl5zxb2u.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: secret("apiKey")
    }
  }
}, outputs);