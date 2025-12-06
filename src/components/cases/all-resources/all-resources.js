import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./all-resources.css";
import axios from "axios";

import Button from "../../button/button";

const AllResources = () => {
  const [entries, setEntries] = useState([]);
  const [entryIds, setEntryIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID || "cqcznfulj84y";
    const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || "EGz8IvfDmyb63CMVa4xK6Hr3S-hL8Hm6ffcHmDNy-XM";
    const contentType = "dfaBlog";

    const fetchEntries = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/${space}/environments/master/entries?content_type=${contentType}&access_token=${accessToken}`
        );

        const entryDataArray = response.data.items.map((item) => item.fields);
        const ids = response.data.items.map((item) => item.sys.id);

        await Promise.all(
          entryDataArray.map(async (entryData) => {
            if (entryData.postImage) {
              const imageUrl = await fetchImage(entryData.postImage.sys.id);
              entryData.imageUrl = imageUrl;
            }
          })
        );

        setEntries(entryDataArray);
        setEntryIds(ids);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchEntries();
  }, []);

  const fetchImage = async (assetId) => {
    try {
      const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID || "cqcznfulj84y";
      const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || "EGz8IvfDmyb63CMVa4xK6Hr3S-hL8Hm6ffcHmDNy-XM";

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

  function replaceWithBr2(value) {
    let str = value;
    let result = str?.split("\n");
    return result.map((i, key) => <p key={key}>{i + "\n"}</p>);
  }

  const cutText = (str) => {
    if (str?.length > 45) {
      str = str?.substring(0, 300) + " ...";
    }
    return str + "";
  };

  return (
    <div className="AllResourcesDiv">
      <div className="allResourcesHeadDiv">
        <h1 className="allResourcesHead">All Resources</h1>
        <hr className="allResourcesHR" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {entries.map((entry, index) => (
            <div key={index} className="AllResourcesinner">
              <div>
                {entry.imageUrl && (
                  <img
                    src={entry.imageUrl}
                    alt={entry.postTitle}
                    className="resourcesImg"
                  />
                )}
              </div>
              <div className="allResourcesDetails">
                <h2 className="allResourcesTitle">{entry.postTitle}</h2>
                <p className="allResourcesPar">
                {replaceWithBr2(cutText(entry.postContent))}
                  </p>
                <div className="allResourcesBtnDiv">
                  <Link to={`/esg/all-resources/${entryIds[index]}/resource`}>
                    <Button>Read More</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllResources;
