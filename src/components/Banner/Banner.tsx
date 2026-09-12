import bannerLogo from '../../assets/logo.png'
interface BannerProps {
  onClaim: () => void;
}

const Banner = ({  onClaim }: BannerProps) => {
  return (
    <section
      className="relative isolate mx-auto flex  w-full px-auto  flex-col items-center justify-center overflow-hidden rounded-sm bg-[#111111] px-5 py-10 text-center sm:min-h-[360px] sm:px-10"
    >
      {/* Background colour glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-indigo-400/80 blur-[85px] sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 -z-10 h-72 w-72 rounded-full bg-[#c58d83]/90 blur-[85px] sm:h-96 sm:w-96"
      />

      {/* Cricket illustration */}
      <img
        src={bannerLogo}
        alt="Cricket bats, balls and stumps"
        className="mb-4 h-28 w-36 object-contain sm:h-36 sm:w-44"
      />

      <h1 className="max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>

      <p className="mt-3 text-sm font-medium text-white/75 sm:text-base">
        Beyond Boundaries Beyond Limits
      </p>

      {/* Claim button */}
      <div className="mt-6 rounded-xl border-2 border-[#d7ff36] p-1.5">
        <button
          type="button"
          onClick={onClaim}
          className="cursor-pointer rounded-lg bg-[#d7ff36] px-6 py-3 text-sm font-bold text-slate-950 transition duration-200 hover:bg-[#e5ff80] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
        >
          Claim Free Credit
        </button>
      </div>
    </section>
  );
};

export default Banner;