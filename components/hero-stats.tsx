"use client";

import { Project } from "@/data/projects";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

type HeroStatsProps = {
  projects: Project[];
};

export function HeroStats({ projects }: HeroStatsProps) {
  const categories = ["usefulness", "execution", "creativity", "clarity", "usability"] as const;

  const averages = categories.map((key) => {
    const total = projects.reduce((sum, p) => sum + p.scores[key], 0);
    return {
      subject: key.charAt(0).toUpperCase() + key.slice(1),
      A: projects.length > 0 ? Math.round(total / projects.length) : 0,
      fullMark: 100,
    };
  });

  return (
    <div className="panel flex flex-col justify-between overflow-hidden rounded-[28px] p-6 lg:p-8">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-accent2">
              Field Averages
            </p>
            <h2 className="mt-1 text-2xl font-medium text-white">
              Global Score Profile
            </h2>
          </div>
          <div className="flex h-2 w-2 items-center justify-center rounded-full bg-emerald-400">
             <div className="h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></div>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={averages}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Radar
                name="Average"
                dataKey="A"
                stroke="#8b9cff"
                fill="#8b9cff"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
        {[
          { label: "Runs", value: "500" },
          { label: "Projects", value: String(projects.length) },
          { label: "Dimensions", value: "5" }
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              {stat.label}
            </p>
            <p className="metric-value mt-1 text-xl font-medium text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
