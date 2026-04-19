export const COLORS = {
  navy: "#0A1628",
  gold: "#C9973A",
  goldLight: "#E8B95A",
  cream: "#FAF7F2",
  crimson: "#8C1515",
  white: "#FFFFFF",
  slate: "#4A5568",
  lightSlate: "#EDF2F7",
};

export const universities = ["Stanford University", "NYU", "UCLA", "UC Berkeley", "USC", "UCSD"];

export const services = [
  { icon: "📝", title: "SAT Prep", desc: "Targeted strategies and practice for top scores", color: "#C9973A" },
  { icon: "∫", title: "Mathematics", desc: "From algebra to multivariable calculus", color: "#8C1515" },
  { icon: "⚛️", title: "Physics & Sciences", desc: "Biology, Chemistry, Physics & more", color: "#2D6A4F" },
  { icon: "</>", title: "Programming / CS", desc: "Python, Java, algorithms & data structures", color: "#1A56DB" },
  { icon: "🎓", title: "College Consulting", desc: "Essays, applications & strategy", color: "#6B46C1" },
  { icon: "🎸", title: "Music (Guitar)", desc: "Classical, acoustic & electric guitar", color: "#C05621" },
];

export const reviews = [
  { name: "Austin M.", score: "Guitar Student", avatar: "A", text: "Yasha has been an exceptional guitar instructor, demonstrating patience, encouragement, and a strong ability to adapt his teaching to my skill level. Under his guidance I have made significant progress in my technical ability, speed, and overall knowledge as a guitarist." },
  { name: "Eli R.", score: "CS Student", avatar: "E", text: "Eli has made amazing progress in Python thanks to SwiftlyStudy. He quickly learned all of the fundamentals like for loops, while loops, conditionals, and basic problem solving, and he consistently shows curiosity and creativity when building his own programs." },
  { name: "Vedant M.", score: "Physics Student", avatar: "V", text: "This program really helped me improve the way I approach physics and problem solving. Concepts that seemed confusing at first became much clearer, and I learned how to break down difficult problems step by step. The sessions were always helpful, and I feel much more confident in my physics and analytical thinking skills." },
  { name: "Isa S.", score: "Algebra Student", avatar: "I", text: "Participating in this program changed how I approach algebra for the better. Topics that used to stress me out finally started to finally make sense. The tutoring from Yasha and Jacob was awesome and left me with a much better understanding of math." },
];

export const tutors = [
  { name: "Yasha S.", school: "Stanford", subjects: ["Math", "College Consulting", "Physics", "Guitar", "Programming / CS"], photo: "/yasha.jpg", gpa: "4.1" },
  { name: "Yanai H.", school: "Berkeley", subjects: ["Math", "College Consulting", "Physics", "Guitar", "Programming / CS"], photo: "/yanai.jpg", gpa: "4.1" },
  { name: "Helio H.", school: "NYU", subjects: ["SAT Prep", "Chemistry", "Math", "Physics"], photo: "/helio.png", gpa: "4.0" },
  { name: "Jacob G.", school: "UCLA", subjects: ["Biology", "Math", "Chemistry", "SAT Prep"], photo: "/jacob.png", gpa: "4.0" },
  { name: "Jack T.", school: "UCSD", subjects: ["Math", "College Consulting", "Physics", "Guitar", "Programming / CS"], photo: "/jack.png", gpa: "4.1" },
];

export const consultingTutors = [
  {
    name: "Yasha S.",
    school: "Stanford University",
    photo: "/yasha.jpg",
    specialties: ["Essays", "Strategy", "STEM Applicants"],
    bio: "I'm a current Stanford student studying Computer Science. I went through the admissions process knowing almost nothing about how it worked — and got in anyway by accident. Now I help students do it intentionally. My approach focuses on identifying the one thing that makes you genuinely irreplaceable on a campus, and building every piece of the application around that. I've helped students get into Stanford, MIT, and several other T10 schools by treating the application as a design problem, not a checklist.",
  },
  {
    name: "Yanai H.",
    school: "UC Berkeley",
    photo: "/yanai.jpg",
    specialties: ["Essays", "Activity List", "UC System"],
    bio: "As a Berkeley student, I know firsthand what the UC system is actually looking for — and it's almost never what applicants think. I specialize in helping students cut through the noise and build applications that are honest, specific, and compelling. Before working with Swiftly, I tutored independently for two years. My students have been admitted to Berkeley, UCLA, UCSD, and several Ivy League schools. I care most about making sure your application sounds like you — not like a template.",
  },
];