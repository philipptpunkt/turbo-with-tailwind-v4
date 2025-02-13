import type { Config } from "tailwindcss"
import sharedConfig from "@turbo-with-tailwind-v4/tailwind-config"

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
}

export default config
