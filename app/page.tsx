"use client";

import { useState } from "react";

export default function Home() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
setMenuOpen(false);
};

return ( <main className="min-h-screen w-full overflow-x-hidden bg-white text-zinc-900">

```
  {/* =========================
      NAVIGATION
  ========================== */}
  <header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6">

      {/* Logo */}
      <a
        href="#home"
        onClick={closeMenu}
        className="flex min-w-0 items-center gap-3"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-red-600 text-2xl font-bold text-white sm:h-11 sm:w-11">
          +
        </div>

        <div className="min-w-0">
          <p className="truncate text-xs font-bold tracking-wide sm:text-sm">
            INDIAN RED CROSS SOCIETY
          </p>

          <p className="text-[11px] text-zinc-500 sm:text-xs">
            Kozhikode Branch
          </p>
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-6 md:flex lg:gap-7">

        <a href="#home" className="text-sm font-medium transition hover:text-red-600">
          Home
        </a>

        <a href="#about" className="text-sm font-medium transition hover:text-red-600">
          About
        </a>

        <a href="#activities" className="text-sm font-medium transition hover:text-red-600">
          Activities
        </a>

        <a href="#leadership" className="text-sm font-medium transition hover:text-red-600">
          Leadership
        </a>

        <a href="#donate" className="text-sm font-medium transition hover:text-red-600">
          Donate
        </a>

        <a href="#contact" className="text-sm font-medium transition hover:text-red-600">
          Contact
        </a>

      </nav>

      {/* Desktop Volunteer */}
      <a
        href="#volunteer"
        className="hidden rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:block"
      >
        Become a Volunteer
      </a>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 text-xl md:hidden"
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </div>

    {/* Mobile Navigation */}
    {menuOpen && (
      <div className="border-t border-zinc-200 bg-white px-4 py-5 sm:px-6 md:hidden">

        <nav className="flex flex-col gap-1">

          <a
            href="#home"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 font-medium hover:bg-red-50 hover:text-red-600"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 font-medium hover:bg-red-50 hover:text-red-600"
          >
            About
          </a>

          <a
            href="#activities"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 font-medium hover:bg-red-50 hover:text-red-600"
          >
            Activities
          </a>

          <a
            href="#leadership"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 font-medium hover:bg-red-50 hover:text-red-600"
          >
            Leadership
          </a>

          <a
            href="#donate"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 font-medium hover:bg-red-50 hover:text-red-600"
          >
            Donate
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 font-medium hover:bg-red-50 hover:text-red-600"
          >
            Contact
          </a>

          <a
            href="#volunteer"
            onClick={closeMenu}
            className="mt-2 rounded-xl bg-red-600 px-4 py-3 text-center font-semibold text-white hover:bg-red-700"
          >
            Become a Volunteer
          </a>

        </nav>

      </div>
    )}
  </header>


  {/* =========================
      HERO
  ========================== */}
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 pt-20"
  >

    <div className="pointer-events-none absolute right-[-250px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl sm:right-[-100px] sm:h-[600px] sm:w-[600px]" />

    <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">

      {/* Hero Left */}
      <div className="flex min-w-0 flex-col justify-center">

        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 shrink-0 bg-red-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 sm:text-sm sm:tracking-[0.25em]">
            Kozhikode Branch
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Serving Humanity.
          <span className="block text-red-500">
            Saving Lives.
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
          Together with our volunteers and community partners,
          we work to support people, respond to emergencies and
          build a safer and healthier society.
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row">

          <a
            href="#volunteer"
            className="rounded-full bg-red-600 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Become a Volunteer
          </a>

          <a
            href="#activities"
            className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore Our Work
          </a>

        </div>

      </div>


      {/* Hero Right */}
      <div className="hidden items-center justify-center lg:flex">

        <div className="relative flex h-[500px] w-[400px] max-w-full items-center justify-center overflow-hidden rounded-[2rem] bg-red-600">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-black/10" />

          <div className="relative text-center text-white">

            <div className="mx-auto flex h-36 w-36 items-center justify-center border-[10px] border-white text-7xl font-light">
              +
            </div>

            <p className="mt-8 text-2xl font-bold">
              Together for Humanity
            </p>

            <p className="mt-2 text-sm text-red-100">
              Compassion • Courage • Service
            </p>

          </div>

        </div>

      </div>

    </div>
  </section>


  {/* =========================
      ABOUT
  ========================== */}
  <section
    id="about"
    className="w-full bg-white py-20 sm:py-24 lg:py-28"
  >

    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">

        <div className="min-w-0">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            About Us
          </p>

          <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Humanity at the heart of everything we do.
          </h2>

        </div>

        <div className="min-w-0 max-w-2xl">

          <p className="text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            The Indian Red Cross Society works to alleviate
            human suffering and support communities through
            humanitarian service.
          </p>

          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            The Kozhikode Branch brings together dedicated
            volunteers who serve the community through
            humanitarian, health and disaster-response activities.
          </p>

        </div>

      </div>

    </div>
  </section>


  {/* =========================
      ACTIVITIES
  ========================== */}
  <section
    id="activities"
    className="w-full bg-zinc-50 py-20 sm:py-28"
  >

    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="max-w-2xl">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Our Work
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          Making a difference, together.
        </h2>

        <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          From humanitarian response to community service,
          our volunteers are committed to helping people
          when they need it most.
        </p>

      </div>


      {/* Activity Cards */}
      <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">

        {/* Blood Donation */}
        <div className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl">
            🩸
          </div>

          <h3 className="mt-7 text-2xl font-bold">
            Blood Donation
          </h3>

          <p className="mt-4 leading-7 text-zinc-600">
            Organising blood donation initiatives and encouraging
            people to come forward and help save lives.
          </p>

          <a
            href="#donate"
            className="mt-7 inline-block text-sm font-bold text-red-600"
          >
            Learn more →
          </a>

        </div>


        {/* Disaster Response */}
        <div className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl">
            🚑
          </div>

          <h3 className="mt-7 text-2xl font-bold">
            Disaster Response
          </h3>

          <p className="mt-4 leading-7 text-zinc-600">
            Supporting communities during emergencies through
            trained volunteers and humanitarian action.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-block text-sm font-bold text-red-600"
          >
            Learn more →
          </a>

        </div>


        {/* First Aid */}
        <div className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl">
            🩺
          </div>

          <h3 className="mt-7 text-2xl font-bold">
            First Aid Training
          </h3>

          <p className="mt-4 leading-7 text-zinc-600">
            Helping people learn essential first-aid and emergency
            response skills through practical training.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-block text-sm font-bold text-red-600"
          >
            Learn more →
          </a>

        </div>

      </div>


      {/* Gallery */}
      <div className="mt-20 sm:mt-28">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Moments that matter.
            </h2>

          </div>

          <p className="max-w-md leading-7 text-zinc-500">
            A glimpse into our volunteers, programmes and
            community activities.
          </p>

        </div>


        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">

          <div className="flex aspect-square items-center justify-center rounded-3xl bg-zinc-200 text-sm text-zinc-400">
            Photo 01
          </div>

          <div className="flex aspect-square items-center justify-center rounded-3xl bg-zinc-300 text-sm text-zinc-500">
            Photo 02
          </div>

          <div className="flex aspect-square items-center justify-center rounded-3xl bg-zinc-200 text-sm text-zinc-400">
            Photo 03
          </div>

          <div className="flex aspect-square items-center justify-center rounded-3xl bg-zinc-300 text-sm text-zinc-500">
            Photo 04
          </div>

        </div>


        <div className="mt-8 text-center">

          <a
            href="#"
            className="inline-flex rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold transition hover:border-red-600 hover:text-red-600"
          >
            View Full Gallery
          </a>

        </div>

      </div>

    </div>
  </section>


  {/* =========================
      DONATION
  ========================== */}
  <section
    id="donate"
    className="w-full bg-white py-20 sm:py-28"
  >

    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

        <div className="min-w-0">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Support Our Mission
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Small contributions can make a big difference.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Your support helps us continue humanitarian activities,
            community programmes, disaster response and initiatives
            that reach people when they need help the most.
          </p>


          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-zinc-200 p-6">

              <div className="text-3xl">
                ❤️
              </div>

              <h3 className="mt-4 font-bold">
                Support Our Work
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Help us continue serving communities through
                humanitarian programmes.
              </p>

            </div>


            <div className="rounded-2xl border border-zinc-200 p-6">

              <div className="text-3xl">
                🩸
              </div>

              <h3 className="mt-4 font-bold">
                Donate Blood
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Every blood donation can become a lifeline
                for someone in need.
              </p>

            </div>

          </div>

        </div>


        {/* Donation Card */}
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 p-7 text-white sm:p-10">

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-600/20 blur-2xl" />

          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Make an Impact
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Want to support us?
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Official donation options and payment details
              will be provided here after confirmation from
              the Kozhikode Branch.
            </p>


            <div className="mt-8 space-y-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-sm font-semibold text-zinc-300">
                  Financial Donations
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Official bank / UPI details to be added.
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-sm font-semibold text-zinc-300">
                  Blood Donation
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Contact the branch for upcoming blood
                  donation camps and requirements.
                </p>

              </div>

            </div>


            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Contact the Branch
            </a>

          </div>

        </div>

      </div>

    </div>
  </section>


  {/* =========================
      LEADERSHIP
  ========================== */}
  <section
    id="leadership"
    className="w-full bg-zinc-950 py-20 text-white sm:py-28"
  >

    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="max-w-2xl">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
          Office Bearers
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          Guided by service.
        </h2>

        <p className="mt-5 leading-7 text-zinc-400">
          Meet the people who guide and support the work of
          the Indian Red Cross Society, Kozhikode Branch.
        </p>

      </div>


      <div className="mt-12 grid gap-5 md:grid-cols-3">

        {/* President */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10 sm:p-8">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-800 text-4xl">
            👤
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-wider text-red-400">
            President
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Name to be added
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Official profile and message will be added after
            confirmation from the branch.
          </p>

        </div>


        {/* Secretary */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10 sm:p-8">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-800 text-4xl">
            👤
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-wider text-red-400">
            Secretary
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Name to be added
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Official profile and message will be added after
            confirmation from the branch.
          </p>

        </div>


        {/* Treasurer */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10 sm:p-8">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-800 text-4xl">
            👤
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-wider text-red-400">
            Treasurer
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Name to be added
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Official profile and message will be added after
            confirmation from the branch.
          </p>

        </div>

      </div>

    </div>
  </section>


  {/* =========================
      VOLUNTEER CTA
  ========================== */}
  <section
    id="volunteer"
    className="w-full px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
  >

    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 overflow-hidden rounded-[2rem] bg-red-600 px-7 py-14 text-white sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16">

      <div className="max-w-2xl">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-100">
          Make a Difference
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Your time can make a difference.
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-red-100 sm:text-lg sm:leading-8">
          Join a community of volunteers who believe that every
          act of kindness can help build a better tomorrow.
        </p>

      </div>


      <a
        href="#contact"
        className="inline-flex shrink-0 rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-red-600 transition hover:bg-red-50"
      >
        Become a Volunteer
      </a>

    </div>
  </section>


  {/* =========================
      CONTACT
  ========================== */}
  <section
    id="contact"
    className="w-full bg-zinc-50 py-20 sm:py-28"
  >

    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Contact Information */}
        <div className="min-w-0">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            We're here to help.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Whether you want to volunteer, organise a blood donation
            camp, learn about our activities or simply get in touch,
            we'd love to hear from you.
          </p>


          <div className="mt-10 space-y-6">

            <div>
              <p className="text-sm font-semibold text-zinc-400">
                LOCATION
              </p>

              <p className="mt-1 font-medium">
                Kozhikode, Kerala, India
              </p>
            </div>


            <div>
              <p className="text-sm font-semibold text-zinc-400">
                PHONE
              </p>

              <p className="mt-1 font-medium">
                Official contact number to be added
              </p>
            </div>


            <div>
              <p className="text-sm font-semibold text-zinc-400">
                EMAIL
              </p>

              <p className="mt-1 break-words font-medium">
                Official email to be added
              </p>
            </div>

          </div>

        </div>


        {/* Contact Form */}
        <div className="w-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-10">

          <h3 className="text-2xl font-bold">
            Send us a message
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            We'll get back to you as soon as possible.
          </p>


          <form className="mt-8 space-y-5">

            <div>
              <label className="text-sm font-semibold">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-red-500"
              />
            </div>


            <div>
              <label className="text-sm font-semibold">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-red-500"
              />
            </div>


            <div>
              <label className="text-sm font-semibold">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="How can we help?"
                className="mt-2 w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-red-500"
              />
            </div>


            <button
              type="button"
              className="w-full rounded-xl bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  </section>


  {/* =========================
      FOOTER
  ========================== */}
  <footer className="w-full border-t border-zinc-200 bg-white">

    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="lg:col-span-2">

          <a
            href="#home"
            className="flex items-center gap-3"
          >

            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-red-600 text-2xl font-bold text-white">
              +
            </div>

            <div>
              <p className="text-sm font-bold">
                INDIAN RED CROSS SOCIETY
              </p>

              <p className="text-xs text-zinc-500">
                Kozhikode Branch
              </p>
            </div>

          </a>


          <p className="mt-6 max-w-md leading-7 text-zinc-500">
            Serving communities with compassion, courage and
            humanity.
          </p>

        </div>


        {/* Quick Links */}
        <div>

          <h3 className="font-bold">
            Quick Links
          </h3>

          <div className="mt-5 space-y-3 text-sm text-zinc-500">

            <a href="#home" className="block transition hover:text-red-600">
              Home
            </a>

            <a href="#about" className="block transition hover:text-red-600">
              About
            </a>

            <a href="#activities" className="block transition hover:text-red-600">
              Activities
            </a>

            <a href="#leadership" className="block transition hover:text-red-600">
              Leadership
            </a>

            <a href="#donate" className="block transition hover:text-red-600">
              Donate
            </a>

            <a href="#volunteer" className="block transition hover:text-red-600">
              Volunteer
            </a>

            <a href="#contact" className="block transition hover:text-red-600">
              Contact
            </a>

          </div>

        </div>


        {/* Contact */}
        <div>

          <h3 className="font-bold">
            Contact
          </h3>

          <div className="mt-5 space-y-3 text-sm text-zinc-500">

            <p>
              Kozhikode, Kerala
            </p>

            <p>
              Official phone number to be added
            </p>

            <p className="break-words">
              Official email to be added
            </p>

          </div>

        </div>

      </div>


      <div className="mt-12 border-t border-zinc-200 pt-7 text-xs text-zinc-400 sm:mt-14 sm:text-sm">
        © {new Date().getFullYear()} Indian Red Cross Society –
        Kozhikode Branch. All rights reserved.
      </div>

    </div>
  </footer>

</main>

);
}
