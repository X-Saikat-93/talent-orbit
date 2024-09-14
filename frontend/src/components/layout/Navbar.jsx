import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Link } from "react-router-dom";
import { Bell, Home, LogOut, User, Users, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  const queryClient = useQueryClient();

  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => axiosInstance.get("/notifications"),
    enabled: !!authUser,
  });

  const { data: connectionRequests } = useQuery({
    queryKey: ["connectionRequests"],
    queryFn: async () => axiosInstance.get("/connections/requests"),
    enabled: !!authUser,
  });

  const { mutate: logout } = useMutation({
    mutationFn: () => axiosInstance.post("/auth/logout"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const unreadNotificationCount = notifications?.data.filter(
    (notif) => !notif.read
  ).length;
  const unreadConnectionRequestsCount = connectionRequests?.data?.length;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-10'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center py-3'>
          <div className='flex items-center space-x-4'>
            <Link to='/'>
              <img
                className='h-8 rounded'
                src='/small-logo.png'
                alt='LinkedIn'
              />
            </Link>
          </div>
          <div className='hidden md:flex items-center gap-2 md:gap-6'>
            {authUser ? (
              <>
                <Link
                  to={"/"}
                  className='text-neutral flex flex-col items-center dark:text-white hover:text-blue-500 dark:hover:text-blue-300'>
                  <Home size={20} />
                  <span className='text-xs hidden md:block'>Home</span>
                </Link>
                <Link
                  to='/network'
                  className='text-neutral flex flex-col items-center relative dark:text-white hover:text-blue-500 dark:hover:text-blue-300'>
                  <Users size={20} />
                  <span className='text-xs hidden md:block'>My Network</span>
                  {unreadConnectionRequestsCount > 0 && (
                    <span
                      className='absolute -top-1 -right-1 md:right-4 bg-blue-500 text-white text-xs
                            rounded-full size-3 md:size-4 flex items-center justify-center'>
                      {unreadConnectionRequestsCount}
                    </span>
                  )}
                </Link>
                <Link
                  to='/notifications'
                  className='text-neutral flex flex-col items-center relative dark:text-white hover:text-blue-500 dark:hover:text-blue-300'>
                  <Bell size={20} />
                  <span className='text-xs hidden md:block'>Notifications</span>
                  {unreadNotificationCount > 0 && (
                    <span
                      className='absolute -top-1 -right-1 md:right-4 bg-blue-500 text-white text-xs
                            rounded-full size-3 md:size-4 flex items-center justify-center'>
                      {unreadNotificationCount}
                    </span>
                  )}
                </Link>
                <Link
                  to={`/profile/${authUser.username}`}
                  className='text-neutral flex flex-col items-center dark:text-white hover:text-blue-500 dark:hover:text-blue-300'>
                  <User size={20} />
                  <span className='text-xs hidden md:block'>Me</span>
                </Link>
                <button
                  className='flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100'
                  onClick={() => logout()}>
                  <LogOut size={20} />
                  <span className='hidden md:inline'>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='btn btn-ghost dark:text-white hover:text-blue-500 dark:hover:text-blue-300'>
                  Sign In
                </Link>
                <Link
                  to='/signup'
                  className='btn btn-primary dark:bg-blue-700 dark:hover:bg-blue-600'>
                  Join now
                </Link>
              </>
            )}
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              className='text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {authUser ? (
              <>
                <Link
                  to={"/"}
                  className='text-neutral flex items-center dark:text-white hover:text-blue-500 dark:hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium'>
                  <Home size={20} />
                  <span className='ml-3'>Home</span>
                </Link>
                <Link
                  to='/network'
                  className='text-neutral flex items-center relative dark:text-white hover:text-blue-500 dark:hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium'>
                  <Users size={20} />
                  <span className='ml-3'>My Network</span>
                  {unreadConnectionRequestsCount > 0 && (
                    <span
                      className='absolute -top-1 -right-1 bg-blue-500 text-white text-xs
                            rounded-full size-3 flex items-center justify-center'>
                      {unreadConnectionRequestsCount}
                    </span>
                  )}
                </Link>
                <Link
                  to='/notifications'
                  className='text-neutral flex items-center relative dark:text-white hover:text-blue-500 dark:hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium'>
                  <Bell size={20} />
                  <span className='ml-3'>Notifications</span>
                  {unreadNotificationCount > 0 && (
                    <span
                      className='absolute -top-1 -right-1 bg-blue-500 text-white text-xs
                            rounded-full size-3 flex items-center justify-center'>
                      {unreadNotificationCount}
                    </span>
                  )}
                </Link>
                <Link
                  to={`/profile/${authUser.username}`}
                  className='text-neutral flex items-center dark:text-white hover:text-blue-500 dark:hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium'>
                  <User size={20} />
                  <span className='ml-3'>Me</span>
                </Link>
                <button
                  className='flex items-center space-x-1  text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 px-3 py-2 rounded-md text-base font-medium'
                  onClick={() => logout()}>
                  <LogOut size={20} />
                  <span className='ml-3'>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='btn btn-ghost dark:text-white hover:text-blue-500 dark:hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium'>
                  Sign In
                </Link>
                <Link
                  to='/signup'
                  className='btn btn-primary dark:bg-blue-700 dark:hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium'>
                  Join now
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
