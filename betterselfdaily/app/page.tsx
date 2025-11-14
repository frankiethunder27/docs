"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BetterSelfDaily
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Features
              </a>
              <a href="#habits" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Habits
              </a>
              <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Stories
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Become Your
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Best Self Daily
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your life one day at a time with personalized habits, mindful practices, and a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg border-2 border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400 hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Everything You Need to Grow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Powerful tools designed to help you build lasting positive habits and achieve your goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Tracking",
                description: "Monitor your progress with intuitive habit tracking and beautiful visualizations.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Personalized Goals",
                description: "Set meaningful goals tailored to your unique journey and aspirations.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Mindfulness Exercises",
                description: "Access guided meditations and breathing exercises for mental clarity.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Progress Analytics",
                description: "Gain insights with detailed analytics and streak tracking to stay motivated.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "Community Support",
                description: "Connect with like-minded individuals on their self-improvement journey.",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                title: "Daily Inspiration",
                description: "Receive motivational quotes and content to keep you inspired every day.",
                gradient: "from-pink-500 to-rose-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Habits Section */}
      <section id="habits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Build Powerful Daily Habits
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Start with small, consistent actions that compound into extraordinary results.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  habit: "Morning Meditation",
                  time: "5 minutes",
                  impact: "Reduces stress by 40%"
                },
                {
                  habit: "Gratitude Journal",
                  time: "3 minutes",
                  impact: "Increases happiness by 25%"
                },
                {
                  habit: "Daily Exercise",
                  time: "20 minutes",
                  impact: "Boosts energy levels"
                },
                {
                  habit: "Reading",
                  time: "15 minutes",
                  impact: "Expands knowledge daily"
                },
                {
                  habit: "Evening Reflection",
                  time: "5 minutes",
                  impact: "Improves self-awareness"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.habit}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.time} • {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-800 p-8 flex flex-col justify-center items-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      21 Days
                    </div>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      To Form a Habit
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Start your transformation journey today and watch as small daily actions create lasting change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Join thousands who have transformed their lives with BetterSelfDaily.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Manager",
                quote: "BetterSelfDaily helped me build a consistent morning routine. I've never felt more productive and energized!",
                streak: "127 days"
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                quote: "The habit tracking feature is incredible. Seeing my progress visualized keeps me motivated every single day.",
                streak: "89 days"
              },
              {
                name: "Emma Williams",
                role: "Entrepreneur",
                quote: "This app changed my life. The mindfulness exercises helped me manage stress and stay focused on my goals.",
                streak: "203 days"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
                  <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                    🔥 {testimonial.streak} streak
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community today and start building the habits that will shape your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
                View Pricing
              </button>
            </div>
            <p className="text-white/80 mt-6 text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                BetterSelfDaily
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Empowering you to become your best self, one day at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2025 BetterSelfDaily. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
