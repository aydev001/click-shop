import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AdminUsers = () => {
  const { users } = useSelector((state) => state.users);

  // Adminlarni birinchi joylashtiramiz
  const sortedUsers = [...users].sort((a, b) => b.isAdmin - a.isAdmin);
  const navigate = useNavigate()
  return (
    <div className="p-[5px] overflow-x-auto">
      <table className="w-full min-w-[600px] shadow-sm rounded-sm overflow-hidden text-[14px]">
        <thead>
          <tr className="bg-blue-100 text-gray-700 border-[1px] border-blue-200">
            <th className="py-1 px-4 text-left border-r border-gray-300">Username</th>
            <th className="py-1 px-4 text-left border-r border-gray-300">Email</th>
            <th className="py-1 px-4 text-center border-r border-gray-300">Active</th>
            <th className="py-1 px-4 text-center">Admin</th>
          </tr>
        </thead>
        <tbody className="border-[1px]">
          {sortedUsers.map((user) => (
            <tr onClick={() => navigate(`/admin/users/${user._id}`)} key={user.email} className="border-t border-gray-300 hover:bg-gray-50 cursor-pointer">
              <td className="py-1 font-medium px-4 border-r border-gray-300">{user.userName}</td>
              <td className="py-1 font-medium px-4 border-r border-gray-300">{user.email}</td>
              <td className="py-1 font-medium px-4 text-center border-r border-gray-300">
                {user.isActive ? "✅" : "❌"}
              </td>
              <td className="py-1 font-medium px-4 text-center">{user.isAdmin ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
