import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Droplets, Heart, GraduationCap, HeartHandshake, AlertTriangle } from 'lucide-react';

/* ─── Region data ─── */
export type FilterKey = 'all' | 'healthcare' | 'education' | 'water' | 'women' | 'emergency';

interface RegionInfo {
    id: string;
    name: string;
    city: string;
    cx: number; // SVG x
    cy: number; // SVG y
    interventions: string[];
    description: string;
    heatmap: Record<FilterKey, number>; // 0–1 intensity
}

const regions: RegionInfo[] = [
    {
        id: 'littoral',
        name: 'Littoral Region',
        city: 'Douala',
        cx: 108,
        cy: 368,
        interventions: ['Clean Water Support', 'Healthcare Assistance', 'Emergency Relief'],
        description: 'Douala, the economic capital, faces rapid urbanisation challenges. We deliver clean water systems, mobile healthcare clinics, and emergency relief to informal settlements.',
        heatmap: { all: 0.9, healthcare: 0.9, education: 0.5, water: 0.95, women: 0.6, emergency: 0.85 },
    },
    {
        id: 'centre',
        name: 'Centre Region',
        city: 'Yaoundé',
        cx: 195,
        cy: 390,
        interventions: ['Scholarship Support', 'School Rehabilitation', 'Teacher Rewards'],
        description: 'Yaoundé hosts our scholarship headquarters. We fund secondary and university students, rehabilitate schools, and recognise outstanding teachers across the Centre region.',
        heatmap: { all: 0.8, healthcare: 0.4, education: 0.95, water: 0.3, women: 0.55, emergency: 0.3 },
    },
    {
        id: 'northwest',
        name: 'North West Region',
        city: 'Bamenda',
        cx: 95,
        cy: 290,
        interventions: ['Emergency Relief', 'Women & Single Mother Support', 'Healthcare'],
        description: 'The North West region has experienced significant humanitarian need. We provide emergency relief, healthcare supplies, and dedicated support for women and single mothers.',
        heatmap: { all: 0.95, healthcare: 0.85, education: 0.6, water: 0.7, women: 0.95, emergency: 0.99 },
    },
    {
        id: 'southwest',
        name: 'South West Region',
        city: 'Buea',
        cx: 75,
        cy: 335,
        interventions: ['Emergency Relief', 'Clean Water', 'School Rehabilitation'],
        description: 'Buea and surrounding communities receive emergency relief packages and clean water infrastructure. We partner with local schools for rehabilitation and student support.',
        heatmap: { all: 0.85, healthcare: 0.7, education: 0.65, water: 0.8, women: 0.7, emergency: 0.9 },
    },
    {
        id: 'west',
        name: 'West Region',
        city: 'Bafoussam',
        cx: 135,
        cy: 320,
        interventions: ['Women & Single Mother Support', 'Scholarship Support', 'Healthcare'],
        description: 'Bafoussam is home to our largest women empowerment programme. We support single mothers with micro-grants, skills training, and access to healthcare services.',
        heatmap: { all: 0.8, healthcare: 0.75, education: 0.7, water: 0.5, women: 0.95, emergency: 0.4 },
    },
];

const filters: { key: FilterKey; label: string; color: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'All Programs', color: '#16a34a', icon: null },
    { key: 'healthcare', label: 'Healthcare Situations', color: '#dc2626', icon: <Heart className="w-3.5 h-3.5" /> },
    { key: 'education', label: 'Education Support', color: '#2563eb', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { key: 'water', label: 'Clean Water Crisis', color: '#0891b2', icon: <Droplets className="w-3.5 h-3.5" /> },
    { key: 'women', label: 'Women & Mothers', color: '#9333ea', icon: <HeartHandshake className="w-3.5 h-3.5" /> },
    { key: 'emergency', label: 'Emergency Relief', color: '#ea580c', icon: <AlertTriangle className="w-3.5 h-3.5" /> },
];

