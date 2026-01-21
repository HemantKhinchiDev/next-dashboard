"use client";

import { useActionState } from "react";
import { sendContactEmail } from "@/app/actions";
import InnerHeader from "@/components/InnerHeader";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const initialState = {
    success: false,
    message: '',
    errors: {}
}

export default function Contact() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
    return (
        <main className="min-h-screen flex flex-col font-body">
            <InnerHeader />
            <PageHeader title="Contact" breadcrumb="Home > Contact" />

            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-[1400px] px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column: Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Our Locations</h2>
                            <p className="text-gray-500 mb-10 leading-relaxed">
                                Seorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Fereedy Ipsumimply.
                            </p>

                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f2f3f0] flex items-center justify-center text-[#6b704f] text-xl">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Address</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Awamileaug Drive, Kensington<br />
                                            Kensington London, UK
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f2f3f0] flex items-center justify-center text-[#6b704f] text-xl">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            +1(800)-123-456-789<br />
                                            +1(800)-123-456-999
                                        </p>
                                    </div>
                                </div>

                                {/* E-mail */}
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f2f3f0] flex items-center justify-center text-[#6b704f] text-xl">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">E-mail</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Info@gmail.com<br />
                                            Info@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Explore New Arrivals</h2>
                            <p className="text-gray-500 mb-10 leading-relaxed">
                                Seorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Fereedy Ipsumimply.
                            </p>

                            <form action={formAction} className="space-y-6">
                                {state.message && (
                                    <div className={`p-4 rounded-sm text-sm ${state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                        {state.message}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-1">
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Name"
                                            className="w-full bg-[#f2f3f0] border-none rounded-sm px-5 py-4 text-sm text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-[#6b704f] focus:outline-none"
                                        />
                                        {state.errors?.name && <p className="text-red-500 text-xs">{state.errors.name}</p>}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="E-mail"
                                            className="w-full bg-[#f2f3f0] border-none rounded-sm px-5 py-4 text-sm text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-[#6b704f] focus:outline-none"
                                        />
                                        {state.errors?.email && <p className="text-red-500 text-xs">{state.errors.email}</p>}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <input
                                            name="phone"
                                            type="tel"
                                            placeholder="Phone"
                                            className="w-full bg-[#f2f3f0] border-none rounded-sm px-5 py-4 text-sm text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-[#6b704f] focus:outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <input
                                            name="subject"
                                            type="text"
                                            placeholder="Type Subject"
                                            className="w-full bg-[#f2f3f0] border-none rounded-sm px-5 py-4 text-sm text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-[#6b704f] focus:outline-none"
                                        />
                                        {state.errors?.subject && <p className="text-red-500 text-xs">{state.errors.subject}</p>}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Your Message"
                                        className="w-full bg-[#f2f3f0] border-none rounded-sm px-5 py-4 text-sm text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-[#6b704f] focus:outline-none resize-none"
                                    ></textarea>
                                    {state.errors?.message && <p className="text-red-500 text-xs">{state.errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="bg-[#6b704f] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-[#5a5e42] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isPending ? 'Sending...' : 'Send Us Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <div className="w-full mx-auto max-w-[1400px] px-4 my-[100px] h-[600px] bg-gray-200">
                <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339870628!2d-0.24168120642536509!3d51.52855824202155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1614316343516!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%)" }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            <Footer />
        </main>
    );
}
