import {
  NavLink as RouterNavLink,
  NavLinkProps,
} from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends NavLinkProps {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

/**
 * Production-ready NavLink wrapper
 * Supports Tailwind + React Router v6
 */
const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName = "text-gold font-semibold",
      pendingClassName = "opacity-70",
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        {...props}
        className={({ isActive, isPending }) =>
          cn(
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };