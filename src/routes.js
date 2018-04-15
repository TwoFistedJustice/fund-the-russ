import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';

import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';



import Narrative01Help from './pages/narrative-01-help.vue';
import Narrative02Backstory from './pages/narrative-02-backstory.vue';
import Narrative03Needs from './pages/narrative-03 needs.vue';
import Narrative04Goal from './pages/narrative-04-goal.vue';
import Narrative05Confidence from './pages/narrative-05-confidence.vue';
import Narrative06Why from './pages/narrative-06- why.vue';

import AmazonGeneral from './pages/AmazonLinks/Amazon-01-General.vue';
import AmazonMoto from './pages/AmazonLinks/Amazon-02-MotorcyleTools.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },



  {
    path: '/help/',
    component: Narrative01Help,
  },
  {
    path: '/backstory/',
    component: Narrative02Backstory,
  },
  {
    path: '/my-needs/',
    component: Narrative03Needs,
  },
  {
    path: '/my-goal/',
    component: Narrative04Goal,
  },
  {
    path: '/omg-wth/',
    component: Narrative05Confidence,
  },
  {
    path: '/why-hack-reactor/',
    component: Narrative06Why,
  },

  {
    path: '/general-recommendations/',
    component: AmazonGeneral,
  },

  {
    path: '/motorcyle-recommendations/',
    component: AmazonMoto,
  },



  //This has to go at the bottom
  {
    path: '(.*)',
    component: NotFoundPage,
  },

];
