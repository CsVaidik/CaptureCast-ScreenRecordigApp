"use client";

import Link from "next/link";
import Image from "next/image";

import { authClient } from "@/lib/auth-client";

const SignIn = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="SnapChat Logo"
            width={32}
            height={32}
          />
          <h1>CaptureCast</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star Icon"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
            CaptureCast makes screen recording easy. From quick walkthroughs to
              full presentations, it&apos;s fast, smooth, and shareable in seconds
            </p>
            <article>
              {/* <Image
                src="/assets/images/jason.png"
                alt="Jason"
                width={64}
                height={64}
                className="rounded-full"
              /> */}
              <div>
                <h2>Vaidik Vedant</h2>
                <p>Full Stack Developer</p>
              </div>
            </article>
          </section>
        </div>
        <p>© CaptureCast 2025</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="CaptureCast Logo"
              width={40}
              height={40}
            />
            <h1>CaptureCast</h1>
          </Link>
          <p>
            Create and share your very first <span>CaptureCast video</span> in no
            time!
          </p>

          <button
            onClick={async () => {
              return await authClient.signIn.social({
                provider: "google",
              });
            }}
          >
            <Image
              src="/assets/icons/google.svg"
              alt="Google Icon"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default SignIn;
