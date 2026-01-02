import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Sections = ({ title, children }: SectionProps) => {
  return (
    <>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        {title}
      </h2>
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </>
  );
};

export default Sections;
