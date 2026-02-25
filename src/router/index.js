import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PartnerView from '../views/PartnerView.vue'
import ContactView from '../views/ContactView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/sobre', name: 'about', component: AboutView },
    { path: '/seja-parceiro', name: 'partner', component: PartnerView },
    { path: '/quero/orcamento', name: 'contact', component: ContactView },
    { path: '/produto/:id', name: 'product-detail', component: ProductDetailView },
    { path: '/produtos', name: 'products', component: ProductsView },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router