import {defineConfig} from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "tailwindcss"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss()]
        }
    },
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.tsx"),
            name: "ReactPersianFormBuilder",
            fileName: (format) => `react-persian-form-builder.${format}.js`,
            formats: ["es", "umd"],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
})
