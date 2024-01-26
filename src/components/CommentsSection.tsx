import React, { useEffect, useState } from 'react'
import api from '@/api/axiosConfig';

type CommentsSectionProps = {
  shortName: string;
}

const CommentsSection = ({shortName}: CommentsSectionProps) => {

  const [comments, setComments] = useState([])

  // useEffect(() => {
  //   getComments()
  // });

  // const getComments = async () => {
  //   const response = await api.get(`/api/v1/comments/${shortName}`);
  //   setComments(response.data);
  //   console.log(response.data);
  // }


  return (
    <>
      {shortName?comments.map((comment: any) => {
        return (
          <div className='p-2 m-2 border-2 border-white rounded-md'>
            <p>{comment.commentBody}</p>
            <p>{comment.username}</p>
          </div>
        )
      }):<></>}
    </>
  )
}

export default CommentsSection