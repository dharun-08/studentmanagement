import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-80 h-80 bg-slate-400 flex flex-col justify-center items-center gap-y-5">
        <button className="p-3 bg-sky-500 rounded-lg text-white"
        onClick={() => navigate('/addStudent')}
        >
          Add Student
        </button>
        <button className="p-3 bg-sky-500 rounded-lg text-white"
        onClick={() => navigate('/viewStudents')}
        >
          View All Student
        </button>
        <button className="p-3 bg-sky-500 rounded-lg text-white"
        onClick={() => navigate('/viewSingleStudent')}
        >
          View Single Student
        </button>
        <button className="p-3 bg-sky-500 rounded-lg text-white"
        onClick={() => navigate('/deleteStudent')}
        >
          Delete A Student
        </button>
      </div>
    </div>
  );
}

export default Home