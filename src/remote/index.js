import { inject } from 'aurelia-framework';
import { GroupKtIsoFilterStrategy } from '../services/group-kt-iso-filter-strategy';
import { GroupKtService } from '../services/group-kt-service';

@inject(GroupKtService)
export class Remote {
 constructor(groupKtService) {
   this.groupKtService = groupKtService;
   this.groupKtIsoFilter = new GroupKtIsoFilterStrategy(this.groupKtService);
 }

  activate() {
    return this.groupKtService.getAll()
      .then(data => {
        this.remoteSamples = data.RestResponse.result;
      }).catch(error => {
        console.log(error);
      });
  }

  select(id) {
    alert(`Selected id: ${id}`);
  }

  rowSelected(selectionInfo) {
    // console.dir(selectionInfo);
  }
}
