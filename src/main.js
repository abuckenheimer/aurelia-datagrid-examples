export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('donnelljenkins/aurelia-pagination')
    .plugin('donnelljenkins/aurelia-datagrid');

  aurelia.start()
    .then(() => aurelia.setRoot());
}
