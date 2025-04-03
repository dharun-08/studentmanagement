import React from 'react'
import { useNavigate } from 'react-router-dom';

const DeleteStudent = () => {
  const navigate = useNavigate();
  return (
    <div>
      DeleteStudent
      <button
        className="back-btn p-2 bg-red-600 text-white rounded-lg"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
}

export default DeleteStudent