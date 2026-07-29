import { useState } from "react";
import { profile } from "../data";

/*
  Circular crop of the portrait.
  public/adil.jpg is already squared and face-centred by scripts/crop-avatar.ps1,
  so this only needs to round it off — the slight scale trims the plain
  backdrop at the edges. If the image is missing we fall back to initials
  rather than shipping a broken-image icon.
*/
export default function Avatar({ src = "/adil.jpg", size = "h-32 w-32" }) {
  const [failed, setFailed] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className={`relative shrink-0 ${size}`}>
      {/* Accent ring */}
      <div
        aria-hidden
        className="absolute -inset-1 rounded-full bg-linear-to-br from-accent/60 via-accent/10 to-transparent blur-[2px]"
      />
      <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-zinc-900">
        {failed ? (
          <span className="flex h-full w-full items-center justify-center font-display text-3xl font-bold text-zinc-500">
            {initials}
          </span>
        ) : (
          <img
            src={src}
            alt={`Portrait of ${profile.name}`}
            width="320"
            height="320"
            loading="eager"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full scale-105 object-cover object-center"
          />
        )}
      </div>
    </div>
  );
}
