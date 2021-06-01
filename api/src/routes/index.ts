import { Router } from 'express';

import appointmentsRouter from '../routes/appointments.routes';
import usersRouter from '../routes/users.routes'
import sessionsRouter from '../routes/sessions.routes'
import hospitalsRouter from '../routes/hospital.routes'
import specialitysRouter from '../routes/speciality.routes'

const routes = Router();

routes.use('/appointments', appointmentsRouter)
routes.use('/users' , usersRouter)
routes.use('/sessions' , sessionsRouter)
routes.use('/hospitals', hospitalsRouter)
routes.use('/specialitys', specialitysRouter)



export default routes;
