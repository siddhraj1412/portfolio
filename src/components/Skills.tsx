import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Code, 
  Database, 
  Wrench, 
  Palette,
  BarChart3,
  Cpu,
  Globe,
  Zap,
  Brain,
  TrendingUp,
  Users,
  Book,
  Lock,
  Shield,
  Play,
  Smartphone,
  Settings,
  Image,
} from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: string;
  icon?: React.ComponentType<{ className?: string }>;
  projects?: string[];
}

export default function Skills() {
  const skills: Skill[] = [
    // Programming Languages
    { name: "Python", category: "Programming", icon: Code },
    { name: "Java", category: "Programming", icon: Code },
    { name: "C", category: "Programming", icon: Code },
    { name: "C++", category: "Programming", icon: Code },
    { name: "R", category: "Programming", icon: Code },
    { name: "SQL", category: "Programming", icon: Database },
    { name: "HTML", category: "Programming", icon: Globe },
    { name: "JavaScript", category: "Programming", icon: Code },

    // Mobile Development
    { name: "Flutter", category: "Mobile Development", icon: Smartphone },
    { name: "State Management", category: "Mobile Development", icon: Settings },
    { name: "Dart", category: "Mobile Development", icon: Code },
    { name: "UI/UX Design", category: "Mobile Development", icon: Palette },
    
    // Data Science
    { name: "NumPy", category: "Data Science", icon: Cpu },
    { name: "Pandas", category: "Data Science", icon: Database },
    { name: "Scikit-learn", category: "Data Science", icon: Zap },
    { name: "Deep Learning", category: "Data Science", icon: Brain },
    { name: "NLP", category: "Data Science", icon: Book },
    { name: "Feature Engineering", category: "Data Science", icon: Wrench },
    { name: "Data Scraping", category: "Data Science", icon: Wrench },
    { name: "Data Analysis", category: "Data Science", icon: BarChart3 },
    { name: "Data Cleaning/Pipelines", category: "Data Science", icon: Wrench },

    // Machine Learning
    { name: "TensorFlow", category: "Machine Learning", icon: Brain },
    { name: "PyTorch", category: "Machine Learning", icon: Brain },
    { name: "OpenCV", category: "Machine Learning", icon: Brain },
    { name: "Image Processing", category: "Machine Learning", icon: Image },
    { name: "YOLO", category: "Machine Learning", icon: Zap },
    { name: "Clustering", category: "Machine Learning", icon: Zap },
    { name: "Machine Learning", category: "Machine Learning", icon: Zap },
    { name: "CNN", category: "Machine Learning", icon: Brain },
    { name: "Model Optimization", category: "Machine Learning", icon: Wrench },

    // Visualization
    { name: "Power BI", category: "Visualization", icon: TrendingUp },
    { name: "Tableau", category: "Visualization", icon: TrendingUp },
    { name: "Matplotlib", category: "Visualization", icon: BarChart3 },
    { name: "Seaborn", category: "Visualization", icon: BarChart3 },

    // Web Development
    { name: "CSS", category: "Web Development", icon: Palette },
    { name: "React", category: "Web Development", icon: Code },
    { name: "Node.js", category: "Web Development", icon: Code },
    { name: "Next.js", category: "Web Development", icon: Code },
    { name: "Flask", category: "Web Development", icon: Code },
    { name: "Streamlit", category: "Web Development", icon: Code },
    { name: "Redux", category: "Web Development", icon: Code },
    { name: "MERN Stack", category: "Web Development", icon: Globe },

    // Tools & Platforms
    { name: "Oracle", category: "Tools & Platforms", icon: Database },
    { name: "Excel", category: "Tools & Platforms", icon: Wrench },
    { name: "Google Colab", category: "Tools & Platforms", icon: Play },
    { name: "Jupyter Notebook", category: "Tools & Platforms", icon: Book },
    { name: "Kaggle", category: "Tools & Platforms", icon: Book },
    { name: "Git/GitHub", category: "Tools & Platforms", icon: Lock },
    { name: "VS Code", category: "Tools & Platforms", icon: Code },
    { name: "Data Structures & Algorithms", category: "Tools & Platforms", icon: Wrench },
    { name: "Probability & Statistics", category: "Tools & Platforms", icon: BarChart3 },
    { name: "Database Management", category: "Tools & Platforms", icon: Database },
    { name: "MongoDB", category: "Tools & Platforms", icon: Database },

    // Soft Skills
    { name: "Communication", category: "Soft Skills", icon: Users },
    { name: "Teamwork", category: "Soft Skills", icon: Users },
    { name: "Adaptability", category: "Soft Skills", icon: Shield },
    { name: "Flexibility", category: "Soft Skills", icon: Shield },

    // Languages
    { name: "English", category: "Languages", icon: Globe },
    { name: "Hindi", category: "Languages", icon: Globe },
    { name: "Gujarati", category: "Languages", icon: Globe },
  ];

  const categories = Array.from(new Set(skills.map((s) => s.category)));


  const categoryIcons = {
    "Programming": Code,
    "Data Science": Database,
    "Machine Learning": Brain,
    "Visualization": TrendingUp,
    "Web Development": Globe,
    "Tools & Platforms": Wrench,
    "Soft Skills": Users,
    "Languages": Globe,
  };

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

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-center text-muted-foreground mb-12 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technologies and tools I work with
          </motion.p>

          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => {
              const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons] || Code;
              return (
                <div key={category} className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-3 justify-center md:justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CategoryIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-semibold">{category}</h3>
                  </motion.div>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => {
                        const SkillIcon = skill.icon || Code;
                        return (
                          <motion.div
                            key={skill.name}
                            variants={skillVariants}
                            whileHover="hover"
                            className="relative"
                          >
                            <Badge
                              variant="secondary"
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 hover:shadow-lg text-foreground border-primary/20"
                            >
                              <SkillIcon className="h-4 w-4" />
                              {skill.name}
                            </Badge>
                          </motion.div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <p className="text-muted-foreground text-sm">
              Always learning and exploring new technologies to stay ahead in the ever-evolving data science landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}