import { createStore } from 'vuex'
let modules = {}
// Vite 支持 Glob 导入 https://vitejs.cn/guide/features.html#glob-%E5%AF%BC%E5%85%A5
// 导入 modules 下面的 所有 .ts文件
const modulesFiles = import.meta.globEager("./modules/*.ts")
for (const path in modulesFiles) {
	const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
	modules = { ...modules, [moduleName]: modulesFiles[path].default }
}
export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules
})