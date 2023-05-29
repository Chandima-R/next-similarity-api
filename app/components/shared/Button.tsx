import { cn } from "@/app/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { ButtonHTMLAttributes, FC, forwardRef } from "react"
import { Loader2 } from "lucide-react"

export const buttonVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-ooffset-2 disabled:opacity-50 dark:ring-slate-400 disabled:pointer-events-none dark:focus:ring-slate-900',
    {
        variants: {
            variant: {
                default: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300',
                outline: 'bg-slate-900 text-white hover:bg-slate-900 dark:bg-slate-200 dark:Text-slate-900 dark:hover:bg-slate-100 border border-slate-200 hover:bg-slate-100 dark:border-slate-700',
                ghost:'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900 dark:text-slate-400 data=[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
                link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
            },
            size:{
                default: 'h-10 px-4 py-2',
                sm: 'h-9 p-2 rounded-md',
                lg: 'h-11 p-8 rounded-md'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

interface ButtonProps 
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps< typeof buttonVariants>{
        isLoding?: boolean
    }

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps> (({
    className,
    children,
    variant,
    isLoding,
    size,
    ...props
}, ref) => {
    return(
            <button
                className={cn(buttonVariants({variant, size, className}))}
                ref={ref}
                disabled={isLoding}
                {...props}
            >
                {children}
                {isLoding && <Loader2 className='mr-2 h-4 w-4 animate-spin'/>}
            </button>
    )
})

Button.displayName = 'Button'

export default Button