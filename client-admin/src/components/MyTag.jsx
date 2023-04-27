import React from 'react'
import dateFormatter from '../helpers/dateFormatter'

export default function MyTag({tag, index}) {
  return (
    <tr>
        <td>{++index}</td>
        <td>{tag.name}</td>
        <td>{tag.Post.title}</td>
        <td>{dateFormatter(tag.createdAt)}</td>
        <td>{dateFormatter(tag.updatedAt)}</td>
    </tr>
  )
}
