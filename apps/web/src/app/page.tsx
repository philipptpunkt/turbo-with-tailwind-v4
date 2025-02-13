import { Colors } from "@turbo-with-tailwind-v4/ui/Colors"
import { Button } from "@turbo-with-tailwind-v4/design-system/Button"
import { FaGithub, FaMedium } from "react-icons/fa"

export default function Page() {
  return (
    <main>
      <div className="relative flex justify-center items-center h-[50vh] backgroundGradient px-4 md:px-8">
        <div>
          <h1 className="text-slate-300 text-center">
            Turbo with TailwindCSS version 4
          </h1>
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly mt-4">
            <Button href="https://medium.com/@philippbtrentmann/setting-up-tailwind-css-v4-in-a-turbo-monorepo-7688f3193039">
              <span>Medium Article</span>
              <FaMedium className="inline-block ml-2" />
            </Button>
            <Button
              href="https://github.com/philipptpunkt/turbo-with-tailwind-v4"
              color="secondary"
            >
              <span>Github Repository</span>
              <FaGithub className="inline-block ml-2" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 flex justify-center w-full">
            <Button
              href="https://medium.com/@philippbtrentmann/using-tailwind-css-in-a-turborepo-with-apps-and-packages-5a05d2076caf"
              variant="text"
            >
              {`-> Turbo with TailwindCSS version 3 <-`}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <p className="bg-black text-white p-4">Custom Primary Colors</p>
          <Colors />
        </div>
        <div className="w-full">
          <p className="bg-black text-white p-4">Custom Secondary Colors</p>
          <Colors secondary />
        </div>
      </div>
    </main>
  )
}
