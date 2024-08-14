import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Card from "./Card";

export default function Courses() {
  const courses = useQuery(api.courses.get)
  return (
    <div className="flex w-full h-full">
      {courses && courses.map((course) => (
        <Card key={course._id} {...course} />
      ))}
    </div>
  )
}