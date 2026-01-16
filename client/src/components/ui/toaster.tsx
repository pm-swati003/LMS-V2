import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport 
      className="
    fixed z-[100]
    top-4 right-4
    sm:top-4 sm:right-4

    max-sm:top-auto
    max-sm:bottom-4
    max-sm:left-1/2
    max-sm:-translate-x-1/2
    max-sm:w-[calc(100%-2rem)]
  "
  />
    </ToastProvider>
  )
}
