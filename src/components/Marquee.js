import React from "react";

export function Marquee({ children }) {
  return (
    <>
      <div class="marquee">
        <div class="marquee-inner">
          <span>
            <div>
              <h1>Tessa Newbacher Tessa Newbacher &nbsp;</h1>
            </div>
          </span>
          <span>
            <div>
              <h1>Tessa Newbacher Tessa Newbacher &nbsp;</h1>
            </div>
          </span>
        </div>
      </div>

      <div class="marquee">
        <div class="marquee-inner marquee-slower">
          <span>
            <div>
              <h2>
                UI/UX Designer // Front-end Developer // Product Designer //
                Visual Artist // &nbsp;
              </h2>
            </div>
          </span>
          <span>
            <div>
              <h2>
                UI/UX Designer // Front-end Developer // Product Designer //
                Visual Artist // &nbsp;
              </h2>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
