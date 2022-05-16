import React, { ReactNode } from "react";
import AnnounceBar from "./AnnounceBar";
import Footer from "./Footer";
import Nav from "./Nav";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnounceBar />
      <Nav />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
