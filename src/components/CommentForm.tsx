import api from '@/api/axiosConfig'
import { useState } from 'react';
import { Button } from './ui/button';

type CommentFormProps = {
  shortName: string;
}

const CommentForm = ({shortName}: CommentFormProps) => {

  const [commentBody, setCommentBody] = useState("")
  
  const submitComment = async () => {
    console.log(shortName)
    console.log(commentBody)
    const response = await api.post(`/api/v1/comments`, {
      shortName: shortName,
      commentBody: commentBody
    })
    console.log(response.data)
  }

  return (
    <div>
      <input type="text" value={commentBody} onChange={(event) => {setCommentBody(event.target.value); event.preventDefault()}} />
      <Button variant={"secondary"} onClick={submitComment} className='mx-5'>Submit</Button>
    </div>
  )
}

export default CommentForm