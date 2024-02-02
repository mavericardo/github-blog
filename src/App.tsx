import { useEffect, useState } from 'react';
import './App.css'
import Profile from './components/Profile';
import Repository from './components/Repository';
import { githubService } from './services/githubService';

type UserInfoState = {
  name: string;
  bio: string;
  avatarUrl: string;
  userName: string;
  company: string;
  followers: number;
  following: number;
  urlGithub: string;
}

function App() {
  const userName = 'mavericardo';
  const [userInfo, setUserInfo] = useState<UserInfoState>();

  useEffect(() => {
    async function getUserInfo() {
      const response = await githubService.getUserInfo(userName);
      const userInfo = {
        avatarUrl: response.avatar_url,
        userName: response.login,
        urlGithub: response.html_url,
        ...response
      };
      setUserInfo(userInfo);
    }
    
    getUserInfo();
  }, []);


  return (
    <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Profile avatarUrl={userInfo?.avatarUrl || ''} />
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Repository />
        </div>
      </div>
    </div>
  );
}

export default App
