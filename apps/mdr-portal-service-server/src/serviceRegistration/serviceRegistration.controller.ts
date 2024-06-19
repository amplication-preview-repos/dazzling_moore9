import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceRegistrationService } from "./serviceRegistration.service";
import { ServiceRegistrationControllerBase } from "./base/serviceRegistration.controller.base";

@swagger.ApiTags("serviceRegistrations")
@common.Controller("serviceRegistrations")
export class ServiceRegistrationController extends ServiceRegistrationControllerBase {
  constructor(protected readonly service: ServiceRegistrationService) {
    super(service);
  }
}
