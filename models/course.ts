export interface Course {
  _id: string,
  code: string,
  title: string,
  subtitle: string,
  hook: string[],
  image: string,
  instructor: string,
  category: string,
  currentlyEnrolled: number,
  locationCode: string,
  zoom_link: string,
  priceNZD: number,
  sessions: Session[],
  times: string[],
  timezone: string,
  term: number,
  year: number
}

export interface Session {
  date: string,
  day: string,
  description: string,
  image: string,
  topic: string,
  video?: string
}