export class GroupKtIsoFilterStrategy {
  constructor(groupKtService) {
    this.service = groupKtService;
  }

  apply(items, filter) {
    return this.service.search(filter.value)
      .then(data => {
        return data.RestResponse.result;
      });
  }
}
