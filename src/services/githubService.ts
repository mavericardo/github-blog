import axios from 'axios';

const apiGithubUrl = 'http://api.github.com';

function setupAxios() {
    const client = axios.create({
        baseURL: apiGithubUrl,
    });

    const getUserInfo = async (userName: string) => {
        const { data } = await client.get(`/users/${userName}`);
        return data;
    };

    const getUserRepositories = async (userName: string) => {
        const { data } = await axios.get(`/users/${userName}/repos`);
        return data;
    };

    return {
        client,
        getUserInfo,
        getUserRepositories
    };
}

export const githubService = setupAxios();