import { useEffect, useState } from "react";

export default function DynamicUserActivity() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    fetch("/api/user/activity")
      .then((res) => res.json())
      .then(setActivity);
  }, []);

  if (!activity) return <div>Loading...</div>;

  return (
    <div>
      <h2>Recent Activity</h2>
      {activity.map((item, index) => (
        <div key={index}>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
