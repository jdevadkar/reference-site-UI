// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  environmentName: 'Dev',
  domain : '.client1.com',

  appUrl: 'http://localhost:4200',
  // apiUrl: 'http://172.30.24.20:9090'
  apiUrl: 'http://localhost:9090',
  // errorPageUrl: 'http://localhost:4200/',
  // apiTokenUrl: 'http://localhost:5000/token'
};
