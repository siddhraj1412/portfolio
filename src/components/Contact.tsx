import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter, Instagram, BarChart } from "lucide-react";

export default function Contact() {
  // Changed: open Gmail compose in new tab, fallback to mailto if popup blocked
  const handleEmailClick = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=siddhraj761@gmail.com";
    const win = window.open(gmailUrl, "_blank");
    if (!win) {
      // Popup blocked or window couldn't be opened — fallback to mailto
      window.location.href = "mailto:siddhraj761@gmail.com";
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Let's Connect
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <Card className="border-2 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
              <CardDescription className="text-base">
                Feel free to reach out through any of these platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {/* GitHub */}
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start h-16 text-base transition-all group"
              >
                <a
                  href="https://github.com/siddhrajthakor"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub"
                  className="flex items-center w-full px-4 py-3 rounded-md
                             hover:bg-blue-600 hover:border-blue-600 hover:text-white
                             dark:hover:bg-green-600 transition-colors"
                >
                  <Github className="h-6 w-6 mr-4 group-hover:text-white dark:group-hover:text-white" />
                  <div className="text-left">
                    <div className="font-semibold group-hover:text-white">GitHub</div>
                    <div className="text-sm text-muted-foreground group-hover:text-white dark:group-hover:text-green-100">Check out my repositories</div>
                  </div>
                </a>
              </Button>

              {/* LinkedIn */}
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start h-16 text-base transition-all group"
              >
                <a
                  href="https://linkedin.com/in/siddhraj-thakor"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn"
                  className="flex items-center w-full px-4 py-3 rounded-md
                             hover:bg-blue-600 hover:border-blue-600 hover:text-white
                             dark:hover:bg-green-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6 mr-4 group-hover:text-white dark:group-hover:text-white" />
                  <div className="text-left">
                    <div className="font-semibold group-hover:text-white">LinkedIn</div>
                    <div className="text-sm text-muted-foreground group-hover:text-white dark:group-hover:text-green-100">Let's connect professionally</div>
                  </div>
                </a>
              </Button>

              {/* Email - use anchor with mailto so it works consistently */}
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start h-16 text-base transition-all group"
              >
                <a
                  href="mailto:siddhraj761@gmail.com"
                  aria-label="Send email"
                  onClick={handleEmailClick}
                  className="flex items-center w-full px-4 py-3 rounded-md
                             hover:bg-blue-600 hover:border-blue-600 hover:text-white
                             dark:hover:bg-green-600 transition-colors"
                >
                  <Mail className="h-6 w-6 mr-4 group-hover:text-white dark:group-hover:text-white" />
                  <div className="text-left">
                    <div className="font-semibold group-hover:text-white">Email</div>
                    <div className="text-sm text-muted-foreground group-hover:text-white dark:group-hover:text-green-100">Drop me a message</div>
                  </div>
                </a>
              </Button>

              {/* Twitter */}
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start h-16 text-base transition-all group"
              >
                <a
                  href="https://x.com/SiddhrajTh94671"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Twitter"
                  className="flex items-center w-full px-4 py-3 rounded-md
                             hover:bg-blue-600 hover:border-blue-600 hover:text-white
                             dark:hover:bg-green-600 transition-colors"
                >
                  <Twitter className="h-6 w-6 mr-4 group-hover:text-white dark:group-hover:text-white" />
                  <div className="text-left">
                    <div className="font-semibold group-hover:text-white">Twitter</div>
                    <div className="text-sm text-muted-foreground group-hover:text-white dark:group-hover:text-green-100">Follow for updates</div>
                  </div>
                </a>
              </Button>

              {/* Instagram */}
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start h-16 text-base transition-all group"
              >
                <a
                  href="https://instagram.com/siddhraj_1470"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram"
                  className="flex items-center w-full px-4 py-3 rounded-md
                             hover:bg-blue-600 hover:border-blue-600 hover:text-white
                             dark:hover:bg-green-600 transition-colors"
                >
                  <Instagram className="h-6 w-6 mr-4 group-hover:text-white dark:group-hover:text-white" />
                  <div className="text-left">
                    <div className="font-semibold group-hover:text-white">Instagram</div>
                    <div className="text-sm text-muted-foreground group-hover:text-white dark:group-hover:text-green-100">Check out my posts</div>
                  </div>
                </a>
              </Button>

              {/* Kaggle */}
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full justify-start h-16 text-base transition-all group"
              >
                <a
                  href="https://www.kaggle.com/siddhrajthakor"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kaggle"
                  className="flex items-center w-full px-4 py-3 rounded-md
                             hover:bg-blue-600 hover:border-blue-600 hover:text-white
                             dark:hover:bg-green-600 transition-colors"
                >
                  <BarChart className="h-6 w-6 mr-4 group-hover:text-white dark:group-hover:text-white" />
                  <div className="text-left">
                    <div className="font-semibold group-hover:text-white">Kaggle</div>
                    <div className="text-sm text-muted-foreground group-hover:text-white dark:group-hover:text-green-100">Explore my data projects</div>
                  </div>
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Open to freelance opportunities and full-time positions.
            </p>
            <p className="text-foreground font-medium mt-2">
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
