import React from 'react'
import EditPostForm from '../../components/EditPostForm/EditPostForm'

const EditPostPage = ({token}) => {
  return (
    <>
    <EditPostForm token={token}/>
    </>
  )
}

export default EditPostPage