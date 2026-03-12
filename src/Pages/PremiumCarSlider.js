import { useState, useEffect, useRef } from "react";

const premiumCars = [
    {
        id: 1,
        name: "Mercedes-Benz S-Class",
        category: "Luxury Sedan",
        price: "₹12,500",
        per: "/ day",
        badge: "Best Seller",
        badgeColor: "#FFD700",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
        accentColor: "#C8A951",
        seats: 5,
        fuel: "Petrol",
        transmission: "Automatic",
    },
    {
        id: 2,
        name: "BMW 7 Series",
        category: "Executive Sedan",
        price: "₹11,000",
        per: "/ day",
        badge: "Premium",
        badgeColor: "#60C8FF",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
        accentColor: "#4A9EDB",
        seats: 5,
        fuel: "Diesel",
        transmission: "Automatic",
    },
    {
        id: 3,
        name: "Audi Q8",
        category: "Luxury SUV",
        price: "₹14,000",
        per: "/ day",
        badge: "Top Pick",
        badgeColor: "#4ADE80",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
        accentColor: "#3DB86A",
        seats: 7,
        fuel: "Petrol",
        transmission: "Automatic",
    },
    {
        id: 4,
        name: "Porsche Cayenne",
        category: "Sports SUV",
        price: "₹18,500",
        per: "/ day",
        badge: "Exotic",
        badgeColor: "#F472B6",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
        accentColor: "#E05BA0",
        seats: 5,
        fuel: "Petrol",
        transmission: "Automatic",
    },
    {
        id: 5,
        name: "Range Rover Vogue",
        category: "Ultra Luxury SUV",
        price: "₹22,000",
        per: "/ day",
        badge: "Elite",
        badgeColor: "#A78BFA",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
        accentColor: "#8B6FE8",
        seats: 7,
        fuel: "Diesel",
        transmission: "Automatic",
    },
    {
        id: 6,
        name: "Tesla Model S",
        category: "Electric Luxury",
        price: "₹9,800",
        per: "/ day",
        badge: "Eco",
        badgeColor: "#34D399",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80",
        accentColor: "#22C98A",
        seats: 5,
        fuel: "Electric",
        transmission: "Automatic",
    },
];

const CARD_WIDTH = 320;
const CARD_GAP = 24;
const CARD_TOTAL = CARD_WIDTH + CARD_GAP;

const PremiumCarSlider = () => {
    const trackRef = useRef(null);
    const animFrameRef = useRef(null);
    const posRef = useRef(0);
    const pausedRef = useRef(false);
    const SPEED = 0.6;

    // Duplicate for infinite loop
    const cars = [...premiumCars, ...premiumCars, ...premiumCars];
    const totalWidth = premiumCars.length * CARD_TOTAL;

    useEffect(() => {
        const animate = () => {
            if (!pausedRef.current) {
                posRef.current += SPEED;
                if (posRef.current >= totalWidth) {
                    posRef.current -= totalWidth;
                }
                if (trackRef.current) {
                    trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
                }
            }
            animFrameRef.current = requestAnimationFrame(animate);
        };
        animFrameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animFrameRef.current);
    }, [totalWidth]);

    return (
        <section
        className="bg-gradient-to-r from-blue-900 to-blue-300"
            style={{
                
                padding: "72px 0 80px",
                overflow: "hidden",
                position: "relative",
                fontFamily: "'Georgia', serif",
            }}
        >
            {/* Background grid texture */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    pointerEvents: "none",
                }}
            />

            {/* Gold accent line top */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "120px",
                    height: "3px",
                    background: "linear-gradient(90deg, transparent, #C8A951, transparent)",
                }}
            />

            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "52px", position: "relative", zIndex: 2 }}>
                <p
                    style={{
                        color: "#c3c2c0",
                        fontSize: "11px",
                        fontFamily: "'Georgia', serif",
                        letterSpacing: "5px",
                        textTransform: "uppercase",
                        marginBottom: "12px",
                        fontStyle: "italic",
                    }}
                >
                    Handpicked for Excellence
                </p>
                <h2
                    style={{
                        color: "#fff",
                        fontSize: "clamp(28px, 4vw, 42px)",
                        fontFamily: "'Georgia', serif",
                        fontWeight: "400",
                        letterSpacing: "2px",
                        margin: 0,
                        lineHeight: 1.2,
                    }}
                >
                    Our{" "}Premium Cars
                </h2>
                <div
                    style={{
                        width: "60px",
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, #C8A951, transparent)",
                        margin: "20px auto 0",
                    }}
                />
            </div>

           
           

            {/* Slider Track */}
            <div style={{ overflow: "hidden", position: "relative" }}>
                <div
                    ref={trackRef}
                    style={{
                        display: "flex",
                        gap: `${CARD_GAP}px`,
                        willChange: "transform",
                        paddingLeft: "60px",
                    }}
                >
                    {cars.map((car, idx) => (
                        <CarCard
                            key={`${car.id}-${idx}`}
                            car={car}
                            onMouseEnter={() => (pausedRef.current = true)}
                            onMouseLeave={() => (pausedRef.current = false)}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom label */}
            <div style={{ textAlign: "center", marginTop: "44px", position: "relative", zIndex: 2 }}>
                <span
                    style={{
                        color: "rgba(255,255,255,0.3)",
                        fontSize: "12px",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        fontFamily: "'Georgia', serif",
                    }}
                >
                    ✦ All vehicles fully insured & sanitized ✦
                </span>
            </div>
        </section>
    );
};

