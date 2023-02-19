import React, { useState, useContext, useEffect } from "react";
import "./DeleteBlog.css";
import { Helmet } from "react-helmet-async";
import { collection, getDocs, doc, deleteDoc } from "@firebase/firestore";
import { DbContext, UserContext } from "../../../App";
import { NoBlog } from "../../Loading";
import { Loading } from "../../Loading";
import twitterLogo from "../blog/assets/logo-3491390.png";
import { DeleteOutline } from "@mui/icons-material";

export default function DeleteBlog() {
  //useContext
  const db = useContext(DbContext);
  const dbRef = collection(db, "contribution");
  const user = useContext(UserContext);

  // State
  const [AllContributions, setAllContributions] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  //Handlers
  const handleDeleteBlog = (id) => {
    if (!id) {
      return false;
    } else {
      const getDoc = doc(dbRef, id);
      return deleteDoc(getDoc);
    }
  };
  const handleRefresh = () => {
    async function getAllContributions() {
      const contributions = await getDocs(dbRef);
        setAllContributions(
          contributions.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
    }
    getAllContributions();
  };

  // useEffect
  useEffect(() => {
    async function getAllContributions() {
      const contributions = await getDocs(dbRef);
      if (user) {
        setAllContributions(
          contributions.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setIsLoading(true);
        if (contributions) {
          setIsLoading(true);
        }
      }
    }
    getAllContributions();
  }, []);

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
            {isLoading ? (
              <div>
                {AllContributions.slice(skip, skip + perPage).map((doc) => {
                  return (
                    <div key={doc.id} className="blogDiv">
                      <h2 className="blogTitle">{doc.contributionTitle}</h2>
                      <p className="blogText">{doc.contributionText}</p>
                      <p className="blogContributor">
                        Contributor:{" "}
                        <span id="contributor">{doc.contributor}</span>
                      </p>
                      <a
                        href={`https://twitter.com/${doc.twitter}`}
                        className="blogTwitter"
                      >
                        Follow me on twitter:{" "}
                        <span>
                          <img
                            src={twitterLogo}
                            alt="img"
                            className="blogTwitterImg"
                          />
                        </span>
                      </a>
                      <p className="pagination">
                        Pages: {page} of {pages}
                      </p>
                      <div className="blogBtnsDiv">
                        <button
                          className="blogBtns"
                          id="prev"
                          disabled={page <= 1}
                          onClick={() => setPage((prev) => prev - 1)}
                        >
                          Prev
                        </button>
                        <button
                          className="blogBtns"
                          id="next"
                          disabled={page >= pages}
                          aria-disabled={page >= pages}
                          onClick={() => setPage((prev) => prev + 1)}
                        >
                          Next
                        </button>
                        <button
                          className="blogBtns"
                          onClick={() => handleDeleteBlog(doc.id)}
                        >
                          <DeleteOutline />
                        </button>
                        <button className="blogBtns" onClick={handleRefresh}>
                          Refresh
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Loading />
            )}
          </div>
        ) : (
          <NoBlog />
        )}
      </div>
    </div>
  );
}
