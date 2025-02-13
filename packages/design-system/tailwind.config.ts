import type { Config } from "tailwindcss"
import sharedConfig from "@turbo-with-tailwind-v4/tailwind-config"

const config: Pick<Config, "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
}

export default config
