// components/Timeline.tsx
import React from 'react';

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface TimelineProps {
  items: TimelineItem[];
}

/**
 * Clean vertical timeline on the **left** side only – mirrors the
 * "vertical-left" demo in DaisyUI docs.
 */
export function Timeline({ items }: TimelineProps) {
  return (
    <ul className="timeline timeline-vertical mx-auto w-full max-w-3xl">
      {items.map((item, idx) => (
        <li key={`${item.date}-${item.title}`}>
          {/* --- date label (left column) --- */}
          <hr />
          <div className="timeline-start w-28 pr-2 text-right text-sm font-medium opacity-60">
            {item.date}
          </div>

          {/* --- dot (middle column) --- */}
          <div className="timeline-middle">
            <span className="block h-3 w-3 rounded-full bg-primary"></span>
          </div>

          {/* --- content box (right column) --- */}
          <div className="timeline-box timeline-end">
            <h3 className="mb-1 font-semibold leading-tight">{item.title}</h3>
            <p className="text-sm opacity-80">{item.description}</p>
          </div>

          {/* --- connector line (except after last item) --- */}
          <hr />
        </li>
      ))}
    </ul>
  );
}
