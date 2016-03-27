import 'fetch';
import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class GroupKtService {
  constructor(http) {
    this.http = http;
  }

  getAll() {
    return this.fetch(GET_ALL_URL);
  }

  search(filter) {
    return this.fetch(`${SEARCH_BY_ISO_URL}?text=${filter}`);
  }

  fetch(url) {
    return this.http.fetch(url)
      .then(response => response.json());
  }
}

const GET_ALL_URL = 'http://services.groupkt.com/country/get/all';
const SEARCH_BY_ISO_URL = 'http://services.groupkt.com/country/search';
