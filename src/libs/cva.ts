import { ClassValue, clsx } from "clsx"

type VariantProps<T extends (...args: any) => any> = Parameters<T>[0]

const cva = <T extends Record<string, any>>(
  base?: ClassValue,
  variants?: T
) => {
  return (props?: VariantProps<(props?: any) => string>): string => {
    const variantClassNames = Object.entries(variants || {}).flatMap(
      ([variant, values]) => {
        const variantProp = props?.[variant]
        if (typeof variantProp === "string" || typeof variantProp === "number") {
          return values[variantProp] || []
        }
        return []
      }
    )

    return clsx(base, variantClassNames)
  }
}

export { cva, type VariantProps }