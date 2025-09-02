import React from 'react';
import { Heart, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate creative professional combining artistic vision with technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Heart className="h-8 w-8 text-pink-500 mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Creative Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  My journey began with a love for drawing and storytelling. Through 2D animation, 
                  I bring characters and narratives to life, creating emotional connections through visual storytelling.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Lightbulb className="h-8 w-8 text-yellow-500 mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  In UI/UX design, I focus on creating intuitive, beautiful interfaces that enhance user experience. 
                  Every design decision is made with usability and aesthetics in perfect harmony.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Target className="h-8 w-8 text-indigo-500 mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  With a strong foundation in computer science and ongoing MCA studies, I bridge the gap 
                  between creative vision and technical implementation, exploring machine learning and web development.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Current Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Finalizing MCA at Kongu Engineering College</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Graphic Design Intern at Zaalima Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Exploring Data Science & Machine Learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Seeking opportunities in Animation & Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;