const initialState = {
  posts: [
    {
      id: '1',
      title: 'Krzesło bez jednej nogi',
      content: 'Nam beatae repellat est dolor',
      publishedDate: new Date('2022.01.01'),
      photo: './photos/1.jpg',
      price: '2',
      localization: 'Poznań',
      user: {
        login: 'johnDoe',
        password: 'Aecq12',
        fullName: 'John Doe',
        avatar: './av012.jpg',
        phoneNumber: '123321123',
      },
    },
    {
      id: '2',
      title: 'Pralka Electorlux - stan idealny',
      content: 'Nam beatae repellat est dolor',
      publishedDate: new Date('2022.01.01'),
      photo: './photos/1.jpg',
      price: '20',
      localization: 'Warsaw',
      user: {
        login: 'peter_smth',
        password: 'fse01EF',
        fullName: 'Peter Smith',
        avatar: './av032.jpg',
        phoneNumber: '0043123444',
      },
    },
    {
      id: '3',
      title: 'Tani odkurzacz bezworkowy',
      content: 'Nam beatae repellat est dolor',
      publishedDate: new Date('2022.01.01'),
      photo: './photos/1.jpg',
      price: '126',
      localization: 'Gdańsk',
      user: {
        login: 'peter_smth',
        password: 'fse01EF',
        fullName: 'Peter Smith',
        avatar: './av032.jpg',
        phoneNumber: '0043123444',
      },
    },
  ],
  permissions: {
    authorised: false,
    login: 'peter_smth',
  },
};

export default initialState;
