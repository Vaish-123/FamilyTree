import { Injectable, Injector } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from "../core/services/alert.service";
import { SharedService } from "./sharedService.service";
import { UtilsServiceComponent } from "./utils/utils.service";

@Injectable({
  providedIn: 'root'
})

export abstract class AppComponentBase {

  spinnerService: NgxSpinnerService;
  alertService: AlertService;
  sharedService: SharedService;
  utilsServiceComponent: UtilsServiceComponent

  constructor(injector: Injector) {
    this.alertService = injector.get(AlertService);
    this.spinnerService = injector.get(NgxSpinnerService);
    this.sharedService = injector.get(SharedService);
    this.utilsServiceComponent = injector.get(UtilsServiceComponent);
  }

}
