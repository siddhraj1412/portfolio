// src/Hero.js
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to open Gmail compose
  const openGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=siddhraj761@gmail.com",
      "_blank"
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Siddhraj Thakor
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Aspiring Sports Analyst & Data Enthusiast
            </p>
          </div>

          {/* About paragraph */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I’m passionate about football analytics — digging into match data to
            uncover insights, scout potential talent, and analyze performances.
            With strong Python and data visualization skills, I aim to turn my
            passion into impactful sports analytics projects.
          </p>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gap-2"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social buttons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <a
                href="https://github.com/siddhraj1412"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <a
                href="https://linkedin.com/in/siddhraj-thakor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            {/* Fixed Mail button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={openGmail}
              className="hover:scale-110 transition-transform"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
