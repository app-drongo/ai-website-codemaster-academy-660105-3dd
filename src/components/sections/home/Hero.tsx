'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, CheckCircle2, Play, Search, Users } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  badge: 'New: AI-Powered Learning',
  title: 'Master Programming in',
  titleHighlight: '12 Weeks',
  description:
    "Join thousands of students learning to code with our comprehensive online programming courses. From beginner to advanced, we'll guide you every step of the way.",
  features: [
    'Interactive coding exercises',
    'Real-world projects',
    '1-on-1 mentorship',
    'Job placement assistance',
  ],
  primaryCTA: 'Start Learning Today',
  secondaryCTA: 'Watch Demo',
  primaryCTAHref: '/signup',
  secondaryCTAHref: '#demo',
  imageUrl:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop',
  imageAlt: 'Students learning programming',
  statsLabel1: 'Students',
  statsValue1: '10,000+ Enrolled',
  statsLabel2: 'Success Rate',
  statsValue2: '94% completion',
  searchPlaceholder: 'Search courses (e.g., Python, React, Data Science)',
  courses: [
    'Python for Beginners',
    'React Development',
    'Data Science with Python',
    'Mobile App Development',
    'DevOps Fundamentals',
    'Machine Learning',
    'Web Development Bootcamp',
    'JavaScript Mastery',
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredCourses = config.courses.filter(course =>
    course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-background" data-editable="hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              <span data-editable="badge">{config.badge}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span data-editable="title">{config.title}</span>
              <span
                className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                data-editable="titleHighlight"
              >
                {config.titleHighlight}
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              data-editable="description"
            >
              {config.description}
            </p>

            {/* Course Search Bar */}
            <div className="mt-6 relative">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-5" />
                  <Input
                    type="text"
                    placeholder={config.searchPlaceholder}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="pl-10 pr-4 py-3 text-base border-border/50 focus:border-primary"
                    data-editable="searchPlaceholder"
                  />
                </div>

                {/* Autocomplete Suggestions */}
                {showSuggestions && searchQuery && filteredCourses.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                    {filteredCourses.slice(0, 5).map((course, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="w-full text-left px-4 py-2 hover:bg-muted transition-colors text-sm"
                        onClick={() => {
                          setSearchQuery(course);
                          setShowSuggestions(false);
                          navigate(`/courses?search=${encodeURIComponent(course)}`);
                        }}
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                )}
              </form>
            </div>

            {/* Student Counter */}
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="size-4 text-primary" />
              <span data-editable="statsValue1">{config.statsValue1}</span>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {config.features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span data-editable={`features[${idx}]`}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group px-7 text-base"
                onClick={() => navigate(config.primaryCTAHref)}
                data-editable-href="primaryCTAHref"
                data-href={config.primaryCTAHref}
              >
                <span data-editable="primaryCTA">{config.primaryCTA}</span>
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                onClick={() => navigate(config.secondaryCTAHref)}
                data-editable-href="secondaryCTAHref"
                data-href={config.secondaryCTAHref}
              >
                <Play className="mr-2 size-5" />
                <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src={config.imageUrl}
                  alt={config.imageAlt}
                  fill
                  className="object-cover"
                  priority
                  data-editable-src="imageUrl"
                />
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium shadow">
                <span data-editable="imageAlt">{config.imageAlt}</span>
              </div>
            </div>

            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground" data-editable="statsLabel1">
                {config.statsLabel1}
              </p>
              <p className="text-sm">
                <span className="font-semibold" data-editable="statsValue1">
                  {config.statsValue1}
                </span>
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground" data-editable="statsLabel2">
                {config.statsLabel2}
              </p>
              <p className="text-sm">
                <span className="font-semibold" data-editable="statsValue2">
                  {config.statsValue2}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
