export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('donnelljenkins/aurelia-pagination')
    .plugin('donnelljenkins/aurelia-datagrid');

  aurelia.start()
    .then(() => aurelia.setRoot());
}