/* ─── Helper: interpolate color with intensity ─── */
function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r},${g},${b})`;
}

const CameroonMap = () => {
    const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
    const [selectedRegion, setSelectedRegion] = useState<RegionInfo | null>(null);

    const activeFilterData = filters.find(f => f.key === activeFilter)!;

    return (
        <div className="w-full">
            {/* ── Map Container ── */}
            <div className="relative bg-gradient-to-br from-green-50 via-slate-50 to-teal-50 rounded-3xl overflow-hidden border border-green-100 shadow-xl">
                <svg
                    viewBox="0 0 380 500"
                    className="w-full max-h-[520px]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    {/* Ocean background */}
                    <defs>
                        <radialGradient id="oceanGrad" cx="50%" cy="50%">
                            <stop offset="0%" stopColor="#e0f2fe" />
                            <stop offset="100%" stopColor="#bae6fd" />
                        </radialGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                        <filter id="shadow">
                            <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.15" />
                        </filter>
                    </defs>

                    {/* Background ocean */}
                    <rect width="380" height="500" fill="url(#oceanGrad)" rx="24" />

                    {/* ── Cameroon country outline ── */}
                    {/* Simplified polygon approximating Cameroon's shape */}
                    <path
                        d="
                          M 62 335
                          L 55 355
                          L 60 378
                          L 65 400
                          L 72 420
                          L 80 435
                          L 100 440
                          L 130 442
                          L 165 443
                          L 200 444
                          L 240 444
                          L 270 442
                          L 300 438
                          L 320 420
                          L 335 395
                          L 340 365
                          L 345 330
                          L 350 295
                          L 345 255
                          L 335 220
                          L 320 185
                          L 300 155
                          L 280 120
                          L 265 90
                          L 250 65
                          L 235 45
                          L 215 30
                          L 195 20
                          L 175 18
                          L 155 22
                          L 140 35
                          L 130 55
                          L 120 80
                          L 110 110
                          L 100 140
                          L 88 170
                          L 75 200
                          L 62 230
                          L 50 258
                          L 42 282
                          L 48 305
                          L 56 318
                          L 62 335 Z
                        "
                        fill="#e8f5e9"
                        stroke="#a5d6a7"
                        strokeWidth="2"
                        filter="url(#shadow)"
                    />

                    {/* ── Heatmap overlays per region ── */}
                    {regions.map((region) => {
                        const intensity = region.heatmap[activeFilter];
                        const color = activeFilterData.color;
                        return (
                            <motion.circle
                                key={`heat-${region.id}`}
                                cx={region.cx}
                                cy={region.cy}
                                initial={{ r: 0, opacity: 0 }}
                                animate={{ r: intensity * 55, opacity: intensity * 0.35 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                fill={color}
                                style={{ pointerEvents: 'none' }}
                            />
                        );
                    })}

                    {/* ── Region labels (background badges) ── */}
                    {regions.map((region) => (
                        <text
                            key={`label-${region.id}`}
                            x={region.cx}
                            y={region.cy + 38}
                            textAnchor="middle"
                            fontSize="9"
                            fill="#374151"
                            fontWeight="600"
                            opacity="0.8"
                        >
                            {region.name.split(' ')[0]}
                        </text>
                    ))}

                    {/* ── Clickable markers ── */}
                    {regions.map((region) => {
                        const isSelected = selectedRegion?.id === region.id;
                        const intensity = region.heatmap[activeFilter];
                        return (
                            <g
                                key={region.id}
                                className="map-marker"
                                onClick={() => setSelectedRegion(isSelected ? null : region)}
                                style={{ cursor: 'pointer' }}
                            >
                                {/* Outer ring */}
                                <motion.circle
                                    cx={region.cx}
                                    cy={region.cy}
                                    animate={{ r: isSelected ? 20 : 14, opacity: isSelected ? 0.4 : 0.25 }}
                                    transition={{ duration: 0.3 }}
                                    fill={activeFilterData.color}
                                />
                                {/* Inner pin */}
                                <motion.circle
                                    cx={region.cx}
                                    cy={region.cy}
                                    animate={{
                                        r: isSelected ? 11 : 8,
                                        fill: isSelected ? activeFilterData.color : '#16a34a',
                                    }}
                                    transition={{ duration: 0.3 }}
                                    stroke="white"
                                    strokeWidth="2.5"
                                    filter={isSelected ? 'url(#glow)' : undefined}
                                />
                                {/* Intensity indicator */}
                                <circle
                                    cx={region.cx + 7}
                                    cy={region.cy - 7}
                                    r="5"
                                    fill={intensity > 0.8 ? '#dc2626' : intensity > 0.6 ? '#f59e0b' : '#16a34a'}
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                {/* City label */}
                                <text
                                    x={region.cx}
                                    y={region.cy - 16}
                                    textAnchor="middle"
                                    fontSize="8.5"
                                    fill="#1e293b"
                                    fontWeight="700"
                                >
                                    {region.city}
                                </text>
                            </g>
                        );
                    })}

                    {/* Map title */}
                    <text x="190" y="480" textAnchor="middle" fontSize="10" fill="#6b7280" fontWeight="600">
                        Cameroon — Enako Outreach Focus Regions
                    </text>
                </svg>

                {/* North indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-600">
                    N
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
                    {[
                        { color: '#dc2626', label: 'High Priority' },
                        { color: '#f59e0b', label: 'Medium Priority' },
                        { color: '#16a34a', label: 'Active Programs' },
                    ].map((l) => (
                        <div key={l.label} className="flex items-center gap-1.5 text-[9px] font-semibold text-slate-600 bg-white/80 rounded-full px-2 py-0.5">
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: l.color }} />
                            {l.label}
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Region Info Panel ── */}
            <AnimatePresence>
                {selectedRegion && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 bg-white rounded-2xl border border-green-100 shadow-xl p-6 relative"
                    >
                        <button
                            onClick={() => setSelectedRegion(null)}
                            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                        >
                            <X className="w-4 h-4 text-slate-500" />
                        </button>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                                <span className="text-green-600 text-xl font-black">{selectedRegion.city[0]}</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-black text-slate-900 text-lg">{selectedRegion.name}</h4>
                                <p className="text-green-600 text-xs font-semibold mb-2">{selectedRegion.city}</p>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{selectedRegion.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedRegion.interventions.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Filter Buttons ── */}
            <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Filter by Program Category</p>
                <div className="flex flex-wrap gap-2">
                    {filters.map((f) => (
                        <motion.button
                            key={f.key}
                            onClick={() => setActiveFilter(f.key)}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${activeFilter === f.key
                                ? 'text-white shadow-lg'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                            style={activeFilter === f.key ? {
                                backgroundColor: f.color,
                                borderColor: f.color,
                                boxShadow: `0 8px 20px ${f.color}40`,
                            } : {}}
                        >
                            {f.icon}
                            {f.label}
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CameroonMap;
