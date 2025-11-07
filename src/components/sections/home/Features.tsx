'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Code2,
  Database,
  Smartphone,
  Server,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState } from 'react';
import Image from 'next/image';

const DEFAULT_FEATURES = {
  badge: 'Course Categories',
  mainTitle: 'Learn Programming Skills',
  mainTitleHighlight: 'That Matter in 2024',
  mainDescription:
    'Master in-demand programming skills with our comprehensive course catalog. From beginner-friendly introductions to advanced specializations.',
  feature1Title: 'Web Development',
  feature1Description:
    'Master HTML, CSS, JavaScript, React, and Node.js to build modern web applications from scratch.',
  feature1Badge: 'Frontend & Backend',
  feature2Title: 'Data Science',
  feature2Description:
    'Learn Python, SQL, machine learning, and data visualization to become a data-driven professional.',
  feature2Badge: 'Python & ML',
  feature3Title: 'Mobile Apps',
  feature3Description:
    'Build native iOS and Android apps using React Native, Flutter, or native development tools.',
  feature3Badge: 'iOS & Android',
  feature4Title: 'DevOps',
  feature4Description:
    'Master cloud platforms, containerization, CI/CD pipelines, and infrastructure automation.',
  feature4Badge: 'Cloud & Automation',
  ctaQuestion: 'Ready to start your programming journey?',
  primaryCTA: 'Browse All Courses',
  primaryCTAHref: '/courses',
  secondaryCTA: 'Get Course Recommendations',
  secondaryCTAHref: '/quiz',
  testimonials: [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer at Google',
      content:
        'CodeMaster Academy helped me transition from marketing to tech. The hands-on projects and mentorship were invaluable.',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'Full Stack Developer',
      content:
        'The curriculum is incredibly well-structured. I went from zero coding experience to landing my dream job in 4 months.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Data Scientist at Netflix',
      content:
        'The data science track exceeded my expectations. Real datasets, industry tools, and amazing instructor support.',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      rating: 5,
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Code2,
      title: config.feature1Title,
      description: config.feature1Description,
      badge: config.feature1Badge,
      difficulty: ['beginner', 'intermediate', 'advanced'],
    },
    {
      icon: Database,
      title: config.feature2Title,
      description: config.feature2Description,
      badge: config.feature2Badge,
      difficulty: ['intermediate', 'advanced'],
    },
    {
      icon: Smartphone,
      title: config.feature3Title,
      description: config.feature3Description,
      badge: config.feature3Badge,
      difficulty: ['intermediate', 'advanced'],
    },
    {
      icon: Server,
      title: config.feature4Title,
      description: config.feature4Description,
      badge: config.feature4Badge,
      difficulty: ['advanced'],
    },
  ];

  const filteredFeatures =
    difficultyFilter === 'all'
      ? features
      : features.filter(feature => feature.difficulty.includes(difficultyFilter));

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % config.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      prev => (prev - 1 + config.testimonials.length) % config.testimonials.length
    );
  };

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
      data-editable="features"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        {/* Difficulty Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">Filter by difficulty:</span>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const originalIndex = features.findIndex(f => f.title === feature.title);
            return (
              <Card
                key={originalIndex}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <span data-editable={`feature${originalIndex + 1}Badge`}>
                        {feature.badge}
                      </span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    <span data-editable={`feature${originalIndex + 1}Title`}>{feature.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    <span data-editable={`feature${originalIndex + 1}Description`}>
                      {feature.description}
                    </span>
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {feature.difficulty.map(level => (
                      <Badge key={level} variant="outline" className="text-xs capitalize">
                        {level}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Student Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Students Say</h3>
          <div className="relative max-w-4xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Quote className="size-8 text-primary/30 flex-shrink-0 mt-2" />
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed mb-6">
                      "{config.testimonials[currentTestimonial].content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={config.testimonials[currentTestimonial].avatar}
                        alt={config.testimonials[currentTestimonial].name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">
                          {config.testimonials[currentTestimonial].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {config.testimonials[currentTestimonial].role}
                        </p>
                      </div>
                      <div className="flex gap-1 ml-auto">
                        {[...Array(config.testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="size-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {config.testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`size-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaQuestion">{config.ctaQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="px-6 py-3"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
