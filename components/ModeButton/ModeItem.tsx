"use client"
import { useTheme } from "next-themes"
import * as React from "react"

import {
  DropdownMenuItem,
} from "components/ui/dropdown-menu"
import { capitalizeFirstLetter } from 'lib/utils'

export interface ModeItemProps {
  mode: 'light' | 'dark' | 'system'
}
const ModeItem = ({ mode, ...props }: ModeItemProps) => {
  const { setTheme } = useTheme()

  return (
        <DropdownMenuItem onClick={() => setTheme(mode)} {...props}> 
          {capitalizeFirstLetter(mode)}
        </DropdownMenuItem>
  )
    }


export { ModeItem }
