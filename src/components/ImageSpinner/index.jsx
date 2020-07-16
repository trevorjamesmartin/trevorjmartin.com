import React, { useEffect, useState, useRef } from "react";

/**
 * render image or spinner
 *
 * *optionally include a "customspinner" in props.
 *
 *
 * @param {Object} props component props
 * @renders {*} Image or Spinner
 * @example <ImageSpinner src="/image.png" alt="desription" customspinner={<CustomSpinner />} />
 */
const ImageSpinner = (props) => {
  // const { src, alt } = props;
  const { customspinner, ...rest } = props; // remove custom spinner from props.
  const imageRef = useRef(); // create a reference.
  const spinner = customspinner || <h4>Loading...</h4>; // spinner of choice.
  const [loaded, setLoaded] = useState(false); // has the image finished loading?
  useEffect(() => {
    if (loaded) {
      Object.keys(rest).forEach((key) => {
        // load img props (className, styles, etc...)
        imageRef.current[key] = rest[key];
      });
      return; // image already loaded.
    }
    const newImage = new Image(); // create a new <img />
    newImage.onload = () => {
      if (newImage.complete && newImage.naturalWidth > 0) {
        // loading complete, image contains at least 1 pixel.
        imageRef.current = newImage; // point reference to loaded image
        setLoaded(true); // toggle state
      }
    };
    newImage.alt = "preview image"; // accessibility
    Object.keys(rest).forEach((key) => {
      newImage[key] = rest[key];
    });
  }, [loaded, rest]);
  return !loaded ? (
    spinner
  ) : (
    <img {...props} ref={imageRef.current.props} alt={props.alt} />
  );
};

export default ImageSpinner;
