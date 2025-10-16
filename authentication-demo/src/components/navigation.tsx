import {
  SignedOut,
  SignInButton,
  SignedIn,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

export const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* 左側 LOGO/標題 */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
              Next.js App
            </h1>
          </div>

          {/* 右側：按鈕區 */}
          <div className="flex items-center gap-4">
            {/* Sign in button goes here */}
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            {/* Sign out button goes here */}
            <SignedIn>
              <UserButton userProfileUrl="/user-profile" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};
