import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { FiStar, FiMapPin, FiX, FiChevronLeft, FiChevronRight, FiUsers, FiTag, FiZap, FiCalendar } from "react-icons/fi";
import { MdLocalGasStation, MdSettingsInputComponent } from "react-icons/md";
import { createPortal } from "react-dom";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const API = "https://varahibackend.varahiselfdrivecars.com/api/car/get-cars";

const STATUS_CONFIG = {
    active: { label: "Available", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
    onHold: { label: "On Hold", color: "bg-amber-100 text-amber-700 border-amber-200" },
    underRepair: { label: "Under Repair", color: "bg-red-100 text-red-700 border-red-200" },
};

/* ─── Car Detail Modal (Portal — renders into document.body) ─── */
const CarModal = ({ car, onClose }) => {
    const [imgIdx, setImgIdx] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    if (!car) return null;
    const status = STATUS_CONFIG[car.status] || STATUS_CONFIG.active;

    return createPortal(
        <div
            style={{ position: "fixed", inset: 0, zIndex: 9999 }}
            className="flex items-end sm:items-center justify-center sm:p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white w-full sm:max-w-3xl sm:rounded-3xl rounded-t-3xl shadow-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Drag handle on mobile */}
                <div className="flex justify-center pt-3 pb-1 sm:hidden">
                    <div className="w-10 h-1 rounded-full bg-gray-300" />
                </div>

                <div className="relative h-48 sm:h-64 overflow-hidden sm:rounded-t-3xl bg-gray-100">
                    <img
                        src={car.carImage?.[imgIdx]}
                        alt={car.carName}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/600x300"; }}
                    />
                    <button onClick={onClose} className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition">
                        <FiX />
                    </button>
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full">
                        <FiStar size={11} /> PREMIUM
                    </div>
                    {car.carImage?.length > 1 && (
                        <>
                            <button onClick={() => setImgIdx((i) => (i - 1 + car.carImage.length) % car.carImage.length)}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                <FiChevronLeft />
                            </button>
                            <button onClick={() => setImgIdx((i) => (i + 1) % car.carImage.length)}
                                className="absolute right-14 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                <FiChevronRight />
                            </button>
                        </>
                    )}
                </div>

                {car.carImage?.length > 1 && (
                    <div className="flex gap-2 px-4 sm:px-5 pt-3 overflow-x-auto">
                        {car.carImage.map((img, i) => (
                            <button key={i} onClick={() => setImgIdx(i)}
                                className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 transition ${i === imgIdx ? "border-amber-400" : "border-transparent"}`}>
                                <img src={img} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/56"; }} />
                            </button>
                        ))}
                    </div>
                )}

                <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{car.carName}</h2>
                            <p className="text-sm text-gray-500 mt-0.5">{car.model} · {car.year}</p>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold border ${status.color}`}>{status.label}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-3 sm:p-4 text-center">
                            <p className="text-xs text-blue-500 font-medium uppercase tracking-wide mb-1">Per Hour</p>
                            <p className="text-xl sm:text-2xl font-bold text-blue-700">₹{car.pricePerHour?.toLocaleString("en-IN")}</p>
                        </div>
                        <div className="bg-green-50 border border-green-100 rounded-2xl p-3 sm:p-4 text-center">
                            <p className="text-xs text-green-500 font-medium uppercase tracking-wide mb-1">Per Day</p>
                            <p className="text-xl sm:text-2xl font-bold text-green-700">₹{car.pricePerDay?.toLocaleString("en-IN")}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
                        {[
                            { icon: <MdLocalGasStation />, label: "Fuel", value: car.fuel },
                            { icon: <MdSettingsInputComponent />, label: "Transmission", value: car.type },
                            { icon: <FiUsers />, label: "Seats", value: `${car.seats} Seats` },
                            { icon: <FiTag />, label: "Type", value: car.carType },
                        ].map(({ icon, label, value }) => (
                            <div key={label} className="bg-gray-50 rounded-xl p-2.5 sm:p-3 text-center">
                                <span className="text-amber-500 flex justify-center mb-1 text-lg">{icon}</span>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</p>
                                <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-0.5">{value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="flex items-center gap-1.5 text-xs sm:text-sm bg-gray-100 px-3 py-1.5 rounded-full text-gray-600">
                            <FiMapPin size={13} className="text-red-400" /> {car.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs sm:text-sm bg-gray-100 px-3 py-1.5 rounded-full text-gray-600">
                            <FiTag size={13} className="text-blue-400" /> {car.vehicleNumber}
                        </span>
                        {car.branch?.name && (
                            <span className="flex items-center gap-1.5 text-xs sm:text-sm bg-gray-100 px-3 py-1.5 rounded-full text-gray-600">
                                <FiZap size={13} className="text-purple-400" /> {car.branch.name}
                            </span>
                        )}
                    </div>

                    {car.description && (
                        <p className="text-sm text-gray-500 bg-gray-50 rounded-xl p-3 mb-4">{car.description}</p>
                    )}

                    {car.depositOptions?.length > 0 && (
                        <div className="mb-4">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Deposit Options</p>
                            <div className="flex gap-2 flex-wrap">
                                {car.depositOptions.map((d) => (
                                    <span key={d} className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200 font-medium">{d}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {car.bookedStatus?.length > 0 && (
                        <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                <FiCalendar className="inline mr-1" />Booking History ({car.bookedStatus.length})
                            </p>
                            <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1">
                                {car.bookedStatus.map((b, i) => (
                                    <div key={i} className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">{b}</div>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* Book Now Section */}
                    <div className="mt-6 border-t pt-4">
                        <h3 className="text-sm font-semibold text-center text-gray-700 mb-3">Book Now via App</h3>

                        <div className="flex flex-col justify-center sm:flex-row gap-3">

                            {/* Google Play */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.self_drive_cars"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white text-sm font-semibold shadow-md hover:scale-105 transition"
                            >
                                <FaGooglePlay size={22} />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-[10px] opacity-80 uppercase tracking-wide">Get it on</span>
                                    <span>Google Play</span>
                                </div>
                            </a>

                            {/* Apple App Store */}
                            <a
                                href="https://apps.apple.com/in/app/varahi-self-drive-cars/id6753347255"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-semibold shadow-md hover:scale-105 transition"
                            >
                                <FaApple size={22} />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-[10px] opacity-80 uppercase tracking-wide">Download on the</span>
                                    <span>App Store</span>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
/* ─── Premium Marquee Card ─── */
const PremiumMarqueeCard = ({ car, onClick }) => {
    const status = STATUS_CONFIG[car.status] || STATUS_CONFIG.active;
    return (
        <div
            onClick={onClick}
            className="flex-shrink-0 w-56 sm:w-64 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden mx-2 group"
        >
            <div className="relative h-32 sm:h-36 overflow-hidden bg-gray-100">
                <img
                    src={car.carImage?.[0]}
                    alt={car.carName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/256x144?text=No+Image"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-2 left-2 flex items-center gap-1 bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    <FiStar size={9} /> PREMIUM
                </div>
                <span className={`absolute top-2 right-2 text-[9px] px-2 py-0.5 rounded-full font-semibold border ${status.color}`}>
                    {status.label}
                </span>
            </div>
            <div className="p-3">
                <h3 className="font-bold text-gray-900 text-sm leading-tight truncate">{car.carName}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5 truncate">{car.model} · {car.year}</p>
                <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1.5">
                    <FiMapPin size={10} className="text-red-400 flex-shrink-0" />
                    <span className="truncate">{car.location}</span>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                    <div>
                        <span className="text-base font-bold text-blue-600">₹{car.pricePerDay?.toLocaleString("en-IN")}</span>
                        <span className="text-[10px] text-gray-400">/day</span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold text-gray-600">₹{car.pricePerHour?.toLocaleString("en-IN")}</span>
                        <span className="text-[10px] text-gray-400">/hr</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ─── Main Component ─── */
const PremiumCarScroller = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCar, setSelectedCar] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                setLoading(true);
                const res = await axios.get(API);
                setCars((res.data.cars || []).filter((c) => c.isPremium && c.status === "active" && c.runningStatus === "Available"));
            } finally {
                setLoading(false);
            }
        };
        fetchCars();
    }, []);

    const repeated = useMemo(() => [...cars, ...cars, ...cars], [cars]);
    const CARD_WIDTH = 272;
    const totalWidth = cars.length * CARD_WIDTH;
    const duration = cars.length * 3;

    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-900 to-blue-300">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: "repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 60px),repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 60px)" }} />

            {/* Header */}
            <div className="relative z-10 flex flex-col text-center px-6 pt-6 pb-3 gap-1 my-8">
                <h2 className="text-2xl font-extrabold text-white tracking-tight my-2">
                    ⭐ Premium Cars
                </h2>
                <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        <FiStar size={12} className="text-amber-300" />
                        Exclusive Cars
                    </div>

                </div>
            </div>



            {/* Track */}
            <div className="relative overflow-hidden pb-5">
                <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-${totalWidth}px); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee ${duration}s linear infinite;
          }
          .marquee-track.paused { animation-play-state: paused; }
        `}</style>

                {loading ? (
                    <div className="flex items-center justify-center py-16 gap-3">
                        <div className="w-8 h-8 border-t-transparent rounded-full animate-spin border-white" style={{ borderWidth: 3, borderStyle: 'solid' }} />
                        <p className="text-white/60 text-sm">Loading premium cars…</p>
                    </div>
                ) : cars.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-white/50 text-sm">No premium cars available</p>
                    </div>
                ) : (
                    <>
                        <div
                            className={`marquee-track${isPaused ? " paused" : ""}`}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {repeated.map((car, i) => (
                                <PremiumMarqueeCard key={`${car._id}-${i}`} car={car} onClick={() => setSelectedCar(car)} />
                            ))}
                        </div>

                        {/* Book Now Section */}
                        <div className="mt-6 border-t pt-4 text-center">
                            <h3 className="text-sm font-semibold text-white mb-3">Book Now via App</h3>

                            <div className="flex flex-col justify-center sm:flex-row gap-3">

                                {/* Google Play */}
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.self_drive_cars"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white text-sm font-semibold shadow-md hover:scale-105 transition"
                                >
                                    <FaGooglePlay size={22} />
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[10px] opacity-80 uppercase tracking-wide">Get it on</span>
                                        <span>Google Play</span>
                                    </div>
                                </a>

                                {/* Apple App Store */}
                                <a
                                    href="https://apps.apple.com/in/app/varahi-self-drive-cars/id6753347255"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-semibold shadow-md hover:scale-105 transition"
                                >
                                    <FaApple size={22} />
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[10px] opacity-80 uppercase tracking-wide">Download on the</span>
                                        <span>App Store</span>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </>
                )}
            </div>

            {selectedCar && <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
        </div>
    );
};

export default PremiumCarScroller;