import { ServiceRegistration as TServiceRegistration } from "../api/serviceRegistration/ServiceRegistration";

export const SERVICEREGISTRATION_TITLE_FIELD = "id";

export const ServiceRegistrationTitle = (
  record: TServiceRegistration
): string => {
  return record.id?.toString() || String(record.id);
};
