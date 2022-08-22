const user = {
  name: 'Carlos Mesquita',
  role: 'Software engineer',
  avatar: 'https://github.com/carlos3g.png',
  description:
    'Eu sou o Carlos, um jovem apaixonado por aprender coisas novas, tecnologia, programação e algoritmos! Atualmente eu sou um estudante no Instituto Federal do Piauí.',
};

const socialMedias = [
  { title: 'Github', url: 'https://github.com/carlos3g' },
  { title: 'Instagram', url: 'https://www.instagram.com/c4rlos3g' },
  { title: 'Twitter', url: 'https://twitter.com/c4rlos3g' },
  { title: 'Linkedin', url: 'https://www.linkedin.com/in/carlos3g' },
  { title: 'Telegram', url: 'https://t.me/c4rlos3g' },
  { title: 'Codepen', url: 'https://codepen.io/carlos3g' },
  { title: 'Medium', url: '	https://medium.com/@carlos3g' },
];

const githubProjects = [
  'carlos3g/faire',
  'carlos3g/expo-anime-finder',
  'carlos3g/expo-bmi-calc',
  'carlos3g/proffy',
  'carlos3g/boxy',
  'carlos3g/getkcal',
];

export const getStaticData = () => ({ githubProjects, socialMedias, user });
