import * as graphql from "@nestjs/graphql";
import { ServiceRegistrationResolverBase } from "./base/serviceRegistration.resolver.base";
import { ServiceRegistration } from "./base/ServiceRegistration";
import { ServiceRegistrationService } from "./serviceRegistration.service";

@graphql.Resolver(() => ServiceRegistration)
export class ServiceRegistrationResolver extends ServiceRegistrationResolverBase {
  constructor(protected readonly service: ServiceRegistrationService) {
    super(service);
  }
}
