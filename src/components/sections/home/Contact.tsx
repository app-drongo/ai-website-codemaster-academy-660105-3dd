'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  BookOpen,
  Code,
  GraduationCap,
  Star,
  ChevronRight,
} from 'lucide-react';

const DEFAULT_CONTACT = {
  badge: 'Get Started',
  mainTitle: 'Ready to Start Your',
  mainTitleHighlight: 'Coding Journey?',
  mainDescription:
    "Have questions about our courses? Need help choosing the right path? We're here to guide you every step of the way.",
  formTitle: 'General Inquiries',
  formDescription: 'Send us a message and our education team will respond within 24 hours.',
  submitButton: 'Send Message',
  contactSectionTitle: 'Get in Touch',
  method1Title: 'Email Support',
  method1Description: 'Get help with courses',
  method1Contact: 'support@codemasteracademy.com',
  method2Title: 'Call Us',
  method2Description: 'Speak with our advisors',
  method2Contact: '+1 (555) CODE-123',
  method3Title: 'Live Chat',
  method3Description: 'Instant help available',
  method3Contact: 'Available 9 AM - 9 PM EST',
  officesSectionTitle: 'Learning Centers',
  office1City: 'San Francisco',
  office1Address: '123 Tech Hub Drive, Suite 200',
  office1Timezone: 'PST (UTC-8)',
  office2City: 'Austin',
  office2Address: '456 Innovation Blvd, Floor 5',
  office2Timezone: 'CST (UTC-6)',
  office3City: 'New York',
  office3Address: '789 Code Street, Building C',
  office3Timezone: 'EST (UTC-5)',
  hoursTitle: 'Support Hours',
  hoursWeekdayLabel: 'Monday - Friday',
  hoursWeekdayTime: '9:00 AM - 9:00 PM',
  hoursSaturdayLabel: 'Saturday',
  hoursSaturdayTime: '10:00 AM - 6:00 PM',
  hoursSundayLabel: 'Sunday',
  hoursSundayTime: '12:00 PM - 6:00 PM',
  supportNote: '24/7 course access and community support for all students',
  nameLabel: 'Full Name *',
  namePlaceholder: 'John Doe',
  emailLabel: 'Email Address *',
  emailPlaceholder: 'john@email.com',
  companyLabel: 'Current Role (Optional)',
  companyPlaceholder: 'Software Developer, Student, etc.',
  messageLabel: 'Message *',
  messagePlaceholder: 'Tell us about your learning goals or ask any questions...',
  quizTitle: 'Find Your Perfect Course',
  quizDescription: "Answer a few questions and we'll recommend the best learning path for you.",
  quizExperienceLabel: "What's your programming experience level?",
  quizGoalLabel: "What's your main goal?",
  quizStyleLabel: "What's your preferred learning style?",
  quizTimeLabel: 'How many hours per week can you dedicate to learning?',
  quizSubmitButton: 'Get My Recommendations',
  recommendationsTitle: 'Recommended Courses for You',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [quizData, setQuizData] = useState({
    experience: '',
    goal: '',
    style: '',
    timeCommitment: 5,
  });

  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate recommendations based on quiz answers
    const courseRecommendations = [];

    if (quizData.experience === 'beginner') {
      if (quizData.goal === 'career-change') {
        courseRecommendations.push('Full-Stack Web Development Bootcamp', 'Python for Beginners');
      } else if (quizData.goal === 'skill-upgrade') {
        courseRecommendations.push('JavaScript Fundamentals', 'HTML & CSS Mastery');
      } else {
        courseRecommendations.push('Introduction to Programming', 'Web Development Basics');
      }
    } else if (quizData.experience === 'intermediate') {
      if (quizData.goal === 'career-change') {
        courseRecommendations.push('Advanced React Development', 'Node.js Backend Development');
      } else if (quizData.goal === 'skill-upgrade') {
        courseRecommendations.push('Data Science with Python', 'Mobile App Development');
      } else {
        courseRecommendations.push('Advanced JavaScript', 'Database Design');
      }
    } else {
      if (quizData.goal === 'career-change') {
        courseRecommendations.push('System Design & Architecture', 'DevOps Engineering');
      } else {
        courseRecommendations.push('Machine Learning Advanced', 'Cloud Computing Mastery');
      }
    }

    setRecommendations(courseRecommendations);
    setShowRecommendations(true);
  };

  const handleQuizChange = (field: string, value: string | number) => {
    setQuizData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: config.method1Title,
      description: config.method1Description,
      contact: config.method1Contact,
    },
    {
      icon: Phone,
      title: config.method2Title,
      description: config.method2Description,
      contact: config.method2Contact,
    },
    {
      icon: MessageSquare,
      title: config.method3Title,
      description: config.method3Description,
      contact: config.method3Contact,
    },
  ];

  const offices = [
    {
      city: config.office1City,
      address: config.office1Address,
      timezone: config.office1Timezone,
    },
    {
      city: config.office2City,
      address: config.office2Address,
      timezone: config.office2Timezone,
    },
    {
      city: config.office3City,
      address: config.office3Address,
      timezone: config.office3Timezone,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-muted/20 to-background"
      data-editable="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <GraduationCap className="size-4 mr-2" />
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Forms */}
          <div className="space-y-8">
            {/* Course Recommendation Quiz */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <BookOpen className="size-6 text-primary" />
                  <span data-editable="quizTitle">{config.quizTitle}</span>
                </CardTitle>
                <CardDescription>
                  <span data-editable="quizDescription">{config.quizDescription}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!showRecommendations ? (
                  <form onSubmit={handleQuizSubmit} className="space-y-6">
                    {/* Experience Level */}
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        <span data-editable="quizExperienceLabel">
                          {config.quizExperienceLabel}
                        </span>
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          { value: 'beginner', label: 'Beginner - New to programming' },
                          { value: 'intermediate', label: 'Intermediate - Some experience' },
                          { value: 'advanced', label: 'Advanced - Experienced developer' },
                        ].map(option => (
                          <label
                            key={option.value}
                            className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          >
                            <input
                              type="radio"
                              name="experience"
                              value={option.value}
                              checked={quizData.experience === option.value}
                              onChange={e => handleQuizChange('experience', e.target.value)}
                              className="mr-3"
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Goal */}
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        <span data-editable="quizGoalLabel">{config.quizGoalLabel}</span>
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          { value: 'career-change', label: 'Career change - Switch to tech' },
                          { value: 'skill-upgrade', label: 'Skill upgrade - Advance current role' },
                          { value: 'hobby', label: 'Hobby - Learn for personal interest' },
                        ].map(option => (
                          <label
                            key={option.value}
                            className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          >
                            <input
                              type="radio"
                              name="goal"
                              value={option.value}
                              checked={quizData.goal === option.value}
                              onChange={e => handleQuizChange('goal', e.target.value)}
                              className="mr-3"
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Learning Style */}
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        <span data-editable="quizStyleLabel">{config.quizStyleLabel}</span>
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          { value: 'video', label: 'Video - Watch and learn' },
                          { value: 'text', label: 'Text - Read and practice' },
                          { value: 'interactive', label: 'Interactive - Hands-on coding' },
                        ].map(option => (
                          <label
                            key={option.value}
                            className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          >
                            <input
                              type="radio"
                              name="style"
                              value={option.value}
                              checked={quizData.style === option.value}
                              onChange={e => handleQuizChange('style', e.target.value)}
                              className="mr-3"
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Time Commitment */}
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        <span data-editable="quizTimeLabel">{config.quizTimeLabel}</span>
                      </label>
                      <div className="px-3">
                        <input
                          type="range"
                          min="1"
                          max="20"
                          value={quizData.timeCommitment}
                          onChange={e =>
                            handleQuizChange('timeCommitment', parseInt(e.target.value))
                          }
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-2">
                          <span>1 hour</span>
                          <span className="font-medium text-primary">
                            {quizData.timeCommitment} hours/week
                          </span>
                          <span>20+ hours</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-base py-6 group"
                      disabled={!quizData.experience || !quizData.goal || !quizData.style}
                    >
                      <span data-editable="quizSubmitButton">{config.quizSubmitButton}</span>
                      <Code className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <Star className="size-5 text-primary" />
                      <span data-editable="recommendationsTitle">
                        {config.recommendationsTitle}
                      </span>
                    </h4>
                    <div className="space-y-3">
                      {recommendations.map((course, index) => (
                        <div
                          key={index}
                          className="p-4 border border-primary/20 rounded-lg bg-primary/5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{course}</span>
                            <ChevronRight className="size-4 text-primary" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => setShowRecommendations(false)}
                      variant="outline"
                      className="w-full"
                    >
                      Take Quiz Again
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* General Contact Form */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="size-6 text-primary" />
                  <span data-editable="formTitle">{config.formTitle}</span>
                </CardTitle>
                <CardDescription>
                  <span data-editable="formDescription">{config.formDescription}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        <span data-editable="nameLabel">{config.nameLabel}</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder={config.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        <span data-editable="emailLabel">{config.emailLabel}</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder={config.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      <span data-editable="companyLabel">{config.companyLabel}</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder={config.companyPlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      <span data-editable="messageLabel">{config.messageLabel}</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder={config.messagePlaceholder}
                    />
                  </div>

                  <Button type="submit" className="w-full text-base py-6 group">
                    <span data-editable="submitButton">{config.submitButton}</span>
                    <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                <span data-editable="contactSectionTitle">{config.contactSectionTitle}</span>
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">
                              <span data-editable={`method${index + 1}Title`}>{method.title}</span>
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              <span data-editable={`method${index + 1}Description`}>
                                {method.description}
                              </span>
                            </p>
                            <p className="font-medium text-primary">
                              <span data-editable={`method${index + 1}Contact`}>
                                {method.contact}
                              </span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Learning Centers */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                <span data-editable="officesSectionTitle">{config.officesSectionTitle}</span>
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">
                          <span data-editable={`office${index + 1}City`}>{office.city}</span>
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          <span data-editable={`office${index + 1}Address`}>{office.address}</span>
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        <span data-editable={`office${index + 1}Timezone`}>{office.timezone}</span>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  <span data-editable="hoursTitle">{config.hoursTitle}</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursWeekdayLabel">{config.hoursWeekdayLabel}</span>
                    </span>
                    <span data-editable="hoursWeekdayTime">{config.hoursWeekdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSaturdayLabel">{config.hoursSaturdayLabel}</span>
                    </span>
                    <span data-editable="hoursSaturdayTime">{config.hoursSaturdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSundayLabel">{config.hoursSundayLabel}</span>
                    </span>
                    <span data-editable="hoursSundayTime">{config.hoursSundayTime}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    <span data-editable="supportNote">{config.supportNote}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
