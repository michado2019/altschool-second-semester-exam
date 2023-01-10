import React, { useState, useContext, useEffect } from "react";
import "./Blog.css";
import { Helmet } from "react-helmet-async";
import { collection, getDocs } from "@firebase/firestore";
import { DbContext, UserContext } from "../../../App";
import { NoBlog } from "../../Loading";

export default function Blog() {
  //useContext
  const db = useContext(DbContext);
  const dbRef = collection(db, "contribution");
  const user = useContext(UserContext);

  // State
  const [AllContributions, setAllContributions] = useState([]);
  const [page, setPage] = useState(1);

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

  // Pagination

  const perPage = 1;
  const pages = Math.ceil(AllContributions.length / perPage);
  const skip = page * perPage - perPage;
  return (
    <div
      className="blogWrapper"
      style={{ height: user ? "fit-content" : "130vh" }}
    >
      <Helmet>
        <title>Blogpage</title>
        <meta name="description" content="Welcome to my Blogpage" />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <div className="blogContributeWrapper">
        {user ? (
          <div>
            {AllContributions.slice(skip, skip + perPage).map((doc) => {
              return (
                <div key={doc.id} className="blogDiv">
                  <h2 className="blogTitle">{doc.contributionTitle}</h2>
                  <p className="blogText">{doc.contributionText}</p>
                  <p className="blogContributor">
                    Contributor: <span id="contributor">{doc.contributor}</span>
                  </p>
                  <p className="pagination">
                    Pages: {page} of {pages}
                  </p>
                  <div className="blogBtnsDiv">
                    <button
                      className="blogBtns"
                      onClick={() => setPage((prev) => prev - 1)}
                    >
                      Prev
                    </button>
                    <button
                      className="blogBtns"
                      onClick={() => setPage((prev) => prev + 1)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <NoBlog />
        )}
      </div>
    </div>
  );
}
