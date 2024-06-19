/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ServiceRegistration as PrismaServiceRegistration,
} from "@prisma/client";

export class ServiceRegistrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ServiceRegistrationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.serviceRegistration.count(args);
  }

  async serviceRegistrations(
    args: Prisma.ServiceRegistrationFindManyArgs
  ): Promise<PrismaServiceRegistration[]> {
    return this.prisma.serviceRegistration.findMany(args);
  }
  async serviceRegistration(
    args: Prisma.ServiceRegistrationFindUniqueArgs
  ): Promise<PrismaServiceRegistration | null> {
    return this.prisma.serviceRegistration.findUnique(args);
  }
  async createServiceRegistration(
    args: Prisma.ServiceRegistrationCreateArgs
  ): Promise<PrismaServiceRegistration> {
    return this.prisma.serviceRegistration.create(args);
  }
  async updateServiceRegistration(
    args: Prisma.ServiceRegistrationUpdateArgs
  ): Promise<PrismaServiceRegistration> {
    return this.prisma.serviceRegistration.update(args);
  }
  async deleteServiceRegistration(
    args: Prisma.ServiceRegistrationDeleteArgs
  ): Promise<PrismaServiceRegistration> {
    return this.prisma.serviceRegistration.delete(args);
  }
}
