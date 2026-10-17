import { useState, useEffect } from 'react';

export function useGitHubData(username = 'indrasingh29') {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHub() {
      // Check session cache first
      try {
        const cachedProfile = sessionStorage.getItem(`gh_profile_${username}`);
        const cachedRepos = sessionStorage.getItem(`gh_repos_${username}`);
        if (cachedProfile && cachedRepos) {
          setProfile(JSON.parse(cachedProfile));
          setRepos(JSON.parse(cachedRepos));
          setLoading(false);
          return;
        }
      } catch {
        // Ignore session storage errors
      }

      try {
        setLoading(true);
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error('GitHub API rate limit or network error');
        }

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        if (isMounted) {
          const filteredRepos = Array.isArray(reposData)
            ? reposData.filter((r) => !r.fork && r.name !== username)
            : [];

          setProfile(profileData);
          setRepos(filteredRepos);
          setError(null);

          try {
            sessionStorage.setItem(`gh_profile_${username}`, JSON.stringify(profileData));
            sessionStorage.setItem(`gh_repos_${username}`, JSON.stringify(filteredRepos));
          } catch {
            // Ignore cache write errors
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          // Graceful authentic fallback
          setProfile({
            login: username,
            name: 'Indra Singh Jeena',
            html_url: `https://github.com/${username}`,
            avatar_url: 'https://avatars.githubusercontent.com/u/169467245?v=4',
            public_repos: 3,
            followers: 0,
            bio: 'Aspiring Full-Stack & MERN Developer',
          });
          setRepos([
            {
              id: 1,
              name: 'ai-resume-analyzer',
              description: 'Production-ready AI Resume Analyzer built with Next.js, Node.js, MongoDB, and Tailwind CSS.',
              language: 'TypeScript',
              html_url: `https://github.com/${username}/ai-resume-analyzer`,
              stargazers_count: 0,
              updated_at: new Date().toISOString(),
            },
            {
              id: 2,
              name: 'mini-hms-task1',
              description: 'Mini Hospital Management System - Django and Serverless email service',
              language: 'Python',
              html_url: `https://github.com/${username}/mini-hms-task1`,
              stargazers_count: 0,
              updated_at: new Date().toISOString(),
            },
          ]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchGitHub();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { profile, repos, loading, error };
}
