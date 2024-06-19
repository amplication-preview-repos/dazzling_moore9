import { ServiceRegistrationWhereInput } from "./ServiceRegistrationWhereInput";
import { ServiceRegistrationOrderByInput } from "./ServiceRegistrationOrderByInput";

export type ServiceRegistrationFindManyArgs = {
  where?: ServiceRegistrationWhereInput;
  orderBy?: Array<ServiceRegistrationOrderByInput>;
  skip?: number;
  take?: number;
};
