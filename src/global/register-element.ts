import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElAlert,
  ElButton,
  ElForm,
  ElTabs,
  ElTabPane,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElMain
} from 'element-plus'

const components = [
  ElAlert,
  ElButton,
  ElForm,
  ElTabs,
  ElTabPane,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElMain
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
