import { useLoadUserQuery } from "@/features/api/authApi";
import Course from "./Course";

const MyLearning = () => {

    const {data, isLoading} = useLoadUserQuery();

    const myLearning = data?.user.enrolledCourses || [];

  return (
    <div className="max-w-4xl mx-auto my-10 px-10 md:px-0">
        <h1 className="font-bold text-2xl">My Learning</h1>
        <div className="my-5">
            {
                isLoading ? (
                    <MyLearningSkeleton />
                ) : myLearning.length === 0 ? 
                    (<p>You are not Enrolled in any Couses.</p>) 
                    : 
                    (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {
                            myLearning.map((course, index) => (<Course key={index} course={course} />))
                        }
                      </div>
                    )
            }
        </div>
    </div>
  )
}

export default MyLearning;

// Skeleton component for loading state
const MyLearningSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
        ></div>
      ))}
    </div>
);