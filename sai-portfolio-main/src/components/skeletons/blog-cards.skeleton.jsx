import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import Card from "../layout/card"

const BlogCardsSkeleton = () => {
    return (
        // <div className="mx-auto flex w-full max-w-sm max-h-[550px] hover:border hover:border-emerald-300 hover:scale-105 transition-all cursor-pointer flex-col justify-center items-center gap-4 p-8 md:gap-8">
        //     <div className="max-w-[320px] max-h-[150px] min-h-[150px]">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton count={10}/>
                </SkeletonTheme>
        //     </div>
        // </div>
    )
}

export default BlogCardsSkeleton