import { SignedIn , SignedOut , SignInButton, UserButton } from "@clerk/nextjs";

export const TopHeader = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Task Manager</h1>
            <div className="flex items-center gap-4">
                <SignedOut>
                    <SignInButton mode="modal">Sign In</SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
      
      
    </header>
  );
}