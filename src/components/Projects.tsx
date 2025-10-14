import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Star, Eye, GitFork } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  html_url: string;
  homepage: string;
  language: string;
  topics: string[];
  full_name: string; // e.g., "siddhrajthakor/portfolio"
}

interface RepoStats {
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
}

export default function Projects() {
  const [repoStats, setRepoStats] = useState<Record<string, RepoStats>>({});

  const projects: Project[] = [
    {
      id: 1,
      name: "Brain Tumor Classification",
      description: "Collaborated with a friend to build a CNN model for MRI-based brain tumor classification, achieving 83% accuracy with TensorFlow and Keras, optimizing runtime by 12%.",
      image: "dataset-cover.jpg",
      html_url: "https://github.com/DaxVirani03/brainTumorClassification",
      homepage: "",
      language: "Python",
      topics: ["Keras", "Image Augmentation", "TensorFlow", "CNN"],
      full_name: "siddhrajthakor/portfolio",
    },
    {
      id: 2,
      name: "WhatsApp Chat Analyzer",
      description: "An interactive web app built with Python and Streamlit to analyze WhatsApp chat data, offering insights into user activity, word count, emoji usage, and message timelines using Pandas, Matplotlib, and NLP techniques.",
      image: "/whatsapp-analyzer.png",
      html_url: "https://github.com/siddhraj1412/whatsapp_chat_analyzer",
      homepage: "https://whatsappchatanalyzer-1.streamlit.app/",
      language: "Python",
      topics: ["Streamlit", "Pandas", "Matplotlib", "NLP", "Data Visualization"],
      full_name: "siddhraj1412/whatsapp_chat_analyzer"
    },
    {
      id: 3,
      name: "Football Match Analysis",
      description: "A Python-based project for analyzing football match data, featuring scripts for data processing, statistical models, and visualizations to uncover insights on player performance, team strategies, and match outcomes using Pandas, Matplotlib, and Yolo v5.",
      image: "/football-analysis.png", 
      html_url: "https://github.com/siddhraj1412/football-analysis",
      homepage: "",
      language: "Python",
      topics: ["YOLO v5", "Pandas", "NumPy", "Statistics", "Matplotlib"],
      full_name: "siddhrajthakor/football-analysis",
    },
    {
      id: 4,
      name: "Scrape FBREF Data",
      description: "scraping of 2024-25 Premier League data from FBref using Jupyter Notebooks, with data cleaning",
      image: "/pl.jpeg", 
      html_url: "https://github.com/siddhraj1412/Scrape_FBREF_pl_2024-25",
      homepage: "https://www.kaggle.com/datasets/siddhrajthakor/fbref-premier-league-202425-player-stats-dataset",
      language: "Python",
      topics: ["BeautifulSoup4", "Pandas", "scikit-learn", "Jupyter"],
      full_name: "siddhrajthakor/scrape-fbref-data",
    },
    {
      id: 5,
      name: "Scrape Football Manager 23",
      description: "Scraped 90000+ Football Manager player data to scout players based on different attributes",
      image: "/fm.jpg", // Replace with actual image path
      html_url: "https://github.com/siddhraj1412/football-manager-data-scraping",
      homepage: "https://www.kaggle.com/datasets/siddhrajthakor/football-manager-2023-dataset",
      language: "python",
      topics: ["Game Data Scraping", "Player Data Analysis", "EDA", "Football Scouting"],
      full_name: "siddhraj1412/football-manager-data-scraping",
    },
    {
      id: 6,
      name: "Len Den",
      description: "A Flutter app for managing and splitting expenses among friends with a simple interface for mobile finance.",
      image: "/len-den.png", // Replace with actual image path
      html_url: "https://github.com/siddhraj1412/Len-Den",
      homepage: "",
      language: "Flutter",
      topics: ["Dart", "State Management", "Personal Finance Management", "Group Expense Tracking"],
      full_name: "siddhraj1412/Len-Den",
    },
  ];

  useEffect(() => {
    const fetchStats = async () => {
      const stats: Record<string, RepoStats> = {};
      for (const project of projects) {
        try {
          const response = await fetch(`https://api.github.com/repos/${project.full_name}`);
          if (response.ok) {
            const data = await response.json();
            stats[project.full_name] = {
              stargazers_count: data.stargazers_count,
              watchers_count: data.watchers_count,
              forks_count: data.forks_count,
            };
          }
        } catch (error) {
          console.error(`Failed to fetch stats for ${project.full_name}`, error);
        }
      }
      setRepoStats(stats);
    };
    fetchStats();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
    hover: { 
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions and cutting-edge technologies in my development journey
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => {
              const stats = repoStats[project.full_name];
              return (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  whileHover="hover"
                  className="group"
                >
                  <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video">
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      {stats && (
                        <div className="absolute top-3 right-3 flex gap-2">
                          <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {stats.stargazers_count}
                          </div>
                          <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                            <Eye className="h-3 w-3" />
                            {stats.watchers_count}
                          </div>
                          <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                            <GitFork className="h-3 w-3" />
                            {stats.forks_count}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold mb-2 flex items-center gap-2">
                          <Github className="h-5 w-5 text-primary" />
                          {project.name}
                        </CardTitle>
                        <CardDescription className="mb-4 line-clamp-3">
                          {project.description}
                        </CardDescription>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.language && (
                            <Badge variant="secondary" className="text-xs">
                              {project.language}
                            </Badge>
                          )}
                          {project.topics?.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-auto">
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                        {project.homepage && (
                          <Button size="sm" asChild className="flex-1">
                            <a
                              href={project.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}