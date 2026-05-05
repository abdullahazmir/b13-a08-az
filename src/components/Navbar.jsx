"use client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut(); // better-auth e signOut use koro
  };

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src="/qurbani2.jpg"
            alt="logo"
            width={30}
            height={30}
          />
          <h3 className="font-black text-lg">QURBANI HAT 1</h3>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-5 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-animals">All Animals</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>

        {/* Auth Section */}
        <div className="flex gap-4">
          
          {!user && (
            <ul className="flex items-center text-sm gap-5">
              <li><Link href="/register">Register</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          )}

          {user && (
            <div className="flex gap-3 items-center">
              <Avatar size="sm">
                <Avatar.Image
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>

              <Button onClick={handleLogOut} size="sm" variant="danger">
                Sign Out
              </Button>
            </div>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;