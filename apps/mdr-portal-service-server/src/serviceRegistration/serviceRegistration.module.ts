import { Module } from "@nestjs/common";
import { ServiceRegistrationModuleBase } from "./base/serviceRegistration.module.base";
import { ServiceRegistrationService } from "./serviceRegistration.service";
import { ServiceRegistrationController } from "./serviceRegistration.controller";
import { ServiceRegistrationResolver } from "./serviceRegistration.resolver";

@Module({
  imports: [ServiceRegistrationModuleBase],
  controllers: [ServiceRegistrationController],
  providers: [ServiceRegistrationService, ServiceRegistrationResolver],
  exports: [ServiceRegistrationService],
})
export class ServiceRegistrationModule {}
