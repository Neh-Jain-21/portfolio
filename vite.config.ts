import * as path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig(({ command }) => {
	const config = {
		plugins: [reactRefresh()],
		resolve: {
			alias: {
				src: path.resolve("src/"),
			},
		},
		esbuild: {
			jsxInject: `import React from 'react'`,
		},
		server: { host: true },
		base: "/",
	};

	if (command !== "serve") config.base = "/portfolio/";

	return config;
});
