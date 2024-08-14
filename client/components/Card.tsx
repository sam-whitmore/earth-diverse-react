import { Course } from "../../models/course"

export default function Card(course: Course) {
  return (
    <div className="w-1/5 h-1/3 m-2 p-2 border-2 border-orange-300 rounded-xl">
      <h1 className="text-lg">{course.title}</h1>
      <p className="text-xs italic">{course.subtitle}</p>
    </div>
  )
}