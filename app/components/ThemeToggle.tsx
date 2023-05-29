'use client'

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { FC } from "react"
import Button from "./shared/Button"

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
    const { setTheme }  = useTheme() 
    return(
        <DropDownMenu>
            <DropDownMenuTrigger asChild>
                <Button variant='ghost' size='sm'>
                    <Sun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
                    <Moon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropDownMenuTrigger>
            <DropDownMenuContent align='end' forceMount>
                <DropDownMenuItem onClick={() => setTheme('light')}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                </DropDownMenuItem>
                <DropDownMenuItem onClick={() => setTheme('dark')}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                </DropDownMenuItem>
                <DropDownMenuItem onClick={() => setTheme('system')}>
                    <LaptopIcon className="mr-2 h-4 w-4" />
                    <span>System</span>
                </DropDownMenuItem>
            </DropDownMenuContent>
        </DropDownMenu>
    )
}

export default ThemeToggle