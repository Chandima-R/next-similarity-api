import { FC, HTMLAttributes, forwardRef } from "react"
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from "@/app/lib/utils"

const paragrahVariants = cva(
    'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
    {
        variants: {
            size: {
                default: 'text-base sm:text-lg',
                sm: 'text-sm sm:text-base',
            }
        },
        defaultVariants: {
            size: 'default'
        }
    }
)

interface ParagraphProps
    extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragrahVariants>{
        text: string
}


const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({
    className,
    size,
    children,
    ...props
}, ref) => {
    return(
        <p ref={ref}{...props} className={cn(paragrahVariants({size, className}))}>
            {children}
        </p>
    )
})

Paragraph.displayName = 'Paragraph'

export default Paragraph