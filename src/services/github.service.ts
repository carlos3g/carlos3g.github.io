import axios from 'axios';

import { IProject } from '../types';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Accept: 'application/vnd.github.v3+json' },
});

export default {
  async getRepositories(repositoriesSlugs: string[]): Promise<IProject[]> {
    const repositories = repositoriesSlugs.map(this.getRepository.bind(this));

    return Promise.all(repositories);
  },

  async getRepository(slug: string): Promise<any> {
    const repository = (await api.get(`/repos/${slug}`)).data;
    const techs = await this.getRepositoryLanguages(slug);

    return { ...repository, techs };
  },

  async getRepositoryLanguages(slug: string): Promise<string[]> {
    const techs = Object.keys((await api.get(`/repos/${slug}/languages`)).data);

    return techs;
  },
};
