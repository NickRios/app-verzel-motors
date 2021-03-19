import { container } from "tsyringe";

import IAppointmentsRepository from "../modules/appointments/repositories/IAppointmentsRepository";
import AppointmentsRepository from "../modules/appointments/typeorm/repositories/AppointmentsRepository";

import IUsersRepository from "../modules/users/repositories/IUsersRepository";
import UsersRepository from "../modules/users/typeorm/repositories/UsersRepository";

/* import IUserTokensRepository from "../modules/users/repositories/IUserTokensRepository";
import UserTokensRepository from "../modules/users/typeorm/repositories/UserTokensRepository";
 */


container.registerSingleton<IAppointmentsRepository>(
  "AppointmentsRepository",
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);

