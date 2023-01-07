import React, { useEffect, useState, useContext } from "react";
import "./Blog.css";
import { Helmet } from "react-helmet-async";
import { collection, getDocs } from "@firebase/firestore";
import { DbContext } from "../../../App";

export default function Blog() {
  //useContext
  const db = useContext(DbContext);
  const dbRef = collection(db, "contribution");

  // State
  const [AllContributions, setAllContributions] = useState([]);

  useEffect(() => {
    try {
      async function getAllContributions() {
        const contributions = await getDocs(dbRef);
        setAllContributions(
          contributions.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
      getAllContributions();
    } catch (error) {
      console.log(error);
    }
  }, [dbRef]);
  return (
    <div className="blogWrapper">
      <Helmet>
        <title>Blogpage</title>
        <meta name="description" content="Welcome to my Blogpage" />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <div className="blogContributeWrapper">
        <div>
          {AllContributions.map((doc) => {
            return (
              <div key={doc.id} className='blogDiv'>
                <h2 className="blogTitle">{doc.contributionTitle}</h2>
                <p className="blogText">{doc.contributionText}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
