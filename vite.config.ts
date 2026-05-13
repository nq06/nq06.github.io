import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👇 关键配置：设置基础路径为 '/'
  base: '/'
})
