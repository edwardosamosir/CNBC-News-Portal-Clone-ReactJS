import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dateFormatter } from "../helpers"


export default function NewsTableRow({post}) {
    return (
        <>
            <tr>
                <td style={{ width: "1000px"}}>
                    <Link
                        to={`/detail/${post.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <h4>{post.title}</h4>
                        <span style={{ color: "black", marginRight: "1rem" }}>{dateFormatter(post.createdAt)}</span>
                        <span style={{ color: 'rgba(0,85,148,255)', fontWeight: "bold" }}>
                            {post.author.email}
                        </span>
                    </Link>
                </td>
                <td rowSpan={2}>
                    <img
                        src={post.imgUrl}
                        height="140px"
                        width="250px"
                        alt="..."
                    />
                </td>
            </tr>
            <tr>

            </tr>
        </>
    )

}
