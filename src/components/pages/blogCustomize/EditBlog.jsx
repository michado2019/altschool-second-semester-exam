import React, { useState, useContext, useEffect } from "react";
import "./EditBlog.css";
import { Helmet } from "react-helmet-async";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
} from "@firebase/firestore";
import { DbContext, UserContext } from "../../../App";
import { NoBlog } from "../../Loading";
import { Loading } from "../../Loading";
import twitterLogo from "../blog/assets/logo-3491390.png";
import { auth, signOut } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export const EditBlog = ({
  setContributionId,
  contributionId,
  contribute,
  setContribute,
  handleAuth,
}) => {

  // useNavigate
  const navigate = useNavigate()
  //useContext
  const db = useContext(DbContext);
  const dbRef = collection(db, "contribution");
  const user = useContext(UserContext);

  // State
  const [AllContributions, setAllContributions] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  // Contribute section
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    contributionTitle: "",
    contributionText: "",
    contributor: "",
    email: "",
    twitter: "",
  });

  // Handlers
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleContributionSubmit = async (e) => {
    e.preventDefault();
    if (contribute !== "") {
      await addDoc(dbRef, contribute);
      alert("Your contribution successfully saved! Thanks");
    }

    setForm({
      contributionTitle: "",
      contributionText: "",
      contributor: "",
      email: "",
      twitter: "",
    });
    setShowForm(true);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // Handlers
  const handleEdit = async (id) => {
    setDisplay((prev) => !prev);
    setContributionId(id);
    if (contributionId !== undefined && contributionId !== "") {
      try {
        const singleDoc = doc(dbRef, id);
        const theDoc = getDoc(singleDoc);
        const datum = (await theDoc).data();
        setForm(datum);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const handleUpdate = async (id, form) => {
    setContributionId(id);
    if (contributionId !== undefined && contributionId !== "") {
      try {
        const singleDoc = doc(dbRef, id);
        const updatedContribution = await updateDoc(singleDoc, form);
        if (form && updatedContribution) setForm(updatedContribution);
        setForm({
          contributionTitle: "",
          contributionText: "",
          contributor: "",
          email: "",
          twitter: "",
        });
      } catch (e) {
        console.log(e);
      }
    }
    if(form){
      navigate("/editBlog")
    }
  };
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
    setDisplay(true);
    getAllContributions();
  }, []);

  // useEffect
  useEffect(() => {
    setContribute(form);
  }, [form, setContribute]);

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
        <div
          className="contributeWrapper"
          id="editBlog-contribute"
          style={{ display: display ? "none" : "block" }}
        >
          <div className="contributeFlex-1">
            <div className="contributeGuide-div">
              <div className="contributeGuideFlex">
                <button className="homeBigBtn" id="homeBigBtn">
                  Guide
                </button>
                {user ? (
                  <div className="contributeFlex-2">
                    <button
                      className="contributeGoogleBtn"
                      id="contributeGoogleBtn"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <div className="contributeFlex-2">
                    <button
                      className="contributeGoogleBtn"
                      onClick={handleAuth}
                    >
                      Sign with Google
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="contributeGuideDiv">
            <div
              className="contributeFormDiv"
              style={{ display: showForm ? "none" : "block" }}
            >
              <form
                className="contributeForm"
                onSubmit={handleContributionSubmit}
                style={{ display: user ? "block" : "none" }}
              >
                <label className="contributeLabel">Title:</label>
                <input
                  type="text"
                  placeholder="Contribution title"
                  className="contributeFormInput"
                  onChange={handleChange}
                  name="contributionTitle"
                  value={form.contributionTitle}
                  required
                />
                <label className="contributeLabel">Contribution:</label>
                <textarea
                  className="contributeTextarea"
                  placeholder="Contribute here...."
                  onChange={handleChange}
                  name="contributionText"
                  value={form.contributionText}
                  required
                />
                <label className="contributeLabel">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="contributeFormInput"
                  onChange={handleChange}
                  name="email"
                  value={form.email}
                  required
                />
                <label className="contributeLabel">Contributor's name:</label>
                <input
                  type="text"
                  placeholder="Enter contributor's name"
                  className="contributeFormInput"
                  onChange={handleChange}
                  name="contributor"
                  value={form.contributor}
                  required
                />
                <label className="contributeLabel">Twitter username:</label>
                <input
                  type="text"
                  placeholder="Enter twitter username"
                  className="contributeFormInput"
                  onChange={handleChange}
                  name="twitter"
                  value={form.twitter}
                  required
                />
                <button
                  id="contributeSubmitBtn"
                  className="contributeFormInput"
                  onClick={() => handleUpdate(contributionId, form)}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
        {user ? (
          <div>
            {isLoading ? (
              <div style={{ display: display ? "block" : "none" }}>
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
                          id="next"
                          onClick={() => handleEdit(doc.id)}
                        >
                          Edit
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
};
