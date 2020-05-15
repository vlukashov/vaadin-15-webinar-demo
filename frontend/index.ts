import { Flow } from '@vaadin/flow-frontend/Flow';
import { Router } from '@vaadin/router';

import './global-styles';
import './views/main/main-view';
import './views/cardlist/card-list-view';
import './views/form/form-view';

const { serverSideRoutes } = new Flow({
  imports: () => import('../target/frontend/generated-flow-imports')
});

const routes = [
  {
    path: '',
    component: 'main-view',
    children: [
      {path: 'card-list', component: 'card-list-view'},
      {path: 'form', component: 'form-view'},
      ...serverSideRoutes
    ]
  },
];

const router = new Router(document.querySelector('#outlet'));
router.setRoutes(routes);
