import axios from "axios";
import DOMPurify from "dompurify";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";
import Delete from "../images/delete.png";
import Edit from "../images/edit.png";

export default function Single() {
  const [post, setPost] = useState({});

  const location = useLocation();
  //console.log(cat);

  const navigate = useNavigate();

  const postID = location.pathname.split("/")[2];
  //console.log(postID);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postID}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postID]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postID}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  // const getText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   return doc.body.textContent;
  // };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post.image}`} alt="" />
        <div className="user">
          {post.userImage && <img src={`../upload/${post.userImage}`} alt="" />}

          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.data).fromNow()}</p>
          </div>
          {/* {currentUser.username === null && navigate("/")} */}
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <Link to={`/write?delete=2`}>
                <img onClick={handleDelete} src={Delete} alt="" />
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.description),
          }}
        ></p>{" "}
      </div>
      <Menu cat={post.category} />
    </div>
  );
}
