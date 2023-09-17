import clsx from "clsx";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
};

export function Container<T extends React.ElementType = "div">({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={clsx("mx-auto max-w-screen-md", "px-6 lg:px-8", className)}
    >
      {/* <div className="mx-auto max-w-2xl lg:max-w-none"> */}
      {children}
      {/* </div> */}
    </Component>
  );
}
