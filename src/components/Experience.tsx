import React from 'react';
import { Briefcase, Calendar, Award, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Graphic Design Intern",
      company: "Zaalima Development",
      duration: "Ongoing – 3 months",
      type: "Current",
      responsibilities: [
        "Working on enterprise-level UI/UX project: FinFlow Pro (secure digital banking platform)",
        "Designed wireframes, prototypes, and UI systems in Figma",
        "Conducted user research and usability testing",
        "Collaborated with development team on design implementation"
      ]
    },
    {
      title: "Design Intern",
      company: "Cognifyz Technologies",
      duration: "Completed",
      type: "Certificate",
      responsibilities: [
        "Contributed to design-related tasks and learning modules",
        "Gained hands-on experience with industry design workflows",
        "Completed certification in graphic design principles"
      ]
    },
    {
      title: "Freelance Designer",
      company: "Independent Projects",
      duration: "Ongoing",
      type: "Freelance",
      responsibilities: [
        "Completed multiple 2D animations and motion graphics",
        "Created promotional posters and social media content",
        "Designed meme content and viral graphics",
        "Sample UI page designs for various clients"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Current': return 'bg-green-100 text-green-800 border-green-200';
      case 'Certificate': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Freelance': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600">
            Professional journey in design and development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{exp.duration}</span>
                    </div>
                  </div>
                </div>
                
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(exp.type)}`}>
                  {exp.type === 'Current' && <Users className="h-4 w-4 mr-1" />}
                  {exp.type === 'Certificate' && <Award className="h-4 w-4 mr-1" />}
                  {exp.type === 'Freelance' && <Briefcase className="h-4 w-4 mr-1" />}
                  {exp.type}
                </span>
              </div>
              
              <div className="space-y-2">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <div key={respIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;