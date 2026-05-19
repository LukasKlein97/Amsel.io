import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight transition-all duration-500 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "liquid-button liquid-button--filled text-white",
        outline: "liquid-button liquid-button--outline text-primary",
        secondary: "liquid-button liquid-button--secondary text-black",
        destructive:
          "rounded-full bg-red-600 text-white shadow-[0_16px_32px_-18px_rgba(220,38,38,0.65)] transition hover:bg-red-500 focus-visible:ring-red-400/70",
        ghost:
          "rounded-full border border-transparent bg-transparent text-foreground/80 hover:bg-orange-50 focus-visible:ring-orange-300/50",
        black:
          "rounded-full bg-foreground text-background border border-foreground/20 hover:bg-foreground/90 shadow-[0_16px_32px_-18px_rgba(0,0,0,0.25)] focus-visible:ring-foreground/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "size-11 rounded-full p-0 [&>svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
