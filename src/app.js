 export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Datagrid Examples';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home/index', nav: false, title: 'Aurelia Datagrid Examples' },
      { route: 'local', name: 'local', moduleId: 'local/index', nav: true, title: 'Local Data' },
      { route: 'remote', name: 'remote', moduleId: 'remote/index', nav: true, title: 'Remote Data' }
    ]);

    this.router = router;
  }
}
