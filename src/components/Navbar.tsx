import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 dark:bg-background/80 backdrop-blur-md border-b border-primary-foreground/10 dark:border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary-foreground dark:bg-gradient-to-r dark:from-primary dark:to-primary/60 dark:bg-clip-text dark:text-transparent">
            Siddhraj Thakor
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary-foreground/90 dark:text-foreground/80 hover:text-primary-foreground dark:hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 text-primary-foreground dark:text-foreground hover:bg-primary-foreground/10 dark:hover:bg-accent/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="text-primary-foreground dark:text-foreground hover:bg-primary-foreground/10 dark:hover:bg-accent/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground dark:text-foreground hover:bg-primary-foreground/10 dark:hover:bg-accent/10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-primary-foreground/90 dark:text-foreground/80 hover:text-primary-foreground dark:hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;