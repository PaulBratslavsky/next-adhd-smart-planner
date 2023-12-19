"use client";
import { useParams } from "next/navigation";

export default function DynamicDateRoute() {
  const params = useParams();
  return (
    <div>
      <h1>Dynamic Date Route</h1>
      <p>params: {params.date}</p>
    </div>
  )
}
