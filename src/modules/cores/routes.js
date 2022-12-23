import infoRouter from '../info/Routes';
import newRouter from '../newItem/Routes';
import mathRouter from '../math/Routes';
import jsonRouter from '../json/Routes';
import homeRouter from '../home/Routes';
import userRouter from '../User/Routes';

export default function routes(app) {
  app.use('/', homeRouter);
  app.use('/info', infoRouter);
  app.use('/new', newRouter);
  app.use('/math', mathRouter);
  app.use('/json', jsonRouter);
  app.use('/user', userRouter);
}
