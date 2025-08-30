export interface Event {
  id: string;
  name: string;
  logo: string;
  type: 'Solo' | 'Team';
  description: string;
  rules: string;
  date: string;
  time: string;
  venue: string;
  judges: Judge[];
  coordinators: Coordinator[];
  participants?: number;
}

export interface Judge {
  name: string;
  qualification: string;
}

export interface Coordinator {
  name: string;
  class: string;
  phone: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

export interface User {
  id: string;
  username: string;
  isAdmin: boolean;
}

export interface AppState {
  feedbackEnabled: boolean;
  events: Event[];
  sponsors: Sponsor[];
  user: User | null;
}
