import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // テスト環境でnext.config.jsと.envファイルを読み込むためにNext.jsアプリのパスを提供します
  dir: './',
})
 
// Jestに渡すカスタム設定を追加
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // 各テスト実行前に追加のセットアップオプションを追加
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfigはこの方法でエクスポートされ、next/jestが非同期のNext.js設定を読み込めるようにします
export default createJestConfig(config)