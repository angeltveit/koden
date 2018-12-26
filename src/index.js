import { bootstrap } from '@scoutgg/widgets'
import { vdom as renderer } from '@scoutgg/widgets/cjs/renderers/vdom'
import rerenderPlugin from '@scoutgg/widgets/cjs/plugins/rerender.js'
import { emit } from './utils'
import patch from 'virtual-dom/patch'
import h from 'virtual-dom/h'
import diff from 'virtual-dom/diff'


// Import the components you want to use
import './pages/home/home'


if(module.hot) {
  module.hot.accept()
}

const routerElem = document.body.querySelector('kode-home')
if(!routerElem) {
 const element = document.createElement('kode-home')
  document.body.appendChild(element)
}
// Bootstrap Widgets (Start it)
bootstrap([
  emit,
  renderer({ patch, VNode: h, diff}),
  rerenderPlugin({}),
])
