"use client";

import { useState } from "react";
import { UserRound } from "lucide-react";

interface Props {
  name: string;
  oab: string;
  experience: string;
  bio: string;
  photo?: string;
}

export function TeamCard({ name, oab, experience, bio, photo }: Props) {
  const [failed, setFailed] = useState(false);
  const showPhoto = photo && !failed;

  return (
    <article className="group overflow-hidden rounded-card border border-line bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-card-hover">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-soft">
        {showPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={`Foto de ${name}`}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-navy/40">
            <UserRound className="h-24 w-24" aria-hidden />
          </div>
        )}
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-serif text-2xl text-navy">{name}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="eyebrow bg-soft text-navy">{oab}</span>
          <span className="eyebrow bg-soft text-navy">{experience}</span>
        </div>
        <p className="mt-4 leading-relaxed text-muted">{bio}</p>
      </div>
    </article>
  );
}
