export interface Experience {
    company: string;
    position: string;
    location: string;
    duration?: string;
    responsibilities: string[];
  }
  
  export interface SkillCategory {
    category: string;
    items: string[];
  }
  
  export interface Testimonial {
    name: string;
    position: string;
    company: string;
    phone: string;
    text: string;
  }
  
  export interface Message {
    text: string;
    type: 'success' | 'error' | '';
  }

  export interface SkillCategory {
    category: string;
    items: string[];
  }