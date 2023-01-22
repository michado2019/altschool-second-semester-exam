import React, { useState, useContext, useEffect } from "react";
import "./BlogDetails.css";
import { Helmet } from "react-helmet-async";
import { collection, getDocs } from "@firebase/firestore";
import { DbContext, UserContext } from "../../../App";
import twitterLogo from "../blog/assets/logo-3491390.png";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  //useParams
  const { id } = useParams();

  //useContext
  const db = useContext(DbContext);
  const dbRef = collection(db, "contribution");
  const user = useContext(UserContext);

  // State
  const [AllContributions, setAllContributions] = useState([]);

  // useEffect
  useEffect(() => {
    async function getAllContributions() {
      const contributions = await getDocs(dbRef);
      if (user)
        setAllContributions(
          contributions.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
    }
    getAllContributions();
  });
  return (
    <div
      className="blogDetailsWrapper"
      style={{ height: user ? "fit-content" : "130vh" }}
    >
      <Helmet>
        <title>Blog details page</title>
        <meta name="description" content="Blog details page" />
        <link rel="canonical" href="/blogDetails" />
      </Helmet>
      <div className="blogDetailsContributeWrapper">
        <div>
          {AllContributions.filter((doc) => doc.id === id).map((doc) => {
            return (
              <div key={doc.id} className="blogDetailsDiv">
                <h2 className="blogDetailsTitle">{doc.contributionTitle}</h2>
                <p className="blogDetailsText">{doc.contributionText}</p>
                <p className="blogDetailsContributor">
                  Contributor:{" "}
                  <span id="DetailsContributor">{doc.contributor}</span>
                </p>
                <a
                  href={`https://twitter.com/${doc.twitter}`}
                  className="blogDetailsTwitter"
                >
                  Follow me on twitter:{" "}
                  <span>
                    <img
                      src={twitterLogo}
                      alt="img"
                      className="blogDetailsTwitterImg"
                    />
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
