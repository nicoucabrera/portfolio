import React from 'react';

const Experiencias = () => {
  return (      
        <div className="text-center m-4 p-4 blur-none">
        <h2 className="text-slate-200 text-3xl font-bold">Skills:</h2>
        <br />
        <div className="flex justify-center space-x-4 mt-4 group-hover:bg-slate-400">
          {/* Python Logo */}
          <div className="relative group perspective-1000">
            <div
              className="relative w-20 h-20 rounded-lg transition-transform duration-1000 ease-in-out group-hover:shadow-lg group-hover:[transform:rotateX(75deg)_translateY(-100px)_translateZ(-60px)] flex items-center justify-center"
              style={{backgroundColor: "#FFE873",
                transformStyle: "preserve-3d"
              }}
            >
              <img
                src="../public/python.svg"
                alt="Python Logo"
                width="50px"
                height="50px"
                className="transition-transform duration-900 ease-in-out group-hover:drop-shadow-[0_0_8px_#FFE873] group-hover:brightness-550 group-hover:[transform:translateY(-20px)_translateZ(40px)_rotateX(-90deg)]"
              />
            </div>
            <div className="absolute hidden group-hover:block bottom-0 left-1/2"></div>
          </div>
          {/* reflex Logo */}
          <div className="relative group perspective-1000">
            <div
              className="relative w-20 h-20 rounded-lg transition-transform duration-1000 ease-in-out group-hover:shadow-lg group-hover:[transform:rotateX(75deg)_translateY(-100px)_translateZ(-60px)] flex items-center justify-center"
              style={{backgroundColor: "#6A3DAD",
                transformStyle: "preserve-3d"
              }}
            >
              <img
                src="../public/Reflex.svg"
                alt="reflex Logo"
                width="60px"
                height="50px"
                className="transition-transform duration-900 ease-in-out group-hover:drop-shadow-[0_0_5px_#6A3DAD] group-hover:brightness-150 group-hover:[transform:translateY(-20px)_translateZ(40px)_rotateX(-90deg)]"
              />
            </div>
            <div className="absolute hidden group-hover:block bottom-0 left-1/2"></div>
          </div>
        </div>      
        <div className="flex justify-center space-x-4 mt-4">
          {/* Tailwind Logo */}
          <div className="relative group perspective-1000">
            <div
              className="relative w-20 h-20 rounded-lg transition-transform duration-1000 ease-in-out group-hover:shadow-lg group-hover:[transform:rotateX(75deg)_translateY(-100px)_translateZ(-60px)] flex items-center justify-center"
              style={{backgroundColor: "#06b6d4",
                transformStyle: "preserve-3d"
              }}
            >
              <img
                src="../public/tailwind.svg"
                alt="tailwind Logo"
                width="50px"
                height="50px"
                className="transition-transform duration-900 ease-in-out group-hover:drop-shadow-[0_0_8px_#06b6d4] group-hover:brightness-150 group-hover:[transform:translateY(-20px)_translateZ(40px)_rotateX(-90deg)]"
              />
            </div>
            <div className="absolute hidden group-hover:block bottom-0 left-1/2"></div>
          </div>
          {/* HTML Logo */}
          <div className="relative group perspective-1000">
            <div
              className="relative w-20 h-20 rounded-lg transition-transform duration-1000 ease-in-out group-hover:shadow-lg group-hover:[transform:rotateX(75deg)_translateY(-100px)_translateZ(-60px)] flex items-center justify-center"
              style={{ backgroundColor: "#F06529",
                transformStyle: "preserve-3d"
              }}
            >
              <img
                src="/html.svg"
                alt="HTML Logo"
                width="50px"
                height="50px"
                className="transition-transform duration-900 ease-in-out group-hover:drop-shadow-[0_0_8px_#F06529] group-hover:brightness-150 group-hover:[transform:translateY(-20px)_translateZ(40px)_rotateX(-90deg)]"
              />
            </div>
            <div className="absolute hidden group-hover:block bottom-0 left-1/2"></div>
          </div>
          {/* CSS Logo */}
          <div className="relative group perspective-1000">
            <div
              className="relative w-20 h-20 rounded-lg transition-transform duration-1000 ease-in-out group-hover:shadow-lg group-hover:[transform:rotateX(75deg)_translateY(-100px)_translateZ(-60px)] flex items-center justify-center"
              style={{backgroundColor: "#0F5298",
                transformStyle: "preserve-3d"
              }}
            >
              <img
                src="/css.svg"
                alt="CSS Logo"
                width="50px"
                height="50px"
                className="transition-transform duration-900 ease-in-out group-hover:drop-shadow-[0_0_8px_#0F5298] group-hover:brightness-150 group-hover:[transform:translateY(-20px)_translateZ(40px)_rotateX(-90deg)]"
              />
            </div>
            <div className="absolute hidden group-hover:block bottom-0 left-1/2"></div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
            {/* JavaScript Logo */}
            <div className="relative group perspective-1000">
              <div
                className="relative w-20 h-20 rounded-lg transition-transform duration-1000 ease-in-out group-hover:shadow-lg group-hover:[transform:rotateX(75deg)_translateY(-100px)_translateZ(-60px)] flex items-center justify-center"
                style={{backgroundColor: "#f0db4f",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src="/js.svg"
                  alt="JavaScript Logo"
                  width="50px"
                  height="50px"
                  className="transition-transform duration-900 ease-in-out group-hover:drop-shadow-[0_0_8px_#f0db4f] group-hover:brightness-150 group-hover:[transform:translateY(-20px)_translateZ(40px)_rotateX(-90deg)]"
                  />
              </div>
              <div className="absolute hidden group-hover:block bottom-0 left-1/2 "></div>
            </div>
            <div className="relative group perspective-1000">
              <div
                className="relative w-20 h-20 rounded-lg transition-transform duration-1000 ease-in-out group-hover:shadow-lg group-hover:[transform:rotateX(75deg)_translateY(-100px)_translateZ(-60px)] flex items-center justify-center"
                style={{
                  backgroundColor: "#61dbfb",
                  transformStyle: "preserve-3d",
                }}
              >
              <img
                src="/react.svg"
                alt="React Logo"
                width="50px"
                height="50px"
                className="transition-transform duration-900 ease-in-out group-hover:drop-shadow-[0_0_8px_#61dbfb] group-hover:brightness-150 group-hover:[transform:translateY(-20px)_translateZ(40px)_rotateX(-90deg)]"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Experiencias;
