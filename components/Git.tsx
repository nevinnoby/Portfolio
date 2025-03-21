"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GitProps {
  isDark: boolean;
}

const GITHUB_USERNAME = "nevinnoby"; // Replace with your GitHub username

const Git = ({ isDark }: GitProps) => {
  const [githubStats, setGithubStats] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const userData = await userResponse.json();

        const reposResponse = await fetch(userData.repos_url);
        const reposData = await reposResponse.json();

        const orgsResponse = await fetch(userData.organizations_url);
        const orgsData = await orgsResponse.json();

        const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);

        setGithubStats({ ...userData, totalStars, totalForks, reposCount: reposData.length });
        setRepos(reposData);
        setOrganizations(orgsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <div className="min-h-screen p-6 transition-all duration-500 flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My GitHub Stats 🚀
      </motion.h1>

      {loading ? (
        <div className="animate-pulse flex space-x-4">
          <div className="w-48 h-48 bg-gray-700 rounded-full"></div>
          <div>
            <div className="h-6 w-32 bg-gray-700 rounded mb-2"></div>
            <div className="h-6 w-40 bg-gray-700 rounded"></div>
          </div>
        </div>
      ) : (
        <>
          <motion.div
            className={`${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} p-6 rounded-lg shadow-lg w-[400px] text-center`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={githubStats?.avatar_url}
              alt="GitHub Avatar"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
              whileHover={{ scale: 1.1 }}
            />
            <h2 className="text-2xl font-semibold">{githubStats?.name}</h2>
            <p className="text-gray-400">@{githubStats?.login}</p>
            <p className="text-gray-500 text-sm">{githubStats?.bio}</p>

            <div className="mt-4 space-y-2">
              <p>📌 Repositories: <span className="font-semibold">{githubStats?.reposCount}</span></p>
              <p>🌟 Stars: <span className="font-semibold">{githubStats?.totalStars}</span></p>
              <p>🍴 Forks: <span className="font-semibold">{githubStats?.totalForks}</span></p>
              <p>🤝 Followers: <span className="font-semibold">{githubStats?.followers}</span></p>
              <p>🔗 Following: <span className="font-semibold">{githubStats?.following}</span></p>
              <p>🗓️ Joined: <span className="font-semibold">{new Date(githubStats?.created_at).toLocaleDateString()}</span></p>
            </div>

            <motion.a
              href={githubStats?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View GitHub Profile 🔗
            </motion.a>
          </motion.div>

          {/* GitHub Badges */}
          <div className="mt-10 w-full text-center">
            <h2 className="text-3xl font-semibold mb-4">🏆 GitHub Badges</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <img src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=${isDark ? "tokyonight" : "default"}`} alt="GitHub Streak" /> */}
              <img src={`https://github-profile-trophy.vercel.app/?username=${GITHUB_USERNAME}&theme=${isDark ? "tokyonight" : "default"}`} alt="GitHub Trophies" />
              <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=${isDark ? "tokyonight" : "default"}`} alt="Most Used Languages" />
            </div>
          </div>

          {/* Repositories List */}
          <motion.div className="mt-10 w-full max-w-4xl">
            <h2 className="text-3xl font-semibold mb-4">🔍 My Repositories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.slice(0, 6).map((repo) => (
                <motion.div key={repo.id} className={`${isDark ? "bg-gray-800" : "bg-gray-100"} p-4 rounded-lg shadow-md`} whileHover={{ scale: 1.05 }}>
                  <h3 className="text-lg font-semibold text-green-400">{repo.name}</h3>
                  <p className="text-sm text-gray-400">{repo.description || "No description available"}</p>
                  <div className="flex justify-between text-sm mt-2">
                    <span>🌟 {repo.stargazers_count} Stars</span>
                    <span>🍴 {repo.forks_count} Forks</span>
                  </div>
                  <a href={repo.html_url} target="_blank" className="text-blue-400 mt-2 inline-block" rel="noopener noreferrer">
                    View Repository →
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Organizations */}
          {organizations.length > 0 && (
            <motion.div className="mt-10 w-full max-w-4xl">
              <h2 className="text-3xl font-semibold mb-4">🏢 Organizations</h2>
              <div className="flex space-x-4">
                {organizations.map((org) => (
                  <motion.img key={org.id} src={org.avatar_url} alt={org.login} className="w-20 h-20 rounded-full border-2 border-white" whileHover={{ scale: 1.2 }} />
                ))}
              </div>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default Git;