const CarCard = ({ car, onMouseEnter, onMouseLeave }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => { setHovered(true); onMouseEnter(); }}
            onMouseLeave={() => { setHovered(false); onMouseLeave(); }}
            style={{
                width: `${CARD_WIDTH}px`,
                flexShrink: 0,
                borderRadius: "20px",
                background: hovered
                    ? "linear-gradient(145deg, #ffffff, #ffffff)"
                    : "linear-gradient(145deg, #ffffff, #ffffff)",
                border: `1px solid ${hovered ? car.accentColor + "55" : "rgba(255,255,255,0.06)"}`,
                overflow: "hidden",
                cursor: "pointer",
                transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                boxShadow: hovered
                    ? `0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px ${car.accentColor}33, 0 8px 30px ${car.accentColor}22`
                    : "0 8px 32px rgba(0,0,0,0.4)",
            }}
        >
            {/* Badge */}
            <div style={{ position: "relative" }}>
                <div
                    style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        zIndex: 2,
                        background: `${car.badgeColor}22`,
                        border: `1px solid ${car.badgeColor}66`,
                        color: car.badgeColor,
                        fontSize: "10px",
                        fontWeight: "700",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        borderRadius: "30px",
                        fontFamily: "Georgia, serif",
                    }}
                >
                    {car.badge}
                </div>

                {/* Car Image */}
                <div
                    style={{
                        height: "190px",
                        overflow: "hidden",
                        position: "relative",
                        background: `radial-gradient(ellipse at center, ${car.accentColor}11 0%, transparent 70%)`,
                    }}
                >
                    <img
                        src={car.image}
                        alt={car.name}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform: hovered ? "scale(1.08)" : "scale(1)",
                            transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                            filter: hovered ? "brightness(1.1)" : "brightness(0.9)",
                        }}
                    />
                    {/* Image overlay gradient */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(to bottom, transparent 40%, rgba(10,10,20,0.8) 100%)",
                        }}
                    />
                </div>
            </div>

            {/* Card Body */}
            <div style={{ padding: "20px 22px 22px" }}>
                {/* Category */}
                <p
                    style={{
                        color: car.accentColor,
                        fontSize: "10px",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        margin: "0 0 6px",
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                    }}
                >
                    {car.category}
                </p>

                {/* Car Name */}
                <h3
                    style={{
                        color: "#000000",
                        fontSize: "17px",
                        fontWeight: "400",
                        fontFamily: "Georgia, serif",
                        margin: "0 0 16px",
                        letterSpacing: "0.5px",
                    }}
                >
                    {car.name}
                </h3>

                {/* Specs row */}
                <div
                    style={{
                        display: "flex",
                        gap: "8px",
                        marginBottom: "18px",
                    }}
                >
                    {[
                        { icon: "👥", val: `${car.seats} Seats` },
                        { icon: "⛽", val: car.fuel },
                        { icon: "⚙️", val: car.transmission.slice(0, 4) },
                    ].map((spec) => (
                        <span
                            key={spec.val}
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(0, 0, 0, 0.6)",
                                fontSize: "10px",
                                padding: "4px 8px",
                                borderRadius: "6px",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                                letterSpacing: "0.5px",
                            }}
                        >
                            {spec.icon} {spec.val}
                        </span>
                    ))}
                </div>

                {/* Divider */}
                <div
                    style={{
                        height: "1px",
                        background: `linear-gradient(90deg, ${car.accentColor}44, transparent)`,
                        marginBottom: "16px",
                    }}
                />

                {/* Price + CTA */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <span
                            style={{
                                fontSize: "22px",
                                fontWeight: "700",
                                fontFamily: "Georgia, serif",
                                color: car.accentColor,
                            }}
                        >
                            {car.price}
                        </span>
                        <span
                            style={{
                                color: "rgba(255,255,255,0.4)",
                                fontSize: "11px",
                                marginLeft: "4px",
                            }}
                        >
                            {car.per}
                        </span>
                    </div>

                    <button
                        style={{
                            background: hovered
                                ? `linear-gradient(135deg, ${car.accentColor}, ${car.accentColor}bb)`
                                : "rgba(255,255,255,0.07)",
                            border: `1px solid ${hovered ? car.accentColor : car.accentColor}`,
                            color: hovered ? "#000" : "rgba(0, 0, 0, 0.8)",
                            fontSize: "11px",
                            fontWeight: "700",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            fontFamily: "Georgia, serif",
                        }}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PremiumCarSlider;