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

const DateDisplay = ({
  date,
  position,
}: {
  date: string;
  position: 'start' | 'end';
}) => (
  <div
    className={`timeline-${position} w-20 text-sm font-medium opacity-60 md:w-28 ${
      position === 'start' ? 'pr-2 text-right' : 'pl-2 text-left'
    }`}
  >
    {date}
  </div>
);

const ContentDisplay = ({
  title,
  description,
  position,
}: {
  title: string;
  description: string;
  position: 'start' | 'end';
}) => (
  <div
    className={`timeline-box timeline-${position} ${
      position === 'start' ? 'text-right' : ''
    }`}
  >
    <h3 className="mb-1 font-semibold leading-tight">{title}</h3>
    <p className="text-sm opacity-80">{description}</p>
  </div>
);

/**
 * A responsive, vertical timeline that alternates content on the left and right.
 * On mobile, the date column is narrower.
 */
export function Timeline({ items }: TimelineProps) {
  return (
    <ul className="timeline timeline-vertical mx-auto w-full max-w-3xl">
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        const isLast = index === items.length - 1;
        return (
          <li key={`${item.date}-${item.title}`} className="relative">
            {/* Vertical line */}
            {!isLast && (
              <div className="absolute left-1/2 top-6 h-[calc(100%+2rem)] w-0.5 -translate-x-1/2 bg-primary" />
            )}

            {isEven ? (
              <DateDisplay date={item.date} position="start" />
            ) : (
              <ContentDisplay
                title={item.title}
                description={item.description}
                position="start"
              />
            )}

            <div className="timeline-middle relative z-10">
              <span className="block h-3 w-3 rounded-full bg-primary" />
            </div>

            {isEven ? (
              <ContentDisplay
                title={item.title}
                description={item.description}
                position="end"
              />
            ) : (
              <DateDisplay date={item.date} position="end" />
            )}
          </li>
        );
      })}
    </ul>
  );
}
