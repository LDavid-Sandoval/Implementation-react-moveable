import React, { useState, useRef, memo } from "react";
import Moveable from "react-moveable";
import ReactLoading from "react-loading";
import useFetch from "../../hooks/useFetch";

const ComponentMoveable = ({ id, removeItem, fitType }) => {
  const { data, loading } = useFetch();
  const [isClicked, setIsClicked] = useState(false);
  const targetRef = useRef();

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };
  return (
    <div className='container-moveable' onClick={handleClick}>
      {!loading && targetRef && (
        <div
          className='image-contain'
          style={{
            backgroundImage: `url(${data.url})`,
            backgroundSize: `${fitType}`,
          }}
          ref={targetRef}>
          <div>
            <button
              className='item-button margin-button'
              onClick={() => {
                removeItem(id);
              }}>
              remove Item
            </button>
          </div>
        </div>
      )}
      {loading && (
        <ReactLoading
          type='spin'
          color='#367AF6'
          height={"20%"}
          width={"20%"}
        />
      )}
      <Moveable
        target={targetRef}
        container={null}
        draggable={isClicked}
        resizable={isClicked}
        throttleResize={0}
        scalable={isClicked}
        keepRatio={isClicked}
        rotatable={isClicked}
        onDrag={({
          target,
          beforeDelta,
          beforeDist,
          left,
          top,
          right,
          bottom,
          delta,
          dist,
          transform,
          clientX,
          clientY,
        }) => {
          targetRef.current.style.transform = transform;
        }}
        onResize={({
          target,
          width,
          height,
          dist,
          delta,
          direction,
          clientX,
          clientY,
        }) => {
          delta[0] && (targetRef.current.style.width = `${width}px`);
          delta[1] && (targetRef.current.style.height = `${height}px`);
        }}
        onRotate={({ target, delta, dist, transform, clientX, clientY }) => {
          targetRef.current.style.transform = transform;
        }}
        hideDefaultLines={isClicked}
      />
    </div>
  );
};

export default memo(ComponentMoveable);
