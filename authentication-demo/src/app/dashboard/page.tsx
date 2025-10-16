import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
    const {userId} = await auth();
    const curobj = await currentUser();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Current user ID: {userId}</p>
            <p>Current user: {curobj?.firstName}</p>
        </div>
    );
}