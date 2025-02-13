import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@turbo-with-tailwind-v4/utils/cn"

const buttonStyles = cva(
  ["rounded-lg", "px-8", "py-2", "transition-all", "font-medium"],
  {
    variants: {
      variant: {
        contained: [],
        text: ["bg-transparent"],
      },
      color: {
        primary: [],
        secondary: [],
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "contained",
        className: [
          "bg-primary-400",
          "text-white",
          "hover:bg-primary-600",
          "dark:bg-primary-400",
          "dark:hover:bg-primary-500",
        ],
      },
      {
        color: "secondary",
        variant: "contained",
        className: [
          "bg-secondary-400",
          "text-white",
          "hover:bg-secondary-600",
          "dark:bg-secondary-400",
          "dark:hover:bg-secondary-500",
        ],
      },
      {
        color: "primary",
        variant: "text",
        className: [
          "text-primary-500",
          "hover:text-primary-50",
          "dark:text-primary-300",
          "dark:hover:bg-primary-950/50",
        ],
      },
      {
        color: "secondary",
        variant: "text",
        className: [
          "text-secondary-500",
          "hover:text-secondary-50",
          "dark:text-secondary-300",
          "dark:hover:bg-secondary-950/50",
        ],
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "primary",
    },
  }
)

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: React.ReactNode
  href: string
}

export function Button({ children, href, variant, color }: ButtonProps) {
  return (
    <a
      className={cn(
        buttonStyles({ variant, color }),
        "flex justify-center items-center"
      )}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}
