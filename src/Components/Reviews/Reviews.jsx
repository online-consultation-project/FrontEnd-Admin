import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import Loader from "../ReusableComp/Loader";

const ReviewSection = () => {
  const [getReviews, setGetReviews] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const _id = localStorage.getItem("adminId");

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/user/reviews?docId=${_id}`
        );
        setGetReviews(response.data);
        setLoading(false);
      } catch (error) {
        setError("Reviews are Not Found");
        setLoading(false);
      }
    };
    getReviews();
  }, [_id]);

  if (Loading) {
    return (
      <div className=" w-full text-center flex justify-center items-center font-semibold ">
       <Loader/>
      </div>
    );
  }
  if (error) {
    return (
      <p className=" w-full text-center flex justify-center items-center h-[400px] font-semibold ">
        {error}
      </p>
    );
  }
  return (
    <div className=" min-h-screen">
      <div className="max-w-full max-md:w-full mx-auto  rounded-lg  max-md:p-1 p-1">
        <div>
          {getReviews.map((review) => (
            <div
              key={review._id}
              className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 border pb-4 mb-4 bg-white border-gray-300 p-5 rounded-lg"
            >
              <img
                src={`http://localhost:7000/upload/${review.userpic}`}
                alt={review.username}
                className="w-16 h-16 sm:w-12 sm:h-12 rounded-full mx-auto sm:mx-0"
              />

              <div className="mt-4 sm:mt-0">
                <div className="flex justify-between items-center max-md:flex-col">
                  <h3 className="font-semibold text-lg">{review.username}</h3>
                  <span className="text-sm max-sm:text-xs text-gray-500">
              Reviewed on {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {review.title && (
                  <p className="text-green-600 font-medium">
                    👍 {review.title}
                  </p>
                )}
                <p className="text-gray-600 mt-2">{review.review}</p>

                <div className="flex items-center mt-2  text-yellow-500">
                    {[...Array(5)].map((_, index) => {
                      if (index < review.rating) {
                        return <IoStar key={index} />;
                      }
                      return <IoStarHalf key={index} />;
                    })}
                  </div>
              </div>
            </div>
          ))}
        </div>

    
        {/* <div className="flex justify-center mt-4">
          <button className="text-blue-700 text-sm items-center px-4 py-2 bg-blue-300 hover:bg-blue-700 hover:text-white rounded-md transition duration-300">
            Show all Reviews (10)
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ReviewSection;
