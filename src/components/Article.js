import React from "react";
import { useNavigate } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { documentsState, singledocumentState } from "../atoms/documents";

//redux
import { useSelector, useDispatch } from 'react-redux'
import { addTask, emptyTask ,setArrTask } from "../redux/documentListSlice";
import { addDocument } from "../redux/singleDocumentSlice";


export default function Article({ article }) {
  // const [articles, setArticles] = useRecoilState(documentsState);
  // const [singleArticle, setSingleArticle] = useRecoilState(singledocumentState);
  const dispatch = useDispatch()
  const router = useNavigate();

  const articles = useSelector(state => state.documentList.articles )

  return (
    <div className="flex justify-between">
      <div
        className="border p-2 hover:shadow-md hover:shadow-gray-400 hover:transition-all cursor-pointer w-full"
        onClick={() => {
          dispatch(addDocument({
            Id: article.Id,
            Title: article.Title,
            Body: article.Body,
          }))
          // setSingleArticle({
          //   Id: article.Id,
          //   Title: article.Title,
          //   Body: article.Body,
          // });
          router(`/ArticleDetails/${article.Id}`);
        }}
      >
        <p>
          <span className="text-red-500">Title : </span>
          {article.Title}
        </p>
        <p>
          {" "}
          <span className="text-blue-500">Description : </span> {article.Body}
        </p>
      </div>
      <button
        className="p-2 bg-red-500 ml-2 rounded-lg hover:scale-105 text-white"
        onClick={async (e) => {
          //e.preventDefault();
          let temparticles = articles;
          const item = temparticles.filter(
            (article1) => article1.Id !== article.Id
          );
          //dispatch(emptyTask())
          dispatch(setArrTask(item))
          //setArticles(item);
        }}
      >
        Delete
      </button>
    </div>
  );
}
