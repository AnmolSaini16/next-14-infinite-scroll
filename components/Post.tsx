import React from "react";

import { IPost } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

type Props = { post: IPost };

const Post = ({ post }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="truncate break-words">{post?.title}</CardTitle>
      </CardHeader>
      <CardContent>{post?.body}</CardContent>
    </Card>
  );
};

export default Post;
