const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      content: 'Nam beatae repellat est dolor',
      publishedDate: new Date('2022.01.01'),
      photo: './photos/1.jpg',
      price: 'Main content of the article',
      localization: 'News',
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Article title 2',
      content: 'Nam beatae repellat est dolor',
      publishedDate: new Date('2022.01.01'),
      photo: './photos/1.jpg',
      price: 'Main content of the article',
      localization: 'News',
      author: 'John Doe',
    },
  ],
  permissions: {
    authorised: false,
  },
};

export default initialState;
