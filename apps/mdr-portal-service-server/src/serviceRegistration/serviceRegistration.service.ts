import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceRegistrationServiceBase } from "./base/serviceRegistration.service.base";

@Injectable()
export class ServiceRegistrationService extends ServiceRegistrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
