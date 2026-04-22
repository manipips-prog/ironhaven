/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Instagram, 
  Twitter, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail,
  Menu,
  X,
  ArrowRight,
  Zap,
  Target,
  Trophy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Classes', href: '#classes' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-neon p-2 rounded-lg">
              <Dumbbell className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-black tracking-tighter italic">IRON HAVEN</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-neon transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" className="bg-neon text-black hover:bg-neon/90 font-bold uppercase tracking-widest">
              Join Now
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-border">
                <div className="flex flex-col gap-8 mt-12">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-black uppercase tracking-tighter hover:text-neon transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button className="bg-neon text-black hover:bg-neon/90 font-bold uppercase tracking-widest py-6">
                    Join Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <Badge className="bg-neon text-black mb-6 px-4 py-1 font-bold uppercase tracking-widest">
            Elite Performance Center
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic mb-8">
            Forge Your <span className="text-neon">Legacy</span> In Iron
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Experience the most advanced training facility in the city. Expert coaching, 
            pro-grade equipment, and a community that pushes you beyond your limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-neon text-black hover:bg-neon/90 font-bold uppercase tracking-widest h-14 px-8">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 font-bold uppercase tracking-widest h-14 px-8">
              View Schedule
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8 border-t border-white/10 pt-10">
            {[
              { label: 'Active Members', value: '2,500+' },
              { label: 'Expert Trainers', value: '45+' },
              { label: 'Fitness Classes', value: '120+' },
              { label: 'Success Stories', value: '10k+' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="text-4xl font-black text-neon mb-1">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Intensity",
      description: "Explosive workouts designed to burn fat and build lean muscle efficiently."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Oriented",
      description: "Personalized training programs tailored to your specific fitness objectives."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Expert Coaching",
      description: "Learn from certified professionals with years of competitive experience."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Join a supportive environment of like-minded individuals chasing greatness."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            Why Choose <span className="text-neon">Iron Haven</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-widest text-sm">
            The standard for elite performance and physical transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -10 }}
              className="p-8 bg-card border border-border rounded-2xl hover:border-neon/50 transition-all duration-300"
            >
              <div className="text-neon mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold uppercase mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Classes = () => {
  const classTypes = [
    {
      id: "strength",
      title: "Strength & Power",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop",
      description: "Master the big lifts and build raw strength with our powerlifting and bodybuilding focus."
    },
    {
      id: "cardio",
      title: "HIIT & Cardio",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
      description: "High-octane interval training to skyrocket your metabolism and endurance."
    },
    {
      id: "combat",
      title: "Boxing & MMA",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop",
      description: "Learn technique and get in fighting shape with our professional combat sports classes."
    }
  ];

  return (
    <section id="classes" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
              Elite <span className="text-neon">Classes</span>
            </h2>
            <p className="text-muted-foreground uppercase tracking-widest text-sm">
              From beginner to pro, we have the right class for your level
            </p>
          </div>
          <Button variant="link" className="text-neon font-bold uppercase tracking-widest p-0 h-auto">
            View Full Schedule <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <Tabs defaultValue="strength" className="w-full">
          <TabsList className="bg-secondary/50 p-1 mb-12 h-auto flex flex-wrap justify-start gap-2">
            {classTypes.map((type) => (
              <TabsTrigger 
                key={type.id} 
                value={type.id}
                className="data-[state=active]:bg-neon data-[state=active]:text-black uppercase font-bold tracking-widest px-8 py-3 rounded-lg transition-all"
              >
                {type.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {classTypes.map((type) => (
            <TabsContent key={type.id} value={type.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div>
                  <h3 className="text-4xl font-black uppercase italic mb-6">{type.title}</h3>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      "Professional Certified Instructors",
                      "State-of-the-art Equipment",
                      "Small Group Sizes for Focus",
                      "All Fitness Levels Welcome"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-neon" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-neon text-black hover:bg-neon/90 font-bold uppercase tracking-widest h-14 px-10">
                    Book This Class
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const Trainers = () => {
  const trainers = [
    {
      name: "Marcus Thorne",
      role: "Head Strength Coach",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop",
      specialty: "Powerlifting"
    },
    {
      name: "Sarah Jenkins",
      role: "HIIT Specialist",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
      specialty: "Fat Loss"
    },
    {
      name: "David Chen",
      role: "Combat Instructor",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop",
      specialty: "Muay Thai"
    },
    {
      name: "Elena Rodriguez",
      role: "Yoga & Mobility",
      image: "https://images.unsplash.com/photo-1552196564-97c84883b5f3?q=80&w=1974&auto=format&fit=crop",
      specialty: "Flexibility"
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            Expert <span className="text-neon">Trainers</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">
            The best in the industry, dedicated to your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div 
              key={trainer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="bg-neon text-black mb-2 font-bold uppercase text-[10px] tracking-widest">
                  {trainer.specialty}
                </Badge>
                <h3 className="text-xl font-black uppercase italic">{trainer.name}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">{trainer.role}</p>
                <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-5 h-5 cursor-pointer hover:text-neon" />
                  <Twitter className="w-5 h-5 cursor-pointer hover:text-neon" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "49",
      features: ["Gym Access", "Locker Room", "Free Weights", "Cardio Area"],
      popular: false
    },
    {
      name: "Pro",
      price: "89",
      features: ["All Basic Features", "Group Classes", "Personal Trainer (1/mo)", "Sauna Access"],
      popular: true
    },
    {
      name: "Elite",
      price: "149",
      features: ["All Pro Features", "Unlimited PT", "Nutrition Plan", "Recovery Zone"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            Membership <span className="text-neon">Plans</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">
            Choose the level that fits your ambition
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative border-2 ${plan.popular ? 'border-neon bg-secondary/50' : 'border-border bg-card'} overflow-hidden rounded-3xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-neon text-black px-4 py-1 font-bold text-xs uppercase tracking-widest rounded-bl-xl">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-black uppercase italic mb-2">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-neon">${plan.price}</span>
                  <span className="text-muted-foreground uppercase tracking-widest text-xs">/month</span>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-neon" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className={`w-full h-12 font-bold uppercase tracking-widest ${plan.popular ? 'bg-neon text-black hover:bg-neon/90' : 'bg-white/10 hover:bg-white/20'}`}>
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-neon p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-black" />
              </div>
              <span className="text-3xl font-black tracking-tighter italic">IRON HAVEN</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              We are more than just a gym. We are a community dedicated to physical excellence 
              and mental toughness. Join us and redefine what's possible.
            </p>
            <div className="flex gap-6">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-neon transition-colors" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-neon transition-colors" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-neon transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-8 tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#classes" className="hover:text-neon transition-colors">Classes</a></li>
              <li><a href="#trainers" className="hover:text-neon transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="hover:text-neon transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-8 tracking-widest">Contact Us</h4>
            <ul className="space-y-6 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon shrink-0" />
                <span>123 Performance Way,<br />Fitness District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neon shrink-0" />
                <span>+1 (555) 000-IRON</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neon shrink-0" />
                <span>hello@ironhaven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            © 2026 Iron Haven Fitness. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-neon transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-neon selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Classes />
        <Trainers />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
