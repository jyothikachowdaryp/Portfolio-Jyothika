import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experience, education } from '../data';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <VerticalTimeline lineColor={'rgba(255, 255, 255, 0.1)'}>
            {/* Experience */}
            {experience.map((exp, idx) => (
                <VerticalTimelineElement
                    key={idx}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
                    date={exp.period}
                    iconStyle={{ background: '#6d28d9', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title text-2xl font-bold text-white">{exp.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle text-purple-400 mt-1">{exp.company}</h4>
                    <span className="text-sm text-gray-500 block mb-4">{exp.location}</span>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                        {exp.description.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </VerticalTimelineElement>
            ))}

            {/* Education */}
            {education.map((edu, idx) => (
                <VerticalTimelineElement
                    key={`edu-${idx}`}
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
                    date={edu.year}
                    iconStyle={{ background: '#db2777', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title text-2xl font-bold text-white">{edu.degree}</h3>
                    <h4 className="vertical-timeline-element-subtitle text-pink-400 mt-1">{edu.school}</h4>
                    <p className="text-gray-300 text-sm mt-2">
                        {edu.description}
                    </p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Resume;
