import {redirect} from "next/navigation"

export default function Home() {

  return (
      // In a real app, you would check if the user is authenticated
      // If not, show the landing page
      // For this demo, we'll redirect to the dashboard
    redirect("/dashboard")
    


  );
}
