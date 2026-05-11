const lineColor = 'rgba(165, 88, 23, 0.34)';
const smallNodeColor = 'rgba(230, 131, 55, 0.75)';
const hubColor = 'rgba(255, 153, 72, 0.95)';
const networkStyles = `
  @keyframes techPan {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
    50% { transform: translate3d(-1.4%, 0.9%, 0) scale(1.02); }
  }

  @keyframes techFloatA {
    0%, 100% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(10px, -7px, 0); }
  }

  @keyframes techFloatB {
    0%, 100% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(-12px, 9px, 0); }
  }

  @keyframes techFloatC {
    0%, 100% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(14px, 7px, 0); }
  }

  @keyframes techPulse {
    0%, 100% { transform: scale(1); opacity: 0.9; }
    50% { transform: scale(1.22); opacity: 1; }
  }

  @keyframes techGlow {
    0%, 100% { opacity: 0.55; transform: scale(1); }
    50% { opacity: 0.9; transform: scale(1.16); }
  }

  .tech-pan {
    animation: techPan 26s ease-in-out infinite;
    transform-origin: center;
  }

  .tech-cluster {
    transform-box: fill-box;
    transform-origin: center;
    will-change: transform;
  }

  .tech-float-a { animation: techFloatA 14s ease-in-out infinite; }
  .tech-float-b { animation: techFloatB 18s ease-in-out infinite; }
  .tech-float-c { animation: techFloatC 16s ease-in-out infinite; }

  .tech-hub {
    transform-box: fill-box;
    transform-origin: center;
    animation: techPulse 3.8s ease-in-out infinite;
  }

  .tech-hub-glow {
    transform-box: fill-box;
    transform-origin: center;
    animation: techGlow 3.8s ease-in-out infinite;
  }
`;

const ParticleBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <style>{networkStyles}</style>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#140806_0%,_#090403_48%,_#050202_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_22%,_rgba(249,115,22,0.12),_transparent_18%),radial-gradient(circle_at_67%_30%,_rgba(249,115,22,0.08),_transparent_24%),radial-gradient(circle_at_88%_68%,_rgba(249,115,22,0.06),_transparent_18%)]" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="tech-pan absolute inset-0 h-full w-full opacity-100"
      >
        <defs>
          <filter id="orange-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="soft-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke={lineColor} strokeWidth="0.18" fill="none">
          <g className="tech-cluster tech-float-a">
            <line x1="4" y1="67" x2="10" y2="58" />
            <line x1="10" y1="58" x2="17" y2="66" />
            <line x1="4" y1="67" x2="17" y2="66" />
            <line x1="10" y1="58" x2="21" y2="53" />
            <line x1="17" y1="66" x2="25" y2="61" />
            <line x1="21" y1="53" x2="25" y2="61" />
          </g>

          <g className="tech-cluster tech-float-b">
            <line x1="44" y1="12" x2="51" y2="19" />
            <line x1="51" y1="19" x2="48" y2="28" />
            <line x1="44" y1="12" x2="48" y2="28" />
            <line x1="51" y1="19" x2="58" y2="17" />
            <line x1="58" y1="17" x2="63" y2="26" />
            <line x1="51" y1="19" x2="63" y2="26" />
            <line x1="48" y1="28" x2="63" y2="26" />
          </g>

          <g className="tech-cluster tech-float-c">
            <line x1="59" y1="26" x2="67" y2="34" />
            <line x1="67" y1="34" x2="74" y2="32" />
            <line x1="59" y1="26" x2="74" y2="32" />
            <line x1="67" y1="34" x2="71" y2="45" />
            <line x1="74" y1="32" x2="81" y2="43" />
            <line x1="71" y1="45" x2="81" y2="43" />
            <line x1="67" y1="34" x2="81" y2="43" />
            <line x1="71" y1="45" x2="88" y2="57" />
            <line x1="81" y1="43" x2="94" y2="51" />
            <line x1="88" y1="57" x2="94" y2="51" />
          </g>
        </g>

        <g filter="url(#soft-glow)">
          {[
            [4, 67],
            [10, 58],
            [17, 66],
            [21, 53],
            [25, 61],
            [44, 12],
            [51, 19],
            [48, 28],
            [58, 17],
            [63, 26],
            [59, 26],
            [67, 34],
            [74, 32],
            [71, 45],
            [81, 43],
            [88, 57],
            [94, 51],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.42" fill={smallNodeColor} />
          ))}
        </g>

        <g filter="url(#orange-glow)">
          <g className="tech-hub-glow">
            <circle cx="21" cy="53" r="1.9" fill={hubColor} />
          </g>
          <g className="tech-hub" style={{ animationDelay: '0.6s' }}>
            <circle cx="67" cy="34" r="1.15" fill={hubColor} />
          </g>
          <g className="tech-hub" style={{ animationDelay: '1.2s' }}>
            <circle cx="81" cy="43" r="1.05" fill={hubColor} />
          </g>
          <g className="tech-hub" style={{ animationDelay: '1.8s' }}>
            <circle cx="94" cy="51" r="0.95" fill={hubColor} />
          </g>
        </g>
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_35%,_rgba(2,1,1,0.58)_100%)]" />
    </div>
  );
};

export default ParticleBackground;
