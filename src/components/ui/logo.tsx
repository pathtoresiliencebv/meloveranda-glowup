import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  linkTo?: string;
}

export const Logo = ({ size = "md", className, linkTo = "/" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-10 w-auto", 
    lg: "h-12 w-auto"
  };

  const logoImage = (
    <img
      src="/lovable-uploads/7e7dfd3e-acc5-4da7-8f14-f98e919047e9.png"
      alt="MeloVeranda - Specialist in luxe overkappingen en veranda's"
      className={cn(sizeClasses[size], className)}
      onError={(e) => {
        // Fallback to text logo if image fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const parent = target.parentElement;
        if (parent) {
          parent.innerHTML = `
            <span class="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MELO<span class="text-primary">VERANDA</span>
            </span>
          `;
        }
      }}
    />
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="flex-shrink-0">
        {logoImage}
      </Link>
    );
  }

  return <div className="flex-shrink-0">{logoImage}</div>;
};