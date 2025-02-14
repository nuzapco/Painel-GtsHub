"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

// import { useMetaColor } from "@/hooks/use-meta-color"
import { Button } from "./ui/button"
import { useMetaColor } from "@/hooks/use-meta-color"


export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  const { setMetaColor } = useMetaColor()

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
    setMetaColor(
      resolvedTheme === "dark"
        ? "#09090b"
        : "#ffffff"
    )
  }, [resolvedTheme, setTheme, setMetaColor])

  return (
    <Button
      variant="ghost"
      className="group/toggle h-8 w-8 px-0"
      onClick={toggleTheme}
    >
      <SunIcon className="hidden [html.dark_&]:block" />
      <MoonIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}