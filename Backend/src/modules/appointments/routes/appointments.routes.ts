import { Router } from 'express';

import ensureAuthenticated from '../../users/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController'

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', (req, res) => {
    return res.send('ok')
});

export default appointmentsRouter;