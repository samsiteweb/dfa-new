import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./resource.css";
import axios from "axios";

const Resource = () => {
  const { postId } = useParams(); // Get the postId from the URL parameter
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const space = "cqcznfulj84y";
    const accessToken = "EGz8IvfDmyb63CMVa4xK6Hr3S-hL8Hm6ffcHmDNy-XM";

    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/${space}/environments/master/entries/${postId}?access_token=${accessToken}`
        );

        const postData = response.data.fields;

        if (postData.postImage) {
          const imageUrl = await fetchImage(postData.postImage.sys.id);
          postData.imageUrl = imageUrl;
        }

        setPost(postData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post data from Contentful:", error);
      }
    };

    fetchPost();
  }, [postId]);

  const fetchImage = async (assetId) => {
    try {
      const space = "cqcznfulj84y";
      const accessToken = "EGz8IvfDmyb63CMVa4xK6Hr3S-hL8Hm6ffcHmDNy-XM";

      const response = await axios.get(
        `https://cdn.contentful.com/spaces/${space}/environments/master/assets/${assetId}?access_token=${accessToken}`
      );

      const assetData = response.data.fields;
      return assetData.file.url;
    } catch (error) {
      console.error("Error fetching image from Contentful:", error);
      return "";
    }
  };

  return (
    <div className="resourceDiv">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="resourceHead">{post.postTitle}</h1>
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.postTitle}
              className="resourceImg"
            />
          )}
          <p className="resourcePar">{post.postContent}</p>
        </div>
      )}
    </div>
  );
};

export default Resource;
