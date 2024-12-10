"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import useMovie from "@/hooks/use-movie";
import { useRef } from "react";

export default function SearchSection() {
  const { handleSearch } = useMovie();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(inputRef.current?.value.trim() || "");
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <form className="flex flex-col sm:flex-row gap-4 justify-center items-center" onSubmit={handleSubmit}>
        <Input type="text" placeholder="영화를 검색해보세요..." ref={inputRef} />
        <Button type="submit">Search</Button>
      </form>
    </section>
  );
} 