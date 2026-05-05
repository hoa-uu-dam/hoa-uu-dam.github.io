export type EventItem = {
  id: string;
  date: { day: number; month: string; weekday: string };
  time: string;
  teacher: string;
  imageLabel: string;
  filterTag: 'retreat' | 'day' | 'daily';
};

export const EVENTS: EventItem[] = [
  {
    id: 'peaceWalk',
    date: { day: 9, month: 'MAY', weekday: 'SAT' },
    time: '8:00 AM – 5:00 PM',
    teacher: 'Sister Chân An',
    imageLabel: 'walking meditation in temple garden',
    filterTag: 'retreat',
  },
  {
    id: 'trueLove',
    date: { day: 15, month: 'MAY', weekday: 'FRI' },
    time: 'May 15 – May 17',
    teacher: 'Brother Chân Pháp Niệm',
    imageLabel: 'meditation hall interior at dawn',
    filterTag: 'retreat',
  },
  {
    id: 'dayOfMindfulness',
    date: { day: 21, month: 'MAY', weekday: 'THU' },
    time: '8:00 AM – 5:00 PM',
    teacher: 'Resident Sangha',
    imageLabel: 'monks and nuns walking in line',
    filterTag: 'day',
  },
  {
    id: 'morningSitting',
    date: { day: 4, month: 'JUN', weekday: 'THU' },
    time: '5:45 AM – 6:45 AM',
    teacher: 'Online Sangha',
    imageLabel: 'altar candles at dawn',
    filterTag: 'daily',
  },
];

export type TeachingItem = {
  id: string;
  teacher: string;
  duration: string;
};

export const TEACHINGS: TeachingItem[] = [
  {
    id: 'heartOfUnderstanding',
    teacher: 'Thích Nhất Hạnh',
    duration: '32 min',
  },
  { id: 'walkingMeditation', teacher: 'Sister Chân An', duration: '18 min' },
  {
    id: 'fiveTrainings',
    teacher: 'Brother Chân Pháp Niệm',
    duration: '45 min',
  },
  { id: 'beginningAnew', teacher: 'Sister Chân Đức', duration: '24 min' },
];

export type AnnouncementItem = {
  id: string;
  date: string;
  imageLabel: string | null;
};

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'trueLoveRetreat',
    date: 'May 12, 2025',
    imageLabel: 'news · weekend retreat',
  },
  {
    id: 'australiaTour',
    date: 'May 04, 2025',
    imageLabel: 'news · australia tour',
  },
  { id: 'togetherFuture', date: 'Apr 28, 2025', imageLabel: null },
  { id: 'exhibition', date: 'Apr 19, 2025', imageLabel: 'news · exhibition' },
  { id: 'bankAccount', date: 'Apr 02, 2025', imageLabel: null },
  { id: 'morningSit', date: 'Mar 24, 2025', imageLabel: null },
];

export const NAV_ITEMS = [
  { id: 'home', path: '/' },
  { id: 'about', path: '/about' },
  { id: 'events', path: '/events' },
  { id: 'teachings', path: '/teachings' },
  { id: 'news', path: '/news' },
  { id: 'resources', path: '/resources' },
  { id: 'contact', path: '/contact' },
] as const;

export type NavId = (typeof NAV_ITEMS)[number]['id'];
