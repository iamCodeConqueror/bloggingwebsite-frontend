import React from 'react'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const creteArticle = async (values) => {
    console.log("creteArticle", { values });

    const { data } = await axios.post(
        `https://bloggingwebsite-backend-a7q5.onrender.com/api/articles`,
        { article: {...values.values} }
      );

      console.log("creteArticleresult", { data });

    return data;
  };

export default function useCreateArticle() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  //const navigate = navigate();


  const { mutate: createArticle, isLoading: isCreating } = useMutation({
    mutationFn: creteArticle,
    onSuccess: () => {
      alert("Your New post has been successfully created!");
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      navigate('/');
    },
    onError: (err) => alert(err.message),
  });

  return { isCreating, createArticle };
}
