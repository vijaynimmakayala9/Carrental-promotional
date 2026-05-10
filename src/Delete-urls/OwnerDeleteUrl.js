import React, { useState } from "react";
import {
    Mail,
    ShieldCheck,
    Trash2,
    AlertTriangle,
    CheckCircle2,
} from "lucide-react";

const BASE_URL = "https://varahibackend.varahiselfdrivecars.com";

const OwnerDeleteUrl = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        email: "",
        reason: "",
        otp: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    // Step 1 — Send OTP
    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${BASE_URL}/api/owner/send-deleteotp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    reason: formData.reason,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Failed to send OTP. Please try again.");
            }

            setStep(2);
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Step 2 — Verify OTP & Delete
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${BASE_URL}/api/owner/verify-delete`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    otp: Number(formData.otp),
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Invalid OTP. Please try again.");
            }

            setSuccess(true);
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-lg">
                {/* Card */}
                <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-red-100 overflow-hidden">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 text-white text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Trash2 size={38} />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Delete Owner Account</h1>
                        <p className="text-red-100 text-sm">
                            Verify your identity before deleting your account
                        </p>
                    </div>

                    {/* Success State */}
                    {success ? (
                        <div className="p-8 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                <CheckCircle2 size={40} className="text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                Account Deleted Successfully
                            </h2>
                            <p className="text-slate-500 leading-relaxed">
                                Your owner account deletion request has been processed successfully.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="p-8">

                                {/* Warning Banner */}
                                <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex gap-3 mb-6">
                                    <AlertTriangle className="text-red-500 mt-0.5 shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-red-700 text-sm">Important Notice</h4>
                                        <p className="text-red-600 text-sm mt-1 leading-relaxed">
                                            Deleting your account is permanent and cannot be undone.
                                        </p>
                                    </div>
                                </div>

                                {/* Error Alert */}
                                {error && (
                                    <div className="bg-red-50 border border-red-200 rounded-2xl px-4 py-3 flex items-start gap-3 mb-5">
                                        <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                                        <p className="text-red-600 text-sm font-medium">{error}</p>
                                    </div>
                                )}

                                {/* ── STEP 1: Email + Reason ── */}
                                {step === 1 && (
                                    <form onSubmit={handleSendOtp} className="space-y-6">

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <Mail
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                                    size={20}
                                                />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your registered email"
                                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 outline-none transition-all bg-slate-50"
                                                />
                                            </div>
                                        </div>

                                        {/* Reason */}
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Reason for Deletion
                                            </label>
                                            <textarea
                                                rows={5}
                                                name="reason"
                                                required
                                                value={formData.reason}
                                                onChange={handleChange}
                                                placeholder="Tell us why you want to delete your account..."
                                                className="w-full p-4 rounded-2xl border border-slate-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 outline-none transition-all bg-slate-50 resize-none"
                                            />
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                                                    Sending OTP...
                                                </>
                                            ) : "Send OTP"}
                                        </button>
                                    </form>
                                )}

                                {/* ── STEP 2: OTP Verification ── */}
                                {step === 2 && (
                                    <form onSubmit={handleVerifyOtp} className="space-y-6">

                                        <div className="text-center mb-2">
                                            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <ShieldCheck className="text-red-500" size={30} />
                                            </div>
                                            <h2 className="text-xl font-bold text-slate-800">OTP Verification</h2>
                                            <p className="text-slate-500 text-sm mt-2">
                                                An OTP has been sent to{" "}
                                                <span className="font-semibold text-slate-700">{formData.email}</span>
                                            </p>
                                        </div>

                                        {/* OTP Input */}
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Enter OTP
                                            </label>
                                            <input
                                                type="text"
                                                name="otp"
                                                required
                                                maxLength={6}
                                                value={formData.otp}
                                                onChange={(e) => {
                                                    // Allow digits only
                                                    const val = e.target.value.replace(/\D/g, "");
                                                    setFormData({ ...formData, otp: val });
                                                    setError("");
                                                }}
                                                placeholder="000000"
                                                className="w-full text-center tracking-[10px] text-2xl font-bold p-4 rounded-2xl border border-slate-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 outline-none transition-all bg-slate-50"
                                            />
                                        </div>

                                        {/* Resend hint */}
                                        <p className="text-center text-sm text-slate-400">
                                            Didn't receive it?{" "}
                                            <button
                                                type="button"
                                                onClick={() => { setStep(1); setError(""); }}
                                                className="text-red-500 font-semibold hover:underline"
                                            >
                                                Go back &amp; resend
                                            </button>
                                        </p>

                                        {/* Buttons */}
                                        <div className="flex gap-3">
                                            <button
                                                type="button"
                                                onClick={() => { setStep(1); setError(""); }}
                                                className="w-1/2 py-4 rounded-2xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-all"
                                            >
                                                Back
                                            </button>

                                            <button
                                                type="submit"
                                                disabled={loading || formData.otp.length < 6}
                                                className="w-1/2 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                {loading ? (
                                                    <>
                                                        <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                                                        Verifying...
                                                    </>
                                                ) : "Delete Account"}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="px-8 pb-8 text-center">
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    By proceeding, you confirm that you understand your account data will be permanently removed.
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OwnerDeleteUrl;