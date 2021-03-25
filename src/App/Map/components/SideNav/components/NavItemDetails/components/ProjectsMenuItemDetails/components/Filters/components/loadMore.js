import React, { useState, useEffect } from "react";

const postsPerPage = 4;
let arrayForHoldingPosts = [];

const Posts = ({ postsToRender, renderFilterItems }) => {
  return (
    renderFilterItems(postsToRender)
  );
}

const LoadMore = ({ posts, renderFilterItems }) => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };


  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return (
    <div>
      <Posts postsToRender={postsToShow} renderFilterItems={renderFilterItems} />
      <span className="LoadMore" onClick={handleShowMorePosts}>Load more</span>
    </div>
  );
};

export default LoadMore;