import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default ({ mode }) => {
    const { VITE_APP_BASE } = loadEnv(mode, process.cwd());

    return defineConfig({
        plugins: [
            vue(),
            ElementPlus(),
            AutoImport({
                imports: ['vue', 'vue-router'],
                include: [/\.js$/, /\.vue$/, /\.vue\?vue/],
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
        base: VITE_APP_BASE,
        build: {
            rollupOptions: {
                output: {
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: 'assets/static/[name]-[hash].[ext]',
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    },
                },
            },
        },
        server: {
            host: '0.0.0.0',
            port: 3000,
        },
    });
};
