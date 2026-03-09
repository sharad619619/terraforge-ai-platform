import { ProbabilityZone } from "@/data/demo-regions";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { X, Target, Brain, TrendingUp } from "lucide-react";

interface Props {
  zone: ProbabilityZone;
  onClose: () => void;
}

export default function ZoneDetailPanel({ zone, onClose }: Props) {
  const factorData = [
    { name: "Terrain", value: zone.factors.terrain, color: "#22c55e" },
    { name: "Geological", value: zone.factors.geological, color: "#3b82f6" },
    { name: "Spectral", value: zone.factors.spectral, color: "#f97316" },
    { name: "Historical", value: zone.factors.historical, color: "#a855f7" },
  ];

  const classColor =
    zone.classification === "High" ? "text-green-600" :
    zone.classification === "Medium" ? "text-orange-500" : "text-red-500";

  return (
    <div 
      className="p-5 space-y-4 animate-fade-in-up rounded-xl"
      style={{
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(6px)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        border: "1px solid rgba(0,0,0,0.08)"
      }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold flex items-center gap-2 text-[#0f172a]">
          <Target size={14} className="text-forge-orange" />
          {zone.name}
        </h3>
        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 transition-colors text-[#374151]">
          <X size={14} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
          <p className="text-[10px] text-[#374151] mb-1">Probability</p>
          <p className={`text-lg font-bold ${classColor}`}>{zone.probability}%</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
          <p className="text-[10px] text-[#374151] mb-1">Classification</p>
          <p className={`text-sm font-semibold ${classColor}`}>{zone.classification}</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
          <p className="text-[10px] text-[#374151] mb-1">Confidence</p>
          <p className="text-sm font-semibold text-blue-600">{zone.confidenceScore}%</p>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-[#374151] mb-2 flex items-center gap-1">
          <Brain size={12} /> AI Feature Contribution
        </p>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={factorData} layout="vertical" margin={{ left: 0, right: 10 }}>
            <XAxis type="number" domain={[0, 40]} tick={{ fontSize: 10, fill: "#4b5563" }} />
            <YAxis type="category" dataKey="name" width={70} tick={{ fontSize: 10, fill: "#111827" }} />
            <Tooltip
              contentStyle={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, color: "#111827" }}
              formatter={(value: number) => [`${value}%`, "Contribution"]}
              labelStyle={{ color: "#111827" }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {factorData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <p className="text-xs font-semibold text-[#374151] mb-2 flex items-center gap-1">
          <TrendingUp size={12} /> Prediction Explanation
        </p>
        <ul className="space-y-1.5">
          {zone.explanation.map((exp, i) => (
            <li key={i} className="text-xs text-[#1f2937] flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-forge-orange shrink-0" />
              {exp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
