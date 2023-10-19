import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-3xl">
      This is a protected route
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
