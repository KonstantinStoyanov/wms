import { Link } from "react-router-dom";
const Header = ({ text }) => {
  return (
    <div className="header">
      <Link to={-1}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="30" height="30" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_22_134" transform="scale(0.02)" />
            </pattern>
            <image
              id="image0_22_134"
              width="50"
              height="50"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAv0lEQVRoge3ZsQlCMRSF4WAjuIHgJOoAVs5jYWuj89i4jDM8BdvfQkGUWNwI3kM43wI5P7xA4JViZmYBwAxYA5PsLc2AJTDwcMze0+QZceXllr0prBIBsM3eFQIsgMtHxD57V4gjVDhChSNUOEKFI1Q4QgX1V+wue1cYcFaJGGUdLKWbT6uUr5f9kL2riWNUOUaVY1T1FjN3jCLHqOotpvZq3mTvalKJGbI3NeP919spe89PgCmwAsbZW8zM/ucOkZoRAMzubmQAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </Link>
      <h1>{text}</h1>
    </div>
  );
};

export default Header;
