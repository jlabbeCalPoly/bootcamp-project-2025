import React, { Suspense } from "react";
import CenteredContainer from "@/components/centeredContainer/centeredContainer";
import Loading from "@/components/loading/loading";
import FetchBlogData from "@/src/fetchBlogData/fetchBlogData";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default function BlogPage({params}: Props) {
    return (
        <Suspense fallback={
            <CenteredContainer>
                <Loading size="large"/>
            </CenteredContainer>
        }>
            <FetchBlogData params={params} />
        </Suspense>
    )

}