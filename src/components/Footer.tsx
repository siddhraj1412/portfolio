import React from "react";
import { Github, Linkedin, Mail, Heart, Twitter, Instagram, BarChart } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Added: open Gmail compose (fallback to mailto if popup blocked)
    const openGmail = (e?: React.MouseEvent<HTMLAnchorElement>) => {
        e?.preventDefault();
        const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=siddhraj761@gmail.com";
        const win = window.open(gmailUrl, "_blank");
        if (!win) {
            window.location.href = "mailto:siddhraj761@gmail.com";
        }
    };

    return (
        <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-fg))]">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="footer-name">
                            <h3 className="font-bold text-lg mb-4">Siddhraj Thakor</h3>
                            <p className="text-[hsl(var(--footer-muted))] text-sm">
                                I’m passionate about football analytics — digging into match data to uncover insights, scout potential talent, and analyze performances
                            </p>
                        </div>

                        <div className="footer-links">
                            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                            <div className="space-y-2">
                                <a
                                    href="#about"
                                    className="block text-sm text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-fg))] transition-colors"
                                >
                                    About
                                </a>
                                <a
                                    href="#skills"
                                    className="block text-sm text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-fg))] transition-colors"
                                >
                                    Skills
                                </a>
                                <a
                                    href="#projects"
                                    className="block text-sm text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-fg))] transition-colors"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#contact"
                                    className="block text-sm text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-fg))] transition-colors"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>

                        <div className="footer-connect">
                            <h3 className="font-bold text-lg mb-4 text-[hsl(var(--footer-fg))]">Connect</h3>
                            <div className="flex gap-2">
                                <Button 
                                    variant="secondary"
                                    size="icon"
                                    className="bg-white/10 hover:bg-white/20 transition-colors"
                                    asChild
                                >
                                    <a
                                        href="https://github.com/siddhrajthakor"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="h-4 w-4 text-[hsl(var(--footer-fg))]" />
                                    </a>
                                </Button>
                                <Button 
                                    variant="secondary"
                                    size="icon"
                                    className="bg-white/10 hover:bg-white/20 transition-colors"
                                    asChild
                                >
                                    <a
                                        href="https://linkedin.com/in/siddhrajthakor"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="h-4 w-4 text-[hsl(var(--footer-fg))]" />
                                    </a>
                                </Button>
                                <Button 
                                    variant="secondary"
                                    size="icon"
                                    className="bg-white/10 hover:bg-white/20 transition-colors"
                                    asChild
                                >
                                    <a
                                        href="mailto:siddhraj761@gmail.com"
                                        onClick={openGmail}
                                    >
                                        <Mail className="h-4 w-4 text-[hsl(var(--footer-fg))]" />
                                    </a>
                                </Button>
                                <Button 
                                    variant="secondary"
                                    size="icon"
                                    className="bg-white/10 hover:bg-white/20 transition-colors"
                                    asChild
                                >
                                    <a
                                        href="https://x.com/SiddhrajTh94671"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Twitter className="h-4 w-4 text-[hsl(var(--footer-fg))]" />
                                    </a>
                                </Button>
                                <Button 
                                    variant="secondary"
                                    size="icon"
                                    className="bg-white/10 hover:bg-white/20 transition-colors"
                                    asChild
                                >
                                    <a
                                        href="https://instagram.com/siddhraj_1470"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram className="h-4 w-4 text-[hsl(var(--footer-fg))]" />
                                    </a>
                                </Button>
                                <Button 
                                    variant="secondary"
                                    size="icon"
                                    className="bg-white/10 hover:bg-white/20 transition-colors"
                                    asChild
                                >
                                    <a
                                        href="https://www.kaggle.com/siddhrajthakor"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <BarChart className="h-4 w-4 text-[hsl(var(--footer-fg))]" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-[hsl(var(--footer-muted))] pt-8 text-center">
                        <p className="text-sm text-[hsl(var(--footer-muted))] flex items-center justify-center gap-2">
                            © {currentYear} Siddhraj Thakor. Made with{" "}
                            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using
                            React & TypeScript
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
